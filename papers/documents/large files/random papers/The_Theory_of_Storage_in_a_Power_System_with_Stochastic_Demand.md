# PDF Document: Biggar and Hesamzadeh - 2025 - The Theory of Storage in a Power System with Stochastic Demand.pdf

**File Path:** Biggar and Hesamzadeh - 2025 - The Theory of Storage in a Power System with Stochastic Demand.pdf

**Processed Date:** 2026-02-10T18:13:32.564Z

**File Size:** 596.96 KB

**Total Pages:** 41

**Extracted Pages:** 41

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3317

**Title:** The Theory of Storage in a Power System with Stochastic Demand

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

The Theory of Storage in a Power System with
Stochastic Demand
Darryl Biggar and Mohammad Reza Hesamzadeh∗
November 27, 2025
Abstract
Electric power systems are increasingly turning to energy storage systems to balance supply and demand. But how much storage is required? What is the optimal volume of storage in a power system and on what does it depend? In addition, what form of hedge contracts do storage facilities require? We answer these questions in the special case in which the uncertainty in the power system involves successive draws of an independent, identically-distributed random variable. We characterize the conditions-
 for the optimal operation of, and investment in, storage and show how these conditions can be understood graphically using price-duration curves. We also characterize the optimal hedge contracts for storage units.
Keywords: Energy storage; screening curves; merchant storage investment; hedges for storage, storage expansion planning
1 Introduction
With the increased penetration of Variable Renewable Energy (VRE) generation in wholesale electricity markets, there will likely be an increased role for energy storage systems. But this raises a number of key questions for power system analysts and policymakers:
• How should a storage service be used? What is the efficient dispatch of a storage system? What are the private incentives for operation of storage? Do they match the overall social optimum?
∗Associate Professor, Monash University (Australia) and Professor at KTH Royal Institute of Technology (Sweden), respectively.
1
arXiv:2511.21327v1 [econ.TH] 26 Nov 2025

• What is the optimal mix of storage in a power system? What is the optimal amount of storage and how does it vary with, say, the level of uncertainty in the supply-demand balance? What are the private incentives for investment in storage? Do they match the overall social optimum?
• What sort of hedge contracts do storage services require? What sort of hedge contracts should policymakers make available?
There is a very substantial literature exploring the implications of storage in electric power systems. But, due to the complexity of describing storage systems, and the complexity of the environment in which they operate, simple concrete and intuitive answers to these questions have yet to emerge from this literature. This article seeks to make progress by focusing on a storage system in a stylized electricity market, as described below.
In the case of conventional, controllable generation (that is, putting aside storage), there are relatively straightforward and well-known answers to these questions. For example, under certain assumptions, screening curve analysis1 provides a simple and intuitive guide as to the optimal mix of different types of generation (baseload, mid-merit, and peaking) in an optimally-configured power system. Can we extend this screening curve analysis to include storage?
It is well known that risk-averse electricity market participants routinely seek to mitigate their risk with hedge (or forward market) contracts. The type of hedge contract required to eliminate the risk faced by generators varies with the type of generation, with baseload, peaking and wind generators all (in principle) requiring different types of hedge products. But what sort of hedge contracts do storage systems require? What hedge products might eliminate the risk of an energy storage system? -
This question has not been addressed in the literature.
The role of a storage system in a wholesale power market is one of intertemporal arbitrage.2 That is, the storage system should charge when the spot price is low and discharge when the price is high. The future path of wholesale prices is therefore critical. In this article we will focus on the special case in which, in each dispatch interval, the realisation of the spot price (or net demand) is independent and identically distributed. In other words, a realisation of the net demand in one period -
tells us nothing about the realisation of net demand in the next period. This is a special case, but it is a useful starting point. As we will see, even with this simplifying assumption, the classical, traditional results in power system analysis are changed in important ways. The presence of storage, it turns out, requires us to rethink some basic results in power system theory.
1See, for example, the textbooks Stoft (1999), Biggar and Hesamzadeh (2014) and Tanaka, Conejo and Siddiqui (2024) 2Many storage systems also provide other ancillary services, such as frequency control. We will put these other services to one side.
2

This article has four main sections. Section 2 sets out a brief review of the literature. In section 3 we start by summarizing some basic results of conventional electricity market theory. This provides a benchmark with which we compare the corresponding results for storage services later in the paper. We will see that although some principles and intuition from basic electricity market theory remain, storage introduces new complexities which must be taken into account. Section 4.3 considers the -
private incentives for use of and investment in a storage service. We identify rules for the optimal private use of storage as well as rules for the optimal private investment in storage. We also identify a hedge contract which perfectly insulates the storage service from risk and discuss how that hedge contract might be provided in the market. Section 4 takes the social-planner perspective and explores the question of the optimal dispatch of, and investment in, storage. This section seeks to answ-
er the question: What is the optimal mix of storage in a power system? Section 6 compares the theory set out here to the operation of large storage services in wholesale power markets in practice. Section 7 concludes.
2 Literature review and key contributions
The engineering literature on the integration of storage into power systems is vast and is well surveyed in Mileti ́c, Pandˇzi ́c and Yang (2020) and Sioshansi, Denholm, Arteaga, Awara, Bhattacharjee, Botterud, Cole, Cortes, De Queiroz, DeCarolis et al. (2021). This literature typically uses optimization methods to find the optimal usage of different types of storage in a range of circumstances. Unfortunately, this engineering approach – while valuable – tends to be a ‘black box’, yielding relativ-
ely little intuition or insight into the role of storage outside the specific context considered in each paper.
From an economic perspective, the primary – and most generic – role of storage in a power system is as a form of arbitrage – purchasing from the market (i.e., charging) during periods of low prices and selling to the market (i.e., discharging) at times of high prices. Storage also may have a role to play in providing short-term balancing or frequency control services3, providing capacity in systems which directly fund capacity, in mitigating ramping constraints4, or in deferring network investment-
. Each of these additional roles for storage arises due to the absence of price signals, and will become less important as the temporal and spatial granularity of price signals is improved over time. This leaves the primary role for storage as a form of arbitrage.
3The need for such balancing services arises from the fact that the typical length of the spot market dispatch interval is longer than the timescale on which the power system must be kept in balance. Reducing the length of the dispatch interval reduces the need for such balancing services. We will put aside the role of storage in providing very-short-term frequency control or balancing services. 4E.g., Shahmohammadi, Sioshansi, Conejo and Afsharnia (2018)
3

The simplest case to deal with is the case where the price follows a deterministic (or perfectly predictable) path. In this case, the optimal operation of the storage facility depends on whether it faces constraints on the rate at which it can charge or discharge or constraints on the total volume of energy that can be stored.
In the case where there are only binding constraints on the rate (MW) of charge and discharge, in a world of perfectly predictable prices, the optimal use of a price-taking storage system is a simple binary strategy: When the spot price exceeds an upper threshold, the storage system discharges at the maximum rate; when the spot price falls below a lower threshold, the storage system charges at the maximum rate (Graves, Jenkin and Murphy, 1999). The difference between the two prices reflects the ‘r-
ound-trip’ efficiency of the storage system (i.e., the energy lost in a charge-discharge cycle). The level of these price thresholds, however, depends on the overall price profile.5
In the case where there are no rate limits (and only binding constraints on the total volume of energy that can be stored) the optimal use of the storage system is quite different. In this case the optimal strategy is to charge to the maximum volume at any local minimum in the price profile and to discharge to zero at any local maximum in the price profile. Of course, this requires knowledge of the future prices to identify local maxima and minima. Nevertheless, a number of articles use this ‘perf-
ect foresight’ assumption to estimate the arbitrage value of energy storage (McConnell, Forcey and Sandiford, 2015; Das, Krishnan and McCalley, 2015; Sioshansi, Denholm, Jenkin and Weiss, 2009; Walawalkar, Apt and Mancini, 2007; Figueiredo, Flynn and Cabral, 2006; Hu, Chen and BakJensen, 2010; Lamp and Samano, 2022).
In practice, future spot prices are not perfectly predictable. If we allow for uncertainty in future outcomes, stochastic dynamic programming techniques must be used (e.g., (Van De Ven, Hegde, Massouli ́e and Salonidis, 2013; Sioshansi, Madaeni and Denholm, 2013; Xi, Sioshansi and Marano, 2014; Mokrian, Stephen et al., 2006; L ̈ohndorf and Minner, 2010)). However, these quickly become complex and difficult to solve, necessitating quite strong simplifying assumptions. In the analysis that follows w-
e make a key simplifying assumption about the nature of future spot prices. Specifically, we assume that all draws of the spot price are independent and identically distributed.
Most of the literature on storage assumes price-taking behaviour. An important strand of the literature on storage relaxes this assumption to consider strategic behaviour by storage (See Mileti ́c et al., 2020; Andr ́es-Cerezo and Fabra, 2023; Siddiqui, Sioshansi and Conejo, 2019; Karaduman, 2020; Balakin and Roger, 2025). Finally, we note that another strand of the literature focuses on identifying the optimal level of investment in storage, sometimes known as
5In the case where the storage system is perfectly efficient so that the buy threshold and sell threshold are the same, both prices are equal to the average price in the price profile.
4

the Storage Expansion Plan. See for example, the surveys by Haas, Cebulla, Cao, Nowak, Palma-Behnke, Rahmann and Mancarella (2017) and Sheibani, Yousefi, Latify and Hacopian Dolatabadi (2018).
Despite the size of the literature on energy storage, we consider that relatively few general insights or intuition have emerged. In part, this is due to the fact that storage systems differ widely in both their maximum rate of production and their maximum volume of stored energy (as well as other factors such as the round-trip efficiency, rate of deterioration etc.). In addition, storage systems operate in a complex, uncertain and changing environment. In this article we aim to develop concrete i-
nsights and intuition about the optimal use of, and investment in, storage in certain special cases. Specifically, drawing inspiration from screening curves, we focus on the case of a storage system that is not rate-limited and a power system in which there is no time-evolution of prices.
Risk-averse wholesale electricity market participants routinely seek to be hedged – that is, to offset their cashflow risks through financial hedge products. Whereas a range of financial hedge products are commonly available to different types of generation, to our knowledge the question of hedges for energy storage products has not been addressed in the literature. We show that in the special case considered in this article the optimal operation of the storage system can be characterised. We draw-
 on this result to identify a set of hedge contracts which perfectly hedge the risks of storage systems.
Finally, we characterise the optimal level of investment in storage capacity (MWh) in this context, and show how this capacity relates to familiar ideas of screening curves.
The key assumption at the base of the analysis that follows is that there is only one source of uncertainty in the power system (here, represented by variation in load) and that uncertainty is independently and identically distributed across intervals. This is a strong assumption. It implies that the realisation of load in one period provides no information about the realisation of load in the next. In practice, load is not iid over time. Rather, load follows regular daily, weekly and seasonal cyc-
les, with a degree of uncertainty around those underlying cycles due to factors such as the weather, and planned and unplanned outages.
We justify this key assumption on the basis that: (a) we seek to develop understanding and intuition in the operation of, and investment in, storage and this is easiest to achieve in clear special cases; (b) this assumption is consistent with common assumptions in power system theory (i.e., the theory underlying screening curves and many other familiar results); and (c) the operation of storage rapidly becomes significantly more complex when the load follows a more complex stochastic process. The -
results set out here represent an important
5

benchmark against which we can compare storage operation rules under more complex stochastic processes. At the same time, the results set out here represent a stepping stone showing how familiar results in power system theory (e.g., screening curves) extend to the case of storage under strong assumptions.
We make two further simplifying assumptions – the assumptions (a) that the storage faces no efficiency losses and no degradation, and (b) that the storage is not rate limited (that is, it can charge or discharge as much as desired in the course of a single dispatch interval). These assumptions are made for convenience. As we will see, there are important lessons even in the simplified case studied here. The implications of these assumptions can be explored in future research.
The key contributions of this article are as follows:
• We characterize the efficient operation of a non-rate limited storage system, in a simplified power system and provide a simple and intuitive characterisation of the private incentive for investment in storage.
• We identify a financial hedge contract which can provide a perfect hedge for storage and show how this hedge can be constructed out of a combination of caps and floors.
• We characterize the socially-efficient level of investment in storage and provide a simple graphical interpretation.
3 Review of basic electricity market theory
This section summarises well-known, fundamental results in the theory of electricity markets. The purpose is to provide a benchmark or point of departure for the key results on storage that follow. This section introduces the notation and the flow of logic in a familiar setting before later sections extend the results to the case of storage. Table 1 summarises the notation used in this article.
3.1 Social incentives for usage of, investment in, and hedging of generation
Let’s suppose that we have a range of generation technologies, labelled i = 1, . . . , N . Each generation technology i has a constant variable cost of production ci ($/MWh) and a constant fixed cost of adding capacity fi ($/MWh).
As is conventional, uncertainty in the power system is introduced in the form of an uncertain, inelastic load. The realisation of the load each interval is given
6

by the random variable L. This random variable is assumed to be independent and identically distributed each interval. The demand curve is equal to some large, fixed value V LL (the value of lost load), up to the rate of consumption L, at which point the demand drops to zero. We can model this as a generator with zero fixed cost and a variable cost equal to V LL.
We can define the state of the power system to be all the factors that affect supply and demand (and therefore affect the price). In the model we are using here, the only source of uncertainty (and therefore the only variable defining the state of the power system) is the realisation of the load L.
In conventional power system modelling, the state of the power system in each time interval is (implicitly) assumed to be independent and identically distributed from one time interval to the next. As a consequence, the realisation of the price in each interval is independent and identically distributed – in other words, each realisation of the price is a drawing from the same distribution. (As we will see shortly, this assumption will not hold in the presence of storage).
Let’s suppose that the capacity of generation type i is given by Ki (MW). Given this mix of generation, each interval the task of the social planner is to observe the load L (MW) and to choose the dispatch of the available generation to minimise the total cost. Let DC(L| ⃗K) ($/h) denote the total cost of dispatch6 when the power system is operated efficiently, the total load is L and the mix of capacities is given by ⃗K = {K1, K2, . . . , KN }. The efficient dispatch of each generation type QiL (-
MW) is the solution to:
∀L, ⃗K, DC(L| ⃗K) ≡ mQiiLn
X
i
ciQiL subject to:
X
i
QiL = L
∀i, 0 ≤ QiL ≤ Ki (1)
The solution to this problem is the familiar merit-order dispatch: Generators are ranked in order from the cheapest (lowest variable cost ci) to the most expensive (highest variable cost ci), with the lower-variable costs generators used to capacity before the higher variable cost generators are used at all. For each realisation of the load L, there is a corresponding ‘system marginal cost’ (equal to the variable cost of the most expensive generator that is dispatched), which can be identified wit-
h the wholesale spot price P ($/MWh). Specifically, we can define the ‘price’ to be the change in dispatch cost for a small change in the load:
∀L, ⃗K, P (L| ⃗K) ≡ ∂DC
∂L (L| ⃗K) (2)
Then it follows that the optimal dispatch of each generation technology i, Q∗
iL
6Strictly: The rate at which expenditure is incurred.
7

satisfies:
∀i, L, Q∗
iL =

 
 
0, if P (L| ⃗K) < ci
Ki, if P (L| ⃗K) > ci
in the range [0, Ki], if P (L| ⃗K) = ci
(3)
We will assume that the capacity of each generator must be chosen before the load is realised. The optimal mix of each generation type is the choice of ⃗K which minimises the total cost of the power system (denoted V ( ⃗K)) which we can write as:
∀ ⃗K, V ( ⃗K) ≡ E[DC(L| ⃗K)] +
X
i
fiKi (4)
Here the expectation is over all possible realisations of the load L.
Solving this problem (minimising over Ki for each i), we find the familiar condition that, in the optimal mix of generation, for each generation type i, the area under the price-duration curve and above the variable cost of production ci is equal to the fixed cost of capacity fi. In other words, for each technology i, the optimal capacity Ki of that technology is where the area under the priceduration curve is equal to the fixed cost of that technology fi:
∀i, ∂V
∂Ki
= E[∂DC
∂Ki
(L| ⃗K)] + fi
= −E[(P (L) − ci)I(P (L) ≥ ci)] + fi = 0 (5)
Here I(·) is the indicator function which takes the value one when the expression in brackets is true and zero otherwise. E[(P (L) − ci)I(P (L) ≥ ci)] is the area under the price-duration curve and above the variable cost of the generator.
This leads, in a straightforward manner, to the concept of ‘screening curves’ and familiar results such as (a) in an optimally-configured power system, the shape of the price-duration curve is determined entirely by cost structure of the generation types (and not by load characteristics); and (b) the average price (the area under the price-duration curve) is entirely determined by the fixed and variable cost of the cheapest generation.7
3.2 Private incentives for usage of, and investment in, generation
Now let’s consider the private incentives to operate, or to invest in, generation.
Let’s suppose we have a private, for-profit, controllable generator with a maximum rate of production K (MW) (said to be the ‘capacity’ of the generator). The variable cost of the generator is c ($/MWh) and the fixed cost per
7See, for example, the textbook treatment in Biggar and Hesamzadeh (2014).
8

unit of capacity is f ($/MWh). Each period the generator observes the spot price P ($/MWh) and makes a decision as to how much to produce. If the generator produces at rate Q, it receives a cashflow stream at the rate π ($/h) where π is given by:8
π(Q|P ) = P Q − cQ (6)
Let V (P |K) be the (one-period) cashflow stream of the generator (before fixed costs) when it is operated efficiently (i.e., profit maximising) and the spot price is P . Given the spot price P , and capacity K, the generator chooses a profit-maximising rate of production QP :
∀P, K, V (P |K) ≡ max
QP
π(QP |P ) subject to: 0 ≤ QP ≤ K (7)
This has the familiar solution:
Q∗
P=

 
 
0, if P < c
K, if P > c
in the range [0, K], if P = c
(8)
When it comes to investment, we will make the conventional assumption that the capacity of the generator K must be chosen before the spot price is realised. The total expected payoff to the generator with capacity K (after including fixed costs) is E[V (P |K)] − f K where the expectation is taken over all possible values of the spot price P (recall that this distribution is stationary).
The generator owner has an incentive to add capacity (or new generation capacity has an incentive to enter the market) up to the point where E[ ∂V
∂K (P |K)] = f . Drawing on equations 6, 7 and 8, this is equivalent to the condition that the area under the price-duration curve and above the variable cost of the generator c is equal to the fixed cost of the generator f :
E[(P − c)I(P ≥ c)] = f (9)
It follows that, in the free-entry equilibrium, for every generation technology, the area under the price-duration curve and above the variable cost of that technology must be equal to the fixed cost of that technology.
We can observe that the socially-optimal dispatch and investment decisions (equations 3 and 5) are identical for the private profit-maximising dispatch and investment decisions (equations 8 and 9), so a competitive market of profitmaximising agents will achieve the socially-optimal outcome.
8It follows that each dispatch interval the generator receives revenue π∆ where ∆ is the length of the dispatch interval, discussed further below.
9

3.3 Perfect hedges for generators
Let’s turn now to the question of an ‘optimal’ hedge contract for this generator. As the spot price is stochastic, the generator above experiences a variable cashflow given by π(Q∗
P |P ). If this generator is risk averse it would like to reduce or eliminate this risk. We will seek a ‘perfect’ hedge contract that completely eliminates the risk faced by the generator.9
A hedge contract is a financial payment from the generator to another party, which depends on the spot price, and potentially on the dispatch of the generator, H(Q, P ). If the spot price is P and the generator chooses to produce at rate Q, the hedged cashflow of the generator is equal to:
π(Q|P ) − H(Q, P ) (10)
A perfect hedge contract is a hedge contract H(Q, P ) which has two key characteristics:
1. First, the hedge contract must eliminate the variability in the spot price when the generator is operating efficiently:
π(Q∗
P |P ) − H(Q∗
P , P ) = constant (11)
2. Second, the hedge contract must not affect or distort the efficient production decision of the generator. In other words,the optimal supply curve Q∗
P which is a solution to equation 7 (as given in equation 8) must also be a solution to the task of maximising the hedged profit of the generator:
V H (P |K) ≡ max
QP
π(QP |P ) − H(QP , P ) subject to: ∀0 ≤ QP ≤ K (12)
Because, by definition, the optimal rate of production Q∗
P maximises the cashflow π(Q|P ) (subject to the constraints), it follows that the second condition can be satisfied simply by making the hedge contract independent of the actual or out-turn production of the generator. In other words, a sufficient condition for the second criterion is as follows:
∀P, ∂H
∂Q (Q, P ) = 0 (13)
9In practice, depending on the supply and demand for insurance products, there is likely to be some premium associated with a perfect insurance product. As a result, market participants, even if risk averse may not choose to be perfectly hedged. Nevertheless, the case of a perfect hedge provides a useful benchmark and guide as to how to design hedging instruments. In effect, we are assuming that there exist risk neutral entities (which might be financial institutions) who are willing to take on ri-
sk with little need for compensation and who therefore can meet the hedging needs of other market participants at relatively low cost.
10

This is an important condition which is satisfied by most conventionally-trade hedge contracts (such as swaps, caps, and floors).10
In the case above, where the generator has a constant variable cost, the cashflow of the generator is equal to:
π(Q∗
P |P ) = (P − c)Q∗
P=
(
(P − c)K, if P > c
0, otherwise (14)
This cashflow can be perfectly hedged by a Cap contract with a strike price c and a volume K. A Cap contract with a strike price c and a volume K has the following payoff.
Cap(P |c, K) ≡ (P − c)KI(P ≥ c) (15)
A cap contract with a strike price c and a volume K is a perfect hedge for this generator:
π(Q∗
P |P ) = Cap(P |c, K) (16)
More generally, for any generator with an upward sloping convex cost function c(Q) Biggar and Hesamzadeh (2022) show that it is possible to come arbitrarily close to a perfect hedge using a portfolio of cap contracts with strike prices that are arbitrarily close together. Similarly, Biggar and Hesamzadeh (2014) show how loads can be perfectly hedged using a portfolio of floor contracts.
4 Optimal social use of and investment in stor
age in a power system
Let’s now extend this basic power system theory to incorporate storage. The introduction of storage in the power system has one important consequence for how we model the power system – we can no longer model the power system as being in the same state each period. Now, the level of storage in the power system affects the balance of supply and demand and therefore affects outcomes.
Extending the analysis above, we will consider a power system in which the state of the power system is determined entirely by the state of charge of the storage S.
To keep things simple, We will consider a stylized storage system which is not limited in the rate (MW) at which it can inject or withdraw power, but rather is limited in the total volume of energy stored (MWh). This storage
10This condition is not satisfied by some common hedge contracts for wind generators, and this has been heavily criticised in by several commentators including Newbery (2022).
11

Table 1: Nomenclature used in this article
Notation Unit Explanation
∆ hours length of dispatch interval c,ci $/MWh variable cost of generating plant fi,fS $/MWh fixed cost of generation technology i, storage L MW Random variable representing uncertain load Lmax, Lmin MW Upper and lower bound on the load S MWh State of charge of the systemwide storage assets (which evolves according to a Markov process) S+(S, L), S+
SL MWh New state of charge given old state of charge and the realisation of load Smax, Smin MWh Upper and lower bound on the state of charge M (S, T ), MST Prob Matrix describing the probability of transition from state of charge S to state of charge T . P (L), PL $/MWh spot price in current dispatch interval (which, in the simplest case is a function of the load L) P (S, L), PSL $/MWh Spot price when the overall state of storage is S and the load is L Q, Qi MW rate of production of generating pla-
nt K MW maximum rate of production (capacity) of generating plant x(s) Prob Probability the system is in state s in the stationary distribution δ Rate of time discount per interval DC(L| ⃗K) $/h Total dispatch cost when meeting total load of L in a context in which the generation capacities are ⃗K
system will be assumed to be perfectly efficient (the energy withdrawn from the power system is equal to the energy that is able to be re-injected). There are constant returns to scale – there is a fixed cost per unit of storage capacity which
12

we express as the cost fS $/MWh per hour. The storage capacity of the power system is defined as the difference between the maximum Smax and minimum Smin state of charge.
Let’s suppose that the state of charge of the power system as a whole at a given point in time is given by S (MWh). At this point in time all of the other uncertainty in the power system (e.g., due to the variation in load) is realised. Let’s suppose that this uncertainty is represented in the random variable L. Given this opening state of charge S, and realisation of uncertainty L, the closing state of charge is assumed to be given by S+
SL (MWh).
It follows that: if the load is L, the current state of charge is S, and the storage facility is following the rule S+
SL, the net demand (that is the demand including the contribution from storage) is:
L − S − S+
SL
∆ (17)
Here ∆ (h) is the length of the dispatch interval.
The transition from the opening state of charge S to the closing state of charge S+ can be represented as a Markov process. The probability of transitioning from an opening state of charge S = s, to a closing state of charge S+ = t is given by Mst, defined as follows:
Mst ≡ EL[I(S+
sL = t)] (18)
From any starting state of charge, after the power system evolves through any finite number of intervals the power system can be described as being in a probability distribution over possible future states, which we label x(s). A key concept in the analysis that follows will be the concept of the stationary distribution. A probability distribution over states is stationary if it satisfies the following condition:
∀t,
Z
Mstx(s)ds = x(t) (19)
As before, we will start by adopting the perspective of the system planner. The task of the system planner is to find the socially-efficient use of, and investment in, storage in the context of an overall power system.
4.1 Optimal use of storage in a power system
As before, let’s assume that the dispatch cost in a power system when consuming at rate L is DC(L| ⃗K). Recall that the network ‘price’ (also known as
13

‘System Marginal Cost’) is the slope of the dispatch cost with respect to the load (equation 2).
Let’s suppose that the total state of charge of the storage is S. The task of the system operator is to find the optimal storage supply curve S+
SL which solves the following Bellman equation:
∀S, ⃗K, KS, V (S| ⃗K, KS) ≡ min
S+
SL
E[DC(L − (S − S+
SL)/∆| ⃗K) + δV (S+
SL| ⃗K, KS)]
subject to: ∀L, Smin ≤ S+
SL ≤ Smin + KS ≡ Smax (20)
Here δ is the time discount rate. The expectation E[·] is taken over all possible realisations of the load L.
It turns out that the socially-optimal dispatch of the storage system is to charge the storage system to its maximum at times when the realisation of demand is low, so that the resulting spot price (even when the storage is charging at the maximum rate) is below the average price in the next period (discounted for the time value of money). Similarly, it is optimal to discharge the storage system to its minimum level at times when the realisation of demand is high so that the spot price (even with -
discharging) is above the average price in the next period discounted for the time value of money.
Specifically, let’s suppose that, given the state of charge S and the realisation of the load L, the strategy of the system operator is to choose the closing state of charge S+
SL. We can define PSL be the spot price in the current period when the state of charge is S, the realisation of the load is L, and the system operator follows the strategy S+
SL:
∀S, L, PSL ≡ Pˆ L − (S − S+
SL)/∆ (21)
Here Pˆ(L) = ∂DC
∂L (from equation 2) is the spot price when the storage is neither charging nor discharging.
The price in the next period PS+
SLL′ depends both on the state of charge at
the start of the next period (S+
SL) and on the realisation of the load in the next
period L′. The expected price in the next period will be denoted as follows:
∀S, L, E[P +
SL] ≡ EL′ [PS+
SLL′ ] (22)
As shown in theorem 1, for any given state of charge S and realisation of load L), the optimal strategy S+
SL depends on the relationship between the current
price when the load charges or discharges to the level S+ and the expected price in the next period (which also depends on the closing state of charge S+), discounted by the time value of money. Specifically, the optimal strategy must
14

satisfy the following condition:
∀S, L, S+
SL =

 
 
Smax, if PSL < δE[P +
SL]
Smin, if PSL > δE[P +
SL]
in the range [Smin, Smax], if PSL = δE[P +
SL]
(23)
This is the storage analogy of equation 8.
Note that this is a recursive condition. The optimal strategy S+ affects (a) the price realisation today (equation 21) and (b) the expected price realisation tomorrow (equation 22). This is a complex relationship. A high rate of charge in the current period will tend to raise the price, and raise the closing state of charge, which tends to lower the expected price in the next period, and vice versa.
We can, in principle, compute the optimal strategy S+
SL through an iterative
process. Specifically, given an initial guess at S+
SL, for each possible value of S and L we can compute the current spot price PSL from equation 21 and the expected price in the next period E[P +
SL] from equation 22. The new optimal
strategy S+′
SL is given by equation 23, which can be written in a slightly more compact form as follows:
∀S, L, S+′
SL = S + ∆(Pˆ−1(δE[P +
SL]) − L)
Smax
Smin
(24)
Here | · |H
L means the expression in brackets is bounded by the bounds L and H. Where this process converges it converges to the optimal strategy, given by equations 21-23.
Figure 1 illustrates the determination of the optimal strategy in the case where the storage capacity is small relative to the variation in load. As we noted above the optimal closing state of charge depends on the relationship between the current spot price and the next-period expected spot price. In figure 1 the blue line represents the price-duration curve and the red represents the expected future spot price discounted by the time value of money (again, reflected as a price-duration curve).11
The right hand side of figure 1 illustrates the case where the realisation of load L is low (so the current spot price is low) – lower, even, than the expected future spot price (taking into account that the storage will be full in the next period). In this case the optimal strategy is to charge the storage to the maximum S+
SL = Smax. Similarly, when the realisation of the load is high (on the left in figure 1) so that the current spot price (even taking into account the discharge of the storage) is high – above the expected future spot price the optimal strategy is to discharge the storage to the minimum S+
SL = Smin.
11The horizontal axis represents the load duration. For any given load l, the load duration is in a one-to-one relationship with the actual load and is given by P r(L ≥ l).
15

The gray areas of the graph in figure 1 represent these extreme cases – where the storage ends up fully charged or discharged. It is only in these regions that the storage expects to receive a non-zero cash-flow.
For intermediate values of the realisation of load, the storage charges or discharges to the point where the spot price today (in the current interval) is equal to the expected future spot price (discounted by the time value of money) tomorrow (i.e., in the next interval). At these intermediate levels of load the storage expects to receive, on average, no revenue or incur no costs.
0 0.2 0.4 0.6 0.8 1
0
50
100
150
200
Duration
Price
P
δE[P ]
Storage charges to
S max
Storage discharges to Smin
Figure 1: Illustration of the determination of S+
SL in the case where the storage capacity is 10% of the variation of the load). Load is uniformly distributed on [0,100]. Raw price is assumed to be a linear function of load P (L) = 20 + 1.5L. Initial storage level in the middle of the range.
Figure 1 illustrates the case where the starting state of charge S is in the middle of its range. But the optimal strategy (S+
SL and the corresponding price PSL) depends on the opening state of charge S (as well as the load L). Therefore, to get a full picture of the optimal strategy we should look at how the optimal strategy depends on the state of charge.
Figure 2 illustrates the optimal strategy in three cases – where the storage is initially empty S = 0, where the storage is half full S = 50% and where the storage is full S = 100%. As we have seen, the optimal charge/discharge strategy, for any given state of charge S and level of the load L, S+
SL depends on the relationship between the current price PSL and the expected price in the next period δE[P +
SL]. The first three graphs in figure 2 illustrate PSL and
δE[P +
SL] for each value of L (here represented as the ‘duration’). As we saw in figure 1, when the load is high (which occurs with low duration), the current price (even when the storage discharges to the minimum) is above the expected
16

price in the next period, and the storage earns a positive payoff. When the load is low (which occurs with high duration), the current price (even when the storage charges to the maximum) is below the expected price in the next period, and the storage incurs costs. Otherwise, for a range of load in between, the current and expected future prices are the same. The storage may charge or discharge but, on average expects to not receive any gain or loss.
As can be seen (in the first three graphs of figure 2) the optimal strategy does not vary materially in this case where the storage capacity is relatively small (in contrast with figure 3). Figure 2 also illustrates the stationary distribution which, in this case, involves the storage facility spending almost all of its time either completely full (S = 100%) or completely empty (S = 0%).12
0
0.5
1
0
50
100
150
Duration (%)
Price ($/MWh)
Storage empty
0
0.5
1
0
50
100
150
Duration (%)
Price ($/MWh)
Storage half full
0
0.5
1
0
50
100
150
Duration (%)
Price ($/MWh)
Storage full
0
0.5
1
0
0.1
0.2
0.3
0.4
State of charge (%)
Probability
Stationary dist.
Figure 2: Storage size S = 10% of load variation.
Figure 3 illustrates the case where the storage capacity is large relative to the variation in demand – in this case, where the storage capacity is 150% of the
12In figures 2 and 3, load is assumed to be uniformly distributed on [0,100]. Raw price is a linear function of load P (L) = 1.5L + 20.
17

variation in demand. As can be seen, the optimal strategy varies according to the state of charge of the storage. When the storage is close to full, if the load is low (represented here as high duration), it is efficient to charge the storage to the maximum (reflected in the grey area on the RHS of the graph on the lower left). For intermediate levels of the state of charge, the storage is not charged to the maximum or minimum, but only to the level where the current spot price is equal to the fu-
ture expected spot price (reflected in the graph on the top right). When the storage is nearly empty, when the realisation of the load is high, it is efficient to discharge the storage to the minimum (grey area of the graph on the top left). The stationary distribution in this case still has substantial weight on the extremes, but also spends more time on the intermediate values of the state of charge. This can be seen in the lower right graph of figure 3.13
0
0.5
1
0
50
100
150
Duration (%)
Price ($/MWh)
Storage empty
0
0.5
1
0
50
100
Duration (%)
Price ($/MWh)
Storage half full
0
0.5
1
0
20
40
60
80
Duration (%)
Price ($/MWh)
Storage full
0
0.5
1
0
1
2
3
·10−2
State of charge (%)
Probability
Stationary dist.
Figure 3: Storage size S = 150% of load variation.
Theorem 1. In a power system in which consecutive draws of L are independent and identically distributed, the optimal dispatch of a non-rate-limited storage system when the state of charge is S and the realisation of the load is L, S∗
SL is
13The discontinuity in the lower right graph is an artefact of the simulation.
18

as follows:
∀S, L, S∗
SL =

 
 
Smax, if PSL < δE[P +
SL]
Smin, if PSL < δE[P +
SL]
in the range [Smin, Smax], if PSL = δE[P +
SL]
(25)
Here PSL is the ‘spot price’ (the slope of the dispatch cost) that emerges when the storage system is used optimally, and E[P +
SL] ≡ EL′ [PS∗
SLL′ ] is the expected spot price in the next period.
Proof. From equation 20 we can write the Lagrangian as follows:
∀S, L(S) = V (S) = E[DC(L − (S − S+
SL)/∆| ⃗K) + δV (S+
SL)]
− E[μ ̄L(Smax − S+
SL)] − E[μL(S+
SL − Smin)] (26)
The first-order condition with respect to S+
SL is as follows:
fL ∆
∂DC
∂L (L − (S − S+
SL)/∆) + δfL
∂V
∂S (S+
SL) + fLμ ̄L − fLμL = 0 (27)
Using the result that PSL = P (L − (S − S+
SL)/∆) = ∂DC
∂L , we can write this as:
PSL + δ∆ ∂V
∂S (S+
SL) + μ ̄L − μL = 0 (28)
Using the envelope theorem we have that:
∂V
∂S (S) = ∂ L
∂S (S) = −E ∂DC
∂L (L − (S − S+
SL)/∆)
= −E[PSL] (29)
Therefore: ∂V
∂S (S+
SL) = −EL′ [PS+
SL,L′ ] = −E[P +
SL] (30)
Here E[P +
SL] = EL′ [PS+
SLL′ ] is the expected price in the next interval, given that the state of charge in the current interval is S. It follows that the first order condition, equation 27, can be written:
−PSL + δE[P +
SL] + μ ̄SL − μSL = 0 (31)
It follows that the socially-optimal storage dispatch is S∗
SL as follows:
∀S, L, S∗
SL =

 
 
Smax, if PSL < δE[P +
SL]
Smin, if PSL > δE[P +
SL]
in the range [Smin, Smax], if PSL = δE[P +
SL]
(32)
19

4.2 Optimal investment in storage
Now let’s consider the question of the optimal mix of generation and storage in an efficiently-configured power system.
We will make the assumption that the investor in generation or storage does not know the exact state of the power system at the time when the new asset comes into service. This could arise because there is some long and uncertain delay between the time when the social planner starts considering an investment and when that investment comes online. In the absence of information about the exact state of charge, the best the social planner can do is to estimate the long-run probability that the power -
system will be in any given state. This is the stationary distribution we introduced earlier.
We will assume that the social planner will choose to invest if and only if the investment is socially valuable, when averaged over the stationary distribution over states.
Recall that solving equation 20 yields the optimal closing state of charge S+ for any given opening state of charge S and realisation of load L. It follows that the total cost of the power system in state S can be written as follows:14
V (S| ⃗K, KS) +
P
i fiKi
1 − δ + fSKS
1 − δ (33)
Here V (S| ⃗K, KS) is as given in equation 20:
V (S| ⃗K, KS) = E[DC(L − (S − S+
SL)/∆| ⃗K) + δV (S+
SL| ⃗K, KS)] (34)
It follows that the optimal capacity of generation type i and the optimal capacity of storage must satisfy the following equations:
∂V ∂Ki
(S| ⃗K, KS) + fi
1 − δ = 0 (35)
And: ∂V
∂KS
(S| ⃗K, KS) + fS
1 − δ = 0 (36)
The value of an additional unit of capacity of generation satisfies the following recursive equation (c.f., equation 5):
∂V ∂Ki
(S| ⃗K, KS) = E ∂DC
∂Ki
(L − (S − S+
SL)/∆| ⃗K) + δ ∂V
∂Ki
(S+
SL| ⃗K, KS) (37)
Similarly, the value of an additional unit of capacity of storage satisfies the
14This is the generalisation of equation 4.
20

following recursive equation:
∂V ∂KS
(S| ⃗K, KS) = E ∂DC
∂L (L − (S − S+
SL)/∆| ⃗K) + δ ∂V
∂S (S+
SL| ⃗K, KS) ∂S+
SL
∂KS
+ δE ∂V
∂KS
(S+
SL| ⃗K, KS) (38)
Both of these equations have the form:
∀S, f (S) = g(S) + δEL[f (S+
SL)] (39)
Here the expectation is taken over all possible values of the load L. Following the logic in theorem 5 in the Appendix, the solution (at the stationary distribution) is:
ES[f (S)] = ES[g(S)]
1 − δ (40)
Here ES[·] means the average over states, taking the probability of each state as in the stationary distribution.
Returning to equation 37, we see that
∀i, S, fi(S) = ∂V
∂Ki
(S| ⃗K, KS) (41)
And, using equation 5:
∀i, s, gi(s) = EL
∂DC ∂Ki
(L − (s − S+
sL)/∆| ⃗K) = −EL[(PsL − ci)I(PsL ≥ ci)]
(42) Substituting in to equation 40 and using equation 35, it follows that, assuming the investment decision is based on the long-run stationary distribution over the state of charge, it is efficient to add capacity of generation type i up to the point where the expected area under the price-duration curve and above the variable cost of the generation is equal to the cost of capacity for that generation type:
(1 − δ)ES
∂V ∂Ki
(S| ⃗K, KS) + fi = −ESL[(PSL − ci)I(PSL ≥ ci)] + fi = 0
(43)
This is a very similar result to equation 5, except that the expectation is taken over all values of the storage and the realisation of the load. In effect the ‘price-duration curve’ is augmented by the additional uncertainty in the level of storage. The effect of increasing the level of storage on the price-duration curve is illustrated in figure 5.
Similarly, returning to equation 38, we see that:
f (s) = ∂V
∂KS
(s| ⃗K, KS) (44)
21

And:
g(s) = EL
∂DC
∂L (L − (s − S+
sL)/∆| ⃗K) + δ ∂V
∂S (S+
sL| ⃗K, KS) ∂S+
sL
∂KS
= EL (δE[P +
sL] − PsL)I(δE[P +
sL] ≥ PsL) (45)
Substituting in to equation 36 and using equation 40, it follows that, assuming the investment decision is based on the long-run stationary distribution over the state of charge, it is efficient to add capacity of storage up to the point where the expected area under the expected price (discounted) and above the price-duration curve is equal to the cost of adding storage capacity:
(1 − δ)ES
∂V ∂Ki
(S| ⃗K, KS) + fS = ES[g(S)] + fS
= −ESL (δE[P +
SL] − PSL)I(δE[P +
SL] ≥ PSL) + fS
= 0 (46)
Theorem 2. In a power system in which consecutive draws of the load are independent and identically distributed and storage is not rate-limited, and assuming that the social planner does not know what the state of charge will be at the time of investment, the optimal volume of storage is where the area below the expected price in the next interval (discounted for the time value of money) and above the price-duration curve, is equal to the fixed cost of storage fS.
Holding constant the stock of generation assets, for any given volume of storage we can work out the marginal benefit of adding an additional small increment of storage (the area under the expected price in the next interval and above the price-duration curve). As we might expect, this decreases as the storage capacity increases, as illustrated in figure 4. The optimal level of capacity is where the average marginal benefit of additional capacity is equal to the marginal cost of adding storage cap-
acity. If we assume that the cost of adding storage capacity is $5/MWh, and holding constant the stock of generation assets, the optimal level of storage capacity in this power system is where the storage is approximately 37% of the variation of the load.
In the analysis above we held constant the stock of generation assets, to find the overall optimal mix of generation and storage in a power system, we must solve equations 43 and 46 simultaneously. We can obtain some idea of the implication of changing the stock of storage on the optimal mix of generation by examining the impact of storage on the price-duration curve. It turns out that, for a given stock of generation assets, adding storage capacity ‘flattens’ the price-duration curve around its m-
id-point (the average price). Figure 5 illustrates the price-duration curves for a range of storage capacities (storage 10%, 50% and 150% of the variation in load) holding constant the underlying stock of generation assets (as reflected in Pˆ(L)). As can be seen, adding storage
22

0 20 40 60 80 100 120 140
0
5
10
15
20
Storage capacity (% of variation in load)
Av. Marginal benefit ($/h)
Marginal Benefit Marginal Cost
Figure 4: The optimal level of storage capacity is where the marginal benefit from adding storage is equal to the fixed cost of storage capacity. Here the marginal benefit is calculated holding constant the stock of generation assets.
capacity reduces the profitability of peaking generation but (since the total area under the price-duration curve remains unchanged) does not change the profitability of the baseload generation. This implies that, in the optimal mix of generation, there will be less need for peaking capacity and more need for baseload capacity.
4.3 Optimal private use of and investment in storage
Let’s now consider the decisions of a storage entrepreneur which is operating a small, price-taking storage asset. We are particularly interested to explore whether the decentralised decisions of a large number of small storage operators will result in the socially-efficient storage operation and investment decisions
We will distinguish between the state of charge of the power system as a whole and the state of charge of the small storage asset in question by using upper case S to represent the state of charge of the power system as a whole and lower case s to represent the state of charge of the asset in question.
We will assume that state of charge of the power system as a whole S is public information. As before, given the state of charge of the power system as a whole S, and the realisation of the load L, the state of charge of the power system as a whole is assumed to evolve according to the rule S+
SL.
23

0
0.2
0.4
0.6
0.8
1
50
100
150 Smax = 10
Smax = 150
Duration (%)
Price ($/MWh)
Figure 5: Illustration of the effect of adding storage to the long-run price-duration curve. Load uniform on [0,100], Raw Price a linear function of load P (L) = 1.5L + 20. Storage 10%, 50% and 150% of the variation in load.
Theorem 6 (in the Appendix) confirms that a private price-taking storage facility has an incentive to operate efficiently (that is, in accordance with the socially-optimal dispatch in theorem 1). Similarly, theorem 7 confirms that an entrepreneur has an incentive to invest in the storage facility when it is socially-efficient to do so (in accordance with theorem 2). Since the proofs of these theorems have the same structure as theorems 1 and 2, they have been relegated to the Appendix.
5 Hedge contracts for storage
Now let’s seek an ideal hedge contract for storage.15 An ideal hedge contract is a financial contract which makes a payment H(s+, s, S, L) dependent on the state of charge of the power system as a whole, S, the realisation of demand L, and the opening and closing state of charge, s and s+.
As we noted in the discussion of perfect hedge contracts for generators (equations 11 and 12), the perfect hedge contract must have two characteristics:
• First, the hedge contract must completely eliminate the cashflow variabil
15As noted in footnote 9, the case of an ideal or perfect hedge is a special case that acts as a useful benchmark or guide. In practice, if there is a cost associated with purchasing insurance, market participants are not likely to be perfectly hedged.
24

ity experienced by the storage operator when it is operating efficiently.
Let s+∗
sSL be the efficient strategy of a small, price-taking storage facility when the state of charge of the facility is s and the state of charge of all storage in the power system is S, (the solution to equation 64). As in equation 11, in order to completely eliminate the risk experienced by the facility the perfect hedge contract must satisfy:
∀s, S, L, π(s+∗
sSL|s, S, L) − H(s+∗
SP , s, S, L) = constant (47)
• Second, the hedge contract must not alter or distort the efficient dispatch decisions of the storage operator. In other words, the optimal dispatch for the unhedged storage facility (s+∗
sSL, the solution to equation 64), must also be the optimal dispatch for a hedged storage facility, which is:
V (s|S) = max
s+
sSL
E π(s+
sSL|s, S, L) − H(s+
sSL, s, PSL) + δV (s+
sS L |S +
SL)
(48)
subject to: ∀s, S, L, smin ≤ s+
sSL ≤ smax
Some commentators have suggested that storage systems should be hedged using a form of hedge contract known as a ‘collar’. A collar is a combination of a Cap and a Floor contract. A Cap contract pays out the difference between the spot price and a strike price for a pre-determined volume, but only when the spot price exceeds the strike price. Similarly, a Floor contract pays out the difference between the strike price and the spot price, but only when the spot price falls short of the strike price-
. Formally a cap hedge contract with a strike price of P S and a volume of V makes a payment equal to Cap(P |P S, V ) = (P − P S)V I(P > P S). Similarly, a floor hedge contract makes a payment equal to Floor(P |P S, V ) = (P S − P )V I(P < P S).
It is straightforward to check that it is not possible to obtain a perfect hedge for a storage system using Cap and Floor contracts alone. In fact it is not possible to obtain a perfect hedge for a storage system using any hedge contract which depends only on factors outside the control of the storage unit, such as the storage of the power system as a whole S, or the spot price PSL. Intuitively, the reason is that the presence of the hedging eliminates the incentive on the storage facility to ‘inv-
est’ in charging today in order to discharge tomorrow. The hedge contract must involve financial rewards or penalties based on its own charging decisions to induce the storage facility to choose the efficient state of charge.
Theorem 3. There is no hedge contract which is independent of the storage facilities own state of charge s+ which satisfies the two conditions for an ideal hedge contract above.
25

Proof. Let’s suppose that there is such a hedge contract H(s, S, L). From equation 47, the hedge contract must satisfy:
∀s, S, L, π(s+∗
sSL|s, S, L) − H(s, S, L) = PSL(s − s+∗
sSL) − H(s, S, L)
= constant (49)
This implies that H(s, S, L) = PSL(s − s+∗
sSL) up to a constant. Now consider
the second condition. From equation 48 we must have that s∗
sSL is the solution to:
V (s|S) = max
s+
sSL
E (s − s+
sSL)PSL − H(s, S, L) + δV (s+
sS L |S +
SL)
= max
s+
sSL
E (s − s+
sSL)PSL − PSL(s − s+∗
sSL) + δV (s+
sS L |S +
SL)
= max
s+
sSL
E[(s+∗
sSL − s+
sSL)PSL + δV (s+
sS L |S +
SL)] (50)
Here the maximisation is subject to the constraints in equation 48.
We observe that V (s|S) is independent of s. It follows that:
∂V
∂s (s|S) = 0 (51)
It follows that the first order condition for equation 50 for s+
sSL is −PSL. As this is negative, the solution to equation 50 is to choose the smallest possible closing state of charge s = smin in all states. This is not optimal, violating the second condition.
Theorem 3 proves that it is not possible to obtain a perfect hedge of a storage system using any conventional hedge contracts. However, theorem 4 below shows that it is possible to obtain a perfect hedge with a slightly expanded range of hedge contracts.
Theorem 4. The following hedge contract satisfies the conditions for an ideal hedge contract:
∀s+, s, S, L, H(s+, s, S, L) = PSL(s − s+∗
sSL) − δE[P +
SL](s+ − s+∗
sSL) − c (52)
Here c is a constant, and s and s+ are the initial and final state of charge of the storage facility and s+∗
sSL is the optimal strategy of the storage facility.
Proof. With this hedge contract the hedged payoff of the storage is:
∀s, S, L, π(s+|s, S, L) − H(s+, s, S, L) = (s+∗
sSL − s+)(PSL − δE[P +
SL]) + c
It is clear that when the storage chooses the efficient strategy s+ = s+∗
sSL, the hedged payoff is constant so the first condition is satisfied. To verify the second
26

condition, we observe that first order conditions for the hedged storage operator (equation 48) are the same as for the unhedged storage operator (equation 20), so the profit-maximising storage supply function s+∗
sSL is unchanged.
We can write this hedge contract as follows:
H(s+, s, S, L) = (PSL − δE[P +
SL])(s − s+∗
sSL) + δE[P +
SL](s − s+) − c (53)
Let’s define two new values: The expected spot price in the next period given that the storage is full at the start of the period, and the expected spot price in the next period given that the storage is empty at the start of the period:
EP max ≡ E[P +
S L |S +
SL = Smax] and EP min ≡ E[P +
S L |S +
SL = Smin] (54)
The perfect hedge can be expressed as the sum of a ‘Cap’ and a ‘Floor’ contract, with a strike price of δEP min and δEP max, respectively, and a new form of hedge contract, which we will refer to as an ‘S-shaped hedge’, as follows:
H(s+, s, S, L) = (PSL − δE[P +
SL])(s − s+∗
sSL) − δE[P +
SL](s+ − s) − c
= (PSL − δE[P +
SL])(s − smin)I(PSL > δE[P +
SL])
+ (δE[P +
SL] − PSL)(smax − s)I(PSL < δE[P +
SL])
− δE[P +
SL])(s+ − s) + c
= Cap(PSL|δEP min, s − smin) + Floor(PSL|δEP max, smax − s)
+ (s − s+)δE[P +
SL] + c (55)
The shape of these components of the perfect hedge contract are illustrated in figure 6. As can be seen, the combination of the Cap and Floor take the form of a ‘collar’ hedge contract with strike prices at EP min and EP max. If the realised price PSL is less than EP max, or larger than EP min either the Cap or the Floor has a positive payoff. Note that, although the strike price for the Cap and the Floor is independent of the state of the power system, the volume of the Cap and the Floor must be -
constantly adjusted to reflect the current state of charge, s.
The Cap and Floor contracts discussed above are reasonably standard and (although their volume varies with the state of charge of the storage system) can probably be constructed relatively easily. There will likely be more practical challenge in constructing the S-shaped hedge contract. This contract has a payoff which depends on the actual or out-turn change in the state of charge of the storage s − s+ and the discounted next-period expected price δE[P +
SL]. We envisage that, for any given starting value of the state of charge S, and given the realisation of the load L, the contract would specify a formula, or a look-up table for the value of δE[P +
SL].
27

0
0.2
0.4
0.6
0.8
1
−1,000
−500
0
500
1,000
Duration (%)
Payoff ($/h)
Cap Floor S-shaped
PSL > δE[P +
SL]
PSL = δE[P +
SL] PSL < δE[P +
SL]
Lmax
S Lmin
S
Figure 6: Illustration of the shape of the components of the perfect hedge contract in the case where the spot price is a linear function of the load, load is uniformly distributed on [0,100], the storage capacity is 20 per cent of load, and the state of charge is in the middle of the range (i.e., 10).
The operation of this portfolio, for a few iterations of the power system, is illustrated in table 2. In this example, the load is uniformly distributed on [0,100], and the storage capacity is 20. The floor contract has a strike price of $83 and the cap has a strike price of $107. The initial state of charge is 7.7 and the realisation of load is 32. With these values the realisation of the price ($89.7) is equal to the discounted next-period price ($89.7), so the storage is indifferent about charg-
ing or not. In fact, it charges to 18.7, incurring a cost of $987.7. The payoff on the cap and floor are both zero, and the payoff on the S-shaped hedge is the expected next-period price ($89.7) times the amount of the charge (11) which is equal to the payoff of $987.7, so the storage is perfectly hedged.
In the third interval the state of charge is 20 and the realisation of demand is 99. The realised price ($167) is well above the discounted expected next-period price ($107) so the storage would like to discharge to the minimum. In doing so it earns a payoff of the spot price times the storage capacity or $3340. The floor contract is not ‘in the money’ but the cap contract pays out the difference between the spot price and the strike price times the storage capacity, for a payoff of $1200. The S-s-
haped hedge pays out the expected price times the storage capacity, which is $2140. Again we see that with this portfolio of hedge contracts, the storage facility is perfectly hedged.16
16For clarity, the payoffs in table 2 are different from the payoffs in figure 6 because figure 6 only illustrates the case where the state of charge S = 10, whereas the state of charge in the table 2 varies each interval
28

SoC L P δE[P +
SL] π FV FCF CV CCF SCF Total
7.7 32 89.7 89.7 -987.7 12.3 0 7.7 0 -987.7 -987.7 18.7 29 87.6 87.6 -112.2 1.3 0 18.7 0 -111.2 -111.2 20.0 99 167.0 107.0 3340 0 0 20 1200 2140 3340
Table 2: Illustration of the evolution of the payoff on the hedge contracts for three iterations of the power system, where the load is uniformly distributed on [0,100] and the storage capacity is 20. Opening state of charge is 7.7. Here L= realisation of load, P= price given SoC and load, π is one-period payoff to storage, FV is floor volume, FCF is payoff on floor contract, CV is cap volume, CCF is payoff on cap contract, SCF is payoff on S-shaped hedge, Total is total hedge payoff (which matche-
s storage payoff, showing the storage is perfectly hedged)
Gen VC ($/MWh) FC ($/MWh)
L $50 185 M $100 150 H $300 70 VoLL $1000 $0
Table 3: Fixed and variable costs of each generation technology in the worked example
6 Worked example
Now let’s consider a worked example in a slightly more realistic power system. In this example there are assumed to be three generation technologies, corresponding roughly, to baseload, mid-merit, and peaking generation. The fixed and variable cost of these generation technologies is set out in table 3. The Value of Lost Load is assumed to be $1000/MWh, which we can model as a fourth type of generation technology, with a fixed cost of zero. In addition, we will assume that storage can be added to -
this power system, with a fixed cost of $25/MWh. As before the storage will be assumed to be not limited in the rate at which it can inject or withdraw power.
As can be seen in figures 7-9, as we add more storage to the power system, the variation between the current spot price and the expected future spot price reduces (although, as the figures show, this depends on the state of charge on the storage).
29

0
0.5
1
0
500
1,000
Duration (%)
Price ($/MWh)
Storage empty
0
0.5
1
0
500
1,000
Duration (%)
Price ($/MWh)
Storage half full
0
0.5
1
0
500
1,000
Duration (%)
Price ($/MWh)
Storage full
0
0.5
1
0
0.2
0.4
0.6
State of charge (%)
Probability
Stationary dist.
Figure 7: Storage size S = 2% of load variation.
7 Conclusion
With increasing penetration of variable renewable energy it is likely that power systems of the future will require increasing volumes of energy storage services. It is therefore important to understand the economics of storage operation, investment, and hedging decisions in the context of wholesale power markets. This article contributes to that understanding by developing a theory of the optimal operation of and investment in storage systems in the context of a power system in which the realisat-
ion of load in each period is an i.i.d. random variable.
We find that many of the familiar results from the economic theory of power systems have parallels in the context of storage. But, the inclusion of storage raises new considerations and complexity in that the power system now has an additional state variable (the state of charge) which evolves over time as a Markov process.
30

0
0.5
1
0
500
1,000
Duration (%)
Price ($/MWh)
Storage empty
0
0.5
1
0
200
400
600
Duration (%)
Price ($/MWh)
Storage half full
0
0.5
1
0
100
200
300
Duration (%)
Price ($/MWh)
Storage full
0
0.5
1
0
0.2
0.4
State of charge (%)
Probability
Stationary dist.
Figure 8: Storage size S = 20% of load variation.
As in the simplest power systems, it is possible the characterise the incentives for investment in storage through consideration of the price-duration curve, but now the shape and location of that price-duration curve depend on the state of charge. We also demonstrate that the private incentives for investment in a small price-taking storage facility match the social incentives. Finally we develop hedge contracts which can perfectly eliminate the risk faced by storage facilities, without distortin-
g their operational decisions. Those hedge contracts resemble a combination of a cap and floor hedge contract, but with important differences.
In this analysis we have not yet categorised the full optimal mix of storage and generation types in the power system. Doing so requires solving equations 43 and 46 simultaneously. We leave this task for future work.
In this paper we have focused on the special case in which demand is i.i.d. In the real world demand follows a path which is partly predictable and partly uncertain from one period to the next. The impact of storage in this case is
31

0
0.5
1
0
500
1,000
Duration (%)
Price ($/MWh)
Storage empty
0
0.5
1
0
100
200
300
Duration (%)
Price ($/MWh)
Storage half full
0
0.5
1
0
50
100
150
200
Duration (%)
Price ($/MWh)
Storage full
0
0.5
1
0
0.2
0.4
State of charge (%)
Probability
Stationary dist.
Figure 9: Storage size S = 50% of load variation.
likely considerably more complex and is left for future work. In addition, this work makes important simplifying assumptions, such as that the storage is pricetaking, is perfectly efficient, experiences no degradation, and is not limited in the rate at which it can charge or discharge. The impact of these assumptions can be explored in future work. Nevertheless, we consider that the analysis set out here contributes to our understanding of the theory of storage in liberalised wholesale power marke-
ts.
A Solutions for recursive Markov chains
Theorem 5. Suppose we have a Markov process with a state space S and a transition matrix from state s ∈ S to state t ∈ S given by Mst. Suppose that the corresponding stationary distribution for this Markov process is given by xs.
32

0 10 20 30 40 50
0
20
40
60
80
Storage capacity (% of variation in load)
Av. Marginal benefit ($/h)
Marginal Benefit Marginal Cost
Figure 10: In the worked example the optimal level of storage (holding constant the stock of generation assets) is approximately 24 per cent of the variation in the load
0
0.2
0.4
0.6
0.8
1
0
200
400
600
800
1,000
Smax = 2
Smax = 50
Duration (%)
Price ($/MWh)
Figure 11: Illustration of the effect of adding storage on the price-duration curve in the worked example holding constant the stock of generation assets. Diagram illustrates the cases where Smax = 2, and Smax = 50.
By definition xs satisfies:
∀t, xt =
Z
s
xsMstds (56)
33

Suppose that we have a recursive equation given as follows:
∀s, f (s) = g(s) + δ
Z
t
Mstf (t)dt (57)
Then we can write:
Z
s
xsf (s)ds =
R
s xsg(s)ds
1 − δ (58)
Proof. Taking the expectation over equation 57 in the stationary distribution, we find:
Z
s
xsf (s)ds =
Z
s
xsg(s)ds + δ
Z
s
xs
Z
t
Mstf (t)dtds
=
Z
s
xsg(s)ds + δ
Z
t
xtf (t)dtds (59)
The result follows.
It follows that, if we have a relationship between the state of charge of storage in the current period and the state of charge of storage in the next period as given by equation 39 in the text:
f (S) = g(S) + δE[f (S+
SL)] (60)
We can take the Markov transition matrix as follows:
Mst = E[I(S+
sL = t)] (61)
The solution to equation 60 (at the stationary distribution) is:
ES[f (S)] = ES[g(S)]
1 − δ (62)
Here ES[f (S)] means the expectation of the function f (s) in the stationary distribution.
B Private incentives for use of storage
At the start of each dispatch interval the storage system in question has some existing state of charge s (MWh). This small storage asset is assumed to have state of charge limits smin ≤ s ≤ smax. The state of charge at the end of the dispatch interval will be denoted s+ (MWh). Each dispatch interval, given the initial state of charge s, the storage system observes the realisation of the spot
34

price PSL and makes a decision as to the end-of-interval state of charge s+. The (one-period) cashflow of the storage system over the dispatch interval is then:
π(s+|s, S, L) = PSL(s − s+) (63)
For each opening state of charge s, let V (s|S) be the present value of the future stream of cashflows for the small storage facility in question. We can write down the Bellman equation for V (s|S). This equation is the analogue of equation 7 for storage:
V (s|S) = max
s+
sSL
E π(s+
sSL|s, S, L) + δV (s+
sS L |S +
SL) (64)
subject to: ∀s, S, L, smin ≤ s+
sSL ≤ smax
Here E[·] is the expectation operator, taken over the realisation of L, and δ is the rate of time discount.
We can form the Lagrangian for equation 64 as follows:
L(s|S) =
X
L
λL((s − s+
sSL)PSL + δV (s+
sSL))
−
X
L
λLμ ̄sSL(smax − s+
sSL) −
X
L
λLμsSL(s+
sSL − smin) (65)
Here λL > 0 is the probability distribution for L and μ ̄sSL and μsSL are La
grange multipliers which satisfy the the complementary slackness conditions:
μ ̄sSL(smax − s+
sSL) = 0, μ ̄sSL ≥ 0 and μsSL(s+
sSL − smin) = 0, μsSL ≥ 0 (66)
From equation 65 the first order condition for s+
sSL is as follows:
∀s, S, L, −PSL + δ ∂V
∂s (s+
sS L |S +
SL) + μ ̄sSL − μsSL = 0 (67)
Using the envelope theorem we can deduce that:
∂V
∂s (s|S) = ∂ L
∂s =
X
L
λL
∂π
∂s =
X
L
λLPSL = E[PSL] (68)
Substituting back into equation 67, the first-order condition for S+ can be written:
−PSL + δEL′ [PS+
SLL′ ] − μ ̄sSL + μsSL = 0 (69)
Here L′ is the realisation of L in the subsequent period and the expectation E[·] is taken over all possible values of L′. This proves the following theorem.
35

Theorem 6. In a power system in which successive realisations of the spot price are independent and identically distributed, and in which the power system state of charge S evolves to S+
SL in the next period, the profit-maximising dispatch of a price-taking, non-rate-limited storage is to charge the storage to the maximum when the realisation of the spot price is below the average price expected in the next period (discounted by time value of money) and to discharge the storage to the minimum when the realisation of the spot price is above the average price expected in the next period (discounted by the time value of money):
s∗
sSL =

 
 
smax, if PSL > δE[P +
SL]
smin, if PSL < δE[P +
SL]
in the range [smin, smax], if PSL = δE[P +
SL]
(70)
As the condition for the profit-maximising operation of a small storage facility (equation 70 corresponds to the condition for the welfare-maximising operation for the storage of the power system as a whole (equation 25, we can conclude that, provided the spot price PSL reflects the true social marginal cost of the power system, private storage entrepreneurs will make the socially-efficient decisions regarding operation of a storage system.
Thereom 6 shows that a profit-maximising, price-taking storage facility which is not rate-limited behaves the same as a combination of a generator and a load with variable cost of production (for the generator, or a value of consumption for the load) equal to the expected price in the next period discounted for the time value of money δE[P +
S ] = δEL′ [PS+
SLL′ ]. However, unlike a conventional gener
ator the capacity of this generator/load depends on the initial state of charge s. Specifically, a storage behaves like a generator with the rate of production (s − smin)/∆ when the spot price is high and behaves like a load with a rate of consumption (smax − s)/∆ when the spot price is low .
Note that the storage facility does not charge or discharge (and make or receive the corresponding payments) every dispatch interval. In the event that the spot price is above δE[P +
S ] the facility discharges to smin and earns revenue
for the injection. In subsequent periods, if the spot price is above δE[P +
S ] there is no further opportunity for discharging and no cashflow. This may happen for several periods in a row.17 Similarly, if the spot price is below δE[P +
S ], the
facility charges to smax, incurring the cost of charging. In subsequent periods, if the spot price remains below δE[P +
S ] there is no further charging and no cashflow.
It is worth noting that the present value of the stream of future cashflows of the storage facility varies both with its own state of charge s and the system
17Indeed there is no upper bound on the number of dispatch intervals in which the storage may neither charge nor discharge, but the probability of this happening for a large number of dispatch intervals in a row is extremely small.
36

wide state of charge S. The higher the value of the state of charge s, the higher the present value of the stream of cashflows (in effect, because the facility can discharge earning positive cashflow before it is required to charge again). From equation 68, because E[P ] > 0, V (s|S) is increasing in s.
C Private incentives for investment in storage
Now let’s consider the profit-maximising investment decision for a storage facility. As before we will assume that the capacity of the storage system must be chosen before the spot price is realised. We will assume that the investment decision is materially longer-lived than the dispatch interval.
Returning to equation 64, we can write this as follows:
V (s|S, KS) = E π(s+
sSL|s, S, L) + δV (s+
sS L |S +
SL, KS )
= E PSL(s − s+
sSL) + δV (s+
sS L |S +
SL, KS) (71)
Differentiating with respect to KS we find that:
∂V ∂KS
(s|S, KS) = −E[μ ̄sSL] + δE ∂V
∂KS
(s+
sS L |S +
SL, KS) (72)
From equation 69 we know that
μ ̄sSL =
(
δE[PS+
SLL+ ] − PSL, if PSL ≤ δE[PS+
SLL+ ] and
0, otherwise (73)
As this doesn’t depend on the state of charge s of the storage asset in question, we can drop the dependence on s equation 72:
∂V ∂KS
(S) = −E[μ ̄SL] + δE ∂V
∂KS
(S+
SL) (74)
Here E[μ ̄SL] is the area between the expected price (discounted by the time value of money) and the price-duration curve when the initial state of the power system is S.
Now let’s make the assumption that when the storage entrepreneur makes the decision to invest he/she does not know the exact state of the power system at the time when the investment comes on line. Instead, the best the entrepreneur can do is to estimate the long-run probability distribution over the range of states of charge. This is the stationary distribution we noted earlier, which we will denote x(S).
As theorem 2 shows, it is privately optimal to add storage capacity as long as the area under the expected price (discounted by the time value of money)
37

and above the price-duration curve – averaged over all states in the stationary distribution – is equal to the cost of adding storage capacity.
Theorem 7. In a power system in which the state of the power system evolves according to a Markov process, investment in capacity is long-lived, and storage investors have no information about the overall state of the power system at the time of making the investment decision, it is privately profitable to augment a price-taking, non-rate-limited storage facility if and only if the area under the expected price (discounted by the time value of money) and above the priceduration curve (for a given -
state of charge for the power system as a whole), averaged over all states in the stationary distribution – is larger than the fixed cost of adding storage capacity.
The area under the (discounted) expected price and above the price-duration curve can be seen on the right hand side of figures 2 and 3.
Proof. Let’s suppose that there is a fixed cost per unit of storage capacity equal to fS $/hour. It follows that when the storage has a state of charge s, and the system-wide state of charge is S, the present value of the stream of future earnings is:
V (s|S, KS) − fS
1 − δ KS (75)
Here the factor 1−δ is necessary to convert the constant fixed cost into a present value.
Equation 74 has the following form:
f (S) = g(S) + δE[f (S+
SL)] (76)
Using the logic in theorem 5 in the Appendix the solution in the stationary distribution is:
ES[f (S)] = ES[g(S)]
1 − δ (77)
Here ES[f (S)] means the expectation of the function f (s) in the stationary distribution.
It follows that the efficient level of investment in storage is where:
ES[ ∂V
∂KS
(S)] + fS
1 − δ = −ES,L[μ ̄SL] + fS
1 − δ = 0 (78)
In other words, the efficient level of capacity is satisfies:
ES,L[μ ̄SL] = fS (79)
38

References
Andr ́es-Cerezo, D. and Fabra, N. (2023), ‘Storing power: Market structure matters’, The RAND Journal of Economics 54(1), 3–53.
Balakin, S. and Roger, G. (2025), ‘Dynamic trading strategies for storage’, Journal of Economic Dynamics and Control 176. Publisher Copyright: © 2025.
Biggar, D. R. and Hesamzadeh, M. R. (2014), The Economics of Electricity Markets, Wiley.
Biggar, D. R. and Hesamzadeh, M. R. (2022), ‘An integrated theory of dispatch and hedging in wholesale electric power markets’, Energy Economics 112, 106055.
Das, T., Krishnan, V. and McCalley, J. D. (2015), ‘Assessing the benefits and economics of bulk energy storage technologies in the power grid’, Applied Energy 139, 104–118.
Figueiredo, F. C., Flynn, P. C. and Cabral, E. A. (2006), ‘The economics of energy storage in 14 deregulated power markets’, Energy Studies Review 14(2), 131.
Graves, F., Jenkin, T. and Murphy, D. (1999), ‘Opportunities for electricity storage in deregulating markets’, The Electricity Journal 12(8), 46–56.
Haas, J., Cebulla, F., Cao, K., Nowak, W., Palma-Behnke, R., Rahmann, C. and Mancarella, P. (2017), ‘Challenges and trends of energy storage expansion planning for flexibility provision in low-carbon power systems–a review’, Renewable and Sustainable Energy Reviews 80, 603–619.
Hu, W., Chen, Z. and Bak-Jensen, B. (2010), Optimal operation strategy of battery energy storage system to real-time electricity price in denmark, in ‘IEEE PES General Meeting’, pp. 1–7.
Karaduman, O. (2020), ‘Economics of grid-scale energy storage’, Job market paper .
Lamp, S. and Samano, M. (2022), ‘Large-scale battery storage, short-term market outcomes, and arbitrage’, Energy Economics 107, 105786.
L ̈ohndorf, N. and Minner, S. (2010), ‘Optimal day-ahead trading and storage of renewable energies—an approximate dynamic programming approach’, Energy Systems 1, 61–77.
McConnell, D., Forcey, T. and Sandiford, M. (2015), ‘Estimating the value of electricity storage in an energy-only wholesale market’, Applied Energy 159, 422–432.
39

Mileti ́c, M., Pandzˇic ́, H. and Yang, D. (2020), ‘Operating and investment models for energy storage systems’, Energies 13(18), 4600.
Mokrian, P., Stephen, M. et al. (2006), A stochastic programming framework for the valuation of electricity storage, in ‘26th USAEE/IAEE North American Conference’, Citeseer, pp. 24–27.
Newbery, D. (2022), Designing an incentive-compatible efficient renewable electricity support scheme, Technical report, University of Cambridge, Faculty of Economics.
URL: https: // doi. org/ 10. 17863/ CAM. 83977
Shahmohammadi, A., Sioshansi, R., Conejo, A. J. and Afsharnia, S. (2018), ‘The role of energy storage in mitigating ramping inefficiencies caused by variable renewable generation’, Energy Conversion and Management 162, 307–320.
Sheibani, M. R., Yousefi, G. R., Latify, M. A. and Hacopian Dolatabadi, S. (2018), ‘Energy storage system expansion planning in power systems: a review’, IET Renewable Power Generation 12(11), 1203–1221.
Siddiqui, A. S., Sioshansi, R. and Conejo, A. J. (2019), ‘Merchant storage investment in a restructured electricity industry’, The energy journal 40(4), 129164.
Sioshansi, R., Denholm, P., Arteaga, J., Awara, S., Bhattacharjee, S., Botterud, A., Cole, W., Cortes, A., De Queiroz, A., DeCarolis, J. et al. (2021), ‘Energy-storage modeling: State-of-the-art and future research directions’, IEEE transactions on power systems 37(2), 860–875.
Sioshansi, R., Denholm, P., Jenkin, T. and Weiss, J. (2009), ‘Estimating the value of electricity storage in pjm: Arbitrage and some welfare effects’, Energy economics 31(2), 269–277.
Sioshansi, R., Madaeni, S. H. and Denholm, P. (2013), ‘A dynamic programming approach to estimate the capacity value of energy storage’, IEEE Transactions on Power Systems 29(1), 395–403.
Stoft, S. (1999), ‘Financial transmission rights meet cournot: How tccs curb market power’, The Energy Journal 20(1), 1–23. URL: http://www.jstor.org/stable/41322816
Tanaka, M., Conejo, A. J. and Siddiqui, A. S. (2024), Economics of Power Systems, Springer, Cham.
Van De Ven, P. M., Hegde, N., Massouli ́e, L. and Salonidis, T. (2013), ‘Optimal control of end-user energy storage’, IEEE Transactions on Smart Grid 4(2), 789–797.
Walawalkar, R., Apt, J. and Mancini, R. (2007), ‘Economics of electric energy storage for energy arbitrage and regulation in new york’, Energy Policy 35(4), 2558–2568.
40

Xi, X., Sioshansi, R. and Marano, V. (2014), ‘A stochastic dynamic programming model for co-optimization of distributed energy storage’, Energy Systems 5, 475–505.
41

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:32.564Z
- **Text Length:** 81503 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 41 of 41
