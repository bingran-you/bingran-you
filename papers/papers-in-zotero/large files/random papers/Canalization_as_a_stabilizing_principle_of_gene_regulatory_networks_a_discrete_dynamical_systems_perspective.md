# PDF Document: Kadelka - 2025 - Canalization as a stabilizing principle of gene regulatory networks a discrete dynamical systems pe.pdf

**File Path:** Kadelka - 2025 - Canalization as a stabilizing principle of gene regulatory networks a discrete dynamical systems pe.pdf

**Processed Date:** 2026-02-10T18:16:19.426Z

**File Size:** 3239.25 KB

**Total Pages:** 23

**Extracted Pages:** 23

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3686

**Title:** Canalization as a stabilizing principle of gene regulatory networks: a discrete dynamical systems perspective

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Canalization as a stabilizing principle of gene
regulatory networks: a discrete dynamical systems
perspective
Claus Kadelka1*
1*Department of Mathematics, Iowa State University, 411 Morrill Rd, Ames, 50011, IA, United States.
Corresponding author(s). E-mail(s): ckadelka@iastate.edu;
Abstract
Gene regulatory networks exhibit remarkable stability, maintaining functional phenotypes despite genetic and environmental perturbations. Discrete dynamical models, such as Boolean networks, provide systems biologists with a tractable framework to explore the mathematical underpinnings of this robustness. A key mechanism conferring stability is canalization. This perspective synthesizes historical insights, formal definitions of canalization in discrete dynamical models, quantitative measures of s-
tability, illustrative applications, and emerging challenges at the interface of theory and experiment.
Keywords: gene regulatory networks, Boolean networks, canalization, stability, genotype-phenotype link, network inference
1 Introduction
Gene regulatory networks (GRNs) orchestrate cellular behavior by determining which genes are expressed, when, and to what extent. Through cascades of regulatory interaction – where transcription factors bind promoters, miRNAs silence transcripts, and proteins modulate each other’s activity – GRNs translate genomic information into functional phenotypes. The key step of gene regulation is an inherently stochastic process [1], and the numbers of intra- and extra-cellular regulatory signals fluctuate-
 widely [2]. Thus, understanding how GRNs perform particular functions and do so
1
arXiv:2511.17905v1 [q-bio.MN] 22 Nov 2025

consistently in the face of ubiquitous variability constitutes a fundamental biological question. This robustness is puzzling: if gene expression is stochastic and cellular signals fluctuate, how do GRNs reliably produce consistent phenotypes? The answer lies in their architecture. Numerous putative “design principles” have been proposed, most of which describe how certain aspects of GRNs differ from random networks [39]. However, a comprehensive understanding of the mechanistic principles underl-
ying the structure of GRNs and how they collectively contribute to robust phenotypes is still lacking. Among these principles, canalization stands out as both historically foundational and mathematically tractable, making it an ideal lens through which to understand GRN robustness. In this perspective, I synthesize recent mathematical advances that quantify canalization and highlight open challenges in connecting these measures to biological function. The concept of canalization in gene regulation-
 dates back to the work of geneticist Conrad Waddington in the 1940s [10], who proposed it as a potential explanation for how embryonic development can reliably produce predictable phenotypes despite substantial environmental variation and frequent genetic mutations. More broadly, canalization describes the capacity of a gene regulatory program to maintain stability in the face of diverse perturbations. By buffering against the deleterious effects of mutations, canalization permits the accumulatio-
n of genotypic variation without corresponding phenotypic change [11]. When extreme perturbations exceed this buffering capacity, cryptic genetic variation can be rapidly expressed, enabling phenotypic innovation. This mechanism – where accumulated mutations remain phenotypically silent until environmental stress or genetic perturbation releases them – may explain evolutionary transitions between fitness peaks without requiring intermediate forms of reduced fitness. Canalization is thus a key conc-
ept in evolutionary biology, forming a cornerstone of natural selection and the emergence of new phenotypes [12, 13]. It is also crucial for understanding developmental and physiological processes that shape disease outcomes in animals and influence crop yields in plants. For instance, transitions to new phenotypes have been implicated as one of the driving forces behind tumorigenesis [14, 15]. To translate these qualitative ideas about canalization and robustness into a quantitative setting, it i-
s necessary to adopt a mathematical framework that captures the logic and dynamics of gene regulation. Discrete dynamical systems, most prominently Boolean networks, provide the ideal framework for studying canalization because they explicitly represent the logical structure of regulatory interactions, the very substrate upon which canalization operates.
2 Discrete dynamical gene regulatory network models
GRNs can be modeled as discrete dynamical systems, e.g., Boolean networks (originally introduced by Kauffman [16] and recently reviewed by Schwab et al. [17]) or generalized multistate versions. Discrete models are intuitive, and simple to describe and analyze. They have therefore become an increasingly popular modeling framework for the study of GRNs. More than 150 discrete GRN models underlying a multitude of
2

1,0
0,1 1,1
0,0
x1(t) x2(t) x1(t+1) x2(t+1)
00 0 0
01 1 0
10 0 1
11 1 1
x1
x2 1,0
0,1 1,1
0,0
A BC D
Fig. 1 Example of a 2-node Boolean network F (x1, x2) = (x2, x1). (A) Wiring diagram indicating that x1 and x2 regulate each other. (B) Boolean update rules in truth table format, containing one row for each state of the network. (C) Deterministic synchronous state transition graph, containing three attractors: two steady states and a 2-cycle. (D) Stochastic asynchronous state transition graph, containing the same two steady states but no cyclic attractor.
processes in single-celled organisms, plants, and animals have been generated, >80% since 2012 [8]. Discrete models yield qualitative results even when quantitative kinetic parameters are unavailable, as is frequently the case in biology. While continuous differential equation models harbor the potential for quantitative predictions, their high parameter count makes them difficult to fit reliably to sparse data [18, 19]. However, an accurate formulation of a discrete model still requires substanti-
al experimental data [20, 21]. For this reason, almost all discrete GRN models published thus far focus on specific biological modules containing only those genes and proteins directly involved in the process of interest [22]. Mathematically, a discrete dynamical system in the variables x1, . . . , xn is a function
F = (f1, . . . , fn) : Fn → Fn,
where the Cartesian product Fn = F × · · · × F defines the state space, while each fi : Fn → F specifies an update function or update rule that describes the future value of xi given the present value of all variables, i.e., fi captures the underlying regulatory logic. The set F contains all possible expression values of the variables. If |F| = 2, e.g., F = {0, 1}, then F is a Boolean network, with 0 and 1 corresponding to an unexpressed and expressed gene or gene product, respectively. See Fig. 1-
A for an example. Two directed graphs can be associated with F :
1. The wiring diagram (or dependency graph) contains one node for each variable xi, and has a directed edge from xi to xj if the update rule fj depends on xi (Fig. 1B). 2. The state transition graph contains as nodes all possible states x = (x1, . . . , xn) ∈ Fn. Under a synchronous updating scheme, all nodes are updated simultaneously and the state transition graph is deterministic with a directed edge from x to y if F (x) = y (Fig. 1C). Under asynchronous updating schemes, a single node is typic-
ally updated at a time, enabling the implementation of different time scales and yielding a non-deterministic state transition graph (Fig. 1D) [23].
Due to the finite size of the state space, any state eventually transitions to an attractor. Under synchronous update, the attractor is either a steady state (also known as fixed point) or a limit cycle, while under asynchronous update, it is either a steady state or a trap space [24]. Biologically, attractors represent self-maintaining regulatory
3

states that cells settle into and stably occupy. In development, different attractors correspond to differentiated cell types, each characterized by a stable gene expression profile [25]. In disease models, attractors can represent healthy versus pathological phenotypes. For instance, a Boolean GRN model of large granular lymphocyte leukemia exhibits two attractors: a “healthy” phenotype corresponding to cell death of activated T cells and a “diseased” phenotype corresponding to abnormal survival-
 [26, 27]. An analysis of the attractor landscape (i.e., which states transition to which attractors) is thus key to understanding the dynamics of GRNs [28, 29], as well as for active control of the dynamics through drugs targeting specific gene interactions [30]. All update rules can be represented as polynomials over a finite field, yielding a polynomial dynamical system and enabling the application of algebraic geometry techniques, e.g., for the efficient identification of steady states [31, 32-
]. Moreover, discrete dynamical systems can be viewed as Markov chains, allowing the use of tools from Markov theory [33]. This modeling framework, with its explicit representation of regulatory logic through update functions, provides the foundation for formalizing and quantifying canalization, as I describe next.
3 The mathematical theory behind canalization
Shortly after introducing Boolean networks as models of GRNs [16], Stuart Kauffman proposed Boolean canalizing functions as a suitable class of update rules [34]. A function f : {0, 1}n → {0, 1} is canalizing if it has at least one input variable xi (called a canalizing variable) such that setting xi to a specific value a ∈ {0, 1} (the canalizing input) fully determines the output to be b ∈ {0, 1} (the canalized output), regardless of all other inputs. The requirement that f takes other values whe-
n xi ̸= a ensures that constant functions are not considered canalizing [35]. If the first variable does not take on the canalizing input value but there is a second variable with this canalizing property, the function is 2-canalizing. If k variables follow this pattern, the function is k-canalizing [35], and the number of variables that follow this pattern is known as canalizing depth [36]. If all variables follow this pattern (i.e., if the canalizing depth equals the number of inputs n), f is a -
nested canalizing function (NCF ) [37]. Fig. 2 shows an example of an NCF: f (x1, x2, x3) = x1 ∨ (x2 ∧ x3). Expert-curated Boolean GRN models are almost exclusively composed of canalizing or even nested canalizing functions [7, 8, 38], underscoring the central role of canalization in gene regulation (Fig. 3A). The probability that an n-input Boolean or multistate function is canalizing or nested canalizing can be derived analytically [35, 39–43]. As the number of variables increases, canalization -
– and in particular the presence of multiple canalizing variables – becomes an increasingly rare property (Fig. 3B,C), making the empirical prevalence of canalizing logic in biological systems all the more remarkable. Every Boolean function can be expressed in a unique standard monomial form, in which variables are partitioned into distinct layers according to their dominance [35]. For example, the NCF f (x1, x2, x3) = x1 ∨ (x2 ∧ x3) possesses two layers: the first layer contains the canalizing va-
riable x1 (since f (x1 = 1, x2, x3) = 1), while the second layer contains x2 and x3 (since f (x1 = 0, x2 = 1, x3) = f (x1 = 0, x2, x3 = 1) = 1).
4

0,0,0 1,0,0
0,1,0 1,1,0
1,1,1
0,0,1 1,0,1
0,1,1
x3 x2
x1
0
0
0
11
1
1
1
x1
1
1
0
x2
01
0 x3
01
01
x1
1
1
0
x3
01
0 x2
10
10
1st layer
2nd layer
x1 x2 x3 f
0000
0010
0100
0111
1001
1011
1101
1111
x1 x2 x3 f
00#0
0#00
1##1
#111
AB
D
C
Fig. 2 Example of a Boolean nested canalizing function. (A) Truth table of the 3-input Boolean NCF f (x1, x2, x3) = x1 ∨ (x2 ∧ x3). Setting x1 = 1 canalizes f to 1. Setting x2 = 0 or x3 = 0 canalizes the subfunction f (x1 = 0, x2, x3) = x2 ∧ x3. This means f is an NCF with layer structure (1, 2). (B) Canalizing properties can be derived from a Boolean (hyper)cube labeled according to f . The proportion of (n − k)-dimensional faces that are constant is the k-set canalizing proportion. For example, -
the constant (red) face (1, #, #) indicates that x1 = 1 canalizes f . Similarly, the constant (red) edges (0, 0, #) and (0, #, 0) indicate that x2 = 0 or x3 = 0 independently canalize the subfunction. (C) Two possible nested evaluation trees, highlighting that x1 is in the most important canalizing layer and that x2 and x3 are equally important. (D) Reduced truth table where # indicates that a certain input does not matter. The edge effectiveness and input redundancy are computed from this reduced-
 table.
Variables in the first layer are directly canalizing; those that become canalizing once all variables in the first layer have received their non-canalizing input belong to the second layer, and so forth. Variables that never become canalizing constitute the core polynomial. The layer structure specifies the number of variables in each layer, e.g., (1, 2) for the function f [45]. NCFs with identical layer structure exhibit the same dynamical properties, such as the same average sensitivity, defined-
 as the probability that the function’s output changes when a single, randomly chosen input is flipped [45]. The standard monomial form, and in particular the layer structure, therefore provides a principled framework for further classifying Boolean functions. Notably, published Boolean GRN models are enriched for NCFs with low average sensitivity [8], suggesting that evolution may favor such regulatory logic to enhance network stability. More recently, the notion of collective canalization has be-
en introduced, extending the traditional variable-centric definition to a function-centric one [46]. Rather than
5

A
B
C
D
E
Fig. 3 Relationships between canalization metrics for all non-degenerate Boolean functions with 2-5 inputs. (A) Observed proportion of functions with specific canalizing depth in 122 expert-curated Boolean GRN models [8]. (B,C) Proportion of non-degenerate functions with each canalizing depth, shown on (B) linear and (C) log scales, computed using exact formulas [43]. As the number of inputs increases, functions with high canalizing depth become exponentially rarer. (D,E) Distribution of (D) canal-
izing strength and (E) normalized input redundancy for non-degenerate functions with specific canalizing depth, generated using BoolForge [44] and 1000 random functions per distribution. The high correlations between canalizing depth, canalizing strength, and input redundancy indicate that these metrics capture related but not identical aspects of canalization.
asking whether individual variables can determine the output, this framework asks whether subsets of variables collectively canalize the function. Formally, a Boolean n-input function is k-set canalizing if there exists a subset of k variables whose values, once specified, fully determine the output, regardless of the remaining n − k inputs [47]. Under this definition, 1-set canalizing functions correspond exactly to classical canalizing functions. Further, for any n ≥ 2, only two Boolean function-
s are not (n − 1)-set canalizing: the parity function (XOR) and its complement (XNOR). The k-set canalizing proportion quantifies what fraction of all k-variable subsets can collectively canalize a function, and the canalizing strength – a weighted average of these proportions – describes the overall degree of canalization (Fig. 2B) [47]. This strength equals one for maximally canalizing functions (single-layer NCFs where all variables are canalizing, such as AND or OR) and zero for minimally cana-
lizing functions (XOR and XNOR, where knowledge of all variables is always required). An alternative, information-theoretic perspective connects canalization to redundancy [48]. From this viewpoint, a highly canalized function contains redundant information: knowing one variable’s value often makes other variables irrelevant (Fig. 2D).
6

This intuition can be formalized using the Quine-McCluskey minimization algorithm [49], which yields the redundancy associated with each input and its complement, termed edge effectiveness [50]. Summing all edge effectiveness values yields a Boolean function’s effective degree, whereas the total redundancy defines its input redundancy. The resulting effective graph is an edge-weighted version of the wiring diagram, where each edge weight reflects the effectiveness of that regulatory connection. T-
hese diverse mathematical formalizations provide complementary lenses for quantifying canalization in Boolean functions. While highly correlated (Fig. 3D,E), they emphasize different aspects: canalizing depth and layer structure focus on variable dominance hierarchies, canalizing strength on collective buffering, and input redundancy on information compression. The proliferation of these metrics reflects both the richness of the canalization concept and ongoing efforts to identify which formalizat-
ion best captures the biological essence of robustness in gene regulation. I elaborate on this question next.
4 Many definitions of canalization: which one is “right”?
The various definitions of canalization capture related, but not identical, aspects of regulatory robustness. As Fig. 3D,E illustrates, functions with greater canalizing depth tend to exhibit higher canalizing strength and input redundancy. This correlation is expected: mechanisms that render certain variables dominant (high depth) often introduce functional redundancy (high input redundancy) and allow subsets of variables to determine the output (high collective canalization). Yet the correlation-
s are not perfect, indicating that these metrics emphasize different structural features of regulatory logic. For example, consider two 5-input Boolean functions. The function f outputs 1 whenever x1 = 1 or when an odd number of the remaining four inputs are 1. The function g outputs 1 whenever at least two of its five inputs are 1. The variable x1 canalizes f , whereas no single variable canalizes g. Nevertheless, g has higher canalizing strength (0.426) and normalized input redundancy (0.525) th-
an f (0.336 and 0.375, respectively). This example shows that canalizing depth captures variable-level dominance but may overlook distributed forms of robustness quantified by the other two metrics. Similarly, a comprehensive enumeration of all non-degenerate 4-input Boolean functions reveals the same pattern: despite high overall correlation (ρSpearman = 0.958), some functions have high canalizing strength but relatively low input redundancy and vice versa (Fig. 4). These observations motivate a -
fundamental question: which definition of canalization is biologically most meaningful? The answer likely depends on the biological context and the specific question being asked.
• For understanding evolutionary constraints, canalizing depth and layer structure may be most relevant, as they directly relate to how easily mutations in
7

0.00 0.25 0.50 0.75 1.00 canalizing strength
0.0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
normalized input redundancy
Fig. 4 Difference between canalizing strength and normalized input redundancy. All 4input non-degenerate Boolean functions were generated and analyzed using BoolForge [44].
different genes can alter phenotypes. Genes in dominant layers are more “evolutionarily constrained” because mutations affecting them have larger phenotypic consequences [45]. • For control and therapeutic intervention, input redundancy and the effective graph framework may be most useful, as they identify which regulatory connections are functionally important versus redundant [50]. These insights can guide strategies for driving transitions between attractors, such as in disease intervention [30-
, 51]. • For comparing biological networks to random ensembles, canalizing strength and normalized input redundancy both provide a single, normalized metric (ranging from 0 to 1) [47, 50]. This facilitates statistical comparisons across networks with different sizes and structures.
Rather than seeking a single “correct” definition, it is more productive to view canalization as a multifaceted property. Just as graph theory includes multiple centrality measures – such as degree, betweenness, eigenvector centrality – each capturing a different notion of node importance – canalization encompasses several correlated but distinct dimensions of regulatory robustness. A deeper question is whether any of these mathematical notions fully align with Waddington’s original concept of can-
alization. Waddington emphasized a developmental system’s ability to maintain a normal trajectory despite perturbations [52], highlighting dynamical robustness at the network level rather than structural properties of individual functions. Recent work linking function-level canalization to network-level stability (Section 5) helps bridge this gap, but the ultimate test is empirical: Which canalization metrics best predict phenotypic buffering in real biological systems? Addressing this question wi-
ll require systematic, large-scale comparisons that integrate computational predictions with experimental measurements of robustness.
8

5 Canalization and its role in conferring stability to GRNs
The extensive body of work inspired by Kauffman’s pioneering work has firmly established that Boolean networks governed by canalizing update rules exhibit enhanced dynamical stability: they possess fewer attractors, shorter limit cycles, and reduced sensitivity to perturbations compared to networks with random update rules [45, 5355]. In this section, I synthesize key results linking function-level canalization to network-level robustness, with emphasis on the different stability metrics and their-
 biological interpretation.
Dynamical regimes and the criticality hypothesis
A useful starting point for understanding how canalization shapes dynamics is the classification of Boolean networks into ordered, critical, and chaotic regimes. Derrida and Pomeau’s seminal framework [56, 57] characterizes these regimes by how a small perturbation propagates through the system. The Derrida value (or Derrida coefficient) measures the expected number of node-state changes after one update step, given an initial single-node perturbation: values less than 1 correspond to the ordered -
regime (perturbations decay), values greater than 1 to the chaotic regime (perturbations amplify), and values near 1 to the critical regime. The criticality hypothesis proposes that biological GRNs operate near this boundary between order and chaos, where systems can remain robust yet still respond adaptively to external signals [58, 59]. Indeed, many published Boolean GRN models exhibit mean average sensitivities close to 1 [7, 8]. However, recent work has revealed that these models include a sub-
stantial number of source nodes – variables representing external inputs or cellular context with no incoming edges – which artificially inflate average sensitivity. Accounting properly for these source nodes shifts most models toward the ordered regime [60], suggesting that biological networks may be more stable than previously thought. A classical mean-field approximation provides a simple criterion for the transition between order and chaos [57]: a Boolean network is expected to be critical whe-
n 2⟨k⟩ p(1 − p) = 1, where ⟨k⟩ is the average in-degree and p is the average bias of the update rules. This expression captures the intuition that networks with high connectivity or balanced outputs (i.e., p ≈ 0.5) are more prone to chaotic dynamics. However, this threshold relies on nominal connectivity and does not account for the reduction in effective regulatory influence introduced by canalization. Recent work has refined this criterion by replacing ⟨k⟩ with the effective degree ⟨ke⟩, derived-
 from the information-theoretic definition of canalization as the sum of edge effectiveness values [61]. The resulting improved condition, 3.94 ⟨ke⟩ p(1 − p) = 1, more sharply distinguishes ordered from chaotic networks and reveals that many biological GRNs lie deeper in the ordered regime than predicted by the classical approximation.
9

How canalization modulates stability
Canalization modulates stability primarily through its effect on update function sensitivity. NCFs with the same layer structure share the same average sensitivity [45], and this sensitivity varies systematically across layer structures. Highly biased NCFs (e.g., single-layer AND or OR functions) exhibit low sensitivity, whereas less biased NCFs show higher sensitivity. Remarkably, Boolean networks composed entirely of NCFs (with random layer structure) have expected Derrida values equal to 1 – in-
dependent of each function’s in-degree – placing such networks exactly at criticality. In contrast, networks with random canalizing or entirely random update functions become increasingly chaotic as connectivity increases [62]. Published Boolean GRN models are strongly enriched for NCFs, particularly those with low sensitivity [8]. One interpretation is that evolution preferentially selects insensitive NCFs to counterbalance more sensitive update rules elsewhere in the network, thereby maintaining-
 dynamics near criticality. This “compositional tuning” suggests that criticality may emerge from how stabilizing and destabilizing update rules are mixed across the network rather than from a uniform choice of function type.
Coherence and the stability of network attractors
The Derrida value can be computed from the average sensitivities of all update rules [45]. It does not depend on the underlying wiring diagram, and thus fails to capture the influence of feedback loops and other topological features that may affect network stability [63]. To address this limitation, multi-timestep Derrida values have been considered, measuring long-term divergence between trajectories that begin with a one-bit difference. However, such measures are sensitive to phase shifts: even -
if two trajectories converge to the same limit cycle, they may never coincide in state space if they enter the cycle at different time points [60]. Two complementary metrics avoid this issue. The fragility quantifies the long-term average difference between two initially perturbed trajectories [60]. The coherence measures the probability that two states differing by a single bit transition to the same attractor, defined for synchronous [64] and stochastic updates [65], and as quasicoherence for as-
ynchronous updates [60]. Networks with high coherence have robust basins of attraction, meaning small perturbations rarely induce phenotype switches. Canalization strongly increases coherence: networks governed by canalizing update rules, such as most expert-curated Boolean GRN models, display significantly higher coherence than random networks on the same wiring diagram [66]. A recent refinement distinguishes basin coherence (robustness of all states in a basin) from attractor coherence (robustne-
ss of attractor states themselves) [66]. Kauffman already described the measure of attractor coherence in his pioneering work but it was never formally analyzed [16]. Paradoxically, canalization reduces the relative stability of attractors compared to their basins [66]. This arises from functional bias: canalizing functions tend to be biased toward 0 or 1 outputs [67], which confines attractors to similar regions of the state space [68], making transitions between them more likely. The result is a-
 subtle trade-off: canalization stabilizes developmental trajectories (high overall basin coherence) but may render terminal phenotypes more susceptible to
10

low Canalization and absolute bias high
Fig. 5 Canalization creates a stability gradient within Waddington’s landscape. High canalization deepens the valleys that channel developing cells toward robust phenotypic outcomes (left–right gradient, top bar), reinforcing the stability of developmental trajectories. However, when multiple attractors in highly canalized networks coexist, they are concentrated in nearby regions of the state space. This crowding flattens the local landscape near attractors relative to mid-trajectory regions, leav-
ing terminal cell states positioned closer to basin boundaries. As a consequence, mature phenotypes can be more susceptible to directed or coordinated perturbations even when the overall developmental funnel is highly robust. This “intra-valley stability gradient” offers a mechanistic interpretation of how canalization can simultaneously ensure reproducible development and permit regulated phenotype switching in contexts such as reprogramming, regeneration, and pathological transitions.
targeted perturbations (lower attractor coherence). This refines Waddington’s landscape metaphor (Fig. 5) and has important implications for understanding processes like stem cell reprogramming, wound healing, and disease-related transitions such as cancer differentiation [66].
6 Disentangling correlated properties
A fundamental challenge in understanding GRN design principles is that many structural and dynamical features are strongly correlated, complicating causal inference. Biological networks exhibit high canalization, low connectivity, functional bias, and near-critical dynamics [3–9]. Because these properties co-occur, it remains unclear which features evolution actively selects for versus which arise as byproducts of selection on other traits. For example, consider the relationship between canalizati-
on and bias. Canalizing functions, particularly the most canalizing NCFs with single-layer structure (e.g., AND, OR), are necessarily highly biased, i.e., they output 0 or 1 with high probability [67]. Is the observed functional bias in biological networks a direct target of selection, or does it emerge automatically because evolution favors canalization? Similarly, modularity (the decomposition of networks into semi-independent subnetworks)
11

may arise from selection for evolvability, or it may be a byproduct of selection for specific dynamical behaviors that happen to require modular architectures [22, 69].
Toward causal understanding through comparative analysis
Large-scale comparative analyses offer the most promising path toward disentangling these correlations. By analyzing hundreds of independently curated biological network models, researchers can identify which properties are universally present (possibly suggesting strong selection) versus which vary across biological contexts (possibly suggesting contingent evolution or byproduct status). However, such meta-analyses come with inherent flaws. Despite progress, the number of published, experimentall-
y validated GRN models remains relatively small [8, 70], and almost all models are for model organisms, potentially biasing meta-analyses. Moreover, researchers may be more likely to publish models with “interesting” properties (e.g., near criticality, high canalization), or, as in [71, 72], they may even use putative design principles such as nested canalization to constrain the difficult network inference problem. This may substantially inflate the apparent prevalence of these features. Addressi-
ng these challenges will require sustained collaboration between theoreticians, experimentalists, and computational biologists. The payoff, a mechanistic understanding of how molecular regulatory logic produces robust phenotypes, would represent a major advance in systems biology. A complementary approach is computational experimentation: systematically varying one network property while holding others constant, then measuring effects on metrics of interest. For example, the recently postulated hi-
gh “approximability” of biological networks [73], i.e., the ability to accurately approximate biological network dynamics by simpler models, is almost entirely explained by their abundance of canalization [9]. This finding suggests that approximability is not a direct target of selection but rather emerges from canalization. Such studies provide a template for future work disentangling other correlated properties. BoolForge, a recently developed Python package for the random generation and analysi-
s of Boolean functions and networks (with a particular focus on canalization), greatly facilitates the design of such computational studies [44].
The evolutionary origins of canalization
Understanding why canalization is so prevalent in gene regulation requires evolutionary modeling. Several hypotheses have been proposed:
1. Direct selection for robustness: Canalization may be favored because robust phenotypes have higher fitness, particularly in fluctuating environments [12, 13]. Organisms that maintain proper development despite environmental perturbations or minor mutations out-compete less robust individuals. 2. Selection for evolvability: Canalization enables the accumulation of cryptic genetic variation that can be released under stress, facilitating rapid adaptation to new environments [14, 15]. Networks tha-
t buffer most mutations while permitting occasional large phenotypic shifts may be evolutionarily advantageous.
12

3. Developmental constraint: The biochemical mechanisms underlying gene regulation (e.g., cooperative binding, allosteric regulation of transcription factors, and ultrasensitive threshold responses) naturally produce canalizing logic [34, 74]. Thus, evolution may not “select for” canalization directly so much as operate within the constraints of available molecular mechanisms that inherently favor canalized behavior.
These hypotheses are not mutually exclusive, and all may contribute to varying degrees to the prevalence of canalization. Distinguishing among them requires carefully designed computational evolutionary studies (see e.g. [75–77]), as well as integrating mathematical modeling with experimental studies of evolution, an important frontier for future research.
7 Beyond Boolean logic
While many regulatory mechanisms can be accurately described in Boolean logic, this is not always the case. First introduced by Rene Thomas in 1991 [78], multistate network models become increasingly common. Here, some (or all) variables take values in finite sets F with |F| > 2 (e.g., F = {0, 1, 2} for ternary logic). For example, a regulatory network for the G1/S checkpoint pathway includes the ternary input node DNA damage (0: no damage, 1: low damage, 2: high irreparable damage) as well as ter-
nary internal nodes such as the tumor suppressor p53, which is inhibited in the absence of DNA damage, induced in its presence, and at high concentration leads to cell apoptosis [79]. Similarly, many genes in a model of the innate immune response to ischemic injury are ternary indicating either low, intermediate, and high expression levels or inactive, active and hyperactive proteins [80]. Moreover, proteins can be phosphorylated at multiple sites, creating more than two functional states [81]. So-
me inputs (i.e., cellular contexts) and outputs (i.e., phenotypes) are also naturally multivalued. This motivates the need for multistate discrete models and raises important questions: How can canalization be defined for multistate functions? Do the stability results derived for Boolean networks extend to multistate systems?
Defining multistate canalization
Kauffman’s traditional definition of canalization extends naturally to the multistate setting. Instead of a single canalizing input value, a multistate canalizing function f : Fn → F may possess a canalizing input segment S ⊂ F with 1 ≤ |S| < |F|. Typically, S is also required to contain exactly one of the endpoints of F [82]. The notion of nested canalization can also be generalized in an iterative way (Fig. 6A,B). As an example, consider the ternary function
f (x1, x2) =

 
 
2 if x1 = 2,
1 if x1 ̸= 2 and x2 = 2,
0 otherwise.
13

x1 x2 f g
0000
0100
0211
1000
1101
1211
2022
2122
2222
A
x1
2 2
0,1
x2
C
2 0,1
1 x1 01
0 x2 01 01
x1
2 2
0,1
x2 0 1,2
0 x2 21
1 x1 10 10
B x1
2 0,1
x2 2 0,1 1
2
0
Fig. 6 Different definitions of nested canalization in the multistate setting. (A) Example of a nested canalizing ternary function f and a weakly nested canalizing ternary function g in truth table format (inputs: red, outputs: blue), (B) Unique shortest decision diagram of f , (C) Two of many shortest decision diagrams of g.
Closed-form expressions for the abundance and the expected average sensitivity of such multistate NCFs, as well as Derrida values for networks governed by them, have been derived [41]. However, there are alternative ways to define multistate nested canalization. This is due to the fact that a “canalizing variable” may need to be considered multiple times when evaluating a multistate function. Consider the ternary function
g(x1, x2) =

 
 
2 if x1 = 2,
1 if x1 ̸= 2 and x1 + x2 ≥ 2,
0 otherwise.
Here, setting x1 = 2 canalizes g (Fig. 6A,C), yet the subfunction that needs to be evaluated when x1 ̸= 2 still depends on x1. Because g can nevertheless be evaluated in a nested fashion, it is natural to consider it nested canalizing. To distinguish this behavior from the stricter case where each variable appears only once, such functions are termed weakly nested canalizing [83]. Every nested canalizing function is trivially weakly nested canalizing, but not vice versa. The existence of weakly ne-
sted canalizing functions complicates the layer structure concept. Unlike the Boolean case, where the standard monomial form uniquely assigns each variable to a single layer, multistate functions do not admit a comparably clean decomposition [41, 84]. A variable may canalize the output for some input values yet interact non-canalizingly with other variables for others, preventing a unique layered representation. Consequently, canonical metrics such as canalizing depth and layer structure do not ge-
neralize directly to multistate functions.
14

An alternative perspective based on collective canalization appears to generalize more naturally. The definition of k-set canalization – whether a subset of k variables suffices to determine the output regardless of the remaining variables – extends immediately to any finite-valued function [47]. The k-set canalizing proportion and canalizing strength can be computed in nearly the same way for multistate and Boolean functions, providing a unified framework across different state-space sizes. Futu-
re work should focus on sorting out mathematical details and providing formulas for statistical properties, such as the distribution of canalizing strength. Likewise, notions of input redundancy and the effective graph approach should also extend straightforwardly [48, 50], as multi-valued versions of the Quine–McCluskey algorithm enable computation of edge effectiveness in multistate networks. As in the Boolean case, it remains an open question whether one definition of multistate canalization is-
 biologically most useful, or whether different definitions capture distinct aspects of the biological phenomenon of canalization.
Dynamics and stability of multistate networks
The role of canalization in stabilizing Boolean networks has been studied extensively using a variety of stability measures. Most of these measures – such as the Derrida value, fragility, or coherence – quantify how a small perturbation propagates through the network and affects short- or long-term dynamics. In the Boolean setting, the difference between two network states is naturally defined via the Hamming distance, which counts the number of differing bits. Although this idea generalizes forma-
lly to multistate networks, it is far less clear what type of perturbation is biologically meaningful. For example, a ternary gene at a high expression level is more likely to fluctuate to an intermediate level than to jump directly to a low level. Should stability therefore be assessed only under “one-level” perturbations? If so, does a variable in an intermediate state experience twice the perturbation probability of one at an extreme? Modeling choices of this kind – regarding both how perturbat-
ions are introduced and how distances among multistate values are defined – directly shape the resulting stability assessments. In this sense, even the notion of a “small perturbation” becomes model-dependent in the multistate setting, underscoring the need for perturbation metrics that more faithfully reflect biochemical variability.
Empirical multistate GRN models
Despite the biological motivations outlined above, multistate GRN models remain rare compared to their Boolean counterparts. In assembling a repository of more than 150 expert-curated Boolean GRN models by parsing the entire PubMed abstract corpus [8], we identified only 18 multistate models. Because our keyword-based, semi-automated search was optimized for Boolean models, some multistate models were likely missed; nonetheless, the disparity is striking. This scarcity reflects both practical and -
conceptual challenges. First, data requirements for multistate modeling are substantially higher. Inferring update rules with multiple expression levels requires fine-grained quantitative measurements rather than the simpler expressed/unexpressed distinctions sufficient for Boolean models. Second,
15

experimental validation is more demanding: perturbations must achieve specific intermediate expression states rather than complete knockouts or overexpressions, which can be technically challenging. Notably, certain systems – such as Arabidopsis root development, where controlled knockouts (0), knockdowns (1), and overexpression (2) of multiple genes can be achieved efficiently – offer promising platforms for generating and validating multistate GRNs. Finally, Boolean logic maps naturally onto bi-
ologists’ intuitions about gene “activity,” whereas multistate functions are required only when more nuanced regulatory mechanisms must be captured. Analyses of expert-curated Boolean GRN models have been tremendously helpful in uncovering putative biological design principles [7, 8]. The field would thus greatly benefit from a dedicated, comprehensive repository of all published multistate GRN models, analogous to existing Boolean model databases [8, 70, 85]. Such a resource would enable systemat-
ic comparative analyses, and guide the development of improved inference and validation methodologies.
8 Discussion
Canalization provides a unifying perspective on how gene regulatory networks achieve robust function despite pervasive molecular noise, environmental variation, and genetic perturbation. Across decades of work – from Waddington’s developmental insights to modern discrete dynamical systems theory – canalization has emerged as a central organizing principle of GRNs. The mathematical results reviewed here demonstrate that canalizing update rules sharply constrain network dynamics, promote ordered or -
near-critical behavior, and generate attractor landscapes with robust basins. At the same time, recent findings such as the coherence gap reveal that canalization produces subtle trade-offs: while developmental trajectories are stabilized, mature phenotypes may become more susceptible to targeted perturbations. Understanding when evolution exploits versus avoids such “edge-of-stability” behavior remains an important open question. A recurring theme in this perspective is that canalization is multi-
faceted. Variablecentric, collective, and redundancy-based notions capture overlapping but distinct features, much like centrality measures in graph theory. Rather than seeking a single correct metric, future work should aim to understand which forms of canalization map most closely onto experimentally observed robustness. This requires systematic empirical studies linking quantitative canalization metrics to phenotypic buffering in vivo – studies that are still very rare. Large-scale comparative -
analyses, meta-analyses of curated GRN models, and perturbation-response experiments in systems where intermediate expression levels can be controlled will be crucial in bridging theory and experiment. The extension to multistate regulatory logic remains one of the least explored but most biologically significant frontiers. Many biochemical interactions – such as multisite phosphorylation and multi-level cellular contexts – are inherently multivalued. Yet multistate canalization theory is still in-
 its infancy. The existence of weakly nested canalizing functions, the lack of a canonical layer structure, and the dependence of stability on how perturbations are defined all point to conceptual challenges distinct from
16

the Boolean case. Addressing them will require new mathematical tools, improved perturbation metrics that reflect biochemical noise, and curated repositories of multistate GRNs. These resources would enable clearer comparisons between Boolean and multistate dynamics and help determine when more states are necessary for biological realism. Looking forward, canalization offers a powerful conceptual bridge between the logic of gene regulation and the dynamics of phenotype. Its relevance spans molecu-
lar biology, evolution, control theory, and network inference. Advancing the field will require integrating algebraic methods, computational experiments, evolutionary modeling, and targeted laboratory validation. By developing a unified theory of canalization in both Boolean and multistate systems – and by grounding that theory in empirical data – we can move closer to a mechanistic understanding of how regulatory architectures produce the remarkable stability and adaptability observed across livi-
ng systems.
Data availability
Not applicable.
Code availability
All code used to perform the analyses and create the figures is available at https://github.com/ckadelka/PerspectiveCanalization.
References
[1] Elowitz, M. B., Levine, A. J., Siggia, E. D. & Swain, P. S. Stochastic gene expression in a single cell. Science 297, 1183–1186 (2002).
[2] Kaern, M., Elston, T. C., Blake, W. J. & Collins, J. J. Stochasticity in gene expression: from theories to phenotypes. Nature Reviews Genetics 6, 451–464 (2005).
[3] Shen-Orr, S. S., Milo, R., Mangan, S. & Alon, U. Network motifs in the transcriptional regulation network of Escherichia coli. Nature genetics 31, 64–68 (2002).
[4] MacNeil, L. T. & Walhout, A. J. Gene regulatory networks and the role of robustness and stochasticity in the control of gene expression. Genome research 21, 645–657 (2011).
[5] Deritei, D., Aird, W. C., Ercsey-Ravasz, M. & Regan, E. R. Principles of dynamical modularity in biological regulatory networks. Scientific reports 6, 21957 (2016).
[6] Gorochowski, T. E., Grierson, C. S. & di Bernardo, M. Organization of feedforward loop motifs reveals architectural principles in natural and engineered networks. Science advances 4, eaap9751 (2018).
17

[7] Daniels, B. C. et al. Criticality distinguishes the ensemble of biological regulatory networks. Physical review letters 121, 138102 (2018).
[8] Kadelka, C. et al. A meta-analysis of Boolean network models reveals design principles of gene regulatory networks. Science Advances 10, eadj0822 (2024).
[9] Kadelka, C. & Murrugarra, D. Canalization reduces the nonlinearity of regulation in biological networks. npj Systems Biology and Applications 10, 67 (2024).
[10] Waddington, C. H. Canalization of development and the inheritance of acquired characters. Nature 150, 563–565 (1942).
[11] Gibson, G. & Wagner, G. Canalization in evolutionary genetics: a stabilizing theory? BioEssays 22, 372–380 (2000).
[12] Von Dassow, M. & Davidson, L. A. Physics and the canalization of morphogenesis: a grand challenge in organismal biology. Physical biology 8, 045002 (2011).
[13] Hallgrimsson, B. et al. The developmental-genetics of canalization. Seminars in Cell & Developmental Biology 88, 67–79 (2019).
[14] Ashworth, A., Lord, C. J. & Reis-Filho, J. S. Genetic interactions in cancer progression and treatment. Cell 145, 30–38 (2011).
[15] Jia, D., Jolly, M. K., Kulkarni, P. & Levine, H. Phenotypic plasticity and cell fate decisions in cancer: insights from dynamical systems theory. Cancers 9, 70 (2017).
[16] Kauffman, S. A. Metabolic stability and epigenesis in randomly constructed genetic nets. Journal of theoretical biology 22, 437–467 (1969).
[17] Schwab, J. D., Ku ̈hlwein, S. D., Ikonomi, N., Ku ̈hl, M. & Kestler, H. A. Concepts in Boolean network modeling: What do they all mean? Computational and Structural Biotechnology Journal (2020).
[18] L ̈ahdesm ̈aki, H., Shmulevich, I. & Yli-Harja, O. On learning gene regulatory networks under the Boolean network model. Machine learning 52, 147–167 (2003).
[19] Karlebach, G. & Shamir, R. Modelling and analysis of gene regulatory networks. Nature Reviews Molecular Cell Biology 9, 770–780 (2008).
[20] Lee, W.-P. & Tzou, W.-S. Computational methods for discovering gene networks from expression data. Briefings in bioinformatics 10, 408–423 (2009).
[21] Pratapa, A., Jalihal, A. P., Law, J. N., Bharadwaj, A. & Murali, T. Benchmarking algorithms for gene regulatory network inference from single-cell transcriptomic data. Nature Methods 17, 147–154 (2020).
18

[22] Kadelka, C., Wheeler, M., Veliz-Cuba, A., Murrugarra, D. & Laubenbacher, R. Modularity of biological systems: a link between structure and function. Journal of the Royal Society Interface 20, 20230505 (2023).
[23] Thomas, R. & d’Ari, R. Biological feedback (CRC press, 1990).
[24] Hopfensitz, M., M ̈ussel, C., Maucher, M. & Kestler, H. A. Attractors in boolean networks: a tutorial. Computational Statistics 28, 19–36 (2013).
[25] Kauffman, S. A. The origins of order: Self-organization and selection in evolution (Oxford University Press, 1993).
[26] Zhang, R. et al. Network model of survival signaling in large granular lymphocyte leukemia. Proceedings of the National Academy of Sciences 105, 16308–16313 (2008).
[27] Saadatpour, A. et al. Dynamical and structural analysis of a T cell survival network identifies novel candidate therapeutic targets for large granular lymphocyte leukemia. PLoS Comput Biol 7, e1002267 (2011).
[28] Davidich, M. I. & Bornholdt, S. Boolean network model predicts cell cycle sequence of fission yeast. PLOS ONE 3, e1672 (2008).
[29] Choi, M., Shi, J., Jung, S. H., Chen, X. & Cho, K.-H. Attractor landscape analysis reveals feedback loops in the p53 network that control the cellular response to DNA damage. Science signaling 5, ra83–ra83 (2012).
[30] Campbell, C. & Albert, R. Edgetic perturbations to eliminate fixed-point attractors in boolean regulatory networks. Chaos: An Interdisciplinary Journal of Nonlinear Science 29, 023130 (2019).
[31] Laubenbacher, R. & Stigler, B. A computational algebra approach to the reverse engineering of gene regulatory networks. Journal of theoretical biology 229, 523537 (2004).
[32] Veliz-Cuba, A., Jarrah, A. S. & Laubenbacher, R. Polynomial algebra of discrete models in systems biology. Bioinformatics 26, 1637–1643 (2010).
[33] Xiao, Y. A tutorial on analysis and simulation of boolean gene regulatory network models. Current genomics 10, 511–525 (2009).
[34] Kauffman, S. The large scale structure and dynamics of gene control circuits: an ensemble approach. Journal of Theoretical Biology 44, 167–190 (1974).
[35] He, Q. & Macauley, M. Stratification and enumeration of Boolean functions by canalizing depth. Physica D: Nonlinear Phenomena 314, 1–8 (2016).
19

[36] Layne, L., Dimitrova, E. & Macauley, M. Nested canalyzing depth and network stability. Bulletin of mathematical biology 74, 422–433 (2012).
[37] Kauffman, S., Peterson, C., Samuelsson, B. & Troein, C. Random Boolean network models and the yeast transcriptional network. Proceedings of the National Academy of Sciences 100, 14796–14799 (2003).
[38] Harris, S. E., Sawhill, B. K., Wuensche, A. & Kauffman, S. A model of transcriptional regulatory networks based on biases in the observed regulation rules. Complexity 7, 23–40 (2002).
[39] Just, W., Shmulevich, I. & Konvalina, J. The number and probability of canalizing functions. Physica D: Nonlinear Phenomena 197, 211–221 (2004).
[40] Li, Y., Adeyeye, J. O., Murrugarra, D., Aguilar, B. & Laubenbacher, R. Boolean nested canalizing functions: A comprehensive analysis. Theoretical Computer Science 481, 24–36 (2013).
[41] Kadelka, C., Li, Y., Kuipers, J., Adeyeye, J. O. & Laubenbacher, R. Multistate nested canalizing functions and their networks. Theoretical Computer Science 675, 1–14 (2017).
[42] Dimitrova, E., Stigler, B., Kadelka, C. & Murrugarra, D. Revealing the canalizing structure of Boolean functions: Algorithms and applications. Automatica 146, 110630 (2022).
[43] Kadelka, C. On the number of non-degenerate canalizing Boolean functions. arXiv 2510.26556 (2025).
[44] Kadelka, C. & Coberly, B. Boolforge: Random generation and analysis of Boolean functions and networks in python. arXiv preprint arXiv:2509.02496 (2025).
[45] Kadelka, C., Kuipers, J. & Laubenbacher, R. The influence of canalization on the robustness of Boolean networks. Physica D: Nonlinear Phenomena 353, 39–47 (2017).
[46] Reichhardt, C. O. & Bassler, K. E. Canalization and symmetry in Boolean models for genetic regulatory networks. Journal of Physics A: Mathematical and Theoretical 40, 4339 (2007).
[47] Kadelka, C., Keilty, B. & Laubenbacher, R. Collectively canalizing Boolean functions. Advances in Applied Mathematics 145, 102475 (2023).
[48] Marques-Pita, M. & Rocha, L. M. Canalization and control in automata networks: body segmentation in Drosophila melanogaster. PloS one 8, e55946 (2013).
[49] McCluskey, E. J. Minimization of Boolean functions. The Bell System Technical Journal 35, 1417–1444 (1956).
20

[50] Gates, A. J., Brattig Correia, R., Wang, X. & Rocha, L. M. The effective graph reveals redundancy, canalization, and control pathways in biochemical regulation and signaling. Proceedings of the National Academy of Sciences 118, e2022598118 (2021).
[51] Parmer, T., Rocha, L. M. & Radicchi, F. Influence maximization in boolean networks. Nature communications 13, 3457 (2022).
[52] Waddington, C. H. Canalization of development and the inheritance of acquired characters. Nature 150, 563–565 (1942).
[53] Kauffman, S., Peterson, C., Samuelsson, B. & Troein, C. Genetic networks with canalyzing Boolean rules are always stable. Proceedings of the National Academy of Sciences 101, 17102–17107 (2004).
[54] Shmulevich, I. & Kauffman, S. A. Activities and sensitivities in Boolean network models. Physical Review Letters 93, 048701 (2004).
[55] Karlsson, F. & H ̈ornquist, M. Order or chaos in Boolean gene networks depends on the mean fraction of canalizing functions. Physica A: Statistical Mechanics and its Applications 384, 747–757 (2007).
[56] Derrida, B. & Weisbuch, G. Evolution of overlaps between configurations in random Boolean networks. Journal de Physique 47, 1297–1303 (1986).
[57] Derrida, B. & Pomeau, Y. Random networks of automata: a simple annealed approximation. Europhysics Letters 1, 45 (1986).
[58] Balleza, E. et al. Critical dynamics in genetic regulatory networks: examples from four kingdoms. PLoS One 3, e2456 (2008).
[59] Roli, A., Villani, M., Filisetti, A. & Serra, R. Dynamical criticality: overview and open questions. Journal of Systems Science and Complexity 31, 647–663 (2018).
[60] Park, K. H., Costa, F. X., Rocha, L. M., Albert, R. & Rozum, J. C. Models of cell processes are far from the edge of chaos. PRX Life 1, 023009 (2023).
[61] Manicka, S., Marques-Pita, M. & Rocha, L. M. Effective connectivity determines the critical dynamics of biochemical networks. Journal of the Royal Society Interface 19, 20210659 (2022).
[62] Shmulevich, I. & Kauffman, S. A. Activities and sensitivities in Boolean network models. Physical review letters 93, 048701 (2004).
[63] Squires, S., Pomerance, A., Girvan, M. & Ott, E. Stability of Boolean networks: The joint effects of topology and update rules. Physical Review E 90, 022814 (2014).
21

[64] Willadsen, K., Triesch, J. & Wiles, J. in Understanding robustness in random boolean networks (eds Bullock, S., Noble, J., Watson, R. & Bedau, M.) Artificial Life XI: Proceedings of the Eleventh International Conference on the Simulation and Synthesis of Living Systems 694–701 (MIT Press, Winchester, UK, 2008).
[65] Kadelka, C., Murrugarra, D. & Laubenbacher, R. Stabilizing gene regulatory networks through feedforward loops. Chaos: An Interdisciplinary Journal of Nonlinear Science 23, 025107 (2013).
[66] Bavisetty, V. S. N., Wheeler, M. & Kadelka, C. Attractors are less stable than their basins: Canalization creates a coherence gap in gene regulatory networks. bioRxiv 2025–11 (2025).
[67] Shmulevich, I., L ̈ahdesm ̈aki, H., Dougherty, E. R., Astola, J. & Zhang, W. The role of certain post classes in boolean network models of genetic networks. Proceedings of the National Academy of Sciences 100, 10734–10739 (2003).
[68] Socolar, J. E. & Kauffman, S. A. Scaling in ordered and critical random boolean networks. Physical review letters 90, 068702 (2003).
[69] Espinosa-Soto, C. On the role of sparseness in the evolution of modularity in gene regulatory networks. PLoS computational biology 14, e1006172 (2018).
[70] Helikar, T. et al. The Cell Collective: toward an open and collaborative approach to systems biology. BMC systems biology 6, 96 (2012).
[71] Hinkelmann, F. & Jarrah, A. S. Inferring biologically relevant models: nested canalyzing functions. International Scholarly Research Notices 2012, 613174 (2012).
[72] Zhou, J. X., Samal, A., d’H ́erou ̈el, A. F., Price, N. D. & Huang, S. Relative stability of network states in boolean network models of gene regulation in development. Biosystems 142, 15–24 (2016).
[73] Manicka, S., Johnson, K., Levin, M. & Murrugarra, D. The nonlinearity of regulation in biological networks. NPJ Systems Biology and Applications 9, 10 (2023).
[74] Ferrell, J. E. & Ha, S. H. Ultrasensitivity part I: Michaelian responses and zeroorder ultrasensitivity. Trends in biochemical sciences 39, 496–503 (2014).
[75] Siegal, M. L. & Bergman, A. Waddington’s canalization revisited: developmental stability and evolution. Proceedings of the National Academy of Sciences 99, 10528–10532 (2002).
[76] Ru ̈nneburger, E. & Le Rouzic, A. Why and how genetic canalization evolves in gene regulatory networks. BMC evolutionary biology 16, 239 (2016).
22

[77] Huizinga, J., Stanley, K. O. & Clune, J. The emergence of canalization and evolvability in an open-ended, interactive evolutionary system. Artificial life 24, 157–181 (2018).
[78] Thomas, R. Regulatory networks seen as asynchronous automata: a logical description. Journal of theoretical biology 153, 1–23 (1991).
[79] Issler, M. V. C. & Mombach, J. C. M. Microrna-16 feedback loop with p53 and wip1 can regulate cell fate determination between apoptosis and senescence in dna damage response. PLoS One 12, e0185794 (2017).
[80] Dimitrova, E., Caromile, L. A., Laubenbacher, R. & Shapiro, L. H. The innate immune response to ischemic injury: a multiscale modeling perspective. BMC Systems Biology 12, 50 (2018).
[81] Salazar, C. & H ̈ofer, T. Multisite protein phosphorylation–from molecular mechanisms to kinetic models. The FEBS journal 276, 3177–3198 (2009).
[82] Murrugarra, D. & Laubenbacher, R. Regulatory patterns in molecular interaction networks. Journal of theoretical biology 288, 66–72 (2011).
[83] R ́emy,  ́E. & Ruet, P. in Average sensitivity of nested canalizing functions (eds Blin, G., Koeppl, H. & Zechner, C.) Computational Methods in Systems Biology, Vol. 14137 of Lecture Notes in Computer Science 144–162 (Springer, Cham, Switzerland, 2023).
[84] Murrugarra, D. & Dimitrova, E. Quantifying the total effect of edge interventions in discrete multistate networks. Automatica 125, 109453 (2021).
[85] Pastva, S., Sˇafr ́anek, D., Beneˇs, N., Brim, L. & Henzinger, T. Repository of logically consistent real-world boolean network models. bioRxiv 2023–06 (2023).
Acknowledgements
The author acknowledges support from the Simons Foundation (grant 712537) and the National Science Foundation (grants DMS-2424632 and DMS-2451973).
Competing interests.
The author declares no competing interests.
23

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:19.426Z
- **Text Length:** 60332 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 23 of 23
