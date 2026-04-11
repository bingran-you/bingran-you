# PDF Document: Xie et al. - 2025 - PAC-Bayes Meets Online Contextual Optimization.pdf

**File Path:** Xie et al. - 2025 - PAC-Bayes Meets Online Contextual Optimization.pdf

**Processed Date:** 2026-02-10T18:18:22.176Z

**File Size:** 562.30 KB

**Total Pages:** 15

**Extracted Pages:** 15

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3472

**Title:** PAC-Bayes Meets Online Contextual Optimization

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

PAC-Bayes Meets Online Contextual Optimization
Zhuojun Xie Adam Abdin Yiping Fang⋆ Laboratoire Ge ́nie Industriel, CentraleSupe ́lec, France xie.zhuojun@centralesupelec.fr
Laboratoire Ge ́nie Industriel, CentraleSupe ́lec, France adam.abdin@centralesupelec,fr
Laboratoire Ge ́nie Industriel, CentraleSupe ́lec, France yiping.fang@centralesupelec.fr
Abstract
The predict-then-optimize paradigm bridges online learning and contextual optimization in dynamic environments. Previous works have investigated the sequential updating of predictors using feedback from downstream decisions to minimize regret in the fullinformation settings. However, existing approaches are predominantly frequentist, rely heavily on gradient-based strategies, and employ deterministic predictors that could yield high variance in practice despite their asymptotic guarantees. This wo-
rk introduces, to the best of our knowledge, the first Bayesian online contextual optimization framework. Grounded in PAC-Bayes theory and general Bayesian updating princi
ples, our framework achieves O(√T ) regret for bounded and mixable losses via a Gibbs posterior, eliminates the dependence on gradients through sequential Monte Carlo samplers, and thereby accommodates nondifferentiable problems. Theoretical developments and numerical experiments substantiate our claims.
1 INTRODUCTION
1.1 Problem Statement
We study a class of online contextual decision-making problems that have full-information feedback. In contrast to the widely studied online contextual bandits problem, which only assumes the observability of the reward or loss of the chosen action, the full-information setting reveals the outcome of all uncertainties relevant to the decision. Specifically, at each stage t, the decision-maker must determine a decision zt for stage-wise uncertainty ξt of which the probability distribution Pξt is un-
known but correlated to observed
contextual information xt. The uncertainty ξt will be realized after the decision is made. To prescribe a decision zt for all t ∈ [T ], the decision-maker relies on both the current context xt and historical information
Ht−1 = {(xi, zi, ξi)}t−1
i=1 .
In this work, we address the online contextual decisionmaking problem with full-information by combining predict-then-optimize (PtO) and online learning. In particular, we extend decision-oriented learning from the frequentist to the Bayesian setting. We design a Bayesian update mechanism for the posterior over the model parameters that is aligned with the PACBayes theory and the general belief updating framework, both of which are detailed in Section 2. This mechanism yields smooth online updates-
 and a Gibbs posterior that minimizes a type of PAC-Bayes bound.
1.2 Related Work
Online contextual decision-making. Online contextual decision-making has been widely studied in Operations Research (OR), with applications ranging from inventory management (Cheung et al., 2022), medical services (Keyvanshokooh et al., 2025), pricing (Chen et al., 2025), and advertising (Ye et al., 2023). Unlike its offline counterpart, online contextual decision-making must address the dynamic uncertainty encapsulated in the sequential data stream (Hoi et al., 2021). This feature has outlined th-
e importance of online learning for its methodological adaptability and efficiency in dynamic environments. Among the intersections of online learning and contextual decision-making, the contextual (multi-armed) bandits problem—where only the reward of the chosen action is observed—has developed the most extensive body of literature (Li et al., 2010). We refer readers to the work by Bietti et al. (2021) and Chen et al. (2021) and references therein for more details on contextual bandits. In this w-
ork, we focus on the online contextual optimization with full information. We study this setting especially for its ability to use rich optimization models for decisions
arXiv:2511.20413v1 [math.OC] 25 Nov 2025

PAC-Bayes Meets Online Contextual Optimization
and ML models for prediction. While a considerable body of bandits literature extends beyond linear reward functions (Li et al., 2010; Krause and Ong, 2011; Li et al., 2017; Chowdhury and Gopalan, 2017; Zhou et al., 2020), these works typically emphasize the exploration–exploitation trade-off within relatively simple decision-making problems. These typically focus on discrete actions, knapsacks with stage-wise constraints, or long-term resource constraints (Slivkins et al., 2024; Pacchiano et al.,-
 2025; Castiglioni et al., 2022). By contrast, the full-information setting enables decision-makers to leverage powerful predictive and prescriptive models to better exploit problem structure when uncertainty is well-estimated. More broadly, it generalizes the bandit framework and encompasses online variants of offline contextual optimization (Sadana et al., 2025), in which the data stream is dynamic and non-stationary.
Decision-oriented offline PtO. It is widely acknowledged that learning a predictive model using conventional statistical criteria, such as mean squared error (MSE) or maximum likelihood estimation (MLE), may cause a misalignment between model training and inference (Kong et al., 2022). To address this, the seminal frameworks of smart predict-and-optimize (Elmachtoub and Grigas, 2022) and decision-focused learning (Mandi et al., 2024, DFL), suggested a structured learning framework that optimizes p-
redictive models directly for decision performance. Subsequent work introduced approaches to mitigate the computational challenges in deriving the gradient of decisions w.r.t. problem parameters, enabling integration with standard gradient-based training methods for parametric models. We refer the reader to the survey by Mandi et al. (2024) for a comprehensive overview. Within this research stream, optimization problems involving uncertainty in the constraints or nonlinear, nonconvex constraints/o-
bjectives have received limited attention, largely due to the technical difficulty of deriving gradients. Moreover, applications were limited to Frequentist methods, where a single predictive model is trained from large datasets. In contrast, our framework relaxes the strict reliance on gradients, thereby accommodating a broader range of decisionmaking structures as long as forward computation remains feasible.
Online PtO. Much of the online contextual decisionmaking literature extends from the offline setting, where a parametric model is iteratively updated in a PtO, or estimate-then-optimize manner. In the bandits setting, for example, MSE is often used to update a deterministic reward model, typically with l1- (Chu et al., 2011) or l2-regularization (Zhou et al., 2020). In a Bayesian approach with Thompson sampling, the
posterior of the reward function parameters is often updated by MLE with a specified likelihood (Agrawal and Goyal, 2013; Kassraie and Krause, 2022; Clavier et al., 2024). However, both MSE and MLE serve only as indirect criteria for decision-making and can lead to suboptimal decisions under considerable model misspecification (Vaswani et al., 2023; Elmachtoub et al., 2025).
In the full-information setting, model updates are typically performed using online gradient descent (OGD) or mirror descent. For example, Lobos et al. (2021) proposed a dual mirror descent framework for joint online learning and optimization, but did not explicitly consider the effect of model learning on decision quality. Two works are particularly related to our study. Liu and Grigas (2022) studied a knapsack problem with unknown reward and consumption, where covariates were available. Rather t-
han updating the predictive model with MSE, they employed the SPO+ loss (Elmachtoub and Grigas, 2022) within a dual mirror descent framework, thereby directly accounting for the impact of prediction on decision-making. More recently, Capitaine et al. (2025) extended contextual linear programs to the online setting with uncertainty in the cost vector, incorporating a differentiable regularization term to enable gradient-based updates within an OGD framework. Our approach infers parameters via a Gib-
bs posterior, enabling coherent prior–posterior updates and avoiding strict reliance on gradients, which supports non-linear and nondifferentiable models.
Our contributions are summarized as follows: (1) We introduce a Bayesian online contextual optimization (BOCO) framework that unifies general Bayesian updating with PAC-Bayes in the PtO setting. Using a
Gibbs posterior and aggregation, we obtain an O(√T ) regret guarantee under bounded, mixable losses. (2) We develop a practical PAC-Bayes SMC scheme with any-time gradient-free weight updates and Liu–West rejuvenation, yielding a Metropolis–Hastings ratio that depends only on incremental loss. (3) On a nondifferentiable knapsack with uncertain weights, the aggregated approach delivers higher, more stable reward and feasibility than Gibbs stochastic prediction and deterministic PtO/DFL baselines, w-
ith especially strong gains in early, data-scarce stages.
2 PRELIMINARIES
In this section, we introduce two critical ingredients of our framework: the general Bayesian updating and the PAC-Bayes learning. We review these topics in the context of data-driven contextual optimization. For clarity, the discussion is presented primarily in the

Xie, Abdin, and Fang
offline setting, with extensions to online setting presented in Section 3.
2.1 General Bayesian Updating
We first review the basic Bayesian updating rule. Given a model parameter space Θ ∋ θ, a covariate space X ∋ x, an uncertainty space Ξ ∋ ξ, a predictive model class M := {m(·; θ) : X → Ξ, θ ∈ Θ}, and a batch of observations D = {(xi, ξi)}, the Bayes rule is given by:
π(θ) = l(θ|D)π0(θ)
∫
Θ l(θ′|D)π0(θ′)dθ′ (1)
where π0 and π are the prior and posterior distribution over Θ, and l(θ|D) = ∏
(xi,ξi)∈D pθ(ξi|xi) where
pθ(·|x) is the probability density (or mass function) of ξ under model m(·; θ), denoting the likelihood of parameters θ given observations D. The likelihood is central for Bayesian inference, as it directly reflects the modeler’s acceptance of specific model parameters given observations. Often, an analytical likelihood is adopted, such as Gaussian likelihoods for general-purpose modeling (Kassraie and Krause, 2022) or right-censored Weibull distributions for demand modeling (Chuang and Kim, 2023)-
. However, reliance on analytical likelihoods inevitably risks model misspecification when the true data-generating process cannot be captured by such specifications. Although there is extensive literature on likelihood-free Bayesian inference, these approaches still require an appropriate definition of proximity between the simulated and observed data (Thomas et al., 2022).
For data-driven optimization, it is helpful to adopt a philosophy similar to frequentist decision-oriented learning when interpreting the likelihood in Bayesian inference. That is, parameters should be judged by prescriptiveness—the quality of the decisions they induce. In contrast to a probability density-based likelihood, prescriptiveness has two important features. Firstly, it is tractable, though non-analytical, to compute by passing parameters through the PtO pipeline. Secondly, it provides a-
 natural one-dimensional summary statistic reflecting the decision-making performance of the parameters.
Task-oriented likelihood constructions are well established in Bayesian statistics. For instance, Ibrahim and Chen (2000) introduced a power factor for the likelihood term, such as l(θ|D)α, for robustness. Jiang and Tanner (2008) proposed a classification error-based criterion to mitigate the impact of a misspecified likelihood, and suggested a risk-based posterior updating. Other constructions were developed thereafter, among which we highlight the work by Bissiri et al. (2016)
that systematically proposed the general Bayesian updating which most directly motivates our work. General Bayesian updating addresses likelihood misspecification when a task loss is available, an insight that closely aligns with the decision-oriented learning in data-driven contextual optimization. The general updating rule can be framed in Eq (2) as a variant of Eq (1):
π(θ) = e−L(θ|D)π0(θ)
∫
Θ e−L(θ′|D)π0(θ′)dθ′ ∝ e−L(θ|D)π0(θ), (2)
where L(θ|D) denotes the task loss. General Bayesian updating replaces the likelihood l(θ|D) by a pseudolikelihood e−L(θ|D), resulting in a Gibbs posterior.
Computationally, a Gibbs posterior enables gradientfree Bayesian inference techniques, thereby generalizing decision-oriented learning to other nondifferentiable optimization problems. While no analytical form exists for such a pseudo-likelihood, Metropolis–Hastings Markov Chain Monte Carlo (MCMC) only requires forward computation of the acceptance probability. Additionally, approximate Bayesian computation is applicable by using the task loss L(θ|D) as a summary statistic and accept/reject θ base-
d on proximity to the empirical optimum minθ∈Θ L(θ|D). On the other hand, if the gradient ∇θL(θ|D) is available, gradient-based techniques can be considered to improve computational efficiency, such as Hamiltonian MC and neural variational inference (Mnih and Gregor, 2014).
General Bayesian updating is a principled way to update the belief for a specific task under model misspecification. In practice, such a posterior can be interpreted as the outcome of learning from finite data given a specific loss. In data-driven settings, since the Gibbs posterior is always accompanied with a predictive model m(·; θ), the generalization ability of such a combination for making good decisions/predictions is of interest in OR/ML. Section 2.2 provides a theoretical support for usin-
g the Gibbs posterior in learning tasks.
2.2 PAC-Bayes Learning
We refer readers to Alquier (2024) for a modern overview of PAC-Bayes. PAC, short for Probably Approximately Correct, is a theoretical framework that provides probabilistic guarantees on the generalization error of a learning algorithm, ensuring that with high probability the error remains close to its expected value when trained on finite data. PAC-Bayes learning particularly focuses on the generalization error of a model under any posterior of parameters incorporating a prior distribution. To pr-
ovide a concrete example

PAC-Bayes Meets Online Contextual Optimization
and to motivate our approach, we present a well-known PAC-Bayes bound for bounded loss. Recent extensions to loss with more general tail behaviors can be found in Rodriguez-Galvez et al. (2024).
Alquier (2024, Theorem 2.1): Suppose the data is i.i.d. collected from P and loss is bounded in [0, C]. Then the following inequality holds with probability at least 1 − δ over the draw of data for any λ > 0, any δ ∈ (0, 1), any data-independent prior π0 ∈ P(Θ), and any posterior π ∈ P(Θ):
Eθ∼π[R(θ)] ≤ Eθ∼π[r(θ)] + λC2
8n + DKL(π∥π0) + log 1
δ
λ,
where R(θ) and r(θ) denote the true and empirical risk, respectively. P(Θ) denotes the set of all probability measures over Θ. In particular, the expectation Eθ∼π[R(θ)] corresponds to the true risk of the Bayesian stochastic predictor, showing the generalization ability of randomly drawn predictive model m(·; θ), θ ∼ π. Since this upper bound is arbitrary for π, the practical value of PAC-Bayes lies in the optimization of π for minimizing this bound. According to Alquier (2024, Corollary 2.3), the-
 minimizer takes the Gibbs form:
e−λr(θ)π0
∫
Θ e−λr(θ′)π0(dθ′) =
arg min
π∈P (Θ)
{
Eθ∼π[r(θ)] + DKL(π∥π0)
λ
}
,
which coincides with the Gibbs posterior in the general Bayesian updating with an extra scalar λ that controls the trade-off between the discrepancy DKL(π∥π0) and the pseudo-likelihood. The discrepancy DKL(π∥π0), i.e., the relative entropy between posterior and prior, controls the complexity of the posterior and can be replaced by alternative measures (Amit et al., 2022). Other discrepancies generally do not preserve the optimality of the Gibbs posterior. Nonetheless, Bissiri et al. (2016) showed -
that relative entropy is the unique choice that preserves coherent inference, a crucial property for online learning to guarantee any-time validity. Therefore, we stick to the relative entropy for our online framework due to the coherence and decision-oriented explanation of the Gibbs posterior under the general Bayesian updating.
3 BOCO
In this section, we introduce our Bayesian Online Contextual Optimization (BOCO) framework, including its definition, theoretical properties, and a practical algorithm.
3.1 Framework
Following the notations in Section 1, we recall that at each stage t, the decision-maker observes the covariate xt correlated to the uncertainty ξt, which further characterizes a parametric optimization problem P(ξ). Specifically, we assume the problem P(ξ) has the exact structure to reflect the real-world objective and constraints in the full-information setting. For generality, we write the problem as:
P(ξ) = arg min
z∈g(ξ)
c(z; ξ), (3)
where c(z; ξ) denotes the uncertainty-related objective function and g(ξ) the uncertainty-related feasible set for decision-making. This formulation allows the uncertainty to be in the objective and/or constraints. In the experiments, we focus on a hard-constrained integer knapsack problem with uncertainty in the weights.
Consider a decision-maker who employs a parametric model m ∈ M to predict the uncertainty in each stage t given covariate xt, with an initial data-independent prior π0 ∈ P(Θ). For any t ∈ [T ], the decision-making and learning proceed as follows:
zˆt = P(m(xt; πt)), (4)
πt+1(θ) ← e−λl(θ,dt)πt(θ)
∫
Θ e−λl(θ′,dt)πt(θ′)dθ′ , (5)
where λ > 0 controls relative importance between prior and current information, and dt = (xt, ξt). Particularly, with a slight abuse of notation, we define the pushforward of πt by m(xt; ·):
m(xt; πt) := (m(xt; ·))#πt, (6)
which is a probability measure over Ξ induced by πt. Furthermore, the loss function is defined as the regret:
zˆt(θ) := P(m(xt; θ)),
l(θ, dt) := c′(zˆt(θ); ξt) − min
z∈g(ξt) c(z; ξt), (7)
l(πt, dt) := c′(zˆt; ξt) − min
z∈g(ξt) c(z; ξt), (8)
where c′(z; ξ) evaluates the decision quality of a decision z given uncertainty realization ξ, see Assumption 3.1 for example. A distinctive feature of our framework is to leverage the aggregated predictor m(xt; πt) in Eq (4), rather than the stochastic predictor m(xt; θ) with a randomly drawn θ ∼ πt at each stage t.
The aggregated predictor is common in cost-sensitive classification which would be subject to high variance from the stochastic predictor. Notably, Lacasse et al.

Xie, Abdin, and Fang
(2006) and following work considered a binary classification problem with asymmetric losses, and introduced the C-Bound for the aggregated predictor induced by the Gibbs posterior. Such aggregation strategies have been applied to the multi-armed bandits setting which shares a similar structure with multiclass classification. For instance, Sakhi et al. (2023) designed a posterior policy, which was a mixture of deterministic and parametric decision rules, to assign probabilities over finite actions.
The majority vote hardly generalizes to problems with a general decision space. By defining the pushforward measure m(xt; πt) in Eq (6), our framework allows the utilization of stochastic optimization and its variants to address the uncertainty encoded in the posterior, which assigns weights πt(θ) to many experts m(·; θ). This procedure aligns with the Bayesian decision theory, and still balances the exploitationexploration in online learning. In this case, exploitation corresponds to choosing the-
 maximum a posterior parameters, while exploration suggests a stochastic predictor m(xt; θt), θt ∼ πt for PtO in each stage.
3.2 Guarantees
Two theoretical properties of our Gibbs posterior πt in Eq (5) warrant further discussion. First, we establish that this update is valid in the online learning setting, i.e., it is consistent with the general Bayesian updating rule and achieves optimality under a specific criterion. Second, we derive the regret bound for such a posterior in online PtO under mild assumptions. Our theoretical analysis is built on the work by Haddouche and Guedj (2022), to which we refer readers for more details. Not-
e that they considered a binary classification and a linear regression task, while we extend to general parametric optimization problems.
We denote the data space D := (X × Ξ)T , D = {(x1, ξ1), . . . , (xT , ξT )} a random sample drawn from D by some probability rule μ, and dt = (xt, ξt) a pair observed at time t (i.e., a realization of (Xt, ξt)). Furthermore, we define the filtration F for a finite horizon T , that is, F := (Ft)t∈[T ] = (σ(Hi)|i ≤ t), in which Ft is a σ-algebra over the historical information Ht. This filtration is mainly used to define a type of regret for online learning that differs from the widely-used static a-
nd dynamic regret. Next, we make the following assumption on the evaluation function c′:
Assumption 3.1 (Bounded loss). ∃C > 0, such that
(a) ∀ξ ∈ Ξ, ∀z ∈/ g(ξ), c′(z; ξ) = maxa∈g(ξ) c(a; ξ),
(b) ∀ξ ∈ Ξ, ∀z ∈ g(ξ), c′(z; ξ) = c(z; ξ) ≤ C.
Theorem 3.2 (Haddouche and Guedj (2022), Corollary 3.1). Suppose Assumption 3.1 holds. For any dis
tribution μ over D, any λ > 0, any δ ∈ (0, 1), and any online posterior {π ̃} and prior {π} sequences, the following inequality holds with at least probability 1 − δ over the draw D ∼ μ:
T
∑
t=1
Eθ∼π ̃t+1 [E[l(θ, ξt)|Ft−1, xt]]
≤
T
∑
t=1
(
Eθ∼π ̃t+1 [l(θ, dt)] + DKL(π ̃t+1∥πt)
λ
)
+ λT C2
8 + log(1/δ)
λ.
Here l(θ, ξt) denotes the random loss of θ given ξt conditioning on Ft−1 and xt. The online posterior sequence {π ̃} denotes the posterior π ̃t is Ft−1measurable, depending only on π ̃t−1 and (xt−1, ξt−1). For each stage t and fixed parameters θ, the target (l.h.s.) is defined as E[l(θ, ξt)|Ft−1, xt] rather than minθ∈Θ l(θ, dt) such that, the decision-maker does not seek for an unrealistic oracle that achieves optimality for any stochastic realization ξt ∼ ξt, but a pragmatic approach to minimize -
the expected loss that is achievable when only information {Ht−1, xt} is available.
Theorem 3.2 provides a post-hoc criterion to update the belief, considering the decision zˆt is always made with prior πt before knowing ξt in online PtO. Once (xt, ξt) is realized, and the probability distribution of ξt conditioning on (xt, Ht−1) is known, the decisionmaker would update the prior to a posterior that optimizes the regret, and leverages this posterior for the future. To obtain the posterior for each stage t, we optimize the r.h.s. that relates to the posterior:
π ̃t+1 := arg min
π∈P (Θ)
{
Eθ∼π[l(θ, dt)] + DKL(π ̃∥πt)
λ
}
which justifies the updating rule in Eq (5). Next, we show the regret bound for implementing this posterior from stage t as the prior for stage t + 1.
Theorem 3.3 (Haddouche and Guedj (2022), Corollary 3.3). Suppose Assumption 3.1 holds. For any distribution μ over D, any λ > 0, any δ ∈ (0, 1), and any online posterior sequences {πt}, the following inequality holds with at least probability 1 − δ over the draw D ∼ μ:
T
∑
t=1
Eθ∼πt [E[l(θ, ξt)|Ft−1, xt]]
≤
T
∑
t=1
Eθ∼πt [l(θ, dt)] + O
(√log(1/δ )C 2 T
)
where optimal λ =
√ 8 log(1/δ)
T C2 is adopted.

PAC-Bayes Meets Online Contextual Optimization
Since Theorem 3.3 applies to any posterior sequence, it also applies to the Gibbs posterior in Eq (5) which admits the optimal updating rule by Theorem 3.2.
We emphasize that the optimality of the Gibbs posterior is w.r.t. the risk of stochastic predictor in Theorem 3.2. Additionally, the guarantee in Theorem 3.3 applies to the stochastic predictor m(xt; θ), not the aggregated predictor m(xt; πt). It is possible that, if the true risk and empirical risk in Theorem 3.2 are defined for the aggregated predictor, the Gibbs posterior may not retain the optimality. We stick to the Gibbs posterior updating in Eq (5) for two reasons. First, it aligns with the-
 general Bayesian updating principle. Second, it admits a point-wise updating process without using distributional information in πt, thereby reducing computational effort, allowing individual evolutions of parameters θ as the algorithms we propose in Section 3.3.
We aim to modify Theorem 3.3 to construct a generalization bound for the aggregated predictor m(xt; πt) for each stage t. Define the target risk for πt as:
Rt(πt) := E[l(πt, ξt)|Ft−1, xt]. (9)
The target risk in Eq (9) differs from the l.h.s. in Theorem 3.3 by evaluating the decision zˆt optimized for distribution m(xt; πt) under conditional distribution of ξt, rather than the posterior expectation for zˆt(θ). We leverage the following mixability assumption on the decision-making and predictive model to provide a generalization bound for our BOCO framework with limited modification to Theorem 3.3.
Assumption 3.4 (λ-mixable loss). The loss function l is λ-mixable given M, i.e., ∀λ > 0, ∀d ∈ X × Ξ, ∀π ∈ P (Ξ),
l(π, d) ≤ − 1
λ log Eθ∼π[e−λl(θ,d)].
The mixability is a standard assumption for online aggregation and it has a natural justification in datadriven optimization. This property formalizes why distribution-aware (stochastic) optimization can outperform plug-in decisions that commit to a single scenario. With Assumption 3.4, we derive an extension of Theorem 3.3 for the aggregated predictor.
Corollary 3.5. Suppose Assumption 3.1 and 3.4 hold. For any distribution μ over D, any λ > 0, any δ ∈ (0, 1), and any online posterior sequences {πt}, the following inequality holds with at least probability 1 − δ over the draw D ∼ μ:
T
∑
t=1
Rt(πt) ≤
T
∑
t=1
Eθ∼πt [l(θ, dt)] + O
(√log(1/δ )C 2 T
)
where optimal λ =
√ 8 log(1/δ)
T C2 is adopted.
Corollary 3.5 achieves the same rate for the aggregated predictor as the one for stochastic predictor in Theorem 3.3. The proof mainly depends on bounding the risk of aggregated predictor by that of the Gibbs stochastic predictor. We note that this bound may be vacuous in practice, especially in case where severe uncertainty exists and stochastic optimization provides better decision than a point-based deterministic optimization. We demonstrate this phenomenon in the experiments when the aggregate-
d predictor remarkably outperforms the stochastic predictor.
3.3 Algorithms
We propose a practical sequential Monte Carlo (SMC) sampler to approximate the posterior πt for nondifferentiable optimization problems that only allow objective evaluation. Our algorithm, summarized in Algorithm 1, follows a classic SMC procedure with MCMCbased rejuvenation steps after importance sampling. We highlight the techniques we utilized to mitigate the computational challenges in rejuvenation using a LiuWest kernel density estimator (Liu and West, 2001). The estimator is used to approxim-
ate current posterior πˆt, and to act as an independent proposal distribution
for drawing proposed parameters θ′ in the MCMC process.
Consider the original definition of acceptance ratio for proposed parameters θ′ given current parameters θ and posterior πt:
r = πt+1(θ′)q(θ|θ′)
πt+1(θ)q(θ′|θ) = πt(θ′)e−λl(θ′,dt)q(θ|θ′)
πt(θ)e−λl(θ,dt)q(θ′|θ) , (10)
where q is a proposal distribution. In the SMC, it is challenging to evaluate the density under πt, which has no analytical form. Therefore, a practical approach is to consider the expansion of πt, leading to:
r = π0(θ′)e−λ ∑t
i=0 l(θ′,di)q(θ|θ′)
π0(θ)e−λ ∑t
i=0 l(θ,di)q(θ′|θ) . (11)
Although Eq (11) allows the computation of acceptance ratio, it requires to evaluate the decision quality of parameters θ and θ′ over all historical instances up to stage t, this can be very time-consuming when number of particles N and MCMC steps L are large. Therefore, we adopt the Liu-West Gaussian mixture estimator qt defined in Eq (12) to approximate the current posterior πt, and regard qt as the independent

Xie, Abdin, and Fang
proposal distribution. This leads to:
qt =
N
∑
i=1
witN (mit; Ht) (12)
r = πt(θ′)e−λl(θ′,dt)qt(θ)
πt(θ)e−λl(θ,dt)qt(θ′) ≈ qt(θ′)e−λl(θ′,dt)qt(θ)
qt(θ)e−λl(θ,dt)qt(θ′)
= e−λl(θ′,dt)+λl(θ,dt), (13)
which cancels the posterior πt and only requires the in
cremental loss from θ to θ′ as long as θ′ is drawn from qt. Compared to Eq (11), this approach only requires one decision quality evaluation for proposed parameters θ′. Moreover, it can be seen as that, if parameters θ and θ′ have the same density in the product of prior and proposal, the posterior πt+1 should move towards the one with better decision quality.
Algorithm 1: PAC-Bayes Sequential Monte Carlo Input: π0, a, τ, λ, L, N, l, T .
Initialize ∀i ∈ [N ], θi0 ∼ π0, wi0 = 1/N ; for t ← 0 to T do πˆt ← ∑N
i=1 wtiδθi
t;
zˆt ← P(πˆt);
lt ← c′(zˆt, ξt);
w ̃ti ← wtie−λl(θi
t,dt), ∀i ∈ [N ]; wti ← wti/ ∑N
j=1 w ̃j
t , ∀i ∈ [N ];
if 1/ ∑N
i=1(wti)2 ≤ τ N then
θ ̄t ← ∑N
i=1 wtiθti;
Σt ← ∑N
i=1 wti(θti − θ ̄t)(θti − θ ̄t)⊤;
mit ← aθti + (1 − a)θ ̄, ∀i ∈ [N ];
Ht ← (1 − a2)Σt; for i ← 1 to N do for k ← 1 to L do
I ← Cat(wt1, . . . , wtN );
θ′ ∼ N (mtI , Ht);
r ← e−λl(θ′,dt)+λl(θi
t ,dt ) ;
if r ≥ u ∼ Uniform[0, 1] then θti ← θ′;
wti ← 1/N, ∀i ∈ [N ];
θti+1 ← θti, ∀i ∈ [N ];
wti+1 ← wti, ∀i ∈ [N ];
Output: {lt}T −1
t=0
4 Experiments
In this section, we test our BOCO framework on a nondifferentiable integer knapsack problem with uncertain item weight matrix. Mathematically, a fourdimensional decision variable z ∈ N4 denotes the quantities of different items, c ∈ R4 the unit reward of
each item, b ∈ R3 the available amount of three resources, q ∈ R3 the unit salvage value of resources, and At ∈ R3×4 the weight matrix of items. At each stage t the decision-maker observes the covariate xt
and must make the decision zˆt with predicted A ̃t. The problem can be formulated as:
max
z∈N4
+
c⊤z + q⊤[b − A ̃tz]+
s.t. A ̃tz ≤ b
where [a]+ = [max{ai, 0}]⊤ for a vector a. The reward for decision zˆt is revealed given At. In particular, if zˆt is not feasible for At, the reward will be zero. Other
wise, the reward will be rt = c⊤zˆt + q⊤[b − Atzˆt]+. In
this problem, we take values c = [12, 12, 12, 12]⊤, b = [8, 8, 8]⊤, q = [3, 3, 3]⊤. The data-generation process for (xt, At) is a variant of the ARMA(2,2) proposed by Bertsimas and Kallus (2020). We reshape and rescale the demand to fit our case study.
In our BOCO framework, we have N scenarios {A ̃it}iN=1
generated by N models {m(·; θi)}iN=1 for each stage t given xt. Therefore, we frame a chance-constrained stochastic program given the empirical posterior distribution as follows:
max
z∈N4
+
N
∑
i=1
wtiI[A ̃iz ⪯ b]{c⊤z + q⊤[b − A ̃itz]+}
s.t.
N
∑
i=1
wtiI[A ̃iz ⪯ b] ≥ α
where α ∈ (0, 1) is the feasibility target. We derive a deterministic equivalent mixed-integer linear program in the supplementary material to solve it. For all approaches considered in the experiments, we compared BMA (our BOCO with pushforward distribution and stochastic optimization), BGS (one predictive model drawn from πt per step), PtO (MSE-trained deterministic predictor), and DFL (decision loss-trained deterministic predictor). All experimental details are provided in the complementary mat-
erial.
Figure 1 depicts the performance of different frameworks on the time-averaged cumulative reward and feasibility from 100 individual experiments with T = 1000. The uncertainty range is plotted using the 10-90 percentiles within the 100 experiments. We summarize the statistics of results in Table 1. In the table, r ̄1000 and α ̄1000 denote the averaged reward and feasibility over 1000 steps, while r ̄500 and α ̄500 denote that over the last 500 steps. First, we note the stability of BMA framework in-
dicated by the uncertainty of reward and feasibility across 100 runs. We annotate the average of cumulative reward and feasibility at the last stage for each framework. Comparing BMA

PAC-Bayes Meets Online Contextual Optimization
Figure 1: Time-averaged cumulative reward and feasibility of four frameworks in 100 trials.
0 200 400 600 800 1000 T
0
20
40
60
80
100
Average Reward
(a) Time-Averaged Cumulative Reward
BMA BGS DFL PtO
0 200 400 600 800 1000 T
0.00
0.20
0.40
0.60
0.80
1.00
Average Feasibility
(b) Time-Averaged Cumulative Feasibility
Note: The uncertainty range is plotted using 10-90 percentiles from 100 trials.
Table 1: Framework performances in average reward and feasibility
Framework r ̄1000 r ̄500 α ̄1000 α ̄500
BMA 84.52 ± 0.05 84.53 ± 0.03 0.99 ± 0.00 0.99 ± 0.00 DFL 75.63 ± 5.27 78.16 ± 0.24 0.92 ± 0.08 0.96 ± 0.01 BGS 48.45 ± 6.29 53.63 ± 1.89 0.54 ± 0.07 0.60 ± 0.02 PtO 31.85 ± 0.39 31.67 ± 0.05 0.32 ± 0.01 0.32 ± 0.00
Note: The uncertainty is computed using one standard deviation from 100 trials.
with BGS highlights the benefit of combining the posterior distribution and the stochastic optimization for decision-making under uncertain environments. Although the BGS framework leverages the parameters that constitute the SMC sample, it suffers from infeasible decisions. Similarly, the DFL framework suffers from the infeasibility of decisions especially at the early stage, then improves the feasibility by making conservative predictions and leads to conservative decisions. Therefore, its cumul-
ative reward is consistently smaller than that of BMA. Additionally, for the deterministic approaches, the initialization of model parameters has nonnegligible impact on the model’s performance, while BMA mitigates such impact by leveraging distributional information. As the baseline, the PtO framework performs the worst in terms of reward and feasibility. This is due to the fact that the reward is strongly asymmetric in the prediction. Consequently, the MSE-based learning is highly misaligned wit-
h the decision-making target. Overall, these results highlight the advantages of the BOCO framework for decision-making under uncertainty. Specifically, BOCO framework demonstrates its stability and robustness especially at the early stage, when data are insufficient for the deterministic DFL approach.
5 Conclusions
This work proposes a Bayesian online contextual optimization (BOCO) framework that unifies general Bayesian updating with PAC-Bayes to bring principled, task-oriented learning into online predict-thenoptimize. By updating beliefs via a Gibbs posterior, the method provides coherent any-time updates and
achieves O(√T ) regret for bounded and mixable losses. Computationally, a sequential Monte Carlo sampler with Liu–West rejuvenation delivers gradient-free inference, enabling nondifferentiable and structured optimization models to be handled seamlessly within the online loop. Empirically, on a nondifferentiable knapsack with uncertain weights, the BOCO framework attains higher, more stable reward and feasibility than Gibbs stochastic predictor and deterministic PtO and DFL baselines, particularly -
in the data-scarce early stages. These results show, for the first time, that coupling PAC-Bayes with PtO yields a robust, theoretically grounded, and practically effective approach to online contextual decision-making under uncertainty.

Xie, Abdin, and Fang
References
Agrawal, S. and Goyal, N. (2013). Thompson sampling for contextual bandits with linear payoffs. In Proceedings of the 30th International Conference on Machine Learning, volume 28, pages 127–135.
Alquier (2024). User-friendly introduction to pacbayes bounds. Foundations and Trends® in Machine Learning, 17(2):174–303.
Amit, R., Epstein, B., Moran, S., and Meir, R. (2022). Integral probability metrics PAC-Bayes bounds. In Advances in Neural Information Processing Systems, volume 35, pages 3123–3136.
Bertsimas, D. and Kallus, N. (2020). From predictive to prescriptive analytics. Management Science, 66(3):1025–1044.
Bietti, A., Agarwal, A., and Langford, J. (2021). A contextual bandit bake-off. Journal of Machine Learning Research, 22(133):1–49.
Bissiri, P. G., Holmes, C. C., and Walker, S. G. (2016). A general framework for updating belief distributions. Journal of the Royal Statistical Society Series B: Statistical Methodology, 78(5):1103–1130.
Capitaine, A., Haddouche, M., Moulines, E., Jordan, M. I., Boursier, E., and Durmus, A. (2025). Online decision-focused learning. arXiv preprint, 2505.13564.
Castiglioni, M., Celli, A., Marchesi, A., Romano, G., and Gatti, N. (2022). A unifying framework for online optimization with long-term constraints. In Advances in Neural Information Processing Systems, volume 35, pages 33589–33602.
Chen, H., Lu, W., and Song, R. (2021). Statistical inference for online decision making: In a contextual bandit setting. Journal of the American Statistical Association, 116(533):240–255.
Chen, X., Simchi-Levi, D., and Wang, Y. (2025). Utility fairness in contextual dynamic pricing with demand learning. Management Science, Article in advance.
Cheung, W. C., Ma, W., Simchi-Levi, D., and Wang, X. (2022). Inventory balancing with online learning. Management Science, 68(3):1776–1807.
Chowdhury, S. R. and Gopalan, A. (2017). On kernelized multi-armed bandits. In Proceedings of the 34th International Conference on Machine Learning, volume 70, pages 844–853.
Chu, W., Li, L., Reyzin, L., and Schapire, R. (2011). Contextual bandits with linear payoff functions. In Proceedings of the Fourteenth International Conference on Artificial Intelligence and Statistics, volume 15, pages 208–214.
Chuang, Y.-T. and Kim, M. J. (2023). Bayesian inventory control: Accelerated demand learning via exploration boosts. Operations Research, 71(5):15151529.
Clavier, P., Huix, T., and Oliviero Durmus, A. (2024). VITS : Variational inference Thompson sampling for contextual bandits. In Proceedings of the 41st International Conference on Machine Learning, volume 235, pages 9033–9075.
Elmachtoub, A. N. and Grigas, P. (2022). Smart “predict, then optimize”. Management Science, 68(1):926.
Elmachtoub, A. N., Lam, H., Lan, H., and Zhang, H. (2025). Dissecting the impact of model misspecification in data-driven optimization. In Proceedings of The 28th International Conference on Artificial Intelligence and Statistics, volume 258, pages 15941602.
Haddouche, M. and Guedj, B. (2022). Online PACBayes learning. In Advances in Neural Information Processing Systems, volume 35, pages 25725–25738.
Hoi, S. C., Sahoo, D., Lu, J., and Zhao, P. (2021). Online learning: A comprehensive survey. Neurocomputing, 459:249–289.
Ibrahim, J. G. and Chen, M.-H. (2000). Power prior distributions for regression models. Statistical Science, pages 46–60.
Jiang, W. and Tanner, M. A. (2008). Gibbs posterior for variable selection in high-dimensional classification and data mining. The Annals of Statistics, 36(5).
Kassraie, P. and Krause, A. (2022). Neural contextual bandits without regret. In Proceedings of The 25th International Conference on Artificial Intelligence and Statistics, volume 151, pages 240–278.
Keyvanshokooh, E., Zhalechian, M., Shi, C., Van Oyen, M. P., and Kazemian, P. (2025). Contextual learning with online convex optimization: Theory and application to medical decision-making. Management Science, Article in advance.
Kong, L., Cui, J., Zhuang, Y., Feng, R., Prakash, B. A., and Zhang, C. (2022). End-to-end stochastic optimization with energy-based model. In Advances in Neural Information Processing Systems, volume 35, pages 11341–11354.
Krause, A. and Ong, C. S. (2011). Contextual Gaussian process bandit optimization. In Advances in Neural Information Processing Systems, volume 24, pages 2447–2455.
Lacasse, A., Laviolette, F., Marchand, M., Germain, P., and Usunier, N. (2006). PAC-Bayes bounds for the risk of the majority vote and the variance of the

PAC-Bayes Meets Online Contextual Optimization
gibbs classifier. In Advances in Neural Information Processing Systems, volume 19, page 769–776. MIT Press.
Li, L., Chu, W., Langford, J., and Schapire, R. E. (2010). A contextual-bandit approach to personalized news article recommendation. In Proceedings of the 19th International Conference on World Wide Web, 10, page 661–670.
Li, L., Lu, Y., and Zhou, D. (2017). Provably optimal algorithms for generalized linear contextual bandits. In Proceedings of the 34th International Conference on Machine Learning, volume 70, pages 2071–2080.
Liu, H. and Grigas, P. (2022). Online contextual decision-making with a smart predict-then-optimize method. arXiv preprint, 2206.07316.
Liu, J. and West, M. (2001). Combined parameter and state estimation in simulation-based filtering. In Sequential Monte Carlo methods in practice, pages 197–223. Springer.
Lobos, A., Grigas, P., and Wen, Z. (2021). Joint online learning and decision-making via dual mirror descent. In Proceedings of the 38th International Conference on Machine Learning, volume 139, pages 7080–7089.
Mandi, J., Kotary, J., Berden, S., Mulamba, M., Bucarey, V., Guns, T., and Fioretto, F. (2024). Decision-focused learning: Foundations, state of the art, benchmark and future opportunities. Journal of Artificial Intelligence Research, 80:1623–1701.
Mnih, A. and Gregor, K. (2014). Neural variational inference and learning in belief networks. In Proceedings of the 31st International Conference on Machine Learning, volume 32, pages 1791–1799.
Pacchiano, A., Ghavamzadeh, M., and Bartlett, P. (2025). Contextual bandits with stage-wise constraints. Journal of Machine Learning Research, 26(170):1–57.
Rodriguez-Galvez, B., Thobaben, R., and Skoglund, M. (2024). More PAC-Bayes bounds: From bounded losses, to losses with general tail behaviors, to anytime validity. Journal of Machine Learning Research, 25(110):1–43.
Sadana, U., Chenreddy, A., Delage, E., Forel, A., Frejinger, E., and Vidal, T. (2025). A survey of contextual optimization methods for decision-making under uncertainty. European Journal of Operational Research, 320(2):271–289.
Sakhi, O., Alquier, P., and Chopin, N. (2023). PACBayesian offline contextual bandits with guarantees. In Proceedings of the 40th International Conference on Machine Learning, volume 202, pages 2977729799.
Slivkins, A., Zhou, X., Sankararaman, K. A., and Foster, D. J. (2024). Contextual bandits with packing and covering constraints: A modular lagrangian approach via regression. Journal of Machine Learning Research, 25(394):1–37.
Thomas, O., Dutta, R., Corander, J., Kaski, S., and Gutmann, M. U. (2022). Likelihood-free inference by ratio estimation. Bayesian Analysis, 17(1):1–31.
Vaswani, S., Kazemi, A., Babanezhad Harikandeh, R., and Le Roux, N. (2023). Decision-aware actor-critic with function approximation and theoretical guarantees. In Advances in Neural Information Processing Systems, volume 36, pages 66451–66498.
Ye, Z., Zhang, D. J., Zhang, H., Zhang, R., Chen, X., and Xu, Z. (2023). Cold start to improve market thickness on online advertising platforms: Datadriven algorithms and field experiments. Management Science, 69(7):3838–3860.
Zhou, D., Li, L., and Gu, Q. (2020). Neural contextual bandits with UCB-based exploration. In Proceedings of the 37th International Conference on Machine Learning, volume 119, pages 11492–11502.

PAC-Bayes Meets Online Contextual Optimization: Supplementary Materials
1 MISSING PROOFS
1.1 Proofs of Theorem 3.2 and 3.3
Theorems 3.2 and 3.3 are direct results of Corollary 3.1 and Corollary 3.3 from Haddouche and Guedj (2022) with modifications on (i) the condition in the conditional distribution of ξt, and (ii) the constant term in the bound. We start by presenting the original Corollary 3.1 in Haddouche and Guedj (2022) and Theorem 3.2 in this work using our notation.
Corollary A (Haddouche and Guedj (2022), Corollary 3.1). Suppose Assumption 3.1 holds. For any distribution μ over D, any λ > 0, any δ ∈ (0, 1), and any online posterior {π ̃} and prior {π} sequences, the following inequality holds with at least probability 1 − δ over the draw D ∼ μ:
T
∑
t=1
Eθ∼π ̃t+1 [E[l(θ, dt)|Ft−1]] ≤
T
∑
t=1
(
Eθ∼π ̃t+1 [l(θ, dt)] + DKL(π ̃t+1∥πt)
λ
)
+ λT C2
2 + log(1/δ)
λ.
Theorem 3.2. Suppose Assumption 3.1 holds. For any distribution μ over D, any λ > 0, any δ ∈ (0, 1), and any online posterior {π ̃} and prior {π} sequences, the following inequality holds with at least probability 1 − δ over the draw D ∼ μ:
T
∑
t=1
Eθ∼π ̃t+1 [E[l(θ, ξt)|Ft−1, xt]] ≤
T
∑
t=1
(
Eθ∼π ̃t+1 [l(θ, dt)] + DKL(π ̃t+1∥πt)
λ
)
+ λT C2
8 + log(1/δ)
λ.
The first difference lies between E[l(θ, dt)|Ft−1] and E[l(θ, ξt)|Ft−1, xt] in the l.h.s.. The second difference lies
in the denominator for the term λT C2.
For the first difference, since xt has already been realized, it is Ft−1-measurable. Therefore, by the tower probability and measurability of xt, for all θ we can write:
E(Xt=xt,ξt)[l(θ, (Xt = xt, ξt))|Ft−1] = EXt [Eξt [l(θ, ξt)|Ft−1, Xt = xt]|Ft−1] (A.1)
Because Xt = xt is observed, P{Xt = xt|Ft−1, xt} = 1. Thus, the outer expectation EXt [·|Ft−1] in the r.h.s. of Eq (A.1) degenerates to the form in Theorem 3.2. Note that if the target risk E(Xt,ξt)[l(θ, (Xt, ξt))|Ft−1] is
adopted, it suggests that we also have to predict/estimate the covariate xt for the next step, which differs from the setting of contextual optimization.
The second difference is due to the modification of the bound range in Hoeffding’s lemma. According to Assumption 3.1, we know the loss l(θ, dt) ∈ [0, C], ∀θ, ∀dt, while Haddouche and Guedj (2022) considered the range [−C, C]. Therefore, ∀θ, ∀dt,
∆t(θ) = E[l(θ, ξt)|Ft−1, xt] − l(θ, dt) ∈ [μ(θ, xt, Ft−1) − C, μ(θ, xt, Ft−1)],
where μ(θ, xt, Ft−1) is a constant (expectation) for a given (xt, θ, Ft−1). Therefore, Hoeffding’s lemma applies as follows:
E[eλ∆t(θ)|Ft−1, xt] ≤ eλ2C2/8.
Applying this inequality in Lemma D.2 in Haddouche and Guedj (2022) and keeping other proofs unchanged will give Theorem 3.2. Similarly, Corollary 3.3 in Haddouche and Guedj (2022) can be modified in the same way.

PAC-Bayes Online Contextual Optimization
1.2 Proof of Corollary 3.5
Proof. By Assumption 3.4, we have ∀λ > 0, ∀d ∈ X × Ξ, ∀π ∈ P(Ξ):
l (π, d) ≤ − 1
λ log Eθ∼π
[
e−λl(θ,d)]
(A.1)
In other words, this assumption ensures the pseudo-likelihood e−λl(π,d) when implementing a decision optimized for posterior π is always better than the expected pseudo-likelihood e−λl(θ,d) of an individual drawn θ ∼ π. We leverage this assumption to bound the risk of the aggregated predictor based on the risk of the stochastic predictor.
Applying the convexity of ex in x point-wise for d gives:
Eθ∼π
[
e−λl(θ,d)]
≥ e−λEθ∼π[l(θ,d)]. (A.2)
Taking Eq (A.2) into Eq (A.1) gives:
l (π, d) ≤ − 1
λ log
(
Eθ∼π
[
e−λl(θ,d)])
≤ −1
λ log
(
e−λEθ∼π [l(θ,d)] )
= Eθ∼π [l(θ, d)] . (A.3)
Here, Eq (A.3) is very similar to the direct application of convexity of l in θ if one regards the π as the mean Eθ∼π[m(x; θ)]. However, because we input the pushforward distribution into decision-making rather than the posterior mean, we thus leverage the mixability of l to circumvent the requirement of convexity.
Taking expectation E [·|Ft−1, xt] on both sides of Eq (A.3) gives:
E [l (π, ξt) |Ft−1, xt] ≤ E [Eθ∼π [l (θ, ξt)] |Ft−1, xt] . (A.4)
Finally, by the measurability of πt given Ft−1 and Fubini’s theorem, the expectation in the r.h.s. of Eq (A.4) can be swapped as: E [l (π, ξt) |Ft−1, xt] ≤ Eθ∼π [E [l (θ, ξt) |Ft−1, xt]] , (A.5)
which holds almost surely and independently of the draw of data D ∼ μ. Applying this upper bound in Eq (A.5) to the l.h.s. of Theorem 3.3 finishes the proof.
2 EXPERIMENTAL DETAILS
The code of the experiments will be available soon. For all experiments, we use the open-source package SCIPY (Virtanen et al., 2020) to solve the deterministic and chance-constrained MILP problems.
2.1 Data Generation and Hypothesis
Our data generation follows the ARMA(2,2) process proposed in Bertsimas and Kallus (2020) to construct a time-series (xt, ξt). Specifically, for each stage t:
xt = ut + Φ1xt−1 + Φ2xt−2 + Θ1ut−1 + Θ2ut−2,
where ut ∼ N (0, ΣU ) are innovations, and all the matrices are chosen as:
Φ1 =


0.5 −0.9 0.0 1.1 −0.7 0.0 0.0 0.0 0.5

 , Φ2 =


0.0 −0.5 0.0 −0.5 0.0 0.0 0.0 0.0 0.0

,
Θ1 =


0.4 0.8 0.0 −1.1 −0.3 0.0 0.0 0.0 0.0

 , Θ2 =


0.0 −0.8 0.0 −1.1 0.0 0.0 0.0 0.0 0.0

 , ΣU =


1.0 0.5 0.0 0.5 1.2 0.5 0.0 0.5 0.8

.

For each stage, once xt is generated, we generate the uncertainty ξt as follows:
ξ ̃t = G(xt + δt/4) + (Bxt) ◦ εt,
where δt and εt are independently sampled from standard Gaussian distribution, and matrices G and B are chosen as:
G = 2.5 ×

                  
0.8 0.1 0.1 0.1 0.8 0.1 0.1 0.1 0.8 0.8 0.1 0.1 0.1 0.8 0.1 0.1 0.1 0.8 0.8 0.1 0.1 0.1 0.8 0.1 0.1 0.1 0.8 0.8 0.1 0.1 0.1 0.8 0.1 0.1 0.1 0.8

                  
, B = 7.5 ×

                  
0 −1 −1 −1 0 −1 −1 −1 0 0 −1 1 −1 0 1 −1 1 0 0 1 −1 1 0 −1 1 −1 0 011 101 110

                  
.
Having ξ ̃t ∈ R12, we do ξt,i = max{−100,ξ ̃t,i}
100 + 2 for each element in ξ ̃t to ensure nonnegativity of weights.
Eventually, we stack every 4 elements in the vector for a row, resulting in a matrix At ∈ R3×4 as the weight matrix in optimization.
We adopt an almost-linear model with a sigmoid activation function for the prediction task. Denote weights W ∈ R3×12, bias b ∈ R12, and sigmoid function: S(x) = 1
1+e−x . The forward prediction can be written as:
Aˆt = 2S(W xt + b),
while model parameter θ denotes the aggregation of weights and bias. We reshape the prediction to meet the dimension of the weight matrix. In total, the dimension of Θ is 3 × 12 + 12 = 48.
2.2 Framework Details
2.2.1 BMA
In the implementation of BMA framework, we specify the following parameters: the initial prior π0 = N (0, I48),
the shrinkage factor a = 0.9, the temperature λ = 10−4, the Effective Sample Size threshold τ = 0.5, the number of MCMC steps L = 3, the number of particles in SMC N = 20, the feasibility chance α = 0.9. We choose relatively small L and N since we found they can already lead to satisfactory results while saving computational
resources. Having all predictions Aˆit and the according weights wti for each prediction, we input these data in the following MILP problem to prescribe the decision zˆt for each stage t in the BMA framework under chance constraint:
max
u,z,V,l
N
∑
i=1
wti(V i + q⊤li)
s.t.
N
∑
i=1
wtiui ≥ α
Aˆitz ≤ b + (1 − ui)M, i = 1, · · · , N
0 ≤ V i ≤ uiM, i = 1, · · · , N
V i ≥ c⊤z − (1 − ui)M, i = 1, · · · , N
li ≤ b − Aˆitz + M (1 − ui), i = 1, · · · , N
li ≥ b − Aˆitz − M (1 − ui), i = 1, · · · , N
0 ≤ li ≤ uiM, i = 1, · · · , N,
u ∈ {0, 1}20, z ∈ N4, V ∈ R20, l ∈ R20×3.
with M here denotes a sufficiently large number to achieve the big-M modeling.

PAC-Bayes Online Contextual Optimization
2.2.2 BGS
The BGS framework is a variant of BMA. Instead of leveraging the posterior approximation (by samples and weights) into the chance-constrained program for decision-making, BGS draws an indicator It ∼ Cat(wt1, . . . , wtN )
to approximate the sampling from the posterior πt, and input AˆtIt into the deterministic program to prescribe a decision.
2.2.3 PtO
The BGS framework leverages online gradient descent (OGD) to minimize the MSE loss between the uncertainty
realization At and Aˆt predicted by a deterministic model. The model updated rule follows the classic OGD algorithm:
θpto
t+1 = θpto
t − ηt∇θ
√ ∑
i
∑
j
(At,i,j − Aˆt,i,j )2.
Later, the updated model parameters will be used to predict the uncertainty At+1 for the next stage. In the experiments, we use standard Gaussian to initialize the parameters of PtO model.
We use Adam optimizer to update the model parameters with a step decay step size of 0.99. The initial learning rate is chosen as 0.1 in our experiments, which is optimal in terms of MSE performance among [0.01, 0.05, 0.1, 0.5, 1, 5, 10] for 20 trials with length T = 500. Figure 1 demonstrates the time-averaged cumulative MSE loss within the PtO framework using different learning rates.
0 100 200 300 400 500 T
0.0
0.2
0.4
0.6
0.8
1.0
Time-Averaged Cumulative MSE Loss
lr = 0.050 lr = 0.100 lr = 0.500
0 100 200 300 400 500 T
0.0
0.2
0.4
0.6
0.8
1.0
Time-Averaged Cumulative MSE Loss
lr = 0.001 lr = 0.005 lr = 0.010 lr = 1.000
Figure 1: Time-averaged cumulative MSE loss for PtO with different learning rate. Results are computed from 20 trials with a horizon T = 500.
2.2.4 DFL
The DFL framework leverages the gradient of the decision quality of the last stage to update the deterministic predictive model parameters. Because we consider an integer knapsack problem that is nondifferentiable, we approximate the gradient for DFL using score function gradient approximation. Consider at stage t, the DFL
model prediction is Aˆt and uncertainty realization is At. To approximate the gradient of l w.r.t. Aˆt, we draw K
random noise {εi} from N (0, Idim(At)). Then, the gradient ∇Al can be approximated as:
∇Al ≈ 1
K
K
∑
i=1
(
c′(P(Aˆt + εi), At) − mzin c(z; At)
)
εi.
In this work, we take K = 20 to match the computational cost of BMA in each update. The optimizer and step decay schedule are the same as PtO. 0.1 is chosen as he initial learning rate for DFL, which is optimal in terms of average reward among [0.001, 0.005, 0.01, 0.05, 0.1, 0.5, 1] for 20 trials with length T = 500. Figure 2 demonstrates the time-averaged cumulative reward for DFL using different learning rates.

0 100 200 300 400 500 T
0
20
40
60
80
100
Time-Averaged Cumulative Reward
lr = 0.010 lr = 0.050 lr = 0.100 lr = 0.500
lr = 1.000 lr = 5.000 lr = 10.000
0 100 200 300 400 500 T
0
20
40
60
80
100
Time-Averaged Cumulative Reward
lr = 0.050 lr = 0.100 lr = 0.500
Figure 2: Time-averaged cumulative reward for DFL with different learning rate. Results are computed from 20 trials with a horizon T = 500.
References
Bertsimas, D. and Kallus, N. (2020). From predictive to prescriptive analytics. Management Science, 66(3):10251044.
Haddouche, M. and Guedj, B. (2022). Online PAC-Bayes learning. Advances in Neural Information Processing Systems, 35:25725–25738.
Virtanen, P., Gommers, R., Oliphant, T. E., Haberland, M., Reddy, T., Cournapeau, D., Burovski, E., Peterson, P., Weckesser, W., Bright, J., et al. (2020). Scipy 1.0: fundamental algorithms for scientific computing in python. Nature methods, 17(3):261–272.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:22.176Z
- **Text Length:** 53994 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 15 of 15
