# PDF Document: Liu - 2025 - Dynamic Reward Design.pdf

**File Path:** Liu - 2025 - Dynamic Reward Design.pdf

**Processed Date:** 2026-02-10T18:15:37.980Z

**File Size:** 666.11 KB

**Total Pages:** 73

**Extracted Pages:** 73

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3146

**Title:** Dynamic Reward Design

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Dynamic Reward Design*
Yijun Liu†
November 26, 2025
Abstract
This paper studies a dynamic screening model in which a principal hires an agent
with limited liability. The agent’s private cost of working is an i.i.d. draw from a
continuous distribution. His working status is publicly observable. The limited liabil
ity constraint requires that payments remain nonnegative at all times. In this setting,
despite costs being i.i.d. and the payoffs being additively separable across periods, the
optimal mechanism does not treat each period independently. Instead, it features back
loading payments and requires the agent to work in consecutive periods. Specifically,
I characterize conditions under which the optimal mechanism either grants the agent
flexibility to start working in any period or restricts the starting period to the first. In
either case, once the agent begins working, he is incentivized to work consecutively
until the end.
*I am deeply grateful to Jeffrey Ely, Alessandro Pavan, Piotr Dworczak, and Yingni Guo for their constant
guidance and support, as well as to Ian Ball, Xiaoyu Cheng, and Bruno Strulovici for many detailed comments
and discussions. For helpful comments, I thank Meghan Busse, Eddie Dekel, Peter Klibanoff, Marciano
Siniscalchi, Maren Vairo, Asher Wolinsky, and seminar participants at Northwestern University and the 35th
Stony Brook International Conference on Game Theory for their comments. †Department of Economics, Northwestern University, Evanston, IL, USA.
1
arXiv:2511.19838v1 [econ.TH] 25 Nov 2025

1 Introduction
This paper studies dynamic screening problems in which a principal hires an agent with
limited liability to work over multiple periods. The agent’s private cost of working is
stochastic and independently and identically distributed (i.i.d.) across time. This variation
of cost over time is common in reality. For example, Uber drivers’ private cost of working
may be relatively high when they have family obligations or other duties, or when they
simply feel inclined to rest at home; conversely, it may be lower when they are free of other
duties and feel energetic and eager to drive. On the other hand, the principal always prefers
the agent to work more—just as the Uber platform benefits from drivers taking more rides,
regardless of drivers’ private working costs.
Additionally, workers are often subject to a limited liability constraint, which implies
that the payments from the principal to the agent must be nonnegative in all periods. In
other words, the principal cannot require the agent to pay. This constraint is common to
many real-world settings. The rationale behind it is twofold. First, it is the convention.
Compensation schemes are often designed with this constraint in mind. Second, agents,
such as drivers, are often liquidity-constrained and unable to afford upfront payments.This
paper investigates what the optimal reward scheme is in a setting with these two key com
ponents: i.i.d. private costs and limited liability.
One possible approach is to treat each period independently since the costs are i.i.d. and
the principal’s payoff is additively separable across time. However, we show that the princi
pal can achieve a better outcome by designing a dynamic mechanism that links the agent’s
performance across periods, using compensation from past work to incentivize future ef
fort. Another possibility is to discipline the agent by exploiting the law of large numbers as
the number of periods approaches infinity, as in the quota mechanism proposed by Jackson
and Sonnenschein (2007). However, this method is not applicable in our setting, in which
the number of periods is finite and can be as small as two periods. Arguably, the assumption
that the number of periods is finite is a good description of many real-world situations.
Then what is the optimal mechanism in this setting? We show that the optimal con
tract involves backloaded payments and requires the agent to work in consecutive peri
ods. Proposition 1 demonstrates that the optimal mechanism backloads all payments to
the end. This strengthens the principal’s ability to incentivize the agent, enabling the prin
cipal to induce effort dynamics that would not be sustainable under other compensation
2

schemes. More importantly, Theorem 1 establishes that the optimal mechanism prescribes
that the agent to work consecutively once he begins. Specifically, the optimal contract
takes one of two forms: a consecutive-working menu or an always-working mechanism.
The consecutive-working menu allows the agent to choose the period in which to start
working, after which he is incentivized to work in all subsequent periods. In other words,
the agent uses this flexibility to delay the start of working if his costs are high in the early
periods.
In contrast, the always-working mechanism requires that the agent start working in the
first period and continue in all subsequent periods. Thus, the optimal mechanism either
grants the agent flexibility on when to start working or restricts the starting period to the
first. Theorem 2 identifies the conditions under which each mechanism is optimal, based
on the principal’s valuation of the agent’s work relative to monetary transfer. When such a
valuation is large, the always-working mechanism is optimal, whereas when it is small, the
consecutive-working menu is optimal.
To the best of our knowledge, this is the first paper to investigate the optimality of con
tracts with a consecutive work structure, even though this structure is commonly observed
in practice. For instance, ride share platforms like Uber and Lyft frequently offer bonuses
to drivers for completing a specified number of consecutive rides, with the bonus back
loaded and paid after the final trip. According to Uber’s policy: “Complete the required
number of trips without rejecting, unfulfilling a trip, or going offline between trips. Your
extra earnings are added to the last trip receipt.”1 More generally, the principal-agent model
this paper analyzes can also be applied to scenarios in which the principal seeks to incen
tivize the agent to take actions other than working, such as consuming products or services.
The reward structure this paper identifies is common in such settings as well. For example,
Starbucks offers a reward program that grants customers “stars” based on the number of
consecutive days they purchase coffee, with stars awarded at the end of the streak. Simi
larly, the gaming industry offers a reward scheme of this kind. For instance, Microsoft’s
Xbox rewards players for logging in and completing tasks over consecutive weeks, with
the rewards given at the end of the streak.
To understand the intuition behind the optimal mechanism, it is helpful to introduce a
key concept in dynamic mechanism design: a deposit can be a powerful tool for the princi
1See this website for the exact term and condition.
3

pal to discipline the agent. Consider the following example. Suppose the principal charges
the agent a $100 deposit on day 0 and promises to return it on day 2 if the agent follows the
work instructions on day 1. Assume the agent’s cost of working on day 1 is a draw from
the uniform distribution over [0, 10], and the work instruction requires the agent to work for
sure on day 1 in exchange for $5 compensation. A risk-neutral agent would agree to this
contract, as the expected payment equals the expected cost. However, if the agent’s realized
cost on day 1 turns out to be high (say, 10), he will still work because he fears losing the
deposit. In this way, the principal can achieve the first-best outcome—requiring the agent
to work for sure on day 1 while paying the agent only the expected cost. In contrast, when
a deposit is infeasible due to limited liability, the agent would work only if his cost is below
5, leading to the principal’s losing surplus and allowing the agent to earn an information
rent.
With deposits, the principal can achieve the first-best outcome in every period. This
result crucially hinges on the agent having “deep pockets” and is not viable with limited
liability. Nevertheless, we show that the principal can still discipline the agent using a
mechanism exploiting a similar logic. Specifically, the principal can backload all payments
to the end, which play the role of the deposit. These promised yet postponed payments
give the principal leverage over the agent: if the agent quits, he forfeits all these payments.
Each deferred payment can be repeatedly utilized in every subsequent period to discipline
the agent and extract surplus. Over time, as these postponed payments accumulate, the
principal’s ability to regulate the agent and extract more surplus grows, making the agent
increasingly reluctant to quit. This is the key intuition behind why the optimal mechanism
has a consecutive-working format.
The specific logic behind the consecutive-working feature of the optimal mechanism
is as follows: under a mild distributional condition, for any given history path, the opti
mal promised payment for initiating work is large enough to incentivize the agent to work
until the end, while allowing the principal to extract all surplus in periods after the agent
has started working. More specifically, in any period where the agent has not yet started,
the optimal mechanism employs a threshold rule: the agent with a current type below a
specified cutoff is asked to start working and continue until the end. The principal then
compensates the agent with the cutoff cost plus an information rent for the current period,
and the average cost for each future period. Under the distributional condition, when the
agent’s type is at or below the cutoff, he is not only willing to participate in the current pe
4

riod but also happy to follow the rule and work to the end for any future cost realizations.2
Proposition 8 in the Appendix characterizes the necessary and sufficient distributional con
dition. Assumption 1 in the main text offers a simpler sufficient condition: the expected
value of the cost must exceed the difference between the upper and lower bounds of the
cost distribution. A further sufficient condition is that the support of the cost distribution is
not too wide 3 Moreover, consecutive working not only allows the principal to extract full
surplus in all subsequent periods for any given history path, but it also does not interfere
with other history paths and, therefore, does not affect the principal’s expected payoff from
them (Proposition 4). Thus, it is optimal for the principal to assign consecutive working
across all history paths once the agent has started.
In summary, the optimal mechanism gives the agent flexibility in deciding when to start
working; however, once he begins, he is incentivized to work consecutively until the end.
Notably, the optimal contract distorts the timing of when the agent starts working but not
the decisions he makes after starting. Importantly, the optimal contract may induce the
agent to delay starting for a long period, despite the costs being i.i.d.. We characterize the
precise dynamics in section 4; they differ significantly from those in the absence of limited
liability, where the agent is induced to start working immediately.
In section 6, we explore an extension in which the principal is able to offer stochastic
mechanisms. We demonstrate in Proposition 6 that for every optimal deterministic mech
anism, there exists a stochastic improvement. The reason for this is that the principal
can optimally allocate the promised payments—determining her future leverage over the
agent—across different realizations of the recommended action, thereby facilitating better
regulation in various scenarios. That said, focusing on deterministic mechanisms remains
meaningful, as stochastic mechanisms may have credibility issues and can be difficult to
implement in practice. Nonetheless, the study of stochastic mechanisms is useful because
it shows that the main forces under deterministic mechanisms remain true and can be ex
ploited more flexibly and effectively under stochastic contracts.
This paper makes two main contributions. First, to the best of our knowledge, it is the
first work in the dynamic mechanism design literature that provides an explanation for the
2While the agent may incur a negative ex-post payoff and regret at the end, it is in his best interest to participate ex-ante and in every interim period. 3One might think the principal could benefit by allowing the agent to shirk in periods with very high costs after he has started, as a way to incentivize an earlier start. However, under the conditions we identify, the optimal contract doesn’t need to do so.
5

widely used practice of offering schemes that reward agents based on the number of con
secutive periods they work (or consume). Second, the analysis shows how to solve a novel
dynamic mechanism design problem with limited liability constraints and a continuum of
types. We believe this approach could prove useful in other problems with limited liability.
The rest of the paper is organized as follows. The next section discusses the related lit
erature. Section 3 introduces the model, while Section 4 sets up and simplifies the dynamic
optimization problem. Section 5 solves the optimization problem and presents the main
results. Finally, Section 6 explores possible extensions, and Section 7 concludes the paper.
All proofs are in the appendix.
2 Related Literature
This paper contributes to the large literature on revenue-maximizing dynamic mechanism
design (screening). See, for example, Baron and Besanko (1984), Besanko (1985), Courty
and Li (2000), Battaglini (2005), Es ̋o and Szentes (2007), Boleslavsky and Said (2012),
Pavan et al. (2014), Bergemann and V ̈alim ̈aki (2019). Similar to these studies, this paper
seeks to find the mechanmism that maximizes the principal’s expected payoff given the
agent’s time-evolving private information.
This paper differs from the existing literature in two key aspects. First, we consider
a setting in which the agent has limited liability so that the payments from the principal
must be nonnegative at all times. While this constraint is common in labor contracts, it has
not been studied in the dynamic mechanism design literature. Second, most of the existing
work assumes imperfectly correlated private information and focuses on how the persis
tence of private types influences the information rents the principal must pay to incentivize
the agent to reveal his type (as captured by the impulse function in Pavan et al. (2014))
and the corresponding optimal mechanisms. In contrast, the independence of costs in our
setting renders these questions trivial without the limited liability constraint. Specifically,
the agent’s current private information does not influence future information rents, which
allows the optimal contract to achieve the first-best outcome in every period. Instead, this
paper investigates how the principal should optimally incentivize the agent when payments
must be nonnegative in all periods.
More closely related to our work is the literature on dynamic screening whose models
6

include the constraint that the agent’s stage payoff must remain nonnegative at all times,
including Krishna et al. (2013), Krasikov and Lamba (2021), and Kra ̈hmer and Strausz
(2024). This nonnegativity constraint on the stage payoff is stricter than our nonnegative
payment constraint, since it requires the payment minus the cost to be nonnegative at all
times. In other words, their lower bound on payments is endogenous and strictly higher
than the one in this paper (which is zero). Thus, our paper occupies a middle ground be
tween these two strands of literature. In those papers, assuming nonnegative flow payoffs
is reasonable, since the agent’s task is to produce goods, and a cash-strapped agent may re
quire payments to cover production input costs. In contrast, our assumption of nonnegative
payments more accurately describes the labor market in which the agent can bear the cost
of working in each period and the principal can defer compensations but cannot demand a
deposit from the agent.
The central problem in the dynamic screening literature is how to incentivize the agent
to reveal his evolving private information over time, with the main focus traditionally
placed on the interim incentive compatibility (IC) constraints. . In contrast, significantly
less attention has been given to the interim individual rationality (IR) constraints, which
must be satisfied in all periods. This is because much of the literature assumes that the
agent has deep pockets and can afford to pay a substantial upfront deposit,4 which would
make it unprofitable for the agent to quit and forfeit the deposit mid-game. Under this as
sumption, the interim IR constraints are trivially satisfied, and the principal needs to enforce
only the ex-ante IR constraint. In contrast, in our setting, the limited liability constraint pre
vents the principal from requiring a deposit. As a result, the interim IR constraints play an
important role, and addressing these constraints for any given history introduces the main
technical difficulty. Efficient dynamic mechanisms, such as the dynamic pivot mechanism
in Bergemann and Va ̈lim ̈aki (2010), also account for interim IR constraints, but not for the
limited liability constraints that are central to our analysis.
From this perspective, our paper is also related to the literature on dynamic screening
with ex-post IR constraints. For instance, Kr ̈ahmer and Strausz (2015) considers the case in
which the consumer has withdrawal rights requiring that the seller ensure that the buyer’s
ex-post payoff be nonnegative. It finds that the static contract is optimal under certain con
ditions. Bergemann et al. (2020) further establishes necessary and sufficient conditions for
the optimality of static contracts for a single buyer with two types. Additionally, Mirrokni
4Also referred to as “posting a bond” in the literature.
7

et al. (2020) and Ashlagi et al. (2023) impose ex-post IR constraints in dynamic auction
and multiple-product selling contexts, respectively. In our setting, the interim IR constraints
play an important role, but the ex-post IR constraints may not be satisfied, since they are
not imposed as a requirement. It is reasonable for the ex-post IR constraint to be violated
in our context, since the agent in the labor market cannot return or withdraw the work they
have already completed, unlike the situation in goods markets.
Battaglini (2005) investigates the optimal contract in a setting of repeated bilateral
trade, where the buyer’s type follows a Markov process with two types. He finds that
as soon as the buyer’s type becomes high, the allocation becomes efficient. While this
finding may appear similar to our results, they are fundamentally different. When types
are independent and the agent possesses no private information at the outset, the result in
Battaglini (2005) indicates that the optimal contract achieves efficiency in all periods (see
also Baron and Besanko (1984) and Pavan et al. (2014)). In contrast, with limited liability,
the optimal contract may induce the agent to wait a very long time before he starts working,
which is inefficient. Furthermore, once the agent starts working, he continues until the end,
irrespective of the time at which he started and of his type when starting.5
This paper is also related to the literature on financial contracting with limited liability.
See, for example, Clementi and Hopenhayn (2006), DeMarzo and Sannikov (2006), and
Biais et al. (2007). The key difference is that these papers study dynamic moral hazard
problems while we study dynamic adverse selection problems. Board (2011) examines
the dynamic optimal contract for the holdup problem in a context in which the agent has
no private information. The optimal contract in this setting shares a similarity with that
in ours: the agent earns rent only in the first trade (or work), after which the allocation
becomes efficient.6
Backloading payments or rents is a common feature of the optimal contracts in this
paper as well as in the literature on dynamic screening with nonnegative stage payoffs,
dynamic moral hazard, and dynamic holdup. This practice arises from the assumptions
that the agent is risk-neutral and operates under limited liability.
5Our analysis also allows for a continuum of types, whereas Battaglini (2005) assumes only two types. Characterizing where the IR constraints bind is significantly more demanding with a continuum of types. 6Since the agent does not possess any private information, the rent in Board (2011) is not an information rent; rather, it is compensation provided to prevent the agent from holding up the principal.
8

Additionally, this paper relates to Halac et al. (2016), which studies dynamic contracts
in experimentation. Its setting involves both adverse selection and moral hazard, leading to
different results. Specifically, its optimal contract is a menu of stopping times, while ours
is a menu of starting times. The related literature on revenue management is discussed in
Gershkov and Moldovanu (2014). A key distinction between that work and this paper is
that the former focuses on the optimal allocation of fixed inventory to a dynamic population
(i.e., randomly arriving customers), whereas our setting involves a single fixed agent and
no inventory.
Finally, this paper connects to the literature on linking mechanisms, such as in Jack
son and Sonnenschein (2007), Frankel (2014, 2016), and Ball and Kattwinkel (2024). In
these studies, the optimal mechanism is a quota mechanism that links the agent’s actions
across periods: the agent has the flexibility to choose any action in each period, but the
total number of actions taken over all periods must satisfy specified quotas. In contrast,
our optimal mechanism features consecutive linking, where the agent has the flexibility to
choose the starting period, after which he is incentivized to work continuously to the end.
All these papers as well as ours demonstrate the advantages of dynamic mechanisms, even
in i.i.d. environments.7
3 Model
A principal (she) incentivizes an agent (he) to work. The principal benefits from the agent’s
work time while bearing the cost of paying him to work. We impose a limited liability
constraint, which requires that the payment from the principal must be nonnegative at all
times. The agent’s payoff is the total payment he receives minus the total cost of working.
The agent’s cost of working in each period is his private information, while his action of
working or shirking is publicly observable. The principal’s goal is to design a mechanism
to maximize her expected payoff, given this adverse selection problem with dynamically
disclosed private information and the limited liability constraint.
Let N be the total number of periods. Denote {1, · · · , N } as N . The agent’s cost
in each period, θ ̃t, is an independent and identically distributed (i.i.d.) random variable
7While these studies require either a large or infinite number of periods to apply the law of large numbers or achieve stationarity, our results highlight the benefits for any finite number of periods.
9

with continuous probability density function f and cumulative distribution function F .8
We assume that f (θ) > 0 for all θ ∈ Θ ≡ [θ, θ ̄]. We use a tilde to differentiate between
random variables and their realizations; for example, θt represents the realization of the
random variable θ ̃t. At the beginning of each period, θ ̃t is realized and it is the agent’s
private information. Let ht ≡ (θ1, θ2, · · · , θt) ∈ Θt denote the history of realized costs up
to period t.9 Let θ ≡ (θ ̃1, θ ̃2, · · · , θ ̃N ) denote the random vector of the agent’s complete
type profile. We use Eθθθ(·) for the expectation over θ and Et
θθθ(·) for the expectation over the
future costs (θ ̃t+1, θ ̃t+2, · · · , θ ̃N ) after ht is realized.
The principal commits to a mechanism at the beginning of the game. In each period, the
agent first observes his cost θt and then reports a message to the mechanism, which specifies
an action recommendation and a corresponding payment for that period. The agent then
takes a publically observable action. By the Revelation Principle, we restrict our attention
to direct mechanisms where the agent is truthful and obedient on the equilibrium path.10
Formally, a direct mechanism is a sequence of action and payment functions {xt, pt}N
t=1,
where xt : Θt → {0, 1} is the action rule in period t that maps ht to the binary action space,
with 1 and 0 representing work and shirk, respectively.11 The payment rule pt : Θt → R+
maps ht to a nonnegative payment transferred to the agent in period t.12 In the truthful and
obedient equilibrium of a direct mechanism, the agent’s expected payoff U is defined as
U = Eθθθ
"N X
t=1
pt − θ ̃t · xt
#
.
8We assume i.i.d. costs for technical simplicity. Meanwhile, the result under this assumption carries some meaningful information. If the agent’s costs were persistent, consecutive working benefits the principal would be more obvious, as a low cost today implies a higher chance of a low cost tomorrow. Nonetheless, we show that even with independent costs, the optimal mechanism still features consecutive working. 9h0 denotes ∅. 10In equilibrium, the agent truthfully reports his type and follows the-
 action recommendation. For obedience, we assume that the principal will end the game if the agent doesn’t follow the recommendation. 11In section 6, we consider the case where the action space is [0, 1], and xt represents the probability of working. 12Both the action rule and the payment rule do not depend on the agent’s historical actions for the following reasons. First, the obedience constraints ensure that the agent will follow the prescribed action in each period. Second, the past actions do-
 not affect the agent’s future type realizations. Thus, even if we formulate the mechanism as a function of the agent’s historical actions, the past actions should be functions of the historical types themselves.
10

The principal’s expected payoff V is defined as
V = Eθθθ
"N X
t=1
α · xt − pt
#
.
We assume α ≥ θ ̄, making work always efficient.13 The principal’s objective is to max
imize her expected payoff over feasible mechanisms that ensure the agent participates,
truthfully reports his costs and follows the action recommendations in each period, without
making any payments to the principal.
4 Dynamic Optimization
4.1 Set up
In our setting, a mechanism {xt, pt}N
t=1 is implementable if it satisfies periodic incentive
compatibility (IC-t), individual rationality (IR-t), obedience and limited liability (LL-t)
constraints. Since we assume that the principal will end the game if the agent doesn’t
follow the recommendation, obedience is implied by the participation constraint. Let
ut(ht−1, θt, θˆt) denote the agent’s expected payoff calculated in period t, assuming truthful
future reports and given the past reports ht−1, current cost realization θt and current report
θˆt, i.e.,
ut(ht−1, θt, θˆt) ≡ pt(ht−1, θˆt) − θt · xt(ht−1, θˆt)+
Et
θθθ
"N X
i=t+1
pi(ht−1, θˆt, {θ ̃k}i
k=t+1) − θ ̃i · xi(ht−1, θˆt, {θ ̃k}i
k=t+1)
#
.
To simpily notation, we use ut(ht−1, θt) to denote ut(ht−1, θt, θt). Definition 1 formalizes
the implementability conditions.
Definition 1. A mechanism {xt, pt}N
t=1 is implementable if the following conditions hold:
θt ∈ arg max
θˆt∈Θ
ut(ht−1, θt, θˆt) (IC-t)
ut(ht−1, θt) ≥ 0 (IR-t)
13This is similar to the assumption in the classic monopoly seller model, where the seller’s cost is assumed to be lower than the buyer’s valuation, making trade always efficient.
11

pt(ht−1, θt) ≥ 0 (LL-t)
for all t, θt ∈ Θ and ht−1 ∈ Θt−1.
The dynamic mechanism design literature typically requires the agent to be on-path
truthful, meaning it is optimal for the agent to report truthfully given truthful past reports.
In our i.i.d. type setting, on-path truthfulness implies off-path truthfulness, indicating that
it remains optimal for the agent to be truthful even if he has lied in the past. As discussed in
Pavan et al. (2014), this is because the agent’s expected payoff in any period t depends only
on his current true type and past reports, but not on his past true types. Consequently, we
can impose a stronger IC constraint that requires the agent to be truthful across all histories.
In the literature without limited liability, the principal can require the agent to post a
sufficiently large bond in the initial period, making it unprofitable for the agent to quit and
forfeit the bond mid-game. Consequently, the mechanism designer only needs to ensure the
IR constraint is satisfied in period 114. However, in our setting, limited liability prevents
the principal from charging the agent a deposit. Therefore, the principal must ensure that
the agent will not quit in any period by making the periodic IR constraints (IR-t) hold for
all t.
The principal’s optimization problem can be written as finding implementable action
and payment rules {xt, pt}N
t=1 that maximize the principal’s payoff V subject to the IC-t,
IR-t, and LL-t constraints for all t. Formally, the principal’s problem can be written as the
following:
max
{xt,pt}N
t=1
Eθθθ
"N X
t=1
α · xt − pt
#
s.t. IC-t, IR-t, LL-t ∀ t.
Proposition 1. It is without loss of generality to pay the agent only at the very end, i.e.
pt = 0 for all t < N .
Proposition 1 states that paying the agent only at the very end is without loss of gen
erality. This is because, for any implementable mechanism that pays the agent in interim
periods, the principal can backload all payments to the last period while maintaining the
mechanism’s implementability. This can be demonstrated as follows: First, backloading
does not change the agent’s incentive to be truthful in each period. The total current and
14Or in period 0 before the realization of any private information, depending on the timing of the contract.
12

expected future payments for each report remain the same; they are merely postponed. Al
though the agent’s expected payoff in each period increases due to accumulated delayed
payments from the past, this does not impact the agent’s current incentive as it depends
only on past reports. Therefore, the expected payoff difference between truth-telling and
lying remains the same. Second, backloading the payments makes the agent’s participation
constraints easier to satisfy. When the agent chooses to participate or quit the mechanism
in each period, while quitting always yields a zero payoff, the expected payoff from partic
ipating increases due to the payments that would have been made in previous periods being
deferred to the end period.
Given that the agent’s payoff is quasi-linear, it is a standard result in the dynamic mech
anism design literature that backloading payments is without loss of generality. However,
the presence of limtied liability constraint makes it not just a convenient setup but a nec
essary feature of the optimal mechanism. As discussed in Section 5, a key aspect of our
optimal mechanism is that it progressively strengthens the principal’s ability to discipline
the agent as time passes and the accrued payment increases. This accumulated payment
provides the principal with leverage: if the agent quits, they forfeit all promised payments.
Consequently, delaying payments allows the principal to extract surplus from the agent
more effectively. This necessity of backloading payments is also observed in other dynamic
screening models with nonnegative stage payoff constraints, such as Krishna et al. (2013),
Ashlagi et al. (2023), and Kra ̈hmer and Strausz (2024), as well as in dynamic moral hazard
models with limited liability constraints, for example, Clementi and Hopenhayn (2006),
DeMarzo and Sannikov (2006), and Biais et al. (2007).
Proposition 1 allows us to simplify the principal’s optimization problem by focusing on
pay-at-the-end mechanisms, denoted as ({xt}N
t=1, pN ), where pN : ΘN → R+. Then, the
expression for ut(ht−1, θt) becomes:
ut(ht−1, θt) = −θt·xt(ht−1, θt)+Et
θθθ
"
pN (ht−1, θt, {θ ̃k}N
k=t+1) −
N
X
i=t+1
θ ̃i · xi(ht−1, θt, {θ ̃k}i
k=t+1)
#
.
Note that, in the pay-at-the-end mechanism, the limited liability constraints for t < N are
automatically satisfied by construction. Additionally, the IR constraint in the last period
13

(IR-N) implies the limited liability constraint for t = N . Specifically,
pN (hN−1, θN ) − θN · xN (hN−1, θN ) ≥ 0 (IR-N)
⇒ pN (hN−1, θN ) ≥ θN · xN (hN−1, θN ) ≥ 0. (LL-N)
Therefore, we can omit all the limited liability constraints, simplifying the principal’s opti
mization problem to the following:
max
{xt}N
t=1 ,pN
Eθθθ
"N X
t=1
α · xt − pN
#
s.t. IC-t, IR-t ∀ t.
4.2 Optimization over thresholds
Next, we will demonstrate that the principal’s problem is equivalent to optimizing over
threshold action rules. First, we will use Lemma 1 to show that incentive-compatible ac
tion rules must be threshold rules. Then, we will apply Proposition 2 to illustrate that,
as in the static screening model, the payment rule pN can be determined by the action
rules. These two results allow us to reformulate the principal’s problem as an optimization
over threshold rules, thereby reducing the dimensionality of the optimization problem from
functional spaces to real spaces.
Lemma 1. A mechanism is incentive-compatible if and only if, for all t and ht−1,
(i) xt(ht−1, θt) is non-increasing in θt.
(ii) ut(ht−1, θt) = ut(ht−1, θ ̄) + R θ ̄
θt xt(ht−1, θt)dθt.
Corollary 1. xt(ht−1, θt) is a threshold rule: xt(ht−1, θt) = 1 when θt ≤ ct(ht−1), and
xt(ht−1, θt) = 0 when θt > ct(ht−1).
Lemma 1 characterizes the necessary and sufficient conditions for a mechanism to be
incentive-compatible. When t and ht−1 are fixed, xt(ht−1, θ1) can be viewed as a function
of θt only. In this scenario, the conditions for a mechanism to be incentive-compatible are
14

the same as in the static screening model. The first condition requires that the action rule xt
is non-increasing in the period t cost θt. This is intuitive, as the agent’s payoff satisfies the
single-crossing property. Combining this with the fact that the action space is discrete, i.e.
{0, 1}, we derive Corollary 1, which states that the action rules must be threshold rules. We
use ct(ht−1) to denote the threshold in period t given history ht−1. The second condition
states that the agent’s period t expected payoff ut is pinned down by the action rule xt and
the expected utility of the highest type θ ̄, i.e. ut(ht−1, θ ̄). This is a standard result derived
from the envelope theorem in Milgrom and Segal (2002).
Lemma 2. (Payoff Equivalence) For any incentive compatible action rules {xt}N
t=1, ut
is a function of {xt}N
t=1 and u1(θ ̄). Denote uˆt(ht) = R θ ̄
θ1 x1(θ1)dθ1 + Pt−1
i=1 xi(hi)θi +
Pt
i=2
R θ ̄
θi xi(hi−1, θi)dθi − R θ ̄
θ F (θi)xi(hi−1, θi)dθi . Then the following hold for any t
and ht:
ut(ht) = u1(θ ̄) + uˆt(ht).
Lemma 2 shows that the agent’s expected utility in each period t, ut, is pinned down
by the action rules up to that period, {xi}t
i=1, and the expected utility of the highest type
in the first period, u1(θ ̄). We decompose the agent’s expected utility into two components:
ut = uˆt + u1(θ ̄), where uˆt is a function of the action rules. In Lemma 1, we show that
ut is determined by xt and ut(ht−1, θ ̄), where ut(ht−1, θ ̄) may vary for each t and ht−1.
However, in Lemma 2, we use a single, unique u1(θ ̄). This is because each ut(ht−1, θ ̄) is
also a function of the action rules and u1(θ ̄). To illustrate this, consider the case when t = 2
and the realized cost in the first period is θ1. Then we have,
u2(θ1, θ2) = u2(θ1, θ ̄) +
Z θ ̄
θ2
x2(θ1, θ2)dθ2.
Meanwhile, from the agent’s perspective in period 1, after the realization of θ1 and before
the realization of θ2, his expected utility u1(θ1) equals the expectation of the expected
15

payoff in period 2 minus the cost of working in period 1, i.e.
u1(θ1) = Eθ ̃2
h
u2(θ1, θ ̃2)
i
− θ1 · x1(θ1)
=
Z θ ̄
θ
u2(θ1, θ ̄) +
Z θ ̄
θ ̃2
x2(θ1, θ2)dθ2
!
dF (θ2) − θ1 · x1(θ1)
= u2(θ1, θ ̄) +
Z θ ̄
θ
F (θ2)x2(θ1, θ2)dθ2 − θ1 · x1(θ1).
Combining this with the fact that u1(θ1) = u1(θ ̄) + R θ ̄
θ1 x1(θ1)dθ1, we can express u2(θ1, θ ̄)
as a function of the action rules and u1(θ ̄). Similarly, u3(h2, θ ̄) is a function of the action
rules and u2(h1, θ ̄), which itself is a function of the action rules and u1(θ ̄). This pattern
continues, allowing us to express ut(ht−1, θ ̄) as a function of the action rules and u1(θ ̄) for
all t and ht−1.
Lemma 3. For an incentive-compatible mechanism to be implementable, u1(θ ̄) must sat
isfy:
u1(θ ̄) + uˆt(ht) ≥ 0
for all t and ht. In the optimal mechanism, the following holds:
u∗
1(θ ̄) = inf{u1(θ ̄) : u1(θ ̄) + uˆt(ht−1, θ ̄) ≥ 0, ∀ ht−1 ∈ Θt−1, t ≤ N − 1}.
Lemma 3 characterizes the optimal choice of u1(θ ̄) as the smallest value that ensures the
mechanism is implementable. Unlike in the static screening model or dynamic screening
model without limited liability (see Pavan et al. (2014)), where the principal can set u(θ ̄)
to the lowest possible value of 0, in our setting, the principal must choose u1(θ ̄) to guar
antee the periodic IR constraints hold everywhere. Lemma 2 shows that ut = u1(θ ̄) + uˆt.
Therefore, the smallest u1(θ ̄) that ensures the mechanism is implementable is the infimum
of u1(θ ̄) such that u1(θ ̄) + uˆt(ht) ≥ 0 for all t and ht. Any value smaller than this would
violate some periodic IR constraint, rendering the mechanism not implementable. Con
versely, any value larger than this would be suboptimal for the principal, as it would reduce
the mechanism’s profitability.
16

Proposition 2. (Revenue Equivalence) For any incentive-compatible action rules {xt}N
t=1,
the payment rule pN that makes the mechanism implementable and maximizes the princi
pal’s expected payoff is pinned down by the action rules as follows:
p(hN ) =
Z θ ̄
θ
F (θ1)x1(θ1)dθ1+
N
X
i=1
xi(hi)θi +
Z θ ̄
θi
xi(hi−1, θi)dθi −
Z θ ̄
θ
F (θi)xi(hi−1, θi)dθi
!
+u∗
1(θ ̄).
Where u∗
1(θ ̄) is also determined by the action rules: u∗
1(θ ̄) = inf{u1(θ ̄) : u1(θ ̄)+uˆt(ht−1, θ ̄) ≥
0, ∀ ht−1 ∈ Θt−1, t ≤ N − 1}.
Proposition 2 provides the formula by which the payment rule pN is determined by the
action rules. In Lemma 3, we give the optimal choice of u1(θ ̄), based on which the agent’s
expected utility in the last period can be expressed as:
uN (hN ) = uˆN (hN ) + u∗
1(θ ̄).
Combining this with the fact that uN also equals the final payment pN minus the cost of
working in the last period, i.e. uN (hN ) = pN (hN ) − θN · xN (hN ), we can formulate pN as
a function of the action rules and u∗
1(θ ̄), which itself is determined by the action rules.
The logic behind the lemmas and the proposition in this section is as follows. Lemma
2 and 3 serve as intermediate steps to establish Proposition 2. Specifically, we use Lemma
2 to show that the agent’s expected payoff in each period is pinned down by the action
rules and by the expected payoff of the highest type in the first period, u1(θ ̄). Lemma 3
then characterizes the optimal choice of u1(θ ̄), ensuring the mechanism is implementable
and maximizes the principal’s expected payoff. Finally, Proposition 2 provides the formula
by which the payment rule pN is determined by the action rules and the optimally chosen
u∗
1(θ ̄), which also depends on the action rules.
So far, we have shown that the principal’s optimization problem can be formulated as
an optimization over action rules which are threshold rules. This simplifies the original
problem from an optimization over functional spaces to an optimization over real spaces.
However, the challenge remains that there are uncountably many histories given the con
tinuous type space. In the next section, we will address this by showing that the agent’s
working status history is a sufficient statistic for the cost history, thereby reducing the di
mensionality of the principal’s optimization problem.
17

4.3 Reduce dimensionality
To make the principal’s optimization problem more tractable, Proposition 3 demonstrates
that the agent’s working status history serves as a sufficient statistic for the cost history in
determining the future thresholds. This reduction in dimensionality shifts the optimiza
tion problem from addressing uncountably many thresholds to optimizing over finitely
many thresholds. Let wt denote the working status history up to period t, i.e. wt ≡
(x1, x2, · · · , xt) ∈ {0, 1}t. We will show that the threshold ct depends on ht−1 only through
wt−1.
Proposition 3. For any implementable mechanism, the working status history wt is a suf
ficient statistic for the cost history ht in determining the future thresholds. This means that
the thresholds ct(ht−1) can be written as ct(wt−1).
The intuition behind this proposition is as follows. First, the principal’s payoff from
each period is additively separable. Second, since costs are i.i.d., historical costs do not
provide any information about future costs. Because of these two reasons, one might think
that the future threshold selection is independent of past costs. However, there is one (and
only one) link between them: the accumulated promised yet postponed payment that the
principal owes the agent for working in the past.15 It affects the future threshold selection
as it provides the principal with negotiation power to discipline the agent. Since the accu
mulated due payments depend only on the working status history given the cutoff rules, it
suffices to condition the future thresholds on the working status history only.16
Technically speaking, future thresholds interact with past cost history through u∗
1(θ ̄),
which is the smallest u1(θ ̄) that makes all the periodic IR constraints hold. Specifically,
past cost history determines the accumulated promised payment, which in turn determines
the range of future thresholds that satisfy the IR constraints. The future thresholds after the
same working status history appear symmetrically in the objective function, implying that
their optimal values should be the same.
Another angle to consider this result is: given i.i.d. costs, the only reason the principal
would want to differentiate future thresholds given the same working status history is to
15This is the part of the final payment that depends on past cost realizations and past working status. 16If the action rules were not threshold rules, such as if the action space were continuous, xt would still be a sufficient summary statistic of θt, although it might not simplify the problem as much if xt took continuous values.
18

provide incentives for truth-telling in the past. However, this will not happen as the same
promised payment for working adequately addresses the information rent needed for truth
telling. Thus, the principal does not need to use different continuation payoffs to provide
incentives for truth-telling in the past.
Proposition 3 reduces the number of thresholds to a finite number. Specifically, it
now equals the number of possible working status histories, which is 2t for wt. There
fore, we only need to optimize over 20 + 21 + · · · + 2N−1 = 2N − 1 thresholds. For
instance, if there are three periods, then we only need to optimally choose seven thresh
olds: c1, c2(1), c2(0), c3(1, 1), c3(1, 0), c3(0, 1), c3(0, 0) over the space Θ7. Let 1n denote
the row vector of n ones. The principal’s optimization problem can then be rewritten as
follows:
max
{ct (wt−1 )}N
t=1
Eθθθ [α · wN 1⊺
N − pN (wN )] .
Alternatively, we can treat wN as a random variable taking values from {0, 1}N with the
following probability mass function:
P r(wN ) =
N
Y
t=1
xt · F (ct(wt−1)) + (1 − xt) 1 − F (ct(wt−1)) ,
Then, the principal’s optimization problem can be expressed as:
max
{ct (wt−1 )}N
t=1
X
wN ∈{0,1}N
P r(wN ) · (α · wN 1⊺
N − pN (wN ))
= max
{ct (wt−1 )}N
t=1
EwN [α · wN 1⊺
N − pN (wN )] .
According to Proposition 2, under threshold rules, the payment rule pN (wN ) becomes:
pN (wN ) =
N
X
t=1
xt · ct(wt−1) −
N
X
t=2
Z ct(wt−1)
θ
F (θt)dθt + u∗
1(θ ̄). (1)
u∗
1(θ ̄) is the smallest value that satisfies all the IR constraints. Proposition 3 also reduces the
number of IR constraints to a finite number, transforming u∗
1(θ ̄) from an infimum function
19

to a minimum function:
u∗
1(θ ̄) = − inf
ht−1 ∈Θt−1 ,t∈N
uˆt(ht−1, θ ̄)
= − min
wt−1∈{0,1}t−1,t∈N
t−1
X
i=1
xi · ci(wi−1) −
t
X
i=2
Z ci(wi−1)
θ
F (θi)dθi
!
.
Therefore, the principal’s optimization problem becomes:
max
{ct (wt−1 )}N
t=1
EwN
"
α · wN 1⊺
N−
N
X
t=1
xt · ct(wt−1) +
N
X
t=2
Z ct(wt−1)
θ
F (θt)dθt + u∗
1(θ ̄)
#
. (2)
The incentive compatibility constraints are automatically satisfied by the threshold rules
and the formulation of the payment rule p(wN ) as stated in Proposition 2. In addition, the
periodic participation constraints are satisfied by the selection of u∗
1(θ ̄). Therefore, we can
now omit these constraints from the optimization problem.
Proposition 3 reduces the dimensionality of the thresholds and transforms u∗
1(θ ̄) from
an infimum function to a minimum function. However, the optimization problem remains
challenging due to the inclusion of the minimum function in the objective, turning it into a
nested optimization problem. We will address this problem in the following section.
4.4 Simplifying the optimization problem
To tackle the nested optimization problem in (2), we will first solve the inner minization
problem to find u∗
1(θ ̄). Specifically, we show that one of the IR constraints must be bind
ing and can therefore determine the value of u∗
1(θ ̄). Additionally, we add constraints to
ensure that other IR constraints are also satisfied. Consequently, we reformulate the nested
optimization problem as a standard optimization problem with constraints.
Lemma 4 identifies a property of the optimal mechanism that facilitates the setup of
Proposition 4 and serves as the foundation for the main result in section 5. Specifically,
Lemma 4 states that the optimal mechanism either prescribes the agent to work in every
period or sets the thresholds for starting to work, given that the agent has not worked
before, as interior points. In other words, in the second case, the optimal mechanism does
not let the agent work or shirk for sure if he has not engaged in work yet. Let 0n denote
the row vector of n zeros. Then, c1, c2(0), c3(02), · · · , cN (0N−1) represent the thresholds
20

for working in periods 1 through N , given that the agent has consistently shirked. For
simplicity, we denote ct(0t−1) as ct(0). Let c∗
t represent the thresholds under the optimal
mechanism. This property is formally stated as follows:
Lemma 4. For α ≥ θ ̄, there are only two possibilities for the optimal rules: either the
optimal action rule is to assign the agent to work in every period, or the optimal thresholds
satisfy c∗
t (0) ∈ (θ, θ ̄) for all t ∈ N .
Lemma 4 presents two key pieces of information. Firstly, it states that if the princi
pal intends for the agent to work for all cost realizations in some period t, provided the
agent has not worked previously, she should choose the first period. This is because the
principal’s expected payoff from setting ct(0) to θ ̄ decreases over time. Once the agent
starts working for all cost realizations, the principal can achieve a “relative” first best in all
subsequent periods by asking him to work for sure and paying the average cost. 17 Thus,
asking the agent to start working for all cost realizations in an earlier period provides the
principal with more periods to extract surplus from the agent. For the same reason, if the
principal asks the agent to work for sure in the first period, she should also ask him to keep
working in every future period.
Secondly, Lemma 4 also indicates that c∗
t (0) are strictly above θ for all t. This is
primarily because working is efficient when the cost is very small, say close to θ, given that
α > θ. If any threshold equals θ, implying that the agent always shirks in that period, then
the principal can be strictly better off by inducing the agent to work at least a little in that
period, regardless of whether this changes u∗
1(θ ̄).
Proposition 4. When c∗
t (0) ∈ (θ, θ ̄) for all t ∈ N , the principal’s optimization problem is
equivalent to the following constrained optimization problem:
max
{ct (wt−1 )}N
t=1
EwN
"
α·
N
X
t=1
xt −
N
X
t=1
xt · ct(wt−1) +
N
X
t=2
Z ct(wt−1)
θ
F (θt)dθt −
N
X
t=2
Z ct(0)
θ
F (θt)dθt
#
s.t.
t−1
X
i=1
xi · ci(wi−1) −
t
X
i=2
Z ci(wi−1)
θ
F (θi)dθi ≥ −
N
X
t=2
Z ct(0)
θ
F (θt)dθt, ∀ t ∈ N , wt ∈ {0, 1}t.
(3)
17The term “relative” is used here because the principal achieves the first best relative to the previous mechanism. Specifically. the principal still has to pay the agent an additional u1∗(θ ̄) amount, but conditional on this payment remaining the same, she can be seen as achieving the first best in every future period.
21

In Proposition 4, we discuss the case where the principal does not choose to ask the
agent to work in every period. In this scenario, we demonstrate that the IR constraint for
the work history of shirking in all N periods, i.e., wN = 0N , must be binding. Otherwise,
we show that the principal could be strictly better off by increasing the threshold cN (0N−1)
while maintaining all the IR constraints. Thus, the following relationship must always hold:
u∗
1(θ ̄) + uˆN (0N ) = 0. (IR constraint for wN = 0N )
This implies that u∗
1(θ ̄) = −uˆN (0N ) = PN
t=2
R ct(0)
θ F (θt)dθt. 18 This relationship allows
us to replace the minimum function in the objective function with − PN
t=2
R ct(0)
θ F (θt)dθt.
Although we still need to add constraints to ensure that all other terms in the minimum
function are no smaller than this, i.e. the IR constraints for other work histories should also
hold.
5 Main Results
5.1 Properties of the optimal mechanism
We have identified in Lemma 4 that the optimal mechanism either assigns the agent to work
for sure in every period or sets c∗
t (0) as interior points. To determine the optimal mechanism
when c∗
t (0) are all interior, we solve the relaxed optimization problem in Theorem 1 by
disregarding the constraints in (3). We then verify that the solution satisfies all constraints
under appropriate Assumption.
First, the relaxed solution features consecutive working: once the agent starts working,
the relaxed optimal action rule prescribes him to work for sure in every future period, i.e.,
ct(wt−1) = θ ̄ for all wt−1 ̸= 0t−1 and wt−1 ̸= ∅. This is because the choice of these
thresholds does not affect the principal’s expected payoff from other work histories, as
these thresholds do not appear in u∗
1(θ ̄). Since work is always efficient when α > θ ̄, the
relaxed optimal choices of these thresholds should be θ ̄.
Second, for the relaxed solution to be feasible, we need to ensure that the IR constraints
for all work histories are satisfied. We can separate the IR constraints into two parts: those
18Lemma 4 ensures that when the principal does not assign the agent to work in every period, ct(0) exists for all t as the working status history 0t is on-path for all t.
22

for consistent shirking histories, where wt = 0t for all t ∈ N , and those for other work
histories. In the first category, the work history that generates the lowest agent’s expected
payoff is wN = 0N .19 The IR constraint for this work history is automatically satisfied by
construction, as we set u∗
1(θ ̄) such that the IR constraint for work history 0N binds. In the
second category, the IR constraints that are relatively harder to satisfy are those for work
histories corresponding to the second period that the agent works, i.e., (0t, 12). This is
because these are the first periods in which the agent works for all cost realizations. If the
agent is willing to participate even with cost θ ̄ here, then he will be willing to work for sure
in any future periods, as the final payment is fixed while the cost of working in past periods
is considered sunk costs. In other words, if the IR constraint for work history (0t, 12) holds,
then the IR constraints for work histories (0t, 1m) will hold for all m > 2.20
Let us illustrate the relationship of the IR constraints using Figure 1. It displays all pos
sible work histories as a tree structure, with each branch representing the agent’s assigned
action in each period given the work history and current cost realization. Note that we only
need to ensure the IR constraint holds for the highest point on each branch, as the agent’s
expected payoff is minimized when the current cost equals θ ̄, given any fixed work his
tory.21 The first category of consistent shirking histories comprises the branches above the
blue box; they are satisfied as the IR constraint for work history 0N binds. All the remain
ing branches belong to the second category, among which the IR constraints for histories
in the blue box are the most challenging to satisfy. This is because the IR constraint for
each branch in the blue box implies the IR constraints for all the branches to the right of it.
Therefore, the feasibility of the relaxed solution hinges on whether the IR constraints for
the work histories in the blue box hold.
The IR constraints for work histories in the blue box, i.e., (0t, 12), are the following:
ct+1(0) +
N
X
i=t+2
Z ci(0)
θ
F (θi)dθi + E(θ) − θ ̄ ≥ 0.
19One can verify that ut(0t) decreases in t. The intuition is that the agent has fewer periods to start working and obtain information rents as time passes. 20The IR constraint for work history (0t, 11) is implied by the IR constraint for work history 0t+1, as the agent needs to receive information rents to start working compared to shirking in period t + 1. Thus, these IR constraints hold given that the IR constraints in the first category are satisfied. 21For this reason, when we refer to the IR-
 constraint for a certain branch, we mean the IR constraint for the highest point on this branch, i.e., when the last cost realization is θ ̄.
23

Period 1
θ
θ
shirk
work
c1
2
s
w
c2(0)
c2(1)
w
···
...
···
···
N −1
s
w
cN −1 (0)
N
s
w
cN (0)
w
cN (0N−2, 1)
...
w
cN (1)
Figure 1: Work histories and relevant IR constraints
For all 0 ≤ t ≤ N − 2. Therefore, to ensure all these IR constraints hold, we only need to
guarantee that
mtin ct+1(0) +
N
X
i=t+2
Z ci(0)
θ
F (θi)dθi
!
+ E(θ) − θ ̄ ≥ 0.
When all ct(0) are interior points of the support, we have:
mtin ct+1(0) +
N
X
i=t+2
Z ci(0)
θ
F (θi)dθi
!
≥ mtin ct+1(0) > θ.
Assumption 1. θ + E(θ) ≥ θ ̄.
Thus, a straightforward and simple sufficient condition for the feasibility of the relaxed
solution is provided by Assumption 1. Note that this condition is not necessary for all IR
constraints to hold. So, the conclusion in the following theorem (Theorem 1) may still hold
even if Assumption 1 is violated. Finding the necessary and sufficient condition requires
solving a system of equations that might not have analytical solutions. However, for any
24

given distribution, one can always solve this system numerically to determine the necessary
and sufficient condition. In the appendix, we provide the necessary and sufficient condition
for the feasibility of the relaxed solution in Proposition 8.
Assumption 1 is mild and satisfied by many distributions. For example, a stronger
version of Assumption 1 is that θ ≥ θ ̄
2 , which implies that the costs are not excessively
heterogeneous—the lower bound of the support is at least half of the upper bound. This
condition merely requires a relatively narrow range of cost variation, simplifying the veri
fication process.
When the solution to the relaxed optimization problem is feasible and c1 ̸= θ ̄, we refer
to this optimal mechanism as a consecutive-working menu. Essentially, this mechanism
allows for the possibility, with positive probability, that the agent may start working in any
period t ∈ N . Once the agent begins working, he is prescribed to continue working for
all cost realizations in every subsequent period until the end. Definition 2 formalizes the
action rules and the corresponding payment rule for a consecutive-working menu.
Definition 2. A consecutive-working menu is a mechanism whose action rules have the
following properties:
(i) ct(0) ∈ (θ, θ ̄) for all t ∈ N (possible to start working in any period).
(ii) ct(wt−1) = θ ̄ for all wt−1 ∈/ {0t−1, ∅} (consecutive working).
The final payment rule for work history (0t, 1N−t) is:
pN = ct+1(0) + (N − t − 1)E(θ) +
N
X
i=t+2
Z ci(0)
θ
F (θi)dθi
for all t < N − 1, pN = cN (0) for t = N − 1, and pN = 0 for t = N .
If the solution to the relaxed optimization problem results in c1 = θ ̄, then the opti
mal mechanism degenerates to an always-working mechanism.22 In this case, the agent
is required to work for sure in every period from the beginning to the end. Definition
3 formalizes the action rules and the corresponding payment rule for an always-working
mechanism.
22In this scenario, ct(0) do not exist as they are off-path. Here, u1∗(θ ̄) can equal to its lowest possible value, 0. It is then straightforward to verify that the solution to the relaxed problem is feasible.
25

Definition 3. An always-working mechanism prescribes the agent to work in each period t
for all possible realizations of θt and for all t ∈ N . The final payment is pN = θ ̄ + (N −
1) · E(θ)
Theorem 1. Under Assumption 1, the optimal mechanism is either a consecutive-working
menu or an always-working mechanism.
Theorem 1 summarizes the properties of the optimal mechanism. The always-working
mechanism can be viewed as a special case of the consecutive-working menu, where the
agent can only start working in the first period. The theorem shows that this is the only
degenerate case of the consecutive-working menu that can be optimal. In other words, the
optimal mechanism either allows the agent to start working in any of the N periods or
restricts the starting period to the first period only.
Both possibilities of the optimal mechanism share the feature that once the agent begins
working, he must continue to work consecutively until the end. The intuition behind this is
that, under Assumption 1, the principal can achieve a “relative” first best by assigning the
agent to work for sure and paying him only the average cost in each subsequent period once
he starts working.23 This is feasible because the payment promised to the agent for starting
work, along with the corresponding u∗
1(θ ̄), is large enough to incentivize the agent to work
for sure in the period following the one he starts working. This amount is backloaded to
the end, serving to discipline the agent to follow the prescribed action rules; failure to do
so would result in the loss of this amount. This leverage can be utilized repeatedly in every
subsequent period to extract all of the agent’s surplus in these periods. In fact, the promised
payment grows over time as the agent continues to work, enhancing the principal’s ability
to regulate the agent and increasing the agent’s willingness to work in later periods.
From a technical perspective, if we ignore u∗
1(θ), then the part of the payment dependent
on ct(wt−1) can be interpreted as the payment promised for working in period t given the
work history wt−1. This payment equals the expected cost of working in that period: under
a threshold ct, the agent’s expected cost of working in period t is F (ct)ct − R ct
θ f (θ)dθ,
which exactly matches the part of payment dependent on ct besides u∗
1(θ). Therefore, if
we can set ct to θ ̄ without affecting u∗
1(θ), it can be interpreted as achieving the first best in
that period, given that α > θ ̄. Assumption 1 guarantees that assigning the agent to work for
23The term “relative” highlights that the principal must still pay the agent an additional u1∗(θ ̄).
26

sure in the period following the one he starts working won’t affect u∗
1(θ), so assigning him
to work for sure in subsequent periods won’t affect u∗
1(θ) either. Thus, the principal can be
seen as achieving the first best in these periods.
5.2 Characterizing the optimal mechanism
We have identified two possible forms of the optimal mechanism, yet their existence and
the conditions determining which one is optimal remain unknown. In this section, we
first establish the existence of the optimal mechanism and the properties of the principal’s
expected payoff under the optimal mechanism in Proposition 5. We then demonstrate in
Theorem 2 that, under Assumption 2, there exist a threshold for α. Above this threshold,
the optimal mechanism is the always-working mechanism, while below it, the optimal
mechanism is a consecutive-working menu.
Proposition 5. The optimal mechanism exists. V ∗ is increasing and continuous with re
spect to α, and it is differentiable almost everywhere.
In Proposition 5, we first demonstrate the existence of the optimal mechanism. Let
V ∗(α) denote the principal’s expected payoff under the optimal mechanism. We then es
tablish that V ∗ is increasing and continuous with respect to α. This property facilitates the
analysis in Theorem 2.
Assumption 2. f (θ) is continuous, F (θ)
f(θ) + θ is increasing, and f (θ ̄) ≤ 1
(N −1)[θ ̄−E(θ)] .
Theorem 2. Under Assumption 2, there exists αˆ > θ ̄ such that: the optimal mechanism is
a consecutive-working menu when θ ̄ ≤ α < αˆ, and the optimal mechanism is an always
working mechanism when α ≥ αˆ.
Let us illustrate the form of the optimal mechanism using Figure 2. Consider a restricted
optimal mechanism that maximizes the principal’s expected payoff among all mechanisms
that do not require the agent to work for sure in every period (i.e., at least one on-path
threshold ci does not equal θ ̄). We refer to this as the optimal non-always-working mech
anism. The optimal mechanism is either the optimal non-always-working mechanism
or the always-working mechanism. Let V naw, V aw, V cm denote the principal’s expected
27

payoff under the optimal non-always-working mechanism, the always-working mecha
nism, and the optimal consecutive-working menu, respectively. Then, we have V ∗ =
max{V naw, V aw}.
α
V
always working mechanism
consecutive-working menu
θ αˆ
not-always working
θ
Figure 2: Comparison of the principal’s expected payoff
When α < θ ̄, it is intuitive that assigning the agent to work for all cost realizations
wouldn’t be the optimal, so it must be that V ∗ = V naw. When α ≥ θ ̄, which is the focus
of this paper, the optimal non-always-working mechanism, if it exists, must be the optimal
consecutive-working menu according to Theorem 1, i.e., V naw = V cm. Lemma 5 shows
that V cm is strictly greater than V aw when α = θ ̄. By continuity, there must exist a region to
the right of θ ̄ where the optimal mechanism is still the consecutive-working menu. Finally,
we demonstrate that the optimal mechanism will eventually switch to the always-working
mechanism when α is sufficiently large and will not switch back to the consecutive-working
menu. This is primarily because the slope of V cm, whenever it exits, is strictly less than
the slope of V aw, as shown in Lemma 9. Hence, we reach the main result of this paper,
formalized in Theorem 2.
The following lemma provides an intermediate step in the proof of Theorem 2. It es
tablishes the existence of a region to the right of θ ̄ in which the optimal mechanism is char
acterized by the consecutive-working menu. However, if V cm = V aw at α = θ ̄, the con
28

clusion of Theorem 2 remains valid, but the region where the consecutive-working menu is
optimal reduces to an empty set.
Lemma 5. Under Assumption 2, V cm exists and is strictly greater than V aw when α = θ ̄.
The main reason behind the result in Lemma 5 is as follows: when α = θ ̄, ∂V
∂c1 can be
expressed as M − F (c1)
f(c1) + c1 , where M denotes the sum of all terms that do not depend
on c1 and can therefore be treated as a constant. We show that M is greater than θ. When
c1 = θ, F (c1)
f(c1) + c1 equals θ, and thus is below M . Assumption 2 states that F (c1)
f(c1) + c1 is
increasing in c1 and guarantees that F (c1)
f(c1) + c1 exceeds M when c1 = θ ̄. Consequently, the
optimal c1 must be an interior point of the support. Combined with the properties of the
optimal mechanism established in Theorem 1, we conclude that the optimal mechanism is
a consecutive-working menu when α = θ ̄.
c1
M
θ
θ
F (c1)
f (c1) + c1
θ
Figure 3: Relationship between M and F (c1)
f (c1) + c1
Assumption 2 primarily guarantees that the optimal c1 is an interior point of the support
when α = θ ̄ by ensuring a single crossing property of ∂V
∂c1 , as depicted in Figure 3. The
second requirement of Assumption 2 can be interpreted as ensuring that the virtual cost
θ + F (θ)
f(θ) is increasing. The virtual cost is the actual cost plus the information rent that
the principal must provide to lower types for inducing type θ to work.24 The assumption
24This requirement is generally weaker than the increasing hazard rate condition, particularly for distributions with decreasing density.
29

f (θ ̄) ≤ 1
(N−1)[θ ̄−E(θ)] is a technical condition ensuring ∂V
∂c1 |c1=θ ̄ < 0.25 It can be interpreted
as the virtual cost of working for type θ ̄ is not too small.26 Note that this assumption is
a sufficient condition, and the main result does not rely solely on it. The necessary and
sufficient condition is detailed in Lemma 8 in the appendix.27
6 Extensions
In this section, we extend the model to account for stochastic action rules. First, we in
troduce new notations and implementability conditions to accommodate randomness in the
action rules. We then demonstrate in Proposition 6 that stochastic mechanisms can outper
form the optimal deterministic mechanism when it is a consecutive-working menu. Next,
we explore the optimal implementation of stochastic rules in Proposition 7 and demonstrate
that intuition from deterministic mechanisms still holds in the stochastic setting. Finally,
we discuss the disadvantages of stochastic mechanisms and why it is still meaningful to
focus on deterministic mechanisms.
When the action rule is stochastic, the recommended action in each period becomes a
random variable, denoted as x ̃t. Let qt(ht, wt−1) represent the probability of recommending
the agent to work in period t given the cost history ht and the work history wt−1. Then we
have:
x ̃t(ht, wt−1) =



1, with probability qt(ht, wt−1)
0, with probability 1 − qt(ht, wt−1)
.
The realization of x ̃t is denoted as xt. Additionally, the payment rule should depend on
these action realizations, i.e., the work history, and is expressed as pN (hN , wN−1).
With stochastic rules, we need to ensure the agent’s participation at two stages each
period t: first, the agent must be willing to participate for every realization of θt (referred
to as the periodic ex-ante IR constraint); second, the agent’s continued participation must
be assured after both realizations of x ̃t (referred to as the periodic ex-post IR constraint).28
25This condition is satisfied by many distributions. For instance, for a symmetric truncated normal distri
bution with σ = 1 and b = θ ̄−θ
2 , the condition holds when eb2/2/b ≥ (N − 1)/√2π.
26At least as large as N · θ ̄ − (N − 1) · E(θ) 27Similar to Assumption 1, the necessary and sufficient condition is complex and involves solving a system of equations that might not have analytical solutions. However, for any given distribution, one can solve this system numerically to determine the necessary and sufficient condition. 28In typical usage, ”ex-ante” and ”ex-post” refer to the beginning and end of a game. Here, ”periodic
30

It’s straightforward that the periodic ex-post IR constraints imply the periodic ex-ante IR
constraints. Therefore, we can focus only on the periodic ex-post IR constraints. Similar
to the deterministic case, it is without loss of generality to concentrate payments at the end
of the period.29 Let ut(ht − 1, wt−1; θt) and ut(ht−1, wt−1; θt, xt) represent the agent’s on
path expected payoffs in period t before and after the realization of x ̃t, respectively, given
the history ht − 1 and wt−1.30 The periodic ex-post IR constraints are then given by:
−θt + ut(ht−1, wt−1; θt, xt = 1) ≥ 0,
ut(ht−1, wt−1; θt, xt = 0) ≥ 0.
For simplicity, the terms ”IR constraints” or ”periodic IR constraints” will sometimes be
used to refer specifically to the periodic ex-post IR constraints when the context is clear.
For truth-telling, similar to the deterministic case, we only need to ensure it once in each
period t after the realization of θt. Using the same proof method as in Lemma 1, we can
establish the following lemma.31
Lemma 6. A stochastic mechanism is incentive compatible if and only if for all t, ht−1 and
wt−1:
1. qt(ht−1, wt−1; θt) is non-increasing in θt.
2. ut(ht−1, wt−1; θt) = ut(ht−1, wt−1; θ ̄) + R θ ̄
θt qt(ht−1, wt−1; θt)dθt.
When the deterministic optimal mechanism is a consecutive-working menu, the princi
pal assigns the agent to work more frequently in the first period compared to the second
best in the N = 1 case, e.g., c∗
1 > xSB. The principal makes the agent overwork in the first
period because she has a higher continuation payoff once the agent starts working. This is
because she can achieve the “relative” first-best outcome in every subsequent period if the
ex-ante” and ”periodic ex-post” denote the states before and after the realization of the action rule in each period. 29For any mechanism involving interim payments, these can be backloaded to the end without affecting, and often enhancing, the agent’s incentives.
30ut(ht−1, wt−1; θt) ≡ −θt · qt + Et
θθθ
h
pN − PN
i=t+1 θ ̃i · qi(hi, wi − 1)
i
, ut(ht−1, wt−1; θt, xt) ≡ −θt ·
xt + Et
θθθ
h
pN − PN
i=t+1 θ ̃i · qi(hi, wi − 1)
i
.
31The proof is omitted as it closely mirrors that of the deterministic case, differing only in notation.
31

agent works in the first period.32 Consequently, to increase the chance of a brighter future,
the principal bears the cost of paying extra information rent in the first period.
Next, we show that the principal can achieve the same continuation payoff by paying
less information rent in the first period when stochastic mechanisms are allowed. For in
stance, consider reducing the probability of working in the first period for types between
xSB and c∗
1 by a small amount ε, as depicted in Figure 4. This reduction clearly decreases
the extra information rents paid in the first period. Meanwhile, it does not affect the prin
cipal’s continuation payoff, as she can still achieve efficiency in subsequent periods for
θ1 ∈ [xSB, c∗
1].
To see this, consider setting the agent’s expected payoff to zero if the action realization
is to work and transferring all the information rent that the agent deserves to the case when
the action realization is to shirk. Specifically, when x1 = 1, the principal promises to
pay the agent θ1 + (N − 1)E(θ) and prescribes him to work for sure in every subsequent
period. This is feasible because, under Assumption 1, the promised but postponed payment
for working in the first period, i.e., θ1, is large enough to incentivize the agent to work in
the second period and therefore all future periods. When x1 = 0, the principal promises
to pay the agent the information rent he deserves for working in the first period plus the
average cost of working in the future, i.e.,
u∗
1(θ ̄) + R θ ̄
θ1 q1(θ1)dθ1
ε + (N − 1)E(θ),
and prescribes him to work for sure until the end. If ε is small enough, then the promised
payment from the first period could be large enough to leverage the agent and achieve
efficiency thereafter. Thus, the stochastic mechanism improves the principal’s expected
payoff by reducing the information rent paid in the first period while maintaining the same
continuation payoff. This is formalized in Proposition 6.
Proposition 6. Under Assumption 1, when the optimal deterministic mechanism is a consecutive
working menu, there exist stochastic mechanisms that outperform the optimal deterministic
mechanism.33
32The term ”relative” is used because the principal still has to pay the additional u1∗(θ ̄) amount. Conditional on this payment being fixed, the principal can be seen as achieving the first best in every subsequent period. When the context is clear, I will omit this word for simplicity. 33This proposition still holds if we relax Assumption 1 to the necessary and sufficient condition in Propo
32

1
0 θ xSB c∗
1θ
1−ε ε
θ1
q1(θ1)
Figure 4: Stochastic improvement for action rule in the first period
The intuition behind Proposition 6 is as follows: in the deterministic optimal mecha
nism, the principal incurs the cost of paying extra information rent in the first period to
increase the likelihood of better outcomes in the future. However, this extra information
rent can be costly. The principal opts for this strategy partly due to the discrete nature of
the action space, i.e., {0,1}. When faced with a choice between work or shirk for relatively
high types, the principal chooses work. Ideally, the principal would prefer these types to
work partially, and a stochastic mechanism allows for this flexibility. As explained above,
by transferring all the information rent the agent deserves for working in the first period to
the case when the action realization is to shirk, the principal gains enough leverage to disci
pline the agent and extract all his surplus in future periods for both action realizations. This
approach is somewhat similar to making the action space continuous, giving the principal
the ability to assign the relatively high types to work less and therefore pay less information
rent in the first period.
A key feature of the stochastic improvement is that the principal can strengthen her
future incentive power in the case when the agent shirks by transferring all the informa
tion rents to this scenario, without affecting her continuation payoff when the agent works.
Usually, the principal has stronger future incentive power once the agent works because she
can accrue promised payments and use them to leverage the agent in subsequent periods.
sition 8, as long as c1∗ + u1∗(θ ̄) ̸= mint ct∗+1(0) + PN
i=t+2
R c∗
i (0)
θ F (θi)dθi . Here ct∗ and u1∗(θ ̄) are from
the optimal deterministic mechanism.
33

Conversely, the principal has less incentive power when the agent shirks since she does not
have to promise any payment for shirking.34 Stochastic mechanisms provide the principal
with the flexibility to relocate the promised payment across both action realizations, thus
improving her overall continuation payoff. Proposition 7 formalizes this idea by show
ing that, under Assumption 1, the optimal way to implement a stochastic action rule is to
transfer all the information rent to the case when the agent shirks.35
Proposition 7. Under Assumption 1, for any stochastic action rule x ̃t(ht−1, wt−1; θt), the
optimal way to implement it is to let:
1. ut(ht−1, wt−1; θt, xt = 1) = 0, and
2. ut(ht−1, wt−1; θt, xt = 0) = ut(ht−1, wt−1; θ ̄) + R θ ̄
θt qt(ht−1, wt−1; θt)dθt.
Despite the existence of stochastic improvements, focusing on deterministic mecha
nisms remains reasonable for the following two reasons. First, the optimal stochastic
mechanism is challenging to characterize since the principal’s problem can no longer be
simplified to optimizing over real spaces, e.g. thresholds. Instead, the optimization must
occur over functional spaces, specifically the Cartesian product of uncountably many func
tional spaces, which significantly increases the complexity and intractability of the prob
lem. Second, and more importantly, stochastic mechanisms may suffer from credibility
issues if the agent does not fully trust the principal. When the principal implements an out
come attached with a positive probability, it is difficult to verify whether the randomization
is conducted as promised. In other words, the agent might be unable to detect deviations in
the action recommendation, which could lead to a lack of trust. If the agent believes that
the principal has limited commitment, this mistrust could deter the agent from participating
truthfully, making stochastic mechanisms hard to implement in practice.
That being said, our discussion on stochastic mechanisms remains meaningful as they
largely preserve the intuition established for the deterministic case. They align with the
main idea we want to convey about leveraging an agent with private information to work
in a dynamic setting—through promised yet postponed payments. Meanwhile, such explo
ration enriches our comprehension of how this tool can be used more flexibly and power
fully under randomness.
34According to the formula for the price in (1), the accumulated promised payment for shirking in any
period t is actually negative: − R ct
θ F (θ)dθ.
35Assumption 1 is a sufficient condition that ensures transferring all information rents to the case when the agent shirks will not harm the principal’s continuation payoff when the action realization is to work.
34

7 Conclusion
From traditional labor contracts to reward schemes on modern internet platforms, many
mechanisms require work or consumption over consecutive periods. This paper identifies
a simple and canonical economic setting—dynamic screening with i.i.d. stochastic costs
and limited liability constraints—in which the optimal mechanism naturally features this
consecutiveness (along with backloaded payments).
The key intuition behind the optimality of consecutive working is as follows: first,
the principal backloads all payments to the end, using them as leverage to discipline the
agent—if the agent quits early, he forfeits all accumulated payments. Under the condition
we identify, for any given history path, the optimal promised payment for initiating work
is large enough to incentivize the agent to work until the end, while allowing the principal
to extract all surplus in periods where the agent has already started working. Moreover, we
show that this won’t affect the principal’s expected payoff from other history paths. Since
work is efficient and the principal can extract the full surplus, she optimally assigns the
agent to continue working to the end once he has started.
Compared to the optimal contract without limited liability, where the agent is induced to
work immediately and efficiency is achieved in every period, the optimal mechanism under
limited liability distorts the starting time—potentially inducing the agent to delay work for
a long time—but does not distort actions after work has begun. Once the agent starts, he
is incentivized to work continuously to the end, achieving efficiency in every subsequent
period. This results from a trade-off between the cost of inducing the agent to start working
early and the benefit of extracting surplus over more periods.
Moreover, we demonstrate that stochastic mechanisms can sometimes outperform de
terministic ones, as the principal can optimally allocate promised payments—thus adjust
ing her future leverage over the agent—across different realizations of the recommended
action. This flexibility enables better regulation in various scenarios. The main intuition
established for deterministic mechanisms remains valid in the stochastic setting, though it
can be applied more flexibly and effectively under randomness. Fully characterizing the
optimal stochastic mechanism is left for future research.
35

References
Ashlagi, Itai, Constantinos Daskalakis, and Nima Haghpanah (2023) “Sequential Mecha
nisms with Ex Post Individual Rationality,” Operations Research, 71 (1), 245–258.
Ball, Ian and Deniz Kattwinkel (2024) “Quota Mechanisms: Finite-Sample Optimality and
Robustness.”
Baron, David P. and David Besanko (1984) “Regulation and information in a continuing
relationship,” Information Economics and Policy, 1 (3), 267–302.
Battaglini, Marco (2005) “Long-Term Contracting with Markovian Consumers,” The
American Economic Review, 95 (3), 637–658.
Bergemann, Dirk, Francisco Castro, and Gabriel Y. Weintraub (2020) “The scope of se
quential screening with ex post participation constraints,” Journal of Economic Theory,
188, 105055.
Bergemann, Dirk and Juuso V ̈alim ̈aki (2010) “The Dynamic Pivot Mechanism,” Econo
metrica, 78 (2), 771–789.
(2019) “Dynamic Mechanism Design: An Introduction,” Journal of Economic
Literature, 57 (2), 235–74.
Besanko, David (1985) “Multi-period contracts between principal and agent with adverse
selection,” Economics Letters, 17 (1), 33–37.
Biais, Bruno, Thomas Mariotti, Guillaume Plantin, and Jean-Charles Rochet (2007) “Dy
namic Security Design: Convergence to Continuous Time and Asset Pricing Implica
tions,” The Review of Economic Studies, 74 (2), 345–390.
Board, Simon (2011) “Relational Contracts and the Value of Loyalty,” American Economic
Review, 101 (7), 3349–67.
Boleslavsky, Raphael and Maher Said (2012) “Progressive Screening: Long-Term Con
tracting with a Privately Known Stochastic Process,” The Review of Economic Studies,
80 (1), 1–34.
Clementi, Gian Luca and Hugo A. Hopenhayn (2006) “A Theory of Financing Constraints
and Firm Dynamics*,” The Quarterly Journal of Economics, 121 (1), 229–265.
36

Courty, Pascal and Hao Li (2000) “Sequential Screening,” The Review of Economic Studies,
67 (4), 697–717.
DeMarzo, Peter M. and Yuliy Sannikov (2006) “Optimal Security Design and Dynamic
Capital Structure in a Continuous-Time Agency Model,” The Journal of Finance, 61 (6),
2681–2724.
Es ̋o, Pe ́ter and Bala ́zs Szentes (2007) “Optimal Information Disclosure in Auctions and the
Handicap Auction,” The Review of Economic Studies, 74 (3), 705–731.
Frankel, Alexander (2014) “Aligned Delegation,” American Economic Review, 104 (1),
66–83.
(2016) “Discounted quotas,” Journal of Economic Theory, 166, 396–444.
Gershkov, Alex and Benny Moldovanu (2014) Dynamic Allocation and Pricing: A Mech
anism Design Approach: The MIT Press.
Halac, Marina, Navin Kartik, and Qingmin Liu (2016) “Optimal Contracts for Experimen
tation,” The Review of Economic Studies, 83 (3 (296)), 1040–1091.
Jackson, Matthew O and Hugo F Sonnenschein (2007) “Overcoming Incentive Constraints
by Linking Decisions,” Econometrica, 75 (1), 241–257.
Kr ̈ahmer, Daniel and Roland Strausz (2024) “Dynamic Screening with Liquidity Con
straint,” Economic Theory, forthcoming.
Krasikov, Ilia and Rohit Lamba (2021) “A theory of dynamic contracting with financial
constraints,” Journal of Economic Theory, 193, 105196.
Krishna, R. Vijay, Giuseppe Lopomo, and Curtis R. Taylor (2013) “Stairway to heaven
or highway to hell: Liquidity, sweat equity, and the uncertain path to ownership,” The
RAND Journal of Economics, 44 (1), 104–127.
Kr ̈ahmer, Daniel and Roland Strausz (2015) “Optimal Sales Contracts with Withdrawal
Rights,” The Review of Economic Studies, 82 (2), 762–790.
Milgrom, Paul and Ilya Segal (2002) “Envelope Theorems for Arbitrary Choice Sets,”
Econometrica, 70 (2), 583–601.
37

Mirrokni, Vahab, Renato Paes Leme, Pingzhong Tang, and Song Zuo (2020) “Non
Clairvoyant Dynamic Mechanism Design,” Econometrica, 88 (5), 1939–1963.
Pavan, Alessandro, Ilya Segal, and Juuso Toikka (2014) “Dynamic Mechanism Design: A
Myersonian Approach,” Econometrica, 82 (2), 601–653.
38

Appendix A Proof of results
A.1 Notations in the proofs
Let wi:j denote the working status history from period i to period j, i.e., wi:j = (wi, wi+1, · · · , wj).
Let T (wt) denote the agent’s on-path expected total future working periods after the work
ing status history wt:
T (wt) = EwN
"N X
i=t+1
1{θi ≤ ci(wi−1)} wt
#
.
We use P (wt) to denote the expected final payment minus the accumulated payments up
until (and including) period t, given the working status history wt:
P (wt) = EwN
"N X
i=t+1
xi · ci(wi−1) −
Z ci(wi−1)
θ
F (θi)dθi wt
#
+ u∗
1(θ ̄).
Let Vˆ (wt) denote the following:
α · T (wt) − P (wt).
In addition, we use T ∗(wt), P ∗(wt) and Vˆ ∗(wt) to denote the same quantities under the
optimal mechanism. Finally, we use V aw and V cm to denote the principal’s expected payoff
under the always-working mechanism and the consecutive-working menu, respectively.
A.2 Proof of Proposition 1
Proof. For any implementable mechanism {xt, pt}N
t=1, we can construct an alternative
mechanism {xt, p ̄t}N
t=1 that has the same action rules but pays the agent only at the end.
p ̄t is defined as follows: p ̄t = 0 for all t < N and p ̄N = PN
t=1 pt. Then the IC-t constraint
in the alternative mechanism is:
θt ∈ arg max
θˆt∈Θ
−θt·xt(ht−1, θˆt)+Et
θθθ
"
p ̄N (ht−1, θˆt, {θ ̃k}N
k=t+1) −
N
X
i=t+1
θ ̃i · xi(ht−1, θˆt, {θ ̃k}i
k=t+1)
#
(4)
39

By the definition of p ̄N , Et
θθθ
h
p ̄N (ht−1, θˆt, {θ ̃k}N
k=t+1)
i
can be rewritten as:
Et
θθθ
" t−1
X
i=1
pi(ht−1) + pt(ht−1, θˆt) +
N
X
i=t+1
pi(ht−1, θˆt, {θ ̃k}i
k=t+1)
#
=
t−1
X
i=1
pi(ht−1) + pt(ht−1, θˆt) + Et
θθθ
"N X
i=t+1
pi(ht−1, θˆt, {θ ̃k}i
k=t+1)
#
Therefore, the agent’s on-path expected payoff calculated in period t under the alternative
mechanism is:
pt(ht−1, θt)−θt·xt(ht−1, θˆt)+Et
θθθ
"N X
i=t+1
pi(ht−1, θˆt, {θ ̃k}i
k=t+1) − θ ̃i · xi(ht−1, θˆt, {θ ̃k}i
k=t+1)
#
+
t−1
X
i=1
pi(ht−1)
Therefore, the IC-t and IR-t constraints in the alternative mechanism are:
θt ∈ arg max
θˆt∈Θ
ut(ht−1, θˆt) +
t−1
X
i=1
pi(ht−1) (IC-t)
ut(ht−1, θt) +
t−1
X
i=1
pi(ht−1) ≥ 0 (IR-t)
Pt−1
i=1 pi(ht−1) is a constant term that only depends on past reports and therefore doesn’t
affect the agent’s current incentive. Thus, the IC-t constraint in the alternative mechanism
is the same as in the original mechanism. However, this constant term makes the IR-t
constraint in the alternative mechanism easier to satisfy, as Pt−1
i=1 pi(ht−1) is non-negative
due to the limited liability constraints. Lastly, the limited liability constraints in the alter
native mechanism are satisfied by construction. Thus, the alternative mechanism is also
implementable. Furthermore, the principal’s expected payoff remains the same because the
action rules xt are the same and the total expected payment is the same
Eθθθ[p ̄N ] = Eθθθ
"N X
t=1
pt
#
Therefore, for any implementable mechanism, there exists a pay-at-the-end mechanism that
implements the same action rules and provides the same expected payoff for the principal.
Thus, it is sufficient to consider mechanisms that only pay the agent at the end.
40

A.3 Proof of Lemma 1
Proof. For the necessary part, to show that IC implies (i), for any t and ht, consider two
types with θt > θ′
t. The IC-t constraint for θt implies:
− θt · xt(ht−1, θt) + Et
θθθ
"
pN (ht−1, θt, {θ ̃k}N
k=t+1) −
N
X
i=t+1
θ ̃i · xi(ht−1, θt, {θ ̃k}i
k=t+1)
#
≥ − θt · xt(ht−1, θ′
t) + Et
θθθ
"
pN (ht−1, θ′
t, {θ ̃k}N
k=t+1) −
N
X
i=t+1
θ ̃i · xi(ht−1, θ′
t, {θ ̃k}i
k=t+1)
#
(5)
The IC-t constraint for θ′
t implies:
− θ′
t · xt(ht−1, θ′
t) + Et
θθθ
"
pN (ht−1, θ′
t, {θ ̃k}N
k=t+1) −
N
X
i=t+1
θ ̃i · xi(ht−1, θ′
t, {θ ̃k}i
k=t+1)
#
≥ − θ′
t · xt(ht−1, θt) + Et
θθθ
"
pN (ht−1, θt, {θ ̃k}N
k=t+1) −
N
X
i=t+1
θ ̃i · xi(ht−1, θt, {θ ̃k}i
k=t+1)
#
(6)
Adding up inequalities (5) and (6) gives:
−θt · xt(ht−1, θt) − θ′
t · xt(ht−1, θ′
t) ≥ −θt · xt(ht−1, θ′
t) − θ′
t · xt(ht−1, θt)
⇔ (θt − θ′
t) · [xt(ht−1, θt) − xt(ht−1, θ′
t)] ≤ 0
θt > θ′
t implies that xt(ht−1, θt) ≤ xt(ht−1, θ′
t). Thus, incentive compatibility implies that
xt(ht−1, θt) is non-increasing in θt, for any t and ht−1.
Next, to show IC implies (ii). Note that ut(ht−1, θt) equals the following:
ut(ht−1, θt) = −θt·xt(ht−1, θt)+Et
θθθ
"
pN (ht−1, θt, {θ ̃k}N
k=t+1) −
N
X
i=t+1
θ ̃i · xi(ht−1, θt, {θ ̃k}i
k=t+1)
#
The envelope theorem in Milgrom and Segal (2002) implies that,
∂ut(ht−1, θt)
∂θt
= −xt(ht−1, θt)
41

Hence
ut(ht−1, θt) = ut(ht−1, θ ̄) +
Z θ ̄
θt
xt(ht−1, θt)dθt
For the sufficient part, we need to show that, for all t and ht−1, no type θt wants to deviate
to a different type θ′
t if conditions (i) and (ii) hold. This is equivalent to showing that
ut(ht−1, θt) ≥ −θt · xt(ht−1, θ′
t) + Et
θθθ
"
pN (ht−1, θ′
t, {θ ̃k}N
k=t+1) −
N
X
i=t+1
θ ̃i · xi(ht−1, θ′
t, {θ ̃k}i
k=t+1)
#
= −θt · xt(ht−1, θ′
t) + Et
θθθ
"
pN (ht−1, θ′
t, {θ ̃k}N
k=t+1) −
N
X
i=t+1
θ ̃i · xi(ht−1, θ′
t, {θ ̃k}i
k=t+1)
#
− θ′
t · xt(ht−1, θ′
t) + θ′
t · xt(ht−1, θ′
t)
= −θt · xt(ht−1, θ′
t) + ut(ht−1, θ′
t) + θ′
t · xt(ht−1, θ′
t)
= ut(ht−1, θ′
t) + xt(ht−1, θ′
t) · (θ′
t − θt)
It’s without loss of generality to assume that θt > θ′
t. Then, we want to show the following
hold:
ut(ht−1, θt) − ut(ht−1, θ′
t) ≥ xt(ht−1, θ′
t) · (θ′
t − θt)
⇔−
Z θt
θ′
t
xt(ht−1, θt)dθt ≥ −
Z θt
θ′
t
xt(ht−1, θ′
t)dθt (by (ii))
⇔
Z θt
θ′
t
xt(ht−1, θ′
t)dθt ≥
Z θt
θ′
t
xt(ht−1, θt)dθt
Condition (i) implies that the integrand of the left-hand side is pointwise greater than the
integrand of the right-hand side. Therefore, the inequality holds, completing the proof of
sufficiency.
42

A.4 Proof of Lemma 2
Proof. Let’s prove by induction. First, we want to show that if ut−1(ht−1) = u1(θ ̄) +
uˆt−1(ht−1), then ut(ht) = u1(θ ̄) + uˆt(ht). According to Lemma 1, we have
ut(ht) = ut(ht−1, θt)
= ut(ht−1, θ ̄) +
Z θ ̄
θt
xt(ht−1, θt)dθt (7)
By the definition of ut, we also have
ut−1(ht−1) =
Z θ ̄
θ
ut(ht−1, θ ̃t)dF (θt) − xt−1(ht−1) · θt−1
= ut(ht−1, θ ̄) +
Z θ ̄
θ
Z θ ̄
θ ̃t
xt(ht−1, θt)dθtdF (θt) − xt−1(ht−1) · θt−1
= ut(ht−1, θ ̄) +
Z θ ̄
θ
F (θt)xt(ht−1, θt)dθt − xt−1(ht−1) · θt−1
The reason for the first equality is that the agent’s expected payoff in period t − 1, before
the realization of θt, equals the expectation of his expected payoff in period t minus the cost
of working in period t − 1. The second equality comes from substituting ut with equation
(7). The third equality comes from integration by parts. Furthermore, since we assume that
ut−1(ht−1) = u1(θ ̄) + uˆt−1(ht−1), the following holds
ut(ht−1, θ ̄) +
Z θ ̄
θ
F (θt)xt(ht−1, θt)dθt − xt−1(ht−1) · θt−1 = u1(θ ̄) + uˆt−1(ht−1)
⇔ ut(ht−1, θ ̄) = u1(θ ̄) + uˆt−1(ht−1) −
Z θ ̄
θ
F (θt)xt(ht−1, θt)dθt + xt−1(ht−1) · θt−1
Plugging this into equation (7) and combining it with the definition of uˆ, we get
ut(ht) = ut(ht−1, θ ̄) +
Z θ ̄
θt
xt(ht−1, θt)dθt
= u1(θ ̄) + uˆt−1(ht−1) −
Z θ ̄
θ
F (θt)xt(ht−1, θt)dθt + xt−1(ht−1)θt−1 +
Z θ ̄
θt
xt(ht−1, θt)dθt
= u1(θ ̄) + uˆt(ht)
43

Lastly, let’s show that u1(θ1) = u1(θ ̄) + uˆ1(θ1). According to Lemma 1, we have
u1(θ1) = u1(θ ̄) +
Z θ ̄
θ1
x1(θ1)dθ1
= u1(θ ̄) + uˆ1(θ1)
Thus, by induction, we have ut(ht) = u1(θ ̄) + uˆt(ht) for any t and ht.
A.5 Proof of Lemma 3
Proof. For an incentive compatible mechanism to be implementable, the periodic IR con
straints must hold for all t and ht. According to Lemma 2, ut = u1(θ ̄) + uˆt(ht). Thus, the
periodic IR constraints are equivalent to: u1(θ ̄) + uˆt(ht) ≥ 0 for all t and ht.
In the optimal mechanism, the principal wants to choose the smallest u1(θ ̄) such that
all the periodic IR constraints hold. Otherwise, the principal can always decrease all pN by
a small amount, such that the mechanism remains implementable while yielding a higher
expected payoff. Thus, the optimal u∗
1(θ ̄) must satisfy the following:
u∗
1(θ ̄) = inf{u1(θ ̄) : ut(ht) ≥ 0 ∀ t, ht ∈ Θt} (8)
For any given ht−1, uˆt(ht−1, θt) is a decreasing function of θt.
uˆt(ht) =
Z θ ̄
θt
xt(ht−1, θt)dθt −
Z θ ̄
θ
F (θt)xt(ht−1, θt)dθt +
Z θ ̄
θ1
x1(θ1)dθ1
+
t−1
X
i=2
Z θ ̄
θi
xi(hi−1, θi)dθi −
Z θ ̄
θ
F (θi)xi(hi−1, θi)dθi +
t−1
X
i=1
xi(hi)θi
Only the first term, R θ ̄
θt xt(ht−1, θt)dθt, is a function of θt and it is decreasing in θt as
xt(ht−1, θt) ≥ 0 for all θt ∈ Θ. Thus, uˆt(ht−1, θt) archieves its minimum when θt = θ ̄.
Therefore, we can drop all the inequality constraints in (8) where the last element of the
history is not θ ̄. This completes the proof.
44

A.6 Proof of Proposition 2
Proof. According to Lemma 2 and Lemma 3, under the optimal mechanism, we have
uN (hN ) = u∗
1(θ ̄) + uˆN (hN )
= u∗
1(θ ̄) +
Z θ ̄
θ1
x1(θ1)dθ1 +
N −1
X
i=1
xi(hi)θi +
N
X
i=2
Z θ ̄
θi
xi(hi−1, θi)dθi −
Z θ ̄
θ
F (θi)xi(hi−1, θi)dθi
In addition, by the definition of uN (hN ), we also know that
uN (hN ) = p(hN ) − xN (hN ) · θN
By combining these two equations, we obtain the desired results.
A.7 Proof of Proposition 3
Proof. Under the threshold rules, the principal’s optimization problem is formulated as the
following:
max
{ct (wt−1 )}N
t=1
Eθθθ
"N X
t=1
α · xt(ht−1, θ ̃t)
#
− Eθθθ [pN (hN )]
= max
{ct (wt−1 )}N
t=1
Eθθθ
"N X
t=1
α · 1{θ ̃t ≤ ct(ht−1)}
#
− Eθθθ [pN (hN )]
= max
{ct (wt−1 )}N
t=1
Eθθθ
"N X
t=1
α · 1{θ ̃t ≤ ct(ht−1)}
#
− Eθθθ
"
Z θ ̄
θ
F (θ1)x1(θ1)dθ1 +
N
X
t=1
xt(ht)θ ̃t +
Z θ ̄
θ ̃t
xt(ht−1, θt)dθt −
Z θ ̄
θ
F (θt)xt(ht−1, θt)dθt
!
+ u∗
1(θ ̄)
#
= max
{ct (wt−1 )}N
t=1
Eθθθ
"N X
t=1
α · 1{θ ̃t ≤ ct(ht−1)}
#
− Eθθθ
"N X
t=1
1{θ ̃t ≤ ct(ht−1)} · ct(ht−1) −
N
X
t=2
Z ct(ht−1)
θ
F (θt)dθt + u∗
1(θ ̄)
#
= max
{ct (wt−1 )}N
t=1
Eθθθ
"N X
t=1
1{θ ̃t ≤ ct(ht−1)} · (α − ct(ht−1)) −
N
X
t=2
Z ct(ht−1)
θ
F (θt)dθt
#
+ u∗
1(θ ̄)
45

The second equality arises from substituting the formula for p(hN ) from Proposition 2. In
addition, according to Lemma 2, we have that
u∗
1(θ ̄) = inf{u1(θ ̄) : u1(θ ̄) + uˆt(ht−1, θ ̄) ≥ 0, ∀ ht−1 ∈ Θt−1, t ≤ N − 1}
= sup
ht∈Θt−1,t∈N
−uˆt(ht−1, θ ̄)
= − inf
ht∈Θt−1,t∈N
uˆt(ht−1, θ ̄)
= − inf
ht∈Θt−1,t∈N
(
Z θ ̄
θ1
x1(θ1)dθ1 +
t−1
X
i=1
xi(hi)θi +
t
X
i=2
Z θ ̄
θi
xi(hi−1, θi)dθi −
Z θ ̄
θ
F (θi)xi(hi−1, θi)dθi
)
= − inf
ht∈Θt−1,t∈N
( t−1
X
i=1
1{θi ≤ ci(hi−1)}ci(hi−1) −
t
X
i=2
Z ci(hi−1)
θ
F (θi)dθi
)
The third equality uses the definition of uˆt in Lemma 2. Therefore, the principal’s opti
mization problem can be expressed as the following:
max
{ct (wt−1 )}N
t=1
(
Eθθθ
hN
X
t=1
1{θ ̃t ≤ ct(ht−1)} · (α − ct(ht−1)) −
N
X
t=2
Z ct(ht−1)
θ
F (θt)dθt
i
− inf
ht∈Θt−1,t∈N
n t−1
X
i=1
1{θi ≤ ci(hi−1)}ci(hi−1) −
t
X
i=2
Z ci(hi−1)
θ
F (θi)dθi
o
)
Note that the cost in each period t enters the objective function only in the form of
1{θt ≤ ct(ht−1)}, which is the working status in that period. That is why the working
status history is a sufficient statistic for the cost history.
Specifically, in the expectation term, the thresholds ct(ht−1) are additively separable
from the past cost history, interacting only with the current cost θt 36. However, in the
infimum term, the thresholds ct(ht−1) interact with the past cost history, as they are added
to terms involving past costs and then compared with other histories. Nevertheless, the
past cost history only shows up through the working status history, i.e. θi appears solely in
the form of 1{θi ≤ ci(hi−1)} for all i < t. Consequently, the thresholds ct(ht−1) for cost
histories ht−1 that generate the same working status history wt−1 appear symmetrically in
the objective function. To see this, consider θ1 and θ′
1 that generates the same w1, then
the thresholds ct(θ1, θ2, · · · , θt−1) and ct(θ′
1, θ2, · · · , θt−1) appear symmetrically in the in
fimum term for all {θ2, · · · , θt−1} ∈ Θt−2 and all t ∈ {2, · · · , N }. Terms involving θ1
36It is also in the form of working status, i.e. 1{θt ≤ ct(ht−1)}.
46

are:
w1 · c1 +
m−1
X
t=2
1{θt ≤ ct(θ1, θ2, · · · , θt−1)}ct(θ1, θ2, · · · , θt−1) −
m
X
t=2
Z ct(θ1,θ2,··· ,θt−1)
θ
F (θt)dθt
And terms involving θ′
1 are:
w1 · c1 +
m−1
X
t=2
1{θt ≤ ct(θ′
1, θ2, · · · , θt−1)}ct(θ′
1, θ2, · · · , θt−1) −
m
X
t=2
Z ct(θ′
1,θ2,··· ,θt−1)
θ
F (θt)dθt
where m ∈ {t, · · · , N }. Consequently, the optimal values of these thresholds should be
the same. We can therefore rewrite these thresholds as ct(w1, θ2, · · · , θt−1). This pattern
continues, leading us to the conclusion that it is sufficient to set up thresholds as ct(wt−1)
for all t.
A.8 Lemma 7 and the proof
Lemma 7. c∗
t (wt−1) ̸= θ for all t ∈ N and for all wt−1 ∈ {0, 1}t−1.
Proof. Let’s prove this by contradiction. Suppose there exists some t and wt−1 such that
c∗
t (wt−1) = θ. Then, consider an alternative set of thresholds that equal the original ones
except for the following thresholds:



c′
t(wt−1) = θ + ε
c′
k(wt−1, 1, wt+1:k) = c∗
k(wt−1, 0, wt+1:k), ∀ k ∈ {t + 1, · · · , N }, wt+1:k ∈ {0, 1}k−t.
Basically, we change the threshold for working in period t given history wt−1 from θ to
θ +ε, and let the future thresholds after working in period t, which were previously off-path
and need not be specified, equal the future thresholds after shirking in period t. Payments
will be adjusted accordingly following Proposition 2. We then argue that the principal’s
expected payoff can always strictly increase in the two possible scenarios after the alterna
tion.
Case 1: u∗
1(θ ̄) remains the same. Let ∆ represent the change in the principal’s expected
47

payoff. Then, we have,
∆ =P r(wt−1)
"
α · F (θ + ε) + V ∗(wi−1, 0) − F (θ + ε) P ∗(wi−1, 0) + θ + ε −
Z θ+ε
θ
F (θ)dθ
− 1 − F (θ + ε) P ∗(wi−1, 0) −
Z θ+ε
θ
F (θ)dθ
#
− P r(wt−1) α · V ∗(wi−1, 0) − P ∗(wi−1, 0)
After the alternation, the principal benefits from the increased probability of the agent
working in period t following history wt−1, which rises from zero to F (θ + ε). According
to the final payment formula (1), the principal now incurs an additional payment of θ +
ε − R θ+ε
θ F (θ)dθ when the agent works, while saving R θ+ε
θ F (θ)dθ when the agent shirks in
period t after history wt−1. After simplification, we have,
∆ = P r(wt−1) α · F (θ + ε) − F (θ + ε)(θ + ε) +
Z θ+ε
θ
F (θ)dθ
> P r(wt−1) α − θ − ε · F (θ + ε)
>0
The last inequality holds because ε is small. In other words, for any α > θ, we can always
find a sufficiently small ε such that α − θ − ε > 0. Therefore, the principal’s expected
payoff strictly increases after the alternation.
Case 2: u∗
1(θ ̄) changes after the alternation. Let δu∗
1(θ ̄) represents the change in u∗
1(θ ̄) af
ter the alternation. Then, the change in the principal’s expected payoff is:
∆ = P r(wt−1) α · F (θ + ε) − F (θ + ε)(θ + ε) +
Z θ+ε
θ
F (θ)dθ − δu∗
1 (θ ̄)
In addition, we have the following relationship:
δu∗
1(θ ̄) ≤
Z θ+ε
θ
F (θ)dθ
When u∗
1(θ ̄) changes, it must be caused by a change in the IR constraint of some work
history whose initial t elements are {wt−1, 0}, previously either slack or binding, now be
coming binding. Conversely, The IR constraints for histories that begin with {wt−1, 1} are
48

now all slack, as they each include an additional positive term:
θ+ε−
Z θ+ε
θ
F (θ)dθ = θ + ε − F (θ) · θ|θ+ε
θ+
Z θ+ε
θ
θ · f (θ)dθ (Intergration by parts)
= θ + ε − F (θ + ε)(θ + ε) +
Z θ+ε
θ
F (θ)dθ
= (θ + ε) · (1 − F (θ + ε)) +
Z θ+ε
θ
F (θ)dθ
>0
For work histories starting with {wt−1, 0}, their IR constraints now include an additional
negative term: − R θ+ε
θ F (θ)dθ. Consequently, the maximum change in u∗
1(θ ̄) occurs when
any of the original IR constraints for these work histories used to be binding. In this case,
the change in u∗
1(θ ̄) amounts to R θ+ε
θ F (θ)dθ. Therefore, we have,
∆ ≥ P r(wt−1) α · F (θ + ε) − F (θ + ε)(θ + ε) +
Z θ+ε
θ
F (θ)dθ −
Z θ+ε
θ
F (θ)dθ
= P r(wt−1)
h
α · F (θ + ε) − F (θ + ε)(θ + ε)
i
− 1 − P r(wt−1)
Z θ+ε
θ
F (θ)dθ
> P r(wt−1)(α − θ − ε)F (θ + ε) − 1 − P r(wt−1) F (θ + ε)ε
= P r(wt−1)F (θ + ε) α − θ − ε − 1 − P r(wt−1)
P r(wt−1) ε
= P r(wt−1)F (θ + ε) α − θ − 1
P r(wt−1) ε
>0
The second inequality holds because R θ+ε
θ F (θ)dθ < R θ+ε
θ F (θ + ε)dθ. The last inequality
holds because ε is small. In other words, for any α > θ, we can always find a sufficiently
small ε such that 1
P r(wt−1) ε + θ < α given a fixed P r(wt−1). Therefore, the principal’s
expected payoff strictly increases after the alternation in this case as well.
Thus far, we have demonstrated that the principal’s expected payoff strictly increases
in both possible scenarios following the alternation. Therefore, we have reached a contra
diction, concluding the proof.
49

A.9 Proof of Lemma 4
Proof. To illustrate this, suppose there exist m > 1 such that m = arg min{t : c∗
t (0) = θ ̄}.
It means that m is the smallest period such that the agent is assigned to work for every
realization of cost given that he has not worked before in the optimal mechanism, and m is
not the first period. Then, we want to show that it is impossible by finding a contradiction.
Note that given any work history, the first best outcome the principal can achieve in
each future period is to have the agent work for sure and only pay him the average cost of
working 37. Next, we want to show that if we set cj(wj−1) = θ ̄ for all m − 1 ≤ j ≤ N
and wj−1 = {0m−2, 1j−m+1} 38, then the principal can be better off as she can achieve a
“relative” first best in every period following the work history 0m−2. 39 Recall that the
formula for the final payment is the following:
p(wN ) =
N
X
t=1
xt · ct(wt−1) −
N
X
t=2
Z ct(wt−1)
θ
F (θt)dθt + u∗
1(θ ̄)
If we can let cj(wj−1) = θ ̄ for all m − 1 ≤ j ≤ N and wj−1 = {0m−2, 1j−m+1} without
having to increase u∗
1(θ ̄), then the principal archives the first best in every period after the
work history 0m−2. This is because the payment then becomes:
p(wN ) = u∗
1(θ ̄) +
m−2
X
t=1
xt · ct(wt−1) −
m−2
X
t=2
Z ct(wt−1)
θ
F (θt)dθt +
N
X
t=m−1
hθ ̄ −
Z θ ̄
θ
F (θt)dθt
i
= u∗
1(θ ̄) −
m−2
X
t=2
Z ct(wt−1)
θ
F (θt)dθt + (N − m + 2) · E(θ)
Here the payment has three components: u∗
1(θ ̄), − Pm−2
t=2
R ct(wt−1)
θ F (θt)dθt and (N − m +
2) · E(θ). The summation term only depends on the action rules before and during period
m − 2. This implies that if u∗
1(θ ̄) does not increase after we set cj(wj−1) = θ ̄ for all
37The first best scenario is to ask the agent to work whenever α > θt and to compensate the agent with the
cost θt. Since α > θ ̄, the first best is to assign the agent to work for sure. In this case, paying the agent θt is equivalent to paying the average cost E(θt) for all realization of θt from the perspectives of the players’ expected payoffs. 3800 and 10 represent ∅. 39The term “relative” is used here because the principal archieves the first best relative to the previous mechanism. Specifically. the principal still has to pay the agent an additional u1∗(θ ̄) amount, but conditional on it remainin-
g the same, she can be seen as achieving the first best in every period following the work history
0m−2.
50

m − 1 ≤ j ≤ N and wj−1 = {0m−2, 1j−m+1}, then the principal only pays the average
cost of working in every subsequent period following the work history 0m−2, while asking
the agent to work for sure. In this scenario, the principal’s expected payoff will definitely
increases as she achieves the first best in each of the subsequent periods, and it won’t
negativity affect the payoff from other work histories since it does not increase u∗
1(θ ̄) 40.
Next, we will show that asking the agent to work for sure after the work history 0m−2
indeed does not increase u∗
1(θ ̄). This is equivalent to showing that the IR constraints are
slack for all work histories containing 0m−2 given the u∗
1(θ ̄) from the original mechanism,
since the IR conditions for all other histories remain the same.
The IR constraint from the original mechanism for work history {0m−1, 1} implies:
u∗
1(θ ̄) + uˆm(0m−1, 1) ≥ 0
⇐⇒ u∗
1(θ ̄) −
m
X
t=2
Z ct∗(0)
θ
F (θt)dθt ≥ 0
⇐⇒ u∗
1(θ ̄) ≥
m
X
t=2
Z ct∗(0)
θ
F (θt)dθt (9)
Next, we will show that the IR constraints are slack for all work histories containing 0m−2
given the u∗
1(θ ̄) from the original mechanism that satisfies (9). Specifically, IR constraint
in period j ≥ m − 1 after work history {0m−2, 1j−m+2} is:
u∗
1(θ ̄) −
m−2
X
t=2
Z ct∗(0)
θ
F (θt)dθt +
j−1
X
t=m−1
θ ̄ −
Z θ ̄
θ
F (θt)dθt −
Z θ ̄
θ
F (θj)dθj
≥
Z c∗
m−1 (0)
θ
F (θm−1)dθm−1 +
Z c∗m(0)
θ
F (θm)dθm +
j−1
X
t=m−1
θ ̄ −
Z θ ̄
θ
F (θt)dθt −
Z θ ̄
θ
F (θj)dθj
=
Z c∗
m−1 (0)
θ
F (θm−1)dθm−1 + (j − m + 1) · (θ ̄ −
Z θ ̄
θ
F (θ)dθ)
=
Z c∗
m−1 (0)
θ
F (θm−1)dθm−1 + (j − m + 1) · E(θ)
>0
Where the first inequality is a result of (9) and the first equality comes from the fact that
40In the proof of Lemma ??, we use the first-order condition method to similarly argue that asking the agent to work for certain is optimal when it does not increase u1∗(θ ̄).
51

c∗
m(0) = θ ̄. The last inequality is strict since c∗
m−1(0) > θ and the distribution has posi
tive density everywhere on the support. So far, we have shown that assigning the agent to
work for sure after the work history 0m−2 does not increase u∗
1(θ ̄). Therefore, the princi
pal’s expected payoff will be increased by doing so. This increase is strict since initially
c∗
m−1(0) < θ ̄, and now we raise it to θ ̄, achieving the first best in that period. Therefore,
we arrive at a contradiction: m is not the smallest period such that the agent is assigned
to work for every realization of cost given that he has not worked before in the optimal
mechanism.
Thus, there are only two possibilities for the optimal mechanism: either m = 1, or
c∗
t (0) ∈ (θ, θ ̄) for all t ∈ N . The fact that c∗
t (0) > θ is established in Lemma 7. When
m = 1, then the principal can achieve the first best in every period starting from the second
period by assigning the agent to always work. This is because the final payment becomes:
c∗
1 + (N − 1) · E(θ) + u∗
1(θ ̄) = θ ̄ + (N − 1) · E(θ)
The equality holds because c∗
1 = θ ̄ and u∗
1(θ ̄) = 0. The value of u∗
1(θ ̄) = 0 is verified by
showing that all IR constraints hold even if u∗
1(θ ̄) is set to its lowest possible value, which
is 0. To illustrate this, consider the IR constraint for the work history 1t for t ≥ 1 is:
u∗
1(θ ̄) + c∗
1+
t−1
X
i=2
θ ̄ −
Z θ ̄
θ
F (θi)dθi −
Z θ ̄
θ
F (θt)dθt
= u∗
1(θ ̄) + θ ̄ + (t − 2) · E(θ) −
Z θ ̄
θ
F (θt)dθt
= u∗
1(θ ̄) + (t − 1) · E(θ)
≥ u∗
1(θ ̄)
≥0
Thus, when m = 1, the optimal strategy is to ask the agent to always work. This completes
the proof.
52

A.10 Proof of Proposition 4
Proof. First of all, we want to show that when c∗
i (0) < θ ̄ for all 1 ≤ i ≤ N , the following
holds:
min
xt∈{0,1}t,t∈N
n t−1
X
i=1
wi · c∗
i (wi−1) −
t
X
i=2
Z c∗
i (wi−1)
θ
F (θi)dθi
o
=−
N
X
t=2
Z ct∗(0)
θ
F (θt)dθt
(10)
Suppose this is not true, then we have
−u∗
1(θ ̄) < −
N
X
t=2
Z ct∗(0)
θ
F (θt)dθt (11)
Next, consider increasing c∗
N (0) by a small amount ε such that (11) still holds, while keep
ing all other thresholds the same. Since PN
t=2
R ct∗(0)
θ F (θt)dθt is the only term in the mini
mum function involving c∗
N (0), (11) implies that u∗
1(θ ̄) remains unchanged. Payments will
be adjusted accordingly following Proposition 2. Denote the probability of the work his
tory wN−1 being 0N−1 as P r(0N−1). Then the change in the principal’s expected payoff
is:
P r(0N−1) ·
(
α · (F (c∗
N (0) + ε) − F (c∗
N (0))) −
"
F (c∗
N (0) + ε) · c∗
N (0) + ε −
Z c∗
N (0)+ε
θ
F (θ)dθ
!
+ (1 − F (c∗
N (0) + ε)) · −
Z c∗
N (0)+ε
θ
F (θ)dθ
!#
+
"
F (c∗
N (0)) · c∗
N (0) −
Z c∗
N (0)
θ
F (θ)dθ
!
+ (1 − F (c∗
N (0))) · −
Z c∗
N (0)
θ
F (θ)dθ
!# )
=P r(0N−1) ·
(
α · (F (c∗
N (0) + ε) − F (c∗
N (0))) −
"
F (c∗
N (0) + ε) · ε + (F (c∗
N (0) + ε) − F (c∗
N (0))) · c∗
N (0) −
Z c∗
N (0)+ε
c∗
N (0)
F (θ)dθ
#)
=P r(0N−1) ·
"
(F (c∗
N (0) + ε) − F (c∗
N (0))) · (α − c∗
N (0)) − F (c∗
N (0) + ε)ε −
Z c∗
N (0)+ε
c∗
N (0)
F (θ)dθ
!#
>P r(0N−1) · [(F (c∗
N (0) + ε) − F (c∗
N (0))) · (α − c∗
N (0)) − (F (c∗
N (0) + ε) · ε − F (c∗
N (0)) · ε)]
53

=P r(0N−1) (F (c∗
N (0) + ε) − F (c∗
N (0))) (α − c∗
N (0) − ε)
>0
The first inequality holds because R c∗
N (0)+ε
c∗
N (0) F (θ)dθ > F (c∗
N (0)) · ε. The last inequality
holds since c∗
N (0) < α, so there exists some small ε such that c∗
N (0) + ε < α. Thus, the
principal’s expected payoff strictly increases after we increase c∗
N (0) by a small amount ε.
This contradicts the fact that the original thresholds are optimal. Therefore, (10) must hold.
It implies that the IR constraint for the work history 0N is always binding, which leads to
the following relationship:
u∗
1(θ ̄) + uˆN (0N ) = 0
⇔u∗
1(θ ̄) = −uˆN (0N ) =
N
X
t=2
Z ct∗(0)
θ
F (θt)dθt
In other words, − PN
t=2
R ct∗(0)
θ F (θt)dθt should be the value of the minimum function.
Therefore, in the original optimization problem (2), we can replace the minimum func
tion with − PN
t=2
R ct∗(0)
θ F (θt)dθt and add constraints to ensure that all other terms in the
minimum function are no less than − PN
t=2
R ct∗(0)
θ F (θt)dθt, i.e. ensuring that the other
IR constraints also hold. Hence, the principal’s optimization problem is equivalent to the
constrained optimization problem (3).
A.11 Proposition 8 and the proof
Proposition 8. Let {c∗
t (0)}N
t=1 be the solution to the following system of equations:
P r(0t−1) · (α − ct(0) + Vˆ (0t−1, 1) − Vˆ (0t−1, 0)) = F (ct(0))
f (ct(0))
N
t=1
(12)
54

41 where P r(0t−1) = Πt−1
i=1(1−F (ci(0))), Vˆ (0t−1, 1) = (N −t)(α−E(θ))−PN
i=2
R ci(0)
θ F (θi)dθi
and
Vˆ (0t−1, 0) =
N
X
i=t+1
Πi−1
j=t+1(1 − F (cj(0))) · F (ci(0)) ·
"
α(N − i + 1) − ci(0) +
i
X
j=t+1
Z cj (0)
θ
F (θj)dθj
− (N − i)E(θ)
#
−
N
X
i=2
Z ci(0)
θ
F (θi)dθi.
If the solution exists and has that c∗
1 ̸= θ ̄, then the necessary and sufficient condition for the
solution of the relaxed optimization problem (3) to be feasible is that the solution satisfies
the following condition:
mtin c∗
t+1(0) +
N
X
i=t+2
Z c∗
i (0)
θ
F (θi)dθi
!
+ E(θ) − θ ̄ ≥ 0. (13)
Proof. The system of equations consists of the first-order conditions for the thresholds
ct(0) for all t ∈ N in the relaxed optimization problem (3). When the solution exits and
c∗
1 ̸= θ ̄, it implies that ct(0) are interior points of the support for all t ∈ N . In this case,
the necessary and sufficient condition for the solution to be feasible is that the IR constraint
holds for all work histories (0t, 12) as illustrated in section 5. Among these histories, the
one with the smallest agent’s expected payoff is:
arg min
0≤t≤N −2
c∗
t+1(0) +
N
X
i=t+2
Z c∗
i (0)
θ
F (θi)dθi
!
.
Thus, as long as the IR constraint holds for this work history, which is condition (13), then
the relaxed solution is feasible. This completes the proof.
A.12 Proof of Theorem 1
Proof. When α ≥ θ ̄, according to Lemma 4, there are only two possibilities for the optimal
action rule: either c∗
i (0) < θ ̄ for all i ∈ N , or the optimal rule is to assign the agent to work
in every period. When the optimal rule is to assign the agent to work in every period, the
optimal mechanism is an always-working mechanism. Thus, we only need to show that
when c∗
i (0) < θ ̄ for all i ∈ N , the optimal mechanism is a consecutive-working menu.
4100 denotes the emptyset.
55

According to Proposition 4, the principal’s optimization problem is equivalent to the
constrained optimization problem (3). Let’s first solve the relaxed optimization problem,
where we remove the constraints in (3). Then, we will argue that the relaxed optimal
solution is indeed feasible by showing that it satisfies all the constraints in the original
optimization problem. To start with, for work history wN−1 ̸= 0, the first order condition
for cN (wN−1) is:
P r(wN−1)
∂
h
α · F (cN ) − (F (cN )cN − R cN
θ F (θ)dθ)
i
∂cN
= P r(wN−1)[αf (cN ) − f (cN )cN − F (cN ) + F (cN )]
= P r(wN−1)f (cN )(α − cN )
≥0
The last inequality is because α ≥ θ ̄. So, the objective value is strictly increasing for cN ∈
(θ, θ ̄). It implies that c∗
N (wN−1) = θ ̄ for all wN−1 ̸= 0. Next, assume that c∗
i (wi−1) = θ ̄ for
all wi−1 ̸= 0 and for all i ∈ {t+1, t+2, · · · , N }. Then, we want to show that c∗
t (wt−1) = θ ̄
for all wt−1 ̸= 0. Fix any wt−1, terms in the objective function that involve ct(wt−1) are:
α · P r(wt−1) F (ct) + F (ct) · V ∗(wt−1, 1) + (1 − F (ct)) · V ∗(wt−1, 0)
−P r(wt−1)
h
F (ct) P ∗(wt−1, 1) + ct −
Z ct
θ
F (θ)dθ + 1 − F (ct) P ∗(wt−1, 0) −
Z ct
θ
F (θ)dθ
i
V ∗(wt−1, 0) and V ∗(wt−1, 1) should be the same because we assume c∗
i (wi−1) = θ ̄ for all
wi−1 ̸= 0 and for all i ∈ {t + 1, t + 2, · · · , N }. This means all the future thresholds after
the histories (wt−1, 0) and (wt−1, 1) are the same and equal to θ ̄. In addition, P ∗(wt−1, 0)
and P ∗(wt−1, 1) should equal each other because the work histories in and before period
t − 1 are the same, and the future thresholds after period t are the same. Therefore, the
terms in the objective function that involve ct are:
α · P r(wt−1)F (ct) − P r(wt−1) F (ct)ct −
Z ct
θ
F (θ)dθ
=P r(wt−1) αF (ct) − F (ct)ct +
Z ct
θ
F (θ)dθ
The first order condition for ct is: P r(wt−1)f (ct)(α − ct) ≥ 0. Thus the unconstrained
56

optimal value for ct(wt−1) is also θ ̄ when wt−1 ̸= 0. By induction, we have shown that
c∗
i (wi−1) = θ ̄ for all wi−1 ̸= 0 and for all i ≥ 2. Therefore, the optimal thresholds in the
relaxed optimization problem are such that c∗
i (wi−1) = θ ̄ for all wi−1 ̸= 0 and for all i ≥ 2,
and c∗
i (0) ∈ (θ, θ ̄) for all i ∈ N . Next, we need to show that the relaxed optimal thresholds
are feasible, i.e. the constraints in (3) all hold:
t−1
X
i=1
xi·ci(wi−1)−
t
X
i=2
Z ci(wi−1)
θ
F (θi)dθi ≥ −
N
X
i=2
Z ci(0)
θ
F (θi)dθi ∀ t ∈ N , ∀ wt ∈ {0, 1}t
The constraint for any work history wm+n = (0m, 1n) where n ≥ 2 is equivalent to:
t−1
X
i=1
xi · ci(wi−1) −
t
X
i=2
Z ci(wi−1)
θ
F (θi)dθi +
N
X
i=2
Z ci(0)
θ
F (θi)dθi ≥ 0
⇔ c∗
m+1(0) +
m+n−1
X
i=m+2
θ ̄ −
m+1
X
i=2
Z c∗
i (0)
θ
F (θi)dθi −
m+n
X
i=m+2
Z θ ̄
θ
F (θi)dθi +
N
X
i=2
Z ci(0)
θ
F (θi)dθi ≥ 0
⇔ c∗
m+1(0) +
m+n−1
X
i=m+2
θ ̄ −
Z θ ̄
θ
F (θi)dθi −
Z θ ̄
θ
F (θm+n)dθm+n +
N
X
i=m+2
Z ci(0)
θ
F (θi)dθi ≥ 0
(14)
Note that θ ̄ − R θ ̄
θ F (θi)dθi = E(θ), which comes from integration by parts. Thus, the left
hand side of the inequality in (14) can be rewritten as:
c∗
m+1(0) −
Z θ ̄
θ
F (θm+n)dθm+n + (n − 2) · E(θ) +
N
X
i=m+2
Z ci(0)
θ
F (θi)dθi
> c∗
m+1(0) −
Z θ ̄
θ
F (θm+n)dθm+n
>θ−
Z θ ̄
θ
F (θm+n)dθm+n
= θ + E(θ) − θ ̄
≥0
The first inequality holds because n ≥ 2, N ≥ m + n ≥ m + 2 and ci(0) > θ for all i. The
second inequality holds because c∗
m+1(0) > θ according to Lemma 7. The last inequality
holds because of Assumption 1.
57

When n ≤ 1, m + n ≥ 2, the constraint is the following, which holds as N ≥ m + n.
−
m+n
X
i=2
Z ci(0)
θ
F (θi)dθi +
N
X
i=2
Z ci(0)
θ
F (θi)dθi ≥ 0
When m + n = 1, the constraint trivially holds as it becomes PN
i=2
R ci(0)
θ F (θi)dθi ≥ 0.
So far, we have shown that the relaxed optimal thresholds are feasible. Therefore, the
solution to the relaxed optimization problem is also the solution to the original optimization
problem, which has the feature that c∗
i (wi−1) = θ ̄ for all wi−1 ̸= 0 and for all i ≥ 2, and
c∗
i (0) ∈ (θ, θ ̄) for all i ∈ N . It implies that the optimal mechanism is a consecutive
working menu: once the agent starts to work, he will work in every period until the end.
Hence, we have shown that when α ≥ θ ̄, the optimal mechanism is either a consecutive
working menu or an always-working mechanism.
A.13 Proof of Proposition 5
Proof. First, to establish the existence of the optimal mechanism, it suffices to show that a
solution to the optimization problem (2). For any fixed α, the objective function is continu
ous with respect to all the thresholds ci(wi−1). The feasible set for each threshold compact,
specifically [θ, θ ̄]. Since there are finitely many such thresholds, the Cartesian product of
these finitely many compact sets remains compact. By the Weierstrass Extreme Value The
orem, a continuous function on a compact set attains its maximum. Thus, the optimization
problem (2) has a solution, ensuring the existence of the optimal mechanism.
Second, observe that the objective function is continuous on the product space [θ, θ ̄]2N−1×
[θ, ∞), where [θ, ∞) is the feasible set for α. Define C : [θ, ∞) → [θ, θ ̄]2N−1 as the cor
respondence that maps α to the feasible thresholds. For any value of α, the feasible set
for the optimal thresholds is always [θ, θ ̄]2N−1. Therefore, C is a continuous and compact
valued correspondence. By applying the Maximum Theorem, it follows that the principal’s
optimal expected payoff V ∗ is continuous with respect to α.
Next, V ∗ can be expressed as:
V ∗(α) = α · Eθθθ
"N X
t=1
x∗
t (α)
#
− Eθθθ[p∗
N (α)]
58

where {x∗
t (α)}N
t=1 denote the optimal action rules for α, and p∗
N (α) is the corresponding
payment rule. Then for any pair α1 < α2, when α = α2, we can at least use the same
action rules {x∗
t (α1)}N
t=1 , which results in a higher principal’s expected payoff as α itself
is higher. Therefore, V ∗ is increasing in α.
Lastly, since V ∗ is increasing, Lebesgue’s theorem guarantees that V ∗ is differentiable
almost everywhere.
A.14 Proof of Lemma 5
Proof. Terms involving c1 in the principal’s expected payoff under the consecutive-working
menu are given by:
α · [F (c1) · N + (1 − F (c1)) · T ∗(0)] − F (c1)[c1 + (N − 1)E(θ) + u∗
1(θ ̄)] − (1 − F (c1)) · P ∗(0)
Here, N is the expected total working period if the agent works in the first period, while
T ∗(0) is the expected total working period if the agent shirks in the first period. Similarly,
c1 + (N − 1)E(θ) + u∗
1(θ ̄) is the expected total payment when the agent works in the first
period, and P ∗(0) is the expected total payment when the agent shirks in the first period.42
The first order condition for c1 is:
α · f (c1)(N − V ∗(0)) − f (c1)[c1 + (N − 1)E(θ) + u∗
1(θ ̄)] − F (c1) + f (c1)P ∗(0)
=f (c1)
n
α · N − (N − 1)E(θ) + u∗
1(θ ̄) − α · T ∗(0) − P ∗(0) − F (c1)
f (c1) − c1
o
(15)
Given that the density f (θ) > 0 on the support, to determine the sign of the first-order
condition (FOC), we need only examine the sign of the term in the curly brackets. Note
that the first part, α · N − (N − 1)E(θ) + u∗
1(θ ̄) − α · T ∗(0) − P ∗(0) , does not depend
on c1. Denote this term as M :
M = α · N − (N − 1)E(θ) + u∗
1(θ ̄) − α · T ∗(0) − P ∗(0)
= α·N −
payment if start working in period 1
z }| {
c∗
1 + (N − 1)E(θ) + u∗
1(θ ̄)
| {z }
principal’s expected payoff if start working in period 1
− α · T ∗(0) − P ∗(0)
| {z }
principal’s expected payoff if start working after period 1
+c∗
1
42Notably, if the agent shirks in the first period, the final payment does not include terms involving c1. Consequently, P ∗(0)represents the expected total payment in this scenario.
59

Since the principal’s expected payoff can be viewed as the weighted average of her expected
payoff if the agent starts working in period 1, with weight F (c∗
1), and her expected payoff
if the agent starts working after period 1, with weight 1 − F (c∗
1). The fact that c∗
1 ∈ (θ, θ ̄]
implies that F (c∗
1) ∈ (0, 1], which in turn implies that the principal’s expected payoff if
the agent starts working in period 1 is at least as good as her expected payoff if the agent
starts working after period 1. Otherwise, she can be better off by reducing c∗
1, which would
violate its optimality. 43 Therefore, we have:
M ≥ c∗
1>θ
Let’s rewrite the term in the curly bracket in (15) as
M−
h F (c1)
f (c1) + c1
i
where M can be considered a constant, and the second part as a function of c1. Now, let’s
consider the case when α = θ ̄. Then M becomes
M = N · θ ̄ − (N − 1)E(θ) − u∗
1(θ ̄) − θ ̄ · V ∗(0) − P ∗(0)
< N · θ ̄ − (N − 1)E(θ) (16)
The inequality holds because u∗
1(θ ̄) = PN
t=2
R ct(0)∗
θ F (θ)dθ > 0 and θ ̄ · T ∗(0) − P ∗(0) =
Vˆ ∗(0) > 0.
Assumption 2 establishes that the function F (c1)
f(c1) + c1 is continuous and increasing. At
c1 = θ, this function equals θ. At c1 = θ ̄,
F (θ ̄)
f (θ ̄) + θ ̄ = 1
f (θ ̄) + θ ̄
≥ (N − 1)[θ ̄ − E(θ)] + θ ̄
= N θ ̄ − (N − 1)E(θ)
>M
where the first inequality follows from Assumption 2 and the last inequality follows from
(16). Thus, the relationship between M and the function F (c1)
f(c1) + c1 can be illustrated by
43Which also increases her expected payoff if the agent starts working in period 1.
60

Figure 3.
The function F (c1)
f(c1) + c1 is below M when c1 = θ. According to Assumption 2, this
function is continuous and increasing, and it exceeds M when c1 = θ ̄. Therefore, F (c1)
f (c1) + c1
intersects M exactly once from below. This implies that there is a unique interior point
where the derivative of V ∗ with respect to c1 is positive below this point and negative
above it. Consequently, the optimal threshold c∗
1 must be this interior point. Hence, by
Theorem 1, the optimal mechanism when α = θ ̄ must be a consecutive-working menu. We
arrived at the conclusion that V cm exists and is strictly larger than V aw when α = θ ̄.
A.15 Lemma 8 and the proof
Lemma 8. Let {c∗
t (0)}N
t=1 be the solution to the system of equations (12). If f (θ) is con
tinuous, F (θ)
f(θ) + θ is increasing, then the necessary and sufficient condition for V cm > V aw
at α = θ ̄ is that the solution satisfies the following condition:
1
f (θ ̄) >(N − 1)(θ ̄ − E(θ))−
N
X
t=2
Πt−1
i=2(1 − F (c∗
i (0))) ·
"
F (c∗
t (0))(θ ̄ − c∗
t) +
Z ct∗(0)
θ
F (θ)dθ + F (c∗
t (0))(N − t)(θ ̄ − E(θ))
#
Proof. According to Theorem 1, V cm > V aw at α = θ ̄ if and only if c∗
1 lies in (θ, θ ̄). The
condition listed in Lemma 8 is equivalent to M , defined in the proof of Lemma 5, being
less than F (θ ̄)
f(θ ̄) + θ ̄. It is further equivalent to the condition that ∂V
∂c1 < 0 at c1 = θ ̄. According
to the expression of ∂V
∂c1 derived in the proof of Lemma 5, given that F (θ)
f(θ) + θ is increasing
and that ∂V
∂c1 |c1=θ > 0, ∂V
∂c1 |c1=θ ̄ < 0 is then the necessary and sufficient condition for the
optimal c1 to be an interior point of the support. This completes the proof.
A.16 Lemma 9 and the proof
Lemma 9. When V ∗ ̸= V aw, ∂V ∗
∂α < N.
Proof. Since V ∗ can be expressed as the following:
V ∗(α) = α · Eθθθ
"N X
t=1
x∗
t (α)
#
− Eθθθ[p∗
N (α)]
61

According to the envelope theorem, we have:
∂V ∗
∂α = Eθθθ
"N X
t=1
x∗
t (α)
#
Eθθθ
h
PN
t=1 x∗
t (α)
i
denotes the agent’s expected total working period under the optimal
mechanism. When the optimal mechanism is not the always-working mechanism, the
agent’s expected total working period is strictly less than N . Therefore, ∂V ∗
∂α < N when
V ∗ ̸= V aw.
A.17 Proof of Theorem 2
Proof. To begin with, we examine some properties of the principal’s expected payoff. First,
Proposition 5 demonstrates that V ∗ always exists. However, V naw may not exist. This is
due to the fact that excluding the always-working mechanism renders the set of feasible
thresholds non-compact; the removal of a single point causes the set of feasible thresholds
to become non-closed. As a result, a restricted optimal mechanism may not exist in such
cases. When it does not exist, V naw is considered to be undefined.
Second, whenever V naw exists, it must equal V ∗. Assume, for contradiction, that V naw
exists but V ∗ = V aw > V naw. Let ∆ denote the difference between V aw and V naw. Since
the always-working mechanism is an extreme point of the compact set of feasible mech
anisms and the principal’s expected payoff is continuous with respect to each threshold,
there must exist a non-always-working mechanism whose expected payoff is arbitrarily
close to V aw. Specifically, there must be some ε < ∆ such that a non-always-working
mechanism achieves an expected payoff within ε of V aw. This contradicts the assumption
that V naw is the maximum expected payoff among all non-always-working mechanisms.
Therefore, V naw must equal V ∗ whenever it exists.
Third, V naw exists and equals V ∗ when α < θ ̄, since the always-working mechanism
cannot be optimal in this case. Suppose, for contradiction, that the always-working mech
anism is optimal. Consider decreasing the last threshold cN (1N−1) from θ ̄ to α. It can be
verified that U ∗
1 (θ ̄) remains unchanged at 0, while the principal’s expected payoff strictly
increases. 44 This contradicts the assumption that the always-working mechanism is op
44This is because the first-order condition of the principal’s expected payoff with respect to cN (1N−1) is f (cN )(α − cN ), which indicates that the principal’s expected payoff is maximized when cN = α.
62

timal. Therefore, since an optimal mechanism exists by Proposition 5, we conclude that
V naw = V ∗ when α < θ ̄.
Figure 2 illustrates the principal’s expected payoff under different mechanisms. The
payoff under the always-working mechanism is given by α ·N −[θ ̄+(N −1)·E(θ)], which
is a linear and hence continuous function of α. According to Theorem 1, when α ≥ θ ̄, the
optimal non-always-working mechanism, if it exists, is a consecutive-working menu. This
means that if α ≥ θ ̄, the optimal mechanism is a consecutive-working menu whenever
V ∗ exceeds V aw, and it is an always-working mechanism when V ∗ = V aw. Furthermore,
Lemma 5 indicates that Assumption 2 guarantees that V naw = V cm exists and is strictly
greater than V aw when α = θ ̄. Therefore, by the continuity of V ∗ established in Proposition
5, if the optimal mechanism is ever an always-working mechanism, this occurs for α > θ ̄.
Consequently, there exists a range of α to the right of θ ̄ such that the optimal mechanism is
a consecutive-working menu.
To demonstrate that if the optimal mechanism switches to the always-working mech
anism, it will not switch back to a consecutive-working menu, consider the following ar
gument. Assume, for contradiction, that the optimal mechanism switches to the always
working mechanism at αˆ and then switches back to a consecutive-working menu at some
α′ > θˆ, as depicted in Figure 5. By the continuity of V ∗, we have V ∗ = V aw at α′. Since
the optimal mechanism switches back to a consecutive-working menu at α′, there must ex
ist some α′′ > α′ such that V ∗ is strictly greater than V aw for α ∈ (αˆ, α′′]. By Proposition
5, V ∗ is absolutely continuous, and thus we have:
V ∗(α′′) − V ∗(α′) =
Z α′′
α′
dV ∗
dα dα.
For V aw, which is linear with respect to α, we have:
V aw(α′′) − V aw(α′) =
Z α′′
α′
N dα.
63

Subtracting the second equation from the first gives:
V ∗(α′′) − V ∗(α′) − (V aw(α′′) − V aw(α′))
= V ∗(α′′) − V aw(α′′)
=
Z α′′
α′
dV ∗
dα − N dα
<0
The first equality follows from the fact that V ∗ = V aw at α′. The inequality follows from
Lemma 9, which establishes that dV ∗
dα < N whenever V ∗ ̸= V aw. This inequality contra
dicts the fact that V ∗ > V aw at α′′.45 Therefore, once the optimal mechanism switches to
the always-working mechanism, it cannot switch back to a consecutive-working menu.
α
E[V ]
always working
θ
θ αˆ α′ α′′
not-always working
consecutive working
Figure 5: Counter example
Thus far, we have demonstrated that if the optimal mechanism transitions to the always
working mechanism, this transition occurs only once, and it does not revert to a consecutive
working menu. Next, we provide an example to illustrate that the optimal mechanism in
45Here, we do not directly compare the derivatives of V aw and V cm with respect to α at α′ because V cm might not exist at α′. Even if V cm does exist at this point, its differentiability is not guaranteed. We only know that when it exists, it is differentiable almost everywhere.
64

deed switches to the always-working mechanism for sufficiently large α. According to
Lemma 5, the derivative of V ∗ with respect to c1 can be expressed as:
f (c1)
h
M − F (c1)
f (c1) − c1
i
Here, M is a function of α and is defined as follows:
M = α · N − T ∗(0) − (N − 1)E(θ) − u∗
1(θ ̄) + P ∗(0)
where T ∗(0) is the expected total working period when the agent shirks in the first period,
so it is at most N − 1. Consequently, N − T ∗(0) ≥ 1. Thus, we have
M ≥ α − (N − 1)E(θ) − u∗
1(θ ̄) + P ∗(0)
> α − (N − 1)E(θ) −
N
X
i=t
Z ct(0)
θ
F (θ)dθ
> α − (N − 1)E(θ) −
N
X
i=t
Z θ ̄
θ
F (θ)dθ
= α − (N − 1) · θ ̄
where the second inequality arises because P ∗(0) > 0 and u∗
1(θ ̄) ≤ PN
i=t
R ct(0)
θ F (θ)dθ.
Specifically, u∗
1(θ ̄) = 0 under the always-working mechanism, and u∗
1(θ ̄) = PN
i=t
R ct(0)
θ F (θ)dθ
under the consecutive-working menu. The last inequality follows from the fact that ct(0) <
θ ̄ for all t ∈ N under the consecutive-working menu. The last equality is due to R θ ̄
θ F (θ)dθ =
θ ̄−E(θ). Thus, M is strictly greater than α−(N −1)·θ ̄. Additionally, the function F (c1)
f (c1) +c1
is continuous and increasing by Assumption 2. Therefore, we have
f (c1)
h
M − F (c1)
f (c1) − c1
i
>f (c1)
h
α − (N − 1) · θ ̄ − F (θ ̄)
f (θ ̄) − θ ̄
i
When α exceeds (N −1)·θ ̄+ F (θ ̄)
f(θ ̄) +θ ̄, the derivative is positive for all c1 ∈ Θ. This indicates
that the principal’s expected payoff is strictly increasing in c1 on the support, implying that
c∗
1 = θ ̄, which corresponds to the always-working mechanism. Therefore, the optimal
mechanism will eventually switch to the always-working mechanism for sufficiently large
65

values of α.
In conclusion, the optimal mechanism switches once and only once to the always
working mechanism at αˆ. Specifically, the optimal mechanism is a consecutive-working
menu when α ∈ [θ ̄, αˆ), and it becomes an always-working mechanism when α ≥ αˆ.
A.18 Proof of Proposition 6
Proof. To start with, let’s show that in the optimal deterministic mechanism, the threshold
c∗
1 is greater than xSB, where xSB is the optimal threshold when there is only one period 46.
When N = 1, then the optimization problem is:
max
x1(θ1)
Z θ ̄
θ
h
α − θ1 − F (θ1)
f (θ1)
i
x1(θ1)f (θ1)dθ1
Denote θ + F (θ)
f(θ) by G(θ), which is increasing according to Assumption 2. The optimal
action rule is:
x1(θ1) =



0, if G(θ1) > α
1, if G(θ1) ≤ α
Then, the optimal threshold is: xSB = G−1(α).
Let’s return to the multiple-period case under deterministic rules. According to Lemma
5, ∂V
∂c1 = f (c1)
h
M − F (c1)
f (c1) − c1
i
, where M = α · N − (N − 1)E(θ) + u∗
1(θ ̄) − α · T ∗(0) −
P ∗(0) . When the optimal deterministic mechanism is a consecutive-working menu, then
c∗
1 = G−1(M ), which is interior. We now aim to show that c∗
1 > xSB, which is equivalent
to showing that M > α. This is true because M can be rewritten as:
M =α+
n
α · (N − 1) − (N − 1)E(θ) − u∗
1(θ ̄) − α · T ∗(0) − P ∗(0)
o
= α + (Vˆ (1) − Vˆ (0))
>α
The inequality holds because, conditional on the same u∗
1(θ ̄), the principal can achieve the
first best in every subsequent period if the agent works in the first period. The inequality is
46The abbreviation SB stands for “second best”.
66

strict, because if the agent shirks in the first period, the principal’s expected payoff is strictly
less than the first best given that the threshold for starting to work in every subsequent
period is interior. Thus, c∗
1 > xSB.
Next, to show that there exist stochastic mechanisms that outperform the optimal de
terministic mechanism, consider alternating the optimal deterministic mechanism with the
following stochastic one. The stochastic mechanism retains the same action and payment
rules as the optimal deterministic mechanism for θ1 below c∗
1. For θ1 above the threshold
c∗
1, the action rule in the first period is changed as follows:
q1(θ1) =



1, if θ1 ∈ [θ, xSB)
1 − ε, if θ1 ∈ [xSB, c∗
1]
.
Here, we modify the recommended action from always working for types below c∗
1 to al
ways working for types below xSB and working with probability 1−ε for types in [xSB, c∗
1],
where ε is a small positive number. Let u∗
1(θ ̄) denote the u1(θ ̄) in the optimal deterministic
mechanism. 47 In this context, ε can be any number in (0, u∗
1 (θ ̄)
θ ̄−E(θ) ].Furthermore, the action
rules in subsequent periods for θ1 ∈ [θ, c∗
1] remain the same as in the optimal deterministic
mechanism for both realizations of x ̃1, i.e., working in every period (qt = 1 for all t). The
payment rule for θ1 ∈ [θ, xSB) is adjusted to:
pN = θ1 +
Z θ ̄
θ1
q1(θ1)dθ1 + u∗
1(θ ̄) + (N − 1)E(θ).
For θ1 ∈ [xSB, c∗
1], since x ̃1 is a random variable, we need to specify the corresponding
payments for both realizations of x ̃1. Let the payment rule be as follows:
pN =



θ1 + (N − 1)E(θ), if x1 = 1
u∗
1(θ ̄)+R θ ̄
θ1 q1(θ1)dθ1
ε + (N − 1)E(θ), if x1 = 0
We then verify the feasibility of this stochastic mechanism, i.e., the periodic IC and the
periodic ex-post IR constraints are satisfied, by discussing the following three cases:
Case 1: θ1 ∈/ [θ, xSB) and t > 1. Both the action rules and the payment rule remain the
same as the optimal deterministic mechanism. Thus, the periodic IC and IR constraints are
47u1∗(θ ̄) = PN
i=n
R c∗
i (0)
θ F (θi)dθi, where c∗
i (0) are from the original deterministic mechanism.
67

identical to those in the optimal deterministic mechanism and therefore are satisfied.
Case 2: θ1 ∈ [θ, xSB) and t > 1. Here, the agent is prescribed to work for all cost real
izations. Since the final payment does not depend on θt for all t > 1, thus, the periodic IC
constraints are trivially satisfied. For the periodic IR constraint with x1 = 1 in period t, we
have:
−θt − (N − t)E(θ) + pN ≥ − θt − (N − t)E(θ) + θ1 + (N − 1)E(θ)
=θ1 + (t − 1)E(θ) − θt
≥θ + E(θ) − θ ̄
≥0
The final inequality follows from Assumption 1. For the periodic IR constraint with x1 = 0
in period t, we have
−θt − (N − t)E(θ) + u∗
1(θ ̄) + R θ ̄
θ1 q1(θ1)dθ1
ε + (N − 1)E(θ) ≥ 0
⇔ u∗
1(θ ̄) + R θ ̄
θ1 q1(θ1)dθ1
ε + (t − 1)E(θ) ≥ θt
Given that ε is chosen from (0, u∗
1 (θ ̄)
θ ̄−E(θ) ], it follows that u∗
1(θ ̄)+R θ ̄
θ1 q1(θ1)dθ1
ε > θ ̄ − E(θ). Thus,
the left-hand side of the inequality is greater than θ ̄+ (t − 2)E(θ), which exceeds θ ̄. There
fore, the periodic IR constraint for x1 = 0 is also satisfied.
Case 3: t = 1. IC constraint in the first period requires that u1(θ1) = u1(θ ̄)+R θ ̄
θ1 q1(θ1)dθ1.
When θ1 ∈ (c∗
1, θ ̄], by construction, u1(θ1) = u∗
1(θ ̄). Thus, we need to verify that for
θ1 ∈ [θ, c∗
1], u1(θ1) = u∗
1(θ ̄) + R θ ̄
θ1 q1(θ1)dθ1. Specifically, for θ1 ∈ [θ, xSB), we have:
u1(θ1) = pN (hN ) − θ1 − (N − 1)E(θ)
= θ1 +
Z θ ̄
θ1
q1(θ1)dθ1 + u∗
1(θ ̄) + (N − 1)E(θ) − θ1 − (N − 1)E(θ)
= u∗
1(θ ̄) +
Z θ ̄
θ1
q1(θ1)dθ1
68

For θ1 ∈ [xSB, c∗
1], we have:
u1(θ1) = q1(θ1) ·
n
final payment if x1 = 1
z }| {
θ1 + (N − 1)E(θ) −
expected total work cost if x1 = 1
z }| {
θ1 + (N − 1)E(θ)
o
+
(1 − q1(θ1)) ·
h
final payment if x1 = 0
z }| {
u∗
1(θ ̄) + R θ ̄
θ1 q1(θ1)dθ1
ε + (N − 1)E(θ) −
expected total work cost if x1 = 0
z }| {
(N − 1)E(θ)
i
= (1 − q1(θ1)) · u∗
1(θ ̄) + R θ ̄
θ1 q1(θ1)dθ1
ε
= ε · u∗
1(θ ̄) + R θ ̄
θ1 q1(θ1)dθ1
ε
= u∗
1(θ ̄) +
Z θ ̄
θ1
q1(θ1)dθ1
Thus, the IC constraints in the first period are satisfied. Next, we need to verify that the IR
constraints in the first period are satisfied. This is straightforward because u1(θ1) = u∗
1(θ ̄)+
R θ ̄
θ1 x1(θ1)dθ1, which is always at least u∗
1(θ ̄). Since u∗
1(θ ̄) is positive, the IR constraints are
met.
Lastly, we need to demonstrate that the principal’s expected payoff strictly increases
under this stochastic mechanism. The change in the principal’s expected payoff is:
∆=
Saved payment from types θ1 ∈ [θ, xSB )
z }| {
F (xSB) · ε · (c∗
1 − xSB) +
Saved payment from types θ1 ∈ [xSB , c∗
1]
z }| {
(F (c∗
1) − F (xSB)) · ε · c∗
1
−α·
Reduced working time
z }| {
ε · (F (c∗
1) − F (xSB))
=ε·
n
F (c∗
1) · c∗
1 − αF (c∗
1) − F (xSB) · xSB − αF (xSB))
o
Let H(θ) = F (θ) · θ − αF (θ). Then, ∆ = ε(H(c∗
1) − H(xSB)). We have:
∂ H (θ)
∂θ = f (θ) θ + F (θ)
f (θ) − α = f (θ)(G(θ) − α)
Since G(θ) is increasing and G(xSB) = α. It follows that f (θ)(G(θ) − α) ≥ 0 for θ ∈
(xSB, c∗
1]. Therefore, H(θ) is increasing in (xSB, c∗
1]. Hence, ∆ > 0.48 This completes the
48The inequality must be strict. If it were not, then G(θ) = α for all θ ∈ (xSB, c1∗], which contradicts the
69

proof.
A.19 Proof of Proposition 7
Proof. First, similar to the deterministic case, IC end envelope theorem imply that, for any
given history ht−1 and wt−1, we have:
ut(ht−1, wt−1; θt) = ut(ht−1, wt−1; θ ̄) +
Z θ ̄
θt
qt(ht−1, wt−1; θt)dθt
In addition, by definition, ut(ht−1, wt−1; θt) can also be expressed as:
ut(ht−1, wt−1; θt)
=qt(ht−1, wt−1; θt) · ut(ht−1, wt−1; θt, xt = 1) + (1 − qt(ht−1, wt−1; θt)) · ut(ht−1, wt−1; θt, xt = 0)
=qt(ht−1, wt−1; θt)
"
− θt + ut+1(ht, (wt−1, 1); θ ̄) +
Z θ ̄
θ
Z θ ̄
θt+1
qt+1(ht, (wt−1, 1); θt+1)dθt+1dF (θt+1)
#
+
(1 − qt(ht−1, wt−1; θt))
"
ut+1(ht, (wt−1, 0); θ ̄) +
Z θ ̄
θ
Z θ ̄
θt+1
qt+1(ht, (wt−1, 0); θt+1)dθt+1dF (θt+1)
#
=qt(ht−1, wt−1; θt)
"
− θt + ut+1(ht, (wt−1, 1); θ ̄) +
Z θ ̄
θ
F (θt+1)xt+1(ht, (wt−1, 1); θt+1)dθt+1
#
+
(1 − qt(ht−1, wt−1; θt))
"
ut+1(ht, (wt−1, 0), θ ̄) +
Z θ ̄
θ
F (θt+1)xt+1(ht, (wt−1, 0); θt+1)dθt+1
#
Therefore, we have:
ut(ht−1, wt−1; θ ̄) +
Z θ ̄
θt
qt(ht−1, wt−1; θt)dθt =
qt(ht−1, wt−1; θt)
"
− θt + ut+1(ht, (wt−1, 1); θ ̄) +
Z θ ̄
θ
F (θt+1)xt+1(ht, (wt−1, 1); θt+1)dθt+1
#
+
(1 − qt(ht−1, wt−1; θt))
"
ut+1(ht, (wt−1, 0), θ ̄) +
Z θ ̄
θ
F (θt+1)xt+1(ht, (wt−1, 0); θt+1)dθt+1
#
It implies that, for any given history, ut(ht−1, wt−1; θ ̄) is no longer uniquely determined
by the action rules and ut−1(ht−2, wt−2; θ ̄). Specifically, we no longer have a one-to
fact that G(θ ̄) > M > α as ensure by Assumption 2.
70

one mapping between ut(ht−1, θ ̄) and ut+1(ht, θ ̄) as in the deterministic case. Instead,
ut(ht−1, wt−1; θ ̄) maps to two constants: ut+1(ht, (wt−1, 1); θ ̄) and ut+1(ht, (wt−1, 0); θ ̄).
As long as the above relationship holds, and all the periodic IC and IR constraints are sat
isfied, any set of
n
ut+1(ht, (wt−1, 1); θ ̄), ut+1(ht, (wt−1, 0); θ ̄)
o
can be implementable. We
argue that the optimal way to implement the action rule is to set the following equal to zero:
ut(ht−1, wt−1; θt, x ̃t = 1) = −θt+ut+1(ht, (wt−1, 1), θ ̄)+
Z θ ̄
θ
F (θt+1)qt+1(ht, (wt−1, 1), θt+1)dθt+1
(17)
First, let’s verify that setting (17) to zero is without loss. This is because the principal
can still achieve the first best in all subsequent periods when xt = 1.49 Specifically, the
principal provides a final payment of θt + (N − t)E(θ) to the agent and assigns him to
work for sure in all subsequent periods. This approach is feasible as all the periodic IR
constraints hold under Assumption 1. It can be seen as the principal achieving the first best
by paying the agent the average cost and ensuring that he works for sure in all subsequent
periods. By setting (17) to zero, the principal effectively transfers all the informational rent
needed to induce the agent to work in periods before (and including) period t to the case
where the agent shirks in period t, he information rent in this scenario equals:
ut(ht−1, wt−1; θ ̄) + R θ ̄
θt qt(ht−1, wt−1; θt)dθt
1 − qt(ht−1, wt−1; θt) (18)
We can add this additional amount to the final payment for all future realizations after
xt = 0. It is intuitive that the action and payment rules that were previously implementable
remain implementable after increasing the final payments. Specifically, all the IC con
straints continue to hold as before, since the incremental payment applies to all future
realizations and does not affect future incentives. Moreover, the IR constraints are relaxed
when we increase the final payments. Therefore, it is without loss of generality to transfer
all the information rent to the case when the agent shirks in period t.
Next, we need to show that the principal can sometimes be strictly better off when
ut(ht−1, wt−1; θt, xt = 1) is set to zero. If the first-best outcome is already achieved after
xt = 0, then transfering the promised information rents won’t have a bite. However, if the
first-best outcome is not achieved, doing so can strictly increase the principal’s expected
49We use the term “still” here because it’s straightforward to verify that the principal can more easily achieve the first best when ut(ht−1, wt−1; θt, x ̃t = 1) ≥ 0.
71

payoff. In this scenario, there must exist some θt+1 such that qt+1(ht, (wt, 0); θt) ̸= 1. Let
∆ denote the increase in payment for the case when xt = 0 after setting (17) to zero. We
can then consider adjusting qt+1 as illustrated by the following graph.
θt+1
qt+1
1
0 θ θ′ θ′′ θ
We extend the largest type such that qt+1 = 1 from θ′ to a larger type θ′′ such that
R θ′′
θ′ (1 − qt+1)F (θt+1)dθt+1 = ∆.50 We keep all future action rules unchanged and leave
the final payments the same for θt+1 ∈ (θ′′, θ ̄]. For θt+1 ∈ [θ, θ′′], we increase the final
payments by (1 − qt+1(θt+1)) · θt+1 + R θ′′
θt+1(1 − qt+1(θt+1))dθt+1. After this adjustment, the
increase in the principal’s expected payment is:
Z θ′′
θ
h
(1 − qt+1(θt+1)) · θt+1 +
Z θ′′
θt+1
(1 − qt+1(θt+1))dθt+1
i
dF (θt+1)
=
Z θ′′
θ
(1 − qt+1(θt+1)) · θt+1dF (θt+1) +
Z θ′′
θ
Z θ′′
θt+1
(1 − qt+1(θt+1))dθt+1dF (θt+1)
=
Z θ′′
θ
(1 − qt+1(θt+1)) · θt+1f (θt+1)dθt+1 +
Z θ′′
θ
(1 − qt+1(θt+1))F (θt+1)dθt+1
=
Z θ′′
θ
(1 − qt+1(θt+1)) · θt+1f (θt+1)dθt+1 + ∆
The term ∆ is covered by the promised information rent shifted from the case when xt = 1
to the case when xt = 0. Therefore, the out-of-pocket extra payment is R θ′′
θ (1−qt+1(θt+1))·
θt+1f (θt+1)dθt+1. Meanwhile, the principal’s expected gain from the agent’s additional
working time is
α·
Z θ′′
θ
(1 − qt+1(θt+1))f (θt+1)dθt+1
50If such θ′ does not exist, then we extend from θ.
72

Since α ≥ θ ̄, this gain exceeds the expected extra payment, making the principal strictly
better off.
Next, we need to demonstrate the feasibility of this modification. This adjustment
maintains all future IC constraints, as it does not affect future incentives. For period t + 1,
the payments are adjusted so that the envelope expression for the expected payoff still
holds. For periods before t + 1, IC constraints remain unaffected because the agent’s
expected payoffs involving the path of ht and wt remain unchanged. Specifically, after the
adjustment, the agent’s expected cost increases by R θ′′
θ (1 − qt+1(θt+1)) · θt+1f (θt+1)dθt+1,
and he is compensated for exactly this amount.
For participation constraints. The current and all future periodic IR constraints for
θt+1 ∈ (θ′′, θ ̄] remain unchanged. For θt+1 ∈ [θ, θ′′], the agent is assigned to work with
higher probability but is compensated for the additional cost (1 − xt+1(θt+1)) · θt+1. In
fact, the agent receives extra information rent amounting to R θ′′
θt+1 (1 − xt+1(θt+1))dθt+1.
Consequently, both the current and all future periodic IR constraints are relaxed. The IR
constraints before period t + 1 are unaffected since the agent’s expected payoffs in earlier
periods remain unchanged. Thus, the modification is feasible. This completes the proof.
73

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:37.980Z
- **Text Length:** 141488 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 73 of 73
