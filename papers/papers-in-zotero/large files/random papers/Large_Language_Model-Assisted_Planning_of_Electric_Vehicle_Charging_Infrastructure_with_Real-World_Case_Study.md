# PDF Document: Zheng et al. - 2025 - Large Language Model-Assisted Planning of Electric Vehicle Charging Infrastructure with Real-World C.pdf

**File Path:** Zheng et al. - 2025 - Large Language Model-Assisted Planning of Electric Vehicle Charging Infrastructure with Real-World C.pdf

**Processed Date:** 2026-02-10T18:14:12.055Z

**File Size:** 6561.72 KB

**Total Pages:** 19

**Extracted Pages:** 19

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3272

**Title:** Large Language Model-Assisted Planning of Electric Vehicle Charging Infrastructure with Real-World Case Study

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Large Language Model-Assisted Planning of Electric Vehicle Charging Infrastructure with
Real-World Case Study
Xinda Zhenga,1, Canchen Jianga,1, Hao Wanga,b,∗
aDepartment of Data Science and AI, Faculty of Information Technology, Monash University, Clayton, 3800, Victoria, Australia bMonash Energy Institute, Monash University, Clayton, 3800, Victoria, Australia
Abstract
The growing demand for electric vehicle (EV) charging infrastructure presents significant planning challenges, requiring efficient strategies for investment and operation to deliver cost-effective charging services. However, the potential benefits of EV charging assignment, particularly in response to varying spatial-temporal patterns of charging demand, remain under-explored in infrastructure planning. This paper proposes an integrated approach that jointly optimizes investment decisions and char-
ging assignments while accounting for spatial-temporal demand dynamics and their interdependencies. To support efficient model development, we leverage a large language model (LLM) to assist in generating and refining the mathematical formulation from structured natural-language descriptions, significantly reducing the modeling burden. The resulting optimization model enables optimal joint decision-making for investment and operation. Additionally, we propose a distributed optimization algorithm b-
ased on the Alternating Direction Method of Multipliers (ADMM) to address computational complexity in high-dimensional scenarios, which can be executed on standard computing platforms. We validate our approach through a case study using 1.5 million real-world travel records from Chengdu, China, demonstrating a 30% reduction in total cost compared to a baseline without EV assignment.
Keywords: Electric vehicle, charging infrastructure planning, large language model (LLM), optimization, alternating direction method of multipliers (ADMM)
Nomenclature
Indices
i Index of locations
j Index of locations
k Index of interactions for distributed algorithm
t Index of time slots
Parameters
αt
i Coefficient between charging demand and traffic flow at time t in location i
β Coefficient between charging demand and charging capacity
π0 Based investment cost per unit charging capacity
πi Location-dependent investment cost per unit charging capacity of location i
ρ Penalty for distributed ADMM algorithm
B Total investment budget
Ci Maximum charging capacity at location i
Et Expect number of recurrent periods for time slot t
∗Corresponding author: Hao Wang.
Email address: hao.wang2@monash.edu (Hao Wang) 1These authors contributed equally to this work.
Ft
i Traffic flow at time t in location i
Li j Assignment cost per EV location i and location j
R Assignment range limitation
Sets
I Locations
T Time slots in the operation horizon
Variables
ci Charging capacity decision at location i
c ̃i Auxiliary variable for ci
λi Lagrangian multipliers (dual variable) for constraint ci− c ̃i = 0
zt
i j EV assignment decision from location i to location j at time t
Qdual Dual error for distributed ADMM algorithm
Qprimal Primal error for distributed ADMM algorithm
1. Introduction
Electric vehicles (EVs) have emerged as a promising solution to reduce greenhouse gas emissions in the transportation sector, thereby advancing the goal of net-zero transportation. The adoption of EVs can reduce operational and maintenance costs for consumers but offer significant environmental benefits
arXiv:2511.19055v1 [eess.SY] 24 Nov 2025

for society [1]. Research indicates that widespread EV adoption could mitigate up to 25.5% of anticipated winter warming [2]. Leading this transformative change, countries such as the United Kingdom are actively transitioning away from fossil fuels toward an electrified transportation future [3]. However, the success of this transition is heavily dependent on the development of robust EV charging infrastructure. Proactive and strategic deployment of charging stations is indispensable for enabling-
 a smooth shift to electric mobility [4]. Despite recent progress, including a notable 55% increase in public charging stations reported by the International Energy Agency’s Global EV Outlook 2023 [5], significant challenges persist. These include determining optimal locations for charging stations, managing service coverage and efficiency, and ensuring the economic viability of charging infrastructure investments [6]. According to [7], residents’ satisfaction with the availability of charging sta-
tions significantly influences their willingness to adopt EVs. Leading EV manufacturers have advocated for increased government incentives and substantial investments in charging infrastructure to boost EV adoption rates worldwide [8]. Conversely, recent reports [9, 10, 11] suggest that the rapid expansion of public EV charging infrastructure across different countries has led to overcapacity, resulting in inefficiencies and underutilized charging stations. These misalignments with actual EV user -
demand have caused resource waste and run counter to sustainability. Therefore, thorough planning and deployment of EV charging infrastructure are crucial for providing quality charging services and promoting a sustainable and efficient charging ecosystem. Such an ecosystem not only supports the growing EV market but also ensures that the environmental and social benefits of EVs are fully realized, ultimately contributing to global efforts to sustainable development. Numerous optimization models h-
ave been proposed to address these issues. Early work applied flow-based siting to locate facilities at centroids of traffic demand [12], while operational studies optimized EV assignment and charging for fixed stations using equilibrium formulations [13]. More recent efforts attempted to link investment and operations, such as facility-level joint designs [14], joint optimization of autonomous EV fleets with station siting [15], and bi-level formulations integrating location and routing [16]. The-
se advances (see Section 2 for a full review) nevertheless fall short in two critical respects. First, most inadequately capture the spatialtemporal coupling of charging, even though real-world charging demand varies strongly across both time and space. Second, building such detailed models typically requires extensive expert effort to define problem structures, extract relevant features, and handcraft optimization formulations. These limitations hinder efficient and scalable planning at city scal-
e. To overcome this modeling bottleneck, recent advances in large language models (LLMs) provide promising tools to accelerate formulation. Several studies [17, 18, 19] have demonstrated that LLMs are capable of translating structured naturallanguage descriptions into optimization variables, constraints, and solver-ready code. Building on this capability, we propose a human-LLM collaborative workflow for EV charging infras
tructure planning. This approach reduces the burden of manual formulation while allowing experts to iteratively refine and validate model structures, enabling rapid development of contextspecific optimization models. However, even with faster model generation, realistic planning problems that account for finegrained spatial and temporal demand remain very large-scale and high-dimensional, creating significant computational challenges. Addressing this computational complexity requires solution meth-
ods that scale beyond centralized solvers. Distributed optimization, particularly the Alternating Direction Method of Multipliers (ADMM) [20], is well suited to such settings. ADMM decomposes large models into parallelizable subproblems, reducing computational burdens while maintaining theoretical guarantees. It has already proven effective in diverse energy system applications, including microgrid energy trading [21], restoration in transmission systems with high renewable penetration [22], energ-
y management for virtual power plants [23], and airconditioning system optimization [24]. By extending these advantages to EV infrastructure planning, we enable efficient solution of city-scale problems where spatial-temporal coupling across many locations and times would otherwise render optimization intractable. Motivated by these considerations, this paper develops a novel and practical approach that integrates LLM-assisted modeling with distributed optimization to jointly address infrastructur-
e investment and EV charging assignment. Our model, developed through an LLM-assisted modeling process, explicitly captures spatial-temporal variations in charging demand and the coupling between investment and operational decisions across time and space, improving both modeling efficiency and accuracy. To address the computational complexity of such highdimensional problems, we design a distributed optimization algorithm based on the ADMM, which enables efficient decomposition into regional sub-p-
roblems solvable on standard computing hardware. The effectiveness of our framework is demonstrated through a real-world case study in Chengdu, China, using 1.5 million travel records, showing the substantial benefits of jointly optimizing EV infrastructure planning and operational assignment. The main contributions of this paper are as follows:
• LLM-assisted joint optimization of charging infrastructure investment and EV assignment: We propose a comprehensive optimization framework that jointly captures long-term infrastructure investment and short-term EV assignment, grounded in a nuanced understanding of spatialtemporal charging demand. This formulation explicitly models the interdependencies between investment and operation across multiple time scales and locations. To support efficient model development, we leverage a LLM to generat-
e and iteratively refine the mathematical formulation based on natural-language descriptions of the planning scenario. The resulting model integrates expertdriven insights with LLM-assisted structure generation, enabling a rigorous and scalable approach to EV infrastructure planning.
2

• An ADMM-based distributed solution method: To overcome the computational burdens of optimizing a largescale optimization problem with temporal-spatial coupling, we design a distributed algorithm based on ADMM. This algorithm mitigates computational overhead by decomposing the central problem into sub-problems that can be solved in parallel at individual nodes. This approach ensures that each sub-problem remains manageable within the computational capabilities of standard computing systems, allo-
wing for broader and more feasible implementation.
• A real-world case study in Chengdu, China: Using an empirical dataset of 1.5 million real-world travel records from Chengdu, China, we demonstrate the effectiveness of our method in an urban setting. Our study shows that incorporating EV assignments results in a 30% reduction in overall costs compared to a baseline that overlooks the operational benefits. This joint optimization not only reduces costs but also improves charging facility utilization. The results analysis provide insights into spa-
tialtemporal characteristics, offering a deeper understanding of charging demand. Additionally, the case study showcases the effectiveness of our ADMM-based algorithm in a real-world context.
The remainder of this paper is organized as follows. Section 2 provides a review of relevant literature on EV infrastructure planning. Section 3 presents the LLM-assisted modeling for the joint investment and assignment optimization problem. Section 4 is dedicated to the exposition of the distributed ADMM algorithm for solving the formulated optimization problem. In Section 5, we apply the proposed model to a case study, utilizing real-world travel records from Chengdu, China, and solving an optim-
al solution for the given scenario. Lastly, Section 6 concludes this paper with outlooks for future work.
2. Literature review
2.1. Siting and demand estimation approaches
Early efforts in EV charging infrastructure planning focused on estimating demand and siting facilities based on transportation and demographic data. Flow-based models placed charging facilities at demand centroids to capture traffic coverage [12], while OD-matrix formulations extended this idea to optimize station placement based on traffic flows [25]. Further ODbased optimization approaches, such as [26] and [27], share the similar ideas which was used to maximize service coverage along major ro-
utes. Alternative methods adopted Geographic Information Systems (GIS) and population-based approaches to incorporate sustainability and user considerations. For example, [28] proposed a two-stage GIS method for sustainable site selection, while [29] introduced an anticipatory framework exploiting charging-while-parking patterns to balance access and productivity. These approaches provide valuable spatial insights, but their reliance on static demand inputs means that temporal fluctuations and ope-
rational assignment are largely overlooked.
2.2. Joint planning, operational assignment, and temporal dynamics
To better capture uncertainty and dynamic conditions, a variety of optimization frameworks have been developed. Stochastic models and clustering approaches have been used to co-plan charging and renewable integration [30], microgrids with storage and prosumers [31], and long-term distributed resources with demand response [32]. Bi-level formulations link station siting with coupled distribution-transportation networks [33] or private investment profitability [34], while other studies apply multi-o-
bjective optimization [35], reinforcement learning [36], or hybrid deep learning-queuing [37]methods to trade off reliability, economy, and waiting times. Beyond siting, several works emphasize the behavioral and system-level aspects of charging. Studies consider driver attitudes in route choice [38], rolling-horizon coordination for uncertain arrivals [39], and demand response to improve resiliency [40]. Broader frameworks address battery swapping co-planning with grids [41] and joint optimizatio-
n of fleet size, capacity, and operations [42], while [43] warns that fragmented supply- and demand-side approaches risk misalignment without integrated system planning. Some research directly integrates EV assignment into planning. Equilibrium [44] and agent-based [45] models capture interactions between transport and power networks or individual responses. Other contributions adopt macroscopic flow assignment [46], stochastic traffic assignment [47], or bi-level formulations [48, 49] linking rou-
ting, charging, siting, as well as electrical networks [50] and ride-hailing deployment [51]. While these studies highlight the benefits of joint investmentassignment, they often aggregate demand annually, simplify temporal coupling, or suffer from scalability challenges. Temporal frameworks further recognize that infrastructure investment and operations occur on distinct horizons. Multiperiod models, such as [52] and [53], capture incremental expansion and per-period assignments [54], while micro-
grid [55] and EV fleet [15] studies emphasize joint benefits across horizons. However, reliance on fictional or small-scale data [56] and discrete scenario sampling cumulative [57], spatial-temporal demand remain largely unexplored.
2.3. Methodological enablers: LLM-assisted modeling and distributed optimization
While most existing EV planning studies rely on expertdriven model construction, recent advances in LLMs suggest a new paradigm for optimization modeling. GPT-4 has demonstrated the ability to translate structured natural-language problem descriptions into solver-ready formulations [58, 59], and benchmark studies confirm the effectiveness of prompt-based approaches [17, 19]. Study [60] further decompose the modeling process into stages of analysis, construction, solving, and reporting, while inter-
active studies [61, 18] emphasize the importance of human-LLM collaboration for correctness and efficiency. These findings consistently indicate that LLMs can accelerate formulation, but also reveal limitations: without expert guidance, generated models often lack rigor or contextual
3

fidelity. Our work responds to this gap by proposing a humanLLM co-development workflow explicitly tailored to EV infrastructure planning, where domain knowledge and iterative refinement remain indispensable. Importantly, the expert remains responsible for validation and refinement, ensuring that the resulting models are both rigorous and contextually appropriate. On the computational side, prior studies confirm that largescale spatial-temporal optimization often exceeds the capacity of centraliz-
ed solvers. The ADMM has proven effective in decomposing high-dimensional problems into parallelizable subproblems, with theoretical convergence guarantees in convex settings [20, 62]. It has been successfully applied in energy systems for decentralized power systems optimization [63, 64], achieved global convergence guarantees [65], and extended to handle nonconvex formulations [66]. It is also demonstrated in various applications, such as microgrid energy trading [21], transmission restoration w-
ith high renewable penetration [22], virtual power plant management [23], and HVAC optimization [24]. Compared with heuristic or deep learning-based approaches, which often lack convergence guarantees, require problem-specific tuning, or depend on large datasets with limited transferability, ADMM offers three key advantages for EV infrastructure planning. Firstly, it exploits the separable structure of joint investment-assignment formulations to achieve scalable parallel computation. Additionally,-
 it provides interpretable optimization outputs directly usable for planning decisions. Furthermore, it ensures robustness and convergence properties not available in heuristic or learning-based methods. Despite these advantages, ADMM has rarely been applied to EV charging infrastructure planning with explicit spatial-temporal assignment. Our work closes this gap by tailoring ADMM to decompose joint investment-assignment problems, enabling tractable and scalable solutions at the city scale.
2.4. Summary
The literature establishes strong foundations in siting, behavioral modeling, and partial joint formulations, yet three gaps persist that materially affect practice. First, investment and operational assignments are seldom co-optimized at fine spatialtemporal resolution; as a result, utilization and cost outcomes remain sensitive to unmodeled spatial-temporal demand patterns. Second, constructing high-fidelity models is still expertintensive, and existing uses of LLMs have not been systematized wi-
thin EV planning workflows to reduce formulation burden while preserving reliability. Third, city-scale joint models with explicit spatial-temporal coupling remain computationally prohibitive for centralized solvers, and decomposition methods are rarely tailored to investment-assignment structure. Accordingly, we develop an LLM-assisted joint optimization framework that explicitly couples long-horizon investment with short-horizon EV assignment over space and time. Building on this framework, we d-
esign an ADMM-based distributed algorithm that exploits the problem structure to achieve scalable solutions on standard hardware. Finally, we validate the approach using 1.5 million real-world trips from Chengdu, demonstrating a 30% reduction in total cost and improved facility utilization relative to a baseline without assignment.
Figure 1: An illustrative example of an EV charging infrastructure planning scenario, showing varying traffic flows, charging demand, and planning costs across urban locations, and a coupled decision framework linking investment and assignment.
3. LLM-Assisted problem modeling and optimization formulation
In this section, we introduce the overall problem setting and optimization framework for EV charging infrastructure planning. The urban area comprises multiple locations that differ in traffic flow intensity, investment cost, and spatial distance, leading to heterogeneous and time-varying charging demand. These factors jointly influence both infrastructure investment and EV assignment decisions. Building on this scenario, we investigate how to allocate charging capacity across locations and assign-
 EVs efficiently, balancing long-term investment and continuous operational objectives. Furthermore, to enhance the formulation process, we propose a human-LLM collaborative framework in which the LLM constructs optimization formulations from textual problem descriptions, while human expertise iteratively guides and refines the process to ensure consistency, interpretability, and validity. The following subsections first analyze the planning problem in detail, then describe the LLMassisted modelin-
g procedure, and finally present the resulting mathematical formulation.
3.1. Planning problem analysis
The EV charging infrastructure planning problem comprises two tightly interconnected components, charging-capacity investment and operational EV assignment, whose mutual dependence induces a spatial-temporal coupling that shapes planning outcomes. As illustrated in Fig. 1, the urban system contains multiple locations that differ in traffic-flow intensity, landrelated investment cost, and pairwise distance. These spatial and temporal variations produce charging demand that varies across locations a-
nd over time. Each location’s investment cost is location-specific cost (e.g., land-use price), while operational assignment costs primarily arise from distance-dependent transfers of EVs between charging locations. Consequently, investment and assignment must be treated jointly rather than in isolation. The decision process involves two roles. The investor selects capacity levels at each location subject to cost-effectiveness and budget constraints; the operator assigns EVs to charging
4

locations in response to real-time demand and available capacity, aiming to minimize the associated operational cost. The two decisions are mutually coupled, as captured in Fig. 1 by the light orange arrows: once the charging capacity at a location is decided, it influences the upper bound in the capacitysatisfaction constraint, limiting the number of EVs that can be feasibly charged in that location (as encoded in constraint (4)). Conversely, the cumulative assignment patterns across time slots -
indicate whether the installed capacities are adequate or insufficient. High assignment costs due to long travel distances or frequent reallocation pressures may indicate the need for additional investment at certain sites. This closed-loop interaction between infrastructure availability, assignment behavior, and charging demand underlies the overall planning efficiency and cost. The planning problem is further complicated by the spatialtemporal coupling of charging demand. Distinct demand pattern-
s arise across different location types (e.g., residential, office, and recreational) and time periods (e.g., morning, noon, and evening), as well as between weekdays and weekends. For example, residential areas typically experience evening peaks, office areas peak around weekday, and recreational areas reach their highest demand during weekends. Consequently, planning based on a single representative period may bias investment toward certain location types while overlooking significant demand pea-
ks elsewhere, resulting in infrastructure underutilization during off-peak hours and potential shortages during local peak periods. These dynamics call for planning strategies that move beyond static snapshots and instead consider demand patterns holistically. Locations with short but intense demand surges may not warrant large-scale investment, as infrastructure would remain idle for much of the time. In contrast, areas with consistently high demand across multiple time slots, though requiring hi-
gher initial investment, can achieve better long-term utilization and cost-effectiveness. Attempts to avoid such investment by reallocating EVs to lower-cost areas may incur higher cumulative assignment costs, offsetting any savings. Furthermore, incorporating spatial-temporal coupling enables planners to stagger demand across both time and space, reducing peak pressure on the grid and improving overall system efficiency. From the perspective of temporal dimension, the spatialtemporal coupling inh-
erently links long-term investment planning with short-term operational decisions. Investment choices are infrequent and span several years or decades, reflecting strategic commitments that are costly to revise once implemented. By contrast, operational EV assignment decisions occur in short and reduplicative cycles, whose patterns are estimated from historical data, are expected to recur. It is this recurrence that binds the horizons: once the infrastructure is fixed, essentially the same assignm-
ent cycles unfold repeatedly under the same structural constraints, and the cumulative performance of these cycles determines the realized adequacy and value of the investment. This nested temporal structure highlights how long-term infrastructure design and recurrent operational behavior jointly shape system performance over time. Ultimately, the planning system strives to achieve an opti
Figure 2: Contrasting traditional and LLM-assisted approaches to the modeling process.
mal balance between initial investment expenses in infrastructure and recurrent operational costs associated with EV assignments. Explicitly incorporating the spatial-temporal coupling and mutual interdependencies between these decision-making horizons ensures more effective infrastructure deployment, optimized resource allocation, and promotes sustainable EV infrastructure development. Modeling such a complex, spatialtemporally coupled system manually can be laborious and errorprone, prompting th-
e need for a more efficient modeling paradigm, as explored in the following subsection.
3.2. LLM-assisted modeling procedure overview
LLMs are transformer-based neural networks trained on largescale text corpora to learn statistical patterns in language, capturing both syntactic structures and semantic relationships. This linguistic competence enables them to translate structured naturallanguage specifications into formal mathematical representations. Given semantically organized descriptions of decision variables, objective functions, and constraints, an LLM can automatically produce symbolic formulations in algebraic or modeli-
nglanguage-friendly formats (e.g., linear inequalities, summations, index-based expressions). In this way, LLMs facilitate the efficient construction of optimization models directly from domainlevel problem descriptions, substantially reducing the reliance on manual formulation in algebraic modeling environments. Building on this capability, we propose an LLM-assisted modeling workflow that redefines traditional model formulation by embedding natural-language interaction into the process (see Fig.-
 2). In conventional workflows, planners manually analyze problems, design model structures, and construct mathematical formulations step by step, often relying on expert tuning for refinement. This process is typically labor-intensive, fragmented, and rigid, which limits its efficiency and exploratory potential. In contrast, the proposed workflow integrates human expertise with LLM-based reasoning in an iterative and collaborative loop. The planner begins by describing the planning scenario in st-
ructured natural language, outlining decision variables, objectives, and qualitative constraints. The LLM interprets this input and generates an initial mathematical formulation as a draft model. The human expert then reviews and refines the output,
5

identifying missing constraints, unrealistic assumptions, or ambiguous notation. Through successive exchanges, where human judgment guides machine generation, the formulation iteratively converges toward both mathematical soundness and domain relevance. This human-LLM co-modeling paradigm fundamentally transforms the modeling landscape. Compared with traditional methods that proceed manually, laboriously, partially, and rigidly, the LLM-assisted approach operates semi-automatically, efficiently, -
holistically, and broadly. The transformation manifests in faster formulation, enhanced iterative flexibility, greater structural completeness, and richer exploratory potential. Collectively, these advantages enable planners to generate high-quality optimization models with significantly reduced manual effort, marking a shift from problem-solving through explicit derivation to collaborative knowledge synthesis between humans and intelligent systems. While the LLM facilitates model development and -
helps structure complex optimization problems, its role is assistive rather than autonomous. The generated outputs are not guaranteed to be correct or complete and must be reviewed and refined by human experts to ensure mathematical validity and contextual relevance. In this collaborative framework, the LLM acts as a modeling assistant, supporting rapid prototyping and iteration, while deferring critical modeling decisions to domain experts. The reliability of LLM-assisted modeling is grounded in -
a human-in-the-loop validation process embedded throughout the interaction. Rather than deferring correctness checks to a post hoc stage, model components are incrementally verified and refined during generation. This stepwise validation enables the detection of structural inconsistencies, ensures alignment with domain constraints, and maintains semantic coherence. As such, correctness in this workflow emerges not from the LLM’s autonomous capacity, but from a collaborative modeling dynamic in whi-
ch expert judgment continuously shapes and safeguards the formulation. In summary, validation in our LLMassisted modeling workflow relies on three key mechanisms that ensure the correctness and contextual relevance of the generated models while maintaining expert oversight throughout the process:
• Prompt specification: Clear and well-specified prompts are used to accurately convey modeling intent, guiding the LLM to generate relevant and interpretable mathematical components.
• Iterative human-in-the-loop refinement: Human experts interact with the LLM during model development, validating and modifying intermediate outputs to ensure semantic correctness and alignment with modeling objectives.
• Final expert validation: The completed model is reviewed by experts to verify mathematical soundness, completeness, and consistency with problem-specific requirements.
3.3. LLM-assisted optimization model formulation
Building upon the LLM-assisted modeling approach described previously, we now introduce the explicit mathematical formulation of the joint investment and operational EV assignment optimization model. The detailed structure and constraints presented here directly reflect the spatial-temporal characteristics and interdependencies discussed earlier, and were iteratively refined through interactions with the LLM. In this work, we apply the GPT-4o model provided by OpenAI [67]. The three scenarios in F-
ig. 7 demonstrate how the LLMassisted workflow transforms the traditional modeling process through interactive reasoning and rapid iteration. In scenario (a), the workflow begins with a structured natural-language description of the planning problem. The user specifies the planning objective, decision scope, and spatial-temporal context of EV charging infrastructure. From this input, the LLM automatically formulates a mixed-integer linear program, defining decision variables, objective function, a-
nd constraints. This initial draft provides a mathematically coherent foundation that captures the user’s intent, turning a conceptual problem statement into a formal optimization model. Scenario (b) illustrates how the LLM facilitates rapid ideation and exploratory reasoning. After the expert notes that traffic flow cannot directly represent charging demand, the LLM reformulates the relationship by introducing a stochastic conversion factor αt
i ∈ [0, 1] and enumerates candidate distributions to represent its uncertainty. This exchange broadens the expert’s reasoning space, quickly producing multiple mathematically valid alternatives that accelerate conceptual exploration. Scenario (c) highlights the workflow’s strength in rapid refinement. When the expert points out that the initial formulation implicitly assumes instantaneous transfers, the LLM amends the temporal constraints by introducing a travel-delay parameter τ ji, ensuring that-
 EVs dispatched from j contribute to demand at i only after arrival. Through such iterative dialogue, the model is corrected and strengthened without restarting from scratch-combining domain insight with computational adaptability to achieve efficient, realistic model development. Together, these examples demonstrate the complementary strengths of human and LLM contributions. The LLM is able to quickly produce complete draft formulations and, once provided with targeted feedback, to efficiently re-
vise the model with mathematically consistent adjustments. Meanwhile, human experts inject contextual insights and highlight domainspecific nuances. This interaction shows that the workflow is not only capable of avoiding subtle modeling oversights, but also of accelerating the overall modeling process, reducing the manual burden while improving realism and accuracy. This reduces the time from problem description to first working model from hours to minutes. Below, we present the final optimizatio-
n model derived through the LLM-assisted formulation process, which are finally refined and validated by the authors as optimization and energy experts. It is important to note that the formulation presented below is not the product of a single automatic generation. Instead, it reflects a sequence of human-LLM interactions, where experts
6

progressively guided the LLM to refine its initial drafts into a rigorous and contextually appropriate model. This collaborative process highlights the main advantage of LLM-assisted modeling: the ability to combine automated generation with expert knowledge for rapid yet reliable model construction.
Charging infrastructure investment model. From the investor’s standpoint, the objective is to determine the optimal charging capacity investment to maximize overall benefits. Simultaneously, the invested charging capacity must meet the charging demand at each location and each moment after assignment. The investment cost is determined by the charging capacity demand and the cost per unit capacity at each location. The corresponding decision is represented as ci = {ci, ∀i ∈ I}, where ci denotes the-
 invested charging capacity at location i. This decision indicates the required charging capacity to be installed at location i. If ci = 0 for any i, it implies that no charging station is needed at location i. The cost per unit capacity consists of a base investment cost π0 and a location-dependent investment cost πi for location i, in which π0 includes both the base cost covering installation and materials, and πi denotes the locationspecific cost, such as land use cost for accommodating the inv-
ested charging capacity. The objective function representing the total cost for the investment problem is formulated as
X
i∈I
ci × (π0 + πi),
where the goal is to minimize the total investment cost, which is defined as the cumulative base costs π0 and location-dependent cost πi incurred from investments in charging capacities ci across all designated locations i. The investment needs to satisfy the following constraints:
X
i∈I
ci × (π0 + πi) ≤ B, (1)
0 ≤ ci ≤ Cmax
i , ∀i. (2)
Constraint (1) is associated with a maximum investment cost subject to a total budget of B, with a lower bound of 0 for investment cost. Constraint (2) specifies the upper and lower bounds for the charging capacity at each location, where the maximum capacity is determined by location-dependent factors, such as electricity grid, and the minimum capacity should be non-negative. A charging capacity cannot be negative, and a value of 0 signifies no requirement for charging station investment.
EV charging assignment model. The operator’s role is to determine where the EVs can be charged in a cost-effective and convenient way based on the available capacity at each site. The operator may assign EVs to alternative charging locations, incurring associated costs, primarily dictated by the travel distances when assigning EVs between locations. From the operator’s viewpoint, the goal is to determine the best EV assignment strategy to minimize these costs. The assignment costs are calculated b-
ased on the number of EVs assigned and the distance between two locations for the assignments. For any pair of locations i and j, we define zt
i j as the number of EVs assigned from location i to location j in time
slot t. The cost for each assignment is determined by the product of the number of assignments zt
i j and the assignment cost per EV Li j between the two locations correspondingly, where i, j ∈ I. For computational efficiency, the assignment variable zt
i j is relaxed to be continuous. Since zt
i j represents the number of vehicles assigned in aggregated cohorts, treating it as continuous is common practice in traffic assignment and flow-based formulations. Integer values can be recovered by rounding. The objective function representing the total cost for the assignment problem is formulated as
X
t∈T
X
i∈I
X
j∈I
zt
i j × Li j,
where the goal is to minimize the total cost resulting from EV assignment costs across all locations and time slots. EV charging and assignments need to satisfy the following constraints
0≤X
j∈I
zt
i j ≤ αt
i · Ft
i, ∀i, t, (3)
0 ≤ β · (αt
i · Ft
i −X
j∈I
zt
ij + X
j∈I
zt−τ ji
ji ) ≤ ci, ∀i, t, (4)
zt
i j ≥ 0, ∀i, j, (5)
zt
i j = 0, ∀i = j, (6)
zt
i j = 0, ∀i, j, if Li j ≥ R. (7)
Constraint (3) specifies that the number of EVs assigned from location i to j must be no more than the original traffic flow at location i requiring charging, with αt
k denoting the estimated
coefficient between charging demand and traffic flow at location k during time t. Constraint (4) ensures that the charging capacity at each location is sufficient (i.e., greater than or equal to the charging demand) in order to meet the total charging demand across all time slots, where the charging demand is calculated by incorporating EV assignments. The coupling between long-term investment and short-term assignment is explicitly captured in such a constraint. For example, the charging capacity-
 variable ci appears in the capacity constraint (4), ensuring that EV assignment flows at each time slot cannot exceed the installed infrastructure capacity. At the same time, the assignment variables zt
i j aggregate across time slots and locations
to determine the effective utilization of charging infrastructure, thereby influencing the optimal allocation of ci. Thus, the constraints jointly encode how investment limits operational feasibility, while operational flows retroactively reveal the adequacy and efficiency of investment decisions. The coefficient β represents the relationship between the number of EVs requiring charging and the charging capacity demand, describing the connection between investment in charging infrastructure and ch-
arging demand. To accurately capture the arrival dynamics of EVs assigned across locations, we introduce a delay-aware constraint. Specifically, vehicles assigned from location j to i require τ ji time slots to arrive. Thus, the available charging demand at i in time slot t accounts for inflows originating at t − τ ji. Given that variables zt
i j and zt
ji respectively represent the flows in opposite directions, the sign of these variables is not required to be considered. Hence, Constraint (5)
7

mandates that these assignments must be non-negative, ensuring that the flow values are appropriately restricted to reflect actual capacities and prevent computational anomalies associated with negative allocations. Constraint (6) prevents the model from assigning vehicles to their original location to avoid causing non-convexity issues, as the distance between a location and itself is 0. Lastly, Constraint (7) stipulates that the distance of assignments must be within an acceptable range, denote-
d as R. Joint investment and assignment model. Considering the interdependence between investment and assignment, the investment and operation are integrated by incorporating a one-time investment cost and the expected recurring assignment costs over the entire investment horizon. Specifically, the operation costs are multiplied by the expected recurrences Et for each corresponding time slot t, where Et is a set of numbers. The term “expected recurrence” implies that we anticipate a similar scenar-
io in a time slot t occurring Et times throughout the investment horizon. The goal is to minimize the global investment costs for each location i, as well as the expected operational costs for all locations i and all time slots t over Et expected recurrences. Therefore, the joint investment and assignment optimization problem is formulated as
min
ci ,zt
ij
X
i∈I
ci × (π0 + πi)
+
X
t∈T
X
i∈I
X
j∈I
Et × zt
i j × Li j,
s.t. (1) − (7).
(8)
In summary, the final formulation is a linear programming (LP) model, with both objective and constraints linear. The total is minimized subject to all constraints across both the investment and operational horizons. The decision variables are ci and zt
ij,
corresponding to the optimal charging capacities and EV assignment decisions, respectively. The overarching goal is to achieve a globally optimized solution by minimizing the overall investment and assignment costs. This bidirectional linkage is explicitly embedded in the joint formulation, where investment decisions set the feasible capacity region and assignment decisions determine the realized utilization and costs. As such, the constraints serve as the mechanism through which long-term investm-
ent limits short-term operational feasibility, while shortterm operational flows retroactively inform the adequacy and efficiency of long-term investment decisions.
4. Distributed solution method via the ADMM
As previously noted, the temporal-spatial variation in charging demand must be thoroughly considered to guarantee precise and dependable outcomes. Nevertheless, as more data are incorporated into the optimization process, the computational burden grows substantially. Moreover, when considering larger geographic regions, data privacy emerges as a potential concern for governmental bodies. A distributed algorithm can mitigate the extent of information sharing required, including sensitive
data pertaining to investment budgets, capacities of power systems, and traffic flows. Consequently, we design a distributed algorithm leveraging the ADMM algorithm. Given the complex dimensionality of the decision variables for EV assignments, particularly as more locations or time slots are incorporated, central optimization becomes less practical. Postulating a scenario involving n locations results in n2 location pairs. If m time slots are taken into consideration, there will be n2 · m EV assi-
gnment decisions to be made. Therefore, this poses a substantial challenge for optimal decision computation. To overcome this computational challenge, we can decompose the computation of EV assignment decisions. In the proposed distributed algorithm, each location independently optimizes decisions regarding its own charging capacity and the assignment of EVs to other locations, treating them as parallel subproblems. Subsequently, the algorithm only adjusts decisions related to charging capacities -
in a master problem and then relays the outcomes back to each sub-problem to enable result adjustments. Specifically, based on ADMM, we introduce auxiliary variables c ̃1, · · · , c ̃n for c1, . . . , cn, and the Lagrangian multipliers (dual variables) λi for ci−c ̃i = 0, and we define zt
i = [zt
i,1, zt
i,2, ..., zt
i, j],
where j ∈ I indicating the assignment decisions made by location i to location j. Then, we derive the augmented Lagrangian function as
L=X
i∈I
X
t∈T
fi(zt
i, ci) + λi(c ̃i − ci) + ρ
2 (c ̃i − ci)2, (9)
where ρ > 0 is the penalty parameter, and the objective function for each location i is
fi(zt
i, ci) = ci · (π0 + πi) + E · X
j∈I
zt
i, j · Li j. (10)
Since the formulated optimization problem is a LP, it is convex, and the ADMM algorithm applies with its theoretical guarantees. Based on the augmented Lagrangian function, we divide the optimization problem into sub-problems of locations and a master problem of center. In sub-problems, each location optimizes its primal variables ci and independent variables zt
i
to minimize their investment and assignment costs. Then, locations submit their variables ci and zt
i to the center while the
center updates the auxiliary variables c ̃i and dual variable λi. The algorithm iterates to update the auxiliary variables and dual variables until it converges. In each location’s sub-problem, the cost is minimized in parallel by taking the auxiliary variable c ̃i and dual variable λi as given. The sub-problem is formulated as
min
ci ,zt
i
X
t∈T
fi(zt
i, ci) − λi · ci + ρ
2 (c ̃i − ci)2,
s.t. (1) − (7).
(11)
Note that the primal investment-assignment problem is an LP (linear objective, affine constraints) and hence convex. For fixed multipliers, the augmented Lagrangian in Eq. (11) is convex in the primal variables (linear terms + convex quadratic
8

Figure 3: An illustrative example of the computing and communication process for distributed ADMM.
penalty + indicator of an affine set). With the chosen splitting, each ADMM update solves a convex subproblem. Recalling the constraints outlined in the centralized optimization problem, the distinction emerges: each location imposes constraints solely on its own decisions. Notably, Constraint (4) specifies that the decision regarding charging capacity must fulfill the resultant charging demand, which is based on the original traffic flow deducted by the EV assignments to other locations and augme-
nted by assignments received from other locations. It is imperative to note that a location cannot determine the assignments it receives from other locales. Such EV assignments are provided as parameters by the overarching master problem, denoted as z′
i . The z′
i is made by transformation according to the EV assignment decisions zi made from the previous iteration, and it does not require any calculation. Besides updating the auxiliary variables c ̃i and the dual variables λi, the center manages the capacity satisfaction constraint for all locations. For the center’s master problem, it obtains primal variables ci and also the variables zt
i from all location i ∈ I, and then calculates the auxiliary variables c ̃i through the master problem as
mc ̃iin
X
i∈I
[λi(c ̃i − ci) + ρ
2 (c ̃i − ci)2],
s.t. (4).
(12)
The master problem needs to satisfy Constraint (4), which ensures the satisfaction of charging capacity for every location. Overall, the decision variables and auxiliary variables are exchanged between each location and a computational center, as illustrated in Fig. 3. For each iteration k, a solution set (ck
1, ..., ckn) and the cor
responding Lagrangian multipliers (λk
1, ..., λkn) are determined. Subsequently, the ADMM advances to the subsequent iteration, denoted as k + 1, as
λi[k + 1] = λi[k] + ρ · (c ̃[k] − c[k]). (13)
Algorithm 1: Distributed ADMM algorithm for EV charging infrastructure planning
1 Search parameters: ρ , kmax, Qthreshold
2 λi, C, Z, C ̃, Z′, Cost, Qprimal, Qdual, k ← Initialize()
3 while Qprimal > Qthreshold | Qdual > Qthreshold do
4 for i ∈ I do 5 Sub-problem: 6 ci, zt
i, Costi ← Optimize(C ̃[i], Z′, λi[k])
7 C[i], Z[i], Cost[i] ← Update(zt
i, ci, Costi )
8 Z′← Transform(Z) 9 Master problem:
10 C ̃← Optimize(C, Z, λ)
11 Lagrange multiplier update:
12 λi[k + 1] ← λi[k] + ρ · (C ̃[k] − C[k]) 13 Calculate errors in k-th iteration: 14 Qprimal, Qdual ← Update() 15 k ← k + 1 16 if k ≥ kmax then 17 break
The algorithm concludes its operations once a predetermined condition, such as a maximum number of iterations or a convergence within a threshold, is met. The quality of the solution at each iteration can be assessed through the primal error and dual error as
Qprimal = X i∈I
|c ̃i[k] − ci[k]|, (14)
Qdual = X i∈I
|λi[k] − λi[k − 1]|. (15)
When both errors attain a value of zero, it indicates that the ADMM has converged to an optimal solution. Overall, the optimization solution approach can be implemented as Algorithm 1.
5. Case study using real-world data
To demonstrate the efficacy of our proposed model and evaluate the potential benefits it can provide for EV charging infrastructure planning with EV assignment, we conduct an in-depth case study on a joint investment and operation system using real-world data from Chengdu, China.
5.1. Data processing and optimization model parameters
The data employed in this study are sourced from the “Didi Chuxing GAIA Initiative" [68], an anonymized dataset provided by Didi Chuxing Technology Co., Ltd-a mobile transportation platform. This dataset contains 1.5 million realistic travel records from Chengdu, China, gathered between November 21 and 27, 2016. November in Chengdu represents a typical working month without major holidays [69] or extreme weather conditions [70], which makes it relatively stable for baseline analysis. The available-
 data capture marked variability within a
9

weekly operational cycle, revealing distinct weekday–weekend contrasts in both temporal intensity and spatial distribution of charging demand, such as concentrated peaks around business districts on weekdays and broader dispersion toward residential and recreational areas during weekends. We partition Chengdu into 201 distinct sub-districts for optimization purposes, each representing a unique location. The dataset incorporates travel time and destination data, expressed in longitude and latitude-
 coordinates, which are subsequently used to calculate the initial traffic flow Ft
i for each location i and time slot t. We adopt one week as the operational horizon and a ten-year investment horizon, implying 520 expected recurrences; accordingly, the recurrence factor Et is set to 520.
5.1.1. Charging demand
Traffic flow data in OD-matrix form are processed to derive time-varying traffic volumes across different districts, with origins and destinations identified from their geographic coordinates. The data are then organized into 15-minute time slots over seven days of a week, resulting in 672 distinct time slots. Adopting a 15-minute time scale offers greater precision in operations and captures more detailed fluctuations in charging demand over time. The data are then aggregated into 201 distinct lo-
cations. A zero value is imputed for cases where no traffic flow is observed for a specific time and location. This process yields a dataset comprising 135,072 (672 × 201) rows, enabling the determination of traffic flow distribution across each location and time slot. This distribution serves as the foundation for simulating Chengdu’s overall traffic flow and is utilized as the initial vehicular flow Ft
i for the optimization.
The coefficients αt
i in Constraints (3) and (4) represent the
relationship between the traffic flow at time slot t in location i, and the number of traffic flows requiring charging. To represent the proportion of traffic flow requiring charging (denoted as α in (4)), we implement it using a Beta distribution which is defined on the interval [0, 1] and well-suited for proportion-type variables. By adjusting the shape parameters, the Beta distribution can flexibly represent various charging demand patterns and incorporate prior knowledge or spatial-temporal va-
riability. For the case study, we set the Beta distribution parameters to Beta(10, 90), which assumes an average charging demand of 10% with moderate variability across different locations and time periods, ensuring smooth and stable simulation outcomes. The coefficient β in (4) represents the relationship between the number of traffic flows requiring charging and the demand for charging capacity. In this context, we refer to [71], the foremost EV brand in today’s market, and adopt a fast charging-
 power of 250 kW as the value of β. This choice is based on the expectation that fast charging will become pervasive in the future, specifically over a ten-year time horizon.
5.1.2. Distances
The distances between two locations are calculated by the average distance from all the records. We believe that the dispatch distance between two locations cannot be represented by the straight distance between two locations because the trajectory of a trip is rarely straight between two points. Moreover,
a sub-district cannot be simply assumed as a point. However, real-world traffic data can provide information on which points in the region are where traffic congregates or which points are more likely to be the start and end points. We obtain the actual assignment distance by summarizing all the records of each pair of locations, taking the average value and generating the distances for optimization. The acceptable range R of assignment is set to 3 km, since we considered drivers are generally wil-
ling to tolerate only short detours to access charging facilities in urban contexts [38]. According to [72], the assignment cost is estimated at 0.2 Chinese Yuan per unit distance. To more accurately represent the traffic road network topology within the context of model constraints, we define the assignment cost per EV Li j in the optimization as
Li j =



∞, if distance(i, j) ≥ R,
0, if i = j,
distance(i, j) · 0.2, otherwise,
where distance(i, j) is the average travel distance between location i and location j.
5.1.3. Investment cost and budget
The investment cost comprises a base cost and a locationdependent cost per unit of charging capacity. The base cost per unit capacity π0 is estimated at 500 Chinese Yuan for rapid charging, as calculated by the price of the charging pile from [71]. The location-dependent cost per unit capacity πi is approximated based on the distance between the location and the center of Chengdu, Chunxi Street, which has the highest property prices in the city [73]. Consequently, we assume that Chunxi Street, as -
Chengdu’s city center, possesses the highest locationdependent cost per unit capacity. Utilizing Chunxi Street as a reference point, we decrease the location-dependent costs for other locations following an exponential distribution to generate the respective costs. According to the Chengdu EV charging and battery swapping infrastructure specialized planning by Chengdu Municipal Bureau of Economy and Information Technology [74] and the estimated investment cost for a charging station [75], this cas-
e study estimates a maximum budget B of 20 billion Chinese Yuan over a ten-year investment horizon. Note that this is a synthetic study, and the budget is adjustable.
5.2. Optimization results analysis
This section illustrates the convergence of the proposed ADMM algorithm and the performance compared to the centralized method. Also, the insights on optimal planning resulted from the proposed model considering EV assignment compared to a basic flow-capture model. The optimization solving process is performed on a computer equipped with an Apple M1 Pro CPU, 16 GB random access memory (RAM), and the macOS system.
5.2.1. Performance of proposed ADMM algorithm
We validate the proposed ADMM algorithm in the case study. As described in Algorithm 1, we iteratively set every location
10

Figure 4: Primal and dual errors over iterations for the ADMM approach.
to solve for their own optimal decision as a single sub-problem and use the master problem to converge to a globally optimal solution. Fig. 4 presents the primal and dual errors over iterations, and the errors are in a logarithmic scale. The result shows that the algorithm is able to converge efficiently to an optimal solution in 14 iterations for our problem. The main parameter settings used in our experiments as follows: the penalty parameter ρ was set to 0.1, the convergence threshold Qthreshol-
d was set to 10−4. These values follow common practice in [20] and were found to provide stable and efficient convergence in our case study. For completeness, we note that the decision variables were assigned practical bounds to ensure feasibility and numerical stability during optimization. Specifically, the upper bound of charging capacities Ci was set to 107 and the upper bound of assignment flows Zi j was set to 104, while the lower bounds were set to zero. These bounds are sufficiently large -
so as not to restrict the feasible solution space, but they prevent the algorithm from exploring unrealistic or numerically unstable regions. For comparison, we also centrally solve the optimization problem as a baseline. We employ the [76] optimization solver to solve the optimization problem centrally at once to identify the optimal global solution for the infrastructure investment decisions for every location and their EV assignments for every time slot. The centralized approach demands 50 minu-
tes of computational time. However, this computational process is associated with an excessively high memory consumption of 76.31 GB of RAM. Owing to the memory swapping management mechanism inherent to the macOS, the procedure is able to reach completion despite the substantial memory demands. However, this level of computational burden likely represents the upper threshold of what a standard computer can manage, particularly given the data span only one week. The distributed optimization employi-
ng the ADMM method starkly contrasts with the centralized approach. The distributed method markedly improves efficiency, with each sub-problem and the corresponding master problem being solved in under one second. We also employ the Gurobi optimization solver in each sub-problem and master problem for calculating the op
timal decision and auxiliary variables. Each sub-problem can be solved independently in parallel in an iteration. Presuming the operation within a truly distributed computing environment and discounting the latency attributable to data communication, it is feasible to complete each iteration in two seconds. Consequently, the optimization problem can be resolved in an estimated 30 seconds over the course of 14 iterations. This represents nearly a 100-fold reduction in computation time compared to t-
he approximately 50 minutes required by the centralized solver. Moreover, the memory footprint for each sub-problem is markedly reduced, necessitating less than 500 MB of RAM. This modest memory consumption and computational burden facilitate the practicality of the distributed method for deployment on most commercial computers. Comparing outcomes, the distributed approach incurs a total cost of 15,744 million Chinese Yuan, which is marginally higher than the 15,674 million Chinese Yuan achieved v-
ia the centralized method, representing an acceptable error margin of approximately 0.45% in total cost.
5.2.2. Insights on optimal results
Fig. 5 presents the visualizations of the investment decisions of capacity for the base model and our proposed model in each location. Fig. 5a illustrates the base model, which optimizes investment costs independently, without considering assignment. In this model, charging infrastructure planning employs a basic flow-catching model, minimizing capacity while fulfilling the charging demands for all locations and time slots. The base model shows that charging capacity should be more concentrated in-
 the city center area with high charging demand, without incorporating assignment. In contrast, Fig. 5b portrays the optimal solution derived from the proposed model, which incorporates assignments. This model accounts for the interrelated effects between investment and assignment and arrives at mutually advantageous decisions. The comparison between the two figures highlights a substantial alleviation of the excessive load in the central area when considering EV assignment. Most charging investme-
nts are therefore located in the densely developed inner urban zones surrounding the core, where charging demand remains high but land costs are still manageable. The proposed model effectively reallocates part of the investment from the congested center to these adjacent areas, achieving a balanced configuration that enhances cost efficiency without causing excessive dispersion of charging infrastructure into low-demand suburban regions. Upon closer observation, it is apparent that investment dec-
isions in specific suburban regions are substantially lower compared to those derived from the baseline model, even resulting in no investment in some of these areas, such as the locations around Wenjia (left-hand side of the map). As previously mentioned, when a specific location experiences transient traffic flow, assigning this ephemeral traffic flow to another region for charging purposes can yield enhanced overall benefits. From a numerical perspective, as summarized in Table 1, the base mode-
l yields an optimal objective of approximately 22,464 million CNY, whereas the proposed joint investment–assignment model with a 3 km assignment range achieves 15,744 million
11

(a) Base model. (b) Proposed model.
Figure 5: Optimal investment decisions in maps showing the distribution of the investment decisions. The bubbles correspond to the locations where the area of the bubbles represents the amounts of charging capacities. The area of bubbles of the two models has been separately scaled according to the proportion of total investment decisions. The color represents the location-dependent investment cost for different locations.
Table 1: Comparison of costs under different assignment ranges R. The base model corresponds to R = 0 (no assignment flexibility). The Cost Reduction column reports the percentage reduction in total cost relative to the immediately smaller R (i.e., compared with the previous case). All cost values are expressed in million Chinese yuan (CNY).
R (km) Investment Cost Assignment Cost Total Cost Cost Reduction (%)
0 22,464 0 22,464 
1 18,834 15 18,849 16.09 3 15,516 228 15,744 16.47 5 14,201 425 14,626 7.10 7 13,760 455 14,215 2.81 9 13,663 467 14,130 0.60 11 13,568 493 14,061 0.49
CNY, corresponding to a cost reduction of about 30%. Over the ten-year period, the accumulated assignment cost amounts to only 228 million CNY, confirming that modest operational adjustments can lead to substantial overall economic benefits. Furthermore, Table 1 illustrates how varying the assignment range R affects system performance. Increasing R allows EVs to access charging stations over longer distances, thereby improving infrastructure utilization and reducing the required investment. As a r-
esult, the total system cost decreases with larger R, though the reduction is non-linear. The marginal benefit diminishes once most reassignable demand has been absorbedbeyond a certain threshold, further expansion of R yields limited additional savings, since capacity bottlenecks are largely relieved while assignment costs from extended travel distances continue to accumulate. The proposed model provides EV assignment decisions for all time slots and locations, enabling a comprehensive understand-
ing of the charging infrastructure planning process. To obtain a deeper understanding of the temporal regularity in decision patterns, we analyze snapshots captured at multiple intervals and compare the outcomes produced by our model. Fig. 6 depicts the patterns of EV distribution across three distinct time periods, highlighting the temporal variation in assignment strategies. First, the depicted maps in Figs.6b, 6d, and 6f, affirm
that all EV assignments align with the practical constraints of our model, underscoring its applicability to real-world scenarios. Specifically, Fig. 6a presents an Arc plot visualization of EV assignment distribution between 3:00-4:00 PM on a Monday, revealing a pronounced trend where a majority of EVs are assigned from urban centers to suburban areas. Further analysis, as illustrated in Fig. 6b, shows the EV assignments around and within the city center during the same period, indicating a direc-
tional flow of EVs outward from the city center. In contrast, during the later hours of the same day, between 10:00-11:00 PM (as shown in Fig. 6c), there is a discernible shift in the assignment dynamics. This period sees a reduction in EV dispatches from urban to suburban areas and an increase in the reverse flow, highlighting the efficient utilization of charging infrastructure and underscoring the importance of considering the spatial-temporal variation in charging behavior. Furthermore, Fig. 6-
d illustrates a decrease in overall EV assignments during this timeframe, albeit with consistent origins and destinations for EV flows. This contrasts with the patterns observed during 3:00-4:00 PM, where Fig. 6b indicates a reduction in intensity at central locations. Differences in assignment behaviors are not only evident across different times of the day but also across days of the
12

(a) Arc plot for Monday 3:00 - 4:00 PM. (b) Map for Monday 3:00 - 4:00 PM.
(c) Arc plot for Monday 10:00 - 11:00 PM. (d) Map for Monday 10:00 - 11:00 PM.
(e) Arc plot for Saturday 3:00 - 4:00 PM. (f) Map for Saturday 3:00 - 4:00 PM.
Figure 6: EV assignment decisions snapshot for different periods. For (a), (c), and (e), EV assignment decisions are represented in arcs between different locations sorted by the investment cost (also refer to the sorting from the city center to the suburb), and the numbers of EV assigned are divided into three levels. The EV assignments from the center to the suburbs are shown at the top, while the EV assignments from the suburbs to the city center are shown at the bottom. For (b), (d), and (f), -
EV assignment decisions are represented in maps. Each bubble corresponds to a location, with the color of the bubble indicating the number of EV assignments. A deeper color signifies a higher number of assignments. As the term “number of EV assignments" refers to the number of EVs assigned to another location, while a negative value indicates EVs received from other locations. The lines display the direction of the EV assignments.
week. Fig. 6e highlights the disparity between weekdays and weekends, showing a notable inclination for EVs to move from suburban areas back to urban centers on Saturdays, the opposite of the Monday trend. This variation, further visualized in Fig. 6f, where central locations are marked in blue to signify the reception of EVs, confirms the presence of spatial-temporal coupling affecting EV distribution. Intuitively, EVs are expected to be assigned from areas with higher investment costs to those w-
ith lower costs to minimize overall expenditure. However, Fig. 6c and 6e show that a considerable number of EVs are assigned from the outskirts toward the city center, which may initially appear counterintuitive. This pattern arises because the model fully accounts for temporal coupling, capturing time-varying charging demand across
different periods and locations. Consequently, the model assigns part of the suburban charging demand to central areas to achieve globally optimal costs when the charging load in highcost regions is relatively low. This strategic assignment underscores the importance of integrating temporal and spatial dimensions in EV charging infrastructure planning, as it enables more efficient resource utilization and a clearer understanding of the interaction between investment costs and charging demand.
13


Scenario (a) - initial model formulation from natural language
User: I’m planning EV charging infrastructure across a city. Each location has setup costs (fixed and location-dependent), and EV charging demand varies by time and location. I want to determine how much capacity to install and how to assign EVs in each time slot to minimize combined investment and travel costs, capturing the spatial-temporal coupling. Could you formulate this as a mathematical optimization model, including decision variables, objective function, and constraints?
GPT-4o: Certainly! Here’s a mathematical optimization model for planning EV charging infrastructure, minimizing both investment and operational (travel) costs. This is a mixed-integer linear program (MILP). Objective:
min
ci ,zt
ij
X
i∈I
ci · (π0 + πi) + X
t∈T
X
i∈I
X
j∈I
Et · zt
i j · Li j
Sets and Indices:
• i ∈ I: Charging locations.
• t ∈ T : Time slots.
Decision Variables:
• ci ∈ R≥0: Charging capacity installed at location i.
• zt
i j ∈ Z≥0: Number of EVs assigned from location i to location j at time t.
...... (Additional constraints and parameters definitions omitted for brevity.)
Scenario (b) - stochastic representation of charging demand
User: Traffic flow cannot be directly equated to charging demand. Only part of the traffic actually needs charging. Since the exact conversion ratio is hard to observe, let’s treat it as a random variable within [0, 1]. List several possible distributions for this stochastic coefficient.
GPT-4o: Under this setting, the effective charging demand can be expressed as:
Dt
i = αt
i · Ft
i
where αt
i ∈ [0, 1] denotes the stochastic conversion factor capturing the proportion of traffic requiring charging. Several candidate distributions can be
considered for αt
i:
• Truncated normal distribution: restricted normal distribution to a finite interval, ensuring all realizations lie within [0, 1].
• Logit-normal distribution: applying the logistic transformation to a normal variable, yielding outcomes strictly to [0, 1].
• Beta distribution: a flexible two-parameter distribution defined on [0, 1], capable of representing various shapes from uniform to highly skewed.
• Uniform distribution : the simplest baseline assumption on [0, 1], representing complete uncertainty about the conversion ratio.
If empirical data exist, an empirical or mixture form can be considered.
Scenario (c) - resolving temporal inconsistency
User: When assigning EVs from location j to location i at time t, it takes time for the vehicles to travel from j to i. However, it appears that the demand at location i in time slot t is directly increased without accounting for this travel time.
GPT-4o: Great observation. The formulation assumes instantaneous EV transfer, which may be unrealistic. To model travel delay, let τ ji be the travel time from j to i. Then, the number of EVs arriving at i in time t should be those dispatched from j at t − τ ji:
X
j∈I
zt−τ ji
ji
The corrected capacity constraint becomes:
0≤β·


αt
i · Ft
i −X j∈I
zt
ij + X j∈I
zt−τ ji
ji


≤ ci
This refinement ensures that EVs only contribute to charging demand at the time they actually arrive.
Figure 7: Dialogues illustrating how the LLM engages with the user across distinct modeling contexts.
14

6. Conclusion and future work
We present an LLM-assisted framework to address the joint investment and assignment problem for EV infrastructure planning, effectively capturing the interdependence and synergy between long-term investment decisions and short-term assignment operations. To overcome computational challenges, we design a distributed ADMM algorithm that enables efficient solution of large-scale, spatial-temporal optimization problems. Our approach is validated using 1.5 million real-world travel records from Chengdu-
, China. The results demonstrate a 30% reduction in total system cost compared to a baseline without EV assignment, highlighting the economic benefits of explicitly capturing operational interactions. In addition, the distributed ADMM solver achieves approximately over a 100-fold reduction from minutes to seconds in computational time relative to a centralized solver, making city-scale applications tractable on standard hardware. Together, these findings underline the potential of combining LLM-as-
sisted formulation with distributed optimization to support more effective and scalable EV infrastructure planning. The proposed model, along with the solution method, holds significant potential for future development. The distributed algorithm facilitates efficient problem-solving through a distributed computing system, where ADMM demonstrates strong adaptability, enabling the model to incorporate a broader range of research factors related to EV charging infrastructure planning. There are sever-
al practical challenges warrant careful consideration. For instance, while our empirical analysis uses November data as a baseline month. We acknowledge, however, that demand patterns may vary across months (e.g., due to holidays or weather conditions). Extending the dataset to incorporate multiple months would allow richer capture of seasonal temporal-spatial variation. The distributed ADMM framework is expressly designed to scale to extended horizons, enabling future work to capture seasonal tem-
poral-spatial variation when broader datasets are available. Moreover, the charging time for EVs with existing technology is significant, impacting the overall system and user experience [77]. The potential for pile-ups or queues of EVs at charging stations, as well as additional delays arising from traffic congestion or traffic lights, may further increase waiting time and should be accounted for in future research. Additionally, as time considerations become more intricate, examining the electri-
city price at varying times and locations is crucial, as they profoundly affect operational costs. Furthermore, although current capabilities remain limited, the rapid development of LLMs suggests the potential for their integration into the design of optimization algorithms in the future, which may lead to further improved efficiency in solving complex problems. In future work, we aim to incorporate a more comprehensive power system that includes power grid, renewable energy sources, and energy s-
torage system. Additionally, we will consider bi-directional charging (e.g. vehicle-to-grid or vehicle-to-vehicle) and charging queue management while integrating stochastic elements into our problem modeling.
Data availability
Data will be made available on request.
Acknowledgement
This work was supported in part by the Australian Research Council (ARC) Discovery Early Career Researcher Award (DECRA) under Grant DE230100046.
References
[1] D. Xie, Z. Gou, X. Gui, How electric vehicles benefit urban air quality improvement: A study in Wuhan, Science of The Total Environment 906 (2024) 167584. doi:https://doi.org/10.1016/j.scitotenv. 2023.167584. URL https://www.sciencedirect.com/science/ article/pii/S0048969723062113
[2] X. Chen, J. Yang, Potential benefit of electric vehicles in counteracting future urban warming: A case study of hong kong, Sustainable Cities and Society 87 (2022) 104200. doi:10.1016/j.scs.2022.104200.
[3] GOV.UK, Reducing emissions from road transport: Road to Zero Strategy, accessed: 2023-03-31 (2018).
URL https://www.gov.uk/ government/publications/ reducing-emissions-from-road-transport-road-to-zero
[4] S. Ou, Z. Lin, X. He, S. Przesmitzki, J. Bouchard, Modeling charging infrastructure impact on the electric vehicle market in China, Transportation Research Part D: Transport and Environment 81 (2020) 102248. doi:10.1016/j.trd.2020.102248. URL https://www.sciencedirect.com/science/ article/pii/S1361920919307394
[5] IEA, Global EV Outlook 2023 – Analysis, accessed: 2023-06-30 (2023).
URL https://www.iea.org/reports/ global-ev-outlook-2023
[6] M. shafiei, A. Ghasemi-Marzbali, Fast-charging station for electric vehicles, challenges and issues: A comprehensive review, Journal of Energy Storage 49 (2022) 104136. doi:10.1016/j.est.2022.104136. URL https://www.sciencedirect.com/science/ article/pii/S2352152X22001700
[7] H. Jiang, H. Xu, Q. Liu, L. Ma, J. Song, An urban planning perspective on enhancing electric vehicle (ev) adoption: Evidence from beijing, Travel Behaviour and Society 34 (2024) 100712. doi:10.1016/j.tbs.2023.100712. URL https://www.sciencedirect.com/science/ article/pii/S2214367X23001631
15

[8] J. Mulach, European carmakers to accept 2035 petrol and diesel new car ban, accessed: 2024-03-01 (2024).
URL https://www.carexpert.com.au/car-news/ european-carmakers-to-accept-2035-petrol-and-diesel-new-car-ban
[9] M. Lewis, Q3 2024 update: How many us ev charging ports there are now, accessed: 2024-09-30 (2024).
URL https://electrek.co/2024/09/03/ q3-2024-ev-charging-ports/
[10] Pew Research Center, Electric vehicle charging stations across the us, accessed: 2024-09-30 (2024). URL https://www.pewresearch.org
[11] L. Hargreaves, Ev charging trends 2024: Rapid growth and new challenges, accessed: 2024-09-30 (2024). URL https://evmagazine.com
[12] S. Dantrakul, C. Likasiri, R. Pongvuthithum, Applied pmedian and p-center algorithms for facility location problems, Expert Systems with Applications 41 (8) (2014) 3596–3604. doi:10.1016/j.eswa.2013.11.046. URL https://www.sciencedirect.com/science/ article/pii/S0957417413009883
[13] Z. Chen, F. He, Y. Yin, Optimal deployment of charging lanes for electric vehicles in transportation networks, Transportation Research Part B: Methodological 91 (2016) 344–365. doi:10.1016/j.trb.2016.05.018. URL https://www.sciencedirect.com/science/ article/pii/S0191261516303319
[14] N. H. L. Fidele, S.-G. Yoon, Combined Optimal Planning and Operation of a Fast EV-Charging Station Integrated with Solar PV and ESS, Energies 14 (11) (2021) 1–18. doi:10.3390/en14113152. URL https://www.mdpi.com/1996-1073/14/11/ 3152
[15] J. Luke, M. Salazar, R. Rajagopal, M. Pavone, Joint optimization of autonomous electric vehicle fleet operations and charging station siting, in: 2021 IEEE International Intelligent Transportation Systems Conference (ITSC), 2021, pp. 3340–3347.
[16] J. Li, Z. Liu, X. Wang, Public charging station localization and route planning of electric vehicles considering the operational strategy: A bi-level optimizing approach, Sustainable Cities and Society 87 (2022) 104153. doi: https://doi.org/10.1016/j.scs.2022.104153. URL https://www.sciencedirect.com/science/ article/pii/S2210670722004668
[17] T. Ahmed, S. Choudhury, LM4OPT: Unveiling the potential of Large Language Models in formulating mathematical optimization problems, INFOR: Information Systems and Operational Research 62 (4) (2024) 559–572. doi:10.1080/03155986.2024.2388452. URL https://www.tandfonline.com/doi/full/ 10.1080/03155986.2024.2388452
[18] C. Spreitzer, O. Straser, S. Zehetmeier, K. Maaß, Mathematical Modelling Abilities of Artificial Intelligence Tools: The Case of ChatGPT, Education Sciences 14 (7) (2024) 698. doi:10.3390/educsci14070698. URL https://www.mdpi.com/2227-7102/14/7/698
[19] X. Huang, Q. Shen, Y. Hu, A. Gao, B. Wang, LLMs for mathematical modeling: Towards bridging the gap between natural and mathematical languages, in: L. Chiruzzo, A. Ritter, L. Wang (Eds.), Findings of the Association for Computational Linguistics: NAACL 2025, Association for Computational Linguistics, Albuquerque, New Mexico, 2025, pp. 2678–2710. doi:10.18653/v1/2025.findings-naacl.146. URL https://aclanthology.org/2025. findings-naacl.146/
[20] S. Boyd, N. Parikh, E. Chu, B. Peleato, J. Eckstein, Distributed optimization and statistical learning via the alternating direction method of multipliers, Foundations and Trends® in Machine Learning 3 (1) (2010) 1–122. doi: 10.1561/2200000016.
[21] H. Wang, J. Huang, Incentivizing energy trading for interconnected microgrids, IEEE Transactions on Smart Grid 9 (4) (2016) 2647–2657.
[22] Z. Wang, T. Ding, C. Mu, Y. Huang, M. Yang, Y. Yang, Z. Chen, Y. Lin, M. Li, An admm-based power system partitioned black-start and parallel restoration method considering high-penetrated renewable energy, International Journal of Electrical Power & Energy Systems 155 (2024) 109532. doi:https: //doi.org/10.1016/j.ijepes.2023.109532. URL https://www.sciencedirect.com/science/ article/pii/S0142061523005896
[23] Q. Yang, H. Wang, T. Wang, S. Zhang, X. Wu, H. Wang, Blockchain-based decentralized energy management platform for residential distributed energy resources in a virtual power plant, Applied Energy 294 (2021) 117026.
[24] M. Song, C. Gao, S. Ma, J. Meng, K. Chen, Distributed scheduling of hvacs based on transactive energy and admm, Applied Energy 325 (2022) 119831. doi:https: //doi.org/10.1016/j.apenergy.2022.119831. URL https://www.sciencedirect.com/science/ article/pii/S0306261922011023
[25] P. Krishnakumari, H. v. Lint, T. Djukic, O. Cats, A data driven method for OD matrix estimation, Transportation Research Procedia 38 (2019) 139–159. doi:10.1016/j.trpro.2019.05.009. URL https://www.sciencedirect.com/science/ article/pii/S2352146519300183
[26] W. Jing, K. An, M. Ramezani, I. Kim, Location Design of Electric Vehicle Charging Facilities: A Path-Distance Constrained Stochastic User Equilibrium Approach, Journal of Advanced Transportation 2017 (2017) 1–15.
16

doi:10.1155/2017/4252946. URL https://www.hindawi.com/journals/jat/ 2017/4252946/
[27] Y. Zhang, Y. Hua, A. Kang, J. He, M. Jia, Y.-Y. Chiang, Optimal and efficient planning of charging stations for electric vehicles in urban areas: Formulation, complexity and solutions, Expert Systems with Applications 230 (2023) 120442. doi:10.1016/j.eswa.2023.120442.
[28] A. Charly, N. J. Thomas, A. Foley, B. Caulfield, Identifying optimal locations for community electric vehicle charging, Sustainable Cities and Society 94 (2023) 104573.
[29] Z. Guo, Y. Wang, Anticipatory planning for equitable and productive curbside electric vehicle charging stations, Sustainable Cities and Society 99 (2023) 104962. doi: https://doi.org/10.1016/j.scs.2023.104962. URL https://www.sciencedirect.com/science/ article/pii/S2210670723005735
[30] A. Asaad, A. M. Kassem, A. Ali, K. Mahmoud, M. F. Shaaban, M. Lehtonen, S. Kamel, F. Jurado, M. Ebeed, Optimal planning of multi-type renewable energy resources and electric vehicle charging stations under resilient charging tariff using gorilla troops optimizer, Journal of Energy Storage 98 (2024) 112908. doi: https://doi.org/10.1016/j.est.2024.112908. URL https://www.sciencedirect.com/science/ article/pii/S2352152X24024940
[31] S. Habib, A. Ahmarinejad, Y. Jia, A stochastic model for microgrids planning considering smart prosumers, electric vehicles and energy storages, Journal of Energy Storage 70 (2023) 107962. doi:https: //doi.org/10.1016/j.est.2023.107962. URL https://www.sciencedirect.com/science/ article/pii/S2352152X23013592
[32] S. Ba-swaimi, R. Verayiah, V. K. Ramachandaramurthy, A. K. ALAhmad, Long-term optimal planning of distributed generations and battery energy storage systems towards high integration of green energy considering uncertainty and demand response program, Journal of Energy Storage 100 (2024) 113562. doi:https: //doi.org/10.1016/j.est.2024.113562. URL https://www.sciencedirect.com/science/ article/pii/S2352152X24031487
[33] H. Li, Y. He, W. Fu, X. Li, Bi-level planning of electric vehicle charging station in coupled distribution-transportation networks, Electric Power Systems Research 232 (2024) 110442. doi:https: //doi.org/10.1016/j.epsr.2024.110442. URL https://www.sciencedirect.com/science/ article/pii/S0378779624003304
[34] S. M. Mahdipour, P. Maghouli, Merchant ev charging station expansion planning, Electric Power Systems Research 231 (2024) 110309. doi:https: //doi.org/10.1016/j.epsr.2024.110309. URL https://www.sciencedirect.com/science/ article/pii/S0378779624001974
[35] T. Yi, Q. Li, Y. Zhu, Z. Shan, H. Ye, C. Xu, H. Dong, A hierarchical co-optimal planning framework for microgrid considering hydrogen energy storage and demand-side flexibilities, Journal of Energy Storage 84 (2024) 110940. doi:https: //doi.org/10.1016/j.est.2024.110940. URL https://www.sciencedirect.com/science/ article/pii/S2352152X24005243
[36] J. Heo, S. Chang, Optimal planning for electric vehicle fast charging stations placements in a city scale using an advantage actor-critic deep reinforcement learning and geospatial analysis, Sustainable Cities and Society 113 (2024) 105567. doi:https: //doi.org/10.1016/j.scs.2024.105567. URL https://www.sciencedirect.com/science/ article/pii/S2210670724003937
[37] H. Pourvaziri, H. Sarhadi, N. Azad, H. Afshari, M. Taghavi, Planning of electric vehicle charging stations: An integrated deep learning and queueing theory approach, Transportation Research Part E: Logistics and Transportation Review 186 (2024) 103568. doi:https: //doi.org/10.1016/j.tre.2024.103568. URL https://www.sciencedirect.com/science/ article/pii/S1366554524001595
[38] Z. Wang, E. Yao, Y. Yang, An analysis of ev charging and route choice behavior considering the effects of planning ability, risk aversion and confidence in battery in longdistance travel, Transportation Research Part F: Traffic Psychology and Behaviour 104 (2024) 186–200. doi: https://doi.org/10.1016/j.trf.2024.05.026. URL https://www.sciencedirect.com/science/ article/pii/S1369847824001256
[39] C. Jiang, A. Liebman, B. Jie, H. Wang, Dynamic rolling horizon optimization for network-constrained v2x value stacking of electric vehicles under uncertainties, Renewable Energy 244 (2025) 122668.
[40] M. R. Elkadeem, M. A. Abido, Optimal planning and operation of grid-connected pv/chp/battery energy system considering demand response and electric vehicles for a multi-residential complex building, Journal of Energy Storage 72 (2023) 108198. doi:https: //doi.org/10.1016/j.est.2023.108198. URL https://www.sciencedirect.com/science/ article/pii/S2352152X23015955
[41] M. H. Shaker, H. Farzin, E. Mashhour, Joint planning of electric vehicle battery swapping stations and
17

distribution grid with centralized charging, Journal of Energy Storage 58 (2023) 106455. doi:https: //doi.org/10.1016/j.est.2022.106455. URL https://www.sciencedirect.com/science/ article/pii/S2352152X22024446
[42] F. Paparella, T. Hofman, M. Salazar, Joint optimization of number of vehicles, battery capacity and operations of an electric autonomous mobility-on-demand fleet, in: 2022 IEEE 61st Conference on Decision and Control (CDC), 2022, pp. 6284–6291.
[43] P. Patil, K. Kazemzadeh, P. Bansal, Integration of charging behavior into infrastructure planning and management of electric vehicles: A systematic review and framework, Sustainable Cities and Society 88 (2023) 104265. doi: https://doi.org/10.1016/j.scs.2022.104265. URL https://www.sciencedirect.com/science/ article/pii/S2210670722005704
[44] W. Wei, L. Wu, J. Wang, S. Mei, Network equilibrium of coupled transportation and power distribution systems, IEEE Transactions on Smart Grid 9 (6) (2017) 67646779.
[45] K. Chaudhari, N. K. Kandasamy, A. Krishnan, A. Ukil, H. B. Gooi, Agent-based aggregated behavior modeling for electric vehicle charging load, IEEE Transactions on Industrial Informatics 15 (2) (2018) 856–868.
[46] W. Yang, W. Liu, C. Y. Chung, F. Wen, Joint Planning of EV Fast Charging Stations and Power Distribution Systems With Balanced Traffic Flow Assignment, IEEE Transactions on Industrial Informatics 17 (3) (2021) 1795–1809, conference Name: IEEE Transactions on Industrial Informatics. doi:10.1109/TII.2020. 2995742.
[47] S. Wang, Z. Y. Dong, F. Luo, K. Meng, Y. Zhang, Stochastic collaborative planning of electric vehicle charging stations and power distribution system, IEEE Transactions on Industrial Informatics 14 (1) (2017) 321–331.
[48] J. Li, Z. Liu, X. Wang, Public charging station localization and route planning of electric vehicles considering the operational strategy: A bi-level optimizing approach, Sustainable Cities and Society 87 (2022) 104153. doi:10.1016/j.scs.2022.104153.
[49] G. Ferro, R. Minciardi, L. Parodi, M. Robba, A bi-level approach for the optimal planning of charging stations and electric vehicles traffic assignment, in: 2020 7th International Conference on Control, Decision and Information Technologies (CoDIT), Vol. 1, 2020, pp. 533–538.
[50] G. Ferro, R. Minciardi, L. Parodi, M. Robba, Optimal planning of charging stations in coupled transportation and power networks based on user equilibrium conditions, IEEE Transactions on Automation Science and Engineering 19 (1) (2022) 48–59.
[51] Z. Lai, S. Li, Towards a multimodal charging network: Joint planning of charging stations and battery swapping stations for electrified ridehailing fleets, Transportation Research Part B: Methodological 183 (2024) 102928. doi:https: //doi.org/10.1016/j.trb.2024.102928. URL https://www.sciencedirect.com/science/ article/pii/S0191261524000523
[52] S. H. Chung, C. Kwon, Multi-period planning for electric car charging station locations: A case of Korean Expressways, European Journal of Operational Research 242 (2) (2015) 677–687. doi:10.1016/j.ejor.2014.10.029. URL https://www.sciencedirect.com/science/ article/pii/S0377221714008509
[53] J. Zhang, Z. Wang, E. J. Miller, D. Cui, P. Liu, Z. Zhang, Z. Sun, Multi-period planning of locations and capacities of public charging stations, Journal of Energy Storage 72 (2023) 108565. doi:https: //doi.org/10.1016/j.est.2023.108565. URL https://www.sciencedirect.com/science/ article/pii/S2352152X2301962X
[54] S. Li, Y. Huang, S. J. Mason, A multi-period optimization model for the deployment of public electric vehicle charging stations on network, Transportation Research Part C: Emerging Technologies 65 (2016) 128–143. doi:10.1016/j.trc.2016.01.008. URL https://www.sciencedirect.com/science/ article/pii/S0968090X16000267
[55] H. Wang, J. Huang, Joint investment and operation of microgrid, IEEE Transactions on Smart Grid 8 (2) (2015) 833–845.
[56] J. Cheng, D. Luo, H. Chen, X. Xiong, Z. Ma, X. Du, An electric vehicle charging station planning method considering traffic congestion, in: 2022 5th International Conference on Energy, Electrical and Power Engineering (CEEPE), 2022, pp. 1115–1125.
[57] X. Liu, Bi-level planning method of urban electric vehicle charging station considering multiple demand scenarios and multi-type charging piles, Journal of Energy Storage 48 (2022) 104012. doi:https: //doi.org/10.1016/j.est.2022.104012. URL https://www.sciencedirect.com/science/ article/pii/S2352152X22000561
[58] C. Huang, S. Li, R. Liu, H. Wang, Y. Chen, Large foundation models for power systems, in: 2024 IEEE Power & Energy Society General Meeting (PESGM), IEEE, 2024.
[59] R. Ramamonjison, T. T. Yu, R. Li, H. Li, G. Carenini, B. Ghaddar, S. He, M. Mostajabdaveh, A. BanitalebiDehkordi, Z. Zhou, Y. Zhang, Nl4opt competition: Formulating optimization problems based on their natural language descriptions (2023). arXiv:2303.08233. URL https://arxiv.org/abs/2303.08233
18

[60] F. Liu, Z. Yang, C. Liu, T. Song, X. Gao, H. Liu, Mmagent: Llm as agents for real-world mathematical modeling problem (2025). arXiv:2505.14148.
URL https://arxiv.org/abs/2505.14148
[61] K. M. Collins, A. Q. Jiang, S. Frieder, L. Wong, M. Zilka, U. Bhatt, T. Lukasiewicz, Y. Wu, J. B. Tenenbaum, W. Hart, T. Gowers, W. Li, A. Weller, M. Jamnik, Evaluating language models for mathematics through interactions, Proceedings of the National Academy of Sciences 121 (24) (2024) e2318124121. doi:10.1073/pnas.2318124121. URL https://pnas.org/doi/10.1073/pnas. 2318124121
[62] W. Shi, Q. Ling, G. Wu, W. Yin, On the linear convergence of the admm in decentralized consensus optimization, IEEE Transactions on Signal Processing 62 (7) (2014) 1750–1761.
[63] Y. Wang, L. Wu, S. Wang, A fully-decentralized consensus-based admm approach for dc-opf with demand response, IEEE Transactions on Smart Grid 8 (6) (2017) 2637–2647. doi:10.1109/TSG.2016.2532467.
[64] K. Sun, X. A. Sun, A two-level admm algorithm for ac opf with global convergence guarantees, IEEE Transactions on Power Systems 36 (6) (2021) 5271–5281. doi:10. 1109/TPWRS.2021.3073116.
[65] M. Hong, Z.-Q. Luo, M. Razaviyayn, Convergence analysis of alternating direction method of multipliers for a family of nonconvex problems, SIAM Journal on Optimization 26 (1) (2016) 337–364. doi:10.1137/ 140990309.
[66] Y. Wang, W. Yin, J. Zeng, Global convergence of admm in nonconvex nonsmooth optimization 78 (1) (2019). doi:10.1007/s10915-018-0757-z. URL https://doi.org/10.1007/ s10915-018-0757-z
[67] OpenAI, ChatGPT, accessed: 2025-06-18 (2023). URL https://openai.com/chatgpt/overview
[68] Didi Chuxing, Didi Chuxing GAIA Initiative, accessed: 2016-12-01 (2016).
URL https://gaia.didichuxing.com
[69] China Briefing, China’s 2016 official holiday schedule released, https://www.china-briefing.com/news/ chinas-2016-official-holiday-schedule-released/, accessed: 2025-09-07 (2015).
[70] Time and Date, Chengdu, china — november 2016 weather history, https://www.timeanddate.com/ weather/china/chengdu/historic?month=11& year=2016, accessed: 2025-09-07 (2016).
[71] Tesla, Introducing V3 Supercharging | Tesla Australia, accessed: 2023-03-31 (2019).
URL https://www.tesla.com/en_au/blog/ introducing-v3-supercharging
[72] T. Hagon, What EVs cost to run compared to petrolpowered cars (2022).
URL https://www.theaustralian. com.au/special-reports/ what-evs-cost-to-run-compared-to-petrolpowered-cars news-story/45eb067025a0519bab792509707a9c50
[73] CEIC, Property Price: Residential: Sichuan: Chengdu, accessed: 2023-03-31 (2023).
URL https://www.ceicdata.com/en/china
[74] Chengdu Municipal Bureau of Economy and Information Technology, Notice on issuing the chengdu city special plan for electric vehicle charging and battery-swapping infrastructure (2023–2025) (Jun. 2023).
URL https://www.escn.com.cn/news/ show-2079984.html
[75] R. Chen, R. Fan, D. Wang, Q. Yao, Effects of multiple incentives on electric vehicle charging infrastructure deployment in china: An evolutionary analysis in complex network, Energy 264 (2023) 125747–125747. doi:10.1016/j.energy.2022.125747. URL https://www.sciencedirect.com/science/ article/pii/S0360544222026330
[76] Gurobi, Gurobi Optimizer, accessed: 2024-03-31 (2024). URL https://www.gurobi.com/solutions/ gurobi-optimizer/
[77] Y. Tao, J. Qiu, S. Lai, X. Sun, J. Zhao, Adaptive integrated planning of electricity networks and fast charging stations under electric vehicle diffusion, IEEE Transactions on Power Systems 38 (1) (2023) 499–513.
19

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:12.055Z
- **Text Length:** 94734 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 19 of 19
