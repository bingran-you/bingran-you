# PDF Document: Armstrong et al. - 2025 - Machine-learning a family of solutions to an optimal pension investment problem.pdf

**File Path:** Armstrong et al. - 2025 - Machine-learning a family of solutions to an optimal pension investment problem.pdf

**Processed Date:** 2026-02-10T18:17:29.014Z

**File Size:** 1592.97 KB

**Total Pages:** 42

**Extracted Pages:** 42

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3547

**Title:** Machine-learning a family of solutions to an optimal pension investment problem

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Machine-learning a family of solutions to an
optimal pension investment problem
John Armstrong, Cristin Buescu, James Dalby, Rohan Hobbs
Abstract
We use a neural network to identify the optimal solution to a family of optimal investment problems, where the parameters determining an investor’s risk and consumption preferences are given as inputs to the neural network in addition to economic variables. This is used to develop a practical tool that can be used to explore how pension outcomes vary with preference parameters. We use a Black-Scholes economic model so that we may validate the accuracy of network using a classical and provably conv-
ergent numerical method developed using the duality approach.
Introduction
The von Neumann–Morgenstern utility theorem implies that, under mild assumptions, an individual’s preferences at a single time can be represented by an expected utility [31]. Nevertheless, even if one accepts that utility functions provide the best available tool to model preferences, it remains difficult to identify an individual’s preferences and this is a recurring criticism in the literature [1, 28, 30]. When considering an investor’s preferences over time, the space of possible preferences is-
 still larger. We seek to provide a practical tool to assist in identifying a reasonable approximation to an investor’s preferences for the purpose of pension investment. A standard practical approach taken when providing guidance on Defined Contribution (DC) investments is to give a questionnaire to identify risk preferences [11]. A pension professional designing products can provide a menu of options to potential customers and use tools such as a risk questionnaire to advise them on the best sel-
ection from this menu. It is in developing this menu of options that utility functions can provide a useful framework. They allow preferences to be operationalised mathematically and then used to identify coherent investment strategies. Designs that are not based on optimization may even prove to be stochastically dominated by other strategies and this is clearly undesirable. Our goal in this paper is to write a tool a pension professional might use in order to identify good candidate gain functio-
ns. It allows the pensions professional to vary the parameters within a family of utility functions and quickly view the resulting outcomes. They can then use their professional expertise to
1
arXiv:2511.07045v1 [q-fin.CP] 10 Nov 2025

perform the subjective task of matching these outcomes to investors. Utilityfunction inference from behaviour has been studied mathematically [13, 14], but we do not seek to do anything more sophisticated than inferring utility-functions by selecting from a menu of options. To produce an appropriate set of choices we first need a sufficiently rich family of gain functions to capture the key differences between different types of investor while remaining easy to interpret. We require gain function-
s that capture preferences for consumption over time, while allowing individuals to distinguish between their risk-aversion and the diminishing marginal utility of consumption at any given point in time (which we call satiation). This distinction is necessary to resolve many asset pricing puzzles [8, 7, 9]. Epstein–Zin preferences, exhibit these features and offer analytically tractable solutions that can often be analysed with full rigour [18, 17, 21]. However, the positive homogeneity of such ut-
ility functions can produce some unrealistic solutions [6]. This motivates us to sacrifice analyticity and use a preference model given by Exponential Kihlstrom–Mirman preferences (also used in this context in [4]). Although general Kihlstrom–Mirman preferences are not time consistent in the sense of [22] the exponential case without discounting that we are using is time consistent. This can be used to provide a justification for restricting attention to preferences of this form [12]. The specific-
 problem we solve is optimal investment with idiosyncratic risk insured using a tontine structure. There is extensive literature on tontines, see [25] for an extensive review of both the history of tontines and more recent literature. Other works of note would be: [26] who look at optimal investment with a bond-only tontine or [10] who study a pooled annuity fund that utilizes the tontine mechanism. Although tontines have been studied heavily, the literature on the optimal control approach to maki-
ng best use of a tontine is surprisingly limited. The problem is solved for power utility in [29] for Epstein–Zin utility and with systematic longevity risk in [2]. We will identify the optimal investment and consumption strategies by using a machine-learning approach. The central task of solving optimal control problems by machine learning is well studie, see for example [20, 15] and [19] for a recent survey of this fast-moving field. We have consciously chosen the most direct approach of a forwa-
rd method because we believe this will be the simplest for industry to understand and adapt to their needs without complex mathematics. Backward methods may be more efficient and scale better for higher-dimensional problems. The preference model used in this paper is studied in [5] also using machinelearning methods, but under the assumption that the parameters of the utility function were fixed. The contribution of this paper is to extend this by solving for multiple utility functions simultaneou-
sly. Learning optimal controls across a range of objective function parameters has been done before [23], but is more challenging for us because of scaling issues with our utility function. We resolve this by using additional neural networks to scale the utility function given the preference parameters. This is the central contribution of our paper. We have chosen to perform the optimization using a simple Black–Scholes
2

model to focus attention on the issue of the parameterization of the utility function. This has the additional advantage that we can solve the optimal investment problem using alternative numerical methods and so validate the success of our approach. The second contribution of our paper is to validate the numerical method for our preference model using a provably convergent scheme that exploits duality.
1 Discrete-time investment problem
We consider an optimal investment and consumption problem set within a Black-Scholes framework. The dynamics of the risky asset price, denoted S, follow a geometric Brownian motion described by
dSt = μStdt + σSt dWt,
where μ ∈ R represents the drift, σ ∈ R+ the volatility and W a standard Brownian motion. Investment and consumption decisions are assumed to be made at discrete intervals, defined by the set T := {0, δt, 2δt, . . . , T } for some time-step δt and final time T . Between these times, investments are made following a fixed-weight strategy. Let πt be the proportion of wealth allocated to the risky asset at time t ∈ T . This proprtion is maintained throughout the interval [t, t+δt) with the remainder -
of the portfolio allocated to a risk-free asset, growing at a constant rate r. The wealth evolves according to the stochastic differential equation (SDE)
dws = ws(πtμ + (1 − πt)r)ds + wsπtσ dWs. (1)
on the interval [wt, wt+δt). We denote the limit from the left of wealth at the end of the period by w(t+δt)−. Applying Itˆo’s lemma gives the log wealth process
d(log(ws)) = πtμ + (1 − πt)r − 1
2 (πtσ)2 ds + πtσdWs.
This yields the expression
log(w(t+δt)−) − log(wt) = πtμ + (1 − πt)r − 1
2 (πtσ)2 δt + πtσ(Wt+δt − Wt).
For simplicity and simulation, we define
εt := Wt+δt − Wt
√δt , (2)
so εt is distributed according to standard normal. Thus we are able to simulate the log wealth process using the Gaussian increments εt, and this log simulation, combined with the fixed-weight strategies, automatically ensures that strategies that put one into debt are removed.
3

To obtain wt from wt−, we incorporate contributions, consumption and longevity payments via the equation
wt = ηst1t<tRA + (1 − ct1t≥tRA )(1 + P∞,t1t>tRA )wt−, (3)
where the first term describes the fraction, η, of an individuals salary, st, that is contributed before retirement (tRA is the time of retirement) and the second term removes the consumption, ctwt−, and adds on any longevity payment, P∞,twt−, that one may receive in retirement. The longevity payment satisfies
P∞,twt− := pt
1 − pt
wt−,
where pt is the probability of dying in year t, given you were alive in year t − 1. The infinity in the subscript is there to signify the size of the fund is infinite, and we use it to maintain notation with our other papers. The longevity payment can be achieved using a tontine structure, for a discussion of how this can be implemented in practice see [5]. The optimization procedure is based on a stylized gain function which we call Exponential Khilstrom-Mirman utility [5]. Specifically, the agen-
ts seek to maximise
U (C) := E

−exp

−α
j<τ
X
j=tRA
u(Cj )δt



,
where α > 0 is a risk aversion parameter, τ is the individual’s time of death and δt defines the time step between consumption decisions. The function u(Ct, a) is given by
u(Ct) := Cρ
t
ρ − aρ
ρ,
where ρ is a satiation parameter, a is the adequacy level and Ct defines the individual’s consumption amount (consumption proportion multiplied by current wealth) relative to their final salary at a time point t. In order to compute the gain function, we assume that consumption and individual longevity risk are independent. We also assume there is no systematic longevity risk and that the probability an individual dies in a given year s is given by ps. So, we compute
U = −EInvest
"T X
s=tRA
ps exp −α
s
X
t=tRA
u(Ct, a)δt
!#
.
In this formula, EInvest denotes the expectation across investment scenarios and so excludes the mortality component of our probability model, which is accounted for by the term ps. T is the maximum time of death, which is finite for the mortality model we are using. If we generate N investment scenarios and label the consumption in each case c(j) with 1 ≤ j ≤ N , we may estimate the gain function using
Uˆ := − 1
N
N
X
j=1
"T X
s=tRA
ps exp −α
s
X
t=tRA
u(C (j )
t )δt
!#
.
4

2 Training the Fixed Parameter Network
Due to the inhomogeneous gain function, solving the optimization using classical techniques is reasonably computationally expensive (it takes several minutes for the decumulation-only problem with a single fixed set of parameter values), and will become infeasible if one uses richer economic models. It is also requires considerable programming if one changes economic model or loss function. For these reasons, we a neural network to solve the problem numerically. For this Black–Scholes model, we ta-
ke the standard Gaussians εt in equation (2) as the input to the recurrent neural network that we train. Since we use a gated recurrent unit (GRU), we also include the time points. Note that we use years as time points in our simulation, so we set δt = 1. While training and evaluating a fixed parameter network, the gain function parameters α, ρ and a remain fixed throughout, across scenarios. We have a visual representation of the network architecture in Figure 1.
Figure 1: Architecture for the Recurrent Neural Network. The arrows are purely for demonstrative purposes and all the layers are dense. The label ‘FF’ denotes a feedforward layer.
The neural network outputs an investment strategy πtθ and a consumption
strategy ctθ (both as proportions) at each time step. The superscript θ indicates the dependence of this strategy on the neural network’s parameter values, and so changes as the network is trained. If the time t is less than the time of retirement, then the consumption strategy is simply ignored. We take these strategies for the whole time period t ∈ [0, T ], and compute our loss function. Since neural networks seek to minimize their loss function, we take the loss function to be the (logarithm of-
 the) negative of the gain function. Sparing
5

some detail and computations outlined in [5], we compute the loss function of the network to equal
L = log


N
X
s=1
exp

log


T
X
t=tRA
exp

log(p ̃t) − α
t
X
j=tRA
u(C (s)
j )δt








− log(N ), (4)
where N is the number of scenarios across which we average, T is the maximum lifetime and p ̄t is the probability an individual dies in a given year t after retirement. We compute this expression using the logsumexp function to reduce excessive rounding errors and ensure numerical stability. As a reference point for the success of training, we plot a graph of the percentiles of the replacement ratio of an individual across many scenarios. The replacement ratio is defined to be the ratio of pension-
 payments to index-linked final salary. Essentially, it shows the consumption of an individual, relative to their final salary and adjusted for by inflation. As such, it can be considered as a direct consequence of the consumption and investment strategies, and so it can be taken as a way of comparing and thus rating the strategies. For further details on replacement ratios, see [5], and for plots of the actual investment and consumption strategies see Appendix B. We use the parameters in Table 1,-
 which we will call the default parameters from hereafter, and the trained network produces strategies that lead to the outcomes in Figure 2.
Parameters Value α 5 × 10−5 ρ -2 a 0.4
Table 1: Default fixed-parameter values used to train the ‘fixed-parameter’ network.
3 Verification of the optimal strategy
As a test of the validity of our network we compare the results obtained using a provably convergent classical algorithm. In Appendix C we use a duality approach to derive a numerical algorithm for solving the decumulation-only problem with discrete-time consumption and continuous-time investment. As is well-known, in complete markets it is easier to prove rigorous results for duality methods than for primal methods. Proofs using primal approaches typically require restrictive growth conditions or-
 more delicate arguments. See [16] for an explanation of the challenges of primal methods and a review of the literature. Our algorithm proceeds by using a duality method to solve the problem
6

Figure 2: Retirement outcome deciles for the ‘fixed-parameter’ trained neural network.
when consumption is restricted to one-period. We then solve the discrete-time consumption, continuous-time investment problem recursively. We considered a solution to have achieved reasonable accuracy for investment purposes if the value of the expected utility is within 1% of the standard error of the utility. In Figure 3 we plot the outcome from our neural network against a solution of the decumulation only problem obtained using the method of C. Not only are the plots similar, but the neural ne-
twork is within 1% of the utility with its predictions. It does this across various different tested gain function parameters. The neural network is, of course, able to compute the result much faster. The classical method takes several minutes to run even though this is just a one-dimensional problem. We were also able to validate our approach for the decumulation problem with power-utility problem and discrete-time consumption and continuous-time investment using the analytic solution of [2], The-
orem 2.2. We have tested that the method is also capable of producing good strategies in richer economic models, but we will defer more detailed discussion to another paper.
4 Issues with a Naive Method of Training the
Neural Network
We now proceed to training an RNN within the problem discussed in section 2 across a range of gain function parameters, rather than for a fixed set. Note
7

Figure 3: Comparison of retirement outcomes for the neural network approach compared to the provably convergent method in a decumulation only setting.
that the parameters that we will allow to vary are the risk aversion parameter, the satiation parameter and the adequacy level in the loss function in 4. A naive approach to learning optimal strategies for various parameter combinations would be to randomly sample values from an acceptable range for each parameter in each scenario and include them as inputs to the RNN. They would also therefore be used in the computation of the loss function. This would in theory allow the network to train on a va-
ried set of gain functions, minimising the loss across all of them. However, the principal issue with this method arises from the loss function itself. Since we employ an exponential gain function, the loss values can vary significantly across differing parameter values. As a result, when averaging the loss function across scenarios, certain parameter combinations can dominate as they provide more extreme utility values with more extreme variance. This in turn leads to excessive focus on reducing -
the loss of these specific scenarios, which distorts training, preventing the network from learning an accurate solution across all parameter combinations. We test the success of training using this naive method by comparing the trained RNN’s prediction for fixed parameter values against the results obtained when training the fixed-parameter RNN with the corresponding parameter values. The naive method performs so poorly that the expected utility from its strategy is practically incomparable to th-
at of the fixed-parameter RNN across differing gain function parameters.
5 Two Alternative Architectures
We now introduce two alternative architectures that overcome the high-variance issues outlined in section 4, and learn optimal strategies effectively across a
8

wide range of parameter values. These approaches both use separate neural networks to modify the loss function of the main RNN, such that the loss value for each scenario is scaled for the given parameter combination. In this sense, the variance of the loss function is normalized, allowing the main RNN to train effectively across the entire parameter space. Note that from here onward the ‘main’ RNN is the network learning the optimal investment and consumption strategies and the architecture is t-
he same as in Figure 1, except that the input dimension is increased by one in order to accommodate the parameters as inputs. The problem we need to address is that the appropriate scale for the problem depends on the parameter values. The two methods we introduce here differ in how these scaling factors are produced. We also considered the possibility of scaling the networks by computing a certainty-equivalent value for our loss functions to ensure the value is comparable across different paramet-
er ranges. However, the computation of a certaintyequivalent is not analytically tractable for our gain function and numerical rootfinding methods come with their own challenges when the scale of the problem is unknown. As a result we felt that designing an algorithm using this approach would be more complex than scaling based on the observed mean and variance and was likely to be less effective.
5.1 A Two-Step Iterative Algorithm
In this method, we use a two-step iterative algorithm that makes use of a secondary neural network, called the ‘scaling’ network, to estimate the scaling factors. In short, the main RNN is trained to minimize a scaled loss function using the current estimates from the scaling network. Once trained, this RNN is then used to generate data under the unscaled loss, which is used to update the scaling network. This iterative, alternating procedure allows the two networks to improve each other: the scal-
ing network enables more stable and effective training of the RNN, while the improved RNN provides better data for refining the scaling estimates. We will use an index i = 0, 1, 2, . . . as our iteration counter. At each iteration, we will assume that we have the function σi : Pi → R which estimates the standard deviation of the utility function, conditioned on the parameter values p ∈ Pi. Here, p denotes the triplet (α, ρ, a). To initialize the algorithm we define
σ0(p) = 1.
The first step in each iteration is to train an RNN to learn an approximate optimal investment and consumption strategy
fi : (Pi)N × (I)N → (O)N .
Define the log utility for each scenario, conditional on a given parameter set p, as
v(p, s) = log


T
X
t=0
exp

log(p ̃t) − α
t
X
j=0
up(c(s)
j )δt



 . (5)
9

The subscript p in up highlights the dependency of the u on the parameter set. The RNN learns the strategy fi by minimizing the following scaled loss function:
li(p, σi(p)) = log
N
X
s=1
exp (v(p, s)) σi(p)
!
− log(N ).
We compute this using the log-sum-exp function:
li(p, σi(p)) = log
N
X
s=1
exp [v(p, s) − log (σi(p))]
!
− log(N ). (6)
Again, we do this to reduce excessive rounding errors when computing the average across scenarios. Next, we train a separate neural network, the ‘scaling network’, to estimate the standard deviation of the utility function conditional on the parameters. That is, exp(v(p, s)), evaluated using the strategy fi and conditioned on the parameter values p ∈ Pi+1. This network, trained using supervised learning, learns the mapping σi+1(p) : Pi+1 → R+. The training dataset consists of 50, 000 samples of pa-
rameter combinations along with the corresponding empirical standard deviations of the loss function (computed using the current strategy fi). The parameters are the inputs and the standard deviations are the labels. If Pi+1 is a richer set of parameters than Pi, then the strategy fi essentially extrapolates its learned function across the whole parameter set. Once this training is complete, we have the new scaling network and thus the new scaling factors, and so we increment the iteration counter-
 and repeat the process using the updated estimates of σi+1(p). In practice, we found that only three full iterations of this process were necessary to solve our problem with sufficient accuracy. The final RNN, using the strategy f3 from the fourth iteration, was used as our end result. In each of the iterations, we increased the size of the parameter space such that P3 ⊃ P2 ⊃ P1 (= P0), and full details can be found in Appendix A. As such, when producing the loss function data needed to train the-
 scaling network for the next iteration, the trained RNN simply extrapolated its predictions from the smaller space Pi−1 to the full range Pi. Figure 4a illustrates the impact of this alternative architecture on training outcomes. Once again, we used the parameters in Table 1 as input to the trained network. Figure 4a demonstrates the improved ability of the network to generalize across a wide range of parameters. The similarities between this new method’s strategies and the fixed parameter RNN’s -
strategies are corroborated by Figure 11 in the Appendix. Notably, the differences in strategy are largest in the later years, where survival probabilities are minimal, and hence the contribution to the loss function is negligible. Furthermore, the expected utility obtained by the varying-parameter network is within 1% of a standard error of the value obtained by the fixed-parameter network for this default set of parameters. Since training a number of fixed parameter networks would be time consum-
ing,
10

(a) (b)
Figure 4: Panel (a) shows retirement outcomes for the RNN produced by the ‘two-step iterative method as compared to the fixed parameter network. Panel (b) shows the same comparison but between the RNN from the ‘one-step’ algorithm and the fixed parameter network.
we only tested on two other parameter combinations, the edge cases, where the optimal solutions differ the most. Specifically, these cases are described by an individual who is more easily satiated and highly risk averse1, or an individual who is less easily satiated and is almost risk neutral2. The varying-parameter network was also within 1% under these parameters.
5.2 A One-Step Algorithm
The second method we introduce also leverages multiple neural networks to scale the loss function, but, unlike the two-step iterative approach, the networks are trained simultaneously, side-by-side. This allows the main RNN to learn the optimal strategy across the entire range of parameter values far more efficiently. Again, the main difficulty here is estimating the standard deviation of the loss function for a given set of parameter values, to obtain the appropriate scaling for the loss function-
. To address this, we introduce two auxiliary networks. The first network, the ‘mean-estimating network’, estimates the expectation of the main loss function conditional on parameter values and the strategy produced by the main RNN. The second, the ‘scaling network’, predicts the conditional variance of the loss, using the error from the mean estimate as input to its loss function. We then use this scaling factor exactly as before in (6) to scale the main RNN’s loss. The mean network is trained by-
 minimizing the average squared difference between the utility from each scenario and its predicted mean, μθ(p). The scaling network is then trained to predict the variance by minimizing the squared difference between these squared errors and its output, σ2
θ (p). For numerical
1(α, ρ, a) = (0.2, −2, 0.4) 2(α, ρ, a) = (5 × 10−5, −0.1, 0.4)
11

stability, we again use logarithms, taking the outputs of both networks as the logarithms of the mean and variance. We therefore obtain the following loss functions:
Lμ(p) = log
N
X
s=1
exp log exp(v(p, s)) − exp(log(μθ(p))) 2
| {z }
ds2 (log squared differences)
!
− log(N ),
= log 1
N
N
X
s=1
exp(v(p, s)) − μθ(p) 2
!
,
and
Lσ(p) = log
N
X
s=1
exp log exp(d2
s) − exp(log(σ2
θ (p))) 2
!
− log(N ),
= log 1
N
N
X
s=1
exp(d2
s) − σ2
θ (p) 2
!
,
where v(p, s) is defined in (5). For numerical stability, the squared differences are computed using the identity
log (ea − eb)2 = 2
h
max(a, b) + log1p −emin(a,b)−max(a,b) i
where log1p(x) := log(1 + x). The training procedure jointly optimizes all three networks using the mean and scaling network losses defined above as well as the main RNN’s scaled loss, analogous to (6). At each step of training (each gradient update), all three networks make a prediction given the dataset and parameters. The main RNN’s consumption and investment strategy, along with the scaling network output, log(σ2
θ (p)), are used as input into the main RNN’s (scaled) loss function. The two auxiliary networks’ losses are computed using the (unscaled) log utilities from the main RNN, as per the loss functions Lμ(p) and Lσ(p) respectively. Finally, all three networks’ parameters are updated using the corresponding gradients from their loss functions. The full training procedure is given in Algorithm 1: In this method, training is performed across the full parameter range, equivalent to P3, removing the need f-
or iterations through larger parameter sets to improve accuracy. This increases the efficiency of the algorithm, requiring at most a fifth of the runtime that the two-step iterative algorithm requires. Figure 4b illustrates the success of the training procedure. We can also see the similarities in the consumption and investment strategies in Figure 12. This method produces a network that achieves a utility within 1% of a standard error
12

Algorithm 1 Joint Optimization Training Procedure
Initialize: dataset D, parameters P, network parameters θRNN, θμ, θσ, number of epochs E, and split D into batches B for epoch in range E do for batch in B do 1. Sample scenarios s ∈ D and parameters p ∈ P from the batch 2. (πtθ, ctθ)tT=1 ← RNN(s, p) 3. log(μθ(p)) ← MeanNN(p) 4. log(σ2
θ (p)) ← ScalingNN(p)
5. Compute wealth process from (πtθ, ctθ)tT=1 to get consumption
amounts (Ct)tT=tRA in retirement. 6. Input the consumption amounts and the scaling factor into the scaled RNN loss l(p, σθ(p)), and store unscaled log utilities v(p, s) 7. Compute mean-estimating network loss Lμ(p) using stored v(p, s) and store log squared differences ds2 8. Compute scaling network loss Lσ(p) using stored log squared differences ds2 9. Update θRNN, θμ, θσ using gradients end for end for
of the fixed network for these default parameters. The network also achieves an expected utility of within 1% of a standard error of the fixed parameter network for the two edge cases described previously. Not only does this show the success of this architecture, but it also shows that it is at least as effective as the two-step iterative approach and is more efficient in reaching accurate solutions.
6 Allowing for Real-Time Comparisons
The primary objective of training this varying-parameter network was to enable real-time comparisons of retirement outcomes, allowing users to explore and select their preferred investment and consumption strategies. Although the varying-parameter networks generate predictions over the full parameter range without requiring further training, it remains time-consuming to simulate sufficient stratetgy outcomes to produce a fan diagram of outcomes. To address this issue, we train an additional feed-f-
orward neural network, referred to as the ‘replacement-ratio percentile’ network. This network approximates the mapping from percentile, input parameters, and time point to the corresponding replacement ratio, as predicted by the principal RNN. Specifically, let I := {1, 2, . . . , 9} denote the set of percentiles. Then the replacement-ratio percentile network learns the mapping
g : P × I × T → R,
13

which returns the value of the i-th percentile at time t, corresponding to the replacement ratio produced by the optimal strategy obtained from the principal network. The training was performed in a supervised environment and the dataset was generated by randomly sampling 50, 000 combinations of parameters and passing them through the principal RNN to obtain the corresponding nine percentiles for each input. Each percentile contains 56 time points to account for each year from retirement until th-
e last time point an individual may still be alive. We can see in Figure 5 the accuracy of this network in mimicking the principal network.
Figure 5: Retirement outcomes for the replacement-ratio percentile neural network compared to the main RNN.
The replacement-ratio percentile network produces an almost identical output to the principal RNN. The replacement-ratio percentile network is also able to produce the plot in approximately 1/3 of a second, more than 10 times faster than recalculating by Monte Carlo. This allowed us to create a far more interactive and responsive user interface.
7 Sensitivity Analysis of Optimal Strategies
The ability to learn the optimal strategy across a range of parameter values allows us to perform sensitivity analysis with respect to the parameters. Unless otherwise stated, all parameters are kept constant as specified in Table 1. We will analyse the outcomes in retirement and the strategies themselves. The plots for outcomes will be included in this section, but the full plots of the strategies will be included in Appendix B.
14

We begin by examining how retirement outcomes vary with the risk-aversion parameter, α. Figures 6a & 6b below illustrate how the outcomes differ relative to this parameter. Note that the strategies we have been examining so far are already quite risky, so the low risk aversion strategies we look at now are not drastically different.
(a) (b)
Figure 6: Comparison of retirement outcomes for different values of α. We have subfigure (a) with α = 0.01 (high risk aversion) and subfigure (b) with α = 10−7 (low risk aversion).
As expected, increasing the risk aversion parameter leads to more conservative investment behavior during the accumulation phase. Specifically, individuals with higher risk aversion allocate a lower proportion to the risky asset, resulting in narrower spreads between replacement-ratio percentiles. This conservative strategy typically yields lower replacement ratios at retirement but provides greater protection in adverse market scenarios. In terms of consumption strategies, less risk-averse indivi-
duals tend to consume more, reflecting a reduced concern for the depletion of their funds. On the contrary, the more risk averse individuals fear the prospect of running out of funds and so are less likely to consume as much in retirement.
We can also consider the affect the satiation parameter, ρ, has on retirement outcomes. Figures 7a & 7b provide an illustration. Note that ρ = −2.0 is the default value for the parameter in the strategies we have looked at before. Again, the figures show that the outcomes follow an intuitive pattern. When ρ = −2.0, the individual becomes satiated much more quickly. As a result, an individual will reduce their investment in the risky asset during the accumulation period in comparison, as they do no-
t seek such a high replacement ratio in retirement. This is what leads to the tighter percentiles that can be seen in Figure 7a, and by the opposite reasoning, why the looser percentiles can be seen in Figure 7b. Within the consumption strategy, ρ = −2.0 induces reduced overall consumption throughout retirement, since the individual is more satisfied with the amount they are consuming. In contrast,
15

(a) (b)
Figure 7: Comparison of retirement outcomes for different values of ρ. We have Subfigure (a) with ρ = −2.0 (more easily satiated) and Subfigure (b) with ρ = −0.1 (less easily satiated).
when ρ = −0.1, the individual remains far from satiated and therefore tends to seek to consume more throughout retirement.
The impact of the adequacy parameter is much harder to see than the other two parameters. To understand its effect, we examine the behaviour with extremely high risk aversion (α = 0.2). Let V adequate be the level of funds at retirement that allow an individual to to consume at the adequacy level for the whole of their retirement if they invest in risk-free bonds. If a highly risk-averse individual has more than V adequate at retirement, their strategy will approximate consuming all funds above V -
adequate in the first year and consume at the adequacy level thereafter. This is because this is the only risk-free strategy available. If they have less than V adequate funds, the situation is reversed. An individual who is risk averse will choose to reduce consumption initially below the level they could sustain for the whole of retirement in order to reduce their risk levels later in retirement. This is illustrated in Figure 8, where we deploy the provably convergent numerical scheme outlined i-
n Section 3. This explains the importance of adequacy in the decumulation phase. If one considers accumulation, as we have done throughout this dissertation, a highly risk averse individual will invest almost entirely in the risk-free asset during accumulation. This results in an essentially deterministic level of income at retirement, and their consumption throughout retirement will again be determined by whether this is greater or less than V adequate. When we view the optimal strategies compute-
d using machine learning, this pattern is somewhat obscured by the fact it is very difficult to train the network to find the optimal strategy over the age of about 100 as consumption after this age has only a negligible effect upon utility. The optimal strategies computed using machine learning for decumulation-only are shown in panels (a) and (b) in Figure 9 and the corresponding accumulation problem in panel (c). Notice that both decumulation-only strategies differ from the optimum shown in Fig-
ure
16

(a) (b)
Figure 8: Comparison of retirement outcomes using the provably convergent numerical method from Section 3, for highly risk averse individuals in decumulation only. We have Subfigure (a) with high initial wealth and Subfigure (b) with low initial wealth.
8. The utility values of the low initial wealth problem are equal within 1%, but the machine learning solution to the high initial wealth problem is not as close to the other numerical method. This is due to the fact that we are using extreme parameters and the gain function becomes hard to compute numerically in these regions. In the accumulation problem, an individual with this level of risk aversion never reaches a wealth above V adequate. As a result, we do not observe the pattern of high init-
ial consumption followed by consumption at the adequacy level. If the individual’s contribution rate (or salary) were sufficiently high, wealth would exceed V adequate and this behaviour would then emerge. Such contribution rates are, however, somewhat unrealistic in practice. If we use realistic values for the risk-aversion parameter, the impact of the adequacy parameter becomes much harder to see. When realistic parameter values are chosen, adjusting the parameter has little visual impact on the-
 optimal strategy. Both the choice of risk-aversion and the choice of adequacy break the positive homogeneity of the problem and it seems that one can use either varying adequacy levels or exponential risk-aversion to avoid the unreasonable strategies found in [2] using homogeneous Epstein–Zin preferences.
8 Conclusions
We have created a tool which allows pensions to be designed by choosing a family of loss functions and then tuning the parameters interactively. We have shown how to overcome the issue of the high variance of an exponential utility function for varied parameters when learning the optimal control in a given setting. We expect that this architecture could be re-used for more general loss functions and richer economic models.
17

(a) (b)
(c)
Figure 9: Comparison of retirement outcomes when using the neural network for highly risk averse individuals. For the decumulation only setting, we have Subfigure (a) with high initial wealth and Subfigure (b) with low initial wealth. For an accumulation problem, we have Subfigure (c).
18

References
[1] S. N. Afriat. The construction of utility functions from expenditure data. International Economic Review, 8(1):67–77, 1967.
[2] J. Armstrong, C. Buescu, and J. Dalby. Optimal post-retirement investment and consumption under longevity risk in collective funds. Scandinavian Actuarial Journal, 2025.
[3] John Armstrong. Classifying markets up to isomorphism. arXiv preprint arXiv:1810.03546, 2018.
[4] John Armstrong and Cristin Buescu. Collectivised pension investment with exponential kihlstrom–mirman preferences, 2019.
[5] John Armstrong, James Dalby, and Rohan Hobbs. Collective defined contribution schemes without intergenerational cross-subsidies, 2025.
[6] John Armstrong and James Luke Dalby. Optimal mutual insurance against systematic longevity risk. Scandinavian Actuarial Journal, 0(0):1–19, 2025.
[7] Ravi Bansal. Long-run risks and financial markets. Review, 89(Jul):283300, None 2007.
[8] Ravi Bansal and Amir Yaron. Risks for the long run: A potential resolution of asset pricing puzzles. The Journal of Finance, 59(4):1481–1509, 2004.
[9] Luca Benzoni, Pierre Collin-Dufresne, and Robert S. Goldstein. Explaining asset pricing puzzles associated with the 1987 market crash. Journal of Financial Economics, 101(3):552–573, September 2011.
[10] Thomas Bernhardt and Catherine Donnelly. Modern tontine with bequest: Innovation in pooled annuity products. Insurance: Mathematics and Economics, 86:168–188, 2019.
[11] David P. Blake, Mel Duffield, Ian Tonks, Alistair Haig, Dean Blower, and Laura MacPhee. Grouping individual investment preferences in retirement savings: A cluster analysis of a USS members risk attitude survey. Discussion Paper PI-2003, Pensions Institute, City, University of London, February 2020.
[12] Antoine Bommier. Uncertain lifetime and intertemporal choice: risk aversion as a rationale for time discounting. International Economic Review, 47(4):1223–1246, 2006.
[13] Alexander M. G. Cox, David Hobson, and Jan Obloj. Utility theory front to back - inferring utility from agents’ choices, 2012.
[14] Marta Grzeskiewicz. Uncovering utility functions from observed outcomes, 2025.
19

[15] Jiequn Han et al. Deep learning approximation for stochastic control problems. arXiv preprint arXiv:1611.07422, 2016.
[16] Martin Herdegen, David Hobson, and Joseph Jerome. An elementary approach to the merton problem. Mathematical Finance, 31(4):1218–1239, 2021.
[17] Martin Herdegen, David Hobson, and Joseph Jerome. The infinite-horizon investment-consumption problem for epstein-zin stochastic differential utility. ii. Finance and Stochastics, 27(1):159–188, January 2023.
[18] Martin Herdegen, David G. Hobson, and Joseph Jerome. The infinite horizon investment-consumption problem for epstein-zin stochastic differential utility. i : Foundations. Finance and Stochastics, 27:127–158, January 2023.
[19] Ruimeng Hu and Mathieu Lauriere. Recent developments in machine learning methods for stochastic control and games. arXiv preprint arXiv:2303.10257, 2023.
[20] Cˆome Hur ́e, Huyˆen Pham, Achref Bachouch, and Nicolas Langren ́e. Deep neural networks algorithms for stochastic control problems on finite horizon: convergence analysis. SIAM Journal on Numerical Analysis, 59(1):525–557, 2021.
[21] Holger Kraft, Thomas Seiferling, and Frank Thomas Seifried. Optimal consumption and investment with epstein–zin recursive utility. Finance and Stochastics, 21(1):187–226, 2017.
[22] David M Kreps and Evan L Porteus. Temporal resolution of uncertainty and dynamic choice theory. Econometrica, pages 185–200, 1978.
[23] L. Leal, M. Lauriere, and C.-A. Lehalle. Learning a functional control for high-frequency finance. Quantitative Finance, 22(11):1973–1987, 2022.
[24] David G Luenberger. Optimization by vector space methods. John Wiley & Sons, 1997.
[25] Moshe A. Milevsky. King William’s Tontine: Why the Retirement Annuity of the Future Should Resemble its Past. Cambridge University Press, 2015.
[26] Moshe A. Milevsky and Thomas S. Salisbury. Optimal retirement income tontines. Insurance: Mathematics and Economics, 64:91–105, 2015.
[27] Ralph Tyrell Rockafellar. Convex Analysis. Princeton University Press, 2015.
[28] P. A. Samuelson. A note on the pure theory of consumer’s behaviour. Economica, 5(17):61–71, 1938.
[29] Michael Z Stamos. Optimal consumption and portfolio choice for pooled annuity funds. Insurance: Mathematics and Economics, 43(1):56–68, 2008.
20

[30] Hal R. Varian. The nonparametric approach to demand analysis. Econometrica, 50(4):945–973, 1982.
[31] John von Neumann, Oskar Morgenstern, and Ariel Rubinstein. Theory of Games and Economic Behavior (60th Anniversary Commemorative Edition). Princeton University Press, 1944.
A Neural Network Architecture Details
Our code is written in Python using the Tensorflow package.
A.1 RNN Architecture
The main RNN’s used in the fixed-parameter method, and both the one and two step iterative methods are identical aside from the inputs. We mark in brackets the additional inputs to the varying-parameter networks. The networks consist of six layers:
• The first input layer has two (five) nodes, representing: the Gaussian increments and the time points (and the three parameter values).
• The second layer is a dense layer with 80 nodes and a ReLU activation function.
• The third layer is a gated recurrent unit (GRU) with 25 nodes. This is the recurrent layer in our network. The activation function is the hyperbolic tangent function and the recurrent activation function is sigmoid. The GRU ensures that the network returns an output at each time point.
• The fourth and fifth layers are identical to the second layer.
• The final output layer has two nodes, which represent the proportion of wealth to invest in the risky asset and the proportion of wealth to consume. We use the linear activation function for both outputs, and perform a transformation of the consumption proportion so that it remains in the interval [0, 1]. We obtain investment and consumption decisions in each year of our simulation as a result of the GRU.
We used the Adam optimizer with an initial learning rate of 0.001. Each time, training was carried out over 500 epochs, each consisting of 131, 072 scenarios with a batch size of 4, 096. A validation set of 10, 000 separately generated scenarios was evaluated at the end of each epoch. We use a large number of epochs and simply extract the weights for which the validation and training loss was least.
21

A.2 The Scaling Network
The ‘scaling’ network in both methods is a feedforward neural network with a much simpler architecture. The mean estimating network in the one-step iterative method also has the same architecture. They consist of an input layer of three nodes, that takes the three parameter values and three hidden layers each with 64 nodes. All of the hidden layers use the ReLU activation function. The output layer has one node, representing predictions for standard deviation (mean in the case of the mean estimati-
ng network) of the loss function. The output layer uses the linear activation function since we take the scaling factors as logarithms. For the one-step method, these networks are trained in the same loop as the main RNN, and so have the same training parameters as the main RNN. For the two-step iterative method, training consisted of 100 epochs, where the training data was 80% of the 50, 000 data points and the validation data was the remainder. We use a batch size of 1, 000 and the mean-square-e-
rror loss function. We use the Adam optimizer with an initial learning rate of 0.001. We break up the parameter sets for each iteration. The smallest parameter ranges P0 = P1, used for training the first ‘scaling’ network, is given by Table 2.
Parameters Min Max α 10−5 10−4 ρ −2 −1 a 0.2 0.7
Table 2: The smaller parameter range used to train the first iteration scaling network in the two-step iterative algorithm.
The parameter range P2, used for training the second ‘scaling’ network, is given in Table 3.
Parameters Min Max α 10−6 10−3 ρ −2 −0.1 a 0.2 1.0
Table 3: The second parameter range used to train the second scaling network in the two-step iterative algorithm.
The full parameter range P3, used for training the third ‘scaling’ network, is given in Table 4.
22

Parameters Min Max α 10−7 10−2 ρ −2 −0.1 a 0.1 1.0
Table 4: The third parameter range used to train the third scaling network in the two-step iterative algorithm.
A.3 Replacement Ratio Percentile Network
The replacement ratio percentile network is a feedforward neural network. It consists of an input layer with five nodes, to represent the time point, the percentile and the three varying parameters. So the replacement ratio percentile network learns the value of the replacement ratio for a given time point, in a given percentile, for a given set of parameters. There are three hidden layers consisting of 64 nodes, all with the ReLU activation function. The output layer has a single node as the netw-
ork only makes one prediction per data point. The output layer is governed by the sigmoid activation function since we transform both inputs and outputs to the interval [0, 1]. We follow the same training procedure as with the ‘scaling’ network in the two-step iterative approach, but note that we obtain a larger data set since each data point consists of nine percentiles, each 56 time points long. This therefore means we only need 50 epochs to find the minimum.
B Strategy Plots to Match Outcome Plots
Here, we show the strategy produced by the respective networks to produce the outcome plots in the main text of the paper.
C A convergent algorithm for the discrete-consumption,
continuous-investment problem
Recall that the dynamics of w are determined by equations (1) and (3). We define an admissible control to be a progressively measurable process ((Ct)t∈T , (πt)t∈[0,T ]) such that wt− ≥ 0 and wt ≥ 0 for all time. We write A for the set of admissible controls. Our objective is to compute
v := sup
(C,π)∈A
U (C), (7)
and to find (C, π) achieving (or if necessary, approximating) this supremum. Our strategy is to solve the one-period problem using a duality method which will allow us to identify the solution with minimal assumptions on the form of
23

(a) (b)
Figure 10: Panel (a) shows the consumption strategy for the outcomes plotted in Figure 2, for the fixed-parameter RNN. Panel (b) shows the corresponding investment strategy.
Figure 11: Consumption and investment strategies for the outcomes plotted in Figure 4a, for the two-step iterative approach as compared to the fixed network.
24

Figure 12: Consumption and investment strategies for the outcomes plotted in Figure 4b, for the one-step approach as compared to the fixed network.
(a) (b)
Figure 13: Panel (a) shows the consumption strategy for the outcomes plotted in Figure 6a, for high risk aversion. Panel (b) shows the corresponding investment strategy.
25

(a) (b)
Figure 14: Panel (a) shows the consumption strategy for the outcomes plotted in Figure 6b, for low risk aversion. Panel (b) shows the corresponding investment strategy.
(a) (b)
Figure 15: Panel (a) shows the consumption strategy for the outcomes plotted in Figure 7a, for more easily satiated preferences. Panel (b) shows the corresponding investment strategy.
26

(a) (b)
Figure 16: Panel (a) shows the consumption strategy for the outcomes plotted in Figure 7b, for less easily satiated preferences. Panel (b) shows the corresponding investment strategy.
our utility function. To simplify the duality argument, we use the theory of isomorphic markets to recast the problem in a particularly simple form. Having obtained this solution, we will recursively solve the multi-period problem. Our goal in this appendix is to give all details needed to implement the resulting algorithm and a proof of its convergence.
C.1 Solution to the one-period problem
Write Aw,t for the admissible consumption-investment strategies that start with wealth w at time t. Define the value function v, as a function of initial wealth, w at time t1 ∈ T by
vt(w) := sup
C,π∈Aw,t
E

− exp

−α
X
j∈T , t≤j<τ
u(Cj )δt




To make the limits in the sum easier to read, we will write the sum using the following integral notation
vt(w) = sup
C,π∈Aw,t
E − exp −α
Zτ
t
u(Cs)dT (s) .
Given vt, we wish to compute vt−δt, we will then be able to recursively compute vt for all t ∈ T . Our next theorem shows how to compute vt−δt, but in order to state our results concisely we first make the following definitions.
Definition C.1. Let f : R → R ∪ {±∞} be concave and increasing. Define
f †(p) : R>0 → R
27

by
f †(p) = inf{x | p ∈ ∂f (x)}
where ∂f (x) is the sub-differential of f at x.
For sufficiently regular functions u, we have f † = (f ′)−1, or, equivalently, f † is the derivative of the Legendre transform of u.
Definition C.2. Define
Q(z) := Φ M + Φ−1(z) , (8)
where Φ is the cumulative distribution function of the standard normal distribution and
M := |μ − r| √δt
σ.
Define
qA
BS(z) = dQ
dz . (9)
As we will show in Lemma C.5 below, the quantity qA
BS(z) can be related to the pricing kernel of the Black–Scholes model. We may now state the following result which allows us to solve the one period problem.
Proposition C.3. Suppose that t1 = t0 + δt and that v(w) := vt1 (w) is known, concave and increasing for w > 0, equal to −∞ for w ≤ 0, and satisfies v(w) ≤ 0. Define st = (1 − pt) for t ∈ T , so st denotes the survival probability over the period [t, t + δt).
(a) vt0 (w) is itself concave and increasing for w > 0, equal to −∞ for w ≤ 0 and satisfies v(w) ≤ 0.
(b) For each η > 0 define a function on f η : (0, 1) → R≥0 by
f η(s) = v† ηe−rδtqA
BS(s) . (10)
Define Cη ∈ R≥0 by
Cη = u† − η
δt −1 + st0
Z1
0
(1 + v(f η(s))) ds
−1!
. (11)
Define wη by
wη = Cη + st0
Z1
0
e−rδtqA
BS(s)f η(s). (12)
If there exists ηwt0 such that wηwt0 = wt0 then we have
vt0 (wt0 ) = exp(−u(γηX0 )δt) −1 + st0
Z1
0
(1 + v(f ηwt0 (s))) ds
and Cηwt0 is the optimal consumption at time t0.
28

Part (a) is trivial. For example the statement about concavity follows from [24] Proposition 8.3.1. The proof strategy for Part (b) is as follows:
(i) Use the dynamic programming principle to obtain a recursive formulation of the problem. This is done in Lemma C.4
(ii) Reduce the continuous time investment problem of the recursion step to a calculus of variations problem using the classification of one-period complete markets. This is done in Lemma C.6.
(iii) Solve the resulting calculus of variations problem. This is done in Lemma C.7.
Let us first see how to compute vt0 (X0) as the solution to a one period optimal investment problem.
Lemma C.4. Assume the conditions of Proposition C.3. Let Awt0 ,t0,t1 denote the set of pairs (Ct0 , π) where π is an admissible investment strategy for the period [t0, t1] and Ct0 ∈ R is the consumption at time t0 and satisfies Ct0 < wt0 . Then
vt0 (wt0 ) := sup
Ct0 ,α∈Awt0 ,t0,t1
n
exp (−u(Ct0 )δt) −1 + st0 E 1 + vt1 (w(Ct0 ,π)
t1 )
o
(13)
where w(Ct0 ,π)
t1 is the value obtained by following the investment strategy π from
t0 to t1 with an initial wealth of s−1
t (wt0 − Ct0 ).
Proof. We calculate
vt0 (wt0 ) = sup
C,π∈Awt0 ,t0
n
E (− exp (−u(Ct0 )δt) P(τ < t1 | τ ≥ t0))
+ E − exp −u(Ct0 )δt −
Zτ
t1
u(Ct) dT (t) | τ ≥ t1 P(τ ≥ t1 | τ ≥ t0)
o
= sup
C,π∈Awt0 ,t0
n
− (1 − st0 ) exp (−u(Ct0 )δt)
+ st0 exp(−u(Ct0 )δt)E − exp −
Zτ
t1
u(Ct) dT (t) | τ ≥ t1
o
= sup
γ,π∈Awt0 ,t0
(
exp (−u(Ct0 )δt) ×
−1 + st0 E 1 − exp −
Zτ
t1
u(Ct) dT (t) | τ ≥ t1
)
The result now follows by the dynamic programming principle.
29

Equation (13) is a one-period investment problem in a complete market. Complete one-period markets are classified in [3]. This allows us to find a more convenient, but isomorphic, representation of our market. For complete one-period markets, we may say that two markets are isomorphic if they have the same risk-free rate and if there is a map which acts as a probability space isomorphism for both the P and Q measures simultaneously. Let ΩA be the probability space given by [0, 1] × [0, 1] equippe-
d with the Lebesgue measure. Let qA : [0, 1] → R>0 be a measurable function of integral 1. We may define an abstract financial market (ΩA, qA, r) whose assets consist of random variables f (representing the payoff of the asset) defined on ΩA. The cost of asset f is given by
P A(f ) :=
Z
[0,1]×[0,1]
e−rδtf (x, y) qA(x) dx dy
if this integral exists. Assets of positively infinite or undefined cost cannot be purchased. Assets of infinitely negative cost can be purchased at any price. The A in our superscripts stands for abstract. Notice that in this abstract market the random variable U defined by U (x, y) = x is uniform in the PA measure and has density qA in the QA measure.
Lemma C.5. As a one period market, the Black–Scholes–Merton market from time t0 to time t1 is isomorphic to the market (ΩA, qA
BS, r).
We defer the proof to appendix D. Having found a simple isomorphic representative of our market, we can rewrite the equation (13) in terms of the abstract market ΩA.
Lemma C.6. Assume the conditions of Proposition C.3. The value function vt0 (wt0 ) can be calculated by solving the optimisation problem
maximize
C∈R,f ∈L0[0,1]
exp(−u(C)δt) −1 + st0
Z1
0
(1 + v(f (s))) ds
subject to C + st0
Z1
0
e−rδtqA
BS(s)f (s) ds ≤ wt0 .
(14)
taking v = vt1 .
Proof. Let us write (Ct0 , f ) for a pair of a consumption Ct0 ∈ R and an investment f ∈ L0(ΩA). We denote by Bwt0 the set of consumptions and investments that are available with a budget of wt0
Bwt0 = {(Ct0 , f ) ∈ R × L0(ΩA) | γt0 + st0 P A
BS(f ) ≤ X0}.
If we also write
UA
t0 (Ct0 , f ) := exp(−u(Ct0 )δt) −1 + st0
Z
[0,1]×[0,1]
(1 + vt1 (f (x, y))) dx dy
!
30

to accord with equation (13), then the fact that our markets are isomorphic allows us to deduce that
vt0 (wt0 ) := sup
(C,f )∈Bwt0
U A(Ct0 , f ). (15)
Since vt1 is assumed to be concave we may average an investment f (x, y) over the factor y to obtain a new investment f which achieves a higher value for the gain function U A. Thus we may restrict our attention to investments f (x, y) which depend only upon x. The result follows.
Note that an investment f ∈ L1 for this abstract market model corresponds
to a derivative with payoff given by the random variable f (F dQ
dP
( dQ
dP )) in the
original Black–Scholes–Merton market (or indeed in any isomorphic market). This derivative can then be replicated by delta hedging in the Black–ScholesMerton market. So the solution to the abstract investment problem (14) can be straightforwardly mapped to a solution of the original problem.
Lemma C.7. Assume the conditions and definitions of Proposition C.3. If an ηwt0 exists with wηwt0 = wt0 , then the solution of (14) is given by f ηwt0 and
γηwt0 .
Proof. We will now solve (14) using the method of Lagrange multipliers. We define a vector space V = R ⊕ L0([0, 1]) ⊕ R For λ ∈ R, we define the Lagrangian L : V → R by
L(C, f, λ) := exp(−u(C)δt) −1 + st0
Z1
0
(1 + v(f (s))) ds
+ λ −X0 + C + st0
Z1
0
e−rδtqA
BS(s)f (s) ds .
(16)
Computing the directional derivatives of L(C, f ) we find the following necessary and sufficient conditions for (C, f ) to be a saddle point of L(γ, f, λ) for the given λ. Firstly
0 ∈ −∂u(C)δt exp(−u(C)δt) −1 + st0
Z1
0
(1 + v(f (s))) ds + λ (17)
where ∂u(C) is the subdifferential of u at C. Secondly
0=
Z1
0
exp(−u(C)δt)st0 (∂v)(f (s)) + λst0 e−rδtqA
BS(s) g(s) ds.
The integral is well-defined since ∂v will be single-valued almost everywhere. This must hold for all g(s) so this is equivalent to requiring
(∂v)(f (z)) = −λ exp(u(C)δt)st0 e−rδtqA
BS(z). (18)
for almost all z ∈ (0, 1).
31

If the Kuhn-Tucker conditions (17) and (18) are satisfied, ((C, f ), λ) will be a saddle point of the Lagrangian. The theory of Lagrange multipliers (see [27] Theorem 28.3) now shows that if we can find (C, f ) satisfying the Kuhn–Tucker conditions (17) and (18) then this will yield a maximizer for the problem (14) in the case where the initial budget satisfies
wt0 = C + st0
Z1
0
e−rδtqA
BS(s)f (s) ds. (19)
We remark that the theory of Lagrange multipliers given in [27] is stated in terms of finite-dimensional spaces. We may, nevertheless, apply it by noting that if (C, f ) satisfies the Kuhn–Tucker conditions yet is not a maximizer then there must be some direction in which we can perturb (C, f ) to obtain a higher value for the gain. We may now apply the finite-dimensional theory to the vector space generated by this perturbation to obtain a contradiction. The result now follows by introducing a va-
riable
η := −λ exp(u(C)δt)
to simplify the equations.
This completes the proof of Proposition C.3. The outstanding difficulty is proving that an η solving wη = wt0 exists. One might attempt to use general duality theory to do this. Theorem 8.3.1 of [24] ensures that so long as wt0 is chosen to satisfy the Slater condition we can guarantee the existence of a λ minimizing the dual problem. However, this theorem does not guarantee the existence of a maximizer for the primal problem. As a result, even if one knows the value of λ it is still unclear wheth-
er a solution to (17) and (18) exists. When one introduces the variable η, this ensures that Cη and f η are well-defined once η is known and so the problem shifts to finding the correct value of η. We will resolve this issue in the cases of interest using a continuity argument in the next section.
C.2 Numerical approximation of the multi-period problem
The results of the previous section immediately suggests a numerical method for solving our investment problems with exponential utility. We define the minimum acceptable consumption to be
Cmin := inf{C ∈ R | u(C) > −∞}.
In addition to the previous assumptions that u is concave and increasing, we assume u† is continuous on (0, ∞) (20)
and pli→m0 u†(p) = ∞. (21)
32

We note that our assumption that u is concave and increasing also ensures that
pli→m∞ u†(p) = Cmin. (22)
Algorithm C.8. Choose a grid of points X = {x1, x2 . . . , xN } on which we will approximate the value function vt. We will write v ̃t for our approximate value function. This will be a concave increasing piecewise linear function equal to −∞ on (−∞, x1), linear on [xi, xi+1] and constant on [xN , ∞). We will simply need to store the values v ̃t(xi) at the grid points. To avoid numerical overflow issues we define a function l(x) := − log(−x) and store the values l(v ̃t(xi)) at each grid point rath-
er than storing v ̃t(xi) itself.
(i) Choose the values at the final time point T − δt by
v ̃T −δt(xi) := vT −δt(xi) = − exp(−u(xi)δt).
Or equivalently
l(v ̃T −δt(xi)) = l(vT −δt(xi)) = u(xi)δt.
(ii) Suppose that v ̃t is known. Set v ̃t−δt(xi) to be the solution of (14) with vt1 = v ̃t and initial budget xi. We describe in detail how to solve this problem in Proposition C.10 below.
Since vT −δt is concave and increasing and v ̃T −δt is piecewise linear v ̃T −δt(w) ≤ vT −δt(w). Let vˆt(w) be defined to be the solution of (14) with vt1 = v ̃t and initial budget w. We see that v ̃T −δt(w) ≤ vˆT −δt(w) ≤ vT −δt(w). Let X1 ⊆ X2 ⊆ X3 . . . be an increasing sequence of grids with X∞ := ∪∞
j=1Xi
being dense in (0, ∞). Write v ̃j
t for the approximations with respect to Xi. We
see by repeating the argument above that v ̃j
t (w) ≤ vt(w) at all points w ∈ (0, ∞). Hence we may define v ̃t(w) = jli→m∞ v ̃j
t (w).
Theorem C.9 (Convergence of Algorithm C.8). Define
Wmin,t = sup{w | vt(w) = −∞}.
For w > Wmin,t we have
v ̃t(w) = vt(w).
Proof. Let V denote the space of concave, increasing functions v(w) which satisfy v(w) = −∞ for w < 0 and where v(w) is bounded above by 0. For two adjacent times t0, t1 = t0 + δt in our grid we define a solution function φt0,t1,w : V → R by setting
φt0,t1,w(vt1 )
to equal the supremum in (13). By composing these solution functions in the obvious way, we obtain a solution function φt0,t1,w for any times in the grid with t0 ≤ t1.
33

We define a corresponding minimum budget as follows:
Wmin,t0,t1 (v) = sup{w | φt0,t1,w(v) = ∞}.
Let t0, t1 be adjacent times in the grid. Given v ∈ V with φt0,t1,w(v) finite, let (Ct0 , π) ∈ Aw,t0,t1 be a maximizing strategy for the problem (13) with vt1 = v. Suppose v′ ∈ V. We have
exp (−u(Ct0 )δt) −1 + st0 E 1 + v(w(Ct0 ,α)
1 )−
exp (−u(γt0 )δt) −1 + st0 E 1 + v′(w(γt0 ,α)
1)
≤ A exp(−uγt0 )∥v − v′∥∞
for some constant A. Hence for any ε > 0 we can find δ1 > 0 such that ∥v − v′∥∞ < δ1 implies
φt0,t1,w(v′) ≥ φt0,t1,w(v) − ε.
We have shown φt0,t1,w is lower semi-continuous in the sup norm for adjacent times t0 and t1. It follows that φt0,t1,w is lower semi-continuous for all t0 < t1. Given v ∈ V and h ∈ R, define the translation
vh(x) =
(
v(x − h) x − h ≥ 0
−∞ x − h < 0. = min{v(x − h), (sup v)1x−h<0}
Define ft0,t1,w,v(h) = φt0,t1,w(vh). The function v(x, h) = vh(x) is concave. Hence ft0,t1,w,v is concave as a function of h. If w > Wmin,t0,t1 (v) then 0 ∈ ri ft0,t1,w,v, where ri f denotes the relative interior of f . Hence ft0,t1,w,v is continuous in h at 0. Combining this with the lower semi-continuity result, we see that if w > Wmin,t0,t1 (v) then given ε > 0, we can find δ1 > 0 and δ2 > 0 such that
φt0,t1,w(vδ1 (x) − δ2) ≥ φt0,t1,w(v) − ε.
Let us write vε(x) for the function vδ1 (x) − δ2. Given a function f let us write Γf for the hypograph of f , that is to say the set of points on or below the graph. We have Γv ⊇ Γvε . For any function v′ ∈ V satisfying Γv ⊇ Γv′ ⊇ Γvε we will have
φt0,t1,w(v) ≥ φt0,t1,w(v′) ≥ φt0,t1,w(vε) ≥ φt0,t1,w(v) − ε.
since it is clear that Γv ⊇ Γv′ implies φt0,t1,w(v) ≥ φt0,t1,w(v′). Note that we can always find a piecewise linear approximation between Γv and Γvε . Given a value for ε0, we may inductively extend this to a sequence of positive εt for t ∈ T such that if our approximation v ̃t satisfies Γvt ⊇ Γv ̃t Γ(vt)εt then it will automatically satisfy Γvt−δt ⊇ Γv ̃t−δt ⊇ Γ(vt)εt−δt . By choosing a sufficiently fine grid we can ensure this condition is satisfied at time T − δt. By further refinements we may -
ensure that it is satisfied at all times.
34

Let us now describe in full detail how to solve (14) given that vt1 is of the form used in our algorithm. In Proposition C.10, we will give the formulae necessary to solve the problem on a computer in a format that addresses numerical overflow issues. Terms on the left hand side of the equations in the Proposition should be stored in computer memory and can be computed without overflow issues from the terms on the right. We use infinite values for some terms as a convenient shorthand, terms such -
as an exponential of −∞ should be interpreted in the obvious way. To store probability values we define a bijection L : [0, 1] → R ∪ {±∞} by
L(u) =
(
log(2u) u ≤ 0.5
− log(2 − 2u) u > 0.5.
We note that the GNU scientific library contains a function gsl sf log erfc which computes the logarithm of the complementary error function which we can then use to compute L(Φ). We define a function u ̃(y) = log(u†(ey)).
For the specific functional form
u(x) =
(
a(x − x0)n + b x ≥ 0
−∞ otherwise
which we will use in our numerical examples, we may compute u ̃ without experiencing overflow errors using the formulae
u ̃0(p) := 1
n − 1 (p − log(a n)), (23)
u ̃(y) =

   
   
log(eu ̃0(p)) x0 = 0
log(eu ̃0(p) + elog(x0)) x0 > 0
log(eu ̃0(p) − elog(−x0)) u ̃0(p) > log(−x0) and x0 < 0
−∞ u ̃0(p) ≤ log(−x0) and x0 < 0.
(24)
We note the standard approach to computing the log of sums and differences of exponentials without overflow issues should be used when evaluating expressions such as this.
Proposition C.10. Let v be a concave, non-positive, increasing function which is linear between grid points in X = {x1, x2, . . . xN } with xi strictly increasing. Suppose also that v is equal to −∞ on (−∞, x1) and constant on (xN , ∞). Suppose that u† is continuous and satisfies equations (20) and (21). Define a decreasing sequence of points log(pi) by
log(pi) =

 
 
∞ i=0
log(e−l(v(xi)) − e−l(v(xi+1))) − log(xi+1 − xi) 0 < i < N
−∞ i = N.
(25)
35

For a given value of log η, define L(U η
i ) and L(Qη
i ) for 0 < i < N by
L(U η
i ) = L Φ −1
2M + 1
M (log(η) − rδt − log(pi)) , (26)
L(Qη
i)=L Φ 1
2M + 1
M (log(η) − rδt − log(pi)) . (27)
Define L(U η
0 ) = L(Qη
0) = −∞ and L(U η
N ) = L(Qη
N ) = ∞. We may then define
the quantity Aη by
Aη = log elog(1−st0 ) +
N
X
i=1
elog(st0 )+log(−v(xi))+log elog Uη
i −elog Uη
i−1
!
.
We then have that
log(Cη) = u ̃(log(η) − log(δt) − Aη) (28)
where Cη is as defined in (11). We have
log(wη) = log elog(Cη) +
N
X
i=1
elog(st0 )−rδt+log(xi)+log elog Qη
i −elog Qη
i−1
!
(29)
and wη depends continuously upon η. If wt0 > st0 e−rδtx1 + γmin, we may find the value of ηwt0 by finding log(η) such that log(wη) = log(wt0 ). We then have
l(v(t0, wt0 )) = u(γη)δt − Aη. (30)
If wt0 < st0 e−rδtx1, the maximum in (14) is −∞ which is achieved by the negative consumption γ = wt0 − st0 e−rδtx1.
Proof. Corresponding to (25) we have a decreasing sequence of points pi given by
pi =

 
 
∞ i=0
v (xi+1 )−v (xi )
xi+1−xi 0 < i < N
0 i = N.
(31)
We will then have
v†(p) =
N
X
i=1
xi1[pi,pi−1)(p).
From (10)
f η(u) =
N
X
i=1
xi1[pi,pi−1) ηe−rδtqA
BS(u) .
Hence we will be able to deduce that
f η(U ) =
N
X
i=1
xi 1(U η
i−1,U η
i ] (U ) (32)
36

if we can show (26) ensures that
ηst0 e−rδtqA
BS(U η
i ) = pi. (33)
Writing φ for the pdf of the standard normal we compute
qA
BS(u) = φ(M + Φ−1(u))
φ(Φ−1(u))
= exp 1
2 (Φ−1(u)2 − (M + Φ−1(u))2)
= exp − 1
2 M 2 − M Φ−1(u) .
Hence equation (33) is equivalent to
Uη
i = Φ −1
2M − 1
M log 1
η erδtpi . (34)
for 0 < i < N , which will hold due to our definition (26). From (11) and (32) we have
Cη = u†

− η
δt −1 + st0
Z1
0
1+v
N
X
i=1
xi 1(U η
i−1,U η
i ](s)
!!
ds
!−1

= u†

− η
δt −1 + st0
Z1
0
1+
N
X
i=1
v(xi )1(U η
i−1,U η
i ](s)
!
ds
!−1

= u†

− η
δt −1 + st0 1 +
N
X
i=1
v(xi)(U η
i − Uη
i−1)
!!−1
 . (35)
Equation (28) follows immediately. Use (12) and (8) to see that
wη = Cη + st0
N
X
i=1
Z Uη
i
Uη
i−1
e−rδtqA
BS(s)xi ds
= Cη + st0
N
X
i=1
e−rδtxi(Q(U η
i ) − Q(U η
i−1))
= Cη + st0
N
X
i=1
e−rδtxi(Qη
i − Qη
i−1)) (36)
The last line follows directly from our definitions of Q, U η
i and Qη
i . We now see that equation (36) is equivalent to (29). Our explicit formula, (34), for Cη shows that it depends continuously η given the assumption (20). It then follows from equation (36) that wη depends
37

continuously on η. Lemmas (C.11) and (C.13) below then establish that we can solve for η in wη = wt0 under the conditions of the proposition. The value function is then given by
v(t0, wη) = exp(−u(Cη)δt) −1 + st0
Z1
0
(1 + v(
N
X
i=1
xi 1(U η
i−1,U η
i ] (s))) ds
!
= exp(−u(Cη)δt) −1 + st0 (1 +
N
X
i=1
v(xi)(U η
i − Uη
i−1))
!
and so (30) also follows.
Lemma C.11. Under the assumptions of Proposition C.10,
ηli→m0 wη = ∞.
Proof. Our assumptions on v ensure that
−1 + st0
Z1
0
(1 + v(f η(s))) ds ≤ −1 + st0 < 0.
Hence
0 > −1 + st0
Z1
0
(1 + v(f η(s)))
−1
<1
−1 + st0
.
It now follows from our equation (21) coupled with equation (11) that
ηli→m0 Cη = ∞.
The result now follows from (12).
Lemma C.12. Under the assumptions of Proposition C.10,
ηli→m∞ Cη = Cmin.
Proof. Our assumptions on v ensure that
−1 + st0
Z1
0
(1 + v(f η(s))) ds
−1
is bounded. Hence using the expression (11) combined with assumption (22) we find Cη → 0 as η → ∞.
Lemma C.13. Under the assumptions of Proposition C.10,
ηli→m∞ wη = γmin + st0 e−rδtx1.
38

Proof. Define
p∗ = inf ∂v(x1).
For η > 0, define
s∗
η = qA
BS(p∗η−1ert), (37)
which ensures that
s ≥ s∗ ⇐⇒ ηertqA
BS(s) < p⋆. (38)
We compute
Z1
0
qA
BS(s)f η(s)ds =
Z1
0
qA
BS(s)v†(ηe−rtqA
BS(s)) ds
=
Z s∗
η
0
qA
BS(s)v†(ηe−rtqA
BS(s)) ds
+1
ηe−rt
Z1
s∗η
ηe−rt qA
BS(s)v†(ηe−rtqA
BS(s)) ds
≤
Z s∗
η
0
qA
BS(s)x1 ds
+1
ηe−rt
Z1
s∗η
ηe−rt qA
BS(s)v†(ηe−rtqA
BS(s)) ds (39)
(40)
We note that p ∈ ∂v(v†(p)). By the definition of the subdifferential at v†(p)
v(x) ≤ v(v†(p)) + p(x − v†(p)).
Rearranging yields
pv†(p) ≤ px + v(v†(p)) − v(x).
Using the fact v is increasing and substituting x1 for x we find that for all p
pv†(p) ≤ px1 + v(xN ) − v(x1).
Using this inequality in (39) we find
Z1
0
qA
BS(s)f η(s)ds ≤
Z s∗
η
0
qA
BS(s)x1 ds
+1
ηe−rt
Z1
s∗η
(ηe−rt qA
BS(s)x1 + v(xN ) − v(x1)) ds
≤
Z s∗
η
0
qA
BS(s)x1 ds
+1
ηe−rt
Z1
s∗η
(p∗x1 + v(xN ) − v(x1)) ds. (41)
39

by (38). From (37) ηli→m∞ s∗
η = 1.
We may therefore take the limit of the inequality (41) to find
lim inf
η>0
Z1
0
qA
BS(s)f η(s)ds ≤ x1.
Using this, Lemma C.12 and the definition of wη in equation (12) we find
lim inf
η>0 wη ≤ Cmin + st0 e−rδtx1.
From (11) and (12) one sees that, on the other hand, for all η > 0 we have
wη ≥ Cmin + st0 e−rδtx1.
The result follows.
Remark C.14. We note that that if we follow the optimal investment strategy at time t, then the optimal investment strategy will result in a wealth at time t + δt which takes values in the grid {x1, . . . , xn}. We may then approximate the value function on the space-time grid {x1, . . . xn} × {0, δt, 2δt, . . . , T }. One can then obtain a simulation of the optimal strategy by first simulating the stock price on the time grid and then computing the corresponding dynamics of xt in the grid {x1, . -
. . xn} using this approximation to the value function. Since the wealth process never leaves a fixed space-time grid, we can use the same approximation of the value function for all the scenarios.
Remark C.15. When implementing this algorithm we notice that many values of U η
i will be extremely close to either 0 or 1, and so including these terms will have a negligible effect on the values of the sums in the equations (28), (29). Financially this is equivalent to ignoring extreme events of very low probability where the P and Q disagree by a large amount. Since our payoff functions f take values in X , and so are bounded and positive, ignoring these extreme events will have no material impact upon either the price or the expected utility. The value we chose in our num-
erical calculations was ε = 10−10 max |v(xi)|−1. This can be used to speed up the algorithm. When calculating wη, choose some small ε and define
imin := max{1} ∪ {i | Ui < ε}
imax := min{N } ∪ {i | Ui > 1 − ε}.
To compute these values and the values of Ui, first use the method of bisection to find some i∗ where ε < Ui∗ < 1 − ε. Then compute the values of Ui from i∗ down to imin, stopping when Ui < ε. Similarly compute the values of Ui from i∗ up to imax, stopping when Ui > 1 − ε. No other values of Ui outside the range imin −1 ≤ i ≤ imax are then needed in the computation of wη. When computing the values of the sums in (28), (29) use indices running from imin to imax rather than form 1 to n.
40

D Proof of Lemma C.5
Proof. If μ = r, then the result is trivial. We will consider the case μ > r, the case μ < r is similar. The classification of complete markets already shows that the Black–ScholesMerton market over the time period [t0, t1] is isomorphic to a market of this form for an appropriate choice of qA which we will call qA
BS. Let dQ
dP denote
the Radon–Nikodym derivative of the measures Q and P in the Black–Scholes
Merton market. Let F dQ
dP
denote the P-measure distribution function of the Radon–Nikodym derivative. The classification theorem moreover gives us an isomorphism for both the P and Q measures which maps the uniformly dis
tributed random variable U ′ := F dQ
dP
( dQ
dP ) to U . In particular this tells us that
Zw
0
qA
BS(s)ds = PQA (U ≤ w) = PQ(F dQ
dP
(U ′ ≤ w)) (42)
Differentiating this, we may obtain an expression for qA
BS.
The P measure distribution function of the log stock price, zt1 = log(St1 ) given the log stock price zt1 in the Black–Scholes–Merton model is
p(z) = 1
√2πσδt exp − (z − (zt0 + (μ − 1
2 σ2)δt))2
2σ2δt .
Similarly the Q measure distribution function of zt1 is
q(z) = 1
√2πσδt exp − (z − (zt0 + (r − 1
2 σ2)δt))2
2σ2δt .
The standard computation of the Q measure using Girsanov’s theorem shows that
dQ
dP (z) = q(z)
p(z) .
Hence
dQ
dP (z) = exp − (z − (zt0 + (r − 1
2 σ2)δt))2 − (z − (zt0 + (μ − 1
2 σ2)δt))2
2σ2δt .
Note that the term in side the exp is linear in z, so dQ
dP is decreasing. Hence
U ′(z) is decreasing, and we recall that U ′ is uniformly distributed. Hence, U ′(z) = 1 − Fz(z) where Fz is the P-measure distribution function of zt. But conditioned on zt0 , zt1 is normally distributed with mean μ − 1
2 σ2 and standard
deviation σ√δt. Hence
zt1 = zt0 + (μ − 1
2 σ2)δt + σ
√
δt Φ−1(U ′)
where Φ is the inverse distribution function of the standard normal distribution.
41

We now compute
PQ(U ′ ≤ w) = PQ(zt1 ≤ zt0 + (μ − 1
2 σ2)δt + σ
√
δtΦ−1(w))
= PQ(zt1 ≤ zt0 + (r − 1
2 σ2)δt + (μ − r)δt + σ
√
δtΦ−1(w)).
Since zt1 is normally distributed in the Q measure with mean r − 1
2 σ2 and
standard deviation σ√δt we find
PQ(U ′ ≤ w) = Φ (μ − r)√δt
σ + Φ−1(w)
!
.
Combining this with (42), we get the result.
42

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:29.014Z
- **Text Length:** 74668 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 42 of 42
