# PDF Document: Kroer and Peters - 2025 - Computing Lindahl Equilibrium for Public Goods with and without Funding Caps.pdf

**File Path:** Kroer and Peters - 2025 - Computing Lindahl Equilibrium for Public Goods with and without Funding Caps.pdf

**Processed Date:** 2026-02-10T18:15:55.488Z

**File Size:** 852.37 KB

**Total Pages:** 32

**Extracted Pages:** 32

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2791

**Title:** Computing Lindahl Equilibrium for Public Goods with and without Funding Caps

**Collection:** Large Files

---

## Extracted Text Content

Computing Lindahl Equilibrium for Public Goods with and without Funding Caps
CHRISTIAN KROER, Columbia University, ck2945@columbia.edu DOMINIK PETERS, CNRS, Université Paris Dauphine - PSL, dominik.peters@lamsade.dauphine.fr
Lindahl equilibrium is a solution concept for allocating a fixed budget across several divisible public goods. It always lies in the core, meaning that the equilibrium allocation satisfies desirable stability and proportional fairness properties. We consider a model where agents have separable linear utility functions over the public goods, and the output assigns to each good an amount of spending, summing to at most the available budget. In the uncapped setting, each of the public goods can absor-
b any amount of funding. In this case, it is known that Lindahl equilibrium is equivalent to maximizing Nash social welfare, and this allocation can be computed by a public-goods variant of the proportional response dynamics. We introduce a new convex programming formulation for computing this solution and show that it is related to Nash welfare maximization through duality and reformulation. We then show that the proportional response dynamics is equivalent to running mirror descent on our new fo-
rmulation, thereby providing a new and very immediate proof of the convergence guarantee for the dynamics. Our new formulation has similarities to Shmyrev’s convex program for Fisher market equilibrium. In the capped setting, each public good has an upper bound on the amount of funding it can receive, which is a type of constraint that appears in fractional committee selection and participatory budgeting. In this setting, existence of Lindahl equilibrium was only known via fixed-point arguments. T-
he existence of an efficient algorithm computing one has been a long-standing open question. We prove that our new convex program continues to work when the cap constraints are added, and its optimal solutions are Lindahl equilibria. Thus, we establish that Lindahl equilibrium can be efficiently computed in the capped setting. Our result also implies that approximately core-stable allocations can be efficiently computed for the class of separable piecewise-linear concave (SPLC) utilities.
Contents
1 Introduction 2 1.1 Contributions 3 1.2 Related Work 5 2 Setup 6 2.1 Lindahl Equilibrium 6 2.2 Pareto-Optimality and the Core 8 3 Convex Optimization Background 10 4 Uncapped Public Goods 12 4.1 Nash Welfare and the Eisenberg–Gale Program 13 4.2 A New Convex Program 14 4.3 Connecting the Eisenberg–Gale and Shmyrev Programs via Duality 15 4.4 A Possible Path to Tâtonnement for Public Goods 17 4.5 Proportional Response Dynamics as Mirror Descent 18 5 Capped Public Goods 20 5.1 Adapting the Convex P-
rogram 20 5.2 The Convex Program Computes a Lindahl Equilibrium 21 5.3 Discussion of the Convex Program 24 5.4 Computation and Experiments 25 5.5 Computing Core Allocations for Separable Piecewise-Linear Concave Utilities 26 6 Conclusion 28 References 28
1
arXiv:2503.16414v1 [cs.GT] 20 Mar 2025

Christian Kroer and Dominik Peters
1 INTRODUCTION
We consider a setting where a fixed budget B > 0 needs to be spent on m divisible public goods. Thus, an outcome is a vector x = (x1, . . . , xm) ∈ Rm
≥0 summing to at most B. Some of the public goods may additionally have caps, i.e., upper bounds on the amount of funding they can receive. How to distribute the spending across the goods is decided based on the preferences of n agents. We will consider agents with separable linear utility functions over the goods. Agents may have heterogeneous weights (which can be interpreted as endowments). We will study the solution concept of Lindahl equilibrium, which is based on a virtual market with person-
alized prices [Foley, 1970]. This equilibrium notion is known to lead to allocations that are fair to voters, formalized via the concept of the core from cooperative game theory [Fain et al., 2016]. The classic economics literature on public goods, starting with Samuelson [1954], focusses on how to arrive at the socially efficient amount of spending in the face of free-riding incentives. In contrast, we consider a fixed budget and are mostly concerned with how to divide it between different public-
 goods. This approach, sometimes called portioning or fair mixing, has received increasing attention in computer science over recent years [see, e.g., Airiau et al., 2023, Aziz et al., 2020, Brandl et al., 2021, Fain et al., 2016], due to its many concrete applications. These include participatory budgeting, a method used by many cities to let residents vote over how the government will spend a fixed part of its budget [Aziz and Shah, 2021, Rey and Maly, 2023], and donation platforms, where donors-
 can influence the distribution of a fixed matching fund [Brandl et al., 2022, Brandt et al., 2024]. The model also captures committee elections (i.e., multiwinner voting) in its fractional version [Aziz et al., 2023a, Suzuki and Vollen, 2024], as well as the cake sharing problem [Bei et al., 2024]. Voting methods for the public goods model can also be used to settle small-stakes issues such as a lecturer letting students vote over the distribution of class time across topics, or a team to vote ov-
er the frequencies with which they will go to different lunch venues. Companies and non-profit organizations can use the principles derived in this model to decide how to fairly and efficiently divide resources among units or grantees. In many of these applications, it is desirable to select an outcome that is representative of the voters, in that every agent has an equal influence on the overall spending (or an influence that is proportional to the weight assigned to the agent). This can be forma-
lized as a group fairness guarantee. In particular, we can require that the spending distribution lie in the core, which means that no subset of voters can construct an alternative way of spending their endowments in a way that they all prefer. We know that a core outcome always exists thanks to Foley [1970], who gave a definition of what he called Lindahl equilibrium (because he was inspired by ideas of Lindahl [1919]), proved its existence, and showed that it always lies in the core. This result-
 was introduced to the computer science literature by Fain et al. [2016]. In the setting where each public good has no cap on funding (we call this the uncapped setting), Fain et al. [2016] showed that Lindahl equilibrium is equivalent to the rule that maximizes Nash social welfare (i.e., the product of agent utilities). The Nash rule has its root in the Nash [1950] bargaining solution, and its objective function has attractive mathematical properties such as scale-freeness [Moulin, 2004]. The Nas-
h rule as applied to the public goods model had already been discussed earlier and independently from Lindahl equilibrium due to its attractive group fairness properties [Bogomolnaia et al., 2005, Guerdjikova and Nehring, 2014]. The connection between Lindahl equilibrium and the Nash rule is convenient since the latter can be efficiently computed via a convex program reminiscent of the classic Eisenberg–Gale program [Eisenberg, 1961, Eisenberg and Gale, 1959] for computing a market equilibrium for-
 private goods. In addition, Brandl et al. [2022] showed that the Nash rule can be computed by running a simple proportional response dynamics which converges to the Nash outcome. They pointed out that the same convex program
2

Computing Lindahl Equilibrium for Public Goods with and without Funding Caps
had been considered in several unrelated contexts such as in the portfolio selection literature, where this dynamics had also been discovered and shown to converge [Cover, 1984]. While the dynamics converges rapidly in practice, a formal bound on the speed of convergence had not been established by 2022, with Li et al. [2018, page 11] noting that the “algorithm [of Cover] possesses a guarantee of convergence but [no] convergence rate.” In the capped setting, the Nash rule loses its fairness proper-
ties and is not equivalent to Lindahl equilibrium. In contrast, Lindahl equilibrium retains its fairness properties, and its existence is known via fixed-point theorems [Foley, 1970]. However, this existence result only applies to strictly monotonic utility functions and thus does not allow agents to have valuations equal to 0 for some goods, and it does not allow for caps except through approximating them through appropriate ‘saturating’ utility functions [Fain et al., 2016, Munagala et al., 2022-
b]. Most importantly, the existence result is not algorithmic, and how to compute a Lindahl equilibrium was an open question. Fain et al. [2016] asked: “Is computing the Lindahl equilibrium for public goods computationally hard or is there a polynomial time algorithm even [when the public goods are capped]?” Since then there has been no progress on this question. Indeed, Jiang et al. [2020] again noted that “we do not know how to compute the Lindahl equilibrium efficiently”. It was even open how t-
o compute any allocation that lies in the core, not necessarily a Lindahl equilibrium allocation. Cheng et al. [2020] noted that “it is not known how to compute such a core outcome efficiently even for [...] approval set utilities”, and Suzuki and Vollen [2024] concluded that “there is no known polynomial time algorithm for computing fractional core”. The need for a practical algorithm was particularly pressing in the work of Munagala et al. [2022b] who studied indivisible public goods and were ai-
ming for allocations that are approximately in the core. Their best result is based on rounding a Lindahl equilibrium allocation and “yields a 9.27-core, though we do not know how to implement the resulting algorithm in polynomial time”. To obtain a poly-time result, Munagala et al. [2022b] needed to avoid Lindahl equilibrium and in that case only achieved a 67.37-approximation.
1.1 Contributions
In the uncapped setting, we prove that the proportional response dynamics converges to a Lindahl equilibrium at a rate of log(nm)/t. We show this by developing a new convex program, distinct from the standard Eisenberg–Gale-style program for Nash welfare maximization, and show that applying mirror descent to this program is equivalent to the proportional response dynamics, thereby allowing us to obtain the convergence rate from known results about mirror descent.1 Our new convex program is related-
 to the Eisenberg–Gale-style program through double duality: we show that it can be obtained by taking the dual, introducing new redundant variables, making a change of variable, and performing another dual derivation on this reformulated dual. The duality and mirror descent relationship that we discover for public goods mirrors existing relationships known in the literature on private goods allocation using Fisher market equilibrium. For the private-good setting, equilibrium is also equivalent to-
 maximizing Nash welfare. An alternative convex program for this equilibrium was developed by Shmyrev [1983, 2009]. A proportional response dynamics exists for the private goods case as well [Wu and Zhang, 2007, Zhang, 2011], and Birnbaum et al. [2011] showed that it is equivalent to mirror descent on the Shmyrev program. Our new program for the uncapped public goods setting is “Shmyrev-like” in its structure. A comparison of these convex programs is shown in Figure 1. We think it is surprising th-
at it is
1While writing the paper, we became aware that Zhao [2023] has recently obtained the same convergence rate bound of log(nm)/t . He obtained the convergence rate via a direct first-order analysis of the multiplicative gradient (MG) method. Zhao notes that “the extraordinary numerical performance of the MG method is rather surprising and somewhat mysterious [because it] is extremely simple”. Our results demystify the performance of the dynamics, by showing that it is equivalent to mirror descent, bu-
t on a different convex program.
3

Christian Kroer and Dominik Peters
Private goods
max
x ≥0
∑︁
i∈N
Bi log ⟨vi, xi ⟩
s.t.
∑︁
i∈N
xi j ≤ 1 for all j ∈ M
(a) The Eisenberg–Gale program.
max
b ≥0,p ≥0
∑︁
i∈N,j ∈M
bi j log vi j −
∑︁
j ∈M
p j log p j
s.t.
∑︁
j ∈M
bi j = Bi for all i ∈ N
∑︁
i∈N
bi j = p j for all j ∈ M
The final allocation is obtained as xi j = bi j /p j .
(b) The Shmyrev program.
Public goods
max
x ≥0
∑︁
i∈N
Bi log ⟨vi, x⟩
s.t.
∑︁
j ∈M
xj ≤ B
(c) The Nash welfare program.
max
b ≥0,x ≥0
∑︁
i ∈N ,j ∈Mi
bi j log vi j −
∑︁
i ∈N ,j ∈Mi
bi j log
bi j
xj
s.t.
∑︁
j ∈Mi
bi j = Bi for all i ∈ N
∑︁
i∈Nj
bi j = x j for all j ∈ M
(d) Our program.
Fig. 1. Comparison of convex programs for computing Fisher market equilibrium (private goods) and Lindahl equilibrium (public goods) for instances with linear utility functions.
possible to establish these analogous results, since there are important structural differences in the convex programs. For example, for private goods, the convex programs always have rational optimal solutions, while for public goods they may be irrational. In addition, for private goods, the Eisenberg–Gale program has the same number of variables (nm) as the Shmyrev program, while for public goods the Eisenberg–Gale-style program has m variables whereas our new convex program has nm variables. T-
his dimensional difference means that new insights are required for transforming one program into the other through duality. In the capped setting, we answer the open problem raised by Fain et al. [2016] positively: Lindahl equilibrium can be computed efficiently in the capped setting. Indeed, the caps can be naturally added as constraints to our new convex program, and the resulting program correctly computes a Lindahl equilibrium respecting the caps. (In contrast, as is well-known, adding caps a-
s constraints to the Nash welfare program does not work and does not lead to a Lindahl equilibrium.) This also establishes the existence of exact Lindahl equilibrium with caps, without approximations. Using our convex program, a Lindahl equilibrium can be computed in polynomial time using the ellipsoid method (to any desired accuracy), and it can be computed efficiently in practice by standard solvers with support for exponential cones, such as MOSEK. We present numerical experiments on real-life -
data from participatory budgeting, showing that solving our program is feasible even for large instances. Finally, we show how to apply our result to compute approximately core-stable allocations for a broader class of utility functions, namely separable piecewise-linear concave utilities (SPLC).
4

Computing Lindahl Equilibrium for Public Goods with and without Funding Caps
1.2 Related Work
Lindahl equilibrium. Lindahl equilibrium was introduced by Foley [1970], who named this equilibrium concept after Lindahl [1919] who put forward related ideas of personalized taxation. However, note that there are other distinct ways of formalizing Lindahl’s ideas [see van den Nouweland, 2015], including ratio and cost share equilibrium [Kaneko, 1977, Mas-Colell and Silvestre, 1989]. In this work, we use the Foley definition.
Uncapped setting. Our interest in Lindahl equilibrium is motivated mainly by their proportional fairness properties (notably the core). Such fairness properties have been studied in many related models, notably the “fair mixing” or “portioning” models [Airiau et al., 2023, Aziz et al., 2020, Bogomolnaia et al., 2005, Brandl et al., 2021, Fain et al., 2016, Gul and Pesendorfer, 2020] that correspond to what we call the uncapped setting. In this setting, Lindahl equilibrium coincides with the maximu-
m Nash welfare solution which has been axiomatically characterized [Guerdjikova and Nehring, 2014] and noted for its strong participation incentives [Brandl et al., 2022] as well as its lowest-possible price of fairness [Michorzewski et al., 2020]. The Nash solution is also well-known to provide fair outcomes in other models, such as for private goods [Caragiannis et al., 2019].
Capped setting. What we call the capped setting has also been studied in various special cases under various names, such as cake sharing [Bei et al., 2024], fractional committee elections [Pierczyński and Skowron, 2022, Suzuki and Vollen, 2024], or divisible participatory budgeting [Aziz and Shah, 2021, Fain et al., 2016]. These works have mostly not considered Lindahl equilibrium, since there was no known way of computing one.
Discrete models. In discrete models, the public goods can either be fully funded or not at all. This model captures the way many cities run their participatory budgets, and has thus been well-studied including via core-like fairness notions such as EJR [Peters et al., 2021a, Rey and Maly, 2023], that were developed in the large literature on approval-based committee elections [Aziz et al., 2017, Lackner and Skowron, 2023, Peters, 2025]. There also exist proposals for definitions of Lindahl equilib-
rium for discrete models [Munagala et al., 2022a, Peters et al., 2021b].
Computation. In the uncapped setting, the maximum Nash welfare solution (and thus Lindahl equilibrium) can be efficiently computed via an Eisenberg–Gale-style convex program. This program has a simple structure (maximizing a natural objective function over the standard simplex), and Zhao [2023] has cataloged its appearance in many unrelated areas, including portfolio selection for maximizing log investment returns [Cover, 1984], information theory [Csiszár, 1974] and statistics [Vardi and Lee, 199-
3], and in medical imaging for positron emission tomography [Vardi et al., 1985]. Cover [1984] proposed a dynamics converging to the optimal solution of this program. Convergence proofs were also given by Csiszár [1984] and Brandl et al. [2022]. Later, Zhao [2023] obtained a convergence rate of log(nm)/t for this dynamics. This is the same rate that we establish, though his approach does not connect the dynamics to mirror descent. In the capped setting, very little was known about computation, exc-
ept for a heuristic algorithm proposed by Fain et al. [2016] that worked well in their experiments.
Donor coordination. An important application of the public goods allocation problem we study is donor coordination, where a collection of donors wish to coordinate their charitable spending, for example by pooling their donations and voting over the division of the pool between different causes. Brandl et al. [2022] have argued (using an uncapped model with linear utilities) that the Nash rule and thus Lindahl equilibrium is a good solution concept for this use case [see also Greaves and Cotton-Ba-
rratt, 2023]. However, an important reason for coordinating donations is the potential presence of caps: some charities may have a limited “room for more funding”. This
5

Christian Kroer and Dominik Peters
issue is frequently discussed within Effective Altruism, citing cases similar to Example 5 [Peters, 2019]. As our work shows, the Nash solution does not extend well to settings with limited room for more funding, but Lindahl equilibrium as computed by our new convex program does. Brandt et al. [2024] also discuss Lindahl equilibrium for the application of donor coordination, in a model with Leontief utility functions.
Other applications of the core. The core has been employed as a fairness property in many other models. For example, Chaudhury et al. [2022] apply it to federated learning.2 It has also been used for clustering [Caragiannis et al., 2024, Chen et al., 2019, Kellerhals and Peters, 2024], peer reviewer assignments [Aziz et al., 2023b], and sortition [Ebadian and Micha, 2025].
2 SETUP
Let M be a set of m public goods, which we sometimes refer to as projects. We have an overall budget B > 0 that we can spend on the public goods. Let N = {1, . . . , n} be a set of n agents. Each agent i ∈ N has an individual budget Bi > 0 representing i’s weight or endowment. These sum to the overall budget, Í
i∈N Bi = B. In many applications, the entitlements are equal: Bi = B/n. Each agent i has a valuation vi j ≥ 0 for each public good j ∈ M. We write vi = (vi j )j ∈M for the vector of i’s valuations. The utility of an agent i ∈ N for an outcome x ∈ Rm
≥0 is ui (x) = ⟨vi, x⟩ = Í
j ∈M vijxj .
Thus, we use separable linear utilities. We write Mi = { j ∈ M : vi j > 0} for the projects that agent i ∈ N likes, and we write Nj = {i ∈ N : vi j > 0} for the agents that support project j ∈ M. In the uncapped public goods setting, an allocation is a vector x = (x j )j ∈M with x j ≥ 0 for all j ∈ M and Í
j ∈M x j ≤ B. Here, x j denotes the total spending on project b. In this definition, the public goods have no upper bound on how much of them we can spend on them, so in principle the entire budget B could be spent on a single good. In the capped public goods setting, we add the additional constraint that each good j ∈ M has a maximum amount capj > 0 that can be spent on it. Thus, in this setting, an allocation is a vector x = (x j )j ∈M with 0 ≤ x j ≤ capj for all j ∈ M and Í
j ∈M x j ≤ B. We assume that Í
j ∈M capj ≥ B (if not then we simply fully fund all the goods).
2.1 Lindahl Equilibrium
Our goal is to find a Lindahl equilibrium which is known to yield a fair and efficient allocation of public goods, in the sense that it yields an allocation that is Pareto efficient and lies in the (weak) core [Fain et al., 2016, Foley, 1970]. Let p = (pi j )i∈N,j ∈M be a collection of non-negative personalized prices, with pi j ≥ 0 denoting the price that agent i needs to pay per unit of project j, and pi = (pi j )j ∈M denoting the vector of prices facing i.
Definition 1 (Lindahl Eqilibrium). Let x be an allocation and let p be a collection of nonnegative personalized prices. Then (x, p) is a Lindahl equilibrium if
• x is affordable: we have ⟨pi, x⟩ ≤ Bi for every i ∈ N , • x is utility-maximizing: for every i ∈ N and every y ∈ Rm
≥0 such that 0 ≤ yj ≤ capj for all j ∈ M and such that ⟨pi, y⟩ ≤ Bi , we have ui (x) ≥ ui (y), • x is profit-maximizing: for every j ∈ M, we have Í
i ∈N pi j ≤ 1, and whenever x j > 0 then
Í
i ∈N pi j = 1.
2Chaudhury et al. [2022, Theorem 2] show that the Nash rule satisfies core stability for arbitrary concave utilities. On first sight, this is in contradiction to our claim that Nash fails the core in the capped setting (Example 4). The difference is that Chaudhury et al. [2022] use a much weaker notion of the core which involves scaling utilities by the coalition size, rather than scaling the endowment. Fain et al. [2018, Section 1.6] discuss the distinction between these concepts.
6

Computing Lindahl Equilibrium for Public Goods with and without Funding Caps
We say that an allocation x is a Lindahl equilibrium allocation if there exist prices p such that (x, p) is a Lindahl equilibrium. The distinctive property of a Lindahl equilibrium is that prices are personalized, but every agent demands the exact same bundle x of public goods. That is the content of the utility maximization condition: it says that every agent i can afford x given the prices (pi j )j ∈M and i’s budget Bi , and prefers x among all affordable allocations satisfying the cap constrain-
t. The interpretation of the profit maximization condition is less clear. Its most important effect is that it imposes some amount of efficiency: an equilibrium can only spend a positive amount of budget on projects that have the maximum total price (and generally prices are higher if agent valuations for the project are higher). The condition can be seen as “profit maximization” if we imagine that there is a central producer of the public goods who takes in money from the agents and produces the -
public goods (at a cost of 1 unit of money for 1 unit of public good). This interpretation is made formal in the following simple observation.
Lemma 1. Let x be an allocation and let p be a collection of non-negative personalized prices. Then the following are equivalent:
(a) for every j ∈ M, we have Í
i ∈N pi j ≤ 1, and whenever x j > 0 then Í
i ∈N pi j = 1,
(b) for every y ∈ Rm
≥0, we have
∑︁
j ∈M
∑︁
i∈N
pijx j −
∑︁
j ∈M
xj ≥
∑︁
j ∈M
∑︁
i∈N
pijyj −
∑︁
j ∈M
yj.
Proof. If the prices satisfy (a), then Í
j ∈M
Í
i∈N pi jx j − Í
j∈M xj = Í
j∈M xj − Í
j ∈M x j = 0 and for every y ∈ Rm
≥0, we have Í
j ∈M
Í
i∈N pi jyj − Í
j∈M yj ≤ Í
j∈M yj − Í
j ∈M yj = 0, establishing (b). If the prices satisfy (b), but there is some j ∈ M with Í
i∈N pi j > 1, then the profit attained by y ∈ Rm
≥0 is unbounded as yj → ∞, a contradiction. If the prices satisfy (b), but there is some j ∈ M
with x j > 0 but Í
i∈N pi j < 1, then taking y to be identical to x but with yj = 0 gives larger profit, a contradiction. These two contradictions establish (a). □
Note that in condition (b), the producer compares x to every other possible vector y ∈ Rm
≥0,
even if y violates the cap-constraints or the overall budget constraint. Condition (b) is usually used as part of the definition of Lindahl equilibrium, but we have used condition (a) in our definition because it is simpler and more useful in proofs.
Example 1 (Personal projects). Consider the uncapped setting, and suppose that each agent likes exactly one project that nobody else likes, so we have N = M, with vii = 1 for each i ∈ N and vi j = 0 for all i ≠ j. In a Lindahl equilibrium, for each i ∈ N , utility maximization requires xi > 0 and that the entire endowment Bi is spent on the personal project, so pii = Bi /xi and pi j = 0 when i ≠ j. By profit maximization, since xi > 0, we get that pii = 1. Thus, Bi /xi = 1 and so xi = Bi . Therefo-
re, there is a unique Lindahl equilibrium allocation x with xi = Bi for each i ∈ N .
Every Lindahl equilibrium (x, p) can be decomposed: For each i ∈ N and j ∈ M, write
bi j = pi jx j
for the contribution of i towards j. This is a decomposition of x (similar to a notion considered by Brandl et al. [2022, Definition 2]) because the values (bi j )i j satisfy the following conditions:
• For each j ∈ M, we have x j = Í
i∈N bi j . (This is trivial if x j = 0 and if x j > 0 it follows because Í
i ∈N pi j = 1.)
• For each i ∈ N , we have Í
j ∈M bi j ≤ Bi . (This is simply a restatement of the affordability condition of the definition of Lindahl equilibrium.)
7

Christian Kroer and Dominik Peters
With this interpretation, we can see that pi j equals the fraction of spending on project j that is contributed by agent i. This interpretation also appears in the definition of ratio equilibrium [Kaneko, 1977] which is equivalent to Foley’s Lindahl equilibrium in the simple model we consider: We take the spending on a public good to be the same as the amount of the public good that is provided, which implies constant returns to scale, where several public goods equilibrium notions coincide [see a-
lso Mas-Colell and Silvestre, 1989, Moore, 2006, van den Nouweland, 2015]. Foley [1970] proved the existence of Lindahl equilibrium using a fixed-point theorem, in a model that is more general than ours. However, his result only applies to strictly monotonic preferences, and thus only establishes existence when vi j > 0 for all i ∈ N and j ∈ M. We will allow vi j = 0. In the presence of zeros, it makes sense to consider Lindahl equilibria (x, p) that are what we call zero-respecting.
Definition 2 (Zero-respecting). A Lindahl equilibrium (x, p) is zero-respecting if for all i ∈ N and j ∈ M, whenever vi j = 0 and x j > 0 then pi j = 0.
This is a natural condition in view of the decomposition we considered above, because in a zero-respecting Lindahl equilibrium, an agent contributes only to projects with positive utility: if vi j = 0 then bi j = 0. This condition is also imposed in the decomposability condition of Brandl et al. [2022, Definition 2]. The following example shows that not every Lindahl equilibrium is zero-respecting, and that zero-respecting Lindahl equilibria may violate Pareto efficiency. This will motivate imposi-
ng a certain sufficient condition introduced below that will avoid this result.
Example 2 (Lindahl eqilibrium may underspend). Consider the following instance:
Bi Project 1 Project 2
Agent 1 0.5 1 0 Agent 2 0.5 0 1
capj 0.25 ∞
On this instance, the unique zero-respecting Lindahl equilibrium allocation is x = (0.25, 0.5). To see this, note that each agent will demand the project that the agent likes, no matter the prices. Thus x1, x2 > 0. By profit maximization and the zero-respecting condition, we have p11 = p22 = 1 and p12 = p21 = 0. Then by the affordability and utility maximization conditions of Lindahl equilibrium, we get x = (0.25, 0.5). Note that the total spending in this instance is 0.75, strictly less than the -
available budget of B = 0.5 + 0.5. In particular, x is Pareto-dominated by the allocation y = (0.25, 0.75). If we remove the zero-respecting condition, there exist other Lindahl equilibria. In particular, x′ = (0.25, 0.75) forms an equilibrium with the prices p1 = (1, 1
3 ) and p2 = (0, 2
3 ).3
Note that the formal model of Foley [1970] does not directly support caps, but these can be simulated ε-approximately through concave utility functions [Munagala et al., 2022b, Footnote 2]. We will be able to handle caps without any approximations.
2.2 Pareto-Optimality and the Core
Next we discuss how the Lindahl equilibrium relates to Pareto optimality and the set of allocations that are in the core. In the uncapped setting with strictly increasing valuations, the relationship between these concepts is straightforward, and was already studied by Foley [1970]. However, as
3Suppose we replace zero-valuations by ε > 0, i.e., we set v12 = v21 = ε. Then for all ε > 0, every Lindahl equilibrium allocation has x2 ≥ 0.75 by Corollary 1 (Pareto optimality). But for ε = 0, in a zero-respecting Lindahl equilibrium, x2 = 0.5. Thus, Lindahl equilibrium does not necessarily converge to a zero-respecting Lindahl equilibrium as ε → 0.
8

Computing Lindahl Equilibrium for Public Goods with and without Funding Caps
we shall see, there is more nuance in the capped setting and in the presence of valuations equal to 0. We begin by introducing a sufficient condition that excludes examples like Example 2 where intuitively the caps of projects that receive non-zero valuations are too low. We will see that under this sufficient condition, every zero-respecting Lindahl equilibrium spends the entire budget, is Pareto efficient, and lies in the core. For every i ∈ N , write Fi = {f ∈ N | Mi ∩ Mf ≠ ∅} for the set of “f-
riends” of i who agree that at least one common project has a positive valuation.
Definition 3. An instance is cap-sufficient if we have Í
j ∈Mi capj ≥ Í
f ∈Fi
Bf for all i ∈ N .
There are many interesting settings in which instances are always cap-sufficient, including:
• The uncapped setting where capj = +∞ for all j ∈ M. • All valuations are positive: vi j > 0 for all i ∈ N and j ∈ M. (Proof: In this case, Mj = M and Fi = N , so the cap-sufficiency condition is implied by our general assumption that
Í
j ∈M capj ≥ B.) • Each agent has positive utility for goods whose total cap reaches the budget: Í
j ∈Mi capj ≥ B.
We will show that Lindahl equilibrium has particularly desirable properties on cap-sufficient instances. A key consequence of cap-sufficiency is that every voter spends their entire budget.
Proposition 1. On a cap-sufficient instance, if (x, p) is a zero-respecting Lindahl equilibrium, then
(i) for every i ∈ N , we have ⟨pi, x⟩ = Bi , (ii) we have Í
j∈M xj = B,
(iii) for every i ∈ N and every y ∈ Rm
≥0 such that 0 ≤ yj ≤ capj for all j ∈ M and such that ⟨vi, y⟩ ≥ ⟨vi, x⟩, we have ⟨pi, y⟩ ≥ Bi .
Proof. (i) Suppose for a contradiction that ⟨pi, x⟩ < Bi . We claim that then for all j ∈ Mi , we have x j = capj : Otherwise, if x j < capj , we can increase x j , thereby increasing the utility of i, and a sufficiently small increase is affordable since i does not spend all of Bi , contradicting utility maximization. Now, because (x, p) is zero-respecting, for each j ∈ Mi , only friends of i will contribute to j because Nj ⊆ Fi . Thus, bi′ j = 0 if i′ ∈ N \ Fi . But then
∑︁
j ∈Mi
capj =
∑︁
j ∈Mi
xj =
∑︁
j ∈Mi
∑︁
f ∈Fi
bf j <
∑︁
f ∈Fi
Bf ,
contradicting that the instance is cap-sufficient. (ii) Using (i), we deduce that
∑︁
j ∈M
x j = ⟨1, x⟩ =
∑︁
j ∈M
∑︁
i∈N
pijx j =
∑︁
i∈N
∑︁
j ∈M
pi jx j =
∑︁
i∈N
Bi = B.
(iii) For a contradiction, suppose there is i ∈ N and a cap-respecting allocation y such that ⟨vi, y⟩ ≥ ⟨vi, x⟩ but with ⟨pi, y⟩ < Bi . Due to (i), we have ⟨pi, y⟩ < ⟨pi, x⟩. Thus, there exists some j ∈ M such that pi j > 0 and yj < x j . Since (x, p) is zero-respecting, we have vi j > 0. Now consider an allocation obtained from y but with the j-coordinate increased by a small amount. For a small enough increase, the resulting allocation respects the cap-constraints (because yj < x j ≤ capj ) and -
is affordable for i (because ⟨pi, y⟩ < Bi ), but gives i strictly higher utility, contradicting the utility-maximization condition of Lindahl equilibrium. (Note that the constructed allocation may not respect the overall budget constraint, but that is not required by the definition of Lindahl equilibrium.) □
A major reason to be interested in Lindahl equilibrium is that it always lies in the weak core, which is a fairness or stability property formalizing proportional representation.
9

Christian Kroer and Dominik Peters
Definition 4 (Core). An allocation x is in the core if there is no “blocking coalition” S ⊆ N and no objection z = (zj )j ∈M ∈ Rm
≥0 with 0 ≤ zj ≤ capj for all j ∈ M, such that Í
j∈M zj ≤ Í
i ∈S Bi (it
can be afforded by the blocking coalition) and for all i ∈ S, we have ⟨vi, z⟩ ≥ ⟨vi, x⟩ (every coalition member weakly prefers the objection) and the inequality is strict for at least one i ∈ S. It is in the weak core if there are no such S and z such that ⟨vi, z⟩ > ⟨vi, x⟩ for all i ∈ S.
Foley [1970, Section 6] proved that Lindahl equilibrium allocations are in the weak core, though his model implicitly assumed cap-sufficiency. We can more generally show the following.
Proposition 2. Let (x, p) be a Lindahl equilibrium. Then x lies in the weak core. If the instance is cap-sufficient and (x, p) is zero-respecting, then x lies in the core.
Proof. Suppose not, and suppose S ⊆ N is a blocking coalition with objection z satisfying
Í
j∈M zj ≤ Í
i ∈S Bi . We now claim that Í
i ∈S ⟨pi, z⟩ >
Í
i ∈S Bi .
• Under the assumption that x fails the weak core, note that since for every i ∈ S we have ⟨vi, z⟩ > ⟨vi, x⟩, the utility maximization condition of Lindahl equilibrium implies that ⟨pi, z⟩ > Bi . Summing over i ∈ S establishes the claim. • Under the assumption that x fails the core, that (x, p) is zero-respecting, and that the instance is cap-sufficient, Proposition 1(iii) implies that since ⟨vi, z⟩ ≥ ⟨vi, x⟩ for all i ∈ S, we have ⟨pi, z⟩ ≥ Bi . Since we have ⟨vi, z⟩ > ⟨vi, x⟩ for at least one i -
∈ S, we have ⟨pi, z⟩ > Bi for that i due to utility maximization. Again, summing over i ∈ S establishes the claim.
Combining the claim with the non-negativity of prices and profit maximization, we have
∑︁
i ∈S
Bi <
∑︁
i ∈S
⟨pi, z⟩ ≤
∑︁
i∈N
⟨pi, z⟩ ≤ ⟨1, z⟩ ≤
∑︁
i ∈S
Bi ,
a contradiction. □
As a special case, taking S = N in Proposition 2, we see that Lindahl equilibrium allocations are (weakly) Pareto efficient, establishing a version of the First Welfare Theorem.
Definition 5 (Pareto-optimality). An allocation x is Pareto-optimal if there is no allocation x′ such that ui (x′) ≥ ui (x) for all i ∈ N and ui (x′) > ui (x) for some i ∈ N . It is weakly Pareto-optimal if there is no x′ with ui (x′) > ui (x) for all i ∈ N .
Corollary 1. Let (x, p) be a Lindahl equilibrium. Then x is weakly Pareto optimal. If the instance is cap-sufficient and (x, p) is zero-respecting, then x is Pareto optimal.
As another special case of the core result, it is worth noting that Lindahl equilibria also gives guarantees for individual agents (by considering S = {i}), leading to an axiom generalizing the individual fair share property of Aziz et al. [2020].
Corollary 2. Let x be a Lindahl equilibrium allocation, and let i ∈ N . Then for every allocation z with Í
j ∈M zj ≤ Bi and zj ≤ capj for all j ∈ M, we have ui (x) ≥ ui (z).
3 CONVEX OPTIMIZATION BACKGROUND
This section gives background on convex optimization and the mirror descent algorithm.
Basic definitions. Let f : Rn → (−∞, ∞] be a function. It is called proper if there exists x ∈ Rn with f (x) < ∞. Its subdifferential at x ∈ Rn is ∂f (x) = {g ∈ Rn : f (y) ≥ f (x) + ⟨g, y − x⟩ for all y ∈ Rn }. Elements of ∂f (x) are called subgradients. The convex conjugate of f is the function f ∗ : Rn → [−∞, ∞] defined by f ∗ (y) = supx ∈Rn (⟨y, x⟩ − f (x)). We use the convention 0 log 0 = 0. We write
B · Δm = {x ∈ Rm
≥0 : Í
j x j = B} for the scaled simplex.
10

Computing Lindahl Equilibrium for Public Goods with and without Funding Caps
KKT optimality conditions. We will use the following version of the Karush–Kuhn–Tucker theorem, which also works for non-differentiable objective functions.
Theorem 1 (Ruszczynski, 2011, Thm 3.34). Let x∗ be an optimal solution to the program
minimize f (x) subject to hi (x) ≤ 0 for i = 1, . . . , m
where f : Rn → (−∞, ∞] and hi : Rn → R, i = 1, . . . , m, are proper convex functions. Assume that f is continuous at some feasible point, and that Slater’s constraint qualification is satisfied, so that there is a feasible point x with hi (x) < 0 for i = 1, . . . , m. Then there exist λ1, . . . , λm ≥ 0 such that
0 ∈ ∂f (x∗) + Ím
i=1 λi ∂hi (x∗) and λihi (x∗) = 0 for i = 1, . . . , m.
Conversely, if x∗ satisfies the constraints hi (x∗) ≤ 0 for i = 1, . . . , m and there exist λ1, . . . , λm ≥ 0 satisfying the above conditions, then x∗ is a global minimum.
The KKT theorem can be used to characterize the optimal solutions of convex programs. Two such optimization problems will appear repeatedly in our derivations, and so we state them here.
Lemma 2. (a) Let y ∈ Rn. Suppose x∗ minimizes Ín
i=1 xi log xi − ⟨y, x⟩ subject to x ∈ Δn. Then
x∗
i = eyi /(Ín
j=1 eyj ) for i = 1, . . . , n.
(b) Let y ∈ Rn
≥0 \ {0}. Suppose x∗ maximizes Ín
i=1 yi log xi subject to x ∈ Δn. Then x∗
i= yi /(Ín
j=1 yj ) for i = 1, . . . , n.
Proof. For (a), see the book by Beck [2017, Example 3.71]. For (b), let us assume that yi > 0 for all i, since for i with yi = 0, it is optimal to set xi = 0 and we can ignore these indexes when optimizing the others. Under this assumption, note that any optimal solution must have xi > 0 for all i. Applying the KKT theorem, this means that the multipliers of the non-negativity constraints are 0. Thus, the stationarity condition implies that 0 = −yi /xi + λ, where λ ≥ 0 is the multiplier for the co-
nstraint Í
i xi = 1. Thus, xi = λyi . Summing over all i, we see that λ = 1/(Í
i yi ), which gives the result. □
Convex programming duality. We will use the following recipe for deriving the dual of convex programs with linear constraints. The recipe was explicitly given in Cole et al. [2017], though it is also a direct consequence of Fenchel duality [Rockafellar, 1970, Theorem 31.1], as we show for completeness .
Theorem 2. Let f be a proper convex function. The following programs are dual:
• minx f (x) − ⟨c, x⟩ subject to Ax ≥ b, • maxy,z ⟨b, z⟩ − f ∗ (y) subject to zA = y − c and z ≥ 0.
In particular, the two programs have the same objective value, provided that there is a point x with
f (x) < ∞ and Ax > b.
Proof. Consider the concave function
h(x) =
(
⟨c, x⟩ if Ax ≥ b,
−∞ otherwise.
Its concave conjugate is h∗ (y) =def infx ⟨y, x⟩ − h(x) = infx:Ax ≥b ⟨y, x⟩ − ⟨c, x⟩ = infx:Ax ≥b ⟨y − c, x⟩. Now, applying Fenchel duality and LP duality, we have
min
x:Ax ≤b
f (x) − ⟨c, x⟩ = inf
x
f (x) − h(x)
= sup
y
h∗ (y) − f ∗ (y) (Fenchel’s duality theorem)
11

Christian Kroer and Dominik Peters
= sup
y
inf
x : Ax ≥b
⟨y − c, x⟩ − f ∗ (y)
= sup
y
sup
z ≥0:zA=y−c
⟨b, z⟩ − f ∗ (y) (LP duality)
= sup
y,z : z ≥0, zA=y−c
⟨b, z⟩ − f ∗ (y),
showing that the two programs are dual. Fenchel’s duality theorem applies provided that f and h have domains whose relative interior intersects [Rockafellar, 1970, Theorem 31.1], which follows from the existence of some x with f (x) < ∞ and Ax > b. □
Mirror descent. The mirror descent (MD) algorithm is a first-order method for convex minimization which generalizes projected gradient descent to allow for more general notions of distance. Given a convex set X and a convex function f , the goal is to minimize f over X via first-order updates. MD relies on a Bregman divergence Dh (x ∥y), which is a convex function that measures the difference between x and y. The function Dh is constructed from some 1-strongly convex reference function h as Dh (x -
∥y) = h(x) − h(y) − ⟨∇h(y), x − y⟩. For example, taking the negative entropy reference function h(x) = Í
i xi log xi , the Bregman divergence becomes the KL divergence, Dh (x ∥y) = Í
i xi log(xi /yi ). The update rule for MD is
xt+1 = arg min
x ∈X
⟨∇f (xt ), x⟩ + 1
η
Dh (x ∥xt ), (1)
where η > 0 is a stepsize parameter. There are a variety of convergence results for MD. We will specifically be interested in the case where a special relationship holds between the objective f and the reference function h, knowns as relative smoothness. The function f is said to be 1-smooth relative to the reference function h when it holds for all x, y ∈ relint X that
f (a) ≤ f (b) + ⟨∇f (b), a − b⟩ + Dh (a∥b).
The following theorem from Birnbaum et al. [2011] shows that when the reference function h is chosen such that relative smoothness holds, the sequence of iterates generated by mirror descent converges at a rate of O (1/t):
Theorem 3 (Birnbaum et al., 2011, Theorem 3). Suppose that f is 1-smooth relative to the reference function h, and we run mirror descent using h as the distance-generating function. Let x∗ be an optimal solution. Then the sequence of iterates generated by mirror descent satisfies:
f (xt ) − f (x∗) ≤ Dh (x∗∥x0)
t
4 UNCAPPED PUBLIC GOODS
We begin by analyzing the uncapped setting, and begin by characterizing the Lindahl equilibrium prices, which will be helpful for understanding the convex programs we discuss. Note that if (x, p) is a Lindahl equilibrium, then each agent will only demand public goods that maximize the “bang-per-buck” ratio vi j /pi j . (When vi j = 0 and x j > 0, the agent also demands project j but only if pi j = 0. Thus, in the uncapped setting, every Lindahl equilibrium is zero-respecting.) Thus, the quantity v-
i j /pi j must be equal for all projects j with x j > 0 and vi j > 0. Therefore, pi j ∝ vi j , say with factor of proportionality α. Because each agent spends their entire budget (Proposition 1 (i), which applies since in the uncapped setting Lindahl equilibrium is always zero-respecting), we have Bi = Í
j ∈Mi
pijxj = Í
j ∈Mi
αvi jx j = α ⟨vi, x⟩. Thus we deduce that in the uncapped setting,
pi j = Bi ·
vi j
⟨vi, x⟩ for all j ∈ M with x j > 0. (2)
12

Computing Lindahl Equilibrium for Public Goods with and without Funding Caps
(Note that when vi j = 0 and x j > 0, (2) just says pi j = 0 which follows because (x, p) is zerorespecting, so (2) also holds for vi j = 0.) Now consider a project j ∈ M with x j = 0. Because i does not demand it, its bang-per-buck must be weakly below the bang-per-buck of funded projects. From (2), it then follows that
pi j ≥ Bi ·
vi j
⟨vi, x⟩ for all j ∈ M with x j = 0. (3)
As we explained in Section 2.1, any Lindahl equilibrium can be decomposed into individual contributions bi j = pi jx j . From (2), it follows that in Lindahl equilibrium,
bi j = Bi ·
vi j x j
⟨vi, x⟩ for all j ∈ M, (4)
or more simply that bi j ∝ vi jx j , so contributions are proportional to the utility i obtains in x from j. One can view (4) as a kind of fixed-point property implied by Lindahl equilibrium [Guerdjikova and Nehring, 2014], and it suggests the proportional response dynamics that we will study later.
4.1 Nash Welfare and the Eisenberg–Gale Program
In the uncapped setting (i.e. capj = +∞ for all j ∈ M), Lindahl equilibrium allocations can be nicely characterized as those maximizing the Nash social welfare Î
i ui (x) [Fain et al., 2016]. Such an allocation can be computed by solving the following convex program:
max
x ≥0
∑︁
i∈N
Bi log ⟨vi, x⟩
s.t.
∑︁
j ∈M
xj ≤ B
(5)
This program is the public-goods analogue of the Eisenberg–Gale convex program for computing a Fisher market equilibrium with private goods [Eisenberg, 1961, Eisenberg and Gale, 1959]. Based on this description of the prices, we can now one can analyze the KKT conditions of Program 5 to show that it exactly computes Lindahl equilibrium.
Theorem 4. [Fain et al., 2016, Corollary 2.3] In the uncapped setting, an allocation x is a Lindahl equilibrium allocation if and only if it is an optimal solution to Program 5.
Proof. Let x be an optimal solution to Program 5. Note first that every agent has strictly positive utility at x since otherwise the objective value would be −∞. Thus, the objective function is differentiable at x. By Theorem 1, there exists λ ≥ 0 (corresponding to the budget constraint) and (μj )j ∈M ≥ 0 (corresponding to the non-negativity constraints) such that for every j ∈ M, we have 0 = − Í
i ∈N Bi
vi j
⟨vi,x ⟩ + λ − μj . Thus λ ≥ Í
i ∈N Bi
vi j
⟨vi,x ⟩ , with equality if x j > 0. Multiplying by
x j , summing over j, and rearranging, we get Í
j ∈M λx j = Í
j ∈M
Í
i ∈N Bi
vi j x j
⟨vi,x ⟩ . This simplifies to
λB = Í
i∈N Bi = B, so λ = 1. Hence for each j ∈ M, we have
∑︁
i∈N
Bi
vi j
⟨vi, x⟩ ≤ 1, with equality if x j > 0.
Set pi j = Bi
vi j
⟨vi,x ⟩ . Then (x, p) is a Lindahl equilibrium: The above inequality immediately establishes the profit maximization condition. For utility maximization, note that the “bang-per-buck“ of project j to agent i is vi j /pi j = ⟨vi, x⟩/Bi , which is constant, so that all allocations that use up all of the agent’s budget are utility maximizing. Since ⟨pi, x⟩ = Bi , it follows that x is utility maxmizing for i. Conversely, suppose (x, p) is a Lindahl equilibrium. Set λ = 1 and μj = 1 − Í
i ∈N Bi
vi j
⟨vi,x ⟩ for each j ∈ M. For complementary slackness, note that if x j > 0, then from (2) we have μj = 1 − Í
i∈Nj
pij ,
and thus by the profit maximization condition of Lindahl equilibrium, we get μj = 0. Complementary
13

Christian Kroer and Dominik Peters
slackness also holds for λ since Í
j ∈M x j = B by Proposition 1(ii). We also have μj ≥ 0, combining (2), (3) and the profit maximization condition of Lindahl equilibrium. Finally, it is easy to check stationarity; for every j ∈ M we have
−
∑︁
i∈N
Bi
vi j
⟨vi, x⟩ + λ − μj = −
∑︁
i∈N
Bi
vi j
⟨vi, x⟩ +
∑︁
i∈N
Bi
vi j
⟨vi, x⟩ = 0.
Thus, by Theorem 1, x is an optimal solution to Program 5. □
Fain et al. [2016, Theorem 2.2] also present Eisenberg–Gale-style programs for computing Lindahl equilibria for certain non-linear utility functions called “scalar separable non-satiating” including CES and Cobb-Douglas utilities. Interestingly, for Fisher market equilibrium, the Eisenberg–Gale program always admits a rational solution [Devanur et al., 2008, Vazirani, 2012]. However, this is not the case in our public goods setting,4 as the following example shows [see also Airiau et al., 2023, Th-
eorem 5].
Example 3 (Irrational Lindahl eqilibrium allocation). Consider the uncapped setting with 4 agents with equal budgets Bi = 1
4 and with three projects. The agents have the following valuations:
Bi Project 1 Project 2 Project 3
Agent 1 0.25 1 0 0 Agent 2 0.25 1 0 1 Agent 3 0.25 1 1 0 Agent 4 0.25 0 1 1
capj ∞ ∞ ∞
By Theorem 4, a Lindahl equilibrium allocation x forms an optimal solution to Program 5. Since projects 2 and 3 are symmetric and the objective function of Program 5 is strictly convex, we have x2 = x3. Since B = 1, we deduce that x1 = 1 − 2x2. Thus, the objective function of Program 5 can be written as 1
4 (log(1 − 2x2) + 2 log(1 − x2) + log(2x2)). Exponentiating, this is equivalent to
maximizing (1 − 2x2) (1 − x2)2 (2x2). Setting its derivative to 0, we find that it has its unique maximum at x2 = 1
16 (7 − √
17) ≈ 0.1798. Thus, x is irrational and the unique Lindahl equilibrium allocation.
4.2 A New Convex Program
We will present a new convex program which also captures the Lindahl equilibrium concept in the uncapped setting. As we will see, this convex program will yield several useful results. First, we will use it to show that the proportional response dynamics for uncapped public goods can indeed be interpreted as mirror descent with the entropy distance, just as in the Fisher market setting. Secondly, extending this convex program will allow us to give the first computational results for the capped pub-
lic goods setting. Our new convex program is in the spirit of the Shmyrev convex program for Fisher markets for private goods [Shmyrev, 1983, 2009], though there are important
4For Fisher markets, the proof sets up a system of linear inequalities whose variables correspond to the reciprocals of equilibrium prices, 1/p j . However, profit maximization in Lindahl equilibrium (which has no analogue in Fisher markets) involves the sum Í
i pi j which is not linear in the reciprocals of prices. Thus, the Fisher market argument does not generalize.
14

Computing Lindahl Equilibrium for Public Goods with and without Funding Caps
differences. The convex program is as follows:
max
b ≥0,x ≥0
∑︁
i ∈N ,j ∈Mi
bi j log vi j −
∑︁
i ∈N ,j ∈Mi
bi j log bi j /x j
s.t.
∑︁
j ∈Mi
bi j = Bi, ∀i ∈ N
∑︁
i∈Nj
bij = xj, ∀j ∈ M
(6)
The program has two sets of variables, though one is implied by the other. The x j variable has the same interpretation as in Program 5: it is the amount of budget allocated to project j. The bi j variables can be interpreted as the share of agent i’s budget Bi that they allocate towards project j. Note that each x j variable is directly implied by the choice of the bi j variables across agents i. It is only there as a convenience variable, and we could replace each occurrence of it in Program 6 b-
y
Í
i∈Nj
bi j . Indeed, in our proofs, we will mostly work directly with this formulation that optimizes only over the bi j variables. To gain some intuition for Program 6, suppose that we already knew the optimum value of the x j variables, and thus can treat them as constants and use Program 6 to merely compute the values of the bi j variables. From Lemma 2 (a), these optimum values satisfy b∗
i j ∝ vi jx j , which exactly matches the condition (4) that we derived earlier from the definition of Lindahl equilibrium. While our program has some similarity to the Shmyrev program for private goods [Birnbaum et al., 2011, Shmyrev, 2009], it has the following important differences. First, the Shmyrev program contains variables corresponding to prices, which do not appear in our program. Second, the original primal variables x j appear directly in our program, whereas in Shmyrev’s program these-
 are a non-linear function of the corresponding b variables. Third, we have a somewhat unusual term that looks like a partially-normalized entropy in our objective, whereas Shmyrev’s program only requires using a typical negative entropy term over prices.
4.3 Connecting the Eisenberg–Gale and Shmyrev Programs via Duality
Program 5 and Program 6 can be related to each other through “double duality”. We need the following lemma, which derives the convex conjugate of a convex function that will appear in the dual of Program 5.
Lemma 3. Consider some q ∈ Rn×m and let qj be the j-th column of q. For j ∈ M, let gj (qj ) =
Í
i ∈N eqij and let g(q) = B · maxj ∈M gj (qj ). Then the convex conjugate of g is
g∗(β) =
∑︁
ij
βi j log βij
xj (β ) − βi j ,
where x j (β) = B · (Í
i βi j )/(Í
i j′ βi j′ ).
Proof. We compute the convex conjugate of g using standard formulas for the conjugate of a separable function, rescalings of a function, and the exponential function [see, e.g., Beck, 2017, Sections 4.3 and 4.4]. We also use Sion’s minimax theorem [Komiya, 1988] which states that if X is convex, Y is convex and compact, and f is a real-valued function on X × Y that is convex in its first argument and concave in its second argument, then supx ∈X miny∈Y f (x, y) = miny∈Y supx ∈X f (x, y). Finally, g-
iven β = (βi j )i ∈N,j ∈M , we write β j = (βi,j )i ∈N .
15

Christian Kroer and Dominik Peters
Putting all of this together, we derive that
g∗ (β) = sup
q
⟨β, q⟩ − g(q)
= sup
q
min
j ∈M
⟨β, q⟩ − B · gj (qj ) (definition of g)
= sup
q
min
x ∈Δ(B)
⟨β, q⟩ −
∑︁
j ∈M
x j · gj (qj ) (minimum attained at a vertex)
= min
x ∈Δ(B) sup
q
⟨β, q⟩ −
∑︁
j ∈M
x j · gj (qj ), (Sion’s minimax theorem)
= min
x ∈Δ(B)
∑︁
j ∈M
sup
qj
⟨βj, qj ⟩ − x j · gj (qj ), (conjugate of a separable function)
= min
x ∈Δ(B)
∑︁
j ∈M
xj · g∗
j (βj /x j ) ((α f )∗ (y) = α f ∗ (y/α))
= min
x ∈Δ(B)
∑︁
j ∈M
xj ·
∑︁
i∈N
βi j
x j log βi j
xj
−
βi j
xj
!
(exp∗ (y) = y log y − y)
= min
x ∈Δ(B)
∑︁
ij
βi j log βij
xj
− βi j
=
∑︁
ij
βi j log βij
xj (β ) − βi j , (Lemma 2(b))
as required. □
Now we can state the result formalizing the relationship between the two programs: their dual programs are equivalent. This result is an analogue of a result for private goods, where the Shmyrev and the Eisenberg–Gale program also share a dual after reformulation [Cole et al., 2017].
Theorem 5. Program 6 is the dual of the dual of the Eisenberg–Gale convex program for public goods, after reformulation.
Proof. Using the Fenchel duality in Theorem 2, the dual of Program 5 is
min
λ≥0,β ≥0
Bλ −
∑︁
i∈N
Bi log βi
s.t.
∑︁
i∈N
βivi j ≤ λ, ∀j ∈ M
(7)
Now we rewrite Program 7 by introducing a redundant set of variables λi j , which will represent the “bid” βivi j that agent i makes on project j. This gives the following program:
min
λ≥0,β ≥0
Bλ −
∑︁
i∈N
Bi log βi
s.t.
∑︁
i∈N
λi j ≤ λ, ∀j ∈ M
βivi j ≤ λi j, ∀i ∈ N , j ∈ M
(8)
Having removing the summation from the bottom constraint in Program 7, we can now apply the logarithm to the bottom constraint of program (8) and get a separation into individual terms. We note that in optimum, the value of λ is the maximum over j ∈ M of the value of Í
i ∈N λi j , so
16

Computing Lindahl Equilibrium for Public Goods with and without Funding Caps
we can replace λ in the objective function by a maximum. In addition, we perform two changes of variable: we write γi = − log βi and qi j = log λi j . Thereby we arrive at the following program:
min
q,γ
B · maxj ∈M
Í
i ∈N eqi j +
∑︁
i∈N
Biγi
s.t. log vi j ≤ qi j + γi, ∀i ∈ N , j ∈ M
(9)
Next we derive the dual of (9), again using the Fenchel dual from Theorem 2. For j ∈ M, let gj (q) = Í
i ∈N eqij and let g(q) = B ·maxj ∈M gj (q). Write bi j for the dual variables for the constraints in Program 9. Then the dual of (9) is
max
b≥0
∑︁
ij
bi j log vi j − g∗ (b)
s.t.
∑︁
j ∈M
bi j = Bi, ∀i ∈ N
(10)
By Lemma 3, the term g∗ (b) equals Í
i j bi j log bi j
xj (β ) − bi j , where x j (b) = B · Í
i bi j /Í
i j′ bi j′ . In
Program 10, the denominator Í
i j′ bi j′ is constrained to equal B, so we can simplify the expression to x j (b) = Í
i bi j . This yields the desired Program 6. □
Since the EG program and Program 6 are connected via the same dual, we know that the solution to Program 6 must imply a solution to the primal EG (through computing the implied dual solutions via KKT conditions, which can easily be done) and thus a Lindahl equilibrium. One can also show directly that Program 6 yields Lindahl equilibria. We defer this proof to the section on the capped setting, where we show it for that more general case (Theorem 7).
4.4 A Possible Path to Tâtonnement for Public Goods
Finally, we briefly remark that the dual program (8) can be rewritten in a way that eliminates the variables λ and βi and thereby turns it into an unconstrained minimization problem. This yields the following program:
min
{λi j }i j
B · maxj ∈M
Í
i ∈N λi j −
∑︁
i∈N
Bi min
j ∈M
log λij
vij (11)
One interesting property of this program is that it has a tâtonnement-like interpretation. The λi j variables can be viewed as personalized prices offered to each agent i for project j. In this interpretation, each agent chooses their favorite projects among those minimizing λi j /vi j , i.e. ones that maximize their bang-per-buck, and spends their entire budget Bi on such projects. Formally, let yi ∈ Δm be such that yi j > 1 only when project j minimizes λi j /vi j . Then Bi · yi j specifies how -
much of their budget agent i allocates to an optimal bang-per-buck project j. Similarly, let x ∈ B · Δm be such that x j > 0 only if Í
i ∈N λi j = maxj ∈M
Í
i ∈N λi j . Then x specifies a budget
allocation proposed by the price-setter. Then we have that a subgradient is any g ∈ Rn×m such that
gi j = x j − yi j
Bi
λi j
,
for any pair (x, y) satisfying the above conditions. This subgradient can be interpreted as a measure of discrepancy. The price-setter is proposing a set of per-agent prices λ and a corresponding budget allocation x. In turn, agent i computes their preferred allocation under λi , where yi j
Bi
λij is the amount they would have to spend to obtain Bi · yi j units of project j at price λi j . The subgradient gi j is then the discrepancy between the price-setter’s proposal and the agent’s preferred allocation. It is positive (and thus suggests an increase in price) if the agent spends less than the proposed
17

Christian Kroer and Dominik Peters
allocation on the project; it is negative (and thus suggests a decrease in price) if the agent spends more. The subgradient is zero exactly when the price-setter’s proposed allocation is optimal for each agent, meaning the proposed prices support the allocation. Deriving some form of convergence results for this program would be an interesting direction for future work.
4.5 Proportional Response Dynamics as Mirror Descent
It is known that the Lindahl equilibrium for the uncapped public goods setting can be computed by a simple dynamics [Brandl et al., 2022] which we call the proportional response dynamics in analogy to a similar dynamics for private-good Fisher markets [Wu and Zhang, 2007, Zhang, 2011]. At each iteration t, the proportional response dynamics have some current budget allocation xt = (xt
1, . . . , xt
j ) summing to B. Let ut
i = ⟨vi, xt ⟩ be the current utility of agent i under this allocation. Then the next budget allocation in the dynamics is
x t +1
j=
∑︁
i∈N
Bi
xt
j vij
ut
i
.
This dynamics can be interpreted as each agent i independently deciding how they wish to allocate their share of the budget Bi in the next round. Specifically, agent i allocates spending proportional to how much utility each project provided them at round t. This spending allocation matches the property in (4) we derived earlier from the definition of Lindahl equilibrium. We will show that the proportional response dynamics is the mirror descent algorithm applied to our Program 6. In order to deri-
ve this relationship, we first reformulate Program 6 to an equivalent version: we eliminate the redundant x j variables, convert the problem into a minimization problem, and define the shorthand function x j (b) = Í
i∈N bi j . Then we get the following convex program:
min
b≥0
f (b) := −
∑︁
i ∈N ,j ∈Mi
bi j log vi j − log bi j /x j (b)
s.t.
∑︁
j ∈M
bi j = Bi, ∀i ∈ N
(12)
Theorem 6. Assume that the PR dynamics and mirror descent algorithm on Program 12 are both initialized at a point b0 ∈ Rn×m such that b0
i ∈ Bi · Δm and x j (b0) = Í
i∈N b0
i j > 0 for all j ∈ M. Then the proportional response dynamics are equivalent to applying the mirror descent algorithm with the entropy reference function to Program 12.
Proof. Suppose that x j (b) > 0 for all j ∈ M, and thus f is differentiable at b. This holds by assumption for b0, and we will see that if it holds for the initial point then it holds throughout. The derivative of the objective in Program 12 with respect to bi j is
∇
i j f (b) = − log vi j + log bi j + 1 − log x j (b) − 1 = − log vi j + log(bi j /x j (b)). (13)
In the above, the 1 arises because the derivative of a log a equals log a + 1 and the −1 arises from the fact that bi j occurs in each of the terms bk j log(bk j /x j (b)). Let xt
j =Í
i∈N bt
i j . If we apply the MD update rule in Eq. (1) using the negative entropy reference function and a stepsize η = 1, we get the update
bt +1
i = arg min
bi ∈Bi ·Δm
∑︁
j ∈Mi
bi j − log vi j + log(bt
i j /xt
j) +
∑︁
j ∈Mi
bi j log(bi j /bt
ij)
= arg min
bi ∈Bi ·Δm
∑︁
j ∈Mi
bi j − log vi j + log(bi j /xt
j)
18

Computing Lindahl Equilibrium for Public Goods with and without Funding Caps
By Lemma 2(a), the solution to this optimization problem satisfies
bt +1
i j ∝ exp log vi j xt
j ∝ vijxt
j.
In order to get a feasible solution we must normalize the above such that Í
j ∈M bt+1
i j = Bi . Let
ut
i =Í
j ∈M vijxt
j . Applying normalization, we get
bt +1
i j = Bi
ut
i
vi j xt
j,
Now if we sum over i we get the proportional response dynamics. Moreover, we see that if xt
j >0 then xt+1
j > 0, as long as every public good is valued by at least one agent (public goods valued by nobody can safely be ignored, or preprocessed away). □
Thus, we have shown that the proportional response dynamics is equivalent to mirror descent with unit stepsize. Next we wish to apply the convergence-rate result from Theorem 3. Thus, we need to show that the objective in Program 12 is 1-smooth relative to the entropy reference function.
Lemma 4. The function f is 1-smooth relative to the reference function h(b) = Í
i ∈N ,j ∈M bi j log bi j ,
i.e., for all a, b ∈ Rn×m
>0 such that ai ∈ Bi · Δm, bi ∈ Bi · Δm we have
f (a) ≤ f (b) + ⟨∇f (b), a − b⟩ + Dh (a∥b)
Proof. Note that f and h are differentiable in the relative interior of Bi · Δm. Using (13), we have
f (a) − f (b) − ⟨∇f (b), a − b⟩
=−
∑︁
i ∈N ,j ∈Mi
ai j (log vi j − log aij
xj (a) ) +
∑︁
i ∈N ,j ∈Mi
bi j (log vi j − log bij
xj (b ) ) −
∑︁
i ∈N ,j ∈Mi
(ai j − bi j ) (log bij
xj (b) − log vi j )
=
∑︁
i ∈N ,j ∈Mi
ai j log(ai j /x j (a)) −
∑︁
i ∈N ,j ∈Mi
bi j log(bi j /x j (b)) −
∑︁
i ∈N ,j ∈Mi
(ai j − bi j ) log(bi j /x j (b))
= Dg (a∥b),
where Dg is the Bregman divergence for the entropy-like function g(b) = Í
i ∈N ,j ∈M bi j log(bi j /x j (b)).
It remains to show that Dg (a∥b) ≤ Dh (a∥b):
Dh (a∥b) − Dg (a∥b)
=
∑︁
i ∈N ,j ∈Mi
ai j log ai j −
∑︁
i ∈N ,j ∈Mi
bi j log bi j −
∑︁
i ∈N ,j ∈Mi
(ai j − bi j ) log bi j
−
∑︁
i ∈N ,j ∈Mi
ai j log(ai j /x j (a)) +
∑︁
i ∈N ,j ∈Mi
bi j log(bi j /x j (b)) +
∑︁
i ∈N ,j ∈Mi
(ai j − bi j ) log(bi j /x j (b))
=
∑︁
i ∈N ,j ∈Mi
ai j log x j (a) −
∑︁
i ∈N ,j ∈Mi
bi j log x j (b) −
∑︁
i ∈N ,j ∈Mi
(ai j − bi j ) log x j (b)
=
∑︁
i ∈N ,j ∈Mi
ai j log(x j (a)/x j (b)) =
∑︁
j ∈M
x j (a) log(x j (a)/x j (b)) ≥ 0
The last step follows by noting that the second-to-last expression is the KL divergence between x (a) and x (b), which is always nonnegative. □
Now we can combine Lemma 4 with Theorem 3 to get a Dh (b∗ ∥b0)/t rate of convergence for the proportional response dynamics. If we start the dynamics at the uniform allocation b0
i j = Bi /m, we
19

Christian Kroer and Dominik Peters
can upper bound the Bregman divergence Dh (b∗ ∥b0) as follows:
Dh (b∗ ∥b0) = h(b∗) − h(b0) ≤ −h(b0) = −
∑︁
i ∈N ,j ∈Mi
Bi
m log(Bi /m) =
∑︁
i∈N
Bi log(m/Bi ).
Combining this with Theorem 3 and Lemma 4, we get a
Í
i ∈N Bi log(m/Bi )
t rate of convergence for the proportional response dynamics. Suppose for simplicity that B = 1 and Bi = 1/n, then we get that proportional response dynamics converges at a rate of log(nm)
t.
The same convergence rate was recently independently obtained by Zhao [2023], after it had been an open question for almost fifty years. Zhao [2023] derived this rate directly, while our result gives a deeper explanation of the performance of the proportional response dynamics: it is equivalent to mirror descent with the entropy reference function applied to Program 6.
5 CAPPED PUBLIC GOODS
Next we study the capped public goods setting, where we have a constraint x j ≤ capj for each good j ∈ M. One may naïvely attempt to add this constraint to Program 5 maximizing Nash welfare, but this will not lead to a Lindahl equilibrium and not even to a core solution.
Example 4 (Nash welfare optimum is not a Lindahl eqilibrium). Consider the following instance:5
Bi Project 1 Project 2 Project 3 Project 4
Agent 1 2 1 1 0 0 Agent 2 2 1 0 1 0 Agent 3 2 0 0 0 1
capj 3 ∞ ∞ ∞
The allocation that maximizes Nash welfare subject to the cap constraints is x = (3, 0, 0, 3). This allocation violates the weak core: consider the blocking coalition S = {1, 2} and the objection z = (3, 0.5, 0.5, 0) which gives each i ∈ S a utility of ui (z) = 3.5 which is strictly higher than ui (x) = 3. Thus, by Proposition 2, x is not a Lindahl equilibrium. This is not an artefact of having zero-valuations; replacing 1s by 10 and 0s by 1 leads to the same situation.
This failure of the Nash rule to extend to capped settings has been noted several times. Suzuki and Vollen [2024, Proposition 4.1] provide an example similar to the one above. Garg et al. [2021, Comment A.1] write that Lindahl equilibrium “does not transform into a Fisher market”. While the Nash optimum fails the core, it can be shown that it satisfies a 2-approximation to it [Munagala et al., 2022b, Corollary 3.5].
5.1 Adapting the Convex Program
We will show in this section that Program 6 can be used to compute a Lindahl equilibrium in the capped public goods setting through a simple modification: we simply add a constraint x j ≤ capj for all j ∈ M. Surprisingly, we will show that this works, even though the exact same constraint does not work for the original EG program (Program 5) for maximizing Nash welfare. Thus, we obtain the first efficient algorithm for capped public goods, thereby resolving an open problem first posed by Fain et a-
l. [2016].
5This example is similar to a well-known instance in (indivisible) approval-based multi-winner voting where the PAV rule fails the core [Aziz et al., 2017, Peters, 2025, Peters and Skowron, 2020].
20

Computing Lindahl Equilibrium for Public Goods with and without Funding Caps
Our modified program for capped public goods is as follows, where as before we write x j (b) =
Í
i ∈N bi j as a shorthand:
max
b≥0
∑︁
i ∈N ,j ∈Mi
bi j log vi j − log(bi j /x j (b))
s.t.
∑︁
j ∈Mi
bi j ≤ Bi for all i ∈ N
x j (b) ≤ capj for all j ∈ M
(14)
We will require that all valuations have been rescaled such that vi j > 1 for all vi j ≠ 0, to ensure that the coefficients log vi j in the objective function are positive. Rescaling is without loss of generality, since the Lindahl equilibrium is invariant to scaling valuations by a positive constant. A similar normalization is used by Brandl et al. [2022].
Remark 1 (Need for rescaling.). Both Program 5 and Program 6 are invariant to rescaling, so why do we need to rescale valuations in the capped setting? The reason is that the spending caps x j ≤ capj may mean that there does not exist a solution satisfying Í
j ∈M bi j = Bi for all i ∈ N (see Example 2). Thus, we modify Program 6 by changing the equality to an inequality. However, when vi j ≤ 1 and thus log vi j ≤ 0 for some i, j, the objective function contains a term for minimizing bi j which may lead to some agents not spending their entire budget under bi j even when it is possible for them to do so. This causes the Lindahl equilibrium correspondence for optimal solutions to fail.
5.2 The Convex Program Computes a Lindahl Equilibrium
In this section, we will prove that Program 14 computes a zero-respecting Lindahl equilibrium. This in particular proves the existence of such an equilibrium, which does not quite follow from the existence result of Foley [1970], since his model does not allow for caps and does not allow for valuations equal to 0 (since it assumes strictly monotonic valuations). Our proof proceeds by analyzing KKT conditions (Theorem 1) applied to Program 14. In the notation of Theorem 1, the objective function is-
 obtained by multiplying by −1, giving f (b) = −
Í
i ∈N ,j ∈Mi
bi j log vi j + Í
j ∈M h(b j ) where b j is the vector (bi j )i ∈Nj and h is the function defined as h(x) = Í
i xi log xi
Í
k xk when all xi are non-negative, and +∞ otherwise. To apply Theorem 1, we need to compute the subdifferential of f . We first compute the subdifferential of h(x). Note that h is differentiable for all x ∈ Rn
≥0 \ {0}, with ∂h(x) = {(log xi
Í
k xk
)
n
i=1}. It is not differentiable at x = 0, but we can determine its subdifferential using standard calculations.
Lemma 5. Let h(x) = Ín
i=1 xi log xi
Í
k xk . Then we have ∂h(0) = {g ∈ Rn | Í
i egi ≤ 1}.
Proof. At zero, we have 0 log 0 = 0, and thus a vector g is a subgradient if and only if
h(x) ≥ ⟨g, x − 0⟩ = ⟨g, x⟩ for all x ∈ Rn. (15)
First we note that this is trivially true for x ∉ Rn
≥0, since h(x) = +∞ in that case. It is also true for x = 0 since h(0) = 0. Thus consider x ∈ Rn
≥0 with x ≠ 0. Let S = Í
i xi , which is positive. Dividing both sides of (15) by S and writing pi = xi /S, we see that g is a subgradient if and only if
∑︁
i
pi log pi ≥ ⟨g, p⟩ for all p ∈ Δn.
This in turn can be equivalently written in terms of a minimization problem:
min
p ∈Δn
⟨−g, p⟩ +
∑︁
i
pi log pi ≥ 0.
21

Christian Kroer and Dominik Peters
By Lemma 2(a), the minimum is attained at p j = egj /Í
i egi , giving the value − log (Í
i egi ) for the left-hand side. This is nonnegative exactly when Í
i egi ≤ 1. □
Since the subdifferential of a sum of convex functions is equal to the sum of the subdifferentials, this allows us to fully characterize the subdifferential of f .
Lemma 6. Let f be the negative of the objective function of Program 14, and let b = (bi j )i∈N,j ∈Mi be a feasible point. If there exists some bi j = 0 while x j (b) > 0, then ∂f (b) = ∅. Otherwise, for all vectors
g = (gi j )i ∈N ,j ∈Mi , we have
g ∈ ∂f (b) ⇐⇒
(
for all j ∈ M s.t. x j (b) > 0, and all i ∈ Nj, gi j = − log vi j + log bij
x j (b ) ,
for all j ∈ M s.t. x j (b) = 0,
Í
i∈Nj
egi j +log vi j ≤ 1.
Based on this computation of the subdifferential of the objective function of Program 14, we can now prove that an optimal solution to the program will form a Lindahl equilibrium.
Theorem 7. Assume that valuations are rescaled such that vi j > 1 for all vi j ≠ 0. Let x∗ be an optimal solution to Program 14. Then there exist zero-respecting prices p such that (x∗, p) forms a Lindahl equilibrium for the capped public goods setting.
Proof. We apply the KKT conditions of Theorem 1 to Program 14. For convenience, let us label the constraints of the program using the notation of the KKT conditions:
h (1)
i (b) = Í
j ∈M bi j − Bi for all i ∈ N ,
h (2)
j (b) = Í
i ∈N bi j − capj for all j ∈ M,
h (3)
i j (b) = −bi j for all i ∈ N and j ∈ Mi .
All these functions are affine and thus differentiable, with singleton subdifferentials. Let b∗ be an optimal solution to Program 14. By Theorem 1, we know that there exists a subgradient g∗ ∈ ∂f (b∗) such that
g∗ +
∑︁
i∈N
λi ∇h (1)
i (b∗) +
∑︁
j ∈M
μ j ∇h (2)
i (b∗) +
∑︁
i ∈N ,j ∈Mi
ηi j ∇h (3)
i j (b∗) = 0, (16)
with λi, μj, ηi j ≥ 0 and such that complementary slackness holds. Equation (16) can be equivalently states as
g∗
i j + λi + μj − ηi j = 0 for all i ∈ N and j ∈ M. (17)
Let us now understand the implications of (16). We go through each project j ∈ M, and distinguish the cases where x∗
j = capj , where 0 < x∗
j < capj , and where x∗
j = 0.
• Consider a project j ∈ M with x∗
j = capj . Let i ∈ Nj . Note that b∗
i j > 0, since otherwise the subdifferential is empty, contradicting g∗ ∈ ∂f (b∗). Thus, by complementary slackness, ηi j = 0. Then the i j’th-component of (16) implies
0 = − log vi j + log
b∗
ij
x∗
j
+ λi + μj
and thus, because μj ≥ 0, that
0 ≥ − log vi j + log
b∗
ij
x∗
j
+ λi .
Rearranging and exponentiating both sides, we conclude that
vi j ≥ eλi
b∗
ij
x∗
j
.
22

Computing Lindahl Equilibrium for Public Goods with and without Funding Caps
• Consider a project j ∈ M with 0 < x∗
j < capj . Let i ∈ Nj . Again note that b∗
ij > 0
since otherwise the subdifferential ∂f (b∗) is empty. Then, by complementary slackness, μj = ηi j = 0. Thus, the i j’th-component of (16) implies
0 = g∗
i j + λi = − log vi j + log
b∗
ij
x∗
j
+ λi .
Rearranging and exponentiating both sides, we conclude that
vi j = eλi
b∗
ij
x∗
j
.
• Finally, consider a project j ∈ M with x∗
j = 0. Thus by complementary slackness, μj = 0. Let i ∈ Nj . By definition of x∗
j , we have bi j = 0. The i j’th-component of (16) implies
0 = g∗
i j + λi − ηi j .
Writing wi j = g∗
i j + log vi j and noting that ηi j ≥ 0, we get
0 ≤ wi j − log vi j + λi .
Rearranging and exponentiating both sides, we conclude that
vi j ≤ eλi ewi j .
Collecting all our conclusions, we have found that for i ∈ N and j ∈ Mi ,
vi j



≥ eλi
b∗
ij
x∗
j
if x∗
j = capj ,
= eλi
b∗
ij
x∗
j
if 0 < x∗
j < capj ,
≤ eλi ewij if x ∗
j = 0.
(18)
We now form a Lindahl equilibrium using the following prices for i ∈ N and j ∈ Mi :
pi j =

 
b∗
ij
x∗
j
if x∗
j > 0,
ewij if x ∗
j = 0.
(19)
For i, j such that vi j = 0, we set pi j = 0 and b∗
i j = 0. It follows from these definitions that the prices are zero-respecting. Note that with these prices, the identity pi jx∗
j = b∗
i j holds for all i ∈ N and j ∈ M (by case analysis on whether x∗
j = 0). We claim that (x∗, p) forms a Lindahl equilibrium. For profit maximization, note that if x∗
j > 0, then Í
i∈N pi j = Í
i∈Nj
b∗
i j /x ∗
j = 1 by definition of x∗
j,
and if x∗
j = 0, then Í
i∈N pi j = Í
i∈Nj
ewij ≤ 1 from the subdifferential characterization in Lemma 6. For the affordability condition, for each i ∈ N we have
⟨pi, x∗⟩ =
∑︁
j ∈M
pi jx∗
j=
∑︁
j ∈M
b∗
i j ≤ Bi,
using the identity pi jx∗
j = b∗
i j and the feasibility of b∗ in Program 14. It remains to prove utility maximization. Fix an agent i ∈ N . We will show that x∗ is utility maximizing subject to the budget constraint ⟨pi, x⟩ ≤ Bi . We divide the proof of this into two parts, based on whether agent i spends their entire budget under pi or not. First suppose that Í
j ∈M b∗
i j < Bi . We want to show that this only occurs when all projects j ∈ M with vi j > 0 have x∗
j = capj . Suppose for a contradiction that x∗
j < capj for some j ∈ Mi . By complementary slackness, we have λi = μj = 0. Thus, (16) implies g∗
i j ≥ 0. If x∗
j > 0, then we have g∗
i j = − log vi j + log(bi j /x j ) and thus g∗
i j < 0 because vi j > 1, a contradiction. Otherwise,
23

Christian Kroer and Dominik Peters
if x∗
j = 0, then e g∗
ij +log vij ≤ 1 by the subdifferential characterization in Lemma 6, which implies
g∗
i j + log vi j ≤ 0. Hence g∗
i j ≤ − log vi j < 0 since vi j > 1, again a contradiction. Thus we have shown that if agent i does not spend their whole budget, then they are already achieving the maximal possible utility under any feasible allocation (because x j = capj for all j ∈ M such that vi j > 0), and thus x∗ is utility maximizing for i. Next consider the case where Í
j ∈M b∗
i j = Bi . Combining (18) and (19), we have that the “bang per buck” of project j ∈ Mi satisfies
vi j
pi j



≥ eλi if x ∗
j = capj ,
= eλi if 0 < x∗
j < capj ,
≤ eλi if x ∗
j = 0.
(20)
Now, an affordable bundle y is utility maximizing for i (among bundles satisfying the cap
constraints) if and only if (i) for every project with vij
pi j
> eλi , we have yj = capj , and (ii) for every
project with vij
pi j
< eλi , we have yj = 0, and (iii) the whole budget is spent. Because x∗ is such a bundle, it is utility maximizing for i. More formally, let y = (yj )j ∈M be an allocation such that 0 ≤ yj ≤ capj for all j ∈ M and ⟨pi, y⟩ ≤ Bi . Then for every j ∈ M with x∗
j = 0 we have yj − x∗
j ≥ 0, and for every j ∈ M with x j ∗ = capj we have yj − x∗
j ≤ 0. Thus
ui (y) − ui (x∗) =
∑︁
j ∈M
vi j (yj − x ∗
j)
=
∑︁
j ∈Mi x∗
j =0
vi j (yj − x ∗
j) +
∑︁
j ∈Mi 0<x ∗
j <capj
vi j (yj − x ∗
j) +
∑︁
j ∈Mi x∗
j =capj
vi j (yj − x ∗
j)
(2≤0)
∑︁
j ∈Mi x∗
j =0
eλi pi j (yj − x ∗
j) +
∑︁
j ∈Mi 0<x ∗
j <capj
eλi pi j (yj − x ∗
j) +
∑︁
j ∈Mi x∗
j =capj
eλi pi j (yj − x ∗
j)
= eλi
∑︁
j ∈Mi
pi j (yj − x ∗
j ) = eλi (⟨pi, y⟩ − ⟨pi, x∗⟩) ≤ 0.
In the last line we used that (x, p) is zero-respecting for the second equality, and we used that ⟨pi, y⟩ ≤ Bi = ⟨pi, x∗⟩ for the last inequality. It follows that ui (y) ≤ ui (x∗), establishing the utility maximization condition. □
5.3 Discussion of the Convex Program
Comparison to Fisher markets. It is interesting to contrast our program with the Fisher market setting with private goods. There, the Eisenberg–Gale program also does not allow the introduction of saturating constraints on the primal variables (which correspond to a maximum amount of a good that an agent may receive). Yet it is not possible to add such constraints to the Shmyrev program for Fisher markets either, because that program does not contain the original primal variables encoding the allo-
cation (in contrast to our public-goods program). Instead, the allocation is obtained through a nonlinear function of the optimization variables in the Shmyrev program.6 Thus, Program 6 allows for a type of saturating consumption constraint that has previously never been possible for either private or public goods.
6It is known that spending constraints on a per-buyer basis can be introduced to the Shmyrev program [Birnbaum et al., 2011], but these are very different from saturating constraints on the primal variables.
24

Computing Lindahl Equilibrium for Public Goods with and without Funding Caps
Discontinuity as vi j → 0. Given that our program computes a Lindahl equilibrium that is zerorespecting, its output is not continuous as vi j → 0. This is unavoidable due to Example 2 (see Footnote 3), and unsurprising in light of our normalization of valuations.
Not all Lindahl equilibria are optimal solutions. In the uncapped setting, every Lindahl equilibrium forms an optimum of both Program 6 and the Eisenberg–Gale program. As the following example shows, this is not the case for the capped setting, where Program 14 captures only a strict subset of Lindahl equilibria. The example also shows that Lindahl equilibria are not unique in utilities.
Example 5 (Lindahl eqilibrium is not uniqe in utilities). Consider the following instance:
Bi Project 1 Project 2 Project 3
Agent 1 1 1 1 0 Agent 2 1 1 0 1
capj 1 ∞ ∞
This instance is cap-sufficient, since each agent has a positive valuation for an uncapped project. Let us determine the set of zero-respecting Lindahl equilibria (x, p). By Corollary 1, x is Pareto-optimal, and therefore x1 = 1 and x2 + x3 = 1. For each γ ∈ [0, 1], one can check that x = (1, 1 − γ, γ) forms a Lindahl equilibrium together with the prices p1 = (γ, 1, 0) and p2 = (1 − γ, 0, 1). It follows that, in the capped setting, Lindahl equilibria are not unique in utilities: in the equilibrium-
 allocation (1, 1, 0), agent 1 obtains utility 2, but in the equilibrium allocation (1, 0, 1), agent 1 obtains utility 1. Note that the allocation x∗ = (1, 1
2, 1
2 ) is the unique allocation that is intuitively fair and respects the symmetry of the instance, but this allocation is not the only Lindahl equilibrium. However, Program 14 uniquely selects x∗, because on this instance its objective function simplifies to −b11 log b11 −b21 log b21 which is maximized by b11 = b21 = 0.5, leaving each agent a budget of 0.5 to spend on other projects.
An intuitive reason for why our program does not capture all Lindahl equilibria is that the KKT conditions that we analyzed in the proof of Theorem 7 impose an additional constraint on the contributions of agents to projects that are fully funded (x j = capj ), saying that every agent’s bang
per-buck ratio for that good should exceed their “normal” bang-per-buck ratio eλi by a common agent-independent factor eμj . On the above example, this leads the program to select the most natural equilibrium (and this remains the case if the caps and endowments are varied), suggesting that our convex program program might define a desirable decision rule for selecting Lindahl equilibria.
5.4 Computation and Experiments
Let us briefly discuss how to solve Program 14. Numerically, the program can be solved using any conic convex optimization solver supporting exponential cones, such as MOSEK, COPT, Clarabel, ECOS, or SCS, by formulating the program as
max
b ≥0,x ≥0,t
Í
i ∈N ,j ∈Mi
bi j log vi j − ti j
s.t. (x j, bi j, −ti j ) ∈ Kexp for all i ∈ N , j ∈ Mi
Í
j ∈Mi
bi j ≤ Bi for all i ∈ N
xj = Í
i∈Nj
bi j for all j ∈ M
x j ≤ capj for all j ∈ M
where Kexp = {(x1, x2, x3) : x1 ≥ x2ex3/x2 } is the (primal) exponential cone. We built a simple online tool for solving moderate-size instances with the SCS solver [O’Donoghue et al., 2016], available at
25

Christian Kroer and Dominik Peters
0
200
400
600
800s
0 10 20 30 40 50 60 70 80 90 100 110 120 130
Number of projects
Number of projects
Number of projects
Number of projects
Number of projects
Number of projects
Number of projects
Number of projects
Number of projects
Solve time
Solve time
Solve time
Solve time
Solve time
Solve time
Solve time
Solve time
Solve time
Fig. 2. Results of our experiments on Pabulib instances, showing the solve time of the MOSEK solver as a function of the number of projects in the instance. The largest instances are from Warsaw and Amsterdam.
dominik-peters.de/demos/lindahl/. From a complexity-theoretic perspective, an ε-optimal solution to Program 14 can be computed in polynomial time using the ellipsoid method [see, e.g., Vishnoi, 2021, Theorem 13.1]. To evaluate the performance of computing Lindahl equilibrium via Program 14, we implemented it using the MOSEK solver and applied it to the participatory budgeting datasets in the Pabulib repository [Faliszewski et al., 2023]. We find that the program can be solved quite quickly, with s-
olve times shown in Section 5.4. The longest solve time we encountered was 822s (or 1489s including the time to write down the encoding) for an instance from Warsaw with 14 897 voters (with 11 426 distinct approval sets) and 134 projects. For the uncapped setting, Zhao and Freund [2023, Section 4.2] present some experiments on the performance of the proportional response dynamics, and find that it outperforms several alternative solution methods.
5.5 Computing Core Allocations for Separable Piecewise-Linear Concave Utilities
We have set up the capped setting with the caps interpreted as an exogenous constraint. An alternative interpretation is as a capped utility function ui (x) = Í
j ∈M vi j min(x j, capj ). This view suggests a variety of generalizations: for example, we might want to allow different agents to specify different caps. We can generalize further to separable piecewise-linear concave utilities (SPLC). These are utility functions that can be written as a sum over goods (separable), with the term corresponding to a good being a (non-decreasing) piecewise-linear concave function of x j . See Figure 3 for an example. This class of utility functions is well-studied -
for private goods, both for Fisher markets and Arrow–Debreu exchange markets. For these markets, just as for linear utilities, equilibrium exists and is rational under mild conditions; however computing an equilibrium becomes PPAD-complete [Chen and Teng, 2009, Deligkas et al., 2024, Vazirani and Yannakakis, 2011]. A complementary pivot algorithm for computing an equilibrium has been proposed [Garg et al., 2015]. This algorithm is based on linear complementarity [Eaves, 1971, 1976], which interest-
ingly can also be used to show existence of Lindahl equilibria [Munagala et al., 2022b, Appendix A]. We leave the problem of computing Lindahl equilibria for SPLC utilities open, but we show how our result for the capped setting can be used to at least compute a core-stable allocation (up to any desired approximation factor). We do this by reducing an SPLC instance to a capped instance
26

Computing Lindahl Equilibrium for Public Goods with and without Funding Caps
x
f (x)
a1
slope=s1
a2
slope=s2
a3
slope = s3
0
l2
Fig. 3. An example of a piecewise-linear concave function.
(with each piece of the piecewise-linear utilities becoming its own separate good), and show that a Lindahl equilibrium for this instance is core-stable with respect to the SPLC utilities. We begin with formal definitions. A function f : [0, B] → R with f (0) = 0 is piecewise-linear concave if it can be decomposed into a finite number of linear segments, specified by their lengths l1, . . . , lk and slopes s1, . . . , sk with s1 ≥ · · · ≥ sk ≥ 0. Explicitly, for each i ∈ [k], writing ai = l1 + · ·-
 · + li−1 for the left endpoint of the ith segment, we have f (ai + x) = f (ai ) + six for x ∈ [0, li ]. Figure 3 shows an example. A utility function ui is called separable piecewiselinear concave (SPLC) if there exist piecewise-linear concave functions fi j for all j ∈ M such that ui (x) = Í
j ∈M fi j (x) for all allocations x. Note that by subdividing segments if necessary, we may assume that for each project j, all agents i agree on the total number kj of segments in fi j as well as their lengths. At the same time, we can choose this common subdivision in a minimal way, so that from one segment to the next, there is always at least one agent whose slope strictly decreases. Let us write st
i j for the slope of the tth segment of fi j , and let us write lt
j for the length of the tth segment for project j. Any instance of the public goods problem with SPLC utility functions can be translated into an instance with linear utility functions and with caps, using the following construction.
Definition 6. Suppose we are given an SPLC instance I specified by the slopes (st
i j )i ∈N ,j ∈M,t ∈ [kj ]
and lengths (lt
j )j ∈M,t ∈[kj ] of the segments. We construct a public goods instance I ′ with linear utility
functions on the same set of agents N and the new set of projects M′ = Ð
j ∈M { j 1, . . . , jkj } with
capjt = lt
j . The project jt will describe how much of project j will be funded in the area of its tth segment. Finally, we take valuations vi jt = st
ij.
Let us say that an SPLC instance is well-behaved if the derived instance is cap-sufficient in the sense of Definition 3. This is guaranteed to be the case, for example, if for every agent i, the total length of segments with positive slope across all projects is at least B. Similar sufficient conditions are used for private goods equilibria [e.g., Vazirani and Yannakakis, 2011, Section 2].
Theorem 8. Let I be a well-behaved instance of the public goods problem with SPLC utilities. Then any zero-respecting Lindahl equilibrium for the instance I ′ as constructed in Definition 6 can be transformed into a core-stable allocation for the SPLC instance I .
Proof. Suppose that x′ is a zero-respecting Lindahl equilibrium allocation for I ′. By Corollary 1, x′ is Pareto-optimal. Note that we always have si jt ≥ si jt−1 by concavity, and for at least one agent the inequality is strict (by minimality of the chosen common subdivision). Thus, Pareto-optimality implies that if x′
jt > 0 then x ′
jt−1 = capjt (which equals lt
j ). This allows us to define an allocation x for instance I by setting x j = Íkj
t=1x ′
jt . We now argue that x is core stable.
Suppose not, and there is some blocking coalition S ⊆ N and objection z = (zj )j ∈M such that
Í
j∈M zj ≤ Í
i∈S Bi and for all i ∈ S, we have ui (z) ≥ ui (x), with strict inequality for at least i ∈ S.
27

Christian Kroer and Dominik Peters
We construct a core objection z′ for x′, contradicting its core stability (Proposition 2). For each j ∈ M, let t be chosen minimal such that l1
j + · · · + lt−1
j ≥ zj < l1
j +· · ·+lt
j . Then set z′
jr = capjr = lr
j
for r = 1, . . . , t − 1 and z′
jt = zj − (l1
j + · · · + lt−1
j ), as well as z′
jr = 0 for r = t + 1, . . . , kj . Then it is easy to see that ui (z′) = ui (z) for all i, and similarly ui (x′) = ui (x) for all i, and thus z′ is a core deviation to x′, a contradiction. □
6 CONCLUSION
We have developed a new class of convex programs that can be used to efficiently compute Lindahl equilibria both in the uncapped and the capped setting. These new programs open up many opportunities for future research. In the uncapped setting, our new program might lead to new proofs of known results for the wellstudied maximum Nash welfare rule. This might include the result about participation incentives of Brandl et al. [2022] or the axiomatic characterization of Guerdjikova and Nehring [2014]-
. Perhaps our program could also shed light on the other uses of the Eisenberg–Gale program across statistics, information theory, and medical imaging, as discussed in Section 1.2. For the capped setting, our computability result has implications for the discrete public goods model, because it allows the efficient implementation of the 9.27-approximation to the core obtained by Munagala et al. [2022b], rather than having to rely on their 67.37-approximation. Munagala et al. [2022b] used Lindahl eq-
uilibrium as a black box to obtain their approximation result; reasoning about the structure of our convex program program might lead to even better bounds. Since our focus has been on computational questions, we have not considered strategic aspects. Lindahl equilibrium is well-known to have high informational requirements, and in particular we need to know the truthful valuations of the agents to compute it. Interpreted as a decision rule [Gul and Pesendorfer, 2020], Lindahl equilibrium is not s-
trategyproof and can be manipulated both in a free-riding sense [Brandl et al., 2021, Section 5.3], and in some paradoxical ways [Aziz et al., 2020, Theorem 3(ii)], even in the uncapped setting. Manipulability is unavoidable if one desires a Pareto-efficient and core-stable solution, both in the uncapped setting [Brandl et al., 2021, Theorem 2 and Theorem 3] and in the capped setting [Bei et al., 2024, Theorem 6.2]. These impossibilities apply even for approval (0/1) preferences. For more general -
linear utilities, strategyproofness is only attainable by dictatorial-type rules [Hylland, 1980], even in the uncapped setting. We leave several interesting technical questions open. Is the optimum of our program unique in utilities? This is known to be true for the uncapped setting, by strict convexity (in utilities) of the Eisenberg–Gale program. Can we develop first-order methods for the capped settings, or derive a natural dynamics converging to an equilibrium? Applying mirror descent to our p-
rogram does not appear to lead to a nice closed-form update like in the uncapped setting. Finally, can the cap constraint be generalized? For example, one could apply cap constraints on the total spending of sets of public goods. This would allow us to model multi-issue and multi-round decision making settings [see, e.g., Banerjee et al., 2023, Section 5]. It would also allow us to embed private goods in the model [as in Conitzer et al., 2017], and potentially connect the notions of Fisher market -
equilibrium and Lindahl equilibrium.
REFERENCES
Stéphane Airiau, Haris Aziz, Ioannis Caragiannis, Justin Kruger, Jérôme Lang, and Dominik Peters. 2023. Portioning using ordinal preferences: Fairness and efficiency. Artificial Intelligence 314 (2023), 103809. doi:10.1016/j.artint.2022.103809 [→ p. 2, 5, 14] Haris Aziz, Anna Bogomolnaia, and Hervé Moulin. 2020. Fair mixing: The case of dichotomous preferences. ACM Transactions on Economics and Computation (TEAC) 8, 4, Article 18 (2020), 27 pages. doi:10.1145/3417738 [→ p. 2, 5, 10, 28]
28

Computing Lindahl Equilibrium for Public Goods with and without Funding Caps
Haris Aziz, Markus Brill, Vincent Conitzer, Edith Elkind, Rupert Freeman, and Toby Walsh. 2017. Justified Representation in approval-based committee voting. Social Choice and Welfare 48, 2 (2017), 461–485. doi:10.1007/s00355-016-1019-3 [→ p. 5, 20] Haris Aziz, Xinhang Lu, Mashbat Suzuki, Jeremy Vollen, and Toby Walsh. 2023a. Best-of-both-worlds fairness in committee voting. arXiv:2303.03642 [cs.GT] https://arxiv.org/abs/2303.03642 [→ p. 2] Haris Aziz, Evi Micha, and Nisarg Shah. 2023b. Group Fairn-
ess in Peer Review. In Advances in Neural Information Processing Systems, Vol. 36. 64885–64895. https://proceedings.neurips.cc/paper_files/paper/2023/file/ ccba10dd4e80e7276054222bb95d467c-Paper-Conference.pdf [→ p. 6] Haris Aziz and Nisarg Shah. 2021. Participatory budgeting: Models and approaches. Springer, 215–236. doi:10.1007/978-3030-54936-7_10 [→ p. 2, 5] Siddhartha Banerjee, Vasilis Gkatzelis, Safwan Hossain, Billy Jin, Evi Micha, and Nisarg Shah. 2023. Proportionally fair online allocation-
 of public goods with predictions. In Proceedings of the 32nd International Joint Conference on Artificial Intelligence (IJCAI). 20–28. doi:10.24963/ijcai.2023/3 [→ p. 28] Amir Beck. 2017. First-Order Methods in Optimization. Society for Industrial and Applied Mathematics (SIAM). doi:10.1137/ 1.9781611974997 [→ p. 11, 15] Xiaohui Bei, Xinhang Lu, and Warut Suksompong. 2024. Truthful cake sharing. Social Choice and Welfare (2024), 1–35. doi:10.1007/s00355-023-01503-0 [→ p. 2, 5, 28] Benjamin Birnba-
um, Nikhil R. Devanur, and Lin Xiao. 2011. Distributed algorithms via gradient descent for Fisher markets. In Proceedings of the 12th ACM Conference on Electronic Commerce (EC). 127–136. doi:10.1145/1993574.1993594 [→ p. 3, 12, 15, 24] Anna Bogomolnaia, Hervé Moulin, and Richard Stong. 2005. Collective choice under dichotomous preferences. Journal of Economic Theory 122, 2 (2005), 165–184. doi:10.1016/j.jet.2004.05.005 [→ p. 2, 5] Florian Brandl, Felix Brandt, Matthias Greger, Dominik Peters, Chri-
stian Stricker, and Warut Suksompong. 2022. Funding public projects: A case for the Nash product rule. Journal of Mathematical Economics 99 (2022), 102585. doi:10.1016/j. jmateco.2021.102585 [→ p. 2, 5, 7, 8, 18, 21, 28] Florian Brandl, Felix Brandt, Dominik Peters, and Christian Stricker. 2021. Distribution rules under dichotomous preferences: two out of three ain’t bad. In Proceedings of the 22nd ACM Conference on Economics and Computation (EC). 158–179. doi:10.1145/3465456.3467653 [→ p. 2, 5, 2-
8] Felix Brandt, Matthias Greger, Erel Segal-Halevi, and Warut Suksompong. 2024. Coordinating charitable donations. arXiv:2305.10286 [econ.TH] [→ p. 2, 6] Ioannis Caragiannis, David Kurokawa, Hervé Moulin, Ariel D Procaccia, Nisarg Shah, and Junxing Wang. 2019. The unreasonable fairness of maximum Nash welfare. ACM Transactions on Economics and Computation (TEAC) 7, 3 (2019), 1–32. doi:10.1145/3355902 [→ p. 5] Ioannis Caragiannis, Evi Micha, and Nisarg Shah. 2024. Proportional Fairness in Non-Cent-
roid Clustering. In Proceedings of the 38th Annual Conference on Neural Information Processing Systems (NeurIPS). https://openreview.net/forum?id=Actjv6Wect [→ p. 6] Bhaskar Ray Chaudhury, Linyi Li, Mintong Kang, Bo Li, and Ruta Mehta. 2022. Fairness in Federated Learning via CoreStability. In Advances in Neural Information Processing Systems, Vol. 35. 5738–5750. PDF at proceedings.neurips.cc. [→ p. 6] Xingyu Chen, Brandon Fain, Liang Lyu, and Kamesh Munagala. 2019. Proportionally fair clustering.-
 In Proceedings of the 36th International Conference on Machine Learning (ICML). PMLR, 1032–1041. https://proceedings.mlr.press/v97/chen19d.html [→ p. 6] Xi Chen and Shang-Hua Teng. 2009. Spending is not easier than trading: on the computational equivalence of Fisher and Arrow-Debreu equilibria. In Proceedings of the 20th International Symposium on Algorithms and Computation (ISAAC). 647–656. [→ p. 26] Yu Cheng, Zhihao Jiang, Kamesh Munagala, and Kangning Wang. 2020. Group fairness in committee se-
lection. ACM Transactions on Economics and Computation (TEAC) 8, 4, Article 23 (2020), 18 pages. doi:10.1145/3417750 [→ p. 3] Richard Cole, Nikhil R. Devanur, Vasilis Gkatzelis, Kamal Jain, Tung Mai, Vijay V. Vazirani, and Sadra Yazdanbod. 2017. Convex program duality, Fisher markets, and Nash social welfare. In Proceedings of the 2017 ACM Conference on Economics and Computation (EC). 459–460. doi:10.1145/3033274.3085109 [→ p. 11, 16] Vincent Conitzer, Rupert Freeman, and Nisarg Shah. 2017. Fair p-
ublic decision making. In Proceedings of the 2017 ACM Conference on Economics and Computation (EC). 629–646. doi:10.1145/3033274.3085125 [→ p. 28] Thomas Cover. 1984. An algorithm for maximizing expected log investment return. IEEE Transactions on Information Theory 30, 2 (1984), 369–373. doi:10.1109/TIT.1984.1056869 [→ p. 3, 5] Imre Csiszár. 1974. On the computation of rate-distortion functions (corresp.). IEEE Transactions on Information Theory 20, 1 (1974), 122–124. doi:10.1109/TIT.1974.1055146-
 [→ p. 5]
29

Christian Kroer and Dominik Peters
Imre Csiszár. 1984. Information geometry and alternating minimization procedures. Statistics and Decisions Supplemental Issue No. 1 (1984), 205–237. https://dominik-peters.de/archive/csiszar1984.pdf [→ p. 5] Argyrios Deligkas, John Fearnley, Alexandros Hollender, and Themistoklis Melissourgos. 2024. Constant inapproximability for Fisher markets. In Proceedings of the 25th ACM Conference on Economics and Computation (EC). 13–39. doi:10.1145/ 3670865.3673533 [→ p. 26] Nikhil R. Devanur, Christos H. -
Papadimitriou, Amin Saberi, and Vijay V. Vazirani. 2008. Market equilibrium via a primal–dual algorithm for a convex program. Journal of the ACM (JACM) 55, 5 (2008), 1–18. doi:10.1145/1411509.1411512 [→ p. 14] B. Curtis Eaves. 1971. On the basic theorem of complementarity. Mathematical Programming 1, 1 (1971), 68–75. doi:10.1007/ BF01584073 [→ p. 26] B. Curtis Eaves. 1976. A finite algorithm for the linear exchange model. Journal of Mathematical Economics 3, 2 (1976), 197–203. doi:10.1016/0304-406-
8(76)90028-8 [→ p. 26] Soroush Ebadian and Evi Micha. 2025. Boosting Sortition via Proportional Representation. In Proceedings of 24th International Conference on Autonomous Agents and Multiagent Systems (AAMAS). Forthcoming. [→ p. 6]
Edmund Eisenberg. 1961. Aggregation of utility functions. Management Science 7, 4 (1961), 337–350. doi:10.1287/mnsc.7.4.337 [→ p. 2, 13] Edmund Eisenberg and David Gale. 1959. Consensus of subjective probabilities: The pari-mutuel method. The Annals of Mathematical Statistics 30, 1 (1959), 165–168. doi:10.1214/aoms/1177706369 [→ p. 2, 13] Brandon Fain, Ashish Goel, and Kamesh Munagala. 2016. The core of the participatory budgeting problem. In Proceedings of the 12th International Conference on Web-
 and Internet Economics (WINE). 384–399. doi:10.1007/978-3-662-54110-4_27 [→ p. 2, 3, 4, 5, 6, 13, 14, 20] Brandon Fain, Kamesh Munagala, and Nisarg Shah. 2018. Fair allocation of indivisible public goods. In Proceedings of the 2018 ACM Conference on Economics and Computation (EC). 575–592. doi:10.1145/3219166.3219174 [→ p. 6]
Piotr Faliszewski, Jarosław Flis, Dominik Peters, Grzegorz Pierczyński, Piotr Skowron, Dariusz Stolicki, Stanisław Szufa, and Nimrod Talmon. 2023. Participatory budgeting: Data, tools, and analysis. In Proceedings of the 32nd International Joint Conference on Artificial Intelligence (IJCAI). 2667–2674. doi:10.24963/ijcai.2023/297 [→ p. 26]
Duncan K. Foley. 1970. Lindahl’s solution and the core of an economy with public goods. Econometrica (1970), 66–72. doi:10.2307/1909241 [→ p. 2, 3, 5, 6, 8, 10, 21] Jugal Garg, Ruta Mehta, Milind Sohoni, and Vijay V. Vazirani. 2015. A complementary pivot algorithm for market equilibrium under separable, piecewise-linear concave utilities. SIAM J. Comput. 44, 6 (2015), 1820–1847. doi:10.1137/140971002 [→ p. 26] Nikhil Garg, Ashish Goel, and Benjamin Plaut. 2021. Markets for public decision-making. -
Social Choice and Welfare 56, 4 (2021), 755–801. doi:10.1007/s00355-020-01298-4 [→ p. 20] Hilary Greaves and Owen Cotton-Barratt. 2023. A bargaining-theoretic approach to moral uncertainty. Journal of Moral Philosophy 1, aop (2023), 1–43. doi:10.1163/17455243-20233810 [→ p. 5] Ani Guerdjikova and Klaus Nehring. 2014. Weighing experts, weighing sources: The diversity value. (2014). https://dominikpeters.de/archive/guerdjikova2014.pdf Working Paper. [→ p. 2, 5, 13, 28] Faruk Gul and Wolfgang Pesendo-
rfer. 2020. Lindahl equilibrium as a collective choice rule. arXiv:2008.09932 [econ.TH] [→ p. 5, 28] Aanund Hylland. 1980. Strategyproofness of voting procedures with lotteries as outcomes and infinite sets of strategies. (1980). https://www.sv.uio.no/econ/personer/vit/aanundh/upubliserte-artikler-og-notater/Strategy%20Proofness%5B1% 5D.pdf unpublished. [→ p. 28] Zhihao Jiang, Kamesh Munagala, and Kangning Wang. 2020. Approximately stable committee selection. In Proceedings of the 52nd Annual ACM -
SIGACT Symposium on Theory of Computing (STOC). 463–472. doi:10.1145/3357713.3384238 [→ p. 3] Mamoru Kaneko. 1977. The ratio equilibrium and a voting game in a public goods economy. Journal of Economic Theory 16, 2 (1977), 123–136. doi:10.1016/0022-0531(77)90001-1 [→ p. 5, 8] Leon Kellerhals and Jannik Peters. 2024. Proportional Fairness in Clustering: A Social Choice Perspective. In Proceedings of the 38th Annual Conference on Neural Information Processing Systems (NeurIPS). https://openreview.ne-
t/forum?id= KsLX5pFpOs [→ p. 6] Hidetoshi Komiya. 1988. Elementary proof for Sion’s minimax theorem. Kodai Mathematical Journal 11, 1 (1988), 5 – 7. doi:10.2996/kmj/1138038812 [→ p. 15] Martin Lackner and Piotr Skowron. 2023. Multi-Winner Voting with Approval Preferences. Springer. doi:10.1007/978-3-03109016-5 [→ p. 5] Yen-Huan Li, Carlos A. Riofrio, and Volkan Cevher. 2018. A general convergence result for mirror descent with Armijo line search. arXiv:1805.12232 [math.OC] [→ p. 3] Erik Lindahl. 1-
919. Just taxation—a positive solution. Translated from German (Die Gerechtigkeit der Besteuerung, Lund 1919, Part I, Chap. 4, pp. 85–98: Positive Lösung) by Elizabeth Henderson. In Classics in the Theory of Public Finance, Richard A. Musgrave and Alan T. Peacock (Eds.). Palgrave Macmillan (1958), 168–176. doi:10.1007/978-1-349-23426-4_11 [→ p. 2, 5]
30

Computing Lindahl Equilibrium for Public Goods with and without Funding Caps
Andreu Mas-Colell and Joaquim Silvestre. 1989. Cost share equilibria: A Lindahlian approach. Journal of Economic Theory 47, 2 (1989), 239–256. doi:10.1016/0022-0531(89)90019-7 [→ p. 5, 8] Marcin Michorzewski, Dominik Peters, and Piotr Skowron. 2020. Price of fairness in budget division and probabilistic social choice. In Proceedings of the 34th AAAI Conference on Artificial Intelligence (AAAI). 2184–2191. doi:10.1609/aaai.v34i02.5594 [→ p. 5] James C. Moore. 2006. General Equilibrium and Welfare E-
conomics: An Introduction. Springer. doi:10.1007/978-3-540-32223-8 [→ p. 8] Hervé Moulin. 2004. Fair Division and Collective Welfare. MIT Press. doi:10.7551/mitpress/2954.001.0001 [→ p. 2] Kamesh Munagala, Yiheng Shen, and Kangning Wang. 2022a. Auditing for core stability in participatory budgeting. In Proceedings of the 18th International Conference on Web and Internet Economics (WINE). 292–310. doi:10.1007/978-3-03122832-2_17 [→ p. 5] Kamesh Munagala, Yiheng Shen, Kangning Wang, and Zhiyi Wang. -
2022b. Approximate core for committee selection via multilinear extension and market clearing. In Proceedings of the 2022 Annual ACM-SIAM Symposium on Discrete Algorithms (SODA). 2229–2252. doi:10.1137/1.9781611977073.89 [→ p. 3, 8, 20, 26, 28] John F. Nash. 1950. The bargaining problem. Econometrica 18, 2 (1950), 155–162. doi:10.2307/1907266 [→ p. 2] Brendan O’Donoghue, Eric Chu, Neal Parikh, and Stephen Boyd. 2016. Conic Optimization via Operator Splitting and Homogeneous Self-Dual Embedding. Jo-
urnal of Optimization Theory and Applications 169, 3 (June 2016), 1042–1068. http://stanford.edu/~boyd/papers/scs.html [→ p. 25] Dominik Peters. 2019. Economic design for effective altruism. The Future of Economic Design: The Continuing Development of a Field as Envisioned by Its Researchers (2019), 381–388. doi:10.1007/978-3-030-18050-8_53 [→ p. 6] Dominik Peters. 2025. The Core of Approval-Based Committee Elections with Few Candidates. arXiv:2501.18304 [cs.GT] [→ p. 5, 20] Dominik Peters, Grzego-
rz Pierczyński, Nisarg Shah, and Piotr Skowron. 2021b. Market-based explanations of collective decisions. In Proceedings of the 35th AAAI Conference on Artificial Intelligence (AAAI). 5656–5663. doi:10.1609/aaai.v35i6. 16710 [→ p. 5] Dominik Peters, Grzegorz Pierczyński, and Piotr Skowron. 2021a. Proportional Participatory Budgeting with Additive Utilities. In Advances in Neural Information Processing Systems, Vol. 34. 12726–12737. https://proceedings.neurips.cc/ paper_files/paper/2021/file/69f8ea-
31de0c00502b2ae571fbab1f95-Paper.pdf [→ p. 5] Dominik Peters and Piotr Skowron. 2020. Proportionality and the limits of welfarism. In Proceedings of the 21st ACM Conference on Economics and Computation (EC). 793–794. Full version arXiv:1911.11747. [→ p. 20] Grzegorz Pierczyński and Piotr Skowron. 2022. Core-stable committees under restricted domains. In Proceedings of the 18th International Conference on Web and Internet Economics (WINE). 311–329. doi:10.1007/978-3-031-22832-2_18 [→ p. 5] Simon Re-
y and Jan Maly. 2023. The (computational) social choice take on indivisible participatory budgeting. arXiv:2303.00621 [cs.GT] https://arxiv.org/abs/2303.00621 [→ p. 2, 5] Ralph Tyrell Rockafellar. 1970. Convex Analysis. Princeton Mathematical Series, Vol. 28. Princeton University Press. doi:10.1515/9781400873173 [→ p. 11, 12] Andrzej Ruszczynski. 2011. Nonlinear Optimization. Princeton University Press. doi:10.2307/j.ctvcm4hcj [→ p. 11] Paul A. Samuelson. 1954. The pure theory of public expenditur-
e. The Review of Economics and Statistics 36, 4 (1954), 387–389. doi:10.2307/1925895 [→ p. 2] Vadim I Shmyrev. 1983. On an approach to the determination of equilibrium in elementary exchange models. In Doklady Akademii Nauk SSSR, Vol. 268:5. 1062–1066. https://www.mathnet.ru/eng/dan10141 (In Russian). [→ p. 3, 14] Vadim I. Shmyrev. 2009. An algorithm for finding equilibrium in the linear exchange model with fixed budgets. Journal of Applied and Industrial Mathematics 3, 4 (2009), 505. doi:10.1134/-
S1990478909040097 [→ p. 3, 14, 15] Mashbat Suzuki and Jeremy Vollen. 2024. Maximum flow is fair: A network flow approach to committee voting. In Proceedings of the 25th ACM Conference on Economics and Computation (EC). 964–983. doi:10.1145/3670865.3673603 [→ p. 2, 3, 5, 20] Anne van den Nouweland. 2015. Lindahl and equilibrium. In Individual and Collective Choice and Social Welfare: Essays in Honor of Nick Baigent, Constanze Binder, Giulio Codognato, Miriam Teschl, and Yongsheng Xu (Eds.). Springe-
r, 335–362. doi:10.1007/978-3-662-46439-7_18 [→ p. 5, 8] Yehuda Vardi and D. Lee. 1993. From image deblurring to optimal investments: Maximum likelihood solutions for positive linear inverse problems. Journal of the Royal Statistical Society Series B: Statistical Methodology 55, 3 (1993), 569–598. doi:10.1111/j.2517-6161.1993.tb01925.x [→ p. 5] Yehuda Vardi, Larry A Shepp, and Linda Kaufman. 1985. A statistical model for positron emission tomography. Journal of the American statistical Association-
 80, 389 (1985), 8–20. doi:10.1080/01621459.1985.10477119 [→ p. 5] Vijay V. Vazirani. 2012. The notion of a rational convex program, and an algorithm for the Arrow-Debreu Nash bargaining game. Journal of the ACM (JACM) 59, 2 (2012), 1–36. doi:10.1145/2160158.2160160 [→ p. 14] Vijay V. Vazirani and Mihalis Yannakakis. 2011. Market equilibrium under separable, piecewise-linear, concave utilities. Journal of the ACM (JACM) 58, 3 (2011), 1–25. doi:10.1145/1970392.1970394 [→ p. 26, 27]
31

Christian Kroer and Dominik Peters
Nisheeth K. Vishnoi. 2021. Algorithms for Convex Optimization. Cambridge University Press. doi:10.1017/9781108699211 https://convex-optimization.github.io/. [→ p. 26] Fang Wu and Li Zhang. 2007. Proportional response dynamics leads to market equilibrium. In Proceedings of the 39th Annual ACM Symposium on Theory of Computing (STOC). 354–363. doi:10.1145/1250790.1250844 [→ p. 3, 18] Li Zhang. 2011. Proportional response dynamics in the Fisher market. Theoretical Computer Science 412, 24 (2011), 2691-
–2698. doi:10.1016/j.tcs.2010.06.021 [→ p. 3, 18] Renbo Zhao. 2023. Convergence rate analysis of the multiplicative gradient method for PET-type problems. Operations Research Letters 51, 1 (2023), 26–32. doi:10.1016/j.orl.2022.11.010 [→ p. 3, 5, 20] Renbo Zhao and Robert M. Freund. 2023. Analysis of the Frank–Wolfe method for convex composite optimization involving a logarithmically-homogeneous barrier. Mathematical programming 199, 1 (2023), 123–163. doi:10.1007/s10107-022-01820-9 [→ p. 26]
32

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:55.488Z
- **Text Length:** 108370 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 32 of 32
