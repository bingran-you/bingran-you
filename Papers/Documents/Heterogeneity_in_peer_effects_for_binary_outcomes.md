# PDF Document: Lambotte - 2025 - Heterogeneity in peer effects for binary outcomes.pdf

**File Path:** Lambotte - 2025 - Heterogeneity in peer effects for binary outcomes.pdf

**Processed Date:** 2026-02-10T18:16:36.871Z

**File Size:** 1421.44 KB

**Total Pages:** 46

**Extracted Pages:** 46

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3226

**Title:** Heterogeneity in peer effects for binary outcomes

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Heterogeneity in peer effects for binary outcomes
Mathieu Lambotte1,*
1Univ Rennes, CNRS, CREM – UMR6211, F-35000 Rennes France
*mathieu.lambotte@univ-rennes.fr , Please click here to ensure that you are reading the last version.
November 26, 2025
Abstract
I introduce heterogeneity into the analysis of peer effects arising from conformity, allowing the strength of the taste for conformity to vary across agents’ actions. Using a structural model based on a simultaneous network game with incomplete information, I derive conditions for equilibrium uniqueness and for the identification of the heterogeneous peer-effect parameters. I propose specification tests to determine whether the conformity or spillover models are consistent with the observed data i-
n the presence of heterogeneous peer effects. Applying the model to data on smoking and alcohol consumption among secondary school students, I show that assuming a homogeneous preference for conformity leads to biased estimates.
Keywords— peer effects, heterogeneity, conformity, microfoundations, binary outcome
JEL Classification— C31, D85, I12
Acknowledgments
A previous version of this paper, titled “dentification and estimation of asymmetries in peer effects for binary outcomes” has been circulating since May 2024. I thank Philip Ushchev, Bernard Salanié, Francis Bloch and Aristide Houndetoungan for their helpful comments and suggestions. I am also grateful to Jordan Norris and other participants of the 2025 World Congress of the Econometric Society, and to Josselin Thuillez, who financed the access to the Add Health data through his chair "Health Eco-
nomics" from Rennes Metropole. This research uses data from Add Health, a program directed by Kathleen Mullan Harris and designed by J. Richard Udry, Peter S. Bearman, and Kathleen Mullan Harris at the University of North Carolina at Chapel Hill, and funded by Grant P01-HD31921 from the Eunice Kennedy Shriver National Institute of Child Health and Human Development, with cooperative funding from 23 other federal agencies and foundations. Special acknowledgment is given to Ronald R. Rindfuss
1
arXiv:2511.15891v3 [econ.EM] 25 Nov 2025

and Barbara Entwisle for assistance in the original design. Information on how to obtain Add Health data files is available on the Add Health website (http://www.cpc.unc.edu/Add Health). No direct support was received from Grant P01-HD31921 for this research.
2

1 Introduction
With the growing recognition that economic behaviors are embedded in social interactions and
the increasing availability of network data, the identification and estimation of peer effects have
generated a rich theoretical and empirical literature (for recent reviews, see Bramoullé et al., 2019;
Zenou, 2025). Theoretical models of social interactions1 (see, e.g., Ballester et al., 2006) typically
specify two-way heterogeneous peer effect coefficients; that is, these models allow the influence of
individual j on i to differ from her influence on k, or from k’s influence on i. However, econometric
estimation of such two-way heterogeneous models is infeasible, as it requires solving a system of
n equations (one per agent) with n(n − 1) parameters. Consequently, most empirical studies have
relied on the linear-in-means model, wherein agents respond to the average behavior of their peers
and the peer effect parameter is assumed to be homogeneous.
Recently, two strands of the literature have sought to introduce heterogeneity into empirical
social interaction models. The first avenue allows for heterogeneity based on agents’ socio
demographic characteristics (see, e.g., Houndetoungan, 2024; Hsieh and Van Kippersluis, 2018;
Nakajima, 2007) or network centrality (Lin and Xu, 2017). For instance, these approaches make it
possible to infer whether peer effects are stronger among individuals who share the same gender or
increase with the relative centrality of friends.
A second avenue leverages variation across friendship groups to identify heterogeneity in peer
influence. For continuous outcomes, Boucher et al. (2024) propose a model in which the norm
an individual faces may be determined by the friend exerting the minimum or maximum effort,
rather than by the average effort of friends, as in the linear-in-means model. Houndetoungan (2025)
introduces even greater flexibility by allowing peer effects to vary across different quantiles of the
distribution of friends’ outcomes, thereby permitting friends’ influence to be non-monotonic in
that distribution. Herstad and Shin (2024) discuss the identification of a reduced-form peer effects
model in which friends’ influence is heterogeneous depending on their rank within the outcome
distribution in the friendship group. For binary outcomes, Badev (2021) develops a spillover
1I use the term “peer effects” and the more general term “social interactions” interchangeably.
3

model in which agents choose both their actions and their friends, and shows, using a potential
game framework with complete information, that action-specific peer effects can be estimated. Xu
(2018) develops a spillover model in an incomplete information setting in which the peer effect
parameters differ across combinations of an agent’s outcome and the outcomes of her friends.
However, for estimation and identification, he imposes a normalization, setting to zero the peer
effect parameters when either the agent or her friends play action zero, and thus only recovers the
effect of having at least one friend choosing the high action on the utility of choosing the high action.
The main contribution of this paper is to show that action-specific peer effects can be identified
and estimated for binary outcomes in an incomplete information setting. Specifically, I show that,
in a conformity model, where players typically incur a cost for deviating from the average behavior
among their friends,2 it is possible to identify and estimate a first peer effect parameter, measuring
the taste for conformity when the agent chooses the low action, and another parameter when she
chooses the high action. This allows me to infer whether players’ preference for conformity is
stronger when they take the low or the high action. This is achieved by allowing the social
distance function, which measures the distance between an agent’s action and the average action
of her friends, to be heterogeneous depending on the action chosen by the agent. This approach
generalizes the social distance functions previously used in the literature (see, e.g., Brock and
Durlauf, 2001), which impose that agents face the same pressure to conform to the norm regardless
of whether they choose the high or the low action.
This heterogeneous conformity model complements Xu (2018) and Badev (2021), as both use
spillover models to derive action-specific heterogeneous peer effects for binary outcomes. Spillover
models assume that the utility of choosing the high action increases linearly with the share (or num
ber) of friends choosing that same action (Brock and Durlauf, 2001). Importantly, the best response
functions derived from the spillover and conformity models with action-specific heterogeneity are
not identical.3 This contrasts with results from Brock and Durlauf (2001), who show that, when
2Or, equivalently, with the weighted sum of the distances between an agent’s action and the actions of her friends, as in Boucher (2016). 3See Appendix A for a proof.
4

homogeneous preference for conformity is assumed, both microfoundations are equivalent.4 The
model with action-specific peer effects developed here nests the homogeneous specification, al
lowing researchers to conduct likelihood ratio tests to determine which representation of agents’
preference for conformity is more consistent with the data. I also propose a specification test
to determine whether the data is consistent with the spillover model, the conformity model, or
neither, under the assumption that some action-specific heterogeneity is present. The specification
test complements Boucher et al. (2024), who use a similar approach for continuous outcomes. In
contrast to their model, my identification strategy does not rely on the existence of isolated agents
in the network. Beyond inference, developing social interaction models based on both spillover
and conformity microfoundations is also theoretically important since they have different welfare
implications and motivate different policy interventions (Brock and Durlauf, 2001; Ushchev and
Zenou, 2020).
To see why assuming a homogeneous preference for conformity is particularly restrictive for
binary outcomes, consider the example of students’ smoking behavior in a classroom setting, where
each student can either smoke (high action) or not (low action). Assuming a homogeneous taste
for conformity implies that smoking when 70% of the class does not smoke has the same effect
on one’s utility as not smoking when 70% of the class does smoke. However, due to the addictive
nature of smoking and the rebellious image often associated with it, smokers may be relatively
insensitive to the behavior of their friends, whereas non-smokers might be heavily penalized for
deviating from the prevailing social norm. For smoking and many other behaviors, restricting the
preference for conformity to be homogeneous appears unrealistic.
Estimating homogeneous peer effects models is thus likely to miscapture agents’ preferences,
undermining the policy relevance of empirical findings. For instance, if a social planner aims
to reach a lower equilibrium,5 an intuitive policy would be to strengthen the taste for conformity
4This holds for both a linear and quadratic social distance function when the preference for conformity is homogeneous, but only for the linear social distance function if the preference for conformity is heterogeneous. See Appendix B for a detailed exposition. 5Henceforth, a lower (higher) equilibrium refers to a game’s outcome in which more players select the low (high) action.
5

when choosing the high action or to weaken the taste for conformity when choosing the low
action. Examples of such policies are social marketing campaigns that emphasize the social stigma
of smoking (e.g., the “The Real Costs” campaign organized by the U.S. Food and Drug Agency
between 2014 to 2016) or highlight that not drinking alcohol does not decrease the utility associated
with participation in social or recreational activities (e.g., “You don’t need alcohol to have fun”),
respectively. For instance, a positive shift in the taste for conformity would decrease the utility of
smoking for agents whose social norm is not to smoke. Conversely, a negative shift in the taste
for conformity when not drinking alcohol would increase the utility of not drinking for agents
whose social norm is to drink. If the social planner instead assumes that the taste for conformity is
homogeneous, she can only act unidimensionally: decreasing (increasing) the taste for conformity
when the high (low) action is the norm. This is generally inefficient since, for instance, decreasing
the taste for conformity might lead some non-smokers, who have a private preference for smoking
but whose social norm was not to smoke, to start smoking after the planner’s intervention.
The existence of action-specific peer effects also implies that nudges targeting the perception
of social norms might backfire. For example, if agents do not care about the norm when play
ing the high action, nudges targeting global norms, such as the 2014 “Finish It” campaign in the
U.S. with its slogan “Today, only 9% of teens smoke. That’s less than the number of VHS tapes
sold in 2013”, could lead to a higher equilibrium. Indeed, since smokers do not experience a
preference for conformity in this case, they face no penalty for smoking, even after learning that
smoking is a minority behavior. However, if the taste for conformity when not smoking is posi
tive and strong, non-smokers experience a penalty for not smoking, even when only 9% of teens
smoke and smoking is thus not the norm. This type of nudge would consistently work as intended
and reduce the prevalence of smoking if the preference for conformity is homogeneous and positive.
Section 2 presents the microfoundations for the conformity model as a simultaneous game on a
network with incomplete information, in which players do not observe their friends’ behaviors but
form rational expectations based on the available information. In Section 3, I derive a sufficient
condition for the existence of a unique Bayes-Nash equilibrium (BNE) and propose its comparative
6

statics analysis. Section 4 derives the conditions for identification of the action-specific conformity
parameters and outlines the structural estimation strategy for the heterogeneous model. Finally,
I bring the model to the data in Section 5 and provide empirical evidence of heterogeneity in
conformity preferences using the Add Health data, which includes network and individual data
on secondary school students from 126 U.S. schools. This analysis primarily serves as a proof
of concept and revisits an important paper by Lee et al. (2014), which develops a network-based
estimation strategy for the homogeneous peer effects model proposed by Brock and Durlauf (2001),
focusing on students’ smoking behavior. I extend the analysis to alcohol consumption, illustrating
how the magnitude of the action-specific heterogeneity varies across behaviors. The empirical
results show that imposing a homogeneous, rather than heterogeneous, preference for conformity
leads to misleading estimates of peer effects for smoking. In addition, for smoking, I show that the
data is not consistent with a spillover model and cannot reject the null hypothesis that the data is
consistent with a conformity model, at the 0.1% significance level.
7

2 Microfoundations
2.1 Setting
Consider a simultaneous game of incomplete information on a network with a set of n players,
indexed by i and denoted by N = {1, . . . , n}. I focus on a binary variable, yi ∈ Yi, which indicates
the behavior or action of player i ∈ N . I define Yi := {0, 1}, where a value of one is given to the
high action (e.g., smoking, exerting effort, or adopting an innovation) and a value of zero to the low
action. The action profile of the n players, the outcome of the game, is given by y = (y1, . . . , yn)′,
where yi ∈ Yi for each i ∈ N .
Players interact through a network, which is represented as an n × n binary matrix A = [ai j ],
where ai j = 1 if players i and j are friends, and 0 otherwise. When the network is not complete,
agents have heterogeneous friend groups and interactions are local. Self-influence is not allowed,
i.e., aii = 0 ∀i ∈ N and links might be directed or undirected. I denote players’ number of friends
by di := Í
j ≠i
ai j and define ai as the ith row of A.6 I also use a row-normalized matrix G = [gi j ],
which is obtained by row-normalizing A, i.e., gi j = aij
di .
2.2 Preferences
Following Brock and Durlauf (2001), I specify player i’s utility function U (·) as an additive function
of three components:
Ui (yi, y−i) = αi yi − 1{di > 0}S(yi, y−i) + εi (yi) (1)
where 1{E } is the indicator function, which takes the value one if event E is true and zero otherwise.
The individual characteristic αi is observed by all players and captures the non-strategic utility.
In my empirical application, αi depends on students’ characteristics, the characteristics of their
friends, and school fixed effects. Note that the specification of the utility function ensures that αi
is normalized to zero for yi = 0. This normalization does not affect the equilibrium’s action profile
6Henceforth, for any matrix X, the vector xk denotes its kth row.
8

but is necessary for identifying the parameters associated with αi.
S(yi, y−i) is the social distance function, which, for non-isolated players, depends on their
friends’ actions and incorporates the strategic dimension of the game, commonly referred to
as the endogenous peer effects. For instance, the quadratic distance function, Squad (yi, y−i),
introduced by Bernheim (1984) and Akerlof (1997), and widely used in network games with binary
or continuous action spaces (see e.g., Blume et al., 2015; Boucher et al., 2024; Brock and Durlauf,
2001; Houndetoungan, 2024; Li and Lee, 2009; Patacchini and Venanzoni, 2014; Ushchev and
Zenou, 2020), is given by:7
S
quad
i (yi, y−i) = β
2 (yi − y ̄i)2 (2)
where y ̄i is the weighted sum of i’s friends. Specifically, if the weights are given by the row
normalized matrix G, then y ̄i := Í
j≠i gi j y j , in which case y ̄i represents the local norm. Alter
natively, if the weights are given by the adjacency matrix A, then y ̄i := Í
j≠i ai j y j , so that y ̄i
corresponds to the number of i’s friends who choose the high action. Because the distance function
is quadratic, the marginal social distance, ∂S
quad
i (yi,y−i)
∂yi
= β(yi − y ̄i), increases with the deviation
from the norm when β > 0. This increasing marginal social distance implies that small deviations
from the norm have a relatively minor effect on a player’s utility, whereas larger deviations are
increasingly costly. Although this feature of the social distance function seems realistic, I show in
Appendix B that a linear social distance function can also be used, although the presence of isolated
players is necessary for identification in that case.
Observe that Squad (0, y−i) = Squad (1, 1n − y−i) and the distance function is thus symmetric.
Under this homogeneous specification, the distance from the social norm is assumed to have the
same effect on players’ utility whether they choose the high or the low action. If β > 0, players
have a preference for conformity, and the larger the social distance between a player’s action and
her social norm, the lower the utility she derives from selecting this particular action. However, β
7A different specification is proposed in Boucher (2016), where the distance function is defined as
β
2
Í
j ≠i
ai j (yi − y j )2 . In this formulation, the cost of deviating from friends’ behavior scales with the number of
friends a player has. Appendix B shows that action-specific heterogeneity in the preference for conformity can also be identified when the social distance function computes the weighted sum of deviations from friends’ actions, rather than the deviation from the weighted sum of friends’ actions. However, identification in that case relies on the existence of isolated players, which is why I focus on the less restrictive specification.
9

is unrestricted here and may be negative, indicating that players prefer to deviate from the norm
due to anti-conformity preferences, capturing, for instance, status concerns (Fershtman and Weiss,
1998; Immorlica et al., 2017) or competitive preferences (Azmat and Iriberri, 2010; López-Pintado
and Meléndez-Jiménez, 2021).
I propose an alternative heterogeneous specification of the social utility function, Shet (·), that
nests the homogeneous one:
Shet
i (yi, y−i) = yi
βh
2 (yi − y ̄i)2 + (1 − yi) βl
2 (yi − y ̄i)2 (3)
βh captures the taste for conformity when choosing the high action. With binary outcomes, select
ing yi = 1 implies that yi ≥ y ̄i and thus that the agent’s action is (weakly) above the norm. βh
can thus be interpreted as the cost of being above the norm. Conversely, βl measures the taste for
conformity when choosing the low action and captures the cost of being below the norm. βh and βl
do not need to have the same sign, and may be negative, in which case they measure the benefit of
being above or below the norm, respectively. For example, in the case of smoking among teenagers,
one might expect βl > βh ≥ 0 if students perceive smoking as socially desirable. In this scenario,
students are strongly penalized for not smoking when smoking is the norm among their friends,
but they experience a weaker, or even no, penalty for smoking, even if it goes against the norm. In
contrast, polluting, a socially undesirable behavior, may be characterized by βh > βl ≥ 0. In that
case, agents are strongly penalized for polluting when the norm among their friends is to abstain,
but face little or no penalty for not polluting, even if most of their friends pollute. In general, one
may expect the relationship between βh and βl to depend on the social desirability of the action
under scrutiny. In the limit, βh → ∞ for prohibited behaviors, while βl → ∞ for mandatory
behaviors. Note that the heterogeneous social distance function is asymmetric when βh ≠ βl, in
the sense that Shet (0, y−i) ≠ Shet (1, 1n − y−i).
The tuple (εi (yi))yi∈Yi represents private preference shocks for both the high and low actions,
known to the player i but unknown to the other players (and the researcher). I further consider that
10

the distributions of (εi (yi))yi∈Yi are common knowledge and identical for all players. Players are
thus facing uncertainty about the realization of their friends’ types. Let ηi := εi (0) − εi (1) such
that ηi corresponds to the unobserved relative preference of player i for the low action over the high
one, characterizing players’ types without loss of generality.
Assumption 1 The random variables εi (yi) are distributed iid across actions yi and players i. The
density fε is continuous and integrable on R. In addition, (εi (yi))yi∈Yi is independent of α and G.
The independence of εi (1) and εi (0), in conjunction with the continuity and integrability of fε ,
guarantee that η = εi (0) − εi (1) admits a continuous density fη. To ensure econometric tractability,
ε (1) and ε (0) are typically assumed to follow Type-I extreme value or normal distributions, so that η
is distributed according to a logistic or a normal distribution (Bajari, Hong, Krainer and Nekipelov,
2010). The last part of Assumption 1 implies that players’ actions can only be correlated through
the network and αi, ruling out endogeneity issues. The network is thus assumed exogenous here
for simplicity, although Badev (2021) or Lambotte (2025) propose methods to account for network
endogeneity in binary games. Independence of (εi (yi))yi∈Yi , and thus of η, from G and α also
implies that knowing its own type does not provide any information on the actions of other players.
Because players only observe their own preference shocks (εi (yi))yi∈Yi , they are uncertain about
other players’ actions y−i. As such, players do not maximize the utility function of Equation (1) but
its expectation with respect to their beliefs about other players’ actions. I assume that players form
rational expectations, i.e., objective mathematical expectations about other players’ actions given
the information set available to them. The information set of a given player is {α, G, ηi}. Under
Assumption 1, players’ types are independent of G and α, such that, by mutual independence, the
information set reduces to {α, G}.
Assumption 2 Players form rational expectations about other players’ actions, conditional on
{α, G}, denoted as p j := E y j |α, G .
Note that the rational expectations are heterogeneous in the sense that players with different char
acteristics and positions in the network are expected to play different actions. I denote the rational
expectation profile by p := ( p1, . . . , pn)′ and the expected norm faced by player i as p ̄i = Í
j≠i gi j p j .
11

The utility function with the heterogeneous social distance function can be written as:
Ui (yi, y
i ) = αi yi − 1{di > 0} yi
βh
2 + (1 − yi) βl
2 (yi − y ̄i)2 + ε (yi) (4)
The associated expected utility is then given by:
E[Ui (yi, y−i)] = =



αi − 1 {di > 0} βh
2 1 − 2p ̄i + giΣg′
i + εi (1) if yi = 1
−1 {di > 0} βl
2 giΣg′
i + εi (0) if yi = 0
where p ̄i = Í
j≠i gi j p j , Σ = (pp′ + diag(p ◦ (1n − p))), ◦ is the Hadamard product and the
derivation of Σ follows from Assumption 2, which implies pi ⊥ p j ∀i ≠ j.8
8More precisely, we have
E y ̄2
i |α, G = giE [yy′|α, G] g′
i
= gi
©
«
Pr(y1 = 1 | α, G) Pr(y1 = 1, y2 = 1 | α, G) · · · Pr(y1 = 1, yn = 1 | α, G) Pr(y1 = 1, y2 = 1 | α, G) Pr(y2 = 1 | α, G) · · · Pr(y2 = 1, yn = 1 | α, G)
...
...
...
...
Pr(y1 = 1, yn = 1 | α, G) Pr(y2 = 1, yn = 1 | α, G) · · · Pr(yn = 1 | α, G)
a ® ® ® ®
¬
g′
i
= gi
©
«
p1 p1p2 · · · p1pn
p1p2 p2 · · · p2pn
...
...
...
...
p1pn p2pn · · · pn
a ® ® ® ®
¬
g′
i = gi (pp′ + diag(p ◦ (1n − p))) g′
i =: giΣg′
i,
where diag(p ◦ (1n − p)) =
©
«
p1(1 − p1) 0 · · · 0 0 p2(1 − p2) · · · 0
...
...
...
...
0 0 · · · pn(1 − pn)
a ® ® ® ®
¬
. Henceforth, diag(a), with a an n × 1 vector,
yields an n × n matrix whose diagonal entries are the elements of a and off-diagonal elements are zero, while diag(A), with A an n × n matrix, extract the diagonal elements of A and return them as an n × 1 vector.
12

2.3 Best-Response Function
Let E[ΔiUi] := E [Ui (yi = 1, y−i) − Ui (yi = 0, y−i)|α, G] be player i’s marginal expected utility
from playing yi = 1 instead of yi = 0, such that her decision rule can be written as:
{yi = 1} ⇐⇒ {E[ΔiUi] > 0}
⇐⇒ αi + 1{di > 0} βh p ̄i − 1
2 +1
2 Δβ giΣg′
i − ηi > 0
(5)
where Δβ := βl − βh captures the heterogeneity between the conformity parameters. Assuming
βh > 0, if player i expects that a majority of her friends play the high action, conforming to the
norm and selecting yi = 1 would increase her marginal expected utility by βh ( p ̄i − 1
2 ) > 0, a pattern
that resembles majority games (Jackson and Zenou, 2015).9 Conversely, if player i expects that
a majority of her friends select the low action, then p ̄i < 1
2 , and playing yi = 1 would decrease
her marginal expected utility by βh ( p ̄i − 1
2 ) < 0. If βh is negative, players are anti-conformist and
prefer to diverge from the norm. As such, selecting yi = 1 increases player i’s marginal expected
utility only if she expects a minority of friends to play the high action.
The nonlinearity in the expected marginal utility E[ΔiUi], captured by Δβ, arises only when the
social distance function is heterogeneous and quadratic.10 More formally, sign(Δβ) determines if
E[ΔiUi] is a concave or convex function of the expected norm, since ∂2E[ΔiUi]
∂2 p ̄i
= Δβ. This result is
intuitive: if choosing an action below the norm is more (less) costly than choosing an action above,
the marginal effect of p ̄i on the marginal expected utility from selecting yi = 1 increases (decreases)
as p ̄i → 1. Δβ also partially determines if E[ΔiUi] is increasing or decreasing with the social
norm, as ∂E[ΔiUi]
∂ p ̄i
= 1{di > 0}βh + Δβ p ̄i =⇒ ∂E[ΔiUi]
∂ p ̄i
≥ 0 ⇐⇒ βh ≥ − βl p ̄i
1−p ̄i . Interestingly,
if players have conformity preferences, both βh and βl are positive and the marginal effect of the
9Note that in Brock and Durlauf (2001) and Lee et al. (2014), the majority threshold is zero instead of 1
2 and does
not appear explicitly, since they use an alternative coding scheme, yi = {−1, 1}. 10If one considers a linear social distance function with heterogeneous conformity preferences, such as Slin (yi, y−i) = yi βh (y ̄i − yi) + (1 − yi) βl (yi − y ̄i), the marginal expected utility would be E[ΔiUi] = αi + 1{di > 0} βh ( p ̄i − 1) + βl p ̄i − ηi, which is piecewise linear in p ̄i. Similarly, assuming a homogeneous quadratic dis
tance function yields E[ΔiUi] = αi + 1{di > 0}
n
β p ̄i − 1
2
o
− ηi, which is also piecewise linear in p ̄i. However,
action-specific heterogeneity can still be identified if they are isolated players in the network (see Appendix B).
13

social norm on ΔE[Ui] is thus always positive.
Let Γi (p) : {0, 1}n → {0, 1} be the best response function, which maps player i’s rational
expectations about other players’ actions, p−i, into her best-response in the strategic space, the
conditional choice probabilities Pr(yi = 1|α, G), such that Γi (p∗) := Pr(yi = 1|α, G). Under
Assumption 1, Pr(yi = 1|α, G) can be written as:
Pr(yi = 1|α, G) = Pr(E[ΔiUi] ≥ 0)
= Fη αi + 1{di > 0} βh p ̄i − 1
2 +1
2 Δβ giΣg′
i
(6)
14

3 Equilibrium Properties
3.1 Existence of a Bayesian Nash Equilibrium
The rational expectations profile p is consistent with respect to the distribution of players’ types if
pi = Pr(yi = 1|α, G) ∀ j ∈ N , where pi = E[yi |α, G] is the expectation of player i’s action, as
defined in Assumption 2. Recall that the best response function is given by Γi (p) = Pr(yi = 1|α, G).
Thus, the existence of a consistent rational expectation profile p implies pi = Γi (p).
The strategy profile p∗ is a BNE if p∗
i ∈ Γi (p∗) for all i ∈ N . Indeed, letting Γ := {Γi}i∈N , it
follows from Brouwer fixed point theorem that p∗ is a fixed point of Γ such that Γ(p∗) = p∗. The
strategy profile p∗ at a BNE can be written as:
p∗ = Fη α + 1{d > 0n} βh  ̄p∗ − 1
2 1n + 1
2 Δβ diag(GΣ∗G′) (7)
where Σ∗ = (p∗p∗′ + diag(p∗ ◦ (1n − p∗))).
3.2 Uniqueness of the Bayesian Nash Equilibrium
To ensure the uniqueness of the equilibrium, I introduce a sufficient condition, bounding the
preference for conformity and the strength of the heterogeneity.11
Assumption 3 The conformity parameters are bounded: |βh| + 3
2 |βl − βh| < 1
maxu fη (u) .
If fη is logistic or normal, Assumption 3 yields |βh| + 3
2 | βl − βh | < 4 or | βh | + 3
2 |βl − βh| <
√
2π,
respectively. If the preference for conformity is homogeneous, i.e., βl = βh = β, the sufficient
condition for the uniqueness of the equilibrium simplifies to |β| < 1
maxu fη (u) , which is the same
condition as in Lee et al. (2014). Note that a similar assumption, called Moderate Social Influence,
is used to guarantee uniqueness in games with continuous action spaces (Glaeser and Scheinkman,
2003; Horst and Scheinkman, 2006). With binary action spaces, incomplete information generally
provides straightforward conditions for uniqueness (see, e.g., Lin, 2024; Liu, 2019; Xu, 2018).
11A simpler but more restrictive condition for uniqueness can be derived from Assumption 3: max{|βh |, |βl |} <
1
4 maxu fη (u) .
15

Conversely, binary games with complete information generally have multiple equilibria (Ciliberto
and Tamer, 2009; De Paula, 2013). Li and Zhao (2016) and Leung (2020) propose promising partial
identification approaches using subnetworks and strategic neighborhoods, respectively. Other
papers (Bajari, Hong and Ryan, 2010; Krauth, 2006; Soetevent and Kooreman, 2007) specify or
estimate a selection rule to determine which equilibrium is played to complete the model (Tamer,
2003). Another option is to assume a sequential game with myopic players, as in Nakajima (2007)
and Badev (2021). I leave the extension of the heterogeneous conformity model to complete
information settings for future research.
Proposition 1 Under Assumptions 1 to 3, the network game of incomplete information has a unique
Bayesian Nash equilibrium, given by p∗ in Equation (7).
The proof of Proposition 1 is provided in Appendix C and is based on the contraction property of
the mapping Γ(p). Γ(p∗) being a contraction mapping is a sufficient condition for the uniqueness
of the fixed point p∗ = Γ(p∗). As the consistency of the rational expectation belief system implies
that for any p, p = Γ(p) only if p is an equilibrium, the unique fixed point p∗ is the unique
equilibrium of the game. Note that Assumption 3 is not a necessary condition for uniqueness, but
is a sufficient and empirically tractable condition (see Section 5.5 in Bhattacharya et al. (2024) for
a related discussion).
3.3 Comparative Statics
Before discussing the identification and estimation of the conformity parameters, I first provide
some intuition about how action-specific heterogeneity in the preference for conformity may affect
the equilibrium strategy profile.
Corollary 1 (i) βh
(1) ⪌ βh
(0) =⇒ p∗
(1) ⪌ p∗
(0) ;
(ii) βl
(1) ⪌ βl
(0) =⇒ p∗
(1) ⪌ p∗
(0) ;
(iii)  ̄p∗
(1) ≥ (≤)  ̄p∗
(0) ∧ βh ⪌ − βl p ̄i
1− p ̄i
∀i ∈ N =⇒ p∗
(1) ⪌ (⪋) p∗
(0) ;
16

(iv)  ̄p∗
(1) ≥ (≤)  ̄p∗
(0) ∧ βh ⪌ 0 ∧ βl ⪌ 0 =⇒ p∗
(1) ⪌ (⪋) p∗
(0) .
Corollaries 1(i) and (ii) present straightforward implications of the equilibrium p∗. In particular,
they show that if a social planner aims to achieve a higher (or lower) equilibrium, then policies—such
as social marketing campaigns—that increase (or decrease) the taste for conformity are effective.
Corollary 1(iii) highlights the non-monotonic effect of the local norm on players’ expected
utility and best response strategies. Specifically, the impact of the expected norm on the equi
librium strategy profile can be positive for some players and negative for others, depending on
the idiosyncratic value of the local norm. Note that in a homogeneous conformity model, the
effect of the expected norm is linear in β = βh = βl and independent of the value of the ex
pected norm. Corollary 1(iii) can be relaxed if the support of p ̄i is restricted. For instance,
if all the players expect that a minority of their friends play the high action, one can show that
1
2 1n ≥ (  ̄p∗)(1) ≥  ̄p∗
(0) ∧ βh ≥ βl ∧ βh ≥ 0 =⇒ p∗
(1) ≥ p∗
(0). In the limit, in societies where
the network is complete or where all players face identical local norms, i.e., where p ̄∗
i = p∗ ∀i ∈ N ,
Corollary 1(iii) is more likely to hold.12
Corollary 1(iv) shows that when βh and βl have the same sign, shifting the expected social
norm toward the high (low) action, for instance via a social norm nudge, allows a social planner
to reach a higher (lower) equilibrium. This result is particularly useful as one may expect that
the action-specific tastes for conformity are generally of the same sign. However, if the taste for
conformity when choosing the high action is non-positive (non-negative) while the other parameter
is positive (negative), Corollary 1(iii) indicates that a nudge that shifts the norm toward the high
action may lead to a lower equilibrium.
12To see this, assume that p ̃ ̄ ∗ is a mean-preserving contraction of p ̄ ∗ =⇒ E[p ̄ ∗] = E[p ̃ ̄ ∗] and maxi p ̃ ̄ ∗
i − mini p ̃ ̄ ∗
i<
maxi p ̄ ∗
i − mini p ̄ ∗
i . If βh ≥ − βl p ̄i
1− p ̄i
∀i ∈ N =⇒ βh ≥ maxi
βl p ̄i
1− p ̄i
> maxi
βl p ̃ ̄i 1− p ̃ ̄i
. If βh ≤ − βl p ̄i
1− p ̄i
∀i ∈ N =⇒ βh ≤
mini
βl p ̄i
1− p ̄i
< mini
βl p ̃ ̄i 1− p ̃ ̄i
. In both cases, Corollary 1(iii) is more likely to hold under the mean-preserving contraction.
17

4 Econometric Model
4.1 Identification
I assume that the data is collected from many networks (many networks asymptotic).13 I also
use a standard empirical specification for αi, αi = m′
iγ0 + x′
i γ1 +  ̄x′
iγ2, where mi ∈ {0, 1}M is a
M-vector indicating player i’s membership to one of the M networks and controls for correlated
effects through the vector of network fixed effects γ0 ∈ RM,14 xi ∈ RK is a K-vector of individual
characteristics and  ̄xi = Í
j≠i gi j xj ∈ RK are the average characteristics of i’s friends and capture
exogenous peer effects. Without loss of generality, let γ := (γ′
0, γ′
1, γ′
2)′ and zi = m′
i, x′
i, x ̄′
i
′.
In addition, let θ = (γ′, βh, Δβ)′ and ki = z′
i, 1{di > 0} p ̄i − 1
2 ,1
2 giΣg′
i
′
gather the model’s
parameters and explanatory variables for a player i in network m, respectively. Identification
fails if two different vectors of parameters θ and θ ̃ yield the same equilibrium pm in network m.
More formally, observe that since αi = z′
iγ, pm = Pr (ym |Zm, Gm; θ), where ym, Zm and Gm are
observed in the data for many networks m. Let θ and θ ̃ be observationally equivalent at Zm and
G
m if Pr (ym |Zm, Gm; θ) = Pr ym |Zm, Gm; θ ̃ , or, following Equation (7), if Fη (Zm, Gm; θ) =
Fη Zm, Gm; θ ̃ . The vector of parameters θ is identified if there does not exist a θ ̃ ≠ θ that is
observationally equivalent to θ. Observational equivalence’s approach to identification is standard
in network games of incomplete information (see, e.g., Brock and Durlauf, 2007; Guerra and
Mohnen, 2022; Houndetoungan, 2024; Yang and Lee, 2017).
Assumption 4 (i) fη is positive almost everywhere on R
(ii) The matrix plimM→∞ 1
M
Ín
i k′
iki is full rank.
Assumption 4(i) implies that Fη is strictly increasing, which guarantees that Fη (u) = Fη (u ̃) only
if u = u ̃. Assumption 4(ii) requires the model’s explanatory variables to be linearly independent,
which is almost surely guaranteed by variation across networks. Especially, the second-to-last
13To keep the notation as simple as possible, I only use the network index m = 1, . . . , M when necessary.
14The presence of the constant 1
2 in the term 1{di > 0}βh p ̄i − 1
2 does not threaten the identification of the
networks fixed effects, even if there are no isolated players, in which case the intercept is γ0 − βh
2 . Indeed, βh is identified independently by p ̄i if Assumption 4 holds.
18

element of ki, 1{di > 0} p ̄i − 1
2 , varies across players and independently of the other variables
if there exists, for at least one network, two players i and j who face a different social norm, i.e.,
∃(i, j) : p ̄i ≠ p ̄ j . Similarly, giΣg′
i varies independently if there exists a network with two players
k and l who have at least one different friend, i.e., ∃ j : gk j ≠ gl j .15 Finally, 1{di > 0} p ̄i − 1
2
and 1
2 giΣg′
i both depends on pm and Gm, I thus impose that there is at least one network where one
player has more than one friend, i.e. ∃i : di ≥ 2. Indeed, if all players have at most one friend,
then for any player i, ∃k ≠ i : gik = 1 and giΣg′
i = g2
ik
pk = pk = p ̄i. Hence, 1{di > 0} p ̄i − 1
2
and 1
2 giΣg′
i would be linearly dependent. All these conditions are very mild when the number of
network M grows large and at least one network is not complete.
Proposition 2 Under Assumption 4, the parameter vector θ of the heterogeneous conformity model
given by Equation (7) is identified.
The proof of Proposition 2 is standard in games of incomplete information and is provided in
Appendix D.
A limitation of Assumption 4 is that the rank condition is imposed on variables that depend
on pm, an equilibrium quantity which is not observed in the data. Assumption 4(ii) is thus not
directly testable in that setting. It also cannot be formally tested after the model has been estimated,
because if the model is not identified, the implied estimate of pm is not valid. Houndetoungan
(2024) proposes a solution in his conformity model for count outcomes, which uses the presence of
intransitive triads, as in Bramoullé et al. (2009). I present below the intuition of this identification
strategy, and the adaptation of Houndetoungan (2024)’s proof to the conformity model with action
specific heterogeneity is available in Appendix E. Let πi ∈ {0, 1} be a dummy variable that equals
one if player i has friends of friends who are not her direct friends, that is, if i lies at the start of
15Indeed, giΣg′
i varies independently if ∃(k, l) : gk Σg′
k − gl Σg′
l = (gk − gl )′Σ(gk + gl )′ = Ín
r=1 g2
kr − g2
lr
pr +
Ín
r , j=1 r≠j
gkr gk j − glr gl j pr p j ≠ 0. The first term is different from zero if gkr ≠ glr , and the second term is zero only
if Ín
r=1 g2
kr − g2
lr
pr = Ín
r , j=1 r≠j
gkr gk j − glr gl j pr p j . These two conditions are unlikely to hold for all players in
all networks, especially if the networks are not complete, i.e., if all players are not friends with eveveryonelse in their network. Hence gk Σg′
k − gl Σg′
l ≠ 0.
19

an intransitive triad: i → j → k, but i ↛ k, where a → b denotes the existence of a link between
players a and b.
Proposition 3 Assumption 4(ii) holds if:
(i) The matrix plimM→∞ 1
M
Ín
i z′
izi is full rank;
(ii) The matrix plimM→∞ 1
M
Ín
i π′
iπi is full rank;
(iii) There is a variable xi,κ in xi such that γ1,κγ2,κ ≥ 0 and γ2,κ ≠ 0, where γ1,κ is the coefficient
of xi,κ and γ2,κ is the coefficient of x ̄i,κ.
Condition (i) imposes that the observed variables in zi are not linearly dependent and is thus less
strict than Assumption 4(ii). Condition (ii) ensures that intransitive triads exist in the networks.
Condition (iii) guarantees that pi is correlated with the contextual variable  ̄xi,κ, such that the
marginal effect dpi
dxj,κ is not zero when γ2,κ ≠ 0 and j is a friend of i. The condition γ1,κγ2,κ ≥ 0
is necessary to ensure that the direct marginal effects of xκ through own and contextual effects do
not cancel its indirect effect through peer effects. I present the intuition with a triple of players, i,
j and k, while the formal proof for any subnetwork configuration is given in Appendix E.
Assume that Assumption 4(ii) is not verified, which implies that the matrix ki is linearly
dependent. For any player l, I can then write:
1{dl > 0}βˇo  ̄pl − 1
2 + Δ|β
1
2 (glΣg′
l) = m′
lγˇ 0 + x′
lγˇ 1 + x ̄′
lγˇ 2 (8)
for some constants βˇo ∈ R, Δ|β ∈ R, γˇ 0 ∈ RM, γˇ 1 ∈ RK and γˇ 2 ∈ RK. Here, j is the only friend of
i, such that, for l = i, Equation (8) simplifies to:16
1{di > 0}βˇo p j − 1
2 + Δ|β
pj
2 = m′
iγˇ 0 + x′
iγˇ1 + x′
j γˇ2
⇐⇒ p j = 1{di > 0}βˇo + Δ|β
2
! −1
m′
iγˇ 0 + x′
i γˇ1 + x′
j γˇ2 + 1{di > 0} βˇo
2
(9)
16If j is the only friend of i, gi j = 1. Hence giΣg′
i = p j , p ̄i = p j and x ̄i = x j .
20

Thus, p j , the expected action of j, is not influenced by xk,κ and the marginal effect dp j
d  ̄xk,κ derived
from Equation (9) is zero. However, since j and k are peers and γ2,κ ≠ 0, dp j
d  ̄xk,κ
≠ 0 (see Equation
(E.1) in Appendix E) and there is a contradiction. Under the conditions given in Proposition
3, Equation (8) cannot hold for all players when many networks include intransitive triads and
plimM→∞ 1
M
Ín
i z′
izi has full rank.
4.2 Estimation
This section presents the strategy for estimating the model parameters θ, assuming that the re
searcher observes ym, Zm and Gm for m = 1, . . . , M. Under Assumption 2, rational expectations
depend solely on the information set {Zm, Gm}, i.e., the strategic decisions of player i’s friends do
not influence player i’s rational expectations. Due to mutual independence, the strategic decisions
of player i’s friends do not affect yi, and each player’s contribution to the global likelihood is
independent. Consequently, the conditional likelihood of the observed action profile y is simply
the product of the likelihoods of the individual actions yi ∀i ∈ N , given the information set. The
conditional log-likelihood function of the observed action profile y, given the consistent rational
expectations p∗, is then expressed implicitly as LM (θ; p∗):
L
M (θ; p∗) = 1
M
n ∑︁
i
yi × ln( p∗
i ) + (1 − yi) × ln(1 − p∗
i)
Let Θ denote the support set of θ. The MLE is θˆ MLE = argmaxθ∈Θ LM (θ; p∗) s.t. p∗ := Γ(θ, p∗),
as defined in Equation (7).17
However, p∗ is not directly observed in the data. To address this issue, I substitute p∗ with an
arbitrary vector p to compute the conditional pseudo log-likelihood L ̃M (θ; p) below:
17To estimate standard errors for βl rather than Δβ, I use an alternative but equivalent form of Equation (7): Γ( p∗) =
Fη α + 1{d > 0n}
n
βh p ̄ ∗ − 1
2 1n − 1
2 diag (GΣG′) + 1
2 βl diag (GΣG′)
o
. For simplicity, I retain the original form
of Equation (7) elsewhere in the paper.
21

L ̃M (θ; p) = 1
M
n ∑︁
i
{yi × ln( pi) + (1 − yi) × ln(1 − pi)} (10)
Define θ ̃ M (p) := argmaxθ∈Θ L ̃M (θ; p) and ΓM (p) := Γ(θ ̃ M , p). Two main approaches have
emerged in the literature on estimating network games with incomplete information. The first one,
used by Lee et al. (2014) and Lin et al. (2021), adapts the Nested Fixed-Point Likelihood method of
Rust (1987). For each candidate value of θ, this sequential approach solves a fixed-point problem
to compute p and the associated pseudo-likelihood. However, solving the fixed point at every
candidate θ is computationally intensive, especially for large M. Aguirregabiria and Mira (2007)
propose an alternative: the Nested Pseudo-Likelihood (NPL) estimator, which updates the fixed
point rather than solving it exactly. Define an NPL fixed point as a pair (θ, p) s.t. p = ΓM (p). The
set of NPL fixed points is given by AM := {(θ, p) ∈ θ × P : θ = θ ̃ M (p), p = ΓM (p)}. The NPL
estimator is then (θˆ NPL, ˆpNPL) = argmax(θ,p)∈AM
L ̃M (θ; p). The sequential estimation starts with
an initial guess of p(0), then estimates θˆ (1) = argmaxθ∈Θ L ̃M (θ; ˆp(0)), and updates the fixed point
in one step as ˆp(1) = ΓM θˆ (1)
, ˆp(0) . The estimated ˆp(1) is then substituted into the pseudo log
likelihood function to obtain updated parameter estimates, θˆ (2) = argmaxθ∈Θ L ̃M (θ; ˆp(1)). This
sequence is repeated until convergence, i.e., when ∥ ˆp(k+1) − ˆp(k) ∥ < c or ∥θˆ (k+1) − θˆ (k) ∥ < c,
where c is a tolerance value sufficiently close to zero. θ (k+1) maximizes the pseudo log-likelihood
and ˆp(k+1) is, by construction, a fixed point that satisfies the consistency condition on rational
expectations.
As noted by Aguirregabiria and Mira (2007), convergence to a fixed point in the NPL estimator
is not theoretically guaranteed. However, Kasahara and Shimotsu (2012) shows that convergence
is guaranteed if the initial starting point lies in the neighborhood of the true parameter and the fixed
point mapping is a contraction, the latter holding under Assumption 3.18
Under a set of regularity assumptions, the large-sample properties of the NPL estimator, namely,
√
n-consistency and asymptotic normality, are established in Aguirregabiria and Mira (2007). Let
18In the empirical section, I verify the convergence of the NPL estimator by also estimating the Nested Fixed-Point Likelihood estimator.
22

∇k L ̃M be the Jacobian matrix ∇k L ̃M (θ0; p∗), where ∇k is the partial derivative with respect to
k, and ∇k Γ be the Jacobian matrix ∇k Γ(θ0, p∗). In addition, I define the following matrices:
Ωθθ′ = E ∇θ L ̃M ∇θ L ̃M
′ , and Ωθp′ = E ∇θ L ̃M ∇pL ̃M
′ . The asymptotic distribution of
the NPL estimator is given by
√
M (θˆ NPL − θ0) d→ N (0, VNPL) where
V
NPL = [Ωθθ′ + Ωθp′ (I − ∇pΓ′ )−1∇θ Γ]−1Ωθθ′ [Ωθθ′ + ∇θ Γ′(I − ∇p Γ)−1Ω′
θp′ ]−1 (11)
23

5 Empirical Application
5.1 Data
The empirical application leverages data from the National Longitudinal Survey of Adolescent to
Adult Health (Add Health), a widely used source for studying social interactions through detailed
friendship networks. The dataset covers 126 U.S. middle and high school students, capturing a
broad range of behaviors and socio-demographic characteristics. The social networks are based
on self-reported friendships within the same school and grade, with students allowed to nominate
up to five male and five female friends. Importantly, Boucher and Houndetoungan (2025) show
that this censoring of network links does not qualitatively affect the estimate of the peer effect
coefficients. In addition, participation in the survey was mandatory unless a parent opted out in
writing, ensuring high participation rates, which mitigates concerns about measurement error due
to missing agents (Chandrasekhar and Lewis, 2011). Finally, Hsieh et al. (2020) and Badev (2021)
show that biases arising from network endogeneity are minimal in the Add Health study.
The main reason for using the Add Health data in the empirical application is to allow a direct
comparison between the heterogeneous peer effects model and the homogeneous model of Lee
et al. (2014). I therefore focus on the same sample, networks, and socio-demographic variables as
Lee et al. (2014), who study smoking behavior. For descriptive statistics of the sample, I refer the
reader to their paper.
A student is classified as a non-smoker if they report never smoking or having smoked only
once or twice in the past year. I extend this analysis to also examine alcohol consumption, defining
a non-drinker as a student who reports never consuming beer, wine, or liquor, or having done so
only once or twice in the past year. 23.1% of the sample smokes while 55.4% drinks alcohol.
5.2 Estimation Results
As a proof of concept, I compare the homogeneous conformity model, used, for instance, in Lee et al.
(2014), with the action-specific heterogeneous model developed in this paper. Table 1 reports the
estimated conformity parameters for the homogeneous and action-specific heterogeneous models,
24

as defined in Equation (7). To ensure comparability with Lee et al. (2014),19 I assume that fη is
logistic and specify as α = Mγ0 + Xγ1 + GXγ2, i.e., I control for school fixed effects, students’
characteristics and exogenous peer effects.20
Homogeneous model Heterogeneous model
Conformity parameters β βh βl Δβ
Smoking 2.392∗∗∗ 1.077∗∗∗ 3.980∗∗∗ 2.903∗∗∗ (0.163) (0.252) (0.214) (0.401) Alcohol Consumption 1.788∗∗∗ 1.772∗∗∗ 1.806∗∗∗ 0.035 (0.156) (0.198) (0.208) (0.284)
Own Effects X X Exogenous Peer Effects X X School Fixed Effects X X
Observations Smoking 74,783 74,783 Consuming Alcohol 74,377 74,377
Log-Likelihood Smoking -36,918.78 -36,878.35 Consuming Alcohol -46,992.86 -46,992.85
Note: ∗ p − value < 0.05, ∗∗ p − value < 0.01, ∗∗∗ p − value < 0.001. The number of observations differs between the two behaviors since students could choose not to answer some survey questions.
Table 1: Structural estimation of the conformity parameters
For both behaviors under scrutiny, the heterogeneous model reaches the largest likelihood, although
likelihood ratio (LR) tests between the homogeneous and heterogeneous models indicate a signif
icantly larger likelihood for smoking behavior only (p − value < 0.001). Since the preference
for conformity is homogeneous for alcohol consumption, the specification test proposed in Ap
pendix A can only be used for smoking. The null hypothesis that the pure conformity model is
consistent with the data cannot be rejected at a 0.01% significance level (p − value = 0.002),
19Lee et al. (2014) encode the binary action as Yi = {−1, 1}, while I use Yi = {0, 1}. The reported parameters are, by construction, four times larger in my paper. 20Given the sample size and the number of students per school, including fixed effects does not result in an incidental parameters issue in this context.
25

while the null hypothesis that the pure spillover is consistent with the data is strongly rejected
(p − value < 10−16).21
In the case of smoking, comparing the estimated coefficients in both models reveals a pro
nounced action-specific heterogeneity in the preference for conformity, not accounted for by the
homogeneous conformity parameter β. Specifically, in the homogeneous specification for smoking
behavior, βp is estimated at 2.392. In contrast, the heterogeneous model yields a lower estimate for
taste for conformity when choosing the high action, βxh = 1.077, and a larger estimate for the taste
for conformity when choosing the low action, βpl = 3.980. The homogeneous conformity parameter
can thus be interpreted as a weighted sum of the heterogeneous conformity parameters. The het
erogeneous model implies that the preference for conformity is stronger among non-smokers than
among smokers. This result is intuitive: choosing not to smoke despite having at least one friend
who smokes imposes a double penalty, both from deviating from the norm and exposure to passive
smoking. Given the addictive nature of smoking, the relatively low preference for conformity for
smokers is expected. Note that Δxβ is positive and significant, indicating a positive and convex effect
of the expected social norm on the marginal expected utility from smoking. Panel (a) of Figure 1
illustrates how the marginal effect of the expected norm on the expected utility of smoking rather
than not smoking, ∂E[ΔiUi]
∂p ̄i , increases as the expected norm approaches one in the heterogeneous
model. The more smoking becomes the norm among friends, the more costly it is to abstain,
since choosing an action below the norm is more penalized than choosing an action above. In the
homogeneous model, the marginal effect of the norm is constant: a 10pp shift of the expected norm
from 10 to 20% has the same effect as a shift from 80 to 90%. In contrast to smoking, the estimated
heterogeneous tastes for conformity for drinking alcohol are not significantly different, suggesting
that individuals have homogeneous preference for conformity across actions. In this case, the
specification with a homogeneous social distance function provides a satisfactory approximation
(see Panel (b) of Figure 1 for an illustration).
21Note that since the sample size if very large (74,783), I favor a strict significance level to reduce the risk of Type I error. At a 5% or 1% significance level, the specification concludes that the pure conformity model is not consistent with the data.
26

Figure 1: Effect of the expected norm on the marginal expected utility ΔE[U]
The red line is the sample average marginal effect of the expected norm p ̄ on ΔE[U] among non-isolated students in the heterogeneous model. Since Δβ and βh are positive for both behaviors, the marginal effect increases with the norm in the heterogeneous specification. The blue line corresponds to the homogeneous model, where the marginal effect is constant and equal to β.
The marginal effects of the norm are of the standard logit form, ∂p∗
i
∂ ( p ̄∗
i ) = 1{di > 0} βˆh + Δxβ p ̄∗
i p∗
i (1−
p∗
i ). The sample average marginal effect of an increase in the social norm is strong: for non-isolated
students, expecting a friend to shift from the low to the high action increases the probability of
selecting the high action in the heterogeneous model by 0.115pp and 0.154pp for smoking and
alcohol consumption, respectively.22 In the homogeneous model, the average marginal effect of the
social norm is weakly lower, reaching 0.146pp and 0.154pp for tobacco and alcohol consumption,
respectively. Peer effects are thus underestimated in the homogeneous specification in the case of
smoking.
22Non-isolated students have on average 3.84 friends, and thus expecting one friend to shift to the high action corresponds to an increase of 0.26pp of the norm.
27

6 Conclusion
This paper introduces a structural conformity model that allows for action-specific heterogeneity
in the preference for conformity to the local norm. The microfoundations of this model are
established within a network game of incomplete information and a binary action space. The
Bayes-Nash equilibrium is unique under a mild assumption on the strength of the heterogeneous
tastes for conformity. I show that the model is identified, even with heterogeneous conformity
parameters. I also propose a specification test to infer if the conformity or spillover models are
(separately) consistent with the data, when action-specific heterogeneity is present.
Using the NPL estimator, I estimate the heterogeneous model on smoking behavior among US
high school students and illustrate how assuming a homogeneous conformity preference, as in Lee
et al. (2014), may lead to biased estimates of endogenous peer effects. To further characterize
the richness of modeling a heterogeneous preference for conformity, I apply the model to alcohol
consumption. I uncover the intuitive result that deviating from the norm is more costly for non
smokers than smokers, because of passive smoking and the addictive nature of smoking. For
alcohol consumption, I find that the taste for conformity is similar when choosing to drink or not. I
can therefore run the specification test only for smoking, which rejects the null hypothesis that the
spillover model is consistent with the data but fails to reject the null for the conformity model at
the 0.1% significance level.
Based on these empirical findings, I encourage further research efforts to incorporate hetero
geneity in conformity preferences into models for continuous outcomes.
28

References
Aguirregabiria, V. and Mira, P. (2007), ‘Sequential estimation of dynamic discrete games’, Econo
metrica 75(1), 1–53.
Akerlof, G. (1997), ‘Social distance and social decisions’, Econometrica 65(95), 1005.
Akerlof, G. A. (1980), ‘A theory of social custom, of which unemployment may be one conse
quence’, The quarterly journal of economics 94(4), 749–775.
Azmat, G. and Iriberri, N. (2010), ‘The importance of relative performance feedback information:
Evidence from a natural experiment using high school students’, Journal of Public Economics
94(7-8), 435–452.
Badev, A. (2021), ‘Nash equilibria on (un)stable networks’, Econometrica 89(3), 1179–1206.
Bajari, P., Hong, H., Krainer, J. and Nekipelov, D. (2010), ‘Estimating static models of strategic
interactions’, Journal of Business & Economic Statistics 28(4), 469–482.
Bajari, P., Hong, H. and Ryan, S. P. (2010), ‘Identification and estimation of a discrete game of
complete information’, Econometrica 78(5), 1529–1568.
Ballester, C., Calvó-Armengol, A. and Zenou, Y. (2006), ‘Who’s who in networks. wanted: The
key player’, Econometrica 74(5), 1403–1417.
Bernheim, B. D. (1984), ‘Rationalizable strategic behavior’, Econometrica: Journal of the Econo
metric Society pp. 1007–1028.
Bhattacharya, D., Dupas, P. and Kanaya, S. (2024), ‘Demand and welfare analysis in discrete choice
models with social interactions’, Review of Economic Studies 91(2), 748–784.
Blume, L. E., Brock, W. A., Durlauf, S. N. and Jayaraman, R. (2015), ‘Linear Social Interactions
Models’, Journal of Political Economy 123(2), 444–496.
Boucher, V. (2016), ‘Conformism and self-selection in social networks’, Journal of Public Eco
nomics 136, 30–44.
29

Boucher, V. and Houndetoungan, A. (2025), ‘Estimating peer effects using partial network data’.
Boucher, V., Rendall, M., Ushchev, P. and Zenou, Y. (2024), ‘Toward a general theory of peer
effects’, Econometrica 92, 543–565.
Bramoullé, Y., Djebbari, H. and Fortin, B. (2009), ‘Identification of peer effects through social
networks’, Journal of Econometrics 150, 41–55.
Bramoullé, Y., Djebbari, H. and Fortin, B. (2019), ‘Peer effects in networks: a survey’, Annual
Review of Economics 12, 603–619.
Brock, W. A. and Durlauf, S. N. (2001), ‘Discrete Choice with Social Interactions’, The Review of
Economic Studies 68(2), 235–260.
Brock, W. A. and Durlauf, S. N. (2007), ‘Identification of binary choice models with social
interactions’, Journal of Econometrics 140(1), 52–75.
Chandrasekhar, A. and Lewis, R. (2011), ‘Econometrics of sampled networks’, Unpublished
manuscript, MIT.[422] 2, 7.
Ciliberto, F. and Tamer, E. (2009), ‘Market structure and multiple equilibria in airline markets’,
Econometrica 77(6), 1791–1828.
De Paula, A. (2013), ‘Econometric analysis of games with multiple equilibria’, Annu. Rev. Econ.
5(1), 107–131.
Fehr, E. and Schmidt, K. M. (1999), ‘A theory of fairness, competition, and cooperation’, The
quarterly journal of economics 114(3), 817–868.
Fershtman, C. and Weiss, Y. (1998), ‘Social rewards, externalities and stable preferences’, Journal
of Public Economics 70(1), 53–73.
Glaeser, E. and Scheinkman, J. A. (2003), Nonmarket Interactions, Econometric Society Mono
graphs, Cambridge University Press, p. 339–370.
30

Guerra, J.-A. and Mohnen, M. (2022), ‘Multinomial choice with social interactions: Occupations
in victorian london’, Review of Economics and Statistics 104(4), 736–747.
Herstad, E. I. and Shin, M. (2024), ‘Identification of a rank-dependent peer effect model’, arXiv
preprint arXiv:2410.14317 .
Horst, U. and Scheinkman, J. A. (2006), ‘Equilibria in systems of social interactions’, Journal of
Economic Theory 130(1), 44–77.
Houndetoungan, A. (2025), ‘Quantile peer effect models’.
URL: https://arxiv.org/abs/2506.12920
Houndetoungan, E. A. (2024), ‘A Count Data Model with Social Interactions’, SSRN Electronic
Journal .
Hsieh, C.-S., Lee, L.-F. and Boucher, V. (2020), ‘Specification and estimation of network forma
tion and network interaction models with the exponential probability distribution’, Quantitative
economics 11(4), 1349–1390.
Hsieh, C.-S. and Van Kippersluis, H. (2018), ‘Smoking initiation: Peers and personality’, Quanti
tative Economics 9(2), 825–863.
Immorlica, N., Kranton, R., Manea, M. and Stoddard, G. (2017), ‘Social status in networks’,
American Economic Journal: Microeconomics 9(1), 1–30.
Jackson, M. O. and Zenou, Y. (2015), Games on networks, in ‘Handbook of game theory with
economic applications’, Vol. 4, Elsevier, pp. 95–163.
Kandel, E. and Lazear, E. P. (1992), ‘Peer pressure and partnerships’, Journal of political Economy
100(4), 801–817.
Kasahara, H. and Shimotsu, K. (2012), ‘Sequential estimation of structural models with a fixed
point constraint’, Econometrica 80(5), 2303–2319.
31

Krauth, B. V. (2006), ‘Simulation-based estimation of peer effects’, Journal of Econometrics
133(1), 243–271.
Lambotte, M. (2025), ‘Peer effects in binary outcomes: Strategic complementarity and taste for
conformity with endogenous networks’, Journal of Applied Econometrics .
Lee, L.-f., Li, J. and Lin, X. (2014), ‘Binary Choice Models with Social Network under Heteroge
neous Rational Expectations’, Review of Economics and Statistics 96(3), 402–417.
Leung, M. P. (2020), ‘Equilibrium computation in discrete network games’, Quantitative Economics
11(4), 1325–1347.
Li, J. and Lee, L.-f. (2009), ‘Binary choice under social interactions: an empirical study with and
without subjective data on expectations’, Journal of Applied Econometrics 24(2), 257–281.
Li, T. and Zhao, L. (2016), ‘A partial identification subnetwork approach to discrete games in large
networks: An application to quantifying peer effects’, The Institute for Fiscal Studies .
Lin, Z. (2024), ‘Quantile effects in discrete choice with social interactions’, Forthcoming at The
Review of Economics and Statistics .
Lin, Z., Tang, X. and Yu, N. N. (2021), ‘Uncovering heterogeneous social effects in binary choices’,
Journal of Econometrics 222(2), 959–973.
Lin, Z. and Xu, H. (2017), ‘Estimation of social-influence-dependent peer pressure in a large
network game’, The Econometrics Journal 20(3), S86–S102.
Liu, X. (2019), ‘Simultaneous equations with binary outcomes and social interactions’, Econometric
Reviews 38(8), 921–937.
López-Pintado, D. and Meléndez-Jiménez, M. A. (2021), ‘Far above others’, Journal of Economic
Theory 198, 105376.
Nakajima, R. (2007), ‘Measuring peer effects on youth smoking behaviour’, The Review of Eco
nomic Studies 74(3), 897–935.
32

Patacchini, E. and Venanzoni, G. (2014), ‘Peer effects in the demand for housing quality’, Journal
of Urban Economics 83, 6–17.
Rust, J. (1987), ‘Optimal replacement of gmc bus engines: An empirical model of harold zurcher’,
Econometrica: Journal of the Econometric Society pp. 999–1033.
Soetevent, A. R. and Kooreman, P. (2007), ‘A discrete-choice model with social interactions: With
an application to high school teen behavior’, Journal of Applied Econometrics 22(3), 599–624.
Tamer, E. (2003), ‘Incomplete simultaneous discrete response model with multiple equilibria’, The
Review of Economic Studies 70(1), 147–165.
Ushchev, P. and Zenou, Y. (2020), ‘Social norms in networks’, Journal of Economic Theory
185, 104969.
Xu, H. (2018), ‘Social interactions in large networks: A game theoretic approach’, International
Economic Review 59(1), 257–284.
Yang, C. and Lee, L.-f. (2017), ‘Social interactions under incomplete information with heteroge
neous expectations’, Journal of Econometrics 198(1), 65–83.
Zenou, Y. (2025), ‘Peer vs. network effects: Microfoundations, identification, and beyond’, SSRN .
33

Appendices
A Heterogeneity, Non-Equivalence of the Spillover and Confor
mity Models and a Specification Test
In this Appendix, I show that the best response functions from the spillover and conformism models
are no longer identical once action-specific heterogeneity is introduced. This notably allows me to
propose specification tests to infer if each microfoundations is consistent with the data.
In contrast to the heterogeneous case, the spillover and conformity microfoundations are equiv
alent under homogeneous peer effects, differing only by a constant intercept shift. This equivalence
was demonstrated by Brock and Durlauf (2001) for yi = {−1, 1}. I first provide a brief exposition
when yi = {0, 1} and peer effects are homogeneous. To my knowledge, this derivation, although
trivial, does not appear in the literature.
A.1 Spillover and conformity model with homogeneous peer effects
Let Uspill (yi, y−i) and Ucon f (yi, y−i) be the utility functions in the spillover and conformity models,
respectively, and given by:
Uspill (yi, y−i) := αi yi + 1{di > 0} βspill y ̄i yi + βspill (1 − y ̄i) (1 − yi) + ε (yi)
and
Ucon f (yi, y−i) := αi yi − 1{di > 0} βcon f
2 (yi − y ̄i)2 + ε (yi)
where Uspill (·) is similar to the utility function in Xu (2018). The utility of a player who selects
the high (low) action increases with the share of her friends who play the high (low) action. Since
I consider a binary outcome, this model also implies that the utility of a player who selects the
high (low) action decreases with the share of her friends who play the low (high) action. Under
Assumptions 1 and 2, and the same derivation as in the main text, the best responses are given by:
34

Prspill (yi = 1|α, G) = Fη αi + 1{di > 0} 2βspill ( p ̄i − 1)
and
Prcon f (yi = 1|α, G) = Fη αi + 1{di > 0} βcon f p ̄i − 1
2
The best responses from the spillover and conformity models are then identical when peer effects are
homogeneous, with βcon f = 2βspill. Then, the researcher cannot identify the true microfoundation
from the data.
A.2 Spillover and conformity model with action-specific peer effects
I now introduce action-specific heterogeneity. Let
Uspill (yi, y−i) := αi yi + 1{di > 0} βh y ̄i yi + βl (1 − y ̄i) (1 − yi) + ε (yi)
and
Ucon f (yi, y−i) := αi yi − 1{di > 0} βh
2 (yi − y ̄i)2yi + βl
2 (yi − y ̄i)2(1 − yi) + ε (yi)
where Ucon f (·) corresponds to Equation (4), the utility function of the heterogeneous conformity
model studied in the main text.
Under Assumptions 1 and 2, and the same derivation as in the main text, the best responses are
given by:
Prspill (yi = 1|α, G) = Fη αi + ( βh + βl) p ̄i − 1{di > 0}βl (A.1)
and
Prcon f (yi = 1|α, G) = Fη αi + 1{di > 0} βh p ̄i − 1
2 +1
2 Δβ giΣg′
i (A.2)
where the last equation corresponds to Equation (7). The best response functions are not identical
unless βh = βl, i.e., if the taste for conformity is homogeneous.
35

A.3 Specification test
I define the following generalized reduced-form equation:
Pr (yi = 1 | α, G) = Fη αi + β1 p ̄i + β21{di > 0} + β3(giΣg′
i)
!
. (A.3)
This generalized reduced-form equation nests both the best response functions from the spillover
model (Equation (A.1)) and the conformity model (Equation (A.2)). Specifically, the mappings are
as follows:
• Spillover model: β1 = βl + βh, β2 = −βl, β3 = 0.
• Conformity model: β1 = βh, β2 = − βh
2 , β3 = βl−βh
2.
It is then straightforward to define specification tests for each model:
• Spillover model: The null hypothesis is H0 : β3 = 0, which implies that a pure spillover
model is consistent with the data. The alternative hypothesis is H1 : β3 ≠ 0 and implies that
a pure spillover model is not consistent with the data. This restriction can be tested using a
Wald test.
• Conformity model: The null hypothesis is H0 : β1 = −2β2, which implies that a pure
conformity model is consistent with the data. The alternative hypothesis is H1 : β1 ≠ −2β2,
and a Wald test can also be applied here.
36

B Alternative Social Distance Functions and Outcome Coding
In this Appendix, I present several alternative social distance functions and show that action-specific
heterogeneity in the preference for conformity can also be identified in the resulting conformity
models. I consider first an aggregate social distance function that computes the average (or sum,
à la Boucher (2016)) of distances from friends’ actions rather than the deviation from the average
action of friends. Then, I study a linear social distance function, such as the one used by Akerlof
(1980), Kandel and Lazear (1992) or Fershtman and Weiss (1998). However, identification in both
models relies on the existence of isolated players. Since, in some network data, none of the agents
are isolated, I focus in the main text on the quadratic distance function.
In addition, I show that using the alternative coding yi = {−1, 1}, as in Lee et al. (2014) and
Brock and Durlauf (2001), results in an identification failure once action-specific heterogeneity is
introduced.
B.1. A social distance function that computes the weighted sum of distances from friends’
actions rather than the distance to the weighted sum of friends’ actions
I use the term weighted sum so that the social distance introduced here accommodates both the
average (when the interaction matrix is row-normalized and the weights are 1
di ) and the sum (when
the interaction matrix is the adjacency matrix). The interaction matrix is denoted W = [wi j ].
Consider the following heterogeneous social distance function, which computes the weighted sum
of the distance between the player’s action and the actions of her friends, rather than the distance
between the player’s action and the weighted sum of her friends’ actions:
S ̃(yi, y−i) = yi
βh
2
∑︁
j ≠i
wij yi − y j
2 + (1 − yi) βl
2
∑︁
j ≠i
wij yi − y j
2
When W is the adjacency matrix, this distance function aggregates the deviations of a player from
all of her friends’ actions and scales with the players’ degrees. This specification may be empirically
relevant, as it captures the idea that the pressure to conform could be stronger (or weaker) in larger
37

groups. Recognizing that yi = 1 =⇒ yi ≥ y j and yi = 0 =⇒ yi ≤ y j , the expected utility
function derived from S ̃ can be written as:
E|Ui (yi, y−i)] =



αi − 1 {di > 0} E S ̃(1, y−i)|α, W + εi (1) if yi = 1
−1 {di > 0} E S ̃(0, y−i)|α, W + εi (0) if yi = 0
=



αi − 1 {di > 0} βh
2
Í
j≠i wi j 1 − 2E y j |α, W + E
h
y2
j |α, W
i
+ εi (1) if yi = 1
−1 {di > 0} βl
2
Í
j≠i wi j E
h
y2
j |α, W
i
+ εi (0) if yi = 0
=



αi − 1 {di > 0} βh
2 (1 − wip) + εi (1) if yi = 1
−1 {di > 0} βl
2 wip + εi (0) if yi = 0
where E
h
y2
j |α, W
i
= E y j |α, W since y j is a binary outcome. Using the same derivation of the
players’ decision rule as in the paper, I obtain the following best response strategies:
p∗ = Fη α + βh
2 (Wp∗ − 1 {d > 0n}) + βl
2 Wp∗ (B.1)
It is straightforward to use the approach given in Appendix C to show that the equilibrium is unique
if | βh + βl | ≤ 2
maxu fη (u) . However, the identification strategy differs from the model presented in
the main text because βh and βl are separately identified only in the presence of isolated players
in the network. The use of isolated players for identification has also been emphasized recently
by Boucher et al. (2024). In the present context, the existence of isolated players ensures the
identification of βh. To see this, recall that αi = m′
iγ0 + x′
i γ1 + x ̄′
iγ2 and note that p ̄∗
i = 0 if i is
isolated or if none of her friends play the high action. Consider first the best-response of isolated
players, denoted by the iso index:
p
iso = Fη m′
isoγ0 + x′
isoγ1 +  ̄x′
isoγ2
Assuming, as in Boucher et al. (2024), that the coefficients (γ0, γ1, γ2) are the same among
38

the isolated and non-isolated sub-samples, these parameters are identified. Then, consider the
non-isolated players who face a norm at 0, i.e. p ̄i = 0, indexed by (niso, 0):
p
niso,0 = Fη m′
niso,0γ0 + x′
niso,0γ1 +  ̄x′
niso,0γ2 − βh
2
Because (γ0, γ1, γ2) is identified, βh can be identified. Finally, consider the non-isolated players
who face a positive norm, i.e. 0 < p ̄i ≤ 1 and index them by (niso, 1):
p
niso,1 = Fη m′
niso,1γ0 + x′
niso,1γ1 +  ̄x′
niso,1γ2 + βh
2  ̄pniso,1 − 1 dniso,1 > 0 + βl
2  ̄pniso,1
Assuming that the taste for conformity when choosing the high action is identical between the non
isolated players that face a norm at zero and those that face a strictly positive one, βl is identified.
B.2. Linear social distance function
Next, consider an alternative linear social distance function such as the one used by Akerlof (1980),
Kandel and Lazear (1992) or Fershtman and Weiss (1998):23
S(yi, y−i) = β |yi − y ̄−i |
This distance function differs from the quadratic one because small deviation from the norm are
as penalized (relatively) compared to large ones, i.e., ∂S(yi,y−i)
∂(yi−y ̄−i) = β, whereas the quadratic social
distance function yields ∂Squad (yi,y−i)
∂(yi−y ̄−i) = 2β|yi − y ̄−i |. The linear distance function with action
specific heterogeneity can be written as:
Slin (yi, y−i) = yi βh (yi − y ̄−i) + (1 − yi) βl (y ̄−i − yi)
23The associated utility function also corresponds to the one used in the inequality aversion model of Fehr and Schmidt (1999).
39

and the associated expected utility is given by:
E[Ui (yi, y−i)] =



αi − 1 {di > 0} βh Í
j≠i gi j (1 − p j ) + εi (1) if yi = 1
−1 {di > 0} βl Í
j≠i gi j p j + εi (0) if yi = 0
=



αi + βh ( p ̄i − 1 {di > 0}) + εi (1) if yi = 1
−βl p ̄i + εi (0) if yi = 0
Which yields the following best responses at the BNE:
p∗ = Fη α + βh (  ̄p∗ − 1 {d > 0n}) + βl  ̄p∗ (B.2)
Note that the best response function with the linear distance function given in Equation (B.2) is a
rescaled version of the best response function derived from the aggregate quadratic distance func
tion, given in Equation (B.1). This implies that the equilibrium is unique in the linear conformity
model if the interaction parameters satisfy |βh + βl | < 1
maxu fη (u) and that the identification strategy
via isolated players can also be applied.
In addition, observe that Equations (B.1) and (B.2) can be obtained as special cases of the gen
eralized reduced-form equation given by Equation (A.3), with β1 = βl+βh
2 , β2 = − βh
2 , β3 = 0 and
β1 = βl + βh, β2 = −βh, β3 = 0, respectively. Thus, the same specification test as for the spillover
model can be used to infer whether a conformity model with a linear or aggregate social distance
function is consistent with the data. The test cannot distinguish among the spillover, the conformity
model with a linear social distance function or an aggregate distance function. Importantly, if
the null hypothesis of this test is rejected while the null hypothesis of the test regarding the main
conformity model (Equation (7) or (A.2)) is not, then we can conclude that the data is consistent
only with the main conformity model.
B.3. Alternative coding scheme
40

Using the heterogeneous social distance function developed in this paper with Brock and Durlauf
(2001) and Lee et al. (2014)’s coding scheme, Yi := {−1, 1}, yields:
p∗ = Fη 2α + 1 {d > 0n} βh  ̄p∗ − 1
2 1n + 1 {d > 0n} βl  ̄p∗ + 1
2 1n + 1
2 Δβdiag (GΣG′)
This model is not identified unless βh = βl, which corresponds to a homogeneous distance function
and yields p∗ = Fη (2αi + 2β  ̄p∗), i.e., the model proposed by Brock and Durlauf (2001).24 Contrary
to the models discussed in B.1 and B.2, identification fails here because non-isolated players that
face a norm at zero do not help identifying βh or βl. Indeed, their best response function is
p
niso,0 = Fη 2αniso,0 − βh + βl
24This nonidentification result also holds with the social distance functions introduced in B.1 and B.2, S ̃ and Slin, when Yi := {−1, 1}, but is omitted for brevity.
41

C Proof of Proposition 1
Proof of Proposition 1
I prove that Γ is a contraction mapping for the metric d (x, y) = ∥x − y∥∞, i.e., the L∞ norm. Note
that the L∞ of a given square matrix X is its maximum row sum, i.e., ||X||∞ = max
i
Í
i≠ j
xi j . The
objective is to show that ∥(Γ(x)−Γ(y)∥∞
∥x−y∥∞
< 1∀x, y ∈ p. It is well-known from the mean-value theorem
that this is equivalent to proving that ∥ ∂Γ(p)
∂p ∥∞ < 1.
Let f∗
i = fη αi + 1{d > 0n}
n
βh p ̄∗
i −1
2 +1
2 ΔβgiΣg′
i)
o
be the derivative of Equation (7).
The Jacobian of Γ(p) can then be written as:
∂ Γ ( p)
∂p = βh
©
«
g11 f ∗
1 . . . g1n f ∗
1
...
...
...
gn1 f ∗
n . . . gnn f ∗
n
a ® ® ® ®
¬
+1
2Δβ
©
«
2p ̄1g11 + g2
11 (1 − 2p1) f ∗
1 . . . 2p ̄1g1n + g2
1n (1 − 2pn) f ∗
1
...
...
...
2p ̄ngn1 + g2
n1(1 − 2p1) f ∗
n . . . 2p ̄ngnn + g2
nn(1 − 2pn) f ∗
n
a ® ® ® ®
¬
where the derivability of Fη is ensured by Assumption 1. Expressing the L∞ norm of Equation A.1
yields:
∂ Γ ( p)
∂p ∞
= max
i∈N
n ∑︁
j =1
βhgi j + 1
2Δβ
h
2p ̄igi j + g2
ij (1 − 2p j)
i
f∗
i
= max
i∈N
f∗
i
n ∑︁
j =1
βhgi j + 1
2Δβ
h
2p ̄igi j + g2
ij (1 − 2p j)
i
≤ max
i∈N
f∗
i
n ∑︁
j =1
βh |gi j | + |Δβ| | p ̄i ||gi j | + 1
2 |Δβ| g2
ij |1 − 2p j |
≤ max
u
fη (u) |βh| + |Δβ| + 1
2 |Δβ|
= max
u
fη (u) |βh| + 3
2 |βl − βh|
where the first equality follows from the definition of the L∞ norm, while the second equality holds
42

because fη (.) is non-negative by definition. Recall that gi j ∈ [0, 1], p j ∈ [0, 1], ||G ||∞ = 1 so
that max
i∈N
Í
j g2
i j 1 − 2p j ≤ max
i∈N
n Í
j
g2
i j ≤ max
i∈N
n Í
j
gi j = ||G||∞ = 1, which explains the last inequality.
It follows that ∥ ∂Γ(p)
∂p ∥∞ < 1 if and only if:
|βh| + 3
2 |βl − βh | max
u
fη (u) < 1
⇐⇒ |βh| + 3
2 |βl − βh| <
1
maxu fη (u) (B.1)
If Equation (B.1) holds, then from the contraction mapping theorem stated above, Γ is a contraction
mapping and the equilibrium p∗ is unique. ■
43

D Proof of Proposition 2
Let θ and θ ̃ be two sets of parameters such that:
p
m = Fη (Zm, Gm; θ)
 ̃pm = Fη Zm, Gm; θ ̃
The model is identified if there does not exist a θ ̃ ≠ θ that is observationally equivalent to θ, i.e.
such that pm =  ̃pm. Then, observationally equivalence implies:
Fη (Zm, Gm; θ) = Fη Zm, Gm; θ ̃
since Assumption 4(i) guarantees that Fη is strictly increasing.
Using Equation (7), the above equality can be rewritten for each player i in network m as:
z′
iγ + 1{di > 0} βh p ̄i − 1
2 + Δβ
1
2 giΣg′
i = z′
iθ ̃ + 1{di > 0} β ̃h p ̄i − 1
2 + Δfβ
1
2 giΣg′
i
⇐⇒ k′
iθ = k′
i θ ̃
Hence, θ and θ ̃ are equivalent only if 1
M
Ín
i=1 k′
ikiθ = 1
M
Ín
i=1 k′
ikiθ ̃ . Under Assumption 4, the
matrix plimM→∞ 1
M
Ín
i k′
iki is full rank, which implies that θ and θ ̃ are observationally equivalent
only if θ = θ ̃ . ■
44

E Proof of Proposition 3
The proof follows closely Houndetoungan (2024). Let Nm be the partition of N that comprises the
nm players belonging to network m and Inm be the nm-dimensional identity matrix .
For any (i, j) ∈ Nm, the marginal effect of x j,κ on pi is given by the total differential of Equation
(7):
dpi
dx j,κ
= f∗
i × βhg′
m,i + 1
2 Δβ 2p ̄ig′
m,i + diag(gm,i)2 (1nm − 2pm
dpm
dx j,κ
+ f∗
i γ2,κgi j
= f∗
i × βhg′
m,i + 1
2 Δβ 2p ̄ig′
m,i + diag(gm,i)2 (1nm − 2pm)
× Inm − diag( f ∗
1,..., f∗
nm) βhGm′ + 1
2 Δβ 2  ̄pmG′
m + diag(Gm)2 (1nm − 2pm
−1
ej + f∗
i γ2,κgi j
(E.1)
where e j = (e j,1, . . . , e j,nm)′ is an nm × 1 vector such that e j, j = γ1,κ ̄ f ∗
j and e j,k = γ2,κ ̄g j k f ∗
k if k ≠
j. If Assumption 4 does not hold, ki is linearly dependent and, for any player i ad network m, I
derive:
1{di > 0}βˇo p ̄i − 1
2 +1
2
Δ|βgm,i Σm g′
m,i = m′
iγˇ 0 + x′
i γˇ1 +  ̄x′
iγˇ2 (E.2)
for some constants βˇo ∈ R, Δ|β ∈ R, γˇ0 ∈ Rcols(M), γˇ1 ∈ Rcols(X) and γˇ2 ∈ Rcols(X). Let
J
i,m = { j : gi j > 0} denote the set that contains all peers of i in the network m and Ki,m = {k :
g j k > 0 and gik = 0} denote the set of player j’s peers who are not peers of player i. Since player i
has no friend in Ki,m, the right-hand side of (E.2) does not depend on any player k ∈ Ki,m. Hence,
the marginal effect of xk,κ on the left-hand side of (E.2) is zero:
d1{di > 0}βˇo p ̄i − 1
2 +1
2
Δ|βgi,m Σm g′
i,m
dx k ,κ
= βˇogi,m′ + 1
2
Δ|β 2p ̄ig′
i,m + diag(gi,m)2 (1nm − 2pm) dpm
dx k ,κ
= 0 ∀k ∈ Ki,m (E.3)
Since γ2,κ ≠ 0 and players j ∈ Ji,m have players k ∈ Ki,m as peers, Equation (E.1) implies that
45

dpj
dx k , κ
≠ 0 ∀ j ∈ Ji,m, k ∈ Ki,m. This implies that the term
βˇo g′
i,m + 1
2
Δ|β 2p ̄ig′
i,m + diag(gi,m)2 (1nm − 2pm) = 0
in Equation (E.3). This is possible only if:
(i) i is isolated,
(ii) βˇog′
i,m = − 1
2
Δ|β 2p ̄ig′
i,m + diag(gi,m)2 (1nm − 2pm) ∀i ∈ N ,
(iii) βˇo is zero and 2p ̄ig′
i,m = − diag(gi,m)2 (1nm − 2pm),
(iv) or βˇo and Δ|β are zero.
Condition (i) cannot hold if plimM→∞ 1
M
Ín
i z′
izi is full rank since 1{di > 0} p ̄i − 1
2 = 0 ∀i ∈ N
if all players are isolated. The conditions (ii) and (iii) require a perfect offset of the left and right
hand sides, which is very unlikely to hold for all players in many networks. The condition (iv)
implies that E.2 simplifies to miγˇ 0 + xiγˇ1 + xj γˇ2 = 0 which is not possible if plimM→∞ 1
M
Ín
i z′
izi
is full rank. ■
46

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:36.871Z
- **Text Length:** 79973 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 46 of 46
