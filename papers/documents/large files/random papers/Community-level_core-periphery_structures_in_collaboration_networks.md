# PDF Document: Geremia et al. - 2025 - Community-level core-periphery structures in collaboration networks.pdf

**File Path:** Geremia et al. - 2025 - Community-level core-periphery structures in collaboration networks.pdf

**Processed Date:** 2026-02-10T18:18:04.319Z

**File Size:** 1286.95 KB

**Total Pages:** 29

**Extracted Pages:** 29

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3442

**Title:** Community-level core-periphery structures in collaboration networks

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Community-level core-periphery structures in collaboration
networks
Sara Geremia1, Domenico De Stefano1, Michael Fop2
1Department of Political and Social Sciences, University of Trieste, Italy
2School of Mathematics and Statistics, University College Dublin, Ireland
Abstract
Uncovering structural patterns in collaboration networks is key for understanding how knowledge flows and innovation emerges. These networks often exhibit a rich interplay of meso-scale structures, such as communities, core-periphery organization, and influential hubs, which shape the complexity of scientific collaboration. The coexistence of such structures challenges traditional approaches, which typically isolate specific network patterns at the node level. We introduce a novel framework for de-
tecting core–periphery structures at the community level. Given a reference grouping of the nodes, the method optimizes an objective function that assigns core or peripheral roles to communities by accounting for the density and strength of their inter-community connections. The node-level partition may correspond to either inferred communities or to a node-attribute classification, such as discipline or location, enabling direct interpretation of how different social or organizational groups occu-
py central positions in the network. The method is motivated by an application to a co-authorship network of Italian academics in three different disciplines, where it reveals a hierarchical core-periphery structure associated with institutional role, regional location, and research topics.
Keywords: clustering; co-authorship; community detection; core-periphery; network analysis; scientific collaboration
1
arXiv:2511.19305v1 [stat.ME] 24 Nov 2025

1 Introduction
The increasing collaboration and interdependence among researchers reflects the need for multidisciplinary approaches to address social, political, economic, and technological challenges (Wuchty et al., 2007). Uncovering structures in collaborative research networks is crucial for understanding how ideas spread and capabilities evolve, ultimately driving scientific productivity and the generation of new knowledge (De Stefano et al., 2011). To deepen understanding of these complex mechanisms, resea-
rchers have developed statistical approaches aimed at identifying structures in collaboration networks, with large-scale co-authorship network analyses enabled by the increasing availability of bibliometric data.(Donthu et al., 2021). A growing body of work focuses on meso-scale network structures, with community detection being a leading theme. Communities are generally understood as groups of nodes with similar connectivity patterns or shared characteristics, although the lack of a universal def-
inition has led to the development of numerous community detection approaches, either heuristic or modelbased (see e.g. Fortunato and Hric (2016); Lee and Wilkinson (2019) for recent surveys). The first category includes widely used methods such as modularity-based algorithms like Louvain (Blondel et al., 2008) or flow-based methods like Infomap (Rosvall and Bergstrom, 2007). Modelbased approaches partition nodes into distinct blocks, and the probability of an edge connecting any two nodes is dete-
rmined solely by their block memberships. The most popular probabilistic model used to generate and represent network structures is the stochastic block model (SBM, Holland et al., 1983; Wasserman and Anderson, 1987). In research and innovation systems, communities are frequently shaped around influential actors, but also thematic areas or regional collaborations, forming social circles Alba and Moore (1978); Alba and Kadushin (1976). Acknowledging the interdependencies among community members is -
crucial for understanding how collaboration evolves within the community. Equally important is to examine how community structures interact with other organizational patterns, such as disassortativity, core-periphery dynamics, or the presence of hubs (Fortunato, 2010; Legramanti et al., 2022; Kojaku and Masuda, 2018). While community structures in collaboration networks have been extensively studied (Newman and Girvan, 2004; Lužar et al., 2014; Menardi and De Stefano, 2022), relatively less attent-
ion has been paid to their arrangement in core-periphery structures (Zelnio, 2012; Karlovčec et al., 2016; Sedita et al., 2020; Wedell et al., 2022). This structure is used to describe systems where a cohesive, central group, the core, interacts densely within itself, while a more loosely connected group, the periphery, maintains ties mainly with the core (Yanchenko and Sengupta, 2023; Tang et al., 2019). Despite the potential interplay between community and core-periphery structures, their combin-
ed presence in social networks has rarely been explored (Legramanti et al., 2022). An initial strategy to address this gap is to consider methods capable of capturing more general block structures in network data. Notably, SBMs provide flexible frameworks for uncovering core–periphery and hierarchical structures (Gallagher et al., 2021; Yanchenko and Sengupta, 2023). Building on this idea, we develop a core-periphery detection framework specifically designed to detect nested meso-scale structures.-
 Unlike traditional methods that identify core-periphery organization at the node level, we extend the method to identify core and peripheral groups of nodes. Specifically, assuming a community structure in the network, we focus on a binary partition of the communities, inspired by the two-block model of Borgatti and Everett (2000). To the best of our knowledge, this is the first approach to explicitly identify nested core-periphery organization in collaboration networks, revealing how such struct-
ures emerge between communities rather than within them. In doing so, we introduce a novel community-level framework that redefines the focus of core–periphery detection beyond individual nodes. In Section 1.1 we present the motivating collaboration network that inspired our study, along with the associated research questions. Section 2 provides the background: we review the
2

related literature (Section 2.1) and introduce the new community-level core-periphery network structure under investigation (Section 2.2). In Section 3, we formally define the communitybased core-periphery detection problem and describe our proposed approach. Simulation studies in Section 4 assess the performance of the proposed approach. Section 5 discusses the findings of the collaboration network analysis. Finally, Section 6 concludes with a discussion and directions for future research.
1.1 Co-authorship network of Italian academic scholars
Our approach is motivated by a case study on co-authorship within the scientific community of Italian academic scholars, as recorded in the Italian Ministry of University (MUR) roster in December 2022. The data concern collaborations in a co-authorship network involving statisticians over 10 years, from 2012 to 2022. The edges in the co-authorship network represent relationships derived from the shared collaborations in the paper-author bipartite network. Hence, an edge between two authors is form-
ed if both are involved in at least one common scientific paper. The edges can carry weights that reflect the number of shared papers, and edge weights indicate the number of shared publications. In this setting, the weight distribution is highly skewed, with a few author pairs accounting for a disproportionate number of collaborations. Moreover, the weights are largely influenced by factors such as project size and journal authorship rules, which may capture institutional or disciplinary proximit-
y rather than relational strength. For these reasons, we base our analysis on the unweighted version of the network. Although the academic statistics community collaborates across multiple disciplines, we focus on relationships between statistics, sociology, and business to capture the strongest collaborations in applied quantitative research within the social and economic domains. As shown by (De Stefano et al., 2023a; Fabbrucci Barbagli et al., 2025), Economic Statistics (S/03) and Social Statis-
tics (S/05) are particularly integrated with economics, finance, and social sciences. Moreover, in many cases, statistics is institutionally located within economics or social sciences departments, reinforcing the relevance of this focus. This disciplinary focus is enabled by the availability of detailed information on academic subfields through the Italian Settore Scientifico Disciplinare (SSD, i.e. Scientific Discipline Sector) classification system. Additional information for our analysis inclu-
des author and publication data sourced from Scopus and MUR. In particular, we take into account authors’ location (as determined by their affiliation), academic role, and the thematic focus of their publications. We are interested in assessing whether geographical and cultural proximity, shared research interests, as well as academic seniority, drive collaboration (Katz, 1994). Table 1 presents the main characteristics of the co-authorship network. The dataset comprises 2,691 academic scholars co-
llaborating on 1,809 papers, with a network density of 0.09%, reflecting sparse collaboration across the network. Statisticians represent 30.7% of the network, and exhibit the highest connectivity and bridging role, with an average degree and betweenness of 5.06 and 5883.28, respectively, and a density of 0.20%, suggesting strong group interconnections. In contrast, researchers from business and sociology are more weakly connected, with edge densities of 0.05% and 0.04%, respectively. As expected,-
 collaboration patterns vary by academic seniority. Full Professors show the highest centrality, playing a central role in facilitating connections. Collaboration levels appear relatively consistent across regions, with minor variations. Researchers from the Center and North-East regions report the highest average betweenness, while those from the Islands show the lowest connectivity. With a transitivity value of 0.26, the network demonstrates a moderate tendency toward community formation. At the-
 same time, the network exhibits a heterogeneous degree distribution, with highly connected nodes that may belong to different communities and create hierarchical patterns. These patterns suggest the coexistence of different meso-scale structures: strong
3

intra-disciplinary ties define cohesive subnetworks, whereas bridging roles of senior academics, statisticians, and certain regions suggest a core–periphery dynamic. Overall, thematic, institutional, and geographical features combine to form a layered architecture in which communities, cores, and hubs jointly shape collaboration and knowledge flow. Since co-authorship networks inherently reflect the interdependence of groups of collaborators, we ask whether these communities are equally integrate-
d into the broader network or whether some remain relatively isolated, with members collaborating primarily within their own group. If such isolation exists, our goal is to characterize these communities and investigate whether their decentralization is shaped by factors such as members’ institutional location, academic role, or research focus. Our main contribution lies in formalizing the problem and showing that it can be addressed as a core–periphery partition of the identified communities. In -
addition, we develop a framework capable of detecting this community-level core–periphery organization.
2 Core-periphery structures in networks
2.1 Relevant literature
The concept of core-periphery has its roots in economic and sociopolitical theories (e.g. Prebisch, 1949; Galtung, 1971) and was formalized in network science through blockmodeling approaches in the 1970s (Breiger et al., 1975; Mullins et al., 1977; White et al., 1976). Since then, it has become a central idea for describing heterogeneity in networks, with applications spanning the social, economic, and biological sciences (Hidalgo et al., 2007; Rombach et al., 2012; Bassett et al., 2013). However-
, as recent surveys emphasize (Tang et al., 2019; Yanchenko and Sengupta, 2023), there is no single, universally accepted definition of what constitutes a core or a periphery. Instead, multiple conceptualizations coexist, each relying on different assumptions about how core and peripheral nodes should relate to one another. As a consequence, researchers are often faced with methods that – while all labeled “core–periphery detection” – encode distinct and sometimes incompatible visions of the conce-
pt. Two main definitions, each derived from exemplary models, dominate the literature. The first is associated with the layered (or k-core) model, which interprets coreness as a gradual property rather than a strict dichotomy. In this framework, approaches for core-periphery detection embed nodes in nested layers, with inner layers representing the most central core (Batagelj
N % Average
Degree
Average
Betweenness Density (%)
Total 2691 2.34 2917.98 0.09
Field Statistics 827 30.73 5.06 5883.28 0.20 Business 821 30.51 1.26 1489.36 0.05 Sociology 1043 38.76 1.02 1691.31 0.04
Role Full Professor 748 27.80 3.20 4662.07 0.12 Associate 1134 42.14 2.25 2696.91 0.08 Researcher 809 30.06 1.67 1615.27 0.06
Location North-West 687 25.53 2.23 2546.70 0.08 North-East 591 21.96 2.29 3251.66 0.09 Center 689 25.60 2.39 3369.73 0.09 South 517 19.21 2.49 2618.23 0.09 Islands 207 7.69 2.28 2442.49 0.09
Table 1: Co-authorship network characteristics
4

and Zaveršnik, 2003; Goltsev et al., 2006; Hébert-Dufresne et al., 2016; Gallagher et al., 2021). These approaches, also referred to as transport-based methods, exploit flow dynamics or path structures, typically relying on geodesic distances or random walks to assign coreness scores (Lee et al., 2014; Cucuringu et al., 2016). They allow for multiple levels of peripheral integration and have been widely applied to capture hierarchical organization in large-scale networks. The second major paradig-
m corresponds to the two-block (hub-and-spoke) model, formalized by Borgatti and Everett (2000). In this formulation, core nodes are densely connected both among themselves and with peripheral nodes, whereas peripheral nodes maintain only sparse interconnections. This hub-and-spoke view assumes overall network connectivity, with the periphery integrated through its ties to the core. The Borgatti and Everett (2000) framework remains one of the most widely adopted approaches to core-periphery detect-
ion in practice, despite subsequent developments and alternative formulations (Boyd et al., 2006; Brusco, 2011; Lip, 2011; Zhang et al., 2015; Gallagher et al., 2021; Estévez and Nordlund, 2025). A key strength of this family of models is its simplicity: nodes are dichotomized into either core or periphery, enabling straightforward interpretation. Moreover, the two-block model has close connections with the SBM(Karrer and Newman, 2011), as both evaluate connectivity patterns against an idealized d-
ensity-based structure. Despite its popularity, the Borgatti and Everett (2000) framework presents several limitations when applied to real-world networks. Kojaku and Masuda (2018) argued that simple hub-and-spoke structures lack the flexibility to account for interesting patterns other than those already explained by degree heterogeneity. Instead, they suggest that identifying a meaningful core-periphery organization requires identifying additional substructures within the same network, such as c-
ommunities, bipartite patterns, or overlapping core–periphery pairs. Their work specifically focuses on uncovering the latter (Kojaku and Masuda, 2017, 2018). Other studies have examined similar multi-core structures, where several dense, mutually interacting cores coexist alongside peripheral regions Rombach et al. (2012); Zhang et al. (2015). Such a multi-core structure arises naturally in SBM formulations, particularly in their hierarchical and microcanonical variants (??Côme et al., 2021). By -
linking community detection with core–periphery decomposition, these models show that communities themselves can act as cores or peripheries relative to one another. A structure closely related to the multi-core core-periphery organization is the rich-club or elite-circle structure (Alba and Moore, 1978; Zhou and Mondragón, 2004; Colizza et al., 2006), which describes the tendency of high-degree nodes to form densely interconnected groups. In social networks, this phenomenon often signals the emer-
gence of an “oligarchy” of influential actors who dominate communication, in contrast to decentralized structures formed by loosely connected communities. Unlike the simple degree assortativity of the two-block model, the richclub effect cannot be explained by degree heterogeneity alone and can arise in both assortative and disassortative networks (Newman, 2002). This distinction links rich-club theory with multicore structures, as both point to overlapping or interacting dense subgroups within a -
larger network. Despite this rich literature, the interplay between community structure and core–periphery organization has received limited systematic treatment. While some studies have hinted at their coexistence, to the best of our knowledge, no existing framework explicitly identifies core and peripheral communities. To address this gap, we introduce a novel approach that generalizes the traditional two-block, node-level core–periphery model to the community level, enabling the detection of co-
re and peripheral organization among communities.
2.2 Community-level core-periphery structures
While most analyses focus on the roles of individual nodes, our approach shifts attention to how entire communities of interdependent actors are positioned within broader network architectures. This perspective highlights two nested levels of network structure:
5

(a) (b) (c)
Figure 1: (a) Example of a network partition in 5 communities with core-periphery roles; (b) Adjacency matrix representing a community partition of the nodes; (c) Adjacency matrix representing a communitylevel core-periphery partition. Blue color denotes periphery, while red color denotes core.
• Community partition: Nodes are organized into densely connected groups (communities) that exhibit relatively sparse connectivity between them (Figure 1b).
• Community-level core–periphery partition: Communities are hierarchically organized, distinguishing those that form the core, which are densely interconnected and central, from those in the periphery, which are sparsely connected and with limited links to other peripheral groups (Figure 1c).
The proposed community-level core-periphery detection approach aims to identify groups of nodes based on their relationships and the hierarchical structure among those groups. In many complex social systems, communities can be understood as circles of interdependent actors, and recognizing these interdependencies is crucial for: explaining how information, resources, or influence circulate; how collective dynamics are sustained; and how certain groups come to occupy more central positions within t-
he broader network. In this framework, central positions are typically held by communities that are densely interconnected and act as bridges across different parts of the system (i.e., core communities). Peripheral communities, by contrast, are weakly connected among them, with their participation in the system often mediated by their relations with the core. Shifting the attention from individual nodes to groups of nodes enables the identification of collective behavior and shared structural rol-
es. This perspective reflects the fact that many outcomes – such as innovation, diffusion, or resilience – are driven by interactions among groups rather than isolated actors. By treating communities as the analytical unit, we capture mesoscale dynamics that more accurately represent how functional subsystems operate within a network. The proposed community-level core-periphery detection approach substantially enhances interpretability: by grouping nodes based on shared structural or attribute-bas-
ed characteristics, it becomes possible to directly relate network positions to real-world social or organizational entities. For example, categorical attributes, such as geographical location or functional role, can naturally serve as cluster labels, allowing us to examine how different types of groups align with core or peripheral positions. This helps identify which subsystems or domains serve as key hubs within the overall structure. Moreover, by analyzing inter-community connection patterns, -
we can assign and interpret intra-community leadership. This means that the density or strength of inter-community connections helps identify which communities, and which nodes within those communities, act as central influencers. An additional motivation for identifying core communities stems from empirical observations
6

in SBMs, which, in networks with substantial degree heterogeneity, often reveal clusters with hub-like behavior, that is, groups that maintain dense connections across the network Karrer and Newman (2011). Rather than interpreting these highly connected clusters in isolation, grouping them into a unified core block provides a clearer understanding of their structural role. Finally, adopting a community-level perspective improves both scalability and robustness in large, complex networks. Aggregat-
ing nodes into communities reduces noise from individual-level variability—such as the disproportionate influence of highly connected hubs—and facilitates the detection of persistent structural patterns across scales. This is particularly valuable in networks that span multiple domains, organizations, or regions, where individual-level connectivity may obscure broader systemic dynamics.
3 Community-level core-periphery detection
In this section, we present the proposed community-level core-periphery detection framework. The framework is based on an objective function specifically designed to identify communitylevel core–periphery structures under the constraint that the set of communities is partitioned into exactly one core group and exactly one peripheral group, each containing at least two communities. This formulation is inspired by the objective function introduced in Cucuringu et al. (2016), but extends it by replac-
ing node-level coreness with measures that summarize connectivity within and between communities. The procedure consists of three main steps.
Step 1. Partition the node set of the network into K communities. These communities may be the result of the application of a community detection method appropriate for the data and the specific research task. Alternatively, the communities can correspond to an existing classification of the nodes, for instance, one corresponding to a particular nodelevel categorical attribute.
Let Q = {q1, . . . , qk, . . . qK} denote the set of communities.
Step 2. Estimate the connectivity between the each pair of communities qk and ql:
θˆkl = mkl
nk nl
, k, l = 1, . . . , K, k ̸= l,
where mkl is the number of observed edges between the two communities, and nk, nl are their sizes (i.e. number of nodes assigned to each community). Note that this estimator is consistent with the connectivity parameter estimates of a standard block model or SBM for binary networks (White et al., 1976; Holland et al., 1983; Karrer and Newman, 2011).
Step 3. Evaluate the quality of candidate core–periphery partitions of the communities. This is achieved by computing the value of an objective function, φ(z; ˆΘ), where ˆΘ denotes the estimated connectivity matrix with off-diagonal entries θˆkl and null diagonal, and z is an indicator vector specifying whether a each community belongs to the core or the periphery. The function φ(z; Θˆ ) is then optimized with respect to z over all admissible partitions of the communities into core and periphery g-
roups.
We now describe Step 3 in more detail. Formally, each community qk is associated with a binary variable zk ∈ {0, 1}, where zk = 1 if community qk belongs to the core, while zk = 0 if it belongs to the periphery. We impose the constraints:
K
X
k=1
zk ≥ 2 and
K
X
k=1
(1 − zk) ≥ 2,
7

ensuring that both the core and the periphery contain at least two communities. This excludes degenerate cases with core or periphery comprising only one community. The partitioning of Q into core and peripheral communities is thus determined by the vector z = (z1, . . . , zk, . . . , zK).
The connectivity strengths between pairs of communities, captured in ˆΘ = [θˆkl], reflect both the topology (presence or absence of edges) and the intensity (edge frequency) of intercommunity interactions. To evaluate a given partition z, we define the following sets of nonzero inter-community connectivity values extracted from Θˆ , which encode connectivity among core and peripheral communities, respectively:
Tc =
nθˆkl : k < l, zkzl = 1, θˆkl > 0
o
,
Tp =
nθˆkl : k < l, (1 − zk)(1 − zl) = 1, θˆkl > 0
o
.
The objective function φ(z; ˆΘ) is defined as
φ(z; Θˆ ) = δc + μc − σc − δp + μp + σp , (1)
where:
• δc, δp denote the densities of nonzero edges in the core and periphery, respectively:
δc = |Tc|
P
k<l zkzl
, δp = |Tp|
P
k<l(1 − zk)(1 − zl) ;
• μc, μp are mean edge frequencies in the core and periphery,
μc = 1
|Tc|
X
θˆkl∈Tc
θˆkl, μp = 1
|Tp|
X
θˆkl∈Tp
θˆkl;
• σc, σp are standard deviations (sd) of the edge frequencies,
σc =
v u u t
1
|Tc| − 1
X
θˆkl∈Tc
(θˆkl − μc), σp =
v u u t
1
|Tp| − 1
X
θˆkl∈Tp
(θˆkl − μp).
Zero entries are excluded from Tc and Tp to ensure that the summary statistics capture only the strength and variability of existing inter-community connections, while the overall proportion of such connections is already reflected in the density terms. This choice is in line with the definition of periphery, where links among peripheral communities are expected to be sparse, and when present, as weak as possible. By considering only nonzero entries, the method is able to identify configurations i-
n which peripheral links exist but remain weak, thereby emphasizing interaction intensity rather than sole presence or absence. By construction, the function in Equation (1) increases when core communities are denser, more strongly connected, and more homogeneous than peripheral ones. A high value of δc and a low value of δp indicate a denser core and a sparser periphery, consistent with a typical core-periphery structure. We use the mean (μ) as a measure of the central tendency of the edge freque-
ncy distribution. Maximizing μc while minimizing μp reinforces the contrast between the interaction intensity within the core and that within the periphery. We use the standard deviation (σ) as a measure of dispersion. The σc and σp terms penalize high variability in edge frequencies, preventing solutions in which the core consists only of a few unusually strong links and the periphery of links of very heterogeneous strength. This also discourages the opposite case, with a small periphery with ext-
remely weak links and a core with heterogeneous interconnections.
8

The groups are determined endogenously by the data, with no constraints on their size. We do not require balanced groupings, and the number of core and peripheral communities can vary as long as both sets include at least two elements. The optimization of the function in Equation (1) with respect to z is a combinatorial problem, as it requires evaluating discrete partitions of communities into core and periphery. The search space grows exponentially with the number of communities, making exhausti-
ve enumeration infeasible even for moderately sized networks. To address these challenges, we use a genetic algorithm (Scrucca, 2013), inspired by natural selection. Genetic algorithms are particularly well-suited to this problem because they can efficiently explore large and complex search spaces, balance exploitation of promising solutions with exploration of new ones, and avoid getting trapped in suboptimal local optima. This approach allows us to approximate the optimal community-level assignm-
ent between the center and the periphery, while maintaining computational feasibility and robustness across different network structures.
4 Simulation studies
To assess the empirical performance of the proposed approach, we conduct a simulation study based on varying networks generated from SBMs. As highlighted in the introduction, while the SBM is widely recognized for its ability to generate networks with community structures, it is also sufficiently flexible to accommodate more complex patterns, including core–periphery configurations. In particular, the generative model developed for this study is explicitly designed to simulate networks where both -
community structure and inter-community heterogeneity coexist. We aim to evaluate how effectively the proposed approach can recover the true partitioning of communities into core and periphery, both in terms of objective function behavior and coreperiphery detection performance.
4.1 Simulation design
Networks are generated to reproduce realistic patterns of inter-community collaboration. Different network sizes, n = {100, 200, 500, 1000} and numbers of communities, K = {5, 10, 15} are considered. A parameter λ = {25, 50, 75} controls the percentage of communities belonging to the core. The remaining communities are treated as peripheral. Each node is then assigned to one of these communities according to a probability distribution, which is either uniform (equal-sized communities) or drawn fro-
m a Dirichlet distribution to reflect size heterogeneity across communities. Once both the community and community-level core-periphery membership are determined, we define connection probabilities within and between communities. Nodes belonging to the same community are connected with a high probability. Inter-community connections are formed on the basis of the core-periphery classification of the involved communities: core-to-core connections are most likely, core-to-periphery connections are l-
ess likely, and periphery-to-periphery connections are least likely. Further details are provided in the Appendix A. To ensure realistic scenarios, we exclude certain parameter combinations that could produce degenerate structures: specifically, small networks (with 100 or 200 nodes) were not paired with a large number of communities (K = 20), and large networks (with 500 or 1000 nodes) were not paired with very few communities (K = 5). The collection of parameter combinations provides 96 distinct-
 scenarios; for each scenario, we simulate 100 independent network data realizations. Data are generated, ensuring that every community includes at least two nodes. The performance of core-periphery detection at the node level is evaluated using standard metrics: balanced accuracy (BA) results are presented in the main text, while F1 scores are provided in Appendix C. Additional results on the estimation of the number of node-level clusters are also provided in Appendix C.
9

5 core, 15 peripheral 10 core, 10 peripheral 15 core, 5 peripheral
0.00 0.25 0.50 0.75 1.00 0.00 0.25 0.50 0.75 1.00 0.00 0.25 0.50 0.75 1.00
−0.005
0.000
0.005
Balanced Accuracy
φ
Detected vs. actual core count
−10 −5 0 5 10
Figure 2: Scatter plot of objective function (φ) vs. balanced accuracy (BA) scores for core-periphery networks with n = 1000 nodes, K = 20 communities, and core proportions of 25%, 50%, and 75% (panel from left to right). Blue points represent solutions with more peripheral communities than the true structure, while red points indicate solutions with more core communities. The true solution (BA = 1) is highlighted with a square.
4.2 Simulation results: objective function behavior
Figure 2 shows the results of the evaluation of the behavior of the proposed objective function. The analysis is conducted on synthetic networks with n = 1000 nodes, K = 20 equally sized communities, and known core–periphery structures z under three different λ values. Objective function values φ(z; Θ) are computed for all possible configurations of z, using the actual datagenerating Θ values. There are 90 configurations when 5 communities are assigned to the core, 90 when 5 are assigned to the pe-
riphery, and 116 when 10 are assigned. The BA measures the agreement between detected and actual z. Blue points represent solutions with more peripheral communities than the true structure, while red points indicate solutions with more core communities. The true configuration (BA = 1) is highlighted with a square. The objective function φ reaches its maximum at the true solution, while close but suboptimal values are observed when one additional peripheral community is included in each of the thre-
e different configurations.
4.3 Simulation results: core-periphery detection performance
The second simulation study investigates how structural parameters, such as network size, number (K), and size of communities, and the proportion of core groups, influence the ability to detect core-periphery structures at the community level. As shown in Figure 3 and 4, our method performs robustly across a wide range of realistic network configurations. Since the approach assumes a fixed community partition as input, its performance depends on the quality of this initial grouping. To assess this-
, we apply the method following three standard node-level community detection algorithms: the binary SBM, implemented via the blockmodels package (Leger et al., 2021), and the Louvain and Infomap algorithms, both available in the igraph package (Csárdi et al., 2025; Csárdi and Nepusz, 2006).
10

K = 20
K = 10
K=5
500 1000
100 200 500 1000
100 200
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
Balanced Accuracy
Louvain
K = 20
K = 10
K=5
500 1000
100 200 500 1000
100 200
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
Network size
Infomap
K = 20
K = 10
K=5
500 1000
100 200 500 1000
100 200
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
SBM
Community−level Core−periphery
K = 20
K = 10
K=5
500 1000
100 200 500 1000
100 200
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
Network size
Core (%)
25 50 75
B&E
Node−level Core−periphery
Figure 3: Uniform community sizes – Balanced accuracy distribution across different network sizes and numbers of communities (K). Results are shown for different community detection methods, including Louvain, Infomap, and SBM, as well as for the Borgatti and Everett (B&E) approach.
Overall, the proposed method demonstrates superior balanced accuracy for communities identified by the binary SBM compared with alternative approaches, particularly in networks with moderate to large sizes (n = 500 or 1000). This is especially pronounced when the proportion of core communities is high (75%) and the community sizes are non-uniform, reinforcing its suitability for complex and realistic network structures. When node-level community detection is implemented using Louvain, performance -
tends to be higher in smaller networks and under conditions of equal-sized communities. When using Infomap for community detection, which emphasizes flow-based modular structures, the proposed approach tends to yield the lowest overall performance in large networks and in non-uniform scenarios. Across all algorithms, the proportion of core communities influences performance. In small networks, optimal performance is achieved at an intermediate core proportion (50%), whereas in larger networks, per-
formance peaks at 75%. However, it is important to note that in scenarios with five communities, a core proportion of 25% or 75% results in only one core or one peripheral community, respectively. These are degenerate cases that pose a challenge for our method, which by design requires at least two communities in both the core and the periphery to define a valid core–periphery partition. Consequently, the method is not capable of identifying the true solutions in these settings, which explains the-
 observed lower performance. Nevertheless, in small networks with equally sized communities, the method shows strong potential when used in combination with all three community detection algorithms. For benchmarking purposes, we also compare our community-level approach with the nodelevel core–periphery detection model proposed by Borgatti and Everett, which remains a standard reference in this area. The method was implemented using the netUtils package in R (Schoch, 2024). As shown in Figure 3 an-
d 4, the Borgatti–Everett model consistently achieves lower BA across all scenarios. This difference is particularly pronounced in networks with a low proportion of core communities, where the node-level approach fails to capture higher-order
11

K = 20
K = 10
K=5
500 1000
100 200 500 1000
100 200
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
Balanced Accuracy
Louvain
K = 20
K = 10
K=5
500 1000
100 200 500 1000
100 200
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
Network size
Infomap
K = 20
K = 10
K=5
500 1000
100 200 500 1000
100 200
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
SBM
Community−level Core−periphery
K = 20
K = 10
K=5
500 1000
100 200 500 1000
100 200
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
Network size
Core (%)
25 50 75
B&E
Node−level Core−periphery
Figure 4: Non-uniform (Dirichlet-distributed) community sizes – Balanced accuracy distribution across different network sizes and numbers of communities (K). Results are shown for different community detection methods, including Louvain, Infomap, and SBM, as well as for the Borgatti and Everett (B&E) approach.
structural regularities. These results highlight the importance of leveraging community partitions to reliably identify community-level core–periphery organization at the meso-scale.
5 Application: Italian academics co-authorship network
The case study on co-authorship among Italian academic scholars illustrates the practical application of the proposed methodology. We examine two complementary settings. In the first, we infer node-level communities defined by high internal connectivity, with the objective of uncovering collaboration patterns at the researcher level. In the second, we assign community labels based on the regional affiliation of authors, allowing us to investigate collaboration dynamics and core–periphery structure-
s across Italian regions. The underlying hypothesis is that geographical proximity may foster core regional clusters, and that the emergence of core and peripheral regions may further reflect thematic or institutional specialization within the academic system.
5.1 Communities detected using SBM
We begin by applying the degree-corrected SBM (Karrer and Newman, 2011) to the coauthorship network in order to obtain a meaningful community partition. This community detection approach is particularly suitable for this context, as it accounts for the heterogeneous degree distribution observed in the network, while still detecting assortative block structure. The degree-corrected SBM identifies eight cohesive communities and one large group of sparsely connected or isolated nodes, which contains -
70.6% of all network nodes (light blue in Figure 5). Within this group, 66.9% of nodes are disconnected from the largest component of
12

(a)
0.039
0.038
0.037
0.04
0.031
0.034
0.039
0.037
0
^θkl
0.000
0.001
0.002
Cluster
1 2 3 4 5 6 7 8 9
(b)
Figure 5: (a) Co-authorship network partition in communities and core-periphery organization. (b) Co-authorship connectivity matrix ( ˆΘ) representing the community-level core-periphery partition. Blue square denotes intra-periphery connectivity, red square intra-core connectivity.
the network, while only two interconnected but otherwise isolated nodes fall outside it. The distribution of the sizes of the remaining eight clusters is relatively uniform, ranging from 86 to 116 nodes. From this community structure, we compute the estimated connectivity matrix ˆΘ as described in Section 3, with entries capturing the edge density between communities. Using this matrix, our method evaluates all admissible partitions of the communities into core and periphery by optimizing the obje-
ctive function φ(z; Θˆ ). This procedure classifies the detected communities into six core and three peripheral groups. The resulting core set corresponds to densely connected and structurally homogeneous communities, whereas the peripheral set consists of groups characterized by sparse and heterogeneous connectivity patterns. Notably, the latter also includes the large light blue community, which contains the network’s isolated nodes. Results are presented in Figure 5. The left panel shows the co-
mmunity partition of the network, and the right panel displays the connectivity matrix ˆΘ representing the communitylevel core-periphery partition. Each diagonal element of this matrix represents a community. To better reveal inter-regional links, we visualize the off-diagonal values in the ˆΘ matrix, as a few highly assortative clusters produce dark diagonal cells that obscure off-diagonal values in the full heatmap. Interaction probabilities between peripheral communities are nearly zero, as ind-
icated by the white cells in the blue square (intra-periphery block), and their links to core communities are weak. In contrast, core communities exhibit more dense, though still relatively weak, interactions, represented by the light grey cells in the red square (intra-core block). For comparison, we also applied the node-level core–periphery detection model of Borgatti and Everett (2000). This approach results in a trivial partition of the network into high- and lowdegree nodes, essentially repr-
oducing degree heterogeneity: low-degree nodes naturally appear as peripheral (Table 2). To assess the consistency between our community-level core–periphery assignment and the node-level B&E partition, we compared the two partitions on the co-authorship network. The results show a BA of 0.78 and an F1 of 0.89, indicating partial agreement between the two approaches but also meaningful differences in how the “core” role is defined. Most nodes identified as peripheral by our method (2,016 out of 2,-
483) are also classified as peripheral by the B&E model, while 67 are labelled as core. Conversely, among the nodes belonging to core
13

Table 2: Degree distribution by core membership assigned using Borgatti and Everett model.
n Mean SD Median Min Max
Periphery 2434 1.53 1.66 1 0 6 Core 257 9.96 3.66 9 7 30
communities in our framework, 190 (31%) are also assigned to the B&E core, whereas 418 (69%) are classified as peripheral. This pattern suggests that our method identifies additional locally central actors—those having dense connections within a core community—who may not appear as globally central in the B&E sense, consistent with the community-level focus of our approach. The distinction between core and periphery structure may be explained by thematic specialization. To characterize the themati-
c content of each community and of the core and periphery, we combine term frequency (tf) and term frequency-inverse document frequency (tf–idf) statistics Robinson (2017), computed from words appearing in titles and keywords, with data on the frequency of publication venue (scientific journals). These quantities were computed in R using the functions implemented in the tidytext package (Robinson and Silge, 2025). The tf results are presented in Figure 6 in the main text, while tf–idf results can -
be found in Figure D1 of Appendix D. Standard text preprocessing steps were applied to ensure that only representative words are retained. Specifically, we split the texts into individual words (word tokenization) and lemmatized them to reduce them to their unique dictionary form. Next, we removed stop-words (i.e., prevalent and non-informative words such as “and”, “the”, and “to”), numbers, and symbols. The data were further cleaned to exclude extremely common but non-informative words, such as “-
data”, “model”, “analysis”, and “approach”. The largest peripheral cluster (Cluster 1) is dominated by themes from the social sciences and applied fields, as reflected in frequent terms such as “social”, “innovation”, and “management”, and in high tf–idf terms such as “democracy”, “populism”, and “luxury”. It is also associated with various Italian sociological journals, including Italian Sociological Review, Partecipazione e Conflitto, and Italian Journal of Sociology of Education. Furthermore, a-
 substantial proportion of the publications in this cluster appeared in more recent years, suggesting a relatively young and still consolidating research area, characterized by limited collaborations. The second peripheral cluster (Cluster 2) centers on a highly specialized domain of statistical theory and methodology. Distinctive terms (“bayesian”, “nonparametrics”, “dirichlet”, “pitman”, “gibbs”) and high-impact journals (i.e. Biometrika, Electronic Journal of Statistics, and Journal of the Amer-
ican Statistical Association) indicate that this cluster represents advanced knowledge production in complex statistical methodology. Its theoretical orientation and narrow focus further characterize it as peripheral in the overall collaboration structure. The third peripheral group (Cluster 3) integrates applied statistics with a wide range of application areas. Dominant tf terms include “ordinal”, “effect”, “covariance”, and “country”, while tf–idf highlights terms such as “symbolic”, “interlock-
”, “histogram”, and “port”. Journals like Electronic Journal of Applied Statistical Analysis, Quality and Quantity, as well as field-specific outlets such as Social Indicators Research, British Food Journal, and Public Health Nutrition, position this cluster within applied quantitative methods for social and economic research, with a notable subfield focusing on nutrition and food related health studies. The peripheral role of the cluster reflects its predominantly applied nature and cross-discipl-
inary involvement. Rather than forming integrated collaborative groups, they contribute analytical expertise in different thematic areas, giving rise to weaker and more transient collaborations. Overall, the three peripheral clusters comprise scholars from distinct scientific domains, each focused on research topics that frequently require collaboration with researchers possessing complementary—rather than thematically aligned—expertise. Based on the journal distribution re
14

ported in Fig. 7, Cluster 1 is predominantly composed of sociologists and economists working on themes such as sustainability, political studies, urban and regional sociology, and education, and exhibits a generally low propensity to collaborate. Clusters 2 and 3 comprise two distinct profiles of statisticians whose reciprocal collaboration networks are comparatively limited: the former due to their focus on applied research within specialized domains, and the latter because of their strong orien-
tation toward theoretical topics. As a result, they tend to collaborate mainly with statisticians located in the core communities. For example, members of Cluster 2 often work with environmental and medical researchers (mainly located in the core Cluster 9 as described below) rather than extensively within their own clusters. These peripheral communities are the only groups in the network that display almost no interaction with one another. In contrast, the six core clusters are characterized by g-
reater thematic homogeneity. Cluster 4 centers on methodological innovation in time-series analysis, and financial and economic modeling, featuring terms such as “time series”, “autocovariance”, “stationarity”). Cluster 5 emphasizes general statistical modeling and inference, with distinctive terms including “em algorithm”, “mixture”, “symmetric”, “invariance”, “irt”. Clusters 6 and 7 are strongly disciplinary. Cluster 6, linked to journals such as Economic Modelling and Regional Science and Urban-
 Economics, is oriented toward land use and environmental studies (frequent terms include “land”, “urban”, “spatial”, “sprawl”, “degradation”, “desertification”). In contrast, Cluster 7 is rooted in demography and family studies, featuring distinctive terms such as “birth rate”, “fertility”, “childlessness”, and “grandchild”, and characterized by journals including Demographic Research and European Journal of Population. Cluster 8 partially overlaps thematically with Cluster 7, with terms like “sm-
all area”, “index”, “poverty”, and “parturition”, and is characterized by journals such as the Journal of Official Statistics and Health Policy. Cluster 9 combines applied statistics with biomedical and environmental applications (reflected in terms such as “disease”, “effect”, “asthma”, “seismicity”) with a strong link to environmental and health research, represented by journals such as Ecological Indicators, Statistics in Medicine, and Science of the Total Environment. The members of the cluste-
rs detected as core tend to collaborate repeatedly within well-established research domains, forming dense, stable ties that sustain the network’s structural cohesion. Figure 8 presents information on researcher characteristics, including the distribution of authors’ geographic locations and authors’ academic sectors by cluster. Peripheral cluster 3 shows a marked predominance of researchers based in southern Italy (66.0%), compared with a much smaller southern presence in the core clusters, where-
 it rarely exceeds 20% (Figure 8a). Cluster 2 is dominated by academics from the North-East and North-West, clearly associated with the Bayesian non-parametric groups centered at the University of Padova and Bocconi University. As expected from exploratory analyses, the large peripheral Cluster 1 groups together most of the non-statisticians, who are only weakly connected to the rest of the network (Figure 8b). 91.7% of the nodes in that community belong to the business or social sciences, highlig-
hting the bridging role of statistics as a multidisciplinary field. Notably, the overall core-periphery connectivity is guided by statisticians. This high propensity to collaborate is in line with previous studies on the Italian Statistician community (Bacci et al., 2023; De Stefano et al., 2023b). Overall, these results confirm that peripheral clusters not only diverge thematically but also have distinctive social and institutional compositions. To further characterize and interpret the core and -
periphery groups, we identified leaders within each community as the three members with the highest number of inter-community collaborations (a total of 27 leaders, 9 periphery leaders, and 18 core leaders). In the case of ties, degree centrality and then betweenness centrality were used as tie-breakers. Core leaders consistently display higher values across all centrality measures, reflecting their more central and well-connected positions in the collaboration network (Figure 9). On average, thei-
r degree
15

78 9
45 6
12 3
0 4 8 12 0 2 5 8 0 2 4
0 5 0 10 20 0 102030
0 20 40 0 10 20 0 2 5 8
estimator
correspondence
contingency
variable
table
covariance
community
innovation
ordinal
cluster
degradation
protection
sustainable
environmental
management
sprawl
urbanization
cover
urban
land
disease
dimensional
high
effect
regression
estimator
testing
statistic
test
covariance
principal
component
functional
estimator
covariance
dirichlet
nonparametrics
bayesian
process
cluster
inequality
covid
cost
statistic
rasch
distribution
regression
em
algorithm
cluster
poverty
index
care
auxiliary
class
small
variable
area
estimation
estimator
systems
firm
service
management
italy
case
media
community
innovation
social
regression
high
factor
autocovariance
stationarity
covariance
spectroscopy
fuzzy
function
cluster
covid
characteristic
life
social
family
innovation
postponement
childlessness
rate
birth
Frequency (%)
(a) Paper topic
7 89
4 56
1 23
0 10 20 0 5 10 0 2 4
0 2 5 0 2 5 8 0 5 10
0 10 20 0 3 6 9 0 5 10
statistical
social
case
performance
country
evaluation
functional
effect
cluster
italy
network
measure
economic
growth
mediterranean
risk
land
urban
spatial
italy
base
spatial
bayesian
effect
permutation
multivariate
regression
application
test
italy
patient
mixture
nonparametric
inference
regression
application
process
estimation
functional
bayesian
risk
patient
bayesian
multivariate
application
mixture
distribution
regression
cluster
italy
measure
care
regression
poverty
effect
small
latent
area
estimation
italy
work
firm
business
digital
management
role
innovation
case
social
italy
bayesian
regression
case
application
fuzzy
series
network
time
italy
cluster
life
child
covid
effect
family
role
health
social
fertility
italy
Frequency (%)
(b) Paper title
Figure 6: (a) Distribution of topic term frequency (tf ) by cluster and core-periphery organization. (b) Distribution of title term frequency (tf ) by cluster and core-periphery organization.
is 15.9, compared to 9.9 for peripheral leaders, and their mean betweenness centrality reaches 40,800, nearly double that of peripheral leaders (24,100), indicating a greater role in bridging collaborations across communities. Leaders are predominantly full professors, concentrated in central and northern regions such as Lazio, Lombardia, and Toscana, and are exclusively affiliated with the Statistics sector. Periphery leaders generally exhibit a more heterogeneous mix of academic ranks (including-
 researchers and associates), and a broader geographic distribution, extending to southern regions such as Campania, Puglia, and Calabria. The only community led by scholars outside the field of statistics (i.e., sociology) is peripheral.
5.2 Communities defined by geographical regions
Using the categorization of the 20 Italian regions as the node-level community partition, the estimated average connection probability is 0.027 within clusters and 0.00039 between clusters, revealing a strongly assortative regional structure. The proposed method identifies 14 core and 6 peripheral regions: Basilicata, Friuli Venezia Giulia, Liguria, Molise, Puglia, and Valle d’Aosta. Highly represented regions (over 250 authors) are all assigned to the core, whereas those scarcely represented (few-
er than 15 authors) are in the periphery. One determinant of the core-periphery organization is the geographical proximity, and our method allows us to detect which regions have few or no connections reciprocally. Figure 10 shows very weak intra-periphery interactions (top-right blue square) and sparser core–periphery links compared to core–core links (bottom-left red square). For each region, the three leaders were identified as outlined above (a total of 59 leaders, 17
16

78
36
12
02 03
0 5 10 0 2
012 0 3 6
Sankhya A
Statistical Science
Statistics and Probability Letters
Bernoulli
Biometrics
Biometrika
Statistical Papers
Electronic Journal of Statistics
Springer Proceedings in Mathematics and Statistics
Statistical Methods and Applications
PLoS ONE
Regional Science and Urban Economics
Social Indicators Research
Survey Research Methods
Sustainability
Communications in Statistics
International Journal of Entrepreneurship and Small Business
Journal of Business Research
Studies in Classification, Data Analysis, and Knowledge Organization
Economic Modelling
International Journal of Environmental Research
Journal of Behavioral and Experimental Economics
Journal of Healthcare Management
Studies in Theoretical and Applied Statistics
Annales de Demographie Historique
Economic Time Series
Social Indicators ReseaTrecsht
Journal of Official Statistics
Communications in Statistics
Rassegna Italiana di Sociologia
Sociologia Urbana e Rurale
Sociologia
International Review of Sociology
Salute e Societa
Italian Journal of Sociology of Education
Partecipazione e Conflitto
Sustainability
Journal of Business Research
Italian Sociological Review
Partecipazione e Conflitto
Public Health Nutrition
Studies in Classification, Data Analysis, and Knowledge Organization
British Food Journal
Lecture Notes in Computer Science
Advanced Statistical Methods for the Analysis of Large Data
Social Indicators Research
Quality and Quantity
Studies in Theoretical and Applied Statistics
Electronic Journal of Applied Statistical Analysis
European Journal of Population
European Sociological Review
International Journal of Entrepreneurial Behaviour and Research
Polis
Social Indicators Research
Social Sciences
Statistical Methods and Applications
Demographic Research
Studies in Theoretical and Applied Statistics
Genus
Frequency (%)
Figure 7: Distribution of journal frequency by cluster
0.0
0.2
0.4
0.6
North−West North−East Center South Islands Academic Location
Frequency by cluster
(a)
0.00
0.25
0.50
0.75
1.00
Business Sociology Statistics Academic Sector
Frequency by cluster
Cluster
123456789
(b)
Figure 8: (a) Distribution of authors’ geographic locations by cluster. (b) Distribution of authors’ academic sectors by cluster.
representing peripheral regions and 42 core regions). Core regional leaders show higher centrality values, with an average degree of 11.62 compared to 5 for peripheral region leaders and an average betweenness of 26584.79 compared to 4252.81 for peripheral region leaders, indicating their role as connectors in the collaboration network. They are predominantly full and associate professors in the Statistics sector. In contrast, peripheral regional leaders have a greater representation of researcher-
s and associates, and show greater disciplinary diversity, with some leaders affiliated with the business field (e.g., all leaders from Basilicata and Valle d’Aosta).
6 Discussion and Future Research
We introduced a community-level approach to core–periphery detection, designed to distinguish densely connected core groups from sparsely connected peripheral ones based on both
17

0
25000
50000
75000
100000
125000
10 15 20 25 30 Degree
Betweenness
Cluster
123456789
Figure 9: Top three leaders’ degree and betweenness centrality for core and peripheral clusters.
the density and strength of inter-community interactions. By formulating an objective function tailored to this task, our method provides a scalable, interpretable, and flexible framework applicable to a variety of real-world networks. The proposed methodology is showcased to analyze a collaboration network of Italian academic scholars. Our results highlight how the proposed framework departs from classical node-level models (e.g., Borgatti and Everett (2000)) by reconceptualizing the periphery. R-
ather than representing
Periphery Core
Total 9 18
Field Statistics 7 18 Business 0 0 Sociology 2 0
Role Full Professor 4 11 Associate 4 5 Researcher 1 2
Location North-West 0 5 North-East 3 1 Center 1 8 South 5 3 Islands 0 1
Table 3: Frequency of leaders by sector, role, and location across core and peripheral clusters.
Periphery Core
Total 17 42
Field Statistics 12 40 Business 5 0 Sociology 0 2
Role Full Professor 6 23 Associate 7 15 Researcher 4 4
Table 4: Frequency of regional leaders by sector and role across core and peripheral clusters.
18

Figure 10: Regional co-authorship connectivity matrix ( ˆΘ) illustrating the core-periphery partition of the Italian regions. Blue square denotes intra-periphery connectivity, red square intra-core connectivity.
a residual set of loosely connected nodes, the periphery may also include cohesive and internally dense communities that remain weakly integrated into the broader network, tending to form their ties primarily with the core. This insight helps explain why peripheries can be both intellectually rich and structurally isolated, as shown in our empirical application to the Italian academic collaboration network. The findings underscore the potential of community-level core–periphery analysis to support-
 science policy. Identifying peripheral groups and their leaders can inform initiatives to strengthen inter-community collaborations, broaden participation across geographic and disciplinary boundaries, and promote a more balanced distribution of resources or enhance scientific innovation, fostering, for instance, preriphery-to-periphery collaboration. More broadly, mapping nested structures enriches our understanding of how influence, knowledge flows, and collaboration dynamics are organized at t-
he group level, complementing established node-level approaches (Zelnio, 2012; Karlovčec et al., 2016; Sedita et al., 2020; Wedell et al., 2022). From a methodological point of view, an interesting avenue for future extension concerns the choice of summary statistics in the objective function. Our formulation uses mean-based measures, which guarantee a single optimum and stable results. Using more robust alternatives, such as the median, could produce multiple optima, reducing stability but potent-
ially increasing robustness to asymmetric connection densities, where mean-based measures are sensitive to outliers. For a brief discussion and an example, see Appendix B. At the same time, several limitations point toward directions for future work. First, in the current framework, clustering and core–periphery detection are performed sequentially. While this modularity simplifies computation and interpretation, it makes the core-periphery detection dependent on the initial node-level partition. -
A natural extension is the development of a nested SBM capable of jointly estimating node-level communities and community-level core–periphery roles, thereby integrating the two levels into a unified inferential framework (?Côme et al., 2021). Second, categorical attributes (e.g., role, research interest, location) are used mainly to interpret core–periphery roles and, when treated as community labels, to assess how different
19

group types align with core or peripheral positions. Future work should embed both categorical and continuous attributes directly in the detection step, for example through attributed network clustering algorithms (Zhang et al., 2023) or attributed block models (Stanley et al., 2019), to enable a richer account of how social and institutional factors shape structural positions. Third, our empirical analysis focuses on a specific small academic community in Italy, constrained by data availability.-
 The method should be tested on larger, more diverse scientific fields and extended to temporal networks (Balland et al., 2019), to capture how core–periphery roles evolve as collaborations expand and reorganize. Lastly, the application to the co-authorship network considered only binary connections, disregarding edge weights and thereby omitting potentially useful information about collaboration intensity. The proposed framework can, however, be readily extended to weighted networks, particularly-
 in the node-level community detection phase. For example, existing approaches such as weighted SBMs or modularity-based methods for weighted networks can be directly incorporated into our framework (Fortunato and Hric, 2016; Ng and Murphy, 2021). Extending the core–periphery detection step to weighted settings would require adapting the objective function to account for weighted connectivity patterns (Borgatti and Everett, 2000; Tudisco and Higham, 2019; Rombach et al., 2012). Nevertheless, this -
remains a more challenging task, as weight distributions in empirical networks are often highly skewed, over- or under-dispersed, and influenced by exogenous factors, such as visibility, team size, or resource availability, rather than purely structural position. In summary, the present work provides the first explicit framework for detecting nested core–periphery structures at the community level. Future extensions will broaden its scope and deepen its explanatory power, contributing to the broad-
er study of hierarchical organization in complex networks.
Acknowledgements
Sara Geremia and Domenico De Stefano acknowledge financial support under the National Recovery and Resilience Plan (NRRP), with European Union resources, NextGeneration EU National Recovery and Resilience Plan, Mission 4 - Component 1 - Investment 4.1 - Project Title Models and methods for the analysis of collaboration networks – CUP J53D23011540006.
The doctoral scholarship is co-financed with European Union resources, NextGeneration EU - National Recovery and Resilience Plan, Mission 4 - Component 1 - Investment 4.1 – CUP J92B22000900007.
The authors thank Agenzia Lavoro & SviluppoImpresa – Friuli Venezia Giulia for the support.
20

References
Alba, R. D. and Kadushin, C. (1976). The intersection of social circles. A new measure of social proximity in networks. Sociological Methods and Research, 5:77 – 102.
Alba, R. D. and Moore, G. (1978). Elite social circles. Sociological Methods & Research, 7(2):167188.
Bacci, S., Bertaccini, B., and Petrucci, A. (2023). Insights from the co-authorship network of the italian academic statisticians. Scientometrics, 128(8):4269–4303.
Balland, P.-A., Boschma, R., and Ravet, J. (2019). Network dynamics in collaborative research in the EU, 2003–2017. European Planning Studies, 27(9):1811–1837.
Bassett, D. S., Wymbs, N. F., Rombach, M. P., Porter, M. A., Mucha, P. J., and Grafton, S. T. (2013). Task-based core-periphery organization of human brain dynamics. PLOS Computational Biology, 9(9):e1003171.
Batagelj, V. and Zaveršnik, M. (2003). An O(m) algorithm for cores decomposition of networks. arXiv:cs/0310049.
Blondel, V. D., Guillaume, J. L., Lambiotte, R., and Lefebvre, E. (2008). Fast unfolding of communities in large networks. Journal of Statistical Mechanics: Theory and Experiment, 2008(10):P10008.
Borgatti, S. P. and Everett, M. G. (2000). Models of core/periphery structures. Social Networks, 21(4):375–395.
Boyd, J. P., Fitzgerald, W. J., and Beck, R. J. (2006). Computing core/periphery structures and permutation tests for social relations data. Social Networks, 28(2):165–178.
Breiger, R. L., Boorman, S. A., and Arabie, P. (1975). An algorithm for clustering relational data with applications to social network analysis and comparison with multidimensional scaling. Journal of Mathematical Psychology, 12(3):328–383.
Brusco, M. (2011). An exact algorithm for a core/periphery bipartitioning problem. Social Networks, 33(1):12–19.
Colizza, V., Flammini, A., Serrano, M. A., and Vespignani, A. (2006). Detecting rich-club ordering in complex networks. Nature Physics, 2(2):110–115.
Côme, E., Jouvin, N., Latouche, P., and Bouveyron, C. (2021). Hierarchical clustering with discrete latent variable models and the integrated classification likelihood. Advances in Data Analysis and Classification, 15(4):957–986.
Csárdi, G. and Nepusz, T. (2006). The igraph software package for complex network research. InterJournal, Complex Systems:1695.
Csárdi, G., Nepusz, T., Traag, V., Horvát, S., Zanini, F., Noom, D., and Müller, K. (2025). igraph: Network Analysis and Visualization in R. R package version 2.1.4.
Cucuringu, M., Rombach, P., Lee, S. H., and Porter, M. A. (2016). Detection of core–periphery structure in networks using spectral methods and geodesic paths. European Journal of Applied Mathematics, 27(6):846–887.
De Stefano, D., Barbagli, A. G. F., Santelli, F., and Zaccarin, S. (2023a). Collaboration networks: methodological issues and updated empirical evidence on Italian statisticians.
21

De Stefano, D., Fuccella, V., Vitale, M. P., and Zaccarin, S. (2023b). Quality issues in coauthorship data of a national scientific community. Network Science, 11(1):98–112.
De Stefano, D., Giordano, G., and Vitale, M. P. (2011). Issues in the analysis of co-authorship networks. Quality & Quantity, 45(5):1091–1107.
Donthu, N., Kumar, S., Mukherjee, D., Pandey, N., and Lim, W. M. (2021). How to conduct a bibliometric analysis: An overview and guidelines. Journal of Business Research, 133:285–296.
Estévez, J. L. and Nordlund, C. (2025). Revising the Borgatti-Everett core-periphery model: Inter-categorical density blocks and partially connected cores. Social Networks, 81:31–51.
Fabbrucci Barbagli, A. G., De Stefano, D., Santelli, F., and Zaccarin, S. (2025). Unveiling collaboration persistence and interactions among italian academic statisticians through relational hyperevent models. Statistical Methods & Applications, pages 1–19.
Fortunato, S. (2010). Community detection in graphs. Physics Reports, 486(3-5):75–174.
Fortunato, S. and Hric, D. (2016). Community detection in networks: A user guide. Physics Reports, 659:1–44.
Gallagher, R. J., Young, J.-G., and Welles, B. F. (2021). A clarified typology of core-periphery structure in networks. Science Advances, 7(12).
Galtung, J. (1971). A structural theory of imperialism. Journal of Peace Research, 8(2):81–117.
Goltsev, A. V., Dorogovtsev, S. N., and Mendes, J. F. (2006). K -core (bootstrap) percolation on complex networks: Critical phenomena and nonlocal effects. Physical Review E - Statistical, Nonlinear, and Soft Matter Physics, 73(5):056101.
Hébert-Dufresne, L., Grochow, J. A., and Allard, A. (2016). Multi-scale structure and topological anomaly detection via a new network statistic: The onion decomposition. Scientific Reports, 6(1):1–9.
Hidalgo, C. A., Winger, B., Barabási, A. L., and Hausmann, R. (2007). The product space conditions the development of nations. Science, 317(5837):482–487.
Holland, P. W., Laskey, K. B., and Leinhardt, S. (1983). Stochastic blockmodels: First steps. Social Networks, 5(2):109–137.
Karlovčec, M., Lužar, B., and Mladenić, D. (2016). Core-periphery dynamics in collaboration networks: the case study of Slovenia. Scientometrics, 109(3):1561–1578.
Karrer, B. and Newman, M. E. J. (2011). Stochastic blockmodels and community structure in networks. Physical Review E, 83(1):016107.
Katz, J. S. (1994). Geographical proximity and scientific collaboration. Scientometrics, 31(1):3143.
Kojaku, S. and Masuda, N. (2017). Finding multiple core-periphery pairs in networks. Physical Review E, 96(5):052313.
Kojaku, S. and Masuda, N. (2018). Core-periphery structure requires something else in the network. New Journal of Physics, 20(4):043012.
Lee, C. and Wilkinson, D. J. (2019). A review of stochastic block models and extensions for graph clustering. Applied Network Science, 4(1):122.
22

Lee, S. H., Cucuringu, M., and Porter, M. A. (2014). Density-based and transport-based coreperiphery structures in networks. Physical Review E - Statistical, Nonlinear, and Soft Matter Physics, 89(3):032810.
Leger, J.-B., Barbillon, P., and Chiquet, J. (2021). blockmodels: Latent and Stochastic Block Model Estimation by a ’V-EM’ Algorithm. R package version 1.1.5.
Legramanti, S., Rigon, T., Durante, D., and Dunson, D. B. (2022). Extended stochastic block models with application to criminal networks. The Annals of Applied Statistics, 16(4):2369.
Lip, S. Z. W. (2011). A fast algorithm for the discrete core/periphery bipartitioning broblem. arXiv:1102.5511.
Lužar, B., Levnajić, Z., Povh, J., and Perc, M. (2014). Community Structure and the Evolution of Interdisciplinarity in Slovenia’s Scientific Collaboration Network. PLoS ONE, 9(4):e94429.
Menardi, G. and De Stefano, D. (2022). Density-Based Clustering of Social Networks. Journal of the Royal Statistical Society Series A: Statistics in Society, 185(3):1004–1029.
Mullins, N. C., Hargens, L. L., Hecht, P. K., and Kick, E. L. (1977). The Group Structure of Cocitation Clusters: A Comparative Study. American Sociological Review, 42(4):552.
Newman, M. E. (2002). Assortative mixing in networks. Physical Review Letters, 89(20).
Newman, M. E. J. and Girvan, M. (2004). Finding and evaluating community structure in networks. Physical Review E, 69(2):026113.
Ng, T. L. J. and Murphy, T. B. (2021). Weighted stochastic block model. Statistical Methods and Applications, 30(5).
Prebisch, R. (1949). The economic development of Latin America and its principal problems. United Nations Department of Economic Affairs.
Robinson, D. and Silge, J. (2025). Text Mining using ’dplyr’, ’ggplot2’, and Other Tidy Tools [R package tidytext version 0.4.3]. CRAN: Contributed Packages.
Robinson, J. S. D. (2017). Text Mining with R. O’Reilly Media, Inc.
Rombach, M. P., Porter, M. A., Fowler, J. H., and Mucha, P. J. (2012). Core-Periphery Structure in Networks. SSRN Electronic Journal.
Rosvall, M. and Bergstrom, C. T. (2007). An information-theoretic framework for resolving community structure in complex networks. Proceedings of the National Academy of Sciences of the United States of America, 104(18):7327–7331.
Schoch, D. (2024). CRAN: Package netUtils.
Scrucca, L. (2013). GA: A Package for Genetic Algorithms in R. Journal of Statistical Software, 53(4):1–37.
Sedita, S. R., Caloffi, A., and Lazzeretti, L. (2020). The invisible college of cluster research: a bibliometric core–periphery analysis of the literature. Industry and Innovation, 27(5):562–584.
Stanley, N., Bonacci, T., Kwitt, R., Niethammer, M., and Mucha, P. J. (2019). Stochastic block models with multiple continuous attributes. Applied Network Science, 4(1):54.
Tang, W., Zhao, L., Liu, W., Liu, Y., and Yan, B. (2019). Recent advance on detecting coreperiphery structure: a survey. CCF Transactions on Pervasive Computing and Interaction, 1(3):175–189.
23

Tudisco, F. and Higham, D. J. (2019). A fast and robust kernel optimization method for core–periphery detection in directed and weighted graphs. Applied Network Science, 4(1).
Wasserman, S. and Anderson, C. (1987). Stochastic a posteriori blockmodels: Construction and assessment. Social Networks, 9(1):1–36.
Wedell, E., Park, M., Korobskiy, D., Warnow, T., and Chacko, G. (2022). Center–periphery structure in research communities. Quantitative Science Studies, 3(1):289–314.
White, H. C., Boorman, S. A., and Breiger, R. L. (1976). Social structure from multiple networks. I. Blockmodels of roles and positions. American Journal of Sociology, 81(4):730–780.
Wuchty, S., Jones, B. F., and Uzzi, B. (2007). The increasing dominance of teams in production of knowledge. Science, 316(5827):1036–1039.
Yanchenko, E. and Sengupta, S. (2023). Core-periphery structure in networks: A statistical exposition. Statistics Surveys, 17(none).
Zelnio, R. (2012). Identifying the global core-periphery structure of science. Scientometrics, 91(2):601–615.
Zhang, X., Martin, T., and Newman, M. E. J. (2015). Identification of core-periphery structure in networks. Physical Review E, 91(3):032803.
Zhang, Y., Pan, R., Wang, H., and Su, H. (2023). Community detection in attributed collaboration network for statisticians. Stat, 12(1).
Zhou, S. and Mondragón, R. J. (2004). The rich-club phenomenon in the internet topology. IEEE Communications Letters, 8(3):180–182.
24

A Details of data generation in simulation study
Different network sizes, n = {100, 200, 500, 1000} and numbers of communities, K = {5, 10, 15} are considered. Each node is assigned to one of these communities according to a probability distribution τ = (τ1, . . . , τk, . . . , τK):
• Uniform
Each community is equally likely, so
τk = 1
K , k = 1, . . . , K,
• Non-uniform
The community proportions are drawn from a symmetric Dirichlet distribution:
τ ∼ Dirichlet(1K).
Node labels are then drawn as
qi | τ ∼ Categorical(τ ).
A parameter λ = {25, 50, 75} controls the percentage of communities belonging to the core. Networks are generated according to a SBM whose connectivity probability parameters are defined as a function of n (number of nodes) and community and core-periphery membership. Some considerations concerning the definition of these connectivity probabilities. In sparse SBMs, considering an expected node degree of at least log(n) can be relevant for ensuring connectivity and community structure detection, pa-
rticularly when connection probabilities scale as log(n)/n. In line with this theory, all our connection probabilities are a function of log(n)/n, so that the graph remains sparse as n → ∞. These probabilities are adjusted by a scaling factor (tuned by means of empirical evaluation and sensitivity analysis) which controls the relative density of connections between different types of node pairs (Table A1), allowing the generation of networks with both community and core-periphery structures.
Edge type Connection probability Within-community 8 · log(n)/n Core–core log(n)/n Core–periphery (1/8) · log(n)/n Periphery–periphery (1/40) · log(n)/n
Table A1: Scaling of edge probabilities by edge type.
B Alternative summary statistics
An alternative specification of the objective function in Equation 1 replaces the mean edge frequencies with the median edge frequencies of the core and periphery, denoted with mc and mp and replaces the standard deviations with the interquartile ranges IQRc and IQRp. The resulting alternative objective function is
φ ̃(z; Θˆ ) = δc + mc − IQRc − δp + mp + IQRp . (2)
Figure B1 reports the values of φ ̃(z; ˆΘ) for the simulation study of Section 4.2. While using more robust statistics such as medians and interquartile ranges may improve robustness to skewed or asymmetric connection densities, their discrete nature can create flat regions in the objective surface and generate multiple local optima. As a result, optimization becomes less stable, potentially complicating the identification of a unique community-level core–periphery partition.
25

5 core, 15 peripheral 10 core, 10 peripheral 15 core, 5 peripheral
0.00 0.25 0.50 0.75 1.00 0.00 0.25 0.50 0.75 1.00 0.00 0.25 0.50 0.75 1.00
−0.01
0.00
Balanced Accuracy
φ
Detected vs. actual core count
−10 −5 0 5 10
Figure B1: Scatter plot of the alternative objective function φ ̃(z; ˆΘ) using median and IQR vs. balanced accuracy for core-periphery networks with n = 1000 nodes, K = 20 communities, and core proportions of 25%, 50%, and 75%. Blue points represent solutions with more peripheral communities than the true structure, while red points indicate solutions with more core communities. The true solution (Balanced Accuracy = 1) is highlighted with a square.
C Additional results of simulation study
Figure C1 reports F1 score values for the simulation study of Section 4.3. Results with regards to F1 scores are in line with the BA results commented in the main text. Figure C2 shows the estimated number of clusters for each node-level community detection method (Louvain, Infomap, and SBM) in the simulation study of Section 4.3. In scenarios where the data-generating value of K is large, all three methods struggle to recover the true number of communities: Louvain and SBM typically underestimate-
 the number of clusters, whereas Infomap tends to overestimate it. Despite these inaccuracies, the results for core–periphery identification remain satisfactory (see Figures 3 and 4 in the main text). In particular, although the node-level SBM frequently underestimates K, the method nevertheless identifies the core–periphery partition correctly and consistently. This suggests that, when the number of clusters is underestimated, the estimated node-level communities tend to merge true communities wi-
thin the core, preserving the higher-order core–periphery structure even if the finer-grained clustering is not fully recovered.
D tf-idf distributions
Figure D1 reports the topic tf-idf and title tf-idf distributions for the co-authorship network of Section 5; see the main text for discussion.
26

K = 20
K = 10
K=5
500 1000
100 200 500 1000
100 200
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
F1
Louvain
K = 20
K = 10
K=5
500 1000
100 200 500 1000
100 200
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
Network size
Infomap
K = 20
K = 10
K=5
500 1000
100 200 500 1000
100 200
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
SBM
Community−level Core−periphery
K = 20
K = 10
K=5
500 1000
100 200 500 1000
100 200
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
Network size
Core (%)
25 50 75
B&E
Node−level Core−periphery
(a) Uniform
K = 20
K = 10
K=5
500 1000
100 200 500 1000
100 200
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
F1
Louvain
K = 20
K = 10
K=5
500 1000
100 200 500 1000
100 200
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
Network size
Infomap
K = 20
K = 10
K=5
500 1000
100 200 500 1000
100 200
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
SBM
Community−level Core−periphery
K = 20
K = 10
K=5
500 1000
100 200 500 1000
100 200
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
Network size
Core (%)
25 50 75
B&E
Node−level Core−periphery
(b) Non-uniform
Figure C1: (a) F1 score distribution across different network sizes (n) and numbers of communities (K) for uniform community sizes. (b) F1 score distribution across different network sizes (n) and numbers of communities (K) for non-uniform (Dirichlet-distributed) community sizes.
27

K = 20
K = 10
K=5
500 1000
100 200 500 1000
100 200
5
5
6
7
8
9
10
12
14
16
18
Number of Clusters
Louvain
K = 20
K = 10
K=5
500 1000
100 200 500 1000
100 200
5
5
10
15
20
25
30
40
60
80
Network size
Infomap
K = 20
K = 10
K=5
500 1000
100 200 500 1000
100 200
4
5
2
4
6
8
10
4
5
6
7
SBM
(a) Uniform
K = 20
K = 10
K=5
500 1000
100 200 500 1000
100 200
4
5
6
7
4
6
8
10
5
10
15
Number of Clusters
Louvain
K = 20
K = 10
K=5
500 1000
100 200 500 1000
100 200
4
5
6
7
10
20
30
20
30
40
50
60
70
Network size
Infomap
K = 20
K = 10
K=5
500 1000
100 200 500 1000
100 200
4
4
5
6
7
8
4
6
8
10
SBM
(b) Non-uniform
Figure C2: (a) Estimated number of clusters distribution across different network sizes (n) and numbers of communities (K) for uniform community sizes. (b) Estimated number of clusters distribution across different network sizes (n) and numbers of communities (K) for non-uniform (Dirichlet-distributed) community sizes.
28

7 89
4 56
1 23
0.000 0.005 0.010 0.000 0.001 0.002 0.003 0.000 0.002
0.000 0.002 0.004 0.000 0.002 0.004 0.000 0.010 0.020
0.000 0.003 0.000 0.002 0.000 0.003 0.006
quadratic
directorate
drift
elite
conversion
correspondence
lichen
contingency
interlock
symbolic
wildfire
interbank
systemic
fire
occurrence
urbanization
degradation
land
cover
sprawl
anthozoa
ideal
polytopes
aberration
gold
sensitivity
paramuricea
specificity
relative
permutation
randomisation
urn
operator
component
crashworthiness
functional
neyman
covariance
trawl
crack
normalize
poisson
cone
algorithm
polynomial
denis
siméon
zonal
em
symmetric
merger
auxiliary
belgium
marriage
conscript
prevention
servant
stratification
parturition
lent
bargaining
diaspora
religion
philosophy
seeker
populism
journalism
collective
organized
democracy
autocovariance
spectroscopy
fuzzy
anticodons
archetype
codon
underground
bandwidth
stationarity
symbolic
postponement
childlessness
parenthood
divorce
cohabitation
filial
piety
zoster
caregiving
grandchild
tf−idf
(a) Paper topic
78 9
45 6
12 3
0.000 0.001 0.002 0.003 0.000 0.000 0.001 0.000 0.001
0.000 0.000 0.001 0.000 0.001 0.000 0.002 0.004
0.000 0.000 0.001 0.000 0.002 0.000 0.001 0.002
summarize
unobservable
interlock
squares
stream
correspondence
symmetrical
higher
port
histogram
polycentric
rome
land
resin
port
peri
greece
sprawl
desertification
degradation
microrna
temporomandibular
trip
seismicity
coral
asthma
receiver
permutation
asbestos
fpca
nonparametrics
gibbs
stick
ship
dirichlet
aneurisk
stemi
modelli
yor
pitman
irt
autonomic
staffing
invariance
contaminated
autodependogram
electus
campionario
disegno
zenga
war
reproductive
compartmental
sharecrop
sjögren
umux
poverty
irt
alghero
nineteenth
populism
capitalism
mafia
religion
moral
transnational
brand
luxury
sociological
sociology
arthroplasty
planus
imprecise
medoids
archetypal
bullosa
epidermolysis
acyclic
burn
kemeny
geoadditive
contact
childlessness
florence
intergenerational
grandparenting
zoster
grandchild
varicella
grandparent
tf−idf
(b) Paper title
Figure D1: (a) Distribution of topic tf-idf by cluster. (b) Distribution of title tf-idf by cluster.
29

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:04.319Z
- **Text Length:** 84393 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 29 of 29
