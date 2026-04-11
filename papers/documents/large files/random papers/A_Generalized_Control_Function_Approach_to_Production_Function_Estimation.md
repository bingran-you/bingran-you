# PDF Document: Doraszelski and Li - 2025 - A Generalized Control Function Approach to Production Function Estimation.pdf

**File Path:** Doraszelski and Li - 2025 - A Generalized Control Function Approach to Production Function Estimation.pdf

**Processed Date:** 2026-02-10T18:15:48.925Z

**File Size:** 346.26 KB

**Total Pages:** 17

**Extracted Pages:** 17

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3135

**Title:** A Generalized Control Function Approach to Production Function Estimation

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

A Generalized Control Function Approach to Production
Function Estimation
Ulrich Doraszelski
University of Pennsylvania∗
Lixiong Li
Johns Hopkins University†
November 27, 2025
Abstract
We generalize the control function approach to production function estimation. Our gener
alization accommodates scenarios in which productivity evolves jointly with other unobservable
factors such as latent demand shocks and the invertibility assumption underpinning the tradi
tional proxy variable approach fails. We provide conditions under which the output elasticity of
the variable input—and hence the markup—is nonparametrically point-identified. A Neyman
orthogonal moment condition ensures oracle efficiency of our GMM estimator. A Monte Carlo
exercise shows a large bias for the traditional proxy variable approach that decreases rapidly
and nearly vanishes for our generalized control function approach.
∗Wharton School, Email: doraszelski@wharton.upenn.edu
†Department of Economics, Email: lixiong.li@jhu.edu
arXiv:2511.21578v1 [econ.EM] 26 Nov 2025

The proxy variable approach to production function estimation following G. Steven Olley &
Ariel Pakes (1996) (henceforth, OP) rests on two key assumptions. First, the invertibility assumption
requires that there exists a function ωit = κ(xit) that maps observables xit into the productivity ωit
of firm i in period t. It is well understood that invertibility can fail because of unobserved demand
heterogeneity or in imperfectly competitive environments with partially or fully unobserved rivals
or changes in firm conduct (see Ulrich Doraszelski & Lixiong Li (2025) and the references therein).
In this paper, we denote these unobservable factors collectively as δit. Besides latent demand
shocks, δit may capture unobserved variation in investment opportunities or financial constraints
across firms or time.
Second, the proxy variable approach rests on the assumption that productivity is governed by
a Markov process with law of motion ωit = g(ωit−1) + ξit, where g(ωit−1) = E [ωit|ωit−1] and
the productivity innovation ξit is outside the firm’s information set in period t − 1. Replacing the
autonomous Markov process with a controlled Markov process is straightforward as long as the
control is observed (see Jan De Loecker (2013) for learning-by-exporting and Ulrich Doraszelski
& Jordi Jaumandreu (2013) for R&D).
In this paper, we allow productivity ωit and any other unobservables δit to evolve jointly and
generalize the law of motion for productivity from ωit = g(ωit−1) + ξit to ωit = g(ωit−1, δit−1) +
ξit. This accommodates scenarios in which productivity and demand are linked through product
innovations, foreign market access, or the firm’s R&D and advertising decisions. For example, a
firm may move downmarket with products that are cheaper to produce but appeal to a broader set
of consumers or it may move upmarket with products that are more costly to produce but appeal to
more quality-conscious consumers.
One approach to dealing with additional unobservables is to extend the univariate inversion in
OP to a multivariate inversion. Ensuring the existence of a function (ωit, δit) = κ(xit) that recovers
all unobservables, however, requires making specific assumptions on the firm’s profit maximization
problem (see Ulrich Doraszelski & Jordi Jaumandreu (2018) for labor-augmenting productivity and
Paul L. E. Grieco, Shengyu Li & Hongsong Zhang (2016) for unobserved intermediate input prices).
1

In this paper, we pursue another approach that does not require a multivariate inversion. We focus
on estimating the production function f (kit, vit), where kit and vit are inputs, and make no attempt
to identify or estimate the law of motion for productivity. We provide conditions under which
the output elasticity of the variable input vit—and hence the markup following Jan De Loecker &
Frederic Warzynski (2012)—is nonparametrically point-identified and can be estimated by solving
a straightforward GMM problem.
We start by showing that the proxy variable approach to production function estimation following
OP can be seen as controlling for “enough” of the variation in productivity to facilitate finding
instruments relative to a direct instrumental variables approach. We then generalize this control
function approach by adding variables to the control function. We show that this allows handling
empirically relevant settings that are outside the scope of the proxy variable approach. By adding
variables to the control function, our approach entails a tradeoff between increasing robustness on
the one hand and decreasing efficiency and identification power on the other hand.
1 Setup
Our setup follows Doraszelski & Li (2025) (henceforth, DL), except that we generalize the law of
motion for productivity to ωit = E [ωit|ωit−1, δit−1] + ξit = g(ωit−1, δit−1) + ξit. For concreteness
we think of δit as latent demand shocks. Firm i in period t uses inputs kit and vit to produce output
qit according to the production function qit = f (kit, vit) + ωit + εit, where lower case letters denote
logs. Capital kit is a predetermined input that is chosen in period t − 1 whereas vit is freely variable
and decided on in period t after the firm observes ωit and δit. The disturbance εit sits between the
firm’s output qit as recorded in the data and the output q∗
it = qit − εit = f (kit, vit) + ωit that the
firm planned on when it decided on the variable input vit. It can be interpreted alternatively as
measurement error or as the untransmitted component of productivity.
We assume E [εit|xit] = 0 for observables xit = (kit, vit, . . .) and E [ξit + εit|zit] = 0 for in
struments zit = (kit, kit−1, vit−1, . . .). The invertibility assumption in OP ensures E[ωit−1|xit−1] =
2

ωit−1 or, equivalently, E[qit−1|xit−1] = f (kit−1, vit−1) + ωit−1 = q∗
it−1. The timing and Markov pro
cess assumptions in OP further ensure E[ξit+εit|zit, ωit−1] = 0 and thus E [ξit + εit|zit, E[qit−1|xit−1]] =
0. This, in turn, ensures that E[qit−1|xit−1] can be used as an additional instrument. We refer the
reader to DL, OP, James Levinsohn & Amil Petrin (2003) (henceforth, LP), and Daniel A. Acker
berg, Kevin Caves & Garth Frazer (2015) (henceforth, ACF) for a justification of these assumptions
and further details on the setup.
Notation. We write zit \ z†
it for the elements of the vector zit that are not contained in the vector
z†
it. To avoid clutter, all equalities involving random variables and conditional expectations are
understood to hold almost surely. Proofs are deferred to the Supplemental Appendix.
2 Results
The proxy variable approach to production function estimation following OP can be seen as a
control function approach. In particular, the control function h (kit−1, vit−1, E [qit−1|xit−1]) =
g (E [qit−1|xit−1] − f (kit−1, vit−1)) ensures that the moment condition
E [ ωit + εit − h (kit−1, vit−1, E[qit−1|xit−1])| zit, E[qit−1|xit−1]] = 0, (1)
where ωit + εit = qit − f (kit, vit), holds at the true production function.
Moment condition (1) follows because the law of motion for productivity is ωit = g(ωit−1)+ξit in
the OP/LP/ACF framework and the invertibility assumption ensures E[qit−1|xit−1] = f (kit−1, vit−1)+
ωit−1. Hence, we have
E [ωit + εit − g(E[qit−1|xit−1] − f (kit−1, vit−1))|zit, E[qit−1|xit−1]]
= E [ωit + εit − g(ωit−1)|zit, E[qit−1|xit−1]] = E [ξit + εit|zit, E[qit−1|xit−1]] = 0.
Following DL, moment condition (1) can alternatively be derived without invertibility if we
choose xit−1 = zit. Without invertibility, however, the control function h (kit−1, vit−1, E [qit−1|xit−1])
generally no longer equals the law of motion g (E [qit−1|xit−1] − f (kit−1, vit−1)).
3

As our notation for the control function h (kit−1, vit−1, E [qit−1|xit−1]) emphasizes, moment
condition (1) requires that given (kit−1, vit−1, E[qit−1|xit−1]) all other variables in zit are uncor
related with the sum of the transmitted and untransmitted components of productivity ωit + εit.
Moment condition (1) is less demanding than requiring that E [ωit + εit|zit] = 0 for instruments
zit in a direct instrumental variables approach to production function estimation. It is widely
understood that finding instruments in the latter approach is difficult, or perhaps even impossible,
in practice (Zvi Griliches & Jacques Mairesse 1998). A key insight of OP is that all that remains
of current productivity ωit after controlling for lagged productivity ωit−1 via the control function
h (kit−1, vit−1, E[qit−1|xit−1]) is the productivity innovation ξit. Because ξit is an independent shock,
this facilitates finding instruments.
Moment condition (1) rules out some empirically relevant cases, including the joint evo
lution of productivity ωit and latent demand shocks δit.1 To accommodate these cases and
ωit = g(ωit−1, δit−1) + ξit as the law of motion for productivity, we generalize the control function
approach in OP. To this end, we choose the special instrument z†
it ⊆ zit and replace moment
condition (1) with the following assumption:
Assumption 1. E
h
ωit + εit − h zit \ z†
it, E[qit−1|xit−1] zit, E[qit−1|xit−1]
i
= 0 for the control
function h zit \ z†
it, E[qit−1|xit−1] = E
h
ωit + εit|zit \ z†
it, E[qit−1|xit−1]
i
.
The special instrument z†
it can encompass one or several components of the instruments zit. As
sumption 1 requires that given zit \ z†
it, E[qit−1|xit−1] , all other variables in zit are uncorrelated
with the sum of the transmitted and untransmitted components of productivity ωit + εit. The restric
tiveness of Assumption 1 depends on the choice of z†
it. If we choose z†
it = zit \ (kit−1, vit−1), then
Assumption 1 coincides with moment condition (1). If we instead choose z†
it ⊊ zit \ (kit−1, vit−1),
then Assumption 1 is less demanding: as z†
it contains fewer variables, the conditioning set zit \ z†
it
contains more variables and thus controls for more of the variation in productivity.
As discussed above, Assumption 1 is satisfied in the OP/LP/ACF framework. More importantly,
1DL show that invertibility can fail in the presence of latent demand shocks. This, in turn, invalidates current capital kit as an instrument even if productivity ωit evolves as an AR(1) process separately from latent demand shocks δit. DL show how to proceed without invertibility under the maintained assumption that ωit evolves separately from δit.
4

it enables going beyond this framework by not relying on invertibility and by shifting the focus
from the law of motion for productivity to specifying a model for the special instrument z†
it. As the
researcher chooses the special instrument, one can leverage institutional features or auxiliary data
to justify Assumption 1. Example 1 illustrates this point.
Example 1 (Independent input price shocks). Assume that the price of the variable input pV
it
evolves according to pV
it = κ(pV
it−1, ηit, τi) for some function κ, where ηit is a firm- and time
specific input price shock and τi is a firm-specific shifter such as the type of inputs the firm uses.
The shifter τi may be correlated with δit−1 in the law of motion for productivity. This accommodates
scenarios in which the type of inputs links productivity and demand.
Assume that ηit is an independent shock and therefore in particular independent of (ξit, εit, εit−1)
and of any variables known or chosen by firm in period t − 1. Because ωit = g(ωit−1, δit−1) + ξit,
it follows that
(ωit + εit, ωit−1 + εit−1) ⊥⊥ ηit | kit, kit−1, vit−1, pV
it′ t′<t .
Assume further that the shifter τi can be identified from pV
it′ t′<t.2 It follows that
(ωit + εit, ωit−1 + εit−1) ⊥⊥ pV
it kit, kit−1, vit−1, pV
it′ t′<t .
Choosing zit = kit, kit−1, vit−1, pV
it , pV
it′ t′<t , xit−1 = zit, and z†
it = pV
it , we have
(ωit + εit, ωit−1 + εit−1) ⊥⊥ z†
it zit\z†
it. (2)
Because ωit−1 + εit−1 ⊥⊥ z†
it|zit\z†
it, we know that qit−1 ⊥⊥ z†
it | zit\z†
it and thus that E[qit−1|xit−1]
depends only on zit \ z†
it. Equation (2) therefore implies
ωit + εit ⊥⊥ z†
it zit \ z†
it, E[qit−1|xit−1]
and Assumption 1 holds. Furthermore, because E[qit−1|xit−1] depends only on zit \ z†
it, the control
function simplifies from h(zit \ z†
it, E[qit−1|xit−1]) to h(zit \ z†
it). ■
2Alternatively, assume that we have other information that pins down τi. For example, τi may be the location of the firm if there are regional differences in input markets or it may be the countries from which the firm imports inputs.
5

Assumption 1 ensures that the moment condition
E
h
qit − f (kit, vit) − h zit \ z†
it, E[qit−1|xit−1] zit, E[qit−1|xit−1]
i
= 0 (3)
holds at the true production function.
We are interested in the output elasticity ∂f(kit,vit)
∂vit of the variable input vit as the key to estimating
the markup. The choice of the special instrument z†
it entails a tradeoff. As noted above, as z†
it
contains fewer variables, the conditioning set zit \ z†
it contains more variables and thus controls for
more of the variation in productivity. This leaves less exogenous variation in z†
it for identifying
∂f (kit,vit)
∂vit . To ensure that z†
it has sufficient identification power, we make the following assumption:
Assumption 2. Let kit ∈ zit \ z†
it. Conditional on zit \ z†
it, E[qit−1|xit−1] , z†
it is a complete
instrument for vit.
Assumption 2 places restrictions on the underlying economic model. In particular, it rules
out the case where the law of motion for productivity is ωit = g(ωit−1) + ξit and the variable
input demand vit = κ(kit, ωit) is some function κ that depends only on capital and productivity
and can be inverted for productivity.3 In this case, for any choice of the special instrument
z†
it ⊆ zit \ (kit, kit−1, vit−1), z†
it is independent of ωit conditional on zit \ z†
it, E[qit−1|xit−1]
because ωit−1 is pinned down by zit \ z†
it, E[qit−1|xit−1] and the productivity innovation ξit is
an independent shock. Consequently, z†
it cannot generate any variation in vit = κ(kit, ωit) after
controlling for zit \ z†
it, E[qit−1|xit−1] . Note that this lack-of-variation argument breaks down if
latent demand shocks δit enter the law of motion for productivity or the variable input demand.
Hence, latent demand shocks δit make room for Assumption 2 to hold.
Our main identification result is the following:
Theorem 1. Under Assumptions 1 and 2, moment condition (3) nonparametrically point-identifies
∂f (kit,vit)
∂vit .
Turning from identification to estimation, for any weighting function φ(zit) of the instruments
3Assumption 2 therefore also rules out the nonidentification result in Amit Gandhi, Salvador Navarro & David A. Rivers (2020).
6

zit, moment condition (3) implies that the moment condition
E
h
φ(zit) qit − f (kit, vit) − h zit \ z†
it, E[qit−1|xit−1]
i
= 0 (4)
holds at the true production function. GMM estimation based on moment condition (4) can be
conducted by viewing the control function h zit \ z†
it, E[qit−1|xit−1] as a nuisance parameter and
estimating it alongside the production function, as in the OP/LP/ACF framework.4 However, the
dimension of the control function may be high, especially if zit\z†
it comprises many variables.
This increases the asymptotic variance of the estimates and can create numerical challenges for
minimizing the GMM objective function.
Our main estimation result shows that these drawbacks can be avoided:
Theorem 2. For any weighting function φ(zit) of the instruments zit, moment condition (3)
implies that the moment condition
E
h
(φ(zit) − φ ̃it) qit − f (kit, vit) − q ̃it − f ̃it
i
= 0, (5)
where
φ ̃it = E
h
φ(zit) zit \ z†
it, E[qit−1|xit−1]
i
, q ̃it − f ̃it = E
h
qit − f (kit, vit) zit \ z†
it, E[qit−1|xit−1]
i
,
holds at the true production function. Moreover, if a production function satisfies moment condition
(5), then it satisfies moment condition (4) for the control function h zit \ z†
it, E[qit−1|xit−1] =
q ̃it − f ̃it. Finally, if φ(zit) and qit − f (kit, vit) have finite L2 norms, then moment condition (5) is
Neyman orthogonal with respect to L2-integrable perturbations of φ ̃it, q ̃it − f ̃it .
Applying results from the double-debiased machine learning literature (Victor Chernozhukov,
Denis Chetverikov, Mert Demirer, Esther Duflo, Christian Hansen, Whitney Newey & James
Robins 2018), Neyman orthogonality ensures that the GMM estimator based on moment condition
(5) is oracle efficient as long as the estimators for φ ̃it, q ̃it, and f ̃it converge sufficiently fast. This
4The law of motion for productivity cannot generally be recovered from estimates of the production and control functions.
7

means that the asymptotic distribution of the GMM estimator is as if the true values of φ ̃it and
q ̃it − f ̃it are known.
A complication arises because estimating φ ̃it and q ̃it − f ̃it requires itself a plugin estimator
for E[qit−1|xit−1]. To the best of our knowledge, the literature has not yet developed a treatment
for such “double plugin” estimators. In what follows, we therefore focus on the case where the
control function simplifies from h zit \ z†
it, E[qit−1|xit−1] to h zit \ z†
it as in Example 1. Thus,
the plugin estimator for E[qit−1|xit−1] is no longer required, and φ ̃it = E
h
φ(zit)| zit \ z†
it
i
and
q ̃it − f ̃it = E
h
qit − f (kit, vit)| zit \ z†
it
i
.
While our generalized control function approach accommodates the joint evolution of produc
tivity ωit and latent demand shocks δit, it is not costless. If moment condition (1) holds, then for
any choice of the special instrument z†
it ⊊ zit \ (kit−1, vit−1) it is less efficient than the OP/LP/ACF
procedure. This reflects a general tradeoff between robustness and efficiency in nonparametric
estimation. Our generalized control function approach makes this tradeoff explicit by allowing a
researcher to target greater robustness (smaller z†
it) or greater efficiency (larger z†
it).
3 Monte Carlo Exercise
Data generating process. Similar to DL, we specify the CES production function
f (kit, vit) = ν
ρ ln (α exp(ρkit) + (1 − α) exp(ρvit))
with α = 0.3, ρ = −1, and ν = 0.95, the disturbance εit ∼ N (0, 0.52), and the CES demand
q∗
it = δ1it − (1 + exp(−δ2it))pit, where pit is the output price and δit = (δ1it, δ2it) captures shocks
to the demand the firm faces and unobserved rivals.
Different from DL, the price of capital pK
it , the price of the variable input pV
it , and the latent
demand shocks δ1it and δ2it follow Gaussian AR(1) processes. We parameterize these processes
so that E[pK
it ] = E[pV
it ] = 0, E[δ1it] = 10, E[δ2it] = −1.3543, Var(pK
it ) = Var(pV
it ) = Var(δ2it) =
0.52, Var(δ1it) = 52, and the autocorrelation is 0.7. Short-run profit maximization implies the
8

markup μit = Pit
MCit = 1 + exp(δ2i), where M Cit is marginal cost, and thus E [ln μit] = 0.25 and
Var (ln μit) = 0.0126.
We specify the law of motion for productivity
g(ωit−1, δit−1) = μω + ρωωit−1 + ρδ1 δ1it−1 + ρδ2 δ2it−1
and the productivity innovation ξit ∼ N (0, σ2
ω). We parameterize μω, ρω, ρδ1, ρδ2, and σ2
ω so that
E[ωit] = 0, Var(ωit) = 0.52, corr(ωit, ωit−1) = 0.7, corr(ωit, δ1it) = 0.3, and corr(ωit, δ2it) = −0.3.
This aligns with the notion that more productive firms participate in larger and more competitive
markets.
We simulate S = 1, 000 datasets with N = 5, 000 firms and T = 20 periods. We refer the
reader to DL for further details on the data generating process.
Estimation. We use GMM estimation based on moment condition (5) to estimate the production
function parameters θ = (α, ρ, ν). Our instruments are zit = kit, kit−1, vit−1, pit−1, pV
it , pV
it−1
and our special instrument is z†
it = pV
it as in Example 1. Our weighting function φ(zit) is the
complete set of Hermite polynomials of total degree 4 in the variables in zit. We estimate
φ ̃it = E
h
φ(zit)|zit \ z†
it
i
by OLS using the complete set of Hermite polynomials of total degree d
in the variables in zit \ z†
it. We proceed similarly to estimate q ̃it − f ̃it = E
h
qit − f (kit, vit)|zit \ z†
it
i
.
The latter must be re-estimated at each iteration of the GMM problem. Even though the control
function h zit \ z†
it = E
h
ωit + εit|zit \ z†
it
i
is absent from moment condition (5), the total degree
d implicitly determines how well we can approximate it. We accordingly explore d ∈ {2, 3, 4, 5}.
We provide further details on the GMM estimator in the Supplemental Appendix.
With an estimate of θ in hand, we estimate the markup μit of firm i in period t as
ln μit + εit = pit + qit − pV
it − vit + ln ∂f (kit, vit)
∂vit
.
The right-hand side is the log of the output elasticity minus the log of the expenditure share of the
variable input. Noting that the disturbance εit averages out as E[εit] = 0, we refer to the average of
9

d=2, bias=0.0507, MSE=0.0032
0.1 0.15 0.2 0.25 0.3 0.35 0.4 avg. ln +
0
50
100
150
200 estimated true
d=3, bias=0.0087, MSE=0.0007
0.1 0.15 0.2 0.25 0.3 0.35 0.4 avg. ln +
0
50
100
150
200 estimated true
d=4, bias=-0.0006, MSE=0.0007
0.1 0.15 0.2 0.25 0.3 0.35 0.4 avg. ln +
0
50
100
150
200 estimated true
d=5, bias=-0.0007, MSE=0.0007
0.1 0.15 0.2 0.25 0.3 0.35 0.4 avg. ln +
0
50
100
150
200 estimated true
Figure 1: Distribution of average log markup for Hermite polynomials of total degree d ∈ {2, 3, 4, 5}.
ln μit + εit across firms and time simply as the average log markup.
Results. As a baseline, we implement the modified OP/LP/ACF procedure described in DL by
choosing xit−1 = zit and explicitly including the first-order bias correction. We use a univariate
Hermite polynomial of order 4 to approximate the law of motion for productivity. The bias in the
average log markup is 0.1277 (compared to its true value of 0.25) and the mean squared error is
0.0164. The large bias is not surprising given that the joint evolution of productivity ωit and latent
demand shocks δit is outside the scope of the OP/LP/ACF procedure.
Turning to the generalized control function approach in this paper, Figure 1 shows the distribu
tion of the average log markup. As can be seen, the results rapidly improve with the total degree d
of the complete set of Hermite polynomials in the variables in zit \ z†
it. The bias decreases from
0.0507 for d = 2 to −0.0006 for d = 4 and the mean squared error from to 0.0032 to 0.0007. There
10

are no further improvements going from d = 4 to d = 5.
4 Concluding Remarks
We provide conditions for consistently estimating the production function in empirically relevant
settings that are outside the scope of the OP/LP/ACF procedure. As such, our approach comple
ments the OP/LP/ACF framework. Our approach generalizes the control function that is already
present in OP and requires solving a straightforward GMM problem. We hope that it proves
valuable for applied researchers seeking to estimate the production function and the markup from
it.
References
Ackerberg, Daniel A., Kevin Caves, and Garth Frazer. 2015. “Identification properties of recent
production function estimators.” Econometrica, 83(6): 2411–2451.
Chernozhukov, Victor, Denis Chetverikov, Mert Demirer, Esther Duflo, Christian Hansen,
Whitney Newey, and James Robins. 2018. “Double/debiased machine learning for treatment
and structural parameters.” Journal of Econometrics, 21(1): C1–C68.
De Loecker, Jan. 2013. “Detecting learning by exporting.” American Economic Journal: Microe
conomics, 5(3): 1–21.
De Loecker, Jan, and Frederic Warzynski. 2012. “Markups and firm-level export status.” Amer
ican Economic Review, 102(6): 2437–2471.
Doraszelski, Ulrich, and Jordi Jaumandreu. 2013. “R&D and productivity: Estimating endoge
nous productivity.” Review of Economic Studies, 80(4): 1338–1383.
Doraszelski, Ulrich, and Jordi Jaumandreu. 2018. “Measuring the bias of technological change.”
Journal of Political Economy, 126(3): 1027–1084.
11

Doraszelski, Ulrich, and Lixiong Li. 2025. “Production function estimation without invertibil
ity: Imperfectly competitive environments and demand shocks.” University of Pennsylvania
Working Paper, Philadelphia.
Gandhi, Amit, Salvador Navarro, and David A. Rivers. 2020. “On the identification of gross
output production functions.” Journal of Political Economy, 128(8): 2973–3016.
Grieco, Paul L. E., Shengyu Li, and Hongsong Zhang. 2016. “Production function estimation
with unobserved input price dispersion.” International Economic Review, 57(2): 665–690.
Griliches, Zvi, and Jacques Mairesse. 1998. “Production functions: The search for identification.”
In Econometrics and Economic Theory in the 20th Century: The Ragnar Frisch Centennial
Symposium. , ed. Steinar Strom. Cambridge:Cambridge University Press.
Levinsohn, James, and Amil Petrin. 2003. “Estimating production functions using inputs to
control for unobservables.” Review of Economic Studies, 70(2): 317–341.
Olley, G. Steven, and Ariel Pakes. 1996. “The dynamics of productivity in the telecommunications
industry.” Econometrica, 64(6): 1263–1297.
12

Supplemental Appendix: A Generalized Control
Function Approach to Production Function Estimation
Ulrich Doraszelski
University of Pennsylvania
Lixiong Li
Johns Hopkins University
November 27, 2025
Proof of Theorem 1. Let f 0(kit, vit) denote the true production function. Because qit −
f 0(kit, vit) = ωit + εit, Assumption 1 implies that f 0(kit, vit) satisfies moment condition (3) for the
control function h0 zit \ z†
it, E[qit−1|xit−1] = E
h
qit − f 0(kit, vit)| zit \ z†
it, E[qit−1|xit−1]
i
. Let
f ̃(kit, vit) be some production function that also satisfies moment condition (3) for some control
function  ̃h zit \ z†
it, E[qit−1|xit−1] . To show that ∂f(kit,vit)
∂vit is nonparametrically point-identified,
we show that, for any kit, the difference f 0(kit, vit) − f ̃(kit, vit) does not change with vit almost
surely.
Because both (f 0, h0) and (f ̃,  ̃h) satisfy moment condition (3), taking the difference yields
E
h
f 0(kit, vit) − f ̃(kit, vit) zit, E[qit−1|xit−1]
i
=E
h  ̃h zit \ z†
it, E[qit−1|xit−1] − h0 zit \ z†
it, E[qit−1|xit−1] zit, E[qit−1|xit−1]
i
=  ̃h zit \ z†
it, E[qit−1|xit−1] − h0 zit \ z†
it, E[qit−1|xit−1] .
∗Wharton School, Email: doraszelski@wharton.upenn.edu
†Department of Economics, Email: lixiong.li@jhu.edu
i

This implies the exclusion restriction
E
h
f 0(kit, vit) − f ̃(kit, vit) zit, E[qit−1|xit−1]
i
=E
h
f 0(kit, vit) − f ̃(kit, vit) zit \ z†
it, E[qit−1|xit−1]
i
.
Assumption 2 ensures that, for any function κ, the exclusion restriction
E
h
κ vit, zit \ z†
it, E[qit−1|xit−1] zit, E[qit−1|xit−1]
i
=E
h
κ vit, zit \ z†
it, E[qit−1|xit−1] zit \ z†
it, E[qit−1|xit−1]
i
holds only if κ does not change with vit almost surely. Recalling that kit ∈ zit \ z†
it and setting
κ vit, zit \ z†
it, E[qit−1|xit−1] = f 0(kit, vit) − f ̃(kit, vit) therefore establishes the result.
Proof of Theorem 2. We divide the proof into three parts.
We first prove that moment condition (3) implies moment condition (5). Recalling the definitions
of φ ̃it and q ̃it − f ̃it in Theorem 2, moment condition (3) implies
E
h
qit − f (kit, vit) − q ̃it − f ̃it zit, E[qit−1|xit−1]
i
= 0. (6)
Because φ(zit) − φ ̃it is pinned down by (zit, E[qit−1|xit−1]), we have
E
h
(φ(zit) − φ ̃it) qit − f (kit, vit) − q ̃it − f ̃it
i
=E
h
(φ(zit) − φ ̃it) E
h
qit − f (kit, vit) − q ̃it − f ̃it zit, E[qit−1|xit−1]
ii
= 0,
where the first equality is due to the law of iterated expectations and the second equality to equation
(6).
Next, we prove that moment condition (5) implies moment condition (4) with h zit \ z†
it, E[qit−1|xit−1] =
ii

q ̃it − f ̃it. Note that
E
h
φ ̃it qit − f (kit, vit) − q ̃it − f ̃it
i
(7)
=E
h
φ ̃itE
h
qit − f (kit, vit) − q ̃it − f ̃it zit \ z†
it, E[qit−1|xit−1]
ii
= 0,
where the first equality is due to the law of iterated expectations and the second equality to q ̃it −f ̃it =
E[qit −f (kit, vit)|zit \z†
it, E[qit−1|xit−1]] = 0 by the definition of q ̃it −f ̃it. Adding moment condition
(5) and moment condition (7) implies moment condition (4) with h zit \ z†
it, E[qit−1|xit−1] =
q ̃it − f ̃it.
Finally, we prove that moment condition (5) is Neyman orthogonal. Define the shorthand z ̃it =
zit \ z†
it, E[qit−1|xit−1] . Define F to be the set of function tuples (η, ζ) such that E[η2(z ̃it)] < ∞
and E[ζ2(z ̃it)] < ∞. Because φ(zit) and qit − f (kit, vit) have finite L2 norms, for any (η, ζ) ∈ F
and for any λ = (λ1, λ2) ∈ R2, we have
E (φ(zit) − φ ̃it − λ1η(z ̃it)) qit − f (kit, vit) − q ̃it − f ̃it + λ2ζ(z ̃it) < ∞.
Moment condition (5) is therefore well-defined for any L2-integrable perturbation of φ ̃it, q ̃it − f ̃it .
Next, note that
∂E(φ(zit) − φ ̃it − λ1η(z ̃it))(qit − f (kit, vit) − (q ̃it − f ̃it + λ2ζ(z ̃it)))
∂λ λ=0
=

 
E
h
η(z ̃it) qit − f (kit, vit) − q ̃it − f ̃it
i
−E [(φ(zit) − φ ̃it)ζ(z ̃it)]


=

 
0
0


,
where the second equality is due to the law of iterated expectations and the definitions of φ ̃it and
q ̃it − f ̃it.
GMM estimator. Corresponding to moment condition (5), define the moment function
mit(θ) = qit − f (kit, vit; θ) − q ̃it − f ̃it(θ) , (8)
iii

where we make the parameterization of the production function explicit.
We solve the GMM problem
mθin
1
NT
X
i,t
(φ(zit) − φ ̃it) mit(θ)
!⊤
W1
NT
X
i,t
(φ(zit) − φ ̃it) mit(θ)
!
,
where the superscript ⊤ denotes the transpose. We use the weighting matrix
W= 1
NT − 1
X
i,t
(φ(zit) − φ ̃it) mit θ0 − μˆ ⊤ (φ(zit) − φ ̃it) mit θ0 − μˆ
!−1
,
where
μˆ = 1
NT
X
i,t
(φ(zit) − φ ̃it) mit θ0
and θ0 denotes the true parameters.
Recall that φ ̃it = E
h
φ(zit)|zit \ z†
it
i
. To the extent that terms in φ(zit) can be perfectly predicted
by the complete set of Hermite polynomials of total degree d in the variables in zit \z†
it, the matrix Φ
with rows φ(zit) − φ ̃it is rank deficient. In solving the GMM problem, we therefore use a selection
of columns from the matrix Φ that has full rank. To construct this selection, we start with an empty
matrix and keep adding columns from the matrix Φ as long as this increases the rank.
iv

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:48.925Z
- **Text Length:** 29795 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 17 of 17
