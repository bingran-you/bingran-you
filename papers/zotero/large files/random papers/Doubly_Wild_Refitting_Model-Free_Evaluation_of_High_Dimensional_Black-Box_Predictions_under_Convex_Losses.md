# PDF Document: Hu and Simchi-Levi - 2025 - Doubly Wild Refitting Model-Free Evaluation of High Dimensional Black-Box Predictions under Convex.pdf

**File Path:** Hu and Simchi-Levi - 2025 - Doubly Wild Refitting Model-Free Evaluation of High Dimensional Black-Box Predictions under Convex.pdf

**Processed Date:** 2026-02-10T18:14:43.563Z

**File Size:** 567.41 KB

**Total Pages:** 33

**Extracted Pages:** 33

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3413

**Title:** Doubly Wild Refitting: Model-Free Evaluation of High Dimensional Black-Box Predictions under Convex Losses

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Doubly Wild Refitting: Model-Free Evaluation of High Dimensional
Black-Box Predictions under Convex Losses
Haichen Hu♮1,3 David Simchi-Levi†2,3
1Center for Computational Science and Engineering, MIT
2Institute for Data, Systems, and Society, MIT
3Department of Civil and Environmental Engineering, MIT
Abstract
We study the problem of excess risk evaluation for empirical risk minimization (ERM)
under general convex loss functions. Our contribution is an efficient refitting proce
dure that computes the excess risk and provides high-probability upper bounds under
the fixed-design setting. Assuming only black-box access to the training algorithm
and a single dataset, we begin by generating two sets of artificially modified pseudo
outcomes—termed wild responses—created by stochastically perturbing the gradient
vectors with carefully chosen scaling. Using these two pseudo-labeled datasets, we then
refit the black-box procedure twice to obtain two corresponding wild predictors. Finally,
leveraging the original predictor, the two wild predictors, and the constructed wild re
sponses, we derive an efficient excess-risk upper bound. A key feature of our analysis
is that it requires no prior knowledge of the complexity of the underlying function
class. As a result, the method is essentially model-free and holds significant promise for
theoretically evaluating modern opaque machine learning systems—such as deep neu
ral networks and generative models—where traditional capacity-based learning theory
becomes infeasible due to the extreme complexity of the hypothesis class.
Key words: Statistical Machine Learning, Artificial Intelligence, Wild Refitting
1 Introduction
Black-box machine learning and artificial intelligence algorithms—such as deep neural networks,
large language models (LLMs), and emerging forms of artificial general intelligence (AGI)—are
profoundly reshaping modern science (Jumper et al., 2021), industry (Saka et al., 2024), business
♮Email: huhc@mit.edu
†Email: dslevi@mit.edu
1
arXiv:2511.18789v1 [cs.LG] 24 Nov 2025

(Alim, 2025; Huang et al., 2025), healthcare (Wang et al., 2020), and education (Fuchs, 2023).
From the perspective of machine learning applications, such as in operations management, people
have been increasingly adopting highly complex predictive algorithms—most notably deep neural
networks—to estimate and forecast a wide range of structural functions, including demand functions
(Safonov, 2024), customer choice models (Gabel and Timoshenko, 2022; Chen et al., 2023), logistics
and transportation costs (Tsolaki et al., 2023), supply delay distributions, and inventory dynamics
(Boute et al., 2022). These opaque systems are becoming increasingly central to real-world decision
making; empirically evaluating their effectiveness, robustness, and interpretability has become both
essential and widely studied (Linardatos et al., 2020; Dwivedi et al., 2023; Ye and Yoganarasimhan,
2025; Hendrycks et al.).
At the same time, in statistical machine learning and its applications in operations research, in
cluding dynamic pricing (Wang et al., 2025), inventory control (Ding et al., 2024), and online
assortment optimization (Bastani et al., 2022)—researchers increasingly rely on the theoretical in
terpretability and statistical guarantees of learning algorithms. These theoretical insights provide
rigorous control over risk and generalization error, forming the cornerstone of data-driven decision
making. Such guarantees typically depend on known structural properties of the underlying model
class, often characterized by measures such as Rademacher complexity (Bartlett et al., 2005), VC
dimension (Vapnik and Chervonenkis, 2015), eluder dimension (Russo and Van Roy, 2013), and
model misspecification error (Bogunovic and Krause, 2021; Foster et al., 2020).
Therefore, there is a significant and essential gap between empirical and theoretical research re
garding the difficulty of evaluating the risk of opaque models. Machine learning theory can only
characterize the complexity of relatively simple function classes, such as linear and generalized lin
ear models. However, the deep learning models used in real applications are often too complicated
for theoretical analysis. This gap naturally leads to the following question:
Can we evaluate complicated black-box machine learning algorithms and provide rigorous
statistical guarantees on the risk bound under the most general setting?
Our Contribution: In this paper, we study the general Empirical Risk Minimization (ERM)
framework for high-dimensional prediction under convex losses with non-symmetric noise, and
develop an efficient algorithm to evaluate its excess risk. To this end, we propose a novel doubly wild
refitting procedure that enables rigorous characterization of the excess risk for any opaque machine
learning or deep learning algorithm. Compared with previous works on wild refitting (Wainwright,
2025; Hu and Simchi-Levi, 2025), our approach is not limited to the univariate prediction setting,
symmetric noise distributions, or Bregman-type losses, making it substantially more general and
applicable to a much broader range of learning and evaluation settings.
2

2 Related Works
Our work is closely connected to two streams of research: statistical machine learning and the
emerging paradigm of wild refitting.
Statistical learning (Vapnik, 2013) has long served as a building block in the theoretical analysis
of machine learning algorithms, and the most popular form of machine learning algorithms is
Empirical Risk Minimization (ERM) (Vapnik, 1991). A central and active line in statistical learning
focuses on understanding the excess risk or generalization error of learning algorithms. Classical
approaches rely on empirical process theory, with complexity measures such as the VC dimension
(Vapnik and Chervonenkis, 2015; Floyd and Warmuth, 1995), covering numbers (van de Geer,
2000), Rademacher complexity (Massart, 2007; Bartlett et al., 2005), and eigendecay rate (Goel
and Klivans, 2017; Hu et al., 2025). Despite these advances, bounding these metrics fundamentally
depends on the structure of the underlying model class. When the hypothesis space is extremely
rich, these methods break down and fail to yield meaningful excess risk guarantees. In contrast,
our approach is model-free and bypasses these structural limitations.
Wild refitting is a recently proposed framework for bounding the excess risk of black-box machine
learning algorithms. The central idea is to take the trained model and the original dataset, construct
pseudo-responses by perturbing the model’s predicted values, and treat the resulting pseudo-labeled
outcomes as new valid data points. A second predictor is then retrained on this artificial dataset.
Finally, it uses information extracted from the pair of predictors to upper bound the excess risk.
Wainwright (2025) introduced this approach in the setting of scalar-valued regression with sym
metric noise. Subsequently, Hu and Simchi-Levi (2025) extended wild refitting to scalar-valued
empirical risk minimization (ERM) under general Bregman losses, still assuming symmetric noise.
In this paper, we investigate wild refitting for ERM with high-dimensional predictors under gen
eral convex loss functions and non-symmetric noise. Under asymmetry, a single retraining step is
no longer sufficient; instead, we construct two pseudo-labeled datasets and perform two separate
refitting steps to obtain a valid excess risk bound.
Paper Structure: The remainder of the paper is organized as follows. Section 3 introduces our
ERM setup, including the assumptions regarding the loss function, along with key definitions and
properties of the excess risk. Section 4 then presents our doubly wild refitting algorithm in full
detail. Finally, Section 5 establishes the corresponding theoretical excess risk guarantees.
Notations: We use [n] to denote the index set {1, 2, . . . , n}, and we write x1:n for the sequence
{x1, . . . , xn}. The notation EY denotes expectation with respect to the law of the random variable
Y , while EY |X denotes expectation with respect to the conditional distribution of Y given X. If φ
is convex, then we use Dφ to represent its Bregman divergence. For any algorithm A and dataset
D, we use A(D) to denote the predictor or estimator trained on dataset D through algorithm A.
3

U ⊥ Z represents that random variables U and Z are independent. For any vector-valued mapping
g : X → Rd, we define its empirical norm as ∥g∥n :=
√1
n
∑n
i=1 ∥g(xi)∥22.
3 Model: ERM with Convex Losses
In this section, we formally introduce the Empirical Risk Minimization (ERM) problem that serves
as the foundational model of our study. We assume basic familiarity with functional analysis and
variational analysis; a detailed mathematical background is provided in Appendix A. Specifically, we
consider a general ERM setting with an input space X and an output (or prediction) space Y ⊂ Rd.
A predictor is defined as a mapping f : X → Y, and the dataset is denoted by D = {(xi, yi)}in=1.
In the fixed-design setting, the covariates {xi}in=1 are treated as fixed, and yi is sampled inde
pendently from some unknown conditional distribution P(·|xi). whereas in the random-design
setting, both (xi, yi) are random. In this paper, we focus on fixed-design exclusively. The
population-level objective in fixed-design is given by
f ∗ ∈ argmin
f
{1
n
n
∑
i=1
Eyi [l(f (xi), yi) | xi]
}
.
The empirical counterpart, corresponding to the ERM estimator, is defined as
̂f ∈ argmin
f ∈F
{1
n
n
∑
i=1
l(f (xi), yi)
}
,
where l : Rd × Rd → [0, +∞) denotes the loss function, and F represents the function class over
which optimization is performed. Throughout, we assume that F is a convex Banach function space.
To facilitate our theoretical analysis, we impose the following assumption on the loss function.
Assumption 3.1. The loss function l has the following properties:
• Given any y ∈ Y, the function l(z, y) is β-smooth and μ-strongly convex with respect to z.
• ∀z ∈ Rd, −∇1l(z, y) is continuous and coercive with respect to y, lim∥y∥→∞
∇1l(z,y)T y
∥y∥2 = −∞.
• ∀z ∈ Rd, −∇1l(z, y) is monotone with respect to y, i.e., ⟨∇1l(z, y1) − ∇1l(z, y2), y1 − y2⟩ ≤ 0.
This assumption is satisfied by a broad class of commonly used loss functions, including the squared
loss, the cross entropy loss with clipping, and most L2 regularized convex losses.
Example 3.2. The squared loss l(u, y) = ∥u − y∥22 satisfies Assumption 3.1.
Example 3.3. For exponential family with parameter θ, p(y|θ) = h(y) exp {⟨θ, T (y)⟩ − A(θ)},
where T (y) is sufficient statistics and A(θ) = log ∫ h(y) exp {⟨θ, T (y)⟩} dy is the normalization
factor. Therefore, − log(p(y|θ)) = − log h(y) − ⟨θ, T (y)⟩ + A(θ). The regularized negative log
likelohood loss function as l(z, y) = A(z) − zT y + μ
2 ∥z∥22 satisfies Assumption 3.1.
4

Example 3.4. In Lp regression with bounded region, the loss function l(z, y) = 1
p ∥z − y∥pp, p ≥ 2
satisfies Assumption 3.1.
Now we provide the properties of the predictors ̂f and f ∗. First, by the first order optimality
condition in variational analysis (Rockafellar and Wets, 1998), we have the following proposition.
Proposition 3.5. For any x ∈ X , f ∗(x) minimizes the conditional expectation Ey[l(f (x), y)|x].
Then, the directional Gˆateaux derivative at any measurable function is zero, i.e.,
Ey[⟨∇1l(f ∗(x), y), h(x)⟩ |x] = 0 ⇒ Ey[∇1l(f ∗(x), y)|x] = 0. (3.1)
Therefore, given any x, ∇1l(f ∗(x), y) is a centered random variable. Naturally, in this paper, we
assume the following sub-Gaussian tail property about it.
Assumption 3.6. Let g(x) := ∇1l
(
f∗(x), y
)
∈ Rd and consider the case when {∥g(x)∥ > 0}. Fix
x, we assume that g(x) is conditionally zero-mean and σ2-sub-Gaussian along directions, i.e., for
all λ ∈ R, and any unit vector e ∈ Sd−1,
E[g(x)| ⟨g(x), e⟩ = ±||g(x)||] = 0,
E
[
exp
{
λ
(
⟨g(x), e⟩ − me(x)
)
}∣ ∣ ∣ ∣
x, | ⟨g(x), e⟩ | = ∥g(x)∥
]
≤ exp
(
σ 2 λ2 2
)
,
where me(x) := E[⟨g(x), e⟩ | x, e]. On the event {∥g(x)∥ = 0}, the condition is vacuous. We use
φx,e to denote the corresponding conditional probability distribution.
Intuitively, Assumption 3.6 states that if we take the random vector ∇1l(f ∗(x), y) and “slice” its
probability density along any given direction, the resulting one-dimensional conditional distribution
is centered and sub-Gaussian. In other words, every directional projection of the noise behaves
like a zero-mean sub-Gaussian variable. This condition is mild and is satisfied by many classical
distributions, including the multivariate normal distribution and multivariate t-distributions.
At the same time, since ̂f minimizes the empirical risk, again by computing the first order condition
about the Gˆateaux derivative, we have the following proposition similar to Proposition 3.5.
Proposition 3.7. For the empirical risk minimization procedure, given F is convex, we have that
1
n
n
∑
i=1
〈
∇1l( ̂f (xi), yi), f (xi) − ̂f (xi)
〉
= 0, ∀f ∈ F. (3.2)
We are now ready to elaborate on the excess risk, which serves as the performance metric of any
algorithm in statistical learning. In the fixed design setting, the excess risk is defined as
Efix( ̂f ) := 1
n
n
∑
i=1
Ey′
i [l( ̂f (xi), y′
i) − l(f ∗(xi), y′
i)],
5

where {yi′}n
i=1 are new test data points that are independent of ̂f . Under the ERM procedure, we
can also define the empirical excess risk as
E ̄D( ̂f ) := 1
n
n
∑
i=1
l( ̂f (xi), yi) − 1
n
n
∑
i=1
l(f ∗(xi), yi).
Now, to compare the difference between Efix( ̂f ) and E ̄D( ̂f ), we first use the Bregman representation
of any convex function to get that
l( ̂f (xi), yi) = l(f ∗(xi), yi) +
〈
∇1l(f ∗(xi), yi), ̂f (xi) − f ∗(xi)
〉
+ Dl(·,yi)( ̂f (xi), f ∗(xi)).
Given this equation, Proposition 3.5, and Proposition 3.7, we can upper bound the the true excess
risk Efix( ̂f ) by empirical excess risk E ̄D( ̂f ) and some other stochastic term in the following lemma,
whose proof is deferred to Appendix B.
Proposition 3.8.
Efix( ̂f ) ≤ β
α E ̄D( ̂f ) + β
α
1
n
n
∑
i=1
〈
∇1l(f ∗(xi), yi), ̂f (xi) − f ∗(xi)
〉
.
By the definition of E ̄D( ̂f ), we can upper bound it by the empirical training error 1
n
∑n
i=1 l( ̂f (xi), yi).
Consequently, combining this with Proposition 3.8, the task of controlling the excess risk Efix( ̂f )
reduces to bounding the term
1
n
n
∑
i=1
〈
∇1l
(
f ∗(xi), yi
)
,
̂f (xi) − f ∗(xi)
〉
.
We refer to this quantity as true optimism, denoted by Opt∗( ̂f ). This term represents the central
analytical object in our study and is the primary quantity we aim to bound throughout the paper.
4 Doubly Wild Refitting via Perturbing the Gradients
In this section, we introduce our algorithm, Doubly Wild Refitting, which provides a function
class-free approach to bounding the excess risk under non-symmetric noise. The central idea of
wild refitting is to leverage the trained model ̂f to artificially construct new datasets by applying
carefully designed perturbations to the predicted values. The model is then retrained on these
perturbed datasets, and the resulting refitted models are used to extract statistical information
that enables a bound on the excess risk.
Previous works on wild refitting (Wainwright, 2025; Hu and Simchi-Levi, 2025) addressed single
dimensional prediction problems with symmetric noise distributions. This simpler setting required
only a single perturbed dataset and one model refit. In contrast, the high-dimensional, non
6

symmetric distribution setting we consider necessitates constructing two perturbed datasets and
refitting the model on each separately, which is also the reason our algorithm is named “doubly wild
refitting”. This double refitting approach is essential for our randomized symmetrization technique,
as it is required to bound the risk estimation error in both directions.
We now describe our doubly wild-refitting concretely. It is divided into two sub-procedures: per
turbation construction, and wild refitting.
Perturbation Construction: After training ̂f , we compute the gradients
{
∇1l( ̂f (xi), yi)
}n
i=1.
After that, we construct a sequence of i.i.d. Rademacher random variables {εi}n
i=1. Then, we
construct the wild responses {yi⋄}n
i=1 and {y♯
i }in=1 such that
∇1l( ̂f (xi), y⋄
i ) = ∇1l( ̂f (xi), yi) − 2ρ1εig ̃i,
∇1l( ̂f (xi), y♯
i ) = ∇1l( ̂f (xi), yi) + 2ρ2εig ̃i,
Unlike the wild refitting method of Wainwright (2025), which perturbs the predicted responses
directly, our approach perturbs the gradient vectors of the loss function. This design is intentional:
by injecting noise into the gradient rather than the prediction, we perturb the local geometry of
the loss landscape while preserving its global structure. In particular, gradient perturbations allow
us to control how the loss grows around ̂f , which is crucial for deriving non-asymptotic bounds on
the empirical processes. Intuitively, this “doubly wild” perturbation simulates stochastic variations
in the first-order conditions of the optimization problem, providing a direct handle on curvature
and stability rather than on output residuals alone.
To show that our perturbation scheme is well defined, we establish the following proposition,
which guarantees that the doubly wild refitting procedure is both well defined and computation
ally tractable. The theoretical justification relies on the Browder–Minty theorem (Browder, 1967;
Minty, 1962) from functional analysis, to which we refer the reader in Appendix A.
Proposition 4.1. Under Assumption 3.1, the doubly wild refitting is well-defined. That means,
for any 1 ≤ i ≤ n, any scaling numbers ρ1, ρ2, and any realization of εi, ∃ yi⋄ and y♯
i such that
∇1l( ̂f (xi), y⋄
i ) = ∇1l( ̂f (xi), yi) − 2ρ1εig ̃i, ∇1l( ̂f (xi), y♯
i ) = ∇1l( ̂f (xi), yi) + 2ρ2εig ̃i.
Moreover, if l(u, y) is strictly monotone with respect to y, then yi⋄ and y♯
i are also unique.
Wild Refitting: After the perturbation operation, we can construct two artificially perturbed
datasets D⋄ and D♯. Specifically, we define D⋄ = {(xi, yi⋄)}n
i=1 and D♯ = {(xi, y♯
i )}in=1. Then, we
retrain the model based on D⋄ and D♯ to get wild refitting predictors fρ⋄1 and fρ♯2.
Combining the perturbation procedure and the refitting procedure together, we summarize the
doubly wild refitting algorithm as pseudo-code in Algorithm 1.
7

Algorithm 1 Doubly Wild Refitting with Convex Loss
Require: Procedure AlgErm, dataset D0 = {(x1, y1), · · · , (xn, yn)}, noise scales ρ1, ρ2 > 0, loss
function l(z, y), and refitting datasets D⋄ = ∅, D♯ = ∅. Apply algorithm AlgErm on the training dataset. Get predictor
̂f = AlgErm({(xi, yi)}n
i=1).
for i = 1 : n do
Compute the gradient vectors g ̃i = ∇1l( ̂f (xi), yi).
Construct Rademacher sequence {εi}n
i=1.
Calculate wild responses yi⋄ and y♯
i such that
∇1l( ̂f (xi), y⋄
i ) = ∇1l( ̂f (xi), yi) − 2ρ1εig ̃i,
∇1l( ̂f (xi), y♯
i ) = ∇1l( ̂f (xi), yi) + 2ρ2εig ̃i,
Append (xi, yi⋄), (xi, y♯
i ) to D⋄ and D♯.
D⋄ ← D⋄ ∪ {(xi, y⋄
i )}, D♯ ← D♯ ∪ {(xi, y♯
i )}.
end for
Compute the refitted wild solutions fρ⋄1 = AlgErm(D⋄), fρ♯2 = AlgErm(D♯).
Output ̂f , fρ⋄1 , fρ♯2 D⋄, D♯, D0.
To summarize, the doubly wild refitting algorithm involves two main steps. In the first step, we
generate the wild responses {yi⋄}n
i=1 , {y♯
i }in=1 by computing the resolvent of the monotone gradient
operator. In the second step, we retrain two refitted predictors, fρ⋄1 and fρ♯2, based on the perturbed
datasets. The subsequent section demonstrates that the excess risk can be efficiently bounded in
terms of the outputs produced by Algorithm 1.
5 Statistical Guarantees
In this section, we present our main statistical guarantees. We first establish excess risk bounds
in the fixed-design setting and then extend the results to the random-design case. While the
theoretical guarantees in both settings are rigorous, we conclude with a practical discussion on how
these results can be effectively carried out in real applications.
5.1 Evaluating the Excess Risk in Fixed Design
We now bound the excess risk in the fixed design. Before we dive into the concrete results, we first
provide several important definitions and mathematical notations that are useful in this section. Re
call that we need to bound the true optimism term Opt∗( ̂f ) = 1
n
∑n
i=1
〈
∇1l(f ∗(xi), yi), ̂f (xi) − f ∗(xi)
〉
.
When there is model misspecification, as the sample size n → ∞, our trained predictor ̂f will not
8

converge to f ∗, instead, it will converge to the best approximator within the model class F, which
is denoted by f †, i.e.,
f † ∈ argmin
f ∈F
{1
n
n
∑
i=1
Eyi [l(f (xi), yi)|xi]
}
.
We denote the empirical L2 distance between ̂f and f † as ̂rn, i.e., ̂rn = || ̂f − f †||n. Correspondingly,
we name the following term as oracle optimism.
Opt†( ̂f ) := 1
n
n
∑
i=1
〈
∇1l(f ∗(xi), yi), ̂f (xi) − f †(xi)
〉
.
Moreover, we shall define the following empirical processes. Denoting ∇1l( ̂f (xi), yi) as g ̃i, we define
Wn(r) := sup
f ∈Br( ̂f )
{1
n
n
∑
i=1
〈
εig ̃i, f (xi) − ̂f (xi)
〉
}
,
Tn(r) := sup
f ∈Br( ̂f )
{1
n
n
∑
i=1
〈
εig ̃i, ̂f (xi) − f (xi)
〉
}
.
To induce the randomized symmetrization, for any index i, we use wi to denote the random variable
∇1l(f ∗(xi), yi), and ei to denote its directional vector. Conditioned on its direction vector, we
denote wi′ as a random vector sampled from the following probability distribution,
w′
i ∼ φxi,ei , w′
i ⊥ wi.
With this conditional independent copy, we construct a symmetric random variable w ̃i := wi−w′
i
2,
and define the following empirical process:
Zε
n(r) = sup
f ∈Br (f †)
{1
n
n
∑
i=1
〈
εiw ̃i, f (xi) − f †(xi)
〉
}
.
Traditionally, bounding empirical processes such as Wn(r) and Tn(r) relies on detailed knowledge
of the underlying function class—through measures like the Rademacher complexity, or the VC
dimension. In contrast, our doubly wild refitting procedure demonstrates that these quantities
can be effectively controlled without explicit access to such structural information. Instead, we
establish that the empirical processes can be bounded at certain radii directly using the outputs
generated by Algorithm 1. To formalize this idea, we introduce the following quantities, which we
refer to as wild optimisms.
Opt⋄(f ⋄
ρ1 ) := β
4ρ1n ||f ⋄
ρ1 − ̂f ||2
n+ 1
2ρ1n
n
∑
i=1
l( ̂f (xi), y⋄
i)− 1
2ρ1n
n
∑
i=1
l(f ⋄
ρ1 (xi), y⋄
i ),
Opt⋄(f ♯
ρ2 ) := β
4ρ2n ||f ♯
ρ2 − ̂f ||2
n+ 1
2ρ2n
n
∑
i=1
l( ̂f (xi), y♯
i)− 1
2ρ2n
n
∑
i=1
l(f ♯
ρ2 (xi), y♯
i ),
9

Then, we have the following key Lemma 5.1 bounding the empirical processes Wn and Tn by the
wild optimism.
Lemma 5.1. We have that
Wn(∥f ⋄
ρ1 − ̂f ∥n) ≤ Opt⋄(f ⋄
ρ1 ), Tn(∥f ♯
ρ2 − ̂f ∥n) ≤ Opt♯(f ♯
ρ2 ).
The proof is deferred to Appendix D.1. Lemma 5.1 establishes that, at certain radii, the empirical
process can be upper bounded by the quantities Opt⋄(fρ⋄1 ) and Opt♯(fρ♯2 ), both of which can be
computed efficiently from the outputs of Algorithm 1. This lemma serves as a key theoretical
component underpinning the wild-refitting procedure, because it enables us to upper bound the
empirical processes without knowledge of the underlying function class.
With Lemma 5.1, we have the following theorem regarding the evaluation of the excess risk Efix( ̂f ).
The proof of this theorem is deferred to Appendix D.
Theorem 5.2. For any radius r ≥ ̂rn, let ρ1 and ρ2 be the noise scales for which ∥fρ⋄1 − ̂f ∥ and
∥fρ♯2 − ̂f ∥ are equal to 2r. Then, for any t > 0, with probability at least 1 − 6e−t2,
Efix( ̂f ) ≤ β
α E ̄D( ̂f ) + β
α
(
Opt⋄(f ⋄
ρ1 ) + Opt♯(f ♯
ρ2 ) + B⋄
n( ̂f ) + B♯
n( ̂f )
)
+[(5
√
d + 3√log n + 4)r + ∥f † − f ∗∥n] 2√2βσt
α√n .
In this bound,
B⋄
n( ̂f ) := sup
f ∈B2r ( ̂f )
{1
n
n
∑
i=1
〈
εi
(
∇1l(f ∗(xi), yi) − ∇1l( ̂f (xi), yi)
)
, f (xi) − ̂f (xi)
〉
}
,
and
B♯
n( ̂f ) := sup
f ∈B2r ( ̂f )
{1
n
n
∑
i=1
〈
εi
(
∇1l(f ∗(xi), yi) − ∇1l( ̂f (xi), yi)
)
,
̂f (xi) − f (xi)
〉
}
,
are called pilot error terms.
We provide a brief explanation of Theorem 5.2. Intuitively, there are three parts in the bound. The
first part is E ̄D( ̂f ), which is the empirical excess risk. The second part consists of the wild optimism
terms Opt⋄(fρ⋄1 ) and Opt♯(fρ♯2 ), which are the main components related to bounding the true
optimism Opt∗( ̂f ). The third part consists of higher order terms, which include the probabilistic
fluctuation term [(5√d + 3√log n + 4)r + ∥f † − f ∗∥n] 2√2βσt
α√n and the pilot error terms Bn⋄( ̂f ) and
B♯n( ̂f ). For the probabilistic term, by (Rakhlin, 2022), the rate of this deviation term coincides
with the standard results derived from Talagrand’s inequality and Dudley’s entropy integral. Thus,
it will be dominated by the wild optimism in terms of order in Theorem 5.2.
For the pilot error terms, we provide the following intuitive explanation. In the term Bn⋄( ̂f ),
intuitively, the quantity ∇1l(f ∗(xi), yi) − ∇1l( ̂f (xi), yi) captures the discrepancy between f ∗ and
10

̂f , and therefore contains meaningful information about the model estimation. Recall that:
Tn(2r) = sup
f ∈B2r ( ̂f )
{1
n
n
∑
i=1
εi
〈
∇1l( ̂f (xi), yi), ̂f (xi) − f (xi)
〉
}
= sup
f ∈B2r ( ̂f )
{1
n
n
∑
i=1
εi
〈
∇1l( ̂f (xi), yi) − ∇1l(f ∗(xi), yi) + ∇1l(f ∗(xi), yi), ̂f (xi) − f (xi)
〉
}
= sup
f ∈B2r ( ̂f )
{1
n
n
∑
i=1
εi
〈
∇1l(f ∗(xi), yi) − ∇1l( ̂f (xi), yi), f (xi) − ̂f (xi)
〉
+ εi
〈
∇1l(f ∗(xi), yi), ̂f (xi) − f (xi)
〉
}
,
where wi = ∇1(f ∗(xi), yi) s a zero-mean random variable that can be interpreted as an additional
”noise term.” Comparing Bn⋄( ̂f ) with Tn(2r), we see that the only difference is precisely the pres
ence of this extra noise term wi in Tn(2r). Hence, Tn(2r) may be viewed as a noisier empirical
process, and we should intuitively expect it to have larger fluctuations than Bn⋄( ̂f ). By Lemma 5.1,
this observation suggests that Bn⋄( ̂f ) is upper bounded by the corresponding wild optimism term
Opt♯( ̂f ). An entirely analogous argument shows that B♯n( ̂f ) is expected to be controlled by the
wild optimism Opt⋄( ̂f ). Therefore, briefly speaking, the doubly wild refitting algorithm enables us
to bound the excess risk by terms of order O(E ̄D( ̂f ) + Opt⋄(fρ⋄1 ) + Opt♯(fρ♯2 )).
5.2 Bounding the Distance between ̂f and f †
Theorem 5.2 is useful only when ̂rn = ∥ ̂f − f †∥n is known. In this subsection, we provide an effective
method for bounding this quantity. For the simplicity of discussion, we consider a well-specified
scenario in this subsection, i.e., f ∗ ∈ F and therefore f † = f ∗. Then, we have the following theorem
about bounding ̂rn.
Theorem 5.3. For any t > 0, with probability at least 1 − 2e−t2, we have that
̂rn ≤
√2
α
(
Wn(2̂rn)) + Tn(2̂rn) + Bn⋄( ̂f ) + B♯n( ̂f )
)
+
( 10√d + 6√log n + 4
α +1
) 2√2σt
√n
≤
√2
α (Wn(2̂rn)) + Tn(2̂rn))) +
√2
α (Bn⋄( ̂f ) + B♯n( ̂f )) +
( 10√d + 6√log n + 4
α +1
) 2√2σt
√n
We highlight one improvement of our theorem compared with Wainwright (2025). In Wainwright
(2025), one needs the non-expansiveness condition, which assumes that the difference between the
predictor trained on a noisy dataset and that trained on a noiseless dataset is upper bounded by
the noise scale. In this paper, we successfully remove this assumption and provide a valid method
for bounding ̂rn under the well-specified condition.
To illustrate how to apply Theorem 5.3 to bound ̂rn, observe that the right-hand side of the theorem
11

contains three components. The first part is
√
Wn(2̂rn) + Tn(2̂rn), which is closely connected with
the wild optimism term. The second part is the pilot error Bn⋄( ̂f ) + B♯n( ̂f ). The last part is the
probability deviation term
( 10√d+6√log n+4
α +1
) 2√2σt
√n . Among these, whenever the function class F
is more complex than a simple parametric family, the dominant term will be
√
Wn(2̂rn) + Tn(2̂rn) .
Ignoring the lower order terms, we achieve the following practical approach: we tune the radius
parameter r such that it satisfies
r≤
√
2
α
(
Wn(2r) + Tn(2r)
)
. (5.1)
Any such r then provides a valid upper bound for ̂rn. Importantly, this procedure is fully data
driven, since given any s, by definition, both Wn(s) and Tn(s) are computable solely from the
trained predictor ̂f and the quantities {g ̃i}in=1.
In fact, we also have the following corollary with a more interpretable bound.
Corollary 5.4. For any noise scale ρ1, ρ2, for any t > 0, with probability at least 1 − 2e−t2,
̂r2
n ≤ max
{
(r⋄
ρ1 )2, (r♯
ρ2 )2,
( 4Wn(2rρ⋄1 )
αrρ⋄1
+ 4Tn(2r♯ρ2 )
αr♯ρ2
)
·
̂rn
}
+ 4(Bn⋄( ̂f ) + B♯n( ̂f ))
α+
( 10√d + 6√log n + 4
α +1
)2 16σ2t2
n.
The bound in Corollary 5.4 is slightly weaker compared to Theorem 5.3 but more interpretable
because we no longer need to tune the radius r to solve Inequality 5.1. Instead, we just need to
tune the noise scale. If we disregard the probability deviation and pilot error terms, we can roughly
summarize Corollary 5.4 in the following inequality:
̂rn ≤ max
{
r⋄
ρ1 , r♯
ρ2 , 4Wn(2rρ⋄1 )
αrρ⋄1
+ 4Tn(2r♯ρ2 )
αr♯ρ2
}
.
This inequality allows us to tune ρ1 and ρ2 to find a valid and tight upper bound of ̂rn more easily.
Finally, putting Theorem 5.2 and Theorem 5.2 together, we achieve an efficient algorithm for
bounding the excess risk of any black-box machine learning or deep learning algorithm with rigorous
statistical guarantees under the fixed design setting.
6 Discussion
In this paper, we investigate a doubly wild refitting procedure for upper bounding the excess risk
of arbitrary black-box ERM algorithms in machine learning. We show that the core mechanism
underlying wild refitting is the perturbation of gradient vectors, through which our framework
12

subsumes both Wainwright (2025) and Hu and Simchi-Levi (2025) as special cases.
Unlike traditional approaches that rely on explicit complexity measures of the underlying hypoth
esis class, our method bypasses such requirements entirely. Instead, we leverage the Rademacher
symmetrization of the gradient vectors and control the resulting empirical processes using perturbed
pseudo-outcomes, the two refitted wild predictors, and the original trained predictor.
Several promising directions for future research remain open. First, our analysis currently focuses
on the fixed-design setting; extending wild refitting to the random-design regime is important and
technically challenging. Second, while we provide a useful explanation for the pilot error terms,
developing a rigorous characterization of them is highly valuable. Moreover, existing methods of
wild refitting require full data memorization for gradient perturbation at every data point, and de
signing a data-efficient variant would be very appealing. Wild refitting for ERM problems endowed
with non-Euclidean geometric structures also suggests an intriguing opportunity for integrating
information geometry with statistical learning. We leave these directions for future work.
References
Muhammad Sahirul Alim. Beyond algorithms: Generative ai as a catalyst for accessible and
accountable optimization. 2025.
Peter L Bartlett, Olivier Bousquet, and Shahar Mendelson. Local rademacher complexities. 2005.
Hamsa Bastani, Pavithra Harsha, Georgia Perakis, and Divya Singhvi. Learning personalized
product recommendations with customer disengagement. Manufacturing & Service Operations
Management, 24(4):2010–2028, 2022.
Ilija Bogunovic and Andreas Krause. Misspecified gaussian process bandit optimization. Advances
in neural information processing systems, 34:3004–3015, 2021.
Radu Ioan Bo ̧t and Ern ̈o Robert Csetnek. Admm for monotone operators: convergence analysis
and rates. Advances in Computational Mathematics, 45(1):327–359, 2019.
Robert N Boute, Joren Gijsbrechts, Willem Van Jaarsveld, and Nathalie Vanvuchelen. Deep rein
forcement learning for inventory control: A roadmap. European journal of operational research,
298(2):401–412, 2022.
Felix E Browder. Existence and perturbation theorems for nonlinear maximal monotone operators
in banach spaces. 1967.
Zhen-Yu Chen, Zhi-Ping Fan, and Minghe Sun. Machine learning methods for data-driven demand
estimation and assortment planning considering cross-selling and substitutions. INFORMS Jour
nal on Computing, 35(1):158–177, 2023.
13

Philippe G Ciarlet. Linear and nonlinear functional analysis with applications. SIAM, 2025.
Jingying Ding, Woonghee Tim Huh, and Ying Rong. Feature-based inventory control with censored
demand. Manufacturing & Service Operations Management, 26(3):1157–1172, 2024.
Rudresh Dwivedi, Devam Dave, Het Naik, Smiti Singhal, Rana Omer, Pankesh Patel, Bin Qian,
Zhenyu Wen, Tejal Shah, Graham Morgan, et al. Explainable ai (xai): Core ideas, techniques,
and solutions. ACM computing surveys, 55(9):1–33, 2023.
Jonathan Eckstein and Dimitri P Bertsekas. On the douglas—rachford splitting method and the
proximal point algorithm for maximal monotone operators. Mathematical programming, 55(1):
293–318, 1992.
Sally Floyd and Manfred Warmuth. Sample compression, learnability, and the vapnik-chervonenkis
dimension. Machine learning, 21(3):269–304, 1995.
Dylan J Foster, Claudio Gentile, Mehryar Mohri, and Julian Zimmert. Adapting to misspecification
in contextual bandits. Advances in Neural Information Processing Systems, 33:11478–11489,
2020.
Kevin Fuchs. Exploring the opportunities and challenges of nlp models in higher education: is chat
gpt a blessing or a curse? In Frontiers in education, volume 8, page 1166682. Frontiers Media
SA, 2023.
Sebastian Gabel and Artem Timoshenko. Product choice with large assortments: A scalable deep
learning model. Management Science, 68(3):1808–1827, 2022.
Surbhi Goel and Adam Klivans. Eigenvalue decay implies polynomial-time learnability for neural
networks. Advances in Neural Information Processing Systems, 30, 2017.
Dan Hendrycks, Collin Burns, Steven Basart, Andy Zou, Mantas Mazeika, Dawn Song, and Jacob
Steinhardt. Measuring massive multitask language understanding. In International Conference
on Learning Representations.
Haichen Hu and David Simchi-Levi. Perturbing the derivative: Wild refitting for model-free eval
uation of machine learning models under bregman losses, 2025. URL https://arxiv.org/abs/
2509.02476.
Haichen Hu, Rui Ai, Stephen Bates, and David Simchi-Levi. Contextual online decision making with
infinite-dimensional functional regression. In Forty-second International Conference on Machine
Learning, 2025. URL https://openreview.net/forum?id=hFnM9AqT5A.
Chenyu Huang, Zhengyang Tang, Shixi Hu, Ruoqing Jiang, Xin Zheng, Dongdong Ge, Benyou
Wang, and Zizhuo Wang. Orlm: A customizable framework in training large models for auto
mated optimization modeling. Operations Research, 2025.
14

John Jumper, Richard Evans, Alexander Pritzel, Tim Green, Michael Figurnov, Olaf Ronneberger,
Kathryn Tunyasuvunakool, Russ Bates, Augustin ˇZı ́dek, Anna Potapenko, et al. Highly accurate
protein structure prediction with alphafold. nature, 596(7873):583–589, 2021.
Pantelis Linardatos, Vasilis Papastefanopoulos, and Sotiris Kotsiantis. Explainable ai: A review of
machine learning interpretability methods. Entropy, 23(1):18, 2020.
Pierre-Louis Lions and Bertrand Mercier. Splitting algorithms for the sum of two nonlinear oper
ators. SIAM Journal on Numerical Analysis, 16(6):964–979, 1979.
Pascal Massart. Concentration inequalities and model selection: Ecole d’Ete ́ de Probabilite ́s de
Saint-Flour XXXIII-2003. Springer, 2007.
George J Minty. Monotone (nonlinear) operators in hilbert space. 1962.
Sasha Rakhlin. Mathematical statistics: A non-asymptotic approach. https://www.mit.edu/
~rakhlin/courses/mathstat/rakhlin_mathstat_sp22.pdf, 2022. Lecture notes, IDS.160,
MIT, Spring 2022.
Frigyes Riesz. Die genesis des raumbegriffes. Mathematische und naturwissenschaftliche Berichte
aus Ungarn, 24:309–353, 1909.
R Tyrrell Rockafellar. Monotone operators and the proximal point algorithm. SIAM journal on
control and optimization, 14(5):877–898, 1976.
R Tyrrell Rockafellar and Roger JB Wets. Variational analysis. Springer, 1998.
Daniel Russo and Benjamin Van Roy. Eluder dimension and the sample complexity of optimistic
exploration. Advances in Neural Information Processing Systems, 26, 2013.
Kirill Safonov. Neural network approach to demand estimation and dynamic pricing in retail. arXiv
preprint arXiv:2412.00920, 2024.
Abdullahi Saka, Ridwan Taiwo, Nurudeen Saka, Babatunde Abiodun Salami, Saheed Ajayi, Kabiru
Akande, and Hadi Kazemi. Gpt models in construction industry: Opportunities, limitations, and
a use case validation. Developments in the Built Environment, 17:100300, 2024.
Kalliopi Tsolaki, Thanasis Vafeiadis, Alexandros Nizamis, Dimosthenis Ioannidis, and Dimitrios
Tzovaras. Utilizing machine learning on freight transportation and logistics applications: A
review. ICT Express, 9(3):284–295, 2023.
SA van de Geer. Empirical process theory and applications, 2000.
Vladimir Vapnik. Principles of risk minimization for learning theory. Advances in neural informa
tion processing systems, 4, 1991.
15

Vladimir Vapnik. The nature of statistical learning theory. Springer science & business media,
2013.
Vladimir N Vapnik and A Ya Chervonenkis. On the uniform convergence of relative frequencies
of events to their probabilities. In Measures of complexity: festschrift for alexey chervonenkis,
pages 11–30. Springer, 2015.
Roman Vershynin. High-dimensional probability: An introduction with applications in data science,
volume 47. Cambridge university press, 2018.
Martin J Wainwright. High-dimensional statistics: A non-asymptotic viewpoint, volume 48. Cam
bridge university press, 2019.
Martin J Wainwright. Wild refitting for black box prediction. arXiv preprint arXiv:2506.21460,
2025.
Fei Wang, Rainu Kaushal, and Dhruv Khullar. Should health care demand interpretable artificial
intelligence or accept “black box” medicine?, 2020.
Hanzhao Wang, Kalyan Talluri, and Xiaocheng Li. On dynamic pricing with covariates. Operations
Research, 2025.
Zikun Ye and Hema Yoganarasimhan. Document valuation in llm summaries: A cluster shapley
approach. arXiv preprint arXiv:2505.23842, 2025.
16

A Useful Mathematical Tools
In this section, we introduce some background knowledge about variational analysis, operator
theory, and probability theory.
Definition A.1 (Gˆateaux Derivative). Let X be a real Banach space, U ⊂ X open, and F : U →
R. We say F is Gˆateaux differentiable at x ∈ U if for every h ∈ X the directional limit
F ′(x)[h] := lti↓m0
F (x + th) − F (x)
t
exists and the map h 7→ F ′(x)[h] is positively homogeneous and additive on rays. If, in addition,
h 7→ F ′(x)[h] is continuous and linear, we identify it with an element F ′
G(x) ∈ X∗ (the Gˆateaux
gradient) via F ′(x)[h] = ⟨F ′
G(x), h⟩.
Definition A.2 (Monotone and strictly monotone mapping). Let A : Rm → Rm be a mapping.
• A is monotone if ⟨A(x) − A(y), x − y⟩ ≥ 0, ∀ x, y ∈ Rm.
• A is strictly monotone if ⟨A(x) − A(y), x − y⟩ > 0, ∀ x ̸= y ∈ Rm.
Definition A.3 (Resolvent). For λ > 0, the resolvent of A (when it exists globally) is the mapping
JA
λ := (I + λA)−1 : Rm → Rm, i.e. x = J A
λ (b) iff x + λA(x) = b.
Lemma A.4. Let X1, . . . , Xn ∈ Rd be independent random vectors satisfying E[Xi] = 0, and for
all unit vectors u ∈ Sd−1, ⟨u, Xi⟩ is σ2sub-Gaussian. Then, for any δ ∈ (0, 1), with probability at
least 1 − δ, we have
max
1≤i≤n ∥Xi∥2 ≤ σ
√
8
(
d log 5 + log 2n
δ
)
.
Lemma A.5. (Rockafellar and Wets, 1998) Let X be a real Banach space, U ⊂ X open, and
F : U → R be Gˆateaux differentiable at x∗ ∈ U . If x∗ is a local minimizer of F on U , then
F ′(x∗)[h] ≥ 0 and F ′(x∗)[−h] ≥ 0 (∀ h ∈ X),
hence F ′(x∗)[h] = 0 (∀ h ∈ X). In particular, if X is a Hilbert space, when F ′(x∗)[·] is represented
by a continuous linear functional via the Riesz representation theorem (Riesz, 1909), F ′
G(x∗) ∈ X∗,
the condition is equivalent to F ′
G(x∗) = 0 ∈ X∗.
Lemma A.6 (Browder-Minty theorem). (Ciarlet, 2025, Theorem 9.14-1) A bounded, continuous,
coercive and monotone function T from a real, separable reflexive Banach space X into its con
tinuous dual space X∗ is automatically surjective, i.e., for any g ∈ X∗, ∃u ∈ X s.t. T (u) = g.
Moreover, if T is strictly monotone, then T is also injective and thus bijective.
17

Lemma A.7. (Vershynin, 2018) Let X1, . . . , Xn ∈ Rd be independent, mean-zero random vectors
satisfying the σ2-sub-Gaussian moment generating function bound:
E exp
(
t ⟨u, Xi⟩
)
≤ exp
( σ2t2 2
)
for all t ∈ R, u ∈ Sd−1, i = 1, . . . , n.
Let f : (Rd)n → R be L-Lipschitz with respect to the product Euclidean norm:
|f (x1, . . . , xn) − f (y1, . . . , yn)| ≤ L
(n
∑
i=1
∥xi − yi∥2
2
)1/2
.
Then, for all λ ∈ R, we have E exp
(
λ
(
f (X1, . . . , Xn) − Ef (X1, . . . , Xn)
)
)
≤ exp
( σ2L2λ2 2
)
.
Consequently, for all t ≥ 0,
P
(∣ ∣
∣f (X1, . . . , Xn) − Ef (X1, . . . , Xn)
∣ ∣
∣≥t
)
≤ 2 exp
(
− t2
2σ2L2
)
.
B Proofs in Section 3
Proof of Proposition 3.5. We notice that F (f ) := Ey[l(f (x), y)|x] is a functional of f . We take
the Gˆateaux derivative of this functional and apply Lemma A.5 at the optimal predictor f ∗ to get
that
F ′(f ∗)[h] = Ey[⟨∇1l(f ∗(x), y), h(x)⟩ |x] = 0, ∀h.
Since this holds for all h, we have Ey[∇1l(f ∗(x), y)] = 0, and finish the proof.
Proof of Proposition 3.7. Similar to Proposition 3.5, we define the functional
H(f ) := 1
n
n
∑
i=1
l(f (xi), yi).
By the condition F is convex and Banach, we compute the Gaˆteaux derivative of this functional
and apply Lemma A.5 at the minimizer ̂f to get
1
n
n
∑
i=1
〈
∇1l( ̂f (xi), yi), g(xi) − ̂f (xi)
〉
= 0, ∀g ∈ F.
We finish the proof.
Proof of proposition 3.8. The proof is simply algebra, which is presented as below. By the Bregman
18

representation of the loss function, we have
Efix( ̂f ) = 1
n
n
∑
i=1
Eyi [l(f ∗(xi), yi) +
〈
∇1l(f ∗(xi), yi), ̂f (xi) − f ∗(xi)
〉
+ Dl(·,yi)( ̂f (xi), f ∗(xi)) − l(f ∗(xi), yi)]
=1
n
n
∑
i=1
Eyi
[〈
∇1l(f ∗(xi), yi), ̂f (xi) − f ∗(xi)
〉
+ Dl(·,yi)( ̂f (xi), f ∗(xi))
]
=1
n
n
∑
i=1
Eyi [Dl(·,yi)( ̂f (xi), f ∗(xi))]
≤1
n
n
∑
i=1
β
2 || ̂f (xi) − f ∗(xi)||2
2
≤1
n
n
∑
i=1
β
α
[
l( ̂f (xi), yi) − l(f ∗(xi), yi) +
〈
∇1l(f ∗(xi), yi), ̂f (xi) − f ∗(xi)
〉]
=β
α E ̄D( ̂f ) + β
α
1
n
n
∑
i=1
〈
∇1l(f ∗(xi), yi), ̂f (xi) − f ∗(xi)
〉
.
The third equation is given by Proposition 3.5, and the inequalities hold due to the β-smoothness
and μ-strong convexity of the loss function l.
C Proofs in Section 4
Proof of Proposition 4.1. For any u fixed, we view −∇1l(u, ·) as an operator with respect to the
second variable. We consider the wild refitting procedure that
−∇1l( ̂f (xi), y⋄
i ) = −(∇1l( ̂f (xi), yi) − 2ρiεig ̃i),
−∇1l( ̂f (xi), y♯
i ) = −(∇1l( ̂f (xi), yi) + 2ρiεig ̃i).
Note that Rm is finite dimensional, and therefore naturally Banach, separable, and reflexive. More
over, the dual space of Rm is Rm itself. By the condition in Proposition 4.1, −∇1l( ̂f (xi), y) is
continuous and coercive. Then, we can apply Lemma A.6 to conclude that −∇1l(u, ·) is surjective.
Therefore, ∇1l(u, ·) is also surjective. Hence, yi⋄ and y♯
i exist.
D Proofs in Section 5
D.1 Proofs in Subsection 5.1
Proof of Lemma 5.1. By Proposition 3.7, we have the first order optimality of ̂f in ERM procedure:
1
n
n
∑
i=1
〈
∇1l( ̂f (xi), yi), f (xi) − ̂f (xi)
〉
= 0, ∀ f ∈ F.
19

Then, by the β-smoothness of l, we have that
1
n
n
∑
i=1
l(f (xi), y⋄
i)≤ 1
n
n
∑
i=1
l( ̂f (xi), y⋄
i ) + 2ρ1
n
n
∑
i=1
〈
∇1l( ̂f (xi), y⋄
i ), f (xi) − ̂f (xi)
〉
+β
2
1
n
n
∑
i=1
||f (xi) − ̂f (xi)||2
2
=1
n
n
∑
i=1
l( ̂f (xi), y⋄
i ) − 2ρ1
n
n
∑
i=1
〈
εig ̃i, f (xi) − ̂f (xi)
〉
+β
2
1
n
n
∑
i=1
||f (xi) − ̂f (xi)||2
2.
The equality follows from Proposition 3.7. Similarly, by the construction of wild responses y♯
i , we
have that
1
n
n
∑
i=1
l(f (xi), y♯
i) ≤ 1
n
n
∑
i=1
l( ̂f (xi), y♯
i ) − 2ρ1
n
n
∑
i=1
〈
εig ̃i, ̂f (xi) − f (xi)
〉
+β
2
1
n
n
∑
i=1
||f (xi) − ̂f (xi)||2
2.
Rearranging both inequalities, we have that
1
n
n
∑
i=1
l(f (xi), y⋄
i)− 1
n
n
∑
i=1
l( ̂f (xi), y⋄
i ) ≤ 2ρ1
n
n
∑
i=1
〈
εig ̃i, f (xi) − ̂f (xi)
〉
+β
2
1
n
n
∑
i=1
||f (xi) − ̂f (xi)||2
2,
(D.1)
and
1
n
n
∑
i=1
l(f (xi), y♯
i)− 1
n
n
∑
i=1
l( ̂f (xi), y♯
i ) ≤ 2ρ2
n
n
∑
i=1
〈
εig ̃i, ̂f (xi) − f (xi)
〉
+β
2
1
n
n
∑
i=1
||f (xi) − ̂f (xi)||2
2.
(D.2)
Notice that
argmin
f ∈F
{1
n
n
∑
i=1
l(f (xi), y⋄
i)
}
= argmin
f ∈F
{1
n
n
∑
i=1
l(f (xi), y⋄
i)− 1
n
n
∑
i=1
l( ̂f (xi), y⋄
i)
}
and
argmin
f ∈F
{1
n
n
∑
i=1
l(f (xi), y♯
i)
}
= argmin
f ∈F
{1
n
n
∑
i=1
l(f (xi), y♯
i)− 1
n
n
∑
i=1
l( ̂f (xi), y♯
i)
}
.
Taking the minimization on both sides about inequality D.1 and inequality D.2, and notice that
fρ⋄1 and fρ♯2 are corresponding minimizers, we have that
1
n
n
∑
i=1
l(f ⋄
ρ1 (xi), y⋄
i)− 1
n
n
∑
i=1
l( ̂f (xi), y⋄
i)≤ β
2n ||f ⋄
ρ1 − ̂f ||2
n − 2ρ1Wn(||f ⋄
ρ1 − ̂f ||n).
1
n
n
∑
i=1
l(f ♯
ρ2 (xi), y♯
i)− 1
n
n
∑
i=1
l( ̂f (xi), y♯
i) ≤ β
2n ||f ♯
ρ2 − ̂f ||2
n − 2ρ2Tn(||f ♯
ρ2 − ̂f ||n),
20

where Wn and Tn are empirical processes:
Wn(r) = sup
f ∈Br( ̂f )
{1
n
n
∑
i=1
〈
εig ̃i, f (xi) − ̂f (xi)
〉
}
,
Tn(r) = sup
f ∈Br( ̂f )
{1
n
n
∑
i=1
〈
εig ̃i, ̂f (xi) − f (xi)
〉
}
.
Therefore, we conclude that
Wn(∥f ⋄
ρ1 − ̂f ∥n) ≤ Opt⋄(f ⋄
ρ1 ), Tn(∥f ♯
ρ2 − ̂f ∥n) ≤ Opt♯(f ♯
ρ2 ),
and finish the proof.
Proof of Theorem 5.2. With Lemma 5.1, we now provide the proof of Theorem 5.2. The argument
proceeds by establishing a sequence of intermediate lemmas, which are then combined to derive the
main result. The proofs of these lemmas are referred to Appendix E. First, we have the following
lemma about connecting the true optimism with the oracle optimism Opt†( ̂f ).
Lemma D.1. For any t > 0, we have that with probability at least 1 − e−t2,
Opt∗( ̂f ) ≤ Opt†( ̂f ) +
√2σ∥f † − f ∗∥nt
√n .
Lemma D.1 enables us to just focus on the term Opt†( ̂f ). Specifically, when the radius r is
moderately large, we have the following lemma.
Lemma D.2. For any r ≥ ̂rn = ∥ ̂f − f †∥n, with probability at least 1 − e−t2,
max
{
Opt†( ̂f ), 2Zε
n(r)
}
≤ 2Eε1:n,w ̃1:n|e1:n [Zε
n(r)] + 2√2σrt
√n .
With Lemma D.2, we only need to bound the term Eε1:n,w ̃1:n|e1:n [Znε (r)]. To handle this, we involve
the following intermediate empirical process. We define
Uε
n(r) := sup
f ∈Br( ̂f )
{1
n
n
∑
i=1
〈
εiw ̃i, f (xi) − ̂f (xi)
〉
}
.
Then, we can bound Zn by Un through the following lemma.
Lemma D.3. we have the deterministic bound that for any r > 0,
Eε1:n [Zε
n(r)] ≤ Eε1:n [U ε
n(r + ̂rn)], Eε1:n,w ̃1:n|e1:n [Zε
n(r)] ≤ Eε1:n,w ̃1:n|e1:n [U ε
n(r + ̂rn)]
21

Therefore, when r ≥ ̂rn, we also have
Eε1:n,w ̃1:n|e1:n [Z ε
n(r)] ≤ Eε1:n,w ̃1:n|e1:n [U ε
n(r + ̂rn)] ≤ Eε1:n,w ̃1:n|e1:n [U ε
n(2r)].
For Unε(r), we further have the following concentration lemma.
Lemma D.4. For any t > 0 and any r ≥ ̂rn, with probability at least 1 − 2e−t2,
Eε1:n,w ̃1:n|e1:n [U ε
n(r)] ≤ U ε
n(r) +
√2σ(5√d + 3√log n + 1)rt
√n . (D.3)
Combining Lemma D.1, Lemma D.2, Lemma D.3, and Lemma D.4 together, we arrive at the
conclusion that for any t > 0, with probability at least 1 − 4e−t2, for any r ≥ ̂rn,
Opt∗( ̂f ) ≤2U ε
n(r + ̂rn) + [(5
√
d + 3√log n + 2)r + ∥f † − f ∗∥n] 2√2σt
√n
≤2U ε
n(2r) + [(5
√
d + 3√log n + 2)r + ∥f † − f ∗∥n] 2√2σt
√n . (D.4)
Therefore, we only need to bound Unε(r) by the outputs from Algorithm 1.
Lemma D.5. For any radius r > 0, let ρ1 and ρ2 be the noise scales such that
r⋄
ρ1 := ∥f ⋄
ρ1 − ̂f ∥n = 2r, r♯
ρ2 := ∥f ♯
ρ2 − ̂f ∥n = 2r.
Then, for any t > 0, with probability at least 1 − 2e−t2,
Uε
n(2r) ≤ 1
2
(
Opt⋄(f ⋄
ρ1 ) + Opt♯(f ♯
ρ2 ) + B⋄
n( ̂f ) + B♯
n( ̂f )
)
+ 2√2σrt
√n ,
where Bn⋄( ̂f ) and B♯n( ̂f ) are pilot error terms defined as:
B⋄
n( ̂f ) := sup
f ∈B2r ( ̂f )
{1
n
n
∑
i=1
〈
εi
(
∇1l(f ∗(xi), yi) − ∇1l( ̂f (xi), yi)
)
, f (xi) − ̂f (xi)
〉
}
,
and
B♯
n( ̂f ) := sup
f ∈B2r ( ̂f )
{1
n
n
∑
i=1
〈
εi
(
∇1l(f ∗(xi), yi) − ∇1l( ̂f (xi), yi)
)
,
̂f (xi) − f (xi)
〉
}
.
as defined in Theorem 5.2.
Therefore, combining Inequality D.4 with Lemma D.5, with probability at least 1 − 6e−t2, we have:
Opt∗( ̂f ) ≤ Opt⋄(f ⋄
ρ1 ) + Opt♯(f ♯
ρ2 ) + B⋄
n( ̂f ) + B♯
n( ̂f ) + [(5
√
d + 3√log n + 4)r + ∥f † − f ∗∥n] 2√2σt
√n .
Combining this result with Proposition 3.8, we finish the proof.
22

D.2 Proofs in Subsection 5.2
Proof of Theorem 5.3. Now, we provide proofs about Theorem 5.3. Specifically, we require the
following lemmas.
Lemma D.6. For any t > 0, with probability at least 1 − 3e−t2,
̂r2
n≤ 2
α
(
2U ε
n(2̂rn) + 2√2σ(5√d + 3√log n + 2)̂rnt
√n
)
,
where Unε(r) := supf∈Br( ̂f )
{1
n
∑n
i=1
〈
εiw ̃i, f (xi) − ̂f (xi)
〉}
is already defined above.
The leading term in Lemma D.6 is 8
α Unε(2̂rn) as long as F yields a function class that is as complex
as a parametric one (Wainwright, 2019). Then, utilizing the property of doubly wild-refitting, we
have the following lemma.
Lemma D.7. For any t > 0, with probability at least 1 − 2e−t2,
Uε
n(2̂rn) ≤ 1
2
(
Wn(2̂rn)) + Tn(2̂rn) + B⋄
n( ̂f ) + B♯
n( ̂f )
)
+ 2√2σ̂rnt
√n ,
where
Wn = sup
f ∈Br( ̂f )
{1
n
n
∑
i=1
〈
εig ̃i, f (xi) − ̂f (xi)
〉
}
and
Tn = sup
f ∈Br( ̂f )
{1
n
n
∑
i=1
〈
εig ̃i, ̂f (xi) − f (xi)
〉
}
are already defined in Section 4.
Combining these two lemmas, we have that
̂r2
n≤ 2
α
(
Wn(2̂rn)) + Tn(2̂rn) + B⋄
n( ̂f ) + B♯
n( ̂f )
)
+
( 10√d + 6√log n + 4
α +1
) 2√2σt
√n ̂rn.
This is a quadratic inequality, solving it and we get
̂rn ≤
√2
α
(
Wn(2̂rn)) + Tn(2̂rn) + Bn⋄( ̂f ) + B♯n( ̂f )
)
+
( 10√d + 6√log n + 4
α +1
) 2√2σt
√n
So we finish the proof.
Proof of Corollary 5.4. We first show that Wn and Tn are concave functions. We prove the case
for Wn. For any s, t and α ∈ [0, 1], denote r := αs + (1 − α)t. Let fs and ft be functions achieving
the suprema that define Wn(s) and Wn(t). Define fr = αfs + (1 − α)ft ∈ F . By the triangle
23

inequality,
∥fr − ̂f ∥n ≤ α∥fs − ̂f ∥n + (1 − α)∥ft − ̂f ∥n ≤ αs + (1 − α)t = r.
Thus, the function fr is feasible for the supremum defining Wn(r), so that we have
αWn(s) + (1 − α)Wn(t) ≤ Wn(r).
Similarly, r 7→ Tn(r) is concave. By the fact that Wn(0) = Tn(0) = 0, we have that
Wn(s)
s ≤ Wn(t)
t , Tn(s)
s ≤ Tn(t)
t , for any s ≥ t > 0.
Now we prove the corollary. We either have 1) ̂rn ≤ max
{
rρ⋄1 , r♯ρ2
}
or 2) ̂rn > max
{
rρ⋄1 , r♯ρ2
}
. In
the latter circumstance, we have
Wn(2̂rn) = 2̂rn
Wn(2̂rn)
2
̂rn
≤ 2̂rn
Wn(2rρ⋄1 )
2rρ⋄1
=
̂rn
Wn(2rρ⋄1 )
rρ⋄1
.
Similarly, we have
Tn(2̂rn) ≤ ̂rn
Tn(2r♯ρ2 )
r♯ρ2
.
Combining these inequalities with Theorem 5.3, we get a quadratic inequality with respect to ̂rn.
̂r2
n≤
( 4Wn(2rρ⋄1 )
αrρ⋄1
+ 4Tn(2r♯ρ2 )
αr♯ρ2
)
·
̂rn + 4(Bn⋄( ̂f ) + B♯n( ̂f ))
α+
( 10√d + 6√log n + 4
α +1
)2 16σ2t2
n.
We thus get our result. Moreover, we could solve this inequality to get
̂rn ≤
( 4Wn(2rρ⋄1 )
αrρ⋄1
+ 4Tn(2r♯ρ2 )
αr♯ρ2
)
+
√
8(Bn⋄( ̂f ) + B♯n( ̂f ))
α+
( 10√d + 6√log n + 4
α +1
) 4√2σt
√n
E Proofs in Appendix D
In this section, we provide proofs of the lemmas in Appendix D.
Proof of Lemma D.1. First, by some algebra, we have that
Opt∗( ̂f ) = Opt†( ̂f ) + 1
n
n
∑
i=1
〈
∇1l(f ∗(xi), yi), f †(xi) − f ∗(xi)
〉
.
24

We now analyze the term 1
n
∑n
i=1
〈
∇1l(f ∗(xi), yi), f †(xi) − f ∗(xi)
〉
.
G(w) : w 7→ 1
n
n
∑
i=1
〈
wi, f †(xi) − f ∗(xi)
〉
.
G(w) is Lipschitz continuous with respect to the norm || · ||F .
|G(w) − G(w′)| =| 1
n
n
∑
i=1
〈
wi − w′
i, f †(xi) − f ∗(xi)
〉
|
≤1
n
n
∑
i=1
||wi − w′
i||2||f †(xi) − f ∗(xi)||2
≤1
n ||w − w′||F (
n
∑
i=1
||f †(xi) − f ∗(xi)||2
2)1/2
= ||f † − f ∗||n
√n ||w − w′||F .
We use the concentration inequality about sub-Gaussian random vectors in Lipschitz concentration
inequality (Lemma A.7). Therefore, with probability at least 1 − e−t2,
G(w) ≤ √2σ ||f † − f ∗||nt
√n .
We finish the proof.
Now, we focus on the term Opt†( ̂f ).
Proof of Lemma D.2. Throughout the proof of this lemma, we condition on the direction vectors
{ei}n
i=1 of {wi}n
i=1 as fixed. We define the function S(w) := Opt†( ̂f ), Then, we have that
S(w) − S(w′) = 1
n
n
∑
i=1
〈
wi − w′
i, ̂f (xi) − f †(xi)
〉
≤1
n
n
∑
i=1
∥wi − w′
i∥2∥ ̂f (xi) − f †(xi)∥2
≤ ∥ ̂f − f †∥n
√n ∥w − w′∥F
≤ √rn ∥w − w′∥F .
In the last inequality, we use the assumption that r ≥ ∥ ̂f − f †∥n. Swapping the order of w and w′,
we show that S(w) is Lipschitz continuous with constant √rn . We apply Lemma A.7 to get that
25

with probability at least 1 − e−t2,
S(w) ≤ Ew1:n|e1:n [Opt†( ̂f )] +
√2σrt
√n .
By Assumption 3.1, we know that wi are conditional zero-mean along all directions. Therefore, we
define wi′ to be an conditional independent copy of wi, i.e., wi′ ∼ φxi,ei, wi′ ⊥ wi.
Ew1:n|e1:n [Opt†( ̂f )] ≤ Ew1:n|e1:n
[
sup
f ∈Br (f †)
1
n
n
∑
i=1
〈
wi, f (xi) − f †(xi)
〉
]
= Ew1:n|e1:n
[
sup
f ∈Br (f †)
1
n
n
∑
i=1
〈
wi − E[w′
i|ei], f (xi) − f †(xi)
〉
]
≤ Ew,w′|e1:n
[
sup
f ∈Br (f †)
1
n
n
∑
i=1
〈
wi − w′
i, f (xi) − f †(xi)
〉
]
,
where the equality is by Assumption 3.1 and the second inequality is by Jenson’s inequality. Con
ditioned on ei, i = 1, · · · , n, wi − wi′ has a symmetric distribution, then, we get wi − wi′
d= 2εiw ̃i,
where {εi}n
i=1 is the Rademacher random variable sequence we simulate in Algorithm 1. By the
definition of Znε (r), we have
Ew1:n,w′
1:n |e1:n
[
sup
f ∈Br (f †)
1
n
n
∑
i=1
〈
wi − w′
i, f (xi) − f †(xi)
〉
]
= 2Eε1:n,w ̃1:n|e1:n [Zε
n(r)].
Therefore, we prove
Ew1:n|e1:n [Opt†( ̂f )] ≤ 2Eε1:n,w ̃1:n|e1:n [Zε
n(r)].
Combining this with the concentration inequality of S(w), we finish the proof.
Proof of Lemma D.3. Recall the definition that
Uε
n(r) = sup
f ∈Br( ̂f )
{1
n
n
∑
i=1
〈
εiw ̃i, f (xi) − ̂f (xi)
〉
}
,
Zε
n(r) = sup
f ∈Br (f †)
{1
n
n
∑
i=1
〈
εiw ̃i, f (xi) − f †(xi)
〉
}
.
26

Then, denoting h to be any function that achieves the supremum in Znε(r), then we have
Zε
n(r) = 1
n
n
∑
i=1
〈
εiw ̃i, h(xi) − f †(xi)
〉
=1
n
n
∑
i=1
〈
εiw ̃i, h(xi) − ̂f (xi) + ̂f (xi) − f †(xi)
〉
=1
n
n
∑
i=1
〈
εiw ̃i, h(xi) − ̂f (xi)
〉
} {{ }
term I
+1
n
n
∑
i=1
〈
εiw ̃i, ̂f (xi) − f †(xi)
〉
} {{ }
term II
.
We take expectation with respect to εi, i = 1 : n on both terms and analyze them separately. For
term II, εi is independent of ̂f and f †, therefore,
Eε1:n [ 1
n
n
∑
i=1
〈
εiw ̃i, ̂f (xi) − f †(xi)
〉
] = 0.
Then, Eε1:n,w ̃1:n|e1:n [ 1
n
∑n
i=1
〈
εiw ̃i, ̂f (xi) − f †(xi)
〉
] = 0.
For term I,since h ∈ Br(f †), then given r ≥ ̂rn = ∥ ̂f − f †∥n, by the triangle inequality, we know
that
∥h − ̂f ∥n ≤ r + ̂rn =: r1.
Thus,
term I ≤ sup
f ∈Br1 ( ̂f )
1
n
n
∑
i=1
〈
εiw ̃i, f (xi) − ̂f (xi)
〉
= Uε
n(r + ̂rn).
Taking expectation with respect to ε1:n and w ̃1:n|e1:n, we finish the proof.
Proof of Lemma D.4. For the second claim, we first condition on w ̃1:n and view Unε(r) as a function
of ε. We define function
Y (ε) := sup
f ∈Br( ̂f )
{1
n
n
∑
i=1
〈
εiw ̃i, f (xi) − ̂f (xi)
〉
}
27

For r ≥ ̂rn, we have that
Y (ε) − Y (ε′) = sup
f ∈Br( ̂f )
{1
n
n
∑
i=1
〈
εiw ̃i, f (xi) − ̂f (xi)
〉
}
− sup
f ∈Br( ̂f )
{1
n
n
∑
i=1
〈
ε′
i
w ̃i, f (xi) − ̂f (xi)
〉
}
≤ sup
f ∈Br( ̂f )
{1
n
n
∑
i=1
〈
(εi − ε′
i)w ̃i, f (xi) − ̂f (xi)
〉
}
≤ sup
f ∈Br( ̂f )
{1
n
n
∑
i=1
∥(εi − ε′
i)w ̃i∥ · ∥f (xi) − ̂f (xi)∥
}
≤ (maxi=1,··· ,n ∥w ̃i∥2)r
√n ∥ε − ε′∥2.
Similarly, Y (ε′) − Y (ε) has the same upper bound, so we conclude that Y (ε) is Lipschitz-continuous
with constant (maxi=1,··· ,n ∥w ̃i∥2)rt
√n . Therefore, applying Lemma A.7, we have that with probability
at least 1 − e−t2,
Eε1:n [U ε
n(r)] ≤ U ε
n(r) +
√2(maxi=1,··· ,n ∥w ̃i∥2)rt
√n .
Taking expectation on w ̃1:n|e1:n, we have that
Eε1:n,w ̃1:n|e1:n [U ε
n(r)] ≤ E
w ̃1:n|e1:n [U ε
n(r)] +
√2E
w ̃1:n|e1:n [maxi=1,··· ,n ∥w ̃i∥2]rt
√n .
We focus on the right hand side of this inequality. For the term E
w ̃1:n|e1:n [maxi∈{1,··· ,n} ∥w ̃i∥2], we
apply Lemma A.4 and get
E
w ̃1:n|e1:n [ max
i∈{1,··· ,n}
∥
w ̃i∥2] ≤ σ
√
8(d log 5 + log 2n).
For the term E
w ̃1:n|e1:n [Unε(r)], we define the function
Q(w ̃) := sup
f ∈Br( ̂f )
{1
n
n
∑
i=1
〈
εiw ̃i, f (xi) − ̂f (xi)
〉
}
.
Then, we have that
Q(w ̃) − Q(w ̃′) ≤ sup
f ∈Br( ̂f )
{1
n
n
∑
i=1
∥
w ̃ − w ̃′∥2∥f (xi) − ̂f (xi)∥2
}
≤ √rn ∥w ̃ − w ̃′∥F .
We then apply Lemma A.7, to get that with probability at least 1 − e−t2,
E
w ̃1:n|e1:n [U ε
n(r)] ≤ U ε
n(r) +
√2σrt
√n .
28

Combining all these parts together, we have that with probability at least 1 − 2e−t2,
Eε1:n,w ̃1:n|e1:n [U ε
n(r)] ≤ U ε
n(r) +
√2σ(5√d + 3√log n + 1)rt
√n .
So we finish the proof.
Proof of Lemma D.5. Recall that wi′ is a conditionally independent copy of wi = ∇1l(f ∗(xi), yi);
then we have
Uε
n(r) = sup
f ∈Br( ̂f )
{1
n
n
∑
i=1
〈
εi
wi − wi′
2 , f (xi) − ̂f (xi)
〉
}
≤1
2 sup
f ∈Br( ̂f )
{1
n
n
∑
i=1
〈
εiwi, f (xi) − ̂f (xi)
〉
}
} {{ }
term I
+1
2 sup
f ∈Br( ̂f )
{1
n
n
∑
i=1
〈
εiw′
i, ̂f (xi) − f (xi)
〉
}
} {{ }
term II
.
For the first term, we could directly use the property of fρ⋄1 to get:
sup
f ∈Br( ̂f )
{1
n
n
∑
i=1
〈
εiwi, f (xi) − ̂f (xi)
〉
}
≤ Opt⋄
ρ1 (f ⋄
ρ1 ) + B⋄
n( ̂f ).
For term II, it is trickier because wi′ is not the original noise, but rather a conditionally independent
copy whose realization is not contained in the dataset. We first apply Lemma A.7 to obtain that,
with probability at least 1 − e−t2,
sup
f ∈Br( ̂f )
{1
n
n
∑
i=1
〈
εiw′
i, ̂f (xi) − f (xi)
〉
}
≤ Eε,w′
i

 sup
f ∈Br( ̂f )
1
n
n
∑
i=1
〈
εiw′
i, ̂f (xi) − f (xi)
〉

+
√2rσt
√n .
By the definition of independent copy, we have
Eε,w′

 sup
f ∈Br( ̂f )
1
n
n
∑
i=1
〈
εiw′
i, ̂f (xi) − f (xi)
〉

+
√2rσt
√n = Eε,w

 sup
f ∈Br( ̂f )
1
n
n
∑
i=1
〈
εiwi, ̂f (xi) − f (xi)
〉

+
√2rσt
√n
Again, by applying Lemma A.7, we have that with probability at least 1 − e−t2,
Eε,w

 sup
f ∈Br( ̂f )
1
n
n
∑
i=1
〈
εiwi, ̂f (xi) − f (xi)
〉

 ≤ sup
f ∈Br( ̂f )
1
n
n
∑
i=1
〈
εiwi, ̂f (xi) − f (xi)
〉
+
√2rσt
√n .
29

Thus, we have that with probability at least 1 − 2e−t2, for any r > 0,
Uε
n(r) ≤ 1
2

 sup
f ∈Br( ̂f )
{1
n
n
∑
i=1
〈
εiwi, f (xi) − ̂f (xi)
〉
}
+ sup
f ∈Br( ̂f )
{1
n
n
∑
i=1
〈
εiwi, ̂f (xi) − f (xi)
〉
}

+
√2σrt
√n .
By the doubly wild refitting procedure, we have
εig ̃i = εi∇1l( ̂f (xi), yi) = εi
(
∇1l( ̂f (xi), yi) − ∇1l(f ∗(xi), yi)
)
+ εi∇1l(f ∗(xi), yi).
This is equivalent to
εiwi = εig ̃i + εi
(
∇1l(f ∗(xi), yi) − ∇1l( ̂f (xi), yi)
)
.
Plugging this in, we have
sup
f ∈Br( ̂f )
{1
n
n
∑
i=1
〈
εiwi, f (xi) − ̂f (xi)
〉
}
+ sup
f ∈Br( ̂f )
{1
n
n
∑
i=1
〈
εiwi, ̂f (xi) − f (xi)
〉
}
≤ sup
f ∈Br( ̂f )
{1
n
n
∑
i=1
〈
εig ̃i, f (xi) − ̂f (xi)
〉
}
+ sup
f ∈Br( ̂f )
{1
n
n
∑
i=1
〈
εig ̃i, ̂f (xi) − f (xi)
〉
}
+ sup
f ∈Br( ̂f )
{1
n
n
∑
i=1
〈
εi
(
∇1l(f ∗(xi), yi) − ∇1l( ̂f (xi), yi)
)
, f (xi) − ̂f (xi)
〉
}
+ sup
f ∈Br( ̂f )
{1
n
n
∑
i=1
〈
εi
(
∇1l(f ∗(xi), yi) − ∇1l( ̂f (xi), yi)
)
,
̂f (xi) − f (xi)
〉
}
This holds for all radius r. Finally, by the condition that ∥fρ⋄1 − ̂f ∥n = ∥fρ♯2 − ̂f ∥n = 2r, we apply
Lemma 5.1, and change r ← 2r, to get:
sup
f ∈B2r ( ̂f )
{1
n
n
∑
i=1
〈
εig ̃i, f (xi) − ̂f (xi)
〉
}
= Wn(∥f ⋄
ρ1 − ̂f ∥n) ≤ Opt⋄(f ⋄
ρ1 ),
sup
f ∈B2r ( ̂f )
{1
n
n
∑
i=1
〈
εig ̃i, ̂f (xi) − f (xi)
〉
}
= Tn(∥f ♯
ρ2 − ̂f ∥n) ≤ Opt♯(f ♯
ρ2 ),
sup
f ∈B2r ( ̂f )
{1
n
n
∑
i=1
〈
εi
(
∇1l(f ∗(xi), yi) − ∇1l( ̂f (xi), yi)
)
, f (xi) − ̂f (xi)
〉
}
= B⋄
n( ̂f ),
and
sup
f ∈B2r ( ̂f )
{1
n
n
∑
i=1
〈
εi
(
∇1l(f ∗(xi), yi) − ∇1l( ̂f (xi), yi)
)
,
̂f (xi) − f (xi)
〉
}
= B♯
n( ̂f ).
Adding them together, we prove that when r ≥ ̂rn, and the noise scales ρ1, ρ2 satisfy ∥fρ⋄1 − ̂f ∥n =
30

∥fρ♯2 − ̂f ∥n = 2r, with probability at least 1 − 2e−t2,
Uε
n(2r) ≤ 1
2
(
Wn(2r) + Tn(2r) + B⋄
n( ̂f ) + B♯
n( ̂f )
)
+ 2√2σrt
√n (E.1)
≤1
2
(
Opt⋄(f ⋄
ρ1 ) + Opt♯(f ♯
ρ2 ) + B⋄
n( ̂f ) + B♯
n( ̂f )
)
+ 2√2σrt
√n ,
where Opt⋄(fρ⋄1 ), Opt♯(fρ♯2 ) are wild optimisms and Bn⋄( ̂f ), B♯n( ̂f ) are pilot error terms. Thus, we
finish the proof.
Proof of Lemma D.6. Recall that our oracle predictor is f † ∈ argminf∈F
{1
n
∑n
i=1 Eyi [l(f (xi), yi)]
}
.
Then, we compute the Gˆateaux derivative and apply the first order optimality condition to get that
1
n
n
∑
i=1
〈
Eyi [∇1l(f †(xi), yi)], f (xi) − f †(xi)
〉
= 0.
By Assumption 3.1, and the well-specified condition f † = f ∗, we have that
∥
̂f − f †∥2
n ≤2
α
1
n
n
∑
i=1
Dl(·,yi)( ̂f (xi), f †(xi))
=2
αn
n
∑
i=1
l( ̂f (xi), yi) − l(f †(xi), yi) −
〈
∇1l(f †(xi), yi), ̂f (xi) − f †(xi)
〉
≤2
αn
n
∑
i=1
〈
−∇1l(f †(xi), yi), ̂f (xi) − f †(xi)
〉
=2
αn
n
∑
i=1
〈
−wi, ̂f (xi) − f †(xi)
〉
.
In the last inequality, we use the property that ERM ̂f minimizes the empirical risk. In the last
equality, we apply the well-specification condition that f † = f ∗.
Now we analyze this term. Define the empirical process M (w) := supf∈B
r ̂ n (f †)
〈
−wi, ̂f (xi) − f †(xi)
〉
.
Then, we apply the Lemma A.7 to get that for any t > 0, with probability at least 1 − e−t2,
M (w) ≤ Ew1:n|e1:n [M (w)] +
√2σ ̂rn t
√n .
Similar to the proof of Lemma D.2, we have that
Ew1:n|e1:n [M (w)] ≤ 2Ew1:n,w ̃1:n|e1:n [Zε
n(r)].
31

By Lemma D.3 and Lemma D.4, we have that with probability at least 1 − 2e−t2,
Ew1:n,w ̃1:n|e1:n [Z ε
n(r)] ≤ U ε
n(2̂rn) +
√2σ(5√d + 3√log n + 1)̂rnt
√n .
Combining these two parts together, we have that
M (w) ≤ 2U ε
n(2̂rn) + 2√2σ(5√d + 3√log n + 2)̂rnt
√n ,
which implies
̂r2
n≤ 2
α
(
2U ε
n(2̂rn) + 2√2σ(5√d + 3√log n + 2)̂rnt
√n
)
.
This is a quadratic inequality. Solving the inequality, we have that
̂r2
n ≤8
αUε
n(2̂rn) + 32σ2(5√d + 3√log n + 2)2t2
α2n .
So we finish the proof.
Proof of Lemma D.7. The proof of this lemma is the same as proving Lemma D.5. By inequality
E.1, we have that
Uε
n(2r) ≤ 1
2
(
Wn(2r) + Tn(2r) + B⋄
n( ̂f ) + B♯
n( ̂f )
)
+ 2√2σrt
√n .
This is exactly our claim.
F Computation
In this section, we provide an efficient method for computing yi⋄ and y♯
i in our doubly wild refitting
Algorithm 1. The method is called the proximal point algorithm (PPA).
In general, the proximal point algorithm (PPA) aims to solve the monotone inclusion problem
0 ∈ T (x) for maximal monotone operator T . By the result of Minty (1962), the Moreau–Yosida
resolvent Pλ = (I + λT )−1 will be firmly non-expansive. This suggests that the inclusion problem
0 ∈ T (x) can be iteratively approximated via the following recursion zk+1 ≈ Pck (zk), where ck
is the step size or learning rate. We write ”≈” because computing ”zk+1 = Pck (zk)” can be
computationally intractable. The following theorem of Rockafellar (1976) provides the convergence
guarantees for this inexact proximal point algorithm.
Theorem F.1. Define the operator Sk(z) = Tk(z) + 1
ck (z − zk). Assuming that computationally,
32

we have the following approximation procedure zk+1 ≈ Pk(zk) = (I + ckT )−1(zk) that satisfies
dist(0, Sk(zk+1) = ∥Sk(zk+1)∥2 ≤ δk
ck
∥zk+1 − zk∥2,
for some convergent series ∑∞
i=1 δk < ∞, then, we have that
∥zk+1 − Pck (zk)∥2 ≤ δk∥zk+1 − zk∥2.
The limit point z∞ = limk→∞ zk satisfies that T (z∞) = 0. Moreover, if T −1 is Lipschitz continuous
with constant a in a neighborhood around 0 with a radius τ > 0. Then, for {ck}∞
k=1 nondecreasing,
define μk = a
√a2 +c2
k
< 1. There ∃ k ̄ such that for all k > k ̄ ,
∥zk+1 − z∞∥2 ≤ μk + δk
1 − δk
∥zk − z∞∥2, μk + δk
1 − δk
< 1, ∀k ≥ k ̄ .
Therefore, it suffices to focus on computing the iterative update zk+1 ≈ Pk(zk). A variety of
numerical methods have been developed for evaluating such proximal-type operators, including
Douglas–Rachford splitting (Eckstein and Bertsekas, 1992), Peaceman–Rachford splitting (Lions
and Mercier, 1979), and the Alternating Direction Method of Multipliers (ADMM) (Bot ̧ and Cset
nek, 2019) concerning monotone operators. We do not elaborate on these algorithms here; instead,
we refer the reader to the cited works for detailed discussions.
33

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:43.563Z
- **Text Length:** 62846 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 33 of 33
