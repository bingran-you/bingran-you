# PDF Document: Kashaev and Lazzati - 2025 - Discrete Choice with Endogenous Peer Selection.pdf

**File Path:** Kashaev and Lazzati - 2025 - Discrete Choice with Endogenous Peer Selection.pdf

**Processed Date:** 2026-02-10T18:15:57.531Z

**File Size:** 435.93 KB

**Total Pages:** 21

**Extracted Pages:** 21

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3131

**Title:** Discrete Choice with Endogenous Peer Selection

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Discrete Choice with Endogenous Peer Selection
Nail Kashaev
Western University
nkashaev@uwo.ca
Natalia Lazzati
UC Santa Cruz
nlazzati@ucsc.edu
November 27, 2025
Abstract We develop a continuous-time peer-effect discrete choice model where peers
that affect the preferences of a given agent are randomly selected based on their
previous choices. We characterize the equilibrium behavior and study the empirical
content of the model. In the model, changes in the choices of peers affect both the set of
peers the agent pays attention to and her preferences over the alternatives. We exploit
variation in choices coupled with variation in the size of the set of potential peers to
recover agents’ preferences and the peer selection mechanism. These nonparametric
identification results do not rely on exogenous variation of covariates.
JEL codes: C31, C33, D83, O33
Keywords: Peer Effects, Random Network, Continuous Time Markov Process
1
arXiv:2511.21446v1 [econ.EM] 26 Nov 2025

1. Introduction
Social interactions are a cornerstone of many economic and social outcomes (Durlauf and Young,
2001). Consumers purchase products after seeing their friends buy them, and firms open new stores
in response to the actions of their competitors. A large empirical literature measures these peer
effects in discrete choice settings under the assumption that agents observe or pay attention to all
their peers. This means that, for instance, consumers take into account the purchasing decisions of
all their friends and firms consider the actions of all their competitors at the moment of making a
decision. In many settings, however, different constraints or limitations might lead agents to pay
attention to the choices of a smaller subset of peers. Ignoring this peer selection mechanism can
lead to incorrect parameter estimates and misleading counterfactual and policy recommendations.
Similar to Kashaev and Lazzati (2019) and Kashaev, Lazzati and Xiao (2025), we study a
continuous-time discrete choice model with social interactions. A finite set of agents is connected by
links that identify potential peers. These links are known by the agents but not by the researcher.
At random times governed by independent Poisson alarm clocks, an agent wakes up and selects an
alternative from a finite menu. When the clock rings, the agent first randomly draws a subset of
peers, called the active set, from the fixed set of her connected peers. The probability of selecting
any given peer depends on the current choices of the agent and her peers, allowing agents to pay
more attention to peers that behave similarly. Conditional on the active set, the agent evaluates the
alternatives under the influence of the active peers and then selects an option. The resulting profile
of choices evolves according to a continuous-time Markov process. We show that if the researcher
observes the choices of all agents over a long period of time, then she can recover the social network
(that is, the set of potential peers for each agent), the peer selection mechanism, and the random
preferences of each agent captured by the distribution over the choice set conditional on realization
of the choices of the active peers.
We offer conditions under which there is a unique equilibrium. In our model, this is an invariant
distribution over the set of choice configurations that specifies the frequency of each profile of
choices in the long run. For the identification of the model, the important feature is that the
2

invariant distribution has full support. Since the probability of selecting a peer is affected by
previous choices of connected agents, which are determined by the equilibrium distribution, the
realized equilibrium distribution over random active sets is endogenous.
We illustrate some features of the model via a simple example with closed form solution.
Among others, this example shows that allowing agents to pay attention more often to agents that
select similar alternatives can increase the correlation of choices among similar agents. In specific
applications, this can be interpreted as polarization!
Our contribution is threefold. First, we connect bounded rationality with peer effects by
embedding endogeneous peer selection into a discrete choice peer effect model. Second, similar to
the use of menu variation in consideration set models, we exploit variation in the number of potential
peers to identify the network, the peer-selection mechanism, and preference parameters from a
single long panel of choices while imposing only mild exclusion and dimension-reducing conditions.
Finally, in a simple two-agent example we show how endogenous attention can qualitatively change
comparative statics: paying attention to peers that make similar choice can either reinforce or
dampen coordination relative to a standard model depending on whether peer effects are positive
or negative.
The starting point of the identification strategy is the set of Conditional Choice Probabilities
(CCPs). Each CCP specifies the frequency of choices made by an agent given the choice configuration
at the time of making the decision. We assume the analyst can consistently estimate these CCPs
from the data. We first show that, under a set of mild restrictions, variation in the choices of
potential peers generates variation in the frequency of choices of a given agent. Thus, the set of
potential peers can be recovered from the data. We then assume that there is some variability in
the size of the set of potential peers across agents. (Since links can be recovered from the data, this
restriction is testable.) If agents are people, this is the same as saying that some people have more
friends than others. The differences in the number of potential peers allow us to recover the rest of
the model via a recursive strategy. We also show that if the variation in the number of connections
is rather limited, then the model can still be recovered assuming some extra shape restrictions.
We finally connect our work to the existing literature. First, the ideas are related to the
3

consideration set models where agents do not pay attention to all available alternatives (see, for
instance, Aguiar, Boccardi, Kashaev and Kim, 2023, and references there in). While this literature
focuses on consideration sets of alternatives, we study “consideration sets” of peers in an interactive
framework. In doing so, our work also contributes to the growing econometric literature on network
formation (see Graham, 2015, De Paula, 2017, Chandrasekhar, 2016, for an overview). Within this
literature, the studies by Leung (2015), Menzel (2015), Miyauchi (2016), Boucher and Mourifie
(2017), Mele (2017), de Paula, Richards-Shubik and Tamer (2018), Thirkettle (2019), Ridder and
Sheng (2020), Sheng (2020), Badev (2021) and Gualdani (2021) have analyzed game-theoretic
models of network formation. While the sets of potential peers in our work remain stable over time,
we allow agents to redefine the set of peers they pay attention to each time they make a decision.
By allowing this attention to depend on the current choices of the agents, we offer a mechanism for
effective network formation. As we mentioned earlier, this mechanism allows for homophily and
can be used to explain polarization.
The remainder of the paper is organized as follows. Section 2 presents the model and its
assumptions. Section 3 elaborates on equilibrium behavior. We establish identification of the model
parameters in Section 4 and conclude in Section 5. All proofs can be find in Appendix A.
2. Model
This section describes the model and the main assumptions we use in the paper.
2.1. Network, Peer Selection, and Preferences
Network. There is a finite set of agents A = {1, 2, . . . , A}, A ≥ 2, choosing from a finite set
of alternatives Y = {0, 1, . . . , Y }, Y ≥ 1. We refer to a vector y = (ya)a∈A ∈ YA as a choice
configuration.
Agents are connected through a social network. The network is described by a set of edges in A,
4

Γ. Each edge identifies two connected agents and the direction of the connection. For each Agent
a ∈ A her reference group is defined as follows:
Na = {a′ ∈ A : a′ ̸= a and there is an edge from a to a′ in Γ} .
Example 1. Suppose that there are four agents and three alternatives. That is, A = {1, 2, 3, 4}
and Y = {0, 1, 2}. The reference groups are
N1 = {2, 3} , N2 = {1} , N C3 = {2} , N4 = ∅.
This means that, for instance, Agents 2 and 3 may affect the choices of Agent 1. □
Peer Selection and Preferences. The revision of choices follows a standard continuous-time
Markov process. Agents have independent Poisson alarm clocks with rates λ = (λa)a∈A. The alarm
of Agent a is triggered at exponentially distributed moments with mean 1/λa. When this happens,
the agent first selects a subset of peers N ⊆ Na to whom she will pay attention to and then makes
a choice under their influence (i.e., at the moment of making a decision only the subset of peers
that the agent selects affect her current choice). We do not model the cognitive process that lead
to peer selection. We take it as given and will identify it nonparametrically.
For any agent, this introduces a two-stage decision process that depends on the current
configuration of choices y:
Step 1 Agent a picks N ⊆ Na. The ex-ante probability that the set N is picked is
Sa (N | y, Na)
with Sa (N | y, Na) ≥ 0 and ∑
N ⊆Na Sa (N | y, Na) = 1.
Step 2 After selecting peers N ⊆ Na, the agent selects an alternative according to a choice rule
Ra (· | y, N ) that satisfies Ra (v | y, N ) ≥ 0 for all v and ∑
v∈Y Ra (v | y, N ) = 1. The choice rule
summarizes the decision process after the peer selection is completed. When it is degenerate, it
leads to a deterministic choice process. We associate choice rules with preferences since, in many
5

instances, the preference parameters can be recovered from the choice rules.
Example 1 (continued). Suppose that, at the moment of choice, Agent 1 only selects Agent 2 from
her reference group Na = {2, 3}. That is N = {2}. Hence, her probability of selecting alternative
1 is R1 (1 | y, {2}) . Assume Agent a’s indirect utility from v given the set of selected peers N is
ua,v (y, N ) + ξa,v,N , where ua,v captures the mean utility from the alternative. The vector of agent
and peer-group-specific taste shocks ξa,N = (ξa,v,N )v∈Y is continuously distributed with conditional
cumulative distribution function (c.d.f.) Fa,ξ(· | y, N ). Then, for v ∈ Y
R1 (v | y, {2}) =
∫
1
(
v = arg max
v′∈Y
{ua,v′ (y, {2}) + ξv′,a,{2}}
)
dFa,ξ(ξa,{2} | y, {2}).
If ξv,a,N s are independent and identically distributed (i.i.d.) shocks, distributed according to the
standard Type I extreme value distribution, then the above expression simplifies to
R1 (v | y, {2}) = exp (u1,v (y, {2}))
∑
v′∈Y exp (u1,v′ (y, {2})) . □
As the example demonstrates, our framework allows dependence between preferences (the mean
utility and the latent preference heterogeneity captured by ξa,N ) and the random set of selected
peers.
Altogether, at the moment of making a choice, the ex-ante probability for Agent a of selecting
each alternative is a finite mixture and is given by
Pa (v | y) = ∑
N ⊆Na
Ra (v | y, N ) Sa (N | y, Na) .
2.2. Assumptions
This section adds more structure to the peer selection process and preferences. Regarding the
selection process, we assume that each peer is selected independently from the others.
Assumption 1 (Independent Selection). The probability of considering a subset of peers N ⊆ Na
6

is given by
Sa (N | y, Na) ≡ ∏
a′∈N
Qa(a′ | y) ∏
a′∈Na\N
(1 − Qa(a′ | y)),
where Qa(a′ | y) is the probability that Agent a′ is selected by Agent a given y such that Qa(a′ | y) = 0
for a′ ̸∈ Na and 0 < Qa(a′ | y) < 1 for a′ ∈ Na.
Assumption 1 substantially reduces the dimensionality of the problem. Without it, one would
need to learn Sa over 2|N | points. Assumption 1 reduces this number to |Na|. It may be restrictive
in some settings. For instance, if selecting Agent a′ increases or decreases the likelihood of Agent
a′′ being selected, then Assumption 1 is violated.
We further assume that the population of agents can be decomposed into a finite set of types
H = {1, 2, . . . , H}, H ≤ A. Formally, there is a known mapping h : A → H such that h(a)
encodes the type of Agent a. Types might relate to covariates or other individual characteristics
that are observed by the researcher. They allow differences between agents beyond the network
structure. Each type in our model incorporates two dimensions: a random choice that captures the
preferences of the person over the set of alternatives; and a limited attention to peers that connects
the preferences of each person to the choices of the subset of peers the person is paying attention
to. These types do not impose any restrictions on the reference group of peers Na, a ∈ A: an agent
might not be connected to some agents of the same type and she can be connected to agents that
are of different types.
Example 1 (continued). Suppose that Agents 1 and 2 have a college degree while Agents 3 and 4
do not. Thus, we can define h as h(1) = h(2) = 1 and h(3) = h(4) = 2 with H = {1, 2}. □
We also impose restrictions on Ra to make the problem more tractable. Let N ̄ v
a (y, N ) be the
average number of peers of Agent a in the nonempty set N who pick v in y. That is,
N ̄ v
a (y, N ) = |{a′ ∈ N : ya′ = v}|
|N | .
We let N ̄a(y, N ) = (N ̄ v
a (y, N ))v∈Y be the vector of such averages. We follow the convention that
N ̄a(y, ∅) = 0 since, for any nonempty N , N ̄a(y, N ) has at least a non-zero component.
7

Assumption 2. For each a, y, a′ ∈ Na, N ⊆ Na, N ̸= ∅, and v
(i) Qa(a′ | y, Na) = Qh(a)(ya, ya′);
(ii) Ra(v | y, N ) = Rh(a)(v | ya, N ̄a(y, N )); and
(iii) Ra(v | y, N ) ̸= Ra(v | y, ∅).
Assumption 2(i) states that the selection probability of a specific peer depends on the current
choice of the agent and the one of the target peer, but not on the identity of the target peer.
This process allows agents, for example, to consider more often agents that have selected similar
alternatives in the recent past. Choices of the other peers do not affect this selection probability.
Example 1 (continued). Assume that Agent a follows a threshold rule when selecting peers to pay
attention to: Agent a′ is selected at the moment of making a choice if and only if ch(a) (ya, ya′) ≥ ε,
where ch(a) (ya, ya′) is an attention index that depends on the previous choices of the agents and ε
is a random attention shock independent of y. Then, the probability of considering Agent a′ is
Qh(a) (ya, ya′ ) = Fε
(
ch(a) (ya, ya′ )
)
, where Fε is the c.d.f. of ε. □
Assumption 2(ii) imposes a type-homogeneity restriction on preferences. Moreover, it requires
the choice rules to depend on the average choices of the group of selected peers. Assumption 2(iii)
means that selecting at least one peer always has an effect on choice rules and if there are no peers
selected, then only own previous choice matters.
Example 1 (continued). Suppose that indirect utilities of alternatives are linear-in-means:
ua
v(y, N ) = αh(a),v(ya) + βh(a),v(ya)N ̄ v
a (y, N ), where αh(a),v(ya) and βh(a),v(ya) ̸= 0 are unknown
parameters that depend on the current choice and the type of Agent a. □
The last assumption is a mild regularity condition that rules out some ties. This restriction
makes it sure that, when we switch agents choice, the effect of this choice on selection does no
cancel the effect of this choice on preferences.
Assumption 3 (Regularity). For all a ∈ A, a′ ∈ Na, there exists v such that
Qh(a)(0, v)
Qh(a)(0, 0) ̸=
∑
N ⊆Na\{a′} [Ra (v | 0, N ∪ {a′}) − Ra (v | 0, N )] Sa (N | 0, Na \ {a′})
∑
N ⊆Na\{a′} [Ra (v | 0v
a′, N ∪ {a′}) − Ra (v | 0, N )] Sa (N | 0, Na \ {a′}) .
8

3. Equilibrium Behavior
The independent Poisson processes of the alarm clocks of the agents lead the selection process of
alternatives through time. They guarantee that the transition rate from choice configuration y to
any different one y′ is as follows
w (y′ | y) =

  
  
0 if ∑
a∈A 1 (y′
a ̸= ya) > 1
∑
a∈A λa Pa (y′
a | y) 1 (y′
a ̸= ya) if ∑
a∈A 1 (y′
a ̸= ya) = 1
. (1)
These transition rates are the out of diagonal terms of the transition rate matrix.1 The diagonal
terms are constructed from them in a simple way
w (y | y) = − ∑
y′∈YA\{y} w (y′ | y) .
We will indicate by W the transition rate matrix. As the number of choice configurations is
(Y + 1)A, it follows that W is a (Y + 1)A × (Y + 1)A matrix. An equilibrium in this model is an
invariant distribution μ : YA → [0, 1], with ∑
y∈YA μ (y) = 1, of the dynamic process with transition
rate matrix W. It indicates the likelihood of each choice configuration y in the long run. This
equilibrium behavior relates to the transition rate matrix in a linear fashion
μW = 0.
The assumptions in the paper guarantee the existence and uniqueness of an invariant distribution.
Importantly, this invariant distribution has full support (i.e., any choice configuration y realizes
with positive probability).
Proposition 3.1. If Assumptions 1 and 2 hold, there exists a unique, full support equilibrium μ.
Example 2. Suppose that the network consists of two identical agents that select between two
alternatives, option 1 and the default option 0. Let us also assume that the random preferences
1This transition rate matrix has many zeros in known locations. Blevins (2017, 2018) offers a nice discuss of this feature and its advantage for identification over discrete time models.
9

only depend on the choice of the other agent. As there is only one agent type, we will drop h(a)
from the notation. Thus, for a = 1, 2, the CCPs can be written in a rather succinct form
Pa (v | y1, y2) = Q (ya, y−a) R (v | 1 − y−a, y−a) + (1 − Q (ya, y−a)) R (v | 0, 0) .
The rates for their Poisson alarm clocks are 1. The transition rate matrix W is as follows.
(0, 0) (0, 1) (1, 0) (1, 1)
(0, 0) ∗ P2 (1 | 0, 0) P1 (1 | 0, 0) 0
(0, 1) P2 (0 | 0, 1) ∗ 0 P1 (1 | 0, 1)
(1, 0) P1 (0 | 1, 0) 0 ∗ P2 (1 | 1, 0)
(1, 1) 0 P1 (0 | 1, 1) P2 (0 | 1, 1) ∗
The diagonal terms, *, are such that the elements in each line add up 0. Note that, by symmetry,
we have P1 (1 | 1, 1) = P2 (1 | 1, 1), P1 (0 | 0, 1) = P2 (0 | 1, 0), P1 (0 | 0, 1) = P2 (0 | 1, 0), and
P1 (0 | 0, 0) = P2 (0 | 0, 0). After a simple calculation, the invariant distribution of choices, or
steady-state equilibrium, can be expressed as follows:
μ(0,0) = P1 (0 | 1, 0) P1 (0 | 1, 1)
P1 (1 | 0, 0) P1 (1 | 0, 1) + P1 (0 | 1, 0) P1 (0 | 1, 1) + 2 P1 (1 | 0, 0) P1 (0 | 1, 1) ,
μ(1,0) = μ(0,1) = P1 (1 | 0, 0) P1 (0 | 1, 1)
P1 (1 | 0, 0) P1 (1 | 0, 1) + P1 (0 | 1, 0) P1 (0 | 1, 1) + 2 P1 (1 | 0, 0) P1 (0 | 1, 1) ,
μ(1,1) = P1 (1 | 0, 0) P1 (1 | 0, 1)
P1 (1 | 0, 0) P1 (1 | 0, 1) + P1 (0 | 1, 0) P1 (0 | 1, 1) + 2 P1 (1 | 0, 0) P1 (0 | 1, 1) .
Note that, in equilibrium, the probability that agents pick the same alternatives (i.e., coordinate) is
μ(1,1) + μ(0,0) = 1
1+ 2
P1 (1 | 0, 1)
P1 (0 | 1, 1) + P1 (0 | 1, 0)
P1 (1 | 0, 0)
.
Next suppose that agents always select their peer if their choices coincide and ignore her otherwise.
That is, Q (0, 0) = Q (1, 1) = 1 and Q (0, 1) = Q (1, 0) = 0. Then the probability that agents pick
10

the same alternatives simplifies to
Prsame = 1
1+ 2
R (1 | 0, 0)
R (0 | 0, 1) + R (0 | 0, 0)
R (1 | 1, 0)
.
If, in contrast, agents select each other only when their choices are different (i.e., Q (0, 0) =
Q (1, 1) = 0 and Q (0, 1) = Q (1, 0) = 1), then
Prdiff = 1
1+ 2
R (1 | 0, 1)
R (0 | 0, 0) + R (0 | 1, 0)
R (1 | 0, 0)
.
Suppose that agents are indifferent between alternatives if the peer is no selected (i.e., R(1 | 0, 0) =
0.5). Then, since f (x) = x(1 − x) achieves its maximum at 0.5,
R (1 | 0, 0) R (0 | 0, 0) = R (1 | 0, 0) (1 − R (1 | 0, 0))
≥ max{R (1 | 0, 1) (1 − R (1 | 0, 1)), R (1 | 1, 0) (1 − R (1 | 1, 0))}
= max{R (1 | 0, 1) R (0 | 0, 1) , R (1 | 1, 0) R (0 | 1, 0)}.
Thus,
R (1 | 0, 0)
R (0 | 0, 1) > R (1 | 0, 1)
R (0 | 0, 0) and R (0 | 0, 0)
R (1 | 1, 0) > R (0 | 1, 0)
R (1 | 0, 0)
and
Prsame > Prdiff .
We can interpret this result by saying that when the peer selection is based on choice similarity,
then agents with similar preferences select each other more often.
Let us finally compare these results with the standard model where agents always pay attention
to their reference groups. In this case, we have P1 (1 | 1, 1) = P1 (1 | 0, 1) = R (1 | 0, 1) and
P1 (1 | 0, 0) = P1 (1 | 1, 0) = R (1 | 1, 0). Thus, the probability that agents pick the same alternatives
11

is
Prstd = 1
1+ 2
R (1 | 0, 1)
R (0 | 0, 1) + R (0 | 1, 0)
R (1 | 1, 0)
.
Interestingly, if the peer effect on preferences is positive (i.e, R (1 | 0, 1) > R (1 | 0, 0) >
R (1 | 1, 0)), then
R (1 | 0, 1)
R (0 | 0, 1) > R (1 | 0, 0)
R (0 | 0, 1) and R (0 | 1, 0)
R (1 | 1, 0) > R (0 | 0, 0)
R (1 | 1, 0)
and
Prstd > Prsame > Prdiff .
However, if the peer effect is negative (i.e, R (1 | 0, 1) < R (1 | 0, 0) < R (1 | 1, 0)), then
R (1 | 0, 1)
R (0 | 0, 1) < R (1 | 0, 1)
R (0 | 0, 0) and R (0 | 1, 0)
R (1 | 1, 0) < R (0 | 1, 0)
R (1 | 0, 0)
and
Prsame > Prdiff > Prstd .
□
4. Identification of the Model
4.1. Identification of the Model from the CCPs
This section shows that all parts of the model can be recovered from a long sequence of choices.
These parts include the network structure, the random preferences and the selection mechanism.
That is, we will recover
(Na)a∈A , (Ra)a∈A , (Qa)a∈A .
12

The starting point of our identification argument is the set of CCPs P = (Pa)a∈A that can be
calculated from the long sequence of choices made by the group members. Recall that, for each
v ∈ Y and a ∈ A
Pa (v | y) = ∑
N ⊆Na
Ra (v | y, N ) Sa (N | y, Na) .
Proposition 4.1. Under Assumptions 1, 2, and 3, Na is identified from Pa for every a.
Proposition 4.1 states that we can recover the reference groups of peers from the CCPs. We next
use a recursive argument to show that we can also recover the random preferences and consideration
probabilities of each agent in the group. These results require variation in the number of peers
across agents within each type.
Assumption 4. For every type t ∈ H, |{|Na| : a ∈ A, h(a) = t}| ≥ 3
Having at least 3 agents of the same type with different number of potential peers provides
enough variation to identify the selection probabilities and choice rules when no peer or just one
peer is selected.
Proposition 4.2. Under Assumptions 1, 2, 3, and 4, Qa, Ra(·|·, ∅) and Ra(·|·, {a′}), a′ ∈ Na, are
identified from Pa for every a.
Although we may not identify the choice rule for all possible active peer groups nonparametrically,
knowing it for the empty set and for singletons is enough for the standard linear-in-means multinomial
logit model.
Proposition 4.3. If the choice rule satisfies
Ra(v | y, N ) = eαh(a),v(ya)+βh(a),v(ya)N ̄av(y,N )
∑
v′∈Y eαh(a),v′ (ya)+βh(a),v′ (ya)N ̄ v′
a (y,N )
with the normalization αh(a),0(ya) = 0, then Ra is identified from Ra(·|·, ∅) and Ra(·|·, {a′}), a′ ∈ Na.
Once the selection mechanism and the choice rule are recovered for the cases in which none and
only one peer is selected, we can recursively identify the choice rule for all other subsets of peers if
13

we have full variation in the size of connected agents within the type. For example, suppose agent
a has 2 peers, a1 and a2 (i.e., Na = {a1, a2}). Then
Pa(v | y) = Sa(∅ | y, Na) Ra(v | y, ∅) + Sa({a1} | y, Na) Ra(v | y, {a1})
+ Sa({a2} | y, Na) Ra(v | y, {a2}) + Sa({a1, a2} | y, Na) Ra(v | y, {a1, a2}).
Hence, since the selection mechanism and the choices rule when noone is selected and when
only one peer is selected is identified, we can recover the choice rule when 2 peers are selected,
Ra(v | y, {a1, a2}). Repeating the same argument for someone who has 3 peers, we can identify
the choice rule when 3 peers are selected. Thus, with enough variation in the number of potential
peers for each type, we can identify Ra without any parametric restrictions.
Assumption 5. For every type t ∈ H,
{2, 3, . . . , max
{a∈A, h(a)=t} |Na|} ⊆ {|Na| : a ∈ A, h(a) = t}.
Assumption 4.4 means that within the type there is some one with 2 peers, someone with 3
peers, etc. This assumption is similar to the full menu variation in the stochastic choice literature
(Aguiar et al., 2023).
The proof of the following results directly follows from Proposition 4.2 and the above discussion.
Proposition 4.4. Suppose the assumptions of Proposition 4.2 are satisfied. If, moreover, Assump
tion 5 is satisfied, then Qa and Ra are identified from Pa for every a.
4.2. Identification of Conditional Choice Probabilities
This section shows that the CCPs, P, and the rates of the Poisson alarm clocks, λ, can be recovered
from a long sequence of choices. We assume the researcher observes the choices of the agents
at time intervals of length ∆ and can consistently estimate Pr
(
yt+∆ = y′ | yt = y
)
for each pair
14

y′, y ∈ YA, to construct a matrix P (∆).2 Matrix P (∆) relates to the transition rate matrix W
by P (∆) = e(∆W). (Here e(∆W) is the matrix exponential of ∆W.) Often, the researcher observes
the precise moment at which an agent revises her strategy and the configuration of choices at
that time. In other cases, the researcher simply observes the configuration of choices at fixed time
intervals —e.g., every Monday. Kashaev et al. (2025) refer to these two cases as Dataset 1 and 2,
respectively. Formally, in Dataset 1, the researcher can consistently estimate lim∆→0 P (∆), and
in Dataset 2, the researcher can consistently estimate P (∆). In the two cases, the identification
question is whether (or under what extra restrictions) we can uniquely recover W from P (∆). The
identification problem in Dataset 1 is straightforward. Kashaev et al. (2025), using Theorem 1 in
Blevins (2018), offer a mild condition under which the transition rate matrix can be identified from
Dataset 2.3
Proposition 4.5. If Assumptions 1 and 2 hold, then the CCPs P and the rates of the Poisson
alarm clocks (λa)a∈A are identified from Dataset 1. If, moreover, W has distinct eigenvalues that do
not differ by an integer multiple of 2πi/∆, where i denotes the imaginary unit, then P and (λa)a∈A
are generically identified from Dataset 2.
The restriction on eigenvalues of W is a regularity condition that is generically satisfied.4 The
key element in proving the second statement in Proposition 4.5 is that the transition rate matrix in
our model is rather parsimonious. Since, at each time, at most one person revises her selection
with a nonzero probability, W has many zeros in known locations.
5. Concluding Remarks
This paper studies dynamic interactions among agents that are connected through a social network.
In the model, each agent is linked to a finite set of agents and selects a choice from a finite set of
2Here again, we assume that the choice configurations are ordered according to the lexicographic order when we construct P (∆). 3It is also known that if the researcher to observe the dynamic system at two different intervals ∆1 and ∆2 that are not multiples of each other (see, for example, Blevins, 2017 and the literature therein). 4See Blevins (2017) for a discussion of this assumption.
15

alternatives. The timing of the decision making of each group member follows a simple Poisson
process that is independent across the agents. The distinctive feature of the model is that, at the
moment of making a decision, the agent does not pay attention to all her linked agents. Instead,
she first form a reference group and then makes a decision under their influence. The previous
choices of the linked agents affect both the probability that different agents are included in her
reference group and the preferences of the agent over the alternatives once the group is formed.
This model can lead to choice-based homophily in decision-making. We exploit variation in the
choices of all agents through time and variation in the size of their reference groups to recover all
parts of the model. These parts include random preferences and the probability of paying attention
to different agents.
References
Aguiar, Victor H, Maria Jose Boccardi, Nail Kashaev, and Jeongbin Kim (2023) “Random utility
and limited consideration,” Quantitative Economics, 14 (1), 71–116.
Badev, Anton I. (2021) “Nash equilibria on (un)stable networks,” Econometrica, 89 (3), 1263–1294.
Blevins, Jason R (2017) “Identifying restrictions for finite parameter continuous time models with
discrete time data,” Econometric Theory, 33 (3), 739–754.
(2018) “Identification and estimation of continuous time dynamic discrete choice
games,”Technical report, Mimeo, Ohio State University.
Boucher, Vincent and Ismael Mourifie (2017) “My friend far, far away: a random field approach to
exponential random graph models,” The econometrics journal, 20 (3), S14–S46.
Chandrasekhar, Arun G (2016) “Econometrics of network formation.”
De Paula, Aureo (2017) “Econometrics of network models,” in Advances in Economics and Econo
16

metrics: Theory and Applications, Eleventh World Congress, 268–323, Cambridge University
Press Cambridge.
Durlauf, Steven N and H Peyton Young (2001) Social dynamics, 4: Mit Press.
Graham, Bryan S (2015) “Methods of identification in social networks,” Annu. Rev. Econ., 7 (1),
465–485.
Gualdani, Chiara (2021) “An econometric model of network formation with an application to board
interlocks between firms,” Journal of Econometrics, 224 (2), 345–370.
Kashaev, Nail and Natalia Lazzati (2019) “Peer effects in random consideration sets,” arXiv preprint
arXiv:1904.06742.
Kashaev, Nail, Natalia Lazzati, and Ruli Xiao (2025) “Peer effects in consideration and preferences,”
Working paper.
Leung, Michael P (2015) Econometric Methods for Network Data: Stanford University.
Mele, Angelo (2017) “A structural model of dense network formation,” Econometrica, 85 (3),
825–850.
Menzel, Konrad (2015) “Strategic network formation with many agents,”Technical report, Working
papers, NYU.
Miyauchi, Yuhei (2016) “Structural estimation of pairwise stable networks with nonnegative
externality,” Journal of econometrics, 195 (2), 224–235.
de Paula, Aureo, Seth Richards-Shubik, and Elie Tamer (2018) “Identifying preferences in networks
with bounded degree,” Econometrica, 86 (2), 643–667.
Ridder, Geert and Shuyang Sheng (2020) “Two-step estimation of a strategic network formation
model with clustering,” arXiv preprint arXiv:2001.03838.
Sheng, Shuyang (2020) “Econometric Analysis of Large Network Formation Models,” Working
paper.
17

Thirkettle, Matthew (2019) “Identification and Estimation of Network Statistics with Missing Link
Data,” Working paper.
A. Proofs
A.1. Proof of Proposition 4.1
Fix any a, a′ ∈ A with a′ different from a. Let yv
a′ be the choice configuration obtained from y
by replacing the a′ component, ya′, by v. First, note that if a′ ̸∈ Na then
Pa(v | 0v
a′) − Pa(v | 0) = 0,
where 0 = (0, . . . , 0)′ is the choice configuration where everyone picks 0. We next show that if the
previous difference in CPPs is different from zero, then a′ ∈ Na. Note that if a′ ∈ Na
Pa(v | y) = Qa(a′ | y) ∑
N ⊆Na\{a′}
Ra (v | y, N ∪ {a′}) Sa (N | y, Na \ {a′}) +
(1 − Qa(a′ | y)) ∑
N ⊆Na\{a′}
Ra (v | y, N ) Sa (N | y, Na \ {a′}) =
Qa(a′ | y) ∑
N ⊆Na\{a′}
[Ra (v | y, N ∪ {a′}) − Ra (v | y, N )] Sa (N | y, Na \ {a′}) +
∑
N ⊆Na\{a′}
Ra (v | y, N ) Sa (N | y, Na \ {a′}) .
Moreover, Ra (v | y, N ) does not depend on ya′ for any N that does not contain a′ by Assump
tion 2(ii). Similarly, by Assumption 2(i), Sa (N | y, Na \ {a′}) does not depend on ya′. Hence,
Pa(v | 0v
a′) − Pa(v | 0) =
Qa(a′ | 0v
a′ ) ∑
N ⊆Na\{a′}
[Ra (v | 0v
a′, N ∪ {a′}) − Ra (v | 0v
a′, N )] Sa (N | 0v
a′, Na \ {a′})
18

− Qa(a′ | 0) ∑
N ⊆Na\{a′}
[Ra (v | 0, N ∪ {a′}) − Ra (v | 0, N )] Sa (N | 0, Na \ {a′}) =
Qa(a′ | 0v
a′ ) ∑
N ⊆Na\{a′}
[Ra (v | 0v
a′, N ∪ {a′}) − Ra (v | 0, N )] Sa (N | 0, Na \ {a′})
− Qa(a′ | 0) ∑
N ⊆Na\{a′}
[Ra (v | 0, N ∪ {a′}) − Ra (v | 0, N )] Sa (N | 0, Na \ {a′}) ̸= 0,
where the last inequality follows from Assumption 3.
A.2. Proof of Proposition 4.2
Fix some type t ∈ H. By Assumption 4 there are at least 3 agents of type t with different
number of peers. Let these agents be a1, a2, and a3 and let N1 < N2 < N3 be the number of agents
in their corresponding reference groups of peers. Take any three configurations y∗j, j = 1, 2, 3, such
that y∗1
a1 = y∗2
a2 = y∗3
a3 = v∗ for some v∗ ∈ Y and all other components are set to v′, which may
coincide with or be different from v∗. Note that
Qa1(a′ | y∗1, Na1) = Qa2(a′′ | y∗2, Na2) = Qa3(a′′′ | y∗3, Na3) = Qt(v∗, v′),
for any a′ ∈ Na1, a′′ ∈ Na2, and a′′′ ∈ Na1.
Let q = Qt(v∗, v′) and t(N ) = 1 − (1 − q)N be the probability that at least one peer out of N
peers is considered. Since all 3 agents pick the same option and all their peers are picking the same
alternative (i.e., the average choice does not depend on the number of selected peers) we have that
Paj (v | y∗j) = Rt(v | v∗, 0)(1 − t(Nj)) + Rt(v | v∗, 1v′)t(Nj)
= Rt(v | v∗, 0) + [Rt(v | v∗, 1v′) − Rt(v | v∗, 0)]t(N ),
where 1v′ is a vector of length |Y| with all elements equal to zero except for the one that corresponds
to option v′ (since every peer is picking v′, the fraction of selected peers picking it is always 1).
19

Thus, given that Rt(v | v∗, 1v′) − Rt(v | v∗, 0) ̸= 0, we deduce that
Pa3(v | y∗3) − Pa1(v | y∗1)
Pa2(v | y∗2) − Pa1(v | y∗1) = t(N3) − t(N1)
t(N2) − t(N1) .
Since the left-hand-side of the last expression is observed, if we show that the right-hand-side is a
known strictly monotone function of q, then we prove that q can be identified from the data. Let
x = 1 − q, n2 = N2 − N1, and n3 = N3 − N1 and note that
f (x) = t(N3) − t(N1)
t(N2) − t(N1) = 1 − xn3
1 − xn2 .
We next show that f ′(x) > 0 for all x ∈ (0, 1) and n3 > n2. After some manipulation of the terms
f ′(x) = n2xn2−1 − n3xn3−1 + (n3 − n2)xn3+n2−1
(1 − xn2)2 .
Note that the denominator is strictly positive and the numerator can be written as
xn2−1(n2 − n3xn3−n2 + (n3 − n2)xn3 ).
Note that
f ̃(x) = n2 − n3xn3−n2 + (n3 − n2)xn3
is such
f ̃′(x) = −n3(n3 − n2)xn3−n2−1 + (n3 − n2)n3xn3−1 = (n3 − n2)n3xn3−n2−1[1 − xn2] < 0
for all x ∈ (0, 1). Hence, f ̃ is strictly decreasing on (0, 1) and thus f ̃(x) ≥ f ̃(1) = 1 > 0 for all x.
Thus, f ′(x) > 0 for all x ∈ (0, 1) and f is strictly increasing.
Since, x = 1 − q, then q is identified from observed CCPs.
Next, we identify t(N ) from q and
Rt(v | v∗, 1v′) − Rt(v | v∗, 0) = Pa3(v | y∗3) − Pa1(v | y∗1)
t(N3) − t(N1) .
20

Finally, we identify
Ra(v | y, ∅) = Rt(v | v∗, 0) = Pa3(v | y∗3) − Pa3(v | y∗3) − Pa1(v | y∗1)
t(N3) − t(N1) t(N3)
and
Ra(v | y, {a′}) = Rt(v | v∗, 1v′) = Pa3(v | y∗3) + Pa3(v | y∗3) − Pa1(v | y∗1)
t(N3) − t(N1) (1 − t(N3))
for any a′ ∈ Na and y such that ya = v∗ and ya′ = v′. The fact that the choice of v∗, v′, and t was
arbitrary completes the proof.
A.3. Proof of Proposition 4.3
Note that
Ra(v | y, ∅) = eαh(a),v(ya)
1+∑
v′∈Y\{0} eαh(a),v′ (ya) .
Hence, αh(a),v(ya) = log(Ra(v | y, ∅)) − log(Ra(0 | y, ∅)). To identify βh(a),v(ya), note that
Ra(v | y, {a′}) = eαh(a),v(ya)+βh(a),v(ya)1( ya′ =v )
∑
v′∈Y eαh(a),v′ (ya)+βh(a),v′ (ya)1( ya′ =v′ ) .
As a result, βh(a),v(ya) = log(Ra(v | y∗, {a′})) − log(Ra(0 | y∗, {a′})) − αh(a),v(ya) for any y∗ such
that y∗
a′ = v.
21

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:57.531Z
- **Text Length:** 35237 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 21 of 21
