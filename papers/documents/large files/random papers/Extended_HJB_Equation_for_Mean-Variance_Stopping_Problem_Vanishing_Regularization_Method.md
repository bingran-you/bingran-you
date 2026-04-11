# PDF Document: Dong and Zheng - 2025 - Extended HJB Equation for Mean-Variance Stopping Problem Vanishing Regularization Method.pdf

**File Path:** Dong and Zheng - 2025 - Extended HJB Equation for Mean-Variance Stopping Problem Vanishing Regularization Method.pdf

**Processed Date:** 2026-02-10T18:16:36.252Z

**File Size:** 438.56 KB

**Total Pages:** 21

**Extracted Pages:** 21

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3548

**Title:** Extended HJB Equation for Mean-Variance Stopping Problem: Vanishing Regularization Method

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Extended HJB Equation for Mean-Variance Stopping Problem:
Vanishing Regularization Method
Yuchao Dong∗and Harry Zheng†
October 29, 2025
Abstract
This paper studies the time-inconsistent MV optimal stopping problem via a game-theoretic approach to find equilibrium strategies. To overcome the mathematical intractability of direct equilibrium analysis, we propose a vanishing regularization method: first, we introduce an entropy-based regularization term to the MV objective, modeling mixed-strategy stopping times using the intensity of a Cox process. For this regularized problem, we derive a coupled extended Hamilton-Jacobi-Bellman (HJB) equat-
ion system, prove a verification theorem linking its solutions to equilibrium intensities, and establish the existence of classical solutions for small time horizons via a contraction mapping argument. By letting the regularization term tend to zero, we formally recover a system of parabolic variational inequalities that characterizes equilibrium stopping times for the original MV problem. This system includes an additional key quadratic term–a distinction from classical optimal stopping, where st-
opping conditions depend only on comparing the value function to the instantaneous reward. Keywords: Mean-variance problems, Time-inconsistency, Cox process, Equilibrium stopping time, Extended HJB equation, Vanishing Regularization Method AMS MSC2010: 60G40; 60J70; 91A10; 91A25; 91G80; 91B02; 91B51.
1 Introduction
Given a diffusion process X, the classical optimal stopping problem is to determine a stopping time τ that maximizes E [f (Xτ )] .
Optimal stopping has many applications, for example, financial decision-making (e.g., timing for asset sales) and statistical inference (e.g., stopping rules for hypothesis testing [17]). However, in financial contexts, there is often an additional imperative to mitigate decision-related risk. In line with the mean-variance analysis of [14], we identify the return with the expectation and the risk with the variance and aim to select a stopping time that maximizes
E [f (Xτ )] − γ
2 Var [f (Xτ )] , (1)
∗ School of Mathematical Sciences, Key Laboratory of Intelligent Computing and Applications (Ministry of Education), Tongji University, Shanghai 200092, China. The work of the second author was funded by National Natural Science Foundation of China (No.12471425) †Department of Mathematics, Imperial College, London SW7 2BZ, UK (Email: h.zheng@imperial.ac.uk). The work was supported by the Engineering and Physical Sciences Research Council of UK (Grant No. EP/V008331/1).
1
arXiv:2510.24128v1 [math.OC] 28 Oct 2025

where γ ≥ 0 denotes the risk aversion coefficient. Problem (1) is referred as a mean-variance (MV) stopping problem in the literature. Similar to the classical dynamic MV problem, the optimal stopping rule typically depends on the initial state x, which means that it does not generally satisfy Bellman’s principle of optimality. In the literature this is known as time-inconsistency. Time-inconsistent problems are typically studied using two approaches. One is to formulate the problem for a fixed i-
nitial state and allow the corresponding optimal stopping rule to depend on that initial state, called the pre-commitment approach. The other is to look for a stopping rule that remains optimal at every period when re-evaluated from that period’s perspective, called the game-theoretic approach. Strotz [16] is the first to explore the game-theoretic approach to time-inconsistent problems in dynamic utility maximization with non-exponential discounting. Bjork et al. [4] give a comprehensive treatmen-
t of time-inconsistent Markovian models and characterize the equilibrium by a solution to a generalized HJB equation, called the extended HJB system. Time inconsistent control problems have attracted considerable research interest in recent years with many applications. For example, Bjork et al. [5] solve a MV problem with state dependent risk aversion. He and Liang [11] study a defined contribution insurance problem in a MV framework. Dai et al. [8] solve a MV problem with reinforcement learning -
method. All aforementioned papers have fixed finite horizon. The literature on the game-theoretic approach to time-inconsistent stopping problems is in the early developing stage. Christensen and Lindensj ̈o [6] study an equilibrium stopping problem with initial state dependent reward. Bayraktar et al. [2] consider three equilibrium concepts proposed in the literature for time-inconsistent stopping problems with non-exponential discount. There is little research for MV stopping problems. The only -
ones the authors are aware of are Peskir and Shiryaev [15] on the so-called dynamic optimal stopping time, which is similar to the game theoretic approach and Christensen and Lindensj ̈o [7] on a subgame perfect Nash equilibrium for stopping problems. In this paper, we study the equilibrium strategy and relate it to the extended HJB equation, which means that we need to formulate the problem as a game and look for equilibrium. It is a fundamental result in game theory that equilibrium generally ex-
ists for mixed strategies rather than pure strategies in a broad class of games1. Hence, we focus on mixed strategy stopping times by allowing the agents to choose the intensity function of a Cox process as a randomization device for the stopping decision, whereas [7, 15] characterize the equilibrium and provide other necessary and sufficient equilibrium conditions, but do not derive the extended HJB equation. While their results coincide with ours for geometric Brownian motion case, our derivatio-
n is motivated by the vanishing regularity approach, a key distinction from prior research. We now describe the key methodology for solving the MV stopping problem. We first add a regularization term, weighted by a constant λ into the target functional (see (2)), to form a regularized problem with control variate being the intensity (as opposed to the stopping time), which makes the definition of the equilibrium straightforward. We then derive the associated extended HJB equation (see (3)), prove -
a verification theorem (see Theorem 3.1) and establish the existence of its solution under certain technical assumptions (see Theorem 3.2). Finally, we let λ tend to zero (i.e., vanishing regularization) to formally obtain a system of parabolic variational inequalities (see (7)) that characterizes the equilibrium stopping time for the original MV stopping problem. To the best knowledge of the authors, this is the first time such a system of equations is reported in the literature. Furthermore, we -
find that the stopping condition is not determined solely by comparing the value function with the instantaneous reward; instead, an additional quadratic term also plays a role in the formulation, which is in sharp contrast to
1For example, the rock - paper - scissors game is a classic example in game theory, and it has no pure strategy Nash equilibrium but has a mixed strategy Nash equilibrium in which the player choose each action with equal probability 1/3.
2

the standard optimal stopping problem. Finally, we aim to emphasize the motivation underlying our method. In [9], the authors investigated an entropy-regularized optimal stopping problem and demonstrated that the corresponding optimal value function is associated with a penalized form for the variational inequality. Notably, this penalized equation also converges to the original variational inequality as the regularization parameter tends to zero. For MV optimal stopping problems, we adopt an ana-
logous approach: we first introduce and analyze a regularized version of the problem, then subsequently let the regularization parameter vanish to recover results for the original MV stopping problem. Such ideas are pervasive in mathematical research. When addressing a computationally or theoretically challenging problem, researchers often first consider a perturbed or regularized counterpart—whose solution is more tractable to derive—and then take an appropriate limit to revert to the original pr-
oblem. It is precisely this core logic that leads us to name our approach Vanishing Regularization Method.
The rest of the paper is organized as follows: In Section 2 we formulate the MV stopping problem and its relaxed problem together with the definition of equilibrium. In Section 3 we derive the extended HJB equation for the relaxed problem and prove a verification theorem (Theorem 3.1) and an existence result (Theorem 3.2). In Section 4 we let λ tend to zero to formally get the variation system for the original MV stopping problem and show that it characterizes the equilibrium stopping time (Theore-
ms 4.1 and 4.2). In Section 5 we give some further discussions on our results, including infinite horizon case, discrete time approximation, and general time-inconsistent problems. Section 6 concludes the paper. Appendix contains the proofs of a local time approximation relation (9) and a technical lemma (Lemma B.1) that is needed in the proof of Theorem 3.2.
2 Mean Variance Stopping and its Relaxed Problem
In this section, we introduce the basic framework of the problem. Especially, we give the formulation for the relaxed MV stopping problem and the definition of related equilibrium strategy. Let (Ω, F, P ) be a probability space, on which a standard d-dimensional Brownian motion W is defined2. The Rd-valued state process X satisfies
dXt = b(t, Xt)dt + σ(t, Xt)dWt.
Denote by F := {Ft}t the natural filtration generated by W , augmented by all P -null sets. The set Tt,T is defined as the totality of all F-stopping time taking values in [t, T ]. For any time t ∈ [0, T ], the MV stopping problem is to choose τ ∈ Tt,T such that the following functional
J (t, x; τ ) := Et,x [f (Xτ )] − γ
2 Vart,x [f (Xτ )]
is maximized, where Et,x[·] and Vart,x[·] denote the conditional expectation and conditional variance conditioning on Xt = x, respectively. In this paper, we shall adopt the following assumptions on the coefficients.
Assumption 2.1. The coefficients b, σ and f are Lipschitz continuous with linear growth in x, uniformly in t, i.e., there exists a constant C such that, for any t ∈ [0, T ] and x, y ∈ Rd,
|b(t, x)|, |σ(t, x)|, |f (x)| ≤ C(1 + |x|),
and
|b(t, x) − b(t, y)|, |σ(t, x) − σ(t, y)|, |f (x) − f (y)| ≤ C|x − y|.
2For simplicity, we consider the case that the dimension of the Brownian motion is same to that of the state process. It can be extended to other cases without any major modification as long as Assumption 2.1 holds.
3

Moreover, σσT is uniformly non-degenerate, i.e., there exists a constant c such that σσT (t, x) ≥ cI for any t ∈ [0, T ] and x ∈ Rd.
For any function f defined on [0, T ] × Rd, we use the notations ∂tf and ∂xf to represent the derivatives with respect to t and x and ∂xxf its Hessian. In this paper, we use C to represent a constant that could depend on the coefficients but may be different from line to line. It is well-known that, for MV problem, the dynamic programming principle fails. Thus, people focus on two kinds of strategies. One is called pre-committed strategy, which is a fixed plan chosen at the initial time and enforc-
ed irrevocably across all future periods, regardless of new information or changing market conditions. On the other hand, an equilibrium strategy or time-consistent strategy is a plan that remains optimal at every period when re-evaluated from that period’s perspective, which aligns with the concept of a subgame perfect equilibrium in dynamic games, where strategies are optimal in all ”subgames” (i.e., at all points in time). In this paper, we study the equilibrium strategy, especially the extende-
d HJB equation related to it. This means that we need to formulate the problem as a game and look for equilibrium. It is indeed a fundamental result in game theory that equilibrium generally exists for mixed strategies rather than pure strategies in a broad class of games. Hence, it is better to consider some notion of mixed strategy, namely, at each time, the players fix a probability of stopping and decide whether or not to stop according to this probability. Such mixed strategy is also called r-
andomized stopping time in some literature, see, for example, Bayer et al. [1] and Dong [9]. Here, we model it as a doubly stochastic Poisson process. More precisely, let Θ be a random variable, which is exponentially distributed with unit intensity and independent of Brownian motion. Given a non-negative F-adapted process {πs}t≤s≤T , a random time τ is defined as
τ := inf s ∈ [t, T ] :
Zs
t
πudu ≥ Θ ∧T,
where we adopt the convention that the infimum of an empty set is infinity. It represents the time that the player chooses to stop. Literally speaking, it means that, conditioning on having not stopped before, the probability that the player stops between t and t + dt is πtdt. Under this formulation, instead of choosing a stopping time, the player chooses the intensity process π to optimize the MV objective function. From the results of doubly stochastic Poisson processes (see Jeanblanc et al. [12-
] for details), one can compute that, for any function φ,
E [φ(Xτ )|FT ] =
ZT
t
φ(Xs)πse− R s
t πududs + φ(XT )e− R T
t πudu.
Then, we have that
Et,x[φ(Xτ )] = Et,x[E[φ(Xτ )|FT ]] = Et,x
"
ZT
t
φ(Xs)πse− R s
t πududs + φ(XT )e− R T
t πudu
#
.
Thus, the MV criteria can be rewritten as
Et,x [f (Xτ )] − γ
2 Vart,x [f (Xτ )]
=Et,x
"
ZT
t
(f − γ
2 f 2)(Xs)πse− R s
t πududs + (f − γ
2 f 2)(XT )e− R T
t πudu
#
+γ
2 Et,x
"
ZT
t
f (Xs)πse− R s
t πududs + f (XT )e− R T
t πudu
#!2
.
4

However, we consider a regularized MV reward, which is defined as the following
J λ(t, x; π) := Et,x
"
ZT
t
n
(f − γ
2 f 2)(Xs)πs + λH(πs)
o
e− R s
t πududs + (f − γ
2 f 2)(XT )e− R T
t πudu
#
+γ
2 Et,x
"
ZT
t
f (Xs)πse− R s
t πududs + f (XT )e− R T
t πudu
#!2
, (2)
where the function H is given by H(π) = π − π log π and λ is a positive constant. The regularization term prevents the intensity taking values 0 and ∞, which refers to continue and stop deterministically. This provides mathematically tractability for the problem, which one can derive the related HJB equations. The motivation comes from [9] in the study of reinforcement learning method for optimal stopping problem, where H is referred as unnormalized entropy to encourage randomness in the strategy.-
 We will let λ tend to zero to go back to the original problem. Dong [9] proves that the HJB equations converge for optimal stopping problem. To our best knowledge, it is still an open problem for MV stopping problem, but, formally, we will see that the extended HJB equation converge to some system that gives an equilibrium stopping time for MV problem. Since we focus on extended HJB equation, we shall restrict to the Markovian strategies, i.e., πs = π(s, Xs) for some deterministic function π. Sim-
ilar to [3], one can define an equilibrium in the following sense.
Definition 2.1. A strategy π∗ is called an equilibrium strategy, if for any ε, v > 0 and t ∈ [0, T ), define the perturbed policy πε,v as
πε,v(s, x) =
(
v, if t ≤ s ≤ t + ε;
π∗(s, x) if s > t + ε,
and it holds that
lim inf
ε→0
J λ(t, x; π∗) − J λ(t, x; πε,v)
ε ≥ 0, a.s.,
for any initial state x.
3 Extended HJB Equation for Regularized Problem
In this section, we derive the extended HJB equation for the regularized MV problem. To this end, we first define an operator L as, for any smooth function φ,
(Lφ)(t, x) := 1
2 tr(σσT (t, x)∂xxφ(t, x)) + b(t, x)∂xφ(t, x).
We have the following verification theorem.
Theorem 3.1. For a Markovian strategy π∗ = π∗(t, x), let (V λ, gλ) be a classical solution of the following parabolic system

  
  
∂tV λ + LV λ + λ exp(− V λ + γ
2 (f − gλ)2 − f
λ ) − γ|σ∂xgλ|2 = 0, V λ(T, x) = f (x),
∂tgλ + Lgλ − exp(− V λ + γ
2 (f − gλ)2 − f
λ )(gλ − f ) = 0, gλ(T, x) = f (x).
(3)
Assume that V λ, gλ, their derivatives (up to first order in t and second order in x) and π are all continuous with polynomial growth in x, uniformly in t. Then π∗ is an equilibrium strategy if and only if
π∗(t, x) = exp(− V λ + γ
2 (f − gλ)2 − f
λ ). (4)
5

Proof. The proof consists of two steps:
1. We start by showing that gλ(t, x) = Et,x[f (Xτ )] and V λ(t, x) = J λ(t, x; π∗);
2. In the second step, we prove that π∗ is an equilibrium if and only if (4) holds.
For the first step, applying Itˆo formula to gλ(s, Xs)e− R s
t π∗(u,Xu)du, we have that
d gλ(s, Xs)e− R s
t π∗(u,Xu)du =e− R s
t π∗(u,Xu)du (∂t + L)gλ(s, Xs) − π∗(u, Xu)gλ(u, Xu) ds
+ σ∂xgλ(s, Xs)e− R s
t π∗(u,Xu)dudWs.
From the growth assumption on the derivative of gλ, it holds that the stochastic integral is a martingale. Thus, taking conditional expectation, one can verify that
gλ(t, x) = Et,x
"
ZT
t
f (Xs)π∗(s, Xs)e− R s
t π∗(u,Xu)duds + f (XT )e− R T
t π∗(u,Xu)du
#
,
Then, define the function hλ as hλ = V λ − γ
2 (gλ)2. It is easy to see that hλ solves
(∂t + L)hλ(t, x) + π∗(t, x)(f − γ
2 f 2 − hλ)(t, x) + λH(π∗) = 0, hλ(T, x) = f (x) − γ
2 f 2(x).
Similarly, one can verify that
hλ(t, x) = Et,x
"
ZT
t
n
(f − γ
2 f 2)(Xs)π∗(s, Xs) + λH(πs)
o
e− R s
t π∗(u,Xu)duds + f (XT )e− R T
t π∗(u,Xu)du
#
.
This implies that Jλ(t, x; π∗) = hλ(t, x) + γ
2 gλ(t, x) = V λ(t, x).
Next, we prove the second step. For any t, ε and v, consider the perturbed strategy πε,v. Since πε,v coincides with π∗ after time t + ε, it holds that
J λ(t, x; πε,v) =Et,x
Z t+ε
t
n
(f − γ
2 f 2)(Xs)v + λH(v)
o
e−v(s−t)ds + hλ(t + ε, Xt+ε)e−vε
+γ
2 Et,x
Z t+ε
t
f (Xs)ve−v(s−t)ds + gλ(t + ε, Xt+ε)e−vε
2
.
Applying Itˆo formula to gλ(s, Xs)e−v(s−t) and taking conditional expectation, we get that
Et,x[gλ(t + ε, Xt+ε)e−vε] = gλ(t, x) + Et,x
Z t+ε
t
(∂t + L)gλ(s, Xs)e−v(s−t) − vgλ(s, Xs)e−v(s−t)ds .
Then, it holds that
Et,x
Z t+ε
t
f (Xs)ve−v(s−t)ds + gλ(t + ε, Xt+ε)e−vε
=gλ(t, x) + Et,x
Z t+ε
t
(∂t + L)gλ(s, Xs)e−v(s−t) + v(f − gλ)(s, Xs)e−v(s−t)ds
=gλ(t, x) + (∂t + L)gλ(t, x) + v(f − gλ)(t, x) ε + o(ε),
where the last equality is due to the fact that the related functions are continuous and X also has continuous trajectories. Thus, we get that
Et,x
Z t+ε
t
f (Xs)ve−v(s−t)ds + gλ(t + ε, Xt+ε)e−vε
2
=(gλ)2(t, x) + 2gλ(t, x) (∂t + L)gλ(t, x) + v(f − gλ)(t, x) ε + o(ε).
6

With a similar argument, one also have that
Et,x
Z t+ε
t
n
(f − γ
2 f 2)(Xs)v + λH(v)
o
e−v(s−t)ds + hλ(t + ε, Xt+ε)e−vε
=hλ(t, x) + (∂t + L)hλ(t, x) + v(f − γ
2 f 2 − hλ)(t, x) + λH(v) ε + o(ε).
Combining these estimations together, we get that
J λ(t, x; πε,v) =hλ(t, x) + γ
2 (gλ)2(t, x) + (∂t + L)hλ(t, x) + γgλ(t, x)(∂t + L)gλ(t, x)
+ v(f − γ
2 f 2 − hλ + γgλf − γ(gλ)2)(t, x) + λH(v) ε + o(ε).
From the equations satisfied by gλ and hλ, also noting that Jλ(t, x; π∗) = hλ(t, x) + γ
2 (gλ)2(t, x), we derive that
εli→m0
J λ(t, x; π∗) − J λ(t, x; πε,v) ε
=(v − π∗(t, x))(f − γ
2 f 2 − hλ + γgλf − γ(gλ)2)(t, x) + λ(H(v) − H(π∗(t, x))).
Hence, π∗ is an equilibrium strategy if and only if
π∗(t, x) ∈ argmaxvv(f − γ
2 f 2 − hλ − γ(gλ)2 + γgλf )(t, x) + λH(v),
which implies that π∗ satisfies the optimality condition (4).
To our best knowledge, it is still a hard open problem to prove existence and/or uniqueness for solutions of an extended HJB system with a general assumption. In linear-quadratic meanvariance problem, one can reduce it to an ODE system and obtain a solution, see [5]. For the solvability of (3), we give an existence result with additional technical assumptions on the coefficients and a small time interval.
Theorem 3.2. In addition to Assumption 2.1, we further assume that the coefficients b,σ and f are uniformly bounded. Then, for a sufficiently small T , (3) admits a classical solution (V λ, gλ).
Proof. The solution is to be considered as a fixed point of a contraction mapping. For that purpose, denote by K the Banach space C([0, T ], C1(Rd)) equipped with the norm ∥l∥K = supt,x |l(t, x)| + supt,x |∂xl(t, x)|. For any l ∈ K, define a mapping F as k = F (l) is the solution of the following system

  
  
∂tv + Lv + λ exp(− v + γ
2 (f − l)2 − f
λ ) − γ|σ∂xl|2 = 0, v(T, x) = f,
∂tk + Lk − exp(− v + γ
2 (f − l)2 − f
λ )(k − f ) = 0, k(T, x) = f.
(5)
Let Bm(0) be the ball in K centered at 0 with radius m = ∥f ∥∞ + ∥∂xf ∥∞ + 1. We are to show that, for a sufficiently small T , F is a contraction from Bm(0) into itself and, thus, admits a fixed point, which would be the solution of (3). The proof consists of several steps:
Step 1. Well-posedness of first equation. Choose any N > 0, let ξN be a smooth cutoff function such that ξN (x) = x, for x ≤ N ; and ξN (x) = N + 1, for x ≥ N + 1. Consider the following equation
∂tv + Lv + λ exp(ξN (− v + γ
2 (f − l)2 − f
λ )) − γ|σ∂xl|2 = 0, v(T, x) = f.
7

Noting that the third term is a bounded Lipschitz function of v, it admits a solution v. Lemma B.1 yields that
−C(∥f ∥∞ + λ exp( N + 1
λ )) ≤ v ≤ C(T m2 + ∥f ∥∞).
Let us give a refined lower bound estimation independent of N , which implies that v solves the first equation in (5) when N is sufficiently large. Denote by ψ(x) = p1 + |x|2. One can compute that
Dxψ = x
p1 + |x|2 and D2
xψ = 1
p1 + |x|2 I − 1
(1 + |x|2) 1
2
x ⊗ x,
and, thus, Lψ ≤ C. Since v is a bounded function, it holds that, for any ε > 0, v + εψ attains a minimum at some point (t∗, x∗). If t∗ = T , then the terminal condition implies that
v ≥ −∥f ∥∞ − εψ.
If t∗ < T , it holds that, at (t∗, x∗),
D2
xv ≥ −εD2
xψ, Dxv = −εDxψ, and ∂tv ≥ 0.
This yields that (∂t + L)v(t∗, x∗) ≥ −εLψ ≥ −Cε. On the other hand, we have
(∂t + L)v = γ|σDxl|2 − λ exp(ξN (− v + γ
2 (f − l)2 − f
λ )).
Combining these two inequalities, we get that
λ exp(ξN (− v + γ
2 (f − l)2 − f
λ )) ≤ γ|σDxl|2 + Cε,
or, equivalently,
ξN ( f − v − γ
2 (f − l)2
λ ) ≤ log γ|σ∂xl|2 + Cε
λ.
This implies that, at (r∗, x∗),
v ≥ f − λ log γ|σ∂xl|2 + Cε
λ.
Thus, we have a lower bound estimation
v ≥ −∥f ∥∞ + λ log γCm2 + Cε
λ − εψ.
Letting ε go to 0, we finally get that
v ≥ −∥f ∥∞ + λ log γCm2
λ.
Step 2. Bound and derivative estimations for k. Note that the second estimation of (5) is just a linear equation of k. The well-posedness is straight-forward and one obtains the following bound estimation from Lemma B.1
∥k∥∞ ≤ ∥f ∥∞.
To give estimation of the derivative, note that, from lower bound estimation for V in the first step, it holds that
exp(− v + γ
2 (f − l)2 − f
λ ) ≤ ( γCm2
λ )C
λ (1+∥f ∥2
∞ +m2 ) .
8

Hence, using Lemma B.1 again, we have that
∥∂xk∥∞ ≤ (1 +
√
T )∥∂xf ∥∞ + C(
√
T + T )( γCm2
λ )C
λ (1+∥f ∥2
∞ +m2 ) .
Then, for a sufficiently small T , F is mapping from Bm(0) into itself.
Step 3. Contraction of the mapping F . For any hi ∈ Bm(0) with i = 1, 2, let (vi, ki) be the related solutions of (5). Denote by δv = v1 − v2, δk = k1 − k2, and δl = l1 − l2. Then, we that (δv, δk) satisfy

 
 
(∂t + L)δv − δe(δv − γ
2 (2f − l1 − l2)δl) − γ(|σ∂xl1|2 − |σ∂xl2|2) = 0, δv(T, x) = 0,
(∂t + L)δk − exp(− v1 + γ
2 (f − l1)2 − f
λ )δk + (k2 − f )δe δv − γ
2 (2f − l1 − l2)δl
λ = 0, δk(T, x) = 0.
(6) with
δe =
Z1
0
exp(− v1 + γ
2 (f − l1)2 − f + s(δv − γ
2 (2f − l1 − l2)δl)
λ )ds.
From the estimation in previous step, we know that the related functions vi, ki and hi are uniformly bounded. Thus, δe is a bounded function. Moreover, one gets that
∥δe γ
2 (2f − l1 − l2)δl∥∞ ≤ γ
2 ∥δe(2f − l1 − l2)∥∞∥δl∥∞ ≤ C∥δl∥∞,
and
∥|σDxl1|2 − |σDxl2|2∥∞ ≤ C∥σDxl1 + σDxl2∥∞∥σDxl1 − σDxl2∥∞ ≤ C∥σDxl1 − σDxl2∥∞.
Then, using Lemma B.1 again, we have that there exists a constant C depending on the coefficients, m and λ such that
∥δv∥∞ ≤ CT (∥δl∥∞ + ∥∂xδl∥∞.
Furthermore, with a similar argument,
∥δk∥∞ ≤ CT ∥(k2 − f )δe δv − γ
2 (2f − l1 − l2)δl
λ ∥∞ ≤ CT (∥δv∥∞ + ∥δl∥∞).,
and
∥∂xδk∥∞ ≤C(
√
T + T )(∥(k2 − f )δe δv − γ
2 (2f − l1 − l2)δl
λ ∥∞ + ∥ exp(− v1 + γ
2 (f − l1)2 − f
λ )δk∥∞)
≤C (
√
T + T )(∥δv∥∞ + ∥δl∥∞ + ∥δk∥∞).
Combining these estimations, we see that F is a contraction for a sufficiently small T .
4 Extended HJB Equation for Original Problem
For the optimal stopping problem, i.e., γ = 0, [9] proves that the first equation in (3) converges to the variational inequality satisfied by the value function. For MV stopping problem, we would like follow the same procedure. Unfortunately, at present, we can only formally deduce the limiting equation. Below is a brief introduction. Assume that (V λ, gλ) converge to some functions (V, g) when λ goes to 0 Then, it is natural to conjecture that
∂tV + LV − γ |σ∂xg|2 = λli→m0 ∂tV λ + LV λ − γ σ∂xgλ 2 ≤ 0.
9

If ∂tV λ + LV λ and ∂xgλ are bounded uniformly in λ, then so is λ exp(− V λ+ γ
2 (f −gλ)2−f
λ ). This
suggests that V + γ
2 (f − g)2 ≥ f . Moreover, if V + γ
2 (f − g)2 > f , one has exp(− V λ+ γ
2 (f −gλ)2−f
λ)
converges to 0, which implies ∂tV + LV − γ |σ∂xg|2 = 0, and ∂tg + Lg = 0. From (3), it is
not clear what is satisfied by g on the set {V + γ
2 (f − g)2 = f }. But, from the probabilistic
representation of gλ, one also guess that g(t, x) = Et,x[f (Xτ )] for a stopping time τ . If τ is the
hitting time of the set {V + γ
2 (f − g)2 = f }, Then, g should equal to f on that set. In summary, (3) formally converges to the following system

    
    
min
n
− ∂tV + LV − γ |σ∂xg|2 , V + γ
2 (f − g)2 − f
o
= 0, V (T, x) = f,
∂tg + Lg = 0, on {V + γ
2 (f − g)2 > f },
g = f on {V + γ
2 (f − g)2 = f }, g(T, x) = f (x).
(7)
Now, let us assume that the above system admits a pair of solution (V, g). The means that (V, g) is a pair of continuous functions, second-order continuous differentiable in the region {V + γ
2 (f − g)2 > f } and satisfies (7). Define the set
C = {(t, x)|V + γ
2 (f − g)2 > f }.
Construct the stopping time τC as
τC = inf{s ≥ t|(s, Xs) ∈/ C}.
One can verify that
V (t, x) = Et,x [f (XτC )] − γ
2 Vart,x [f (XτC )] , and g(t, x) = Et,x [f (XτC )] .
Moreover, we also define
h(t, x) := V (t, x) − γ
2 g2(t, x) = Et,x
h
(f − γ
2 f 2)(XτC )
i
.
Next, we prove that these functions characterize a stopping policy that is an equilibrium in some sense. Before that, let us first introduce some definitions. For any (t, x) ∈ R × Rn and r > 0, the parabolic cylinder Q(t, x; r) is defined as3
Q(t, x; r) := {(s, y) ∈ R × Rn| max{|x − y|, (s − t) 1
2 } ≤ r, s ≥ t}.
For any set Ω, the parabolic boundary PΩ is defined as the set of all points (t, x) ∈ Ω ̄ such that for any ε > 0, Q(t, x; ε) contains points not in Ω. Finally, note that, since C is a open set, for any (t, x) ∈ C, there exists ε > 0 such that Q(t, x; ε) ∈ C. The notion of equilibrium strategy is similar to that used in [7]. For any v ≥ 0, let N v be a Poisson point process independent of the Brownian motion W . Its first jump time after t is denoted as τ v, i.e., τ v = inf {s ≥ t|Ns − Nt = 1} .
For any ε, define two stopping time
τ ε = inf {s ≥ t||Xs − Xt| ≥ ε} ∧ (t + ε) ∧ T,
and
τ ̃C = inf {s ≥ τ ε|(s, Xs) ∈/ C} .
The perturbation τ ε,v
C of τC is defined as,
τ ε,v
C = 1{τ v≤τ ε}τ v + 1{τ v>τ ε}τ ̃C .
3The definition of parabolic cylinders is different from that in text books of parabolic PDEs, see [13]. The reason is that we consider PDEs with terminal conditions instead of initial conditions.
10

Theorem 4.1. Assume that there exists a solution (V, g) of (7) such that the functions and their derivatives are polynomial-growth w.r.t. x uniformly in t. For any (t, x) ∈ C ∪ (Cc/PCc), it holds that
lim inf
ε→0
J (t, x; τC) − J (t, x; τ ε,v
C)
Et,x[τ ε − t] ≥ 0.
Proof. From the definition of τ ε,v
C , it holds that
Et,x
h
f (Xτ ε,v
C)
i
=Et,x
"
Z τε
t
f (Xs)ve−v(s−t)ds + f (Xτ ̃C )e−v(τε−t)
#
=Et,x
"
Z τε
t
f (Xs)ve−v(s−t)ds + g(τ ε, Xτε )e−v(τε−t)
#
.
Note that, for sufficiently small ε, Xs stays in C or Cc for s ∈ [t, τ ε] as we assume that (t, x) ∈ C ∪ (Cc/PCc). Thus, one can apply Itoˆ formula to get that
Et,x
h
g(τ ε, Xτε )e−vτε i
=g(t, x) + E
"
Z τε
t
(∂t + L)g(s, Xs)e−v(s−t) − vg(s, Xs)e−v(s−t)ds
#
.
Then, we have
Et,x
h
f (Xτ ε,v
C)
i
=g(t, x) + ((∂t + L)g(t, x) + v(f − g)(t, x)) E [τ ε − t] + o(E [τ ε − t]),
which implies that
Et,x
h
f (Xτ ε,v
C)
i2
=g2(t, x) + 2g(t, x) ((∂t + L)g(t, x) + v(f − g)(t, x)) E [τ ε − t] + o(E [τ ε − t]).
Similarly, it holds that
Et,x
h
(f − γ
2 f 2)(Xτ ε,v
C)
i
=h(t, x) + (∂t + L)(h) + v(f − γ
2 f 2 − h) E [τ ε − t] + o(E [τ ε − t]).
Hence, recalling that h = V − γ
2 g2,
J (t, x; τ ε,v
C ) − J (t, x; τC)
=((∂t + L)h + γg(∂t + L)g + v(f − (V + γ
2 (f − g)2)))E[τ ε − t] + o(E[τ ε − t])
=((∂t + L)V − γ|σ∂xg|2 + v(f − (V + γ
2 (f − g)2)))E[τ ε − t] + o(E[τ ε − t]).
The first equation in (7) implies the desired result.
For the case (t, x) ∈ PCc\{T } × R, it turns out to be a very subtle problem. Thus, we focus on one dimensional case, i.e., x ∈ R and assume that the free boundary PCc\{T } × R is locally Lipschitz continuous with respect to time t. More precisely, there exists a small ball Q(t, x; r) and a Lipschitz continuous curve c and r > 0 such that C T Q(t, x; r) = {(s, y)|t ≤ s ≤ t + r1
2 , |y − x| ≤ r, y ≥ c(s)}.
11

Theorem 4.2. In addition to the assumption in Theorem 4.1 and locally Lipschitz assumption on the free boundary, we further assume that V is C1 in Q(t, x; r). If it holds that, for (t, x) ∈ PCc\{T } × R,
(∂t + L)V (t, x+) + (∂t + L)V (t, x−) ≤ γσ2(t, x) ∂xg(t, x+) + ∂xg(t, x−)
2
2
, (8)
then we have
lim inf
ε→0
J (t, x; τC) − J (t, x; τ ε,v
C)
Et,x[τ ε − t] ≥ 0.
Proof. From Itˆo-Tanaka formula (see [15]), one can get that
g(τ ε, Xτε )e−(τε−t) = g(t, x) +
Z τε
t
1
2 (∂t + L)g(s, Xs+)e−v(s−t) − vg(s, Xs+)e−v(s−t)
+ (∂t + L)g(s, Xs−)e−v(s−t) − vg(s, Xs−)e−v(s−t) 1{Xs̸=c(s)}ds
+
Z τε
t
1
2 σ(∂xg(s, Xs+) + ∂xg(s, Xs−))e−v(t−s)dWs
+1
2
Z τε
t
(∂xg(s, Xs+) − ∂xg(s, Xs−))e−v(s−t)1{Xs=c(s)}dlc
s,
where lsc is the local time of X at the curve c. Then, we have that
Et,x
Z τε
t
1
2 (∂t + L)g(s, Xs+)e−v(s−t) − vg(s, Xs+)e−v(s−t)
+ (∂t + L)g(s, Xs−)e−v(s−t) − vg(s, Xs−)e−v(s−t) 1{Xs̸=c(s)}ds
=1
2 (((∂t + L)g(t, x+) + (∂t + L)g(t, x−) − 2vg(t, x)) E[τ ε − t] + o(E[τ ε − t]).
It is proved in Appendix A that
(Et,x[lc
τε − lc
t ])2 = σ2(t, x)Et,x[τ ε − t] + o(Et,x[τ ε − t]), (9)
which further implies that
Et,x[
Z τε
t
(∂xg(s, Xs+) − ∂xg(s, Xs−))e−v(s−t)1{Xs=c(s)}dlc
s]
!2
= (∂xg(t, x+) − ∂xg(t, x−))2 σ2(t, x)Et,x[τ ε − t] + o(Et,x[τ ε − t]).
(10)
Hence,
(Et,x[e−vτε g(τ ε, Xτε )])2 = g2(t, x) + ((∂t + L)g(t, x+) + (∂t + L)g(t, x−))g(t, x) − 2vg2
1(t, x)
+ ∂xg(t, x+) − ∂xg(t, x−)
2
2
σ2(t, x) Et,x[τ ε − t]
+ g(t, x)Et,x[
Z τε
t
(∂xg(s, Xs+) − ∂xg(s, Xs−))e−v(s−t)1{Xs=c(s)}dlc
s] + o(Et,x[τ ε − t]).
12

Similarly,
Et,x[e−vτε h(τ ε, Xτε )]
=h(t, x) + 1
2 ((∂t + L)h(t, x+) + (∂t + L)h(t, x−) − vh(t, x)) Et,x[τ ε − t]
+1
2 Et,x[
Z τε
t
(∂xh(s, Xs+) − ∂xh(s, Xs−))e−v(s−t)1{Xs=c(s)}dlc
s].
Since V = h + γ
2 g2 is C1 across c, it holds that
Et,x[
Z τε
t
(∂xh(s, Xs+) − ∂xh(s, Xs−))e−v(s−t)1{Xs=c(s)}dlc
s
+ γg(t, x)Et,x[
Z τε
t
(∂xg(s, Xs+) − ∂xg(s, Xs−))e−v(s−t)1{Xs=c(s)}dlc
s] = o(Et,x[τ ε − t]).
Then,
J (t, x; τ ε,v
C ) − J (t, x; τC) Et,x[τ ε − t]
=1
2 (∂t + L)(V − γ
2 g2)(t, x+) + γg(∂t + L)g(t, x+)
+1
2 (∂t + L)(V − γ
2 g2)(t, x−) + γg(∂t + L)g(t, x−)
+γ
2
∂xg(t, x+) − ∂xg(t, x−) 2
2
σ2(t, x) + o(1)
=1
2 (∂t + L)V (t, x+) − γ|σ∂xg|2(t, x+)
+ (∂t + L)V (t, x−) − γ|σ∂xg|2(t, x−)
+γ
2
∂xg(t, x+) − ∂xg(t, x−) 2
2
σ2(t, x) + o(1),
which gives the desired result according the assumption of the theorem.
Remark 4.1. It is a well-known result in the theory of optimal stopping that the value function is C1 across the free boundary. However, one can not expect that g is also C1, see the example given in Subsection 5.1. Note that a similar condition is also given in [7].
5 Further Discussions
5.1 Infinite Horizon Case
In this subsection, we consider an infinite horizon example that one can give an explicit solution. Let X be a geometric Brownian motion
dXt = μXtdt + σXtdWt.
Consider the MV stopping problem
J (x; τ ) = Ex [Xτ ] − γ
2 Varx [Xτ ] .
13

For this infinite horizon case, one can have an elliptic system similar to (7)

    
    
min
n
− Lv − γ
2 |σx∂xg|2 , v + γ
2 (f − g)2 − f
o
= 0,
Lg = 0, on {v + γ
2 (f − g)2 > f },
g = f on {v + γ
2 (f − g)2 = f },
(11)
with L = 1
2 σ2x2 ∂2
∂x2 + μx ∂
∂x . Denote by ρ = 2μ
σ2 and assume that ρ ∈ (0, 1/2). Let b = 2ρ
γ(1−ρ) .
Let us check that
V (x) =



(1 − γ
2 b)bρx1−ρ + γ
2 b2ρx2−2ρ, for x < b,
x, for x ≥ b,
and
g(x) =
(
bρx1−ρ, for x < b,
x, for x ≥ b,
satisfy (11). For x < b, it holds that
∂xV = (1 − ρ)(1 − γ
2 b)bρx−ρ + γ(1 − ρ)b2ρx1−2ρ,
∂xxV = −ρ(1 − ρ)(1 − γ
2 b)bρx−ρ−1 + γ(1 − ρ)(1 − 2ρ)b2ρx−2ρ,
and ∂xg = (1 − ρbρx−ρ). Thus, it is easy to check that, for x < b, LV − γ
2 |σx∂xg|2 = 0 and Lg = 0. When x ≥ b, it is easy to see that ∂xV = ∂xg = 1 and ∂xxV = 0. Hence,
LV − γ
2 |σx∂xg|2 = μx − γ
2 σ2x2 = γ
2 σ2x( ρ
γ − x) ≤ 0.
Now let us verify that V + γ
2 (x − g)2 > x for x < b. Direct computation yields that
V +γ
2 (x − g)2
=(1 − γ
2 b)bρx1−ρ + γ
2 b2ρx2−2ρ + γ
2 (x − bρx1−ρ)2
=γ
2 x2 + γb2ρx2−2ρ − γbρx2−ρ + (1 − γ
2 b)bρx1−ρ
=x γ
2 x + γb2ρx1−2ρ − γbρx1−ρ + (1 − γ
2 b)bρx−ρ .
Thus, we have to show that γ
2 x + γb2ρx1−2ρ − γbρx1−ρ + (1 − γ
2 b)bρx−ρ > 1 for x < b. For
that purpose, define a function κ(z) = γ
2 bz2ρ−1 + (1 − γ
2 b)zρ. Let us find its infimum on [1, ∞).
Taking derivative with respect to z, we see that κ′(z) = zρ−1((2ρ − 1) γ
2 bzρ−1 + (1 − γ
2 b)ρ). Since
ρ≤ 1
2 and z ≥ 1, it holds that
(2ρ − 1) γ
2 bzρ−1 + (1 − γ
2 b)ρ ≥ (2ρ − 1) γ
2 b + (1 − γ
2 b)ρ = 0,
where we use the fact that b = 2ρ
γ(1−ρ) . This implies that κ is strictly increasing on [1, ∞) and taking minimum at z = 1, which equals to 1. Then, for x < b,
γ
2 x + γb2ρx1−2ρ − γbρx1−ρ + (1 − γ
2 b)bρx−ρ
=γ
2 x(1 − bρx−ρ)2 + γ
2 b2ρx1−2ρ + (1 − γ
2 b)bρx−ρ
≥κ(bx−1) > 1.
14

Thus, (V, g) is a solution of (11). On x = b, we can check that
LV (b−) = γ
2 σ2b2(1 − ρ)2, LV (b+) = μb, ∂xg(b−) = 1 − ρ, and ∂xg(b+) = 1.
Then,
LV (b−) + LV (b+) = γ
2 σ2b2(1 − ρ)2 + μb = σ2b( γ
2 b(1 − ρ)2 + ρ) = σ2bρ(2 − ρ),
and
γσ2b2 1 + 1 − ρ
2
2
= σ2b(2 − ρ) (2 − ρ)γb
4 = σ2b(2 − ρ)ρ 2 − ρ
2 − 2ρ > σ2b(2 − ρ)ρ.
Thus, the stopping time is an equilibrium. Moreover, one can also compute that V ′(b+) = V ′(b−), g′1(b−) = 1 − ρ and g′1(b+) = 1.
This suggests that one can expect V to be C1, but g not C1, so one can not assume that g is C1 across the free boundary.
5.2 Discrete Time Approximation
For many time-inconsistent problems, the equilibrium solution in continuous time is regarded as the limit of its counterpart in discrete-time models. This is the logical structure of the derivation for extended HJB equation, see [4]. For that reason, we would like to check that whether one can get the same equation by considering the discrete time MV stopping problem. Let ∆t = T
N and tk = k∆t for k = 0, 1, ..., N . We assume that one can only stop at these time points. Recursively define a sequence of stopping times {τi}i=0,1,...,N as the follows. Set τN = tN , U (N, x) = f (x), and V (N, x) = f (x). For i = N − 1, N − 2, ..., 0, define
U (i, x) := Eti,x[f (Xτi+1 )] − γ
2 Varti,x[f (Xτi+1 )],
τi := ti, if f (Xti ) ≥ Ui(Xti ),
τi+1, if f (Xti ) < Ui(Xti ),
and
V (i, x) := Eti,x[f (Xτi )] − γ
2 Varti,x[f (Xτi )].
Moreover, we also define g(i, x) := Eti,x[f (Xτi )]. The motivation of these definitions are the following. We view the MV stopping problem from a game-theoretic perspective as a noncooperative game. We have one player at each time point tn, who can only choose the stopping decision at tn. The stopping time τi represent the time the process being stopped conditioned on its has not been stopped before ti. Player n has two options: to stop immediately or to continue. The reward of the first option i-
s f (Xti ). Choosing to continue, the process is stopped at time τi+1 and the expected reward is given by U (i, Xti ). Thus, the strategy of player n is to decide to stop when f (Xti ) ≥ U (i, Xti ). Now let us check the equation satisfied by Vi. It is easy to see that V (i, x) ≥ f (x). If V (i, x) > f (x), it implies that τi = τi+1. In this case, it holds that
V (i, x) = U (i, x) = Eti,x[V (i + 1, Xti+1 )] − γ
2 Varti,x[g(i + 1, Xti+1 )].
Combining two situations, we have
min
n
V (i, x) − Eti,x[V (i + 1, Xti+1 )] − γ
2 Varti,x[g(i + 1, Xti+1 )] , V (i, x) − f (x)
o
= 0.
15

Now we let ∆t go to zero. Formally, one see that
Eti,x[V (i + 1, Xti+1 )] − V (i, x) = (∂tV + LV )(ti, x)∆t + o(∆t),
and
Varti,x[g(i + 1, Xti+1 )] = Eti,x[g2(i + 1, Xti+1 )] − Eti,x[g(i + 1, Xti+1 )] 2
=g2(i, x) + (∂t + L)g2∆t − (g(i, x) + (∂t + L)g∆t)2 o(∆t)
=(∂t + L)g2∆t − g(∂t + L)g∆t + o(∆t)
=|σ∂xg|2∆t + o(∆t).
Hence, we get the following system

  
  
min
n
− ∂tV + LV − γ |σ∂xg|2 , V − f
o
= 0, V (T, x) = f,
∂tg + Lg = 0, on {V > f },
g = f on {V = f }, g(T, x) = f (x).
(12)
Note that this equation is different from (7) with the condition V + γ
2 (f − g)2 ≥ f replaced by
V ≥ f . Clearly V ≥ f implies V + γ
2 (f − g)2 ≥ f . Moreover, on {V = f }, we also have g = f
and hence, V + γ
2 (f − g)2 = f . Thus, the solution of the above system also satisfies (7). In this sense, it seems that (7) is a more general equation. However, it remains unclear whether there exists a solution that satisfies (7), but do not satisfy (12).
5.3 General Time-inconsistent Problems
To explain the additional quadratic term in the condition V + γ
2 (f − g)2 ≥ f of (7), let us consider a more general time-inconsistent problem in which the player choose stopping time to maximize the following functional
Et,x[f (Xτ )] + G(Et,x[k(Xτ )]).
We just give some formal arguments for illustration. First, we consider the regularized problem.
For an equilibrium π∗, define g(t, x) = Et,x[k(Xτ )] and h(t, x) = Et,x[f (Xτ ) + R τ
0 λH(πs∗)ds]. Then, it holds that (g, h) solves
(
(∂t + L)h + λH(π∗) + π∗(f − h) = 0, g2(T ) = f,
(∂t + L)g + π∗(k − g) = 0, g(T ) = k.
For a purterbed strategy πε,v, one can get that
Et,x[k(Xπε,v )] = g(t, x) + ((∂t + L)g + v(k − g)) ε + o(ε),
and
Et,x[f (Xπε,v ) +
Z τ ε,v
0
λH (πε,v
s )ds]
=h(t, x) + ((∂t + L)h + v(f − h) + λH(v)) ε + o(ε).
Moreover, it holds that
G(Et,x[k(Xπε,v )]) = G(g) + G′(g) ((∂t + L)g + v(k − g)) ε + o(ε).
16

Then, one can show that π∗ is an equilibrium if and only if
π∗ = exp(− h + G′(g)g − f − G′(g)k
λ ).
Note that the value function V = h + G(g) and satisfies
(∂t + L)V + λ exp(− h + G′(g)g − f − G′(g)k
λ ) + HG(g) = 0,
where the operator HG is defined as
HG(φ) = G′(φ)Lφ − LG(φ).
We also see that
h + G′(g)g − f − G′(g)k = V − (f + G(k)) + G(k) − G(g) − G′(g)(k − g).
Denote by ∆G(k, g) = G(k) − G(g) − G′(g)(k − g). Then, when letting λ go to zero, V should converge to the following variational inequality
min {− ((∂t + L)V + HG(g)) , V − (f + G(k)) + ∆G(k, g)} = 0.
Note that the condition is written as V + ∆G(k, g) ≥ (f + G(g)). For MV case, i.e., G(k) = γ
2 k2,
∆G(k, g) = γ
2 (k − g)2, which is the same condition in (7). Moreover, define the set
C = {(t, x)|V + ∆G(k, g) > f + G(k)},
and the stopping time τC as
τC = inf{s > t|(s, Xs) ∈/ C}.
Then, one can formally verify that τC in the same sense as that in the statement of Theorem 4.1. From the previous discussion, we see that the appearance of the additional term ∆G(k, g) is due to two factors. One is that G is a non-linear function, which makes the problem timeinconsistent. The other is that, when equilibrium is under consideration, the perturbation lies within the family of relaxed strategies rather than pure strategies. This coincides with the fact in the game theory that pure st-
rategy equilibrium is different from mixed strategy equilibrium.
6 Conclusions
This paper systematically investigates the MV optimal stopping problem–a time-inconsistent stochastic optimization problem-by developing a vanishing regularization method and deriving the corresponding extended HJB equation. More precisely, to tackle the mathematical intractability of direct equilibrium analysis, we introduce a regularized problem, which enables rigorous derivation of the equilibrium strategy and the associated extended HJB equation. Then, letting λ → 0, i.e. vanishing regularizat-
ion, we formally recover a system of parabolic variational inequalities (7) for the original MV problem. This system characterizes equilibrium stopping times and includes a key quadratic term γ
2 (f − g)2–a distinction from classical optimal stopping, where stopping conditions depend only on comparing the value function to the instantaneous reward. By extending the analysis to general time-inconsistent problems, we demonstrate that the additional term in our stopping condition arises from the non-linearity of the objective (responsible for time inconsistency) and the use of mixed strategies. This work provides a rigorous mathematical foundation for MV stopping problems, with potential ap-
plications in financial decision-making (e.g., asset sale timing, portfolio liquidation) and statistical inference (e.g., risk-aware hypothesis testing stopping rules). However, there are still some open problems left for future research, including proving rigorous convergence of the regularized extended HJB system to the limiting variational inequality and developing numerical algorithms to compute equilibrium stopping rules for practical applications.
17

References
[1] C. Bayer, D. Belomestny, P. Hager, P. Pigato, and J. Schoenmakers, Randomized optimal stopping algorithms and their convergence analysis, SIAM Journal on Financial Mathematics, 12 (2021), pp. 1201–1225.
[2] E. Bayraktar, Z. Wang, and Z. Zhou, Equilibria of time-inconsistent stopping for one-dimensional diffusion processes, Mathematical Finance, 33 (2023), pp. 797–841.
[3] T. Bjo ̈rk, M. Khapko, and A. Murgoci, On time-inconsistent stochastic control in continuous time, Finance and Stochastics, 21 (2017), pp. 331–360.
[4] T. Bj ̈ork, M. Khapko, A. Murgoci, et al., Time-inconsistent control theory with finance applications, vol. 732, Springer, 2021.
[5] T. Bj ̈ork, A. Murgoci, and X. Y. Zhou, Mean–variance portfolio optimization with state-dependent risk aversion, Mathematical Finance: An International Journal of Mathematics, Statistics and Financial Economics, 24 (2014), pp. 1–24.
[6] S. Christensen and K. Lindensj ̈o, On finding equilibrium stopping times for timeinconsistent markovian problems, SIAM Journal on Control and Optimization, 56 (2018), pp. 4228–4255.
[7] S. Christensen and K. Lindensj ̈o, On time-inconsistent stopping problems and mixed strategy stopping times, Stochastic Processes and their Applications, 130 (2020), pp. 28862917.
[8] M. Dai, Y. Dong, and Y. Jia, Learning equilibrium mean-variance strategy, Mathematical Finance, 33 (2023), pp. 1166–1212.
[9] Y. Dong, Randomized optimal stopping problem in continuous time and reinforcement learning algorithm, SIAM Journal on Control and Optimization, 62 (2024), pp. 1590–1614.
[10] K. D. Elworthy and X.-M. Li, Formulae for the derivatives of heat semigroups, Journal of Functional Analysis, 125 (1994), pp. 252–286.
[11] L. He and Z. Liang, Optimal investment strategy for the dc plan with the return of premiums clauses in a mean–variance framework, Insurance: Mathematics and Economics, 53 (2013), pp. 643–649.
[12] M. Jeanblanc, M. Yor, and M. Chesney, Mathematical methods for financial markets, Springer Science & Business Media, 2009.
[13] G. M. Lieberman, Second order parabolic differential equations, World scientific, 1996.
[14] H. M. Markowitz, Portfolio selection: efficient diversification of investments, Yale university press, 2008.
[15] G. Peskir and A. Shiryaev, Optimal stopping and free-boundary problems, Springer, 2006.
[16] R. H. Strotz, Myopia and inconsistency in dynamic utility maximization, The review of economic studies, 23 (1955), pp. 165–180.
[17] A. Tartakovsky, I. Nikiforov, and M. Basseville, Sequential analysis: Hypothesis testing and changepoint detection, CRC press, 2014.
A Proof of (9)
Define another stopping time τ ̃ε as
τ ̃ε = inf{s ≥ t||Xs − Xt| ≥ ε}.
18

Note that τ ε coincides to τ ̃ε on the set {τ ̃ε < t + ε}. Then, we claim that
εli→m0
ε2
Et,x[τ ̃ε − t] = σ2(t, x). (13)
To prove the claim, we follow the same argument as that in the proof of Lemma 5.5 in [7]. For any a > 1
σ2(t,x) , define a function F as F (t, y) = a(y − x)2 − t. It is easy to see that
(∂t + L)F (s, y) = 2aμ(s, y)(y − x) + aσ2(s, y) − 1,
which is greater than 0 for {(s, y)||y − x| ≤ ε, s − t ≤ ε} with a sufficiently small ε. Thus, applying Itˆo formula to F (s, Xs) and taking conditional expectation, it holds that
Et,x[τ ̃ε − t] ≤ aEt,x[|Xτ ̃ε − x|2] = aε2.
Similarly, one also has
Et,x[τ ̃ε − t] ≥ aε2,
for a < 1
σ2(t,x) . Combining these two estimations give the claim (13). Using Chebyshev’s inequality, we also have that
P (τ ̃ε > t + ε) ≤ Et,x[τ ̃ε − t]
ε = O(ε). (14)
The argument for (13) also yields that
hli→m0
Et,x[|Xτε − x|2]
Et,x[τ ε − t] = σ2(t, x).
Note that, using (14),
ε2 ≥ Et,x[|Xτε − x|2] ≥ ε2P (τ ε < t + ε) = ε2 − ε2P (τ ε = t + ε) = ε2 + o(ε2).
Hence, we get that
Et,x[τ ε − t] = 1
σ2(t, x) ε2 + o(ε). (15)
Let k(t, y) := |c(t) − y|. From Itˆo-Tanaka formula, one has that
k(τ ε, Xτε ) =
Z τε
t
1
2 ((∂t + L)k(s, Xs+) + (∂t + L)k(s, Xs−))ds
+
Z τε
t
1
2 σ(∂yk(s, Xs+) + ∂yk(s, Xs−))dWs
+
Z τε
t
1
2 (∂yk(s, Xs+) − ∂yk(s, Xs−))1{Xs=c(s)}dlc
s.
Note that, for Xs = c(s), ∂yk(s, Xs+) = 1 and ∂yk(s, Xs+) = −1. Thus,
(Et,x[k(τ ε, Xτε )])2 = (Et,x[lc
τε − lc
t ])2 + o(Et,x[τ ε − t]). (16)
When t is fixed, for sufficienly small ε,
Et,x[k(τ ε, Xτε )] =Et,x[|x + ε − c(τ ε)|1{Xτε=x+ε}] + Et,x[|x − ε − c(τ ε)|1{Xτε=x−ε}]
+ Et,x[|Xτε − c(τ ε)|1{τε=t+ε}].
19

We estimate the right hand side term by term. Estimations for the first two term are similar. It holds that
Et,x[|x ± ε − c(τ ε)|1{Xτε=x±ε}] ≤ Et,x[(|x ± ε − c(t)| + |c(t) − c(τ ε)|) 1{Xτε=x±ε}]
≤ p±ε + CEt,x[τ ε − t] = p± + O(ε2),
where p± = P (Xτε = x±ε) and the last inequality is due to the assumption that c(·) is Lipschitz continuous. For the last term,
Et,x[|Xτε − c(τ ε)|1{τε=t+ε}] =Et,x[|Xτε − c(t) + c(t) − c(τ ε)|1{τε=t+ε}]
≤CεP (τ ε = t + ε) = CεP (τ ̃ε > t + ε) = O(ε2).
Combining these estimations, we get that
E[k(τ ε, Xτε )] = (p− + p+)ε + O(ε2) = ε + O(ε2), (17)
where we use (14) again to get the last equality. Hence, (15),(16) and (17) yield that
εli→m0
(Et,x[lτcε − ltc])2
Et,x[τ ε − t] = σ2(t, x).
B A Key Lemma
Lemma B.1. Let φ be the solution of
(∂t + L)φ + cφ = g, φ(T, x) = f,
with c, g being bounded continuous functions and f also bounded with bounded derivatives. Then
1. There exists a constant C depending on the coefficients such that
−C(∥f −∥∞ + T ∥g−∥∞) ≤ φ ≤ C(∥f +∥∞ + T ∥g+∥∞),
where f ± represents the positive and negative part of f respectively. If c ≤ 0, the constant C can be chosen to be 1.
2. Assuming that c ≡ 0, we have
∥∂xφ∥∞ ≤ (1 + C
√
T )∥∂xf ∥∞ + C(
√
T + T )∥g∥∞.
Proof. From Feymann-Kac representation, it holds that
φ(t, x) = Et,x
"
e
RT
t c(u,Xu)duf (XT ) +
ZT
t
e
Rs
t c(u,Xu)dug(s, Xs)ds
#
.
Then, one can easily get the first estimation from the assumptions on the coefficients. To prove the second estimation, define two processes ∇X and N as
d∇X = ∂xb(Xt)∇Xtdt + ∂xσ(Xt)∇XtdWt, ∇Xt = I,
and
Ns = 1
s−t
Zs
t
< σ−1(Xu)∇Xu, dWu > .
One can verify that
Et,x[ sup
t≤s≤T
|∇Xs − I|2] ≤ CT , and Et,x[|Ns|2] ≤ C( 1
s − t + 1).
20

Then, using Bismut-Elworthy-Li formula [10], we get that, for any function ξ
∂xEt,x[ξ(Xs)] = Et,x[∂xξ(Xs)∇Xs] = Et,x[ξ(Xs)Ns].
Thus,
∂xφ(t, x) = Et,x[∂xf (XT )∇XT ] +
ZT
t
Et,x[g(s, Xs)Ns]ds.
Clearly, we have
|Et,x[∂xf (XT )∇XT ]| ≤ (C
√
T + 1)∥∂xf ∥∞,
and
ZT
t
Et,x[g(s, Xs)Ns]ds ≤ ∥g∥∞
ZT
t
(Et,x[|Ns|2]) 1
2 ds
≤C ∥g∥∞
ZT
t
1
(s − t) 1
2
+ 1ds = C(√T − t + (T − t))∥g∥∞.
This gives the second estimation.
21

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:36.252Z
- **Text Length:** 47308 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 21 of 21
