# PDF Document: Park and Lee - 2025 - On Transportability for Structural Causal Bandits.pdf

**File Path:** Park and Lee - 2025 - On Transportability for Structural Causal Bandits.pdf

**Processed Date:** 2026-02-10T18:16:54.450Z

**File Size:** 914.40 KB

**Total Pages:** 30

**Extracted Pages:** 30

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3465

**Title:** On Transportability for Structural Causal Bandits

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

On Transportability for Structural Causal Bandits
Min Woo Park Sanghack Lee Graduate School of Data Science Seoul National University Seoul, South Korea
{alsdn0110,sanghack}@snu.ac.kr
Abstract
Intelligent agents equipped with causal knowledge can optimize their action spaces to avoid unnecessary exploration. The structural causal bandit framework provides a graphical characterization for identifying actions that are unable to maximize rewards by leveraging prior knowledge of the underlying causal structure. While such knowledge enables an agent to estimate the expected rewards of certain actions based on others in online interactions, there has been little guidance on how to transfer in-
formation inferred from arbitrary combinations of datasets collected under different conditions—observational or experimental—and from heterogeneous environments. In this paper, we investigate the structural causal bandit with transportability, where priors from the source environments are fused to enhance learning in the deployment setting. We demonstrate that it is possible to exploit invariances across environments to consistently improve learning. The resulting bandit algorithm achieves a sub--
linear regret bound with an explicit dependence on informativeness of prior data, and it may outperform standard bandit approaches that rely solely on online learning.
1 Introduction
The multi-armed bandit (MAB) [Robbins, 1952, Lai and Robbins, 1985, Lattimore and Szepesvári, 2020] problem is a pivotal topic in sequential decision-making studies, where an agent aims to maximize cumulative rewards by repeatedly choosing actions based on observed rewards, balancing the exploration-exploitation trade-off. Traditionally, MAB problems assume independence among rewards of different arms, meaning that the reward obtained from one arm provides no information about the others. This ass-
umption limits its applicability to scenarios where dependencies between actions are common such as clinical trials, healthcare, and advertising.
Integrating causal knowledge into a decision-making process enables an agent to model decision problems with abundant dependency structures [Zhang et al., 2020, Kumor et al., 2021, Zhang and Bareinboim, 2022, Ruan et al., 2024], where structural causal models (SCMs) [Pearl, 2000] have been employed to represent causal relationships among actions, rewards, and other relevant factors such as context and states. This approach enables agents to make informed decisions by considering how each action ca-
usally influences the reward through causal pathways [Bareinboim et al., 2024].
Existing works [Bareinboim et al., 2015, Lattimore et al., 2016, Forney et al., 2017] have shown that MAB algorithms with causal knowledge can significantly outperform others that do not account for causal dependencies. Subsequent work has explored various specialized settings by introducing additional structural assumptions, such as the availability of both observational and experimental distributions or linear mechanisms [Lu et al., 2020, Bilodeau et al., 2022, Feng and Chen, 2023, Varici et al.-
, 2023]. Specifically, Lee and Bareinboim [2018] formalized the structural causal bandit without any parametric assumptions. Building on this, Lee and Bareinboim [2019] extended the framework to accommodate scenarios involving non-manipulable variables.
Preprint.
arXiv:2511.17953v1 [cs.LG] 22 Nov 2025

Although the framework significantly reduces the action space, it still requires a substantial amount of exploration, which can be costly in many applications. An alternative approach to alleviating the cost of active experimentation is to leverage previous experimental records from related environments. The expectation is that informative prior data can help narrow down reward distributions and circumvent the cold-start problem of agents, allowing them to converge to optimal actions faster, ulti-
mately achieving a higher cumulative reward, even without incurring any regret. However, discrepancies across environments are often significant, meaning that the data obtained from source environments may not always be informative or lead to improvements in a target environment.
X1
X2
WY
U
Figure 1: Diagram encoding causal relations.
Example. (Cardiovascular disease treatment) Consider a scenario where Y represents cardiovascular disease, W blood pressure, X1 the intake of an antihypertensive drug, X2 the use of an anti-diabetic drug, and U unobserved factors (e.g., physical activity levels, diet patterns; Ferrannini and Cushman [2012]). Prior data from Houston (source) is available for designing a population-level treatment strategy for cardiovascular disease patients in Boston (target), aiming to determine appropriate medica-
tions. Fig. 1 graphically illustrates this scenario. Such data can be useful but must be handled with care, especially if the population is suspected to differ, e.g., we may expect the distribution P (U ) vary across populations. Consider an instance where variables X1, X2, W , and Y are binary, and their values are determined by functions: W ←X1⊕U , X2←U , and Y ←W ∧X2, where ⊕ denotes the exclusive-or operation. X1 is drawn independently and uniformly over {0, 1} and P (U =1)=0.4. Under this sys-
tem, we find EPdo(X1=1) Y =0.6 > 0.4=EPdo(X1=0) Y suggesting the antihypertensive drug was effective for Houstonians. Now suppose P (U =1)=0.7, reflecting the situation in Boston. In the target, the expected outcome becomes EPdo(X1=1) Y = 0.3, which is the opposite of what was observed in the source. This example illustrates that the optimal strategy in a source can be suboptimal in a target.
In the causality literature, this problem falls under the rubric of transportability theory [Pearl and Bareinboim, 2011, Bareinboim and Pearl, 2012b, 2016], which provides methods for determining when and how a causal effect can be computed across different environments. Zhang and Bareinboim [2017] studied the transfer of prior observations in settings with specific graph structures, e.g., Bow and Instrumental Variable (IV), demonstrating that leveraging existing experience can enhance the perform-
ance of an agent. Bellot et al. [2023] and Deng et al. [2025] addressed this line of work in general causal diagrams, although their focus was limited to single-node interventions.
Contributions. We propose a structural causal bandit algorithm that leverages prior data while accounting for structural discrepancies across heterogeneous environments. Our main contributions are as follows: (1) Within the structural causal bandits framework, we first establish hierarchical relations between action spaces and derive corresponding dominance bounds on the expected rewards of actions. (2) We introduce a method for estimating the expected rewards or their causal bounds using arbitrar-
y combinations of observational or experimental sources. (3) We provide a UCB-based algorithm that incorporates causal information to guide exploration, and we provide both theoretical guarantees and empirical results showing it achieving a sub-linear cumulative regret depending on the amount of causal knowledge.
2 Preliminaries
We introduce notation and review relevant prior work. Following conventions, we use a capital letter, such as X, to represent a variable, with its corresponding lowercase letter, x, denoting a realization of the variable. Boldface is employed to represent a set of variables or values, denoted by X or x. The domain of X is indicated by ΩX and ΩX= ×X∈X ΩX . We use calligraphic letters for graphs and models such as G and M. The distribution over variables X is denoted by P (X). We consistently use P -
(x) as an abbreviation for P (X = x). We denote by I{X = x}, the indicator function.
Structural Causal Model. We use structural causal model (SCM) [Pearl, 2000] as the semantic framework to represent the underlying environment a decision maker is deployed. An SCM M is a quadruple ⟨U, V, F, P (U)⟩, where U is a set of exogenous variables determined by factors outside the model following a joint distribution P (U), and V is a set of endogenous variables
2

whose values are determined following a collection of functions F = {fV }V ∈V such that V ← fV (PAV , UV ) where PAV ⊆ V \ {V } and UV ⊆ U. The observational probability P (v) is
defined as R
u
Q
V ∈V I{fV (paV , uV ) = v}dP (u). Every SCM M is associated with a causal diagram (also called a semi-Markovian graph) G = ⟨V, E⟩ where a directed edge Vi → Vj ∈ E if Vi ∈ PAVj , and a bidirected edge between Vi and Vj if UVi and UVj are dependent. The probability of V = v when X is intervened upon to take the value x is denoted by P (v | do(x)) or Px(v), and the submodel induced by the intervention is denoted by Mx.
Graphical notations. An ordered sequence of edges is called a path. If a path consists of directed edges with the same orientation, we say the path is directed. A path is directed from X to Y if there is no arrowhead on the path pointing towards X. If there is a (possibly empty) directed path from X to Y , then Y is called a descendant of X, and X is an ancestor of Y . A variable Y is referred to as a child of X, and X is a parent of Y if they are adjacent and the edge is not directed into X. We d-
enote the ancestors, descendants, parents, and children of a given variable as An, De, Pa, and Ch, respectively. Ancestors and descendants include the variable itself. For a set of variables, we define the ancestral set as An(X)G = S
X∈X An(X)G, and similarly for other relationships. The
X-lower-manipulation of G removes all outgoing edges from variables in X, denoted as GX, while the X-upper-manipulation of G removes all incoming edges into variables in X in G, denoted as GX.
We denote the set of variables in G by V(G). A subgraph G[V′], where V′ ⊆ V(G) is defined as a vertex-induced subgraph in which all edges among the vertices in V′ are preserved. We define G\X as G[V(G) \ X] for X ⊆ V(G). We denote G⟨X⟩ as the latent projection of G on to X. We provide related literature in Sec. A, along with detailed background for our work in Sec. B.
3 Structural Causal Bandits with Transportability
We formalize the structural causal bandit with transportability problem, where an agent interacts with a target system modeled by a structural causal model (SCM) M∗ including a reward variable Y ∈ V. In this setting, pulling each arm corresponds to intervening on a set of variables {x ∈ ΩX | X ⊆ V \ {Y } \ N} where N denotes non-manipulable variables. We use the terms arm, action, and intervention interchangeably, depending on the context. The agent cannot access the target system M∗ but can obser-
ve V through online interaction by pulling an arm do(x). In addition, the agent has access to data from one or more related source environments Π = {π1, π2, · · · , πn} each associated with SCMs M1, M2, · · · , Mn. The distributions associated with πi under do(x) will be denoted by Pxi . We use the superscript ∗ throughout this paper to consistently denote the target environment.
Graph encoding differences among environments. To account for environment shift, we introduce a selection diagram [Bareinboim and Pearl, 2012b] that captures discrepancies across environments.
Definition 1 (Environment discrepancy). Let πi and πj be environments associated with SCMs M1
and M2 conforming to a causal diagram G. We denote by ∆i,j a set of variables such that, for every V ∈ ∆i,j, there exists a discrepancy; either f i
V ̸= f j
V or P i(UV ) ̸= P j(UV )1.
Definition 2 (Selection diagram). Given a collection of discrepancies ∆ = {∆∗,i}n
i=1 with regard to
G = ⟨V, E⟩, let Si = {SV | V ∈ ∆∗,i} be selection nodes. The graph G∆∗,i = ⟨V ∪ Si, E ∪ {SV →
V }SV ∈Si } is called a selection diagram. Let S = Sn
i=1 Si. The collective selection diagram G∆ is
defined as ⟨V ∪ S, E ∪ {SV → V }SV ∈S}.
We shorten ∆∗,i as ∆i. The collective selection diagram G∆ encodes qualitative information about M∗ and discrepancies ∆. The absence of a selection node pointing to a variable indicates that the causal mechanism responsible for assigning values to that variable is identical across all environments corresponding to π∗ and Π = {πi}n
i=1. One can view the selection nodes S as switches controlling
environment shifts, and the collective selection diagram G∆ as the causal diagram for a unified SCM representing heterogeneous SCMs following Px∆(y | w, si = i, s−i = 0) = Pxi (y | w) and
Px∆(y | w, s = 0) = Px∗(y | w) where S−i = S \ Si. This representation enables probabilistic
operations across the target environment π∗ and source environments Π.
1Superscripts on ∆, such as ∆i, indicate discrepancies with respect to different environments πi, while subscripts like ∆x denote suboptimal gaps for the regret analysis for a bandit problem.
3

We illustrate in Fig. 2a a collective selection diagram G∆ corresponding to the introductory example. In this scenario, the distributions of W and X2 may differ between M∗ and M1 due to the difference in the distribution of unobserved confounder U , which influences both variables. This is consistent with ∆ = {∆1 = {W , X2}} and S = S1 = {SW , SX2 }. In the diagram, the selection nodes SW and SX2 are represented as red squares.
X1
X2
WY
(a) G∆
A
B
C
Y
(b) Multi-sources
Figure 2: Collective selection diagrams for
(a) the introductory example and (b) ∆1 = {A} (red) and ∆2 = {C} (blue).
We have P ∗(x1) = P ∆(x1 | s = 0) = P ∆(x1 | s =
1) = P 1(x1) due to the d-separation relation [Pearl, 1995] (S ⊥⊥d X1)G∆ and a similar equality can be derived for
Y . In contrast, it may not hold P ∗(w, x2) = P 1(w, x2) due to (S ̸⊥⊥d W , X2)G∆ . This result indicates that, given
access to P 1(v), the probability P ∗(x1) is inferable via
P 1(x1) = P
v\{x1} P 1(v), whereas P ∗(w, x2) is not. In
this sense, we may say that P ∗(x1) is transportable from
the source environment π1. We will provide, within the context of structural causal bandits, a formal definition of transportability and study it in detail in Sec. 4.
Definition 3 (Structural causal bandits with transportability). Let xt be the action taken at round t ∈ {1, · · · , T }. The goal of structural causal bandits with transportability is to minimize cumulative regret in the target environment π∗ defined as follows:
RT =
T
X
t=1
EP ∗
x⋆ Y − EPx∗t Y =
X
x
∆xENT (x) (1)
that compares the reward of the optimal arm x⋆ = arg maxx∈ΩX,X⊆V\{Y }\N EPx∗ Y with that of arm xt in each round t. ∆x denotes suboptimal gap EP ∗
x⋆ Y − EPx∗ Y and NT (x) denotes the number of times an action x was chosen up to round T .
Action space worth exploring. In settings where variables exhibit causal relationships represented by a causal diagram, restricting attention to a subset of the entire action space can lead to improved performance. This implies that instead of exploring all the exponential subsets in 2V\{Y }\N, it suffices to consider some subspace. We denote by x∗ = arg maxx∈ΩX EPx Y the best expected
reward by intervening on X, and x[X′] the values of x restricted to the subset of variables of X ∩ X′.
Definition 4 (Minimality [Lee and Bareinboim, 2018]). If X ⊆ V \ {Y } \ N be a set such that there is no X′ ⊆ X such that EPx Y = EPx[X′] Y 2, we refer to X as a minimal intervention set (MIS).
Definition 5 (Possibly-optimal intervention set). Let X ⊆ V \ {Y } \ N be a set of variables. We say that X is a possibly-optimal intervention set (POIS) with respect to ⟨G, Y , N⟩ if there exists an SCM conforming to G such that EPx∗ Y > EPw∗ Y for all W ⊆ V \ {Y } \ N that are not equivalent to X.
Minimality implies that every variable X ∈ X affects the reward variable without passing through X \ {X} in G. We refer to a set as a possibly-optimal minimal intervention set (POMIS) [Lee and Bareinboim, 2018, 2019] if it is both a POIS and minimal. We denote by PN
G,Y a set of POMISs
with respect to ⟨G, Y , N⟩3. By definition of POMIS, intervening on non-POMIS cannot yield a better outcome than the optimal one associated with POMIS. This means x⋆ in Eq. (1) can be equivalently expressed as x⋆ = arg maxx∈ΩX,X∈PN∗
G,Y EPx∗ Y restricting the exploration space to
POMISs. Therefore, an agent who is aware of POMIS should only explore and exploit actions consistent with those sets. All graphical characterizations for PO(M)IS are in Sec. C.
3.1 Dominance Relationships among Action Spaces
We say an action space dominates another when it behaves better than or equal to another with respect to maximum achievable expected reward. For example, it is immediate from the definition of POIS (Def. 5) that all POISs with respect to ⟨G, Y , N⟩ dominate any non-POISs under the same constraint. Let W ⊆ V \ {Y } \ N∗ be a set that is not a POIS with respect to ⟨G, Y , N∗⟩. According to Def. 5, we can derive that W cannot outperform the target POMISs with respect to ⟨G, Y , N∗⟩ (i.e., POMISs
2We refer to X and X′ as equivalent if the equality holds. 3For readability, we omit N when N = ∅ (e.g., PG,Y and ⟨G, Y ⟩), referring to this case as unconstrained.
4

in the target environment). The following inequality states that the target POMIS dominates sets which are non-POISs.
EP ∗
x⋆ Y ≥ EP ∗
w∗ Y (2)
This inequality implies that if there exists at least one non-POIS action w ∈ ΩW whose expected reward is greater than that of any target POMIS action, then such an action cannot be the true optimal action. Beyond such trivial cases, we now turn our attention to more nuanced dominance relations that arise between constrained and unconstrained PO(M)ISs. Let r⋆ be an optimal POIS action with respect to ⟨G, Y ⟩. The following inequality says unconstrained POISs dominates target POMISs.
EP ∗
x⋆ Y ≤ EP ∗
r⋆ Y . (3)
This implies that the expected rewards of target POMIS arms are upper bounded by the right-hand side of Eq. (3). To witness, consider the ongoing cardiovascular example (Fig. 2a). Suppose blood pressure W is non-manipulable, i.e., N∗ = {W }. The set of POMISs is then given by
PN∗
G,Y = {{X1}, {X1, X2}}, which implies that the optimal action x⋆ must be consistent with do(x1∗) or do({x1, x2}∗) but not with do(∅) or do(x2∗). According to the dominance relationship, do(x1)
and do(x1, x2) can be interpreted as the best alternative plans under the constraint N∗ = {W }. For concreteness, we consider an unconstrained (i.e., N = ∅) POIS R = {W , X2}. The expected reward
under do(x1∗) can be decomposed as EP ∗
x1∗
Y =P
r EP ∗
x1∗
[Y | r]P ∗
x∗
1 (r) (=a) P
r EP ∗
x1∗,r [Y ]P ∗
x∗
1 (r) (=b)
P
r EPr∗ [Y ]P ∗
x∗
1 (r) ≤ EP ∗
r∗ Y = EP ∗
r⋆ Y where (a) follows from Rule 2 and (b) follows from Rule 3
of do-calculus. This inequality shows that EP ∗
x1∗
Y ≤ EP ∗
r⋆ Y , and a similar argument applies to
do({x1, x2}∗) implying that EP ∗
x⋆ Y ≤ EP ∗
r⋆ Y . In fact, one can observe EP ∗
{x1,x2}∗ = EP ∗
x1∗
Y=
0.7 ≤ EP ∗
r⋆ = 1. We now turn to the dominance relations involving non-POIS actions in Eq. (2).
Consider W = {X2} a non-POIS with respect to ⟨G, Y , N∗⟩. We find EP ∗
w∗ Y = 0.5, which implies
that the optimal action x⋆ must satisfy EP ∗
x⋆ ≥ 0.5. Indeed, as previously shown, EP ∗
x⋆ = 0.7. Based on the dominance relations in Eqs. (2) and (3), we introduce the following dominance relationship.
Theorem 1 (Dominance relationship). Let r⋆ be an optimal action with respect to ⟨G, Y , N⟩ where N is a subset of N∗. Let W be a non-POIS with respect to ⟨G, Y , N∗⟩. Then EP ∗
x⋆ Y is bounded by
EP ∗
w∗ Y ≤ EP ∗
x⋆ Y ≤ EP ∗
r⋆ Y . (4)
(c) N = {C} PN
G,Y = {∅, {A},
{A, B}}
(d) N = ∅ PN
G,Y = {∅, {A},
{A, C}}
(b) N = {A} PN
G,Y = {∅, {B}, {C}}
(a) N∗ = {A, C}
PN∗
G,Y = {∅, {B}}
Figure 3: Hierarchical relationships between POMISs under different constraints. Arrows indicate the direction of dominance relations.
The target POMISs dominate non-POISs under the same constraint, while being dominated by PO(M)ISs defined under a weaker constraint. The second inequality in Eq. (4) can be interpreted as a generalized version of Eq. (3) where the target POMISs is regarded as POMISs with respect to ⟨G⟨V \ N⟩, Y , N∗ \ N⟩. Therefore, each EP ∗
r⋆ Y obtained
under a weaker constraint (any subset of N∗) provides a valid upper bound for the target POMISs. While one might be concerned that evaluating POMISs for all weaker constraints is computationally exhaustive, it is worth noting that any proper subset of N corresponds to a strictly weaker constraint than N, and the associated bound is looser; and thus the proper subsets of N dominate N. We illustrate this in Fig. 3, where the target POMISs (a) are defined under N∗ = {A, C} for the causal diagram corr-
esponding to Fig. 2b. In this setting, each optimal action under a weaker constraint, (b–d), dominates (a); furthermore, (d) dominates both (b) and (c). This means that (d) is not tighter than either (b) or (c); thus if (b) or (c) is known, estimating (d) is unnecessary to upper bound (a).
Equipping with this dominance knowledge, the corresponding algorithm (Alg. 3 in Sec. D) hierarchically traverses the space of constrained POMISs and stops early when a transferable EP ∗
r⋆ Y is found, thereby avoiding unnecessary computation. However, it is possible that while EP ∗
r⋆ Y is not transferable from the sources Π, its upper bound ur⋆ can still be transferred; thus, it provides valid bounds when integrated with Thm. 1, EP ∗
x⋆ Y ≤ ur⋆ (we will refer to this as dominance bounds). In the following section, we describe how to compute such valid bounds of expected rewards from the sources Π (Sec. 4.1) and how to leverage the dominance bounds in online interaction (Sec. 4.2).
5

4 Transporting Actions from Source Environments
In this section, we investigate transportability of expected rewards in detail and present a method leveraging this knowledge. Consider the collective selection diagram G∆ in Fig. 2b, and suppose that the first dataset from π1 is collected under observation Z1 = {∅} while dataset from π2 is obtained under randomized controlled trial (RCT) with respect to Z2 = {{A, C}}. The target environment π∗ is assumed to be subject to the constraint N∗ = {C}. Our objective is to identify transportable quantiti-
es to minimize unnecessary exploration by leveraging prior information from π1 and π2. As a representative instance, the causal effect of the POMIS action do(a) in π∗ can be written as: P∗
a (y) =
X
b,c
P∗
a (b)P ∗
a (c | b)P ∗
a (y | b, c) (=a)
X
b,c
P∗
a,c(b)P ∗
∅ (c | a, b)P ∗
a,c(y | b)
=
X
b,c
P∗
∅ (c | a, b)P ∗
a,c(b, y) (b=)
X
b,c
P1
∅ (c | a, b)P ∗
a,c(b, y) (=c)
X
b,c
P1
∅ (c | a, b)P 2
a,c(b, y). (5)
Specifically, note that equality (a) follows from applications of Rule 2 (converting conditioning on c to do(c) and do(a) to conditioning on a) and Rule 3 (adding do(c)) of do-calculus. Equation (b) holds since the discrepancy between π∗ and π1 is irrelevant due to (SA ⊥⊥d C | A, B)G∆ . The final equality (c) is derived from the indifference to the disparities in mechanisms fB and fY between
π∗ and π2. We observe that the causal effect Pa∗(y) can be expressed in terms of P 1
∅ and Pa2,c,
indicating that EPa∗ Y = P
y Pa∗(y) can be estimated from the sources Π. Accordingly, we say Pa∗(y) (or equivalently EPa∗ Y ) is transportable. We now provide a formal definition of transportability.
Definition 6 (Transportability [Lee et al., 2020]). Let G∆ be a collective selection diagram with respect to Π = {π1, · · · , πn} with a target domain π∗. Let Z = {Zi}n
i=1 be a specification of
available prior Zi conducted in source environment πi. We say that Px∗(y) is transportable with
respect to ⟨G∆, Z⟩ if Px∗(y) is uniquely computable from PΠ
Z = {Pzi | z ∈ ΩZ, Z ∈ Zi ∈ Z} in any
collection of models that induce G∆.
We introduce the following graphical concepts, which are widely used in the causality literature. Let ccG = {Cq}qm=1 be the collection of c-components of G. For C ⊆ V, we define the quantity Q[C](v) = Pv\c(c), which corresponds to the post-intervention distribution and is referred to as a c-factor. For convenience, we omit input v and write Q[C]. We denote the quantities for the target environment π∗ as Q∗[C] = P ∆
v\c(c | s = 0) and for sources πi as Qi[C] = P ∆
v\c(c | si = i, s−i =
0) consistently. We denote by Y+ = An(Y )GX the set of variables that affect the reward Y under the intervention on X. The expected reward in the target environment EPx∗ Y can be uniquely expressed
using m c-factors Cq ∈ ccG[Y+] as follows:
EPx∗ Y =
X
y
yP ∗
x (y) =
X
y+
y
m
Y
q=1
Q∗[Cq]. (6)
When a c-component C satisfies C ∩ ∆i = ∅ and there exists a c-component C ⊆ C′ such that Qi[C] is identifiable4 from G[C′], we refer to Q∗[C] as being transportable from πi [Lee et al., 2020]. Furthermore, Px∗(Y ) and EPx∗ Y are transportable with respect to ⟨G∆, Z⟩ if and
only if all c-factors Q∗[Cq] in the right-hand side of Eq. (6) are transportable from some source environment πi ∈ Π. To illustrate, we now reformulate Eq. (5) in terms of c-factors, following Eq. (6): EPa∗ Y = P
y yPa∗(y) = P
b,c,y yQ∗[C]Q∗[B, Y ]. Since {C} ∩ ∆1 = ∅ and {B, Y } ∩ ∆2 = ∅, and
each corresponding c-factor is identifiable from π1 and π2, respectively, each c-factor is transportable from π1 and π2. Therefore, EPa∗ Y is transportable and is given by EPa∗ Y = P
b,c,y yQ1[C]Q2[B, Y ].
When EPx∗ Y is not transportable, it may seem that a learning agent cannot obtain any assistance
from sources and must estimate outcomes entirely from scratch, engaging in cold exploration. However, while determining the exact values may be infeasible, the learner may still extrapolate partial knowledge from the prior to improve estimates within a feasible interval.
4.1 Bounding Non-transportable Actions
Our next result concerns the derivation of bounds for the target c-factor Q∗[C] from a non-identifiable source quantity Qi[C] in terms of an identifiable source quantity Qi[C′] where C ⊆ C′.
4This means that the quantity Qi[C] = P ∆
v\c(c | si = i, s−i = 0) is uniquely computable from G[C′]. We provide the formal definition of identifiability in Def. 7, along with further detailed description in Sec. B.
6

Proposition 1. Let C be a c-component in G \ X satisfying C ∩ ∆i = ∅ and D be a c-component satisfying C ⊆ D. Let C′ = An(C)G[D]. The target c-factor Q∗[C] is bounded in [l, u] where (i) if C = C′, then l = u = P
c′\c Qi[C′]; (ii) otherwise, l = Qi[C′] and u = Qi[C′] + 1 − P
c Qi[C′].
We now revisit the collective selection diagram G∆ in Fig. 2b under a more challenging setting, where the source is modified by supposing that the given distributions correspond to Z1 = {∅, {C}} and Z2 = {{B}}. From π1, although {B, Y } ∩ ∆1 = ∅, Q1[B, Y ] is non-identifiable; consequently,
Q∗[B, Y ] is non-transportable from π1. In π2, there exists no c-component involving B, rendering the target c-factor non-transportable. This structural limitation prevents the learner from identifying Q∗[B, Y ], failing transportability of EPa∗ Y . While Q∗[B, Y ] is not transportable from either π1 or
π2, it is important to note that Q∗[B, Y ] = Q1[B, Y ] holds due to {B, Y } ∩ ∆1 = ∅. This implies
that any valid bound on l ≤ Q1[B, Y ] ≤ u also induces a valid bound on Q∗[B, Y ]. Following Prop. 1, we consider C′ = {A, B, Y }; the lower bound l is given by Q1[A, B, Y ], and the upper bound u is Q1[A, B, Y ] + 1 − P
b,y Q1[A, B, Y ]. Therefore, bound on EPa∗ Y is written as
X
b,c,y
yP 1
∅ (c | a, b)P 1
c (a, b, y) ≤ EPa∗ Y ≤
X
b,c,y
yP 1
∅ (c | a, b) P 1
c (a, b, y) + 1 − P 1
c (a)
which is derived by Q1[C] = P 1(c | a, b) and Q1[A, B, Y ] = Pc1(a, b, y). With this in hand, we are
ready to formally construct valid bounds of expected rewards of target actions given ⟨G∆, Z⟩.
Theorem 2 (Causal bounds). Given ⟨G∆, Z⟩, the target expected reward EPx∗ Y can be bounded by
[lx, ux] if for all c-factors Q∗[Cq] in the right-hand side of Eq. (6), there exists a source πi ∈ Π satisfying Cq ∩ ∆i = ∅ and a computable ancestral c-component Cq ⊆ C′q from G \ Z where Z ∈ Zi ∈ Z. The bound [lx, ux] is defined as:
lx ≜
X
y+
y
k
Y
q=1
Qiq [Cq]
m
Y
q=k+1
Qjq [C′
q] ≤
X
y+
y
k
Y
q=1
Qiq [Cq]
m
Y
q=k+1
Q∗[Cq] (7)
≤
X
y
y min
n
1,
X
y+ \{y }
k
Y
q=1
Qiq [Cq]
m
Y
q=k+1
Qjq [C′
q] + 1 −
X
cq
Qjq [C′
q]
o
≜ ux (8)
where Qk
q=1 Qiq [Cq] denotes transportable c-factors.
The upper bounds of Px∗(y) may exceed one due to sum-product operations over non-transportable terms. Thus, we take the minimum of the value and one. The corresponding algorithms (Algs. 4 and 5) are presented in Sec. E. First, the algorithm PATR (Alg. 4) outputs all expressions for bounds of Px∗(y), based on Prop. 1 and Thm. 2. Then, CAUSALBOUND (Alg. 5) computes the bounds on EPx∗ Y over the sources Π, and returns the tightest lower and upper bounds as the causal bound.
4.2 Upper Confidence Bound Algorithm with Transport Bounds
In this section, we now incorporate obtained bounds into a bandit problem. Dominance relationships (Thm. 1) and causal bounds (Thm. 2) can refine the upper confidence bound (UCB) [Auer et al., 2002] estimates during online learning. To illustrate this, we follow the clipped upper confidence bound approach [Zhang and Bareinboim, 2017, Zhang, 2023] as our index strategy. We denote the empirical reward estimate at round t for each arm in the target environment π∗ as ˆEPx∗,tY =
1 Nt (x)
Pt
t′=1 Yx,t′ I{Xt′ = x}. The standard UCB index is defined as Ux(t) = ˆEPx∗,tY +
q ln(1/δ) 2Nt (x)
where δ = t−4. Our index policy is defined as U ̄x(t) = min{max{Ux(t), lx}, ux} which constrains the standard UCB index within the final transport bounds [lx, ux]. Our algorithm TRUCB is presented
in Alg. 1, which begins by initializing the target action space with POMISs: I∗ ≜ {x ∈ ΩX | X ∈
PN∗
G,Y } (Line 1)5.
Dominance bounds and causal bounds. The next part (Lines 2–4), the algorithm attempts to determine whether the causal bounds can be identified and compute them using Thm. 2 (corresponding to CAUSALBOUND). All causal bounds are initialized as [0, ∞). Using the resulting causal bounds for each action and dominance relationship (Thm. 1), the algorithm computes the upper dominance bound
5Each subroutine, MISs and POMISs, is an algorithm that returns MISs and POMISs, respectively [Lee and Bareinboim, 2018]. Given G⟨V \ N∗⟩ and Y , these algorithms compute the corresponding sets for ⟨G, Y , N∗⟩.
7

Algorithm 1: TRansport bounds Upper Confidence Bound (TRUCB)
Input: Y : reward; G: causal diagram; N∗: non-manipulable variables; ∆: discrepancies; Z: a specification
of priors; Π: sources; PΠ
Z : available distributions;
1 Initialize the target action space I∗ ← {x ∈ ΩX | X ∈ POMISs(G⟨V \ N∗⟩, Y )} 2 Set the causal bounds [lx, ux] for all actions using CAUSALBOUND (Alg. 5 in Sec. E)
3 Set the upper dominance bound u⋆ using UDB (Alg. 3 in App. D); and ux ← min{ux, u⋆} for all x ∈ I∗.
4 Compute l⋆ = maxw∈ΩW,W∈MISs(G⟨V\N∗⟩,Y ) lw; and remove actions from I∗ such that ux < l⋆. 5 for each trial t ≤ T do
6 Choose an arm xt = argmax x∈I∗ U ̄x(t) where U ̄x(t) = min{max{Ux(t), lx}, ux}.
7 Intervene on Xt = xt for round t and receive reward Yt from P ∗
xt .
u⋆ by minimizing expected rewards of POMIS actions (or upper causal bounds if non-transportable) for weaker constraints, which may result in a tighter bound. The next step is to obtain the lower dominance bound l⋆ by taking the maximum of causal lower bounds lw over minimal actions
under the same constraint (i.e., MISs with respect to ⟨G, Y , N∗⟩). Since such actions can never outperform the optimal arm x⋆, we can safely exclude any actions x ∈ I∗ whose upper causal bound ux is lower than the lower dominance bound l⋆. We defer the technical details of the subroutinesCAUSALBOUND and UDB—to Secs. D and E, respectively. After completion of this phase, we refer to [lx, ux] as transport bounds, as they incorporate both dominance and causal bounds.
Clipped UCB. In the last part (Lines 5–7), the algorithm enters the online interaction phase with
the final actions space I∗. At each round t, it computes the clipped UCB U ̄x(t) for every arm by combining the empirical rewards collected up to round t with the transport bounds [lx, ux]. The agent then selects an arm with the highest index and receives the corresponding reward. Not surprisingly, this strategy ensures that the cumulative regret grows sublinearly with the number of rounds T .
Corollary 1. The expected number of pulls, ENt(x), is zero for all actions x satisfying ux < l⋆.
Proof. All actions x such that ux < l⋆ are removed from I∗ in Line 4. Let  ̄x = arg maxx∈I∗ lx.
If ux < lx ̄, then for all rounds t, it holds that U ̄x(t) ≤ ux < lx ̄ ≤ U ̄x ̄(t). Hence, any action x
satisfying ux < l⋆ will never be selected throughout the learning process.
5 Experiments
In this section, we present empirical results demonstrating that exploration over the action space I∗ and the clipped index within the transport bounds Ux(t) lead to lower cumulative regret (CR). We compare TRUCB (Alg. 1) with standard UCB over all combinations of arms (UCB) and over POMISs (POUCB), focusing primarily on POUCB to ensure a fair evaluation of transportability. The number of trials is set to 50k, which is sufficient to observe the performance differences, as shown in Fig. 7. Further -
detailed explanations and settings regarding experiments are provided in Sec. G.
A
B
Y
Figure 4
Task 1. We start with a simple structural causal bandit problem where N∗ = ∅ represented by Fig. 4. A decision maker has an RCT prior Z1 = {{B}} from ∆1 = {A}. The action space without prior information corresponds to
PN∗
G,Y = {{B}, {A, B}}. In this setting, we have EP ∗
bY =P
a,y yQ∗[A, Y ] by
Eq. (6). However, there is no c-factor satisfying Thm. 2 since {A} ∩ ∆1 ̸= ∅. In contrast, consider EP ∗
a,b Y = P
y yQ∗[Y ] = P
y yQ1[Y ] according to
{Y } ∩ ∆1 = ∅ and we can find Q1[A, Y ] = P 1
b (a, y). This implies that P
y yP 1
b (a, y) ≤ EP ∗
a,b Y ≤
P
y y{P 1
b (a, y)+1−P 1
b (a)}. Using these expressions, the decision maker can estimate causal bounds
for four actions corresponding to the POMISs: do(A = 0, B = 0) : [0.1675, 1], do(A = 0, B = 1) : [0.2965, 0.7940], do(A = 1, B = 0) : [0.8325, 1] and do(A = 1, B = 1) : [0.2935, 0.7960]. The algorithm computes the dominance bounds as l⋆ = 0.8325 and u⋆ = ∞. Among the four actions, the upper causal bounds udo(A=0,B=1) and udo(A=1,B=1) are lower than l⋆, leading them to be pruned
by TRUCB. Therefore, the algorithm begins the online interaction with the final action space I∗ excluding these two actions. We observe that the mean cumulative regret at the final trial is 47.94 for TRUCB and 130.16 for POUCB, which is CR for TRUCB
CR for POUCB = 36.83% of the latter.
8

0 25k 50k
Trials
0
100
200
300
400
Cumulative Regret
UCB
TRUCB
POUCB
(a) Task 1
0 25k 50k
Trials
0
100
200
300
400
500 POUCB TRUCB
(= UCB)
(b) Task 2
0 25k 50k
Trials
0
50
100
150
200
250 UCB POUCB TRUCB
(c) Task 3
Figure 7: Cumulative regrets of TRUCB (pink) compared with standard UCB over all combinations of arms (green) and over POMISs (purple). Each simulation is repeated 1,000 times to ensure consistency, and the shaded regions indicate the 2.5th and 97.5th percentiles of the empirical cumulative regrets.
A
B
C
Y
Figure 5
Task 2. We consider the setting in Fig. 5 where ∆1 = {A} and ∆2 = {B} with priors Z1 = {∅} and Z2 = {{C}} and constraint N∗ = {A, C}. The
initial action space corresponds to PN∗
G,Y . The action do(∅) is transportable since EP ∗
∅Y = P
a,b,c,y yQ2[A]Q1[B, C, Y ] = P
a,b,c,y yPc2(a)P 1(b, c, y | a) = 0.4844. On the other hand, do(b) is not transportable, as P ∗
b (y) =
P
a,c Q2[A]Q2[Y ]Q∗[C]. By Thm. 2, Q∗[C] is bounded by Q1[B, C], leading to lb = P
a,c,y yPc2(a)Pc2(y|a)P 1(c|a, b)P 1(b). This expression yields ldo(B=0) = 0.2097 and ldo(B=1) = 0.2752. The upper causal bound for do(b) is given by P
y y min{1, P
a,c Pc2(a)Pc2(y|a){P 1(b)P 1(c|a, b) + 1 − P 1(b)}}. We thus have the upper causal bounds, udo(B=0) = 0.6783 and udo(B=1) = 0.8066. The dominance bound is [l⋆, u⋆] = [0.4844, 0.7697] with u⋆ = 0.7697 derived from the expected reward of the transportable
action EP ∗
do(A=1,C=1) Y = P
y yP 2
do(C=1)(y|A=1) = 0.7697, which is an unconstrained POMIS.
Since udo(B=1)=0.8066 > 0.7697=u⋆, the final transport upper bound of do(B=1) is updated to u⋆. The resulting transport bounds for do(B=0) and do(B=1) are [0.2097, 0.6783] and [0.2752, 0.7697], respectively. Although the size of the action space remains unchanged (i.e., no action is removed from I∗, implying that the action spaces of all three algorithms are identical), we observe that accounting for the transport bounds improves performance, with CR of TRUCB reduced to 38.6% of POUCB.
W XZ
Y
T R
Figure 6
Task 3. We consider a more involved scenario (Fig. 6) to validate our result. Let ∆1 = {T } and ∆2 = {R}, with priors Z1 = {∅, {Z}} and Z2 = {{Z}}, and constraint N∗ = {T , W }. The algorithm starts
by initializing the action space as PN∗
G,Y = {∅, {R}, {X}, {Z}} where do(∅) and do(z) are transportable while do(x) and do(r) are not. In this
setting, the transportable target POMIS action yields EP ∗
do(Z=1) Y = 1,
leading to l⋆ = u⋆ = 1. Furthermore, we obtain the upper causal bounds udo(∅) = 0.5514, udo(X=0) = 0.7901 and udo(Z=0) = 0.034, which are
lower than l⋆. Consequently, the three actions are eliminated from I∗ by the algorithm. We observe mean cumulative regrets of 173.62 (POUCB) and 95.69 (TRUCB), achieving a 55.1% regret ratio. These results demonstrate performance improvements when transported causal knowledge from source environments is taken into account.
6 Conclusion
We investigated a structured causal bandit strategy that can utilize prior data from related heterogeneous environments. Since source environments may differ, some knowledge of the underlying structure and potential discrepancies was necessary to enable consistent extrapolation. To address this, we proposed a strategy that exploits transportable causal knowledge by incorporating bounds equipped with dominance relations and causal structure. We demonstrated that the resulting bandit algorithm, leve-
raging causal knowledge, enjoys a sub-linear regret bound that depends on the extent of such knowledge. We believe that these results have practical implications for designing intelligent agents, providing a foundation for optimizing the action space when historical data is available.
9

Acknowledgments and Disclosure of Funding
This work was supported by the IITP (RS-2022-II220953/50%) and NRF (RS-2023-00211904/50%) grant funded by the Korean government.
References
Virginia Aglietti, Xiaoyu Lu, Andrei Paleyes, and Javier González. Causal bayesian optimization. In International Conference on Artificial Intelligence and Statistics, pages 3155–3164. PMLR, 2020.
Peter Auer, Nicolo Cesa-Bianchi, and Paul Fischer. Finite-time analysis of the multiarmed bandit problem. Machine learning, 47:235–256, 2002.
Alexander Balke and Judea Pearl. Counterfactuals and policy analysis in structural models. In Proceedings of the Eleventh conference on Uncertainty in artificial intelligence, pages 11–18, 1995.
Alexander Balke and Judea Pearl. Bounds on treatment effects from studies with imperfect compliance. Journal of the American statistical Association, 92(439):1171–1176, 1997.
Elias Bareinboim and Judea Pearl. Causal inference by surrogate experiments: z-identifiability. In In Proceedings of the 28th Conference on Uncertainty in Artificial Intelligence, pages 113–120. AUAI Press, 2012a.
Elias Bareinboim and Judea Pearl. Transportability of causal effects: Completeness results. In Proceedings of the 26th AAAI Conference on Artificial Intelligence, pages 698–704, 2012b.
Elias Bareinboim and Judea Pearl. Causal inference and the data-fusion problem. Proceedings of the National Academy of Sciences, 113(27):7345–7352, 2016.
Elias Bareinboim, Sanghack Lee, Vasant Honavar, and Judea Pearl. Transportability from multiple environments with limited experiments. Advances in Neural Information Processing Systems, 26, 2013.
Elias Bareinboim, Andrew Forney, and Judea Pearl. Bandits with unobserved confounders: A causal approach. In Proceedings of the 28th Annual Conference on Neural Information Processing Systems, pages 1342–1350, 2015.
Elias Bareinboim, Sanghack Lee, and Junzhe Zhang. An introduction to causal reinforcement learning. Technical Report R-65, Causal Artificial Intelligence Lab, Columbia University, Dec 2024. URL https://causalai.net/r65.pdf.
Alexis Bellot and Silvia Chiappa. Towards estimating bounds on the effect of policies under unobserved confounding. Advances in Neural Information Processing Systems, 37:104556–104594, 2024.
Alexis Bellot, Alan Malek, and Silvia Chiappa. Transportability for bandits with data from different environments. Advances in Neural Information Processing Systems, 36:44356–44381, 2023.
Shriya Bhatija, Paul-David Zuercher, Jakob Thumm, and Thomas Bohné. Multi-objective causal bayesian optimization. arXiv preprint arXiv:2502.14755, 2025.
Blair Bilodeau, Linbo Wang, and Dan Roy. Adaptively exploiting d-separators with causal bandits. Advances in Neural Information Processing Systems, 35:20381–20392, 2022.
Ryan Carey, Sanghack Lee, and Robin J Evans. Toward a complete criterion for value of information in insoluble decision problems. Transactions on Machine Learning Research, 2024.
Juan Correa and Elias Bareinboim. General transportability of soft interventions: Completeness results. Advances in Neural Information Processing Systems, 33:10902–10912, 2020.
Juan D Correa and Elias Bareinboim. Counterfactual graphical models: Constraints and inference. In Forty-second International Conference on Machine Learning, 2025.
10

Juan D Correa, Sanghack Lee, and Elias Bareinboim. Counterfactual transportability: a formal approach. In International Conference on Machine Learning, pages 4370–4390. PMLR, 2022.
Mingwei Deng, Ville Kyrki, and Dominik Baumann. Transfer learning in latent contextual bandits with covariate shift through causal transportability. arXiv preprint arXiv:2502.20153, 2025.
Wen-Bo Du, Tian Qin, Tian-Zuo Wang, and Zhi-Hua Zhou. Avoiding undesired future with minimal cost in non-stationary environments. Advances in Neural Information Processing Systems, 37: 135741–135769, 2024.
Wen-Bo Du, Hao-Yi Lei, Lue Tao, Tian-Zuo Wang, and Zhi-Hua Zhou. Enabling optimal decisions in rehearsal learning under care condition. In Forty-second International Conference on Machine Learning, 2025.
Muhammad Qasim Elahi, Mahsa Ghasemi, and Murat Kocaoglu. Partial structure discovery is sufficient for no-regret learning in causal bandits. arXiv preprint arXiv:2411.04054, 2024.
Tom Everitt, Ryan Carey, Eric D Langlois, Pedro A Ortega, and Shane Legg. Agent incentives: A causal perspective. In Proceedings of the AAAI Conference on Artificial Intelligence, volume 35, pages 11487–11495, 2021.
Shi Feng and Wei Chen. Combinatorial causal bandits. In Proceedings of the AAAI Conference on Artificial Intelligence, volume 37, pages 7550–7558, 2023.
Ele Ferrannini and William C Cushman. Diabetes and hypertension: the bad companions. The Lancet, 380(9841):601–610, 2012.
Andrew Forney, Judea Pearl, and Elias Bareinboim. Counterfactual data-fusion for online reinforcement learners. In Doina Precup and Yee Whye Teh, editors, Proceedings of the 34th International Conference on Machine Learning, volume 70 of Proceedings of Machine Learning Research, pages 1156–1164. PMLR, 06–11 Aug 2017. URL https://proceedings.mlr.press/v70/ forney17a.html.
Wassily Hoeffding. Probability inequalities for sums of bounded random variables. The collected works of Wassily Hoeffding, pages 409–426, 1994.
Yimin Huang and Marco Valtorta. Pearl’s calculus of intervention is complete. In Proceedings of the 22nd Conference on Uncertainty in Artificial Intelligence, pages 217–224. AUAI Press, 2006.
Yimin Huang and Marco Valtorta. On the completeness of an identifiability algorithm for semiMarkovian models. Annals of Mathematics and Artificial Intelligence, 54(4):363–408, 2008.
Inwoo Hwang, Yunhyeok Kwak, Suhyung Choi, Byoung-Tak Zhang, and Sanghack Lee. Fine-grained causal dynamics learning with quantization for improving robustness in reinforcement learning. In International Conference on Machine Learning, pages 20842–20870. PMLR, 2024.
Kasra Jalaldoust and Elias Bareinboim. Transportable representations for domain generalization. In Proceedings of the AAAI Conference on Artificial Intelligence, volume 38, pages 12790–12800, 2024.
Kasra Jalaldoust, Alexis Bellot, and Elias Bareinboim. Partial transportability for domain generalization. In The Thirty-eighth Annual Conference on Neural Information Processing Systems, 2024.
Shalmali Joshi, Junzhe Zhang, and Elias Bareinboim. Towards safe policy learning under partial identifiability: A causal approach. In Proceedings of the AAAI Conference on Artificial Intelligence, volume 38, pages 13004–13012, 2024.
Yonghan Jung and Alexis Bellot. Efficient policy evaluation across multiple different experimental datasets. Advances in Neural Information Processing Systems, 37:136361–136392, 2024.
Yonghan Jung, Min Woo Park, and Sanghack Lee. Complete graphical criterion for sequential covariate adjustment in causal inference. Advances in Neural Information Processing Systems, 37: 19813–19838, 2024.
11

Yaroslav Kivva, Ehsan Mokhtarian, Jalal Etesami, and Negar Kiyavash. Revisiting the general identifiability problem. In The 38th Conference on Uncertainty in Artificial Intelligence, 2022.
Daniel Kumor, Junzhe Zhang, and Elias Bareinboim. Sequential causal imitation learning with unobserved confounders. Advances in Neural Information Processing Systems, 34:14669–14680, 2021.
Tze Leung Lai and Herbert Robbins. Asymptotically efficient adaptive allocation rules. Advances in applied mathematics, 6(1):4–22, 1985.
Finnian Lattimore, Tor Lattimore, and Mark D Reid. Causal bandits: Learning good interventions via causal inference. Advances in Neural Information Processing Systems, 29, 2016.
Tor Lattimore and Csaba Szepesvári. Bandit algorithms. Cambridge University Press, 2020.
Sanghack Lee and Elias Bareinboim. Structural causal bandits: Where to intervene? Advances in Neural Information Processing Systems, 31, 2018.
Sanghack Lee and Elias Bareinboim. Structural causal bandits with non-manipulable variables. In Proceedings of the AAAI Conference on Artificial Intelligence, pages 4164–4172, 2019.
Sanghack Lee and Elias Bareinboim. Characterizing optimal mixed policies: Where to intervene and what to observe. Advances in Neural Information Processing Systems, 33:8565–8576, 2020.
Sanghack Lee, Juan D Correa, and Elias Bareinboim. General identifiability with arbitrary surrogate experiments. In Proceedings of the 35th Conference on Uncertainty in Artificial Intelligence. AUAI Press, 2019.
Sanghack Lee, Juan Correa, and Elias Bareinboim. General transportability–synthesizing observations and experiments from heterogeneous domains. In Proceedings of the AAAI Conference on Artificial Intelligence, volume 34, pages 10210–10217, 2020.
Yangyi Lu, Amirhossein Meisami, Ambuj Tewari, and William Yan. Regret analysis of bandit problems with causal background knowledge. In Conference on Uncertainty in Artificial Intelligence, pages 141–150. PMLR, 2020.
Charles F Manski. Nonparametric bounds on treatment effects. The American Economic Review, 80 (2):319–323, 1990.
Min Woo Park, Andy Arditi, Elias Bareinboim, and Sanghack Lee. Structural causal bandits under markov equivalence. 2025.
Judea Pearl. Causal diagrams for empirical research. Biometrika, 82(4):669–710, 1995.
Judea Pearl. Causality: Models, Reasoning, and Inference. Cambridge University Press, New York, 2000. 2nd edition, 2009.
Judea Pearl and Elias Bareinboim. Transportability of causal and statistical relations: A formal approach. In Proceedings of the AAAI Conference on Artificial Intelligence, volume 25, pages 247–254, 2011.
Judea Pearl and James Robins. Probabilistic evaluation of sequential plans from causal models with hidden variables. In Proceedings of the Eleventh conference on Uncertainty in artificial intelligence, pages 444–453, 1995.
Tian Qin, Tian-Zuo Wang, and Zhi-Hua Zhou. Rehearsal learning for avoiding undesired future. Advances in Neural Information Processing Systems, 36:80517–80542, 2023.
Tian Qin, Tian-Zuo Wang, and Zhi-Hua Zhou. Gradient-based nonlinear rehearsal learning with multivariate alterations. In Proceedings of the AAAI Conference on Artificial Intelligence, volume 39, pages 26859–26867, 2025.
Herbert Robbins. Some aspects of the sequential design of experiments. Bull. Amer. Math. Soc., 58 (5):527–535, 1952.
12

James M Robins. The analysis of randomized and non-randomized aids treatment trials using a new approach to causal inference in longitudinal studies. Health service research methodology: a focus on AIDS, pages 113–159, 1989.
Kangrui Ruan, Junzhe Zhang, Xuan Di, and Elias Bareinboim. Causal imitation for markov decision processes: A partial identification approach. Advances in Neural Information Processing Systems, 37:87592–87620, 2024.
Ilya Shpitser and Judea Pearl. Identification of joint interventional distributions in recursive semiMarkovian causal models. In Proceedings of the 21st AAAI Conference on Artificial Intelligence, page 1219. Menlo Park, CA; Cambridge, MA; London; AAAI Press; MIT Press; 1999, 2006.
Lue Tao, Tian-Zuo Wang, Yuan Jiang, and Zhi-Hua Zhou. Avoiding undesired future with sequential decisions. pages 6245–6253, 09 2025. doi: 10.24963/ijcai.2025/695.
Jin Tian and Judea Pearl. A general identification condition for causal effects. In Proceedings of the 18th National Conference on Artificial Intelligence, pages 567–573, 2002.
Jin Tian and Judea Pearl. On the identification of causal effects. Technical Report R-290-L, 2003.
Burak Varici, Karthikeyan Shanmugam, Prasanna Sattigeri, and Ali Tajer. Causal bandits for linear structural equation models. Journal of Machine Learning Research, 24(297):1–59, 2023.
Thomas Verma and Judea Pearl. Equivalence and synthesis of causal models. In Proceedings of the Sixth Annual Conference on Uncertainty in Artificial Intelligence, pages 255–270, 1990.
Lai Wei, Muhammad Qasim Elahi, Mahsa Ghasemi, and Murat Kocaoglu. Approximate allocation matching for structural causal bandits with unobserved confounders. Advances in Neural Information Processing Systems, 36:68810–68832, 2023.
Kevin Xia, Kai-Zhan Lee, Yoshua Bengio, and Elias Bareinboim. The causal-neural connection: Expressiveness, learnability, and inference. Advances in Neural Information Processing Systems, 34, 2021.
Junzhe Zhang. Towards Causal Reinforcement Learning. PhD thesis, columbia university, 2023.
Junzhe Zhang and Elias Bareinboim. Transfer learning in multi-armed bandit: a causal approach. In Proceedings of the 16th Conference on Autonomous Agents and MultiAgent Systems, pages 1778–1780, 2017.
Junzhe Zhang and Elias Bareinboim. Near-optimal reinforcement learning in dynamic treatment regimes. Advances in Neural Information Processing Systems, 32, 2019.
Junzhe Zhang and Elias Bareinboim. Designing optimal dynamic treatment regimes: A causal reinforcement learning approach. In International conference on machine learning, pages 1101211022. PMLR, 2020.
Junzhe Zhang and Elias Bareinboim. Bounding causal effects on continuous outcome. In Proceedings of the AAAI Conference on Artificial Intelligence, volume 35, pages 12207–12215, 2021.
Junzhe Zhang and Elias Bareinboim. Online reinforcement learning for mixed policy scopes. Advances in Neural Information Processing Systems, 35:3191–3202, 2022.
Junzhe Zhang and Elias Bareinboim. Eligibility traces for confounding robust off-policy evaluation. OpenReview preprint, 2024.
Junzhe Zhang, Daniel Kumor, and Elias Bareinboim. Causal imitation learning with unobserved confounders. Advances in Neural Information Processing Systems, 33:12263–12274, 2020.
Junzhe Zhang, Jin Tian, and Elias Bareinboim. Partial counterfactual identification from observational and experimental data. In International conference on machine learning, pages 26548–26558. PMLR, 2022.
13

Contents
1 Introduction 1
2 Preliminaries 2
3 Structural Causal Bandits with Transportability 3
3.1 Dominance Relationships among Action Spaces . . . . . . . . . . . . . . . . . . . 4
4 Transporting Actions from Source Environments 6
4.1 Bounding Non-transportable Actions . . . . . . . . . . . . . . . . . . . . . . . . . 6
4.2 Upper Confidence Bound Algorithm with Transport Bounds . . . . . . . . . . . . 7
5 Experiments 8
6 Conclusion 9
A Related Works 15
B Background 16
C Possibly Optimal Intervention Sets: Characterizations 17
D Dominance Bounds 18 D.1 Lower Dominance Bound . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 18 D.2 Upper Dominance Bound . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 19
E Causal Bounds: Partial Transportability 21
E.1 Partial Transportability of Causal Effects . . . . . . . . . . . . . . . . . . . . . . . 22
E.2 Causal Bounds of Expected Rewards . . . . . . . . . . . . . . . . . . . . . . . . . 24
F Regret Upper Bounds of trUCB 24
G Details on Experimental Settings 25
G.1 Detailed Explanations of the Working Examples . . . . . . . . . . . . . . . . . . . 26
H Discussions 28
I Limitations 29
14

A Related Works
Identification. Causal effect identification, also known as the identification problem [Pearl, 1995], concerns whether the causal effect of an intervention on a set of variables can be uniquely computed from the observational distribution over observed variables and a given causal diagram. Foundational works [Tian and Pearl, 2002, Shpitser and Pearl, 2006, Huang and Valtorta, 2006, 2008] culminated in a complete graphical and algorithmic characterization of the problem. Beyond purely observational-
 sources, there has been growing interest in generalizing the identification problem to settings where both observational and experimental data are available. Bareinboim and Pearl [2012a] studied the conditions under which the causal effect is uniquely computable, given a causal diagram and a collection of observational and experimental distributions over all subsets of a given set. Lee et al. [2019] and Kivva et al. [2022] investigated the identification problem over arbitrary collections of dist-
ributions and established necessary and sufficient graphical conditions for generalized identification.
Partial identification. Given a causal diagram, one can express a causal effect in terms of the observational distribution using standard identification algorithms. However, challenges related to non-identifiability may arise, and the target effect may not be uniquely computable from observational data. The framework of partial identification [Balke and Pearl, 1995, 1997] addresses this issue by constraining the parameter space of causal effects within an interval. Zhang et al. [2022] proposed a p-
olynomial programming approach to solve partial identification problems for arbitrary causal diagrams. Partial identification has also been applied in the causal decision-making literature to estimate dynamic treatment regimes [Zhang and Bareinboim, 2019, 2020, 2022], reinforcement learning [Zhang and Bareinboim, 2024, Bareinboim et al., 2024], bandit algorithms [Zhang and Bareinboim, 2017, 2021, Joshi et al., 2024], and other domains [Jalaldoust et al., 2024, Bellot and Chiappa, 2024, Ruan et al.-
, 2024].
Transportability. In the causal inference literature, the problem of identifying causal effects under potential environment discrepancies has been extensively studied through the theory of transportability [Pearl and Bareinboim, 2011, Bareinboim and Pearl, 2012b, Bareinboim et al., 2013, Bareinboim and Pearl, 2016]. These works focus on determining whether a causal effect can be identified across environments, and which aspects of causal knowledge can be transferred. Lee et al. [2020] investigated-
 transportability under arbitrary combinations of experiments conducted in both the source and target environments. Correa and Bareinboim [2020] extended this framework to handle soft interventions, while Correa et al. [2022] further generalized it to the setting of counterfactual effects. More recently, Jalaldoust et al. [2024] proposed a parameterization model approach [Zhang et al., 2022, Xia et al., 2021] to bound non-transportable causal effects. Zhang and Bareinboim [2017] explored the integ-
ration of prior knowledge into the multi-armed bandit (MAB) framework under restrictive graph structures such as the Bow and IV settings. Building upon this, Bellot et al. [2023] extended these ideas to arbitrary causal diagrams, and Deng et al. [2025] further generalized them to settings where contextual information is available.
Structural causal bandits. Lee and Bareinboim [2018] formalized the structural causal bandit framework, in which a bandit instance is structured by an SCM, and each action corresponds to an intervention on a subset of variables. The authors proposed a sound and complete graphical characterization for identifying actions that could be part of an optimal strategy, enabling an agent to avoid unnecessary exploration a priori, without any actual interaction. Lee and Bareinboim [2019] extended the frame-
work to settings involving non-manipulable variables. Lee and Bareinboim [2020] established the framework under stochastic policies and demonstrated the informativeness of such policies. Everitt et al. [2021] and Carey et al. [2024] further investigated the completeness of the graphical characterization of optimal policy spaces, although the general completeness remains an open problem. Wei et al. [2023] proposed a parameterization-based approach to incorporate shared information among possibly-op-
timal actions. Elahi et al. [2024] extended the SCM-MAB framework to settings where no causal graph is assumed to be accessible, requiring their algorithm to perform causal discovery—i.e., to construct the causal structure—during online interaction. Recently, Park et al. [2025] investigates SCM-MAB in settings where the available information is not a full partial ancestral graph representing the Markov equivalence class of the true causal diagram.
15

B Background
D-separation. In a causal diagram G, a path p between vertices X and Y is a d-connecting path relative to a set Z if (i) every non-collider on p is not a member of Z; and (ii) every collider on p is an ancestor of some member of Z. Two variables X and Y are said to be d-separated by Z if there is no d-connecting path between X and Y relative to Z. Two disjoint sets X and Y are said to be d-separated by Z if every variable in X is d-separated from every variable in Y by Z and denoted as (X ⊥⊥d Y | -
Z)G.
Do-calculus. Pearl [1995] devised do-calculus which acts as a bridge between observational and interventional distributions from a causal diagram without relying on any parametric assumptions.
Theorem 3 (Do-calculus [Pearl, 1995]). Let G be a causal diagram compatible with a structural causal model M, with endogenous variables V. For any disjoint X, Y, W, Z ⊆ V, the following rules are valid.
Rule 1. P (y | do(w), x, z) = P (y | do(w), z) if X and Y are d-separated by W ∪ Z in GW Rule 2. P (y | do(w), do(x), z) = P (y | do(w), x, z) if X and Y are d-separated by W ∪ Z in GW,X Rule 3. P (y | do(w), do(x), z) = P (y | do(w), z) if X and Y are d-separated by W ∪ Z in GW,X(Z) where X(Z) ≜ X \ An(Z)G[V\W].
Latent projection. The latent projection [Verma and Pearl, 1990] of a causal diagram G over V on X, denoted by G⟨X⟩ is a causal diagram over X such that, in addition to including edges in G[X], for every pair of distinct vertices Vi, Vj ∈ X, (i) add a directed edge Vi → Vj in G⟨X⟩ if there exists a directed path from Vi to Vj in G such that every non-endpoint vertex on the path is not in X, and (ii) add a bidirected edge Vi ↔ Vj in G⟨X⟩ if there exists a divergent path between Vi and Vj in G such -
that every non-endpoint vertex on the path is not in X.
Identification. Causal effect identification [Pearl, 1995] concerns whether the causal effect of an intervention on a set of variables can be uniquely computed from the observational distribution over observed variables and a given causal diagram.
Definition 7 (Identifiability [Pearl, 2000]). The causal effect of the intervention on X = x is identifiable in G, if for any two positive models M1 and M2 that induce the causal diagram G, P M1 (V) = P M2 (V) > 0 implies P M1
x (y) = P M2
x (y).
In the identification problem, a basic structural unit known as the c-component (confounded component) plays a crucial role. Given a semi-Markovian graph G over a set of variables V, there exists a unique partition such that each subgraph of G is a c-component.
Definition 8 (C-component [Tian and Pearl, 2003]). Let G be a semi-Markovian graph such that a subset of its bidirected arcs forms a spanning tree over all vertices in G. Then G is a c-component.
We denote by ccG the collection of maximal c-components so that ccG = {Cj}l
j=1 implies that Ci is a maximal c-component, for each Ci ⊆ V, and there is no bidirected edge between Ci and Cj in G for i ̸= j. Following Tian and Pearl [2003], for any C ⊆ V, we define function Q[C](v) = Pv\c(c). Moreover, Q[V](v) = P (v) and Q[∅](v) = 1. For convenience, we omit input v and write Q[C].The importance of c-components lies in the following lemma.
Lemma 1 (Lemma 3 in Tian and Pearl [2003]). Let C ⊆ C′ ⊆ V, if C is an ancestral set in G[C′], then X
c′ \c
Q[C′] = Q[C]. (9)
Lemma 2 (Lemma 4 in Tian and Pearl [2003]). Let C ⊆ V, and assume that C is partitioned into c-components C1, · · · , Cl in G[C]. Then,
(i) Q[C] can be decomposed as
Q[C] =
l
Y
j=1
Q[Cj] (10)
16

(ii) Let ≺ be a topological order over the variables in C according to G[C] such that C1 ≺ C2 · · · ≺ Ck. Let C⪯i be the variables in C that ordered before Ci including Ci. Let C≻i be the variables in C that ordered after Ci. Then each Q[Ci] is computable from Q[C] and is given by
Q[Cj] =
Y
Ci ∈Cj
Q[C⪯i]
Q[C⪯i−1] (11)
where each Q[C⪯i] = P
C≻i Q[C].
(iii) Each Q[C⪯i]
Q[C⪯i−1] is a function only of Ti ≜ Pa(C ̄i)G \ C ̄i, where C ̄i is the c-component of
G[C⪯i] that contains Ci.
Let D1, · · · , Dk be the c-components of G. Then, for any Cj ∈ ccG\X, there exists Cj ⊆ Di since if the variables in Cj are connected by a bidirected path in a subgraph of G, they must also be connected in G. Each c-factor Q[Cj] is identifiable if it is computable from Q[Di], which can be determined recursively by repeatedly applying Lems 1 and 2. Based on this recursive strategy, Tian and Pearl [2003] proposed an identification algorithm that first decomposes the causal effect into a set of c-fa-
ctors Q[Cj] and then checks the identifiability of each component iteratively.
Bounding causal effect. We now introduce the concept of natural bounds [Manski, 1990, Robins, 1989], which are functions of the observational data that consistently bound the causal effect Px(y), regardless of the underlying causal structure of the system.
Definition 9 (Natural bounds [Manski, 1990, Robins, 1989]). The natural bounds for a causal effect Px(y) are given by
P (x, y) ≤ Px(y) ≤ P (x, y) + 1 − P (x). (12)
C Possibly Optimal Intervention Sets: Characterizations
In this section, we provide graphical characterizations of POMIS and POIS, accompanied by illustrative examples. When given a causal diagram G, minimal unobserved confounders’ territory (MUCT) and interventional border (IB) provide a graphical characterization of PO(M)IS.
Definition 10 (Unobserved-confounders’ territory [Lee and Bareinboim, 2018]). Let H = G[An(Y )G]. A set of variables T ⊆ V(H) containing Y is called a UC-territory on G with respect to Y if De(T)H = T and CC(T)H = T. If there is no T′ ⊊ T, we refer to it as a minimal UC-territory (MUCT) denoted as MUCT(G, Y ).
Definition 11 (Interventional border [Lee and Bareinboim, 2018]). Let T be a minimal UC-territory on causal diagram G with respect to Y . Then Pa(T)G \ T is called an interventional border (IB) for G with respect to Y denoted as IB(G, Y ).
MUCT is the minimal set of variables that is closed under both descendants and bidirected connections; and IB consists of the parents of MUCT, excluding MUCT itself. Intuitively, MUCT is the minimal closed mechanism that conveys all hidden information from unobserved confounders to the downstream reward, while IB consists of the nodes that directly affect this closed mechanism.
Theorem 4 (Theorem 6 in Lee and Bareinboim [2018]). Given information ⟨G, Y ⟩, a set X ⊆ V \ {Y } is a POMIS with respect to ⟨G, Y ⟩ if and only if IB(GX, Y ) = X.
Following the established structures, we provide a characterization for POIS with respect to ⟨G, Y ⟩.
Proposition 2 (Graphical characterization of POIS). Let TX ≜ MUCT(GX, Y ). A set X ⊆ V \ {Y } is a POIS with respect to ⟨G, Y ⟩ if and only if IB(GX, Y ) ⊆ X ⊆ An(TX)G \ TX. Moreover, if X = IB(GX, Y ), then X is a POMIS with respect to ⟨G, Y ⟩.
Proof. Note that IB(GX, Y ) = Pa(Tx)G \ TX is a POMIS with respect to ⟨G, Y ⟩ by Prop. 5 in [Lee and Bareinboim, 2018]. If X = IB(GX, Y ), then X is a POMIS according to Thm. 4. Now, we consider IB(GX, Y ) ⊊ X ⊆ An(TX)G \ TX We will show that there is no directed
17

C
D
Y
B
A
(a) G
C
D
Y
B
A
(b) G = G∅
C
D
Y
B
A
(c) G{B,C}
C
D
Y
B
A
(d) G{A,B}
C
D
Y
B
A
(e) G{B,D}
Figure 8: The blue region illustrates MUCT. (b, c) are non-POMIS examples, while (d, e) correspond to POMIS. (e) Subsets {B, D} ⊆ R ⊆ {A, B, C, D} are POIS and share the same expected reward.
path from any X ∈ X \ IB(GX, Y ) to Y that does not pass through IB(GX, Y ), which implies EPx Y = EPIB,x\IB Y = EPIB Y = EPx[IB] Y . For the sake of contradiction, suppose that there exists a directed path from X to Y in G that does not pass through any node in IB(GX, Y ). Since Y ∈ TX, its parent must belong to either TX or IB(GX, Y ). This implies that X ∈ TX while also X ∈ An(TX)G \ TX, which leads to a contradiction.
For example, consider the causal diagram in Fig. 8e where {B, D} is a POMIS with respect to ⟨G, Y ⟩ since MUCT(G{B,D}, Y ) = {Y } and IB(G{B,D}, Y ) = {B, D}, which satisfies Thm. 4.
Furthermore, {A, B, D}, {C, B, D} and {A, B, C, D} are POISs with respect to ⟨G, Y ⟩. Moreover, they are equivalent to the POMIS {B, D}.
Corollary 2 (Equivalence). Let R ⊆ V \{Y } be a POIS with respect to ⟨G, Y ⟩ and R† ≜ IB(GR, Y )
denote the corresponding POMIS. Then, R and R† are equivalent in terms of expected reward.
Proposition 3 (Sharing transportability). Let R ⊆ V \ {Y } be a POIS with respect to ⟨G, Y ⟩. Then R† ≜ IB(GR, Y ) is a POMIS with respect to ⟨G, Y ⟩. Moreover, they share a causal bound; given
⟨G∆, Z⟩, lR = lR† and uR = uR† .
Proof. This follows from the proof of Prop. 2. An important observation is that they share the same MUCT, MUCT(GR, Y ), and that there is no path from R to Y that does not pass through R†. There
fore, EP ∗
r[R† ]
Y = EP ∗
r† Y P
y yP ∗
r† (y) = P
MUCT y Qm
q=1 Q∗[Cq] (where Y+ = MUCT(GR, Y )).
The proof is thereby concluded by the application of Thm. 2.
Proposition 4 (Theorem 4 in Lee and Bareinboim [2019]). Given ⟨G, Y , N⟩, we have PN
G,Y = PH,Y
where H = G⟨V \ N⟩ is the latent projection of G onto V \ N.
Algorithmic Characterization of POIS
The algorithm POISs (Alg. 2) is identical to POMISs (Alg. 1 in Lee and Bareinboim [2018]), except for Lines 3 and 9, where the set {X} is replaced with {R | X ⊆ R ⊆ An(T)G \ T} in order to include not only the POMIS X but also all POISs equivalent to it. The algorithm completely enumerates all POISs avoiding redundant computations by Thm. 9 in Lee and Bareinboim [2018] and it takes O(kn2) where k denotes the number of POIS and n = |V|.
Proposition 5. The algorithm POISs (Alg. 2) returns all, and only POISs given ⟨G, Y ⟩.
Proof. This follows from Thm. 9 in Lee and Bareinboim [2018]) and Prop. 2.
D Dominance Bounds
This section presents technical details relevant to the computation of dominance bounds.
D.1 Lower Dominance Bound
We start by demonstrating that the MISs (Alg. 3 in Lee and Bareinboim [2018]) is sound and complete under constraints.
18

Algorithm 2: Algorithm enumerating all POISs.
1 function POISs(G, Y )
2 T, X = MUCT(G, Y ), IB(G, Y ); Q = GX[T ∪ X]
3 return {R | X ⊆ R ⊆ An(T)G \ T}∪ subPOISs(Q, Y , reversed(topological-sort(Q), ∅)
4 function subPOISs(G, Y , π, O) 5 P=∅ 6 for π[i] ∈ π do
7 T, X, π′, O′ = MUCT(Gπ[i], Y ), IB(Gπ[i], Y ), π[i + 1 :], O ∪ π[1 : i − 1]
8 if X ∩ O′ = ∅ then
9 P = P ∪ {R | X ⊆ R ⊆ An(T)G\T}∪ subPOISs(GX[T∪X], Y , π′, O′) if π′ ̸= ∅ else ∅. 10 return P
Lemma 3. The algorithm MISs(G⟨V \ N⟩, Y ) returns all and only MISs with respect to ⟨G, Y , N⟩.
Proof. Let X be an MIS with respect to ⟨G⟨V \ N⟩, Y ⟩. We will prove X is also an MIS with respect to ⟨G, Y ⟩ by proving the contrapositive. Suppose that X is not an MIS with respect to ⟨G, Y ⟩. Then, there exists a node X ∈ X such that there is no proper directed path6 from X to Y with respect to X in G. That is, every directed path from X to Y in G forms X → V1 → · · · → Vn → Z → W1 → · · · → Wm → Y with n, m ≥ 0 for an arbitrary Z ∈ X \ {X}. Since the latent projection does not introduce any di-
rected edges from Vi to Wj in G⟨V \ N⟩, all such paths correspond to non-proper directed paths from X to Y with respect to X in G⟨V \ N⟩. Therefore, X is not an MIS with respect to ⟨G⟨V \ N⟩, Y ⟩, which completes the contrapositive. Now, suppose X is an MIS with respect to ⟨G, Y ⟩. By definition, there is no proper subset X′ ⊆ V \ {Y } such that X′ is equivalent to X. Moreover, since X is defined over V \ {Y } \ N, any such proper subset X′ must also be defined over the same superset. Hence, any s-
et X included in the output of MISs(G⟨V \ N⟩, Y ) is an MIS with respect to ⟨G, Y , N⟩. Combining this with the soundness and completeness of the MISs algorithm, the proof is complete.
Equipped with this result and the definition of MIS (Def. 4), the lower dominance bound l⋆ can be computed using MISs; l⋆ = maxw∈ΩW,W∈MISs(G⟨V\N∗⟩,Y ).
D.2 Upper Dominance Bound
We proceed to the upper dominance bound. It is crucial to identify a space in which POMISs under different constraints can be meaningfully compared. The following lemma shows that POMISs remain MISs under weaker constraints.
Lemma 4. If X is a (PO)MIS with respect to ⟨G, Y , N⟩, then it is also an MIS with respect to ⟨G, Y ⟩.
Proof. In the proof of Lem. 3, we have shown that if X be an MIS with respect to ⟨G⟨V \ N⟩, Y ⟩, then it is also an MIS with respect to ⟨G, Y ⟩. Since the set of POMISs is a subset of the set of MISs under the same constraint, the result also holds for the POMISs, which concludes the proof.
Lemma 5. Let PN′
G,Y and PN
G,Y be a set of POMISs corresponding to the constraints N′ and N,
respectively, where N′ ⊆ N. Then PN
G,Y dominates PN′
G,Y .
Proof. Let H ≜ G⟨V \ N′⟩. According to Prop. 4, we have PN′
G,Y = PN\N′
H,Y and PN
G,Y = PH,Y . Let
us denote N† = N \ N′. According to Lem. 4, any X ∈ PN†
H,Y is an MIS with respect to ⟨H, Y ⟩. Since POMISs dominate MISs under the same constraint N†, the claim follows.
6We refer to a directed path from X ∈ X to Y as a proper directed path with respect to X if only the first node X belongs to X.
19

Theorem 1 (Dominance relationship). Let r⋆ be an optimal action with respect to ⟨G, Y , N⟩ where N is a subset of N∗. Let W be a non-POIS with respect to ⟨G, Y , N∗⟩. Then EP ∗
x⋆ Y is bounded by
EP ∗
w∗ Y ≤ EP ∗
x⋆ Y ≤ EP ∗
r⋆ Y . (4)
Proof. Without loss of generality, we assume N = ∅ since we can equivalently reformulate the graph
as G = G⟨V \ N⟩ and the constraint set as N∗ = N∗ \ N. According to Lem. 4, any X ∈ PN∗
G,Y is
an MIS with respect to ⟨G, Y ⟩. Furthermore, for any unconstrained POISs R, we can always find an equivalent unconstrained POMIS R† = IB(GR, Y ) that yields the same expected reward, i.e., EPr Y = EPr[R†] Y , as supported by Cor. 2. Therefore, the upper dominance bound is sound. The lower bound also holds by the definition of MIS (Def. 4) and POIS (Def. 5).
Building on the statements, we present the algorithm UDB (Alg. 3) which returns a valid upper dominance bound u⋆ given the inputs (G, Y , N, U) where U denotes a collection of upper causal bounds for all actions.
Algorithm 3: Upper Dominance Bound (UDB)
1 function UDB(G, Y , N, U):
Input: G: causal diagram; Y : reward variable; N: non-manipulable variables; U = {ux | x ∈ ΩX, X ∈ 2V\{Y }}: collection of upper causal bounds. 1 Ensure: All upper causal bounds ux ∈ U have been computed.
2 Compute the latent projection H = G⟨V \ N⟩; Initialize the upper dominance bound u⋆ = 0.
3 for R := POMISs(H, Y ) do if u⋆ > maxr∈ΩR ur then (u⋆, R⋆) = (maxr∈ΩR ur, R).
4 if u⋆ < ∞ and ur⋆ = lr⋆ (i.e., transportable) then return u⋆
5 if N = ∅ then return u⋆
6 for all N′ ⊂ N such that |N′| = |N| − 1 do u⋆ = min{u⋆, UDB(G, Y , N′, U)}
7 return u⋆
In Line 3, the algorithm attempts to compute upper causal bounds of POMISs. If the algorithm reaches Line 6, this implies that (1) there exists at least one POMIS action whose upper causal bound is ∞, or (2) the current upper dominance bound corresponds to upper causal bound of a non-transportable action. In such cases, the algorithm recursively explores weaker constraints N′ and returns the tightest bound among the results of recursive calls; on the other hand, if u⋆ < ∞ and the upper dominance b-
ound corresponds to the expected reward of a transportable action (Line 4), no further recursive calls are required—this is justified by Lem. 5—and the algorithm simply returns u⋆.
Runtime analysis. In the worst case, the algorithm may need to traverse up to the unconstrained
POMISs, resulting in an exponential time complexity in the size of N∗, i.e., O(2|N∗|).
Dominance relationship example. As a concrete example to illustrate the dominance relationships in Fig. 3, we present an SCM that exhibits these relations. We consider an SCM M where
M=

        
        
U = {UA, UB, UC , UY , UBC , UBY }
V = {A, B, C, Y }
F=
(
fA = uAB, fB = uB ⊕ uBC ⊕ uBY ,
fC = a ⊕ b ∧ uC , fY = uA ⊕ uC ⊕ uY ∧ uBY
P (U) =
(
UA ∼ Bern(0.3), UB ∼ Bern(0.1), UC ∼ Bern(0.25),
UY ∼ Bern(0.2), UBC ∼ Bern(0.2), UBY ∼ Bern(0.15).
(13)
To elaborate on dominance relations, let us suppose access to the causal bounds of expected rewards of all actions. In this setting, the value of upper dominance bound is:
(d) u⋆ = maxr∈ΩR,R∈P{A,C}
G,Y ={∅,{B}} EPr∗ Y ≈ 0.265. For weaker constraints, we have (b)
maxr∈ΩR ,R∈P{A}
G,Y ={∅,{B},{C}} EPr∗ Y ≈ 0.782, (c) maxr∈ΩR,R∈P{C}
G,Y ={∅,{A},{A,B}} EPr∗ Y ≈
0.782; and (a) maxr∈ΩR,R†∈PG,Y ={∅,{A},{A,C}} EPr∗ Y ≈ 0.97.
20

Therefore, we observe the dominance relationships: (d) ≤ (b, c) ≤ (a).
E Causal Bounds: Partial Transportability
This section presents technical details relevant to the computation of causal bounds (Prop. 1 and thm. 2 in Sec. 4). We begin by introducing counterfactual variables, which play a useful role in our proofs.
Counterfactual variables. Given a set of variables Y ⊆ V, the solution for Y in Mx defines a potential response for a unit u, denoted as Yx(u). Averaging over the space of U, a potential response Yx(u) induces a counterfactual variables Yx [Pearl, 2000].
Correa and Bareinboim [2025] introduced a novel calculus over probability quantities may defined at the counterfactual level, called the ctf-calculus. The independence rule (Rule 2) in ctf-calculus requires the construction of another graphical object, known as the Ancestral Multi-World Network (AMWN), which serves to identify d-separation [Pearl, 1995] relations among counterfactual variables.
Theorem 5 (Counterfactual calculus (ctf-calculus); Theorem 3.1 in Correa and Bareinboim [2025]). Let G be a causal diagram, then for Y, X, Z, W, T, R ⊆ V, the following rules hold for the probability distributions generated by any model compatible with G:
Rule 1. (Consistency rule - Obs./intervention exchange) P (yT∗x, xT∗ , w∗) = P (yT∗ , xT∗ , w∗)
Rule 2. (Independence rule - Adding/removing counterfactual observations) P (yr | xt, w∗) = P (yr, w∗) if (Yr ⊥⊥ Xt | W∗)GA
Rule 3. (Exclusion Rule - Adding/removing interventions) P (yxz, w∗) = P (yz, w∗)
if X ∩ An(Y) = ∅ in GZ
where GA is the AMWN GA(G, Yr ∪ Xt ∪ W∗).
However, since only Rule 1 (R1) is used in this paper, we refer the reader to Correa and Bareinboim [2025] for further details about AMWN.
Proposition 1. Let C be a c-component in G \ X satisfying C ∩ ∆i = ∅ and D be a c-component satisfying C ⊆ D. Let C′ = An(C)G[D]. The target c-factor Q∗[C] is bounded in [l, u] where (i) if C = C′, then l = u = P
c′\c Qi[C′]; (ii) otherwise, l = Qi[C′] and u = Qi[C′] + 1 − P
c Qi[C′].
Proof. We prove ours build on the notion of counterfactual variables. We use P (yx) for probabilities P (Yx = y). By definition, Px(y) = P (yx). According to Lem. 1, An(C)G[C′] = C implies Qi[C] = P
c′\c Qi[C′]. Further, we have that
Q∗[C] = P ∆
v\c(c | si = 0, s−i = 0) = P ∆
v\c(c | si = i, s−i = 0) = Qi[C]
holds by C ∩ ∆i = ∅, and thus we have Q∗[C] = P
c′\c Qi[C′]. Otherwise An(C)G[C′] ̸= C, with
out loss of generality, we have An(C)G[C′] = C′. Let T ≜ C′ \ C, i.e., C′ = T ∪ C. By basic probabilistic algebra,
Q∗[C] = Qi[C] = P i(cv\c) =
X
t′
P i(cv\c, t′
v\c′ ) =
X
t′
P i(cv\c′,t, t′
v\c′ ) (14)
≥ P i(cv\c′,t, tv\c′ ) R=1 P i(cv\c′ , tv\c′ ) = Qi[C′]. (15)
We thus have Q∗[C] ≥ Qi[C′]. Similarly, we prove the upper bound of Q∗[C]. Using basic probabilistic algebra,
Q∗[C] = Qi[C] = P i(cv\c) (16)
=
X
t′
P i(cv\c, t′
v\c′ ) (17)
21

R=1 P i(cv\c′,t, tv\c′ ) +
X
t′ ̸=t
P i(cv\c′,t, t′
v\c′ ) (18)
≤ P i(cv\c′,t, tv\c′ ) +
X
t′ ̸=t
P i(t′
v\c′ ) (19)
R=1 P i(cv\c′ , tv\c′ ) + 1 − P i(tv\c′ ) (20)
= P i(cv\c′ , tv\c′ ) + 1 −
X
c
P i(cv\c′ , tv\c′ ) (21)
= Qi[C′] + 1 −
X
c
Qi[C′]. (22)
We thus have Q∗[C] ≤ Qi[C′] + 1 − P
c Qi[C′] which concludes the proof.
Theorem 2 (Causal bounds). Given ⟨G∆, Z⟩, the target expected reward EPx∗ Y can be bounded by
[lx, ux] if for all c-factors Q∗[Cq] in the right-hand side of Eq. (6), there exists a source πi ∈ Π satisfying Cq ∩ ∆i = ∅ and a computable ancestral c-component Cq ⊆ C′q from G \ Z where Z ∈ Zi ∈ Z. The bound [lx, ux] is defined as:
lx ≜
X
y+
y
k
Y
q=1
Qiq [Cq]
m
Y
q=k+1
Qjq [C′
q] ≤
X
y+
y
k
Y
q=1
Qiq [Cq]
m
Y
q=k+1
Q∗[Cq] (7)
≤
X
y
y min
n
1,
X
y+ \{y }
k
Y
q=1
Qiq [Cq]
m
Y
q=k+1
Qjq [C′
q] + 1 −
X
cq
Qjq [C′
q]
o
≜ ux (8)
where Qk
q=1 Qiq [Cq] denotes transportable c-factors.
Proof. Recall Eq. (6), EPx∗ Y = P
y yPx∗(y) = P
y+ y Qm
q=1 Q∗[Cq]. This expression can be decomposed into transportable and non-transportable components as follows: EPx∗ Y =
P
y+ yQk
q=1 Qiq [Cq] Qm
q=k+1 Q∗[Cq] where the first product represents the transportable terms. According to Prop. 1, each non-transportable c-factor Q∗[Cq] satisfies the inequality Qi[C′q] ≤ Q∗[Cq] ≤ Qi[C′q] + 1 − P
cq Qi[C′q]. Therefore, by substituting this inequality into the nontransportable components of the decomposition. Moreover, note that both Eq. (6) and Eqs. (7) and (8) are functions of X ∪ Y+ where Y+ = An(Y )GX . Therefore, the expressions for lx and ux are valid. Moreover, taking the maximum or minimum over Y+, with respect to PΠ
Z , returns valid bounds, equipped with min{1, ·}.
E.1 Partial Transportability of Causal Effects
Definition 12 (Partial-transportability). Let G∆ be a collective selection diagram with respect to Π = {π1, · · · , πn} with a target domain π∗. Let Z = {Zi}n
i=1 be a specification of actions Zi
conducted in source environment πi. We say that Px∗(y) is partially transportable with respect to
⟨G∆, Z⟩ if it determines a bound [l, u] for Px∗(y) that is strictly contained in [0, 1] and valid over
PΠ
Z = {Pzi | z ∈ ΩZ, Z ∈ Zi ∈ Z} in any collection of models that induce G∆.
We propose the partial-transportability algorithm PATR (Alg. 4) which returns expressions of bounds for Px∗(y). The prior specification Z and the corresponding distributions PΠ
Z are defined globally and do not change with the specific invocation of the algorithm. In contrast, variables V and selection variables S reflect graph G and discrepancies ∆, respectively, relative to the arguments passed to the current execution of the procedure.
In the algorithm, Line 5 breaks down the query into queries where Y in each sub-query forms a c-component. Line 6 examines whether some experimental distribution Pzi ∈ PΠ
Z can be used to identify the query. If valid, PATR passes the query to PAID with a slight modification of it and graph, taking into account the shared intervention between Z and X.
Remark. When the subroutine PAID is called, the following conditions are satisfied (related to Lines 4 and 5): (V \ X) \ An(Y)GX = ∅ and G \ X is a c-component.
22

Algorithm 4: Partial-transportability algorithm (PATR).
1 function PATR(y, x, G, ∆, type)
Input: y; x; G: causal diagram; ∆: discrepancies; type ∈ {l, u}: type of bound. 2 if ∃Z ∈ Zi ∈ Z such that (X = Z ∩ V) ∧ (Si ⊥⊥d Y)G∆\X then yield P i
z\V,x∩Z (y).
3 if V′ := V \ An(Y)G ̸= ∅ then yield PATR(y, x \ V′, G \ V′, {∆i \ V′ | ∆i ∈ ∆}). 4 if V′ := (V \ X) \ An(Y)GX ̸= ∅ then yield PATR(y, x ∪ V′, G, ∆).
5 if |ccG\X| > 1 then yield P
v\(y∪x)
Q
C∈ccG\X PATR(c, v \ c, G, ∆).
6 for πi ∈ Π such that ∆i ∩ (V \ X) = ∅, for Z ∈ Zi such that Z ∩ V ⊆ X do 7 yield PAID(y, x \ Z, P i
z\V,x∩Z, G \ (Z ∩ X), type)
8 function PAID(y, x, P , G, type) 9 {C} ← ccG\X.
10 if X = ∅ then yield P
v\y P (v).
11 if V ̸= An(Y)G then yield PAID(y, x ∩ An(Y)G, P
v\An(Y)G P (v), G[An(Y)G ], type). 12 if ccG = {V} then; if type = l then yield P
v\(y∪x) P (v) else yield
P
v\(y∪x){P (v) + 1 − P
v\x P (v)}.
13 if C ∈ ccG then P
C\y
Q
Vi∈Y P (vi | v(i−1)
π ). 14 if C ⊊ C′ ∈ ccG then yield
PAID(y, x ∩ C′, Q
Vi∈C′ P (Vi | V(i−1)
π ∩ C′, v(i−1)
π \ C′), G[C′], type).
PATR enumerates all expressions through the subroutine PAID, which returns lower or upper bound depending on input type ∈ {l, u}. The condition of Thm. 2 is inherently captured within PATR.
Proposition 6 (Soundness). PATR (Alg. 4) returns all expressions of upper (lower) bounds of Px∗(y).
Proof. Let a superscript l denote variables and values local to the function. The soundness of the algorithm was partially proved by Lee et al. [2020] under the case where the given query is transportable. Our main interest is the case where Px∗(y) is non-transportable but holds the condition
in Prop. 1 is satisfied. First, we show that Qi[Vl] ≤ Px∗l (vl \ xl) ≤ Qi[Vl] + 1 − P
vl\xl Qi[Vl] at
Line 12. Note that Px∗l (vl \xl) = Pxil (vl \xl) holds by Lem. 1 in Lee et al. [2020]. Moreover, it holds that Vl = An(Yl)Gl and Vl is a c-component in Gl, as ensured by earlier steps in PAID. Therefore, we
have Q[Vl] = P i(vl) ≤ Px∗l (vl \xl) ≤ P i(vl)+1−P
vl\xl P i(vl) = Qi[Vl]+1−P
vl\xl Qi[Vl]
due to Prop. 1. Taking Px∗l (yl) = P
vl\(xl∪yl) Px∗l (vl \ xl) concludes the proof.
Any value of PATR(type = l) is always less than or equal to Px∗(y). However, for PATR(type = u),
each non-transportable term of the form Qjq [C′q] + 1 − P
cq Qjq [C′q] is not a single probability, which can lead to PATR(type = u) being greater than one.
Proposition 7. Let l = PATR(y, x, G, ∆, l) and u = min{1, PATR(y, x, G, ∆, u)}. Then Px∗(y).
[l, u] is partially-transportable with respect to ⟨G∆, Z⟩ with the bounds given by [l, u].
Proof. It has been established in Prop. 6 that the expressions returned by PATR(type = l) and PATR(type = u) are sound. Since 0 < l ≤ Px∗(y), the lower bound l lies within the unit interval.
Moreover, since the use of the min operator ensures that Px∗(y) ≤ u ≤ 1, the upper bound u lies within [0, 1]. Thus, the interval [l, u] is strictly contained in [0, 1], constituting a valid partiallytransportable bound.
Runtime analysis. The algorithm PATR runs in O(zn4) where z is the number of experiments |Z| and n denote the number of vertices |V|. Lines 3–5 are satisfied only once until the given query is fully factorized. Each factorized sub-query subsequently encounters Lines 3 and 4 once before proceeding to Line 6. The procedure PAID can be invoked at most z times. Each call to PAID runs in O(n3) time. The procedure PATR may be called up to O(n) times due to the factorization step in Line 6. Each invocati-
on of PATR may call PAID up to z times, resulting in a total of O(zn) PAID calls. Since each of these calls may trigger recursion up to n times, the total number of recursive
23

steps remains bounded. Assuming that set and graphical operations take O(n2) time, the overall runtime is O(zn4).
E.2 Causal Bounds of Expected Rewards
In this section, we present the algorithm associated with Thm. 2, which maximizes and minimizes over the sources to compute the tightest possible causal bounds, as demonstrated in Alg. 5.
Algorithm 5: Causal bounds algorithm (CAUSALBOUND).
1 function CAUSALBOUND(y, x, G, ∆, Z, PΠ
Z)
Input: y: reward; x: action; G: causal diagram; ∆: discrepancies; Z experiments; PΠ
Z : distributions.
2 Initialize causal bounds [lx, ux] as [0, ∞). 3 for P l
x(y) := PATR({y}, x, G, ∆, l) do lx = max{lx, P
y y · Pl
x(y)}. 4 for P u
x (y) := PATR({y}, x, G, ∆, u) do ux = min{ux, P
y y · min{1, P u
x (y)}}. 5 return [lx, ux].
In Lines 3 and 4, the algorithm derives valid expressions for bounds of Px∗(y) from PATR(type = l)
and PATR(type = u), and updates the final bounds using PΠ
Z to obtain tighter estimates. Specifically, if the estimated upper bound exceeds one, we replace it with one to maintain valid probabilistic bounds.
F Regret Upper Bounds of trUCB
Lemma 6 (Hoeffding’s inequality [Hoeffding, 1994]). Suppose Y1, · · · , Yn are independent random variables such that Yi ∈ [0, 1] with ai < bi for all i. Then, the following holds:
P (|Y ̄n − μ| ≥ ε) ≤ 2e−2nε2
Therefore, setting δ = 2e−2nε2 , we get Y ̄n ≤ μ +
q
ln(1/δ)
2n with probability 1 − δ.
Proposition 8 (Regret bound). Let Y be the reward variable supported on [0, 1]. Then, the cumulative regret of TRUCB in the target SCM M∗ after T > 1 rounds is bounded as
RT ≤ 8
X
x:∆x>0, ux≥EP ∗
x⋆ Y
log(T )
∆x
+ 1 + π2
3
X
x:∆x >0,ux ≥l⋆
∆x. (23)
Proof. The proof follows the arguments of Auer et al. [2002], Zhang and Bareinboim [2017], Zhang [2023]. For convenience, we denote the optimal expected reward in the target environment EP ∗
x⋆ Y
by μ⋆. Let l⋆ ≤ ux < μ⋆. Then, we have
NT (x) =
T
X
t=1
I{Xt = x} (24)
≤
T
X
t=1
I{U ̄x⋆ (t) < μ⋆} + I{U ̄x⋆ (t) ≥ μ⋆, Xt = x} (25)
=
T
X
t=1
I{U ̄x⋆ (t) < μ⋆} + I{U ̄x(t) ≥ μ⋆}. (26)
The last step holds since an arm x is played at time step t if and only if the causal clipped UCB U ̄x(t)
is maximal. Since lx ≤ U ̄x(t) ≤ ux and ux < μ⋆, we have U ̄x(t) < μ⋆. Thus,
NT (x) ≤
T
X
t=1
I{U ̄x⋆ (t) < μ⋆} (27)
≤
T
X
t=1
I{Ux⋆ (t) < μ⋆}. (28)
24

Hence, we can derive the following:
ENT (x) ≤
T
X
t=1
P (Ux⋆ (t) < μ⋆) (29)
≤
T
X
t=1
P (EˆP ∗
x⋆ ,tY +
s
2 ln(t)
Nt(x⋆) < μ⋆) (30)
≤
T
X
t=1
t
X
Nt (x⋆ )=1
P (ˆEP ∗
x⋆ ,tY +
s
2 ln(t)
Nt(x⋆) < μ⋆) (31)
≤
T
X
t=1
t
X
Nt (x⋆ )=1
δ=
T
X
t=1
1
t3 ≤ π2
6 (32)
where Eq. (31) to Eq. (32) follows Hoeffding’s inequality. Next, let us consider ux > μ⋆, i.e., the prior upper causal bound is greater than the optimal expected reward. Let l be an arbitrary positive integer.
NT (x) =
T
X
t=1
I{Xt = x} (33)
≤l+
T
X
t=1
I{U ̄x⋆ (t) ≤ U ̄x(t), Nt(x) ≥ l} (34)
≤l+
T
X
t=1
I{Ux⋆ (t) ≤ Ux(t), Nt(x) ≥ l} (35)
=l+
T
X
t=1
I{ˆEP ∗
x⋆ ,tY +
s
2 ln(t)
Nt(x⋆) ≤ ˆEPx∗,tY +
s
2 ln(t)
Nt(x) , Nt(x) ≥ l} (36)
≤l+
T
X
t=1
t
X
Nt (x⋆ )=1
t
X
Nt (x)=l
I{ˆEP ∗
x⋆ ,tY +
s
2 ln(t)
Nt(x⋆) ≤ ˆEPx∗,tY +
s
2 ln(t)
Nt(x) } (37)
The last event implies that at least one of the following events occur:
ˆEP ∗
x⋆ ,tY +
s
2 ln(t)
Nt(x⋆) ≤ EP ∗
x⋆ Y (38)
ˆEPx∗,tY −
s
2 ln(t)
Nt(x) ≥ EPx∗ Y (39)
EP ∗
x⋆ Y < EPx∗ Y + 2
s
2 ln(t)
Nt(x) (40)
Remaining part follows the proof of Theorem 1 in Auer et al. [2002]. We bound the probability of events Eqs. (38) and (39) using Hoeffding’s inequality [Hoeffding, 1994]. Eq. (40) does not appear
EP ∗
x⋆ Y − EPx∗ Y − 2
s
2 ln(t)
Nt(x) = ∆x − 2
s
2 ln(t)
Nt(x) ≥ 0 (41)
for Nt(x) ≥ 8 ln t
(∆x)2 . Therefore, with l ≥
l 8 ln t (∆x )2
m
, we get
ENT (x) ≤ 8 ln t
(∆x)2 +
T
X
t=1
t
X
Nt (x⋆ )=1
t
X
Nt(x)=⌈8 ln t/(∆x)2⌉
2t−4 ≤ 8 ln t
(∆x)2 + 1 + π2
3 (42)
which concludes the proof.
G Details on Experimental Settings
We compare TRUCB (Alg. 1) against standard UCB over all combinations of arms (UCB), defined as
{x ∈ ΩX | X ∈ 2V\{Y }\N∗ } and over POMISs (POUCB), defined as {x ∈ ΩX | X ∈ PN∗
G,Y }. Our baseline comparison is with POUCB, to ensure a fair evaluation of transportability performance. The number of trials is set to 50,000, which is sufficient to observe the performance differences. Each
25

Task 1 Task 2 Task 3 Total trials 50k 50k 50k
TRUCB 47.94 ± 9.60 (36.83%) 85.25 ± 113.3 (38.62%) 95.69 ± 7.47 (55.11%) POUCB 130.16 ± 7.33 220.75 ± 117.82 173.62 ± 7.56 UCB 397.03 ± 12.33 220.75 ± 117.82 (= CR of POUCB) 214.42 ± 7.76
Table 1: Mean and standard deviation of cumulative regret over 1,000 repeated simulations. The percentages (red) represent the ratio CR for TRUCB
CR for POUCB × 100(%).
simulation is repeated 1,000 times to ensure consistent results. The experiments were conducted on a Linux server equipped with an Intel Xeon Gold 5317 processor running at 3.0 GHz and 64 GB of RAM. No GPUs were used during the simulations.
G.1 Detailed Explanations of the Working Examples
We provides details on the workings of the TRUCB algorithm (Alg. 1) and the specific SCMs used in all bandit instances presented in the experiments (Sec. 5). We denote the exclusive-or operation by ⊕, and use Bern to represent a Bernoulli distribution. We randomly generate structural functions F using binary logical operations (∧, ∨, ⊕, ¬), and the parameters of the exogenous variable distributions are also randomly selected. The following table (Table 1) summarizes our simulation results.
Task 1. The bandit instance is associated with an SCM M where
M=

        
        
U = {UA, UB, UY , UAY }
V = {A, B, C, Y }
F=
(
fA = uA ∨ (b ⊕ uAY ), fB = uB,
fY = (1 − b) ∨ ((uAY ∨ b) ⊕ a)}
P (U) =
(
UA ∼ Bern(0.33), UB ∼ Bern(0.38),
UY ∼ Bern(0.41), UAY ∼ Bern(0.75).
(43)
The decision maker has an experimental prior Z1 = {{B}} from ∆1 = {A}. The action space
without prior information corresponds to PN∗=∅
G,Y = {{B}, {A, B}}, which corresponds to the action space of the baseline algorithm POUCB (i.e., the initialized target action space). In this setting, we observe that EP ∗
b Y cannot be bounded from the source π1, since {A} ∩ ∆1 ̸= ∅. In contrast,
EP ∗
a,b Y can be bounded as P
y yP 1
b (a, y) ≤ EP ∗
a,b Y ≤ P
y y{P 1
b (a, y) + 1 − P 1
b (a)}. Using these expressions, the decision maker can estimate causal bounds for four actions corresponding to the POMISs: do(A = 0, B = 0) : [0.1675, 1], do(A = 0, B = 1) : [0.2965, 0.7940], do(A = 1, B = 0) : [0.8325, 1] and do(A = 1, B = 1) : [0.2935, 0.7960]. The algorithm computes dominance bounds as l⋆ = 0.8325 and u⋆ = ∞. Here, u⋆ = ∞ arises because the causal bounds for do(b) are [0, ∞), i.e., no information can be transported for that intervention. Among the four actions, the upper caus-
al bounds for do(A = 0, B = 1) and do(A = 1, B = 1) are lower than l⋆, leading them to be excluded by TRUCB. Accordingly, the algorithm begins the online interaction with the final action space I∗ excluding these two actions. We observe that the mean cumulative regret at the final trial is 47.94 (± 9.60) for TRUCB and 130.16 (± 7.33) for POUCB, which is 36.83% of the latter.
Task 2. The bandit instance is associated an SCM M where
M=

          
          
U = {UA, UB, UC , UY , UBC , UBY }
V = {A, B, C, Y }
F=

 
 
fA = uA, fB = (uBY ) ∧ uBC ) ⊕ uB),
fC = b ⊕ (uBC ∧ ((1 − uC ) ⊕ a)),
fY = c ⊕ (uBY ∧ ((1 − uY ) ⊕ a))
P (U) =
(
UA ∼ Bern(0.28), UB ∼ Bern(0.42), UC ∼ Bern(0.52)
UY ∼ Bern(0.47), UBC ∼ Bern(0.62), UBY ∼ Bern(0.49).
(44)
26

An agent has priors from two environments with potential discrepancies ∆1 = {A} and ∆2 = {B}. The prior from the first source is observational Z1 = {∅}, and from the second source is experimental Z2 = {{C}}. The non-manipulable variable constraint is N∗ = {A, C}, and
the corresponding initial action space is PN∗
G,Y = {∅, {B}}. The action do(∅) is transportable as EP ∗
∅Y = P
a,b,c,y yQ2[A]Q1[B, C, Y ] = P
a,b,c,y yPc2(a)P 1(b, c, y | a) = 0.4844. On
the other hand, do(b) is not transportable, since Q∗[C] is non-transportable from the sources: P∗
b (y) = P
a,c Q2[A]Q2[Y ]Q∗[C]. Since ∆1 ∩ {C} = ∅ and according to Thm. 2, Q∗[C] is bounded by Q1[B, C], which leads to lb = P
a,c,y yPc2(a)Pc2(y|a)P 1(c|a, b)P 1(b). This expression yields ldo(B=0) = 0.2097 and ldo(B=1) = 0.2752. The upper causal bound for do(b) is given by P
y y min{1, P
a,c Pc2(a)Pc2(y|a){P 1(b)P 1(c|a, b) + 1 − P 1(b)}}. We thus have udo(B=0) = 0.6783 and udo(B=1) = 0.8066. We now proceed to compute the dominance bounds. The set
of MISs with respect to ⟨G, Y , N∗⟩ is {∅, {B}}. Since l∅ = 0.4844 and lb∗ = 0.6783, we have
(c) N = {C} PN
G,Y = {{A}, {A, B}}
(d) N = ∅ PN
G,Y = {{A}, {A, C}}
(b) N = {A} PN
G,Y = {∅, {B}, {C}}
(a) N∗ = {A, C}
PN∗
G,Y = {∅, {B}}
Figure 9: Hierarchical relationships between POMISs under different constraints. Arrows indicate the direction of dominance relations.
the dominance lower bound is given by l⋆ = 0.4844. To compute the upper dominance bound u⋆, the algorithm (executed via the subroutine UDB in Alg. 3) initializes with 0.8066 (i.e., the upper causal bound udo(B=1)) and traverses weaker constraints (see Fig. 9): (b) For N = {A}, the bound remains 0.8066. (c) For N = {C}, the algorithm returns 0.8070, which corresponds to the upper causal bound udo(A=0,B=1). (d) For N = ∅, the algorithm returns 0.7697, which corresponds to the expected reward of the -
transportable action do(A = 1, C = 1)
EP ∗
do(A=1,C=1) Y = P
y yP 2
do(C=1)(y|A=1) = 0.7697.
Consequently, the final upper dominance bound is set to u⋆ = 0.7697. Since udo(B=1)=0.8066 >
0.7697=u⋆, the final transport upper bound is updated to the value of u⋆ = 0.7697. The resulting transport bounds for do(B=0) and do(B=1) are [0.2097, 0.6783] and [0.2752, 0.7697], respectively. Although the size of the action space remains unchanged (i.e., no action is removed from I∗, implying that the action spaces of all three algorithms—UCB, POUCB and TRUCB—are identical), we observe that accounting for the transport bounds improves performance, with final mean regrets of 220.75 (± 117.82) fo-
r POUCB and 85.25 (± 113.3) for TRUCB, corresponding to 38.62% of the baseline algorithm POUCB.
Task 3. The bandit instance is associated an SCM M where
M=

                   
                   
U = {UR, UT , UW , UX , UZ , UY , URW , URY , UXY , UW X , UW Z }
V = {R, T , W , X, Z, Y }
F=

     
     
fR = uR ∨ ((1 − uRW ) ∧ (t ∧ uRY )), fT = uT
fW = uW ∨ ((1 − uW X ) ∧ (uRW ∧ uW Z )),
fX = w ∨ ((1 − uW X ) ∧ (uXY ∧ uX )),
fZ = z ∨ ((1 − uXY ) ∧ (uRY ∧ uY )),
fY = x ∨ ((1 − uW Z ) ∧ (r ∧ uZ ))
P (U) =

   
   
UR ∼ Bern(0.53), UT ∼ Bern(0.63), UW ∼ Bern(0.38),
UX ∼ Bern(0.27), UZ ∼ Bern(0.4), UY ∼ Bern(0.26),
URW ∼ Bern(0.52), URY ∼ Bern(0.63), UXY ∼ Bern(0.79),
UW X ∼ Bern(0.74), UW Z ∼ Bern(0.31).
(45)
An agent has access to priors from two environments with potential discrepancies ∆1 = {R} and ∆2 = {T }, with priors Z1 = {∅, {Z}} and Z2 = {{Z}}, and constraint
N∗ = {T , W }. The initial action space is PN∗
G,Y = {∅, {R}, {X}, {Z}} where EP ∗
∅Y =
P
r,t,w,x,z,y yP 1(r, x, y, z|t, w)P 1(w)Pz2(t) and EPz∗ Y = P
y yPz1(y) = P
y yPz2(y) are transportable while EPx∗ Y = P
r,t,z,y yQ1[R, Y ]Q2[T ]Q∗[Z] and EPr∗ Y = P
w,x,z,y yQ∗[W , X, Z, Y ]
are not. According to Thm. 2, we have that Q∗[Z] can be bounded by Q1[W , R, X, Z, Y ] = P 1(w, r, x, z, y | t), leading to P
r,t,z,y yPz1(r, y|t)Pz2(t)P 1(r, w, x, z|t) ≤ EPx∗ Y ≤
27

P
y y min{1, P
r,t,z Pz1(r, y|t)Pz2(t)(P 1(r, w, x, z|t) + 1 − P 1(r, w, x|t))}. Similarly, we can de
rive the causal bounds for do(r) using Q1[W , R, X, Z, Y ] as P
w,x,z P 1(r, x, y, z|t, w)P 1(w) ≤ EPr∗ Y ≤ P
y y min{1, P
w,x,z P 1(r, x, y, z|t, w)P 1(w) + 1 − P 1(r, x, z|t, w)P 1(w))}. In this setting, the transportable target POMIS action yields EP ∗
do(Z=1) Y = 1, resulting in l⋆ = u⋆ = 1. Furthermore, we find the upper causal bounds udo(∅) = 0.5514, udo(X=0) = 0.7901 and udo(Z=0) = 0.034
these three upper causal bounds are lower than l⋆. Hence, the corresponding actions are eliminated from I∗ by the algorithm. We observe mean cumulative regrets of 173.62 (± 7.56) for POUCB and 95.69 (± 7.47) for TRUCB, corresponding to 55.11% of regret ratio.
H Discussions
Misspecification. In the transportability literature, assuming access to true selection diagram is a standard modeling practice. As noted by Bareinboim and Pearl [2016], if no knowledge about commonalities and disparities across environments is available, transportability cannot be justified. That said, some degree of misspecification can be tolerated without invalidating the performance guarantees—particularly when the assumed causal diagram or selection diagram forms super-model of the true envi-
ronment. A similar discussion was presented by Bellot et al. [2023].
For example, suppose both the source and target environments share the causal diagram G = ⟨{X, Y }, {X → Y }⟩. Given source data P (x, y) and the graph structure, the interventional distribution Px(y) = P (y | x) is identifiable. However, if we are unsure about the presence of an unobserved confounder, we can conservatively posit a super-model G′ = ⟨{X, Y }, {X → Y , X ↔ Y }⟩. Under this model, while point identification fails, the interventional distribution Px(y) is bounded within the interval [-
P (x, y), P (x, y) + 1 − P (x)], which still contains the true value. The same reasoning applies to selection diagrams. The selection nodes only indicate potential discrepancies between environments. If a researcher is uncertain about whether a mechanism differs across environments, they may still conduct valid inference by conservatively assuming the presence of a discrepancy. Such conservatism does not harm transportability guarantees. Importantly, this conservative modeling increases the number-
 of POMISs. For instance, a POMIS under G is {{X}}, while under G′ it becomes {∅, {X}}, which covers the true POMIS. This leads to less informative but still correct inferences, outperforming methods that ignore structural information altogether.
In contrast, misspecifying in the opposite direction (i.e., failing to model a discrepancy that does exist in the target environment) can lead to incorrect inferences. This reflects a fundamental asymmetry: being conservative preserves soundness, but missing edges or selection nodes can violate correctness.
Parametric approach. One might be concerned that while the algorithm (Alg. 1) effectively uses prior knowledge to eliminate non-optimal actions before learning begins, it then switches to a traditional UCB approach that ignores additional observations available during each round. Indeed, there exists a rich body of research that incorporates prior knowledge to iteratively update parameters of SCMs under graphical constraints [Zhang and Bareinboim, 2022, Bellot et al., 2023, Wei et al., 2023, Jalal-
doust et al., 2024] in online learning. However, such approaches often rely on optimizationbased approaches—such as canonical SCM [Zhang et al., 2022] or neural causal models (NCMs) [Xia et al., 2021] that assume full parameterization, which results in high computational overhead. This approach is infeasible for larger or denser causal diagrams, and exploiting them effectively remains an open problem [Elahi et al., 2024]. Moreover, these methods are constrained to categorical settings, which makes-
 them inapplicable to continuous domains, such as those encountered in causal Bayesian optimization (CBO; Aglietti et al. [2020] and muti-outcome variant (MO-CBO; Bhatija et al. [2025]), where POMISs are also leveraged for structural pruning in continuous action spaces.
In contrast, our approach focuses on leveraging structural knowledge offline, before any online interaction, and without requiring parameterization or any strong assumptions beyond a given graphical structure and sources. This distinction allows us to scale to settings where parameter learning is infeasible or computationally prohibitive (dense graph or continuous domain), while still retaining provable regret guarantees through structure-informed pruning and closed-form bounding.
28

Future work. Recently, research on transportability theory in practical settings has been increasing [Jung and Bellot, 2024, Jalaldoust et al., 2024, Jalaldoust and Bareinboim, 2024]. Beyond structural causal bandits, we believe that transportability-based decision making will offer substantial practical value when integrated with causal reinforcement learning [Zhang and Bareinboim, 2022, Hwang et al., 2024, Bareinboim et al., 2024], rehearsal learning [Qin et al., 2023, 2025, Du et al., 2024, 20-
25, Tao et al., 2025], and sequential planning [Pearl and Robins, 1995, Jung et al., 2024].
I Limitations
In this section, we discuss limitations of our work and outline promising directions for future research.
Modeling bandit instances in the form of SCMs. Structural Causal Models (SCMs) are a versatile and expressive framework that provides a principled way to represent and reason about causal relationships. Their generality makes them applicable across a wide range of domains. However, SCMs come with certain limitations, such as the assumption of a well-defined set of variables and a fixed causal structure, which may not adequately capture the complexity of dynamic, highdimensional, or partially obser-
ved systems. Nonetheless, our work addresses a fundamental problem within the SCM framework. We believe it provides a solid foundation for future research, such as extending causal bandits to more complex or less structured environments.
Known causal diagram. We make the standard assumption that the deployment learner has access to the underlying causal diagram. While knowledge of the causal structure can greatly enhance decision-making, this requirement may limit the broader applicability of the proposed approach. In practice, several techniques—such as causal discovery methods or the use of ancestral graphs as plausible explanations—can help alleviate this issue. However, these techniques typically require substantial domain kno-
wledge, and thus, the assumption remains a key limitation of our framework.
While a collective selection diagram provides a principled and interpretable framework for analyzing environment shifts and transferring information across environments, it arguably restricts the analysis to a narrow class of problems where common (super) causal diagrams should be explicitly defined. Consequently, the applicability of this framework may be limited in settings where environmental changes substantially alter the underlying graph structure.
Tightness of causal bounds. As discussed in Sec. E, the upper bound computed by the algorithm PATR (Alg. 4) can, in some cases, exceed one. Moreover, we do not guarantee the tightness of our causal bounds; that is, we cannot ensure the existence of an SCM under which the causal effect exactly equals either l or u. Characterizing conditions under which lower and upper bounds are attainable by some SCM would enhance the interpretability and reliability of our framework. Investigating tighter bounds -
and formally establishing their tightness remains an important direction for future work.
Sufficient prior data from source environments. Our method relies on the availability of prior data to construct dominance and causal bounds for guiding exploration. However, when the prior data is insufficient or biased, the resulting bounds may become inaccurate. In particular, inaccurate bounds may fail to include the true expected reward of certain actions. As a result, the agent may prematurely eliminate potentially optimal actions from exploration, leading to suboptimal performance. Moreover-
, our current framework focuses on the transportability of causal quantities, rather than on improving estimation quality under noisy or limited prior data. Developing robust algorithms that can explicitly account for uncertainty in the prior and avoid overconfident pruning remains an important direction for future work.
Impact Statement
This work addresses a structured causal bandit framework that leverages prior knowledge from heterogeneous environments through transportability theory in the causal inference literature. This approach has potential applications in real-world settings where experimentation is costly or limited, such as personalized healthcare, adaptive education, and resource-constrained recommendation
29

systems. In these domains, improper specification of causal structures may lead to misleading conclusions and biased decisions. Therefore, careful validation and domain-specific causal modeling are essential before deployment in high-stakes environments.
30

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:54.450Z
- **Text Length:** 104793 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 30 of 30
