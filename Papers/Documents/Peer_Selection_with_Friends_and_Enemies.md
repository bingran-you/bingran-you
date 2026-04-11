# PDF Document: Bloch et al. - 2025 - Peer Selection with Friends and Enemies.pdf

**File Path:** Bloch et al. - 2025 - Peer Selection with Friends and Enemies.pdf

**Processed Date:** 2026-02-10T18:14:59.298Z

**File Size:** 469.33 KB

**Total Pages:** 32

**Extracted Pages:** 32

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3243

**Title:** Peer Selection with Friends and Enemies

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Peer Selection with Friends and Enemies∗
Francis Bloch,† Bhaskar Dutta‡and Marcin Dziubin ́ski§
November 17, 2025
Abstract
A planner wants to select one agent out of n agents on the basis of a binary characteristic that is commonly known to all agents but is not observed by the planner. Any pair of agents can either be friends or enemies or impartials of each other. An individual’s most preferred outcome is that she be selected. If she is not selected, then she would prefer that a friend be selected, and if neither she herself or a friend is selected, then she would prefer that an impartial agent be selected. Finally,-
 her least preferred outcome is that an enemy be selected. The planner wants to design a dominant strategy incentive compatible mechanism in order to be able choose a desirable agent. We derive sufficient conditions for existence of efficient and DSIC mechanisms when the planner knows the bilateral relationships between agents. We also show that if the planner does not know these relationships, then there is no efficient and DSIC mechanism and we compare the relative efficiency of two “second-best-
” DSIC mechanisms. Finally, we obtain sharp characterization results when the network of friends and enemies satisfies structural balance.
Keywords: Peer selection, Network, Mechanism design without money, Dominant strategy incentive compatibility, Declarations of interest: none JEL: D82, D86
∗Marcin Dziubi ́nski’s work was supported by the Polish National Science Centre through grant 2021/42/E/HS4/00196. †Universit ́e Paris 1 and Paris School of Economics, 48 Boulevard Jourdan, 75014 Paris, France. francis.bloch@univ-paris1.fr
‡University of Warwick and Ashoka University, CV4 7AL, Coventry, UK b.dutta@warwick.ac.uk
§Institute of Informatics, University of Warsaw, Banacha 2, 02-097, Warsaw, Poland m.dziubinski@mimuw.edu.pl
1
arXiv:2511.11157v1 [econ.TH] 14 Nov 2025

1 Introduction
We consider a selection problem where the planner has to select one individual out
of a group of n individuals on the basis of a binary characteristic. For instance, an
agent could be either “needy” or “not needy”, “high” or “low” ability, “deserving”
or “not deserving”. Depending on the context, the chosen agent will then be given
a cash grant, or promotion or job offer. To fix ideas, we will henceforth denote the
binary characteristic to be one of being needy or not needy. Moreover, the agent
selected by the planner will be given a cash grant.
A mechanism design problem arises because the planner does not observe the
neediness status of any agent. However, all agents know each others’ neediness
status. This is of course also true in the classical peer selection problem discussed
originally by Alon et al [2] and Holzman and Moulin [23]. However, our framework,
while related, differs in important ways from the Alon-Holzman-Moulin classical
framework.
The planner’s problem in our setting is considerably more complicated because
all pairs of agents are also related to each other by bilateral relations of friendship
and enmity. That is, each pair i, j are either friends, enemies or impartial. These
relationships give rise to networks of friends, enemies or impartials. These bilat
eral relationships influence preferences. Each agent strictly prefers being selected.
If not selected herself, then she would like a friend to be selected regardless of
the friend’s binary characteristic. Moreover, she strictly prefers that no enemy
be selected, again irrespective of the enemy’s neediness status. Obviously, any
incentive compatible (probabilistic) peer selection mechanism must ensure that
no agent is able to influence his or her own probability of being selected. In our
setting, incentive compatibility imposes an additional requirement – agents cannot
influence the probability of their friends and enemies from being selected.
We focus on the possibility of constructing probabilistic mechanisms under
which (i) revealing truthful information will be a weakly dominant strategy for
each agent, and (ii) the support of the probability distribution corresponding to
truthful reports will be contained in the set of needy agents when the latter set is
2

nonempty.1 In contrast, the classical Holzman-Moulin-Alon framework focussed
on deterministic mechanisms. We consider two informational scenarios. In the
first, the planner knows either the friendship, enemy or impartial relationships of
every agent. We derive different sufficient conditions which allow the planner to
construct three probabilistic mechanisms satisfying the two requirements.2 We
have not been able to show whether these sufficient conditions characterise the
class of all mechanisms satisfying the two requirements.
We then go onto consider the case when the planner does not know the bilat
eral relationships of friends and enemies. We first show that in this setting, there
is no incentive compatible mechanism that is efficient in the sense of ensuring that
some needy agent is picked whenever there is at least one needy agent. Although
there are differences between our framework and the probabilistic framework of
Gibbard [21], we show that adaptations of both random dictatorships and duples
are DSIC mechanisms. We compare these two mechanisms in terms of their rela
tive efficiency. We show that if every individual has at least two friends, then the
random dictatorship is at least as efficient as the duple mechanism. Otherwise,
under plausible conditions on the bilateral relationships, the duple mechanism is
better than the random dictatorship on a worst-case basis. Both mechanisms are
better than the constant mechanism that picks an agent at random.
Finally, we consider networks which satisfy structural balance – for which the
enemy of an enemy is a friend, and the friend of an enemy an enemy.3 When
structural balance is satisfied we are able to provide a necessary and sufficient
condition for existence of an efficient, dominant strategy incentive compatible
mechanism. We also compute a lower bound on efficiency of the duples mechanism
when the planner does not know the network.
1The latter is the requirement of efficiency – if a needy agent exists, then only a needy agent should be selected. 2Note that Holzman and Moulin prove that in the deterministic framework, there is no efficient mechanism that will induce agents to tell the truth as a dominant strategy. The difference in results illustrates the difference in frameworks. 3Structural balance was introduced by Heider [22] in social psychology, and formalized by Cartwright and Harary [19]
3

2 Related Literature
Our paper relates to several strands of the literature. It is most closely related to
the large literature in economics and computer science on peer selection mecha
nisms. Holzman and Moulin [23] provide an axiomatic analysis of deterministic
“impartial” or dominant strategy incentive compatible voting rules when individ
uals nominate a single individual for office. Alon et al. [2] consider the problem
of designing a dominant strategy mechanism to select k individuals from a group
of peers. They show that no deterministic efficient dominant strategy mechanism
exists, and then go on to construct approximately efficient, stochastic, dominant
strategy mechanisms.4
The peer selection problem has also been studied in the context of social net
works, where the social network is a network of observation, describing who can
observe whom in the network. Bloch and Olckers [17] characterize network struc
tures for which efficient, ex post incentive compatible mechanisms exist. 5
Faced with the impossibility of constructing an efficient, dominant strategy
mechanism, Ben Porath, Dekel and Lipman [13] propose to add another instru
ment for the planner, and allow her to check the report of the agents at a cost.
Mylonanov and Zapechelnuyk [27] analyze the problem when verification can only
happen ex post, after the object has been allocated. Kattwinkel [24], Pereyra
and Silva [28] and Bloch, Dutta and Dziubin ́ski [16] analyze situations where, in
addition to the agent’s reports, the planner can use a correlated signal on the
agents’ types, and show how the planner can leverage this correlation to construct
efficient Bayesian incentive compatible mechanisms.
The entire literature on peer selection assumes that players only care about
being selected, and that there are no externalities in players’ utilities. Our pa
per thus departs from the existing literature since players also care about who is
selected if they themselves are not. This is related to the biased juror problem
where jurors may deviate from the true ranking of candidates since they may be
4See also Tamura and Ohseto [29], Berga and Gjorjiev [14], Mackenzie [26], Fischer and Klimm [20], Bousquet, Norin and Vetta [18], Kurokawa et al. [25] and Aziz et al. [10] and [9], Bjelde, Fischer and Klimm [15] and Babichenko, Dean and Tenneholtz [11]. 5See also Baumann [12].
4

biased for or against specific candidates. The biased jury problem was initiated by
Amoro ́s et al. [8] and Amoro ́s [3] in a series of very interesting papers.6 A signifi
cant difference between the biased jury and peer selection literature is that in the
former, the selectors (the jury) are not themselves candidates. Another difference
between our paper and the papers mentioned here is that they focus on determin
istic mechanisms and\or different solution concepts such as Nash equilibrium or
subgame perfection.
3 The Model
There is a set V = {1, . . . , n} of agents. Nature selects an agent to be needy with
probability q > 0. Let N denote the realized set of needy agents.
Any pair i, j ∈ V × V are either friends, enemies or impartials. Of course,
these are symmetric relationships. For any i ∈ V , Fi, Ei, Ii are the set of friends,
enemies and impartials of i. So, {Fi, Ei, Ii} form a partition of V \ {i}.
We assume that every agent in V knows the set N of needy agents as well as
her own set of friends, enemies and impartials. We are agnostic about whether i
knows anything else about the networks of friends, enemies and impartials. We
can then represent the type of any agent as a triple θi = (N, Fi, Ei). Notice that
we can ignore Ii since Ii ≡ V \ ({i} ∪ Fi ∪ Ei). Let Θi represent the set of all
possible types of agent i.
The planner does not know the set N . We consider two alternative informa
tional scenarios. In one scenario, the planner knows either the sets Ii or Fi or
Ei of each agent. In the other informational scenario, the planner knows nothing
about these sets. In either case, the planner wants to use a mechanism that will
induce agents to report the set N truthfully.
Mechanism
We are interested in direct mechanisms where each agent reports her type. So,
a typical message profile, to be denoted by m will be an element of Θ = Q
i∈V Θi.
A (direct) mechanism is defined by an outcome function g : Θ → [0, 1]V , with
gi(m) representing the probability of agent i being chosen. The mechanism is
6See also Amor ́os [4], Adachi [1], Amor ́os [5], Amor ́os[6], Amor ́os [7], Yadav [30].
5

valid if for all message profiles m,
X
i∈V
gi(m) ≤ 1.
Notice that this keeps open the possibility that the planner may not choose any
agent at some message profiles.
Throughout, the rest of the paper we restrict attention to valid mechanisms.
Preferences
Let p = (p1, . . . , pn) and p′ = (p′
1, . . . , p′
n) be two vectors where pi, pj, p′
i, p′
j etc.
are probabilities with which i and j are chosen corresponding to different message
profiles.
Agents have lexicographic preferences over such probability vectors. First, i
checks her own probability of being chosen. She strictly prefers p to p′ if pi > p′
i.
Second, she prefers her friends being chosen and dislikes her enemies being
chosen. She assigns weights wf > 0, we > 0 and ranks vectors p and p′ so that
p ≻i p′ if
(
pi > p′
i
pi = p′
i and P
j∈Fi wf (pj − p′
j) − P
j∈Ei we(pj − p′
j) > 0
It is clear that in our setting, preferences do not depend upon the set N . So,
for instance, each individual i is indifferent between whether friend j or friend k
is selected, regardless of the neediness status of j and k.
A mechanism g is dominant strategy incentive compatible (DSIC) if and only
if, for all i ∈ V , all m ∈ Θ and all m′
i ∈ Θi,
p ≿i p′, where p = g(m), p′ = g(m′
i, m−i).
That is, revealing the true state must be a dominant strategy for i at all states.
The planner also wants to be able to pick a needy agent whenever the set of
needy agents is non-empty. This gives rise to the next definition.
A mechanism g is efficient if and only if, for any state of the world, θ with
truthful message profile m ∈ Θ , if N ̸= ∅, then P
i∈N gi(m) = 1.
4 Known Relationships Networks
In this section, we assume that the planner knows either the network of impartials
or the network of enemies or the network of friends. In each case, we derive
6

sufficient conditions under which the planner can construct DSIC mechanisms
that are also efficient.
Since the planner is assumed to know the relevant networks, all the mechanisms
considered in this section ignore reports about the sets Ii, Ei, Fi, and only use the
reports on the neediness status of others. So, in order to simplify the notation, we
will identify message mi sent by an agent i with the set of needy agents reported
by i. In particular, j ∈ mi means that i reports that j is needy and j ∈/ mi means
that j is not needy according to i.
4.1 Planner knows the sets Ii of each i
The mechanism we construct exploits the fact that impartials do not have an
incentive to lie about the neediness status of their impartial neighbours provided
their reports do not affect their own probability of being chosen.
Given a message profile m and any pair of agents i, j ∈ V , the message mj
is called a positive vote of j on i if i ∈ mj, while it is called a negative vote
if i ∈/ mj. In addition, given a message profile m and a set of agents X ⊆ V ,
mX = {mj}j∈X is the message profile m restricted to agents in X. In the case
of X = V , we simply write m instead of mV and in the case of X = V \ {i} we
write m−i instead of mV \{i}.
Given a message profile m, let pos(mX) be the set of agents j ∈ V receiving
positive votes from all their impartial agents in X, i.e. from all agents in X ∩ Ij.
We construct the following mechanism g1. The probability of agent i ∈ V
being selected under message profile m is
g1
i (m) =
(1
|pos(mIi )| , if i ∈ pos(mIi ),
0, otherwise.
So, for each agent i ∈ V , the mechanism first checks whether the agent re
ceives positive votes from all her impartial agents. If i passes this test, then the
mechanism assigns i the probability that is the reciprocal of the number of all the
agents, j ∈ V who received positive votes from the agents that are impartial to
both i and j, i.e. all the agents in Ii ∩ Ij. If i receives even one negative vote from
some j ∈ Ii, then g1 assigns zero probability to i.
7

The following condition will play an important role.
The Intersection Condition I: For all i, j ∈ V , Ii ∩ Ij ̸= ∅.
The next result describes the properties of g1.
Theorem 1. Suppose the planner knows the sets Ii for all i ∈ V . Then, g1 is
valid and DSIC. Moreover, if the Intersection Condition I is satisfied, then g1 is
efficient.
Proof. To check validity, let
qi(m) =
(1
|posI (m)| , if i ∈ posI (m),
0, otherwise.
Given a message profile m, posI (m) is the set of agents who receive positive votes
from all their respective impartial agents. The quantity qi(m) equals 0 if i receives
a negative vote from at least one of her impartial agents and the reciprocal of the
number of agents who receive positive vote from all their respective impartial
agents, otherwise. To show validity, we will show that for any message profile, m,
and any agent i ∈ V , g1
i (m) ≤ qi(m).
If g1
i (m) = 0 then the inequality is obviously satisfied. Suppose that g1
i (m) >
0. Then i ∈ posI (mIi), that is i receives a positive vote from all agents in Ii.
Hence i ∈ posI (m). Moreover, for any j ∈ posI (m), j receives a positive vote
from all agents in Ij. Therefore j receives positive vote from all agents in Ii ∩ Ij
and, consequently, j ∈ posI (mIi).
Thus posI (m) ⊆ posI (mIi) and 1/|posI (m)| ≥ 1/|posI (mIj )|. Hence g1
i (m) ≤
qi(m).
Using this,
X
i∈V
g1
i (m) ≤
X
i∈V
qi(m) = 1,
which implies validity of g1.
DSIC follows because, for any agent j, g1
j (m) depends on mIj only. Since
j ∈/ Ij, g1
j (m) is independent of the report of j. Moreover, for any agent i that is
not impartial to j, mIi is independent of the report of j. Hence, for any i ∈/ Ij,
g1
i (m) is independent of the report of j. Hence, truthful reporting is a weakly
dominant strategy for j.
8

For efficiency, suppose that m is a truthful message profile. The Intersection
Condition I ensures that for all i ∈ V , Ii ̸= ∅. So if i is not needy then at least
one agent reports this under mIi and so i ∈/ posI (m)Ii. On the other hand, if i is
needy then reports in mIi all contain a positive vote on i and so i ∈ posI (mIi).
Moreover, any needy agent j ̸= i receives a positive vote from all agents in Ii ∩ Ij.
Similarly, if j is not needy, then she receives a negative vote from some k ∈ Ii ∩ Ij.
Hence, for any {i, j} ⊆ V , j ∈ posI (mIi) if and only if j is needy. Thus it
follows that, for any agent i ∈ V , g1
i (m) = 0 if i is not needy and g1
i = 1/z, where
z is the number of all needy agents, if i is needy.
Remark 1. To see the role played by the Intersection Condition I, consider the
following example. Let V = {1, 2, 3}, I1 = {2}, I2 = {1}, and N = {1}. The
Intersection Condition is not satisfied because for instance I1 ∩ I2 and I1 ∩ I3 are
empty. At the truthful report m, g2(m) = 0 since 1 ∈ I2 and gives 2 a negative
vote. Consider 3 who has no impartials. So, trivially 3 gets a positive vote from all
her impartials. For similar reasons, for i = 1, 2, i also gets positive votes from all
agents in Ii ∩ I3 for i = 1, 2. So, g1
3(m) = 1/3. It also follows that g1
1(m) = 1/3.
Of course, efficiency required g1
1(m) = 1.
4.2 The planner knows the sets Ei for all agents i ∈ V
Suppose now that the planner knows the enemy network, that is the sets Ei for
all agents i. We will construct another DSIC mechanism that will use reports
of enemies, and that will, under an Intersection Condition which is similar to
the earlier condition, be also efficient. At this stage, it is worth emphasizing the
similarities and differences between a DSIC mechanism based on messages from
impartials and one based on reports from enemies. A common implication of DSIC
mechanisms is that no agent i can unilaterally change her own probability of being
selected. As exhibited by g1, this is essentially the only condition that is imposed
by DSIC if the mechanism uses only messages from agents on the neediness status
of their impartials. However, a DSIC mechanism that uses messages from enemies
must satisfy an additional requirement – no agent i should be able to gain by
declaring an enemy to be not needy if she is actually needy. Since agent i would
9

like to declare that enemy j is not needy, the mechanism must ensure that the
total probability of agent i’s enemies being selected does not depend upon agent
i’s report.
The mechanism we construct possesses this feature because it uses a distin
guished agent as a “sink”. In particular, there must be a special agent k such that
the enemies of k, the set Ek, can act as a set of selectors. The set of selectors
must have the property that for any pair of agents i, j ∈ V \ {k}, there is an agent
l ∈ Ek who is a common enemy of i, j. Since both i and j are enemies of l, agent l
has no incentive to discriminate between the pair. Moreover, l also does not gain
by declaring that i or j is not a needy agent if they actually are needy precisely
because k acts as a sink and l is also an enemy of k. Notice that since this new
intersection condition (that l ∈ Ei ∩ Ej) must also apply to pairs of agents in Ek,
Ek must contain at least three agents.
We describe formal details below.
Given a message profile m, let posE (mX) be the set of agents, j ∈ V , receiving
positive votes from all their enemies in X, i.e. from all agents in X ∩ Ej.
For any distinguished agent k ∈ V , the mechanism g2,k is defined as follows.
The probability of agent i ∈ V \ {k} being selected under message profile m is
g2,k
i (m) =
(1
|posE (mEi∩Ek )\{k}| , if i ∈ posE (mEk ),
0, otherwise.
The probability of agent k being selected is
g2,k
k (m) = 1 −
X
i∈V \{k}
g2,k
i (m).
So, for each agent i ∈ V \ {k} the mechanism checks whether the agent receives
positive votes from all her enemies who are also enemies of k, i.e. from all agents
in Ei ∩ Ek, and if so, it assigns i the probability equal to 1 over the number of
all the agents, j ∈ V \ {k} who received positive votes from all their enemies who
are also enemies of i and k, i.e. all the agents in Ej ∩ Ei ∩ Ek. If i receives a
negative vote from at least one of her enemies who is also an enemy of k, then
the probability assigned to i is 0. Agent k is selected whenever no other agent
is selected, i.e. k is selected with probability equal to 1 minus the probability of
selecting one of the agents in V \ {k}.
10

Intersection Condition E(k): For all i, j ∈ V \ {k}, Ei ∩ Ej ∩ Ek ̸= ∅.
The following result states validity, efficiency and DSIC of g2,k when the Inter
section Condition E(k) is satisfied.
Theorem 2. For any k ∈ V mechanism g2,k is valid and DSIC. Moreover, if the
Intersection Condition E(k) is satisfied, then g2,k is efficient.
Proof. The proof of validity is very similar to the proof of validity of g1.
For an agent i ∈ V \ {k}, let
qi(mEk ) =
(1
|posE(mEk )\{k}| , if i ∈ posE (mEk ),
0, otherwise.
Given a message profile m, posE (mEk) is the set of agents who receive positive
votes from all their enemies who are also enemies of k. The quantity qi(mEk)
gets value 0 if i receives a negative vote from at least one of her enemies who is
an enemy of k and the reciprocal of the number of agents in V \ {k} who receive
positive vote from all their respective enemies other than k, otherwise.
To show validity, we will show that for any message profile, m, and any
agent i ∈ V \ {k}, g2,k
i (m) ≤ qi(mEk ). If g2,k
i (m) = 0 then the inequal
ity is satisfied. Suppose that g2,k
i (m) > 0. Then i ∈ posE (mEk). Moreover,
for any j ∈ posE (mEk), j receives a positive vote from all agents in Ej ∩ Ek
and, consequently, j receives a positive vote from all agents in Ei ∩ Ej ∩ Ek.
Hence j ∈ posE (mEi∩Ek ). This shows that posE (mEk ) ⊆ posE (mEi∩Ek ) and
1/|posE (mEk )| ≥ 1/|posE (mEi∩Ek )|. Hence g2,k
i (m) ≤ qi(mEk ). Since
X
i∈V \{k}
g2,k
i (m) ≤
X
i∈V \{k}
qi(mEk ) = 1
and
g2,k
k (m) = 1 −
X
i∈V \{k}
g2,k
i (m) ≥ 0,
we get validity of g2,k.
For DSIC notice first that, for any agent j ∈ V , g2,k
j depends on messages of
agents in Ej ∩ Ek only. So, j cannot affect her own probability of being chosen.
Hence it is enough to show that truthful report is a dominant strategy for any
agent i ∈ Ek. Take any agent i ∈ Ek. Fix a message profile m. Since i ∈/ Ei
11

and g2,k
i depends on mEi∩Ek only, g2,k
i is independent of mi. Next, for any agent
j ∈ Fi, j ∈/ Ei, and so g2,k
j is independent of mi. Therefore,
X
j∈Fi
g2,k
j (m′
i, m−i) =
X
j∈Fi
g2,k
j (m). (1)
Moreover, the definition of g2,k makes it clear that
X
j∈V
g2,k
j (m) ≡ 1, for all m ∈ Θ
Hence, using equation (1),
X
j∈Ei
g2,k
j (m′
i, m−i) =
X
j∈Ei
g2,k
j (m)∀m′
i.
Hence, no agent i gains by deviating from truthful reporting.
Suppose now that the Intersection Condition E(k) is satisfied. To check ef
ficiency, suppose that m is a truthful message profile. From the Intersection
Condition E, it follows that if i is not needy then at least one agent reports that
under mEi∩Ek and so i ∈/ posE (mEk). On the other hand, if i is needy then reports
in mEi∩Ek all contain a positive vote on i, and so i ∈ posE (mEi∩Ek). Moreover,
for any needy agent j ∈ V \ {k}, j receives a positive vote from all agents in
Ej ∩ Ei ∩ Ek. Conversely, any non-needy agent j ∈ V \ {k} receives a negative
vote from at least one agent in Ej ∩ Ei ∩ Ek. Hence, for any {i, j} ⊆ V \ {k},
j ∈ posE (mEi∩Ek) if and only if j is needy. Thus if follows that, for any agent
i ∈ V \ {k}, g2,k
i (m) = 0 if i is not needy and g2,k
i (m) = 1/z, where z is the
number of all needy agents in V \ {k}, if i is needy. If there is no needy agent in
V \ {k} then P
i∈V \{k} g2,k
i (m) = 0 and, consequently, g2,k
k (m) = 1. In this case,
either k is needy and the support of g2,k(m) is contained in N . Or k is not needy,
implying that N = ∅ and so g2,k is efficient.
4.3 The planner knows the sets Fi for all agents i ∈ V
Suppose instead that the planner knows the sets Fi of each agent. It is not difficult
to see that a DSIC mechanism using messages only of friends analogous to g2,k
can be defined with a pre-specified agent k acting as a sink.
12

Given a message profile m, let posF (mX) be the set of agents, j ∈ V , receiving
positive votes from all their friends in X, i.e. from all agents in X ∩ Fj. Let
mechanism g3,k be defined as follows. The probability of agent i ∈ V \ {k} being
selected under message profile m is
g3,k
i (m) =
(1
|posF (mFi∩Fj )\{k}| , if i ∈ posF (mFk ),
0, otherwise.
The probability of agent k being selected is
g3,k
k (m) = 1 −
X
i∈V \{k}
g3,k
i (m).
Intersection Condition F(k): For all i, j ∈ V \ {k}, Fi ∩ Fj ∩ Fk ̸= ∅.
Theorem 3. For any k ∈ V mechanism g3,k is valid and DSIC. Moreover, if the
Intersection Condition F(k) is satisfied, then g3,k is efficient.
The proof is omitted since it is virtually identical to that of Theorem 2.
5 Unknown Relationships Networks
In the last section, we showed that the planner can construct efficient and DSIC
mechanisms for classes of networks satisfying appropriate sufficient conditions pro
vided the planner knows the networks. Notice that the construction of these mech
anisms exploits the finer details of the networks. For instance, when the network
satisfies the Intersection Condition I, the mechanism used in the proof of The
orem 1 depends only on the network of impartials. This raises the question of
whether the planner can construct efficient DSIC mechanisms when she does not
know the networks of impartials, enemies and friends. Notice that in this case,
the planner has to construct one mechanism that is DSIC and efficient for all
networks. In the theorem below, we show that this cannot be done. Since we
want to focus on the role played by incomplete information about the network,
the proof below will only use networks that satisfy the Intersection Condition I.
This will highlight the fact that the impossibility result is precipitated by the lack
of information about the bilateral relationships.
13

Theorem 4. Let |V | = n ≥ 4. If the planner does not know the sets of impartials,
enemies and friends, then there is no mechanism that is both DSIC and efficient.
Proof. Let V = {1, 2, . . . , n} with n ≥ 4.
Consider two states of the world, θ1 and θn. In θ1, only agent 1 is needy, while
in θn, only agent n is needy. The bilateral relationships in the two states are as
follows.
(i) In state of the world θ1, all pairs of agents i, j ∈ S ≡ {1, 2, . . . , n − 2} are
enemies while all remaining pairs of agents are impartial.
(ii) In state of the world θn, agents n−1 and n are enemies, and all the remaining
pairs of agents are impartial. 7
Figure 1 presents the two networks for the case of n = 4 agents. The figure on
the left shows the state θ1, with the arc between 1 and 2 representing that they
are enemies and 1 is the needy agent, while the figure on the right represents state
θn.
Figure 1: Two states of the world with n = 4 agents. The encircled nodes correspond to the needy agents.
Let mi be the truthful message profile at state of the world θi, i ∈ {1, n}.
Then, efficiency requires that
g1(m1) = 1 (2)
gn(mn) = 1. (3)
7Notice that the networks in both states satisfy the intersection condition for impartials when n ≥ 4.
14

From (2) and DSIC,
g1(mn
1 , m1
−1) = 1 (4)
For suppose g1(mn
1 , m1
−1) < 1. Then, agent 1 would strictly prefer to report m1
1
instead of mn
1 when the other agents report m1
−1. This would contradict the
supposition that mn
1 is a dominant strategy for 1 when the true state of the world
is θn.
Next, consider agent 2. Since m1
2 is a dominant strategy in state of the world
θ1, a unilateral deviation to mn
2 cannot change the sum of the probabilities with
which enemies of 2 are selected. So, (4) implies that
X
j∈S\{2}
gj (mn
1 , mn
2 , m1
−{1,2}) = 1
Similarly, since g1
3 is a dominant strategy in state θ1, agent 3 cannot change
her own probability or that of her enemies through a unilateral deviation. Hence,
X
j∈S
gj (mn
1 , mn
2 , mn
3 , m1
−{1,2,3}) = 1
By repeated use of the same argument.
X
j∈S
gj (mn
1 , mn
2 , . . . , mn
n−2, m1
n−1, m1
n) = 1. (5)
But, notice that we could have proceeded in the “reverse direction” starting
from equation (3), first considering the deviation of agent n from mn
n to m1
n and
then that of agent 2 from mn
n−1 to m1
n−1. By analogous reasons, we would get
X
j∈/S
gj (mn
1 , mn
2 , . . . , mn
n−2, m1
n−1, m1
n) = 1.
This contradicts (5).
This completes the proof of the theorem.
In view of Theorem 4, the search must be for “second-best” mechanisms. Of
course, the constant mechanism where each agent is picked with equal probability
is DSIC. The constant mechanism picks a needy agent with probability q.
Can one improve on the constant mechanism? We take a step in this direction
by constructing two DSIC mechanisms and comparing their relative efficiency. The
15

mechanisms we construct are adaptations of the two canonical DSIC mechanisms 
the random dictatorship and duples mechanisms – in the literature on probabilistic
social choice starting from Gibbard [21].
We point out the differences between our framework and that of Gibbard [21]
before we formally describe the two mechanisms.
In our framework, voters and alternatives coincide, and it is commonly known
that every agent i’s most preferred outcome is i herself. Hence, the unmodi
fied random dictatorship where each agent is picked at random and that agent’s
most preferred outcome is chosen is nothing but the constant mechanism itself.
Moreover, there is some correlation in individual preference since the bilateral re
lationships of friendship, impartiality and enmity are symmetric.8 Perhaps the
most important difference between the two frameworks is that preference order
ings are not strict in our framework unlike the Gibbardian framework. Finally,
our entirely different notion of efficiency is based on the external characteristic of
neediness and is quite independent of individual preferences.
We now define the two DSIC mechanisms. Both are direct mechanisms and
so each agent reports a type mi = (Fi, Ii, Ei, N ) or simply one of the two sets
of relationships since the latter follows as a residue. Given a message profile m
and an agent j, let Ej(m), Fj(m), and Ij(m) be sets of enemies, friends, and
impartial agents of agent j, and Nj(m) be set of needy agents reported by j.
Formally, let gR be the random dictatorship mechanism defined as follows
gR
i (m) = 1
n
X
j∈V \{i}
gR
i|j (m),
8In principle, this allows the designer to detect lies in case of discordant reports. For instance, if i reports that j is a friend but j does not confirm this, then one of i or j is lying. This does not necessarily help the designer to construct DSIC mechanisms since there could be coordinated lies.
16

where
gR
i|j(m) =

            
            
1
|Fj(m)∩Nj(m)| , if i ∈ Fj(m) ∩ Nj(m),
1
|Fj(m)| , if i ∈ Fj(m) and Fj(m) ∩ Nj(m) = ∅,
1
|Ij(m)∩Nj(m)| , if i ∈ Ij(m) ∩ Nj(m) and Fj(m) = ∅,
1
|Ij(m)| , if i ∈ Ij(m) and Fj(m) ∪ (Ij(m) ∩ Nj(m)) = ∅,
1
|Ej(m)∩Nj(m)| , if i ∈ Ej(m) ∩ Nj(m) and Fj(m) ∪ Ij(m) = ∅,
1
|Ej(m)| , if i ∈ Ej(m) and Fj(m) ∪ Ij(m) ∪ (Ej(m) ∩ Nj(m)) = ∅,
0, otherwise.
As is standard, the random mechanism picks each agent with probability 1/n,9
and allowing that agent to specify her set of second best outcomes. So, if i has
a needy friend, then she gets to pick such friends with equal probability. If no
friend is needy, then she gets to choose her friends with equal probability even if
they are not needy. If i has no friends, then she chooses needy impartial agents if
such agents exist. If not, then she chooses impartial agents with equal probability.
Finally, if i has only enemies, then she chooses the needy enemies, and so on.
Notice that the sequence in which i is allowed to choose matters. For instance,
if she is asked to choose initially from her set of enemies, then she will declare a
friend to be an enemy and choose her.
Next, we define the duples mechanism. For any mi, define a hierarchy of sets
H(mi) = {S1(mi), S2(mi), S3(mi), S4(mi), S5(mi), S6(mi)} such that
S1(mi) = Fi ∩ N
S2(mi) = Fi \ N
S3(mi) = Ii ∩ N
S4(mi) = Ii \ N
S5(mi) = Ei ∩ N
S6(mi) = Ei \ N.
9Of course, agents can be picked according to any fixed probability distribution that is independent of the message profile. The equiprobability specification is more equitable.
17

For any pair of agents, j, k ∈ V \ {i}.
Agent i votes for j against k if j ∈ Sa(mi), k ∈ Sb(mi), a < b
Agent i abstains from voting over the pair {j, k} if j and k both belong to Sa(mi)
for some a.
Let xjk(m) be the number of votes cast for j, and xkj(m) be the number of
votes cast for k in the vote over the pair{j, k} at report profile m. Then,
gD
j ({j, k}, m) =

 
 
1, if xjk(m) > xkj(m),
1/2, if xjk(m) = xkj(m),
0, if xjk(m) < xkj(m),
And,
gD
k ({j, k}, m) = 1 − gD
j ({j, k}, (m).
Then, the duples mechanism, gD is
gD
i (m) = 2
n(n − 1)
X
j∈V \{i}
gD
i ({i, j}, m).
The following proposition is stated without proof.
Proposition 1. Both gR and gD are valid and DSIC mechanisms.
We now evaluate the relative efficiency of the random dictator and duple mech
anisms.
Fix the networks of friends, enemies and impartials and denote the overall
network by G. Consider any agent j in the network with f > 0 friends. Suppose
j is the random dictator. Then, the probability that none of her friends is needy
is (1 − q)f . So, when f > 0, agent j selects a needy individual with probability
1−(1−q)f . When agent j has no friends, she selects a needy agent with probability
1 − (1 − q)i when i > 0 is the number of her impartials. Finally, if agent j has
only enemies, she selects a needy agent with probability 1 − (1 − q)n−1.
So, letting mG
f,i be the number of nodes with f friends and i impartials in the
given network G, the probability of choosing a needy agent in G by the random
18

dictator mechanism is:
PRD(G) = 1
n mG
0,0 1 − (1 − q)n−1 +
n−1
X
i=1
mG
0,i 1 − (1 − q)i +
n−1
X
f =1
n−f −1
X
i=0
mG
f,i 1 − (1 − q)f
!
. (6)
Hence the probability of choosing a needy agent by the random dictator mech
anism, on any network G, is greater or equal to q. The following proposition
describes the obvious implications of Equation (6).
Proposition 2. The random dictatorship mechanism
(i) coincides with the constant mechanism iff every agent either has exactly one
friend or no friend and exactly one impartial.
(ii) in all other cases, the probability of a needy agent being selected is equal to
1 − (1 − q)m where m ≥ 2.
(iii) the highest probability of choosing a needy agent is
PRD(G) = 1 − (1 − q)n−1
and it is attained on a graph where max(|Fi|, |Ii|, |Ei|) = n − 1 for all agents.
We now consider the duples mechanism. Since the duples mechanism is the
average of mechanisms each of whom has a range of two alternatives, the maximum
probability with which the duples mechanism chooses a needy agent is 1 − (1 − q)2.
So, on networks where all agents have two or more friends, or no friends but two
or more impartials, or where the enemy network is a complete graph on V , the
random dictatorship will be relatively more efficient than the duples mechanism.
It is also interesting to compare the two mechanisms in terms of a worst-case
scenario. From Proposition 2, we know that the lowest probability with which a
needy agent is picked by the random dictatorship equals q. We now show that if
there are only two types of links between the agents (e.g. only friends and impartial
agents, or only enemies and impartial agents), then the lowest probability with
which the duples mechanism chooses a needy agent is strictly greater than q.
19

Proposition 3. On any network G such that either S
i∈V Ei = ∅, or S
i∈V Fi = ∅,
or S
i∈V Ii = ∅, the duples mechanism chooses a needy agent with probability
strictly greater than q.
Proof. Take any network G such that either S
i∈V Ei = ∅, or S
i∈V Fi = ∅, or
S
i∈V Ii = ∅.
Notice that in any such network there are only two types of links and for any
agent i there is a strict preference between the two types of neighbours connected
by these links (e.g. there are only friends and impartial agents and friends are
strictly preferred to impartial agents). Without loss of generality, suppose that
S
i∈V Ei = ∅.
Take any networks G with n ≥ 3 agents, and any two distinct agents, i and
j. Notice that, under the duples mechanism, the remaining agents would vote as
follows:
• Agents in Fi ∩ Fj and Ii ∩ Ij vote for a needy agent if one exists.
• Agents in Fi \ (Fj ∪ {j}) vote for i, regardless of the neediness of the agents.
• Agents in Fj \ (Fi ∪ {i}) vote for j, regardless of the neediness of the agents.
These three cases cover all the agents in V \ {i, j}. Given the observation above,
the probability of choosing a needy agent in graph G from among agents i and j
is strictly greater than q if
|Fi \ (Fj ∪ {j})| ≤ n − 2
2 and |Fj \ (Fi ∪ {i})| ≤ n − 2
2 , (7)
with at least one of the inequalities being strict.
To see that this is the case, notice that what matters is which of the agents is
chosen when exactly one of them is needy. Suppose that only one of the agents
is needy. If both the inequalities in (7) are strict then the mechanism chooses
the needy agent. Thus the probability of choosing the needy agent is equal to
1 − (1 − q)2 = q + q(1 − q) in this case.
If exactly one of the inequalities in (7) is strict, say |Fj \ (Fi ∪ {i})| < n−2
2,
then the mechanism chooses the needy agent if only i is needy. Suppose only j is
needy. Since |Fi \ (Fj ∪ {j})| = n−2
2 and all other agents support j, i and j tie
20

and so the needy agent is chosen with probability 1/2. So, the overall probability
of choosing a needy agent is q + q(1 − q)/2 in this case.
If condition (7) is not satisfied then, in the case where exactly one of the agents
i or j is needy, the mechanism either always chooses the same agent, regardless of
the neediness statuses or randomizes uniformly between the two agents. In either
case the probability of choosing a needy agent is equal to q.
We complete the proof of the proposition by showing that in any network
G with at least 3 agents there exists a pair of agents i and j which satisfies
condition (7). It is easy to verify that this is true for n ∈ {3, 4} agents. Suppose
that n ≥ 5 and assume, to the contrary, that such a pair of agents does not exist.
Then, for any two agents {i, j} ⊆ V , i ̸= j,
either |Fi \ (Fj ∪ {j})| ≥ n − 2
2 or |Fj \ (Fi ∪ {i}| ≥ n − 2
2 . (8)
This implies that there is at most one agent i such that |Fi| < (n − 2)/2. This also
implies that there is at most one agent i such that |Fi| > (n − 2)/2. For if there
were two agents i and j, i ̸= j, such that |Fi| > (n − 2)/2 and |Fj| > (n − 2)/2
then
|Fi \ (Fj ∪ {j})| ≤ n − 1 − |Fj ∪ {j}| = n − 2 − |Fj| < (n − 2)/2
and, similarly, |Fj \ Fi| < (n − 2)/2, which contradicts (8). Hence there are at
least n − 2 ≥ 3 agents i such that |Fi| = (n − 2)/2. This is impossible when
n is odd and so we have a contradiction in this case. Suppose that n is even
(in which case n − 2 ≥ 4). Take any two agents, i and j, i ̸= j, such that
|Fi| = |Fj| = (n−2)/2. This, together with condition (8), implies that Fi∩Fj = ∅.
Thus for any two agents i and j such that |Fi| = |Fj| = (n − 2)/2 it holds that
Fi ∩ Fj = ∅. Since n − 2 ≥ 4 so there exist two agents k ∈/ {i, j} and l ∈/ {i, j}
with |Fk| = |Fl| = (n − 2)/2 and such that either {k, l} ⊆ Fi or {k, l} ⊆ Fj. But
then either i ∈ Fk ∩ Fl or j ∈ Fk ∩ Fl. On the other hand, by what we established
above, Fk ∩ Fl = ∅. This contradiction completes the proof.
21

6 Structural Balance
In this section, we restrict attention to the class of networks satisfying structural
balance theory, a concept borrowed from social network analysis which asserts
that social networks tend towards balanced or stable relationships. Following
Heider [22], Cartwright and Harary [19] formulated the hypothesis within a graph
theoretic framework. Using the term “friend” to designate a positive sentiment
and the term “enemy” to designate a negative relationship, the classic balance
model defines a social network as balanced if it contains no violations of three
assumptions:
• If j ∈ Fi and k ∈ Fj then k ∈ Fi (a friend of a friend is a friend ).
• If j ∈ Ei and k ∈ Ej then k ∈ Fi (an enemy of an enemy is a friend ).
• If j ∈ Ei and k ∈ Fj then k ∈ Ei (a friend of an enemy is an enemy).
Notice that the third condition, together with symmetry of enmity and friendship
relations implies that if j ∈ Fi and k ∈ Ej then k ∈ Ei (an enemy of a friend is
an enemy).
6.1 Planner knows the network
Suppose the planner knows the network. We are then able to fully characterize the
networks (within the class of networks satisfying structural balance) which admit
an efficient DSIC mechanism. Before we state the result, we need to introduce the
following notions.
An EF-component in network G is a maximal set of nodes, X ⊆ V , such that
for any two nodes {i, j} ⊆ X, i ̸= j, there is a sequence of nodes {i0, . . . , im} such
that i0 = i, im = j, and for any 1 ≤ r ≤ m, ir−1 ∈ Fir ∪ Eir . In other words, j is
reachable from i in G by a path consisting of the friendship links or enmity links
only.
An F-component is an EF-component X in which for all pairs of agents i, j ∈
X, there is a path consisting of the friendship links only. Of course, every F
component is also an EF-component.
22

An F-component X ⊆ V of G is an F-clique if, for any distinct two nodes
{i, j} ⊆ X, we have i ∈ Fj. In other words, any two nodes in an F component are
friends.
An EF-component X ⊆ V of G is an EF-clique if it is either an F-clique or
there exists an non-empty set Y ⊊ X, such that Y and X \ Y are both F-cliques
and, for any node i ∈ Y and j ∈ X \ Y , i ∈ Ej, i.e. i and j are enemies.
Lemma 1. Let G be a network satisfying Structural Balance. Then,
(i) Every F-component is an F-clique.
(ii) Every EF-component is either an F-clique or it consists of two F-cliques, Y1
and Y2, such that for all nodes i ∈ Y1 and j ∈ Y2, i ∈ Ej.
Proof. (i) Suppose X is an F-component. Consider three distinct nodes i, j, k
in X such that j ∈ Fi, k ∈ Fj. Structural balance requires that a friend of a
friend is a friend, and so we must have k ∈ Fi. Hence, X is an F-clique.
(ii) Take an EF-component X. If it is an F-component, then it is an F-clique. So,
suppose X is not an F-component. Then there are nonempty and mutually
disjoint sets Y1, . . . , Ym such that X = Sm
r=1 Yr, and Yr is an F-component, for
all r ∈ {i, . . . , m}. Let Y = {Y1, . . . , Ym} be the set of these F-components.
Take any pair of sets Y, Y ′ ∈ Y. Take any i ∈ Y and j ∈ Y ′. It cannot be that
there is a friendship link between i and j. For if i ∈ Fj, then since a friend of a
friend must be a friend, and since Y and Y ′ are F-cliques, all pairs of agents in
Y ∪ Y ′ must be friends and so Y ∪ Y ′ would be a single F-clique.
Since X is an EF-component, there must be k ∈ Y and l ∈ Y ′ such that
k ∈ El. (If no such link existed, then there could not be a path of friendship or
enemy links connecting vertices in Y with vertices in Y ′. ) Using the requirement
that a friend of an enemy is an enemy repeatedly, for all pairs of agents i, j with
i ∈ Y, j ∈ Y ′, we must have i ∈ Ej.
Lastly, suppose that |Y| ≤ 2. Assume otherwise. Then there exist Y ∈ Y,
Y ′ ∈ Y \ {Y }, and Y ′′ ∈ Y \ {Y, Y ′} and nodes i ∈ Y , j ∈ Y ′, and k ∈ Y ′′ such
that i ∈ Ej and j ∈ Ek. But then, by structural balance, k ∈ Ei (an enemy of
23

an enemy is a friend). This contradicts the fact that there are no friendship links
between Y and Y ′′.
We can now state our characterisation result.
Theorem 5. Let n ≥ 4. A network G satisfying structural balance admits an
efficient and DSIC mechanism if and only if it either has exactly one F-component
or it has at least three EF-components.
Proof. Suppose G consists of exactly one F-component. Then, V is an F-clique
containing at least 4 nodes. Then, the Intersection Condition F(k) is satisfied for
any choice of the “sink” k ∈ V .
If it has at least three EF-components then any two nodes have a common
impartial node (in the component they do not belong to) and so the Intersection
Condition I is satisfied.
Suppose G consists of (i) one EF-component that is not an F-component, or
(ii) G consists of exactly two EF-components.
In view of Lemma 1, these give rise to the following possibilities
(a) V consists of two F -cliques X1 and X2, with Ei = X2 for each i ∈ X1. This
happens if there is one EF-component.
(b) V consists of F-cliques X1, X2, Y1, Y210 with Ei = X2 for each i ∈ X1, Ei = Y2
for each i ∈ Y1, and Ii = Y1 ∪ Y2 for each i ∈ X1 ∪ X2. This happens if there
are 2 EF components.
The proof in the case of (a) above is very similar to that of Theorem 4 and is
avoided.
We prove that there is no efficient DSIC mechanism in case (b) above. We
assume that all the sets X1, X2, Y1, Y2 are non-empty. The proof can be easily
adapted if one of the X-sets and one of the Y -sets are empty.
Notice first that none of the Intersection Conditions are satisfied.
Assume to the contrary that g is an efficient DSIC mechanism.
10Some of these are possibly empty. However, at least one X-set and at least one of the Y -sets must be nonempty.
24

Suppose that X1 = {1, . . . , l}, X2 = {l + 1, . . . , s}, Y1 = {s + 1, . . . , k}, Y2 =
{k + 1, . . . , n}. Let there be two states θ1 and θ2 such that N 1 = {1} and
N 2 = {n}, where N 1 and N 2 are the sets of needy agents in states θ1 and θ2
respectively. Then, DSIC and efficiency imply that there are truthful dominant
strategy message profiles m ̄ 1 and  ̄m2 such that g1(m ̄ 1) = 1 and gn(  ̄m2) = 1.
Consider a sequence of message profiles {mr}n
r=0 such that m0 = m ̄ 1, and for
r = 1, . . . , n
• mr
r =  ̄m2
r
• mr
k = mr−1
k for all k ̸= r.
That is, at stage r, only agent r switches from reporting message  ̄m1
r to reporting
 ̄m2
r, while all others report what they reported in stage r − 1. Notice that mn =
 ̄m2.
Consider agent 1. Since  ̄m2
1 is a dominant strategy in state θ2, a unilateral
deviation to  ̄m1
1 cannot affect 1’s own probability given any report profile of others.
Hence,
g1(  ̄m2
1,  ̄m1
−1) = 1 (9)
Take any r ∈ X1. Along the sequence {mr}n
r=0, mr
r is a unilateral deviation
of r from her dominant strategy  ̄m1
r in state θ1. So, she cannot affect either her
own probability of being chosen or that of the sum of her friends’ probabilities of
being chosen. Repeated use of this argument as well as (9) establishes that
X
i∈X1
gi(  ̄m2
1, . . . ,  ̄m2
l ,  ̄m1
−X1) = 1 (10)
Similarly, no agent i in X2 can by a unilateral deviation from  ̄m1
i to  ̄m2
i affect
the sum of the probabilities of their enemies being chosen, since  ̄m1
i is a dominant
strategy in state θ1. So, starting from agent l + 1(the first agent in X2), and
applying this principle repeatedly, (10) gives us
X
i∈X1
gi(  ̄m2
X ,  ̄m1
−X ) = 1
That is,
X
i∈Y
gi(  ̄m2
X ,  ̄m1
−X ) = 0
25

But, clearly, we could have started from gn(m ̄ 2) = 1, and defined a sequence
of changes in order to arrive at
X
i∈Y2
gi(  ̄m2
X ,  ̄m1
−X ) = 1
This contradiction establishes the theorem.
6.2 The planner does not know the network
If we restrict attention to networks satisfying structural balance, the duples mech
anism strictly dominates the constant mechanism since it chooses a needy agent
with probability greater than q. On the other hand, there will be networks sat
isfying structural balance where the random dictator chooses a needy agent with
probability q. For instance, structural balance is satisfied if n is even and each
agent has exactly one friend and no enemies.
Proposition 4. On any network G with n ≥ 3 nodes that satisfies the structural
balance property, the duples mechanism chooses a needy agent with probability
greater or equal to
q + q(1 − q) 3n − 8
8(n − 1) .
Proof. Take any network G that satisfies structural balance with n ≥ 3 agents.
Take any two agents, i and j, such that i ̸= j. Notice that, under the duples
mechanism, the remaining agents would vote as follows:
• Agents in Fi ∩ Fj, Ii ∩ Ij, and Ei ∩ Ej vote for a needy agent.
• Agents in (Fi \ (Fj ∪ {j})) ∪ Ii ∩ Ej vote for i, regardless of the neediness of
the agents.
• Agents in (Fj \ (Fi ∪ {i})) ∪ Ij ∩ Ei vote for j, regardless of the neediness of
the agents.
The three cases above cover all the agents in V \ {i, j}. Given the observation
above, the probability of choosing a needy agent in graph G from among agents i
and j is equal to 1 − (1 − q)2 if
|Fi \ (Fj ∪ {j})| + |Ii ∩ Ej| < n − 2
2 and |Fj \ (Fi ∪ {i})| + |Ii ∩ Ej| < n − 2
2 , (11)
26

and it is at least q, otherwise. To see that this is the case, notice that what matters
is which of the agents is chosen when exactly one of them is needy. Suppose this
is the case. If both the inequalities in (7) are strict then the mechanism chooses
the needy agent. Thus the probability of choosing the needy agent is equal to
1 − (1 − q)2 = q + q(1 − q) in this case. On the other hand, in any case the
mechanism chooses a needy agent with probability at least q.
If all the F-components in the network are of size smaller than n/2 and the sum
of sizes of any two F-components which are not parts of the same EF-component
is less than n/2, the duples mechanism chooses a needy agent with probability
equal to 1 − (1 − q)2. To see why, suppose that the mechanism picked two agents,
i and j for the remaining nodes to vote on. If both these agents are friends
then they belong to the same F component. By the structural balance property,
Fi \ {j} = Fj \ {i}, Ei = Ej, and Ii = Ij. Hence every agent in V \ {i, j} is
either a common friend, a common enemy or a common impartial of i and j.
Hence every agent in V \ {i, j} votes for a needy agent from among i and j.
If i and j are enemies then, by the structural balance property, Ei \ {j} = Fj,
Ej \ {i} = Fi, and Ii = Ij, and Fi ∩ Fj = ∅. Hence all the common impartials
of i and j vote for a needy agent from among i and j. All the agents in Fi vote
for agent i, regardless of the neediness statuses of i and j and, similarly, all the
agents in Fj always vote for agent j. Since each F-component has size less than
n/2 so |Fi| < n/2 − 1 and |Fj| < n/2 − 1. This, together with Fi ∩ Fj = ∅ and
Ii ∩ Ej = Ij ∩ Ei = ∅ implies that condition (11) is satisfied for i and j. Thus
the duples mechanism chooses a needy agent from among i and j with probability
equal to 1 − (1 − q)2. Lastly, if i and j are impartial, then, by structural balance,
Fi ∩ Fj = Fi ∩ Ej = Ei ∩ Fj = ∅. Hence, Ei ⊆ Ij and Ej ⊆ Ii. Moreover, the
set of enemies of i forms an F-component that is not a part of an EF-component
of i and the set of enemies of j forms an F-component that is not a part of an
EF-component of j. Thus Fi \ (Fj ∪ {j}) = Fi, Ii ∩ Ej = Ej, Fj \ (Fi ∪ {i}) = Fj,
and Ij ∩ Ei = Ei. Since the sum of sizes of any two F-components which are not
27

parts of the same EF-component is less than n/2 so
|Fi \ (Fj ∪ {j})| + |Ii ∩ Ej| = |Fi| + |Ej| < n/2 − 1 and
|Fj \ (Fi ∪ {i})| + |Ij ∩ Ei| = |Fj| + |Ei| < n/2 − 1
and so condition (11) is satisfied for i and j. Thus the duples mechanism chooses
a needy agent from among i and j with probability equal to 1 − (1 − q)2.
Suppose that there exists an F-components in the network of size greater or
equal to n/2. Call it A and call the other F-component in the EF-component of
A, B. Let a = |A| and b = |B|, so that a ≥ n/2. By the analysis above, the
duples mechanism selects a needy agent with probability less than 1 − (1 − q)2 if
it picks one agent i in C and an agent j in B (i and j are enemies in this case), or
one agent in A ∪ B and another agent in V \ (A ∪ B) (i and j are impartial in this
case). In all these cases the probability of choosing a needy agent is at least q and
in the remaining cases the probability of choosing a needy agent is 1 − (1 − q)2.
Hence the probability of choosing a needy agent is at least
2ab
n(n − 1) + 2(a + b)(n − a − b)
n(n − 1) q
+ 1 − 2ab + 2(a + b)(n − a − b)
n(n − 1) (1 − (1 − q)2)
= q + 1 − 2((a + b)(n − b) − a2)
n(n − 1) q(1 − q)
≥ q + 1 − n2 − 4b2 + 2bn
2n(n − 1) q(1 − q)
≥ q + 3n − 8
8(n − 1) q(1 − q)
where the first inequality follows because the expression increases in a for a ≥ n/2
and the second inequality follows because the expression is maximised when b =
n/4.
Suppose all the F-components are of size less than n/2 and there exist two
F-components in different EF-component of the total size greater or equal to n/2.
Then there can be at most four distinct F-components, A, B, C, and D, such that
|A ∪ B| ≥ n/2, |C ∪ D| ≥ n/2, A and B are in different EF-components and C
and D are in different EF-components. Suppose also that C and B are in different
EF-components and D and A are in different EF-components (this is without loss
28

of generality, because if C was in the same EF-component as B or D was in the
same EF-component as A, we could swap the symbols denoting components C
and D). Let a = |A|, b = |B|, c = |C|, and d = |D|. Suppose that there are
four such components. Then it must be that a + b = n/2 and c + d = n/2. By
the analysis above, the duples mechanism selects a needy agent with probability
less than 1 − (1 − q)2 if it picks two impartial agents, i and j, such that either
|Fi ∪ Ej| ≥ n/2 or |Fj ∪ Ei| ≥ n/2. Thus the probability of choosing such two
agents is maximised when agents in C are in the same EF-component as A and
the agents in D are in the same EF component as B. If a = b = c = d = n/4
then a needy agent is picked with probability less than 1 − (1 − q)2 if one agent is
selected from the EF-component A ∪ C and another one from the EF-component
B ∪ D. The probability of selecting a needy agent is then equal to
2(a + c)(b + d)
n(n − 1) q + 1 − 2(a + c)(b + d)
n(n − 1) (1 − (1 − q)2)
= q + 1 − 2(a + c)(b + d)
n(n − 1) q(1 − q)
≥q+ n−2
2(n − 1) q(1 − q) ≥ q + 3n − 8
8(n − 1) q(1 − q).
A similar analysis shows that in all the remaining cases the probability of choosing
a needy agent when all the F-components are of size less than n/2 and there exist
two F-components in different EF-component of the total size greater or equal to
n/2, is greater than q + (3n − 8)q(1 − q)/(8(n − 1)).
References
[1] Tsuyoshi Adachi. A natural mechanism for eliciting rankings when jurors
have favorites. Games and Economic Behavior, 87:508–518, 2014.
[2] Noga Alon, Felix Fischer, Ariel Procaccia, and Moshe Tennenholtz. Sum of
us: Strategyproof selection from the selectors. In Proceedings of the 13th
Conference on Theoretical Aspects of Rationality and Knowledge, pages 101
110. ACM, 2011.
[3] Pablo Amoro ́s. Eliciting socially optimal rankings from unfair jurors. Journal
of Economic Theory, 144(3):1211–1226, 2009.
29

[4] Pablo Amoro ́s. A natural mechanism to choose the deserving winner when
the jury is made up of all contestants. Economics Letters, 110(3):241–244,
2011.
[5] Pablo Amor ́os. Picking the winners. International Journal of Game Theory,
42:845–865, 2013.
[6] Pablo Amor ́os. Subgame perfect implementation of the deserving winner of a
competition with natural mechanisms. Mathematical Social Sciences, 83:44
57, 2016.
[7] Pablo Amoro ́s. Eliciting the deserving winner in the presence of enemies.
Social Choice and Welfare, pages 1–31, 2025.
[8] Pablo Amoro ́s, Luis C Corch ́on, and Bernardo Moreno. The scholarship
assignment problem. Games and Economic behavior, 38(1):1–18, 2002.
[9] Haris Aziz, Omer Lev, Nicholas Mattei, Jeffrey Rosenschein, and Toby Walsh.
Strategyproof peer selection using randomization, partitioning, and appor
tionment. Artificial Intelligence, 275:295–309, 2019.
[10] Haris Aziz, Omer Lev, Nicholas Mattei, Jeffrey S Rosenschein, and Toby
Walsh. Strategyproof peer selection: Mechanisms, analyses, and experiments.
In AAAI, pages 397–403, 2016.
[11] Yakov Babichenko, Oren Dean, and Moshe Tennenholtz. Incentive
compatible classification. Proceedings of the AAAI Conference on Artificial
Intelligence, 34(05):7055–7062, April 2020.
[12] Leonie Baumann. Identifying the best agent in a network. SSRN, 2018.
[13] Elchanan Ben-Porath, Eddie Dekel, and Barton L Lipman. Optimal alloca
tion with costly verification. American Economic Review, 104(12):3779–3813,
2014.
[14] D Berga and Riste Gjorgjiev. Impartial social rankings. Manuscript, page 8,
2014.
30

[15] Antje Bjelde, Felix Fischer, and Max Klimm. Impartial selection and the
power of up to two choices. ACM Transactions on Economics and Computa
tion, 5(4), 2017.
[16] Francis Bloch, Bhaskar Dutta, and Marcin Dziubin ́ski. Selecting a winner
with external referees. Journal of Economic Theory, 211:105687, 2023.
[17] Francis Bloch and Matthew Olckers. Friend-based ranking. American Eco
nomic Journal: Microeconomics, 14(2):176–214, 2022.
[18] Nicolas Bousquet, Sergey Norin, and Adrian Vetta. A near-optimal mecha
nism for impartial selection. In Tie-Yan Liu, Qi Qi, and Yinyu Ye, editors,
Web and Internet Economics, pages 133–146, Cham, 2014. Springer Interna
tional Publishing.
[19] Dorwin Cartwright and Frank Harary. Structural balance: a generalization
of heider’s theory. Psychological review, 63(5):277, 1956.
[20] Felix Fischer and Max Klimm. Optimal impartial selection. SIAM Journal
on Computing, 44(5):1263–1285, 2015.
[21] Allan Gibbard. Manipulation of schemes that mix voting with chance. Econo
metrica: Journal of the Econometric Society, pages 665–681, 1977.
[22] Fritz Heider. Attitudes and cognitive organization. The Journal of psychology,
21(1):107–112, 1946.
[23] Ron Holzman and Herve ́ Moulin. Impartial nominations for a prize. Econo
metrica, 81(1):173–196, 2013.
[24] Deniz Kattwinkel and Jan Knoepfle. Costless information and costly verifica
tion: A case for transparency. Journal of Political Economy, 131(2):504–548,
2023.
[25] David Kurokawa, Omer Lev, Jamie Morgenstern, and Ariel D Procaccia.
Impartial peer review. In IJCAI, pages 582–588, 2015.
31

[26] Andrew Mackenzie. An axiomatic analysis of the papal conclave. Economic
Theory, pages 1–31, 2019.
[27] Tymofiy Mylovanov and Andriy Zapechelnyuk. Optimal allocation with
ex post verification and limited penalties. American Economic Review,
107(9):2666–94, 2017.
[28] Juan S Pereyra and Francisco Silva. Optimal assignment mechanisms with
imperfect verification. Theoretical Economics, 18(2):793–836, 2023.
[29] Shohei Tamura and Shinji Ohseto. Impartial nomination correspondences.
Social Choice and Welfare, 43(1):47–54, 2014.
[30] Sonal Yadav. Selecting winners with partially honest jurors. Mathematical
Social Sciences, 83:35–43, 2016.
32

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:59.298Z
- **Text Length:** 59300 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 32 of 32
