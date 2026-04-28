# PDF Document: Azcue et al. - 2025 - Optimal Cash Transfers and Microinsurance to Reduce Social Protection Costs.pdf

**File Path:** Azcue et al. - 2025 - Optimal Cash Transfers and Microinsurance to Reduce Social Protection Costs.pdf

**Processed Date:** 2026-02-10T18:14:06.876Z

**File Size:** 1104.27 KB

**Total Pages:** 42

**Extracted Pages:** 42

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3494

**Title:** Optimal Cash Transfers and Microinsurance to Reduce Social Protection Costs

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Optimal Cash Transfers and Microinsurance to Reduce
Social Protection Costs
Pablo Azcue∗1 Corina Constantinescu2 José Miguel Flores-Contró3 Nora Muler1
1Departamento de Matemáticas, Universidad Torcuato Di Tella, Ciudad de Buenos Aires, Argentina 2Institute for Financial and Actuarial Mathematics, Department of Mathematical Sciences, University of Liverpool, Liverpool, United Kingdom 3Institute of Statistics, Biostatistics and Actuarial Science (ISBA), Louvain Institute of Data Analysis and Modeling (LIDAM), Catholic University of Louvain, Louvain-la-Neuve, Belgium
Abstract
Design and implementation of appropriate social protection strategies is one of the main targets of the United Nation’s Sustainable Development Goal (SDG) 1: No Poverty. Cash transfer (CT) programmes are considered one of the main social protection strategies and an instrument for achieving SDG 1. Targeting consists of establishing eligibility criteria for beneficiaries of CT programmes. In low-income countries, where resources are limited, proper targeting of CTs is essential for an efficient use-
 of resources. Given the growing importance of microinsurance as a complementary tool to social protection strategies, this study examines its role as a supplement to CT programmes. In this article, we adopt the piecewise-deterministic Markov process introduced in Kovacevic and Pflug (2011) to model the capital of a household, which when exposed to large proportional capital losses (in contrast to the classical Cramér–Lundberg model) can push them into the poverty area. Striving for cost-effective-
 CT programmes, we optimise the expected discounted cost of keeping the household’s capital above the poverty line by means of injection of capital (as a direct capital transfer). Using dynamic programming techniques, we derive the Hamilton–Jacobi–Bellman (HJB) equation associated with the optimal control problem of determining the amount of capital to inject over time. We show that this equation admits a viscosity solution that can be approximated numerically. Moreover, in certain special cases, -
we obtain closed-form expressions for the solution. Numerical examples show that there is an optimal level of injection above the poverty threshold, suggesting that efficient use of resources is achieved when CTs are preventive rather than reactive, since injecting capital into households when their capital levels are above the poverty line is less costly than to do so only when it falls below the threshold.
Keywords— Cash transfers; microinsurance; proportional losses; optimal control; HJB equations.
∗Pablo Azcue contributed to the present manuscript before he unfortunately passed away in April 2024. We dedicate this work to him.
1
arXiv:2511.07431v1 [q-fin.RM] 30 Oct 2025

1 Introduction
Eradicating poverty in all its forms remains one of the most pressing and complex challenges in global development. In 2015, the international community adopted the 2030 Agenda for Sustainable Development, which outlined 17 Sustainable Development Goals (SDGs) aimed at fostering social equity, economic growth, and environmental resilience. At the core of this agenda is SDG 1: End poverty in all its forms everywhere, which includes targets such as eradicating extreme poverty, reducing overall pover-
ty by at least 50%, and implementing comprehensive social protection strategies (United Nations, 2015). As the world faces growing economic volatility, climate-related shocks, and rising inequality, the need for resilient, cost-effective, and scalable poverty alleviation mechanisms has become more urgent than ever.
Social protection strategies are widely regarded as essential instruments for achieving these poverty reduction goals. Following Slater (2011), they are typically categorised into three pillars: (i) social insurance, such as unemployment or health insurance, which relies on individual contributions; (ii) social assistance, which involves non-contributory subsidies and capital injections for vulnerable populations; and (iii) regulatory standards, which establish legal protections for workers and co-
nsumers (Harvey, 2005; Department for International Development (DFID), 2006; Farrington and Slater, 2006). Among these, social assistance (particularly through direct support and targeted transfers) has proven especially effective for low-income households that lack access to formal insurance or financial markets.
This article focuses on social assistance and, in particular, on cash transfer (CT) programmes. In their simplest form, cash transfer programmes provide cash assistance to the poor and/or vulnerable (people living just above the poverty line and facing the risk, in absence of the transfer, of falling into the poverty area). Transfers can be made in small regular payments or in a lump-sum and are usually subsidised by the government (Tabor, 2002). However, cash transfer programmes may also be funde-
d by international organisations and non-governmental organisations (NGOs) (Garcia and Moore, 2012). Cash transfer programmes are generally classified as conditional (CCTs) or unconditional (UCTs). The main difference between these is that the former requires beneficiaries to meet certain obligations, such as enrolling children in school or attending regular medical checkups (Handa and Davis, 2006), in order to receive transfers, while the latter provides transfers without any additional requireme-
nts beyond eligibility.
Our work builds on and extends the piecewise-deterministic Markov process introduced by Kovacevic and Pflug (2011) to examine the cost-effectiveness of CTs. In its original form, the process portrays the dynamics of a household’s capital across time. Within this framework, the model has attracted attention since its publication, with researchers typically approaching it from a ruintheoretic perspective. Kovacevic and Pflug (2011) and Azaïs and Genadot (2015) use numerical methods to estimate the (-
infinite-time) trapping probability (the probability of a household’s capital falling into the area of poverty at some point in time). Considering that the most desirable outcome in the ruin-theoretic context is to determine closed-form expressions for ruin probabilities (Asmussen and Albrecher, 2010), Henshaw et al. (2023) and Flores-Contró (2025) derive, under certain assumptions, closed-form expressions for the trapping probability and the Gerber-Shiu expected discounted penalty function of the-
 process, respectively.
Alternative versions to the original formulation of the model have also been studied recently. FloresContró et al. (2025) consider losses that are subtracted from the household’s capital, rather than
2

prorated as in the original model. Under this variation of the model, the authors evaluate the impact of (subsidised) microinsurance on the trapping probability. Similarly, Flores-Contró and Arnold (2024) consider a risk process that incorporates ideas from the Omega model, originally introduced in Albrecher et al. (2011). Given this novel model structure, the authors gauge the effects of direct capital CTs on the trapping probability and the probability of households becoming extremely poor.
In contrast with prior studies, this article examines the model through the lens of stochastic optimal control theory. It assesses the expected discounted cost borne by the government to ensure households remain above the poverty threshold (i.e., the expected discounted capital injections or direct capital transfers). Using dynamic programming techniques (Bellman, 1954), we derive the Hamilton-Jacobi-Bellman (HJB) equation corresponding to this control problem. When a classical solution satisfying-
 the appropriate boundary conditions exists then it is the optimal value function for the problem. However, such solutions are not always guaranteed, prompting the consideration of weaker solution concepts (namely, viscosity solutions, as introduced by Crandall and Lions (1983)). Viscosity solutions have since become a standard tool in control optimisation problems; see, for example, Soner (1988), Bardi and Capuzzo-Dolcetta (1997), and Fleming and Soner (2006). For a comprehensive overview of stoc-
hastic control theory in insurance, refer to Schmidli (2007) and Azcue and Muler (2014). In certain specific settings, closed-form solutions are attainable. In this paper, we derive explicit closed-form expressions for the optimal cost in these cases. It is important to emphasize that the present study is purely theoretical in nature. It does not rely on any empirical data; instead, it develops and analyses a conceptual model to explore CT programmes.
Two of the main concerns during the formulation of cash transfer programmes are: the identification of individuals or groups that will be eligible to benefit from the programme (targeting) and the affordability of the programme (sustainability). Indeed, the efficient allocation of poverty resources to those most in need is the main concern in poverty reduction programmes (including cash transfers programmes) and is an issue that has been at the forefront of policy debates over the last decades (Ke-
en, 1992). That is, targeting is seen as crucial for efficient resource allocation and takes on much greater relevance in low-income countries where resources for social protection are limited (Slater and Farrington, 2010). Our results support this idea, suggesting that the cost incurred by the government can be reduced when transfers are preventive rather than reactive, since injecting capital into households when their capital levels are above the poverty threshold is less costly than doing so o-
nly when they fall below the threshold (we refer to these strategies as threshold strategies). In other words, our results suggest that optimal strategies are precisely threshold strategies. This is of utmost importance, as reducing the expected discounted capital transfers increases viability and sustainability of programmes, two issues that have also been a cause for concern recently (Owusu-Addo et al., 2023).
Microinsurance1 is insurance aimed at low-income individuals. In other words, low-income individuals pay a premium proportional to the probability of a certain risk occurring in exchange for protection against it. The primary target market for microinsurance comprises people living in poverty or vulnerable individuals living just above the poverty line. Microinsurance products must be tailored to meet the characteristics of these individuals (e.g. microinsurance products need to be
1The broader term inclusive insurance was introduced by the International Association of Insurance Supervisors (IAIS) in 2015. Inclusive insurance incorporates excluded or underserved individuals (e.g. women) into its definition (International Association of Insurance Supervisors (IAIS), 2015) — not only low-income individuals. In contemporary usage, the term inclusive insurance is more prevalent and viewed as more precise.
3

easy to understand, feature affordable premiums and address the specific vulnerabilities to which this population is often exposed). Microinsurance benefits are usually most effective when combined with the benefits of other complementary social protection instruments, such as social insurance or CTs (Churchill and Matul, 2012). For example, Churchill (2006) illustrates how, as part of the reform of the healthcare system in Colombia in 1993, the government offers subsidies that enable the poor to-
 be purchasers of health insurance. This expansion of social protection through microinsurance in Colombia also stimulates competition among microinsurance providers to serve the low-income market. Given the importance of microinsurance in recent years as a complementary tool to social protection strategies, we also analyse its role as a complement to CT programmes in Section 7. Within the framework of this consolidation, we observe that microinsurance can contribute to reducing the expected disco-
unted capital injections. Our results are consistent with previous findings, which highlight that microinsurance is a very helpful approach to social protection in very different settings (see Chapter 2 of Churchill and Matul (2012) for an overview of the potential of microinsurance for social protection).
The remainder of the paper is structured as follows. In Section 2, we introduce the stochastic control problem. In particular, Section 2.1 presents a detailed description of the model studied throughout this manuscript, which corresponds to the original formulation from Kovacevic and Pflug (2011). Section 2.2 defines the cost of social protection, compares it with the expected discounted cost to the government resulting from CTs providing perpetual regular transfers instead of lump-sum capital inj-
ections, and defines the optimisation problem with its corresponding value function. The Hamilton-Jacobi-Bellman (HJB) equation associated with the control problem of determining the optimal amount of transfer to inject over time and the properties of the optimal value function are presented in Section 3. Threshold strategies are discussed in Section 4, while Section 5 presents a particular case for which closed-form solutions of the value functions are available. Section 6, on the other hand, add-
resses cases where closed-form expressions are not obtainable and introduces an effective way to simulate the optimal value function using the Monte Carlo method. Section 7 incorporates microinsurance as a complementary instrument for social protection and analyses its role. Lastly, concluding remarks are provided in Section 8.
2 The Stochastic Control Problem
2.1 Description of the Model
We assume that, in the absence of lump-sum capital transfers, a household’s capital evolves according to the dynamics described by Kovacevic and Pflug (2011). At each time t, we assume that the income It of an individual household is split into consumption Ct and investment (or savings) St as It = Ct + St. The consumption as a function of the income is given by
Ct = It if It ≤ I∗,
I∗ + a(It − I∗) if It > I∗,
for some rate of consumption a ∈ (0, 1) and critical income I∗. So,
4

St = 0 if It ≤ I∗,
(It − I∗)(1 − a) if It > I∗.
The household’s capital process Xt grows as dXt/c = Stdt with some positive constant c, and income is generated through It = bXt with income generation b > 0. So putting r = (1 − a) · b · c
and x∗ = I∗/b we get the dynamic system dXt = r[Xt − x∗]+dt, with [x]+ = max(x, 0). The
critical capital (or poverty line) x∗ is the upper bound of the poverty area: if the initial capital is above x∗ the capital (and consumption and investment) grows exponentially with rate r, whereas if the initial capital is below x∗, the capital remains constant and all the income (below the critical income I∗) is consumed.
We further suppose that the capital Xt is subject to heavy loss events (e.g. flood, hurricanes and earthquakes). The occurrence of these events follows a Poisson process (Nt)t≥0 with intensity λ,
with the remaining proportion of capital in the ith event described by a sequence of i.i.d. random variables (Zi)i≥1 with distribution function GZ supported in (0, 1) and mean μ = E [Zi], indepen
dent to the Poisson process. If x is the initial capital and (τi, Zi) are the time and the remaining proportion of capital at the ith event, respectively, the capital process is given by
(
dXt = r [Xt − x∗]+ dt for t ∈ (τi, τi−1),
Xτi = Xτ −
i · Zi.
That is, on the one hand, in between loss events, the household’s capital process is given by
Xt =
(
Xτi−1 − x∗ er(t−τi−1) + x∗ if Xτi−1 > x∗, Xτi−1 otherwise,
for τi−1 ≤ t < τi and τ0 = 0. On the other hand, at the jump times t = τi, the process is given by
Xτi =
(
Xτi−1 − x∗ er(τi−τi−1) + x∗ · Zi if Xτi−1 > x∗, Xτi−1 · Zi otherwise.
More precisely, the sample set is given by
Ω = {(τi, Zi)i≥1 ∈ [0, ∞) × (0, 1) : τn < τn+1 and nli→m∞ τn = ∞}.
Here, F is the complete σ-field generated by the random variables τi : Ωλ → [0, ∞) and Zi : Ωλ → (0, 1); the filtration (Ft)t≥0 , where Ft is the complete σ-field generated by the random variables τi : Ωλ → [0, ∞) and Zi : Ωλ → (0, 1) for τi ≤ t; and P is the probability measure defined in F which satisfies:
5

1. (Zi)i≥1 is a sequence of i.i.d. random variables with P(Zi ≤ z) = GZ (z);
2. The counting process Nt : Ωλ → N0 defined by Nt = #{n : τn ≤ t} is a Poisson process of intensity λ and;
3. The random variables Zi are independent of the counting process Nt.
Given a discount rate δ > 0 and a continuously function w : [0, ∞) → R differentiable in [x∗, ∞), the discounted infinitesimal generator of the Markov process Xt with initial capital x ≥ x∗ is given by
Ge e−δtXt t≥0 , w = tl→i 0m+
Ex [e−δt w(Xt )]−w(x) t
= r(x − x∗)w′(x) − (λ + δ)w(x) + λ R 1
0 w(x · z)dGZ (z).
(2.1)
2.2 Lump-Sum Capital Injections vs Perpetual Regular Transfers
We consider the case in which the government decides to make lump-sum capital injections if, after a heavy loss event, capital falls below the critical capital level x∗. The capital injection is such that it returns the household’s capital to the critical capital value x∗. For an initial capital x ≥ 0 and a positive discount rate δ, we define the cost of social protection and denote it as C(x), as the expected discounted cumulative injections necessary to avoid household’s capital from falling bel-
ow the critical capital x∗. Note that, if τ1 and Z1 denote the time and remaining proportion of the capital in the first loss event, respectively, it yields
C (x∗) = E ((1 − Z1) x∗ + C (x∗)) e−δτ1
= ((1 − μ)x∗ + C (x∗)) λ
λ+δ ,
which leads to
C (x∗) = λ(1 − μ)x∗
δ . (2.2)
Also, for x ∈ [0, x∗), we have
C (x) = (x∗ − x) + C (x∗) = (x∗ − x) + λ(1 − μ)x∗
δ , (2.3)
and for x > x∗, consider the first time in which the capital is less or equal to the poverty line x∗, that is,
6

τ = min{τi : Xτi ≤ x∗},
which yields,
C (x) = E ((x∗ − Xτ ) + C (x∗)) e−δτ = E (x∗ − Xτ ) + λ(1 − μ)x∗
δ e−δτ . (2.4)
Now let us consider the income It = bXt generated by the capital process Xt with income generation
b > 0, and let us suppose that the government provides transfers at a rate I∗ − It when Xt ≤ x∗. Thus, transfers are immediately consumed and are perpetually paid by the government after the trapping time τ . We call this social protection strategy perpetual regular transfers and denote D(x) as the expected value of the discounted perpetual regular transfers:
D(x) = Ex
Z∞
τ
(I∗ − Is) e−δsds .
Remark 2.1. It is important to note that the government makes transfers from the moment the household’s capital falls below the poverty threshold. Moreover, the capital of a household does not grow once it falls below that threshold.
Proposition 2.1. The expected value of the discounted perpetual regular transfers, D(x), is given by
D(x) = bx∗
δ
λ(1 − μ)
δ + λ(1 − μ) + b
δ + λ(1 − μ) (x∗ − x),
for x ≤ x∗, and
D(x) = E D(Xτ )e−δτ ,
otherwise.
Proof. If the initial capital is x ≤ x∗, then the trapping time τ = 0 and we have
D(x) = E
"∞
X
n=1
Z τn
τn−1
(I∗ − Iτn−1 )e−δtdt
#
7

=
∞
X
n=1
E [b(x∗ − x · Z1Z2 · · · Zn−1)] · E
"
Z τn
τn−1
e−δtdt
#
=
∞
X
n=1
b(x∗ − x · μn−1)E e−δτ1 n−1 Z ∞
0
1 − e−δt
δ λe−λtdt
= b x∗
δ− x
δ + λ(1 − μ) .
In particular,
D(x∗) = b x∗
δ − x∗
δ + λ(1 − μ) = bx∗
δ
λ(1 − μ)
δ + λ(1 − μ) ,
and
D(x) = b x∗
δ − x∗
δ+λ(1−μ) + b x∗
δ+λ(1−μ) − x
δ+λ(1−μ)
= D(x∗) + b
δ+λ(1−μ) (x∗ − x),
for x ≤ x∗.
Proposition 2.2 compares the strategy of lump-sum capital transfers up to the poverty line x∗ whenever is necessary with perpetual regular transfers.
Proposition 2.2. We have that,
D(x∗) − C (x∗) ≥ 0 if, and only if, b ≥ δ + λ(1 − μ).
Proof. In the case x ≤ x∗, from Proposition 2.1 and (2.3) yields
D(x) − C (x) = b x∗
δ− x
δ+λ(1−μ) − ((x∗ − x) + C(x∗))
=b
δ+λ(1−μ) − 1 x∗λ(1−μ)
δ + (x∗ − x) .
(2.5)
8

Then, D(x) − C (x) ≥ 0, if and only if, b ≥ δ + λ(1 − μ). On the other hand, when x > x∗, from Proposition 2.1 and (2.4) we have
D(x) − C (x) = E (D(Xτ ) − C(Xτ )) e−δτ .
Hence, from (2.5) we have the result.
0.0 0.2 0.4 0.6 0.8 1.0
0.0 0.5 1.0 1.5 2.0 2.5 3.0
μ
λ
b = 0.30 b = 0.50 b = 0.70 b = 0.90 b = 1.10
(a)
0.0 0.2 0.4 0.6 0.8 1.0
0.0 0.2 0.4 0.6 0.8 1.0
λ
δ
μ = 0.10 μ = 0.30 μ = 0.50 μ = 0.70 μ = 0.90
(b)
Figure 1: (a) Upper boundary of the region defined by the constraint b ≥ δ + λ (1 − μ) derived in Proposition 2.2 with (a) fixed δ = 0.2 and different values of b and (b) fixed b = 1 and different values of μ.
Figure 1 shows the boundary curve defined by the constraint b ≥ δ + λ (1 − μ), where lump-sum capital injections are more cost-efficient than perpetual regular transfers. In particular, Figure 1a displays the feasible region for λ for different values of the income generation rate b > 0, which is below or on the curve. Similarly, Figure 1b provides the possible region for δ, for different values of the expected remaining proportion of capital 0 < μ < 1, which is all values below or on this boundar-
y. In particular, Figure 1a shows that, the feasible region for λ is smaller as the expected losses are more severe (lower μ). That is, there is a risk trade-off between the frequency and severity of the losses. In other words, for C(x) ≤ D(x) to hold, we see that as each individual loss is expected to be less severe (higher μ), then the household can tolerate more frequent losses (higher λ). Moreover, we observe that a household with low income generation rate b > 0 must experience very low frequ-
ency when losses are more severe. On this basis, we can conclude that for households experiencing frequent and severe losses, providing regular, ongoing transfers is a more cost-effective strategy for the government than offering capital injections, except in cases where households possess strong income-generating capacity. On the other hand, Figure 1b demonstrates that the size of the
9

admissible region for δ is reduced when losses are more frequent (higher λ) and increased when the expected losses are less severe (higher μ). Lump-sum transfers occur immediately at the loss event while perpetual regular transfers take place during the time the capital lies below the poverty threshold. That is, lump-sum capital injections are usually more costly today, because making the transfer earlier is more valuable than waiting. Indeed, the larger δ, the more sharply future transfers are d-
iscounted and the discounted lump-sum transfers grow much higher relative to the discounted perpetual regular transfers. This is the reason why, for instance, we observe that the inequality C(x) ≤ D(x) only holds for very small values of δ when capital losses are more frequent and severe (boundary displayed with the solid blue line for higher values of λ).
In the remainder of the paper, we focus on the problem of optimising, from the government’s perspective, the transfer of lump-sum capital so the individuals’ capital level is never below the poverty line. In some cases, we will show that it is more effective to provide transfers that raise capital strictly above the poverty threshold (these strategies are explained in greater detail in Section 4). This presents a trade-off: injecting more than the minimum lump-sum required to bring the household’s-
 capital to x∗ means that a portion of future household income will be allocated to investment (or savings), leading to capital growth over time. Consequently, the government may need to inject less capital during the next loss event. Clearly, as we will also show through examples, the optimality of this approach depends on the model parameters and the cumulative distribution function (c.d.f.) of the remaining proportions of capital Zi. To investigate this question, we aim to minimise the expected-
 sum of discounted lump-sum capital transfers, subject to the constraint that the household’s capital never falls below the critical threshold x∗. More precisely, we define a control strategy as a process π = (St)t≥0 where St is the cumulative amount of capital transfers up to time t ≥ 0. The control strategy St is admissible if it is adapted with respect to de filtration (Ft)t≥0, non-decreasing and right-continuous. The set of all admissible control strategies with initial capital x is denoted by-
 Πx. For any π ∈ Πx, the controlled capital process Xtπ can be written as
Xtπ =



Xτπi−1 − x∗ er(t−τi−1) + x∗ + St for τi−1 ≤ t < τi,
Xπ
τ−
i
· Zi + Sτi − Sτ−
i for t = τi,
with τ0 = 0 and X0π = x + S0. The capital lump-sum transfers should keep the household out of
the area of poverty; that is, the controlled capital process should satisfy Xtπ ≥ x∗. The expected discounted capital transfers of the admissible strategy π = (St)t≥0 ∈ Πx for a household with initial capital x ≥ 0, is given by
V π(x) = E
Z∞
0−
e−δtdSt , (2.6)
where δ > 0 is the discount factor. The function (2.6) is also known as the value function of an admissible strategy. We consider the following optimisation problem,
V (x) = inf {V π(x) : π ∈ Πx} for x ≥ 0. (2.7)
10

Note that V π(x) = V π(x∗) + (x∗ − x) for x ≤ x∗ and so V (x) = V (x∗) + (x∗ − x) for x ≤ x∗ and that the cost of social protection C(x) is the value function of an admissible strategy (but the cost of perpetual subsidy D(x) it is not). In particular, V (x) ≤ C(x).
3 Analysis of V : Properties and the Hamilton-Jacobi-Bellman
Equation
In this section, we associate a Hamilton-Jacobi-Bellman (HJB) equation to the optimisation problem (2.7) and we prove that the optimal value function V is a viscosity solution of this equation.
We begin by obtaining some basic properties of V . To this end, we first present the following lemma concerning the cost of social protection. The proof is provided in Appendix A.1.
Lemma 3.1. C(x) is non-increasing and non-negative with limx→∞ C(x) = 0.
The following proposition establishes basic properties of the optimal value function.
Proposition 3.1. The function V is non-negative, non-increasing and Lipschitz with limx→∞ V (x) = 0.
Proof. Given an initial capital x ≥ x∗, one possible admissible strategy π1 is to inject a capital transfer h immediately and then follow any admissible strategy π ̄x+h with initial capital x + h, then
V (x) ≤ V π1 (x) = V π ̄ (x + h) + h.
Thus, it yields
V (x) ≤ V (x + h) + h,
and since V is non-increasing we have the Lipschitz result. Also,
0 ≤ xli→m∞ V (x) ≤ xli→m∞ C(x) = 0.
The HJB equation of this problem is the following first order integro-differential equation (IDE) with a derivative constraint:
min{1 + u′(x), L(u)(x)} = 0 for x ≥ x∗, (3.1)
where
11

L(u)(x) = r(x − x∗)u′(x) − (λ + δ)u(x) + λ
Z x∗/x
0
(u(x∗) + x∗ − x · z)dGZ (z)
+λ
Z1
x∗ /x
u(x · z)dGZ (z), for x ≥ x∗.
Remark 3.1. Given u defined in [x∗, ∞), we extend it to [0, ∞) as u(x) = u(x∗) + x∗ − x for x < x∗. Note that L(u) is the discounted infinitesimal generator of the function u defined in (2.1) in the case that u were differentiable in [x∗, ∞).
Now, we state the dynamic programming principle. We skip the proof because it is similar to the one of Lemma 1.2 in Azcue and Muler (2014).
Lemma 3.2. Given x ≥ 0 and any finite stopping time τ we have
V (x) = inf
π =(St )t≥0 ∈Πx
Ex
Zτ
0−
e−δtdSt + V (Xτπ)e−δτ .
Definition 3.1. We say that a locally Lipschitz function u : [x∗, ∞) → R is a viscosity subsolution of (3.1) at x ∈ (x∗, ∞) if any continuously differentiable function ψ : (x∗, ∞) → R with ψ(x) = u(x) such that u − ψ reaches the minimum at x satisfies
min{1 − ψ′(x), L(ψ)(x)} ≤ 0.
The function ψ is called a test function for subsolution at x.
We say that a locally Lipschitz function u : [x∗, ∞) → R is a viscosity supersolution of (3.1) at x ∈ (x∗, ∞) if any continuously differentiable function φ : (x∗, ∞) → R with φ(x) = u(x) such that u − φ reaches the maximum at x satisfies
min{1 − φ′(x), L(φ)(x)} ≥ 0.
The function φ is called a test function for supersolution at x.
Finally, we say that a locally Lipschitz function u : [x∗, ∞) → R is a viscosity solution of (3.1) if it is both a viscosity subsolution and a viscosity supersolution at any x ∈ (x∗, ∞).
Lemma 3.3. Take u : [x∗, ∞) → [0, ∞) continuously differentiable, let us extend u to [0, ∞) as u(x) = u(x∗) + x∗ − x. Given π ∈ Πx, we can write for any finite stopping time τ ∗,
12

u(Xτπ∗ )e−δτ∗ − u(x) = R τ∗
0 L(u)(Xtπ− )e−δtdt − R τ∗
0− e−δtdSt
+
R τ∗
0 (1 + u′(Xtπ− ))e−δtdStc
+
P
St ̸=St−
t≤τ ∗
e−δt R St−St−
0 (1 + u′(Xtπ − α)) dα + Mτ∗ ,
where
MT = P
τi ≤T
u(Zi · Xπ
τ−
i
) − u(Xπ
τ−
i
) e−δt
−λ R T
0
R1
x∗ /X π
t− u(z · Xtπ− ) − u(Xtπ− ) dGZ (z) e−δtdt
−λ R T
0
R x∗/Xπ
t−
0 x∗ − z · Xtπ− + u(x∗) − u(Xtπ− ) dGZ (z) e−δtdt,
is a martingale with zero expectation.
The proof of Lemma 3.3 is given in Appendix A.2.
Proposition 3.2. V is a viscosity solution of (3.1) in (x∗, ∞).
Proof. Let us first prove that V is a viscosity supersolution of (3.1). Given an initial capital x > x∗, let us consider the admissible strategy associated to the cost of social protection C(x). Let φ be a test function for supersolution (3.1) at x. Take any h > 0, using Lemma 3.2 we get,
φ(x) = V (x)
≤ Ex e−δ(τ1∧h)V (Xτ1∧t)
≤ Ex e−δ (τ1∧h)φ(Xτ1∧h) .
Hence, from (2.1) and Remark 3.1, we have
L(φ)(x) ≥ 0. (3.2)
Given an initial capital x > x∗, consider an admissible strategy which makes immediately a lumpsum transfer l > 0. This yields,
φ(x) = V (x) ≤ l + V (x + l) ≤ l + φ(x + l),
13

and therefore,
φ′(x) + 1 ≥ 0. (3.3)
From (3.2) and (3.3), V is a supersolution of (3.1) at x. We omit the proof that V is a viscosity subsolution since it is very similar to the one of Proposition 3.1 from Azcue and Muler (2014).
We now present the following lemma (the proof follows along the same lines as that of Lemma 4.2 from Azcue and Muler (2014), with only minor modifications; we therefore omit it):
Lemma 3.4. Let u be a non-increasing supersolution of (3.1) with limx→∞ u(x) = 0. We can find
a sequence of positive functions un : [x∗, ∞) → [0, ∞) such that:
(a) un is continuously differentiable, non-increasing with limx→∞ un(x) = 0, u′n(x) + 1 ≥ 0, un
↗ u uniformly and u′n(x) converges to u′(x) a.e.
(b) Given any M ≥ x∗, there exists a sequence cn ≥ 0 with limn→∞ cn ↘ 0 such that λu(0) ≥
L(un)(x) ≥ −cn for x∗ ≤ x ≤ M .
Proposition 3.3. The optimal value function defined in (2.7) is the largest non-increasing viscosity supersolution of (3.1) with limit zero as x goes to infinity.
Proof. Given x and ε > 0, there exists an admissible strategy π1 = (St1)t≥0 ∈ Πx such that
V π1 (x) ≤ V (x) + ε
2 . By Lemma 3.1, there exists x > x large enough such that the cost of social
protection C(x) < ε
2 . Then, we consider
τx = inf{t : Xtπ1 ≥ x},
and define the new strategy π = St t≥0 ∈ Πx, which coincides with π1 for t ≤ τx, and subsequently
provides injections of capital up to x∗ whenever the capital is below x∗. Hence,
V (x) ≥ V π1 (x) − ε
2 = Ex
Z τx
0−
e−δtdSt1 + e−δτx V π1 (x) − ε
2 ≥ Ex
Z τx
0−
e−δtdSt − ε
2.
We also have, since C(x) < ε
2 and Xπ
τx = x (if τx < ∞) that,
Ex
Z τx
0−
e−δtdSt ≥ Ex
Z τx
0−
e−δtdSt + e−δτx C(x) − ε
2
≥ V π(x) − ε
2.
14

Therefore, we have that V (x) ≥ V π(x) − ε. Let us now demonstrate that u(x) ≤ V (x), by considering u, a non-increasing supersolution of (3.1) that tends to zero as x goes to infinity. We know that the following inequality holds,
Xπ
t ≤ (x − x∗) er(t−τx) + x,
for t > τx. Then, we take k > 0 and define
M (k) := (x − x∗) erk + x.
We additionally consider the stopping time T := τx + k, for the case in which τx < ∞ and T = ∞
otherwise. Thus, this implies that Xπ
t ∈ [x∗, M ] for all t ≤ T . Since the functions un defined in Lemma 3.4 are continuously differentiable, we obtain using Lemma 3.3 and taking any s > 0,
un(XTπ∧s)e−δ(T ∧s) − un(x) ≥
Z T ∧s
0
L(un)(Xtπ− )e−δtdt −
Z T ∧s
0−
e−δtdSt + MT ∧s,
where (MT ∧s)T ≥0 is a zero-expectation martingale. From Lemma 3.4–(b), we have
λu(0) ≥ L(un)(x) ≥ −cn.
Then, using Bounded Convergence Theorem and taking n → ∞, it yields
Ex
h
u(X π
(T ∧s))e−δ(T ∧s)i
− u(x) ≥ −Ex
"
Z T ∧s
0
e−δtdSt
#
.
Subsequently, taking k → ∞ (so we get T → ∞) and s → ∞, and using the bounded and monotone convergence theorem, we obtain
V (x) + ε ≥ V π(x) ≥ u(x).
From (2.7) and Proposition 3.3, we get the following verification theorem.
Theorem 3.1. Consider a family of admissible strategies (πx)x≥x∗ such that πx ∈ Πx for any
initial surplus x ≥ x∗. If the function V πx (x) is a viscosity supersolution of (3.1) then V πx (x) is the optimal value function.
The way in which V solves the HJB equation gives us the optimal strategy for any capital level x ≥ x∗. Roughly speaking, we have the following:
15

1. V ′(x) + 1 = 0: Provide capital transfers and;
2. L(V )(x) = 0: Do not provide capital transfers.
Definition 3.2. If there exists a closed set B = {x : V ′(x) + 1 = 0} ⊂ [x∗, ∞) such that the optimal strategy is: If the capital x ∈ B, pay y(x) − x as subsidy, where
y(x) = max {y > x ≥ x∗ : V (y) − V (x) + (y − x) = 0}
If the capital x ∈/ B, do not pay any subsidy up to the first time where the capital process exits the closed set B. These strategies are called band strategies with action zone B and non-action zone C = [0, ∞) − B. Note that [0, x∗] ⊂ B.
4 Threshold Strategies
A threshold transfer strategy with threshold y ≥ x∗ is defined as a programme in which the government provides a lump-sum transfer of amount y − x whenever the household’s capital falls below the threshold y. Under such programme, the capital is immediately raised to the threshold level y. Conversely, if the household’s capital lies above the threshold y, no transfer is granted. This strategy, when y > x∗, seeks to maintain a buffer above the critical capital x∗, allowing households to grow their -
capital. Let us denote with πxy ∈ Πx the admissible strategy with threshold y and Vy(x) its corresponding value function. Note that, in particular, Vx∗ (x) = C(x). We now develop and formalise the properties of this family of admissible strategies.
In the following three lemmas we examine basic properties of the function Vy. The first two lemmas establish fundamental properties, while the third lemma addresses a continuity result in the special case y = x∗.
Lemma 4.1. Given y ≥ x∗ the function Vy is bounded, non-increasing and Vy(x) = Vy(y) + y − x for x < y
Lemma 4.2. The function Vy(x) for y > x∗ is Lipschitz and C(x) = Vx∗ (x) is Lipschitz in any
set [w, ∞) ⊂ (x∗, ∞) with w > x∗.
Lemma 4.3. The function C(x) is continuous.
The proofs of these lemmas are provided in Appendices A.3, A.4 and A.5, respectively. On the other hand, the proof of Proposition 4.1, which states properties of Vy, is omitted as it is essentially identical to that of Lemma 3.1.
Proposition 4.1. The function Vy satisfies limx→∞ Vy(x) = 0.
Let us define
16

Ly(W )(x) := r(x − x∗)W ′(x) − (δ + λ)W (x) + λ
Z1
y/x
W (x · z)dGZ (z)
+λ
Z y/x
0
((y − x · z) + W (y)) dGZ (z),
and the associated Integro-Differential Equation (IDE),
Ly(W )(x) = 0. (4.1)
We now show now that Vy is the unique solution of this equation subject to suitable boundary conditions.
Proposition 4.2. Given y ≥ x∗, the function Vy(x) satisfies,
Vy(x) =
(
(y − x) + Vy(y) for 0 < x ≤ y, W (x) for x > y,
where W (x) is the unique classical solution of (4.1) for x > y with limx→∞ W (x) = 0 and W (y) =
Vy(y). In the case that y = x∗ and x = x∗, Vx∗ = C and C(x∗) satisfies the equation in the following sense,
−(δ + λ)C(x∗) + λ
Z1
0
((x∗ − x∗ · z) + C(x∗)) dGZ (z) = 0,
(because C′(x∗) might not exist).
Proof. Considering an initial capital x ≥ y, such that Vy′(x) exists, we have that
Vy(x) = E
h
Vy (Xh∧τ1 ) e−δ(h∧τ1)i
.
Then, by (2.1), we obtain
0 = hli→m0+
E[Vy (Xh∧τ1 )e−δ(h∧τ1)]−Vy (x) h
= r (x − x∗) Vy′(x) − (λ + δ)Vy(x) + λ R 1
0 Vy(x · z)dGZ (z).
By Lemma 4.2 and 4.3, Vy is differentiable in a full measure set in [y, ∞) and also absolutely
continuous in [y, ∞). Hence, if x > x∗ at all the points that Vy′(x) exists, we have
17

Vy′(x) = (λ + δ)Vy(x) − λ R 1
0 Vy(x · z)dGZ (z)
r (x − x∗) .
Let us define for all w ≥ y
g(w) := (λ + δ)Vy(w) − λ R 1
0 Vy(w · z)dGZ (z)
r (w − x∗) .
This function is continuous for w > x∗ (because Vy is continuous) and thus, if y > x∗, we can write,
Vy(x) =
Zx
y
g(w)dw + Vy(y).
Therefore, Vy(x) it is continuously differentiable and a classical solution of (4.1) in [y, ∞). If y = x∗
and x > x∗, we can write,
Vx∗ (x) = C(x) =
Zx
x∗ +(x−x∗ )/2
g(w)dw + C(x∗ + (x − x∗)/2),
which proves that C(x) is continuously differentiable and a classical solution of (4.1) in (x∗, ∞). Now, if x = x∗, then we have Xτ1 = x∗ · Z1 < x∗, which implies that at τ1, a lump-sum transfer
of (1 − Z1) x∗ must be provided by the government so that the capital becomes x∗. Hence, as in (2.2),
C (x∗) = ((1 − μ)x∗ + C (x∗)) λ
λ+δ,
can be rewritten as,
−(δ + λ)C (x∗) + λ
Z1
0
((x∗ − x∗z) + C (x∗)) dGZ (z) = 0.
Let us prove now the uniqueness result. Given y ≥ x∗, let u be a classical solution of (4.1) in (y, ∞) satisfying u(y) = Vy(y), and limx→∞ u(x) = 0. We will show that u = Vy in (y, ∞). For any initial
capital x > y consider the threshold strategy π := πxy and the stopping time
τ y = inf {t ≥ 0 : Xt ≤ y} ,
and T > 0. Then,
u(XTπ∧τ y )e−δ(T ∧τ y) − u(x) = R T ∧τ y
0 Ly(u)(Xt− )e−δtdt − 1{T ∧τ y−=τ y}(y − Xτ y )e−δ(T ∧τ y) + MT ∧τ y
18

and since Ly(u)(x) = 0 for x > y,
E
h
u(XTπ∧τ y ) + 1{T ∧τ y−=τ y−}(y − Xτ y ) e−δ(T ∧τ y)i
= u(x).
Therefore, since by the boundary condition, u(z) = Vy(z), for z ≤ y, we have,
u(x) = E
h
(u(y) + y − Xτ y ) 1{T ∧τ y−=τ y−}e−δτ y i
+ E u(XTπ )1{T ∧τ y−=T }e−δT
=E
h
Vy (Xτ y )1{T ∧τ y−=τ y−}e−δτ y i
+ E u(XT )1{T ∧τ y−=T }e−δT .
Taking the limit T → ∞ and using bounded convergence, it yields,
Tli→m∞ E u(XT )1{T ∧τy−=T }e−δT = 0,
and, since τ y is the first time that the threshold strategy provides transfers, we obtain,
Tli→m∞ E
h
Vy (Xτ y )1{T ∧τ y−=τ y−}e−δτ y i
=E
h
Vy(Xτ y )e−δτ y i
= Vy(x).
Therefore, we conclude that u(x) = Vy(x).
Alternatively, one can also characterise Vy in [y, ∞) as a unique fixed-point of an operator, as established by the Proposition 4.3.
Proposition 4.3. The operator T : W → W defined as
T (W )(x) = E
h
(y − Xτ1 + W (y))1{Xτ1 <y}e−δτ1
i
+E
h
W (Xτ1 ) 1{Xτ1 ≥y}e−δτ1
i
,
where
W = {W : [y, ∞) → [0, ∞) bounded and non-negative functions} ,
with the norm ∥W ∥ = sup[y,∞) W (x) is a contraction and has the function Vy as the unique fixedpoint.
Proof. We have the following,
T (W1)(x) − T (W2)(x) = (W1(y) − W2(y)) E
h
e−δτ1 1X{τ1 <y}
i
19

+E
h
(W1(Xτ1 ) − W2(Xτ1 )) 1{Xτ1 ≥y}e−δτ1
i
≤ ∥W1 − W2∥ E e−δτ1 = ∥W1 − W2∥ λ
λ+δ .
Thus, it is a contraction and has a unique fixed-point. Since T (Vy) = Vy we have the result.
5 Closed-Form Solutions in a Special Case: Zi ∼ Beta(α, 1)
In the next two examples, we derive closed-form solutions for the value functions of threshold strategies when the remaining proportion of capital follows a particular case of the Beta distribution; that is, when Zi ∼ Beta(α, 1), case for which the distribution function is GZ (z) = zα and the p.d.f.
is gZ (z) = αzα−1 for 0 < z < 1, where α > 0. More precisely, in this case we were able to derive an explicit solution to the IDE (4.1) in accordance with the criteria established in Proposition 4.2. Example 5.1 considers the special case in which the threshold coincides with the critical capital x∗, implying that the value function corresponds to the cost of social protection C(x). On the other hand, Example 5.2 extends this to the value function for any arbitrary threshold strategy. In the examp-
les we therefore calculate C(x), Vy(x) for some threshold y, as well as Vy⋆ (x), which
corresponds to the value function for the optimal threshold y⋆. This function is also the optimal value function for any admissible strategy, as confirmed by the verification theorem (i.e., Theorem 3.1).
Example 5.1. When considering Zi ∼ Beta(α, 1), then C(x) is given by
C (x) =

  
  
(x∗ − x) + λx∗
(α+1)δ if 0 ≤ x ≤ x∗,
2F1(b,b−c+1;b−a+1; x∗
x )λx∗ 2 F1 (b,b−c+1;b−a+1;1)(α+1)δ
x∗ x
b
if x > x∗,
(5.1)
where a = −(δ + λ − αr) − p(δ + λ − αr)2 + 4rαδ /2r, b = −(δ + λ − αr) + p(δ + λ − αr)2 + 4rαδ /2r and c = α.
Remark 5.1. Note that one can also obtain Equation (5.1) for x > x∗ by means of the Gerber-Shiu expected discounted penalty function, recently derived by Flores-Contró (2025). Indeed, for x > x∗, the cost of social protection C(x) is given by
C (x) = E | Xτ − x∗ | e−δτ ; τ < ∞ + C(x∗) · E e−δτ ; τ < ∞ , (5.2)
where E e−δτ ; τ < ∞ is equivalent to E e−δτ 1{τ<∞} . Under the assumption of Beta(α, 1)distributed remaining proportions of capital; that is, Zi ∼ Beta(α, 1), Equation (5.2) yields to
20

(5.1), as E | Xτ − x∗ | e−δτ ; τ < ∞ = x∗/ (α + 1) · E e−δτ ; τ < ∞ (see, for example, Section 5 of Flores-Contró (2025)) and E e−δτ ; τ < ∞ is the Laplace transform of the trapping time, given by Equation (10) from Flores-Contró (2025).
0 20 40 60 80 100 120
Initial Capital
C (x)
0 x∗ = 20 40 60 80 100
δ = 0.10 δ = 0.20 δ = 0.30 δ = 0.40 δ = 0.50
(a)
0 20 40 60 80 100
Initial Capital
Vy (x)
0 x∗ = 20 y = 40 60 80 100
δ = 0.10 δ = 0.20 δ = 0.30 δ = 0.40 δ = 0.50
(b)
0 20 40 60 80
Initial Capital
Vy⋆ (x)
0 x∗ = 20 40 60 80
δ = 0.10 δ = 0.20 δ = 0.30 δ = 0.40 δ = 0.50
(c)
0 20 40 60 80
Initial Capital
C (x)
0 x∗ = 20 40 60 80 100
α = 0.50 α = 1.00 α = 1.50 α = 2.00 α = 2.50
(d)
0 20 40 60 80 100 120
Initial Capital
Vy (x)
0 x∗ = 20 y = 40 60 80 100
α = 0.50 α = 1.00 α = 1.50 α = 2.00 α = 2.50
(e)
0 20 40 60 80
Initial Capital
Vy⋆ (x)
0 x∗ = 20 40 60 80
α = 0.50 α = 1.00 α = 1.50 α = 2.00 α = 2.50
(f )
Figure 2: The first row (a)–(c) shows the cost of social protection and the value function of a threshold strategy when Zi ∼ Beta(1.25, 1), a = 0.10, b = 3, c = 0.40, λ = 1, x∗ = 20 for δ = 0.10, 0.20, 0.30, 0.40, 0.50. The second row (d)–(f) displays the cost of social protection and the value function of a threshold strategy when Zi ∼ Beta(α, 1), a = 0.10, b = 3, c = 0.40, λ = 1,
δ = 0.25, x∗ = 20, y = 40 for α = 0.50, 1.00, 1.50, 2.00, 2.50. Panels (a) and (d) display C(x) corresponding to Vy(x) with threshold y = 20, while (b) and (e) show Vy(x) with threshold y = 40.
Similarly, panels (c) and (f) show Vy⋆ (x) with the optimal threshold y⋆.
Example 5.2. When considering Zi ∼ Beta(α, 1), then Vy(x) is given by
Vy(x) =

  
  
(y − x) +2 F1 b, b − c + 1; b − a + 1; x∗
y if 0 ≤ x ≤ y,
2F1 b, b − c + 1; b − a + 1; x∗
x A (y) x∗
y
b
if x > y,
21

with a = −(δ + λ − αr) − p(δ + λ − αr)2 + 4rαδ /2r, b = −(δ + λ − αr) + p(δ + λ − αr)2 + 4rαδ /2r, c =
α and A (y) = λy
2F1(b,b−c+1;b−a+1; x∗
y ) δ( x∗
y )b(α+1) + λy
2F1(b+1,b−c+1;b−a+1; x∗
y )r(y−x∗) b
y ( x∗
y )b(α+1) .
Remark 5.2. The optimal threshold y⋆ can be obtained by differentiating the value function Vy(x) with respect to y and setting the derivative equal to zero to identify interior extrema. Although the derivative admits a closed-form expression, the resulting first-order condition cannot be solved analytically for y due to its complex functional form. Therefore, the optimal threshold must be approximated numerically.
Remark 5.3. Once the optimal threshold was calculated, it was verified that it satisfied the verification theorem (i.e., Theorem 3.1). The optimal threshold was found to satisfy this condition in all cases considered in our examples.
0 2 4 6 8 10
20 22 24 26 28
α
y⋆
δ = 0.10 δ = 0.20 δ = 0.30 δ = 0.40 δ = 0.50
Figure 3: The optimal threshold y⋆ when Zi ∼ Beta(α, 1), a = 0.10, b = 3, c = 0.40, λ = 1, x∗ = 20 for different values of the discount rate δ.
Figure 2 displays the cost of social protection and the value function of a threshold strategy for the case Zi ∼ Beta(α, 1). The functions are clearly decreasing, in agreement with the earlier results. Furthermore, as expected, the functions decrease with respect to both the discount rate δ and the shape parameter α. This reflects the fact that a lower discount rate assigns greater weight to future transfers, thereby leading to higher costs. Similarly, a larger value of α corresponds to a higher e-
xpected remaining proportion of capital (higher μ), which in turn reduces the total amount of discounted transfers. A comparison of Figures 2a and 2b with 2c, as well as Figures 2d and 2e with 2f, highlights the potential cost savings for the government when adopting the strategy corresponding to the optimal threshold y⋆. Note that the optimal threshold in Figure 2c is y⋆ = 26.66, 23.82, 22.16, 21.10, 20.41, corresponding to the case δ = 0.10, 0.20, 0.30, 0.40, 0.50, respectively
22

(for completeness, the optimal thresholds shown in Figure 2f for α = 0.50, 1.00, 1.50, 2.00, 2.50 are y⋆ = 20.27, 22.16, 23.32, 23.56, 23.42, respectively). Figure 3 shows the sensitivity of the optimal threshold y⋆ with respect to the discount factor δ and the shape parameter α. This figure shows that the optimal threshold y⋆ is not monotone in α. This can be interpreted as follows: when the expected remaining proportion of capital is low (small α), the optimal threshold y⋆ becomes less relevant-
, since the household will almost surely fall into poverty after the first capital loss. However, as the expected remaining proportion of capital increases (with higher α), the choice of an optimal threshold gains importance: the household is less likely to fall into poverty after the first loss and thus has the possibility of rebuilding its capital. It is important to note, however, that another effect arises when α becomes sufficiently large: capital losses have a smaller impact on the household-
, which in turn may reduce the importance of selecting an optimal threshold, as the losses themselves become less significant.
6 General Case Analysis: Absence of Closed-Form Solutions
In general, it is not straightforward to derive explicit formulas for the value function of a threshold strategy when more general cases are considered (e.g., when the distribution of the remaining proportion of capital differs from the Beta(α, 1) specification, or when a microinsurance cover is taken into account, as discussed in Section 7). Monte Carlo simulation is an alternative way to produce estimates and is particularly useful when dealing with cases for which closed-form formulas are not a-
vailable. In this section, we introduce a simple and efficient methodology that allows to generate fairly accurate approximations for these value functions. This approach will also allow us to estimate the optimal threshold, which, as previously emphasised, represents a key aspect of the problem.
6.1 Methodology
We begin by computing V πy (y). Let us consider trajectories of Xπy
t , with initial capital y, and
the sequence (τn, Zn), up to the time τ y = min t : Xπy
t < y . For each trajectory ωi, we find
(τ y (ωi) , Jy (ωi)), with Jy (ωi) = y (ωi) − Xπy
τy (ωi). Thus, we have the following,
V πy (y) ≈ 1
N
N
X
i=1
h
Jy (ωi) e−δτ y(ωi) + V πy (y)e−δτ y(ωi)i
,
and therefore, one can approximate V πy (y) as follows,
V πy (y) ≈
1 N
N
P
i=1
Jy (ωi) e−δτ y(ωi)
1− 1
N
N
P
i=1
e−δτ y(ωi)
. (6.1)
23

Then, we compute V πy (x) for x > y. We focus on the trajectories of Xπy
t , with initial capital x > y,
and the sequence (τn, Zn), up to the time τ y = min t : Xπy
t < y . Similarly, for each trajectory
ωi, we find (τ y (ωi) , Jy (ωi)), with Jy (ωi) = y (ωi) − Xπy
τy (ωi). Hence, we can approximate V πy (x) as follows,
V πy (x) ≈ 1
N
N
X
i=1
h
Jy (ωi) e−δτ y(ωi) + V πy (y)e−δτ y(ωi)i
,
where the function V πy (y) denotes the approximation (6.1).
Initial Capital
C (x)
0 x∗ = 20 40 60 80 100
0 20 40 60 80 100 120
δ = 0.10 δ = 0.20 δ = 0.30 δ = 0.40 δ = 0.50
(a)
Initial Capital
Vy (x)
0 x∗ = 20 y = 40 60 80 100
0 20 40 60 80
δ = 0.10 δ = 0.20 δ = 0.30 δ = 0.40 δ = 0.50
(b)
Initial Capital
Vy? (x)
0 x∗ = 20 40 60 80 100
0 20 40 60 80
δ = 0.10 δ = 0.20 δ = 0.30 δ = 0.40 δ = 0.50
(c)
Initial Capital
C (x)
0 x∗ = 20 40 60 80 100
0 20 40 60 80 100
p = 0.50 p = 1.00 p = 1.50 p = 2.00 p = 2.50
(d)
Initial Capital
Vy (x)
0 x∗ = 20 y = 40 60 80 100
0 20 40 60 80 100 120 140 160 180 200
p = 0.50 p = 1.00 p = 1.50 p = 2.00 p = 2.50
(e)
Initial Capital
Vy? (x)
0 x∗ = 20 40 60 80 100
0 20 40 60 80 100 120
p = 0.50 p = 1.00 p = 1.50 p = 2.00 p = 2.50
(f )
Figure 4: The first row (a)–(c) shows the cost of social protection and the value function of a threshold strategy when Zi ∼ Kumaraswamy(3, 4), a = 0.10, b = 3, c = 0.40, λ = 1, x∗ = 20 for δ = 0.10, 0.20, 0.30, 0.40, 0.50. The second row (d)–(f) displays the cost of social protection and the value function of a threshold strategy when Zi ∼ Kumaraswamy(p, 4), a = 0.10, b = 3, c = 0.40,
λ = 1, δ = 0.25, x∗ = 20, y = 40 for p = 0.50, 1.00, 1.50, 2.00, 2.50. Panels (a) and (d) display C(x) corresponding to Vy(x) with threshold y = 20, while (b) and (e) show Vy(x) with threshold y = 40.
Similarly, panels (c) and (f) show Vy⋆ (x) with the optimal threshold y⋆.
24

Remark 6.1. If τ y is infinite, the value function equals zero, since no capital transfer is required. In the methodology described in Section 6.1, we truncate time: if τ y > T , for sufficiently large T , we treat τ y as infinite. This approximation is reasonable due to the discounting effect.
Example 6.1. Let us consider the situation in which the remaining proportion of capital follows a Kumaraswamy distribution; that is, Zi ∼ Kumaraswamy(p, q), case for which the c.d.f is GZ(z) =
1 − (1 − zp)q and the p.d.f. is gz(z) = pqzp−1(1 − zp)q−1 for 0 < z < 1, where p > 0 and q > 0. Clearly, under this assumption, deriving an analytical solution to the IDE (4.1) becomes significantly more difficult; hence, alternative methods as the Monte Carlo simulation methodology presented in this section are required to derive the value function of a threshold strategy.
20 22 24 26 28 30
p
0 2 4 6 8 10
δ = 0.10 δ = 0.20 δ = 0.30 δ = 0.40 δ = 0.50
Figure 5: The optimal threshold y⋆ when Zi ∼ Kumaraswamy(p, 4), a = 0.10, b = 3, c = 0.40,
λ = 1, x∗ = 20 for different values of the discount rate δ.
Figure 4 displays the cost of social protection and the value function of a threshold strategy for the case described in Example 6.1. The 99% confidence interval for the functions is included for reference. The figures exhibit the same behavior as those presented in the examples of Section 5. It is worth noting, however, that Figures 4d–4f display higher costs than Figures 2d–2f. This result is not unexpected, since the expected value of the remaining proportion of capital modelled with the Kumara-
swamy distribution (μ KUMARASWAMY = (q · Γ (1 + 1/p) · Γ (q)) /Γ (1 + 1/p + q)) used in this example is lower than that obtained with the Beta distribution (μ BETA = α/(α + 1)) used in Section 5. The optimal thresholds in Figures 4c (for δ = 0.10, 0.20, 0.30, 0.40, 0.50) and 4f (for p = 0.50, 1.00, 1.50, 2.00, 2.50) are given by y⋆ = 29.28, 25.73, 23.79, 21.45, 20 and y⋆ = 20, 20, 20,21.18, 23.85, respectively.
25

7 Microinsurance
We consider microinsurance as a complementary instrument within social protection strategies (see, for example, Churchill and Matul (2012)). This section examines its role alongside CT programmes by considering three types of coverage: (i) proportional, (ii) excess-of-loss (XL), and (iii) total-loss.
Let R : [0, 1] → [0, 1] be the retained loss function, satisfying 0 ≤ R(u) ≤ u and R(0) = 0. This function represents the portion of the loss borne by the household when there is a loss of u = 1 − z ∈ [0, 1] per unit of capital. Consequently, following a loss, the capital of a household changes from Xτi to (1 − R(u)) · Xτi after the loss. The insurer calculates the premium rate using the expected value principle. That is,
pR = (1 + γ) · λ · E [1 − Z − R(1 − Z)] , (7.1)
where γ > 0 is the safety loading per unit of capital. The critical capital is now given by
x∗R = b
b − pR
x∗ ≥ x∗, (7.2)
since x∗ = I∗/b and x∗R = I∗/ (b − pR), where I∗ represents the critical income and, to ensure that poverty does not occur with certainty, we further assume that b > pR (see Kovacevic and Pflug (2011)). Moreover, we have the following,
rR = (1 − a) · (b − pR) · c = (1 − a) · b b − pR
b · c = r b − pR
b < r, (7.3)
since r = (1 − a) · b · c. It is clear that the optimal problem of capital lump-sum transfers with microinsurance can be viewed as the problem without insurance coverage, discussed in previous sections, but now considering rR < r instead of r, the critical capital x∗R > x∗ instead of x∗, and the cumulative distribution function of the remaining proportion of capital GRW ≤ GZ instead of
GZ . Here, GRW denotes the c.d.f. of the remaining proportion of capital, W = 1−R(1−Z), retained by the household after a loss. In this case, the infinitesimal generator of the process is given by
AR(f )(x) = rR(x − x∗R)+f ′(x) − λf (x) + λ
Z1
0
f (x · (1 − R(1 − z)) dGZ (z)
= rR(x − x∗R)+f ′(x) − λf (x) + λ
Z1
0
f (x · w) dGRW (w),
26

where
GRW (w) = P(W ≤ w) = P(1 − R(1 − Z) ≤ w).
Let us call: h(z) := 1 − R(1 − z). This function is non-decreasing on z and h(z) ≥ z. In the case that the function h: [0, 1] → [1 − R(1), 1] is invertible, and calling w = h(z), if w ≥ 1 − R(1), it yields
GRW (w) = P(W ≤ w) = P(1 − R(1 − Z) ≤ w) = P(Z ≤ h−1(w)).
Hence,
GRW (w) = GZ (h−1(w)) if 1 − R(1) ≤ w ≤ 1,
0 if w < 1 − R(1). (7.4)
If h is non-invertible we will obtain GRW in each special case.
7.1 Proportional Microinsurance
In the proportional case, let η denote the fraction of the household’s capital lost after a proportional loss of u. That is, R(u) = ηu, where η = 0 and η = 1 mean total and no insurance cover, respectively (with R(1) = η). The premium rate per unit of capital in this case is given by
pR = (1 + γ) · λ · E [1 − Z − η(1 − Z)] = (1 + γ) · λ · (1 − η) · (1 − E [Z]). (7.5)
Thus, we have,
h(z) = 1 − R(1 − z) = 1 − η(1 − z) = w,
and therefore, h is invertible with
h−1(w) = 1
η (w + η − 1) .
Then, from (7.4) we get
27

GRW (w) =
(
GZ 1
η (w + η − 1) if 1 − η ≤ w ≤ 1, 0 if w < 1 − η,
which is continuous if GZ continuous. Moreover, we also have the following,
Z1
0
f (x · w) dGRW (w) =
Z1
1−η
f (x · w) dGZ
1
n (w + η − 1) .
Example 7.1. We consider a household that faces capital losses, where the remaining proportion of capital follows a Beta(α, 1) distribution; that is, Zi ∼ Beta(α, 1). This corresponds to the case discussed in Section 5. In addition, we now assume that the household acquires proportional microinsurance coverage. Under this setting, the value function associated with a threshold strategy (together with its optimal threshold) can be estimated via the Monte Carlo procedure described in detail in Secti-
on 6. Specifically, let Y ∼ U nif [0, 1]. Then Z = Y 1/α follows a Beta(α, 1) distribution. Under proportional microinsurance coverage, the remaining proportion of capital is given by
W = 1 − R(1 − Z) = 1 − η(1 − Z).
Hence, 1 − η ≤ W ≤ 1, and can equivalently be written as
W = 1 − η(1 − Y 1/α). (7.6)
Therefore, in the Monte Carlo simulations, we now consider the sequence (τn, Wn), where Wn is given by (7.6).
Figure 6 presents the value function of a threshold strategy with the optimal threshold (y⋆) for a household with proportional microinsurance coverage. Figures 6a and 6b show that the value function increases with both a higher fraction of the household’s capital lost after a proportional loss (η) and a higher loading factor (γ), respectively. This result is expected, as lower insurance coverage (i.e., larger values of η, where η = 1 indicates no insurance coverage) requires governments to inject -
larger amounts of capital. Similarly, higher values of γ increase the premium rate (7.5), which in turn reduces the household’s capital growth rate (7.3) and raises the critical capital level (7.2), thereby increasing the need for government injections.
Although lower insurance coverage reduces the premiums paid by households (thereby reducing the need for government injections), purchasing proportional microinsurance coverage plays an important role in reducing the size of government injections required. Moreover, all the lines in Figure 6 lie below the blue solid line in Figure 2c, indicating that adding proportional microinsurance coverage for households helps reduce the government’s cost of capital transfers. The optimal thresholds in Figures-
 6a (for η = 0.60, 0.70, 0.80, 0.90, 1.00) and 6b (for γ = 0.50, 1.50, 2.50, 3.50, 4.50) are given by y⋆ = 28.09, 27.70, 27.38, 28.15, 26.16 and y⋆ = 28.38, 30.67, 33.42, 39.98, 45.56, respectively.
28

Remark 7.1. It is important to note that when the insurance premium pR is close in value to the income generation rate b (while still satisfying the assumption that b > pR), the denominator of
Equation (7.2) tends to zero, and consequently, the new poverty line x∗R approaches infinity. In this case, and for that reason, microinsurance does not reduce the social protection costs borne by the government. However, this situation is not very realistic, as a household would not allocate all of its income to the payment of an insurance premium. In fact, in our analyses, we observed that cost reductions failed to materialise only in those scenarios where the premium was extremely close to the -
income generation rate. Conversely, social protection costs were effectively reduced for reasonably high but still feasible premium levels (corresponding to high values of γ in our example). Therefore, microinsurance contributes to lowering social protection costs in realistic settings where premiums remain economically attainable for households.
Initial Capital
Vy? (x)
0 x∗ = 20 40 60 80 100
0 20 40 60 80
η = 0.60 η = 0.70 η = 0.80 η = 0.90 η = 1.00
(a)
Initial Capital
Vy⋆ (x)
0 x∗ = 20 40 60 80 100
0 20 40 60 80
γ = 0.50 γ = 1.50 γ = 2.50 γ = 3.50 γ = 4.50
(b)
Figure 6: The value function of a threshold strategy with the optimal threshold, Vy⋆ (x), of a household with proportional microinsurance coverage when Zi ∼ Beta(α, 1), a = 0.10, b = 3,
c = 0.40, λ = 1, δ = 0.10, x∗ = 20, α = 1.25 for (a) fixed γ = 0.50 and different values of η and (b) fixed η = 0.50 and different values of γ.
7.2 Excess-of-Loss Microinsurance
Excess-of-Loss (XL) microinsurance covers losses only above a specified threshold (the retention limit) per unit of capital, leaving smaller losses to be managed by the insured. More precisely, in the XL case with retention limit l ∈ [0, 1], if there is a loss of u = 1 − z ∈ [0, 1] per unit of capital, the household looses
R(u) = u · 1{u≤l} + l · 1{u>l} = min{u, l},
29

per unit of capital. Thus, the microinsurance provider covers the following fraction of the capital:
u − R(u) = 0 · 1{u≤l} + (u − l) · 1{u>l} = (u − l) · 1{u>l}.
The premium rate per unit of capital, calculated according to the expected value principle, is therefore given by
pR = (1 + γ) · λ · E (1 − Z − l) · 1{Z<1−l} = (1 + γ) · λ ·
Z 1−l
0
(1 − z − l)dGZ (z).
It follows that
h(z) = 1 − min{1 − z, l} = max{1 − l, z},
for which no inverse exists. From (7.4), the c.d.f of W = max{1 − l, Z} is given by,
GRW (w) = 0 if w < 1 − l,
GZ (w) if w ≥ 1 − l,
which has an upward jump of GZ(1 − l) at 1 − l if > 0. We also obtain,
Z1
0
f (x · w) dGR(w) = f (x (1 − l)) · GZ (1 − l) +
Z1
1−l
f (x · w) dGZ (w)
Example 7.2. We revisit the case when Zi ∼ Beta(α, 1), as discussed in Section 5. Under excessof-loss (XL) microinsurance coverage, the remaining proportion of capital is given by
W = max{1 − l, Z}
= Z · 1{1−l≤Z} + (1 − l) · 1{1−l>Z}
= Y 1/α · 1{1−l≤Y 1/α} + (1 − l) · 1{1−l>Y 1/α},
where Y ∼ U nif [0, 1].
Figure 7 displays the value function of a threshold strategy with the optimal threshold y⋆ for a household with excess-of-loss microinsurance coverage. As expected, and consistent with the
30

proportional microinsurance case, the value function increases with both a higher retention limit per unit of capital (l) and a higher loading factor (γ).
Furthermore, as anticipated, the value function for the XL microinsurance coverage is higher than that of the proportional cover. This is consistent with the fact that the XL policy only covers the losses above the retention level per unit of capital, whereas the proportional policy covers a fixed fraction 1 − η of the loss. Consequently, the government would be expected to provide larger capital injections to households with XL microinsurance coverage.
Figure 7b also shows that the value function for the XL microinsurance is less sensitive with respect to the loading factor (γ) than in the proportional case, since the expected ceded loss is lower under the XL coverage. As highlighted before, because the expected ceded loss is higher under proportional microinsurance, the corresponding value function tends to be lower, as the required government injections are smaller. As for the proportional case, all the lines in Figure 7 lie below the blue sol-
id line in Figure 2c, indicating that adding XL microinsurance coverage for households helps reduce the government’s cost of capital injections. The optimal thresholds in Figure 7a (for l = 0.60, 0.70, 0.80, 0.90, 1.00) and 7b (for γ = 0.50, 1.50, 2.50, 3.50, 4.50) are given by y⋆ = 28.57, 28.24, 26.46, 26.20, 26.25 and y⋆ = 28.75, 29.89, 30.90, 33.57, 34.61, respectively.
Initial Capital
Vy? (x)
0 x∗ = 20 40 60 80 100
0 20 40 60 80
l = 0.60 l = 0.70 l = 0.80 l = 0.90 l = 1.00
(a)
Initial Capital
Vy? (x)
0 x∗ = 20 40 60 80 100
0 20 40 60 80
γ = 0.50 γ = 1.50 γ = 2.50 γ = 3.50 γ = 4.50
(b)
Figure 7: The value function of a threshold strategy with the optimal threshold, Vy⋆ (x), of a household with excess-of-loss microinsurance coverage when Zi ∼ Beta(α, 1), a = 0.10, b = 3,
c = 0.40, λ = 1, δ = 0.10, x∗ = 20, α = 1.25 for (a) fixed γ = 0.5 and different values of l and (b) fixed l = 0.5 and different values of γ.
31

7.3 Total-Loss Microinsurance
In a total-loss microinsurance policy, the microinsurance provider covers everything from a proportional loss of L ∈ [0, 1] onwards. That is, the household looses R(u) = u · 1{u≤L} per unit of capital after experiencing a proportional loss of u = 1 − z while the microinsurance provider covers (per unit of capital),
u − R(u) = 0 · 1{u≤L} + u · 1{u>L} = (1 − z) · 1{1−z>L} = (1 − z) · 1{z<1−L}.
Hence, from (7.1), the premium rate per unit of capital is given by,
pR = (1 + γ) · λ · E (1 − Z) · 1{z<1−L} = (1 + γ) · λ ·
Z 1−L
0
(1 − z)dGZ (z),
which is greater than the premium rate of the excess-of-loss insurance when l = L. Moreover,
h(z) = 1 − (1 − z) · 1{z≥1−L} = z · 1{z≥1−L} + 1{z<1−L},
which is non-invertible. Then, from (7.4), it yields,
GRW (w) =



0 if 0 ≤ w < 1 − L, GZ (w) − GZ (1 − L) if 1 − L ≤ w < 1, 1 if w = 1,
which is continuous at w = 1 − L and has an upward jump of GZ(1 − L) at w = 1. In addition, we have the following,
Z1
0
f (x · w) dGRW (w) =
Z1
1−L
f (x · w) dGRW (w) =
Z1
1−L
f (x · w) dGZ (w) + f (x) · GZ (1 − l).
Example 7.3. Let Zi ∼ Beta(α, 1). Under total-loss insurance coverage, the remaining proportion of capital can be expressed as
W = 1 − R(1 − Z) = Y 1/α · 1{Y 1/α≥1−L} + 1{Y 1/α<1−L},
32

with Y ∼ U nif [0, 1].
The value function of a threshold strategy with the optimal threshold y⋆ for a household under a total-loss microinsurance policy is shown in Figure 8. The total-loss coverage exhibits behaviour consistent with the proportional and excess-of-loss microinsurance policies, as the value function increases with both the loss level (L) and the loading factor (γ). Under this type of microinsurance, extremely large losses (those exceeding values of L which are close to one) are fully covered by the insur-
er. Consequently, the government’s expenditure to catastrophic shocks affecting households is reduced.
This mechanism explains why, for higher values of η and L, the value function under the proportional and total-loss coverages are very similar, as the government is required to inject a smaller share of the household’s loss. That is, under the proportional policy, a small portion of the household’s losses is absorbed by the insurer (for higher values of η), while the likelihood of a catastrophic event exceeding the threshold L (and thus triggering full coverage under the total-loss policy) is rela-
tively low (for higher values of L). On the other hand, the value function under total-loss microinsurance is lower than that under proportional coverage for lower values of η and L, as it becomes more likely that the household experiences losses exceeding L, which are fully covered by the insurer. As a result, the government needs to provide smaller capital injections. The optimal thresholds in Figure 8a (for L = 0.60, 0.70, 0.80, 0.90, 1.00) and 8b (for γ = 0.50, 1.50, 2.50, 3.50, 4.50) are give-
n by y⋆ = 27.47, 28.07, 27.26, 27.24, 26.22 and y⋆ = 27.76, 31.25, 36.87, 44.56, 55.46, respectively.
Initial Capital
Vy⋆ (x)
0 x∗ = 20 40 60 80 100
0 20 40 60 80
L = 0.60 L = 0.70 L = 0.80 L = 0.90 L = 1.00
(a)
Initial Capital
Vy? (x)
0 x∗ = 20 40 60 80 100
0 20 40 60 80 100
γ = 0.50 γ = 1.50 γ = 2.50 γ = 3.50 γ = 4.50
(b)
Figure 8: The value function of a threshold strategy with the optimal threshold, Vy⋆ (x), of a household with total-loss microinsurance coverage when Zi ∼ Beta(α, 1), a = 0.10, b = 3, c = 0.40,
λ = 1, δ = 0.10, x∗ = 20, α = 1.25 for (a) fixed γ = 0.5 and different values of L and (b) fixed L = 0.5 and different values of γ.
33

8 Conclusion
This article examines social assistance programmes, focusing in particular on cash transfers (CTs), from a stochastic control perspective. It employs the piecewise-deterministic Markov process introduced by Kovacevic and Pflug (2011) to model household capital and aims to optimise direct government transfers, defined as the expected discounted cost of maintaining a household’s capital above the poverty line through capital injections. The Hamilton-Jacobi-Bellman (HJB) equation associated with the -
stochastic control problem of determining the optimal transfer amount over time is derived. In certain special cases, the equation is solved analytically, yielding closed-form expressions for the expected discounted cost.
Our results indicate the existence of an optimal injection level above the poverty threshold, suggesting that resources are used more efficiently when CTs are preventive rather than reactive, since injecting capital into households when their capital is above the poverty line is less costly than doing so only after it falls below the poverty threshold.
Building on this framework, we further examine the combination of microinsurance and CT programmes to assess how these two instruments can jointly enhance social protection outcomes. While CTs provide immediate support to households by maintaining their capital above certain threshold (such as the poverty line or a higher reference level), microinsurance offers risk-transfer mechanisms that reduce the magnitude and impact of adverse shocks on household capital in exchange for a premium paid by the-
 household. Our results, consistent with previous studies employing similar techniques and models (e.g., Flores-Contró (2025)), suggest that blending these two instruments can generate complementary effects, leading to more cost-efficient CT policies and reducing the overall fiscal burden on governments.
It is important to emphasise that this study is theoretical in nature and does not rely on empirical data. As with any model-based analysis, certain limitations should be acknowledged. In particular, the framework does not account for potential behavioural changes among households that might occur once they become aware that their capital level is approaching the threshold for cash transfer eligibility, which is a tendency that has been observed in other studies (see, for example, Firpo et al. (20-
14) and Habimana et al. (2021)). Of course, this represents one of several limitations that could be highlighted. A natural avenue for future research is therefore the collection and analysis of empirical data to determine whether the theoretical results obtained here are supported by realworld evidence. Such empirical validation would not only strengthen the robustness of the model but also provide valuable insights for designing effective and adaptive social protection strategies.
References
[1] Albrecher, H., H. U. Gerber, and E. S. W. Shiu (2011). The Optimal Dividend Barrier in the Gamma–Omega Model. European Actuarial Journal 1 (1), 43–55.
[2] Asmussen, S. and H. Albrecher (2010). Ruin Probabilities. Singapore: World Scientific.
[3] Azaïs, R. and A. Genadot (2015). Semi-Parametric Inference for the Absorption Features of a Growth-Fragmentation Model. TEST 24 (2), 341–360.
34

[4] Azcue, P. and N. Muler (2014). Stochastic Optimization in Insurance: A Dynamic Programming Approach. New York Heidelberg Dordrecht London: Springer.
[5] Bardi, M. and I. Capuzzo-Dolcetta (1997). Optimal Control and Viscosity Solutions of HamiltonJacobi-Bellman Equations. Systems & Control: Foundations & Applications. New York: Springer Science+Business Media.
[6] Bellman, R. (1954). Dynamic Programming and a New Formalism in the Calculus of Variations. Proceedings of the National Academy of Sciences 40 (4), 231–235.
[7] Churchill, C. (2006). Protecting the Poor: A Microinsurance Compendium — Volume I. Geneva, Switzerland: International Labour Organization (ILO).
[8] Churchill, C. and M. Matul (2012). Protecting the Poor: A Microinsurance Compendium Volume II. Geneva, Switzerland: International Labour Organization (ILO).
[9] Crandall, M. G. and P.-L. Lions (1983). Viscosity Solutions of Hamilton-Jacobi Equations. Transactions of the American Mathematical Society 277 (1), 1–42.
[10] Department for International Development (DFID) (2006). Social Protection in Poor Countries. Social Protection Briefing Note Series 1.
[11] Farrington, J. and R. Slater (2006). Introduction: Cash Transfers: Panacea for Poverty Reduction or Money Down the Drain? Development Policy Review 24 (5), 499–511.
[12] Firpo, S., R. Pieri, E. Pedroso, and A. P. Souza (2014). Evidence of Eligibility Manipulation for Conditional Cash Transfer Programs. EconomiA 15 (3), 243–260.
[13] Fleming, W. H. and H. M. Soner (2006). Controlled Markov Processes and Viscosity Solutions. United States of America: Springer Science+Business Media, Inc.
[14] Flores-Contró, J. M. (2025). The Gerber-Shiu Expected Discounted Penalty Function: An Application to Poverty Trapping. Scandinavian Actuarial Journal , 1–22.
[15] Flores-Contró, J. M. and S. Arnold (2024). The Role of Direct Capital Cash Transfers Towards Poverty and Extreme Poverty Alleviation - An Omega Risk Process. Scandinavian Actuarial Journal 2024 (8), 781–812.
[16] Flores-Contró, J. M., K. Henshaw, S.-H. Loke, S. Arnold, and C. Constantinescu (2025). Subsidizing Inclusive Insurance to Reduce Poverty. North American Actuarial Journal 29 (1), 44–73.
[17] Garcia, M. and C. M. T. Moore (2012). The Cash Dividend: The Rise of Cash Transfer Programs in Sub-Saharan Africa. Directions in Development - Human Development. Washington, D.C.: The World Bank.
[18] Habimana, D., J. Haughton, J. Nkurunziza, and D. M.-A. Haughton (2021). Measuring the Impact of Unconditional Cash Transfers on Consumption and Poverty in Rwanda. World Development Perspectives 23, 100341.
[19] Handa, S. and B. Davis (2006). The Experience of Conditional Cash Transfers in Latin America and the Caribbean. Development Policy Review 24 (5), 513–536.
35

[20] Harvey, P. (2005). Cash and Vouchers in Emergencies. London, United Kingdom: Overseas Development Institute.
[21] Henshaw, K., J. M. Ramirez, J. M. Flores-Contró, E. A. Thomann, S. H. Loke, and C. D. Constantinescu (2023). On the Impact of Insurance on Households Susceptible to Random Proportional Losses: An Analysis of Poverty Trapping. Working Paper .
[22] International Association of Insurance Supervisors (IAIS) (2015). Issues Paper on Conduct of Business in Inclusive Insurance.
[23] Keen, M. (1992). Needs and Targeting. The Economic Journal 102 (410), 67–79.
[24] Kovacevic, R. M. and G. C. Pflug (2011). Does Insurance Help to Escape the Poverty Trap? — A Ruin Theoretic Approach. Journal of Risk and Insurance 78 (4), 1003–1027.
[25] Owusu-Addo, E., A. M. N. Renzaho, P. Sarfo-Mensah, Y. A. Sarpong, W. Niyuni, and B. J. Smith (2023). Sustainability of Cash Transfer Programs: A Realist Case Study. Poverty & Public Policy 15 (2), 173–198.
[26] Protter, P. (1992). Stochastic Integration and Differential Equations: A New Approach. New York: Springer-Verlag Berlin Heidelberg.
[27] Schmidli, H. (2007). Stochastic Control in Insurance. London: Springer.
[28] Slater, R. (2011). Cash Transfers, Social Protection and Poverty Reduction. International Journal of Social Welfare 20 (3), 250–259.
[29] Slater, R. and J. Farrington (2010). Appropriate, Achievable and Acceptable: A Practical Tool for Good Targeting. London: ODI.
[30] Soner, H. M. (1988). Optimal Control of Jump-Markov Processes and Viscosity Solutions. In Stochastic Differential Systems, Stochastic Control Theory and Applications, pp. 501–511. Springer-Verlag.
[31] Tabor, S. R. (2002). Assisting the Poor with Cash: Design and Implementation of Social Transfer Programs. World Bank Social Protection Discussion Paper 223, 79–97.
[32] United Nations (2015). Transforming Our World: The 2030 Agenda for Sustainable Development. Number A/RES/70/1. New York: United Nations.
Appendices
A Mathematical Proofs
A.1 Proof of Lemma 3.1
Proof. By definition C(x) is non-increasing and non-negative. Let us show now that limx→∞ C(x) = 0. We have the following,
E e−δτn 1{τ ≥τn} ≤ E e−δτn = E
"
e−δ
n
P
i=1
(τi −τi−1 )
#
= E e−δτ1 n = δ
δ+λ
n
,
36

which yields: limn→∞ E e−δτn 1{τ≥τn} = 0. Since C(x) is non-increasing, we have,
C(x) ≤
n
X
k=1
C (Xτk ) e−δτk 1τ =τk + C(0) · E e−δτn 1τ >τn ,
which leads to the following inequality,
0 ≤ C(x) ≤ nli→m∞ E
"n
X
k=1
C (Xτk ) e−δτk 1{τ =τk}
#
.
Now, if τ ≥ τ1,
Xτ1 = [(x − x∗) erτ1 + x∗] · Z1 ≥ (x − x∗) erτ1 · Z1.
Then, denoting
Uk = Z1 · Z2 · · · Zk
and FUk as the c.d.f. associated to Uk. It can be shown by induction that if τ ≥ τk,
Xτk ≥ (x − x∗) erτk · Uk − (k − 1)x∗er(τk−τ1).
For any k ≥ 1,
{τ = τk} ⊂
n
Xτ −
k < x∗o
⊂ Ak,
where
Ak := {(x − x∗) erτk Uk − (k − 1)x∗erτk < x∗} .
Hence, using that the function C is non-increasing,
37

E
"n
X
k=1
C (Xτk ) e−δτk 1τ =τk
#
≤ C(0) · E
"n
X
k=1
e−δτk 1Ak
#
.
Furthermore, we also have,
E
n
P
k=1
e−δτk 1Ak ≤ R ∞
0 e−δt n P
k=1
λk e−λt
(k−1)! tk−1FUk
x∗ +(k−1)x∗ ert
(x−x∗)ert dt
≤
n
P
k=1
FUk
x∗ +(k−1)x∗
(x−x∗) (E e−δτ1 ] k
≤ λ+δ
δ.
Thus, using the Bounded Convergence Theorem and since
xli→m∞ FUk
x∗ + (k − 1)x∗ert
(x − x∗) ert = FUk (0) = 0,
we have the result.
A.2 Proof of Lemma 3.3
Proof. Since St is non-decreasing and left continuous, it can be written as
ST =
ZT
0
dStc + X
St ̸=St−
t≤T
(St − St− ), (A.2.1)
where Stc is a continuous and non-decreasing function. Take a non-negative continuously differen
tiable function u in [x∗, ∞). Since the function e−δtu(x) is continuously differentiable in [x∗, ∞), using the expression (A.2.1) and the change of variables formula for finite variation processes (see, for instance, Protter (1992)), we can write
u(Xτπ∗ )e−δτ∗ − u(x) = R τ∗
0− e−δtd (u(Xtπ)) − δ R τ∗
0 u(Xtπ− )e−δtdt
=
R τ∗
0 e−δtu′(Xtπ− ) r(Xtπ− − x∗)dt − δ R τ∗
0 e−δtu(Xtπ− )dt
+
P
τi≤τ ∗
e−δt u(Zi · Xπ
(τi)− ) − u(Xπ
(τi)− )
+
R τ∗
0 e−δtu′(Xtπ− )dStc + P
St ̸=St−
t≤τ ∗
e−δt (u(Xtπ) − u(Xtπ − (St − St− ))) .
(A.2.2)
38

One can also write,
R τ∗
0 u′(Xtπ− )e−δtdStc + P
St ̸=St−
t≤τ ∗
e−δt (u(Xtπ) − u(Xtπ − (St − St− )))
=
R τ∗
0 u′(Xtπ− )e−δtdStc + P
St ̸=St−
t≤τ ∗
R St−St−
0 u′(Xtπ − α)dα e−δt
= − R τ∗
0− e−δtdSt + R τ ∗
0 (1 + u′(Xtπ− ))e−δtdStc
+
P
St ̸=St−
t≤τ ∗
R St−St−
0 (1 + u′(Xtπ − α)) dα e−δt.
(A.2.3)
Analogously to Proposition 2.12 in Azcue and Muler (2014), we have that MT is a martingale with zero expectation. Hence, from (A.2.2) and (A.2.3) we obtain the result.
A.3 Proof of Lemma 4.1
Proof. It is straightforward to see that the function Vy is non-increasing and, by definition, that Vy(x) = y −x+Vy(y), for x < y. We now show that it is bounded. For x ≥ y, we have the following,
Vy(x) ≤ E
∞
P
k=1
ye−δτi
=y
∞
P
k=1
k
Q
i=1
E e−δ(τi−τi−1)
= y λ+δ
δ.
Hence, the result follows.
A.4 Proof of Lemma 4.2
Proof. Let us take y > x∗ and x2 > x1 ≥ y with x2 − x1 ≤ (x2 − x∗/2). Thus, this yields,
1
2 ≤ 1 − x2 − x1
x2 − x∗ ≤ 1.
Furthermore, since Vy is non-increasing we have,
0 ≤ Vy(x1) − Vy(x2). (A.4.1)
39

Now, consider T , such that (x1 − x∗) erT + x∗ = x2. Hence,
T=1
r ln x2 − x∗
x1 − x∗ .
Therefore, we have that,
Vy(x1) ≤ Vy(x2) · P(τ1 > T ) + Vy(0) · P(τ1 ≤ T ),
which yields,
Vy(x1) − Vy(x2) ≤ 1 − 1 − x2−x1
x2 −x∗
λ1
r (Vy(0) − Vy(x2))
≤ 1 − 1 − x2−x1
x2 −x∗
λ1
r Vy(0).
(A.4.2)
We next define the following function,
g(h) = 1 − 1 − h
x2 − x∗
λ1
r
,
with derivative given by,
g′(h) = λ
r 1− h
x2 − x∗
λ
r −1 1
x2 − x∗ .
So, for h < (x2 − x∗) /2, if λ
r − 1 ≥ 0, we have,
g′(h) ≤ λ
r
1
x2 − x∗ ≤ λ
r
1
y − x∗ ,
and, if λ
r − 1 < 0,
g′(h) ≤ λ
r
1
x2 − x∗ · 21− λ
r≤ λ
r
1
y − x∗ · 21− λ
r.
As a consequence, from (A.4.2) and (A.4.1), Vy is (globally) Lipschitz for y > x∗. The same proof
holds for C(x) in any set [w, ∞) ⊂ (x∗, ∞) with w > x∗.
40

A.5 Proof of Lemma 4.3
Proof. First, we note that the function C is continuous at [0, x∗) since is linear. Also, it is continuous in (x∗, ∞) since it is locally Lipschitz by Lemma 4.2. Moreover, we have by definition of C,
hli→m0− C(x∗ + h) = C(x∗).
Thus, it only remains to show that limh→0+ C(x∗ + h) = C(x∗). Take h > 0 and let us consider the
(uncontrolled) capital processes Xt0 and Xt1, starting with initial capital x0 = x∗ and x1 = x∗ + h, respectively. We stop the processes at τ1 (the time of the first loss event). Thus, we have
Xτ01 = Z1 · x∗ < x∗ (A.5.1)
and that
Xτ11 = Z1 · (x∗ + herτ1 ) < x∗ (A.5.2)
if and only if
Z1 ≤ x∗
x∗ + herτ1 .
Then, defining
Ah = Z1 ≤ x∗
x∗ + herτ1 ,
we have
hli→m0+ P(Ach) = hli→m0+
Z +∞
0
1 − GZ
x∗
x∗ + hert λe−λtdt = 0. (A.5.3)
Consider now the threshold strategy with threshold x∗. From (A.5.1) and (A.5.2), in the event that Z1 ≤ x∗/ (x∗ + herτ1 ), the transfer at τ1 for the process Xt1 is equal to x∗ − x∗ · Z1 and for the
process Xt2 is x∗ − (x∗ + herτ1 ) · Z1. Hence, we obtain
C(x∗) − C(x∗ + h) ≤ E
h
herτ1 Z11{Ah} + C(x∗)e−δτ1 1{Ach}
i
≤ E herτ1 Z11{Ah}e−δτ1 + C(x∗) · P(Ach) .
Also, we have that
41

E herτ1 Z11{Ah}e−δτ1 =
Z∞
0
λhert
Z x∗
x∗ +hert
0
zdGZ (z)
!
e−(λ+δ)tdt,
and,
λhert
Z x∗
x∗ +hert
0
zdG(z) ≤ hert x∗
x∗ + hert ≤ x∗.
Thus, taking h → 0+, using the Bounded Convergence Theorem and from (A.5.3), we obtain the result.
Pablo Azcue
Departamento de Matemáticas Universidad Torcuato Di Tella Av. Figueroa Alcorta 7350 (C1428BIJ) Ciudad de Buenos Aires, Argentina E-Mail : pazcue@utdt.edu ORCiD: https://orcid.org/0000-0003-2624-1841
Corina Constantinescu
Institute for Financial and Actuarial Mathematics Department of Mathematical Sciences University of Liverpool Liverpool, United Kingdom
E-Mail : c.constantinescu@liverpool.ac.uk ORCiD: https://orcid.org/0000-0002-5219-3022
José Miguel Flores-Contró
Institute of Statistics, Biostatistics and Actuarial Science – ISBA Louvain Institute of Data Analysis and Modeling – LIDAM Catholic University of Louvain Louvain-la-Neuve, Belgium
E-Mail : jose.flores@uclouvain.be ORCiD: https://orcid.org/0000-0001-9332-8811
Nora Muler
Departamento de Matemáticas Universidad Torcuato Di Tella Av. Figueroa Alcorta 7350 (C1428BIJ) Ciudad de Buenos Aires, Argentina E-Mail : nmuler@utdt.edu ORCiD: N/A
42

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:06.876Z
- **Text Length:** 79138 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 42 of 42
