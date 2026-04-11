# PDF Document: Macrì et al. - 2025 - Deep reinforcement learning for optimal trading with partial information.pdf

**File Path:** Macrì et al. - 2025 - Deep reinforcement learning for optimal trading with partial information.pdf

**Processed Date:** 2026-02-10T18:14:18.556Z

**File Size:** 3105.53 KB

**Total Pages:** 24

**Extracted Pages:** 24

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3580

**Title:** Deep reinforcement learning for optimal trading with partial information

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Deep reinforcement learning for optimal trading with partial
information
Andrea Macrì 1∗, Sebastian Jaimungal 2,3 and Fabrizio Lillo 1,4
1 Scuola Normale Superiore, Pisa
2 Department of Statistical Sciences, University of Toronto
3 Oxford-Man Institute for Quantitative Finance, University of Oxford
4 Dipartimento di Matematica, University of Bologna
November 4, 2025
Abstract
Reinforcement Learning (RL) applied to financial problems has been the subject of a lively area of research. The use of RL for optimal trading strategies that exploit latent information in the market is, to the best of our knowledge, not widely tackled. In this paper we study an optimal trading problem, where a trading signal follows an Ornstein–Uhlenbeck process with regime-switching dynamics. We employ a blend of RL and Recurrent Neural Networks (RNN) in order to make the most at extracting unde-
rlying information from the trading signal with latent parameters. The latent parameters driving mean reversion, speed, and volatility are filtered from observations of the signal, and trading strategies are derived via RL. To address this problem, we propose three Deep Deterministic Policy Gradient (DDPG)–based algorithms that integrate Gated Recurrent Unit (GRU) networks to capture temporal dependencies in the signal. The first, a one-step approach (hidDDPG), directly encodes hidden states from -
the GRU into the RL trader. The second and third are two-step methods: one (prob-DDPG) makes use of posterior regime probability estimates, while the other (reg-DDPG) relies on forecasts of the next signal value. Through extensive simulations with increasingly complex Markovian regime dynamics for the trading signal’s parameters, as well as an empirical application to equity pair trading, we find that prob-DDPG achieves superior cumulative rewards and exhibits more interpretable strategies. By con-
trast, reg-DDPG provides limited benefits, while hid-DDPG offers intermediate performance with less interpretable strategies. Our results show that the quality and structure of the information supplied to the agent are crucial: embedding probabilistic insights into latent regimes substantially improves both profitability and robustness of reinforcement learning–based trading strategies.
1 Introduction
Optimal trading strategies have been the subject of an active and flourishing area of research since the advent of electronic markets several decades ago. The development of more efficient quoting systems and the faster spread of information have led major market participants, on both sell and buy sides, to embed ever more granular information into their trading algorithms. In model-based approaches to algorithmic trading, recent work includes the incorporation of trading signals into the classica-
l optimal stochastic control formulation of trading, starting with the works of Gârleanu and Pedersen 2013 in discrete time and Cartea and Jaimungal 2016 and Casgrain and Jaimungal 2019 (with latent signals) in continuous time. Thanks to the advent of machine learning (ML), research has begun to focus on model-agnostic approaches to incorporate trading signals. In this regard, among the many methods proposed in literature, those that propose forecasting algorithms that use Recurrent Neural Network-
s (RNNs) show the greatest promise. For example, Tsantekidis et al. 2020, investigate many architectures for predicting future price levels starting from Limit Order Book (LOB) information; Sirignano and Cont 2021 where the authors use high frequency data containing all orders, transactions and order cancellations for approximately 1000 stocks traded on NASDAQ to predict their returns;
∗andrea.macri@sns.it
1
arXiv:2511.00190v1 [q-fin.TR] 31 Oct 2025

Zhang, Zohren, and Roberts 2019b propose a new convolutional neural network on top of an LSTM layer to forecast stock returns at high frequency and finally Kolm, Turiel, and Westray 2023 where the authors compare the performance of several machine learning architectures in extracting excess return information for multiple horizons. Extracting market signals, however, is only one side of the problem, the other side is how to use those signals for optimal trading. Another stream of literature emplo-
ys deep reinforcement learning to directly seek optimal trading policies, or strategies, that maximise profits. For example, Ning, Lin, and Jaimungal 2021 use double deep Q-networks (DDQN) for optimal execution problems and Casgrain, Ning, and Jaimungal 2022 extends it to the multi-agent RL paradigm1; Zhang, Zohren, and Roberts 2019a compares different paradigms of RL against classical time series momentum strategies on optimal futures trading, showing how RL-based methods outperform such baseline-
 models; Hongyang Yang et al. 2020 trains an RL agent that makes use of an ‘ensemble’ strategy – an ensemble of trading strategies that uses three actor-critic based algorithms: Proximal Policy Optimisation (PPO), Advantage Actor Critic (A2C), and Deep Deterministic Policy Gradient (DDPG). This particular combined architecture enables the agent to inherit and integrate the best features of all three algorithms, thus robustly adjusting to different market situations. Cartea, Jaimungal, and Sánchez--
Betancourt 2023 use DDQN and develop a new reinforced deep Markov model (RDMM) for statistical arbitrage. Finally, Briola et al. 2023 start from an environment based on LOBs for a particular stock, and train a PPO agent to trade one unit of asset per time step, leading the agent to learn trading strategies that deliver stable positive returns in a highly stochastic and non-stationary environment. This stream of literature is quite active and thus many other methods have been developed to tackle ot-
her kind of problems when it comes to asset trading. For a more complete review of the methods available please refer to Millea 2021; Zou et al. 2023; Hambly, Xu, and Huining Yang 2023. To the best of our knowledge, however, none of the existing literature makes use of latent information embedded in a signal process as part of training for an RL agent and to use this to obtain optimal trading strategies. Thus, in this paper, we fill this gap in the literature by training an RL agent whose goal is -
to optimally trade a signal, hence maximizing their future discounted rewards from trading by making use of hidden information coming from the signal itself. We model the trading signal as a mean-reverting process; in this context, the information embedded in the training of the agent comes in the form of the probability of mean reversion to one of the different long-run regimes to which the signal mean reverts to. We progressively consider more complicated signal dynamics and show how embedding i-
nformation in the form of the probability of mean reversion to a regime improves dramatically the performance of the RL agent both in a simulated environment and with real data. In this paper, we develop and test three DDPG-based algorithms to solve an optimal trading problem with mean-reverting signals governed by Markov chains. We incorporate GRU networks to capture the time-dependent structure of the trading signal, leveraging on this we explore different ways of feeding information to the RL a-
gent. Our findings show that providing posterior probability estimates of the underlying mean-reversion regimes consistently yields the highest rewards, both in synthetic environments with multiple regime dynamics and in real market pair-trading data. In contrast, supplying next-step signal forecasts adds little benefit, while using GRU hidden states provides intermediate performance. Overall, the results highlight that the quality and type of information provided to the agent is crucial: Interpre-
table structured insights into the data-generating process substantially improve the effectiveness and robustness of the learning. The paper is organised as follows, in Section 2 we define the trading problem tackled throughout the remainder of the paper, in Section 3 introduces the methods used to model the trading problem, Section 4 discusses the results for different model scenarios with simulated data, Section 5 discusses the results obtained by applying the algorithms to real data, and finall-
y, Section 6 provides conclusions and outlines further research directions.
2 Optimal trading problem
2.1 Market model
A risk-neutral investor aims to maximise her expected discounted profits from trading a signal (St)t≥0. We assume that St follows an Ornstein-Uhlenbeck process with time varying parameters, thus it satisfies the stochastic differential equation (SDE):
dSt = κt(θt − St) dt + σt dWt , (1)
1The first versions of these works appeared online in 2018 and 2019.
2

where W = (Wt)t≥0 is a Brownian motion in a suitable probability space and the parameters κt ≥ 0, θt > 0, and σt > 0 are, respectively, the long run mean at which the process mean reverts to, the velocity of mean reversion, and the volatility of the process at time t. The existence of mean reversion creates opportunities for signal forecasting and therefore for profitable trading strategies, because when the signal is above/below the long term value θt, then for the agent it is optimal to go shor-
t/long on the signal. The parameters, however, are generally latent and must be estimated dynamically together with the optimization of the strategy. To overcome this issue, we take the approach from partial information stochastic control and filter θt, κt, σt from the observations of the dynamics of (Su)u∈[0,t]. To gain some insight, consider the case where κt and σt are constant, while θt follows some unknown dynamics. In this case, the solution to SDE (1) may be written as
St+∆t = e−κ ∆t St + κ
∫ t+∆t
t
e−κ(t−u) θu du + σ
∫ t+∆t
t
e−κ(t−u) dWu . (2)
As expected, there is a strong dependence of St+∆t on the level of θt. Moreover, the expected change in the price is given by
E[St+∆t − St | Ft] = (e−κ ∆t − 1) St + κ
∫ t+∆t
t
e−κ(t−u) E[θu | Ft] du
≈ κ ∆t (E[θt | Ft] − St) + o(∆t).
(3)
The relationship in Eq. (3) shows how the expected increase in St is related to the expected level of θt conditioned on the filtration Ft generated by St. In this paper, we consider a setting where a risk neutral agent maximizes the expected discounted profit from trading over a finite time horizon when the dynamics of the signal is given by Eq. (1) and the parameters θt, κt, and σt are driven by a regime switching Markov chain. Moreover, we implement a Deep Reinforcement Learning (RL) approach to-
 solve the optimization problem by considering a discretized version of the dynamics in Eq. (1). More specifically, we discretize the time in length intervals τ and we index the discrete time steps with the integer numbers, t = 0, 1, 2, .... At the start of the trading window (t = 0), the agent has an initial endowment of inventory I0. The agent’s action is identified with the new position she wishes to
hold, i.e. at = It+1, and the volume of trades is2 qt = It+1 − It, ∀ t ∈ N. Whenever the trader performs a trade of volume qt, she pays a transaction cost per unit volume of λ ≥ 0. As a result, the reward rt from the trading action at time t is
rt(qt, St, St+1, λ) := It+1 (St+1 − St) − λ |qt| . (4)
This reward represents the change in the trader’s gains process accounting for transaction fees. The trader’s performance criterion is the expected future discounted sum of rewards
E
[∞ ∑
t=0
γt rt(qt, St, St+1, λ)
∣ ∣
∣ I0, S0
]
,
where γ ∈ (0, 1) is a discount factor. The trader aims to optimise this criterion over F-adapted admissible strategies (qt)t≥0 that are square integrable, denoted A, i.e., the trader aims to find the strategy that optimizes
max
(qt)t≥0∈A E
[∞ ∑
t=0
γt rt(qt, St, St+1, λ)
∣ ∣
∣ I0, S0
]
. (P1)
Problem (P1) is an infinite time horizon problem, and we seek stationary strategies that depend only on the state of environment at that time, and not explicitly on time. As mentioned above, each parameter θt, κt, and σt follows an independent regime switching Markov chain. More precisely, we consider increasingly more complex dynamics for St. Where only θt follows a regime switching Markov chain dynamics; next, where both θt, κt follow regime switching dynamics; and finally, where all θt, κt, and-
 σt follows regime switching dynamics. In the first setting, θt has three regimes θt ∈ {φ1, φ2, φ3} and the switching between the regimes is modelled using a Markov chain with transition rate matrix A, so that:
P(θt = φj |θt−1 = φi) = [eAτ ]ij (5)
2Positive (negative) values of qt correspond to purchases (sales).
3

We next consider the case where also the speed of mean reversion κt follows an independent two state Markov chain with κt ∈ {ψ1, ψ2}, corresponding to slow and fast relaxation to the mean. Finally, we allow for regime switching volatility, with σt ∈ {ξ1, ξ2}, and again the Markov chain is independent from the other two. Such dynamics is quite complicated and difficult to filter from the mere observation of St levels. To simplify the presentation, in the following we detail the case where only the-
 mean reversion level θt follows a Markov chain, while κ and σ are constant. The generalization to the more complex cases is straightforward and the numerical results are shown for all models.
3 Learning Algorithms
As in any optimization setting with latent and time-varying parameters, the problem faced by the algorithm is two-fold. The first consists in using the observed data to filter the latent parameters, while the second consists in finding the optimal action given the current estimate of the parameters. Here we consider and compare two approaches — one where we optimize the criterion without directly filtering the states of the system, and the second where we first develop a filter and then use the fi-
ltered states as part of the optimization. The optimal trading problem can, therefore, be cast either as a unique optimization or as two consecutive optimizations Specifically, we first propose a one-step algorithm, using as features the path of the signal process and the current inventory and returns the optimal action — which treats the filtering and optimal trading problems simultaneously. We then consider a two-step approach, where we first train a model to determine posterior probabilities fo-
r the latent θt parameter from the paths of the observable signal process St, and then use the posterior probabilities, together with the current signal and inventory, to find the optimal trading action. As a third benchmark case, we also consider the case where the filtering part forecasts the next value of the trading signal, instead of the posterior probabilities, which is then used as feature in the part of the algorithm responsible of the trading action. In these last two settings the filteri-
ng and optimal trading are performed separately. Moreover, the setting where posterior probabilities are initially learned requires the knowledge of the true state of the latent process, a characteristic that is typically not available in real settings. From an architectural point of view, we employ a Gated Recurrent Unit (GRU) network (introduced in Cho et al. 2014). The GRU network is a Recurrent Neural Network able to to encode time dependency and thus deal with time series. One could also empl-
oy, e.g., long-short term memory processes or selfattention and other variants. To approximate the optimal trading policy we employ, as anticipated, Deep Reinforcement Learning, more specifically we use a Deep Deterministic Policy Gradient (DDPG) algorithm, first introduced by Lillicrap et al. 2015, which employs an Actor-Critic approach. The algorithm makes use of two distinct neural networks, an Actor network π that is responsible to choose the action to perform, based on the state of the enviro-
nment, and a Critic network Q that evaluates the ‘quality’ of the action chosen using the network π given the state of the environment. For each of the algorithm proposed we train the RL agent over a number N of training episodes. In our setting, the agent is tasked with the objective of maximising the rewards obtained by rebalancing the inventory holdings I as defined in Eq. (4). The agent’s actions consist of the new level of inventory to be held. Thus, the agent seeks to learn the optimal rebal-
ancing their level of inventory depending on the signal process St. After the N trading episodes we test what the agent has learnt by feeding other M episodes, where the agent trades using the policy learnt during the training phase.
3.1 States, environment, actions, and rewards
While training, the agent may be at some time t with an inventory It and must decide how much inventory to hold at time t + 1, i.e., It+1. The agent has access to the signal value at that time St and to the t − W past observations of the signal, where W + 1 is the length of the signal window, which we denote {Su}t−W
u=t . A visual representation of the information available to the agent is shown in Figure 1. These features/information are used to train an agent to optimize their sum of discounted rewards using a GRU network and two variants of the DDPG algorithm — i.e., we consider two approaches to the joint problem of filtering the signal and finding the optimal trading strategy employing this set of information about the environment available to the agent.
4

For training purposes, we simulate batches of size b of time series for the signal {Su}t+W +1
u=t (i.e., signal
time-series of length W + 2) and inventories It. Inventories It are randomly sampled as It ∼ U[Imin,Imax].3 For the signal, we simulate the time series of the signal St of length W + 2, with parameters according to the setting being considered. The starting value for the signal’s time series simulation is St−W ∼ N (μinv, 3 σinv) where σinv = σ
2κ which is the invariant volatility for the Ornstein-Uhlenbeck process with
time varying parameters in Eq. (1), while μinv is the invariant mean of the trading signal4.
Time
Signal Value
t−W t t+1
St
St+1
{Su}t−W
u=t
Figure 1: Information about the signal that can be used by the agent. The agent finds itself at some time t, has access to the past values of the signal from time t back to time t − W and decides how much inventory to be held at time t + 1.
In the testing phase, where we assess the trading policy learnt by the agent, we assume that the agent trades over a time-window of n time-steps. We assume that the agent starts their trading at time t = 0 and has access to information on the past W values of the signal S. As time t progresses, the agent uses the observations of the signal from time t back to time t − W , in a rolling window fashion, to decide the inventory to be held at time t + 1. The agent can hold inventories within the interv-
al I ∈ [−Imax, Imax] and we always start the testing episodes of trading with S0 = 1 and I0 = 0. As mentioned, we employ two main approaches: In the one-step approach we set the states, or information about the environment, available to the agent as tuples of (St, It, ot). Here St is the signal value at time t, It is the value of the inventory held at time t, and ot is the output of a Recurrent Neural Network that takes as input a collection {Su}t−W
u=t of past values of the signal from time t − W up to time t (see below for more details). In the two-step approach we decouple the filtering from the optimal trading task and consider two different settings. In the first setting, we first train the algorithm to learn the regimes from the past and current value of the signal. Specifically, the posterior probabilities Φt,k := P(θt = φk|{Su}t−W
u=t ) and k = 1, 2, 3 are learnt offline using a GRU network followed by a feed-forward network with soft-max activation output layer (to provide estimates of the posterior probability of the regime based on the historical price signal). Then the DDPG uses the tuple (St, It, {Φt,k}k=1,2,3) as features to learn the optimal trading. In the third setting, we first train the algorithm to forecast the next value of the signal S ̃t+1 and then the DDPG takes as input features the tuple (St, It, S ̃t+1). -
The action that the agent can take at each time step t consists of a rebalancing of her inventory, which can be a long (It > 0) or short (It < 0) position, and is chosen according to the algorithms described below. As a constraint, we impose that at each time, the agent holds It ∈ [Imin, Imax], i.e. the actions that can be chosen limit It between a maximum and a minimum inventory. After the action has been taken by the agent in a state of the environment at time t, the reward is calculated conside-
ring the subsequent change in the signal process and measuring the gain obtained by the agent trading. The reward used is given by Eq. (4). In all algorithms, we let the agent explore a wide range of combinations of inventory holdings It and possible St values or, in the case of the two-step procedures, multiple combinations of states (It, St, Φt,k)
or (It, St, S ̃t+1). This is done through an exploration-exploitation scheme. Thus, during the learning procedure, the agent employs randomized actions, which is a randomized perturbation of the current
3Where U is the uniform distribution. 4In the settings where σ and κ are time varying in order to compute the initial value of S0, we choose the minimal value according to the regimes used.
5

policy, the exploration process controlled by an exploration parameter ε that decays as the training unfolds.
3.2 The one-step approach
To approximate the optimal strategy for Problem (P1) when the dynamics of the trading signal are described by Eq. (1) with regime switching parameters, we first propose a one-step procedure that employs the signal’s past history as part of the state of the environment that feeds into a DDPG algorithm, employing the Actor-Critic approach. To account for the time dependency of the trading signal, we encode this information using a GRU network whose output is then fed into the DDPG algorithm. A direc-
ted graph representation of the one-step approach is reported in Fig. 2.
0
St−W
GRU
GRU
h0
St−W +1
GRU
GRU
h1
St−W +2
GRU
h2
GRU
St
GRU
GRU
hW
Q − FFN
π −FFN
It+1 Q
It
Figure 2: Directed graph representation of the neural network architecture for the one-step architecture. In the figure dl = 2.
3.2.1 The training loop
The algorithm is trained over N iterations, for each iteration we sample b batches of input data that are used to train the algorithm. In each iteration, both the Agent and the Critic network are updated by feeding to the networks independent batches of states of the world represented by a matrix F ∈ Rb×(W +2),
where each of the b rows contains a tuple of the form ({Su}t−W
u=t , It).
The GRU network. The architecture, shown in Figure 2, is composed by dl × (W + 1) GRU units, where dl is the number of layers. The units of the first layer receive input from the data, whereas the subsequent layers receive the hidden states generated by the previous layers. For each iteration m = 1, ..., N the data are contained in the sub-matrix Z ∈ Rb×(W +1) of F containing the past and present W + 1 observations of S, which will be encoded using a GRU network. The GRU has fewer parameters than -
the LSTM (which has three gates), leading to lower memory consumption and faster training, making it suitable for integration in larger learning architectures. The GRU iteratively applies a function to the input sequence {Su}t−W
u=t . For the first layer of GRUs,
at each time step k ∈ {0, W } of the input sequence, for each column Zk ∈ Rb of the matrix Z and for each layer in the net, the GRU first updates the reset gate:
pk = σ(HpZk + Uphk−1 + b ̃p) (6)
The update gate is computed similarly:
zk = σ(HzZk + Uzhk−1 + b ̃z) (7)
Then, the candidate hidden state is:
 ̃hk = σ(HhZk + Uh(pk ∗ hk−1) +  ̃bh) (8)
And the final hidden state update follows:
hk = (1 − zk) ∗ hk−1 + zk ∗  ̃hk (9)
Here ∗ denotes the element-wise product and we set h−1 equal to the zero vector. The reset gate
pk ∈ Rdh allows the GRU to discard or retain past information selectively, while the update gate zk ∈ Rdh
6

controls how much of the past hidden state is carried forward. Denoting the dimension of the hidden layer with dh, we notice that Up, Uz, Uh ∈ Rdh×dh , Hp, Hz, Hh ∈ Rdh×b, hk−1 ∈ Rdh is the hidden state
from the previous time step, the bias vectors are  ̃bp and  ̃bh ∈ Rdh . Finally, σ is the hyperbolic tangent (tanh) activation function. The GRU units for subsequent layers take as input the sequence of hidden layers generated by the previous layer. In other words, the vector Zk in Eq. (6-8) is replaced by the vector hk of the previous
layer. For this reason, for the layers different from the firs one we have Hp, Hz, Hh ∈ Rdh×dh . From the GRU network we take as output the hidden state for k = W of the last layer l. Therefore the dimension of the output is ot ∈ Rb where we have added the subscript t to indicate the time index of the operations performed by the Actor-Critic part of the algorithm. The final matrix Gt ∈ R(b×3) —which is used as input to the Actor and Critic networks— contains the GRU output vector ot as well as the-
 inventory and the current signal value from the matrix F. Note that the GRU output is not used to predict the next signal value, but rather to encode the temporal dependence structure of the signal process. Before updating the parameters of the Critic network Q and of the Actor network π, we first optimise those of the GRU. To do so, we produce an estimate S ̃t+1 of the next signal by passing the final GRU hidden states through a linear layer with a LeakyReLU activation. The GRU parameters are tr-
ained by minimising the mean squared error between St+1 and S ̃t+1. The GRU parameters are therefore updated at each iteration of the algorithm, similarly to the Q and π networks, but the GRU training per iteration occurs before the training of the Actor and the Critic networks.
The Actor and Critic networks. The Critic and Actor neural networks are feed-forward nets with four and three input neurons, respectively, a number of lNN layers of dNN hidden nodes, each with SiLu activation function, in the Actor network, the final layer has tanh activation function, whose output is then scaled by Imax. As we are not assuming any initial or final inventory goals or penalties, in our DDPG implementation, while training, we choose not to keep memory of the states that the agent ha-
s visited during training. Rather, we feed randomly generated initial states of the world in order to let the algorithm explore as many states as possible, as discussed in Sec. 3.1. This is done to provide the agent with as many different states as possible when training. Moreover, since we do not consider any form of permanent impact generated by the agent when trading, the buy and sell actions performed by the agent have no direct effect on the signal process, and therefore no memory needs to be-
 kept. At the beginning of the training loop we initialise the networks π, Q with random weights μπ, μQ. As training unfolds, (μπ, μQ) → (μ∗π, μ∗
Q), where (μ∗π, μ∗
Q) are the optimal weights that correspond to the optimal policy that maximises the the sum of discounted rewards. During training the Q network, in order to avoid an overestimation of the Q-values for the considered state-action pairs, we use a Qtgt network that is initialised at the beginning of the training routine as a copy of the Q network with weights μQtgt = μQ, thus employing double deep Q-learning for the Critic part of the algorithm, the weights of the μQtgt are then periodically set equ-
al to μQ. In order to do so, we have adopted the soft update technique as described in the original DDPG paper by Lillicrap et al. 2015, with the soft update parameter set to 0.001.
The Critic network. For each training iteration, we train a Critic network Q. To this end, we add an additive exploration zero mean noise to the output of the Actor network π (whose training is described below), whose variance declines at each iteration5. The additive noise, ε, helps the Actor neural network to explore the range of inventory holdings to be held depending on the state. Thus, while training the Q network, It+1 = π(Gt|μπ) + N (0, ε), where π(Gt|μπ) is the output of the Actor network.-
 Clearly, as the training unfolds and ε becomes smaller, the exploration noise diminishes and the policy chosen by the network π becomes deterministic. In this way, given the weights μ∗π, found at the end of the training, the Critic network directly maps a state into an action such that:
I∗
t+1 = π(Gt|μ∗
π) (10)
Once the new level of inventory is obtained, it is used to calculate the reward for each state in the batch as in Eq. (4).
5Specifically, at the learning loop start we set a > 0 and εmin < a Then, for each train iteration m ∈ {1, N } we set ε = max(a/(a + m), εmin). In this way, the more we iterate in the learning routine the lower the ε value. ε is then used as an additive noise in the Actor-Critic architecture used in both the learning algorithms.
7

To train the Q network, we update the weights μQ such that μQ = arg minμQ L1(μQ; μQtgt ), by taking a single gradient step on the loss
L1 = 1
b
b
∑
i=1
(Q(G(i)
t , I(i)
t+1|μQ) − y(i)
t )2 (11)
y(i)
t = r(i)
t + γQtgt(G′ (i)
t+1, π(G′ (i)
t+1|μπ)|μQtgt ) (12)
where the superscript i indicates the i-th row of the matrix Gt and G′t ∈ Rb×(W +2) is the matrix of
inputs G′t+1 = (ot+1, St+1, It+1), where ot+1 is obtained by passing to the GRU network the series of
{Su}t−W +1
u=t+1 of past values of the signal from time t − W + 1 up to time t + 1. The weights of the Critic network μQ are then updated using gradient descent. Within the training loop we iterate this training process for the Critic network a number l of times in order to explore the space of actions given the states more thoroughly, in order to obtain better estimates for the Q-values.
The Actor network. For each training iteration we train the Actor network π, which is the neural network responsible for choosing the action It+1. To do this, we feed the π network with a batch of b states Gt. The π network returns a new level of inventory to be held It+1, which is in turn fed to the Critic Q network, along with the state Gt. The output of the Q network is the Q value which is maximized during training. Specifically, the weights μπ of the Actor network are found by maximizing the -
output of the Critic network with fixed weights μQ. As before we perform a single gradient step to minimise the loss:
L2 = − 1
b
b
∑
i=1
Q(G(i)
t , π(G(i)
t |μπ)|μQ) (13)
where π(G(i)
t |μπ) is the output of the Actor network with current weights μπ. The weights μπ are updated using the policy gradient theorem. The derivative of the loss function L2 with respect to the weights of the Actor network is:
∇μπ L2 = − 1
b
b
∑
i=1
[
∇aQ(G(i)
t , a(i)|μQ)|a(i)=π(G(i)
t |μπ)∇μπ (G(i)
t |μπ)
]
(14)
where the first part in the square brackets tells us how sensitive the Q network is to changes in the action chosen by the Actor π, this is the gradient of the Q-value with respect to the action and evaluated at the action suggested by the Actor network, in this context for ease of notation we use a(i) = I(i)
t+1 to denote the action for the i state among the b considered in the batch. The second part inside the brackets is the gradient of the the actor’s policy and accounts for how much the action It+1 changes with respect to changes in the π network parameters. We update the weights for the π network with gradient descent. We repeat this training routine a number l of times in order to assess how the quality of the actions chosen by the Actor changes and, in this way, to thoroughly explore weights co-
mbinations for the π network. The complete training algorithm for both the Critic and the Actor neural networks is reported in Algorithm 1. Both the Actor and the Critic neural networks are feed-forward fully connected neural networks, for the gradient descent we use the Weighted ADAM optimiser with a scheduler. The features for the DDPG algorithm are normalised in the domain [0, 1]. Relevant parameters for the networks and the market model are reported in Table 1. We will refer to this model as h-
id-DDPG throughout the paper.
3.3 The two-step approach
To approximate the optimiser of Problem (P1) when the trading signal follows the dynamics in Eq. (1) with regime switching parameters, we further propose a two-step procedure in two different setups. For the first setup, in the first step, we approximately solve the filtering problem, aiming at estimating the posterior probability of being in one of the regimes of θt. In the second step, we approximate the optimal trading policies that use the estimated posterior distribution as an additional feat-
ure. These estimates,
8

together with the signal St and the inventory level It, constitute the features used in the RL algorithm. The directed graph representation of the training for this algorithm is reported in Figure 3. In the third setup we repeat the procedure but, instead of filtering the posterior probabilities for the θt regimes,
we train a GRU to obtain estimates of the next value of the trading signal, i.e. S ̃t+1, we will use this estimate along with the signal St and the inventory level It as features to the DDPG algorithm. The directed graph representation of the training for this algorithm is reported in Figure 4. The DDPG step for both the two-step procedure remains the same, except for the set of features used, as discussed at the end of Sec.3.1.
3.3.1 First-step: regime filtering with classification
Concerning the first step, we approximately solve the filtering problem, aiming at estimating the posterior probability of being in one of the regimes for θt. Further, we approximate the optimal trading policies using the estimated posterior distribution as an additional feature.
0
St−W
GRU
GRU
h1
St−W +1
GRU
GRU
h2
St−W +2
GRU
h3
GRU
St
It
GRU
GRU
hW g − F F N
p1 p2 p3
Q
It+1
Q−FFN π −FFN
Figure 3: Directed graph representation of the neural network architecture for the two-step architecture with regime filtering.
In this setup, we provide a deep learning approach to estimate the probability that θt is in one of the regimes, conditional on the history of the path of the signal process S. That is, we aim to find an approximation Φt,k := P(θt = φk|(Su)u≤t) ≈ gk (St, . . . , St−W ) , k = 1, 2, 3 (15)
The vector valued function g(·) = (g1(·), g2(·), g3(·)) is approximated as an Artificial Neural Network (ANN) with W being the look-back window used. The input, {Su}t−W
u=t , to the ANN g(·) is a sequence of trading signals that goes from time-step t backwards to time t − W . Once again, as the signal St is a time series, a natural choice is to employ RNNs in the approximation consistently with the one-step method outlined in Sec. 3.2 — specifically, we employ a GRU network as our function approximant g(·). On top of the GRU architecture, we nest additional fully connected layers to return the probability for the signal St to be mean reverting to a specific regim-
e θt ∈ {φ1, φ2, φ3}. More specifically, the last hidden state is passed to a second architecture equipped with additional fully connected layers. In each hidden layer of the fully connected neural net we apply the Sigmoid Linear Unit (SiLu) activation function to add non-linearity. In the end, since this is a classification problem, we use the SoftMax activation function to retrieve the probability P (θt = φj|{Su}t−W
u=t
). The loss used to train the architecture is the categorical cross entropy. The parameters for the GRU and the additional layers are reported in Table 1.
3.3.2 First-step: regression setup
As a point of comparison we develop a third setup to the two-step procedure. In this third experiment, instead of approximating the probability of being mean reverting at each of the regimes of θt, the first step consists in training a GRU net on a regression problem to directly estimating the next value for the trading signal, i.e. S ̃t+1. Similarly as in the filtering problem, in order to obtain the next value estimate, we provide as input to the GRU g(·) a sequence {Su}t−W
u=t . The architecture of the GRU net remains the same but the last layer has SiLu activation function and we minimize the loss consisting of the squared error between the estimate S ̃t+1 and the actual next value of the trading signal St+1.
9

0
St−W
GRU
GRU
h1
St−W +1
GRU
GRU
h2
St−W +2
GRU
h3
GRU
St
It
GRU
GRU
hW S ̃t+1
Q
It+1
Q−FFN π −FFN
Figure 4: Directed graph representation of the neural network architecture for the two-step architecture with price prediction.
3.3.3 Second-step: optimal trading
Once training in the first-step is completed, and the GRU models are trained for either of the setups in 3.3.1 or 3.3.2, we consider the problem of a risk neutral trader who maximises the expected discounted profits from trading. We assume that the agent re-balances the inventory according to the level of the observed trading signal and on their current inventory in order to maximise the rewards obtained from trading. To do so, we again model the agent with a DDPG algorithm similarly as in Sec. 3.-
2. Hence, for the optimal trading part of the algorithm we again adopt an Actor-Critic approach where we make use of two distinct neural networks, an Actor network π that is responsible for choosing the action to perform, based on the state of the environment where the agent is, and a Critic network Q that critically evaluates the ‘quality’ of the action chosen using the network π given the state of the environment. This is analogous to the one-step procedure with the important difference that, in-
 the regime filtering approach, the posterior probabilities estimates on the current mean reversion regime θt are added to the feature set and the model that approximately solves the filtering model is trained in the previous step, while in the regression approach the estimate for the next value of the trading signal St is added to the set of features fed to the RL agent. Hence, the first setup (and second method proposed) of the two-step approach is termed prob-DDPG and makes use of features Gt =-
 (St, It, Φt,k) for the DDPG part, while the second setup (and third
method overall) is termed reg-DDPG throughout the paper, and employs Gt = (St, It, S ̃t+1) as features to the DDPG. For the DDPG part we again set both Actor and Critic ANNs to be feed-forward fully connected neural networks as in the one-step approach. For the gradient descent steps we use the Weighted ADAM optimiser with a scheduler. The features of the DDPG algorithm are normalised in the domain [0, 1]. The relevant parameters for the networks and the market model are reported in Table 1.
10

4 Results
Figure 5: Comparison of the cumulative rewards for the different DDPG approaches when θt is a Markov chain.
We now test the capabilities of the approaches outlined above on synthetic data and for increasing levels of complexity for the data generating process as defined in Eq. (1). To this end, as anticipated, we test our algorithm on environments where just θt is a Markov chain, where θt, κt are independent Markov chains, and finally, for the most complete case, where θt, κt and σt are modelled via independent Markov chains. We employ both the two-step approaches and the one-step approach over a set of-
 testing episodes, and then we subsequently compare the results, in terms of cumulative rewards, obtained by employing the trading strategies found by the DDPG agent. In the testing phase, we compute the total reward for each of the M testing episodes as Rn = ∑n
t=1 rt
where n is the number of time steps in each iteration M where the agent trades and rt is as defined in Eq. (4). For each experiment, we report the average and the standard deviation of the cumulative rewards over the M test iterations. Clearly, the method that shows a higher average reward is the one that delivers the best optimal trading policy for the analysed problem. The simulation parameters for each experiment are reported in Table 1. The transition rate matrices for the time varying paramet-
ers
are Aθ =


−0.1 0.05 0.05 0.05 −0.1 0.05 0.05 0.05 −0.1

, Aκ =
[−0.1 0.1 0.1 −0.1
]
and Aσ =
[−0.1 0.1 0.1 −0.1
]
.
4.1 θt is a Markov chain
In the first experiment we test the performance of our approaches in the case when only θt while κ, σ are constant. In this case we allow the parameter of mean reversion to be θt ∈ {φ1 = 0.9, φ2 = 1, φ3 = 1.1}. The results of this, as well as of the other, settings are summarized in Table 4 and in Figure 5. By considering first the one step hid-DDPG approach, we notice that feeding the hidden states of a GRU network, trained along with the DDPG algorithm, provides the actor network with a policy c-
apable of generating, on average, positive cumulative rewards. Therefore, GRU hidden states provide valuable information to the DDPG algorithm, helping the Actor network in finding policies which exploit the coded information of the parameter state.
11

Table 1: Simulation parameters for the three experiments and the for the DDPG algorithm.
DDPG parameters lr= 0.001 μinv = 1 train eps. N = 10, 000 b = 512 Imax = 10 λ = 0.05 l = 5 l = 1 test eps. M = 500 Imin = −10 a = 100 ∆t = 0.2, n = 2, 000 hid-DDPG prob-DDPG reg-DDPG lNN = 4 dNN = 20 lNN = 5 dNN = 64 lNN = 5 dNN = 64
Simulation parameters MC pmt. θ κ σ layers hidd. nod.
θt {0.9, 1, 1.1} 5 0.2 5 16 θt, κt {0.9, 1, 1.1} {3, 7} 0.2 5 20 θt, κt, σt {0.9, 1, 1.1} {3, 7} {0.1, 0.3} 6 20
Table 2: Parameters used in the GRU algorithm for the two-step approaches.
GRU parameters in the prob-DDPG and in the reg-DDPG two-step approach NN layers dl = 5 N train eps. 10, 000 Hidden nodes dh = 20 W-ADAM lr 0.001 W = 10 prob-DDPG (W = 50 reg-DDPG) Predict window 1 Linear layers parameters
NN layers 5 Hidden nodes 64
Considering the rewards obtained by the two step prob-DDPG approach, which first learns to map signal to posterior probabilities and only afterwards learns the optimal trading, we notice that it generally outperforms the one-step approach in terms of cumulative rewards. This is not surprising, since the twostep approaches have the great advantage of separating the learning from the optimization phase, while in the one-step setting these tasks are performed contemporaneously. In practical setting, -
the two-step procedure might not be feasible as many training episodes are necessary for this task. However, the two-step approach does not always outperforms the one-step algorithm. In fact, considering the two-step reg-DDPG approach, where we first train a GRU network to predict the value of the signal S at time t + 1, we can notice that the average rewards although still positive, are significantly lower than those obtained with the one-step hid-DDPG. We postulate that this effect on rewards is-
 due to the difficult task of predicting the exact next value for the signal without information about the regimes of mean reversion. We now investigate in more details the action chosen by the different approaches. The actions chosen by the Actor network are reported in the left column of Fig. 13a, 13b and 13c of the Appendix A, for the three approaches used. Considering the first column of Fig. 13a—which corresponds to the hid-DDPG approach under a Markovian evolution of θt—the inventory rebalan-
cing actions, qt = It+1 − It, appear highly clustered, indicating a strong preference for a limited set of trading decisions. Some actions qt appear counter-intuitive with respect to the levels of the observed inventory and signal. For instance, the policy sometimes suggests selling when the signal St is low and the inventory It is positive. The opposite also occurs: buying when St is high and It is low. In both cases, some rebalancing decisions still manage to exploit signal values. However, inte-
rpreting the resulting trading strategy is difficult, as the GRU hidden states—used as input features—encode relevant information about the signal process, but in a form that is largely non-interpretable. Focusing on the prob-DDPG policy in the first column of Fig. 13c, we observe that buy and sell actions are predominantly concentrated on the left and right sides of the heatmap, respectively. This points out to the fact that the agent is more likely to buy when the trading signal St is low, and t-
o sell when it is high. In the scatter plots on the last row, buy and sell decisions tend to overlap at similar levels of inventory It, suggesting a more nuanced policy that takes into account the underlying regimes. The intuition is that providing the posterior probabilities of the latent state θt allows the agent to better condition its actions on the most likely regime, the current signal St, and the inventory level It. This is illustrated in greater detail in the first row of Fig. 14, where ac-
tions are shown as a function of St and It, conditional on the posterior distribution. The shades of yellow represent the probability that St is mean-reverting to a specific long-run average, as estimated by the GRU network trained in the first step. The colour of the border of each point indicates whether the action qt corresponds to a buy or a
12

Table 3: Parameters used in the GRU algorithm for the one-step approach.
GRU parameters in the hid-DDPG one-step approach
NN layers dl = 1 Hidden nodes dh = 10 Look-back window W = 10 W-ADAM lr 0.001 GRU parameters in the hid-DDPG one-step approach (θt, κt, σt MCs)
NN layers dl = 2 Hidden nodes dh = 10 Look-back window W = 10 W-ADAM lr 0.001
Table 4: Average cumulative rewards and their standard deviation after n = 2, 000 trades from the M = 500 test episodes of trading for each approach used and for each data generating process employed.
θt MC θt, κt MCs θt, κt, σt MCs Model rewards Ave. Std. Ave. Std. Ave. Std. hid-DDPG 15.70 1.39 8.08 1.54 1.29 3.49 reg-DDPG 8.69 0.60 2.95 0.30 -0.07 0.11 prob-DDPG 25.65 3.35 15.59 3.83 4.51 3.75
sell, given the current inventory level It and signal St. Since the trading action depends heavily on the expected mean-reversion level of St, the posterior distribution vector Φt provides crucial information. For instance, looking at the state probability of θt in the figure we see how, even if the level of the signal is low, when the agent is long on the signal and the probability of mean reverting to θt = 0.9 is high, the agent is going to mostly sell. Conversely, in the lower part of the plot,-
 where the agent is likely short and the signal is expected to revert upwards, the policy favours buying. Finally, the reg-DDPG policy (first column of Fig. 13b) appears to be less clustered around very few values for It, the sell/buy actions seem more reasonable with respect to the various combinations of signal and inventory, meaning that when the signal shows low values and the inventory holdings are low as well, the policy found suggests to the Actor to buy taking advantage of the estimated ne-
xt value of the signal with respect to the actual value of the inventory holdings, contrary to the hid-DDPG case.
13

4.2 θt, κt are Markov chains
Figure 6: Comparison of the cumulative rewards for the different DDPG approaches when θt and κt follow a Markov chain.
We now consider the case where the speed of mean reversion, κt, in Eq. (1) is also modeled as a Markov chain, which is is independent of the Markov chain governing the dynamics of θt. In this setting, employing the hid-DDPG approach delivers rewards that are positively distributed across the test episodes, as reported in Fig. 6. Table 4 shows that the average reward now is lower than the one obtained with the dynamics where only θt follows a Markov chain. This is expected since now the parameter d-
ynamics is more complicated. Considering the reg-DDPG approach, it can still be noticed that the rewards, although positive, lie on average below those scored by the hid-DDPG approach. This is again due to the more complex signal’s dynamics that the agent is trading, and as before the difficulty of predicting the next trading signal value persists, and appears to be stronger in this case due to the non-constant nature of the κt parameter. When the prob-DDPG approach is used, the algorithm scores l-
ower average rewards than in the previous case, that was less complex, but the average rewards are still higher than those obtained with the other two approaches, as it can be noticed in Figure 6. Analysing the actions chosen by the Actor network per level of inventory It and trading signal St in the second column of Fig. 13a, 13b and 13c for the three approaches used it can still be noticed how the policies do change with respect to the type of information provided to the DDPG part of the approac-
hes. In fact, it is evident how, for the reg-DDPG and for the hid-DDPG, in Fig. 13b and in Fig. 13a respectively, the actions employed and the subsequent new levels of inventory seem to be clustered around some of the levels of inventory It, thus the inventory holdings do not span much over the allowed inventory domain, [Imax, Imin]. We postulate that this partly leads to the lower rewards obtained, as it can be noticed in Fig. 6. When looking at the policy chosen by the prob-DDPG in Fig. 13c, it -
can be seen how the inventory holdings are more sparse, meaning that providing information on the data generating process’ mean reversion level under the form of posterior probabilities on the regimes is more beneficial. In this case we can associate an interpretation to the policy adopted by the RL agent. In fact, in the second row of Fig. 14 it can be understood how the policy of buys and sells qt does change both with respect of of St and It and with respect of the probability of being mean rev-
erting to either of the regimes, now with two different speeds of mean reversion κt. Clearly, in neither of the approaches we do provide information on the speed of mean reversion, but it seems to be more beneficial to provide circumstantial information on the θt values if κt follows a Markov chain, rather than providing
14

hidden states or estimates for the next value of the trading signal, from both a cumulative reward and an interpretability point of view.
4.3 θt, κt and σt are Markov chains
Figure 7: Comparison of the cumulative rewards for the different DDPG approaches when θt, κt, and σt follow a Markov chain.
In the last and most complex experiment we allow also the volatility of the signal to transition between two regimes, a high and a low volatility regime, as reported in Table 1. The Markov chain that models the transition between the two regimes is independent from those of the other parameters θt and κt. From the average cumulative rewards reported in Table 4 we see that, once again, the prob-DDPG outperforms the other two approaches. Overall, we notice how average rewards of the reg-DDPG approac-
h are near zero, although slightly negative. We postulate that the inefficiency of a DDPG policy based off of information on the next signal level comes from the lower informative content that such an estimate can provide in a complex environment. The standard deviation for the rewards in this case is very low, but this depends on the policy adopted by the agent trained with such a two-step approach. Comparing both the results reported in Table 4 and in Fig. 7 with the policy in Fig. 13b, we see t-
hat actions qt, compared with Imax, are small and that inventory levels It change very little as the signal St changes. This explains the small reward variability: the agent trades very cautiously, which reduces volatility in outcomes but also limits the overall rewards. Moving to the hid-DDPG approach, Table 4 and Fig. 7, we see that, that hid-DDPG underperforms compared to the prob-DDPG while over performing with respect to the reg-DDPG in terms of rewards. This is to be expected, as the environ-
ment has now become even more complex. The trading policy employed by the DDPG agent is still on average positive, meaning that the hidden states of the GRU network provided to the DDPG part of the approach are still informative, although less interpretable. As shown in Fig. 13a, the actions chosen by the agent are of a higher magnitude if compared to those of the two other approaches, this translates into a trading policy that still produces positive cumulative rewards on average, although lower -
than those obtained using the prob-DDPG. Turning to the prob-DDPG approach6, the average cumulative rewards form the trading policy are
6In this case we have set the look-back window to W = 20.
15

indeed lower in this more complex environment if compared with those obtained by the same approach in the other two simulative set-ups, however, they still remain higher than the other two approaches in this particular set-up, as reported in Table 4. Interestingly, the standard deviation does not change much over the course of the three different experiments for this approach. Once again, we conclude that first learning the probability of the regime helps the DDPG algorithm choose policies with h-
igher rewards. Due to the interpretability of this learnt feature, we can investigate how the prob-DDPG approach takes advantage of the θt regime knowledge and chooses buy/sell actions not just based on the current level of St and It but on the regime probabilities, as displayed in Fig. 14 and in Fig. 13c.
5 Pair trading application
Having seen how the three approaches behave with synthetic data, we now turn to testing them on real market data. We focus on the problem faced by an agent whose goal is to trade two co-integrated assets; the classical pair trading framework. We thus train a RL agent, using real high-frequency mid-price data, to trade according to a co-integration signal. The signal is, roughly speaking, the process made by a portfolio of the two assets under consideration. The goal is to assess which method produ-
ces higher rewards when exposed to real market conditions. At the same time, it allows us to investigate how the balance between flexibility and the specificity of the information provided to the agent, affects the overall performance of the RL algorithms used. For these experiments, we apply a methodology similar to the one in Cartea, Jaimungal, and Penalva 2015 to obtain the parameters for the model and Chan 2013 to obtain the benchmark Z-score strategy.
5.1 Dataset, preliminary data analysis and market model
We consider two assets traded on the NASDAQ between the 29th of August 2025 and the 5th of September 2025, the Intel (INTC) stock and the Merril Lynch semi-conductors ETF (SMH) whose holdings are around 20% composed by INTC shares. We use high frequency observations of the limit order book for both the assets, downloaded from the LOBSTER database, we consider data up to the first level of the order book and we select only trade events, so that each element considered in the time series represents -
a transaction. Then, calculate the mid-price and filter the mid-prices at a frequency of 1 second, such that we have a clean dataset that displays prices at even intervals of time. Both time series are displayed in Fig. 8.
2025-08-29 2025-09-02 2025-09-03 2025-09-04 2025-09-05 Date
23.8
24.0
24.2
24.4
24.6
24.8
25.0
INTC midprice
282
284
286
288
290
292
294
296
SMH midprice
Mid-price (SMH vs INTC)
Figure 8: Mid-prices for SMH and INTC, prices are intended in US dollars.
We test the two assets for co-integration using Johansen test statistics, the results are reported in Table 6. We see that both tests indicate strong evidence of at least one co-integrating vector. Meaning that there exists at least one stationary linear combination denoted with:
S ̃t = α1Ssmh
t + α2Sintc
t (16)
16

Table 5: Johansen Co-integration Test (5% level)
r Trace Stat Crit Reject Max-Eig Stat Crit Reject
0 27.456 18.399 Yes 19.222 17.148 Yes
Table 6: Trace statistic, maximum Eigenvalue statistic and their critical values of the Johansen test for co-integration. The H0 is no co-integrating vector.
Notice that the process S ̃t is a linear combination of the assets prices. We assume that the dynamics for this portfolio can be modelled as:
dS ̃t =  ̃κ(θ ̃ − S ̃t) dt + σ ̃ dWt, (17)
so that the linear combination of the two time series of mid-prices is stationary. We use as a portfolio S ̃t where the amount of assets held are fixed at α1, α2, given by the co-integrating coefficients. We adjust the level of stocks held in the co-integrating portfolio but keep the ratio fixed at a ratio of α1, α2. The book-value of the portfolio at every time-step t is therefore
BVt = It
(α1 Sintc
t + α2 Ssmh
t
).
First, we retrieve the co-integrating coefficients. To this end, we fit a Vector AutoRegressive (VAR) model of the form ∆St = ⃗A + B∆St−1 +ε⃗ t .
That is a discrete time version of the model in Eq. (1) where St = [Ssmh
t , Sintc
t
] are the mid-prices of
INTC and SMH, ⃗A is a vector of constants, B is matrix of constants andε⃗ t is a vector of white noise, ∆St denote the mid-prices change at each time-step. The estimated parameters are reported in Table 7.
Table 7: VAR Model Coefficients at 1% significance.
BA
∆St−1,SMH ∆St−1,INTC
∆St,SMH 0.999(∗∗∗) 0.00001 0.021 ∆St,INTC 0.0007 0.996(∗∗∗) 0.003
From these estimates, we may estimate the coefficients in Eq. (17), and thus obtain the co-integrating coefficients for S ̃t, assuming ∆t = 1.
κ = (I − B)/∆t =
[ 1.40 · 10−04 −1.52 · 10−05 −7.78 · 10−04 3.05 · 10−04
]
,
θ ̃ = κ−1 ⃗A∆t =
[287.77 24.183
]
,
κ = U −1ΛU
Λ=
[8.67 · 10−05 0 0 3.59 · 10−4
]
.
(18)
Having estimated the parameters that describe the dynamics outlined in Eq. (17) we now find two possible candidates for S ̃:
S ̃ = U −1S =
[−2.960 −0.205 2.856 −0.804
]
S . (19)
Where S is as before. The coefficients in the second row of U −1 are the co-integrating coefficients that correspond to the highest eigenvalue in the matrix Λ. This means that a portfolio with these coefficients will be the most exposed to mean reversion. Thus, the portfolio we will focus on is
S ̃t = 2.856 × Ssmh
t − 0.804 × Sintc
t (20)
and use S ̃t as the asset to be traded, keeping fixed the weights in Eq. (20).
17

2025-08-29 2025-09-02 2025-09-03 2025-09-04 Date
0.0
0.2
0.4
0.6
0.8
1.0
St
Regimes according to Hamilton (1989) for St - Normalised train set
Series St - normalised Estimated Regime Regime 0: 0.2216 Regime 1: 0.5658
Figure 9: Normalised time series for the training phase of the co-integrated portfolio S ̃t and the most probable regimes at each time step.
09:30:00
11:01:10
12:40:44
14:18:51
15:59:59
2025-09-05 (Hours)
0.6
0.7
0.8
0.9
1.0
St
St - Normalised test set
Series St - normalised
Figure 10: Normalised time series for the testing phase of the co-integrated portfolio S ̃t.
We divide the time series for S ̃t into two sets: a training set (Fig. 9) and a testing set (Fig. 10). The training set is composed by the observations up to the 4th of September and the testing set are the observations on the 5th of September. In this way, we train the agent on almost a week of data and then test the trading performance over one day, the 5th of September. We normalise the S ̃t series using
min-max normalization over the training set7 and we then estimate two possible regimes for S ̃t over the training set, following the procedure outlined in Hamilton 1989, Chapter 22. Following this procedure we find that the two regimes are θ1 = 0.2216 and θ2 = 0.5658. Fig. 9 reports the most probable regime at each time-step.
5.2 Trading experiments
Based on the results on synthetic data we now employ the approaches that performed the best in the case of θt, κt σt modelled as Markov chains, as that was the most complex environment. We thus tackle the pair trading problem with both the hid-DDPG approach and the prob-DDPG approach. The parameters used for the simulations are reported in Table 8 for the DDPG part of the model, while for GRU part of the algorithm we keep the parameters as in the case for θt, κt σt modelled as Markov chains for bo-
th of
7The reason is twofold, on the one hand with normalised data Hamilton’s procedure is more numerically stable, on the other hand we will feed the normalised series to the algorithms that require normalise data.
18

the approaches. During training the {S ̃u}t−W
u=t fed to the GRU and both to Actor and the Critic networks are randomly picked from the training set and have, as in the simulated case above, length W .
prob-DDPG parameters train eps. 10, 000 lr = 0.001 batch = 64 γ = 0.999 Imax = 10 λ = 0.05 θ = {0.2216, 0.5658} W = 100 layers = 6 hidd. nod. = 64 train obs. = 72, 700 test obs. = 19, 789
Table 8: Parameters for the prob-DDPG algorithm.
The reward for the DDPG phase of the algorithm is the book-value of the portfolio with a transaction cost λ, thus similarly to the simulated experiments, the reward is
rt = ∆BVt − λ|It − It−1| (21)
where, as before, It is the action decided by the DDPG Actor network. We use as benchmark the rolling
Z-score trading strategy, which is a strategy where the agent accumulates units of S ̃t proportional to the negative rolling Z-Score of the portfolio itself. For the rolling Z-score computation we use the same window W = 100 as in the GRU algorithm. Thus, we compare the prob-DDPG and the hid-DDPG and the rolling Z-score strategies as reported in Fig. 11 and in Fig. 12.
0 2500 5000 7500 10000 12500 15000 17500 Seconds from market opening
1.25
1.00
0.75
0.50
0.25
0.00
0.25
0.50
Cumulative Reward
Cumulative rewards comparison - Test set
prob-DDPG Z-score hid-DDPG Mean prob-DDPG: 0.1795 Mean Z-score: -0.8432 Mean hid-DDPG: -0.2883
Figure 11: Comparison of realised cumulative rewards for the hid-DDPG, prob-DDPG and rolling Z-score strategy on the testing set.
As in Fig. 11, the prob-DDPG strategy outperforms the others in the test set by achieving the highest average reward, ultimately resulting in the highest cumulative rewards through the selected policy in this straightforward trading experiment. Indeed, Fig. 12 shows that while average cumulative rewards are positive with the prob-DDPG approach, they are negative for the other methods. Although the cumulative rewards for the hid-DDPG case are higher than those from the naive Z-score strategy, they -
remain below those of the prob-DDPG method. The average rewards, along with their standard deviations, are detailed in Table 9.
Table 9: Average cumulative rewards and their standard deviation for the approaches used. Rewards are calculated over one day of trading at a frequency of 1 second.
Cum. Rew. prob-DDPG hid-DDPG Z-score Average 0.1795 −0.2883 −0.8432 Std. Dev. 0.1329 0.1282 0.4341
19

1.25 1.00 0.75 0.50 0.25 0.00 0.25 0.50 Reward
0
200
400
600
800
1000
1200
1400
1600
Count
Prob-DDPG prob-DDPG
1.25 1.00 0.75 0.50 0.25 0.00 0.25 0.50 Reward
hid-DDPG hid-DDPG
1.50 1.25 1.00 0.75 0.50 0.25 0.00 0.25 0.50 Reward
Z-score Z-score
Rewards distribution comparison - Test set
Figure 12: Histograms of the realised cumulative rewards for the three methods used.
These findings are consistent with the outcomes from the numerical experiments discussed earlier. Consequently, leveraging the probability of transitioning into either a lower or higher regime for the portfolio S ̃t significantly helps the RL algorithm in determining the most suitable trading policy, especially when dealing with a potentially intricate and unknown data-generating process. This two-step approach enhances the interpretability of these algorithms, which are typically known as black b-
oxes and often function as data-intensive oracles that can yield inefficient solutions, as observed with the hid-DDPG algorithm applied to this issue, unless equipped with background information about the problem at hand. Therefore, we can conclude that the information provided to the agent, and especially the way in which the information is used, does matter when training a RL agent and is paramount for the effective and successful application of model-agnostic algorithms like RL architectures, e-
ven with high-frequency data with strong simplifying assumptions.
6 Conclusions
In this paper, we have developed three different DDPG algorithms to approximately solve the optimal trading problem when the trading signal is mean-reverting, and the parameters of the data-generating process are modelled as independent Markov chains. Given the sequential nature of the trading signal, we have chosen to use Gated Recurrent Units (GRUs), a specific type of recurrent neural network, to effectively process the time-dependent structure of the signal data used by the agent to trade. The-
 GRU structure and the output of these networks is then used in three different ways to train a RL agent, modelled using the DDPG framework. The trading signal is modelled as an Ornstein-Uhlenbeck process, which, in the simplest case, reverts to three distinct long-run regimes. The transitions between these regimes are governed by a Markov chain. The agent approximately solves the trading problem by leveraging information about the state of the world, which encompasses the current value of the tra-
ding signal, the inventory level, and posterior probability estimates of the most likely regime. Alternatively, the agent may rely on an estimate of the next trading signal value – computed in a previous step – or directly use hidden states extracted from a GRU network trained in conjunction with the DDPG Actor-Critic networks, thus training the GRU network along with the RL algorithm. We tested the agent’s performance in increasingly more complex environments where, along with the mean reversion -
parameter, both the speed of mean reversion and the volatility of the trading signal were governed by independent Markov chains. The numerical results show that the agent, when equipped with posterior probability estimates of the mean reversion regimes (which it learns in a first stage), achieves the highest trading rewards. This suggests that providing structured and interpretable information to a RL algorithm significantly enhances its ability to approximate solutions to inter-temporal optimisat-
ion problems. Finally, we find that these conclusions remain valid when the agent faces trading problems with real market data, when dealing with a pair trading problem for two co-integrated assets. We can conclude that when tackling optimisation problems which do not result in closed-form solutions, the quality of information provided to the RL algorithm is crucial for the quality of the solution. Although all three approaches result in a trading policy that, on average, yields either positive or-
, in the
20

worst case, close to zero average rewards across all scenarios considered, the approach that consistently works best is to first gather insights into the dynamics of the data-generating process and only then incorporate this information into the features that the agent uses in the RL algorithm. Interestingly, the type of information fed into the algorithm also appears to be a key factor. Specifically, providing estimates of the next signal values does not yield any significant improvement, sugges-
ting that it is more effective to supply general information about the process – as in the hid-DDPG approach – while ensuring that this information remains closely related to the actual parameters governing the underlying dynamics, as in the prob-DDPG approach. Indeed, the latter proves to be the most effective, delivering the highest rewards when tested on both synthetic and real data. Future research directions could be to investigate how, and by how much, the quality and the type of information-
 affects the learning process, the resulting interactions, and the eventual equilibria that might emerge in a similar setup but in a multi-agent type of problem.
References
Briola, Antonio et al. (2023). Deep Reinforcement Learning for Active High Frequency Trading. arXiv: 2101.07107 [cs.LG].
Cartea, Álvaro and Sebastian Jaimungal (2016). “Incorporating order-flow into optimal execution”. In: Mathematics and Financial Economics 10, pp. 339–364.
Cartea, Álvaro, Sebastian Jaimungal, and José Penalva (2015). Algorithmic and high-frequency trading. Cambridge University Press. Cartea, Álvaro, Sebastian Jaimungal, and Leandro Sánchez-Betancourt (2023). “Reinforcement learning for algorithmic trading”. In: Machine Learning and Data Sciences for Financial Markets: A Guide to Contemporary Practices. Cambridge University Press.
Casgrain, Philippe and Sebastian Jaimungal (2019). “Trading algorithms with learning in latent alpha models”. In: Mathematical Finance 29.3, pp. 735–772. Casgrain, Philippe, Brian Ning, and Sebastian Jaimungal (2022). “Deep Q-learning for Nash equilibria: Nash-DQN”. In: Applied Mathematical Finance 29.1, pp. 62–78.
Chan, Ernie (2013). Algorithmic trading: winning strategies and their rationale. John Wiley & Sons.
Cho, Kyunghyun et al. (2014). “Learning phrase representations using RNN encoder-decoder for statistical machine translation”. In: arXiv preprint arXiv:1406.1078. Gârleanu, Nicolae and Lasse Heje Pedersen (2013). “Dynamic trading with predictable returns and transaction costs”. In: The Journal of Finance 68.6, pp. 2309–2340. Hambly, Ben, Renyuan Xu, and Huining Yang (2023). “Recent advances in reinforcement learning in finance”. In: Mathematical Finance 33.3, pp. 437–503. Hamilton, James D. (1989)-
. “A new approach to the economic analysis of nonstationary time series and the business cycle”. In: Econometrica 57.2, pp. 357–384. doi: 10.2307/1912559. Kolm, Petter N, Jeremy Turiel, and Nicholas Westray (2023). “Deep order flow imbalance: Extracting alpha at multiple horizons from the limit order book”. In: Mathematical Finance 33.4, pp. 1044–1081. Lillicrap, Timothy P et al. (2015). “Continuous control with deep reinforcement learning”. In: arXiv preprint arXiv:1509.02971.
Millea, Adrian (2021). “Deep Reinforcement Learning for Trading—A Critical Survey”. In: Data 6.11. issn: 2306-5729. doi: 10.3390/data6110119. url: https://www.mdpi.com/2306-5729/6/11/119. Ning, Brian, Franco Ho Ting Lin, and Sebastian Jaimungal (2021). “Double deep q-learning for optimal execution”. In: Applied Mathematical Finance 28.4, pp. 361–380. Sirignano, Justin and Rama Cont (2021). “Universal features of price formation in financial markets: perspectives from deep learning”. In: Machine Le-
arning and AI in Finance. Routledge, pp. 5–15. Tsantekidis, Avraam et al. (2020). “Using deep learning for price prediction by exploiting stationary limit order book features”. In: Applied Soft Computing 93, p. 106401. Yang, Hongyang et al. (2020). “Deep reinforcement learning for automated stock trading: An ensemble strategy”. In: Proceedings of the first ACM international conference on AI in finance, pp. 1–8.
Zhang, Zihao, Stefan Zohren, and Stephen Roberts (2019a). “Deep reinforcement learning for trading”. In: arXiv preprint arXiv:1911.10107.
— (2019b). “Deeplob: Deep convolutional neural networks for limit order books”. In: IEEE Transactions on Signal Processing 67.11, pp. 3001–3012. Zou, Jinan et al. (2023). Stock Market Prediction via Deep Learning Techniques: A Survey. arXiv: 2212. 12717 [q-fin.GN].
21

Appendices
A Figures
0.8 1.0 1.2 1.4 St
10
8
6
4
2
0
2
4
It
t is MC
0.6 0.8 1.0 1.2 1.4 St
t, t are MC
0.6 0.8 1.0 1.2 1.4 St
t, t, t are MC
4
2
0
2
4
Action qt
(a) hid-DDPG
0.6 0.8 1.0 1.2 1.4 St
0.5
0.0
0.5
1.0
1.5
2.0
It
t is MC
0.6 0.8 1.0 1.2 1.4 St
t, t are MC
0.6 0.8 1.0 1.2 St
t, t, t are MC
0.2
0.1
0.0
0.1
0.2
0.3
Action qt
(b) reg-DDPG
0.6 0.8 1.0 1.2 1.4 St
3
2
1
0
1
2
3
4
It
t is MC
0.6 0.8 1.0 1.2 1.4 St
t, t are MC
0.6 0.8 1.0 1.2 1.4 St
t, t, t are MC
2
1
0
1
2
Action qt
(c) prob-DDPG
Figure 13: Value of buy and sell actions qt per level of inventory I and signal St for the different approaches used.
22

−4
−2
0
2
4
θt is MC
It
φi = 0.9 φi = 1 φi = 1.1
−4
−2
0
2
4
θt, κt are MC
It
0.6 0.8 1.0 1.2 1.4
St
−4
−2
0
2
4
θt, κt, σt are MC
It
0.6 0.8 1.0 1.2 1.4
St
0.6 0.8 1.0 1.2 1.4
St
0.2
0.4
0.6
0.8
P[θt = φi]
Scatter plots of policy on signal and inventory with different θ posterior probabilities using DDPG+GRU
Action qt:
Buy/Hold
Sell
Figure 14: Policies chosen by the DDPG agent per level of inventory, price signal St and posterior probability of mean reversion θt, when prob-DDPG approach is used.
23

B Algorithms
Algorithm 1 Deep Deterministic Policy Gradient (DDPG)
Require: W look-back window, l, l and N iteration 1: Initialise actor network π(μπ) and critic network Q(μQ) with random weights μπ and μQ 2: Initialise target network and Qtgt(s, a|μQtgt ) with weights μQtgt ← μQ 3: for m = 1 , . . . , N do 4: Obtain batches of length b of S[0,W +2] signal time series and random levels of Inventory I. 5: Initialise ε = 1 6: procedure GRU
7: Train the GRU network if hid-DDPG; 8: end procedure
9: procedure Update Critic 10: for l do
11: Receive initial observation batch F 12: Pass ({Su}t−W
u=t to GRU pre-trained and obtain {Φk}, k = 1, 2, 3) (if prob-DDPG);
13: Pass ({Su}t−W
u=t to GRU pre-trained and obtain S ̃t+1 (if reg-DDPG);
14: Pass ({Su}t−W
u=t to GRU to train if (hid-DDPG); 15: obtain G; 16: Select inventory I = π(G|μπ) + N (0, ε) according to the current policy and noise; 17: Execute action I and observe reward r; and next state G′; 18: Observe next states G′;
19: Set y(i) = r(i) + γQtgt(G′(i), π(G′(i)|μπ)|μQtgt ) ;
20: L1 = 1
b
∑b
i (Q(G(i), I(i)|μQ) − y(i))2; 21: Set μQ = μQtgt ; 22: end for 23: end procedure
24: procedure Update Actor 25: for l do
26: Receive initial observation batch F; 27: Pass ({Su}t−W
u=t to GRU pre-trained and obtain {Φk}, k = 1, 2, 3) (if prob-DDPG);
28: Pass ({Su}t−W
u=t to GRU pre-trained and obtain S ̃t+1 (if reg-DDPG);
29: Pass ({Su}t−W
u=t to GRU to train if (hid-DDPG); 30: Obtain G; 31: Get I = π(G|μπ); 32: Minimise L2 = − 1
b
∑b
i=1(Q(G(i), π(G(i)|μπ)|μQ) through gradient descent over
∇μπ L2 = 1
b
b
∑
i=1
[
∇aQ(G(i), a(i)|μQ)|a(i)=π(G(i)|μπ)∇μπ (G(i)|μπ)
]
33: end for 34: end procedure 35: Decrease ε; 36: end for
24

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:18.556Z
- **Text Length:** 74077 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 24 of 24
