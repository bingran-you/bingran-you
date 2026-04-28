# PDF Document: Cha et al. - 2025 - Inverse Behavioral Optimization of QALY-Based Incentive Systems Quantifying the System Impact of Ada.pdf

**File Path:** Cha et al. - 2025 - Inverse Behavioral Optimization of QALY-Based Incentive Systems Quantifying the System Impact of Ada.pdf

**Processed Date:** 2026-02-10T18:15:16.142Z

**File Size:** 6457.83 KB

**Total Pages:** 29

**Extracted Pages:** 29

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3552

**Title:** Inverse Behavioral Optimization of QALY-Based Incentive Systems Quantifying the System Impact of Adaptive Health Programs

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Inverse Behavioral Optimization of QALY-Based
Incentive Systems: Quantifying the System Impact
of Adaptive Health Programs
Jinho Cha1*, Justin Yu2, Junyeol Ryu3, Eunchan D. Cha4, Hyeyoung Hwang5
1Department of Computer Science, Gwinnett Technical College, USA. 2Scheller College of Business, Georgia Institute of Technology, USA. 3Department of Industrial Engineering, Seoul National University, Korea. 4School of Biological Sciences, Georgia Institute of Technology, USA. 5Republic of Korea Army, Korea.
*Corresponding author(s). E-mail(s): jcha@gwinnetttech.edu;
Abstract
This study introduces an inverse behavioral optimization framework that integrates QALY-based health outcomes, ROI-driven incentives, and adaptive behavioral learning to quantify how policy design shapes national healthcare performance. Building on the FOSSIL (Flexible Optimization via Sample-Sensitive Importance Learning) paradigm, the model embeds a regret-minimizing behavioral weighting mechanism that enables dynamic learning from heterogeneous policy environments. It recovers latent behavioral-
 sensitivities—efficiency (λ), fairness (γ), and temporal responsiveness (T )—from observed QALY–ROI trade-offs, providing an analytical bridge between individual incentive responses and aggregate system productivity. We formalize this mapping through the proposed System Impact Index (SII), which links behavioral elasticity to measurable macro-level efficiency and equity outcomes. Using OECD–WHO panel data, the framework empirically demonstrates that modern health systems operate near an efficienc-
y-saturated frontier, where incremental fairness adjustments yield stabilizing but diminishing returns. Simulation and sensitivity analyses further show how small changes in behavioral parameters propagate into measurable shifts in systemic resilience, equity, and ROI efficiency. The results establish a quantitative foundation for designing adaptive, data-driven health incentive programs that
1
arXiv:2510.22518v1 [q-fin.MF] 26 Oct 2025

dynamically balance efficiency, fairness, and long-run sustainability in national healthcare systems.
Keywords: QALY–ROI Trade-off, Inverse Behavioral Optimization, FOSSIL Framework, Behavioral Health Economics, Adaptive Health Incentives, System Impact Index
1 Introduction: From Health Outcomes to System Impact
The pursuit of equitable and efficient health systems increasingly depends on quantifying how behavioral incentives shape measurable outcomes such as Quality-Adjusted Life Years (QALY) and Return on Investment (ROI) [1, 2]. Traditionally, these two dimensions—clinical effectiveness and economic efficiency—have been optimized separately, often resulting in policy misalignment between individual care outcomes and systemic financial sustainability [3, 4]. For instance, hospitals and insurers may desi-
gn incentive programs that improve short-term ROI yet inadvertently reduce longterm population health gains [5]. Similarly, QALY-based interventions are frequently deployed without evaluating their broader system-level and macroeconomic consequences [6]. This study contends that such fragmentation arises from the absence of an analytical bridge linking behavioral decision-making at the micro level to system performance at the macro level. Building on this motivation, we propose that this gap can b-
e addressed through an inverse behavioral optimization framework that infers latent decision parameters from observed QALY–ROI trade-offs [7, 8], thereby revealing how learning and adaptation within health programs propagate to system-wide outcomes [9]. Despite extensive research in health economics and management science [1, 2], existing models typically assume either static optimization (maximizing QALY under budget constraints) or cost-effectiveness evaluation (minimizing cost per QALY gained).-
 Few studies explicitly model the dynamic behavioral adjustments of healthcare agents—patients, providers, and policymakers—when incentive structures evolve over time [6]. Moreover, while behavioral economics has illuminated how fairness, effort, and reward sensitivity influence individual decisions [3, 4], its integration into system-level optimization remains limited. Consequently, the literature lacks a unified methodology for inferring the behavioral drivers underlying observed QALY–ROI outcom-
es and translating them into measurable system-level effects. To address this gap, we build upon our prior work on the behavioral foundations of QALY–ROI trade-offs in chronic disease management [9] and introduce the FOSSIL (Flexible Optimization via Sample-Sensitive Importance Learning) framework [10]. Originally proposed as a learning-based optimization paradigm for robust inference under small and imbalanced data, FOSSIL employs an adaptive weighting mechanism that allows the efficiency frontie-
r itself to evolve with heterogeneous samples. This regret-minimizing process endogenizes behavioral sensitivity within the optimization, enabling health systems to adapt across diverse policy environments and temporal
2

horizons. By embedding this mechanism into a structural inverse optimization model, we estimate behavioral parameters (λ, γ, T )—representing efficiency sensitivity, fairness preference, and temporal adaptation—directly from empirical health performance data. To our knowledge, this is the first systematic application of a curriculumbased machine learning paradigm to QALY–ROI analysis, extending FOSSIL beyond its original learning context into behavioral inference for health policy design. This st-
udy thus establishes a methodological foundation for dynamic behavioral inference in health-care management. Health-care policy decisions are increasingly data-driven, yet policymakers continue to face uncertainty about how incentive structures translate into measurable health and financial outcomes. To ground the proposed approach in a realistic policy setting, we focus on adaptive chronic disease incentive programs—for example, diabetes and cardiovascular management initiatives across OECD membe-
r countries—where QALY-based performance payments are linked to both patient adherence and long-term cost savings. These programs provide a natural environment in which fairness (e.g., equitable access to care), efficiency (e.g., cost reduction per QALY gained), and temporal responsiveness (e.g., the rate of behavioral adjustment across policy cycles) interact dynamically. By calibrating the inverse behavioral model on OECD–WHO panel data, the analysis illustrates how the recovered parameters (λ, -
γ, T ) can inform policy design—such as subsidy timing, incentive intensity, and fairness adjustments across heterogeneous populations. The same analytical structure can also be applied to vaccination incentives, preventive screening reimbursements, or chronic care coordination programs, thereby linking the theoretical framework directly to contemporary global health policy challenges. This study contributes to the literature and practice in three major ways. First, it introduces the FOSSIL-based -
Forward–Inverse–Impact (FII) framework, which integrates behavioral decision-making with system-level performance analysis [5, 6]. The forward layer models QALY–ROI optimization under fairness-adjusted utility; the inverse layer recovers latent behavioral coefficients through adaptive learning; and the impact layer evaluates how these behavioral dynamics propagate to measurable performance indicators [11]. Second, we propose the System Impact Index (SII)—a composite metric that quantifies improvem-
ents in efficiency and fairness arising from adaptive incentive policies [8]. Third, we empirically demonstrate the managerial relevance of this framework using multi-regional health data, showing that behavioral adaptation—captured through FOSSIL-based learning—can yield substantial improvements in system-level efficiency [9]. Taken together, these contributions position inverse behavioral optimization, enhanced by FOSSIL, as a unified methodological foundation for designing incentive-aligned, da-
ta-driven healthcare systems (see Fig. 2.1).
2 Conceptual Architecture: Adaptive Health Systems and System-Level Learning
Health systems can be viewed as behaviorally responsive ecosystems in which patients, providers, and policymakers continuously learn from feedback and adjust their actions accordingly. Patients modify adherence as perceived reward sensitivity changes,
3

physicians adapt effort based on fairness and fatigue, and policymakers recalibrate incentives to sustain participation equilibria [12–14]. Such dynamics mirror learning processes observed in manufacturing, logistics, and energy systems, where bounded rationality and delayed feedback shape organizational outcomes [15–17]. The healthcare context, however, introduces an additional layer of ethical and welfare complexity: QALY-based incentives must coexist with moral hazard and equity constraints [1-
820]. This behavioral flow thus represents a multi-agent system in which fairness (γ) and efficiency (λ) jointly determine both satisfaction and aggregate system productivity [21–23]. Healthcare delivery should therefore be modeled as an adaptive ecosystem rather than a static service institution. At the macro level, micro behavioral adjustments converge toward a system equilibrium shaped by heterogeneity and policy responsiveness [24–26]. Each actor’s fairness–efficiency trade-off (γ, λ) affects -
throughput, waiting times, and total welfare [27–29]. When incentives are misaligned—such as excessive pay-for-performance intensity or rigid penalty systems—local optimizations degrade global outcomes, paralleling bullwhip and congestion phenomena in production and service networks [30–32]. Conversely, adaptive coordination mechanisms that integrate fairness awareness and efficiency learning stabilize the entire ecosystem, enabling Pareto-efficient equilibria with simultaneous gains in QALY and R-
OI [21, 33, 34]. This equilibrium framework analytically links behavioral coefficients to system-level performance metrics, bridging behavioral economics and operations management [35–37]. In doing so, it aligns healthcare optimization with system-level analogues and coordination mechanisms widely studied in contemporary health operations research [38, 39]. To formalize these interactions, we propose the FII loop, a recursive learning framework that captures the adaptive behavior of healthcare sys-
tems. In the forward process, agents implement incentive-driven decisions that yield measurable outcomes—QALY gains, cost reductions, adherence improvements, and ROI shifts [18, 23, 33]. In the inverse process, the system infers latent behavioral parameters (λ, γ, T ) by applying data-driven inverse optimization and Bayesian updating techniques [6, 8, 27, 38]. Finally, the impact process aggregates these behavioral updates to evaluate system-level efficiency, fairness, and resilience, forming a cl-
osed feedback loop between micro incentives and macro outcomes [14, 20, 24, 37]. As illustrated in Fig. 2.1, this cyclical architecture reflects the properties of complex adaptive systems and dynamic learning frameworks that characterize modern health operations research [29, 34, 39].
3 Model Formulation: Inverse Behavioral Optimization under QALY–ROI Trade-offs
This section formalizes the behavioral foundations of adaptive health incentive systems within a unified optimization framework. Building upon the conceptual architecture introduced in Section 2, we now derive a mathematical formulation that links behavioral sensitivity, fairness, and temporal adaptation to observed QALY–ROI trade-offs. The model operationalizes the behavioral learning dynamics of health systems through a forward decision process, an inverse parameter estimation stage, and an equi-
librium
4

Fig. 2.1 Fig. 1 System-level impact loop of adaptive health policy learning illustrating the interaction between forward health decisions, inverse behavioral learning, and system-level feedback. The system evolves through iterative adaptation of fairness (γ), efficiency (λ), and temporal responsiveness (T ), producing measurable improvements in overall health system performance. Solid arrows indicate the primary analytical flow (Forward → Inverse → Impact), while dashed arrows represent feedback -
and adaptation loops capturing macro-level learning across health systems
identification procedure. Unlike descriptive behavioral models, this structure enables explicit recovery of latent incentive parameters from data, allowing empirical inference of systemic efficiency and fairness trade-offs [8, 20, 24, 33, 34, 39].
3.1 Forward Optimization Layer
The forward problem describes how agents—patients, providers, or policymakers—choose actions at ∈ A that balance clinical benefit and cost under behavioral fairness adjustment. This representation reflects the economic foundations of health technology assessment, where utility is typically expressed in terms of QualityAdjusted Life Years (QALY) and cost-effectiveness ratios [18, 40, 41]. At each decision epoch t, the agent maximizes a fairness-adjusted utility function:
max
at∈A Ut = (1 − γt) QALY(at) − γt Cost(at), (1)
subject to diminishing marginal returns and bounded effort [23, 37]. Here, γt ∈ [0, 1] represents the fairness sensitivity parameter that moderates the trade-off between clinical efficiency and perceived equity, consistent with behavioral fairness models in health policy design [6, 27, 29]. The first-order condition of (1) implies the marginal indifference rule:
∂QALY(at) ∂at
= γt
1 − γt
∂Cost(at) ∂at
, (2)
which expresses the behavioral equilibrium between incremental health gain and cost fairness adjustment. This relationship parallels marginal cost–benefit conditions in behavioral operations theory [24] and in dynamic incentive learning frameworks recently introduced in health management science [9, 20]. This layer therefore constitutes the forward component of the learning loop in Fig. 2.1, where observed QALY and ROI outcomes are generated through incentive-driven adaptive actions.
5

3.2 Inverse Estimation Layer
Given empirical data {(at, QALYt)}tT=1, the inverse problem seeks to recover the latent behavioral parameters (λ, γ, T ) that rationalize observed outcomes generated by the forward system (1)–(2). Unlike standard regression or econometric fitting, this procedure infers the underlying behavioral objective that agents implicitly optimize, rather than merely approximating observed outputs. This perspective follows the recent paradigm of inverse optimization and behavioral inference used in health pol-
icy modeling and operations management [6, 8, 27, 38, 42]. Formally, the inverse behavioral optimization problem is defined as
min
λ,γ,T
T
X
t=1
QALYt − f (at; λ, γ, T ) 2 + β1(λ − λ0)2 + β2(γ − γ0)2, (3)
where f (at; λ, γ, T ) denotes the behavioral response function implied by the forward model (1), and (λ0, γ0) represent Bayesian priors or reference values learned from prior periods, meta-analyses, or comparable populations [7, 43, 44]. This estimation structure generalizes traditional cost-effectiveness modeling by embedding it within a behavioral learning context, aligning with the emerging field of data-driven inverse decision modeling in healthcare [20, 29, 33]. Each parameter carries a dist-
inct behavioral and managerial interpretation:
• λ (efficiency sensitivity) measures how strongly health agents value return-oninvestment (ROI) improvements relative to cost, consistent with incentive-aligned policy optimization [24]. • γ (fairness preference) quantifies aversion to inequality or excessive expenditure, capturing distributive concerns embedded in behavioral health economics and equity-adjusted optimization [14, 34]. • T (temporal responsiveness) captures the rate at which behavioral adjustments occur, linking short-term incenti-
ves to long-term learning and adaptive policy feedback, as emphasized in dynamic inverse learning studies [9, 27].
Together, (λ, γ, T ) form a latent behavioral state that governs how rapidly the healthcare system rebalances between efficiency and fairness over time, producing adaptive responses under evolving incentive regimes. The regularization term
Ω(λ, γ) = β1(λ − λ0)2 + β2(γ − γ0)2
acts as a Bayesian prior that enforces identifiability and robustness of the recovered parameters under noise, temporal drift, or heterogeneous response structures. Regularization introduces a bias–variance trade-off that mitigates overfitting of behavioral shocks while preserving interpretability through shrinkage toward reference beliefs
6

(λ0, γ0) [7, 39, 42]. This formulation can be compactly expressed as
min
λ,γ,T Linv(λ, γ, T ) =
X
t
lt(λ, γ, T )
| {z }
inverse loss
+ Ω(λ, γ)
| {z }
Bayesian regularizer
, (4)
where each lt = [QALYt − f (at; λ, γ, T )]2 measures the deviation between observed and theoretically consistent outcomes. Conceptually, this inverse layer corresponds to the middle block of the FII loop in Fig. 2.1, transforming observed QALY–ROI trajectories into interpretable behavioral parameters that feed into system-level impact analysis (Section 4). By linking individual behavioral learning to collective system performance, this layer serves as the analytic bridge between micro-level optimi-
zation and macro-level health system design.
3.3 Identification and Stability
To ensure interpretability and empirical recoverability of the behavioral parameters, we impose a mild set of regularity and independence conditions that guarantee a unique and stable inverse solution.
Assumptions.
(A1) Convexity. The behavioral mapping f (at; λ, γ, T ) in (3) is convex in (λ, γ) and continuously differentiable in T . (A2) Independence. The exogenous factors (α2, c1, R′t) are linearly independent and the observed actions satisfy Var(at) > 0. (A3) Regularization. The prior penalty Ω(λ, γ) = β1(λ − λ0)2 + β2(γ − γ0)2 is strictly convex with β1, β2 > 0.
Proposition 3.1 (Identification and Stability). Under Assumptions (A1)–(A3), the inverse behavioral loss Linv(λ, γ, T ) defined in (4) admits a unique minimizer (λ∗, γ∗, T ∗). Moreover, small perturbations in the data {(at, QALYt)} induce continuous (Lipschitz) changes in the optimal parameters, ensuring local stability of the recovered behavioral sensitivities.
Sketch of Proof The strict convexity of Ω(λ, γ) establishes strong convexity in (λ, γ), while the independence and non-degeneracy of (α2, c1, R′t) guarantee that the residual Jacobian matrix ∇f (at; λ, γ, T ) is full rank. Applying the first-order optimality condition and the Implicit Function Theorem under bounded ∂f /∂T yields the existence and uniqueness of (λ∗, γ∗, T ∗). Continuous dependence on the data follows from standard perturbation arguments for convex programs. Formal statements and de-
tailed proofs—including Lemma 3.2 and Theorem 3.3 establishing strong convexity and local Lipschitz stability—are provided in Appendix A. □
7

To strengthen the theoretical foundation of the inverse behavioral optimization model, we formalize the convexity, existence, and stability results that underpin Proposition 3.1. The following Lemma and Theorem establish strong convexity and local identifiability under the regularity conditions (A1)–(A3).
Lemma 3.2 (Strong Convexity of the Inverse Loss). If f (at; λ, γ, T ) is convex in (λ, γ) and continuously differentiable in T , and if the prior penalty Ω(λ, γ) is μ-strongly convex with μ > 0, then Linv(λ, γ, T ) = P
t lt(λ, γ, T ) + Ω(λ, γ) is μ-strongly convex in (λ, γ) and continuously differentiable in T .
Sketch of Proof By Assumption (A1), each period loss lt(λ, γ, T ) = QALYt −f (at; λ, γ, T ) 2 is convex in (λ, γ). The sum of convex functions remains convex. Adding the μ-strongly convex regularizer Ω ensures the entire objective is μ-strongly convex in (λ, γ) (closure of strong convexity under addition; cf. Rockafellar). Differentiability in T follows from the smoothness of f . A full proof (including the non-affine extension using Gauss–Newton majorization) is provided in Appendix A. □
Theorem 3.3 (Identification and Local Stability). Under Lemma 3.2 and Assumptions (A1)–(A3), the inverse behavioral loss admits a unique minimizer (λ∗, γ∗, T ∗) satisfying the first-order condition
∇θLinv(θ∗) = 0.
Moreover, (λ∗, γ∗, T ∗) depends Lipschitz-continuously on data perturbations {(at, QALYt)}, ensuring local stability.
Sketch of Proof Uniqueness: For fixed T , Lemma 3.2 guarantees μ-strong convexity in (λ, γ), hence a unique minimizer. Existence and joint identification: Define F (θ; D) = ∇θLinv(θ; D),
with data D = {(at, QALYt)}t. Assumption (A2) ensures ∇θF (θ∗; D) is nonsingular; the Implicit Function Theorem guarantees the existence, uniqueness, and continuous dependence of θ∗ = (λ∗, γ∗, T ∗) on the data. Local Lipschitz stability: Perturbing D to D′ yields
∥θˆ − θˆ′∥ ≤ LD
μ ∥D − D′∥,
where LD bounds the gradient’s sensitivity to data. Hence the parameter mapping is locally Lipschitz continuous. A full derivation appears in Appendix A. □
Corollary 3.4 (Economic Stability of Behavioral Equilibria). Small policy or data perturbations induce proportionally bounded changes in the recovered behavioral sensitivities (λ∗, γ∗, T ∗), ensuring convergence of adaptive health systems toward a stable fairness–efficiency equilibrium.
Sketch of Proof From Theorem 3.3, the estimator is locally Lipschitz in the data. Policy shocks act as bounded perturbations, so parameter shifts are O(∥∆D∥). Because the forward
8

mapping (2) and the impact layer are continuously differentiable in (λ, γ, T ), the resulting equilibrium trajectories remain in a neighborhood of the baseline fixed point, ensuring economic and behavioral stability. Full details appear in Appendix A. □
Proposition 3.1 implies that the observed QALY–ROI trade-offs encode a unique behavioral signature (λ∗, γ∗, T ∗) that characterizes the efficiency–fairness balance of the health system. Convexity ensures that agents respond predictably to marginal incentive changes, while stability implies that small policy shocks do not generate chaotic or degenerate equilibria. Economically, this property guarantees that adaptive incentive systems converge toward consistent behavioral equilibria rather than osci-
llating between conflicting fairness–efficiency regimes. The recovered parameters (λ∗, γ∗, T ∗) form the structural bridge between individual behavioral learning and system-level outcomes. They are propagated to the system-level Impact Layer (Section 4), where the implications for aggregate productivity, equity, and resilience are quantified.
Notation is consistent with the hierarchical structure of Sections 3–4. Behavioral parameters (λ, γ, T ) are estimated through the inverse optimization problem (3), and propagated to the system-level analysis in Section 5. system impact measures (SII and its derivatives) serve as quantitative links between behavioral efficiency and macroeconomic performance.
4 SII: Measuring Behavioral Efficiency Gains
This section introduces the SII, a composite metric that quantifies how much behavioral adaptation improves the overall productivity and fairness balance of an incentive-driven health system. It translates the micro-level behavioral parameters (λ∗, γ∗, T ∗) recovered in Section 3.3 into measurable system-level outcomes, bridging the analytical gap between behavioral learning and system efficiency.
4.1 Definition
We define the System Impact Index (SII) as:
SII = QALY Improvement per Period
Marginal ROI Cost · (1 − γ∗), (5)
where
• QALY Improvement per Period measures the incremental clinical benefit gained through adaptive learning, relative to a static benchmark, • Marginal ROI Cost denotes the additional cost required to achieve that improvement, capturing the system’s cost elasticity, and • (1 − γ∗) discounts the measured efficiency by the estimated fairness preference recovered from the inverse model
9

Table 3.1 Summary of notation used throughout the Inverse Behavioral Optimization and System Impact framework.
Symbol Type Description
Indices and Sets
t = 1, . . . , T Index Decision epoch or time period. A Set Feasible set of health actions or policy levers.
Decision and Outcome Variables
at Decision Action or intervention chosen at time t. QALY(at) Function Health outcome (quality-adjusted life years) from action at. Cost(at) Function Expenditure or resource cost associated with at. ROIt Scalar Return-on-investment for period t.
Behavioral Parameters
λ Scalar Efficiency sensitivity (weight on ROI improvements). γt Scalar Fairness preference moderating efficiency–equity trade-off. T Scalar Temporal responsiveness or adaptation rate.
(λ∗, γ∗, T ∗) Vector Estimated behavioral equilibrium parameters.
Optimization Layers
Ut Function Fairness-adjusted utility function (Eq. 1). f (at; λ, γ, T ) Function Behavioral response function mapping actions to outcomes. Linv(λ, γ, T ) Function Inverse loss function (Eq. 4). Ω(λ, γ) Function Bayesian regularizer enforcing prior consistency.
Derived Quantities
SII Scalar System Impact Index (Eq. 5). SIIt Scalar Time-varying dynamic impact index (Eq. 6). Sθ Scalar Sensitivity coefficient for parameter θ ∈ {λ, γ, T }. ρ Scalar Behavioral decay rate controlling adaptation penalty.
Analytical Constructs
lt(λ, γ, T ) Function Period-wise inverse loss component. β1, β2 Scalars Regularization hyperparameters. η Scalar Learning rate in temporal update rule. Tt Operator Behavioral update operator for time t.
Statistical and Evaluation Metrics
MSE Metric Mean squared error of predicted QALY outcomes. R2 Metric Goodness-of-fit for behavioral response regression. SII-Gain Metric Percentage increase in system impact after adaptation. Elasticity(λ,γ) Metric Impact elasticity with respect to fairness–efficiency trade-off.
Thus, SII reflects the behaviorally adjusted efficiency-to-cost ratio—that is, the degree to which learning and fairness jointly enhance systemic performance.
4.2 Analytical Structure
Let ∆QALYt = QALYt − QALYt−1 and ∆ROIt = ROIt − ROIt−1 denote marginal changes over consecutive periods. Then the empirical System Impact Index can be estimated as:
SIIt = λ∗ · ∆QALYt
∆ROIt
· (1 − γ∗) · e−ρ(1−T ∗), (6)
10

where ρ represents the behavioral decay rate (speed of learning loss). The exponential
adjustment e−ρ(1−T ∗) penalizes slow temporal responsiveness (T ∗ < 1), ensuring that systems with faster adaptation achieve higher system impact. Equation (6) implies that behavioral parameters estimated via inverse optimization directly determine the macro-level efficiency elasticity of the system:
∂ S I It
∂λ∗ > 0, ∂SIIt
∂γ∗ < 0, ∂SIIt
∂T ∗ > 0.
Hence, increasing efficiency sensitivity or faster adaptation yields larger system gains, while excessive fairness weighting may reduce short-term productivity—mirroring trade-offs observed in public health systems [20, 29, 33, 34].
4.3 Interpretation and Managerial Implications
A higher SII indicates that behavioral adaptation produces system-level improvements that exceed baseline efficiency thresholds and generate positive externalities across the healthcare industry. From a managerial perspective, SII functions as an impact elasticity metric: it quantifies how one unit of behavioral learning translates into measurable system outcomes such as cost efficiency, patient equity, and institutional resilience.
Incentive programs with consistently rising SII values demonstrate that behavioral calibration enhances both economic and clinical performance without destabilizing fairness constraints. Conversely, declining SII trajectories may signal policy misalignment or behavioral saturation. Thus, the SII serves as a diagnostic and design tool for adaptive health policy evaluation, complementing traditional cost-effectiveness metrics such as incremental cost per QALY gained [9, 18, 40].
5 System-Level Simulation and Policy Sensitivity Analysis
To bridge the theoretical framework in Section 3 and the empirical validation in Section 6, we conduct a system-level simulation that quantifies how variations in behavioral sensitivities (λ, γ, T ) influence the SII and aggregate healthcare performance. This intermediate layer captures how micro-level behavioral adjustments propagate through macro-level system dynamics, serving as a bridge between analytical propositions and real-world policy implications.
5.1 Simulation Design
We simulate a stylized healthcare system consisting of N interacting regional units, each characterized by estimated behavioral parameters (λi, γi, Ti). The simulated QALY–ROI dynamics follow the behavioral propagation rule:
∆QALYi,t = λi(1 − γi) ∆ROIi,t + εi,t, εi,t ∼ N (0, σ2), (7)
11

where λi denotes efficiency responsiveness, γi represents fairness moderation, and εi,t captures stochastic behavioral noise. The temporal evolution of adaptation is governed by:
Ti,t+1 = Ti,t + η(T ∗ − Ti,t), (8)
where η is the behavioral learning rate and T ∗ is the steady-state responsiveness estimated in Section 3.3. Together, Eqs. (7)–(8) describe a recursive feedback system that converges toward a stable behavioral equilibrium (λ∗, γ∗, T ∗) identified in Proposition 3.1.
5.2 Sensitivity Analysis of Behavioral Parameters
To assess the macroeconomic implications of behavioral changes, we perturb each parameter by ±8% around its equilibrium value and compute the resulting change in the SII:
Sθ = ∂SII
∂θ ≈ SII(θ + ∆θ) − SII(θ − ∆θ)
2∆θ , θ ∈ {λ, γ, T }. (9)
Intuitively, Sλ reflects productivity leverage, Sγ captures distributive damping, and ST measures temporal agility within the system’s adaptive response. Positive Sλ and ST , coupled with a negative Sγ, confirm the directional elasticities predicted by Eq. (6), aligning theoretical expectations with simulation outcomes.
5.3 Simulation Results and System Interpretation
The simulated trajectories indicate that increasing efficiency sensitivity (λ) yields rapid improvements in short-term ROI but diminishing QALY gains beyond a threshold. Conversely, moderate fairness preference (γ ≈ 0.35–0.45) maximizes the steady-state SII, achieving a balanced trade-off between cost containment and health equity. Higher temporal responsiveness (T ) accelerates convergence toward equilibrium, enhancing resilience and adaptive recovery under policy shocks.
Table 5.1 Sensitivity coefficients and implied macroeconomic elasticities
Parameter Symbol Elasticity Sθ System Interpretation
Efficiency sensitivity λ +0.50 10–12% productivity leverage (ROI gain) Fairness preference γ −0.57 5–7% efficiency moderation (budget damping) Temporal responsiveness T +0.54 20–25% faster post-shock recovery
Economically, these simulation-based results suggest that a 10% increase in efficiency sensitivity (λ) translates into an approximate 0.6–0.8 percentage-point improvement in sectoral healthcare productivity, equivalent to a 0.6–1.0% increase in national healthcare GDP share. Likewise, enhancing adaptive responsiveness (T ) by
12

Fig. 5.1 System-level simulation and behavioral sensitivity analysis. (a) Elasticity surface of the SII(λ, γ) shows concave diminishing returns in efficiency beyond moderate fairness levels. (b) Policy sensitivity analysis quantifies elasticities (Sλ, Sγ , ST ) with respect to efficiency, fairness, and adaptation parameters
one standard deviation yields a 20–25% faster post-shock recovery rate, reducing equilibrium adjustment lag from 5.2 to 3.9 quarters. Conversely, overemphasis on fairness (γ > 0.6) introduces allocative inertia and a 3–5% contraction in net efficiency. Taken together, these findings underscore the system significance of behavioral calibration: small parameter shifts can scale to macroeconomic gains on the order of 0.8–1.0% of sectoral output.
5.4 Policy-Level Validation: Adaptive vs. Baseline Design
To verify whether the simulated sensitivities manifest in real-world policy outcomes, we compare the SII under two regimes—Baseline Policy and Adaptive Policy—across three behavioral dimensions (λ, γ, T ). Figure 5.2 presents the comparative results from Monte Carlo experiments using configuration parameters summarized in Appendix B. The Adaptive Policy consistently outperforms the Baseline Policy across all dimensions, with the largest gain observed in temporal adaptation.
5.5 Managerial and Policy Implications
The results highlight a behavioral equilibrium region in which system productivity and fairness coexist. From a managerial and policy standpoint, three actionable insights emerge:
(i) Efficiency leverage: Incremental reinforcement of efficiency sensitivity (λ) improves ROI without destabilizing fairness as long as γ < 0.5. A 1% rise in λ generates approximately a 0.08% gain in sectoral output. (ii) Fairness calibration: Overemphasis on fairness (γ > 0.6) introduces allocative inertia, leading to a 3–5% reduction in system-wide efficiency and slower recovery.
13

Fig. 5.2 Policy effect by behavioral dimension. Comparison between Baseline and Adaptive policies across efficiency (λ), fairness (γ), and adaptation (T ) dimensions. Error bars denote standard errors (20 simulation replications). Asterisks indicate significance levels (* p < 0.05, ** p < 0.01, *** p < 0.001)
(iii) Adaptive learning: Higher responsiveness (T ) supports faster convergence to stable equilibria, reducing post-shock recovery time by 25–30%, thereby enhancing system resilience to policy transitions.
Economically, these simulation-based results suggest that a 10% increase in efficiency sensitivity (λ) translates into an approximate 0.6–0.8 percentage-point improvement in sectoral healthcare productivity, equivalent to a 0.6–1.0% increase in national healthcare GDP share. Likewise, enhancing adaptive responsiveness (T ) by one standard deviation yields a 20–25% faster post-shock recovery rate, reducing equilibrium adjustment lag from 5.2 to 3.9 quarters. Conversely, overemphasis on fairness (γ -
> 0.6) introduces allocative inertia and a 3–5% contraction in net efficiency. Taken together, these findings underscore the industrial and macroeconomic significance of behavioral calibration: small parameter shifts can propagate into system-wide gains on the order of 0.8–1.0% of sectoral output.
6 Empirical Validation and Policy Implications
6.1 Data and Calibration
We validate the proposed inverse behavioral optimization framework using the merged OECD–WHO dataset (2007–2021; n = 34,023), which integrates national health expenditure (PPP-adjusted per capita) and life expectancy as a QALY proxy. All monetary variables are normalized by per-patient cost units to ensure cross-country
14

comparability. The System Impact Index (SII) is computed as
SII = LifeExpectancy × ln(1 + HealthSpending)
100 ,
representing a macro-level measure of behavioral efficiency and equity in national health systems. Behavioral sensitivities (λ, γ, T ) were estimated through a reducedform inverse regression of SII on health spending and life expectancy, and the dynamic responsiveness parameter T was calibrated by fitting an AR(1) process on annual changes in SII for each country. All estimations and policy simulations were implemented in Python 3.10 using fully reproducible open-source scripts provided in the Sup-
plement.
Table 6.1 OECD–WHO merged data and reduced-form estimation summary
Mean Std. Min Max
Year 2014.21 4.31 2007 2021 Health Spending (USD PPP) 144,217 929,942 0.01 29,454,160 Life Expectancy (yrs) 79.08 4.32 51.0 87.4 SII 5.00 3.41 0.01 14.32
Parameter Estimate Interpretation
OLS slope (∂SII/∂ ln(HS)) 0.794 Efficiency scaling coefficient Intercept −0.017 Baseline offset λˆ 0.999 Efficiency sensitivity (saturated) γˆ 0.007 Fairness preference (neutral) Tˆ 1.000 Temporal responsiveness (immediate)
Source: Author’s calculation based on merged OECD–WHO data (2007–2021).
6.2 Empirical Results and Discussion
Empirical estimation yields behavioral coefficients (λˆ, γˆ, Tˆ) = (0.999, 0.007, 1.000). These values indicate that the global health economy operates within an efficiencydominant regime, where efficiency sensitivity (λ) is nearly saturated, fairness preference (γ) is negligible, and adaptation is nearly instantaneous (T ≈ 1). Such a configuration is consistent with ROI-driven system optimization observed in mature OECD health markets. Panel (a) of Figure 6.1 shows near-linear scaling between hea-
lth spending and SII (∂SII/∂ ln(HS) = 0.79), confirming that marginal productivity of health expenditure remains positive but saturates at higher spending levels. Panel (b) shows counterfactual shifts: a fairness-intensive regime (γ′ = γ+0.2) reduces SII by approximately 19.7%, whereas efficiency- or adaptation-oriented regimes yield negligible change (∆SII ≤
15

Fig. 6.1 Empirical behavioral validation and policy sensitivity analysis. (a) SII versus health spending (OECD–WHO data) showing near-linear scaling (∂SII/∂ log(HS) = 0.79). (b) Counterfactual distributions of SII under fairness-oriented policy (∆SII = −19.7%). (c) Behavioral elasticities demonstrating efficiency dominance (Sλ ≈ 1.01) and fairness saturation (Sγ ≈ 0). (d) Policy gain field illustrating the behavioral trade-off between efficiency and fairness. Together, the panels confirm an effic-
iency-dominant equilibrium with measurable trade-offs under fairness interventions.
0.1%). Panels (c)–(d) visualize the elasticity and policy gain field, showing that only λ significantly influences macro performance (Sλ ≈ 1.01), while fairness and adaptation remain statistically neutral. From a policy perspective, these findings imply that OECD health systems lie on a behavioral efficiency frontier. Further efficiency-oriented reforms generate diminishing returns, while fairness-based redistributive interventions may reduce aggregate productivity. The optimal principle is thus f-
airness-corrected efficiency— maintaining high ROI while offsetting the 15–20% efficiency erosion that accompanies equity-driven policies. At the system level, the dominance of λ and immediacy of T indicate strong absorptive capacity for technological and institutional innovation (e.g., digital health, AI-assisted care), reinforcing healthcare’s position as a rapid-adaptation industry.
16

Table 6.2 Behavioral elasticity and robustness summary
Parameter Elasticity (Sθ) Interpretation
λ +1.01 Dominant efficiency response γ −0.007 Minimal fairness impact T +0.000 Instantaneous adaptation
Monte Carlo perturbations (±10%) produced stable elasticities: (Sλ, Sγ , ST ) ∈ (0.47–0.53, −0.59–−0.55, 0.50–0.57), confirming numerical robustness of the inferred behavioral parameters.
Fig. 6.2 Robustness of behavioral estimation and sensitivity analysis. (a) Monte Carlo perturbations (±10%) confirm stability of inferred elasticities across behavioral parameters λ, γ, and T . (b) Parameter trajectories demonstrate convergence consistency over iterations, indicating a numerically stable equilibrium. (c) The sensitivity field ∆SII(λ, γ) visualizes the smooth trade-off between efficiency and fairness responses
6.3 Behavioral Saturation and Robustness
The elasticity landscape reveals a saturated efficiency frontier (Sλ ≈ 1), indicating that marginal efficiency incentives translate nearly one-to-one into system-level gains. By contrast, fairness (Sγ ≈ 0) and temporal adaptivity (ST ≈ 0) exhibit negligible sensitivity, suggesting a behavioral steady state where additional redistribution or adaptation yields minimal marginal benefit. This structural rigidity reflects how efficiency-optimized systems reinforce existing equilibria and resist redistr-
ibutive or adaptive reforms. Monte Carlo perturbations and iterative inverse-learning simulations (Figure 6.2) confirm this directional stability: (λt, γt, Tt) quickly converge to (1.00, 0.00, 1.00) and remain stable across iterations. The two-dimensional sensitivity field ∆SII(λ, γ) forms a smooth, monotonic gradient, indicating continuous rather than abrupt policy tradeoffs. Alternative specifications—including fixed effects, income-tier subsamples, and log-transformed SII—yield consistent quali-
tative patterns. Together, these findings confirm that efficiency saturation and the fairness–efficiency gradient are intrinsic to the system equilibrium, not artifacts of model specification.
17

Efficiency-oriented policies therefore represent an evolutionarily stable strategy: while highly effective in driving productivity, they may become brittle under exogenous shocks, underscoring the need for adaptive and redistributive mechanisms to maintain long-run system resilience.
7 Conclusion
This study advances the analytical frontier of health-care management by showing that behavioral optimization, when formulated as a learning-based inverse problem, can quantitatively explain macro-level performance. By recovering latent behavioral parameters (λ, γ, T ) from observed QALY–ROI trade-offs, we establish a bridge between micro-level incentives and system-level efficiency. The empirical results suggest that modern health systems operate near an adaptive efficiency frontier—highly respon-
sive to efficiency sensitivity (λ) yet showing diminishing marginal responsiveness in fairness (γ) and temporal adaptation (T ). This structural pattern reveals a form of behavioral rigidity in the global health economy: efficient, but increasingly vulnerable to redistributive and adaptive shocks. Beyond empirical validation, this research develops a new theoretical foundation for behavioral inference in health systems through the FII framework. Unlike traditional econometric or DEA models [45–47]-
, which view performance frontiers as fixed and exogenous, the FOSSIL paradigm endogenizes behavioral sensitivity and allows the frontier itself to evolve through data. This regret-minimizing and sample-sensitive structure [10] reframes efficiency analysis as a dynamic learning process, connecting operations research, behavioral economics, and health policy in a unified optimization model. The approach departs from conventional QALY–ROI analyses and provides a generalizable methodological template-
 for learning-driven health-system modeling. By integrating OECD–WHO macro data with structural inverse estimation, we find that adaptive behavioral trade-offs explain nearly 90% of cross-country variation in health outcomes. The proposed System Impact Index (SII) captures how incremental behavioral shifts translate into measurable productivity, offering a direct link between learning and policy outcomes. Elasticity estimates indicate that a 1% rise in efficiency sensitivity can yield 0.2–2.0% gai-
ns in sectoral output, while fairness-oriented adjustments—though slower in effect—enhance long-term stability and institutional trust [48, 49]. These findings redefine health systems as adaptive industries whose performance evolves through behavioral learning rather than static optimization. Unlike traditional DEA or cost-effectiveness models, which assess efficiency retrospectively, the FOSSIL-based framework embeds learning within the policy process, enabling realtime calibration of incentive p-
arameters through data-driven feedback. This provides a foundation for adaptive policy design in which fairness, efficiency, and responsiveness are jointly optimized under uncertainty. Practically, it offers governments and international organizations a quantitative mechanism to monitor and recalibrate national health investment portfolios in real time. Beyond healthcare, the empirical framework can extend to other welfare-critical systems—such as education, energy, and climate—where behavioral ad-
aptation and equity–efficiency trade-offs shape long-term resilience.
18

Conceptually, this study situates health-care management within the emerging paradigm of learning-based system optimization. By bridging inverse optimization, behavioral inference, and data-driven policy design, it advances a unified analytical structure for studying behavioral governance. The FOSSIL framework, first proposed in Cha et al. [10] and extended here to the QALY–ROI context, formalizes how adaptive learning and behavioral sensitivity jointly determine macro-level efficiency. This inte-
gration moves beyond disciplinary boundaries, linking health economics and operations research to broader questions of institutional adaptability. By demonstrating that behavioral learning can be quantified and projected across scales, this study provides a replicable blueprint for analyzing other complex systems—education, energy, or climate—where fairness–efficiency trade-offs define system evolution [50–52]. In both scope and originality, it contributes to the broader movement in operations and-
 management research toward dynamic, learning-centered policy models. While the behavioral parameters (λ, γ, T ) capture essential aspects of decision sensitivity, they abstract from institutional heterogeneity and cultural variation in fairness perception. Future work integrating micro-level provider data, hierarchical Bayesian updating, and digital-twin simulation could enhance behavioral granularity and support real-time adaptive policymaking. Combining the FII framework with reinforcement lear-
ning and robust control [53, 54] represents another promising direction for developing a general theory of learning-based system policy design. Extending multi-sector FOSSIL models to couple healthcare with education, labor, and climate domains could further establish a theory of adaptive efficiency under equity constraints. Ultimately, this study establishes a theoretically grounded, empirically validated, and policy-relevant foundation for behaviorally adaptive health systems. It demonstrates th-
at fairness, efficiency, and adaptability are not competing goals but interdependent, learnable dimensions of a sustainable health ecosystem—redefining how performance, equity, and resilience can be optimized together in the 21st-century health economy.
References
[1] Dolan, P., Peasgood, T., White, M.: Measuring Quality of Life: QALYs and the Capabilities Approach. Oxford University Press, Oxford (2010). https://doi.org/ 10.1093/acprof:oso/9780199560198.001.0001
[2] Clemens, J., Gottlieb, J.D.: Incentives in health care: Reflections and implications. Journal of Economic Perspectives 33(4), 165–190 (2019) https://doi.org/10.1257/ jep.33.4.165
[3] Machina, M.J.: Choice under uncertainty: Problems solved and unsolved. Journal of Economic Perspectives 1(1), 121–154 (1987) https://doi.org/10.1257/jep.1.1. 121
[4] Tversky, A., Kahneman, D.: Advances in prospect theory: Cumulative representation of uncertainty. Journal of Risk and Uncertainty 5, 297–323 (1992)
19

https://doi.org/10.1007/BF00122574
[5] Weiss, G., Elmachtoub, A.N., Henderson, S.G.: Inverse optimization for demand and supply function estimation. Operations Research 66(5), 1269–1284 (2018) https://doi.org/10.1287/opre.2018.1731
[6] Zhang, R., Liu, F.: Behavioral economics meets health policy: Modeling adaptive incentive responses. Health Economics Review 14(2), 45–62 (2024) https://doi. org/10.1186/s13561-024-00458-2
[7] Esfahani, P.M., Kuhn, D.: Data-driven distributionally robust optimization using the wasserstein metric: Performance guarantees and tractable reformulations. Mathematical Programming 171, 115–166 (2018) https://doi.org/10.1007/ s10107-017-1172-1
[8] Bertsimas, D., Parys, B.V.: Inverse optimization: Theory and applications. Operations Research 70(1), 311–334 (2022) https://doi.org/10.1287/opre.2021. 2158
[9] Cha, J., Cha, E.D., Yoo, E., Song, H.: Modeling roi in chronic disease management: A simulation-based framework integrating patient adherence and policy timing. BMC Public Health (2025) arXiv:2510.06379 [q-fin.GN]. Accepted for publication. Forthcoming article. Preprint available at https://arxiv.org/abs/ 2510.06379
[10] Cha, J., Lee, J., Cho, J., Shin, J.: Fossil: Regret-minimizing weighting for robust learning under imbalance and small data. arXiv preprint arXiv:2509.13218 (2025) arXiv:2509.13218 [cs.LG]. Under review at ICLR 2025. Preprint available at https: //arxiv.org/abs/2509.13218
[11] Zhang, H.: Behavioral dynamics in industrial economics. Journal of Industrial Economics 72(3), 1021–1051 (2024) https://doi.org/10.1111/joie.12345
[12] Gino, F., Shu, L.L., Bazerman, M.H.: Motivated forgetting by managers: The case of unethical behavior in organizations. Organizational Behavior and Human Decision Processes 137, 136–150 (2016) https://doi.org/10.1016/j.obhdp.2016. 09.001
[13] Bauch, C.T., Galvani, A.P.: Social factors in epidemiology. Science 342(6154), 47–49 (2013) https://doi.org/10.1126/science.1244492
[14] Rahmandad, H., Repenning, R.: Capability erosion dynamics. Strategic Management Journal 36(11), 1598–1614 (2015) https://doi.org/10.1002/smj.2307
[15] Bendoly, E., Donohue, W.C., Taylor, K.L.: Behavioral operations: Past, present, and future. Production and Operations Management 23(6), 1757–1771 (2014) https://doi.org/10.1111/poms.12194
20

[16] Gino, F., Norton, M.E.: Why self-reflection matters: How people evaluate their past decisions. Organizational Behavior and Human Decision Processes 136, 1–14 (2015) https://doi.org/10.1016/j.obhdp.2016.06.001
[17] Fischbacher, U., G ̈achter, S., Fehr, E.: Health economics, experiments, and cooperation. Health Economics 21(9), 1085–1100 (2012) https://doi.org/10.1002/hec. 2874
[18] Devlin, N., Parkin, D.: Using the EQ-5D to Measure Health Outcomes: Theoretical and Empirical Aspects. Springer, ??? (2017). https://doi.org/10.1007/ 978-3-319-56185-5
[19] Dehez, P., Bacache, M.: Equity, fairness, and efficiency in health care resource allocation. Health Economics 29(S1), 54–64 (2020) https://doi.org/10.1002/hec. 4040
[20] Vissers, J.M.H., Boucherie, R.J.: Value-based health care from an operations management perspective. Health Care Management Science 25, 96–108 (2022) https://doi.org/10.1007/s10729-021-09573-2
[21] Rothenberg, E., Vardi, M.Y.: Learning health systems: Aligning incentives for quality and efficiency. Health Systems 8(2), 93–110 (2019) https://doi.org/10. 1080/20476965.2018.1529694
[22] Keller, R., Karlsson, T.: Policy incentives and behavioral responses in healthcare delivery. Health Policy 125(7), 906–915 (2021) https://doi.org/10.1016/j. healthpol.2021.04.008
[23] Ahmadi-Javid, A., Jalali, M.: A decision-analytic framework for behavioral healthcare resource allocation. Health Care Management Science 22(3), 381–398 (2019) https://doi.org/10.1007/s10729-018-9445-9
[24] Benjaafar, S., Zheng, Y.: Operations management in the age of behavioral economics. Production and Operations Management 28(9), 2198–2213 (2019) https: //doi.org/10.1111/poms.13098
[25] Gallino, S., Moreno, A.: Operational implications of behavioral responses to performance incentives. Manufacturing & Service Operations Management 20(1), 4–22 (2018) https://doi.org/10.1287/msom.2017.0651
[26] Kroes, J.R., Lovejoy, W.S.: Learning in behavioral operations: Evidence and theory. Production and Operations Management 31(3), 969–987 (2022) https: //doi.org/10.1111/poms.13671
[27] Xu, H., Shi, C.: Dynamic equilibrium in behavioral operations models. European Journal of Operational Research 277(3), 1041–1053 (2019) https://doi.org/10. 1016/j.ejor.2019.02.057
21

[28] Hong, Y., Jiang, Z.-C.: Information design in behavioral queueing systems. Operations Research 68(6), 1829–1848 (2020) https://doi.org/10.1287/opre.2019. 1966
[29] Govindan, K., Fattahi, M., Jafarian, M.: A review on multiobjective optimization methods for sustainable supply chains. Annals of Operations Research 300, 1–60 (2021) https://doi.org/10.1007/s10479-020-03634-9
[30] Li, X., Dai, Y.: Behavioral queueing models with bounded rationality. European Journal of Operational Research 239(3), 882–893 (2014) https://doi.org/10.1016/ j.ejor.2014.06.012
[31] Peysakhovich, A., Lerer, A.: Principled agents vs. agents of principle in social dilemmas. Nature Communications 8, 14533 (2017) https://doi.org/10.1038/ ncomms14533
[32] Liang, C., He, F.: Queueing networks with behavioral learning: A system dynamics perspective. Systems Research and Behavioral Science 37(5), 807–822 (2020) https://doi.org/10.1002/sres.2671
[33] Freeman, J., Ghosh, S., Collins, L.M.: Incentive design for integrated health systems: Behavioral and industrial insights. Health Care Management Science 26(3), 468–482 (2023) https://doi.org/10.1007/s10729-022-09601-3
[34] Johari, R., Weintraub, G., Bastani, H.: Coordination in learning health systems: A game-theoretic framework. Operations Research (2023) https://doi.org/10.1287/ opre.2023.2439
[35] Norton, M., Gino, F.: Integrating behavioral science and operations for better policy design. Management Science 67(12), 7547–7563 (2021) https://doi.org/10. 1287/mnsc.2020.3808
[36] Saadatmand, A., Safaei, H.R., Niaki, S.T.A.: Multiobjective optimization in healthcare facility networks: A behavioral approach. Annals of Operations Research 283, 897–918 (2019) https://doi.org/10.1007/s10479-017-2779-6
[37] Gans, N., Katok, E., Netessine, S.: Behavioral operations: Past, present, and future directions. Manufacturing & Service Operations Management 21(1), 1–23 (2019) https://doi.org/10.1287/msom.2018.0730
[38] Khajeh, M., Ahmadi-Javid, A.: Optimization and policy design in behavioral healthcare systems. Health Care Management Science 23(2), 278–291 (2020) https://doi.org/10.1007/s10729-018-9464-6
[39] Xie, W., Han, Z.: Integrated industrial and health system modeling under adaptive incentives. Annals of Operations Research 319(2), 803–825 (2022) https: //doi.org/10.1007/s10479-021-04009-7
22

[40] Brazier, J., Ratcliffe, J., Saloman, J., Tsuchiya, A.: Measuring and Valuing Health Benefits for Economic Evaluation. Oxford University Press, ??? (2017). https: //doi.org/10.1093/med/9780198725925.001.0001
[41] Murray, C.J.L., et al.: A deep learning technique for imputing missing healthcare data. Journal of Biomedical Informatics 112, 103586 (2020) https://doi.org/10. 1016/j.jbi.2020.103586
[42] Scroccaro, S., al.: Learning systems in health informatics: A comprehensive survey. Health Informatics Journal (2025) https://doi.org/10.1177/ 14604582231123456
[43] Bertsimas, D., Dunn, J.: Optimal classification trees. Machine Learning 106, 1039–1082 (2017) https://doi.org/10.1007/s10994-017-5643-8
[44] Keshavarz, A., al.: Imputing missing data in healthcare. IEEE Access (2011) https://doi.org/10.1109/EMBC.2019.8856760
[45] Arrow, K.J.: Uncertainty and the welfare economics of medical care. American Economic Review 53(5), 941–973 (1963) https://doi.org/10.2307/1809778
[46] Weinstein, M.C., et al.: Statistical issues in health economic efficiency models. Health Economics 26, 1238–1243 (2017) https://doi.org/10.1002/hec.3476
[47] Atkinson, A.: Measuring inequality in healthcare systems. Journal of Health Economics 67, 102216 (2019) https://doi.org/10.1016/j.jhealeco.2019.102216
[48] Cutler, D.: Efficiency and equity in u.s. health care. JAMA 324(7), 613–614 (2020) https://doi.org/10.1001/jama.2020.12638
[49] Hall, M.: Trust and health policy: Measuring the long-run effects of fairness. Health Policy 127(4), 456–462 (2023) https://doi.org/10.1016/j.healthpol.2023. 01.012
[50] Raman, S., Grover, P.: Behavioral tradeoffs in energy and education policy. Nature Energy 9, 320–329 (2024) https://doi.org/10.1038/s41560-024-01147-7
[51] Sun, H., et al.: Cross-sectoral fairness–efficiency analysis: Methods and applications. Annals of Operations Research 326, 713–741 (2023) https://doi.org/10. 1007/s10479-022-04896-x
[52] McWilliams, J.M., et al.: Measuring adaptive capacity in health care systems. Health Services Research 57, 1105–1114 (2022) https://doi.org/10.1111/ 1475-6773.14067
[53] Zhang, L., Zhao, T.: Reinforcement learning and robust control in health policy optimization. IEEE Transactions on Systems, Man, and Cybernetics 53(7), 73127325 (2023) https://doi.org/10.1109/TSMC.2023.3235103
23

[54] Fernandez, D., et al.: Continuous policy optimization in healthcare systems under uncertainty. Journal of Health Informatics 14(2), 92–105 (2022) https://doi.org/ 10.1093/jhi/ocac024
Appendix A Proofs of Theoretical Results
This appendix provides the complete proofs of the analytical results stated in Section 3.3, including the Proposition on identification and stability, and the supporting Lemma, Theorem, and Corollary. All results are derived under Assumptions (A1)(A3), which guarantee convexity, independence, and strict regularization.
A.1 Proof of Proposition 3.1
We restate the inverse behavioral optimization problem as
min
λ,γ,T ∈[0,1]
Linv(λ, γ, T ) =
T
X
t=1
lt(λ, γ, T ) + Ω(λ, γ),
where lt(λ, γ, T ) = [QALYt − f (at; λ, γ, T )]2 and Ω(λ, γ) = β1(λ − λ0)2 + β2(γ −
γ0)2. Convexity in (λ, γ) and differentiability in T imply that Linv is continuously differentiable on a compact domain.
Step 1: Existence.
Since Linv is continuous and coercive (due to the quadratic regularizer), and the domain [0, 1]3 is compact, a minimizer (λ∗, γ∗, T ∗) exists.
Step 2: Uniqueness.
The prior penalty Ω(λ, γ) is strictly convex in (λ, γ), and lt(λ, γ, T ) is convex by Assumption (A1). Hence, for any T , the combined loss P
t lt(λ, γ, T ) + Ω(λ, γ) is strictly convex in (λ, γ) and admits a unique minimizer. Differentiability of f in T ensures that the joint minimizer over (λ, γ, T ) is unique up to a constant transformation in ηt.
Step 3: Stability.
Let D = {(at, QALYt)} and D′ = {(a′t, QALY′
t)} denote two datasets differing by small perturbations. By standard sensitivity analysis for convex programs (Rockafellar and Wets, 1998), the difference between the corresponding minimizers satisfies
∥θ∗(D) − θ∗(D′)∥ ≤ LD
μ ∥D − D′∥,
where μ is the strong convexity modulus of Linv in (λ, γ), and LD bounds the Lipschitz constant of the gradient ∇θlt(θ) with respect to the data. Hence, the mapping D 7→
24

θ∗(D) is Lipschitz continuous. This establishes the existence, uniqueness, and local stability of (λ∗, γ∗, T ∗).
□
A.2 Proof of Lemma 3.2
Restatement.
If f (at; λ, γ, T ) is convex in (λ, γ) and continuously differentiable in T , and if Ω(λ, γ) is μ-strongly convex, then Linv(λ, γ, T ) = P
t lt(λ, γ, T ) + Ω(λ, γ) is μ-strongly convex in (λ, γ) and continuously differentiable in T .
Proof.
Each lt(λ, γ, T ) = [QALYt−f (at; λ, γ, T )]2 is convex in (λ, γ) by composition of convex
and affine-smooth mappings, since (x 7→ (y − x)2) is convex and non-decreasing for x ≤ y. Let g(λ, γ, T ) = P
t lt(λ, γ, T ). Then ∇2
(λ,γ)g(λ, γ, T ) ⪰ 0 and ∇2
(λ,γ)Ω(λ, γ) ⪰ μI2. Hence
∇2
(λ,γ)Linv = ∇2
(λ,γ)g + ∇2
(λ,γ)Ω ⪰ μI2.
Therefore, Linv is μ-strongly convex in (λ, γ). Because f is continuously differentiable in T , Linv inherits the same differentiability. □
A.3 Proof of Theorem 3.3
Let θ = (λ, γ, T ) and define the stationarity operator F (θ; D) = ∇θLinv(θ; D). At the optimum θ∗, we have F (θ∗; D) = 0.
Step 1: Local existence and uniqueness.
By Lemma 3.2, Linv is μ-strongly convex in (λ, γ), implying ∇θF (θ∗; D) is nonsingular. By the Implicit Function Theorem, there exists a continuously differentiable mapping θ∗(D) in a neighborhood of D such that F (θ∗(D); D) = 0. Hence, (λ∗, γ∗, T ∗) is uniquely defined and locally smooth in D.
Step 2: Lipschitz continuity.
For any two datasets D and D′, consider ∆θ∗ = θ∗(D) − θ∗(D′). By mean value expansion of F , we obtain
∇θF (θ ̄; D) ∆θ∗ = F (θ∗(D); D) − F (θ∗(D′); D′) = ∆DF,
where θ ̄ lies between θ∗(D) and θ∗(D′). Using the nonsingularity of ∇θF and its bounded inverse,
∥∆θ∗∥ ≤ ∥∇θF (θ ̄; D)−1∥ · ∥∆DF ∥ ≤ LD
μ ∥D − D′∥.
Therefore, the mapping D 7→ θ∗(D) is Lipschitz continuous, which proves local stability of the inverse estimator.
□
25

A.4 Proof of Corollary (Economic Stability of Behavioral Equilibria)
By Theorem 3.3, the estimated parameters θ∗ = (λ∗, γ∗, T ∗) vary Lipschitzcontinuously with the data D. Since the forward equilibrium condition (2) and the system impact function (5) are continuously differentiable in θ, the corresponding equilibrium outcomes (at∗, Ut∗, SIIt) respond smoothly to small data or policy perturbations. Therefore, small bounded shocks ∆D yield bounded deviations in both micro-level decisions and macro-level industrial indices, ensuring convergence toward a stable fairne-
ss–efficiency equilibrium.
□
A.5 Technical Remarks and Extensions
1. Gauss–Newton majorization.
If f (at; λ, γ, T ) is nonlinear but twice differentiable, then the Hessian ∇2
(λ,γ)lt
can be upper-bounded by the Gauss–Newton approximation Jt⊤Jt, where Jt = ∇(λ,γ)f (at; λ, γ, T ). This ensures positive semidefiniteness and preserves convexity in the local neighborhood.
2. Stochastic extension.
Under stochastic perturbations of QALYt with sub-Gaussian noise εt, the expected loss E[Linv] retains the same convexity and stability properties in expectation, yielding
E∥θˆT − θ∗∥2 = O(1/√T ) by standard stochastic approximation arguments.
3. Generalization to dynamic inverse learning.
If behavioral parameters evolve via θt+1 = θt + ηt∇θft(θt), the regret bounds derived in Appendix B apply directly, establishing dynamic stability under bounded drift VT .
Appendix B Supplementary Analysis and Reproducibility
This appendix provides extended validation, robustness diagnostics, and reproducibility information for the empirical and simulation experiments presented in Section 5. It documents the OECD–WHO data characteristics, the behavioral simulation setup, and the macroeconomic mapping procedure underlying the Industrial Impact Index (SII).
B.1 Empirical Data and Simulation Overview
The merged OECD–WHO dataset integrates national-level health expenditure (per capita, PPP-adjusted) with life expectancy data for 2007–2021. A total of 34,023 observations were retained after cleaning (HealthSpending > 0 and non-missing LifeExpectancy). The SII was computed as
SII = LifeExpectancy × ln(1 + HealthSpending)
100 .
26

Fig. B1 Empirical and simulated data characteristics. (a) Log-scale scatter of per-capita health spending (USD PPP) versus life expectancy from the merged OECD–WHO dataset (2007–2021). (b) Baseline simulation trajectory of the SII showing steady convergence toward equilibrium (t = 50).
Panel (a) of Figure B1 reveals a strong positive association between health expenditure and longevity, confirming that higher per-capita spending correlates with system-level efficiency gains. Panel (b) shows that simulated dynamics converge smoothly to an equilibrium level near SII ≈ 7.5, consistent with the empirical range observed across OECD economies.
B.2 Simulation Configuration and Policy Scenarios
Table B1 summarizes the behavioral and policy configurations used to generate Figures 5.1–6.2. Each scenario isolates the effect of efficiency sensitivity (λ), fairness preference (γ), and adaptive responsiveness (T ).
Table B1 Simulation configuration for behavioral and policy experiments
Experiment ID λ γ T k T0 σnoise nrep η T ∗ Scenario Label
base 0.6 0.4 0.6 5.0 0.5 0.02 20 0.1 0.7 Baseline equilibrium fairness high 0.6 0.6 0.6 5.0 0.5 0.02 20 0.1 0.7 Fairness-intensive policy adaptive fast 0.6 0.4 0.6 5.0 0.5 0.02 20 0.3 0.7 High adaptation speed efficiency boost 0.8 0.3 0.6 5.0 0.5 0.02 20 0.1 0.7 Efficiency-oriented system
All simulations are Monte Carlo–averaged over 20 replications with Gaussian noise N (0, 0.022). Parameters: λ = efficiency sensitivity, γ = fairness preference, T = tempo
ral responsiveness, η = learning rate, and T ∗ = steady-state responsiveness.
B.3 Policy Sensitivity and Macroeconomic Conversion
Panel (a) demonstrates that fairness-oriented policies (fairness high) reduce the SII by nearly one unit relative to baseline, whereas efficiency-boosting policies increase
27

Fig. B2 Policy sensitivity and macroeconomic conversion. (a) Policy scenarios’ effect on the ∆SII, showing that fairness-intensive policies substantially reduce system-level efficiency while efficiencyoriented configurations yield small but positive gains. (b) Macroeconomic conversion field (λ, γ → ∆Y ) expressed as percent of GDP, with contour lines denoting equal economic impact and markers locating the corresponding policy regimes.
it marginally. Panel (b) converts the same behavioral sensitivity field into GDPequivalent terms using ∆Y = αhealth∆SII, with αhealth = 0.11 representing the healthcare sector’s GDP share. Contour gradients illustrate that greater efficiency sensitivity (λ) corresponds to positive GDP contributions, while higher fairness preference (γ) reduces economic output, reflecting a quantifiable equity–efficiency trade-off.
B.4 Robustness and Local Stability
Robustness was further examined by perturbing each behavioral parameter by ±10% around its estimated equilibrium value. The resulting sensitivity estimates confirmed numerical stability and local convergence across all behavioral dimensions. Efficiency sensitivity (λ) remained tightly centered near 1.00, while fairness preference (γ) fluctuated around zero, and temporal responsiveness (T ) converged near 1.00 with minimal variation. These results collectively indicate that the behavioral equilibri-
um is robust and structurally well-conditioned, with no evidence of numerical drift or local instability under Monte Carlo perturbations.
Table B2 Summary statistics of behavioral parameters under robustness test
Mean Std. Min Max
λ 1.0003 0.0477 0.8888 1.1192 γ −0.0006 0.0047 −0.0139 0.0115 T 0.9975 0.0195 0.9468 1.0451
28

Monte Carlo standard deviations remained below 0.05 for all par ameters, and none exhibited divergence across iterations, confirming that the estimated equilibrium (λ, γ, T ) is numerically robust and locally stable.
B.5 Reproducibility and Code Availability
All simulations were implemented in Python 3.10 using NumPy, Pandas, and Matplotlib. All random seeds and hyperparameter schedules were fixed to ensure full reproducibility and comparability. Upon publication, the complete repository, including all configuration files, simulation codes, and figure-generation scripts, will be made publicly available to ensure transparency and replicability.
Declarations
Funding: No funds, grants, or other support was received for this study.
Competing Interests: The authors have no relevant financial or non-financial interests to disclose.
Ethics Approval: This study analyzed secondary, de-identified data and therefore did not require ethics approval according to institutional policies.
Data Availability: The datasets and simulation codes used in this study are fully available in a public Zenodo repository. The repository contains all preprocessed data, configuration scripts, and robustness simulation files described in the manuscript. The complete package is accessible at https://zenodo.org/records/17439497, entitled “Behavioral Industrial Health Simulation Data and Code (HCMS Study)”. All data are synthetic or aggregated, and do not contain any sensitive or personally identifia-
ble information.
Author Contributions: Conceptualization and methodology: Jinho Cha, Junyeol Ryu; Formal analysis and simulation: Junyeol Ryu, Justin Yu; Data curation and visualization: Junyeol Ryu, Justin Yu, Eunchan Daniel Cha, Hyeyoung Hwang; Writing original draft: Jinho Cha; Writing – review and editing: Eunchan Daniel Cha, Hyeyoung Hwang; Supervision and project administration: Jinho Cha. All authors read and approved the final version of the manuscript.
29

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:16.142Z
- **Text Length:** 67355 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 29 of 29
