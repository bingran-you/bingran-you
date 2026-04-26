# PDF Document: Li et al. - 2025 - Mean Field Analysis of Mutual Insurance Market.pdf

**File Path:** Li et al. - 2025 - Mean Field Analysis of Mutual Insurance Market.pdf

**Processed Date:** 2026-02-10T18:18:18.941Z

**File Size:** 717.87 KB

**Total Pages:** 61

**Extracted Pages:** 61

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3555

**Title:** Mean Field Analysis of Mutual Insurance Market

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Mean Field Analysis of Mutual Insurance Market
Bohan Li1, Wenyuan Li2, Kenneth Tsz Hin Ng3, and Sheung Chi Phillip Yam4
1Center for Financial Engineering, Soochow University, Suzhou, Jiangsu, China. Email: bhli@suda.edu.cn 2Department of Statistics and Actuarial Science, The University of Hong Kong, Pokfulam, Hong Kong. Email: wylsaas@hku.hk 3Department of Mathematics, The Ohio State University, Columbus, Ohio, US. Email: ng.499@osu.edu 4Department of Statistics and Data Science, The Chinese University of Hong Kong, Shatin, Hong Kong. Email: scpyam@sta.cuhk.edu.hk
November 18, 2025
Abstract
A mutual insurance company (MIC) is a type of consumer cooperative owned by its policyholders. By purchasing insurance from an MIC, policyholders effectively become member-owners of the company and are entitled to a share of the surplus, which is determined by their own collective claims and premium contributions. This sharing mechanism creates an interactive environment in which individual insurance strategies are influenced by the actions of others. Given that mutual insurers account for nearly -
one-third of the global insurance market, the analysis of members’ behavior under such a sharing mechanism is of both practical and theoretical importance. This article presents a first dynamic study of members’ behavior in the prevalent mutual insurance market under the large-population limit. With members’ wealth processes depending on the law of the insurance strategies, we model the surplussharing mechanism using an extended mean field game (MFG) framework and address the fundamental question -
of how strategic interactions in this setting influence individual decisions. Mathematically, we establish the global-in-time existence and uniqueness of the mean field forward-backward stochastic differential equation (MF-FBSDE) characterizing the Nash equilibrium strategy, employing techniques to accommodate realistic insurance constraints. Computationally, we develop a modified deep BSDE algorithm capable of solving the extended MFG problem with an additional fixed-point structure on the contro-
l. Utilizing this scheme, we examine how structural features of the MIC’s design, such as the composition of risk classes and surplus-sharing proportions, reshape members’ decisions and wealth through collective interactions, underscoring the central role of these mechanisms in MICs.
Keywords: Mutual insurance, extended mean field games, mean field forward-backward stochastic differential equations, global in time solution, method of continuation, deep BSDE method
1
arXiv:2511.12292v1 [q-fin.RM] 15 Nov 2025

1 Introduction
Mutual insurance companies (MICs) are one of the two most prevalent forms of centralized insurance providers in the industry, with a history dating back to the 18th century. Originating as community-based risk-sharing arrangements, early MICs gained traction in response to emerging urban risks, particularly frequent house fires. During the 19th century, industrialization introduced new hazards to high-risk occupations such as railroad workers. In response, U.S. railroad workers formed mutual benef-
it societies like the Brotherhood of Railroad Trainmen, which pooled member dues to provide life and disability benefits, reflecting the same mutual aid principles found in modern MICs. Today, the global mutual insurance market remains stable, accounting for 26.37% of the global insurance industry and generating approximately USD 1.41 trillion in premiums worldwide.1 Unlike shareholder-owned insurance companies (SICs), the other major form of insurance providers, an MIC is owned entirely by its po-
licyholders or members (Vaughan and Vaughan (2007); Rejda and McNamara (2016)). Consequently, the surplus (or deficit) in an MIC, calculated as the premium income minus claims paid, reserves, and operating expenses, is shared among the members. This surplus may be distributed as dividends, premium adjustments, or other benefits, depending on the practice of the company. Hence, the net price of a policy is known ex post, which is defined as the premium paid minus the shared surplus received. Such a-
 sharing mechanism is absent in SICs, as policyholders are not necessarily the owners of the company. The following table compares these two types of insurance companies.
Table 1: Comparisons between MICs and SICs
MIC SIC
Ownership Policyholders Shareholders Capital Required? No Yes Net Price of Policy Known ex post Known ex ante Manager’s Earnings Expense Saving Investment Profit
MICs offer several advantages over SICs, with one of the most prominent being the mitigation of the policyholder-agent conflict. This comes as no surprise: employees often work for the best interest of the owners of the company, who, in the case of an MIC, are the members themselves. In addition, the risk and surplus sharing mechanism between members is found to be efficient in diversifying idiosyncratic risks (see Cass et al. (1996)). Evidently, MICs are not always superior to SICs. In particular-
, the ability to raise capital from the financial market enables SICs to enhance their liquidity and financial flexibility, which therefore allows SICs to expand their operations and innovate more readily compared to MICs. The relative merits of MICs versus SICs constitute an important and long-standing debate in the literature. Over centuries of development, both forms of insurance have evolved and now coexist with significant and enduring presence in the market. Our study takes the relevance of -
MICs as given and does not further
1According to the International Cooperative and Mutual Insurance Federation’s global mutual market share report in 2024
2

explore this comparative aspect; interested readers are referred to McNamara and Rhee (1992); Cummins et al. (1999); Biener and Eling (2012); Braun et al. (2015); Schmeiser and Orozco-Garcia (2021). The objective of this article is to provide a quantitative and dynamic analysis of the members’ behavior under the surplus-sharing mechanism of an MIC. To name a few representative studies in the literature, from the perspective of an MIC or a mutualaid platform, Tapiero (1984) addressed the problem o-
f determining optimal premium rates. Regarding individual members’ viewpoints, valuation problems were proposed using expected utility, Choquet expected utility and distortion risk measures in Albrecht and Huggenberger (2017); and mean-variance objective in Gatzert and Schmeiser (2012). From a community perspective, B ̈auerle and Glauner (2018) considered socially optimal reinsurance treaties among insurers and a reinsurance company, Chen et al. (2021) formulated the optimal risk-sharing to achiev-
e Pareto optimality without a surplus/loss-sharing mechanism. More recently, peer-to-peer (P2P) insurance models, which are built on the principle of mutuality in a decentralized structure, have drawn attention in the study of optimal risk-sharing; see e.g., Dhaene et al. (2012); Denuit et al. (2022, 2023). Despite the rich landscape of inspiring work on mutual and P2P insurances, a fundamental and still underexplored question is how much risk each participant optimally chooses to transfer to the -
platform in this interactive environment due to the sharing mechanism, especially under a dynamical continuous-time model. Indeed, these individual decisions and loss experiences directly impact the platform’s stability and efficiency, while the distribution of surplus or deficit not only shapes their incentives but also couples their decisions, creating complex interdependencies that deserve careful study. For instance, a member’s behavior may vary across platforms with different compositions of -
risk class, or when entitled to a larger or smaller share of the surplus/deficit. The major technical challenge arises from the interactions created by the sharing mechanism, which couples members and results in a less mathematically tractable optimal decision problem, especially when the number of members is large. Additionally, since members may incur claims at different times and adjust their insurance choices in response to the evolving collective experience, a continuous-time framework is nat-
urally suited to capturing such dynamic feedback in contrast to discrete-time models, which are less equipped to capture this level of temporal heterogeneity. These complexities call for a modeling framework capable of handling large-population strategic interactions. Recent advances in extended mean field game (MFG) (Acciaio et al. (2019); Alasseur et al. (2020); Carmona and Wang (2021); Munoz (2023); Li et al. (2024); Bensoussan, Kim, et al. (2025)) have emerged to meet this need, offering a pow-
erful approach for modeling the optimal control problem from the members’ perspective. In this article, we formulate the optimal insurance problems for an MIC under an extended MFG framework. Instead of modeling direct interactions among participants, MFGs capture their behavior through interaction with a common macroscopic factor, known as the mean field term, providing an asymptotic approach to solving optimal decision problems involving a large population. Due to their mathematical tractability-
 and practical relevance, MFGs have been applied across various domains, including finance (Casgrain and Jaimungal (2019); Han et al. (2022); Bensoussan et al. (2022)), machine learning (Ruthotto et al. (2020)), and cryptocurrency mining (Bertucci et al. (2024); Li et al. (2024)). Recently, MFGs have begun to gain traction in the insurance and actuarial
3

context. For example, Bo et al. (2024) analyzed the behavior of competitive insurers that interact through relative performance in their objective functions, while their wealth processes evolve independently. In contrast, our work incorporates explicit interactions in participants’ wealth processes, making it one of the first in the actuarial domain to do so. Although our primary focus is on MICs, the model introduced herein can be readily applied to other mutual-aid platforms that share this mut-
uality and risk/surplus sharing mechanism. Our model consists of members classified into H different membership or risk classes, where members are homogeneous within class, and heterogeneous between classes. This classification structure is crucial in insurance pricing and underwriting, as members are often grouped based on various risk and demographic factors, such as age, region of residence, smoking status, and other relevant characteristics. Our model stands out by encompassing the surplus-sha-
ring mechanism in a pro-rata basis, which depends on the insurance strategies and claim experience of all other members within the MIC. Consequently, the wealth process of a member is influenced not only by their own actions but also by the collective strategies of other members within the system. The MFG is termed extended here because it explicitly captures this additional layer of interaction arising from the direct impact of collective strategies within the company. Our model yields important -
insights into how the surplus-sharing mechanism within an MIC impacts the proportional insurance strategies of individual members, particularly in terms of reaching a Nash equilibrium. The contributions of the present article are highlighted below. From a mathematical perspective, our work contributes to providing the solution of an extended mean field game characterized by a system of mean field forward-backward stochastic different equations (MF-FBSDEs) associated with games, and establishes a r-
esult of global-in-time existence and uniqueness of the solution. When a practical constraint on the insurance strategy is imposed, the strict monotonicity condition (see e.g. Pardoux and Ra ̆s ̧canu (2014)) for FBSDEs no longer holds due to the non-expansive property of a projection map. To address this, we derive a weaker form of monotonicity by utilizing the properties of the projection map, and employ an adaptation of the celebrated continuation approach to bypass the standard condition to est-
ablish a global existence result. Our sufficient condition merely requires a small mean field effect on each member, which is in line with the finding in the literature (see e.g. Chu et al. (2025)). From a numerical perspective, to address the fact that the MF-FBSDE lacks a closedform solution under the insurance constraint, we adopt a deep neural network (DNN) approach to solve the equation and implement the resulting optimal insurance strategies. Due to the presence of the mean field terms, stan-
dard Monte-Carlo methods are not directly applicable. To address this, we adapt and modify the forward method introduced in (33) (see Germain et al. (2022); Carmona and Lauri`ere (2022); Han et al. (2024)). Our proposed method includes an additional penalty term to match the output of the network with the mean field equilibrium strategy under the extended mean field game framework.In the absence of insurance constraints, the proposed method aligns with the known closedform solution in the linear-q-
uadratic setting, which demonstrates the accuracy of the algorithm. From an economic perspective, we conduct a series of sensitivity analyzes to examine how the risk characteristics of members and the surplus-sharing mechanism influence
4

their wealth and insurance strategies. First, we find that as the proportion of highly riskaverse members or those with more volatile loss processes increases, the overall insurance demand within the entire MIC tends to rise. Second, a higher surplus-sharing ratio reduces the effective price of the policies, thereby increasing their insurance demand. Third, by comparing results with and without insurance constraints, we find that the constraints help confine strategies within a practical range an-
d reduce the disparity in insurance strategies across different member classes, ultimately narrowing the resulting wealth gap. This article is organized as follows. In Section 2, we formulate the optimal insurance problem for members within an MIC, under both the N-player setting and the mean field game framework. In Section 3, we provide the generic solution of the mean field Nash equilibrium in terms of an MF-FBSDE, whose well-posedness is discussed in Section 4. We then confine ourselves to qua-
dratic rewards in Section 5, and in Section 5.2, we further reduce the MF-FBSDE to simpler Riccati equations when no insurance constraint is imposed. Section 6 introduces a DNN architecture to numerically compute the underlying MF-FBSDE. Based on this, we perform a numerical experiments to examine the effect of the risk composition of the MIC and the surplus-sharing mechanism on the members’ optimal insurance strategies under both quadratic and non-quadratic rewards. The article is concluded in Se-
ction 7.
2 Model Formulation
We consider a mutual insurance company with H classes of membership. Members are assumed to be homogeneous in dynamics and parameters within each class, and heterogeneous between different classes. In this section, we first introduce the N-player problem with a large (but finite) number of members. We then study the mean field formulation of the problem by considering a mutual insurance company (MIC) with infinite number of members. Such a formulation is justified by the notion of ε-Nash equilibri-
um, see Theorem 2.1 below. Notation. We fix a decision horizon [0, T ], where T > 0. Let (Ω, F , P) be a probability space with E being the expected value taken with respect to P. Given an σ-algebra G ⊆ F , we denote by L2(Ω, G, P) the collection of all square-integrable, G-measurable random variables. For a generic filtration G := (Gt)t∈[0,T ] defined on (Ω, F , P) and a set A ⊆ R, we denote by
L2
G([0, T ]; A) :=
{
(αt)t∈[0,T ] : αt ∈ A, Gt-measurable, and E
[∫ T
0
|αt|2dt
]
<∞
}
.
For any positive integer n, we denote [n] := {1, . . . , n}. For any function f , we use a subscript to denote the partial derivative of f with respect to the corresponding variable. We denote by I the H × H identity matrix. For any H × H matrix A, we define λmin(A) and λmax(A) to be the smallest and largest eigenvalue of (A+A⊤)/2, respectively. Finally,
for any matrix B, we let ‖B‖2 := √λmax(B⊤B) be its spectral norm.
5

2.1 Preliminaries and the N -Player Problem
Suppose that there are Nh members for each risk class h ∈ [H]. In our model, each member represents a company or organization that holds a group insurance policy provided by an MIC for employee benefits such as health, accident, or disability coverage. The losses are retained by the organization itself, which is common in practice for risks such as workers’ injuries, property and casualty losses related to company infrastructure, and disability claims. The accumulated loss process of member i in C-
lass h, denoted by
Li,h = (Li,h
t )t∈[0,T ], is given by
Li,h
t :=
M i,h
∑t
j=1
Li,h,j ,
where (M i,h
t )t∈[0,T ] is a Poisson process with intensity λh > 0 representing the number of claims up to time t. The claim severities (Li,h,j)i∈[Nh], j≥1 are assumed to be i.i.d. for each fixed h, and are independent of the claim count processes (Mi,h
t )i∈[N h], t∈[0,T ].
A popular approach in the actuarial literature (see, e.g., Iglehart (1969); Grandell (1991); Browne (1995)) is to approximate Li,h
t by the Cram ́er–Lundberg diffusion model.
The accumulated loss process of member i in class h, denoted by Ci,h = (Ci,h
t )t∈[0,T ], is
then approximated by
dC i,h
t = μh dt − σh dW i,h
t , (1)
where (W i,h
t )t∈[0,T ] is a standard Brownian motion such that {W i,h : i ∈ [N h], h ∈ [H]}
are independent and identically distributed, μh := λh E[Li,h,j], and σh := √λh E[(Li,h,j)2]. Our subsequent analysis shall be based on this diffusion approximation model. Each member i ∈ [N h] in Class h ∈ [H] is entitled to choose a proportion vi,h ∈ AFi,h(I) of the loss to be transferred to the MIC, where AFi,h(I) := L2
Fi,h([0, T ]; I) is the admissible set of proportional insurance strategies in the constraint set I. We assume that I ⊆ R is a closed interval of the form I = [a, b], where a, b ∈ R, b > a, and the filtration
Fi,h := (F i,h
t )t∈[0,T ] is defined as follows:
F i,h
t := σ (ξi,h, W i,h
s : 0 ≤ s ≤ t) ∨ Fˆt,
Fˆt := σ
( ∑Nk
j=1 vsj,k
N k : k ∈ [H], 0 ≤ s ≤ t
)∨σ
( ∑Nk
i=1 yis,k
N k : k ∈ [H], 0 ≤ s ≤ t
)
∨ N,
where N is the collection of all P-null sets, ξi,h, i ∈ [N h], h ∈ [H], are i.i.d. square
integrable random variables representing the initial wealth of member i from Class h, and
(yi,h
t )t∈[0,T ] is her wealth process; see (3) below. Thus, each member makes her decision based on her own wealth, and the public information consisting of the average position
and wealth of all other members within the MIC contained in the filtration (Fˆth)t∈[0,T ]. A common choice of the constraint would be a = 0 and b = 1, which indicates that the member is not allowed to transfer more than her actual loss or to take a short position, although our analysis is not limited to this specific case. The rate of premium she has to pay is then given by vi,h
t ch, where ch := μh(1+θh) is the premium rate charged by the MIC,
and θh > 0 is the safety loading for Class h. We remark that the insurance constraint limits the instantaneous premium rate payable in the range [ach, bch]. This aligns with the practical scenario where the premium rate remains relatively stable without drastic
6

fluctuations. In addition, each member in Class h is required to pay a membership fee of eh ≥ 0 to be able to get a share of the surplus. Let U = (Ut)t≥0 be the surplus of the MIC, which is defined as the aggregate premium income, membership fee, less the shared loss and management costs:
dUt =
H ∑
h=1
N ∑h
j=1
[
(ch − dh)vj,h
t + eh − dh
e
]
dt
} {{ }
premium income and membership fee less expenses
−
H ∑
h=1
N ∑h
j=1
vj,h
t dCj,h
t
} {{ }
shared loss
, (2)
where dh, deh > 0 are the common proportional and fixed management fee rate, respec
tively. Let πh > 0 be the proportion of shares acquired by Class h. The surplus or loss U will then be distributed according to a simple pro-rate basis, where each member from
Class h receives πh/ ∑H
k=1 πkN k of it. A similar pro-rata sharing mechanism is popular in practice and in the literature. For instance, Albrecht and Huggenberger (2017) considered a sharing mechanism where each member receives a proportion of the surplus based on the amount of insurance they purchased. Herein, the parameter πh can be chosen to reflect the risk exposure, safety loading, and the membership fee rate within each risk class. Since the proportion of insurance vi,h is bounded within a practical range I and th-
e membership fee rate does not fluctuate significantly, using a fixed parameter πh provides a stable proxy for the relative premium size. This approach keeps the surplus-sharing mechanism simple and avoids the need for frequent adjustments of sharing ratios, thereby reducing administrative complexity. In sum, the wealth process yi,h of member i from Class h is governed by the following components. First, she earns a risk-free rate r > 0 based on her current wealth. Second, according to her insuran-
ce strategy, she needs to pay the premium, and is responsible for the retained loss that has not been transferred to the MIC. Third, in addition to the proceeds from the MIC mentioned in the last paragraph, she also receives an exogenous
income of rate l ̃h. Hence, the process yi,h is governed by the following SDE: yi,h
0 = ξi,h
and
dyi,h
t=

ryi,h
t + l ̃h − eh − chvi,h
t
} {{ }
premium paid

 dt − (1 − vi,h
t )dCi,h
t
} {{ }
retained loss
+ πh
∑H
l=1 πlN l


H ∑
k=1
Nk
∑
j=1
[
(ck − dk)vj,k
t + ek − dk
e
]
dt −
H ∑
k=1
Nk
∑
j=1
vj,k
t dCj,k
t


} {{ }
shared surplus/deficit from MIC
=
(
ryi,h
t + lh − κhvi,h
t + πh
H ∑
k=1
ωk(κk − dk)
∑N k
j=1 vj,k
t
Nk
)
dt + σh(1 − vi,h
t )dW i,h
t
+ πh
H ∑
k=1
σkωk
∑N k
j=1 vj,k
t
N k dW j,k
t
} {{ }
idiosyncratic risk
, (3)
7

where lh := l ̃h−μh−eh+ πh
∑H
l=1 πlN l
∑H
k=1 N k(ek−dek), κh := μhθh, and ωh := N h/ ∑H
k=1 πkN k.
The parameter ωh represents the proportion of members in Class h within the entire MIC, adjusted by the shares acquired by each risk class. We assume that (ωh)H
h=1 is indepen
dent of the absolute population sizes (N h)H
h=1, meaning that even if the population sizes change, this ratio remains constant. Under this assumption, we have
lh = l ̃h − μh − eh + πh
H ∑
k=1
ωk(ek − dk
e ).
In addition, it is clear that ∑H
h=1 πhωh = 1. We also assume that κh − d > 0 for all
h ∈ [H] throughout the rest of the article. This condition ensures that the risk premium rate exceeds the expense rate, meaning that the premiums sufficiently cover expenses to sustain meaningful MIC operations and avoid immediate bankruptcy.
Remark 2.1. We assume that members will inject new capital into the MIC in proportion to their shares to avoid it from bankruptcy. This explains why the deficit in (3) is also shared among members in our setting when Ut < 0. In practice, when Ut < 0, an MIC may respond by increasing premiums, which results in a net outflow from members’ wealth. However, because the owners of an MIC are the members themselves, the management of the company does not inject capital into the mutual; instead, they prov-
ide services and collect management fees.
Each member i from Class h aims to take an insurance strategy vi,h ∈ AFi,h(I) to maximize the following objective:
J i,h(vi,h) := J i,h (vi,h; y−i,h, v−i,h)
:= E
[∫ T
0
fh
(
t, yi,h
t,
∑N h
j=1,j6=i yj,h
t
N h − 1 , vi,h
t,
∑N h
j=1,j6=i vj,h
t
Nh − 1
)
dt + gh
(
yi,h
T,
∑N h
j=1,j6=i yj,h
T
Nh − 1
)]
,
(4) where v−i,h := (vj,h)j∈[Nh],j6=i, y−i,h = (yj,h)j∈[Nh],j6=i are the associated wealth processes under the N -player game; f h : [0, T ] × R × R × R × R → R and gh : R × R → R. In other words, each member within a given risk class shares the same preference, which accounts for her own wealth, her insurance strategy relative to the class average, and the average wealth of members across all classes. Assumptions on f h and gh are deferred to Section 2.4. In practice, several factors lead to insur-
ance purchase behavior that depends on the coverage level vi,h in a non-linear and concave manner, a feature we capture through the reward function f h in our model. First, as shown by Mossin (1968), full coverage is generally not optimal when premiums include loadings, since diminishing marginal utility of wealth and actuarially unfair pricing produce an interior optimum. Second, regulatory frameworks often impose minimum coverage requirements such as auto third-party liability or workplace injur-
y insurance that members or group managers must meet but are not required to exceed, especially when risks or potential losses are low. For example, rather than fully insuring depreciated equipment or property, members may opt to save on premiums and replace the item if damaged. Third, prospect theory (Kahneman and Tversky (1979)) suggests that individuals tend to be myopic and underweight low-probability
8

events, or exhibit loss aversion relative to reference wealth levels, which contributes to under-insurance even in situations involving severe but infrequent losses (Kunreuther and Pauly (2004)). These considerations motivate the incorporation of vi,h into the reward function. Under the setting (3) and (4), the decision problems of members within the MIC are coupled via the surplus/deficit sharing mechanism and their objective functions. Problem 1 below formulates the notion of optimal strategies-
 for all members within the MIC in terms of a Nash equilibrium, where a member would be worse-off if she deviates from the equilibrium strategy.
Problem 1. Find a Nash equilibrium strategy (vi,h)h∈[H],i∈[Nh] such that vi,h ∈ AFi,h(I),
and
J i,h (vi,h; y−i,h, v−i,h) ≥ J i,h (ui,h; yˇ−i,h, v−i,h) ,
for any ui,h ∈ AFi,h(I), and any h ∈ [H] and i ∈ [N h], where yˇ−i,h = (yˇj,h)j∈[Nh],j6=i, and (yˇj,h)j∈[Nh] are the associated wealth processes under the N -player game with strategies (v1,h, . . . , vi−1,h, ui,h, vi+1,h, . . . , vNh,h).
2.2 Mean Field Game Formulation
Due to the intricate interactions between members arising from the surplus-sharing mechanism, it is analytically challenging to obtain a Nash equilibrium strategy for Problem 1. To this end, we adopt the mean field formulation of Problem 1. We consider the case where the number of members Nh, h ∈ [H], tends to infinity, and suppose that we are given a collection of exogenous and deterministic processes (zh)h∈[H] and (v ̄h)h∈[H], where zh = (zth)t∈[0,T ] and v ̄h = (v ̄th)t∈[0,T ]. For h ∈ [H] and -
i ∈ [N h], let
xi,h := (xi,h
t )t∈[0,T ] be the wealth process of member i from Class h, which satisfies the following mean field dynamics:
dxi,h
t=
(
rxi,h
t + lh − κhvi,h
t + πh
H ∑
k=1
ωk(κk − dk)v ̄k
t
)
dt+σh(1−vi,h
t )dW i,h
t , xh
0 = ξi,h. (5)
Each member from Class h aims to maximize the following objective:
J i,h(vi,h) := J i,h (vi,h; zh, v ̄h) = E
[∫ T
0
fh (
t, xi,h
t , zh
t , vi,h
t , v ̄h
t
)
dt + gh (
xi,h
T , zh
T
)]
. (6)
Since the number of members in each class is indefinite, we have the following observations: (i) the idiosyncratic part in (3) shall vanish, and (ii) the contribution of each
individual on the average terms such as ∑N
j=1 vj,k
t /N k becomes negligible. This allows us to treat the average wealth and average insurance strategy for each of Class h to be exogeneously given, which are represented by zh and vh, respectively. Under this framework, the wealth and objective functions between members are essentially decoupled, which allows us to focus on the decision problem for a single representative member from each risk class. Henceforth, we shall omit the index i in all the occurrence in the sequel, and simply call xh the w-
ealth process of the representative member (or simply member below)
9

from Class h. We also define the filtrations Fh := (Fth)t∈[0,T ] and F[H] := (F [H]
t )t∈[0,T ] by
Fth := σ (ξh, Wsh : 0 ≤ s ≤ t) and F [H]
t := ∨H
h=1 Fth, respectively.
To achieve equilibrium, the deterministic functions zh and vh should eventually agree with the average wealth and the average strategy when optimality is achieved. This solution approach, often known as the fixed point approach, can be formulated in terms of the following two sub-problems.
Problem 2. Given the deterministic functions (zh)h∈[H] and v ̄ := (v ̄h)h∈[H], find the optimal control v := (vh)h∈[H] such that for any h ∈ [H],
vh = arg max
uh∈AFh (I)
J h (uh; zh, v ̄h) .
Problem 3. Find the mean field equilibrium wealth z = (zh)h∈[H] and strategy v ̄ = (v ̄h)h∈[H] such that for any t ∈ [0, T ],
(v ̄1
t , . . . , v ̄H
t ) = E [(v1
t , . . . , vH
t )] and (z1
t , . . . , zH
t ) = E [(x1
t , . . . , xH
t )] .
Since the shared surplus/deficit directly depends on the insurance strategies of the
other members, an additional fixed point (v ̄t1, . . . , v ̄tH) = E [(vt1, . . . , vtH)] has to be satisfied in Problem 3. This formulation is called an extended mean field game (Carmona and Lacker (2015); Gomes and Sa ́ude (2014)) since it includes finding the equilibrium law of the optimal control. Note also that the diffusion term in (5) is controlled. As documented in Bensoussan, Huang, et al. (2025), such control in the MFG context can complicate the representation of the solution and the mat-
hematical analysis, particularly because the control depends on the backward component of the associated BSDE as shown in (12) below. Theorem 2.1 below establishes the ε-Nash equilibrium of the mean field game (5)-(6) for the original N-player game (3)-(4). It says that, the optimal strategies obtained in the mean field game is very close to achieving a Nash equilibrium for the N-player game, where the discrepancy decays with the class sizes in the order of 1
2.
Theorem 2.1. Let (vi,h)h∈[H],i∈[Nh], (zh)h∈[H] and (v ̄h)h∈[H] be the solution of Problems 23 with wealth process and objective functions given by (5) and (6), respectively. Consider Problem 1 with class size Nh for each membership class h ∈ [H]. Then, under Assumption 2.1.A below, it holds that
J i,h (vi,h; y−i,h, v−i,h) ≥ J i,h (ui,h; ˇy−i,h, v−i,h) −
H ∑
k=1
O
( √1N k
)
,
for any ui,h ∈ AFi,h(I), where yˇ−i,h is defined as in Problem 1.
Proof. The proof is relegated to Appendix B.1.
2.3 A Discussion of a Members’ Survival Model
In this section, we provide a discussion on extending our model to incorporate a survival framework, allowing for the possibility that members leave the MIC involuntarily, for
10

example, due to discontinuation of business, default, regulatory intervention, or forced lapse. Let τ i,h denote the exit time of member i in Class h. We assume that the family of exit times (τ i,h)i∈[Nh], h∈[H] is independent, and that for each h ∈ [H], the collection (τ i,h)i∈[Nh] is identically distributed. Moreover, each exit time τ i,h is independent of the random variables associated with other members and the market variables, and is not determined by the members themselves. Note that now -
Nh denotes the initial number of members in Class h. We shall assume that P(τ h > T ) > 0 for all h ∈ [H], where τ h represents the common distribution of τ i,h, i ∈ N h. Under the survival mode, the surplus process of the MIC is given by
dUt =
H ∑
h=1
Nh
∑
j=1
[
(ch − dh)vj,h
t + eh − dh
e
]
1{τ j,h>t}dt −
H ∑
h=1
N ∑h
j=1
vj,h
t 1{τ j,h>t}dC j,h
t , (7)
indicating that only surviving members will purchase insurance, pay the membership fee,
and transfer their loss to the MIC. Furthermore, let Nth := ∑Nh
j=1 1{τj,h>t} be the number of surviving members in Class h. As such, the wealth process yi,h of member i from Class h is given by, for t ∈ [0, τ i,h ∧ T ],
dyi,h
t=
(
ryi,h
t + l ̃h − chvi,h
t
)
dt − (1 − vi,h
t )dCi,h
t
+ πh
∑H
l=1 πlNtl


H ∑
k=1
Nk
∑
j=1
[
(ck − dk)vj,k
t + ek − dk
e
]
1{τ j,k>t}dt −
H ∑
k=1
Nk
∑
j=1
vj,k
t 1{τ j,k>t}dC j,k
t


=
(
ryi,h
t + l ̃h,N − κhvi,h
t + πh
( ∑H
l=1 πlN l
∑H
l=1 πlNtl
) H ∑
k=1
ωk(κk − dk)
∑N k
j=1 vj,k
t 1{τ j,k>t}
Nk
)
dt
+ σh(1 − vi,h
t )dW i,h
t + πh
( ∑H
l=1 πlN l
∑H
l=1 πlNtl
) H ∑
k=1
σkωk
∑N k
j=1 vj,k
t 1{τ j,k>t}
N k dW j,k
t , (8)
where ωh := N h/ ∑H
k=1 πkN k, h = 1, . . . , H, and
l ̃h,N
t := l ̃h − μh + πh
( ∑H
l=1 πlN l
∑H
l=1 πlNtl
) H ∑
k=1
ωk Ntk
N k (ek − dk
e ).
The objective function for the i-th member from Class h under this involuntary exit model is given by
J i,h(vi,h) := J i,h (vi,h; y−i,h, v−i,h)
:= E
[ ∫ T ∧τ i,h
0
fh (
t, yi,h
t , y ̄i,h,τ h
t , v ̄i,h,τ h
t
)
dt + 1{τ i,h>T }gh (
yi,h
T , y ̄i,h,τ h
T
)]
, (9)
where
y ̄i,h,τ h
t :=
∑N h
j=1,j6=i yj,h
t 1{τ j,h>t}
N h − 1 , v ̄i,h,τh
t :=
∑N h
j=1,j6=i vj,h
t 1{τ j,h>t}
Nh − 1 .
The above formulation motivates the following mean field game formulation by passing to the limit N h → ∞, h ∈ [H]. Let (z ̃h)h∈[H] and (v ̃h)h∈[H] be exogeneously given,
11

deterministic functions, and denote sth := P(τ h > t). For i ∈ N and h ∈ [H], let (xi,h
t )t∈[0,T ]
be the process that satisfies, for t ∈ [0, T ],
dxi,h
t=
(
rxi,h
t + l ̃h
t − κhvi,h
t + πh
H ∑
k=1
ωk(κk − dk)v ̃k
t
)
dt + σh(1 − vi,h
t )dW i,h
t , xh
0 = ξi,h,
(10) where
l ̃h
t := l ̃h − μh + πh
∑H
l=1 πlωlslt
H ∑
k=1
ωk(ek − dk
e )sk
t.
Note that by the strong law of large numbers, as Nh → ∞ for h ∈ [H], we have almost surely that Ntk/N k → stk and
∑H
l=1 πlN l
∑H
k=1 πkNtk
=1
∑H
k=1 πk
( Nk
∑H
l=1 πlN l
) Ntk Nk
=1
∑H
k=1 πkωk Ntk
Nk
→1
∑H
k=1 πkωkstk
.
In other words, l ̃h,N
t → l ̃th a.s. when N h → ∞, h ∈ [H].
In light of the independence of (τ i,h)i∈N,h∈[H], (W i,h)i∈N,h∈[H], and (ξi,h)i∈N,h∈[H], and the fact that members’ dynamically systems are decoupled under the large-population limit, we introduce the following objective under the MFG formulation: for i ∈ N and h ∈ [H],
J i,h(vi,h) := J i,h (vi,h; z ̃h, v ̃h) = E
[∫ T ∧τ i,h
0
fh (
t, xi,h
t , z ̃h
t , vi,h
t , v ̃h
t
)
dt + 1{τ i,h>T }gh (
xi,h
T , z ̃h
T
)]
=E
[∫ T
0
f ̃h (
t, xi,h
t , z ̃h
t , vi,h
t , v ̃h
t
)
dt + g ̃h (
xi,h
T , z ̃h
T
)] ,
(11) where (z ̃h)h∈[H] and (v ̃h)h∈[H] are exogeneously given, and
f ̃h(t, x, z, v, v ̃) := sh
t f h(t, x, z, v, v ̃) and g ̃h(x, z) := sh
T g(x, z).
Comparing the mean field dynamics xi,h with yi,h, and the mean field objective functions (11) with (9), we observe that z ̃th essentially replaces the empirical average of the
surviving members
∑N h
j=1 yj,h
t 1{τ j,h>t}
Nh−1 under the N -player game, while v ̃th corresponds to
∑H
l=1 πlN l
∑H
k=1 πkNtk
∑N h
j=1,j6=i vj,h
t 1{τ i,h>t}
Nh − 1 .
These observations naturally lead to the following MFG formulation and the corresponding definition of the mean field terms:
Problem 4. Given the deterministic functions  ̃z := (z ̃h)h∈[H] and v ̃ := (v ̃h)h∈[H], find the optimal control v := (vh)h∈[H] such that for any h ∈ [H],
vh = arg max
uh∈AFh (I)
J h (uh; z ̃h, v ̃h) .
12

Problem 5. Find the mean field equilibrium wealth z ̃ = (z ̃h)h∈[H] and strategy v ̃ = (v ̃h)h∈[H] such that for any t ∈ [0, T ] and h ∈ [H],
z ̃h
t = E[xh
t ]sh
t and v ̃h
t = sth
∑H
k=1 πkωkstk
E[vh
t ].
The survival model represents an extension that falls largely under the framework of the original formulation The main differences are that the class weight now becomes timedependent, and the definition of the mean field terms is revised to account for involuntary exits. Moreover, the independence of the exit times τ i,h allows the survival probability to be absorbed into the coefficients f h and gh. Under suitable conditions on the survival probabilities sth, the analytical results and solution m-
ethodology developed in the main formulation remain valid within this extended survival framework. In light of the above discussions, while our framework can naturally accommodate a more general survival model with involuntary exits, we shall focus on the original formulation given by (5)-(6) and Problems 2-3.
2.4 Assumptions
In the sequel, we shall impose the following assumptions on the functions f h and gh.
Assumption 2.1. For each h ∈ [H], the function f h is differentiable in its x- and varguments, and gh is differentiable in its x-argument. In addition,
A. (Lipschitz continuity) There exist L, LX, LV > 0 and Lg ≥ 0 such that, for any h ∈ [H], t ∈ [0, T ], and any x1, x2, z1, z2 ∈ R, v1, v2, v ̄1, v ̄2 ∈ I,
(i) |f h(t, x1, z1, v1, v ̄1) − f h(t, x2, z2, v2, v ̄2)| ≤ L(1 + |x1| + |z1| + |v1| + |v ̄1| + |x2| + |z2| + |v2| + |v ̄2|) (|x1 − x2| + |z1 − z2| + |v1 − v2| + |v ̄1 − v ̄2|),
(ii) |gh(x1, z1) − gh(x2, z2)| ≤ L(1 + |x1| + |x2| + |z1| + |z2|)(|x1 − x2| + |z1 − z2|),
(iii) |fxh(t, x1, z1, v1, v ̄1) − fxh(t, x2, z2, v2, v ̄2)| ≤ LX (|x1 − x2| + |z1 − z2| + |v1 − v2| + |v ̄1 − v ̄2|),
(iv) |fvh(t, x1, z1, v1, v ̄1) − fvh(t, x2, z2, v2, v ̄2)| ≤ LV (|x1 − x2| + |z1 − z2| + |v1 − v2| + |v ̄1 − v ̄2|),
(v) |gxh(x1, z1) − gxh(x2, z2)| ≤ Lg(|x1 − x2| + |z1 − z2|);
B. (α-concavity) The function v ∈ I 7→ f h(t, x, z, v, v ̄) is strictly concave for any t ∈ [0, T ], x, z ∈ R, v ̄ ∈ I, and h ∈ [H]. In addition, there exist α1X > 0, α2X ≥ 0,
α1V > 0, α2V ≥ 0, and αg
1 > 0, αg
2 ≥ 0 such that, for any h ∈ [H], t ∈ [0, T ], z1, z2 ∈
R, v ̄1, v ̄2 ∈ I, and any (Xt1)t∈[0,T ], (Xt2)t∈[0,T ], (Vt1)t∈[0,T ], (Vt2)t∈[0,T ] ∈ L2
Fh([0, T ]; R),
(i) E [(fxh(t, Xt1, z1, Vt1, v ̄1) − fxh(t, Xt2, z2, Vt2, v ̄2)) (Xt1 − Xt2)] ≤ −α1X E[|Xt1−Xt2|2]+
α2X |z1 − z2|2,
(ii) E [(fvh(t, Xt1, z1, Vt1, v ̄1) − fvh(t, Xt2, z2, Vt2, v ̄2)) (Vt1 − Vt2)] ≤ −α1V E[|Vt1−Vt2|2]+
α2V |v ̄1 − v ̄2|2,
(iii) E[(gxh(XT1 , z1) − gxh(XT2 , z2))(XT1 − XT2 )] ≤ −αg
1E[|XT1 − XT2 |2] + αg
2|z1 − z2|2.
13

Assumption 2.2. For each h ∈ [H], for any t ∈ [0, T ] and x, z ∈ R, v ̄ ∈ I, the function fvh(t, x, z, ·, v ̄) admits a unique inverse (fvh)−1(·; t, x, z, v ̄). In addition, there exists ρh ∈ (0, 1) such that, for any t ∈ [0, T ] and u, v ̄1, v ̄2, v ∈ I, x, z ∈ R
∣∣(f h
v )−1 (u; t, x, z, v ̄1) − (f h
v )−1 (u; t, x, z, v ̄2)∣∣ ≤ ρh |v ̄1 − v ̄2| .
Assumption 2.1 encompasses the standard Lipschitz and concavity condition that warrants the unique existence of the FBSDEs characterizing the optimal equilibrium solution; see Section 4. These conditions are readily satisfied by quadratic rewards (Section 5), and more generally, by revised utility functions; see also Section 6.3 for an example. Assumption 2.2 ensures the solvability of the mean field fixed point defined in Problem 3 below.
Remark 2.2. By the mean value theorem, Assumption 2.1 implies that, for any z ∈ R, v ̄ ∈ I, and any (Xt1)t∈[0,T ], (Xt2)t∈[0,T ], (Vt1)t∈[0,T ], (Vt2)t∈[0,T ] ∈ L2
Fh([0, T ]; R),
E [f h(t, X1
t , z, V 1
t , v ̄) − f h(t, X2
t , z, V 2
t , v ̄)] ≤ E
[
fh
x (t, X2
t , z, V 2
t , v ̄)(X1
t − X2
t)
+ fh
v (t, X2
t , z, V 2
t , v ̄)(V 1
t −V2
t)
]
,
E [gh(X1
T , z) − gh(X2
T , z)] ≤ E [gh
x (X 2
T , z)(X1
T − X2
T )] .
3 Optimal Mean Field Insurance Strategy
In this section, we construct the optimal insurance strategy of the representative member of each risk class h ∈ [H] under the mean field formulation (Problems 2 and 3). The proofs of statements in this section are relegated to Appendix C. By Assumption 2.1, one can verify that Jh(·) is concave and coercive, which guarantees the unique existence of optimal control of Problem 2. The precise statement is formulated below.
Lemma 3.1. Suppose that the mean field terms (zh)H
h=1 and (v ̄h)H
h=1 are exogeneously
given. Under Assumption 2.1, for each h ∈ [H], the mapping vh ∈ L2
Fh([0, T ]; R) 7→ Jh(vh) is continuous, strictly concave, and coercive. The last property means that Jh(vh) → −∞
as E[∫ T
0 |vth|2dt] → ∞.
Proof. The proof is relegated to Appendix C.1.
By Lemma 3.1, if the constraint set I is unbounded, the unique existence of a global maximizer of Jh(·) in AFh(I) given the mean field terms (zh)H
h=1 and (v ̄h)H
h=1 is a consequence of Theorem 7.2.12 of Dr ́abek and Milota (2007). On the other hand, if a, b ∈ R, by the Banach–Alaoglu theorem, the set AFh(I) ⊂ L2
Fh([0, T ]; R) is weakly compact. Hence, the unique existence of a global maximizer of Jh(·) in AFh(I) is an immediate consequence of the extreme value theorem (see Theorem 7.2.4 of Dr ́abek and Milota (2007)). The following statement characterizes the optimal insurance strategy of Problem 2 using the stochastic maximum principle.
14

Theorem 3.1. Under Assumption 2.1, and given the deterministic functions (zh)H
h=1 and
(v ̄h)H
h=1, the optimal insurance strategy for the representative member in Class h, h ∈ [H], is given by
vh
t = ProjI
[(f h
v
)−1 (− (κhph
t + σhηh
t
) ; t, xh
t , zh
t , v ̄h
t
)]
, (12)
where (xh, ph, ηh) ∈ L2
Fh([0, T ]; R3) is the solution of the following FBSDE:


dxh
t=
(
rxh
t + l − κhvh
t + πh
H ∑
j=1
ωj(κj − dj)v ̄j
t
)
dt + σh(1 − vh
t )dW h
t,
−dph
t = (rph
t − fh
x (t, xh
t , zh
t , vh
t , v ̄h
t )) dt − ηh
t dW h
t,
xh
0 = ξh,
ph
T = −gx(xh
T , zh
T ).
(13)
Proof. The proof is relegated to Appendix C.2.
Theorem 3.1 presents the solution of Problem 2 given the mean field terms (zh)H
h=1
and (vh)H
h=1. By taking expectations on (13), we see that the solution of the mean field game is characterized by, for each h ∈ [H],


dxh
t=
(
rxh
t + l − κhvh
t + πh
H ∑
j=1
ωj(κj − dj)v ̄j
t
)
dt + σh(1 − vh
t )dW h
t,
−dph
t = (rph
t − fh
x (t, xh
t , zh
t , vh
t , v ̄h
t )) dt − ηh
t dW h
t,
dzh
t=
(
rzh
t + l − κhv ̄h
t +π
H ∑
j=1
ωj(κj − dj)v ̄j
t
)
dt,
xh
0 = ξh,
zh
0 = E[ξh],
ph
T = −gx(xh
T , zh
T ),
(14)
where for t ∈ [0, T ],
vh
t = ProjI
[(f h
v
)−1 (− (κhph
t + σhηh
t
) ; t, xh
t , zh
t , v ̄h
t
)]
,
v ̄h
t =E
[
ProjI
[(f h
v
)−1 (− (κhph
t + σhηh
t
) ; t, xh
t , zh
t , v ̄h
t
)]]
.
Notice that by Assumption 2.2, for any u, v ̄1, v ̄2 ∈ I, x, z ∈ R,
∣∣ProjI (f h
v )−1(u; t, x, z, v ̄1) − ProjI (f h
v )−1(u; t, x, z, v ̄2)∣∣
≤ ∣∣(f h
v )−1(u; t, x, z, v ̄1) − (f h
v )−1(u; t, x, z, v ̄2)∣∣ ≤ ρh|v ̄1 − v ̄2|.
Since ρh < 1, and the mapping
v ̄h 7→ E
[
ProjI
[(f h
v
)−1 (− (κhph
t + σhηh
t
) ; t, xh
t , zh
t , v ̄h
t
)]]
15

is clearly invariant in I, by the Banach fixed point theorem, there exists a unique fixed point v ̄h that solves the last equation of (14), provided that the MF-FBSDE is solvable. Collecting all H representative members, we obtain the following system of MFFBSDE: 

dxt = (rxt + l − Kvt + Πv ̄t) dt + Σ (I − diag(vt)) dWt,
−dpt = (rpt − ∂xF(t, xt, zt, vt,  ̄vt)) dt − diag(ηt)dWt,
x0 = (ξ1, . . . , ξh)⊤,
pT = −∂xG(xT , zT ),
(15)
where for t ∈ [0, T ],
zt = E[xt],
v ̄t = E [ProjIH
[(∂vF)−1 (− (Kpt + Σηt) ; t, xt, zt, v ̄t)]] ,
vt = ProjIH
[(∂vF)−1 (− (Kpt + Σηt) ; t, xt, zt, v ̄t)] ,
and the vectors and matrices in (15) are defined as follows:
xt =


x...t1
xtH

 , zt =


z...t1
ztH

 , pt =


p...t1
ptH

 , ηt =


η...t1
ηtH

 , vt =


v...t1
vtH

 , v ̄t =


v ̄...t1
v ̄tH

 , Wt =


W...t1
WtH

 ,
l=


l1
...
lH

 , Π =


π1ω1(κ1 − d1) · · · π1ωH(κH − dH )
... ... ...
πH ω1(κ1 − d1) · · · πH ωH(κH − dH )

 , F =


f1
...
fH

 , G =


g1
...
gH

 ,
K = diag((κh)H
h=1), Σ = diag((σh)H
h=1), ∂x = diag((∂xh)H
h=1), ∂v = diag((∂vh )H
h=1), and
(∂vF)−1 = ((fv1)−1, . . . , (fvH )−1)⊤.
4 Well-posedness of the MF-FBSDE (15)
In this section, we establish the global existence and uniqueness of the MF-FBSDE (15), which therefore warrants the solvability of Problems 2-3. In the sequel, the term solution always refers to a triple (x, p, η) that satisfies (15) and lies in L2
F[H]([0, T ]; R3H ). The proofs of statements in this section are relegated to Appendix D. In the technical perspective, canonical results in the literature concerning the global existence of MF-FBSDE cannot be directly applied herein due to two major aspects. First, as a result of the insurance constraint, the coefficients of the MF-FBSDE fail to satisfy the standard monotonicity property. Second, the forward equations depend directly on the mean field insurance strategies of the representative m-
embers from the other risk classes under the extended mean field game framework. Our approach thus involves adaptations of the well-known continuation approach (see e.g. Bensoussan et al. (2017)) by utilizing the properties of a projection map.
4.1 Assumptions for Well-posedness of MF-FBSDE
Before proceeding to the main results and proofs of this section, we introduce the following additional assumptions.
16

Assumption 4.1.
(a) (Separability) For any h ∈ [H], f h is separable in the following sense:
f h(t, x, z, v, v ̄) = f X,h(t, x, z) + f V,h(t, v, v ̄),
where f X,h : [0, T ] × R × R → R, f V,h : [0, T ] × R × R → R.
(b) (Lipschitzity of f X,h
x ) For any h ∈ [H], t ∈ [0, T ] and x1, x2, z1, z2 ∈ R,
|f X,h
x (t, x1, z1) − f X,h
x (t, x2, z2)| ≤ LX(|x1 − x2| + |z1 − z2|),
where LX > 0 is the constant in Assumption 2.1.
(c) (Convexity, and Lipschitzity of fvV,h) There exist αV , L1V , L2V > 0 with αV > L2V such that, for any h ∈ [H], t ∈ [0, T ], h ∈ [H], and v, v1, v2, v ̄, v ̄1, v ̄2 ∈ R,
(v1 − v2)(f V,h
v (t, v1, v ̄) − f V,h
v (t, v2, v ̄)) ≤ −αV (v1 − v2)2,
∣∣f V,h
v (t, v1, v ̄) − f V,h
v (t, v2, v ̄)∣∣ ≤ LV
1 |v1 − v2|,
|f V,h
v (t, v, v ̄1) − f V,h
v (t, v, v ̄2)| ≤ LV
2 |v ̄1 − v ̄2|.
To introduce the next assumption, we define the matrix M by
M := Π (Π − K)−1 . (16)
The following result shows that Π − K is invertible, whence M is well-defined.
Lemma 4.1. The matrix Π − K is invertible.
Proof. Define
π := (π1 · · · πh)⊤ , υ := (ω1(κ1 − dh) · · · ωh(κh − dh))⊤ . (17)
Note that Π − K = πυ⊤ − K, K is invertible and υ⊤K−1π = ∑H
h=1 πhωh κh−d
κh <
∑H
h=1 πhωh = 1. By the Sherman–Morrison-Woodbury formula (see Section 2.1.3 on
page 50 of Golub and Van Loan (2013)), Π − K is invertible and
(Π − K)−1 = −K−1 − K−1πυ⊤K−1
1 − υ⊤K−1π . (18)
Assumption 4.2.
(a) λmin(I − M) > 0;
(b) There exist αM, αG
M > 0 such that, for any xi, vi ∈ L2
F[H]([0, T ]; RH), i = 1, 2,
E
[〈
x1
t − x2
t − ME[x1
t − x2
t ], ∂xF(x1
t , E[x1
t ], v1
t , E[v1
t ])
− ∂xF(x2
t , E[x2
t ], v2
t , E[v2
t ])
〉]
≤ −αME [‖x1
t − x2
t ‖2] ,
E [〈x1
T − x2
T − ME[x1
T − x2
T ], ∂xG(x1
T , E[x1
T ]) − ∂xG(x2
T , E[x2
T ])〉]
≤ −αG
ME [‖x1
T − x2
T ‖2] .
(19)
17

Remark 4.1. Assumption 4.1 implies Assumption 2.1.A.(iii)-(iv), and B.(ii).
The first condition of Assumption 4.1 requires the running rewards to be separable into two parts, namely, a state-dependent and a control-dependent component. This aligns with popular choices of rewards where a separate term is included to penalize extreme actions. The third condition requires fvV,h to be Lipschitz in the v ̄-variable, where the
Lipschitz constant L2V shall be smaller than the concavity constant αV with respect to the v-variable. This reflects a smaller sensitivity of the representative member’s preference with respect to the mean field term, which thus captures a small mean field effect in practical MFGs. Assumption 4.2 loosely requires that the matrix M has a moderate impact. In Proposition 4.1 below, we provide equivalent formulations of Assumption 4.2(a), along with a sufficient condition on the model parameters that -
implies it. On the other hand, Assumption 4.2(b) can be fulfilled by reward functions satisfying a slightly stronger monotonicity condition; see e.g. Section 5 below. Alternatively, if the concavity constants α1X, α2X, αg
1, αg
2
in Assumption 2.1.B satisfy α1X > α2X ≥ 0 and αg
1 > αg
2 ≥ 0, then (19) holds if
αX − 2LX ‖M‖2 > 0, αg − 2Lg‖M‖2 > 0, (20)
where αX := α1X − α2X and αg := αg
1 − αg
2. To see this, for any xi, vi ∈ L2
F[H]([0, T ]; RH), i = 1, 2, using Assumptions 2.1, 4.1, and Jensen’s inequality,
E
[〈
x1
t − x2
t − ME[x1
t − x2
t ], ∂xF(x1
t , E[x1
t ], v1
t , E[v1
t ]) − ∂xF(x2
t , E[x2
t ], v2
t , E[v2
t ])
〉]
≤ −αXE
[∣∣x1
t − x2
t
∣∣2]
+ LX ‖M‖2E [∣∣x1
t − x2
t
∣∣ (∣∣x1
t − x2
t
∣∣ + ∣∣E[x1
t − x2
t ]∣∣)]
≤ −(αX − 2LX ‖M‖2)E
[∣∣x1
t − x2
t
∣∣2]
,
so that we can pick αM = αX −2LX ‖M‖2 > 0. The second inequality in (19) can be shown in the same manner. Following this idea, if F and G are independent of the argument z, the condition can be further relaxed to requiring
αX
1 − LX ‖M‖2, αg
1 − Lg‖M‖2 > 0. (21)
Proposition 4.1. The following conditions are equivalent:
1. λmin(I − M) > 0.
2. λmax(ΠK−1) < 1;
3. ∑H
h=1
π h ωh (κh −dh )
κh +
√(∑H
h=1(πh)2
) (∑H
h=1
( ωh(κh−dh) κh
)2)
< 2.
In addition, the above conditions hold provided that
4. suph∈[H]
{ πh ωh
}
< infh∈[H]
{ πh ωh
κh κh−d
} .
Proof. The proof is relegated to Appendix D.1.
18

Proposition 4.1 indicates that the condition λmin(I − M) > 0 is met if and only if the effect of the surplus distribution on members’ wealth, as captured by the magnitude of Π, remains sufficiently moderate relative to the premium rate and safety loading represented by K. This again echoes the small mean field requirement. In particular, the condition
is satisfied when the ratios ( πh
ωh )H
h=1 do not deviate significantly between classes.
4.2 Uniqueness of Solution
We begin by establishing the uniqueness of solutions to the MF-FBSDE (15). The proof relies on the properties of the projection map (see Lemmas A.1–A.2), which enable us to derive a weaker form of monotonicity. Combined with Assumption 4.2, this allows us to bypass the stronger monotonicity conditions commonly assumed in the literature, which no longer hold herein due to the non-expansive nature of the projection map.
Theorem 4.1. Under Assumptions 2.1, 2.2, 4.1, and 4.2, the MF-FBSDE (15) admits at most one adapted solution.
Proof. Consider two solutions (xi, pi, ηi), i = 1, 2, and let ( ̃x, p ̃, η ̃) := (x1 − x2, p1 − p2, η1 − η2). By applying Itˆo’s lemma to 〈 ̃xt, p ̃t〉, we have
− E [〈 ̃xT , ∂xG(x1
T , z1
T ) − ∂xG(x2
T , z2
T )〉]
=E
[∫ T
0
(〈
r ̃xt − Kv ̃t + ΠE[v ̃t], p ̃t
〉
− 〈η ̃t, Σv ̃t〉
− 〈 ̃xt, r ̃pt − (∂xF(t, x1
t , z1
t , v1
t , v ̄1
t ) − ∂xF(t, x2
t , z2
t , v2
t , v ̄2
t ))〉 )
dt
]
=E
[∫ T
0
(
〈 ̃xt, ∂xF(t, x1
t , z1
t , v1
t , v ̄1
t ) − ∂xF(t, x2
t , z2
t , v2
t , v ̄2
t )〉 − 〈v ̃t, Kp ̃t + Ση ̃t〉
+ 〈p ̃t, ΠE[v ̃t]〉
)
dt
]
, (22)
where v ̄ti := E[vti], i = 1, 2. To proceed, we establish the following weaker form of monotonicity:
E
[∫ T
0
〈v ̃t, Kp ̃t + Ση ̃t〉dt
]
≥ 0. (23)
Indeed, for each h ∈ [H],
(vh,1
t − vh,2
t)
(
κh(ph,1
t − ph,2
t ) + σh(ηh,1
t − ηh,2
t)
)
= (vh,1
t − vh,2
t)
[
f V,h
v
(
t, vˆh,2
t , v ̄h,2
t
)
− f V,h
v
(
t, vˆh,1
t , v ̄h,1
t
)] ,
where for i = 1, 2,
vˆh,i
t := (f V,h
v )−1(−κhph,i
t − σhηh,i
t ; t, v ̄h,i
t ).
19

Hence,
(vh,1
t − vh,2
t)
(
κh(ph,1
t − ph,2
t ) + σh(ηh,1
t − ηh,2
t)
)
= −(vh,1
t − vh,2
t)
[
f V,h
v
(
t, vh,1
t , v ̄h,1
t
)
− f V,h
v
(
t, vh,2
t , v ̄h,1
t
)]
− (vh,1
t − vh,2
t)
[(
f V,h
v
(
t, vˆh,1
t , v ̄h,1
t
)
− f V,h
v
(
t, vh,1
t , v ̄h,1
t
))
−
(
f V,h
v
(
t, vˆh,2
t , v ̄h,1
t
)
− f V,h
v
(
t, vh,2
t , v ̄h,1
t
)) ]
− (vh,1
t − vh,2
t)
[
f V,h
v
(
t, vˆh,2
t , v ̄h,1
t
)
− f V,h
v
(
t, vˆh,2
t , v ̄h,2
t
)]
. (24)
By Assumption 4.1, we have
−(vh,1
t − vh,2
t)
(
f V,h
v
(
t, vh,1
t , v ̄h,1
t
)
− f V,h
v
(
t, vh,2
t , v ̄h,1
t
))
≥ αV |vh,1
t − vh,2
t |2. (25)
On the other hand, by noticing that fvV,h(t, ·, v ̄) is non-increasing and vh,i
t = ProjI [vˆh,i
t ], using Lemma A.2, we arrive at
− (vh,1
t − vh,2
t)
[(
f V,h
v
(
t, vˆh,1
t , v ̄h,1
t
)
− f V,h
v
(
t, vh,1
t , v ̄h,1
t
))
−
(
f V,h
v
(
t, vˆh,2
t , v ̄h,1
t
)
− f V,h
v
(
t, vh,2
t , v ̄h,1
t
)) ]
≥ 0. (26)
Next, by Assumption 4.1,
−(vh,1
t − vh,2
t)
[
f V,h
v
(
t, vˆh,2
t , v ̄h,1
t
)
− f V,h
v
(
t, vˆh,2
t , v ̄h,2
t
)]
≥ −LV
2 |vh,1
t − vh,2
t ||v ̄h,1
t − v ̄h,2
t |.
(27)
Hence, by combining (24)-(27) using Jensen’s inequality, we have
E
[∫ T
0
(vh,1
t − vh,2
t)
(
κh(ph,1
t − ph,2
t ) + σh(ηh,1
t − ηh,2
t)
)
dt
]
≥
∫T
0
(
αV E
[
|vh,1
t − vh,2
t |2]
− LV
2E
[
|vh,1
t − vh,2
t ||v ̄h,1
t − v ̄h,2
t|
])
dt
≥
∫T
0
(αV − LV
2 )E
[
|vh,1
t − vh,2
t |2]
dt ≥ 0,
and thus (23) follows. Next, by differentiating 〈Mz ̃t, E[p ̃t]〉 with respect to t, we have
∫T
0
〈E[p ̃t], ΠE[v ̃t]〉dt = −〈Mz ̃T , E [∂xG(x1
T , z1
T ) − ∂xG(x2
T , z2
T )]〉
−
∫T
0
〈Mz ̃t, E [∂xF(t, x1
t , z1
t , v1
t , v ̄1
t ) − ∂xF(t, x2
t , z2
t , v2
t , v ̄2
t )]〉 dt. (28)
20

By combining (22), (23), (28), and using Assumptions 2.1, 4.1, and 4.2, we have
0 ≥ −E [〈 ̃xT , ∂xG(x1
T , z1
T ) − ∂xG(x2
T , z2
T )〉] + 〈Mz ̃T , E [∂xG(x1
T , z1
T ) − ∂xG(x2
T , z2
T )]〉
−E
[∫ T
0
〈 ̃xt, ∂xF(t, x1
t , z1
t , v1
t , v ̄1
t ) − ∂xF(t, x2
t , z2
t , v2
t , v ̄2
t )〉dt
]
+
∫T
0
〈Mz ̃t, E [∂xF(t, x1
t , z1
t , v1
t , v ̄1
t ) − ∂xF(t, x2
t , z2
t , v2
t , v ̄2
t )]〉 dt
= −E [〈 ̃xT − Mz ̃T , ∂xG(x1
T , z1
T ) − ∂xG(x2
T , z2
T )〉]
−E
[∫ T
0
〈 ̃xt − Mz ̃t, ∂xF(t, x1
t , z1
t , v1
t ,  ̄v1
t ) − ∂xF(t, x2
t , z2
t , v2
t ,  ̄v2
t )〉dt
]
≥ αG
ME [| ̃xT |2] + αME
[∫ T
0
| ̃xt|2dt
]
. (29)
By standard a priori estimates of (F)BSDEs (see e.g. (66) with δ = 0 below) and Gr ̈onwall’s inequality, we conclude that p1 ≡ p2 and η1 ≡ η2.
4.3 Global Existence of Solution
We proceed to prove the global existence of solution of the MF-FBSDE (15) by the continuation approach. To this end, we consider the following MF-FBSDE parameterized by μ ∈ [0, 1]:


dˆxt = [−(1 − μ)pˆt + μ (rˆxt + l − Kvˆt + ΠE[vˆt]) + φt] dt
+ [−(1 − μ)diag(ηˆt) + μΣ(I − diag(vˆt)) + ψt] dWt,
−dpˆt = [(1 − μ)ˆxt + μ (rˆpt − ∂xF(t, ˆxt, ˆzt, vˆt, E[vˆt])) + ξt] dt − diag(ηˆt)dWt,
ˆx0 = x0,
pˆT = −μ∂xG(ˆxT , ˆzT ) + (1 − μ)ˆxT + ζT ,
(30)
where
ˆzt = E[ˆxt],
vˆt = ProjIH
[(∂vF)−1 (− (Kpˆt + Σηˆt) ; t, ˆxt, zˆt, E[vˆt])] ,
E[vˆt] = E [ProjIH
[(∂vF)−1 (− (Kpˆt + Σηˆt) ; t, ˆxt, ˆzt, E[vˆt])]] ,
φ, ξ ∈ L2
F[H]([0, T ]; RH ), ψ ∈ L2
F[H]([0, T ]; RH × RH ), and ζT ∈ L2(Ω, FT , P). It is clear that (30) admits a solution when μ = 0; see Lemma 2.5 of Peng and Wu (1999). The following lemma establishes a contraction property such that, if the system admits a solution for some μ0 ∈ [0, 1), then it also admits a solution for any μ ∈ [μ0, μ0 +δ] for some δ > 0 independent of μ0. Using this property recursively, we can extend the existence of a solution to μ = 1, thus proving the solvability of (15).
Lemma 4.2. Assume that there exists a constant μ0 ∈ [0, 1) such that, for any φ, ξ ∈ L2
F[H]([0, T ]; RH), ψ ∈ L2
F[H]([0, T ]; RH × RH ), ζT ∈ L2(Ω, FT , P), the MF-FBSDE (30)
21

admits a solution. Then, under Assumptions 2.1, 2.2, 4.1 and 4.2, there exists a δ0 ∈ (0, 1) which only depends on T , and independent of μ0, such that for any μ ∈ [μ0, μ0 + δ0], the MF-FBSDE (30) admits a solution for any φ, ξ, ψ and ζT .
Proof. The proof is relegated to Appendix D.2.
As an immediate consequence of Theorem 4.1 and Lemma 4.2, we state the main result of this section.
Theorem 4.2. Under Assumptions 2.1, 2.2, 4.1 and 4.2, the MF-FBSDE (15) admits a unique solution for any T > 0.
5 Quadratic Rewards
In this section, we consider a particular class of reward functions that are quadratic in representative members’ wealth and strategies, which can be interpreted as simultaneously maximizing wealth while penalizing deviations from a given target. This specification is analytically tractable and has been extensively applied in economics (Hansen and Sargent (1980, 1995, 2013)), and in the actuarial context (Ngwira and Gerrard (2007); Huang et al. (2010); Delong et al. (2019)). To be exact, for h ∈ [-
H], we let
f h(t, x, z, v, v ̄) = f h(t, x, zh, v, v ̄) := − Qth
2
(x − Sh
t zh)2 − Pth
2
(v − Rh
t v ̄)2 ,
gh(x, z) = gh(x, zh) := γhx − QhT
2
(x − Sh
T zh)2 ,
(31)
where γh > 0, and Q·h, P·h, S·h and R·h are bounded deterministic functions with inft∈[0,T ] Qt >
0 and inft∈[0,T ] Pth > 0. In other words, each member aims to maximize her own wealth while taking into account the fluctuations from the average wealth and strategies of other members from the same class, which mirrors a mean-variance objective. To facilitate the subsequent analysis, we define the following RH × RH-valued functions:
Pt := diag ((P h
t )H
h=1
) , Qt := diag ((Qh
t )H
h=1
),
Rt := diag ((Rh
t )H
h=1
) , St := diag ((Sh
t )H
h=1
) , (32)
and a RH column vector γ = (γ1, . . . , γH)⊤.
5.1 Equilibrium Solution
Before stating the equilibrium solution under the quadratic reward functions (31), we introduce the following assumption.
Assumption 5.1.
(a) supt∈[0,T ] |Sth| < 1 for all h ∈ [H];
(b) supt∈[0,T ] |Rth| < 1 for all h ∈ [H];
(c) λmin(I − M) > 0.
22

(d) inft∈[0,T ] λmin((I − M⊤)Qt(I − St)) > 0.
Under the quadratic rewards (31), it is clear that Assumptions 2.1, 2.2, and 4.1 are fulfilled given Assumption 5.1(a)-(b). In addition, Assumption 4.2 is a consequence of (c) and (d) in Assumption 5.1. To see this, consider for any xi, vi ∈ L2
FH ([0, T ]; RH), i = 1, 2, and any t ∈ [0, T ],
E
[〈
x1
t − x2
t − ME[x1
t − x2
t ], ∂xF(t, x1
t , E[x1
t ], v1
t , E[v1
t ]) − ∂xF(t, x2
t , E[x2
t ], v2
t , E[v2
t ])
〉]
= E [〈 ̃xt − Mz ̃t, −Qt ( ̃xt − Stz ̃t)〉]
= − E [〈 ̃xt, Qt ̃xt〉] + 〈z ̃t, (QtSt + M⊤Qt(I − St)) z ̃t
〉
≤ − min {λmin(Qt), λmin((I − M⊤)Qt(I − St))} E [| ̃xt|2] ,
where  ̃xt := xt1 − xt2 and z ̃t := zt1 − zt2, and the last line follows from Lemma A.3. By Assumption 5.1(d), we can take
α
M := inf
t∈[0,T ]
{λmin(Qt), λmin((I − M⊤)Qt(I − St))} > 0.
Likewise, one can show that the same constant αg
M = αM can be used to satisfy (19), thereby fulfilling Assumption 4.2. Although Assumption 5.1(c) and (d) are not equivalent, they both share the same key feature: the matrix M has only a moderate impact. By Theorems 3.1 and 4.2, the solution of Problems 2-3 under the quadratic rewards (31) is immediately characterized by the following.
Corollary 5.1. Under quadratic reward (31), the MF-FBSDE (15) can be written as


dxt = (rxt + l − Kvt + Πv ̄t) dt + Σ (I − diag(vt)) dWt,
−dpt = (rpt + Qt(xt − Stzt)) dt − diag(ηt)dWt,
x0 = (ξ1, . . . , ξH)⊤,
pT = QT (xT − ST zT ) − γ,
(33)
where
zt = E[xt], vt = ProjIH
[P−1
t (Kpt + Σηt) + Rtv ̄t
] , v ̄t = E [vt] ,
and Pt−1 is the inverse matrix of Pt. In addition, Equation (33) is uniquely solvable under Assumption 5.1.
5.2 Equilibrium without Insurance Constraints
When no insurance constraint is imposed, i.e., I = R, the MF-FBSDE (33) admits a closed form solution, which can be represented in terms of the solutions of certain Riccati equations. In this case, the mean field term (v ̄th)t∈[0,T ] and the optimal strategy (vth)t∈[0,T ] can be reduced to the following:
vh
t = κhpth + σhηth
Pth
+ Rh
t v ̄h
t and v ̄h
t = κhp ̄th + σhE[ηth]
Pth(1 − Rth) . (34)
23

Let Γ· = diag((Γ·h)H
h=1) : [0, T ] → RH be the solution of the following Riccati equation:


dΓth
dt − (κh)2(Γth)2
Pth + (σh)2Γth
+ 2rΓh
t + Qh
t = 0,
Γh
T = Qh
T.
(35)
Equation (35) enables us to characterize the system (33) and the optimal strategy by the deterministic functions  ̄p = (p ̄h)h∈[H] and z = (zh)h∈[H] in an affine relationship. Indeed, using the ansatz and Itˆo’s lemma, it is straightforward to verify that pt = Γt(xt −zt) + p ̄t, where (p ̄, z) satisfies the following FBODE:


dzt = (rzt + l + (Π − K) (Atp ̄t + bt)) dt,
−dp ̄t = (r ̄pt + Qt(I − St)zt) dt,
z0 = (E[ξ1], . . . , E[ξH]),
 ̄pT = QT (I − ST )zT − γ,
(36)
and
At = K (Σ2Γt + Pt(I − Rt))−1 , bt = Σ2 (Σ2Γt + Pt(I − Rt))−1 vec(Γt),
Ct = K (Σ2Γt + Pt
)−1 , Dt = PtRt
(Σ2Γt + Pt
)−1 .
The discussion of the well-posedness of (36) is relegated to Appendix E.2. Indeed, the FBODE (36) can further be reduced by considering the following ansatz :
p ̄t = Ξtzt + ζt, (37)
where Ξ· : [0, T ] → RH × RH and ζ· : [0, T ] → RH satisfy the following equation:


dΞt
dt + 2rΞt + Ξt (Π − K) AtΞt + Qt(I − St) = 0,
dζt
dt + (rI + Ξt (Π − K) At) ζt + Ξt (l + (Π − K) bt) = 0,
ΞT = QT (I − ST ),
ζT = −γ.
(38)
Hence, the well-posedness of (36) can be implied by that of (38), and the complete solution of the MFG can be characterized by (35) and (38). The following summarizes the findings in this section.
Theorem 5.1. Suppose that the system (38) admits a unique solution. Then, the optimal insurance strategy (vt)t∈[0,T ] is given by
vt = Ct (Γt(xt − zt) + p ̄t) + Dtv ̄t + et,
where et = Σ2 (Σ2Γt + Pt)−1 Γt, v ̄t = Atp ̄t + bt, p ̄t is given by (37), and (xt)t∈[0,T ], (zt)t∈[0,T ] are the solution of the following SDE and ODE, respectively:
{dxt = (rxt + l − Kvt + Πv ̄t) dt + Σ(I − diag(vt))dWt,
x0 = (ξh)H
h=1,
{dzt = (rzt + l + (Π − K) v ̄t) dt,
z0 = (E[ξh])H
h=1.
Proof. The proof is relegated to Appendix E.1.
24

6 Numerical Experiments
In this section, we perform comprehensive numerical experiments to examine the equilibrium insurance strategies and the resulting wealth of representative members. All computations are performed using an NVIDIA RTX A5500 GPU.2 Supplementary tables in this section (Tables 3-6) are provided in Appendix F. In the first part of the experiment, we consider an MIC with two membership classes (H = 2), and the members exhibit quadratic rewards as described in (31). The following parameters are chosen as t-
he baseline scenario:
r = 0.03, l ̃1 − μ1 = l ̃2 − μ2 = 0.02, P·1 = P·2 = Q·1 = Q·2 ≡ 1, R·1 = R·2 ≡ 0.1,
S·1 = S·2 ≡ 0.6, κ1 = κ2 = 0.5, e1 = e2 = 0.01, d1
e = d2
e = 0.1e1 = 0.001,
ω1 = ω2 = 0.5, σ1 = σ2 = 0.3, γ1 = γ2 = 1, ξ1 = ξ2 = 2, d = 0.05, T = 1. (39)
The sharing proportion πh of the surplus, and the fixed management fee rate deh, h = 1, 2, are taken to be proportional to the membership fee as follows:
πh := eh
∑2
k=1 ekωk , dh
e = 0.1eh. (40)
Under the baseline scenario, we have π1 = 1 = π2 and de1 = de2 = 0.001. On the other hand, the net income rates are
l1 = l ̃1 − μ1 − e1 + π1
2 ∑
k=1
ωk(ek − dk
e) = 0.019 = l2.
Furthermore, for h = 1, 2, we set the cases listed in Table 2 to study the effect of the volatility σh, the safety loading κh, the risk aversion γh, the membership fee eh, the net
income rate before sharing l ̃h − μh, and the relative class size ωh. For all cases, we consider two scenarios: with and without an insurance constraint. In the former case, we impose an insurance constraint I = [0, 1], i.e., members are prohibited from taking a “short position”, nor transferring an amount more than their actual losses to the MIC. We remark that all the combinations of parameters above satisfy Assumption 5.1. To obtain the optimal insurance strategies and the equilibrium wealth un-
der insurance constraint, we solve the FBSDE (33) numerically using a deep BSDE approach, and the details are elaborated in the next subsection.
6.1 Neural Network Architectures
The deep BSDE approach presented in this subsection is an adaptation of the methods introduced in Germain et al. (2022); Carmona and Lauri`ere (2022); Han et al. (2024). The central idea is to approach the backward equation (pt)t∈[0,T ] in a forward manner, treating the initial value p0 as a trainable component by a neural network. The system
2The implementation code is publicly available on GitHub at: https://github.com/WenyuanLi-HKU-SAAS/Mean-Field-Analysis-of-Mutual-Insurance-Market.git.
25

Table 2: Parameters used across different test cases Case Parameters 1(a) σ1 = 0.1, σ2 = 0.3 1(b) ω1 = 0.8, ω2 = 0.2; σ1 = 0.1, σ2 = 0.3 1(c) ω1 = 0.2, ω2 = 0.8; σ1 = 0.1, σ2 = 0.3 2(a) γ1 = 1.0, γ2 = 1.6; 2(b) ω1 = 0.8, ω2 = 0.2; γ1 = 1.0, γ2 = 1.6 2(c) ω1 = 0.2, ω2 = 0.8; γ1 = 1.0, γ2 = 1.6 3(a) κ1 = 0.1, κ2 = 0.5, γ1 = γ2 = 1.6 3(b) κ1 = 0.1, κ2 = 0.5, γ1 = γ2 = 1.0 4(a) l ̃1 − μ1 = 0.02, l ̃2 − μ2 = 0.1 4(b) e1 = 0.1, e2 = 0.01; l ̃1 − μ1 = 0.02, l ̃2 − μ2 = 0.1 4(c) e1 = 0.01, e2 = 0.1; l ̃1-
 − μ1 = 0.02, l ̃2 − μ2 = 0.1
is then simulated forward in time, solving both the forward equation for (xt)t∈[0,T ] and the backward equation for (pt)t∈[0,T ] using Monte Carlo methods. The loss function for the neural network is defined as the deviation between the simulated value pT at the terminal time, and the prescribed terminal condition of the original backward equation. To accommodate the extended mean field game framework, a penalty term is introduced for the mean field term (v ̄t)t∈[0,T ] to ensure the additional fix-
ed point condition is satisfied. The complete architecture is described as follows. We begin by building six neural networks for v ̄1, v ̄2, η1, η2, p10, p20: for t ∈ [0, T ],
v ̄1
t = N N φ1
1 (t), v ̄2
t = N N φ2
2 (t),
η1
t = N N φ3
3 (t, x1
t , z1
t , p1
t ), η2
t = N N φ4
4 (t, x2
t , z2
t , p2
t ),
p1
0 = N N φ5
5 (x1
0), p2
0 = N N φ6
6 (x2
0),
where φi are the weights and biases of neural network N N i. The optimal strategies are then computed by
vh
t = ProjI
[(f h
v )−1(−(κhph
t + σhηh
t ); t, v ̄h
t )] , h = 1, 2.
Each neural network N N φi
i above is chosen to have two hidden layers, and each layer consists of 32 hidden nodes. The Rectified Linear Unit (ReLU) function and the identity function are chosen as the activation function in the hidden layer and the output layer, respectively. Figure 1 shows the structure of the neural network for (ηt1)t∈[0,T ]. For cases
with constraint vt ∈ [0, 1]H, v ̄th are defined by projecting the output of the neural network N N h to I = [0, 1]:
v ̄1
t = Proj[0,1][N N φ1
1 (t)], v ̄2
t = Proj[0,1][N N φ2
2 (t)].
To simulate the SDEs using the Euler-Maruyama method, we discretize [0, T ] into a partition T = {ti : i∆t, i = 0, 1, ..., M}, where ∆t = T /M. Then, we can formulate the loss function and the simulation scheme as follows:
min
φ1 ,φ2 ,φ3 ,φ4 ,φ5 ,φ6
2 ∑
h=1
E [(ph
T + γh − Qh
T (xh
T − Sh
T zh
T ))2] + λ
M
M −1
∑
i=0
∑2
h=1
(E[vh
ti ] − v ̄h
ti )2, (41)
26

s.t. xh
ti+1 = xh
ti +
(
rxh
ti + lh − κhvh
ti + πh
∑2
j=1
ωj(κj − dj)v ̄j
ti
)
∆t + σh(1 − vh
ti )∆W h
ti ,
ph
ti+1 = ph
ti − [rph
ti − f h,X
x (t, xh
ti , zh
ti )]∆t + ηh
ti ∆W h
ti ,
zh
ti+1 = zh
ti +
(
rzh
ti + lh − κhv ̄h
ti + πh
∑2
j=1
ωj(κj − dj)v ̄j
ti
)
∆t,
xh
0 = ξh, zh
0 = E[ξh], ph
T = −γh + Qh
T (xh
T − Sh
T zh
T ),
v ̄1
t = ProjI [N N φ1
1 (ti)], v ̄2
t = ProjI [N N φ2
2 (ti)],
v1
ti = ProjI
[(f 1
v )−1(−(κ1p1
ti + σ1η1
ti ); t, v ̄1
ti)] , v2
ti = ProjI
[(f 2
v )−1(−(κ2p2
ti + σ2η2
ti ); t, v ̄2
ti)] ,
η1
ti = N N φ3
3 (ti, x1
ti , z1
ti , p1
ti ), η2
ti = N N φ4
4 (t, x2
ti , z2
ti , p2
ti ),
p1
0 = N N φ5
5 (x1
0), p2
0 = N N φ6
6 (x2
0),
where ∆Wthi = Wthi+1 − Wthi , λ > 0 is the penalty parameter, and the expectations are computed by the average of the simulated paths. In other words, the loss function is the sum of expected squared loss of the terminal condition of the backward equations, and a penalty term for the difference between E[vth] and v ̄th.
......
......
t
xt1
zt1
pt1
H (1)
1
H (1)
32
H (2)
1
H (2)
32
ηt1
Input Hidden 1 Hidden 2 Ouput
Figure 1: Neural network for ηt1 with a “4 − 32 − 32 − 1” structure.
In this study, we perform Monte-Carlo simulations for the system (41) with 10, 000 sample paths and M = 100 time steps. For each case, we train the neural network 1, 000 times. An Adam optimizer is applied to minimize the objective (41). The learning rate is set as 5 × 10−4. To demonstrate the accuracy of the algorithm, under quadratic rewards, we use the non-constrained case as a benchmark and compute the relative error between the neural network approach and the ordinary differential equation (O-
DE) benchmark (Theorem 5.1), which is defined as
1 4M
M −1
∑
i=0
2 ∑
h=1
∣∣∣∣∣∣∣
N N φh
h (ti) − v ̄h,ODE
ti
max
j∈{0,...,M −1}
∣∣∣v ̄h,ODE
tj
∣∣∣
∣∣∣∣∣∣∣
+1
4M
M ∑
i=1
2 ∑
h=1
∣∣∣∣∣∣∣
z h,N N
ti − zh,ODE
ti
max
j∈{0,...,M −1}
∣∣∣zh,ODE
tj
∣∣∣
∣∣∣∣∣∣∣
,
27

where the superscripts “ODE” and “NN” indicate that the values are generated by the ODE benchmark from Theorem 5.1, and by the neural network approach, respectively. The factor of 4 in the error definition accounts for averaging over the four functions (v ̄t1, v ̄t2, zt1, zt2). Table 3 in Appendix F presents the relative errors under different choices of the penalty coefficient λ. Based on the result, we choose λ = 10 for Cases 1, 4(b) and 4(c), and λ = 1 for other cases to minimize the training -
errors. In practice, we recommend choosing λ from 1 to 10 to obtain the smallest computation errors. Figure 2 shows the loss curve for Case 1(a) with insurance constraint, illustrating that the loss function (41) decays rapidly to zero with the number of training iterations. The numerical values of the loss functions for all cases considered are provided in Tables 4 (without constraint) and 5 (with constraint) in Appendix F. From the tables, we observe that both components of the training error, c-
orresponding to the two summands in (41), are small, on the order of 10−3. This demonstrates the accuracy of the proposed algorithm in satisfying the BSDE’s terminal condition and approximating the mean field term v ̄h.
0 00 00 00 00 000
00
0
0
0
Figure 2: Loss curve for Case 1(a) with insurance constraints.
6.2 Equilibrium Wealth and Strategies
Figures 3-9 present the results for Cases 1-4, respectively. The equilibrium strategies v ̄t = (v ̄t1, v ̄t2), and the equilibrium wealth zt = (zt1, zt2) are displayed in the left and right panels, respectively. In each figure, we distinguish the curves without constraint by solid line, and those with constraint by dashed line. The curve for Class 1 and Class 2 are plotted in blue and yellow respectively. Table 6 supplements the figures by providing the numerical values of the equilibrium strategi-
es of all cases for t = 0 and near the end of the planning horizon.
6.2.1 The impact of σh
Figure 3 depicts the effect of the volatility of the loss process on the equilibrium strategies. Figure 3(a) shows that the equilibrium strategy increases with volatility, with the
28

representative member from Class 2 (σ2 = 30%) purchasing more insurance than her counterpart in Class 1 (σ1 = 10%). Intuitively, when there is greater uncertainty about the severity of the loss, members tend to purchase more insurance to transfer the uncertainty to the insurance company. Consequently, with a higher insurance purchase and, therefore, higher premium payments, the equilibrium wealth of the representative member in Class 2 tends to be smaller than that of one in Class 1; see Figure 3-
(b).
00 0 0 0 0
t
00
0
0
0
0 ̄t 0
̄t 0
̄t 0 t
̄t 0 t
(a) v ̄h for Case 1(a)
00 0 0 0 0 0
t
00
0
0
0
0 t0
t0
t0t
t0t
(b) zh for Case 1(a)
Figure 3: The equilibrium insurance strategies and wealth for representative members under Cases 1(a).
Examining the effect of the insurance constraint, we see that the constraint becomes binding for Class 1 near the end of the planning horizon. This restriction truncates the insurance strategy, leading members from Class 1 to ultimately forgo purchasing insurance. On the other hand, the constraint remains non-binding for Class 2, so their strategies are largely unchanged by the constraint. Nevertheless, small deviations do appear, stemming from the indirect influence of Class 1’s binding constrain-
t through the sharing mechanism; see also Table 6. Owing to the small deviations of the equilibrium strategies under the two scenarios, the effect of the insurance constraint on the equilibrium wealth is relatively small. The impact of relative class sizes on the equilibrium strategies is illustrated in Table 6. While the changes are not dramatic, we observe that members from both classes tend to reduce their insurance positions when the proportion of more risky members is smaller (Case 1(b), ω1 =-
 0.8, σ1 = 10%, ω2 = 0.2, σ2 = 30%), and increase their positions when the proportion of more risky members is higher (Case 1(c), ω1 = 0.2, σ1 = 10%, ω2 = 0.8, σ2 = 30%). Compared to Case 1(a), when insurance constraint is imposed, the initial equilibrium strategy v ̄01 for Class 1 has been reduced by 2.20% in Case 1(b), and increased by 1.94% in Case 1(c). This can be explained by changes in the aggregate risk of the mutual as the composition of member riskiness varies. For instance, in Case 1(c)-
, the greater presence of high-risk members incentivizes all members to take on larger insurance positions.
29

6.2.2 The impact of γh
The effect of the parameter γh, h = 1, 2, is depicted in Figure 4. This parameter can serve as a measure of the risk aversion of the member. Specifically, when γh is high (resp. small), the member is more (resp. less) concerned about her absolute terminal wealth relative to its fluctuation, indicating that the member is less (resp. more) riskaverse. Clearly, members who are more risk-averse tend to purchase more insurance to transfer the risk to the MIC (see Class 1 (γ1 = 1) in Figure 4(a)). This -
results in a lower equilibrium wealth as opposed to Class 2 (γ2 = 1.6), since (i) members of Class 1 are less aware of the dollar amount of their terminal wealth, and (ii) more premiums are paid due to higher insurance demand. Specifically, Figure 4(a) shows that the risk-averse member from Class 1 purchases insurance, in contrast to the short position taken by the risk-seeking member from Class 2 when no insurance constraint is imposed. Due to the difference in the risk-aversion and the insurance-
 strategies, the representative member from Class 2 has a higher equilibrium wealth than that from Class 1.
00 0 0 0 0
t
0
0
00
0
0
0
0 ̄t 0
̄̄tt 0 t
̄t t
(a) v ̄h for Case 2(a)
00 0 0 0 0 0
t
00
0
0
0
0
0
t0
tt 0 t
tt
(b) zh for Case 2(a)
Figure 4: The equilibrium insurance strategies and wealth for representative members under Case 2(a).
Imposing the insurance constraint has a prominent effect on the equilibrium strategy of Class 2, since it restricts members from taking a short position. Consequently, it reduces the difference in the insurance strategies and the wealth gap between the two classes. Despite the constraint is unbinding for Class 1, the drastic change in the insurance strategy of Class 2 under the constraint induces an increase in the insurance strategy of Class 1. The impact of the membership class composition can b-
e assessed by comparing Cases 2(b) and 2(c) with Case 2(a) in Table 6. When the proportion of risk-averse members is high (Case 2(b), ω1 = 0.8), members in both classes tend to purchase more insurance. Compared to Case 2(a), when the insurance constraint is imposed, the initial equilibrium strategy has increased by 2.03% for Class 1, and 2.73% for Class 2. The reasons are twofold. First, the overall risk awareness of the mutual has increased, driven by the
30

larger share of risk-averse members. Second, the higher premium income contributed by Class 1 members leads to greater shared surplus, from which the more risk-seeking Class 2 members also benefit. This enhanced surplus distribution boosts their ability to afford more coverage. Conversely, the insurance strategies for members from both classes decrease when there is a smaller proportion of risk-averse members (Case 2(c), ω1 = 0.2).
6.2.3 The impact of κh
Figures 5-6 manifest the scenario under different κh, which is proportional to the safety loading θh and the rate of loss μh. In the study, members in Class 2 (κ2 = 0.5) are charged with a higher cost of insurance than their Class 1 (κ1 = 0.1) counterparts, which can be due to higher rate of loss and safety loading of the policy.
00 0 0 0 0
t
0
0
00
0
0
0
0 ̄t 0
̄t 0
̄t 0 t
̄t 0 t
(a) v ̄h for Case 3(a)
00 0 0 0 0 0
t
00
0
0
0
0
0t 0
t0
t 0t
t 0t
(b) zh for Case 3(a)
Figure 5: Equilibrium insurance strategies and wealth for representative members under Case 3(a).
Figures 5–6 reveal that variations in κh substantially influence how the equilibrium insurance strategy evolves over time. With a higher κh (Class 2 in Cases 3(a)-(b)), the equilibrium strategy tends to decay at a faster rate. Consequently, the relative size of the equilibrium wealth changes over time and is influenced by other parameters such as γh. When γh = 1.6 (Case 3(a)), indicating a relatively low level of risk aversion, a higher κh (see Class 2 in Figure 5(a)) leads to a reduction in the i-
nsurance purchases of members. The reason is straightforward: members are less inclined to buy overpriced insurance. Consequently, this lowers the equilibrium wealth for members in Class 2. The higher premium rate also lowers the equilibrium wealth for members in Class 2 compared to Class 1 when insurance constraint is imposed. In addition, for Class 2, the insurance constraint binds for roughly half of the planning horizon. In the unconstrained case, κh decays rapidly over time, whereas under the-
 constraint, this decline forces v ̄t2 = 0. Consequently, the equilibrium insurance strategies differ substantially between the constrained and unconstrained settings for Class 2.
31

In contrast, when the level of risk aversion is relatively high (Case 3(b), γh = 1), a higher κh does not necessarily lower the initial insurance demand. As shown in Figure 6(a), members in Class 2 purchase more insurance than their Class 1 counterparts until the end of the planning horizon. This can be explained as follows. Given that the net
income remains unchanged, an increase in κh may arise from both a higher μh and l ̃h. In this case, members face a greater expected loss intensity, which encourages them to purchase more insurance despite the higher premium cost. Moreover, when risk aversion is high, members in Class 2 place greater emphasis on mitigating wealth volatility within their class, resulting in higher insurance demand even at the expense of slower wealth accumulation. This pattern is reflected in Figure 6(b), where thei-
r wealth growth is slower than their Class 1 counterpart. Owing to this and the higher time sensitivity of the insurance strategy under higher κh, their focus gradually shifts toward maximizing terminal wealth, leading to reduced insurance purchases when approaching T .
00 0 0 0 0
t
0
0
00
0
0
0
0 ̄t 0 0
̄t 0 0
̄t 0 0 t
̄t 0 0 t
(a) v ̄h for Case 3(b)
00 0 0 0 0 0
t
00
0
0
0
0
0 t 00
t 00
t 00t
t 00t
(b) zh for Case 3(b)
Figure 6: (continued) Equilibrium insurance strategies and wealth for representative members under Case 3(b).
6.2.4 The impact of l ̃h − μh
Figure 7 illustrates the effect of the sharing-independent net income rate l ̃h − μh, that is, the net income prior to any surplus or deficit transfers under the MIC, in Case 4(a). It
is clear that the representative member from Class 2 (l ̃2 − μ2 = 0.1), who earns a higher
net income rate than her Class 1 (l ̃1 − μ1 = 0.02) counterpart, tends to purchase more insurance due to the higher purchasing power. This high income rate also offsets the higher premium rate, leading to a higher equilibrium wealth for the member in Class 2.
6.2.5 Impact of eh
The effect of the membership fee rate eh can be examined by comparing Cases 4(b)4(c) with Case 4(a). In particular, under the proportional relation (40), a change in the
32

00 0 0 0 0
t
0
0
0
0
t ̄ 00 μ 00 ̃
t ̄ 0 μ 00 ̃
t ̄ 00 μ 00 ̃ t
t ̄ 0 μ 00 ̃ t
(a) v ̄h for Case 4(a)
00 0 0 0 0 0
t
00
0
0
0 t ̃ 00 μ 00
t ̃ 0 μ 00
t ̃ 00 μ 00 t
t ̃ 0 μ 00 t
(b) zh for Case 4(a)
Figure 7: Equilibrium insurance strategies and wealth for representative members under Case 4(a).
membership fee rate would also alter the sharing proportion πh and the management fee rate deh.
In Case 4(b) (Figure 8), the increased sharing proportion π1 = 1.8182 for Class 1 compensate the income advantage of Class 2. As a result, the wealth of Class 1 exceeds that of Class 2, accompanied by a higher insurance position.
00 0 0 0 0
t
0
0
0
0
t ̄ 00 μ 0 ̃
t ̄ 0 μ 00 ̃
t ̄ 00 μ 0 ̃ t
t ̄ 0 μ 00 ̃ t
(a) v ̄h for Case 4(b)
00 0 0 0 0 0
t
00
0
0
0 t ̃ 00 μ 0
t ̃ 0 μ 00
t ̃ 00 μ 0 t
t ̃ 0 μ 00 t
(b) zh for Case 4(b)
Figure 8: Equilibrium insurance strategies and wealth for representative members under Case 4(b).
In Case 4(c) (Figure 9), with e1 = 0.01 and e2 = 0.1, members from Class 1 face a reduction in the shared surplus, leading to lower equilibrium wealth and a reduced insurance strategy compared to Case 4(a). In contrast, members in Class 2 receive both
33

higher incomes and surplus from the MIC then her counterpart in Class 1, leading to an even higher insurance strategy and equilibrium wealth compared to Case 4(a).
00 0 0 0 0
t
0
0
0
0
t ̄ 00 μ 00 ̃
t̄ 0 μ 0̃
t ̄ 00 μ 00 ̃ t
t̄ 0 μ 0̃ t
(a) v ̄h for Case 4(c)
00 0 0 0 0 0
t
00
0
0
0 t ̃ 00 μ 00
t̃ 0 μ 0
t ̃ 00 μ 00 t
t̃ 0 μ 0 t
(b) zh for Case 4(c)
Figure 9: Equilibrium insurance strategies and wealth for representative members under Case 4(c).
6.2.6 Behavior with respect to time
Lastly, in all cases, we observe that the equilibrium insurance strategies decrease with time. The reasons are twofold. First, the value of the protection provided by insurance often declines with time, as the window for significant losses to occur in the future has shortened. Consequently, the uncertainty of future losses decreases, leading to a lower demand for coverage. Second, as the length of the planning horizon shortens, members would prioritize maximizing terminal wealth over long-term ris-
k management, further contributing to the reduction in insurance strategies. The time-decaying nature of indemnity functions is also documented in the actuarial literature, see e.g. Zeng and Li (2011), Li et al. (2012), and Yi et al. (2013).
6.3 General Mixture of Reward Functions
The second study is based on an alternative class of reward functions. Specifically, we define
f h(t, x, z, v, v ̄) :=


γh
1 − γh
( ahx
γh + bh
)1−γh
− γh(bh)1−γh
1 − γh − Qh
2 (x − Bh)2 − P h
2 (v − Rhv ̄)2,
if x ≥ 0;
ah(bh)−γhx − Qh
2 (x − Bh)2 − P h
2 (v − Rhv ̄)2, if x < 0,
34

and
gh(x, z) :=


γh
1 − γh
( ahx
γh + bh
)1−γh
− γh(bh)1−γh
1 − γh − Qh
2 (x − Bh)2, if x ≥ 0;
ah(bh)−γh x − Qh
2 (x − Bh)2, if x < 0.
These reward functions combine a hyperbolic absolute risk aversion (HARA) utility with a penalty relative to a specified benchmark. The parameter γh > 0, γh 6= 1 represents the degree of relative risk aversion, while ah > 0 scales the utility function and governs its curvature. The parameter bh > 0 both shifts wealth to ensure positivity of the argument and governs how rapidly absolute risk aversion declines as wealth increases. Finally, Bh > 0 specifies a benchmark wealth level, penalizing deviat-
ions from the desired target. It is clear that the above choice of functions verifies Assumptions 2.1, 2.2 and 4.1, with α1X = αg
1 = Qh, α2X = αg
2 = 0, LX = Lg = Qh + (ah)2
(bh)1+γh . Hence, by (21), Assumption 4.2
would be fulfilled provided that
Qh > ‖M‖2
(
Qh + (ah)2
(bh)1+γh
)
. (42)
In this experiment, we consider H = 2 and choose the same parameters as in base scenario (39), except
γ1 = 0.5, γ2 = 3.0, a1 = a2 = 1.0, b1 = b2 = 5.0, B1 = B2 = 2.5, κ1 = κ2 = 0.08,
so that (42) is fulfilled. We also define πh (and thus lh) using the same formula as in (40). We refer to this study as Case 5. The last row of Table 5 presents the training errors corresponding to the selected parameters and the reward functions in Case 5 using the training scheme (41). The results show that the training errors remain comparable, and even improved, to the quadratic case, while the training time increases modestly due to the more complex derivatives. Figure 10 illustrates the mean-
 field equilibrium insurance strategies and the corresponding wealth levels of members in the two classes under different choices of the risk aversion parameter γh, where a higher value indicates greater risk aversion. As expected, members in Class 2, with a higher risk aversion parameter γ2 = 3, tend to purchase more insurance coverage than their counterparts in Class 1 (γ1 = 0.5). Consequently, Class 1 members attain slightly higher equilibrium wealth due to lower premium payments. Notably, the -
imposed constraints are non-binding in this case, resulting in identical outcomes for the constrained and unconstrained settings.
35

00 0 0 0 0
t
00
00
00
00
00
00
00
̄t 0
̄t 0
̄t 0 t
̄t 0 t
(a) v ̄h for Case 5
00 0 0 0 0 0
t
00
0
0
0
0
0
0
0 t0
t0
t0t
t 0t
(b) zh for Case 5
Figure 10: The equilibrium insurance strategies and wealth for representative members under Cases 5.
7 Concluding Remarks
In this article, we formulated a dynamic optimal insurance problem for a mutual insurance company within an extended mean field game framework. The optimal insurance strategies are characterized by a system of mean field forward-backward stochastic differential equations (MF-FBSDEs), where the global existence and uniqueness of solutions were established using the continuation method. To numerically solve the MF-FBSDEs and determine the optimal strategies, we proposed a deep BSDE approach. This wo-
rk opens several avenues for future research. First, incorporating a jumpdiffusion setting could better capture the stochastic behavior of claim arrivals. Second, relaxing the separability of the objective function, as assumed in Assumption 4.1, would broaden the model’s applicability. Additionally, analogizing the mutual insurance company sharing mechanisms with those in decentralized insurance, this extended mean field game framework could be adapted to model optimal decision-making in decentral-
ized insurance pools in future studies.
Acknowledgments
Bohan Li is supported by the National Natural Science Foundation of China under grant No.12501661. Wenyuan Li gratefully acknowledges a start-up grant from the University of Hong Kong. Kenneth Ng acknowledges the financial support from the Univeristy of Illinois Urbana-Champaign, the Chinese University of Hong Kong, and the start-up fund from the Ohio State University. Phillip Yam acknowledges the financial supports from HKGRF-14301321 with the project title “General Theory for Infinite Dimensiona-
l Stochastic Control: Mean Field and Some Classical Problem”, HKGRF-14300123 with the project title “Well-posedness of Some Poisson-driven Mean Field Learning Models and their Applications”, and HKGRF-14300025 with the project title “A Generic The
36

ory for Stochastic Control against Fractional Brownian Motions”. The work described in this article was also supported by a grant from the Germany/Hong Kong Joint Research Scheme sponsored by the Research Grants Council of Hong Kong and the German Academic Exchange Service of Germany (Reference No. G-CUHK411/23). He also thanks The University of Texas at Dallas for the kind invitation to be a Visiting Professor in Naveen Jindal School of Management.
References
Acciaio, B., Backhoff-Veraguas, J., and Carmona, R. (2019). Extended mean field control problems: Stochastic maximum principle and transport perspective. SIAM Journal on Control and Optimization, 57 (6), 3666-3693.
Alasseur, C., Ben Taher, I., and Matoussi, A. (2020). An extended mean field game for storage in smart grids. Journal of Optimization Theory and Applications, 184 , 644–670.
Albrecht, P., and Huggenberger, M. (2017). The fundamental theorem of mutual insurance. Insurance: Mathematics and Economics, 75 , 180-188.
Bensoussan, A., Chau, M., Lai, Y., and Yam, S. C. P. (2017). Linear-quadratic mean field Stackelberg games with state and control delays. SIAM Journal on Control and Optimization, 55 (4), 2748–2781.
Bensoussan, A., Huang, Z., Tang, S., and Yam, S. C. P. (2025). Degenerate mean field type control with linear and unbounded diffusion, and their associated equations. SIAM Journal on Mathematical Analysis, 57 (5), 5494-5530.
Bensoussan, A., Kim, J., Li, B., and Yam, S. C. P. (2025). Linear quadratic extended mean field games and control problems. Journal of Optimization Theory and Applications, 206 (2), 50.
Bensoussan, A., Ma, G., Siu, C. C., and Yam, S. C. P. (2022). Dynamic mean–variance problem with frictions. Finance and Stochastics, 26 (2), 267–300.
Bertucci, C., Bertucci, L., Lasry, J.-M., and Lions, P.-L. (2024). A mean field game approach to Bitcoin mining. SIAM Journal on Financial Mathematics, 15 (3), 960987.
Biener, C., and Eling, M. (2012). Organization and efficiency in the international insurance industry: A cross-frontier analysis. European Journal of Operational Research, 221 (2), 454-468.
Bo, L., Wang, S., and Zhou, C. (2024). A mean field game approach to optimal investment and risk control for competitive insurers. Insurance: Mathematics and Economics, 116 , 202-217.
37

Braun, A., Schmeiser, H., and Rymaszewski, P. (2015). Stock vs. mutual insurers: Who should and who does charge more? European Journal of Operational Research, 242 (3), 875-889.
Browne, S. (1995). Optimal investment policies for a firm with a random risk process: exponential utility and minimizing the probability of ruin. Mathematics of Operations Research, 20 (4), 937–958.
B ̈auerle, N., and Glauner, A. (2018). Optimal risk allocation in reinsurance networks. Insurance: Mathematics and Economics, 82 , 37-47.
Carmona, R., and Lacker, D. (2015). A probabilistic weak formulation of mean field games and applications. The Annals of Applied Probability, 25 (3), 1189–1231.
Carmona, R., and Lauri`ere, M. (2022). Convergence analysis of machine learning algorithms for the numerical solution of mean field control and games: II—the finite horizon case. The Annals of Applied Probability, 32 (6), 4065–4105.
Carmona, R., and Wang, P. (2021). A probabilistic approach to extended finite state mean field games. Mathematics of Operations Research, 46 (2), 471–502.
Casgrain, P., and Jaimungal, S. (2019). Algorithmic trading in competitive markets with mean field games. SIAM News, 52 (2), 1–2.
Cass, D., Chichilnisky, G., and Wu, H.-M. (1996). Individual risk and mutual insurance. Econometrica, 64 (2), 333–341.
Chen, L., Landriault, D., Li, B., and Li, D. (2021). Optimal dynamic risk sharing under the time-consistent mean-variance criterion. Mathematical Finance, 31 (2), 649-682.
Chu, D., Ng, K. T. H., Yam, S. C. P., and Zheng, H. (2025). Mean field analysis of two-party governance: Competition versus cooperation among leaders. Automatica, 173 , 112028.
Cummins, J. D., Weiss, M. A., and Zi, H. (1999). Organizational form and efficiency: The coexistence of stock and mutual property-liability insurers. Management Science, 45 (9), 1254-1269.
Delong, L., Dhaene, J., and Barigou, K. (2019). Fair valuation of insurance liability cashflow streams in continuous time: Theory. Insurance: Mathematics and Economics, 88 , 196-208.
Denuit, M., Dhaene, J., Ghossoub, M., and Robert, C. Y. (2023). Comonotonicity and Pareto optimality, with application to collaborative insurance. SSRN .
Denuit, M., Dhaene, J., and Robert, C. Y. (2022). Risk-sharing rules and their properties, with applications to peer-to-peer insurance. Journal of Risk and Insurance, 89 (3), 615667.
Dhaene, J., Tsanakas, A., Valdez, E. A., and Vanduffel, S. (2012). Optimal capital allocation principles. The Journal of Risk and Insurance, 79 (1), 1–28.
38

Dr ́abek, P., and Milota, J. (2007). Methods of nonlinear analysis: applications to differential equations. Springer Science & Business Media.
Gatzert, N., and Schmeiser, H. (2012). The merits of pooling claims revisited. The Journal of Risk Finance, 13 (3), 184–198.
Germain, M., Mikael, J., and Warin, X. (2022). Numerical resolution of McKean-Vlasov fbsdes using neural networks. Methodology and Computing in Applied Probability, 24 (4), 2557–2586.
Golub, G. H., and Van Loan, C. F. (2013). Matrix computations. JHU press.
Gomes, D. A., and Sa ́ude, J. (2014). Mean field games models—a brief survey. Dynamic Games and Applications, 4 , 110–154.
Grandell, J. (1991). Aspects of risk theory. Springer Science & Business Media.
Han, J., Hu, R., and Long, J. (2024). Learning high-dimensional Mckean–Vlasov forwardbackward stochastic differential equations with general distribution dependence. SIAM Journal on Numerical Analysis, 62 (1), 1–24.
Han, J., Ma, G., and Yam, S. C. P. (2022). Relative performance evaluation for dynamic contracts in a large competitive market. European Journal of Operational Research.
Hansen, L. P., and Sargent, T. J. (1980). Formulating and estimating dynamic linear rational expectations models. Journal of Economic Dynamics and Control , 2 , 7-46.
Hansen, L. P., and Sargent, T. J. (1995). Discounted linear exponential quadratic Gaussian control. IEEE Transactions on Automatic control , 40 (5), 968–971.
Hansen, L. P., and Sargent, T. J. (2013). Recursive models of dynamic linear economies. Princeton University Press.
Huang, J., Wang, G., and Wu, Z. (2010). Optimal premium policy of an insurance firm: Full and partial information. Insurance: Mathematics and Economics, 47 (2), 208-215.
Iglehart, L. D. (1969). Diffusion approximations in collective risk theory. Journal of Applied Probability, 6 (2), 285–292.
Kahneman, D., and Tversky, A. (1979). Prospect theory: An analysis of decision under risk. Econometrica, 47 (2), 263–291.
Kunreuther, H., and Pauly, M. (2004). Neglecting disaster: Why don’t people insure against large losses? Journal of Risk and Uncertainty, 28 (1), 5–21.
Li, Z., Reppen, A. M., and Sircar, R. (2024). A mean field games model for cryptocurrency mining. Management Science, 70 (4), 2188-2208.
Li, Z., Zeng, Y., and Lai, Y. (2012). Optimal time-consistent investment and reinsurance strategies for insurers under Heston’s SV model. Insurance: Mathematics and Economics, 51 (1), 191–203.
39

McNamara, M. J., and Rhee, S. G. (1992). Ownership structure and performance: the demutualization of life insurers. Journal of Risk and Insurance, 221–238.
Mossin, J. (1968). Aspects of rational insurance purchasing. Journal of Political Economy, 76 (4), 553–568.
Munoz, S. (2023). Classical solutions to local first-order extended mean field games. ESAIM: Control, Optimisation and Calculus of Variations, 29 , 14.
Ngwira, B., and Gerrard, R. (2007). Stochastic pension fund control in the presence of Poisson jumps. Insurance: Mathematics and Economics, 40 (2), 283-292.
Pardoux, E., and Ra ̆s ̧canu, A. (2014). Stochastic differential equations, backward SDEs, partial differential equations. Springer-Verlag, Berlin.
Peng, S., and Wu, Z. (1999). Fully coupled forward-backward stochastic differential equations and applications to optimal control. SIAM Journal on Control and Optimization, 37 (3), 825–843.
Rejda, G. E., and McNamara, M. J. (2016). Principles of risk management and insurance (13th ed.). Harlow, UK: Pearson.
Ruthotto, L., Osher, S. J., Li, W., Nurbekyan, L., and Fung, S. W. (2020). A machine learning framework for solving high-dimensional mean field game and mean field control problems. Proceedings of the National Academy of Sciences, 117 (17), 9183–9193.
Schmeiser, H., and Orozco-Garcia, C. (2021). The merits of pooling claims: Mutual vs. stock insurers. Insurance: Mathematics and Economics, 99 , 92-104.
Tapiero, C. S. (1984). A mutual insurance diffusion stochastic control problem. Journal of Economic Dynamics and Control , 7 (3), 241-260.
Vaughan, E. J., and Vaughan, T. (2007). Fundamentals of risk and insurance. John Wiley & Sons.
Yi, B., Li, Z., Viens, F. G., and Zeng, Y. (2013). Robust optimal control for an insurer with reinsurance and investment under Heston’s stochastic volatility model. Insurance: Mathematics and Economics, 53 (3), 601–614.
Zeng, Y., and Li, Z. (2011). Optimal time-consistent investment and reinsurance policies for mean-variance insurers. Insurance: Mathematics and Economics, 49 (1), 145–154.
Appendix A Auxiliary Lemmas
In this section, we provide some auxiliary lemmas that are useful in constructing the optimal insurance strategies and establishing the well-posedness of the MF-FBSDE (15). The first lemma is an elementary result in convex analysis.
40

Lemma A.1. Let A ⊂ Rn be a non-empty, closed, convex set. For any x ∈ Rn, there exists an x∗ ∈ A such that |x − x∗| = minx′∈A |x − x′|. In addition, x∗ is characterized by the following inequality:
〈y − x∗, x − x∗〉 ≤ 0
for any y ∈ A.
The next result is used in establishing the unique existence of solution of (15), which can be verified by a straightforward manner.
Lemma A.2. Let a, b, u, l ∈ R with u < l. Denote by ap = Proj[l,u](a) and bp = Proj[l,u](b). For any non-decreasing function φ : R → R, it holds that
(ap − bp)(φ(a) − φ(b)) ≥ (ap − bp)(φ(ap) − φ(bp)).
In the next lemma, we demonstrate a simple inequality used in establishing the existence of solution of the MF-FBSDE under the general setup in Theorem 4.2, and also under the quadratic reward in Assumption 5.1.
Lemma A.3. Let X be a square integrable Rd-valued random vector, and Z := E[X]. Then, for any d×d matrix M, and any positive definite matrix Q such that λmin(Q−M) > 0, we have
E[〈X, QX〉] − 〈MZ, Z〉 > min {λmin(Q), λmin(Q − M)} E[|X|2].
Proof. Using the identity E[〈X, QX〉] = E[〈(X − Z), Q(X − Z)〉] + 〈Z, QZ〉, we have
E[〈X, QX〉] − 〈MZ, Z〉 = E[〈(X − Z), Q(X − Z)〉] + 〈Z, (Q − M)Z〉
≥ E[〈(X − Z), Q(X − Z)〉] + λmin(Q − M)|Z|2
≥ λmin(Q)E[|X − Z|2] + λmin(Q − M)|Z|2
= λmin(Q)E[|X|2] + (λmin(Q − M) − λmin(Q)) |Z|2.
If λmin(Q − M) > λmin(Q), then we immediately have
E[〈X, QX〉] − 〈MZ, Z〉 ≥ λmin(Q)E[|X|2].
Otherwise, by Jensen’s inequality,
E[〈X, QX〉] − 〈MZ, Z〉
≥ λmin(Q − M)E[|X|2] + (λmin(Q) − λmin(Q − M)) (E[|X|2] − |Z|2)
≥ λmin(Q − M)E[|X|2].
The result then follows by combining the two cases.
Appendix B Proofs and Extensions for Section 2
This section contains the proof of Theorem 2.1 and discusses an extension of the model incorporating member survivorship.
41

B.1 Proof of Theorem 2.1
This section is devoted to proving Theorem 2.1. The entire proof is decomposed into four steps. To begin, for each h ∈ [H] and i ∈ [N h], let vi,h be the optimal strategy obtained in Problems 2-3, except that the Brownian motion W h in the wealth process is replaced by W i,h. We also let yˆi,h and xˆi,h be the dynamics (3) under the N -player game and the mean field dynamics (5) when the strategy vi,h is taken, respectively. Since the Brownian motions W i,h and W j,h are independent for i 6= j, th-
e controls vi,h and vj,h are independent and identically distributed (i.i.d.), so does the associated wealth processes xˆi,h and xˆj,h. However, yˆi,h and yˆj,h are in general dependent due to the presence of the idiosyncratic component. The first result manifests that the difference between yˆi,h and xˆi,h decreases with the class sizes in the order of 1/2.
Lemma B.1. For any t ∈ [0, T ], h ∈ [H] and i ∈ [N h], we have
sup
h∈[H ]
sup
i∈[N h]
E
[
sup
s≤t
∣∣xˆi,h
s − yˆi,h
s
∣∣2
]
=
H ∑
k=1
O
(1
Nk
)
.
Proof. By (3) and (5), we have
xˆi,h
t − yˆi,h
t=
∫t
0
(
r (xˆi,h
s − yˆi,h
s
) + πh
H ∑
k=1
ωk(κk − dk)
∑N k j=1
(E[vs1,k] − vsj,k
)
Nk
)
ds
−
∫t
0
πh
H ∑
k=1
σkωk
Nk
Nk
∑
j=1
vj,k
s dW j,k
s.
Hence, there exists K > 0 independent of (N k)H
k=1 such that
E
[
sup
s≤t
∣∣xˆi,h
s − yˆi,h
s
∣∣2
]
≤K
∫t
0
E
[∣∣xˆi,h
s − yˆi,h
s
∣∣2]
ds + K
H ∑
k=1
∫t
0
E



1
Nk
Nk
∑
j=1
(E[v1,k
s ] − vj,k
s
)


2
 ds
+K
H ∑
k=1
E

sup
s≤t

1
Nk
Nk
∑
j=1
∫s
0
vj,k
l dW j,k
l


2
.
Since vj,k and vi,k are i.i.d. for i 6= j, we have
∫t
0
E



1
Nk
Nk
∑
j=1
(E[v1,k
s ] − vj,k
s
)


2
 ds = 1
(N k)2
∫t
0
Nk
∑
j=1
E
[(E[v1,k
s ] − vj,k
s
)2]
ds = O
(1
Nk
)
,
as Nk → ∞. Similarly, by the Burkholder-Davis-Gundy inequality,
E

sup
s≤t

1
Nk
Nk
∑
j=1
∫s
0
vj,k
l dW j,k
l


2
 ds ≤ 1
Nk E
[∫ t
0
(v1,k
s
)2 ds
]
=O
(1
Nk
)
.
42

Therefore, we have
E
[
sup
s≤t
∣∣xˆi,h
s − yˆi,h
s
∣∣2
]
≤K
∫t
0
E
[
sup
l≤s
∣∣∣xˆi,h
l − yˆi,h
l
∣∣∣
2]
ds +
H ∑
k=1
O
(1
Nk
)
,
and the result follows from Gr ̈onwall’s inequality.
The next result depicts that the discrepancy between the objective function under the N-player game, and the mean field objective function under the mean field optimal strategy, exhibits a square-root decay with respect to the class sizes.
Lemma B.2. For h ∈ [H] and i ∈ [N h], we have
∣∣J i,h (vi,h; ˆy−i,h, v−i,h) − J i,h (vi,h; zh, v ̄h)∣∣ =
H ∑
k=1
O
( √1N k
)
.
Proof. By (4), (6) and Assumption 2.1, we have
∣∣J i,h (vi,h; yˆ−i,h, v−i,h) − J i,h (vi,h; z], v ̄h)∣∣
≤E
[∫ T
0
∣∣∣∣∣f h
(
t, yˆi,h
t,
∑N h
j6=i yˆj,h
t
N h − 1 , vi,h
t,
∑N h
j6=i vj,h
t
Nh − 1
)
− f h(t, xˆi,h
t , zh
t , vi,h
t , v ̄h
t)
∣∣∣∣∣ dt
]
+E
[∣∣∣∣∣gh
(
yˆi,h
t,
∑N h
j6=i yˆj,h
T
Nh − 1
)
− gh(xi,h
T , zh
T)
∣∣∣∣∣
]
≤ LE
[∫ T
0
(
1 + |yˆi,h
t | + |xˆi,h
t |+
∣∣∣∣∣
∑N h
j6=i yˆj,h
t
Nh − 1
∣∣∣∣∣ + |zh
t | + 2|vi,h
t |+
∣∣∣∣∣
∑N h
j6=i vˆj,h
t
Nh − 1
∣∣∣∣∣ + |v ̄h
t|
)
·
(∣∣∣yˆi,h
t − xˆi,h
t
∣∣∣ +
∣∣∣∣∣
∑N h
j6=i yˆj,h
t
Nh − 1 − zh
t
∣∣∣∣∣ +
∣∣∣∣∣
∑N h
j6=i vj,h
t
N h − 1 − vˆh
t
∣∣∣∣∣
)
dt
]
+ LE
[(
1 + |yˆi,h
T | + |xˆi,h
T |+
∣∣∣∣∣
∑N h
j6=i yˆj,h
T
Nh − 1
∣∣∣∣∣ + |zh
T|
) (∣∣∣yˆi,h
T − xˆi,h
T
∣∣∣ +
∣∣∣∣∣
∑N h
j6=i yˆj,h
T
Nh − 1 − zh
T
∣∣∣∣∣
)]
≤ LE
[∫ T
0
(
1 + |yˆi,h
t | + |xˆi,h
t |+
∣∣∣∣∣
∑N h
j6=i yˆj,h
t
Nh − 1
∣∣∣∣∣ + |zh
t | + 2|vi,h
t |+
∣∣∣∣∣
∑N h
j6=i vˆj,h
t
Nh − 1
∣∣∣∣∣ + |v ̄h
t|
)
·
(∣∣∣yˆi,h
t − xˆi,h
t
∣∣∣ +
∣∣∣∣∣
∑N h
j6=i(yˆj,h
t − xˆj,h
t)
Nh − 1
∣∣∣∣∣ +
∣∣∣∣∣
∑N h
j6=i(xˆj,h
t − zth)
Nh − 1
∣∣∣∣∣ +
∣∣∣∣∣
∑N h
j6=i vj,h
t
N h − 1 − vˆh
t
∣∣∣∣∣
)
dt
]
+ LE
[(
1 + |yˆi,h
T | + |xˆi,h
T |+
∣∣∣∣∣
∑N h
j6=i yˆj,h
T
Nh − 1
∣∣∣∣∣ + |zh
T|
)
·
(∣∣∣yˆi,h
T − xˆi,h
T
∣∣∣ +
∣∣∣∣∣
∑N h
j6=i(yˆj,h
T − xˆj,h
T)
Nh − 1
∣∣∣∣∣ +
∣∣∣∣∣
∑N h
j6=i(xˆj,h
T − zTh )
Nh − 1
∣∣∣∣∣
)]
. (43)
By applying the Cauchy-Schwarz inequality to (43), along with the fact that the processes xˆi,h, yˆi,h are square-integrable, we have
∣∣J i,h (vi,h; ˆy−i,h, v−i,h) − J i,h (vh; zh, v ̄h)∣∣
43

≤ Kh
T
(
E
[∫ T
0
( ∣∣∣yˆi,h
t − xˆi,h
t
∣∣∣
2
+
∣∣∣∣∣
∑N h
j6=i(yˆj,h
t − xˆj,h
t)
Nh − 1
∣∣∣∣∣
2
+
∣∣∣∣∣
∑N h
j6=i(xˆj,h
t − E[xˆ1,h
t ])
Nh − 1
∣∣∣∣∣
2
+
∣∣∣∣∣
∑N h
j6=i(vj,h
t − E[vˆ1,h
t ])
Nh − 1
∣∣∣∣∣
2)
dt
]) 1
2
+ Kh
T
(
E
[ ∣∣∣yˆi,h
T − xˆi,h
T
∣∣∣
2
+
∣∣∣∣∣
∑N h
j6=i(yˆj,h
T − xˆj,h
T)
Nh − 1
∣∣∣∣∣
2
+
∣∣∣∣∣
∑N h
j6=i(xˆj,h
T − E[xˆ1,h
T ])
Nh − 1
∣∣∣∣∣
2 ]) 1
2
, (44)
where KTh > 0 is a generic constant independent of N k, k ∈ [H], which may change from line to line. To proceed, by Lemma B.1, we have
E
[∫ T
0
∣∣∣yˆi,h
t − xˆi,h
t
∣∣∣
2
dt
]
=
H ∑
k=1
O
(1
Nk
)
,E
[∣∣∣yˆi,h
T − xˆi,h
T
∣∣∣
2]
=
H ∑
k=1
O
(1
Nk
)
. (45)
Next, using the i.i.d. property of (vi,h)i∈[Nh], we have
E


∫T
0
∣∣∣∣∣∣
∑N h j6=i
(
vj,h
t − E[v1,h
t]
)
Nh − 1
∣∣∣∣∣∣
2
dt

 = 1
Nh − 1E
[∫ T
0
(
vj,h
t − E[v1,h
t]
)2
dt
]
=O
(1
Nh
)
.
(46) In addition, by the i.i.d. property of (xˆi,h)i∈[H], we have
E


∫T
0
∣∣∣∣∣
∑N h
j6=i(xˆj,h
t − E[xˆ1,h
t ])
Nh − 1
∣∣∣∣∣
2
dt

=O
(1
Nh
)
,E


∣∣∣∣∣
∑N h
j6=i(xˆj,h
T − E[xˆ1,h
T ])
Nh − 1
∣∣∣∣∣
2
 =O
(1
Nh
)
.
(47) Therefore, the claim follows by substituting (45)-(47) into (44).
In the next step, we fix an arbitrary Class h0 ∈ [H] and a representative member i0 ∈ [N h]. Suppose that this member takes an arbitrary admissible strategy ui0,h0, while all the other members within the MIC adopt the mean field equilibrium strategy. In that case, the wealth process yˇi0,h0 of that member is governed by
dyˇi0,h0
t=
(
ryˇi0,h0
t + lh0 − κh0 ui0,h0
t + πh0
(∑
h0 6=k∈[H ]
ωk(κk − dk)
∑N k
j=1 vj,k
t
Nk
+ ωh0(κh0 − dh0) ui0,h0
t + ∑Nh0
j6=i0 vj,h0
t N h0
))
dt + σh0 (1 − ui0,h0
t )dW i0,h0
t
+ πh0

∑
h0 6=k∈[H ]
σkωk
Nk
Nk
∑
j=1
vj,k
t dW j,k
t + ui0,h0
t + ∑Nh0
j6=i0 vj,h0
t
N h0 σh0 ωh0 dW i0,h0
t

.
44

Let also yˇi,h be the wealth process for the member i from Class h, where (i, h) 6= (i0, h0). Then, yˇi,h is governed by
dyˇi,h
t=
(
ryˇi,h
t + lh − κhvi,h
t + πh
(∑
h0 6=k∈[H ]
ωk(κk − dk)
∑N k
j=1 vj,k
t
Nk
+ ωh0(κh0 − dh0) ui0,h0
t + ∑Nh0
j6=i0 vj,h0
t N h0
))
dt + σh(1 − vi,h
t )dW i,h
t
+ πh

∑
h0 6=k∈[H ]
σkωk
Nk
Nk
∑
j=1
vj,k
t dW j,k
t + ui0,h0
t + ∑Nh0
j6=i0 vj,h0
t
N h0 σh0 ωh0 dW i0,h0
t

.
We also define the process xˇi0,h0 by
dxˇi0,h0
t=
(
rxˇi0,h0
t + lh0 − κh0 ui0,h0
t + πh0
H ∑
k=1
ωk(κk − dk)E[v1,k
t]
)
dt + σh(1 − ui0,h0
t )dW i0,h0
t.
The following result indicates that, when the class sizes Nk, k ∈ [H], are sufficiently large, the deviation from the mean field equilibrium wealth caused the member i0 of Class h0 would decline with the class sizes.
Lemma B.3. For t ≤ T , h ∈ [H], i ∈ [N h] with (i, h) 6= (i0, h0), we have
E
[
sup
s≤t
∣∣xˇi0,h0
s − yˇi0,h0
s
∣∣2
]
+E
[
sup
s≤t
∣∣xˆi,h0
s − yˇi,h0
s
∣∣2
]
+E
[
sup
s≤t
∣∣xˆi,h
s − yˇi,h
s
∣∣2
]
=
∑h
k=1
O
(1
Nk
)
.
Proof. Notice that
xˇi0,h0
t − yˇi0,h0
t=
∫t
0
[
r (xˇi0,h0
s − yˇi0,h0
s
) + πh0
(∑
h0 6=k∈[H ]
ωk(κk − dk)
∑N k j=1
(E[vs1,k] − vsj,k
)
Nk
+ ωh0(κh0 − dh0)
∑N h0 j 6=i0
(E[v1,h0
s ] − vj,h0
s
) + E[v1,h0
s ] − ui0,h0
s N h0
)]
ds
− πh0


∫t
0
∑
h0 6=k∈[H ]
σkωk
Nk
Nk
∑
j=1
vj,k
t dW j,k
s+
∫t
0
ui0,h0
s + ∑Nh0
j6=i0 vj,h0
s
N h0 σh0 ωh0dW i0,h0
s

.
Hence, there exists KT > 0 independent of N k, k ∈ [H], such that
E
[
sup
s≤t
∣∣xˇi0,h0
s − yˇi0,h0
s
∣∣2
]
≤ KT
∫t
0
E
[∣∣xˇi0,h0
s − yˇi0,h0
s
∣∣2]
ds + KT
∑
h0 6=k∈[H ]
∫t
0
E



1
Nk
Nk
∑
j=1
(E[v1,k
s ] − vj,k
s
)


2
 ds
45

+ KT
∫t
0
E



1
N h0


N h0
∑
j 6=i0
(E[v1,h0
s ] − vj,h0
s
) + E[v1,h0
s ] − ui0,h0
s




2
 ds
+ KT
∑
k6=h0
E

sup
s≤t

1
Nk
Nk
∑
j=1
∫s
0
vj,k
l dW j,k
l


2
 ds
+ KT E

sup
s≤t

1
N h0
N h0
∑
j=1
∫s
0
(
ui0,h0
s +∑
j 6=i0
vj,h0
s
)
dW i0,h0
s


2
 . (48)
By i.i.d. property of (vi,h)i∈[Nh], we have
∑
k6=h0
∫t
0
E



1
Nk
Nk
∑
j=1
(E[v1,k
s ] − vj,k
s
)


2
 ds = ∑
k6=h0
O
(1
Nk
)
,
∑
k6=h0
E

sup
s≤t

1
Nk
Nk
∑
j=1
∫s
0
vj,k
l dW j,k
l


2
 ds = ∑
k6=h0
O
(1
Nk
)
,
(49)
and that
∫t
0
E



1
N h0


N h0
∑
j 6=i0
(E[v1,h0
s ] − vj,h0
s
) + E[v1,h0
s ] − ui0,h0
s




2
 ds
≤ KT
∫t
0
( 1
N h0
E
[(v1,h0
s − E[v1,h0
s ])2]
+1
(N h0 )2
∑
j 6=i0
E [∣∣E[v1,h0
s ] − vj,h0
s
∣∣ ∣∣E[v1,h0
s ] − ui0,h0
s
∣∣])
ds
=O
(1
N h0
)
, (50)
as N h0 → ∞. Likewise, using the Burkholder-Davis-Gundy inequality, one can show that
E

sup
s≤t

1
N h0
N h0
∑
j=1
∫s
0
(
ui0,h0
s +∑
j 6=i0
vj,h0
s
)
dW i0,h0
s


2
ds

=O
(1
N h0
)
. (51)
By substituting (49), (50) and (51) into (48), we obtain
E
[
sup
s≤t
∣∣xˇi0,h0
s − yˇi0,h0
s
∣∣2
]
=
H ∑
k=1
O
(1
Nk
)
.
The fact that
E
[
sup
s≤t
∣∣xˆi,h0
s − yˇi,h0
s
∣∣2
]
+E
[
sup
s≤t
∣∣xˆi,h
s − yˇi,h
s
∣∣2
]
=
H ∑
k=1
O
(1
Nk
)
can be shown by a similar argument, henceforth the calculations are omitted.
46

The following result is a consequence of Lemma B.3, which can be shown by following the proof of Lemma B.2.
Lemma B.4. For h0 ∈ [H], we have
∣∣J i0,h0 (ui0,h0; ˇy−i0,h0, v−i0,h0) − J i0,h0 (ui0,h0; zh0 , v ̄h0)∣∣ =
H ∑
k=1
O
( √1N k
)
,
where yˇ−i0,h0 = (yˇi,h0)i∈[Nh0 ],i6=i0.
As a result of Lemmas B.2 and B.4, we obtain
J i0,h0 (ui0,h0 ; yˇ−i0,h0 , v−i0,h0 ) ≤ J i0,h0 (ui0,h0 ; zh0 , v ̄h0 ) +
H ∑
k=1
O
( √1N k
)
≤ J i0,h0 (vi0,h0; zh0 , v ̄h0) +
H ∑
k=1
O
( √1N k
)
≤ J i0,h0 (vi0,h0 ; ˆy−i0,h0 , v−i0,h0 ) +
H ∑
k=1
O
( √1N k
)
,
where the second inequality follows from the optimality of vi0,h0. The desired ε-Nash equilibrium is thus established.
Appendix C Proofs of Assertions in Section 3
This section contains the proofs of statements in Section 3.
C.1 Proof of Lemma 3.1
We first show that vh ∈ L2
Fh([0, T ]; R) 7→ J h(vh) is continuous. Let (zh)h∈[H] and (v ̄h)h∈[H] be exogeneously given. Fix vˇh ∈ L2
Fh([0, T ]; R), and let xˇh be the associated wealth process when vˇh is adopted. For any vh ∈ L2
Fh([0, T ]; R) with the corresponding wealth process xh, consider
∣∣Jh(vh) − Jh(vˆh)∣∣
≤E
[∫ T
0
∣∣f h(t, xh
t , zh
t , vh
t , v ̄h
t ) − f h(t, xˇh
t , zh
t , vˇh
t , v ̄h
t )∣∣ dt + ∣∣gh(xh
T , zh
T ) − gh(xˇh
T , zh
T )∣∣
]
≤ LE
[∫ T
0
(1 + |xh
t | + |xˇh
t | + |vh
t | + |vˇh
t | + 2|zh
t | + 2|v ̄h
t |) (∣∣xh
t − xˇh
t
∣∣ + ∣∣vh
t − vˇh
t
∣∣) dt
+ (1 + |xh
T | + |xˇh
T | + 2|zh
T |) ∣∣xh
T − xˇh
T
∣∣
]
≤ LE
[∫ T
0
(1 + |xh
t − xˇh
t | + 2|xˇh
t | + |vh
t − vˇh
t | + 2|vˇh
t | + 2|zh
t | + 2|v ̄h
t |)
47

· (∣∣xh
t − xˇh
t
∣∣ + ∣∣vh
t − vˇh
t
∣∣) dt + (1 + |xh
T − xˇh
T | + 2|xˇh
T | + 2|zh
T |) ∣∣xh
T − xˇh
T
∣∣
]
,
where the second inequality follows from Assumption 2.1.A. By simple applications of Young’s and the Cauchy-Schwarz inequality, and noticing that
xˇh
t=
∫t
0
er(t−s)
(
lh − κhvˇs + πh
H ∑
k=1
ωk(κk − dk)v ̄k
t
)
ds + σh
∫t
0
er(t−s)(1 − vˇh
s )dW h
s,
xh
t − xˇh
t = −κh
∫t
0
er(t−s)(vh
s − vˇh
s )ds − σh
∫t
0
er(t−s)(vh
s − vˇh
s )dW h
s,
we infer the existence of a constant KTh > 0 independent of xh, vh, such that
∣∣Jh(vh) − Jh(vˇh)∣∣ ≤ Kh
TE
[∫ T
0
∣∣vh
t − vˇh
t
∣∣2 dt
]
.
Therefore, the continuity is established. Next, we show that vh 7→ Jh(vh) is coercive and strictly concave in L2
Fh([0, T ]; R). To this end, let θ ∈ R and vˆh ∈ L2
Fh([0, T ]; R), and define vh,θ := vh + θvˆh. By linearity, the associated wealth process under the control vh,θ is given by xh,θ = xh + θxˆh, where xˆh satisfies the following SDE:
dxˆh
t = (rxˆh
t − κhvˆh
t )dt − σhvˆh
t dW h
t , xˆh
0 = 0.
To proceed, we shall first deduce an expression for the Gaˆteaux derivative of Jh(vh). Notice that
d
dθ J h(vh,θ) = E
[∫ T
0
[
fh
x
(
t, xh,θ
t , zh
t , vh,θ
t , v ̄h
t
)
xˆh
t + fh
v
(
t, xh,θ
t , zh
t , vh,θ
t , v ̄h
t
)
vˆh
t
]
dt
]
+ E[gh
x (xh,θ
T , zh
T )xˆh
T ]. (52)
Consider the following BSDE:


−dph,θ
t=
[
rph,θ
t − fh
x
(
t, xh,θ
t , zh
t , vh,θ
t , v ̄h
t
)]
dt − ηh,θ
t dW h
t,
ph,θ
T = −gh
x (xh,θ
T , zh
T ).
Notice that the forward equations of xh and xˆh are decoupled from ph,θ, and thus the
latter admits a unique solution, thanks to Assumption 2.1. By applying Itˆo’s lemma on
ph,θ
t xˆth, we obtain
E[gh
x (xh,θ
T , zh
T )xˆh
T] = E
[∫ T
0
[
−f h
x
(
t, xh,θ
t , zh
t , vh,θ
t , v ̄h
t
)
xˆh
t+
(
κhph,θ
t + σhηh,θ
t
)
vˆh
t
]
dt
]
.
(53)
Substituting (53) into (52), we have
d
dθ J h(vh,θ) = E
[∫ T
0
[
fh
v
(
t, xh,θ
t , zh
t , vh,θ
t , v ̄h
t
)
+ κhph,θ
t + σhηh,θ
t
]
vˆh
t dt
]
48

=E
[∫ T
0
qh,vh,θ
t vˆh
t dt
]
, (54)
where
qh,vh,θ
t := f h
v
(
t, xh,θ
t , zh
t , vh,θ
t , v ̄h
t
)
+ κhph,θ
t + σhηh,θ
t , t ∈ [0, T ].
Next, for any θ, φ ∈ R, we have
E
[∫ T
0
(
qh,vh,θ
t − qh,vh,φ
t
)(
vh,θ
t − vh,φ
t
))
dt
]
=E
[∫ T
0
[
fh
v (t, xh,θ
t , zh
t , vh,θ
t , v ̄h
t ) − fh
v (t, xh,φ
t , zh
t , vh,φ
t , v ̄h
t)
](
vh,θ
t − vh,φ
t
)
dt
]
+E
[∫ T
0
[
κh(ph,θ
t − ph,φ
t ) + σh(ηh,θ
t − ηh,φ
t)
](
vh,θ
t − vh,φ
t
)
dt
]
=E
[∫ T
0
[
fh
v (t, xh,θ
t , zh
t , vh,θ
t , v ̄h
t ) − fh
v (t, xh,φ
t , zh
t , vh,φ
t , v ̄h
t)
](
vh,θ
t − vh,φ
t
)
dt
]
+E
[∫ T
0
[
fh
x (t, xh,θ
t , zh
t , vh,θ
t , v ̄h
t ) − fh
x (t, xh,φ
t , zh
t , vh,φ
t , v ̄h
t)
](
xh,θ
t − xh,φ
t
)
dt
]
+E
[(
gh
x (xh,θ
T , zh
T ) − gh
x (xh,φ
T , zh
T)
)(
xh,θ
T − xh,φ
T
)]
≤ − αV
1E
[∫ T
0
∣∣∣vh,θ
t − vh,φ
t
∣∣∣
2
dt
]
,
where the second equality follows from applying Itˆo’s lemma on (ph,θ
t − ph,φ
t )(xh,θ
t − xh,φ
t ); and the last line follows from Assumption 2.1.B. Finally, for any fixed vˆh ∈ L2
Fh([0, T ]; R) and any vh ∈ L2
Fh([0, T ]; R), we have
Jh(vh) − Jh(vˆh) = −
∫1
0
d
dθ Jh(vh + θ(vˆh − vh))dθ
=−
∫1
0
E
[∫ T
0
q h,vh +θ(vˆh −vh )
t (vˆh
t − vh
t )dt
]
dθ
=
∫1
0
1
1 − θE
[∫ T
0
q h,vh +θ(vˆh −vh )
t
(vh
t + θ(vˆh
t − vh
t ) − vˆh
t
) dt
]
dθ
=
∫1
0
E
[∫ T
0
qh,vˆh
t
(vh
t − vˆh
t
) dt
]
dθ
+
∫1
0
1
1− θE
[∫ T
0
(
q h,vh +θ(vˆh −vh )
t − qh,vˆh
t
) (vh
t + θ(vˆh
t − vh
t ) − vˆh
t
) dt
]
dθ
≤E
[∫ T
0
qh,vˆh
t
(vh
t − vˆh
t
) dt
] −
∫1
0
αV
1 (1 − θ)E
[∫ T
0
∣∣vh
t − vˆh
t
∣∣2 dt
]
dθ
=E
[∫ T
0
qh,vˆh
t
(vh
t − vˆh
t
) dt
]
− α1V
2E
[∫ T
0
∣∣vh
t − vˆh
t
∣∣2 dt
]
,
thereby establishing the strict concavity (more precisely, the α1V -concavity) of the objective function.
49

Finally, for any fixed vˆh, using the square integrability of qh,vˆh and Young’s inequality,
Jh(vh) − Jh(vˆh) ≤ 1
α1V
E
[∫ T
0
(
qh,vˆh
t
)2
dt
]
− α1V
4E
[∫ T
0
∣∣vh
t − vˆh
t
∣∣2 dt
]
→ −∞
as E[∫ T
0 |vth|2dt] → ∞. Therefore, the objective function is coercive.
C.2 Proof of Theorem 3.1
Let vˆh ∈ AFh(I) be an arbitrary strategy, and xˆh be its associated wealth process. Given (zh)H
h=1 and (v ̄h)H
h=1, consider
J h(vˆh) − J h(vh)
=E
[∫ T
0
(f h(t, xˆh
t , zh
t , vˆh
t , v ̄h
t ) − f h(t, xh
t , zh
t , vh
t , v ̄h
t )) dt + (gh(xˆh
T , zh
T ) − gh(xh
T , zh
T ))]
≤E
[∫ T
0
(f h
x (t, xh
t , zh
t , vh
t , v ̄h
t )(xˆh
t − xh
t) + fh
v (t, xh
t , zh
t , vh
t , v ̄h
t )(vˆh
t − vh
t )) dt
+ gh
x (xh
T , zh
T )(xˆh
T − xh
T)
]
=E
[∫ T
0
(f h
x (t, xh
t , zh
t , vh
t , v ̄h
t )(xˆh
t − xh
t) + fh
v (t, xh
t , zh
t , vh
t , v ̄h
t )(vˆh
t − vh
t )) dt − ph
T (xˆh
T − xh
T)
]
,
(55)
where the inequality follows from the Assumption 2.1.B and Remark 2.2. Notice that xˆh − xh satisfies the following SDE:
d(xˆh
t − xh
t ) = (r(xˆh
t − xh
t ) − κh(vˆh
t − vh
t )) dt − σh(vˆh
t − vh
t )dW h
t , xˆh
0 − xh
0 = 0.
By applying Itˆo’s lemma to pth(xˆth − xth), we obtain
E [ph
T (xˆh
T − xh
T )] = E
[∫ T
0
[
ph
t
(r(xˆh
t − xh
t ) − κh(vˆh
t − vh
t ))
− (xˆh
t − xh
t ) (rph
t − fh
x (t, xh
t , zh
t , vh
t , v ̄h
t )) − σhηh
t (vˆh
t − vh
t)
]
dt
]
=E
[∫ T
0
(f h
x (t, xh
t , zh
t , vh
t , v ̄h
t )(xˆh
t − xh
t ) − (κhph
t + σhηh
t
) (vˆh
t − vh
t
)) dt
]
.
Substituting this into (55), we obtain
Jh(vˆh) − Jh(vh) ≤ E
[∫ T
0
(f h
v (t, xh
t , zh
t , vh
t , v ̄h
t ) + κhph
t + σhηh
t
) (vˆh
t − vh
t
) dt
]
.
Hence, we derive the variational inequality
E
[∫ T
0
(f h
v (t, xh
t , zh
t , vh
t , v ̄h
t ) + κhph
t + σhηh
t
) (vˆh
t − vh
t
) dt
]
≤ 0, (56)
50

which implies Jh(vˆh) < Jh(vh). The arbitrariness of vˆh then suggests that vh is indeed the optimal control, whose existence is warranted by Lemma 3.1. Notice that (56) holds if
(f h
v (t, xh
t , zh
t , vh
t , v ̄h
t ) + κhph
t + σhηh
t
) (vˆh
t − vh
t
) ≤ 0 (57)
for all t ∈ [0, T ]. Since v 7→ fvh(t, x, z, ·, v ̄) is strictly decreasing, the above inequality holds
iff [(f h
v )−1 (− (κhph
t + σhηh
t
) ; t, xh
t , zh
t , v ̄h
t
) − vh
t
] (vˆh
t − vh
t
) ≤ 0. (58)
By Lemma A.1, we conclude that the solution of the inequality is given by (12).
Appendix D Proofs of Assertions in Section 4
This section contains the proofs of statements in Section 4.
D.1 Proof of Proposition 4.1
We shall need the following lemmas:
Lemma D.1. For any a, b ∈ Rd,
λmin(ab⊤ + ba⊤) = b⊤a − |a||b| and λmax(ab⊤ + ba⊤) = b⊤a + |a||b|.
Proof. Let U := ab⊤ + ba⊤. If either a or b is the zero vector, the claim is clearly true. Henceforth, we assume that both a and b are non-zero column vectors.
Case 1: a and b are linearly dependent In this case, there exists a non-zero constant c such that b = ca. Hence, U = 2caa⊤ and U has at most one non-zero eigenvalue, 2c|a|2. If c > 0,
λmin(U) = 0 = b⊤a − |a||b|, λmax(U) = 2c|a|2 = c|a|2 + |c||a|2 = b⊤a + |a||b|.
If c < 0,
λmin(U) = 2c|a|2 = c|a|2 − |c||a|2 = b⊤a − |a||b|, λmax(U) = 0 = b⊤a + |a||b|.
Case 2: a and b are linearly independent Let S := span{a, b} and S⊥ be its orthogonal complement. Since a and b are column vectors, we have rank(U) ≤ 2 which implies that U has at most two non-zero eigenvalues. Note that, for any x ∈ S⊥, we have Ux = 0. Therefore, the eigenvectors corresponding to the non-zero eigenvalues of U belong to S. Since
Ua = ab⊤a + b|a|2 and Ub = a|b|2 + ba⊤b,
the linear transform U in the basis {a, b} can be represented as a 2 × 2 matrix Ua,b, where
Ua,b =
(b⊤a |b|2 |a|2 a⊤b
)
.
51

The characteristic equation for Ua,b is (b⊤a − λ)2 − |a|2|b|2 = 0, which has solutions λ± = b⊤a ± |a||b|. By the Cauchy-Schwarz inequality, we have λ− ≤ 0 ≤ λ+. Therefore, λmin(U) = λ− = b⊤a − |a||b| and λmax(U) = λ+ = b⊤a + |a||b|. The desired result follows by combining the two cases.
Lemma D.2. Conditions 1-3 in Proposition 4.1 are equivalent.
Proof. We first prove the equivalence of Conditions 1 and 3. Using the identity I − M⊤ = K(K − Π)−1 and (18), we have
I − M⊤ = I + πυ⊤K−1
1 − υ⊤K−1π , (59)
where π and υ are defined as in (17). By considering the symmetrization of I − M⊤, we have
λmin(I − M) = λmin(I − M⊤) = 1 + λmin(πυ⊤K−1 + K−1υπ⊤)
2 − 2υ⊤K−1π . By Lemma D.1, we have
λmin(πυ⊤K−1 + K−1υπ⊤) = υ⊤K−1π − |π||K−1υ|
=
H ∑
h=1
πhωh κh − d
κh −
√ √ √ √
( H ∑
h=1
(πh)2
) ( H ∑
h=1
(
ωh κh − d
κh
)2)
.
Thus
λmin
(I − M⊤) =
2 − ∑H
h=1 πhωh κh−d
κh −
√(∑H
h=1(πh)2
) (∑H
h=1
(
ωh κh−d
κh
)2)
2 − 2 ∑H
h=1 πhωh κh−d
κh
, (60)
where the denominator 2 − 2 ∑H
h=1 πhωh κh−d
κh > 0, since κh > d ≥ 0 for all h ∈ [H], and
∑H
h=1 πhωh = 1. It is then easy to see λmin
(I − M⊤) > 0 if and only if Condition 3 holds. Next, we prove the equivalence of Conditions 2 and 3. Using Lemma D.1, we have
2λmax(ΠK−1) = λmax(πυ⊤K−1 + K−1υπ⊤) = υ⊤K−1π + |K−1υ||π|
=
H ∑
h=1
πhωh κh − d
κh +
√ √ √ √
( H ∑
h=1
(πh)2
) ( H ∑
h=1
(
ωh κh − d
κh
)2)
.
Therefore, λmax(ΠK−1) < 1 if and only if Condition 3 holds.
Lemma D.3. Condition 4 of Proposition 4.1 implies Conditions 1-3 of the same proposition.
Proof. Given Condition 4 of Proposition 4.1, there exists a c > 0 such that πh
ωh < c <
πh ωh
κh
κh−d for all h ∈ [H]. Let δh := πh
cωh , which satisfies κh−d
κh < δh < 1. Hence, we have
H ∑
h=1
πhωh κh − d
κh +
√ √ √ √
( H ∑
h=1
(πh)2
) ( H ∑
h=1
(
ωh κh − d
κh
)2)
52

<
H ∑
h=1
πhωhδh +
√ √ √ √
( H ∑
h=1
(πh)2
) ( H ∑
h=1
(ωhδh)2
)
.
By the Cauchy–Schwarz inequality and the fact that πh = cωhδh, we have
H ∑
h=1
πhωhδh +
√ √ √ √
( H ∑
h=1
(πh)2
) ( H ∑
h=1
(ωhδh)2
)
=2
H ∑
h=1
πhωhδh < 2
H ∑
h=1
πhωh = 2.
Therefore, Condition 4 implies Condition 3. By Lemma D.2, the proof is complete.
D.2 Proof of Lemma 4.2
For μ ∈ [0, 1], we define the operator Ψμ+δ(x, p, η) = (ˆx, ˆp, ηˆ), where the latter is the solution of the parametrized system (30) with
φt = δ (pt + (rxt + l − Kvt + ΠE[vt]) + ˆφt,
ψt = δ (diag(ηt) + Σ(I − diag(vt))) + ψˆ t,
ξt = δ (−xt + rpt − ∂xF(t, xt, zt, vt, E[vt])) + ξˆt,
ζT = −δ [∂xG(xT , zT ) + xT ] + ζˆT ,
Here, δ > 0 is a small positive constant to be chosen independently of μ, ˆφ, ξˆ ∈ L2
F[H]([0, T ]; RH), ψˆ ∈ L2
Fh ([0, T ]; RH × RH ), ζˆT ∈ L2(Ω, FT , P), and (zt)t∈[0,T ], (vt)t∈[0,T ] are given by
zt = E[xt], vt = ProjIH
[(∂vF)−1 (− (Kpt + Σηt) ; t, xt, zt, E[vt])] .
Suppose that the system (30) admits a solution for some μ0 ∈ [0, 1). Let Ψμ0+δ(xi, pi, ηi) =
(ˆxi, ˆpi, ηˆi), i = 1, 2. Let also  ̃x := x1 − x2,  ̃p := p1 − p2, η ̃ := η1 − η2, v ̃ := v1 − v2;
 ̃ˆx := ˆx1 − ˆx2,  ̃ˆp := pˆ1 − pˆ2,  ̃ˆη := ηˆ1 − ηˆ2, v ̃ˆ := vˆ1 − vˆ2. We shall show that Ψμ0+δ is a contraction for any sufficiently small δ > 0 independent of μ0. Consequently, by the Banach fixed point theorem, one can deduce that the operator Ψμ0+δ admits a fixed point, which is indeed the solution of (30) with μ = μ0 + δ.
By applying Itˆo’s lemma to 〈 ̃ˆxt, p ̃ˆt〉 and using Assumption 2.1, we have
μ0E
[〈 ̃ˆxT , − (∂xG(ˆx1
T , zˆ1
T ) − ∂xG(ˆx2
T , ˆz2
T ))〉]
+ (1 − μ0)E
[∣∣∣ ̃ˆxT
∣∣∣
2]
− δE
[〈 ̃ˆxT , (∂xG(x1
T , z1
T ) − ∂xG(x2
T , z2
T )) +  ̃xT
〉]
= μ0E
[∫ T
0
〈 ̃ˆxt, ∂xF(ˆx1
t , ˆz1
t , vˆ1
t , E[vˆ1
t ]) − ∂xF(ˆx2
t , ˆz2
t , ˆv2
t , E[vˆ2
t ])
〉
dt
]
− μ0E
[∫ T
0
〈v ̃ˆt, Kp ̃ˆt + Σ ̃ˆηt
〉
dt
]
+ μ0E
[∫ T
0
〈p ̃ˆt, ΠE[v ̃ˆt]
〉
dt
]
− (1 − μ0)E
[∫ T
0
(∣∣∣ ̃ˆxt
∣∣∣
2
+
∣∣∣p ̃ˆt
∣∣∣
2
+
∣∣∣ ̃ˆηt
∣∣∣
2)
dt
]
53

− δE
[∫ T
0
〈 ̃ˆxt, − ̃xt + r ̃pt − (∂xF(x1
t , z1
t , v1
t , E[v1
t ]) − ∂xF(x1
t , z1
t , v1
t , E[v1
t ]))〉
dt
]
+ δE
[∫ T
0
〈p ̃ˆt, p ̃t + r ̃xt − Kv ̃t + ΠE[v ̃t]
〉
dt
]
+ δE
[∫ T
0
〈 ̃ˆηt, η ̃t − Σv ̃t
〉
dt
]
≤ μ0E
[∫ T
0
〈 ̃ˆxt, ∇Fx(ˆx1
t , ˆz1
t , vˆ1
t , E[vˆ1
t ]) − ∇Fx(ˆx2
t , ˆz2
t , vˆ2
t , E[vˆ2
t ])
〉
dt
]
− μ0E
[∫ T
0
〈v ̃ˆt, Kp ̃ˆt + Σ ̃ˆηt
〉
dt
]
+ μ0E
[∫ T
0
〈p ̃ˆt, ΠE[v ̃ˆt]
〉
dt
]
− (1 − μ0)E
[∫ T
0
(∣∣∣ ̃ˆxt
∣∣∣
2
+
∣∣∣p ̃ˆt
∣∣∣
2
+
∣∣∣ ̃ˆηt
∣∣∣
2)
dt
]
+ KT δ
(
E
[∫ T
0
(∣∣∣ ̃ˆxt
∣∣∣
2
+
∣∣∣  ̃ˆpt
∣∣∣
2
+
∣∣∣ ̃ˆηt
∣∣∣
2
+ | ̃xt|2 + |p ̃t|2 + |η ̃t|2
)
dt
])
, (61)
where KT > 0 is a generic constant depending solely on T , which changes from line to line in the subsequent calculations. We estimate the terms on the right-hand side of (61). Following the proof of (23) in Theorem 4.1, one can show that
E
[∫ T
0
〈v ̃ˆt, Kp ̃ˆt + Σ ̃ˆηt
〉
dt
]
≥ 0. (62)
Next, we estimate the term
E
[∫ T
0
〈p ̃ˆt, ΠE[v ̃ˆt]
〉
dt
]
.
By considering the dynamics of 〈Mz ̃ˆt, E[ ̃ˆpt]〉, we obtain
μ0E
[〈
Mz ̃ˆT , − (∂xG(ˆx1
T , ˆx1
T ) − ∂xG(ˆx2
T , ˆx2
T ))〉]
+ (1 − μ0)
〈
Mz ̃ˆT ,  ̃ˆzT
〉
+ δE
[〈
Mz ̃ˆT , − (∂xG(x1
T , z1
T ) − ∂xG(x2
T , z2
T ) +  ̃zT
)〉]
= − (1 − μ0)
∫T
0
(〈
ME[p ̃ˆt], E[p ̃ˆt]
〉 +
〈
Mz ̃ˆt,  ̃ˆzt
〉)
dt
+ μ0
∫T
0
〈
E[p ̃ˆt], ΠE[ ̃ˆvt]
〉
dt
− μ0
∫T
0
〈
Mz ̃ˆt, − (∂xF(t, ˆx1
t , ˆz1
t , ˆv1
t , E[vˆ1
t ]) − ∂xF(t, xˆ2
t , zˆ2
t , vˆ2
t , E[vˆ2
t ]))〉
dt
+δ
∫T
0
(〈
E[p ̃ˆt], M (E[p ̃t] + r ̃zt + ΠE[v ̃t])
〉
+
〈
Mz ̃ˆt,  ̃zt − rE[p ̃t] + ∂xF(x1
t , z1
t , v1
t , E[v1
t ]) − ∂xF(x1
t , z1
t , v1
t , E[v1
t ])
〉)
dt
≥ − (1 − μ0)
∫T
0
(〈
ME[p ̃ˆt], E[p ̃ˆt]
〉 +
〈
Mz ̃ˆt,  ̃ˆzt
〉)
dt
54

+ μ0
∫T
0
〈
E[p ̃ˆt], ΠE[ ̃ˆvt]
〉
dt
− μ0
∫T
0
〈
Mz ̃ˆt, −E [∂xF(t, xˆ1
t , ˆz1
t , vˆ1
t , E[vˆ1
t ]) − ∂xF(t, ˆx2
t , ˆz2
t , ˆv2
t , E[vˆ2
t ])]〉
dt
− KT δE
[∫ T
0
(∣∣∣ ̃ˆxt
∣∣∣
2
+
∣∣∣p ̃ˆt
∣∣∣
2
+ | ̃xt|2 + | ̃pt|2 + |η ̃t|2
)
dt
]
.
Rearranging yields
μ0
∫T
0
〈
E[p ̃ˆt], ΠE[ ̃ˆvt]
〉
dt
≤ μ0E
[〈
Mz ̃ˆT , − (∂xG(ˆx1
T , ˆx1
T ) − ∂xG(ˆx2
T , ˆx2
T ))〉]
+ (1 − μ0)
〈
Mz ̃ˆT ,  ̃ˆzT
〉
+ δE
[〈
Mz ̃ˆT , − (∂xG(x1
T , z1
T ) − ∂xG(x2
T , z2
T ) + z ̃T
)〉]
+ (1 − μ0)
∫T
0
(〈
ME[p ̃ˆt], E[p ̃ˆt]
〉 +
〈
Mz ̃ˆt,  ̃ˆzt
〉)
dt
− μ0
∫T
0
〈
Mz ̃ˆt, E [∂xF(t, xˆ1
t , ˆz1
t , vˆ1
t , E[vˆ1
t ]) − ∂xF(t, ˆx2
t , ˆz2
t , ˆv2
t , E[vˆ2
t ])]〉
dt
+ KT δE
[∫ T
0
(∣∣∣ ̃ˆxt
∣∣∣
2
+
∣∣∣p ̃ˆt
∣∣∣
2
+ | ̃xt|2 + |p ̃t|2 + |η ̃t|2
)
dt
]
. (63)
Following the derivation of (29), using Assumptions 2.1, 4.2, and substituting (62)-(63) into (61), we arrive at
KT δE
[
| ̃ˆxT |2 + | ̃x|2
T+
∫T
0
(∣∣∣ ̃ˆxt
∣∣∣
2
+
∣∣∣p ̃ˆt
∣∣∣
2
+
∣∣∣ ̃ˆηt
∣∣∣
2
+ |x ̃t|2 + |p ̃t|2 + |η ̃t|2
)
dt
]
≥ KT δ
(
E
[∫ T
0
(∣∣∣ ̃ˆxt
∣∣∣
2
+
∣∣∣p ̃ˆt
∣∣∣
2
+
∣∣∣ ̃ˆηt
∣∣∣
2
+ | ̃xt|2 + |p ̃t|2 + |η ̃t|2
)
dt
])
+ δE
[〈 ̃ˆxT − Mz ̃ˆT , ∂xG(x1
T , z1
T ) − ∂xG(x2
T , z2
T)
〉]
≥ μ0E
[〈 ̃ˆxT − Mz ̃ˆT , − (∂xG(ˆx1
T , zˆ1
T ) − ∂xG(ˆx2
T , zˆ2
T ))〉]
+ (1 − μ0)
(
E
[∣∣∣x ̃ˆT
∣∣∣
2]
−
〈
Mz ̃ˆT ,  ̃ˆzT
〉)
− μ0E
[∫ T
0
〈 ̃ˆxt − Mz ̃ˆt, ∂xF(t, xˆ1
t , ˆz1
t , vˆ1
t , E[vˆ1
t ]) − ∂xF(t, ˆx2
t , ˆz2
t , vˆ2
t , E[vˆ2
t ])
〉
dt
]
+ (1 − μ0)E
[∫ T
0
(∣∣∣ ̃ˆxt
∣∣∣
2
+
∣∣∣p ̃ˆt
∣∣∣
2
+
∣∣∣ ̃ˆηt
∣∣∣
2)
dt
]
− (1 − μ0)
∫T
0
(〈
ME[p ̃ˆt], E[p ̃ˆt]
〉 +
〈
Mz ̃ˆt,  ̃ˆzt
〉)
dt
≥ [μ0αG
M + (1 − μ0) min{λmin(I − M), 1}] E
[∣∣∣ ̃ˆxT
∣∣∣
2]
+ [μ0αM + (1 − μ0) min{λmin(I − M), 1}] E
[∫ T
0
∣∣∣ ̃ˆxt
∣∣∣
2
dt
]
55

+ (1 − μ0)E
[∫ T
0
(
min{λmin(I − M), 1}
∣∣∣ ̃ˆpt
∣∣∣
2
+
∣∣∣ ̃ˆηt
∣∣∣
2)
dt
]
, (64)
Note that the last inequality is a consequence of Lemma A.3. Next, we estimate
E
[∫ T
0
(∣∣∣p ̃ˆt
∣∣∣
2
+
∣∣∣ ̃ˆηt
∣∣∣
2)
dt
]
.
By applying Itˆo’s lemma to |p ̃ˆt|2, we obtain
E
[∣∣∣∣ − μ0
(∂xG(ˆx1
T , ˆz1
T ) − ∂xG(ˆx2
T , ˆz2
T )) + (1 − μ0) ̃ˆxT
− δ (∂xG(x1
T , z1
T ) − ∂xG(x2
T , z2
T ) +  ̃xT
) ∣∣∣∣
2]
−E
[∣∣∣p ̃ˆt
∣∣∣
2]
= 2μ0E
[∫ T
t
(
r
∣∣∣p ̃ˆs
∣∣∣
2
+
〈p ̃ˆs, ∂xF(s, xˆ1
s, ˆz1
s, vˆ1
s, E[vˆ1
s]) − ∂xF(s, xˆ2
s, ˆz2
s, vˆ2
s, E[vˆ2
s ])
〉)
ds
]
− 2(1 − μ0)E
[∫ T
t
〈 ̃ˆps,  ̃ˆxs
〉
ds
]
+E
[∫ T
t
∣∣∣ ̃ˆηs
∣∣∣
2
ds
]
+ δE
[∫ T
t
〈
p ̃ˆs, − ̃xs + r ̃ps − (∂xF(s, x1
s, z1
s, v1
s, E[v1
s ])
− ∂xF(s, x2
s, z2
s, v2
s, E[v2
s ]))〉
ds
]
. (65)
By Assumption 4.1, we further obtain
E
[∣∣∣  ̃ˆpt
∣∣∣
2]
+E
[∫ T
t
∣∣∣ ̃ˆηs
∣∣∣
2
ds
]
≤ KT E
[∣∣∣ ̃ˆxT
∣∣∣
2]
+ KT E
[∫ T
t
(∣∣∣  ̃ˆps
∣∣∣
2
+
∣∣∣ ̃ˆxs
∣∣∣
2)
ds
]
+ δKT
(
E[| ̃xT |2] + E
[∫ T
t
(∣∣∣p ̃ˆs
∣∣∣
2
+ | ̃ps|2 + | ̃xs|2
)
ds
])
. (66)
By Gr ̈onwall’s inequality, we infer from (66) that
E
[∣∣∣  ̃ˆpt
∣∣∣
2]
≤ KT E
[∣∣∣x ̃ˆT
∣∣∣
2]
+ KT E
[∫ T
0
∣∣∣ ̃ˆxs
∣∣∣
2
ds
]
+ δKT
(
E[| ̃xT |2] + E
[∫ T
0
(|p ̃s|2 + | ̃xs|2) ds
])
. (67)
Substituting (67) into the right-hand side of (66), followed by integrating both sides over t = 0 to t = T , we obtain
E
[∫ T
0
(∣∣∣p ̃ˆt
∣∣∣
2
+
∣∣∣ ̃ˆηt
∣∣∣
2)
dt
]
≤ KT E
[∣∣∣ ̃ˆxT
∣∣∣
2]
+ KT E
[∫ T
0
∣∣∣ ̃ˆxt
∣∣∣
2
dt
]
56

+ δKT
(
E[| ̃xT |2] + E
[∫ T
0
(|p ̃t|2 + | ̃xt|2) dt
])
. (68)
If αG
M > 0, by combining (68) and (64), there exists KT > 0 such that for any μ0 ∈ [0, 1] and sufficiently small δ > 0,
E
[∣∣∣ ̃ˆxT
∣∣∣
2]
+E
[∫ T
0
∣∣∣ ̃ˆxt
∣∣∣
2
dt
]
+ KT E
[∫ T
0
(∣∣∣p ̃ˆt
∣∣∣
2
+
∣∣∣ ̃ˆηt
∣∣∣
2)
dt
]
≤ δKT E
[∣∣∣ ̃ˆxT
∣∣∣
2
+ | ̃xT |2 +
∫T
0
(∣∣∣x ̃ˆt
∣∣∣
2
+
∣∣∣p ̃ˆt
∣∣∣
2
+
∣∣∣ ̃ˆηt
∣∣∣
2
+ | ̃xt|2 + |p ̃t|2 + |η ̃t|2
)
dt
]
+ δ2KT
(
E[| ̃xT |2] + E
[∫ T
0
(|p ̃t|2 + | ̃xt|2) dt
])
.
Therefore, one can pick δ > 0 such that Ψμ0+δ is a contraction for any μ0 ∈ [0, 1] and the proof is complete.
Appendix E Proofs of Assertions in Section 5
This section contains the proofs of statements in Section 5.
E.1 Proof of Theorem 5.1
We consider an ansatz of the adjoint process pth with the following feedback form:
ph
t = Γh
t (xh
t − zh
t ) + p ̄h
t . (69)
Using (33), applying Itˆo’s lemma on the right hand side of (69) yields
d (Γh
t (xh
t − zh
t ) + p ̄h
t
)
=
( dΓth
dt (xh
t − zh
t ) − κhΓh
t (vh
t − v ̄h
t ) + r (Γh
t
(xh
t − zh
t
) − p ̄h
t
) − Qh
t zh
t (1 − Sh
t)
)
dt
+ Γh
t σh(1 − vh
t )dW h
t . (70)
By comparing (70) with the equation satisfied by ph in (33) , we find that
ηh
t = Γh
t σh(1 − vh
t ), and thus E[ηh
t ] = Γh
t σh(1 − v ̄h
t ). (71)
Substituting (71) into (34), we obtain
v ̄h
t = κhp ̄th + (σh)2Γth
Pth(1 − Rth) + (σh)2Γth
and vh
t = κhpth + (σh)2Γth
Pth + (σh)2Γth
+ RthPth
Pth + (σh)2Γth
v ̄h
t . (72)
By further substituting this into (70), and using the ansatz (69), we have
d (Γh
t (xh
t − zh
t ) + p ̄h
t
)
=
(
dΓth
dt (xh
t − zh
t ) − (κh)2Γth
(pth − p ̄th
)
Pth + (σh)2Γth
+ r (Γh
t
(xh
t − zh
t
) − p ̄h
t
) − Qh
t zh
t (1 − Sh
t)
)
dt
57

+ Γh
t σh(1 − vh
t )dW h
t
=
(
(xh
t − zh
t)
( dΓth
dt − (κh)2(Γth)2
Pth + (σh)2Γth
+ 2rΓh
t + Qh
t
)
− r (Γh
t (xh
t − zh
t ) + p ̄h
t
)
− Qh
t (xh
t − Sh
t zh
t)
)
dt + Γh
t σh(1 − vh
t )dW h
t (73)
Using (69), (73), and comparing with the equation satisfied by ph in (33), we deduce that Γh has to satisfy (35). The proof that the solution of (36) can be expressed as (37) and (38) can be proven similarly, and thus we omit the proof.
E.2 Well-posedness of (36)
In this section, we provide a global existence condition for the equation (36). To this end, we need the following assumption.
Assumption E.1.
(a) λ1 := inft∈[0,T ] λmin(I − St) > 0;
(b) λ2 := inft∈[0,T ] λmin(ΛAt) > 0,
where Λ := K − Π.
Theorem E.1. Under Assumption E.1, there is at most one solution for the equation (36).
Proof. Let (z1, p1) and (z2, p2) be two solutions of (36). Then, the functions z ̃t := zt1 − zt2
and p ̃ ̄t := p ̃ ̄t1 −  ̃ ̄pt2 satisfies


dz ̃t = (rzt − ΛAtp ̃ ̄t
) dt,
−dp ̃ ̄t = (r ̃ ̄pt + Qt(I − St)z ̃t
) dt,
 ̃z0 = 0,
p ̃ ̄T = QT (I − ST )z ̃T .
Using this, by considering the differential of z ̃t  ̃ ̄pt, we arrive at
z ̃T QT (I − ST )z ̃T +
∫T
0
z ̃tQt(I − ST )z ̃tdt = −
∫T
0
p ̃ ̄tΛAt  ̃ ̄ptdt
≤ −1
2 inf
t∈[0,T ] λmin(ΛAt + AtΛ⊤)
∫T
0
|p ̃ ̄t|2dt ≤ 0.
This implies z ̃ and thus p ̃ must be identical to zero.
To show that the FBODE indeed admits a solution, we again employ the continuation approach. To this end, we let ˆz and ˆp be the solution of the FBODE parametrized by μ0 ∈ [0, 1]: 

dzˆt = (−(1 − μ)λ2pˆt + μ (rˆzt − ΛAt ˆpt + l) + φt) dt,
−dpˆt = ((1 − μ)λ1zˆt + μ (rˆpt + Qt(I − St)) + ψt) dt,
ˆz0 = (E[ξh])H
h=1,
ˆpT = (1 − μ)λ1zT + μQT (I − ST )zˆT − γ,
(74)
58

where φt, ξt are square integrable functions over [0, T ]. The spirit of the approach is in line with the proof of Lemma 4.2: if the system (74) has a solution for μ = μ0, and for any square-integrable functions φt, ξt, then the operator defined by (74) is a contraction for any μ ∈ [μ0, μ0 + δ], where δ > 0 is independent of μ0. Hence, the system (74) admits a solution whenever μ ∈ [μ0, μ0 + δ]. Using the fact that the solution (74) admits a solution when μ = 0, we can conclude the existence of s-
olution for any μ ∈ [0, 1]. The details of the calculations are omitted.
Theorem E.2. Under Assumption E.1, Equation (36) admits a solution.
Appendix F Supplementary Tables for Section 6
This section presents tables summarizing the training errors and computational efficiency of the neural network algorithm used in Section 6.
Table 3: Computation errors of neural network approach with respect to the ODE approach under non-constrained cases. Relative Error (%) Penalty coefficient λ 0.1 1.0 10.0 100.0 1000.0 Case 1(a) 9.844555 0.915430 0.678508 7.141356 20.914042 Case 1(b) 9.739147 1.407824 0.608529 7.287133 19.793709 Case 1(c) 9.704202 1.084904 0.732753 7.099290 23.721090 Case 2(a) 5.520915 1.421929 1.565124 2.647546 8.175174 Case 2(b) 5.209600 1.402305 1.574674 2.877253 11.329953 Case 2(c) 5.610542 1.438909 1.556929 2.-
462988 11.801251 Case 3(a) 3.701866 1.549085 2.105542 3.224022 7.313468 Case 3(b) 5.162252 1.134077 1.410400 3.693166 6.850523 Case 4(a) 9.575447 0.908286 1.445545 3.657386 11.387693 Case 4(b) 9.883666 1.643441 1.464042 3.789543 11.719880 Case 4(c) 9.904698 1.665042 1.383423 3.927721 12.774165
The average time to compute each total error is 1886.94 seconds.
59

Table 4: Final loss functions for unconstrained cases. Unconstrained Cases Case 1(a) Case 1(b) Case 1(c) Terminal Condition Error 1.548988 × 10−3 1.667531 × 10−3 1.450754 × 10−3 Mean Field Term Error 3.235802 × 10−5 4.012196 × 10−5 2.563629 × 10−5 Time elapsed (secs) 1893.98 1881.24 1931.42 Case 2(a) Case 2(b) Case 2(c) Terminal Condition Error 6.176409 × 10−4 6.400801 × 10−4 6.024750 × 10−4 Mean Field Term Error 1.265802 × 10−5 2.451912 × 10−5 6.414652 × 10−6 Time elapsed (secs) 1896.25 1869.49 -
1868.24 Case 3(a) Case 3(b) Case 4(a) Terminal Condition Error 2.784362 × 10−4 5.350168 × 10−4 8.624881 × 10−3 Mean Field Term Error 2.395581 × 10−5 5.165220 × 10−5 1.511587 × 10−4 Time elapsed (secs) 1865.63 1867.42 1879.71 Case 4(b) Case 4(c) Case 5 Terminal Condition Error 1.638430 × 10−3 1.698711 × 10−3 1.663634 × 10−5 Mean Field Term Error 5.030000 × 10−7 1.427944 × 10−6 4.262555 × 10−6 Time elapsed (secs) 1865.49 1863.38 2124.92
The terminal condition error and the mean field term error refers to the term
∑2
h=1
E [(phT + gx(xhT , zTh )] and 1
M
M −1
∑
i=0
∑2
h=1
(E[vthi] − v ̄thi )2, respectively.
Table 5: Final loss and penalty values for constrained cases
Constrained Cases Case 1(a) Case 1(b) Case 1(c) Terminal Condition Error 2.009435 × 10−3 2.245595 × 10−3 1.819428 × 10−3 Mean Field Term Error 6.938315 × 10−5 8.738402 × 10−5 5.548106 × 10−5 Time elapsed (secs) 1918.70 1945.75 1930.34 Case 2(a) Case 2(b) Case 2(c) Terminal Condition Error 2.155019 × 10−3 2.155019 × 10−3 2.118284 × 10−3 Mean Field Term Error 2.286199 × 10−4 2.286199 × 10−4 2.108407 × 10−4 Time elapsed (secs) 1927.40 1936.75 1898.35 Case 3(a) Case 3(b) Case 4(a) Terminal Condition E-
rror 4.444087 × 10−3 6.950257 × 10−4 9.873541 × 10−4 Mean Field Term Error 2.919305 × 10−3 8.796966 × 10−5 1.538552 × 10−4 Time elapsed (secs) 1957.89 1907.67 1965.20 Case 4(b) Case 4(c) Case 5 Terminal Condition Error 2.209101 × 10−3 2.348184 × 10−3 1.382007 × 10−5 Mean Field Term Error 2.228195 × 10−5 2.664459 × 10−5 4.025126 × 10−6 Time elapsed (secs) 1910.48 1914.44 2214.13
60

Table 6: Equilibrium insurance strategies with and without constraints for each case
Case Parameter Constraint v ̄01 v ̄02 v ̄T1 −∆t v ̄T2 −∆t
1(a) σ1 = 0.1, σ2 = 0.3 No 0.359091 0.440495 -0.066468 0.015177
Yes 0.355441 0.435981 0.000000 0.033949 1(b) 1(a) with
ω1 = 0.8
No 0.352799 0.437634 -0.069131 0.012958 Yes 0.347622 0.432593 0.000000 0.032654 1(c) 1(a) with
ω1 = 0.2
No 0.365121 0.442901 -0.063986 0.017695 Yes 0.362339 0.439052 0.000000 0.035201 2(a) γ1 = 1, γ2 = 1.6 No 0.430947 0.175347 0.009570 -0.265701
Yes 0.431735 0.133601 0.035397 0.000000 2(b) 2(a) with
ω1 = 0.8
No 0.442197 0.182480 0.017060 -0.254958 Yes 0.440488 0.137245 0.038818 0.000000 2(c) 2(a) with
ω1 = 0.2
No 0.419688 0.167624 0.001187 -0.275922 Yes 0.422559 0.129154 0.028175 0.000000 3(a) κ1 = 0.1, κ2 = 0.5
γ1 = γ2 = 1.6
No 0.165144 0.167612 0.024968 -0.280722 Yes 0.174865 0.152342 0.020742 0.000000 3(b) 3(a) with
γ1 = γ2 = 1
No 0.220572 0.431938 0.092434 0.009920 Yes 0.220646 0.426106 0.092528 0.029771 4(a) l ̃1 − μ1 = 0.02
l ̃2 − μ2 = 0.1
No 0.437253 0.449271 0.029694 0.050107 Yes 0.433595 0.448720 0.047438 0.063334 4(b) 4(a) with
e1 = 0.1, e2 = 0.01
No 0.473885 0.443457 0.038497 0.019084 Yes 0.471770 0.438603 0.053599 0.036133 4(c) 4(a) with
e1 = 0.01, e2 = 0.1
No 0.421126 0.495810 0.006337 0.052741 Yes 0.414905 0.495798 0.028501 0.065609 5 γ1 = 0.5, γ2 = 3.0 No 0.057585 0.103351 0.037535 0.057978
Yes 0.058370 0.104163 0.038957 0.058851
61

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:18.941Z
- **Text Length:** 130928 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 61 of 61
