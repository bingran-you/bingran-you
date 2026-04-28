# PDF Document: Albrecher and Zhu - 2025 - On effects of present-bias on carbon emission patterns towards a net zero target.pdf

**File Path:** Albrecher and Zhu - 2025 - On effects of present-bias on carbon emission patterns towards a net zero target.pdf

**Processed Date:** 2026-02-10T18:16:07.563Z

**File Size:** 8526.80 KB

**Total Pages:** 42

**Extracted Pages:** 42

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3541

**Title:** On effects of present-bias on carbon emission patterns towards a net zero target

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

On effects of present-bias on carbon emission patterns
towards a net zero target
Hansjo ̈rg Albrecher∗ Jinxia Zhu†
Abstract
This paper explores the optimal policy for using an allocated carbon emission budget over time with the objective to maximize profit, by explicitly taking into account present-biased preferences of decision-makers, accounting for time-inconsistent preferences. The setup can be adapted to be applicable for either a (present-biased) individual or also for a company which seeks a balance between production and emission schedules. In particular, we use and extend stochastic control techniques develope-
d for optimal dividend strategies in insurance risk theory for the present purpose. The approach enables a quantitative analysis to assess the effects of present-bias, of sustainability awareness, and the efficiency of a potential carbon tax in a simplified model. In some numerical implementations, we illustrate in what way a higher degree of present-bias leads to excess emission patterns, while placing greater emphasis on sustainability reduces carbon emissions. Furthermore, we show that for low -
levels of carbon tax, its increase has a positive effect on curbing emissions, while beyond a certain threshold that marginal impact gets considerably weaker.
Keywords: Carbon emissions, present bias, stochastic quasi-hyperbolic discounting, sustainability, carbon tax, transition risk
1 Introduction
Following the Paris agreement within the United Nations Framework Convention on Climate Change (UNFCCC) aiming to reduce global greenhouse gas emissions (see e.g. Popovski (2018)), many countries have recently committed to set a time horizon until which a net zero target in terms of carbon emissions should be achieved. In order to reach such a target in a realistic way, companies and individuals will have to (and in some cases already do) receive carbon emission budgets over a given time horizon, -
and it is an interesting question how such budgets can and will influence the behaviour of individuals and companies which are a priori profitmaximizing entities. Concretely, how will a firm determine its production and – correspondingly – carbon emission schedule, if it is given an aggregate emission budget constraint? How will a (rational) individual decide on its carbon-intensive consumption pattern, if it is given an aggregate emission budget constraint? And how does a certain level of carbon -
tax enforced by a government steer or incentivize this process towards a net-zero target? There are many directions from which answers to such questions may be sought, and there is a strong need to increase the understanding of underlying mechanisms and incentives, see e.g. Saleh et al. (2025); Chekriy et al. (2025). In this paper we would like to contribute to this topic by relating it to optimal dividend/consumption problems in insurance and corporate finance, and adopt and
∗Department of Actuarial Science, Faculty of Business and Economics, and Expertise Center for Climate Extremes, University of Lausanne, and Swiss Finance Institute, Switzerland. Email: hansjoerg.albrecher@unil.ch †School of Risk and Actuarial Studies, University of New South Wales, Sydney, Australia. Email: jinxia.zhu@unsw.edu.au. (Corresponding author).
1
arXiv:2510.27384v1 [q-fin.MF] 31 Oct 2025

Present-Bias Effects on Carbon Emissions 2
extend techniques developed there for the present purpose. In particular, we want to address the above questions in a relatively simple model to better understand the effects of presentbiasedness in this context. We provide a framework that allows to accommodate both the situation of a company (where monetary profitability is linked to the amount of carbon-intensive production) and the situation of an individual (where profitability is rather measured in terms of carbon-intensive consumption). In -
either case the decision-maker is given a finite ’budget’ of aggregate available carbon emissions and is subject to a certain degree of present-biasedness. By establishing and exploiting a link to stochastic control techniques for optimal dividend problems in insurance risk theory, we develop a framework that leads to quantitative results in terms of optimal behavior given the objective function and (carbon budget) constraint. Within the chosen simple model assumptions, this also allows to study t-
he effect of the governmental measure of a carbon tax towards an aggregate carbon emission target. In particular, we intend to quantify the sensitivity of the results with respect to the degree of present-bias of the decisionmaker, and compare it to the values in the absence of present-bias. In terms of the maximization criterion, we consider the maximization of profit (or consumption benefit in the case of an individual), but also allow for a term in the objective function that reflects a certain-
 degree of social responsibility and sustainability awareness (see e.g. Korn (2025); Korn and Nurkanovic (2025) for other ways to incorporate sustainability considerations in profitability criteria). In any inter-temporal choice problem, discounting is one of the key factors that influence the optimal strategy. Traditionally, exponential discounting is used, where the time preference for a payment (or consumption token) occurring at time t can be fully captured by a single discount rate at that ti-
me. In such a case, the optimization problem is time-consistent, and the optimal decision regarding actions at time t will only depend on available resources at that moment, regardless of the time s < t at which this decision was taken. That is, an ’optimal’ decision made at time s1 for an action at a future time t > s1 will be preferred by the decision maker at any later time s2 > s1 as well. Most of the literature in optimal control relies on exponential discounting to calculate the present valu-
e of future payments (or monetary translations of consumption opportunities). This is usually done by assuming time-consistent preferences and employing a constant discount rate (see e.g. Schmidli (2007); Albrecher and Thonhauser (2009); Azcue and Muler (2014) for surveys in the field of dividend strategies). In rare cases, a stochastic discount rate (Eisenberg (2015); Reppen et al. (2020)) is employed. However, empirical studies often observe patterns of preference reversals. Laibson (1998) descr-
ibes “a conflict between today’s preferences and the preferences which will be held in the future”, and the exponential discount functions cannot capture such a tendency. In many practical situations, decisionmakers are present-biased, preferring smaller but earlier rewards to larger but later ones, in particular when such earlier rewards are near. Only when the time until such rewards is far distant, such preferences may be flipped, cf. for instance (Palacios-Huerta and P`erez-Kakabadse (2011)). -
Laibson (1998) noted already that hyperbolic discounting may be used to model such preferences, and it has been shown to outperform exponential discounting in certain empirical studies. Laibson (1998) used a quasi-hyperbolic discount function for discrete-time models, where an additional constant discount factor is introduced in the utility of all cash-flows in future periods regardless of timing, see also Phelps and Pollak (1968). Such a quasi-hyperbolic discount function mimics the quantitative -
properties of a hyperbolic discount function while maintaining analytical tractability. Harris and Laibson (2013) then proposed a stochastic quasihyperbolic discount function as a continuous-time model of non-exponential discounting, where an additional discount factor is added for future periods. It is this latter model that we will adopt for our present study. In this paper, we propose a simple continuous-time dynamic model framework based on a general linear diffusion to investigate the optimal-
 production and carbon emission strategy for a firm with an allocated emission budget, taking present-bias into account. As mentioned above, the setup can also be interpreted for the situation of an individual taking decisions on

Present-Bias Effects on Carbon Emissions 3
carbon-intensive consumption, but we will formulate the paper for the context of a firm, and only add some interpretations for the situation of an individual in the concluding section. Concretely, the remaining emission budget will be modeled as a stochastic process over time with a given initial allocation, a drift term representing a trend (e.g., projected unavoidable minimal emissions in the production process), and a volatility term reflecting fluctuations (which may e.g. stem from remaining u-
ncertainties in establishing the present carbon balance). Effective carbon emissions act as a deduction term from this process in the dynamics, reducing the available remaining budget as production continues. In the paper we consider a general form for the drift and volatility terms, allowing for various scenarios. The company develops a production/emission schedule aimed at maximizing the present value of total expected future profit up to a fixed terminal time, plus a term that rewards for not y-
et having used up the budget at any time until depletion, which can be interpreted as a contribution to sustainability considerations of society. In order to account for present-biased preferences, we use stochastic quasi-hyperbolic discounting rather than standard exponential discounting for determining the present value of future profits and the reward term. The weighting of the reward term in the objective function then formalizes the balancing between profit maximization and sustainability con-
siderations. Under time-inconsistent preferences (such as the stochastic quasi-hyperbolic discounting considered in this paper), there are typically two alternative assumptions about decision-makers: naive agents and sophisticated agents (Grenadier and Wang (2007)). The naive agent assumes that future selves act according to the preferences of the current self, which is possible if there is a commitment mechanism that ensures that future selves commit to the strategy chosen by the current self. Th-
e sophisticated agent, in contrast, “correctly foresees that their future selves act according to their own preferences” (Grenadier and Wang (2007)), see also Frederick et al. (2002). In the sophisticated agent case, there is no optimal solution, as a solution that is optimal in the eyes of the decision-maker at time t will not remain optimal later. Conflicts arise unless there are pre-commitment mechanisms ensuring that an optimal decision made earlier will be upheld by future decision-makers, ev-
en if it is no longer optimal for them to do so (Strotz (1956)). In this paper, we consider sophisticated decision makers and assume that there are no commitment devices. In other words, we consider scenarios where the early selves do not have a technology to commit the actions of later selves. This is a common and realistic scenario, see e.g. Iverson and Karp (2021). Correspondingly, we formulate the control problem as an intra-personal subgame and seek equilibrium solutions (Harris and Laibson (-
2013) and Maskin and Tirole (2001)). We establish the existence of equilibrium strategies and equilibrium solutions theoretically and provide a procedure for determining an equilibrium solution and the associated equilibrium strategy. We further investigate the impact of the degree of present-bias on the agent’s behavior and the respective carbon emission consequences. We find the intuitive result that a higher degree of present-bias leads to higher emissions, and earlier depletion of the carbon a-
llowance. Additionally, we analyze the role of the sustainability term in shaping the company’s carbon emission behavior and explore how a carbon tax might affect the company’s emission decisions. Naturally, higher sustainability awareness curbs production and reduces carbon emissions, just as imposing a carbon tax does. The results of this paper contribute to understand how the two effects are related, and which level of carbon tax replaces which level of sustainability awareness to lead to the s-
ame result. In addition, it will turn out that once the carbon tax reaches a certain threshold, its effectiveness begins to decline. We consider the carbon tax as being determined exogeneously by policymakers (social planners), and then the individual firms’ behavior is studied in response to that. The carbon tax can then be interpreted as the social cost of carbon. Various suggestions exist in the literature for determining the appropriate or optimal social cost of carbon, with a common approach -
based on well-established Integrated Assessment Models (IAMs), which integrate climate and economic systems. For example, one of the earliest and most frequently used IAMs for climate change is

Present-Bias Effects on Carbon Emissions 4
the DICE/RICE family of models (see Nordhaus (2018) for details on its development). Most of these IAM studies assume exponential discounting, typically at a constant discount rate. Fries and Quante (2024) extended the DICE model to incorporate a stochastic discount rate, which technically remains a form of exponential discounting. See also Colaneri et al. (2024) for another type of stochastic control problem where a company decides on investments in carbon abatement technologies in view of carbon-
 tax costs, and Bourgey et al. (2024) for optimizing the emission level alongside constraints on emission mitigation scenarios, additionally taking into account credit risk. Our approach based on stochastic quasi-hyperbolic discounting can therefore also be interpreted as an extension of certain aspects of that literature to the explicit consideration of present-biasedness. Since stochastic quasi-hyperbolic discounting approximates hyperbolic discounting, and the latter is often empirically found -
to better represent individuals’ true time preferences, cf. Frederick et al. (2002), a contribution of this paper is also to offer a quantitative approach to systematically understand the effects of that deviation from exponential discounting for questions of that part of social planning. Note that the choice of appropriate discount rates related to climate policy is a subject of on-going political debate, all the way since the Stern Review (Stern (2006)). We will not delve into respective discuss-
ions here, and the discount rate values applied in the numerical section are only for illustrative purposes. Our aim is to contribute – in a simplified model with explicit formulas for the optimal strategies – to the understanding of how present-biasedness affects the decision-making of profit-maximizing rational agents (who are not social planners), which may also provide insights for social planners to develop effective policies towards specific targets. On the technical side, we deal with a reg-
ular control equilibrum problem with stochastic quasi-hyperbolic discounting under a general linear diffusion framework. For a similar problem with capital injections, but without a sustainability component and for a different type of discounting (pseudo-exponential discounting) as well as constant drift and volatility coefficients only, see Hu and Zhou (2025). For singular control problems under other non-exponential discounting functions, see also Zhao et al. (2014) and Li et al. (2016), and for-
 another way to formalize time-inconsistency see Strini and Thonhauser (2023). Finally, equilibrium strategies for singular (rather than regular as in this paper) control under stochastic quasi-hyperbolic discounting have been identified in Chen et al. (2014) and Chen et al. (2016) for a compound Poisson model with negative jumps of exponential type, in Li et al. (2015) for a Brownian risk model, and in Zhu et al. (2020) for a linear growth restricted diffusion process. The remainder of the paper -
is organized as follows. Section 2 defines the model setup, introduces exponential and quasi-hyperbolic discounting and defines the type of optimal strategies we are investigating. Section 3 derives these optimal strategies for exponential discounting, and spells out the explicit formulas for the Brownian model in more detail. Section 4 then establishes the equlibrium solution for the case of stochastic quasi-hyperbolic discounting, which is the core for the study of the present-bias effects consi-
dered in this paper. Section 5 deals with the determination of the probability of early depletion of the carbon budget when following the optimal strategy. Section 6 is then dedicated to numerical illustrations of the impact of present-bias, the level of social responsability and the amount of carbon tax on the emission schedule for a Brownian motion model with constant diffusion coefficients. Detailed interpretations of the interplay of various factors are given. In Section 7, it is then shown th-
at the analysis can also be extended to more general diffusion models, including an Ornstein-Uhlenbeck type process for the time-development of the available carbon budget. Finally, Section 8 concludes. All mathematical derivations and proofs are moved to the Appendix.
2 Problem Formulation
Let (Ω, F , {Ft; t ≥ 0}, P) be a filtered complete probability space with a right-continuous filtration {Ft; t ≥ 0}. Consider a firm whose production depends on its energy consumption, and

Present-Bias Effects on Carbon Emissions 5
let Pt represent the (monetary) instantaneous production profit at time t. We assume that Pt = γ(lt + l) for some γ > 0, where lt + l is the instantaneous emission rate at time t, with l representing the baseline emission rate required to maintain minimal production activity, and lt representing the excess emission rate for additional production above that minimum level. Since the baseline emission rate l can not be avoided in any case, the control to be considered in this paper is the excess carb-
on emission L = {Lt = R t
0 ls ds; t ≥ 0} up to time t. Let cind Pt represent the physical cost for producing Pt and ctax(lt + l) the carbon tax paid for the resulting emission. Then the total cost, which equals the sum of production cost and carbon tax, is (cind γ + ctax)(lt + l). Assume now that the firm is allocated with a total (CO2) emission allowance (endowment)1 x0 and let XtL represent the remaining emission allowance at time t according to the general diffusion dynamics
XL
t := x0 +
Zt
0
μ(Xs) ds +
Zt
0
σ(Xs) dWs −
Zt
0
(l + ls) ds, t ≥ 0. (2.1)
The drift term μ(·) could be zero, or negative in a deteriorating situation, or also positive, e.g. due to technological advances and increasing carbon capture capabilities over time. Here, Wt is a standard Brownian motion. Let F W represent the filtration generated by {Wt; t ≥ 0}. The functions μ(·) and the volatility σ(·) are assumed to be Lipschitz continuous, satisfying a linear condition, that is, there exists a constant C > 0 such that μ2(x) + σ2(x) ≤ C(1 + x2) for all x. As proven in Gikhma-
n and Skorokhod (1972), these conditions guarantee the existence and uniqueness of a strong solution to (2.1) for each x0 and each F W -adapted, nondecreasing, left-continuous process L, see also Shreve et al. (1984). We further assume that σ(·) is nonvanishing and 0 ≤ ls ≤ l ̄, where l ̄ is a positive constant. Additionally, we impose the restriction μ′(x) ≤ δ for x ≥ 0, where δ > 0 is the exponential discount rate discussed further below. This latter assumption will serve mathematical tractabili-
ty, but it also has practical relevance, as one would not expect the growth rate of available carbon allowance to increase significantly over time. With μ(x) = μ(x) − l we can simplify (2.1) to
XL
t := x0 +
Zt
0
μ(Xs) ds +
Zt
0
σ(Xs) dWs − Lt, t ≥ 0. (2.2)
Let
τ L = inf{t ≥ 0 : XL
t ≤ 0} (2.3)
denote the emission allowance depletion time when applying emission schedule L. In this paper we are interested in the optimal emission schedule for the company that maximizes the expected present value of profit. At time t, the objective function to be maximized therefore is
PE(x, t; L) = E
"
Z τL
t
D(t, s) (γ − β)(ls + l) + Λ ds Xt = x
#
, (2.4)
where D(t, s) is the discounting function for calculating the present value at time t of cashflows at future times s ≥ t and β = cind γ + ctax. While the focus is on maximizing profit, we also introduce a constant rate Λ > 0 that rewards for the carbon allowance to not be depleted early (i.e., having the depletion time τ L being larger). It can be interpreted as an intangible utility term (e.g., sustainability value). This will allow to consider the tradeoff between profitability, costs and ‘socia-
l responsibility’ represented through Λ (cf. Thonhauser and Albrecher (2007)
1The total emission allowance x0 could for instance be the total emission budget allocated to the company according to a net-zero target around 2050 set by the Intergovernmental Panel on Climate Change.

Present-Bias Effects on Carbon Emissions 6
for the introduction of such a term for dividend problems). With Λ := Λ + (γ − β)l, we can simplify (2.4) to
PE(x, t; L) = E
"
Z τL
t
D(t, s) (γ − β)ls + Λ ds Xt = x
#
. (2.5)
2.1 Exponential discounting
As a benchmark model, and also as an intermediate result needed in the derivations, we will first consider exponential discounting, that is D(t, s) = e−δ(s−t) for some constant rate δ > 0. In this case the objective function in (2.5) at time 0 reads as
PE(x; L) =E
Z τL
0
e−δs((γ − β)ls + Λ) ds X0 = x . (2.6)
Correspondingly, the optimization goal is to look for a schedule of excess emissions L that maximizes PE(x; L), leading to the value function
V E(x) = sup
L∈Π
PE(x; L) = sup
L∈Π
E
Z τL
0
e−δs((γ − β)ls + Λ) ds X0 = x , (2.7)
where Π denotes the set of admissible strategies, which will be specified later.
2.2 Stochastic quasi-hyperbolic discounting
If the decision maker is present-biased, we use the following stochastic quasi-hyperbolic discount function introduced in Harris and Laibson (2013):
D(t, s) =
(
e−δ(s−t), t < s < t + η,
α e−δ(s−t), s ≥ t + η, (2.8)
where η represents the (random) duration of the current regime and 0 ≤ α ≤ 1 is a constant. That is, cashflows during the present period are valued using exponential discounting at force δ, while cashflows emerging in the future period are discounted by a smaller value. One can interpret this stochastic discounting framework in the way that there is a sequence of decision makers, to each of whom time is divided into two intervals, the present and the future, and each decision maker is present-bias-
ed. The present will last for a random length of time which we model as an exponential random variable with parameter λ > 0, independent of the current carbon allowance. All cash-flows in the present period are discounted exponentially with force δ and the cash-flows in the future period are then discounted more strongly with additional factor α. Assume that the decision maker at time 0 is called “self 0”. The present period for “self 0” starts at time 0 and ends at time η0. “Self 0” exercises con-
trol for her present period and is present-biased. At the end of “self 0”’s present period, a new self, “self 1”, starts to take over decision making. “Self 1” is also present-biased and she can only exercise control during her own present period, which lasts from time s1 := η0 to s1 + η1. Acoordingly, the present period of “self n” (n = 1, 2, 3, · · · ), also present-biased, is from time sn to sn + ηn. Each self takes decisions according to D(s, t) given in (2.8). More specifically, if we use Dn(-
t) to represent the present value at time sn of one dollar payable at time t from “self n”’s perspective, then Dn(t) = e−δ(t−sn) for sn ≤ t < sn + ηn and Dn(t) = αe−δ(t−sn) for t ≥ sn + ηn. Although each self controls the emission schedule only during her present period, she does so keeping in mind the total production profit, i.e. the profit of the present period as well as the one in future periods. Different selves have conflicting preferences as they value the

Present-Bias Effects on Carbon Emissions 7
production profit and survival utility during a particular period differently. We assume that there are no commitment mechanisms (in the sense that later selves are not committed to what earlier selves considered optimal), and that the decision-maker is sophisticated and rational. In addition, she can correctly foresee her future actions. For this intra-personal game we will consider Markov policies only, and seek a Markov-perfect equilibrium (MPE). That is, we restrict the admissible strategies t-
o stationary Markov-perfect equilibrium (MPE) policies. An emission schedule L = {lt; t ≥ 0} is said to be admissible if it is a Markov policy with 0 ≤ ls ≤ l ̄. We use Π to denote the set of admissible strategies.
Let π(n,→)(L,L ̃) represent the strategy where “self n” adopts L and the future selves adopt
L ̃. Let π(n,→)(L,L ̃)
t represent the cumulative amount of emissions from time sn to t under
π(n,→)(L,L ̃). Then, π(n,→)(L,L ̃)
sn− = 0, dπ(n,→)(L,L ̃)
t = lt dt for t ∈ [sn, sn+1) and dπ(n,→)(L,L ̃)
t = l ̃t dt for t ≥ sn+1. The reward to “self n” is the expected present value at time sn of the entire future net production profit up to the time of depletion plus the reward from the Λ-term. Given XsLn− = x, for any x ≥ 0, the objective function for “self n” with pair (L, L ̃) is
Pn(x; L, L ̃)
= Esn,x
Z τ π(n,→)(L,L ̃)
sn ∧(sn+ηn)
sn
e−δ(t−sn)(γ − β)lt dt
+ I {sn + ηn ≤ τ π(n,→)(L,L ̃)
sn }
Z τ π(n,→)(L,L ̃)
sn
sn+ηn
αe−δ(t−sn)(γ − β)l ̃t dt
+
Z τ π(n,→)(L,L ̃)
sn ∧(sn+ηn)
sn
e−δ(t−sn)Λ dt + I {sn + ηn ≤ τ π(n,→)(L,L ̃)
sn }
Z τ π(n,→)(L,L ̃)
sn
sn+ηn
αe−δ(t−sn)Λ dt ,
(2.9)
where I{·} is the indicator function and τ π(n,→)(L,L ̃)
sn is the (potential) depletion time during the
active period of “self n” when following the strategy (L, L ̃). The first term inside the expectation above represents the discounted net amount of production profit in the present period, where all the cashflows are discounted with force δ, and the second term is the total discounted net amount of production profits in all the future periods up to the time of depletion, where all the cashflows are discounted by the force δ and then further discounted by the factor α. The last two terms represent -
the benefit of surviving up to depletion time represented through the reward rate Λ. Let P(x; L, L ̃) := P0(x; L, L ̃) and πL,L ̃ := π(0,→)(L,L ̃). The objective of “self n” is to find a Markov strategy L∗ (a MPE policy that maximizes the above expected reward with respect to L in the sense that
Pn(x; L∗, L∗) = sup
L∈Π
Pn(x; L, L∗) (2.10)
subject to the production constraint). Note the problem is stationary, although the preferences of the decision makers are time-inconsistent. Then we only need to solve the game problem based on the reward P = P0. That is, we are seeking an admissible strategy L∗ such that
P(x; L∗, L∗) = sup
L∈Π
P(x; L, L∗). (2.11)
Indeed, if a MPE strategy exists that satisfies (2.10) for all n, then no self has an incentive to deviate from it, given that all future selves adopt it as well.

Present-Bias Effects on Carbon Emissions 8
3 Optimal Solutions under Exponential Discounting
Under exponential discounting, the mathematical formulation of the optimization problem is similar to (and a slight extension of) the problem in Zhu (2015), where there was no Λ term. In the following we accordingly adapt the technique developed in that reference. One easily derives the Hamilton-Jacobi-Bellman (HJB) equation
sup
l∈[0,l ̄]
σ2(x)
2 g′′(x) + μ(x)g′(x) − δg(x) + l(γ − β − g′(x)) + Λ = 0, g(0) = 0. (3.1)
If the value function V E is sufficiently smooth, then a standard verification theorem shows that V E is a classical solution to the HJB equation (3.1). We establish the existence of a classical solution by constructing one explicitly, using a class of auxiliary functions defined below. To that end, let us consider a threshold strategy for any given threshold b ≥ 0 as
Lb := {l ̄· I{Xt ≥ b}; t ≥ 0} (3.2)
and denote its corresponding value function under exponential discounting as
VE
b (x) := PE(x; Lb). (3.3)
The function V E
b (x) will be instrumental in searching for a solution, both under exponential and stochastic quasi-hyperbolic discounting considered later.
Lemma 3.1 The function V E
b (x) solves the initial value problem
σ2(x)
2 g′′(x) + μ(x)g′(x) − δg(x) + Λ = 0 for 0 < x < b, (3.4)
σ2(x)
2 g′′(x) + (μ(x) − l ̄)g′(x) − δg(x) + l ̄(γ − β) + Λ = 0 for x ≥ b, (3.5)
g(0) = 0, (3.6)
and has the form
VE
b (x) =
(
C1(b)(v1(x) − v2(x)) + B1(x), 0 ≤ x < b,
C3(b)v3(x) + u(x), x ≥ b, (3.7)
where
C1 (b) = (B1(b) − u(b))v′3(b) − (B′1(b) − u′(b))v3(b)
(v′1(b) − v′2(b))v3(b) − (v1(b) − v2(b))v′3(b) , (3.8)
C3(b) = (u′(b) − B′1(b))(v1(b) − v2(b)) − (u(b) − B1(b))(v′1(b) − v′2(b))
(v′1(b) − v′2(b))v3(b) − (v1(b) − v2(b))v′3(b) . (3.9)
The functions v1(·) and v2(·) are the solutions to σ2(x)
2 g′′(x) + μ(x)g′(x) − δg(x) = 0, with
the respective sets of initial conditions: v1(0) = 1, v′1(0) = 1, and v2(0) = 1, v′2(0) = −1. The
function u(x) is the unique bounded solution to σ2(x)
2 g′′(x)+(μ(x)−l ̄)g′(x)−δg(x)+Λ+(γ−β)l ̄ = 0, on [0, ∞) with initial condition g(0) = 0. The function v3(·) is the unique bounded solution
to σ2(x)
2 g′′(x) + (μ(x) − l ̄)g′(x) − δg(x) = 0 on (0, ∞) with initial condition g(0) = 1. Additionally, we have
B1(x) = 2Λ
Zx
0
v1(x)v2(y) − v2(x)v1(y)
v1(y)v′2(y) − v2(y)v′1(y) dy, (3.10)
which is the solution to σ2(x)
2 g′′(x) + μ(x)g′(x) − δg(x) + Λ = 0 under B1(0) = 0 and B′1(0) = 0.

Present-Bias Effects on Carbon Emissions 9
We can show that the value function V E(x) has the following property.
Lemma 3.2 The function V E(x) is nonnegative, increasing and has an upper bound (γ−β)l ̄+Λ
δ.
Moreover, we can derive an expression for the value function under exponential discounting as follows.
Theorem 3.3 The value function under exponential discounting is given by:
V E(x) =
(
C1 (b∗
E)(v1(x) − v2(x)) + B1(x), 0 ≤ x < b∗
E,
C3(b∗
E)v3(x) + u(x), x ≥ b∗
E,
where C1(·), C3(·), v1(·), v2(·), v3(·), u(·), and B1(·) are defined in Lemma 3.1, and
b∗
E = inf b > 0 : C3(b)v′
3(b) + u′(b) ≤ γ − β . (3.11)
It can be shown that b∗
E < ∞, and that if μ(0) < 0, then b∗
E ≤ b0, where
b0 = inf b ≥ 0 : C1 (b) + Λ
2μ(0) > 0 . (3.12)
Finally, an optimal admissible strategy that attains the best performance according to the performance functional PE is Lb∗
E := {l ̄· I{Xt ≥ b∗
E}; t ≥ 0}, where b∗
E is defined in (3.11).
The above theorem shows how to determine the value function and the optimal strategy. In this regard, the key is to compute the functions v1(·), v2(·), v3(·), and u(·). Based on these functions, we then compute C1 (·), C3(·), and B1(·). Analytical solutions are available for some cases, while for others, numerical solutions are required. Determining v1(·) and v2(·) numerically involves solving two second-order ordinary differential equations (ODEs) numerically. Similarly,
B1(x) is a particular solution to σ2(x)
2 g′′(x) + μ(x)g′(x) − δg(x) + Λ = 0 with B1(0) = 0
and B′1(0) = 0, which again can be solved using standard numerical procedures. However, determining v3(·) and u(·) numerically from the ODEs is more challenging because it involves finding bounded solutions on infinite intervals. To overcome this, we convert the problem to a bounded interval and identify the boundary values at both ends. The following result (with the proof provided in Appendix A) is key to identifying the boundary values mentioned.
Lemma 3.4 For the functions, v3(·) and u(·) defined in Theorem 3.3, we have
v3(x) = E e−δTˆx , and u(x) = E
Z Tˆx
0
e−δs((γ − β)l ̄+ Λ) ds , (3.13)
where Ytx is a stochastic process and Tˆx is a stopping time defined by
Yx
t =x+
Zt
0
(μ(Y x
s ) − l ̄)ds +
Zt
0
σ(Y x
s )ds, s > 0, (3.14)
Tˆx = inf{t ≥ 0 : Y x
t ≤ 0}. (3.15)
Moreover, the following limiting results hold:
xli→m∞ v3(x) = 0, xli→m∞ u(x) = (γ − β)l ̄+ Λ
δ . (3.16)
From Theorem 3.3 we know that u is the unique bounded solution to σ2(x)
2 g′′(x) + (μ(x) −
l ̄)g′(x) − δg(x) + l ̄(γ − β) + Λ = 0 on (0, ∞) with the initial value g(0) = 0. This, combined with
(3.16), implies that u(x) is the unique solution with u(0) = 0 and limx→∞ u(x) = (γ−β)l ̄+Λ
δ. Hence, u can be numerically determined by choosing a sufficiently large number, say x ̄, and
then solving the second-order ODE σ2(x)
2 g′′(x) + (μ(x) − l ̄)g′(x) − δg(x) + l ̄(γ − β) + Λ = 0
with boundary conditions g(0) = 0 and g(x ̄) = (γ−β)l ̄+Λ
δ . Similarly, v3 can be computed by selecting a sufficiently large number, say y ̄, and then solving the boundary value second order
ODE σ2(x)
2 g′′(x) + (μ(x) − l ̄)g′(x) − δg(x) = 0 with g(0) = 1 and g(y ̄) = 0.

Present-Bias Effects on Carbon Emissions 10
3.1 The Brownian motion model
If μ(x) ≡ μ and σ(x) ≡ σ > 0 are constant, the expressions simplify. Indeed, applying the main theorems from above to dX L
t = (μ − l − lt)dt + σdWt, t ≥ 0, (3.17)
we obtain (see Appendix B for the derivations):
VE
b (x) =

     
     
eθ1x − e−θ2x)I1(b) − 2
σ2
eθ1 x −1
θ1(θ1+θ2) + 2
σ2
1−e−θ2 x
θ2(θ1+θ2) Λ
+(eθ1x − e−θ2x)I2(b), 0 ≤ x < b,
e−θ4xI3(b) + 2
σ2
1
θ3(θ3+θ4) + 2
σ2
1−e−θ4 x
θ4(θ3+θ4) Λ
+e−θ4xI4(b) + 2((γ−β)l ̄)
σ2
1
θ3(θ3+θ4) + 2((γ−β)l ̄)
σ2
1−e−θ4 x
θ4(θ3+θ4) , x ≥ b,
(3.18)
where
θ1 = −μ + pμ2 + 2σ2δ
σ2 , θ2 = μ + pμ2 + 2σ2δ
σ2 , (3.19)
θ3 =
−(μ − l ̄) +
q
(μ − l ̄)2 + 2σ2δ
σ2 , θ4 =
(μ − l ̄) +
q
(μ − l ̄)2 + 2σ2δ σ2 , (3.20)
I1(b) =
2(θ2(θ1+θ4)eθ1b+θ1(θ4−θ2)e−θ2b−θ4(θ1+θ2))
σ2θ1θ2(θ1+θ2) + 2
σ 2 θ3
(θ1 + θ4)eθ1b + (θ2 − θ4)e−θ2b , (3.21)
I2(b) =
2(γ−β)l ̄ σ 2 θ3
(θ1 + θ4)eθ1b + (θ2 − θ4)e−θ2b , (3.22)
I3(b) =
2(eθ1 b −e−θ2 b )
σ2(θ1+θ2) + 2e−θ4b
σ2(θ3+θ4) − (θ1eθ1b + θ2e−θ2b)I1(b)
θ4e−θ4b , (3.23)
I4(b) =
2(γ−β)l ̄e−θ4b
σ2(θ3+θ4) − (θ1eθ1b + θ2e−θ2b)I2(b)
θ4e−θ4b . (3.24)
The optimal strategy under exponential discounting is Lb∗
E with b∗
E determined by b∗
E = inf{b >
0 : C3(b)v′3(b) + u′(b) ≤ γ − β}, cf. (3.11).
4 Equilibrium Solution under the Stochastic Quasi-Hyperbolic
Discounting
The equilibrium policy L∗ = {lt∗; t ≥ 0} is subject to the carbon emission budget and is a function of the state variable Xt. This is a game with many players (the selves) where each self’s objective is to optimize the total future profits, composed by their own state and control as well as the ones of the future selves who value cash-flows in any specified period inconsistently due to present-bias. We look for a Markov equilibrium solution, which is the policy that achieves the best outcome for a-
 self assuming that all the future selves taking the actions according to the same equilibrium policy (Harris and Laibson (2013)). We start with establishing an extended Hamilton-Jacobi-Bellman equation (Bjo ̈rk et al. (2017)) for the game-theoretical problem and then construct solutions to the equation. For any Markov strategies L and L ̃ it follows by the Markov property and the definition of the objective function under exponential discounting PE in (2.6) that
P(x; L, L ̃) = Ex


Z τ πL,L ̃ ∧η0
0
((γ − β)lt + Λ) dt + I{τ πL,L ̃ > η0}αe−δη0 PE (XπL,L ̃
η0 , L ̃)

 . (4.1)

Present-Bias Effects on Carbon Emissions 11
As defined in (2.11), a strategy that attains
P(x; L∗, L∗) = sup
L∈Π
P(x; L, L∗). (4.2)
is an equilibrium policy. If the strategy L∗ = {l∗(Xt); t ≥ 0} is an equilibrium solution that satisfies (4.1), and v is the corresponding value function and is sufficiently smooth, by a standard differential argument for continuous stochastic processes, we can derive the following equation:
σ2(x)
2 v′′(x) + (μ(x) − l∗(x))v′(x) − (λ + δ)v(x) + (γ − β)l∗(x) + Λ + λαPE(x; L∗) = 0, (4.3)
and look for
l∗(x) = argmax
l∈[0,l ̄]
σ2(x)
2 (x)v′′(x) + (μ(x) − lv′(x) − (λ + δ)v(x) + (γ − β)l + Λ + λαPE(x; L∗)
= argmax
l∈[0,l ̄]
(γ − β − v′(x))l . (4.4)
Note that PE(x; L∗) in (4.3) refers to the objective function under exponential discounting.
Let Lb denote the threshold strategy defined in (3.2) and define
Vb(x) := P(x, Lb, Lb). (4.5)
We can obtain the following key results.
Theorem 4.1 The threshold strategy Lb∗ := {lt = l · I{Xt ≥ b∗}; t ≥ 0} is a stationary MPE strategy, and the associated (equilibrium) value function is given by
Vb∗ (x) =



C1(b∗)(v1(x) − v2(x)) + B1(x; b∗), 0 ≤ x < b∗,
C3(b∗)v3(x) + ub∗(x), x ≥ b∗.
Here, the functions v1(·) and v2(·) are solutions of the differential equation σ2(x)
2 g′′(x)+μ(x)g′(x)−
(λ + δ)g(x) = 0 for x ∈ [0, ∞), with the respective initial conditions: v1(0) = 1 and v′1(0) = 1,
and v2(0) = 1 and v′2(0) = −1. The function v3(·) is the bounded solution to σ2(x)
2 g′′(x)+(μ(x)−
l ̄)g′(x) − (λ + δ)g(x) = 0 for x ∈ [0, ∞) with initial condition g(0) = 1. The function ub(x) (for
any b > 0) is the bounded solution to σ2(x)
2 g′′(x) + (μ(x) − l ̄)g′(x) − (λ + δ)g(x) + λαV E
b (x) +
Λ + (γ − β)l ̄ = 0 for x ∈ [0, ∞) with initial condition g(0) = 0, and the coefficients C1(b∗) and C3(b∗) are given by
C1(b∗) =
B1(b∗, b∗) − ub∗ (b∗) v′3(b∗) − B′
1(b∗, b∗) − u′
b∗ (b∗) v3(b∗)
(v′1(b∗) − v′2(b∗)) v3(b∗) − (v1(b∗) − v2(b∗)) v′3(b∗) ,
C3(b∗) =
u′
b∗ (b∗) − B′
1(b∗, b∗) (v1(b∗) − v2(b∗)) − ub∗ (b∗) − B1(b∗, b∗) (v′1(b∗) − v′2(b∗))
(v′1(b∗) − v′2(b∗))v3(b∗) − (v1(b∗) − v2(b∗))v′3(b∗) .
Furthermore, W 1(x) = v1(x)v′2(x) − v2(x)v′1(x) and B1(x; b) = v1(x) R x
0
v2(y) W 1(y)
2(Λ+λαV E
b∗ (x))
σ2(y) dy −
v2(x) R x
0
v1(y) W 1(y)
2(Λ+λαV E
b∗ (x))
σ2(y) dy. Here B1(x; b) is a particular solution to σ2(x)
2 g′′(x) + μ(x)g′(x) −
(λ + δ)g(x) + λαV E
b (x) + Λ = 0 with B1(0) = 0 and B′
1(0) = 0.
The threshold b∗ is determined through
b∗ = inf b > 0 : C3(b)v′
3(b) + u′
b(b) ≤ γ − β . (4.6)
The function V E
b∗ can be computed using (3.7), with b replaced by b∗. Finally, b∗ ≤ b∗
E < ∞.

Present-Bias Effects on Carbon Emissions 12
Theorem 4.1 establishes the existence of equilibrium strategies and defines a rigorous procedure to determine them together with the associated value function. For their derivation, we need to compute the solutions to the given ODEs (whose existence and uniqueness are verified). As illustrated in later sections, in some cases these solutions can be determined explicitly. In other situations, numerical methods are required. In the spirit of Lemma 3.4, the following alternative representations for v-
3(·) and ub(·) will be helpful later for numerical evaluations.
Lemma 4.2 For the functions, v3(·) and ub(·), we have
v3(x) = E e−(λ+δ)Tˆx , (4.7)
ub(x) = E
Z Tˆx∧η0
0
e−δs((γ − β)l + Λ) ds + I{Tˆx > η0} α e−δTˆx V E
b (Y x
Tˆx ) , (4.8)
where Ytx is a stochastic process and Tˆx is a stopping time defined by Ytx = x + R t
0 (μ(Ysx) −
l ̄)ds + R t
0 σ(Ysx)ds for s > 0, and Tˆx = inf{t ≥ 0 : Ytx ≤ 0}, respectively. Moreover, the following limiting results hold:
xli→m∞ v3(x) = 0, xli→m∞ ub(x) = λα + δ
λ+δ
((γ − β)l ̄+ Λ)
δ . (4.9)
Similar to the last section, the two functions v ̄3 and u ̄b can be computed numerically by selecting sufficiently large x ̄ and y ̄ and solving the following two boundary value ODEs, re
spectively: σ2(x)
2 g′′(x) + (μ(x) − l ̄)g′(x) − (λ + δ)g(x) = 0 with g(0) = 1 and g(x ̄) = 0, and
σ2(x)
2 g′′(x) + (μ(x) − l ̄)g′(x) − (λ + δ)g(x) + Λ + (γ − β)l ̄+ λαV E
b (x) = 0 with g(0) = 0 and
g(y ̄) = λα+δ
λ+δ
((γ−β)l ̄+Λ)
δ.
4.1 The Brownian motion model
For the case (3.17) with constant coefficients, we obtain (cf. Appendix D for details)
Vb(x) =
(
N1(b)(eθ ̃1x − e−θ ̃2x) + P3(x; b), 0 ≤ x < b,
N4(b)e−θ ̃4x + P5(x; b), x ≥ b,
where
θ ̃1 = −μ + pμ2 + 2σ2(λ + δ)
σ2 , θ ̃2 = μ + pμ2 + 2σ2(λ + δ)
σ2 ,
θ ̃3 = −(μ − l ̄) + p(μ − l ̄)2 + 2σ2(λ + δ)
σ2 , θ ̃4 = (μ − l ̄) + p(μ − l ̄)2 + 2σ2(λ + δ)
σ2 ,
P3(x; b) = − 2Λ
σ2
eθ ̃1x − 1
θ ̃1(θ ̃1 + θ ̃2) + 2Λ
σ2
1 − e−θ ̃2x
θ ̃2(θ ̃1 + θ ̃2) + 2λα
σ2θ ̃1θ ̃2
M3(b)
− 2λα
σ2(θ ̃1 + θ ̃2)
M1(b)
θ ̃1 − θ1
+ M2(b)
θ ̃1 + θ2
+ M3(b)
θ ̃1
eθ ̃1x + M1(b)
θ1 + θ ̃2
+ M2(b)
θ ̃2 − θ2
+ M3(b)
θ ̃2
e−θ ̃2x
+ 2λα
σ2(θ ̃1 + θ ̃2)
M1(b)
θ ̃1 − θ1
+ M1(b)
θ1 + θ ̃2
eθ1x + M2(b)
θ ̃1 + θ2
+ M2(b)
θ ̃2 − θ2
e−θ2x , (4.10)

Present-Bias Effects on Carbon Emissions 13
P5(x; b) = 2((γ − β)l ̄+ Λ)
σ2
1
θ ̃3(θ ̃3 + θ ̃4) + 2((γ − β)l ̄+ Λ)
σ2
1 − e−θ ̃4x
θ ̃4(θ ̃3 + θ ̃4) + 2λα
σ2θ ̃3θ ̃4
M5(b)
− 2λα
σ2(θ ̃3 + θ ̃4)
M4(b)
θ ̃4 − θ4
+ M5(b)
θ ̃4
e−θ ̃4x + 2λα
σ2(θ ̃3 + θ ̃4)
M4(b)
θ ̃3 + θ4
+ M4(b)
θ ̃4 − θ4
e−θ4x, (4.11)
N1(b) =
θ ̃4(P5(b; b) − P3(b; b)) + P5′(b; b) − P3′(b; b)
(θ ̃1 + θ ̃4)eθ ̃1b + (θ ̃2 − θ ̃4)e−θ ̃2b , (4.12)
N4(b) = N1(b)(eθ ̃1b − e−θ ̃2b) + P3(b; b) − P5(b; b)
e−θ ̃4b , (4.13)
M1(b) = K1(b) − 2Λ
σ2
1
θ1(θ1 + θ2) , M2(b) = −K1(b) − 2Λ
σ2
1
θ2(θ1 + θ2) , (4.14)
M3(b) = 2Λ
σ2
1
θ1θ2
, M4(b) = K4(b) − 2((γ − β)l ̄+ Λ)
σ2
1
θ4(θ3 + θ4) , (4.15)
M5(b) = 2((γ − β)l ̄+ Λ)
σ2
1
θ3θ4
. (4.16)
Here b∗ is the solution of −θ ̃4N4(b)e−θ ̃4b + P5′(b; b) = γ − β.
5 Probability of Early Depletion
A further quantity of interest is the probability of early depletion when implementing the optimal threshold strategy with and without taking into consideration the present-biasedness of the decision makers. For any threshold strategy Lb with (not necessarily optimal) threshold b we define the time of depletion
τ b = inf
n
t ≥ 0 : Xb
t =0
o
, (5.1)
where Xtb follows the dynamics (2.2) for the threshold strategy L = Ltb. Note that P(τ b <
∞) = 1, as soon as l ̄ ≥ μ(x) for all x ≥ 0. Its Laplace transform Lfb(x; s) := Ex
h
e−sτ b i
is
more amenable for analytical expressions (see e.g. Gerber and Shiu (1998); Albrecher and Cani (2017)), and in the present case is given as follows (see Appendix E for the proof).
Theorem 5.1 For any b ≥ 0 we have
Lfb(x; s) =
(
C4(b; s)v4(x; s) + v5(x; s), 0 ≤ x < b,
C6(b; s)v6(x; s) + u(x; s), x ≥ b,
where for v4(·; s) and v5(·; s) are the unique solutions to σ2(x)
2 g′′(x) + μ(x)g′(x) − sg(x) = 0 on
[0, ∞) with initial values, respectively, v4(0; s) = 0 and v′4(0; s) = 1, and
v5(0; s) = 1 and v′5(0; s) = 1. Likewise, v6(x; s) and u(x; s) are the unique bounded solutions
to σ2(x)
2 g′′(x) + (μ(x) − l ̄)g′(x) − sg(x) = 0 with initial value v6(0; s) = 0 and u(0; s) = 1, respectively, and
C4(b; s) = (u(b; s) − v5(b; s)) v′6(b; s) − (u′(b; s) − v′5(b; s)) v6(b; s)
v4(b; s)v′6(b; s) − v′4(b; s)v6(b; s) , (5.2)
C6(b; s) = (u′(b; s) − v′5(b; s)) v4(b; s) − (u(b; s) − v5(b; s)) v′4(b; s)
v4(b; s)v′6(b; s) − v′4(b; s)v6(b; s) . (5.3)
Define the finite-time depletion probability
ψb(x; t) = Px τ b ≤ t , x, t ≥ 0. (5.4)

Present-Bias Effects on Carbon Emissions 14
Clearly, ψb(x; t) can be obtained as the inverse Laplace transform w.r.t. s of Lfb(x; s)/s. Finally, the finite-time depletion probability of the optimal strategy under exponential discounting is denoted by ψE(x; t) := ψbE (x; t) and under stochastic quasi-hyperbolic discounting by ψ∗(x; t) := ψb∗(x; t), where bE and b∗ are the optimal thresholds in the respective cases.
6 Numerical Illustrations for the Brownian Motion Model
In this section, we present a numerical illustration that allows quantitative insight into the impact of present-bias on the optimal production and emission strategies identified in the previous sections. We focus here on the Brownian model (a model with surplus-dependent diffusion coefficients will be considered in Section 7). We first need to choose numerical values for the involved parameters whose magnitudes are motivated by practical considerations, but naturally remain rough magnitudes. Supp-
ose the total global remaining carbon budget until 2050 (as of 2025) is 340 GtCO2 (which is a rough estimate based on the Global Carbon Project (2022). If we consider the company under consideration to receive a share of 0.0001% of that amount, we have x0 = 34 (in units of 104 tCO2) to be used over the next 25 years. In terms of the drift parameter, we may assume that the expected annual increase in capacity due to Direct Air Capture (DAC) and other carbon removal technology advancement could be s-
et to μ ̄ = 0.05.2 Furthermore we choose the volatility parameter to be σ = 2.3
6.1 Impact of present-bias on the emission schedule
Recall that the parameter λ (the arrival intensity of the future periods, and correspondingly the ‘disappearance intensity’ of the present period) and the discounting weight α capture the impatience of the decision-maker. For any fixed α, a larger λ implies a higher intensity rate for eliminating the present period and transitioning to future periods. Since future periods are discounted further by the additional factor α < 1, this leads to greater impatience and stronger present-bias. At the same -
time, for any fixed λ > 0, a smaller α places less weight on future cash flows, also indicating higher impatience. Note that either λ = 0 or α = 1 remove the present-bias.
Impact of λ. In addition to x0 = 34, μ ̄ = 0.05 and σ = 2, we set l = 1, δ = 0.1, α = 0.9, γ = 0.9, Λ = 0.5, l = 3, cind = 0.1 and ctax = 0.05. Then β = cind γ + ctax = 0.086 and Λ = Λ + (γ − β)l = 1.344. Note that with this choice l = 1 of the baseline emission rate, we have a negative net drift μ(0) = −0.95 for the optimization problem. The optimal threshold levels b∗, calculated using the formulas from Section 4 together with the resulting early depletion probabilities ψ∗(34; 25) within the nex-
t 25 years, are given in the following tables for various combinations of λ and α.
2Lebling et al. (2025) estimate that the total global CCUS (Carbon Capture, Utilization and Sequestration) capacity will reach between 416 and 520 MtCO2/yr. The above choice refers to the proportional share for the value 500 MtCO2/yr. 3One may justify such a magnitude as follows. The parameter σ captures uncertainties due to both earth system dynamics and technology development. One may want to use the concept of interannual variability (IAV) as a basis here. In the context of the carbon cycle, IA-
V commonly describes annual variations in net ecosystem exchange (NEE), net primary production (NPP), or the carbon sink strength. According to Marcolla et al. (2017), the average annual NEE globally is approximately 120 gC m−2 yr−1, which means terrestrial ecosystems absorb around 120 grams of carbon per square meter each year. The reported IAV is about 15–20 gC m−2 yr−1, implying a relative fluctuation of 12%–17% of the mean capacity. For simplicity, we assume the IAV to be 6% of the initial cap-
acity x0 = 34 (since the emission capacity declines as the budget is gradually depleted): leading to σ = 34 · 0.06 = 2.

Present-Bias Effects on Carbon Emissions 15
λ 0 0.1 0.25 1 4 12
b∗ 5.51 5.08 4.68 3.86 3.06 2.58 ψ∗(34; 25) 0.9968 0.9985 0.9993 0.9997 1 1
Table 1: Optimal b∗ and ψ∗(34; 25) for varying λ (α = 0.9).
α 0.5 0.7 0.8 0.9 0.95 1.0
b∗ 0.83 1.66 2.53 3.86 4.66 5.51 ψ∗(34; 25) 1 1 1 0.9997 0.9994 0.9968
Table 2: Optimal b∗ and ψ∗(34; 25) for varying α (λ = 1).
In Table 1, we fix α = 0.9 and vary λ within the interval [0, 12] (recall that λ = 0 refers to no present-bias, and larger values of λ indicate a higher degree of present-bias). Specifically, λ = 1 implies that the expected duration of the “present” period is 1 year, λ = 0.25 corresponds to an expected present period of 4 years, and λ = 12 represents an extremely impatient case in which the present period lasts, on average, only 1 month. As expected, the optimal threshold for excess production/emi-
ssion decreases with increasing present-bias from the exponential discounting case λ = 0, implying earlier excess emissions and higher overall emission amounts. This suggests that if policies are made under the assumption that decision-makers are not present-biased, while in reality they are, the amount of resulting emissions is underestimated. Although large values of λ are not central to our analysis, we highlight an interesting phenomenon that may be of mathematical interest, particularly in th-
eoretical studies of hyperbolic discounting. When λ is very large, the impact of increasing λ on strategies may become nonmonotonic, cf. Figure 1. For α-values close to 1, the interaction between parameters can lead to higher threshold levels (i.e., lower emissions) as λ increases. This suggests that when the present period is extremely short but future profits are still significantly weighted, it may be optimal to prioritize maximizing total future benefits resulting in reduced present emissions,-
 as reflected in a higher threshold. At the same time, for other large values of λ the threshold is smaller again, making it more beneficial to prioritize immediate gains. Such a non-monotonicity is noteworthy, although it only appears for certain specific parameter ranges.
0 50 100 150 200
0 5 10 15 20 25
λ
b*
α = 0.5
α = 0.85
α = 0.9
α = 0.95
α=1
Figure 1: Optimal threshold levels b∗ as a function of λ for various values of α.
Impact of α. Table 2 shows the results for λ = 1 and variable values of α. One observes that the sensitivity of b∗ to changing values of α is more pronounced (α = 1 again refers to exponential discounting without present-bias). As α decreases from 1, the present-bias is increased and the excess production threshold is lowered.
Comparison to Exponential Discounting. In line with Theorem 4.1, we observe that the excess production threshold is lower under present bias than under exponential discounting,

Present-Bias Effects on Carbon Emissions 16
which results in increased emissions and a reduced budget, as illustrated in Figure 2 with a comparison of two sample paths generated with the same random seed. In both cases, the budget is fully depleted before time T = 25. Note also that for the concrete choice of parameters, the strategies conincide for the first seven years.
0 2 4 6 8 10 12 14
0 5 10 15 20 25 30 35
t
Xt
5.51 3.86
Exponential Stochastic quasi−hyperbolic
Figure 2: Comparison of two sample paths generated with the same random seed: optimal strategy under exponential discounting (with optimal threshold b∗
E = 3.86) versus stochastic
quasi-hyperbolic discounting (λ = 1, α = 0.9) with optimal threshold b∗ = 5.51.
In the exponential discounting case without present-bias, one should also expect a lower optimal threshold when increasing the discount rate δ, which downgrades future contributions. Indeed, Figure 3 depicts the optimal threshold level under exponential discounting for the above parameters, now as a function of δ.
0.0 0.2 0.4 0.6 0.8 1.0
0 10 20 30 40 50 60 70
δ
bE
*
Figure 3: Optimal threshold b∗
E as a function of δ for exponential discounting (ctax = 0).
It is of interest to compare which level of δ without present-bias leads to the same optimal decisions (threshold levels) as the effect of present-bias for a lower level of δ. Figure 4 shows the optimal threshold for equilibrium strategies of various stochastic quasi-hyperbolic discounting settings (λ, α) for δ = 0.1. The dotted horizontal lines represent the optimal threshold levels b∗
E
for exponential discounting for various other δ-levels, so that one can identify which parameters

Present-Bias Effects on Carbon Emissions 17
in each of the two discounting regimes lead to the same eventual optimal strategy. For instance, the equilibrium strategy for δ = 0.1, λ = 2 and α = 0.9 under stochastic quasi-hyperbolic discounting leads to the same threshold (and hence value function) as exponential discounting with a discount rate around δ = 0.15 (Figure 5 gives a more detailed account on matching levels). In other words, the effect of present bias in this case is comparable to increasing the exponential discount rate δ from 0.-
1 to 0.15. This raises the question of whether explicitly accounting for present bias could, in general, be replaced by using a higher discount rate within a standard exponential discounting model. The answer is no, and we will elaborate on this in Section 6.3 (Remark 6.1).
6.2 Impact of level of social responsibility on emission schedule
Recall that the term Λ in the objective function rewards avoiding early depletion of the carbon budget. We can interpret it as a measure of how much the company values preserving its emission budget, which can, to some extent, reflect its social responsibility and sustainability awareness. We now examine how Λ affects decision-making by varying its value while keeping all other parameters fixed. Fixing again δ = 0.1, α = 0.9, λ = 1, we now vary Λ ̄ (and correspondingly Λ = Λ ̄ +(γ −β)l). Table 3 s-
hows how additional weight on sustainability increases the optimal excess production/emission threshold in the present-biased case. As expected, higher sustainability awareness postpones emissions, resulting in lower overall emissions. Figure 6 gives a more detailed picture on how choices of present-bias parameters and the sustainability weight  ̄Λ affect the optimal emission schedule. It quantifies how b∗ changes as a function of intensity λ of arrival for the future period, weight α for future p-
rofits and sustainability weight,  ̄Λ, respectively. Along the vertical axis, the probability of early depletion resulting from implementing b∗ is also indicated.
0 5 10 15
02468
λ
b*
α = 0.5
α = 0.6
α = 0.7
α = 0.8
α = 0.9
α=1
bE
* under δ = 0.1
bE
* under δ = 0.15
bE
* under δ = 0.2 bE
* under δ = 0.25 bE
* under δ = 0.35 bE
* under δ = 0.55 bE
* under δ = 0.95
Figure 4: Comparison of optimal threshold levels b∗ for stochastic hyperbolic discounting (with δ = 10%) and for exponential discounting (for various δ-values, indicated by black dotted horizontal lines), as a function of λ.
0 2 4 6 8 10 12
0.0 0.2 0.4 0.6 0.8 1.0
λ
α
b0 = 5.08 b1 = 4.08 b2 = 3.86 b3 = 3.06
Figure 5: Pairs of λ and α that yield the same equilibrium threshold b∗ for different target values b∗ = b0, b1, b2, or b3.
Λ 0.0 0.1 0.2 0.5 0.8
b∗ 0 0.52 1.32 3.86 6.12
Table 3: Optimal threshold levels for varying Λ ̄

Present-Bias Effects on Carbon Emissions 18
ctax 0 0.05 0.1 0.3 0.5 0.7 0.8 0.802 0.803 0.804 0.805 0.809
b∗ 3.36 3.58 3.83 5.21 7.72 13.71 22.47 22.79 22.95 23.12 23.29 23.99
Table 4: Optimal b∗ for varying carbon tax levels (λ = 1)
ctax 0 0.05 0.10 0.30 0.50 0.66 0.67 0.68 0.69 0.70 0.72 0.73 0.74 0.75
b∗ 1.88 2.14 2.42 3.92 6.52 10.38 24.00 11.04 19.00 10.98 11.16 10.98 38.00 11.92
ctax 0.76 0.77 0.78 0.79 0.8 0.801 0.802 0.803 0.804 0.805 0.806 0.807 0.808 0.809
b∗ 11.49 15.50 10.88 10.99 22.50 23.41 24.89 10.94 12.29 22.48 17.88 10.98 31.00 10.99
Table 5: Optimal b∗ for varying carbon tax levels (λ = 12)
•• P Search
8 (P=0.9774)
6 (P=0.9958)
b*
2
2
II
0.2
4 0.0
.
re:-
.
,..- ,.
•, ' ..
' ' i-,
' . .
9:49 AM 9/30/2025
Figure 6: Optimal threshold b∗ (and corresponding early depletion probability P = ψ∗(34; 25)) of the equilibrium strategy under different behavioral parameters with α = 0.9: as a function of future arrival intensity λ and  ̄Λ (left) and as a function of the additional future period discount factor α and and the social responsibility factor Λ ̄ (right).
6.3 Impact of carbon tax on emission schedule
Finally, we want to examine how setting a carbon tax level ctax impacts decision-making by varying its value while keeping all other parameters fixed. Choosing again cind = 0.1, x0 = 34,
μ ̄ = 0.05, l = 1, σ = 2, δ = 0.1, γ = 0.9,  ̄Λ = 0.5, l ̄ = 3 and α = 0.9, we now vary ctax. Note that both β = cind γ + ctax and Λ = Λ ̄ + (γ − β)l vary with ctax. We calculate the optimal strategy for various levels of carbon tax and present the results for in Tables 4 and 5 for λ = 1 and λ = 12, respectively. Moreover, Figure 7 plots how b∗ changes as the tax rate ctax increases, for various levels of present bias represented by different values of λ, with α fixed at 0.9. The probability indic-
ated at the end of each horizontal dashed line represents the likelihood of early depletion if the production strategy or emission policy uses the maximal excess production threshold at that level. For example, the second dashed line from the bottom indicates that if the production policy begins maximal excess production when the budget exceeds 5, the probability of early depletion is 0.9979.

Present-Bias Effects on Carbon Emissions 19
0.0 0.2 0.4 0.6 0.8 1.0
0 5 10 15 20 25
ctax
b*
λ=0 λ = 0.1 λ = 0.5 λ=1 λ=4 λ = 12
P=1
P=0.9979
P=0.9877
P=0.9674
P=0.9318
P=0.8898
P=0.8314
P=0.8017
Figure 7: Optimal threshold b∗ as a function of tax rate ctax for various levels of λ (α = 0.9).
One can observe that without carbon tax (ctax = 0) the excess production threshold b∗ is at its lowest, indicating a strong desire for early consumption of the budget and higher production, which results in higher emissions. As carbon tax increases, the incentive for production and consumption decreases (reflected in an increased threshold b∗), lowering carbon emissions. The curbing effect strengthens as the carbon tax increases, up to certain turning points that will be discussed below. Generally-
, for a higher present bias (larger λ), a larger tax rate is required to bring down the emission patterns to the same level as for lower present bias (at least as long as the tax rate is not excessively high). The concrete needed trade-off can be spotted in Figure 7. Therefore, if carbon tax rates are designed ignoring present bias, they may fail to achieve their intended effect. For example, if a carbon policy is designed to restrict the probability of early depletion to around 96.74%, and presen-
t-bias is ignored, ctax would be set around 0.4 (see the red curve). However, if there is some level of present-bias (e.g., λ = 1), to achieve that effect, the tax should have been set around 0.52. However, beyond a certain threshold (indicated by the dots on the curves in Figure 7 and the first cell highlighted in gray in Table 5 for the case λ = 12) the impact of further increases in carbon tax ctax becomes more variable. This suggests that excessively high carbon tax rates may be suboptimal, pa-
rticularly when combined with stronger present bias (larger λ), which aligns with findings by MacKenzie and Ohndorf (2012) that “revenue-raising instruments, such as carbon taxes, are suboptimal” (see also Borissov and Bretschger (2022)). One can observe in Figure 7 that this phenomenon is more pronounced (and occurs at lower ctax levels) for higher degrees of present-biasedness (higher λ). Figure 8 shows the effect of carbon tax for a fixed λ > 0 but varying α (which is another way to measure pre-
sent-bias). It reveals similar patterns on the impact of carbon tax on production and emission strategies. If the tax rate is determined under the assumption that there is no present-bias, but in reality present-bias exists, then actual emissions will be higher than targeted. Specifically, if ctax is chosen using the curve corresponding to α = 1 (no present bias) and based on a targeted probability of early depletion (e.g., P = 80.17%, indicated by the first dashed line from the top), then the tax-
 rate ctax would be approximately 0.64. However, under present-biased preferences (e.g., α = 0.9), the resulting production strategy under such a tax rate (around 0.64) yields a lower threshold b∗, leading to a higher probability of early depletion—around 86%. This illustrates again that ignoring present-bias when setting policy negatively affects the achievement of emission targets set by social planners. Furthermore, present-bias may also undermine the effectiveness of carbon taxation, as higher-
 tax rates do

Present-Bias Effects on Carbon Emissions 20
not necessarily lead to lower emissions— indicated at the dot on the curve for α = 0.9 on the right-hand panel in Figure 8.
0.0 0.2 0.4 0.6 0.8 1.0
0 5 10 15 20 25
ctax
b*
α = 0.5
α = 0.6
α = 0.7
αα == 00..89
α = 0.5 α = 0.6 α = 0.7 α = 0.8 α = 0.9 α=1
P=1
P=0.9979
P=0.9877
P=0.9674
P=0.9318
P=0.8898
P=0.8314
P=0.8017
0.0 0.2 0.4 0.6 0.8 1.0
0 5 10 15 20 25
ctax
b*
α = 0.5 α = 0.6 α = 0.7 α = 0.8 α = 0.9 α=1
P=1
P=0.9979
P=0.9877
P=0.9674
P=0.9318
P=0.8898
P=0.8314
P=0.8017
Figure 8: Optimal threshold b∗ as a function of tax rate ctax for various levels of α (λ = 1 (left) and λ = 12 (right))
In conclusion, the findings suggest that present-bias negatively impacts the effectiveness of carbon taxes, with stronger biases having a greater effect. This highlights the importance for social planners and governments to account for present-biased behavior when designing effective carbon tax policies.
Remark 6.1 Finally, let us return to a question raised at the end of Section 6.1. As it was shown there, the equilibrium strategy under stochastic quasi-hyperbolic discounting can match that of an exponential discounting model with a higher discount rate (in the example given there by an increase from δ = 0.1 to 0.15). However, this does not mean that the effect of present-biasedness can be equivalently replaced by using an exponential discounting model with a suitably higher discount rate. In tha-
t example, without carbon tax the probability of early depletion was about 99% for both cases. Suppose we want to determine how much carbon tax should be imposed in order to reduce the probability of early depletion to about 90%. If we ignore present-bias and instead adopt the exponential discounting model with the equivalent higher discount rate of 14.08%, we would need to set the carbon tax instead at 0.635. Under this increased carbon tax, the optimal strategy in the exponential discounting cas-
e corresponds to a threshold of 9.06. However, if we apply the same carbon tax in the actual present-biased scenario, the resulting threshold becomes 8.19, and the early depletion probability is reduced only to about 93%, missing the desired target. This example illustrates that determining the carbon tax based on an exponential discounting model with an adjusted higher discount rate, calibrated to match the pre-tax equilibrium, results in a less effective policy when applied to agents exhibiting -
present-bias.
7 Numerical Illustrations for More General Models
Our general diffusion setup in this paper in principle also allows to study more involved stochastic processes for the carbon budget. As an alternative model, let us here briefly consider an Ornstein–Uhlenbeck type process with state-dependent volatility for the cumulative carbon emission budget available to a company over time. For instance, one could assume that the target atmospheric CO2 concentration in 2050 is 450 ppm (which translates to cumulative net emissions since pre-industrial times of-
 approximately 1, 330 GtCO2, see e.g. Bennedsen et al. (2023)). The aggregate carbon emission capacity available at any time t is then linked to the

Present-Bias Effects on Carbon Emissions 21
difference between the target and the current concentration level, which evolves dynamically. Translating this into an individual target level θ of the company may then justify an adaptive budget available at time t of the form
dX L
t = κ(θ − XL
t )dt + (σ0 + σ1XL
t )dWt − (l0 + lt)dt.
The volatility term σ0 + σ1XtL may reflect policy uncertainty, technological change and estimation uncertainty, and lt is determined by the emission schedule L. The choice θ = 35, σ0 = 0.5, σ1 = 0.11 leads to similar initial values as before, and according to Bennedsen et al. (2023), one may choose κ = 0.018. The other parameters we choose again as l = 3, δ = 0.1, γ = 0.9, Λ = 0.5, l = 6, cind = 0.1 and ctax = 0.05.
Impact of λ and α. We calculate the optimal threshold b∗ and the resulting probability of early depletion for various combinations of λ and α.
λ = 0.1 λ = 0.25 λ = 0.5 λ = 1 λ = 4 λ = 12
α = 0.5 4.52 3.56 2.79 2.00 0.15 0.00
α = 0.6 4.81 4.00 3.37 2.70 0.62 0.00
α = 0.7 5.11 4.49 4.02 3.51 1.77 0.66
α = 0.8 5.43 5.01 4.70 4.37 3.13 2.32
α = 0.9 5.76 5.55 5.40 5.23 4.56 4.08
α = 0.95 5.92 5.82 5.75 5.66 5.31 5.05
α = 1 6.09 6.09 6.09 6.09 6.09 6.09
Table 6: Optimal threshold b∗ for various combinations of λ and α
Impact of level of social responsibility on emission schedule. Recall that the term Λ indicates how much the company values preserving its emission budget and reflect its social responsibility and sustainability awareness in some sense. We now examine how Λ affects decision-making by varying its value while keeping all other parameters fixed. Table 7 shows how additional weight on sustainability increases the optimal excess production/emission threshold and lowers the probability of early depletio-
n in the present-biased case. As expected, higher sustainability awareness postpones emissions, resulting in lower overall emissions.
Λ 0 0.1 0.2 0.5 0.8
b∗ 3.00 3.52 4.00 5.23 6.25
Table 7: Optimal threshold levels and resulting early depletion probabilities for varying  ̄Λ
Figure 9 gives a more detailed picture on how choices of present-bias parameters and the sustainability weight Λ ̄ affect the optimal emission schedule. It quantifies how b∗ changes as a function of intensity λ of arrival for the future period, weight α for future profits and sustainability weight,  ̄Λ, respectively.

Present-Bias Effects on Carbon Emissions 22
Figure 9: Optimal threshold b∗ of the equilibrium strategy under different behavioral parameters: as a function of future arrival intensity λ and social responsibility factor Λ ̄ for α = 0.9 (left) and as a function of the additional future period discount factor α and  ̄Λ for λ = 1 (right).
8 Conclusion
In this paper, we provide a framework to study optimal carbon emission schedules for an agent aiming to maximize profit, while being subject to emission constraints and incorporating social responsibility awareness. In particular, we looked into the effects of present-biasedness on the optimal emission behavior. The problem was formulated as an intra-personal game, where the objective is to search for equilibrium solutions. We established the existence of these equilibrium solutions and provided d-
etailed procedures for finding the equilibrium value function and equilibrium emission/production strategy in a general diffusion setup, under stochastic quasi-hyperbolic discounting. In a detailed numerical illustration for the case of a diffusion setting with constant coefficients, we showed that present-bias leads companies to consume carbon emissions earlier and more aggressively. This behavior results in a higher probability of early depletion compared to the exponential discounting case (the-
 case with no present-bias). Furthermore, the higher the degree of present-bias, the greater the impatience regarding the consumption of the emission budget. We also examined the impact of the level of sustainability preferences and showed in what way it has a positive effect on emission patterns and later depletion of the allocated carbon budget. We furthermore studied how carbon tax can provide incentives to an individual company’s reduced emission behavior. As the tax increases, the effect beco-
mes more significant. However, when the tax reaches a certain level, the effect begins to diminish. A further insight provided to the social planners is that if policies (carbon tax levels in particular) are set ignoring present-bias of companies, the desired effects may not materialize. As indicated in the introduction, while the exposition of the paper was formulated for the case of a firm looking for optimal production decisions with implied carbon emission patterns, the results may also be int-
erpreted for rational individuals who decide about carbon-intensive consumption patterns when facing a carbon budget constraint and potential taxes on carbonintensive activities or consumption goods. A main purpose of this paper was to establish a link between the above questions and solution techniques developed in insurance risk theory, which enabled to determine the optimal production/consumption behavior, where the remaining surplus in a dividend-paying insurance company now took the role of t-
he remaining carbon-budget to spend. We deliberately restricted the analysis to a simple diffusion dynamic, allowing a transparent view into the effects of some background parameters and the drivers of a certain optimal behavior. There are many ways in

Present-Bias Effects on Carbon Emissions 23
which this line of thinking can be extended to integrate further factors of real-life constraints and objectives into such a study. In particular, it can be interesting to also consider futurebiased decision makers (i.e. α > 1), and situations where the relationship between emission and profit is more complex than the linear relationship applied in the present study. We leave such extensions to future research.
References
Albrecher, H. and Cani, A. (2017). Risk theory with affine dividend payment strategies. In Number Theory–Diophantine Problems, Uniform Distribution and Applications: Festschrift in Honour of Robert F. Tichy’s 60th Birthday, pages 25–60. Springer.
Albrecher, H. and Thonhauser, S. (2009). Optimality results for dividend problems in insurance. Revista de la Real Academia de Ciencias Exactas, Fisicas y Naturales, 103(2):295.
Azcue, P. and Muler, N. (2014). Stochastic optimization in insurance: a dynamic programming approach. Springer.
Bennedsen, M., Hillebrand, E., and Koopman, S. J. (2023). A multivariate dynamic statistical model of the global carbon budget 1959–2020. Journal of the Royal Statistical Society Series A: Statistics in Society, 186:20–42.
Bj ̈ork, T., Khapko, M., and Murgoci, A. (2017). Inconsistent stochastic control in continuous time: Theory and examples. Finance and Stochastics, 21:331–360.
Borissov, K. and Bretschger, L. (2022). Optimal carbon policies in a dynamic heterogeneous world. European Economic Review, 148:104253.
Bourgey, F., Gobet, E., and Jiao, Y. (2024). Bridging socioeconomic pathways of CO2 emission and credit risk. Annals of Operations Research, 336(1):1197–1218.
Chekriy, K., Kiesel, R., and Stahl, G. (2025). Probabilistic assessment of corporate net-zero transition. Available at SSRN 5255705.
Chen, S., Li, Z., and Zeng, Y. (2014). Optimal dividend strategies with time-inconsistent preferences. Journal of Economic Dynamics and Control, 46:150 – 172.
Chen, S., Wang, X., Deng, Y., and Zeng, Y. (2016). Optimal dividend-financing strategies in a dual risk model with time-inconsistent preferences. Insurance: Mathematics and Economics, 67:27 – 37.
Colaneri, K., Frey, R., and K ̈ock, V. (2024). Random carbon tax policy and investment into emission abatement technologies. arXiv preprint arXiv:2406.01088.
Eisenberg, J. (2015). Optimal dividends under a stochastic interest rate. Insurance: Mathematics and Economics, 65:259–266.
Frederick, S., Loewenstein, G., and O’Donoghue, T. (2002). Time discounting and time preference: A critical review. Journal of Economic Literature, 40(2):351–401.
Fries, C. P. and Quante, L. (2024). Intergenerational equitable climate change mitigation: Negative effects of stochastic interest rates; positive effects of financing. SSRN.
Gerber, H. U. and Shiu, E. S. (1998). On the time value of ruin. North American Actuarial Journal, 2(1):48–72.

Present-Bias Effects on Carbon Emissions 24
Gikhman, I. I. and Skorokhod, A. V. (1972). Stochastic differential equations. Springer-Verlag, New York.
Global Carbon Project (2022). Global carbon budget 2022 highlights. https://www. globalcarbonproject.org/carbonbudget/22/highlights.htm. p. 1. Accessed on 20 June 2025.
Grenadier, S. R. and Wang, N. (2007). Investment under uncertainty and time-inconsistent preferences. Journal of Financial Economics, 84:2–39.
Harris, C. and Laibson, D. (2013). Instantaneous gratification. Quarterly Journal of Economics, 128:205–248.
Hu, S. and Zhou, Z. (2025). Equilibrium policy on dividend and capital injection under timeinconsistent preferences. arXiv preprint arXiv:2505.23511.
Ikeda, N. and Watanabe, S. (1977). A comparison theorem for solutions of stochastic differential equations and its applications. Osaka Journal of Mathematics, 14(3):619–633.
Iverson, T. and Karp, L. (2021). Carbon taxes and climate commitment with non-constant time preference. The Review of Economic Studies, 88(2):764–799.
Korn, R. (2025). A framework for optimal portfolios with sustainable assets and climate scenarios. European Actuarial Journal, 15(1):1–13.
Korn, R. and Nurkanovic, A. (2025). Sustainable portfolio optimization and sustainable taxation. European Actuarial Journal. to appear.
Krylov, N. V. (1996). Lectures on Elliptic and Parabolic Equations in Holder Spaces. The American Mathematical Society.
Laibson, D. (1998). Life-cycle consumption and hyperbolic discount functions. European Economic Review, 42(3):861 – 871.
Lebling, K., Gangotra, A., Hausker, K., and Byrum, Z. (2025). 7 things to know about carbon capture, utilization and sequestration. World Resources Institute.
Li, Y., Li, Z., and Zeng, Y. (2016). Equilibrium dividend strategy with non-exponential discounting in a dual model. Journal of Optimization Theory and Applications, 168(2):699–722.
Li, Z., Chen, S., and Zeng, Y. (2015). Optimal dividend strategy for a diffusion model with time-inconsistent preferences. Systems Engineering - Theory & Practice, 35(7):1633.
MacKenzie, I. A. and Ohndorf, M. (2012). Cap-and-trade, taxes, and distributional conflict. Journal of Environmental Economics and Management, 63(1):51–65.
Marcolla, B., R ̈odenbeck, C., and Cescatti, A. (2017). Patterns and controls of inter-annual variability in the terrestrial carbon budget. Biogeosciences, 14:3815–3829.
Maskin, E. and Tirole, J. (2001). Markov perfect equilibrium. Journal of Economic Theory, 100:191–219.
Nordhaus, W. (2018). Evolution of modeling of the economics of global warming: changes in the dice model, 1992-2017. Climatic Change, 148:623–640.
Palacios-Huerta, I. and P`erez-Kakabadse, A. (2011). Consumption and portfolio rules with stochastic quasi-hyperbolic discounting. Working Paper.

Present-Bias Effects on Carbon Emissions 25
Pao, C. V. (1992). Nonlinear parabolic and elliptic equations. Plenum Press, New York.
Phelps, E. S. and Pollak, R. A. (1968). On Second-Best National Saving and Game-Equilibrium Growth1. The Review of Economic Studies, 35(2):185–199.
Popovski, V. (2018). The implementation of the Paris agreement on climate change. Routledge.
Reppen, A. M., Rochet, J.-C., and Soner, H. M. (2020). Optimal dividend policies with random profitability. Mathematical Finance, 30(1):228–259.
Saleh, H., Battiston, S., Monasterolo, I., Barreau, T., and Tankov, P. (2025). Estimating firms’ emissions from asset level data helps revealing (mis) alignment to net zero targets. Available at SSRN 4661050.
Schmidli, H. (2007). Stochastic control in insurance. Springer, Heidelberg.
Shreve, S. E., Lehoczky, J. P., and Gaver, D. P. (1984). Optimal consumption for general diffusions with absorbing and reflecting barriers. SIAM Journal of Control and Optimization, 22(1):55–75.
Stern, N. (2006). The Stern Review: The economics of climate change. Technical report, HM Treasury, Government of the United Kingdom, London.
Strini, J. A. and Thonhauser, S. (2023). Time-inconsistent view on a dividend problem with penalty. Scandinavian Actuarial Journal, 2023(8):811–833.
Strotz, R. H. (1956). Myopia and inconsistency in dynamic utility maximization. The Review of Economic Studies, 23(3):165–180.
Thonhauser, S. and Albrecher, H. (2007). Dividend maximization under consideration of the time value of ruin. Insurance: Mathematics and Economics, 41(1):163–184.
Zhao, Q., Wei, J., and Wang, R. (2014). On dividend strategies with non-exponential discounting. Insurance: Mathematics and Economics, 58:1–13.
Zhu, J. (2015). Dividend optimization for general diffusions with restricted dividend payment rates. Scandinavian Actuarial Journal, 2015(7):592–615.
Zhu, J., Siu, T., and Yang, H. (2020). Singular dividend optimization for a linear diffusion model with time-inconsistent preferences. European Journal of Operational Research, 285(1):66–80.
A Proofs of Section 3
Proof of Lemma 3.1 (i) We begin by proving the existence and uniqueness of a bounded solution that is continuously differentiable on (0, ∞) and twice continuously differentiable on (0, b) ∪ (b, ∞) to Equations (3.4)-(3.6), through an explicit construction. Let v1(·) and v2(·) be solutions to the initial value problems as defined in Lemma 3.1 and B1(x) as defined in the same. The existence and uniqueness of v1 and v2 are guaranteed by Theorem 5.4.2. of Krylov (1996). It is clear that v1 and v2 are -
linearly independent. Denote their Wronskian by Wv1,v2(x) =
v1(x)v′2(x) − v2(x)v′1(x). Then, B1(x) can be expressed as B1(x) = v1(x) R x
0
v2(y) Wv1,v2 (y)
2Λ
σ2(y) dy −
v2(x) R x
0
v1(y) Wv1,v2 (y)
2Λ
σ2(y) dy, which implies that B1(x) is a particular solution to the differential
equation σ2(x)
2 g′′(x) + μ(x)g′(x) − δg(x) + Λ = 0 with initial value conditions B1(0) = 0 and
B′1(0) = 0. Let u and v3 be defined as in Lemma 3.1. The existence of v3 and u can be

Present-Bias Effects on Carbon Emissions 26
established by extending the differential equation to the domain (−∞, −1) ∪ (0, ∞), imposing the boundary condition g(−1) = 1, and applying Corollary 8.1 of Pao (1992).
Recall that v1 and v2 form a pair of independent solutions to σ2(x)
2 g′′(x)+μ(x)g′(x)−δg(x) = 0 on [0, ∞). Then all the solutions to (3.4) can be expressed in the following general form: C1 v1(x) + C2v2(x) + B1(x) where C1 and C2 are constants. Recall v3(·) and u(·) are both
bounded solutions to σ2(x)
2 g′′(x) + (μ(x) − l ̄)g′(x) − δg(x) = 0 on (0, ∞). Then, for any constant C3, the function C3v3(x) + u(x) is a solution to (3.5). For b ≥ 0, define a new function
gb(x) =
(
C1 (b)v1(x) + C2(b)v2(x) + B1(x) 0 ≤ x < b,
C3(b)v3(x) + u(x) x ≥ b, (A.1)
where C1 (b) and C3(b) are constants (depending on b only) that satisfy the following:
gb(0) = 0, i.e., C1 (b)v1(0) + C2(b)v2(0) + B1(0) = 0 (A.2)
gb(b−) = gb(b+), i.e., C1 (b)v1(b) + C2(b)v2(b) + B1(b) = C3(b)v3(b) + u(b), b > 0(,A.3)
g′
b(b−) = g′
b(b+), i.e., C1 (b)v′
1(b) + C2(b)v′
2(b) + B′
1(b) = C3(b)v′
3(b) + u′(b), b > 0.(A.4)
We can see that C1 (b), C2(b) and C3(b) can be uniquely determined with C2(b) = −C1(b). Taking limb↓0 on both sides of (A.3), using v1(0) = v2(0) = v3(0) = 1 and u(0) = 0, and noting B1(0) = 0, we obtain limb↓0 C3(b) = 0 = C3(0). The function gb(x) satisfies (3.4) and (3.5), and is bounded due to the boundedness of v3(x) and u(x). From the structure of gb and noting (A.2)-(A.4) and C3(0) = 0, we can find that gb(0) = 0, and that when b > 0, gb(b−) = gb(b+) and gb(x) is continuously differentiable -
in [0, ∞). We can also see that gb(x) is twice continuously differentiable except for x = b. So gb(x) is the desired unique solution. Since v1, v2, v3 and u are continuously differentiable functions, from (A.2) - (A.4) we can observe that C1 (b), C2(b) and C3(b) are continuous functions. (ii) We now proceed to prove that the above solution is unique and coincides with V E
b (x). Let g be any bounded solution that meets all the requirements in (i). It follows by (Zhu et al., 2020, Lemma A.1) that
Ex
h
e−δ(τ b∧τn∧t)g(X b
τ b∧τn∧t)
i
=g(x) + Ex
"
Z τ b∧τn∧t
0
e−δs 1
2 σ2(Xb
s )g′′(Xb
s ) + (μ(Xb
s) − lb
s )g′ (X b
s ) − δg(Xb
s ) ds
#
,
where {τn} is a sequence of stopping times converging to ∞. Note that lsb = l ̄I{Xsb ≥ b} and that g satisfies (3.4) and (3.5), and so we have
1
2 σ2(Xb
s )g′′(Xb
s ) + (μ(Xb
s) − lb
s )g′ (X b
s ) − δg(Xb
s ) = −Λ − l ̄(γ − β)I{Xb
s ≥ b}.
Consequently,
g(x) =Ex
h
e−δ(τ b∧τn∧t)g(X b
τ b∧τn∧t)
i
+ Ex
"
Z τ b∧τn∧t
0
(Λ + l ̄(γ − β)I{Xb
s ≥ b}) ds
#
, x ≥ 0.
(A.5)
Since the function g(·) is bounded, using the dominated convergence twice we can obtain
tli→m∞ nli→m∞ Ex
h
e−δ(τ b∧τn∧t)g(X b
τ b∧τn∧t)
i
= Ex
h
e−δτ b g(Xb
τb)
i
= 0, (A.6)

Present-Bias Effects on Carbon Emissions 27
where the last equality follows by noticing Xb
τb = 0 and g(0) = 0. By using the monotone convergence twice we have
tli→m∞ nli→m∞ Ex
"
Z τ b∧τn∧t
0
e−δs(Λ + l ̄I{Xb
s ≥ b}) ds
#
= Ex
"
Z τb
0
e−δs(Λ + (γ − β)l ̄I{Xb
s ≥ b}) ds
#
=Ex
"
Z τb
0
e−δs(γ − β)lb
s ds +
Z τb
0
e−δsΛ ds
#
=VE
b (x). (A.7)
By letting t → ∞ and n → ∞ on both sides of (A.5), and then using (A.6) and (A.7), we can obtain g(x) = V E
b (x) for x ≥ 0. (iii) It follows immediately from the above derivations that
VE
b (x) =
(
C1 (b)v1(x) − C1 (b)v2(x) + B1(x) 0 ≤ x < b,
C3(b)v3(x) + u(x) x ≥ b,
where C1 (b) and C3(b) are determined by solving (A.2)-(A.4). □
Proof of Lemma 3.2 The non-negativity of V E(x) is obvious from its definition in (2.7). By noting that the excess emission rate for any admissible strategy is bounded by l ̄, it follows that
V E(x) = supL∈Π E
h
R τL
0 e−δs((γ − β)ls + Λ) ds|X0 = x
i
≤
R∞
0 e−δs((γ − β)l ̄+ Λ) ds = (γ−β)l ̄+Λ
δ.
For any x > 0, let Xx,b
t represent the controlled stochastic process dXx,b
t = (μ(Xx,b
t )−
l ̄I {X x,b
t ≥ b}) dt + σ(Xx,b
t− ) dWt with Xx,b
0− = x. By adapting the comparison theorem (Theorem
1.1 in Ikeda and Watanabe (1977)), we can show that with probability 1, Xx+h,b
t ≥ Xx,b
t for all
t ≥ 0. This, along with the fact that, under Lb, excess emissions only occur when the controlled stochastic process is above b, implies that when there are excess emissions (at rate l ̄) at time t under the process Xx+h,b
t , there may or may not be excess emissions under Xx,b
t . However,
when there are excess emissions at time t under Xx,b
t , there will also be excess emissions at the
same rate l ̄ under Xx+h,b
t with probability 1. As a result, V E
b (x) ≤ V E
b (x + h) for h > 0, and so
VE
b (x) is non-decreasing. □
Lemma A.1 The function hE(b) := V E
b
′(b) is continuous on [0, ∞) and the following holds:
limb↓0 V E
b
′′(0+) = V0E
′′(0+).
Proof. From the proof of Lemma 3.1 (i) and (ii) we know that V E
b (x) = gb(x) for x ≥ 0 and b ≥ 0. As mentioned there, C1 (b) and C3(b) are continuous functions of b for b ≥ 0. Consequently, the function hE(b) := V E
b
′(b) = g′
b(b) = C3(b)v′3(b) + u′(b) is continuous in b for b ∈ [0, ∞). It follows by (A.1) that
lbi↓m0 V E
b
′′(0+) = lbi↓m0 g′′
b (0+) = lbi↓m0 C1 (b)(v′′
1 (0) − v′′
2 (0)) = lbi↓m0 C1 (b)(v′′
1 (b) − v′′
2 (b))
= lbi↓m0 C3(b)v′′
3 (b) + u′′(b) = lbi↓m0 C3(b)v′′
3 (0) + u′′(0) (A.8)
= C3(0)v′′
3 (0) + u′′(0) = V E
0
′′(0+),
where the first equality in (A.8) is due to (A.4). □
Lemma A.2 (i) For b ≥ 0, V E
b
′′(x) ≤ 0 for x ∈ (b, ∞). (ii) For b ≥ 0, if V E
b
′(b) ≥ γ − β, then
VE
b
′′(x) ≤ 0 for x ∈ (0, b). (iii) For b ≥ 0, if μ(0) < 0 and C1 (b) > Λ
−2μ(0) , then V E
b
′(b) < γ − β
and furthermore, V E
b
′(x) < γ − β for x > b. (iv) Moreover, C1 (b) ≥ 0 for b ≥ 0.

Present-Bias Effects on Carbon Emissions 28
Proof. (i) We proceed with an indirect proof. Suppose the statement in (i) is not true. Then
VE
b
′′(y0) > 0 for some y0 > b. Since V E
b is bounded and increasing, eventually V E
b
′′(x) < 0 for
sufficiently large x. Let y1 represent the first point after y0 such that the function, V E
b
′′(x), becomes concave. Then,
VE
b
′′(y1) = 0, and V E
b
′′(x) > 0 for x ∈ (y0, y1). (A.9)
Thus,
μ(x)V E
b
′(x) − δV E
b (x) + l ̄((γ − β) − V E
b
′(x)) + Λ = − σ2(x)
2 VE
b
′′(x) < 0 for x ∈ (y0, y1),
(A.10)
μ(y1)V E
b
′(y1) − δV E
b (y1) + l ̄((γ − β) − V E
b
′(y1)) + Λ = − σ2(y1)
2 VE
b
′′(y1) = 0. (A.11)
Also, (μ(y1)V E
b
′(y1)−μ(x)V E
b
′(x))−δ(V E
b (y1)−V E
b (x))−l ̄(V E
b
′(y1)−V E
b
′(x)) > 0 for x ∈ (y0, y1).
As a result, by dividing both sides by y1 −x, then taking the limit limx↑y1 and using V E
b
′′(y1) = 0
we obtain (μ′(y1) − δ)V E
b
′(y1) ≥ 0. On the other hand, since μ′(y1) < δ and V E
b
′(y1) > 0 (by the
increasing property of V E
b and (A.9)), we have (μ′(y1)−δ)V E
b
′(y1) < 0, which is a contradiction. (ii) Recall from Lemma 3.1 we know that V E
b satisfies (3.4) and hence,
VE
b
′′(b−) = − 2(μ(b)V E
b
′(b) − δV E
b (b) + Λ)
σ2(b)
= − 2(μ(b)V E
b
′(b) − δV E
b (b) + l ̄((γ − β) − V E
b
′(b)) + Λ − l ̄((γ − β) − V E
b
′(b))
σ2(b)
=VE
b
′′(b+) + 2l ̄((γ − β) − V E
b
′(b))
σ2(b) ≤ V E
b
′′(b+) ≤ 0, (A.12)
where the second to the last inequality follows by noting V E
b
′(b) ≥ γ − β and the last equality follows by the result in (i). We use proof by contradiction again. Suppose there exists some y0 ∈ (0, b) such that V E
b
′′(y0) >
0. By noting V E
b
′′(b−) ≤ 0 ((A.12)) and the continuity of V E
b
′′(x) on (0, b), we know there exists
a y1 ∈ (y0, b) such that V E
b
′′(y1) = 0 and V E
b
′′(x) > 0 for x ∈ (y0, y1). Following the same lines starting from (A.10) until the end of proof for (i) we can obtain a contradiction. (iii) We now consider the situation where μ(0) < 0, and C1 (b) > Λ
−2μ(0) . By using the expression
for V E
b in Lemma 3.1 we can obtain V E
b
′(0+) = 2C1 (b) > Λ
−μ(0) . Suppose the statement is not
true, that is, V E
b
′(b) ≥ γ − β. Then it follows by (ii) that
VE
b
′′(0+) ≤ 0. (A.13)
On the other hand, however,
− σ2(0)
2 VE
b
′′(0+) = μ(0)V E
b
′(0+) − δV E
b (0) + Λ = μ(0)V E
b
′(0+) + Λ
< μ(0) Λ
−μ(0) + Λ = 0, (A.14)
where the last inequality follows by noting μ(0) < 0, and V E
b
′(0+) > Λ
−μ(0) . The inequality
(A.14) implies that V E
b
′′(0+) > 0, which is a contradiction to (A.13). Hence, V E
b
′(b) < γ − β.
From (i) we know V E
b
′′(x) ≤ 0 for x > b. Therefore, Hence, V E
b
′(x) ≤ V E
b
′(b) < γ − β.

Present-Bias Effects on Carbon Emissions 29
(iv) By using the expression for V E
b in Lemma 3.1 we can obtain V E
b
′(0+) = 2C1 (b). Further
note from Lemma 3.2 that V E
b
′(0+) ≥ 0. From this we can conclude C1 (b) ≥ 0, which completes the proof. □
The following is an immediate consequence of Lemma A.2.
Corollary A.3 If 0 < b∗
E < ∞, then V E
b∗
E
′(b∗
E) = γ −β, V E
b∗
E
′′(x) ≤ 0 for x ≥ 0, V E
b∗
E
′(x) ≥ γ − β
for 0 ≤ x < b∗
E and V E
b∗
E
′(x) ≤ γ − β for x ≥ b∗
E. If b∗
E = ∞, then for any b ≥ 0, V E
b
′(b) > γ − β
and V E
b
′′(x) ≤ 0 for x ∈ [0, b).
Lemma A.4 If b∗
E = 0, then V E
b∗
E
′(x) ≤ γ − β for x ≥ 0.
Proof. From (3.11) we know that if b∗
E = 0, V0E
′(0) ≤ γ − β. Since from Lemma A.2 (i) we
know V0E
′′(x) ≤ 0 for x > 0, we can obtain V E
b∗
E
′(x) = V0E
′(x) ≤ V0E
′(0) ≤ γ − β for x ≥ 0. □
Proof of Theorem 3.3 (i) We first use proof by contradiction to show b∗
E < ∞. Suppose b∗
E = ∞. Then, from (3.11) we have V E
b
′(b) > γ − β for all b > 0, and thus by Lemma A.2(ii)
we can obtain V E
b
′′(x) ≤ 0 for 0 < x < b and all b ≥ 0. This implies V E
b
′(x) ≥ V E
b
′(b) > γ − β for all b > 0 and 0 < x < b. As a result, for all b ≥ 0, V E
b (x) ≥ (γ − β)x for 0 ≤ x ≤ b.
Thus, for any x ≥ 0, lim supb↑∞ V E
b (x) ≥ (γ − β)x. However, according to Lemma 3.2 we know
VE
b (x) ≤ supL∈Π V E
L (x) = V E (x) ≤ (γ−β)l ̄+Λ
δ . This is a contradiction and completes the proof.
(ii) We now consider the case μ(0) < 0 and proceed to prove b∗
E ≤ b0. If b0 = ∞, then this is obviously true. So we only need to consider the case b0 < ∞. Recall the definition b0 = inf{b ≥ 0 : C1 (b) + Λ
2μ(0) > 0}. Then C1 (b) ≤ − Λ
2μ(0) for 0 ≤ b ≤ b0, C1 (b0) = − Λ
2μ(0) and there
exists a sequence bn ↓ b0 such that C1 (bn) > − Λ
2μ(0) . It then follows from Lemma A.2 (iii)) that
VE
bn
′(bn) < γ − β. Note that V E
b is continuously differentiable, and V E
b
′(b) = C3(b)V ′
E(b) + u′(b).
Hence, C3(bn)V E
bn
′(bn) + u′(bn) < γ − β for all n ≥ 1. This combined with the definition for b∗ (see (3.11)), b∗
E = inf{b > 0 : C3(b)v′3(b) + u′(b) ≤ γ − β}, and the fact that bn ↓ b0 implies
b∗
E ≤ b0.
(iii) Note we have already shown in (i) that b∗
E is finite, and in Lemma 3.1 that V E
b∗
E is con
tinuously differentiable on [0, ∞) and twice continuously differentiable on (0, ∞). From (Zhu et al., 2020, Lemma A.1) with g there being set to V E
b∗
E , we obtain that for any L ∈ π and some
positive sequence {τn} increasing to ∞,
Ex
h
e−δ(τ L∧τn∧t)V E
b∗
E (XL
τ L∧τn∧t)
i
=V E
b∗
E (x) + Ex
"
Z τ L∧τn∧t
0
e−δs 1
2 σ2(XL
s )V E
b∗
E
′′ (X L
s ) + (μ(XL
s ) − ls)V E
b∗
E
′ (X L
s ) − δV E
b∗
E (XL
s ) ds
#
.
(A.15)

Present-Bias Effects on Carbon Emissions 30
Since V E
b∗
E (x) is a solution to (3.4) and (3.5), we have
σ2(XsL
2 )V E
b∗
E
′′ (X L
s ) + (μ(XL
s ) − ls)V E
b∗
E
′ (X L
s ) − δV E
b∗
E (XL
s)
= σ2(XsL)
2 VE
b∗
E
′′ (X L
s ) + (μ(XL
s ) − l ̄I{XL
s ≥ b∗
E})V E
b∗
E
′ (X L
s ) − δV E
b∗
E (XL
s ) + l ̄(γ − β)I{XL
s ≥ b∗
E}
+ Λ + (l ̄I{XL
s ≥ b∗
E} − ls)V E
b∗
E
′ (X L
s ) − l ̄(γ − β)I{XL
s ≥ b∗
E}) − Λ
=0 + (l ̄I{XL
s ≥ b∗
E} − ls)V E
b∗
E
′ (X L
s ) − l ̄(γ − β)I{XL
s ≥ b∗
E}) − Λ
=(l ̄− ls)V E
b∗
E
′ (X L
s )I{XL
s ≥ b∗
E} − lsV E
b∗
E
′ (X L
s )I{XL
s < b∗
E} − l ̄(γ − β)I{XL
s ≥ b∗
E}) − Λ
≤(l ̄− ls)(γ − β)I{XL
s ≥ b∗
E} − ls(γ − β)I{XL
s < b∗
E} − l ̄(γ − β)I{XL
s ≥ b∗
E}) − Λ
= − (γ − β)ls − Λ, (A.16)
where the last inequality follows by noting 0 ≤ ls ≤ l ̄, V E
b∗
E
′(x) ≤ γ − β for x ≥ b∗
E and
VE
b∗
E
′(x) ≥ γ − β for 0 ≤ x < b∗
E (see Corollary A.3 and Lemma A.4). Combining (A.15) and
(A.16) yields:
VE
b∗
E (x) ≥Ex
"
e−δ(τ L∧τn∧t)V E
b∗
E (XL
τ L∧τn∧t) +
Z τ L∧τn∧t
0
e−δs((γ − β)ls + Λ) ds
#
, x ≥ 0. (A.17)
Note that V E
b∗
E is a bounded function and V E
b∗
E (XL
τL) = V E
b∗
E (0) = 0. By letting n → ∞ and t → ∞
on (A.17) and applying dominated convergence and monotone convergence, we arrive at
VE
b∗
E (x) ≥ Ex
"
Z τL
0
e−δs((γ − β)ls + Λ) ds
#
= PE(x; L), x ≥ 0. (A.18)
As the above inequality holds for all admissible strategies, V E
b∗
E (x) ≥ supL∈Π PE(x; L) = V E(x)
for x ≥ 0. On the other hand, Lb∗
E is an admissible strategy and so V E
b∗
E (x) = PE(x; Lb∗
E) ≤
supL∈Π PE(x; L) = V E(x) for x ≥ 0. This implies Lb∗
E is an optimal strategy. □
Proof to Lemma 3.4. It follows by (Zhu et al., 2020, Lemma A.1) that for any finite t > 0,
E
h
e−δ(Tˆx∧τn∧t)v3(Y x
Tˆx∧τn∧t)
i
=v3(x) + E
"
Z Tˆx∧τn∧t
0
e−δs 1
2 σ2(Y x
s ) + (μ(Y x
s ) − l ̄)v′
3(Y x
s ) − δv3(Y x
s ) ds
#
.
Note that we have 1
2 σ2(Ysx)v′3′(Ysx) + (μ(Ysx) − l ̄)v′3(Ysx) − δv3(Ysx) = 0. Therefore,
v3(x) = E
h
e−δ(Tˆx∧τn∧t)v3(Y x
Tˆx∧τn∧t)
i
for x ≥ 0. Since the function v3(·) is bounded, by using
the dominated convergence twice we can obtain
nli→m∞ tli→m∞ E
h
e−δ(Tˆx∧τn∧t)v3(Y x
Tˆx∧τn∧t)
i
=E
h
e−δTˆx v3(Y x
Tˆx )
i
=E
h
e−δTˆx i
, x ≥ 0 (A.19)
It then follows by (3.13) that limx→∞ v3(x) = limx→∞ E e−δTˆx = E limx→∞ e−δTˆx = 0,
where the second-to-last equality follows from the dominated convergence theorem, and the last equality follows by noting Tˆx → ∞ as x goes to ∞.

Present-Bias Effects on Carbon Emissions 31
Similarly, we know that for any finite t > 0,
E
h
e−δ(Tˆx∧τn∧t)u(Y x
Tˆx∧τn∧t)
i
= u(x) + E
"
Z Tˆx∧τn∧t
0
e−δs 1
2 σ2(Y x
s )u′′(Y x
s ) + (μ(Y x
s ) − l ̄)u′(Y x
s ) − δu(Y x
s ) ds
#
.
Note we have 1
2 σ2(Ysx)u′′(Ysx) + (μ(Ysx) − l ̄)u′(Ysx) − δu(Ysx) + (l ̄(γ − β) + Λ) = 0. Hence,
u(x) =E
h
e−δ(Tˆx∧τn∧t)u(Y x
Tˆx∧τn∧t)
i
+E
"
Z Tˆx∧τn∧t
0
e−δs l ̄(γ − β) + Λ ds
#
, x ≥ 0. (A.20)
Since the function u(·) is bounded, by using the dominated convergence we can obtain
nli→m∞ tli→m∞ E
h
e−δ(Tˆx∧τn∧t)u(Y x
Tˆx∧τn∧t)
i
=E
h
e−δTˆx u(Y x
Tˆx )
i
= 0, x ≥ 0, (A.21)
where the last equality follows by noticing Y x
Tˆx = 0 and u(0) = 0. Employing monotone
convergence, we get
nli→m∞ tli→m∞ E
"
Z Tˆx∧τn∧t
0
e−δs(Λ + (γ − β)l ̄) ds
#
=E
"
Z Tˆx
0
e−δs(Λ + (γ − β)l ̄) ds
#
, x ≥ 0.
(A.22)
Combining (A.20), (A.21) and (A.22) yields (3.13). Then from (3.13) we know that
xli→m∞ u(x) = xli→m∞ E
"
Z Tˆx
0
e−δs(Λ + (γ − β)l ̄) ds
#
=E
"
xli→m∞
Z Tˆx
0
e−δs(Λ + (γ − β)l ̄) ds
#
= Λ + (γ − β)l ̄
δ,
where the second to the last equality follows from the dominated convergence theorem, and the last equality follows by noting Tˆx → ∞ as x goes to ∞. □
B Derivations for Subsection 3.1
Recall that V E
b (·) is the bounded and continuously differentiable solution to the following equa
tions: σ2
2 g′′(x) + μg′(x) − δg(x) + Λ = 0 for 0 < x < b, and σ2
2 g′′(x) + (μ − l ̄)g′(x) − δg(x) + (γ −
β)l ̄+ Λ = 0 for x > b with g(0) = 0. Here eθ1x and e−θ2x form a set of linearly independent
solutions to σ2
2 g′′(x) + μg′(x) − δg(x) = 0 and have a Wronskian −(θ1 + θ2)e(θ1−θ2)x, and eθ3x
and e−θ4x form a set of linearly independent solutions to σ2
2 g′′(x) + (μ − l ̄)g′(x) − δg(x) = 0 and
have a Wronskian −(θ3 + θ4)e(θ3−θ4)x. By using the variation of parameters method, we obtain
VE
b (x) =
(K1(b)eθ1x − K1(b)e−θ2x − 2Λ
σ2
eθ1 x −1
θ1(θ1+θ2) + 2Λ
σ2
1−e−θ2 x
θ2(θ1+θ2) , 0 ≤ x < b,
K4(b)e−θ4x − 2((γ−β)l ̄+Λ)
σ2
−1
θ3(θ3+θ4) + 2((γ−β)l ̄+Λ)
σ2
1−e−θ4 x
θ4(θ3+θ4) , x ≥ b,
where K1(b) and K4(b) are determined by V E
b (b−) = V E
b (b+), V E
b
′(b−) = V E
b
′(b+):
K1(b) =
2Λ(θ2(θ1+θ4)eθ1b+θ1(θ4−θ2)e−θ2b−θ4(θ1+θ2))
σ2θ1θ2(θ1+θ2) + 2((γ−β)l ̄+Λ)
σ 2 θ3
(θ1 + θ4)eθ1b + (θ2 − θ4)e−θ2b ≜ I1(b)Λ + I2(b),
K4(b) =
2Λ(eθ1 b −e−θ2 b )
σ2(θ1+θ2) + 2((γ−β)l ̄+Λ)e−θ4b
σ2(θ3+θ4) − (θ1eθ1b + θ2e−θ2b)K1(b)
θ4e−θ4b ≜ I3(b)Λ + I4(b),
where I1(b)–I4(b) are given in (3.21)-(3.24). This leads to (3.18).

Present-Bias Effects on Carbon Emissions 32
C Proofs of Section 4
Lemma C.1 For any strategy, the associated objective function is nonnegative and has an
initial value 0 (the value when the initial state is 0), and has an upper bound ((γ−β)l ̄+Λ)
δ
λα+δ
λ+δ .
Proof. From its definition, we can see that for any L, L ̃ ∈ Π, P0(x; L, L ̃) ≥ 0 for x ≥ 0. Note that for any admissible strategy, the excess emission rate has an upper bound l ̄. So for any L, L ̃ ∈ Π,
P(x; L, L ̃) ≤ Ex
Z η0
0
e−δt((γ − β)l ̄+ Λ) dt +
Z∞
η0
αe−δt((γ − β)l ̄+ Λ) dt
= (γ − β)l ̄+ Λ
δ Ex[1 − (1 − α)e−δη0] = (γ − β)l ̄+ Λ
δ
λα + δ
λ + δ , x ≥ 0. □
Lemma C.2 (i) For any b ≥ 0, there is a bounded function that is continuously differentiable on [0, ∞) and twice continuously differentiable on [0, b) ∪ (b, ∞), and satisfies the following equations:
σ2(x)
2 g′′(x) + μ(x)g′(x) − (λ + δ)g(x) + λαV E
b (x) + Λ = 0 for 0 < x < b, (C.1)
g(0) = 0, (C.2)
σ2(x)
2 g′′(x) + (μ(x) − l ̄)g′(x) − (λ + δ)g(x) + λαV E
b (x) + Λ + l ̄(γ − β) = 0 for x > b, (C.3)
(ii) The above solution is unique and equals Vb(x). (iii) The function  ̄h(b) := V ′
b (b) as a function
of b is continuous on [0, ∞), and limb↓0 V ′′
b (0+) = V0′′(0+).
Proof. (i) This can be proven by employing arguments similar to the proof for Lemma 3.1.
Define v1(·) and v2(·) to be the solutions to σ2(x)
2 g′′(x) + μ(x)g′(x) − (λ + δ)g(x) = 0 on [0, ∞)
with the following two sets of initial values respectively, v1(0) = 1 and v′1(0) = 1, and v2(0) = 1
and v′2(0) = −1. The existence and uniqueness of v1 and v2 are guaranteed by Theorem 5.4.2. of Krylov (1996). We can see that v1 and v2 are linearly independent. Define
W 1(x) = v1(x)v′
2(x) − v2(x)v′
1(x),
B1(x) = v1(x)
Zx
0
v2(y)
W 1(y)
2(Λ + λαV E
b (x))
σ2(y) dy − v2(x)
Zx
0
v1(y)
W 1(y)
2(Λ + λαV E
b (x))
σ2(y) dy.
Then all the solutions to (C.1) have the following general form: c1 v1(x) + c2v2(x) + B1(x),
where c1 and c2 are constants. Here B1(x) is a particular solution to σ2(x)
2 g′′(x) + μ(x)g′(x) −
(λ + δ)g(x) + λαV E
b (x) + Λ + l ̄(γ − β) = 0 with B1(0) = 0 and B′
1(0) = 0.
Let v3(·) be a bounded solution to σ2(x)
2 g′′(x) + (μ(x) − l ̄)g′(x) − (λ + δ)g(x) = 0 on [0, ∞)
with initial value g(0) = 1. Let ub(x) be a bounded solution to σ2(x)
2 g′′(x) + (μ(x) − l ̄)g′(x) −
(λ + δ)g(x) + λαV E
b (x) + Λ + (γ − β)l ̄ = 0 on [0, ∞) with initial value g(0) = 0. Note V E
b (x)
is bounded on [0, ∞) (see Lemma 3.2) and V E
b (x) = 0 for x < 0. By extending the differential equation to (−∞, −1) ∪ (0, ∞) and adding the boundary condition g(−1) = 1, and then using Corollary 8.1 of Pao (1992) we can show v3 and ub exist. Then, for any constant C3, the function C3v3(x) + ub(x) is a solution to (C.3). For b ≥ 0, define a new function
gb(x) =
(
C1(b)v1(x) − C1(b)v2(x) + B1(x) 0 ≤ x < b
C3(b)v3(x) + ub(x) x ≥ b,

Present-Bias Effects on Carbon Emissions 33
where C1(b) and C3(b) satisfy the following:
when b > 0, C1(b)v1(b) − C1(b)v2(b) + B1(b) = C3(b)v3(b) + ub(b), (C.4)
C 1 (b)v ′
1(b) − C1(b)v′
2(b) + B′
1(b) = C3(b)v′
3(b) + u′
b(b), (C.5)
and when b = 0, C3(0) = 0. (C.6)
All the arguments following (A.4) in the proof of Lemma 3.1 (i) can be adapted here after replacing vi(x) by vi(x), B1(x) by B1(x), Ci(b) by Ci(b) i = 1, 2, 3, and gb(x) by gb(x), respectively. (ii) Consider any fixed b ≥ 0. It is sufficient to show that any solution in (i) coincides with Vb(x) for x ≥ 0. Let g be any bounded solution that meets all the requirements in (i). It follows by (Zhu et al., 2020, Lemma A.1) that for x ≥ 0,
Ex
h
e−(λ+δ)(τ b∧τn∧t)g(X b
τ b∧τn∧t)
i
= g(x) + Ex
"
Z τ b∧τn∧t
0
e−(λ+δ)s 1
2 σ2(Xb
s )g′′(Xb
s ) + (μ(Xb
s) − lb
s )g′ (X b
s ) − (λ + δ)g(Xb
s ) ds
#
.
Note that lsb = l ̄I{Xsb ≥ b} and that g satisfies (C.1) and (C.3), and so we have
1
2 σ2(Xb
s )g′′(Xb
s ) + (μ(Xb
s) − lb
s )g′ (X b
s ) − (λ + δ)g(Xb
s ) = −Λ − l ̄(γ − β)I{Xb
s ≥ b} − λαV E
b (x).
Consequently,
g(x) =Ex
h
e−(λ+δ)(τ b∧τn∧t)g(X b
τ b∧τn∧t)
i
+ Ex
"
Z τ b∧τn∧t
0
e−(λ+δ)s(Λ + l ̄(γ − β)I{Xb
s ≥ b} + λαV E
b (x)) ds
#
. (C.7)
Since the function g(·) is bounded, using the dominated convergence twice we can obtain
tli→m∞ nli→m∞ Ex
h
e−(λ+δ)(τ b∧τn∧t)g(X b
τ b∧τn∧t)
i
= Ex
h
e−(λ+δ)τ b g(Xb
τb)
i
= 0, (C.8)
where the last equality follows by noticing Xb
τb = 0 and g(0) = 0. By using the monotone convergence twice we have
tli→m∞ nli→m∞ Ex
"
Z τ b∧τn∧t
0
e−(λ+δ)s(Λ + (γ − β)l ̄I{Xb
s ≥ b}) ds
#
=Ex
"
Z τb
0
e−(λ+δ)s(Λ + (γ − β)l ̄I{Xb
s ≥ b}) ds
#
=Ex
"
Z τ b∧η0
0
e−δs(Λ + (γ − β)l ̄I{Xb
s ≥ b}) ds
#
, (C.9)
where the last equality follows by using (Zhu et al., 2020, Eq.(A.2)). We then have
Ex
"
Z τb
0
λαe−(λ+δ)sV E
b (Xb
s ) ds
#
= Ex
h
αe−δη0 V E
b (Xb
η0 )I{η0 ≤ τ b}
i
. (C.10)
By letting t → ∞ and n → ∞ on both sides of (C.7), and then using (C.8) -(C.10), we conclude
g(x) = Ex
"
Z τ b∧η0
0
e−δs(Λ + (γ − β)l ̄I{Xb
s ≥ b}) ds + αe−δη0 V E
b (Xb
η0 )I{η0 ≤ τ b}
#
= Vb(x), x ≥ 0,
where the last equality follows using the definition of Vb in (4.5). (iii) This can be proven by following the same lines as in the proof of Lemma 3.1 (iii). □

Present-Bias Effects on Carbon Emissions 34
Remark C.1 From the last lemma it follows immediately that Vb(x) is continuously differentiable on [0, ∞) and twice continuously differentiable on [0, b) ∪ (b, ∞); additionally,
σ2(x)
2 V ′′
b (x) + μ(x)V ′
b (x) − (λ + δ)Vb(x) + λαV E
b (x) + Λ = 0, 0 < x < b, (C.11)
σ2(x)
2 V ′′
b (x) + (μ(x) − l ̄)V ′
b (x) − (λ + δ)Vb(x) + λαV E
b (x) + l ̄(γ − β) + Λ = 0, x > b, (C.12)
Vb(0) = 0. (C.13)
Furthermore,
Vb(x) =
(
C1(b)v1(x) − C1(b)v2(x) + B1(x) 0 ≤ x < b
C3(b)v3(x) + ub(x) x ≥ b,
where C1(b) and C3(b) are constants satisfying the following:
C1(b)v1(b) − C1(b)v2(b) + B1(b) = C3(b)v3(b) + ub(b), (C.14)
C 1 (b)v ′
1(b) − C1(b)v′
2(b) + B′
1(b) = C3(b)v′
3(b) + u′
b(b), (C.15)
that is,
C1(b) = (B1(b) − ub(b)v′3(b) − (B′
1(b) − u′
b(b)v3(b)
(v′1(b) − v′2(b)v3(b) − (v1(b) − v2(b)v′3(b) , (C.16)
C3(b) = (u′
b(b) − B′
1(b)(v1(b) − v2(b) − (ub(b) − B1(b)(v′1(b) − v′2(b)
(v′1(b) − v′2(b)v3(b) − (v1(b) − v2(b)v′3(b) . (C.17)
If V ′
b (b) = γ − β, then Vb(x) is twice continuously differentiable on [0, ∞).
Recall that V E
b is the expected profit function associated with the threshold strategy, Lb,
under the exponential discounting. We can derive the following relationship between V E
b and Vb.
Lemma C.3 For any b ≥ 0, αV E
b (x) ≤ Vb(x) ≤ V E
b (x) and 0 ≤ V ′
b (x) ≤ V E
b
′(x) for x ≥ 0.
Proof. It follows from the definitions of V E
b in (3.3) and Vb in (4.5) that when 0 < α < 1,
Vb(x) = Ex+h
Z η0∧τ b
0
e−δt((γ − β)l ̄I{Xb
t ≥ b} + Λ) dt
+ I{η0 < τ b}
Z τb
η0
αe−δt((γ − β)l ̄I{Xb
t ≥ b} + Λ) dt
≥ α Ex+h
Z η0∧τ b
0
e−δt((γ − β)l ̄I{Xb
t ≥ b} + Λ) dt
+
Z τb
η0∧τ b
e−δt((γ − β)l ̄I{Xb
t ≥ b} + Λ) dt
!
= αV E
b (x), x ≥ 0, (C.18)
Vb(x) = Ex+h
Z η0∧τ b
0
e−δt((γ − β)l ̄I{Xb
t ≥ b} + Λ) dt
+ I{η0 < τ b}
Z τb
η0
αe−δt((γ − β)l ̄I{Xb
t ≥ b} + Λ) dt
≤ Ex+h
Z η0∧τ b
0
e−δt((γ − β)l ̄I{Xb
t ≥ b} + Λ) dt
+ I{η0 < τ b}
Z τb
η0
e−δt((γ − β)l ̄I{Xb
t ≥ b} + Λ) dt = V E
b (x), x ≥ 0, (C.19)

Present-Bias Effects on Carbon Emissions 35
where the last inequalities in (C.18) and (C.19) both follow by noting α ≤ 1. For any x > 0, let Xx,b
t represent the controlled stochastic process dXx,b
t = (μ(Xx,b
t )−
l ̄I {X x,b
t ≥ b}) dt + σ(Xx,b
t− ) dWt with Xx,b
0− = x. Now consider Xx,b
t and Xx+h,b
t with h > 0. By adapting the comparison theorem (Theorem 1.1 in Ikeda and Watanabe (1977)) we can show that with probability 1, Xx+h,b
t ≥ Xx,b
t for all t ≥ 0, and therefore, when Xx+h,b
t produces excess
emissions at the maximal rate l ̄, Xx,b
t may or may not produce excess emissions, and when it
does, Xx+h,b
t also generates excess emissiona at the same rate with probability 1. As a result, by noting the expression of Vb in terms of excess emission rates, we can observe Vb(x) ≤ Vb(x + h) for h > 0 and thus, V ′
b (x) ≥ 0 for x ≥ 0. It follows from (3.3) and (4.5) that
VE
b (x + h) − Vb(x + h) − V E
b (x) − Vb(x)
= Ex+h
Z τb
0
e−δt((γ − β)l ̄I{Xb
t ≥ b} + Λ) dt
− Ex+h
Z η0∧τ b
0
e−δt((γ − β)l ̄I{Xb
t ≥ b} + Λ) dt +
Z τb
η0∧τ b
αe−δt((γ − β)l ̄I{Xb
t ≥ b} + Λ) dt
!
− Ex
Z τb
0
e−δt((γ − β)l ̄I{Xb
t ≥ b} + Λ) dt
− Ex
Z η0∧τ b
0
e−δt((γ − β)l ̄I{Xb
t ≥ b} dt + Λ) +
Z τb
η0∧τ b
αe−δt((γ − β)l ̄I{Xb
t ≥ b} + Λ) dt
!
= Ex+h
Z τb
η0∧τ b
(1 − α)e−δt((γ − β)l ̄I{Xb
t ≥ b} + Λ) dt
− Ex
Z τb
η0∧τ b
(1 − α)e−δt((γ − β)l ̄I{Xb
t ≥ b} + Λ) dt
= (1 − α) Ex+h e−δη0 I{η0 < τ b}V E
b (Xb
η0 ) dt − Ex e−δη0 I{η0 < τ b}V E
b (Xb
η0) dt , (C.20)
where the second to the last equality follows by first calculating the integrals into two mutually exclusive scenarios η0 ≥ τ b (which makes the integral 0) and η0 < τ b, and then applying the Markov property and using the definition for V E
b in (3.3).
Let Xx,b
t and Xx+h,b
t be defined as before. We use τ x,b and τ x+h,b to represent the corresponding depletion times, respectively. We can observe that
Ex+h e−δη0 I{η0 < τ b}V E
b (Xb
η0 ) dt = E e−δη0 I{η0 < τ x+h,b}V E
b (Xx+h,b
η0 ) dt , (C.21)
Ex e−δη0 I{η0 < τ b}V E
b (Xb
η0 ) dt = E e−δη0 I{η0 < τ x,b}V E
b (Xx,b
η0 ) dt . (C.22)
Using the same stochastic comparison argument as above, we know that with probability 1,
X x+h,b
t ≥ Xx,b
t for all t ≥ 0, and thus τ x+h,b ≥ τ x,b with probability 1. Note that η0 is
independent of {Xx+h,b
t } and {Xx,b
t } and thus, also independent of τ x+h,b and τ x,b. Further
note that the function V E
b is increasing. We can conclude that with probability 1, e−δη0I{η0 <
τ x+h,b}V E
b (Xx+h,b
η0 ) ≥ e−δη0 I{η0 < τ x,b}V E
b (Xηx0,b). As a result,
E e−δη0 I{η0 < τ x+h,b}V E
b (Xx+h,b
η0 ) dt ≥ E e−δη0 I{η0 < τ x,b}V E
b (Xx,b
η0 ) dt . (C.23)
This, along with (C.20)-(C.22), implies that
VE
b (x + h) − Vb(x + h) − V E
b (x) − Vb(x) ≥ 0, x ≥ 0, h > 0, (C.24)
which further implies V E
b
′(x) − V ′
b (x) ≥ 0 for x ≥ 0. □

Present-Bias Effects on Carbon Emissions 36
Lemma C.4 Let C1(b) be the same as that defined in (C.16). For b ≥ 0, suppose either (a) μ(0) ≥ 0, or (b) μ(0) < 0 and C1 (b) ≤ Λ
−2μ(0) . (i) The function V0(x) is concave on [0, ∞).
(ii) If V ′
b (b) = γ − β, then Vb(x) is concave on [0, ∞) and thus V ′
b (x) ≥ γ − β for x ∈ [0, b] and
V′
b (x) ≤ γ − β for x ∈ (b, ∞).
Proof. Note that Vb(0) = 0, and Vb(x) is increasing and bounded. We first show that there exists a positive sequence {xn} with limn→∞ xn = ∞ such that
V ′′
b (xn) ≤ 0. (C.25)
We follow the same idea as in Theorem 3.4 of Zhu (2015), and use a proof by contradiction to prove (C.25). Suppose the contrary, that is, for some M > 0, V ′′
b (x) > 0 for all x ≥ M .
This implies V ′
b (x) > V ′
b (M ) for x > M and consequently, Vb(x) > Vb(M ) + V ′
b (M )(x − b) for
x > M . By noting V ′
b (M ) > 0 (due the strictly increasing property of Vb), we conclude that Vb(x) converges to infinity when x is infinitely large, which is a contradiction to the boundedness of Vb. Recall from (C.11) and (C.12) that for x ≥ 0,
σ2(x)
2 V ′′
b (x) + μ(x)V ′
b (x) − (λ + δ)Vb(x) + l ̄((γ − β) − V ′
b (x))I{x ≥ b} + λαV E
b (x) + Λ = (0C. .26)
Letting x ↓ 0 and noticing Vb(0) = 0 (see (C.13)) and V E
b (0) = 0 (see Lemma 3.1),we can obtain that for b ≥ 0,
σ2(0)
2 V ′′
b (0+) = −μ(0)V ′
b (0+) − Λ
≤
(
0 if μ(0) ≥ 0,
−μ(0)V E
b
′(0+) − Λ ≤ 0 if μ(0) < 0, cind (b) ≤ Λ
−2μ(0) , (C.27)
where the inequality in the first case above follows by the non-negativity of V ′
b (x) due to the fact that Vb is increasing, and in the second case, the second-to-last inequality follows by noting −μ(0) > 0 and V ′
b (x) ≤ V E
b
′(x) for x > 0 (Lemma C.3), and the last inequality follows by
noticing V E
b
′(0+) = 2C1 (b) ≤ Λ
−μ(0) (which can be obtained from the expression for V E
b in
Lemma 3.1). Thus,
V ′′
b (0+) ≤ 0, b ≥ 0. (C.28)
Since V ′
b (b) = γ − β for b > 0, by Remark C.1 we know that for any b > 0, Vb(x) is twice continuously differentiable on [0, ∞). For b = 0, we already know that V0(x) is twice continuously differentiable. We now use proof by contradiction to show that for b ≥ 0, Vb(x) is concave. Suppose that the statement is not true. That is, for some b ≥ 0, we can find y0 > 0 such that V ′′
b (y0) > 0. Let
{xn} be the sequence defined in the same way as before: limn→∞ xn = ∞ and V ′′
b (xn) ≤ 0. We
can find a positive integer N such that xN > y0. By noting that V ′′
b (xN ) ≤ 0, V ′′
b (0+) ≤ 0 (from
(C.28)), and V ′′
b (y0) > 0 (the assumption made at the beginning of this proof by contradiction),
and the continuity of V ′′
b , we conclude that there exists y1, y2 with 0 ≤ y1 < y0 < y2 ≤ xN such that
V ′′
b (y1) = 0, V ′′
b (y2) = 0, and V ′′
b (x) > 0 for x ∈ (y1, y2). (C.29)
Hence,
V′
b (y2) > V ′
b (y1). (C.30)

Present-Bias Effects on Carbon Emissions 37
It follows by (C.26) that for x ≥ 0,
σ2(x)
2 V ′′
b (x) = (λ + δ)Vb(x) − μ(x)V ′
b (x) − l ̄((γ − β) − V ′
b (x))I{x ≥ b} − λαV E
b (x) − Λ.
As V ′
b (b) = γ − β, we have l ̄((γ − β) − V ′
b (x))I{x ≥ b} = l ̄((γ − β) − V ′
b (x))I{x > b}. Hence, for x ≥ 0,
σ2(x)
2 V ′′
b (x) = (λ + δ)Vb(x) − μ(x)V ′
b (x) − l ̄((γ − β) − V ′
b (x))I{x > b} − λαV E
b (x) − Λ.
(C.31)
By combining (C.29) and (C.31), we can obtain that for i = 1, 2, and x ∈ (y1, y2),
(λ + δ)Vb(yi) − μ(yi)V ′
b (yi) − l ̄((γ − β) − V ′
b (yi))I{yi > b} − λαV E
b (yi) − Λ
=1
2 σ2(yi)V ′′
b (yi) = 0 < 1
2 σ2(x)V ′′
b (x),
=(λ + δ)Vb(x) − μ(x)V ′
b (x) − l ̄((γ − β) − V ′
b (x))I{x > b} − λαV E
b (x) − Λ, (C.32)
which implies that for i = 1, 2, and for x ∈ (y1, y2),
(λ + δ)Vb(yi) − μ(yi)V ′
b (yi) − l ̄((γ − β) − V ′
b (yi))I{yi > b} − λαV E
b (yi)
<(λ + δ)Vb(x) − μ(x)V ′
b (x) − l ̄((γ − β) − V ′
b (x))I{x > b} − λαV E
b (x). (C.33)
By dividing (C.33) by x − yi and rearranging the terms, it follows that for x ∈ (y1, y2),
(λ + δ) Vb(x) − Vb(y1)
x − y1
+ −μ(x)V ′
b (x) + μ(y1)V ′
b (y1)
x − y1
+l ̄(V ′
b (x) − (γ − β))I{x > b} − (V ′
b (y1) − (γ − β))I{y1 > b}
x − y1
− λα V E
b (x) − V E
b (y1)
x − y1
> 0,
δ Vb(x) − Vb(y2)
x − y2
+ −μ(x)V ′
b (x) + μ(y2)V ′
b (y2)
x − y2
+l ̄(V ′
b (x) − (γ − β))I{x > b} − (V ′
b (y2) − (γ − β))I{y2 > b}
x − y2
− λα V E
b (x) − V E
b (y2)
x − y2
< 0.
By letting x ↓ y1 and x ↑ y2 in the above two equations respectively, we can obtain
(λ + δ)V ′
b (y1) − μ(y1)V ′′
b (y1) − μ′(y1)V ′
b (y1) + l ̄V ′′
b (y1)I{y1 > b} − λαV E
b
′(y1) ≥ 0,
(λ + δ)V ′
b (y2) − μ(y2)V ′′
b (y2) − μ′(y2)V ′
b (y2) + l ̄V ′′
b (y2)I{y2 > b} − λαV E
b
′(y2) ≤ 0.
Therefore, by noting V ′′
b (y1) = 0 = V ′′
b (y2) (see (C.29)) we have
(λ + δ − μ′(y1))V ′
b (y1) − λαV E
b
′(y1) ≥ 0 ≥ (λ + δ − μ′(y2))V ′
b (y2) − λαV E
b
′(y2). (C.34)
Note that the increasing property of Vb and (C.30) imply
0≤V′
b (y1) < V ′
b (y2). (C.35)
Recall that we are under the assumption that V E
b
′(b) = γ − β for b > 0. It follows from
Lemma C.3 that V E
b
′(b) ≥ V ′
b (b) = γ − β when b > 0, and then from Lemma A.2(ii) that when
b > 0, V E
b
′′(x) ≤ 0 for x > 0. For b = 0, we know from Lemma A.2(i) that V E
b
′′(x) = V0E(x) ≤ 0 for x > 0. These imply that for b ≥ 0,
VE
b
′(y1) ≥ V E
b
′(y2). (C.36)
Since μ′(x) ≤ δ and μ is concave, by using (C.36) and (C.35), we can obtain (λ + δ − μ′(y1))V ′
b (y1) − λαV E
b
′(y1) < (λ + δ − μ′(y2))V ′
b (y2) − λαV E
b
′(y2), which contradicts (C.34). This completes the proof of concavity of Vb(x) in (i) and (ii). For b > 0, since V ′
b (b) = γ − β and Vb(x) has been shown to be concave on [0, ∞), we get
V′
b (x) ≥ V ′
b (b) = γ − β for x ∈ [0, b] and V ′
b (x) ≤ V ′
b (b) = γ − β for x ∈ (b, ∞). □

Present-Bias Effects on Carbon Emissions 38
Lemma C.5 The following holds: (i) 0 ≤ b∗ ≤ b∗
E < ∞, (ii) If b∗ > 0, then V ′
b∗ (b∗) = γ − β, VE
b∗
′(x) ≥ γ−β for 0 ≤ x < b∗, V E
b∗
′(x) ≤ γ−β for x > b∗; and (iii) If b∗ = 0, then V ′
b∗(x) ≤ γ −β for x ≥ 0.
Proof. (i) It is obvious from its definition that b∗ ≥ 0. From Lemma C.3 we know that V′
b (x) ≤ V E
b
′(x) for x ≥ 0. Hence, V ′
b (b) ≤ V E
b
′(b) for b ≥ 0. Note that we have shown b∗
E <∞
in Lemma 3.3 and so by the continuity of V E
b
′(b) with respect to b (see Lemma A.1) and the
definition of b∗
E in (3.11) we can obtain V E
b∗
E
′(b∗
E) ≤ γ −β. Therefore, V ′
b∗
E (b∗
E) ≤ V E
b∗
E
′(b∗
E) ≤ γ−β,
which along with the definition of b∗ in (4.6) implies b∗ ≤ b∗
E.
(ii) Since b∗ > 0, it follows by its definition in (4.6) and the continuity of V ′
b (b) with respect to
b (see Lemma C.2(iii)) that V ′
b∗ (b∗) = γ − β.
Note we have shown in Lemma 3.3 that if μ(0) < 0, then b∗
E ≤ b0 and thus, in this case,
b∗ ≤ b∗
E ≤ b0. Recall the definition of b0 in (3.12): b0 = inf{b ≥ 0 : C1 (b) + Λ
2μ(0) > 0}. Hence,
C1 (b∗) + Λ
2μ(0) ≤ 0, that is, C1 (b∗) ≤ − Λ
2μ(0) . In conclusion, in the case b∗ > 0, the following is
guaranteed: either μ(0) ≥ 0 or μ(0) < 0 and C1 (b∗) ≤ − Λ
2μ(0) . Then by applying Lemma C.4
(ii) we obtain V ′
b∗(x) ≥ γ − β for x ∈ [0, b∗] and V ′
b∗(x) < γ − β for x ∈ [b∗, ∞].
(iii) Since b∗ = 0, it follows by its definition in (4.6) that V ′
b∗(b∗) = V0′(0) ≤ γ − β. Note from
Lemma C.4(i) we know that Vb∗(x) = V0(x) is concave on [0, ∞). Therefore, V ′
b∗ (x) ≤ V ′
b∗ (0) ≤ γ − β for x ≥ 0. □
Proof of Theorem 4.1 We have shown in Lemma C.5 that 0 ≤ b∗ ≤ b∗
E < ∞. Note
P(x; Lb∗, Lb∗) ≤ supL∈Π P(x; L, Lb∗). According to the definition of a MPE strategy, we can see
that it is sufficient to show that P(x; Lb∗, Lb∗)(x) ≥ supL∈Π P(x; L, Lb∗), x ≥ 0.
If b∗ > 0, then V ′
b∗(b∗) = γ − β and thus by Remark C.1 we know that Vb∗(x) is twice
continuously differentiable on [0, ∞), and it follows by Lemma C.5 that V ′
b∗(x) ≥ γ − β for
x < b∗ and V ′
b∗(x) ≤ γ − β for x ≥ b∗. If b∗ = 0, then Vb∗(x) = V0(x) is twice continuously
differentiable. Moreover, by combining Lemma C.5 we have V0′(x) ≤ γ − β for x ≥ 0. In
summary, Vb∗(x) is twice continuously differentiable on [0, ∞), and for b∗ ≥ 0,
V′
b∗(x) ≥ γ − β for x < b∗, and V ′
b∗(x) ≤ γ − β for 0 ≤ x ≥ b∗. (C.37)
Let L be any admissible strategy and define π ̄η0,L,Lb∗
s by dπ ̄η0,L,Lb∗
s = lsI{s < η0} ds +
lb∗
s I{s ≥ η0} ds. For convenience, we use π ̄ to represent this strategy and use π ̄s to represent the excess emission rate throughout this proof. We can see that π ̄ is also admissible. By applying Itˆo’s formula we can obtain that for any t > 0,
Ex
h
e−(λ+δ)(τ π ̄ ∧τn∧t)Vb∗ (X π ̄
τ π ̄ ∧τn∧t)
i
=Vb∗ (x) + Ex
Z τ π ̄ ∧τn∧t
0
e−(λ+δ)s 1
2 σ2(Xπ ̄
s )V ′′
b (Xπ ̄
s ) + μ(Xπ ̄
s ) − π ̄s V ′
b∗ (Xπ ̄
s)
− (λ + δ)Vb∗ (Xπ ̄
s ) ds . (C.38)
Since the function Vb∗ satisfies (C.11) and (C.12), we have
1
2 σ2(Xπ ̄
s )V ′′
b∗ (Xπ ̄
s ) + μ(Xπ ̄
s ) − π ̄s V ′
b∗ (Xπ ̄
s ) − (λ + δ)Vb∗ (Xπ ̄
s)
=l ̄I {X π ̄
s ≥ b∗}V ′
b∗ (Xπ ̄
s ) − π ̄sV ′
b∗ (Xπ ̄
s ) − (γ − β)l ̄I{Xπ ̄
s ≥ b∗} − λαV E
b∗ (Xπ ̄
s)−Λ
=(l ̄− π ̄s)I{Xπ ̄
s ≥ b∗}V ′
b∗ (Xπ ̄
s ) − π ̄sV ′
b∗ (Xπ ̄
s )I{Xπ ̄
s < b∗} − (γ − β)l ̄I{Xπ ̄
s ≥ b∗} − λαV E
b∗ (Xπ ̄
s)−Λ
≤(γ − β)(l ̄− π ̄s)I{Xπ ̄
s ≥ b∗} − (γ − β)π ̄sI{Xπ ̄
s < b∗} − (γ − β)l ̄I{Xπ ̄
s ≥ b∗} − λαV E
b∗ (Xπ ̄
s)−Λ
= − (γ − β)π ̄s − λαV E
b∗ (Xπ ̄
s ) − Λ, (C.39)

Present-Bias Effects on Carbon Emissions 39
where the last inequality follows by noting l ̄ − π ̄s ≥ 0, V ′
b∗(x) ≤ (γ − β) for x ≥ b∗ and
V′
b∗(x) ≥ (γ − β) for 0 ≤ x < b∗ (see (C.37)). Hence,
Vb∗ (x) ≥ Ex
h
e−(λ+δ)(τ π ̄ ∧τn∧t)Vb∗ (X π ̄
τ π ̄ ∧τn∧t)
i
+ Ex
Z τ π ̄ ∧τn∧t
0
e−(λ+δ)s (γ − β)π ̄s + λαV E
b∗ (Xπ ̄
s ) + Λ ds . (C.40)
Since the function Vb∗(·) is bounded, using dominated convergence twice we obtain
tli→m∞ nli→m∞ Ex
h
e−(λ+δ)(τ π ̄ ∧τn∧t)Vb∗ (X π ̄
τ π ̄ ∧τn∧t)
i
= Ex
h
e−(λ+δ)τ π ̄ Vb∗ (X π ̄
τ π ̄ )
i
= 0, (C.41)
where the last equality follows by noticing Xπ ̄
τπ ̄ = 0 and Vb∗(0) = 0. By using the monotone convergence twice we have
tli→m∞ nli→m∞ Ex
"
Z τ π ̄ ∧τn∧t
0
e−(λ+δ)s(Λ + (γ − β)π ̄s) ds
#
= Ex
"
Z τ π ̄
0
e−(λ+δ)s(Λ + (γ − β)π ̄s) ds
#
= Ex
"
Z τ π ̄ ∧η0
0
e−δs(Λ + (γ − β)π ̄s) ds
#
, (C.42)
where the last equality follows from using (Zhu et al., 2020, Eq.(A.1)). We then have
Ex
"
Z τ π ̄
0
λαe−(λ+δ)sV E
b∗ (Xπ ̄
s ) ds
#
= Ex
h
αe−δη0 V E
b∗ (Xπ ̄
η0 )I{η0 ≤ τ Xπ ̄ }
i
. (C.43)
By letting t → ∞ and n → ∞ on both sides of (C.40), and then using (C.41) - (C.43), we conclude that for x ≥ 0,
Vb∗ (x) ≥ Ex
"
Z τ π ̄ ∧η0
0
e−δs(Λ + (γ − β)π ̄s) ds + αe−δη0 V E
b∗ (Xπ ̄
η0 )I{η0 ≤ τ π ̄ }
#
= Ex
"
Z τ π ̄ ∧η0
0
e−δs(Λ + (γ − β)ls) ds + αe−δη0 V E
b∗ (Xπ ̄
η0 )I{η0 ≤ τ π ̄ }
#
= Ex
"
Z τ π ̄ ∧η0
0
e−δs(Λ + (γ − β)ls) ds + αe−δη0 V E
b∗ (Xπ ̄
η0 )I{η0 ≤ τ π ̄ }
#
= Ex
"
Z τ L∧η0
0
e−δs(Λ + (γ − β)ls) ds + αe−δη0 V E
b∗ (XL
η0 )I{η0 ≤ τ L}
#
= P(x; L, Lb∗),
where the second-to-last equality follows by noticing π ̄s = ls for s < η0 and the last equality
by (4.1). By the arbitrariness of L, we conclude Vb∗(x) = P(x; L, Lb∗) by virtue of Vb∗(x) =
P(x; Lb∗, Lb∗)(x) (see (4.5)). Hence, the threshold strategy Lb∗ is a Markov perfect equilibrium strategy, and the associated value function is Vb∗(x) for x ≥ 0. The explicit expression for Vb∗(x) is readily available from Remark C.1. □
D Derivations for Subsection 4.1
Recall that Vb(·) is the bounded and continuously differentiable solution to the following equa
tions: σ2
2 g′′(x) + μg′(x) − (λ + δ)g(x) + λαV E
b (x) + Λ = 0 for 0 < x < b, and σ2
2 g′′(x) + (μ −
l ̄)g′(x) − (λ + δ)g(x) + λαV E
b (x) + (γ − β)l ̄+ Λ = 0 for x > b with g(0) = 0. Note that eθ ̃1x and
e−θ ̃2x form a set of linearly independent solutions to σ2
2 g′′(x) + μg′(x) − (λ + δ)g(x) = 0. Using

Present-Bias Effects on Carbon Emissions 40
the method of variation of parameters, we obtain P3(x; b) (see (4.10)) as a particular solution to σ2
2 g′′(x) + μg′(x) − (λ + δ)g(x) + λαV E
b (x) + Λ = 0:
P3(x; b) = −eθ ̃1x 2
σ2
Zx
0
λαV E
b (s) + Λ e−θ ̃2s
(θ ̃1 + θ ̃2)e(θ ̃1−θ ̃2)s ds + e−θ ̃2x 2
σ2
Zx
0
λαV E
b (s) + Λ eθ ̃1s
(θ ̃1 + θ ̃2)e(θ ̃1−θ ̃2)s ds.
Similarly, a particular solution to σ2
2 g′′(x)+(μ−l ̄)g′(x)−(λ+δ)g(x)+λαV E
b (x)+(γ −β)l ̄+Λ = 0 is given by P4(x; b):
P4(x; b) = −eθ ̃3x 2
σ2
Zx
0
λαV E
b (s) + Λ + (γ − β)l ̄ e−θ ̃4s
(θ ̃3 + θ ̃4)e(θ ̃3−θ ̃4)s ds
+ e−θ ̃4x 2
σ2
Zx
0
λαV E
b (s) + Λ + (γ − β)l ̄ eθ ̃3s
(θ ̃3 + θ ̃4)e(θ ̃3−θ ̃4)s ds.
Therefore, we have
Vb(x) =
(
N1(b)eθ ̃1x + N2(b)e−θ ̃2x + P3(x; b), 0 ≤ x < b,
N3(b)eθ ̃3x + N4(b)e−θ ̃4x + P4(x; b), x ≥ b, (D.1)
where N1(b) − N4(b) are those fulfilling Vb(0) = N1(b) + N2(b) = 0 ,Vb(b−) = Vb(b+), V ′
b (b−) =
V′
b (b+), and Vb(x) ≤ (γ−β)l ̄+Λ
δ
λα+δ
λ+δ .
From (3.18), we can rewrite V E
b (x) as
VE
b (x) =
(
M1(b)eθ1x + M2(b)e−θ2x + M3(b), 0 ≤ x < b,
M4(b)e−θ4x + M5(b), x ≥ b,
where M1(b) − M5(b) are given in (4.14)-(4.16). Note for 0 ≤ x < b,
Zx
0
VE
b (s)e−θ ̃1sds =
Zx
0
M1(b)e−(θ ̃1−θ1)s + M2(b)e−(θ ̃1+θ2)s + M3(b)e−θ ̃1sds
= M1(b)
θ ̃1 − θ1
(1 − e−(θ ̃1−θ1)x) + M2(b)
θ ̃1 + θ2
(1 − e−(θ ̃1+θ2)x) + M3(b)
θ ̃1
(1 − e−θ ̃1x),
Zx
0
VE
b (s)eθ ̃2sds =
Zx
0
M1(b)e(θ1+θ ̃2)s + M2(b)e(θ ̃2−θ2)s + M3(b)eθ ̃2sds
= M1(b)
θ1 + θ ̃2
(e(θ1+θ ̃2)x − 1) + M2(b)
θ ̃2 − θ2
(e(θ ̃2−θ2)x − 1) + M3(b)
θ ̃2
(eθ ̃2x − 1).
Thus, we can obtain the expression for P3(x; b) as in (4.10), along with its derivative:
P′
3(x; b) = 2Λ
σ2(θ ̃1 + θ ̃2) (−eθ ̃1x + e−θ ̃2x) − 2λα
σ2(θ ̃1 + θ ̃2)
θ ̃1M1(b)
θ ̃1 − θ1
+
θ ̃1M2(b)
θ ̃1 + θ2
+ M3(b)
!
eθ ̃1x
+ 2λα
σ2(θ ̃1 + θ ̃2)
θ ̃2M1(b)
θ1 + θ ̃2
+
θ ̃2M2(b)
θ ̃2 − θ2
+ M3(b)
!
e−θ ̃2x
+ 2λα
σ2(θ ̃1 + θ ̃2)
M1(b)
θ ̃1 − θ1
+ M1(b)
θ1 + θ ̃2
θ1eθ1x − M2(b)
θ ̃1 + θ2
+ M2(b)
θ ̃2 − θ2
θ2e−θ2x .
In the same way, we have
P4(x; b) = − 2((γ − β)l ̄+ Λ)
σ2
eθ ̃3x − 1
θ ̃3(θ ̃3 + θ ̃4) + 2((γ − β)l ̄+ Λ)
σ2
1 − e−θ ̃4x
θ ̃4(θ ̃3 + θ ̃4) + 2λα
σ2θ ̃3θ ̃4
M5(b)
− 2λα
σ2(θ ̃3 + θ ̃4)
M4(b)
θ ̃3 + θ4
+ M5(b)
θ ̃3
eθ ̃3x + M4(b)
θ ̃4 − θ4
+ M5(b)
θ ̃4
e−θ ̃4x
+ 2λα
σ2(θ ̃3 + θ ̃4)
M4(b)
θ ̃3 + θ4
+ M4(b)
θ ̃4 − θ4
e−θ4x.

Present-Bias Effects on Carbon Emissions 41
To ensure the boundedness of Vb, we need the coefficient of eθ ̃3x in (D.1) to be 0, which yields
N3(b) = 2((γ − β)l ̄+ Λ)
σ2θ ̃3(θ ̃3 + θ ̃4) + 2λα
σ2(θ ̃3 + θ ̃4)
M4(b)
θ ̃3 + θ4
+ M5(b)
θ ̃3
.
As a result, all the eθ ̃3x terms in Vb disappear and the condition Vb(0) = 0 implies N2(b) = −N1(b). Hence,
Vb(x) =
(
N1(b)eθ ̃1x − N1(b)e−θ ̃2x + P3(x; b), 0 ≤ x < b,
N4(b)e−θ ̃4x + P5(x; b), x ≥ b,
where P5(x; b) is given in (4.11). With Vb(b−) = Vb(b+) and V ′
b (b−) = V ′
b (b+), we can solve N1(b) and N4(b) (see (4.12) and (4.13)). Note that
P′
5(x; b) = 2((γ − β)l ̄+ Λ)
σ2(θ ̃3 + θ ̃4) e−θ ̃4x + 2λα
σ2(θ ̃3 + θ ̃4)
θ ̃4M4(b)
θ ̃4 − θ4
+ M5(b)
!
e−θ ̃4x
− 2λα
σ2(θ ̃3 + θ ̃4)
M4(b)
θ ̃3 + θ4
+ M4(b)
θ ̃4 − θ4
θ4e−θ4x,
and V ′
b (b) = −θ ̃4N4(b)e−θ ̃4b+P5′(b; b). The threshold b∗ can be obtained by solving −θ ̃4N4(b)e−θ ̃4b+
P5′(b; b) = γ − β.
E Proofs of Section 5
Lemma E.1 For any fixed s, Lfb(x; s) is the unique continuously differentiable bounded solution to the following problem:
σ2(x)
2 g′′(x) + μ(x)g′(x) − sg(x) = 0 for 0 < x < b∗, g(0) = 1, (E.1)
σ2(x)
2 g′′(x) + (μ(x) − l ̄)g′(x) − sg(x) + l ̄(γ − β) = 0 for x > b∗. (E.2)
Proof. Following the same lines as in Lemma 3.1, we can prove the existence and uniqueness of the stated solution by constructing a solution and then verifying its uniqueness. Let g represent the solution. Note that g is continuously differentiable on (0, ∞) and it is not hard to see that g is twice continuously differentiable on (0, b) ∪ (b, ∞) by expressing the second derivative in terms of the first derivative and the function itself by using (E.1) and (E.2). Recall that Lb represent the strate-
gy with the production rate at time t be ltb = l ̄I{Xtb ≥ b}.
Note the following dynamics for the optimally controlled process: dXtb = (μ(Xtb) − l ̄I{Xtb ≥
b}) dt + σ(Xtb) dWt for t ≥ 0. By applying (Zhu et al., 2020, Lemma A.1) we can obtain that for x ≥ 0 and any t > 0, and for some sequence of stopping times {τn} with limn→∞ τn = ∞,
Ex e−s(τ b∧t∧τn)g(Xb
τ b∧t∧τn )
= g(x) + Ex
Z t∧τ b∧tn
0
e−st 1
2 σ2(Xb
u )g′′ (X b
u) + (μ(Xb
u) − l ̄I{Xb
u ≥ bb})g′(Xb
u) − sg(Xb
u) du
= g(x), (E.3)
where the last equality follows since g satisfies (E.1) and (E.2). Equation (E.3) can be rewritten as
g(x) =Ex e−sτb g(Xb
τb )I{t ∧ τn > τ b} + Ex e−s(t∧τn)g(Xb
t∧τn )I{t ∧ tn ≤ τ b}
=Ex e−sτb I{t ∧ τn > τ b} + Ex e−s(t∧τn)g(Xb
t∧τn)I{t ∧ τn ≤ τ b} , (E.4)

Present-Bias Effects on Carbon Emissions 42
where the last equality is obtained by using g(0) = 1. Furthermore, g is bounded and thus
limn→∞ limt→∞ Ex e−s(t∧τn)g(Xtb∧τn )I{t ∧ τn ≤ τ b} = 0. Therefore, by letting t → ∞ and
n → ∞ (which implies τn → ∞) on both sides of (E.4) we arrive at g(x) = Ex e−sτb = Lb(x; s)
for x ≥ 0. □
Proof of Theorem 5.1. For any s, let v4(·; s) and v5(·; s) represent the solutions to σ2(x)
2 g′′(x)+
μ(x)g′(x) − sg(x) = 0, under the following two sets of initial values respectively, v4(0; s) = 0 and v′4(0; s) = 1, and v5(0; s) = 1, and v′5(0; s) = 1. The existence and uniqueness of v4 and v5 are guaranteed by using Theorem 5.4.2. of Krylov (1996). Let v6(x; s) and u(x; s) be bounded
solutions to σ2(x)
2 g′′(x) + (μ(x) − l ̄)g′(x) − sg(x) = 0 on [0, ∞) with initial value g(0) = 0 and g(0) = 1, respectively. The existence of v6(·; s) and u2(·; s) can be proven by extending the differential equation to (−∞, −1) ∪ (0, ∞) and adding the boundary condition g(−1) = 1, and
then using Corollary 8.1 of Pao (1992). Therefore, Lfb(x; s) can be determined by solving the above initial value problem, which has the following representation:
Lfb(x; s) =
(
C4(b; s)v4(x; s) + C5(b; s)v5(x; s) 0 ≤ x < b,
C6(b; s)v6(x; s) + u(x; s) x ≥ b,
where C4(b; s), C5(b; s), and C6(b; s) are determined by solving the system C4(b; s)v4(0; s) + C5(b; s)v5(0; s) = 1, C4(b; s)v4(b; s)+C5(b; s)v5(b; s) = C6(b; s)v6(b; s)+u(b; s), and C4(b; s)v′4(b; s)+
C5(b; s)v′5(b; s) = C6(b; s)v′6(b; s) + u′(b; s), and we have the representations C5(b; s) = 1, while the representations for C4(b; s) and C6(b; s) result from solving the system and are given in (5.2) and (5.3), respectively. □

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:07.563Z
- **Text Length:** 119672 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 42 of 42
