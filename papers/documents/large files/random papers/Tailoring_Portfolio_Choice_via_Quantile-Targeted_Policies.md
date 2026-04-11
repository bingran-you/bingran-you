# PDF Document: Barunik et al. - 2025 - Tailoring Portfolio Choice via Quantile-Targeted Policies.pdf

**File Path:** Barunik et al. - 2025 - Tailoring Portfolio Choice via Quantile-Targeted Policies.pdf

**Processed Date:** 2026-02-10T18:14:53.607Z

**File Size:** 1961.88 KB

**Total Pages:** 49

**Extracted Pages:** 49

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3601

**Title:** Tailoring Portfolio Choice via Quantile-Targeted Policies

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Tailoring Portfolio Choice via Quantile-Targeted Policies‡
Jozef Baruník***
Charles University and
Czech Academy of Sciences
Lukáš Janásek**
Charles University and
Czech Academy of Sciences
Attila Sárkány*
Charles University and
Czech Academy of Sciences
October 23, 2025
Abstract
We study the dynamic investment decisions of investors who prioritise specific quantiles of outcomes over their expected values. Downside-focused agents targeting low quantiles reduce risk in states with high variance, while those with a preference for high quantiles concentrate in sleeves with high dispersion when there is potential for upside. These results provide a microfoundation for volatility management, demonstrating that reducing exposure in volatile states is an optimal response for risk-
-averse investors and rationalising inverse-variance heuristics. We propose a distributional actor-critic algorithm that learns time-consistent policies tailored to these specific risks, irrespective of the utility’s functional form. The quantile value can be mapped onto interpretable tilts, and the performance of empirically chosen portfolios aligns with investors’ objectives.
Keywords: Dynamic portfolio choice; Quantile preferences; Distributional reinforcement learning; Volatility management; Tail risk. JEL: G11, G12, C61, C63
‡We are grateful to Li Xia, Balazs Szorenyi from Yahoo Research, and Alexander Remorov from BlackRock’s Systematic Active Equities for valuable discussions and comments. We appreciate the insightful comments from numerous seminar presentations, CIML 2025, “Frontiers of Causal Inference and Machine Learning”, Hungarian Machine Learning Days 2025 , and FinEML 2025. The support of the Czech Science Foundation within the project 24-11555S as well as Charles University GAUK 394825 and Research Centre p-
rogram No. 24/SSH/020 is gratefully acknowledged. The replication code in Python and setup for the paper is available at https://github.com/Attilasarkany/Q-A2C-Replication.
***Institute of Economic Studies, Charles University, Opletalova 26, 110 00, Prague, CR and Institute of Information Theory and Automation, Czech Academy of Sciences , Pod Vodarenskou Vezi 4, 18200, Prague, Czech Republic. E-mail: barunik@fsv.cuni.cz Web: barunik.github.io **Institute of Economic Studies, Charles University, Opletalova 26, 110 00, Prague, CR and Institute of Information Theory and Automation, Academy of Sciences of the Czech Republic, Pod Vodarenskou Vezi 4, 18200, Prague, Czech R-
epublic. E-mail: lukas.janasek@fsv.cuni.cz *Institute of Economic Studies, Charles University, Opletalova 26, 110 00, Prague, CR and Institute of Information Theory and Automation, Academy of Sciences of the Czech Republic, Pod Vodarenskou Vezi 4, 18200, Prague, Czech Republic. E-mail: 95attila.sarkany@gmail.com
1
arXiv:2510.19271v1 [q-fin.GN] 22 Oct 2025

1 Introduction
“Since Quetelet’s work in the nineteenth century, social science has iconified the
average man, that hypothetical man without qualities who is comfortable with his head
in the oven and his feet in a bucket of ice. Conventional statistical methods since
Quetelet have sought to estimate the effects of policy treatments for this average man.
However, such effects are often quite heterogeneous.”
- Roger Koenker, Annual Review of Economics, 2017
Portfolio choice is dynamic, and investors’ risk attitudes are heterogeneous. Standard
models encode risk through utility curvature and evaluate policies based on mean-variance
trade-offs (Markowitz, 1952). We take a different approach: investors maximise a targeted
quantile of discounted returns. The quantile index, τ, directly encodes risk attitudes 
low τ emphasises downside protection, while high τ emphasises upside – thereby sepa
rating beliefs from tastes and avoiding utility specifications. We demonstrate how quantile
preferences can be translated into time-consistent dynamic policies and how these can be
implemented in dynamic portfolio choice.
Why do dynamic quantile preferences matter for portfolio selection? In rapidly chang
ing markets, where risk shifts between different states, the distribution of returns reshapes
and interior, quantile-dependent portfolio choices naturally emerge. This behaviour aligns
with the literature on volatility-managed portfolios (Moreira and Muir, 2017; DeMiguel
et al., 2024). When investors target the tails rather than the mean, reducing exposure in
high-volatility states becomes the optimal choice for a low-τ investor whose objective is to
mitigate the negative effects of a tail in the distribution, rather than an ad hoc, puzzling
inverse-variance rule (Moreira and Muir, 2017; DeMiguel et al., 2024). Quantile targeting
also predicts where and when de-risking is strongest (e.g. factors with spiking left-tail
dispersion and regimes with persistent high variance). This provides testable implications
for the timing of cross-factor strategies, unifying volatility management with investor ob
jectives. Our dynamic examples and empirical policies make these predictions explicit.
Our results therefore offer a preference-based microfoundation for the literature docu
menting the perplexing behaviour of volatility-managed portfolios that scale exposures
using inverse variance. Such portfolios outperform unconditional strategies based on
weakened risk-return trade-offs when market volatility is high (Moreira and Muir, 2017;
DeMiguel et al., 2024). While this is counterintuitive in the context of traditional mean
variance finance, it constitutes an optimal response for investors seeking to maximise a
chosen quantile. Directly targeting the tails rather than the mean/variance naturally re
duces factor exposures in high-volatility states, leading to the reallocation of downside
2

focused investors while allowing for heterogeneous, factor-specific timing. When current
volatility is high, the risky sleeve disproportionately thickens the left tail in relation to any
increase in the mean. Therefore, the optimal move is to reduce exposure. However, dur
ing regime transitions, even a small amount of risk can improve the targeted quantile by
flattening the left tail, as there is a chance of transitioning to a calm regime. Beyond an
interior point, additional risk widens the tail and negatively affects the quantile. Conse
quently, the policy scales exposure according to volatility and state probabilities, providing
a preference-based rationale for inverse-variance timing that generates positive alphas in
volatility-managed strategies.
We make several important contributions. We move beyond the conventional, utility
based approach to portfolio choice by formulating a quantile preference-based dynamic
portfolio choice theory. In this theory, quantile-consistent portfolio choice turns into state
contingent interiors, providing economic intuition for quantile preferences in dynamic en
vironments. We also introduce a distributional actor-critic reinforcement learning method
that learns directly from the desired quantile policies. The critic estimates the value func
tion across quantiles, while the actor outputs portfolio weights on the asset simplex. Our
approach requires no explicit return or utility parameterisation, can accommodate state
dependent dynamics and frictions, and can be scaled to high-dimensional asset menus.
We also discuss theoretical guarantees when the fixed point of our actor-critic learning
dynamics approximates the recursive quantile value function. As quantiles are non-linear,
we model the entire distribution instead of nested conditional quantiles. For any fixed
policy, the dynamic quantile recursion therefore induces a well-posed distributional Bell
man operator that is a contraction on return distributions in Wasserstein metric (Bellemare
et al., 2017). The projected distributional operator has a unique fixed point to which the
critic converges (Dabney et al., 2018), and the actor update yields monotone policy im
provement under mild regularity conditions justifying the update rules that we use. In
our two-timescale actor–critic model, the critic evolves on a faster timescale, and therefore
treats the current policy as approximately stationary, conseqeuntly fixed.
Next, we demonstrate that volatility scaling is optimal for tail-focused objectives. This
provides a clear, preference-based foundation for volatility-managed tilts and factor-specific
timing. Investors optimising a lower-tail quantile can achieve significantly better downside
protection than with standard mean-variance strategies, while still achieving competitive
returns. We also present empirical evidence that portfolios tailored to specific quantiles
produce interpretable tilts and tail-aligned performance and delivers higher Sharpe and
tail-adjusted Sharpe, linking these facts to a microfoundation for volatility management.
Finally, by combining advances in reinforcement learning with classic asset allocation prob
lems, our work provides methodological improvements and practical guidance for man
3

aging risk in portfolios. Targeting specific quantiles of the outcome distribution directly
enables managers to prioritise protection against downside risk or seek higher upside po
tential with precision. At the same time, our approach enables sequential decision policies
to be learnt directly from data, and can accommodate a diverse range of risk attitudes.
By eliminating the need for utility assumptions and explicitly optimising distributional
outcomes, our framework provides a novel approach to the intersection of finance and
machine learning. In the context of portfolio selection, it provides a flexible, dynamic
model that can accommodate the investors’ varying preferences. Our approach naturally
yields extremely risk-averse investors focusing on a lower quantile (such as the 10th per
centile) as well as risk-seeking investors focusing on an upper quantile (such as the 90th
percentile). These investors have different optimal portfolios reflecting their distinct tail
risk priorities. The quantile perspective also sheds new light on diversification. Theory
predicts that optimal static portfolios are fully diversified for quantiles below the median
but become increasingly concentrated for upper quantiles (Castro et al., 2022; Guidolin and
Timmermann, 2007). Consistent with this, we observe significant shifts in the composition
of dynamic portfolios and risk-factor exposures with the chosen quantile target, emphasis
ing the necessity of tailoring investment policy to the investor’s unique risk profile. In a
sense, we provide a data-driven foundation for risky choices, remaining agnostic to utility
choices.
Our work also demonstrates the potential of using emerging computer science algo
rithms to solve financial problems. In connection to the work of Duarte et al. (2024),
who recently developed an algorithm to solve a large class of nonlinear, high-dimensional,
continuous-time models in finance using approximate value and policy functions with
deep learning, we extend reinforcement learning into the new territory of quantile objec
tives. This offers the field of finance a new tool and avenue of research. In summary, by
combining quantile-oriented preference modelling with (deep) reinforcement learning, we
are advancing the state of the art in dynamic portfolio selection. This approach also bridges
the gap between methodological advances in machine learning and practical risk manage
ment, providing academics and finance practitioners with a rigorous yet narrative-driven
step forward.
We illustrate how quantile maximisers behave in a systematically preference- and state
contingent fashion in the real world using a simple, small portfolio as well as a richer
cross-sectional dispersion of Fama-French industry portfolios. Higher-τ portfolios gener
ate more upside, with higher Sharpe and tail-adjusted Sharpe ratios. Meanwhile, low-τ
policies remain defensive and de-risk in volatile states, emphasising downside protection
while delivering a higher Sharpe ratio than the minimum variance strategy. Both tail
specific policies adjust not merely the scale, but also the composition of risk when fric
4

tions change, providing a microfounded interpretation of volatility management within
a dynamic investor-objective framework. Specifically, it establishes volatility scaling as
the optimal response to tail-focused preferences rather than an ad hoc inverse-variance
rule. This reflects the preference-based foundation emphasised in earlier theories: quan
tile maximisation reshapes the risk-return trade-off by targeting the distribution’s tails and
determining when volatility-managed exposures should contract or expand.
2 Dynamic Portfolio Choice with Quantile Preferences to Risk
2.1 Quantile Preferences as Risk Attitudes
We begin by discussing risk under quantile preferences, which were introduced to the
literature by Manski (1988). Later, Chambers (2009) showed that these preferences sat
isfy the properties of monotonicity, ordinal covariance and continuity, and Rostek (2010);
de Castro and Galvao (2019) axiomatized them.
The τ-quantile of a random variable X with cumulative distribution function FX is
defined as follows:
Qτ[X] = inf{x ∈ R | FX(x) ≥ τ}, (1)
with τ ∈ (0, 1). A preference ⪰ over a random variable is a τ-quantile preference for some
fixed τ ∈ (0, 1) if
X1 ⪰ X2 ⇐⇒ Qτ[u(X1)] ≥ Qτ[u(X2)] (2)
where u(.) is the utility function over the possible outcomes of the random variables X1
and X2. An important property of quantiles is their invariance with respect to monotonic
transformations. Therefore, for a continuous and strictly increasing utility function u :
R → R, due to the fact that Qτ[u(X)] = u(Qτ[X]) this is equivalent to
X1 ⪰ X2 ⇐⇒ Qτ[X1] ≥ Qτ[X2] (3)
Note that by replacing the expectation X1 ⪰ X2 ⇐⇒ E[u(X1)] ≥ E[u(X2)] (used almost
exclusively by the literature) with the quantile operator yields an important property that
the preference remains unaffected by the choice of utility function. The ordering relation
⪰τ′ is more risk averse than ⪰τ if and only if ⪰τ′ <⪰τ. Later in this section, we provide a
detailed illustration comparing choices with expected utility and quantile preferences.
Quantile level τ hence reflects the risk attitude of a decision maker (Manski, 1988; Ros
tek, 2010), while a lower value of τ implies greater risk aversion. Quantile preferences
also facilitate a meaningful distinction between intertemporal and intratemporal risk. This
distinction is useful in dynamic settings where there is uncertainty both across time and
within each period. Quantile preferences isolate the risk attitude within each period, en
5

coded in τ, from intertemporal trade-offs. In the context of portfolio allocation, which is
the subject of this paper, quantile preferences enable the separation of beliefs from tastes.
The portfolio optimiser can then make choices regarding a particular portfolio without
knowledge of any specific utility function; it only needs to learn the quantile of an agent,
represented by the variable τ, to select the appropriate portfolio weights.
Overall, quantile preferences possess several desirable properties, including robustness
and invariance under ordinal transformations, as well as a clear characterisation of risk
attitudes (Rostek, 2010). These properties make quantile preferences an appealing choice
for modelling decision-makers’ risk aversion.
Empirially, we successfully develop agents with heterogeneous risk preferences: a risk
averse agent forming low variance and mean concentration, a risk-neutral agent with bal
anced allocations, and risk-seeking agent with heavy tails. We work with action-dependent
state variables and make the problem closer to real-world portfolio optimization. Notably,
the cumulative rewards decline with increasing risk aversion while the choices fit well the
risk preferences.
2.2 Dynamic Quantile-Risk Tailored Portfolio Optimization Problem
Shifting an investor’s focus from maximising the expected sum of discounted utilities to
maximising the stream of future τ-quantiles of the utilities introduces significant modelling
and analytical implications. The dynamic quantile preferences introduced in de Castro
and Galvao (2019) are generally not dynamically consistent; decisions made to optimise a
future quantile may no longer be optimal when re-evaluated from an updated state. This
inconsistency arises from the nonlinearity of the quantile operator. Therefore, in sequential
decision-making, which is what we are interested in, it is not sufficient to simply replace
the expectation operator with a quantile operator as we will see in this section.
We will formulate the problem using the Markov Decision Process (MDP) framework.
This is a widely used, flexible tool for modelling stochastic dynamic systems, and will help
us to later provide an approximate solution and study investor behaviour with quantile
preferences. This framework imposes no structure on states, actions, or transient dynamics.
The core assumption is that transition dynamics depend only on the current state and
action, rather than on the history or the path that led to the current state. At the same
time, however, the state itself can be defined to include relevant historical information.
More specifically, given a risk preference of the form 0 < τ < 1, the decision maker
finds themselves in a fully observable state st = S in period t = 0, 1, . . . containing, for
example, the number of risky assets, market conditions, the decision maker’s wealth, and
other relevant information such as sentiment. They then choose the weights of the port
6

folio, i.e. the vector of weights, as follows: αt ∈ A(s) : {αt,i ≥ 0, ∑i αt,i = 1}. After
taking action, the decision maker transitions to a new state st+1 and receives a flow reward
r(αt, st) which may be related to utility in classical setting. This transition is crucial in the
literature on portfolios. Since financial intermediaries such as asset managers and banks
are the most active participants in financial markets, their decisions impact the price of the
market and therefore alter the state of the system.1
Dynamic decision-making is represented by a policy πθ : S → ∆(A(s)), which is a
mapping from state space to the probability of selecting an available action. π(αt|st) is the
probability of selecting weight αt in state st. The goal is to find the policy, π(αt|st), that
maximises the τ-quantile of discounted cumulative reward, r(αt, st), through the portfolio
weights, αt, with a discount factor, β, in the interval (0, 1)
vτ
π (s0) = Qτ
"∞
t= ∑0
βtr(αt, st)
#
. (4)
As discussed earlier, this nevertheless leads to time-inconsistent decisions. Instead, de Cas
tro and Galvao (2019) suggests a recursive formulation that has been studied more gener
ally with state conditioning (de Castro et al., 2025), leading to dynamically consistent quan
tile preference. For a policy π, we define the π-quantile-specific value function vτ
π :S →R
that ensures time consistency
vτ
π (st) = Qτ r(αt, st) + βvτ
π(st+1) st , (5)
where portfolio weights αt are chosen from policy π and st+1 refers to a state following
state st. The optimal value function v∗τ (st) satisfies following recursive specification
v∗τ (st) = max
αt∈A(s) Qτ r(αt, st) + βv∗τ(st+1) st . (6)
Note that this value function is analogous to the value function in the expected case, which
can be formulated using Bellman recursion. This similarity is important, as it establishes
a direct link between dynamic quantile preferences and expected utility maximisation the
ory. A τ-quantile preference maker maximises the quantile of the sum of the current
rewards and the discounted next-period rewards. Since both are random variables with a
distribution, they together determine the distribution whose quantile is being maximised,
1In dynamic control problems, actions generally influence future states. In our setting, the agent is a price taker, yet because the state includes endogenous variables, the policy still affects the state evolution.
7

which we denote as
y∗ d= r(αt, st) + βv∗τ(st+1) st, (7)
where α ∼ π∗(.|st)
Unfortunately, the recursive specification leads to computational difficulties, as the re
cursive sequence of nested conditional quantiles is:
v∗τ(st) = mαat x
Qτ
"
r(αt, st) + β v∗τ(st+1)
| {z }
maxαt+1 Qτ [r(αt+1,st+1)+βv∗τ (st+2) | st+1]
st
#
(8)
= mαat x
Qτ r(αt, st) + β max
αt+1
Qτ r(αt+1, st+1) + β max
αt+2
Qτ [· · · (9)
+β max
αt+n−1
Qτ [r(αt+n−1, st+n−1) + βv∗τ(st+n) | st+n−1] · · · st+2 st+1 st(10,)
and searching for the optimal value function requires recursive evaluation of conditional
nested quantiles.
It is important to note that the recursion defines one-step τ-quantile Bellman operators
that will enable us to show our learning dynamics converge (in the projected sense) to their
fixed points. Let S be a Borel state space, and rewards be bounded. For a fixed quantile
level τ ∈ (0, 1) and a stationary policy π(· | s), define the τ-quantile Bellman operator on
bounded functions V : S → R by
(T τ
π V)(s) = Qτ
h
r(α, s) + βV(s′) s
i
, (11)
with α chosen from policy π and s′ ∼ P(· | α, s) and its optimality version
(T∗τV)(s) = max
α∈A(s) Qτ
h
r(α, s) + βV(s′) s
i
. (12)
The policy and optimal τ-quantile value functions are then unique fixed points Vτ
π =Tτ
π Vτ
π
and V∗τ = T∗τV∗τ (proof in Appendix E), which is the dynamically consistent formulation
of quantile preferences (de Castro and Galvao, 2019; de Castro et al., 2025). These papers
show that the recursion over conditional quantiles delivers a time-consistent preference
representation (see their dynamic-programming characterizations). Using the 1-Lipschitz
property of the quantile functional and β ∈ (0, 1), both operators are β-contractions in the
sup-norm, hence admit unique fixed points Vτ
π and V∗τ (see Appendix E) allowing us to
connect our learning targets directly to recursive dynamic quantiles and guarantee that
iteration we will use converges in the exact tabular case. Note that empirical returns have
unbounded support; in practice we (i) clip targets or rewards, or (ii) rely on concentra
8

tion/moment conditions.
2.3 Illustration: From Static to Dynamic Investment Decisions with Quantile Preferences
This section provides an intuitive overview of dynamic portfolio selection under quan
tile preferences by transitioning from the static, single-period problem similar to the one in
Castro et al. (2022) to two-period problems with and without exogenous state dependence.
In our example, an investor with initial wealth W0 decides on the proportion of risky assets
to allocate based on the wealth dynamics
Wt+1 = Wt αtRt+1 + (1 − αt)R f , (13)
with the proportion expressed as a share, αt ∈ [0, 1]. The gross return on the risky asset Rt
is random, and certain rate is R f .
2.3.1 Single-Period Portfolio Choice (T = 1)
With terminal objective v∗τ(W0) = β maxα0∈[0,1] Qτ[βW1|W0] and terminal wealth (re
ward) W1 = W0 α0R1 + (1 − α0)R f being increasing linear function of the risky return,
we have value function
v∗τ(W0) = βW0 max(Qτ[R1], R f ) (14)
with optimal allocation as the corner rule
α0∗τ =

   
   
1, if Qτ[R1] > R f ,
0, if Qτ[R1] < R f ,
any α ∈ [0, 1], if Qτ[R1] = R f .
(15)
Thus, a τ-quantile investor either fully takes the risky asset or fully avoids it depending on
whether the targeted quantile of R1 exceeds R f .
2.3.2 Two-Period Portfolio Choice (T = 2)
At period t = 1, the same argument yields all-or-nothing strategy from the value func
tion
v∗τ(W1) = max
α1∈[0,1] Qτ[βW2|W1] = βW1 max(Qτ[R2], R f ) (16)
For the decision at t = 0, since the discounted value is affine and increasing in risky return,
the terminal objective gives (Appendix A)
v∗τ(W0) = β2W0 · max(Qτ[R2], R f ) · max(Qτ[R1], R f ), (17)
9

and because the factor max(Qτ[R2], R f ) > 0 is constant with respect to α0, the corner rule
also applies at t = 0. This logic extends directly to any horizon T (see Appendix A).
2.3.3 Two-Period Portfolio Choice with volatility regimes (T=2)
A key behavioural shift occurs when simple dynamics are introduced to states such
as the volatility regime. Assume that the risky return has a conditional distribution Rt|z
with a variance σz2 driven by the Markov regime zt ∈ {L, H} with z = L in the low
volatility regime and z = H in the high volatility regime with 0 < σL2 < σ2H. The transitions
between volatility regimes are assumed to be exogenous, action-independent and follows
a Markov chain with known probabilities pij = P(zt+1 = j | zt = i) where i, j ∈ {L, H}.
Assuming the investor has full information about the volatility of risky asset, the investor’s
decision problem now depends on the current regime z. The state st is now represented
by a pair of the investor’s wealth Wt and the volatility regime, i.e. st = (Wt, zt). A
decision made in period t = 1 follows Equation 16 and yields an analogous value function
v∗τ(W1, z1) = βW1 max(Qτ[R2|z1], R f ) .
When making a decision at time t = 0, it is important to consider that the investor
faces two types of uncertainty: uncertainty regarding the return on the risky asset and
uncertainty regarding the volatility regime in the next period. The investor’s value function
is given (see Appendix A) by
v∗τ(W0, z0) = max
α0∈[0,1] Qτ
h
β2W0 α0R1 + (1 − α0)R f max(Qτ [R2|z1] , R f )|z0
i
. (18)
In contrast to the previous independent and identically distributed (i.i.d.) case, the value
of max(Qτ [R2|z1] , R f ) is random due to the uncertain regime, z1, and Markov chain de
pendence. Consequently, it cannot be factored out of the quantile, and the value func
tion features nested conditional quantiles, which breaks the all-or-nothing result at t = 0
and introduces an interior. α∗
0 can be optimal because the distributional mixture over fu
ture regimes alters the left/right tail that the τ-investor targets. Figure 1 illustrates this
mechanism: a downside-focused investor (τ = 0.1) chooses a mixed allocation in the
high-volatility initial regime due to the probability of transitioning to a more favourable
low-volatility regime in the next period, which flattens the left tail of the target distribution.
More specifically, Figure 1 considers the case where the risk-free asset return is R f =
1.04 (corresponding to a net return of 4%), while the risky asset return R is drawn from
a normal distribution with a mean of 1.1 (corresponding to a net return of 10%) and a
low volatility regime standard deviation of σL = 0.03 and a high volatility regime standard
deviation of σH = 1.7σL times the low volatility regime standard deviation. We also assume
that volatility is persistent, with transition probabilities of 0.7 for both high-to-high and
10

Figure 1. Value functions for risk-averse (τ = 0.1), risk-neutral (τ = 0.5), and risk-loving (τ = 0.9) investor with quantile preferences as functions of risky asset portfolio share. Terminal period (t = 1) in red, initial period (t = 0) in blue, high volatility in solid line, and low volatility in dashed line. Crosses indicate optimal allocations. Risk-free rate: R f = 1.04 (4% net return). Risky asset return follows normal distribution with mean 1.1 (10% net return) and volatility σL = 0.03 (lo-
w volatility regime) or σH = 1.7σL (high volatility regime). Volatility persistence: 0.7 probability of the regime repeating itself.
low-to-low transitions. Figure 1 plots the value function depending on the risky asset
share for risk-averse investors (τ = 0.1), risk-neutral investors (τ = 0.5), and risk-loving
investors (τ = 0.9). While the risk-neutral and risk-loving investors fully invest in the risky
asset regardless of the volatility regime, the risk-averse investor reflects the regime in the
portfolio allocation. In the final period (t = 1), the risk-averse agent only invests fully in
the risky asset in the low volatility regime. In the high volatility regime, the agent only
invests in the risk-free asset.
Crucially, unlike in the second period when the risk-averse agent faces high volatility
and invests entirely in the risk-free asset, this investor selects a mixed portfolio, allocating
46% of their initial wealth to the risky asset at time t = 0. Adding a small amount of the
risky asset shifts the target quantile to the right, flattening the left tail of the next period’s
distribution and making this a better option, even though the current state is volatile.
This is because there is a possibility of transitioning to a more plausible low-volatility
regime. This investor is willing to take more risk and begins to mix with the risky asset.
Figure 2 shows the portfolio return distribution when mixing with the risky asset in the
high volatility regime. In the second period, t = 1, mixing with the risky asset offers no
advantage to the risk-averse investor compared to investing solely in the risk-free asset.
However, the situation changes in the first period, t = 0. There is a 30% probability that
the next period’s regime will be low volatility, which shifts part of the target distribution
to the right when mixing with the risky asset (as shown by the right normal distribution
in the chart). This shift flattens the left tail of the target distribution. As the risk-averse
agent focuses on the left tail of the distribution, this flattening effect provides an incentive
11

to deviate from full allocation to the risk-free asset and start mixing with the risky asset.
Since the risky asset has a higher expected return than the risk-free asset, mixing with the
risky asset shifts the distribution to the right. Eventually, the 0.1 quantile of the target
distribution under the mixed portfolio exceeds the 0.1 quantile under full allocation to
the risk-free asset. However, allocating too much to the risky asset eventually widens the
target distribution, creating an overly heavy left tail. In this example, the 46% allocation
represents the optimal balance between these two effects.
Figure 2. Portfolio return distribution when mixing with risky asset in high volatility regime. Top panel compares the 0.1 quantile of the target distribution with risk free asset return in the last period. Bottom panel shows the left tail flattening effect on the target distribution caused by the volatility regime transition in the first period.
The volatility regime example illustrates the impact of state dependence on investor
portfolio allocation, as well as the range of possible allocations that can be created by in
troducing volatility regimes. The optimal allocation depends on the current state, as well
as the investor’s expectations regarding future states and their respective transition prob
abilities. This demonstrates why a downside-focused decision maker would scale down
risk in high volatility states and only admit exposure when state-transition probabilities
sufficiently reduce the tail risk. In other words, volatility management is what a low-τ
policy does, not an ad hoc overlay.
It is also important to note that analytical solutions can be found in these simple ex
amples. However, in general dynamics involving nested conditional quantiles of more
complicated sums or products of random variables (assets) in higher dimensions, analyt
ical solutions are the exception, and numerical methods such as introduced by this paper
must be employed instead.
12

2.4 Relation to the Classical Preferences and Risk
We compare the choices based on the τ-quantile with the expected utility benchmarks in
the standard one-period problem, where R ∼ N (μ, σ2). Unlike choices based on quantiles,
maximising the expected utility U(W) over wealth is consistent with risk attitudes encoded
in the curvature of the utility function: U′′(W) < 0 indicates risk aversion; U′′(W) = 0 in
dicates risk neutrality; and U′′(W) > 0 indicates a preference for risk. An investor with
a concave utility function cares about the expected utility of terminal wealth and inher
ently penalises risk through diminishing marginal utility. Concavity is a hallmark of risk
aversion; the utility of a certain outcome exceeds that of a risky gamble with the same
expected average outcome (by Jensen’s inequality). In other words, risk-averse investors
prefer certain wealth to a lottery with an equal mean because the loss of utility from neg
ative outcomes outweighs the gain from positive ones. By contrast, a risk-neutral investor
would have linear utility (i.e. constant marginal utility), valuing outcomes based on their
mean alone. The objectives and optimal α∗ are
Preference Type Objective Optimal α∗ Expected Utility - risk neutral E[W] I{μ < R f }
Expected Utility - CARA E[ 1−e−aW
a ], a > 0 μ−Rf
aσ2 (interior)
Mean-Variance E[W] − 1
2 γVar(W) μ−R f
Aσ2 (interior)
τ-Quantile Preference Qτ(W) I{μ + σΦ−1(τ) < R f }
Table 1. Portfolio optimization under different preference models.
Unlike classical preferences, utility-free τ-quantile preferences encode risk attitudes di
rectly through τ: lower τ emphasises downside protection, while higher τ emphasises
upside potential. Note that when the quantile is set to 0.5, mean-based choices only co
incide with this setting under symmetry (when the mean equals the median). In general,
maximising Qτ(W1) is not equivalent to maximising the expected value of W1, which
is why quantile preferences can rationalise a number of empirical regularities, including
volatility-managed tilts in dynamic settings. We discuss this in detail in later sections. In
our dynamic framework, when rewards are restricted to terminal wealth and state depen
dence is absent (or does not affect wealth monotonicity), the quantile policy reduces to the
corner rule and, for symmetric return laws at τ = 0.5, encompasses the standard mean
based decision. The example in Appendix B provides a more detailed illustration for the
interested reader.
3 Solution Method: A Quantile Reinforcement Learning Framework
Dynamic economic problems have traditionally been approached using methods such
as value iteration. However, when the state can be represented as a collection of multiple
13

variables or a vector, full discretisation of the state space becomes complicated due to its
large dimension. We propose an alternative approach based on function approximation
that does not require any discretisation of states, actions, or transition dynamics, and that
works in a high-dimensional setting. Rather than representing the value function as a
matrix of real numbers over a grid, we directly approximate the theoretical value and
policy functions, building on our earlier work (Janasek, 2025).
In order to approximate the policy for a given τ-quantile of interest, we will learn the
entire distribution using p regularly spaced levels, where 0 < τ1 < τ2 < . . . < τp < 1.
Our aim is to find the approximated optimal value function, vτ
π, for any state, s2, using a
network that is a parameterised mapping, Vτj
ω : S → R, and a network, πθ : S → A(s)
that returns an action α for any state s, approximating the optimal theoretical policy of the
τ-quantile portfolio optimiser. We refer to the Critic network as Vτj
ω and the Actor network
as πθ. Both consist of trainable weights, and the main objective is to find the set of optimal
weights such that the critic and actor networks approximate the theoretical value function,
(ω∗, θ∗)′ ≈ vτj
π.
In general, the functional form of a value function and the policy are unknown. To
avoid specifying assumptions or functional forms, neural networks are used as universal
approximators (Hornik, 1991). A multilayer perceptron can process high-dimensional in
puts as a non-linear mapping to the output space. To find the optimal weights, we adopt
a reinforcement learning method, which is well-suited to modelling dynamic decision
making in Markov decision process environments. In reinforcement learning, the decision
maker interacts with an environment over a sequence of time steps. They make decisions
based on observed states, receive feedback in the form of instantaneous utility and update
their beliefs about the value function. Unlike traditional methods that rely on complete
knowledge of transition probabilities, reinforcement learning can operate in a model-free
setting where the agent does not require the environment’s dynamics to be specified.
In our setting, we train the Critic and Actor networks through repetitive interaction with
the underlying unknown economic model, represented by the realized data, updating the
weights with each interaction. This process gradually improves the policy and the estimate
of the value function towards their theoretical counterparts. In theory, we can simulate an
infinite number of interactions and update the weights to an arbitrary degree of precision,
enabling us to train the networks to fit the theoretical model almost perfectly. Next, we
detail the gradient-based update rules for training the algorithm.
2The state includes both exogenous and endogenous components, meaning that actions can influence the law of motion of the state distribution.
14

3.1 Quantile Value Function Update Rule
Our goal is to learn τ-quantile of the distribution (Equation 7), which is the sum of the
instantaneous reward and the discounted future certainty equivalent of the value function
conditioned on the current state. As the value function for the next state st+1 is unknown,
we will use the Critic network Vτj
ω (st+1) to estimate it. Our aim is to learn the τ-quantile
of the
yω
d= r(αt, st) + βVτj
ω (st+1) st, (19)
where a transition to a new state st+1 occurs when an action αt ∼ π(.|st) is chosen from
the state st and a reward rt+1 is received. We then calculate the temporal difference (TD)
error of the Critic estimate in the state st compared to the target yt as
δτj
t = rt+1 + βVτj
ω (st+1)
| {z }
target yt
−V τj
ω (st), (20)
where target yt is a single sample from the distribution which is a sum of the flow reward
rt+1 and the discounted certainty equivalent as estimated by the Critic network. It is
therefore a single realisation from the distribution for which the portfolio optimiser has a
preference for the τ-quantile
To learn the distribution in Equation 19, we perform a gradient descent step on the
critic weights, minimising the quantile loss. We introduce a penalty term to preserve
monotonicity. This yields the update rule for the Critic network.
ω ← ω − ηω∇ωLcritic(ω) (21)
with learning rate ηω, and
Lcritic(ω) =
p
∑
j=1
τj − I{δτj
t < 0} .|δτj
t | + λω
p
∑
j=1
V τj
ω (st) − Vτj+1
ω (st) + (22)
where (u)+ = max{u, 0} is a rectified linear unit (ReLU) function, which passes through
only positive differences between pairs of neighboring values (j and j + 1) of the Critic
networks that violate monotonicity. Such violations are controlled by the penalty λω with
j = 1, . . . , p, I{.} being an indicator function.
Importantly, note that the critic update implements a projected T τ
π -fixed point in the
pinball norm (see Appendix E for the approximation bound)
Vτ
ω ≈ ΠF T τ
π Vτ
ω, (23)
15

and under assumptions 1 in Appendix E the critic iterates converge to a stationary point.
Standard stochastic-approximation and TD analyses justify these statements (Borkar and
Borkar, 2008). For the specific quantile setting, the target is exactly the τ-Bellman target,
and distributional Reinforcement Learning provide the analogous theory and estimators
for quantiles (Bellemare et al., 2017; Dabney et al., 2018)
3.2 Policy Update Rule
We can now turn to the gradient update rule for the actor network, which represents
the decision maker’s policy and returns a probability of portfolio weights. Assume that
in the state st, a τ-quantile portfolio optimizer is facing distribution in Equation 19 with
cumulative distribution function FY(y, θ) that can be expressed as an expectation over an
indicator function with a fixed threshold y as FY(y, θ) = E [I{Y ≤ y}] with Y being a ran
dom variable following distribution yω, and Qτ[Y|θ] = F−1
Y (τ, θ) being an inverse function
that expresses τ-quantile conditioned on the policy parameters.
The distribution depends on the policy parameters θ. The goal is to learn θ (the actor’s
weights) that maximise the τ-quantile. For this we need to learn the unknown value of
Qτ[Y|θ] learned with Critic network from a previous step
Qτ[Y|θ] ≈ Vτ
ω(st). (24)
Following Jiang et al. (2022); Janasek (2025), the gradient of the τ-quantile with respect to
policy parameters ∇θQτ(Y|θ) is obtained via the implicit-function route (see Appendix C
for the derivation). The update rule for Actor network then becomes
θ ← θ − ηθ∇θLactor(θ) (25)
with ηθ being learning rate, and
Lactor(θ) = log(πθ(αt|st))δtτ ·
h
(1 − τ) · I{δtτ < 0} + τ · I{δtτ ≥ 0}
i
− λθH(πθ(αt|st)), (26)
with H(πθ(αt|st) being the policy entropy to encourage exploration with penalty λθ3. The
update rule can be interpreted as minimizing the log-likelihood of actions that result in
lower value than the benchmark given by the Critic network in state st. Repeatedly ap
plying this rule reinforces actions that lead to policies with higher value than the Critic’s
benchmark. On a slower timescale, the actor maximises Jτ(θ) = Es∼dθ [Vτ
ω(s)] using the
quantile-weighted policy-gradient surrogate. In the two-timescale limit, θt follows the
3Note that during the experiments, we decided to increase the variance of the policy distribution to encourage greater exploration. Although, we included the entropy regularization term in the formulation as it is commonly used in the literature, it was not utilized in the optimization process.
16

θ ̇ = ∇Jτ(θ) and converges to stationary points. More formally, under assumptions 2 stan
dard two-time-scale results imply the actor sees an (almost) stationary critic and ascends
Jτ toward a stationary point.
Collecting the results, following theorem summarizes theoretical properties of the algo
rithm.
Theorem 3.1 (Summary: contraction and convergence). (i) T τ
π and T∗τ are β-contractions
in ∥ · ∥∞ with unique fixed points. (ii) The critic converges to the projected fixed point of T τ
π ; if
∥
Vb − ΠF T τ
π Vb∥∞ ≤ ε and infV∈F ∥V − vτ
π∥∞ ≤ εappr, then ∥Vb − vτ
π∥∞ ≤ (ε + εappr)/(1 − β).
(iii) With two-timescale stepsizes, ergodic on-policy sampling, and bounded scores, the joint actor
critic iterates converge to stationary points of Jτ(θ) (approximate policy iteration for T ∗τ).
While under critic, Vτ
ω converges to the projected fixed point of the T τ
π , as under As
sumption 1, ∥Vτ
ω − vτ
π∥∞ ≤ (ε + εappr)/(1 − β) if the critic residual is ε. Under Assump
tion 2, the joint actor-critic dynamics implement approximate policy iteration for T∗τ, so the
induced stationary policies are τ-optimal up to projection/optimization tolerances (Proofs
and assumptions in Appendix E.)
The fixed point of our learning critic-actor dynamics is an approximation to the re
cursive τ-quantile value function and its τ-optimal policy, thereby providing a theory
algorithm link and establishing dynamic consistency of the learned solutions. The model
aims to uniquely tune returns within the selected quantile by integrating the weighted
quantile-specific TD error (see Equation 20) with action log-probabilities, all under the
guidance of the Critic. More precisely, the actor increases the probability of actions that
produce returns that exceed the critic’s expectations (indicated by a positive TD error)
and decreases the probability of actions that lead to negative error. Meanwhile, the critic
continuously refines its evaluation of potential outcomes, providing updated, more pre
cise, quantile-based feedback. Quantile-specific weights reinforce agents differently: Risk
seeking policies assign greater importance to underestimations (positive TD errors) and
encourage exploitation of underpredicted upside potential, thereby reinforcing actions that
produce unexpectedly high returns. In contrast, risk-averse agents focus more on avoiding
overestimations and receive only a small reward for searching for better outcomes than
expected, leading to more conservative behaviour.
Note that our method differs from the Distributional Soft Actor-Critic method described
in Ma et al. (2020) in that we do not directly maximise entropy, which makes our model
more interpretable. Our loss function differs from those in other distributional reinforce
ment learning papers, which are usually based on Power, CVaR and Cumulative Prospect
Theory distortion risk measures (Tversky and Kahneman, 1992; Wang, 2000). Instead, we
apply risk preferences through dynamic weights in the actor loss.
17

3.3 Implementation
We have implemented a quantile actor-critic (Q-A2C) algorithm that targets the τ
quantile of cumulative portfolio returns directly. The architecture comprises: (i) an ac
tor that outputs a probability distribution over portfolio weights; and (ii) a critic that
estimates the τ-quantile value function. This is used to form an advantage-type learn
ing signal. Training on-policy simplifies exploration, avoids instability arising from mis
matches between the behaviour and target policies, and makes interpretation easier in
high-dimensional continuous action spaces, which are typical of portfolio choice.
As mentioned previously, the general functional forms of the value function and policy
are unknown, so we use neural networks as universal approximators (Hornik, 1991) to
obtain them. Neural networks transform input features into a learned representation via
layers of weighted connections and activation functions. Each layer computes a weighted
sum of inputs, which is then subjected to a non-linear transformation.
A key part of our framework is the actor network, which defines a stochastic policy
that assigns a probability distribution to each action based on the current state. This
policy is updated iteratively through gradient-based optimization. Stochasticity is crucial
because the optimal action in any given state cannot be known in advance, so exploration
is required to gather information. As learning progresses, the policy’s entropy - and thus
the degree of exploration - declines. We use a Gaussian policy for the weights, which is
transformed by a softmax function ensuring that the weights are non-negative and sum to
one.
We adopt an advantage form of the policy gradient, where the advantage is the TD
error produced by the Critic and a slowly updated target Critic. This reduces variance and
stabilises training in continuous control. Our on-policy choice complements our value
estimation setup (batch temporal difference (TD) learning rather than Monte Carlo), which
updates incrementally via bootstrapping and substantially accelerates convergence in our
state/action spaces.
The policy functions are represented by an actor network comprising two dense lay
ers of 16 units each, using Leaky ReLU activations and HeNormal/GlorotNormal kernel
initialisations. We apply L2 regularisation and a decaying learning rate to improve gen
eralisation and numerical stability. A decaying learning rate reduces the step size over
training steps, enabling finer parameter updates as optimisation approaches a local min
imum. Training proceeds over multiple episodes, whereby the model revisits the same
observations under continually updated weights. We employ a Gaussian policy to provide
smoother control of exploration via the actor’s output-layer activation.
The Critic network has the same two-layer structure as the Actor, but has a different
18

purpose and produces a different output. It uses a linear output layer with GlorotNor
mal initialisation and an output dimension equal to the number of τ levels, delivering
valuations across quantiles of prospective returns. We use 16 units per hidden layer.
Optimisation is performed using gradient descent to update the parameters by follow
ing the loss gradient. Gradients are computed using backpropagation, which applies the
chain rule to propagate errors from the output to earlier layers (Rumelhart et al., 1988).
The training workflow is presented in Appendix D, D.1. Transition tuples are collected
during the episode and the parameters are updated at the end. Key hyperparameters are
listed in Appendix D, Table D.1.
A key practical issue is feature scaling, which has a significant impact on gradient-based
optimisation. Naive train/test scaling can introduce look-ahead bias by using future data
to scale current observations. To avoid this, we apply rolling Z-score normalisation with a
60-day window, standardising each feature using only past information. We increase the
relative scale of the current wealth state to emphasise its importance and steer the agent
towards this endogenous component.4
We also scale the learning signals - specifically the reward and the TD error - to promote
stability and effective learning. The daily returns used in the real-world examples have
low means and variances. Combined with transaction costs, this results in a low signal-to
noise ratio, flat value-function gradients and limited portfolio adjustment with premature
convergence. To mitigate these effects, we apply reward and TD-error scaling.
We keep global hyperparameters fixed across τ and use multiple seeds for robustness;
implementation details and parameter grids are provided (e.g., discount factor, learning
rates schedules).
4 Illustration: Multi-Period Choice with Volatility Regimes
Before moving on to real-world data, we will consider a more realistic yet still tractable
dynamic environment that incorporates regime-switching return dynamics and transaction
costs. This does not have a closed-form solution, so we will use our algorithm to approxi
mate the behaviour. The key behavioural shift in the earlier illustration was due to the fact
that volatility transitions create nested conditional quantiles, breaking the all-or-nothing
corner solutions and introducing interior solutions. To further illustrate this, we will in
troduce an additional random asset and volatility dynamics, extending the two-period
example to a sequential cost-frictional setting. In this setting, today’s action shifts the state
distribution tomorrow, thereby affecting the future quantile of interest to the investor.
4Initial wealth is 100. Wealth scale: 0.0005; shares: 0.01; balance: 10.
19

To achieve this, we use a three-regime vector autoregression to model the log-returns
of risky assets, incorporating ‘bull, ‘neutral’ and ‘bear’ regimes, which follow a Markov
transition, in a similar way as used in Ang and Bekaert (2002); Guidolin and Timmermann
(2007), and account for portfolio rebalancing costs. More specifically, we consider two as
sets linked by VAR(1) dynamics across the three regimes, such that risky asset rt,1 will have
a higher premium than risky asset rt,2, albeit with slightly higher variance, in a bull mar
ket (see Appendix F for details). It will also have a slightly higher mean and substantially
larger variance than asset two in a neutral market, which weakens its risk-adjusted advan
tage. Finally, it will have strongly negative returns with higher variance than asset two
in a bear market. This makes asset two act as a hedge during market downturns (see the
parameters of the regime-switching VAR in Table F.2 in Appendix F). The scenarios repre
sented by the transition matrices determine how frequently the economy switches between
regimes, thus controlling the long-run distribution of states and the exposure of portfolio
policies to regime-dependent risks. In our analysis, we focus on these matrices. We define
the Bull-Bear matrix as having a stationary distribution of 0.5, 0.1 and 0.4; the Neutral-Bear
matrix as having a stationary distribution of 0.1, 0.4 and 0.5; and the Bull-Neutral matrix
as having a stationary distribution of 0.5, 0.4 and 0.1 (see Table F.3 in Appendix F).
The state collects the pre-trade portfolio from the previous period, the current returns
and the active regime; the action is full allocation to the asset simplex (two risky sleeves
and cash). Policies are learnt using a Dirichlet actor (with stochastic weights over the
simplex) and a distributional critic that estimates the inverse CDF value across a grid of
quantiles. See Appendix F for formal definitions and training details.5.
From the resulting portfolios presented in Figure 3, we can immediately see that the
more risk-seeking the agent is, the less cash they are holding, with larger allocations to
riskier assets depending on different states. In other words, as the parameter τ rises,
the weight shifts towards the higher-dispersion sleeve (w1) and cash and low-dispersion
sleeves decline; as τ falls, allocations move towards cash and the more defensive sleeve
(w2). On average across regimes and transition scenarios, the mean weights change from
approximately (w1, w2, cash) ≈ (0.20, 0.29, 0.50) at τ=0.1 to (0.46, 0.33, 0.21) at τ=0.9 (Ap
pendix Table F.7).
The risk-neutral policy (τ = 0.5) allocates more to asset 2, as it offers a more balanced
risk-reward trade-off with lower volatility in each regime. In contrast, the risk-seeking
policy (τ = 0.9) focuses on the upper tail, where asset 1 offers a higher upside potential,
5Two practical elements make the experiment stable and interpretable: (i) a Dirichlet policy that samples weights on the simplex (including cash) to ensure interior exploration and well-behaved learning on the budget constraint, and (ii) transition-weighted losses that use the Markov matrix Q to correct for enumerating next regimes during simulation (self-normalised importance weights). This means that the critic and actor “see” the true regime mixture implied by Q (see subsection B)
20

BB BN NB
0.0
0.2
0.4
0.6
0.8
1.0
Bull
BB BN NB
0.0
0.2
0.4
0.6
0.8
1.0
τ=0.1
Neutral
BB BN NB
0.0
0.2
0.4
0.6
0.8
1.0
Bear
BB BN NB
0.0
0.2
0.4
0.6
0.8
1.0
Bull
BB BN NB
0.0
0.2
0.4
0.6
0.8
1.0
τ=0.5
Neutral
BB BN NB
0.0
0.2
0.4
0.6
0.8
1.0
Bear
BB BN NB
0.0
0.2
0.4
0.6
0.8
1.0
Bull
BB BN NB
0.0
0.2
0.4
0.6
0.8
1.0
τ=0.9
Neutral
BB BN NB
0.0
0.2
0.4
0.6
0.8
1.0
Bear
Figure 3. Regime-conditional portfolio weights for τ-targeting policies. Each stacked bar shows the allocation to the higher-dispersion sleeve w1 (pink), the more defensive sleeve w2 (blue), and cash (green) within a regime (Bull, Neutral, Bear) for three risk attitudes – downside-focused, neutral, and upside-seeking – captured by τ ∈ {0.1, 0.5, 0.9} and three transition-mix scenarios (BB = Bull–Bear, NB = Neutral–Bear, BN = Bull–Neutral) defined in Appendix F. Bars sum to one. Together, the panel-
s illustrate preference-consistent rebalancing: low-τ policies de-risk in high-variance environments, while high-τ policies concentrate in the higher-dispersion sleeve.
despite its negative average returns in the bear regime. Figure 3 also shows how the
optimal portfolio weights differ across regimes and scenarios. For example, in the bull
bear (BB) scenario, where there is a higher likelihood of entering or remaining in bear
states, asset 2 acts as a hedge and the portfolio tilts more towards this asset. By contrast,
the neutral-bear scenario exhibits the highest cash, as both the neutral and bear states
are persistent, and the risk premium of asset 1 is weaker in this mix. Regardless of how
persistent the regime is, the neutral regime always brings the highest cash to the portfolio
across all values of τ. The fine scenarios adjust the mix slightly, but do not change the
ordering driven by τ. This is due to the low drift and substantially higher variances,
which eliminate diversification benefits. The neutral state is also highly persistent, which
increases the expected duration of this high-volatility, low-drift scenario (see Appendix
Table F.6).
Crucially, the inverse-CDFs intersect precisely where expected: the policy with a thresh
old of τ=0.1 dominates the left tail, the policy with a threshold of τ=0.9 dominates the
right tail, and the policy with a threshold of τ=0.5 sits between them. This is evidence that
the policy optimises quantiles rather than a mean-variance proxy (Appendix Table F.4 and
Figure F.1).
In summary, whereas in the earlier illustration, volatility regimes created nested condi
tional quantiles and overturned corner solutions, even in a two-asset toy model, the same
mechanism emerges in a richer dynamic state space here. Quantile investors adjust not
only the scale, but also the composition, as regimes and costs evolve. Low-τ policies de
risk endogenously in adverse or high-variance states, while high-τ policies capitalise on
the upside when the transition structure makes favourable regimes sufficiently likely. This
provides a micro-founded account of volatility management within a dynamic, cost-aware
environment.
21

5 Real-World Example: Tailoring the Portfolio to the τ-quantile Prefer
ences
Our aim is to examine how agents select their optimal portfolios in relation to their
quantile preferences using real-world data. To achieve this, we will conduct a two ex
amples 6 where state variables depend on actions. At each time point, the agent observes
exogenous and endogenous characteristics, including current wealth, the number of shares
held per asset, and the remaining balance from the previous reallocation. At time zero, an
equal-weighted portfolio is initialised and no reward is given for this step. The agent then
reallocates their portfolio by first selling any undesired positions and then purchasing new
ones, subject to transaction costs. Shares are updated as the sum of current holdings and
the net desired change (target shares minus current position). If the agent overspends,
the purchase is proportionally scaled back. These realistic constraints introduce the fol
lowing: (i) execution mismatches, whereby the actual outcome differs from the intended
action; and (ii) unstable learning patterns, which can result in slow or even very fast con
vergence; and (iii) distorted gradients, which result in biased estimates. A summary of the
parameters can be found in Appendix D, Table D.1.
5.1 Three assets example
In the first case, we focus on exercise that is as simple and realistic as possible to illus
trate behaviour of τ-quantile preference decision maker. To this end, we have chosen to
use a few Exchange Traded Funds (ETFs) due to their clean and scalable implementation.
We have also accepted the real-world frictions in ETF returns relative to academic factors,
even at the cost of potentially lower alphas. For example, Johansson et al. (2025) con
struct tradable long-short factors using mutual funds and ETFs, showing a 2-4% per year
implementation shortfall versus classic academic factors. Additionally, Ben-David et al.
(2023) documents the interaction between investor attention and flows in ETFs; Huang
et al. (2024) reveals that many smart-beta indexes appear promising prior to listing but
subsequently underperform following ETF launches. This serves as a cautionary reminder
when relying on factor ETF backtests. Furthermore, Todorov (2024) demonstrates how cer
tain ETFs can influence underlying markets. Focusing on ETFs can mitigate idiosyncratic
stock risk and offer diversified, factor-based exposure.
The primary goal of this illustration is to analyse the learning behaviour and portfo
lio properties of quantile-aware reinforcement learning. Hence, our focus is primarily on
in-sample evaluation, with 70% of the data used for training and 15% reserved for valida
tion. While our main interest lies in understanding how agents internalise and adapt to
6The replication code in Python and the setup are available at https://github.com/Attilasarkany/ Q-A2C-Replication.
22

Definition Std (3y) Equity Beta (3y) P/B
Quality Exposure to U.S. large and midcap stocks, emphasizing high return on equity, stable earnings growth, and low debt.
18.38 pct 1.04 8.93
Momentum U.S. stocks with higher price momentum in large and midcap range.
19.13 pct 0.95 5.37
Minimum Volatility U.S. stocks with lower risk profiles.
13.89 pct 0.72 4.02
Table 2. BlackRock factor ETFs used in the empirical analysis. Definitions and selected characteristics-three-year standard deviation (Std), equity beta, and price-to-book (P/B)-for the iShares Quality, Momentum, and Minimum Volatility funds. Statistics are a snapshot as of 20 January 2025;
quantile-based preferences during training, the validation set plays a complementary role
in adapting early stopping criteria based on the actor and critic losses of the validation set,
thus mitigating overfitting and improving training stability. 7
5.1.1 Data
To keep the illustration simple, we chose three ETFs: Minimum Volatility for the low
risk sleeve, Momentum for the high-risk, high-return sleeve, and Quality for the balanced
core sleeve, which captures both risk and stability. We impose daily rebalancing and
transaction costs, as well as a cash balance that earns a small daily rate. The daily factor
data are sourced from BlackRock (via Thomson Reuters). See Appendix G for details where
Figure G.1 plots the data and Table G.1 provides a detailed description of the performance
of the three ETFs. Further, Table 2 provides details about the three distinct choices.
Due to the recent launch of a number of products and the high degree of cross-asset
correlation, which reflects the overlap of US equity exposures, the sample size is necessarily
small. Structural breaks and price corrections (e.g. in late 2019 and 2021) are visible in the
price series. This complicates the learning process by flattening the gradients of the value
functions and reducing the confidence of the market participants. Liquidity frictions at the
ETF level can exacerbate discontinuities. Crucially, the model incorporates key endogenous
variables such as wealth and balance, as well as three shares, alongside exogenous signals
including VIX and the distinctive components of a rolling 64-day covariance matrix.
7Note that a number of generalisations are possible and would require more elaborate setups, including techniques such as curriculum learning, where the agent is progressively exposed to more challenging environments.
23

2017 2018 2019 2020 2021 2022
120
150
180
200
τ-Quantile Portfolios
Cumulative Return
τ=0.1 τ=0.5 τ=0.9 EW
Figure 4. Cumulative returns of optimal τ-quantile portfolios. Cumulative total return indices for portfolios preferred by “risk-averse” (τ = 0.1), “neutral” (τ = 0.5), and “risk-seeking” (τ = 0.9) agents over June 2016 to December 2022 benchmarked to a static equally-weighted (EW) portfolio. Portfolios are formed from the three factor ETFs (Minimum Volatility, Momentum, Quality).
5.1.2 Results
In the illustration, we focus on allocating the preferences of τ-quantile makers by max
imising cumulative reward. We focus specifically on the behaviour of risk-averse (τ = 0.1),
risk-neutral (τ = 0.5) and risk-seeking (τ = 0.9) agents. Our interest lies in the heterogeneity
of overall performance of the optimal portfolios as well as their (average) weights.
The first thing to note from Figure 4, which plots cumulative returns, and Table 3
showing average portfolio weights, is that the τ-preferences map into factor tilts and trans
late into systematic and interpretable allocations across the three factors. The cumulative
wealth path diverges across the τ spectrum, with higher-τ policies outperforming lower-τ
ones. Lower-τ investors (who are downside-focused) allocate more to minimum volatility,
while higher-τ investors (who are upside-seeking) tilt towards momentum, with quality
playing a stabilising secondary role. This mapping is consistent with the main characteris
tics of the ETFs in Table 2 and their moment and tail profiles in Table G.1. The main change
in (average) weights is between the minimum volatility and momentum portfolios, while
risk-averse agents allocate more to the minimum volatility portfolio, but also use momen
tum and quality. Therefore, most of the trade-off sensitive to the value of the parameter
τ is between the momentum and minimum volatility portfolios, while quality remains a
stable core, balancing the extremes.
While these choices align with the economic intuition of upper-tail seekers concen
trating their risk in high-dispersion sleeves and lower-tail optimizers using dampening
variance to protect against low-tail events, the main takeaway from the illustration is that
24

Minimum Volatility Momentum Quality
τ = 0.1 (risk-averse) 0.46 0.23 0.31 τ = 0.5 (neutral) 0.27 0.47 0.25 τ = 0.9 (risk-seeking) 0.16 0.58 0.25
Table 3. (average) Portfolio weights across τ-quantile preferences. Optimal (average) weights on Minimum Volatility, Momentum, and Quality for agents with τ ∈ {0.1, 0.5, 0.9}. Apart from rounding errors rows sum to one; weights are fractions.
specific allocations are tailored to specific risks as shown by quantiles.
Table 4 provides a closer look at the portfolios. Performance across portfolio mo
ments and tail metrics increases monotonically with increasing values of τ. The annual
mean, variance and semivariance all increase with increasing values of τ, while downside
oriented metrics improve when τ is low. This trade-off is evident when compared with
the equal-weight (EW) portfolio, which achieves a slightly higher Sharpe ratio than the
τ-policies. However, the tail-aware scores (Tail-Adj Sharpe using CVaR or modified VaR)
re-rank the portfolios in line with investor objectives.
Since quantile maximisers target the distribution’s tails rather than its mean, the con
ventional Sharpe ratio is an inappropriate statistic for evaluation. In Table 4, Tail-Adj
Sharpe (CVaR95 and mVaR95) moves in the direction implied by the chosen tau, narrow
ing or reversing the differences in Sharpe ratios with EW and making the upside-downside
trade-offs encoded by tau explicit. The ETF primitives in Table G.1 (e.g. higher tail risk for
Momentum than Min-Vol) rationalise these shifts.
Specifically, the slightly higher Sharpe ratio of the equally-weighted portfolio over the τ
policies simply reflects the fact that the EW portfolio delivers the highest mean return per
unit of standard deviation, without distinguishing between upside and downside swings.
Tail-adjusted Sharpe ratios, which account for downside or tail risks by replacing standard
deviation with CVaR (average loss in the worst q% of cases) or VaR (threshold loss ex
ceeded with probability q), narrow the gap materially and demonstrate that the quantile
portfolios are achieving their objective of optimising tail trade-offs, even if they do not
maximise the Sharpe ratio. This is because they are efficient in terms of bad-tail risk.
This is important for a realistic risk assessment because it reflects the fact that investors
are more concerned about negative outcomes than about symmetric volatility. Therefore,
our τ-quantile preference model shows that investors with lower τ care more about down
side risk, which is appropriate.
25

Metric EW τ = 0.1 τ = 0.5 τ = 0.9
Ann. Mean (%) 13.66 12.02 13.20 13.96 Ann. StdDev (%) 17.83 17.33 18.32 18.97 Ann. SemiDev (%) 19.53 18.98 19.99 20.67 CVaR 95% (%) -2.81 -2.72 -2.90 -3.01 Avg DD (%) 3.47 3.48 3.74 3.95 VaR 95% (%) -1.61 -1.53 -1.63 -1.75 Sharpe (ann.) 0.71 0.64 0.67 0.68 Sortino (ann.) 0.65 0.58 0.61 0.63 Tail-Adj Sharpe (CVaR95) 4.50 4.06 4.21 4.30 Tail-Adj Sharpe (mVaR95) 8.36 7.65 7.71 7.70
Table 4. Risk–return summary for τ-quantile portfolios. Summary statistics for minimum volatility, momentum, and quality ETFs. Annualized mean/standard deviation follow standard scaling; downside risk uses semideviation below 0%. Tail metrics (VaR95, CVaR95) and average drawdown “Avg DD” derive from the cumulative wealth path. Sharpe and Sortino are annualized excessreturn ratios; tail-adjusted Sharpe scales the annualized mean by |CVaR95| and by modified VaR95 (Cornish–Fisher).
5.1.3 Impact of trading costs
The introduction of reasonable costs of 0.0001, 0.0005, 0.001 and 0.002 reshapes the level
and composition of the portfolios. Cumulative returns compress for all τ (Figure 5) but the
portfolio composition adjusts in a τ-specific manner (Table 5). Low-τ investors reallocate
part of the safe sleeve towards Momentum as costs rise (e.g. the (average) weight of
Minimum Volatility falls from 0.60 to 0.49, while that of Momentum rises from 0.30 to 0.39),
in an attempt to preserve net returns. In contrast, high-τ investors reduce their exposure
to Momentum and increase their exposure to Minimum Volatility (Momentum falls from
0.78 to 0.77, while Minimum Volatility rises from 0.11 to 0.12). The net performance impact
is summarised in Table H.1 in Appendix.
Table H.1 further illustrates how cost sensitivity varies with respect to the parameter τ.
Portfolios with a low value of τ are the most sensitive to frictions: at a high cost of 0.002, the
annual mean for τ = 0.1 drops from 12.75% to 9.23%, with a significant decrease in the tail
adjusted Sharpe ratio. Risk-neutral policies (τ = 0.5) and high-τ policies (τ = 0.9) remain
positive, but are much smaller, reflecting the lower turnover elasticity of their learned
policies at high costs. Therefore, differences in tail-adjusted Sharpe ratios increase with cost
and are specific to the value of τ, indicating a strong sensitivity to turnover for downside
protective policies.
Finally, Appendix H Figure H.1 shows value distributions that confirm preference
consistent learning. The estimated inverse CDFs of value are ordered across quantiles and
exhibit curvature (skewness and heaviness of the tails), indicating that the algorithm is
optimising τ-specific objectives rather than a mean-variance proxy across different costs.
Specifically, inverse-CDF diagnostics reveal that the risk-averse policy estimates higher
26

2017 2018 2019 2020 2021 2022
100
150
200
250
(a) τ=0.1
Cumulative Return
Cost 0.0001 Cost 0.0005 Cost 0.001 Cost 0.002
2017 2018 2019 2020 2021 2022
100
150
200
250
(b) τ=0.5
Cumulative Return
Cost 0.0001 Cost 0.0005 Cost 0.001 Cost 0.002
2017 2018 2019 2020 2021 2022
100
150
200
250
(c) τ=0.9
Cumulative Return
Cost 0.0001 Cost 0.0005 Cost 0.001 Cost 0.002
Figure 5. Effect of transaction costs on cumulative returns of optimal τ-quantile portfolios. Panels show cumulative total return indices for τ ∈ {0.1, 0.5, 0.9} under per-trade cost assumptions from 0.0001 to 0.002 (legend), June 2016–December 2022. Portfolios are formed from the Minimum Volatility, Momentum, and Quality ETFs; higher costs uniformly reduce cumulative performance.
Cost
τ ETF 0.0001 0.0005 0.001 0.002
τ = 0.1
Minimum Volatility 0.60 0.58 0.56 0.49 Momentum 0.30 0.31 0.32 0.39 Quality 0.10 0.11 0.12 0.12
τ = 0.5
Minimum Volatility 0.17 0.17 0.16 0.14 Momentum 0.67 0.67 0.69 0.73 Quality 0.16 0.16 0.15 0.14
τ = 0.9
Minimum Volatility 0.11 0.12 0.12 0.12 Momentum 0.78 0.76 0.76 0.77 Quality 0.11 0.12 0.12 0.12
Table 5. Effect of transaction costs on optimal (average) weights across τ-quantile preferences. Optimal portfolio shares for Minimum Volatility, Momentum, and Quality computed for agents with τ ∈ {0.1, 0.5, 0.9} under alternative cost assumptions (“0.0001”–“0.002”). Entries are fractions that sum to one within each τ (up to rounding).
values at lower quantiles (as intended), but falls below risk-neutral/seeking policies at the
upper quantiles. The risk-seeking policy crosses above the neutral case around the mid
quantiles and dominates the right tail. The implied S-shape indicates fat tails and skewness
in the learned value distributions, which is particularly pronounced under high τ.
5.2 Fama–French Industry Portfolios: Ten-Asset Test
We complement the three-ETF illustration with a higher-dimensional, yet interpretable,
setting using the ten Fama–French industry portfolios. The sample mirrors our ETF ex
ercise (June 2016–December 2022) and allows us to examine how quantile preferences
scale when the investable universe spans cyclical and defensive industries. In this cross
section, dispersion and downside potential differ across sectors (e.g., cyclicals such as
Durables/Manufacturing/Shops tend to be higher-dispersion, while Utilities/Telecom/Non
Durables/Health are more defensive), giving the agent scope to shift composition as τ
varies.
27

2017 2018 2019 2020 2021 2022
1.2
1.5
1.8
2.1
2.4
τ-Quantile Portfolios
Cumulative Return
τ=0.1 τ=0.5 τ=0.9 EW GMV
Figure 6. Cumulative returns of optimal τ-quantile portfolios (FF 10 industries). Cumulative total return indices for portfolios preferred by “risk-averse” (τ = 0.1), “neutral” (τ = 0.5), and “risk-seeking” (τ = 0.9), benchmarked to equally weighted (EW) and global minimum-variance (GMV) portfolios, June 2016–December 2022. Portfolios are formed from the ten Fama–French industry portfolios.
Cumulative return paths in Figure 6 show that targeting higher quantiles continues to
harvest upside: τ=0.5 and τ=0.9 dominate the median path, while τ=0.1 preserves down
side in stress windows. Summary statistics in Table 6 confirm this ordering. Relative to
equal-weight (EW) and global minimum-variance (GMV) benchmarks, τ-policies deliver
higher mean returns with only modest increases in (semi)volatility, yielding stronger ef
ficiency ratios: Sharpe rises from 0.81 (EW) and 0.80 (GMV) to 0.86/0.90/0.92 for τ ∈
{0.1, 0.5, 0.9}; tail-adjusted Sharpe (CVaR 95 %) likewise improves from 5.13 (EW) and 5.07
(GMV) to 5.51/5.79/5.88 for the corresponding τ-policies. Average drawdowns are compa
rable or slightly lower for the τ portfolios, and CVaR 95% remains tightly clustered across
strategies, indicating that the efficiency gains are not driven by materially worse left tails.
The stacked (averaged) weights in Figure 7 show that quantile preferences translate
into systematic, interpretable tilts: as τ increases, the policy shifts weight toward higher
dispersion industries, while lower-τ allocations lean more defensive. GMV remains the
most defensive benchmark, consistent with its construction. The key message is unchanged
from the ETF case: quantile objectives reallocate across sleeves (composition) rather than
merely scaling exposure (level), and the reallocation is preference-consistent.
In a ten-asset industry universe, quantile-maximising portfolios remain both preference
consistent and efficient: higher τ captures upside with superior Sharpe and tail-adjusted
Sharpe, while lower τ protects downside with competitive drawdown and tail metrics. This
generalizes our main result-volatility management emerges endogenously from investor
28

Metric EW GMV tau0.1 tau0.5 tau0.9
Ann. Mean (%) 15.68 14.55 16.03 17.27 17.74 Ann. StdDev (%) 18.20 17.03 17.53 18.07 18.24 Ann. SemiDev (%) 20.31 18.86 19.39 19.84 20.03 CVaR 95% (%) -2.86 -2.67 -2.73 -2.81 -2.85 Avg DD (%) 3.66 3.37 3.25 3.34 3.39 VaR 95% (%) -1.51 -1.43 -1.49 -1.52 -1.54 Sharpe (ann.) 0.81 0.80 0.86 0.90 0.92 Sortino (ann.) 0.72 0.72 0.78 0.82 0.84 Tail-Adj Sharpe (CVaR95) 5.13 5.07 5.51 5.79 5.88 Tail-Adj Sharpe (mVaR95) 9.07 9.20 10.02 10.26 10.30
Table 6. Risk–return summary for τ-quantile portfolios. Summary statistics for minimum volatility, momentum, and quality ETFs. Annualized mean/standard deviation follow standard scaling; downside risk uses semideviation below 0%. Tail metrics (VaR95, CVaR95) and average drawdown “Avg DD” derive from the cumulative wealth path. Sharpe and Sortino are annualized excessreturn ratios; tail-adjusted Sharpe scales the annualized mean by |CVaR95| and by modified VaR95 (Cornish–Fisher).
GMV 0.1 0.5 0.9
0.0
0.2
0.4
0.6
0.8
1.0
Sector Weights by Portfolio (Stacked)
Portfolio
Cumulative weight
Durbl
Enrgy
HiTec
HMltahnuf
NoDur
Other
Shops
Telcm
Utils
Figure 7. (Average) portfolio weights across τ-quantile preferences (FF 10 industries). Stacked average sector weights for GMV and τ ∈ {0.1, 0.5, 0.9} portfolios formed from the ten Fama–French industry portfolios (weights sum to one). Sectors follow the standard FF10 taxonomy: Durbl, Enrgy, HiTec, Hlth, Manuf, NoDur, Other, Shops, Telcm, Utils.
tail priorities-to a richer cross-section where sectoral risk heterogeneity allows clearer,
state- and preference-contingent tilts.
5.3 Discussion
The real-world illustration shows how quantile maximisers behave in a systematically
preference- and state-contingent fashion. Low-τ policies de-risk endogenously in volatile
states and emphasise downside protection, while high-τ policies lean into upside via mo
mentum and increase risk when upside is plausible. Both adjust the composition (not
29

merely the scale) of risk when frictions change. In tail-aware metrics (such as TRaSR),
these policies are evaluated based on their intended outcomes - the relevant tail of the re
turn distribution - providing a microfounded interpretation of “volatility management”
(DeMiguel et al., 2024; Moreira and Muir, 2017) within a dynamic, investor-objective
framework. Specifically, it establishes volatility scaling as the optimal response to tail
focused preferences rather than an ad hoc inverse-variance rule. This precisely reflects the
preference-based foundation emphasised in the earlier theory: quantile maximisation re
shapes the risk-return trade-off by targeting the distribution’s tails and rationalising when
“volatility-managed” exposures should contract or expand.
In contrast to the traditional mutual fund separation theorem, which predicts a con
vex combination of risk-free and risky assets depending on investor risk aversion, Castro
et al. (2022) show that under quantile preferences, investors exhibit an all-or-nothing al
location. Specifically, risk-averse agents invest entirely in the risk-free asset, while risk
seeking agents invest entirely in the risky asset. We demonstrate that the environment
rich in frictions alters the static logic, and even risk-averse policies can benefit from di
versification. Meanwhile, upper-τ policies can create value by selectively engaging with
high-dispersion exposures when the state is favourable. Such behaviours only become ap
parent when preferences are embedded in a dynamic distributional learning environment
with on-policy stabilisation.
6 Conclusion
We present a dynamic quantile portfolio framework that learns policies that directly
target the investor’s objective of achieving the desired quantile. This approach unifies
quantile preferences with distributional learning, avoiding the use of parametric utilities,
and enables the optimal portfolio to be tailored to heterogeneous risk preferences while
maintaining competitive returns.
Empirically, we demonstrate that allocations and performance vary significantly with
respect to the value of the τ preference. In a realistic, frictional environment, upper τ
policies outperformed after mid-2017 while still being exposed to market drawdowns. Our
algorithm internalises the non-Gaussian features of returns, such as fat tails and skewness,
and translates them into portfolios that are tailored for investor preferences.
Our results suggest that customised, dynamic portfolio construction is preferable to
one-size-fits-all solutions. The same investable universe can support different optimal
policies once investors’ tail priorities are made explicit. Methodologically, on-policy dis
tributional learning with quantile objectives provides a transparent, data-driven approach
to implementing these preferences in real time. Financial advisors and portfolio managers
30

should consider individual client profiles more deeply, moving away from standardised
portfolios towards those that reflect personal risk appetites, life stages and financial objec
tives.
31

References
Ang, A. and G. Bekaert (2002). International asset allocation with regime shifts. The review
of financial studies 15(4), 1137–1187.
Bellemare, M. G., W. Dabney, and R. Munos (2017). A distributional perspective on rein
forcement learning. In International conference on machine learning, pp. 449–458. PMLR.
Ben-David, I., F. Franzoni, B. Kim, and R. Moussawi (2023). Competition for attention in
the etf space. The Review of Financial Studies 36(3), 987–1042.
Borkar, V. S. and V. S. Borkar (2008). Stochastic approximation: a dynamical systems viewpoint,
Volume 100. Springer.
Castro, L. d., A. F. Galvao, G. Montes-Rojas, and J. Olmo (2022). Portfolio selection in
quantile decision models. Annals of finance 18(2), 133–181.
Chambers, C. P. (2009). An axiomatization of quantiles on the domain of distribution
functions. Mathematical Finance: An International Journal of Mathematics, Statistics and
Financial Economics 19(2), 335–342.
Dabney, W., M. Rowland, M. Bellemare, and R. Munos (2018). Distributional reinforce
ment learning with quantile regression. In Proceedings of the AAAI conference on artificial
intelligence, Volume 32.
de Castro, L. and A. F. Galvao (2019). Dynamic quantile models of rational behavior.
Econometrica 87(6), 1893–1939.
de Castro, L., A. F. Galvao, and D. Nunes (2025). Dynamic economics with quantile pref
erences. Theoretical Economics 20(1), 353–425.
DeMiguel, V., A. Martín-utrera, and R. Uppal (2024). A multifactor perspective on
volatility-managed portfolios. The Journal of Finance 79(6), 3859–3891.
Duarte, V., D. Duarte, and D. H. Silva (2024). Machine learning for continuous-time finance.
The Review of Financial Studies 37(11), 3217–3271.
Guidolin, M. and A. Timmermann (2007). Asset allocation under multivariate regime
switching. Journal of Economic Dynamics and Control 31(11), 3503–3544.
Hornik, K. (1991). Approximation capabilities of multilayer feedforward networks. Neural
networks 4(2), 251–257.
32

Huang, S., Y. Song, and H. Xiang (2024). The smart beta mirage. Journal of Financial and
Quantitative Analysis 59(6), 2515–2546.
Janasek, L. (2025). Gradient-based reinforcement learning for dynamic quantile. Technical
report, Charles University Prague, Faculty of Social Sciences, Institute of Economic . . . .
Jiang, J., Y. Peng, and J. Hu (2022). Quantile-based policy optimization for reinforcement
learning. In 2022 Winter Simulation Conference (WSC), pp. 2712–2723. IEEE.
Johansson, A., R. Sabbatucci, and A. Tamoni (2025). Tradable risk factors for institutional
and retail investors. Review of Finance 29(1), 103–139.
Ma, X., L. Xia, Z. Zhou, J. Yang, and Q. Zhao (2020). Dsac: Distributional soft actor critic
for risk-sensitive reinforcement learning. arXiv preprint arXiv:2004.14547.
Manski, C. F. (1988). Ordinal utility models of decision making under uncertainty. Theory
and Decision 25, 79–104.
Markowitz, H. (1952). Portfolio selection. The Journal of Finance 7(1), 77–91.
Moreira, A. and T. Muir (2017). Volatility-managed portfolios. The Journal of Finance 72(4),
1611–1644.
Rostek, M. (2010). Quantile maximization in decision theory. The Review of Economic Stud
ies 77(1), 339–371.
Rumelhart, D. E., G. E. Hinton, and R. J. Williams (1988). Neurocomputing: Foundations
of research.
Todorov, K. (2024). When passive funds affect prices: evidence from volatility and com
modity etfs. Review of Finance 28(3), 831–863.
Tversky, A. and D. Kahneman (1992). Advances in prospect theory: Cumulative represen
tation of uncertainty. Journal of Risk and uncertainty 5, 297–323.
Wang, S. S. (2000). A class of distortion operators for pricing financial and insurance risks.
Journal of risk and insurance, 15–36.
33

Appendix
A Illustration: Multiple-Period Portfolio Choice
A Two-Period Portfolio Choice (T = 2)
For the decision at t = 0 we need to consider the discounted value from Equation 7
Y = 0 + βv∗τ(W1)|W0, and since Y is affine and increasing in R1, then
v∗τ(W0) = β2W0 · max(Qτ[R2], R f ) · max(Qτ[R1], R f ) (27)
To see this, consider no shorting, α ∈ [0, 1]. By monotonicity and positive homogeneity of
quantiles for non-negative scalings:
Y = 0 + βv∗τ(W1)|W0 (28)
= β2W1 max(Qτ [R2] , R f )|W0 (29)
= β2W0 α0R1 + (1 − α0)R f max(Qτ [R2] , R f ) (30)
and since Y is affine and increasing in R1, then
v∗τ(W0) = max
α0∈[0,1] Qτ[β2W0 α0R1 + (1 − α0)R f max(Qτ [R2] , R f )] (31)
= β2W0 · max(Qτ [R2] , R f ) · max
α0∈[0,1] Qτ[ α0R1 + (1 − α0)R f ] (32)
= β2W0 · max(Qτ[R2], R f ) · max(Qτ[R1], R f ) (33)
B Two-Period Portfolio Choice (T=2) with volatility regimes
Following Equation 7, both sources of uncertainty jointly determine the distribution
whose τ-quantile the investor seeks to optimise:
Y = βv∗τ(W1, z1) W0, z0 (34)
= β2W1 max Qτ[R2 | z1], R f W0, z0 (35)
= β2W0 α0R1 + (1 − α0)R f max Qτ[R2 | z1], R f z0 (36)
=

 
 
β2W0 α0(R1|z0) + (1 − α0)R f max Qτ[R2 | z1 = L], R f with prob. pz0L
β2W0 α0(R1|z0) + (1 − α0)R f max Qτ[R2 | z1 = H], R f with prob. pz0H
(37)
34

and the investor’s value function is
v∗τ(W0, z0) = max
α0∈[0,1] Qτ[β2W0 α0R1 + (1 − α0)R f max(Qτ [R2|z1] , R f )|z0] (38)
= β2W0 max
α0∈[0,1] Qτ α0R1 + (1 − α0)R f max(Qτ [R2|z1] , R f )|z0 (39)
C Multiple-Period Portfolio Choice
We keep the setting of one risky asset with gross return Rt+1, a risk-free gross rate R f ,
rebalancing each period, and αt ∈ [0, 1] the share in the risky asset. Wealth evolves as
Wt+1 = Wt αtRt+1 + (1 − αt)R f . (40)
As in the one- and two-period illustrations, only terminal wealth is rewarded. With dis
count factor β ∈ (0, 1),
v∗
τ(Wt) = max
{α j }T−1
j=t
Qτ
h
β T−t WT Wt
i
. (41)
Proposition (Optimal policy and value)
Define mk := max Qτ[Rk], R f . Then, for every t = 0, . . . , T − 1,
v∗
τ(Wt) = β T−t Wt
T
∏
k=t+1
mk, (42)
and the optimal allocation is the corner rule
αt∗ =

    
    
1, if Qτ[Rt+1] > R f ,
0, if Qτ[Rt+1] < R f ,
any αt ∈ [0, 1], if Qτ[Rt+1] = R f .
(43)
Proof. Step T − 1. By monotonicity and affine equivariance of quantiles for positive
scalars,
v∗
τ(WT−1) = max
αT−1
Qτ
h
β WT−1 αT−1RT + (1 − αT−1)R f WT−1
i
(44)
= βWT−1 max(Qτ[RT], R f ) = βWT−1mT. (45)
35

Suppose v∗
τ(Wt+1) = β T−(t+1)Wt+1 ∏kT=t+2 mk. Then
v∗
τ(Wt) = mαat x
Qτ
h
β T−t Wt+1
T
∏
k=t+2
mk Wt
i
(46)
= β T−t T
∏
k=t+2
mk mαat x
Qτ[Wt+1 | Wt] (47)
= β T−t T
∏
k=t+2
mk Wt max(Qτ[Rt+1], R f ) (48)
= β T−tWt
T
∏
k=t+1
mk, (49)
and the same corner rule follows. □
Note that (i) T = 1 gives v∗
τ(W0) = β W0 max(Qτ[R1], R f ), (ii) T = 2 gives v∗
τ(W0) =
β2W0 max(Qτ[R1], R f ) max(Qτ[R2], R f ). If Rt
d= R i.i.d., then mk ≡ m = max(Qτ[R], R f )
and
v∗
τ(Wt) = β T−t Wt m T−t. (50)
B Illustration: Relation to the Classical Preferences and Risk
A preference of τ = 0.1 reflects pessimistic behaviour focused on downside risk and
avoiding exposure to risk, whereas a τ = 0.9 represents optimistic behaviour focusing on
upside potential and preferring higher risk. Therefore, investors can focus directly on the
downside or upside depending on their risk attitudes encoded in the value of τ.
Figure B.1. (a) R ∼ N(0.03, 0.12), (b) R ∼ N(0.05, 0.12), (c) R ∼ N(0.3, 0.22) with R f = 0.04. Note: CARA utility value function is shifted by 0.75 for a better readability.
36

Figure B.1 shows three simple cases with different expected values of a risky asset,
μ and variance σ2. In Figure B.1 (a), when μ < R f , risk-neutral EUs, risk-averse EUs
and mean-variance preference makers choose the risk-free asset, while quantile preference
makers decide according to the τ. For example, when the quantile is 0.9, the risky asset is
chosen since the expected value is much higher than the risk-free rate, since μ + σΦ−1(τ) =
0.03 + 0.1 × 1.28 = 0.158. Figure B.1 (b) shows that shifting the value of μ to μ > R f
changes the decision of the EU and the mean-variance preference makers. Shifting μ to a
large outcome of 0.3 also directs all decisions towards the risky asset, even with increased
variance, as illustrated in Figure B.1 (c). Note that the preference maker with a value of
tau equal to 0.1 also chooses the risky asset, simply because μ + σΦ−1(τ) = 0.3 + 0.2 ×
(−1.28) = 0.044, which is larger than R f . Finally, note that the risk neutral EU preference
maker is defined by construction as having a preference for the value of the parameter at
the τ = 0.5, i.e. at the value of the parameter at which the mean and variance are equal as
μ + σΦ−1(0.5) = μ.
C Policy update rule
Define Jτ(θ) = Es∼dθ [Vτ
ω(s)], where dθ is the on-policy occupancy, and ψτ(z) = τ −
I{z < 0}. Treat the critic as fixed on the actor timescale. We derive the gradient of the τ
quantile with respect to the policy parameters ∇θQτ[Y|θ] via the implicit function defined
by the CDF-quantile relation:
FY(Qτ[Y|θ], θ) = τ (51)
Differentiating at θ0 and applying chain rule gives
∇y FY y=Qτ[Y|θ0], θ=θ0 · ∇θ Qτ[Y|θ] θ=θ0 + ∇θ FY y=Qτ[Y|θ0], θ=θ0 = 0 (52)
from which we can express the derivative of the τ-quantile with respect to policy parame
ters:
∇θ Qτ[Y|θ] y=Qτ[Y|θ0], θ=θ0 = − ∇θ FY
fY y=Qτ[Y|θ0], θ=θ0 (53)
where fY denotes the density of variable Y.
Since fY is positive and univariate, it does not affect the direction of the gradient in Eq.
53. We now solve for the numerator ∇θ FY. We can express FY with the expectations over
an indicator function (Jiang et al. (2022)):
FY(y, θ) = E [I{Y ≤ y}] (54)
The value of quantile Qτ[Y|θ] is unknown. Nevertheless, we use Critic network to
37

provide an estimate of its value
Qτ[Y|θ] ≈ Vτ
ω(st) (55)
Using the likelihood-ratio identity for the policy,
∇θ FY(y, θ) = ∇θE [I{Y ≤ y}] (56)
= ∇θE
"
∑
α
πθ(α|st)I{Y ≤ y}
#
(57)
=E
"
∑
α
∇θπθ(α|st)I{Y ≤ y}
#
(58)
=E
"
∑
α
πθ(α|st)∇θ log(πθ(α|st))I{Y ≤ y}
#
(59)
= E [∇θ log(πθ(αt|st))I{Y ≤ y}] (60)
≈ E [∇θ log(πθ(αt|st))I{Y ≤ Vτ
ω(st)}] (61)
≈ ∇θ log(πθ(αt|st))I{rt+1 + βVτ
ω(st+1) ≤ Vτ
ω(st)} (62)
where the last line uses y ≈ Vτ
ω(st) and a one-step draw for Y. Defining Yt = rt+1 +
βVτ
ω(st+1) and δtτ = Yt − Vτ
ω(st), a standard policy-gradient surrogate for Jτ is
∇θ Jτ(θ) = E[ψτ(Yt − Vτ
ω(st)) ∇θ log πθ(αt | st)] . (63)
Multiplying by δtτ yields the low-variance training surrogate used in the main text (plus
an entropy regularizer).
38

D Algorithm
Algorithm D.1 Quantile Reinforcement Learning for Portfolio Choice
Set τ ∈ (0, 1)-quantile preference level
Initialize:
Actor network (policy) weights θ
Critic network (quantile value) weights ω
Set Critic target weights ω ̄ ← ω
Quantile levels 0 < τ1 < · · · < τp < 1
Experience buffer D ← ∅
for episode = 1 to Nepisodes do
Sample initial state s0
for each time step t do
Action selection: Sample portfolio weights αt ∼ πθ(· | st)
Apply αt, observe reward rt+1 and next state st+1
Store transition (st, αt, rt+1, st+1) in D
Critic (Value) update:
for each quantile τj do
Compute TD target: yj = rt+1 + βVτj
ω ̄ (st+1)
Compute TD error: δτj
t = yj − Vτj
ω (st)
end for
Update ω by descending the quantile regression loss:
ω ← ω − ηω∇ω Lcritic(ω)
Actor (Policy) update:
Estimate Qτ[Y | θ] ≈ Vω(st)
Compute policy gradient and update θ:
θ ← θ − ηθ ∇θ Lactor(θ)
Target Critic soft update: ω ̄ ← ρω + (1 − ρ)ω ̄
Update state: st ← st+1
if episode terminates then
break
end if
end for
if episode modK = 0 then
Evaluate current policy πθ on validation set
Update monitoring metrics
if early stopping criterion satisfied then
Save best θ, ω
break
end if
end if
end for
Save all relevant training metrics and model checkpoints
Plot training curves
Final evaluation: test πθ on full training set
39

Table D.1. Main Parameters
Parameter
Beta 0.99
Episodes 50
Batch Size Episodic
Critic LR Start 0.01
Critic LR End 0.001
Actor LR Start 0.005
Actor LR End 0.001
Rho 0.01
Variance control 0
Sigma 0.5
Min Epochs 15
Evaluation 3
Patience 2
Critic decay 1.5
Actor decay 1.5
Reward scale 1221
Order loss Reg 5
Rolling window scaling 60 days
L2 0.0001
Number of exogenous state variables 7
Number of endogenous state variables 5
Number of actions = shares 3
Critic neurons per layer 16
Actor neurons per layer 16
TD error scale 10
Scaling gradients wealth,balance,shares, actor loss
Transaction cost 0.0001, 0.0005, 0.001, 0.002
Interest rate on Balance 1.0002
40

E Theory for Quantile Actor-Critic
A Contraction, monotonicity, and dynamic consistency
Lemma E.1 (1-Lipschitz property of quantiles). If X, Y are random variables with |X − Y| ≤ c
a.s., then |Qτ[X] − Qτ[Y]| ≤ c.
Proof. Since X ≤ Y + c a.s., FX(x) ≥ FY(x − c) for all x. Hence FX(Qτ[Y] + c) ≥ FY(Qτ[Y]) ≥
τ, so Qτ[X] ≤ Qτ[Y] + c. The reverse inequality follows symmetrically.
Theorem E.2 (β-contraction of T τ
π and T∗τ). For bounded V, W : S → R,
∥T τ
πV −T τ
π W∥∞ ≤ β ∥V − W∥∞ , ∥T∗τV − T∗τW∥∞ ≤ β ∥V − W∥∞ .
Proof. Fix s and compare X = r(α, s) + βW(s′) vs. Y = r(α, s) + βV(s′) under the same
(α, s, s′). Then |X − Y| ≤ β ∥V − W∥∞ a.s.; apply Lemma E.1 and take sups. For T∗τ, the
pointwise maxα of β-Lipschitz maps is again β-Lipschitz.
Corollary E.3 (Existence, uniqueness, value iteration). T τ
π and T∗τ admit unique fixed points
vτ
π and v∗τ; the iterations Vk+1 = T τ
π Vk and Vk+1 = T∗τVk converge from any V0.
Monotonicity. If V ≤ W pointwise then T τ
πV ≤Tτ
π W and T∗τV ≤ T∗τW.
B What the critic estimates (and when it converges)
The critic learns the τ-quantile of the Y = r(α, s) + β Vω ̄τ(s′), with TD error δtτ = Y −
Vτ
ω(s) and a monotonicity penalty across quantiles. At population level, the pinball loss
solves the projected fixed point
Vτ
ω ≈ ΠF T τ
π Vτ
ω,
where ΠF denotes the (pinball-risk) projection onto the critic class F .
Assumption 1 (Critic). (A1) discounted MDP with fully bounded rewards and fully observed
state; (A2) β ∈ (0, 1); (A3) on-policy sampling with an ergodic Markov chain; (A4) the condi
tional law of Y | s has a density positive at its τ-quantile; (A5) Robbins-Monro stepsizes; (A6)
gradients bounded in expectation; (A7) realizability vτ
π ∈ F or uniform approximation error
infV∈F ∥V − vτ
π∥∞ ≤ εappr.
Theorem E.4 (Critic convergence and error bound). Under Assumption 1, critic iterates con
verge to a stationary point Vb of the population objective. If Vb − ΠF T τ
π Vb ∞ ≤ ε, then
Vb − vτ
π ∞ ≤ ε + εappr
1−β .
41

Proof. Write Vb = ΠF T τ
π Vb + rΠ, ∥rΠ∥∞ ≤ ε. Using T τ
π vτ
π = vτ
π and Theorem E.2,
∥
Vb − vτ
π∥∞ ≤ ∥T τ
π Vb − T τ
π vτ
π∥∞ + ε ≤ β∥Vb − vτ
π∥∞ + ε.
Rearrange to obtain ε/(1 − β); add εappr/(1 − β) by triangle inequality if vτ
π ∈/ F .
C Actor gradient for the τ-objective and its implementation
Define Jτ(θ) = Es∼dθ [Vτ
ω(s)], with dθ the on-policy occupancy. Let ψτ(z) = τ − 1{z <
0}. Treating the critic as fixed on the actor timescale and using the likelihood-ratio identity,
∇θ Jτ(θ) = E
h
ψτ Y − Vτ
ω(s) ∇θ log πθ(α | s)
i
, Y = r + βVτ
ω (s′ ).
This motivates the surrogate used in training:
Lactor(θ) = log πθ(αt | st) δtτ (1 − τ)1{δtτ < 0} + τ 1{δtτ ≥ 0} − λθ H(πθ(· | st)).
Assumption 2 (Two-time-scale actor-critic). (B1) Assumption 1(A1)-(A6) hold; (B2) stepsizes
{ηω,t}, {ηθ,t} satisfy ∑t η·,t = ∞, ∑t η·2,t < ∞ and ηθ,t/ηω,t → 0; (B3) persistent exploration (e.g.,
entropy regularization); (B4) ∇θ log πθ(α | s) bounded on the visited set.
Theorem E.5 (Asymptotic stability of actor-critic). Under Assumption 2, the critic tracks the
projected fixed point of T τ
π while the actor performs stochastic ascent on Jτ(θ). The joint process
converges to the internally chain transitive set of the ODE θ ̇ = ∇Jτ(θ), i.e., to stationary points of
the τ-objective up to function-approximation error.
Proof (outline). Fast timescale: The critic converges to the projected fixed point of T τ
π (The
orem E.4). Slow timescale: with the critic near its limit for the current πθ, the actor update
is a noisy ascent direction with martingale-difference noise. Two-time-scale SA/ODE ar
guments imply convergence to stationary points.
D Policy improvement and control
If π0 is greedy w.r.t. V so that Tτ
π0V = T∗τV, then by monotonicity and contraction
vτ
π0 = Tτ
π0 vτ
π0 ≥ Tτ
π0V = T∗τV ≥ Tτ
πV = vτ
π.
Iterating approximate greedification (actor) with projection (critic) gives the usual (1 −
β)−1 performance-loss scaling (approximate policy iteration).
42

F Multi-Period Choice with Realistic Dynamics - Full Details
A State dynamics, costs, and dynamic quantile objective
Let rt ∈ RN be risky-asset log-returns and kt ∈ {1, . . . , K} the regime. Conditional on
kt = k,
rt+1 = ck + Φ rt + u(k)
t+1, u(k)
t+1 ∼ N (0, Σk),
with K=3 regimes (Bull, Neutral, Bear). Regimes follow a first-order Markov chain with
row-stochastic Q so Pr(kt+1=k′|kt=k) = Qkk′. The state is
st = wprev
t , rt, (kt) ,
and the action wt ∈ ∆N+1 (risky sleeves + cash) gives gross portfolio return
Rp(wt; Rt+1) = w⊤
t,risky Rt+1 + 1 − 1⊤wt,risky R f ,
with proportional L1 turnover cost T(wt; wprev
t , rt) = 1
2 ∥wt − wpre
t ∥1 on pre-trade weights
wpre
t (drifted by returns). The dynamic quantile value follows
vπ
τ (st) = Qτ[r(wt, st) + β vπ
τ (st+1) | st] ,
and the optimal policy solves maxπ vπ
τ (·) (quantile of the discounted stream), not a mean
of utilities. See section 2 for how volatility transitions create nested conditional quantiles
and interior solutions even in two-period examples.
B Policy/value approximation and training
We use a Dirichlet actor to parameterize πφ(w|s) on ∆N+1 (risky sleeves plus cash),
adding a small positive bias to the concentration vector to stabilize exploration. The critic
Vω predicts a vector of conditional quantiles {vτ
ω(s)}τ∈T with pinball loss and a mono
tonicity penalty to avoid quantile crossing. Because we enumerate next regimes during
tuple generation, we weight per-sample losses by q = Qkk′ and use self-normalized aver
ages,
L = ∑i qi li
∑i qi
,
so training respects the true regime mixture implied by Q (importance weighting). F.1
summarizes the model-based QAC loop.
43

Algorithm F.1 Model-Based QAC with Dirichlet Policy (summary)
1: Input RS-VAR(1) params (ck, Φ, Σk, Q); grids for wprev and rt; discount β; transaction
cost c.
2: for epochs do
3: Build a transition buffer by looping (wprev, rt, k), sampling wt ∼ πφ(·|st), enumerat
ing k′, simulating rt+1, computing u = U(Rp) − c T, and storing (st, wt, u, s′
t+1, q=Qkk′ ).
4: Update critic by quantile TD with q-weighted pinball+order loss; update actor with
q-weighted quantile advantage; soft-update target critic.
5: end for
C Parameters and scenarios
We fix hyperparameters across τ and average over multiple seeds (Table F.1). Regime
specific RS-VAR(1) parameters and three transition matrices (Bull-Bear, Neutral-Bear, Bull
Neutral) appear in Table F.2-Table F.3; the stationary distributions match the economic
narratives used later (tilts follow the regime mix).
Table F.1. Model and network hyperparameters
Episodes 10 (model-based training)
Discount β 0.96
Learning quantiles {0.1, 0.5, 0.9} with 10 heads total
Actor/Critic layers 2 hidden layers, 32 neurons each; L2=1e-4
Actor output Dirichlet (softplus),
Critic loss Pinball + order penalty (weight 5.0)
Transaction cost 10−3 (proportional L1 turnover)
Risk-free R f = 1.001
Table F.2. Regime-specific RS-VAR(1) parameters (K=3, N=2)
Bull Neutral Bear
Φ
"
0.15 0.10
0.10 0.15
#
(fixed across regimes)
ck [0.0040, 0.0030] [0.0030, 0.0028] [−0.0090, 0.0030]
Σk
"
0.0005 0.00010
0.00010 0.00045
#"
0.0018 0
0 0.0014
#"
0.0050 −0.0030
−0.0030 0.0020
#
44

Table F.3. Transition matrices Q and stationary distributions π
Scenario Q (rows: B, N, Br) π
Bull-Bear

 
0.74 0.02 0.24
0.10 0.82 0.08
0.30 0.02 0.68


 [0.50, 0.10, 0.40]
Neutral-Bear

 
0.82 0.08 0.10
0.02 0.68 0.30
0.02 0.24 0.74


 [0.10, 0.40, 0.50]
Bull-Neutral

 
0.74 0.24 0.02
0.30 0.68 0.02
0.10 0.08 0.82


 [0.50, 0.40, 0.10]
D Evaluation diagnostics and portfolio policies
The critic’s inverse-CDFs average over states, regimes, and scenarios and are ordered by
the targeted quantile; they cross in the middle quantiles as expected (Table F.4). Portfolio
weights exhibit (i) τ-monotone shifts from cash → w2 → w1, and (ii) scenario-specific
reallocations consistent with the stationary mix and covariances (Table F.5-Table F.7).
Table F.4. Inverse-CDF values across quantiles (averaged over states, seeds, scenarios)
Policy 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9
τ = 0.1 -0.6807 -0.3943 -0.1687 -0.0603 0.0280 0.1300 0.2157 0.4587 0.7493
τ = 0.5 -0.9120 -0.5060 -0.2167 -0.0853 0.0443 0.1580 0.2603 0.5210 0.9097
τ = 0.9 -1.2057 -0.7183 -0.3053 -0.1193 0.0343 0.1703 0.3033 0.6373 1.0367
Table F.5. Average portfolio weights by regime and τ
Policy/Regime w1 w2 Cash
τ=0.1 (Bear/Bull/Neutral) 0.1872 / 0.2362 / 0.1862 0.3201 / 0.3042 / 0.2568 0.4927 / 0.4596 / 0.5570
τ=0.5 (Bear/Bull/Neutral) 0.2257 / 0.2881 / 0.2437 0.4175 / 0.4329 / 0.3931 0.3568 / 0.2790 / 0.3632
τ=0.9 (Bear/Bull/Neutral) 0.5168 / 0.4582 / 0.3917 0.2868 / 0.3473 / 0.3625 0.1965 / 0.1946 / 0.2459
Table F.6. Average portfolio weights by scenario (across τ and regimes)
Scenario w1 w2 Cash
Bull-Bear 0.2969 0.3584 0.3447
Bull-Neutral 0.3151 0.3357 0.3492
Neutral-Bear 0.2992 0.3463 0.3545
45

Table F.7. Average policy across risk aversion (across scenarios and regimes)
Policy w1 w2 Cash
τ=0.1 0.2032 0.2937 0.5031
τ=0.5 0.2525 0.4145 0.3330
τ=0.9 0.4555 0.3322 0.2123
Figure F.1. Inverse-CDFs of learned value across policies (averaged across states and scenarios).
46

G ETF data
2017 2018 2019 2020 2021 2022
120
150
180
210
240
ETF returns
Cumulative Return
Minimum Volatility Momentum Quality
Figure G.1. Cumulative returns of factor ETFs (2016–2022). Cumulative total return for Minimum Volatility, Momentum, and Quality for the sample June 2016 - December 2022.
Minimum Volatility Momentum Quality
Ann. Mean (%) 10.66 16.15 14.18 Ann. StdDev (%) 15.97 21.11 18.47 Ann. SemiDev (%) 17.58 23.38 19.86 CVaR 95% (%) -2.44 -3.35 -2.93 Avg DD (%) 3.68 4.38 3.70 VaR 95% (%) -1.27 -1.98 -1.64 Sharpe (ann.) 0.61 0.72 0.71 Sortino (ann.) 0.55 0.65 0.66 Tail-Adj Sharpe (CVaR95) 3.96 4.52 4.51 Tail-Adj Sharpe (mVaR95) 7.47 7.81 8.53
Table G.1. Risk–return summary for factor ETFs. Summary statistics for minimum volatility, momentum, and quality ETFs. Annualized mean/standard deviation follow standard scaling; downside risk uses semideviation below 0%. Tail metrics (VaR95, CVaR95) and average drawdown “Avg DD” derive from the cumulative wealth path. Sharpe and Sortino are annualized excess-return ratios; tail-adjusted Sharpe scales the annualized mean by |CVaR95| and by modified VaR95 (CornishFisher).
47

H Results
Cost
τ Metric 0.0001 0.0005 0.001 0.002
τ = 0.1
Ann. Mean (%) 12.75 12.29 11.55 9.23 Ann. StdDev (%) 16.74 16.79 16.85 17.11 Ann. SemiDev (%) 18.45 18.55 18.51 18.68 CVaR 95% (%) -2.60 -2.61 -2.63 -2.67 Avg DD (%) 3.33 3.39 3.46 3.77 VaR 95% (%) -1.41 -1.41 -1.42 -1.49 Sharpe (ann.) 0.70 0.67 0.63 0.48 Sortino (ann.) 0.64 0.61 0.57 0.44 Tail-Adj Sharpe (CVaR95) 4.53 4.33 4.02 3.08 Tail-Adj Sharpe (mVaR95) 8.30 7.91 7.32 5.52
τ = 0.5
Ann. Mean (%) 14.72 14.15 13.44 13.04 Ann. StdDev (%) 18.90 18.94 19.04 19.27 Ann. SemiDev (%) 20.80 20.80 20.92 21.12 CVaR 95% (%) -2.99 -3.01 -3.03 -3.08 Avg DD (%) 3.85 3.93 4.08 4.37 VaR 95% (%) -1.79 -1.79 -1.79 -1.80 Sharpe (ann.) 0.73 0.69 0.65 0.63 Sortino (ann.) 0.66 0.63 0.60 0.57 Tail-Adj Sharpe (CVaR95) 4.58 4.38 4.10 3.90 Tail-Adj Sharpe (mVaR95) 8.06 7.69 7.19 6.83
τ = 0.9
Ann. Mean (%) 14.91 14.42 14.15 13.88 Ann. StdDev (%) 19.87 19.45 19.46 19.52 Ann. SemiDev (%) 21.81 21.40 21.39 21.44 CVaR 95% (%) -3.15 -3.11 -3.11 -3.12 Avg DD (%) 4.10 4.16 4.22 4.36 VaR 95% (%) -1.91 -1.86 -1.86 -1.86 Sharpe (ann.) 0.70 0.69 0.68 0.66 Sortino (ann.) 0.64 0.63 0.62 0.60 Tail-Adj Sharpe (CVaR95) 4.41 4.32 4.23 4.12 Tail-Adj Sharpe (mVaR95) 7.77 7.55 7.39 7.20
Table H.1. Impact of transaction costs on risk–return statistics for τ-quantile portfolios. Summary metrics (annualized mean, standard deviation, semideviation; VaR95, CVaR95; average drawdown; Sharpe and Sortino; tail-adjusted Sharpe using CVaR95 and modified VaR95) for policies with τ ∈ {0.1, 0.5, 0.9} under alternative per-trade costs.
48

(a) Cost 0.0001
0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9
-20
-10
0
10
20
Approximated Inverse CDF by Risk Preference
τ
Value Function
τ=0.1 portfolio τ=0.5 portfolio τ=0.9 portfolio
(b) Cost 0.0005
0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9
-20
-10
0
10
20
Approximated Inverse CDF by Risk Preference
τ
Value Function
τ=0.1 portfolio τ=0.5 portfolio τ=0.9 portfolio
(c) Cost 0.001
0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9
-20
-10
0
10
20
Approximated Inverse CDF by Risk Preference
τ
Value Function
τ=0.1 portfolio τ=0.5 portfolio τ=0.9 portfolio
(d) Cost 0.002
0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9
-20
-10
0
10
20
Approximated Inverse CDF by Risk Preference
τ
Value Function
τ=0.1 portfolio τ=0.5 portfolio τ=0.9 portfolio
Figure H.1. Inverse CDFs of learned value across τ and costs. Approximated quantile functions of the estimated value function for τ-quantile policies with τ ∈ {0.1, 0.5, 0.9} under alternative pertrade cost assumptions (“cost 0.0001”–“0.002” in panels). Curves align with preferences—τ = 0.1 dominates the left tail (downside), τ = 0.9 the right tail (upside), with τ = 0.5 in between-indicating preference-consistent learning and non-Gaussian (skewed, heavy-tailed) value distributions.
49

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:53.607Z
- **Text Length:** 104550 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 49 of 49
