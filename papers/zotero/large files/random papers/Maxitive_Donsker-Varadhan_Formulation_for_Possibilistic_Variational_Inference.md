# PDF Document: Singh et al. - 2025 - Maxitive Donsker-Varadhan Formulation for Possibilistic Variational Inference.pdf

**File Path:** Singh et al. - 2025 - Maxitive Donsker-Varadhan Formulation for Possibilistic Variational Inference.pdf

**Processed Date:** 2026-02-10T18:17:53.839Z

**File Size:** 379.53 KB

**Total Pages:** 17

**Extracted Pages:** 17

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3468

**Title:** Maxitive Donsker-Varadhan Formulation for Possibilistic Variational Inference

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Maxitive Donsker–Varadhan Formulation for Possibilistic Variational Inference
Jasraj Singh∗
Nanyang Technological University
Shelvia Wongso∗
Nanyang Technological University
Jeremie Houssineau
Nanyang Technological University
Badr-Eddine Che ́rief-Abdellatif Sorbonne Universite ́
Abstract
Variational inference (VI) is a cornerstone of modern Bayesian learning, enabling approximate inference in complex models that would otherwise be intractable. However, its formulation depends on expectations and divergences defined through high-dimensional integrals, often rendering analytical treatment impossible and necessitating heavy reliance on approximate learning and inference techniques. Possibility theory, an imprecise probability framework, allows to directly model epistemic uncertainty -
instead of leveraging subjective probabilities. While this framework provides robustness and interpretability under sparse or imprecise information, adapting VI to the possibilistic setting requires rethinking core concepts such as entropy and divergence, which presuppose additivity. In this work, we develop a principled formulation of possibilistic variational inference and apply it to a special class of exponential-family functions, highlighting parallels with their probabilistic counterparts an-
d revealing the distinctive mathematical structures of possibility theory.
1 Introduction
Variational inference (VI) has become a cornerstone of modern Bayesian learning, enabling approximate inference in complex models that were previously intractable. For many years, purely Bayesian methods were hampered by computational cost, but advances in Monte Carlo and especially variational approximations have brought them within reach (Blei et al., 2017; Salimans et al., 2015). In VI, one typically posits a simple (parametric) variational family Q and then finds the probability
distribution q ∈ Q that best approximates the true posterior q⋆
add by maximizing the evidence lower bound (ELBO). This framework underlies many tools today – e.g. variational autoencoders (Kingma & Welling, 2013), some Bayesian neural networks (Blundell et al., 2015; Kingma et al., 2015) – and blurs the line between tractable and intractable Bayesian analyses.
Introduced by Zadeh (1978), possibility theory, an imprecise probability framework, offers a complementary approach for modelling uncertainty. Unlike probability, possibility does not require additivity: events have a degree of plausibility (≤ 1) and a dual necessity, with logical rules based on
min/max operators. This allows handling epistemic uncertainty naturally. For example, the analogue of probability distributions, referred to as possibility functions, can easily be made fully uninformative (Hieu et al., 2025), a difficult endeavour in probability theory. The flexibility and scalability of possibility theory makes it suitable for challenging applications such as control problems under uncertainty (Xue et al., 2025) and point process-based inference (Houssineau, 2021).
∗Equal contribution.
Preprint. Work in progress.
arXiv:2511.21223v1 [stat.ML] 26 Nov 2025

A key challenge arises when we try to adapt variational methods to this possibilistic setting. Standard VI relies on notions like Shannon entropy, which do not directly carry over: for example, the ELBO includes an entropy term, but there is no obvious “possibilistic entropy” analogous to the Shannon entropy of a probability distribution (Shannon & Weaver, 1949). Similarly, divergences like Kullback–Leibler (KL) require additive measures (Kullback & Leibler, 1951). As a result, traditional VI obj-
ectives cannot be used out-of-the-box. Nonetheless, recent work has sought approximations in the possibilistic context. For instance, Cella & Martin (2025) developed a variational-like approximation for inferential models (Martin & Liu, 2013), and use a Monte Carlo-based strategy to search over the chosen family of possibility functions. In that spirit, our goal is to formulate a VI framework for general possibilistic models: we define an objective that aligns a tractable candidate possibility fun-
ction with the (target) posterior possibility function, and which can be optimized in lieu of maximizing a probabilistic ELBO.
We present a novel maxitive analogue of the classical Donsker–Varadhan (DV) in Section 4, with Theorem 2 providing our main theoretical result. In Section 5, we develop a practical framework for possibilistic VI within a special class of exponential-family functions, highlighting their structural parallels with the probabilistic case and giving rise to special mathematical structures. These developments provide a foundation for extending variational reasoning to possibility theory, offering new av-
enues for inference under epistemic uncertainty.
2 Primer on Possibility Theory
Possibility theory provides a dedicated representation of epistemic uncertainty where, similarly to probabilities, each event is assigned a degree of possibility between 0 and 1 and, unlike probabilities, the main operation on possibilities is the maximum/supremum rather than the sum/integral.
To define epistemic uncertainty formally, we consider a sample space Ω whose elements characterise all the possible values of the relevant unknown quantities. Instead of equipping Ω with a probabilistic structure, we simply describe an unknown parameter θ0 in set Θ via a (deterministic) uncertain variable θ ∶ Ω → Θ. If an element ω ∈ Ω were the correct one, then θ(ω) would be true value of
the parameter θ0. To describe the available information about θ, we define a possibility function fθ (a.k.a. possibility distribution) on Θ as a non-negative function that verifies supθ∈Θ f (θ) = 1. The
possibility of an event θ ∈ A for some A ⊆ Θ is then supθ∈A fθ(θ).
Marginalization and conditioning: Possibility functions behave similar to probability mass functions (p.m.f.), except that summation is replaced by a maximum. For instance, if θ and another uncertain variable ψ on a set Ψ are jointly described by a possibility function fθ,ψ, then the marginal possibility function describing θ is characterised by
fθ(θ) = sup
ψ∈Ψ
fθ,ψ(θ, ψ), ∀θ ∈ Θ.
Similarly, for a fixed ψ ∈ Ψ satisfying fψ(ψ) > 0, the conditional possibility function of θ given
ψ = ψ is characterised by
fθ(θ ∣ ψ = ψ) = fθ,ψ(θ, ψ)
fψ(ψ) , ∀θ ∈ Θ.
As is standard with probability distributions, we will often omit which uncertain variable is being described by a possibility function and simply write, e.g. f instead of fθ.
Possibilistic moments: Based on Hieu et al. (2025), the expected value for a possibility function f is given by
E⋆
f [θ] ≐ argmax
θ∈Θ
f (θ),
which is a set in general, and satisfies E⋆
f [T (θ)] = T (E⋆
f [θ]) for any mapping T – a property
shared with the maximum likelihood estimate. When E⋆
f [θ] is a singleton {θ⋆}, we do not make a
distinction between this singleton and the element θ⋆. In this case, if f is twice differentiable at θ⋆,
we define the precision as If (θ) ≐ E⋆
f [−∇2 log f (θ)] = −∇2 log f (θ)∣θ=θ⋆ , where the operator ∇2 is the Hessian and precision is to be understood as inverse covariance matrix.
2

Example 1. The normal possibility function with expected value μ and positive definite covariance matrix Σ is defined as
f (θ) = N (θ; μ, Σ) ≐ exp (− 1
2 (θ − μ)⊺Σ−1(θ − μ)) .
It verifies E⋆
f [θ] = μ and If (θ) = Σ−1, as is usually leveraged in the Gaussian approximation (a.k.a. Laplace approximation).
Notations: We define the set F (Θ) ≐ {f ∶ Θ → [0, 1] ∶ supθ∈Θ f (θ) = 1} of possibility
functions over Θ. As opposed to the set P(Θ) of probability distributions, F(Θ) is a pre-ordered
set when equipped with the partial order ⪯ defined as f ⪯ g ⇐⇒ f (θ) ≤ g(θ), ∀θ ∈ Θ. In
particular, any two elements f and g of F(Θ) have a least upper bound f ∨ g defined for any θ ∈ Θ
as (f ∨ g)(θ) = max{f (θ), g(θ)}. There is a greatest element in F(Θ), the function equal to 1
everywhere, which we denote by 1. For any subset G of F (Θ), max G denotes the maximal element
of G. The minimal element min G can also be considered when it exists. Table 1 summarizes other
key notations.
3 Bayesian Inference and the Donsker-Varadhan Variational Formula
We first provide a review of probabilistic variational formulation of Bayesian inference and its variational approximations. We consider the problem of learning about an unknown parameter θ0 in a set Θ, which can be thought of either as the true parameter in a statistical procedure or as the solution of an optimisation problem. In this context, it is usual to alternate between i) the optimisation viewpoint where the main objects are a loss l and a regulariser R on Θ, and ii) the inference viewpoin-
t where the main objects are a likelihood L ∝ exp(−l), that is, L(θ) ∝ exp(−l(θ)) for all θ ∈ Θ, and
a prior π with density ∝ exp(−R) with respect to Lebesgue’s measure. This leads to the following
formula for the (generalized) Bayesian posterior q⋆
add with respect to π:
q⋆
add(dθ) ≐ exp(−l(θ)) π(dθ)
∫ exp(−l(θ′))π(dθ′) = exp (−lˆ(θ)) dθ
∫ exp (−lˆ(θ′)) dθ′ ,
where lˆ≐ l + R is the regularised loss.
We start with the following classical variational formula, known since at least the 1950s (see e.g. Kullback (1959, Exercise 8.28) for the finite case), generally attributed in the general setting to Donsker & Varadhan (1976), and later rediscovered in statistics by Zellner (1988). We refer the interested reader to Catoni (2004, Page 160) for a proof.
Theorem 1 (Donsker and Varadhan’s variational formula). Let (Θ, T ) be a measurable space and
let ν be a probability measure on Θ. For any measurable function h ∶ Θ → R such that ∫ ehdν < +∞,
we have
log ∫ ehdν = sup
ρ∈P(Θ) {∫ hdρ − KL (ρ∥ν)} ,
where P(Θ) denotes the set of probability measures on Θ and KL(ρ∥ν) is the Kullback–Leibler
divergence of ρ with respect to ν, with the convention ∞ − ∞ = −∞.
Moreover, the supremum on the right-hand side is achieved exactly at the Gibbs measure νh whose density with respect to ν is
dνh
dν (θ) ≐ eh(θ)
∫ ehdν .
(Generalized) Bayesian inference via Donsker-Varadhan. Theorem 1 provides an informationtheoretic characterization of the Bayesian posterior. By setting h = −l and ν = π (the prior), we
obtain that the normalizing constant Zadd = ∫ exp(−l) dπ (also called the evidence in the statistical
setting) satisfies
log Zadd = sup
q∈P (Θ)
ELBO(q), ELBO(q) ≐ −Eq[l(θ)] + KL(q∥π).
3

The ELBO (Evidence Lower Bound) provides a lower bound on the log-evidence. Furthermore, the exact posterior can then be expressed as the solution of the infinite-dimensional optimization problem
q⋆
add = argmin
q∈P(Θ) {Eθ∼q[l(θ)] + KL(q∥π)}. (1)
Thus, Donsker and Varadhan’s lemma simultaneously identifies the Bayesian posterior as the optimizer of a regularized expected loss (the negative ELBO) and expresses the log-evidence as the supremum of the ELBO over all probability measures.
(Generalized) Variational inference via Donsker-Varadhan. In practice, computing q⋆
add ex
actly is generally intractable. Generalized Variational Inference (GVI) consists in restricting the optimization to a tractable family Q ⊂ P(Θ), turning the infinite-dimensional problem (1) into a
simpler, typically parametric, optimization problem.
This restriction naturally induces a gap between the true log-evidence and the ELBO achievable within Q, which can be quantified via
log Zadd = ELBO(q) + KL(q ∥ q⋆
add), q ∈ Q.
Maximizing the ELBO within Q therefore corresponds exactly to minimizing the KL divergence to
the exact posterior restricted to the chosen family. In this sense, GVI can be interpreted both as the best tractable approximation (in the reverse KL sense) of the exact posterior within Q, and as the
optimal information-processing rule within Q.
4 Possibilistic Inference and a Maxitive Donsker–Varadhan Analogue
In this section, we establish a maxitive analogue of the Donsker–Varadhan variational formula and use it to derive a possibilistic inference framework. We first observe that many standard regularizers naturally attain their minimum at 0, so that the prior π = exp(−R) is directly a possibility function
whereas π could be improper as a probability distribution if exp(−R) is not integrable. This leads
to the following formula for the (generalized) posterior g⋆
max in possibility theory:
g⋆
max(θ) ≐ exp(−l(θ))π(θ)
supθ′ exp(−l(θ′))π(θ′) = exp(−lˆ(θ))
supθ′ exp(−lˆ(θ′)) .
The function π(θ) now denotes a prior possibility function over Θ, typically π(θ) = exp(−R(θ)).
The normalizing constant in the maxitive posterior is defined as
Zmax ≐ sup
θ′ ∈Θ
exp(−l(θ′))π(θ′) ,
and is referred to as the the maxitive marginal likelihood. Contrary to its probabilistic analogue Zadd, which measures the overall fit of the model to the data, the quantity Zmax quantifies the consistency between the prior and the likelihood. This notion is central in robust inference and can be used, for instance, to detect outliers (Houssineau & Nott, 2022).
Theorem 2 (Maxitive Donsker-Varadhan formula). Let π ∶ Θ → [0, 1] be a possibility function. For
any function l ∶ Θ → R+, we have
log sup
θ∈Θ
e−l(θ)π(θ) = sup
g∈F (Θ)
θi∈nΘf {−l(θ) − log( g(θ)
π(θ) )} , (2a)
= inf
g∈F(Θ) sup
θ∈Θ {−l(θ) − log( g(θ)
π(θ) )} , (2b)
where F(Θ) denotes the set of all possibility functions on Θ, with the convention ∞ × 0 = 0.
Moreover, the supremum in (2a) is achieved by any possibility function lower-bounding the posterior
g⋆
max, that is
argmax g∈F (Θ)
θi∈nΘf {−l(θ) − log( g(θ)
π(θ) )} = {g ∈ F (Θ) ∶ g ⪯ g⋆
max}. (3)
4

Similarly, the infimum in (2b) is achieved by any possibility function upper-bounding g⋆
max:
argmin g∈F (Θ)
sup
θ∈Θ {−l(θ) − log( g(θ)
π(θ) )} = {g ∈ F (Θ) ∶ g⋆
max ⪯ g}. (4)
The proof is provided in Appendix B.1.
On the left-hand side of (2a) appears the log-consistency log Zmax, while the quantity optimized on the right-hand side defines a consistency bound (CBO). Two dual versions can be introduced:
CBO(g) ≐ inθf {−l(θ) − log g(θ)
π(θ) } , CBO(g) ≐ sup
θ {−l(θ) − log g(θ)
π(θ) } .
These provide lower and upper bounds on the log-consistency, as shown in Theorem 2. For any g ∈ F(Θ), we even have the decomposition
log Zmax = CBO(g) + Dmax(g ∥ g⋆
max) = CBO(g) − Dmax(g⋆
max ∥ g),
where the max-relative entropy between two possibility functions is defined as
Dmax(g ∥ f ) ≐ sup
θ∈Θ
log g(θ)
f (θ) ≥ 0.
Maximizing (resp. minimizing) the lower (resp. upper) CBO with respect to g is thus equivalent to
minimizing the max-relative entropy to the Gibbs possibility function g⋆
max. Any maximizer g in
(2a) satisfies g ⪯ g⋆
max, whereas any minimizer g in (2b) satisfies g ⪰ g⋆
max. In particular, the standard
posterior g⋆
max is always an optimizer, and pointwise bounds all other solutions (below or above, depending on the formulation).
Canonical choice of maximizer: Among all possibility functions g that optimize the CBO, a natu
ral canonical representative is the standard possibilistic posterior g⋆
max. However, one must be careful
with terminology: g⋆
max is an extremum of the CBO, which means it assigns the largest/smallest possibility degrees and is therefore the most/least permissive (i.e. informative) representative of the
equivalence class of solutions. Choosing g⋆
max is natural because it is the sup/inf-envelope of all maximizers/minimizers, stable under maxitive combination, and i) for the lower CBO, does not introduce any extra, arbitrary information, ii) for the upper CBO, does not forgo any of the available information in the likelihood and/or in the prior.
Recovering the posterior: Possibilistic Bayesian inference can thus be understood as the optimisation of a possibilistic analogue of the ELBO: the CBO. Unlike the probabilistic case, this optimi
sation generally admits multiple solutions, but the standard maxitive posterior g⋆
max stands out as the natural choice – it is an extremum among the optimisers and serves as the canonical representative of the updated possibility distribution.
Recall that the standard Bayesian posterior is {q⋆
add} = argmaxq∈P(Θ) ELBO(q), while the two characterizations of the Bayesian posterior in possibility theory are:
g⋆
max = max ( argmax
g∈F (Θ)
CBO(g)), (5a)
= min ( argmin
g∈F (Θ)
CBO(g)). (5b)
The additional max/min operations in (5a) and (5b) add a layer of complexity to the recovery of the
posterior possibility function. However, it holds that the posterior possibility function g⋆
max is the only element in
argmax g∈F (Θ)
CBO(g) ∩ argmin
g∈F (Θ)
CBO(g).
To exploit this, we can set a scalar α ∈ (0, 1), and express both optimisation problems over F(Θ)
as, e.g. an argmin. It is then easy to see that
{g⋆
max} = argmin
g∈F (Θ)
αCBO(g) − (1 − α)CBO(g), (6)
where the first term penalises underestimation of the posterior and the second term penalises overestimation. α balances the degree of caution in the approximation – α ≈ 1 biases the optimization
towards highly plausible but less informative estimates, and vice-versa when α ≈ 0. This achieves a
similar effect as symmetrising the KL divergence.
5

Relationship with VI: The first two formulations, (5a) and (5b), to recover the posterior possibility function from an optimisation problem on the set of possibility functions, provide two different schemes for defining approximations of the posterior when we restrict the optimization to be on a subset G of F (Θ). While (5a) is qualitatively related to standard VI and will typically underestimate
the possibility when restricted to G, (5b) provides an alternative that will instead overestimate possi
bilities. This latter behaviour is more in line with general statistical principles which tend to prefer pessimistic uncertainty estimates over optimistic ones. The third formulation, (6), strikes a balance between the two above extremes, with over/under-estimation being preferred as needed, depending on the value of α.
Relationship with Generalized VI: In classical VI, the optimization is typically framed through
the decomposition of the ELBO, which involves the reverse KL divergence, KL(q∥q⋆
add). This yields
a lower bound on the model evidence and has well-known properties such as the mode-seeking effect. Yet, in the probabilistic literature, many alternative divergences and bound constructions have been explored, leading to a variety of upper and lower bounds on the marginal likelihood. Notable examples include the χ-divergence upper bounds (CUBO) (Dieng et al., 2017) and variational Re ́nyi bounds (Li & Turner, 2016). In each of these cases, one can define dual optimization problems minimisation to -
the left or to the right of the divergence – corresponding to lower or upper bounds providing a sandwiching of the true model evidence.
Remarkably, in the possibilistic framework, an analogous structure arises naturally, but with the max-relative entropy replacing the KL divergence. The lower and upper consistency bounds (CBOs) defined above correspond to two dual optimisation perspectives: maximizing the lower CBO or minimizing the upper CBO, which yield, respectively, under- and over-estimation of the posterior possibility degrees. This is conceptually analogous to probabilistic VI, where reverse or forward KL leads to mode-seek-
ing versus mass-covering behaviours. In fact, one can interpret the upper CBO as a limiting case of a Re ́nyi- or χn-type bound when the divergence order tends to infinity, producing an extreme mass-covering (resp. “hyper mode-seeking”) effect.
Finally, these dual bounds can be combined to define successive, balanced objectives, similar to approaches in probabilistic VI that mix ELBO and CUBO to control approximation error (Huggins et al., 2020). In the possibilistic setting, expression (6) provides a principled way to interpolate between the two extremes, penalising over- and under-estimation of possibility degrees in a single step. This construction thus generalises the notion of variational bounds to possibility theory, mirroring the -
rich family of bounds in probabilistic inference and offering a natural trade off between conservative and optimistic uncertainty estimates.
5 Possibilistic VI with Exponential Families
We develop a general framework for possibilistic variational inference based on exponential families by considering their conjugate priors. We begin by defining the structure of exponential families in the possibilistic setting. Assuming that Θ is a subset of Rdθ and Λ is a convex subset of Rdλ , we follow the probabilistic approach and define an exponential family as a set G = {gλ ∈ F(Θ) ∶ λ ∈ Λ}
where gλ is of the form
gλ(θ) = exp (λ⊺T (θ) − A(λ) − B(θ)), ∀θ ∈ Θ,
for a given base measure B and sufficient statistics T on Θ and the corresponding log-partition function A on Λ, which ensures proper normalisation, that is
A(λ) = log sup
θ∈Θ
exp (λ⊺T (θ) − B(θ)) = sup
θ∈Θ
λ⊺T (θ) − B(θ).
We start by clarifying some properties of possibilistic exponential families:
Fact 1: There is no general correspondence between the components T+ and B+ of a probabilistic (canonical) exponential family and their analogue in possibility theory.
Fact 2: Although possibility functions are not densities and, therefore, do not require the definition of a reference measure, the base measure of a possibilistic exponentially family need not be an indicator function for the support of the family.
6

Fact 3: The log-partition function A is simpler when compared to the expression of the logpartition A+ for a probabilistic exponential family, that is
A+(λ) = log ∫ exp (λ⊺T+(θ) − B+(θ))dθ,
due to the fact that sup and log can be exchanged when defining A.
These properties are illustrated in the examples below.
Example 2. Consider a Bernoulli-style possibility function: set Θ = {0, 1} and define the possibility
of θ = 0 as α0 and the possibility of θ = 1 as α1, with max {α0, α1} = 1 by construction. The cor
responding possibility function is f (θ ∣ α0, α1) = α1−θ
0 αθ
1. This can be expressed in an exponential family form as
gλ(θ) = exp (λ⊺T (θ)),
with T (θ) = (1 − θ, θ) and λ = (log α0, log α1) ∈ Λ, where Λ = {(λ1, λ2) ∈ R2 ∶ max{λ1, λ2} =
0}. These components differ significantly from the ones of a Bernoulli distribution. Although the
parameters α0 and α1 are not directly related, the fact that their maximum is equal to 1 allows to express this exponential family with a single variable: the odd ratio r = α0/α1. Indeed, it holds that
α0 = (r − 1)− + 1 and α1 = (r − 1)+ + 1,
with (⋅)− and (⋅)+ denoting the negative part and positive part, respectively. Despite its simplic
ity, the Bernoulli possibility function is useful to express, for instance, possibilities of detection in tracking problems, see e.g. Ristic et al. (2020).
Example 3. Consider a Poisson-style possibility function: set Θ = N0 and consider a parameter
α ∈ R+. The corresponding possibility function is
f (θ ∣ α) = αθ−⌊α⌋⌊α⌋!
θ! , which can be expressed in an exponential family form as
gλ(θ) = exp (λ⊺θ − A(λ) − B(θ)).
with λ = log α, B(θ) = log(θ!), and A(λ) = ⌊eλ⌋λ − log (⌊eλ⌋!).
Example 4. Consider the univariate normal possibility function with known variance σ2, N(θ; μ, σ2), for which we have B(θ) = θ2/(2σ2), whereas the base measure of the correspond
ing univariate normal distribution is
θ2
2σ2 + 1
2 log(2πσ2).
5.1 Bayesian Inference with Conjugate Family
We consider a likelihood p(⋅ ∣ θ), θ ∈ Θ, that is part of a regular and minimal exponential family with
log-partition A, that is
p(x ∣ θ) = exp(θ⊺T (x) − A(θ) − B(x)).
The following proposition rephrases known results on the relationship between exponential families and the Bregman divergence (Banerjee et al., 2005) in the context of possibilistic inference.
Proposition 1. The posterior possibility function under the uninformative prior on Θ is of the form
gλ(θ) = exp (λ⊺θ − A†(λ) − A(θ)) (7a)
= exp ( − DA(θ∥θ⋆(λ))), (7b)
with θ⋆(λ) ≐ Eg⋆λ [θ] the maximum likelihood estimator (MLE), A† the Legendre transform of the
log-partition A, and DA(θ∥θ′) = A(θ) − A(θ′) − ∇θA(θ′)⊺(θ − θ′) the Bregman divergence.
Identifying the Bregman divergence in gλ allows us to leverage its properties. For instance, it is
obvious from (7b) that π(⋅ ∣ λ) is a possibility function with expected value θ⋆(λ). We can also
use the known relationship between DA and the KL divergence to see that − log gλ(θ) is the KL
divergence between the likelihood at θ and the one at the MLE. We now highlight some important properties of possibility functions of the same form as gλ in the following proposition.
7

Proposition 2. Let GA(Θ) be the subset of F(Θ) defined as
GA(Θ) ≐ {θ ↦ exp(λ⊺θ − A†(λ) − A(θ)) ∶ λ ∈ ∇θA(Θ)},
where Λ ≐ ∇θA(Θ) is the image of Θ by ∇θA, then, for any gλ ∈ GA(Θ), it holds that
1. For any ν ≥ 0, gν
λ is a conjugate prior for p(⋅ ∣ θ), and gν
λ ∈ GνA(Θ).
2. The dual possibility function fθ ∶ λ ↦ gλ(θ) is in GA† (Λ).
The first point in Proposition 2 is a possibilistic analogue of the result of Diaconis & Ylvisaker (1979), with the additional features that the log-partition function is simply the Legendre transform of A and that the ν parameter is a discount factor rather than an arbitrary parameter. This property is intuitive: ν can be interpreted as how many observations the prior is worth in terms of information content; in particular, when ν = 0, it holds that gν
λ = 1 and the prior is uninformative. The second
point is a specific property of the considered class of conjugate prior possibility functions. Although it has additional properties, the possibilistic conjugate prior is often simply the renormalised version of its probabilistic counterpart.
We have the following properties for a given gλ ∈ GA(Θ) as a possibility function describing the
uncertain variable θ in Θ:
1. The expected value Eg⋆λ [θ] = ∇λA†(λ) is assumed to be the singleton {θ⋆(λ)}. This assump
tion is weak as exponential families often have a unique mode except when they become fully uninformative, i.e. when gλ = 1.
2. The precision Iλ ≐ Igλ (θ) verifies
Iλ = E⋆
gλ [ − ∇2
θ log gλ(θ)] = −∇2
θ log gλ(θ⋆(λ)) = ∇2
θA (θ⋆(λ)) = (∇2
λA†(λ))−1,
where ∇2
θ log gλ(θ⋆(λ)) stands for ∇2
θ log gλ(θ)∣θ=θ⋆(λ).
5.2 Variational Inference with Conjugate Family
We now show how to perform VI for possibilistic conjugate families, which is exact when the likelihood is in an exponential family distribution, as is commonly the case, e.g. Gaussian distribution for regression, and categorical distribution for classification. The secondary objective is to recover known optimisation techniques as pioneered by Khan & Rue (2023). We focus on the lower CBO since it is the one that is the closest to standard VI.
Proposition 3. Given a variational family GA(Θ), let gλt be the possibility function at the t-th step
of the maximisation of CBO. Then a valid update rule based on sub-gradients is
λt+1 = λt − ρt(θ⋆(λt + ∇θlˆ(θ ̄t)) − θ⋆(λt)),
where θ ̄t ∈ argmaxθ∈Θ lˆ(θ) + λ⊺
t θ − A(θ). An approximate explicit expression
λt+1 ≈ λt − ρtI−1
λt ∇θlˆ(θ⋆(λt)), (8)
follows from the approximations θ ̄t ≈ θ⋆(λt) + I−1
λt ∇θlˆ(θ ̄t) and θ ̄t ≈ θ⋆(λt) in the argument of ∇θlˆ.
Corollary 1. Let A(θ) = 1
2 θ⊺Σθ be the log-partition function of the multivariate normal distri
bution with known variance Σ, and let lˆs(μ) be the regularised loss parametrised by the standard
parameter μ = Σθ, then
λt+1 ≈ λt − ρt∇μlˆs(λt), which is a standard gradient descent update.
Although similar to Khan & Rue (2023), our result leverages a different approximation: instead of using the delta-method (Dorfman, 1938), we simply assume that the gradients of the regularised loss are small. Example 5. Suppose that exp(−lˆs) is the normal distribution N(x; μ, Σ + Σ0) for some positive
definite covariance Σ0, then ∇λlˆs(λt) = (Σ + Σ0)−1(λt − x), so that the update rule becomes
λt+1 ≈ λt − ρt(Σ + Σ0)−1(λt − x).
This expression can be interpreted as follows: λt is the current estimate for the sufficient statistics
x, so that λt − x is an estimation error term, which is scaled by the precision (Σ + Σ0)−1; directions
in which the precision is low should receive smaller updates, and this is naturally achieved here.
8

Corollary 2. Let A(θ) = n log(1+exp(θ)) be the log-partition function of the binomial distribution
with known number of trials n, then the approximate update rule (8) becomes
λt+1 ≈ λt − ρt
1
λt(1 − λt/n) ∇θlˆ( log λt
n − λt ).
Reparameterizing the loss in terms of the standard parameter p = (1 + exp(−θ))−1, the approximate
update rule is given by
λt+1 ≈ λt − ρt
n ∇plˆs(λt/n).
Example 6. Suppose that exp(−lˆs) is a binomial distribution with standard parameter p ∈ (0, 1)
and n trials, for which x successes have been observed. It is useful in this case to use the parameter pˆt = λt/n instead of λt, so we have pˆt+1 ≈ pˆt − ρt/n2∇plˆs(pˆt). Computing ∇plˆs(pˆt) yields the
update rule
pˆt+1 ≈ pˆt − ρt
pˆt − x/n
V(X ∣ pˆt) ,
where V(X ∣ p) = np(1 − p) is the variance of the observation when the probability of success is p.
This expression makes sense: the current estimate pˆt is compared to the probability of success x/n
induced by the observation x, and V(X ∣ pˆt) scales the update accordingly. Indeed, if pˆt is close to
0 (or close to 1) then the estimation error pˆt − x/n should be smaller since x has lower variance.
6 Discussion
Possibilistic Bayesian inference is already an optimisation problem, which seems to limit the interest in the development of possibilistic VI at first sight. On the contrary, we have shown that there is a surprising amount of subtleties to be understood and of insights to be gained when exploring the properties of possibilistic VI in general as well as specifically through the lens of a possibilistic version of exponential families and conjugate priors. And indeed, even when closely following exis-
ting treatments of VI and its applications, many differences emerge, such as regularities in conjugate families and a new route leading to gradient descent.
References
Arindam Banerjee, Srujana Merugu, Inderjit S Dhillon, and Joydeep Ghosh. Clustering with bregman divergences. Journal of machine learning research, 6(Oct):1705–1749, 2005.
David M. Blei, Alp Kucukelbir, and Jon D. McAuliffe. Variational inference: A review for statisticians. Journal of the American Statistical Association, 112(518):859–877, 2017.
Charles Blundell, Julien Cornebise, Koray Kavukcuoglu, and Daan Wierstra. Weight uncertainty in neural network. In Francis Bach and David Blei (eds.), Proceedings of the 32nd International Conference on Machine Learning, volume 37 of Proceedings of Machine Learning Research, pp. 1613–1622, Lille, France, 07–09 Jul 2015. PMLR.
Olivier Catoni. Statistical learning theory and stochastic optimization. saint-flour summer school on probability theory 2001 (jean picard ed.). Lecture Notes in Mathematics. Springer, 2:10, 2004.
Leonardo Cella and Ryan Martin. Computationally efficient variational-like approximations of possibilistic inferential models. International Journal of Approximate Reasoning, 186:109506, 2025.
Persi Diaconis and Donald Ylvisaker. Conjugate priors for exponential families. The Annals of statistics, pp. 269–281, 1979.
Adji Bousso Dieng, Dustin Tran, Rajesh Ranganath, John Paisley, and David Blei. Variational inference via χ upper bound minimization. Advances in Neural Information Processing Systems, 30, 2017.
9

Monroe David Donsker and S. R. Srinivasa Varadhan. Asymptotic evaluation of certain markov process expectations for large time. iii. Communications on Pure and Applied Mathematics, 28: 389–461, 1976.
Robert A Dorfman. A note on the delta-method for finding variance formulae. Biometric Bulletin, 1938.
Nong Minh Hieu, Jeremie Houssineau, Neil K Chada, and Emmanuel Delande. Decoupling epistemic and aleatoric uncertainties with possibility theory. In The 28th International Conference on Artificial Intelligence and Statistics, pp. 2899–2907. ML Research Press, 2025.
Jeremie Houssineau. A linear algorithm for multi-target tracking in the context of possibility theory. IEEE Transactions on Signal Processing, 69:2740–2751, 2021.
Jeremie Houssineau and David J Nott. Robust bayesian inference in complex models with possibility theory. arXiv preprint arXiv:2204.06911, 2022.
Jonathan Huggins, Mikolaj Kasprzak, Trevor Campbell, and Tamara Broderick. Validated variational inference via practical posterior error bounds. In International Conference on Artificial Intelligence and Statistics, pp. 1792–1802. PMLR, 2020.
Mohammad Emtiyaz Khan and H ̊avard Rue. The bayesian learning rule. Journal of Machine Learning Research, 24(281):1–46, 2023.
Diederik P Kingma and Max Welling. Auto-encoding variational bayes. In International Conference on Learning Representations, 2013.
Durk P Kingma, Tim Salimans, and Max Welling. Variational dropout and the local reparameterization trick. In C. Cortes, N. Lawrence, D. Lee, M. Sugiyama, and R. Garnett (eds.), Advances in Neural Information Processing Systems, volume 28. Curran Associates, Inc., 2015.
Solomon Kullback. Information Theory and Statistics. John Wiley & Sons, 1959.
Solomon Kullback and Richard Leibler. On Information and Sufficiency. The Annals of Mathematical Statistics, 22(1):79 – 86, 1951.
Yingzhen Li and Richard E Turner. Re ́nyi divergence variational inference. Advances in neural information processing systems, 29, 2016.
Ryan Martin and Chuanhai Liu. Inferential models: A framework for prior-free posterior probabilistic inference. Journal of the American Statistical Association, 108(501):301–313, 2013.
Branko Ristic, Jeremie Houssineau, and Sanjeev Arulampalam. Target tracking in the framework of possibility theory: The possibilistic bernoulli filter. Information Fusion, 62:81–88, 2020.
Tim Salimans, Diederik Kingma, and Max Welling. Markov chain monte carlo and variational inference: Bridging the gap. In Francis Bach and David Blei (eds.), Proceedings of the 32nd International Conference on Machine Learning, volume 37 of Proceedings of Machine Learning Research, pp. 1218–1226, Lille, France, 07–09 Jul 2015. PMLR.
Claude E. Shannon and Warren Weaver. The Mathematical Theory of Communication. University of Illinois Press, Urbana, IL, 1949.
Zhirun Xue, Han Cai, Jeremie Houssineau, and Jingrui Zhang. Orbit-attitude coupled control for multi-target tracking based on partition pattern search. IEEE Transactions on Aerospace and Electronic Systems, 2025.
Lotfi Aliasger Zadeh. Fuzzy sets as a basis for a theory of possibility. Fuzzy Sets and Systems, 1(1): 3–28, 1978.
Arnold Zellner. Optimal information processing and bayes’s theorem. The American Statistician, 42(4):278–280, 1988.
10

A Notations
Table 1: Summary of key notations
Notation Description
E⋆
f Possibilistic expectation (mode) of f
If Possibilistic precision of f
A† Legendre transform of A
lˆ Regularized loss: − log L(θ) − log π(θ)
CBO Upper consistency bound
CBO Lower consistency bound
θ⋆(λ) Mode / expected value of gλ, that is Eg⋆λ [θ]
θ ̄(λ) Set of minimizers of CBO(gλ)
B Proofs
In this section, we present the proofs for the main theoretical results in the main text.
B.1 Theorem 2
We prove each equation of the theorem one after the other.
Proof of Equation (2a). Consider some fixed possibility function g.
Let us first assume that there exists some θg⋆ ∈ argsupθ∈Θ g(θ). We then have g(θg⋆) = 1, so that:
log sup
θ∈Θ
eh(θ)π(θ) ≥ log eh(θ⋆
g ) π (θ⋆
g)
= log eh(θ⋆
g ) π (θg⋆ )
g(θg⋆)
≥ θi∈nΘf log eh(θ)π(θ)
g(θ)
= θi∈nΘf {h(θ) − log g(θ)
π(θ) } .
Now, if argsupθ∈Θ g(θ) = ∅, then one can still define a sequence (θg⋆,n)n∞=1 ∈ ΘN such that for any
integer n > 0, g(θg⋆,n) ≥ 1 − 1/n. We can then write:
log sup
θ∈Θ
eh(θ)π(θ) ≥ log eh(θ⋆
g,n)π(θ⋆
g,n)
= log eh(θ⋆
g,n)π(θg⋆,n)
1− 1
n
+ log (1 − 1
n)
≥ log eh(θ⋆
g,n)π(θg⋆,n)
g(θg⋆,n) + log (1 − 1
n)
≥ θi∈nΘf log eh(θ)π(θ)
g(θ) + log (1 − 1
n)
= θi∈nΘf {h(θ) − log g(θ)
π(θ) } + log (1 − 1
n) ,
11

so by letting n → +∞, we have
log sup
θ∈Θ
eh(θ)π(θ) ≥ θi∈nΘf {h(θ) − log g(θ)
π(θ) } .
Consequently, the inequality above holds for any possibility function g ∈ F(Θ), and by taking the
supremum over g ∈ F(Θ) in the right-hand side leads to:
log sup
θ∈Θ
eh(θ)π(θ) ≥ sup
g∈F (Θ)
θi∈nΘf {h(θ) − log g(θ)
π(θ) } .
Furthermore, the choice of possibility function g(θ) = g⋆
max(θ) = eh(θ)π(θ)/supθ′ eh(θ′)π(θ′) trans
forms the inequality into an equality, which finally gives Formula (2a):
log sup
θ∈Θ
eh(θ)π(θ) = sup
g∈F (Θ)
θi∈nΘf {h(θ) − log g(θ)
π(θ) } .
Proof of Equation (2b). Any possibility function g takes its values in [0, 1], so that for any possibil
ity function g and any parameter θ ∈ Θ, we have log g(θ) ≤ 0. Thus, for any possibility function g
and any parameter θ,
log eh(θ)π(θ) ≤ h(θ) − log g(θ)
π(θ) ,
so taking the supremum over θ in both sides leads for any g to:
log sup
θ∈Θ
eh(θ)π(θ) ≤ sup
θ∈Θ {h(θ) − log g(θ)
π(θ) } ,
and taking the infimum over possibility functions g in the right-hand side leads to
log sup
θ∈Θ
eh(θ)π(θ) ≤ inf
g∈F(Θ) sup
θ∈Θ {h(θ) − log g(θ)
π(θ) } ,
Once again, g = g⋆
max transforms the inequality into an equality, which finally gives Formula (2b)
log sup
θ∈Θ
eh(θ)π(θ) = inf
g∈F(Θ) sup
θ∈Θ {h(θ) − log g(θ)
π(θ) } .
Proof of Equation (3). We have already mentioned in the proof of Equation (2a) that
g⋆
max(θ) ≐ eh(θ)π(θ)
sup
θ′ ∈Θ
eh(θ′)π(θ′) ∈ argmax
g∈F (Θ)
θi∈nΘf {h(θ) − log ( g(θ)
π(θ) )} ,
so that
θi∈nΘf {h(θ) − log ( g⋆
max(θ)
π(θ) )} = sup
g∈F (Θ)
θi∈nΘf {h(θ) − log ( g(θ)
π(θ) )} .
Furthermore, any possibility function g′ ∈ F (Θ) such that g′ ⪯ g⋆
max satisfies by monotonicity of the logarithmic function:
θi∈nΘf {h(θ) − log ( g′(θ)
π(θ) )} ≥ θi∈nΘf {h(θ) − log ( g⋆
max(θ)
π(θ) )} .
Hence, combining the two lines above, we get for any possibility function g′ ∈ F(Θ) such that
g′ ⪯ g⋆
max:
θi∈nΘf {h(θ) − log ( g′(θ)
π(θ) )} ≥ sup
g∈F (Θ)
θi∈nΘf {h(θ) − log ( g(θ)
π(θ) )} .
12

Since by definition of the supremum, we have the reverse inequality:
θi∈nΘf {h(θ) − log ( g′(θ)
π(θ) )} ≤ sup
g∈F (Θ)
θi∈nΘf {h(θ) − log ( g(θ)
π(θ) )} ,
we finally have for any possibility function g′ ∈ F (Θ) such that g′ ⪯ g⋆
max:
θi∈nΘf {h(θ) − log ( g′(θ)
π(θ) )} = sup
g∈F (Θ)
θi∈nΘf {h(θ) − log ( g(θ)
π(θ) )} .
This provides half of the proof, namely
{g ∈ F (Θ) ∶ g ⪯ g⋆
max} ⊂ argmax
g∈F (Θ)
θi∈nΘf {h(θ) − log ( g(θ)
π(θ) )} .
To get the equality, we still have to show that any possibility function g not satisfying g ⪯ g⋆
max
does not belong to the argmax. To show this, let us consider some possibility function g′ ∉
{g ∈ F (Θ) ∶ g ⪯ g⋆
max}, and show that
θi∈nΘf {h(θ) − log ( g′(θ)
π(θ) )} < sup
g∈F (Θ)
θi∈nΘf {h(θ) − log ( g(θ)
π(θ) )} .
To see this, recall that since g′ ⪯/ g⋆
max, there exists at least one θ′ ∈ Θ such that g′(θ′) > g⋆
max(θ′).
Therefore,
h(θ′) − log( g′(θ′)
π(θ′) ) < h(θ′) − log( g⋆
max(θ′)
π(θ′) ) ,
Using the definition of the infimum, we have
θi∈nΘf {h(θ) − log( g′(θ)
π(θ) )} ≤ h(θ′) − log( g′(θ′)
π(θ′) ) < h(θ′) − log( g⋆
max(θ′)
π(θ′) ) .
However, notice that by definition of g⋆
max, the quantity in the right-hand side above does not depend
on θ′ since:
h(θ′) − log( g⋆
max(θ′)
π(θ′) ) = h(θ′) − log
⎛⎜⎜⎜⎜⎝
eh(θ′)π(θ′)
sup eh(⋅)π(⋅) π(θ′)
⎞⎟⎟⎟⎟⎠
= log sup
θ∈Θ
eh(θ)π(θ),
so combining the two lines above, we get
θi∈nΘf {h(θ) − log( g′(θ)
π(θ) )} < log sup
θ∈Θ
eh(θ)π(θ),
By using Formula (2a), we can rewrite the quantity in the right-hand side:
θi∈nΘf {h(θ) − log( g′(θ)
π(θ) )} < sup
g∈F (Θ)
θi∈nΘf {h(θ) − log( g(θ)
π(θ) )} ,
which is exactly what we wanted to show. Hence, g′ cannot belong to the set of maximisers. This proves that
argmax g∈F (Θ)
θi∈nΘf {h(θ) − log( g(θ)
π(θ) )} = {g ∈ F (Θ) ∶ g ⪯ g⋆
max} ,
which concludes the proof.
Proof of Equation (4). The proof of Equation (4) is very similar to the proof of Equation (3), and is only provided for the sake of completeness. Once again, we start from the following fact mentioned in the proof (2b):
g⋆
max(θ) ≐ eh(θ)π(θ)
sup
θ′ ∈Θ
eh(θ′)π(θ′) ∈ argmin
g∈F (Θ)
sup
θ∈Θ {h(θ) − log ( g(θ)
π(θ) )} ,
13

so that
sup
θ∈Θ {h(θ) − log ( g⋆
max(θ)
π(θ) )} = inf
g∈F(Θ) sup
θ∈Θ {h(θ) − log ( g(θ)
π(θ) )} .
Furthermore, any possibility function g′ ∈ F (Θ) such that g⋆
max ⪯ g′ satisfies by monotonicity of the
logarithmic function:
sup
θ∈Θ {h(θ) − log ( g′(θ)
π(θ) )} ≤ sup
θ∈Θ {h(θ) − log ( g⋆
max(θ)
π(θ) )} .
Hence, combining the two lines above, we get for any possibility function g′ ∈ F(Θ) such that
g⋆
max ⪯ g′:
sup
θ∈Θ {h(θ) − log ( g′(θ)
π(θ) )} ≤ inf
g∈F(Θ) sup
θ∈Θ {h(θ) − log ( g(θ)
π(θ) )} . Since by definition of the infimum, we have the reverse inequality:
sup
θ∈Θ {h(θ) − log ( g′(θ)
π(θ) )} ≥ inf
g∈F(Θ) sup
θ∈Θ {h(θ) − log ( g(θ)
π(θ) )} ,
we finally have for any possibility function g′ ∈ F (Θ) such that g⋆
max ⪯ g′:
sup
θ∈Θ {h(θ) − log ( g′(θ)
π(θ) )} = inf
g∈F(Θ) sup
θ∈Θ {h(θ) − log ( g(θ)
π(θ) )} . This provides half of the proof, namely
{g ∈ F (Θ) ∶ g⋆
max ⪯ g} ⊂ argmin
g∈F (Θ)
sup
θ∈Θ {h(θ) − log ( g(θ)
π(θ) )} .
To get the equality, we now have to show that any possibility function g not satisfying g⋆
max ⪯ g
does not belong to the argmin. To show this, let us consider some possibility function g′ ∉
{g ∈ F (Θ) ∶ g⋆
max ⪯ g}, and show that
sup
θ∈Θ {h(θ) − log ( g′(θ)
π(θ) )} > inf
g∈F(Θ) sup
θ∈Θ {h(θ) − log ( g(θ)
π(θ) )} .
To see this, recall that since g⋆
max ⪯/ g′, there exists at least one θ′ ∈ Θ such that g′(θ′) < g⋆
max(θ′).
Therefore,
h(θ′) − log( g′(θ′)
π(θ′) ) > h(θ′) − log( g⋆
max(θ′)
π(θ′) ) , Using the definition of the supremum, we now have
sup
θ∈Θ {h(θ) − log( g′(θ)
π(θ) )} ≥ h(θ′) − log( g′(θ′)
π(θ′) ) > h(θ′) − log( g⋆
max(θ′)
π(θ′) ) .
Again, the quantity in the right-hand side above does not depend on θ′:
h(θ′) − log( g⋆
max(θ′)
π(θ′) ) = h(θ′) − log
⎛⎜⎜⎜⎜⎝
eh(θ′)π(θ′)
sup eh(⋅)π(⋅) π(θ′)
⎞⎟⎟⎟⎟⎠
= log sup
θ∈Θ
eh(θ)π(θ),
so combining the two lines above leads to
sup
θ∈Θ {h(θ) − log( g′(θ)
π(θ) )} > log sup
θ∈Θ
eh(θ)π(θ),
Now using Formula (2b), we can rewrite the quantity in the right-hand side:
sup
θ∈Θ {h(θ) − log( g′(θ)
π(θ) )} > inf
g∈F(Θ) sup
θ∈Θ {h(θ) − log( g(θ)
π(θ) )} ,
which is precisely what we wanted to show. Hence, g′ cannot belong to the set of minimisers. This proves that
argmin g∈F (Θ)
sup
θ∈Θ {h(θ) − log( g(θ)
π(θ) )} = {g ∈ F (Θ) ∶ g⋆
max ⪯ g} ,
which concludes the proof.
14

B.2 Proofs of Results in Section 5
Proof of Proposition 1. Given the probabilistic likelihood p(x ∣ θ) = exp(θ⊺T (x) − A(θ) − B(x)),
under the uninformative prior on Θ, π (θ) = 1, the posterior possibility is given by
π (θ ∣ x) = p(x ∣ θ)π (θ)
maxθ′ p(x ∣ θ′)π (θ′) = p(x ∣ θ)
maxθ′ p(x ∣ θ′)
= exp ((θ − θ⋆)⊺ T (x) − (A (θ) − A (θ⋆))) ,
where we denote the MLE by θ⋆ ≐ argmaxθ p (x ∣ θ) = argmaxθ θ⊺T (x) − A(θ). The first-order
condition for the maximum tells us that T (x) = ∇θA (θ⋆). Plugging this in the equation above, we
get the result in (7b):
π (θ ∣ x) = exp ((θ − θ⋆)⊺ ∇θA (θ⋆) − (A (θ) − A (θ⋆)))
= exp (−DA (θ∥θ⋆)) .
Next, we rewrite the posterior as
π (θ ∣ x) = exp (θ⊺T (x) − A (θ) − (θ⋆⊺T (x) − A (θ⋆)))
= exp (θ⊺λ − A (θ) − A′ (λ)) ,
which is indeed of the same form as gλ, with λ ≐ T (x). From the definition of θ⋆, we get the result
in Equation (7a), that A′ = A†.
Proof of Proposition 2. Consider the likelihood p(x ∣ θ) = exp(θ⊺T (x)−A(θ)−B(x)), and a choice
of prior gλ,ν ≐ gν
λ, with gλ ∈ GA(Θ) defined as gλ (θ) = exp (λ⊺θ − A† (λ) − A (θ)), for some
λ ∈ Λ. Denoting the maximum a posteriori (MAP) estimate by θ⋆ ≐ argmaxθ p (x ∣ θ) gλ,ν (θ), the
posterior possibility is given by
gλ,ν (θ ∣ x) = p(x ∣ θ)gν
λ (θ)
maxθ′ p(x ∣ θ′)gν
λ (θ′)
= exp (θ⊺ (T (x) + νλ) − (ν + 1) A (θ))
maxθ′ exp (θ′⊺ (T (x) + νλ) − (ν + 1) A (θ′))
= exp (θ⊺ (T (x) + νλ) − (ν + 1) A (θ) − (ν + 1) A† ( T (x) + νλ
ν + 1 ))
= g T (x)+νλ
ν+1 ,ν+1 (θ) ,
As a sanity check, note that with ν = 0, g is the uninformative prior, and we recover the posterior in
Proposition 1.2 Therefore, gλ,ν is a valid conjugate prior for the likelihood p(⋅ ∣ θ).
Next, we show that gν
λ ∈ GνA(Θ). It holds that
gν
λ (θ) = exp (νλ⊺θ − νA† (λ) − νA (θ))
= exp (νλ⊺θ − (νA)† (νλ) − νA (θ)) ,
where the second equality follows from the following property of the convex conjugate:
νA† (λ) = ν sup
θ
λ⊺θ − A (θ) = sup
θ
νλ⊺θ − νA (θ) = (νA)† (νλ) .
We conclude that gν
λ ∈ GνA(Θ) as required. Finally, we have
gλ (θ) = exp (λ⊺θ − A† (λ) − A (θ))
= exp (θ⊺λ − A†† (θ) − A† (λ)) ,
so the mapping fθ ∶ λ → gλ (θ), which can be written as
fθ ∶ λ → exp (θ⊺λ − A†† (θ) − A† (λ))
is in GA† (Λ).
2We note here that when ν is an integer, it can be understood as encoding the number of pseudoobservations, as also in probabilistic conjugate priors.
15

Proof of Proposition 3. Let θ ̄(λ) ≐ argmaxθ∈Θ lˆ(θ) + λ⊺θ − A(θ) denote the solution set of the
optimisation problem within CBO. A sub-gradient of CBO is
∇λCBO(gλt ) = −∇λ log gλt (θ)∣θ=θ ̄t = ∇λA†(λt) − θ ̄t,
where θ ̄t is an optimiser in θ ̄(λt), which satisfies ∇θlˆ(θ ̄t) + λt − ∇θA(θ ̄t) = 0, so that
θ ̄t = ∇λA†(λt + ∇θlˆ(θ ̄t)) = θ⋆(λt + ∇θlˆ(θ ̄t)).
Therefore, recalling that CBO(gλt ) is maximised, a valid update rule for the parameter λ is
λt+1 = λt + ρt∇λCBO(gλt ) = λt − ρt[θ⋆(λt + ∇θlˆ(θ ̄t)) − θ⋆(λt)].
We consider the first-order Taylor approximation of θ⋆:
θ⋆(λt + ∇θlˆ(θ ̄t)) ≈ θ⋆(λt) + ∇2
λ A† (λt )∇θ lˆ(θ ̄ t )
≈ θ⋆(λt) + ∇2
λ A† (λt )∇θ lˆ(θ⋆ (λt )),
where a zeroth-order approximation has been made in the argument of ∇θlˆ. Identifying the term
∇2A†(λt) with the inverse of the information Iλt completes the proof of the proposition.
Proof of Corollary 1. We consider the log-partition function A(θ) = 1
2 θ⊺Σθ of the normal distribu
tion with unknown mean and known variance Σ. The convex conjugate of A(θ) is
A†(λ) = sup
θ∈Θ {θ⊺λ − 1
2 θ⊺Σθ} = 1
2 λ⊺Σ−1λ.
Possibility functions in GA(Θ) are of the form
gλ(θ) = exp(λ⊺θ − 1
2 λ⊺Σ−1λ − 1
2 θ⊺Σθ)
= exp(− 1
2 (θ − Σ−1λ)⊺Σ(θ − Σ−1λ))
= N(θ; Σ−1λ, Σ−1).
A convenient property of these exponential families, as in the probabilistic case, is that Iλ = Σ
which does not depend on λ. We also obtain from the properties of the normal possibility function
that θ⋆(λ) = Σ−1λ. Therefore, the approximate update rule can be expressed as
λt+1 ≈ λt − ρtΣ−1∇θlˆ(Σ−1λt).
Finally, noticing that
∇θlˆ(θ) = ∇θlˆs(μ(θ)) = ∇θμ(θ)∇μlˆs(μ(θ)) = Σ∇μlˆs(Σθ),
the update rule could also be expressed as
λt+1 ≈ λt − ρt∇μlˆs(λt).
Proof of Corollary 2. We consider the log-partition function A(θ) = n log(1 + exp(θ)) of the bino
mial distribution with known number of trials n. The convex conjugate of A(θ) is
A†(λ) = sup
θ∈Θ {θ⊺λ − n log(1 + exp(θ))}
= λ log λ
n + (n − λ) log (1 − λ
n).
Subsequently, we can also obtain the following:
θ⋆ = ∇λA†(λ) = log λ
n−λ I −1
λ = ∇2
λA†(λ) = 1
λ(1−λ/n)
16

Therefore, the approximate update rule can be expressed as:
λt+1 ≈ λt − ρt
1
λt(1 − λt/n) ∇θlˆ( log λt
n − λt ).
Recall that p(θ) = (1 + exp(−θ))−1 = σ(θ), where σ is the sigmoid function. Chain rule gives us
∇θlˆ(θ) = ∇θp(θ)∇plˆs(σ(θ))
= σ(θ)(1 − σ(θ))∇plˆs(σ(θ))
At θ = log(λ/(n − λ)), it holds that σ(θ) = λ/n. Hence, the update is given by
λt+1 ≈ λt − ρt
n ∇plˆs(λt/n).
17

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:53.839Z
- **Text Length:** 46780 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 17 of 17
