# PDF Document: Garrone - 2025 - An Adaptive, Data-Integrated Agent-Based Modeling Framework for Explainable and Contestable Policy D.pdf

**File Path:** Garrone - 2025 - An Adaptive, Data-Integrated Agent-Based Modeling Framework for Explainable and Contestable Policy D.pdf

**Processed Date:** 2026-02-10T18:13:44.530Z

**File Size:** 527.14 KB

**Total Pages:** 27

**Extracted Pages:** 27

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3302

**Title:** An Adaptive, Data-Integrated Agent-Based Modeling Framework for Explainable and Contestable Policy Design

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

An Adaptive, Data-Integrated Agent-Based Modeling Framework
for Explainable and Contestable Policy Design
Roberto Garrone1,2∗
1Department of Informatics, Systems and Communication (DISCo), University of Milano–Bicocca, Milan, Italy 2Faculty of Pure and Applied Sciences, Open University of Cyprus, Nicosia, Cyprus
November 24, 2025
Abstract
Multi-agent systems often operate under feedback, adaptation, and non-stationarity, yet many simulation studies retain static decision rules and fixed control parameters. This paper introduces a general adaptive multi-agent learning framework that integrates: (i) four dynamic regimes distinguishing static versus adaptive agents and fixed versus adaptive system parameters; (ii) information-theoretic diagnostics—entropy rate, statistical complexity, and predictive information—to assess predictabilit-
y and structure; (iii) structural causal models for explicit intervention semantics; (iv) procedures for generating agent-level priors from aggregate or sample data; and (v) unsupervised methods for identifying emergent behavioral regimes. The framework offers a domain-neutral architecture for analyzing how learning agents and adaptive controls jointly shape system trajectories, enabling systematic comparison of stability, performance, and interpretability across non-equilibrium, oscillatory, or d-
rifting dynamics. Mathematical definitions, computational operators, and an experimental design template are provided, yielding a structured methodology for developing explainable and contestable multi-agent decision processes.
Keywords: Adaptive multi-agent systems; Agent-based modeling (ABM); Multi-agent learning; Statistical complexity; Structural causal models (SCMs); Explainable and contestable policy design; Policy optimization; Interaction topologies; Computational social science.
1 Introduction
Adaptive multi-agent systems (MAS) increasingly underpin decision processes in domains such as energy, mobility, environmental regulation, and public policy. Agents interact, adapt, and respond to evolving system parameters, while policymakers revise controls in response to observed performance. These socio-technical systems exhibit feedback, path dependence, and emergent structure. Yet methodological tools for jointly studying agent adaptation, policy learning, and system-level
∗ORCID: 0009-0005-7060-6774
1
arXiv:2511.19726v1 [cs.MA] 24 Nov 2025

dynamics remain fragmented across behavioral modeling, reinforcement learning, causal inference, and complex systems analysis.
This paper proposes a unified framework for analyzing adaptive MAS that integrates four methodological pillars. First, a regime-based architecture distinguishes between static and adaptive agents and between fixed and adaptive policy parameters. The resulting four regimes—CPCA, CPVA, VPCA, and VPVA—form a conceptual map for comparing MAS configurations with heterogeneous degrees of adaptation and feedback.
Second, the framework incorporates a transparent behavioral layer that allows agents to form and revise beliefs about policy trajectories. Belief-driven adaptation provides an interpretable alternative to opaque learning rules: agents react not only to instantaneous policy values but also to perceived patterns in policy evolution. This preserves bounded rationality while enabling structured reactivity, and it supports causal and counterfactual analysis of agent responses.
Third, we introduce a declarative specification layer for representing policy rules, causal pathways, and intervention semantics. Using a lightweight, rule-based formalism, policymakers can articulate constraints, goals, and causal assumptions. Agents may access a restricted, policy-only subset of this representation, bridging symbolic and numerical perspectives and enhancing contestability and transparency.
Fourth, we integrate diagnostic tools from information theory, causal inference, and unsupervised learning. Entropy rate, statistical complexity, and predictive information quantify the structure and predictability of emergent trajectories. Structural causal models (SCMs) provide explicit semantics for interventions and counterfactual reasoning. Clustering methods identify distinct behavioral or policy regimes arising from the interaction of adaptation and control.
Together, these components form a general, domain-neutral architecture for studying adaptive MAS without presupposing convergence or equilibrium. The framework supports systematic comparison across static, semi-adaptive, and fully adaptive configurations, enabling researchers and policymakers to evaluate stability, interpretability, and robustness. By integrating belief formation, declarative causal specification, and information-theoretic diagnostics, the framework contributes to the foundations -
of explainable and contestable multi-agent decision systems.
The contributions of this work are:
1. A four-regime architecture for adaptive multi-agent systems integrating agent learning and adaptive policy search; 2. A belief-driven behavioral layer capturing interpretable agent reactions to evolving policies; 3. A declarative, rule-based specification layer for causal pathways and intervention semantics; 4. A unified diagnostic suite combining structural causal models and informationtheoretic measures; 5. Three policy-relevant instantiations (load balancing, smart grids, emissions).
2 Background and Related Work
2.1 Multi-Agent Systems and Agent-Based Models
Multi-agent systems provide a general paradigm for modeling distributed decision-making, where multiple interacting entities pursue goals under partial information, limited rationality, and feedback. Classical work in distributed AI and coordination established foundational principles of interaction, cooperation, and communication in MAS [60–62]. Within AI, MAS research spans
2

game-theoretic interaction [63, 64], cooperative and competitive multi-agent reinforcement learning [65, 66], and decentralized control and planning under uncertainty [67–69]. These traditions emphasize how local decision rules, information constraints, and coordination mechanisms shape emergent global behavior in distributed systems.
Agent-based modeling (ABM) is closely linked to this tradition and to the study of complex adaptive systems (CAS), where macro-level order emerges from micro-level interactions under adaptation and feedback [34, 38, 40]. In generative social science [21, 25, 26], explanation is achieved by constructing mechanisms that reproduce empirical patterns, and ABMs have been widely used in computational social science [8, 12, 28] to represent heterogeneous agents, bounded rationality, and networked interac-
tion.
Applications span diverse domains (e.g., epidemiology, mobility, markets, and public services), where ABMs and MAS are used as “laboratories” to explore consequences of alternative designs or interventions [1, 4, 7, 14, 15, 20, 22, 27, 29, 45, 54, 57]. These examples motivate the need for general methodologies that can handle adaptation, non-stationarity, and feedback without being tied to any single application.
2.2 Synthetic Populations and Agent Initialization
Realistic MAS and ABMs often require plausible agent populations. Synthetic population methods, beginning with Beckman et al. [6], use iterative proportional fitting (IPF) to reweight sample microdata so that marginal distributions match aggregate constraints. Recent surveys review extensions and good practices [9, 46, 59]. Multiple imputation [50] addresses missing attributes and facilitates uncertainty analysis.
In an AI context, these techniques can be viewed as generic procedures for constructing heterogeneous agent priors: given aggregate constraints and a sample (or proxy) dataset, they produce a distribution over agent-level attributes that can feed any downstream learning or decision process. This perspective abstracts away from specific domains and treats synthetic populations as a modular component of agent initialization.
2.3 Structured Interaction Topologies
Interaction structures in MAS are naturally represented as graphs or networks. GIS-informed ABMs and spatial MAS embed these networks in geographic space [5, 31, 84], but more generally one may consider abstract interaction topologies G = (V, E) with attributes on nodes and edges. Such structures govern who can interact with whom, what information flows where, and how costs or constraints (distance, capacity, congestion) shape behavior.
Networked interaction is central to many AI applications: distributed sensing, communication networks, multi-robot systems, and social or information networks. The present framework treats interaction topology as a first-class object, independent of any specific spatial embedding.
2.4 Validation, Sensitivity Analysis, and Documentation
Structured validation practices have been proposed to improve the credibility of ABMs and MASbased simulations. Recent work emphasizes conceptual, empirical, and predictive validity, as well
3

as best practices for reporting [2, 13]. Sensitivity analysis techniques, including Morris screening [41] and variance-based methods such as Sobol indices [51], help identify influential parameters and quantify uncertainty. Classical simulation studies also address initialization bias and steadystate analysis [36, 37, 53]. The ODD protocol provides standardized documentation to facilitate replication and transparency [30].
These ideas carry over directly to AI-driven MAS: learning rules and control parameters can be subjected to the same systematic experimental design, and validation can be framed in terms of predictive performance, structural robustness, and invariances across interventions.
2.5 Causality, Information Theory, and Explainable Multi-Agent Systems
Traditional ABMs explain outcomes mechanistically but rarely encode explicit causal structures. In AI, there is a growing interest in combining structural causal models (SCMs) with learning systems to clarify what is being assumed and what is being learned [32, 33, 44, 48, 49, 58]. Recent contributions integrate SCMs and intervention logic with simulation models [11, 47, 52], aligning MAS with modern causal inference. Contestability—the capacity for stakeholders to scrutinize, challenge, and under-
stand model assumptions and outputs—is recognised as a core requirement for accountable systems [23, 24]. Incorporating causal graphs, explicit assumptions, and diagnostic metrics helps operationalise this requirement.
Computational mechanics and information theory provide tools to quantify emergent structure and predictability [16–18, 39, 55]. Metrics such as entropy rate, statistical complexity, and predictive information can distinguish between randomness, simple deterministic dynamics, and complex structure. When applied to MAS, they allow one to characterize different learning and control regimes in terms of information storage and predictability, offering a basis for explainability and model comparison.
From a design perspective, adaptive control and resilience have become central concerns in AIsupported decision systems. MAS are increasingly used as testbeds where interventions and learning strategies can be evaluated under controlled conditions and revised iteratively [19, 35, 42].
3 A General Adaptive Multi-Agent Framework
3.1 Conceptual Overview
We consider a generic multi-agent decision system comprising a population of agents, an environment, and a set of system-level control parameters. The proposed framework is structured into five layers:
1. Population layer: synthetic agents generated via IPF and imputation, informed by surveys or sample data.
2. Environment layer: spatial or abstract network topology constraining interactions.
3. Behavioral layer: agent decision rules, static or adaptive.
4. Control layer: a vector of system-level parameters, static or subject to search.
4

5. Diagnostics layer: performance metrics, causal graphs, information-theoretic measures, and emergent pattern analysis via clustering.
Within this structure, we distinguish four dynamic regimes that define how agents and control parameters co-evolve.
3.2 Four Dynamic Regimes
Let st ∈ S denote the system state at discrete time t, A = {ai} the set of agents, and Pt ∈ Rd a vector of control parameters. Each agent i has an internal state θi,t and chooses an action xi,t ∈ Xi according to a behavioral rule Ri. In the adaptive case, internal states update according to a learning rule Li.
Agents act in an environment defined by a spatial or network topology (see Section 5). The transition function F maps current state, actions, and control to the next state:
st+1 = F (st, Xt, Pt, ζt),
where ζt captures exogenous shocks.
Control parameters may be fixed or updated via an optimization rule G:
Pt+1 = G(Pt, Jˆt, st),
where Jˆt is an intermediate performance estimate.
Combining static vs. adaptive agents and fixed vs. adaptive control yields four regimes:
• CPCA (Constant Policy, Constant Agents): Pt ≡ P , Li = ∅.
• CPVA (Constant Policy, Variable Agents): Pt ≡ P , Li ̸= ∅.
• VPCA (Variable Policy, Constant Agents): Li = ∅, Pt updated by G.
• VPVA (Variable Policy, Variable Agents): both Li ̸= ∅ and Pt updated.
The framework treats all four regimes within a unified notation, allowing systematic comparison of stability and performance properties across different combinations of agent learning and system-level adaptation.
3.3 Performance Evaluation Under Non-Convergent Dynamics
Let Φ(st) be a bounded performance functional (e.g. combining efficiency, equity, and stability objectives). Over a window of length K, the performance of a control–learning configuration (P, L) is
J(P ; L) = 1
K
T
X
t=T −K+1
Φ(st),
for a finite simulation horizon T . This definition does not require convergence to a fixed point; it remains well-defined under stationary, cyclic, or drifting dynamics, provided state variables are bounded. Multiple replications with different random seeds yield an empirical distribution of J(P ; L), from which means and variances can be estimated.
5

4 Population Layer: Synthetic Populations and Survey Priors
4.1 Synthetic Populations via Iterative Proportional Fitting
Synthetic populations approximate real-world heterogeneity while preserving confidentiality [6, 9, 46, 59]. Given aggregate marginals (e.g. counts by age, income, or other categories) and a sample microdataset, IPF reweights micro records so that the resulting synthetic population matches the marginals. Let w denote weights over sample records; IPF iteratively adjusts w to match each marginal distribution in turn.
In the proposed framework, IPF is used in a domain-neutral way: the same method can be applied to any context where aggregate constraints and microdata (or a proxy dataset) are available. Multiple imputation [50] can augment the synthetic population with missing attributes and encode uncertainty, yielding an ensemble of plausible agent initializations.
4.2 Survey-Informed Behavioral Priors
Survey data provide empirical distributions for attitudes, preferences, expectations, and behavioral dispositions, making them a natural source of priors for initializing heterogeneous agents. Foundational behavioral theories demonstrate that survey-measured attitudes and intentions are systematically linked to action [70], while behavioral game theory shows how risk aversion, reciprocity, compliance tendencies, and responsiveness to incentives can be elicited empirically and incorporated into dec-
ision models [72]. In agent-based modeling, survey responses have long been used to parameterize heterogeneity in thresholds, personality traits, and behavioral propensities [71], providing realistic distributions over agent-level parameters.
From a methodological perspective, survey data are widely recognized as a reliable means of capturing behavioral constructs and subjective expectations [74], especially when used to shape priors rather than impose strict deterministic rules. These priors inform the initial distribution of internal states θi,0—for example, attitudes toward compliance, risk tolerance, preference weights, or technology adoption—and may influence learning rates or thresholds in Li, thereby conditioning early-stage dyn-
amics. Generative social science further emphasizes that such empirically grounded heterogeneity is essential for producing plausible emergent macro-structures [73]. In this framework, surveys are therefore treated in a domain-neutral manner as structured sources of prior distributions that shape agent initialization and subsequently interact with the learning and adaptation dynamics of multi-agent systems.
5 Environment Layer: Spatial and Network Structures
Spatial and network structures are critical in many multi-agent decision systems. In spatial MAS and GIS-informed ABMs, environments are represented using nodes (locations) and edges (connections), possibly embedded in geographic space [5, 31, 84]. More generally, the framework uses an abstract representation: an environment is a graph G = (V, E), optionally with geometric coordinates and attributes on nodes and edges.
Agents occupy or traverse nodes, interact with neighbors, and experience costs or constraints (e.g. distance, congestion, capacity). This structure is applicable to mobility, resource distribution,
6

information flows, and many other MAS settings, whether or not they have an explicit spatial embedding.
6 Behavioral and Control Layers: Static vs. Adaptive Dynamics
6.1 Agent Learning
In the static case, an agent i follows a fixed rule Ri(xi,t, st, Pt); in the adaptive case, an internal state θi,t updates according to a learning rule
θi,t+1 = Li(θi,t, st, Pt, xi,t, ri,t),
with ri,t a realized payoff. This formulation encompasses boundedly rational adaptive rules, simple reinforcement learning schemes [3, 10], and other heuristics used in MAS and ABM to model learning and adaptation.
6.2 Control (Policy) Search
Control or policy search treats the MAS as a noisy black-box mapping P 7→ J(P ; L) [26, 43, 56]. An external optimizer updates Pt based on performance estimates. A simple hill-climbing algorithm explores a neighborhood of Pt and moves to candidates with higher J if improvements exceed a tolerance. More sophisticated search procedures (e.g. evolutionary algorithms, Bayesian optimization, policy gradient methods) can be plugged into the same architecture.
6.3 Evaluation and Optimization Algorithms
A generic evaluation procedure runs R replications of the MAS for a given (P, L), computes J(P ; L) for each replication, and returns mean and variance. An optimization procedure iteratively calls the evaluation routine for neighboring control vectors until no further improvement is detected. These algorithms are modular and apply to all four regimes, allowing the framework to be used both for analysis of fixed designs and for explicit control optimization.
6.4 Belief-Driven Behavioral Adaptation
To align with explainable and model-driven agent architectures, we extend the behavioral layer with a lightweight belief model. Agents do not form beliefs about other agents or the full environment; instead, each agent maintains simple, bounded beliefs about the policy vector Pt.
Let bi,t(P ) denote agent i’s belief distribution over policy parameters. Agents update beliefs using observed policy changes:
bi,t+1(P ) = Hi bi,t(P ), Pt, ∆Pt, st ,
where Hi is an update rule combining prior beliefs and recent policy moves (e.g., a Bayesian update, exponential smoothing, or threshold-triggered revisions).
Beliefs influence emissions-, consumption-, or demand-generating actions:
xi,t = f (θi, ηi, bi,t(P ), st).
7

This modification preserves bounded rationality and avoids full-blown strategic reasoning while enabling agents to respond to perceived policy trajectories. Belief updating also improves interpretability: agents adapt to the pattern of policies, not only to the instantaneous values of Pt, producing dynamics amenable to causal and information-theoretic analysis.
6.5 Declarative Specification of Policies and Causal Pathways
To increase transparency and contestability, we introduce a declarative view of policy and causal assumptions. Let L be a rule-based language over a set of predicates representing policy parameters, agent attributes, causal links, and admissible interventions. A declarative policy specification has the form:
rule: policy_update(Pt+1) ← state(st), goal(G), constraint(C).
Causal pathways are encoded as logical clauses:
causes(Pt, Et) ← mechanism(M ), context(K),
which corresponds to structural equations in the SCM.
Agents may access a restricted, policy-only subset of L, denoted LP . This allows them to form beliefs based on declarative statements such as:
expected_increase(λ) ← trend(Pt−3:t).
The declarative layer does not replace numerical simulation; rather, it serves as an interpretable scaffold for specifying intervention semantics, policy transitions, and causal assumptions. It bridges ABM dynamics with symbolic explanation models and supports the contestability requirements of policy simulation.
7 Diagnostics Layer: Causality, Information, and Emergent Pat
terns
7.1 Information-Theoretic Measures
Time series from simulation outputs can be analyzed using information-theoretic measures [1618, 55]:
• Entropy rate hμ: asymptotic unpredictability per time step.
• Statistical complexity Cμ: amount of information stored in the causal state representation.
• Predictive information E: mutual information between past and future.
These quantities distinguish between random, ordered, and complex regimes, and can reveal when control adjustments or learning rules move the system toward more predictable or more chaotic behavior. They provide an information-theoretic lens on multi-agent learning dynamics and recent work operationalizes these diagnostics specifically within adaptive MAS via reconstructed εmachines and Kolmogorov-style state compression [79].
8

7.2 Structural Causal Models and Counterfactuals
Structural causal models (SCMs) [32, 33, 44, 48, 49, 58] represent variables and interventions via directed acyclic graphs and structural equations. In the proposed framework, SCMs are used to:
• clarify assumed pathways through which control variables affect outcomes;
• define do-operator interventions corresponding to changes in control parameters;
• support counterfactual queries about alternative choices of system-level parameters.
Micro-level mechanisms in the MAS provide dynamics consistent with the SCM, while SCMs supply a transparent, contestable representation of causal assumptions. Coupling MAS with SCMs thus supports explainable and contestable decision-support systems.
7.3 Clustering and Emergent Regimes
High-dimensional simulation outputs (e.g. distributions of indicators across agents, locations, and time) are hard to interpret visually. Unsupervised learning techniques—principal component analysis (PCA) [76], t-SNE [75], k-means clustering [78], and Gaussian mixture models [77]— can identify emergent regimes and reduce dimensionality. Applications in ABM and complex-systems research show that clustering can reveal qualitatively distinct behavioral patterns [80–83], enabling systematic interpret-
ation of model trajectories. The framework leverages these tools to:
• group simulation runs into archetypal behaviors (e.g. stable vs. unstable, concentrated vs. dispersed);
• connect clusters with parameter configurations and dynamic regimes;
• support qualitative interpretation and communication of results.
Together, information-theoretic measures, SCMs, and clustering form a diagnostic stack for analyzing MAS trajectories and linking them back to learning and control design choices.
8 Experimental Design
8.1 Objectives
The experimental program is designed to answer the following questions:
• How do stability and performance differ across CPCA, CPVA, VPCA, and VPVA?
• How do synthetic population heterogeneity, interaction structure, and survey priors affect emergent behavior?
• How do information-theoretic measures respond to control changes and learning dynamics?
• Can clustering reliably identify distinct emergent regimes and relate them to design choices?
9

8.2 Design and Sampling
We adopt a computational experimental design. Independent variables include:
• regime type (CPCA, CPVA, VPCA, VPVA);
• initialization and step sizes of the control vector P ;
• strength and type of learning rules Li;
• interaction topology and network density;
• degree of heterogeneity in synthetic populations.
For each configuration, multiple replications with different random seeds are run for a fixed horizon T , and performance is evaluated over a window of length K as in Section 3.3. Parameter sampling may use grid or Latin hypercube designs to efficiently cover the space.
8.3 Analysis Plan
The analysis will:
1. Estimate distributions of J(P ; L) by regime and parameter configuration.
2. Assess stability via classification of trajectories (stationary, cyclic, drifting).
3. Compute entropy rate, Cμ, and predictive information across runs.
4. Use Morris and Sobol indices to identify influential parameters.
5. Apply clustering to aggregate output statistics and identify emergent regimes.
6. Map clusters back to control and learning configurations to characterize robustness.
9 Framework Synthesis and Methodological Implications
The proposed framework provides a domain-neutral architecture for adaptive multi-agent learning systems. By integrating synthetic populations, structured environments, survey-informed behavioral priors, causal graphs, information-theoretic diagnostics, and unsupervised clustering, it extends the interpretive and diagnostic capabilities of MAS beyond static scenario analysis.
The four-regime structure (CPCA, CPVA, VPCA, VPVA) clarifies where methodological gaps in the MAS and ABM literature lie: while CPCA and CPVA correspond to standard forward simulations with fixed controls, VPCA and VPVA address the less studied case where both agents and systemlevel parameters adapt. This is precisely where decision drift, unintended consequences, and complex feedbacks are most likely to arise, and where formal diagnostics and causal explanations are most needed.
From an AI perspective, the framework can be seen as a unifying template for combining multi-agent learning, external control optimization, information-theoretic evaluation, and causal reasoning. It
10

does not prescribe a specific learning algorithm or optimizer, but rather specifies how such components can be composed and analyzed within a single architecture.
Because the framework is deliberately domain-neutral, it can be instantiated in multiple application areas without changing the methodological core. Concrete instantiations would require specifying performance functionals, data sources for IPF, survey instruments, and interaction graphs, but the layered structure, regime taxonomy, and diagnostic toolkit remain the same.
10 Case Study: Emissions Policy as Adaptive Load Balancing
To illustrate how the proposed framework applies to a general policy problem, we consider emissions regulation as a load-balancing system. Emissions constitute a shared, capacity-limited resource: economic agents generate emissions through production or consumption, while a policymaker sets a cap, tax, or subsidy structure to maintain environmental sustainability. The resulting dynamics exhibit feedback, adaptation, bounded rationality, and long-run path dependence, making emissions policy a natur-
al instantiation of the four-regime architecture.
10.1 Model Definition
We consider a population of N agents generating emissions over discrete time steps t = 1, . . . , T . Let ei,t denote the emissions of agent i at time t. Each agent has attributes (θi, ηi) describing technological efficiency θi and propensity to adopt cleaner alternatives ηi.
Agents choose an emissions-generating action
xi,t = f (θi, ηi, Pt, st),
where Pt is a vector of policy parameters (e.g., carbon tax, cap, subsidy) and st is the system state, which may include past emissions or enforcement signals. Emissions resulting from the action satisfy
ei,t = g(xi,t, θi).
Aggregate emissions at time t are
Et =
N
X
i=1
ei,t,
subject to a system-level capacity constraint
Et ≤ Ct,
where Ct is an emissions cap or adaptive environmental budget.
The system state is st = Et (or a richer vector including volatility or compliance indicators). Performance balances sustainability, economic cost, and stability via a scalar functional
Φ(st) = −αEt − βOt − γVt,
where Ot measures the frequency or severity of cap exceedances and Vt captures volatility in emissions or compliance.
11

Over a finite evaluation window of length K, the overall performance of policy parameters P under learning dynamics L is
J(P ; L) = 1
K
T
X
t=T −K+1
Φ(st).
10.2 Population Layer: Synthetic Emitters
A synthetic population of firms or households is generated via IPF from aggregate environmental accounts, sectoral inventories, or survey data. Attributes (θi, ηi) encode heterogeneity in technology, abatement potential, and behavioral responsiveness. This representation is domain-neutral: the population may represent industries, transport modes, or households without loss of generality.
10.3 Environment Layer: Emissions Capacity and Sectors
The environment is defined by an emissions capacity Ct and optionally a sectoral structure. Let S = {1, . . . , M } denote sectors. Each sector j has a capacity Cj,t and receives emissions from agents N (j). Aggregate emissions satisfy:
Ej,t =
X
i∈N (j)
ei,t, Et =
M
X
j=1
Ej,t.
This parallels the load on nodes in a distribution network, but without spatial geometry.
10.4 Behavioral Layer: Adaptive Abatement Decisions
In the static case, emissions follow baseline technological efficiency:
ei,t = g(θi).
In the adaptive case, agents adjust emissions in response to policy signals:
ei,t+1 = ei,t − ηi Pt + ct ,
where ct is a congestion signal derived from proximity to the cap (e.g., marginal damage cost or a scarcity surcharge when Et nears Ct). This formulation captures bounded rationality, reinforcement learning, or threshold-based adoption of cleaner technologies.
10.5 Policy Layer: Adaptive Regulation
Policy parameters are represented as:
Pt = (λt, τt, σt),
where λt is a carbon tax or price, τt a cap or emissions budget, and σt a subsidy or support parameter. The policymaker updates Pt via an optimization rule G using observed performance:
Pt+1 = G(Pt, Jˆt, st).
This captures iterative adjustments common in climate policy, such as updating carbon prices or tightening emissions caps.
12

10.6 Regimes Instantiation
The emissions framework instantiates the four regimes as follows:
CPCA: Constant Policy, Constant Agents. λt, τt, σt fixed; no technological learning (ηi = 0). Represents baseline or static compliance scenarios.
CPVA: Constant Policy, Variable Agents. Policy fixed; agents adapt via efficiency gains or technology adoption (ηi > 0).
VPCA: Variable Policy, Constant Agents. Policymaker adapts Pt; firms do not change technology.
VPVA: Variable Policy, Variable Agents. Both policy and behavior adapt; fundamental feedbacks emerge, often yielding oscillatory or drifting emissions trajectories.
10.7 SCM Representation
We define an SCM with variables:
• Xt: exogenous drivers (economic activity, shocks),
• Θi: agent attributes (θi, ηi),
• Pt: policy parameters,
• Et: aggregate emissions,
• Yt: welfare outcomes (cost, compliance, volatility).
Directed edges include (Pt, Θ, Xt) → Et and Et → Yt, while policy adaptation introduces Et → Pt+1. Interventions do(Pt = p) formalize counterfactuals about alternate tax or cap trajectories.
10.8 Diagnostics: Information and Structure
Although the raw data originate from agent-level emissions paths {ei,t}, the information-theoretic diagnostics are computed from aggregate observables derived from these micro-level actions. Individual emissions are first aggregated to produce a system-wide emissions time series Et = P
i ei,t,
or analogous sectoral aggregates, and it is these trajectories that are used to estimate hμ, Cμ, and E. Once computed, these quantities become run-level descriptors of the dynamical behavior of the system rather than agent-level metrics. They stand alongside macro-indicators such as mean emissions, overload frequency, proximity to the cap, and volatility, forming a unified set of summary statistics for each simulation configuration. A full methodological treatment of ε-machine reconstruction and c-
omplexity profiling in MAS is presented in [79]. This makes it possible to cluster complete simulation runs to identify distinct dynamic patterns and to classify emergent emission-regime types.
13

This run-level clustering complements traditional agent-level clustering that is often used in ABM to identify behavioral or socio-demographic agent types. While micro-level clustering groups agents according to traits, propensities, or their time-averaged emissions behavior, macro-level clustering groups simulation outcomes into dynamic regimes (stable, near-critical, oscillatory, or unstable). When used together, the two approaches allow researchers to link heterogeneity in agent roles—such as -
high emitters, responsive adopters, or inertia-prone agents—to the macro regimes identified across runs. This establishes a bridge between population composition and the emergent structure of system-wide dynamics.
Time series of Et or sectoral emissions are analyzed through:
• entropy rate hμ for unpredictability,
• statistical complexity Cμ for structural richness,
• predictive information E for regime transitions.
Clustering of run-level summary statistics (e.g., mean emissions, overload frequency, hμ, Cμ, E) identifies stable, near-critical, and unstable emission regimes, revealing how combinations of learning behavior and policy search shape the resulting trajectory classes. Near-cap operation induces increases in hμ and Cμ, reflecting a transition from stable emissions trajectories to volatile or nearchaotic dynamics. As agents react to tightening constraints and shifting policy signals, the emissions pr-
ocess Et becomes less predictable (higher hμ), more structurally rich (higher Cμ), and exhibits stronger dependence between past and future (increasing E). To characterize these shifts, clustering (PCA + k-means or Gaussian mixtures) is applied to feature vectors combining:
(mean emissions, cap exceedance frequency, hμ, Cμ, E).
The resulting clusters distinguish qualitatively different system regimes:
• stable regimes (low emissions, low volatility),
• near-critical regimes (high Cμ, emerging structural complexity),
• cap-constrained or overloaded regimes (high hμ, low predictability),
• oscillatory regimes (intermediate entropy, alternating periods of abatement and rebound).
Together, these diagnostics reveal how combinations of boundedly rational learning behavior and adaptive policy search shape the trajectory classes that emerge near critical operating conditions.
10.9 Experimental Protocol
Experiments vary:
• initial policy (λ0, τ0, σ0),
• learning responsiveness ηi,
• exogenous shocks Xt,
14

• capacity constraints Ct or sectoral budgets.
For each configuration, R replications of length T are run; performance J(P ; L) is computed over a window K. Sensitivity analysis quantifies how policy parameters and learning rates affect stability and long-run emissions.
This case demonstrates how emissions policy fits naturally into the proposed framework as a loadbalancing problem with adaptive agents, adaptive policy, causal interpretability, and informationtheoretic diagnostics.
11 Case Study: Adaptive Load Balancing in Electric Grids via De
mand Response
Modern electric grids increasingly rely on distributed control, demand response, and adaptive pricing to maintain stability under fluctuating loads. The resulting dynamics are well represented as a multiagent system: households and firms behave as adaptive loads, while a system operator adjusts tariffs or control signals to prevent overload of transformers or feeders.
11.1 Model Definition
We consider a distribution grid with M nodes (transformers or feeders), each with capacity Cj. At discrete time steps t = 1, . . . , T , a population of consumers (agents) generates electricity demand. Let ai,t be the demand of agent i at time t. Each agent has attributes (θi, ηi) encoding baseline consumption θi and price responsiveness ηi.
Consumers choose a time-varying consumption level
xi,t = f (θi, ηi, Pt, ct),
where Pt is a vector of system-level control parameters (e.g., dynamic tariffs) and ct is a local congestion signal depending on the load at the agent’s node. Consumption aggregates to node-level load:
Lj,t =
X
i∈N (j)
xi,t,
where N (j) is the set of agents connected to node j. If Lj,t > Cj, the node is overloaded, causing losses or voltage drops.
The system state is st = (L1,t, . . . , LM,t). Performance balances stability, efficiency, and fairness using a scalar functional Φ(st). A typical choice is
Φ(st) = −αDt − βOt − γVt,
where Dt is aggregate demand, Ot the fraction of overloaded nodes, and Vt a measure of voltage deviation. Over a window of size K,
J(P ; L) = 1
K
T
X
t=T −K+1
Φ(st).
15

11.2 Population Layer: Synthetic Consumers
A synthetic population is generated by IPF using aggregate statistics such as household size, appliance ownership, income class, or time-of-use patterns. Attributes (θi, ηi) are drawn from this population: heterogeneous baseline loads θi represent housing, climate, and lifestyle differences, while price responsiveness ηi captures consumer willingness to shift or reduce consumption under dynamic tariffs.
This layer defines heterogeneity without committing to any specific empirical context.
11.3 Environment Layer: Distribution Grid Topology
The environment is a graph G = (V, E) where V are transformers/feeders and E represent distribution lines. Each node j has capacity Cj and a set of connected consumers. Power flows are represented in simplified form through node-level loads Lj,t; full AC power flow equations are not needed for load-balanced demand response studies.
11.4 Behavioral Layer: Consumer Adaptation
In the static case, consumption follows a fixed function xi,t = f (θi). In the adaptive case, agents respond to time-varying tariffs and congestion:
xi,t+1 = xi,t − ηi Pt + cj(i),t
where cj(i),t is a congestion penalty at the node where agent i is connected. This captures boundedly rational adaptation, discrete choice, or reinforcement learning behavior.
11.5 Policy Layer: Dynamic Tariffs and Control
The system operator adjusts tariffs Pt to reduce overload. We consider two controls:
1. time-varying price multiplier λt, and
2. congestion threshold τt indicating when surcharge applies.
The control vector Pt = (λt, τt) is updated by a policy search algorithm G that aims to improve J(P ; L). A hill-climbing or evolutionary strategy can serve as G, treating the MAS as a noisy black-box mapping.
11.6 Regime Instantiation
The four regimes are instantiated as follows.
CPCA: Constant Control, Constant Agents. λt = λ, τt = τ fixed; no consumer adaptation (ηi = 0).
16

CPVA: Constant Control, Variable Agents. Prices constant; consumers adapt (ηi > 0).
VPCA: Variable Control, Constant Agents. Consumers do not adapt; the system operator searches over Pt.
VPVA: Variable Control, Variable Agents. Both consumers and the system operator adapt. This regime exhibits the most complex dynamics, including oscillations between under- and overreaction.
11.7 SCM Representation
An SCM captures the causal structure:
• Xt: exogenous factors (weather, baseline demand);
• Pt: tariffs and congestion thresholds;
• Θ: consumer attributes (θi, ηi);
• st: node loads and congestion;
• Yt: performance outcomes (overload, demand, voltage).
Arrows represent relationships such as (Pt, Θ, Xt) → st and st → Yt, while adaptive control adds st → Pt+1. Interventions do(Pt = p) capture counterfactual comparisons between adaptive and static frameworks.
11.8 Diagnostics: Information and Structure
As in the previous instance, the information-theoretic diagnostics are computed from aggregate observables derived from node-level loads. Individual consumption is first aggregated to produce load trajectories Lj,t over nodes j, and a representative system-level observable (e.g., total demand Dt or a symbolized overload indicator) is extracted. It is this aggregate time series that is used to estimate hμ, Cμ, and E, which then serve as run-level summaries of the dynamical behavior of each simulati-
on rather than agent-level metrics. Once computed, these diagnostics stand alongside macro indicators such as overload frequency and mean demand, enabling clustering of complete simulation runs to reveal distinct operational regimes. See [79] for a general formulation of ε-machine–based diagnostics in adaptive multi-agent systems.
Clustering at this run-level resolves classes of emergent system trajectories—for example, stable, near-critical, oscillatory, or overloaded regimes. This represents one natural use of clustering in adaptive MAS. A complementary use, common in agent-based modeling, clusters agents themselves based on traits, behavioral propensities, or time-averaged actions. Such micro-level clustering can be used to link heterogeneous agent roles (e.g., high-demand households, flexible users, price-sensitive adop-
ters) to the macro-level clusters identified at the run level. Together, macro- and micro-level clustering provide a unified view of how population heterogeneity shapes, and is shaped by, emergent system dynamics.
17

From the trajectories of st, we compute:
• entropy rate hμ of load dynamics,
• statistical complexity Cμ of the reconstructed ε-machine,
• predictive information E between past and future loads.
We expect information-theoretic quantities to spike when the grid operates near capacity, reflecting a phase transition from stable to overloaded behavior. Clustering (PCA + k-means or Gaussian mixtures) is applied to feature vectors combining:
(mean demand, overload frequency, hμ, Cμ, E).
Clusters naturally separate into:
• stable regimes (low overload),
• near-critical regimes (high Cμ),
• overloaded regimes (high hμ, low predictability),
• oscillatory regimes (intermediate entropy, cyclic patterns).
11.9 Experimental Protocol
A typical experiment varies:
• exogenous demand patterns (peak/off-peak),
• tariff initialization (λ0, τ0),
• agent responsiveness ηi,
• grid capacity constraints.
For each configuration and regime, R replications of length T are run, and J(P ; L) is evaluated over the last K steps. Sensitivity analysis identifies dominant interactions between learning rates, capacities, and optimization parameters.
This case study illustrates how the proposed framework integrates adaptive behavior, system-level control, causal interpretation, and information- theoretic diagnostics in a realistic policy-relevant setting.
12 Synthesis and Discussion
The two case studies illustrate the generality and transferability of the proposed framework across both policy and infrastructure domains. Their high-level motivations, summarized in Table 1, show that despite addressing substantively different contexts—environmental emissions regulation
18

Aspect Emissions Policy Case Electricity Load-Balancing Case
Motivation Environmental regulation; managing pollution within sustainable limits.
Grid reliability; avoiding overloads and managing peak demand. Resource Mapped
Emissions treated as a load on a capacitylimited environmental system.
Electric load mapped to transformer/feeder capacity constraints. Agents Firms or households generating emissions; respond to policy incentives.
Households and firms generating electricity demand; respond to tariffs. Regulator Environmental authority adjusting taxes, caps, subsidies.
System operator (DSO) adjusting dynamic tariffs, thresholds. Primary Goal
Maintain sustainability and prevent exceeding environmental capacity.
Maintain grid stability and avoid transformer/feeder overloads.
Table 1: High-level motivation of the two case studies. Both instantiate the same conceptual machinery—synthetic populations, boundedly rational agents, adaptive control, policy search, and diagnostic tools—demonstrating methodological generality across policy and infrastructure domains.
and electric-grid demand management—each case instantiates the same core problem structure: resource constraints, adaptive agents, and an adaptive controller. Their structural parallelism is intentional.
In the emissions case, pollution output plays the role of a load on a shared environmental capacity, while abatement decisions correspond to reductions in that load; in the electricity case, household consumption contributes to nodal loads, and demand shifting plays an analogous role to abatement. Likewise, taxes, caps, and subsidies mirror dynamic tariffs and congestion thresholds, and the environmental regulator parallels the grid operator. This isomorphism demonstrates that the framework abstra-
cts from domain-specific semantics, enabling a uniform treatment of adaptation, control, and emergent behavior.
Aspect Emissions Policy Case Electricity Load-Balancing Case
Agent Attributes
Technological efficiency θi; responsiveness to clean alternatives ηi.
Baseline load θi; price responsiveness ηi.
Adaptive Behavior
Agents reduce emissions based on taxes, congestion (proximity to cap), and responsiveness.
Agents reduce or shift consumption based on dynamic tariffs and local congestion.
Update Rule ei,t+1 = ei,t − ηi(Pt + congestion) xi,t+1 = xi,t − ηi(Pt + congestion) Functional Interpretation
Abatement effort; cleaner technology adoption; behavioral adjustment.
Demand shifting; peak shaving; response to real-time price signals.
Table 2: Comparison of agent attributes and behavioral updates. Both domains use parallel adaptive rules, differing only in interpretation: emissions abatement versus electricity demand shifting.
At the methodological level, both cases rely on the same diagnostic stack—structural causal models for intervention semantics, information-theoretic measures for detecting shifts in predictability and latent structure, and clustering techniques for identifying emergent dynamic regimes. The parallel structure of agent attributes and adaptive behavior (Table 2) underscores how the same behavioral update equation is instantiated in two semantically distinct domains. Differences in environmental repre-
sentation (Table 3) highlight the shift from an abstract, sector-based capacity constraint to a fully spatial, networked topology with node-specific limits. Likewise, distinctions in the policy and control layers (Table 4) show how regulatory instruments and operational tariffs can be expressed
19

within a unified control vector and adapted through the same optimization mechanism.
Feature Emissions Policy Case Electricity Load-Balancing Case
Topology Non-spatial; sectoral or aggregate population.
Explicit network graph G = (V, E); nodespecific agents. Capacity Structure
Global or sector-specific capacity Ct. Node-level capacities (transformers/feeders) Cj. Congestion Mechanism
Exceeding or approaching emissions cap triggers policy pressure.
Local overload occurs when demand > node capacity Cj. Spatiality Abstract; no geometry required. Strong spatial component; topology shapes agent interactions.
Table 3: Comparison of environmental structures. The emissions model uses an abstract capacity constraint, whereas the electricity model embeds agents in a physical network, adding spatial heterogeneity and localized congestion.
Aspect Emissions Policy Case Electricity Load-Balancing Case
Policy Vector Components
(λt, τt, σt): carbon tax, emissions cap, subsidy.
(λt, τt): price multiplier, congestion threshold.
Control Objective
Regulate emissions intensity and compliance with environmental limits.
Maintain grid stability and reduce peak load. Feedback Loop
Policy reacts to aggregate emissions and volatility.
Operator reacts to nodal overload and grid stress. Dimensionality More multi-dimensional (three levers). More operational (tariff + threshold). Adaptive Search
External search adjusts policy vector to improve performance metrics.
Identical adaptive search structure applied to grid-control parameters.
Table 4: Comparison of policy/control layers. Both treat policy as a dynamic control variable adapted via external optimization, but the emissions domain centers on regulatory instruments while the electricity case focuses on operational grid management.
Across both domains, the diagnostic tools reveal consistent signatures of stability, criticality, and oscillatory behavior. Because both case studies can be run under the CPCA, CPVA, VPCA, and VPVA regimes, they provide a comparative view of how combinations of agent adaptation and policy search shape system dynamics. The emissions case highlights policy drift, long-run sustainability constraints, and macro-level volatility, whereas the electricity case emphasizes operational stability, network co-
ngestion, and real-time adaptation. Together, these contrasts reinforce the claim that the framework is domain-neutral and provides a general methodological lens for analyzing adaptive multi-agent systems under dynamic policy and resource constraints.
13 Conclusion
This paper has presented a general framework for adaptive multi-agent learning in systems where both agents and policy-makers co-evolve over time. The approach combines four key components: (i) a taxonomy of dynamic regimes describing the joint adaptation of agents and system-level control parameters; (ii) the integration of synthetic population methods, structured interaction topologies, and survey-informed priors as modular initialization elements; (iii) causal and information-theoretic
20

diagnostics for assessing predictability, stability, and structural change in generated trajectories; and (iv) clustering techniques for uncovering emergent regimes in high-dimensional output spaces.
Taken together, these elements provide a domain-neutral blueprint for constructing, analyzing, and explaining adaptive multi-agent systems. By separating agent behavior, learning rules, system-wide policy adaptation, and diagnostic tools into modular components, the framework enables systematic exploration of how local decision rules and adaptive control interact to produce global patterns. The design is intentionally transparent: each component—initialization, adaptation, control, and evaluation—-
can be independently modified or extended, supporting a wide range of methodological and applied research.
Future work will apply the framework to concrete MAS settings to evaluate its performance relative to static or single-regime designs, examine its robustness under richer behavioral heterogeneity, and explore the benefits of multi-level or hierarchical control architectures. Beyond methodological advances, the framework aims to contribute practical tools for constructing explainable and contestable decision processes in complex environments involving adaptation, uncertainty, and policy feedback.
Acknowledgments and Disclosure Statements
Preprint Statement
This manuscript is released as a preprint to facilitate open scientific discussion and to provide a transparent methodological foundation for ongoing work. The content may undergo further revision in subsequent journal submissions.
PhD Research Disclosure
This work was conducted as part of the author’s doctoral research in the Faculty of Pure and Applied Sciences at the Open University of Cyprus and in affiliation with the Department of Informatics, Systems and Communication (DISCo) at the University of Milano–Bicocca. The methodological framework presented here forms part of the doctoral research agenda on adaptive multi-agent systems, causal diagnostics, and explainable policy design.
Acknowledgments
The author is grateful to Dr. Loizos Michael for insightful discussions during the early stages of this work, particularly regarding the articulation of adaptive regimes and the role of formal diagnostics in multi-agent systems. His feedback helped refine the conceptual emphasis of the framework; all remaining errors or omissions are the author’s responsibility.
Funding and Institutional Support
No dedicated funding was received specifically for preparing this manuscript. Institutional support was provided through standard doctoral research resources from the Open University of Cyprus and
21

the University of Milano–Bicocca. No external grants, contracts, or third-party funding mechanisms influenced the design, execution, or reporting of this work.
Author Contributions
The author is solely responsible for the conception, design, mathematical formulation, implementation, analysis, and writing of this work, including all revisions.
Use of Digital Assistants
During manuscript preparation, the author used digital assistants (ChatGPT, OpenAI; Perplexity.ai, San Francisco, CA; and Publish or Perish, Harzing.com) solely for language refinement, LATEX and code editing, literature retrieval, and bibliometric verification. The author reviewed and edited all generated content and assumes full responsibility for the final text and its scientific interpretations. No financial or material support, administrative assistance, or in-kind contributions were received-
 beyond the software tools explicitly mentioned above.
Conflict of Interest Statement
The author declares no conflicts of interest, financial or otherwise, related to the subject matter of this manuscript.
Data and Code Availability
All code, model specifications, and computational procedures referenced in this manuscript will be made available in a public repository upon reasonable request. No proprietary or sensitive datasets were used in this study.
References
[1] M. Ajelli, B. Gonçalves, D. Balcan, V. Colizza, H. Hu, J. J. Ramasco, S. Merler, and A. Vespignani. Comparing large-scale computational approaches to epidemic modeling: Agentbased versus structured metapopulation models. BMC Infectious Diseases, 10:190, 2010. doi:10.1186/1471-2334-10-190
[2] L. An, V. Grimm, A. Sullivan, B. L. Turner II, N. Malleson, A. Heppenstall, C. Vincenot, D. Robinson, X. Ye, J. Liu, E. Lindkvist, and W. Tang. Challenges, tasks, and opportunities in modeling agent-based complex systems. Ecological Modelling, 457:109685, 2021. doi:10.1016/j.ecolmodel.2021.109685
[3] W. B. Arthur. Inductive reasoning and bounded rationality. American Economic Review, 84(2):406–411, 1994. URL: https://www.jstor.org/stable/2117868
[4] A. H. Auchincloss and A. V. Diez Roux. A new tool for epidemiology: the usefulness of dynamic agent-based models in understanding place effects on health. American Journal of Epidemiology, 168(1):1–8, 2008. doi:10.1093/aje/kwn118
22

[5] A. Baños and N. Marilleau. Agent-Based Spatial Simulation with NetLogo, Volume 1: Introduction and Bases. ISTE Press & Elsevier, 2015. ISBN: 9781785480578
[6] R. J. Beckman, K. A. Baggerly, and M. D. McKay. Creating synthetic baseline populations. Transportation Research Part A: Policy and Practice, 30(6):415–429, 1996. doi:10.1016/09658564(96)00004-3
[7] J. Boyd, R. Wilson, C. Elsenbroich, A. Heppenstall, and P. Meier. Agent-based modelling of health inequalities following the complexity turn in public health: A systematic review. International Journal of Environmental Research and Public Health, 19(24):16807, 2022. doi:10.3390/ijerph192416807
[8] R. Conte and M. Paolucci. On agent-based modeling and computational social science. Frontiers in Psychology, 5:668, 2014. doi:10.3389/fpsyg.2014.00668
[9] Chapuis, K., Taillandier, P., & Drogoul, A. (2022). Generation of synthetic populations in social simulations: A review of methods and practices. Journal of Artificial Societies and Social Simulation, 25(2), 6. https://doi.org/10.18564/jasss.4762.
[10] A. Charpentier, R. Elie, and C. Remlinger. Reinforcement learning in economics and finance. Computational Economics, 59(3):525–566, 2021. doi:10.1007/s10614-021-10119-4
[11] S. Chang. A modularized agent-based framework for causal-based policy-making. In 2024 IEEE International Conference on Agents (ICA), pages 15–18, 2024. doi:10.1109/ICA63002.2024.00011
[12] C. Cioffi-Revilla. Computational Social Science. Springer, 2017. doi:10.1007/978-1-4471-5661-1
[13] A. Collins, M. Koehler, and C. Lynch. Methods that support the validation of agent-based models: An overview and discussion. Journal of Artificial Societies and Social Simulation, 27(1), 2024. doi:10.18564/jasss.5258
[14] F. Colombo, A. Llena-Nozal, J. Mercier, and F. Tjadens. Help Wanted? Providing and Paying for Long-Term Care. OECD Publishing, 2011. doi:10.1787/9789264097759-en
[15] M. Comis, C. Cleophas, and C. Büsing. Patients, primary care, and policy: Agent-based simulation modeling for health care decision support. Health Care Management Science, 24(4):799817, 2021. doi:10.1007/s10729-021-09556-2
[16] T. M. Cover and J. A. Thomas. Elements of Information Theory, 2nd ed. Wiley, 2006. ISBN: 9780471241959
[17] J. P. Crutchfield. The calculi of emergence: Computation, dynamics, and induction. Physica D, 75(1–3):11–54, 1994. doi:10.1016/0167-2789(94)90273-9
[18] J. P. Crutchfield and K. Young. Inferring statistical complexity. Physical Review Letters, 63(2):105–108, 1989. doi:10.1103/PhysRevLett.63.105
[19] M. Douglas, S. V. Katikireddi, M. Taulbut, M. McKee, and G. McCartney. Resilience: The golden thread in public health policy. Journal of Epidemiology and Community Health, 74(1):60–61, 2019. doi:10.1136/bmj.m1557
[20] J. B. Dunham. An agent-based spatially explicit epidemiological model. Journal of Artificial Societies and Social Simulation, 8(4), 2005. URL: https://www.jasss.org/9/1/3.html
23

[21] J. M. Epstein. Agent-based computational models and generative social science. Complexity, 4(5):41–60, 1999. URL: https://cdanfort.w3.uvm.edu/csc-reading-group/epstein-complexity1999.pdf
[22] J. M. Epstein. Modelling to contain pandemics. Nature, 460:687, 2009. doi:10.1038/460687a
[23] A. D. Selbst, D. Boyd, S. A. Friedler, S. Venkatasubramanian, and J. Vertesi. Fairness and abstraction in sociotechnical systems. Proceedings of the Conference on Fairness, Accountability, and Transparency (FAT*), 59–68, 2019. doi:10.1145/3287560.3287598
[24] European Union. Artificial Intelligence Act: Regulation (EU) 2024/1689 of the European Parliament and of the Council. Official Journal of the European Union, L 168:1–120, 2024. URL: https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng
[25] J. M. Epstein. Generative Social Science: Studies in Agent-Based Computational Modeling. Princeton University Press, 2012. ISBN: 9780691125473
[26] J. M. Epstein and R. Axtell. Growing Artificial Societies: Social Science from the Bottom Up. Brookings Institution Press / MIT Press, 1996. ISBN: 9780262550253
[27] T. C. Germann, K. Kadau, I. M. Longini, and C. A. Macken. Mitigation strategies for pandemic influenza in the United States. Proceedings of the National Academy of Sciences, 103(15):59355940, 2006. doi:10.1073/pnas.0601266103
[28] N. Gilbert. Agent-Based Models. Sage, 2008. ISBN: 9781412949645
[29] U. Gostoli and E. Silverman. Modelling social care provision in an agent-based framework with kinship networks. Royal Society Open Science, 6(7):190029, 2019. doi:10.1098/rsos.190029
[30] V. Grimm, S. F. Railsback, C. E. Vincenot, et al. The ODD protocol for describing agent-based and other simulation models: A second update to improve clarity, replication, and structural realism. Ecological Modelling, 438:109362, 2020. doi:10.18564/jasss.4259
[31] A. Heppenstall, A. Crooks, L. See, and M. Batty, editors. Agent-Based Models of Geographical Systems. Springer, 2016. doi:10.1007/978-90-481-8927-4
[32] M. A. Hernán and J. M. Robins. Causal Inference: What If. Chapman & Hall/CRC, 2020. ISBN: 9781420076165
[33] A. B. Hill. The environment and disease: Association or causation? Proceedings of the Royal Society of Medicine, 58:295–300, 1965. URL: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1898525/
[34] J. H. Holland. Complex Adaptive Systems. Addison-Wesley, 1992. ISBN: 9780201557480
[35] M. Keck and P. Sakdapolrak. What is social resilience? Lessons learned and ways forward. Erdkunde, 67(1):5–19, 2013. doi:10.3112/erdkunde.2013.01.02
[36] J. P. C. Kleijnen. Statistical analysis of steady-state simulations: Survey of current practice. European Journal of Operational Research, 15(1):25–35, 1984. doi:10.1016/0377-2217(84)902297
[37] J. P. C. Kleijnen. Simulation Experiments in Practice. Springer, 2007. ISBN: 978-1402055641
24

[38] S. A. Levin. Ecosystems and the biosphere as complex adaptive systems. Ecosystems, 1:431436, 1998. doi:10.1007/s100219900037
[39] M. Li and P. Vitányi. An Introduction to Kolmogorov Complexity and Its Applications, 3rd edition. Springer, 2008. doi:10.1007/978-0-387-49820-1
[40] J. H. Miller and S. E. Page. Complex Adaptive Systems. Princeton University Press, 2007. ISBN: 9780691127026
[41] M. D. Morris. Factorial sampling plans for preliminary computational experiments. Technometrics, 33(2):161–174, 1991. doi:10.1080/00401706.1991.10484804
[42] M. E. Northridge and S. S. Metcalf. Enhancing implementation science by applying best principles of systems science. Health Research Policy and Systems, 14(1):1–8, 2016. doi:10.1186/s12961-016-0146-8
[43] M. Oremland and R. Laubenbacher. Optimization of agent-based models: Scaling methods and heuristic algorithms. Journal of Artificial Societies and Social Simulation, 17(2):6, 2014. URL: https://www.jasss.org/17/2/6.html
[44] J. Pearl. Causality: Models, Reasoning, and Inference, 2nd edition. Cambridge University Press, 2009. ISBN: 9780521895606
[45] L. Perez and S. Dragičević. An agent-based approach for modeling dynamics of contagious disease spread. International Journal of Health Geographics, 8:50, 2009. doi:10.1186/1476072X-8-50
[46] M. Prédhumeau and E. Manley. A synthetic population for agent-based modelling in Canada. Scientific Data, 10:148, 2023. doi:10.1038/s41597-023-02030-4
[47] A. Rieder, S. Chakraborty, S. Goyal, and D. J. Berndt. A critical realist approach to agentbased modeling: Unlocking prediction in non-positivist paradigms. Journal of Information Technology, 2025. Forthcoming.
[48] K. J. Rothman, S. Greenland, and T. Lash. Modern Epidemiology, 3rd edition. Lippincott Williams & Wilkins, 2008. ISBN: 9780781755641
[49] D. B. Rubin. Estimating causal effects of treatments in randomized and nonrandomized studies. Journal of Educational Psychology, 66(5):688–701, 1974. doi:10.1037/h0037350
[50] D. B. Rubin. Multiple imputation after 18+ years. Journal of the American Statistical Association, 91(434):473–489, 1996. doi:10.1080/01621459.1996.10476908
[51] A. Saltelli and P. Annoni. How to avoid a perfunctory sensitivity analysis. In Design and Analysis of Experiments, pp. 137–157. Springer, 2010. doi:10.1016/j.cpc.2009.09.018
[52] M. Schlüter, C. Brelsford, P. J. Ferraro, K. Orach, M. Qiu, and M. D. Smith. Unraveling complex causal processes that affect sustainability requires more integration between empirical and modeling approaches. Proceedings of the National Academy of Sciences, 120(41):e2215676120, 2023. doi:10.1073/pnas.2215676120
[53] L. W. Schruben, H. Singh, and L. Tierney. Optimal tests for initialization bias in simulation output. Communications of the ACM, 26(4):279–285, 1983. doi:10.1287/opre.31.6.1167
25

[54] I. Shergold and G. Parkhurst. Transport-related social exclusion among older people in rural Southwest England and Wales. Journal of Transport Geography, 21:80–89, 2012. doi:10.1016/j.jrurstud.2012.01.010
[55] C. R. Shalizi and J. P. Crutchfield. Computational mechanics: Pattern and prediction, structure and simplicity. Journal of Statistical Physics, 104:817–879, 2001. doi:10.1023/A:1010388907793
[56] L. Tesfatsion and K. L. Judd, editors. Handbook of Computational Economics, Volume 2: Agent-Based Computational Economics. Elsevier, 2006. ISBN: 9780444512536
[57] M. Tracy, M. Cerdá, and K. M. Keyes. Agent-based modeling in public health: Current applications and future directions. Annual Review of Public Health, 39:77–94, 2018. doi:10.1146/annurev-publhealth-040617-014317
[58] T. J. VanderWeele. Explanation in Causal Inference: Methods for Mediation and Interaction. Oxford University Press, 2015. ISBN: 9780199325870
[59] E. Von Hoene, A. Roess, H. Kavak, and T. Anderson. Synthetic population generation with public health characteristics for spatial agent-based models. PLoS Computational Biology, 21(3):e1012439, 2025. doi:10.1371/journal.pcbi.1012439
[60] E. H. Durfee, V. R. Lesser, and D. D. Corkill. Coordination of distributed problem solvers. Springer Series in Information Sciences, 17, 1988. doi:10.1007/978-1-4613-1699-2
[61] Y. Shoham and K. Leyton-Brown. Multiagent Systems: Algorithmic, Game-Theoretic, and Logical Foundations. Cambridge University Press, 1997. ISBN: 9780521834544
[62] M. Wooldridge. An Introduction to MultiAgent Systems, 2nd edition. Wiley, 2009. ISBN: 9780470519462
[63] M. J. Osborne and A. Rubinstein. A Course in Game Theory. MIT Press, 1994. ISBN: 9780262650403
[64] R. B. Myerson. Game Theory: Analysis of Conflict. Harvard University Press, 1997. ISBN: 9780674341166
[65] L. Busoniu, R. Babuska, and B. De Schutter. A comprehensive survey of multiagent reinforcement learning. IEEE Transactions on Systems, Man, and Cybernetics, Part C, 38(2):156–172, 2008. doi:10.1109/TSMCC.2007.913919
[66] K. Zhang, Z. Yang, and T. Basar. Multi-agent reinforcement learning: A selective overview of theories and algorithms. In Handbook of Reinforcement Learning and Control. Springer, 2021. doi:10.1007/978-3-030-60990-0_1
[67] D. S. Bernstein, R. Givan, N. Immerman, and S. Zilberstein. The complexity of decentralized control of Markov decision processes. Mathematics of Operations Research, 27(4):819–840, 2002. doi:10.1287/moor.27.4.819.297
[68] F. A. Oliehoek and C. Amato. A Concise Introduction to Decentralized POMDPs. Springer, 2016. doi:10.1007/978-3-319-28929-8
[69] R. Johansson and A. Rantzer (Eds.). Distributed Decision Making and Control. Lecture Notes in Control and Information Sciences, vol. 417. Springer London, 2012. doi:10.1007/978-1-44712265-4
26

[70] I. Ajzen. The theory of planned behavior. Organizational Behavior and Human Decision Processes, 50(2):179–211, 1991. doi:10.1016/0749-5978(91)90020-T
[71] T. Balke and N. Gilbert. How do agents make decisions? A survey. Journal of Artificial Societies and Social Simulation, 17(4), 2014. URL: https://www.jasss.org/17/4/13.html
[72] C. F. Camerer, T.-H. Ho, and J.-K. Chong. Behavioral Game Theory: Experiments in Strategic Interaction. Princeton University Press, 2003. ISBN: 9780691090399
[73] J. M. Epstein. Generative Social Science: Studies in Agent-Based Computational Modeling. Princeton University Press, 2006. ISBN: 9780691125473
[74] S. A. Nowak, L. J. Matthews, and A. M. Parker. A general agent-based model of social learning: Using survey data to inform and parameterize agent behaviour. RAND Corporation Research Report, RR-1768, 2017. URL: https://www.rand.org/pubs/research_reports/RR1768.html
[75] L. van der Maaten and G. Hinton. Visualizing data using t-SNE. Journal of Machine Learning Research, 9:2579–2605, 2008. URL: https://www.jmlr.org/papers/volume9/vandermaaten08a/vandermaaten08a.pdf
[76] I. Jolliffe and J. Cadima. Principal component analysis: a review and recent developments. Philosophical Transactions of the Royal Society A, 374(2065):20150202, 2016. doi:10.1098/rsta.2015.0202
[77] A. P. Dempster, N. M. Laird, and D. B. Rubin. Maximum likelihood from incomplete data via the EM algorithm. Journal of the Royal Statistical Society: Series B, 39(1):1–38, 1977. URL: https://www.jstor.org/stable/2984875
[78] D. Arthur and S. Vassilvitskii. k-means++: The advantages of careful seeding. In Proceedings of the Eighteenth Annual ACM-SIAM Symposium on Discrete Algorithms, pp. 1027–1035, 2007. doi:10.5555/1283383.1283494
[79] R. Garrone. Characterizing Agent-Based Model Dynamics via ε-Machines and Kolmogorov-Style Complexity. arXiv preprint arXiv:2510.12729v2 [cs.MA], 2025. doi:10.48550/arXiv.2510.12729
[80] J. Grazzini, M. Richiardi, and M. Tsionas. Bayesian estimation of agent-based models. Journal of Economic Dynamics and Control, 77:26–47, 2017. doi:10.1016/j.jedc.2017.01.014
[81] B. Edmonds and S. Moss. From KISS to KIDS – an ‘anti-simplistic’ modelling approach. In Multi-Agent and Multi-Agent-Based Simulation, pp. 70–84. Springer, 2005. doi:10.1007/978-3540-32243-6_11
[82] E. Hunter, B. Mac Namee, and J. Kelleher. A taxonomy for agent-based models in human infectious disease epidemiology. Journal of Artificial Societies and Social Simulation, 20(3):2, 2017. doi:10.18564/jasss.3414
[83] A.-J. Fougères, P. Chevrier, N. Marilleau, and A. Drogoul. Modelling and simulation of complex systems: An approach based on multi-level agents. arXiv preprint arXiv:1201.3880, 2012. doi:10.48550/arXiv.1201.3880
[84] A. T. Crooks, C. J. E. Castle, and M. Batty. Key challenges in agent-based modelling for geo-spatial simulation. Computers, Environment and Urban Systems, 32(6):417–430, 2008. doi:10.1016/j.compenvurbsys.2008.09.004
27

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:44.530Z
- **Text Length:** 69449 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 27 of 27
