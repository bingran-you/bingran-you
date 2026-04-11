# PDF Document: Nandan et al. - 2025 - Multistationarity in semi-open Phosphorylation-Dephosphorylation Cycles.pdf

**File Path:** Nandan et al. - 2025 - Multistationarity in semi-open Phosphorylation-Dephosphorylation Cycles.pdf

**Processed Date:** 2026-02-10T18:17:24.382Z

**File Size:** 597.68 KB

**Total Pages:** 24

**Extracted Pages:** 24

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3720

**Title:** Multistationarity in semi-open Phosphorylation-Dephosphorylation Cycles

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

MULTISTATIONARITY IN SEMI-OPEN PHOSPHORYLATION-DEPHOSPHORYLATION CYCLES
PRANEET NANDAN, BEATRIZ PASCUAL-ESCUDERO, AND DIEGO ROJAS LA LUZ
Abstract. Multistationarity, underlies biochemical switching and cellular decisionmaking. We study how multistationarity in the sequential n-site phosphorylationdephosphorylation cycle is affected when only some species are open, meaning allowed to exchange with the environment (so-called semi-open networks). Working under mass action kinetics, we obtain two complementary structural results for every n ≥ 2. First, opening any nonempty subset of the substrate species preserves the network’s capacit-
y for nondegenerate multistationarity. Second, opening the enzyme species (both kinase and phosphatase), possibly together with any subset of substrates, always destroys multistationarity. The latter result is proved by a general reduction framework combining the detection of absolute concentration robustness (ACR) with projection onto the remaining species; when the projection is monostationary, the full semi-open system is monostationary. We also illustrate the general method on multi-layer casc-
ade variants and discuss biological implications: opening enzymes acts as a robust “switch” that converts a potentially multistationary phosphorylation module into a monostationary one, while substrate exchange preserves switching capacity and thus the ability to couple cycles to downstream processes.
1. Introduction
Multistationarity is the property of a dynamical system to have multiple steady states. It is an important property for biological systems as it is relevant for decision-making processes during the functioning of the cellular machinery ([LK99, XF03, OTL+04]) and in the context of Darwinian evolution of these systems ([BFF92, LK99]). This has led to interest in studying the parameter regions for which certain biologically relevant chemical reaction networks admit or forbid multistationarity([BDG20,-
 CF10, CF06, JS13, WS08]).
One example of a biological system which admits multistationarity is the dual phosphorylation network: a substrate with two active sites can be phosphorylated or dephosphorylated through an enzymatic reaction utilizing a kinase or a phosphatase, respectively. Under the simplest assumption of mass action kinetics, this system has been studied using polynomial ordinary differential equations (ODEs) ([WS08, TG09]) and has also become a toy model for developing mathematical machinery focused on unders-
tanding multistationarity ([FRW20, BCP21]). In more generality, there exist substrates in nature with more than two active sites (e.g. proteins can have >100 sites ([JS04])). Hence, the general n-site phosphorylation network given below is relevant.
S0 + E −↽−−⇀− ES0 −−→ . . . −↽−−⇀− ESi −−→ Si+1 + E −↽−−⇀− . . . −↽−−⇀− ESn−1 −−→ Sn + E
Sn + F −↽−−⇀− F Sn −−→ . . . −↽−−⇀− F Si −−→ Si−1 + F −↽−−⇀− . . . −↽−−⇀− F S1 −−→ S0 + F.
Laboratoire de Biophysique et Evolution, UMR CNRS-ESPCI 8231 CBI, ESPCI Paris, Université PSL, praneet.nandan@espci.fr. Universidad Politécnica de Madrid, beatriz.pascual@upm.es. University of Wisconsin-Madison, USA, rojaslaluz@wisc.edu. 1
arXiv:2511.10609v1 [math.DS] 13 Nov 2025

2 PRANEET NANDAN, BEATRIZ PASCUAL-ESCUDERO, AND DIEGO ROJAS LA LUZ
This network assumes that for a substrate that can be phosphorylated at n-sites, the process happens for one site at a time and that each encounter modifies one site, the mass action rate dependenting only on the number of sites already phosphorylated. Under mass action kinetics one obtains a system of polynomial ODEs modelling the evolution of species’ concentrations in time, which involves 3n+3 variables (one for each species) with 6n parameters (for as many reactions). The number of steady stat-
es of this system has been studied extensively, and multistationarity has been reported for arbitrary n > 1 ([Gun05]) with bistability being reported numerically ([SH06]). For n = 1, there is a unique positive globally asymptotically stable steady state [AS06]. In [WS08], the authors show the existence of reaction rates for which the system has n steady states if n is even and n+1 if odd. Such high number of steady states are attributed to the fact that a large number of phosphorylation sites comp-
ete for the same enzymes. Note that this is a sequential phosphorylation cycle [FRW20], in opposition to the processive one [CS15], which does not admit multistationarity.
Inflow and outflow (flow) reactions for a given species are a replacement for the exchange of this species with the environment outside the reaction system (through osmosis in case of a membrane, or even just diffusion), or for other reactions that involve this species and which we do not consider a part of the system of study. This is important from the biological perspective, as the cellular mechanisms of metabolism are often very complex, and involve other physical transformations not tractable-
 with a chemical reaction network formalism. Adding inflows and outflows for a species is what we refer to here as ’opening’ it, and is therefore an approximation to how these processes and other reactions can change the concentration of the species in the system we focus on. The work in [CF06] shows that when a reaction network admits multistationarity, by adding inflow and outflow reactions for all species, the resulting network will admit multistationarity as well. Some other recent works ([YSE-
25]) aim at understanding how multistationarity arises in fully open networks. However, this is not always a realistic scenario, as there could be specific species which are ’trapped’ in the reaction system, unable to exchange freely with the environment (due to, for example, semi-permeable membranes in the cell) [CF10, CF06]. Furthermore, some species can be so short-lived (due to high outgoing reaction rates in the network) that effectively the out-of-system reactions do not have time to affect -
their concentrations.
In this article, we address the question of multistationarity in the case when only some of the reacting species are allowed to exchange with the environment. Apart from the reasons mentioned before concerning applications, this also gives us an insight into the role that different species play in creating a highly multistationary system. Furthermore, it helps develop and test more general mathematical tools to check for multistationarity in reaction networks which are similar to the phosphorylati-
on cycle. For this, Section 2 introduces the necessary background, notation and tools.
In Section 3, we show that if any of the species classified as substrate is allowed to exchange with the environment, while the other species are either trapped or short-lived, multistationarity in the system is conserved. These substrates are often molecules which are important for the functioning of biological systems and are undergoing a phosphorylation process to get used up in other processes after their transformation, hence they are involved in other reactions outside the cycle. This allows-
 the phosphorylation cycle to be coupled to these other reactions without losing its multistationarity.
In Section 4 we develop a reduction method, that can be applied to the phosphorylation cycle if only the species classified as enzymes are open. In this system, we find that by openning both enzymes multistationarity is destroyed. This implies that allowing fast exchange of enzymes with the environment can be used as a ’switch’ to turn a highly

MULTISTATIONARITY WITH INFLOWS AND OUTFLOWS 3
multistationary system into a robust monostationary system. Such ’switches’ are important for evolutionary selection, as the ability to display different behavior based on environment allows survival ([BMC+04, VAME10]) and adaptability ([BBK+06, KUKY06]). We also show that this can be applied to a cascade type process, yielding similar results. We are able to showcase part of the rich behavior such multistationary systems are capable of displaying when they interact with other systems and their en-
vironment. The reduction formalism can be applied to other more general reaction networks too, which will be the topic of a forthcoming paper, and hence can have consequences beyond the systems in play.
2. Preliminaries and General Toolbox
2.1. Notation and Definitions. We will write R>0 for the set of strictly positive real numbers, and R≥0 for the set of nonnegative real numbers.
Definition 2.1. A reaction network can be represented by a directed graph, where each arrow represents an interaction between two complexes: the source or reactant, and the product. Each of these complexes is a linear combination of the species involved with nonnegative integer coefficients. That is, a reaction network is a triplet G = (X , C, R) where
(1) X = {X1, . . . , Xn} is the set of species,
(2) R =
{
∑n
i=1 yij Xi
κ→j ∑n
i=1 yi′j Xi
}r
j=1 for some yij, yi′j ∈ Z≥0 is the set of reactions,
each being an edge from a source and a product, which are labeled by reaction rates κj ∈ R>0 and
(3) C = {∑n
i=1 yij Xi}r
j=1 ∪
{
∑n
i=1 yi′j Xi
}r
j=1 is the set of complexes, appearing as source
or product in some reaction.
We identify each complex ∑n
i=1 yiXi with the vector of coefficients y = (y1, . . . , yn) ∈ Zn≥0,
and write y → y′ for the reaction between the corresponding complexes. This identifies reaction networks with Euclidean embedded graphs (E-graphs).
Definition 2.2 ([Cra19]). An Euclidean embedded graphs (E-graph) is a finite simple directed graph G = (V, E), where V ⊆ Zn≥0 is the set of vertices, and E ⊆ V × V is the set of directed edges.
Thus, C is in correspondence with the set of vertices V , and R is in correspondence with the set of edges E. This perspective will be useful when thinking about projected networks (see Definition 2.12).
Example 2.3. Consider the following reaction network G = (X , C, R):
Y −−→ X −−→ Z,
2Z −−→ Y + Z, (2.1)
where X = {X, Y, Z}, C = {X, Y, Z, 2Z, Y + Z}, and the set of reactions R is the one shown. This can be represented as a E-graph embedded into 3-dimensional space:

4 PRANEET NANDAN, BEATRIZ PASCUAL-ESCUDERO, AND DIEGO ROJAS LA LUZ
X
Y
Z
2Z
Y+Z
G
(2.2)
We will also use the following graph-theoretic property of some reaction networks:
Definition 2.4. We say that G is weakly reversible if any edge is part of an oriented cycle in G or, equivalently, any connected component of G is strongly connected (a strongly connected directed graph is one where there exists a directed path between every pair of vertices. That is to say, for any y → y′ ∈ R, there is a path y′ → . . . → y given by reactions in R.
According to [JS13], a reaction network is a CFSTR (continuous-flow stirred-tank reactor) if, for any species Xi in the network, the outflow reaction Xi −−→ 0 is in the network. A CFSRT is fully open if for all species the pair 0 −−⇀
↽−− Xi is in the network, that is, there are both outflow and inflow reactions for all species.
Definition 2.5. We say that a species X ∈ X is closed in G if none of the reactions 0 −−→ X and X −−→ 0 are in R. In contrast, we say that X is open in G if the reactions 0 −−→ X and X −−→ 0 are both in R. We say that X is partially open G if exactly one of the reactions 0 −−→ X and X −−→ 0 is in R. That is, a fully open CFSRT would be a network in which all species are open. We say that G is a semi-open network if some species are open in G, but not all.
Given a reaction network G = (X , C, R) we aim at modeling the evolution of the species’ abundances through time by assigning a corresponding dynamical system given by differential equations of the form:
dxi
dt = fi(x1, . . . , xn) = ∑
y→y′∈R
νy→y′ (x(t))(y′
i − yi), i = 1, . . . , n, (2.3)
where x(t) = (x1(t), . . . , xn(t)), xi stands for the concentration of species Xi, fi is its species formation function, and (yi′ − yi) represents the net production of species Xi ∈ X
resulting from the reaction y → y′ ∈ R. We call a choice of continuously differentiable functions νy→y′ a choice of kinetics. We now construct the stoichiometric matrix Γ ∈ Rn×r, where the i-th column is the vector y′ − y if the i-th reaction is given by y → y′. We call the space generated by the columns of Γ the stoichiometric subspace im Γ. We denote by ν(x) the vector with entries νy→y′(x). Then we can rewrite (2.3) as:
dx
dt = f (x) = Γν(x), (2.4)
where f = (f1, . . . , fn). We will be dealing with a widespread choice of kinetics called mass action kinetics, in which the rate of each reaction is proportional to the product of the concentrations of the

MULTISTATIONARITY WITH INFLOWS AND OUTFLOWS 5
reactant species of the reaction. Thus, given a choice κ ∈ Rr>0 of reaction rates on G, the associated mass action kinetics are defined by monomials of the form:
νy→y′ (x) = κy→y′ xy1
1 · · · xynn ,
and the associated mass action differential equations for the mass action system (G, κ) can be written as dxi
dt = fi(x1, . . . , xn) = ∑
y→y′∈R
κy→y′ xy1
1 · · · xynn (y′
i − yi), i = 1, . . . , n (2.5)
Those points x = (x1, . . . , xn) ∈ Rn>0 where f1(x) = . . . = fn(x) = 0 are the positive
steady states of the mass action system. We will denote by V(G, κ∗) the set of positive steady states of the mass action system (G, κ) with fixed reaction rates κ∗. Note that if w = (w1, . . . , wn) ∈ Rn is a vector in the left kernel of the stoichiometric matrix Γ, then
w · dx
dt = w · Γν(x) = 0, (2.6)
and w1x1 + · · · + wnxn will be constant in time. Thus, we call w a conservation law. Conservation laws define positive stoichiometric compatibility classes as
NT = {x ∈ Rn
>0 : W x = T }
where W ∈ Rd×n is a matrix whose rows form a basis of all conservation laws and T ∈ Rd is a vector of total amounts. Each positive stoichiometric compatibility class is a subset of positive concentrations which give the same vector of total amounts. For a fixed vector T ∗ of total amounts, we will write V(G, κ) ∩ NT ∗ for the set of positive steady states in such (positive) stoichiometric compatibility class. Note that we can think of W as the matrix generating the linear space given by the (left)-
 kernel of the stoichiometric matrix, ker ΓT . Thus NT are just translations of the stoichiometric subspace intersected with Rn>0.
Remark 2.6. Given x, x′ ∈ Rn>0, they are both in NT if, and only if, x′ − x ∈ im Γ is in
the stoichiometric subspace. Indeed, this last condition is equivalent to W (x′ − x) = 0, so if x ∈ NT and W (x′ − x) = 0, then W x′ = W x = T , and x′ ∈ NT . Similarly, if x and x′ ∈ NT , then W (x′ − x) = 0.
Example 2.7. Consider the reaction network G given by (2.1) from Example 2.3. The mass action system generated by G is:
dx
dt = κY →X xY


1 −1 0

 + κX→Z xX


−1 0 1

 + κ2Z→Y +Z x2
Z


0 1 −1

 (2.7)
where xX , xY and xZ represent the concentrations of X, Y and Z respectively. Thus, its stoichiometric matrix is
Γ=


1 −1 0 −1 0 1 0 1 −1

,
and we see that there exists a linear conservation law w = (1, 1, 1), meaning that xX + xY + xZ = T , the total concentration is conserved.
The following technical definition will be necessary for the results in Section 4:
Definition 2.8. Let G = (X , C, R) be a network and consider a subset E = {Ei}i=1,...,k ⊂ X of species. We say that E is independently conserved in G if there is a set of conservation laws {L1, . . . , Lk} ⊂ Rn such that for i, j = 1, . . . , k, the i-th entry is nonzero in Li and zero in every other Lj. That is, if Ei appears in Li but not in Lj when j ̸= i.

6 PRANEET NANDAN, BEATRIZ PASCUAL-ESCUDERO, AND DIEGO ROJAS LA LUZ
Remark 2.9. Roughly speaking, systems with catalysts (or enzymes) satisfy this, as the total amount of a given enzyme will result in a conservation law for it, which will include the enzyme and all intermediate complexes of which the enzyme is part. It is the case, for instance, of the n-site double phosphorylation cycle (see Section 2.4) and phosphorylation cascades (see Section 4.4).
Remark 2.10. Note that, if E = {Ei}i=1,...,k ⊂ X are independently conserved, then there are d linearly independent conservation laws (the network has rank n − d). By reordering species appropriately we will have a block matrix
( Idk ∗
0(d−k)×k ∗
)
where the first k rows correspond to the L1, . . . , Lk from Definition 2.8. Note that the converse is also true and then, in particular, for a network of rank n − d we can always choose a subset of d independently conserved species in X , as Gaussian elimination will allow us to obtain such a matrix, if the columns (hence the species) are reordered appropriately.
A steady state x∗ is nondegenerate if ker (Jf,x(x∗)) ∩ im Γ = {0}, where Jf,x is the Jacobian matrix of f with respect to x and im Γ = {y : W y = 0} is the stoichiometric subspace. Equivalently, a steady state x∗ is nondegenerate if the Jacobian matrix of the (square) system {f (x) = 0, W x = T } has full rank n (see [WF13, Section 6]). Note that this does not depend on the particular choice of W . We say that a network G with mass action kinetics admits multistationarity if there exists a choice -
of κ∗ ∈ Rr>0 and T ∗ ∈ Rd such that the system of polynomial equations
f (κ∗, x) = 0, W x = T ∗ has more than one positive solution. That is, there is a choice of reaction rates for which there are at least two positive steady states in some stoichiometric compatibility class. If these can be found nondegenerate, we say that the network admits nondegenerate multistationarity. We will say that a network with mass action kinetics is monostationary if it does not admit multistationarity.
2.2. Network modifications. In order to study the capacity for multistationarity of networks when adding certain flow reactions, let us define the following modifications that one can perform on a network.
Definition 2.11. Let G = (X , C, R) be a network and consider a subset E ⊂ X of species which are closed in G. We define a new network GE⇌0 as the network given by
(X , C ∪ {0} ∪ E, R′), where R′ = R ∪ {E ⇌ 0}E∈E and call it the open network on E in G.
Definition 2.12. Let G = (X , C, R) be a network and consider a subset E = {Ei}i=1,...,k ⊂ X of species. Consider the network G−E obtained from G using the following operations: For i = 1, . . . , k,
(1) remove Ei from each complex, replacing the complex Ei with the 0 complex (if Ei is a complex of G), (2) remove any self-loops.
We call this modification the projected network on the complement of E, following [Pan12]. The name comes from the fact that we can think of G−E as a projection of the complexes and reaction vectors onto the complement of E if one considers the network as an embedded graph. Let z ∈ Rn≥0 be a steady state of the dynamical system given by G. Then, the projection of the steady state z onto E, zE , is defined by projecting z over the coordinates given by E.
Remark 2.13. Note that this is an embedded network of G and of GE⇌0, according to the definition in [JS13]. It is also called a reduced reaction network in [And11].

MULTISTATIONARITY WITH INFLOWS AND OUTFLOWS 7
Remark 2.14. Note that the stoichiometric subspace of G, im Γ, is given by the span of y′ − y, for y → y′ ∈ R, and similarly the stoichiometric subspace of G−E , im Γ−E ,is given by the span of y′ − y, for y → y′ ∈ R−E . But any reaction y → y′ ∈ R−E must come from the projection of a reaction y → y′ ∈ R into X − E when seen as an E-graph, by construction. That is π(y) = y and π(y′) = y′, where π : R|X | −→ R|X \E|. Thus, im Γ−E is given by the projection of the stoichiometric subspace im Γ over X-
 − E.
Example 2.15. Continuing Example 2.3, consider the projection of the reaction network G given by (2.1) over the complement of E = {Z}, that is G−Z, which is given by:
Y −−→ X −−→ 0,
0 −−→ Y. (2.8)
This reaction network can be seen as a literal projection of the E-graph given in (2.2) into the XY plane:
0
X
Y
Z
G−Z
0X
Y
G−Z
(2.9)
Note that it has stoichiometric subspace equal to all of R2, and thus no conservation laws are left.
A third operation, where a second network is involved, will be necessary for the coming results:
Definition 2.16. Let G = (X , C, R) be a network and consider a subset E ⊂ X of species, and consider any second network H = (E, C′, R′) involving these species. We define a new network from them, given as G ∪ H = (X , C ∪ C′, R ∪ R′).
[BP18] investigated modifications to a chemical reaction network that preserve nondegenerate multistationarity. Out of those results, we state here two Theorems which we use later in Theorem 3.7.
Theorem 2.17 (Adding intermediate complexes involving new species, Theorem 6 in [BP18]). Let G = (X , C, R) be a network, let Y be a list of k new species, and let G′ arise from G by replacing each of the reactions:
ai.X → bi.X with a chain ai.X → ci.X + βi.Y → bi.X, (i = 1, . . . , r)
Suppose further that the new species Y enters nondegenerately into G′ in the sense that β := (β1|β2| . . . |βr) has rank r (k ≥ r). ai, bi and ci are nonnegative vectors and any or all may coincide. If G admits nondegenerate multistationarity then so does G′.
Theorem 2.18 (Adding a dependent reaction, Theorem 1 in [BP18]). Let G = (X , C, R) be a network, and let G′ arise from G by adding to R a new irreversible reaction with reaction vector y which is a linear combination of reaction vectors of R. If G admits nondegenerate multistationarity, then so does G′.

8 PRANEET NANDAN, BEATRIZ PASCUAL-ESCUDERO, AND DIEGO ROJAS LA LUZ
2.3. Deficiency Theory. Chemical reaction network theory, initiated by Horn, Jackson and Feinberg beginning in the 1970s, aims at analyzing reaction networks independently of the choice of rate constants. One key area of progress is deficiency theory. Deficiency theory provides a powerful tool to determine, among other things, if a network has the capacity for multistationarity or not just from its deficiency δ, a quantity that is independent of choices of labeling and of the particular kinetics, -
as it is a purely structural invariant of the network.
Definition 2.19. Let G = (X , C, R) be a network with l connected components (as a graph), and let im Γ be its associate stoichiometric (linear) subspace. The deficiency of G is given by the non-negative integer
δ = |C| − l − dim(im Γ).
Computationally, we count complexes and connected components from the reaction network when seen as a graph and we compute dim(im Γ) = |X | − rank(W ), from the matrix of conservation laws W . Deficiency also has a geometric interpretation. For this we first need to define affinely independence: We say that the vectors y0, . . . , yN ∈ RM are affinely independent if y1 − y0, . . . , yN − y0 are linearly independent. Note that this is a property independent of the ordering of the vectors, and it ca-
n intuitively be thought of as that the points y0, . . . , yN ∈ RM are in general position. We have the following equivalence for G: δ = 0 if and only if the complex vectors within each connected component Gi are affinely independent, and the stoichiometric subspaces im Γi associated to each Gi are linearly independent [CDJS+20, CJY23]. Recall the definition of a reaction network being weakly reversible (Definition 2.4). The following result, due to Horn and Feinberg, provides a way to ensure mono-
stationarity of a network using its deficiency:
Theorem 2.20 (Deficiency Zero Theorem [Hor72, Fei72, FH74]). Let G = (X , C, R) be a network with deficiency δ = 0. Then, G is monostationary. Moreover,
(1) If G is weakly reversible, then it admits a unique positive steady state (for each choice of reaction rates) for each stoichiometric compatibility class, and this steady state is locally asymptotically stable. (2) If G is not weakly reversible, then it does not admit any positive steady states (for each choice of reaction rates).
In particular, if G has defiency zero, it is monostationary. We will use this theorem to prove monostationarity in Sections 4.3 and 4.4.
Remark 2.21. Consider a monomolecular network, that is, a network where all complexes either have one species or they are the 0 complex. Then, by the geometric interpretation we can see that the deficiency of the network is always 0. Thus, all monomolecular networks are monostationary (if they are weakly reversible, they have one steady state, otherwise they have none).
2.4. Sequential n-site double phosphorylation cycle. Let us present the n-site double Phosphorylation cycle, which we will denote by Pn. It is defined as
S0 + E −↽−−⇀− ES0 −−→ . . . −↽−−⇀− ESi −−→ Si+1 + E −↽−−⇀− . . . −↽−−⇀− ESn−1 −−→ Sn + E
Sn + F −↽−−⇀− F Sn −−→ . . . −↽−−⇀− F Si −−→ Si−1 + F −↽−−⇀− . . . −↽−−⇀− F S1 −−→ S0 + F. (2.10)
It is sometimes convenient to highlight the role of different species in the network, and in this line we will classify species in Pn into three types. As E, F act as catalysts in the

MULTISTATIONARITY WITH INFLOWS AND OUTFLOWS 9
inter-conversion between Si and Si+1 (0 < i < n − 1), we call the species E, F enzymes, and the species S0, . . . , Sn substrates. The species ESk for k = 0, . . . , n−1, F Sk for k = 1, . . . , n are intermediate species because they take part in necessary intermediate steps of the phosphorylation/dephosphorylation processes, acting as an intermediary between different Enzyme-substrate complexes (complexes consisting of one enzyme and one substrate).
For a fixed n > 0, Pn has 3n + 3 species and 6n reactions. It has the following conservation laws:
LE : xE +
n−1
∑
i=0
xESi = TE
LF : xF +
n
∑
i=1
xF Si = TF (2.11)
LS :
n
∑
i=0
xSi +
n−1
∑
i=0
xESi +
n
∑
i=1
xF Si = TS
where T = (TE, TF , TS) takes values in R3>0. Note that this network admits multistationarity for n ≥ 2 ([WS08], see also [BDG20, CIT19]). The network is monostationary for n = 1 (it satisfies the conditions of the deficiency one theorem [Fei87]). In this work, we are interested in analyzing the capacity for multistationarity of semiopen versions of this network for n ≥ 2. According to [CF06], when opening all species the network always admits multistationarity (as the closed network admits multis-
tationarity). The results in [CFW20] allow us to know that the number of nondegenerate steady states is preserved in P2 when we add outflows to all species of this network, and inflows to certain subsets of them.
We take P2, which is the 2-site double phosphorylation cycle, and analyze P2
E⇌0 for different sets E of substrates and enzymes. The table below, generated using the Chemical Reaction Network Toolbox [FEJK18], shows which resulting networks admit nondegenerate multistationarity (Multist.).
Index Species set E Multist. 1 E or F Yes 2 E and F No 3 S0 or S1 Yes 4 S0 and S1 Yes 5 S0, S1, S2 Yes 6 E, F, S0 No 7 E, S0 Yes 8 E, S1 No
Even when intermediate species are excluded, varied behavior is observed for different combinations of enzymes and substrates being open. In this paper, we give theorems that encompass networks 1-6, proving this behavior of Pn for all n ≥ 2.
3. Substrate-Opening in the n-Site Cycle
3.1. Overview and Main Statement. As explained in Section 2.4, it is known that the 2-site double phosphorylation cycle, which we will call P2 here, admits nondegenerate multistationarity. In this section, we shall prove that for any subset E of substrate species,

10 PRANEET NANDAN, BEATRIZ PASCUAL-ESCUDERO, AND DIEGO ROJAS LA LUZ
the corresponding open network also does and that this is also the case for Pn, for any n ≥ 2:
Theorem 3.1. Consider n ≥ 2 and the network Pn
S⇌0 obtained from Pn by opening
an arbitrary subset of substrates S ⊆ {S0, . . . , Sn}. Then Pn
S⇌0 admits nondegenerate multistationarity.
This result follows by induction on n, provided by the following ingredients: Proposition 3.2 gives the base case for the induction, n = 2. Theorem 3.7 states that if Pn with a certain substrate Si ∈ {S1, . . . Sn} open admits nondegenerate multistationarity, then Pn+1 also does with the same substrate open. For Pn+1
Sn+1⇌0, we will need Remark 3.3, which
shows that if Pn
Si⇌0 has nondegenerate multistationarity, so does Pn
Sn−i⇌0. The fact that this can be extended to opening any subset S follows from the fact that, once a substrate is open, opening any other substrate does not modify the stoichiometric subspace, together with Theorem 3.4. Section 3.2 will be devoted to Theorem 3.7 and the technical lemmas needed for its proof. In the rest of this section we present the remaining results mentioned above.
Proposition 3.2. The 2-site double phosphorylation cycle with any of the substrates open, P2
S⇌0, S ∈ {S0, S1, S2} admits nondegenerate multistationarity.
The proof for P2
S1⇌0 and P2
S0⇌0 having nondegenerate multistationarity is given in
Section 3.3. To extend this for P2
S2⇌0, note that Pn
Si⇌0 is dynamically equivalent to
Pn
Sn−i⇌0 by symmetry (see Remark 3.3 below), that is, they both have the same right-hand side of the mass action differential equations with a swap in labels [JSS11]. This way we can explain the dynamical behavior of Pn+1
Sn+1⇌0 via that of Pn+1
S0⇌0. This result will also be
useful to extend the inductive step to Pn+1
Sn+1⇌0.
Remark 3.3. Pn
Si⇌0 is dynamically equivalent to Pn
Sn−i⇌0 up to species relabeling.
From Pn
Si⇌0 one can rename species as follows: exchange substrate indices to denote the
number of unphosphorylated sites, so that Si becomes Sn−i, then exchange labels of E and F , and finally exchange the names of intermediate species accordingly (ESi becomes F Sn−i). The resulting network looks like
Sn + F −↽−−⇀− F Sn −−→ . . . −↽−−⇀− F Si −−→ Si−1 + F −↽−−⇀− . . . −↽−−⇀− F S1 −−→ S0 + F
S0 + E −↽−−⇀− ES0 −−→ . . . −↽−−⇀− ESi −−→ Si+1 + E −↽−−⇀− . . . −↽−−⇀− ESn−1 −−→ Sn + E (3.1)
Sn−i −↽−−⇀− 0.
which is exactly the network Pn
Sn−i ⇌0
Once one of the substrates of P2 is open the new network has only LE and LF from (2.11). Now opening any of the other substrates does not alter these conservation laws and therefore does not change the stoichiometric subspace. This will be the case for any n. As a consequence, the following result shows that by opening any other substrate, nondegenerate multistationarity is preserved:
Theorem 3.4. [JS13, Theorem 3.1] Let G be a network, and let G ̃ be a subnetwork of G such that G and G ̃ share the same stoichiometric subspace. If G ̃ admits nondegenerate multistationarity with mass action, so does G. Moreover, G admits at least as many nondegenerate steady states in some stoichiometric compatibility class as G ̃ does.
3.2. Inductive Construction of Steady States. In what follows, we will denote by xX the concentration of species X, and by fX the corresponding species formation function. The following technical Lemmas will be necessary for the proof of Theorem 3.7:

MULTISTATIONARITY WITH INFLOWS AND OUTFLOWS 11
Lemma 3.5. Let i ∈ {0, . . . , n}, and let G = Pn
Si⇌0 be the n-site double phosphorylation
cycle, with sets of species X , as in (2.10), with the two additional reactions Si ⇌ 0. Let G ̄ be the chemical reaction network which is an extension of G as follows
S0 + E −↽−−⇀− ES0 −−→ . . . −↽−−⇀− ESi −−→ Si+1 + E −↽−−⇀− . . . −↽−−⇀− ESn−1 −−→ Sn + E −−→ Sn+1 + E
Sn+1 + F −−→ Sn + F −↽−−⇀− F Sn −−→ . . . −↽−−⇀− F Si −−→ Si−1 + F −↽−−⇀− . . . −↽−−⇀− F S1 −−→ S0 + F
Si −↽−−⇀− 0, (3.2)
If x′ is a positive steady state of the mass action system (G, κ∗), then x ̄′ defined as
x ̄′
Sn+1 = x′
Sn x′
E x′
F
(3.3)
x ̄′
X = x′
X for any X ∈ X
is a positive steady state of (G ̄,  ̄κ∗), where  ̄κ∗
y→y′ = κ∗
y→y′ for any reaction which was already in G and a ∈ R>0 appears as the reaction rate in
Sn + E −−a→ Sn+1 + E
Sn+1 + F −−a→ Sn + F.
Moreover, if x′ lies in the stoichiometric class with total amounts T = (TE, TF ), then x ̄′
lies in the stoichiometric class of G′ with total amounts T ̄ = (TE, TF )
Proof. Let dx
dt = f (κ, x) be the mass action ODE system for G and let dx ̄
dt = g( ̄κ, x ̄) be the
mass action ODE system for G ̄. Due to the nature and the rate values of the reactions added, we get:
gSn+1 ( ̄κ∗, x ̄) =ax ̄Sn x ̄E − ax ̄Sn+1 x ̄F
gSn ( ̄κ∗, x ̄) =fSn (κ∗, x ̄) − ax ̄Sn x ̄E + ax ̄Sn+1 x ̄F
gX ( ̄κ∗, x ̄) =fX (κ∗, x ̄) (for any X ∈ X \ {Sn})
Now the first part of the statement is straightforward after noting that for this x ̄′, f (κ∗, x ̄′) = 0 trivially, and substituting the values of x′
Sn+1 makes the additional terms
vanish, yielding g( ̄κ∗, x ̄′) = 0. The conservation laws do not change or add any new species,
T ̄E =
n−1
∑
i=0
x ̄′
ESi + x ̄′
E=
n−1
∑
i=0
x′ESi + x′E = TE
T ̄F =
n
∑
i=1
x ̄′
F Si + x ̄′
F=
n
∑
i=1
x′F Si + x′F = TF ,
□
Lemma 3.6. Let i ∈ {0, . . . , n}, and let G = Pn
Si⇌0 and G ̄ as in (3.5). If x′ is a
nondegenerate positive steady state of (G, κ∗), then x ̄′ defined as in Lemma 3.5 is a nondegenerate positive steady state of (G ̄,  ̄κ∗), where  ̄κ∗ is as in (3.3).
Proof. If x′ is nondegenerate, it means the right kernel of the Jacobian matrix has no intersection with the stoichiometric subspace defined by the conservation laws. We show that this implies that the right kernel of the Jacobian matrix of G ̄ at x ̄′ also has no intersection with the stoichiometric subspace of that system. Let J(x′, κ∗) be the Jacobian of G at x′, with entries
J (x′, κ∗)ij =
∂fXG
i
∂xXG
j
∣ ∣
∣x′

12 PRANEET NANDAN, BEATRIZ PASCUAL-ESCUDERO, AND DIEGO ROJAS LA LUZ
for some ordering on the species of G, XG = {X1G, X2G . . . X3Gn+3}. Without loss of generality, we may assume that X1G = Sn,X2G = E and X3G = F .
Consider now the Jacobian matrix for G ̄ at x ̄′, J(x ̄′,  ̄κ∗), with entries
J ̄(x ̄′,  ̄κ∗)ij =
∂ gX G ̄
i
∂ xX G ̄
j
∣ ∣
∣x ̄′
for some ordering on the species of G ̄, X ′ = {XG′
1 , XG′
2 . . . XG′
3n+4}. Let the ordering be
such that XG′
i = XiG for i ≤ 3n + 3, and XG′
3n+4 = Sn+1.
By the structure of g and it’s dependence on f , we can write J ̄ as
J ̄ =
[
J(3n+3)×(3n+3) + A(3n+3)×(3n+3) B(3n+3)×1
C1×(3n+3) D1×1
]
With J as defined before for G and
A=

   
−axE −axSn axSn+1 . . . 0 0 0 ... 0 0 0 ...
... ... ... 0

   
C = [ axE axSn −axSn+1 . . . ]
B=

   
axF 0 0
...

   
D = [ −axF
]
With all the non-specified entries being 0
Take a vector in the right kernel of J ̄, c, of 3n + 4 elements s.t. J ̄.c = 0 The computations for the last row (using only C and D) give
axEc1 + axSn c2 − axSn+1 c3 − axF c3n+4 = 0 (3.4)
Let c’ be a vector made up of the first 3n+3 elements of vector c and Jj. denote the jth row of J. For the first row we get
J1..c’ − axEc1 − axSn c2 + axSn+1 c3 + axF c3n+4 = 0 (3.5)
And Jj.c’ = 0 for all other rows j from 2 to 3n+3 (as matrix A and C only have 0s in these columns). Using this, and the fact that all the additional terms for the first row are also 0, we get J.c’=0. Thus c’ is a vector in the right kernel of J(x′, κ∗) whenever c is a vector in the right kernel of J ̄(x ̄′,  ̄κ∗) Now, if x′ is a nondegenerate steady state of G, then no vector y in the right kernel of
J(x′, κ∗) satisfies the conservation law equation
∑
XG
j ∈LE
yj = TE (3.6)
∑
XG
j ∈LF
yj = TF

MULTISTATIONARITY WITH INFLOWS AND OUTFLOWS 13
Since every element in the right kernel of J ̄(x ̄′,  ̄κ∗) have the first 3n + 3 elements in the right kernel of J(x′, κ∗), and those are the only species involved in the conservation laws, the nondegeneracy condition holds for G′ with x ̄′. Hence x ̄′ is a nondegenerate steady state of G ̄ □
Theorem 3.7. Let i ∈ {0, . . . , n}. If Pn
Si⇌0 admits nondegenerate multistationarity with
mass action kinetics, then Pn+1
Si⇌0 does too.
Proof. Given two distinct nondegenerate steady states, x1 and x2, of G = Pn
Si⇌0, we
get two distinct nondegenerate steady states of G ̄, x ̄1 and x ̄2 as in Theorem 3.5, from Lemmas 3.5 and 3.6.
Now we use Theorem 2.17 ([BP18, Theorem 6]), which states that if we nondegenerately add new intermediate species to a reaction network with nondegenerate multistationarity (which they call multiple positive nondegenerate equilibria, or MPNE), the new network also has nondegenerate multistationarity. For G ̄, this process on adding two intermediates, namely ESn and F Sn+1 results in the network
S0 + E −↽−−⇀− ES0 −−→ . . . −↽−−⇀− ESn−1 −−→ Sn + E −−→ ESn −−→ Sn+1 + E
Sn+1 + F −−→ F Sn+1 −−→ Sn + F −↽−−⇀− F Sn −−→ . . . −↽−−⇀− F S1 −−→ S0 + F
Si −↽−−⇀− 0, (3.7)
Also Theorem 2.18 ([BP18, Theorem 1]) implies we can add the reverse of an existing reaction and still preserve nondegenerate multistationarity (see [BP18, Remark 4.1]), hence
S0 + E −↽−−⇀− ES0 −−→ . . . −↽−−⇀− ESn−1 −−→ Sn + E −↽−−⇀− ESn −−→ Sn+1 + E
Sn+1 + F −↽−−⇀− F Sn+1 −−→ Sn + F −↽−−⇀− F Sn −−→ . . . −↽−−⇀− F S1 −−→ S0 + F
Si −↽−−⇀− 0, (3.8)
Which is just Pn+1
Si⇌0, also has nondegenerate multistationarity. □
3.3. Numerical illustration and discussion. We get the following numerical results using the Chemical Reaction Network Toolbox [FEJK18]. Take the 2 site double phosphorylation cycle with the species S0 open, with rates as follows
S0 + E 3.436
−−−⇀
↽−−−
1.718 ES0
1.718
−−−→ S1 + E 2.971
−−−⇀
↽−−−
0.316 ES1
0.316
−−−→ S2 + E
S2 + F 37.471
−−−−⇀
↽−−−−
0.316 F S2
0.316
−−−→ S1 + F 33.005
−−−−⇀
↽−−−−
1.718 F S1
1.718
−−−→ S0 + F
S0
−↽−11−⇀− 0.
This system is multistationary with two steady states, (x= {xS0 , xS1 , xS2 , xES0 , xES1 , xF S1 , xF S2 , xE , xF })
x1 = {1, 1.156, 1.018, 0.581, 3.163, 0.581, 3.163, 0.581, 0.052} and x2 = {1, 0.156, 0.018, 1.581, 1.163, 1.581, 1.163, 1.581, 1.052}, which are two nonzero, nondegenerate steady states. By symmetry (see Remark 3.3), the 2-site phosphorylation cycle with S2 open is also multi-stationary with nondegenerate steady states.
Take the 2-site double phosphorylation cycle with the species S1 open, with rates as follows

14 PRANEET NANDAN, BEATRIZ PASCUAL-ESCUDERO, AND DIEGO ROJAS LA LUZ
S0 + E 68.609
−−−−⇀
↽−−−−
7.297 ES0
7.297
−−−→ S1 + E 79.347
−−−−⇀
↽−−−−
39.673 ES1
39.673
−−−−→ S2 + E
S2 + F 186.499
−−−−−⇀
↽−−−−−
19.836 F S2
19.836
−−−−→ S1 + F 29.19
−−−−⇀
↽−−−−
14.595 F S1
14.595
−−−−→ S0 + F
S1
−↽−11−⇀− 0.
This system is multistationary with two nondegenerate steady state concentrations, (x= {xS0 , xS1 , xS2 , xES0 , xES1 , xF S1 , xF S2 , xE , xF })
x1 = {1.156, 1, 0.156, 0.137, 0.025, 0.068, 0.05, 0.025, 0.068} and x2 = {0.156, 1, 1.156, 0.05, 0.068, 0.025, 0.137, 0.068, 0.025}
With this base case, we can prove Theorem 3.1, which implies that for any length of the Double phosphorylation cycle, the substrates travelling in and out of the system do not disrupt the multistable behaviour of the cycle. They are free to participate in other reactions, which is important considering the substrates are often phosphorylated for use in different processes, for example, in cascades ([HR16]), displaying the robustness of the system.
4. Enzyme-Opening and monostationarity
In contrast to what happens with the n-site double phosphorylation cycle when opening a set of substrates, when opening a set of enzymes its capacity for multistationarity is lost, and the network becomes monostationary. The strategy folloed to prove this is based on the network modifications defined in Section 2.2. This is also the case for other networks, such as phosphorylation cascades, like the MAPK cascade (see Section 4.4). Along this section we present the tools that allow us to prove this-
 for the two networks mentioned, which can also be applied to further ones of similar structure. Section 4.1 presents the main result and Section 4.2 the tools to prove it. Section 4.3 and Section 4.4 are devoted to the application of these to the n-site double phosphorylation network and phosphorylation cascades respectively.
4.1. Overview and main statement.
Theorem 4.1. Let G = (X , C, R) be a network and let E ⊂ X be a set of independently conserved species. If G−E has at most l steady states, then GE⇌0 also has at most l steady states. In particular, if G−E is monostationary, then GE⇌0 is monostationary. This is the case if G−E is (at most) monomolecular.
A preliminary step in the proof requires noting that when opening a set of independently conserved species (see Definition 2.8) in a network, the corresponding open network has Absolute Concentration Robustness (ACR) on all those species, that is, for each of them there is a fixed value at positive steady state (see [SF10] ans Section 4.2). This will be the content of Theorem 4.3. A second step involves proving that when projecting GE⇌0 over X \ E the number of positive steady states of the projec-
ted network is at least that of GE⇌0. Therefore, if GE⇌0 admits multistationarity, so does (GE⇌0)−E = G−E or, equivalently, if the later is monostationary so is GE⇌0. As a consequence, detecting monostationarity for a network with less species will allow us to ensure monostationarity for a bigger network, as long as the species removed are independently conserved. This will give us a way to, for example, prove monostationarity of the semi-open extension of the n-site phosphorylation cycle where th-
e open species are

MULTISTATIONARITY WITH INFLOWS AND OUTFLOWS 15
the two enzymes (Section 4.3). The same will be possible for phosphorylation cascades, like the MAPK cascade (Section 4.4).
4.2. ACR, projection and inheritance. We will say that a reaction network has Absolute Concentration Robustness (ACR) in a certain species X ∈ X for a certain choice of kinetics, in the sense of [SF10], if the concentration of X at positive steady state is constant with this choice of kinetics, independently of the stoichiometric compatibility class, provided that there is some positive steady state. We will be considering our networks with mass action kinetics, as we have done up until now. Still-
, this property or the constant may depend on the specific reaction rates. We will say that the network has ACR if it does for all reaction rates for which there is some positive steady state. The property of ACR confers a network a strong robustness against perturbations, as the concentration of the species under consideration will always return to the same stationary value. Moreover, this value does not depend on the initial concentrations. In this work, we will use the property of ACR as a tool-
 to guarantee monostationarity. In order to present our results about ACR, we need the following Lemma that will allow us to establish a connection between the possible steady state concentrations of species that are independently conserved in a network via a subnetwork.
Lemma 4.2 (Steady-State Projection). Let G = (X , C, R) be a network and let E ⊂ X be a set of independently conserved species. Let H = (E, C′, R′) be any other network with E as its set of species. If z ∈ Rn>0 is a steady state of G ∪ H, then its projection zE (Definition 2.12) is a steady state of H.
Proof. Let us assume, without loss of generality, that E = {Xi}i=1,...,k and write dx
dt = f G(x)
and dx ̃
dt = f H (x ̃) for the mass action ODE systems for G and H respectively, where
x = (x1, . . . , xn) and x ̃ = (x1, . . . , xk). Then the mass action system dx
dt = f G∪H (x) for
G ∪ H is given by
dxi
dt =f G
i (x1, . . . , xn) + f H
i (x1, . . . , xk) for i = 1, . . . , k
dxi
dt =f G
i (x1, . . . , xn) for i = k + 1, . . . , n
By hypothesis, there exist wij ∈ R for i = 1, . . . , k, j = 1, . . . , n that gives a linear dependency relation among the polynomials fjG for each j = 1, . . . , n. Moreover, the wij can be chosen in a way so that the k × k-matrix Wk = (wij)i,j∈{1,...,k} is invertible (see Remark 2.10):
n
∑
j=1
wij f G
j (x1, . . . , xn) = 0. (4.1)
Let z = (z1, . . . , zn) be a positive steady state of G ∪ H, then for i = 1, . . . , k,
0=
n
∑
j=1
wij f G∪H
j (z1, . . . , zn)
=
n
∑
j=1
wij f G
j (z1, . . . , zn) +
k
∑
j=1
wij f H
j (z1, . . . , zk) (4.2)
=
k
∑
j=1
wij f H
j (z1, . . . , zk)

16 PRANEET NANDAN, BEATRIZ PASCUAL-ESCUDERO, AND DIEGO ROJAS LA LUZ
But, as Wk is invertible, this implies that
f H (z1, . . . , zk) = 0 (4.3)
so (z1, . . . , zk) is a steady state of H. □
The following is a direct consequence of the lemma. Note that it slightly expands [Tor19, Theorem 27].
Theorem 4.3 (ACR Emergence under Opening). Let G = (X , C, R) be a network and let E ⊂ X be a set of independently conserved species. Then GE⇌0 has ACR in all species of
E with values xE = κ0→E
κE→0 for E ∈ E .
More generally, if we open partially the species of E, then:
• if for any E ∈ E we have 0 −−→ E but no E −−→ 0, then there are no steady states for the resulting network, • if for any E we have E −−→ 0 but no 0 −−→ E then there can only be boundary steady states (with xE = 0).
Proof. Consider H = {E −−⇀
↽−− 0 : E ∈ E} so that GE⇌0 = G ∪ H. It is easy to check that H has a unique steady state z, with zE = κ0→E/κE→0 for each E ∈ E. Thus, by Lemma 4.2, for any steady state x ∈ Rn>0 of GE⇌0 we have that xE = κ0→E/κE→0 for each E ∈ E, so GE⇌0 has ACR in all species of E.
Consider now a subnetwork H′ ⊂ H. If 0 −−→ E ∈ H′ but E −−→ 0 ∈/ H′ for any species E ∈ E, then H′ has no steady states, and thus by Lemma 4.2, G ∪ H′ has no steady states. Similarly, if E −−→ 0 ∈ H′ but 0 −−→ E ∈/ H′, then H′ can only have boundary steady states with xE = 0, thus G ∪ H′ can only have boundary states with zE = 0. □
Example 4.4. Consider G given by (2.1) as in Example 2.3. Note that it has a conservation law given by the conservation of mass, that is, the total amount of X plus Y plus Z is conserved. Thus, E = {Z} is independently conserved, and by Theorem 4.3, GZ⇌0 has ACR in Z, with value xZ = κ0→Z /κZ→0. Note also that GZ⇌0 doesn’t have further (linearly independent) any conservation laws.
X
Y
Z
2Z
Y+Z
0
GZ⇌0
H (4.4)
Lemma 4.5 (ACR-Reduction). Let G = (X , R, C) be a network having ACR in a subset E ⊂ X of species such that no species in E is involved in any conservation law. If G has l positive steady states in some stoichiometric class, then the projection G−E of G onto X \E has at least l positive steady states in some stoichiometric class.
Proof. Without loss of generality, it is enough to show the statement is true when E only has one species (and iterate the procedure otherwise). Specifically, suppose that E = {X1} and G has ACR in X1. Consider the modification G−X1 given by removing the species X1. Suppose also that G has l positive steady states in some stoichiometric class. We want to show that G−X1 also does.

MULTISTATIONARITY WITH INFLOWS AND OUTFLOWS 17
Let a be the ACR value of X1 in G, i.e., any positive steady state z = (z1, . . . , zn) of G satisfies z1 = a. We will show that for a given choice of reaction rates κ∗ for G−X1, there is an injection between the steady states of G in a certain stoichiometric class and the steady states of G−X1 in a certain stoichiometric class of the latter.
Given a choice κ∗ of reaction rates on G−X1, let us write the associated mass action ODE system for G−X1 as
dxi
dt = f ̃i(x2, . . . , xn)
=
∑
y ̃→y ̃′∈R ̃
κ′
y ̃→y ̃′ xy ̃2
2 · · · xyn ̃n (y ̃′
i − y ̃i)
for i = 2, . . . , n, where R ̃ is the set of reactions for G−X1. Note that by construction
any reaction (y2, . . . , yn) −−→ (y′2, . . . , y′n) in G−X1 arises from a reaction (y1, . . . , yn) −−→
(y′1, . . . , y′n) in G where the species X1 was removed. Even more, when seen as an E-graph, we can think of the vertices and edges (complexes and reactions) of G−X1 as a projection via π : R|X | −→ R|X \E| of the vertices and edges of G onto the coordinates i = 2, . . . , n. Note also that any reaction in G projects onto one of G−X1, although several reactions in G can be mapped to the same one. Hence one can rewrite for G the function fi as
fi(x) = ∑
y→y′∈R
κy→y′ xy1
1 xy2
2 · · · xynn (y′
i − yi)
=
∑
y ̃→y ̃′∈R ̃
∑
y→y′∈R:π(y)=y ̃,π(y′)=y ̃′
κy→y′ xy1
1 xy2
2 · · · xynn (y′
i − yi)
=
∑
y ̃→y ̃′∈R ̃


∑
y→y′∈R:π(y)=y ̃,π(y′)=y ̃′
κy→y′ xy1
1

 xy ̃2
2 · · · xyn ̃n (y ̃′
i − y ̃i)
for i = 2, . . . , n, where π((y1, . . . , yn)) = (y2, . . . , yn) is the projection over the coordinates i = 2, . . . , n.
Now any positive steady state z = (a, z2, . . . , zn) of G satisfies:
fi(z) = ∑
y ̃→y ̃′∈R ̃


∑
y→y′∈R:π(y)=y ̃,π(y′)=y ̃′
κy→y′ ay1

 zy ̃2
2 · · · zny ̃n (y ̃′
i − y ̃i) = 0
for i = 2, . . . , n. But then, any such z satisfies
0= ∑
y ̃→y ̃′∈R ̃
κ ̃∗y ̃→y ̃′ zy ̃2
2 · · · zny ̃n (y ̃′
i − y ̃i) = f ′
i (z2, . . . , zn)
for i = 2, . . . , n, with the rates
κ ̃∗y ̃→y ̃′ = ∑
y→y′∈R:π(y)=y ̃,π(y′)=y ̃′
κy→y′ ay1 , (4.5)
and is therefore a positive steady state of G−X1. Finally, recall from Remark 2.14 that the stoichiometric subspace im Γ−X1 of G−X1 is just the projection of the stoichiometric subspace im Γ of G. Now, suppose that G has l different steady states zj = (a, zj
2, . . . , zjn), j = 1, . . . , l for
some κ∗ in the same stoichiometric compatibility class. Then, these give rise to l different steady states z ̃j = (zj
2, . . . , zjn) of G−X1 for κ ̃∗ obtained from κ∗ and a as in (4.5), which will also be in the same compatibility class of G−X1: indeed, for any j, k ∈ {1, . . . , l},
j ̸= k, as zj and zk are in the same compatibility class, by Remark 2.6 we have that zk −zj = (0, z2k −zj
2, . . . , znk −zjn) ∈ im Γ. But then z ̃k −z ̃j = (z2k −zj
2, . . . , znk −zjn) ∈ im Γ−X1
the stoichiometric subspace of G−X1, thus proving that all projected steady states z ̃j are

18 PRANEET NANDAN, BEATRIZ PASCUAL-ESCUDERO, AND DIEGO ROJAS LA LUZ
in the same compatibility class. Thus, G−X1 has l different steady states in the same
compatibility class for some choice of reaction rates κ ̃∗. □
Example 4.6. Consider G given by (2.3). We will prove that GZ⇌0 (see (4.4)) is monostationary by using the previous results and showing that G−Z is monostationary, thus exemplifying Theorem 4.1. As we saw in Example 4.4, GZ⇌0 has ACR in Z, and there are no conservation laws, thus we can apply Lemma 4.5 to GZ⇌0. Note that (GZ⇌0)−Z gives:
Y −−→ X −−→ 0,
0 −−→ Y. (4.6)
which is the same reaction network as G−Z (see (2.8)) as shown in Example 2.15. Because G−Z is monomolecular, it has deficiency zero and thus it is monostationary (as shown in Remark 2.21). Moreover, as it is weakly reversible and has no conservation laws, there is a unique steady state (see Theorem 2.20). Thus, Lemma 4.5 implies that GZ⇌0 is monostationary too.
The proof of Theorem 4.1 now follows from taking GE⇌0 in Lemma 4.5, as Theorem 4.3 guarantees that the hypotheses are satisfied. The last statement is a consequence of Remark 2.21. Consider G and H satisfying the conditions of Lemma 4.2, that is, G = (X , C, R), E ⊂ X set of independently conserved species, and H = (E, C′, R′). Then, more generally, by Lemma 4.2 and Lemma 4.5 we see that if G−E has at most l steady states and H has a unique steady state, then G ∪ H also has at most l steady states-
. This is because (G ∪ H)−E = G−E . In summary, we have the following proposition:
Proposition 4.7. Let G = (X , C, R) be a network and let E = {Ei}i=1,...,k ⊂ X be a set of independently conserved species. Let H = (E, C′, R′) be a network with E as its set of species such that it has a unique steady state. If G−E has at most l steady states, then G ∪ H also has at most l steady states.
4.3. Application to the n-site double phosphorylation cycle.
Theorem 4.8. The n-site double phosphorylation cycle (2.10) with the enzymes E = {E, F } open, Pn
E⇌0, is monostationary.
Proof. First, note that E and F are independently conserved in Pn. Indeed, E is in conservation law LE but not LF (see (2.11)), and similarly F is in law LF but not LE. Now consider the network Pn
−{E,F }. Our goal is to prove that Pn
−{E,F } is monostationary.
Note that any bimolecular complex in G has either the species E or F on it, so Pn
−{E,F }
will be monomolecular. Thus the number of complexes |C| equals the number of species after removing E and F , which is 3n + 1 in this case. Note also that Pn
−{E,F } is weakly reversible with one connected component, as there is a cycle that goes through every complex at least once:
ES0 ES1 . . . ESn−1
S0 S1 S2 . . . Sn−1 Sn
F S1 F S2 . . . F Sn

MULTISTATIONARITY WITH INFLOWS AND OUTFLOWS 19
so l = 1. Finally, the dimension of the stoichiometric subspace is dim(im Γ) = ker(W ) = 3n, as there are 3n + 1 species and only one conservation law remaining. Thus, the deficiency of Pn
−{E,F } is δ = |C| − l − dim(im Γ) = 3n + 1 − 1 − 3n = 0, and by the Deficiency
Zero Theorem (Theorem 2.20), Pn
−{E,F } is monostationary. Thus, by Theorem 4.1, so is
Pn
{E,F }⇌0. □
Remark 4.9. A similar proof shows that opening E = {E, F, Si} for any i is also monostationary, using the third conservation law. Indeed, in this case the number of species decreases by one, to 3n, the number of conservation laws decreases to 0, and the number of complexes stays the same, 3n + 1, as the complex for Si is lost, but we get a new complex for 0. Thus, the deficiency still is δ = 3n + 1 − 1 − 3n = 0. As for the latter the stoichiometric subspace is already the whole space, the same wil-
l be true if E is given by both enzymes and any subset of substrates, due to Theorem 3.4.
Remark 4.10. Note that this proof still works independently of the number or structure of the intermediates. We could remove intermediates in some steps, add intermediates in others. This will work as long as intermediates appear only once. Otherwise the method could still work, but it would require a more careful consideration.
Remark 4.11. It is not clear from any theoretical development what would happen to P2
E⇌0 with more complicated choices of E. For example, from numerical computations we know that if E = {E, S1} of E = {E, S1, S2} the network is monostationary, while for E = {E, S0} or even E = {E, S0, S1} it admits multistationarity. The results here are also not enough to prove any of these cases.
In Section 4.2 we introduced the property of ACR in a species. It comes as a consequence of Theorem 4.3 that the n-site double phosphorylation cycle gains ACR in any enzyme when that enzyme is open:
Corollary 4.12. Let n ≥ 1 and let E be any subset of enzymes. Then Pn
E⇌0 has ACR in all species of E.
This is a direct application of Theorem 4.3, since the enzymes are independently conserved in Pn.
4.4. Extension to cascade networks. This approach can be greatly generalized to work on cascade-type networks. These networks have species that act as both substrates and enzymes in different reactions. For example, consider the following simple cascade diagram:
W W∗
Z Z∗
E1
E2
E3
Which gives the reaction network G given by
W + E1 −↽−−⇀− W E1 −−→ W ∗ + E1
W ∗ + E2 −↽−−⇀− W ∗E2 −−→ W + E2
Z + W ∗ −↽−−⇀− ZW ∗ −−→ Z∗ + W ∗
Z∗ + E3 −↽−−⇀− Z∗E3 −−→ Z + E3
(4.7)

20 PRANEET NANDAN, BEATRIZ PASCUAL-ESCUDERO, AND DIEGO ROJAS LA LUZ
There are 5 independent conservation laws:
LE1 : xE1 + xW E1 = TE1
LE2 : xE2 + xW ∗E2 = TE2
LE3 : xE3 + xZ∗E3 = TE3 (4.8)
LW : xW + xW E1 + xW ∗ + xW ∗E2 + xZW ∗ = TW
LZ : xZ + xZW ∗ + xZ∗ = xZ∗E3 = TZ
where T = (TE1, TE2, TE3, TW , TZ ) takes values in R5>0.
Proposition 4.13. The cascade network G (Eq. (4.7)), with the enzymes E = {E1, E2, E3, W ∗} open, GE⇌0, is monostationary.
Proof. Note that E is independently conserved, as each enzyme shows up in exactly one of the conservation laws TE1, TE2, TE3, TW . The goal then is to prove that G−E is monostationary. But the resulting network is
W E1 ZW ∗
W 0 Z Z∗
W ∗E2 Z∗E3
which has deficiency δ = |C|−l−dim im Γ−E = 8−2−(7−1) = 0, where dim im Γ−E = 7−1 as there are 7 species and one conservation law left. Then, by Theorem 2.20, G− E is monostationary, and by Theorem 4.1, so is GE⇌0. □
To showcase how our method can be used to study more biologically meaningful networks, we will use the example of the mitogen-activated protein kinase (MAPK) cascade. The MAPK cascade (Fig. 1) is a heavily studied network that models multiple biological behaviors in cells. The model was first developed by [HF96], who showed that the cascade may exhibit ultrasensitive behavior, and thus it is a good candidate for switch-like processes like mitogenesis or cell-fate determination. The model has been -
numerically shown to exhibit bistability and oscillatory behavior [QNKS07, FM98, Kho00], and proven in [BP18] to exhibit nondegenerate multistationarity. Here we will show how our results prove that when opening all species acting like enzymes the network becomes monostationary. As in [BP18], we use the following abbreviations for readability reasons of the reaction networks: X = MAPK, Y = MKK, Z = MKKK. We call the MAPK network M1 (Fig. 1). This is a network with 22 species and 30 reactions, whic-
h is represented by the following reactions:
E1 + Z −↽−−⇀− E1Z −−→ E1 + ZP , F1 + ZP −↽−−⇀− F1ZP −−→ F1 + Z,
ZP + Y −↽−−⇀− ZP Y −−→ ZP + YP −↽−−⇀− ZP YP −−→ ZP + YP P ,
F2 + YP P −↽−−⇀− F2YP P −−→ F2 + YP −↽−−⇀− F2YP −−→ F2 + Y,
YP P + X −↽−−⇀− YP P X −−→ YP P + XP −↽−−⇀− YP P XP −−→ YP P + XP P ,
F3 + XP P −↽−−⇀− F3XP P −−→ F3 + XP −↽−−⇀− F3XP −−→ F3 + X.
(4.9)
Proposition 4.14. Let M1
E⇌0 be the network obtained from the MAPK cascade, M1
(Eq. (4.9)) by opening the species E = {F1, F2, F3, E1, ZP , YP P }. Then M1
E⇌0 is monostationary.

MULTISTATIONARITY WITH INFLOWS AND OUTFLOWS 21
Figure 1. The MAPK cascade network
Proof. Note that M1 has 7 concentration laws, for the total amounts of X, Y, Z, E1, F1, F2, F3, and that the set of the species behaving like enzymes, E = {F1, F2, F3, E1, ZP , YP P } is independently conserved in M1. Thus, by Theorem 4.1, it is enough to prove that the projected network M1
−E = (M1
E⇌0)−E is monostationary to show that so is M1
E⇌0. Then
M1
−E is given by:
E1Z ZP YP ZP Y
Z 0 YP Y
F1ZP F2YP P F2YP
YP P X YP P XP
X XP XP P
F3XP F3XP P
which has deficiency δ = |C|−l−dim im Γ−E = 17−2−(16−1) = 0, where dim im Γ−E = 16 − 1 as there are 16 species and one conservation law left. Then, by Theorem 2.20, M1
−E
is monostationary and, by Theorem 4.1, so is M1
E⇌0. □
5. Discussion and Future Work
Our results give a compact, structural picture of how semi-opening a phosphorylation–dephosphorylation cycle reshapes its steady-state landscape. Working under mass action kinetics we show that these networks are remarkably asymmetric with respect to which species are allowed to exchange with an external reservoir: permitting any nonempty set of substrates to flow in and out preserves the network’s capacity for (nondegenerate) multistationarity, while permitting the enzymes to flow (even when some-
 substrates are

22 PRANEET NANDAN, BEATRIZ PASCUAL-ESCUDERO, AND DIEGO ROJAS LA LUZ
also opened) destroys that capacity and yields a monostationary system. The two claims are proved by different but complementary means. The substrate result is constructive: steady states and their nondegeneracy extend inductively as phosphorylation sites are added, so adding more phosphorylation sites does not remove the algebraic mechanism by which multiple positive equilibria arise, even when some (or all) substrates are open. By contrast, the enzyme result is structural: opening an independent-
ly conserved enzyme subsystem produces ACR in those species, and a projection over the remaining species often reduces the dynamics to a monostationary core (for example a monomolecular, weakly reversible projection where we can apply deficiency-zero arguments). Thus ACR detection together with projection gives a simple criterion (Theorem 4.1) that explains why enzyme exchange acts as a robust “switch” from multistationarity to uniqueness of equilibrium. As an additional result we obtain here that-
 the processive n-site double phosphorylation cycle with both enzymes open has ACR in these, so there is certain robustness in their concentration too. Biologically, this dichotomy has an intuitive interpretation. Substrates are the carriers of modification states and can be coupled to downstream processes without losing their ability to support multiple steady states; their exchange models consumption, synthesis, or wiring to other pathways, and so preserves the cycle’s switching potential. Enzym-
es, on the other hand, are the scarce, conserved mediators whose conservation and reuse create the competition that produces multiple steady states; allowing enzymes to be replenished or removed from the local system breaks that conservation and collapses the mechanism for multistationarity. This perspective complements and sharpens earlier observations about fully open networks and entrapped species: it identifies which classes of species matter most for switching and why. The paper also contribu-
tes methodological tools of independent interest. The inductive construction for extending steady states across sites is elementary and broadly applicable to multisite motifs; the ACR-plus-projection reduction ties robustness properties of a small, open subsystem to global conclusions via classical network theorems. These tools are relatively easy to check in enzyme-centric architectures and thus provide a practical route to diagnose when semi-open modifications will preserve or eliminate multista-
tionarity. In short, by isolating the different roles of substrates and enzymes and by connecting ACR and projection to classical deficiency arguments, this work provides a compact, testable explanation for when environmental exchange preserves biochemical switching and when it enforces unique steady states, a distinction with direct implications for modeling, experimental design, and synthetic circuit engineering. This work has clear limitations: our hypotheses include an independent-conservation-
 condition for the open enzymes, and all results are proven with limited claims about stability. Future work will aim at combining our structural results with bifurcation and stability analyses. But first we will explore the general use of these tools in future work and apply the framework to larger cascade and phosphorylation families and experimentally grounded models. We will also study how to best use these new tools together with the extensive tools already found in the literature in the more-
 general context of embedded networks and inheritance results.
Acknowledgments
We acknowledge the Max Planck Institute for the Mathematical Sciences in Leipzig, Germany as well as the Simons Laufer Mathematical Sciences Institute for funding and organizing the MSRI-MPI Leipzig Summer Graduate School on Algebraic Methods for Biochemical Reaction Networks in June 2023, where the initial steps of this research were taken, as well as the instructors of the school for suggesting these questions.

MULTISTATIONARITY WITH INFLOWS AND OUTFLOWS 23
PN would like to thank Dr. Philippe Nghe for constructive discussion and funding through Grant ERC AbioEvo (101002075). BP-E has been funded by the Spanish Ministry of Economy project with reference number PID2022-138916NB-I00. DR was supported in part by the Fulbright Program.
References
[And11] David Anderson. A proof of the global attractor conjecture in the single linkage class case. SIAM Journal on Applied Mathematics, 71, 01 2011.
[AS06] David Angeli and Eduardo D. Sontag. Translation-invariant monotone systems, and a global convergence result for enzymatic futile cycles. Nonlinear Analysis Real World Applications, 9(1):128–140, 11 2006. [BBK+06] William J. Blake, Gábor Balázsi, Michael A. Kohanski, Farren J. Isaacs, Kevin F. Murphy, Yina Kuang, Charles R. Cantor, David R. Walt, and James J. Collins. Phenotypic consequences of Promoter-Mediated transcriptional noise. Molecular Cell, 24(6):853–865, 12 2006. [BCP21] Alessandr-
o Borri, Francesco Carravetta, and Pasquale Palumbo. The double Phospho/Dephosphorylation cycle as a benchmark to validate an effective Taylor Series method to integrate ordinary differential equations. Symmetry, 13(9):1684, 9 2021. [BDG20] Frédéric Bihan, Alicia Dickenstein, and Magalí Giaroli. Lower bounds for positive roots and regions of multistationarity in chemical reaction networks. Journal of Algebra, 542:367–411, 2020. [BFF92] Richard J. Bagley, J. Doyne Farmer, and Walter Fontana. Evolut-
ion of a metabolism. Artificial life II, 10:141–158, 1992. [BMC+04] Nathalie Q. Balaban, Jack Merrin, Remy Chait, Lukasz Kowalik, and Stanislas Leibler. Bacterial persistence as a phenotypic switch. Science, 305(5690):1622–1625, 8 2004. [BP18] Murad Banaji and Casian Pantea. The inheritance of nondegenerate multistationarity in chemical reaction networks. SIAM Journal on Applied Mathematics, 78(2):1105–1130, 2018. [CDJS+20] Gheorghe Craciun, Matthew D. Johnston, Gábor Szederkényi, Elisa Tonello, J-
ános Tóth, and Polly Y. Yu. Realizations of kinetic differential equations. Mathematical Biosciences and Engineering, 17(1):862–892, 2020. [CF06] Gheorghe Craciun and Martin Feinberg. Multiple equilibria in complex chemical reaction networks: extensions to entrapped species models. IEE Proc.-Syst. Biol., 153(4), 2006. [CF10] Gheorghe Craciun and Martin Feinberg. Multiple equilibria in complex chemical reaction networks: Semiopen mass action systems. SIAM Journal on Applied Mathematics, 70(6):18591-
877, 2010. [CFW20] Daniele Cappelletti, Elisenda Feliu, and Carsten Wiuf. Addition of flow reactions preserving multistationarity and bistability. Mathematical biosciences, 320:108295, 2 2020. [CIT19] Carsten Conradi, Alexandru Iosif, and Kahle Thomas. Multistationarity in the space of total concentrations for systems that admit a monomial parametrization. Bulletin of Mathematical Biology, 81, 2019. [CJY23] Gheorghe Craciun, Jiaxin Jin, and Polly Y. Yu. An algorithm for finding weakly reversible d-
eficiency zero realizations of polynomial dynamical systems. SIAM Journal on Applied Mathematics, 83(4):1717–1737, 2023. [Cra19] Gheorghe Craciun. Polynomial dynamical systems, reaction networks, and toric differential inclusions. SIAM Journal on Applied Algebra and Geometry, 3(1):87–106, 2019.
[CS15] Carsten Conradi and Anne Shiu. A global convergence result for processive multisite phosphorylation systems. Bulletin of Mathematical Biology, 77(1):126–155, 2015. [Fei72] Martin Feinberg. Complex balancing in general kinetic systems. Archive for rational mechanics and analysis, 49(3):187–194, 1972. [Fei87] Martin Feinberg. Chemical reaction network structure and the stability of complex isothermal reactors—i. the deficiency zero and deficiency one theorems. Chemical Engineering Science, 42-
(10):2229–2268, 1987. [FEJK18] Martin Feinberg, Phillipp Ellison, Haixia Ji, and Daniel Knight. The chemical reaction network toolbox, windows version, November 2018. [FH74] Martin Feinberg and Fritz Horn. Dynamics of open chemical systems and the algebraic structure of the underlying reaction network. Chemical Engineering Science, 29(3):775–787, 1974. [FM98] James E. Ferrell and Eric M. Machleder. The biochemical basis of an all-or-none cell fate switch in xenopus oocytes. Science, 280(5365):895–-
898, May 1998.

24 PRANEET NANDAN, BEATRIZ PASCUAL-ESCUDERO, AND DIEGO ROJAS LA LUZ
[FRW20] Elisenda Feliu, Alan D Rendall, and Carsten Wiuf. A proof of unlimited multistability for phosphorylation cycles. Nonlinearity, 33(11):5629–5658, 9 2020. [Gun05] Jeremy Gunawardena. Multisite protein phosphorylation makes a good threshold but can be a poor switch. Proceedings of the National Academy of Sciences, 102(41):14617–14622, 9 2005. [HF96] Chi-Ying F. Huang and James E. Ferrell. Ultrasensitivity in the mitogen-activated protein kinase cascade. Proceedings of the National Academy of-
 Sciences, 93(19):10078–10083, 1996. [Hor72] Fritz Horn. Necessary and sufficient conditions for complex balancing in chemical kinetics. Archive for Rational Mechanics and Analysis, 49(3):172–186, 1972.
[HR16] Juliette Hell and Alan D. Rendall. Sustained oscillations in the MAP kinase cascade. Mathematical Biosciences, 282:162–173, 10 2016. [JS04] Gail V. W. Johnson and William H. Stoothoff. Tau phosphorylation in neuronal cell function and dysfunction. Journal of Cell Science, 117(24):5721–5729, 11 2004. [JS13] Badal Joshi and Anne Shiu. Atoms of multistationarity in chemical reaction networks. J. Math. Chem., 51(1):153–178, 2013. [JSS11] Matthew Johnston, David Siegel, and Gabor Szederkenyi. Dy-
namical equivalence and linear conjugacy of chemical reaction networks: New results and methods. Match, 68, 11 2011. [Kho00] Boris N. Kholodenko. Negative feedback and ultrasensitivity can bring about oscillations in the mitogen-activated protein kinase cascades. European Journal of Biochemistry, 267(6):1583–1588, March 2000. [KUKY06] Akiko Kashiwagi, Itaru Urabe, Kunihiko Kaneko, and Tetsuya Yomo. Adaptive response of a gene network to environmental changes by Fitness-Induced attractor selection.-
 PLoS ONE, 1(1):e49, 12 2006. [LK99] Michel Laurent and Nicolas Kellershohn. Multistability: a major means of differentiation and evolution in biological systems. Trends in Biochemical Sciences, 24(11):418–422, 11 1999. [OTL+04] Ertugrul M. Ozbudak, Mukund Thattai, Han N. Lim, Boris I. Shraiman, and Alexander Van Oudenaarden. Multistability in the lactose utilization network of Escherichia coli. Nature, 427(6976):737–740, 2 2004. [Pan12] Casian Pantea. On the persistence and global stability of ma-
ss-action systems. SIAM Journal on Mathematical Analysis, 44(3):1636–1673, 2012.
[QNKS07] Liang Qiao, Robert B Nachbar, Ioannis G Kevrekidis, and Stanislav Y Shvartsman. Bistability and oscillations in the huang-ferrell model of mapk signaling. PLoS Computational Biology, 3(9):e184, September 2007. [SF10] Guy Shinar and Martin Feinberg. Structural sources of robustness in biochemical reaction networks. Science, 327(5971):1389–1391, 2010. [SH06] Carlos Salazar and Thomas Höfer. Competition effects shape the response sensitivity and kinetics of phosphorylation cycles in cell sig-
naling. Annals of the New York Academy of Sciences, 1091(1):517–530, 12 2006. [TG09] Matthew Thomson and Jeremy Gunawardena. Unlimited multistability in multisite phosphorylation systems. Nature, 460(7252):274–277, 6 2009.
[Tor19] Angélica Torres. Algebraic methods for bistability and oscillations in reaction networks. PhD thesis, University of Copenhagen, 2019. [VAME10] Paolo Visco, Rosalind J. Allen, Satya N. Majumdar, and Martin R. Evans. Switching and growth for microbial populations in catastrophic responsive environments. Biophysical Journal, 98(7):1099–1108, 4 2010. [WF13] Carsten Wiuf and Elisenda Feliu. Power-law kinetics and determinant criteria for the preclusion of multistationarity in networks of intera-
cting species. SIAM Journal on Applied Dynamical Systems, 12(4):1685–1721, 2013. [WS08] Liming Wang and Eduardo D. Sontag. On the number of steady states in a multiple futile cycle. J. Math. Biol., 57:29–52, 2008. [XF03] Wen Xiong and James E. Ferrell. A positive-feedback-based bistable ‘memory module’ that governs a cell fate decision. Nature, 426(6965):460–465, 11 2003. [YSE25] Shenghao Yao, AmirHosein Sadeghimanesh, and Matthew England. Understanding multistationarity of fully open reaction net-
works. Bulletin of Mathematical Biology, 87(176), 2025.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:24.382Z
- **Text Length:** 70640 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 24 of 24
