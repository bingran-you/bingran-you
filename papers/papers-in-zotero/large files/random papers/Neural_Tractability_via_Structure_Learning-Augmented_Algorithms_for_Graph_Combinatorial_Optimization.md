# PDF Document: Li et al. - 2025 - Neural Tractability via Structure Learning-Augmented Algorithms for Graph Combinatorial Optimizatio.pdf

**File Path:** Li et al. - 2025 - Neural Tractability via Structure Learning-Augmented Algorithms for Graph Combinatorial Optimizatio.pdf

**Processed Date:** 2026-02-10T18:15:40.399Z

**File Size:** 1191.32 KB

**Total Pages:** 20

**Extracted Pages:** 20

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3459

**Title:** Neural Tractability via Structure: Learning-Augmented Algorithms for Graph Combinatorial Optimization

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

NEURAL TRACTABILITY VIA STRUCTURE:
LEARNING-AUGMENTED ALGORITHMS FOR GRAPH
COMBINATORIAL OPTIMIZATION
A PREPRINT
Jialiang Li*1, Weitong Chen†1, and Mingyu Guo‡1 1School of Computer Science and Mathematical Sciences The University of Adelaide
November 26, 2025
ABSTRACT
Neural models have shown promise in solving NP-hard graph combinatorial optimization (CO) problems. Once trained, they offer fast inference and reasonably high-quality solutions for in-distribution testing instances, but they generally fall short in terms of absolute solution quality compared to classical search-based algorithms that are admittedly slower but offer optimality guarantee once search finishes. One way for neural models to trade time for solution quality is to train them to generate d-
iverse solutions by leveraging the intrinsic randomness built into the models. Higherquality solutions can be achieved via repeated trials, leading to state-of-the-art neural models such as GFlowNet [Zhang et al., 2023]. We propose a novel framework that combines the inference efficiency and exploratory power of neural models with the solution quality guarantee of search-based algorithms. In particular, we use parameterized algorithms (PAs) as the search component. PAs are dedicated to identifying-
 easy instances of generally NP-hard problems, and allow for practically efficient search by exploiting structural simplicity (of the identified easy instances). Under our framework, we use parameterized analysis to identify the structurally hard parts of a CO instance. The neural model handles the hard parts by generating advisory signals based on its data-driven understanding. The PA-based search component then integrates the advisory signals to systematically and efficiently searches through th-
e remaining structurally easy parts. Notably, our framework is agnostic to the choice of neural model and produces strictly better solutions than neural solvers alone. We examine our framework on multiple CO tasks. Empirical results show that it achieves superior solution quality, competitive with that of commercial solvers. Furthermore, by using the neural model only for exploratory advisory signals, our framework exhibits improved out-of-distribution generalization, addressing a key limitation o-
f existing neural CO solvers.
Keywords FPT · learning-augmented algorithm
1 Introduction
The core challenge in solving NP-hard graph combinatorial optimization (CO) problems lies in balancing solution quality with practical time efficiency. Search-based algorithms, while offering optimality guarantees upon completion, scale poorly. The search runtime inevitably grows exponentially for hard problems. In many applications, however, a fast and high-quality heuristic is sufficient, which has led to the growing popularity of neural solvers. Trained on curated datasets, neural models can le-
arn meaningful latent representations that enable them to predict high-quality
∗j.li@adelaide.edu.au †weitong.chen@adelaide.edu.au ‡mingyu.guo@adelaide.edu.au
arXiv:2511.19573v1 [cs.LG] 24 Nov 2025

arXiv Template A PREPRINT
solutions for unseen instances drawn from distributions similar to the training set. Despite the high training cost and architectural complexity, once trained, neural solvers offer fast inference speed on modern GPUs. This fast inference speed also implies strong exploratory capability, which is crucial for CO tasks. State-of-the-art neural solvers are often trained not to produce a single best solution, but to generate diverse high-quality solutions, relying on repeated trials to improve solution-
 quality, such as GFlowNet [Zhang et al., 2023].
In summary, search is systematic but slow, whereas neural models provide fast guesses, with the understanding that we can trade time for solution quality via repeated guesses. For easy instances (i.e., small solution spaces), search is typically superior when scalable. This is especially true for our paper where our search component is a linear-time dynamic program (DP). In situations where DP is scalable, repeated guesses can take much longer and lack the optimality guarantee of DP. In contrast, -
for hard instances (i.e., large solution spaces), repeated guesses are more viable than search.
In this paper, we propose a novel framework that combines the best of both worlds. We apply both search and neural heuristics to jointly handle a single graph CO instance. We identify the hard parts of the given graph and use neural heuristics to make data-driven decisions in the hard parts. Once the hard parts are settled, we optimally search through the remaining easy parts via DP. Unlike existing neural solvers such as GFlowNet, which rely on learned guesses on the entire graph, our framework a-
voids guessing whenever search is viable. Although a well-trained model may make near-perfect guesses, errors can still occur — even on decision tasks it has encountered frequently during training. As a result, our hybrid framework, being agnostic to the neural component, can strictly outperform pure neural solvers in terms of solution quality.
A key question underpinning our framework is: What exactly are the “hard parts”, and how can we identify them? To answer this, we draw from the rich literature on parameterized algorithms [Cygan et al., 2020, Fomin et al., 2019, Downey et al., 1997]. The field of parameterized algorithms focuses on identifying easy instances of NP-hard problems, as well as developing efficient and optimal algorithms, referred to as fixed-parameter tractable algorithms, by exploiting the easy (structural) features.-
 For now, we outline the core ideas. The structural feature we focus on is treewidth, which measures the similarity between a given graph and an exact tree. Many graph CO tasks become easy if the graph is an exact tree. For example, Maximum Independent Set (MIS) is trivial on trees — take the leaves, delete them and their neighbors, and repeat. The celebrated Courcelle’s Theorem [Courcelle, 1990] states that, for a broad class of graph CO problems expressible in Monadic Second Order logic, includi-
ng MIS, VERTEX COVER, HAMILTONIAN CYCLE, GRAPH COLORING, DOMINATING SET, STEINER TREE, BOUNDED-LENGTH CUT, MAX CUT, and many more, there exists a linear-time dynamic program, assuming the treewidth is bounded. In other words, if a graph sufficiently resembles a tree (i.e., has low treewidth), then efficient search via DP becomes feasible. Another key concept from parameterized algorithm literature is treewidth modulator (TM) Cygan et al. [2014], which refers to the smallest set of vertices whose r-
emoval reduces the treewidth of the graph below a set threshold. In our framework, the “hard parts” refer to exactly the treewidth modulator.
We focus on vertex-selection CO tasks, where the goal is to select a subset of vertices from a graph, such as MIS, VERTEX COVER (MVC), MAX-CUT (MC), and DOMINATING SET. Under our framework, a neural model generates exploratory advice signals for making decisions on vertices in the treewidth modulator (i.e., which vertices to select from the TM). These advice signals are then passed to a customized Courcelle’s DP, which incorporates the advice signals to prune the DP’s search space, enabling linear-
-time search over the easy parts (i.e., the rest of the graph). Noting that, without the advice signals, Courcelle’s DP by itself is exponential-time, as it is an exact algorithm for NP-hard tasks. It is linear only under the premise that the graph instance’s treewidth is bounded. With the advice signals, we face pruned search space, leading to linear search time. We refer to this customized DP as treewidth dynamic programming with advice (TDPA), and we name our overall framework the neural fixed--
parameter tractable algorithm (N-FPT).
We run experiments on MIS, MVC and MC. Experimental results indicate that our framework consistently improves both solution quality and generalization performance. In terms of solution quality, it delivers substantial gains across two different performance evaluation metrics (average and best-of-N sampling), dominating that of standalone state-of-the-art neural model and sometimes even surpassing the leading commercial solver GUROBI — a milestone rarely accomplished by neural approaches. For gener-
alization, our framework demonstrates strong reliability on both intra-class and inter-class settings, even outperforming models trained specifically for the target testing configuration.
2 Background
Model and Notation. We focus on vertex-selection tasks on graphs, where the goal is to select a subset of vertices. We follow standard notations from graph theory. Let G denote the set of all graphs, and let G = (V, E) ∈ G be a specific graph instance, where V represents the set of vertices and E ⊆ V × V represents the set of edges. We denote the number of vertices and the number of edges as |V | = n and |E| = m, respectively. A candidate solution is a vertex
2

arXiv Template A PREPRINT
subset S ⊆ V from a feasible solution space F. Without loss of generality, we assume a maximization objective. Given a solution quality metric f , our task is to find the optimal subset of vertices S∗ = arg maxS⊆V ;S∈F f (S).
Learning-Augmented Algorithms (LAs). Learning-augmented algorithms (LAs) refer to a broad class of algorithms that incorporate machine learning components. For example, in online algorithm design, it is natural to use machine learning to predict likely future events [Purohit et al., 2018]. Machine learning has also been used to warm start classical search-based algorithms for speed gain [Davies et al., 2023]. While there have been theoretical works on complexity analysis and approximation algorith-
m design for CO tasks assuming access to predictive oracles [Braverman et al., 2024, Cohen-Addad et al., 2024], our framework for graph CO tasks, summarized as “guess via ML in the hard region and search via parameterized algorithms in the easy region”, is novel.
Generally, an LA consists of two components: (1) a trained neural component Orcθ, which serves as an imperfect oracle with learnable parameters θ; (2) a classical algorithm component A, which is designed to utilize predictions from Orcθ. In the context of vertex selection, Orcθ maps a graph instance G = (V, E) to a subset of vertices Orcθ(G) ⊆ V . The classical algorithm A also returns a subset of vertices, but its result is conditional on Orcθ, which is denoted as A(G|Orcθ) ⊆ V .
We divide a single graph instance into a hard region and an easy region. For vertex selection problems, the hard region SHard is a vertex subset. Specifically, our SHard is based on treewidth modulator, as formally defined in Section 3. The easy region SEasy is its complement: SEasy = V \ SHard.
Under our neural fixed-parameter tractable algorithm (N-FPT), the neural component Orcθ is GFlowNet [Zhang et al., 2023]. Building on the foundational work of Bengio et al. [2021, 2023] and subsequent variants [Malkin et al., 2022, Madan et al., 2023, Pan et al., 2023], GFlowNet is the state-of-the-art neural solver for various vertex-selection tasks including MIS. GFlowNet selects vertices sequentially until a complete solution is formulated. It is trained to sample solutions with probabilities p-
roportional to their quality scores. This enables the generation of a diverse set of high-quality solutions, which is particularly suitable for CO tasks.
Rather than relying on the neural model to select vertices across the entire graph, we restrict its selections to the hard region, resulting in the advice signals Orcθ(G) T SHard. These advice signals are then passed to the classical algorithm A, a customized version of Courcelle’s DP that takes advice signals; more in Section 3. The final solution produced is N-FPT(G) = A(G|Orcθ(G) T SHard).
3 Proposed Method
Fixed-Parameter Tractability (FPT). FPT focuses on identifying easy instances of NP-hard problems and designing efficient exact algorithms, known as parameterized algorithms, that specialize in exploiting the identified easy features to achieve scalability. We typically use parameters to measure the “easiness” of an instance. Formally, given input size n and a special parameter k, an algorithm is said to be fixed-parameter tractable with respect to k if its complexity is O(f (k)POLY(n)), where f m-
ay be exponential. That is, for small k, the algorithm is effectively polynomial-time. The relevant parameter in our paper is treewidth, which measures the similarity between a given graph instance and an exact tree. Many NP-hard graph CO problems become easy on tree-like graphs (i.e., graphs with small treewidths). This is formalized by the following celebrated theorem:
Courcelle’s Theorem [Courcelle, 1990]. For any graph CO task expressible in monadic second order logic formula φ, given a graph instance G with n vertices and treewidth tw, there exists a dynamic program with complexity O(f (|φ|, tw)n).
Many graph CO tasks fall into this category as mentioned in Section 1. Courcelle’s Theorem implies that all these problems are fixed-parameter tractable with bounded treewidth. In other words, graphs with small treewidths can be solved via linear DP. Treewidth is calculated via a graph partitioning process that yields tree decomposition:
Tree Decompositions (TD) & Treewidth (TW) Robertson and Seymour [1984]. A TD is a mapping from G to a pair T = (T, {Xt}t∈V (T )), where T is a tree and every tree node t ∈ V (T ) corresponds to a subset of vertices from the original graph, denoted as Xt ⊆ V (G). Xt is often referred to as a bag. For a valid TD, we must have:
• The union of all bags contains all the vertices from the original graph: S
t∈V (T ) Xt = V (G);
• For any edge (u, v) in the original graph, there must exist at least one bag that contains both u and v: ∀(u, v) ∈ E(G), ∃t ∈ T with {u, v} ⊆ Xt;
• For any vertex u from the original graph, all bags containing u must form a subtree of T : ∀u ∈ V (G), Tu = {t ∈ V (T )|u ∈ Xt} is a connected component of T .
3

arXiv Template A PREPRINT
The treewidth based on TD is maxt∈V (T )|Xt| − 1, i.e., maximum bag size minus 1.4
Figure 1: Tree decomposition and treewidth modulator: the left image shows the original TD, where the largest bag has seven nodes, whose treewidth is 6. Given a target treewidth η = 4, vertex deletions are required. Blue • and red • highlight a valid (not necessarily optimal) treewidth modulator.
The left-most subfigure in Figure 1 shows an example tree decomposition. Admittedly, TD is a fairly convoluted process. It assigns the original graph vertices to bags, which are organized as a tree. A vertex may be assigned to multiple bags. I.e., the blue vertex is assigned to 5 different bags.
One major use of tree decomposition (TD) is dynamic programming. We describe the main gist of Courcelle’s DP in the context of vertex-selection problems. Each bag Xt in the TD corresponds to a DP subproblem, where we simply enumerate all 2|Xt| possible vertex selections. A standard DP strategy performs a bottom-up traversal . For each leaf bag, we enumerate combinations and discard those violating feasibility constraints. For each parent bag, we further discard selections that are incompatible wit-
h its children bags. It is easy to see that the main bottleneck is caused by large bags.
Given that large bags are causing scalability issues, a natural idea is to remove some vertices from the large bags, leading to the treewidth modulator definition below. For example, in Figure 1, by removing two vertices (blue and red), the treewidth drops from 6 to 4.
Treewidth Modulator (TM) [Cygan et al., 2014]. Let η ≥ 0 be an integer and G be a graph. A set X ⊂ V (G) is called an η-treewidth modulator in G if TW(G \ X) ≤ η.
Here, TW refers to the treewidth computed using a specific tree decomposition heuristic. The optimal treewidth modulator (i.e., the smallest set of vertices to be removed) under a given tree decomposition is also NP-hard. In this work, we use mixed-integer programming (MIP) to heuristically identify a treewidth modulator, which suffices for our purposes.
Importantly, for graph CO tasks, we cannot simply delete vertices as that would change the problem itself. We do not have to actually delete vertices. We simply ignore them from the DP search. Suppose a treewidth modulator T M reduces a graph’s treewidth to below η, and a neural model has provided selection decisions for the vertices in T M . Then, the number of selection combinations that need to be enumerated in any bag during DP is at most 2η+1, as the vertex selection within T M are already fi-
xed. We refer to the above customized DP as Treewidth Dynamic Programming with Advice (TDPA).
Neural Fixed-Parameter Tractable Algorithm (N-FPT) (Figure 2). N-FPT operates within the learning-augmented algorithm (LA) framework, combining a neural component and a classical algorithm component. The framework is agnostic to the choice of neural model. In our experiments, we use GFlowNet, trained as in Zhang et al. [2023]. The classical algorithm component is TDPA. Algorithm 1 formally presents TDPA. It requires constructing a tree decomposition and solving the treewidth modulator problem. Bot-
h procedures are detailed in Appendix B.5.
We begin by presenting the following proposition: if the neural model provides optimal selections within the treewidth modulator, then N-FPT returns a globally optimal solution. Furthermore, N-FPT is agnostic to the choice of neural model and always performs at least as well as neural model alone.
4There are many ways to construct tree decompositions. The optimal treewidth is the minimum value over all valid tree decompositions, which is NP-hard to compute. In our experiments, we use the MIN-DEGREE heuristic.
4

arXiv Template A PREPRINT
Policy
1
0
1
1 0 1
1
0
1
?
?
??
?
?? ?
?
???
??
?? ??
Figure 2: N-FPT overview: The vertex set V is split into TM and V \ TM. We query GFlowNet for decisions in TM, which are injected to TDPA. In the rightmost TD, “?” denotes undecided vertices in V \ TM, and only these undecided vertices will be enumerated during DP.
Algorithm 1 Treewidth dynamic programming with advice
1: Input: G = (V, E); Tw = (T, {Xt}t∈V (T )): a TD with width w; TMη: a TM to target width η; s ⊆ {0, 1}|TMη| : an advice string; P : a vertex-selection maximization problem. 2: Output: OPT to P 3: Let C, D be two DP tables.
4: for t ∈ V (T ) in a bottom-up manner do
5: Xp ← {k | k ∈ V (T ) and k ∈ Parent(t)}; Xc ← {j | j ∈ V (T ) and j ∈ Children(t)} 6: Ft ← {x | x ⊆ Xt \ s and P (x) is satisfied} ▷ APPLY ADVICE. 7: for x ∈ Ft do
8: x ← x ∪ s ▷ COMPLETE STATE WITH Advice. 9: C(t, x ∩ Xj) ← |x| + P
j∈Xc (D(j, t, x ∩ Xj ) − |x ∩ Xj |) ▷ MERGE CHILDREN. 10: D(t, k, x ∩ Xk) ← maxk∈Xp C(t, x ∩ Xk) ▷ UPLOAD TO PARENT.
11: OPT ← maxx∈Froot C(root, x) 12: return OPT
Proposition 1 Let Orcθ be the neural solver behind N-FPT. We assume an (maximization) objective function f , a
graph G, a target treewidth η, and the corresponding treewidth modulator T Mη. Let y := G → 2V be a perfect oracle offering the optimal vertex selection. We have
• If Orcθ(G) T T Mη = y(G) T T Mη, then N-FPT(G) is globally optimal. • If Orcθ(G) T T Mη ̸= y(G) T T Mη, then we still have f (N-FPT(G)) ≥ f (Orcθ(G)).
For the remainder of the technical discussion, particularly in relation to illustrative figures such as Figure 3 and 4, we use Maximum Independent Set (MIS) as the discussion context. We adopt a ternary vertex state representation {?, 0, 1}, where 0 indicates exclusion, 1 indicates inclusion, and ? is undecided. This representation has been widely used [Zhang et al., 2023, Ahn et al., 2020].
We evaluate performance using two metrics: Average sampling: We report the performance of our algorithm, run once, averaging over 20 random seeds. To improve performance under this metric, we propose an Incremental Confidence Level technique that enhances confident decision-making from GFlowNet, illustrated in Figure 3. Instead of allowing GFlowNet to select vertices across the entire graph in one pass, we perform multiple passes and only commit to the consensus decisions via majority voting. The -
undecided region of the graph goes through the same process again, until all vertices in the treewidth modulator are committed. Best-of-N: We report the best performance recorded over N runs. To improve performance under this metric, we propose a Randomized Deferral technique that promotes sampling diversity, illustrated in Figure 4. Again, GFlowNet is not used to make one-shot decisions across the whole graph. After each run, we randomly uncommit a subset of decisions. Same as above, the uncommit-
ted graph region goes through the process again, until all vertices in the treewidth modulator are committed.
5

arXiv Template A PREPRINT
GFlowNet
??????? 1001010 0100100 1010001
...
1 ? ? 1? 1 ?
Figure 3: Incremental confidence level: the process begins with a fully undecided graph state {?}|V |. GFlowNet generates multiple samples, from which consensus decisions via majority voting are committed. The resulting state then seeds the next rollout.
GFlowNet
??????? 1001010 1??1?1?
✗
✗
Figure 4: Randomized deferral: the process starts from a fully undecided graph state {?}|V |. Once a trajectory is complete, some decided vertices are randomly reverted back to ‘?’; if an 1-vertex is reverted, its neighbors are also reset to ‘?’. The resulting reverted state then seeds the next rollout.
4 Experiments
We evaluate how N-FPT improves solution quality and generalization. For solution quality, we compare the standalone GFlowNet and our proposed N-FPT (GFlowNet+TDPA). We separately analyze the contributions of incremental confidence and randomized deferral to both standalone GFlowNet and N-FPT, reporting results on both average and best-of-N sampling. For generalization, we examine shifts in graph sizes, graph distributions, and graph classes.
Configurations. Our dataset includes graphs generated from four well-established models: Erdo ̋s–Rényi (ER) [Erdös and Rényi, 1959], Barabási–Albert (BA) [Barabási and Albert, 1999], Watts–Strogatz (WS) [Watts and Strogatz, 1998] and random regular model (RR) [Steger and Wormald, 1999] — commonly used in previous work [Ahn et al., 2020, Sun and Yang, 2023, Zhang et al., 2023]. Each model is instantiated under settings: small sparse (SS), small dense (SD), large sparse (LS) and large dense (LD). Fo-
r each configuration, we generate 100 training and 100 testing graphs using distinct random seeds. A full breakdown is provided in Table 8 in Appendix B.2. GUROBI is included as a reference point for its strong performance and broad applicability to CO tasks [Mittelmann, 2020]. Experiments are run with 60s and 600s using a single thread. Unlike prior work [Li et al., 2018, Qiu et al., 2022, Sun and Yang, 2023, Yu et al., 2024], which discards unfinished runs, we report GUROBI’S best incumbent solu-
tions when it exceeds the time limit. GUROBI results are averaged over 10 runs with different random seeds. For neural model training, we follow the prior work [Zhang et al., 2023] with tweaks on model structure and training parameters. See B.4 for the detail.
Results & Analysis. To clarify the contribution of each technique, we first analyze the individual enhancements from different techniques. We use +Tdpa to represent the results from GFlowNet+TDPA. For Incremental confidence level, +Icl refers to its direct integration on GFlowNet and IT refers to the full integration GFlowNet+Icl+TDPA. Similarly, for Randomized deferral, +Rd refers to its direct integration on GFlowNet and +RT refers to the full integration GFlowNet+Rd+TDPA.
To evaluate solution quality, we follow prior work by using best-of-20 sampling, and further extend the evaluation to include average sampling results. +Icl is designed to improve average-case results, while +Rd aims to improve the
6

arXiv Template A PREPRINT
Table 1: Results on WS graphs. The optimal gap is computed as 1 − x
OPT , where x is the obtained solution and OPT is
the best available solution (marked with ∗). The table shows both the average and best-of-N sampling results. Arrows indicate the direction of preferred value changes.
METHOD SS SD LS LD
SIZE ↑ GAP% ↓ SIZE ↑GAP% ↓ SIZE ↑ GAP% ↓ SIZE ↑ GAP% ↓
GUROBI(60S) 133.79 0.00 94.43 0.02 197.74 0.01 138.64 0.23 *GUROBI(600S)133.79 0.00 94.45 0.00 197.75 0.00 138.96 0.00
AVG.
GFLOWNET 122.45 8.48 81.57 13.64 181.87 8.03 121.75 12.38 +TDPA 123.86 7.42 82.44 12.72 183.49 7.21 122.58 11.79 +ICL 124.10 7.25 82.64 12.51 184.08 6.91 123.40 11.20 +IT 125.09 6.50 83.44 11.65 185.31 6.29 124.10 10.69
BESTOFN
GFLOWNET 125.06 6.52 84.43 10.61 184.86 6.52 125.56 9.64 +TDPA 126.30 5.60 85.14 9.86 186.30 5.79 126.28 9.12 +RD 127.52 4.68 85.59 9.38 188.42 4.72 126.96 8.64 +RT 128.32 4.09 86.31 8.61 189.26 4.29 127.63 8.16
Table 2: REG graph results, following Table 1 settings.
METHOD SS SD LS LD
SIZE ↑ GAP% ↓ SIZE ↑ GAP% ↓ SIZE ↑ GAP% ↓ SIZE ↑ GAP% ↓
GUROBI(60S) 280.29 3.31 170.84 2.39 358.03 4.69 216.68 4.09 *GUROBI(600S)289.90 0.00 175.03 0.00 375.64 0.00 225.93 0.00
AVG.
GFLOWNET 286.46 1.19 170.40 2.65 372.55 0.82 221.34 2.03 +TDPA 286.55 1.16 170.41 2.64 372.65 0.80 221.35 2.03 +ICL 286.77 1.08 171.70 1.90 372.79 0.76 221.32 2.04 +IT 286.86 1.05 171.71 1.90 372.88 0.73 221.34 2.03
BESTOFN
GFLOWNET 290.55 -0.22 174.67 0.21 377.22 -0.42 226.23 -0.13 +TDPA 290.63 -0.25 174.68 0.20 377.35 -0.46 226.25 -0.14 +RD 293.88 -1.37 176.96 -1.10 381.74 -1.62 228.67 -1.21 +RT 293.90 -1.38 176.96 -1.10 381.78 -1.63 228.68 -1.22
best-of-N sampling results due to its diversity nature. For generalization, we conduct cross-size and out-of-distribution experiments on inter-class and intra-class graph families, respectively. In intra-class settings, models are trained on two structurally contrasting configurations (SS and LD) and evaluated on other settings within the same class. For inter-class evaluation, models trained on one chosen class are applied to others. For each target class, we perform testing across all of its int-
ra-class configurations to ensure comprehensive coverage. These experiments are intended to show that our algorithm yields superior generalization, even compared to models trained exclusively for the target configurations.
Average sampling Improvements Under average sampling, GFlowNet is more sensitive to changes in graph distribution than in graph sizes. Across all reported tables, dense datasets tend to produce a larger optimal gap than sparse ones, indicating a higher difficulty for GFlowNet. In its standalone form with TDPA, the model sees only modest improvements. It is because its stochastic sampling process can produce ‘bad’ trajectories. In contrast, the addition of +Icl and +IT provides substantial improvem-
ents, as the majority voting mechanism consolidates the confidence of decision made at each step. GFlowNet already performs well on certain graph types such as HK and BA graphs. Nonetheless, our approach is still able to offer additional gains, often reducing the optimality gap to near zero. Remarkably, these average case inference-time improvements are highly competitive to those made by neural model-level innovations in prior work [Zhang et al., 2023, Yu et al., 2024]. Another observation relate-
s to TDPA is that its efficacy is more pronounced in sparse graphs. This is because treewidth tends to increase drastically as the graph becomes denser, resulting the hard parts dominating the graph. Nonetheless, TDPA still offers improved solutions in these challenging cases.
7

arXiv Template A PREPRINT
Best-of-N Improvements Best-of-N sampling leads to further performance improvements beyond those achieved through average sampling. By applying +Rd, we obtain more diverse trajectory exploration. As indicated in the evaluation tables, +Rd frequently delivers a noticeable incremental gain over the best-of-N results obtained from standalone GFlowNet, including those augmented with TDPA. In sparse settings, despite GFlowNet already achieving near-optimal solutions, +Rd still manages to tighten the op-
timal gap, while in dense settings, the advantages of +Rd and +RT are more pronounced: in four out of five tables, +Rd and +RT reduce the optimal gap to under 1%. Moreover, on ER and Reg, +Rd and +RT demonstrate better solution quality than Gurobi across all tested configurations, which is a challenging task even for neural model-level innovations. One exception is observed in ER graphs, where +Rd slightly underperforms relative to GFlowNet with TDPA. This behavior is attributed to the fact that +-
Rd may discard some promising trajectories after randomly deferring the states if the original trajectories, found by GFlowNet and calibrated by TDPA, are already high-quality local optimum, where neighboring solutions are typically worse — a scenario that rarely occurs. Nevertheless, since TDPA integration is able to retrieve such optimal solutions, the efficacy of +Rd remains uncompromised.
Generalization Analysis. We discuss the generalization of intra-class and inter-class. Each scenario employs a baseline model — a GFlowNet trained exclusively for the testing configuration. For instance, when evaluating the small sparse WS dataset, the baseline is the GFlowNet trained solely on that configuration. For intra-class, within each graph class, we train GFlowNets on SS and LD configurations, and test against the ones trained exclusively on each configuration. For inter-class, we train G-
FlowNets on a chosen graph class with SS and LD as training configurations, then test against the aforementioned baselines from other graph classes. In intra-class experiments, each plot is titled using format (·)(·)5, e.g., (ws)(ss) denotes a model trained on small sparse WS graphs and evaluated on the SS, SD, LS, and LD of WS. In inter-class experiments, we use the format (xx)(xx)-(xx), e.g., (ws)(ss)-(ba) refers to training on small sparse WS and testing on BA with every configuration.
SS
SD
LS
LD
0.04
0.02
0.00
0.02
wsss
SS
SD
LS
LD
0.05
0.04
0.03
0.02
0.01
0.00
0.01
hkss
SS
SD
LS
LD
0.125
0.100
0.075
0.050
0.025
0.000
bass
SS
SD
LS
LD
0.02
0.01
0.00
0.01
0.02
0.03
wsld
SS
SD
LS
LD
0.000
0.005
0.010
0.015
0.020
hkld
SS
SD
LS
LD
0.000
0.005
0.010
0.015
0.020
bald
Graph Classes
Opt. Gap
GFlowNet +Tdpa +Icl +IT
Figure 5: Results for intra-class generalization. We report the relative performance using B
A − 1, where A is the result
for the baseline GFlowNet, and B is the result of compound methods, as specified by the legend. Higher values indicate greater gains, emphasizing improved generalization.
5Parentheses mark format, omitted in diagrams.
8

arXiv Template A PREPRINT
From Fig.5, with the similar distribution, GFlowNet can generalize to instances with different sizes. Concretely, GFlowNet trained on SS deliver near-optimal performance on SS and LS, while trained on LD performs well on SD and LD. Conversely, the performance of GFlowNet drops drastically when the distribution is largely changed. For instance, across all six bar charts, models trained on SS witness performance degradation compared with the baselines on SD and LD. With +Tdpa, the solution quality s-
hows improvements, which are further amplified by +Rd and +RT. Focus on SS-trained models (first row), the addition of +Rd and +RT remarks the leading performance on SS configurations. On the dense configurations, the observed performance degradation in standalone GFlowNet is mostly alleviated by +Rd and +RT. In certain cases, our methods even surpass the models exclusively trained on those dense configurations, e.g., SD in wsss; SD in hkss; SS in wsld and SS in hkld. For LD-trained models (second-
 row), we witness the similar trend. These results clearly supports the efficacy of our framework in improving intra-class generalization.
SS
SD
LS
LD
0.00
0.02
0.04
0.06
hkss-ba
SS
SD
LS
LD
0.00
0.05
0.10
0.15
hkss-er
SS
SD
LS
LD
0.02
0.00
0.02
0.04
hkss-ws
SS
SD
LS
LD
0.005
0.000
0.005
0.010
hkss-reg
SS
SD
LS
LD
0.025
0.020
0.015
0.010
0.005
0.000
hkld-ba
SS
SD
LS
LD
0.02
0.00
0.02
0.04
hkld-er
SS
SD
LS
LD
0.03
0.02
0.01
0.00
0.01
0.02
hkld-ws
SS
SD
LS
LD
0.005
0.000
0.005
0.010
hkld-reg
Graph Classes
Opt. Gap
GFlowNet +Tdpa +Rd +RT
Figure 6: Results for inter-class generalization, trained on HK graphs. We report the relative performance using 1 − B
A,
where A is the best-of-N result of the baseline GFlowNet, and B is the best-of-N result of compound methods, as specified by the legend. Lower values indicate greater gains emphasizing improved inter-class generalization.
For inter-class experiments depicted in Fig. 6, our framework consistently delivers substantial improvements across graph classes with markedly different distributions. It is worth noting that GFlowNet, as a generative model, is able to learn stochastic sampling policy, proportional to the target objective. Thus, it has intrinsically stronger generalization than other machine learning models due to this nature. Nonetheless, our framework demonstrates even stronger performance than the intra-class -
experiment. In Fig. 6, all eight plots illustrate the enhanced outcomes from +Rd and +RT, with gains exceeding those observed in the intra-class results. In the first row, trained on SS of HK graphs, standalone GFlowNet performs marginally on SS of BA, and fares even worse on remaining cases. However, +Rd and +RT not only close the optimal gap, but often exceed models that were directly optimized for the target graph class. A similar pattern emerges in the second row for models trained on LD of HK-
, further validating the superior generalization ability.
Further outcomes for inter-class generalization are presented as Fig. 8 and Fig. 7, respectively. Beyond the discussed improvements, we observe that models trained on REG graphs establish a weaker generalization on other graph classes, comparing with the outcomes in Fig. 6. This behavior likely results from the special structure of random regular graphs, i.e., same degree for all vertices, which differentiate them from other graph classes. Therefore, learned heuristics from regular graphs may not -
efficiently work on other types of graphs such as ER graphs. The second rows in both figures,
9

arXiv Template A PREPRINT
Figure 7: Inter-class results (Reg-trained, Fig. 6 settings).
SS
SD
LS
LD
0.00
0.05
0.10
0.15
0.20
0.25
regss-ba
SS
SD
LS
LD
0.00
0.05
0.10
0.15
0.20
regss-er
SS
SD
LS
LD
0.000
0.025
0.050
0.075
0.100
0.125
0.150
regss-ws
SS
SD
LS
LD
0.00
0.05
0.10
0.15
0.20
0.25
0.30 regss-hk
SS
SD
LS
LD
0.00
0.05
0.10
0.15
0.20
0.25
regld-ba
SS
SD
LS
LD
0.00
0.05
0.10
0.15
0.20
regld-er
SS
SD
LS
LD
0.00
0.01
0.02
0.03
0.04
0.05 regld-ws
SS
SD
LS
LD
0.00
0.05
0.10
0.15
0.20
0.25
regld-hk
Graph Classes
Opt. Gap
GFlowNet +Tdpa +Rd +RT
i.e., models trained on LD configurations, are not expected to consistently deliver higher or lower SD and LD bars relative to SS and LS. This is because the comparisons are made against models trained exclusively for the specific target graph class and for the specific configuration, highlighting relative rather than absolute performance.
To conclude, our framework significantly enhances generalization and offers practical performance gains for neural solvers for CO. With TDPA, our framework can exactly nail the best achievable solution quality in each inference run, underscoring a level of reliability on solution quality which cannot be provided by neural solvers alone.
Table 3: MVC REG graphs results under Table 1 settings. For MVC, the optimal gap is computed as x
OP T − 1.
METHOD SS SD LS LD
SIZE ↓ GAP% ↓ SIZE ↓ GAP% ↓ SIZE ↓ GAP% ↓ SIZE ↓ GAP% ↓
GUROBI(60S) 566.33 1.47 678.80 0.50 743.05 2.35 885.11 0.94 *GUROBI(600S)558.10 0.00 675.45 0.00 725.96 0.00 876.85 0.00
AVG.
GFLOWNET 561.59 0.62 680.14 0.70 729.77 0.52 881.69 0.55 +TDPA 561.50 0.61 680.13 0.69 729.67 0.51 881.68 0.55 +ICL 561.28 0.57 680.08 0.69 729.53 0.49 881.71 0.55 +IT 561.19 0.55 680.07 0.68 729.44 0.48 881.69 0.55
BESTOFN
GFLOWNET 557.50 -0.11 675.87 0.06 725.10 -0.12 876.80 -0.01 +TDPA 557.42 -0.12 675.86 0.06 724.97 -0.14 876.78 -0.01 +RD 554.17 -0.71 673.58 -0.28 720.58 -0.74 874.36 -0.28 +RT 554.15 -0.71 673.58 -0.28 720.54 -0.75 874.35 -0.29
More Results on Other CO problems Additionally, we apply the proposed framework to MAX-CUT (MC) and minimum vertex cover (MVC). In Table 3, we intend to demonstrate that our framework is also capable to handle
10

arXiv Template A PREPRINT
Figure 8: Inter-class results (WS-trained, Fig. 6 settings).
SS
SD
LS
LD
0.00
0.02
0.04
0.06
0.08
0.10
0.12
wsss-ba
SS
SD
LS
LD
0.000
0.025
0.050
0.075
0.100
0.125
0.150
wsss-er
SS
SD
LS
LD
0.00
0.02
0.04
0.06
0.08
0.10
0.12
wsss-hk
SS
SD
LS
LD
0.00
0.01
0.02
0.03
wsss-reg
SS
SD
LS
LD
0.000
0.025
0.050
0.075
0.100
0.125
0.150
wsld-ba
SS
SD
LS
LD
0.00
0.05
0.10
0.15
wsld-er
SS
SD
LS
LD
0.00
0.02
0.04
0.06
0.08
0.10
0.12
wsld-hk
SS
SD
LS
LD
0.00
0.01
0.02
0.03
0.04
wsld-reg
Graph Classes
Opt. Gap
GFlowNet +Tdpa +Rd +RT
the graph CO problems where the goal is minimization. Compared with Table 2, we observe similar consistent enhancements, with +IT and +RT offer the best results on their sampling categories. In Table 4, we show the results
Table 4: MAX-CUT REG graph results under Table 1 settings.
METHOD SS SD LS LD
SIZE ↑ GAP% ↓ SIZE ↑ GAP% ↓ SIZE ↑ GAP% ↓ SIZE ↑ GAP% ↓
GUROBI(60S) 2006.10 0.00 4644.71 0.00 2601.79 0.00 6006.83 0.00 *GUROBI(600S)2006.15 0.00 4644.71 0.00 2601.82 0.00 6006.83 0.00
AVG.
GFLOWNET 1944.50 3.07 4458.06 4.02 2582.00 0.76 5767.26 3.99 +TDPA 1967.72 1.92 4474.58 3.66 2587.64 0.55 5792.78 3.56 +ICL 1987.99 0.91 4476.55 3.62 2605.94 -0.16 5803.34 3.39 +IT 1996.30 0.49 4490.85 3.31 2608.50 -0.26 5824.44 3.04
BESTOFN
GFLOWNET 1963.73 2.11 4492.65 3.27 2601.64 0.01 5804.41 3.37 +TDPA 1986.51 0.98 4509.91 2.90 2606.80 -0.19 5830.97 2.93 +RD 1997.87 0.41 4531.70 2.43 2614.55 -0.49 5877.23 2.16 +RT 2007.57 -0.07 4544.66 2.15 2618.95 -0.66 5894.62 1.87
for MC in terms of the solution quality. Compared with the presented results from tables for MIS (See Tables 5, 6, 7 in the Appendix for more results), the observed improvements are even stronger on solving MC. Across all datasets, consistent solution quality improvements are established by +Icl, +IT for average sampling and +Rd, +RT for best-of-N sampling. Importantly, not just the best-of-N sampling results surpass the Gurobi’s, the average sampling results also outperform Gurobi on the LS datas-
et. Different from solving MIS and MVC, we notice a frozen progress for the two settings of Gurobi. Based on our experiments, for MC, with the default settings, Gurobi is hard to make big improvements within 10 minutes, which is a sufficient amount of time budget for a single graph instance in reality. With the empirical evidence from various CO problems, our framework is not problem-specific, and further confirms its broad applicability.
11

arXiv Template A PREPRINT
References
Dinghuai Zhang, Hanjun Dai, Nikolay Malkin, Aaron Courville, Yoshua Bengio, and Ling Pan. Let the flows tell: Solving graph combinatorial optimization problems with gflownets, 2023. URL https://arxiv.org/abs/2305. 17010.
Marek Cygan, F. Fomin, Lukasz Kowalik, Daniel Lokshtanov, Dániel Marx, Marcin Pilipczuk, Michal Pilipczuk, and Saket Saurabh. Parameterized algorithms. In Beyond the Worst-Case Analysis of Algorithms, 2020. URL https://api.semanticscholar.org/CorpusID:19436693.
Fedor V Fomin, Daniel Lokshtanov, Saket Saurabh, and Meirav Zehavi. Kernelization: theory of parameterized preprocessing. Cambridge University Press, 2019.
Rodney G Downey, Michael R Fellows, and Ulrike Stege. Parameterized complexity: A framework for systematically confronting computational intractability. Contemporary Trends in Discrete Mathematics, 49:49–99, 1997.
Bruno Courcelle. The monadic second-order logic of graphs. i. recognizable sets of finite graphs. Inf. Comput., 85: 12–75, 1990. URL https://api.semanticscholar.org/CorpusID:14435655.
Marek Cygan, Daniel Lokshtanov, Marcin Pilipczuk, Michał Pilipczuk, and Saket Saurabh. On the hardness of losing width. Theory of Computing Systems, 54:73–82, 2014.
Manish Purohit, Zoya Svitkina, and Ravi Kumar. Improving online algorithms via ml predictions. Advances in Neural Information Processing Systems, 31, 2018.
Sami Davies, Benjamin Moseley, Sergei Vassilvitskii, and Yuyan Wang. Predictive flows for faster ford-fulkerson. In International Conference on Machine Learning, pages 7231–7248. PMLR, 2023.
Vladimir Braverman, Prathamesh Dharangutte, Vihan Shah, and Chen Wang. Learning-Augmented Maximum Independent Set. In Amit Kumar and Noga Ron-Zewi, editors, Approximation, Randomization, and Combinatorial Optimization. Algorithms and Techniques (APPROX/RANDOM 2024), volume 317 of Leibniz International Proceedings in Informatics (LIPIcs), pages 24:1–24:18, Dagstuhl, Germany, 2024. Schloss Dagstuhl – LeibnizZentrum für Informatik. ISBN 978-3-95977-348-5. doi:10.4230/LIPIcs.APPROX/RANDOM.2024.24. URL-
 https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.APPROX/RANDOM.2024.24.
Vincent Cohen-Addad, Tommaso d’Orsi, Anupam Gupta, Euiwoong Lee, and Debmalya Panigrahi. Max-cut with ε-accurate predictions, 2024. URL https://arxiv.org/abs/2402.18263.
Emmanuel Bengio, Moksh Jain, Maksym Korablyov, Doina Precup, and Yoshua Bengio. Flow network based generative models for non-iterative diverse candidate generation. Advances in Neural Information Processing Systems, 34: 27381–27394, 2021.
Yoshua Bengio, Salem Lahlou, Tristan Deleu, Edward J. Hu, Mo Tiwari, and Emmanuel Bengio. Gflownet foundations, 2023. URL https://arxiv.org/abs/2111.09266.
Nikolay Malkin, Moksh Jain, Emmanuel Bengio, Chen Sun, and Yoshua Bengio. Trajectory balance: Improved credit assignment in gflownets. Advances in Neural Information Processing Systems, 35:5955–5967, 2022.
Kanika Madan, Jarrid Rector-Brooks, Maksym Korablyov, Emmanuel Bengio, Moksh Jain, Andrei Cristian Nica, Tom Bosc, Yoshua Bengio, and Nikolay Malkin. Learning gflownets from partial episodes for improved convergence and stability. In International Conference on Machine Learning, pages 23467–23483. PMLR, 2023.
Ling Pan, Nikolay Malkin, Dinghuai Zhang, and Yoshua Bengio. Better training of gflownets with local credit and incomplete trajectories. In International Conference on Machine Learning, pages 26878–26890. PMLR, 2023.
Neil Robertson and Paul D Seymour. Graph minors. iii. planar tree-width. Journal of Combinatorial Theory, Series B, 36(1):49–64, 1984.
Sungsoo Ahn, Younggyo Seo, and Jinwoo Shin. Learning what to defer for maximum independent sets. ArXiv, abs/2006.09607, 2020. URL https://api.semanticscholar.org/CorpusID:219721048.
P Erdös and A Rényi. On random graphs i. Publ. math. debrecen, 6(290-297):18, 1959.
Albert-László Barabási and Réka Albert. Emergence of scaling in random networks. science, 286(5439):509–512, 1999.
Duncan J Watts and Steven H Strogatz. Collective dynamics of small-world networks. nature, 393(6684):440–442, 1998.
Angelika Steger and Nicholas C Wormald. Generating random regular graphs quickly. Combinatorics, Probability and Computing, 8(4):377–396, 1999.
Zhiqing Sun and Yiming Yang. Difusco: Graph-based diffusion solvers for combinatorial optimization. Advances in neural information processing systems, 36:3706–3731, 2023.
12

arXiv Template A PREPRINT
Hans D Mittelmann. Benchmarking optimization software-a (hi) story. In SN operations research forum, volume 1, page 2. Springer, 2020.
Zhuwen Li, Qifeng Chen, and Vladlen Koltun. Combinatorial optimization with graph convolutional networks and guided tree search. Advances in neural information processing systems, 31, 2018.
Ruizhong Qiu, Zhiqing Sun, and Yiming Yang. Dimes: A differentiable meta solver for combinatorial optimization problems. Advances in Neural Information Processing Systems, 35:25531–25546, 2022.
Kexiong Yu, Hang Zhao, Yuhang Huang, Renjiao Yi, Kai Xu, and Chenyang Zhu. Disco: Efficient diffusion solver for large-scale combinatorial optimization problems. arXiv preprint arXiv:2406.19705, 2024.
Aric A. Hagberg, Daniel A. Schult, and Pieter J. Swart. Exploring network structure, dynamics, and function using networkx. In Gaël Varoquaux, Travis Vaught, and Jarrod Millman, editors, Proceedings of the 7th Python in Science Conference, pages 11 – 15, Pasadena, CA USA, 2008.
NetworkX. Networkx: Software for complex networks. URL https://networkx.org/.
Stefan Arnborg, Derek G Corneil, and Andrzej Proskurowski. Complexity of finding embeddings in ak-tree. SIAM Journal on Algebraic Discrete Methods, 8(2):277–284, 1987.
Max Bannach, Sebastian Berndt, and Thorsten Ehlers. Jdrasil: A modular library for computing tree decompositions. In The Sea, 2017. URL https://api.semanticscholar.org/CorpusID:20171034.
Mihalis Yannakakis. Computing the minimum fill-in is np-complete. SIAM Journal on Algebraic Discrete Methods, 2 (1):77–79, 1981.
Vibhav Gogate and Rina Dechter. A complete anytime algorithm for treewidth. arXiv preprint arXiv:1207.4109, 2012.
Bertrand Marchand, Yannick Ponty, and Laurent Bulteau. Tree diet: reducing the treewidth to unlock fpt algorithms in rna bioinformatics. Algorithms for Molecular Biology : AMB, 17, 2021. URL https://api.semanticscholar. org/CorpusID:234349139.
Martin J. A. Schuetz, J. Kyle Brubaker, and Helmut G. Katzgraber. Combinatorial optimization with physicsinspired graph neural networks. Nature Machine Intelligence, 4(4):367–377, April 2022. ISSN 2522-5839. doi:10.1038/s42256-022-00468-6. URL http://dx.doi.org/10.1038/s42256-022-00468-6.
Maxime Gasse, Didier Chételat, Nicola Ferroni, Laurent Charlin, and Andrea Lodi. Exact combinatorial optimization with graph convolutional neural networks. Advances in neural information processing systems, 32, 2019.
Rui Wang, Zhiming Zhou, Tao Zhang, Ling Wang, Xin Xu, Xiangke Liao, and Kaiwen Li. Learning to branch in combinatorial optimization with graph pointer networks, 2023. URL https://arxiv.org/abs/2307.01434.
Oriol Vinyals, Meire Fortunato, and Navdeep Jaitly. Pointer networks. Advances in neural information processing systems, 28, 2015.
Wouter Kool, Herke Van Hoof, and Max Welling. Attention, learn to solve routing problems! arXiv preprint arXiv:1803.08475, 2018.
Sebastian Sanokowski, Sepp Hochreiter, and Sebastian Lehner. A diffusion model framework for unsupervised neural combinatorial optimization. arXiv preprint arXiv:2406.01661, 2024.
Qingyu Han, Linxin Yang, Qian Chen, Xiang Zhou, Dong Zhang, Akang Wang, Ruoyu Sun, and Xiaodong Luo. A gnn-guided predict-and-search framework for mixed-integer linear programming. arXiv preprint arXiv:2302.05636, 2023.
Zhang-Hua Fu, Kai-Bin Qiu, and Hongyuan Zha. Generalize a small pre-trained model to arbitrarily large tsp instances. In Proceedings of the AAAI conference on artificial intelligence, volume 35, pages 7474–7482, 2021.
Maria Chiara Angelini and Federico Ricci-Tersenghi. Modern graph neural networks do worse than classical greedy algorithms in solving combinatorial optimization problems like maximum independent set. Nature Machine Intelligence, 5:29–31, 2022. URL https://api.semanticscholar.org/CorpusID:255334275.
David Gamarnik. Barriers for the performance of graph neural networks (gnn) in discrete random structures. Proceedings of the National Academy of Sciences of the United States of America, 120, 2023. URL https: //api.semanticscholar.org/CorpusID:265042294.
Elias Khalil, Hanjun Dai, Yuyu Zhang, Bistra Dilkina, and Le Song. Learning combinatorial optimization algorithms over graphs. Advances in neural information processing systems, 30, 2017.
Irwan Bello, Hieu Pham, Quoc V Le, Mohammad Norouzi, and Samy Bengio. Neural combinatorial optimization with reinforcement learning. arXiv preprint arXiv:1611.09940, 2016.
13

arXiv Template A PREPRINT
Shengyu Zhu, Ignavier Ng, and Zhitang Chen. Causal discovery with reinforcement learning. arXiv preprint arXiv:1906.04477, 2019.
Skander Moalla, Andrea Miele, Daniil Pyatko, Razvan Pascanu, and Caglar Gulcehre. No representation, no trust: connecting representation, collapse, and trust issues in ppo. arXiv preprint arXiv:2405.00662, 2024.
Richard Stuart Sutton. Temporal credit assignment in reinforcement learning. University of Massachusetts Amherst, 1984.
Umberto Bertele and Francesco Brioschi. On non-serial dynamic programming. J. Comb. Theory, Ser. A, 14(2):137–148, 1973.
Rudolf Halin. S-functions for graphs. Journal of geometry, 8:171–186, 1976.
Dimitrios M Thilikos, Maria Serna, and Hans L Bodlaender. Cutwidth i: A linear time fixed parameter algorithm. Journal of Algorithms, 56(1):1–24, 2005.
Yinhao Dong, Pan Peng, and Ali Vakilian. Learning-augmented streaming algorithms for approximating max-cut, 2025. URL https://arxiv.org/abs/2412.09773.
Yongho Shin, Changyeol Lee, Gukryeol Lee, and Hyung-Chan An. Improved learning-augmented algorithms for the multi-option ski rental problem via best-possible competitive analysis. In International Conference on Machine Learning, pages 31539–31561. PMLR, 2023.
Michael Dinitz, Sungjin Im, Thomas Lavastida, Benjamin Moseley, and Sergei Vassilvitskii. Algorithms with prediction portfolios. Advances in neural information processing systems, 35:20273–20286, 2022.
14

arXiv Template A PREPRINT
A Further Results
In this section, we present additional experimental results, including extended evaluations on solution quality, generalization, and time efficiency, together with in-depth analytical discussions.
A.1 More Results on Solution Quality
We present results on three additional datasets — ER, HK and BA. Consistent with the findings demonstrated in the main paper, both average and best-of-N sampling demonstrate performance improvements, as shown in the accompanying tables. Rather than reiterating the previously discussed advantages, we now turn to a finer-grained analysis of specific outcomes.
Table 5: Results on ER graphs. Experiment settings follow Table 1.
METHOD SS SD LS LD
SIZE ↑ GAP% ↓ SIZE ↑GAP% ↓ SIZE ↑ GAP% ↓ SIZE ↑GAP% ↓
GUROBI(60S) 137.19 2.36 64.76 3.52 142.88 7.91 64.03 11.73 *GUROBI(600S)140.51 0.00 67.12 0.00 155.16 0.00 72.54 0.00
AVG
GFLOWNET 133.96 4.66 63.42 5.51 150.62 2.93 71.19 1.86 +TDPA 134.17 4.51 63.47 5.44 150.72 2.86 71.20 1.85 +ICL 136.78 2.65 64.17 4.40 154.17 0.64 71.80 1.02 +IT 136.95 2.53 64.22 4.32 154.25 0.59 71.80 1.02
BESTOFN
GFLOWNET 137.53 2.12 66.53 0.88 154.73 0.28 74.16 -2.23 +TDPA 137.74 1.97 66.57 0.82 154.80 0.23 74.16 -2.23 +RD 139.78 0.52 66.77 0.52 156.80 -1.06 73.84 -1.79 +RT 139.91 0.43 66.80 0.48 156.86 -1.10 73.85 -1.81
Table 6: Results on HK graphs. Experiment settings follow Table 1.
METHOD SS SD LS LD
SIZE ↑ GAP% ↓ SIZE ↑ GAP% ↓ SIZE ↑ GAP% ↓ SIZE ↑ GAP% ↓
GUROBI(60S) 332.69 0.00 225.52 0.80 488.54 0.01 327.94 1.36 *GUROBI(600S)332.70 0.00 227.33 0.00 488.57 0.00 332.47 0.00
AVG.
GFLOWNET 331.74 0.29 219.89 3.27 486.20 0.49 323.81 2.61 +TDPA 331.83 0.26 221.30 2.65 486.80 0.36 325.14 2.20 +ICL 331.99 0.21 222.12 2.29 487.04 0.31 326.59 1.77 +IT 332.05 0.19 222.96 1.92 487.33 0.25 327.24 1.57
BESTOFN
GFLOWNET 332.10 0.18 221.98 2.35 486.97 0.33 326.33 1.85 +TDPA 332.16 0.16 223.32 1.76 487.45 0.23 327.53 1.49 +RD 332.56 0.04 226.20 0.50 488.30 0.06 331.02 0.44 +RT 332.57 0.04 226.37 0.42 488.30 0.05 331.23 0.38
In Table 5, the results on +Rd and +RT for LD show a marginal decline compared with the original GFlowNet with TDPA. This is attributed to the stochastic nature of randomized deferral. Specifically, when we apply randomized deferral, there exists theoretical probability that GFlowNet is luckily completing a trajectory to a favorable local optimum. Despite this event rarely happens, if it does, random deferral will potentially interrupt this ‘lucky’ trajectory and steer it toward another unfavorabl-
e trajectory. However, such coincidence will not bring credits to the standalone neural solver, as there is no systematic approach to consistently reproduce this behavior. Importantly, in the solution space, if better local optimum lies within the grasp of random deferral, our framework can surely capture it and deliver the enhancement. Nonetheless, in both cases, N-FPT consistently captures the current best trajectory and reliably extends it to the best achievable solutions via TDPA.
15

arXiv Template A PREPRINT
Table 7: Results on BA graphs. Experiment settings follow Table 1.
METHOD SS SD LS LD
SIZE ↑ GAP% ↓ SIZE ↑ GAP% ↓ SIZE ↑ GAP% ↓ SIZE ↑ GAP% ↓
GUROBI(60S) 408.10 0.00 182.61 1.66 601.55 0.00 264.69 2.94 *GUROBI(600S)408.10 0.00 185.69 0.00 601.55 0.00 272.70 0.00
AVG.
GFLOWNET 408.02 0.02 177.18 4.58 601.50 0.01 261.50 4.11 +TDPA 408.02 0.02 178.20 4.03 601.50 0.01 262.92 3.59 +ICL 408.04 0.01 180.43 2.83 601.51 0.01 265.80 2.53 +IT 408.04 0.01 180.95 2.55 601.51 0.01 266.62 2.23
BESTOFN
GFLOWNET 408.05 0.01 180.09 3.01 601.51 0.01 265.17 2.76 +TDPA 408.05 0.01 181.01 2.52 601.52 0.00 266.44 2.30 +RD 408.09 0.00 183.80 1.02 601.54 0.00 269.77 1.08 +RT 408.09 0.00 184.15 0.83 601.54 0.00 270.28 0.89
B Reproduction Notes
B.1 Hardware
We conducted our experiments on a machine equipped with an Intel(R) Xeon(R) Platinum 8360Y CPU @ 2.40GHz system, using up to 32GB of RAM. Model training and inference took place on a single Nvidia A100-SXM4 GPU. Our hardware specification reported herein is a condensed summary based on the raw outputs of lscpu, lsmem and nvidia-smi.
B.2 More Details on Dataset.
We elaborate the dataset specifications as follows. All graph instances are generated using NetworkX’s [Hagberg et al., 2008] built-in APIs. Each graph class is organized via four categories, where we consider two key factors for each graph instance: graph size, defined by the number of vertices, and graph distribution, determined by other parameters defined in the corresponding generating algorithms. These parameters influence the structure shifts, including but not limited to graph density. To s-
ystematically assess the generalization, we control one variable at a time — fixing graph distribution when evaluating generalization across different sizes, and vice versa. To adopt our usability, we modify the generated graphs by removing self-loops, removing the isolated vertices and making sure the vertex IDs are consecutive integers. The last modification is for implementation purposes and does not affect the experimental results. For each configuration, as detailed in Table 8, the number of -
vertices is sampled uniformly at random from the prescribed range (i.e., the first entry in the ‘Configurations’ column). The notations for the remaining parameters adhere to the conventions used by NetworkX.
B.3 More Details on Problem Formulas and Gurobi.
We clarify the definitions of applied CO problems in our study. For MIS, a valid solution is a subset S ⊆ V such that no two vertices in S share an edge; the objective is to maximize |S|. For MVC, a solution is a subset S ⊆ V such that every edge in E has at least one endpoint in S; the objective is to minimize |S|. For MAX-CUT, the goal is to partition V into two sets S ⊆ V and S′ = V \ S, maximizing the number of edges crossing between them.
We model these problems using appropriate binary formulations as follows: for MIS, we assign ‘1’ for vertices IN the solution set S, and ‘0’ for vertices OUT of the solution set. And we define the MIS as follows:
max
S⊆V |S|
s.t ∀u, v ∈ S, (u, v) ∈/ E.
For MVC, we applied the same status code to determine the vertices are IN or OUT of the final solution. And we define the objective as:
min
S⊆V |S|
s.t ∀(u, v) ∈ E, u ∈ S ∨ v ∈ S.
16

arXiv Template A PREPRINT
Table 8: Table to summarize the dataset configuration details. The notations and symbols in the second column are adopted from NetworkX’s built-in APIs (publicly accessible via NetworkX) and are independent to the notations used elsewhere in this paper. The third column reports the resulting average number of vertices and edges per generated dataset. Datasets Configurations (|V | , |E|)
ERSS [700, 800] , p = 0.03 (748.05, 8408.72) ERSD [700, 800] , p = 0.08 (750.54, 22551.89) ERLS [1000, 1200] , p = 0.03 (1102.32, 18258.46) ERLD [1000, 1200] , p = 0.08 (1103.03, 48750.79) BASS [700, 800] , m = 3 (748.46, 1840.49) BASD [700, 800] , m = 15 (749.43, 10655.76) BALS [1000, 1200] , m = 3 (1101.31, 2702.49) BALD [1000, 1200] , m = 15 (1090.02, 15538.75) WSSS [700, 800] , k = 15, p = 0.1 (748.05, 5236.35) WSSD [700, 800] , k = 25, p = 0.1 (750.54, 9006.48) WSLS [1000, 1200] , k = 15, p =-
 0.1 (1102.32, 7716.24) WSSD [1000, 1200] , k = 25, p = 0.1 (1103.03, 13236.36) REGSS [800, 900] , d = 6 (848.05, 2544.15) REGSD [800, 900] , d = 16 (850.54, 6804.32) REGLS [1000, 1200] , d = 6 (1102.32, 3306.96) REGLD [1000, 1200] , d = 16 (1103.03, 8824.24) HKSS [700, 800] , m ∈ [3, 7] , p = 0.3 (748.46, 3299.16) HKSD [700, 800] , m ∈ [10, 15] , p = 0.3 (746.66, 8743.89) HKLS [1000, 1200] , m ∈ [3, 7] , p = 0.3 (1101.31, 4941.53) HKLD [1000, 1200] , m ∈ [10, 15] , p = 0.3 (1096.27, 13172.38)
Similarly, for MAX-CUT, we applied the same encoding to the vertices to indicate the partition they belong to (‘1’ for one of the two partitions, ‘0’ for the other). We define the cut value δ(S) as the number of edges with endpoints in different partition. The objective is to maximize δ(S), which is:
max
S⊆V |δ(S)|
where δ(S) = {(u, v) ∈ E : (u ∈ S) ⊕ (v ∈ S)} .
B.4 More Details on GFlowNet Training.
We train GFlowNet following prior work [Zhang et al., 2023]. In addition, we make two modifications to improve performance. First, we apply the non-annealing setting during training. Second, we replace the average pooling layer from the original policy network with a sum pooling layer. The previous study limits training to 20 epochs, with convergence often occurring within 5. However, due to the more dynamic and heterogeneous nature of our dataset, and to further investigate the best GFlowNet can -
achieve, we increase the training budget to 50 epochs for each configuration. Models are saved at every epoch, and evaluation is conducted using the model that achieves the best performance. To eliminate the training outliers, we train the model for each configuration using three different random states, and report the average performance metrics across these runs.
B.5 More Details on TD, TM & TDP.
We provide details of the computation of both TD and TM. The precondition of TDP is a valid tree decomposition. As noted in the main paper, the presence of large bags dominates the runtime of TDP. Hence, it is ideal to seek tree decomposition with smaller largest bags, and potentially approaching to minimum treewidth. However, obtaining an optimal treewidth (i.e., optimal tree decomposition) is another well-established NP-hard problem [Arnborg et al., 1987], making it meaningless to look for the o-
ptimal treewidth, especially, when we intend to use it to solve other NP-hard graph CO problems. Thus, we adopt min-degree heuristic to build tree decomposition. Despite its triviality, previous work [Bannach et al., 2017] has demonstrated the surprisingly strong performance with sufficient empirical evidence — particularly in cases where more sophisticated heuristics, such as min fill-in [Yannakakis, 1981], QuickBB [Gogate and Dechter, 2012] are not able to efficiently scale on moderate to large -
scale instances. To describe the procedures of min-degree heuristic, we define the open and close neighbors of a vertex u as N (u) and N [u] as follows: the open neighboring N (u) contains all vertices adjacent to u, whereas N [u] also includes u itself. As shown in Alg. 2, the
17

arXiv Template A PREPRINT
heuristic iteratively selects the vertex u with the smallest degree |N (u)|, and adds fill-in edges to form a clique among its neighbors, i.e.,
E ← E ∪ {(v, w) | v, w ∈ N (u), v ̸= w, (v, w) ∈/ E}
, then removes u, and creates a new bag with vertices {u} ∪ N (u). Second major step in our framework is to look for
Algorithm 2 Min-Degree Heuristic
Require: Input Graph G = (V, E) Ensure: Output a valid TD T 1: Initialize T = ∅ 2: while |V | do
3: Select u ∈ V with minimum degree 4: N (u) ← all neighbors of u 5: Add fill-in edges to form a clique on N (u) 6: Add a new bag B ← {u} ∪ N (u) to T 7: Find an existing bag B′ that N (u) ⊆ B′, add a new edge 8: Remove u from G and all its incident edges 9: return T
TM to a target treewidth value η. Different from looking the exact solutions to TMη, we focus on the problem TM on a given TD. To the best of our knowledge, the only related work is an edge-centric version of the problem proved by [Marchand et al., 2021]. Here, we use mixed-integer linear programming (MILP) to formulate our problem as (1), and solve it exactly as we discover that the practical runtime of the MILP is negligible to the total runtime. In this paper, we do not fine-tune the value of η-
 to achieve better result since it is not the emphasize of this research. We set the target TW 10 for MIS and MVC, while 6 for MAX-CUT. And the results can surely be better with larger η.
min
TMη ⊆V (G)
|TMη| (1)
s.t. ∀t ∈ V (T ), |Xt \ TMη| ≤ η + 1 (2)
In addition, we apply an operation that simplifies tree decomposition while maintaining its validity. We eliminate the proper subset relationships between bags, ensuring that no predecessor bag is a strict superset of any of its successors. The following Fig. 9 illustrates three scenarios where this simplification can be applied. Importantly, the pruning operation preserves the properties required by the definition of tree decomposition. The proof can be easily done according to the definition.
Figure 9: Three examples on bag pruning in tree decomposition. Dashed bags are the ones can be safely removed from TD without breaking the definition if their successors are correctly reconnected.
B.6 More details on N-FPT.
Average Sampling Improvement: Incremental Confidence Level. Once trained, learnable parameters are fixed, GFlowNet delivers stable expected performance regardless of the inputs. At each timestep t, it samples the action from the policy at ∼ π (st). Ideally, the forward policy PF (s′ | s) concentrates probability mass on next state s′ that are likely to land on high-reward trajectories τ , reflecting P ⊤
F (x) ∝ R(X). This results in a sharp preference for the
optimal action, with π(at∗ | s) ≫ π(at | s) for all at ̸= at∗. However, when reward signals are diffuse, e.g., independent sets are similarly sized, the policy predicts probability more uniformly, thus, the model encounters hesitation, leading to
18

arXiv Template A PREPRINT
deviated samplings. To prevent this, as shown in Fig. 3, we apply majority voting over k trajectories as 3. For MIS, the initial state is s0 = {?}|V |, and each trajectory terminates in a feasible solution sj
T ∈ X ⊆ {0, 1}|V |.
D :=



τ (j) = s(j)
0 , s(j)
1 , . . . , s(j)
Tj
j ∈ [k] , s(j)
0 = {?}|V |, s(j)
Tj ∈ X s(j)
t+1 ∼ PF · s(j)
0 , . . . , s(j)
t ∀ t ≤ Tj,



. (3)
These trajectories form a matrix 4, from which we compute a confidence vector v = sX 1, where 1 ∈ Rk is an all-one vector. Each entry vj = Pk
m=1 xm
j indicates the frequency vertex j was assigned the value 1. An indicator function cj = I [vj > κ] selects variables with majority agreement with κ indicates a confidence threshold; otherwise, cj =?. This criterion ensures conflict-free, high-confidence assignments, which are fixed as the subsequent initial state, guiding the model toward more reliable, high-reward trajectories and reduce variance.
sT = {s0
T , s1
T , . . . , sk
T} =

 
x10 x20 . . . x0k
... ... . . . ...
x1
|V | x2
|V | . . . xk
|V |


 (4)
Best-of-N improvement: Randomized Deferral. During autoregressive decoding, the policy network sometimes becomes overly confident in a single action, assigning it significantly higher weight than other available options. This leads to deterministic behavior, reduces inference-time exploration, and negatively impact generalization. To tackle it, we present randomized deferral to enhance sampling diversity. The procedure unfolds as follows: after GFlowNet yields a complete trajectory, we randomly, u-
niformly revert some confirmed vertex states back to the undecided states. For instance, given an output solution vector [0, 1, 1, 0, 1], we revert the second confirmed state back to “?”, along with its neighboring vertices at index 0 and 3 (Here, we assume vertex-0 and vertex-3 are exclusively connected with vertex-2). Then the resulting vector becomes [?, 1, ?, ?, 1], which serves as the initial state for the subsequent rollout. As trajectory diversity increases, the neural policy offers a borde-
r spectrum of action signals. TDP can, therefore, access a wider range of local optima, and expand the exploratory coverage of the solution space. Although random deferral may occasionally lead the model into subspaces where most feasible solutions are far from optimal, TDP can efficiently steer the rest trajectory and nail the best available ones — a capability that standalone neural policies typically lack. Empirical results confirm that this approach indeed improves Best-of-N samplings.
C Practical Runtime Performance
We report empirical runtime results for the two main components of our framework: the neural component and the classical exact component. To calculate the practical runtime for the neural component, we directly reuse the implementation from Zhang et al. [2023], indicating a similar runtime performance, despite the differences in hardware configurations. The classical exact component attracts the major concern in runtime due to its nature of exhaustive search.
Following the prior metrics, we compute runtime per dataset, with each dataset processed in mini-batch. These batches serve as inputs to the training models during evaluation. We present the time consumption of each component separately to show their individual contributions.
Table 9: Time efficiency details: results are presented as per dataset in seconds.
DATASET SS SD LS LD
NEURAL TDPA NEURAL TDPA NEURAL TDPA NEURAL TDPA
REG 95.79 147.48 60.33 39.30 159.04 183.29 102.76 53.54 ER 44.40 43.09 26.14 18.38 71.37 39.52 44.38 21.36 HK 113.52 498.87 78.41 248.59 234.93 776.04 163.07 343.75 BA 128.30 712.77 63.82 134.72 266.63 1335.09 131.62 218.33 WS 49.70 265.10 38.65 165.46 85.82 366.77 57.87 243.94
Another relevant consideration is the time efficiency of building tree decomposition and computing treewidth modulator. In our experiment setup, this preprocessing step takes approximately one second per instance in average. We exclude this cost from all reported runtime results, as (1) it accounts for only a negligible portion of the total runtime, and (2) it lies outside the primary computational pipeline of our framework, serving only at the initialization phase.
19

arXiv Template A PREPRINT
D Related Work
Neural solvers for CO (NCO) Neural solvers for CO span two inference patters. One-shot solvers, including GNN-based neural solvers [Schuetz et al., 2022, Gasse et al., 2019, Wang et al., 2023], attention-based models [Vinyals et al., 2015, Kool et al., 2018] and diffusion models [Sun and Yang, 2023, Sanokowski et al., 2024, Yu et al., 2024], directly output solution in a single or several steps. Some further improve the results via MCTS approaches [Han et al., 2023, Fu et al., 2021]. These are tra-
ined supervised or via handcrafted objectives. They often learn latent representations that enables CO problems to be formulated as a node classification task. Despite strong inference-time performance, solution quality often degrades, especially for GNN-only models [Angelini and Ricci-Tersenghi, 2022, Gamarnik, 2023].
A second approach frames CO as a Markov Decision Process (MDP), making reinforcement learning (RL) a natural option [Khalil et al., 2017, Bello et al., 2016, Ahn et al., 2020]. RL-based neural solvers sequentially complete the solutions through node-level decision-making. These models use different neural architectures as state encoders, such as Transformer [Zhu et al., 2019], GNNs [Li et al., 2018], RNNs [Vinyals et al., 2015], etc. Recent GFlowNets [Bengio et al., 2023, 2021] enhance sampling ab-
ility through flow-based losses [Pan et al., 2023], balancing the quality and diversity as the latest generative models.
RL-based approaches make vertex decisions autoregressively, some models generate multiple decisions simultaneously incorporating carefully modified environments and reward shaping techniques to guide learning. However, RL-based methods suffer well-known policy collapse problem [Moalla et al., 2024], leading directly to credit assignment issues [Sutton, 1984], and undermine the exploration ability. Despite the successes, data-driven models have no worst-case guarantees and struggle with generalizat-
ion, we propose a framework that strategically relies on NCO decisions, ensuring strong inference-time scaling.
Parameterized algorithms (PA) Complexity analysis of graph problems typically relies on input size, i.e., the number of nodes/edges. This often result in NP-hardness, ruling out polynomial time solutions. Yet, alternative parameters may change the intractability [Fomin et al., 2019].Options include optimal solution size, treewidth [Bertele and Brioschi, 1973, Halin, 1976, Robertson and Seymour, 1984], cut-width [Thilikos et al., 2005], etc. The goal of PA is to seek the fixed-parameter tractable s-
olutions with fixating these values. Moreover, structural parameters like treewidth can reveal the which part of the instance contribute most to the computational difficulty.
Learning-augmented algorithms (LA) LAs combine classical algorithm with predictive models (e.g., machine learning models) to exceed worst-case performance barrier. Much of literature focuses on the theoretical aspects of online algorithms [Purohit et al., 2018], though recent ones extend to classic graph CO problems, e.g., Max-Cut [Dong et al., 2025] and independent set [Braverman et al., 2024]. Due to the tight bound with machine learning models, LAs have made strong advancements in practical sce-
narios [Shin et al., 2023, Dinitz et al., 2022]. In the framework of LA, we have the access to a well-trained machine learning model, offering partially trustable answers to the problem instances as advice, upon which classical algorithms then completed the full solution.
E Future Directions
The framework can be further augmented by replacing the GFlowNets with other machine learning models, such as diffusion models. Similarly, other parameterized algorithms can take the place of treewidth dynamic programming. For instance, if we replace the treewidth dynamic programming by using parameterized approximation schemes, or randomized parameterized algorithms, we can expect to have other types of learning-augmented algorithms with potentially better practical performance, and maintain dece-
nt solution quality at the same time. By using learningaugmented framework, we can expect some new beyond worst-case analysis with structural assumptions like treewidth modulators alongside with adequate assumptions on the neural models.
20

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:40.399Z
- **Text Length:** 71092 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 20 of 20
