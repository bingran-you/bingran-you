# PDF Document: Liuh - 2025 - How Fixed-Amount Transactions and Liquidity Constraints Amplify Wealth Inequality A Kinetic Model D.pdf

**File Path:** Liuh - 2025 - How Fixed-Amount Transactions and Liquidity Constraints Amplify Wealth Inequality A Kinetic Model D.pdf

**Processed Date:** 2026-02-10T18:13:32.998Z

**File Size:** 345.40 KB

**Total Pages:** 15

**Extracted Pages:** 15

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3138

**Title:** How Fixed-Amount Transactions and Liquidity Constraints Amplify Wealth Inequality: A Kinetic Model Deviating from the Maximum Entropy Benchmark

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

How Fixed-Amount Transactions and Liquidity Constraints
Amplify Wealth Inequality: A Kinetic Model Deviating from
the Maximum Entropy Benchmark
Jihyuan Liuh
November 12, 2025
Abstract
This paper investigates the emergence of wealth inequality through a minimalist ki
netic exchange model that incorporates two fundamental economic features: fixed-amount
transactions and hard budget constraints. In contrast to the maximum entropy principle,
which predicts an exponential Boltzmann-Gibbs distribution with moderate inequality
(Gini ≈ 0.333) for unconstrained wealth exchange, we demonstrate that these realistic
trading rules drive the system toward a highly unequal steady state. We develop a self
consistent mean-field theory, deriving a master equation where agent income follows a
Poisson process coupled to the poverty rate. Numerical solution reveals a stationary dis
tribution characterized by a substantial pauper class (p0 ≈ 55.1%), high Gini coefficient
(G ≈ 0.649), and exponential tail—significantly deviating from the maximum entropy
benchmark. Agent-based simulations confirm these findings (p0 ≈ 45.2%, G ≈ 0.618). We
identify the poverty trap as the key mechanism: the liquidity constraint creates asymmetric
economic agency, where zero-wealth agents become passive recipients, unable to partici
pate in wealth circulation. This work establishes that substantial inequality can emerge
spontaneously from equal-opportunity exchanges under basic economic constraints, with
out requiring agent heterogeneity or multiplicative advantage, providing a mechanistic
foundation for understanding poverty as an emergent property of exchange rules. Key
words: Wealth Inequality, Poverty Trap, Kinetic Exchange Models, Maximum Entropy
Principle, Mean-Field Theory, Econophysics, Agent-Based Modeling, Stationary Distri
bution, Gini Coefficient
JEL Codes: O33.
1
arXiv:2511.08202v1 [physics.soc-ph] 11 Nov 2025

1 Introduction
1.1 The Pervasiveness of Wealth Inequality
The unequal distribution of wealth is a ubiquitous and persistent feature of nearly all modern
economies [1]. Understanding the fundamental mechanisms that give rise to such macro
scopic inequality from microscopic interactions remains a central challenge across disciplines,
including economics, statistical physics, and complexity science.
1.2 Theoretical Background: Kinetic Models and the Maximum Entropy
Benchmark
A powerful framework for tackling this problem originates from statistical mechanics, em
ploying agent-based stochastic models inspired by kinetic theory. In these models, wealth is
redistributed among a population through simple, local exchange rules. The most prominent
classes are the kinetic wealth exchange models [2, 3] and the Yard-Sale model [4].
In their simplest forms, with unconstrained random exchanges, these models often lead
to a stationary distribution that can be derived from the principle of maximum entropy
[5]. This principle states that the probability distribution which best represents the current
state of knowledge, constrained only by the conservation of total wealth, is the one with the
largest Shannon entropy. This yields the exponential Boltzmann-Gibbs distribution [3].
For a system with a mean wealth of 1 unit, this distribution takes the form pk = (1/2)k+1
and is characterized by a low level of fundamental inequality, with a Gini coefficient of
approximately G ≈ 0.333. This can be considered the null model or benchmark for in
equality arising from pure randomness under wealth conservation, absent any other structural
constraints.
1.3 Research Gap and Problem Formulation
However, many canonical models employ exchanges where the transaction amount is a fraction
of an agent’s wealth or a randomly varying amount [2, 6]. While mathematically tractable,
this arguably differs from a common real-world scenario: many everyday transactions have
a fixed, minimum unit or a typical scale (e.g., the price of a staple good). Furthermore,
a crucial, often implicit constraint in economic interactions is liquidity: an agent cannot
spend what they do not have. This simple, hard budget constraint can have profound
implications for wealth dynamics.
This leads to our core research questions: When a closed economic system is governed by
1) fixed-amount transactions and 2) a hard budget constraint, does its macroscopic
steady state still align with the maximum entropy benchmark? If not, how do these specific
rules alter the distribution of wealth, and what is the underlying mechanism?
2

1.4 Our Work and Central Thesis
In this paper, we introduce and analyze a minimalist wealth exchange model that incorporates
these two features. Our central thesis is that the interplay between fixed transactions and the
liquidity constraint spontaneously generates a poverty trap, leading to a stationary state
that significantly deviates from the maximum entropy benchmark. This emergent
state exhibits a stable impoverished class and a Gini coefficient substantially higher than
the theoretical baseline of 0.333, demonstrating that substantial inequality can arise from
stochastic, equal-opportunity exchanges under fundamental liquidity constraints, without any
assumed heterogeneity.
We establish this result through a multi-faceted approach: we develop a self-consistent
mean-field theory leading to a master equation, provide a precise numerical solution
for the stationary distribution, and validate our findings with agent-based simulations.
The convergence of all three methods confirms the robustness of our findings and provides a
clear, mechanistic explanation for the emergence of poverty and heightened inequality in this
parsimonious framework.
2 Model and the Maximum Entropy Benchmark
2.1 Model Definition
We consider a closed economic system consisting of N agents, indexed by i = 1, 2, . . . , N . The
total wealth is conserved and normalized such that the initial wealth per agent is 1, yielding
a total wealth of N and a mean wealth ⟨w⟩ = 1.
The dynamics proceed in discrete time steps (rounds). In each round, the following process
occurs simultaneously for all agents:
1. Expenditure Decision: Each agent i checks their current wealth, wi(t). If wi(t) ≥ 1,
the agent is active and must send a fixed payment of exactly 1 unit. If wi(t) = 0, the
agent is inactive and makes no payment.
2. Recipient Selection: Each active agent selects a target recipient j uniformly at ran
dom from the set of all N agents (including themselves). The payment of 1 unit is
transferred from agent i to agent j.
This parallel update rule is crucial for mathematical tractability and avoids artifacts from
sequential updates. The system state is described by the wealth vector w(t) = (w1(t), w2(t), . . . , wN (t)),
which evolves stochastically under two key constraints:
• Wealth Conservation: PN
i=1 wi(t) = N for all t.
• Non-Negative Wealth: wi(t) ≥ 0 due to the hard budget constraint.
The interplay between the fixed transaction amount and the liquidity constraint is the central
feature of this model.
3

2.2 Maximum Entropy Principle and the Ideal Benchmark Distribution
To establish a theoretical baseline, we apply the principle of maximum entropy [5]. This
principle identifies the least biased probability distribution consistent with known constraints,
which corresponds to the most random or disordered macrostate.
For a large population of agents with non-negative integer wealth k, we seek the distribu
tion pk that maximizes the Shannon entropy
H =−
∞
X
k=0
pk ln pk,
subject to the following two constraints:
1. Normalization: P∞
k=0 pk = 1
2. Mean Wealth Constraint: P∞
k=0 kpk = 1
Using the method of Lagrange multipliers, we define the Lagrangian:
L=−
X
k
pk ln pk + λ0 1 −
X
k
pk
!
+ λ1 1 −
X
k
kpk
!
.
Taking the variational derivative with respect to pk and setting it to zero yields:
∂L
∂pk
= − ln pk − 1 − λ0 − λ1k = 0.
Solving for pk:
pk = e−1−λ0 e−λ1k = 1
Z e−λ1k,
where Z = e1+λ0 is the partition function. This is the form of the Boltzmann-Gibbs
distribution [3].
The constants are determined by the constraints. From the normalization condition:
∞
X
k=0
pk = 1
Z
∞
X
k=0
(e−λ1 )k = 1
Z· 1
1 − e−λ1 = 1 ⇒ Z = 1
1 − e−λ1 .
From the mean wealth constraint:
∞
X
k=0
kpk = 1
Z
∞
X
k=0
k(e−λ1 )k = 1
Z · e−λ1
(1 − e−λ1 )2 = 1.
Substituting Z:
(1 − e−λ1 ) · e−λ1
(1 − e−λ1 )2 = e−λ1
1 − e−λ1 = 1.
Solving gives e−λ1 = 1/2, hence λ1 = ln 2. The partition function is Z = 2.
4

The resulting stationary wealth distribution is:
pME
k =1
Z e−λ1k = 1
2· 1
2
k
=1
2
k+1
, (1)
which is a geometric distribution with parameter 1/2.
The Gini coefficient for this distribution can be calculated analytically [3]:
GME = 1
2⟨k⟩ + 1 = 1
3 ≈ 0.333. (2)
This maximum entropy distribution serves as our ideal benchmark. It represents the
most equitable outcome achievable through purely random exchanges under wealth conser
vation, in the absence of any other constraints like the liquidity rule in our model. Any
significant deviation from this benchmark in our model simulations will indicate the profound
impact of the specific trading rules on wealth distribution.
3 Mean-Field Theory and Self-Consistent Master Equation
3.1 Mean-Field Approximation and Poisson Income Hypothesis
To analyze the model in the thermodynamic limit (N → ∞), we employ a mean-field approx
imation that neglects correlations between agents. The system is described by the probability
distribution pk(t), representing the fraction of agents with wealth k ∈ Z≥0 at time t. The
distribution satisfies normalization and mean wealth conservation:
∞
X
k=0
pk(t) = 1,
∞
X
k=0
kpk(t) = 1.
The key dynamical variable is the fraction of active agents who can make payments:
A(t) =
X
k≥1
pk(t) = 1 − p0(t).
The total number of payments sent per round is N A(t). Since each payment is directed to
a uniformly random recipient, the probability that a specific agent receives a given payment
is 1/N . Therefore, the number of payments r received by a fixed agent follows a binomial
distribution:
r ∼ Binomial(N A(t), 1/N ).
In the large-N limit, with A(t) fixed, this converges to a Poisson distribution:
P (r; t) = e−λ(t)[λ(t)]r
r! , where λ(t) = A(t) = 1 − p0(t). (3)
The parameter λ(t) represents the mean income per agent per round, which is self-consistently
determined by the current poverty rate p0(t).
5

3.2 Derivation of the Master Equation
We now derive the master equation governing the evolution of pk(t) under parallel update.
The update consists of two stages: expenditure followed by income.
3.2.1 Expenditure Stage
An agent with initial wealth m transitions to an intermediate wealth j after expenditure:
j=



m − 1, if m ≥ 1,
0, if m = 0.
Let qj(t) denote the probability distribution after expenditure but before income. The tran
sition is deterministic:
q0(t) = p0(t) + p1(t),
qj(t) = pj+1(t), for j ≥ 1.
3.2.2 Income Stage
Each agent receives a random number of units r ∼ Poisson(λ(t)). The final wealth becomes
k = j + r. The transition probability from j to k is:
P (j → k) = e−λ(t)[λ(t)]k−j
(k − j)! , for k ≥ j.
3.2.3 Combined Update
The probability pk(t + 1) is obtained by summing over all possible paths:
pk(t + 1) =
k
X
j=0
qj(t) · P (j → k).
Substituting the expressions for qj(t) and P (j → k) yields the master equation:
pk(t + 1) = [p0(t) + p1(t)] e−λ(t)[λ(t)]k
k! +
k+1
X
m=2
pm(t) e−λ(t)[λ(t)]k−m+1
(k − m + 1)! , (4)
where λ(t) = 1−p0(t). This equation is self-consistent because the parameter λ(t) depends on
the solution p0(t) itself, creating a nonlinear feedback loop that is fundamental to the model’s
dynamics.
6

3.3 Proof of Wealth Conservation
We verify that the mean-field dynamics (4) conserve the average wealth. The expected wealth
at time t + 1 is:
⟨k(t + 1)⟩ =
X
k≥0
kpk(t + 1).
Substituting from (4):
⟨k(t + 1)⟩ =
X
k≥0
k
"
(p0 + p1) e−λλk
k! +
k+1
X
m=2
pm
e−λλk−m+1
(k − m + 1)!
#
= (p0 + p1)
X
k≥0
k e−λλk
k! +
X
m≥2
pm
X
k≥m−1
k e−λλk−m+1
(k − m + 1)! .
The first term is (p0 + p1)λ. In the second term, let j = k − m + 1, so k = j + m − 1:
X
m≥2
pm
X
j≥0
(j + m − 1) e−λλj
j! =
X
m≥2
pm [(m − 1) + λ] .
Combining both terms:
⟨k(t + 1)⟩ = (p0 + p1)λ +
X
m≥2
pm(m − 1) + λ
X
m≥2
pm.
Note that P
m≥2 pm = 1 − p0 − p1. Therefore, the terms with λ sum to:
(p0 + p1)λ + λ(1 − p0 − p1) = λ.
Furthermore, P
m≥2 pm(m − 1) = P
m≥2 mpm − P
m≥2 pm = (⟨k⟩ − p1) − (1 − p0 − p1) = p0,
since ⟨k⟩ = 1. Thus:
⟨k(t + 1)⟩ = λ + p0 = (1 − p0) + p0 = 1.
This completes the proof that the mean-field dynamics preserve the average wealth, ensuring
theoretical consistency.
4 Numerical Solution of the Stationary State
4.1 Numerical Algorithm
The self-consistent master equation (4) constitutes an infinite-dimensional nonlinear system
that is analytically intractable for the stationary state. We therefore develop an efficient
numerical iteration scheme to find the fixed-point distribution {pk} where pk(t + 1) = pk(t).[7]
The stationary version of Eq. (4) is:
pk = (p0 + p1) e−λλk
k! +
k+1
X
m=2
pm
e−λλk−m+1
(k − m + 1)! , for k = 0, 1, 2, . . . (5)
7

with λ = 1 − p0.
The algorithm proceeds as follows:
1. Initialization: The wealth distribution is truncated at a maximum wealth Kmax = 30,
chosen sufficiently large such that pk < 10−8 for k > Kmax. The initial guess is set to
p(0) = (p0 = 0, p1 = 1, pk>1 = 0), followed by normalization.
2. Iteration Step: For iteration n:
• Compute λ(n) = 1 − p(n)
0.
• Compute the new distribution pnew using the right-hand side of Eq. (5).
• Renormalize: p(n+1)
k = pnew
k /P
j pnew
j.
3. Convergence Criterion: The iteration halts when maxk |p(n+1)
k − p(n)
k | < ε, with
ε = 10−8.
4.2 Stationary Distribution and Key Metrics
The numerical solution reveals a stationary distribution that deviates significantly from the
maximum entropy (ME) benchmark derived in Section 2. Figure 1 provides a visual compar
ison of the three distributions:
• The Mean-Field Numerical Solution (this work)
• The Agent-Based Simulation (N=1000 agents, averaged over the last 100 rounds)
• The Maximum Entropy Benchmark pME
k = (1/2)k+1
Table 1: Comparison of key inequality metrics between the Maximum Entropy (ME) benchmark, the mean-field numerical solution, and agent-based simulation (ABM).
Metric ME Benchmark Mean-Field ABM (N=1000)
Poverty Rate p0 NULL 41.4% 45.2% Gini Coefficient G 0.333 0.649 0.618 Mean Wealth ⟨k⟩ 1.0 1.0 1.0
The results in Table 1 and Figure 1 demonstrate several key findings:
• Emergence of a Pauper Class: The most striking feature is the non-zero poverty
rate p0. The model spontaneously generates a substantial impoverished class, which is
absent in the ME benchmark.
• Heightened Inequality: The Gini coefficient from the mean-field solution (G ≈ 0.649)
is 95% higher than the ME benchmark (G ≈ 0.333), indicating significantly greater
wealth concentration.
8

• Altered Distribution Shape: The stationary distribution exhibits a pronounced
“bump” at k = 0 (the pauper class) and a sharper exponential decay for k ≥ 1 compared
to the ME benchmark. This reflects the poverty trap mechanism: once agents reach zero
wealth, they struggle to escape, while the fixed expenditure rate accelerates the wealth
decay for non-poor agents.
The close agreement between the mean-field solution and the ABM simulation validates
our theoretical approach, with minor discrepancies attributable to finite-size effects in the
simulation.
4.3 Convergence and Verification
The numerical algorithm demonstrates robust convergence, typically reaching the stationary
state within 70 iterations. Figure 2 shows the evolution of the poverty rate p0 and the Gini
coefficient during iteration, confirming their convergence to stable values.
To ensure the validity of our solution, we perform two critical checks:
1. Wealth Conservation: After convergence, we verify PKmax
k=0 kpk = 1.000000 ± 10−10,
confirming the numerical solution preserves the mean wealth.
2. Equation Residual: We compute the residual Rk = |pk − RHS of Eq. (5)| for all
k. The maximum residual is below 10−8, confirming the solution satisfies the master
equation with high precision.
The self-consistent relationship λ = 1−p0 is maintained throughout the iteration, with the
final value λ ≈ 0.586 being less than 1. This quantitatively confirms that the average income
is insufficient to cover the mandatory expenditure for active agents, providing a statistical
driving force toward the poverty state.
5 Mechanism Analysis: Poverty Trap and Dynamical Origins
5.1 Qualitative Explanation of the “Poverty Trap”
The significant deviation from the maximum entropy benchmark, characterized by a high
poverty rate and Gini coefficient, can be traced to a poverty trap mechanism emerging from
the interplay between stochasticity and the hard budget constraint. This mechanism operates
through three interconnected channels:
1. Asymmetry in Economic Agency: The hard budget constraint (wi ≥ 0) creates
a fundamental asymmetry. While all agents are equally likely to receive money, only
non-poor agents (w ≥ 1) can send it. Agents at w = 0 lose their ability to initiate
transactions, becoming passive “wealth absorbers” rather than active participants in
the exchange network. This breaks the symmetry inherent in the maximum entropy
scenario.
9

0 1 2 3 4 5 6 7 8 9 10 Wealth Level k
0.0
0.1
0.2
0.3
0.4
0.5
Probability pk
Key Statistics:
Max Entropy: Gini = 0.333, p = 0.0%
Mean-Field: Gini = 0.649, p = 55.1%
ABM: Gini = 0.618, p = 45.2%
Stationary Wealth Distribution (Linear Scale)
Maximum Entropy Benchmark Mean-Field Numerical Solution Agent-Based Simulation (N=1000)
0 1 2 3 4 5 6 7 8 9 10 Wealth Level k
10 6
10 5
10 4
10 3
10 2
10 1
100
Probability pk (log scale)
Stationary Wealth Distribution (Semi-log Scale)
Maximum Entropy Benchmark Mean-Field Numerical Solution Agent-Based Simulation (N=1000)
Figure 1: Comparison of stationary wealth distributions. The mean-field numerical solution and agent-based simulation results show a significant deviation from the maximum entropy benchmark, characterized by a large pauper class (k = 0) and enhanced inequality.
10

0 5 10 15 20 25 30 35 Iteration
0.54
0.56
0.58
0.60
0.62
Value
Final p0 = 0.5510 Iterations: 37
Convergence History of Iterative Solution
Poverty rate p0 Mean wealth
Figure 2: Convergence history of the numerical iteration. The poverty rate p0 and Gini coefficient G converge smoothly to their stationary values, while the mean wealth remains constant at 1.0.
2. Statistical Drift Towards Poverty: The self-consistent mean income λ = 1 − p0 is
a key dynamical variable. In the stationary state, our solution yields λ ≈ 0.586, which
is less than the mandatory expenditure of 1 unit for active agents. This creates a net
negative drift for agents with low positive wealth, statistically pushing them toward the
absorbing boundary at w = 0. An agent with w = 1 must spend that unit and relies
entirely on stochastic income to avoid falling into poverty.
3. Feedback Loop and State Solidification: Once an agent reaches w = 0, escaping
this state requires receiving a sequence of positive income shocks. The probability of
receiving exactly r units is P (r) = e−λλr/r!. The probability of receiving at least 1
unit is 1 − P (0) = 1 − e−λ ≈ 0.444. However, to achieve a stable escape (e.g., reaching
w = 2), multiple consecutive positive shocks are often needed, which has a much lower
probability. This creates a feedback loop where poverty begets poverty, solidifying the
zero-wealth state for a substantial fraction of the population.
This poverty trap is a direct consequence of the specific trading rules and is entirely absent
in the unconstrained kinetic exchange models that lead to the exponential distribution.
5.2 Dialogue with Classical Models: The Savings Analogy
Our model’s mechanism shares a profound conceptual link with a well-established modification
of kinetic exchange models: the introduction of savings. [2, 8] introduced a model where agents
save a fixed fraction λ of their wealth before engaging in random exchange.
While the mechanics differ, the fundamental consequence is analogous. In the savings
model, the saving propensity λ introduces heterogeneity in effective exchange rates, leading
to a departure from the exponential distribution towards a gamma-like distribution with a
higher Gini coefficient. In our model, the hard budget constraint effectively introduces a state
dependent savings rate: the “savings rate” is 100% for agents with w = 0 (they save all their
11

wealth because they cannot spend), and 0% for agents with w = 1 (they must spend their
entire unit). This state-dependent heterogeneity is sufficient to drive the system away from
the maximum entropy benchmark and towards a more unequal, polarized state. Our model
thus provides a minimalist, mechanism-based explanation for the emergence of inequality,
complementary to the savings paradigm.
5.3 Dynamical Constraints and State Space Restriction
The ultimate origin of the deviation from the maximum entropy benchmark lies in the dynam
ical constraints imposed by the trading rules. The principle of maximum entropy, yielding the
exponential distribution, is predicated on the assumption that all microscopic configurations
of wealth consistent with the total wealth constraint are equally accessible [5].
The hard budget constraint wi ≥ 0, coupled with the fixed expenditure rule, acts as
a kinetic constraint that violates this ergodicity assumption. It renders a vast number of
potential wealth configurations dynamically inaccessible. For instance, any configuration that
would require an agent with w = 0 to make a payment is forbidden. The system’s dynamics
are therefore confined to a restricted subset of the full state space.
The maximum entropy distribution for the entire state space is the exponential distribu
tion. However, the system governed by our specific rules explores only a smaller, constrained
sub-space. The stationary distribution we find numerically is, in effect, the maximum en
tropy distribution for this dynamically accessible sub-space, subject to its unique topological
structure imposed by the kinetic constraints . This explains why it differs from the global
maximum entropy solution. The poverty trap is the macroscopic manifestation of this dy
namical restriction, highlighting how microscopic rules can sculpt the accessible landscape
of an economic system, leading to emergent inequality that is not predicted by equilibrium
statistical mechanics without additional dynamical information.
6 Discussion and Extensions
6.1 Synthesis of Findings
This study demonstrates, through both theoretical mean-field analysis and agent-based sim
ulation, that the macroscopic statistical properties of a wealth distribution are exquisitely
sensitive to the microscopic details of exchange rules. The stark contrast between the highly
unequal, poverty-stricken steady state of our model (G ≈ 0.649, p0 ≈ 41%) and the relatively
equal maximum entropy benchmark (G = 1/3, p0 = 0) underscores a central principle: aggre
gate outcomes are not determined by conservation laws alone but are fundamentally shaped
by the dynamical pathways permitted for economic interaction.
6.2 Practical Implications
Our findings carry significant implications for understanding economic inequality:
12

• Inequality from Isotropic Rules: The model establishes that a high level of wealth
inequality and a stable impoverished class can emerge spontaneously from stochastic,
equal-opportunity exchanges. This occurs without invoking any inherent agent hetero
geneity in skill, initial endowment, or strategic advantage, and without multiplicative
growth processes often cited as drivers of inequality [1]. The “poverty trap” is an emer
gent property of the system’s dynamics.
• The Physics of Poverty Traps: The analysis provides a clear, mechanistic picture
of how a fundamental liquidity constraint (wi ≥ 0) can have profound economic conse
quences. It translates the economic concept of a poverty trap into the precise language
of statistical dynamics, featuring a statistical drift towards the absorbing boundary and
a feedback loop that solidifies the impoverished state. This offers a complementary,
bottom-up perspective to economic theories of poverty.
6.3 Limitations and Future Directions
While our model offers conceptual clarity, it abstracts away many real-world complexities.
Key limitations include:
• The absence of debt, credit, and financial institutions.
• The assumption of a fully-connected interaction network, ignoring social or spatial struc
ture.
• The lack of strategic, adaptive, or learning behavior by agents.
• The exclusion of production, investment, and economic growth.
These limitations, however, define a rich agenda for future research:
• Debt and Leverage: Introducing negative wealth (debt) with an interest rate would
explore how access to credit might alleviate or exacerbate the poverty trap.
• Networked Interactions: Implementing the dynamics on realistic social networks
[9] could reveal how network topology influences wealth distribution and the spatial
correlation of poverty.
• Policy Interventions: The model serves as a perfect “test-bed” for evaluating fiscal
policies. Introducing a government that collects taxes (e.g., a fraction of transactions)
and redistributes wealth as a basic income or targeted welfare could quantify the efficacy
of such interventions in reducing inequality and poverty within this framework.
• Strategic Behavior: Incorporating agents with simple saving strategies or imitative
behaviors could bridge the gap towards more realistic, behaviorally-informed models.
13

7 Conclusion
In this work, we have dissected the wealth dynamics of a minimalist economic system governed
by fixed-amount transactions and a hard budget constraint. By developing a self-consistent
mean-field theory and validating it with numerical simulations, we have conclusively shown
that these simple rules drive the system into a stationary state characterized by significant
wealth concentration and a large pauper class.
The maximum entropy distribution, with its Gini coefficient of 1/3, should be regarded as
a fundamental natural scale for inequality arising from pure randomness under wealth con
servation. Our research demonstrates that even the most basic realistic constraints—fixed
transaction units and the inability to spend without funds—can powerfully displace a sys
tem from this benchmark, steering it towards a state of heightened inequality. The emergent
“poverty trap,” a consequence of restricted economic agency and statistical drift, is the mech
anistic heart of this transition.
Therefore, this study underscores a critical insight: to truly understand and address eco
nomic inequality, one must look beyond aggregate constraints and examine the microscopic
rules of economic interaction. The architecture of exchange itself, often overlooked, is a
decisive factor in sculpting the landscape of wealth distribution. Our model provides a foun
dational tool for this essential inquiry.
References
[1] Thomas Piketty. Capital in the Twenty-First Century : a multidimensional approach to
the history of capital and social classes. The British Journal of Sociology, 65(4):736–747,
December 2014.
[2] Anirban Chakraborti and Bikas K. Chakrabarti. Statistical mechanics of money: How
saving propensity affects its distribution. 2000. Publisher: arXiv Version Number: 2.
[3] Adrian Dragulescu and Victor M. Yakovenko. Statistical mechanics of money. The Euro
pean Physical Journal B, 17(4):723–729, October 2000. arXiv:cond-mat/0001432.
[4] Anirban Chakraborti, Ioane Muni Toke, Marco Patriarca, and Frederic Abergel. Econo
physics: Empirical facts and agent-based models. 2009. Publisher: arXiv Version Number:
2.
[5] E. T. Jaynes. Information Theory and Statistical Mechanics. Physical Review, 106(4):620
630, May 1957.
[6] Marco Patriarca, Anirban Chakraborti, Kimmo Kaski, and Guido Germano. Kinetic
theory models for the distribution of wealth: power law from overlap of exponentials.
2005. Publisher: arXiv Version Number: 2.
[7] Claudio Castellano, Santo Fortunato, and Vittorio Loreto. Statistical physics of social
dynamics. Reviews of Modern Physics, 81(2):591–646, May 2009.
14

[8] Arnab Chatterjee, Bikas K. Chakrabarti, and S. S. Manna. Pareto Law in a Kinetic
Model of Market with Random Saving Propensity. Physica A: Statistical Mechanics and
its Applications, 335(1-2):155–163, April 2004. arXiv:cond-mat/0301289.
[9] Matthew O. Jackson. Social and Economic Networks. Princeton University Press, Novem
ber 2010.
15

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:32.998Z
- **Text Length:** 28540 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 15 of 15
