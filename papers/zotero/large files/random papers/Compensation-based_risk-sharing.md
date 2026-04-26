# PDF Document: Dhaene et al. - 2025 - Compensation-based risk-sharing.pdf

**File Path:** Dhaene et al. - 2025 - Compensation-based risk-sharing.pdf

**Processed Date:** 2026-02-10T18:18:09.856Z

**File Size:** 431.94 KB

**Total Pages:** 35

**Extracted Pages:** 35

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3533

**Title:** Compensation-based risk-sharing

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Compensation-based risk-sharing
Jan Dhaene∗ Atibhav Chaudhry† Ka Chun Cheung‡
Austin Riis-Due§
November 18, 2025
Abstract
This paper studies the mathematical problem of allocating payouts (compensations) in an endowment contingency fund using a risk-sharing rule that satisfies full allocation. Besides the participants, an administrator manages the fund by collecting ex-ante contributions to establish the fund and distributing ex-post payouts to members. Two types of administrators are considered. An ‘active’ administrator both invests in the fund and receives the payout of the fund when no participant receives a payo-
ut. A ‘passive’ administrator performs only administrative tasks and neither invests in nor receives a payout from the fund. We analyze the actuarial fairness of both compensation-based risk-sharing schemes and provide general conditions under which fairness is achieved. The results extend earlier work by Denuit and Robert (2025) and Dhaene and Milevsky (2024), who focused on payouts based on Bernoulli distributions, by allowing for general non-negative loss distributions.
Keywords: decentralized insurance; centralized insurance; P2P insurance; compensationbased risk-sharing; contribution-based risk-sharing; tontines.
1 Centralized vs. decentralized risk-pooling
Consider a group of n individuals observed at time 0, each of them exposed to a nonnegative random loss at time 1. This loss can be related to a well-defined peril (e.g., hospitalization-related or critical illness-related expenses), or it can be expressed as a deterministic claim payment contingent on the occurrence of a well-defined event (e.g., a deterministic payment contingent on death or survival).
∗jan.dhaene@kuleuven.be, KU Leuven, Belgium †atibhav.chaudhry@kuleuven.be, University of Melbourne, Australia and KU Leuven, Belgium ‡kccg@hku.hk, University of Hong Kong, Hong Kong §austincarter.riis-due@uwaterloo.ca, University of Waterloo, Canada
1
arXiv:2510.19511v3 [q-fin.RM] 16 Nov 2025

In the classical insurance approach, individuals involve an insurer and each of them buys an insurance contract at time 0, which entitles them to their respective observed losses at time 1. Every policyholder is compensated ex-post (at time 1) for his experienced loss. In return for this coverage, the insurer charges each policyholder an ex-ante insurance premium (at time 0). In such an insurance coverage, the aggregate risk (randomness) of the insurance portfolio is taken over by the insurer. Th-
is risk transfer is possible if the pool consists of a sufficient number of mutually independent and homogeneous risks, with premiums being calculated in a conservative way. In addition, the insurer sets up solvency capital for the case that the collected premiums turn out to be insufficient to cover the guaranteed claims. Premiums and solvency capital are chosen so that the probability of the event that the sum of all accumulated premiums and solvency capital exceeds the aggregate claims of the i-
nsurance portfolio is sufficiently large (e.g., 99.5%). Classical insurance as described above is a form of centralized risk transfer, meaning that it is a risk-transfer mechanism in which individual losses faced by policyholders are transferred to a central insurer who guarantees that losses will be paid. In exchange, policyholders pay a risk premium and compensate the insurer’s shareholders by providing a return on the capital they set aside to maintain the insurer’s guarantee.
Instead of a transfer of the aggregate risk of the pool to a central insurer (guarantor), individuals can opt for a so-called decentralized risk-sharing approach, where individuals do not transfer the aggregate losses to a guarantor but keep the aggregate risk within the pool, without generating or creating any solvency risk. Examples of such approaches can be found in Abdikerimova and Feng (2022) and the references therein. One way to achieve this goal is that the premiums at time 0 of the classi-
cal centralized approach are replaced by time 1 contributions: Each participant in the risk-sharing pool is fully compensated for his loss at time 1, but in return he pays a contribution to the pool at time 1. These contributions are time 1 measurable random variables, chosen at time 0. The risk-sharing scheme is set up such that the sum of all contributions paid at time 1 by the participants is exactly equal to the sum of all losses covered by the pool. This constraint is called the full allocati-
on condition. In other words, participants contribute at time 1, by sharing total losses once they have been observed. Following Dhaene and Milevsky (2024), we call such a decentralized approach contribution-based risk-sharing.
A simple example of such a risk-sharing approach is the uniform risk-sharing rule, where each participant’s contribution is set equal to the observed aggregate losses of the pool, divided by the number of participants. Other examples of contribution-based risk-sharing are the conditional-mean risk sharing scheme, introduced in the actuarial literature in Denuit and Dhaene (2012), and the quantile risk-sharing scheme introduced in Denuit, Dhaene and Robert (2022). The properties of contribution-bas-
ed risk-sharing rules have been investigated in detail in Denuit, Dhaene and Robert (2022) and Denuit, Dhaene, Ghossoub and Robert (2025), among others. An axiomatic characterization of the conditional mean risk-sharing rule is given in Jiao, Kou, Liu and Wang (2023), while an axiomatic characterization of the quantile risk-sharing rule is considered in Dhaene, Cheung, Robert and Denuit (2025). Axiomatic characterizations of some simple risksharing rules, including the uniform rule, are presented -
in Dhaene, Kazzi and Valdez (2025).
2

Decentralized risk-sharing can also be constructed in another way. Indeed, suppose again that all participants are exposed to a random non-negative loss at time 1. Each of them invests an amount at time 0 to set up a so-called ‘endowment contingency fund’. At time 1, the total fund value is shared among all participants. The relative part that each participant will receive is a time 1 observable random variable, determined at time 0 as a well-defined function of the claims and eventually also of -
other information that will be observable at time 1. Solvency is guaranteed by the full allocation condition which states that the sum of all payments to the participants at time 1 is equal to the fund value at time 1. The aim of an ‘endowment contingency fund’ is to provide participants with a cheaper and effective protection, compared to commercial insurance. The term ‘endowment’ indicates that it is an investment portfolio with initial capital deriving from cash inflows, whereas the term ‘conti-
ngency’ means that the payments out of this fund are contingent on the realization of certain random events. For each individual participant, the coverage ratio (i.e., compensation over claim) depends on the initial investments and the observed losses of all participants. A participant may not receive his observed loss, i.e., he might not be fully compensated for his loss, or even receive more than his loss. In this setting, the time 1 payments can be considered as a kind of compensation for the o-
ccurred losses. Therefore, Dhaene and Milevsky (2024) call the time 1 payments from the fund to the participants the compensations, and they baptize this decentralized risk-sharing approach compensation-based risk-sharing.
As a simple example of the compensation-based approach, consider the risk-sharing scheme where at time 1, each participant receives a compensation which is proportional to his observed loss. The proportionality factor, which is observable at time 1, is assumed to be equal for all participants and follows from the full allocation condition.
Special cases of compensation-based risk-sharing schemes have been investigated in several actuarial papers, including Denuit and Robert (2025), Dhaene and Milevsky (2024) and Bernard, Feliciangeli and Vanduffel (2025), where only two-point distributed losses (indicator random variables) have been considered. In the current paper, we generalize the approach set up in these papers to include general losses and further explore properties of general compensation-based risk-sharing schemes. Our genera-
lization broadens the applicability of such schemes to a wider range of insurance types with random claim severity, for example, homeowners and automobile insurance. We analyze the role of an administrator in such schemes and compare frameworks with an active and a passive administrator.
All random variables considered in this paper are defined on the probability space (Ω, F, P). The set of all non-negative random variables on (Ω, F, P) is denoted by L0
+. Throughout this paper, the term ‘positive’ is used for ‘strictly larger than zero’. The set of non-negative real numbers is denoted by R+.
3

2 Compensation-based risk-sharing with an active ad
ministrator
In this paper, we introduce and investigate a general type of fully-funded risk-sharing (further abbreviated as RS) mechanisms, where n participants decide to mutually invest and set up a so-called ‘contingency endowment fund’. At the beginning of the investment period, each participant i makes an initial (non-negative) investment πi in the fund (similar to paying an initial insurance premium). Throughout this paper, we always implicitly assume that at least one of these investments is positive, w-
hich means that for at least one participant i, i = 1, 2, . . . , n, one has that πi > 0. The beginning of the investment period is denoted by time 0, and also referred to as ‘now’. The end of the investment period is denoted by time 1, also referred to as ‘the end of the year’. In practice, these investments will be supplemented with fees to cover expenses, but we assume that the investments πi are net investments, after fees for expenses have been paid. In this case, we do not further have to ta-
ke these fees into account in our analysis.
Our objective is to investigate fair methods for the participants to divide the total initial investment among themselves at time 1. To be more precise, at time 0, the time 1 observable non-negative random variables Wi are chosen, where Wi stands for the part of the total fund value available at time 1 that will be attributed to the participant i at this time. Following Dhaene and Milevsky (2024), we call these amounts to be paid at time 1 the ‘compensations’ to the participants. In general, there-
 is the possibility that the time 1 realizations of all compensations Wi, i = 1, 2, . . . , n, are equal to 0. At time 0, we have to clearly specify what happens to the fund’s proceeds in this case.
Apart from the n participants, there is another agent, denoted by n + 1 and called the administrator. The role of the administrator is to collect the amounts πi at time 0, to invest them, and to distribute the compensations Wi to the n participants at time 1. Seen from time 0, the compensations to the n participants are random variables defined and agreed upon by the participants at that time. As mentioned above, it might happen that all compensations to the participants are equal to 0. We assume -
that in case this situation occurs, the administrator receives the full proceeds of the fund. On the other hand, in case the time 1 realization of the compensation of at least one participant is positive, the administrator does not receive anything. The administrator’s compensation at time 1 is denoted by Wn+1. We assume that the administrator also contributes an initial (non-negative) investment πn+1 to the fund, in return of receiving the total proceeds of the fund when Wi = 0, i = 1, 2, . . . ,-
 n.
When referring to the ‘n + 1 agents’ of a compensation-based RS scheme, we mean the n participants and the administrator. The sum of the initial investments of all agents, that is, Pn+1
j=1 πj, is equal to the total value of the fund at the beginning of the investment period. For simplicity, we assume a zero interest rate and no expenses, but our results can easily be generalized to the case of a (deterministic) investment return and expenses by assuming Pn+1
j=1 πj is the accumulated value of the investments net of expenses. Under
this assumption, the time 1 value of the investment fund is equal to Pn+1
j=1 πj. Notice that our implicit assumption that at least one of the participants’ investments is positive
4

implies that the time 1 value of the fund is always positive.
The active administrator’s time 1 claim Wn+1 on the fund can be expressed as follows:
Wn+1 =
Pn+1
j=1 πj : W1 = W2 = · · · = Wn = 0
0 : otherwise (1)
This means that the administrator receives the full proceeds of the fund if and only if all other participants receive zero compensation. Taking into account that all compensations are non-negative, the event ′W1 = W2 = . . . = Wn = 0′ is equivalent to the event
′
Pn
j=1 Wj = 0′. The random variables Pn
j=1 Wj and Wn+1 exhibit a dependency structure which is a special case of ‘countermonotonicity’, called ‘mutual exclusivity’, meaning that both random variables are non-negative, with one of them being positive implying that the other one is equal to 0. The concept of ‘mutual exclusivity’ is considered in several papers in the actuarial literature, see for example, Dhaene and Denuit (1999), Cheung and Lo (2014) and Lauzier, Lin and Wang (2024).
Introducing the random variable Pn+1, with 0 ≤ Pn+1 ≤ 1, for the proportion of the aggregate investment that will be attributed to the administrator, the compensation Wn+1 can be expressed as follows:
Wn+1 =
n+1
X
j=1
πj
!
× Pn+1, (2)
with Pn+1 = 1 : W1 = W2 = · · · = Wn = 0
0 : otherwise (3)
Introducing the random variable Pi, with 0 ≤ Pi ≤ 1, for the random proportion of the aggregate investment attributed to participant i, we have that the compensations of the participants can be expressed as
Wi =
n+1
X
j=1
πj
!
× Pi i = 1, 2, . . . , n. (4)
Taking into account (4), the random relative compensation Pn+1 attributed to the administrator can be expressed as follows:
Pn+1 = 1 : P1 = P2 = · · · = Pn = 0
0 : otherwise, (5)
or equivalently,
Pn+1 = 1
n
X
j=1
Pj = 0
!
, (6)
where 1 (A) stands for the indicator function, which is 1 if the event A occurs and 0 otherwise. This expression for Pn+1 also shows that Pn
j=1 Pj and Pn+1 are mutually exclusive.
5

Hereafter, we always assume that at time 1, the total amount of the available funds is fully distributed to the participants and the administrator, that is,
n+1
X
j=1
Pj = 1. (7)
This condition is called the full allocation condition for the compensation-based RS scheme. We also always implicitly assume that
0 < Pr [Pn+1 = 0] < 1, (8)
or equivalently, 0 < Pr [Pn+1 = 1] < 1. (9)
The assumption (8) means that the events ‘at least one participant receives a non-zero compensation’ and ‘all participants receive a zero-compensation’ have a positive probability. Taking into account that Pn+1 is Bernoulli distributed, from (9) we find that
0 < E [Pn+1] = Pr [Pn+1 = 1] < 1. (10)
From (2) it follows then that
0 < E [Wn+1] <
n+1
X
j=1
πj. (11)
Finally, from (7) and (8) we have that
0<
n
X
k=1
E [Pk] = Pr [Pn+1 = 0] < 1. (12)
We will call the administrator as described above an ‘active administrator’, where ‘active’ means that he is the ‘owner’ of the compensation Wn+1. Further in the paper, we will also introduce the ‘passive administrator’ whose compensation Wn+1 will be redistributed to the agents.
Let us now introduce the (deterministic) investment vector π, which is defined by
π = (π1, π2, . . . , πn+1) , (13)
as well as the time 1 measurable compensation vector W, defined by
W = (W1, W2, . . . , Wn+1) , (14)
and the time 1 measurable relative compensation vector P, defined by
P = P1, P2, . . . , Pn+1 . (15)
6

Taking into account the introduced vector notations, we can rewrite (2) and (4) in the following way:
W=
n+1
X
j=1
πj
!
× P . (16)
In the following definition, we introduce the set of all relative compensation vectors for the n + 1 agents.
Definition 1 The set Rn+1 is defined by
Rn+1 =
(
(P1, P2, . . . , Pn+1) ∈ (L0
+)n |
n+1
X
j=1
Pj = 1 and Pn+1 = 1
n
X
j=1
Pj = 0
!)
. (17)
The set Rn+1 consists of all (n + 1)-dimensional relative compensation vectors. Any
W = Pn+1
j=1 πj × P , where P ∈ Rn+1 is a reallocation (or redistribution) of the time 1
value of the fund between the n participants and the administrator, such that Pn
j=1 Wj
and Wn+1 are mutually exclusive. The latter condition means that the events ‘at least one Wi is positive’ and ‘Wn+1 is positive’ are mutually exclusive.
Compensation-based RS is a two-stage process. At time 0, any agent makes an initial
investment πi and their aggregate investment Pn+1
j=1 πj is reallocated by transforming
π into random vector W defined in (16), with P ∈ Rn+1. At time 1, the participants and the administrator receive the respective realizations of the compensations that were attributed to them. Hereafter, we denote the compensation Wi by Wi [π] and the compensation vector W by W [π] in case we want to emphasize that the underlying investment vector is π. Similarly, we write the relative compensation Pi by Pi [π] and the relative compensation vector P by P [π] to denote their dependence on π. When th-
e meaning is clear, we will omit the [π] in the notation.
We are now ready to define a compensation-based RS scheme with an active administrator.
Definition 2 A compensation-based risk-sharing scheme for a given group of n participants and an active administrator is a pair (π, P ), where π = (π1, π2, . . . , πn+1) is the initial investment vector, while P = (P1, P2, . . . , Pn+1) is a relative compensation vector, that is P ∈ Rn+1. Moreover, the compensations attributed to the n+1 agents are expressed by the compensation vector W , which is defined by
Wi =
n+1
X
j=1
πj
!
× Pi i = 1, 2, . . . , n + 1. (18)
A compensation-based RS scheme with an active administrator is specified by its investment vector π and its relative compensation vector P (or its compensation vector W ). The administrator is called ‘active’ in the sense that he is entitled to a random
7

compensation at time 1. Further in this paper, we will also consider a ‘passive’ administrator, who in not entitled to any random compensation at time 1. We remark that investments are known at time 0, whereas the random compensations remain unknown until they become observable at time 1. As P ∈ Rn+1, a compensation-based RS scheme with an active administrator satisfies the following full allocation condition:
n+1
X
j=1
Wj =
n+1
X
j=1
πj, (19)
which means that such an RS scheme is a fully funded system and has no insolvency issues: the total amount that will be distributed at time 1 will also be available at that time.
After having introduced compensation-based RS schemes, we can now define a compensationbased RS rule as an appropriate set of compensation-based RS schemes.
Definition 3 A compensation-based risk-sharing rule for a given group of n participants and an active administrator is a mapping P : (R+)n+1 → Rn+1 which transforms any
investment vector π in (R+)n+1 into a relative compensation vector P [π]:
π ∈ R+ n+1 → P [π] ∈ Rn+1. (20)
In this paper, when we consider a ‘RS scheme’ or a ‘RS rule’, we always mean a ‘compensation-based RS scheme’ or a ‘compensation-based RS rule’.
3 Some examples
In this section, we illustrate the concept of compensation-based RS with an active administrator with some examples.
Example 1 Suppose that each participant i of a group of n individuals is exposed to a (random) non-negative loss Xi at time 1. The n participants decide to share the risk related to these losses amongst themselves. Therefore, they appoint an administrator, called agent n + 1, and set up an RS scheme (π, P ), with
Pi = Xi
Pn+1
j=1 Xj
, i = 1, 2, . . . , n + 1, (21)
with Xn+1 defined by
Xn+1 = 1
n
X
j=1
Xj = 0
!
. (22)
It is easy to see that Xn+1 and Pn
j=1 Xj are mutually exclusive. This mutual exclusivity property implies that the denominator in (21) is never equal to 0, so that the Pi’s are
8

always well-defined. Obviously, the mutual exclusivity of Xn+1, Pn
j=1 Xj is equivalent to
the mutual exclusivity of Pn+1, Pn
j=1 Pj , which is equivalent to the mutual exclusivity
of Wn+1, Pn
j=1 Wj .
The participants in the RS scheme with relative compensation vector defined by (21) share the proceeds of the fund proportionally, where each participant’s proportion is equal to the proportion that he contributes to aggregate claims Pn+1
j=1 Xj. On the other hand, the administrator receives the full proceeds of the fund in case all participants experience a zero loss, whereas he receives nothing in the other case. Typically, insurance losses have a strictly positive probability mass at zero, implying that our assumption that Pr [Pn+1 = 1] > 0 is reasonable. Remark that the compensations Wi defined via the relative compensations (21) can be expressed as follows:
Wi =
Pn+1
j=1 πj Pn+1
j=1 Xj
× Xi, i = 1, 2, . . . , n + 1. (23)
This means that the RS scheme (π, P ) is such that each participant i is compensated the same time 1 observable proportion of his loss Xi, while the administrator receives the full proceeds of the fund in case each participant has a zero claim. This seems to be a reasonable way to distribute the total fund over the n + 1 agents, provided each agent’s initial investment πi is ‘reasonable’ or ‘fair’. In Section 4, we introduce and investigate ‘actuarially fair’ initial investments. ◁
Example 2 Consider a group of n participants. Each of them may experience a particular event of a given type in the observation period [0, 1]. Possible events include the participant’s death, survival, being hospitalized, being diagnosed with a critical illness, etc. For simplicity, hereafter we will assume that all predefined events are ‘survival to time 1’, but any other choice for the predefined events is possible. For each participant i, we introduce the indicator variable Ii, which is defined-
 by
Ii = 1 : i survives until time 1
0 : i dies before time 1 (24)
The participants appoint an active administrator and attach the following indicator variable In+1 to him:
In+1 =
n
Y
j=1
(1 − Ij) . (25)
We further introduce the notation pi = Pr [Ii = 1] and qi = Pr [Ii = 0] , i = 1, . . . , n + 1.
Obviously, Pn
j=1 Ij and In+1 are mutually exclusive. The participants decide to set up an RS scheme (π, P ), with the relative compensation vector P given by
Pi = fi × Ii
Pn+1
j=1 fj × Ij
, i = 1, 2, . . . , n + 1, (26)
9

where fi, for i = 1, 2, . . . , n + 1, are strictly positive real numbers. The RS scheme (π, P ) defined via the relative compensations (26) is a special case of the RS scheme considered in Example 1. Such RS schemes with an active administrator have been investigated in detail in Dhaene and Milevsky (2024), who investigate fair methods for the surviving participants to share the total investment among themselves if one or more survive. In case all participants pass away, the administrator receiv-
es the full proceeds of the fund. An RS scheme of this type is often called a tontine fund. Dhaene and Milevsky (2024) call fi the number of tontine shares invested in the tontine fund, and describe the RS scheme defined by (26) as a scheme where the proceeds of the fund are equally shared among all surviving tontine shares, where the total number of surviving tontine shares is given by the denominator in (26). They consider the situation where initial investments (wealth) and survival probabiliti-
es (health) vary among participants, which is called the heterogeneous case. As a special case, they also examine the situation where all participants invest the same amount and the random variables I1, I2, . . . , In are i.i.d., which they refer to as the homogeneous case. Denuit and Robert (2025) consider a similar scheme (with a passive administrator, see further), where the fi are related to (what they call) protection units from the investment fund, and where the total value of the tontine fu-
nd is divided equally among all claiming units. An essential difference between the two approaches is that Dhaene and Milevsky (2024) introduce the active administrator who contributes to the investments and will own the proceeds of the fund in case not any person survives, whereas Denuit and Robert (2025) assume a passive administrator who does not contribute to the investments, and in case nobody experiences the event under consideration, participants receive their initial investment back. We wi-
ll come back to this essential difference between the two approaches in a further section of this paper. Special cases of the RS scheme (π, P ) defined via the relative compensations (26) have been considered in several papers. Dhaene and Milevsky (2024) consider the following choices for the claiming units fi:
f DM
i = πi
pi
, i = 1, 2, . . . , n + 1. (27)
Tavin (2023) proposes the following set of fi:
fT
i = πi, i = 1, 2, . . . , n + 1. (28)
Denuit and Robert (2023) also consider the case of uniform fi:
f DR
i = 1, i = 1, 2, . . . , n + 1. (29)
Finally, in Dhaene and Milevsky (2024), the RS scheme with
fi = 1
pi
, i = 1, 2, . . . , n + 1
is also considered. Interpretations and motivations for any of these choices for the number of claiming units fi can be found in the above-mentioned papers.
10

We remark that the compensation vector W with relative compensation vector determined by (26) can be rewritten as
Wi =
Pn+1
k1 πk Pn+1
j=1 fj × Ij
!
× fi × Ii, i = 1, 2, . . . , n + 1. (30)
This means that under the RS scheme (π, P ) defined by (26), each surviving participant i is compensated the same time 1 observable proportion of his surviving shares or protection units fi. The proportion is the random payment per claiming protection unit, which is determined such that the full allocation condition is fulfilled. ◁
Example 3 Consider the loss vector (X1, X2, . . . , Xn), describing the non-negative losses of the n participants in the observation period [0, 1]. The i-th order statistic X(i) of (X1, X2, . . . , Xn) is the i-th smallest value in (X1, X2, . . . , Xn). Hence,
X(1) ≤ X(2) ≤ · · · ≤ X(n).
Furthermore, we define X(n+1) as follows:
X(n+1) = 1
n
X
j=1
Xj = 0
!
. (31)
Notice that we only consider the order statistics for the losses of the n participants. The random variable X(n+1) defined above is not an order statistic. The notation X(n+1) is introduced only to make notations uniform and simple. Suppose that the participants set up a fund in which each participant i invests an amount πi. Moreover, they appoint an administrator, who contributes the amount πn+1 to the fund. The n + 1 agents determine the compensations according to the risk-sharing scheme (π, P )-
, with relative compensation vector P determined by
Pi = X(i)
Pn+1
j=1 X(j)
, i = 1, 2, . . . , n + 1. (32)
The interpretation of this compensation-based RS scheme (π, P ) is as follows. For participants who are ordered in decreasing risk-bearing capacity (e.g., decreasing wealth or decreasing age), a lower risk-bearing capacity leads to a higher compensation. In case all participants have a zero-claim, the proceeds of the fund are fully transferred to the administrator. ◁
Example 4 Consider the vector (X1, X2, . . . , Xn), describing the non-negative losses of the n participants in the observation period [0, 1]. The participants set up a fund in which each participant i invests an amount πi. They also appoint an administrator, who contributes the amount πn+1 to the fund. The participants and the administrator decide to share the proceeds of the fund according to the RS scheme (π, P ), with the relative
11

compensation vector P being (X1, X2, . . . , Xn) - measurable. This means that the randomness of P is only due to the randomness of the vector (X1, X2, . . . , Xn). Hence, there
exist functions gi : (R+)n → R+ such that
Pi = gi (X1, X2, . . . , Xn) , i = 1, . . . , n + 1. (33)
Notice that the relative compensation vector will in general also depend on the initial investment vector π of the RS scheme (π, P ) under consideration. But as π is fixed, we do not explicitly indicate the dependence of π in the notation of the relative compensation vector. The full allocation condition (7) can now be expressed as follows:
n+1
X
i=1
gj (X1, X2, . . . , Xn) = 1.
Moreover, the relative compensation vector is assumed to satisfy
gn+1 (X1, X2, . . . , Xn) = 1
n
X
j=1
gj (X1, X2, . . . , Xn) = 0
!
, (34)
which means that Pn
i=1 gi (X1, X2, . . . , Xn) and gn+1 (X1, X2, . . . , Xn) are mutually exclusive. The RS scheme considered in Example 1 is a special case of (33), with the relative compensation vector determined from
Pi = gi (X1, X2, . . . , Xn) = Xi
Pn+1
j=1 Xj
, i = 1, . . . , n + 1,
with Xn+1 given by (22). Also the RS scheme considered in Example 2 is a special case, with the relative compensations defined by
Pi = gi (X1, X2, . . . , Xn) = fi × Ii
Pn+1
j=1 fj × Ij
, i = 1, . . . , n + 1,
with the Bernoulli random variables Ii as defined in (24) and (25). Another special case of (33) arises by making the following choice for the relative compensations:
Pi = gi (X1, X2, . . . , Xn) = X(i)
Pn+1
j=1 X(j)
, i = 1, . . . , n + 1,
where X(n+1) is defined in (31). This special case was considered in Example 3. ◁
4 Actuarial fairness of compensation-based risk-sharing
with an active administrator
4.1 Actuarially fair risk-sharing schemes
An RS scheme (π, P ) is said to be actuarially fair for the participants if the time 1 value of each participant’s initial investment πi in the fund is equal to the expected value of
12

the compensation Wi that he will receive at time 1. This means that no participant experiences a gain or loss on average by joining the pool. Actuarial fairness of particular compensation-based RS schemes has been investigated in Bernard et al. (2024), Milevsky and Dhaene (2024) and Denuit and Robert (2025), amongst others.
Definition 4 The RS scheme (π, P ) with an active administrator is actuarially fair for each participant if the following conditions hold:
πi = E [Wi] , i = 1, 2, . . . , n.
Taking into account (18), we can rewrite the actuarial fairness conditions for the n participants as
πi =
n+1
X
j=1
πj
!
× E [Pi] , i = 1, 2, . . . , n. (35)
Notice that in a real world context, the particular RS scheme that is chosen by a group of participants may depend on the social cohesion between them, ranging from solidarity to pure individualism. Especially in small pools of connected participants (e.g., family members), actuarial fairness may not be the first concern and may be replaced by a form of organized transfer, e.g., from the elder participants to the younger, or from the richer to the poorer ones. In this section however, we will furt-
her investigate actuarial fairness of RS schemes.
In our general compensation-based RS set-up with an active administrator, all proceeds of the fund are transferred to the administrator in case no participant receives a positive compensation. In return, the administrator pays an initial investment πn+1 for this benefit. Let us now define actuarial fairness for the administrator.
Definition 5 The RS scheme (π, P ) with an active administrator is actuarially fair for the active administrator if
πn+1 = E [Wn+1] .
Taking into account (10) and (18), we can rewrite this actuarial fairness condition for the administrator as follows:
πn+1 =
n+1
X
j=1
πj
!
× Pr [Pn+1 = 1] . (36)
As Pr [Pn+1 = 0] is strictly positive by assumption, see (8), the actuarial fairness condition for the administrator can also be expressed as follows:
πn+1 =
n
X
j=1
πj
!
× Pr [Pn+1 = 1]
Pr [Pn+1 = 0] . (37)
We can summarize relations (36) and (37) in the following lemma.
13

Lemma 1 If the RS scheme (π, P ) is actuarially fair for the active administrator, then we have that
n+1
X
j=1
πj = 1
Pr[Pn+1 = 0] ×
n
X
j=1
πj = 1
Pr[Pn+1 = 1] × πn+1 (38)
In case the relative compensations Pi of the participants are i.i.d., we have that
Pr [Pn+1 = 1] = Pr [P1 = P2 = · · · = Pn = 0] = (Pr [P1 = 0])n .
This means that if the number of participants n is sufficiently large, we find that Pr [Pn+1 = 1] ≈ 0 and Pr [Pn+1 = 0] ≈ 1, which implies that the actuarially fair initial investment πn+1 of the administrator is close to zero.
Let us now consider the relation between actuarial fairness for the participants and actuarial fairness for the active administrator.
Proposition 1 If the RS scheme (π, P ) is actuarially fair for the n participants, then it is also actuarially fair for the active administrator.
Proof: From the actuarial fairness conditions (35) for the n participants, we find that
n
X
k=1
πk =
n+1
X
j=1
πj
!
×
n
X
k=1
E [Pk] .
Taking into account (12) leads to the actuarial fairness condition (37) for the administrator.
From the previous proposition, we can conclude that if the RS scheme (π, P ) is not actuarially fair for the active administrator, then it can also not be actuarially fair for all participants. In particular, this situation will occur in case the administrator makes an investment of zero. This observation is further explored in the following proposition.
Proposition 2 If the active administrator of the RS scheme (π, P ) makes a zero initial investment, i.e., πn+1 = 0, then there must be at least one participant i whose investment πi exceeds his expected compensation, i.e., πi > E [Wi].
Proof: In case πn+1 = 0, we find from the full allocation condition (19) that
n
X
j=1
πj =
n+1
X
j=1
E [Wj] .
Furthermore, from (11), we have that E [Wn+1] > 0. This means that for at least one participant i, one must have that his investment exceeds his expected compensation, that is, for at least on participant i one must have that πi > E [Wi].
In the following proposition, we consider several necessary and sufficient conditions for actuarial fairness for the n + 1 agents involved in the RS scheme (π, P ).
14

Proposition 3 The RS scheme (π, P ) with active administrator is actuarially fair for the n + 1 agents if and only if any of the following conditions is satisfied: Condition 1: The RS scheme (π, P ) satisfies
πi =
n+1
X
j=1
πj
!
× E [Pi] , i = 1, 2, . . . , n + 1. (39)
Condition 2: The RS scheme (π, P ) satisfies
πi =
n
X
j=1
πj
!
× E [Pi]
Pr [Pn+1 = 0] , i = 1, 2, . . . , n + 1. (40)
Condition 3: The RS scheme (π, P ) satisfies
πi = πn+1 × E [Pi]
Pr [Pn+1 = 1] , i = 1, 2, . . . , n + 1. (41)
Proof: In order to prove the implications
Condition 1 ⇒ Condition 2 ⇒ Condition 3 ⇒ Condition 1,
it suffices to prove that each of the three conditions implies actuarial fairness for the active administrator, see Lemma 1. Obviously, Condition 1 implies actuarial fairness for the active administrator. From Condition 2, for agent n + 1, we find that
πn+1 =
n
X
j=1
πj
!
× Pr[Pn+1 = 1]
Pr[Pn+1 = 0] ,
which is equivalent with actuarial fairness for the active administrator. Summing over all agents, Condition 3 leads to:
n+1
X
j=1
πi = πn+1 × 1
Pr[Pn+1 = 1] ,
which is again equivalent with actuarial fairness for the active administrator. This ends the proof.
4.2 Risk-sharing rules and actuarial fairness
So far, we have considered the actuarial fairness of a given RS scheme (π, P ) with active administrator. Let us now consider an RS rule P with an active administrator, which transforms any investment vector π into a relative compensation vector P [π]:
π → P [π] . (42)
15

This means that any investment vector π leads to the compensation vector W [π], with
W [π] =
n+1
X
j=1
πj
!
× P [π] , (43)
see Definition 3. Let us now consider a special type of RS rules P , which satisfy the following indifference property:
P [c × π] = P [π] , for any c > 0 and any investment vector π. (44)
This means that the RS rule P is such that if all participants increase their initial investment by a constant proportion, e.g., by 20%, then their relative compensation vector remains unchanged, which seems to be a reasonable property. Obviously any RS rule of which the relative compensation vector P is independent of the initial investment vector satisfies the indifference property (44). In the following proposition, we consider contribution vectors of an RS rule P that satisfies the indifferenc-
e property (44).
Proposition 4 Consider the RS rule P with active administrator that satisfies the indifference property (44). Then for any positive c and any investment vector π, one has that
W [c × π] = c × W [π]
Proof: For any investment vector π, any c > 0 and any participant i, we find that
Wi [c × π] = c ×
n+1
X
j=1
πj
!
× Pi [c × π]
=c×
n+1
X
j=1
πj
!
× Pi [π]
= c × Wi [π] .
This ends the proof.
Suppose now that a group of participants decides to use the RS rule P with an active administrator, which satisfies the indifference property (44). The next question they have to answer is then what particular initial investment vector π to choose. It may be reasonable to select an investment vector π such that the RS scheme (π, P [π]) is actuarially fair. In the following proposition, we show that this problem has in general no unique solution.
Proposition 5 Consider the RS rule P with an active administrator satisfying the indifference property (44). Suppose that the RS scheme (π∗, P [π∗]) is actuarially fair for all participants, then for any c > 0, also the RS scheme (c × π∗, P [c × π∗]) is actuarially fair for all participants.
16

Proof: From Proposition 4, we find for any participant i that
E [Wi [c × π∗]] = c × E [Wi [π∗]] .
The actuarial fairness of (π∗, P [π∗]) can be expressed as
E [Wi [π∗]] = π∗
i , i = 1, 2, . . . , n + 1.
Combining both expressions leads to
E [Wi [c × π∗]] = c × π∗
i , i = 1, 2, . . . , n + 1,
which are the actuarial fairness conditions for (c × π∗, P [c × π∗]).
We can conclude that for any RS rule P satisfying the indifference property (44), one has that if the RS scheme (π∗, P [π∗]) is actuarially fair for all participants, then also the RS scheme (c × π∗, P [c × π∗]) is actuarially fair for all participants. This means that for such RS rules, actuarially fair investment vectors π are only defined up to a positive constant factor. For RS rules satisfying the independence property (44), Proposition 3 may be a guide for choosing the appropriate actuariall-
y fair set of initial investments: One can either first determine the level of the aggregate investments of the n+1 agents, or the level of the aggregate investment of the n participants, or the level of the individual investment of the administrator, and then determine the individual actuarial fair investments πi by the corresponding Conditions 1, 2 or 3.
Example 5 In order to illustrate the previous propositions, consider a group of n participants who are exposed to the losses X1, X2, . . . , Xn, respectively. Suppose they agree to use the RS rule P , where for any RS scheme (π, P [π]), the relative compensation vector P [π] is given by (21), as considered in Example 1:
Pi [π] = Xi
Pn+1
k=1 Xk
, i = 1, 2, . . . , n + 1,
with Xn+1 defined by (22). As the random losses X1, X2, . . . , Xn are assumed to be independent of π, we have that the relative compensation vectors of the RS rule P satisfy the indifference property (44). Let us assume that the participants decide to choose an investment vector π such that the RS scheme (π, P [π]) is actuarially fair for any of them. This means that the investment vector follows from the set of equations (39):
πi =
n+1
X
j=1
πj
!
×E
"
Xi Pn+1
k=1 Xk
#
, i = 1, 2, . . . , n + 1. (45)
In this case an actuarially fair investment vector is only defined up to a positive constant factor, that is, if π∗ is a solution of (45), then also c × π∗ is a solution, for any c > 0. Applying this RS rule in practice, we could first determine a reference solution π of (45), and in a second step, determine the investment vector c × π with c such that
17

Pr
h
c × Pn+1
j=1 πj > Pn+1
j=1 Xk
i
is sufficiently large. As an extreme case, suppose that c is
chosen such that Pr
h
c × Pn+1
j=1 πj > Pn+1
j=1 Xk
i
= 1, then we have that
Wi = c ×
n+1
X
j=1
πj
!
× Xi
Pn+1
k=1 Xk
≥ Xi, i = 1, 2, . . . , n + 1,
which means that each compensation Wi is always larger than its corresponding claim Xi in this case. ◁
Example 6 Consider the setting of Example 2 with the number of protection units fi chosen to be equal to the initial investment πi. This means that we consider the RS rule P , where for any RS scheme (π, P [π]), each participant and the administrator receive a level of compensation proportional to their initial contribution in case the predefined event occurs:
Wi [π] =
n+1
X
j=1
πj
!
× πi × Ii
Pn+1
j=1 πj × Ij
, i = 1, 2, . . . , n + 1. (46)
In these equations, the Ii are Bernouilli-distributed random variables with Pr [Ii = 1] = pi and Pr [Ii = 0] = qi].
We call this rule that was proposed in Tavin (2023) the Tavin RS rule, see (28). Obviously, the RS rule P satisfies the indifference property (44), implying that actuarially fair investments vectors are only determined up to a positive constant factor. From (46) it follows that the actuarial fairness conditions for all participants in this RS scheme (π, P [π]) can be written as follows:
1=
n+1
X
j=1
πj
!
×E
"
Ii
Pn+1
j=1 πj × Ij
#
, i = 1, 2, . . . , n + 1.
Obviously, for actuarially fair initial investments the expectations E Ii
Pn+1
j=1 πj×Ij have
to be equal for all agents. It is important to note the fact that an RS scheme which is not actuarially fair is not necessarily a ‘wrong’ choice. Suppose that two participants of different age each pay the same initial investment. Then, upon survival, they will receive the same compensation. However, the one with the higher survival probability (the younger one, let’s say) will more likely survive and hence, is favored. As clearly discussed in Tavin (2023), this RS scheme accommodates a reallocati-
on of wealth that is favorable to those who are likely to survive longer. Such a reallocation can be a valuable objective, for example, in a given small community of family members.
Example 7 Consider the Tavin RS rule P based on the RS schemes (π, P [π]) of Example 6, with two participants and an active administrator.
18

From (46) it follows that the actuarial fairness conditions for all participants can be written as follows:
1 = (π1 + π2 + π3) × E Ii
π1I1 + π2I2 + π3I3
, i = 1, 2, 3.
Let us assume that I1 and I2 are mutually independent. In this setting, we find that
E I1
π1I1 + π2I2 + π3I3
= p1p2
π1 + π2
+ p1q2
π1
,
while
E I2
π1I1 + π2I2 + π3I3
= p1p2
π1 + π2
+ p2q1
π2
and
E I3
π1I1 + π2I2 + π3I3
= q1q2
π3
.
This results in the following system of equations which characterizes the set of all initial investments (π1, π2, π3) which leads to an actuarially fair Tavin RS scheme (46)

       
       
1 = (π1 + π2 + π3) × p1p2
π1 + π2
+ p1q2
π1
1 = (π1 + π2 + π3) × p1p2
π1 + π2
+ p2q1
π2
1 = (π1 + π2 + π3) × q1q2
π3
.
(47)
(48)
(49)
From (47) and (48), we find that
π2 = p2q1
p1q2
π1, (50)
while equation (49) leads to
π1 + π2 = π3 × 1 − q1q2
q1q2
. (51)
Substituting (50) in (51) gives rise to
π1 = π3 × p1
q1
× 1 − q1q2
p1q2 + p2q1
, (52)
and also
π2 = π3 × p2
q2
× 1 − q1q2
p1q2 + p2q1
. (53)
It is easy to verify that any (π1, π2, π3) with π3 > 0 and π1 and π2 given by (52) and (53), respectively, satisfies the system of equations (47), (48) and (49). We conclude
19

that the set of all initial investments (π1, π2, π3) that lead to an actuarially fair Tavin RS scheme (46) with two participants is characterized by (52) and (53), where π3 can be any positive real number.
Example 8 We end this subsection by considering the RS rule P based on the RS schemes (π, P [π]) of Example 2, with constant number of protection units for each participant:
fi = 1, i = 1, 2, . . . , n + 1.
This means that the RS rule P is such that for any RS scheme (π, P [π]), the relative compensation vector P [π] is given by
Pi [π] = Ii
Pn+1
j=1 Ij
, i = 1, 2, . . . , n + 1. (54)
Obviously, P satisfies the indifference property (44). The RS scheme (π, P [π]) is actuarially fair for all participants if and only if the Conditions (35) are satisfied. Inspired by the approach proposed in Denuit and Robert (2025), one can verify that the expected proportions follow from
E [Pi [π]] =
n
X
k=1
1
k Pr
"
Ii = 1,
n
X
j=1
Ij = k
#
, i = 1, 2, . . . , n. (55)
In case the indicator variables Ii of the n participants are mutually independent, the expressions (55) can be transformed into
E [Pi [π]] = Pr [Ii = 1]
n
X
k=1
1
k Pr
"n X
j=1
Ij − Ii = k − 1
#
i = 1, 2, . . . , n. (56)
In this case, the expectations of the relative compensations Pi [π] follow from probabilities of events related to sums of independent Bernoulli random variables. The actuarially fair initial investments of this RS scheme follow then from Proposition 3 and from (56). Notice that for this RS rule, the actuarially fair initial investments are only defined up to a positive constant factor. The calculations above can in a straightforward way be generalized to the case that all fi are positive (not nec-
essary equal) integers, rather than all equally 1. We refer to Denuit and Robert (2025) for more details on this case. ◁
5 Compensation-based risk-sharing with a passive ad
ministrator
5.1 Introducing the passive administrator
Consider an RS scheme (π, P ) with n participants and an active administrator as defined above. The time 0 investments of the n + 1 agents are summarized in the investment
20

vector π = (π1, π2, . . . , πn+1), while the relative compensation vector is given by P = (P1, P2, . . . , Pn+1). The compensations are summarized in the compensation vector W = (W1, W2, . . . , Wn+1). The latter vector is given by
Wi =
n+1
X
j=1
πj
!
× Pi i = 1, 2, . . . , n + 1. (57)
This set up of a compensation-based RS scheme with an active administrator is a generalization of the set up in Dhaene and Milevsky (2024), who consider the RS schemes related to tontine funds, as described in Example 2.
Denuit and Robert (2025) also consider the setting of Dhaene and Milevsky (2024), but with a passive administrator who does not join the group of participants in investing. Hence, these authors assume that πn+1 = 0, implying that (without any adaptation of the compensations), such an RS scheme can never be actuarially fair, see Proposition 2. In order to include the possibility that the RS scheme is actuarialy fair for all participants, Denuit and Robert (2025) assume that in case no participant r-
eceives a positive compensation, that is, in case Pn
j=1 Pj = 0, or equivalently, Pn+1 = 1, each participant i receives back his original investment. Most papers on tontine funds in the last few years have added this element to repair expectations and hence, actuarial fairness. Hereafter, we will generalize this approach considered in Denuit and Robert (2024), in the same way as we generalized the approach of Dhaene and Milevsky (2024) in the first part of this paper. That is, we will consider risk-sharing with a passive administrator for a general -
class of compensations, instead of restricting to the tontine fund case of Example 2. Let us start by defining a compensation-based RS scheme with a passive administrator.
Definition 6 A compensation-based risk-sharing scheme for a given group of n participants and a passive administrator is a pair (π, P ), where π = (π1, π2, . . . , πn+1) is the initial investment vector with πn+1 = 0. Further, P = (P1, P2, . . . , Pn, Pn+1) is the relative compensation vector, that is P ∈ Rn+1 defined in (17), and where the compensations attributed to the n participants follow from the compensation vector W = (W1, W2, . . . , Wn+1), which is defined by
Wi =
n
X
j=1
πj
!
× Pi + πi × Pn+1 : i = 1, 2, . . . , n, (58)
whereas Wn+1 = 0.
From this definition, we see that an RS scheme (π, P ) with a passive administrator is one where each participant i invests an an amount πi and receives a relative compensation Pi of the available fund at time 1, whereas the administrator makes an investment πn+1 = 0 and receives a zero-compensation Wn+1 = 0 at time 1. Moreover, in case the relative compensations Pi of all participants are 0, or equivalently, Pn+1 = 1, every participant receives his original investment πi back. The administrator i-
s ‘passive’ in the sense that he is not involved in investing and receiving any amount of compensation based on the participant’s initial investments.
21

In order to be able to clearly distinguish between the ’active’ and the ’passive’ administrator case, see (57)and (58), hereafter we will sometimes write W active
i or W passive
i
instead of Wi for the contribution of agent i.
Taking into account that Pn+1
j=1 Pj = 1, it is a straightforward exercise to prove the following full allocation property for a compensation-based RS scheme with a passive administrator: n
X
i=1
Wi =
n
X
j=1
πj. (59)
This means that the total amount of compensations paid at time 1 is exactly equal to the fund value at that time. Hereafter, when considering an ‘RS scheme (π, P ) with a passive administrator’, we mean a ‘compensation-based RS scheme with a passive administrator’.
Example 9 Denuit and Robert (2025) and Dhaene and Milevsky (2024) discuss the above-mentioned approach with a passive administrator for the setting of Example 2, that is, in the framework of a tontine fund with πn+1 = 0. In particular, they consider the RS scheme (π, P ) with a passive administrator, where the compensation vector W is defined by (58), with relative compensation vector P given by
Pi = fi × Ii
Pn+1
j=1 fj × Ij
, i = 1, 2, . . . , n + 1, (60)
where the protection units fi and the indicator variables Ii are defined in Example 2. Dhaene and Milevsky (2024) write the following about this approach: ‘While the abovementioned approach (i.e., without an (active) administrator, and returning back the investments if no participant receives a positive compensation) resolves the mathematical problem, we believe that this isn’t why people buy tontines. Indeed, it violates the spirit of the (historical) tontine in which all rights and ownership ben-
efits are lost at death. Furthermore, some members may not have any beneficiaries, leading to yet another unintended redistribution of wealth. In extreme cases, when there is only one person surviving, this may create a moral hazard. In other words, and for many reasons, while adding a death benefit refund or payout ‘solves’ the math, it ‘ruins’ the elegance of the tontine ideal.’ As far as we are aware, Dhaene and Milevsky (2024) are the first who introduce an active tontine administrator as both-
 a technical and real-world solution to some of the above-mentioned issues, instead of artificially adding legacy or bequest payouts to participants.
5.2 Actuarially fair risk-sharing schemes with a passive admin
istrator
Similar to actuarial fairness for an RS scheme with an active administrator, the RS scheme (π, P ) with a passive administrator is said to be actuarially fair for the participants if the time 1 value of each participant’s initial investment is equal to the expected value of the compensation he will receive at time 1.
22

Definition 7 The RS scheme (π, P ) with a passive administrator is actuarially fair for all participants if the following conditions hold:
πi = E [Wi] , i = 1, 2, . . . , n. (61)
Taking into account that πn+1 = Wn+1 = 0, we find that the RS scheme is always actuarially fair for the passive administrator.
In the next proposition, another characterization is given for the actuarial fairness of an RS scheme with a passive administrator.
Proposition 6 The RS scheme (π, P ) with a passive administrator is actuarially fair for its n participants if and only if any of the following conditions is satisfied:
Condition 1: The RS scheme (π, P ) satisfies
πi =
n
X
j=1
πj
!
× E [Pi] + πi × E[Pn+1], i = 1, 2, . . . , n. (62)
Condition 2: The RS scheme (π, P ) satisfies
πi =
n
X
j=1
πj
!
× E [Pi]
Pr [Pn+1 = 0] , i = 1, 2, . . . , n. (63)
Proof: Actuarial fairness for all participants is, by definition, equivalent to Condition 1. Taking into account (10), the actuarial fairness conditions (62) can be transformed into the expressions (63).
In the following corollary, we show that under appropriate conditions, actuarially fair investments πi of the participants in a RS scheme (π, P ) with an active administrator are also actuarially fair in the corresponding RS scheme (π, P ) with a passive administrator.
Corollary 1 Consider the RS scheme ((π1, . . . , πn, πn+1), P ) with an active administrator (as defined in (57)) and the RS scheme ((π1, . . . , πn, 0), P ) with a passive administrator (as defined in (58)). Then we have that the following statements are equivalent:
(a) πi = E[W active
i ], i = 1, 2, . . . , n.
(b) πi = E[W passive
i ], i = 1, 2, . . . , n and πn+1 = E[W active
n+1 ].
Proof: Taking into account Proposition 1 and Condition 2 in Proposition 3, we can rewrite the equations (a) as follows:
πi =
n
X
j=1
πj
!
× E[Pi]
Pr[Pn+1 = 0] , i = 1, 2, . . . , n
23

and
πn+1 =
n+1
X
j=1
πj
!
× E[Pn+1].
From Condition 2 in Proposition 6, we can conclude the equations in (a) are equivalent to the equations in (b).
Notice that the only if statement of corollary above can also be proven by rewriting (57) and (58) as
W active
i=
n
X
j=1
πj
!
× Pi + πn+1 × Pi, i = 1, 2, . . . , n + 1
and
W passive
i=
n
X
j=1
πj
!
× Pi + πi × Pn+1, i = 1, 2, . . . , n.
When the participants’ contributions are actuarially fair in case of an active administrator, then from Condition 3 of Proposition 3, we have that
πn+1 × E[Pi] = πi × E[Pn+1], i = 1, . . . , n + 1.
This implies that
E[W active
i ] = E[W passive
i ], i = 1, . . . , n,
which proves the stated implication.
Suppose that the participants in an RS scheme decide to first fix their initial investments and only afterwards make the choice between an active or a passive administrator. Corollary 1 states that from an actuarial fairness point of view, both schemes are equivalent, provided the active administrator makes an actuarially fair initial investment.
5.3 Risk-sharing rules with a passive administrator
Similar to section 4.2, where we considered RS rules with an active administrator, we introduce RS rules with a passive administrator. An RS rule P with a passive administrator transforms any investment vector π into a relative compensation vector P [π]. This means that any investment vector leads to the compensation vector W [π], with
Wi[π] =
n
X
j=1
πj
!
× Pi [π] + πi × Pn+1 [π] , i = 1, 2, . . . , n. (64)
As before, we consider the indifference property (44) for RS rules with a passive administrator. It is then a straightforward exercise to prove that Propositions 4 and 5 can easily be adapted to hold for RS rules with a passive administrator. This means that for RS rules with a passive administrator, which satisfy the indifference property (44), actuarially fair investment vectors are only defined up to a positive constant factor.
24

6 The two participants tontine fund
In this section, we investigate an RS scheme related to a tontine fund with only two participants. We consider both cases of an active and a passive administrator. We investigate actuarial fairness conditions for the heterogeneous case where survival probabilities of the two participants may be different.
6.1 The two participants tontine fund with an active adminis
trator
Consider two participants who set up a tontine fund. The initial investment made by participant i, i = 1, 2, is denoted by πi, while his survival probability is given by pi = 1−qi. In addition to the two participants, also a third agent, called the active administrator, is involved. His contribution to the investment pool is denoted by π3. As before, for simplicity, we assume a zero return over the observation period.
Suppose that the participants agree on an RS rule with an active administrator, with relative compensation vector as described in Example 2, that is
Pi = fi × Ii
P3
j=1 fj × Ii
, i = 1, 2, 3, (65)
and compensations determined from
Wi = (π1 + π2 + π3) × Pi, i = 1, 2, 3. (66)
The protection units fi and the indicator variables Ii are as defined in Example 4. In particular, we have that Ii is equal to 1 in case participant i = 1, 2 survives, while it is equal to 0 otherwise. Furthermore, I3 is equal to (1 − I1) × (1 − I2).
The relative compensation vector P = (P1, P2, P3) of the RS scheme (π, P ) defined by (65) is assumed to be independent of the initial investments in the sense that the fi’s are given real numbers, independent of πi. This vector can be expressed as follows:
P=

  
  
(1, 0, 0) : if I1 = 1 and I2 = 0 (0, 1, 0) : if I1 = 0 and I2 = 1 (0, 0, 1) : if I1 = 0 and I2 = 0 (β, 1 − β, 0) : if I1 = 1 and I2 = 1
(67)
with β given by
β = f1
f1 + f2
. (68)
If participant 1 survives and participant 2 dies, the total amount of (π1 + π2 + π3) is awarded to person 1 at time 1. Similarly, if participant 1 dies while participant 2 survives, the total amount is awarded to person 2 at time 1. If no participant survives, the total proceeds (π1 + π2 + π3) belong to the administrator. If both participants survive,
25

(π1 + π2 + π3) is shared by the two participants: The first participant takes a relative share β of the available funds, while the second participant receives a relative share (1 − β) of these funds.
When setting up the tontine RS scheme, the two participants and the administrator must agree on the value of the relative share β of the total fund that participant 1 will receive if both participants survive, as well as on the investments π1, π2 and π3. Given the relative share β, the choice of the initial investments by the participants may reflect considerations about their survival probabilities. Consider, for example, uniform risksharing, that is β = 1
2 or, equivalently, f1 = f2, then equal investments may be considered as ‘unfair’ as this choice does not take into consideration that health (survival probabilities) may be different for both participants. However, notice that once the relative share β and the investments are chosen, knowledge of the survival probabilities is no longer required to be able to further manage the tontine fund.
We assume that the remaining lifetimes of the two participants are mutually independent. The probabilities of the different relevant events related to the tontine fund payouts can then be expressed as
Pr [I1 = i and I2 = j] =

  
  
p1 × q2 : if i = 1 and j = 0 q1 × p2 : if i = 0 and j = 1 q1 × q2 : if i = 0 and j = 0 p1 × p2 : if i = 1 and j = 1.
(69)
In this subsection, we want to find out what is a reasonable choice for the investments π1, π2 and π3, once the relative share β is chosen. Remark that in case ‘reasonability’ is translated into ‘actuarial fairness’, the participants have to agree on a common choice for the survival probabilities p1 and p2 to determine the compensations (also called the tontine fund payouts) Wi.
Taking into account (67) and (69), we find that the expected relative compensations E [Pi] of the participants are given by
E [P1] = p1 × (q2 + β × p2) (70)
and E [P2] = p2 × (q1 + (1 − β) × p1) , (71)
while the administrator’s expected relative compensation E [P3] is given by
E [P3] = q1 × q2.
Let us now determine the actuarially fair investments π1, π2 and π3 for the three participants. From (39), we find that the actuarial fairness conditions, which state that each agent’s investment is equal to his expected compensation, are given by



π1 = (π1 + π2 + π3) × p1 × (q2 + β × p2)
π2 = (π1 + π2 + π3) × p2 × (q1 + (1 − β) × p1) π3 = (π1 + π2 + π3) × q1 × q2.
(72)
26

Any solution (π1, π2, π3) of (72) is a set of actuarially fair initial investments. Determining such a set of investments requires a common choice for the survival probabilities of the two participants. Important to note is that even if a ‘wrong’ choice (for instance a too conservative choice) is made, there will not be an issue of insolvency, due to the full allocation condition (19), which guarantees that the sum of all tontine fund payouts (compensations) is exactly equal to the available fund-
s.
Taking into account (40) and the fact that Pr [P3 = 0] = 1 − q1 × q2, we can rewrite the actuarial fairness conditions (72) as follows:

 
 
π1 = (π1 + π2) × p1 × q2+β×p2
1−q1×q2
π2 = (π1 + π2) × p2 × q1+(1−β)×p1
1−q1×q2
π3 = (π1 + π2) × q1×q2
1−q1×q2
(73)
From (41), we find that the actuarially fairness conditions can also be expressed as follows: (
π1 = π3 × p1 × q2+β×p2
q1×q2
π2 = π3 × p2 × q1+(1−β)×p1
q1×q2
(74)
The formulas (72), (73) and (74) provide 3 different ways to determine actuarially fair initial investments, once there is an agreement on the relative share β and the survival probabilities pi. One can first choose the aggregate investments (π1 + π2 + π3) of all participants, or the total investments (π1 + π2) of all participants, or the investment π3 of the administrator, and then use either (72), (73) or (74) to derive the actuarially fair investments for the 3 participants.
Example 10 (A game of chance with a coin and a die) Consider the combined game of chance with two participants, described in the online appendix of Dhaene and Milvesky (2024). To enter the game, participant 1 pays an amount π1, while participant 2 pays π2. Participant 1 tosses a two-sided coin, while participant 2 rolls a six-sided die. In this game, participant 1 is successful if he tosses heads, while participant 2 is successful if he rolls a 1. In addition to the two participants, an active adm-
inistrator is involved. He contributes to the prize pool by paying an amount π3. The payouts for this game of chance are defined as follows: If the coin lands on heads and the die does not land on 1, the total amount of (π1 + π2 + π3) is awarded to participant 1. Similarly, if the coin does not land on heads but the die lands on 1, the total amount of (π1 + π2 + π3) is awarded to participant 2. If both participants are successful (i.e., heads and 1 appear after the respective throws), the total pr-
oceeds of (π1 + π2 + π3) are shared by person 1 and person 2. In this case, participant 1 receives a relative share β, while participant 2 receives a relative share (1 − β) of the available fund. Finally, if both participants are not successful (i.e., neither heads nor 1 appear after their respective throws), the total proceeds of (π1 + π2 + π3) go to the administrator. Let us assume that the outcomes of the coin and the die are independent. The probability that the administrator will receive the -
entire prize pool is then given by 5
12 , so it seems reasonable to require the administrator to contribute to the prize pool for his chance of winning.
27

This game of chance can be described within the framework of the two participants tontine fund considered above in this subsection:
Wi = (π1 + π2 + π3) × Pi i = 1, 2, 3,
with the relative compensations Pi defined by (67). From (72), we find that the game of chance is actuarially fair for the 3 participants if and only if the amounts π1, π2 and π3 satisfy the following set of equations:



π1 = (π1 + π2 + π3) × 5+β
12
π2 = (π1 + π2 + π3) × 2−β
12
π3 = (π1 + π2 + π3) × 5
12
(75)
In this case, the actuarially fair initial investments π1, π2 and π3 are expressed as proportions of the total payment (π1 + π2 + π3) of the three participants. One can choose the magnitude of (π1 + π2 + π3) first, and then determine the corresponding actuarially fair initial payments of the participants and the administrator by (75). From (73), we find that the actuarially fairness conditions can also be expressed in the
following way:



π1 = (π1 + π2) × 5+β
7
π2 = (π1 + π2) × 2−β
7
π3 = (π1 + π2) × 5
7
(76)
In this case, the actuarially fair investments π1, π2 and π3 are expressed as proportions of the total payment (π1 + π2) of the two participants. One can choose the magnitude of (π1 + π2) first , and then determine the corresponding initial payments of the participants and the administrator by (76). Alternatively, one can first choose π1 and π2, and then determine π3 and set β equal to 2π1−5π2
π1+π2 , such that the game is actuarially fair for all
participants. However, notice that in this case, not every choice of π1 and π2 will lead to a relative share β between 0 and 1. Finally, from (74) one finds that the actuarially fair initial investments also follow from
π1 = π3 × 5+β
5
π2 = π3 × 2−β
5
(77)
Here, π1 and π2 are expressed as proportions of the investment π3 of the administrator. One can choose the magnitude of π3 first, and then determine the investments of the two participants by (77). ◁
6.2 The two participants tontine fund with a passive adminis
trator
Let us now replace the tontine RS scheme with an active administrator defined in the previous subsection by the tontine RS scheme (π, P ) with a passive administrator, as explained before. The investment vector and the compensation vector are now given by π = (π1, π2, 0) and W = (W1, W2, 0). From (58), it follows that the compensations Wi of the participants are given by
28

Wi = (π1 + π2) × Pi + πi × P3, i = 1, 2, (78)
with the relative compensation vector P = (P1, P2, P3) given by (67).
From (63), we find that the actuarial fairness conditions for the two participants are
given by
(
π1 = (π1 + π2) × p1×(q2+β×p2)
1−q1×q2
π2 = (π1 + π2) × p2×(q1+(1−β)×p1)
1−q1×q2
(79)
Expressions (79) provide a way to determine actuarially fair initial investments for the two participants tontine fund with a passive administrator. Indeed, once there is an agreement on the relative share β and the survival probabilities pi, one can first choose the aggregate initial payments (π1 + π2) of the two participants, and then use (79) to derive actuarially fair investments πi. Another possibility consists of first choosing π1, and then determining π2 from (79):
π2 = π1 × p2 × (q1 + (1 − β) × p1)
p1 × (q2 + β × p2) . (80)
Example 11 (A game of chance with a coin and a die) Let us revisit the ‘coin and die’ game of chance with active administrator considered in Example 10. We replace this game of chance with one with a passive administrator and denote it by (π, P ). From (6), we have that the payouts (compensations) of the transformed RS scheme are given by (58) with the relative compensation vector P defined by (67). From (79), we find that this game of chance is actuarially fair for all its participants if and onl-
y if the initial investments π1 and π2 follow from the following set of equations:
π1 = (π1 + π2) × 5+β
7
π2 = (π1 + π2) × 2−β
7 . (81)
This set of equations expresses the actuarially fair payments π1 and π2 as a proportion of the total investment (π1 + π2) of the two participants. One can choose the magnitude of (π1 + π2) first and then determine the investment efforts of the participants by (81). Alternatively, one can also first choose π1 and π2, and then set β equal to 2π1−5π2
π1+π2 , so that
the game is actuarial fair. However, notice that in this case, not every choice of π1 and π2 will lead to a relative share β between 0 and 1. ◁
7 The homogeneous tontine fund
7.1 The homogenous tontine fund with an active administrator
In this subsection, we investigate a special case of the tontine RS scheme (π, P ) with an active administrator, described in Example 2. We consider n participants and an active administrator. We assume that all protection units fi are equal to 1. The n + 1 agents
29

each invest an initial amount πi. The components of the relative compensation vector are given by
Pi = Ii
Pn+1
j=1 Ij
, i = 1, 2, . . . , n + 1. (82)
The compensations Wi of the n + 1 agents follow then from (18). We consider a homogeneous tontine RS scheme, which means that we assume that the indicator variables Ii of the n participants are i.i.d, with Pr [Ii = 1] = p = 1 − q.
Due to symmetry reasons, we must have that E [Pi] is equal for all n participants. Furthermore, we have that
E [Pn+1] = Pr [In+1 = 1] = qn. (83)
Taking into account that Pn+1
i=1 E [Pi] = 1 leads to
E [Pi] = E
"
Ii Pn+1
j=1 Ij
#
= 1 − qn
n , i = 1, 2, . . . , n. (84)
According to (40), the homogeneous tontine RS scheme (π, P ) is actuarially fair for all agents if and only if
πi = 1
n
n
X
j=1
πj, i = 1, 2, . . . , n (85)
and
πn+1 = qn
1 − qn
n
X
j=1
πj. (86)
This implies that all initial investments πi of the participants are equal, which we denote hereafter by π. This result was to be expected because of the inherent symmetry of the problem. Actuarially fair initial investments can then be determined by first choosing the administrator’s initial investment πn+1 and then determining the participants’ initial investments by (85) and (86).
7.2 The homogeneous tontine fund with a passive administrator
Let us now replace the homogeneous tontine RS scheme with an active administrator, considered in Section 7.1, by the corresponding homogeneous tontine RS scheme (π, P ) with a passive administrator. The compensations Wi are then given by (58), with the relative compensations Pi as defined in (82). From (63), (83) and (84), we find that (π, P ) is actuarially fair for its n participants if and only if all initial investments πi of the participants are all equal:
πi = 1
n
n
X
j=1
πj, i = 1, 2, . . . , n.
Again, this result was to be expected because of the inherent symmetry of the problem.
30

7.3 Comparing the homogeneous tontine fund with an active
administrator and a centralized insurance approach
Consider a group of n persons (participants). The one-year survival of person i is described by the Bernoulli random variable Ii, which equals 1 if he survives until time 1, while it equals 0 otherwise. The group is assumed to be homogeneous in the sense that all Bernoulli random variables are i.i.d. with a common survival probability p. Suppose that each person is willing to invest an initial amount π which will entitle him to a survival benefit at time 1.
The participants could opt for centralized insurance, by each buying a pure endowment with a premium π. Suppose that the premiums are pure premiums. In case person i chooses an insurance with pure premium π, then, assuming a zero-discount rate, his payout W c
i at time 1 is given by
Wc
i =π
p × Ii, (87)
where we use the superscript ‘c’ to indicate that this is the payout in a ‘centralized’ approach. The expected payoff in case of buying insurance is given by
E [W c
i ] = π.
On average, the premium is equal to the expected insurance payment. This means that the insurance approach is actuarially fair for each person.
Instead of buying a pure endowment insurance, the participants could decide to take part in a homogeneous RS scheme (π, P ) with an active administrator. Any participant makes an initial investment π in the tontine fund. The active administrator’s investment is, as usual, denoted by πn+1. The initial investment vector is given by π = (π, π, . . . , π, πn+1). Suppose that the relative compensation vector P of the homogeneous RS scheme is given by (82). The compensation Wi(n) that participant i will-
 receive at time 1 in a fund with n participants in a decentralized approach with an active administrator is then given by
Wi(n) = (n × π + πn+1) × Ii
Pn+1
j=1 Ij
, i = 1, 2, . . . , n + 1, (88)
where we added ‘n’ in the notation Wi(n) to indicate the number of participants in the RS scheme.
Let us now assume that the RS scheme (π, P ) is actuarially fair for all participants and for the administrator. Then from (85) and (86) we find that the compensations Wi(n) can be written as follows:
Wi(n) = n × π
1 − qn × Ii
Pn+1
j=1 Ij
, i = 1, 2, . . . , n + 1. (89)
From (89), one can prove that for any participant we have
Wi(n) = π
1 − qn × Ii
1 n
Pn
j=1 Ij + 1
n
Qn
j=1(1 − Ij)
a.s.
−−→ π
p × Ii.
31

Intuitively, this means that when the number of participants in the homogeneous tontine fund with an active administrator becomes infinitely large, then with probability 1, the contribution of each participant i becomes equal to the corresponding insurance payment Wc
i.
Similarly, for the contribution of the administrator we have
Wn+1(n) = n × π
1 − qn ×
n
Y
j=1
(1 − Ij) a.s.
−−→ 0.
This means that when the number of participants in the homogeneous tontine fund with an active administrator becomes infinitely large, then with probability 1, the contribution of the administrator becomes equal to 0. We can conclude that the homogeneous tontine fund approach with an active administrator converges to the central insurance approach when the number of participants goes to infinity.
7.4 Comparing the homogeneous tontine fund with a passive
administrator and a centralized insurance approach
Consider again the group of n persons as described in Section 7.3. Suppose that the participants decide to take part in a homogeneous RS scheme (π, P ) with a passive administrator. Assuming again actuarially fair (and hence equal) contributions, any participant makes an initial investment, denoted by π, in the tontine fund. The initial investment vector is then given by π = (π, π, . . . , π, 0). The compensation that participant i will receive at time 1 in a fund with n participants in a decentra-
lized approach with a passive administrator then follows from
Wi(n) = n × π × Ii
Pn+1
j=1 Ij
+ π × In+1, i = 1, 2, . . . , n. (90)
From (90), for any participant i one has that
Wi(n) = π × Ii
1 n
Pn
j=1 Ij + 1
n
Qn
j=1(1 − Ij) + π ×
n
Y
j=1
(1 − Ij) a.s.
−−→ π
p × Ii,
which means that when the number of participants in the homogeneous tontine fund with a passive administrator becomes infinitely large, then with probability 1, the contribution of participant i becomes equal to the insurance payment W c
i . We can conclude that the tontine fund with a passive administrator also converges to the centralized insurance approach.
8 Conclusion
In this paper, we considered compensation-based RS schemes (π, P ) with an active administrator. At time 0, each participant i invests an initial amount πi in the fund, while
32

the administrator invests the amount πn+1 in the same fund. These initial investments are summarized in the investment vector π = (π1, π2, . . . , πn+1). At time 1, each participant and also the administrator receives compensation from the fund, summarized in the compensation vector W = (W1, W2, . . . , Wn+1), which is given by
Wi =
n+1
X
j=1
πj
!
× Pi i = 1, 2, . . . , n + 1,
where P = (P1, P2, . . . , Pn+1) is the relative compensation vector of the RS scheme under consideration. This setup is a generalization of the setup in Dhaene and Milevsky (2024) and Denuit and Robert (2024), who consider RS schemes with relative compensation vector given by (26) as described in Example 4 on tontine funds.
Apart from the case of an active administrator, we also considered RS schemes (π, P ) with a passive administrator. In this case, the investment vector is given by π = (π1, π2, . . . , πn, 0), while the relative compensation vector is given by W = (W1, W2, . . . , Wn, 0), with
Wi =
n
X
j=1
πj
!
× Pi + πi × Pn+1 i = 1, 2, . . . , n (91)
where P = (P1, P2, . . . , Pn+1) is again the relative compensation vector of the RS scheme under consideration. This setup is a generalization of the setup in Denuit and Robert (2025), who consider RS schemes with relative compensation vector given by (26) as described in Example 4 on tontine funds.
For both types of compensation-based RS schemes, we derived actuarial fairness conditions, that is, conditions under which the initial investment of each agent is equal to the expected compensation he will receive at time 1.
We considered two particular cases of tontine funds in some detail. First, the two participant tontine fund was investigated. In this case, two participants decide to set up a tontine fund and share the terminal fund value among the survivors. We also considered the homogeneous tontine fund, where all participants have i.i.d. survival indicator variables and purchase equal numbers of protection units. Finally, we also considered the relation between the homogeneous tontine fund approach with passi-
ve and active administrators and the centralized insurance approach.
Acknowledgments. Jan Dhaene gracefully acknowledges funding from FWO and F.R.S.FNRS under the Excellence of Science (EOS) programme, project ASTeRISK (40007517). Atibhav Chaudhry gracefully acknowledges support by an Australian Government Research Training Program (RTP) Scholarship, a Faculty of Business and Economics Doctoral Program Scholarship, a University of Melbourne Research Scholarship, and the 2021 Kilmany Scholarship. Ka Chun Cheung is supported by a grant from the Research Grants Counci-
l of the Hong Kong Special Administrative Region, China (Project No. 17303721). Austin Riis-Due gratefully acknowledges the support of The James C. Hickman Scholars Award. The authors also thank Michel Denuit, Runhuan Feng, Zinoviy Landsman, Dani ̈el Linders, Moshe Milevsky and Bertrand Tavin for helpful comments on earlier versions of the paper.
33

Competing interests. The authors have no competing interests to declare.
9 References
Abdikerimova, S., & Feng, R. (2022). Peer-to-peer multi-risk insurance and mutual aid. European Journal of Operational Research, 299 (2), 735–749.
Bernard, C., Feliciangeli, M., & Vanduffel, S. (2025). Can an actuarially unfair tontine be optimal? The Geneva Risk and Insurance Review, 50 (1), 39–71.
Cheung, K. C., & Lo, A. (2014). Characterizing mutual exclusivity as the strongest negative multivariate dependence structure. Insurance: Mathematics and Economics, 55, 180–190.
Denuit, M., & Dhaene, J. (2012). Convex order and comonotonic conditional mean risk sharing. Insurance: Mathematics and Economics, 51 (2), 265–270.
Denuit, M., Dhaene, J., Ghossoub, M., & Robert, C. Y. (2025). Comonotonicity and pareto optimality, with application to collaborative insurance. Insurance: Mathematics and Economics, 120, 1–16.
Denuit, M., Dhaene, J., & Robert, C. Y. (2022). Risk-sharing rules and their properties, with applications to peer-to-peer insurance. Journal of Risk and Insurance, 89 (3), 615–667.
Denuit, M., & Robert, C. Y. (2023). Endowment contingency funds for mutual aid and public financing. LIDAM Discussion Papers ISBA 2023009, Universit ́e catholique de Louvain, Institute of Statistics, Biostatistics and Actuarial Sciences (ISBA).
Denuit, M., & Robert, C. Y. (2025). Equal compensations under actuarially fair contributions in endowment contingency funds. Risk Sciences, 1, 100005.
Dhaene, J., & Denuit, M. (1999). The safest dependence structure among risks. Insurance: Mathematics and Economics, 25 (1), 11–21.
Dhaene, J., Kazzi, R., & Valdez, E. A. (2026). Axiomatic characterizations of some simple risk-sharing rules. Risk Sciences, 2.
Dhaene, J., & Milevsky, M. A. (2024). Egalitarian pooling and sharing of longevity risk aka can an administrator help skin the tontine cat? Insurance: Mathematics and Economics, 119, 238–250.
Dhaene, J., Robert, C. Y., Cheung, K. C., & Denuit, M. (2025). An axiomatic characterization of the quantile risk-sharing rule. Scandinavian Actuarial Journal, 1–20.
34

Jiao, Z., Kou, S., Liu, Y., & Wang, R. (2022). An axiomatic theory for anonymized risk sharing. arXiv preprint arXiv:2208.07533.
Lauzier, J.-G., Lin, L., & Wang, R. (2024). Negatively dependent optimal risk sharing. arXiv preprint arXiv:2401.03328.
Tavin, B. (2023). Reply to request from Dhaene and Milevsky [Private communication]
35

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:09.856Z
- **Text Length:** 79339 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 35 of 35
