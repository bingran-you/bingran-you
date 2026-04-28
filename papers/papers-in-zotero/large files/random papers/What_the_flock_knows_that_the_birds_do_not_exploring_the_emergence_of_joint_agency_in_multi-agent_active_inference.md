# PDF Document: Maisto et al. - 2025 - What the flock knows that the birds do not exploring the emergence of joint agency in multi-agent a.pdf

**File Path:** Maisto et al. - 2025 - What the flock knows that the birds do not exploring the emergence of joint agency in multi-agent a.pdf

**Processed Date:** 2026-02-10T18:16:54.302Z

**File Size:** 2413.75 KB

**Total Pages:** 19

**Extracted Pages:** 19

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3619

**Title:** What the flock knows that the birds do not: exploring the emergence of joint agency in multi-agent active inference

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

What the flock knows that the birds do not: exploring the
emergence of joint agency in multi-agent active inference
Domenico Maisto, Davide Nuzzi, Giovanni Pezzulo∗
Institute of Cognitive Sciences and Technologies, National Research Council, Rome, Italy ∗ Corresponding author: giovanni.pezzulo@istc.cnr.it
November 17, 2025
Abstract
Collective behavior pervades biological systems, from flocks of birds to neural assemblies and human societies. Yet, how such collectives acquire functional properties—such as joint agency or knowledge—that transcend those of their individual components remains an open question. Here, we combine active inference and information-theoretic analyses to explore how a minimal system of interacting agents can give rise to joint agency and collective knowledge. We model flocking dynamics using multiple a-
ctive inference agents, each minimizing its own free energy while coupling reciprocally with its neighbors. We show that as agents self-organize, their interactions define higher-order statistical boundaries (Markov blankets) enclosing a “flock” that can be treated as an emergent agent with its own sensory, active, and internal states. When exposed to external perturbations (a “predator”), the flock exhibits faster, coordinated responses than individual agents, reflecting collective sensitivity to-
 environmental change. Crucially, analyses of synergistic information reveal that the flock encodes information about the predator’s location that is not accessible to every individual bird, demonstrating implicit collective knowledge. Together, these results show how informational coupling among active inference agents can generate new levels of autonomy and inference, providing a framework for understanding the emergence of (implicit) collective knowledge and joint agency.
Keywords: joint agency; active inference; multi-agent systems; flocks; synergistic information
1 Introduction
The anchor of all my dreams is the collective wisdom of mankind as a whole. – Nelson Mandela
The fundamental unit of analysis in biology and cognition is often the agent—an entity, such as a person, animal, or even a single neuron or cell, that possesses a well-defined boundary and some degree of agency, that is, autonomy in perceiving and interacting with an environment. However, many of the most intriguing phenomena in biological and cognitive systems emerge not from isolated agents but from the collective dynamics of multiple interacting ones. Examples include the coordinated behaviors-
 and self-organization of cells composing a body morphology [49, 23, 67, 52, 54]neural population dynamics underlying brain function [18, 26, 21, 13, 38], the collective behaviors animals [42, 47, 80], distributed models of mind [57, 41], and even human societies viewed as collective agents [74]. Such collective intelligence phenomena occur across multiple scales of biological and cognitive organization [56]. These examples suggest that the concept of agency can be generalized beyond single indivi-
duals or parts, extending to systems composed of many interacting components that together behave as if they were one agent. If agency is defined as the capacity to sense, infer, and act purposefully, then joint agency (also called shared or collective agency) arises when perception, cognition, and action extend beyond a single entity—emerging instead from the coordinated dynamics of multiple decision-making units.
1
arXiv:2511.10835v1 [nlin.AO] 13 Nov 2025

Notions of joint agency appear at many levels of organization and cognitive sophistication. At the level of human social behavior, classical theories of social cognition emphasize both social interaction and collective behavior: while individuals act autonomously, they also participate in shared social structures. Theories of mentalizing highlight that agents form beliefs about, and models of, other agents’ minds [25]. Complementary accounts emphasize shared and aligned representations, in which -
multiple agents maintain overlapping internal models of their environment [66]. In these frameworks, joint agency corresponds to phenomena such as shared representations [75, 76], collective intentions and goals [5, 6, 82], joint commitments [31], common ground [10], joint payoffs and team reasoning [79], and “we-representations” of action and intention [28]. Empirical work in cognitive neuroscience supports these views, identifying mechanisms such as neural coupling [36, 35, 55, 44], mirroring [2-
7, 71] and sensorimotor communication [64] as enabling the fine-grained spatiotemporal coordination required for joint action. Subjectively, such coordination can give rise to a shared sense of agency—the feeling that outcomes were caused together [59]. Computational models have begun to formalize these social dynamics in terms of interacting agents that communicate, coordinate, and collaborate toward shared objectives. These frameworks typically assume internal (generative) models that encode dis-
tinctions between self and others—“my,” “your,” and “our” actions and intentions [84, 45]. More recent approaches, however, explore interactive dynamics in which multiple agents maintain and update a shared world model to minimize prediction errors toward a common goal [19, 53, 24]. Related concepts include the notion of agent-neutral models, or internal models that predict the collective consequences of joint actions regardless of who executed them [65, 66], and shared beliefs such as “public bel-
iefs” [16] or the “imagined we” [81], where collective cognitive dimensions (e.g., beliefs, plans, agency)—shared across multiple individuals—supersede and drive individual cognitive states. Here we are concerned with a more primitive notion of joint agency that arises at lower levels of organization: at the level of collective behavior and self-organization among simple, particle-like agents that lack advanced cognitive abilities and rich internal models incorporating notions like “our beliefs” o-
r “our plans”. This primitive form of joint agency emerges from the simple fact that teams of agents can infer their own states and actions based on those of other, surrounding agents to which they are informationally coupled—and they are capable of making collective decisions [12, 78]. There is a long tradition of studying the self-organization of collectives, such as active particles, animal swarms, and robot ensembles, using methods from statistical physics and information theory [14, 4, 7, 2, -
32, 1]. Complementary approaches have also been developed to quantify causal emergence and the extent to which higher-level collective dynamics exhibit causal power beyond that of their individual components [40, 72]. An emerging trend is the study of collective phenomena and multi-agent systems within the active inference framework [61, 19, 53, 37, 48, 3, 73]. Active inference was initially developed to address the cognitive and neural processes associated with isolated biological organisms and t-
heir action-perception cycle. The general idea was that a single imperative or objective function — the minimization of variational free energy — suffices to explain both perception and action and their associated neural dynamics in biological organisms. Recent developments have extended active inference principles to the collective dynamics of multiple agents, simpler (e.g., active particles) or more complex. The main difference between active inference and typical statistical approaches used to -
study collective phenomena is that each component is a fullfledged agent, with its action-perception cycle and minimizing its free energy based on local signals from the environment and/or other agents. For instance, in a network of agents playing the role of “neurons,” each minimizing its own variational free energy, a single neuron can infer whether or not to fire based on the activity of surrounding neurons. The ensemble of neurons can thereby exhibit synchronous dynamics and become collectivel-
y responsive to perceptual stimuli and reward contingencies [60, 29, 30]. Similarly, in a collection of cells engaged in morphogenesis and pattern formation, each cell can infer its own position in the final body morphology from the chemical signals emitted by neighboring cells, while simultaneously emitting signals that guide others [23]. Functionally, each cell acts as an individual active inference agent minimizing its own free energy, yet its collective dynamics lead to the emergence of a cohe-
rent body morphology that is resilient—for example, capable of reconstructing itself after perturbation. When endowed with joint agency, active inference agents do not lose their individual autonomy: each continues to infer and minimize its own free energy. However, their collective agency at the
2

system level supersedes individual agency to some extent, as the fate of each agent becomes jointly determined by the states and signals of others [37]. This formulation allows studying agency at two (or more) nested levels: the level of the single agent and the agent collective (and of a collective composed of collectives, and so on). The formulation also allows studying how collective processes can go awry, for example, when a single agent becomes insensitive to signals from other agents and he-
nce myopically pursues individual rather than collective goals. In this perspective, a breakdown of cell-cell communication that causes individual cells to prioritize unicellular objectives rather than large-scale, collective morphogenetic goals has been proposed as a possible mechanism for cancer [50, 51]. Despite significant progress in modeling the collective behavior of multiple (simple) active inference agents, the relationships between these models and the broader notions of joint agency rem-
ain only partially understood. Previous active inference simulations have primarily focused on the self-organization of agents into cohesive multi-agent structures—such as bodies or coordinated ensembles—but have paid less attention to the functional consequences of this self-organization for higher-order phenomena such as joint agency or collective beliefs. These functional notions are typically not explicitly encoded in the internal generative models of the simulated agents, unlike in active inf-
erence models of higher-level cognition (e.g., human–human joint action [53]), where such constructs are explicitly represented. This raises an important question: can a collective system, even in the absence of explicit cognitive representations, be said to possess a form of knowledge or operational capability that extends beyond that of its individual components? In other words, can the ensemble as a whole instantiate a collective world model —a functional integration of information and inferenc-
e processes that confers emergent, joint agency? To address these questions, we present and analyze a simple self-organizing multi-agent simulation inspired by flocking dynamics, in which each “bird” is modeled as an active inference agent minimizing its own variational free energy. In this framework, each bird updates its beliefs about hidden states (e.g., its heading direction) based on local observations and acts to minimize prediction error, leading to emergent coordination as birds gradually -
align their trajectories over time. We first illustrate how a formal notion of both individual agency (of the birds) and joint agency (of the flock) can be derived within this setting, using the concept of a Markov blanket to delineate the statistical boundaries between agents, their interactions, and the environment. We then present simulations in which a “predator” is introduced to perturb and destabilize the flock, allowing us to examine two distinct phases: one in which the flock exhibits join-
t agency, and another in which it does not. This minimal model allows us to visualize the transition from individual to joint agency (in the absence of perturbations) and its dissolution under external disruption (when the predator attacks). It thereby demonstrates how birds can dynamically merge into, or separate from, a collective agent—a flock —through changing patterns of coupling and inference. Finally, we employ synergistic information—a quantitative measure of how information is distributed-
 and integrated across multiple components—to assess the extent to which the collective flock possesses implicit “knowledge about” the predator’s position that exceeds the information explicitly represented in the internal models of individual birds. This approach enables us to characterize the emergence of system-level inference and coordination, offering a formal bridge between information-theoretic and dynamical notions of collective and joint agency.
2 Formalizing individual and joint agency in flocking behavior
through Markov blankets
We develop a simulation of flocking behavior, in which we consider an ensemble of 100 active inference agents (”birds”), each endowed with identical internal models and each minimizing its local variational free energy. To infer its heading direction, each bird uses observations about the heading directions of its neighbors. This simple mechanism promotes the self-organization of the birds into a collective flocking behavior. It is analogous to models in statistical physics [85] and flocking simul-
ations in computer graphics [70], but it is based on local inference rather than on predefined rules (see Section A for a formal specification of the active inference agents). Figure 1A illustrates 8 consecutive time steps of an example simulation of flocking behavior among 100 birds, with the colors and orientations of the inset (bird) images indicating each bird’s current heading direction. The simulation shows the gradual alignment of the birds’ headings over time.
3

a) t = 1 t = 2 t = 3 t = 4
t=5 t=6 t=7 t=8
b) c) d)
Agent type Internal External Active Sensory
Figure 1: Formalizing individual and joint agency in flocking behavior through Markov blankets (a) Example simulation of flocking behavior among 100 birds over 8 time steps, showing the gradual alignment of headings. (b) Markov blankets, individual and joint agency. Schematic representation of an individual agent, whose internal states are separated from the external environment by a Markov blanket (dashed line). The blanket mediates the exchange of information through sensory s and active a state-
s, defining the agent’s boundary for perception and action. (c) Illustration of a group of interacting agents whose collective dynamics are enclosed within a higher-level Markov blanket (dashed line). Through reciprocal coupling and shared information flow, the ensemble functions as a single, higher-order agent (’flock’), exemplifying the emergence of joint or shared agency from multiple interacting components. (d) The emergent Markov blanket around the flock during time steps 1–6 of the simulatio-
n in (a). Colors illustrate the statistical roles of individual birds relative to the flock Markov Blanket: internal (blue), active (red), and sensory (magenta). External states are depicted as cyan birds.
4

To assess whether this alignment can be formalized as a transition toward joint agency—namely, from individual birds to a flock —we turn to the notion of (nested) Markov blankets [46, 62, 22]. A Markov blanket defines a statistical boundary around an agent, delineating the interface between its internal states and the external environment—and thereby its domain of perception and action [63] (Figure 1B). It is based on the notion of statistical independence: internal and external states are condit-
ionally independent given a set of blanket states, typically partitioned into sensory and active states. Sensory states mediate the flow of information from the environment to the internal states (observations), while active states mediate the influence of internal dynamics on the environment (actions). This statistical separation enables an agent to maintain its identity and autonomy by inferring hidden causes in the environment from its sensory inputs, and by acting to minimize the discrepancy b-
etween predicted and observed states. Crucially, the Markov blanket formalism allows for hierarchical nesting of agents and collectives. When multiple agents become sufficiently coupled through reciprocal sensory and active exchanges, their collective dynamics can give rise to a higher-level Markov blanket encompassing the group as a whole (Figure 1C). In this configuration, some of the individual agents’ states function as the internal, sensory, and active components of a superordinate blanket, t-
hereby defining a new, emergent agent. Thus, while each agent retains its individual agency, the group simultaneously acquires a higherlevel, joint agency. Such nesting provides a principled, statistical account of how joint agency can arise naturally from the interactions of individual agents: as informational boundaries reorganize, new levels of autonomy and coordinated inference emerge [20, 37]. Figure 1D shows the Markov blanket around a collective of birds—which we henceforth call a flock tha-
t emerges over time steps 1–6 of the simulation. The colors illustrate that individual birds play distinct roles in the flock, serving as internal (blue), active (red), and sensory (magenta) states, whereas the remaining birds (cyan) constitute external states outside the Markov blanket. This visualization demonstrates that, during the simulation, a statistical separation emerges between birds that are part of the flock and those that are not, thereby providing a formal characterization of joint a-
gency in the flock. Our simulations further demonstrate that the flock preserves certain macroscopic characteristics—such as its overall direction and approximate shape—even as its precise boundaries fluctuate over time. Summing up, we have shown that the notion of Markov blanket provides a principled way to formalize the emergence of a collective agent (the flock) above and beyond the individual agents (the birds). The flock can thus be ascribed a form of (joint) agency, grounded in the statistic-
al separation (or autonomy) of its internal states from external states, and in the mediating roles of sensory and active states that couple the two. At the same time, the joint agency of the flock does not diminish the individual agency of its constituent birds, which continue to infer and minimize their own free energy autonomously. These two levels of autonomy, therefore, coexist and are hierarchically nested within one another.
3 Sensing and escaping predators in the flock
Having defined the notion of joint agency in a flock, we now assess to what extent the flock can “sense” and “react to” external perturbations. To this end, we extend the flocking simulation by introducing a “predator” that appears at two distinct random positions at time steps 5 and 35, and disappears at the following time step. The predator destabilizes the flock: all birds that sense the predator enter a “stress” state that compels them to escape by moving in random directions. Furthermore, thi-
s stress state propagates to neighboring birds, causing them also to move randomly and triggering a fast cascade that destabilizes the entire flock. This simulation allows us to compare the effects of the predator at two stages: an early stage (step 5), before the birds have self-organized into a large flock, and a later stage (step 35), when a large, cohesive flock has already formed. Figure 2 shows the results of 500 simulations, each lasting 60 time steps, in which the predator appears at rando-
m positions. We excluded from the analysis and the plots 32 simulations where the agents’ ’stress’ state, induced by the first predator, had not fully returned to baseline before the arrival of the second predator. Figure 2A displays four configurations, before and after the predator appears at time steps 5 and 35, in one representative simulation. It permits visually appreciating that the birds are more organized before the second appearance of the predator and that in both cases, the predator ’d-
establizes’ the system.
5

a) t = 5 t = 10
t = 35 t = 40
3
4
5
6
7
Energy
b)
10 20 30 40 50 60 Time
0.0
0.1
0.2
0.3
0.4
Stress
c)
Figure 2: Sensing and escaping predators in the flock. (a) Example of four configurations from a single simulation run. A predator (indicated by a white bird) arrives at time steps t = 5 and t = 35, at two distinct, random locations. Configurations are also shown 5 steps following each arrival (t = 10 and t = 40). White birds are shown in the plots for illustrative purposes only; they are not part of the simulation except at time steps t = 5 and t = 35. (b) System energy, representing the global d-
egree of alignment among agents. The dashed lines show the arrival times of the first (red) and second (blue) predators. The gray band indicates the interquartile range across all simulations. (c) Agents’ average stress state over time. The dashed lines show the arrival times of the first (red) and second (blue) predators. The gray band indicates the interquartile range across all simulations. See the main text for further explanation.
Figure 2B shows the energy of the system, defined as in the vector Potts model with four states and Moore neighborhood [85], which characterizes the average degree of alignment among the birds (and thus approximates the size or coherence of the flock). When the predator appears at an early stage (red dotted line), the energy continues to increase briefly before decreasing, indicating that disorganization occurs with some delay. In contrast, when the predator appears later (blue dotted line), the e-
nergy is initially much higher due to the presence of an already well-formed flock; here, the decrease in energy occurs more rapidly, reflecting a faster predator-induced destabilization. Figure 2C shows the dynamics of the “stress” state across birds, which—as expected—increase sharply when the predator appears and then gradually decline. This pattern is expected, since the stress propagation is designed to be independent of the agents’ current states. Summing up, this simulation illustrates that-
 predator-induced destabilization occurs faster the second time the predator appears, when a larger flock is present. This occurs despite the propagation mechanism of the “stress” state being identical in both cases (Figure 2C). The faster response of the flock may indicate more efficient information propagation within the collective, a hypothesis we investigate in the next analysis.
4 Synergistic information about predator location in the flock
In this analysis, we turn to our central question: can we identify a notion of collective knowledge in the flock that extends beyond that of its individual agents? Specifically, we assess whether the flock as a whole carries information about the predator’s location that individual birds do not possess—and whether this information is greater during the second
6

appearance of the predator (at time step 35, when a larger flock is present) than during the first (at time step 5, when the birds are still close to a random configuration). To quantify this, we employ partial information decomposition (PID) [83], an information-theoretic framework that measures how two source variables (e.g., a pair of birds) together provide information about a target variable (e.g., the location of the predator). Crucially, PID decomposes total mutual information into three c-
omponents: the unique information provided by each source individually, the redundant information shared between them, and the synergistic information that emerges only when both sources are considered jointly. Synergistic information has been proposed as a foundation for formalizing emergence, capturing higher-level informational structure beyond the sum of individual contributions [72]. We compute all four PID atoms across all pairs of birds (source variables) and for each of the two predator lo-
cations (target variable), over all 60 time steps and 1000 simulation runs. In each simulation, the predator appears at two distinct random positions. To reduce the dimensionality of the target variable and mitigate estimation bias, we coarse-grained the predator’s 10 × 10 grid location to a 2 × 2 grid. This results in four large, dynamically equivalent quadrants, which remain uniformly sampled by the predator. This coarse-graining ensures that any detected information about the target’s location -
must be dynamically encoded by the agents, rather than stemming from static, pre-existing properties of the environment (e.g., center-vs-edge effects). Figure 3 summarizes these results. The core concepts of PID, including unique information, redundancy, and synergy, are conceptually illustrated in Figure 3A. Figure 3B summarizes the temporal dynamics of all four PID atoms, averaged across all bird pairs. Notably, the unique information atoms (top panels) and the redundancy atom (bottom left panel-
) remain comparable to zero, falling within the gray band of the null distribution at all time steps. In sharp contrast, the synergy atom (bottom right panel) is the only variable that shows significant values. Specifically, we observe a significant peak in synergistic information for the second predator appearance (blue curve). In contrast, the synergy related to the first predator (red curve) shows a similar temporal shape (a peak, decline, and rebound), but it falls within the null distribution-
 band and is therefore not statistically significant. The significant synergy (blue curve) peaks shortly after the predator’s appearance and then declines, with a smaller rebound thereafter. The impact of spatial separation (measured using Chebyshev distance) on the synergy is further detailed in Figure 3C. For pairs in close proximity (Distance = 1, left panel), significant synergy is detected for both the first (red curve) and second (blue curve) predator appearances. As the distance increases (-
Distance = 3 and Distance = 5, middle panels), the synergy for the first predator becomes non-significant, while the synergy for the second predator remains robustly above the null distribution. At the longest distance shown (Distance = 7, right panel), synergy becomes non-significant for both events. In all cases, the synergy is higher for the second predator than for the first. Summing up, this analysis reveals that the flock exhibits synergistic information about the predator’s location, and th-
at this information is stronger and more spatially distributed during the second predator event, when a larger flock is present. This finding illustrates a form of collective knowledge that extends beyond the information available to individual birds, and may help explain the faster collective response observed during the second predator encounter. It also points toward a notion of causal emergence, supported by the presence of synergistic information [72].
5 Discussion
Many of the most fascinating phenomena in biology arise from the self-organization and coordinated behavior of simple agents—cells, neurons, animals, humans, and beyond. Such collective dynamics have been studied across multiple scales, from high-level cognitive constructs such as shared goals and plans, to low-level collective phenomena mediated by reciprocal interactions among simple agents that lack explicit representations of “you,” “we,” or other higher-level cognitive concepts. In this work,-
 we have explored the notion of joint agency in a minimal setting: a population of active inference agents (birds), each minimizing its own free energy while remaining informationally coupled with others. Through simulations of collective self-organization in flocking behavior, we examined three interconnected questions. In the first analysis, we used the concept of (nested) Markov blankets to formalize how agency can extend beyond individual active inference agents to groups of agents—that is, fr-
om birds to
7

Unique 1 Unique 2
Synergy
Redundancy
a)
0.005
0.000
0.005
0.010
b) Unique 1
0.005
0.000
0.005
0.010
Unique 2
20 40 60 Time
0.0000
0.0025
0.0050
0.0075
0.0100
Redundancy
20 40 60 Time
0.00
0.01
0.02
0.03
0.04
0.05
0.06 Synergy
20 40 60 Time
0.02
0.04
0.06
0.08
0.10
0.12
0.14 c) Distance = 1
Predator 1 Predator 2
First predator time Second predator time
20 40 60 Time
Distance = 3
20 40 60 Time
Distance = 5
20 40 60 Time
Distance = 7
Figure 3: Synergistic information about predator location in the flock. (a) Partial Information Decomposition (PID) of the mutual information between two source variables (agent states, X1 and X2, black birds) and a target variable (predator position, in one of four 5×5 quadrants, Y , white bird). The blue and red ellipses delineate the contribution of X1 and X2, respectively, while the green circle shows the combined contribution. The total information is partitioned into the four unique atoms: r-
edundancy (the purple overlap) represents information available from both sources, synergy represents information available only when both sources are considered together (outside the ellipses), and unique information represents information available from only one source. (b) Temporal dynamics of the four PID atoms: unique information from the first (top left) and second (top right) agent in each pair, redundancy (bottom left), and synergy (bottom right). Each atom is averaged over 1000 simulation-
s and all 4950 pairs of agents. The red curve shows the case where the target is the position of the first predator, and the blue curve shows the case where the target is the position of the second predator. Vertical dashed lines indicate the arrival times of the predators. The gray band represents the 5th to 95th percentile of the null distribution, obtained by 500 random permutations of the target variable. (c) Temporal dynamics of the synergy as a function of the spatial distance between agent -
pairs. Each panel shows the dynamics, mediated across the same 1000 simulations, calculated only for agent pairs separated by a specific Chebyshev distance D = 1, 3, 5, 7 (from left to right). The figure conventions (red/blue curves for predator targets, vertical dashed lines for arrival times, and gray band for the null distribution derived from target permutations) are identical to those in (b).
8

flocks. We showed that during flocking, the Markov blanket, which formalizes a statistical boundary around an agent, can expand to enclose a set of birds forming a collective unit. Within the flock, subsets of birds play the roles of internal, sensory, and active states of a collective Markov blanket, while others constitute external states. This analysis extends prior work on collective, multi-agent systems—including groups of neurons [60], collections of primordial cells [20], and developing ti-
ssues [23]—by showing that the notion of the Markov blanket can account for situations in which each agent retains its individual autonomy, while the collective simultaneously acquires a higher-level, joint agency. From this perspective, agency is not a fixed attribute of individual systems but an emergent property of coupled dynamics that maintain conditional independence from their surroundings. As interactions among agents strengthen, the boundaries that define “self” can expand or contract, gi-
ving rise to transient or stable forms of joint agency. This provides a unified statistical and dynamical framework for understanding how perception, action, and decision-making scale from individuals to collectives—from neurons forming neural assemblies to organisms forming social or ecological systems. In the second and third analyses, we asked whether being endowed with joint agency—that is, forming a flock—confers additional capabilities or knowledge compared to individual agents. To this end,-
 we introduced a “predator” that appeared at random positions during both early stages of selforganization (when no flock or only a small flock was present) and later stages (when a large flock had formed). The predator destabilized the system by triggering a “stress” state that caused nearby birds to reorient randomly, propagating disruption through the flock. The simulations revealed that larger flocks reacted more rapidly to the predator, as indicated by a faster onset of destabilization during-
 later stages, even though the rules governing the propagation of “stress” did not depend on the level of organization. Most importantly, our results show that the flock as a whole possesses synergistic information about the predator’s location, and that this information increases with flock size and extends farther from the predator. This suggests a formally grounded—albeit implicit—notion of collective knowledge (or shared world model) that goes beyond the information available to individual bir-
ds. Summing up, our simulations illustrate a simple yet general method to characterize a collective agent, such as a flock, as an entity that maintains statistical separation from its environment through a Markov blanket, and exhibits knowledge beyond its components through synergistic information. More broadly, these results illustrate how collective entities can extend the spatial and temporal reach of perception, cognition, and action—or their cognitive light cone [49]—beyond the boundaries of -
any single agent. There is, however, a conceptual distinction between the implicit form of collective knowledge revealed by synergistic information and the explicit forms typically studied in cognitive science. In cognitive and social sciences, collective knowledge is often assumed to rely on explicit internal models of others’ mental states or shared epistemic representations (e.g., “common ground” or “what we all know that we know”). Similarly, our simulations demonstrate collective sensing and -
action that do not depend on such explicit representations but instead arise from simple interaction rules. In human societies, collective action is often defined by intentionality—individuals act with the goal of producing collective outcomes. By contrast, in simpler biological systems, such as morphogenesis or pattern formation, intentionality can be replaced by teleological organization: systems are structured in such a way to produce collective outcomes even without explicit goals. An open que-
stion, then, is how to bridge our minimal notion of joint agency with more sophisticated accounts used in cognitive science. A natural starting point is the good regulator theorem [11], which states that any effective controller must embody a model of the system it regulates. The multi-agent systems we described do not have a model of their collective behavior; rather, they collectively are or become a model of social action through their pattern of couplings. More complex agents, by contrast, pos-
sess explicit internal models of collective behavior, with shared representations, goals, and intentions. Understanding how living systems evolve from being to having a model may shed light on the developmental and evolutionary origins of collective cognition. Finally, this perspective invites consideration of agency at even broader spatial and temporal scales, such as in niche construction [69]. Extending these ideas across generations and cultural dynamics raises deeper questions [68, 9, 24]: To-
 what extent are our minds shaped by social dynamics? How far do our Markov blankets extend to encompass others? Are our generative models so profoundly influenced by social and cultural processes that purely individual agency becomes impossible to isolate? And does the fact that knowledge is distributed across people, artifacts, and institutions—books, tools,
9

and the internet—render minds inherently socially extended and embedded by design? We leave these questions open for future research.
A Supplementary materials
A.1 Active inference framework
In this work, we consider birds as Bayesian agents with sensory, active, and internal states that are updated according to the Active Inference principles [61]. Active inference (AIF) is a theoretical framework that provides a unified account of perception, action, and learning of both living and artificial systems. It posits that an agent’s behavior can be understood as the process of maximizing the evidence for the implicit statistical model of the world it embodies, in response to the sensory i-
nformation flow, by selecting adaptive sequences of actions. This process is formally grounded in the free-energy principle, according to which, given a physical phenomenon named generative process, minimizing a quantity known as variational free-energy corresponds to optimizing the upper bound on the measure of how much the generative model used by the agent to describe the phenomenon diverges from the generative process in its predictions. Following the AIF framework, we designed a generative mo-
del describing a single bird that, through local interactions, determines the emergence of flocking behaviors. We adopted a hybrid modeling approach. We borrowed the Potts model [85], a statistical physics model describing spin glasses in which spins are arranged on a lattice, a periodic graph, and combined it with the computational model developed by Reynolds to mimic collective behaviors in computer vision applications [70]. The Potts model is a generalization of the Ising model [43] for q > 2 c-
omponents. It has been used to address numerous problems in collective behavior, which are often described as instances of lattice statistics. Indeed, replacing continuous symmetry with discrete symmetry allows for a simpler, more tractable understanding of the flocking transition. Recently, Solon and Tailleur argued that flocking can be described as a transition from a disordered phase to a polar-ordered phase in an active Ising model, in which spins both diffuse and align on the lattice, a coars-
e-grained representation of the space [77]. [8] studied a square lattice in which active particles have four internal states corresponding to the four directions of motion. A local alignment rule inspired by the ferromagnetic 4-state Potts model, combined with self-propulsion via biased diffusion based on the internal particle states, leads to flocking at high densities and low noise. In contrast, Reynolds introduced a set of prescriptions to force group coordination among multiple agents to simul-
ate herds and swarms. Essentially, Reynolds’ rules require each agent to:
1. Attempt to stay close to nearby agent (flock centering);
2. Avoid collisions with nearby agent (collision avoidance);
3. Attempt to match velocity with a nearby agent (velocity matching).
These three rules have a heuristic nature and were conceived to respectively promote cohesion, separation, and alignment of agents known as boids – a compound noun with “bird” and the suffix “oids” (this latter meaning “having the likeness of”) – used to simulate real-life swarms or herds by automated processes. Throughout this section, we will see how these rules are embedded in each agent’s generative model and how they influence its internal state, along with observations of neighboring agents’-
 states.
A.2 Generative model for flocking
Let us consider an ensemble of N birds deployed on a two-dimensional lattice of side L = √N with coordination number M = 8, representing next-nearest-neighbor interactions. Each bird is in one of q discrete internal states corresponding to a movement in one of the q lattice directions; just one bird can occupy each site i. In the single bird’s generative model occupying the site i, the hidden state zi encodes its propensity to get one of q = 4 discrete internal states corresponding to cardinal dir-
ections. Each bird is active in the sense that it can flip its internal state and move to a different site. Then, its own control states ui is an integer in [0, q − 1].
10

The observations σ ̃i for each single bird consist of the collection of spin states σj (with j ∈ M and j ̸= i) of its M neighboring agents. In our setup, each bird acts as both the process that generates observations for other birds and the generative model that infers the cause of those observations. Note that the action of one bird constitutes the observed outcomes for another (at the subsequent time step). Therefore, a bird is in a state with a probability corresponding to its beliefs about th-
e average state of its neighborhood at the previous time step. We can give the expression of the full predictive generative model of a single bird at time t meant as a joint distribution P (σ ̃t, zt, ut) over the neighborhood observations σ ̃t, the current hidden state zt and the related control state ut. One can factorize this distribution to have a form constituted of tractable expressions:
P (σ ̃t, zt, ut) = P (σ ̃t|zt)P (zt|ut)P (ut) (1)
that includes:
• A likelihood P (σ ̃t|zti) encoding neighborly relations. Using the three Reynolds’ rules to define likelihood establishes how the agents interact. The whole likelihood can be expressed as the product of the single observations σj received by a single bird in the site i with internal state zi; hence, the likelihood can be factorized as P (σ ̃|zi) = QM
j P (σj|zi) , where:
P (σj|zi; i, j, β) = exp {−βR(i, j)}
PM
k=1 exp {−βR(i, k)} (2)
where β is the temperature of the softmax function, and R : (i, j) ∈ Λ × Λ −→ R is a real function defined over the pairs that the site i composes with the neighboring sites, such that:
R(i, j) =

   
   
vm, |ηi − ζj| = 0
ca, |ηi − ζj| = π ∧ θij = ηi
fc, |ηi − ζj| = π ∧ θij ̸= ηi
0, |ηi − ζj| ∈ π
2, 3
2π
(3)
where θij is the angle associated to the two-dimensional unit position vector (ri−rj) = (cos θij, sin θij) of the lattice site j concerning to the site i, with δi and ζj respectively defined as ηi = 2πzi/q, ζj = 2πσj/q, with zi = 0, . . . , q − 1, and σj = 0, . . . , q − 1. Each one of the real values vm, cp, and fd is related to a Reynolds’ rule; they correspond respectively to the velocity matching, collision avoidance, and flock centering parameters. For instance, setting vm > 0 we induce the b-
ird to match the averaged observed state of its neighborhood; setting appropriate values for ca and fd we induce in the bird a tendency to penalize heading directions parallel and opposite to the averaged observed state (|ηi − ζj| = π) both to avoid collisions when the verses of corresponding directions are convergent (θij = ηi), and to force the bird to stay in group when verses are divergent (θij ̸= ηi). In our simulations, we used the following parameter values: vm = 4, ca = 2, and fc = 1.
Finally, R(i, j) is zero when the states of the bird and the neighbor are orthogonal, and this circumstance describes configurations where no particular utility, neither rewarding nor penalizing, is assigned.
• A state transition P (zt|ut), such that:
P (zt|ut; ρ) = exp{−ρ δzt,ut }
P
u exp{−ρ δzt,u} , (4)
with z0 ∼ Cat(1/q, . . . , 1/q) when t = 0, that assigns to a bird the flight direction specified by the action ut.
• A posterior distribution over control states defined as:
P (ut; γ) = exp {−γ G(ut)}
P
u exp {−γ G(ut)} (5)
11

where G(ut) is the expected free energy of the policy ut one-control-state long, and γ ∈ R is a variable denoted as “active inference precision”, on-line computed to self-tune the control-state selection process adaptively Starting from G definition as ELBO (Evidence Lower BOund) of the model evidence, it is possible to lead this expression back to already known distributions by using the position Q(σ|z, u) ≜ P (σ|z), where Q denotes the variational approximation for the generative model. Through-
 easy algebraic manipulations, we can write G as:
G(u) = EQ(z,σ|u) log Q(z|u)
P (z, σ|u)
= EQ(z,σ|u) log Q(z|u)
P (z|σ, u)P (σ|u)
≈ EQ(z,σ|u) log Q(z|u)
Q(z|σ, u)P (σ|u)
= EQ(z,σ|u) log Q(σ|u)
Q(σ|z, u)P (σ|u)
= EQ(z|u)P (σ|z) log Q(σ|u)
P (σ|z)P (σ|u)
(6)
In the expression that comes out from the last derivation step, Q(z|u) is the state estimation carried out by the outcome predicted at the previous time step, and Q(σ|u) is the current outcome belief. In contrast, P (σ|z) is the likelihood defined in Equation (2), and P (σ|u) is a “goal prior”, i.e., a preferred outcome that renders the preference of being conservative and observing the same state in the future.
The probability distribution of the predictive future outcome σ ̃t = {σj
t }j=0,...,q−1 can be encoded as P (σ ̃t|ut) ≡ P (σ ̃t|σ ̃t−1) = QM
j=1 P (σj
t |σj
t−1), with:
P (σj
t |σj
t−1; ω) =
exp
n
−ω δσj
t ,σj
t−1
o
Pq−1
k=0 exp
n
−ω δk,σj
t
o
where ω ∈ R is a precision parameter, and δ·,· denotes the Kronecker delta. Then, in this model, we have assumed that the goal probabilities follow a Boltzmann distribution conditioned by the state of the neighboring birds.
In our simulations, all the temperature parameters β, ρ, and ω used in the distributions were set equal to 1.
A.3 A generative model variant for escaping from predator attacks
Flocks escape predators through a combination of individual birds and collective behaviors that enable faster reactions and collective escape maneuvers. Individual vigilance, dilution and detection [17], the ”fountain effect” [33], and confusion [58] are some of the escape strategies that rely on the benefits of being in a flock, where the probability of survival of any one individual increases when its behavior is configurable within a group response. The choice of escape strategy depends on mult-
iple factors [39], such as the predator’s approachthe closer the predator gets, the more likely the flock is to initiate an escape response—, the reaction time variation—the distance between predators and individuals influences their reaction time—, and the flock size, connected to predation risk of any individuals as highlithed also by the selfish herd theory [34]. Simulating a collective escape strategy entails extending the original flocking model: each bird must be able to recognize danger and-
 modify behavior in safety situations. To this end, we introduce a second factor, named “stress state”, in the hidden state that encodes the presence of danger. Therefore, the hidden state of the extended model becomes zi = zi1 ⊗ zi2, where zi1 coincides with the hidden state of the original model, and zi2 is a binary variable that indicates being (zi2 = 1) or not (zi2 = 0) in danger.
12

Analogously, we account for the observation of stress responses by adding, for each σj1, corresponding to the states of j-th neighbor individual, another factor encoding its stress outcome σj2, so that σ ̃ = σ ̃1 ⊗ σ ̃2, ultimately. At this point, we need to characterize birds’ behavior in dangerous situations. We decided to implement the confusion strategy as an escape strategy. In practice, birds in the flock respond to a predator’s attack by fleeing at random. To do this, we need to modify the-
 likelihood matrix P (σ ̃|zi1, zi2) by extending it to the conditional probabilities of the observations σ ̃ given the hidden state zi2. When zi2 = 0, the extended likelihood matrix is still defined as Equation (2), with σj ≡ σj1, while the threatrelated component σj2 is uninformative (all the elements have the same value and every column sums to one). In contrast, when zi2 = 1, the component P (σj1|zi1, 1) of the likelihood is uninformative; in contrast, the expression of P (σj2|zi1, 1) is analog-
ous to that in Equation (2), taking care to replace the function R(i, j) introduced in Equation (3) with the function R ̄(i, j) that satisfies the following conditions:
R ̄(i, j) = cp, |ηi − ζj| = π ∧ θij = ηi
−R(i, j), o/w (7) .
In a way, zi2 is a context variable that shapes the perception of the states of neighboring birds and affects the choice of action. Actually, in the latter case, the influence is mutual. Indeed, similarly to the case without predators with zti ≡ zti1 (see Equation (4)), there exists a transition probability that
probabilistically attributes a value to the stress state to zti1, every time an action u is executed.
Unlike zti1, the transition model of zti2 is conditioned by some parameters that entail how the stress state evolves. We presumed that the stress state could follow a specific dynamics that, from the initial threat, leads to a state of no danger present before the attack. Specifically, suppose to denote as t ̄ the time at which a generic bird has a predator (or a “stressed” bird) in its neighborhood. In that case, we hypothesize that its hidden state zti ̄2 transitions from 0 to 1, then decays to -
0 with a mean lifetime
constant τ . After that, the individual remains in a quiet state with zti2 = 0 for a refractory period Tr, during which the individual does not respond to new danger situations. The following transition model can represent the entire dynamics over time:
P (zi2
t |ut; t ̄, τ, Tr) =

             
             
00
11
!
, t ̄ < t ≤ t ̄+ τ
11
00
!
, t ̄+ τ < t ≤ t ̄+ τ + Tr
10
01
!
, o/w
(8)
where the columns and rows of the matrices represent the values of zti2−1 and zti2, respectively. It should be noted that Equation (8) is independent of the action ut executed and, instead, depends exclusively on the time. In our simulations, we set τ = 2 and Tr = 10.
A.4 Spectral Identification of Markov Blankets via Fiedler Vector Analysis
We adopted a spectral approach to detect Markov blankets that characterize groups of birds flying in the same direction, forming a macro-agent. By fixing a time window Tw, we can represent the whole flock as an undirected graph F = (V, E), where the nodes are the birds and the edges denote the fact that two birds fly in the same direction, at least once in Tw. We can assume that A is the weighted adjacency matrix of that graph, where Aij is the number of times the nodes i and j are connected (have-
 equal direction). The Markov blanket of a subset of nodes S ⊂ V is defined as the minimal set Mb(S) such that S is conditionally independent of V \ (S ∪ Mb(S)) given Mb(S). For community detection applications, we consider the Markov blanket separating two communities C1 and C2 as the subset of boundary nodes that minimizes information flow between the communities while maintaining graph connectivity. To find these boundary nodes, we determine the algebraic connectivity (also known as Fiedler eig-
envalue) of the graph by computing the second-smallest eigenvalue
13

of the Laplacian matrix of F defined as L = D − A where D = diag(P
j Aij) is the degree matrix. The Fiedler vector y2 [15] is the eigenvector corresponding to the second smallest eigenvalue λ2 of L, such that Ly2 = λ2y2. The Fiedler vector provides a natural embedding of nodes along the principal axis of spectral separation. Nodes are projected onto a one-dimensional space where their positions reflect their structural roles: nodes with |y2(i)| ≈ 1 represent core members of the communities; nodes with |y2(i)| ≈ 0 constitute the Markov blanket between communities.-
 We identify Markov blanket nodes through thresholding:
Mb = {i ∈ V : |y2(i)| ≤ α} (9)
where the threshold α is determined adaptively based on the distribution of y2 values, typically set to capture nodes within the 10th-20th percentile of absolute Fiedler values. The quality of a node is determined by its degree of connection to the communities. For instance, taking as a reference the community C1, a node i is internal if y2(i) > α, external if y2(i) < −α, and either active or sensory if, respectively, its connection degree is higher with C1 or C2.
Acknowledgments
This research received funding from the European Research Council under the Grant Agreement No. 820213 (ThinkAhead), the Italian National Recovery and Resilience Plan (NRRP), M4C2, funded by the European Union – NextGenerationEU (Project IR0000011, CUP B51E22000150006, ‘EBRAINSItaly’; Project PE0000013, ‘FAIR’; Project PE0000006, ‘MNESYS’), and the Ministry of University and Research, PRIN PNRR P20224FESY and PRIN 20229Z7M8N. The GEFORCE Quadro RTX6000 and Titan GPU cards used for this research we-
re donated by the NVIDIA Corporation. We used a Generative AI model to correct typographical errors and edit language for clarity.
Authors’ Contributions
All the authors contributed to the conceptualization and writing of the manuscript.
Competing Interests
We have no competing interests.
References
[1] Amira Abdel-Rahman, Christopher Cameron, Benjamin Jenett, Miana Smith, and Neil Gershenfeld. Self-replicating hierarchical modular robotic swarms. Communications Engineering, 1(1):35, 2022.
[2] Clemens Bechinger, Roberto Di Leonardo, Hartmut Lo ̈wen, Charles Reichhardt, Giorgio Volpe, and Giovanni Volpe. Active particles in complex and crowded environments. Reviews of modern physics, 88(4):045006, 2016.
[3] Lukas Beckenbauer, Johannes-Lucas Loewe, Ge Zheng, and Alexandra Brintrup. Orchestrator: Active inference for multi-agent systems in long-horizon tasks. arXiv preprint arXiv:2509.05651, 2025.
[4] William Bialek, Andrea Cavagna, Irene Giardina, Thierry Mora, Edmondo Silvestri, Massimiliano Viale, and Aleksandra M Walczak. Statistical mechanics for natural flocks of birds. Proceedings of the National Academy of Sciences, 109(13):4786–4791, 2012.
[5] M.E. Bratman. Shared agency: A planning theory of acting together. Oxford University Press, 2013.
[6] Stephen A Butterfill and Corrado Sinigaglia. Towards a mechanistically neutral account of acting jointly: The notion of a collective goal. Mind, 132(525):1–29, 2023.
14

[7] Andrea Cavagna, Alessio Cimarelli, Irene Giardina, Giorgio Parisi, Raffaele Santagati, Fabio Stefanini, and Massimiliano Viale. Scale-free correlations in starling flocks. Proceedings of the National Academy of Sciences, 107(26):11865–11870, 2010.
[8] Swarnajit Chatterjee, Matthieu Mangeat, Raja Paul, and Heiko Rieger. Flocking and reorientation transition in the 4-state active potts model. Europhysics Letters, 130(6):66001, 2020.
[9] Andy Clark and David Chalmers. The extended mind. analysis, 58(1):7–19, 1998.
[10] H. H. Clark. Using Language. Cambridge University Press, Cambridge, 1996.
[11] Roger C Conant and W Ross Ashby. Every good regulator of a system must be a model of that system. International journal of systems science, 1(2):89–97, 1970.
[12] Iain D Couzin, Jens Krause, Nigel R Franks, and Simon A Levin. Effective leadership and decision-making in animal groups on the move. Nature, 433(7025):513–516, 2005.
[13] Gustavo Deco, Giulio Tononi, Melanie Boly, and Morten L Kringelbach. Rethinking segregation and integration: contributions of whole-brain modelling. Nature reviews neuroscience, 16(7):430439, 2015.
[14] Marco Dorigo, Guy Theraulaz, and Vito Trianni. Swarm robotics: Past, present, and future [point of view]. Proceedings of the IEEE, 109(7):1152–1165, 2021.
[15] Miroslav Fiedler. Algebraic connectivity of graphs. Czechoslovak mathematical journal, 23(2):298305, 1973.
[16] Jakob Foerster, Francis Song, Edward Hughes, Neil Burch, Iain Dunning, Shimon Whiteson, Matthew Botvinick, and Michael Bowling. Bayesian action decoder for deep multi-agent reinforcement learning. In International Conference on Machine Learning, pages 1942–1951. PMLR, 2019.
[17] WA Foster and JE Treherne. Evidence for the dilution effect in the selfish herd from fish predation on a marine insect. Nature, 293(5832), 1981.
[18] Walter J Freeman. Characterization of state transitions in spatially distributed, chaotic, nonlinear, dynamical systems in cerebral cortex. Integrative Physiological and Behavioral Science, 29(3):294306, 1994.
[19] K. Friston and C. Frith. A duet for one. Consciousness and Cognition, 36:390–405, 2015.
[20] Karl Friston. Life as we know it. Journal of the Royal Society Interface, 10(86):20130475, 2013.
[21] Karl Friston, Michael Breakspear, and Gustavo Deco. Perception and self-organized instability. Frontiers in computational neuroscience, 6:44, 2012.
[22] Karl Friston, Lancelot Da Costa, Dalton AR Sakthivadivel, Conor Heins, Grigorios A Pavliotis, Maxwell Ramstead, and Thomas Parr. Path integrals, particular kinds, and strange things. Physics of Life Reviews, 47:35–62, 2023.
[23] Karl Friston, Michael Levin, Biswa Sengupta, and Giovanni Pezzulo. Knowing one’s place: a freeenergy approach to pattern regulation. Journal of the Royal Society Interface, 12(105):20141383, 2015.
[24] Karl J Friston, Thomas Parr, Conor Heins, Axel Constant, Daniel Friedman, Takuya Isomura, Chris Fields, Tim Verbelen, Maxwell Ramstead, John Clippinger, et al. Federated inference and belief sharing. Neuroscience & Biobehavioral Reviews, 156:105500, 2024.
[25] Chris Frith and Uta Frith. Theory of mind. Current biology, 15(17):R644–R645, 2005.
[26] Armin Fuchs, JA Scott Kelso, and Hermann Haken. Phase transitions in the human brain: Spatial mode dynamics. International Journal of Bifurcation and Chaos, 2(04):917–939, 1992.
15

[27] Vittorio Gallese, Christian Keysers, and Giacomo Rizzolatti. A unifying view of the basis of social cognition. Trends in cognitive sciences, 8(9):396–403, 2004.
[28] Mattia Gallotti and Chris D Frith. Social cognition in the we-mode. Trends in cognitive sciences, 17(4):160–165, 2013.
[29] Daniela Gandolfi, Francesco M Puglisi, Giulia M Boiani, Giuseppe Pagnoni, Karl J Friston, Egidio D’Angelo, and Jonathan Mapelli. Emergence of associative learning in a neuromorphic inference network. Journal of Neural Engineering, 19(3):036022, 2022.
[30] Daniela Gandolfi, Mirco Tincani, Giulia Maria Boiani, Lorenzo Benatti, Tommaso Zanotti, Giovanni Pezzulo, Giuseppe Pagnoni, Francesco Maria Puglisi, and Jonathan Mapelli. A network of bayesian agents for reward prediction and noise tolerance. iScience, 2025.
[31] Margaret Gilbert. On social facts. Princeton University Press, 2020.
[32] Luis G ́omez-Nava, Robert T Lange, Pascal P Klamser, Juliane Lukas, Lenin Arias-Rodriguez, David Bierbach, Jens Krause, Henning Sprekeler, and Pawel Romanczuk. Fish shoals resemble a stochastic excitable system driven by environmental perturbations. Nature Physics, 19(5):663669, 2023.
[33] SJ Hall, CS Wardle, and DN MacLennan. Predator evasion in a fish school: test of a model for the fountain effect. Marine biology, 91(1):143–148, 1986.
[34] William D Hamilton. Geometry for the selfish herd. Journal of theoretical Biology, 31(2):295–311, 1971.
[35] U. Hasson and C.D. Frith. Mirroring and beyond: coupled dynamics as a generalized framework for modelling social interactions. Philosophical Transactions of the Royal Society B, 373:20170301, 2016.
[36] U. Hasson, A. A. Ghazanfar, B. Galantucci, S. Garrod, and C. Keysers. Brain-to-brain coupling: A mechanism for creating and sharing a social world. Trends in Cognitive Sciences, 16:114–121, 2012.
[37] Conor Heins, Beren Millidge, Lancelot Da Costa, Richard P Mann, Karl J Friston, and Iain D Couzin. Collective behavior from surprise minimization. Proceedings of the National Academy of Sciences, 121(17):e2320239121, 2024.
[38] Janina Hesse and Thilo Gross. Self-organized criticality as a fundamental property of neural systems. Frontiers in systems neuroscience, 8:166, 2014.
[39] Geoff M Hilton, Will Cresswell, and Graeme D Ruxton. Intraflock variation in the speed of escape-flight response on attack by an avian predator. Behavioral Ecology, 10(4):391–395, 1999.
[40] Erik P Hoel, Larissa Albantakis, and Giulio Tononi. Quantifying causal emergence shows that macro can beat micro. Proceedings of the National Academy of Sciences, 110(49):19790–19795, 2013.
[41] Douglas R Hofstadter. G ̈odel, Escher, Bach: an eternal golden braid. Basic books, 1999.
[42] Bert H ̈olldobler and EO Wilson. The superorganism: the beauty, elegance, and strangeness of insect societies, 1st edn new york. NY: WW Norton.[Google Scholar], 2009.
[43] Ernst Ising. Beitrag zur theorie des ferromagnetismus. Zeitschrift fu ̈r Physik, 31:253–258, 1925.
[44] P.E. Keller, G. Novembre, and M.J. Hove. Rhythm in joint action: psychological and neurophysiological mechanisms for real-time interpersonal coordination. Philosophical Transactions of the Royal Society B, 371(1693):20150366, 2016.
[45] James M Kilner, Karl J Friston, and Chris D Frith. The mirror-neuron system: a bayesian perspective. Neuroreport, 18(6):619–623, 2007.
16

[46] Michael Kirchhoff, Thomas Parr, Ensor Palacios, Karl Friston, and Julian Kiverstein. The markov blankets of life: autonomy, active inference and the free energy principle. Journal of The royal society interface, 15(138):20170792, 2018.
[47] J Krause and GD Ruxton. Living in groups. Oxford: Oxford Univ. Press, 2002.
[48] Georgiy Levchuk, Krishna Pattipati, Daniel Serfaty, Adam Fouse, and Robert McCormack. Active inference in multiagent systems: context-driven collaboration and decentralized purpose-driven team adaptation. In Artificial intelligence for the internet of everything, pages 67–85. Elsevier, 2019.
[49] Michael Levin. The computational boundary of a “self”: developmental bioelectricity drives multicellularity and scale-free cognition. Frontiers in psychology, 10:2688, 2019.
[50] Michael Levin. Bioelectric signaling: Reprogrammable circuits underlying embryogenesis, regeneration, and cancer. Cell, 184(8):1971–1989, 2021.
[51] Michael Levin. Bioelectrical approaches to cancer as a problem of the scaling of the cellular self. Progress in biophysics and molecular biology, 165:102–113, 2021.
[52] Michael Levin, Giovanni Pezzulo, and Joshua M Finkelstein. Endogenous bioelectric signaling networks: exploiting voltage gradients for control of growth and form. Annual review of biomedical engineering, 19(1):353–387, 2017.
[53] Domenico Maisto, Francesco Donnarumma, and Giovanni Pezzulo. Interactive inference: A multiagent model of cooperative joint actions. IEEE Transactions on Systems, Man, and Cybernetics, 54(2):704–715, 2023.
[54] Santosh Manicka and Michael Levin. Field-mediated bioelectric basis of morphogenetic prepatterning. Cell Reports Physical Science, 6(10), 2025.
[55] Kerry L Marsh, Michael J Richardson, and Richard C Schmidt. Social connection through joint action and interpersonal coordination. Topics in cognitive science, 1(2):320–339, 2009.
[56] Patrick McMillen and Michael Levin. Collective intelligence: A unifying concept for integrating biology across scales and substrates. Communications Biology, 7(1):378, 2024.
[57] Marvin Minsky. Society of mind. Simon and Schuster, 1986.
[58] SRStJ Neill and Jonathan M Cullen. Experiments on whether schooling by their prey affects the hunting behaviour of cephalopods and fish predators. Journal of Zoology, 172(4):549–569, 1974.
[59] Elisabeth Pacherie. How does it feel to act together? Phenomenology and the cognitive sciences, 13(1):25–46, 2014.
[60] Ensor Rafael Palacios, Takuya Isomura, Thomas Parr, and Karl Friston. The emergence of synchrony in networks of mutually inferring neurons. Scientific reports, 9(1):6412, 2019.
[61] T. Parr, G. Pezzulo, and K.J. Friston. Active Inference: The Free Energy Principle in Mind, Brain, and Behavior. MIT Press, Cambridge, MA, USA, 2022.
[62] Thomas Parr, Lancelot Da Costa, and Karl Friston. Markov blankets, information geometry and stochastic thermodynamics. Philosophical Transactions of the Royal Society A, 378(2164):20190159, 2020.
[63] Judea Pearl. Probabilistic reasoning in intelligent systems: networks of plausible inference. Elsevier, 2014.
[64] G. Pezzulo, F. Donnarumma, H. Dindo, A. D’Ausilio, I. Konvalinka, and C. Castelfranchi. The body talks: Sensorimotor communication and its brain and kinematic signatures. Physics of Life Reviews, 15:1–21, 2019.
17

[65] Giovanni Pezzulo, Pierpaolo Iodice, Francesco Donnarumma, Haris Dindo, and Gu ̈nther Knoblich. Avoiding accidents at the champagne reception: A study of joint lifting and balancing. Psychological science, 28(3):338–345, 2017.
[66] Giovanni Pezzulo, Gu ̈nther Knoblich, Domenico Maisto, Francesco Donnarumma, Elisabeth Pacherie, and Uri Hasson. A predictive processing framework for joint action and communication. PsyArXiv Preprints, 2025.
[67] Giovanni Pezzulo and Michael Levin. Top-down models in biology: explanation and control of complex living systems above the molecular level. Journal of The Royal Society Interface, 13(124):20160555, 2016.
[68] Giovanni Pezzulo, Thomas Parr, and Karl J Friston. Shared worlds, shared minds: Strategies to develop physically and socially embedded ai. EMBO reports, 26(17):4197–4202, 2025.
[69] L ́eo Pio-Lopez, Giovanni Pezzulo, and Michael Levin. Scale-free niche construction: expanding agent-microenvironment co-development to unconventional substrates. OSF Preprints, 2025.
[70] Craig W Reynolds. Flocks, herds and schools: A distributed behavioral model. In Proceedings of the 14th annual conference on Computer graphics and interactive techniques, pages 25–34, 1987.
[71] Giacomo Rizzolatti and Laila Craighero. The mirror-neuron system. Annu. Rev. Neurosci., 27(1):169–192, 2004.
[72] Fernando E Rosas, Pedro AM Mediano, Henrik J Jensen, Anil K Seth, Adam B Barrett, Robin L Carhart-Harris, and Daniel Bor. Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data. PLoS computational biology, 16(12):e1008289, 2020.
[73] Jaime Ruiz-Serra, Patrick Sweeney, and Michael S Harr ́e. Factorised active inference for strategic multi-agent interactions. arXiv preprint arXiv:2411.07362, 2024.
[74] R Keith Sawyer. Social emergence: Societies as complex systems. Cambridge University Press, 2005.
[75] Natalie Sebanz, Harold Bekkering, and Gu ̈nther Knoblich. Joint action: bodies and minds moving together. Trends in cognitive sciences, 10(2):70–76, 2006.
[76] Natalie Sebanz and Gu ̈nther Knoblich. Progress in joint-action research. Current Directions in Psychological Science, 30(2):138–143, 2021.
[77] Alexandre P Solon and Julien Tailleur. Revisiting the flocking transition using active spins. Physical review letters, 111(7):078101, 2013.
[78] Vivek H Sridhar, Liang Li, Dan Gorbonos, M ́at ́e Nagy, Bianca R Schell, Timothy Sorochkin, Nir S Gov, and Iain D Couzin. The geometry of decision-making in individuals and collectives. Proceedings of the National Academy of Sciences, 118(50):e2102157118, 2021.
[79] Robert Sugden. The logic of team reasoning. Philosophical explorations, 6(3):165–181, 2003.
[80] David JT Sumpter. Collective animal behavior. In Collective animal behavior. Princeton University Press, 2010.
[81] Ning Tang, Siyi Gong, Minglu Zhao, Chenya Gu, Jifan Zhou, Mowei Shen, and Tao Gao. Exploring an imagined “we” in human collective hunting: Joint commitment within shared intentionality. In Proceedings of the annual meeting of the cognitive science society, volume 44, 2022.
[82] Michael Tomasello, Malinda Carpenter, Josep Call, Tanya Behne, and Henrike Moll. Understanding and sharing intentions: The origins of cultural cognition. Behavioral and brain sciences, 28(5):675–691, 2005.
[83] Paul L Williams and Randall D Beer. Nonnegative decomposition of multivariate information. arXiv preprint arXiv:1004.2515, 2010.
18

[84] Daniel M Wolpert, Kenji Doya, and Mitsuo Kawato. A unifying computational framework for motor control and social interaction. Phil. Trans. R. Soc. Lond., B, 358(1431):593–602, 2003.
[85] Fa-Yueh Wu. The potts model. Reviews of modern physics, 54(1):235, 1982.
19

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:54.302Z
- **Text Length:** 67347 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 19 of 19
