# PDF Document: Arieli and Stewart - 2025 - Bayesian Persuasion without Commitment.pdf

**File Path:** Arieli and Stewart - 2025 - Bayesian Persuasion without Commitment.pdf

**Processed Date:** 2026-02-10T18:18:19.873Z

**File Size:** 364.55 KB

**Total Pages:** 28

**Extracted Pages:** 28

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3240

**Title:** Bayesian Persuasion without Commitment

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Bayesian Persuasion without Commitment
Itai Arieli∗ Colin Stewart†
November 25, 2025
Abstract
We introduce a model of persuasion in which a sender without any commitment
power privately gathers information about an unknown state of the world and then
chooses what to verifiably disclose to a receiver. The receiver does not know how
many experiments the sender is able to run, and may therefore be uncertain as to
whether the sender disclosed all of her information. Despite this challenge, we show
that, under general conditions, the sender is able to achieve the same payoff as in
the full-commitment Bayesian persuasion case.
1 Introduction
A central question in the theory of information design is how a sender can influence
the action of a receiver by strategically disclosing information about an uncertain state.
While much of the literature assumes that the sender can commit to a signal structure ex
ante, in many environments commitment is implausible: the sender acquires information
privately and can choose, after the fact, what to reveal. This paper studies such a setting
in which the sender has no commitment power and the receiver reasons both about what
the sender revealed and what she may have hidden.
We consider a model in which the sender designs and executes a set of experiments to
learn about the underlying state. The total number of experiments the sender can run is
determined exogenously by Nature. The sender strategically selects which experiments to
∗Department of Economics, University of Toronto and the Faculty of Data and Decision Sciences,
Technion, itai.arieli@utoronto.ca.
†Department of Economics, University of Toronto, colin.stewart@utoronto.ca.
1
arXiv:2511.18662v1 [econ.TH] 24 Nov 2025

perform and observes the realization of each. All of the sender’s information acquisition
is private: the receiver does not observe the number of experiments, their design, or
their outcomes. After running the experiments, without commitment, the sender chooses
which outcomes, if any, to reveal to the receiver (along with the design of the experiment
from which it arose). The receiver, understanding both the sender’s discretion over
experiment choice and the possibility of selective disclosure, updates beliefs accordingly
and selects an action. We identify a simple condition under which, in the sender-optimal
equilibrium, the sender does as well as if she had full commitment power (that is, there
is an equilibrium that implements the Bayesian persuasion solution).
As a motivating example, consider a corporation seeking to influence a regulatory
decision on a major infrastructure project. To support its position, the firm can com
mission independent studies on various aspects such as economic impact, environmental
effects, and job creation, but faces practical constraints like limited funding, time pres
sure, or expert availability, which are beyond its control and vary across projects. The
firm strategically chooses which types of studies to conduct, observes the results, and
then selectively discloses any subset of the findings to the regulator. Aware of the firm’s
discretion over both the design and disclosure of studies, the regulator updates its beliefs
about the project and makes a policy decision accordingly.
As another example, consider a pharmaceutical company preparing a drug approval
application. It may conduct clinical trials targeting different populations or treatment
variations, but institutional constraints such as limited patient availability, recruitment
delays, or regulatory approvals restrict how many trials can be executed. The company
strategically selects which trials to run, observes the outcomes, and includes only a subset
of trials and their results in its submission. Aware of the potential for selective disclosure,
the health authority evaluates the submitted evidence with caution before making an
approval decision.
We introduce a model in which the sender can perform a limited number of simul
taneous, conditionally independent experiments to learn about an unknown state. The
number of experiments is determined randomly by Nature according to a known distri
bution and is observed only by the sender. Each experiment produces a signal about the
state, and the sender observes all outcomes privately. After observing the results, the
sender can choose to disclose any subset of the outcomes to a receiver. Each disclosed
2

signal is labeled with the experiment from which it originated, ensuring that the receiver
can correctly interpret the information contained in its outcome. The receiver, aware of
the sender’s discretion over both experiment selection and selective disclosure, forms a
belief about the state and chooses an action to maximize expected utility.
We show, under general conditions, the sender can achieve the Bayesian persuasion
benchmark in equilibrium. This result holds despite the absence of commitment and
despite the receiver’s awareness that the sender may be withholding information. The
conditions needed for this result are that (i) the is always able to run at least one experi
ment, and (ii) there exists a “punishing” action (possibly mixed) that the sender does not
prefer in any state to any of the actions chosen in the Bayesian persuasion solution. The
latter condition is guaranteed to hold when the sender has state-independent preferences
(also known as “transparent motives”).
The Bayesian persuasion solution can be achieved in a relatively simple way when the
sender has transparent motives. In that case, it suffices to consider a single experiment
whose outcomes correspond one-to-one with actions used in the Bayesian persuasion
solution. The sender simply repeats the same experiment as many times as she is able to,
and always reveals only one outcome—the one associated with her most preferred action
among all of the outcomes she observed. We show that there always exists an experiment
for which this strategy generates the same distribution of posterior beliefs for the receiver
as in Bayesian persuasion.
With state-dependent preferences, the sender’s disclosure decisions can depend in
more complicated ways on the set of outcomes she observes. Moreover, the sender’s
information may run counter to her interests; for example, with a binary state, it could
be that the sender wants to induce a low belief in the receiver precisely when her own
belief is high. In this case, it suffices to consider two kinds of strategies for the sender:
for any given number k of experiments that she can run, she either runs k identical
experiments or she runs k − 1 identical experiments along with one experiment that fully
reveals the state. Either way, the sender discloses exactly one realized outcome from
the repeated experiment; if she learns the state, she uses it only to inform her choice of
which outcome to disclose. We employ a fixed point argument to show that there exists
an experiment that generates the Bayesian persuasion solution when the sender chooses
optimally from this class of strategies for each k. The resulting experiment can differ
3

substantially from that in the standard one-shot optimal Bayesian persuasion policy.
It is sometimes possible to obtain the Bayesian persuasion solution even if there is
a positive probability that the sender cannot run any experiments. We provide a tight
characterization for the case of transparent motives. To prevent deviations by the sender,
it must be that disclosing nothing leads to the worst Bayesian persuasion action, a, for the
sender. The Bayesian persuasion solution can be attained in equilibrium if the probability
that the sender cannot run any experiments is low enough that the posterior associated
with a could arise by combining the prior belief when the sender runs no experiments with
the posterior obtained conditional on running experiments and disclosing the worst-case
outcome.
The original model of Bayesian persuasion (Kamenica and Gentzkow, 2011) features
a sender who can choose any experiment and fully commits to disclosing its outcome.
In an extension, they show that the sender can achieve the Bayesian persuasion payoff
if the choice of experiment is public and signals are verifiable. More recently, a number
of papers have relaxed the full commitment assumption in various ways. The Bayesian
persuasion payoff can also be obtained (under some conditions) if the sender sends cheap
talk messages but has incentives to maintain a reputation (Best and Quigley, 2024; Math
evet, Pearce, and Stacchetti, 2019). In other models, the sender cannot typically obtain
the Bayesian persuasion payoffs. Lipnowski and Ravid (2020) analyze cheap talk envi
ronments in which the sender has no commitment power and messages are not verifiable.
Lipnowski, Ravid, and Shishkin (2022) studies intermediate cases in which, with some
probability, the sender can freely change the message observed by the receiver. In Koessler
and Skreta (2023), the sender commits to the experiment only after learning the state
of the world. In contrast to these models, in our model, the sender discloses verifiable
information and is uninformed at the time of choosing the experiment.
Dai, Fudenberg, and Pei (2025) independently developed a model that, like ours,
features a receiver who is uncertain about how many experiments the sender can run,
the outcomes of which can be verifiably disclosed. In their model, unlike ours, the sender
also commits to a public experiment and acquires information sequentially. In the case of
transparent motives, under a stronger notion of equilibrium than we employ, they identify
conditions under which the Bayesian persuasion payoff is not attainable for the sender.
Lou (2023) similarly considers a sender who can run multiple sequential experiments and
4

disclose a subset of them. Unlike the present paper and Dai, Fudenberg, and Pei (2025),
in his model, a sender who discloses the outcome of one experiment must also disclose
the outcomes of all previous experiments.
Beginning with Glazer and Rubinstein (2004), a series of papers have analyzed games
in which a sender with a private type can disclose exogenous verifiable evidence to a
receiver, and have identified conditions under which the receiver cannot benefit from
commitment to a mechanism (Glazer and Rubinstein, 2006; Sher, 2011; Hart, Kremer,
and Perry, 2017; Ben-Porath, Dekel, and Lipman, 2019). In contrast, we focus on the
role of commitment to a disclosure policy by a sender who is uninformed ex ante and
optimally chooses what evidence to look for.
2 Model
There is an unknown state of the world ω ∈ Ω, where Ω = {ω1, . . . , ωn} is a finite set. The
state is realized according to a common prior probability p ∈ ∆(Ω). We assume without
loss of generality that pω > 0 for every ω ∈ Ω. The receiver has a finite action set A, and
the receiver’s utility is given by a function u : A × Ω → R, the sender’s utility is given by
v ̃ : A × Ω → R. When the sender has state-independent preferences, we sometimes omit
the ω argument from v ̃.
The sender can acquire information about the state by choosing a sequence of con
ditionally independent experiments and observing their realizations. The number of in
dependent experiments that the sender can choose is determined at random according
to some distribution ν ∈ ∆(N+); we write νk for the probability ν assigns to k ∈ N+
and refer to k as the type of the sender. Information acquisition is not observed by the
receiver. Let S be a measurable set containing at least n elements. An experiment is a
mapping π : Ω → ∆(S). Together with the prior p, an experiment induces a probability
distribution Pπ ∈ ∆(Ω × S). Let Π denote the set of all experiments.
The interaction between the sender and receiver takes place as follows. First, a num
ber k ∈ N+ of experiments that the sender can conduct is drawn with probability νk and
is observed only by the sender. The sender then chooses k experiments π1, . . . , πk ∈ Π.
Thereafter, the state ω ∈ Ω is realized, and the experiments are conducted indepen
dently given ω. The state is not directly observed by the sender; only the outcomes
5

(s1, . . . , sk) of the k experiments are observed. The sender can then choose any sub
set T ⊆ {(π1, s1), . . . , (πk, sk)} (with repetition allowed) to reveal to the receiver. The
receiver observes the subset T and chooses an action a ∈ A.
Formally, a strategy for the sender consists, for each k ∈ supp ν, of an element of
Πk indicating which experiments to run together with a mapping τk : Sk −→ 2{1,...,k}
indicating which outcomes to disclose. Let τ = (τk)k∈supp ν denote the sender’s strategy.
For the receiver, let ∆∗ be the set of all subsets {(π1, s1), . . . , (πl, sl)} of Π × S of
size l for any finite l ≤ sup supp ν (including l = 0). A belief system for the receiver
is a mapping ρ : ∆∗ → ∆(Ω) that assigns a posterior belief ρ(T ) to each T ∈ ∆∗.1 A
strategy for the receiver is a mapping σ : ∆∗ −→ ∆(A) that specifies an action—possibly
mixed—for each possible set of disclosed information.
Note that the sender’s strategy τ induces a belief distribution Pτ ∈ ∆(∆∗ × Ω).
Definition 1. A profile (τ, (ρ, σ)) is a weak perfect Bayesian equilibrium (wPBE) of the
game if τk is a best reply to (ρ, σ) for every k, ρ(T ) = Pτ (·|T ) for almost every T (with
respect to τ ), and σ(T ) is optimal given the belief ρ(T ) for almost every T .
3 Main Result
Note that, in any wPBE, the distribution of posterior beliefs for the receiver must be
Bayes plausible. Thus the maximal expected utility that the sender can achieve in any
wPBE is bounded above by the Bayesian persuasion utility. We ask whether the sender
can achieve this utility in our setting.
Definition 2. Given a subset of actions B ⊆ A, the receiver has a punishing action with
respect to B if there exists a posterior belief q ∈ ∆(Ω) and a distribution over actions
x ∈ ∆(A) such that x is a best reply for the receiver to the belief q and P
a∈A x(a)v ̃(a, ω) ≤
v ̃(b, ω) for every b ∈ B and ω ∈ Ω.
Thus a punishing action exists with respect to B if the action distribution x is worse
for the sender than any b ∈ B at every state ω ∈ Ω. For example, if the sender has
transparent motives, then for every B, there exists a punishing action with respect to B
(namely, the sender’s least preferred action in B).
1We omit beliefs about elements of the history other than the state ω because they are not relevant
for equilibrium.
6

We henceforth assume for simplicity that there exists a unique Bayesian persuasion
policy. By the revelation principle, we can identify this policy with a direct recommen
dation policy P ∈ ∆(A × Ω). Let A ̃ be the set of actions that are played with positive
probability under P .
Theorem 1. If the receiver has a punishing action with respect to A ̃, then there exists a
wPBE in which the sender achieves the Bayesian persuasion utility.
Proofs are in the Appendix.
Unlike the standard persuasion argument to establish the existence of the sender
optimal equilibrium with a Bayesian persuasion policy, we use a fixed point argument.
We first illustrate the theorem with an example.
Example 1. Consider the classic product adoption example where the state space Ω =
{ω0, ω1} represents the quality of a product which can be low (ω = ω0) or high (ω = ω1),
with equal prior probability. The action set is A = {a0, a1}. Action a0 represents a
non-adoption action that yields a payoff of 0 to both sender and receiver. Action a1
represents adoption and yields a payoff of 1 to the sender but is risky for the receiver,
with u(a1ω0) = −3 and u(a1, ω1) = 1. Thus, the receiver would like to adopt the product
if and only if she assigns probability at least 3/4 to state ω1. The sender’s indirect utility
is depicted in Figure 1.
Sender’s utility
Receiver’s belief
01
23
4
1
1
Figure 1: The sender’s indirect utility for Example 1. The dashed line depicts the con
cavification associated with the Bayesian persuasion solution.
The Bayesian persuasion utility is implemented by the distribution of posteriors 1
3 δ0 +
2
3δ3
4 , where δq denotes the distribution placing unit mass on q. Suppose the number of
experiments available to the sender is distributed geometrically with parameter r, that
7

is, that νk = (1 − r)k−1r for each k. We will illustrate how to generate a wPBE that
implements the Bayesian persuasion distribution.
Consider the experiment F that generates the posterior distribution
(1 − α)δ0 + αδ r+2
2r+2 ,
where α = 2r+2
2r+4 . This posterior distribution is achieved by an experiment F : Ω → ∆(S)
for S = {s0, s1} with F (ω1)[s1] = 1 and F (ω0)[s1] = r
r+2 .
Consider the following strategy τ for the sender. For each k, repeat the experiment
F k times. If there is at least one realized s1 signal, reveal {(F, s1)} to the receiver;
otherwise, reveal {(F, s0)} to the receiver.
We first claim that, on the equilibrium path, the receiver’s beliefs in a wPBE must be
ρ({F, s1}) = 3/4 if {(F, s1)} is revealed and ρ({F, s0}) = 0 if {(F, s0)} is revealed. The
latter follows immediately from the construction of F ; for the former, we must show that
Pτ (ω1|{(F, s1)}) = 3
4.
To see this, note that the signal s1 is realized with probability one given ω1. Therefore,
Pτ ({(F, s1)}|ω1) = 1. By definition,
Pτ ({(F, s0)}|ω0) =
∞
X
k=1
p(1 − p)k−1 1 − p
p+2
k
=2
3.
Therefore, Pτ (ω1|{(F, s1)}) = 3/4, as desired. It is straightforward to verify that the
sender has no profitable deviation.
To interpret the construction, notice that the positive signal in the experiment has a
posterior r+2
2r+2 > 3
4 . Thus, in order to compensate for the possibility that the sender can
run multiple experiments, to persuade the receiver to take action a1, a high realization
from any one experiment must provide stronger evidence in favor of the high state than
does the high signal in the Bayesian persuasion solution.
3.1 Outline of Proof of Theorem 1
It turns out that the equilibrium construction in Example 1 applies more generally as long
as the sender has transparent motives (in which case a punishing action always exists). In
that case, as we show in the appendix, there exists an experiment F : Ω → ∆(S) where
each signal sj ∈ S = {s1, . . . , sm} corresponds to an action aj such that v ̃(aj) ≤ v ̃(ai)
8

for j < i. The strategy for the sender of type k is to draw k conditionally i.i.d. signals
{s1, . . . , sk} according to F and then disclose {(F, si)} where i = arg max{j : sj =
sl for some l}. The receiver then plays the corresponding action ai.
Outside of the transparent motives case, the sender’s preferences over actions may
depend on her posterior belief, making it no longer possible to order actions by the
sender’s preference. The sender’s optimal disclosure strategy may therefore depend in
complicated ways on the realized profile of signals. To overcome this difficulty, we use a
fixed point argument. The following example illustrates the basic logic.
Example 2. Let Ω = {ω0, ω1}. The prior is 1/2, where we identify the prior and
posterior with the probability of ω1. The receiver’s action set is A = {a0, a1, a2}. Action
a0 is optimal for the receiver for posteriors in [0, 1/3], action a1 is optimal for posteriors
in [1/3, 2/3], and action a2 is optimal for posteriors in [2/3, 1]. The sender’s utility is
v ̃(a0, ω0) = 0, v ̃(a0, ω1) = 3/2, v ̃(a1, ω) = 0 for each ω, v ̃(a2, ω1) = 0, and v ̃(a2, ω0) = 3/2.
Note that a1 is a punishing action. The sender’s indirect utility is depicted in Figure 2.
Sender’s utility
Receiver’s belief
01
3
1 2
2
31
1 2
Figure 2: The sender’s indirect utility for Example 2.
Notice that the sender’s interests are opposed to the receiver’s in the sense that, if
they had the same belief, they would never agree on the optimal action: whenever the
receiver prefers action a2 to action a0, a sender with the same belief would prefer a0
to a2, and vice versa. Thus, for example, a sender with belief above 1/2 would ideally
like to induce a belief of at most 1/3 in the receiver. One might expect this conflict to
create difficulties in persuading the receiver, yet Theorem 1 indicates that the Bayesian
persuasion payoff is achievable for the sender.
Let ν = (νk)k≥1 be any distribution of types for the sender. Consider any experiment
F : Ω → {s1, s2}. Let x = F (ω1)[s1] and y = F (ω0)[s1].
Suppose the receiver plays action a0 if the sender discloses {(F, s1)}, plays action a2
9

if the sender discloses {(F, s2)}, and plays action a1 otherwise. It follows that whenever
the sender assigns posterior probability greater than 1/2 to ω1, she will disclose {(F, s1)}
whenever she has received at least one signal equal to s1; similarly, whenever she assigns
probability less than 1/2 to ω1 she will disclose {(F, s2)} whenever it is feasible to do so.
This disclosure strategy generates a probability distribution P ∈ ∆(Ω × A) where, for
example, P (a0|ω1) is the conditional probability that action a0 is played in state ω1.
Given this disclosure strategy, define a mapping by
T (x, y) = x + α∗ 2
3 − P (a0|ω1) , y + α∗ 1
3 − P (a0|ω0)
for α∗ > 0. If this mapping has a fixed point, it means that the corresponding experiment
together with the above strategies lead to P (a0|ω1) = 2/3 and P (a0|ω0) = 1/3, as in the
Bayesian persuasion solution. It is straightforward to verify that this forms a wPBE.
A couple of modifications are needed to ensure that T (x, y) has a fixed point. First,
we need the mapping to be continuous. By allowing the sender to choose any mixture
of optimal disclosures when she is indifferent, we obtain a correspondence satisfying the
required continuity property. Second, in some cases, at least some types of the sender
may prefer to deviate and run one experiment that fully reveals the state; the result of
this fully revealing experiment is never disclosed to the receiver, but can increase the
sender’s utility because it enables her to tailor her disclosure choice according to the
state. To accommodate this possibility, we simply allow for the option to run one fully
revealing experiment as part of the sender’s optimal strategy.
A final challenge is to ensure that T maps binary experiments to binary experiments,
i.e., that its image is contained in [0, 1]2. We prove that this is indeed the case when α∗
is sufficiently small.
4 Examples
In this section, we analyze three examples. The first shows how the equilibrium exper
iment disclosed to the receiver can be qualitatively different from the one used in the
Bayesian persuasion solution. The second shows that the conclusion of Theorem 1 can
fail if there is no punishing action. The third shows that the conclusion of Theorem 1 can
fail if there is a positive probability that the sender cannot run any experiments. Section
5 examines this last issue in detail for the case of transparent motives.
10

Example 3. Let Ω = {ω0, ω1} with prior p = 1/2. Suppose the sender’s type is equal
to 3 with probability one. There are 4 actions A = {a1, a2, a3, a4}. The sender’s utility
is u(a1, ω) = u(a4, ω) = −1/2 for each ω, u(a2, ω0) = u(a3, ω1) = 1/2, and u(a2, ω1) =
u(a3, ω0) = −1/2. The sender’s indirect utility is depicted in Figure 3.
Sender’s utility
Receiver’s belief
01
3
1 2
2
31
1 2
1 6
−1
2
Figure 3: The sender’s indirect utility for Example 3. The dashed line depicts the concav
ification. The distribution of posteriors that implements the Bayesian persuasion policy
is 1
2δ1
3+1
2δ2
3.
We first try to construct an equilibrium of the following form. The sender runs 3
conditionally i.i.d. symmetric binary experiments F : Ω → {s2, s3} and discloses {(F, si)}
if and only if signal si occurs a majority of the time (i.e., either 2 or 3 times). After
observing disclosure {(F, si)}, the receiver plays action ai. These strategies result in the
Bayesian persuasion solution if F (ω1)[s3] = F (ω0)[s2] = q where q ≈ 0.613 is the solution
of q3 + 3
2 (q2(1 − q)) = 2/3. For such an experiment, the sender’s disclosure strategy is
to reveal the majority signal and the receiver’s strategy is a best reply to the sender’s
since PF (ω1 | majority of s2) = 1/3 and PF (ω1 | majority of s3) = 2/3.
We claim, however, that the sender has a profitable deviation. Consider instead using
one of the three experiments to learn the state while running the other two experiments
as above according to F . The sender then discloses {(F, s3)} in state ω1 if she has received
at least one s3 signal, and discloses {(F, s2)} in state ω0 if she has received at least one s2
signal. This is indeed a profitable deviation since the conditional probability of playing
action a3 in state ω1 is at least 3/4 (and similarly for a2 in state ω0), which exceeds the
corresponding probability of 2/3 in the above strategy profile.
Given that the sender learns the state, in equilibrium, the receiver accounts for the
11

likelihood that disclosure of {(F, s3)} means the sender learned the state is ω1. This effect
tends to increase the receiver’s belief following disclosure of {(F, s3)}. How, then, can the
sender’s strategy ensure that this belief is not greater than 2/3? Perhaps counterintu
itively, the resolution involves reversing the direction of the signals so that s3 is relatively
more likely in state ω0 than in state ω1.
For the exact construction, take F (ω1)[s2] = F (ω0)[s3] = √13 ≈ 0.577. The sender’s
strategy is as follows. She runs two experiments according to F and one that fully
reveals the state. She then discloses {(F, s3)} in state ω1 whenever doing so is feasible,
and discloses {(F, s2)} in state ω0 whenever feasible. The receiver then plays action a3
if and only if he observes signal s3. Thus the receiver plays a3 despite the fact that the
disclosed signal, if taken at face value, suggests that the state is more likely to be ω0.
To see that this is indeed a wPBE, we need to verify first that the posterior distri
bution generated by the sender’s strategy is the desired one. Indeed, the probability of
revealing signal s3 at state ω1 is 1 − (1/√3)2 = 2/3, as desired, and similarly for s2. The
sender’s disclosure strategy, given her information, maximizes her utility by construction.
The only deviation that needs to be considered is that the sender could draw 3 signals
according to F instead of learning the state and reveal the majority signal. Under this
deviation, the probability of revealing signal s3 in state ω1 is
1 − √13
3
+ 3 √13
2
1 − √13 < 2
3.
Therefore, the sender has no profitable deviation.
Example 4. This example shows that if there is no punishing action, the conclusion of
Theorem 1 may not hold.
Let Ω = {ω0, ω1} and A = {a0, a1}. The prior, which we identify with the probability
of state ω1, is 1/2. Action a0 is optimal for the receiver if and only if she assigns posterior
probability at most 2/3 to state ω1 and action a1 is optimal if and only if she assigns
probability at least 2/3 to state ω1. The utility of the sender is v ̃(a0, ω) = 1 for each
ω ∈ Ω, v ̃(a1, ω1) = 2/3 + ε, and v ̃(a1, ω0) = 5/3 + ε for some ε > 0. The indirect utility of
the sender is depicted in Figure 4. As is evident from the graph, the Bayesian persuasion
policy induces a posterior distribution of 1
4 δ0 + 3
4δ2
3.
Suppose the distribution of sender types k is given by ν1 = ν2 = 1
2 . We claim that, for
sufficiently small ε, the Bayesian persuasion policy cannot be obtained in any equilibrium.
12

Sender’s utility
Receiver’s belief
1
2 3
1 2
1
1+ε
Figure 4: The sender’s indirect utility for Example 4. The dashed line depicts the con
cavification.
We relegate the formal proof of this claim to the appendix and provide only some intuition
here.
Suppose there was such an equilibrium. Then is must be that whenever the receiver
chooses action a0, his belief is equal to 0. It follows that, in equilibrium, the sender’s
belief is also always equal to 0 when the receiver chooses action a0, and this belief for the
sender must arise with probability at least 1/4.
Now consider the action played by the receiver if the sender discloses nothing. Since a
sender with belief 0 strictly prefers action a1 to action a0, and a0 is played with positive
probability when the sender has belief 0, it must be that the receiver plays a0 with
probability one following no disclosure.
Notice that each type k must induce the receiver to play a1 with positive probability
(in which case the receiver has belief 2/3). It is without loss to assume that type k = 1
runs a binary experiment F generating a low signal leading to posterior 0 and a high
signal leading to a positive posterior. The optimal response for type k = 2 is to run F
twice. But when ε is small, if both experiments generate high signals, then the sender’s
belief exceeds 2/3 + ε, which implies that the sender strictly prefers action a0 to action
a1. Since the sender can induce a0 by not disclosing anything, it follows that a0 is chosen
after two high signals, contradicting that the sender’s belief is 0 whenever a0 is chosen.
Example 5. We next ask whether our analysis is robust with respect to ignorance, i.e.,
whether the conclusion of Theorem 1 holds if ν assigns some small probability to k = 0.
Note that when k = 0, only the empty evidence ∅ is available for the sender to disclose.
13

Sender’s utility
Receiver’s belief
01
3
1 2
2
31
1 2
Figure 5: The sender’s indirect utility for Example 5. The dashed line depicts the con
cavification.
Let Ω = {ω0, ω1} with prior 1/2. The receiver’s action set is A = {a0, a1, a2}. Action
a0 is optimal for the receiver for posteriors in [0, 1/3], action a1 is optimal for posteriors
in [1/3, 2/3], and action a2 is optimal for posteriors in [2/3, 1]. The sender’s utility is
v ̃(a0, ω0) = 0, v ̃(a0, ω1) = 3/2, v ̃(a1, ω0) = v ̃(a1, ω1) = 0, v ̃(a2, ω0) = 3/2, and v ̃(a2, ω1) =
0. The sender’s indirect utility is depicted in Figure 5.
Let ν be any distribution of k that contains 0 in its support. Suppose for contradiction
that there exists a wPBE implementing the Bayesian persuasion policy. Since the evidence
∅ is on the equilibrium path, the receiver’s belief after observing ∅ must be either 1/3
or 2/3, and he must correspondingly play either action a0 or a2 with probability one.
Assume without loss of generality that he plays action a0. Note that whenever the sender’s
posterior belief lies above 1/2, she strictly prefers action a0 to action a2. Therefore, it
must be that the probability of ω1 conditional on a2 is at most 1/2, for otherwise the
sender would have a profitable deviation to disclosing ∅ instead of every disclosure that
leads to a2. This contradicts that the probability of ω1 conditional on a2 in the Bayesian
persuasion solution is 2/3.
5 Transparent Motives
One case of particular interest is when the sender has transparent motives, which ensures
the existence of a punishing action. In this section, we examine this case in more detail.
As we show in the appendix, under the assumption of transparent motives, one can prove
Theorem 1 in a more constructive way without relying on a fixed point argument (beyond
the Intermediate Value Theorem).
The transparent motives case also differs from the general case with respect to robust
14

ness to ignorance: as long as the posterior associated with the sender’s least preferred
action among those played in the Bayesian persuasion policy is interior, the equilibrium
is robust to ignorance. This result is a consequence of Theorem 2 below.
Recall that the state space is Ω = {ω1, . . . , ωn} and the prior is p ∈ ∆(Ω). The
distribution of types of the sender is ν ∈ ∆(N) (in particular, the support of ν may now
include 0). The sender’s utility from action a ∈ A = {a1, . . . , am} is v ̃(a). Order the
actions so that v ̃(ai) ≤ v ̃(aj) for i ≤ j. Let P ∈ ∆(A × Ω) be the Bayesian persuasion
policy. Suppose without loss of generality that P induces a belief distribution of the form
m
X
i=1
αiδqi ,
where qi
j = P (ωj|ai) and αi = P (ai × Ω).
For any q ∈ ∆(Ω)\{p}, let β(q) be the maximal β ∈ R+ such that p+β(q −p) ∈ ∆(Ω).
Note that β(q) ≥ 1 and β(q) > 1 if q ∈ int(∆(Ω)). Let α(q) = 1 − 1
β(q) ∈ [0, 1], where
we define α(p) = 1. Note that α(q)p + (1 − α(q))(p + β(q)(q − p)) = q. In addition, by
construction, α(q) is the largest α ∈ [0, 1] for which there exists q∗ ∈ ∆(Ω) such that
αp + (1 − α)q∗ = q.
Theorem 2. There exists a wPBE in which the sender achieves the Bayesian persuasion
utility if and only if ν0 ≤ α(q1)α1.
As noted above, this result implies that if q1 ∈ int(∆(Ω)), then as long as the proba
bility that k = 0 is small enough, there is wPBE that implement the Bayesian persuasion
solution.
The idea behind Theorem 2 is that, to prevent deviations by types k ≥ 1 whose
realized signals lead to action a1, it must be that disclosing nothing also leads to action
a1. The posterior associated with a1 must therefore result from a combination of the prior
p with weight in proportion ν0 and posteriors for types k ≥ 1 with weights in proportion
to their likelihood coupled with the likelihood that their experiments lead to realizations
associated with a1. The condition that ν0 ≤ α(q1)α1 ensures that the weight given to the
prior is low enough for their to exist posteriors that, when combined with the prior, lead
to the posterior associated with a1.
15

A Proof of Theorem 1
Let A ̃ = {a1, . . . , am} be the set of actions played with positive probability, where m > 1
(for m = 1, the result is trivial). Without loss of generality, we can assume that m ≤ n.
For any state ωi ∈ Ω and action aj ∈ A ̃, let
Q∗
ij = P (aj|ωi)
be the conditional probability of a recommendation of action aj given state ωi.
Consider a single-agent decision problem Γk(Q) for the sender. Let Mn×m denote the
set of n × m matrices with real-valued entries. The decision problem is defined by a
row-stochastic matrix Q = {qij}1≤i≤n,1≤j≤m ∈ Mn×m, a natural number k ≥ 1, and a set
S = {s1, . . . , sm} of m signals—one for each action aj ∈ A ̃.
In the first stage, if k > 1, the sender chooses between two levels of information
acquisition: obtaining k signals or k − 1 signals. If k = 1, the sender has no choice
and must select k = 1. After this choice, the state ωi ∈ Ω is realized according to the
prior p. Conditional on the realized state, the signal-generating matrix Q determines the
distribution of signals, where PQ(sj | ωi) = qij.
If the sender chooses to acquire k signals, then k conditionally i.i.d. draws s1, . . . , sk
are generated, with each signal sj occurring with probability qij in state ωi. If the sender
chooses k − 1, then k − 1 conditionally i.i.d. signal draws are generated in the same way;
in this case, however, the sender also observes the realized state ωi in addition to the
k − 1 signals.
In the second stage, after observing his information, the sender selects one of the
signals she has received and reveals it. Her utility depends on the revealed signal: if she
reveals sl such that sl = sj, her payoff is v ̃(aj, ωi).
Formally, for k > 1, a pure strategy ψ ∈ Ψk for the sender in problem Γk(Q) is
an element of {k − 1, k} × Λk, where the first component corresponds to the sender’s
choice of information acquisition, and λ ∈ Λk specifies which signal to reveal based on
the sender’s information. In particular, when the sender has k signals (s1, . . . , sk), λ
maps this vector to a revealed signal s ∈ {s1, . . . , sk}. When the sender has k − 1 signals
(s1, . . . , sk−1) and additionally observes the state ωi ∈ Ω, λ maps (s1, . . . , sk−1, ωi) to a
signal s ∈ {s1, . . . , sk−1}. For k = 1, the sender has no choice, as she possesses only one
signal, which she must reveal.
16

We note that any strategy ψ induces a probability distribution P ψ over Ω × S, where
P ψ(sj|ωi) denotes the conditional probability that the sender reveals signal sj in state
ωi. This distribution gives rise to a row-stochastic matrix Qψ = {qψ
ij }1≤i≤n, 1≤j≤m, where
qψ
ij = P ψ(sj | ωi).
We next establish the following lemma.
Lemma 1. Let  ̃Ψk be the set of all mixed strategies in Γk(Q) that maximize the sender’s
utility. Then the set
CΓk (Q) = { Qψ ̃ : ψ ̃ ∈ Ψ ̃ k }
is a convex and compact subset of Rn·m.
Proof. Note that the set of pure strategies Ψk in Γk is finite. Let Ψ′
k be the set of all pure
utility-maximizing strategies. Clearly Ψ ̃ k is the set of all convex combinations of elements
in Ψ′
k. Therefore Ψ ̃ k is a convex and compact set in ∆(Ψk). The mapping ψ ̃ → Qψ ̃ is
linear on ∆(Ψk) and therefore CΓk(Q) is compact and convex as a linear image of the
compact convex set Ψ ̃ k.
Now consider a compound decision problem Γν(Q). In this problem, the value k is
drawn according to the distribution ν and the sender continues as in Γk(Q). Let K be
the support of ν. A pure strategy ψ = (ψk)k∈K in Γν(Q) is just a concatenation of pure
strategies ψk in Γk(Q) for every k ∈ K. Note that a strategy ψ = (ψk)k∈K in Γν(Q)
is utility maximizing if and only if each ψk is utility maximizing in Γk(Q). Therefore,
extending the definition of CΓk(Q) to CΓν (Q) in the obvious way, we have
CΓν (Q) =
X
k
νkCΓk (Q).
In particular, CΓν (Q) is convex and compact.
Let Q be the set of all row-stochastic matrices Q ∈ Mn×m such that Qij = 0 whenever
Q∗
ij = 0. Note that Q is convex and compact.
For α > 0, define a correspondence Tα : Q → Mn×m by
Tα(Q) = {Q + α(Q∗ − Q′) | Q′ ∈ CΓν (Q)}.
Note that, by Lemma 1, Tα is a convex and compact-valued correspondence.
Lemma 2. There exists α∗ > 0 for which the range of Tα∗ is contained in Q.
17

Proof. For q ∈ [0, 1], let Π(q) = Eν 1 − (1 − q)k ; when q = Q(s|ω), since 1 − (1 − q)k
is the probability of getting at least one s signal out of k signals, Π(q) is the maximal
conditional probability of revealing a signal s in state ω. Note that Π is continuous,
strictly increasing, and satisfies Π(0) = 0 and Π(1) = 1.
Let amin = min{Q∗
ij : Q∗
ij > 0} ∈ (0, 1], and q0 = Π−1(amin) ∈ (0, 1]. We claim that
α∗ = min{ q0
1−amin , 1} satisfies the desired properties. First note that α∗ ∈ (0, 1].
Fixing any Q ∈ Q and any Q′ ∈ CΓν (Q), let
Q ̃ = Q + α∗(Q∗ − Q′).
Consider a given (i, j). Write
q = Qij, a = Q∗
ij, q′ = Q′
ij, and q ̃ = q + α∗(a − q′).
We claim that q ̃ is nonnegative. If q = 0, then signal sj never appears in state ωi, and
hence q′ = 0. Therefore, q ̃ = 0. In particular, if a = 0, then by the definition of Q, we
have q = 0 and therefore q ̃ = 0.
Now suppose q ∈ (0, q0]. Recall that q′ represents the probability of revealing signal
sj in state ωi. Since Π(q) is the maximal probability that sj can be revealed given q, we
have q′ ≤ Π(q) ≤ Π(q0) = amin ≤ a, which implies a − q′ ≥ 0 and thus q ̃ ≥ q ≥ 0.
If q > q0, then
q ̃ = q − α∗(q′ − a) ≥ q − α∗(1 − amin) ≥ q0 − α∗(1 − amin) ≥ q0 − q0 = 0,
where the final inequality follows from the definition of α∗. This completes the proof of
the claim that q ̃ is nonnegative.
The fact that P
j Q ̃ij = 1 for every i is immediate from the definition of Q ̃ and the
corresponding property of Q, Q∗, and Q′.
We have shown that for every (i, j), q ̃ij ≥ 0, the row sums of Q ̃ equal one, and Q ̃ij = 0
whenever Q∗
ij = 0. Therefore, Q ̃ ∈ Q.
Next, we show that Tα∗ has a fixed point.
Lemma 3. There exist α∗ > 0 and Q ∈ Q such that Q ∈ Tα∗(Q).
Proof. We use the Kakutani fixed point theorem. Let α∗ be as in Lemma 2. Since Tα∗ is
convex and compact-valued and, by Lemma 2, has range contained in Q, all that remains
is to show that the graph of Tα∗ is closed.
18

Let (Qn)n be a sequence in Q that converges to Q and let Zn ∈ Tα(Qn) for each n
with Zn → Z. We must show that Z ∈ Tα(Q).
For each n, let Rn ∈ CΓν (Qn) be such that
Zn = Qn + α∗ (Q∗ − Rn) .
Note that, by definition, CΓν (Qn) = P
k νkCΓk(Qn). Therefore, for each n and each k in
the support of ν, there exists Rk
n ∈ CΓk (Qn) such that Rn = P
k νkRk
n. Since CΓk (Qn) ⊂ Q
and Q is compact, by using a diagonal argument, we can assume that for each k, the
sequence (Rk
n)n converges to some Rk
∗. In particular, we have Z = Q + α∗(Q∗ − P
k νkRk
∗ ).
Since CΓk is a closed correspondence we have R∗
k ∈ CΓk (Q). Hence
Z ∈ Q + α∗ Q∗ −
X
k
νkCΓk (Q)
!
.
Therefore, Z ∈ Tα(Q) as desired.
As a corollary of the existence of a fixed point, we have
Corollary 1. There exists a matrix Q ∈ Q such that Q∗ ∈ CΓν (Q).
Proof. Let Q be the fixed point of Tα∗. By definition there exists Q′ ∈ CΓν (Q) such that
Q = Q + α∗(Q∗ − Q′).
The corollary follows since α∗ > 0.
Proof of Theorem 1. Let Q ∈ Q be such that Q∗ ∈ CΓν (Q). Note that any pure
strategy ψ = (ψk)k∈K in Γν(Q) induces a strategy for the sender in our evidence game
as follows. Let S = {s1, . . . , sm} and π : Ω → S be the experiment that induces Q; that
is, let π(ωi)[sj] = qij for every 1 ≤ i ≤ n and 1 ≤ j ≤ m. The strategy induced by ψ
is defined naturally as follows: for every realized k, if ψk chooses to acquire k signals,
then the sender acquires k experiments π1, . . . , πk, all equal to π. After the k signals
s1, . . . , sk are realized, the sender reveals to the receiver a unique realization (π, s) where
the signal s ∈ {s1, . . . , sk} is chosen according to the corresponding λ. If ψk acquires
k − 1 signals, then the sender chooses k − 1 experiments π1, . . . , πk−1, all equal to π, and
uses the extra experiment to choose π ̃, which is the full information experiment. That is,
S ̃ = {t1, . . . , tn} and π ̃(ωi)[tj] = δij. After the k − 1 signals s1, . . . , sk−1 are realized and
19

the state ωi = ti is revealed, the sender chooses to reveal the signal s ∈ {s1, . . . , sk−1}
that is induced by λ with respect to (s1, . . . , sk−1, ωi). Note that this construction readily
extends to mixed strategies ψ ̃. Since Q∗ ∈ CΓν (Q) by construction, there exists an
optimal strategy ψ ̃ = (ψ ̃k)k∈K in Γν(Q) such that Qψ ̃ = Q∗.
Let the sender’s strategy be the one that is induced by ψ ̃. Define an assessment (ρ, σ)
for the receiver as follows.2 Let {pj}m
j=1 ⊂ ∆(Ω) be the posteriors induced by the Bayesian
persuasion policy, where pj = P (· | aj) is the conditional probability over Ω given that
action aj is recommended by the sender. Define the receiver’s assessment following a
disclosure {(π, s)} such that s = sj to be ρ({(π, sj)}) = pj and σ({(π, sj)}) = δaj . That
is, if the receiver observes the experiment π with a corresponding signal sj, then his
posterior belief is pj and he plays action aj with probability one. For any other T ∈ ∆∗
let ρ(T ) = q and σ(T ) = x, where x ∈ ∆(A) is the punishing action with respect to A ̃,
and q ∈ ∆(Ω) is a posterior belief for which x is optimal for the receiver.
We claim that the above profile forms wPBE. First consider the receiver. Let P ̃ ∈
∆(Ω × S) be the probability distribution induced by the sender’s strategy; namely,
P ̃(ωi, sj) is the probability that the realized state is ωi and the revealed signal is sj.
By construction, P ̃(sj | ωi) = Q∗
ij. Since the marginal of P ̃ on Ω is the prior p, it must
be that P ̃ induces the same probability distribution as the Bayesian persuasion policy
P ∈ ∆(Ω × A) in the sense that P ̃(ωi, sj) = P (ωi, aj). Therefore, the belief described
by ρ is the correct belief on the equilibrium path. Moreover, σ is optimal given ρ by
construction.
We claim that the sender’s strategy is optimal given the receiver’s strategy. It is
enough to show that it is optimal conditional on every realized k ∈ K. Note that, by
construction, the sender’s strategy is optimal subject to the constraint that the only
available experiments to her are the experiment π defined above and the full information
experiment π ̃. By the construction of the receiver’s strategy and the definition of a pun
ishing action, revealing evidence that differs from {(π, s)} is never a profitable deviation.
Thus, the only possible deviation that needs to be considered is that one or more of
the k experiments is conducted according to π′ ̸= π but is revealed to the receiver with
probability zero. Therefore, the sender only uses the other experiment to acquire further
information about the state. Replacing any such experiments with π ̃ makes the sender
2Recall that an assessment (ρ, σ) comprises a belief system ρ together with a strategy σ.
20

better informed and thus can only improve her utility. Therefore, the sender’s strategy
maximizes her expected utility given the receiver’s strategy.
B Proof for Example 4
Proposition 1. There exists ε > 0 for which there is no wPBE implementing the
Bayesian persuasion policy in Example 4.
Proof. Assume by way of contradiction that such a wPBE (G, φ) exists for every ε > 0.
Note that on the equilibrium path the receiver can have only two posterior beliefs about
state ω1: 0 and 2/3. Note also that, on the equilibrium path, conditional on the receiver
assigning probability 0 to state ω1, the sender does as well. In particular, there is a positive
probability that, after observing the realized signals, the sender assigns probability 0 to
state ω1.
Let ∅ denote the empty evidence. We claim that σ(∅) is a0 with probability one.
Note that whenever the sender’s belief about state ω1 is 0, she strictly prefers action 1
to action 0. In that case, if σ(∅) is not deterministically a0, the sender has a profitable
deviation to ∅.
We claim that the posterior belief of the sender can never lie strictly above 2/3 + ε
in equilibrium. To see this, note that above this value, the utility of action a1 lies below
1. Since the sender’s belief is not 0, it must be that, on the equilibrium path, what she
reveals induces the receiver to have belief 2/3 and to choose action a1. But then the
sender prefers to deviate to disclosing ∅. Revealing a signal on the equilibrium path that
induces the receiver to have belief 2/3 leads to action a1 by the receiver. In this case, the
sender can deviate and play ∅.
Next, we claim that the posterior distribution induced by the single experiment type
k = 1 uses takes the form αεδ0 + (1 − αε)Fε, where αε converges to 1/4 and Fε ∈ ∆((0, 1])
converges in probability to 2/3 as ε → 0. Without loss of generality, any experiment of
type k = 1 generates a posterior distribution αεδ0 + (1 − αε)Fε (allowing for αε to be 0).
Since the support of the posterior distribution for k = 1 has supremum no greater than
2/3 + ε and has an expectation of 1/2, αε can be at most 1/4 as ε → 0.
Suppose αε lies strictly below 1/4 − δ for some δ > 0 and arbitrarily small ε > 0.
Then, since (1 − αε)E(Fε) = 1/2, Fε must have an expectation E(Fε) that lies strictly
21

below 2/3 − η for some η > 0. Note that conditional on any posterior q > 0 for type
k = 1, the receiver must play action a1. Therefore, the expected payoff for type k = 1 is
αε + (1 − αε) −E(Fε) + 5
3 +ε .
This expression lies strictly above
1
4+3
4−2
3 −η + 5
3 +ε ,
which in turn is strictly larger than the Bayesian persuasion expected payoff of
1
4+3
4 −2
3+5
3 +ε .
Since the expected utility of type k = 2 must be at least as large as that of type k = 1, it
follows that the sender’s ex ante expected utility exceeds that under Bayesian persuasion,
which is impossible. Therefore, αε → 0 as ε → 0.
Finally, by similar reasoning, for every δ > 0, the probability that the experiment of
type k = 1 leads to a posterior that lies in the interval [2/3 − δ, 2/3 + ε] approaches 3/4
as ε → 0. Otherwise, the probability that the posterior lies in (0, 2/3 − δ] is at least some
η > 0 for arbitrarily small ε > 0. In this case, the expected utility of type k = 1 is at
least
1
4 +η − 2
3 −δ + 5
3 +ε + 3
4 −η − 2
3 +ε + 5
3 +ε .
Again, this expected payoff lies strictly above the Bayesian persuasion expected payoff
for sufficiently small ε, and we have a contradiction.
The preceding argument implies that the experiment chosen by type k = 1 generates
a posterior distribution that lies arbitrarily close to the Bayesian persuasion distribution
as ε → 0, and gives an expected utility for the sender arbitrarily close to the Bayesian
persuasion utility.
Now consider type k = 2. We claim that there exists δ > 0 such that the expected
utility of type k = 2 exceeds the Bayesian persuasion utility by at least δ when ε > 0 is
sufficiently small. To see this, consider the following strategy for type k = 2: choose the
same experiment as type k = 1 twice. If the realized signals correspond to a posterior
of 0 together with another posterior q ∈ (0, 2/3 + ε], reveal the signal that led to q
together with its experiment. Otherwise, reveal either signal realization together with its
experiment. Note that the event of drawing both signals corresponding to 0 and q in the
22

two experiments has a probability bounded below by some η > 0. Using this strategy
guarantees an expected utility of at least
1
4 −η +η 5
3 +ε + 3
4−2
3 +ε + 5
3 +ε ,
which is strictly greater than the Bayesian persuasion utility when ε is sufficiently small.
Therefore, the sender’s ex ante expected utility is strictly greater than the Bayesian
persuasion utility, a contradiction.
C Proof of Theorem 2
In order to prove Theorem 2, we allow the number of samples k to depend on the realized
state as well. Thus, in this case, we have ν ∈ ∆(Ω × N); we write νk
ω for ν(k | ω). Given
an experiment π ∈ Π, let Pπ,ν ∈ ∆ Ω × ∪∞
k=1Sk be the distribution that is generated
by π and ν when k is chosen according to ν given ω and thereafter k conditionally i.i.d.
signals are drawn according to π.
Lemma 4. Consider a distribution γδqL + (1 − γ)δqH ∈ ∆(∆(Ω)) with a barycenter
equal to the prior: γqL + (1 − γ)qH = p. There exists a binary signal π ∈ ∆(Ω × S′),
where S′ = {sH, sL}, such generating the signal k times conditionally i.i.d., where k is
determined according to ν ∈ ∆(Ω × N), gives rise to signals s1, . . . , sk such that Pπ,ν(· |
s1 = · · · = sk = sL) = qL and Pπ,ν(s1 = · · · = sk = sL) = γ.
Proof. Consider a binary signal on S′ that generates a posterior distribution αδpL + (1 −
α)δpH ∈ ∆(∆(Ω)), where pL is the posterior distribution given sL and pH is the posterior
distribution given sH. We claim that such a binary signal has the desired property if and
only if
X
ω∈Ω
n
X
k=1
νk
ω pω
αpL
ω
pω
k
= γ (1)
and
pω
Pn
k=1 νk
ω
αpωL pω
k
P
ω′∈Ω pω′
Pn
k=1 νk
ω′
αpL
ω′ pω′
k = qL
ω (2)
for every ω ∈ Ω. To understand these two conditions, note that, by Bayes’ rule, the
conditional probability of signal sL given state ω is αpL
ω/pω. Thus, (1) states that the
23

total probability of receiving only sL signals is γ, and (2) states that the conditional
probability of state ω given the event that si = sL for all i = 1, . . . , k is qL
ω , as desired.
To see that (1) and (2) have a solution, note that they are equivalent to requiring
that for every ω ∈ Ω,
pω
n
X
k=1
νk
ω
αpL
ω
pω
k
= γqL
ω . (3)
Note that, for every ω, the left-hand side of (3) is strictly increasing as a function of xω =
αpL
ω/pω, which is the conditional probability of the low signal given state ω. Therefore,
(3) has a unique solution x′
ω for each ω ∈ Ω. Since γqL
ω ≤ pω, we have that x′
ω ≤ 1.
It follows that α = P
ω x′
ωpω ≤ 1. Consequently, pL
ω = x′
ωpω/ P
ω′ (x′
ω′pω′) is uniquely
determined and corresponds to pL ∈ ∆(Ω), as desired.
The following proposition generalizes Lemma 4.
Proposition 2. Consider a belief distribution γ1q1 + · · · + γlql ∈ ∆(∆(Ω)) with barycen
ter p. There exists a signal set S = {s1, . . . sl} and an experiment π such that, for
each j = 1, . . . , l, Pπ,ν(· | max{i | sm = si for some m ∈ {1, . . . , k}} = j) = qj and
Pπ,ν(max{i | sm = si for some m ∈ {1, . . . , k}} = j) = γj.
Proof. Lemma 4 proves the proposition for the case l = 2. We prove the proposition by
induction on l. Assume the result holds for l − 1 ≥ 2 and let γ1q1 + · · · + γlql ∈ ∆(∆(Ω))
be a belief distribution with barycenter p. Define a new distribution γ′
1q1
∗+· · ·+γ′
l−1ql−1
∗∈
∆(∆(Ω)) as follows: (i) for each i = 1, . . . , l − 2, let γ′
i = γi and qi
∗ = qi, and (ii) let
γ′
l−1 = γl−1 + γl and ql−1
∗ = (γl−1ql−1 + γlql)/(γl−1 + γl).
By the induction hypothesis, there is a signal set S′ = {s′
1, . . . , s′
l−1} and an experiment
π′ that implements γ′
1q1
∗ + · · · + γ′
l−1ql−1
∗ . That is,
Pπ′,ν(· | max{i | sm = s′
i for some m ∈ {1, . . . , k}} = j) = qj
∗ and
Pπ′,ν(max{i | sm = s′
i for some m ∈ {1, . . . , k}} = j) = γ′
j.
Let L be the event that max{i | sm = si for some m ∈ {1, . . . , k}} = l − 1. By
construction, Pπ′,ν(· | L) = ql−1
∗ . Let ν ̃ ∈ ∆(Ω × N) be the joint conditional distribution
of the variables k and ω given L. Since ql−1
∗ = (γl−1ql−1 + γlql)/(γl−1 + γl), by Lemma 4,
we can define a signal set S ̃ = {s ̃1, s ̃2} and an experiment π ̃ for which the marginal of Pπ ̃,ν ̃
on Ω is ql−1
∗ and Pπ ̃,ν ̃(· | si = s ̃1 for all i = 1, . . . , k) = ql−1 and Pπ ̃,ν ̃(si = s ̃1 for all i =
1, . . . , k) = γl−1/(γl−1 + γl).
24

Let S = {s1, . . . , sl}. Define an experiment π using the experiments π′ and π ̃ as
follows: π(sj|ω) = π′(s′
j|ω) for every j = 1, . . . , l − 2, π(sl−1|ω) = π′(s′
l−1|ω)π ̃(s ̃1|ω), and
π(sl|ω) = π′(s′
l−1|ω)π ̃(s ̃2|ω). It follows by construction that π has the desired properties
with respect to ν and γ1q1 + · · · + γlql.
We next provide an alternative proof of Theorem 1 for the transparent motives case
where the sender’s utility is state independent.
Alternative Proof of Theorem 1 under Transparent Motives. Let α1q1 + · · · +
αlql ∈ ∆(∆(Ω)) be the optimal policy of the sender. Without loss of generality, we
can assume that each posterior qi corresponds to a different optimal action ai of the
receiver, and that u(ai) < u(aj) for i < j. Let π be the experiment that implements
the distribution according to Proposition 2 with S = {s1, . . . , sl}. Consider the strategy
for the sender that, for each type k, runs the experiment π k times and reveals to the
receiver the highest of the realized signals she observes, that is, she reveals {(π, sj)},
where j = max{i | sm = si for some m ∈ {1, . . . , k}}.
The assessment (ρ, σ) of the receiver is as follows. On the equilibrium path, the belief
is given by ρ({π, sj}) = qj for each j and the strategy is σ({π, sj}) = aj. Let a∗ ∈ A be
the worst action for the sender that is rationalizable for the receiver and let q∗ ∈ ∆(Ω)
be a belief for which a∗ is optimal. For any T ∈ ∆∗ that is off the equilibrium path,
let ρ(T ) = q∗ and σ(T ) = a∗. It follows by construction that this profile forms a weak
perfect Bayesian equilibrium.
Proof of Theorem 2. Let α1δq1 +· · ·+αlδql be the Bayesian persuasion policy. Assume
first that the condition in the statement of the theorem holds. Let δ = ν0/α1. Note that
δ ≤ β(q1). Therefore, by definition, we can find q∗ such that δp + (1 − δ)q∗ = q1.
Consider the posterior distribution α′
1q1
∗ +· · ·+α′
lql
∗ where q1
∗ = q∗, α′
1 = (α1 −ν0)/(1−
ν0), and for i = 1, . . . , l, qi
∗ = qi and α′
i = αi/(1 − ν0). Note first that
l
X
i=1
α′
i = α1 − ν0 + Pl
i=2 αi
1 − ν0
= 1 − ν0
1 − ν0
= 1.
In addition, by construction, (1 − δ)q∗ = q1 − δp. Hence, multiplying by α1, we have
25

(α1 − ν0)q∗ = α1q1 − ν0p. Therefore,
l
X
i=1
α′
iqi
∗ = (α1 − ν0)q1
∗ + Pl
i=2 αiqi
1 − ν0
= α1q1 − ν0p + Pl
i=2 αiqi
1 − ν0 = p − pν0
1 − ν0
= p.
Thus, the distribution α′
1q1
∗ + · · · + α′
lql
∗ has barycenter p.
Let ν′ ∈ ∆(N) be such that ν′
k = νk/(1 − ν0) for every k ≥ 1. Let π be the experiment
constructed in the alternative proof of Theorem 1 (for the transparent motives case) that
implements α′
1q1
∗ + · · · + α′
lql
∗ with respect to ν′. That is, S = {s1, . . . , sl} and π : Ω → S
satisfies
Pπ,ν′(· | max{i | sm = si for some m ∈ {1, . . . , k}} = j) = qj
∗
and Pπ,ν′(max{i | sm = si for some m ∈ {1, . . . , k}} = j) = α′
j
for every j = 1, . . . , l.
Suppose the sender plays as follows. For any k ≥ 1, she generates k k conditionally
i.i.d. signals according to π. Let j = max{i | sm = si for some m ∈ {1, . . . , k}} be the
index of the highest signal she observes. If j > 1, she reveals {(π, sj)} to the receiver; if
j = 1, she reveals ∅. Suppose the receiver plays action aj upon observing T = {(π, sj)}
and plays a1 following any other T ∈ ∆∗. We claim that these strategies are part of a
wPBE.
Note that if the sender implements this strategy, then the resulting posterior distri
bution of the receiver following the evidence ∅ is
ν0p + (1 − ν0)α′
1q1
∗
ν0 + (1 − ν0)α′
1
. (4)
To see this, note that ∅ is revealed if either k = 0 or if k > 0 and sm = s1 for all m =
1, . . . , k. The former holds with probability ν0 and induces a posterior p while the latter
holds with probability (1−ν0)α′
1 and induces a posterior q1
∗. Since α′
1 = (α1 −ν0)/(1−ν0),
the posterior distribution in equation (4) equals (ν0p + (α1 − ν0)q∗) /α1 = q1.
In addition, revealing a signal sj for j > 1 generates a posterior of qj and occurs
with probability (1 − ν0)α′
j = αj. This induces the desired distribution of posteriors. If
26

the receiver’s off-equilibrium-path belief is always equal to q1, the receiver’s strategy is
optimal and so is the sender’s.
Conversely, consider a wPBE that implements the Bayesian persuasion policy and
assume ν0 > 0. (If ν0 = 0, the result holds by Theorem 1.) We first claim that the action
that is played when ∅ is revealed must be the lowest action a1. First note that since
ν0 > 0, the action played following ∅ must be one of the Bayesian persuasion actions.
If some action aj ̸= a1 is played following ∅, then for any disclosure leading to a1, the
sender would prefer to deviate to disclosing ∅.
Let α′
1 be the probability of sending ∅ conditional on k > 0, and let p∗ be the
conditional probability over ∆(Ω) given the event that the sender reveals ∅ and k > 0.
By definition, it must be that ν0 + (1 − ν0)α′
1 = α1 and
ν0
ν0 + (1 − ν0)α′
1
p + (1 − ν0)α′
1
ν0 + (1 − ν0)α′
1
p∗ = q1.
By definition of β(q1), we must have
ν0
ν0 + (1 − ν0)α′
1
≤ β(q1).
Since α′
1 = (α1 − ν0)/(1 − ν0), we have that
β(q1) ≥ ν0
ν0 + (1 − ν0)α′
1
= ν0
ν0 + (1 − ν0) α1−ν0
1−ν0
= ν0
ν0 + α1 − ν0
= ν0
α1
,
and therefore, ν0 ≤ β(q1)α1.
References
Ben-Porath, Elchanan, Eddie Dekel, and Barton L Lipman (2019). “Mechanisms with
evidence: Commitment and robustness”. Econometrica 87.2, pp. 529–566.
Best, James and Daniel Quigley (2024). “Persuasion for the long run”. Journal of Political
Economy 132.5, pp. 1740–1791.
Dai, Yifan, Drew Fudenberg, and Harry Pei (2025). “Bayesian Persuasion with Selective
Disclosure”. Working paper.
Glazer, Jacob and Ariel Rubinstein (2004). “On optimal rules of persuasion”. Economet
rica 72.6, pp. 1715–1736.
— (2006). “A study in the pragmatics of persuasion: a game theoretical approach”.
Theoretical Economics 1.4, pp. 395–410.
27

Hart, Sergiu, Ilan Kremer, and Motty Perry (2017). “Evidence games: Truth and com
mitment”. American Economic Review 107.3, pp. 690–713.
Kamenica, Emir and Matthew Gentzkow (2011). “Bayesian persuasion”. American Eco
nomic Review 101.6, pp. 2590–2615.
Koessler, Fre ́d ́eric and Vasiliki Skreta (2023). “Informed information design”. Journal of
Political Economy 131.11, pp. 3186–3232.
Lipnowski, Elliot and Doron Ravid (2020). “Cheap talk with transparent motives”. Econo
metrica 88.4, pp. 1631–1660.
Lipnowski, Elliot, Doron Ravid, and Denis Shishkin (2022). “Persuasion via weak insti
tutions”. Journal of Political Economy 130.10, pp. 2705–2730.
Lou, Yichuan (2023). “Private Experimentation, Data Truncation, and Verifiable Disclo
sure”. arXiv preprint arXiv:2305.04231.
Mathevet, Laurent, David Pearce, and Ennio Stacchetti (2019). “Reputation and infor
mation design”. Unpublished paper, New York University.[451].
Sher, Itai (2011). “Credibility and determinism in a game of persuasion”. Games and
Economic Behavior 71.2, pp. 409–419.
28

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:19.873Z
- **Text Length:** 59403 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 28 of 28
