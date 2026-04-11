# PDF Document: Lechowicz et al. - 2025 - Online Smoothed Demand Management.pdf

**File Path:** Lechowicz et al. - 2025 - Online Smoothed Demand Management.pdf

**Processed Date:** 2026-02-10T18:18:44.685Z

**File Size:** 2431.10 KB

**Total Pages:** 69

**Extracted Pages:** 69

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3282

**Title:** Online Smoothed Demand Management

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Online Smoothed Demand Management
Adam Lechowicz * Nicolas Christianson† Mohammad Hajiesmaili‡
Adam Wierman§ Prashant Shenoy¶
November 25, 2025
Abstract
We introduce and study a class of online problems called online smoothed demand management (OSDM), motivated by paradigm shifts in grid integration and energy storage for large energy consumers such as data centers. In OSDM, an operator makes two decisions at each time step: an amount of energy to be purchased, and an amount of energy to be delivered (i.e., used for computation). The difference between these decisions charges (or discharges) the operator’s energy storage (e.g., a battery). Two typ-
es of demand arrive online: base demand, which must be covered at the current time, and flexible demand, which can be satisfied at any time steps before a demand-specific deadline ∆t. The operator’s goal is to minimize a cost (subject to the constraints above) that combines a cost of purchasing energy, a cost for delivering energy (if applicable), and smoothness penalties on the purchasing and delivery rates to discourage fluctuations and encourage “grid healthy” decisions. OSDM generalizes severa-
l problems in the online algorithms literature while being the first to fully model applications of interest. We propose a competitive algorithm for OSDM called PAAD (partitioned accounting & aggregated decisions) and show it achieves the optimal competitive ratio. To overcome the pessimism typical of worst-case analysis, we also propose a novel learning framework for OSDM that provides guarantees on the worst-case competitive ratio (i.e., to provide robustness against nonstationarity) while allow-
ing end-to-end differentiable learning of the best algorithm on historical instances of the problem. We evaluate our algorithms in a case study of a grid-integrated data center with battery storage, showing that PAAD effectively solves the problem and end-to-end learning achieves substantial performance improvements compared to PAAD.
*University of Massachusetts Amherst. Email: alechowicz@cs.umass.edu †Stanford University. Email: christianson@stanford.edu ‡University of Massachusetts Amherst. Email: hajiesmaili@cs.umass.edu §California Institute of Technology. Email: adamw@caltech.edu ¶University of Massachusetts Amherst. Email: shenoy@cs.umass.edu
1
arXiv:2511.18554v1 [cs.DS] 23 Nov 2025

1 Introduction
The proliferation of renewable energy sources and grid-scale energy storage, the growth of power-hungry AI data centers, and the implementation of dynamic pricing schemes like timeof-use tariffs are fundamentally reshaping the landscape of how energy and compute infrastructures interact. These changes are prompting a paradigm shift in how systems interact with power grids, shifting from a model of passive consumption to one of active, intelligent demand management. The core challenge in demand man-
agement from an energy perspective is to better align the consumption of energy (e.g., from the grid) with external signals such as time-of-use prices, while meeting certain performance (e.g,. service-level agreement (SLA)) objectives on the demand side. Concurrently, there is a need to consider the “smoothness” of these decisions: recent reports suggest that data centers’ sudden large fluctuations in energy use are impacting power quality in U.S. grids [NMT24], and sudden changes in load are know-
n to cause cascading failures and even blackouts on the grid, such as the 2025 Iberian Peninsula blackout [PK25]. This prompts an additional objective of smooth decisions (e.g., gradual ramping up and down). Many techniques have been developed for this class of problems, with solution designs that are usually tailored to specific applications such as energy storage management [MNW+16] and HVAC control [KDL+21], among others. These techniques often rely on machine learning somewhere in the pipeline-
, e.g., to provide predictions for a model predictive controller [SFC+18, MHAA17], inform a day-ahead provisioning problem [YSW+25], or to directly make decisions (e.g., using a reinforcement learning agent) [ALDNL20]. While these problemspecific solutions show promise, they are seldom deployed in practice. One reason is that environments such as electricity markets are inherently nonstationary, making it difficult to develop heuristics that deal well with distribution shift [LBM+22] or come with -
rigorous performance guarantees. Another reason is that these approaches are typically developed with a single end application in mind, making generalization to other settings difficult. On the other side of the spectrum, there is a rich body of work in online algorithms [YHS+20, LCS+24, EYFKT01, YLIR24, CFJK22] on related problems that are sufficiently abstract to model many different applications, and have been studied under frameworks such as competitive analysis, which provides rigorous perfor-
mance guarantees. Despite this, however, there remains a gap between the existing models studied in the online algorithms literature and the complexity of real-world demand management problems – as of yet, no models exist that fully capture the moving pieces necessary to study the type of problem that arises in, e.g., a grid-integrated data center with local energy storage. Informed by these challenges, we introduce and study a new class of online optimization problems called online smoothed deman-
d management (OSDM). OSDM models the challenge faced by an operator who satisfies a stream of incoming demand by purchasing energy from a market with fluctuating prices (e.g., an electricity grid). We model several features motivated by practice, namely: (i) a mix of inflexible (base) and deferrable (flexible) demands, each with their own unique SLA constraints; (ii) opportunities to arbitrage using local energy storage (e.g., a battery), which may come at a cost; and (iii) a few smoothing cost mo-
dels for “unsmooth” behavior, penalizing large changes in both energy purchasing (ramping) and demand-side delivery. These costs capture some desired behavior for any algorithmic scheme from both the energy provider (e.g., grid) perspective, as well as the consumer’s perspective. In studying OSDM, we answer the following question:
Is it possible to design online algorithms for OSDM that manage the challenges of flexibility, uncertain demand, and penalties for unsmooth decisions while providing meaningful competitive guarantees?
Competitive (i.e., worst-case) guarantees are often overly pessimistic in practice, since realworld problem instances are not adversarial. In recent years, the area of learning-augmented
2

algorithms [LV18, KPS18, MV22] has expanded the online algorithms literature with techniques that can take additional information as input (e.g., predictions about the instance) to improve average-case performance while retaining worst-case guarantees for robustness against nonstationarities. While this paradigm has successfully been applied to problems that share similarities with OSDM [LCS+24, SLH+21], traditional learning-augmented designs make strong assumptions about the availability and lea-
rnability of suitable predictions, which face challenges in OSDM due to the multiple kinds and nonstationary sources of uncertainty (e.g., demand arrivals, deadlines, and market prices). Thus, we also ask:
Can we design data-driven algorithms for OSDM that directly learn from data (e.g., historical instances) to significantly improve performance while preserving worst-case guarantees?
1.1 Contributions
We obtain positive answers to both of the above questions, making the following contributions: In § 2, we formally introduce the OSDM problem, which captures several realistic features of demand management problems that arise in practice. To the best of our knowledge, OSDM is the first online optimization problem that simultaneously captures a mix of flexible and inflexible demands, inventory and/or energy storage dynamics, separate costs for procurement and delivery, and penalties that encourage -
“smooth” behavior. In § 4, we provide the first competitive algorithm for OSDM, which we call PAAD (Partitioned Accounting & Aggregated Decisions, see Algorithm 2). PAAD introduces a driver abstraction that splits OSDM into subproblems that can be solved independently and aggregated to form a globally competitive solution (Theorem 4.1). PAAD reflects, to the best of our knowledge, the most complex extension of the online pseudo-cost minimization algorithm design paradigm [SZL+21]; we employ multip-
le kinds and instances of threshold functions to decompose and accommodate the significant heterogeneity of the OSDM setting. PAAD achieves a worstcase competitive ratio that is sublinear in pmax/pmin (the ratio of the procurement price bounds) and linear in other parameters of the problem setting such as the switching and delivery cost magnitudes – in § 5, we give lower bounds that imply PAAD achieves the best-possible competitive ratio for OSDM under our assumptions. To improve average-case perf-
ormance and reduce the pessimism of our approach, in § 6 we present a learning framework for OSDM called PALD (Partitioned Accounting & Learned Decisions). Compared to existing work on learning-augmented algorithms, the OSDM setting brings unique challenges that make previously-considered techniques for integrating predictions impractical or ineffective. To address this challenge, PALD proposes a novel end-to-end differentiable learning framework that directly predicts the best algorithm parameter-
s (e.g., threshold functions) that minimize PALD’s cost on historical instances, while ensuring that the learned parameters satisfy a robustness certificate (see Theorem 6.1) that guarantees a bounded worstcase competitive ratio under adversarial instances, serving as a safeguard against nonstationarity. This framework will likely be of independent interest as a more flexible and expressive methodology to learn high-performing and robust algorithms across problem domains. Finally, in § 7, we prese-
nt a case study of OSDM in a simulation of a grid-integrated data center with co-located battery storage, using real electricity price data and production Alibaba traces [Ali18]. We show that PAAD solves the OSDM problem effectively in practice, and that PALD’s end-to-end learning capability significantly improves performance compared to PAAD using data-driven insights.
1.2 Related Work
Our study of OSDM is informed by and builds upon related work in online algorithms, learningaugmented algorithms, and relevant application areas. We briefly summarize these below.
3

Applications of Demand Management and Related Ideas. OSDM-like problems arise across multiple domains – below, we review some heuristic and control-theoretic approaches that have been proposed to solve these. Given forecasts (e.g., prices), a common approach is to solve an offline “day-ahead” optimization problem, as applied in battery arbitrage [MR16, ZLY+24, FAB+20], microgrids [SALT20, TBH+18], HVAC [YSW+25, ZZG+23], and sustainable computing [RKS+22, LOM17]. In online settings, a frequently-a-
pplied technique is model predictive control (MPC), which uses forecasts to solve a finite-horizon optimization problem at each time step. MPC has been applied to battery management [BMVN20, ChCCZ24, SCZ24, MHAA17], building systems [AJS14, SFC+18, BWW+22, MHHCZL+21], microgrids [MCOGLV+23, LRAGVB21], and data centers [WYY+23, LBL+18, MBD21]. Select works consider approaches that do not require predictions such as Lyapunov-based control [UUNS11, GF13, YJCQ15, SWLB21, SCY+23], ADMM for distributed -
storage [RMD22], feedback-based demand response [MNW+16], and stochastic optimization [NKW17, BAPWA+18]. These approaches are generally developed with a single application in mind, limiting their generalizability, and do not typically come with theoretical guarantees on performance, particularly in cases where predictions or stochastic models are used. Related Online Algorithms Problems. In the literature there are a few online problems that share structure with OSDM. Of these, perhaps the closest-
 related problem is online linear inventory management (OLIM) [YHS+20], which models the problem faced by an operator (e.g., a data center) with an inventory (e.g., battery) that must meet a demand at each time step, while minimizing their procurement cost subject to time-varying prices. Compared to OLIM, OSDM additionally models a delivery cost to serve demand (i.e., separate from procurement), smoothing penalties, and a mixture of base (inelastic) and flexible demand. A recent model called onlin-
e conversion with switching costs (OCS) [LCS+24] has modeled the problem faced by an operator procuring energy (e.g., an EV charger) that must meet a single flexible demand before a deadline (e.g., charging an EV by the end of the day), paying a switching cost when decisions change. OSDM generalizes this by including inflexible (i.e., base) demand constraints, delivery costs, and multiple flexible units with heterogeneous deadlines. Other formulations address energy storage without time-varying pr-
ocurement prices [KLQS16, MLCQ21] or microgrid scheduling with variable prices but no storage [LTC+13, HCCH16, ZHC+18]. Each component dynamic of OSDM has been studied in isolation: procurement and flexible demand via online knapsack and search [ZCL08, EYFKT01, Fun21], per-step demand via online matching [MSVV07, HTW24], and smoothness penalities via metrical task systems [BLS92, FL93] However, the combination of these in OSDM introduces new technical challenges in the design of robust and efficie-
nt algorithms that preclude the direct application of existing results (see, e.g., § 3). Online resource allocation problems [JL11, DJSW19, WJLM17, JTL+17, KST19, ZLW17, BKK23] are also related, though they usually assume a fixed (non-replenishable) resource. Some variants consider inventories [LW10, CMSLW21, CFJK22, HXX+22, HGGB23, YLIR24], but typically treat either demand or inventory evolution as exogenous, whereas in OSDM both are decisions.
2 Problem Formulation
In this section, we introduce the online smoothed demand management (OSDM) problem, provide motivating examples as context for our modeling, and state assumptions we place on the problem.
2.1 Online Smoothed Demand Management (OSDM)
Problem Statement. Consider an operator who makes decisions over a discrete time horizon t ∈ {1, . . . , T}. At each time step t, several inputs are revealed online. The first of these is a
4

market price for energy, denoted by pt ≥ 0. Furthermore, two types of demand arrive: a base (inflexible) demand bt ≥ 0 that must be satisfied immediately, and a flexible demand ft ≥ 0 that can be deferred until a specified deadline ∆t > t. Further, the operator can control the state of a local energy storage unit (e.g., a battery) with a maximum capacity of S ≥ 0. We denote the state of charge at time step t as st, where the initial storage state is empty (i.e., s0 = 0).1 At each time step t, the-
 operator must make two decisions without knowledge of the future. First, they must decide how much energy to purchase, denoted by xt ≥ 0. Second, they must decide how much energy to deliver to satisfy demand, denoted by zt ≥ 0. The delivery decision can use a combination of newly purchased energy and energy drawn from storage. The operator’s goal is to satisfy the above constraints while minimizing a cost consisting of four components: the cost of purchasing energy, penalties for an unsmooth purc-
hasing rate (e.g., a switching or tracking cost), a cost for delivering energy (which may depend on the storage state and the market price), and a penalty for an unsmooth delivery rate (we consider a switching cost). The offline (i.e., full time horizon) version of OSDM is formalized as follows:
[OSDM] min
{xt,zt}t∈[T] ∑T
t=1
h
pt xt
|{z}
purchase cost
+ D(zt, st−1, pt)
| {z }
delivery cost
i
+ ∑T+1
t=1
h
S (xt, xt−1) + δ|zt − zt−1|
| {z }
smoothing penalty
i
, (1)
s.t. st = st−1 + xt − zt, with 0 ≤ st ≤ S,
zt − st−1 ≤ xt ≤ zt + (S − st−1),
bt ≤ zt ≤ bt + ∑t
τ=1 fτ − ∑τ:∆τ<t fτ,
∑
t
τ=1 zτ ≥ ∑t
τ=1 bτ + ∑τ:∆τ≤t fτ, xt, zt, st ≥ 0, ∀t ∈ [T].
In the objective (1), δ ≥ 0 is a known coefficient for the delivery switching penalty, S (·) is a function that implements the desired smoothness penalty on purchasing decisions, and D(·) is a function that captures the delivery cost. For both of the latter terms, we consider several models inspired by real-world applications – see § 2.3 and § 2.4 for a discussion of each, respectively. We assume decisions outside of the time horizon are zero: x0 = z0 = 0 and xT+1 = zT+1 = 0.
As outlined above, the problem is subject to several constraints for all t ∈ [T]. In order, they are as follows: First, the storage state is governed by the inventory dynamics st = st−1 + xt − zt, and the state must remain within physical limits, i.e., 0 ≤ st ≤ S. OSDM models a “discharged” storage state as st = 0, but this can capture the more realistic case where st = 0 corresponds to a minimum charge level for the storage. Next, the amount of energy purchased, i.e., xt, must be sufficient to co-
ver the desired delivery decision, potentially drawing from storage, but cannot overfill the storage. These constraints are captured by zt − st−1 ≤ xt ≤ zt + (S − st−1). The delivery decision at time t (zt) must cover the base demand and is allowed to satisfy any flexible demand that has arrived but is not past due – this is captured by bt ≤ zt ≤ bt +
∑t
τ=1 fτ − ∑τ:∆τ<t fτ. Finally, the cumulative delivery decisions up to t must satisfy all base
demand and all flexible demand whose deadlines have passed: this is captured by ∑t
τ=1 zτ ≥
∑t
τ=1 bτ + ∑τ:∆τ≤t fτ. We summarize the key pieces of OSDM in Fig. 1. While (1) captures the offline version of the problem, our goal is to design an online algorithm that chooses {xt, zt} at each time step t without knowledge of the future online inputs of {pτ, bτ, fτ, ∆τ}τ>t. To do so, we follow the literature on online algorithms and competitive analysis [MMS88, BLS92] and evaluate performance via the competitive ratio [MMS88, BLS92], defined as follows:
Definition 2.1 (Competitive ratio). Let OPT(I ) denote the optimal offline cost for an arbitrary OSDM input instance I ∈ Ω (where Ω is the set of all feasible inputs), and let ALG(I ) denote the cost of an
1The assumption that the initial storage state is s0 = 0 is without loss of generality – our results hold when s0 > 0.
5

Figure 1: Diagram of the OSDM problem at a single (discrete) time step t. The demand manager specifies a purchasing decision xt, a delivery decision zt, and (implicitly) a storage state st. As a function of these decisions, they pay ➊ a purchasing cost ptxt, ➌ a smoothness penalty S (xt, xt−1) that discourages fluctuations in the purchasing rate, ➋ a delivery cost of serving demand D(zt, st−1, pt), and ➍ a switching penalty δ|zt − zt−1| that discourages fluctuations in the delivery rate.
online algorithm ALG over the same instance. ALG is said to be α-competitive if for all I, ALG(I) ≤ αOPT(I ) + C holds, where α ≥ 1 is the competitive ratio, and C ≥ 0 is an additive constant.
Note that a smaller competitive ratio implies that the online algorithm is guaranteed to be closer to the offline optimal solution. The competitive ratio is a worst-case performance metric for online algorithms; as such, bounds on this metric ensure robustness against nonstationarity in the underlying environment, which is crucial for the applications motivating OSDM. For instance, electricity prices are known to be volatile and non-stationary [QHG+24], and demand profiles may be non-stationary in-
 certain applications. However, algorithms optimized for competitive guarantees are often overly conservative in practice – to address this limitation in OSDM, we build on the learning-augmented algorithms literature [LV18, KPS18, MV22] to propose data-driven algorithms that can leverage historical data to significantly improve average-case performance while still maintaining worst-case competitive guarantees against non-stationary inputs. We discuss this further in § 6.
2.2 Motivating Applications
We present several demand management applications that can be modeled by OSDM, motivated by emerging grid integration problems. Owing to its generality, OSDM applies broadly across energy and operations domains. We focus here on the high-level mapping from problems to their OSDM instantiations, deferring a longer discussion to Appendix B.
Grid-integrated Data Center with Storage. Consider a grid-connected data center with local energy storage. At each time step t, the operator decides how much electricity to purchase (xt) from the grid at price pt, and how much energy to use to meet demand (zt); the difference is stored in or drawn from the battery with state st. Base demands bt represent e.g., interactive workloads that must be satisfied immediately, while flexible demands ft capture delay-tolerant batch jobs with deadlines ∆t > t-
. The operator minimizes their cost of electricity subject to a smoothing penalty (S(·)) that penalizes them for large fluctuations, as sudden shifts in load cause instability and even blackouts on the power grid [KMA25]. Additional penalties model the cost of discharging the battery (D(·)) to account for degradation, promote keeping the battery sufficiently charged to accommodate the risk of an outage, and smooth the rate of internal consumption (δ|zt − zt−1|) to reduce wear-and-tear on component-
s. Unlike
prior demand-management formulations [YHS+20], OSDM jointly captures both flexible and inflexible workloads and the need for smooth grid- and demand-side decisions. This application is the focus of our case study in § 7. Thermal Energy Demand Management. An operator manages a thermal energy system (for
6

example, district heating) with a local storage tank [Nat24]. At each time step t, the operator decides how much thermal energy to purchase (xt) at price pt and how much to deliver to meet demand (zt); the difference is stored in or drawn from the tank with state st. Base demands bt represent immediate thermal needs, while flexible demands ft can be deferred until a deadline ∆t > t. The operator minimizes the total cost to procure and deliver energy ptxt + D(·), subject to a smoothing penalty tha-
t models power grid stability needs (e.g., if electricity is used to generate thermal energy), since demand spikes can cause grid failure [MHK25]. An optional penalty on the delivery side δ|zt − zt−1| models wear-and-tear on thermal components.
Just-in-Time Manufacturing with Material Inventory. A factory converts raw materials into finished products using on-site inventory. At each step t, it decides how much material to purchase (xt) at price pt and how much product to produce/deliver (zt), maintaining warehouse state st. Base orders bt must be filled immediately, while flexible orders ft can be deferred until deadline ∆t > t. The objective is to minimize the purchase and processing cost ptxt + D(·), while smoothing the purchasing rate-
 (S (·)) and production rate (δ|zt − zt−1|). Flow Battery Storage Management. A large electricity consumer operates a grid-connected flow battery to shift energy usage [Bre19]. At each time t, the operator purchases electricity (xt) at price pt and delivers electricity to meet demand (zt), with battery charge state st. The goal is to minimize the total cost ptxt subject to a smoothing penalty informed by grid considerations as above, and accounting for delivery inefficiency through D(·), which cap-
tures system losses and auxiliary energy needs.
2.3 Modeling Smoothness Penalty
In OSDM, the smoothness penalty S(·) in Equation 1 captures an objective to make “smooth” purchasing decisions over time. This is often an important goal (see, e.g., the applications in § 2.2); for instance, industrial consumers like data centers can have electricity consumption patterns with large fluctuations that destabilize the grid and reduce power quality [NMT24]. Motivated by these considerations, we consider two natural models for the smoothness penalty S (·). First, we consider a switchin-
g cost model (with corresponding problem referred to as OSDM-S, hereinafter), where the penalty charges the operator proportionally to the change in purchasing decisions:
Definition 2.2 (Switching cost for purchasing decisions). In (1), let S (xt, xt−1) := γ|xt − xt−1|, where γ ≥ 0 is a known coefficient.
Second, we consider a tracking cost model (OSDM-T, hereinafter), where the goal is not just to smooth the purchasing rate, but to follow an externally-provided target signal {at}t∈[T]. This is motivated by recent interest in programs where grid operators provide load shaping signals to large electricity consumers to encourage consumption patterns that aid grid stability [JCYW14, AL17]. This target signal may be known in advance (e.g., day-ahead) or revealed online (e.g., real-time), and the tracki-
ng cost penalizes the operator based on the deviation from this target signal.
Definition 2.3 (Tracking cost for purchasing decisions). In (1), let S (xt, xt−1) := η|xt − at|, where η ≥ 0 is a tracking cost coefficient known a priori, and at ≥ 0 is a target signal revealed at time t.
2.4 Modeling Delivery Cost
The delivery cost D(·) in Equation 1 represents the additional expense incurred when delivering energy to the consumer. While often negligible (D(·) = 0), it can vary significantly across applications. In a thermal energy system, for instance, efficiency improves when the reservoir (i.e., storage) is fuller or when the temperature differential is small, implying a delivery cost
7

that decreases with the storage state and depends on energy price due to pumping or heatexchange losses [RHP19]. In a just-in-time manufacturing context, D(·) may reflect a fixed processing cost independent of storage or price. On the other hand, in a flow battery storage system, using stored energy requires some additional input energy to drive pumps and circulate liquid [Bre19], yielding a cost that increases with discharge volume and depends on the contemporaneous energy price. Given this dive-
rsity of cases, we model a general class of monotone, price-dependent delivery costs as follows.
Definition 2.4 (Monotone affine price-dependent delivery cost). Let c ≥ 0 and ε ≥ 0 be delivery cost coefficients known a priori, where c + ε ≤ 1. We say that the delivery cost D(·) in (1) is a monotone affine price-dependent delivery cost if it satisfies one of the following:
(a) (Increasing case) Let D(zt, st−1, pt) := (cst−1/S + ε)ptzt – this delivery cost increases linearly from εptzt to (c + ε)ptzt as the storage state increases from st−1 = 0 to st−1 = S.
(b) (Decreasing case) Let D(zt, st−1, pt) := (c − cst−1/S + ε)ptzt – this delivery cost decreases linearly from (c + ε)ptzt to εptzt as the storage state increases from st−1 = 0 to st−1 = S.
Note that a constant price-dependent delivery cost is captured as a special case when c = 0.
In the rest of this paper, we present results for the OSDM-S and OSDM-T problems using the decreasing monotone delivery cost case defined in Def. 2.4(b), because it is the most challenging case to analyze: in Theorem 5.2, we show that given the same values of c and ε, the best achievable competitive ratios for the increasing case in Def. 2.4(a) imply it is a strictly easier problem than the decreasing case. Thus, our results primarily focus on this “hard case” and hold for the general monotone def-
inition in Def. 2.4. We note that setting the delivery cost according to Def. 2.4(b) with c > 0 results in a non-convex (bilinear) objective in (1) due to the dependence on st−1.2
2.5 Assumptions and Notation
In this section, we summarize our main assumptions and additional notation for OSDM. First, we assume that the market prices are bounded: pt ∈ [pmin, pmax] ∀t ∈ [T], where 0 < pmin ≤ pmax. pmin and pmax are known to the operator a priori. This is a standard assumption in the literature on online search and related problems such as online knapsack [EYFKT01, ZCL08, LW10]. It is known that without such an assumption, no online algorithm can achieve a bounded competitive ratio [EYFKT01, LPS08]. We als-
o assume that it is always feasible to satisfy demand as it becomes due, i.e., if necessary, it is always possible to set xt = bt + ∑τ:∆τ=t fτ and zt = bt + ∑τ:∆τ=t fτ for any t ∈ [T]. This is a natural assumption that ensures the problem is well-posed – without such an assumption, an online algorithm can be backed into a corner where feasibility becomes impossible. While we do not consider rate constraints in our setting of OSDM (i.e., constraints on the amount of energy that can be purchased or -
delivered at any time), this gives an implicit condition relevant to such constraints–see discussion of future work in § 8 for more on this point. We assume that the switching cost coefficients are not “too large” relative to the prices.
Formally, γ and δ satisfy γ + δ ≤ pmax−pmin
2 . Note that if γ + δ > pmax−pmin
2 , then competitive decision-making is simple: an algorithm should choose decisions that minimize the total switching cost (i.e., by spreading decisions evenly over time). Thus, we focus on the “interesting regime” where an online algorithm must balance the purchasing and switching costs. As given in Def. 2.4, we assume the delivery cost coefficients c ≥ 0 and ε ≥ 0 satisfy 0 ≤ c + ε ≤ 1. This ensures that the delivery cost is not “too large” relative to the purchasing
2The online problem is unaffected by non-convexity because the state st−1 is a fixed value at time t (not a decision variable).
8

cost, and is realistic in the target applications of OSDM, where the delivery cost (e.g., the added cost to serve demand using stored energy) is a fraction of the original cost to procure said energy. In OSDM-T, we make two additional assumptions related to the target signal and the tracking cost. First, we assume that the cumulative target is at most the demand, i.e., ∑tT=1 at ≤
∑tT=1(bt + ft). This ensures that ∑t∈[T] at is reasonable relative to the total demand over the horizon. Without this assumption, there are unrealistic OSDM instances with, e.g., a small amount of demand and a consistently large target signal that force any algorithm to pay a large penalty for failing to have enough demand to meet the target. Finally, we assume that the tracking cost
coefficient η satisfies η ≤ pmax−pmin
2 – this ensures that the tracking cost coefficient is not “too
large” relative to the range of market prices. If this assumption is violated (i.e., if η > pmax−pmin
2 ),
then it is always preferable (from a cumulative purchasing cost perspective) to set xt = at wherever possible. Thus, we focus on the “interesting regime” where an online algorithm balances the tracking cost and the purchasing cost, allowing for slight deviations from the target signal when they are advantageous. Throughout the paper, we use the shorthand notation Φ(w, z) and Ψ(w, z) to denote the
definite integrals of functions R z
w φ(u) du and R z
w ψ(u) du, respectively, for any 0 ≤ w ≤ z. We
also use the shorthand P := (1 + c + ε)pmax, κ := γ + δ, and ω := (1+c+ε)
(1+ε) .
3 Warmup and Preliminary Results
In this section, we start by discussing similarities between OSDM and related problems in the literature. We review one such problem and an existing algorithm for it, showing that an extension of this algorithm to OSDM fails to achieve a good competitive ratio, even in a simplified setting – this warmup result illustrates the complexity of the problem and motivates observations that we use in the design of our main algorithm, PAAD, described in § 4.
Relation to Online Conversion with Switching Costs. A much-simplified version of the OSDM problem defined in § 2 has been studied under the name of online conversion with switching costs (OCS) [LCS+24]. This problem is a special case of OSDM-S where there is a single unit of flexible demand (whose size is known a priori) that must be satisfied by the end of the time horizon (i.e., f0 = 1 and ∆0 = T). OCS also does not consider base demand (i.e., bt = 0 for all t), there is no storage (i.e., S = 0)-
, and there is no delivery cost (i.e., c = ε = δ = 0). The goal is to minimize the total cost of purchasing an asset subject to time-varying prices, while also minimizing a switching cost incurred from changing the purchase amount over time. For the OCS problem, an algorithmic framework called “ramp-on, ramp-off” (RORO) achieves the best possible competitive ratio [LCS+24]. The key idea underlying RORO is to maintain a single threshold function and completion state (i.e., “how much demand has been-
 satisfied”) that guides the algorithm’s decision-making; this threshold is designed to capture the marginal trade-off between purchasing at the current price and waiting for better prices that may not arrive (see Appendix C for more details on the algorithm and setting). A key challenge preventing the direct application of RORO to the OSDM setting is uncertainty in how much demand will arrive over time, since RORO is designed to handle an a priori fixed total demand. A natural approach to deal wi-
th such uncertainty is a doubling strategy that progressively increases the total demand that RORO is specified to satisfy. We describe this extension below. Doubling Strategy for RORO. To apply the RORO framework in the setting of OSDM, our key idea is to maintain a guess dˆ of the total flexible demand that will arrive over time, and create instances of RORO as if there is a single unit of flexible demand of size dˆ that must be satisfied by the end of the total time horizon T (known a priori). -
Initially, we set dˆ = 20 = 1 and j = 0. Whenever a new flexible demand ft arrives, we first attempt to “assign it” to the most-recently
9

initialized instance of RORO by checking whether adding ft to its total assigned demand would
violate the guessed bound dˆ. If not, then we assign ft to this current RORO instance and allow it
to continue; otherwise, we double the guess dˆ ← 2j+1, increment j, and create a new instance of RORO that is responsible for satisfying all flexible demands arriving from time t onward (including ft). Prior instances of RORO operate until all of the flexible demands assigned to them are satisfied (or until their deadlines have passed), and the global purchasing decision is the sum of the decisions of all active instances of RORO. We formalize this doubling extension of RORO in the Appendix (see A-
lgorithm 4). To analyze this extension of RORO, we restrict to a subset of OSDM-S instances with only flexible demand (i.e., bt = 0 for all t), no delivery cost (i.e., c = ε = δ = 0), no storage (S = 0), and we assume that the maximum demand unit is upper-bounded by some σ (i.e., maxt∈[T] ft ≤ σ), where σ < 1. Then, we can characterize the competitive ratio of the doubling extension of RORO as follows:
Theorem 3.1. For the subset of OSDM-S instances described above, the “doubling extension” of RORO is ζ-competitive, where αRORO is the optimal competitive ratio for OCS (see Equation 8) and ζ is at least:
ζ ≥ min
(
αRORO
1−σ
+ αRORO
1−σ
· pmax − 2γ − pmax
αRORO exp σ
αRORO − σpmax(1−σ)
αRORO
pmin
, pmax + 2γ
pmin
)
.
We give the full proof of Theorem 3.1 in Appendix D. This result shows that the competitive ratio of the doubling RORO algorithm can be arbitrarily bad – in particular, the first entry in the min expression above grows to infinity as σ approaches one, implying that the competitive
ratio of the doubling RORO algorithm is not better than the trivial O pmax
pmin bound achievable by any feasible OSDM algorithm. Intuitively, such an extension of RORO cannot account for the demand that arrives in a coarse-grained manner: it fails to resolve the “gap” between how much demand the algorithm anticipates and the cumulative demand that does arrive, and this gap leads to its suboptimality. This limitation motivates the more modular and adaptive design of our main algorithm PAAD, which we present in the next section.
4 A Unified Competitive Algorithm
In this section, we present a unified algorithm called Partitioned Accounting & Aggregated Decisions (PAAD) to solve OSDM. Motivated by the result in § 3 that demonstrates the necessity of accounting for OSDM, PAAD introduces abstractions called drivers that perform a double duty of accounting for distinct demand units while making decisions that can be aggregated into global purchasing and delivery actions. We formally introduce the PAAD algorithm in § 4.1 and analyze its competitive ratio for OS-
DM-S and OSDM-T in § 4.2.
4.1 The PAAD Algorithm
The core idea of PAAD is to handle each newly-arrived unit of demand with an abstract driver, which produces decisions which are aggregated into a globally feasible purchasing and delivery action at each time. We start by detailing the driver types used in PAAD before describing the algorithm itself. Drivers. PAAD uses two types of drivers to manage the purchasing and delivery decisions: (i) base demand drivers (denoted by set B) that manage units of base demand, and (ii) flexible demand drivers (-
denoted by set F ) that manage units of flexible demand. Each driver is assigned a size based on the demand it is responsible for, and makes local decisions based on its own state. At initialization (t = 0), PAAD creates an initial manager driver that charges the storage when the market price is sufficiently low—this driver is instantiated as a base demand driver with
10

index 0 (B ← 0) and size d(0) := S (the storage capacity). At each time step t ∈ [T], upon the arrival of pt, bt, and ft (with deadline ∆t), drivers are created as follows. If bt > 0, then a new base demand driver with even index 2t is created and added to the set of base drivers B, with size d(2t) := bt. If ft > 0, then a new flexible demand driver with odd index 2t + 1 is created and added to the set of flexible drivers F , with size d(2t+1) := ft and deadline slack ∆t. Each base demand driver -
i ∈ B makes local decisions governed by a purchasing threshold
function φ(i)
b (w) : w ∈ [0, d(i)], and updates a state variable w(i)
b that indicates how much has
been purchased so far. φ(i)
b is non-increasing in w, and captures the marginal trade-off between making progress towards satisfying the driver’s total demand and waiting for (potentially) better prices.
Definition 4.1 (Base demand threshold function). Given a base driver with size denoted by d, the threshold function φb for OSDM-S is defined as follows, where α is the competitive ratio (see Thm. 4.1):
φb(w) = pmax + 2γ + pminc + pmax(1 + c + ε) + 2κ
α
− pmax(1 + ε) + pminc + 2κ
T exp w
αd : w ∈ [0, d],
Each flexible demand driver l ∈ F maintains a purchasing threshold function
φ(l)
f (w) : w ∈ [0, d(i)] and a delivery threshold function ψ(l)(v) : v ∈ [0, d(i)] (defined below),
with state variables w(l)
f and v(l)
f denoting the amount of their demand already purchased and delivered, respectively.
Definition 4.2 (Flexible demand threshold functions). Given a flexible driver with size denoted
by d, the purchasing threshold function φf for OSDM-S is defined as follows, where ω = (1+c+ε)
(1+ε) and
α′ = α/ω:
φ f (w) = pmax + pminc + 2γ + pmax + 2γ
α′ − pmax + pminc + 2γ
T ω exp w
α′d : w ∈ [0, d],
and the delivery threshold function ψ for OSDM-S is defined as:
ψ(v) = pmax(c + ε) + 2δ + pmax(c + ε) + 2δ
α′ − pmax(c + ε) + 2δ
T ω exp v
α′d : v ∈ [0, d],
Algorithm. We now describe the PAAD algorithm itself. The main pseudocode is provided in Algorithm 2, and the pseudo-cost minimization subroutine for individual drivers is detailed in Algorithm 1. The key idea guiding PAAD’s behavior is to have each driver make local decisions based on its own state and threshold functions, while also carefully accounting for switching costs across multiple drivers, allowing the algorithm to amortize global switching costs. All lo
cal decisions are aggregated into a single global decision: xt ← ∑i∈B∪F x(i)
t , zt ← bt + ∑i∈F z(i)
t.
Figure 2: Diagram of the intuition behind the PAAD algorithm. Each driver accounts for a single unit of base or flexible demand, making local decisions based on its own state and role that are aggregated into a single global decision. Purchasing decisions xt govern how much to purchase at the current market price, and delivery decisions zt dictate how much demand is satisfied at the current time (subject to feasibility constraints).
11

PAAD ensures feasibility by checking for binding constraints (i.e., flexible demands nearing their deadlines, Line 4 in Algorithm 1) and ensuring that sufficient energy is purchased to meet the delivery decision (Line 21). PAAD amortizes global switching costs by communicating pseudodecisions to each driver, which are adjusted based on the global purchasing decision from the previous time step. This allows each driver to recognize when increasing its purchase amount can help to amortize the total-
 switching cost across multiple drivers, reducing the pessimism inherent in a purely local approach. Algorithm 1 Pseudo-cost Minimization Subroutine for PAAD Drivers (GetDecision)
1: input: driver sets B and F , driver index i, excess q(xt−1), price pt, switching coeff. γ, threshold Φ
2: define pseudo-decision xˆ(i)
t−1 ← x(i)
t−1 + q(xt−1)·d(i)
∑i∈B∪F d(i)
3: solve x(i)
t ← argminx∈[0,d(i)−w(i)
t−1] pt x + γ|x − xˆ(i)
t−1| + γ|x| − Φ(i)(w(i)
t−1, w(i)
t−1 + x)
4: if i ∈ F and ∆(i) = t then x(i)
t ← d(i) − w(i)
t−1 ▷ flexible demand must be satisfied now (at the
deadline) 5: output: driver’s decision for time step t: x(i)
t
Algorithm 2 Partitioned Accounting & Aggregated Decisions (PAAD) Algorithm for OSDM-S
1: input: Storage capacity S, switching cost coefficients γ, δ, delivery cost D(·), threshold functions Φb, Φ f , Ψ
2: initialize: Storage state s0 ← 0, decisions x0 ← 0, z0 ← 0, driver sets B ← ∅, F ← ∅ 3: for t = 1 to T: observe pt, bt, ft, ∆t, do
4: if st−1 = 0 or bt−1 > S then ▷ refresh base drivers and storage manager driver 5: Create new storage manager driver with index 0 and size d(0) = S; B ← {0}
6: if 0 < bt < S then
7: Create base driver with index 2t and size d(2t) = bt; B ← B ∪ {2t} 8: if 0 < ft then
9: Create flexible driver with index 2t + 1, size d(2t+1) = ft and deadline ∆(2t+1) = ∆t; F ← F ∪ {2t + 1}
10: compute q(xt−1) ← xt−1 − ∑i∈B∪F x(i)
t−1, q(zt−1) ← zt−1 − ∑i∈F z(i)
t−1
11: ▷ captures “extra” purchase/delivery due to prior demand or inactive drivers 12: for each active flexible driver i ∈ F do
13: z(i)
t ← GetDecision(B, F , i, q(zt−1), D(zt, st−1, pt), δ, Ψ(i))
14: update delivery state: v(i)
t = v(i)
t−1 + z(i)
t
15: aggregate delivery decisions zt ← bt + ∑i∈F z(i)
t and compute buying capt ← zt + (S − st−1)
16: for each active driver i ∈ B ∪ F while capt > 0 do
17: x(i)
t ← GetDecision(B, F , i, q(xt−1), pt, γ, Φ(i))
18: x(i)
t ← min{x(i)
t , capt} ▷ note Φ(i) indicates Φb or Φ f depending on driver type
19: update buying capt ← capt − x(i)
t and purchasing state w(i)
t = w(i)
t−1 + x(i)
t
20: aggregate global decisions: xt ← ∑i∈B∪F x(i)
t
21: xt ← max{xt, zt − st−1} ▷ ensure sufficient energy to deliver 22: update storage state: st = st−1 + xt − zt
23: refresh drivers: remove any driver i with w(i)
t = d(i) or ∆(i) = t from B or F , respectively
24: output: Purchase decisions {xt}tT=1, delivery decisions {zt}tT=1
For each driver i ∈ B ∪ F , this is formalized as the definition of xˆ(i)
t−1 on Line 2 in Algorithm 1,
where q(xt−1) is the difference between the sum of all driver decisions and the global decision at time t − 1. Intuitively, q(xt−1) captures any “extra” purchasing from the previous time step that was not attributable to any currently active driver (e.g., due to base demand or in
active drivers). The pseudo-decision xˆ(i)
t−1 is used instead of the actual previous decision x(i)
t−1
when making the current decision x(i)
t . The same is applied to the delivery decisions of flexible
12

drivers. Note that PAAD may generate as many as Ω(T) drivers on a given problem instance. The necessity of these many drivers is supported by our warmup result in § 3, which shows that a granular, per-demand accounting is likely necessary to achieve the best possible competitive ratio when future demands are unknown. However, PAAD’s driver refresh (Line 23) ensures that, in practice, there will likely be far fewer than Ω(T) drivers active at any given time. In particular, a driver is only active -
for a finite period—e.g., until flexible drivers’ deadlines pass, or until base drivers complete their purchasing. We discuss this point further and give runtime measurements in Appendix A.1.
4.2 Competitive Analysis
We now analyze the PAAD algorithm and show that it achieves the best possible competitive ratio for OSDM. We start by stating our main result.
Theorem 4.1. PAAD is α-competitive for OSDM-S, where α is given by:
α= ω
"
W − (P−(1+ε)pmin) exp −ω2κ/T−pminc−P
P+2κ P+2κ
!
+ P+pminc−ω2κ/T
P+2κ
# , (2)
where W(·) is the Lambert W function [CGH+96], P = (1 + c + ε)pmax, κ = γ + δ and ω = (1+c+ε)
(1+ε) .
This expression for α is complex, but a leading order approximation yields asymptotics that are
sublinear in the ratio pmax/pmin (specifically, α ≈ O √pmax/pmin ), and linear in both the switching cost coefficients γ, δ and the delivery cost coefficient c. We plot α as a function of these parameters in Appendix E, and prove that it is the optimal competitive ratio in § 5.
Corollary 4.3. PAAD is αT-competitive for OSDM-T, for αT given by:
αT = ω
"
W − (P−(1+ε)pmin) exp −ω2δ/T−pminc−P
P+2(η+δ) P+2(η+δ)
!
+ P+pminc−ω2δ/T
P+2(η+δ)
# , (3)
This result uses a redefinition of the thresholds and pseudo-cost minimization problem (see Def. E.6).
4.3 Proof Overview
We sketch the proof of Theorem 4.1, relegating its full proof and that of Corollary 4.3 to Appendix E. Proof Sketch of Theorem 4.1. To show this result, we prove lemmas to characterize the cost of OPT, the cost of PAAD, and the relationship between the two. First, note that PAAD’s solution is feasible (i.e., it satisfies all OSDM constraints, see Lemma E.1)—this follows by PAAD’s definition. For an arbitrary OSDM instance, we then carefully lower bound the cost of OPT—compared to prior application-
s of the pseudo-cost minimization framework, the key technical challenge is that it is not sufficient to derive a single global lower bound on OPT’s cost (e.g., as in OCS [LCS+24]), since there are many units of demand with differing constraints. The key idea of our analysis in Lemma E.3 is to partition the instance into active and inactive periods based on PAAD’s base driver state. This enables us to derive a lower bound on OPT’s cost that is a combination of the “local” best prices during each a-
ctive period and the best price during all inactive periods, which is itself lower bounded. Next, we derive an upper bound on PAAD’s total cost by leveraging the definition of the pseudo-cost minimization to “charge” each driver’s decisions to their threshold functions (see Lemma E.4), while accounting for any worst-case purchasing, switching, and delivery costs that arise due to binding constraints for a particular unit of demand. To relate the cost of PAAD to that of OPT, we prove two lemmas tha-
t give a relation between each threshold function and its integral:
13

Lemma 4.4. By the definition of the threshold function φb(·), the following relation always holds: Φb(0, w) + (1 − w)(pmax + 2γ) + pmax(c + ε) + 2δ − cwpmin =
α φb(w) − 2γ + εpmax + 2κ
T ∀w ∈ [0, 1].
Lemma 4.5. By the definitions of the threshold functions φf (·) and ψf (·), the following relation always holds: Φ f (0, w) + (1−w)(pmax + 2γ) − cwpmin + Ψ f (0, v) + (1−v)(pmax(c + ε) + 2δ) =
α′h
φf (w) + ψf (v) − 2κ + 2κω
T
i
∀w ∈ [0, 1], v ∈ [0, w].
The rest follows by contradiction—we show that if Lemma E.3 and E.4 hold, then if the thresh
old functions adhere to Lemmas 4.4 and 4.5, PAAD(I)−pmaxsˆ
OPT(I) must be at most α, completing the proof. □
5 Fundamental Limits
In this section, given the results in § 4, we ask whether any algorithm can achieve a better competitive bound for OSDM than PAAD. In Theorems 5.1 and 5.3 below, we answer this question in the negative, showing that PAAD’s competitive ratio is the best achievable among all deterministic online algorithms for OSDM-S and OSDM-T, respectively. Along the way, we show results to contextualize the relative “hardness” of OSDM in subcases of interest, such as the case of only base demand (see Corollary 5.-
1) or the case of price-dependent increasing delivery cost (recall Def. 2.4).
Lower Bound for OSDM-S. We start by considering the switching cost case of OSDM-S. Theorem 4.1 shows that PAAD is α-competitive (defined in (2)) for OSDM-S. We now prove that α is optimal by constructing a difficult set of OSDM-S instances on which no deterministic algorithm can achieve a better competitive ratio; this lower bounds the achievable ratio of any deterministic online algorithm for OSDM-S (see Def. 2.1). We give a sketch of the result, deferring the full proof to Appendix F.
Theorem 5.1. There exists a set of OSDM-S instances for which no deterministic online algorithm ALG can achieve a competitive ratio better than α (for α defined in (2)).
Proof Sketch of Theorem 5.1. In Def. F.1, we define a set of x-decreasing instances for OSDM-S (denoted by {Ix}x∈[pmin,pmax]) where x is the “best” (i.e., lowest) price in the instance. These
instances consist of a single unit of flexible demand at time t = 1 with a deadline of ∆1 = T. An adversarial price sequence presents market prices that generally decrease over time, interrupted by “spikes” to the highest price pmax that force an online algorithm ALG to pay a high switching cost. This captures a trade-off between being eager or reluctant to accept a certain price x – if ALG purchases too much at prices > x, it may miss better prices later on, but if it waits to purchase at prices -
< x, it may be forced to purchase and deliver at a high price pmax (e.g., if the sequence ends after x). Under these special instances, the cost of any deterministic online algorithm ALG can be described by two (arbitrary) purchasing and delivery functions h(x), z(x) : [pmin, pmax] → [0, 1] that describe the fraction of the demand purchased and delivered at prices ≥ x. Since OPT is easy to describe on these instances (i.e., OPT(Ix) = x + 2γ
T + εx + 2δ
T ), we show that the
purchasing and delivery functions of an α⋆-competitive ALG must satisfy a necessary condition that relates h(x), z(x) to α⋆ for all x ∈ [pmin, pmax]. By applying Grönwall’s Inequal
ity [MPF91, Theorem 1, p.356], this gives the following condition that α⋆ must satisfy at op
timality: 1 = α⋆
ω ln
h P−(1+ε)pmin P− ω[P+2κ]
α⋆ + ω2κ
T +pminc
i
. Solving this transcendental for α⋆ yields the result, completing the proof. □
In the above result, we have shown that PAAD achieves the best possible competitive ratio for OSDM-S. The proof of Theorem 5.1 relies on a class of OSDM instances that consist purely of
14

flexible demand. In the following corollary, we use a similar class of “hard instances” to argue that the competitive ratio improves if we focus on the case of OSDM-S instances with only base demand:
Corollary 5.1. There exists a set of OSDM-S instances with only base demand for which no deterministic online algorithm ALG can achieve a competitive ratio better than αB, given by:
αB ≥
"
W − (1 + c)pmax − pmin exp − P+2δ+ 2γ
T
P+2κ
P + 2κ
!
+ P + 2δ + 2γ
T
P + 2κ
#−1
, (4)
where P = (1 + c + ε)pmax. Given fixed pmin, pmax, c, ε, γ, and δ, we have αB < α (for α defined in (2)).
We relegate the full proof of Corollary 5.1 to Appendix F.2. The main insight of Corollary 5.1 is that the additional complexity of flexible demands makes the general OSDM problem (i.e., allowing both flexible and base demand) strictly harder to solve in the online setting. Delivery Cost Dynamics. In the above results and throughout the paper, we focus on the case of a price-dependent decreasing delivery cost. Amongst the class of monotone delivery costs defined in Def. 2.4, we claimed this is the-
 most challenging case to consider in § 2. We now prove this claim by showing that OSDM with price-dependent increasing delivery cost is strictly easier:
Theorem 5.2. Amongst the class of monotone delivery costs defined in Def. 2.4, the best achievable competitive ratios for OSDM with an increasing delivery cost are strictly better than those for OSDM with a decreasing delivery cost (i.e., the cases considered in Theorem 5.1, 5.3 and Corollary 5.1).
We relegate the full proof of Theorem 5.2 to Appendix F.3, which relies on lower bound “hard instance” constructions similar to those used in Theorem 5.1 and Corollary 5.1. The main insight is that since the case of price-dependent increasing delivery cost is strictly easier, our general results for the monotone delivery cost focus on the more challenging setting of decreasing delivery cost.
Lower Bound for OSDM-T. Following the results for OSDM-S, we now consider the tracking cost case of OSDM-T. Recall that Corollary 4.3 shows that PAAD is αT-competitive (defined in (3)) for OSDM-T. We now prove this is optimal by constructing a difficult set of instances and tracking target sequences on which no algorithm can do better than αT-competitive, thus showing that PAAD achieves the best possible competitive ratio for OSDM-T. We defer the proof to Appendix F.4.
Theorem 5.3. There exists a set of OSDM-T instances for which no deterministic online algorithm ALG can achieve a competitive ratio better than αT (for αT defined in (3)).
6 Learning Data-Driven Decisions
Recall that in § 2.1, we mentioned that algorithms designed using competitive analysis are often overly pessimistic, and can sometimes perform poorly compared to simple heuristics used in practice. However, these heuristics—as well as data-driven, machine-learned algorithmscan suffer a lack of robustness to nonstationarity or distribution shift. In this section, we propose and study a novel end-to-end learning methodology for OSDM that takes inspiration from recent literature on learning-augmented-
 algorithms and learning-to-optimize (L2O) [CCC+21] to improve the average-case performance of online algorithms for OSDM while retaining worstcase robustness guarantees. We begin by reviewing some relevant preliminaries.
Preliminaries & Challenges. In the literature on learning-augmented online algorithms, the competitive ratio (recall Def. 2.1) is usually replaced with two metrics: consistency and
15

robustness [LV18, KPS18, MV22]. If ALG is a learning-augmented online algorithm provided with some advice ADV (e.g., a prediction about the instance), then ALG is said to be c-consistent if it is c-competitive when ADV is perfectly accurate, and ρ-robust if it is ρ-competitive, regardless of how bad (e.g., adversarial) ADV is. There are two common models for advice. The first is decision advice, where ADV predicts the optimal decisions at each time step—this type of advice is frequently used for -
problems with multiple time steps and switching costs, such as metrical task systems [ACE+20] and the OCS problem discussed in § 3 [LCS+24] The second is input prediction advice, where ADV predicts a characteristic of the problem instance, such as the number of skiing days in a ski rental problem [KPS18], or the best price in a sequence. This type of advice has been used for related problems such as online knapsack [DKL+25] and one-way trading [SLH+21], which is itself closely related to OCS. Both-
 models face limitations in the context of OSDM. Obtaining decision advice directly from an ML model can be difficult due to the generalization challenges posed by complex problem structure—existing methods instead predict input features (e.g., a price forecast in OCS), solve the corresponding “certainty equivalent” offline problem, and use that solution as advice [LCS+24]. In OSDM, however, the joint uncertainty in prices and demand arrivals/deadlines makes this approach brittle to prediction err-
or and impractical in practice. On the other hand, point predictions about instances (e.g., estimates of the best price) are straightforward to obtain, but these are too simplistic to provide useful insights for OSDM. For instance, even given a perfect prediction of the best (i.e., lowest) price, it is not possible to determine optimal purchasing and delivery schedules subject to the unknown demand arrivals/deadlines and switching/tracking costs. On top of these limitations to existing prediction -
models, there is a gap between theory and practice where performance metrics are concerned. In particular, while robustness is useful as a worst-case “guardrail” against, e.g., significantly out-of-distribution inputs, consistency is less meaningful—it is only defined for perfect predictions that are unrealistic in practice, and it is still a worst-case metric (i.e., it is defined as the competitive ratio given accurate predictions). While recent work has considered “smooth degradation” of algorit-
hm performance to small prediction errors in online search problems [BCPA25, EADL24], it is not clear that these methods can be extended to the substantially more complex setting of OSDM. In practice, the primary objective is for an algorithm to perform well on average: if an algorithm performs very well in practice but has bad theoretical consistency, that is preferable to an algorithm that has good consistency in theory but poor real-world performance due to worst-case hedging. This motivates us-
 to propose a new model that circumvents the challenges above while still providing the key benefits of “both worlds”—improved performance in practice while retaining worst-case guarantees.
6.1 The PALD Framework
To tackle the above challenges, rather than defining a new prediction model and designing an algorithm around it, we propose a new learning framework (Partitioned Accounting & Learned Decisions (PALD)) that directly “learns the best algorithm” within a general class that guarantees a certain worst-case robustness. Motivation. We take insight from the competitive proof of PAAD (Theorem 4.1): under the pseudo-cost minimization framework, a key step in bounding the competitive ratio uses characterist-
ics of the threshold functions (φb for base drivers, φf and ψf for flexible drivers) that govern the algorithm’s decisions. In particular, the definition of the pseudo-cost minimization problem allows us to relate PAAD’s cost to that of (a lower bound on) the offline optimal cost via these threshold functions. Thus, for a given target robustness ρ > α (where α is the competitive ratio of PAAD for OSDM-S), we can exactly define a feasible set of threshold functions, based on
16

the characteristics used in the competitiveness proof, that guarantee ρ-robustness for PALD. A similar characterization of a “robust threshold set” was derived by (author?) [BCPA25] for the simpler one-max search problem to investigate the design of algorithms’ “smoothness”; however, in PALD, our goal is instead to directly learn the best threshold functions (denoted by φˆb, φˆ f and ψˆ f ) within this feasible set to optimize a downstream metric (e.g., empirical competitive ratio) on historical -
instances. Given the learned thresholds φˆb, φˆ f and ψˆ f , PALD’s pseudocode is exactly the same as that of PAAD (see Algorithm 2) but with φˆb, φˆ f and ψˆ f in place of the (analytical) thresholds φb, φf and ψf . Robustness Certificate. In what follows, we define feasible sets of robust threshold functions that guarantee ρ-robustness. The PALD framework accommodates any arbitrary learning mechanism as long as one can parameterize threshold functions and ensure they lie within these feasible se-
ts, providing a robustness certificate that we use to prove PALD’s worst-case guarantees. We focus on the setting of OSDM-S in the main body, deferring definitions, theorems, and proofs for OSDM-T to Appendix G.2. We start with the definition of the feasible set for base demand drivers:
Definition 6.1 (Robust threshold set for base drivers in OSDM-S). Given a target robustness ρ > α (α as defined in (2)), a learned threshold function φˆb must lie in the following feasible set:
Rb(ρ) := φb : [0, 1] → [pmin, pmax] φb is monotone non-increasing, φb(1) ≤ pmin + 2γ, and ∀w ∈ [0, 1] :
Φb(0, w) + (1 − w)(pmax + 2γ) + pmax(c + ε) + 2δ − cwpmin ≤ ρ [φb(w) − 2γ + εpmax + 2κ/T] .
If a learned threshold function φˆb lies in the set Rb(ρ), we have the necessary conditions to prove that PALD is ρ-robust (with respect to base demand drivers). The first two conditions (monotonicity and the inequality at w = 1) ensure that φˆb “sweeps” the range of possible prices to provide a necessary range of lower bounds on OPT. The third condition is the key inequality that relates PALD’s cost to that of the offline optimal via the pseudo-cost paradigm—on the left-hand-side, the integral an-
d additive terms correspond to an upper bound on PALD’s total cost, while the right-hand-side corresponds to a lower bound on OPT’s cost scaled by the target robustness ρ. The same logic extends, with some additional complexity, to the case of flexible demand drivers:
Definition 6.2 (Robust threshold set for flexible drivers). Given a target robustness ρ > α, learned threshold functions φˆ f and ψˆ f for flexible demand drivers must lie in the following joint feasible set:
R f (ρ) := (φf , ψ f ) : [0, 1]2 → [pmin, pmax]2 φ f , ψ f are monotone non-increasing, φ f (1) ≤ pmin + 2γ,
ψf (1) ≤ pmin(c + ε) + 2δ, and ∀w ∈ [0, 1], v ∈ [0, w] : Φ f (0, w) + (1−w)(pmax+2γ) − cwpmin+
Ψ f (0, v) + (1−v)(pmax(c+ε)+2δ) ≤ ρ 1/ω φf (w) + ψf (v) − 2κ + 2κ/T .
Under Def. 6.1 and Def. 6.2, we have the following robustness certificate for PALD when given any learned thresholds φˆb, φˆ f and ψˆ f that lie in the respective feasible sets:
Theorem 6.1. Given learned threshold functions that lie in the feasible sets φˆb ∈ Rb(ρ) and (φˆ f , ψˆ f ) ∈ R f (ρ) for some ρ > α (α defined in (2)), the PALD algorithm is ρ-robust for OSDM-S.
Proof Sketch of Theorem 6.1. (full proof in Appendix G.1) Since PALD is identical to PAAD save for the learned threshold functions, we inherit feasibility from Lemma E.1. Then, we give lemmas to bound the costs of OPT and PALD, and the relationship between the two. First, we lower bound the cost of OPT; as in the proof of Theorem 4.1, to do this we partition the time horizon into active and inactive periods. In the case of PALD, since the partitioning relies on the value of the base driver thresho-
ld function and PALD’s is learned, we must also use the definition of Rb to prove that OPT’s cost during inactive periods can be bounded in the same manner. Next, we upper bound the cost of PALD by “charging” each driver’s decisions to their corresponding threshold functions and accounting for any worst-case purchasing, switching,
17

and delivery costs that arise due to constraints for a particular unit of demand. We show that the same charging argument from Theorem 4.1 still holds with learned thresholds. Finally, we use the definitions of Rb(ρ) and R f (ρ) to relate the cost of PALD to that of OPT. Using a similar contradiction argument as in the proof of Theorem 4.1, the last inequalities in the definition of
the feasible sets are exactly those needed to show that the ratio PALD(I)−pmaxsˆ
OPT(I) must be at most ρ, completing the proof. □ Remark. PALD exhibits some similarities with existing approaches for data-driven algorithms: for instance, (author?) [ZSHW21] learn the best exponent for an exponential threshold function in the online knapsack problem—our approach is distinguished by its expressiveness in allowing any arbitrary threshold function while retaining worst-case guarantees. (author?) [LYR22] learn an ML model to solve online convex optimization that is calibrated (altho-
ugh not guaranteed) to be robust with respect to a baseline—in contrast, PALD allows us to specify the worst-case level performance we are willing to incur, and to learn an algorithm that performs well subject to that constraint with certainty.
6.2 Learning Methodology
Using the PALD framework outlined above, we describe the learning methodology we use in our case study (see § 7) to learn robust threshold functions that minimize the empirical competitive ratio on historical instances while guaranteeing robustness. We parameterize each threshold function as a piecewise-affine function using a “knot” representation at a fixed grid of K > 1 points {0, 1/K−1, 2/K−1, . . . , 1}. We learn a parameter vector y ∈ RK+ where each element defines the function’s value at a -
knot (between knots, the function is interpolated linearly). We denote by yb, y f , yψ the parameter vectors for φˆb, φˆ f , ψˆ f , respectively. This makes the robust sets tractable:
Lemma 6.3. Letting φˆb, φˆ f , ψˆ f be piecewise-affine functions parameterized by yb, y f , yψ as outlined above, the feasible sets defined in Def. 6.1 and 6.2 are convex sets in yb and (y f , yψ), respectively.
The full proof is in Appendix G.3. The key idea is that the feasibility conditions can be expressed as box constraints, linear inequalities, and affine halfspaces, whose intersection is a convex set. Recall that the analytical thresholds φb, φf and ψf (Defs. 4.1 & 4.2) are continuous and monotone non-increasing functions—by definition of the PAAD algorithm, these lie in the feasible sets Rb(α) and R f (α), respectively. For ρ increasing away from α, the feasible sets Rb(ρ) and R f (ρ) become stric-
tly larger, since the robustness conditions become easier to satisfy. Since piecewise-affine functions are known to be dense in continuous functions [Che98, Pin05], the analytical thresholds can be approximated arbitrarily well using piecewise-affine functions with sufficiently many knots. Thus, for a given robustness ρ > α, the feasible sets Rb(ρ) and R f (ρ) are non-empty since they at least contain the analytical thresholds. Lemma 6.3 implies that it is efficient to project any learned piecewis-
e-affine function into the feasible sets—this makes robustness tractable to enforce during learning, and unlocks several learning techniques which we discuss below. Directly Learning Thresholds. We implement the PALD algorithm by using differentiable convex optimization layers (e.g., CVXPYLayers [AAB+19]) to solve the pseudo-cost minimization problem at each time step. This allows backpropagation through the entire PALD procedure to minimize the empirical competitive ratio on historical instances.-
 Given a data set of historical instances D = {I1, I2, . . . , IN}, we can use this differentiable implementation of PALD to find a single set of parameters yb, y f , yψ that minimizes the empirical competitive ratio on D, using projected gradient descent (PGD) to ensure that, during training, the learned thresholds lie in the robust sets Rb(ρ) and R f (ρ) for a target ρ > α. We refer to this as PALD-S (“S” for simple) in our case study (§ 7).
18

End-to-End Contextual Learning. While directly learning a single set of thresholds improves average-case performance, it cannot leverage instance-specific context that is available and extremely useful in practice. For instance, our case study in § 7 uses locational marginal price (LMP) data for different grids; LMPs are known to correlate with factors such as the time of day, the weather, and the season [QHG+24]. Using a learning method that is aware of such context can enable better performance-
 in practice by learning thresholds that are tailored to likely operating conditions. To realize this context-aware approach, we employ a neural network FΘ(x) → yb, y f , yψ (with parameters Θ) that takes as input a context vector x about a given driver and outputs predicted parameter vectors yb, y f , yψ that define the threshold functions. The final layer of this neural network is a differentiable projection layer that projects the output parameters yb, y f , yψ into the feasible sets Rb(ρ) and -
R f (ρ) to ensure robustness at a target level ρ > α. We construct an unsupervised learning pipeline that simulates the differentiable PALD algorithm on a historical data set D. For each instance, each new driver in PALD makes a forward pass through the neural network FΘ to obtain its context-aware thresholds φˆb, φˆ f , and ψˆ f . After observing the resulting performance of PALD on the data set, we backpropagate through the entire pipeline to learn a better neural network mapping between context-
 and thresholds. We refer to this technique as PALD-C in our case study (§ 7), and give a diagram of it in Appendix A.3.
7 Case Study: A Grid-integrated Data Center with Local Energy Storage
We conclude with a case study application of OSDM and our algorithms for the motivating application of demand management in a grid-integrated data center with local energy storage.
Experimental Setup. We simulate a data center with co-located energy storage that purchases electricity from a real-time market and serves a mix of base and flexible demand (e.g., interactive and batch jobs, respectively).
▷ Electricity Price Data. We use a year of locational marginal price (LMP) data at a 15minute granularity in four U.S. grid regions: California ISO (CAISO), Electric Reliability Council of Texas (ERCOT), PJM Interconnection (PJM), and ISO New England (ISONE) [Gri25]. For PALD-Contextual, we also use day-ahead LMP forecasts at an hourly granularity as contextual features. We truncate any negative or small prices to $1 per MWh to avoid a divide-by-zero in the competitive ratio, and cap prices at the-
 99.9th percentile to remove outliers. We summarize key statistics in Table 1.
Table 1: Statistics for LMP traces. All traces span the time period 01/01/2024-12/31/2024 at a 15-minute granularity, and LMP data is reported in $ (USD) per megawatt-hour (MWh).
Trace Min. Max. Mean Std. Dev. Coeff. of Var. [Gri25] CAISO 1.00 523.85 45.63 34.91 0.765 ISONE 1.00 336.27 39.57 31.44 0.794 PJM 1.00 325.93 31.10 26.95 0.867 ERCOT 1.00 877.48 25.02 41.30 1.651
▷ Demand Data. To model the data center’s demand, we use Alibaba’s 2018 production trace [Ali18], which provides seven days of task start and end times at a 1-second granularity. In our experiments, time steps are fixed to 15 minutes (matching the price data), so we aggregate the demand: we partition the trace into 15-minute buckets and compute a weighted number of tasks for each bucket based on the number of jobs and their active duration (a task that runs for the entire bucket contributes 1, whi-
le one that runs for only 5 minutes contributes 1/3). We
19

plot this quantity for the full trace in the Appendix, in Fig. 6. Based on this, we compute a scaled demand as weighted no. of tasks/scale factor, where a scale factor is chosen based on the size of the energy storage. In most of our experiments, we set this factor to reflect a battery capacity that can meet the daily peak demand for a single (15-minute) time step on 2/7 days in the trace. In some experiments, we vary this scale factor to study the effect of storage capacity. Since the trace does-
 not specify task types, we also set a parameter prop_base ∈ [0.5, 1] to probabilistically classify tasks as base or flexible: with probability prop_base, a task is “base”, and otherwise it is “flexible.” We typically set prop_base = 0.5, which yields instances that consist of half base and half flexible demand on average. We simulate 1,200 instances of OSDM for each parameter configuration. In addition to the data parameters above, we isolate the effect of parameters including the delivery cost c-
oefficients c, ε, the switching cost coefficients γ, δ, time horizon T, and the tracking cost coefficient η (for OSDM-T). Unless otherwise specified, we set T = 48 (i.e., a 12-hour horizon), γ = 10, δ = 5, and η = 0 (i.e., no tracking cost). In experiments with a tracking cost (i.e., with non-zero η), we set a tracking target sequence {at}t∈[T] that evenly distributes the total demand over the time horizon (i.e., at ≈ D/T, where D is the total demand), while randomly choosing between two to four t-
ime steps to set at = 0, simulating load-shedding events. We implement a pricedependent decreasing delivery cost as a soft penalty to encourage the decision maker to keep the battery charged, setting c = 0.2 and ε = 0.05 unless otherwise specified. These parameters quantify the risk tolerance of the data center as it relates to keeping the battery charged for, e.g., backup power.
▷ Algorithms. We implement and test three algorithms, denoted as PAAD, PALD-S, and PALD-C, and solve for the offline optimal solution using GurobiPy [Gur24] to compute the empirical competitive ratio (ECR). PAAD is the competitive algorithm described in § 4, while PALD-S and PALD-C are variants of the learning framework described in § 6.2 – we typically set a robustness factor of ρ = 5α (where α is the standard competitive ratio) to ensure robustness while allowing for some benefit from learning, -
and set K = 10. We implement the PALD algorithm using CVXPYLayers [AAB+19, DB16] to enable optimization of the downstream task performance via backpropagation. PALD-S directly learns one set of threshold functions to minimize overall ECR – to capture some seasonality in the traces, we train a set of PALD-S thresholds for each month in a given region’s LMP data (i.e., 12 sets of thresholds total), using 100 random training instances for each month. In contrast, PALD-C is a neural network-based appr-
oach that uses contextual features to predict a set of threshold functions for each driver – we train it on 100 random training instances using all 12 months in a given region’s LMP data, using the time, month, tracking target (if η > 0), and statistics about the day-ahead LMP forecasts for future time steps (i.e., min, max, average, standard deviation), as features. We defer more details of the PALD implementations to Appendix A.3.
Experimental Results. We highlight key experiments in the main body, referring to Appendix A.2 for an investigation of algorithm runtimes and the effect of parameters δ and ρ. A summary is given in Fig. 3, which plots a cumulative distribution function (CDF) of the ECR for all tested algorithms in the CAISO region, with the default parameter settings. Our competitive algorithm PAAD is 1.65-competitive on average and ≤ 2.3-competitive in 95% of cases. By learning a single set of thresholds, PALD-S -
improves on PAAD by 12.7% on average and 8.7% at the 95th percentile. Finally, by leveraging contextual features about instances, PALD-C significantly improves on PAAD by 32.8% on average and 31.61% at the 95th percentile. Remarkably, PALD-C’s performance is nearly optimal (i.e., ECR ≈ 1) in roughly 1/2 of instances, highlighting the value of a context-aware approach. We now consider the impact of grid region, tracking cost, and storage capacity on performance, training PALD once for each region, -
for the tracking cost η = 10, and for each capacity.
▷ Grid Regions. To capture the effect of different electricity price distributions and characteristics, Fig. 3a shows the results of the main experiment with the same parameters in three
20

Figure 3: CDFs of ECR for all algorithms in default CAISO experiments.
(a) Grid regions (b) Tracking cost η (c) Storage size
Figure 4: Average ECR for all algorithms in varying regions, with a tracking cost, and varying storage size. In (a), top subfigure is coeff. of var. for each region.
(a) Time horizon T (b) Switching cost γ (c) Demand mix (d) Delivery cost (c & ε)
Figure 5: Average ECR for all algorithms in CAISO with varying parameters as specified.
other regions, namely ERCOT, PJM, and ISONE. Both PALD-S and PALD-C are retrained on a test of training instances generated from each region. We expect to see some variance in performance across these regions, since the global price bounds (pmin and pmax) are not homogeneous – interestingly, we find that the performance of algorithms roughly corresponds to the variability of prices in each region, with ERCOT (highest coefficient of variation) showing the most challenging case.
▷ Tracking Case. In Fig. 3b, we show algorithm performance in a setting with a tracking cost (i.e., instead of a switching cost, so γ = 0), varying η between 0 and 25. Both PALD-S and PALD-C are retrained with η = 10. We find that the performance of PAAD and PALD-C slightly improves as η grows – PALD-S continues to improve on PAAD in the small η regime, but for large (outof-distribution) η > 15, PALD-S’s performance degrades because the single set of thresholds PALD-S learns becomes overly conserv-
ative (i.e., waits too long to purchase) when η grows.
▷ Storage Capacities. Recall that the default setting is where the storage is sized to meet the peak demand on two of the seven days in the Alibaba trace for a single 15-minute time slot – in Fig. 3c, we plot the effect of larger storage sizes that meet up to 4 hours of the same peak demand on two of the seven days (i.e., a 16× increase in storage size). As the storage size increases and OPT gains flexibility for shifting, the performance of all algorithms slightly degrades, although PALD-C consis-
tently outperforms the other algorithms across all storage cases. Next, we plot the effect of parameters that are out-of-distribution for PALD. Throughout the plots, we highlight the instance that is in-distribution (i.e., parameters match training set).
▷ Time Horizons. Fig. 5a shows the effect of varying the time horizon T between 24 and 96 in CAISO. We find that the performance of all algorithms improves slightly with longer horizons, which we attribute to the increased flexibility in using storage over longer time periods. Notably, PALD-C consistently outperforms the other algorithms across all horizon lengths.
▷ Switching Costs. Fig. 5b shows the effect of varying the switching cost coefficient γ (with
21

fixed δ = 5) between 0 and 25 in CAISO. As predicted by the theoretical results, the performance of all algorithms degrades slightly as the switching cost coefficient γ increases – in this respect, PALD-S and PALD-C are less sensitive to increases in switching costs than PAAD.
▷ Varying Demands. We estimate the effect of varying demand distribution on the performance of all algorithms in the CAISO region. Recall that the default setting splits demand evenly between base and flexible demand (prop_base = 0.5) – in Fig. 5c, we plot the effect of varying prop_base between 0.5 and 1.0 in the CAISO region. We find that the performance of PAAD and PALD-S generally improves as the proportion of base demand increases (deviating further from the training instances), while PALD-C’-
s performance slightly degrades, although it still outperforms the other algorithms.
▷ Delivery Costs. In Fig. 5d, we show the effect of varying the delivery cost parameters c and ε (see Def. 2.4) in the CAISO region. As c and ε increase, the delivery cost has a more significant effect on the resulting cost. As predicted by the theoretical results, PAAD’s performance degrades slightly as a function of c and ε, while the performance of PALD-S and PALD-C remains relatively constant.
8 Conclusion
Motivated by paradigm shifts promoting active and intelligent demand management models (e.g., demand response), we introduce and study online smoothed demand management (OSDM) – the first online problem to jointly capture key practical features such as mixed inflexible and flexible demand, local energy storage, and costs penalizing unsmooth behavior. We present PAAD, an algorithm achieving the optimal competitive ratio for OSDM, and PALD, a novel differentiable framework that learns the best algor-
ithm from data while preserving worst-case guarantees. We evaluate both in a case study of a grid-integrated data center with co-located storage. Several directions remain for future work. One natural extension is to incorporate rate constraints, where purchase and delivery rates are capped per time step – a constraint captured by related models [LCS+24, YHS+20]. More broadly, while our differentiable framework is developed for OSDM, its end-to-end learning approach may generalize to other online -
problems, motivating further study of which problem classes and algorithm parameterizations admit such robust learning.
Acknowledgments
This research is supported by National Science Foundation grants 2045641, 2325956, 2512128, and 2533814, and the U.S. Department of Energy, Office of Science, Office of Advanced Scientific Computing Research, Department of Energy Computational Science Graduate Fellowship under Award Number DE-SC0024386.
Disclaimers
This report was prepared as an account of work sponsored by an agency of the United States Government. Neither the United States Government nor any agency thereof, nor any of their employees, makes any warranty, express or implied, or assumes any legal liability or responsibility for the accuracy, completeness, or usefulness of any information, apparatus, product, or process disclosed, or represents that its use would not infringe privately owned rights. Reference herein to any specific commercial-
 product, process, or service by trade name, trademark, manufacturer, or otherwise does not necessarily constitute or imply its endorsement, recommendation, or favoring by the United States Government or any agency thereof. The views
22

and opinions of authors expressed herein do not necessarily state or reflect those of the United States Government or any agency thereof.
References
[AAB+19] Akshay Agrawal, Brandon Amos, Shane Barratt, Stephen Boyd, Steven Diamond, and Zico Kolter. Differentiable Convex Optimization Layers. In Advances in Neural Information Processing Systems, 2019.
[ACE+20] Antonios Antoniadis, Christian Coester, Marek Elias, Adam Polak, and Bertrand Simon. Online Metric Algorithms with Untrusted Predictions. In Proceedings of the 37th International Conference on Machine Learning, pages 345355. PMLR, Nov 2020.
[AJS14] Abdul Afram and Farrokh Janabi-Sharifi. Theory and applications of HVAC control systems–A review of model predictive control (MPC). Building and Environment, 72:343–355, 2014.
[AL17] Arsam Aryandoust and Johan Lilliestam. The potential and usefulness of demand response to provide electricity system services. Applied Energy, 204:749–766, October 2017.
[ALDNL20] Donald Azuatalam, Wee-Lih Lee, Frits De Nijs, and Ariel Liebman. Reinforcement learning for whole-building HVAC control and demand response. Energy and AI, 2:100020, 2020.
[Ali18] Alibaba. Cluster data collected from production clusters in Alibaba for cluster management research, 2018.
[BAPWA+18] Amrit S. Bedi, P.V. Aditya P., Md. Waseem Ahmad, S. Swapnil, Ketan Rajawat, and Sandeep Anand. Online algorithms for storage utilization under real-time pricing in smart grid. International Journal of Electrical Power & Energy Systems, 101:50–59, October 2018.
[BCPA25] Ziyad Benomar, Lorenzo Croissant, Vianney Perchet, and Spyros Angelopoulos. Pareto-Optimality, Smoothness, and Stochasticity in LearningAugmented One-Max-Search, 2025.
[BKK23] Santiago Balseiro, Christian Kroer, and Rachitesh Kumar. Online Resource Allocation under Horizon Uncertainty, 2023.
[BLS92] Allan Borodin, Nathan Linial, and Michael E. Saks. An Optimal On-Line Algorithm for Metrical Task System. J. ACM, 39(4):745–763, Oct 1992.
[BMVN20] Michael Blonsky, Killian McKenna, Tyrone Vincent, and Adarsh Nagarajan. Time-of-use and Demand Charge Battery Controller Using Stochastic Model Predictive Control. In 2020 IEEE International Conference on Communications, Control, and Computing Technologies for Smart Grids, pages 1–6, 2020.
[Bre19] Paul Breeze. Power System Energy Storage Technologies, page 219–249. Elsevier, 2019.
[BWW+22] David Blum, Zhe Wang, Chris Weyandt, Donghun Kim, Michael Wetter, Tianzhen Hong, and Mary Ann Piette. Field demonstration and implementation analysis of model predictive control in an office HVAC system. Applied Energy, 318(119104):10–1016, 2022.
23

[CCC+21] Tianlong Chen, Xiaohan Chen, Wuyang Chen, Howard Heaton, Jialin Liu, Zhangyang Wang, and Wotao Yin. Learning to Optimize: A Primer and A Benchmark, 2021.
[CFJK22] Xingxing Chen, Jacob Feldman, Seung Hwan Jung, and Panos Kouvelis. Approximation schemes for the joint inventory selection and online resource allocation problem. Production and Operations Management, 31(8):3143–3159, August 2022.
[CGH+96] Robert M Corless, Gaston H Gonnet, David EG Hare, David J Jeffrey, and Donald E Knuth. On the Lambert W function. Advances in Computational Mathematics, 5:329–359, 1996.
[ChCCZ24] Mohamad Fares El Hajj Chehade, Young ho Cho, Sandeep Chinchali, and Hao Zhu. Should we use model-free or model-based control? A case study of battery management systems, 2024.
[Che98] E.W. Cheney. Introduction to Approximation Theory. AMS Chelsea Publishing Series. AMS Chelsea Pub., 1998.
[CMSLW21] Wang Chi Cheung, Will Ma, David Simchi-Levi, and Xinshang Wang. Inventory Balancing with Online Learning, 2021.
[DB16] Steven Diamond and Stephen Boyd. CVXPY: A Python-embedded modeling language for convex optimization. Journal of Machine Learning Research, 17(83):1–5, 2016.
[DJSW19] Nikhil R. Devanur, Kamal Jain, Balasubramanian Sivan, and Christopher A. Wilkens. Near Optimal Online Algorithms and Fast Approximation Algorithms for Resource Allocation Problems. J. ACM, 66(1), January 2019.
[DKL+25] Mohammadreza Daneshvaramoli, Helia Karisani, Adam Lechowicz, Bo Sun, Cameron N Musco, and Mohammad Hajiesmaili. Near-Optimal ConsistencyRobustness Trade-Offs for Learning-Augmented Online Knapsack Problems. In Forty-second International Conference on Machine Learning, 2025.
[EADL24] Alex Elenter, Spyros Angelopoulos, Christoph Dürr, and Yanni Lefki. Overcoming Brittleness in Pareto-Optimal Learning Augmented Algorithms. In Advances in Neural Information Processing Systems, volume 37, pages 9329–9357, 2024.
[EYFKT01] Ran El-Yaniv, Amos Fiat, Richard M. Karp, and Gordon Turpin. Optimal Search and One-Way Trading Online Algorithms. Algorithmica, 30(1):101–139, May 2001.
[FAB+20] Jamal Faraji, Ahmadreza Abazari, Masoud Babaei, SM Muyeen, and Mohamed Benbouzid. Day-ahead optimization of prosumer considering battery depreciation and weather prediction for renewable energy sources. Applied Sciences, 10(8):2774, 2020.
[FL93] Joel Friedman and Nathan Linial. On convex body chasing. Discrete & Computational Geometry, 9(3):293–321, Mar 1993.
[Fun21] Stanley P.Y. Fung. Online two-way trading: Randomization and advice. Theoretical Computer Science, 856:41–50, February 2021.
24

[GF13] Yuanxiong Guo and Yuguang Fang. Electricity Cost Saving Strategy in Data Centers by Using Energy Storage. IEEE Transactions on Parallel and Distributed Systems, 24(6):1149–1160, June 2013.
[Gri25] Grid Status. Grid Status, 2025.
[Gur24] Gurobi Optimization, LLC. Gurobi Optimizer Reference Manual, 2024.
[HCCH16] Mohammad H. Hajiesmaili, Chi-Kin Chau, Minghua Chen, and Longbu Huang. Online microgrid energy generation scheduling revisited: the benefits of randomization and interval prediction. In Proceedings of the Seventh International Conference on Future Energy Systems, e-Energy ’16, New York, NY, USA, 2016. Association for Computing Machinery.
[HGGB23] Massil Hihat, Stéphane Gaïffas, Guillaume Garrigos, and Simon Bussy. Online Inventory Problems: Beyond the i.i.d. Setting with Online Convex Optimization. In Advances in Neural Information Processing Systems, volume 36, pages 20421–20440, 2023.
[HTW24] Zhiyi Huang, Zhihao Gavin Tang, and David Wajc. Online Matching: A Brief Survey. SIGecom Exch., 22(1):135–158, October 2024.
[HXX+22] Xiaozhou He, Jie Xiang, Jin Xiao, T.C. E. Cheng, and Yuhang Tian. An online algorithm for the inventory retrieval problem with an uncertain selling duration, uncertain prices, and price-dependent demands. Computers & Operations Research, 148:105991, December 2022.
[JCYW14] Tao Jiang, Yang Cao, Liang Yu, and Zhiqiang Wang. Load Shaping Strategy Based on Energy Storage and Dynamic Pricing in Smart Grid. IEEE Transactions on Smart Grid, 5(6):2868–2876, November 2014.
[JL11] Patrick Jaillet and Xin Lu. Online resource allocation problems, 2011.
[JTL+17] Lei Jiao, Antonia Maria Tulino, Jaime Llorca, Yue Jin, and Alessandra Sala. Smoothed Online Resource Allocation in Multi-Tier Distributed Cloud Networks. IEEE/ACM Transactions on Networking, 25(4):2556–2570, 2017.
[KDL+21] Xiao Kou, Yan Du, Fangxing Li, Hector Pulgar-Painemal, Helia Zandi, Jin Dong, and Mohammed M Olama. Model-based and data-driven HVAC control strategies for residential demand response. IEEE Open Access Journal of Power and Energy, 8:186–197, 2021.
[KLQS16] Anthony Kim, Vahid Liaghat, Junjie Qin, and Amin Saberi. Online Energy Storage Management: an Algorithmic Approach. Schloss Dagstuhl – LeibnizZentrum für Informatik, 2016.
[KMA25] Kyung-Bin Kwon, Sayak Mukherjee, and Veronica Adetola. Operational Risks in Grid Integration of Large Data Center Loads: Characteristics, Stability Assessments, and Sensitivity Studies, 2025.
[KPS18] Ravi Kumar, Manish Purohit, and Zoya Svitkina. Improving Online Algorithms via ML Predictions. In Advances in Neural Information Processing Systems, volume 31, 2018.
[KST19] Max Klimm, Daniel Schmand, and Andreas Tönnis. The Online Best Reply Algorithm for Resource Allocation Problems, page 200–215. Springer International Publishing, 2019.
25

[LBL+18] Nevena Lazic, Craig Boutilier, Tyler Lu, Eehern Wong, Binz Roy, MK Ryu, and Greg Imwalle. Data center cooling using model-predictive control. Advances in Neural Information Processing Systems, 31, 2018.
[LBM+22] Todd Levin, Audun Botterud, W Neal Mann, Jonghwan Kwon, and Zhi Zhou. Extreme weather and electricity markets: Key lessons from the February 2021 Texas crisis. Joule, 6(1):1–7, 2022.
[LCS+24] Adam Lechowicz, Nicolas Christianson, Bo Sun, Noman Bashir, Mohammad Hajiesmaili, Adam Wierman, and Prashant Shenoy. Online Conversion with Switching Costs: Robust and Learning-augmented Algorithms. In Proceedings of the 2024 SIGMETRICS/Performance Joint International Conference on Measurement and Modeling of Computer Systems, SIGMETRICS / Performance ’24, New York, NY, USA, Jun 2024. Association for Computing Machinery.
[LOM17] Yunbo Li, Anne-Cecile Orgerie, and Jean-Marc Menaud. Balancing the Use of Batteries and Opportunistic Scheduling Policies for Maximizing Renewable Energy Consumption in a Cloud Data Center. In 2017 25th Euromicro International Conference on Parallel, Distributed and Network-based Processing (PDP), page 408–415. IEEE, 2017.
[LPS08] Julian Lorenz, Konstantinos Panagiotou, and Angelika Steger. Optimal Algorithms for k-Search with Application in Option Pricing. Algorithmica, 55(2):311–328, Aug 2008.
[LRAGVB21] Rubén López-Rodríguez, Adriana Aguilera-González, Ionel Vechiu, and Seddik Bacha. Day-Ahead MPC Energy Management System for an Island Wind/Storage Hybrid Power Plant. Energies, 14(4):1066, February 2021.
[LTC+13] Lian Lu, Jinlong Tu, Chi-Kin Chau, Minghua Chen, and Xiaojun Lin. Online energy generation scheduling for microgrids with intermittent energy sources and co-generation. SIGMETRICS Perform. Eval. Rev., 41(1):53–66, June 2013.
[LV18] Thodoris Lykouris and Sergei Vassilvtiskii. Competitive Caching with Machine Learned Advice. In Jennifer Dy and Andreas Krause, editors, Proceedings of the 35th International Conference on Machine Learning, volume 80 of Proceedings of Machine Learning Research, pages 3296–3305. PMLR, 10–15 Jul 2018.
[LW10] Kim S. Larsen and Sanne Wøhlk. Competitive analysis of the online inventory problem. European Journal of Operational Research, 207(2):685–696, December 2010.
[LYR22] Pengfei Li, Jianyi Yang, and Shaolei Ren. Expert-Calibrated Learning for Online Optimization with Switching Costs. Proceedings of the ACM on Measurement and Analysis of Computing Systems, 6(2), June 2022.
[MBD21] SeyedMorteza Mirhoseininejad, Ghada Badawy, and Douglas G Down. A data-driven, multi-setpoint model predictive thermal control system for data centers. Journal of Network and Systems Management, 29(1):7, 2021.
[MCOGLV+23] Juan Moreno-Castro, Victor Samuel Ocaña Guevara, Lesyani Teresa León Viltre, Yandi Gallego Landera, Oscar Cuaresma Zevallos, and Miguel AybarMejía. Microgrid Management Strategies for Economic Dispatch of Electricity Using Model Predictive Control Techniques: A Review. Energies, 16(16):5935, August 2023.
26

[MHAA17] Thomas Morstyn, Branislav Hredzak, Ricardo P Aguilera, and Vassilios G Agelidis. Model predictive control for distributed microgrid battery energy storage systems. IEEE Transactions on Control Systems Technology, 26(3):11071114, 2017.
[MHHCZL+21] D. Mariano-Hernández, L. Hernández-Callejo, A. Zorita-Lamadrid, O. Duque-Pérez, and F. Santos García. A review of strategies for building energy management system: Model predictive control, demand side management, optimization, and fault detect & diagnosis. Journal of Building Engineering, 33:101692, January 2021.
[MHK25] Attracta Mooney, Alice Hancock, and Amy Kazmin. Europe’s electricity system tested by heatwaves as air-conditioning demand soars. Financial Times, 8 2025.
[MLCQ21] Yanfang Mo, Qiulin Lin, Minghua Chen, and Si-Zhao Joe Qin. Optimal Online Algorithms for Peak-Demand Reduction Maximization with Energy Storage. In Proceedings of the Twelfth ACM International Conference on Future Energy Systems, e-Energy ’21, page 73–83. ACM, June 2021.
[MMS88] Mark Manasse, Lyle McGeoch, and Daniel Sleator. Competitive Algorithms for On-Line Problems. In Proceedings of the 20th Annual ACM Symposium on Theory of Computing, STOC ’88, page 322–333, New York, NY, USA, 1988. Association for Computing Machinery.
[MNW+16] A. Mamun, I. Narayanan, D. Wang, A. Sivasubramaniam, and H.K. Fathy. Multi-objective optimization of demand response in a datacenter with lithium-ion battery storage. Journal of Energy Storage, 7:258–269, August 2016.
[MPF91] Dragoslav S. Mitrinovic, Josip E. Pecˇaric ́, and A. M. Fink. Inequalities Involving Functions and Their Integrals and Derivatives, volume 53. Springer Science & Business Media, 1991.
[MR16] Hamed Mohsenian-Rad. Optimal Bidding, Scheduling, and Deployment of Battery Systems in California Day-Ahead Energy Market. IEEE Transactions on Power Systems, 31(1):442–453, 2016.
[MSVV07] Aranyak Mehta, Amin Saberi, Umesh Vazirani, and Vijay Vazirani. Adwords and generalized online matching. Journal of the ACM (JACM), 54(5):22–es, 2007.
[MV22] Michael Mitzenmacher and Sergei Vassilvitskii. Algorithms with predictions. Commun. ACM, 65(7):33–35, June 2022.
[Nat24] National Renewable Energy Laboratory. Thermal Energy Storage, 2024.
[NKW17] Neda Nasiriani, George Kesidis, and Di Wang. Optimal Peak Shaving Using Batteries at Datacenters: Characterizing the Risks and Benefits. In 2017 IEEE 25th International Symposium on Modeling, Analysis, and Simulation of Computer and Telecommunication Systems (MASCOTS), page 164–174. IEEE, September 2017.
[NMT24] Leonardo Nicoletti, Naureen Malik, and Andre Tartar. AI Needs So Much Power, It’s Making Yours Worse. Bloomberg, dec 2024.
27

[PGM+19] Adam Paszke, Sam Gross, Francisco Massa, Adam Lerer, James Bradbury, Gregory Chanan, Trevor Killeen, Zeming Lin, Natalia Gimelshein, Luca Antiga, Alban Desmaison, Andreas Köpf, Edward Yang, Zach DeVito, Martin Raison, Alykhan Tejani, Sasank Chilamkurthy, Benoit Steiner, Lu Fang, Junjie Bai, and Soumith Chintala. PyTorch: An Imperative Style, High-Performance Deep Learning Library, 2019.
[Pin05] Allan Pinkus. Density in Approximation Theory, 2005.
[PK25] Corina Pons and Andrei Khalip. Spain’s grid operator warns of new voltage swings, urges measures to avoid blackout. Reuters, 10 2025.
[QHG+24] Ziyu Qu, Li He, Xinxin Ge, Fei Wang, Fei Xu, and Jinling Lu. A Two-Stage Forecasting Approach for Day-Ahead Electricity Price Based on Improved Wavelet Neural Network With ELM Initialization. IEEE Transactions on Industry Applications, 60(3):5061–5073, May 2024.
[RHP19] Oliver Ruhnau, Lion Hirth, and Aaron Praktiknjo. Time series of heat demand and heat pump efficiency for energy system modeling. Scientific Data, 6(1), October 2019.
[RKS+22] Ana Radovanovic, Ross Koningstein, Ian Schneider, Bokan Chen, Alexandre Duarte, Binz Roy, Diyue Xiao, Maya Haridasan, Patrick Hung, Nick Care, et al. Carbon-Aware Computing for Datacenters. IEEE Transactions on Power Systems, 2022.
[RMD22] Rémy Rigo-Mariani and Vincent Debucsshere. An ADMM-based Coordination Strategy for the Control of Distributed Storage at the Household Level -Impact of the End-User Settings. In ELECTRIMACS 2022, ELECTRIMACS 2022, Nancy, France, May 2022.
[SALT20] Vanderlei Aparecido Silva, Alexandre Rasi Aoki, and Germano LambertTorres. Optimal Day-Ahead Scheduling of Microgrids with Battery Energy Storage System. Energies, 13(19):5188, October 2020.
[SCY+23] Jun Sun, Shibo Chen, Pengcheng You, Qinmin Yang, and Zaiyue Yang. Battery-Assisted Online Operation of Distributed Data Centers With Uncertain Workload and Electricity Prices. IEEE Transactions on Cloud Computing, 11(2):1303–1314, April 2023.
[SCZ24] Manuel Sage, Joshua Campbell, and Yaoyao Fiona Zhao. Enhancing Battery Storage Energy Arbitrage With Deep Reinforcement Learning and Time-Series Forecasting. In ASME 2024 18th International Conference on Energy Sustainability, ES2024. American Society of Mechanical Engineers, July 2024.
[SFC+18] Gianluca Serale, Massimo Fiorentini, Alfonso Capozzoli, Daniele Bernardini, and Alberto Bemporad. Model predictive control (MPC) for enhancing building and HVAC system energy efficiency: Problem formulation, applications and opportunities. Energies, 11(3):631, 2018.
[SLH+21] Bo Sun, Russell Lee, Mohammad Hajiesmaili, Adam Wierman, and Danny Tsang. Pareto-Optimal Learning-Augmented Algorithms for Online Conversion Problems. In M. Ranzato, A. Beygelzimer, Y. Dauphin, P.S. Liang, and J. Wortman Vaughan, editors, Advances in Neural Information Processing Systems, volume 34, 2021.
28

[SWLB21] Eleni Stai, Cong Wang, and Jean-Yves Le Boudec. Online Battery Storage Management via Lyapunov Optimization in Active Distribution Grids. IEEE Transactions on Control Systems Technology, 29(2):672–690, March 2021.
[SZL+21] Bo Sun, Ali Zeynali, Tongxin Li, Mohammad Hajiesmaili, Adam Wierman, and Danny H.K. Tsang. Competitive Algorithms for the Online Multiple Knapsack Problem with Application to Electric Vehicle Charging. Proceedings of the ACM on Measurement and Analysis of Computing Systems, 4(3), June 2021.
[TBH+18] Prajina Tandukar, Labi Bajracharya, Timothy M. Hansen, Robert Fourney, Ujjwol Tamrakar, and Reinaldo Tonkoski. Real-time Operation of a Data Center as Virtual Power Plant Considering Battery Lifetime. In 2018 International Symposium on Power Electronics, Electrical Drives, Automation and Motion (SPEEDAM), page 81–86. IEEE, June 2018.
[UUNS11] Rahul Urgaonkar, Bhuvan Urgaonkar, Michael J. Neely, and Anand Sivasubramaniam. Optimal power cost management using stored energy in data centers. In Proceedings of the ACM SIGMETRICS Joint International Conference on Measurement and Modeling of Computer Systems, SIGMETRICS ’11, page 221–232, New York, NY, USA, 2011. Association for Computing Machinery.
[WJLM17] Lin Wang, Lei Jiao, Jun Li, and Max Muhlhauser. Online Resource Allocation for Arbitrary User Mobility in Distributed Edge Clouds. In 2017 IEEE 37th International Conference on Distributed Computing Systems (ICDCS). IEEE, June 2017.
[WYY+23] Kaifeng Wang, Lin Ye, Shihui Yang, Zhanfeng Deng, Jieying Song, Zhuo Li, and Yongning Zhao. A hierarchical dispatch strategy of hybrid energy storage system in internet data center with model predictive control. Applied Energy, 331:120414, 2023.
[YHS+20] Lin Yang, Mohammad H. Hajiesmaili, Ramesh Sitaraman, Adam Wierman, Enrique Mallada, and Wing S. Wong. Online Linear Optimization with Inventory Management Constraints. Proceedings of the ACM on Measurement and Analysis of Computing Systems, 4(1), may 2020.
[YJCQ15] Liang Yu, Tao Jiang, Yang Cao, and Qi Qi. Joint Workload and Battery Scheduling with Heterogeneous Service Delay Guarantees for Data Center Energy Cost Minimization. IEEE Transactions on Parallel and Distributed Systems, 26(7):1937–1947, July 2015.
[YLIR24] Jianyi Yang, Pengfei Li, Mohammad Jaminur Islam, and Shaolei Ren. Online Allocation with Replenishable Budgets: Worst Case and Beyond. Proceedings of the ACM on Measurement and Analysis of Computing Systems, 8(1), February 2024.
[YSW+25] Yijie Yang, Jian Shi, Dan Wang, Chenye Wu, and Zhu Han. Carbon-Aware Scheduling of Thermostatically Controlled Loads: A Bilevel DRCC Approach. IEEE Transactions on Smart Grid, 16(2):1233–1247, 2025.
[ZCL08] Yunhong Zhou, Deeparnab Chakrabarty, and Rajan Lukose. Budget Constrained Bidding in Keyword Auctions and Online Knapsack Problems. In Lecture Notes in Computer Science, pages 566–576. Springer Berlin Heidelberg, 2008.
29

[ZHC+18] Ying Zhang, Mohammad H. Hajiesmaili, Sinan Cai, Minghua Chen, and Qi Zhu. Peak-Aware Online Economic Dispatching for Microgrids. IEEE Transactions on Smart Grid, 9(1):323–335, 2018.
[ZLW17] Zijun Zhang, Zongpeng Li, and Chuan Wu. Optimal Posted Prices for Online Cloud Resource Allocation. Proceedings of the ACM on Measurement and Analysis of Computing Systems, 1(1), June 2017.
[ZLY+24] Mingze Zhang, Weidong Li, Samson Shenglong Yu, Haixia Wang, and Yu Ba. Optimal day-ahead large-scale battery dispatch model for multi-regulation participation considering full timescale uncertainties. Renewable and Sustainable Energy Reviews, 189:113963, January 2024.
[ZSHW21] Ali Zeynali, Bo Sun, Mohammad Hajiesmaili, and Adam Wierman. Datadriven Competitive Algorithms for Online Knapsack and Set Cover. Proceedings of the AAAI Conference on Artificial Intelligence, 35(12):10833–10841, May 2021.
[ZZG+23] Xianyi Zeng, Yuanliang Zhang, Bin Guo, Liyu Huang, and Chuangzhi Li. Optimal Day-Ahead Dispatch of Air-Conditioning Load under Dynamic Carbon Emission Factors. In 2023 5th Asia Energy and Electrical Engineering Symposium (AEEES), pages 1–6, 2023.
30

Appendix
A Deferred Experiment Setup and Results
In this section, we provide additional experimental results and details that were deferred from § 7. We start by discussing the runtime of our algorithms in Appendix A.1, before presenting additional experimental results in Appendix A.2 and presenting details of the PALD implementations in Appendix A.3. Note that Fig. 6 plots the “weighted active jobs” metric used to model demand using the Alibaba trace [Ali18], described in § 7.
Figure 6: Weighted active jobs over time (bucketed in 15-min intervals) for the Alibaba trace [Ali18]
Figure 7: Average pertime-step runtime (in ms) for all algorithms with varying instance lengths T.
Figure 8: Average ECR for all algorithms in CAISO with varying delivery switching coefficients δ.
Figure 9: Average ECR for PALD-S in default CAISO experiment trained with varying ρ.
A.1 Runtime Measurements, Discussion, and Optimizations
Building off the discussion in § 4.1, we provide additional details about the empirical runtime of our algorithms and discuss some practical optimizations that can be used to improve the runtime of PAAD and PALD. In Fig. 7, we show the average per-time-step runtime (in milliseconds) for all algorithms with varying instance lengths T, averaging over 8,400 instances (1,200 for each setting of T). We also include the runtime of the offline solver (computed as a bilinear program using GurobiPy [Gur24]-
), normalized by the instance length T to give a fair comparison with the online algorithms. Each instance and each algorithm was run in a single thread on a MacBook Air with M2 processor and 24 GB of RAM. Unsurprisingly, we find that the offline optimal solution is the most computationally expensive, exhibiting a “per-time-step” runtime an order of magnitude higher than the next closest online algorithm. PAAD and PALD-C have comparable runtimes, with averages of 62.5 ms and 65.7 ms per time step,-
 respectively, which remains practical for real-time decision-making. Interestingly, we find that PALD-S is the fastest online algorithm, with an average runtime of just 13.9 ms per time step. We find that this is because of the re-parameterization of the psuedo-cost minimization problem in both variants of PALD (see Appendix A.3). Specifically, when solving the pseudo-cost minimization problem for each driver (see Algorithm 1), our PAAD implementation solves the exact integral over the threshold -
function φ(·), while our PALD implementation uses a squared hinge re-parameterization that is faster for the CVXPY solver. PALD-S is particularly fast because it uses a single set of thresholds for all time steps, allowing the CVXPY solver to cache and re-use computations across time steps. PALD-C makes a forward pass through a neural network to predict the thresholds whenever a driver is created and project them into the feasible sets, which adds some overhead to the per-time-step runtime and bri-
ngs it closer to PAAD in runtime.
31

PALD-S’s performance improvement demonstrates that several optimizations can be used to speed-up the core psuedo-cost minimization problem, e.g., by caching results, using approximations, or re-parameterizing the integral – we do not explore these optimizations in depth in this work, but they offer further evidence to suggest that the PAAD and PALD frameworks are practical for real-time decision-making in large-scale systems. We also remark that additional driver-level optimizations can be employ-
ed to reduce the number of times that the psuedo-cost problem needs to be solved without affecting the theoretical results. Perhaps the highest impact of these optimizations is driver consolidation – if multiple drivers have the same type and relative state, they can be consolidated into a single driver with a larger size, allowing one solution to the pseudo-cost problem to essentially cover multiple drivers. Formally, if for example, two drivers i and j have the same type (i.e., d(i) = d(j)) and -
the same relative state (i.e., w(i)
b /d(i) = w(j)
b /d(j)), then they can be consolidated into a single driver with size d(i) + d(j). We did not implement this optimization in our experiments, but it could be effective in practice to even further reduce the number of times that the pseudo-cost problem needs to be solved.
A.2 Deferred Experimental Results
In this section, we present additional results and figures to complement those in the main body. In subsequent figures (discussed below), we give experiment results for the effect of varying delivery switching coefficient δ and varying the robustness factor ρ in our PALD implementation.
▷ Delivery Switching Cost. Fig. 8 shows the effect of varying the switching cost coefficient δ (with γ fixed at γ = 10) between 0 and 12.5 in CAISO – other parameters are set to the experiment defaults (see § 7). We find that the performance of all algorithms slightly improves as the switching cost coefficient δ increases.
▷ Robustness Factor ρ. In Fig. 9, we show the effect of varying the robustness factor ρ in our PALD-S implementation in CAISO. Recall that ρ controls the degree of robustness guaranteed by the PALD framework. In our main experiments, we typically set ρ = 5α. As ρ → α, the feasible sets for learning thresholds shrink to approximately those thresholds that would be valid for the robust PAAD algorithm (see § 6.2). On the other hand, as ρ → ∞, the feasible sets become unconstrained, allowing PALD-S to-
 learn thresholds that may not be valid for any competitive online algorithm. For PALD-S, we find that there is a steep drop in empirical competitive ratio as ρ increases from α to 2α, after which the performance stabilizes. This suggests that there is a “sweet spot” for ρ that balances robustness and flexibility, and that PALD-S can learn effective thresholds even when the feasible sets are relatively constrained. This also shows that in the case of PALD-S, where we just learn a single set of thr-
esholds for each month in the LMP data, there is a practical limit to how well PALD-S can perform, as it cannot adapt to a specific instance and must “average over” many instances with different characteristics.
A.3 PALD Implementation Details
In this section, we provide additional details about our implementations of the PALD framework in our case study (see § 7) We implement the PALD algorithm using CVXPYLayers [AAB+19, DB16] to enable optimization of the downstream task (i.e., minimizing the empirical competitive ratio on training instances) via backpropagation through the optimization problems that define PALD’s decisions. As outlined in § 6.2, PALD-S directly learns one set of piecewise-affine threshold functions to minimize overal-
l empirical competitive ratio on training instances. We implement projected
32

gradient descent using PyTorch [PGM+19] and CVXPY [DB16] to project the learned thresholds (specifically the parameter vectors) into the feasible sets. To capture some degree of seasonality, we train a set of PALD-S thresholds for each month in a given region’s LMP data (i.e., 12 sets of thresholds in total), using 100 random training instances for each month. In Fig. 10, we give a high-level diagram of the PALD-S learning framework.
Figure 10: PALD-S learns a single set of thresholds (via the parameter vectors yb, y f , yψ) to directly optimize a downstream task loss of the empirical competitive ratio.
In contrast, PALD-C is a neural network-based approach (see § 6.2) that uses contextual features to predict a set of piecewise-affine threshold functions for each driver. In our implementation, we use a PyTorch neural network with two hidden layers (64 neurons each) and ReLU activations. The output of this neural network is a monotone head that ensures the output parameter vectors (3 K-length vectors for the base and flexible driver threshold functions) are non-increasing by construction: we use a-
 softplus activation to ensure non-negativity, and then take a cumulative sum in reverse order to ensure monotonicity. The output of the monotone head is then passed through a CVXPYLayer that projects the outputs into the feasible sets. We train PALD-C on 100 random training instances using all 12 months in a given region’s LMP data, using the time, month, tracking target (if applicable), and statistics about the dayahead LMP forecasts for future time steps (i.e., min, max, average, standard devia-
tion), as the contextual features. In Fig. 11, we give a high-level diagram of the PALD-C learning framework.
Figure 11: PALD-C learns a mapping between context about each driver (see Algorithm 2) and the instance-specific threshold functions that minimize overall task loss. Gradients flow through the differentiable PALD implementation and the final projection layer of the neural network to improve this mapping.
In our implementation of both PALD-S and PALD-C, we use K = 10 grid points to parameterize the piecewise-affine threshold functions. We restrict the thresholds to lie in a concave region by enforcing that the second-order finite differences of the parameter vectors are nonpositive. The reason we do this is because we use a nonnegative sum of squared hinges to parameterize the computation of the integral over the threshold functions in the pseudo-cost
33

minimization problem (i.e., − R w+x
w φb(u)du, − R w+x
w φf (u)du, and − R v+x
v ψf (u)du, see Algorithm 1 for details). This parameterization is convex and DPP (s disciplined parameterized program) in x if the thresholds are linear decreasing or concave decreasing. We implement this parameterization to employ CVXPYLayers, which require the optimization problem to be DPP in the optimization variables (i.e., x) and the parameters (i.e., the threshold function parameters). However, we note that this concavity constraint is not required for the theoretical guarantees of PALD an-
d could likely be circumvented with a different implementation – the underlying integral is analytically convex in x for any non-increasing threshold function.
B Deferred Discussion from § 2
In this section, we provide some deferred discussion about motivating examples for the OSDM problem introduced in § 2.
Grid-integrated Data Center with Storage. Consider a grid-connected data center with local energy storage. At each discrete time step t (e.g., 15-minute intervals), the data center must decide how much energy to purchase (xt) from the grid at a price pt, and how much energy to deliver (i.e., use now) to meet demand (zt) – the difference between these quantities is stored in (resp. delivered from) the local energy storage with state of charge st. In this setting, base demands bt model e.g., interac-
tive workloads that must be satisfied immediately, while flexible demands ft model e.g., delay-tolerant batch jobs that can be deferred until a deadline ∆t > t. The data center’s goal is to minimize its electricity cost (ptxt) while smoothing its purchasing rate (S (·)), since large fluctuations in electricity consumption negatively impact the grid [NMT24]. The data center may also wish to place a small penalty on the cost of delivering energy (D(·)) from the battery to e.g., amortize the battery’-
s degradation over time, as well as a penalty on the smoothness of the delivery rate (i.e., its own rate of energy consumption within the data center) to reduce wear-and-tear on internal components (δ|zt − zt−1|). Compared to
prior work that has studied demand management in data centers [YHS+20], OSDM captures the practical considerations of both flexible and inflexible demand, as well as the desire to make “smooth” decisions on the grid- and demand-sides of the problem. Thermal Energy Demand Management. Consider a thermal energy system with a local energy storage tank [Nat24]. At each time step t, the operator must decide how much thermal energy to purchase (xt) at a price pt (e.g., by converting grid electricity into-
 heat), and how much thermal energy to deliver to meet demand (zt) – the difference between these quantities is stored in (resp. delivered from) the local storage tank with state of charge st. Base demands bt model e.g., heating or cooling loads that must be satisfied immediately, while flexible demands ft model e.g., delay-tolerant heating or cooling loads that can be deferred until a deadline ∆t > t. The operator’s goal is to minimize their energy cost (ptxt) while smoothing their purchasing rat-
e (S (·)). The delivery cost (D(·)) captures the extra input energy required to drive the delivery system (e.g., pumps, heat exchangers, etc.), which may depend on the price of energy (pt). The operator may also wish to place a small penalty on the smoothness of the delivery rate (i.e., its own rate of thermal energy consumption) to reduce wear-and-tear on distribution components such as valves (δ|zt − zt−1|).
Just-in-Time Manufacturing with Material Inventory. Consider a factory that processes raw materials into a finished product, and has a warehouse to store raw materials. At each time step t, the factory must decide how much raw material to purchase (xt) at a price pt, and how much finished product to deliver to meet demand (zt) – the difference between these quantities is stored in (resp. delivered from) the warehouse with state st. Orders for the product arrive over time, where base demands bt mod-
el e.g., orders that must be satisfied immediately, while flexible demands ft model scheduled orders that can be deferred until a deadline ∆t > t. The factory’s goal is to minimize their material cost (ptxt) while smoothing their purchasing rate (S (·)), which can reduce supply chain uncertainty and lead to discounts from suppliers. The
34

delivery cost (D(·)) captures the processing cost for converting raw materials into the finished product at time t. The factory may also wish to place a small penalty on the smoothness of the delivery rate (i.e., its own rate of production) to encourage a more predictable production schedule (δ|zt − zt−1|). Flow Battery Storage Management. Consider a large energy consumer that operates a gridconnected flow battery to store energy during off-peak hours. Flow batteries are a type of rechargeable ba-
ttery where energy is stored in the form of two (or more) liquids contained in external tanks, and energy is extracted by pumping the liquids through a cell stack to generate electricity [Bre19]. At each time step t, the operator must decide how much electricity to purchase (xt) from the grid at a price pt, and how much electricity to deliver to meet demand (zt) – the difference between these quantities is stored in (resp. delivered from) the flow battery with state of charge st. The operator’s go-
al is to minimize their electricity cost (ptxt) while smoothing their purchasing rate (S (·)). The delivery cost (D(·)) captures the extra input energy required to drive the flow battery system (e.g., pumps, valves, etc.), which may depend on the price of energy (pt).
C Details of the OCS Problem and the RORO Algorithm
In this section, we provide deferred details about the OCS problem and the “ramp-on, ramp-off” (RORO) algorithm proposed to solve it optimally [LCS+24], which we discuss in the warmup (see § 3). We start by formally defining the OCS problem, which can be cast as a special case of OSDM with a single unit of flexible demand and no storage. We then describe the RORO algorithm and its guarantee in Appendix C.2.
C.1 Online Conversion with Switching Costs (OCS) [LCS+24]
Problem Statement. Consider an operator who must purchase an asset of unit size (without loss of generality) before a given deadline T while minimizing their total cost. At each time step t ∈ [T], a price pt arrives online, and the decision-maker must choose the amount of the asset to purchase at the current time step, represented by xt ∈ [0, 1]. Given a decision xt, the operator’s cost at time t is ptxt + γ|xt − xt−1|, where the first term is the cost due to the timevarying price, and the second -
term penalizes the decision-maker for “unsmooth jumps” across time steps. The coefficient γ > 0 is known a priori. An offline formulation of OCS is as follows:
[OCS] min
x:={xt }t∈T
T
∑
t=1
pt xt
| {z }
total purchasing cost
+
T+1
∑
t=1
γ|xt − xt−1|,
| {z }
switching penalty
(5)
s.t.
T
∑
t=1
xt = 1,
| {z }
deadline constraint
xt ∈ [0, dt] ∀t ∈ [T]. (6)
(author?) [LCS+24] focus on the online version of OCS, where the decision-maker can only observe price signals up to time t when selecting xt, and each choice of xt is irrevocable (i.e., it cannot be revised at future time steps). The goal is to design an online algorithm that achieves a small competitive ratio (see Def. 2.1) They make the following assumptions on the problem: Assumptions. Prices have bounded support, i.e., pt ∈ [pmin, pmax] ∀t ∈ [T], where pmin and pmax are known positive constan-
ts. They also assume that the switching coefficient γ is
“not too large”. Formally, it is bounded within γ ∈
h
0, (pmax−pmin)
2 . If γ exceeds this range,
its impact on the total cost exceeds that of the prices, and any competitive algorithm should simply minimize this term, making decision-making trivial [LCS+24]. They typically assume
35

Algorithm 3 Online Ramp-On, Ramp-Off Algorithm (RORO) [LCS+24]
1: input: threshold function φ(w) : [0, 1] → [pmin, pmax] 2: initialize: initial decision x0 = 0, current utilization w0 = 0 3: while price pt is revealed and wt−1 < 1 do:
4: solve pseudo-cost minimization problem to obtain decision:
xt ← arg min
x∈[0,1−wt−1 ]
ptxt + γ|x − xt−1| −
Z wt−1+x
wt−1
φ(u)du
5: update utilization as w(t) = wt−1 + xt
that the deadline T is known in advance to facilitate a “compulsory trade” that ensures the entire asset is purchased before the end of the sequence. If the operator has completed wT fraction of the workload at time T, they are forced to purchase the remaining 1 − wT fraction at time T.
C.2 The RORO Algorithm [LCS+24]
In the classic competitive setting, OCS is solved optimally by an online algorithm framework called “ramp-on, ramp-off” (RORO), shown by [LCS+24]. In what follows, we present this algorithm to contextualize our results in § 3. In RORO [LCS+24], the online decision at each time step is made by solving a pseudo-cost minimization problem to determine the amount to purchase at the current time step (i.e., xt ∈ [0, 1 − wt−1]). This minimization balances between the extreme options of buying “too much” -
early (thus incurring suboptimal costs if prices later drop) and waiting too long to purchase ( risking being forced to purchase a large portion at once, potentially at high cost). Whenever the price is “sufficiently attractive”, the pseudo-cost minimization finds the best decision that purchase just enough to maintain a certain competitive ratio. To define this tradeoff, (author?) [LCS+24] introduce a dynamic threshold function φ(w) : [0, 1] → [pmin, pmax], which is a function that maps the curre-
nt amount that has been purchased w to a price value. It is defined as:
φ(w) = pmax − γ + pmax
αRORO
− pmax + 2γ exp w
αRORO
, (7)
where αRORO is the optimal competitive ratio for OCS, defined as the unique positive solution to
exp 1
αRORO = pmax−pmin−2γ
pmax/αRORO−pmax−2γ [LCS+24]:
αRORO := W 2γ + pmin
pmax
− 1 exp 2γ
pmax
− 1 − 2γ
pmax
+1
−1
. (8)
In the above, W(·) is the Lambert W function [CGH+96]. Given this definition of αRORO, note that φ(·) is monotonically decreasing on the interval w ∈ [0, 1] (i.e., non-increasing in the amount of demand that has already been purchased), and captures the marginal trade-off of making progress towards satisfying the single unit of demand. We summarize the RORO algorithm in Algorithm 3.
D Deferred Proofs from § 3
In this section, we give a full description and analysis of the warmup “doubling strategy” for RORO. We first give the pseudocode for this extension in Algorithm 4. The notation instancej(d)
36

Algorithm 4 Doubling Version of RORO for OSDM (only flexible demand & no delivery cost)
1: initialize initial demand guess dˆ ← 1, index j ← 0, set of active RORO instances R ← ∅ 2: create initial instance of RORO R ← R ∪ instance0(dˆ) and associated demands A0 ← ∅ 3: for each time step t do 4: if new non-zero flexible demand ft > 0 arrives then 5: if |A0| + ft ≤ dˆ then
6: Assign ft to current instance of RORO: Aj ← ft 7: else
8: dˆ ← 2j+1, j ← j + 1
9: R ← R ∪ instancej(dˆ) and Aj ← ft
10: Assign ft to new instance of RORO: Aj ← ft
11: compute initial purchase decision x′t ← ∑instancej∈R x(j)
t
12: ▷ x(j)
t is the purchase decision of instancej
13: compute initial delivery decision z′t ← ∑instancej∈R x(j)
t
14: if demand is binding, i.e., ∑t−1
τ=1 zτ + zt < ∑τ:∆τ≤t fτ then
15: increment xt ← x′t + ∑τ:∆τ≤t fτ − ∑t−1
τ=1 zτ − z′t , zt ← z′t + ∑τ:∆τ≤t fτ − ∑t−1
τ=1 zτ − z′t
16: else
17: xt ← x′t, zt ← z′t
denotes the jth instance of RORO that is created with a demand of size dˆ. Note that each instance of RORO operates until all of the flexible demands assigned to it are satisfied (or until their deadlines have passed), at which point they always return 0 as their purchasing decision. We now prove Theorem 3.1, which states that under the assumptions in § 2.5 and § 3, the “doubling extension” of RORO defined in § 3 is ζ-competitive for OSDM with only flexible demand and no delivery cost, where ζ is -
at least:
ζ ≥ min



αRORO
1−σ
+ αRORO
1−σ
·
pmax − 2γ − pmax
αRORO exp σ
αRORO − σpmax(1−σ)
αRORO
pmin
, pmax + 2γ
pmin



.
In the above, αRORO is the optimal competitive ratio for OCS, which is defined in the context of
OSDM as the unique positive solution to exp 1
αRORO = pmax−pmin−2γ
pmax/αRORO−pmax−2γ [LCS+24].
Proof of Theorem 3.1. Consider the following worst-case OSDM instance IK that satisfies the assumptions given in § 2.5 and § 3. Suppose that there are K instances of RORO created over the time horizon. We denote the jth instance of RORO as instancej, j ∈ 0, 1, . . . K. Let Aj denote the set of flexible demands assigned to instancej, and let D(j) = ∑ ft∈Aj ft denote the total size of these demands. We fix an arbitrary amount of total demand D, and a maximum size of each flexible demand σ < 1, and a-
 small increment factor ι. An adaptive adversary presents RORO with a sequence of prices and flexible demands as follows. Whenever a new instance of RORO is created, the adversary presents a “round” of prices in iteratively descending order, starting from pmax and decreasing by ι at each time step. Whenever RORO purchases a non-zero amount of asset, the adversary’s next presented price is pmax, forcing RORO to “switch off” and incur a high switching cost. Suppose the jth instance of RORO has size -
S(j) = 2j. From the start of the jth “round” of descending prices, the adversary begins presenting flexible demands with size smaller than or equal to σ and a uniform deadline of T, until the total size of flexible demands presented so far is equal to S(j) − σ + υ, for small υ > 0. Note that at this point, the total size of flexible demands assigned to instancej is exactly S(j) − σ + υ. For sufficiently small ι, the adversary
37

reaches this point before the descending prices reach pmin – for the rest of the “round”, the adversary presents zero new flexible demand. By presenting prices in descending order (and for sufficiently small ι) the adversary ensures
that RORO’s purchasing is exactly captured by R S(j)−σ+υ
0 φ(j)(u)du, where φ(j) is the pseudo-cost
function of the jth instance of RORO. Furthermore, due to the price fluctuations, RORO will have incurred an extra switching cost (not accounted for by the integral) of at least γ · (S(j) − σ + υ), because the adversary forces RORO to switch off after each purchase. Once instancej has purchased the total amount of demand assigned to it, the adversary continues to present descending prices until it reaches pmin, presenting this best price up to m times (for sufficiently large m). Note that RORO can-
not purchase at these good prices, because it has already satisfied all of the flexible demand assigned to instancej and is thus constrained from doing so. After presenting m copies of pmin, the adversary then presents a new flexible demand with size σ, which is large enough to create a new instance of RORO. At this point, a new “round” of descending prices and adversarial demand begins, repeating the above process for instancej+1, and so on. This continues until K instances of RORO have been crea-
ted. In what follows, we denote D(j) = S(j) − σ + υ as the total size of flexible demands assigned to instancej (i.e., the set Aj). With a slight abuse of notation, let OPT(j) denote the cost incurred by OPT to satisfy the flexible demands assigned to instancej. Since all flexible de
mands assigned to instancej arrive at or after time t(j)
− , and must be satisfied before or at time T, the cost incurred by OPT to satisfy these demands is at least the best price that arrives during this time period (i.e., pmin), times the total demand size D(j). We assume switching costs are negligible for sufficiently large m (see the instance description above). Thus, we have:
OPT(j) = D(j) pmin. (9)
Furthermore, the total cost of OPT on the OSDM instance IK is exactly the sum of the costs incurred to satisfy each Aj, i.e.,
OPT(IK) =
K
∑
j=0
OPT(j).
In the original RORO competitive proof for OCS, they use the following facts to relate the cost of OPT and RORO for a single instance of RORO:
Lemma D.1 ([LCS+24, Lemma B.2]). For a single instance of RORO I with unit-size demand, we have:
OPT(I) ≥ φ(w ̄ ) − γ,
where w ̄ is the total amount of demand satisfied by RORO (excluding demand purchased due to binding constraints).
Lemma D.2 ([LCS+24, Lemma B.3]). For a single instance of RORO I with unit-size demand, we have:
RORO(I) ≤
Z w ̄
0
φ(u)du + γw ̄ + (1 − w ̄ )pmax.
To apply these bounds in our context, we partition the cost of doubling RORO into the sum of the costs incurred by each instancej. With a slight abuse of notation, let RORO(j) denote the cost incurred by instancej to satisfy the flexible demands captured by Aj. By the definition of the worst-case instance, we have:
RORO(j) =
Z D(j)
0
φ(j)(u)du + γD(j).
38

Lemma D.1 suggests that we should be able to lower bound OPT(j) by D(j) h
φ(j)(D(j)) − γ
i
,
where D(j) is the total amount of demand satisfied by instancej. However, this is not true in OSDM– we already established that OPT(j) = D(j) pmin, and the definition of the pseudo-cost
function φ(j) ensures that φ(j)(S(j)) − γ = pmin. However, since D(j) < S(j) (because D(j) =
S(j) − σ + υ) and φ(j) is decreasing, we have φ(j)(D(j)) − γ > pmin, so the bound does not hold.
Thus, we must modify the lower bound on OPT(j) to account for the difference between D(j) and S(j). Thus, we say that φ(j)(w ̄ (j) + (S(j) − D(j))) − γ captures the best price that arrives during the lifetime of instancej if it satisfies w ̄ (j) amount of demand. Since we have w ̄ (j) = D(j) in our worst-case instance, we can use the following lower bound on OPT(j):
OPT(j) = D(j) h
φ(j)(w ̄ (j) + (S(j) − D(j))) − γ
i
. (10)
Note that this lower bound is tight in our worst-case instance, because the best price that arrives during the lifetime of instancej is exactly pmin = φ(j)(S(j)) − γ, and w ̄ (j) + (S(j) −
D(j)) = S(j).
In the case of unit-size demand, it is given that R w
0 φ(u)du + γw + (1 − w)pmax =
αRORO(φ(w) − γ) for all w ∈ [0, 1] [LCS+24, Theorem 3.2]. Extending this to the case of instance j with size S(j), we have the following:
Z w ̄ (j)
0
φ(j)(u)du + γw ̄ (j) + (S(j) − w ̄ (j))pmax = αROROS(j)(φ(j)(w ̄ (j)) − γ),
Z w ̄ (j)
0
φ(j)(u)du + γw ̄ (j) + (D(j) − w ̄ (j))pmax = αROROS(j)(φ(j)(w ̄ (j)) − γ) − (S(j) − D(j))pmax.
Since we know that OPT(j) is lower bounded as in (10), we can relate S(j)(φ(j)(w ̄ (j)) to OPT(j) as follows:
S(j)(φ(j)(w ̄ (j)) − γ) = S(j)
D(j) ·
"
OPT(j) + D(j) pmax − 2γ − pmax
αRORO
exp S(j) − D(j)
αRORO
!#
,
where the trailing term comes from the additive (S(j) − D(j)) term inside the φ(j) function in (10). Combining the above two equations, we have the following characterization of RORO(j):
RORO(j) = αRORO
S(j)
D(j) OPT(j) + αROROS(j) pmax − 2γ − pmax
αRORO
exp S(j) − D(j)
αRORO
!
− (S(j) − D(j))pmax. (11)
Furthermore, note that the total cost of the doubling RORO instances on the OSDM instance IK is exactly the sum of the costs incurred to satisfy each Aj, i.e.,
RORO(IK) =
K
∑
j=0
RORO(j).
In what follows, we let ζ denote the competitive ratio of the doubling RORO algorithm. We have
the following RORO(IK)
OPT(IK) for the given adversarial instance IK, where D = ∑jK=0 D(j) is the total demand in the instance:
RORO(IK )
OPT(IK) = ∑jK=0 RORO(j)
∑jK=0 OPT(j) ,
=
K
∑
j=0
D(j)
D
RORO(j)
OPT(j)
39

We can use the fact that D(j) = S(j) − σ to simplify the expression of RORO(j)/OPT(j) using the
following facts: S(j) − D(j) = σ, S(j)
D(j) = S(j)
S(j)−σ , OPT(j) ≥ D(j) pmin. Thus, we have:
RORO(j)
OPT(j) = S(j)αRORO
S(j) − σ
+ S(j)αRORO
S(j) − σ
·
pmax − 2γ − pmax
αRORO exp σ
αRORO − σpmax(S(j)−σ)
S(j) αRORO
pmin
.
Note that the term S(j)
S(j)−σ is maximized when S(j) is closest to σ, and thus the worst-case ratio
occurs when j = 0 and S(0) = 1. This corresponds to the case where K = 0 (i.e., only the initial instance of RORO is created). In this instance, we have:
RORO(I0)
OPT(I0) = D(0)
D
RORO(0)
OPT(0) ,
where D(0) = D and RORO(0)
OPT(0) is given by the following:
RORO(I0)
OPT(I0) = RORO(0)
OPT(0) =


αRORO
1−σ
+ αRORO
1−σ
·
pmax − 2γ − pmax
αRORO exp σ
αRORO − σpmax(1−σ)
αRORO
pmin

.
Since the competitive ratio ζ is defined as the supremum over all valid OSDM instances which includes I0, we have the following lower bound on ζ:
ζ ≥ αRORO
1−σ
+ αRORO
1−σ
·
pmax − 2γ − pmax
αRORO exp σ
αRORO − σpmax(1−σ)
αRORO
pmin
.
We note that in a regime where σ approaches 1, the above lower bound on ζ is ill-defined. In the OCS problem, it is known that the worst-possible competitive ratio is pmax+2γ
pmin [LCS+24], which is achieved by any feasible algorithm that purchases at any time step (i.e., possibly incurring the worst cost pmax), and incurs the worst-possible switching cost to do so (i.e., 2γ). In the OSDM problem with no delivery costs (i.e., c = ε = 0), no storage, and only flexible demands, we have a similar result – any algorithm is pmax+2γ
pmin -competitive as long as it is feasible. Thus, we have the following breakpoint for the lower bound on ζ:
ζ ≥ min



αRORO
1−σ
+ αRORO
1−σ
·
pmax − 2γ − pmax
αRORO exp σ
αRORO − σpmax(1−σ)
αRORO
pmin
, pmax + 2γ
pmin



.
This completes the proof.
E Deferred Proofs from § 4 (Analysis of PAAD Algorithm)
In this section, we provide full proofs for the results in § 4, which describes and analyzes the PAAD algorithm for the OSDM problem. We start by providing deferred plots of the competitive ratio α as a function of the problem’s parameters to showcase the important dependencies in Fig. 12. We then prove Theorem 4.1, which states the competitive bound of PAAD for OSDM-S, before proving Theorem 4.3, which states the corresponding bound for OSDM-T.
40

(a) Price ratio pmax
pmin (b) Time horizon T (c) Delivery coeff. c (d) Switching coeff. γ
Figure 12: Plotting the competitive ratio α (defined in (2)) as a function of the parameter dependencies described in each subfigure. Unless a parameter is on an x-axis, we set pmin = 10, pmax = 200, γ = 5, δ = 1, c = 0.2, ε = 0.05, and T = 48.
E.1 Proof of Theorem 4.1
In this section, we prove Theorem 4.1, which states that PAAD achieves a competitive ratio of α (defined in (2)) for OSDM-S. We start by proving feasibility of the solution produced by PAAD, before proceeding to prove the competitive ratio.
Proof. Before the main competitive proof, we start our analysis by showing that PAAD produces a feasible solution to OSDM.
Lemma E.1. PAAD produces a feasible solution to OSDM, i.e., it satisfies all demand before their deadlines and never violates the storage capacity constraint.
Proof. We prove feasibility directly by the definition of the algorithm—there are two primary constraints to check. First, we must ensure that all demand is covered. In the case of base demand, this is immediate by line 18 of Algorithm 2, where the delivery decision zt always includes the base demand bt that arrives at time t. In the case of flexible demand, this is ensured by line 19 and line 23 of Algorithm 2, which checks for binding constraints and projects the purchase and delivery decisions -
(if necessary) to ensure that all flexible demands are satisfied before their deadlines. Next, we show that the storage capacity constraint is never violated. We first consider the base demand, as the base demand drivers have the “role” of replenishing the storage. Note that by Definition E.2, the storage is empty (st = 0) during any inactive period, which trivially satisfies the storage capacity constraint 0 ≤ st ≤ S. We thus then consider an arbitrary time step t during an active period. Again b-
y Definition E.2, the total amount of demand purchased
by base drivers in this ith active period is less than or equal to ∑νi
j=0 wˆ (i,j)
b —this itself is less
than or equal to ∑νi
j=0 B(i,j)
b by the definition of the base demand driver. The cumulative base
demand that arrives in the ith active period is equal to ∑νi
j=1 B(i,j)
b (note the changed index to account for the initial storage manager driver j = 0). Thus, the amount stored is at most
∑νi
j=0 wˆ (i,j)
b − ∑νi
j=1 B(i,j)
b , which is at most B(i,0)
b = S by the definition of the storage manager driver. Thus, we have st ≤ S for all t during active periods. We now consider the flexible demand. At a high level, the structure of PAAD is such that flexible demand drivers do not rely on the storage to satisfy demand—rather, they rely on the temporal flexibility of flexible demand to reduce cost subject to constraints. To see this, first note that when a flexible demand’s deadline is binding, it is assumed in § 2.5 to always be feasible to incremen-
t both zt and xt by an amount ft to ensure that the demand is satisfied by its deadline. In such a case, the storage dynamics leave the storage unchanged, i.e., st = st−1 + ft − ft = st−1. Thus, the storage state satisfies st ≤ S for all t during flexible demand deadlines. In other time steps, the effect of the flexible demand drivers on the storage is governed by their
41

per-time-step delivery decisions—i.e., if purchasing exceeds delivery, the storage increases, and if delivery increases purchasing, the storage is depleted. However, note that the delivery decisions of flexible demand drivers are always upper bounded by the amount of demand
that has been purchased so far, i.e., z(i)
t ≤ w(i)
t for all i ∈ F and t ∈ [T]. Furthermore, due to the analytical structure of the purchasing and delivery threshold functions in the context of a monotone price-dependent delivery cost, the (cumulative) delivery decisions of a flexible demand driver at a given time step are always at least as large as its (cumulative) purchasing
decisions, i.e., v(i)
t ≥ w(i)
t for all i ∈ F and t ∈ [T]. Thus, the net effect of flexible demand
drivers on the storage is 0, i.e., ∑i∈F x(i)
t = ∑i∈F z(i)
t for all t ∈ [T], and the storage state satisfies st ≤ S for all t during non-binding flexible demand periods as well.
We now proceed to prove the competitive ratio of PAAD. To do so, we introduce some notation and a definition to facilitate our analysis. For notational brevity, the following considers any arbitrary I ∈ Ω (i.e., any arbitrary instance of OSDM).
Definition E.2 (Active and inactive periods). In our proof, we partition the time horizon T into two types of periods. An active period contains a contiguous interval where the storage is non-empty (i.e., st > 0). An inactive period corresponds to any interval that lies in-between two adjacent active periods.
We use the following additional notations. Suppose that for an arbitrary instance, PAAD’s actions result in n active periods. During the ith active period, i ∈ [n], we denote νi as the
number of base demand drivers that are created. Further, we let wˆ (i,j)
b denote the amount of
the jth base demand driver that has been purchased by the end of the ith active period, j ∈ [νi],
and let B(i,j)
b denote the total demand associated with the jth base demand driver in the ith active period. We index flexible demand drivers according to the time at which they were created, τ ∈
[T]. In particular, we let wˆ (τ)
f and vˆ(τ)
f denote the purchasing and delivery amounts of the τth flexible demand driver before the deadline. Note that fτ ≥ 0 is the total demand associated
with the τth flexible demand driver, and if fτ = 0, then wˆ (τ)
f = vˆ(τ)
f = 0.
We let Db = ∑in=1 ∑νi
j=1 B(i,j)
b and D f = ∑T
τ=1 fτ denote the total base and flexible demand, respectively, that arrive over the entire time horizon. We let D = Db + D f denote the total demand. We let sˆ denote the final status of the storage at the end of the time horizon, i.e., sˆ = sT.
Finally, we introduce the following notation to characterize the optimal solution: let Gi(β) denote the minimum cost of purchasing β units of asset during the ith active period, and let Hτ( f ) denote the minimum cost of purchasing f units of asset during the period [τ, τ + ∆τ] (i.e., during the lifetime of the τth flexible demand). Finally, let p ̃ denote the minimum price during idle periods, and let p ̄ denote the weighted average price during periods with non-zero
base demand, i.e., p ̄ = ∑τ∈[T] pt·bt
Db .
With these preliminaries, we are ready to proceed to the main competitive proof. We begin by proving a lower bound on the cost of the offline optimal solution OPT.
Lemma E.3. Given that PAAD produces n active periods, let βi denote the asset purchased towards the base demand by the offline optimal solution during the ith active period, i ∈ [n], and let p ̃ denote the minimum price during inactive periods. Then OPT(I) is lower bounded as:
OPT(I) ≥
n
∑
i=1
Gi(βi) + Db −
n
∑
i=1
βi
!
p ̃ + εp ̄Db +
T
∑
τ=1
(1 + ε) Hτ( fτ) + Db + D f
2κ T
42

Proof. The cost of an optimal offline solution, denoted as OPT(I), can be split into five components. The first two components are the purchasing cost and delivery cost associated with the base demand, respectively. The third and fourth components are the purchasing and delivery costs associated with the flexible demand, respectively. The last component is the switching cost incurred by the optimal solution. Recall that we let Gi(β) denote the minimum cost of purchasing β units of asset during th-
e ith active period, and let βi denote the amount of asset purchased towards the base demand during the ith active period by the optimal solution. Then the total purchasing cost associated with the base demand is lower bounded by ∑in=1 Gi(βi) + (Db − ∑in=1 βi) p ̃, where p ̃ is the minimum price during inactive periods. The delivery cost associated with the base demand is lower bounded by εp ̄Db, where p ̄ is the weighted average price during periods with non-zero base demand—note that we use p ̄ -
in this case because the base demand must be delivered at the time of its arrival. Next, recall that we let Hτ( f ) denote the minimum cost of purchasing f units of asset during the period [τ, τ + ∆τ] (i.e., during the lifetime of the τth flexible demand). Then the
total purchasing cost associated with the flexible demand is lower bounded by ∑T
τ=1 Hτ( fτ).
The delivery cost associated with the flexible demand is lower bounded by ε ∑T
τ=1 Hτ( fτ), since the flexible demand can be delivered at any time before its deadline, and the smallest cost to do so is at the best (i.e., smallest) price during its lifetime. Finally, note that the switching cost incurred by the optimal solution is at least Db + D f 2κ
T , where κ = γ + δ. This follows because the total demand must be purchased and delivered over the entire time horizon, and the switching cost is minimized when the switching cost is evenly distributed over the entire time horizon. This completes the proof.
After Lemma E.3, we now proceed to prove an upper bound on the cost incurred by PAAD.
Lemma E.4. Given that PAAD produces n active periods, let wˆ (i,j)
b denote the amount of the jth base
demand driver that has been purchased by the end of the ith active period, j ∈ [νi], and let B(i,j)
b denote
the total demand associated with the jth base demand driver in the ith active period. Further, let wˆ (τ)
f and
vˆ(τ)
f denote the purchasing and delivery amounts of the τth flexible demand driver before the deadline, respectively. Then the cost incurred by PAAD is upper bounded as:
PAAD(I) ≤
n
∑
i=1
νi
∑
j=1
Z wˆ (i,j)
b
0
φ(i,j)
b (u)du +
T
∑
τ=1
Z wˆ (τ)
f
0
φ(τ)
f (u)du +
Z vˆ(τ)
f
0
ψ(τ)(z)dz
!
(12)
+ Db + D f −
n
∑
i=1
νi
∑
j=1
wˆ (i,j)
b−
T
∑
τ=1
wˆ (τ)
f
!
(pmax + 2γ) (13)
+ Db (p ̄(c + ε) + 2δ) + D f −
T
∑
τ=1
vˆ(τ)
f
!
(pmax(c + ε) + 2δ) (14)
− cpmin
n
∑
i=1
νi
∑
j=1
wˆ (i,j)
b+
T
∑
τ=1
wˆ (τ)
f
!
+ sˆpmax. (15)
Proof. This proof follows by explicitly characterizing the worst-case cost of PAAD using the definition in Algorithm 2. In the equation above, (12) corresponds to the worst-case cost that can be charged to each driver’s purchasing and delivery threshold functions, (13) corresponds to the worst-case cost incurred by PAAD for purchasing any remaining demand that has not been purchased by the drivers, (14) corresponds to the worst-case cost incurred by PAAD for delivering demand (in the flexible dema-
nd case, this corresponds to any demand that has not been delivered thus far), and (15) corresponds to the worst-case improvement in delivery costs due to increases in the storage state, plus the final storage level. We unpack each below.
43

First, note that by the definition of each driver, PAAD only purchases (or delivers) when the market price pt is sufficiently low to make the threshold minimization problem in lines 13 and 17 negative (see Algorithm 2). For instance, we can say that the purchasing and switching cost
of the jth base demand driver in the ith active period is upper bounded by R wˆ (i,j)
b
0 φ(i,j)
b (u)du. Similar logic follows for the purchasing and delivery costs of the flexible demand drivers. Aggregating over all drivers gives (12). We remark that the definition of the pseudo-cost minimization problem (Line 3, Algorithm 1) charges the current procurement cost (ptx), the current switching cost γ|x − xt−1|, and the future (worst-case) switching cost γ|x| to the threshold function.3 This is feasible because the threshold function includes enough “buffer” to accommodate switching costs by d-
efinition, and captures any costs incurred before e.g., constraints become binding. Any additional purchasing needed to satisfy all demands is exactly captured by the difference between Db + D f (the total base and flexible demand) and the cumulative purchasing by
the drivers ∑in=1 ∑νi
j=1 wˆ (i,j)
b + ∑T
τ=1 wˆ (τ)
f . In the worst case, this additional purchasing is done at the highest price pmax, and incurs a switching cost of 2γ (i.e., a switch up and a switch down). This gives (13). Next, the delivery cost is upper bounded as follows. For the base demands that must be delivered immediately, the worst-case delivery cost is p ̄(c + ε) + 2δ per unit, where p ̄ is the weighted average price during periods with non-zero base demand. Note that c + ε is the worst-case for the delivery coefficient (i.e., the lar-
gest cost PAAD can pay as a function of the storage state), and assumes that a maximal switching cost of 2δ is incurred. For the flexible demands, the worst-case delivery cost is incurred for any remaining undelivered demand that is not already covered by the flexible demand driver—this is upper bounded by pmax(c + ε) + 2δ per unit. Note that the same worst-case assumptions are made as above, except that in the flexible demand case, this undelivered demand is delivered at the worst-case (highest) -
price pmax. This gives (14). Finally, (15) credits PAAD for any improvements in delivery costs that occur due to increases in the storage state. In particular, recall that in this setting of OSDM, the delivery cost coefficient decreases as a function of the storage state, so any purchasing that feeds the storage will reduce future delivery costs. In the worst-case however, this improvement is realized when it has the smallest possible impact on the delivery cost, i.e., when the overall price is cm-
in. Finally, the term sˆpmax captures any excess left in the storage at the end of the time horizon, which was purchased at a price of at most pmax. This gives (15), and completes the proof.
In addition to the above lemmas, the following technical lemmas are necessary to prove a relation between the threshold functions and the optimal cost. We restate Lemma 4.4 and Lemma 4.5 as follows:
By the definition of the threshold function φ(i,j)
b (·), the following relation always holds:
Zw
0φb(u)du + (1 − w)(pmax + 2γ) + pmax(c + ε) + 2δ − cwpmin = α φb(w) − 2γ + εpmax + 2κ
T ∀w ∈ [0, 1].
By the definitions of the threshold functions φf (·) and ψf (·), the following relation always holds:
Zw
0φ f (u)du + (1 − w)(pmax + 2γ) − cwpmin +
Zv
0ψf (z)dz + (1 − v)(pmax(c + ε) + 2δ) =
α′ φf (w) + ψf (v) − 2κ + 2κ(1 + c + ε)
T(1 + ε) ∀w ∈ [0, 1], v ∈ [0, w].
3The future switching cost captures the fact that the final global purchasing/delivery decisions xT+1 and zT+1 are both 0 by construction, and the pseudo-cost minimization captures this future cost in advance.
44

Using the previous lemmas, we now prove the competitive ratio. First, in the simple case where Db + D f = 0, we have that the optimal cost is 0 and the cost of PAAD is at most sˆpmax ≤ Spmax, so PAAD is α-competitive under Definition 2.1 by setting C = Spmax. We thus focus on the more general case in which Db + D f > 0. Using the results in Lemmas E.3, E.4, 4.4, and 4.5, we claim that the following holds:
PAAD(I ) − pmaxsˆ
OPT(I) ≤ α.
To show this result, we first substitute the bounds from Lemmas E.3 and E.4 into the left-hand side of the above equation. We define some shorthand notation to facilitate the presentation.
Let Q = ∑in=1 ∑νi
j=1
R wˆ (i,j)
b
0 φ(i,j)
b (u)du + ∑T
τ=1
R wˆ (τ)
f
0 φ(τ)
f (u)du + R vˆ(τ)
f
0 ψ(τ)(z)dz
!
denote the integrals
over the thresholds. Let Wˆ b = ∑in=1 ∑νi
j=1 wˆ (i,j)
b , let Wˆ f = ∑T
τ=1 wˆ (τ)
f , and let Wˆ = Wˆ b + Wˆ f denote the total purchasing by all drivers.
Further, let Vˆb = ∑in=1 ∑νi
j=1 vˆ(i,j)
b denote the total delivery by all flexible demand drivers.
Let β = ∑in=1 βi denote the total amount of asset purchased towards the base demand by the optimal solution during all active periods, noting that Db − β ≥ 0 by definition. Finally, let D = Db + D f denote the total demand. Substituting the bounds from Lemmas E.3 and E.4 into the left-hand side of the above equation, we have:
PAAD(I ) − pmaxsˆ
OPT(I ) ≤ Q + (D − Wˆ )(pmax + 2γ) + Db (p ̄(c + ε) + 2δ) + (D f − Vˆ f )(pmax(c + ε) + 2δ) − cpminWˆ
∑in=1 Gi(βi) + (Db − β)p ̃ + εp ̄Db + ∑T
τ=1(1 + ε)Hτ( fτ) + D 2κ
T
Using the fact that Db − β ≥ 0, the following is equivalent:
= Q+(β+D f −Wˆ )(pmax+2γ)+β (p ̄(c+ε)+2δ) + (D f −Vˆ f )(pmax(c+ε)+2δ)−cpminWˆ +(Db −β)(pmax+2κ+ p ̄(c+ε))
∑in=1 Gi(βi)+εp ̄β+∑T
τ=1(1+ε)Hτ( fτ)+(D f +β) 2κ
T +(Db −β)(p ̃+εp ̄+ 2κ
T)
Then, we have the following:
≤ max
( Q + (β + D f − Wˆ )(pmax + 2γ) + β (p ̄(c + ε) + 2δ) + (D f − Vˆ f )(pmax(c + ε) + 2δ) − cpminWˆ
∑in=1 Gi(βi) + εp ̄β + ∑T
τ=1(1 + ε)Hτ( fτ) + (D f + β) 2κ
T
,
(Db − β)(pmax + 2κ + p ̄(c + ε))
(Db − β)(p ̃ + εp ̄ + 2κ
T)
)
,
where the definition of p ̃ ensures that the second term in the max is at most α. We now focus on the first term. For the sake of contradiction, suppose that
Q + (β + D f − Wˆ )(pmax + 2γ) + β (p ̄(c + ε) + 2δ) + (D f − Vˆ f )(pmax(c + ε) + 2δ) − cpminWˆ
∑in=1 Gi(βi) + εp ̄β + ∑T
τ=1(1 + ε)Hτ( fτ) + (D f + β) 2κ
T
> α.
(16)
Instead of working directly with the expression in terms of β, we first reason about how
the cost of OPT and PAAD relate to one another in terms of ∑in=1 ∑νi
j=1 B(i,j)
b , the total demand assigned to base drivers. We introduce the following notation for the sake of brevity: let Db =
45

∑in=1 ∑νi
j=1 B(i,j)
b denote the total base demand. Then, we have the following relation:
Q + (Db + D f − Wˆ )(pmax + 2γ) + Db (p ̄(c + ε) + 2δ) + (D f − Vˆ f )(pmax(c + ε) + 2δ) − cpminWˆ
∑in=1 Gi(Bi) + εp ̄Db + ∑T
τ=1(1 + ε)Hτ( fτ) + (D f + Db) 2κ
T
,
≥ Q+(β+D f −Wˆ )(pmax+2γ)+β (p ̄(c+ε)+2δ)+(D f −Vˆ f )(pmax(c+ε)+2δ)−cpminWˆ +(Db −β)(pmax+ p ̄(c+ε)+2κ)
∑in=1 Gi(βi)+εp ̄β+∑T
τ=1(1+ε)Hτ( fτ)+(D f +β) 2κ
T +(Db −β)(p ̃+εp ̄+ 2κ
T) ,
> α.
where in the second inequality, we have used the fact that there is a worst-case input instance
such that for all 0 < β < β′ < ∑νi
j=1 B(i,j)
b − ˆb(i), we have Gi(β′) − Gi(β) ≤ p ̃(β′ − β), where ˆb(i)
is the initial state of the storage at the start of the ith active period in OPT’s solution. See Lemma E.5 for a formal proof of this.
Lemma E.5. Defining ˆb(i) as the initial state of the storage at the start of the ith active period in OPT’s
solution, there exists a worst-case input instance such that for all 0 < β < β′ < ∑νi
j=1 B(i,j)
b − ˆb(i), we have:
1. Gi(0) = 0,
2. Gi(β′) > Gi(β),
3. Gi(β′) − Gi(β) ≤ p ̃(β′ − β).
Proof. Statements 1 and 2 are immediate from the definition of Gi(·). Recall that p ̃ is defined as the minimum price during inactive periods, which corresponds with the worst (highest) price that PAAD’s base drivers are willing to pay to fill the storage. To prove statement 3, consider any input instance I = [(pt, bt, ft, ∆t)]t∈[T]. An adversary
can construct a new input instance I ′ = [(p′t, b′t, ft′, ∆′t)]t∈[T′] as follows:
I ′ := [(p ̃, 0, 0, ·) , (p1, b1, f1, ∆1) , (p ̃, 0, 0, ·) , (p2, b2, f2, ∆2) , . . . , (pT, bT, fT, ∆T)] .
The purpose of constructing this new input instance is to guarantee that the purchasing cost of PAAD does not change, and the purchasing cost of OPT will not increase (for this worst-case logic, we only consider the purchasing cost, ignoring additional switching costs that would increase OPT’s cost). Note that this is possible because the adversary can set the length of the time horizon. Let Gi(β) be the minimum cost of purchasing β units of asset during the ith
active period. When OPT purchases another β′ − β, β′ ≤ ∑νi
j=1 B(i,j)
b − ˆb(i) units of asset during
the ith active period, the cost will not be larger than p ̃(β′ − β), since OPT can always purchase at any newly added time slots. Thus, there always exists a worst-case input instance such that Gi(β′) − Gi(β) ≤ p ̃(β′ − β).
Given the result in Lemma E.5, we proceed to work with the expression in terms of Db. During the ith active period and the lifetime of the jth base demand driver, the minimum marginal
purchasing price observed is given by φ(i,j)
b (wˆ (i,j)
b − 2γ by the definition of the threshold func
tion. Similarly, during the lifetime of the τth flexible demand driver, the minimum marginal
purchasing and delivery cost observed is given by 1+ε
1+c+ε φ(τ)
f (wˆ (τ)
f ) + ψ(τ)
f (vˆ(τ)
f ) − 2κ .
This gives the following lower bounds on the terms that depend on Gi and Hτ, respectively:
n
∑
i=1
Gi
ν∑i
j=1
B(i,j)
b
!
≥
n
∑
i=1
ν∑i
j=1
φ(i,j)
b (wˆ (i,j)
b ) − 2γ × B(i,j)
b
T
∑
τ=1
(1 + ε)Hτ( fτ) ≥
T
∑
τ=1
1+ε
1 + c + ε φ(τ)
f (wˆ (τ)
f ) + ψ(τ)
f (vˆ(τ)
f ) − 2κ × fτ.
46

Substituting these bounds into the previous expression, we have that the left-hand-side of (16) is less than or equal to:
≤ Q + (Db + D f − Wˆ )(pmax + 2γ) + Db (p ̄(c + ε) + 2δ) + (D f − Vˆ f )(pmax(c + ε) + 2δ) − cpminWˆ
∑in=1 ∑νi
j=1 φ(i,j)
b (wˆ (i,j)
b ) − 2γ B(i,j)
b + εp ̄Db + ∑T
τ=1 1+ε
1+c+ε φ(τ)
f (wˆ (τ)
f ) + ψ(τ)
f (vˆ(τ)
f ) − 2κ fτ + (D f + Db) 2κ
T
.
By rearranging the terms in the above and substituting for Q, we obtain the following:
=
∑in=1 ∑νi
j=1
h
X(i,j)
b
i
+ ∑T
τ=1
h
X(τ)
f
i
∑in=1 ∑νi
j=1
h
φ(i,j)
b (wˆ (i,j)
b )−2γ+εp ̄+ 2κ
T B(i,j)
b
i
+∑T
τ=1
h 1+ε
1+c+ε φ(τ)
f (wˆ (τ)
f )+ψ(τ)
f (vˆ(τ)
f )−2κ fτ + fτ 2κ
T
i,
(17)
where X(i,j)
b and X(τ)
f are defined as follows (for each driver):
X(i,j)
b=
Z wˆ (i,j)
b
0 φ(i,j)
b (u)du + (B(i,j)
b − wˆ (i,j)
b )(pmax + 2γ) + (pmax(c + ε) + 2δ) B(i,j)
b − cwˆ (i,j)
b pmin,
X(τ)
f=
Z wˆ (τ)
f
0 φ(τ)
f (u)du + ( fτ − wˆ (τ)
f )(pmax + 2γ) +
Z vˆ(τ)
f
0 ψ(τ)
f (u)du + (pmax(c + ε) + 2δ) ( fτ − vˆ(τ)
f ) − cwˆ (τ)
f pmin.
Since (17) is > α by assumption, one of the following cases must be true: Case I: There exists some i ∈ [n] and j ∈ [νi] such that
X(i,j)
b > αB(i,j)
b φ(i,j)
b (wˆ (i,j)
b ) − 2γ + εp ̄ + 2κ
T.
Case II: There exists some τ ∈ [T] such that
X(τ)
f > α′ fτ
1+ε
1 + c + ε φ(τ)
f (wˆ (τ)
f ) + ψ(τ)
f (vˆ(τ)
f ) − 2κ + 2κ
T,
But, if either of these two cases are true (i.e., for any unit of base or flexible demand), they contradict Lemmas 4.4 and 4.5, respectively. Thus, we have a contradiction, and the original
assumption that (17) is > α must be false. This completes the proof that PAAD(I)−pmaxsˆ
OPT(I) ≤ α.
Using this result, we have:
PAAD(I ) ≤ αOPT(I ) + pmaxsˆ ≤ αOPT(I ) + pmaxS,
where pmaxS is a constant. This shows that PAAD is α-competitive under Definition 2.1, which completes the proof.
E.2 Proof of Corollary 4.3
In this section, we prove Corollary 4.3, which states that under the assumptions in § 2.5, PAAD is αT-competitive for OSDM-T, where αT is given by:
αT ≥ ω

W

− ((1+c+ε)pmax−(1+ε)pmin)e
ω2δ/T − pmin c−(1+c+ε) pmax
(1+c+ε) pmax +2(η +δ)
(1+c+ε) pmax +2(η +δ)

 + (1+c+ε)pmax+pminc−ω2δ/T
(1+c+ε) pmax +2(η +δ)


, (18)
where ω = (1+c+ε)
(1+ε) . We start with a (re-)definition of PAAD’s threshold functions and pseudocost minimization problem for the OSDM-T setting.
47

Definition E.6 (Threshold functions and pseudo-cost minimization for PAAD in OSDM-T). Given a base driver with size denoted by d, the purchasing threshold function φb for OSDM-T is defined as:
φb(w) = pmax + 2η + pminc + pmax(1 + c + ε) + 2(η + δ)
αT
− pmax(1 + ε) + pminc + 2δ
T exp w
αTd : w ∈ [0, d].
Furthermore, given a flexible driver with size denoted by d, the purchasing threshold function φf and delivery threshold function ψf for OSDM-T are defined as:
φ f (w) = pmax + pminc + 2η + pmax + 2η
α′
T
− (pmax + pminc) exp w
α′
Td : w ∈ [0, d],
ψ(v) = pmax(c + ε) + 2δ + pmax(c + ε) + 2δ
α′
T
− pmax(c + ε) + 2δ
T ω exp v
α′
Td : v ∈ [0, d],
where ω = (1+c+ε)
(1+ε) and α′
T = αT/ω.
Since OSDM-T includes a tracking cost on the purchasing side (i.e., rather than a switching cost), we modify the pseudo-cost minimization problem solved by the base demand driver and the flexible demand driver (just on the purchasing side) accordingly. In Algorithm 1, we replace the input of a switching coeff. γ with inputs of a tracking coeff. η and target at in line 1. We replace line 2 with:
define pseudo-target aˆ(i)
t ← at · d(i)
∑i∈B∪F d(i)
and replace line 3 with:
solve x(i)
t ← argminx∈[0,d(i)−w(i)
t−1] ptx + η|x − aˆ(i)
t | − Φ(i)(w(i)
t−1, w(i)
t−1 + x)
Proof. The result largely follows by the proof of Theorem 4.1, with modifications to account for the tracking cost instead of the switching cost on the grid side. Thus, to show the result, we state several lemmas that replace the corresponding logic in the proof of Theorem 4.1. We start by stating a lower bound on the cost of the offline optimal solution OPT for OSDM-T, analogous to Lemma E.3.
Lemma E.7. Given that PAAD produces n active periods, let βi denote the asset purchased towards the base demand by the offline optimal solution during the ith active period, i ∈ [n], and let p ̃ denote the minimum price during inactive periods. Then OPT(I) is lower bounded as:
OPT(I) ≥
n
∑
i=1
Gi(βi) + Db −
n
∑
i=1
βi
!
p ̃ + εp ̄Db +
T
∑
τ=1
(1 + ε) Hτ( fτ) + Db + D f
2δ T
Proof. The proof follows by the same logic as Lemma E.3, except instead of a switching cost on the grid side (i.e., with coefficient γ), there is a tracking cost with coefficient η. The switching cost on the demand side remains the same (with coefficient δ). The worst case for PAAD is when OPT pays zero tracking cost, yielding that the total tracking & switching cost incurred by the optimal solution is at least Db + D f 2δ
T.
Lemma E.8. Given that PAAD produces n active periods, let wˆ (i,j)
b denote the amount of the jth base
demand driver that has been purchased by the end of the ith active period, j ∈ [νi], and let B(i,j)
b denote
the total demand associated with the jth base demand driver in the ith active period. Further, let wˆ (τ)
f and
vˆ(τ)
f denote the purchasing and delivery amounts of the τth flexible demand driver before the deadline,
48

respectively. Then the cost incurred by PAAD is upper bounded as:
PAAD(I) ≤
n
∑
i=1
νi
∑
j=1
Z wˆ (i,j)
b
0
φ(i,j)
b (u)du +
T
∑
τ=1
Z wˆ (τ)
f
0
φ(τ)
f (u)du +
Z vˆ(τ)
f
0
ψ(τ)(z)dz
!
(19)
+ Db + D f −
n
∑
i=1
νi
∑
j=1
wˆ (i,j)
b−
T
∑
τ=1
wˆ (τ)
f
!
(pmax + 2η) (20)
+ Db (p ̄(c + ε) + 2δ) + D f −
T
∑
τ=1
vˆ(τ)
f
!
(pmax(c + ε) + 2δ) (21)
− cpmin
n
∑
i=1
νi
∑
j=1
wˆ (i,j)
b+
T
∑
τ=1
wˆ (τ)
f
!
+ sˆpmax. (22)
Proof. The proof follows by the same logic as Lemma E.4 – the main change is with respect to (20), to capture the worst-case purchasing cost incurred by PAAD for purchasing the remaining demand that has not been purchased by the drivers. First, note that when the threshold functions φb and φf are defined according to Corollary 4.3, the pseudo-cost terms in (19) capture the worst-case tracking cost incurred by PAAD due to deviations from the signal wherever demand has been purchased by the drivers.-
 Finally, any additional purchasing needed to satisfy demand is exactly captured by the difference between Db + D f (the total base and flexible demand) and the cumulative purchasing
by the drivers ∑in=1 ∑νi
j=1 wˆ (i,j)
b + ∑T
τ=1 wˆ (τ)
f . In the worst case, this additional purchasing is done at the highest price pmax, and incurs a tracking cost of 2η (capturing the case where purchasing is simultaneously not done when the tracking target is non-zero and is done when the tracking target is zero). This gives (20), and completes the proof.
Due to the redefinition of the threshold functions φb, φf and ψf in Corollary 4.3, we have the following technical lemmas to relate the threshold functions and the optimal cost:
Lemma E.9. By the (re-)definition of the threshold function φ(i,j)
b (·) in Corollary 4.3, the following
relation always holds:
Zw
0φb(u)du + (1 − w)(pmax + 2η) + pmax(c + ε) + 2δ − cwpmin = αT φb(w) − 2η + εpmax + 2δ
T ∀w ∈ [0, 1].
Lemma E.10. By the (re-)definitions of the threshold functions φ(τ)
f (·) and ψ(τ)(·) in Corollary 4.3, the following relation always holds:
Zw
0φ f (u)du + (1 − w)(pmax + 2η) − cwpmin +
Zv
0ψf (z)dz + (1 − v)(pmax(c + ε) + 2δ) =
α′
T φf (w) + ψf (v) − 2(η + δ) + 2δ(1 + c + ε)
T(1 + ε) ∀w ∈ [0, 1], v ∈ [0, w],
Using the results in Lemmas E.7, E.8, E.9, and E.10, we claim that the following holds:
PAAD(I ) − pmaxsˆ
OPT(I ) ≤ αT.
To show this result, we first substitute the bounds from Lemmas E.7 and E.8 into the lefthand side of the above equation. As in the proof of Theorem 4.1, we define some shorthand notation to facilitate the presentation.
Let Q = ∑in=1 ∑νi
j=1
R wˆ (i,j)
b
0 φ(i,j)
b (u)du + ∑T
τ=1
R wˆ (τ)
f
0 φ(τ)
f (u)du + R vˆ(τ)
f
0 ψ(τ)(z)dz
!
denote the integrals
over the thresholds. Let Wˆ b = ∑in=1 ∑νi
j=1 wˆ (i,j)
b , let Wˆ f = ∑T
τ=1 wˆ (τ)
f , and let Wˆ = Wˆ b + Wˆ f denote the total purchasing by all drivers.
49

Further, let Vˆb = ∑in=1 ∑νi
j=1 vˆ(i,j)
b denote the total delivery by all flexible demand drivers.
Let β = ∑in=1 βi denote the total amount of asset purchased towards the base demand by the optimal solution during all active periods, noting that Db − β ≥ 0 by definition. Finally, let D = Db + D f denote the total demand. Substituting the bounds from Lemmas E.7 and E.8 into the left-hand side of the above inequality, we have:
Q+(β+D f −Wˆ )(pmax+2η)+β (p ̄(c+ε)+2δ) + (D f −Vˆ f )(pmax(c+ε)+2δ)−cpminWˆ +(Db −β)(pmax+2(η+δ)+ p ̄(c+ε))
∑in=1 Gi(βi)+εp ̄β+∑T
τ=1(1+ε)Hτ( fτ)+(D f +β) 2δ
T +(Db −β)(p ̃+εp ̄+ 2δ
T)
Then, we have the following:
≤ max
( Q + (β + D f − Wˆ )(pmax + 2η) + β (p ̄(c + ε) + 2δ) + (D f − Vˆ f )(pmax(c + ε) + 2δ) − cpminWˆ
∑in=1 Gi(βi) + εp ̄β + ∑T
τ=1(1 + ε)Hτ( fτ) + (D f + β) 2δ
T
,
(Db −β)(pmax+2(η+δ)+ p ̄(c + ε))
(Db − β)(p ̃ + εp ̄ + 2δ
T)
)
,
where the definition of p ̃ ensures that the second term in the max is at most αT. We now focus on the first term. For the sake of contradiction, suppose that
Q + (β + D f − Wˆ )(pmax + 2η) + β (p ̄(c + ε) + 2δ) + (D f − Vˆ f )(pmax(c + ε) + 2δ) − cpminWˆ
∑in=1 Gi(βi) + εp ̄β + ∑T
τ=1(1 + ε)Hτ( fτ) + (D f + β) 2δ
T
> αT.
(23)
Instead of working directly with the expression in terms of β, we first reason about how
the cost of OPT and PAAD relate to one another in terms of ∑in=1 ∑νi
j=1 B(i,j)
b , the total demand assigned to base drivers. We introduce the following notation for the sake of brevity: let B =
∑in=1 ∑νi
j=1 B(i,j)
b denote the total base demand. Then, we have the following relation:
Q + (B + D f − Wˆ )(pmax + 2η) + B (p ̄(c + ε) + 2δ) + (D f − Vˆ f )(pmax(c + ε) + 2δ) − cpminWˆ
∑in=1 Gi(Bi) + εp ̄B + ∑T
τ=1(1 + ε)Hτ( fτ) + (D f + B) 2δ
T
,
≥ Q+(β+D f −Wˆ )(pmax+2η)+β (p ̄(c+ε)+2δ)+(D f −Vˆ f )(pmax(c+ε)+2δ)−cpminWˆ +(B−β)(pmax+ p ̄(c+ε)+2κ)
∑in=1 Gi(βi)+εp ̄β+∑T
τ=1(1+ε)Hτ( fτ)+(D f +β) 2δ
T +(B−β)(p ̃+εp ̄+ 2δ
T) ,
> αT.
where in the second inequality, we have used Lemma E.5. We proceed to work with the expression in terms of B. During the ith active period and the lifetime of the jth base de
mand driver, the minimum marginal purchasing price observed is given by φ(i,j)
b (wˆ (i,j)
b ) − 2η
by the definition of the threshold function. Similarly, during the lifetime of the τth flexible demand driver, the minimum marginal purchasing and delivery cost observed is given by
1+ε
1+c+ε φ(τ)
f (wˆ (τ)
f ) + ψ(τ)
f (vˆ(τ)
f ) − 2(η + δ) .
This gives the following lower bounds on the terms that depend on Gi and Hτ, respectively:
n
∑
i=1
Gi
ν∑i
j=1
B(i,j)
b
!
≥
n
∑
i=1
ν∑i
j=1
φ(i,j)
b (wˆ (i,j)
b ) − 2η × B(i,j)
b
T
∑
τ=1
(1 + ε)Hτ( fτ) ≥
T
∑
τ=1
1+ε
1 + c + ε φ(τ)
f (wˆ (τ)
f ) + ψ(τ)
f (vˆ(τ)
f ) − 2(η + δ) × fτ.
50

Substituting these bounds into the previous expression, we have that the left-hand-side of (23) is less than or equal to:
≤ Q + (B + D f − Wˆ )(pmax + 2η) + B (p ̄(c + ε) + 2δ) + (D f − Vˆ f )(pmax(c + ε) + 2δ) − cpminWˆ
∑in=1 ∑νi
j=1 φ(i,j)
b (wˆ (i,j)
b )−2η B(i,j)
b +εp ̄B+∑T
τ=1 1+ε
1+c+ε φ(τ)
f (wˆ (τ)
f )+ψ(τ)
f (vˆ(τ)
f )−2(η+δ) fτ +(Df +B) 2δ
T
.
By rearranging the terms in the above and substituting for Q, we obtain the following:
=
∑in=1 ∑νi
j=1
h
X(i,j)
b
i
+ ∑T
τ=1
h
X(τ)
f
i
∑in=1 ∑νi
j=1
h
φ(i,j)
b (wˆ (i,j)
b )−2η+εp ̄+ 2δ
T B(i,j)
b
i
+∑T
τ=1
h 1+ε
1+c+ε φ(τ)
f (wˆ (τ)
f )+ψ(τ)
f (vˆ(τ)
f )−2(η+δ) fτ + fτ 2δ
T
i,
(24)
where X(i,j)
b and X(τ)
f are defined as follows (for each driver):
X(i,j)
b=
Z wˆ (i,j)
b
0 φ(i,j)
b (u)du + (B(i,j)
b − wˆ (i,j)
b )(pmax + 2η) + (pmax(c + ε) + 2δ) B(i,j)
b − cwˆ (i,j)
b pmin,
X(τ)
f=
Z wˆ (τ)
f
0 φ(τ)
f (u)du + ( fτ − wˆ (τ)
f )(pmax + 2η) +
Z vˆ(τ)
f
0 ψ(τ)
f (u)du + (pmax(c + ε) + 2δ) ( fτ − vˆ(τ)
f ) − cwˆ (τ)
f pmin.
Since (24) is > αT by assumption, one of the following cases must be true: Case I: There exists some i ∈ [n] and j ∈ [νi] such that
X(i,j)
b > αTB(i,j)
b φ(i,j)
b (wˆ (i,j)
b ) − 2η + εp ̄ + 2δ
T.
Case II: There exists some τ ∈ [T] such that
X(τ)
f > α′
T fτ
1+ε
1 + c + ε φ(τ)
f (wˆ (τ)
f ) + ψ(τ)
f (vˆ(τ)
f ) − 2(η + δ) + 2δ
T,
But, if either of these two cases are true (i.e., for any unit of base or flexible demand), they contradict Lemmas E.9 and E.10, respectively. Thus, we have a contradiction, and the original
assumption that (24) is > αT must be false. This completes the proof that PAAD(I)−pmaxsˆ
OPT(I) ≤ αT.
Using this result, we have:
PAAD(I ) ≤ αTOPT(I ) + pmaxsˆ ≤ αTOPT(I ) + pmaxS,
where pmaxS is a constant. This shows that PAAD is αT-competitive under Definition 2.1, which completes the proof.
F Deferred Proofs from § 5
In this section, we provide full proofs for the results in § 5, which establishes lower bounds on the competitive ratio achievable by deterministic online algorithms for several instantiations of OSDM. We start by proving Theorem 5.1, which shows a lower bound on the best competitive ratio achievable by any deterministic online algorithm for OSDM-S. Then, we prove Corollary 5.1, which shows a lower bound on the best competitive ratio achievable for OSDM-S with only base demand, before proving Theo-
rem 5.2, which shows that the decreasing delivery cost case is strictly harder than the increasing delivery cost case within the class of monotone delivery costs defined by Def. 2.4. Finally, we prove Theorem 5.3, which shows a lower bound on the best competitive ratio achievable by any deterministic online algorithm for OSDM-T.
51

F.1 Proof of Theorem 5.1
In this section, we prove Theorem 5.1, which states that no deterministic online algorithm can achieve a competitive ratio better than α (defined in (2)) for OSDM-S. We start by defining a family of difficult instances for OSDM-S, before proceeding to prove the lower bound on the competitive ratio achievable by any deterministic online algorithm.
Proof. To show this result, we first define a family of instances, and then show that the competitive ratio of any deterministic algorithm is lower bounded under these instances. Consider the following set of instances {Ix}x∈[pmin,pmax], where Ix is called an x-decreasing instance.
Definition F.1 (x-decreasing instance for OSDM-S). Let n, m ∈ N be sufficiently large, and denote
ρ := pmax−pmin/n.
For x ∈ [pmin, pmax], we define a decreasing market price sequence as follows: The sequence is partitioned into nx := 2 · ⌈(x−pmin)/ρ⌉ + 1 alternating batches of prices. The ith batch (i ∈ [nx − 2]) contains m prices pmax if i is odd, and 1 cost function with coefficient pmax − (⌈i/2⌉)ρ if i is even. The last two batches consist of m cost functions with coefficient x + ι, followed by a final batch of 1 cost function with coefficient pmax. The demand sequence is defined as follows: At t = 1, a batc-
h of flexible demand f1 = 1 arrives with deadline ∆1 = T. All other bt and ft are zero.
Let h(x) and z(x) denote conversion functions that both map [pmin, pmax] → [0, 1], respectively. Suppose these arbitrary functions fully describe the actions of a deterministic ALG for OSDM on an instance Ix. Specifically, suppose that h(x) describes ALG’s purchasing decisions, and z(x) describes ALG’s delivery decisions before the arrival of the last batch of prices (pmax) in the instance. Note that by definition, z(x) ≤ h(x), since the delivery cannot exceed what has been purchased thus far. Not-
e that for large n, processing an instance Ix−ρ is equivalent to first processing Ix (besides the last two batches), and then processing batches with prices x − ρ and
pmax.
Since ALG is deterministic and both conversions (i.e., purchasing and delivery) are both unidirectional (irrevocable), we must have that h(x − ρ) ≥ h(x) and z(x − ρ) ≥ z(x), i.e., h(x) and z(x) are both non-increasing in [pmin, pmax]. Intuitively, the entire demand should be purchased before the end of the sequence if the lowest price appears, i.e., h(pmin) = 1. Furthermore, since the lowest price appears at least twice, ALG pays switching cost proportional to h(x) and z(x), because each good pric-
e is “interrupted” by bad prices in the Ix instance, captured by 2γh(x) and 2δz(x), respectively. However, if ALG is forced to purchase at the deadline T, it also pays a switching cost of 2γ(1 − h(x)) and 2δ(1 − z(x)), respectively. Thus, the total worst-case switching cost paid by ALG is 2γ + 2δ. Recall that in the price-dependent decreasing delivery cost case, the worst case delivery coefficient is c + ε ≤ 1, when the storage is empty. We bound the total effective delivery cost coefficient (i.e.-
, across all time steps) as follows:
∑
t∈[T]
(c − cst + ε) = c + ε − ∑
t∈[T]
cst ≤ c + ε − ch(x),
where we have used the fact that for any ALG, ∑t∈[T] st ≤ h(x). Since the delivery cost is pricedependent, the worst-case for ALG occurs when the savings in the delivery cost are realized at the lowest price, i.e., pminch(x). Then the total cost of ALG on instance Ix is described by:
ALG(Ix) = h(l)l −
Zx
l
udh(u) + (1 − h(x))pmax + 2γ − pminch(x)+
(c + ε)lz(l) − (c + ε)
Zx
l
udz(u) + (1 − z(x))(c + ε)pmax + 2δ.
52

The optimal cost on instance Ix (if all prices are known in advance) is given by:
OPT(Ix) = x + 2γ
T + εx + 2δ
T.
If ALG is α⋆-competitive, then a necessary condition is that for all x ∈ [pmin, pmax], ALG(Ix) ≤
α⋆OPT(Ix). This imposes a necessary condition on h(x) and z(x), which can be expressed as the following differential inequality:
h(l)l −
Zx
l
udh(u) + (1 − h(x))pmax + 2γ − pminch(x)+
(c + ε)lz(l) − (c + ε)
Zx
l
udz(u) + (1 − z(x))(c + ε)pmax + 2δ
≤ α⋆ x + 2γ
T + εx + 2δ
T.
Recall that z(x) ≤ h(x). On the instances described above, under the assumption that κ =
γ + δ ≤ pmax−pmin
2 (see § 2.5), note that for sufficiently good x (i.e., x < l) it is strictly better
for ALG to deliver as much as possible, i.e., z(x) = h(x), reducing its last-minute delivery cost. Thus, we proceed by assuming that z(x) = h(x). Using integration by parts and letting κ = γ + δ, this gives the following condition on h(x):
h(x)x −
Zx
l
h(u)du + (1 − h(x))pmax + 2κ − pminch(x)+
(c + ε)xh(x) − (c + ε)
Zx
l
h(u)du + (1 − h(x))(c + ε)pmax
≤ α⋆ x + 2κ
T + εx .
To solve for α⋆, we can use Grönwall’s inequality [MPF91, Theorem 1, p. 356]. First, observe that h(x) must satisfy the following:
h(x) ≥ pmax + 2κ
(1+c+ε) − α⋆ x+ 2κ
T +εx
1+c+ε
pmax − x + pminc
1+c+ε
−1
pmax − x + pminc
1+c+ε
Zx
l
h(u)du.
By Grönwall’s inequality [MPF91, Theorem 1, p. 356], it follows that:
h(x) ≥ pmax + 2κ
(1+c+ε) − α⋆ x+ 2κ
T +εx
1+c+ε
pmax − x + pminc
1+c+ε
−
Zx
l
pmax + 2κ
(1+c+ε) − α⋆ u+ 2κ
T +εu
1+c+ε
pmax − u + pminc
1+c+ε
2 du,
h(x) ≥ α⋆ 1 + ε
1 + c + ε ln (1 + c + ε)(pmax − x) + pminc
(1 + c + ε)(pmax − l) + pminc .
Recall that we have a boundary condition that h(pmin) = 1 – we can combine this with the above to obtain:
1 ≥ α⋆ 1 + ε
1 + c + ε ln (1 + c + ε)(pmax − pmin) + pminc
(1 + c + ε)(pmax − l) + pminc .
Letting l = (1+c+ε)pmax+2κ
α⋆(1+ε) − 2κ
T(1+ε) , the optimal α⋆ is obtained when the above inequality is binding, so we have:
1 = α⋆ 1 + ε
1 + c + ε ln


(1 + c + ε)pmax − (1 + ε)pmin
(1 + c + ε)pmax − (1+c+ε)[(1+c+ε)pmax+2κ]
α⋆(1+ε) + (1+c+ε)2κ
T(1+ε) + pminc

.
53

Solving the above yields that the optimal α⋆ for any ALG solving OSDM is lower bounded by:
α⋆ ≥ ω

W

− ((1+c+ε)pmax−(1+ε)pmin)e
−ω2κ/T − pmin c−(1+c+ε) pmax
(1+c+ε) pmax +2κ
(1+c+ε) pmax +2κ

 + (1+c+ε)pmax+pminc−ω2κ/T
(1+c+ε) pmax +2κ


,
where κ = γ + δ and ω = (1+c+ε)
(1+ε) . This completes the proof.
F.2 Proof of Corollary 5.1
In this section, we prove Corollary 5.1, which states that no deterministic online algorithm can achieve a competitive ratio better than αB (defined in (4)) for OSDM-S instances that only contain base demand. To do so, we define a tweaked set of difficult instances for OSDM-S with only base demand, and use a similar conversion function argument to bound the best competitive ratio.
Proof. To show the result, we start by defining a set of instances similar to those defined in Def. F.1, where the instance contains only base demand.
Definition F.2 (x-decreasing instance for OSDM-S with just base demand). Recall the price sequence defined in Def. F.1. We define a similar set of instances {I ′x}x∈[pmin,pmax], where I ′x is called an x-decreasing instance with just base demand.
The demand sequence is defined as follows: At t = T, a batch of base demand bT = 1 arrives. All other bt and ft are zero.
We now show that the competitive ratio of any deterministic online algorithm ALG on the above instances is lower bounded by αB defined in (4). We assume without loss of generality that ALG knows the value of bT = 1 in advance, since this can only help ALG. Let h(x) denote a conversion function that maps [pmin, pmax] → [0, 1] – this describes ALG’s purchasing decisions before the final batch of prices (pmax) in the instance. Since ALG is deterministic and purchasing is unidirectional (irrevocable),-
 we must have that h(x − ρ) ≥ h(x), i.e., h(x) is non-increasing in [pmin, pmax]. Intuitively, the entire demand should be purchased before the end of the sequence if the lowest price appears, i.e., h(pmin) = 1. ALG pays switching cost proportional to h(x), because each good price is “interrupted” by bad prices in the Ix instance, captured by 2γh(x). If ALG is forced to purchase when the demand arrives, it also pays a switching cost of 2γ(1 − h(x)). Thus, the total worst-case switching cost on the-
 purchasing side paid by ALG is 2γ. The switching cost on the delivery side for both ALG and OPT is 2δ, since the entire base demand arrives at the end of the sequence, and it must be delivered at that time. Recall that in the price-dependent decreasing delivery cost case, the worst case delivery coefficient is c + ε ≤ 1, when the storage is empty. We bound the total effective delivery cost coefficient (i.e., across all time steps) as follows:
∑
t∈[T]
(c − cst + ε) = c + ε − ∑
t∈[T]
cst ≤ c + ε − ch(x),
where we have used the fact that for any ALG, ∑t∈[T] st ≤ h(x). Since the delivery cost is pricedependent, the savings in the delivery cost are realized at the price at the final time step, i.e., pmaxch(x). Then the total cost of ALG on instance I′x is described by:
ALG(I ′
x) = h(l)l −
Zx
l
udh(u) + (1 − h(x))pmax + 2γ − pmaxch(x) + (c + ε)pmax + 2δ.
54

The optimal cost on instance I′x (if all prices are known in advance) is given by:
OPT(I ′
x) ≥ x + 2γ
T + εpmax + 2δ.
If ALG is α⋆-competitive, then a necessary condition is that for all x ∈ [pmin, pmax], ALG(Ix) ≤
α⋆OPT(Ix). This imposes a necessary condition on h(x), which can be expressed as the following differential inequality:
h(l)l −
Zx
l
udh(u) + (1 − h(x))pmax + 2γ − pmaxch(x) + (c + ε)pmax + 2δ
≤ α⋆ x + 2γ
T + εpmax + 2δ .
Using integration by parts and letting κ = γ + δ, this gives the following condition on h(x):
h(x) ≥
pmax(1 + c + ε) + 2κ − α⋆ x + 2γ
T + εpmax + 2δ
pmax + pmaxc − x − 1
pmax + pmaxc − x
Zx
l
h(u)du.
By Grönwall’s inequality [MPF91, Theorem 1, p. 356], it follows that:
h(x) ≥
pmax(1+c+ε) + 2κ − α⋆ x + 2γ
T + εpmax + 2δ
pmax + pmaxc − x −
Zx
l
pmax(1+c+ε) + 2κ − α⋆ u + 2γ
T + εpmax + 2δ
(pmax + pmaxc − u)2 du,
h(x) ≥ α⋆ ln pmax + pmaxc − x
pmax + pmaxc − l ,
where l = pmax(1+c+ε)+2κ
α⋆ − 2γ
T − pmaxε − 2δ.
Recall that we have a boundary condition that h(pmin) = 1 – we can combine this with the above to obtain:
1 ≥ α⋆ ln pmax + pmaxc − pmin
pmax + pmaxc − l .
Letting l = (1+c+ε)pmax+2κ
α⋆ − 2κ
T − pmaxε − 2δ, the optimal α⋆ is obtained when the above inequality is binding, so we have:
1 = α⋆ ln
"
(1 + c)pmax − pmin
(1 + c)pmax − (1+c+ε)pmax+2κ
α⋆ + 2γ
T + pmaxε + 2δ
#
.
Solving the above yields that the optimal α⋆ for any ALG solving OSDM-S with just base demand is lower bounded by:
α⋆ ≥


W


− ((1 + c) pmax − pmin) e− (1+c+ε)pmax+2δ+ 2γ
T
(1+c+ε) pmax +2κ
(1 + c + ε)pmax + 2κ


 + (1 + c + ε)pmax + 2δ + 2γ
T
(1 + c + ε)pmax + 2κ

 
−1
,
which completes the proof.
F.3 Proof of Theorem 5.2
In this section, we prove Theorem 5.2, which states that amongst the class of monotone delivery costs defined in Def. 2.4, the best achievable competitive ratios for OSDM-S with an increasing delivery cost are strictly better than those for OSDM-S with a decreasing delivery cost (i.e., the cases considered in Theorem 5.1 and Corollary 5.1)
55

Proof. To show this result, we prove two lower bounds (one in the case of just base demand, and one in the case of just flexible demand) to compare against the lower bounds in Theorem 5.1 and Corollary 5.1, respectively. We start with the case of flexible demand and the following lemma:
Lemma F.3. There exists a set of OSDM-S instances with only flexible demand and a monotone increasing delivery cost such that no deterministic online algorithm ALG can achieve a competitive ratio better than αIF, given by:
αIF ≥
"
W − (pmax − pmin) e−1
pmax + 2κ
T(1+ε)
!
+1
#−1
. (25)
Proof. We recall Def. F.1 and consider the same set of instances {Ix}x∈[pmin,pmax], where Ix is called an x-decreasing instance.
Let h(x) and z(x) denote conversion functions that both map [pmin, pmax] → [0, 1], respectively. Suppose these arbitrary functions fully describe the actions of a deterministic ALG for OSDM with a monotone increasing delivery cost on an instance Ix. Specifically, h(x) describes ALG’s purchasing decisions and z(x) describes ALG’s delivery decisions before the arrival of the last batch of prices (pmax) in the instance. Note that by definition, z(x) ≤ h(x), since the delivery cannot exceed what has b-
een purchased thus far. Since ALG is deterministic and both conversions (i.e., purchasing and delivery) are both unidirectional (irrevocable), we must have that h(x − ρ) ≥ h(x) and z(x − ρ) ≥ z(x), i.e., h(x) and z(x) are both non-increasing in [pmin, pmax]. Intuitively, the entire demand should be purchased before the end of the sequence if the lowest price appears, i.e., h(pmin) = 1. Furthermore, since the lowest price appears at least twice, ALG pays switching cost proportional to h(x) and z(x)-
, because each good price is “interrupted” by bad prices in the Ix instance, captured by 2γh(x) and 2δz(x), respectively. However, if ALG is forced to purchase at the deadline T, it also pays a switching cost of 2γ(1 − h(x)) and 2δ(1 − z(x)), respectively. Thus, the total worst-case switching cost paid by ALG is 2γ + 2δ. Recall that in the price-dependent increasing delivery cost case, the worst case delivery coefficient is c + ε ≤ 1, when the storage is fully charged. Thus, in this case, ALG’s op-
timal decision is to deliver the demand as early as possible (i.e., h(x) = z(x)∀x ∈ [pmin, pmax]), reducing its delivery cost. Under this assumption, ALG’s effective delivery coefficient is ε. Then the total cost of ALG on instance Ix is described by:
ALG(Ix) = h(l)l −
Zx
l
udh(u) + (1 − h(x))pmax + 2γ + εlz(l) − ε
Zx
l
udz(u) + (1 − z(x))εpmax + 2δ.
And the optimal cost on instance Ix (if all prices are known in advance) is given by:
OPT(Ix) = x + 2γ
T + εx + 2δ
T.
If ALG is α⋆-competitive, then a necessary condition is that for all x ∈ [pmin, pmax], ALG(Ix) ≤
α⋆OPT(Ix). This imposes a necessary condition on h(x) and z(x), which can be expressed as the following differential inequality:
h(l)l −
Zx
l
udh(u) + (1 − h(x))pmax + 2γ + εlz(l) − ε
Zx
l
udz(u) + (1 − z(x))εpmax + 2δ
≤ α⋆ x + 2γ
T + εx + 2δ
T.
Note that since z(x) ≤ h(x), we can proceed by assuming that z(x) = h(x), since this minimizes the effective delivery cost that ALG pays. Using integration by parts and letting κ = γ + δ,
56

this gives the following condition on h(x):
h(x) ≥ pmax + pmaxε + 2κ − α⋆ x + 2κ
T + εx
pmax + pmaxε − x − εx − 1 + ε
pmax + pmaxε − x − εx
Zx
l
h(u)du.
By Grönwall’s inequality [MPF91, Theorem 1, p. 356], it follows that:
h(x) ≥ pmax + pmaxε + 2κ − α⋆ x + 2κ
T + εx
pmax + pmaxε − x − εx − (1 + ε)
Zx
l
pmax + pmaxε + 2κ − α⋆ u + 2κ
T + εu
(pmax + pmaxε − u − εu)2 du,
h(x) ≥ α⋆ ln pmax − x
pmax − l ,
where l = (1+ε)pmax+2κ
α⋆(1+ε) − 2κ
T(1+ε) .
Recall that we have a boundary condition that h(pmin) = 1 – we can combine this with the above to obtain:
1 ≥ α⋆ ln pmax − pmin
pmax − l .
Letting l = (1+ε)pmax+2κ
α⋆(1+ε) − 2κ
T(1+ε) , the optimal α⋆ is obtained when the above inequality is binding, so we have:
1 = α⋆ ln


pmax − pmin
pmax − (1+ε)pmax+2κ
α⋆(1+ε) + 2κ
T(1+ε)

.
Solving the above yields that the optimal α⋆ for any ALG solving OSDM-S with just flexible demand and increasing delivery cost is lower bounded by:
α⋆ ≥
"
W − (pmax − pmin) e−1
pmax + 2κ
T(1+ε)
!
+1
#−1
,
where κ = γ + δ, completing the proof.
Next, we prove a similar lower bound in the case of base demand:
Lemma F.4. There exists a set of OSDM-S instances with only base demand and a monotone increasing delivery cost such that no deterministic online algorithm ALG can achieve a competitive ratio better than αIB, given by:
αIB ≥


W


− ((1 − c) pmax − pmin) e− (1+ε)pmax+2δ+ 2γ
T
(1+ε) pmax +2κ
(1 + ε)pmax + 2κ


 + (1 + ε)pmax + 2δ + 2γ
T
(1 + ε)pmax + 2κ

 
−1
. (26)
Proof. We recall Def. F.2 and consider the same set of instances {I ′x}x∈[pmin,pmax], where I ′x is called an x-decreasing instance.
Let h(x) denote a conversion function that maps [pmin, pmax] → [0, 1] – this describes ALG’s purchasing decisions before the final batch of prices (pmax) in the instance. Since ALG is deterministic and purchasing is unidirectional (irrevocable), we must have that h(x − ρ) ≥ h(x), i.e., h(x) is non-increasing in [pmin, pmax]. Intuitively, the entire demand should be purchased before the end of the sequence if the lowest price appears, i.e., h(pmin) = 1. ALG pays switching cost proportional to h(x),-
 because each good price is “interrupted” by bad prices in the I′x instance, captured by 2γh(x). If ALG is forced to purchase when the demand
57

arrives, it also pays a switching cost of 2γ(1 − h(x)). Thus, the total worst-case switching cost on the purchasing side paid by ALG is 2γ. The switching cost on the delivery side for both ALG and OPT is 2δ, since the entire base demand arrives at the end of the sequence, and it must be delivered at that time. Recall that in the price-dependent increasing delivery cost case, the worst case delivery coefficient is c + ε ≤ 1, when the storage is full. We bound the total effective delivery cost coef-
ficient (i.e., across all time steps) as follows:
∑
t∈[T]
(cst + ε) = ε + ∑
t∈[T]
cst ≤ ε + ch(x),
where we have used the fact that for any ALG, ∑t∈[T] st ≤ h(x). Since the delivery cost is pricedependent, the extra delivery cost is realized at the price at the final time step, i.e., pmaxch(x). Then the total cost of ALG on instance I′x is described by:
ALG(I ′
x) = h(l)l −
Zx
l
udh(u) + (1 − h(x))pmax + 2γ + pmaxε + pmaxch(x) + 2δ.
The optimal cost on instance I′x (if all prices are known in advance) is given by:
OPT(I ′
x) ≥ min x + 2γ
T + (c + ε)pmax + 2δ, pmax + 2γ
T + 2δ + pmaxε .
If ALG is α⋆-competitive, then a necessary condition is that for all x ∈ [pmin, pmax], ALG(I ′x) ≤
α⋆OPT(I′x). This imposes a necessary condition on h(x), which can be expressed as the following differential inequality:
h(l)l −
Zx
l
udh(u) + (1 − h(x))pmax + 2γ + pmaxε + pmaxch(x) + 2δ
≤ α⋆ x + 2γ
T + (c + ε)pmax + 2δ .
Using integration by parts and letting κ = γ + δ, this gives the following condition on h(x):
h(x) ≥
pmax(1 + ε) + 2κ − α⋆ x + 2γ
T + (c + ε)pmax + 2δ
pmax − pmaxc − x − 1
pmax − pmaxc − x
Zx
l
h(u)du.
By Grönwall’s inequality [MPF91, Theorem 1, p. 356], it follows that:
h(x) ≥
pmax(1 + ε) + 2κ − α⋆ x + 2γ
T + (c + ε)pmax + 2δ
pmax − pmaxc − x −
Zx
l
pmax(1+ε) + 2κ − α⋆ u+ 2γ
T +(c+ε)pmax+2δ
(pmax− pmaxc−u)2 du,
h(x) ≥ α⋆ ln pmax − pmaxc − x
pmax − pmaxc − l ,
where l = pmax(1+ε)+2κ
α⋆ − 2γ
T − pmax(ε + c) − 2δ. Recall that we have a boundary condition that h(pmin) = 1 – we can combine this with the above to obtain:
1 ≥ α⋆ ln pmax − pmaxc − pmin
pmax − pmaxc − l .
Letting l = pmax(1+ε)+2κ
α⋆ − 2γ
T − pmax(ε + c) − 2δ, the optimal α⋆ is obtained when the above inequality is binding, so we have:
1 = α⋆ ln
"
(1 − c)pmax − pmin
pmax − pmax(1+ε)+2κ
α⋆ + 2γ
T + pmaxε + 2δ
#
.
58

Solving the above yields that the optimal α⋆ for any ALG solving OSDM-S with just base demand with increasing delivery cost is lower bounded by:
α⋆ ≥


W


− ((1 − c) pmax − pmin) e− (1+ε)pmax+2δ+ 2γ
T
(1+ε) pmax +2κ
(1 + ε)pmax + 2κ


 + (1 + ε)pmax + 2δ + 2γ
T
(1 + ε)pmax + 2κ

 
−1
,
completing the proof.
By Lemmas F.3 and F.4, we have that the best competitive ratio achievable by any deterministic online algorithm for OSDM-S with a monotone increasing delivery cost is αIF in a general case and αIB in the case of just base demand. Given parameters of pmin, pmax, c, ε, γ, δ, T, it can be verified that αIF < α and αIB < αB, where α and αB are defined in (2) and (4), respectively, and represent the corresponding optimal competitive bounds for the case of monotone decreasing delivery cost. This complet-
es the proof.
F.4 Proof of Theorem 5.3
In this section, we prove Theorem 5.3, which states that there exists a set of OSDM-T instances (i.e., with a tracking cost) such that no deterministic online algorithm ALG can achieve a competitive ratio better than αT (for αT defined in (3)).
Proof. To show this result, we first define a family of instances, and then show that the competitive ratio of any deterministic algorithm is lower bounded under these instances. Consider the following set of instances {Ix}x∈[pmin,pmax], where Ix is called an x-decreasing instance.
Definition F.5 (x-decreasing instance for OSDM-T). Let n, m ∈ N be sufficiently large, and denote
ρ := pmax−pmin/n.
For x ∈ [pmin, pmax], we define a decreasing market price sequence as follows: The sequence is partitioned into nx := 2 · ⌈(x−pmin)/ρ⌉ + 1 alternating batches of prices. The ith batch (i ∈ [nx − 2]) contains m prices pmax if i is odd, and 2 cost functions with coefficient pmax − (⌈i/2⌉)ρ if i is even. The last two batches consist of m cost functions with coefficient x + ι, followed by a final batch of m cost functions with coefficient pmax. The tracking target is defined as follows: at = 0 for all-
 batches of prices except the second-to-last
batch, where at = 1/m for all m prices. Note that ∑tT=1 at = 1. The demand sequence is defined as follows: At t = 1, a batch of flexible demand f1 = 1 arrives with deadline ∆1 = T. All other bt and ft are zero.
Let h(x) and z(x) denote conversion functions that both map [pmin, pmax] → [0, 1], respectively. Suppose these arbitrary functions fully describe the actions of a deterministic ALG for OSDM on an instance Ix. Specifically, suppose that h(x) describes ALG’s purchasing decisions, and z(x) describes ALG’s delivery decisions before the arrival of the last batch of prices (pmax) in the instance. Note that by definition, z(x) ≤ h(x), since the delivery cannot exceed what has been purchased thus far. Not-
e that for large n, processing an instance Ix−ρ is equivalent to first processing Ix (besides the last two batches), and then processing batches with prices x − ρ and
pmax.
Since ALG is deterministic and both conversions (i.e., purchasing and delivery) are both unidirectional (irrevocable), we must have that h(x − ρ) ≥ h(x) and z(x − ρ) ≥ z(x), i.e., h(x) and z(x) are both non-increasing in [pmin, pmax]. Intuitively, the entire demand should be purchased before the end of the sequence if the lowest price appears, i.e., h(pmin) = 1. Furthermore, since the lowest price appears at least twice, Due to the tracking target, any procurement before the second-to-last batch i-
ncurs a tracking penalty of ηh(x), since the target is zero during this time. Furthermore, during the last two
59

batches, ALG incurs a tracking penalty of η + η(1 − h(x)), since the target is 1/m during the first m prices in the batch, and zero during the second m prices in the batch – note that ALG must purchase (1 − h(x)) at the last price to satisfy the deadline. Thus, the total tracking penalty incurred by ALG is given by 2η. Recall that in the price-dependent decreasing delivery cost case, the worst case delivery coefficient is c + ε ≤ 1, when the storage is empty. We bound the total effective delivery-
 cost coefficient (i.e., across all time steps) as follows:
∑
t∈[T]
(c − cst + ε) = c + ε − ∑
t∈[T]
cst ≤ c + ε − ch(x),
where we have used the fact that for any ALG, ∑t∈[T] st ≤ h(x). Since the delivery cost is pricedependent, the worst-case for ALG occurs when the savings in the delivery cost are realized at the lowest price, i.e., pminch(x). Then the total cost of ALG on instance Ix is described by:
ALG(Ix) = h(l)l −
Zx
l
udh(u) + (1 − h(x))pmax − pminch(x) + 2η+
(c + ε)lz(l) − (c + ε)
Zx
l
udz(u) + (1 − z(x))(c + ε)pmax + 2δ.
The optimal cost on instance Ix (if all prices are known in advance) is given by:
OPT(Ix) = x + εx + 2δ
T,
where note that OPT incurs no tracking penalty by perfectly matching the target. If ALG is α⋆competitive, then a necessary condition is that for all x ∈ [pmin, pmax], ALG(Ix) ≤ α⋆OPT(Ix). This imposes a necessary condition on h(x) and z(x), which can be expressed as the following differential inequality:
h(l)l −
Zx
l
udh(u) + (1 − h(x))pmax + 2η − pminch(x)+
(c + ε)lz(l) − (c + ε)
Zx
l
udz(u) + (1 − z(x))(c + ε)pmax + 2δ
≤ α⋆ x + εx + 2δ
T.
Recall that z(x) ≤ h(x). On the instances described above, under the assumption that κ =
γ + δ ≤ pmax−pmin
2 (see § 2.5), note that for sufficiently good x (i.e., x < l) it is strictly better
for ALG to deliver as much as possible, i.e., z(x) = h(x), reducing its last-minute delivery cost. Thus, we proceed by assuming that z(x) = h(x). Using integration by parts, this gives the following condition on h(x):
h(x)x −
Zx
l
h(u)du + (1 − h(x))pmax + 2η + 2δ − pminch(x)+
(c + ε)xh(x) − (c + ε)
Zx
l
h(u)du + (1 − h(x))(c + ε)pmax
≤ α⋆ x + 2δ
T + εx .
To solve for α⋆, we can use Grönwall’s inequality [MPF91, Theorem 1, p. 356]. First, observe that h(x) must satisfy the following:
h(x) ≥ pmax + 2η+2δ
(1+c+ε) − α⋆ x+ 2δ
T +εx
1+c+ε
pmax − x + pminc
1+c+ε
−1
pmax − x + pminc
1+c+ε
Zx
l
h(u)du.
60

By Grönwall’s inequality, it follows that:
h(x) ≥ pmax + 2η+2δ
(1+c+ε) − α⋆ x+ 2δ
T +εx
1+c+ε
pmax − x + pminc
1+c+ε
−
Zx
l
pmax + 2η+2δ
(1+c+ε) − α⋆ u+ 2δ
T +εu
1+c+ε
pmax − u + pminc
1+c+ε
2 du,
h(x) ≥ α⋆ 1 + ε
1 + c + ε ln
"
(1 + c + ε)(pmax − x) − 2δ + 2δ
m + pminc
(1 + c + ε)(pmax − l) − 2δ + 2δ
m + pminc
#
.
Recall that we have a boundary condition that h(pmin) = 1 – we can combine this with the above to obtain:
1 ≥ α⋆ 1 + ε
1 + c + ε ln (1 + c + ε)(pmax − pmin) + pminc
(1 + c + ε)(pmax − l) + pminc .
Letting l = (1+c+ε)pmax+2(η+δ)
α⋆(1+ε) − 2δ
T(1+ε) , the optimal α⋆ is obtained when the above inequality is binding, so we have:
1 = α⋆ 1 + ε
1 + c + ε ln


(1 + c + ε)pmax − (1 + ε)pmin
(1 + c + ε)pmax − (1+c+ε)[(1+c+ε)pmax+2(η+δ)]
α⋆(1+ε) + (1+c+ε)2δ
T(1+ε) + pminc

.
Solving the above yields that the optimal α⋆ for any ALG solving OSDM-T is lower bounded by:
α⋆ ≥ ω

W

− ((1+c+ε)pmax−(1+ε)pmin)e
−ω2δ/T − pmin c−(1+c+ε) pmax
(1+c+ε) pmax +2(η +δ)
(1+c+ε) pmax +2(η +δ)

 + (1+c+ε)pmax+pminc−ω2δ/T
(1+c+ε) pmax +2(η +δ)


,
where ω = (1+c+ε)
(1+ε) . This completes the proof.
G Deferred Proofs from § 6.1 (Analysis of PALD Framework)
In this section, we provide full proofs for the results in § 6.1, which describes and analyzes the PALD learning-augmented framework for the OSDM problem. We start by proving Theorem 6.1, which provides a robustness certificate that guarantees PALD’s competitive ratio when given learned threshold functions that lie within feasible sets. We also state and prove Corollary G.8, which provides an analogous robustness certificate for the case of OSDM-T, before proving Lemma 6.3, which shows that the fe-
asible sets are convex (and thus efficient to enforce) when the threshold functions are parameterized as piecewise-affine functions.
G.1 Proof of Theorem 6.1
In this section, we prove Theorem 6.1, which states that given learned threshold functions that lie in the feasible sets φˆb ∈ Rb(ρ) and (φˆ f , ψˆ f ) ∈ R f (ρ) for some ρ > α (α defined in (2)), the PALD algorithm is ρ-robust for OSDM-S.
Proof. Before the main robustness proof, we show that PALD produces a feasible solution to OSDM.
Corollary G.1. PALD produces a feasible solution to OSDM, i.e., it satisfies all demand before their deadlines and never violates the storage capacity constraint.
61

Proof. This corollary follows by the same logic as Lemma E.1, since PALD is identical to PALD except for the threshold functions used, and the feasibility proof does not depend on the specific form of the threshold functions.
We now proceed to prove the worst-case competitive ratio of PALD– for notational brevity, the following considers any arbitrary I ∈ Ω (i.e., any arbitrary instance of OSDM). We recall the definition of active and inactive periods from Definition E.2, and the additional notations relating to driver indexing used in the proof of Theorem 4.1 in Appendix E.
We let Db = ∑in=1 ∑νi
j=1 B(i,j)
b and D f = ∑in=1 ∑φˆi
j=1 B(i,j)
f denote the total base and flexible demand, respectively, that arrive over the entire time horizon. We let D = Db + D f denote the total demand. We let sˆ denote the final status of the storage at the end of the time horizon, i.e., sˆ = sT.
Finally, we introduce the following notation to characterize the optimal solution: let Gi(β) denote the minimum cost of purchasing β units of asset during the ith active period, and let Hτ( f ) denote the minimum cost of purchasing f units of asset during the period [τ, τ + ∆τ] (i.e., during the lifetime of the τth flexible demand). Finally, let p ̃ denote the minimum price during idle periods, and let p ̄ denote the weighted average price during periods with non-zero
base demand, i.e., p ̄ = ∑τ∈[T] pt·bt
Db .
We begin the proof by stating a lower bound on the cost of the offline optimal solution OPT, leveraging the exact same logic as Lemma E.3.
Corollary G.2. Given that PALD produces n active periods, let βi denote the asset purchased towards the base demand by the offline optimal solution during the ith active period, i ∈ [n], and let p ̃ denote the minimum price during inactive periods. Then OPT(I) is lower bounded as:
OPT(I) ≥
n
∑
i=1
Gi(βi) + Db −
n
∑
i=1
βi
!
p ̃ + εp ̄Db +
T
∑
τ=1
(1 + ε) Hτ( fτ) + Db + D f
2κ T
Next, we state an upper bound on the cost incurred by PALD, leveraging the same logic as Lemma E.4, but with the threshold functions φˆb and (φˆ f , ψˆ f ) used by PALD.
Lemma G.3. Given that PALD produces n active periods, let wˆ (i,j)
b denote the amount of the jth base
demand driver that has been purchased by the end of the ith active period, j ∈ [νi], and let B(i,j)
b denote
the total demand associated with the jth base demand driver in the ith active period. Further, let wˆ (τ)
f and
vˆ(τ)
f denote the purchasing and delivery amounts of the τth flexible demand driver before the deadline, respectively. Then the cost incurred by PALD is upper bounded as:
PALD(I) ≤
n
∑
i=1
νi
∑
j=1
Z wˆ (i,j)
b
0
φˆ (i,j)
b (u)du +
T
∑
τ=1
Z wˆ (τ)
f
0
φˆ (τ)
f (u)du +
Z vˆ(τ)
f
0
ψˆ (τ) (z)dz
!
(27)
+ Db + D f −
n
∑
i=1
νi
∑
j=1
wˆ (i,j)
b−
T
∑
τ=1
wˆ (τ)
f
!
(pmax + 2γ) (28)
+ Db (p ̄(c + ε) + 2δ) + D f −
T
∑
τ=1
vˆ(τ)
f
!
(pmax(c + ε) + 2δ) (29)
− cpmin
n
∑
i=1
νi
∑
j=1
wˆ (i,j)
b+
T
∑
τ=1
wˆ (τ)
f
!
+ sˆpmax. (30)
Proof. The proof follows by the same logic as Lemma E.4 – the main change is with respect to (27), to capture the fact that the threshold functions used by PALD are the learned variants, denoted by φˆb and (φˆ f , ψˆ f ), instead of the analytical variants φb and (φf , ψf ) used by PAAD.
62

Any additional purchasing needed to satisfy demand (i.e., that isn’t captured by the integrals over the threshold functions) is exactly captured by the existing logic in the proof of Lemma E.4, completing the proof.
Leveraging the definition of the feasible robustness sets Rb(ρ) and R f (ρ) in Definitions 6.1 and 6.2, respectively, we have the following technical lemmas to relate the threshold functions and the optimal cost:
Lemma G.4. Given a learned threshold function φˆb(·) that lies within the feasible set Rb(ρ) for some ρ > α, the following relation always holds:
Zw
0
φˆb(u)du + (1 − w)(pmax + 2γ) + pmax(c + ε) + 2δ − cwpmin = ρ φˆb(w) − 2γ + εpmax + 2κ
T ∀w ∈ [0, 1].
Lemma G.5. Given learned threshold functions φˆ f (·) and ψˆ(·) that lie within the feasible set R f (ρ) for some ρ > α, the following relation always holds:
Zw
0
φˆ f (u)du + (1 − w)(pmax + 2γ) − cwpmin +
Zv
0
ψˆ f (z)dz + (1 − v)(pmax(c + ε) + 2δ) =
ρ 1+ε
1+c+ε
φˆ f (w) + ψˆ f (v) − 2κ + 2κ
T ∀w ∈ [0, 1], v ∈ [0, w],
The proofs of both lemmas follow directly from the definitions of the feasible sets Rb(ρ) and R f (ρ). Using the results in Corollary G.2 and Lemmas G.3, G.4, and G.5, we claim that the following holds:
PALD(I ) − pmaxsˆ
OPT(I) ≤ ρ.
To show this result, we first substitute the bounds from Corollary G.2 and Lemma G.3 into the left-hand side of the above equation. As in the proof of Theorem 4.1, we define some shorthand notation to facilitate the presentation.
Let Q = ∑in=1 ∑νi
j=1
R wˆ (i,j)
b
0 φˆ (i,j)
b (u)du + ∑T
τ=1
R wˆ (τ)
f
0 φˆ (τ)
f (u)du + R vˆ(τ)
f
0 ψˆ(τ)(z)dz
!
denote the integrals
over the thresholds. Let Wˆ b = ∑in=1 ∑νi
j=1 wˆ (i,j)
b , let Wˆ f = ∑T
τ=1 wˆ (τ)
f , and let Wˆ = Wˆ b + Wˆ f denote the total purchasing by all drivers.
Further, let Vˆb = ∑in=1 ∑νi
j=1 vˆ(i,j)
b denote the total delivery by all flexible demand drivers.
Let β = ∑in=1 βi denote the total amount of asset purchased towards the base demand by the optimal solution during all active periods, noting that Db − β ≥ 0 by definition. Finally, let D = Db + D f denote the total demand. Substituting the bounds from Corollary G.2 and Lemma G.3 into the left-hand side of the above inequality, we have:
Q+(β+D f −Wˆ )(pmax+2γ)+β (p ̄(c+ε)+2δ) + (D f −Vˆ f )(pmax(c+ε)+2δ)−cpminWˆ +(Db −β)(pmax+2κ+ p ̄(c+ε))
∑in=1 Gi(βi)+εp ̄β+∑T
τ=1(1+ε)Hτ( fτ)+(D f +β) 2κ
T +(Db −β)(p ̃+εp ̄+ 2κ
T)
Then, we have the following:
≤ max
( Q + (β + D f − Wˆ )(pmax + 2γ) + β (p ̄(c + ε) + 2δ) + (D f − Vˆ f )(pmax(c + ε) + 2δ) − cpminWˆ
∑in=1 Gi(βi) + εp ̄β + ∑T
τ=1(1 + ε)Hτ( fτ) + (D f + β) 2κ
T
,
(Db −β)(pmax+2κ+ p ̄(c + ε))
(Db − β)(p ̃ + εp ̄ + 2κ
T)
)
,
63

where the definition of p ̃ ensures that the second term in the max is at most ρ. Note that this follows because p ̃ is the best price during inactive periods (i.e., a price that is not accepted by any base demand driver), and by the definition of the feasible set Rb(ρ), any ρ-robust threshold
function φˆb must satisfy pmax(1 + c + ε) + 2κ = ρ φˆb(0) − 2γ + εpmax + 2κ
T for w = 0.
We now focus on the first term. For the sake of contradiction, suppose that
Q + (β + D f − Wˆ )(pmax + 2γ) + β (p ̄(c + ε) + 2δ) + (D f − Vˆ f )(pmax(c + ε) + 2δ) − cpminWˆ
∑in=1 Gi(βi) + εp ̄β + ∑T
τ=1(1 + ε)Hτ( fτ) + (D f + β) 2κ
T
> αT.
(31)
Instead of working directly with the expression in terms of β, we first reason about how
the cost of OPT and PALD relate to one another in terms of ∑in=1 ∑νi
j=1 B(i,j)
b , the total demand assigned to base drivers. We introduce the following notation for the sake of brevity: let B =
∑in=1 ∑νi
j=1 B(i,j)
b denote the total base demand. Then, we have the following relation:
Q + (B + D f − Wˆ )(pmax + 2γ) + B (p ̄(c + ε) + 2δ) + (D f − Vˆ f )(pmax(c + ε) + 2δ) − cpminWˆ
∑in=1 Gi(Bi) + εp ̄B + ∑T
τ=1(1 + ε)Hτ( fτ) + (D f + B) 2κ
T
,
≥ Q+(β+D f −Wˆ )(pmax+2γ)+β (p ̄(c+ε)+2δ)+(D f −Vˆ f )(pmax(c+ε)+2δ)−cpminWˆ +(B−β)(pmax+ p ̄(c+ε)+2κ)
∑in=1 Gi(βi)+εp ̄β+∑T
τ=1(1+ε)Hτ( fτ)+(D f +β) 2κ
T +(B−β)(p ̃+εp ̄+ 2κ
T) ,
> ρ.
where in the second inequality, we have used Lemma E.5. We proceed to work with the expression in terms of B. During the ith active period and the lifetime of the jth base demand driver, the minimum
marginal purchasing price observed is given by φˆ(i,j)
b (wˆ (i,j)
b ) − 2γ by the definition of the thresh
old function. Note that this follows because the feasible set Rb(ρ) ensures that φˆ(i,j)
b (w) is
monotone non-increasing for w ∈ [0, 1], and it is given that φˆ(i,j)
b (1) ≤ pmin + 2γ, guaranteeing that the true minimum price is captured by the threshold function. Using the same logic and by definition of the feasible set R f (ρ), we have that during the lifetime of the τth flexible demand driver, the minimum marginal purchasing and delivery
cost observed is given by 1+ε
1+c+ε φˆ (τ)
f (wˆ (τ)
f ) + ψˆ(τ)
f (vˆ(τ)
f ) − 2κ . This gives the following lower
bounds on the terms that depend on Gi and Hτ, respectively:
n
∑
i=1
Gi
ν∑i
j=1
B(i,j)
b
!
≥
n
∑
i=1
ν∑i
j=1
φˆ (i,j)
b (wˆ (i,j)
b ) − 2γ × B(i,j)
b
T
∑
τ=1
(1 + ε)Hτ( fτ) ≥
T
∑
τ=1
1+ε 1+c+ε
φˆ (τ)
f (wˆ (τ)
f ) + ψˆ(τ)
f (vˆ(τ)
f ) − 2(γ + δ) × fτ.
Substituting these bounds into the previous expression, we have that the left-hand-side of (31) is less than or equal to:
≤ Q + (B + D f − Wˆ )(pmax + 2γ) + B (p ̄(c + ε) + 2δ) + (D f − Vˆ f )(pmax(c + ε) + 2δ) − cpminWˆ
∑in=1 ∑νi
j=1 φˆ (i,j)
b (wˆ (i,j)
b )−2γ B(i,j)
b +εp ̄B+∑T
τ=1 1+ε
1+c+ε φˆ (τ)
f (wˆ (τ)
f )+ψˆ(τ)
f (vˆ(τ)
f )−2κ fτ +(D f +B) 2κ
T
.
By rearranging the terms in the above and substituting for Q, we obtain the following:
=
∑in=1 ∑νi
j=1
h
X(i,j)
b
i
+ ∑T
τ=1
h
X(τ)
f
i
∑in=1 ∑νi
j=1
h
φˆ (i,j)
b (wˆ (i,j)
b )−2γ+εp ̄+ 2κ
T B(i,j)
b
i
+∑T
τ=1
h 1+ε
1+c+ε φˆ (τ)
f (wˆ (τ)
f )+ψˆ(τ)
f (vˆ(τ)
f )−2κ fτ + fτ 2κ
T
i,
(32)
64

where X(i,j)
b and X(τ)
f are defined as follows (for each driver):
X(i,j)
b=
Z wˆ (i,j)
b
0
φˆ (i,j)
b (u)du + (B(i,j)
b − wˆ (i,j)
b )(pmax + 2γ) + (pmax(c + ε) + 2δ) B(i,j)
b − cwˆ (i,j)
b pmin,
X(τ)
f=
Z wˆ (τ)
f
0
φˆ (τ)
f (u)du + ( fτ − wˆ (τ)
f )(pmax + 2γ) +
Z vˆ(τ)
f
0
ψˆ (τ)
f (u)du + (pmax(c + ε) + 2δ) ( fτ − vˆ(τ)
f ) − cwˆ (τ)
f pmin.
Since (32) is > ρ by assumption, one of the following cases must be true: Case I: There exists some i ∈ [n] and j ∈ [νi] such that
X(i,j)
b > ρB(i,j)
b φˆ (i,j)
b (wˆ (i,j)
b ) − 2γ + εp ̄ + 2κ
T.
Case II: There exists some τ ∈ [T] such that
X(τ)
f > ρ fτ
1+ε 1+c+ε
φˆ (τ)
f (wˆ (τ)
f ) + ψˆ(τ)
f (vˆ(τ)
f ) − 2(γ + δ) + 2κ
T,
But, if either of these two cases are true (i.e., for any unit of base or flexible demand), they contradict Lemmas G.4 and G.5, respectively. Thus, we have a contradiction, and the original
assumption that (32) is > ρ must be false. This completes the proof that PALD(I)−pmaxsˆ
OPT(I) ≤ ρ.
Using this result, we have:
PALD(I ) ≤ ρOPT(I ) + pmaxsˆ ≤ ρOPT(I ) + pmaxS,
where pmaxS is a constant. This shows that PALD is ρ-competitive under Definition 2.1, which completes the proof.
G.2 PALD Robustness Certificate for OSDM-T
In this section, we define the feasible robust sets for PALD in the context of the OSDM-T problem (i.e., in the tracking case), and state and prove the corresponding robustness certificate. These (re-)definitions account for the tracking cost on the purchasing side of the problem.
Definition G.6 (Robust threshold set for base drivers in OSDM-T). Given a target robustness ρ > αT (where αT is defined in (3)), a learned threshold function φˆb for base demand drivers must lie in the
following feasible set R′
b(ρ):
R′
b(ρ) =
(
φb : [0, 1] → [pmin, pmax] φb is monotone non-increasing, φb(1) ≤ pmin + 2η, and ∀w ∈ [0, 1] :
Φb(0, w) + (1 − w)(pmax + 2η) + pmax(c + ε) + 2δ − cwpmin ≤ ρ [φb(w) − 2η + εpmax + 2δ/T]
)
.
Definition G.7 (Robust threshold set for flexible drivers in OSDM-T). Given a target robustness ρ > αT (where αT is defined in (3)), the learned threshold functions φˆ f and ψˆ f for flexible demand drivers must lie in the following joint feasible set R′
f (ρ), where ω = 1+c+ε
1+ε :
R′
f (ρ) =
(
(φ f , ψ f ) : [0, 1]2 → [pmin, pmax]2 φ f , ψ f are monotone non-increasing,
φf (1) ≤ pmin + 2η, ψf (1) ≤ pmin(c + ε) + 2δ, and ∀w ∈ [0, 1], v ∈ [0, w] :
Φ f (0, w) + (1 − w)(pmax + 2η) − cwpmin + Ψ f (0, v) + (1 − v)(pmax(c + ε) + 2δ)
≤ρ
h
1/ω φ f (w) + ψ f (v) − 2(η + δ) + 2δ/T
i
)
.
65

Under Def. G.6 and Def. G.7, we have the following robustness certificate for PALD when given any learned thresholds φˆb, φˆ f and ψˆ f that lie in the respective feasible sets:
Corollary G.8. Given learned threshold functions that lie in the feasible sets φˆb ∈ R′
b(ρ) and
(φˆ f , ψˆ f ) ∈ R′
f (ρ) for some ρ > αT (αT defined in (3)), the PALD algorithm is ρ-robust for OSDM-T.
Proof. The feasibility of PALD’s solution follows from Corollary G.1. We now proceed to prove the worst-case competitive ratio of PALD– for notational brevity, the following considers any arbitrary I ∈ Ω (i.e., any arbitrary instance of OSDM). We begin the proof by stating a lower bound on the cost of the offline optimal solution OPT, leveraging the same logic as Lemma E.7.
Corollary G.9. Given that PALD produces n active periods for OSDM, let βi denote the asset purchased towards the base demand by the offline optimal solution during the ith active period, i ∈ [n], and let p ̃ denote the minimum price during inactive periods. Then OPT(I) is lower bounded as:
OPT(I) ≥
n
∑
i=1
Gi(βi) + Db −
n
∑
i=1
βi
!
p ̃ + εp ̄Db +
T
∑
τ=1
(1 + ε) Hτ( fτ) + Db + D f
2δ T
Next, we state an upper bound on the cost incurred by PALD for OSDM-T, leveraging the same logic as Lemma E.8, but with the threshold functions φˆb and (φˆ f , ψˆ f ) used by PALD.
Lemma G.10. Given that PALD produces n active periods, let wˆ (i,j)
b denote the amount of the jth base
demand driver that has been purchased by the end of the ith active period, j ∈ [νi], and let B(i,j)
b denote
the total demand associated with the jth base demand driver in the ith active period. Further, let wˆ (τ)
f and
vˆ(τ)
f denote the purchasing and delivery amounts of the τth flexible demand driver before the deadline, respectively. Then the cost incurred by PALD is upper bounded as:
PALD(I) ≤
n
∑
i=1
νi
∑
j=1
Z wˆ (i,j)
b
0
φˆ (i,j)
b (u)du +
T
∑
τ=1
Z wˆ (τ)
f
0
φˆ (τ)
f (u)du +
Z vˆ(τ)
f
0
ψˆ (τ) (z)dz
!
(33)
+ Db + D f −
n
∑
i=1
νi
∑
j=1
wˆ (i,j)
b−
T
∑
τ=1
wˆ (τ)
f
!
(pmax + 2η) (34)
+ Db (p ̄(c + ε) + 2δ) + D f −
T
∑
τ=1
vˆ(τ)
f
!
(pmax(c + ε) + 2δ) (35)
− cpmin
n
∑
i=1
νi
∑
j=1
wˆ (i,j)
b+
T
∑
τ=1
wˆ (τ)
f
!
+ sˆpmax. (36)
Proof. The proof follows by the same logic as Lemma G.3 – the main change is with respect to (34), to capture the tracking cost (with parameter η on the purchasing side of the problem).
Leveraging the definition of the feasible robustness sets R′
b(ρ) and R′
f (ρ) in Definitions G.6 and G.7, respectively, we have the following lemmas to relate the threshold functions and the optimal cost:
Lemma G.11. Given a learned threshold function φˆb(·) that lies within the feasible set R′
b(ρ) for some
ρ > αT, the following relation always holds:
Zw
0
φˆb(u)du + (1 − w)(pmax + 2η) + pmax(c + ε) + 2δ − cwpmin = ρ φˆb(w) − 2η + εpmax + 2δ
T ∀w ∈ [0, 1].
66

Lemma G.12. Given learned threshold functions φˆ f (·) and ψˆ(·) that lie within the feasible set R′
f (ρ) for some ρ > αT, the following relation always holds:
Zw
0
φˆ f (u)du + (1 − w)(pmax + 2η) − cwpmin +
Zv
0
ψˆ f (z)dz + (1 − v)(pmax(c + ε) + 2δ) =
ρ 1+ε
1+c+ε
φˆ f (w) + ψˆ f (v) − 2(η + δ) + 2δ
T ∀w ∈ [0, 1], v ∈ [0, w],
The proofs of both lemmas follow directly from the definitions of the feasible sets R′
b(ρ)
and R′
f (ρ). Using Corollary G.9 and Lemmas G.10, G.11, and G.12, we claim that the following holds:
PALD(I ) − pmaxsˆ
OPT(I) ≤ ρ.
To show this result, we first substitute the bounds from Corollary G.2 and Lemma G.3 into the left-hand side of the above equation. We use the same shorthand notation as in the proof of Theorem 6.1 to facilitate the presentation.
Q+(β+D f −Wˆ )(pmax+2η)+β (p ̄(c+ε)+2δ) + (D f −Vˆ f )(pmax(c+ε)+2δ)−cpminWˆ +(Db −β)(pmax+2(η+δ)+ p ̄(c+ε))
∑in=1 Gi(βi)+εp ̄β+∑T
τ=1(1+ε)Hτ( fτ)+(D f +β) 2δ
T +(Db −β)(p ̃+εp ̄+ 2δ
T)
Then, we have the following:
≤ max
( Q + (β + D f − Wˆ )(pmax + 2η) + β (p ̄(c + ε) + 2δ) + (D f − Vˆ f )(pmax(c + ε) + 2δ) − cpminWˆ
∑in=1 Gi(βi) + εp ̄β + ∑T
τ=1(1 + ε)Hτ( fτ) + (D f + β) 2δ
T
,
(Db −β)(pmax+2(η+δ)+ p ̄(c + ε))
(Db − β)(p ̃ + εp ̄ + 2δ
T)
)
,
where the definition of p ̃ ensures that the second term in the max is at most ρ. We now focus on the first term. For the sake of contradiction, suppose that
Q + (β + D f − Wˆ )(pmax + 2η) + β (p ̄(c + ε) + 2δ) + (D f − Vˆ f )(pmax(c + ε) + 2δ) − cpminWˆ
∑in=1 Gi(βi) + εp ̄β + ∑T
τ=1(1 + ε)Hτ( fτ) + (D f + β) 2δ
T
> αT.
(37)
Instead of working directly with the expression in terms of β, we first reason about how
the cost of OPT and PALD relate to one another in terms of ∑in=1 ∑νi
j=1 B(i,j)
b , the total demand assigned to base drivers. We introduce the following notation for the sake of brevity: let B =
∑in=1 ∑νi
j=1 B(i,j)
b denote the total base demand. Then, we have the following relation:
Q + (B + D f − Wˆ )(pmax + 2η) + B (p ̄(c + ε) + 2δ) + (D f − Vˆ f )(pmax(c + ε) + 2δ) − cpminWˆ
∑in=1 Gi(Bi) + εp ̄B + ∑T
τ=1(1 + ε)Hτ( fτ) + (D f + B) 2δ
T
,
≥ Q+(β+D f −Wˆ )(pmax+2η)+β (p ̄(c+ε)+2δ)+(D f −Vˆ f )(pmax(c+ε)+2δ)−cpminWˆ +(B−β)(pmax+ p ̄(c+ε)+2κ)
∑in=1 Gi(βi)+εp ̄β+∑T
τ=1(1+ε)Hτ( fτ)+(D f +β) 2δ
T +(B−β)(p ̃+εp ̄+ 2δ
T) ,
> ρ.
where in the second inequality, we have used Lemma E.5. We proceed to work with the expression in terms of B. During the ith active period and the lifetime of the jth base demand driver,
the minimum marginal purchasing price observed is given by φˆ(i,j)
b (wˆ (i,j)
b ) − 2η by the defini
tion of the threshold function. Note that this follows because the feasible set R′
b(ρ) ensures that
67

φˆ (i,j)
b (w) is monotone non-increasing for w ∈ [0, 1], and it is given that φˆ(i,j)
b (1) ≤ pmin + 2η, guaranteeing that the true minimum price is captured by the threshold function.
Using the same logic and by definition of the feasible set R′
f (ρ), we have that during the
lifetime of the τth flexible demand driver, the minimum marginal purchasing and delivery
cost observed is given by 1+ε
1+c+ε φˆ (τ)
f (wˆ (τ)
f ) + ψˆ(τ)
f (vˆ(τ)
f ) − 2(η + δ) . This gives the following
lower bounds on the terms that depend on Gi and Hτ, respectively:
n
∑
i=1
Gi
ν∑i
j=1
B(i,j)
b
!
≥
n
∑
i=1
ν∑i
j=1
φˆ (i,j)
b (wˆ (i,j)
b ) − 2η × B(i,j)
b
T
∑
τ=1
(1 + ε)Hτ( fτ) ≥
T
∑
τ=1
1+ε 1+c+ε
φˆ (τ)
f (wˆ (τ)
f ) + ψˆ(τ)
f (vˆ(τ)
f ) − 2(η + δ) × fτ.
Substituting these bounds into the previous expression, we have that the left-hand-side of (37) is less than or equal to:
≤ Q + (B + D f − Wˆ )(pmax + 2η) + B (p ̄(c + ε) + 2δ) + (D f − Vˆ f )(pmax(c + ε) + 2δ) − cpminWˆ
∑in=1 ∑νi
j=1 φˆ (i,j)
b (wˆ (i,j)
b )−2η B(i,j)
b +εp ̄B+∑T
τ=1 1+ε
1+c+ε φˆ (τ)
f (wˆ (τ)
f )+ψˆ(τ)
f (vˆ(τ)
f )−2(η + δ) fτ +(Df +B) 2δ
T
.
By rearranging the terms in the above and substituting for Q, we obtain the following:
=
∑in=1 ∑νi
j=1
h
X(i,j)
b
i
+ ∑T
τ=1
h
X(τ)
f
i
∑in=1 ∑νi
j=1
h
φˆ (i,j)
b (wˆ (i,j)
b )−2η+εp ̄+ 2δ
T B(i,j)
b
i
+∑T
τ=1
h 1+ε
1+c+ε φˆ (τ)
f (wˆ (τ)
f )+ψˆ(τ)
f (vˆ(τ)
f )−2(η + δ) fτ + fτ 2δ
T
i,
(38)
where X(i,j)
b and X(τ)
f are defined as follows (for each driver):
X(i,j)
b=
Z wˆ (i,j)
b
0
φˆ (i,j)
b (u)du + (B(i,j)
b − wˆ (i,j)
b )(pmax + 2η) + (pmax(c + ε) + 2δ) B(i,j)
b − cwˆ (i,j)
b pmin,
X(τ)
f=
Z wˆ (τ)
f
0
φˆ (τ)
f (u)du + ( fτ − wˆ (τ)
f )(pmax + 2η) +
Z vˆ(τ)
f
0
ψˆ (τ)
f (u)du + (pmax(c + ε) + 2δ) ( fτ − vˆ(τ)
f ) − cwˆ (τ)
f pmin.
Since (38) is > ρ by assumption, one of the following cases must be true: Case I: There exists some i ∈ [n] and j ∈ [νi] such that
X(i,j)
b > ρB(i,j)
b φˆ (i,j)
b (wˆ (i,j)
b ) − 2η + εp ̄ + 2δ
T.
Case II: There exists some τ ∈ [T] such that
X(τ)
f > ρ fτ
1+ε 1+c+ε
φˆ (τ)
f (wˆ (τ)
f ) + ψˆ(τ)
f (vˆ(τ)
f ) − 2(η + δ) + 2δ
T,
But, if either of these two cases are true (i.e., for any unit of base or flexible demand), they contradict Lemmas G.11 and G.12, respectively. Thus, we have a contradiction, and the original
assumption that (38) is > ρ must be false. This completes the proof that PALD(I)−pmaxsˆ
OPT(I) ≤ ρ.
Using this result, we have:
PALD(I ) ≤ ρOPT(I ) + pmaxsˆ ≤ ρOPT(I ) + pmaxS,
where pmaxS is a constant. This shows that PALD is ρ-competitive for OSDM-T under Definition 2.1, which completes the proof.
68

G.3 Proof of Lemma 6.3
In this section, we prove Lemma 6.3, which states that if φb, φf , ψf are piecewise-affine functions parameterized by yb, y f , yψ ∈ RK for K > 1, the feasible sets Rb(ρ) and R f (ρ) defined in Def. 6.1 and Def. 6.2 are convex sets in yb and (y f , yψ), respectively.
Proof of Lemma 6.3. Denote the grid discretization points by 0 = w1 < w2 < · · · < wK = 1, with wj = j−1
K−1 . Each threshold function φ : [0, 1] → R or ψ : [0, 1] → R is parameterized by its
knot values y = (y1, . . . , yK) and linear interpolation on each interval [wj, wj+1]. Then we want to show that Rb(ρ) is a convex set in yb and R f (ρ) is a convex set in (y f , yψ). First, we introduce the hat-basis representation of piecewise-affine functions, which will be useful in the proof. Then we prove the convexity of Rb(ρ) and R f (ρ) in their respective parameter spaces. Let {hj(·)}jK=1 be the standard PWA “tent” basis: each hj is piecewise-linear, hj(wi) = 1{i = j}, supported on [wj−1-
, wj+1] (with boundary conventions for j = 1, K), and ∑j hj(u) = 1 for all u ∈ [0, 1]. Under linear interpolation, we have:
φ(u) =
K
∑
j=1
yjhj(u), Φ(0, w) =
Zw
0
φ(u) du =
K
∑
j=1
yj Hj (w),
so for fixed u, w, both φ(u) and Φ(0, w) are affine in the parameter vector y.
Base Drivers. All defining constraints of Rb(ρ) are affine in yb: (i) range and endpoint: pmin ≤ yb,j ≤ pmax and yb,K ≤ pmin + 2γ (box and halfspace); (ii) monotone non-increasing: yb,j+1 − yb,j ≤ 0 for j = 1, . . . , K − 1 (segment slopes); (iii) robustness inequality for fixed w ∈ [0, 1]:
K
∑
j=1
Hj(w) − ρ hj(w) yb,j ≤ ρ εpmax + 2κ
T − 2γ − (1 − w)(pmax + 2γ) − pmax(c + ε) − 2δ + cwpmin,
which is a single affine halfspace in yb. The condition “for all w” is the intersection (possibly uncountable) of affine halfspaces, hence convex. Intersecting with the box and linear inequalities preserves convexity. Thus Rb(ρ) is convex.
Flexible Drivers. Analogously, in the product space (y f , yψ): (i) range and endpoints give affine constraints on y f ,j and yψ,j; (ii) monotonicity gives y f ,j+1 − y f ,j ≤ 0 and yψ,j+1 − yψ,j ≤ 0; (iii) for fixed (w, v) with 0 ≤ v ≤ w ≤ 1, the robustness inequality
K
∑
j=1
Hj(w) y f,j +
K
∑
j=1
Hj(v) yψ,j ≤
ρ
"
1 ω
K
∑
j=1
hj(w) y f,j +
K
∑
j=1
hj(v) yψ,j − 2κ
!
+ 2κ
T
#
− (1 − w)(pmax + 2γ) − (1 − v)(pmax(c + ε) + 2δ) + cwpmin
is an affine halfspace in (y f , yψ). Intersecting these halfspaces over all (w, v) and with the linear constraints yields a convex set. Hence R f (ρ) is convex. Therefore, both feasible sets are convex in their respective parameter spaces.
69

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:44.685Z
- **Text Length:** 215817 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 69 of 69
