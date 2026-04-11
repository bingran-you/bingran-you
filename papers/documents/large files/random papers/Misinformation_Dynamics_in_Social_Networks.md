# PDF Document: Murugan - 2025 - Misinformation Dynamics in Social Networks.pdf

**File Path:** Murugan - 2025 - Misinformation Dynamics in Social Networks.pdf

**Processed Date:** 2026-02-10T18:15:38.835Z

**File Size:** 1887.12 KB

**Total Pages:** 5

**Extracted Pages:** 5

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3160

**Title:** Misinformation Dynamics in Social Networks

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Misinformation Dynamics in Social Networks
Jeff Murugan1
1The Laboratory for Quantum Gravity & Strings and, Department of Mathematics and Applied Mathematics, Univeristy of Cape Town,Private Bag, Rondebosch 7700, South Africa
Information transmitted across modern communication platforms is degraded not only by intentional manipulation (disinformation) but also by intrinsic cognitive decay and topology-dependent social averaging (misinformation). We develop a continuous-fidelity field theory on multiplex networks with distinct layers representing private chats, group interactions, and broadcast channels. Our analytic solutions reveal three universal mechanisms controlling information quality: (i) groupthink blending, wh-
ere dense group coupling drives fidelity to the initial group mean; (ii) bridge-node bottlenecks, where cross-community flow produces irreversible dilution; and (iii) a network-wide fidelity landscape set by a competition between broadcast truth-injection and structural degradation pathways. These results demonstrate that connectivity can reduce information integrity and establish quantitative control strategies to enhance fidelity in large-scale communication systems.
INTRODUCTION
There is an old adage that says: “A lie can travel half way around the world while the truth is putting on its shoes”, meaning that a lie can spread quickly and widely, while the truth takes more time to catch up and be believed. From public health to political discourse, the integrity of information is a cornerstone of modern society. Yet, a defining feature of our digital age is the rapid degradation of information fidelity as it propagates through social networks. While traditional models of in-
formation spread often draw an analogy to biological epidemics [1, 2], this framework captures reach but neglects a critical dimension: the progressive distortion and loss of nuance that transforms accurate information into misinformation. Understanding the dynamics of information decay—not merely its spread—is therefore a fundamental challenge with profound implications for the health of our digital ecosystems.
The prevailing paradigm in network science models information cascades using compartmental models such as the susceptible-infectious-recovered (SIR) models made famous during the Covid-19 pandemic [3, 4]. This approach, while powerful, is insufficient for describing how complex information evolves. Recent work has begun to explore social influence and opinion dynamics [5, 6], but often treats these as shifts along a continuous spectrum, without explicitly linking the rate of distortion to the unde-
rlying multi-layered topology of human interaction. Real-world social platforms are not singlelayer networks; they are multiplex structures comprising distinct communication channels—such as private chats, group forums, and broadcast channels—each with characteristic speed, trust, and social pressure. A unified theory explaining how this layered topology governs the very fidelity of information remains an open problem.
In this Letter, we introduce a dynamical model of in
formation fidelity on a multiplex network to bridge this gap. We define a fidelity field Fi(t) ∈ [0, 1] for each node i, representing the accuracy of its held information. The dynamics are governed by layer-specific mechanisms:
• Private layers facilitate slow, high-fidelity diffusion via pairwise contacts,
• Group layers induce rapid but often destructive consensus averaging, leading to a groupthinkdriven loss of fidelity, and
• Broadcast layers provide one-way fidelity injection from authoritative sources.
We will demonstrate that the interplay between these layers results in a universal degradation physics. Analytically, we derive the existence of a sharp fidelity drop upon information entry into group structures and identify a critical group size for distortion. We show that bridge nodes, which interconnect groups, act as fidelity bottlenecks whose integrative capacity controls cross-network contamination. Finally, we present a closed-form expression for the network’s steady-state fidelity landsca-
pe, revealing it is a function of topological parameters rather than initial conditions alone. Our work establishes a quantitative link between network architecture and information integrity, offering a new lens through which to design more robust communication systems.
MODEL AND FRAMEWORK
To quantify the degradation and transmission of information, we move beyond binary-state contagion models and introduce a continuous fidelity field Fi(t) ∈ [0, 1], defined on each node i of a multiplex network. Fi = 1 denotes perfect preservation of the original message, while Fi = 0 corresponds to complete distortion. The time-evolution of Fi reflects the interplay between intrinsic cognitive decay and the layer-specific coupling between users. We
arXiv:2511.18733v1 [physics.soc-ph] 24 Nov 2025

2
consider a multiplex network composed of three communication layers (see Fig.1): a private layer L1, representing sparse one-to-one exchanges (undirected edges); a group layer L2, consisting of dense, all-to-all cliques that mimic group chats; and a broadcast layer L3, a directed graph from broadcaster nodes to their followers.
FIG. 1. Multiplex topology of a WhatsApp-like network. Nodes represent users and edges represent three channel types: private 1-to-1 chats (thin undirected edges), group cliques (dense patches), and directed broadcast connections (arrows). Black-rimmed nodes are broadcasters. This structure defines the heterogeneous coupling operators in Eq. (1).
We conjecture that the evolution of information fidelity is governed by the dynamical system
dFi
dt = −δFi − βF 2
i+
3
X
l=1
Γl D(l)
i [{Fj}], (1)
where the first two terms describe intrinsic degradation and the summation encodes social diffusion across layers [7]. The decay terms have a clear physical meaning [8]:
• The linear forgetting term −δFi is the simplest possible fidelity-loss process consistent with a finite memory lifetime; a user gradually forgets details of the information they hold. In the absence of social reinforcement then, fidelity decays exponentially as Fi(t) = Fi(0)e−δt, with decay rate δ, analogous to the relaxation of a memory state in cognitive psychology or a signal mode in a noisy physical channel.
• However, forgetting is not neutral with respect to the richness of the message. Detailed, nuanced content is lost disproportionately quickly, consistent with the fact that compression leads to irrecoverable loss of information content. This is the motivation behind the nonlinear “complexity decay” term −βF 2
i , which ensures that fidelity vanishes
more rapidly when the message contains more finegrained structure.
Each operator D(l)
i in the sum implements a distinct mode of social coupling with strength Γl, Specifically,
1. Private-chat diffusion (l = 1): D(1)
i=
P
j∈N1(i)(Fj − Fi), where N1(i) are private-layer neighbors. This term describes slow, high-fidelity pairwise refinement through trusted interactions,
2. Group-consensus diffusion (l = 2): D(2)
i=
P
g∈G(i)(F ̄g − Fi), where F ̄g = 1
|g|
P
j∈g Fj . Here G(i) lists all the groups containing node i. This operator drives rapid alignment to the local group mean, capturing the reductive “groupthink” dynamics of collective discussions.
3. Broadcast injection (l = 3): D(3)
i =P
b∈B(i)(Fb −
Fi), with B(i) the set of broadcasters followed by the user at node i. This term represents one-way fidelity inflow from authoritative sources, with no reciprocal feedback.
The intrinsic coefficients δ, β control the internal, content-dependent decay, while (D1, D2, D3) or equivalently the couplings (Γ1, Γ2, Γ3) quantify the topologydependent spreading rates in the three communication channels. The non-linear consensus operator D(2) is a new ingredient. It provides a minimal mathematical realization of “groupthink”, a mechanism that is, as far as we are aware, absent from standard epidemic or opinion-dynamics models. Together, these define a compact field theory of i-
nformation fidelity that couples memory loss, content complexity, and multi-layer social dynamics. This framework permits analytic derivation of macroscopic degradation laws and critical thresholds directly from the microscopic interaction topology.
FIDELITY DYNAMICS
The dynamics of Eq. (1) admit several analytical reductions that expose universal mechanisms of information degradation. Three representative results illustrate the essential physics; a groupthink-induced fidelity drop, a bridge-node bottleneck, and an emergence of a networkwide fidelity landscape. The densest layer, composed of group cliques, is the principal site of distortion. In a group g of size m, each member obeys
F ̇i = D2
X
j∈g, j̸=i
(Fj − Fi) − δFi , (2)
with average fidelity F ̄g = m−1 P
j Fj. Equation (2) can be recast as
F ̇i = mD2(F ̄g − Fi) − δFi . (3)

3
Summing over all nodes yields F ̄ ̇g = −δF ̄g, demonstrating that social coupling cancels exactly in the group average. The mean fidelity decays only through intrinsic forgetting. The coupling D2 only enforces rapid convergence of individuals toward this decaying mean. In the strong-coupling regime (D2 ≫ δ), Fi(t) → F ̄g(0)e−δt + O(e−mD2t). The group acts as an information blender in the sense that the final fidelity of each member is fixed by the initial group average. A single low-fidelity parti-
cipant (Fj(0) ≪ 1) can irreversibly contaminate the collective state giving a quantitative expression of groupthink.
FIG. 2. Characteristic fidelity decay curve. Rapid initial drop reflects fast group-blending dynamics, governed by mD2; slow recovery arises from broadcast-driven reinforcement D3.
Nodes connecting multiple groups dominate cross-layer information flow. The fidelity of a bridge node B attached to k groups evolves as
F ̇B =
k
X
j=1
mj D2(F ̄gj − FB) − δFB, (4)
where mj and F ̄gj are the size and mean fidelity of group gj. Assuming similar group sizes (mj ≃ m), the steady state satisfies F ∗
B(kmD2 + δ) = mD2
Pk
j=1 F ̄gj ,
or equivalently F ∗
B = (D2
Pk
j=1 F ̄gj )/(kD2 + δ/m). F ∗
B
is a weighted average of the source fidelities, but the denominator term kD2 introduces an integrative load. As a node bridges more groups, its steady-state fidelity decreases, forming a bottleneck that propagates distortion between communities. Even a single low-fidelity source reduces the fidelity of all connected groups—an unavoidable topological constraint on information preservation.
A mean-field approximation reveals the macroscopic steady state. Let ⟨F ⟩ denote the population-averaged fidelity and pb the fraction of nodes connected to highfidelity broadcasters (F ≈ 1). The broadcast layer contributes a fidelity source term D3pb(1 − ⟨F ⟩), while private interactions homogenize fluctuations without altering the mean. Group and bridge interactions supply
a degradation sink proportional to ⟨kbridge⟩f (⟨m⟩)⟨F ⟩, where f (⟨m⟩) increases with group size. Balancing gain and loss yields
D3pb(1 − ⟨F ⟩) − δ⟨F ⟩ − ξ⟨kbridge⟩f (⟨m⟩)⟨F ⟩ = 0, (5)
where ξ is the effective distortion coefficient per bridge node that quantifies the cross-group contamination efficiency of misinformation. Equation (5) has the steadystate solution
⟨F ⟩ = D3pb
D3pb + δ + ξ⟨kbridge⟩f (⟨m⟩) . (6)
Eq. (6) quantifies a competition between a fidelity source (broadcast truth injection) and two classes of fidelity sinks: intrinsic forgetting (δ) and topology-induced degradation (ξ⟨kbridge⟩f (⟨m⟩)). Hence the overall information quality depends not on connectivity per se, but on the balance between corrective and contaminative pathways—too many bridges or large groups render the network intrinsically “leaky”. The hierarchy of couplings produces three distinct dynamical regimes:
τgrp ∼ (mD2)−1, τbdc ∼ D−1
3 , τpvt ∼ L2
D1⟨k1⟩ . (7)
Group equilibration is rapid, broadcast influence operates on intermediate timescales, and private correction is slow and diffusive. This separation naturally explains the characteristic fidelity-decay curve: a fast initial drop due to group blending, followed by a slow recovery driven by pairwise refinement.
FIG. 3. Steady-state average fidelity ⟨F ∗⟩ is shown as a function of broadcast coverage pb, average group size ⟨m⟩, and average bridge connectivity ⟨kbridge⟩. Increased intergroup connectivity and large group size drive fidelity loss.
The competition between the characteristic timescales in Eq. (7) gives rise to distinct structural regimes of information fidelity, which are mapped in the (⟨m⟩, D3)

4
plane in Fig. 4. In the red region, group consensus dynamics act faster than both broadcast reinforcement and private correction (τg < τb, τg < τp), driving a rapid collapse of fidelity toward the initial group average—a topology-induced “groupthink” phase in which distortion becomes self-amplifying. The dashed boundary (τb = τp) marks the operational stability threshold: only above this line can authoritative broadcast signals intervene on a timescale short enough to prevent collapse. The solid l-
ine (τg = τb) is subdominant in this regime, explaining why increased broadcast strength must simultaneously overcome both intra-group mixing and limited private connectivity to restore fidelity. Thus, the phase diagram reveals a structural law: platforms with large groups and insufficient broadcast reach inherently favor misinformation proliferation, whereas stronger broadcast coupling stabilizes information fidelity against topological degradation.
FIG. 4. Structural phase diagram showing regimes of information fidelity as a function of average group size ⟨m⟩ and broadcast strength D3. In the red region, rapid group averaging overwhelms broadcast and private correction (τg < τb, τg < τp), leading to a groupthink-driven fidelity collapse. In the blue region, broadcast reinforcement arrives soon enough to prevent collapse. The dashed boundary (τb = τp) defines the operational stability threshold from Eq. (7).
DISCUSSION AND IMPLICATIONS
The analysis presented above establishes that information quality in multiplex social networks is governed by a competition between distortion and reinforcement, which emerges from the interplay of intrinsic cognitive decay and heterogeneous social coupling. Three universal mechanisms arise. First, dense group interactions lead to groupthink blending, where rapid equilibration drives individual fidelity to the initial group mean regardless of coupling strength. This mathematically explains a famil-
iar sociological effect: collective deliberation can suppress individual accuracy when even a single
participant introduces noise. Second, bridge nodes individuals embedded in multiple groups — generate structural bottlenecks where information from distinct communities is mixed and diluted. These nodes serve as unavoidable entropy sources: greater inter-group connectivity increases the network’s vulnerability to degradation, even when all but one community holds accurate beliefs. Third, a global fidelity landscape emerges from a balance between (i) truth-injection through directed broadcast chann-
els and (ii) topology-induced sinks driven by group and bridging structure. This yields a closed-form expression for the population-level fidelity (Eq. (6)) that isolates the core control parameters: fraction of nodes receiving high-fidelity input, average group size, and bridge connectivity.
These mechanisms have concrete implications for the design and governance of digital communication systems. They demonstrate that network connectivity is not intrinsically beneficial for information integrity. Rather, connectivity that disproportionately amplifies group blending and bridge mixing can push the system into a low-fidelity phase even when intrinsic forgetting is weak and broadcast accuracy is high. Conversely, distributed access to high-fidelity broadcast channels increases the source-
 term D3pb, raising the global fixed point ⟨F ∗⟩.
Our framework highlights a fundamental vulnerability of WhatsApp-like communication platforms: private moderation and fact-checking arrive on the slowest timescale (τpvt), while distortion spreads rapidly through group interactions (τgrp). This inherent mismatch in timescales makes reactive correction insufficient, pointing instead toward structural interventions such as controlling group size, reducing excessive bridging, or increasing the direct reach of trusted broadcast channels. Importantly, -
our results are parameter-robust and do not depend on particular cognitive or behavioral assumptions. Consequently, we conjecture that any system in which information fidelity is locally averaged in clusters and globally transported by bridge nodes will exhibit similar macroscopic degradation patterns. Thus, the physics derived here constitutes a universal theory of information fidelity in social communication networks, with immediate relevance to misinformation mitigation, platform architecture, -
and public policy.
ACKNOWLEDGEMENTS
We would like to thank Mughtar Parker for a discussion that inspired this work, Georgie Roussos whose unpublished project on vaccine distribution in layered networks inspired our mathematical model, and especially Amanda Weltman for clarifying aspects of the network structure and a critical reading of the manuscript.

5
[1] R. Pastor-Satorras, C. Castellano, P. Van Mieghem, and A. Vespignani, Epidemic processes in complex networks, Rev. Mod. Phys. 87, 925 (2015). [2] F. P. Santos, Y. Lelkes, and S. A. Levin, Link recommendation algorithms and dynamics of polarization in online social networks, Proceedings of the National Academy of Sciences 118, e2102141118 (2021), https://www.pnas.org/doi/pdf/10.1073/pnas.2102141118. [3] C. Castellano, S. Fortunato, and V. Loreto, Statistical physics of social dynamics, Rev. Mod-
. Phys. 81, 591 (2009). [4] M. Porter and J. Gleeson, Dynamical Systems on Networks: A Tutorial , Frontiers in Applied Dynamical Sys
tems: Reviews and Tutorials (Springer International Publishing, 2016). [5] T. Zagenczyk and E. Powell, Social networks as structural and relational antecedents of identification and citizenship, Academy of Management Proceedings 2019, 11706 (2019). [6] E. Cozzo, R. A. Ban ̃os, S. Meloni, and Y. Moreno, Contact-based social contagion in multiplex networks, Phys. Rev. E 88, 050801 (2013). [7] S. Go ́mez, A. Dı ́az-Guilera, J. Go ́mez-Garden ̃es, C. J. Pe ́rez-Vicente, Y. Moreno, and A. Arenas, Diffu-
sion dynamics on multiplex networks, Phys. Rev. Lett. 110, 028701 (2013). [8] C. E. Shannon, A mathematical theory of communication, The Bell System Technical Journal 27, 379 (1948).

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:38.835Z
- **Text Length:** 18655 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 5 of 5
