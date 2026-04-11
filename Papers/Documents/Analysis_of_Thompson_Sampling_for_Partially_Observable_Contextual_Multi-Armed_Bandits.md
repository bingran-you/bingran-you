# PDF Document: Park and Faradonbeh - 2021 - Analysis of Thompson Sampling for Partially Observable Contextual Multi-Armed Bandits.pdf

**File Path:** Park and Faradonbeh - 2021 - Analysis of Thompson Sampling for Partially Observable Contextual Multi-Armed Bandits.pdf

**Processed Date:** 2026-02-10T18:15:04.995Z

**File Size:** 712.83 KB

**Total Pages:** 22

**Extracted Pages:** 22

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2773

**Title:** Analysis of Thompson Sampling for Partially Observable Contextual Multi-Armed Bandits

**Collection:** Large Files

---

## Extracted Text Content

arXiv:2110.12175v2 [stat.ML] 29 Nov 2021
Analysis of Thompson Sampling for Partially Observable
Contextual Multi-Armed Bandits
Hongju Park and Mohamad Kazem Shirani Faradonbeh
Abstract
Contextual multi-armed bandits are classical models in reinforcement learning for sequential decision-making
associated with individual information. A widely-used policy for bandits is Thompson Sampling, where samples
from a data-driven probabilistic belief about unknown parameters are used to select the control actions. For this
computationally fast algorithm, performance analyses are available under full context-observations. However, little is
known for problems that contexts are not fully observed. We propose a Thompson Sampling algorithm for partially
observable contextual multi-armed bandits, and establish theoretical performance guarantees. Technically, we show
that the regret of the presented policy scales logarithmically with time and the number of arms, and linearly with the
dimension. Further, we establish rates of learning unknown parameters, and provide illustrative numerical analyses.
1 Introduction
Contextual Multi-Armed Bandits (CMAB) are canonical models in both theory and applications of Reinforcement
Learning (RL). In this setting, there is a set of arms whose rewards depend on their multidimensional context vectors
as well as the underlying parameter that reflects the weights of each context component. Thanks to their ability in
modeling individual characteristics, CMAB models are widely used in different areas of automation and decision
making. For example, in personalized recommendation of news articles, CMAB models can raise the click rate by
12.5%, compared to context-free bandit algorithms [1]. In dynamic treatment of mice with skin tumours, adopting
biological factors as contexts, leads to a 50% increase in life duration [2]. CMAB can also provide a useful framework
for sequential decision-making in precision health by incorporating contexts such as location, calendar busyness, and
heart-rate [3].

The existing literature on bandit models for decision-making under uncertainty goes back at least to the seminal
work of Lai and Robbins [4] that introduces Upper Confidence Bound (UCB) algorithm. Broadly speaking, UCB
prescribes acting based on optimism-based approximations of the unknown parameters, and is efficient in both discrete
and continuous spaces [5], [6]. Ensuing work establish logarithmic regret bounds of UCB that hold uniformly over
time [7]. The sequence of papers focusing on CMAB models and theoretical performance guarantees of associated
reinforcement learning policies continues with showing that UCB algorithm appropriately addresses the exploitation
exploration trade-off [8], followed by a finer analysis that improves dependence on dimensions [5], and regret bounds
for linear payoffs [9].
Another ubiquitous reinforcement learning policy that is usually faster than UCB, yet performs equally efficient,
is Thompson Sampling [10], [11]. The main idea of Thompson Sampling is to select actions based on samples
drawn from a posterior distribution over unknown parameters [12]. The posterior is updated by the observed rewards,
and balances exploring for better options and more accurate learning, versus exploiting the available information to
maximize earning. Theoretical analyses start by a regret bound for multi-armed bandits [13], and continues to CMAB
counterparts [14]. Moreover, Thompson Sampling has favorable performances in continuous spaces [15] and large
scale problems [16]. Other variants and more discussions can be found in a recent tutorial by Russo et al. [17].
Further adaptive policies for CMAB models include greedy-type algorithms that are efficient if the context distri
bution satisfies some diversity conditions [18], [19]. Moreover, the existing literature consists of studies on non-linear
reward functions (of the contexts) under technical assumptions such as Lipschitz continuity. That includes, near
optimal regret bounds obtained by using partitioning techniques on the context and action space [20], and utilizing
non-parametric regression techniques for unknown non-linear reward functions [21]. Finally, multi-agent settings and
those with latent structure of users’ reward functions are studied, as well as approaches aiming to provide personalized
recommendations for new users [22], [23], [24].
In many applications, context vectors are observed in a partial, transformed, or noisy manner. For example, it
includes situations that inquiring the entire feature vector is too expensive, context variables correspond to phys
ically distant stations, data is provided by a network of sensors, or privacy considerations restrict perfect context
observations [25]. For restricted contexts, reinforcement learning algorithms together with combinatorial search algo
rithms demonstrate competitive empirical performance [26]. In presence of known side-information about unobserved
parts of the contexts, ridge regression methods together with projections and UCB algorithms lead to improved effi
ciency [27]. Another ubiquitous setting for studying control policies under partial observations is state space model
[28, 29, 30]. In this setting, unobserved states are estimated based on output observations using methods such as
Kalman filter [31, 32, 33], and captures important applications such as robot navigation [34, 35].
When the number of control actions is finite, CMAB models are widely used for data-driven control. How
ever, unlike the aforementioned frameworks with partial observations, proper designs and comprehensive analyses of
2

decision-making algorithms in contextual bandits with imperfect observations are not currently available. Accord
ingly, we study (a slightly modified) Thompson Sampling reinforcement learning algorithm for CMAB models with
partially observable contexts. Note that because contexts are the main factors in determining the optimal arm, ad
ditional learning procedures are needed to estimate unobserved contexts, and so modifications in the algorithm are
inevitable.
Under minimal assumptions, we establish theoretical performance guarantees showing that the regret (i.e., the
cumulative decrease in rewards due to uncertainty) scales as the logarithm of time, the logarithm of the number of
arms, and the dimension. We present an effective method for estimating unobserved contexts based on transformed
noisy outputs, and use them to form the posterior belief about the unknown parameter, which determines the optimal
candidate arm at every time step. Furthermore, we specify the rates at which Thompson Sampling learns the unknown
parameter. To obtain the results, certain technical tools from the theory of martingales are leveraged, and novel
methods are developed for precisely specifying the behavior of the posterior distribution and its effect on the efficiency
of the algorithm.
The remainder of this paper is organized as follows. In Section 2, we formulate the problem and discuss pre
liminary results. In Section 3, we present the reinforcement learning algorithm that utilizes Thompson Sampling
for partially observable CMAB models. Theoretical analysis of the algorithm is provided in Section 4, followed by
numerical illustrations in Section 5. Finally, concluding remarks and future directions are discussed in Section 6.
The following notation will be used throughout this paper. For a matrix A ∈ Cp×q, A⊤ denotes its transpose, and
the trace of A is denoted by tr(A). For a vector v ∈ Cd, we use the Euclidean norm ||v|| = (∑d
i=1 |vi|2)1/2, and
for matrices, we use the operator norm; ||A|| = sup||v||=1 ||Av||. Further, −→u = u/||u|| is the unit vector indicating
the direction of u, and C(A) denotes the column space of the matrix A. Finally, the sigma-field generated by random
vectors {X1, ..., Xn} is denoted by σ(X1, . . . , Xn).
2 Problem statement
We consider the following partially observed contextual multi-armed bandit (POCMAB) problem. Suppose that a slot
machine with N arms is given, and each arm i ∈ {1, · · · , N } has the unobserved d-dimensional context xi(t), which
is generated independently from N (0d, Σx), where Σx is the covariance matrix of xi(t). These contexts determine the
rewards: At each time step t = 1, 2, . . . , the arm a(t) is selected, which generates the reward ra(t)(t) = xa(t)(t)⊤μ∗ +
εra(t) (t), where xa(t)(t) is the context of the selected arm, μ∗ is the unknown true parameter, and εra(t) (t) is the
reward observation noise with the distribution N (0, σ2). The observations at time t consist of the output vectors
{yi(t)}1≤i≤N , generated according to yi(t) = Axi(t) + εyi(t), where εyi(t) is the output observation noise that
has the distribution N (0d, Σy) and Σy is the covariance matrix of yi(t) given xi(t). Further, the matrix A ∈ Rd×d
3

captures the relationship between the output and the context. For the ease of presentation, we assume that A is a known
non-singular square matrix.
The goal is to design a reinforcement learning policy to select an arm at every time step, such that the expected
reward is maximized, based on the information available at the time. That is, at time t, the goal is to find the optimal
arm a∗(t) = argmax1≤i≤N E[ri(t)|yi(t)]. The data available at time t, based on which we want to select a∗(t),
consists of the outputs yt = {yi(τ )}1≤i≤N, 1≤τ≤t, the rewards of the arms selected so far rt−1 = {ra(τ)(τ )}1≤τ≤t−1,
and the previously selected arms at−1 = {a(τ )}1≤τ≤t−1. Note that since the context vectors xi(t) are not observed,
the optimal arm a∗(t) must be chosen according to a context estimate ̂xi(t), based on the observations {yi(t) : i =
1, . . . , N }. It is easy to see that it suffices to select
a∗(t) = arg max
1≤i≤N
̂xi(t)⊤μ∗, (1)
where ̂xi(t) is the conditional expectation of xi(t) given yi(t) (the output observation of the ith arm at time t).
Due to uncertainty about the true parameter μ∗, a reinforcement learning algorithm incurs a performance degra
dation compared to the optimal policy that knows the true parameter μ∗, and selects the optimal arms {a∗(t)}t≥1,
at every time step. Accordingly, the performance of reinforcement learning algorithms is commonly assessed by the
cumulative decrease in rewards, which is called regret, and is defined as
Regret(T ) = E
[ T ∑
t=1
ra∗(t)(t) − ra(t)(t)
]
. (2)
Above a(t) is the arm selected by the reinforcement learning policy under study. In the sequel, we present the Thomp
son Sampling algorithm for POCMAB models (Algorithm 1), and establish a regret bound for that based on d, N, T .
3 Reinforcement Learning Algorithm
Now, we explain a reinforcement learning algorithm that leverages Thompson Sampling to learn to maximize the
reward in the POCMAB problem above, based on the output data at the time. At a high level, the main idea of the
algorithm is that we maximize the expected value of the reward ri(t) given the output yi(t), because the contexts
{xi(t)}1≤i≤N are not observed. To do so, using conditional expectation with respect to the observations, the regret in
(2) can be written as
Regret(T ) = E
[ T ∑
t=1
E [ ra∗(t)(t) − ra(t)(t)∣∣ {yi(t)}1≤i≤N
]]
. (3)
4

Note that depending on the problem understudy, technically different definitions of regret are considered in the litera
ture [36]. The objective of the proposed reinforcement learning algorithm is to choose the arm a(t) that minimizes the
conditional expected reward gap given the observations {yi(t)}1≤i≤N,;
E
[ T ∑
t=1
ra∗(t)(t) − ra(t)(t)
∣∣∣∣∣ {yi(t)}1≤i≤N
]
, (4)
at each time t, and thereby aims to minimize the regret in (2).
Technically, to find a(t) minimizing the conditional expected reward gap in (4), we use the conditional distribution
of the reward ri(t) given yi(t), which is derived in Appendix. The conditional distribution of ri(t) given yi(t) is
N ((Dyi(t))⊤μ∗, μ∗⊤(A⊤Σy−1A + Σx−1)−1μ∗ + σ2) , (5)
where D = (A⊤Σy−1A + Σx−1)−1A⊤Σy−1 is a matrix reflecting the average effect of yi(t) on ri(t). Next, let
̂xi(t) = (A⊤Σy−1A + Σx−1)−1A⊤Σy−1yi(t) = Dyi(t). (6)
In fact, ̂xi(t) is the conditional expectation E[xi(t)|yi(t)]. Putting (5) and (6) together, the conditional expected reward
gap in (4) can be written as
E [ ra∗(t)(t) − ra(t)(t)∣∣ {yi(t)}1≤i≤N
] = E [ E [ra∗(t)(t) − ra(t)(t)|xi(t)]∣∣ {yi(t)}1≤i≤N
]
= E [ (xa∗(t)(t) − xa(t)(t))⊤μ∗
∣∣ {yi(t)}1≤i≤N
]
= (̂xa∗(t)(t) − ̂xa(t)(t))⊤μ∗. (7)
Thus, a policy is designed to choose the arm maximizing ̂xi(t)⊤μ∗. To ensure that the algorithm performs enough
exploration, we use the sample μ ̃(t) from the posterior distribution
N (̂μ(t), B(t)−1), (8)
where the posterior mean ̂μ(t) and the inverse of the covariance matrix B(t) are as follows:
B(t) = Σ−1 +
t− ∑1
τ =1
̂xa(τ )(τ )̂xa(τ )(τ )⊤, (9)
̂μ(t) = B(t)−1
t− ∑1
τ =1
̂xa(τ )(τ )ra(τ )(τ ). (10)
5

Based on the estimates of the contexts and the sample μ ̃(t), we select a(t) such that
a(t) = arg max
1≤i≤N
̂xi(t)⊤μ ̃(t). (11)
Then, we observe the reward ra(t)(t) of the arm a(t), and update the posterior according to
B(t + 1) = B(t) + ̂xa(t)(t)̂xa(t)(t)⊤, (12)
̂μ(t + 1) = B(t + 1)−1(B(t)̂μ(t) + ̂xa(t)(t)ra(t)(t)). (13)
The initial values are ̂μ(1) = 0d and B(1) = Σ−1, where Σ is an arbitrary symmetric positive definite matrix.
Algorithm 1 : Thomson Sampling RL policy for POCMAB
1: Set B(1) = Σ−1, ̂μ(1) = 0d 2: for t = 1, 2, . . . , do 3: for i = 1, . . . , N do
4: Estimate context by ̂xi(t) in (6) 5: end for
6: Sample μ ̃(t) from N (̂μ(t), B(t)−1) 7: Select arm a(t) = arg max
1≤i≤N
̂xi(t)⊤μ ̃(t)
8: Gain reward ra(t)(t) = xa(t)(t)⊤μ∗ + ǫra(t) (t) 9: Update B(t + 1) and ̂μ(t + 1) by (12) and (13) 10: end for
The pseudo-code of Thompson sampling for POCMAB is provided in Algorithm 1. At every time and for each
arm, Algorithm 1 calculates the context estimate ̂xi(t) according to (6). Then, it chooses the arm a(t) by (11), based
on μ ̃(t) generated from the posterior in (8), and updates ̂μ(t) and B(t) according to (12) and (13). So, Algorithm 1
selects the arm maximizing ̂xi(t)⊤μ ̃(t) as a reliable estimate of the unknown expected reward at time t.
4 Analysis of Algorithm 1
In this section, we provide theoretical performance guarantees for the reinforcement learning policy in Algorithm 1,
establishing that it efficiently learns optimal decisions from the data of partial observations. In the first result we
show that Algorithm 1 learns the unknown parameter μ∗, fast and accurately. Then, in Theorem 2, we provide regret
analysis, indicating that the regret of Algorithm 1 scales logarithmically with both the number of arms N , as well as
the time of interaction with the environment T , and scales linearly with the dimension d.
The following result shows that ̂μ(t) is a consistent estimator and its covariance matrix shrinks proportional to
the inverse of the time of interacting with the environment in Algorithm 1. Therefore, Theorem 1 provides sample
efficiency for the Thompson Sampling reinforcement learning policy for POCMAB in Algorithm 1.
6

Theorem 1. In Algorithm 1, let ̂μ(t) be the parameter estimate at time t, defined by (13). Then, we have tli→m∞̂μ(t) =
μ∗, as well as Cov (̂μ(t)) = O(t−1).
Proof. First, for the prior N (0d, Σ) of μ∗, (9) and (10) imply that
E [̂μ(t)] = E
[
B(t)−1
t− ∑1
τ =1
̂xa(τ )(τ )̂xa(τ )(τ )⊤μ∗
]
= (Id − E[B(t)−1]Σ−1)μ∗. (14)
Further, let Ft = σ {{yi(τ )}1≤i≤N, 1≤τ≤t, {a(τ )}1≤τ≤t} be the sigma-field generated by the sequence of all obser
vations and actions by time t. Given the sigma-field Ft−1, we have
E [̂μ(t)|Ft−1] = E
[
B(t)−1
t− ∑1
τ =1
̂xa(τ )(τ )̂xa(τ )(τ )⊤μ∗
∣∣∣∣∣ Ft−1
]
= (Id − B(t)−1Σ−1)μ∗, (15)
Cov (̂μ(t)|Ft−1) = B(t)−1
(∑t
τ =1
Var (ra(τ )(τ )|Ft−1
) ̂xa(τ )(τ )̂xa(τ )(τ )⊤
)
B(t)−1
= B(t)−1(B(t) − Σ−1)B(t)−1σr2y, (16)
where σr2y = Var(ri(t)|yi(t)) = μ∗⊤(A⊤Σy−1A + Σx−1)−1μ∗ + σ2 is derived in Appendix. Using (14), (15) and (16),
we obtain
Cov(̂μ(t)) = Cov(E[̂μ(t)|Ft−1]) + E[Cov(̂μ(t)|Ft−1)]
= E [B(t)−1Σ−1μ∗μ∗⊤Σ−1B(t)−1] − E [B(t)−1] Σ−1μ∗μ∗⊤Σ−1E [B(t)−1]
+ E [B(t)−1] σr2y − E [B(t)−1Σ−1B(t)−1] σr2y. (17)
Next, we show that tli→m∞t−1B(t) is a positive definite matrix. It implies that Cov(̂μ(t)) = O(t−1), since the other
terms in (17) are O(t−2), except E [B(t)−1] σr2y. For this purpose, let S = (DΣyD⊤)1/2, and define
Xt =
t ∑
τ =1
(S−1̂xa(τ )(τ )̂xa(τ )(τ )⊤S−1 − E[S−1̂xa(τ )(τ )̂xa(τ )(τ )⊤S−1|Fτ −1]) ,
Yt =
t ∑
τ =1
τ −1(Xτ − Xτ −1).
Then, Xt and Yt are matrix valued martingales adapted to the filtration {Ft}t≥1. To see that, observe that the following
two equivalences
E [ S−1̂xa(τ )(τ )̂xa(τ )(τ )⊤S−1∣∣ Ft−1
] = S−1̂xa(τ )(τ )̂xa(τ )(τ )⊤S−1, (18)
E [E [ S−1̂xa(τ )(τ )̂xa(τ )(τ )⊤S−1∣∣ Fτ −1
]∣∣ Ft−1
] = E [ S−1̂xa(τ )(τ )̂xa(τ )(τ )⊤S−1∣∣ Fτ −1
] . (19)
7

lead to
E [Xt|Ft−1] =
∑t
τ =1
(E [ S−1̂xa(τ )(τ )̂xa(τ )(τ )⊤S−1∣∣ Ft−1
] − E [E [ S−1̂xa(τ )(τ )̂xa(τ )(τ )⊤S−1∣∣ Fτ −1
]∣∣ Ft−1
])
=
∑t
τ =1
(E[S−1̂xa(τ )(τ )̂xa(τ )(τ )⊤S−1|Ft−1] − E [ S−1̂xa(τ )(τ )̂xa(τ )(τ )⊤S−1∣∣ Fτ −1
]) = Xt−1, (20)
for τ < t and
E [ S−1̂xa(τ )(τ )̂xa(τ )(τ )⊤S−1∣∣ Ft−1
] − E [E [ S−1̂xa(τ )(τ )̂xa(τ )(τ )⊤S−1∣∣ Fτ −1
]∣∣ Ft−1
] = 0d×d,
for τ = t. Further, since E[Xτ |Ft−1] = Xτ , for τ < t, and we have E[Xt|Ft−1] − E[Xt−1|Ft−1] = 0d×d, it holds
that
E [Yt|Ft−1] =
∑t
τ =1
τ −1 (E[Xτ |Ft−1] − E[Xτ −1|Ft−1]) =
t− ∑1
τ =1
τ −1 (Xτ − Xτ −1) = Yt−1.
Now, define the martingale difference sequence Zt = Xt − Xt−1, and let Xtij be the ijth entry of Xt, to get
E [Xt2ij
]=E


(∑t
τ =1
Zτ ij
)2
=
t ∑
τ =1
E [Zτ2ij
]+2 ∑
τ1<τ2
E [Zτ1ij Zτ2ij ] =
t ∑
τ =1
E [Zτ2ij
],
using the fact that E [Zτ1ij Zτ2ij ] = E [Zτ1ij E [ Zτ2ij | Fτ2−1]] = 0 for all τ1 < τ2.
Using the above, we show that Yt is a square-integrable martingale. To that end, since {Xt − Xt−1 : t ≥ 1} is a
martingale difference sequence, we have
E [Yt2ij
]=
t ∑
τ =1
τ −2 (
E [Xτ2ij
]−E
[
X(2τ −1)ij
])
=
t ∑
τ =1
τ −2E [Zτ2ij
],
where X0 = 0d×d, and Ytij is the ijth entry of Yt. Since E [Zτ2ij
] ≤ E [||S−1̂xa(t)(t)||4], for all τ , i, and j, the
expectation E[Yt2ij ] is finite. So, by Martingale Convergence Theorem [37], the martingale Yt converges almost surely
to a limit Y , such that E[|Y |] < ∞. It is straightforward to see that t−1Xt = Yt − t−1 ∑t
τ=1 Yτ . Thus, since
tli→m∞ Yt = Y , the average of the sequence converges to the same limit as well; tli→m∞ t−1 ∑t
τ =1 Yτ = Y . Thus, t−1Xt
converges to 0d×d. To show that limt→∞ t−1B(t) is a positive definite matrix, decompose Xt as follows:
Xt = S−1(B(t) − Σ−1)S−1 −
∑t
τ =1
E[S−1̂xa(τ )(τ )̂xa(τ )(τ )⊤S−1|Fτ −1].
8

Since limt→∞ t−1Xt = 0d×d, we have
tli→m∞ t−1S−1B(t)S−1 = tli→m∞ t−1
∑t
τ =1
E[S−1̂xa(τ )(τ )̂xa(τ )(τ )⊤S−1|Fτ −1]. (21)
To proceed, we express the following result about the matrix M = tli→m∞
E[S−1̂xa(t)(t)̂xa(t)(t)⊤S−1|Ft−1], for which
the proof is deferred to Appendix. Now, by (21), we have
tli→m∞t−1S−1B(t)S−1 = M,
which according to Lemma 1 is a positive definite matrix. Finally, the latter result, together with (17), implies that
tli→m∞tCov (̂μ(t)) = tli→m∞tE[B(t)−1]σr2y = SM −1Sσr2y,
which is the desired result.
Lemma 1. The matrix M = tli→m∞
E[S−1̂xa(t)(t)̂xa(t)(t)⊤S−1|Ft−1] is deterministic and positive definite.
Theorem 1 establishes the square-root consistency of the parameter estimate ̂μ(t), indicating the Algorithm 1
effectively learns the unknown true parameter μ∗. Here, the inverse of Cov(̂μ(t)) grows linearly with time t, only
when the smallest eigenvalue of A⊤A is non-zero. If A is singular, the maximum eigenvalue of Cov(̂μ(t)) does not
decrease as t becomes larger. This also affects the consistency of learning the unknown parameter. A similar result
holds for the samples μ ̃(t), as elaborated in the following corollary, for which the details are provided in Appendix.
Corollary 1. For the samples {μ ̃(t)}t≥1 in Algorithm 1, we have
tli→m∞ μ ̃(t) = μ∗, Cov(μ ̃(t)) = O(t−1).
The following result provides a regret bound, and states that Algorithm 1 is able to efficiently learn optimal arms
in POCMAB.
Theorem 2. For the regret of Algorithm 1, we have
Regret(T ) = O
(
d√log N log T
) .
Before proceeding towards the proof of Theorem 2, we discuss the intuition it provides. Since the regret at time
t grows due to the difference between μ∗ and μ ̃(t), the growth rate of regret depends on the shrinkage rate of ||μ∗ −
μ ̃(t)||2. According to Corollary 1, the shrinkage rate is O(dt−1). Thus, aggregating the errors for the time period
9

1 ≤ t ≤ T , the scaling with respect to T becomes logarithmic (see (33)), while the scaling with d is linear. On the
other hand, the regret scales logarithmically slow with the number of arms N , because N has two opposite effects. On
the one hand, since N is the total number of options, the probability of choosing a sub-optimal arms increases as N
grows. On the other hand, the difference between the reward of the optimal arm and that of the chosen arm becomes
smaller as N grows. The consequences of the two effects compensate each other, leading to the slow growth of the
regret with respect to N . As mentioned, the suggested regret bound works for non-singular A. If A is singular and
μ∗ ∈ C (A⊤)⊥, the regret grows linearly with T .
Proof. First, for the regret of Algorithm 1, it holds that Regret(T ) = E
[∑T
t=1(̂xa∗(t) − ̂xa(t))⊤μ∗
]
, according to
(3) and (7). To proceed, we show that for an arbitrary μ∗ ∈ Rd, it holds that E
[
argmax
̂xi(t),1≤i≤N
{̂xi(t)⊤μ∗
}]
= cN
S−−μ→∗,
where the constant
cN = E
[
max
1≤i≤N{Vi : Vi ∼ N (0, 1)}
]
(22)
captures the magnitude, and the unit vector S−−μ→∗ indicates the direction of the expected value of the vector ̂xi(t) that
achieves the maximum value inside the expectation.
To show the above result, define
Z(μ, N ) = argmax
Zi,1≤i≤N
{Zi⊤μ} , (23)
where Zi are independent standard d-dimensional normally distributed random vectors. The vector Zi can be de
composed as Zi = PμZi + (Id − Pμ)Zi, where Pμ is the projection matrix onto C(μ), which is the 1-dimensional
subspace of the vectors inline with μ. Then, we have Z(μ, N ) = argmax
̂xi(t),1≤i≤N
{(PμZi(t))⊤μ}, because Pμμ = μ.
This implies that only the first term, PμZi, affects the result of argmax
Zi,1≤i≤N
{Zi⊤μ}. This means that Z(μ, N ) has the
same distribution as PμZ(μ, N ) + (Id − Pμ)Zi, which means
Z(μ, N ) =d PμZ(μ, N ) + (Id − Pμ)Zi, (24)
where =d is used to denote equality of the probability distributions. Thus, since projection on a subspace is a linear
operator, it interchanges with expectation, and so we have
E[Z(μ, N )] = E [PμZ(μ, N ) + (Id − Pμ)Zi] = PμE[Z(μ, N )] ∈ C(μ). (25)
10

Next, we claim that E[Z(μ, N )] = cN −→μ , where cN is defined in (22), for which it is known that [38]:
cN = O
(√log N
)
. (26)
Because Zi⊤−→μ has the standard normal distribution N (0, 1), according to (22), we have E
[
max
1≤i≤N
{Zi⊤−μ→}]
= cN .
Based on the definition in (23), it holds that Z(μ, N )⊤−μ→ = max
1≤i≤N
{Zi⊤−μ→}. Moreover, because E[Z(μ, N )] ∈ C(μ)
by (25), we have cN = E[Z(μ, N )]⊤−→μ = ||E[Z(μ, N )]|| ||−→μ || = ||E[Z(μ, N )]||. Putting the above together, we
obtain
E[Z(μ, N )] = cN −→μ . (27)
Next, we apply the result in (27) to ̂xa∗(t)(t) and ̂xa(t)(t). The definition of Z(μ, N ) in (23) implies that S−1̂xa∗(t)(t)
can be written as
argmax
S−1 ̂xi(t),1≤i≤N
{(S −1 ̂xi (t))⊤ S μ∗
} = Z(Sμ∗, N ).
Similarly, it holds that
S−1̂xa(t)(t) = argmax
S−1 ̂xi,1≤i≤N
{(S−1̂xi(t))⊤Sμ ̃(t)} = Z(Sμ ̃(t), N ).
Using (27), we can find the expected values as follows:
E[S−1̂xa∗(t)] = cN
S−−μ→∗, (28)
E[S−1 ̂xa(t)|μ ̃(t)] = cN
−−−→
Sμ ̃(t). (29)
Using the above equations, we have
E
[ T ∑
t=1
(S−1̂xa∗(t)(t) − S−1̂xa(t)(t))⊤ Sμ∗
]
=E
[
E
[ T ∑
t=1
(S−1̂xa∗(t)(t) − S−1̂xa(t)(t))⊤ Sμ∗
∣∣∣∣∣ μ ̃(t)
]]
=E
[ T ∑
t=1
(
cN
S−−μ→∗ − cN
−−−→
Sμ ̃(t)
)⊤ Sμ∗
]
(30)
for the expected gap.
Now, let θt denote the angle between Sμ∗ and Sμ ̃(t), defined as
θt = cos−1 < Sμ∗, Sμ ̃(t) >
||Sμ∗|| ||Sμ ̃(t)|| ∈ [0, π]. (31)
11

Since the vectors S−−μ→∗ and −−−→
Sμ ̃(t) are of the same length, the angle between S−−μ→∗ − −−−→
Sμ ̃(t) and S−−μ→∗ is (π − θt)/2, which
leads to
∣∣∣
∣∣∣S−−μ→∗ − −−−→
Sμ ̃(t)
∣∣∣
∣∣∣ = 2 sin(θt/2). Thus, we get
(S−−μ→∗ − −−−→
Sμ ̃(t)
)⊤ Sμ∗ = ||Sμ∗||
∣∣∣
∣∣∣S−−μ→∗ − −−−→
Sμ ̃(t)
∣∣∣
∣∣∣ cos
( π − θt 2
)
= 2||Sμ∗|| sin
( θt 2
)
cos
( π − θt 2
)
= 2||Sμ∗|| sin2
( θt 2
)
= 2||Sμ∗||(1 − cos θt).
On the other hand, using (31), we obtain
1 − cos θt = ||Sμ∗ − Sμ ̃(t)||2 − (||Sμ∗|| − ||Sμ ̃(t)||)2
2||Sμ∗|| ||Sμ ̃(t)|| ≤ ||Sμ∗ − Sμ ̃(t)||2
2||Sμ∗|| ||Sμ ̃(t)|| .
To proceed, define η(t) = Sμ ̃(t) − Sμ∗ + SE[B(t)−1]Σ−1μ∗, and note that E[η(t)η(t)T ] = SCov(μ ̃(t))S. So, it
holds that
E[1 − cos θt] ≤ E
[ ||η(t) − SE[B(t)−1]Σ−1μ∗||2 2||Sμ∗|| ||Sμ ̃(t)||
]
≤E
[ ||η(t)||2 + ||SE[B(t)−1]Σ−1μ∗||2 ||Sμ∗|| ||Sμ ̃(t)||
] .
By Corollary 1, we have
E[||η(t)||2] = tr (E[η(t)η(t)T ]) = tr(SCov(μ ̃(t))S) = O(dt−1). (32)
Accordingly, we get
E
[ ||η(t)||2 + ||SE[B(t)−1]Σ−1μ∗||2 ||Sμ∗|| ||Sμ ̃(t)||
]
= O(dt−1),
because the expected value of the numerator is O(t−1) by (32) and Theorem 1, while the denominator converges to
||Sμ∗||2 as t → ∞, by Corollary 1. Thus, we have
T ∑
t=1
E
[ ||η(t)||2 + ||SE[B(t)−1]Σ−1μ∗||2 ||Sμ∗|| ||Sμ ̃(t)||
]
= O(d log T ). (33)
Putting the latter result together with (26), it yields to the desired result, since cN depends only on N , and ||Sμ∗|| is a
constant:
Regret(T ) =
T ∑
t=1
cN E[2||Sμ∗||(1 − cos θt)] = O(d√log N log T ).
12

5 Numerical Illustrations
0 1000 2000 3000 4000 5000
0.0 0.1 0.2 0.3 0.4 0.5
Sfrag replacements
E
[
||̂μ(t) − μ∗||/√d
]
d = 10
d = 30
t
N =5 N = 10 N = 20 N = 50
ret(t)/ (d log t√log N )
0 1000 2000 3000 4000 5000
0.0 0.1 0.2 0.3 0.4 0.5
PSfrag replacements
E
[
||̂μ(t) − μ∗||/√d
]
d = 10
d = 30
t
N =5 N = 10 N = 20 N = 50
Regret(t)/ (d log t√log N )
Figure 1: Plots of E
[
||̂μ(t) − μ∗||/√d
]
over time for different number of arms N = 5, 10, 20, 50, and different
dimensions of the contexts d = 10, 30.
0 2000 4000 6000 8000
0.0 0.5 1.0 1.5 2.0
Sfrag replacements
E
[
||̂μ(t) − μ∗||/√d
]
d = 10
d = 30
t
N =5 N = 10 N = 20 N = 50
Regret(t)/ (d log t√log N )
0 2000 4000 6000 8000
0.0 1.0 2.0 3.0
PSfrag replacements
E
[
||̂μ(t) − μ∗||/√d
]
d = 10
d = 30
t
N =5 N = 10 N = 20 N = 50
Regret(t)/ (d log t√log N )
Figure 2: Plots of the regret normalized by d log t√log N , over time for different number of arms N = 5, 10, 20, 50, and the dimension of the context d = 10, 30.
We consider cases with different numbers of arms, N = 5, 10, 20, 50, and different dimensions of the contexts
d = 10, 30, repeating 50 times for each case, for every time step. We report two quantities, ||̂μ(t)−μ∗|| and Regret(t),
over time, and take averages of the quantities for 50 scenarios. The true parameter μ∗ as well as each row of A, are
randomly generated. Further, we let Σx = Id, Σy = Id, and σ2 = 1.
Figure 1 depicts the average norm of the normalized errors over time. We normalize the errors by √d, since
Cov(μ ̃(t)) = O(t−1), by Corollary 1, and so tr(Cov(μ ̃(t))) = O(dt−1). The curves in Figure 1 show that the errors
13

decrease with the appropriate rates. Figure 2 illustrates the normalized regret over time. The regret is normalized by
its bound d log t√log N in Theorem 1. In Figure 2, the curves show that the normalized regret is constant over time,
corroborating the regret bound in Theorem 2.
6 Concluding remarks
We studied the design and analysis of a reinforcement learning policy for partially observable contextual multi-armed
bandits. First, we presented a modified version of Thompson Sampling that leverages Bayesian methods for balancing
the exploration and the exploitation, and estimates the unobserved contexts based on the sequence of output observa
tions. Further, we show that the parameter estimates converge fast to the truth, and that as time goes by, the presented
algorithm learns the unknown true parameter accurately. Finally, we established theoretical performance guarantees
showing that the regret of the proposed algorithm scales linearly with dimension, and logarithmically with time and
the number of arms.
Extending the presented framework to similar reinforcement learning problems is of interest, including partially
observed (contextual) Markov decision processes. Moreover, addressing the problem when the transformation matrix
is unknown, and incorporating an estimation procedure for that, is an interesting direction for future work. Finally,
settings with large-scale action spaces and those with high-dimensional parameters constitute further topics for future
studies.
References
[1] L. Li, W. Chu, J. Langford, and R. E. Schapire, “A contextual-bandit approach to personalized news article
recommendation,” in Proceedings of the 19th international conference on World wide web, 2010, pp. 661–670.
[2] A. Durand, C. Achilleos, D. Iacovides, K. Strati, G. D. Mitsis, and J. Pineau, “Contextual bandits for adapting
treatment in a mouse model of de novo carcinogenesis,” in Machine learning for healthcare conference. PMLR,
2018, pp. 67–82.
[3] A. Tewari and S. A. Murphy, “From ads to interventions: Contextual bandits in mobile health,” in Mobile Health.
Springer, 2017, pp. 495–517.
[4] T. L. Lai and H. Robbins, “Asymptotically efficient adaptive allocation rules,” Advances in applied mathematics,
vol. 6, no. 1, pp. 4–22, 1985.
[5] Y. Abbasi-Yadkori, D. Pál, and C. Szepesvári, “Improved algorithms for linear stochastic bandits,” Advances in
neural information processing systems, vol. 24, pp. 2312–2320, 2011.

[6] M. K. S. Faradonbeh, A. Tewari, and G. Michailidis, “Optimism-based adaptive regulation of linear-quadratic
systems,” IEEE Transactions on Automatic Control, vol. 66, no. 4, pp. 1802–1808, 2020.
[7] P. Auer, N. Cesa-Bianchi, and P. Fischer, “Finite-time analysis of the multiarmed bandit problem,” Machine
learning, vol. 47, no. 2, pp. 235–256, 2002.
[8] P. Auer, “Using confidence bounds for exploitation-exploration trade-offs,” Journal of Machine Learning Re
search, vol. 3, no. Nov, pp. 397–422, 2002.
[9] W. Chu, L. Li, L. Reyzin, and R. Schapire, “Contextual bandits with linear payoff functions,” in Proceedings
of the Fourteenth International Conference on Artificial Intelligence and Statistics. JMLR Workshop and
Conference Proceedings, 2011, pp. 208–214.
[10] O. Chapelle and L. Li, “An empirical evaluation of thompson sampling,” Advances in neural information pro
cessing systems, vol. 24, pp. 2249–2257, 2011.
[11] D. Russo and B. Van Roy, “Learning to optimize via posterior sampling,” Mathematics of Operations Research,
vol. 39, no. 4, pp. 1221–1243, 2014.
[12] W. R. Thompson, “On the likelihood that one unknown probability exceeds another in view of the evidence of
two samples,” Biometrika, vol. 25, no. 3/4, pp. 285–294, 1933.
[13] S. Agrawal and N. Goyal, “Analysis of thompson sampling for the multi-armed bandit problem,” in Conference
on learning theory. JMLR Workshop and Conference Proceedings, 2012, pp. 39–1.
[14] ——, “Thompson sampling for contextual bandits with linear payoffs,” in International Conference on Machine
Learning. PMLR, 2013, pp. 127–135.
[15] M. K. S. Faradonbeh, A. Tewari, and G. Michailidis, “On adaptive linear–quadratic regulators,” Automatica, vol.
117, p. 108982, 2020.
[16] T. Hu, E. B. Laber, Z. Li, N. J. Meyer, and K. Pacifici, “Note on thompson sampling for large decision problems,”
arXiv preprint arXiv:1905.04735, 2019.
[17] D. Russo, B. Van Roy, A. Kazerouni, I. Osband, and Z. Wen, “A tutorial on thompson sampling,” arXiv preprint
arXiv:1707.02038, 2017.
[18] M. Raghavan, A. Slivkins, J. W. Vaughan, and Z. S. Wu, “Greedy algorithm almost dominates in smoothed
contextual bandits,” arXiv preprint arXiv:2005.10624, 2020.
15

[19] H. Bastani, M. Bayati, and K. Khosravi, “Mostly exploration-free algorithms for contextual bandits,” Manage
ment Science, vol. 67, no. 3, pp. 1329–1349, 2021.
[20] A. Slivkins, “Contextual bandits with similarity information,” in Proceedings of the 24th annual Conference On
Learning Theory. JMLR Workshop and Conference Proceedings, 2011, pp. 679–702.
[21] Y. Hu, N. Kallus, and X. Mao, “Smooth contextual bandits: Bridging the parametric and non-differentiable regret
regimes,” in Conference on Learning Theory. PMLR, 2020, pp. 2007–2010.
[22] O.-A. Maillard and S. Mannor, “Latent bandits.” in International Conference on Machine Learning. PMLR,
2014, pp. 136–144.
[23] L. Zhou and E. Brunskill, “Latent contextual bandits and their application to personalized recommendations for
new users,” arXiv preprint arXiv:1604.06743, 2016.
[24] J. Hong, B. Kveton, M. Zaheer, Y. Chow, A. Ahmed, and C. Boutilier, “Latent bandits revisited,” arXiv preprint
arXiv:2006.08714, 2020.
[25] A. Bensoussan, Stochastic control of partially observable systems. Cambridge University Press, 2004.
[26] D. Bouneffouf, I. Rish, G. A. Cecchi, and R. Féraud, “Context attentive bandits: Contextual bandit with restricted
context,” arXiv preprint arXiv:1705.03821, 2017.
[27] G. Tennenholtz, U. Shalit, S. Mannor, and Y. Efroni, “Bandits with partially observable confounded data,” in
Conference on Uncertainty in Artificial Intelligence. PMLR, 2021.
[28] R. Roesser, “A discrete state-space model for linear image processing,” IEEE Transactions on Automatic Control,
vol. 20, no. 1, pp. 1–10, 1975.
[29] I. Nagrath, Control systems engineering. New Age International, 2006.
[30] J. Durbin and S. J. Koopman, Time series analysis by state space methods. Oxford university press, 2012.
[31] R. E. Kalman, “A new approach to linear filtering and prediction problems,” 1960.
[32] R. L. Stratonovich, “Optimum nonlinear systems which bring about a separation of a signal with constant pa
rameters from noise,” Radiofizika, vol. 2, no. 6, pp. 892–901, 1959.
[33] ——, “Application of the markov processes theory to optimal filtering,” Radio Engineering and Electronic
Physics, vol. 5, pp. 1–19, 1960.
16

[34] T. M. Howard, C. J. Green, A. Kelly, and D. Ferguson, “State space sampling of feasible motions for high
performance mobile robot navigation in complex environments,” Journal of Field Robotics, vol. 25, no. 6-7, pp.
325–345, 2008.
[35] H. Surmann, C. Jestel, R. Marchel, F. Musberg, H. Elhadj, and M. Ardani, “Deep reinforcement learning for real
autonomous mobile robot navigation in indoor environments,” arXiv preprint arXiv:2005.13857, 2020.
[36] S. Bubeck and N. Cesa-Bianchi, “Regret analysis of stochastic and nonstochastic multi-armed bandit problems,”
arXiv preprint arXiv:1204.5721, 2012.
[37] J. L. Doob, Stochastic processes. New York Wiley, 1953, vol. 10.
[38] H. Cramér, Mathematical Methods of Statistics (PMS-9), Volume 9. Princeton university press, 2016.
Appendix
Derivation of the conditional distribution P(xi(t)|yi(t))
Note that yi(t) = Axi(t) + εyi(t), where the distributions of εyi(t) and xi(t) are N (0d, Σy) and N (0d, Σx), respec
tively. The conditional distribution of xi(t) given yi(t) can be calculated as follows.
P(xi(t)|yi(t)) ∝ P(yi(t)|xi(t))P(xi(t))
∝ exp ((yi(t) − Axi(t))⊤Σy−1(yi(t) − Axi(t))) exp (xi(t)⊤Σx−1xi(t))
∝ N ((A⊤Σy−1A + Σx−1)−1A⊤Σy−1yi(t), (A⊤Σy−1A + Σx−1)−1) (34)
Derivation of the conditional distribution P(ri(t)|yi(t))
Let Σxy = (A⊤Σy−1A + Σx−1)−1 and recall ̂xi(t) = (A⊤Σy−1A + Σx−1)−1A⊤Σy−1yi(t) = Dyi(t).
P(ri(t)|μ, yi(t)) =
∫
Rd
P(ri(t)|μ, xi(t))P(xi(t)|yi(t))dxi(t)
∝
∫
Rd
exp
(
− (ri(t) − xi(t)⊤μ)2
2σ2
)
exp
(
−1
2 (xi(t) − ̂xi(t))⊤Σx−y1(xi(t) − ̂xi(t))
)
dxi(t)
∝ exp
(
−
(ri(t) − ((A⊤Σy−1A + Σx−1)−1A⊤Σy−1yi(t))⊤μ)2 2(μ⊤Σxyμ + σ2)
)
∝ N (̂xi(t)⊤μ, σr2y
) . (35)
17

Derivation of the posterior P(μ|rt−1, yt−1)
Let P(μ), the pdf of N (0, σr2yΣ), be the prior of μ∗. We can decompose the posterior as follows.
P(μ|rt−1, yt−1) ∝ P(rt−1, yt−1|μ)P(μ)
∝ P(rt−1|yt−1, μ)P(μ).
Using the prior and the conditional distribution in (35), we have
P(μ|rt−1, yt−1) ∝
t− ∏1
τ =1
exp
(
− (ra(τ )(τ ) − ̂xa(τ )(τ )⊤μ)2
2σr2y
)
exp
(
−1
2σr2y
μ⊤Σ−1μ
)
∝ exp
(
−1
2σr2y
(μ − ̂μ(t))⊤ B(t) (μ − ̂μ(t))
)
, (36)
which is the kernel of the pdf of N (̂μ(t), σr2yB(t)−1), where ̂μ(t) = B(t)−1 ∑t−1
τ =1 ̂xa(t)(t)ra(t)(t) and
B(t) =
t− ∑1
τ =1
̂xa(τ )(τ )̂xa⊤(τ )(τ ) + Σ−1.
Thus, the posterior distribution is N (̂μ(t), σr2yB(t)−1). But, to allow for the possibility that σr2y is unknown, we
use a re-scaled posterior distribution, N (̂μ(t), B(t)−1), which does not depend on σr2y.
Derivation of the recursion formula to update the parameter.
Note that we can decompose the posterior as follows.
P(μ|rt, yt) ∝ P(rt, yt, μ)
∝ P(ra(t)(t)|ya(t)(t), μ)P(μ|rt−1, yt−1).
Using the conditional distribution (35) and the posterior in (36), we get
P(μ|rt, yt) ∝ P(ra(t)(t)|ya(t)(t), μ)P(μ|rt−1, yt−1)
∝ exp
(
− (ra(t)(t) − ̂xa(t)(t)⊤μ)2
2σr2y
)
exp
(
−1
2σr2y
(μ − ̂μ(t))⊤ B(t)−1 (μ − ̂μ(t))
)
∝ exp
(
−1
2σr2y
(μ − ̂μ(t + 1))⊤ B(t + 1)−1 (μ − ̂μ(t + 1))
) ,
18

where ̂μ(t + 1) = B(t + 1)−1 (B(t)̂μ(t) + ̂xa(t)(t)ra(t)(t)) and B(t + 1) = B(t) + ̂xa(t)(t)̂xa(t)(t)⊤.
Proof of Lemma 1
Proof. Recall that we used the notation S = Var(̂xi(t))0.5 = (DΣyD⊤)0.5 and Z(μ, N ) = argmaxZi,1≤i≤N {Zi⊤μ}.
Note that S−1̂xi(t) has the distribution N (0d, Id) and S−1̂xa(t)(t) = Z(Sμ ̃(t), N ). S−1̂xi(t) can be decomposed as
S−1̂xi(t) = PSμ ̃(t)S−1̂xi(t) + PSμ ̃(t)⊥ S−1̂xi(t),
where PSμ ̃(t)⊥ denotes the projection matrix onto a subspace orthogonal to the column-space C(Sμ ̃(t)), which we
denote C(Sμ ̃(t))⊥. As shown in (24), we have
S−1 ̂xa(t)(t) =d PSμ ̃(t)S−1 ̂xa(t)(t) + PSμ ̃(t)⊥ S−1̂xi(t),
where =d expresses that the two quantities have an identical distribution. Further, based on the fact that the function
Z(μ, N ) defined in (23) is affected only by {PμZi}1≤i≤N , but not by {(Id − Pμ)Zi}1≤i≤N , we established that
PSμ ̃(t)S−1̂xa(t)(t) and PSμ ̃(t)⊥ S−1̂xi(t) are statistically independent. Now, consider the following decomposition.
E[S−1 ̂xa(t)(t)̂xa(t)(t)⊤S−1|μ ̃(t)]
= PSμ ̃(t)E[S−1 ̂xa(t)(t)̂xa(t)(t)⊤S−1]PSμ ̃(t) + PSμ ̃(t)⊥ E[S−1 ̂xa(t)(t)̂xa(t)(t)⊤S−1|μ ̃(t)]PSμ ̃(t)⊥
+ PSμ ̃(t)E[S−1̂xa(t)(t)̂xa(t)(t)⊤S−1|μ ̃(t)]PSμ ̃(t)⊥ + PSμ ̃(t)⊥ E[S−1̂xa(t)(t)̂xa(t)(t)⊤S−1|μ ̃(t)]PSμ ̃(t).
By replacing PSμ ̃(t)S−1̂xa(t)(t) with PSμ ̃(t)⊥ S−1̂xi(t) based on the independence and the equivalence of the distri
bution, we get
PSμ ̃(t)⊥ E[S−1 ̂xa(t)(t)̂xa(t)(t)⊤S−1|μ ̃(t)]PSμ ̃(t)⊥ = PSμ ̃(t)⊥ E[S−1̂xi(t)̂xi(t)⊤S−1|μ ̃(t)]PSμ ̃(t)⊥ = PSμ ̃(t)⊥ , (37)
and
PSμ ̃(t)E[S−1 ̂xa(t)(t)̂xi(t)⊤S−1|μ ̃(t)]PSμ ̃(t)⊥ + PSμ ̃(t)⊥ E[S−1̂xi(t)̂xa(t)(t)⊤S−1|μ ̃(t)]PSμ ̃(t)
= PSμ ̃(t)E[S−1 ̂xa(t)(t)|μ ̃(t)]E[̂xi(t)⊤S−1|μ ̃(t)]PSμ ̃(t)⊥ + PSμ ̃(t)⊥ E[S−1̂xi(t)|μ ̃(t)]E[̂xa(t)(t)⊤S−1|μ ̃(t)]PSμ ̃(t)
= 0, (38)
19

because E[̂xi(t)|μ ̃(t)] = 0. Thus, by putting (37) and (38) together, we have
E[S−1̂xa(t)(t)̂xa(t)(t)⊤S−1|μ ̃(t)] = PSμ ̃(t)E[S−1̂xa(t)(t)̂xa(t)(t)⊤S−1|μ ̃(t)]PSμ ̃(t) + PSμ ̃(t)⊥ .
On the other hand, PSμ ̃(t)E[S−1̂xa(t)(t)̂xa(t)(t)⊤S−1|μ ̃(t)]PSμ ̃(t) can be written as
PSμ ̃(t)E[S−1̂xa(t)(t)̂xa(t)(t)⊤S−1|μ ̃(t)]PSμ ̃(t) = Sμ ̃(t)μ ̃(t)⊤S
μ ̃(t)⊤S2μ ̃(t) E[S−1̂xa(t)(t)̂xa(t)(t)⊤S−1|μ ̃(t)] Sμ ̃(t)μ ̃(t)⊤S
μ ̃(t)⊤S2μ ̃(t)
= Sμ ̃(t)
μ ̃(t)⊤S2μ ̃(t) E[(μ ̃(t)⊤SS−1̂xa(t)(t))2|μ ̃(t)] μ ̃(t)⊤S
μ ̃(t)⊤S2μ ̃(t)
= PSμ ̃(t)E
[ ((S−1̂xa(t)(t))⊤ −−−→
Sμ ̃(t)
)2∣∣∣∣ μ ̃(t)
]
. (39)
Since ̂xi(t)⊤S−1−−−→
Sμ ̃(t) has a standard normal distribution, we have
E
[(
̂xa⊤(t) (t)S −1 −−−→
Sμ ̃(t)
)2∣∣∣∣ μ ̃(t)
]
=E
[(
max
1≤i≤N({Vi : Vi ∼ N (0, 1)}
)2]
. (40)
We define the quantity in (40) as kN ,
kN = E
[(
max
1≤i≤N({Vi : Vi ∼ N (0, 1)}
)2]
, (41)
which is greater than 1 and grows as N gets larger, because E[Vi2] = 1 < E
[(
max
1≤i≤N({Vi : Vi ∼ N (0, 1)}
)2] .
Thus, E[S−1̂xa(t)(t)̂xa(t)(t)⊤S−1|μ ̃(t)] can be written as
E[S−1̂xa(t)(t)̂xa(t)(t)⊤S−1|μ ̃(t)] = PSμ ̃(t)kN + PSμ ̃(t)⊥ = PSμ ̃(t)(kN − 1) + Id. (42)
Because the column-spaces of the matrices PSμ ̃(t) and PSμ ̃(t)⊥ are orthogonal, the non-zero eigenvalues of
PSμ ̃(t)E[S−1̂xa(t)(t)̂xa(t)(t)⊤S−1|μ ̃(t)]PSμ ̃(t) and PSμ ̃(t)⊥ are the eigenvalues of E[S−1̂xa(t)(t)̂xa(t)(t)⊤S−1|μ ̃(t)].
That is, (d − 1) eigenvalues of E[S−1̂xa(t)(t)̂xa(t)(t)⊤S−1|μ ̃(t)] are 1, and the other eigenvalue is kN . This means
that E[S−1̂xa(t)(t)̂xa(t)(t)⊤S−1|μ ̃(t)] is positive definite, since kN > 1.
Next, for the true parameter μ∗, we claim limt→∞ μ ̃(t) = μ∗. With (14), (17), and the fact that μ ̃(t) is generated
20

from the posterior N (̂μ(t), B(t)−1), we have
E [μ ̃(t)] = E [E[μ ̃(t)|Ft−1]] = E [̂μ(t)] = (Id − E[B(t)−1]Σ−1)μ∗, (43)
Cov(μ ̃(t)) = Cov(E[μ ̃(t)|Ft−1]) + E[Cov(μ ̃(t)|Ft−1)]
= Cov(̂μ(t)) + E[B(t)−1]
= E [B(t)−1Σ−1μ∗μ∗⊤Σ−1B(t)−1] − E [B(t)−1] Σ−1μ∗μ∗⊤Σ−1E [B(t)−1]
+ E [B(t)−1] σr2y − E [B(t)−1Σ−1B(t)−1] σr2y + E [B(t)−1]
= E [B(t)−1Σ−1μ∗μ∗⊤Σ−1B(t)−1] − E [B(t)−1] Σ−1μ∗μ∗⊤Σ−1E [B(t)−1]
+ E [B(t)−1] (σr2y + 1) − E [B(t)−1Σ−1B(t)−1] σr2y. (44)
Since limt→∞ B(t)−1 = 0d×d and thereby limt→∞ Cov(μ ̃(t)) = 0d×d, μ ̃(t) is a consistent estimator of μ∗. That
is,
tli→m∞ μ ̃(t) = μ∗. (45)
Thus, limt→∞ PSμ ̃(t) = PSμ∗ . Using
E[S−1̂xa(t)(t)̂xa(t)(t)⊤S−1|Ft−1] = E[E[S−1̂xa(t)(t)̂xa(t)(t)⊤S−1|μ ̃(t)]|Ft−1]
and (42), we get
tli→m∞
E[S−1̂xa(t)(t)̂xa(t)(t)⊤S−1|Ft−1] = tli→m∞
E[PSμ ̃(t)(kN − 1) + Id|Ft−1] = PSμ∗ (kN − 1) + Id.
Because the eigenvalues PSμ∗ (kN − 1) + Id are (d − 1) 1s and kN , which is greater than 1, PSμ∗ (kN − 1) + Id
is positive definite. Therefore, limt→∞ E[S−1̂xa(t)(t)̂xa(t)(t)⊤S−1|Ft−1] is positive definite.
Proof of Corollary 1
Proof. Recall Cov(μ ̃(t)) in (44)
Cov(μ ̃(t)) = E [B(t)−1Σ−1μ∗μ∗⊤Σ−1B(t)−1] − E [B(t)−1] Σ−1μ∗μ∗⊤Σ−1E [B(t)−1]
+ E [B(t)−1] (σr2y + 1) − E [B(t)−1Σ−1B(t)−1] σr2y.
21

Since B(t)−1 = O(t−1) by Lemma 1 and the other terms are negligible except E [B(t)−1] (σr2y + 1) in above
terms, we have Cov(μ ̃(t)) = O(t−1). In addition, we already showed that limt→∞ μ ̃(t) = μ∗ in (45).Therefore,
tli→m∞ μ ̃(t) = μ∗, Cov(μ ̃(t)) = O(t−1).
22

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:04.995Z
- **Text Length:** 41474 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 22 of 22
