# PDF Document: Broderick et al. - 2025 - Network and Risk Analysis of Surety Bonds.pdf

**File Path:** Broderick et al. - 2025 - Network and Risk Analysis of Surety Bonds.pdf

**Processed Date:** 2026-02-10T18:14:42.661Z

**File Size:** 3234.46 KB

**Total Pages:** 53

**Extracted Pages:** 53

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3568

**Title:** Network and Risk Analysis of Surety Bonds

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Network and Risk Analysis of Surety Bonds
Tamara Broderick, Ali Jadbabaie, Vanessa Lin, Manuel Quintero, Arnab Sarker
Institute for Data, Systems, and Society, Massachusetts Institute of Technology, Cambridge, MA 02139, {tamarab,jadbabaie,vllin,mquint,arnabs}@mit.edu
Sean R. Sinclair*
Department of Industrial Engineering and Management Sciences, Northwestern University, Evanston, IL 60208, sean.sinclair@northwestern.edu
Surety bonds are financial agreements between a contractor (principal) and obligee (project owner) to com
plete a project. However, most large-scale projects involve multiple contractors, creating a network and
introducing the possibility of incomplete obligations to propagate and result in project failures. Typical
models for risk assessment assume independent failure probabilities within each contractor. However, we
take a network approach, modeling the contractor network as a directed graph where nodes represent con
tractors and project owners and edges represent contractual obligations with associated financial records. To
understand risk propagation throughout the contractor network, we extend the celebrated Friedkin-Johnsen
model and introduce a stochastic process to simulate principal failures across the network. From a theoretical
perspective, we show that under natural monotonicity conditions on the contractor network, incorporating
network effects leads to increases in both the average risk and the tail probability mass of the loss distribu
tion (i.e. larger right-tail risk) for the surety organization. We further use data from a partnering insurance
company to validate our findings, estimating an approximately 2% higher exposure when accounting for
network effects.
Key words : Surety bonds, Contractor network, Risk propagation, Systemic risk, Opinion dynamics
1. Introduction
Surety bonds are a foundational mechanism in contractual risk management, widely used to guar
antee the completion of projects in sectors such as construction, infrastructure, and public works.
In a typical surety agreement, the surety company guarantees to the obligee (the project owner)
that the principal (a contractor) will fulfill the terms of a bonded contract. If the principal fails to
perform, the surety must step in to ensure project completion, often absorbing substantial financial
losses in the process (Russell 1990). These agreements are not only mandated for public contracts
under laws such as the U.S. Miller Act of 1935 (United States Code 2002), but also play a growing
role in private-sector project financing (Wambach and Engel 2011). Despite their ubiquity, surety
bonds remain difficult for contractors to secure, in part due to the unexpected and systemic nature
of failures, which can leave insurers liable; for instance, there were over $21 billion in claims between
1990 and 1997 in the U.S. alone (Wambach and Engel 2011).
* Contact author
1
arXiv:2511.05691v1 [q-fin.RM] 7 Nov 2025

Broderick et al.: Network and Risk Analysis of Surety Bonds 2
Contractor (pure principal)
Contractor (pure principal) Obligee of A, B Principal of D, E (Intermediary)
Project owner (pure obligee)
B
D
C
A
Project owner (pure obligee)
E
Figure 1 Illustrated representation of a series of subcontractor dependencies. Here we observe that a failure of
subcontractor A has the potential to propagate and affect C, and also the obligees D and E. Note that even
though A does not work directly with D or E, the intermediary C allows them to influence the risk of project
incompletion.
The pricing of surety bonds depends critically on the ability to assess the default risk of indi
vidual contractors. A large body of work in finance and insurance focuses on this task, estimating
failure probabilities using firm-level covariates such as credit ratings, leverage ratios, and liquid
ity metrics (Kim et al. 2019). While such models (often using statistical machine learning) have
improved the accuracy of idiosyncratic risk estimation, they share a key limitation: they assume
failures occur independently across firms. This assumption neglects an increasingly salient feature
of real-world contracting environments: network dependencies among contractors, subcontractors,
and project owners (see Fig. 1 for a toy contractor network, later in Section 5 we consider a
real-world contractor network with ∼ 30, 000 organizations). In practice, most large-scale projects
involve multi-tiered contractual relationships, where the performance of one firm is contingent on
the timely execution of work by others. As highlighted by recent industry reviews (Brouse 2024,
Business Continuity Institute 2021), subcontractor failure is one of the leading causes of bonded
losses. For instance, if a plumbing contractor cannot begin work until the electrical subcontractor
completes their portion of a build, the default of the latter creates a domino effect. In such envi
ronments, risk is not merely a function of a firm’s own characteristics, but also of its position in
the broader contractor network. Moreover, these cascading effects are pervasive across domains. In
supply chains, for example, the bankruptcy of an upstream supplier can cripple downstream pro
duction. In collaborative research, a delay in one lab’s work can stall the entire study. In interbank
lending networks, financial contagion spreads through credit exposures. Across all these settings,
a network-aware perspective is essential to understand and mitigate systemic risk.
However, despite growing recognition of these interdependencies, there remains a lack of formal
models that account for network effects in surety risk assessment. While prior work has examined
dynamic models of credit contagion and equilibrium default (Benzoni et al. 2015, Nickerson and

Broderick et al.: Network and Risk Analysis of Surety Bonds 3
Griffin 2017), these frameworks are often not tailored to the structure of bonded contractor net
works, where obligations are directional. Notably, recent theoretical work in stochastic dynamics
and mean-field models (Amini et al. 2022, Carmona et al. 2013) explores related ideas, but typically
assumes irreversible failures or continuous-time evolution, and does not address the specific dis
tributional shape of systemic losses, a critical consideration for insurers concerned about tail risk.
Our work is motivated by this important gap. Namely, we seek to answer the following research
questions:
How do contractor relationships influence systemic risk in surety-based contractor networks?
What conditions lead to cascading failures, and how do these propagate over time? Can we
identify key contractors whose failures disproportionately impact financial stability?
1.1. Main Contributions
Network-Based Model of Risk Propagation. In an attempt to tackle these questions, one of the
main contributions of this work is a network-based modeling framework for risk propagation in
surety-based contractor networks. Traditional models like Kim et al. (2019) assume independent
failure probabilities, not capturing how failures spread through contractor relationships. Instead, we
represent the contracting environment as a directed network G = (V, E), where nodes correspond to
principals (contractors) and obligees (project owners), and edges capture the potential flow of risk
through a contract for bonded work from principal to obligee. In contrast to network-unaware mod
els of failure dynamics, we introduce a stochastic process Xt = (Xt
i )i∈V which represents whether
node i ∈ V in the network fails at timestep t ∈ N. This stochastic process evolves according to the
following simple dynamics (see Eq. (1)):
X t+1
i = Bernoulli (1 − αi)ri + αi
X
j ∈δin (i)
wij X t
j,
Here, ri denotes the contractor’s idiosyncratic or individual risk score, αi represents the proba
bility that i is affected by one of their neighbors, δin(i) is the set of in-neighbors to i, and wij is
the fraction of i’s projects that are contracted to principal j. At t = 0, we set X0
i = Bernoulli(ri) to
denote the “independent” failure model. However, as t increases, we see that failures have the abil
ity to propagate and affect their neighbors through the terms wijXt
j. This framework generalizes
standard independent failure models and allows for a more realistic assessment of systemic risk in
these interdependent contracting environments, as we demonstrate in Section 5.
Mean-Field and Limiting Distribution Analysis. To understand how risk propagates in the net
work, we analyze the stationary distribution of the stochastic failure process Xt
i . We start off by
showing that the marginal failure probabilities mt
i = E[Xt
i ] converge to a unique fixed point mi
as their limiting failure probability (Proposition 1). This result generalizes the Friedkin-Johnsen

Broderick et al.: Network and Risk Analysis of Surety Bonds 4
model of opinion dynamics to a setting with heterogeneous bias parameters. We further quantify
the rate of convergence, establishing an exponential decay in |mt
i − mi| governed by the operator
norm of a squared weight-adjusted adjacency matrix, and additionally show that the convergence
occurs in finite time for acyclic contractor networks (Proposition 2).
Building on the mean-field analysis, we next study the full joint distribution over failures. The
stochastic process Xt
i defines a Markov chain over {0, 1}n, where n is the number of nodes (con
tractors and obligees) in the network. However, naive analysis will establish its convergence to the
stationary distribution in O(2n) time (Resnick 2013). In contrast, we show that in acyclic graphs,
the convergence occurs in at most d steps, where d > 0 is the length of the longest path in the net
work (Theorem 3). For general (not necessarily acyclic) networks, we leverage the structure of the
stochastic process to show it admits a coupling. This allows us to develop a contraction-based anal
ysis, and show that the rate of convergence scales logarithmically with respect to n (Theorem 2).
Together, these results characterize the stationary behavior of the failure stochastic process, and
show that the stationary distribution can be simulated efficiently.
Structural Insights into Amplification of Systemic Risk. Our modeling framework allows us to
quantify how systemic risk is amplified by the network structure beyond what traditional inde
pendent risk models predict. The main insight of our analysis is we show that when obligees hire
riskier contractors on average (Assumption 1), which is often observed in contractor networks
(Dietz 2018), both the expected failure probabilities (Theorem 1) and the right-tail probability
mass of the loss distribution (Theorem 4) increase over time. To formalize this, we design a mono
tone coupling between the highly-correlated stochastic process to its mean-field, allowing us to show
that these risk measures are stochastically dominated across time. We further outline conditions
(Assumption 2) such that the total risk and loss in the network is strictly larger (Proposition 3).
With this analysis we observe that contractor failures are not uniformly impactful—intermediary
nodes, which serve as bridges between multiple principals and obligees, are the primary drivers
behind the propagation of project incompletion across the network. In essence, by accounting for
network effects, we see that surety organizations may be fundamentally underestimating how risky
a contractor network is. Lastly, we define an eigenvalue centrality (Definition 1) that captures the
extent to which a contractor’s risk influences the broader network through downstream intermedi
aries. To summarize, our results formally characterize when and how network structure exacerbates
risk.
Empirical Validation and Risk Estimation. We validate our theoretical findings using
anonymized real-world surety bond data from a partnering insurance firm. Our empirical analysis
shows that accounting for network dependencies leads to a 2% higher estimated systemic risk com
pared to traditional models that assume independent contractor failures, and that the distribution

Broderick et al.: Network and Risk Analysis of Surety Bonds 5
of losses exhibits larger right tails, underscoring the potential for more severe extreme events. We
further develop a methodology for identifying critical nodes (contractors whose failures have large
effects on the network’s overall stability) and illustrate this with a detailed case study. Together,
these insights provide methodology and actionable recommendations for insurance providers and
policymakers seeking to better anticipate and mitigate systemic risk in contractor networks.
Paper Organization. We review the related literature in the remainder of this section. We for
mally present our model in Section 2. In Section 3 we analyze the mean failure probabilities,
establishing the rate of convergence to their limits. Then, in Section 4 we analyze the mixing time
of our stochastic process. Under both sections we provide insights into risk propagation due to
network structure. Finally, in Section 5 we complement our theoretical results on real-world data
from our partnering surety organization, and conclude in Section 6. When omitted, all proofs are
deferred to the appendix.
1.2. Related Literature
Our work lies at the intersection of operations research, economics, applied probability, and network
analysis, with close connections to models of financial contagion and surety risk. See Caccioli et al.
(2018) for a broad survey.
Empirical Studies in Surety Bonds. Surety bonds are a widely adopted mechanism to protect
against contractor defaults and offer several advantages over traditional insurance (Schubert and
Duke 2002). Surety bonds are typically priced using firm-level information such as financial ratios
or credit data (Schubert and Duke 2002, Kim et al. 2019). A large empirical literature applies statis
tical and machine learning methods, including logit regression (Tserng et al. 2014), SVMs (Tserng
et al. 2011, Horta and Camanho 2013), ensemble learning (Choi et al. 2018), and Bayesian net
works (Cao et al. 2022), to estimate individual contractors’ default probabilities from accounting
data (Barboza et al. 2017, Nguyen et al. 2025, Shumway 2001, Vassalou and Xing 2004). Although
some models incorporate macroeconomic covariates (Shumway 2001, Vassalou and Xing 2004),
all of this literature treats contractors as independent units, with no mechanism by which one
contractor’s failure propagates to others.
In practice, however, systemic factors and subcontracting dependencies create correlations
in defaults. Historical events such as the 1980s oil embargo led to widespread contractor fail
ures despite strong individual credit profiles (Russell 1990), and modern construction projects
often hinge on “lower-tier” subcontractors, whose disruptions can cascade through the supply
chain (Dietz 2018, Business Continuity Institute 2021). Motivated by these limitations, our model
augments contractor-level default estimates from the existing literature with network interactions,
capturing how contractual ties generate correlated risks and amplify potential losses.

Broderick et al.: Network and Risk Analysis of Surety Bonds 6
Financial Contagion and Cascade Models. Much of the contagion literature studies interbank
lending. An early contribution is Allen and Gale (2000), who model contagion as an equilibrium
phenomenon in interbank markets, where small liquidity shocks can spread through overlapping
claims. Subsequent work often uses threshold models in which a node defaults once losses from
its neighbors exceed a threshold (Watts 2002, Gai and Kapadia 2010, Elliott et al. 2014, Ace
moglu et al. 2015). These frameworks highlight how localized shocks can spread systemically, but
their dynamics are typically deterministic and tied to an initial shock event. More recent analy
ses consider noisy threshold contagion, where a small probability of below-threshold adoption can
accelerate the spread of complex contagion (Eckles et al. 2024). Unlike threshold contagion models
that assume diminishing returns from additional affected neighbors, our model is stochastic and
cumulative: a contractor’s failure risk grows as an aggregate function of weighted neighbor defaults
and an idiosyncratic baseline.
Other extensions consider multilayer contagion with mutations, where new strains can emerge as
the process spreads and heterogeneity across layers (e.g., schools, workplaces) shapes transmission
(Sood et al. 2023). This underscores how ignoring heterogeneity in either the contagion type or
the network structure can miscalculate systemic risk. In our setting, the analogous challenge is to
capture heterogeneity in contractor obligations and recovery, rather than multilayer or mutating
contagions.
A further distinction is that most threshold models assume that failed institutions remain insol
vent, whereas in surety settings, defaults trigger intervention from the surety organization to ensure
project completion. Models with recovery or stochasticity include recovery in reinsurance net
works (Klages-Mundt and Minca 2020), Gaussian noise in asset values (Ramirez et al. 2023), and
dynamic link formation with Crame ́r–Lundberg premiums/claims (Amini et al. 2022). However,
these approaches rely on explicit thresholds or detailed balance-sheet information uncommon for
bonded contractors. Instead, we propose a stochastic cascade model with heterogeneous exposures
and explicit recovery, tailored to contractor–surety networks.
Davis and Lo (2001) introduce an alternative to threshold contagion by modeling “infectious”
defaults, where bonds fail independently or through Bernoulli contagion within a sector. This
framework shares similarities with our approach in that defaults can arise either idiosyncratically
or via neighbors, but it assumes uniform exposures and fully connected networks. Moreover, it
lacks recovery, which are central in the surety context. Our model builds on this probabilistic
contagion idea while incorporating heterogeneity in network structure, firm characteristics, and
explicit recovery.

Broderick et al.: Network and Risk Analysis of Surety Bonds 7
Opinion Dynamics. Opinion dynamics provides a natural basis for modeling failure cascades,
where contractors correspond to individuals, and default probabilities correspond to opinions. A
central feature is neighbor influence, allowing local shocks to generate global effects across the
network. For instance, Benzoni et al. (2015) show how investors’ beliefs about bond pricing can
propagate through financial networks in ways that resemble contagion. A well-known framework is
the Friedkin–Johnsen model, in which agents reconcile their intrinsic beliefs with their neighbors’
views (Friedkin and Johnsen 1990). Our model has a similar structure: defaults may be triggered
by neighbors but are also shaped by inherent contractor-level failure probabilities. In fact, the
mean-field of our stochastic process corresponds to a variation of the Friedkin–Johnsen model when
opinions are reinterpreted as default probabilities (see Section 3.1). Related extensions, such as the
interacting P ́olya Urn model of Tang et al. (2024), further highlight how noisy observations and
social pressure interact with intrinsic beliefs.
Eigenvalue Centralities. The Friedkin–Johnsen model is closely connected to eigenvector-based
centrality measures such as Bonacich centrality and PageRank. Namely, Bonacich and Lloyd (2001)
highlight that Bonacich centrality can be applied to the same situations as the Friedkin-Johnsen
model, with the distinction that the latter is concerned with the limiting state, while Bonacich
centrality quantifies the level of influence each node has on the final equilibrium. This centrality is
analogous to the equilibrium output in response to a shock in the input-output model introduced by
Leontief (1986) and appears in other settings in the economics literature. For example, Acemoglu
et al. (2012) studies a network of production sectors and shows that the volatility of aggregate out
put scales with the size of an eigenvector-based centrality vector that is closely related to Bonacich
centrality. A special class of the Friedkin-Johnsen model also coincides with the teleportation model
of random surfing introduced by Page et al. (1999), Proskurnikov et al. (2016).
In financial settings, Battiston et al. (2012) propose DebtRank, an eigenvector-based measure of
systemic importance in interbank lending. While their measure prevents risk from being transmitted
multiple times along cycles, in surety networks repeated impacts of earlier failures are precisely what
matter. For this reason, we use an eigenvector-based centrality as a complement to our stochastic
model, capturing how individual risks amplify through contractual ties (see Section 3.2).
2. Network Model Definition
Technical notation. In what follows, for N ∈ N+, we let [N ] = {1, 2, . . . , N }. For a vector x we
use ∥x∥ to be its l∞ norm, i.e. ∥x∥ = maxi |xi|, and for a matrix A we use ∥A∥ to denote the
l∞-induced matrix norm, i.e. ∥A∥ = sup{∥Ax∥ : ∥x∥ ≤ 1}. For two vectors x and y we write x ≥ y
to denote the inequality holds entrywise. See Table 2 (appendix) for a full table of notation.

Broderick et al.: Network and Risk Analysis of Surety Bonds 8
Model primitives. We consider a large-scale network of contracts (edges) between contractors
and project owners (nodes). We represent this system as a directed graph G = (V, E), referred to as
the contractor network, where each node i ∈ V corresponds to an organization (subcontractor),
a sub-unit within an organization, a project owner (general contractor), or a collection thereof.
Throughout, let n = |V| denote the total number of nodes (equivalently, the number of contrac
tors/project owners) in the graph. Directed edges e = (j, i) ∈ E represent one or more bonded
contracts from principal j (the contractor) to obligee i (the project owner). These edges can cap
ture an entire portfolio of contracts issued from j to i, or a single agreement. Multiple edges are
not permitted, though self-loops and cycles are allowed.1 Nodes may act as both principals and
obligees, and thus can have both incoming and outgoing edges. For notational convenience, we
define the edge direction from j to i, indicating the flow of bonded obligations from contractor to
project owner; this also aligns with the flow of risk in the network, which moves in the opposite
direction of payment. Each edge e = (j, i) is associated with a weight wij, denoting the total frac
tion of i’s projects that are subcontracted to principal j. By construction, the incoming weights for
any obligee sum to one. We let W denote the weighted adjacency matrix, with entries Wij = wij,
and use δin(i) = {j | (j, i) ∈ E} and δout(i) = {k | (i, k) ∈ E} to denote the incoming and outgoing
neighborhoods of node i, respectively.
A node i ∈ V is said to be a pure principal if δin(i) = 0. This corresponds to organizations that
only act as subcontractors to other obligees, and do not have any bonded work that is deferred
to lower tier subcontractors. Similarly, a node i ∈ V is said to be a pure obligee if δout(i) = 0. In
practice, pure obligees typically represent project owners such as municipal agencies that contract
with a single general contractor or construction manager. Their indegree is usually one, reflecting
the primary contractor that organizes the project on their behalf. Any other nodes i are said
to be intermediaries. (See Fig. 1 for a representation of the three classes of contractors.) If
the graph contains only pure principals and pure obligees, it is bipartite and the flow of risk is
straightforward to characterize; principals affect only their obligees, and obligees are influenced
only by their principals. However, if the contracting network contains an intermediary, the risk
exposure it imposes on its obligees is dependent on its principals, because it relies on principals to
complete some of its obligations. This creates opportunities for risk to flow in unexpected ways,
where obligees are affected by principals they do not directly contract with.
As a model for network failure, we assume that each principal i ∈ V has an associated idiosyn
cratic risk score ri ∈ (0, 1). We interpret ri as the probability that node i fails independently.
1 Self-loops may seem superfluous, but it is often the case that one arm of an organization subcontracts to another arm of the same organization. Crucially, a self-loop feeds the consequences of a default back into the same contractor one time-step later: node i failing at time t raises the likelihood that i again defaults at t + 1.

Broderick et al.: Network and Risk Analysis of Surety Bonds 9
These are assumed to be determined exogenously, based only on individual node level attributes
and without any direct knowledge of the network.2 Because pure obligees do not perform bonded
work themselves we model their idiosyncratic risk as zero, ri = 0. Any project failure at that
level is therefore interpreted as the consequence of downstream contractor defaults rather than an
independent failure of the obligee.
We additionally associate with each node a value αi ∈ [0, 1] corresponding to their network
associated failure propagation probability. We use αi to denote the probability that a failure of one
of node i’s neighbors propagates and affects node i, essentially a measure of node i’s susceptibility
to project incompletion by its principals. Accordingly, we set αi = 1 for pure obligees, which by
construction means that any failure of their principals directly translates to project incompletion at
the obligee node, and αi = 0 for any pure principals since none of their work is performed by other
principals. Further, any node which is an intermediary has αi ∈ (0, 1). We let A be the diagonal
matrix with entries Aii = αi for i ∈ V.
Remark 1. In our model we assume that the entire contractor network is fully observed by
the surety organization. This is unlikely to hold in practice, since each surety organization only
observes contracts that their organization bonds. In Section D.2 we present methodology to impute
these unobserved edges based on observed contracts and organization-level financial records.
Stochastic Risk Propagation. We are interested in simulating cascading failures across the con
tractor network. In accordance with this goal, we will define a stochastic process (Xt
i )i∈V,t∈N to
model our failure dynamics, where Xt
i ∈ {0, 1} will denote the indicator of whether contractor
i fails at timestep t. When i is a pure obligee we represent this as the indicator that one of i’s
project fails. We further denote Xt to represent the vector (Xt
i )i∈V of node-level failures at time
step t. This is with slight abuse of notation, since elsewhere we use bold capital letters to denote
matrices. We emphasize that the notion of timestep in this model is primarily used as a vehicle for
understanding the stationary failure dynamics.
Initially we assume that each X0
i ∼ Bernoulli(ri), corresponding to each node i failing indepen
dently according to their own inherent idiosyncratic risk score. Since pure obligees have ri = 0,
X0
i = 0 for those nodes. The dynamics of the stochastic process are:
X t+1
i ∼ Bernoulli (1 − αi)ri + αi
X
j ∈δin (i)
wij X t
j . (1)
In X0
i , each node fails independently according to their inherent idiosyncratic failure probability.
Afterwards, conditional on (Xt
j )j∈V , the failure probability is as follows. First, αi denotes the prob
ability that node i’s failure is affected by its neighbors. Hence, αi
P
j∈δin(i) wij X t
j is the cumulative
2 In practice these scores are based on each organization’s financial records and hence include some limited network effects. However, we treat these as exogenous inputs into the model.

Broderick et al.: Network and Risk Analysis of Surety Bonds 10
$2.1M
A
BE
C
D
$1.4M
$0.7M
$2.8M
$1.7M
Figure 2 Sample contractor network (see Fig. 1). Here we see that contractor C is an obligee for both A and
B (with contract value $2.1M and $1.4M respectively). Solid (dashed) edges denote active (failed) obligations;
dark-filled nodes are in default; light-filled nodes are solvent. Hence, our model captures the effect of contractor
A’s failure on both the intermediary C but also the pure obligee E.
risk associated with their in-neighbors (principals) under this event. Otherwise, with probability
(1 − αi) the node fails according to its own idiosyncratic risk score ri. We further note that this
defines a probability distribution over {0, 1}n which we denote as P(Xt).
Example 1. Consider a simplified contracting network composed of five organizations (see Fig
ure 2). Each edge in the network represents a bonded contractual obligation, with annotated edges
indicating the associated financial exposure. Edge weights are then calculated as the relative finan
cial exposure to the obligee from each of its principals (e.g. C’s exposure to A is 0.6 since A is
responsible for 60% of the work conducted to C). Companies A and B are pure principals, since
they do not subcontract work to any other organizations. Company C is an intermediary, since
they are both subcontractors to Companies D and E, but obligees to companies A and B. Finally,
Companies D and E are pure obligees.
This example illustrates how the failure of a pure principal (e.g., A defaults) can propagate
through the network in the stochastic process. If C cannot complete its contractual obligations to
E because A fails, then E may incur losses, even though it never directly contracted with A. Such
indirect dependencies are not captured in standard models assuming independent risk, but they
are central in our network-aware framework. This further underscores the role of intermediaries
like C in amplifying risk: even with moderate idiosyncratic risk levels for A and B, the dependency
structure means that failures can cascade through the network, elevating systemic risk beyond
what node-level scores would suggest.
For each node i ∈ V we use βi to denote their financial loss, i.e. the amount that the insurer
needs to pay out in case of node i’s failure. Inherent to this definition is that βi = 0 for all nodes i
that are pure obligees (since they only receive bonded work). Lastly, we denote the global financial
loss as:
L(Xt) =
X
i∈V
βi X t
i = β⊤Xt, (2)

Broderick et al.: Network and Risk Analysis of Surety Bonds 11
which denotes the cumulative financial loss associated with all of the nodes in the network if
their failures are dictated by Xt and the financial loss per node is βi. This quantity captures how
individual contractor defaults aggregate into broader network-wide loss for the surety organization.
Our main goal in the rest of this work centers on understanding the stochastic process Xt, its
asymptotic behavior, and providing insights into how network structure influences systemic risk.
We then leverage this analysis to compare L(X0) (the independent failure model) to the stationary
behavior of L(Xt) to quantify the financial effect of cascading failures in surety networks. We
focus on the stationary behavior of the stochastic process primarily to serve as a measure of risk
propagation in the network, and leave further studies on the transient behavior of the stochastic
process for future work.
2.1. Discussion of Modeling Assumptions
We conclude the section with a discussion of our modeling assumptions.
Static Network Structure. In reality, contractor networks are time-varying since edges are dic
tated by contracts with fixed terms. However, our model assumes a fixed contractor network over
time, meaning we do not allow for the entry or exit of contracting organizations, nor do we model
the formation or dissolution of contractual ties. This assumption enables a clean equilibrium anal
ysis of systemic risk and allows us to characterize how risk distributes over the network in steady
state. That said, incorporating a dynamic network formation remains an important practical direc
tion for future work. In Section 4.1 and Section C.1 we show that our result on the mixing time
for the stochastic process applies under time-varying contractor networks.
Exogenous Risk Scores. We treat each contractor i’s idiosyncratic risk score ri and network
sensitivity parameter αi as exogenously specified inputs to the model. In practice, these parameters
are inferred from financial health indicators or historical default data, and likely take into account
mild network risk indicators (Kim et al. 2019). However, regardless of how ri are estimated, our
model allows for the direct incorporation of network effects on risk in contractor networks.
Linear Risk Amplification. Our stochastic process assumes that a contractor’s risk of failure
increases linearly based on the impact of their neighbors via wij (see Eq. (1)). This additive
structure simplifies both analysis and simulation, but it may fail to capture important nonlinearities
in real-world contagion effects. For instance, a contractor may be robust to isolated failures but
vulnerable to risks beyond a certain threshold, such as in the threshold contagion model like Watts
(2002).
Risk Amplification Proportional to Financial Obligations. Our work assumes that network
induced risk depends on the proportion of a contractor’s total subcontracted value attributed
to each subcontractor, as encoded by the normalized edge weights wij. This formulation reflects

Broderick et al.: Network and Risk Analysis of Surety Bonds 12
a reasonable first-order approximation: risk exposure grows with financial dependence on risky
neighbors. Although real-world contracts vary in risk beyond their dollar value, introducing such
heterogeneity would significantly complicate the model without materially changing our core the
oretical insights.
Inclusion of Pure Obligees. We emphasize that pure obligees i in the network have ri = 0, βi = 0,
and no outgoing edges. Consequently, they do not contribute directly to either the global finan
cial loss L(Xt) or to risk propagation through the network. In practice, pure obligees typically
correspond to project owners such as city municipalities or agencies that contract with a single
primary contractor and do not perform bonded work themselves. While such organizations could,
in principle, experience project disruptions for idiosyncratic reasons (e.g., funding or scheduling
issues), these are exogenous to the surety relationship and thus outside the scope of our model. We
nevertheless include pure obligees to quantify the likelihood that project owners receive incomplete
work from their principals, and to evaluate how the position of these owners within the network
affects their exposure. Their inclusion also enables the computation of our centrality measure,
which captures differences in downstream vulnerability across obligees. We return to these points
in our numerical simulations (Section 5).
3. Mean Field Analysis of Expected Risk
We start off our analysis by considering the marginal expected risk failure probabilities of the
stochastic process Xt for each node i. We will later see that this corresponds to a modified Friedkin
Johnsen model in the opinion dynamics literature (Friedkin and Johnsen 1990), and calculate
a closed-form expression for the mean failure probabilities. We also exploit this representation
to describe an eigenvector-based centrality measure, assigning scores to each node in the graph
corresponding to their risk-based centrality within the contractor network. We close this section
by providing a simple monotonicity condition under which the mean failure probabilities for each
node increase due to network effects.
3.1. Expected Failure Probabilities
We start off by analyzing the mean field dynamics of our stochastic process Xt. We introduce
notation and set mt
i = E[Xt
i ] for all i ∈ V and t ∈ N. All proofs are deferred to Section B.1. Note
that mt
i corresponds to the marginal failure probability of node i in step t of the stochastic process.
By definition in Eq. (1), it is easy to see that mt
i satisfies the following recursive equation:
Lemma 1. For all i ∈ V and t ∈ N we have that m0
i = ri and
mt+1
i = (1 − αi)ri + αi
X
j ∈δin (i)
wij mt
j. (3)
Equivalently in matrix notation, m0 = r and mt+1 = (I − A)r + AWmt.

Broderick et al.: Network and Risk Analysis of Surety Bonds 13
0.6
0.4
1
0.62
0.38
A
BE
C
D
Figure 3 Fig. 2 but with normalized edge weights. If we set r = [.2, .1, .05, 0, 0] and α = [0, 0, 0.25, 1, 1] then
m = [0.2, 0.1, 0.0775, 0.0775, 0.08605]. Thus, we see that contractor C’s risk score increases from 0.05 to 0.0775 due
to their position within the network. The pure obligee D gets a risk score equal to its sole subcontractor C, while
obligee E’s risk score is a weighted average of both its principals.
Lemma 1 shows how the mean failure probabilities satisfy a similar dynamics equation to the
original stochastic process in Eq. (1). The obvious next question is whether mt
i converges as t → ∞,
and whether we can characterize the rate of convergence by the underlying contractor network. In
the case that mt
i converges, we let:
mi≜ tli→m∞ mt
i = tli→m∞ E[Xt
i ] (4)
denote the limiting failure probability of node i ∈ V.
Our first main result of this section shows that the limiting failure probabilities indeed exist and
satisfy a fixed point equation.
Proposition 1. For any contractor network and any node i ∈ V, the limiting failure probabilities
mi exist and satisfy the following fixed point equation:
mi = (1 − αi)ri + αi
X
j ∈δin (i)
wijmj, m = (I − A)r + AWm. (5)
Moreover, (I − AW) is invertible and so m is unique and satisfies:
m = (I − AW)−1(I − A)r. (6)
Proposition 1 establishes a closed-form expression for the limiting failure probabilities m in
terms of the adjacency matrix W, idiosyncratic risk scores r, and failure propagation probabilities
A. In Fig. 3 we illustrate the average failure probabilities computed over the contractor network
from Example 1. First note that mi = ri for any pure principals i, since they do not experience
any network effects. However, the intermediary C’s mean failure probability increases when taking
into account network structure due to their position in the network (we provide conditions under
which this occurs in Section 3.3).
The operator (I − AW)−1 admits multiple interpretations across related literatures. In Markov
chain theory, it parallels the fundamental matrix of absorbing chains, where each entry gives the

Broderick et al.: Network and Risk Analysis of Surety Bonds 14
expected number of visits to a state prior to absorption (Kemeny et al. 1969). From a graph
theoretic perspective, it plays a role similar to the pseudoinverse of the graph Laplacian, which
encodes mean hitting times, commute times, and effective resistances (Lov ́asz 1993, Doyle and
Snell 1984, Chung 1997). In our context, this highlights that (I − AW)−1 aggregates contributions
from all higher-order paths in the contractor network, providing an interpretable link between local
idiosyncratic risks and their amplified global effects.
We defer the proof of Proposition 1 to Section B.1, and here we outline the key technical steps.
Our approach begins by establishing in Lemma 2 that the l∞-induced norm satisfies ∥(AW)2∥ <
1. This implies that the power sequence (AW)t vanishes as t → ∞, ensuring the existence and
uniqueness of the limiting mean field. Importantly, while the process may not be contractive in
a single iteration (since pure obligees with αi = 1 can only be influenced by their principals), it
is always contractive after two iterations. Intuitively, every obligee is connected to at least one
intermediary or principal with αi < 1, so risk propagation cannot sustain itself indefinitely. This
“two-step contraction” property is a structural feature of the surety process.
Lemma 2. Let A be a diagonal matrix with Aii = αi for all i ∈ V and let W be the row-stochastic
adjacency matrix of the contractor graph G. Then we have ∥(AW)2∥ < 1 and (AW)t → 0 as t → ∞.
This bound is useful for showing that the Neumann series of AW converges, which we formalize
in the following corollary:
Corollary 1. Let A be a diagonal matrix with Aii = αi for all i ∈ V and let W be the row
stochastic adjacency matrix of the contractor graph G. Then (I − AW) is invertible, and the
Neumann series P∞
t=0(AW)t converges to (I − AW)−1.
Consequently, we conclude that the matrix (I − AW) is invertible, and its inverse is given by the
Neumann series. This guarantees both existence and uniqueness of the limiting vector m, which
satisfies the fixed-point formula in Eq. (6). We complete the proof by expanding the recurrence
relation in Eq. (3) and taking limits as t goes to infinity of the mean failure probability vector.
Proposition 1 highlights that, for all i ∈ V, the failure probabilities mt
i converge to their limiting
failure probabilities mi, and offers a closed form expression for mi. This allows us to calculate
the network-adjusted limiting failure probabilities for each node in the network for an arbitrary
contractor graph. In our next result we quantify the rate of convergence. We establish that in
directed acyclic graphs, the convergence occurs in finite time. In particular, the process converges
in just d steps, where d > 0 is the longest path length in the graph.
Proposition 2. For any contractor network and t ≥ 2 we have that:
∥mt − m∥ ≤ 1 + 2
1 − ∥(AW)2∥ ∥r∥∥(AW)2∥⌊t/2⌋.

Broderick et al.: Network and Risk Analysis of Surety Bonds 15
Moreover, if G is acyclic and we denote by d > 0 its maximum path length, then for all t ≥ d and
all i ∈ V we have mt
i = mi.
Relation to Friedkin and Johnsen (1990). Our model is closely related to the social influence
model under static conditions introduced by Friedkin and Johnsen (1990), which describes a process
in which an individual’s opinion at time t + 1 is represented as a real-valued linear function of both
their innate opinion (determined by exogenous variables) and the opinions of their in-neighbors
in the previous time step t. Let mt denote the vector of opinions at time t ≥ 0, where r = m0
denotes the vector of inherent opinions that each individual holds at time t = 0. Then opinions
evolve according to the following dynamics for all t ∈ N:
mt+1 = γr + αWmt, (7)
where W is an influence matrix in which wij corresponds to the extent to which i takes j’s opinion
into account, and α, γ are scalar bias parameters that represent the importance nodes place on
the weighted sum of their neighbors’ opinions and on their inherent opinion, respectively. Then if
α < 1 and α−1 is not an eigenvalue of W, the process converges to
m ≜ tli→m∞ mt = tli→m∞(I + αW + · · · + αtWt)γr = (I − αW)−1γr.
The stationary distribution then reflects each individual’s final opinion as a scalar on some spec
trum.
Adapting their model to our context of risk, we interpret a node’s opinion as its probability of
failure, which is dependent on failure probabilities of subcontractors according to the transition
matrix W in the same manner that individuals in the social influence model take their neighbors’
opinions into account. Thus in our context we require that “opinions” take values in [0, 1]. Moreover,
to ensure that mt maintains its interpretation as a vector of probabilities for all t ∈ N, we also
require W to be row-stochastic and that α, γ > 0 satisfy α+γ = 1. Then we can rewrite Equation (7)
as mt+1 = (1 − α)r + αWmt.
Comparing with our dynamics in Equation (3), the main difference from Friedkin and Johnsen
(1990) is that they assume a common bias parameter α, whereas our model allows node-specific
bias parameters by replacing α and γ with diagonal matrices A and (I − A). Note that in contrast
to the Friedkin-Johnsen model, we consider a directed network, so to handle nodes i ∈ V that lack
in- or out-edges we fix their αi as described in Section 2. More broadly, their framework models
the deterministic evolution of average opinions, while ours defines a discrete stochastic process over
binary outcomes, yielding the full distribution of failures across the network rather than only mean
behavior.

Broderick et al.: Network and Risk Analysis of Surety Bonds 16
3.2. Identifying the Impact of Network Structure
The previous discussion highlights that the mean failure probabilities m satisfy an equilibrium-type
dynamic. This suggests that the underlying risk propagation in the network stabilizes to a fixed
distribution of failure probabilities across nodes. Here, we exploit the closed-form definition of the
failure probabilities to systematically identify “risky” nodes within the network — those whose
individual or structural properties contribute significantly to overall systemic risk.
From Proposition 1 we established that, for all i ∈ V the failure probabilities mt
i converge to
their steady-state values mi, which satisfy the fixed-point equation:
m = (I − AW)−1(I − A)r.
This expression captures how the individual risk factors r interact with the network structure,
where A and W determine the interplay between direct risks and dependencies between nodes.
To better understand the network-wide risk contribution, we consider the average limiting failure
probability across all nodes, given by (where we denote 1 as the vector of all 1s):
1⊤
n m = 1⊤
n (I − AW)−1(I − A)
| {z }
u⊤
r, (8)
where n is the total number of nodes in the network. This expression shows that the overall
failure risk can be rewritten as a network-adjusted re-weighting of the individual idiosyncratic risk
scores r. The term (I − AW)−1 highlights that risk exposure is not limited to direct neighbors:
it aggregates contributions from all paths in the network, with longer paths down-weighted by
successive products of exposure probabilities.
Definition 1. We set
u⊤ = 1⊤
n (I − AW)−1(I − A) (9)
to denote the risk-based centrality vector.
This definition is analogous to traditional PageRank in web search algorithms (Brin and Page 1998,
Page et al. 1999, Kleinberg 1999), where importance is assigned based on structural connectivity.
Here, however, the risk-based centrality captures how individual nodes influence the system-wide
failure probability. It accounts for both direct contributions from individual risk levels (through
A) and the indirect propagation of risk through network interactions (through W). Note that by
construction, ui = 0 for all pure obligees i, i.e. nodes with αi = 1. This follows from the structure
of I − A, where nodes corresponding to obligees contain only zero entries. Intuitively, pure obligees
absorb risk but do not emit risk, and so their risk-based centrality measure is zero.

Broderick et al.: Network and Risk Analysis of Surety Bonds 17
More generally, the value of ui for i ∈ V provides an interpretation of how risk is structurally
amplified within the network.3 Nodes with higher ui contribute more significantly to the overall
risk amplification. These nodes not only possess inherent risk but also transmit risk to others,
affecting the network-wide failure probability.
3.3. Impact of Risk Propagation on Mean Field
We close out this section with a central concern for contractor networks: the potential for risk
amplification due to a contractor’s location within the network. While our model allows for flexible
dynamics, it remains unclear how individual risk exposures respond to changes in the network
structure. In particular, we seek to understand whether, for each i ∈ V, a firm’s limiting failure
probability mi is amplified (larger than ri) when it interacts with riskier principals. To facilitate
this analysis, we introduce a structural assumption on contracting organizations, which posits that
contractors engage with organizations with higher risk. While this may not hold universally, we
show that it is a sufficient condition for m ≥ r across the entire network.
Assumption 1. We assume for all intermediaries i ∈ V, the average risk of their principals is
greater than or equal to their own inherent idiosyncratic risk score, i.e.
X
j ∈δin (i)
wijrj ≥ ri.
While Assumption 1 may appear restrictive, it aligns with patterns observed in real-world con
tractor networks (Business Continuity Institute 2021). In practice, principals that subcontract work
are often larger and hence less risky, whereas the subcontractors they engage with are typically
smaller and more exposed to risk, which is in part due to a less rigorous vetting process (Dietz
2018). Although this assumption does not hold universally in our empirical setting in Section 5,
we demonstrate that similar results emerge in our application.
We now present our main result for this section (see Section B.2 for the proof).
Theorem 1. Under Assumption 1, the mean failure probability vector evolves monotonically:
for all t ∈ N,
mt ≤ mt+1, E[L(Xt)] ≤ E L(Xt+1) .
Hence,
m ≥ r, E[L(X∞)] ≥ E L(X0) .
3 Here we are primarily interested in how the structure amplifies individual risks, so we focus on the average failure probability over all nodes. If we instead consider the expected aggregate loss L(m), we get an alternate centrality measure u ̃⊤ = β⊤(I − AW)−1(I − A) that weights failure probabilities to describe the expected contribution of each node to aggregate loss.

Broderick et al.: Network and Risk Analysis of Surety Bonds 18
Moreover, increasing the exposure parameter αi of any intermediary i can only raise the entries of
m:
∂m
∂αi
= (I − AW)−1 ∂A
∂αi
[Wm − r] ≥ 0.
Under the opposite of Assumption 1, all inequalities hold in the reverse direction.
Remark 2. The monotonicity in Theorem 1 can be viewed through the lens of potential the
ory: under Assumption 1 the mean failure probabilities evolve as a subharmonic function on the
contractor graph, so the limiting vector m is the smallest subharmonic majorant of the initial risks
r (Chung 1997). Reversing the assumption yields the superharmonic analogue.
The first part of Theorem 1 shows that, under Assumption 1, the mean failure probability for each
node mi evolves monotonically over time. Consequently, the expected global average loss E[L(Xt)]
is also monotone with respect to t and converges to the global average risk associated with the
stationary process. The intuition is straightforward: risk propagates through the network because
intermediaries rely on principals who, on average, are at least as risky as themselves. Over time,
this accumulation amplifies failure probabilities throughout the network. A central insight here
is that under Assumption 1, incorporating network structure consistently yields a higher expected
global loss than models that assume independent failures. The second part of Theorem 1 examines
monotonicity with respect to the network-associated failure propagation rates αi for all i ∈ V.
This highlights the robustness of Theorem 1: its conclusions hold across a wide range of α values
and underscore how systemic risk is shaped jointly by idiosyncratic contractor risk and network
position.
Our next assumption strengthens Assumption 1 by requiring that a contractor’s neighbors, on
average, have not just a higher inherent risk but a risk level that exceeds the contractor’s by a fixed
margin. We will then show the propagation of the margin in terms of its downstream cumulative
risk measures.
Assumption 2. We assume for all intermediaries i, the average risk of their neighbors is strictly
greater than their own inherent idiosyncratic risk score, i.e. there exists a δ > 0 such that
X
j ∈δin (i)
wijrj − ri ≥ δri.
Using this, we highlight the impact of risk propagation in the network by presenting lower bounds
on the increase in failure probabilities. Indeed, under Assumption 2 we can establish the following
result (proof deferred to Section B.2).
Proposition 3. Under Assumption 2 we have that:
m − r ≥ δ(I − AW)−1Ar,
E[L(X∞)] − E L(X0) ≥ δβ⊤(I − AW)−1Ar.

Broderick et al.: Network and Risk Analysis of Surety Bonds 19
00 01 10 11
(xD, xE)
111 110 101 (1x0A0, xB,0x1C1) 010 001 000
-0.525 -3.863 -4.029 -3.391
-3.052 -5.466 -6.655 -5.797
-2.722 -6.060 -6.226 -5.588
-5.250 -7.663 -8.852 -7.994
-1.911 -5.249 -5.415 -4.777
-4.439 -6.852 -8.041 -7.183
-4.108 -7.446 -7.612 -6.974
-6.636 -9.050 -10.238 -9.381
Visualization of (x) from Example 1
00 01 10 11
(xD, xE)
111 110 101 (1x0A0, xB,0x1C1) 010 001 000
-0.580 -2.943 -3.057 -5.419
-3.057 -5.419 -5.533 -7.896
-2.777 -5.140 -5.254 -7.617
-5.254 -7.617 -7.731 -10.094
-1.966 -4.329 -4.443 -6.806
-4.443 -6.806 -6.920 -9.283
-4.163 -6.526 -6.640 -9.003
-6.640 -9.003 -9.117 -11.480
If nodes failed independently according to m
10
8
6
4
2
log( (x))
Figure 4 (Left) Visualization of the stationary distribution over all possible states x ∈ {0, 1}5 in Example 1
computed from Theorem 3. Rows enumerate the possible states of principals A, B, C, while columns enumerate
possible states of pure obligees D, E. The heatmap entry in row (xA, xB, xC ) and column (xD, xE) then gives the
log probability of x = (xA, xB, xC , xD, xE) in the stationary distribution. (Right) Visualization of the joint
distribution if node failures were instead sampled independently from the mean-field marginals. We point out that
the probabilities of all joint default events in which D and E fail increase when we account for network effects,
reflecting how the defaults of D and E become correlated through their shared principal C.
This result highlights how the limiting failure probabilities increase in proportion by a factor of δ,
highlighting how seemingly modest shifts in network composition can escalate systemic exposure.
4. Asymptotic Behavior of Stochastic Risk Process
The previous section analyzed the asymptotic behavior of the marginal average failure probabilities
mi for all i ∈ V. However, this approach ignores details about the network structure and the main
feature that distinguishes this model from independent failure models: the potential for the limiting
behavior of nodes to be correlated. In this section, we turn our attention to the full stochastic
process Xt. We first establish that Xt is a Markov chain that converges to a unique stationary
distribution (proof deferred to Appendix C), and then we quantify the rate of convergence to its
stationary distribution in terms of the mixing time. We close out with a discussion on conditions
under which the distribution of L(Xt) is stochastically dominated (a distributional extension of
monotonicity) over t, highlighting the positive impact of network effects on tail risk.
Lemma 3. (Xt)t∈N is a Markov chain over the state space {0, 1}n that converges to a unique
stationary distribution with probability mass function π(x) = limt→∞ P(Xt = x) for all x ∈ {0, 1}n.
Before continuing, we note that by the continuous mapping theorem and the linearity of L(·), it
follows from Lemma 3 that the sequence L(Xt) converges almost surely as t → ∞ to L(X∞).

Broderick et al.: Network and Risk Analysis of Surety Bonds 20
The previous lemma establishes that the stochastic process Xt has a unique stationary distri
bution, which we will denote as π. By analyzing π, we can understand the limiting behavior of
risk propagation in our contractor network. In Fig. 4 we provide a visualization of the stationary
distribution under Example 1. We point out that the probabilities of all joint default events in
which D and E fail increase when we account for network effects, reflecting how the defaults of D
and E become correlated through their shared principal C.
We will abuse notation slightly and let X∞ denote a random variable whose distribution is sam
pled according to π. We begin by focusing on quantifying the rate of convergence of the stochastic
process Xt for t ∈ N to its stationary distribution π, measured in terms of the mixing time:
tmix(ε) = inf{t ≥ 0 : dT V (π, P(Xt)) ≤ ε},
where ε > 0 and we treat the distributions as vectors over R2n. This directly impacts our ability
to simulate network risk efficiently, as a slow-mixing process would require extensive time steps
to approximate the long-run behavior accurately. By quantifying the mixing time, we establish
bounds on how many iterations are needed before simulations yield reliable estimates of systemic
risk (leveraged in our numerical simulations in Section 5). Additionally, knowing the convergence
rate allows us to assess how network structure influences the speed of risk propagation.
4.1. Mixing Time of the Stochastic Process
Recall in Section 3.1 we showed that the convergence rate of the mean failure probabilities in our
stochastic model depends on the rate of decay of AW. Here, we extend this insight to the full
stochastic process, showing that the distribution over network failures also mixes depending on
the rate of decay of AW. These results are, in a sense, quite surprising. Classical Markov chain
arguments that operate directly on our state space {0, 1}n would give bounds on the mixing time
that scale with the size of the state space, i.e. exponentially in n (Resnick 2013). Such bounds are
useless for the networks of interest here. Our analysis instead shows that the mixing time actually
increases at a logarithmic rate in n (for fixed accuracy ε). Moreover, in the special but important
case in which the contractor graph G is a directed acyclic graph (DAG), the chain mixes in a finite
number of steps that equals the depth of the DAG. Moreover, for DAGs the stationary distribution
can be written in closed form by propagating probabilities along a topological order; see Fig. 5.
The proof relies on a synchronous coupling of two copies of the process, (Xt, Yt)t∈N, driven by the
same randomness. A single step of the dynamics need not be contractive in general because of the
pure obligees, but we show that the evolution is contractive every two steps (similar to Lemma 2).
Consequently, the decay of the discrepancy can be controlled by ∥(AW)2∥, which was shown to be
strictly less than one in Lemma 2. A version of this result also holds under time-varying graphs
under the assumption that principals and obligees remain principals and obligees across all time
steps. See Section C.1 for more details.

Broderick et al.: Network and Risk Analysis of Surety Bonds 21
Theorem 2. Let G be an arbitrary contractor network. Then for all t ∈ N we have that,
dT V (π, P(Xt)) ≤ n∥(AW)t∥. (10)
As a result, if G is a directed acyclic graph and d > 0 denotes its maximum path length, then for
all ε > 0 we have tmix(ε) ≤ d. Similarly, if G is a general graph then
tmix(ε) ≤ 2 + 2
1 − ∥(AW)2∥ log n
ε . (11)
Proof. At a high level, we will show for arbitrary starting states x and y that there exists a coupling
of the stochastic process Xt and Yt (which are initialized at x and y respectively) such that for
all t ∈ N:
E[∥Xt − Yt∥1] ≤ n∥(AW)t∥.
As a result, this then implies by letting y follow the law of π that:
dT V (π, P(Xt)) ≤ P(Xt ̸= Yt) = P(∥Xt − Yt∥1 ≥ 1) ≤ E[∥Xt − Yt∥1] ≤ n∥(AW)t∥, (12)
as claimed.
Hence, we start by rewriting our stochastic process as Xt+1 = fθt+1(Xt) where θt = (θt
i )i∈[N] and
each θt
i are independent random variables. We will use (θt)t∈N to determine our coupling. Note that
we can rewrite our stochastic process as
X0
i = 1 θ0
i ≤ ri , Xt+1
i =1

θt+1
i ≤ (1 − αi)ri + αi
X
j ∈δin (i)
wij X t
j

,
where θt
i
ii∼d Uniform[0, 1]. We set hi(x) = (1 − αi)ri + αi
P
j∈δin(i) wij xj .
Now consider the synchronous coupling of two copies (Xt, Yt) of the stochastic process driven
by the same randomness (dictated by (θt)t∈N), where Y0 = y ∼ π so that P(Yt = ·) = π(·) for all
t ∈ N. Define for i = 1, . . . , n,
Dt
i ≜ E Xt
i −Yt
i , Dt ≜ Dt
1, . . . , Dt
n
⊤,
to be the expected difference between Xt
i and Y t
i . We start by showing the following lemma:
Lemma 4. For all t ≥ 1 we have that Dt+1 ≤ AWDt.
Proof. Consider an arbitrary index i ∈ V. Then by definition of the stochastic process and the
coupling, we have that:
X t+1
i = 1 θt+1
i ≤ hi(Xt) Y t+1
i = 1 θt+1
i ≤ hi(Yt) .

Broderick et al.: Network and Risk Analysis of Surety Bonds 22
Hence, Xt+1
i ̸= Y t+1
i if and only if min{hi(Xt), hi(Yt)} < θt+1
i ≤ max{hi(Xt), hi(Yt)}. Thus
E X t+1
i − Y t+1
i | Xt, Yt = E 1 min{hi(Xt), hi(Yt)} < θt+1
i ≤ max{hi(Xt), hi(Yt)} | Xt, Yt
= P(θt+1
i ∈ (min{hi(Xt), hi(Yt)}, max{hi(Xt), hi(Yt)}) | Xt, Yt)
= hi(Xt) − hi(Yt)
= αiw⊤
i (Xt − Yt) ≤ αi
X
j ∈δin (i)
wij |Xt
j −Yt
j |,
where the third equality follows from the fact that θt+1
i is distributed uniformly. Taking the expec
tation with respect to Xt and Yt over the coupling yields Dt+1 ≤ AWDt. □
With the previous lemma in hand, we are now ready to show the result. Indeed, by Eq. (12) we
have that:
dT V (π, P(Xt)) ≤ E[∥Xt − Yt∥] = ∥Dt∥1 ≤
(C.S.)
n∥Dt∥∞
≤ n∥(AW)tD0∥∞
≤ n∥(AW)t∥∥D0∥∞ ≤ n∥(AW)t∥.
Now we note that if G is a directed acyclic graph, then for any t ≥ d we have (AW)t = 0. Hence,
we get that tmix(ε) ≤ d for any ε > 0. For the general case, we use the fact that ∥(AW)2∥ < 1 via
Lemma 2. Plugging this into the above bound yields:
dT V (π, P(Xt)) ≤ n(∥(AW)2∥)⌊t/2⌋. (13)
Setting the right hand side of Eq. (13) ≤ ε, using the fact that 1 − γ ≤ − log(γ) for γ ∈ (0, 1) and
solving for t gives the desired bound on tmix(ε). Indeed, let t ̃≜ ⌊t/2⌋. We want to solve n∥(AW)2∥t ̃ ≤
ε. Taking the logarithms (and using that log(∥(AW)2∥) < 0) gives:
t ̃≥ log(ε/n)
log(∥(AW)2∥) = log(n/ε)
− log(∥(AW)2∥) .
Hence it suffices to choose
t ̃ :=
l log(n/ε)
− log(∥(AW)2∥)
m
, t = 2t ̃.
Therefore,
tmix(ε) ≤ 2 log(n/ε)
− log(∥(AW)2∥) ≤ 2
1 − ∥(AW)2∥ log n
ε + 2,
which trades the logarithm in the denominator for the spectral gap–like term 1 − ∥(AW)2∥. □
We close out our discussion here with the case when the graph is a DAG. Because there are no
directed cycles, the linear operator (AW) is nilpotent with index at most the depth d, and therefore
the coupled chains coalesce after at most d steps. This immediately implies that tmix(ε) ≤ d for all

Broderick et al.: Network and Risk Analysis of Surety Bonds 23
A
B
C
E H
F
GI
D
∆d
in ∆d−1
in
∆1
in pure obligees
...
...
Figure 5 Representation of the “levels” ∆k
in in an acyclic graph such that ∆1
in ⊃ · · · ⊃ ∆d
in. Nodes A and B each
have one d-length path to H, so they belong to ∆d
in. They also have an edge to the next node in paths
(A, C, . . . , H) and (B, D, . . . , H), so they are also in ∆1
in. E and F only have paths of length 1, so they are only
contained in ∆1
in. Note that pure principals can belong to any level, not just ∆d
in (e.g. G). This represents that the
states of obligees in ∆k
in at any time t depend only on the previous states of principals in ∆k+1
in at t − 1.
ε > 0, as described in Theorem 2. In the same spirit, the stationary distribution is computable in
closed form by propagating probabilities layer by layer along a (reverse) topological ordering of the
contractor graph G.
In particular, we leverage the Markov property and observe the transition to any time t ≥ 1
depends only on the state of in-neighbors in the previous timestep. Thus, we can ignore the states
of pure obligees at time t − 1 because they are not in-neighbors to any other nodes, and we only
need to consider the set of nodes that act as principals. To formalize this, we introduce the following
definition.
Definition 2 (In-neighbor layers). For k = 1, define
∆1
in ≜
[
i∈V
δin(i),
to be the set of nodes that act as principals of another node. For k > 1, define recursively
∆k
in ≜
[
i∈∆k−1
in
δin(i),
which equivalently consists of all nodes i such that there exists a directed path of length k from i
to some node in V.
With this notation, the states of nodes in ∆1
in at time t depend only on the states of nodes in
∆2
in at time t − 1, and so on. This reasoning can be applied recursively until we reach time t − d,
where d is the maximum tree depth of the graph. The set ∆d
in contains only pure principals i, whose
failures occur independently and according to fixed ri for all time steps. Thus, we do not need to
consider earlier times past t − d. In other words, we only need to consider a finite number of earlier
time steps to obtain an exact form of the full distribution. Figure 5 gives a visualization of these
topological layers. Formalizing this we have the following representation for the distribution of the
stochastic process.

Broderick et al.: Network and Risk Analysis of Surety Bonds 24
Theorem 3. If G is a directed acyclic graph, then for any t ≥ d where d > 0 is the maximum
tree depth of the graph, and using the in-neighbor layers ∆k
in from Definition 2, the stationary
distribution admits the following closed form:
P(Xt = x) =
X
xt−1
∆i1n
···
X
xt−d
∆idn
P(Xt = x | Xt−1
∆1
in
= xt−1
∆1
in
)
d−1
Y
k=1
P(Xt−k
∆k
in
= xt−k
∆k
in
| Xt−k−1
∆k+1
in
= xt−k−1
∆k+1
in
)P(Xt−d
∆d
in
= xt−d
∆d
in
).
While the full derivation is technical and omitted from the discussion here (see Section C.2),
we give an explicit representation of the stationary distribution for the Markov chain when the
underlying contractor graph is acyclic. Then for size n acyclic graphs with directed diameter d,
computing the exact stationary distribution can be done in O(d · 2n) time. In most cases, this
computation can actually be done in much less time, because the sets ∆k
in exclude pure obligees
and are strictly decreasing in size.
4.2. Impact on Global Average Risk
In Section 3.3, we established that under Assumption 1, the marginal failure probabilities of indi
vidual nodes increase over time, as shown in Theorem 1. We then used this to establish the mono
tonicity of E[L(Xt)]. However, it is not immediately clear whether this monotonicity extends to
the full distribution of the global average risk defined over the stochastic process (Xt)t∈N. The rest
of this section focuses on establishing that the distribution of global average risk is monotone (i.e.
stochastically dominated) with respect to t ∈ N, establishing the impact of network risk propagation
to long-term financial insolvency.
Our first result formalizes the intuition that, under Assumption 1, the probability of the global
failure loss exceeding a given threshold is non-decreasing over time. The proof relies on constructing
a coupling argument that establishes a form of stochastic dominance across time steps. This result
confirms that as failures accumulate, they are unlikely to be reversed by the system dynamics alone.
This reinforces the insight that traditional models, which often assume failures are independent,
may underestimate long-term risk exposure when network dependencies are present.
Theorem 4. Under Assumption 1, we have that for any ε ∈ R≥0 and for all t ∈ N
P L(Xt+1) > ε ≥ P(L(Xt) > ε). (14)
As a result,
P(L(X∞) > ε) ≥ P L(X0) > ε . (15)
Before presenting the proof we note that it leverages several results from Mu ̈ller and Stoyan (2002),
which we include in Appendix E for completeness.

Broderick et al.: Network and Risk Analysis of Surety Bonds 25
Proof. To prove Eq. (14), we first show that for any i ∈ V and t ∈ N, Xt
i ⪯st X t+1
i by using Strassen’s
Theorem (Roch 2024, Theorem 4.2.11). Then, we verify that the vectors Xt and Xt+1 are coupled
using the same source of randomness, and thus share a common copula. Therefore, we can conclude
by Theorem 6 (appendix) that Xt ⪯st Xt+1 for all t ≥ 0. Finally, we use the fact that L(·) is a
monotone increasing function and apply Theorem 7 (appendix) to conclude that L(Xt) ⪯st L(Xt+1),
which is equivalent to Eq. (14).
Thus, we only need to show that Xt
i ⪯st X t+1
i and that the coupling inducing the ordering is
defined through a common copula. First, note that {0, 1}n with the component-wise ordering is a
finite poset. By Strassen’s Theorem, Xt
i ⪯st X t+1
i if and only if there exists a coupling (X ̃ t
i , X ̃ t+1
i)
of (Xt
i , X t+1
i ) such that X ̃ t
i ≤ X ̃ t+1
i almost surely under the coupling.
We now turn our efforts to constructing such a coupling. Recall mt
i ≜ E[Xt
i ], and define for each
node i ∈ V, Ui
ii∼d Unif(0, 1). For each t ≥ 0, we define the coupled process:
X ̃ t
i = 1{Ui ≤ mt
i },
which is a valid coupling since X ̃ t
i ∼ Ber(mt
i), matching the marginal distribution of Xt
i . By The
orem 1, we know mt
i ≤ mt+1
i . Thus, when Ui ≤ mt
i ≤ mt+1
i , we get X ̃ t
i = 1 = X ̃ t+1
i . Similarly, when
Ui > mt
i, then X ̃ t
i = 0, and X ̃ t+1
i ∈ {0, 1}. Therefore, for every i and t ≥ 0, we have
X ̃ t
i ≤ X ̃ t+1
i a.s. under the coupling.
By Strassen’s Theorem, this implies
Xt
i ⪯st X t+1
i.
Moreover, because this coupling uses the same uniform random vector U = (U1, . . . , Un) across
all coordinates i, the vectors Xt and Xt+1 are constructed using the same dependence structure.
Specifically, since the Ui are independent, this induces the product copula C(u1, . . . , un) = Qn
i=1 ui
for both Xt and Xt+1. Therefore, we conclude by Theorem 6 that Xt ⪯st Xt+1.
Finally, since L(Xt) = Pn
i=1 βiX t
i is a component-wise increasing function and βi > 0 for all i,
Theorem 7 ensures that
L(Xt) ⪯st L(Xt+1).
That is, for every ε ∈ R and for all t ≥ 0,
P L(Xt+1) > ε ≥ P(L(Xt) > ε),
which shows Eq. (14). Eq. (15) follows since for each ε ∈ R the sequence {P(L(Xt) > ε)}t∈N is
non-decreasing. Moreover, by Lemma 3, we have L(Xt) → L(X∞) almost surely, which implies

Broderick et al.: Network and Risk Analysis of Surety Bonds 26
convergence in distribution. Hence, for every continuity point ε of the limiting distribution, we
obtain
tli→m∞ P L(Xt) > ε = P L(X∞) > ε ,
and in particular, P L(X0) > ε ≤ P L(X∞) > ε . □
Theorem 4 shows that under Assumption 1, the entire distribution of global financial loss stochas
tically dominates the independent failure model. That is, not only does the expected loss increase
over time (as in Corollary 2), but the quantiles also become more severe. This has strong implica
tions for surety organizations, as they must retain financial reserves to absorb losses during rare
but extreme events. If such tail risks are systematically underestimated (as in L(X0) by ignoring
network spillovers), then reserve requirements will be miscalibrated.
5. Numerical Results
To complement our theoretical guarantees, we conduct extensive computational experiments to
evaluate risk propagation in contractor networks. Our experiments are based on a contractor net
work constructed from empirical data provided by a partnering surety organization. Across all
simulations, we evaluate the impact of network effects on global loss and the joint distribution of
possible failure events.4The main questions we seek to answer through our experiments are:
• Structure of real-world surety networks (Section 5.1): We begin with a descriptive overview
of an empirical surety network, highlighting its scale, connectivity, and summary statistics of
the loss values βi and idiosyncratic risk scores ri across nodes i ∈ V in the network.
• Case study (Section 5.2): We then present a detailed case study on a representative interme
diary, illustrating how local network position affects systemic risk contributions.
• Conditions for higher expected loss and tail behavior (Section 5.3): We analyze when expected
losses are amplified and derive empirical tail bounds, emphasizing the increase in global aver
age risk even in networks where Assumption 1 fails.
• Robustness to network exposure αi (Section 5.4): Finally, we test the robustness of our findings
under alternative specifications of the exposure parameters αi for intermediaries i in the
network.
Network Construction We build an anonymized contractor network from empirical surety bond
data of a partnering surety organization, preserving key structural and statistical properties while
protecting sensitive information. Original node identities are replaced with generic indices; contract
values, risk scores, and loss amounts are rescaled and perturbed with Laplace noise. The network
topology is reconstructed via an edge–rewiring procedure that retains degree distributions, node
4 See https://github.com/seanrsinclair/Network-Risk-Analysis-Surety-Bounds for the code base.

Broderick et al.: Network and Risk Analysis of Surety Bonds 27
roles (pure principals, intermediaries, pure obligees), and depth in the hierarchy. Edge weights are
recalibrated from the anonymized bond amounts to ensure each obligee’s in-degree sums to one.
This produces a synthetic but structurally faithful replica of the real network for simulation and
analysis. See Section D.1 for further details.
Accounting for Unobserved Edges Since the surety organization only observes bonded contracts
with known principals, some obligees may have additional, unobserved contracting activity. We
detect such cases by comparing an obligee’s reported revenue to the total value of observed bonded
work; any excess implies unobserved principals. To incorporate the potential risk from these missing
relationships, we introduce a synthetic “dummy” principal connected to the obligee with weight
equal to the fraction of revenue not explained by observed principals. The dummy’s baseline risk
is estimated from the observed mix of contractor types the obligee engages with, assuming the
same type distribution holds for unobserved contractors. This approach preserves network structure
while accounting for external risk exposure not directly visible in the data. Further details on this
methodology are included in Section D.2.
Experimental Setup. We approximate the stationary distribution π of the stochastic process Xt
via Monte-Carlo simulation. We set αi = 0.25 for all intermediaries i in the network, as decided
during discussion from our partnering organization. However, later in Section 5.4 we test the
robustness of our results to this selection. Since our contractor graph is a directed acyclic graph with
maximum depth d = 7, the chain mixes in finite time (see Theorem 2). Thus, we report the empirical
distribution of X7 after t = 7 time steps over 100, 000 times to form empirical estimates. All metrics
are reported as the average over these replications, and confidence intervals are computed with a
significance level of δ = 0.05 when presented.
5.1. Description of Surety Network
We start off our discussion by examining the contractor network obtained from our partnering
surety organization. This network represents the contractual obligations between contractors and
project owners insured by the surety, with each edge corresponding to a surety bond over a one-year
period in 2018.
The full contractor graph contains 40,457 nodes (contracting organizations). The majority of
these nodes belong to a single (weakly-connected) component, which accounts for roughly 87.7%
of the graph and contains 35,483 nodes. We focus on this weakly connected component for the
remainder of our simulations. Within this component, there are 8,984 pure principals (contractors
who never act as obligees), making up roughly 25% of the nodes; 26,137 are pure obligees (project
owners who never act as principals), accounting for 74%; and the remaining 362 nodes (about
1%) are intermediaries that appear as both principals and obligees in different contracts. This

Broderick et al.: Network and Risk Analysis of Surety Bonds 28
Node j
Node i
Principal j
Obligee i
0
0.25
0.5
0.75
1
Weight wij
Figure 6 Visualization of the giant component in the anonymized empirical network. The left figure
corresponds to the adjacency matrix of the weakly connected component of the network, where the x and y axes
corresponds to different node indices. In the right figure we show the sub adjacency matrix between principals
and obligees. Colors correspond to the edge weights wij.
0 100 200 300 400
Weighted Out-Degree
100
101
102
103
104
Count
Pure Principals Intermediaries
Figure 7 Histogram of the weighted out degree distribution for pure principals and intermediaries. Counts are
shown on a logarithmic scale. Pure obligees are not included since their out-degree is zero by design.
composition reflects the predominantly bipartite nature of the network, with only a small fraction
of nodes serving the dual roles of both principal and obligee. However, we will see that these
intermediaries are the key vehicle for risk to propagate through the network.
See Fig. 6 for a visualization of the adjacency matrix of our surety network. We emphasize that
the graph is mostly bipartite, with the exception of a small number of intermediaries. We further
note that the connectivity pattern in the graph is sparse: among the 35,483 nodes in the giant
connected component the edge density is around 0.009%, representing 56,707 contracts. The nature
of the graph also reveals interesting structural properties — it is acyclic with a directed diame
ter of seven. This acyclic structure has important implications for our modeling: our stochastic
failure-propagation process converges to its stationary distribution in at most seven time steps
(see Theorem 3). Lastly, we note some degree of heterogeneity in degree distribution across nodes,
witnessed in Fig. 7.
In addition to network topology, we measure the idiosyncratic risk scores ri and loss-given-default
values βi for each principal i. These features, shown in Figure 8, are heavy-tailed and right-skewed,

Broderick et al.: Network and Risk Analysis of Surety Bonds 29
10 6 10 4 10 2
ri
100
101
102
103
104
Count
10 2 100 102 104
i
100
101
102
103
104 Pure Principals Intermediaries
Figure 8 Histograms of idiosyncratic default probabilities ri (left) and loss given default values βi in millions of
USD (right). Both counts and values are shown on a logarithmic scale. Pure obligees are excluded here because
their values for both attributes are set to zero by definition.
39372
39124
40283
40213
39466
40398
40289
40306
0.000 0.005 0.010 0.015 0.020 0.025
rj
0.0
2.5
5.0
7.5
10.0
Count
Average Node r39466 = 0.00182 Node m39466 = 0.00264
Figure 9 Case study for node 39466. On the left we show its induced sub-graph of the contractor network,
where green nodes correspond to principals, pink to other intermediaries, and blue to pure obligees. On the right
we plot a histogram of the risk scores ri (x-axis) against counts for the upstream neighbors. The red dotted line
corresponds to the average risk score of the upstream neighbors, the orange to the risk score of node 39466, and
the black line to the induced limiting failure probability m39466 of node 39466.
with notable heterogeneity across node types. In particular, we observe that the βi values for
intermediaries are, on average, larger than that of pure principals. However, for the risk scores ri,
pure principals have larger idiosyncratic risk. We emphasize that pure obligees are excluded from
these plots because their risk and loss values are set to zero by definition. The loss-given-default
distribution also contains a single extreme outlier of approximately $31 billion; while rare, such high
values can occur in large infrastructure projects underwritten by the surety organization. Later in
our analysis, we will explore how these attributes vary between pure principals and intermediaries,
and how their heterogeneity influences network-wide risk propagation.
5.2. Case Study
Before diving into our simulations on the weakly connected component of the network, we begin
with an illustrative case study. While we emphasize that the nodes here do not refer to specific

Broderick et al.: Network and Risk Analysis of Surety Bonds 30
0.000 0.005 0.010 0.015 0.020 0.025
ri
0.000
0.005
0.010
0.015
0.020
0.025
mi
iri
100
102
104
106
imi
Figure 10 Comparison of node-level risk metrics. (Left) Idiosyncratic default probabilities ri compared to
limiting failure probabilities mi for intermediaries i. (Right) Box plots of βiri (left) vs. βimi (right), where βi is in
USD (log scale).
contractors, in our collaboration with the partnering insurance company we performed a similar
methodological analysis that they leveraged for identifying and monitoring risk in key contractors.
We focus on node 39466, which contracts as an intermediary (has both incoming and outgoing
edges). According to our risk-based centrality measure ui (cf. Definition 1), this node lies in the
75th percentile of the distribution among intermediaries, marking it as structurally “risky” due
to its prominent position in the network. Its induced subgraph (Fig. 9, left) shows both upstream
principals and downstream obligees, highlighting its central role in bridging multiple tiers of the
contracting system. This centrality measure thus provides a systematic way of flagging such inter
mediaries as candidates for closer attention.
Turning to the upstream neighbors’ risk distribution (Fig. 9, right), we observe substantial het
erogeneity: some neighbors have risk scores lower than node 39466’s idiosyncratic value r39466 =
0.00182, while others are considerably higher. While some neighbors are less risky, when incor
porating these exposures, the induced limiting failure probability increases to m39466 = 0.00264,
corresponding to a relative increase of roughly 45%. This amplification illustrates how even a mod
erately risky intermediary, once identified through the u39466 centrality metric, can see its effective
default probability substantially elevated due to network position and contracting relationships.
5.3. Impact of network effects on global financial loss
Next we begin to illustrate the impact of network risk on the global average financial loss in
the surety network. We start by recalling in Sections 3.3 and 4.2 that under Assumption 1, both
the average risk and the tail probability mass of the loss distribution increases. However, this
assumption is not always satisfied in our surety network (see more discussion on this in Section D.3).
Despite this, we observe that for a nontrivial subset of nodes i ∈ V, the expected marginal loss
probability mi exceeds their idiosyncratic risk scores ri. This effect is visible in Section 5.3, which
compares ri (x-axis) and mi (y-axis), with numerous points above the y = x line. Moreover, as a

Broderick et al.: Network and Risk Analysis of Surety Bonds 31
L(X0) L(X∞)
0.5 188.71 ± 0.33 193.24⋆ ± 0.33 0.9 344.92 ± 0.80 349.16⋆ ± 0.74 0.95 404.75 ± 0.99 410.03⋆ ± 1.02 0.99 536.35 ± 2.40 559.99 ± 3.08⋆ 0.995 597.16 ± 4.33 652.92 ± 5.68⋆
Table 1 Comparison of the quantiles (in millions of dollars) of L(X∞) to L(X0). Confidence intervals
computed with a two-sided binomial quantile test. Bold indicates larger for the same quantile, and ⋆ that the
increase is significant from the two-sided binomial quantile test.
result of this, the expected aggregate loss E[L(X∞)] = β⊤m increases from the expected aggregate
loss under the independent failure model E[L(X0)] = β⊤r by 1.89%. This emphasizes that failing
to account for network interference causes downstream risk to be under-estimated. While 1.89%
might seem like a mild value, we emphasize that the units for these are on the order of hundreds
of millions of dollars, so this increase is roughly on the order of 2 million dollars of underestimated
risk. See Section 5.3 where we also include a box plot of βimi vs βiri across nodes i ∈ V. Here we
observe not only does the average increase, but βimi is more right-skewed. This again emphasizes
the ability for network risk to destabilize the network.
Lastly, we look at the distribution of L(X∞) versus L(X0). Table 1 reports several quantiles
of the two distributions, including the 50th, 90th, 95th, 99th, and 99.5th percentiles. In every
case, the quantile under L(X∞) exceeds the corresponding quantile under L(X0). These plots
reveal a clear shift in the distribution. Not only is the right tail substantially heavier, indicating a
higher probability of extreme loss realizations, but the central behavior is also affected; the median
aggregate loss under L(X∞) is noticeably larger than that under L(X0), in addition to the mean
being higher. This combination of a heavier tail and an upward shift in the bulk of the distribution
highlights that the amplification of network interactions are not just confined to rare catastrophic
events, but also manifest across the entire distribution as well.
To summarize, these results suggest that only considering the independent failure model without
accounting for how the interconnectedness of contractors creates correlations in defaults leads to
underestimating the potential losses incurred by failures. This can have significant repercussions
in practice, such as from failing to set aside enough capital to cover large tail probability losses
due to this underestimation.
5.4. Robustness to choice of αi
We close out by testing the robustness of our earlier empirical insights with respect to the choice
of α, where the baseline specification set αi = 0.25 for all intermediaries i in the network. In
Fig. 11, we report the quantiles of L(X∞) as a function of α ∈ [0, 1], applied uniformly across all

Broderick et al.: Network and Risk Analysis of Surety Bonds 32
0.0 0.2 0.4 0.6 0.8
200
300
400
500
600
Loss (millions)
Quantile 0.5 0.9 0.95 0.99
Figure 11 Quantiles of L(X∞) under different values of α in ten equal spaces between [0, 1]. Confidence
intervals computed with a two-sided binomial quantile test.
intermediaries. Across all specifications, the outcomes remain monotone in α: greater exposure
consistently increases systemic risk. This finding is noteworthy because the formal monotonicity
condition (Assumption 1) does not hold in our empirical network. If it did, Theorem 4 would
guarantee this result; the fact that monotonicity emerges regardless highlights the robustness of
our conclusions.
More broadly, the extent of amplification is not uniform across the loss distribution. While
moderate quantiles exhibit only gradual upward shifts as α increases, the tail behavior is dramat
ically more sensitive. For example, at the 0.995 quantile we observe a sharp and disproportionate
increase, indicating that the risk of catastrophic losses escalates much faster than median losses.
This widening gap across quantiles highlights how network contagion disproportionately impacts
the extreme right tail. Taken together, Fig. 11 conveys two critical insights: (i) our monotonicity
results are robust in practice, even when their sufficient conditions are partially violated, and (ii)
the most severe consequences of increasing α manifest in the extremes of the distribution, where
insurers and policymakers are most vulnerable.
6. Conclusion
In this work, we introduced a network-based approach to analyzing risk propagation in surety
backed contractor networks. By modeling contractual dependencies as a directed stochastic pro
cess, we demonstrated that network effects systematically amplify failure probabilities and increase
expected loss beyond what traditional independent risk models predict. Our theoretical results
establish conditions under which systemic risk accumulates over time, and our empirical analysis
using real-world surety data validates these findings, showing that accounting for network depen
dencies leads to a higher estimated risk exposure than independent models. Additionally, we iden
tified key intermediary nodes that disproportionately influence network-wide stability, highlighting
their role in amplifying or mitigating failures.

Broderick et al.: Network and Risk Analysis of Surety Bonds 33
Several future directions emerge from our work. First, while our analysis focused on risk prop
agation in a static network, real-world contractor networks evolve over time as firms form new
contracts or exit the market. Extending our model to a dynamic setting, where network struc
ture evolves alongside risk accumulation, is a promising avenue for further research. Second, our
framework assumes full network observability by the surety provider, yet in practice, some contrac
tual relationships may be hidden due to the presence of multiple insurers or informal agreements.
Developing robust risk estimation techniques that account for missing or latent network infor
mation would enhance the applicability of our approach. Finally, while we focused on financial
surety networks, similar risk propagation dynamics arise in other interdependent systems, such
as supply chains, infrastructure networks, and research collaborations. Extending our methods to
these domains could provide new insights into systemic vulnerabilities and optimal risk mitigation
strategies.
Acknowledgments. Part of this work was done while Sean R. Sinclair was a Postdoctoral Asso
ciate at Massachusetts Institute of Technology advised by Ali Jadbabaie and Devavrat Shah. The
authors would also like to thank Alireza Tahbaz-Salehi for preliminary feedback on the network
surety model. Icons for Fig. 1 are provided by Flaticon (2025). Finally, we gratefully acknowledge
the partnership of an anonymous surety organization for providing data and insights that made
this research possible.

Broderick et al.: Network and Risk Analysis of Surety Bonds 34
References
Acemoglu D, Carvalho VM, Ozdaglar A, Tahbaz-Salehi A (2012) The network origins of aggregate fluctua
tions. Econometrica 80(5):1977–2016.
Acemoglu D, Ozdaglar A, Tahbaz-Salehi A (2015) Systemic risk and stability in financial networks. American
Economic Review 105(2):564–608.
Allen F, Gale D (2000) Financial contagion. Journal of Political Economy 108(1):1–33, ISSN 00223808,
1537534X, URL http://www.jstor.org/stable/10.1086/262109.
Amini H, Minca A, Sulem A (2022) A dynamic contagion risk model with recovery features. Mathematics
of Operations Research 47(2):1412–1442.
Barboza F, Kimura H, Altman E (2017) Machine learning models and bankruptcy prediction. Expert Sys
tems with Applications 83:405–417, ISSN 0957-4174, URL http://dx.doi.org/https://doi.org/10.
1016/j.eswa.2017.04.006.
Battiston S, Puliga M, Kaushik R, Tasca P, Caldarelli G (2012) Debtrank: Too central to fail? financial
networks, the fed and systemic risk. Scientific reports 2(1):541.
Benzoni L, Collin-Dufresne P, Goldstein RS, Helwege J (2015) Modeling credit contagion via the updating
of fragile beliefs. The Review of Financial Studies 28(7):1960–2008.
Bonacich P, Lloyd P (2001) Eigenvector-like measures of centrality for asymmetric relations. Social networks
23(3):191–201.
Brin S, Page L (1998) The anatomy of a large-scale hypertextual web search engine. Computer Networks
and ISDN Systems 30(1):107–117, ISSN 0169-7552, URL http://dx.doi.org/https://doi.org/10.
1016/S0169-7552(98)00110-X, proceedings of the Seventh International World Wide Web Conference.
Brouse A (2024) Four key factors leading to surety bond losses in construction
projects. URL https://www.assuredpartners.com/news-insights/blogs/surety/2024/
four-key-factors-leading-to-surety-bond-losses-in-construction-projects, accessed:
2025-04-24.
Business Continuity Institute (2021) Supply chain resilience report 2021.
Technical Report BCI-0007h, Business Continuity Institute, URL
https://www.thebci.org/static/e02a3e5f-82e5-4ff1-b8bc61de9657e9c8/
BCI-0007h-Supply-Chain-Resilience-ReportLow-Singles.pdf, 12th edition.
Caccioli F, Barucca P, Kobayashi T (2018) Network models of financial systemic risk: a review. Journal of
Computational Social Science 1(1):81–114.
Cao Y, Liu X, Zhai J, Hua S (2022) A two-stage bayesian network model for corporate bankruptcy prediction.
International Journal of Finance & Economics 27(1):455–472, URL http://dx.doi.org/https://
doi.org/10.1002/ijfe.2162.

Broderick et al.: Network and Risk Analysis of Surety Bonds 35
Carmona R, Fouque JP, Sun LH (2013) Mean field games and systemic risk. arXiv preprint arXiv:1308.2172
.
Chapman S (1928) On the brownian displacements and thermal diffusion of grains suspended in a non
uniform fluid. Proceedings of the Royal Society of London. Series A, Containing Papers of a Mathe
matical and Physical Character 119(781):34–54.
Choi H, Son H, Kim C (2018) Predicting financial distress of contractors in the construction industry
using ensemble learning. Expert Systems with Applications 110:1–10, ISSN 0957-4174, URL http:
//dx.doi.org/https://doi.org/10.1016/j.eswa.2018.05.026.
Chung FR (1997) Spectral graph theory, volume 92 (American Mathematical Soc.).
Davis M, Lo V (2001) Infectious defaults. Quantitative Finance 1(4):382.
Dietz RJ (2018) Mitigating subcontractor default risk-subcontractor default insurance v. performance and
payment bonds. Constr. Law. 38:6.
Doyle PG, Snell JL (1984) Random walks and electric networks, volume 22 (American Mathematical Soc.).
Dwork C, McSherry F, Nissim K, Smith A (2006) Calibrating noise to sensitivity in private data analysis.
Theory of cryptography conference, 265–284 (Springer).
Eckles D, Mossel E, Rahimian MA, Sen S (2024) Long ties accelerate noisy threshold-based contagions.
Nature Human Behaviour 8(6):1057–1064, URL http://dx.doi.org/10.1038/s41562-024-01865-0.
Elliott M, Golub B, Jackson MO (2014) Financial networks and contagion. American Economic Review
104(10):3115–3153.
Flaticon (2025) Flaticon: Free vector icons and stickers. https://www.flaticon.com, accessed: November
6, 2025.
Friedkin NE, Johnsen EC (1990) Social influence and opinions. The Journal of Mathematical Sociology 15(3
4):193–206, URL http://dx.doi.org/10.1080/0022250X.1990.9990069.
Gai P, Kapadia S (2010) Contagion in financial networks. Proceedings of the Royal Society A: Mathematical,
Physical and Engineering Sciences 466(2120):2401–2423.
Horta I, Camanho A (2013) Company failure prediction in the construction industry. Expert Systems
with Applications 40(16):6253–6257, ISSN 0957-4174, URL http://dx.doi.org/https://doi.org/
10.1016/j.eswa.2013.05.045.
Kemeny JG, Snell JL, et al. (1969) Finite markov chains, volume 26 (van Nostrand Princeton, NJ).
Kim H, Cho H, Ryu D (2019) Default risk characteristics of construction surety bonds. The Journal of Fixed
Income 29(1):77–87.
Klages-Mundt A, Minca A (2020) Cascading losses in reinsurance networks. Management Science 66(9):4246
4268.

Broderick et al.: Network and Risk Analysis of Surety Bonds 36
Kleinberg JM (1999) Authoritative sources in a hyperlinked environment. Journal of the ACM (JACM)
46(5):604–632.
Kolmogoroff A (1931) U ̈ ber die analytischen methoden in der wahrscheinlichkeitsrechnung. Mathematische
Annalen 104:415–458, URL http://eudml.org/doc/159476.
Leontief W (1986) Input-output economics (Oxford University Press).
Lov ́asz L (1993) Random walks on graphs. Combinatorics, Paul erdos is eighty 2(1-46):4.
Mu ̈ller A, Stoyan D (2002) Comparison Methods for Stochastic Models and Risks. Wiley Series in Probability
and Statistics (Chichester, UK: John Wiley & Sons), ISBN 978-0-471-49446-1, URL https://www.
wiley.com/en-us/Comparison+Methods+for+Stochastic+Models+and+Risks-p-9780471494461.
Nguyen HH, Viviani JL, Ben Jabeur S (2025) Bankruptcy prediction using machine learning and shapley
additive explanations. Review of Quantitative Finance and Accounting 65(1):107–148, URL http://
dx.doi.org/10.1007/s11156-023-01192-x.
Nickerson J, Griffin JM (2017) Debt correlations in the wake of the financial crisis: What are appropriate
default correlations for structured products? Journal of Financial Economics 125(3):454–474.
Page L, Brin S, Motwani R, Winograd T (1999) The pagerank citation ranking: Bringing order to the web.
Technical report, Stanford infolab.
Proskurnikov AV, Tempo R, Cao M (2016) Pagerank and opinion dynamics: Missing links and extensions.
2016 IEEE Conference on Norbert Wiener in the 21st Century (21CW), 1–6 (IEEE).
Ramirez S, Van Den Hoven M, Bauso D (2023) A stochastic model for cascading failures in financial networks.
IEEE Transactions on Control of Network Systems 10(4):1950–1961.
Resnick SI (2013) Adventures in stochastic processes (Springer Science & Business Media).
Roch S (2024) Modern Discrete Probability: An Essential Toolkit. Cambridge Series in Statistical and Prob
abilistic Mathematics (Cambridge University Press).
Russell JS (1990) Surety industry: overview. Journal of Management in Engineering 6(3):323–341.
Schubert LM, Duke RJ (2002) Point/counterpoint: Surety bonds-the best protection against contractor or
subcontractor default. Constr. Law. 22:22.
Shumway T (2001) Forecasting bankruptcy more accurately: A simple hazard model. The Journal of Business
74(1):101–124, ISSN 00219398, 15375374, URL http://www.jstor.org/stable/10.1086/209665.
Sood M, Sridhar A, Eletreby R, Wu CW, Levin SA, Yag ̆an O, Poor HV (2023) Spreading processes with muta
tions over multilayer networks. Proceedings of the National Academy of Sciences 120(24):e2302245120,
URL http://dx.doi.org/10.1073/pnas.2302245120.
Tang J, Adler A, Ajorlou A, Jadbabaie A (2024) Estimating true beliefs in opinion dynamics with social
pressure. IEEE Transactions on Automatic Control .

Broderick et al.: Network and Risk Analysis of Surety Bonds 37
Tserng HP, Chen PC, Huang WH, Lei MC, Tran QH (2014) Prediction of default probability for construction
firms using the logit model. Journal of civil engineering and management 20(2):247–255.
Tserng HP, Lin GF, Tsai LK, Chen PC (2011) An enforced support vector machine model for construction
contractor default prediction. Automation in Construction 20(8):1242–1249, ISSN 0926-5805, URL
http://dx.doi.org/https://doi.org/10.1016/j.autcon.2011.05.007.
United States Code (2002) 40 u.s. code §3131 - bonds of contractors of public buildings or works. https://
www.law.cornell.edu/uscode/text/40/3131, URL https://www.law.cornell.edu/uscode/text/
40/3131, current through Pub. L. 118–47 (2024).
Vassalou M, Xing Y (2004) Default risk in equity returns. The Journal of Finance 59(2):831–868, URL
http://dx.doi.org/10.1111/j.1540-6261.2004.00650.x.
Wambach A, Engel AR (2011) Surety bonds with fair and unfair pricing. The Geneva Risk and Insurance
Review 36:36–50.
Watts DJ (2002) A simple model of global cascades on random networks. Proceedings of the National Academy
of Sciences 99(9):5766–5771.

Broderick et al.: Network and Risk Analysis of Surety Bonds 38
Appendix A: Table of Notation
Symbol Definition
Problem setting specifications G = (V, E) Network surety graph i, j, k ∈ V Index over nodes in the graph (j, i) ∈ E Directed edge from principal (subcontractor) j to obligee (project owner) i δin(i) Principals (in-neighbors) of obligee i, δin(i) = {j : (i, j) ∈ E} δout(j) Obligees (out-neighbors) of principal j, δout(j) = {i : (i, j) ∈ E} wij ∈ [0, 1] Fraction of obligee i’s projects contracted to principal j, where P
j∈δin(i) wij ≤ 1
W ∈ R|V|×|V| Weighted adjacency matrix with entries wij pure obligee Node i such that δout(i) = 0 pure principal Node j such that δin(j) = 0 ri Risk score for node i (ri = 0 if i is a pure obligee) r ∈ R|V| Column vector of idiosyncratic risk scores with entries ri αi ∈ [0, 1] Probability of network effects (αj = 0, αi = 1 for pure principals j and obligees i) βi Financial loss for each node i ∈ V A ∈ R|V|×|V| Diagonal matrix of αi Xt Stochastic process for node failures at step t π Stationary dis-
tribution for Xt mt Vector of failure probabilities with entries mt
i = E[Xt
i]
m limt→∞ mt, the limiting failure probabilities for each node 1 Column vector of all ones, dimensions may vary based on context τ1, . . . , τT Product segment IDs indicating the type of work performed type(i) Product segment ID of node i, type(i) ∈ {τ1, . . . , τT } ri Median risk score in i’s product segment, ri = median({rj : type(j) = type(i)}) u ∈ R|V| risk-based centrality in equilibrium model, u = (I − A)(I − W⊤A)−1 1
n
L(x) Weighted average risk: P
v βvxv
Table 2 Common notation
Appendix B: Section 3 Omitted Proofs
B.1. Section 3.1 Omitted Proofs
We start off by analyzing the mean field dynamics of our stochastic process and showing the mean failure
probabilities satisfy a similar dynamics to the original process.
Lemma 1. For all i ∈ V and t ∈ N we have that m0
i = ri and
mt+1
i = (1 − αi)ri + αi
X
j ∈δin (i)
wij mt
j. (3)
Equivalently in matrix notation, m0 = r and mt+1 = (I − A)r + AWmt.
Proof. The case when t = 0 immediately follows since X0
i ∼ Bernoulli(ri). For the step case we use the law of
total probability and the Markov property of the Markov chain to have:
mt+1
i = E Xt+1
i = E E Xt+1
i | Xt = E

(1 − αi)ri + αi
X
j ∈δin (i)
wij X t
j



Broderick et al.: Network and Risk Analysis of Surety Bonds 39
= (1 − αi)ri + αi
X
j ∈δin (i)
wij E Xt
j = (1 − αi)ri + αi
X
j ∈δin (i)
wij mt
j,
where the second equality follows by Eq. (1), and the final equality by an inductive argument. □
Our first main result for the mean field shows that the limiting failure probabilities indeed exist and satisfy
a fixed point equation.
Proposition 1. For any contractor network and any node i ∈ V, the limiting failure probabilities mi exist
and satisfy the following fixed point equation:
mi = (1 − αi)ri + αi
X
j ∈δin (i)
wijmj, m = (I − A)r + AWm. (5)
Moreover, (I − AW) is invertible and so m is unique and satisfies:
m = (I − AW)−1(I − A)r. (6)
Before presenting the proof of Proposition 1, we start off with the following technical lemma.
Lemma 2. Let A be a diagonal matrix with Aii = αi for all i ∈ V and let W be the row-stochastic adja
cency matrix of the contractor graph G. Then we have ∥(AW)2∥ < 1 and (AW)t → 0 as t → ∞.
Proof. Since AW is row sub-stochastic, we have that ∥AW∥ ≤ 1. Additionally, for all pure obligees i we
have set αi = 1, so their corresponding row sums satisfy P
j (AW)ij = αi
P
j wij = 1. Thus by construction,
∥AW∥ = 1, which does not necessarily imply that powers of AW are decreasing in size. We can, however,
show that ∥(AW)2∥ < 1. In particular, the row sums of (AW)2 are given by:
X
j∈V
(AW)2
ij =
X
j∈V
X
k∈V
αiαkwikwkj = αi
X
k∈V
αk wik
X
j∈V
wkj ≤
X
k∈V
αk wik .
If wik > 0, node k cannot be a pure obligee and αk must be strictly less than 1. Therefore, the row sums are
strictly less than 1:
X
j∈V
(AW)2
ij ≤
X
k∈V
αkwik <
X
k∈V
wik ≤ 1,
and ∥(AW)2∥ < 1. Then sub-multiplicativity of the norm implies that higher powers of AW are decaying
in size. Even powers are bounded ∥(AW)2k∥ ≤ ∥(AW)2∥k < 1, and odd powers can be bounded by even
powers: ∥(AW)2k+1∥ ≤ ∥(AW)2k∥∥AW∥ ≤ ∥(AW)2k∥. Using that ∥(AW)2∥ < 1 we get that (AW)t → 0 as
required. □
Using Lemma 2 we can show the following corollary.
Corollary 1. Let A be a diagonal matrix with Aii = αi for all i ∈ V and let W be the row-stochastic
adjacency matrix of the contractor graph G. Then (I − AW) is invertible, and the Neumann series
P∞
t=0(AW)t converges to (I − AW)−1.
Proof. The Neumann series of AW satisfies:
∞
X
t=0
(AW)t ≤
∞
X
t=0
∥(AW)t∥ ≤
∞
X
t=0
∥AW∥t =
∞
X
k=0
∥AW∥2k + ∥AW∥2k+1
≤2
∞
X
k=0
∥(AW)2∥k = 2
1 − ∥(AW)2∥ .

Broderick et al.: Network and Risk Analysis of Surety Bonds 40
Since the operator norm of the series converges absolutely to a finite value, the limit of the series is well
defined. In particular, the Neumann series converges to the inverse of (I − AW):
tli→m∞(I − AW)
t
X
k=0
(AW)k = tli→m∞
t
X
k=0
(AW)k −
t
X
k=0
(AW)k+1
!
= tli→m∞ I − (AW)t+1 = I,
using that ∥(AW)t∥ ≤ ∥AW∥t → 0 and that (AW)t → 0. □
With the previous results in hand, we are finally ready to show Proposition 1.
Proof. Proposition 1 First via Eq. (3) we have:
mt+1 = (I − A)r + AWmt. (16)
By expanding out the previous equation we have that:
mt+1 =
X
k<t+1
(AW)k(I − A)r + (AW)t+1r.
However, in Corollary 1 we showed that the Neumann series P∞
t=0(AW)t converges to (I − AW)−1. Hence,
it follows that
tli→m∞ mt+1 = tli→m∞
X
k<t+1
(AW)k(I − A)r + (AW)t+1r = (I − AW)−1(I − A)r = m.
□
Proposition 2. For any contractor network and t ≥ 2 we have that:
∥mt − m∥ ≤ 1 + 2
1 − ∥(AW)2∥ ∥r∥∥(AW)2∥⌊t/2⌋.
Moreover, if G is acyclic and we denote by d > 0 its maximum path length, then for all t ≥ d and all i ∈ V
we have mt
i = mi.
Proof. Using the fact that ∥(AW)2∥ < 1 by Lemma 2 we look at the vector mt − m to have:
(mt − m) = −
∞
X
k=t
(AW)k(I − A)r + (AW)tr.
By the triangle inequality
∥mt − m∥ ≤ ∥P
k≥t(AW)k(I − A)r∥∞ + ∥(AW)tr∥∞,
≤ ∥(AW)t∥∥r∥∞ ∥P
k≥0(AW)k∥∥I − A∥ + 1 , (Cauchy-Schwarz)
≤ 1+P
k≥0∥(AW)k∥ ∥r∥∞∥(AW)t∥.
Using that
X
k≥0
∥(AW)k∥ ≤
X
k≥0
∥(AW)2∥⌊k/2⌋ = 2
X
k≥0
∥(AW)2∥k = 2
1 − ∥(AW)2∥ ,
we then get:
∥mt − m∥∞ ≤ 1 + 2
1 − ∥(AW)2∥ ∥r∥∞∥(AW)2∥⌊t/2⌋.
Next suppose that G is a directed acyclic graph. Then the last property can be shown from the
fact that (AW)t = 0 for all t > d. To see why this is, we observe that each entry is (AW)t
ij =
P
(v0 =i,...,vt =j )∈V t
Qt−1
k=0 αvk wvk,vk+1 > 0 if and only if (v0, . . . , vt) is a length t path from v0 to vt. Since the
longest path contains d edges, it follows that all entries of (AW)t are zero and mt = P
k≤d(AW)k(I−A)r = m
for t > d. In fact, we also have that md = m because (AW)d is only nonzero in columns corresponding to pure
principals with αi = 0, so (AW)d = (AW)d(I − A). Then md = P
k<d(AW)k(I − A)r + (AW)d(I − A)r = m.
□

Broderick et al.: Network and Risk Analysis of Surety Bonds 41
B.2. Section 3.3 Omitted Proofs
Theorem 1. Under Assumption 1, the mean failure probability vector evolves monotonically: for all t
∈ N,
mt ≤ mt+1, E[L(Xt)] ≤ E L(Xt+1) .
Hence,
m ≥ r, E[L(X∞)] ≥ E L(X0) .
Moreover, increasing the exposure parameter αi of any intermediary i can only raise the entries of m:
∂m ∂αi
= (I − AW)−1 ∂A
∂αi
[Wm − r] ≥ 0.
Under the opposite of Assumption 1, all inequalities hold in the reverse direction.
We show the result through the combination of the following lemmas.
Lemma 5. Under Assumption 1, increasing the exposure to risk from the network αi of any intermediary
i ∈ V can only increase default probabilities in m. That is, all entries of m are monotonically non-decreasing
with respect to αi:
∂m ∂αi
= (I − AW)−1 ∂A
∂αi
[Wm − r] ≥ 0.
Proof. The vector derivative of m = (I − AW)−1(I − A)r with respect to αi is
∂m ∂αi
=∂
∂αi
(I − AW)−1 × (I − A)r
= ∂(I − AW)−1
∂αi
(I − A)r + (I − AW)−1 ∂(I − A)r
∂αi
= −(I − AW)−1 ∂(I − AW)
∂αi
(I − AW)−1(I − A)r + (I − AW)−1 ∂(I − A)
∂αi
r
= (I − AW)−1 ∂A
∂αi
W (I − AW)−1(I − A)r
| {z }
m
−(I − AW)−1 ∂A
∂αi
r
= (I − AW)−1 ∂A
∂αi
(Wm − r).
Because AW is row sub-stochastic and non-negative, (I − AW)−1 = P∞
t=0(AW)t ⪰ 0 is also non-negative.
Additionally, ∂A
∂αi ⪰ 0 is a diagonal matrix with zero entries for all rows corresponding to pure principals and
pure obligees, since their entries are fixed as 0 and 1 in A. We will multiply (Wm − r) by ∂A
∂αi from the left,
which will give a vector ∂A
∂αi (Wm − r) whose only nonzero entries are those corresponding to intermediaries.
From Corollary 2 and Assumption 1, we have that for all intermediaries i,
(Wm − r)i =
X
j ∈δin (i)
wij mj − ri ≥
X
j ∈δin (i)
wijrj − ri ≥ 0.
Then ∂A
∂αi (Wm − r) ≥, and the vector derivative ∂m
∂αi ≥ 0 is non-negative. □
Lemma 6. Under Assumption 1, for all i ∈ V and t ∈ N the mean failure probabilities mt
i are monotone
with respect to t, i.e.
mt+1
i ≥ mt
i.
Hence, for all t and i, mi ≥ mt
i.

Broderick et al.: Network and Risk Analysis of Surety Bonds 42
Proof. We will show the property by induction for each node i ∈ V.
Base Case (t = 0):
m1
i = (1 − αi)ri + αi
X
j ∈δin (i)
wij E X0
j = (1 − αi)ri + αi
X
j ∈δin (i)
wij rj
≥
A1
(1 − αi)ri + αiri = ri = m0
i.
Step Case (t → t + 1): By definition of the mean failure probabilities,
(
mt+1
i = (1 − αi)ri + αi
P
j∈δin(i) wij mt
j, mt
i = (1 − αi)ri + αi
P
j∈δin(i) wij mt−1
j.
Thus,
mt+1
i − mt
i = αi
n
X
j=1
wij (mt
j − mt−1
j )≥
(I.H.)
0 =⇒ mt+1
i ≥ mt
i, for all i ∈ V.
Therefore, mt+1
i ≥ mt
i as required. □
Corollary 2. Under Assumption 1, we have that for all t ∈ N,
E L(Xt+1) ≥ E[L(Xt)]. (17)
Hence, we have that:
E[L(X∞)] ≥ E L(X0) . (18)
Proof. Since L(Xt) = Pn
i=1 βiX t
i , with βi > 0 for all i, Eq. (17) follows by linearity of expectation
and Lemma 6, and Eq. (18) follows by taking the limit as t → ∞ and the continuous mapping theorem and
the linearity of L(·). □
An obvious question remains as to whether the reverse is true under Assumption 1, i.e. if intermediaries
have lower risk principals on average then the mean failure probabilities are monotone decreasing. Indeed, a
straightforward extension to the previous discussion establishes the following:
Corollary 3. If all intermediaries i ∈ V have lower risk principals on average, i.e. P
j∈δin(i) wij rj ≤ ri,
then mt+1 ≤ mt and E[L(Xt+1)] ≤ E[L(Xt)], which imply that
m ≤ r, E[L(X∞)] ≤ E[L(X0)].
Furthermore, ∂m
∂αi = (I − AW)−1 ∂A
∂αi [Wm − r] ≤ 0.
Proof. We can follow arguments similar to those in Lemma 6 and Corollary 2 by replacing ≥ with ≤ where
appropriate to show that similar statements hold for the opposite direction. □
Proposition 3. Under Assumption 2 we have that:
m − r ≥ δ(I − AW)−1Ar,
E[L(X∞)] − E L(X0) ≥ δβ⊤(I − AW)−1Ar.
Proof. To show this claim we start off with the following lemma:

Broderick et al.: Network and Risk Analysis of Surety Bonds 43
Lemma 7. For any contractor graph G and all t ∈ N, under Assumption 2 we have
mt ≥ ft(δ) r,
where
ft(δ) :=



I, t = 0,
I + δ Pt−1
k=0(AW)kA, t ≥ 1.
Proof. First we argue that under Assumption 2, we have that for all nodes i:
αiw⊤
i r ≥ (1 + δ)αiri,
where w⊤
i = [wi1 wi2 . . . win] denotes the ith row in W. For any pure principal i we have αi = 0, so both
sides are zero and the inequality is trivially satisfied. For pure obligees i ri = 0, and so again the inequality
is trivially satisfied. Then for intermediaries with αi ∈ (0, 1), the inequality is precisely Assumption 2. Thus,
we have that AWr ≥ (1 + δ)Ar.
We now show the result by considering the change in mt at each step. In the first step, we have that
m1 = (I − A)r + AWm0 = (I − A)r + AWr
| {z }
≥(1+δ)Ar
≥ r + δAr,
i.e. m1 −m0 ≥ δAr. Then Lemma 1 implies that mt+1 −mt = (AW)t(m1 −m0), so we have that mt+1 −mt ≥
δ(AW)tAr. Then
mt = (mt − mt−1) + · · · + (m1 − m0) + m0 ≥ r + δ
t−1
X
k=0
(AW)kAr,
which shows that mt ≥
h
I + δ Pt−1
k=0 (AW)k A
i
r = ft(δ)r. □
Using Lemma 7 and taking the limit as t → ∞ we have that:
m ≥ (tli→m∞ ft(δ))r,
where we can use the interchange, since all of the limits exist. However,
tli→m∞ ft(δ) = tli→m∞ I + δ
t−1
X
k=0
(AW)kA
= I + δ tli→m∞
t−1
X
k=0
(AW)kA
= I + δA(I − AW)−1A
where in the last line we used the Von-Neumann expansion for a matrix (see Corollary 1). Rearranging this
expression gives that m − r ≥ δ(I − AW)−1Ar.
Moreover, we also have:
E[L(X∞)] =
X
i
βimi = β⊤m
≥ β⊤(I + δ(I − AW)−1A)r = β⊤r + δβ⊤(I − AW)−1Ar = E L(X0) + δβ⊤(I − AW)−1Ar.
□

Broderick et al.: Network and Risk Analysis of Surety Bonds 44
Appendix C: Section 4 Omitted Proofs
Lemma 3. (Xt)t∈N is a Markov chain over the state space {0, 1}n that converges to a unique stationary
distribution with probability mass function π(x) = limt→∞ P(Xt = x) for all x ∈ {0, 1}n.
Proof. The fact that Xt is a Markov chain over the finite state space {0, 1}n follows immediately from our
construction; that is, (Xt)t∈N is a sequence of random variables that satisfy the Markov property P(Xt+1 =
xt+1 | Xt, . . . , X0) = P(Xt+1 = xt+1 | Xt) for all t. We will restrict our attention to states xt ∈ {0, 1}n that
are feasible, in the sense that there exists some time t such that P(Xt = xt) > 0. The Markov chain Xt has a
unique stationary distribution if it is ergodic (irreducible, positive recurrent) and aperiodic over the feasible
state space (Resnick 2013). Thus, we wish to show that all feasible states can reach each other in a finite
number of steps, and that at least one feasible state has a self-loop, so Xt is also aperiodic whenever it is
ergodic.
Before we show that self-loops exist and that the Markov chain is ergodic, we characterize the states
that can be reached in one step from a given current state. Conditioning on a feasible current state Xt =
xt, nodes fail or do not fail independently in the following time step, so we can consider the conditional
default probability of each node individually. We first consider principals (pure principals and intermediaries).
Because we require ri ∈ (0, 1) and αi < 1 for all principals i, all of their default probabilities lie strictly
between zero and one. More formally, the probability of any principal i failing in the next step satisfies
0 < (1 − αi)ri ≤ P(Xt+1
i = 1 | Xt = xt) ≤ (1 − αi)ri + αi < 1, (19)
for any time t and feasible state xt. Intuitively, this property holds for principals because their default
probability contains an idiosyncratic component. Pure obligees, on the other hand, can only fail (or not fail)
if one of their principals failed (or did not fail) in the previous time step. For any pure obligee i ∈ O, feasible
xt, and xt+1
i ∈ {0, 1},
P(X t+1
i = xt+1
i | Xt = xt) =
X
j ∈δin (i)
wij 1 xt
j = xt+1
i >0
if and only if at least one principal is currently in state xt+1
i . Then conditional independence implies
P(Xt+1 = xt+1 | Xt = xt) =
Y
j∈N
P(X t+1
j = xt+1
j | Xt = xt)
| {z }
>0 ∀j
Y
i∈O
P(X t+1
i = xt+1
i | Xt = xt)
| {z }
>0 iff. {j∈δin(i)|xt
j =xt+1
i }̸=∅
.
Thus we have the following necessary and sufficient condition:
P(Xt+1 = xt+1 | Xt = xt) > 0 ⇐⇒ {j ∈ δin(i) | xt
j = xt+1
i } ̸= ∅, for all pure obligees i. (20)
This shows that we can usually go between any two states in one step, with the only exception being when
Equation (20) does not hold. In other words, we can reach xt+1 from xt in one step as long as the states of
principals in xt “coincide” with the states of pure obligees in xt+1. We can now apply the above discussion to
show aperiodicity and ergodicity of the Markov chain. x We first wish to show that there exists a feasible state
xt with a self-loop, so that we can guarantee aperiodicity whenever we have ergodicity. From Equation (20)
it follows that xt has a self-loop, i.e. P(Xt+1 = xt | Xt = xt) > 0, if and only if {j ∈ δin(i) | xt
j = xt
i} ̸= ∅.
Additionally, at least one such state always exists: the state in which no nodes fail, i.e. the vector of all

Broderick et al.: Network and Risk Analysis of Surety Bonds 45
zeros x = 0. We define X0
i ∼ Bernoulli(ri) as independent random variables with ri < 1, so P(X0 = 0) =
Q
i∈V (1 − ri) > 0. Therefore, we have that xt = 0 is a feasible state in which all pure obligees i satisfy
{j ∈ δin(i) | xt
j = xt
i} = {j ∈ δin(i) | 0t
j = 0t
i} = δin(i) ̸= ∅,
so we always have at least one feasible state with a self-loop.
Next we show that the Markov chain is ergodic. Let xt+2 and xt denote two arbitrary feasible states in
the Markov chain. We claim that P(Xt+2 = xt+2 | Xt = xt) > 0 because we can always construct some state
xt+1 satisfying P(Xt+2 = xt+2 | Xt+1 = xt+1) > 0 and P(Xt+1 = xt+1 | Xt = xt) > 0. We will use the fact that
no principals j ∈ δin(i) of any pure obligee i can be contained in the set of pure obligees and Equation (20)
to show that we can set the states of principals and pure obligees in xt+1 separately, making it possible to
coordinate with both xt and xt+2. In particular, we can set the states of principals in xt+1 so that the states
of pure obligees in xt+2 are reachable, then set the states of pure obligees in xt+1 to be reachable from the
states of principals in xt.
We begin by observing that for any feasible xt+2, there must be some feasible x ̃t+1 such that P(Xt+2 =
xt+2 | Xt+1 = x ̃t+1) > 0. However, no pure obligees can be a principal in δin(i) for any node i, so their realized
states at time t + 1 do not influence any default probabilities at time t + 2:
P(X t+2
i = xt+2
i | Xt+1 = x ̃t+1) = (1 − xt+2
i ) + (2xt+2
i − 1) (1 − αi)ri + αi
X
j ∈δin (i)
wij x ̃t+1
j
= P Xt+2
i = xt+2
i | X t+1
j = x ̃t+1
j ∀j ∈ δin(i) .
That is, for any feasible state xt+1 such that xt+1
j = x ̃t+1
j for all principals j, its transition probabilities are
the same as those of x ̃t+1:
P(Xt+2 = xt+2 | Xt+1 = x ̃t+1) =
Y
i∈V
P X t+2
i = xt+2
i | X t+1
j = x ̃t+1
j = xt+1
j ∀j ∈ δin(i)
= P(Xt+2 = xt+2 | Xt+1 = xt+1) > 0.
We can then arbitrarily set the states of pure obligees i in xt+1 so that we also satisfy P(Xt+1 = xt+1 |
Xt = xt) > 0 by letting xt+1
i = x ̃t
j for any j ∈ δin(i). Using Equation (20), we can check that this indeed
ensures a positive transition probability. Then xt+1 is a feasible state that satisfies both P(Xt+2 = xt+2 |
Xt+1 = xt+1) > 0 and P(Xt+1 = xt+1 | Xt = xt) > 0, and we have described a way to construct xt+1 such
that P(Xt+2 = xt+2, Xt+1 = xt+1 | Xt = xt) > 0. Thus, we have that P(Xt+2 = xt+2 | Xt = xt) > 0 for any two
feasible states, i.e. any two states can always reach each other in just two steps with positive probability.
In summary, we have shown that most states can reach each other in one step, as long as states of principals
and pure obligees are “consistent” with each other as described by Equation (20). Then this implies that
the zero vector 0 is a feasible state with a self-loop, and that we can always construct an intermediate state
xt+1 that allows us to traverse between any two feasible states in two steps. As a result, the Markov chain
is ergodic and aperiodic, and therefore it converges to a unique stationary distribution. □

Broderick et al.: Network and Risk Analysis of Surety Bonds 46
C.1. Extension of Theorem 2 to Time-Varying Graphs
We next extend the mixing-time result in Theorem 2 to contractor networks whose structure evolves over
time. Specifically, we show that our coupling-based contraction argument continues to hold under mild
regularity conditions even when the contracting relationships change dynamically.
Formally, consider a sequence of directed graphs (Gt)t≥0, where each Gt = (V, Et) represents the contracting
relationships at time t over a fixed set of nodes V. The structure and interpretation of the model remain
identical to Section 2, except that contractual ties (and their associated weights) may now vary across time.
We then consider the same stochastic process as in Eq. (1), but now allowing both the failure propagation
probabilities and edge weights to evolve with t. Each node i has a time-varying propagation probability
αt
i ∈ [0, 1], and wt
ij denotes the fraction of i’s projects subcontracted to principal j at time t. For each t ∈ N,
this gives rise to the matrices
At = diag{αt
i}, Wt = (wt
ij )i,j∈V ,
where Wt is row sub-stochastic by construction. Accordingly, the time-varying stochastic process evolves as
X t+1
i ∼ Bernoulli

(1 − αt
i)ri + αt
i
X
j∈δt
in (i)
wt
ij X t
j

. (21)
In the static model of Section 2, principals satisfy αi < 1 while pure obligees have αi = 1. In the
time–varying setting, it is natural to preserve these across nodes at each step: project owners (obligees) do
not suddenly begin subcontracting, and principals do not abruptly stop serving as upstream contractors.
Formally, we impose the following role–persistence condition, together with a time–uniform analogue of the
static assumption on propagation probabilities.
Assumption 3. For every node i ∈ V, if i is a pure obligee at time t, it remains a pure obligee at time
t + 1; likewise, if i is a principal at time t, it remains a principal at time t + 1.
Assumption 3 reflects that pure obligees (e.g., municipal agencies or project owners) do not act as sub
contractors from one period to the next, while principals continue to perform bonded work and may only
evolve in their contractual connections. Graphically, the assumption ensures that outgoing edges from a pure
obligee do not appear between t and t + 1, and that nodes identified as principals retain at least one outgoing
edge across time. Consistent with this interpretation, pure obligees always satisfy αt
i = 1 for all t ∈ N.
In addition, we impose a uniform bound on the propagation parameters of all non-obligee nodes.
Assumption 4. There exists α ̄ ∈ (0, 1) such that, for every t ∈ N and every node i ∈ V that is not a pure
obligee at time t, we have αt
i ≤ α ̄.
Assumption 4 generalizes the static assumption that all principals and intermediaries transmit failures
with probability strictly less than one. Intuitively, while the magnitude of αt
i may vary over time (e.g.,
as contracting conditions change), it remains uniformly bounded. Together, Assumptions 3 and 4 ensure
that the network retains its hierarchical structure across time and that the two-step contraction property
continues to hold uniformly.

Broderick et al.: Network and Risk Analysis of Surety Bonds 47
We now extend the mixing-time bound in Theorem 2 to the time-varying setting. In the time-varying
regime, the process generally does not admit a stationary distribution, since the transition kernel changes
with time. Accordingly, mixing should be interpreted as the rate at which the process forgets its initialization:
we bound the total variation distance between any two trajectories started from arbitrary initial conditions.
Under Assumptions 3 and 4, the same coupling argument used for static graphs continues to ensure uniform
geometric convergence, with a rate governed by the two-step contraction factor α ̄. When the graph sequence
Gtt≥0 is time-homogeneous, this theorem exactly recovers Theorem 2, recovering the unique stationary law
of the static process.
Theorem 5. Let {(At, Wt)}t≥0 be a sequence of time-varying contractor-network matrices defined as
above satisfying Assumptions 3 and 4.
For any two initial states x, y ∈ {0, 1}n let P(Xt | x) and P(Yt | y) denote the distribution of two realizations
of the stochastic process Eq. (21) started from X0 = x and Y0 = y respectively. Then for every t ∈ N,
dT V P(Xt | x), P(Yt | y) ≤ n Mt−1Mt−2 · · · M0 ∞. (22)
As a result,
dT V P(Xt | x), P(Yt | y) ≤ nα ̄⌊t/2⌋. (23)
Before presenting the proof, we start with the following analog of Lemma 2 that establishes that under
Assumptions 3 and 4, the fixed graph two–step contraction property continues to hold.
Lemma 8. Under Assumptions 3 and 4, we have that
sup
t∈N
∥ At+1Wt+1AtWt ∥∞ ≤ α ̄ < 1. (24)
Proof. For each t, the matrix Mt := AtWt is entry-wise nonnegative and row sub–stochastic, hence ∥Mt∥∞ ≤
1. To obtain a strict contraction over two steps, fix t ∈ N and a row index i. The l∞–induced norm equals
the maximum row sum, so we estimate the i–th row sum of At+1Wt+1AtWt:
X
j
At+1Wt+1AtWt ij =
X
j
X
k
αt+1
i wt+1
ik αt
k wt
kj
= αt+1
i
X
k
αt
k wt+1
ik
X
j
wt
kj
| {z }
≤1
≤
X
k
αt
k wt+1
ik ,
where we used αt+1
i ≤ 1 in the last inequality. Now, if wt+1
ik > 0 then node k has positive outgoing weight at
time t+1, so it is a principal at t+1. By Assumption 3, k is also a principal at time t and thus not a pure
obligee at time t. Therefore, by Assumption 4, αt
k ≤ α ̄ < 1. Hence
X
k
αt
k wt+1
ik ≤ α ̄
X
k
wt+1
ik ≤ α ̄,
and taking the maximum over i gives
∥At+1Wt+1AtWt∥∞ ≤ α ̄ < 1.
Finally, taking the supremum over t, on both sides, proves the claim. □

Broderick et al.: Network and Risk Analysis of Surety Bonds 48
Using this lemma we can show Theorem 5.
Proof. At a high level, the derivation of Eq. (22) mirrors the static case; we highlight the time-varying
modifications and refer to the proof of Theorem 2 for omitted steps. We first construct a synchronous coupling
of the two trajectories (Xt)t∈N and (Yt)t∈N starting from X0 = x and Y0 = y respectively, and show that
for all t ∈ N,
E[∥Xt − Yt∥1 | x, y] ≤ n Mt−1Mt−2 · · · M0 ∞, where Ms := AsWs.
By the standard coupling inequality,
dT V (P(Xt | x), P(Yt | y)) ≤ P(Xt ̸= Yt | x, y) = P ∥Xt − Yt∥1 ≥ 1 | x, y
≤ E[∥Xt − Yt∥1] ≤ n Mt−1 · · · M0 ∞,
as claimed.
We now formalize the coupling step. Write the dynamics as Xt+1 = fθt+1 (Xt) where θt = (θt
i )i∈[n] are
independent uniform random variables, exactly as in the proof of Theorem 2. For i = 1, . . . , n, define
Dt
i ≜ E[|Xt
i −Yt
i |], Dt ≜ Dt
1, . . . , Dt
n
⊤.
By the same calculation as in Lemma 4 (with time index t carried through), we have for all t ≥ 0,
Dt+1 ≤ AtWt Dt = Mt Dt.
Iterating this one-step domination yields
dT V (P(Xt | x), P(Yt | y)) ≤ E[∥Xt − Yt∥1 | x, y] = ∥Dt∥1 ≤
(C.S.)
n ∥Dt∥∞
≤ n Mt−1 · · · M0 D0
∞ ≤ n Mt−1 · · · M0 ∞ ∥D0∥∞ ≤ n Mt−1 · · · M0 ∞,
since ∥D0∥∞ = ∥x − y∥∞ ≤ 1. This is precisely the bound stated in Eq. (22).
Under Assumptions 3 and 4, Lemma 8 holds and gives a uniform two–step contraction. Hence, by sub
multiplicativity we have that for even steps, t = 2m,
∥Mt−1 · · · M0∥∞ = ∥(M2m−1M2m−2) · · · (M1M0)∥∞ ≤ α ̄ m,
and for odd t = 2m+1,
∥Mt−1 · · · M0∥∞ = ∥M2m(M2m−1M2m−2) · · · (M1M0)∥∞ ≤ ∥M2m∥∞ α ̄ m ≤ α ̄ m.
Combining both cases gives
∥Mt−1 · · · M0∥∞ ≤ α ̄⌊t/2⌋.
Plugging this into the bound on dTV (P(Xt | x), P(Yt | y)) yields the second result. □

Broderick et al.: Network and Risk Analysis of Surety Bonds 49
C.2. Section 4.1 Omitted Proofs
Theorem 3. If G is a directed acyclic graph, then for any t ≥ d where d > 0 is the maximum tree depth
of the graph, and using the in-neighbor layers ∆k
in from Definition 2, the stationary distribution admits the
following closed form:
P(Xt = x) =
X
xt−1
∆i1n
···
X
xt−d
∆idn
P(Xt = x | Xt−1
∆1
in
= xt−1
∆1
in
)
d−1
Y
k=1
P(Xt−k
∆k
in
= xt−k
∆k
in
| Xt−k−1
∆k+1
in
= xt−k−1
∆k+1
in
)P(Xt−d
∆d
in
= xt−d
∆d
in
).
Proof. Let Xt
S ≜ (Xt
i )i∈S be a random vector containing the entries of Xt corresponding to nodes in S ⊂ V.
By definition, the transition P(Xt
i = Xt
i | Xt−1 = xt−1) depends only on the state of in-neighbors (principals)
in the previous step and is fixed for all t > 0:
P(X t
i = 1 | Xt−1 = xt−1) = (1 − αi)ri + αi
X
j ∈δin (i)
wij xt−1
j = P(Xt
i = 1 | Xt−1
δin(i) = xt−1
δin (i) ).
Then from conditional independence we have that
P(Xt = xt | Xt−1 = xt−1) =
Y
i∈V
P(X t
i = xt
i | Xt−1
δin(i) = xt−1
δin(i)) = P(Xt = xt | Xt−1
∆1
in
= xt−1
∆1
in
),
where ∆1
in (see Definition 2) denotes the subset of nodes that are in-neighbors (principals) of another node.
In other words, the joint distribution over Xt can be determined without knowing the previous states of
nodes not in ∆1
in, i.e., pure obligees.
Similarly, conditional independence implies that the default probabilities of nodes in ∆k
in depend only on
the previous states of their principals, which are contained in ∆k+1
in :
P(Xt
∆k
in
= xt
∆k
in
| Xt−1 = xt−1) =
Y
i∈∆k
in
P(X t
i = xt
i | Xt−1
δin(i) = xt−1
δin(i)) = P(Xt
∆k
in
= xt
∆k
in
| Xt−1
∆k+1
in
= xt−1
∆k+1
in
).
Then the law of total probability implies that
P(Xt = xt | Xt−2 = xt−2) =
X
xt−1
∆1
in
P(Xt = xt | Xt−1
∆1
in
= xt−1
∆1
in
)P(Xt−1
∆1
in
= xt−1
∆1
in
| Xt−2 = xt−2)
=
X
xt−1
∆1
in
P(Xt = xt | Xt−1
∆1
in
= xt−1
∆1
in
)P(Xt−1
∆1
in
= xt−1
∆1
in
| Xt−2
∆2
in
= xt−2
∆2
in
)
= P(Xt = xt | Xt−2
∆2
in
= xt−2
∆2
in
).
Repeating this argument, we eventually get that:
P(Xt = xt | Xt−d = xt−d) =
X
xt−1
∆1
in
···
X
xt−d+1
∆d−1
in
P(Xt = xt | Xt−1
∆1
in
= xt−1
∆1
in
)
d−1
Y
k=1
P(Xt−k
∆k
in
= xt−k
∆k
in
| Xt−k−1
∆k+1
in
= xt−k−1
∆k+1
in
)
= P(Xt = xt | Xt−d
∆d
in
= xt−d
∆d
in
),
where d is the longest directed path length. We note that this gives a special case of the Chapman–Kolmogorov
equation as derived by Kolmogoroff (1931) and Chapman (1928), which describes a general relation between
joint probabilities in stochastic processes. Note that any d-length path must start from a pure principal, so ∆d
in
is contained in the set of pure principals who are unaffected by the network and always fail idiosyncratically

Broderick et al.: Network and Risk Analysis of Surety Bonds 50
according to their inherent risk score in r. Thus, P(Xt−d
∆d
in
= x∆d
in ) = P(X0
∆d
in
= x∆d
in ) is fixed for all t ≥ d. Then
it follows that for all t ≥ d,
P(Xt = xt) =
X
x∆idn
P(Xt = xt | Xt−d
∆d
in
= x∆d
in )P(Xt−d
∆d
in
= x∆d
in ) = P(Xd = xt) = π(xt). (25)
That is, when the contractor network is acyclic and has a maximum depth of d, the joint distribution
converges to its stationary distribution π(·) in at most d steps. □
Appendix D: Computational Experiments: Additional Details
D.1. Construction of Anonymous Network
In our simulations we use real contract and firm data from our partnering surety organization. For privacy
reasons, we do not use the original data directly. Instead, we construct a replica network that preserves
key structural and distributional properties of the empirical network while protecting sensitive information.
Section 5.1 provides a high level description of the surety network, with the network data included in the
attached code details.
Our empirical dataset includes all bonded contracts that were active at any time in calendar year 2018
(i.e. with start date before December 31, 2018 and end date after January 1, 2018). The graph G contains
the set of nodes as contracting organizations which had at least one active contract within that time period.
Each organization i has an observed value Revenue(i) for their the total contract volume of obligee i within
that year, as observed in the surety’s dataset. Contracts are dictated by a directed edge e = (j, i) between
an obligee i and principal j, with a corresponding bond amount BondAmt(i, j). Note that in the event that
i and j have multiple contracts, then BondAmt(i, j) corresponds to the cumulative bond amount across all
contracts active within that one year period. In order to normalize the scale, we construct the edge weights
wij via:
wij = BondAmt(i, j)
Revenue(i) .
Note that in the event P
j∈δin(i) BondAmt(i, j) ̸= Revenue(i) then this node has unobserved contracts. We
present a methodology to handle this case in Section D.2. For each organization in the network, we also have
their idionyncratic risk score (default probability) ri and loss amount suffered by the surety if it defaults βi.
To ensure anonymity, node labels are discarded and replaced with indices under a fixed ordering.
Based on these primitives, we generate a noisy observation of this empirical network that conceals sensitive
contractor information while retaining essential features: the edge structure, the distributions of βi, ri, and
the relationship between network position and node characteristics based on the framework of differential
privacy (Dwork et al. 2006). The construction proceeds as follows. Beginning with the set of pure principals
(nodes at depth τ = 0), we rewire edges iteratively across depths:
(i) Each node at depth τ maintains at least one outgoing edge to a node at depth τ + 1.
(ii) Each node at depth τ + 1 with k unmatched in-edges is assigned k incoming edges from nodes at depth
τ.
(iii) Any remaining unmatched out-edges from nodes at depth τ are randomly connected to unmatched
in-edges of nodes at later depths.

Broderick et al.: Network and Risk Analysis of Surety Bonds 51
This process continues until depth d − 1. Nodes at depth d are pure obligees and therefore have no outgoing
edges. Conditions (i)–(iii) guarantee that all stubs are matched, degree distributions are preserved, and nodes
remain at their original depth, ensuring that principals and obligees retain their types.
To further protect privacy, we apply the Laplace mechanism with scale calibrated to the global sensitivity
of each statistic (cf. Dwork et al. 2006): each ri and βi is re-scaled and then perturbed with independent
Laplace noise. Finally, we also redefine the edge weights in our replica network. The bond amounts of each
contract (edge) in the original network also pass through the same re-scaling and Laplace mechanism as the
node features, and each re-scaled amount is associated to the contract obligee. After rewiring, these bond
amounts are then arbitrarily reassigned to the rewired in-edges of the obligee and normalized so that the
sum of incoming weights to each obligee is one.
This procedure yields a replica network that preserves several important characteristics of the empirical
data: the shapes of the distributions of ri, βi and wij; the way obligees distribute contracts among principals;
and the relationship between a node’s position in the network and its features. For example, an obligee
that originally allocates most projects to a single principal behaves similarly in the replica, and a high-risk
contractor embedded in a long path of intermediaries retains that network role.
D.2. Accounting for Unobserved Edges
In practice, an obligee’s reported revenue Revenue(i) may exceed the value of contracts bonded by the surety,
since competing surety organizations may also underwrite a portion of their contracting principal’s work.
In this case, we observe that Revenue(i) > P
j∈δin(i) BondAmt(i, j) and the proposed methodology will result
in a node whose weighted in-degree (P
j∈δini wij) is strictly less than one. To account for such unobserved
contracts (aka unobserved edges) we present a methodology to impute the graph under reasonable assumption
on each obligees contracting behavior.
For each obligee i such that Revenue(i) > P
j∈δin(i) BondAmt(i, j), we define a dummy principal with
baseline risk rout
i and a single outgoing edge weighted as:
wi,out = 1 −
X
k∈δin (i)
wik
to represent all unobserved principals. Note that by using this dummy variable we rely on the implicit
assumption that the subcontractors of i and k do not contract with each other, so that rout
i and rout
k can be
expressed as independent risk scores. In order to estimate rout
i we make the following assumption.
Assumption 5. Suppose each contractor j is assigned one of T product segment types Type(j) ∈
{τ1, . . . , τT }. Furthermore, let δin(i) denote the set of all of i’s contractors, including unobserved contractors.
We assume that for any type τk,
P
{j∈δin(i) : Type(j)=τk} wij
P
{j∈δin(i)} wij
=
P
{j∈V\δin(i) : Type(j)=τk} wij
P
{j∈V\δin(i)} wij
.
In other words, the fraction of i’s obligations to subcontractors j of type τk in the unobserved network is
the same as the fraction in our observed network. Given this assumption, we define rout
i to be a convex
combination of the median baseline risk scores r ̄j associated with each product segment type, weighted by
how often obligee i works with contractors of the same type in our observed network. In particular, we set:
rout
i=
X
j ∈δin (i)
wij
P
j∈δin(i) wij
r ̄j .

Broderick et al.: Network and Risk Analysis of Surety Bonds 52
10 5 10 4 10 3 10 2 10 1
ri
10 5
10 4
10 3
10 2
10 1
j wijrj
(a) ri vs P
j wij rj
0 100 200 300
Intermediaries i
0.05
0.00
0.05
mi ri
(b) mi − ri
Figure 12 (Left) The idiosyncratic default probabilities ri for intermediaries i as compared to the weighted
average of their principals’ idiosyncratic default probabilities. Several points fall below the dashed y = x line,
indicating that for these intermediaries, Assumption 1 is not satisfied. Note that plot is shown on a logarithmic
scale. (Right) Values mi − ri = [(I − AW)−1A(W − I)r]i for intermediaries i, sorted in ascending order. Most
points lie above the x-axis, indicating that the limiting failure probabilities of these intermediaries satisfy mi > ri.
D.3. Real-World Network Satisfying Assumption 1
In Section 3, we established that under Assumption 1, that is, when each intermediary i satisfies
P
j∈δin(i) wijrj ≥ ri, the limiting failure probabilities mi are guaranteed to exceed their idiosyncratic risk
levels ri. While this condition is sufficient to ensure higher expected losses, it is not necessary. In practice,
we observe that the condition holds for many but not all intermediaries, yet the expected aggregate loss
E[L(X∞)] is still larger than E[L(X0)]. Indeed, as showin in Figure 12a, a number of intermediaries in our
empirical network violate the assumption, but the net effect of those satisfying the inequality dominates,
producing greeater expected losses and amplified tail risk.
To further formalize this observation, we derive an alternative sufficient condition for mi ≥ ri. Starting
from the closed-form expression
m = (I − AW)−1(I − A)r,
we compute
m − r = (I − AW)−1A(W − I)r.
Thus, for each intermediary i, we have mi ≥ ri if and only if
(I − AW)−1A(W − I)r i ≥ 0.
Empirically, this condition is satisfied for the majority of intermediaries in our dataset (see Figure 12b),
meaning that their network-adjusted failure probabilities exceed their idiosyncratic risks.
Taken together, these results show that although Assumption 1 does not universally hold, a sufficient
mass of intermediaries nonetheless experience risk amplification (mi ≥ ri). Consequently, as summarized
in Section 5.3, the expected aggregate loss E[L(X∞)] strictly exceeds its independent-failure counterpart,
consistent with the heavier right tails observed in the empirical loss distribution.

Broderick et al.: Network and Risk Analysis of Surety Bonds 53
Appendix E: Useful definitions and results
For completeness we state a couple results from Mu ̈ller and Stoyan (2002) that are used here for the proof
of Theorem 4.
Theorem 6 ((Mu ̈ller and Stoyan 2002, Theorem 3.3.8)). Let X = (X1, X2, . . . , Xn) and Y =
(Y1, Y2, . . . , Yn) have a common copula. If Xi ⪯st Yi for all i = 1, 2, . . . , n, then X ⪯st Y.
Theorem 7 ((Mu ̈ller and Stoyan 2002, Theorem 3.3.11)). If X ⪯st Y and g : Rn → Rk is increas
ing, then g(X) ⪯st g(Y).

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:42.661Z
- **Text Length:** 136595 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 53 of 53
