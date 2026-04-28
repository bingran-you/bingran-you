# PDF Document: Kim and Cetinkaya - 2025 - Nonuniform-Grid Markov Chain Approximation of Continuous Processes with Time-Linear Moments.pdf

**File Path:** Kim and Cetinkaya - 2025 - Nonuniform-Grid Markov Chain Approximation of Continuous Processes with Time-Linear Moments.pdf

**Processed Date:** 2026-02-10T18:14:04.228Z

**File Size:** 1568.30 KB

**Total Pages:** 14

**Extracted Pages:** 14

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3352

**Title:** Nonuniform-Grid Markov Chain Approximation of Continuous Processes with Time-Linear Moments

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Nonuniform-Grid Markov Chain Approximation of
Continuous Processes with Time-Linear Moments
Do Hyun Kima, Ahmet Cetinkayab
aShibaura Institute of Technology, am23105@shibaura-it.ac.jp, Tokyo, Japan bShibaura Institute of Technology, ahmet@shibaura-it.ac.jp, Tokyo, Japan
Abstract
We propose a method to approximate continuous-time, continuous-state stochastic processes by a discrete-time Markov chain defined on a nonuniform grid. Our method provides exact moment matching for processes whose first and second moments are linear functions of time. In particular, we show that, under certain conditions, the transition probabilities of a Markov chain can be chosen so that its first two moments match prescribed linear functions of time. These conditions depend on the grid points o-
f the Markov chain and the coefficients of the linear mean and variance functions. Our proof relies on two recurrence relations for the expectation and variance across time. This approach enables simulation-based numerical analysis of continuous processes while preserving their key characteristics. We illustrate its efficacy by approximating continuous processes describing heat diffusion and geometric Brownian motion (GBM). For heat diffusion, we show that the heat profile at a set of points can b-
e investigated by embedding those points inside the nonuniform grid of our Markov chain. For GBM, numerical simulations demonstrate that our approach, combined with suitable nonuniform grids, yields accurate approximations, with consistently small empirical Wasserstein-1 distances at long time horizons.
Keywords: Markov Chains, Approximation, Finite Difference Method, Stochastic Diffusion Process, Geometric Brownian motion, Numerical Simulation.
1. Introduction
Many real-world systems are described by continuous-time stochastic processes and stochastic differential equations. Prototypical examples include Brownian motion, the Ornstein–Uhlenbeck process, and Lévy processes, each with applications across physics, finance, and engineering. In computational physics, the fundamental solution of the heat equation coincides with the probability density function of Brownian motion, motivating particle simulations where particles follow Brownian paths to approxim-
ate heat diffusion. In finance, geometric Brownian motion is a standard model for asset prices in the Black–Scholes framework. However, practical applications often require numerical approximations of continuous-time, continuous-space processes, since analytical solutions are not always available and, even when they are, can be costly to evaluate or store. Discrete-time and discrete-space approximations are therefore desirable and, in particular, enable efficient particle methods allowing parallel-
 processing [1] and large-scale GPU implementations [22]. While there are discretization methods like finite element method and finite difference methods [24] for approximations of engineering processes, there are not many methods of approximating continuous stochastic processes with mathematical guarantees. In this paper, we aim to construct a discrete-time Markov chain defined over a nonuniform grid composed of infinitely many points on one dimensional line so as to approximate continuous-time s-
tochastic processes for which the mean and variance are linear functions of time. We show that under certain conditions, our aim can be achieved and the transition probabilities of the Markov chain can be assigned so as to exactly match the mean and the variance of the continuous-time process. These transition probabilities are obtained as functions of mean and variance coefficients of the process, as well as the distances between the grid points.
arXiv:2511.20416v2 [math.PR] 26 Nov 2025

We apply our approach to approximating heat diffusion and geometric Brownian motion (GBM), two important examples of continuous-time stochastic processes. In both cases of approximation, we introduce a time-scaling factor so that our proposed Markov chain evolves on a discrete time index that is has linear relationship with the physical time of the continuous process. For heat diffusion in one dimension, we consider the temperature evolution at selected spatial locations and embed these locations-
 into our nonuniform grid. The resulting Markov chain approximation enables simulation-based investigation of heat profiles without solving the underlying partial differential equation directly. For GBM, which models asset price dynamics in mathematical finance, we construct a Markov chain on a nonuniform grid whose mean and variance match those of the log-return of a given GBM. This results in an approximation whose empirical distribution remains close to that of GBM over long time horizons. In p-
articular, our numerical experiments demonstrate that, with appropriately chosen grids and time-scaling, the empirical Wasserstein-1 distances between the Markov chain and the GBM distributions remain consistently small at long time horizons. The remainder of this paper is organized as follows. In Section 2, we provide an overview of related works. Then, in Section 3, we present our nonuniform grid Markov chain method and provide theoretical results. In Section 4, we show how the heat diffusion pr-
ocess can be approximated with our method and its brief application. In Section 5, we demonstrate the application to approximating geometric Brownian motion (GBM) with numerical examples. Finally, in Section 6, we conclude our paper and discuss our future works.
2. Related Works
In this section, we provide comparisons of our work with existing literature on approximation of continuous processes, methods that use nonuniform grids, and lattice structures used in approximation.
2.1. Markov Chains for Approximation of Stochastic Processes
Regarding the approximation of continuous-time stochastic processes, there are research that approximate different types of processes. Specifically, from the past literature, several researchers investigated the approximation of continuous-time stochastic processes by using discrete-time Markov chains. In particular, [18] analyzed a discrete version of the Ornstein-Uhlenbeck process by modeling it as a Markov chain, and derived expressions for the probability that the Markov chain first reaches on-
e boundary before the other (i.e., first hitting place probability). Building on this approach, [19] further investigated the use of a Markov chain on a uniform grid that converges to a GBM when the spacing between the grid points and the interval between discrete-time steps approach zero. In [19], the transition probabilities of the Markov chain are designed to reflect the drift and volatility of a GBM. Our approach is different from that of [19] in a few aspects. First of all, while [19] focused-
 on the convergence of a finite-state Markov chain to the GBM to analyze first hitting probabilities, our objective is the approximation of the log-return of GBM using Markov chains with infinite state spaces. We also note that [19] chose uniform grids for their analysis, whereas we consider nonuniform grids. Previously, [7] and [8] used continuous-time Markov chains on nonuniform grids for approximation purposes; however, their goal was to approximate the fundamental solution of the heat equation-
. Our approach is targeted to develop more generalized discrete-time Markov chain framework that can be calibrated to continuous-time processes whose mean and variance grow linearly in time.
2.2. Methods Using Nonuniform Grids
Nonuniform grids have been used in finite-difference methods for approximating solutions of partial differential equations (see, e.g. [24]). The structure of a nonuniform grid offers several advantages, including computational efficiency and localized resolution refinement [12]. For instance, if one is interested in precise solutions in a certain region of the domain, the grid may be set to include many points in that region and fewer points in regions where precision is not required. Owing to the-
se benefits, previous studies have employed nonuniform grids in their analyses. For example, Bodeau et al. used nonuniform grids to solve partial differential equations in finance [2]. Our paper takes advantage of the localized resolution refinement property of a nonuniform grid. In particular, we demonstrate that grid points can be selected to obtain approximations better than those obtained with a uniform grid with numerical examples in Section 5.
2

2.3. Lattice Structures Used in Approximation
Our proposed Markov chain that we use for approximation has a three-branch local structure. From any given state, the Markov chain can move to a lower state, stay at the same state, or move to a higher state. This is closely related to the trinomial lattice structure widely used in asset pricing. In quantitative finance, binomial and trinomial trees have long been employed to approximate GBM for option pricing. In binomial models, the asset price moves up or down at each time step, while trinomial-
 models extend this by also allowing the price to remain unchanged. Classical examples include the Cox–Ross–Rubinstein model [4], the Jarrow–Rudd model [11], and the Tian tree model [25]. More recent developments, such as trinomial Markov tree models with recombining nodes [26], offer faster convergence, higher accuracy, and improved computational efficiency. Furthermore, [13] proposes a unified binomial framework that matches all moments of GBM over finite time intervals. However, to the best of -
our knowledge, existing lattice-based approaches do not exploit nonuniform grids to improve empirical approximation quality.
3. Markov Chains on Nonuniform Grids with Time-Linear First Two Moments
In this section, we first provide an overview of our notation, and then we present our main technical result that allows us to choose the transition probabilities of a nonuniformly-gridded Markov chain so that its mean and variance match given linear functions of time.
3.1. Notation and Preliminaries
We use Z, N0, and N to denote the lists of all integers, nonnegative integers, and positive integers,
respectively. In this paper, we define stochastic processes on a probability space with P denoting the
probability measure, Er ̈s denoting the expectation and Varr ̈s denoting the variance.
3.2. Markov Chain and Its Characterization
First, we define a discrete-time Markov chain trpkq P X ukPN0 on a nonuniform grid given by
X – txi P R : i P Zu, (1)
where xi P R are grid points that satisfy xi ă xi`1 for i P Z and x0 “ 0. Transition probabilities of the Markov chain trpkqukPN0 are characterized as
Pprpk ` 1q “ xj | rpkq “ xiq “
$
’ ’ ’ &
’ ’ ’ %
λi,L, if j “ i  ́ 1, λi,C, if j “ i, λi,R, if j “ i ` 1, 0, otherwise,
(2)
and its initial distribution is characterized as Pprp0q “ xiq “ νi, i P Z. We are ready to state our main result, which provides transition probabilities of the Markov chain.
Theorem 1. Given M, V P R, if the inequalities
M pxi`1  ́ xiq ď M 2 ` V, (3)
 ́ M pxi  ́ xi ́1q ď M 2 ` V, (4)
M 2 ` V ` M p2xi  ́ xi`1  ́ xi ́1q ď pxi`1  ́ xiqpxi  ́ xi ́1q (5)
hold for each i P Z, then trpkq P X ukPN0 with transition probabilities in (2) where
λi,L “ M 2 ` V  ́ M pxi`1  ́ xiq
pxi`1  ́ xi ́1qpxi  ́ xi ́1q , (6)
λi,R “ M 2 ` V ` M pxi  ́ xi ́1q
pxi`1  ́ xi ́1qpxi`1  ́ xiq , (7)
λi,C “ 1  ́ M 2 ` V ` M p2xi  ́ xi`1  ́ xi ́1q
pxi`1  ́ xiqpxi  ́ xi ́1q , (8)
3

and initial distribution ν0 “ 1, νi “ 0 for i ‰ 0, is a well-defined Markov chain, and satisfies
Errpkqs “ M k, Varrrpkqs “ V k (9)
for every k P N0.
Theorem 1 allows us to choose the transition probabilities pλi,L, λi,C, λi,Rq of a discrete-time Markov chain so that its expectation and variance match given linear functions of the discrete time index (i.e., M k and V k). In this paper our goal is to use Theorem 1 for approximating continuous-time processes with a physical time variable t P r0, 8q. To match the discrete time index k with this physical time, we will consider a time-scaling factor in Sections 4 and 5.
Remark 1. Conditions (3)–(5) ensure that V ě 0. To see this note that (3) and (5) imply M pxi`1  ́ xiq ` M p2xi  ́ xi`1  ́ xi ́1q ď pxi`1  ́ xiqpxi  ́ xi ́1q, which implies M pxi  ́ xi ́1q ď pxi`1  ́ xiqpxi  ́ xi ́1q or equivalently
M ď pxi`1  ́ xiq. (10)
Furthermore, (4) and (5) imply  ́M pxi`1  ́ xiq ď pxi`1  ́ xiqpxi  ́ xi ́1q or equivalently
 ́M ď pxi  ́ xi ́1q. (11)
Using (10) and (11), we have if M ą 0, from (3), M tpxi`1  ́ xiq  ́ M u ď V implies V ě 0. If M ď 0, from (4),  ́M tpxi  ́ xi ́1q ` M u ď V leads to V ě 0.
Remark 2. One notable case in Theorem 1 arises when the grid is uniform, meaning that the distance between adjacent states is constant, that is,
xi`1  ́ xi “ h for all i P Z,
where h ą 0. In this case, we have
λi,L “ 1
2h2
`M 2 ` V  ́ hM  ̆ , λi,R “ 1
2h2
`M 2 ` V ` hM  ̆ , λi,C “ 1  ́ 1
h2
`M 2 ` V  ̆ .
The transition probabilities do not depend on the index i anymore, and they are constant. This leads to a decrease in the complexity of computation in simulations.
3.3. Proof of Theorem 1
Proof of Theorem 1 relies on the following lemma.
Lemma 1. For any f : X Ñ R, we have
8
ÿ
i“ ́8
f pxiqPprpkq “ xiq “
8
ÿ
i“ ́8
pf pxi ́1qλi,L ` f pxiqλi,C ` f pxi`1qλi,RqPprpk  ́ 1q “ xiq. (12)
Proof. By (2), Pprpkq “ xi | rpk  ́ 1q “ xjq “ 0 for j R t ́1, 0, 1u. Thus, by Law of total probability, we obtain
Pprpkq “ xiq “
1
ÿ
j“ ́1
Pprpkq “ xi | rpk  ́ 1q “ xjqPprpk  ́ 1q “ xjq, (13)
4

which implies
8
ÿ
i“ ́8
f pxiqPprpkq “ xiq “
8
ÿ
i“ ́8
f pxiqPprpkq “ xi | rpk  ́ 1q “ xi`1qPprpk  ́ 1q “ xi`1q
`
8
ÿ
i“ ́8
f pxiqPprpkq “ xi | rpk  ́ 1q “ xiqPprpk  ́ 1q “ xiq
`
8
ÿ
i“ ́8
f pxiqPprpkq “ xi | rpk  ́ 1q “ xi ́1qPprpk  ́ 1q “ xi ́1q. (14)
Since the ranges of the summations on the right-hand side of (14) are from  ́8 to `8, the indices i can be reparameterized. This results in
8
ÿ
i“ ́8
f pxiqPprpkq “ xiq “
8
ÿ
i“ ́8
f pxi ́1qPprpkq “ xi ́1 | rpk  ́ 1q “ xiqPprpk  ́ 1q “ xiq
`
8
ÿ
i“ ́8
f pxiqPprpkq “ xi | rpk  ́ 1q “ xiqPprpk  ́ 1q “ xiq
`
8
ÿ
i“ ́8
f pxi`1qPprpkq “ xi`1 | rpk  ́ 1q “ xiqPprpk  ́ 1q “ xiq. (15)
By (2), we can replace conditional probabilities with λi,L, λi,C, λi,R to get
8
ÿ
i“ ́8
f pxiqPprpkq “ xiq “
8
ÿ
i“ ́8
f pxi ́1qλi,LPprpk  ́ 1q “ xiq `
8
ÿ
i“ ́8
f pxiqλi,CPprpk  ́ 1q “ xiq
`
8
ÿ
i“ ́8
f pxi`1qλi,RPprpk  ́ 1q “ xiq, (16)
which implies (12).
Proof of Theorem 1. First of all, by using (3)–(5), we obtain
0 ď M 2 ` V  ́ M pxi`1  ́ xiq
pxi`1  ́ xi ́1qpxi  ́ xi ́1q , (17)
0 ď M 2 ` V ` M pxi  ́ xi ́1q
pxi`1  ́ xi ́1qpxi`1  ́ xiq , (18)
M 2 ` V ` M p2xi  ́ xi`1  ́ xi ́1q
pxi`1  ́ xiqpxi  ́ xi ́1q ď 1. (19)
Notice that (6)–(8) together with (17)–(19) imply
0 ď λi,L ď 1, 0 ď λi,C ď 1, 0 ď λi,R ď 1. (20)
Furthermore, λi,L ` λi,R ` λi,C “ 1 holds by (6)–(8). Thus, the Markov chain trpkqukPN0 is well defined. Now, by the definition of expectation, we get
Errpkqs “
8
ÿ
i“ ́8
xiPprpkq “ xiq. (21)
5

Here, by using Lemma 1 with f pxiq “ xi, we obtain
8
ÿ
i“ ́8
pxi ́1λi,L ` xiλi,C ` xi`1λi,RqPprpk  ́ 1q “ xiq. (22)
Replacing λi,C with 1  ́ λi,L  ́ λi,R leads to
Errpkqs “
8
ÿ
i“ ́8
tpxi ́1  ́ xiqλi,L ` pxi`1  ́ xiqλi,R ` xiu Pprpk  ́ 1q “ xiq. (23)
Substituting the expressions for λi,L and λi,R from (6) and (7), we arrive at
Errpkqs “
8
ÿ
i“ ́8
"
xi ` pxi`1  ́ xiqM ` pxi  ́ xi ́1qM
pxi`1  ́ xi ́1q
*
Pprpk  ́ 1q “ xiq
“
8
ÿ
i“ ́8
pxi ` M qPprpk  ́ 1q “ xiq
“
8
ÿ
i“ ́8
xiPprpk  ́ 1q “ xiq ` M
8
ÿ
i“ ́8
Pprpk  ́ 1q “ xiq
“ Erprpk  ́ 1qqs ` M. (24)
By using mathematical induction on (24) and rp0q “ 0, we conclude
Errpkqs “ Errp0qs ` M  ̈ k “ M k, (25)
which implies (9). We now turn to the variance. First, we evaluate
Err2pkqs “
8
ÿ
i“ ́8
xi2Pprpkq “ xiq. (26)
Using Lemma 1 with f pxiq “ xi2, we transform equation (26) into
Err2pkqs “
8
ÿ
i“ ́8
pxi2 ́1λi,L ` xi2`1λi,R ` xi2λi,C qPprpk  ́ 1q “ xiq. (27)
Since, λi,C “ 1  ́ λi,L  ́ λi,R, it follows from (27) that
Err2pkqs “
8
ÿ
i“ ́8
␣pxi2 ́1  ́ xi2qλi,L ` pxi2`1  ́ xi2qλi,R ` xi2
( Pprpk  ́ 1q “ xiq.
Now, we use the expressions for λi,L and λi,R in this equation to obtain
Err2pkqs “
8
ÿ
i“ ́8
" pxi`1  ́ xi ́1qpM 2 ` V ` 2xiM q
pxi`1  ́ xi ́1q ` xi2
*
Pprpk  ́ 1q “ xiq
“
8
ÿ
i“ ́8
`M 2 ` V ` 2xiM ` xi2
 ̆ Pprpk  ́ 1q “ xiq
“ M 2 ` V ` 2M
8
ÿ
i“ ́8
xiPprpk  ́ 1q “ xiq `
8
ÿ
i“ ́8
xi2Pprpk  ́ 1q “ xiq
“ M 2 ` V ` 2M  ̈ Errpk  ́ 1qs ` Err2pk  ́ 1qs. (28)
6

Since Errpk  ́ 1qs “ M pk  ́ 1q by (25), it follows from (28) that
Err2pkqs “ M 2 ` V ` 2M 2pk  ́ 1q ` Err2pk  ́ 1qs. (29)
This is a recurrence relation. Thus, by induction, we get
Err2pkqs “ `M 2 ` V  ̆  ̈ k ` 2 M 2pk  ́ 1q
2  ̈ k “ pM q2k2 ` V k. (30)
Finally, by using the identity Varrrpkqs “ Err2pkqs  ́ Errpkqs2, as well as with (25) and (30), we calculate
Varrrpkqs “ Err2pkqs  ́ Errpkqs2 “ M 2k2 ` V k  ́ M 2k2 “ V k (31)
confirming (9).
4. Application to Approximating Stochastic Heat Diffusion
In this section, we demonstrate how the proposed Markov chain framework can be used to approximate stochastic heat diffusion in one spatial dimension.
4.1. Approximation
Among the continuous processes, heat diffusion has been considered significant, as it is used in wide range of science and engineering fields [23]. Heat diffusion benefits substantially from discretization because the analytical intractability of its governing partial differential equation makes a discrete-time approximation particularly advantageous for numerical analysis and simulation. Heat diffusion is modeled by the equation
Bupt, xq
Bt “ α∆upt, xq, (32)
where upt, xq represents the temperature at time t at position x, α ą 0 represents the diffusivity constant, and ∆ represents the Laplace operator. In this paper, we consider the one-dimensional case with x P R, which results in the one dimensional equation
Bu
Bt “ αB2u
Bx2 . (33)
The solution to this heat equation is given by
upt, xq “ 1
p4παtq 1
2
e ́ x2
4αt . (34)
Notice that this solution is also the probability density function of Normal distribution with mean 0 and variance 2αt [7]. Stochastic heat diffusion considers heat particles at a certain time t as realizations of a random variable with this distribution. Relation between heat equation and Normal distribution also enabled researchers to establish a connection between random walks and heat diffusion (see, e.g., [15, 7] and the references therein), where random movement of heat particles are used fo-
r approximating the solution to heat diffusion. We use a Markov chain defined on a nonuniform-grid to approximate the movement of these heat particles. Our approach is the discrete-time analogue of the continuous-time approach presented in [7]. Specifically, in the following result, we provide transition probabilities of a discrete-time Markov chain that exactly matches the mean and variance of a heat particle whose probability distribution at time t “ kτ is characterized by the probability densit-
y function in (34). Here we introduce a time-scaling factor τ . The physical time of the continuous process is a linear function of the discrete time index of the Markov chain that we introduce (i.e., t “ kτ ).
7

Corollary 1. If the inequality
2ατ ď pxi`1  ́ xiqpxi  ́ xi ́1q (35)
holds for each i P Z, then trpkq P X ukPN0 with transition probabilities in (2) where
λi,L “ 2ατ
pxi`1  ́ xi ́1qpxi  ́ xi ́1q , (36)
λi,R “ 2ατ
pxi`1  ́ xi ́1qpxi`1  ́ xiq , (37)
λi,C “ 1  ́ 2ατ
pxi`1  ́ xiqpxi  ́ xi ́1q , (38)
and initial distribution ν0 “ 1, νi “ 0 for i ‰ 0, is a well-defined Markov chain, and satisfies
Errpkqs “ 0, Varrrpkqs “ 2αkτ, (39)
for every k P N0.
Proof of Corollary 1. This result is a consequence of Theorem1 with M “ 0, V “ 2ατ , because (35) implies (3), (4), (5), as we have α ą 0 and τ ą 0.
Since the heat diffusion has mean 0, the inequalities (1) are simplified compared to Theorem 1 and Corollary 2. To match the first two moments of heat diffusion, scaling factor τ and grid points should be appropriately chosen so that it satisfies the inequality in (35) considering the given diffusivity constant α.
4.2. Markov Chain Approximation of Temperature Evolution
As an application of our results, we are interested in how the temperature evolves around a certain set of points in one dimensional space
p1, p2, . . . , pm P R, (40)
where m P N. We want to know the temperature values at times 0, τ, 2τ, . . . , nτ with n P N. To this end, we construct a spatial grid
X ̃ fi tx ́n,  ̈  ̈  ̈ , x ́1, x0, x1,  ̈  ̈  ̈ , xnu, (41)
such that the set of points of interest satisfies P fi tp1, p2, . . . , pmu Ă X ̃.
To approximate the heat, we can consider a finite-state Markov chain trpkq P X ̃u with initial distribution given by
ν ̃ “ r0 . . . 0
loomoon
n terms
1 0...0
loomoon
n terms
s, (42)
and the transition probability matrix given as
P ̃ “
 ̈
 ̊  ̊  ̊  ̊  ̊  ̊  ̊  ̊  ̊  ̊  ̋
1 0 0  ̈ ̈ ̈ 0
λ ́pn ́1q,L λ ́pn ́1q,C λ ́pn ́1q,R
. . . ...
0 ... ... ... 0
... . . . λn ́1,L λn ́1,C λn ́1,R
0  ̈ ̈ ̈ 0 0 1
 ̨
‹ ‹ ‹ ‹ ‹ ‹ ‹ ‹ ‹ ‹ ‚
8

so that
pν ̃P ̃kqi`n`1 “ Prrpkq “ xis, k P t0, 1, . . . , nu, i P t ́n, . . . , 0, . . . , nu, (43)
where pν ̃P ̃kqi`n`1 corresponds to pi`n`1qth entry of vector ν ̃P ̃k. We use Corollary 1 to choose λi,L, λi,C, λi,R. Corollary 1 is for infinite state Markov chains for infinite durations. In this practical example, we consider finite time steps. Therefore, we consider a truncated version of the Markov chain that goes from x ́n to xn. Notice that within n time steps, starting from x0, the furthest values that the Markov chain can reach are x ́n and xn. This construction provides a discrete-time a-
pproximation of heat diffusion through a Markov chain defined on the spatial grid X ̃. The initial distribution represents the origin of the concentrated heat, and transition
probability matrix P ̃ encodes how heat spreads to neighboring points over each time increment τ . Iteration
of P ̃ mimics the diffusive spreading mechanism of the heat equation. As a result, the distribution of ν ̃P ̃k represents an approximated temperature profile at time kτ , and the temperature at the points of interest pj P P can be observed with the corresponding entries of this vector. Furthermore, in terms of the spatial grid, as n increases by making the grid finer, the approximation gets more precise.
5. Application to Approximating Geometric Brownian Motion
In this section, we present the approximation of log-return of geometric Brownian motion as an application of our approximation method in Theorem1. The efficacy of our approximation method and the use of a nonuniform grid will be illustrated through a numerical simulation.
5.1. Application
Geometric Brownian motion (GBM) is extensively used in finance, particularly for modeling stock prices, pricing derivatives, and other assets [5, 17]. As such, GBM has been a fundamental concept in financial mathematics. The probability distribution of GBM is described by the Black–Scholes partial differential equation, and although several numerical methods exist for approximating this equation’s solution (see, e.g., [3, 10, 27]), directly approximating GBM by a discrete stochastic model offers u-
nique benefits, particularly in leveraging GPU for parallel computation in simulations. We believe that our approximation method can be useful in applications in finance, physics, engineering, and mathematical biology where geometric Brownian motion is used as a modeling tool (see, e.g., [6, 9, 16, 20, 21]). Using our Markov chain model, we approximate the log-return of GBM (i.e., lnpskτ q) with rpkq by matching their first two moments, expectation and variance. The time-scaling factor, τ is intro-
duced to allow approximation not only on discrete time steps, but at any given time kτ . Geometric Brownian motion with drift and volatility coefficients μ and σ2 is denoted with the continuous-time stochastic process tst P Rutě0
that satisfies dst “ μstdt`σstdwt, where s0 ą 0 is a fixed constant and twt P Rutě0 is the Wiener process [14].
Note that E rln pst{s0qs “ `μ  ́ σ2{2 ̆ t and Var rln pst{s0qs “ σ2t. Therefore, if we incorporate a time-scaling
factor τ ą 0, for every k P N0, we get
E
„
ln
ˆ skτ
s0
 ̇ȷ
“
ˆ
μ  ́ σ2
2
 ̇
kτ, Var
„
ln
ˆ skτ
s0
 ̇ȷ
“ σ2kτ. (44)
Corollary 2. Let η – μ  ́ σ2
2 and τ ą 0. If the inequalities
ητ pxi`1  ́ xiq ď η2τ 2 ` σ2τ, (45)
 ́ ητ pxi  ́ xi ́1q ď η2τ 2 ` σ2τ, (46)
η2τ 2 ` σ2τ ` ητ p2xi  ́ xi`1  ́ xi ́1q ď pxi`1  ́ xiqpxi  ́ xi ́1q (47)
9

hold for each i P Z, then trpkq P X ukPN0 with transition probabilities in (2) where
λi,L “ η2τ 2 ` σ2τ  ́ ητ pxi`1  ́ xiq
pxi`1  ́ xi ́1qpxi  ́ xi ́1q , (48)
λi,R “ η2τ 2 ` σ2τ ` ητ pxi  ́ xi ́1q
pxi`1  ́ xi ́1qpxi`1  ́ xiq , (49)
λi,C “ 1  ́ η2τ 2 ` σ2τ ` ητ p2xi  ́ xi`1  ́ xi ́1q
pxi`1  ́ xiqpxi  ́ xi ́1q , (50)
and initial distribution ν0 “ 1, νi “ 0 for i ‰ 0, is a well-defined Markov chain, and satisfies
Errpkqs “ E
„
ln
ˆ skτ
s0
 ̇ȷ
, Varrrpkqs “ Var
„
ln
ˆ skτ
s0
 ̇ȷ
, (51)
for every k P N0.
Proof. This result is a consequence of Theorem1 with M “ ητ and V “ σ2τ .
Remark 3. Notice that for each state xi of the Markov chain in Corollary 2, the next possible states are xi ́1, xi, xi`1. This structure is similar to the trinomial lattice structure often used in asset pricing models. We remark that approximation of GBM using binomial and trinomial models have been investigated in finance field for option pricing. In binomial models, the evolution of the price of an asset is modeled to move up or down between the points of a grid. As an extension of the binomial -
models, trinomial models also allow prices to remain constant. Existing binomial/trinomial models include the traditional ones such as the Cox-Ross-Rubinstein model [4], the Jarrow-Rudd model [11], and the Tian tree model [25], as well as the more recent trinomial Markov tree model with recombining nodes [26], which allows faster convergence, higher accuracy, and efficient computation. Recently, [13] provided a unified framework of binomial models that matches all moments of GBM in finite time int-
ervals. However, to the best of our knowledge utilization of nonuniform grids for better empirical performance have not been explored in the literature.
5.2. Numerical Example
In this section, we consider the problem of approximating log-return of GBM with coefficients μ “ 2 and σ2 “ 0.25. Following the method that we presented in the previous section, we use a Markov chain defined on grid points
xi “
#
ci, if i ě 0,
10ci, if i ă 0, (52)
for i P Z, where c “ 0.01 is fixed constant. Notice that the grid points on the right-side of the real line are set to have a finer resolution. This is to capture the behavior of GBM more closely, as the log-return tends to be positive with the selected drift coefficient μ “ 2. Note that the time-scaling factor τ “ 0.0002 satisfies the inequalities (45)–(47). Therefore, by Corollary 2, transition probabilities in (48)–(50) guarantee that the first two moments of rpkq and lnpskτ {s0q match exactly,-
 as in (51). Using the transition probabilities derived in (48)–(50), we generate N “ 10000 realizations of the Markov chain trpkq P X ukPN0 for k P t0, 1, . . . , 10000u. Figure 1 shows a histogram of rp10000q. We observe that it closely resembles the probability density function of the log-return at time kτ “ 2. Approximation of GBM with the Markov chain can be conceptually understood by rpkq « lnpskτ {s0q,
but in this section, we also assess the performance of the approximation s0erpkq « skτ . Specifically, Figure 2
shows 20 sample trajectories of s0erpkq as well as average of N “ 10000 sample trajectories. We note that
the average trajectory closely matches Erskτ s. We remark that other time-scaling factors (τ ) can be used for approximation as long as the conditions of Corollary 2 are satisfied. For smaller values of τ , obtaining approximations of the distribution of the log-return at a fixed time kτ take shorter, since trajectories of rpkq need to be obtained for smaller k values. To further reduce the simulation time, simulation of different sample trajectories of rpkq can be carried out at different process-
ing units in parallel.
10

123456 a
0.00
0.25
0.50
ηkτ
p.d.f. of ln(skτ /s0)
Figure 1: Comparison of the probability density function of lnpskτ {s0q for kτ “ 2 and histogram of rpkq for k “ 10000.
0 2000 4000 6000 8000 10000 k
100
101
102
0.00 0.25 0.50 0.75 1.00 1.25 1.50 1.75 2.00
kτ
E[skτ ]
Average trajectory of s0er(k) Sample trajectories of s0er(k)
Figure 2: Sample and average trajectories of s0erpkq compared with Erskτ s.
5.3. A Quantitative Comparison of Nonuniform and Uniform Grids
Next, we compare whether the proposed Markov chain approximation works better on the nonuniform grid in (52) or a uniform grid of equal point density with points given as
xi “ p20{11q ˆ ci, i P Z, (53)
where c “ 0.01 is the fixed constant from (52). For this comparison, we investigate the Wasserstein 1-distance from the distribution of the log-return. In particular, we use numerical integration to calculate
W1pkq “
ż1
0
ˇ ˇ
ˇF  ́1
1,k pqq  ́ F  ́1
2,k pqq
ˇ ˇ
ˇ dq,
where F  ́1
1,k represents the empirical quantile function for N “ 10000 realizations of rpkq and F  ́1
2,k represents
the quantile function of the distribution of lnpskτ {s0q (i.e., normal distribution with mean pμ  ́ σ2{2qpkτ q an
variance σ2pkτ q). In Figure 4, we show the Wasserstein 1-distance W1pkq obtained for k P t1, . . . , 10000u when we use a uniform grid and a nonuniform grid. We observe that for large values of k, Wasserstein 1-distance obtained with the nonuniform grid is smaller than that obtained with the uniform grid. This is expected because when t is large, lnpskτ {s0q is expected to take positive values due to η being positive. Notice that in such a case, finer resolution on the positive side of the nonuni-
form grid allows better approximation. On the other hand, when k is small, the distribution of the log-return lnpskτ {s0q is centered close to the 0 value and spreads to both negative and positive values. For small k, the uniform grid being symmetric around 0 allows a better representation, and thus a symmetric looking histogram (see top-left in Figure 5) and achieves a smaller Wasserstein 1-distance value (see Figure 4). For larger k, histograms are similar (see bottom plots in Figure 5) and the -
nonuniform grid achieves consistently smaller Wasserstein 1-distance values.(Figure 4). While we restricted our attention to constant drift and volatility coefficients, our method can also be used for the case where those coefficients are piecewise-constant functions of time. In that case, we can run the Markov chain simulation until the time there is a jump in the values of coefficients. Then, at the time of jump, we change the transition probabilities and start new simulation from the last locat-
ion of the Markov chain on the grid.
11

Figure 3: Uniform and nonuniform grids with equal point density
0 2000 4000 6000 8000 10000 k
0.005
0.010
0.015
W1(k)
Nonuniform grid Uniform grid
0 2000 4000 6000 8000 10000 k
0.005
0.010
0.015
W1(k)
Nonuniform grid Uniform grid
Figure 4: Comparison of Wasserstein 1-distances obtained with uniform and nonuniform grids. Top: 10000 simulations, Bottom: 100000 simulations.
6. Conclusion
In this study, we proposed a discrete-time Markov chain approach for approximating continuous time process with time-linear moments. In particular, we derived transition probabilities of a Markov chain on a nonuniform grid so as to guarantee that the expectation and the variance of the Markov chain matches those of a continuous process. We introduced a time-scaling factor to allow approximation at arbitrary times. We also discussed the approximation of geometric Brownian motion and heat diffusion -
based on our proposed approach. For future work, our goal is to extend our Markov chain approximation approach to other continuous process such as Levy processes including compound Poisson processes. We also aim to consider approximating regime-switching models.
Acknowledgements
This work was supported by JSPS KAKENHI Grant No. JP23K03913.
References
[1] C. Alina and L. Doron. Particle methods for dispersive equations. Journal of Computational Physics, 171(2):708–730, 2001.
[2] J. Bodeau, G. Riboulet, and T. Roncalli. Non-uniform grids for PDE in finance. SSRN Electronic Journal, 2000.
[3] Z. Cen and A. Le. A robust and accurate finite difference method for a generalized Black–Scholes equation. Journal of Computational and Applied Mathematics, 235(13):3728–3733, 2011.
[4] John C Cox, Stephen A Ross, and Mark Rubinstein. Option pricing: A simplified approach. Journal of financial Economics, 7(3):229–263, 1979.
12

−0.2 −0.1 0.0 0.1 0.2 a
0
50
100
ηkτ
p.d.f. of ln(skτ /s0)
0246 a
0.00
0.25
0.50
ηkτ
p.d.f. of ln(skτ /s0)
−0.2 −0.1 0.0 0.1 0.2 a
0
50
100
ηkτ
p.d.f. of ln(skτ /s0)
0246 a
0.00
0.25
0.50
ηkτ
p.d.f. of ln(skτ /s0)
Figure 5: Probability density function of log-return lnpskτ {s0q compared to histograms of rpkq. Top-Left: Uniform grid for k “ 10, Top-Right: Nonuniform grid for k “ 10, Bottom-Left: Uniform grid for k “ 10000, Bottom-Right: Nonuniform grid for k “ 10000
[5] W. Farida Agustini, I. R. Affianti, and E. R. M. Putri. Stock price prediction using Geometric Brownian Motion. In Journal of physics: Conference series, volume 974, 2018.
[6] F. Fattahi. Modeling and analysis of the haldane genetic model under Brownian motion using stochastic differential equation. Ann. Math. Phys., 5(1):042–054, 2022.
[7] L. Frannek, T. Hayakawa, and A. Cetinkaya. One-dimensional heat diffusion modelling and random walks on non-uniform grids. In Proc. IEEE CDC, pages 5548–5553, 2012.
[8] L. Frannek, T. Hayakawa, and A. Cetinkaya. Stochastic heat diffusion modelling with random walks on the non-uniformly gridded circle. In Proc. American Control Conference, pages 1150–1155, 2014.
[9] S. Giordano, F. Cleri, and R. Blossey. Infinite ergodicity in generalized Geometric Brownian Motions with nonlinear drift. Physical Review E, 107(4), 2023.
[10] P. Heider. Numerical methods for non-linear Black–Scholes equations. Applied Mathematical Finance, 17(1):59–81, 2010.
[11] Robert A Jarrow and Andrew Rudd. Option pricing. (No Title).
[12] L. Jianchun, G. A. Pope, and K. Sepehrnoori. A high-resolution finite-difference scheme for nonuniform grids. Applied Mathematical Modelling, 19(3):162–172, 1995.
[13] Young Shin Kim, Stoyan Stoyanov, Stelozar Rachev, and Frank Fabozzi. Multi-purpose binomial model: Fitting all moments to the underlying geometric brownian motion. Economics Letters, 145:225–229, 2016.
[14] N.V. Krylov. Introduction to the theory of random processes, volume 43. American Mathematical Soc., 2002.
[15] Gregory F Lawler. Random walk and the heat equation, volume 55. American Mathematical Soc., 2010.
[16] S. L. Lee, C. Y. Liew, C. K. Chen, and L. L. Voon. Geometric brownian motion-based time series modeling methodology for statistical autocorrelated process control: Logarithmic return model. International Journal of Mathematics and Mathematical Sciences, 2022(1), 2022.
[17] M. Lefebvre. Applied Stochastic Processes. Springer, 2007.
13

[18] M. Lefebvre and J. L. Guilbault. First hitting place probabilities for a discrete version of the OrnsteinUhlenbeck process. International Journal of Mathematics and Mathematical Sciences, 2009(1):909835, 2009.
[19] M. Lefebvre and M. Kounta. First hitting problems for Markov chains that converge to a Geometric Brownian Motion. International Scholarly Research Notices, 2011(1), 2011.
[20] D. A. I. Maruddani and Trimono. Modeling stock prices in a portfolio using multidimensional Geometric Brownian Motion. In Journal of Physics: Conference Series, volume 1025, 2018.
[21] Y. Mishura and K. Ralchenko. Discrete-Time Approximations and Limit Theorems: In Applications to Financial Markets. Walter de Gruyter GmbH & Co KG, 2021.
[22] Steven Solomon, Ruppa K Thulasiram, and Parimala Thulasiraman. Option pricing on the gpu. In 2010 IEEE 12th International Conference on High Performance Computing and Communications (HPCC), pages 289–296. IEEE, 2010.
[23] WF Stocker. Design of thermal system, 1989.
[24] J. W. Thomas. Numerical Partial Differential Equations: Finite Difference Methods. Springer, 2013.
[25] Yisong Tian. A modified lattice approach to option pricing. The Journal of Futures Markets (1986-1998), 13(5):563, 1993.
[26] H. Xiaoping, G. Jiafeng, D. Tao, C. Lihua, and C. Jie. Pricing options based on trinomial markov tree. Discrete Dynamics in Nature and Society, 2014(1):624360, 2014.
[27] S. Z. Zadeh, M. Azizian, and M. Sarvari. An interval version of Black–Scholes European option pricing model and its numerical solution. Results in Applied Mathematics, 27, 2025.
14

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:04.228Z
- **Text Length:** 36626 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 14 of 14
