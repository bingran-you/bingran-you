# PDF Document: Laudagé and Sass - 2025 - PELVE from a regulatory perspective.pdf

**File Path:** Laudagé and Sass - 2025 - PELVE from a regulatory perspective.pdf

**Processed Date:** 2026-02-10T18:15:56.748Z

**File Size:** 12165.89 KB

**Total Pages:** 29

**Extracted Pages:** 29

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3573

**Title:** PELVE from a regulatory perspective

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

PELVE FROM A REGULATORY PERSPECTIVE
CHRISTIAN LAUDAGÉ AND JÖRN SASS
Abstract. Under Solvency II, the Value-at-Risk (VaR) is applied, although there is broad consensus that the Expected Shortfall (ES) constitutes a more appropriate measure. Moving towards ES would necessitate specifying the corresponding ES level. The recently introduced Probability Equivalent Level of VaR and ES (PELVE) determines this by requiring that ES equals the prescribed VaR for a given future payoff, reflecting the situation of an individual insurer. We incorporate the regulator’s perspect-
ive by proposing PELVE-inspired methods for multiple insurers. We analyze existence and uniqueness of the resulting ES levels, derive expressions for elliptically distributed payoffs and establish limit results for multivariate regularly distributed payoffs. A case study highlights that the choice of method is crucial when payoffs arise from different distribution families. Moreover, we recommend specific methods.
Keywords: Elliptical distribution, Expected Shortfall, PELVE, regularly varying distribution, systemic risk, Value-at-Risk
1. Introduction
Recently, Li and Wang [23] defined the Probability Equivalent Level of VaR and ES (PELVE). For a given random variable, reflecting the future payoff of an agent, it describes the ES level at which the ES equals a predefined VaR. The intended transition from VaR to ES is relevant for the insurance industry, because the Solvency II regulation is still based on the VaR, even if the common consensus is that an ES is superior, see the discussions in [2, 12, 21]. In the banking sector, VaR has already b-
een replaced by ES, see [14] for a discussion regarding the Basel accords.1 PELVE is based on a one-dimensional random variable, which makes it an appropriate measure to analyze the situation of an individual insurer. However, it may not be appropriate for a regulator who needs to determine an ES level for multiple insurers. In this case, we cannot expect an ES level for which none of the insurers would need to adjust their capital reserves. In fact, such a scenario would rather be the exception t-
han the rule. This raises the central question of this manuscript:
How should the regulator determine an appropriate ES level across multiple insurers?
To answer this question, we model the payoffs of multiple insurers via a multi-dimensional random variable and introduce multivariate extensions of PELVE. These extensions provide the regulator with a quantitative tool for decision-making, eliminating reliance on intuition solely based on the individual situations of insurers. The central question identified above has not been systematically examined in the existing actuarial literature: [9, Figure 2] or [26, Figure 2.2] give empirical results for-
 an appropriate ES level only in the case of a one-dimensional random variable. Li and Wang [23] formalised their empirical findings by introducing the innovative concept of PELVE. Assa, Lin, and Wang [3] use prescribed PELVE values to find a suitable distribution model, that is, PELVE is utilized to calibrate distribution functions. Furthermore, [18] demonstrates that PELVE is helpful to obtain a fair comparison between the diversification quotients of VaR and ES. Regarding the PELVE methodology,-
 numerous studies replace ES by other risk measures: OrtegaJiménez et al. [25] introduce the PELCoV, which is the Probability Equivalent Level between Co-Value-at-Risk (CoVaR) and VaR, where CoVaR is a VaR based on a conditional distribution
Date: November 6, 2025. 1Moving from VaR to ES also entails certain drawbacks. For instance, under ES it is possible that more extreme default behaviors are considered acceptable, see [20].
1
arXiv:2511.03551v1 [q-fin.MF] 5 Nov 2025

2 C. LAUDAGÉ & J. SASS
function.2 Another concept is PELVEn, defined in [4]. It is the Probability Equivalent Level between VaR and higher-order ES. Finally, Fiori and Rosazza Gianin [15] suggest two extensions of PELVE – distorted PELVE and generalized PELVE. The distorted PELVE is the equivalent level between VaR and parametrized Wang premia. The latter are typically applied to calculate insurance premia. The generalized PELVE substitutes VaR and ES by two families of risk measures, where the second family is obtained-
 by integration with respect to the first. Instead, we focus on the regulatory perspective, for which it is indispensable to consider the payoffs of multiple insurers. Accordingly, we propose the following methods to determine an ES level corresponding to a given VaR level: (1) A-PELVE: weighted average of the PELVE values of the agents; (2) WC-PELVE: largest (the worst-case, WC) PELVE value over all agents; (3) MSEPELVE: minimizes the weighted mean-squared-error (MSE) between ES and VaR; (4) Sys--
Pelve: minimum level such that the systemic risk measured by the ES does not exceed the systemic risk measured by the VaR. We summarize these methods under the umbrella of Multi-PELVE. Our journey then starts by developing auxiliary results for ES and PELVE curves. These results are needed to analyze the Multi-PELVE methods, but they are also of independent interest. Then, we state existence results. Furthermore, in the majority of the cases, a Multi-PELVE method gives a unique solution. However, -
a main finding is a comprehensive example, showing that the MSEPELVE is non-unique in general. Furthermore, for elliptically distributed payoffs, we find that most of the Multi-PELVE methods can be represented by a one-dimensional elliptically distributed random variable. To model extreme scenarios, we employ distributions with multivariate regularly varying tails. In this framework, and as the VaR level approaches zero, all methods converge to the PELVE of a one-dimensional Pareto-distributed ran-
dom variable. In a case study, we first assume that the equity capital distributions are out of the same distribution family. In this situation, the choice of a Multi-PELVE method (aside from the WC-PELVE) is not significant. Also the Multi-PELVE values are close to the PELVE values of each individual insurer and so, no tremendous changes in the capital reserves occur by moving from VaR to ES. This is a convenient situation for the regulator. However, this behavior can change drastically when the -
equity capitals arise from distinct distribution families. To illustrate this, we perturb the model by replacing some light-tailed distributions with heavy-tailed ones. In doing so, the choice of the Multi-PELVE method becomes significant: A-PELVE and WC-PELVE do not seem to be adequate choices, because they either require or allow some insurers to drastically change their capital reserves. With respect to overall changes in the capital reserves, the Sys-PELVE and the MSE-PELVE provide convenient -
results. Furthermore, a weighted variant of the MSE-PELVE does not prioritize a market leader, as it is the case for a chosen weighted variant of the A-PELVE. This weighted MSE-PELVE is the recommended Multi-PELVE method for the second part of the case study. The manuscript is structured as follows: In Section 2 we recall the definitions of VaR and ES as well as the definition of PELVE. Furthermore, we discuss auxiliary results for ES and PELVE curves and explain the regulator’s objective. Then, i-
n Section 3, we state the definitions of the Multi-PELVE methods, discuss properties like e.g. existence and uniqueness, and compare their pros and cons. In Section 4, we focus on elliptical and heavy-tailed distributions. Finally, in the case study in Section 5 we compare the Multi-PELVE methods in a comprehensive way. All proofs are gathered in the appendix.
2. Preliminaries and regulator’s objective
In this section, we first repeat the definition of PELVE from Li and Wang [23]. We then state new results regarding ES and PELVE curves, which are used in the upcoming sections and are also
2To be precise, the Co-Value-at-Risk CoVaRv,u(Y |X) is the VaR of a risk Y at level v conditioned that some other risk X is equal to its VaR at level u. So, CoVaR is the (generalized) inverse of the conditional distribution of Y at v given X = VaRu(X). Consequently, PELCoV at level v is the value u such that CoVaRv,u(Y |X) = VaRλ(Y ).

PELVE FROM A REGULATORY PERSPECTIVE 3
of independent interest. Finally, we discuss the regulator’s perspective and formally introduce the problem of interest.
2.1. VaR, ES and PELVE. We impose an atomless probability space (Ω, F, P ).3 For simplicity, we work in the space of integrable random variables L1(Ω, F, P ) or L1 for short. A random variable X ∈ L1 stands for the payoff of an agent at a fixed future time point. The corresponding distribution function is denoted by F X . The two most common risk measures are Value-at-Risk and Expected Shortfall:
Example 2.1. (i) The Value-at-Risk (VaR) at level λ ∈ (0, 1) of X ∈ L1 is
VaRλ(X) := −q+
X (λ) := inf{m ∈ R | P (X < −m) ≤ λ},
where q+
X is the upper quantile function of X.
(ii) The Expected Shortfall (ES) at level λ ∈ (0, 1] of X ∈ L1 is
ESλ(X) := 1
λ
λ
∫
0
VaRu(X) du.
Our starting point is the map in the next definition, which follows Li and Wang [23]. We always use the convention inf ∅ = ∞.
Definition 2.2. The Probability Equivalent Level of VaR and ES (PELVE) at level λ ∈ (0, 1) is the map Πλ : L1 → [1, λ−1] ∪ {∞} defined by
Πλ(X) := inf
{
c ∈ [1, λ−1]
∣ ∣
∣ EScλ(X) ≤ VaRλ(X)
}
.
Remark 2.3. Our definition of PELVE differs from the one in [23], because random variables model payoffs instead of losses. By [23, Proposition 1] we know that Πλ(X) exists, meaning that Πλ(X) < ∞, if and only if E[−X] ≤ VaRλ(X). If in addition, p 7→ VaRp(X) is not a constant function on (0, λ], guaranteeing that p 7→ ESp(X) is strictly decreasing on [λ, 1], then, by [23, Proposition 2] there exists a unique c ∈ [1, λ−1] such that EScλ(X) = VaRλ(X).
The PELVE c∗ = Πλ(X) refers to the ES level c∗λ for which the corresponding ES is equal to the VaR at level λ given the payoff X. Mathematically, PELVE is useful for analyzing the impact on the capital reserve of an individual insurer with payoff X when the regulator requires the insurer to apply from now on an ES at level cλ instead of the VaR at level λ: If c > c∗, then the new reserve EScλ(X) is smaller than the previous one given by VaRλ(X). For c < c∗ the opposite is true. Economically, chang-
ing to an ES level for which the capital reserve does not change drastically is desirable: On the one hand, if the ES becomes significantly larger than the VaR, the insurer may be unable to raise sufficient additional reserves quickly. On the other hand, if the ES becomes substantially smaller than the VaR, the insurer would be insufficiently capitalized, which endangers its financial stability and is particularly undesirable from a regulatory perspective, because it also increases the systemic ri-
sk arising within the entire network of insurers. Two concepts related to the analysis of PELVE are the ES curve and the PELVE curve. Hence, before we discuss the regulatory perspective in detail, we state specific results for such curves.
2.2. Results on ES curves. We start by collecting results for the ES interpreted as a function of its level, the so-called ES curve. In particular, we state concrete (counter-)examples to illustrate the behavior of ES curves.
3Atomless ensures the existence of continuous random variables [17, Proposition A.31] in Section 5.

4 C. LAUDAGÉ & J. SASS
Lemma 2.4. Let X ∈ L1. The map (0, 1] → R, t 7→ t ESt(X) is concave and continuous.
Example A.1 in the appendix gives us a random variable X ∈ L1 such that (0, 1] → R, t 7→ ESt(X) is neither concave nor convex. Furthermore, it shows that ES curves are not necessarily strictly decreasing. Accordingly, assumptions guaranteeing this property are important. In this regard, the next result presents a slight refinement of the statement in Remark 2.3. For completeness, we include a proof of this tailored version, which will be used to establish Proposition 2.10 below.
Lemma 2.5. Let X ∈ L1 and α ∈ (0, 1]. Assume there exists γ ∈ [0, α) such that for all λ ∈ (γ, α) it holds that q+
X is not constant on (0, λ). Then, (γ, 1] → R, t 7→ ESt(X) is strictly decreasing.
As one of our main results, we characterize functions in E := {[0, 1] → R, p 7→ ESp(X) | X ∈ L1} by those functions which we can represent by an ES curve. It is a consequence of the fundamental theorem of calculus for the Lebesgue integral, see [28, Theorem 7.18]. We use it later in Example 3.5.
Theorem 2.6. Let F : (0, 1] → R. The following statements are equivalent:
(a) There exists X ∈ L1 such that for all t ∈ (0, 1] it holds that F (t) = t ESt(X). (b) It holds that lui↓m0 F (u) = 0 and F extended to [0, 1] is absolutely continuous and there exists a
Lebesgue null set A ⊆ [0, 1] such that the derivative −F ′(t) exists for all t ∈ [0, 1] \ A and it is increasing and right-continuous.
ES curves are decreasing, which would automatically imply, e.g., by [16, Theorem 3.23 (b)], that they are almost everywhere differentiable, without relying on the fundamental theorem of calculus. The decreasing behavior of ES curves allows us to invoke Theorem 2.6 to establish a key property of these curves.
Corollary 2.7. Let F : (0, 1] → R be a function as in Theorem 2.6 and set f (t) = F (t)/t for all t ∈ (0, 1]. Then, f is either strictly decreasing or there exists a ∈ (0, 1] such that f is constant on (0, a] and strictly decreasing on (a, 1].
For a twice differentiable function, we give a more concise sufficient condition that it can be represented as ES curve.
Corollary 2.8. Let f : (0, 1] → R be twice differentiable, decreasing and concave. Then there exists X ∈ L1 such that for all t ∈ (0, 1] it holds that f (t) = ESt(X).
The proof of Corollary 2.8 applies Theorem 2.6 by setting F (t) = tf (t). Concavity of f then ensures that t 7→ −F ′(t) = −f (t) − tf ′(t) is increasing. The following example states a function f , being twice differentiable and decreasing, but not concave, in such a way that (0, 1] → R, t 7→ −f (t)− tf ′(t) is not increasing. This means we cannot omit the assumption of concavity in Corollary 2.8.
Example 2.9. Let f : (0, 1] → R, t 7→ (1 − t)2. Then, for all t ∈ (0, 1] we have f ′(t) = 2t − 2
and f ′′(t) = 2. Hence, 2f ′(t) + tf ′′(t) = 6t − 4, which is strictly positive for all t ∈
(2
3,1
]
. So,
t 7→ −f (t) − tf ′(t) is decreasing on
(2
3,1
]
.
2.3. Results on PELVE curves. Parts of the case study in Section 5 relies on PELVE curves. They are used in [3] to calibrate distribution functions. This subsection summarizes theoretical properties of these curves, aiming to derive results for PELVE curves in combination with empirical distribution functions. To the best of our knowledge, these results are new.

PELVE FROM A REGULATORY PERSPECTIVE 5
We first state an equivalent condition for a PELVE curve to be continuous.
Proposition 2.10. Let α ∈ (0, 1] and X ∈ L1. The following statements are equivalent:
(a) The map f : (0, α) → [1, ∞], λ 7→ Πλ(X) is continuous and finite. (b) For all λ ∈ (0, α) it holds that E[−X] ≤ VaRλ(X) and q+
X is continuous on (0, α).
A consequence for specific distribution functions is the following:
Corollary 2.11. Let X ∈ L1 such that F X is a step function, e.g. an empirical distribution function. In addition, assume that there exists x ∈ R with F X (x) ∈ (0, 1).4 Then, the PELVE curve (0, 1) ∋ λ 7→ Πλ(X) is discontinuous.
Remark 2.12. The PELVE curves illustrated in Section 5 rely on empirical distribution functions. Hence, Corollary 2.11 tells us that they are discontinuous.
2.4. The regulator’s objective. As previously discussed, PELVE facilitates the analysis of the risk exposure of a single agent. We now aim to extend this concept by proposing methods that allow a regulator to determine an adequate ES level for an entire market, i.e., considering the payoffs of multiple insurers. In general, it is not possible to identify an ES level such that the capital reserve of each insurer remains unchanged. So, the challenge lies in quantifying an ES level in a fair and adeq-
uate manner. There is, of course, no unique way to achieve this. Our contribution consists in proposing and discussing several possible methods. First, we describe the situation of the regulator mathematically. To do so, for d ∈ N, we denote the linear space of all d-dimensional integrable random variables by L1
d(Ω, F , P ) or L1
d for short. Our market consists of n ∈ N agents. Agent i ∈ {1, . . . , n} faces an unknown future payoff Xi ∈ L1. For brevity, we write X = (X1, . . . , Xn)⊺, i.e., X is a random vector. Furthermore, we assume that the prevailing regulatory framework relies on the VaR at level λ ∈ (0, 1). The regulator aims to replace this VaR with an ES at level α ∈ (0, 1). For n = 1, the natural choice is α = Πλ(X1)λ, ensuring that the agent does not need to adjust its capital reserve. This is desirable because-
 the agent is neither allowed to reduce the capital reserve – which would increase the agent’s risk of insolvency – nor pushed to increase it, which could threaten financial stability, as the agent must cover a large capital requirement within a short period of time. The primary objective of this manuscript is to explore possible answers to the following question:
How should the regulator decide on α in the situation of n > 1 agents?
The subsequent section presents a range of quantitative methods as candidate solutions and analyses their properties in terms of existence, uniqueness, and continuity. Moreover, the advantages and disadvantages of these methods are examined, with a summary given in the subsequent Table 1.
3. Addressing the regulator’s problem
We now introduce the quantitative methods, motivated by the original concept of PELVE.
3.1. Representative agent and Average-PELVE. One possibility is to determine α via a single PELVE, e.g. by using a benchmark payoff Y and setting α = Πλ(Y )λ. For instance, if agent i is a representative agent on the market, then the regulator could set α = Πλ(Xi)λ. While easy to explain, this approach can lead to significant changes in the capital reserve of agent j ̸= i when the PELVE values of agents j and i differ considerably. Hence, agent j could feel discriminated. It is therefore more appr-
opriate to account for the situation of all agents, i.e., to determine α based on multiple PELVE values. The first possibility that we suggest is the intuitive method of a
4This assumption ensures that F X admits more than one jump.

6 C. LAUDAGÉ & J. SASS
weighted average of these PELVE values. Unequal weights can reflect different market participation among the agents.
Definition 3.1. The Average-PELVE (A-PELVE) ΠA
λ,ω : L1n → [1, λ−1] ∪ {∞} for λ ∈ (0, 1) and
ω ∈ [0, 1]n with ∑n
i=1 ωi = 1 is defined for all X ∈ L1n as ΠA
λ,ω(X) := ∑n
i=1 ωi Πλ(Xi).
Remark 3.2. The A-PELVE is finite if and only if all PELVE values are finite, i.e. for all i ∈ {1, . . . , n} it holds that Πλ(Xi) < ∞. Equivalent conditions for the latter are stated in [23, Proposition 1]. Next, assume that for all i ∈ {1, . . . , n}, the map q+
Xi is continuous at λ and there
exists a sequence (Xim)m ⊆ L1 such that Xim → Xi with respect to the L1-norm. By setting
Xm = (X1m, . . . , Xnm)⊺, we obtain ΠA
λ,ω(Xm) → ΠA
λ,ω(X) as m → ∞ by applying [23, Theorem 2].5
The A-PELVE takes the situation of all agents into account. However, as an arithmetic mean, the A-PELVE is not robust against outliers in the individual PELVE values. Furthermore, the capital reserve of a single agent can change drastically, if its PELVE is far away from the A-PELVE. Motivated by this last argument, we now propose two further methods.
3.2. Mean-Squared-Error and Worst-Case PELVE. The first method minimizes the squared distances of changes in the capital reserves. This refers to the (weighted) mean-squared-error (MSE).
Definition 3.3. A map ΠMSE
λ,ω : L1n → [1, λ−1] is called an MSE-PELVE for λ ∈ (0, 1) and ω ∈ [0, 1]n
with ∑n
i=1 ωi = 1, if for all X ∈ L1n the value ΠMSE
λ,ω (X) minimizes
[1, λ−1] → [0, ∞), c 7→
√ √ √ √
n
∑
i=1
ωi
(
EScλ(Xi) − VaRλ(Xi)
)2
. (3.1)
The map in (3.1) measures the weighted squared distance of ES and VaR values. The upcoming result shows that there always exists at least one MSE-PELVE.
Proposition 3.4. Given the situation in Definition 3.3, the map in (3.1) attains a minimum.
Uniqueness of the minimum is not guaranteed, even if [23, Assumption 1] holds for all X1, . . . , Xn, as the next example shows.
Example 3.5. We consider n = 2 in (3.1), i.e. two agents. Based on Theorem 2.6, we can choose a suitable function to describe the ES curve of a random variable. To do so, we choose functions f, g : (0, 1] → R, weights ω1, ω2 ∈ (0, 1) with ω1 + ω2 = 1 and a VaR level λ ∈ (0, 1). To be precise, we choose g(t) = 1 − t2. With tg∗ ∈ (0, 1), we denote the value satisfying g(tg∗) = g(λ) + λg′(t). Furthermore, given a constant c ∈ (0, ∞), let u ∈ (tg∗, 1] be a constant such that
c − ω2
ω1
(g(u) − g(λ) − λg′(λ))2 > 0.
The map g is twice differentiable, decreasing and concave. Hence, by Corollary 2.8 there exists an integrable random variable such that its ES curve is equal to g. To define the function f , we use the following auxiliary function, defined for a parameter d ∈ (0, 1) and for all t ∈ [tg∗, u]:
f ̃(t) = d +
√
c − ω2
ω1
(g(t) − g(λ) − λg′(λ))2.
5Li and Wang [23, Theorem 2] require that (Xm
i )m ⊆ L1 is uniformly integrable and converges in distribution to
Xi ∈ L1. By Vitali’s Convergence Theorem [6, Theorem 21.4] this holds iff Xm
i
L1
−−→ Xi, where Xi ∈ L1.

PELVE FROM A REGULATORY PERSPECTIVE 7
Figure 1. Solid lines in the left plot are the functions f and g. The red and green dashed lines are the a.e. defined maps t 7→ −f (t) − tf ′(t) and t 7→ −g(t) − tg′(t). The orange dotted vertical line is the chosen level λ = 1
3 . The gray vertical lines indicate the interval over which the objective of the MSE-PELVE remains constant; compare with the right-hand side.
Finally, we choose a value s ∈ (tg∗, u), a weight w ∈ (0, 1) and ε ∈ (0, 1) such that λ > ε. Then, we
set tmixed
λ = w(λ − ε) + (1 − w)s and a = tmixed
λ (f ̃′(s)tmixed
λ + f ̃(s) − f ̃′(s)s − d). Then, for all t ∈ (0, 1] we set
f (t) =

        
        
a
λ−ε + d, t ∈ (0, λ − ε),
a
t + d, t ∈ [λ − ε, tmixed
λ ),
f ̃′(s)t + f ̃(s) − f ̃′(s)s, t ∈ [tmixed
λ , s),
f ̃(t), t ∈ [s, u),
f ̃′(u)t + f ̃(u) − f ̃′(u)u, t ∈ [u, 1].
We use the following parameter values:
λ= 1
3 , c = 0.1, d = 0.8, ω1 = 1 − ω2 = 0.4, ε = 0.05, s = 0.66, u = 0.74, w = 0.25.
We illustrate the functions f and g by the solid lines in the left plot in Figure 1. The dashed lines represent the almost everywhere defined functions t 7→ −f (t) − tf ′(t) and t 7→ −g(t) − tg′(t), which are obviously non-decreasing. By definition of f , the corresponding a.e. defined derivative of −tf (t) is right-continuous. Furthermore, f (0) := lui↓m0 f (u) = a
λ−ε + d and in turn lti↓m0 tf (t) = 0. Also
f ′ exists a.e. and it is Lebesgue integrable such that f (t) = f (0) + ∫ t
0 f ′(v) dv, which is equivalent to f being absolutely continuous. This also shows that t 7→ tf (t) is absolutely continuous. Hence, all conditions in Theorem 2.6 are satisfied and hence, there exists an integrable random variable such that its ES curve is exactly given by f .6 In the right plot in Figure 1, we illustrate the following function:
h : (0, 1] → R, t 7→ ω1(f (t) − f (λ) − λf ′(λ))2 + ω2(g(t) − g(λ) − λg′(λ))2.
Note, the values f (λ) + λf ′(λ) and g(λ) + λg′(λ) are the VaR values with respect to the ES curves f and g. We see that function h has no unique minimum. It attains its minimum value all over the interval [s, u], represented by the vertical dashed lines.
6From Figure 1 it is also not difficult to deduce that Assumption 1 in Li and Wang [23] is satisfied.

8 C. LAUDAGÉ & J. SASS
Next, we develop a continuity result. To do so, we adopt the same assumptions as used in [23, Theorem 2]. In addition, we assume that in the limit, the MSE-PELVE is unique. For its proof, we denote by |.|d the Euclidean norm on Rd.
Theorem 3.6. Given the situation in Definition 3.3 and fix X ∈ L1n and a sequence (Xm)m ⊆ L1n. Assume the following:
(a) ∀i ∈ {1, . . . , n} let Xim
L1
−→ Xi as m → ∞ and let the map q+
Xi be continuous at λ; (b) The minimum of (3.1) regarding X is unique.
Then, it holds that
lim
m→∞ ΠMSE
λ,ω (Xm) = ΠMSE
λ,ω (X).
As for the A-PELVE, we obtain that the MSE-PELVE takes the situation of all agents into account. However, in contrast to the A-PELVE, it leads to smaller overall changes in the capital reserves. Individually, i.e., per agent, MSE- or A-PELVE can lead to the smallest change in the individual capital reserve. It depends on the relation to all other agents. For statements in this direction, we refer to the case study in Section 5. As a disadvantage, we can say that the objective in (3.1) is not robus-
t against outliers. Also, it does not differ between an increase or decrease in the capital reserve of an agent. Therefore, we also propose a method which leads for each agent to a decrease in the capital reserve. This can be interpreted as the best case for the insurers, since none of them needs to increase its reserve, but as the worst case for the regulator, as every insurer can reduce its reserve, making a future bankruptcy more likely. The latter motivates us to speak of a Worst-Case PELVE.
Definition 3.7. The Worst-Case PELVE (WC-PELVE) ΠWC
λ : L1n → [1, λ−1] ∪ {∞} for λ ∈ (0, 1) is defined for all X ∈ L1n as
ΠWC
λ (X) := inf{c ∈ [1, λ−1] | ∀i ∈ {1, . . . , n} : EScλ(Xi) ≤ VaRλ(Xi)}.
Lemma 3.8. In the situation of Definition 3.7, it holds for every X ∈ L1n that
ΠWC
λ (X) = max{Πλ(X1), . . . , Πλ(Xn)}. (3.2)
Remark 3.9. By Lemma 3.8 we see that the WC-PELVE exists iff every PELVE exists. In the same situation as in Remark 3.2, we obtain that ΠWC
λ (Xm) → ΠWC
λ (X) as m → ∞. Alternatively to the WC-PELVE one could require that the new ES level ensures an increase in the reserves of all insurers, which corresponds to the minimum of their individual PELVE values. However, this has the drawback that a substantial increase in the reserve is hard to achieve in practice.
The WC-PELVE considers the situations of all agents and distinguishes between an increase or decrease in the corresponding capital reserves in the sense that it results in smaller capital requirements for all agents. Such a decrease can also be associated with disadvantages, namely, for some agents we expect significant smaller capital reserves. The latter is undesirable from the regulator’s perspective, because it threatens the stability of the financial system. The latter motivates us to introdu-
ce a last method, a PELVE-version based on systemic risk measures.
3.3. Systemic PELVE. In this section, we present a method based on systemic risk before and after a transition from VaR to ES. To do so, let g be either given as the identity g(x) = x or as g(x) = max{0, x}. Then, for λ ∈ (0, 1) and X ∈ L1n we define
ΠSys
λ,g (X) := inf{c ∈ [1, λ−1] | ρEScλ,g(X) ≤ ρVaRλ,g(X)}, (3.3)

PELVE FROM A REGULATORY PERSPECTIVE 9
where ρESβ,g, respectively ρVaRβ,g, is a systemic risk measure based on ES, respectively VaR. There are different ways to specify these systemic risk measures. We use
ρν,g(X) := inf
{n
∑
i=1
g(mi)
∣ ∣ ∣ ∣ ∣
∀i ∈ {1, . . . , n}, mi ∈ R : ν(Xi + mi) ≤ 0
}
=
n
∑
i=1
g(ν(Xi)), (3.4)
where ν ∈ {ESβ, VaRβ}. Equation (3.4) is a systemic risk measure in the form of [7, Equation (2.13)]. We call the map in (3.3) a Systemic PELVE (Sys-PELVE). Furthermore, note that choosing g(x) = max{0, x} avoids cross-subsidization among agents, i.e., positive values cannot be compensated by negative ones.
Remark 3.10. By the same reasoning as in [23, Proposition 1], we have ΠSys
λ,g (X) < ∞ if and
only if ∑n
i=1 g(E[Xi]) ≤ ∑n
i=1 g(VaRλ(Xi)). Furthermore, if g(x) = x, then ΠSys
λ,g (X) < ∞ and p 7→ VaRp(Xi) not being constant on (0, λ] for all i ∈ {1, . . . , n} are sufficient for the uniqueness of a value c ∈ [1, λ−1] such that ∑n
i=1 EScλ(Xi) ≤ ∑n
i=1 VaRλ(Xi).
Similar to Theorem 3.6, we state a continuity property of Sys-PELVE.
Proposition 3.11. Let λ ∈ (0, 1), X ∈ L1n, (Xm)m ⊆ L1n and g is either given as g(x) = x or g(x) = max{x, 0}. Assume the following:
(a) ∀i ∈ {1, . . . , n} let Xim
L1
−→ Xi as m → ∞ and let the map q+
Xi be continuous at λ; (b) ∀i ∈ {1, . . . , n}, the map p 7→ VaRp(Xi) is not constant on (0, λ]; (c) It holds that ∑n
i=1 g(E[Xi]) < ∑n
i=1 g(VaRλ(Xi)).
Then, it holds that
lim
m→∞ ΠSys
λ,g (Xm) = ΠSys
λ,g (X).
Remark 3.12. Assumption (a) is the same as the one in Theorem 3.6. Assumptions (b) and (c) adapt Li and Wang [23, Assumption 1] to the case of the Sys-PELVE. They differ from assumption (b) in Theorem 3.6, but technically they fulfil the same purpose: Regarding X, guaranteeing a unique minimizer of the objective function (in case of the MSE-PELVE) or a unique value meeting the constraint (in case of the Sys-PELVE).
The systemic risk measures used in the Sys-PELVE are of relevance for the regulator, as they describe the overall situation of the financial system. In comparison to the MSE-PELVE it guarantees that the needed capital in the network of agents is reduced after the transition from VaR to ES. Nonetheless, since the systemic risk measures aggregate the VaR or ES values of all agents, it is possible that the capital reserve of individual agents increases after moving from VaR to ES. All discussed pros -
and cons of the presented methods are summarized in Table 1.
4. Common distributional assumptions
This section considers payoff vectors following specific multivariate distributions.
4.1. Multivariate elliptical distributions. We start by calculating the Multi-PELVE methods for a typical class of models often used in finance and insurance, namely elliptical distributions. They contain multivariate normal and multivariate t-distributions as special cases.
Definition 4.1. Assume a d-dimensional random vector X, a vector μ ∈ Rd, a positive semi-definite symmetric matrix Σ ∈ Rd×d and a map φ : [0, ∞) → R. If the characteristic function φX−μ of X −μ is of the form φX−μ(t) = φ(t⊺Σt), then X is elliptically distributed, denoted as X ∼ Ed(μ, Σ, φ).
We write Id for the d-dimensional identity matrix and denote its i-th column by ei.

10 C. LAUDAGÉ & J. SASS
Favorable features Unfavorable features
Πλ(Xi)
• readily understandable • easy to calculate • does not change the solvency probability of agent i • suitable for a homogeneous market of agents
• difficult to choose benchmark agent i in heterogeneous markets • huge differences in capital reserve for agent j ̸= i possible • agent j ̸= i might feel disregarded • does not differ between increase or decrease in capital reserve
ΠA
λ,ω (X )
• readily understandable • easy to calculate • considers all agents’ situations, including agents’ market shares ω • easy calculation
• huge differences in capital reserve, if agent i’s PELVE differs significantly from the mean • does not differ between increase or decrease in capital reserve • not robust against outliers
ΠMSE
λ,ω (X)
• considers all agents’ situations, including agents’ market shares ω • leads to smaller changes in the capital reserves over all agents than previous methods
• does not differ between increase or decrease in capital reserve • objective function is not robust against outliers
ΠWC
λ (X)
• considers all agents’ situations • differs between increase or decrease in capital reserve • positive from an agent’s perspective: results in a smaller capital reserve after the transition from VaR to ES
• can lead to a significant lower capital reserve for an agent, which is undesirable from the regulator’s perspective • increases the probability that at least one agent will become insolvent in the future
ΠSys
λ,g (X)
• considers all agents’ situations • based on systemic risk measures, relevant for a regulator • unlike MSE, guaranteeing that needed reserve in the network (sum of ES or VaR values) is reduced by moving from VaR to ES • g(x) = max{x, 0} prevents crosssubsidization between agents
• the constraint only works on the sum of capital reserves of all agents. Hence, it is possible that the capital reserve of a single agent increases after the transition • g(x) = x allows for crosssubsidization between agents
Table 1. Features of the suggested methods.
Remark 4.2. Let A ∈ Rd×d with Σ = AA⊺. If Σ is positive definite, then A can be chosen as the Cholesky decomposition of Σ. By [19, Lemma 3.1], for a random variable Y ∼ Ed(0, Id, φ) it holds
that X =d μ + AY .
The next result states that for elliptical distributions, in most of the cases, the Multi-PELVE methods simplify to a PELVE for a single elliptically distributed random variable.
Proposition 4.3. Let λ ∈ (0, 1) and ω ∈ [0, 1]n with ∑n
i=1 ωi = 1. Further, let X ∼ En(μ, Σ, φ) and Z ∼ E1(0, 1, φ). The following holds:
(i) For all i ∈ {1, . . . , n} we have Πλ(Xi) = Πλ(Z). (ii) We have ΠA
λ,ω(X) = ΠWC
λ (X) = ΠSys
λ,g (X) = Πλ(Z), where g(x) = x.

PELVE FROM A REGULATORY PERSPECTIVE 11
(iii) The following map is an MSE-PELVE:
ΠMSE
λ,ω (X) =



Πλ(Z), E[−Z] ≤ VaRλ(Z),
λ−1, otherwise.
(iv) For g(x) = max{0, x} we have ΠSys
λ,g (X) ≤ Πλ(Z). Further, if E[−Z] ≤ VaRλ(Z) and the
map (0, 1) → R, α 7→ ESα(Z) is strictly decreasing, then ΠSys
λ,g (X) = Πλ(Z) if and only if there
exists i ∈ {1, . . . , n} such that e⊺
i Σ ei > 0 and μi(e⊺
i Σ ei)− 1
2 ≤ VaRλ(Z).
For a multivariate normal distribution, it holds that φ(x) = e− 1
2 x. Hence, Πλ(Z) is independent of the mean vector and the covariance matrix. For the situation of a multivariate t-distribution note the following: Hult and Lindskog [19, Theorem 3.1] state that X =d μ + RAU , where R is a non-negative random variable independent of U . The latter is a rank(Σ)-dimensional random vector, which is uniformly distributed on the corresponding unit-sphere and A is an n × rank(Σ)matrix with AA⊺ = Σ. Now, X is multivariate t-distributed iff R2/n ∼ F (n, ν), where F (n, -
ν) is an F -distribution with n and ν degrees of freedom. So, Πλ(Z) only depends on the degrees of freedom of the multivariate t-distribution, hidden in the function φ. As a conclusion of Proposition 4.3, most of the suggested methods lead to the PELVE of a onedimensional elliptically distributed random variable. Only the Sys-PELVE can be strictly less than Πλ(Z). The following example illustrates this case. Here, a normal distribution with mean μ and variance σ2 is denoted by N(μ, σ2); the densit-
y and cumulative distribution function (CDF) of a standard normal random variable are denoted by φ and Φ, respectively.
Example 4.4. Let n = 1 and X ∼ N(μ, σ2). In particular, Z is assumed to be standard normally distributed. We choose the values μ = 0.75 and σ = 0.4, as well as the level λ = 0.05. For this specification it holds that VaRλ(X) < 0. Thus, to calculate ΠSys
λ,g (X) for g(x) = max{0, x} we
have to find c⋆ such that ESc⋆λ(Z) = μ
σ . The value EScλ(Z) = φ(Φ−1(cλ))
cλ as a function of c is illustrated in Figure 2. Moreover, the Sys-PELVE is indicated by the solid blue line, while the PELVE Πλ(X) = Πλ(Z) is indicated by the solid red line. Hence, we get ΠSys
λ,g (X) < Πλ(Z).
Figure 2. Graph of the function c 7→ φ(Φ−1(cλ))
cλ , where λ = 0.05. The solid blue line is ΠSys
λ,g (X) for X ∼ N(μ, σ) and g(x) = max{0, x}, where μ = 0.75 and σ = 0.4. The blue dashed line refers to the value μ
σ . The red solid line is Πλ(X), while the red dashed line refers to the value −Φ−1(λ).

12 C. LAUDAGÉ & J. SASS
4.2. Multivariate regularly varying models. Next, we consider the heavy tailed case via multivariate regularly varying (MVR) models. For this, we denote the standard L1
d-norm by ∥.∥L1
d.
The boundary of a set A ⊆ Rd with respect to the Euclidean norm is written as ∂A.
Definition 4.5. A d-dimensional random vector X has a multivariate regularly varying right-tail, if there exists γ > 0 and a Borel probability measure Ψ on the unit sphere Sd := {s ∈ Rd | |s|d = 1} such that for any t > 0 and any Borel set S ⊆ Sd with Ψ(∂S) = 0 it holds that
xli→m∞
P
(
∥X ∥L1
d > tx, X
∥X ∥L1
d
∈S
)
P (∥X∥L1
d > x) = t−γΨ(S).
In this situation, γ is called the tail index of X and Ψ the spectral measure of X. The set of all d-dimensional random vectors with tail index γ and spectral measure Ψ is denoted by MVRd
γ (Ψ). A one-dimensional random variable X has a regularly varying right-tail with tail index γ > 0, if for all t > 0 it holds that
xli→m∞
P (X > tx)
P (X > x) = t−γ.
We write X ∈ RVγ.
We study the asymptotic behavior under an MVR model as the VaR level tends to zero. This aligns with the considerations for the classical PELVE in Li and Wang [23], and can be seen as the counterpart of Proposition 4.3 in the presence of heavy tails.
Theorem 4.6. Let λ ∈ (0, 1) and ω ∈ [0, 1]n with ∑n
i=1 ωi = 1. Let −X ∈ MVRn
γ (Ψ) with γ > 1 and Ψ satisfies Ψ(Sn ∩ (0, ∞)n) > 0 (non-degeneracy condition). The following holds:
(i) For all i ∈ {1, . . . , n} we have lλi↓m0 Πλ(Xi) =
(γ
γ−1
)γ .
(ii) We have
lλi↓m0 ΠA
λ,ω(X) = lλi↓m0 ΠWC
λ (X) = lλi↓m0 ΠSys
λ,g (X) =
(γ
γ−1
)γ
,
where g(x) = x or g(x) = max{0, x}.
(iii) For each MSE-PELVE we have lλi↓m0 ΠMSE
λ,ω (X) =
(γ
γ−1
)γ .
The assumption γ > 1 ensures the application of [11, Theorem A3.6 (b)]. For n = 1, this is equivalent to −X being in the maximum domain of attraction of the Fréchet distribution with parameter γ > 1, see [11, Theorem 3.3.7]. For instance, a Pareto distribution with shape parameter γ > 1, i.e. finite mean, lies in this class.
The limits in Theorem 4.6, given by
(γ
γ−1
)γ, are all equal. This implies that, in the limiting
case, the choice of the Multi-PELVE method is insignificant. Moreover, the value
(γ
γ−1
)γ is equal
to the PELVE of a Pareto distributed random variable with parameter γ > 1. As γ → ∞ this value
converges to Euler’s number e ≈ 2.718. For γ > 1,
(γ
γ−1
)γ exceeds e. Hence, the observation in [23]
– that e separates heavy- from light-tailed phenomena – remains valid when considering the payoffs of multiple agents.
5. Numerical case study
We consider six insurers as agents, where the random vector X represents their future equity capitals. Future balance sheets are modeled following Laudagé, Sass, and Wenzel [22]. Unlike their framework, assets consist of a constant and a payoff from a Black-Scholes model based on a constant

PELVE FROM A REGULATORY PERSPECTIVE 13
Insurer i ECi Ai Li Si xi0 Si/xi0 πi1 πi2 1 2567 290685 288118 136096 191434 0.7109 0.6043 0.1066 2 919 57851 56932 10646 51572 0.2064 0.1755 0.0310 3 743 41133 40390 11870 36068 0.3291 0.2797 0.0494 4 1207 83914 82707 25033 62545 0.4002 0.3402 0.0600 5 383 26179 25796 9747 17655 0.5521 0.4693 0.0828 6 516 18603 18087 12935 15695 0.8241 0.7005 0.1236
Table 2. Equity capital (ECi), assets (Ai), liquid assets (xi
0) and stocks (Si) of six insurers from 2023 and the resulting portfolio processes calculated as πi
1 = 0.85 · S/xi
0 and πi
2 = 0.15 · S/xi
0, as well as, the liabilities (Li) given by Li = Ai − ECi.
portfolio process instead of a buy-and-hold strategy. Liabilities follow a gamma distribution, as in [22], or heavier-tailed lognormal or generalized Pareto distributions (GPDs).
5.1. Chosen distributions. We model the future equity capital of insurer i as Xi = Yi − Zi, where Yi and Zi denote the insurer’s assets and liabilities, respectively. Liquid assets are modeled as payoffs steaming from a Black-Scholes market, while the non-liquid assets are assumed to be constant (e.g., real estates). Liabilities follow distributions commonly applied in non-life insurance – gamma, lognormal, and GPD – for total claim amounts. For the liquid assets, each insurer invests in a common -
stock and an idiosyncratic stock. Accordingly, for each insurer an own Black-Scholes model based on these two stocks is applied. We assume that an insurer invests a predefined fraction of the total wealth into the stocks, i.e., we restrict attention to constant portfolio processes. Note that the optimal solution of Merton’s portfolio problem [24] is a constant portfolio process. A constant portfolio process is a two-dimensional vector in R2, i.e. πi = (πi1, πi2)⊺ ∈ R2, where πji is the fraction of-
 initial wealth invested in stock j. Let the initial liquid asset value be xi0 > 0 and assume that the investment horizon is one year. For each insurer, we need a two-dimensional standard Brownian motion Wti = (Bt, Zti)⊺, where Bt and Zti are the Brownian motions for the common stock and the idiosyncratic stock of insurer i, respectively. The common interest rate is r ∈ R, the drift vector is bi = (b, μi)⊺ and the covariance matrix is Σi = diag(σ, σi). Then, the wealth process of insurer i at time-
 t ∈ [0, 1] is
X xi
0 ,π i
t = xi
0 exp
((
(πi)⊺(bi − r1) + r − ∥(πi)⊺Σi∥2
2
)
t + (πi)⊺ΣiW i
t
)
,
where 1 = (1 . . . 1)⊺. For simplicity, we choose the same parameter values for all insurers:
r = 0.01, bi = (0.04, 0.06)⊺, Σi =
(
0.2 0 0 0.4
)
.
The portfolio processes are based on the proportions of stocks to liquid assets in the balance sheets of six life insurance companies, see Table 2.7 We emphasize that the upcoming modeling assumptions are hypothetical; hence, our results cannot be used to draw conclusions about specific companies. We used their balance sheet values only to ensure realistic orders of magnitude. We model the future liabilities Zi of insurer i in two ways. First, motivated by the approximation of total claim amounts -
for non-life portfolios with gamma distributions [29, Chapter 4], we set Zi ∼ Γ(ki, si), where Γ(k, s) denotes the gamma distribution with mean ks and variance ks2, i.e., k is the shape and s the scale parameter. We refer to this case as model 1. Note that the gamma distribution is light-tailed [11, Chapter 3]. In model 2, we test the impact of more harmful (heavy-tailed) distributions by replacing the liability distributions for some insurers as follows: for insurers 2 and 4, we set Zi ∼ LN(μi, σ-
i), where LN(μ, σ) denotes the lognormal distribution with log-mean μ and log-standard deviation σ. For insurers 1 and 6, we set Zi ∼
7These companies are: Allianz Lebensversicherung AG, Debeka Lebensversicherung AG, ERGO Lebensversicherung AG, R+V Lebensversicherung AG, AXA Lebensversicherung AG, Gothaer Lebensversicherung AG.

14 C. LAUDAGÉ & J. SASS
Insurer i ki si μi σi ξi νi βi 1 282.93 1018.34 - - 0.4185 281203 4021 2 729.01 78.09 10.94 0.1473 - - 3 6996.42 5.77 - - - - 4 64.04 1291.55 11.21 0.4722 - - 5 1083.58 23.81 - - - - 6 2830.38 6.39 - - 0.0363 9238 213
Table 3. Parameters for the liability distributions in model 1 (ki and si) and model 2 (values highlighted in bold). Here, νi is given as 97.6% of the liability value of insurer i from Table 2.
Figure 3. Boxplot of simulated equity capitals of six insurers. The left-hand side is a zoomed in version of the right-hand side.
GPD(ξi, νi, βi), where GPD(ξ, ν, β) denotes the GPD with shape ξ, location ν and scale β. For insurers 3 and 5 we apply the same gamma distributions as before. The parameters of the liability distributions are estimated using the method of moments applied to the annual liabilities from 2019 to 2023.8 For the method of moments, we use the 2023 liability value as mean, see again Table 2. The estimated parameters are reported in Table 3. We estimate the distribution of Xi via 1 000 000 Monte-Carlo si-
mulations. Figure 3 shows the corresponding boxplots for each insurer. In model 2, insurer 1 exhibits large negative outliers due to a GPD with ξ1 = 0.4185, whereas insurer’s 6 GPD, with the much smaller shape parameter ξ6 = 0.0363 (lighter tail), shifts the box upward without producing extreme outliers. For insurers 2 and 4, perturbed with lognormal distributions, model 2 gives larger negative outliers and wider boxes. Figure 4 illustrates the equity capital distributions for insurers 1, 2, 4 and-
 6 – the ones for which the liability distributions differ between model 1 and 2. To analyse the situation of insurer i, we use its PELVE curve, defined as: (0, 1) ∋ λ 7→ Πλ(Xi). Note, a PELVE curve does not need to be monotone, see [3, Example 4]. Moreover, we present corresponding PELVE curves for our Multi-PELVE methods. We use the following specifications: For the A-PELVE and the MSE-PELVE we test two different weighting vectors ω. For both, we use equal weights, i.e., ωi = 1
6 for all i. For the A-PELVE, alternative weights are based on each
8For the fifth insurer, we use liabilities from 2018 to 2022 due to an excessive drop in the liabilities from 2022 to 2023, which would distort the results of our analysis.

PELVE FROM A REGULATORY PERSPECTIVE 15
(a) Insurer 1 (b) Insurer 2
(c) Insurer 4 (d) Insurer 6
Figure 4. Histograms of the simulated equity capitals of insurers 1, 2, 4 and 6.
insurer’s assets relative to the total assets of all insurers, i.e., ωi = Ai/
(
∑6
i=1 Ai
)
. For the MSE
PELVE, weights are set to be inversely proportional to the asset volumes of the insurers. Indeed,
with the help of ω ̃i = Ai/
(
∑6
i=1 Ai
)
we set ωi = (1/ω ̃i)/(∑6
i=1 1/ω ̃i).
In model 2, the latter choice prevents smaller insurers from being disadvantaged in favor of a single large insurer. It considers that the same change in the capital reserve due to a shift from VaR to ES can be more easily compensated by a large insurer than by a small one. The exact values of ωi are given in Table 4. For simplicity, we speak in case of (un-)equal weights of (weighted) A-PELVE and (weighted) MSE-PELVE. For the Sys-PELVE, we set g(x) = max{x, 0}. However, this does not affect the r-
esults, as both the VaR and the optimal ES values are positive.
5.2. Results: Model 1. On the left-hand side (LHS) of Figure 5, each insurer’s PELVE curve is plotted on a grid of (0, 0.1), with interpolation between points. Since the underlying distributions come from Monte-Carlo simulations, Corollary 2.11 implies that the curves are discontinuous.

16 C. LAUDAGÉ & J. SASS
123456 A-PELVE 0.5608 0.1116 0.0794 0.1619 0.0505 0.0359 MSE-PELVE 0.0231 0.1161 0.1633 0.0800 0.2565 0.3610
Table 4. Weights ωi = Ai/ (∑6
i=1 Ai
) for A-PELVE and ωi = (1/ω ̃i)/(∑6
i=1 1/ω ̃i) with ω ̃i =
Ai/ (∑6
i=1 Ai
) for MSE-PELVE.
(a) PELVE curves for individual insurers (b) Multi-PELVE methods
Figure 5. PELVE curves for individual insurers and corresponding curves for Multi-PELVE methods for different VaR levels in model 1.
All curves lie below e ≈ 2.718, reflecting the light-tailed behavior of the underlying distributions, recall the discussion in Section 4.2. This is expected, as liabilities are modeled as gamma distributions, which are light-tailed. All PELVE curves admit the same shape, which looks roughly like a linear decrease. In addition, all PELVE curves are close to each other. The largest difference, about 0.1, occurs between insurers 4 and 6. As we will see, these findings change under model 2, where larg-
er differences between the PELVE curves are observed, cf. Figure 8 below. The similarity of the PELVE curves means that also the Multi-PELVE curves are close to each other, see the right-hand side (RHS) in Figure 5. Only the WC-PELVE is slightly larger, as expected from Lemma 3.8, since it is equal to the maximum of the individual PELVE values. Beside WCPELVE, the largest values occur for the weighted MSE-PELVE. The smallest values occur for the A-PELVE. Notably, the weighted A-PELVE exceeds the A-
-PELVE, as the latter is often reduced by the PELVE of insurer 6, which is compensated in the weighted case by ω6 = 0.0359, cf. Table 4. Next, in Figure 6, we plot, for each ΠV
λ ∈ {ΠA
λ,ω, ΠWC
λ , ΠMSE
λ,ω , ΠSys
λ,g },
λ 7→
n
∑
i=1
(
ESΠV
λ (X)λ(Xi) − VaRλ(Xi)
)
, λ 7→
n
∑
i=1
∣
∣
∣ ESΠV
λ (X)λ(Xi) − VaRλ(Xi)
∣
∣
∣,
where these maps are displayed on the LHS and the RHS of Figure 6, respectively. They are statistics of the overall change in the capital reserves of the six insurers when VaR is replaced by ES. On the LHS, it is not a surprise that the Sys-PELVE yields a constant zero line, as it satisfies
n
∑
i=1
(
max
{
ESΠSys
λ,g (X)λ(Xi), 0
}
− max{VaRλ(Xi), 0}
)
= 0,

PELVE FROM A REGULATORY PERSPECTIVE 17
(a) Total change in sum of reserves (b) Sum of absolute differences in reserves
Figure 6. Total change in sum of capital reserves and sum of absolute differences in the capital reserves of all insurers under model 1.
and thus, if all VaR and ES values are positive, the plotted key figure is zero. In contrast, on the RHS, the MSE-PELVE and the (weighted) A-PELVE outperform the Sys-PELVE, indicating that, on the LHS, positive and negative changes in individual insurers’ capital reserves offset each other. In both plots, the weighted A-PELVE and the MSE-PELVE yield similar values, as the MSEPELVE is mainly driven by large ES-VaR differences, which typically occur for insurers with substantial equity capital, such-
 as insurer 1. Likewise, the weighted A-PELVE is strongly influenced by insurer 1 through the weight ω1 = 0.5608. They outperform the A-PELVE on the LHS (where the A-PELVE is less affected by insurer 1), but they perform slightly worse on the RHS, since MSE minimization is not optimal in minimizing absolute mean error in general. Another observation is that only the weighted MSE-PELVE and the WC-PELVE lead to an overall reduction in capital reserves, as shown by the negative values on the LHS, whi-
le on the RHS they exhibit the largest absolute deviations. Nevertheless, differences among the (weighted) A-PELVE, (weighted) MSE-PELVE, and Sys-PELVE are negligible relative to the total equity of 6335 (Table 2); for instance, the A-PELVE fluctuates around 100 on the LHS (1.6% relative to 6335), and the maximum difference on the RHS is about 50 (0.8% relative to 6335). Figure 7 illustrates the relative change in each insurer’s capital reserves using the WC-PELVE (LHS) or MSE-PELVE (RHS), i.e., f-
or ΠV
λ ∈ {ΠWC
λ , ΠMSE
λ,ω } and insurer i ∈ {1, . . . , 6} it is the map
λ 7→
ESΠV
λ (X)λ(Xi) − VaRλ(Xi)
VaRλ(Xi) .
For the WC-PELVE, the new ES level is given by the PELVE curve of insurer 4, since it is the maximum among all, cf. Figure 5. This results in relative reductions of the capital reserves for the other insurers; for instance, for insurer 6 we observe reductions below −2%. Allowing all insurers to reduce reserves may threaten the market stability and conflict with regulatory interests. In contrast, the MSE-PELVE accounts for all six insurers, yielding positive relative changes for insurers 2 and 4. T-
he MSE-PELVE closely follows the PELVE curve of insurer 1, so the relative changes for insurer 1 are near zero. With its large equity capital and asset amount, insurer 1 acts as a market leader. However, small relative changes for the market leader under the MSE-PELVE are not a common feature, as we will see for model 2 in the next subsection.

18 C. LAUDAGÉ & J. SASS
(a) WC-PELVE (b) MSE-PELVE
Figure 7. Changes in the capital reserve of the insurers under model 1, if they use the new ES level stemming from the WC-PELVE or the MSE-PELVE.
(a) PELVE curves for individual insurers (b) Multi-PELVE methods
Figure 8. PELVE curves for individual insurers and corresponding curves for Multi-PELVE methods for different VaR levels in model 2.
Before we continue with model 2, let us conclude: For model 1, where all insurers’ distributions are of the same type (shifted lognormal minus gamma), all Multi-PELVE methods – except the WCPELVE – yield similar results. This is favorable for the regulator, as the choice of the Multi-PELVE method is practically inconsequential.
5.3. Results: Model 2. In Figure 8, we illustrate the PELVE curves for model 2. In contrast to model 1, the PELVE curves of insurers 1, 2 and 4 admit significantly larger values. In particular, the GPD distribution of insurer 1 leads to PELVE values exceeding 4 at small levels. Although insurer 6’s distribution is also GPD-based, its small shape parameter (ξ6 = 0.0363) produces a tail that is not heavy enough to surpass the values observed in model 1.

PELVE FROM A REGULATORY PERSPECTIVE 19
The values of our Multi-PELVE methods differ substantially from those for model 1 (cf. RHS in Figure 8), making the choice of the method important: (1) Except for the WC-PELVE, the weighted A-PELVE is quite large across most VaR levels. Only above 7.5% do the (weighted) MSE-PELVE and Sys-PELVE slightly exceed it. (2) The A-PELVE is significantly smaller than the other Multi-PELVE versions for all VaR levels. (3) The weighted MSE-PELVE lies between the A-PELVE and the MSE-PELVE. (4) Sys- and MSE-PE-
LVE are comparable. We elaborate on the reasons for these effects. For (1), the weighted A-PELVE assigns a large weight to insurer 1, bringing it closer to the WC-PELVE. Regarding (2), the A-PELVE is smaller than its weighted version due to insurer 1’s influence as a market leader. This influence is negligible for the weighted MSE-PELVE, because the weight for insurer 1 is small. This also explains, why the MSE-PELVE lies above its weighted counterpart, regarding (3). Only for higher levels they a-
re close, mirroring the decrease in insurer 1’s PELVE curve. For (4), the similarity between the Sys- and MSE-PELVE is surprising, given their apparently different methodologies. However, given that ES and VaR values are positive, the Sys-PELVE is based on the sum of ES values minus VaR
values, i.e., it seeks the minimal c subject to 1
6
∑6
i=1
(
EScλ(Xi) − VaRλ(Xi)
)
≤ 0, where the LHS
is small when the ES-VaR difference for insurer 1 is small. On the other hand, the MSE-PELVE is also based on (squared) ES-VaR differences. Furthermore, both Sys- and MSE-PELVE use equal weights, namely 1
6 , so the importance of reducing the ES-VaR difference for an individual insurer is the same, explaining their similarity. With the help of Figure 9, we analyse the overall change in capital reserves. As for model 1, the Sys-PELVE is optimal for the total change in the sum of reserves (LHS). Considering the LHS, the A-PELVE and WC-PELVE lead to extreme changes in the overall reserves. The A-PELVE requires a substantial increase in the overall capital reserves, meaning insurers must provide a larg-
e amount of additional capital immediately, questioning its feasibility. In contrast, the WC-PELVE allows for a huge overall decrease in the capital reserves, which is undesirable for the regulator and potentially dangerous for the stability of the market. The remaining Multi-PELVE methods are of similar magnitude for levels above 5%; below 5%, the Sys- and MSE-PELVE outperform the weighted A-PELVE and weighted MSE-PELVE. So far, the Sys- and MSE-PELVE seem to be a good choice. However, the RHS in-
 Figure 9 shows that they are not optimal for absolute changes in the capital reserves. Surprisingly, at small levels, the A-PELVE yields the smallest values. Compared to the LHS, where the MSE-PELVE is near zero – indicating offsetting increases and decreases in insurers’ reserves – the A-PELVE results in smaller overall capital flows, with a tendency toward large reserve increases for some insurers, cf. Figure 10 (A) below. However, beyond the 2.5% level on the RHS of Figure 9, the A-PELVE remai-
ns nearly constant. At these levels, both LHS and RHS show a clear preference for the Sysand the (weighted) MSE-PELVE, which remain (nearly) optimal across VaR levels. Regarding the surprising A-PELVE graph, consider the relative changes in insurers’ reserves; Figure 10. In plot (A) – the A-PELVE case – the decrease for insurer 1 is compensated by an increase for insurer 4. Comparing the actual equity values from Table 2, insurer 4 has the second-largest equity (19% market share) and insurer 1 has-
 a market participation of 40%. Hence, the decrease in the curve of insurer 1 is partly compensated by the increase in the curve of insurer 4. Furthermore, the curves for insurers 2, 3, 5 and 6 are closer to zero than in plots (B), (C) and (D). Hence, for these insurers, the A-PELVE leads to smaller relative changes in the capital reserve than one of the other Multi-PELVE methods. For insurers 2, 3 and 5, the MSE-PELVE and the weighted MSE-PELVE are similar. Only for small levels, the weighted MSE-
-PELVE tends to be closer to the A-PELVE. The largest relative deviations at small levels are observed for the weighted A-PELVE, due to the strong influence of insurer 1 (ω1 = 0.5608). Consequently, the weighted A-PELVE puts the focus on insurer 1, also visible by the minimum relative changes for this insurer in Figure 10. Nevertheless, this prioritization of insurer 1 comes at the expense of the other insurers, explaining their large deviations from zero in plot (B). In contrast, plots (A) and (D-
) show the largest deviations

20 C. LAUDAGÉ & J. SASS
(a) Total change in sum of reserves (b) Sum of absolute differences in reserves
Figure 9. Total change in sum of capital reserves and sum of absolute differences in the capital reserves of all insurers under model 2.
for insurer 1. For the weighted MSE-PELVE (plot (D)), this is due to the small weight ω1 = 0.0231, producing the opposite effect than before, i.e., neglecting insurer 1. In other words, the capital reserves of the remaining insurers are not artificially reduced by insurer 1’s financial distress, as modeled via the GPD. So, the A-PELVE and weighted MSE-PELVE are preferable, as they require insurer 1 to increase reserves for its more riskier tail, rather than benefiting at the expense of the others,-
 as it is the case with the weighted A-PELVE and MSE-PELVE.
The analysis of model 2 can be concluded by two main observations: (1) Considering overall capital changes, the Sys- and MSE-PELVE perform well. (2) Minimizing statistics for overall capital changes, as in case of the MSE-PELVE, favors insurers with heavy-tailed risk profiles at the expense of others. This effect is less pronounced for the A-PELVE and the weighted MSE-PELVE. Given its strong overall performance, the weighted MSE-PELVE is recommended by the authors for model 2.
6. Conclusion and outlook
6.1. Conclusion. We have introduced PELVE-inspired methods to determine an appropriate ES level for the transition from VaR to ES. Unlike the original PELVE, our Multi-PELVE methods account for multiple insurers. Under suitable conditions, most of them yield unique solutions. For the MSE-PELVE, we provide a comprehensive example showing non-uniqueness in general. Continuity results are available for all methods. For elliptically distributed payoffs, most Multi-PELVE methods reduce to the PELVE of -
a one-dimensional elliptically distributed random variable. For multivariate regularly varying distributions, all methods converge to the PELVE of a Pareto distribution. As a by-product, we obtain that PELVE curves are discontinuous for empirical distribution functions and discuss several characterizations of ES curves. In a case study where all equity capitals follow the same distribution family, the Multi-PELVE methods – except the WC-PELVE – closely match the PELVE of the individual insurers. S-
o, moving from VaR to ES does not substantially change reserves, which is convenient for a regulator, since the ES level is independent of the chosen Multi-PELVE method. This changes drastically, if equity distributions come from different distribution families. In our case, one insurer acts as a market leader with heavy-tailed distribution. The smallest overall deviations of the reserves are obtained

PELVE FROM A REGULATORY PERSPECTIVE 21
(a) A-PELVE (b) Weighted A-PELVE
(c) MSE-PELVE (d) Weighted MSE-PELVE
Figure 10. Changes in the capital reserve of the insurers under model 2, if they use the new ES level stemming from (weighted) A-PELVE or (weighted) MSE-PELVE.
by the Sys- and the (weighted) MSE-PELVE. Unlike A-PELVE and WC-PELVE, the weighted MSE-PELVE does not prioritize the market leader at the expense of the other insurers. Thus, in this situation, the weighted MSE-PELVE seems to be a fair choice to determine a new ES level.
6.2. Outlook. Considering multivariate extensions of PELVE opens an unexpectedly rich landscape of future research directions, such as: (1) Testing the Multi-PELVE methods using a more advanced balance sheet model, like e.g., the one in [10]. (2) Developing additional PELVE variants to address unresolved and undesirable effects, such as robustified versions. (3) Accounting for insurers’ reactions, for instance, portfolio restructuring after a transition from VaR to ES, motivated by the considerati-
ons in [13].

22 C. LAUDAGÉ & J. SASS
Declarations
Competing interests: The authors have no competing interests to declare that are relevant to the content of this article.
Data availability: The balance sheet figures were taken from the official reports of the corresponding insurance companies. Apart from these publicly available numbers, no additional data were used in this contribution; simulated numbers are considered for illustrative purposes only.
References
[1] C. D. Aliprantis and K. C. Border (2006). Infinite Dimensional Analysis: A Hitchhiker’s Guide, Springer, Berlin. [2] P. Artzner et al. (1999). Coherent measures of risk. Mathematical Finance, 9 (3): 203–228. [3] H. Assa, L. Lin, and R. Wang (2024). Calibrating distribution models from PELVE. North American Actuarial Journal, 28 (2): 373–406.
[4] M. Barczy, F. K. Nedényi, and L. Sütő (2023). Probability equivalent level of Value at Risk and higher-order Expected Shortfalls. Insurance: Mathematics and Economics, 108: 107–128. [5] B. Basrak, R. A. Davis, and T. Mikosch (2002). A characterization of multivariate regular variation. The Annals of Applied Probability, 12 (3): 908–920.
[6] H. Bauer (2001). Measure and Integration Theory, Walter de Gruyter, Berlin. [7] F. Biagini et al. (2019). A unified approach to systemic risk measures via acceptance sets. Mathematical Finance, 29 (1): 329–367.
[8] N. H. Bingham, C. M. Goldie, and J. L. Teugels (1987). Regular Variation, Cambridge University Press, Cambridge. [9] T. J. Boonen (2017). Solvency II solvency capital requirement for life insurance companies based on expected shortfall. European Actuarial Journal, 7 (2): 405–434. [10] M. Diehl et al. (2023). Long-term stability of a life insurer’s balance sheet. European Actuarial Journal, 13 (1): 147–182. [11] P. Embrechts, C. Klüppelberg, and T. Mikosch (1997). Modelling Extremal Events, Spr-
inger, Berlin. [12] P. Embrechts, A. McNeil, and R. Frey (2015). Quantitative Risk Management, Princeton University Press, Princeton. [13] P. Embrechts, A. Schied, and R. Wang (2022). Robustness in the optimization of risk measures. Operations Research, 70 (1): 95–110.
[14] P. Embrechts et al. (2014). An academic response to Basel 3.5. Risks, 2 (1): 25–48. [15] A. M. Fiori and E. Rosazza Gianin (2023). Generalized PELVE and applications to risk measures. European Actuarial Journal, 13 (1): 307–339. [16] G. B. Folland (2013). Real Analysis: Modern Techniques and Their Applications, John Wiley & Sons, New York.
[17] H. Föllmer and A. Schied (2016). Stochastic Finance: An Introduction in Discrete Time, De Gruyter, Berlin. [18] X. Han, L. Lin, and R. Wang (2023). Diversification quotients based on VaR and ES. Insurance: Mathematics and Economics, 113: 185–197.
[19] H. Hult and F. Lindskog (2002). Multivariate extremes, aggregation and dependence in elliptical distributions. Advances in Applied Probability, 34 (3): 587–608. [20] P. Koch-Medina and C. Munari (2016). Unexpected shortfalls of Expected Shortfall: Extreme default profiles and regulatory arbitrage. Journal of Banking & Finance, 62: 141–151. [21] V. Krätschmer, A. Schied, and H. Zähle (2014). Comparative and qualitative robustness for law-invariant risk measures. Finance and Stochastics, 18 (2)-
: 271–295. [22] C. Laudagé, J. Sass, and J. Wenzel (2022). Combining multi-asset and intrinsic risk measures. Insurance: Mathematics and Economics, 106: 254–269.

PELVE FROM A REGULATORY PERSPECTIVE 23
[23] H. Li and R. Wang (2023). PELVE: Probability Equivalent Level of VaR and ES. Journal of Econometrics, 234 (1): 353–370. [24] R. C. Merton (1971). Optimum consumption and portfolio rules in a continuous-time model. Journal of Economic Theory, 3 (4): 373–413.
[25] P. Ortega-Jiménez et al. (2024). Probability equivalent level for CoVaR and VaR. Insurance: Mathematics and Economics, 115: 22–35.
[26] E. Rroji. Risk attribution and semi-heavy tailed distributions. PhD thesis. University of Milano-Bicocca, 2013. [27] W. Rudin (1976). Principles of Mathematical Analysis, McGraw-Hill, New York. [28] W. Rudin (1987). Real and Complex Analysis, McGraw-Hill, New York. [29] M. V. Wüthrich (2024). Non-Life Insurance: Mathematics & Statistics. SSRN Scholarly Paper.
Appendix A. Proofs accompanying Section 2.2
Proof of Lemma 2.4: Concavity follows since the function h : (0, 1] ∋ t 7→ −t ESt(X) is a restriction of the Fenchel-Legendre transformation of the function g(x) := E[(x−X)+] (with domain R), see [17, Lemma A.26]. Then, g ̸≡ ∞ implies that h is convex (and lower semicontinuous). Continuity of h is a consequence of dominated convergence. □
Example A.1. Consider the random variable X with cumulative distribution function:
FX (x) =
3
∑
i=1
pi1[xi,∞)(x),
by choosing the concrete values xi = i and pi = 3−1 for all i ∈ {1, 2, 3}, we obtain:
f (t) := ESt(X) =

   
   
0, t ∈
(
0, 1
3
]
,
1
3t − 1, t ∈
(1
3, 2
3
]
,
−2 + 1
t, t ∈
(2
3,1
]
.
Note, f is differentiable on (0, 1] \
{1
3, 2
3
}
and it holds that
f ′(t) =

   
   
0, t ∈
(
0, 1
3
)
,
−1
3t2 , t ∈
(1
3, 2
3
)
,
−1
t2 , t ∈
(2
3,1
]
,
f ′′(t) =

   
   
0, t ∈
(
0, 1
3
)
,
2
3t3 , t ∈
(1
3, 2
3
)
,
2
t3 , t ∈
(2
3,1
]
.
This shows that f is strictly convex on
(1
3,1
]
\
{2
3
}
. Furthermore, the limits of the left and right
derivative of f in 1
3 are
lim
t↑ 1
3
f ′(t) = 0, lim
t↓ 1
3
f ′(t) = −3.
This shows that f is not locally convex in 1
3.
Proof of Lemma 2.5: Assume β, κ ∈ (γ, 1] with κ < β. Then we obtain:
ESβ(X) = 1
β
β
∫
0
VaRu(X) du = κ
β ESκ(X) + β − κ
β

 
1
β−κ
β
∫
κ
VaRu(X) du

 
≤κ
β ESκ(X) + β − κ
β VaRκ(X)
<κ
β ESκ(X) + β − κ
β ESκ(X) = ESκ(X).

24 C. LAUDAGÉ & J. SASS
The strict inequality is obtained as follows: By the assumption that for all λ ∈ (γ, α) the map q+
X
is not constant on (0, λ), we obtain that there exists η ∈ (0, κ) such that VaRη(X) > VaRκ(X) and we conclude that
VaRκ(X) ≤ 1
κ


η
∫
0
VaRκ(X) du +
κ
∫
η
VaRκ(X) du


<1
κ


η
∫
0
VaRu(X) du +
κ
∫
η
VaRκ(X) du

 ≤ ESκ(X). □
Proof of Theorem 2.6. We first prove that (a) implies (b). We have
lti↓m0 F (t) = lti↓m0 tf (t) = − lti↓m0
∫t
0
q+
X (u) du = 0,
by integrability of X, which is equivalent to ∫ 1
0 |q+
X (u)| du < ∞. Then, for any finite collection of disjoint intervals (a1, b1), . . . , (an, bn) ⊆ [0, 1], we get
n
∑
k=1
∣
∣F (bk) − F (ak)∣
∣=
n
∑
k=1
∣ ∣ ∣ ∣ ∣
∫ bk
ak
qX (u) du
∣ ∣ ∣ ∣ ∣
≤
n
∑
k=1
∫ bk
ak
|qX (u)| du =
∫
⋃n
k=1 (ak ,bk )
|qX (u)| du.
Together with X ∈ L1, i.e. ∫ 1
0 |q+
X (u)| du < ∞, we obtain that F is absolutely continuous. By F being absolutely continuous, the fundamental theorem of calculus for Lebesgue integrals implies that −F ′ exists a.e. on [0, 1] and it is a.e. equal to q+
X , which means we can find a null set A ⊆ [0, 1]
such that −F ′(t) = q+
X (t) for all t ∈ [0, 1] \ A. This also implies that −F ′ is increasing and rightcontinuous on [0, 1] \ A. Now, we prove that (b) implies (a). Note, (0, 1] \ A is dense in (0, 1]. Indeed, let I = (a, b) ⊆ (0, 1] be nonempty. If I ⊆ A, then A cannot be a null set. Otherwise, I \ A ̸= ∅, which means I and (0, 1] \ A cannot be disjoint. This shows that (0, 1] \ A is dense in (0, 1]. For all t ∈ (0, 1] \ A set q(t) := −F ′(t). For t ∈ A set
q(t) := lui↓mt
u∈(0,1]\A
q(u).
Then, by the fundamental theorem of calculus for the Lebesgue integral we obtain
−
∫t
0
q(u) du =
∫
(0,t]\A
(−q(u)) du =
∫
[0,t]\A
F ′(u) du = F (t) − F (0) = F (t).
So, if q satisfies all properties of an upper quantile function, then we are done. To prove this, note first that q being increasing is a direct consequence of the assumption that −F ′ is increasing on (0, t] \ A. To show that q is right-continuous, we point out that for all t ∈ (0, 1] it holds that
lui↓mt
u∈(0,1]\A
q(u) = lui↓mt q(u).
This equality is derived as follows: If necessary, subdivide a decreasing sequence (un)n with un ↓ t into two subsequences (vn)n ⊆ (0, 1] \ A and (wn)n ⊆ A. The case of (vn)n is then clear. For the case of (wn)n, note that for each n we can create sequences (wln)n, (wnu)n ⊆ (t, 1] \ A converging to t such that for each n it holds that wln < wn < wnu. This then shows q(wn) ↓ q(t). Finally, for t ∈ A,
q(t) = lui↓mt
u∈(0,1]\A
q(u) = lui↓mt q(u),
where the first inequality holds by definition of q in t ∈ A, as well as by the fact that for all t ∈ (0, 1] \ A we obtain
lui↓mt q(u) = lui↓mt
u∈(0,1)\A
(−F ′(u)) = −F ′(t) = q(t),

PELVE FROM A REGULATORY PERSPECTIVE 25
where the second equality follows by the right-continuity of −F ′ on (0, 1] \ A. □
Proof of Corollary 2.7: Towards a contradiction, assume there exist 0 < b < c ≤ 1 and δ > 0 such that f is constant on (b, c] and strictly decreasing on (max{0, b − δ}, b). Note, lui↑mb (−F ′(u)) =
f (b) − b lui↑mb f ′(u). If lui↑mb f ′(u) < 0, then it is obvious that the function (0, 1] \ A → R, t 7→ −F ′(t)
cannot be increasing, contradicting the properties of F in Theorem 2.6. The case lui↑mb f ′(u) = 0 is
only possible if f is convex in a small neighborhood of b, i.e. convex on (−b − ε, b + ε) ⊆ (0, 1) for some ε > 0. Now, t 7→ −F ′(t) being increasing on (0, 1] \ A implies that for all t ∈ (0, b) \ A it has to hold that
−f (t) − tf ′(t) ≤ −f (b) ⇐⇒ f (b) − f (t) − tf ′(t) ≤ 0.
So, for t ∈ (b − ε, b) we obtain from the convexity of f on (−b − ε, b + ε) that
f (b) − f (t) − t f (b) − f (t)
b − t ≤ 0 ⇐⇒ b − 2t
b − t (f (b) − f (t)
} {{ }
<0
) ≤ 0.
But, for t ∈ (b−ε, b) close enough to b, the left-hand side in this inequality becomes strictly positive, a contradiction. □
Proof of Corollary 2.8: For all t ∈ (0, 1] set F (t) := tf (t). Then, f being decreasing and concave on (0, 1] implies f being bounded. Hence, we can extend F to a continuously differentiable function on [0, 1], by setting F (0) := lui↓m0 F (u) = 0. This extended version of F to the compact interval
[0, 1] is continuously differentiable and therefore, it is also absolutely continuous. In particular, −F ′(t) = −tf ′(t) − f (t) is continuous on (0, 1]. By f being decreasing and concave, we have for all t ∈ (0, 1) that −2f ′(t) − tf ′′(t) ≥ 0, i.e., −F ′ is increasing on (0, 1). The claim follows then by Theorem 2.6. □
Appendix B. Proofs accompanying Section 2.3
For brevity of the next proof, we denote the restriction of a function f to a set A by f |A.
Proof of Proposition 2.10. We first prove (a) implies (b), by a proof of contradiction. To do so, we assume first that there exists λ ∈ (0, α) such that E[−X] > VaRλ(X). By [23, Proposition 1] we obtain f (λ) = Πλ(X) = ∞, which contradicts the finiteness of f . Then, assume that for all λ ∈ (0, α) we have E[−X] ≤ VaRλ(X) and q+
X is discontinuous at a
point γ ∈ (0, α). By [17, Lemma A.19] we know that q+
X is right-continuous. Hence, lλi↑mγ q+
X (λ) <
q+
X (γ). Now, by [23, Proposition 2] we obtain that c⋆ := Πγ(X) is the unique value such that ESc⋆γ(X) = VaRγ(X). By the continuity of f , we get for each sequence (γn)n ⊆ (0, α) with γn ↑ γ that cn := Πγn(X) → c⋆. In total, cnγn → c⋆γ and
VaRγ(X) = ESc⋆γ(X) = nli→m∞ EScnγn (X) = nli→m∞ VaRγn (X),
where the second equality follows by the continuity of (0, 1] ∋ λ 7→ ESλ(X) and the last equality by [23, Proposition 1]. But this contradicts lλi↑mγ q+
X (λ) < q+
X (γ), i.e., the discontinuity of q+
X in γ.
Now, we prove that (b) implies (a). By assumption for all λ ∈ (0, α) it holds E[−X] ≤ VaRλ(X), which implies by [23, Proposition 1] that for each such λ there exists c ∈ [1, λ−1] with EScλ(X) = VaRλ(X). The latter implies that f is finite-valued. Next, we prove continuity of f . To do so, assume first that q+
X is constant on (0, γ) for some
γ ∈ (0, α], then the map (0, γ) ∋ λ 7→ ESλ(X) is constant (with value −q+
X (λ)). This implies that Πλ(X) = 1 for all λ ∈ (0, γ), which means that f |(0,γ) is continuous. In particular, if γ = α, then
we are done. Furthermore, if γ < α, then the continuity of q+
X also implies that f |(0,γ] is constant.
Second, if there exists γ ∈ [0, α) such that for all λ ∈ (γ, α), q+
X is not constant on (0, λ), then
for all β ∈ (γ, α), we obtain from [23, Proposition 2] that Πβ(X) is the unique value in c ∈ [1, β−1]

26 C. LAUDAGÉ & J. SASS
for which EScβ(X) = VaRβ(X). So, assuming a sequence (λn)n ⊆ (γ, α) with λn → λ⋆ for some λ⋆ ∈ (γ, α) and setting cn := Πλn(X) and c⋆ := Πλ⋆(X), then
nli→m∞ EScnλn (X) = nli→m∞ VaRλn (X) = VaRλ⋆ (X) = ESc⋆λ⋆ (X).
Now, by Lemma 2.5, we know that the map (γ, 1] ∋ λ 7→ ESλ(X) is strictly decreasing. Further, by the continuity of this map, it has to hold that cnλn → c⋆λ⋆, which in turn implies cn → c⋆. The latter means that f |(γ,α) is continuous. If γ = 0, the desired result follows.
Third, assume that there exists γ ∈ (0, α) such that q+
X is constant on (0, γ] and for all λ ∈ (γ, α)
it holds that q+
X is not constant on (0, λ). Then, it remains to show that f is right-continuous at γ. To prove this, let (λn)n ⊆ (γ, α) be a sequence with λn → γ. Then (recall cn := Πλn(X)),
nli→m∞ EScnλn (X) = nli→m∞ VaRλn (X) = VaRγ(X) = ESγ(X).
The result cn → 1 follows by the fact that the map (0, 1] ∋ λ → ESλ(X) is continuous in combination with Lemma 2.5. □
Proof of Corollary 2.11. This follows from Proposition 2.10 in combination with the fact that a constant area of F X transfers to a jump of q+
X. □
Appendix C. Proofs accompanying Section 3
Proof of Proposition 3.4. Let Y ∈ L1. The map (0, 1) 7→ R, p 7→ ESp(Y ) is continuous. This implies that (3.1) is also continuous. Together with the fact that [1, λ−1] is compact, the extreme value theorem implies that the map (3.1) attains a minimum. □
For the proofs of Theorem 3.6 and Proposition 3.11, we need the following auxiliary result. It utilizes slightly different assumptions than the classical Dini Theorem [27, Theorem 7.13]. Instead of assuming a monotone sequence of functions, every function is assumed to be decreasing. This necessitates a distinct approach in order to establish the result.
Lemma C.1. Let [a, b] ⊂ R with a, b ∈ R such that a < b. Suppose (fn)n is a sequence of functions fn : [a, b] → R such that every fn is decreasing on [a, b]. If (fn)n converges pointwise to a continuous function f : [a, b] → R, then the convergence is uniform.
Proof: By a proof of contradiction, assume that the convergence is not uniform. This means, there exist ε > 0, a subsequence (fnk )k and corresponding points xk ∈ [a, b] with
|fnk (xk) − f (xk)| ≥ ε for all k ∈ N.
By passing to a subsequence of (xk)k if necessary, we can assume that xk → x⋆ for some x⋆ ∈ [a, b]. W.l.o.g. assume that fnk (xk) ≥ f (xk) + ε occurs infinitely often. If x⋆ > a, choose an arbitrary t ∈ [a, x⋆). Then, for k large enough we have xk > t and hence,
fnk (t) ≥ fnk (xk) ≥ f (xk) + ε.
Pointwise convergence of (fn)n to f and continuity of f give f (t) ≥ f (x⋆)+ε, contradicting continuity of f . If x⋆ = a, the same line of arguments leads f (a) ≥ f (a) + ε, again a contradiction. □
Proof of Theorem 3.6. We perform this proof in three steps. Step 1: For i ∈ {1, . . . , n} the function
fi
m : [λ, 1] → R, t 7→ ESt(Xm
i ) − VaRλ(Xm
i)
is decreasing and
f i : [λ, 1] → R, t 7→ ESt(Xi) − VaRλ(Xi)
is continuous. Then, assumption (a) guarantees that (f im)m converges pointwise to f i, which is by Lemma C.1 even a uniform convergence.

PELVE FROM A REGULATORY PERSPECTIVE 27
Now, set um(t) := (f 1m(t), . . . , f nm(t))⊺, u(t) := (f 1(t), . . . , f n(t))⊺ and Φ : Rn → R, x 7→
√
∑n
i=1 xi2. Note, Φ is continuous. Step 2: Now, we show that Φ ◦ um uniformly converges to Φ ◦ u as m → ∞. To do so, note that by Step 1, we have
sup
x∈[λ,1]
max
i∈{1,...,n}
(f i
m(x) − f i(x)) m→∞
−−−−→ 0. (C.1)
Together with compactness of [λ, 1] and um being continuous for all m ∈ N, we can apply Theorem 4.14 and Theorem 7.12 in [27]. Hence, there exists a compact set K ⊆ Rn such that u([λ, 1]) ⊆ K and um([λ, 1]) ⊆ K for all m ∈ N. For this K we obtain by the Heine-Cantor theorem [1, Corollary 3.31] that the restricted map Φ|K is uniformly continuous. Now, let ε > 0 be arbitrary. By uniform continuity of Φ|K choose δ > 0 such that for all y, z ∈ K with |y − z|d < δ it holds that |Φ(x) − Φ(z)| < ε. In ad-
dition, choose N ∈ N such that the expression in (C.1) is smaller than δ for all m ≥ N . Thus, for all t ∈ [λ, 1] and m ≥ N we obtain that |(Φ ◦ um)(x) − (Φ ◦ u)(x)| < ε. Step 3: Finally, we prove that (cm)m := (ΠMSE
λ,ω (Xm))m converges to c⋆ := ΠMSE
λ,ω (X). Since (cm)m ⊆ [1, λ−1], there exists a convergent subsequence (cmk )k such that cmk → c as k → ∞ for some c ∈ [1, λ−1]. Now, for each k, note that cmk λ is a global minimizer of Φ ◦ umk , which implies
(Φ ◦ umk )(cmk λ) ≤ (Φ ◦ umk )(c⋆λ).
By uniform convergence of (Φ ◦ umk )k to Φ ◦ u (Step 2), we get that
(Φ ◦ u)(cλ) ≤ (Φ ◦ u)(c⋆λ).
Then, assumption (b) implies that c = c⋆. Hence, every convergent subsequence of (cm)m converges to c⋆, which shows by compactness of [λ, 1] that cm → c⋆. □
Proof of Lemma 3.8. For every i ∈ {1, . . . , n} set Ai = {c ∈ [1, λ−1] | EScλ(Xi) ≤ VaRλ(Xi)}. Then, ΠWC
λ (X) = inf ⋂n
i=1 Ai and Πλ(Xi) = inf Ai. For every i, by continuity of c 7→ EScλ(Xi) we get that either Ai = ∅ or Ai = [ai, λ−1] for some ai ∈ [1, λ−1]. If for one i we have Ai = ∅, then both sides in (3.2) are +∞. Otherwise, ⋂n
i=1 Ai = [maxi ai, λ−1], which proves the claim. □
Proof of Proposition 3.11. For each m ∈ N, the function
hm : [λ, 1] → R, t 7→
n
∑
i=1
g (ESt(Xm
i )) − g (VaRλ(Xm
i ))
is decreasing and the function
h : [λ, 1] → R, t 7→
n
∑
i=1
g (ESt(Xi)) − g (VaRλ(Xi))
is continuous. Assumption (a) guarantees that (hm)m converges pointwise to h. Lemma C.1, implies that this convergence is even uniform. From assumption (c), we obtain for m sufficiently large that
∑n
i=1 g(E[Xim]) < ∑n
i=1 g(VaRλ(Xim)). Then, ΠSys
λ,g (Xm) is the left-most root cm of the equation
hm(cmλ) = 0 and by assumption (b), ΠSys
λ,g (X) is the unique root c of the equation h(cλ) = 0. The claim follows then by the uniform convergence of (hm)m to h. □
Appendix D. Proofs accompanying Section 4
Proof of Proposition 4.3. Let A ∈ Rn×n with Σ = AA⊺. By Remark 4.2 there exists Y ∼ En(0, In, φ)
such that X =d AY + μ.
(i) Let i ∈ {1, . . . , n}. By Theorem 6.16 in [12] it holds that Xi = e⊺
i X d= μi + e⊺
i AY =d μi + |A⊺ ei |nZ. Cash additivity and positive homogeneity of VaR and ES yield that VaRα(Xi) =
−μi +
√
e⊺
i Σ ei VaRα(Z) and ESα(Xi) = −μi +
√
e⊺
i Σ ei ESα(Z) for a level α. This shows that
the PELVE of Xi is independent of μ and Σ. Hence, Πλ(Z) = Πλ(Xi).

28 C. LAUDAGÉ & J. SASS
(ii) The statement ΠA
λ,ω(X) = Πλ(Z) follows from part (i). ΠWC
λ (X) = Πλ(Z) follows also from
part (i) in combination with Lemma 3.8. The equality ΠSys
λ,g (X) = Πλ(Z) is a consequence of the specific forms of the VaR and ES for elliptical distributions as already used in the proof of part (i). (iii) For an arbitrary c ∈ [1, λ−1] it holds that
√ √ √ √
n
∑
i=1
ωi
(
EScλ(Xi) − VaRλ(Xi)
)2
= | EScλ(Z) − VaRλ(Z)|
√ √ √ √
n
∑
i=1
ωi(e⊺
i Σ ei).
If ES1(Z) = E[−Z] ≤ VaRλ(Z), then by [23, Proposition 1] we have ESΠλ(Z)λ(Z) = VaRλ(Z). Otherwise, the map c 7→ EScλ(Z) is decreasing towards ES1(Z) = E[−Z] > VaRλ(Z), which proves the second case. (iv) If E[−Z] > VaRλ(Z), then by [23, Proposition 1] we have that Πλ(Z) = ∞ and the inequality is satisfied. Otherwise, note that the value ΠSys
λ,g (X) is calculated subject to
n
∑
i=1
(
max
{
μi,
√
e⊺
i Σ ei EScλ(Z)
}
− max
{
μi,
√
e⊺
i Σ ei VaRλ(Z)
})
≤ 0. (D.1)
Using again [23, Proposition 1], we obtain EScλ(Z) = VaRλ(Z) for c = Πλ(Z), which shows that the constraint is satisfied for c. This proves the first part of the claim. For the second part, note that by the assumption E[−Z] ≤ VaRλ(Z) we have Πλ(Z) < ∞. Furthermore, by the assumption that α 7→ EScλ(Z) is strictly decreasing we have Πλ(Z) > 1. Now, choose an arbitrary c ∈ [1, Πλ(Z)). Then, by the existence of i ∈ {1, . . . , n} such that
e⊺
i Σ ei > 0 and μi ≤
√
e⊺
i Σ ei VaRλ(Z) we have for this i together with the fact that the map
α 7→ EScλ(Z) is strictly decreasing:
max
{
μi,
√
e⊺
i Σ ei EScλ(Z)
}
− max
{
μi,
√
e⊺
i Σ ei VaRλ(Z)
}
=
√
e⊺
i Σ ei
} {{ }
>0
( EScλ(Z) − VaRλ(Z)) > 0. (D.2)
Furthermore, note that every summand on the left-hand side in (D.1) is greater or equal to zero for such a c, which implies by (D.2) that ΠSys
λ,g (X) ≥ Πλ(Z). Together with the first part,
i.e., ΠSys
λ,g (X) ≤ Πλ(Z) we obtain ΠSys
λ,g (X) = Πλ(Z).
To prove the remaining implication, assume that ΠSys
λ,g (X) = Πλ(Z) and for all j ∈ {1, . . . , n}
it holds that e⊺
j Σ ej = 0 or μj
(
e⊺
j Σ ej
)− 1
2 > VaRλ(Z). If for all j ∈ {1, . . . , n} it holds that
e⊺
j Σ ej = 0, we have ΠSys
λ,g (X) = 1 < Πλ(Z). Otherwise, by the map α 7→ Eα[Z] being
continuous, there exists c ̃ ∈ [1, Πλ(Z)) such that for all j ∈ {1, . . . , n} with e⊺
j Σ ej > 0 it holds
that μj >
√
e⊺
j Σ ej ESc ̃λ(Z). This implies that the left-hand side in the inequality in (D.1) is
equal to zero, which means that ΠSys
λ,g (X) ≤ c ̃ < Πλ(Z), a contradiction. □
Proof of Theorem 4.6. Under the non-degeneracy condition, for Y = −X we obtain for each ξ ∈ Rn with ∑n
i=1 ξi = 1 that ξ⊺Y ∈ RVγ, see [5]. In particular, for all i ∈ {1, . . . , n} we have Yi ∈ RVγ.
(i) This is [23, Theorem 3], by noticing that VaRλ(Xi) = q+
Yi(1 − λ) (use e.g., [17, Lemma A.27])
and hence, for c ∈ [1, λ−1] it holds by the Karamata Theorem [11, Theorem A3.6] and the asymptotic inverse theorem for regularly varying functions [8, Theorem 1.5.12] that
lλi↓m0
EScλ(Xi)
VaRλ(Xi) = lλi↓m0
1 cλ
∫1
1−cλ q+
Yi (u) du
q+
Yi (1 − cλ) · q+
Yi (1 − cλ)
q+
Yi(1 − λ) = γ
γ − 1 c− 1
γ.

PELVE FROM A REGULATORY PERSPECTIVE 29
(ii) The limit of the A-PELVE is a direct consequence of part (i). For the WC-PELVE, by Lemma 3.8, we obtain that
lλi↓m0 ΠWC
λ (X) = lλi↓m0 sup
i∈{1,...,n}
Πλ(Xi).
By finiteness of the set {1, . . . , n}, we can exchange lim and sup. Together with part (i) we obtain that
lλi↓m0 ΠWC
λ (X) = sup
i∈{1,...,n}
lλi↓m0 Πλ(Xi) =
(γ
γ−1
)γ
.
For the Sys-PELVE with g(x) = x, an application of the Karamata Theorem shows that for each i ∈ {1, . . . , n} it holds that
1
cλ
∫1
1−cλ
q+
Yi(u) du ∼ γ
γ − 1q+
Yi(1 − cλ) ∼ γ
γ − 1 c− 1
γ q+
Yi(1 − λ), λ ↓ 0.
From which we deduce that
∑n
i=1 EScλ(Xi)
∑n
i=1 VaRλ(Xi) =
∑n
i=1
1 cλ
∫1
1−cλ q+
Yi (u) du
∑n
i=1 q+
Yi(1 − λ) ∼ γ
γ − 1 c− 1
γ , λ ↓ 0.
The result follows by the same reasoning as in the proof of [23, Theorem 3]. For the Sys-PELVE with g(x) = max{0, x} it suffices to note that q+
Yi(1 − λ) → ∞ as λ ↓ 0 for each i ∈ {1, . . . , n}. Hence, for sufficiently small λ, the maximum operator becomes irrelevant, and the same reasoning as for g(x) = x applies. (iii) For i ∈ {1, . . . , n} and Yi ∈ RVγ, we have that P (Yi > x) ∼ x−γLi(x) as x → ∞ for some slowly varying function Li, see [11, Definition A3.1] for the definition of slowly varying functions. Then, we have that
q+
Yi (λ) = (1 − λ)− 1
γ L ̃i((1 − λ)−1),
where L ̃i is defined via the connection that h(x) := L ̃i(xγ) is the de Bruijn conjugate of (Li)− 1
γ,
see also [8, Theorem 1.5.13] for characterizing the de Bruijn conjugate. Then, for the objective of the MSE-PELVE (recall (3.1)) we obtain
√ √ √ √
n
∑
i=1
ωi
(
EScλ(Xi) − VaRλ(Xi)
)2
∼
√ √ √ √
n
∑
i=1
ωi
(
λ− 1
γ L ̃i(λ−1)
)2( γ
γ − 1 c− 1
γ −1
)2
, λ ↓ 0. (D.3)
By [11, Theorem A3.3] it holds that L ̃i(λ−1) > 0 for small enough values of λ. Hence, the
right-hand side in (D.3) attains its minimum for c =
(γ
γ−1
)γ. □
Department of Mathematics, RPTU Kaiserslautern-Landau, Germany. Email address: christian.laudage@rptu.de
Department of Mathematics, RPTU Kaiserslautern-Landau, Germany. Email address: joern.sass@rptu.de

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:56.748Z
- **Text Length:** 83848 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 29 of 29
