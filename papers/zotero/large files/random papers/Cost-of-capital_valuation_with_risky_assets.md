# PDF Document: Albrecher et al. - 2025 - Cost-of-capital valuation with risky assets.pdf

**File Path:** Albrecher et al. - 2025 - Cost-of-capital valuation with risky assets.pdf

**Processed Date:** 2026-02-10T18:18:33.364Z

**File Size:** 6520.24 KB

**Total Pages:** 30

**Extracted Pages:** 30

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3530

**Title:** Cost-of-capital valuation with risky assets

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Cost-of-capital valuation with risky assets
Hansjo ̈rg Albrecher∗ Filip Lindskog† Herve ́ Zumbach‡
Abstract
Cost-of-capital valuation is a well-established approach to the valuation of liabilities and is one of the cornerstones of current regulatory frameworks for the insurance industry. Standard cost-of-capital considerations typically rely on the assumption that the required buffer capital is held in risk-less one-year bonds. The aim of this work is to analyze the effects of allowing investments of the buffer capital in risky assets, e.g. in a combination of stocks and bonds. In particular, we make pr-
ecise how the decomposition of the buffer capital into contributions from policyholders and investors varies as the degree of riskiness of the investment increases, and highlight the role of limited liability in the case of heavy-tailed insurance risks. We present a combination of general theoretical results, explicit results for certain stochastic models and numerical results that emphasize the key findings.
1 Introduction
Risk-based solvency principles for insurance companies are at the heart of modern insurance regulation, see for instance the currently enforced Solvency II regulation in the European Union [12, 14] and the Swiss Solvency Test (SST) in Switzerland [15]. According to these principles, the valuation of insurance liabilities must reflect not only expected future cash flows but also the uncertainty surrounding them. A central component in this process is the cost of capital, which represents the return-
 that investors demand for providing capital to absorb unexpected losses, where the necessary amount of capital to ensure solvency is set by the regulator on the basis of the underwritten policies and a risk measure. While financial risks can typically be priced in a market-consistent way (cf. [20]), this is more subtle for insurance risk (see e.g. [24], [11] and [3, 23]). In the absence of a liquid market
∗Department of Actuarial Science, Faculty of Business and Economics (HEC), University of Lausanne and Swiss Finance Institute, UNIL-Chamberonne, CH-1015 Lausanne †Department of Mathematics, Stockholm University, SE-106 91 Stockholm ‡Department of Actuarial Science, Faculty of Business and Economics (HEC), University of Lausanne, UNIL-Chamberonne, CH-1015 Lausanne
1
arXiv:2511.00895v1 [q-fin.RM] 2 Nov 2025

for insurance risks, one typically needs to adhere to a mark-to-model approach. The economic value of the insurance liabilities is then defined as the expected claim costs (’best estimate’) plus a margin (called risk margin in Solvency II, and market value margin in the SST) which reflects these capital costs. The justification is that for this monetary amount another insurance undertaking should then be willing to take over these liabilities, as it covers the costs it generates for integrating i-
t into one’s business (an arm’s length transaction, cf. [12]). The suggested cost-of-capital rate (above the risk free rate) for such considerations, and the standard value currently implemented, is 6%. Recently, the European union decided to lower this value to 4.75%, cf. [19, 14], which after national transposition is expected to be enforced in the member countries by January 2027. See e.g. [17, 2] for economic considerations to justify particular cost-of-capital rates.
It may be natural to interpret that the insurance premiums should match the economic value of liabilities that the issuance of these insurance policies generates (as this is the value for which also another party should be willing to accept these risks). This would mean that the safety loading (on top of the pure premium reflecting expected claim costs) corresponds to the risk margin discussed above. From an actuarial perspective, this is a natural starting point for the concrete pricing of the po-
licies, although several other factors will eventually play a role (including competition, demand/supply patterns, solidarity considerations etc.). More than that, at the general level of asset-liability management of the company, the company is exposed to several other sources of risks, and the regulatory rules ask to determine the solvency capital requirement that each of these generate, and the resulting values then need to be added up for the overall solvency capital satisfying the regulatory -
demand. That is, for simplicity, these risks are considered independently at first, and based on some (often very coarse) dependence assumptions between the different risk categories, the obtained sum can in a second step potentially be reduced by a diversification benefit, taking into account the fact that not all of these risks are likely to lead to losses at the same time.
In the approach as described above, the insurance liabilities are considered in a stand-alone fashion, with the capital costs they generate (and therefore the necessary insurance premiums) possibly over-estimated, as they rely on the assumption that the solvency capital is invested solely in risk-less bonds. But in practice some of that capital can be invested into risky assets, generating higher returns than the risk-less bond and providing additional income that reduces the claim costs. At the s-
ame time, this position in risky assets introduces additional risk, which itself translates into the need for further solvency capital. In this paper, we would like to specifically investigate this trade-off di
2

rectly by considering those two risks together. Concretely, considering a mix of risky and risk-less investment of the solvency capital, we would like to study up to which degree of ’riskiness’ of the investment the policyholders can benefit from smaller premiums for the same level of solvency of the insurance undertaking (under the assumption that the safety loading is determined by the generated capital costs). Our focus is on short-tailed risks in the non-life domain. Despite extensive literat-
ure on the joint valuation of actuarial and financial risks within the insurance product itself (particularly with life insurance applications in mind, see e.g. [8, 6, 5, 4]), to the best of our knowledge an explicit analysis of the trade-off between risky and risk-less assets of a non-life insurer for a policyholder’s perspective was not considered before. We therefore deliberately decide to keep the underlying model assumptions simple, in order not to blur the main analysis by overlays with othe-
r factors. This includes the restriction to a one-period model, independence between insurance and financial risk as well as a focus on the Value-at-Risk and Expected Shortfall as a risk measure, see Section 2 for details.
It turns out that one can specify conditions under which the needed insurance premiums decrease with increasing weight in risky investment, up to a certain limit weight, up to which also the overall capital requirement is reduced. That is, a mild weight in risky investment is of advantage to all involved parties. Beyond that limit, the needed insurance premiums may decrease even further, but at the expense of overall increased capital requirements for the additionally introduced investment risk. S-
uch considerations may also add to reflections about the justifications of currently implemented solvency capital charges in the standard model of Solvency II for equity risk (e.g. 39% shock for Type 1 assets and 49% shock for Type 2 assets, cf. [13]). We reiterate that the purpose of the paper is to establish some concrete quantitative insights into the matter under very concrete and simple model assumptions.
The rest of the paper is organized as follows. Section 2 lays out the concrete model assumptions on which we base the considerations of the paper and establishes a number of general monotonicity results for the needed insurance premium, the invested amount of the shareholders and the overall solvency capital requirement when increasing the proportion of risky assets in the management of insurance risks. For the more particular case of normally distributed insurance and financial risks we derive ex-
plicit formulas for the involved quantities in Section 3, and for lognormally distributed quantities some semi-explicit results are obtained in Section 4. In Section 5 we then give and discuss concrete numerical illustrations of the effects of risky investments on the needed insurance premiums and solvency requirements, and Section 6 concludes. All proofs are delegated to an appendix.
3

2 A cost-of-capital valuation with risky assets
Assume that at time 0 liabilities corresponding to an aggregate claim amount X1 at time 1 are transferred from an insurance company to an empty company whose purpose is to carry out the runoff of the liabilities. X1 is not replicable and no replicating portfolio is considered. For simplicity, we assume that all payoffs at time 1 are discounted to monetary values at time 0 (alternatively, that the risk-less interest rate is zero). Along with the liabilities, the following cash amounts are transferr-
ed: a cash amount C0 from the shareholders and a cash amount V0 from the insurance company. Since only the liabilities and the cash amount V0 are transferred from the insurance company, V0 should be interpreted as a theoretical premium for these liabilities. The cash transfers are necessary because the new entity receiving the liabilities needs capital in order to comply with the solvency standards of insurance regulation. Assume now that the (deterministic) cash amount R0 = V0 + C0 is immediately-
 invested into an asset (or a collection of assets) with gross return Z1 giving the risky amount R0Z1 at time 1. At time 1, the payoffs to the shareholders and to the policyholders, respectively, are:
Zsh := (R0Z1 − X1)+, Zph := (R0Z1) ∧ X1,
where x ∧ y means min(x, y) and x+ = max(x, 0). The interpretation is that the policyholders receive what they are entitled to if there is sufficient capital available at that time, and any remaining available capital goes to the shareholders. For a discussion on the effects of the limited liability of the shareholders, see e.g. [16, 2]. The shareholders assign at time 0 a value C0 to their payoff Zsh at time 1, and the aggregate theoretical premium is the remaining amount V0 = R0−C0 needed to fin-
ance R0. Cost-of-capital valuation corresponds to
C0 = E[Zsh]/(1 + η), (1)
where η > 0 represents the cost-of-capital rate, which is the spread over the risk-free rate for the more risky investment (which corresponds to betting on a favorable runoff result). Writing (R0Z1 − X1)+ = R0Z1 − (R0Z1) ∧ X1, we get in the cost-of-capital case that
V0 = 1
1 + η E[(R0Z1) ∧ X1] + η
1 + η R0 + 1
1 + η R0 E[1 − Z1]. (2)
Note that if both R0Z1 and X1 are nonnegative and independent, then
E[(R0Z1) ∧ X1] =
Z∞
0
P(R0Z1 > t)P(X1 > t)dt, (3)
4

which may facilitate computations. If the investment is into a risk-less bond, then Z1 ≡ 1 which gives as a special case of the valuation formula (2)
V0 = 1
1 + η E[R0 ∧ X1] + η
1 + η R0,
which appears as Equation (8.16) in Mildenhall and Major [21, p.199]. It also corresponds to the one-period case of [9, Eq.10] and to [1, Eq.12] in the absence of limited liability of the shareholders. The cash amount R0 is the smallest amount such that the new entity managing the liability runoff is allowed to operate (is considered solvent). R0 cannot be determined unless the associated investment strategy is given. Concretely, R0 must satisfy
ρ(R0Z1 − X1) = 0 (4)
so that the final net worth R0Z1 − X1 is acceptable according to a solvency criterion given by a risk measure ρ. That is, each choice of the risk measure ρ entails an overall needed cash amount R0 for each given insurance risk X1 and chosen asset strategy Z1. In terms of risk measure, in this paper we focus on the Value-at-Risk and the Expected Shortfall. For α ∈ (0, 1) small, e.g. 0.5% or 1%, these are defined as, with Y = R0Z1 − X1,
VaRα(Y ) = F −1
−Y (1 − α) and ESα(Y ) = 1
α
Zα
0
VaRβ(Y )dβ.
Since Z1 and X1 are discounted, no discount factor appears in front of the quantile F −1
−Y (1 − α).
Remark 2.1. We could consider the more general min{r : ρ(rZ1 −X1) ≤ 0} as definition of R0 instead of (4) since there are stochastic models for which no R0 satisfies (4). However, under reasonable assumptions (see Proposition 2.1 below) R0 is the unique solution to ρ(R0Z1 − X1) = 0. ⋄
Remark 2.2. A model-independent upper bound for V0 is obtained from using E[Y +] ≥ E[Y ] which, applied to (2), gives
V0 ≤ R0 − 1
1 + η E[R0Z1 − X1] = 1 + η − E[Z1]
1 + η R0 + 1
1 + η E[X1].
If Z1 and X1 have finite variances and if the risk measure VaRα is used to determine R0, then a lower bound for V0 follows from combining the Cauchy-Schwarz inequality E[|AB|] ≤ E[A2]1/2E[B2]1/2 with the identity Y + = Y 1[0,∞)(Y ). Concretely,
E[(R0Z1 − X1)+] ≤ E[(R0Z1 − X1)2]1/2(1 − α)1/2
5

and E[Y 2] = var(Y ) + E[Y ]2 then lead to the lower bound
V0 ≥ R0 − (1 − α)1/2
1 + η R2
0 var(Z1) + var(X1) + R0E[Z1] − E[X1] 2 1/2
.
⋄
Remark 2.3. Limited liability means that shareholders do not have to inject capital at time 1 to offset a possible deficit at that time. Limited liability increases the value C0 for shareholders from E[R0Z1 − X1]/(1 + η) to E[(R0Z1 − X1)+]/(1 + η). The difference
1
1 + η E[(R0Z1 − X1)+] − E[R0Z1 − X1] = − 1
1 + η E[(R0Z1 − X1)−]
is referred to as the value of the limited liability option. Note that this value coincides with the difference between the upper bound for V0 in Remark 2.2 and the value of V0 in case of limited liability. ⋄
Example 2.1. As an illustration, consider a Pareto-distributed insurance risk X1 with cumulative distribution function F (x) = 1 − (x/xm)−β, x > xm > 0 and suppose that β > 1, ensuring a finite mean E[X1] = xmβ/(β−1). Consider a purely risk-less investment and R0 determined by VaRα,
R0 = VaRα(−X1) = xmα−1/β = β − 1
β α−1/βE[X1].
In this Pareto model with only risk-less investment we can compute the value of the limited liability option (cf. Remark 2.3) explicitly. It is given by the expression
1
1+η
α−1/β+1
β E[X1].
For nonnegative R0, Z1, X1, the (typically crude) upper bound (R0Z1 − X1)+ ≤ R0Z1 gives the general upper bound E[X1]/(1 + η) for the value of the limited liability option. Here, with Z ≡ 1 and X1 Pareto distributed, we see that we can actually come arbitrarily close to this upper bound by letting β approach 1. Consider α = 0.005. For β = 2 and β = 1.1 the two values of the limited liability option are approximately 0.03 · E[X1] and 0.53 · E[X1], respectively. The two corresponding values of R0 ar-
e approximately 7.07 · E[X1] and 11.23 · E[X1], respectively. The upper bound for V0 in Remark 2.2 (corresponding to unlimited liability) is here
η
1+η
β−1
β α−1/βE[X1] + 1
1 + η E[X1] = E[X1]
1 + η 1 + α−1/β
β η(β − 1) .
6

For β = 2 and β = 1.1 the two values of the upper bound for V0 are therefore approximately 1.34·E[X1] and 1.58·E[X1], respectively. We obtain the actual value of V0 by subtracting the value of the limited liability option:
V0 = E[X1]
1 + η 1 + α−1/β
β η(β − 1) − α .
For β = 2 and β = 1.1 the two values of V0 are therefore approximately 1.31 · E[X1] and 1.05 · E[X1], respectively. The fact that, for a fixed E[X1], the heavier tail implies a considerably smaller value of V0 is due to the relatively large value of the limited liability option. ⋄
Investing in a risk-less bond means Z1 ≡ 1 and then (for translationinvariant ρ) we have R0 = ρ(−X1). Our interest lies in the consequences of investing the capital R0 in (at least partially) risky assets. Therefore, the case Z1 ≡ 1 is only a benchmark here, and we will in general consider random variables Z1 of the form
Z1 = Zw
1 := wS1 + 1 − w for w ∈ [0, 1]. (5)
This corresponds to investing a fraction w in a risky asset (with value S0 = 1 at time 0 and discounted value S1 at time 1) and the remainder in a riskless bond. When considering Z1 of the form (5) we will sometimes write R0w, C0w, V0w to emphasize the dependence on w for fixed S1 and X1. In the sequel, we will always assume the following:
Assumption 1. The risk measure ρ is either VaRα or ESα. X1 and S1 are independent, and S1 is absolutely continuous (having a density). There exists a unique solution R0 ≥ 0 to ρ(R0Z1 − X1) = 0.
The independence assumption between X1 and S1 is for simplicity of exposition, but also in line with the respective independence assumption in the standard model of Solvency II for non-life business lines. The assumption on the existence of a unique solution R0 is in fact not very restrictive. For instance, one can derive the following result (the proof of which is given in Appendix A).
Proposition 2.1. If ρ is either VaRα or ESα, X1 and S1 are independent and take nonnegative values only, S1 is absolutely continuous and P(X1 = 0) is sufficiently small, then there exists a unique R0 ≥ 0 solving (4).
Remark 2.4. Since we are considering positively homogeneous risk measures, 0 = ρ(R0Z1 − X1) = ρ(aR0Z1 − aX1) for any a > 0. Hence, for a fixed Z1, replacing X1 by aX1 changes the necessary invested amount from R0 to aR0. Correspondingly, C0 = E[(R0Z1 − X1)+]/(1 + η) changes to
E[(aR0Z1 − aX1)+]/(1 + η) = aE[(R0Z1 − X1)+]/(1 + η) = aC0.
As a result, V0 also changes to aV0. Hence, it is sufficient to restrict the analysis to insurance liability variables X1 satisfying E[X1] = 1. ⋄
7

2.1 Monotonicity properties
Throughout this paper, for any two random variables Y1, Y2 the notation Y1 ≤st Y2 refers to first-order stochastic dominance, i.e. for the respective cumulative distribution functions we have FY1(x) ≥ FY2(x) for all x ∈ R.
Proposition 2.2. Assume that Assumption 1 holds. For Z1 fixed, X1 7→ R0 is increasing with respect to increasing first-order stochastic dominance. Similarly, for X1 fixed, Z1 7→ R0 is decreasing with respect to increasing first-order stochastic dominance.
We need to establish some overall soundness of the functional V0.
Proposition 2.3. Assume that Assumption 1 holds, and E[Z1] ≤ 1 + η.
(i) For Z1 fixed and (1), X1 7→ V0 is increasing with respect to increasing first-order stochastic dominance.
(ii) For X1 fixed and (1), Z1 7→ V0 is decreasing with respect to increasing first-order stochastic dominance.
Let S1 ≤icx Se1 mean that Se1 is larger than S1 in increasing convex order
(which is equivalent to stop-loss order, and also equivalent to R 1
β F −1
S1 (u)du ≤
R1
β F −1
Se1
(u)du for all β ∈ [0, 1], see e.g. [7]). Take S1 ≥icx 1. Then for we ≥ w
Z1
β
F −1
weS1+1−we(u)du −
Z1
β
F −1
wS1 +1−w (u)du
= (we − w)
Z1
β
F −1
S1 (u)du + (1 − β)(w − we)
= (we − w)
Z1
β
F −1
S1 (u)du − (1 − β) ≥ 0.
Hence, for S1 ≥icx 1 we see that Z1w = wS1 + 1 − w increases in increasing convex order with w. The condition S1 ≥icx 1 is easily checked. For a random variable with symmetric density it simply means that the mode (mean if it exists) is greater than one. Increasing convex order enables results on how the fraction of the invested amount in the risky asset affects the value of liabilities. Let μw = wE[S1] + 1 − w and let R0w refer to the quantity R0 in (4) under (5) (in
particular, R00 = ρ(−X1)).
Proposition 2.4. Assume that Assumption 1 holds and that S1 ≥icx 1. If we ≥ w, R0we ≤ R0w and 1 + η ≥ μw, then V0we ≤ V0w.
Proposition 2.5. Assume that Assumption 1 holds. If R0wμw ≥ R00, then
C0w ≥ C00. If R0wμw ≥ R00 ≥ R0w, then V0w ≤ V00.
8

3 The Gaussian model
Let us now assume that X1 and Z1 are normally distributed. In that case one obtains explicit expressions for R0, C0 and V0. Let us focus on the Value-at-Risk first.
3.1 Value-at-Risk
For Y ∼ N (μ, σ2), it is well-known that
VaRα(Y ) = −μ + σΦ−1(1 − α). (6)
We will always assume that α ∈ (0, 1/2) so that Φ−1(1 − α) > 0.
Proposition 3.1. Suppose that X1 ∼ N (γ, ν2) and Z1 ∼ N (μ, σ2) are independent with μ, γ, σ, ν > 0. Then
VaRα(R0Z1 − X1) = γ − R0μ + Φ−1(1 − α)
q
R02σ2 + ν2. (7)
(i) If μ > σΦ−1(1 − α), then
R0 = μγ + Φ−1(1 − α)pγ2σ2 + μ2ν2 − σ2ν2Φ−1(1 − α)2
μ2 − σ2Φ−1(1 − α)2 (8)
is the unique R0 > 0 solving Equation (4).
(ii) If μ ≤ σΦ−1(1 − α), then Equation (4) has no positive solution R0.
Remark 3.1. If γ > νΦ−1(1 − α), then it may be useful to express R0 in (8) by the equivalent expression
R0 = γ2 − ν2Φ−1(1 − α)2
μγ − Φ−1(1 − α)pγ2σ2 + μ2ν2 − σ2ν2Φ−1(1 − α)2 .
The latter follows from the fact that
(μ2 − σ2Φ−1(1 − α)2)(γ2 − ν2Φ−1(1 − α)2)
is the product of the two factors
μγ − Φ−1(1 − α)pγ2σ2 + μ2ν2 − σ2ν2Φ−1(1 − α)2
and
μγ + Φ−1(1 − α)pγ2σ2 + μ2ν2 − σ2ν2Φ−1(1 − α)2.
The usefulness comes from the fact that we will consider γ and ν fixed while allowing μ and σ to vary as a result of considering different positions in a risky asset. ⋄
9

Remark 3.2. Taking derivatives in (8), we immediately get the (intuitive) result that μ 7→ R0 is decreasing and the functions σ 7→ R0, γ 7→ R0 and ν 7→ R0 are increasing. ⋄
Remark 3.3. Note that for the existence of R0 > 0, the mean return μ of the assets needs to exceed the threshold σΦ−1(1 − α). The latter expression depends on the volatility σ of the assets as well as the security level α. Only in case of a purely risk-less investment (μ = 1, σ = 0) the existence of R0 > 0 is guaranteed for all parameter values (and then trivially reduces to R0 = γ + νΦ−1(1 − α)). ⋄
Investing a portion 0 < w < 1 of the wealth in the risky asset according to (5), in the Gaussian model this simply translates into replacing the parameters (μ, σ) by (μw, σw) := (wμ + 1 − w, wσ). The following result shows that, under very mild conditions, the function w 7→ R0w is strictly convex and in addition strictly decreasing for w sufficiently small.
Proposition 3.2. Suppose that X1 ∼ N (γ, ν2) and S1 ∼ N (μ, σ2) are independent with
ν > 0, σ > 0, γ > νΦ−1(1 − α) and μ > max(1, σΦ−1(1 − α)).
For w ∈ [0, 1], let R0w be the positive solution to
VaRα(Rw
0 (wS1 + 1 − w) − X1) = 0.
Then w 7→ R0w is strictly convex. Moreover, R0w < R00 for all w ∈ (0, wb),
where wb = 1 if μ ≥ 1 + σΦ−1(1 − α), and otherwise
wb = 2(μ − 1)νΦ−1(1 − α)
(1 + σΦ−1(1 − α) − μ)(μ − 1 + σΦ−1(1 − α))(γ + νΦ−1(1 − α)) .
Note that the quantity wb is of particular interest, since in view of Proposition 2.4 it represents the limit weight of risky assets until which the overall capital requirement is not larger than R00 (the one for purely risk-less as
sets), and the needed premium V0w is smaller than the one for w = 0. If
max(1, σΦ−1(1 − α)) < μ < 1 + σΦ−1(1 − α), then it is easily verified that ν 7→ wb is strictly increasing. Hence, more insurance risk allows for more risky investment without increasing the total capital requirement above the level corresponding to purely risk-less investment.
The capital C0 given by (1) can be computed explicitly in the Gaussian setting. Together with the explicit expression for R0 in Proposition 3.1 this means that all the quantities R0, C0, V0 can be computed explicitly.
10

Proposition 3.3. Suppose that X1 ∼ N (γ, ν2) and Z1 ∼ N (μ, σ2) are independent with μ, γ, σ, ν > 0. If there exists an R0 > 0 solving VaRα(R0Z1 − X1) = 0, then
C0 = R0μ − γ
1 + η (1 + δ(α)) and
V0 = γ(1 + δ(α))
1 + η + R0
1 + η − μ(1 + δ(α))
1+η ,
where
0 < δ(α) := φ(Φ−1(1 − α))
Φ−1(1 − α) − α < α
Φ−1(1 − α)2 .
Remark 3.4. From Proposition 3.3 it follows that the value of the limited liability option (cf. Remark 2.3) in the Gaussian model and R0 determined by the risk measure VaRα is
δ(α) R0μ − γ
1+η .
For α small, e.g. α = 0.005, the value of the limited liability option is very small due to the light Gaussian tails. ⋄
The following result shows that investment in the (sufficiently attractive) risky asset always makes the payoff for a capital provider more attractive compared to the case with only risk-less investment. Hence, the contribution C0 to the financing of the capital requirement should increase if risky investments are allowed.
Proposition 3.4. Suppose that X1 ∼ N (γ, ν2) and S1 ∼ N (μ, σ2) are independent with γ, σ, ν > 0 and μ > σΦ−1(1 − α). For w ∈ [0, 1], let R0w be the positive solution to
VaRα(Rw
0 (wS1 + 1 − w) − X1) = 0.
Then C00 < C0w for all w ∈ (0, 1].
If R0w < R00 and C0w > C00, then V0w := R0w − C0w < R00 − C00 =: V00. Hence, by combining Propositions 3.2 and 3.4 we immediately obtain the following result.
Corollary 3.5. Suppose that X1 ∼ N (γ, ν2) and S1 ∼ N (μ, σ2) are independent with σ, ν > 0, γ > νΦ−1(1 − α) and μ > max(1, σΦ−1(1 − α)). For w ∈ [0, 1], let R0w be the positive solution to
VaRα(Rw
0 (wS1 + 1 − w) − X1) = 0.
Then V0w ≤ V00 for all w ∈ (0, wb), where wb is given in Proposition 3.2.
11

Note that the statement of Corollary 3.5 is stronger than what we would get by combining Propositions 2.4 and 3.2, since we do not need any condition involving the cost-of-capital rate η. The statement of Corollary 3.5 is a statement for w sufficiently small where R0w < R00. For w larger with
R0w > R00 there is no hope for a simple statement to hold regardless of the
parameter η. Note that if we let η → ∞, then V0w → R0w and R0w is typically not monotone, although decreasing for w sufficiently small. However, by evaluating V0w numerically we do observe that V0w ≤ V00 for all w for realistic parameter values, see e.g. Figure 1 in Section 5 for an illustration. We emphasize that the statement about V0w for realistic parameter values implicitly assumes that μ ≥ 1 is not too small. That is, for μ = 1 it follows immediately from Proposition 3.3 that
Vw
0 = γ(1 + δ(α))
1 + η + Rw
0
η − δ(α)
1+η .
So for μ = 1 we see that V0w > V00 is equivalent to R0w > R00. From
Remark 3.1 it follows that R0w > R00 holds for all w ∈ (0, 1] if μ = 1 and
γ > νΦ−1(1 − α).
3.2 Expected Shortfall
In the case of normal distributions, the expected shortfall of Y ∼ N (μ, σ2) at safety level α can simply be expressed as
ESα(Y ) = −μ + σ φ(Φ−1(1 − α))
α,
so the constant Φ−1(1 − α) for the Value-at-Risk in (6) is just replaced by another constant
ψ= 1
α
Zα
0
Φ−1(1 − β)dβ = 1
α
Z∞
Φ−1(1−α)
zφ(z)dz = φ(Φ−1(1 − α))
α.
Correspondingly, we can directly adapt the results previously obtained for the Value-at-Risk. For instance, Proposition 3.1 turns into the following result.
Proposition 3.6. Suppose that X1 ∼ N (γ, ν2) and Z1 ∼ N (μ, σ2) are independent with μ, γ, σ, ν > 0. Then, for ρ(·) = ESα(·),
(i) if μ > σψ, then
R0 = μγ + ψpγ2σ2 + μ2ν2 − σ2ν2ψ2
μ2 − σ2ψ2 (9)
is the unique R0 > 0 solving Equation (4).
12

(ii) if μ ≤ σψ, then Equation (4) has no positive solution R0.
Proposition 3.2 is easily adjusted to ESα instead of VaRα. Replacing Φ−1(1 − α) by ψ gives the following result.
Proposition 3.7. Suppose that X1 ∼ N (γ, ν2) and S1 ∼ N (μ, σ2) are independent with ν > 0, σ > 0, γ > νψ and μ > max(1, σψ). For w ∈ [0, 1], let R0w be the positive solution to
ESα(Rw
0 (wS1 + 1 − w) − X1) = 0.
Then w 7→ R0w is strictly convex. Moreover, R0w < R00 for all w ∈ (0, wb), where wb = 1 if μ ≥ 1 + σψ, and otherwise
wb = 2(μ − 1)νψ
(1 + σψ − μ)(μ − 1 + σψ)(γ + νψ) .
Proposition 3.3 is also easily adjusted to ESα instead of VaRα. Replacing 1 + δ(α) in Proposition 3.3 by Φ(ψ) + φ(ψ)/ψ gives the following result.
Proposition 3.8. Suppose that X1 ∼ N (γ, ν2) and Z1 ∼ N (μ, σ2) are independent with μ, γ, σ, ν > 0. If there exists an R0 > 0 solving ESα(R0Z1− X1) = 0, then
C0 = (R0μ − γ) Φ(ψ) + φ(ψ)/ψ
1+η , V0 = γ Φ(ψ) + φ(ψ)/ψ
1 + η + R0
1 + η − μ(Φ(ψ) + φ(ψ)/ψ)
1+η .
Finally, Corollary 3.5 has the following version for ESα instead of VaRα.
Corollary 3.9. Suppose that X1 ∼ N (γ, ν2) and S1 ∼ N (μ, σ2) are independent with σ, ν > 0, γ > νψ and μ > max(1, σψ). For w ∈ [0, 1], let R0w be the positive solution to
ESα(Rw
0 (wS1 + 1 − w) − X1) = 0.
Then V0w ≤ V00 for all w ∈ (0, wb), where wb is given in Proposition 3.7.
4 The lognormal model
The Gaussian model setting is attractive since it provides explicit expressions, through which the effects of investment in risky assets for cost of capital valuation can directly be traced. However, the symmetry and light tails of the normal distribution do not perfectly capture features in realworld data. If we consider other models than the Gaussian, then not much can be computed explicitly. However, the lognormal model presented below is an exception: here some key quantities can be explicitly-
 computed.
13

Proposition 4.1. If Z1 ∼ LN(mz, sz2) and X1 ∼ LN(mx, s2x) are independent, and if R0 is determined by VaRα(R0Z1 − X1) = 0, then
R0 = exp mx − mz + Φ−1(1 − α)psz2 + s2x
and
(1+η)V0 = exp mx −mz +Φ−1(1−α)psz2 + s2x η +1−exp(mz +s2
z /2)
+
Z∞
0
Φ log t − mx − Φ−1(1 − α)psz2 + s2x
sz
Φ log t − mx
sx
dt. (10)
The integral in expression (10) is easily evaluated by numerical integration. In contrast to the Gaussian model, S1 being lognormally distributed does not imply that Z1w = wS1 + 1 − w is lognormally distributed. Hence,
Proposition 4.1 is insufficient to study R0, C0, V0 as functions of w via Z1w.
If S1 ∼ LN(ms, ss2) satisfies E[S1] = μ and Var(S1) = σ2, then ms and ss2 are given by
s2
s = log 1 + σ2
μ2 , ms = log μ 1 + σ2
μ2
−1/2
. (11)
5 Numerical illustrations
Let us now put the results of the previous sections into concrete numerical conclusions for realistic parameter choices. Throughout this section we assume the cost-of-capital rate to be η = 0.06 (see Section 1 for a discussion of that parameter).
5.1 The Gaussian model
Assuming that both the insurance risk X1 and the financial risk Z1 are normally distributed, we can use the explicit formulas from Section 3 to study the effect of the choice of w on the resulting requirements for insurance premium V0, solvency capital requirement C0 and their sum R0. Let us focus on the case of Value-at-Risk with safety level α = 0.005, which is the risk measure used in Solvency II. Let us further assume μ = 1.05, σ = 0.2, which may be considered a realistic return and volatility-
 for an institutional investor, as well as the variations σ = 0.1 and σ = 0.3. For the insurance risk X1, we assume a mean of γ = 1 (cf. Remark 2.4) and a standard deviation of ν = 0.3 (which corresponds to a coefficient of variation of the total claim size of 0.3), together with a few variations of ν. Figure 1 plots the resulting values of R0, C0 and V0 as functions of w (recall that w = 0
14

(a) σ = 0.1 (b) σ = 0.2 (c) σ = 0.3
Figure 1: R0w, C0w and V0w for the Gaussian model with μ = 1.05, γ = 1, ν = 0.3, ρ = VaR0.005 and various values of σ
(a) ν = 0.2 (b) ν = 0.4 (c) ν = 0.6
Figure 2: R0w, C0w and V0w for the Gaussian model with μ = 1.05, σ = 0.2, γ = 1, ρ = VaR0.005 and various values of ν
corresponds to purely risk-less investment and w = 1 corresponds to purely risky investment, cf. (5)). Note that while the needed insurance premium V0w reduces with increas
ing risky asset allocation for all w, the needed solvency requirement C0w from shareholders increases correspondingly, and the minimal overall capital requirement R0w for σ = 0.2 is achieved for w∗ = 0.083, e.g., only 8.3% of the assets are invested in the risky asset, which then constitutes the most capital-efficient solution under the present model assumptions. One sees how this value w∗ decreases for increasing volatility in the risky asset, which matches the intuition. It is also insightful to-
 see that for larger values of w the solvency requirement C0w starts to dominate the needed insurance premium V0, more prominently for larger values of σ. The value wb until which the overall capital requirement R0w is smaller than R00 indeed corresponds to the one obtained from Proposition 3.2. Figure 2 plots the corresponding results for fixed σ = 0.2, but varying standard deviation ν of the insurance risk. One observes how the overall capital requirement R0w increases with ν,
15

and how C0w becomes larger than the needed insurance premium V0w already for smaller values of w. One also observes from Figure 2 that the riskier the insurance risk X1 is (larger value ν), the larger fraction w∗ of the initial capital should be invested in the risky asset in order to minimize the total capital requirement R0w.
5.2 The Lognormal model
Let us alternatively consider the lognormal model, which is of interest for two reasons. First, it allows to see the effects of heavier right tails for the insurance risk when compared to the normal model. Secondly, the lognormal assumption on S1 corresponds to a Black-Scholes market assumption for the risky asset, which is not uncommon in this framework. We will choose the parameters of the lognormal model in such a way that the first two moments of both X1 and S1 match the ones from the normal m-
odel. That is, for μ = 1.05, γ = 1 and each choice of σ and ν we use (11) and
s2
x = log 1 + ν2 , mx = − 1
2 log(1 + ν2)
to determine the respective parameters of the lognormal distributions. In the absence of explicit expressions, the figures are then obtained by Monte Carlo simulation. All figures are based on two i.i.d. samples of size 1’000’000 from the standard normal distribution, where the simulated variates are suitably transformed into lognormal variates using the parameters ms, mx, ss, sx.
(a) std(S1) = 0.1 (b) std(S1) = 0.2 (c) std(S1) = 0.3
Figure 3: R0w, C0w and V0w for the lognormal model with E[S1] = 1.05, E[X1] = 1, std(X) = 0.3, ρ = VaR0.005 and various values of std(S1)
Figure 3 is the analogue of Figure 1 under lognormality for both insurance and financial risk. One sees that the heavier tail increases R0w, and
C0w > V0w already for smaller weights w. In all three situations depicted in
Figure 3, both the optimal weight w∗ as well as the critical threshold wb are
16

(a) std(S1) = 0.1 (b) std(S1) = 0.2 (c) std(S1) = 0.3
Figure 4: Upper and lower bounds for V0w in Figure 3
increased when compared to the same situation in Figure 1 with identical first two moments of S1 and X1, which can also be attributed to the heavier tails. For large values of w, the safety loading V0w − E[X1] in the premiums can become very small and even negative. The model-independent upper bound for V0w from Remark 2.2 can be expressed as
Vw
0 ≤ E[X1] + η(R0w − E[X1]) − w(E[S1] − 1)R0w
1+η
from which it follows immediately that, for E[S1] > 1,
w> η
E[S1] − 1
R0w − E[X1]
R0w
implies a negative safety loading for any model. Figures 4 zooms into the respective values of the needed premium V0w and also depicts the bounds that were derived in Remark 2.2. One observes that the lower bound is too coarse for practical purposes, but the upper bound is remarkably sharp in these cases. As the upper bound is obtained by ignoring the limited liability, this indicates that the value of the limited liability option is quite small (which here is due to the small value α = 0.005 and -
the fact that the right tail of X1 − R0Z1 beyond its 1 − α = 0.995 quantile value is not sufficiently heavy to significantly impact V0).
Figure 5 depicts the analogue of Figure 2 under lognormality for both insurance and financial risk, in this case varying the standard deviation of the insurance risk. Again, each of these situations leads to larger overall capital requirement R0w compared to the counterparts of Figure 2, and again
the solvency capital requirement C0w is dominating the needed insurance
premium V0w by a larger extent. Figure 6 zooms into V0w and depicts the bounds that were derived in Remark 2.2. Again the sharpness of the upper bound is noteworthy.
17

(a) std(X1) = 0.2 (b) std(X1) = 0.4 (c) std(X1) = 0.6
Figure 5: R0w, C0w and V0w for the lognormal model with E[S1] = 1.05, E[X1] = 1, std(S1) = 0.2, ρ = VaR0.005 and various values of std(X1)
(a) std(X1) = 0.2 (b) std(X1) = 0.4 (c) std(X1) = 0.6
Figure 6: Upper and lower bounds for V0w in Figure 5
Figures 7 and 8 depict the analogues of Figures 3 and 5 for the situation when the expected return for the risky asset is only 2%. While the magnitudes of the quantities are very similar (visually almost indistinguishable to the case of larger μ), one sees that the optimal weight w∗ and the critical threshold wb are considerably smaller with smaller expected invested return μ, i.e. there is less incentive to invest a larger amount of the capital into the risky asset.
5.3 Lognormal investment returns and Pareto claims
Figures 9 and 10 illustrate the possible effect of even heavier tails for the insurance risk, assuming that X1 is Pareto-distributed with cumulative distribution function F (x) = 1 − (x/xm)−β, x > xm > 0, with the same first two moments as in the case of lognormal X1 in Figures 3 and 5:
E[X1] = xm
β
β − 1 , std(X1) = xm
√β
(β − 1)√β − 2 .
18

(a) std(S1) = 0.1 (b) std(S1) = 0.2 (c) std(S1) = 0.3
Figure 7: R0w, C0w and V0w for the lognormal model with E[S1] = 1.02, E[X1] = 1, std(X) = 0.3, ρ = VaR0.005 and various values of std(S1)
(a) std(X1) = 0.2 (b) std(X1) = 0.4 (c) std(X1) = 0.6
Figure 8: R0w, C0w and V0w for the lognormal model with E[S1] = 1.02, E[X1] = 1, std(S1) = 0.2, ρ = VaR0.005 and various values of std(X1)
For example, the resulting Pareto parameters in Figure 10, where E[X1] = 1, are given by
β = 1 + p1 + 1/std(X1)2, xm = (β − 1)/β.
A comparison of Figure 5 (lognormal model) and Figure 10 (lognormal S1 and Pareto-distributed X1) shows that the main difference is that the heavier Pareto tail increases the overall capital requirement R0, and that the increase in R0 is solely financed by increased capital C0 (the premiums V0 stay virtually unchanged). In order to see the effects of heavier tails even more significantly, in Figure 11 the expected aggregate claim size is kept at E[X1] = 1, but the parameter β is taken more extreme-
 (β = 2 and β = 1.1), in which case the standard deviation does not exist anymore (but the mean still does). One observes how the capital requirement R0 goes up tremendously, but the theoretical premiums V0 are still virtually unchanged. It should be noted that whereas R0 increases as β decreases from β = 2 to β = 1.1, this is not the case for V0 due to the increasing value of the share
19

holders limited liability option (cf. Example 2.1). Generally, the optimal investment weight w∗ and the critical threshold wb are larger in the Pareto case, indicating that for heavier-tailed insurance risks a riskier investment is advantageous (in the very heavy-tailed case of β = 1.1 even to the extent that full investment in the risky asset, w = 1, does not lead to a higher overall capital requirement R0 than risk-less investment, w = 0). Since the insurance risk dominates here, we gain from a-
n attractive return on the risky investment without substantially affecting the overall capital requirement. One also observes that in comparison with lighter-tailed risks, the curves are generally flatter, i.e. they are less sensitive to changes in w.
(a) std(S1) = 0.1 (b) std(S1) = 0.2 (c) std(S1) = 0.3
Figure 9: R0w, C0w and V0w for lognormal S1 and Pareto-distributed X1 with E[X1] = 1, std(X1) = 0.3, E[S1] = 1.05, ρ = VaR0.005 and various values of std(S1)
(a) std(X1) = 0.2 (b) std(X1) = 0.4 (c) std(X1) = 0.6
Figure 10: R0w, C0w and V0w for lognormal S1 and Pareto-distributed X1 with E[X1] = 1, E[S1] = 1.05, std(S1) = 0.2, ρ = VaR0.005 and various values of std(X1)
Finally, it may be of interest to see the effect of the risk measure on the result. While for the normal model the expected shortfall can be replaced
20

(a) β = 2 (b) β = 1.1
Figure 11: R0w, C0w and V0w for lognormal S1 and Pareto type I-distributed X1 with E[X1] = 1, E[S1] = 1.05, std(S1) = 0.2, ρ = VaR0.005 and low levels of Pareto parameter β
by a value at risk with a different security level, this is not the case for the lognormal model. Figures 12 and 13 depict the analogues of Figures 3 and 5 when VaR0.005 is replaced by ES0.01 (which is the risk measure in the Swiss Solvency Test). As expected, the overall capital requirement R0 increases, but this increase is provided by a larger investment C0 of the shareholders and the insurance premiums V0 stay virtually unchanged. In this case, the optimal weights w∗ and the critical threshold-
 wb are very similar to the ones obtained under the VaR0.005 criterion.
(a) std(S1) = 0.1 (b) std(S1) = 0.2 (c) std(S1) = 0.3
Figure 12: R0w, C0w and V0w for the lognormal model with E[S1] = 1.05, E[X1] = 1, std(X1) = 0.3, ρ = ES0.01 and various values of std(S1)
All these numerical examples illustrate that the appropriate blending of (independent) financial risk into the management of insurance risk can drive down the necessary insurance premiums according to actuarial considerations, which may be considered as a promising insight in situations where insurance premiums are considered too high. At the same time, the
21

(a) std(X1) = 0.2 (b) std(X1) = 0.4 (c) std(X1) = 0.6
Figure 13: R0w, C0w and V0w for the lognormal model with E[S1] = 1.05, E[X1] = 1, std(S1) = 0.2, ρ = ES0.01 and various values of std(X1)
absolute reduction of V0 through increasing w is still relatively moderate.
6 Conclusions
In this paper we showed, for simple yet reasonably realistic model assumptions, that a partial investment of the solvency capital into risky assets with higher return but also higher volatility can be beneficial for both policyholders and shareholders of a non-life insurance company. While the fact itself is well-known and also exploited in insurance practice, the present analysis allows to assess this effect quantitatively and quite explicitly from a viewpoint that seems not to have been pursued -
in the literature before. For the concrete static one-period model and under certain assumptions, we established a number of monotonicity results for needed premiums and solvency capital requirements. For the case of normally distributed insurance and asset risks it was possible to even derive explicit formulas for these quantities as well as the limit weight wb until which risky investment is a mutual advantage. We also illustrated the results numerically for parameters that are motivated by real-
-life magnitudes. For heavy-tailed risks, it was possible to quantify the increasing importance of the limited liability option of the shareholders, which can translate into reduced premium requirements of policyholders. Also, when the effect of heavy-tailed insurance risk on the overall capital requirement dominates the effect of risky investments, then higher proportions of the risky investment provide an additional pooling effect that supercedes the additionally introduced risk and are typicall-
y in favor of the policyholders. The results of this paper may be generalized in various directions. For instance, it could be interesting to investigate the sensitivity of the resulting quantities with respect to model uncertainty, both on the dynamics of the financial market and the distribution of insurance claims. Furthermore, al
22

though the independence assumption between insurance and financial risk is a common assumption in practice for many non-life business lines, it can be interesting to see how introducing dependence may compromise this trade-off of introducing additional risk for the prospect of higher investment returns. Also, to extend the analysis to a multi-period framework including explicit runoffs in long-tailed business would be of interest (see e.g. [25, 22], possibly also under consideration of a changing-
 realized cost-of-capital rate, cf. [1]). Such extensions are left for future research.
A Proofs
Proof of Proposition 2.1. If w = 0, then the solution to ρ(R0Z1 − X1) = 0 is R0 = ρ(−X1) ≥ 0. Therefore, it is sufficient to only consider w > 0. Note that VaRα(rZ1 − X1) = F −1
X1−rZ1 (1 − α) and
FX1−rZ1 (y) =
Z∞
0
P(wS1 + 1 − w ≥ (x − y)/r)dFX1(x), r > 0.
Note further that y 7→ FX1−rZ1(y) is continuous and strictly increasing since
∂
∂y FX1−rZ1 (y) =
Z∞
y+r(1+w)
fwS1
x−y
r +w−1 1
r dFX1(x) > 0.
Hence, VaRα(rZ1 − X1) = 0 is equivalent to FX1−rZ1(0) = 1 − α. Note that
∂
∂r FX1−rZ1 (y) =
Z∞
y+r(1+w)
fwS1
x−y
r +w−1 x−y
r2 dFX1(x) > 0.
Since r 7→ g(r) := FX1−rZ1(0) is continuous and strictly increasing, g(0) = FX1(0) < 1 − α and g(r) ↓ 1 as r → ∞, there exists a unique r > 0 solving FX1−rZ1 (0) = 1 − α. Write (r, y) 7→ g(r, y) := FX1−rZ1(y)−1+β. From the equation g(r, y) = 0 it follows from the implicit function theorem and the partial derivatives above that the existence of a solution (r∗, y∗) means that y can be expressed as a continuous strictly decreasing function of r in a neighborhood of r∗, i.e. ∂y/∂r = −(∂g/∂r)/(∂g/∂y) <-
 0 in a neighborhood of (r∗, y∗). Hence, r 7→ VaRβ(rZ1 − X1) is continuous and strictly decreasing. Hence, also r 7→ ESα(rZ1 − X1) is continuous and strictly decreasing. Since, ESα(−X1) > 0 and ESα(rZ1 − X1) ↓ −∞ as r → ∞, there exists a unique r > 0 such that ESα(rZ1 − X1) = 0.
Proof of Proposition 2.2. The monotonicity property of ρ (VaRα or ESα) means that if Ye ≥st Y , then ρ(Ye ) ≤ ρ(Y ) (see e.g. Remark 4.58 in F ̈ollmer & Schied [18] for the fact that ρ is monotone with respect to first-order stochastic dominance, and note that this order is invariant under convolution).
23

Suppose that Xe1 ≥st X1. Let Re0 be the unique solution to ρ(Re0Z1 − Xe1) = 0. Suppose that Re0 < R0. We will see that this assumption leads to a contradiction. By the monotonicity property of VaRα and ESα and the independence of X1 and Xe1 of Z1,
0 = ρ(Re0Z1 − Xe1) ≥ ρ(Re0Z1 − X1). (12)
Because of (12) and uniqueness of the solution r to ρ(rZ1 − X1) = 0,
ρ(Re0Z1 − X1) < 0. (13)
Because of monotonicity of ρ and the assumption Re0 < R0,
ρ(Re0Z1 − X1) ≥ ρ(R0Z1 − X1) = 0. (14)
Since (13) and (14) are contradictory we conclude that the assumption Re0 < R0 is false. Hence, Re0 ≥ R0 which completes the proof of the first statement. Suppose now that Ze1 ≥st Z1. Let Re0 be the unique solution to ρ(Re0Ze1 − X1) = 0. Suppose that Re0 > R0. We will see that this assumption leads to a contradiction. By the monotonicity property of VaRα and ESα and the independence of X1 and Xe1 of Z1,
0 = ρ(Re0Ze1 − X1) ≤ ρ(Re0Z1 − X1). (15)
Because of (15) and uniqueness of the solution r to ρ(rZ1 − X1) = 0,
ρ(Re0Z1 − X1) > 0. (16)
Because of monotonicity of ρ and the assumption Re0 > R0,
ρ(Re0Z1 − X1) ≤ ρ(R0Z1 − X1) = 0. (17)
Since (16) and (17) are contradictory we conclude that the assumption Re0 > R0 is false. Hence, Re0 ≤ R0 which completes the proof of the second statement.
Proof of Proposition 2.3. (i): The proof reuses some arguments from the proof of Proposition 1 in [10]. By Proposition 2.2, Xe1 ≥st X1 implies Re0 ≥ R0. Note that
(
Re0Z1 − Xe1)+ ≤st (R0Z1 − Xe1)+ + (Re0 − R0)Z1
≤st (R0Z1 − X1)+ + (Re0 − R0)Z1.
Hence, Ce0 − C0 ≤ (Re0 − R0)E[Z1]/(1 + η). Therefore,
Ve0 − V0 = Re0 − R0 + C0 − Ce0
≥ (Re0 − R0) 1 + η − E[Z1]
1 + η ≥ 0.
24

(ii) For Ze1 ≥st Z1 one has Re0 ≤ R0 (cf. Proposition 2.2). Then
(R0Z1 − X1)+ ≤st (Re0Z1 − X1)+ + (R0 − Re0)Z1
≤st (Re0Ze1 − X1)+ + (R0 − Re0)Z1.
Hence, C0 − Ce0 ≤ (R0 − Re0)E[Z1]/(1 + η). Therefore,
Ve0 − V0 = Re0 − R0 + C0 − Ce0
≤ (Re0 − R0) 1 + η − E[Z1]
1 + η ≤ 0.
Proof of Proposition 2.4. Set Z1 := Z1w and Ze1 := Z1we. Set R0 := R0w and Re0 := R0we. For Re0 ≤ R0 and any Z1, Ze1, X1,
(R0Z1 − X1)+ ≤ (Re0Z1 − X1)+ + (R0 − Re0)Z1
= (Re0Ze1 − X1)+ + (R0 − Re0)Z1 + ∆,
where
∆ := (Re0Z1 − X1)+ − (Re0Ze1 − X1)+.
Note that E[∆] = E[E[∆ | X1]] and that E[∆ | X1] ≤ 0 follows from Z1 ≤icx Ze1. Hence,
C0 ≤ Ce0 + (R0 − Re0)E[Z1]
1 + η + E[∆]
1 + η ≤ Ce0 + (R0 − Re0)E[Z1]
1+η .
Consequently,
Ve0 − V0 = Re0 − R0 + C0 − Ce0 ≤ (Re0 − R0) 1 + η − E[Z1]
1+η ≤0
given that 1 + η ≥ E[Z1].
Proof of Proposition 2.5. Note that R0wZ1w ≥icx R00Z10 = R00 is equivalent to that, for all β ∈ [0, 1],
Z1
β
F −1
Rw
0 (wS1+1−w)(u)du − (1 − β)R0
0 ≥ 0.
The inequality is equivalent to
Rw
0w 1
1−β
Z1
β
F −1
S1 (u)du + 1 − w ≥ R0
0
and the left-hand side is bounded from below by R0w(wE[S1] + 1 − w). More
over, R0wZ1w ≥icx R00Z10 implies C0w ≥ C00. Finally, R0w ≤ R00 and C0w ≥ C00
together imply V0w = R0w − C0w ≤ R00 − C00 = V00.
25

Proof of Proposition 3.1. Equation (7) is straight-forward. Define the convex function [0, ∞) ∋ x 7→ fρ(x) by
fρ(x) := ρ(xZ1 − X1) = γ − xμ + Φ−1(1 − α)
p
x2σ2 + ν2.
Then, using √x2σ2 + ν2 < xσ + ν, we get the following bounds for fρ(x):
γ + x(σΦ−1(1 − α) − μ) ≤ fρ(x) ≤ γ + νΦ−1(1 − α) + x(σΦ−1(1 − α) − μ).
It immediately follows that for μ ≤ σΦ−1(1 − α), fρ(x) > 0 for all positive x, settling (ii). On the other hand, for μ > σΦ−1(1−α), there exists an x > 0 with fρ(x) = 0. From (7) it follows that
(μ2 − σ2Φ−1(1 − α)2) R2
0 + (−2μγ) R0 + (γ2 − ν2Φ−1(1 − α)2) = 0,
which has two real solutions (ensured by the condition μ > σΦ−1(1 − α)). If γ ≤ νΦ−1(1 − α), then the quadratic equation has a unique positive solution R0 > 0. If γ > νΦ−1(1 − α), then the quadratic equation has two positive solutions R0 > 0. However, only R0 given by (8) solves fρ(x) = 0.
Proof of Proposition 3.2. Note that by Remark 3.1 we can write R0w =
c/h(w), where c := γ2 − ν2Φ−1(1 − α)2 and
h(w) := μwγ − Φ−1(1 − α)pγ2σ2w + μ2wν2 − σ2wν2Φ−1(1 − α)2. (18)
Since c > 0, w 7→ R0w is convex if w 7→ h(w) is concave (a decreasing convex function composed with a concave function is convex). Set
g(w) := (γ2 − ν2Φ−1(1 − α)2)σ2w2 + (wμ + 1 − w)2ν2 (19)
Then h(w) = (wμ + 1 − w)γ − Φ−1(1 − α)pg(w). Hence, h′′(w) < 0 if and only if (g′(w))2 − 2g(w)g′′(w) < 0. Direct computations show that this inequality holds if γ2 − ν2Φ−1(1 − α)2 > 0, i.e. without having to impose any additional conditions. Moreover,
dR0w
dw (0) = −c h′(0)
h2(0) = −c (μ − 1)(γ − νΦ−1(1 − α))
(γ − νΦ−1(1 − α))2
= −(μ − 1)(γ + νΦ−1(1 − α)) < 0.
From the expression of R0w in Remark 3.1, the equation R0w = R00 = γ +
νΦ−1(1 − α) implies that
0 = w(γ − νΦ−1(1 − α)) w(γ + νΦ−1(1 − α)) (μ − 1)2 − σ2Φ−1(1 − α)2
+ 2(μ − 1)νΦ−1(1 − α) .
26

If μ ≥ 1 + σΦ−1(1 − α), then there is no strictly positive solution w, which implies that R0w < R00 for all w > 0. If μ < 1 + σΦ−1(1 − α), then there is a strictly positive solution w which satisfies
w(γ + νΦ−1(1 − α)) σ2Φ−1(1 − α)2 − (μ − 1)2 = 2(μ − 1)νΦ−1(1 − α),
from which the conclusion follows using the convexity of w 7→ R0w.
Lemma A.1. If G ∼ N (0, 1) and e, f are constants, with f > 0, such that ρ(e+f G) = 0, then for any translation invariant and positively homogeneous risk measure ρ, one has
E[(e + f G)+] = e Φ(ρ(G)) + φ(ρ(G))
ρ(G) ,
where Φ and φ denote the standard normal distribution function and density function, and Φ = 1 − Φ.
Proof. The result follows from
E[(e + f G)+] =
Z∞
−e/f
(e + f g)φ(g)dg
= eΦ(−e/f ) + f
Z∞
−e/f
gφ(g)dg
= eΦ(−e/f ) + f φ(−e/f ),
From −e + f ρ(G) = 0 follow −e/f = −ρ(G) and f = e/ρ(G). Finally, Φ(−ρ(G)) = Φ(ρ(G)) and φ(ρ(G)) = φ(−ρ(G)).
Proof of Proposition 3.3. From Lemma A.1 it follows that
C0 = R0μ − γ
1 + η 1 − α + φ(Φ−1(1 − α))
Φ−1(1 − α) ,
where we used that Φ(ρ(G)) = Φ(Φ−1(1 − α)) = 1 − α. The Mill’s ratio bounds
z
z2 + 1 < Φ(z)
φ(z) < 1
z, z > 0
imply (for α < 1/2)
αΦ−1(1 − α) < φ(Φ−1(1 − α)) < α Φ−1(1 − α) + 1
Φ−1(1 − α) .
27

Proof of Proposition 3.4. From
0 = VaRα(Rw
0 Z1 − X1) = γ − Rw
0 μw + Φ−1(1 − α)
q
(R0w)2σ2w + ν2
follows that
Rw
0 μw − R0
0 = Φ−1(1 − α)
q
(R0w)2σ2w + ν2 − ν > 0.
Hence,
1+η
1 + δ(α) (Cw
0 − C0
0 ) = (Rw
0 μw − R0
0) > 0.
Consequently, C0w > C00.
Proof of Proposition 4.1. Note that VaRα(R0Z1 − X1) = 0 is equivalent to
1 − α = P(X1 − R0Z1 ≤ 0) = P(X1/Z1 ≤ R0).
Since X1/Z1 ∼ LN(mx − mz, sz2 + s2x) the expression for R0 follows. The expression for V0 follows from (2) and (3).
References
[1] H. Albrecher and M. Dacorogna. Allocating capital to time: Introducing credit migration for measuring time-related risks. Scandinavian Actuarial Journal, 2025, to appear.
[2] H. Albrecher, K.-T. Eisele, M. Steffensen, and M. V. Wu ̈thrich. On the cost-of-capital rate under incomplete market valuation. Journal of Risk and Insurance, 89(4):1139–1158, 2022.
[3] P. Artzner, K.-T. Eisele, and T. Schmidt. Insurance-finance arbitrage. Mathematical Finance, 34:739–773, 2024.
[4] K. Barigou, V. Bignozzi, and A. Tsanakas. Insurance valuation: A twostep generalised regression approach. ASTIN Bulletin, 52(1):211–245, 2022.
[5] K. Barigou and J. Dhaene. Fair valuation of insurance liabilities via mean-variance hedging in a multi-period setting. Scandinavian Actuarial Journal, 2019(2):163–187, 2019.
[6] L. Delong, J. Dhaene, and K. Barigou. Fair valuation of insurance liability cash-flow streams in continuous time: Theory. Insurance: Mathematics and Economics, 88:196–208, 2019.
28

[7] M. Denuit, J. Dhaene, M. Goovaerts, and R. Kaas. Actuarial theory for dependent risks: measures, orders and models. John Wiley & Sons, 2006.
[8] J. Dhaene, B. Stassen, K. Barigou, D. Linders, and Z. Chen. Fair valuation of insurance liabilities: Merging actuarial judgement and marketconsistency. Insurance: Mathematics and Economics, 76:14–27, 2017.
[9] N. Engler and F. Lindskog. Approximations of multi-period liability values by simple formulas. Insurance: Mathematics and Economics, 123:103112, 2025.
[10] H. Engsner, M. Lindholm, and F. Lindskog. Insurance valuation: A computable multi-period cost-of-capital approach. Insurance: Mathematics and Economics, 72:250–264, 2017.
[11] H. Engsner, F. Lindskog, and J. Thøgersen. Multiple-prior valuation of cash flows subject to capital requirements. Insurance: Mathematics and Economics, 111:41–56, 2023.
[12] European Union. Directive 2009/138/EC (Solvency II). Official Journal of European Union, 335, 2009.
[13] European Union. Commission delegated regulation (EU) 2015/35. Official Journal of the European Union, 12, 2015.
[14] European Union. Directive 2025/2 amending Directive 2009/138/EC. Official Journal of the European Union, 2, 2025.
[15] Federal Office of Private Insurance. Technical document on the Swiss Solvency Test. Technical report, Federal Office of Private Insurance, Switzerland, 2006.
[16] D. Filipovi ́c, R. Kremslehner, and A. Muermann. Optimal investment and premium policies under risk shifting and solvency regulation. Journal of Risk and Insurance, 82(2):261–288, 2015.
[17] A. Floreani. Risk margin estimation through the cost of capital approach: Some conceptual issues. The Geneva Papers on Risk and Insurance: Issues and Practice, 36:226–253, 2011.
[18] H. F ̈ollmer and A. Schied. Stochastic finance. An introduction in discrete time. De Gruyter Textb. Berlin: de Gruyter, 4th revised edition edition, 2016.
[19] H. Jones. EU agrees to ease capital rules for insurers to boost investment. Available at https://www.reuters.com/business/finance/euagrees-ease-capital-rules-insurers-boost-investment-2023-12-13/, 2023.
29

[20] P. Koch-Medina and C. Munari. Market-Consistent Prices. Springer, Heidelberg, 2020.
[21] S. J. Mildenhall and J. A. Major. Pricing Insurance Risk: Theory and practice. John Wiley & Sons, 2022.
[22] C. M ̈ohr. Market-consistent valuation of insurance liabilities by cost of capital. ASTIN Bulletin, 41(2):315–341, 2011.
[23] K. Oberpriller, M. Ritter, and T. Schmidt. Robust asymptotic insurance-finance arbitrage. European Actuarial Journal, 14(3):929963, 2024.
[24] A. Salahnejhad Ghalehjooghi and A. Pelsser. A market-and timeconsistent extension for the EIOPA risk margin. European Actuarial Journal, 13(2):517–539, 2023.
[25] R. Salzmann and M. V. Wu ̈thrich. Cost-of-capital margin for a general insurance liability runoff. ASTIN Bulletin, 40(2):415–451, 2010.
30

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:33.364Z
- **Text Length:** 54976 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 30 of 30
