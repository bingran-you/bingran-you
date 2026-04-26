# PDF Document: Mahseredjian - 2025 - Diffusive Limit of Hawkes Driven Order Book Dynamics With Liquidity Migration.pdf

**File Path:** Mahseredjian - 2025 - Diffusive Limit of Hawkes Driven Order Book Dynamics With Liquidity Migration.pdf

**Processed Date:** 2026-02-10T18:17:47.796Z

**File Size:** 320.70 KB

**Total Pages:** 18

**Extracted Pages:** 18

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3500

**Title:** Diffusive Limit of Hawkes Driven Order Book Dynamics With Liquidity Migration

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Diffusive Limit of Hawkes Driven Order Book
Dynamics With Liquidity Migration
Levon Sarkis Mahseredjian
October 2025
Abstract
This paper develops a theoretical mesoscopic model of the limit order book driven by multivariate Hawkes processes, designed to capture temporal self-excitation and the spatial propagation of order flow across price levels. In contrast to classical zero-intelligence or Poisson based queueing models, the proposed framework introduces mathematically defined migration events between neighbouring price levels, whose intensities are themselves governed by the underlying Hawkes structure. This provides -
a principled stochastic mechanism for modeling interactions between order arrivals, cancellations, and liquidity movement across adjacent queues. Starting from a microscopic specification of Hawkes driven order flow, we derive a diffusion approximation which yields a reflected mesoscopic stochastic differential equation (SDE) system for queue volumes. The limiting generator is obtained through a Taylor expansion of the microscopic generator, demonstrating how temporal excitation together with spat-
ial migration determine the drift and diffusion structure of the limit order book in the mesoscopic regime. The resulting model extends existing diffusion limits by incorporating correlated excitations and price level to price level liquidity movement within a unified Hawkes based formulation. By establishing this diffusive limit, the paper provides a mathematically consistent bridge between high frequency event based models and macroscopic stochastic descriptions of market microstructure. The wor-
k is entirely theoretical and lays a foundation for future analytical and numerical developments without relying on empirical calibration.
Keywords: Limit Order Book, Hawkes Processes, Functional Central Limit Theorem, Market Microstructure, Stochastic Modelling.
1
arXiv:2511.18117v1 [q-fin.MF] 22 Nov 2025

Contents
1 Introduction 3 1.1 Limit Order Book . . . . . . . . . . . . . . . . . . . . . . . . . . 3 1.2 Literature Review . . . . . . . . . . . . . . . . . . . . . . . . . . 4
2 Hawkes Driven Order Flow 5 2.1 Point Processes and Conditional Intensity . . . . . . . . . . . . . 6 2.2 Multivariate Hawkes Process . . . . . . . . . . . . . . . . . . . . 6 2.3 Stationarity and Stability . . . . . . . . . . . . . . . . . . . . . . 7
3 Microscopic Model of The Limit Order Book (Static Setting) 7 3.1 State, indexing and unit vectors . . . . . . . . . . . . . . . . . . . 7 3.2 Microscopic Dynamics . . . . . . . . . . . . . . . . . . . . . . . . 8
4 Mesoscopic Model Of the Limit Order Book 10 4.1 Scaling Limit of the Microscopic Model . . . . . . . . . . . . . . 10 4.2 Scaling assumptions . . . . . . . . . . . . . . . . . . . . . . . . . 10 4.3 Limit dynamics . . . . . . . . . . . . . . . . . . . . . . . . . . . . 10
5 Mesoscopic model 11 5.1 Diffusive rescaling . . . . . . . . . . . . . . . . . . . . . . . . . . 11 5.2 Generator of the rescaled process . . . . . . . . . . . . . . . . . . 12 5.3 Limit generator via Taylor expansion . . . . . . . . . . . . . . . . 13 5.4 Mesoscopic reflected SDE . . . . . . . . . . . . . . . . . . . . . . 14
6 Diffusion Covariance Induced by Hawkes Structure 14 6.1 Multivariate Hawkes specification . . . . . . . . . . . . . . . . . . 14 6.2 Functional central limit theorem for event counts . . . . . . . . . 15 6.3 Covariance of queue volumes . . . . . . . . . . . . . . . . . . . . 15
7 Conclusions 16 7.1 Future Research . . . . . . . . . . . . . . . . . . . . . . . . . . . 16
2

1 Introduction
The limit order book (LOB) is a discrete queuing system that records all outstanding buy and sell orders awaiting execution. Each order specifies both a price and a quantity, and transactions occur when compatible buy and sell orders meet. The limit order book thus provides a detailed and dynamic representation of market liquidity.
In this work, we focus on the first-in, first-out (FIFO) queuing rule, which prioritises orders by their time of submission. Although alternative, more complicated, mechanisms such as Pro-Rata exist, the FIFO structure remains the standard in most modern electronic exchanges. Modelling the LOB is a central problem in computational finance, as it enables the study of market microstructure, price formation, and execution dynamics. A significant class of limit order book models emerges from the perfe-
ct-rationality approach, in which market participants are assumed to behave strategically and optimise their order placement decisions. These models treat order submission, cancellation, and execution as the outcome of agents maximising expected utility under market frictions and informational constraints. This framework, pioneered in the economics literature, provides a microstructure consistent explanation for observed order book shapes and trading behaviours. A comprehensive survey of these mod-
els is provided by Parlour and Seppi [2]. Institutions such as hedge funds and market making firms regularly use such models to design and test algorithmic trading strategies. In contrast, the zero-intelligence approach models the limit order book as a purely stochastic system, where order arrivals, cancellations, and executions are treated as exogenous random events rather than the outcome of strategic optimisation. This framework replaces behavioural assumptions with mathematically tractable pro-
babilistic structures, often using Poisson processes or Markovian queueing dynamics to describe the evolution of liquidity across price levels. We adopt a zero-intelligence modelling framework, where order flow is represented as a sequence of random events rather than as the outcome of perfectly rational agent decisions. This approach is utilised in this paper and allows for analytical tractability while still reproducing key empirical regularities observed in high frequency market data.
1.1 Limit Order Book
A limit order book operates as a double auction mechanism in which buy and sell orders are matched based on price and time via a matching algorithm. The bid side aggregates all buy limit orders, arranged in descending order of price, while the ask side aggregates all sell limit orders, arranged in ascending order of price. The highest bid and the lowest ask define the best bid and best ask prices, respectively, and their difference is known as the bid ask spread which is what market makers and oth-
er market participants seek to profit from. New orders arriving to the book may either: add liquidity (limit orders) by joining the queue at a given price level; remove liquidity (market orders)
3

by executing immediately against standing orders; or cancel existing liquidity(cancellations), thereby modifying the depth at a price level. The stochastic evolution of these order types governs both price movements and liquidity fluctuations. Consequently, realistic LOB models must capture the statistical dependencies between such events. This motivates the use of Hawkes processes, as a more effective point process for modeling the self-exciting and mutually-exciting nature of high frequency ord-
er flow which has been shown empirically is many such papers, for instance in [3]. Another important feature of the limit order book is the tick size. A tick is the minimum allowable price increment in the order book. The bid ask spread is always an integer number of ticks.
1.2 Literature Review
The modeling of limit order book dynamics has undergone a substantial evolution over the past two decades. Early stochastic models such as those developed by Cont and de Larrard [4] established that simple queueing mechanisms with Poisson order flow can reproduce several stylised empirical features of electronic markets, including average depth profiles and the distribution of times to price changes. These models offered analytical tractability and clear structural interpretation, but the assumpti-
on of independent Poisson arrivals limited their capacity to represent the pronounced temporal clustering observed in high frequency markets.
A major advancement came from the introduction of multivariate Hawkes processes. The empirical work of Bacry, Muzy and collaborators [5] demonstrated that order submissions, cancellations and market orders exhibit strong self-excitation and cross-excitation, revealing that modern markets are highly endogenous systems in which activity propagates across event types and between buy and sell sides. This insight motivated a new generation of microscopic order book models in which each event type is go-
verned by a Hawkes intensity. The question of how such microscopic Hawkes driven systems behave under scaling limits has been addressed in several recent studies. The work of Horst and Paul [6] considered a high frequency limit in which queue sizes are rescaled diffusively. They showed that a Hawkes driven birth death mechanism at each price level converges to a reflected diffusion whose drift and volatility depend explicitly on the underlying Hawkes kernels. Their framework provides a rigorous br-
idge between self-exciting microscopic order flow and mesoscopic stochastic differential equations. Hambly and Ledger [7] pursued a complementary perspective by studying the behaviour of the order book when the number of price levels grows and the tick size tends to zero. Their analysis led to reflected stochastic partial differential equations describing the evolution of the order book as a continuum in price space. Together, these works reveal the usefulness of scaling limits in connecting high -
frequency market microstructure with more tractable diffusion style models.
4

Additional insight into Hawkes modulated order flow is provided by the doctoral work of Chen [8], who investigated the interaction between excitation in order flow and short term price predictability. Chen’s analysis highlighted the role of cross-excitation between order types and the relationship between local imbalance and subsequent price movements. This empirical and modelling evidence further strengthens the argument that excitation must be incorporated directly into realistic models of queu-
e dynamics. Earlier theoretical work, such as that of Abergel et al [9], studied the propagation of liquidity and the relationship between order flow events and price formation from a more structural perspective. Although these models were not constructed around Hawkes processes, they emphasised the need for a mechanistic understanding of how order book events at one level influence neighbouring levels and eventually drive observable price changes. The present work builds on and extends these stra-
nds of literature. In contrast to existing mesoscopic Hawkes driven models, which primarily treat each queue level as an isolated birth death process, I incorporate a microscopic mechanism for liquidity migration between neighbouring price levels. This migration is governed by Hawkes modulated intensities and, under diffusive scaling, produces a discrete Laplacian term in the limiting generator. The resulting mesoscopic dynamics therefore combine temporal self-excitation with a diffusion like spat-
ial coupling between queue levels, reflecting the empirically observed spread of liquidity across adjacent depths. Furthermore, by deriving the limiting generator explicitly and connecting the diffusion covariance matrix to the Hawkes branching structure through a functional central limit theorem, my model retains a direct and interpretable link between microscopic excitation and macroscopic variability. Existing models either omit spatial liquidity propagation or introduce it in an ad hoc manner,-
 whereas in my framework it arises naturally from the underlying Hawkes structure. By integrating endogenous Hawkes excitation with liquidity migration and by establishing a rigorous diffusive limit that yields a reflected multi-dimensional SDE with Laplacian coupling, this work advances the literature toward a more complete and empirically faithful description of limit order book dynamics. It offers a mesoscopic model that remains grounded in microscopic market mechanics while providing a tractab-
le analytical structure suitable for theoretical analysis, simulation and empirical calibration.
2 Hawkes Driven Order Flow
In this section, we introduce the Hawkes process, a stochastic framework designed to capture the self-exciting and mutually-exciting dynamics of event arrivals in high frequency financial markets. Through this formulation, Hawkes processes provide a flexible framework to represent key stylised facts of limit order book dynamics. They naturally capture self-excitation, whereby a surge in buy (or sell) orders raises the shortterm probability of additional activity of the same type; cross-excitation,-
 where
5

actions on one side of the book influence behaviour on the opposite side (for instance, a sell side cancellation may encourage more buy side limit orders); and temporal decay, reflecting the gradual fading of such effects over a characteristic timescale. These mechanisms collectively explain a range of empirical phenomena observed in high frequency data, including volatility clustering, order flow imbalance persistence, and long range dependence in event arrivals. Consequently, Hawkes processes s-
erve as a natural and tractable foundation for modeling order flow in both microscopic and mesoscopic representations of the limit order book.
2.1 Point Processes and Conditional Intensity
The definitions in this section follow standard Hawkes process theory, I refer readers to [4] [5] if they seek more detail. A point process on R+ is a sequence of random event times (Tk)k∈N such that 0 < T1 < T2 < . . . . The associated counting process is defined by
N (t) =
X
k≥1
1{Tk≤t}, t ≥ 0, (1)
which counts the number of events up to time t. The conditional intensity function λ(t) characterizes the instantaneous event rate given the past filtration Ft:
λ(t) := ∆li→m0
E[N (t + ∆) − N (t) | Ft]
∆ . (2)
This quantity determines the expected rate of arrivals at time t conditional on all prior events. A univariate Hawkes process is a point process N (t) whose intensity depends linearly on its own history:
λ(t) = μ +
Zt
0
φ(t − s) dN (s), (3)
where μ > 0 is the baseline intensity, and φ : R+ → R+ is the kernel function describing how past events excite future ones. Intuitively, each arrival increases the conditional intensity for a period of time determined by the kernel φ. A common choice is the exponential kernel,
φ(t) = αe−βt, α, β > 0, (4)
which implies that excitation decays exponentially with rate β. The parameters α and β respectively control the magnitude and persistence of self-excitation.
2.2 Multivariate Hawkes Process
To capture interactions between different types of events (e.g., buy/sell, limit/cancel/market orders), the model is extended to a d-dimensional vector of counting processes
6

N (t) = (N1(t), . . . , Nd(t)). Each component has its own intensity:
λi(t) = μi +
d
X
j=1
Zt
0
φij(t − s) dNj(s), i = 1, . . . , d, (5)
where μi is the baseline intensity of process i, and φij encodes how events of type j influence the future rate of type i events. The matrix Φ(t) = [φij(t)]d
i,j=1
is called the kernel matrix, and the process can be compactly written as
λ(t) = μ +
Zt
0
Φ(t − s) dN (s). (6)
2.3 Stationarity and Stability
Define the integrated kernel matrix K = R ∞
0 Φ(s) ds. The multivariate Hawkes process is stable and stationary if the spectral radius ρ(K) < 1. In that case, the expected intensity vector is
Λ = (I − K)−1μ, (7)
where Λi = E[λi(t)] is the long run mean event rate of type i. This condition ensures that excitation remains bounded and that event clusters do not lead to explosive growth in intensity.
3 Microscopic Model of The Limit Order Book
(Static Setting)
We model each side of the limit order book as a vector of integer valued queues indexed by their distance (in ticks) from the mid. Throughout this section, the mid price is held fixed and the bid ask spread is assumed to be two ticks. Let N ∈ N be the maximum depth we track on each side (in ticks from the mid, excluding the best quote queues themselves).
3.1 State, indexing and unit vectors
While our definition of the microscopic structure remains standard our contribution appears in the mesoscopic scaling limit, a Laplacian smoothing term across price levels. We begin by fixing the bid ask spread to be constantly equal to two ticks. This assumption is appropriate for large tick assets, where the best bid and best ask typically remain stably one tick away from the mid price. Mathematically, a fixed spread ensures that the queue indices correspond to fixed tick distances from the mid -
price, so that the microscopic state space has constant dimension. Without this assumption, the best bid and best ask queues would shift position as the spread fluctuates, causing the queue vectors to change dimension over time and violating the regularity and tightness conditions required for the scaling limit theorem. Maintaining a constant spread
7

therefore guarantees that the rescaled birth death dynamics evolve on a stable, fixed coordinate system, which is essential for deriving a diffusion-type limit. We consider two classes of queue vectors, one for the bid side and one for the ask side. For the bid side, define
Zb
n(t) = Zb,1
n (t), . . . , Zb,N−1
n (t) ∈ Z N−1
+.
For the ask side, define
Za
n(t) = Za,1
n (t), . . . , Za,N−1
n (t) ∈ Z N−1
+.
Here Znb,i(t) (resp. Zna,i(t)) denotes the number of outstanding buy (resp. sell) limit orders posted at the price level m − i (resp. m + i), where m is the mid price. We assume that all order and cancellation sizes equal one. At any price level i on the bid side, the quantity Znb,i(t) increases by one upon the arrival of a buy limit order and decreases by one following the arrival of a sell market order or a cancellation of an existing buy limit order. Analogous dynamics hold for Zna,i(t) on the -
ask side.
For i ∈ {1, . . . , N − 1}, we let ei ∈ RN−1 denote the i-th standard basis vector.
3.2 Microscopic Dynamics
We now describe the microscopic dynamics governing the bid-side queue process Znb = (Znb,1, . . . , Zb,N−1
n ). At the discrete level, the volume at each price level evolves through a collection of elementary jumps corresponding to order arrivals, cancellations, and reallocations of volume between neighbouring price levels. Each of these elementary mechanisms is represented by an independent Poisson process whose intensity may depend on the current state of the order book. We denote by ei the i-th canonical basis vector of RN−1, and we adopt the convention e0 = eN = 0.
Bid-side dynamics. For the bid side, the microscopic transitions are as follows:
1. Limit order arrivals. For every level i ∈ {1, . . . , N − 1}, the queue increases by one unit,
Zb
n −→ Zb
n + ei,
at the arrival rate according according to the Hawkes process N 1
b,n,i(t) with intensity
λ1
b,n,i(t) = μ1
b,n,i Zb,i
n (t−) +
Zt
0
α11
b,n,i e−β 11
b,n,i(t−s) dN 1
b,n,i(s) +
Zt
0
α12
b,n,i e−β 12
b,n,i(t−s) dN 2
b,n,i(s)
+
Zt
0
α14
b,n,i e−β 14
b,n,i(t−s) dN 4
b,n,i(s). (8)
8

2. Cancellations and market order removals. For every level i ∈ {1, . . . , N − 1}, one unit is removed from the queue,
Zb
n −→ Zb
n − ei,
at the arrival rate according to the Hawkes process N 2
b,n,i(t) with intensity
λ2
b,n,i(t) = μ2
b,n,i Zb,i
n (t−) +
Zt
0
α21
b,n,i e−β 21
b,n,i(t−s) dN 1
b,n,i(s) +
Zt
0
α22
b,n,i e−β 22
b,n,i(t−s) dN 2
b,n,i(s)
!
1{Z b,i
n (t−)>0}.
(9)
3. Volume reallocation: migration from level i to level i − 1. Each unit of volume sitting at level i independently attempts to jump one tick closer to the midprice. Consequently, the queue updates according to
Zb
n −→ Zb
n + ei−1 − ei,
the total migration rate is Hawkes modulated and proportional to the current
queue size:
λi→i−1
b,n (t) = ab,i
n (t) Zb,i
n (t−),
where the symmetric Hawkes per unit migration intensity is given by
ab,i
n (t) = ηb,i
n+
X
l∈{1,2,4}
Zt
0
κb,i
l e−ρb,i
l (t−s) dN l
b,n,i(s).
Here ηbn,i ≥ 0 is the baseline per unit migration rate and (κb,i
l , ρb,i
l ) are the
Hawkes excitation parameters. Because migration is symmetric, the same abn,i(t) governs both inward and outward jumps.
4. Volume reallocation: migration from level i to level i + 1. Similarly, each unit of volume may jump one tick further from the midprice. The corresponding transition is
Zb
n −→ Zb
n + ei+1 − ei,
occurring at total rate
λi→i+1
b,n (t) = ab,i
n (t) Zb,i
n (t−),
with the same symmetric Hawkes intensity abn,i(t) as above. Symmetry means that the per-unit migration rate towards and away from the midprice is identical:
ab,i,+
n (t) = ab,i,−
n (t) = ab,i
n (t).
Thus, migration contributes a discrete Laplacian smoothing effect at the mesoscopic scale while allowing the strength of reallocation to be history dependent through Hawkes excitation These transition rules fully characterise the microscopic bid queue dynamics. The ask side of the book is defined analogously.
9

4 Mesoscopic Model Of the Limit Order Book
4.1 Scaling Limit of the Microscopic Model
We now derive the mesoscopic limit of the microscopic Hawkes driven order book. Following the scaling arguments of Hambley et al [1], we accelerate time
by a factor of n and renormalise queue sizes by √n. For the bid side, define the rescaled processes
Ze b
n (t) := Znb(nt)
√n and Ze a
n (t) := Zna(nt)
√n .
The limiting processes will form the mesoscopic (continuous volume, discreteprice) limit order book.
4.2 Scaling assumptions
We impose the following standard conditions, adapted to the Hawkes setting:
(i) Hawkes stability. The spectral radius of the Hawkes kernel matrix is strictly less than 1, uniformly in n, ensuring non-explosion and existence of stationary intensities.
(ii) Regularity of baselines. The baseline functions for arrivals and cancellations satisfy global Lipschitz and linear growth bounds in the queue state.
(iii) Moment bounds. The initial states satisfy supn E∥Xnk(0)∥2 < ∞ for k ∈ {b, a}.
(iv) Predictability and conditional independence. All microscopic intensities depend on the predictable left-limit Znk(t−), and conditioned on the filtration Ft−—the drivers (arrival, cancellation/market, and migration processes) are independent.
(v) Boundary behaviour. Migration at the boundary levels is blocked consistently with the pinning conditions, and Skorokhod reflection is used to preserve non-negativity.
These conditions parallel those in Hambly et al [1].
4.3 Limit dynamics
Let
Ak,i
t := nli→m∞ ak,i
n (t)
denote the limiting Hawkes migration intensities. Let hk,m(i, x) denote the drift contribution arising from Hawkes driven arrivals and cancellations/market orders, and let σk be the diffusion coefficient obtained from the limiting predictable quadratic variations. The next result gives the mesoscopic reflected diffusion approximation.
10

Theorem 4.1 (Mesoscopic Reflected SDE Limit). Under the assumptions above, the sequence (Xnb , Xna) is tight in D([0, ∞); RN−1)2, and any weak limit (Xb, Xa) is the unique strong Markov process satisfying, for i = 1, . . . , N − 1,
dX b,i
t=
h
Ab,i
t X b,i+1
t + X b,i−1
t − 2Xb,i
t + hb,m i, Xb,i
t
i
dt +
N −1
X
j=1
σb
ij Xt, At dW b,j
t + dηb,i
t,
(10) and
dX a,i
t=
h
Aa,i
t X a,i+1
t + X a,i−1
t − 2Xa,i
t + ha,m i, Xa,i
t
i
dt +
N −1
X
j=1
σa
ij Xt, At dW a,j
t + dηa,i
t,
(11) where W b and W a are Brownian motions with covariance determined by the limiting intensities, and ηk,i
t are reflection terms enforcing Xk,i
t ≥ 0 and Xk,0
t=
X k,N
t = 0.
Theorem 4.1 shows that symmetric Hawkes migration contributes a discrete Laplacian smoothing term whose strength is history dependent through the Hawkes excitation dynamics. The remaining drift and diffusion coefficients arise from the Hawke arrival, cancellation, and market order flows. Full proofs are provided in section 5.
5 Mesoscopic model
These events are driven by an underlying multivariate Hawkes process Nn(t)
whose components correspond to the different event types. Denote by λup
n,i(t),
λdown
n,i (t), λmig,+
n,i (t) and λmig,−
n,i (t) the corresponding conditional intensities. We assume that, under an appropriate equilibrium scaling regime, they admit the expansions
λup
n,i(t) = n
2 σ2
i Z ̃b
n,i(t) + √n fi Z ̃b
n,i(t) + o(√n), (12)
λdown
n,i (t) = n
2 σ2
i Z ̃b
n,i(t) + √n gi Z ̃b
n,i(t) + o(√n), (13)
λmig,±
n,i (t) = √n αb Z ̃b
n,i(t) + o(√n), (14)
where the effective coefficients σ2
i , fi, gi and αb are determined by the Hawkes kernels (see Section 6).
5.1 Diffusive rescaling
We define the rescaled process as in the previous section
Z ̃b
n(t) := Znb (nt)
√n , t ≥ 0.
11

The state space of Z ̃nb is the lattice √1n NN−1 ⊂ RN−1
+ , and each jump of the
microscopic process corresponds to a displacement of size 1/√n in one or two coordinates of Z ̃nb .
5.2 Generator of the rescaled process
For a bounded function F : √1n NN−1 → R, the infinitesimal generator An of
the rescaled process Z ̃nb is given by
AnF (y) =
X
∆
rate(y → y + ∆) F (y + ∆) − F (y) (15)
where the sum runs over all admissible jump vectors ∆ ∈ √1n {0, ±ei, ±ei ±
ej }.
To write An in a form amenable to Taylor expansion, we introduce the finite difference operators
∆r
n,kF (y) := √n F (y + ek/√n) − F (y) ,
∆l
n,kF (y) := √n F (y) − F (y − ek/√n) ,
∆2
n,kF (y) := n F (y + ek/√n) + F (y − ek/√n) − 2F (y) .
Using the microscopic dynamics and the intensity expansions (10), one checks that AnF (y) can be written as
AnF (y) =
N −1
X
k=1
1
2 ∆2
n,kF (y) σ2
k(yk) 1{yk≥1/√n}
+
N −1
X
k=1
∆r
n,kF (y) σ2
k (yk )
√n 1{yk=0}
+
N −1
X
k=1
h
∆r
n,kF (y) fk(yk) − ∆l
n,kF (y) gk(yk) 1{yk≥1/√n}
i
+
N −1
X
k=1
αb yk ∆r
n,k−1F (y − ek/√n) + ∆r
n,k+1F (y − ek/√n) − 2∆l
n,kF (y) .
(16)
with the conventions y0 = yN = 0 and ∆rn,0F = ∆r
n,N F ≡ 0.
Remark 5.2.1 The representation of the microscopic generator in (11) and the rescaling procedure follow the classical diffusion approximation framework for density dependent Markov jump processes developed by Ethier and Kurtz; see [10].
12

5.3 Limit generator via Taylor expansion
Let F ∈ C2
b (RN−1
+ ) be a twice continuously differentiable function with bounded derivatives, satisfying the Neumann boundary condition ∂xk F (x) xk=0 = 0 for all k. For such F , Taylor’s theorem yields, uniformly on compact sets,
F x ± √ekn = F (x) ± √1n ∂xk F (x) + 1
2n ∂2
xkxk F (x) + O n−3/2 ,
∆r
n,kF (x) = ∂xk F (x) + O n−1/2 ,
∆l
n,kF (x) = ∂xk F (x) + O n−1/2 ,
∆2
n,kF (x) = ∂2
xkxk F (x) + O n−1/2 .
A similar expansion applied to the migration combination
∆r
n,k−1F (x − ek/√n) + ∆r
n,k+1F (x − ek/√n) − 2∆l
n,kF (x)
shows that
∆r
n,k−1F (x−ek/√n)+∆r
n,k+1F (x−ek/√n)−2∆l
n,kF (x) = xk+1+xk−1−2xk ∂xk F (x)+O n−1/2 .
Remark 5.2.2 These Taylor expansions are standard in the analysis of weak convergence for scaled Markov jump processes [10, Ch. 7]. Very similar generator expansions appear in the limit order book scaling limits of Hambly and Ledger [7] and Horst and Paul [6], to which our setting is closely related. Substituting these expansions into (10), we obtain
AnF (x) = AF (x) + Rn(F, x),
where the candidate limit generator A is given by
AF (x) =
N −1
X
k=1
1
2 σ2
k(xk) ∂2F
∂x2
k
(x) + hk(xk) + αb xk+1 + xk−1 − 2xk
∂F ∂xk
(x) ,
(17) with hk := fk − gk, and the remainder satisfies
sup
x∈K
Rn(F, x) −→ 0 for every compact K ⊂ RN−1
+.
The operator A is understood on the domain
D(A) := F ∈ C2
b (RN−1
+ ) : ∂xk F (x) xk=0 = 0 for all k ,
which encodes reflection at the boundary xk = 0.
Remark 5.2.3 The interpretation of A as the generator of a diffusion process with normal reflection on the boundary {xk = 0} is based on the classical framework of Lions and Sznitman for reflected stochastic differential equations; see [11].
13

5.4 Mesoscopic reflected SDE
The generator A in (11) is the generator of a reflected diffusion Xb = (Xb,1, . . . , Xb,N−1) solving the SDE system
dX b,i
t=
h
hi Xb,i
t + αb Xb,i+1
t + X b,i−1
t − 2Xb,i
t
i
dt
+ σi Xb,i
t dW b,i
t + dηb,i
t , i = 1, . . . , N − 1,
X b,0
t = Xb,N
t = 0,
(18)
where W b = (W b,1, . . . , W b,N−1) is a Brownian motion in RN−1 with covariance structure specified in Section 6, and ηb,i are non-decreasing processes ensuring reflection at zero:
X b,i
t ≥ 0,
Z∞
0
X b,i
t dηb,i
t = 0.
Standard results on martingale problems for reflected diffusions (see, [11] ) imply that the martingale problem for (A, D(A)) is well posed. Together with the generator convergence An → A on D(A) and the general convergence theory for Markov processes in [10], this yields the following mesoscopic limit:
Theorem 5.1. As n → ∞, the rescaled queue process Z ̃nb converges in distri
bution in D([0, ∞); RN−1
+ ) to the reflected diffusion Xb solving (12).
6 Diffusion Covariance Induced by Hawkes Struc
ture
We now make explicit how the covariance structure of the Brownian motion W b in (12) is determined by the underlying Hawkes kernels.
6.1 Multivariate Hawkes specification
We index all microscopic event types on the bid side by a = 1, . . . , M and collect them in the M -dimensional Hawkes process
N (t) = N 1(t), . . . , N M (t) ⊤.
Its intensity process λ(t) = (λ1(t), . . . , λM (t))⊤ satisfies
λ(t) = μ +
Zt
0
Φ(t − s) dN (s),
where μ ∈ R+M is the vector of baseline intensities and Φ(t) = φij(t) 1≤i,j≤M is the non-negative kernel matrix. Define the integrated kernel
K :=
Z∞
0
Φ(u) du =
Z∞
0
φij(u) du
1≤i,j≤M
,
14

and assume the stability condition ρ(K) < 1, where ρ(K) denotes the spectral radius of K. Under stationarity, the mean intensity vector Λ ̄ := E[λ(t)] is then given by  ̄Λ = (I − K)−1μ.
6.2 Functional central limit theorem for event counts
The multivariate Hawkes FCLT( see [12]) implies that under the diffusive scaling,
√1n N (nt) − nt Λ ̄ ⇒ N 0, t ΣN ,
where the asymptotic covariance matrix ΣN is given by
ΣN = (I − K)−1 diag(Λ ̄ ) (I − K)−⊤. (19)
Equivalently, one may write
√1n N (nt) − nt  ̄Λ ⇒ (I − K)−1 diag(  ̄Λ)1/2 Wt,
for a standard M -dimensional Brownian motion W , in which case ΣN = (I −
K)−1diag(Λ ̄)(I − K)−⊤ is precisely the covariance of the Gaussian limit.
6.3 Covariance of queue volumes
The (rescaled) bid side queue volumes Z ̃nb are linear functionals of the event
counts N . There exists an incidence matrix C ∈ R(N−1)×M such that
Z ̃b
n(t) = Znb (nt)
√n = C N (nt)
√n .
Each column of C encodes the effect of a single event type on the queue profile (for instance, a unit up-jump at level i contributes +1 to row i, a down jump contributes −1, and a migration i → i + 1 contributes −1 to row i and +1 to row i + 1). It follows from the FCLT and linearity that
Znb (nt) − nt CΛ ̄
√n ⇒ N 0, t ΣX ,
where the asymptotic covariance matrix of the queue volumes is
ΣX = C ΣN C⊤ = C (I − K)−1 diag(Λ ̄ ) (I − K)−⊤C⊤. (20)
Thus, in the mesoscopic SDE, one can choose the diffusion matrix Γ(x) such that Γ(x)Γ(x)⊤ = ΣX (for instance, via a Cholesky factorisation), and the Brownian motion W b is related to the underlying Hawkes fluctuations through (20). This makes explicit how both the endogenous order flow and the self-exciting liquidity migration mechanisms shape the covariance structure of the mesoscopic queue dynamics.
15

7 Conclusions
In this work we have developed a mesoscopic description of the bid-side queue dynamics in a limit order book driven by a multivariate Hawkes process. Starting from a fully microscopic specification in which individual order arrivals, cancellations and migrations are encoded as components of a Hawkes counting process, we introduced a diffusive rescaling under which time is accelerated by
a factor n and queue sizes are of order √n. In this regime, and under suitable equilibrium intensity expansions, we derived the infinitesimal generator of the rescaled queue process and showed that it converges to the generator of a reflected diffusion on RN−1
+.
More concretely, we obtained a mesoscopic SDE system, in which each queue level evolves as a one-dimensional diffusion with state dependent drift and volatility, coupled across levels through a discrete Laplacian term that encodes liquidity migration. Reflection at zero is implemented via a Skorokhod type term ensuring non-negativity of the queues and a Neumann boundary condition in the associated generator. This provides a rigorous link between the underlying self-exciting order flow and an effec-
tive interacting diffusion description of the queue dynamics.
In the second part of the analysis we made explicit how the diffusion coefficients in the mesoscopic model are determined by the Hawkes structure. Using a functional central limit theorem for multivariate Hawkes processes, we expressed the asymptotic covariance matrix of the event counts in terms of the integrated kernel and the stationary intensities. Through a linear incidence mapping between event types and queue increments, this yields a closed form expression for the covariance matrix of the -
mesoscopic queue fluctuations and, consequently, for the diffusion matrix. In this way, the model retains a clear microscopic interpretation while admitting a tractable diffusion limit
7.1 Future Research
A key next step is to calibrate the microscopic Hawkes parameters and the resulting mesoscopic coefficients to high frequency limit order book data. This would involve estimating the kernel matrix and baseline intensities from event time series, constructing the corresponding branching matrix, and comparing empirical queue fluctuations with those predicted by the diffusion limit. One could then assess, for example, how well the Laplacian coupling captures observed liquidity migration and how the t-
heoretical covariance structure compares to empirical covariances across levels and maturities. From a computational perspective, it would be important to develop efficient numerical schemes for simulating the reflected mesoscopic SDE, taking into account both the non-negativity constraint and the coupling across levels. This includes the design and analysis of discretisation methods that preserve reflection and stability, as well as variance reduction techniques that exploit the Hawkes induced co-
variance structure. Such schemes would be useful both
16

for model validation and for applications in optimal execution, liquidity risk management and stress testing.
Another direction is to consider a further scaling in which the spacing between price levels tends to zero, leading to a continuum of levels limit. In this regime one expects the discrete Laplacian coupling to converge to a second order spatial derivative, and the mesoscopic SDE system to approach a stochastic partial differential equation (SPDE) for the queue density as a function of price and time. This would provide a bridge between microscopic Hawkes based models and macroscopic SPDE descripti-
ons of limit order books, and could be used to analyse large scale properties such as liquidity profiles and volatility clustering. Finally, the Hawkes specification itself can be enriched in several ways, for instance by allowing cross-excitation between different levels and event types, including state dependence in the kernel or baseline terms, or incorporating regimes and non linear saturation effects. Each of these extensions would induce a modified diffusion covariance structure and could le-
ad to qualitatively different mesoscopic behaviour. Understanding the impact of such modeling choices on the resulting diffusion limit and on observables such as queue correlation, imbalance dynamics and price impact remains an interesting topic for future work. Overall, the mesoscopic reflected diffusion derived here offers a natural starting point for further theoretical analysis and calibration to market data.
References
[1] B. Hambly, J. Kalsi, and J. Newbury, “Limit order books, diffusion approximations and reflected SPDEs: from microscopic to macroscopic models,” arXiv:2018.
[2] C. E. Parlour and D. J. Seppi, “Limit order markets: A survey,” in Handbook of Financial Intermediation and Banking, A. W. Thakor and A. Boot, Eds., Amsterdam, Netherlands: Elsevier, 2008, pp. 63–95.
[3] P. Hewlett, “Clustering of order arrivals, price impact and trade path optimisation,” Workshop on Financial Modeling with Jump Processes, Ecole Polytechnique, 2006, pp. 6–8.
[4] R. Cont and A. de Larrard, “Price dynamics in a Markovian limit order market,” arXiv:1104.4596, 2011.
[5] E. Bacry, S. Gaiffas, and J. F. Muzy, “Queue-reactive Hawkes processes for limit order books,” arXiv:1502.04592, 2015.
17

[6] U. Horst and J. Paul, “A diffusion limit for a Hawkes-type limit order book model,” arXiv:1901.06740, 2019.
[7] B. Hambly and S. Ledger, “A continuum limit for order book models,” SIAM Journal on Financial Mathematics, vol. 9, no. 3, pp. 865–911, 2018.
[8] X. Chen, “Modelling order flow dynamics using Hawkes processes,” Ph.D. dissertation, Florida State University, 2017.
[9] F. Abergel and A. Jedidi, “A mathematical approach to order book modeling,” arXiv:1104.4596, 2011.
[10] S. N. Ethier and T. G. Kurtz, Markov Processes: Characterization and Convergence, Wiley, New York, 1986.
[11] J.-L. Lions and A.-S. Sznitman, “Stochastic differential equations with reflecting boundary conditions,” Communications on Pure and Applied Mathematics, vol. 37, no. 4, pp. 511–537, 1984.
[12] E. Bacry, S. Gaı ̈ffas, and J.-F. Muzy, “A generalized method for multivariate Hawkes processes,” arXiv preprint arXiv:1502.04592, 2015.
18

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:47.796Z
- **Text Length:** 37407 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 18 of 18
