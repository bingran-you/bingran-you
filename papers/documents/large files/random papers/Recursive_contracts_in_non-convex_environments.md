# PDF Document: Shen et al. - 2025 - Recursive contracts in non-convex environments.pdf

**File Path:** Shen et al. - 2025 - Recursive contracts in non-convex environments.pdf

**Processed Date:** 2026-02-10T18:16:14.522Z

**File Size:** 1480.38 KB

**Total Pages:** 71

**Extracted Pages:** 71

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3167

**Title:** Recursive contracts in non-convex environments

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Recursive contracts in non-convex environments∗
Chengfeng Shen†
Felix Ku ̈bler‡
Zhennan Zhou§
November 26, 2025
Abstract
In this paper we examine non-convex dynamic optimization problems with forward looking constraints. We prove that the recursive multiplier formulation in Marcet and Marimon (2019) gives the optimal value if one assumes that the planner has access to a public randomization device and forward looking constraints only have to hold in expectations. Whether one formulates the functional equation as a sup-inf problem or as an inf-sup problem is essential for the timing of the optimal lottery and for det-
ermining which constraints have to hold in expectations. We discuss for which economic problems the use of lotteries can be considered a reasonable assumption. We provide a general method to recover the optimal policy from a solution of the functional equation. As an application of our results, we consider the Ramsey problem of optimal government policy and give examples where lotteries are essential for the optimal solution. JEL classification:
Keywords: Recursive contracts, lotteries, multiplier method, dual approach.
∗We thank Yucheng Yang and Tom Sargent as well as seminar participants at UZH for their comments. Shen and Zhou thank the support by the National Key R&D Program of China with project number 2021YFA1001200, and the NSFC with grant number 12171013. Kubler thanks the SNF for financial support. †Peking University. Email: shencf1999@pku.edu.cn ‡University of Zurich. Email: fkubler@gmail.com §Westlake University. Email: zhouzhennan@westlake.edu.cn
1
arXiv:2511.20303v1 [econ.TH] 25 Nov 2025

1 Introduction
In many economic problems (for example, in contracting problems where agents are subject to intertemporal incentive constraints, or in models of optimal policy design where agents’ reactions to government policies must be taken as constraints) the “natural state space” no longer suffices to describe optimal solutions and future promised utilities must be included in the state space (see, for example, Spear and Srivastava (1987)). This often makes the problem intractable for practical computations.-
 Marcet and Marimon (2019) provide an alternative approach for a recursive formulation of a large class of dynamic models with forward-looking constraints which has been widely used in applied work (see, among many others, Cooley et al. (2004), Kehoe and Perri (2002), Attanasio and Rıos-Rull (2000), Aiyagari et al. (2002)). Despite these applications, there remain fundamental issues with respect to the applicability of the approach. In particular, Marcet and Marimon (2019) only consider the “conve-
x case” where the objective function is concave and the constrained set convex. In many important applications, this assumption is violated. In fact, one of the two examples that Marcet and Marimon (2019) provide to illustrate the practical relevance of their method violates the assumptions – in the Ramsey model of optimal government policy, constraints consist of agents’ first-order conditions and the feasible set is not convex. Since the theoretical analysis in Marcet and Marimon (2019) assumes -
the existence of a saddle point, one might fear that the method cannot be used for the important non-convex case, and the results in Pavoni et al. (2018a) and in Bloise and Siconolfi (2022) seem to confirm this fear. In this paper, we consider lottery solutions to problems with forward-looking constraints and non-convexities and show that versions of the functional equation in Marcet and Marimon (2019) can be used to obtain the optimal value of the optimization problem if the decision maker has a -
public randomization device (lotteries) at his disposal. The crucial economic question then is in what scenarios it is reasonable to require the forward-looking constraints to hold only “in expectation”. Forward looking constraints associated with time t typically impose restrictions on actions at periods t, t + 1, . . . , t + N , 1 ≤ N ≤ ∞. While constraints in the current period typically need to hold for all outcomes of the lottery, it seems natural to assume that after the first period each fo-
rward looking constraint only needs to hold in expectations. In most applications, these are constraints on agents’ future utility or marginal utility, and the assumption of expected utility then implies that under randomization the constraints should hold in expectations. Non-convex optimization problems are challenging to solve even in the absence of forwardlooking constraint. The numerical difficulties that arise have sparked substantial interest in exploring lottery solutions to models with no-
n-convexities (see, e.g. Myerson (1982); Prescott and Townsend (1984); Stiglitz (1982) for classical contributions). In this approach, it is assumed that there is a public randomization device and decision makers can base their actions on the outcome of the randomization. This reformulation linearizes the constraints in the probability space and results in a convex problem. Our paper makes four contributions. First, we prove that the dual problem considered in Pavoni et al. (2018a) gives the corre-
ct value if one allows for arbitrary lotteries over and all forward looking constraints need to hold only in expectations. Following Pavoni et al. (2018a), we show that the dual problem can be formulated as a recursive functional equation (FE), similar to the one postulated in Marcet and Marimon (2019) even if the problem is not convex. We will refer to this as the inf-sup FE. Unfortunately, allowing for arbitrary lotteries often has no economic interpretation. In particular, we show that for the -
Ramsey problem of optimal government policy (Aiyagari et al. (2002)), the (full) lottery solution does not have a meaningful economic interpretation because it requires agents’ first order condition to only hold on average. An economic interpretation can
2

be restored if agents can make optimal choices in the current period depending on the outcome of the lottery in the current period but if the, due to the assumption of expected utility, next period’s marginal utilities have to be equal to today’s in expectations. Our second contribution is to show that for this case, the dual formulation in Pavoni et al. (2018a) does not give the correct value of the problem but that if one modifies the functional equation from inf-sup to sup-inf, the correct (re-
stricted) lottery solution is obtained. The resulting sup-inf FE can be analyzed with the same methods as the inf-sup FE. As Cole and Kubler (2012) and Marimon and Werner (2021) point out, it can be difficult to recover the optimal (non-lottery) policy from the solution of the functional equation if the problem is not strictly convex. The introduction of lotteries transforms non-convex problems into convex ones, but obviously not into strictly convex problems. Our third contribution is to develop -
a computational method to recover the optimal policy. The basic idea is based on the insight in Marimon and Werner (2021) that establishes a relation between the subdifferential of the value function and possible utility promises. However, unlike Marimon and Werner (2021) (who focus on the simple case without uncertainty) we provide an algorithm that chooses a promise from each subdifferential that yields the highest value of the objective function. As an application of our results, we consider a -
Ramsey problem of optimal government policy with incomplete markets (as in Aiyagari et al. (2002)). The problem is obviously not convex – however, that does not imply that for all specifications of parameters the optimal solution involves lotteries. The fourth contribution of our paper is to give an example to illustrate that lotteries might be crucial for the optimal solution in the Ramsey problem. In this example, the solution to the inf-sup functional equation is meaningless and the solution to-
 the sup-inf equation gives the correct value of the lottery solution where the government can randomize over tax rates and government debt. The remainder of the paper is organized as follows. After reviewing the existing literature, we provide a simple example to illustrate the main ideas in Section 2. Section 3 gives a general formulation of the problem and a recursive characterization of its dual. Section 4 links the value of the dual problem to lotteries and shows that the sup-inf version of t-
he functional equation gives the optimal value of a related, often economically more relevant, lottery problem. Section 5 discusses how to recover optimal policies, Section 6 considers the Ramsey model from Aiyagari et al. (2002) as an application.
1.1 Related Literature
Following Spear and Srivastava (1987), the standard method to recursively solve dynamic contracting problems treated the promised utility of the agent(s) as a state variable, and to use this state variable to capture the implicit prior promises. Marcet and Marimon (2019) (the first working paper version was dated 1994) were the first to consider using Lagrange multipliers as part of the state. Pavoni et al. (2018a) show how the dual problem can be characterized by a functional equation even in the-
 absence of convexity. They are also the first to prove the existence of Lagrange multipliers (in an appropriate space) for the problem. Cole and Kubler (2012) and Marimon and Werner (2021) discuss how optimal policies can be recovered from a solution to the function equation. As we explain in detail below, our method to recover the optimal policy is based on their work. Bloise and Siconolfi (2022) offer a seemingly alternative method to the problem based on the promised value approach. Although i-
t is not clear whether their method can be made computationally practical, they show that in many scenarios it requires fewer assumptions about randomization than the dual approach by Pavoni et al. (2018a). As we show in Appendix D, in our setup their approach turns out to be equivalent to considering the sup-inf functional equation.
3

There is a large literature on the use of lotteries in static non-convex problems. Lotteries may arise in constrained optimal allocations whenever non-convexities are present, as shown in applications ranging from stochastic tax schedules to labor market welfare programs (e.g., Weiss (1976); Arnott and Stiglitz (1988); Pavoni and Violante (2007); Gauthier and Laroque (2014)). Shen et al. (2025) are the first to exploit the equivalence of the value of the dual (Lagrangian) problem and the lottery -
problem in economics and develop an efficient computational method to approximate optimal lotteries numerically.
2 A simple example
To illustrate the main results of the paper, we first present a very simple example. Suppose a principal maximizes
V 0 = max
(ct ,lt )∞
t=0
∞
X
t=0
βt(lt − ct), lt ∈ [0, 1], ct ≥ 0 ∀t
subject to a participation constraint of an agent who has non-convex preferences over consump
tion and labor,
∞
X
t=0
βt(ct
σ − lt
σ) ≥ 0, σ ∈ (0, 1) (2.1)
Following Marcet and Marimon (2019), one can imagine the following two recursive formulations of the problem which we will refer to as the sup-inf and the inf-sup functional equations1.
V 1 = mc,alx mγin [(l − c) + γ(cσ − lσ) + βW (γ)] ,
or V 2 = mγin mc,alx [(l − c) + γ(cσ − lσ) + βW (γ)] ,
where W (γ) is a solution to
W (γ) = mc,alx [(l − c) + γ(cσ − lσ) + βW (γ)] .
In this section, we consider two examples for σ, β. In the first example, we have V 0 = V 1 < V 2, in the second example we have V 0 < V 1 = V 2. These examples seem to cast doubt on the usefulness of the recursive multiplier method in a non-convex problem. However, the main result of this paper shows that both V 1 and V 2 are the correct value of the maximization problem if the principal has access to a public randomization device (which we refer to as lotteries). The difference between V 1 and V-
 2 is due to a subtle difference in the timing between the realization of the lottery and the agent having to agree to participate in the contract. To make this clear, let P∞ denote the space of probability measures on ([0, 1] × R+)∞. One can imagine a contract that involves (independent) lotteries every period and the agent observes the first realization of that lottery before entering the contract. We refer to this case as “ex-post” lotteries. The value of the principal is given by2
V ep = max
P ∈P∞ E(ct,lt)∞
t=0 ∼P
∞
X
t=0
βt(lt − ct),
1In this simple example, they are very simple functional equations in W (.) – for the general case this naming will prove more accurate. 2The notation c0, l0 ∈ supp(P ) indicates that the pair (c0, l0) belongs to the support of P ’s marginal distribution on (c0, l0).
4

s.t. (c0
σ − l0
σ ) + E(ct,lt)∞
t=1 ∼P
∞
X
t=1
βt(ct
σ − lt
σ) ≥ 0 for all c0, l0 ∈ supp(P ).
Alternatively, one could assume that the agent has to agree to the contract before observing the first realization of the lottery. We refer to this as “ex-ante” lottery. The optimal value in this case is given by
V ea = max
P ∈P∞ E(ct,l0)∞
t=0 ∼P
∞
X
t=0
βt(lt − ct),
s.t. E(ct,lt)∞
t=0 ∼P
∞
X
t=1
βt(ct
σ − lt
σ) ≥ 0,
In this simple example, the difference between ex ante and ex post lotteries seems benign. However, we will argue below that in many applications ex ante lotteries do not have a sensible economic interpretation while ex post contracts do. In Theorem 4.5 we will prove a general result that implies V 2 = V ea and in Theorem 4.6 we will prove a result that implies V 1 = V ep. The two variations of the functional equations of Marcet and Marimon (2019) have no relation to the original problem (lottery--
free), but give the correct value when the planner has access to a randomization device. The following example gives a simple intuition for this result.
2.1 Example 1
Suppose σ = 1
2 and β < 1
2 . As we shall verify in the following, an optimal lottery-free solution is given by l0 = 1, and for t > 0, lt = 0, and to ensure that the participation constraint holds,
1 1−β
√ct = 1, i.e. ct = (1 − β)2 for all t. This gives the principle a value of V 0 = β. It is easy to see that the use of ex-ante lotteries can improve upon this solution. The optimal ex ante lottery will turn out to be lt ∈ {0, 1} with equal probability every period. With ct = 0.25 for all t the (PC) is always satisfied ex ante. The value of the principal’s problem is 0.25 1
1−β which is larger than β whenever β < 1
2.
The optimal value of this lottery solution can be obtained form the following inf sup FE.
V 2 = mγin mc,alx
h
(l − c) + γ(√c −
√
l) + βW (γ)
i
,
where W (γ) solves
W (γ) = mc,alx
h
(l − c) + γ(√c −
√
l) + βW (γ)
i
.
It is easy to see that
W (γ) =



1
1−β 1 − γ + γ2
4 , γ≤1
1 1−β
γ2
4 γ>1
,
and that there are two optimal solutions, (γ1, c1, l1) = (1, 1
4 , 0), (γ2, c2, l2) = (1, 1
4 , 1), both
giving a value of V 2 = 0.25
1−β . As Shen et al. (2025) show, it is not a coincidence that this is the same as the value of the (ex-ante) lottery solution to the original problem: It is easy to see that V 2 = mγin max
P ∈P E(c,l)∼P h
(l − c) + γ(√c −
√
l) + βW (γ)
i
,
since the optimal lottery only puts weight on actions that give the same value. Since the problem is linear in probabilities, duality holds, i.e.
V 2 = max
P ∈P mγin E(c,l)∼P h
(l − c) + γ(√c −
√
l) + βW (γ)
i
.
5

But for the (linearized) lottery problem, the results in Marcet and Marimon (2019) hold and we must have V 2 = V ea. The sup-inf FE turns out to be a bit more subtle. We have
V 1 = mc,alx mγin
h
(l − c) + γ(√c −
√
l) + βW (γ)
i
,
with W (γ) as above. Then it follows that for γ ≥ 1, we have γ(c, l) = (√l − √c)2 1−β
β and
c = (1−β)2, l = 1, maximizes (l −c)+γ(c, l)(√c−√l)+βW (γ(c, l)) and γ = 2(1−β) minimizes the expression for c = (1−β)2, l = 1. Hence we obtain V 1 = β. As is shown in Theorem 4.6 this is the optimal ex post lottery solution which in this case coincides with a feasible lottery-free allocation that therefore must also be optimal. Hence we must have V 0 = V 1. This also verifies that the optimal lottery-free solution has a value of V 0 = β since its value cannot exceed the one of the ex-post lottery -
solution. Therefore, in this example we have V 2 > V 1 = V 0.
2.2 Example 2
Now suppose that
0 < β < 1/2, 1 − β
2 =σ σ
1−σ (2.2)
Note that in the previous case where σ = 1/2, σσ/(1−σ) = 1/2 and there is no β < 1/2 that satisfies the condition. On the other hand, when σ → 0, σ σ
1−σ → 1 and we can find σ ∈ (0, 1/2) and β < 1/2 to ensure that (2.2) is satisfied. Similarly to the above, we obtain
W (γ) =



1 1−β
h
(σ σ
1−σ − σ 1
1−σ )γ 1
1−σ + (1 − γ)
i
, γ ≤ 1;
1
1−β (σ σ
1−σ − σ 1
1−σ )γ 1
1−σ , γ > 1.
Regarding the problem for V , it is easy to verify that (c, l) = (σ 1
1−σ , 1), γ = 1 is a saddle point:
Given γ = 1, we have that (c, l) = (σ 1
1−σ , 1) is a maximizer; given (c, l) = (σ 1
1−σ , 1), defining F (γ) = (l − c) + γ(cσ − lσ) + βW (γ), we obtain
V= 1
1 − β (1 − β
2 −σ 1
1−σ ),
and one lottery solution is
l0 = 1, p(lt = 0) = p(lt = 1) = 1/2(t ≥ 1), ct ≡ σ 1
1−σ .
In this example, ex-ante and ex-post lotteries are the same because in the max-min problem for V we find a saddle point. On the other hand, it is easy to show that the deterministic (lottery-free) solution will not have the same value as the two lottery solutions, i.e. V 0 < V 1 = V 2. We have
∞
X
t=0
βt(lt − ct) ≤
∞
X
t=0
βtlσ
t−
∞
X
t=0
ct ≤
∞
X
t=0
βtcσ
t−
∞
X
t=0
ct
=
∞
X
t=0
βt(cσ
t − ct) ≤
∞
X
t=0
βt(σ σ
1−σ − σ 1
1−σ ) = 1
1 − β (1 − β
2 −σ 1
1−σ ).
For all inequalities to hold as equalities, we must have lt ∈ {0, 1} for all t and
∞
X
t=0
βtlt = 1
1 − β (1 − β
2 ).
6

However, this equality cannot be satisfied: when l = (1, 1, 0, · · · 0, · · · ), P∞
t=0 βtlt = 1 + β =
1−β2
1−β > 1− β
2
1−β and when l = (1, 0, 1, 1, · · · ), we have P∞
t=0 βtlt = 1 + β2
1−β = 1+β(β−1)
1−β < 1− β
2
1−β .
These are the only two relevant cases and we obtain V 2 = V 1 > V 0. Although the sup-inf and the inf-sup FE’s have the same value there does not exist a saddle point to the sequential problem and the optimal lottery-free solution cannot be characterized by a FE.
3 A general formulation
We consider an optimization problem with forward looking constraints similar to the problems in Cole and Kubler (2012) or Marcet and Marimon (2019). Time is discrete and infinite, t = 0, 1, . . .. Exogenous shocks (st) follow a Markov chain with transition π and realize in a finite set S. A history of shocks up to some time t is denoted by st = (s0, . . . , st) ∈ St. The planner chooses actions contingent on each shock history, (a(st))t∈N,st∈St ∈ A∞. At
each st, the value of the physical state is denoted by x(st), and an action, a, is feasible if p(x(st), a(st), st) ≥ 0 for any t = 0, 1, · · · , st ∈ St. The physical state evolves according to x(st) = ζ(x(st−1), a(st−1), st−1) for t = 1, 2, . . ., with x(s0) = x0. Given γ, x0, s0, the optimization problem is as follows.
max
(a(st ))∈A∞ ⊂l∞ Es0 ,x0
∞
X
t=0
βt r(x(st), a(st), st) +
I
X
i=1
γigi(x(st), a(st), st)
!
s.t. Est
Ni
X
n=0
βngi(x(st+n), a(st+n), st+n) ≥ g ̄i(x(st), a(st), st), ∀t ∈ N, ∀st ∈ St, ∀i ∈ {1, · · · , I},
where x(st+1) = ζ(x(st), a(st), st) and p(x(st), a(st), st) ≥ 0, ∀t ∈ N, st ∈ St. (3.1) There are i = 1, . . . , I ≥ 1 forward looking constraints, and each constraint i restricts actions over the next Ni periods. For notational simplicity, we focus on the case where Ni = ∞ for all i = 1, . . . , I. In Appendix E we prove that all our arguments can be trivially extended to the general case. We also simply write g ̄i instead of taking it as a function of the state and actions. Throughout the paper,-
 we make the following assumptions.
Assumption 3.1
1. (st)∞
t=0 is a Markov process. The set of Markov states S is a finite set, and π(s′|s) > 0, ∀s, s′ ∈ S.
2. A ⊂ Rn is a finite set, X ⊆ Rm is a countable set. ζ is map from X × A × S to X .
3. The functions r : X × A × S → R, and gi : X × A × S → R, ∀i ∈ {1, · · · , I} are bounded.
4. 0 < β < 1.
5. For any s0 ∈ S and x0 ∈ X , there exists a feasible point (a(st)) ∈ A∞ to (3.1).
The assumption that A is finite has no practical relevance since it can be arbitrarily large. This assumption is made for theoretical convenience and it guarantees that the constraints map to l∞.
At each t, the set of possible pre-action histories up to t is defined by
Ht := St+1 × At,
where any ht ∈ Ht can be represented as
ht = (s0, a0, · · · , st−1, at−1, st).
7

Note that the history up to time t includes the exogenous shock realized at t but not the action at t. We define the set of feasible actions given x and s as A ̃(x, s) := {a ∈ A|p(x, a, s) ≥ 0}. For given x0 ∈ X , s0 ∈ S, we define the set A ̃∞ = A ̃∞(x0) ⊂ A∞ as
A ̃∞(x0) := {(at(st)) ∈ A∞|a(st) ∈ A ̃(x(st), st), x(st+1) = ζ(x(st), a(st), st) (∀t ∈ N, st ∈ St)},
ensuring that the constraints p(xt, at(st), st) ≥ 0 hold for all t. We also sometime write xt(at−1) = x(st, at−1) to emphasize that the physical state at st depends on the history of actions up to t − 1, at−1 = (a0, . . . , at−1). In the following, in particular in the following sections and in the appendices, we will often simply write xt and at instead of x(st) and a(st), whenever there is no scope for confusion. Note that by stationarity (a(st)) ∈ A ̃∞(x0) if and only if a(s0) ∈ A ̃(x0, s0), an-
d for all t ≥ 1, a(st) ∈ A ̃∞(ζ(x0, a(s0), s0)) for any s0 ∈ S. We define Λ as the l1 space of the “non-normalized” Lagrangian multipliers ((βtλi(ht)πt(st|s0))t∈N, ht∈Ht , i.e.
(λi(ht)) ∈ Λ := {(λi(ht) ≥ 0)|
∞
X
t=0
X
ht ∈Ht
I
X
i=1
βtλi(ht)πt(st|s0) < ∞}. (3.2)
We define the Lagrangian functional as
L((a(st)), (λi(ht)); (γi), x0, s0)
=Es0 ,x0
∞
X
t=0
βt r(x(st, at−1), a(st), st) +
I
X
i=1
γigi(x(st, at−1), a(st), st)
+
I
X
i=1
λi(ht)
∞
X
n=0
βngi(x(st+n, at+n−1), a(st+n), st+n) − g ̄i
!!
.
(3.3)
In this section, we show that the inf-sup problem for the Lagrangian functional can be solved recursively. Having established this, we proceed in Section 4 to prove that the inf-sup value corresponds to a Lagrangian dual of a system that is a minor variation of (3.1) (namely (4.6)) below . Consequently, it must also equal the optimal value of a lottery problem.
3.1 Recursive Formulations
3.1.1 Recursive Dual Value Function – the inf-sup FE
For any γ ∈ RI
+, x0 ∈ X , s0 ∈ S, we define the dual value function as
D(γ, x0, s0) = inf
(λi (ht ))∈Λ
sup
(a(st ))∈A ̃∞ (x0 )
L((a(st)), (λi(ht)); (γi), x0, s0). (3.4)
We have the following theorem.
Theorem 3.1 For any x ∈ X , s ∈ S, γ ∈ RI
+, the dual value function D(γ, x, s) defined in (3.4) satisfies the following recursive equation
D(γ, x, s) = inf
λ∈RI
+
sup
a∈A ̃(x,s)
"
r(x, a, s) +
I
X
i=1
γigi(x, a, s) + λi(gi(x, a, s) − g ̄i)
!
+ βEsD(γ + λ, x′, s′)
#
,
(3.5) where x′ = ζ(x, a, s).
The spirit of the proof is the same as in the proof for Proposition 3 in Pavoni et al. (2018a). The proof does not rely on a min-max theorem but instead, it relies only on the following lemma, which allows us to pass each inf operator to the front of the expression.
8

Lemma 3.1 Suppose that X, Y are subsets of Banach spaces, and f : X × Y → R is an arbitrary functional, Γ := {y : X → Y }. Suppose that X ̃ ⊆ X, then
yin∈fΓ sup
x∈X ̃
f (x, y(x)) = sup
x∈X ̃
yin∈fΓ f (x, y(x)).
3.1.2 The sup-inf functional equation
What would happen if one interchanged the inf and sup operator in the inf-sup functional equation (3.5)? Clearly, the optimal value is still related to the dual formulation of the problem (and generally not to the primal). To understand the issue in more detail, we define the postaction history set slightly differently as
H ̃t = St+1 × At+1,
where any  ̃ht ∈ H ̃ is represented as
 ̃ht = (s0, a0, · · · , st, at), or  ̃ht = (st, at), where at = (a0, · · · , at).
The difference between ht and  ̃ht lies in the fact that  ̃ht includes the history until time t including the shock and the action at t while ht only includes the shock (and history until time t). We allow the Lagrange multiplier associated with the forward looking constraint starting at t to depend on  ̃ht (and not only on ht), and define Λ ̃ as the l1 space of the “non-normalized” Lagrangian multipliers ((βtλi( ̃ht)πt(st|s0))t∈N,  ̃ht∈H ̃t analogously to (3.2). The Lagrangian function then becom-
es
L ̃((a(st)), (λi( ̃ht)); (γi), x0, s0)
=Es0
∞
X
t=0
βt r(x(st, at−1), a(st), st) +
I
X
i=1
γigi(x(st, at−1), a(st), st)
+
I
X
i=1
λi( ̃ht)
∞
X
n=0
βngi(x(st+n, at+n−1), a(st+n), st+n) − g ̄i
!!
.
(3.6)
For any γ ∈ RI
+, x0 ∈ X , s0 ∈ S, we define the dual value function as
D ̃ (γ, x0, s0) = inf
(λi( ̃ht))∈  ̃Λ
sup
(a(st )∈A ̃∞ (x0 )
L ̃((a(st)), (λi( ̃ht)); (γi), x0, s0). (3.7)
The following theorem follows directly from Lemma 3.1 and it motivates our interest in the sup-inf functional equation.
Theorem 3.2 For any x ∈ X , s ∈ S, γ ∈ RI
+, the dual value function D ̃ (x, γ, s0) defined in (3.7) satisfies the following recursive equation
D ̃ (γ, x, s) = sup
a∈A ̃(x,s)
inf
λ∈RI
+
"
r(x, a, s) +
I
X
i=1
γigi(x, a, s) + λi(gi(x, a, s) − g ̄i)
!
+ βEsD ̃ (γ + λ, x′, s′)
#
,
(3.8) where x′ = ζ(x, a, s).
9

3.2 Existence of a solution to the FE
We now establish the existence of solutions to both functional equations. Although both inf-sup and sup-inf Bellman operators exhibit monotonicity and discounting properties, the unbounded nature of Lagrangian multipliers and the resulting unboundedness of the dual value function preclude the direct application of standard contraction arguments from Stokey and Lucas Jr (1989). Bloise and Siconolfi (2022) demonstrate the existence of fixed points for the Negishi operator using Tarski’s fixed point -
theorem3. Alternatively, Pavoni et al. (2018a) employed Thompson’s metric to establish contraction, requiring the additional technical assumption that there exists some function F satisfying B(F ) > F +∥γ∥ε. The framework achieves a contraction factor of 1−O(ε) (under Thompson’s metric). We develop a constructive proof for the existence of fixed points that directly leverages the monotonicity structure of the Bellman operator. Our method provides an explicit iterative scheme that converges to the -
solution while avoiding the additional assumptions required in Pavoni et al. (2018a). Throughout, we want to require the value function to be Lipschitz continuous with respect to the multiplier and we define an upper bound on the Lipschitz constant as
L = ∥r∥∞ + PI
i=1 ∥gi∥∞
1−β .
Definition 3.1 For any k > 0, we define
B(k) = {γ ∈ RI
+ : ∥γ∥∞ ≤ k}.
We define the function space
M :={F : RI
+×X ×S →R:
(i)F (·, x, s) ∈ L∞(B(k)), ∀k ∈ N+, x ∈ X , s ∈ S;
(ii)
|S|
X
i=1
1 2i
"∞ X
j=1
1 2j
∞
X
k=1
1
2k ∥F (·, xj , si)∥L∞(B(k))
!#
< ∞}.
For any F ∈ M, the norm4 of F is defined by
∥F ∥M :=
|S |
X
i=1
1 2i
"∞ X
j=1
1 2j
∞
X
k=1
1
2k ∥F (·, xj , si)∥L∞(B(k))
!#
.
It is easy to verify that the space (M, ∥ · ∥M) is a complete metric space.
3However, Tarski’s fixed point theorem is generally non-constructive when the continuity of the Negishi operator remains unverified. For instance, f : [0, 1] → [0, 1] defined as
f (x) =
(1
2 + (x − 1
2 )2, 1
2 <x≤1 x2, 0 ≤ x ≤ 1/2
is a monotone operator, and the existence of fixed points(xF P = 0) can be guarenteed by the Tarski’s fixed point theorem. However, f (∞)(1) = 1
2 is not a fixed point of f , due to the non-continuity of f at x = 1
2.
4Convergence in this norm implies local uniform convergence.
10

Definition 3.2 We define the subset N ⊂ M as follows
N :={F ∈ M :
(i) F (·, x, s) is convex; (ii)F (·, x, s) is L-Lipschitz; (3.9)
(iii)F (γ, x, s) ≥ v0 +
I
X
i=1
γivi, (3.10)
where
(
v0 = Es0=s
P∞
t=0 βtr(xt, at(st), st);
vi = Es0=s
P∞
t=0 βtgi(xt, at(st), st), i ∈ {1, · · · , I},
for any feasible (at(st))t≥0 to problem (3.1) with x0 = x, s0 = s (3.11)
(iv)F (γ, x, s) ≤ (1 +
I
X
i=1
γi)L}. (3.12)
Note that (iii) implies that
F (γ, x, s) ≥ −(1 +
I
X
i=1
γi)L.
It is straightforward to verify that N is a closed subset of M. We define the Bellman operator as follows.
Definition 3.3 Let F denote the set of functions F : RI
+ × X × S → R. The Bellman operator B : F → F is defined by
B(F )(γ, x, s) := inf
λ∈RI
+
sup
a∈A ̃(x,s)
"
r(a, x, s) +
I
X
i=1
γigi(a, x, s) + λi(gi(a, x, s) − g ̄i)
!
+ βEsF (γ + λ, x′, s′)
#
where x′ = ζ(x, a, s).
The following monotonicity property of B can be verified directly:
Lemma 3.2 For F1, F2 ∈ M, s.t. F1(x, γ, s) ≤ F2(x, γ, s), ∀(x, γ, s) ∈ X × RI
+ × S, we have B(F1)(x, γ, s) ≤ B(F2)(x, γ, s), ∀(x, γ, s) ∈ X × RI
+ × S.
Moreover, B maps N into itself.
Lemma 3.3 Under Assumption 3.1, the Bellman operator B maps N to itself, that is,
B(N ) ⊂ N .
With this we can state the following theorem.
Theorem 3.3 Assume that F0(γ, x, s) = 1 + PI
i=1 γi L. Then there exists F ∗ ∈ N , such
that
∥B(n)(F0) − F ∗∥M → 0, as n → ∞,
and F ∗ is the largest fixed point of B in N , i.e.
1. B(F ∗) = F ∗, and
2. For any F ∈ N s.t. B(F ) = F , we have F ≤ F ∗.
11

To show that the largest fixed point obtained from Theorem 3.3 equals to the dual value function D, it suffices to verify that D ∈ N , and that D is not less than any fixed point in N . The property that D ∈ N is directly to verified after we show that D equals to the optimal value of the lottery system in the next section. The next lemma shows that D is not less than any fixed point in N .
Lemma 3.4 Suppose that F ∈ N is a fixed point of B. Then F (x, γ, s) ≤ D(x, γ, s) for all x ∈ X , γ ∈ RI
+, s ∈ S.
The same argument can be used for the sup-inf problem to establish the following corollary.
Corollary 3.1 The following functional equation,
F (γ, x, s) = sup
a∈A ̃(x,s)
inf
λ∈RI
+
"
r(a, x, s) +
I
X
i=1
γigi(a, x, s) + λi(gi(a, x, s) − g ̄i)
!
+ βEsF (γ + λ, x′, s′)
#
where x′ = ζ(x, a, s), has a solution in N . Moreover, every solution F (.) satisfies F (x, γ, s) ≤ D ̃ (x, γ, s) for all (x, γ, s) .
4 Lotteries
In the case discussed in Marcet and Marimon (2019) where the objective function is concave and the constraint-set is convex, the inf-sup and the sup-inf functional equations have the same value and this is equal to the optimal value of the original problem. As we have seen in our introductory example, under non-convexities they might have different values and their values might be strictly larger than the value of the original problem. In this section we present the main results of the paper that -
show that both the inf-sup and the sup-inf functional equation have natural economic interpretations if one allows for lotteries. The main results of this paper establish a relation between the sup-inf and the inf-sup FE and a modified problem where the planner has access to lotteries. The theoretical foundation for this relationship lies in the fact that the duality gap can be bridged by randomization. To make this precise we need to introduce a few mathematical facts.
4.1 The duality gap and randomization
To formalize these ideas, we first consider an abstract setting of constrained optimization in Banach-spaces. To be consistent with standard conventions in optimization theory, we consider the minimization problem instead of the maximization one in this section.
Definition 4.1 Let X be a Banach space, Ω ⊆ X be an arbitrary subset of X, Y be a Banach space with a closed positive cone P ⊂ Y , f : Ω → R ∪ {+∞} be a proper extended real-valued functional, and g : Ω → Y be an arbitrary functional. The optimization problem, is defined by
xi∈nfΩ f (x),
s.t. g(x) ≤ θY ,
(4.1)
where g(x) ≤ θY means g(x) ∈ −P .
We define the perturbation functional v : Y → R ∪ {+∞, −∞} by letting v(y) be the optimal value of the following perturbed problem
v(y) = xi∈nfΩ f (x),
s.t. g(x) ≤ y,
(4.2)
12

where g(x) ≤ y means g(x) − y ∈ −P . The Lagrangian functional L : Ω × Y ∗
+ → R ∪ {+∞} to the optimization problem (4.1) is defined by
L(x, y∗) = f (x) + ⟨y∗, g(x)⟩. (4.3)
Here Y ∗
+ denotes the set
{y∗ ∈ Y ∗|⟨y∗, y⟩ ≥ 0, ∀y ≥ θY }.
Let X, Ω, Y, f, g be defined as in Definition 4.1. The inf-sup problem, or the primal problem, is defined by p := xi∈nfΩ sup
y∗∈Y ∗
+
L(x, y∗). (4.4)
Similarly, the sup-inf problem, or the dual problem, is defined by
d := sup
y∗∈Y ∗
+
xi∈nfΩ L(x, y∗). (4.5)
The Dual Problem for Lagrangian (3.3) We consider the modifed problem of (3.1) as follows
sup
(a(st ))∈A ̃∞ (x0 )⊂l∞
Es0
∞
X
t=0
βt r(x(st), a(st), st) +
I
X
i=1
γigi(x(st), a(st), st)
!
,
s.t. 1{( ̃a0,··· , ̃at−1)=(a(s0),··· ,a(st−1))} Est
∞
X
n=0
βngi(x(st+n), a(st+n), st+n) − g ̄i
!
≥ 0,
∀t ∈ N, ∀ht = (s0, a ̃0, · · · , st−1, a ̃t−1, st) ∈ Ht, ∀i ∈ {1, · · · , I}.
(4.6) For this problem, we define the functional
f : A ̃∞(x0) → R, (a(st)) 7→ Es0
∞
X
t=0
βt r(x(st), a(st), st) +
I
X
i=1
γigi(x(st), a(st), st)
!
, (4.7)
and the map
g :A ̃∞(x0) → l∞,
(a(st)) 7→ (gt,ht,i(a(st)))t∈N, ht∈Ht, i∈{1,··· ,I} :=
1{( ̃a0,··· , ̃at−1)=(a(s0),··· ,a(st−1))} Est
∞
X
n=0
βngi(x(st+n), a(st+n), st+n) − g ̄i
!!
t∈N, ht∈Ht, i∈{1,··· ,I}
.
(4.8) Problem (4.6) can then be formulated as
sup
(a(st ))∈A ̃∞ (x0 )⊂A∞
f ((a(st))),
s.t. g((a(st))) ≥ 0.
(4.9)
Therefore, according to the definition of the dual problem (B.4), the dual problem of (C.13) is defined as5
d = inf
λ∈l∞,∗
+
sup
(a(st ))∈A ̃∞ (x0 )
f ((a(st))) + ⟨λ, g((a(st)))⟩. (4.10)
5Note that the primal problem now is a maximization problem, and hence the dual problem has the inf-sup form.
13

To establish the existence of Lagrange multipliers in the l1 space—rather than the l∞,∗ space considered in (4.10)—and to consequently show that D(γ, x0, s0) defined in (3.4) equals the dual value d from (B.3), we follow the approach of Dechert (1982) and Pavoni et al. (2018a). The detailed argument is provided in Appendix C (see Theorem C.3). In general d ≤ p and the difference between the two values is called the duality-gap. To show how this gap can be bridged by convexification, we need the f-
ollowing definitions.
Definition 4.2 Let f : X → R∪{+∞, −∞} be an extended real-valued functional. Its epigraph is defined as
epi(f ) := {(x, r) ∈ X × R|f (x) ≤ r}.
The functional f ∗ : X∗ → R ∪ {+∞, −∞} defined by
f ∗(x∗) := sup
x∈X
{⟨x∗, x⟩ − f (x)}
is called the convex conjugate, or conjugate of f , and the mapping
f 7→ f ∗
is called the Legendre-Fenchel transformation. Furthermore, f ∗∗ : X → R ∪ {+∞, −∞}6 defined by
f ∗∗(x) := sup
x∗ ∈X
{⟨x∗, x⟩ − f ∗(x∗)}
is called the biconjugate of f .
The following theorem which is a variation of the Fenchel-Moreau theorem constitutes the theoretical foundation of our analysis. It seems to be known in mathematics7 but a clean reference is difficult to find. For completeness, we provide a proof in Appendix A.
Theorem 4.1 Let X be a Banach space, f : X → R ∪ {+∞} be a proper extended real-valued functional and assume that there exists x∗ ∈ X∗, β ∈ R, such that
⟨x∗, x⟩ + β ≤ f (x), ∀x ∈ X. (4.11)
Then the following holds. epi(f ∗∗) = cl co epi(f ),
where cl co denotes the closure of the convex hull.
The following theorem states that this duality gap can be bridged if randomization is possible in the sense that the epigraph of the perturbed dual problem is the closure of the convex hull of the epigraph of the perturbed primal problem.
Theorem 4.2 Let X, Ω, Y, f, g be defined as in Definition 4.1. Then p = v(θY ), d = v∗∗(θY ). where v∗∗(.) denotes the biconjugate of v. Moreover
epi(v∗∗) = cl co epi(v).
The basic intuition for the results in a finite dimensional setting is explained in detail in Theorems 2.3 and 2.4 in Shen et al. (2025).
6If X is reflexive, then X = X∗∗, hence f ∗∗ is indeed the conjugate of f ∗. If X is not reflexive, then X ⊂ X∗∗ is a closed subset of X∗∗, hence f ∗∗ can be regarded as the conjugate of f ∗ restricted in X. 7According to theorem 5 in Rockafellar (1974)(page 16), one might obtain the same conclusion when f satisfies lsc co (f ) > −∞, ∀x ∈ X, which is a weaker condition than ours. However, the proof in Rockafellar (1974) relies on a geometric result that was not rigorously stated in the book. The f-
inite-dimensional version of this theorem was provided in Theorem 1.3.5 in Urruty and Lemar ́echal (1993)(page 45).
14

4.2 Lotteries and the dual problem
Motivated by Theorem 4.2, we now want to explore how the interpretation and the optimal solution of (3.1) change if the planner can randomize of actions. Since A is compact, according to the Tychonoff theorem, A∞ is compact in the product topology. Furthermore, since the topology in A is metrizable, the product topology in A∞ is metrizable(see Theorem 3.36 in Aliprantis and Border (2006)). Given x0 ∈ X , we know that A ̃∞(x0) ⊆ A∞ and is a closed subset in A∞ in the product topology. Hence A ̃∞(x0-
) is compact in the product topology. Since A is finite, and that the discount factor satisfies 0 < β < 1, it is straightforward to verify that f and gt,ht,i defined in (4.7) and (4.8) is continuous under the product topology. Let P(A ̃∞(x0)) denote the space of probability measures on A ̃∞(x0). It is standard to show that P(A ̃∞(x0)) is compact in the *-weak topology, using Portmanteau Theorem(for closedness, see Theorem 2.1(iv) in Billingsley (2013)) and Prokhorov’s theorem(for relative compactn-
ess, see Theorem 6.1 in Billingsley (2013)).
Definition 4.3 The ex-ante lottery problem of (3.1) is as follows.
sup
P ∈P(A ̃∞(x0))
E(a(st ))∼P
s0
∞
X
t=0
βt r(x(st, at−1), a(st), st) +
I
X
i=1
γigi(x(st, at−1), a(st), st)
!
,
s.t. E(a(st))∼P
st 1{ ̃at−1=at−1}
∞
X
n=0
βngi(x(st+n, (a ̃t−1, at+n−1
t )), a(st+n), st+n) − g ̄i
!
≥ 0,
∀t ∈ N, ∀ht = (s0, a ̃0, · · · , st−1, a ̃t−1, st) ∈ Ht, ∀i ∈ {1, · · · , I}.
(4.12)
In this definition 1{ ̃at−1=at−1} denotes the indicator function that is equal to one if the actions realized in the past are equal to  ̃at−1 (and zero otherwise) and at+n−1
t = (at, . . . , at+n−1) denotes the future actions beginning at t up to t + n − 1 (that are randomized over by the lottery P ), with the convention that for n = 0, the term is to be ignored. Randomization is performed over infinite sequences of actions (a(st)) and each forward looking constraint is assumed to hold on average, conditional on the entire history of actions and shocks up to t. The next theorem shows that, the maximum of problem (4.12) can be achieved because of the *-weak compactness-
 of P(A ̃∞(x0)), and hence we can replace ’sup’ to ’max’ in (4.12).
Theorem 4.3 There exists a maximizer P ∗ ∈ P(A ̃∞(x0)) to (4.12).
It turns out that attention can be limited to lotteries over A after each history ht. For this we denote by Πht∈Ht P(A ̃(ht)) the set of sequences of probability measures which satisfy at each history ht = (s0, a ̃0, · · · , st−1, a ̃t−1, st) ∈ Ht,
ψ(ht) ∈ P(A ̃(ht)) := P(A ̃(x(st, a ̃t−1), st)).
That is to say, the constraint p(xt, a, st) ≥ 0 has to hold for each a in the support of ψ(ht). a(ht) ∼ ψ(ht) then means p(a(ht) = a|a0 =  ̃a0, · · · , at−1 =  ̃at−1) = ψ(ht)(a). The following theorem formalizes that it is sufficient to focus on lotteries in Πht∈Ht P(A ̃(ht)).
15

Theorem 4.4 The lottery problem (4.12) is equivalent to
max
ψ∈Πht∈Ht P(A ̃(ht))
E(a(ht )∼ψ(ht ))
s0
∞
X
t=0
βt r(x(st, a(ht−1)), a(ht), st) +
I
X
i=1
γigi(x(st, a(ht−1)), a(ht), st)
!
,
s.t. E(a(ht))∼ψ(ht))
st 1{ ̃at−1=at−1}
∞
X
n=0
βn gi(x(st+n, (a ̃t−1, at+n−1
t )), a(st+n), st+n) − g ̄i
!
≥ 0,
∀t ∈ N, ∀ht = (s0, a ̃0, · · · , st−1, a ̃t−1, st) ∈ Ht, ∀i ∈ {1, · · · , I}.
(4.13)
The following theorem states that the value of the ex ante lottery problem is identical to the value of the inf-sup FE. This is the main result of this section that justifies the use of the inf-sup FE in non-convex problem.
Theorem 4.5 Under Assumption 3.1, the maximum of problem (4.12), denoted as V (γ, x0, s0), equals to D(γ, x0, s0), where D is the dual value function of the deterministic problem (3.1).
As we have demonstrated above, the following corollary provides the fact that D ∈ N . This result, together with Lemma 3.4, yields that D is largest fixed point of B in the space N .
Corollary 4.1 The dual value function satisfies D ∈ N . Therefore, it is equal to the largest fixed point in N of the Bellman operator from Definition 3.3.
4.3 Ex post lotteries
Alternatively, we can define an ex-post lottery problem that is equivalent to the sup-inf problem (3.8).
Definition 4.4 The ex-post lottery problem is as follows
max
P ∈P(A ̃∞(x0))
E(a(st ))∼P
s0
∞
X
t=0
βt r(x(st, at−1), a(st), st) +
I
X
i=1
γigi(x(st, at−1), a(st), st)
!
,
s.t. E(at(st))∼P
st 1{ ̃at=at}
∞
X
n=0
βngi(x(st+n, (a ̃t−1, at+n−1
t )), a(st+n), st+n) − g ̄i
!
≥ 0,
∀t ∈ N, ∀ ̃ht = (s0, a ̃0, · · · , st−1, a ̃t−1, st, a ̃t) ∈ H ̃t, ∀i ∈ {1, · · · , I}.
(4.14)
As in the ex-ante problem, the planner chooses probability distribution over infinite sequences. However, as in our example in Section 2 the difference between the two problems consists of the fact that in the ex post problem the constraint has to hold conditional on each at in the support of the lottery. A history is defined as  ̃ht and is assumed to include the action at t. As in the case of ex-ante lotteries, it is equivalent of considering lotteries over actions after each history. More import-
antly, We have the following analog of Theorem 4.5.
Theorem 4.6 Under Assumption 3.1, the maximum of problem (4.14), denoted as V , equals to D ̃ (γ, x0, s0), where D ̃ is the value function of the sup-inf FE (3.8). Moreover the largest solution of the FE in N solves (4.14).
16

4.4 Economic relevance of lotteries
In our simple example in Section 2 the difference between ex ante and ex post lotteries was simply a question of timing. In general principal agent problems with lotteries it is typically assumed that the participation constraint has to hold ex ante while the IC constraint only holds ex post. In this case ex post lotteries would be more relevant (see also Cole and Kubler (2012) for a simple formulation, or Prescott (1999) for a general argument in the static case). For models of optimal government-
 policy constraints often consist of agents’ first order condition. To illustrate the difference between ex post and ex ante lotteries it is useful to consider the simplest possible version of the problem in Aiyagari et al. (2002) and show that ex post lotteries might improve the value in the Ramsey problem. Government expenditures (gt)∞
t=0 are assumed to be exogenous and to follow a finite Markov chain. A single agent takes the risk-free rates (Rt), and income taxes (τt), as given, and solves
max
(ct ,lt ,bt )∞
t=0
E
∞
X
t=0
βt (u(ct) + v(lt))
s.t. ct = lt(1 − τt) + bt−1 − bt
Rt
sup
t
∥bt∥ < ∞, lt ∈ [0, 1]∀t
(4.15)
Under full commitment, the government chooses labor income taxes τt and interest rates on its debt Rt so that given the optimal choices of the agent, the government budget constraint is
satisfied, i.e. for all t, bt = τtnt − gt + bt+1
Rt , and that there are no other taxes and interest rates
that result in higher utiltiy for the agent. Under the assumption that the first order conditions of the agent’s problem are necessary and sufficient, following Marcet and Marimon (2019), we can rewrite the problem as
max
(ct ,lt ,bt )∞
t=0
E
∞
X
t=0
βt (u(ct) + v(lt))
s.t. βbtEu′(ct+1) = u′(ct)(bt − ct) − v′(lt)lt
0 ≤ ct ≤ lt − gt
(4.16)
Note that the problem is slightly different than our general problem since forward looking constraints extend only over two periods. We show in Appendix E how the analysis can be applied to this setting. Clearly the set of feasible actions is generally not a convex set. The question is if lotteries can improve on the lottery-free solution. Assuming ex-ante lotteries would give a constraint of the form EP (at,at+1) qt(at)u′(ct(at)) + βEtu′(ct+1(at+1)) = 0.
It is difficult to give an economically meaningful interpretation of this constraint. Ex-post lotteries, on the other hand, would yield a constraint of the form
EP (at+1) qt(at)u′(ct(at)) + βEtu′(ct+1(at+1)) = qt(at)u′(ct(at))+βEP (at+1)Etu′(ct+1(at+1) = 0,
which has the straightforward interpretation that there is randomness in next period’s consumption in addition to the one induced by the exogenous shock. The case of ex-post lotteries corresponds to the functional equation
W (b, μ, g) = sup
c,b′
γin≥f0 u(c) + v(c + g) + μbu′(c) + γ u′(c)(c − b) + (c + g)v′(c + g) + βEgW (b′, γ, g′) .
17

It makes a big difference both in terms of the optimal value and in terms of the economic interpretation whether one considers the sup-inf FE or the inf-sup FE. The inf-sup functional equation lacks an economic interpretation.
5 Policies
Having established in the previous section that both the inf-sup and sup-inf functional equations yield the correct optimal value for their respective lottery problems, the remaining question becomes how to recover the corresponding optimal lotteries. This section develops an approach to address this problem and determine optimal lottery policies. To build intuition, we begin with the inf-sup equation (3.5). Solving for the value function D (the largest fixed point) also yields, for each state, a -
minimizer8 λ∗ and a corresponding set of maximizers a(λ∗). Although this arises from a problem without lotteries, it provides the key to recovering optimal randomized policies. It follows from Shen et al. (2025) that to ensure that a statewise lottery attains the optimal utility, its support must lie in the set of optimizers, a(λ∗). The remaining challenge is to construct an optimal lottery over these support points, with the critical requirement that it satisfies all forward-looking constraints. -
To this end, we follow the work of Cole and Kubler (2012) and Marimon and Werner (2021) by incorporating the promised value into the functional equation to keep track of the forward looking constraints. Based on these insights, we then adapt the iterative method from Shen et al. (2025) to recover the optimal policy. A key prerequisite for recovering the policy is obviously to establish that the infimum and supremum in (3.5) are attainable. Since the action set is assumed to be finite, this is equi-
valent to showing that there exists a λ∗ that solves (3.5). To this end, we first introduce a variant of Slater’s condition.
Assumption 5.1 There exists ε > 0, s.t. for any s0 ∈ S, x0 ∈ X , there exists a feasible point (ψ(ht)) ∈ Πht∈Ht P(A ̃(ht)) to (4.13) satisfying for all i = 1, . . . I,
E(a(ht )∼ψ(ht ))
s0
∞
X
t=0
βtgi(xt, at, st) − g ̄i
!
≥ ε.
Theorem 5.1 Under Assumption 5.1, for every x ∈ X , s ∈ S, γ ∈ RI
+, there exists λ∗ that solves the inf-sup problem (3.5), with D given as the dual value function.
We introduce a utility promise φi for i = 1, . . . I and define
W (γ0, x0, s0, φ) = max
ψ∈Πht∈Ht P(A ̃(ht))
E(a(ht )∼ψ(ht ))
s0
∞
X
t=0
βt r(xt, at, st) +
I
X
i=1
γigi(xt, at, st)
!
,
s.t. E(a(ht)∼ψ(ht))
ht
∞
X
n=0
βngi(xt+n, at+n, st+n) − g ̄i
!
≥ 0,
∀t ∈ N, ∀ht = (s0, a ̃0, · · · , st−1, a ̃t−1, st) ∈ Ht, ∀i ∈ {1, · · · , I};
E(a(ht )∼ψ(ht ))
s0
∞
X
t=0
βtgi(xt, at, st) − φi
!
≥ 0.
(5.1) In general, we have W (γ, x, s, φ) ≤ D(γ, x, s), because we introduce an additional constraint for W . The following lemma shows the equivalence between the feasible promised values and the subdifferential of D which we denote by ∂D(γ, x, s).
8The minimizer might not be unique but the argument holds for any minimizer.
18

Lemma 5.1 For any γ ∈ RI
+, x ∈ X , s ∈ S, the following are equivalent:
1. φ ∈ ∂D(γ, x, s);
2. There exists P ∗ ∈ P(A ̃∞(x0)), s.t.
• P ∗ maximizes problem (4.12), and
• E(at∼P ∗)
s0
P∞
t=0 βtg(xt, at, st) = φ.
The following is a direct corollary of this lemma and gives conditions that ensure that W (γ, x, s, φ) = D(γ, x, s).
Corollary 5.1 For any γ ∈ RI
+, x ∈ X , s ∈ S, W (γ, x, s, φ) = D(γ, x, s) if and only if there exists φD ∈ ∂D(γ, x, s), s.t. φ ≤ φD.
To derive a functional equation for W , we follow the proof of Theorem 3.1 and combining it with the result of Corollary 5.1, we obtain the following theorem.
Theorem 5.2 For any x ∈ X , s ∈ S, γ ∈ RI
+, φ ∈ RI , the dual value function W (x, γ, s0, φ) defined in (3.4) satisfies the following equation
W (γ, x, s, φ) = inf
μ∈RI
+, λ∈RI
+
sup
a∈A ̃(x,s)
"
r(x, a, s) +
I
X
i=1
γigi(x, a, s) + λi(gi(x, a, s) − g ̄i) + μi(gi(x, a, s) − φi)
!
+ βEsD(γ + λ + μ, x′, s′)
#
,
where x′ = ζ(x, a, s).
(5.2) or, equivalently,
W (γ, x, s, φ) = inf
μ∈RI
+, λ∈RI
+
sup
ψ∈P (A ̃(x,s)),φ′ (a,s)∈RI
X
a∈A
ψ(a)
"
r(x, a, s) +
I
X
i=1
γigi(x, a, s) + λi(gi(x, a, s) − g ̄i) + μi(gi(x, a, s) − φi)
!
+ βEsW (γ + λ + μ, x′, s′, φ′(a, s′))
#
,
where x′ = ζ(x, a, s).
(5.3)
It is easy to verify that if λ∗ is a solution to (3.5), then λ∗ together with μ∗ = 0 is a solution to (5.2) and a solution to (5.3). The following two theorems now describe how an optimal policy can be recovered.
Theorem 5.3 For any x ∈ X , s ∈ S, γ ∈ RI
+, φ ∈ ∂D(γ, x, s), the recursive equation (5.3) admits at least a solution (μ∗, λ∗, ψ∗, φ′∗), satisfying
φ′∗(a, s′) ∈ ∂D(γ + μ∗ + λ∗, ζ(x, a, s), s′), ∀a ∈ supp(ψ∗), s′ ∈ S, (5.4)
(
X
a∈A
ψ(a)(g(x, a, s) + βEsφ′(a, s′)) − φ ≥ 0) ⊥ (γ + μ∗) (5.5)
and
(
X
a∈A
ψ(a)(g(x, a, s) + βEsφ′(a, s′)) − g ̄) ≥ 0) ⊥ λ∗. (5.6)
Using the solutions (ψ∗, φ′∗) from Theorem (5.3), we can recover the policy as follows.
19

Theorem 5.4 Given x0, s0, γ0, φ0 ∈ ∂D(γ0, x0, s0). For any t ≥ 0, ht ∈ Ht, we define
(μ∗(ht), λ∗(ht), ψ∗(ht), φ∗(ht; at, st+1))
a solution to (5.3) with x = x(ht), s = st, γ = γ(ht−1), φ = φ(ht) satisfying (5.4), (5.5) and (5.6), and define γ∗(ht) = γ∗(ht−1) + λ∗(ht) + μ∗(ht). Then (ψ∗(ht)) is a solution to (4.13).
Now the problem reduces to finding a solution to (5.3) satisfying (5.4), (5.5) and (5.6). The following theorem allows us to identify such solutions that bypass the need to consider γ.
Theorem 5.5 For every x ∈ X , s ∈ S, γ ∈ RI
+, φ ∈ ∂D(γ, x, s), there exists a solution (μ∗, λ∗, ψ∗, φ′∗) to the following problem
W (0, x, s, φ) = inf
μ∈RI
+, λ∈RI
+
sup
ψ∈P (A ̃(x,s)),φ′ (a,s′ )∈RI
X
a
ψ(a)
"
r(x, a, s) +
I
X
i=1
λi(gi(x, a, s) − g ̄i) + μi(gi(x, a, s) − φi)
!
+ βEsW (λ + μ, x′, s′, φ′(a, s′))
#
,
where x′ = ζ(x, a, s),
(5.7) that satisfies
φ′∗(a, s′) ∈ ∂D(λ∗ + μ∗, x′, s′), (5.8)
(
X
a∈A
ψ∗(a)(g(x, a, s) + βEsφ′∗(a, s′)) − φ ≥ 0) ⊥ μ∗, (5.9)
and
(
X
a∈A
ψ∗(a)(g(x, a, s) + βEsφ′∗(a, s′) − g ̄) ≥ 0) ⊥ λ∗. (5.10)
Moreover, for (ψ∗, φ∗′), there exists (λ ̃∗, μ ̃∗) such that
(μ ̃∗, λ ̃∗, ψ∗, φ′∗)
is a solution to (5.3) that satisfies (5.4),(5.5) and (5.6).
Now, it suffices to find a solution to the problem in Theorem 5.5. We introduce a simple algorithm for doing so. We assume that the optimal dual value function D(.) is given. For γ = 0, x ∈ X , s ∈ S, φ, we define the inner function in (5.2) as
F (μ, λ) := sup
a∈A
"
r(x, a, s) +
I
X
i=1
λi(gi(x, a, s) − g ̄i) + μi(gi(x, a, s) − φi)
!
+ βEsD(λ + μ, x′, s′)
#
.
It is easy to check that F (μ, λ) is a convex function and given μ, λ, any
(g(x, a∗, s) − φ) + βEs∂D(λ + μ, x′, s′), (g(x, a∗, s) − g ̄) + βEs∂D(λ + μ, x′, s′)
is a subgradient of F 9, where a∗ ∈ arg max F , and x′ = ζ(x, a∗, s).
9In practical computations, we would use
φ ̃ = D(λ + μ + εei, x′, s′) − D(λ + μ, x′, s′)
ε
to approximately obtain an element in ∂D(λ + μ, x′, s′).
20

This observation directly leads to the sub-gradient descend method in Algorithm 1. For a given value of the (extended) state, φ, x, s, the method computes an optimal lottery over current actions as well as next periods’ utility promises φ(s′) for all s′ ∈ S. Along a simulated path the algorithm can then be used to compute an optimal policy: starting from an unbinding initial promised value10, we apply Algorithm 1 iteratively at each encountered state to compute the optimal lottery and next period-
’s promised values, which in turn become the input for the subsequent step. This process generates a sequence of action lotteries and promises that defines the optimal policy.
Algorithm 1: Algorithm for the Computation of Optimal Policies
Given φ, x, s, initial Lagrangian multipliers λ1, μ1, the learning rates {σk}∞
k=0 and the number of iteration N > 0. For k = 1 : N
1. Solve the optimization problem
ak ∈ arg max
a∈A ̃(x,s)
"
r(x, a, s) +
I
X
i=1
λk,i(gi(x, a, s) − g ̄i) + μk,i(gi(x, a, s) − φi)
!
+ βEsD(λk + μk, x′, s′)
#
,
and compute
φk(s′) ∈ ∂D(λk + μk, x′, s′), for all s′ ∈ S.
2. Update the Lagrangian multipliers by
μk+1 = max{μk − σk g(x, ak, s) − φ + βEsφk(s′) , 0}
λk+1 = max{λk − σk g(x, ak, s) − g ̄ + βEsφk(s′) , 0}
End
1. Construct the stage lottery ψ as
ψN (a) =
PN
k=1 1ak=aσk
PN
k=1 σk .
2. Construct the promised value φ′ as
φ′N (a, s′) =
PN
k=1 1ak=aσkφk(s′)
PN
k=1 1ak=aσk .
The final theorem of this section formalizes the convergence of this algorithm.
Theorem 5.6 We consider the Algorithm 1. Assume that the learning rate {σk}∞
k=0 satisfies
∞
X
k=0
σk = ∞, and
∞
X
k=0
(σk)2 < ∞.
10This is equivalent to starting without any promised value, since agents do not need to be promised anything at period 0.
21

Then (λk, μk) → (λ∗, μ∗), for some (λ∗, μ∗) ∈ arg min F (λ, μ). Furthermore, for any ε > 0, there exists N ̄ > 0, such that when N > N ̄ , we have
1. ∥(λk, μk) − (λ∗, μ∗)∥ ≤ ε,
2. ψN (a)dist(φ′N (a, s′), ∂D(λ∗ + μ∗, x′, s′)) < ε, for any a ∈ A ̃(x, s)
3. P
a ψN (a)(g(x, a, s) + βEsφ′N (a, s′)) − φ ≥ −ε,
4. P
a ψN (a)(g(x, a, s) + βEsφ′N (a, s′) − g ̄) ≥ −ε,
5. |⟨μ∗, P
a ψN (a)(g(x, a, s) + βEsφ′N (a, s′)) − φ⟩| ≤ ε,
6. |⟨λ∗, P
a ψN (a)(g(x, a, s) + βEsφ′N (a, s′) − g ̄)⟩| ≤ ε.
Note that for the sup-inf FE the policy can be recovered by the exact same algorithm. By the same arguments as above, we can formulate a functional equation that depends on γ, x, s and, in addition, to promised utility φ. We obtain the following equation, which is identical to (5.2) except that infλ supa is replaced by supa infλ.
W (γ, x, s, φ)
= inf
μ∈RI
+
sup
a∈A ̃(x,s)
inf
λ∈RI
+
"
r(x, a, s) +
I
X
i=1
γigi(x, a, s) + λi(gi(x, a, s) − g ̄i) + μi(gi(x, a, s) − φi)
!
+βEsD(γ + λ + μ, x′, s′) ,
where x′ = ζ(x, a, s). (5.11) In the algorithm, we can change supa infλ to infλa supa which brings us back to the exact same setting.
6 Application: A Ramsey problem
We give a simple example of a problem where two-period ex-post lotteries are optimal. The two-period version of the problem (4.16) with S states s = 1, . . . , S in the second period
max
(cs ,ls ,τs )S
s=0 ,q,b
u(c0) + v(l0) + β
S
X
s=1
ps (u(cs) + v(ls)) , (6.1)
s.t. c0 = b−1 + (1 − τ0)l0 − qb, cs = b + (1 − τs)ls, s = 1, . . . , S; (6.2)
(1 − τs)u′(cs) = −v′(ls), s = 0, . . . , S; (6.3)
− qu′(c0) + β
S
X
s=1
psu′(cs) = 0; (6.4)
qb = b−1 − τ0l0 + g0, 0 = b − τsls + gs, s = 1, · · · , S, (6.5)
where ps, s = 1, . . . , S denotes the probability of state s and b−1 gives the initial condition. For simplicity, we assume u(c) = log c and v(l) = p(1 − l), β = 1. The following lemma shows how the constraints of the Ramsey problem can be simplified.
Lemma 6.1 We define
h(l) := 1 − l
2√1 − l , f (l; g) := (l − g)h(l). (6.6)
For any b > 0, the following are equivalent:
22

1. {(cs, ls, τs)S
s=0, q, b} satisfies (6.2) to (6.5);
2. The equations
b = f (ls; gs), ∀s ∈ {1, · · · , S}, (6.7)
and
b−1 = f (l0; g0) + (l0 − g0)(βph(l1) + β(1 − p)h(l2)
| {z }
w
), (6.8)
have solutions with b > 0, ls > gs, ∀s ∈ {0, · · · , S}.
The functions f (l; g) can be interpreted as the net surplus of the government that sets a tax rate to ensure labor supply of l if expenditure is g. We will discuss its shape in a concrete example below. We first introduce the model with ex-post lotteries. It is assumed that the government can randomize over tax rates in each state s ∈ {1, · · · , S} in period 1. To simplify the exposition suppose that, given b ≥ 0, the government can randomize between a high tax rate τH
s (corresponding to agent’s labor supply lL
s ), and a lower tax rate τ L
s (corresponding to agent’s labor supply lH
s ). The lottery problem is then written
max
(ls >gs )S
s=0 ,(πs ), ̄b≥b≥0
u(l0 − g0) + v(l0) + β
S
X
s=1
ps
X
i∈{L,H }
πis(u(li
s − gs) + v(li
s)),
s.t. (6.7), and
b−1 = f (l0; g0) + (l0 − g0)(β
S
X
s=1
X
i∈{L,H }
psπish(li
s)
| {z }
w′
).
(6.9)
To illustrate why lotteries can be benfitial we consider a concrete example and assume p1 = 0.9, as well as 0 = g0 = gL < gH = 0.65. Figure 1 shows how much revenue the government can generate in each state s and the associated utility in that state. Note first that the amount of debt is limited by its ability to pay back in state two. Debt levels above around 0.025 are not feasible. Second, for a given level of feasible debt, the government can collect the necessary revenue via a very high tax wh-
ich implies low l and low welfare and a relatively low tax which implies high l and high welfare. The key to why the government might find
Figure 1: The left panel shows the the functions f (l; g(s)) for s = 1, 2. The right panel shows utility as a function of l for g = 0.
it optimal to sometimes set very high taxes lies in the fact that it can only generate a large
23

revenue from selling bonds at t = 0 if the interest rate is sufficiently low. Since borrowing is constrained by the large government expenditure in state 2, g2 = 0.65, the government might find it optimal to announce a very high tax for state 1, leading to very low consumption in state 1 and high demand for savings and very low interest rates in period zero. Formally, the revenue in period zero from debt is given by (l0 − g0)β PS
s=1
P
i∈{L,H} pi
sh(li
s) and the function h(l) is equal to one at l = 0 and strictly decreasing in l. In this example, the government’s ability to raise revenue from debt in period zero turns out to be extremely limited if it chooses the high-welfare low tax rates in state 1 in the future. Figure 2 shows a scatter plot of possible combinations of revenue at t = 0 and overall welfare. The left hand panel takes the tax rate in state 2 to be high, i.e. lL
2 , the right hand panel takes it to be low. The figure shows that after a certain threshold (at about 0.3) the government can only raise the desired revenue from bond sales and first period taxes if it commits to a very high tax rate in state 1 in the second period. The resulting welfare drops dramatically. The differences between lH
2 and lL
2 of feasible welfare-revenue combinations can be seen to be minor, setting a low tax rate (resulting in lH
2 ) in the second period generally dominates slightly. The right panel of Figure 2 also shows the resulting revenue-welfare combinations if the government randomizes (with probability 0.5) between lH
1 and lL
1 . For the case where it has to raise relatively high revenue, this clearly dominates the lottery-free solution. In particular, it can be seen in the figure (and verified numerically) that for b− between 0.4 and 0.5 a lottery solution strictly dominates all lottery-free solutions as it generates the necessary revenue while leading to much higher welfare. It is subject to further research how prevelant this problem is in realistically calibrated infinite-horizon versions of the model. The results -
in Citanna and Tvede (2024) indicate that it might be quite relevant. However, in the context of our simple example one might argue that in a stationary environment a forward looking government will never choose high debt levels.
Figure 2: The left panel shows a scatter plot of feasible combinations of overall utility and period zero revenue for l2 = lL. The right panel shows a scatter plot of feasible combinations of overall utility and period zero revenue for l2 = lH , as well as for an equi-probable lottery between l1H and
l1L
7 Conclusion
We show how the recursive multiplier approach to optimization problems with forward-looking contains can be used in a model with non-convexities. In general, neither the inf-sup nor the sup-inf formulation of the functional equation gives the correct solution for a model where
24

lotteries are not allowed. We argue that for many applications the sup-inf approach gives the value of an economically meaningful lottery solution. It is subject to further research how to make our approach numerically viable in large scale models.
References
Aiyagari, S. R., A. Marcet, T. J. Sargent, and J. Sepp ̈al ̈a (2002): “Optimal taxation
without state-contingent debt,” Journal of Political Economy, 110, 1220–1254.
Aliprantis, C. D. and K. C. Border (2006): Infinite dimensional analysis: a hitchhiker’s
guide, Springer.
Arnott, R. and J. Stiglitz (1988): “Randomization with Asymmetric Information,” RAND
Journal of Economics, 19, 344–362.
Attanasio, O. and J.-V. Rıos-Rull (2000): “Consumption smoothing in island economies:
Can public insurance reduce welfare?” European economic review, 44, 1225–1258.
Billingsley, P. (2013): Convergence of probability measures, John Wiley & Sons.
Bloise, G. and P. Siconolfi (2022): “A Negishi Approach to Recursive Contracts,”
Econometrica, 90, 2821–2855.
Brezis, H. and H. Bre ́zis (2011): Functional analysis, Sobolev spaces and partial differential
equations, vol. 2, Springer.
Citanna, A. and M. Tvede (2024): “Do taxspots matter?: A study of optimal tax uncer
tainty,” Journal of Economic Theory, 220, 105884.
Cole, H. and F. Kubler (2012): “Recursive contracts, lotteries and weakly concave pareto
sets,” Review of Economic Dynamics, 15, 479–500.
Cooley, T., R. Marimon, and V. Quadrini (2004): “Aggregate consequences of limited
contract enforceability,” Journal of political Economy, 112, 817–847.
Dechert, W. D. (1982): “Lagrange multipliers in infinite horizon discrete time optimal control
models,” Journal of Mathematical Economics, 9, 285–302.
Gauthier, S. and G. Laroque (2014): “On the value of randomization,” Journal of Economic
Theory, 151, 493–507.
Kehoe, P. J. and F. Perri (2002): “International business cycles with endogenous incomplete
markets,” Econometrica, 70, 907–928.
Marcet, A. and R. Marimon (2019): “Recursive contracts,” Econometrica, 87, 1589–1631.
25

Marimon, R. and J. Werner (2021): “The envelope theorem, Euler and Bellman equations,
without differentiability,” Journal of Economic Theory, 196, 105309.
Myerson, R. B. (1982): “Optimal coordination mechanisms in generalized principal–agent
problems,” Journal of mathematical economics, 10, 67–81.
Nedic, A. and D. Bertsekas (2001): “Convergence rate of incremental subgradient algo
rithms,” Applied Optimization, 54, 223–264.
Pavoni, N., C. Sleet, and M. Messner (2018a): “The dual approach to recursive optimiza
tion: theory and examples,” Econometrica, 86, 133–172.
——— (2018b): “Online Appendix The Dual Approach to Recursive Optimization: Theory
and Examples,” .
Pavoni, N. and G. L. Violante (2007): “Optimal welfare-to-work programs,” The Review
of Economic Studies, 74, 283–318.
Prescott, E. C. and R. M. Townsend (1984): “Pareto optima and competitive equilibria
with adverse selection and moral hazard,” Econometrica: journal of the econometric society,
21–45.
Prescott, E. S. (1999): “A primer on moral-hazard models,” FRB Richmond Economic
Quarterly, 85, 47–77.
Rockafellar, R. T. (1974): Conjugate duality and optimization, SIAM.
——— (2015): “Convex analysis:(pms-28),” .
Shen, C., F. K ̈ubler, Y. Yang, and Z. Zhou (2025): “A Lagrangian Approach to Optimal
Lotteries in Non-Convex Economies,” arXiv preprint arXiv:2504.15997.
Spear, S. E. and S. Srivastava (1987): “On repeated moral hazard with discounting,” The
Review of Economic Studies, 54, 599–617.
Stiglitz, J. E. (1982): “Self-selection and Pareto efficient taxation,” Journal of public
economics, 17, 213–240.
Stokey, N. L. and R. E. Lucas Jr (1989): Recursive methods in economic dynamics,
Harvard University Press.
Urruty, J.-B. H. and C. Lemare ́chal (1993): Convex analysis and minimization algorithms
II, Springer-Verlag.
Weiss, L. (1976): “The desirability of cheating incentives and randomnness in the optimal
income tax,” Journal of Political Economy, 84, 1343–1352.
Yosida, K. and E. Hewitt (1952): “Finitely additive measures,” Transactions of the
American Mathematical Society, 72, 46–66.
26

Appendix
A Proofs
Proof of Lemma 3.1
It suffices to show that
yin∈fΓ sup
x∈X ̃
f (x, y(x)) ≤ sup
x∈X ̃
yin∈fΓ f (x, y(x)). (A.1)
For any ε > 0 and x ∈ X ̃ , there exists yε(x) ∈ Y , such that
f (x, yε(x)) ≤ yi∈nfY f (x, y) + ε.
Therefore, taking y ∈ Γ s.t. y(x) = yε(x) for any x ∈ X ̃ , we have
sup
x∈X ̃
f (x, yε(x)) ≤ sup
x∈X ̃
yi∈nfY f (x, y) + ε
= sup
x∈X ̃
yin∈fΓ f (x, y(x)) + ε,
implying that
yin∈fΓ sup
x∈X ̃
f (x, y(x)) ≤ sup
x∈X ̃
yin∈fΓ f (x, y(x)) + ε.
Since ε is chosen arbitrarily, this implies (A.1). □
Proof of Theorem 3.1
Using (3.3) and (3.4), we obtain the following.
D(γ, x0, s0) = inf
(λit (ht ))∈Λ
sup
(at )∈A ̃(x0 ,s0 )
L((at), (λi
t(ht)); (γi), x0, s0)
= inf
(λit (ht ))∈Λ
sup
(at )∈A ̃(x0 ,s0 )
Es0
∞
X
t=0
βt r(xt, at, st) +
I
X
i=1
γigi(xt, at, st)
+
I
X
i=1
λi
t(s0, a0, · · · , st−1, at−1, st)
∞
X
n=0
βngi(xt+n, at+n, st+n) − g ̄i
!!
= inf
(λi
0)
inf
(λit (ht ))t≥1
sup
a0
sup
(at )t≥1
r(a0, x0, s0) +
I
X
i=1
γigi(a0, x0, s0) + λi
0(gi(a0, x0, s0) − g ̄i)
!
| {z }
h1 ((λi
0 ),a0 )
+ Es0
∞
X
t=1
βt r(at, xt, st) +
I
X
i=1
(γi + λi
0)gi(at, xt, st) + λi
t(st, at−1)
∞
X
n=0
βngi(at+n, xt+n, st+n) − g ̄i
!!!
| {z }
h2 ((λi
0 ),a0 ,(at )t≥1 ,(λit (st ,at−1 ))t≥1 )
,
(A.2)
27

where the third equation separates the terms concerning t = 0 and t ≥ 1. 11. We define X = A,
X ̃ = A(x0, s0) and Y = Λ. Since (λi
t(ht))t≥1 = (λi
t(s0, a0, ht−1))t≥1, we can view it as a map
from X to Y for each s0 ∈ S, and sup(a(st))t≥1 h1((λi
0), a0)+h2((λi
0), a0, (a(st))t≥1, (λi
t(st, at−1))t≥1)
can be regarded as a functional f (a0, (λi
t(s0, a0, ht−1))t≥1). By Lemma 3.1, we can exchange
the operator inf(λt(ht))t≥1 and supa0 to obtain
D(γ, x0, s0) = inf
(λi
0)
inf
(λit (ht ))t≥1
sup
a0
sup
(a(st ))t≥1
h1((λi
0), a0) + h2((λi
0), a0, (at)t≥1, (λi
t(st, at−1))t≥1)
= inf
(λi
0)
sup
a0
"
h1((λi
0), a0) + inf
(λit (ht ))t≥1
sup
(at )t≥1
h2((λi
0), a0, (at)t≥1, (λi
t(st, at−1))t≥1)
#
.
(A.3)
For any possible realization of the shock at t = 1, s ̄1 ∈ S1, we denote a(st; s ̄0, s ̄1) the action
at st if in history st, s0 = s ̄0, s1 = s ̄1, similarly let λi
t(ht; s ̄0, a ̄0, s ̄1) denotes the multiplier at
history ht after specific realizations of s ̄0, a ̄0 and s ̄1. For each s ̄1 ∈ S, define
h3((a(st|(s0, s ̄1)))t≥1, (λi
t(ht|(s0, a0, s ̄1)))t≥1; s0, s ̄1) =
Es ̄1
∞
X
t=1
βt−1 r(a(st; s0, s ̄1), xt, st) +
I
X
i=1
(γi + λi
0)gi(a(st; s0, s ̄1), xt, st) + λi
t(st+1; s0, a0, s ̄1)
∞
X
n=0
βngi(a(st+n; s0, s ̄1), x1+t, st+n) − g ̄i
!!
We then have
inf
(λit (ht ))t≥1
sup (at )t≥1
h2 ((λi
0), a0, (at)t≥1, (λi
t(st, at−1))t≥1)
= inf
(λit (ht ))t≥1
sup (at )t≥1
Es0
∞
X
t=1
βt r(at, xt, st) +
I
X
i=1
(γi + λi
0)gi(at, xt, st) + λi
t(st, at−1)
∞
X
n=0
βngi(at+n, xt+n, st+n) − g ̄i
!!
= inf
(λit(ht|(s0,a0,s ̄1)))t≥1,s ̄1 ∈S
sup
(at(st|(s0,s ̄1)))t≥1,s ̄1 ∈S
β
X
s1 ∈S
π(s ̄1|s0)h3((at(st|(s0, s ̄1)))t≥1, (λi
t(ht|(s0, a0, s ̄1)))t≥1; s0, s ̄1)
=β
X
s ̄1 ∈S
π(s ̄1|s0) inf
(λit(ht|(s0,a0,s ̄1 )))t≥1
sup
(a(st|(s0 ,s ̄1)))t≥1
h3((at(st|(s0, s ̄1)))t≥1, (λi
t(ht|(s0, a0, s ̄1)))t≥1; s0, s ̄1)
=β
X
s1 ∈S
π(s1|s0)D(γ + λ0, x1, s1)
=βEs0 D(γ + λ0, x1, s1),
(A.4)
where the first equation separates the terms concerning different s1 ∈ S, and the second
equation uses the definition of the dual value function D12. The recursive formulation (3.5)
can then be obtained by combining (A.3) and (A.4). □
11In the expression supa0 sup(at)t≥1 , we omit the feasible sets for a0 and (at)t≥1. Specifically:
• a0 ∈ A ̃(x0, s0),
• (at(s0, s1, st−2))t≥1 ∈ A ̃∞(x1, s1), where x1 = ζ(x0, a0(s0), s0), for all s0, s1 ∈ S.
12Note that D is finite according to the fifth assumption in Assumption 3.1, which is important to ensure the finiteness of the sum of several dual value functions
28

Proof of Theorem 3.2
Following the same procedure as in the proof for Theorem 3.1, we have
D ̃ (γ, x, s) = inf
λ∈A→RI
+
sup
a∈A
"
r(x, a, s) +
I
X
i=1
γigi(x, a, s) + λi(a)(gi(x, a, s) − g ̄i)
!
+ βEsD ̃ (γ + λ(a), x′, s′)
#
,
where x′ = ζ(x, a, s), and p(x, a, s) ≥ 0. (A.5)
It then follows from Lemma 3.1 that
D ̃ (γ, x, s) = inf
λ∈A→RI
+
sup
a∈A
"
r(x, a, s) +
I
X
i=1
γigi(x, a, s) + λi(a)(gi(x, a, s) − g ̄i)
!
+ βEsD ̃ (γ + λ(a), x′, s′)
#
= sup
a∈A
inf
λ∈RI
+
"
r(x, a, s) +
I
X
i=1
γigi(x, a, s) + λi(gi(x, a, s) − g ̄i)
!
+ βEsD ̃ (γ + λ, x′, s′)
#
,
where x′ = ζ(x,a, s), and p(x, a, s) ≥ 0.
□
Proof of Lemma 3.3
• Show that B preserves convexity. See the proof of Lemma 2 in Pavoni et al. (2018a).
• Show that B preserves L-Lipschitz continuity. Assume that F is L-Lipschitz. Given
γ1, γ2 ∈ RI
+, we have
B(F )(x, γ1, s) = inf
λ∈RI
+
sup
a∈A ̃(x,s)
"
r(a, x, s) +
I
X
i=1
γi
1gi(a, x, s) + λi(gi(a, x, s) − g ̄i)
!
+ βEsF (γ1 + λ, x′, s′)
#
= inf
λ∈RI
+
sup
a∈A ̃(x,s)
"
r(a, x, s) +
I
X
i=1
γi
2gi(a, x, s) + λi(gi(a, x, s) − g ̄i)
!
+ βEsF (γ2 + λ, x′, s′)
+
I
X
i=1
(γi
1 − γi
2)gi(a, x, s) + βEs(F (γ1 + λ, x′, s′) − F (γ2 + λ, x′, s′))
#
Since
I
X
i=1
(γi
1 − γi
2)gi(a, x, s) + βEs(F (γ1 + λ, x′, s′) − F (γ2 + λ, x′, s′))
≤∥γ1 − γ2∥1 miax ∥gi∥∞ + βL∥γ1 − γ2∥1 ≤ L∥γ1 − γ2∥1,
29

we have
B(F )(x, γ1, s) = inf
λ∈RI
+
sup
a∈A ̃(x,s)
"
r(a, x, s) +
I
X
i=1
γi
2gi(a, x, s) + λi(gi(a, x, s) − g ̄i)
!
+ βEsF (γ2 + λ, x′, s′)
+
I
X
i=1
(γi
1 − γi
2)gi(a, x, s) + βEs(F (γ1 + λ, x′, s′) − F (γ2 + λ, x′, s′))
#
≤ inf
λ∈RI
+
sup
a∈A ̃(x,s)
"
r(a, x, s) +
I
X
i=1
γi
2gi(a, x, s) + λi(gi(a, x, s) − g ̄i)
!
+ βEsF (γ2 + λ, x′, s′)
+L∥γ1 − γ2∥1] = B(F )(x, γ2, s) + L∥γ1 − γ2∥1
Hence B preserves L-Lipschitz continuity.
• Show that B preserves the property (3.10). Assume that F satisfies (3.10). Given
x ∈ X , γ ∈ RI
+, s ∈ S. Assume that (a(st))t≥0 is a feasible control to problem (3.1) with
x0 = x, s0 = s, satisfying



v0 = Es0
P∞
t=0 βtr(xt, a(st), st);
vi = Es0
P∞
t=0 βtgi(xt, a(st), st).
We denote x′ = ζ(a(s0), x0, s0), it is straightforward to verify that a(st|(s, s′)) is a feasible
control to problem (3.1) with x0 = x′, s0 = s′. Therefore, for any λ ∈ RI
+, we have
sup
a∈A
"
r(a, x, s) +
I
X
i=1
γigi(a, x, s) + λi(gi(a, x, s) − g ̄i)
!
+ βEsF (γ + λ, x′, s′)
#
(F satisfies (3.10)) ≥r(a0(s0), x0, s0) +
I
X
i=1
γigi(a0(s0), x0, s0) + λi(gi(a0(s0), x0, s0) − g ̄i)
+ βEs0
∞
X
t=1
βt−1r(xt, at(st), st) +
I
X
i=1
(γi + λi)βt−1gi(xt, at(st), st)
=v0 +
I
X
i=1
γivi + λi(vi − g ̄i)
≥v0 +
I
X
i=1
γivi.
Hence B(F )(γ, x, s) ≥ v0 + PI
i=1 γivi. Since x ∈ X , γ ∈ RI
+, s ∈ S, and the feasible
control (at(st))t≥0 with x0 = x, s0 = s are chosen arbitrarily, it is then straightforward
to conclude that B(F ) satisfies (3.10).
30

• Show that B preserves the property (3.12). By the definition of B, we have
B(F )(x, γ, s) = inf
λ∈RI
+
sup
a∈A ̃(x,s)
"
r(a, x, s) +
I
X
i=1
γigi(a, x, s) + λi(gi(a, x, s) − g ̄i)
!
+ βEsF (γ + λ, x′, s′)
#
≤ sup
a∈A ̃(x,s)
"
r(a, x, s) +
I
X
i=1
γigi(a, x, s)
!
+ βEsF (γ, x′, s′)
#
≤∥r∥∞ +
I
X
i=1
γi∥gi∥∞ + β 1 +
I
X
i=1
γi
!
L
≤ 1+
I
X
i=1
γi
!
L,
where the last step uses the identity (1 − β)L = ∥r∥∞ + P
i ∥gi∥∞ together with non
negativity.
• Show that B preserves the finiteness of the norm ∥ · ∥M. This is a direct corollary
of the fact that B(F ) preserves the properties (3.10) and (3.12). □
Proof of Theorem 3.3
• Step 1. Show that there exists a pointwise limit of B(n)(F0) in N . According to
Lemma 3.3, since F0 ∈ N , we know that
B(F0) ∈ N ,
implying that B(F0) ≤ F0. By induction and monotonicity we have
B(n)(F0) ≤ B(n−1)(F0), ∀n ∈ N+.
Therefore, for any γ ∈ RI
+, x ∈ X , s ∈ S, the sequence
{B(n)(F0)(γ, x, s)}n∈N+
is a decreasing, bounded sequence, and hence has a limit F ∗(γ, x, s). It is straightforward
to verify that F ∗ ∈ N .
• Step 2. Show that B(n)(F0) converges to F ∗ in norm ∥ · ∥M. For any x ∈ X , s ∈ S,
we know that
B(n)(F0)(γ, x, s)
is L-Lipschitz and uniformly bounded in any compact ball B(k), according to Arzela
Ascoli theorem, there exists a subsequence
{B(tn)(F0)(γ, x, s)} ⊂ {B(n)(F0)(γ, x, s)},
31

s.t.
B(tn)(F0)(·, x, s) ⇒ F ̃k(·, x, s), as n → ∞ in B(k),
for some F ̃k(·, x, s), where ⇒ denotes uniformly convergence. According to step 1, we
know that
nli→m∞ B(tn)(F0)(γ, x, s) = F ∗(γ, x, s), ∀γ ∈ B(k).
Therefore, we have F ̃k(γ, x, s) = F ∗(γ, x, s), ∀γ ∈ B(k), and hence
B(tn)(F0)(·, x, s) ⇒ F ∗(·, x, s), as n → ∞ in B(k).
According to the monotonicity, the whole sequence uniformly converges, i.e.
B(n)(F0)(·, x, s) ⇒ F ∗(·, x, s), as n → ∞ in B(k),
yielding that
∥B(n)(F0)(·, xj , si) − F ∗(·, xj , si)∥L∞(B(k)) → 0, ∀si ∈ S, xj ∈ X , k ∈ N+. (A.6)
Since functions in N is bounded by affine functions, there exists C > 0, s.t.
∥B(n)(F0)(·, xj , si) − F ∗(·, xj , si)∥L∞(B(k)) ≤ C(k + 1), ∀si ∈ S, xj ∈ X , k ∈ N+. (A.7)
Therefore, applying (A.7) we have
∥B(n)(F0) − F ∗∥M
=
|S|
X
i=1
1 2i
"∞ X
j=1
1 2j
∞
X
k=1
1
2k ∥B(n)(F0)(·, xj , si) − F ∗(·, xj , si)∥L∞(B(k))
!#
≤
|S|
X
i=1
1 2i

   
   
J
X
j=1
1 2j

   
K
X
k=1
1
2k ∥B(n)(F0)(·, xj , si) − F ∗(·, xj , si)∥L∞(B(k))
!
+
X
k>K
(k + 1)C 2k
!
| {z }
I

   

   
   
+
|S |
X
i=1
1 2i
X
j>J
1 2j
∞
X
k=1
(k + 1)C 2k
| {z }
II
For any ε > 0, there exists J > 0 and K > 0, s.t. I < ε/3, II < ε/3. Furthermore,
according to (A.6), there exists N ∈ N+, s.t. when n > N , we have
|S|
X
i=1
1 2i
J
X
j=1
1 2j
"K X
k=1
1
2k ∥B(n)(F0)(·, xj , si) − F ∗(·, xj , si)∥L∞(B(k))
!#
<ε
3.
32

Therefore, when n > N , we have
∥B(n)(F0) − F ∗∥M
≤
|S|
X
i=1
1 2i
(J X
j=1
1 2j
"K X
k=1
1
2k ∥B(n)(F0)(·, xj , si) − F ∗(·, xj , si)∥L∞(B(k))
!
+ε
3
#)
+ε
3
≤
|S|
X
i=1
1 2i
J
X
j=1
1 2j
"K X
k=1
1
2k ∥B(n)(F0)(·, xj , si) − F ∗(·, xj , si)∥L∞(B(k))
!#
+ 2ε
3 <ε
Therefore ∥B(n)(F0) − F ∗∥M → 0 by definition.
Step 3. Show that B(F ∗) = F ∗. According to monotonicity, we have
B(F ∗) ≤ B(n)(F0), ∀n ∈ N+.
For any γ ∈ RI
+, x ∈ X , s ∈ S, we take n → ∞ and have
B(F ∗) ≤ F ∗.
If there exists l > 0 s.t. B(F ∗)(γ, x, s) = F ∗(γ, x, s) − l for some x ∈ X , s ∈ S, γ ∈ RI
+.
According to the definition of B, we know that there exists λ ∈ RI
+, s.t.
sup
a∈A ̃(x,s)
"
r(a, x, s) +
I
X
i=1
γigi(a, x, s) + λi(gi(a, x, s) − g ̄i)
!
+ βEsF ∗(γ + λ, x′, s′)
#
< F ∗(γ, x, s)− l
2.
(A.8)
Since B(n)(F0) → F ∗, there exists N ∈ N+, s.t.
B(N)(F0)(γ + λ, x′, s′) − F ∗(γ + λ, x′, s′) ≤ l
4 , ∀x′ ∈ {ζ(x, a, s)|a ∈ A ̃(x, s)}, s′ ∈ S.
Therefore,
B(N+1)(F0)(γ, x, s)
≤ sup
a∈A ̃(x,s)
"
r(a, x, s) +
I
X
i=1
γigi(a, x, s) + λi(gi(a, x, s) − g ̄i)
!
+ βB(N)(F0)(γ + λ, x′, s′)
#
< sup
a∈A ̃(x,s)
"
r(a, x, s) +
I
X
i=1
γigi(a, x, s) + λi(gi(a, x, s) − g ̄i)
!
+ βF ∗(γ + λ, x′, s′) + l
4
#
< F ∗(γ, x, s) − l
4,
contradicting the fact that B(N+1)(F0)(γ, x, s) ≥ F ∗(γ, x, s). Hence B(F ∗) ≥ F ∗, and
therefore B(F ∗) = F ∗.
• Step 4. Show that F ∗ is the largest fixed point in N . For any F ∈ N , which is a
fixed point of B, we know that F ≤ F0. Therefore, according to the monotonicity of B,
we have
F = B(n)(F ) ≤ B(n)(F0), ∀n ∈ N+.
33

We take n → ∞ and have F ≤ F ∗. □
Proof of Lemma 3.4
According to the definition of the dual value function D(γ, x0, s0), for any ε > 0, there exists
(λi
t(ht)) ∈ Λ, s.t.
sup
at (st )∈A ̃∞ (x0 )
L((at), (λi
t); (γi), x0, s0) ≤ D(γ, x0, s0) + ε. (A.9)
We define M = P∞
t=0
P
ht ∈Ht
PI
i=1 βtλi
t(ht)πt(st|s0).
• Step 1. We first show that,
sup
(at )∈A ̃∞ (x0 )
L((at), (λi
t); (γi), x0, s0)
= Tli→m∞ sup
(at )∈A ̃∞ (x0 )
Es0
T
X
t=0
βt r(xt, at, st) +
I
X
i=1
γigi(xt, at, st)
+λi
t(s0, a0, · · · , st−1, at−1, st)
T −t
X
n=0
βngi(xt+n, at+n, st+n) − g ̄i
!!
.
(A.10)
34

Since r and (gi) are bounded, for any T ≥ 0 we have
sup
(at )∈A ̃∞ (x0 )
L((at), (λi
t); (γi), x0, s0)
= sup
(at )∈A ̃∞ (x0 )
Es0
∞
X
t=0
βt r(xt, at, st) +
I
X
i=1
γigi(xt, at, st)
+λi
t(s0, a0, · · · , st−1, at−1, st)
∞
X
n=0
βngi(xt+n, at+n, st+n) − g ̄i
!!
= sup
(at )∈A ̃∞ (x0 )
Es0
T
X
t=0
βt r(xt, at, st) +
I
X
i=1
γigi(xt, at, st)
| {z }
I
+λi
t(s0, a0, · · · , st−1, at−1, st)
T −t
X
n=0
βngi(xt+n, at+n, st+n) − g ̄i
!!
| {z }
I
+
∞
X
t=T +1
βt r(xt, at, st) +
I
X
i=1
γigi(xt, at, st)
| {z }
II
+λi
t(s0, a0, · · · , st−1, at−1, st)
∞
X
n=0
βngi(xt+n, at+n, st+n) − g ̄i
!!
| {z }
II
+
T
X
t=0
βtλi
t(s0, a0, · · · , st−1, at−1, st)
∞
X
n=T −t+1
βngi(xt+n, at+n, st+n)
!
| {z }
III
.
To prove (A.10), it suffices to show that II → 0 and III → 0 uniformly for any (at) ∈
A ̃∞(x0) as T → ∞. For II, according to the boundedness of r and gi,
Es0
∞
X
t=T +1
βt r(xt, at, st) +
I
X
i=1
γigi(xt, at, st)
!
→ 0 (A.11)
uniformly w.r.t. (at). Furthermore, since Es0
P∞
t=T +1
P
ht ∈Ht
PI
i=1 βtλi
t(ht) → 0, and
that | P∞
n=0 βngi(xt+n, at+n, st+n) − g ̄i| are bounded above by ∥gi∥∞
1−β + ∥g ̄i∥∞, we have
Es0
∞
X
t=T +1
βt
I
X
i=1
λi
t(s0, a0, · · · , st−1, at−1, st)
∞
X
n=0
βngi(xt+n, at+n, st+n) − g ̄i
!!
→0
(A.12)
uniformly w.r.t. (at). Combining (A.11) and (A.12) we know that II → 0 as T → ∞
uniformly w.r.t. (at).
35

For III, we have
III =Es0
[T
2]
X
t=0
I
X
i=1
βtλi
t(s0, a0, · · · , st−1, at−1, st)
∞
X
n=T −t+1
βngi(xt+n, at+n, st+n)
!
| {z }
I I I (1)
+
T
X
t=[ T
2 ]+1
I
X
i=1
βtλi
t(s0, a0(s0), · · · , st−1, at−1, st)
∞
X
n=T −t+1
βngi(xt+n, at+n, st+n)
!
| {z }
I I I (2)
.
Since Es0
P[ T
2] t=0
PI
i=1 βtλi
t(s0, a0, · · · , st−1, at−1, st) is bounded above by M , and P∞
n=T −t+1 βngi(xt+n, at+n, st+n)
is bounded above by βT −[ T
2 ]+1
1−β ∥gi∥∞, we know that III(1) → 0 uniformly w.r.t. (at) when
T → ∞.
Since
Es0
T
X
t=[ T
2 ]+1
I
X
i=1
βtλi
t(s0, a0, · · · , st−1, at−1, st)
≤Es0
∞
X
t=[ T
2 ]+1
I
X
i=1
βtλi
t(s0, a0, · · · , st−1, at−1, st) → 0,
uniformly w.r.t. (at), and | P∞
n=T −t+1 βngi(xt+n, at+n, st+n)| are bounded above by
∥gi ∥∞
1−β , we know that III(2) → 0 uniformly w.r.t. (at) when T → ∞. Hence III → 0
uniformly w.r.t. (at) as T → ∞, and therefore, (A.10) holds.
• Step 2. We then show that, given x0 ∈ X , s0 ∈ S, we have
lim sup
T →∞
sup
(at (st ))∈A ̃∞ (x0 )
Es0 βT +1F (γ +
T
X
t=0
λt(s0, a0, · · · , st−1, at−1, st), xT +1, sT +1) ≤ 0.
(A.13)
According to (3.12), we know that for any (at(st)) ∈ A ̃∞(x0), we have
Es0 βT +1F (γ +
T
X
t=0
λt(s0, a0, · · · , st−1, at−1, st), xt, st)
≤Es0 βT +1
"
1+
I
X
i=1
γi +
T
X
t=0
λi
t(s0, a0, · · · , st−1, at−1, st)
!#
L
=βT +1 1 +
I
X
i=1
γi
!
L + βT +1LEs0
T
X
t=0
I
X
i=1
λi
t(s0, a0, · · · , st−1, at−1, st)
≤ βT +1 1 +
I
X
i=1
γi
!
L
| {z }
IV
+ βT +1L
T
X
t=0
X
ht ∈Ht
I
X
i=1
π(st|s0)λi
t(ht)
| {z }
V
36

Obviously IV → 0 as T → ∞, and
V =L
T
X
t=0
βT +1−t X
ht ∈Ht
I
X
i=1
βtπ(st|s0)λi
t(ht)
≤L
[T
2]
X
t=0
βT +1−[ T
2] X
ht ∈Ht
I
X
i=1
βtπ(st|s0)λi
t(ht) + L
∞
X
t=[ T
2 ]+1
X
ht ∈Ht
I
X
i=1
βtπ(st|s0)λi
t(ht)
≤LβT +1−[ T
2 ]M + L
∞
X
t=[ T
2 ]+1
X
ht ∈Ht
I
X
i=1
βtπ(st|s0)λi
t(ht) → 0(T → ∞).
Furthermore, observing that IV and V are independent on (at(st)), and we obtain (A.13).
• Step 3. According to (A.9) and (A.10), there exists T1 > 0, s.t. when T ≥ T1,
D(γ, x0, s0) + 2ε ≥ sup
(at (st ))∈A ̃∞ (x0 )
Es0
T
X
t=0
βt r(xt, at, st) +
I
X
i=1
γigi(xt, at, st)
+λi
t(s0, a0, · · · , st−1, at−1, st)
T −t
X
n=0
βngi(xt+n, at+n, st+n) − g ̄i
!!
.
(A.14)
Combining the inequality (A.14) and (A.13), we know that there exists T2 > T , s.t. when
T > max{T1, T2},
D(γ, x0, s0) + 3ε ≥ sup
(at )∈A ̃∞ (x0 )
Es0
T
X
t=0
βt r(xt, at, st) +
I
X
i=1
γigi(xt, at, st)
+λi
t(s0, a0(s0), · · · , st−1, at−1(st−1), st)
T −t
X
n=0
βngi(xt+n, at+n, st+n) − g ̄i
!!
+ sup
(at )∈A ̃∞ (x0 )
Es0 βT +1F (γ +
T
X
t=0
λt(s0, a0, · · · , st−1, at−1, st), xT +1, sT +1)
≥ sup
(at )∈A ̃∞ (x0 )
"
Es0
T
X
t=0
βt r(xt, at, st) +
I
X
i=1
γigi(xt, at, st)
+λi
t(s0, a0, · · · , st−1, at−1, st)
T −t
X
n=0
βngi(xt+n, at+n, st+n) − g ̄i
!!
+Es0 βT +1F (γ +
T
X
t=0
λt(s0, a0, · · · , st−1, at−1, st), xT +1, sT +1)
#
.
(A.15)
37

We rearrange the right hand side of (A.15) and have
sup
(at )∈A ̃∞ (x0 )
"
Es0
T
X
t=0
βt r(xt, at, st) +
I
X
i=1
γigi(xt, at, st)
+λi
t(s0, a0, · · · , st−1, at−1, st)
T −t
X
n=0
βngi(xt+n, at+n, st+n) − g ̄i
!!
+Es0 βT +1F (γ +
T
X
t=0
λt(s0, a0, · · · , st−1, at−1, st), xT +1, sT +1)
#
= sup
(at (st ))∈A ̃∞ (x0 )
"
Es0
T
X
t=0
βt (r(xt, at, st)
+
I
X
i=1
γi +
t−1
X
n=0
λi
n(s0, a0, · · · , sn−1, an−1, sn)
!
gi(xt, at(st), st)
+λi
t(s0, a0, · · · , st−1, at−1, st) gi(xt, at, st) − g ̄i
+Es0 βT +1F (γ +
T
X
t=0
λt(s0, a0, · · · , st−1, at−1, st), xT +1, sT +1)
#
(A.16)
Since F is a fixed point of B, we have
sup
(at )∈A ̃∞ (x0 )
h
Es0 βT (r(xT , aT , sT )
+
I
X
i=1
γi +
T −1
X
n=0
λi
n(s0, a0, · · · , sn−1, an−1, sn)
!
gi(xT , aT , sT )
+λi
T (s0, a0, · · · , sT −1, aT −1, sT ) gi(xT , aT (sT ), sT ) − g ̄i
+Es0 βT +1F (γ +
T
X
t=0
λt(s0, a0, · · · , st−1, at−1, st), xT +1, sT +1)
#
≥ sup
(at )∈A ̃∞ (x0 )
Es0 βT F (γ +
T −1
X
t=0
λt(s0, a0, · · · , st−1, at−1, st), xT , sT ).
Hence by induction, the right hand side of (A.16) is bounded below by F (γ, x0, s0), and
(A.15) implies that D(γ, x0, s0) + 3ε ≥ F (γ, x0, s0). Since ε is arbitrarily chosen, we
conclude that D(γ, x0, s0) ≥ F (γ, x0, s0). □
Proof of Corollary 3.1
We define
B ̃(F ) = sup
a∈A ̃(x,s)
inf
λ∈RI
+
"
r(a, x, s) +
I
X
i=1
γigi(a, x, s) + λi(gi(a, x, s) − g ̄i)
!
+ βEsF (γ + λ, x′, s′)
#
.
38

According to Lemma 3.1, we have
B ̃(F ) = sup
a∈A ̃(x,s)
inf
λ∈RI
+
"
r(a, x, s) +
I
X
i=1
γigi(a, x, s) + λi(gi(a, x, s) − g ̄i)
!
+ βEsF (γ + λ, x′, s′)
#
= inf
(λa )a∈A ∈RI
+
sup
a∈A ̃(x,s)
"
r(a, x, s) +
I
X
i=1
γigi(a, x, s) + λi
a(gi(a, x, s) − g ̄i)
!
+ βEsF (γ + λa, x′, s′)
#
.
To prove the corollary, it suffices to show that the operator B ̃ satisfies:
• B ̃(N ) ⊂ N ;
• B ̃ satisfies monotonicity,
for processing the same proof for Theorem 3.3 and Lemma 3.4. It is straightforward to verify
the monotonicity. It suffices to check that B ̃(N ) ⊂ N .
1. Show that B ̃ preserves convexity. We note that when F is convex in γ, then given
a ∈ A,
h
r(a, x, s) + PI
i=1 γigi(a, x, s) + λi
a(gi(a, x, s) − g ̄i) + βEsF (γ + λa, x′, s′)
i
is
convex in (γ, (λa)a∈A), then the same proof of Lemma 2 in Pavoni et al. (2018a) applies.
2. Show that B ̃ preserves (3.10), (3.12), and the L-Lipschitz continuity. The proof
is analogous to that of Lemma 3.3, with λ replaced by λa.
3. Show that B ̃ preserves the finiteness of the norm ∥ · ∥M. This is a direct corollary
of the fact that B ̃(F ) preserves the properties (3.10) and (3.12). □
Proof of Theorem 4.1
• Step 1. For step 1, we aim to show that for any x ∈ X, we have
f ∗∗(x) = sup
(x∗ ,β )∈X ∗ ×R
⟨x∗, x⟩ − β,
s.t.⟨x∗, y⟩ − β ≤ f (y), ∀y ∈ X.
(A.17)
First, by the definition of biconjugate, for any x ∈ X, we have
f ∗∗(x) = sup
x∗ ∈X ∗
⟨x∗, x⟩ − f ∗(x∗)
= sup
(x∗,β)∈epi(f ∗)
⟨x∗, x⟩ − β.
(A.18)
Second, by the definitions of epigraph and conjugate, we know that
(x∗, β) ∈ epi(f ∗)
⇔f (x∗) ≤ β
⇔ sup
y∈X
⟨x∗, y⟩ − f (y) ≤ β
⇔⟨x∗, y⟩ − f (y) ≤ β, ∀y ∈ X
⇔⟨x∗, y⟩ − β ≤ f (y), ∀y ∈ X.
(A.19)
39

Therefore (A.17) can be obtained by combining (A.18) and (A.19).
• Step 2. For step 2, we aim to show that
epi(f ∗∗) ⊆ cl co epi(f ). (A.20)
For any (x0, α0) ̸∈ cl co epi(f ), according to Lemma B.1, there exists x∗ ∈ X and λ ∈ R,
such that
⟨x∗, x⟩ − λα < γ < γ0 = ⟨x∗, x0⟩ − λα0, ∀(x, α) ∈ cl co epi(f ). (A.21)
Since f is proper, dom(f ) ̸= ∅, and hence there exists x′ ∈ dom(f ). For any α′ ≥ f (x′),
(x′, α′) ∈ epi(f ) ⊆ cl co epi(f ). We take x = x′, α = α′ → +∞ on the left-hand-side in
(A.21), and obtain λ ≥ 0.
1. If λ > 0. According to (A.21), we know that
⟨ x∗
λ , x⟩ − γ
λ < α, ∀(x, α) ∈ cl co epi(f ).
Therefore, ( x∗
λ,γ
λ ) satisfies the constraint in (A.17). Furthermore, from (A.21) we
have
⟨ x∗
λ , x0⟩ − γ
λ = α0 + γ0 − γ
λ > α0,
implying that
f ∗∗(x0) > α0,
according to (A.17). Hence (x0, α0) ̸∈ epi(f ∗∗).
2. If λ = 0, (A.21) implies that
⟨x∗, x⟩ < γ < γ0 = ⟨x∗, x0⟩, ∀x ∈ epi(f ). (A.22)
We take x∗ ∈ X∗, β ∈ R, such that (4.11) holds. Then for any K > 0, we have
⟨x∗ + Kx∗, x⟩ − (Kγ + β)
=K (⟨x∗, x⟩ − γ) + ⟨x∗, x⟩ − β
≤⟨x∗, x⟩ − β ≤ f (x), ∀x ∈ X.
Therefore (x∗ + Kx∗, Kγ + β) satisfies the constraint in (A.17). Furthermore, from
(A.22) we have
⟨x∗ + Kx∗, x0⟩ − (Kγ + β)
=K (⟨x∗, x0⟩ − γ) + ⟨x∗, x0⟩ − β
=K(γ0 − γ) + ⟨x∗, x0⟩ − β,
implying that
f ∗∗(x0) ≥ K(γ0 − γ) + ⟨x∗, x0⟩ − β, (A.23)
40

according to (A.17). We take
K > α0 + β − ⟨x∗, x0⟩
γ0 − γ
in (A.23) and obtain f ∗∗(x0) > α0, yielding that (x0, α0) ̸∈ epi(f ∗∗).
Therefore we have shown that, for any (x0, α0) ̸∈ cl co epi(f ), we know that (x0, α0) ̸∈
epi(f ∗∗), which is equivalent to (A.20).
• Step 3. For step 3, we aim to show that
cl co epi(f ) ⊆ epi(f ∗∗). (A.24)
From (A.17) we know f ∗∗(x) ≤ f (x), ∀x ∈ X from the constraint. Therefore, epi(f ) ⊆
epi(f ∗∗). It then suffices to show that epi(f ∗∗) is a closed convex set, or equivalently,
to show that f ∗∗ is convex and lower semicontinuous, according to Proposition B.1 and
Proposition B.2.
1. Convexity. Given x ∈ X. Assume that x∗ ∈ X∗ satisfies ⟨x∗, y⟩−β ≤ f (y), ∀y ∈ X.
According to (A.17), for any x1, x2 ∈ X, 0 ≤ p1, p2 ≤ 1 such that p1 + p2 = 1 and
p1x1 + p2x2 = x, we have
⟨x∗, x⟩ − β
=p1 (⟨x∗, y1⟩ − β) + p2 (⟨x∗, y2⟩ − β)
≤p1f ∗∗(y1) + p2f ∗∗(y2).
(A.25)
Since (A.25) holds for any x∗ ∈ X∗ satisfying ⟨x∗, y⟩ − β ≤ f (y), ∀y ∈ X, we can
deduce from (A.25) that
f ∗∗(x) ≤ p1f ∗∗(x1) + p2f ∗∗(x2).
Hence f ∗∗ is convex.
2. Lower Semicontinuity. To show that f ∗∗ is l.s.c., it suffices to show that for any
ε > 0 and any x ̄ ∈ X, any sequence {xn} such that xn → x ̄ in X, we have
f ∗∗(x ̄) − ε ≤ lim inf
n→∞ f ∗∗(xn). (A.26)
Indeed, according to (A.17), there exists x∗ ∈ X∗ such that ⟨x∗, y⟩ − β ≤ f (y), ∀y ∈
X, and
⟨x∗, x ̄⟩ − β ≥ f ∗∗(x ̄) − ε
2 . (A.27)
Therefore, for any x ∈ X such that
∥x − x ̄∥X ≤ ε
2 max{∥x∗∥X∗ , 1} , (A.28)
41

we can deduce from (A.27) that
⟨x∗, x⟩ − β = (⟨x∗, x ̄⟩ − β) + ⟨x∗, x − x ̄⟩
≥ f ∗∗(x ̄) − ε
2 + ∥x∗∥X∗ ∥x − x ̄∥X
≥ f ∗∗(x ̄) − ε
2−ε
2
= f ∗∗(x ̄) − ε.
(A.29)
Since (A.29) holds for any x∗ ∈ X∗ satisfying ⟨x∗, y⟩ − β ≤ f (y), ∀y ∈ X, we then
know from (A.17) that
f ∗∗(x) ≥ f ∗∗(x ̄) − ε,
for all x ∈ X satifying (A.28). And hence we obtain (A.26).
The proof is then finished by combining (A.20) in Step 2 and (A.24) in Step 3.
Proof of Theorem 4.2
• We first show that p = v(θY ).
For any x ∈ Ω such that g(x) ≤ θY , since ⟨y∗, g(x)⟩ ≤ 0, ∀y∗ ∈ Y ∗
+ and ⟨θY ∗ , g(x)⟩ = 0,
we have
sup
y∗∈Y ∗
+
L(x, y∗) = f (x). (A.30)
For any x ∈ Ω, such that g(x) ≤ θY does not hold, i.e. g(x) ̸∈ −P , since −P is a closed
convex set, according to Lemma B.1, we know that there exists y∗ ∈ Y ∗ and γ ∈ R, such
that
⟨y∗, y⟩ < γ < ⟨y∗, g(x)⟩, ∀y ∈ −P. (A.31)
Since θY ∈ −P and ⟨y∗, θY ⟩ = 0, we know that γ > 0. On the other hand, if there
exists y ∈ −P , such that ⟨y∗, y⟩ > 0, then one can take α > 0 sufficiently large, such
that ⟨y∗, αy⟩ = α⟨y∗, y⟩ ≥ ⟨y∗, g(x)⟩, which contradicts (A.31). Therefore, y∗ ∈ Y ∗
+, and
⟨y∗, g(x)⟩ > γ > 0. Hence for any α > 0,
sup
y∗∈Y ∗
+
L(x, y∗) ≥ f (x) + α⟨y∗, g(x)⟩ > f (x) + αγ,
implying that
sup
y∗∈Y ∗
+
L(x, y∗) = +∞. (A.32)
We combine (A.30) and (A.32) to obtian
sup
y∗∈Y ∗
+
L(x, y∗) =



f (x), g(x) ≤ θY ;
+∞, g(x) ̸≤ θY ,
yielding that p = infx∈Ω supy∗∈Y ∗
+ L(x, y∗) = v(θY ).
42

• For step 2, we show that d = v∗∗(θY ). By direct compuataion, we have
v∗∗(θY ) = sup
y∗∈Y ∗
−v∗(y∗)
= sup
y∗∈Y ∗
− sup
y∈Y
(⟨y∗, y⟩ − v(y))
= sup
y∗∈Y ∗
yi∈nfY (v(y) − ⟨y∗, y⟩)
= sup
y∗∈Y ∗
yi∈nfY ( inf
g(x)≤y
f (x) − ⟨y∗, y⟩)
= sup
y∗∈Y ∗
xi∈nfΩ inf
y≥g(x)
(f (x) − ⟨y∗, y⟩)
= sup
y∗∈Y ∗
xi∈nfΩ (f (x) − ⟨y∗, g(x)⟩) + inf
y≥g(x)
⟨y∗, g(x) − y⟩
= sup
y∗∈Y ∗
xi∈nfΩ (f (x) − ⟨y∗, g(x)⟩) + inf
y≥g(x)
⟨y∗, y − g(x)⟩ .
(A.33)
If y∗ ̸∈ Y ∗
+, then it is straightforward to verify that for any x ∈ Ω, there exists y ≥ g(x),
such that
inf
y≥g(x)
⟨y∗, y − g(x)⟩ = −∞,
and hence
xi∈nfΩ (f (x) + ⟨y∗, g(x)⟩) + inf
y≥g(x)
⟨y∗, y − g(x)⟩ = −∞.
If y∗ ∈ Y ∗
+, then for any x ∈ Ω, y ≥ g(x), we have
⟨y∗, y − g(x)⟩ ≥ 0,
and the equality is achieved when y = g(x). Therefore, we conclude from (A.33) that
v∗∗(θY ) = sup
y∗∈Y ∗
+
xi∈nfΩ (f (x) + ⟨y∗, g(x)⟩) = sup
y∗∈Y ∗
+
xi∈nfΩ L(x, y∗) = d.
We combine the two steps to finish the proof of the first statement. The fact that epi(v∗∗) =
cl co epi(v) follows directly from Theorem 4.1. □
Proof of Theorem 4.3
We consider a sequence of Pn ∈ P(A ̃∞(x0)) satisfies all constraints in (4.12), and
E(a(st ))∼Pn
s0
∞
X
t=0
βt r(x(st, at−1), a(st), st) +
I
X
i=1
γigi(x(st, at−1), a(st), st)
!
tends to the supremum of problem (4.12). According to the *-weak compactness of P(A ̃∞(x0)),
Pn *-weak converges to some P ∗ ∈ P(A ̃∞(x0)) up to a subsequence.
43

For any a ∈ A ̃∞(x0), we define
f (a) = Es0
∞
X
t=0
βt r(x(st, at−1), a(st), st) +
I
X
i=1
γigi(x(st, at−1), a(st), st)
!
,
and
gt,i,ht (a) = Est 1{ ̃at−1=at−1}
∞
X
n=0
βngi(x(st+n, (a ̃t−1, at+n−1
t )), a(st+n), st+n) − g ̄i
!
.
It is straightforward to see that f and gt,i,ht are bounded, and continuous in a under the product
topology. Hence Ea∼P f (a) → Ea∼P ∗ f (a), and Ea∼P gt,i,ht (a) → Ea∼P ∗ gt,i,ht (a), implies that
P ∗ is a feasible point to the problem (4.12) and reaches the supremum.
Proof of Theorem 4.4
For any P ∈ P(A ̃∞(x0)) which is a feasible point to problem (4.12), it is straightforward to
compute ψ(ht)(a) as13
ψ(ht)(a) = P (a(st) = a, a(st−1) =  ̃at−1, · · · , a(s0) =  ̃a0)
P (a(st−1) =  ̃at−1, · · · , a(s0) =  ̃a0) .
It is straightforward to show that (ψ(ht)) is a feasible point to (4.13), and reaches the same
objective function value as P in problem (4.12).
For (ψ(ht)) ∈ Πht∈Ht P(A ̃(ht)), we can construct the marginal distributions as
ψ(a(st) = a, a(st−1) =  ̃at−1, · · · , a(s0) =  ̃a0) = ψ(h0)( ̃a0) · ψ(h1)( ̃a1) · · · ψ(ht)(a).
According to Kolmogorov extension theorem, there exists P ∈ P(A ̃∞(x0)) has marginal distri
butions ψ, and hence P reaches the same objective function value as (ψ(ht)) in problem (4.13).
□
Proof of Theorem 4.5
According to Theorem C.3, D(γ, x0, s0) equals to the dual of the deterministic problem (4.6).
According to Corollary B.2, for any ε > 0, there exists N ∈ N+, (ak
t ) ∈ A ̃∞(x0) (k = 1, · · · , N ),
pk ≥ 0, PN
k=1 pk = 1, and Pε ∈ P(A ̃∞(x0)) defined by
Pε({(ak
t )}) = pk,
such that
E(at (st ))∼Pε
s0
∞
X
t=0
βt r(xt, at, st) +
I
X
i=1
γigi(xt, at, st)
!
≥ D(γ, x0, s0) − ε,
13Note that when P (a(st−1) = a ̃t−1, · · · , a(s0) = a ̃0) = 0 we can arbitrarily define ψ(ht).
44

and
E(a(st ))∼Pε
st 1{( ̃a0,··· , ̃at−1)=(a(s0),··· ,a(st−1))}
∞
X
n=0
βngi(xt+n, a(st+n), st+n) − g ̄i
!
≥ −ε,
∀t ∈ N, ∀ht = (s0, a ̃0, · · · , st−1, a ̃t−1, st) ∈ Ht, ∀i ∈ {1, · · · , I}.
Since P(A ̃∞(x0)) is *-weak compact, Pε *-weak converges to some P ∗ ∈ P(A ̃∞(x0)) as ε → 0
up to a subsequence. It is straightforward to verify that P ∗ is a feasible probability measure
to problem (4.12) and
E(a(st))∼P ∗
s0
∞
X
t=0
βt r(xt, a(st), st) +
I
X
i=1
γigi(xt, a(st), st)
!
≥ D(γ, x0, s0).
Therefore, V (γ, x0, s0) ≥ D(γ, x0, s0).
Then it suffices to prove that V (γ, x0, s0) ≤ D(γ, x0, s0). We consider the set of finite
support probability measures,
D={
n
X
i=1
λiδxi |n ∈ N, λi ≥ 0,
n
X
i=1
λi = 1, xi ∈ A ̃∞(x0)}.
D is *-weakly dense in P(A ̃∞(x0))(see Theorem 15.10 in Aliprantis and Border (2006)), i.e.
for any P ∗ ∈ P(A ̃∞(x0)), there exists {P k
D }∞
k=1 ⊂ D, s.t.
Z
a∈A ̃∞ (x0 )
f (a)dP k
D→
Z
a∈A ̃∞ (x0 )
f (a)dP ∗,
for any f ∈ Cb(A ̃∞(x0)). We take P ∗ ∈ P(A ̃∞(x0)) as the solution to (4.12), and denote
Pk
D=
nk
X
i=1
λk,iδak,i .
According to the fifth assumption in Assumption 3.1, for any a ∈ A ̃∞(x0), there exists
(at(st)) ∈ A∞, such that when defining aT ∈ A∞ as
aT =



at(st), t ≤ T ;
at(st), t > T,
aT ∈ A ̃∞(x0) and satisfies the constraints in (3.1) for any t > T . Furthermore, we can define
Pk
D=
nk
X
i=1
λk,i δak
k,i .
To finish the proof two lemmas are needed.
45

Lemma A.1 For any P ∈ P(A ̃∞(x0)), we define
G(P ) =
(min{E(a(st ))∼P
st 1{ ̃at−1=at−1}
∞
X
n=0
βngi(xt+n, a(st+n), st+n) − g ̄i
!
, 0})t∈N, ht∈Ht, i∈{1,··· ,I} ∈ l∞.
Then G(P k
D) weak converges to θ in l∞.
Proof By definition, it suffices to show that for any λ1 ∈ l1, λs ∈ ls, we have
⟨λ1 + λs, G(P k
D)⟩ → 0, as k → ∞. (A.34)
By the definition of P k
D, it is easy to check that
G(P k
D )t>nk, ht∈Ht, i∈{1,··· ,I} = 0,
yielding that
⟨λs, G(P k
D)⟩ = 0, ∀k ∈ N+. (A.35)
For any t, ht, i, for a ∈ A ̃∞(x0), we define
gt,ht,i(a) := Est 1{( ̃at−1=at−1)}
∞
X
n=0
βngi(xt+n, a(st+n), st+n) − g ̄i
!
.
Therefore,
Z
a∈A ̃∞ (x0 )
gt,hi,i(a)dP k
D→
Z
a∈A ̃∞ (x0 )
gt,ht,i(a)dP ∗ ≥ 0, as k → ∞, ∀t, ht, i,
due to the fact that P k
D weak converges to P ∗. Hence
G(P k
D)t,ht,i = min{
Z
a∈A ̃∞ (x0 )
gt,ht,i(a)dP k
D, 0} → 0, as k → ∞, ∀t, ht, i. (A.36)
It is straightforward to verify that14
G(P k
D)t,ht,i − G(P k
D)t,ht,i → 0, as k → ∞, ∀t, ht, i. (A.37)
We combine (A.36) and (A.37) to obtain
G(P k
D)t,ht,i → 0.
This pointwise convergence property, together with the fact that G(P k
D) is uniformly bounded
14This is the UANA property.
46

in l∞, yields that G(P k
D) *-weak converges to θ in l∞, implying that
⟨λ1, G(P k
D)⟩ → 0, as k → ∞. (A.38)
We then conclude (A.34) by combining (A.35) and (A.38). □ □
Lemma A.2 For any P ∈ P(A ̃∞(x0)), we define
F (P ) = E(a(st))∼P
s0
∞
X
t=0
βt r(xt, a(st), st) +
I
X
i=1
γigi(xt, a(st), st)
!
.
Then F (P k
D) converges to F (P ∗) = V (γ, x0, s0).
Proof For a ∈ A ̃∞(x0), we define
f (a) := Es0
∞
X
t=0
βt r(xt, a(st), st) +
I
X
i=1
γigi(xt, a(st), st)
!
.
Therefore,
F (P k
D) =
Z
a∈A ̃∞ (x0 )
f (a)dP k
D→
Z
a∈A ̃∞ (x0 )
f (a)dP ∗ = F (P ∗), as k → ∞.
Similarly as in the proof for Lemma A.1, it is straightforward to verify that
F (P k
D) − F (P k
D) → 0, as k → ∞,
and we omit details here. □
Let v be the perturbation functional of the deterministic problem (3.1) 15.It can be verified
by definition that
(G(P k
D), F (P k
D)) ∈ co hypo (v).
According to Mazur’s Theorem(see Corollary 3.8 in Brezis and Br ́ezis (2011)), the weak limit
of (G(P k
D), F (P k
D)) belongs to cl co hypo (v), i.e.
(θ, V (γ, x0, s0)) ∈ cl co hypo (v) = hypo (v∗∗),
where the last equality holds according to Theorem 4.1. According to Theorem 4.2,
D(γ, x0, s0) = v∗∗(θ).
Therefore V (γ, x0, s0) ≤ D(γ, x0, s0) by definition of hypograph.
15We refer to Definition B.3 for the defintion of a perturbation functional for a minimization problem. Note that this problem is indeed a maximization problem, which is different from the minimization problem considered in standard optimization literatures. Hence the concept epigraph is replaced by hypograph, which can be similarly defined and we omit details here.
47

Proof of Corollary 4.1
It suffices to show that V ∈ N . We denote P ∗(γ, x0, s0) to be a maximizer for any γ ∈ RI
+,
x0 ∈ X , s0 ∈ S.
• Convexity. For any γ0, γ1 ∈ RI
+, and λ ∈ [0, 1], we denote γλ = λγ1 + (1 − λ)γ0. Then
P ∗(γλ, x0, s0) is a feasible point for the problem (4.12) with x0, s0. Therefore,
λV (γ1, x0, s0) + (1 − λ)V (γ0, x0, s0)
≥λE(a(st))∼P ∗(γλ,x0,s0)
s0
∞
X
t=0
βt r(xt, a(st), st) +
I
X
i=1
γigi(xt, a(st), st)
!
+ (1 − λ)E(a(st))∼P ∗(γλ,x0,s0)
s0
∞
X
t=0
βt r(xt, a(st), st) +
I
X
i=1
γigi(xt, a(st), st)
!
=V (γλ, x0, s0).
• L-Lipschitz For any γ0, γ1 ∈ RI
+, we have
V (γ1, x0, s0) ≥V (γ0, x0, s0) + E(a(st))∼P ∗(γ0,x0,s0)
s0
∞
X
t=0
βt
I
X
i=1
(γi
1 − γi
0)gi(xt, a(st), st)
≥V (γ0, x0, s0) − ∥γ1 − γ0∥1 maxi ∥gi∥∞
1−β
≥V (γ0, x0, s0) − L∥γ1 − γ0∥1
By symmetric, we have
V (γ0, x0, s0) ≥ V (γ1, x0, s0) − L∥γ1 − γ0∥1.
• The bound (3.10) and (3.12). (3.10) is obtianed by definition of V . (3.12) is obtained
by the upper bounded of r and gi. □
Proof of Theorem 4.6
We consider the problem
sup
(a(st ))∈A ̃∞ (x0 )⊂l∞
Es0
∞
X
t=0
βt r(x(st), a(st), st) +
I
X
i=1
γigi(x(st), a(st), st)
!
,
s.t. 1{( ̃a0,··· , ̃at)=(a(s0),··· ,a(st))} Est
∞
X
n=0
βngi(x(st+n), a(st+n), st+n) − g ̄i
!
≥ 0,
∀t ∈ N, ∀ ̃ht = (s0, a ̃0, · · · , st, a ̃t) ∈ H ̃t, ∀i ∈ {1, · · · , I}.
(A.39)
Following reasoning analogous to that in Theorem C.3, we find that D ̃ (γ, x0, s0) equals the
Lagrangian dual value of problem (A.39). Then, employing a similar line of argument as in
Theorem 4.5 and Corollary 4.1, we arrive at the conclusion of this theorem.
48

Proof of Theorem 5.1
Since (3.5) is convex w.r.t. λ, to prove the existence of a solution λ∗, it suffices to show that,
there exists C > 0, s.t. when λi > C for some i,
sup
a∈A
"
r(x, a, s) +
I
X
i=1
γigi(x, a, s) + λi(gi(x, a, s) − g ̄i) + βEsD(γ + λ, x′, s′)
#
> D(γ, x, s).
(A.40)
According to the property (3.10), we know that the LHS of (5.1) is not less than
Ea(ht )∼ψ(ht )
s0
∞
X
t=0
βtr(xt, at, st) +
I
X
i=1
γ i Ea(ht )∼ψ(ht )
s0
∞
X
t=0
βtgi(xt, at, st) +
I
X
i=1
λi Ea(ht )∼ψ(ht )
s0
∞
X
t=0
βtgi(xt, at, st) − g ̄i
!
≥− 1+
I
X
i=1
γi
!
L+
I
X
i=1
λiε
It is then straightforward to verify that it follows from Assumption 5.1 that, taking
C =2
D(γ, x, s) + 1 + PI
i=1 γi L
ε,
when λi > C, (A.40) is satisfied.
Proof of Lemma 5.1
We define the set
U = {(u, v) ∈ RI+1|∃P ∈ P(A ̃∞(x0)), P satisfies all constraints in (4.12) for x0 = x, s0 = s;
u = E(at∼P )
s0
∞
X
t=0
βtr(xt, at, st);
v = E(at∼P )
s0
∞
X
t=0
βtg(xt, at, st)}.
It is straightforward to see that U is a non-empty convex set. Furthermore, based on the
compactness of P(A ̃∞(x0)) in the *-weak topology, we know that U is closed. We define
F (γ1, γ) = sup
(u,v)∈U
γ1u + γ · v.
According to Corollary 23.5.3 in Rockafellar (2015), we know that (u∗, v∗) ∈ arg sup(u,v)∈U γ1u+
γ · v ⇔ (u∗, v∗) ∈ ∂F (γ1, γ). The dual function equals
D(γ, x, s) = sup
(u,v)∈U
u + γ · v.
49

We take A = [0, II ], b = [1, 0I×1], and have
D(γ, x, s) = F (1, γ) = F (Aγ + b).
According to Theorem 23.9 in Rockafellar (2015), we know that
∂D(γ, x, s) = AT ∂F (Aγ + b).
Therefore,
φ ∈ ∂D(γ, x, s)
⇔φ = AT φF , for some φF ∈ ∂F (1, γ)
⇔φ = (φF (2), φF (3), · · · , φF (I + 1)), for some (φF (1), φF (2 : I + 1)) ∈ arg sup
(u,v)∈U
u + γv
⇔∃P ∗ ∈ P(A ̃∞(x0)), P ∗ maximizes problem (4.12), and E(a∼P )
s0
∞
X
t=0
βtg(xt, at, st) = φ.
Hence we finish the proof.
Proof of Theorem 5.3
Since φ ∈ ∂D(γ, x, s), we know that there exists (ψ(ht)), s.t. (ψ(ht)) is a solution to (5.1) with
φ =Ea(ht)∼ψ(ht)
s0
∞
X
t=0
βtg(xt, at, st)
=
X
a∈A
ψ0(a)
"
g(x0, a, s0) + βEs0 Ea(ht)∼ψ(ht)
h1 =(s0 ,a,s1 )
∞
X
t=1
βt−1g(xt, at, st)
#
.
We take ψ∗ = ψ0 and φ′∗(a, s1) = Ea(ht)∼ψ(ht)
h1 =(s0 ,a,s1 )
P∞
t=1 βt−1g(xt, at, st). Hence (5.5) is satisfied.
It is straightforward to verify that, for any λ∗ be a solution to (3.5), and μ∗ = 0, we have
X
a∈A
ψ∗(a)
"
r(x, a, s) +
I
X
i=1
γigi(x, a, s) + λ∗,i(gi(x, a, s) − g ̄i) + μ∗,i(gi(x, a, s) − φi)
!
+ βEsW (γ + λ∗ + μ∗, x′, s′, φ′∗(a, s′))
#
≥E(a(ht )∼ψ(ht ))
s0
"∞ X
t=0
βtr(xt, at, st) +
∞
X
t=0
βtγg(xt, at, st) + λ∗(−g ̄ +
∞
X
t=0
βtg(xt, at, st))
#
=E(a(ht )∼ψ(ht ))
s0
"∞ X
t=0
βtr(xt, at, st) +
∞
X
t=0
βtγg(xt, at, st)
#
+ λ∗ X
a∈A
ψ(a) g(x, a, s) + βEsφ′(a, s′) − g ̄
!
≥E(a(ht )∼ψ(ht ))
s0
"∞ X
t=0
βtr(xt, at, st) +
∞
X
t=0
βtγg(xt, at, st)
#
= W (γ, x, s, φ),
50

with equality only if (5.6) is satisfied. Furthermore, ψ∗, φ′∗ should be a solution to the sup prob
lem given λ∗, μ∗ = 0, and (ψ(ht|s0, a, s′)(t ≥ 1)) is a solution to W (γ + λ∗, μ∗, x′, s′, φ′∗(a, s′)),
hence (5.4) shoule be satisfied according to lemma 5.1. Therefore (λ∗, 0, ψ∗, φ′∗) is a solution
to (5.3) satisfying (5.4), (5.5) and (5.6) □
Proof of Theorem 5.4
From the ≥ 0 part of (5.5) and (5.6), and the fact that φ∗(ht) are bounded, one can verify
directly that (ψ∗(ht)) satisfies all the constraints. Furthermore, we know that
W (γ0, x0, s0, φ0)
=
X
a0 ∈A
ψ∗
0 (a0) r(x0, a0, s0) + γ0g(x0, a0, s0) + λ∗
0(g(x0, a0, s0) − g ̄) + μ∗
0(g(x0, a0, s0) − φ0)
+ βEs0 W (γ0 + λ∗
0 + μ∗
0, x1, s1, φ∗
1)
=
X
a0 ∈A
ψ∗
0 (a0) r(x0, a0, s0) + γ0g(x0, a0, s0) + λ∗
0(g(x0, a0, s0) − g ̄) + μ∗
0(g(x0, a0, s0) − φ0)
+ βEs0
X
a1 ∈A
ψ∗
1 (a1) r(x1, a1, s1) + (γ0 + λ∗
0 + μ∗
0)g(x1, a1, s1) + λ∗
1(g(x1, a1, s1) − g ̄) + μ∗
1(g(x1, a1, s1) − φ1)
β2Es1 W (γ0 + λ∗
0 + λ∗
1 + μ∗
0 + μ∗
1, x2, s2, φ∗
2)
=···
=E(a(ht ))∼(ψ(ht ))
s0
T
X
t=0
βtr(xt, at, st) + γ0
T
X
t=0
βtg(xt, at, st) +
T
X
t=0
X
ht ∈Ht
λ∗(ht) −βtg ̄ +
T
X
r=t
βrg(xr, ar, sr)
+
T
X
t=0
X
ht ∈Ht
μ∗(ht) −βtφ∗
t+
T
X
r=t
βrg(xr, ar, sr) + βT +1W (γ∗
T +1, xT +1, sT +1, φ∗
T +1)
Note that φ∗
T +1 ∈ ∂D(γ∗
T +1, xT +1, sT +1), according to Lemma 5.1,
W (γ∗
T +1, xT +1, sT +1, φ∗
T +1) = u∗
T +1 + γ∗
T +1φ∗
T +1,
for some u∗
T +1 ≤ L.
51

Hence
W (γ0, x0, s0, φ0)
=E(a(ht ))∼(ψ(ht ))
s0
T
X
t=0
βtr(xt, at, st) + γ0
T
X
t=0
βtg(xt, at, st) +
T
X
t=0
X
ht ∈Ht
λ∗(ht) −βtg ̄ +
T
X
r=t
βrg(xr, ar, sr)
+
T
X
t=0
X
ht ∈Ht
μ∗(ht) −βtφ∗ +
T
X
r=t
βrg(xr, ar, sr) + βT +1W (γ∗
T +1, xT +1, sT +1, φ∗
T +1)
=E(a(ht ))∼(ψ(ht ))
s0
T
X
t=0
βtr(xt, at, st) + βT +1u∗
T +1 + γ0
T
X
t=0
βtg(xt, at, st) + βT +1φ′∗
T +1
!
+
T
X
r=0
X
ht ∈Ht
λ∗(ht) −βtg ̄ +
T
X
r=t
βrg(xr, ar, sr) + βT +1φ′∗
T +1
+
T
X
t=0
X
ht ∈Ht
μ∗(ht) −βtφ∗
t+
T
X
r=t
βrg(xr, ar, sr) + βT +1φ′∗
T +1
=E(a(ht ))∼(ψ(ht ))
s0
"T X
t=0
βtr(xt, at, st) + βT +1u∗
T +1 + γ0
T
X
t=0
g(xt, at, st) + βT +1φ′∗
T +1
#
,
according to the complementary conditions (5.5) and (5.6). Since
βT +1u∗
T +1 + γ0βT +1φ∗
T +1
uniformly converges to 0, we konw that
W (γ0, x0, s0, φ0) = E(at(ht))∼(ψt(ht))
s0
∞
X
t=0
βtr(xt, at, st) + γ0
∞
X
t=0
βtg(xt, at, st)
!
and hence finish the proof. □
Proof of Theorem 5.5
Step 1. Existence. Since φ ∈ ∂D(γ, x, s), we know that there exists (ψ(ht)), s.t. (ψ(ht)) is
a solution to (5.1) with
φ =Ea(ht)∼ψ(ht)
s0
∞
X
t=0
βtg(xt, at(ht), st)
=
X
a∈A
ψ0(a)
"
g(x0, a, s0) + βEs0 Ea(ht)∼ψ(ht)
h1 =(s0 ,a,s1 )
∞
X
t=1
βt−1g(xt, at, st)
#
.
We take ψ∗ = ψ0 and φ′∗(a, s1) = Ea(ht)∼ψ(ht)
h1 =(s0 ,a,s1 )
P∞
t=1 βt−1g(xt, at, st). Hence (5.9) is satisfied.
It is straightforward to verify that, for any λ∗ be a solution to (3.5) with γ = 0, and μ∗ = 0,
52

we have
X
a∈A
ψ∗(a)
(r(x, a, s) + λ∗(g(x, a, s) − g ̄) + μ∗(g(x, a, s) − φ)) + βEsW (λ∗ + μ∗, x′, s′, φ′∗(a, s′))
≥E(a(ht )∼ψ(ht ))
s0
"∞ X
t=0
βtr(xt, at, st) + λ∗(−g ̄ +
∞
X
t=0
βtg(xt, at, st))
#
=E(a(ht )∼ψ(ht ))
s0
"∞ X
t=0
βtr(xt, at, st)
#
+ λ∗ X
a∈A
ψ∗(a) g(x, a, s) + βEsφ′∗(a, s′) − g ̄
!
≥E(a(ht )∼ψ(ht ))
s0
"∞ X
t=0
βtr(xt, at, st)
#
= W (0, x, s, φ),
(the last equality holds because of the relationship between W (γ, x, s, φ) and W (0, x, s, φ)) with
equality only if (5.10) is satisfied. Furthermore, ψ∗, φ′∗ should be a solution to the sup problem
given λ∗, μ∗ = 0, and ψ∗(ht|s0, a, s′)(t ≥ 1) is a solution to W (λ∗ + μ∗, x′, s′, φ′∗(a, s′)), hence
(5.8) shoule be satisfied according to lemma 5.1. Therefore (λ∗, 0, ψ∗, φ′∗) is a solution to (5.7)
satisfying (5.8), (5.9) and (5.10), and we finish the proof.
Step 2. Relation. Suppose that (λ∗, μ∗, ψ∗, φ′∗) is a solution to (5.7) satisfying the (5.8),(5.9)
and (5.10). Since φ′∗(a, s′) ∈ ∂D(λ∗ + μ∗, ζ(x, a, s), s′), there exists ψ∗(a, s′)(·) which is a
solution to W (λ∗ + γ∗, x′, s′, φ′∗(a, s′)) and satisfies
Ea(ht )∼ψ∗ (a,s′ )(ht )
s0 =s′
∞
X
t=0
βtg(xt, at, st) = φ′∗(a, s′).
We define ψ ̄∗(ht) s.t. ψ ̄∗(s0) = ψ∗ and ψ ̄∗(s0, a, s′, ·) = ψ∗(a, s′)(·). It is then straightforward
to verify that
W (0, x, s, φ) =
X
a∈A
ψ∗(a)
(r(x, a, s) + λ∗(g(x, a, s) − g ̄) + μ∗(g(x, a, s) − φ)) + βEsW (λ∗ + μ∗, x′, s′, φ′∗(a, s′))
=E(a(ht )∼ψ ̄∗ (ht ))
s0
"∞ X
t=0
βtr(xt, at, st) + λ∗(−g ̄ +
∞
X
t=0
βtg(xt, at, st)) + μ∗(−φ +
∞
X
t=0
βtg(xt, at, st))
#
=E(a(ht )∼ψ ̄∗ (ht ))
s0
"∞ X
t=0
βtr(xt, at, st)
#
+ λ∗ X
a∈A
ψ∗(a) g(x, a, s) + βEsφ′∗(a, s′) − g ̄
!
+ μ∗ X
a∈A
ψ∗(a)(g(x, a, s) + βEsφ′∗(a, s′) − φ)
!
=E(a(ht )∼ψ ̄∗ (ht ))
s0
"∞ X
t=0
βtr(xt, at, st)
#
,
due to the complementary conditions (5.9) and (5.10). And
53

X
a∈A
ψ∗(a)
r(x, a, s) + γg(x, a, s) + λ ̃∗(g(x, a, s) − g ̄) + μ ̃∗(g(x, a, s) − φ) + βEsW (γ + λ ̃∗ + μ ̃∗, x′, s′, φ′∗(a, s′))
≥E(a(ht )∼ψ ̄∗ (ht ))
s0
∞
X
t=0
βtr(xt, at, st) +
∞
X
t=0
γg(xt, at, st)+
+ λ ̃∗(−g ̄ +
∞
X
t=0
βtg(xt, at, st)) + μ ̃∗(−φ +
∞
X
t=0
βtg(xt, at, st))
=E(a(ht )∼ψ ̄∗ (ht ))
s0
"∞ X
t=0
βtr(xt, at, st)
#
+γ
X
a∈A
ψ∗(a) g(x, a, s) + βEsφ′∗(a, s′)
!
+ λ ̃∗ X
a∈A
ψ∗(a) g(x, a, s) + βEsφ′∗(a, s′) − g ̄
!
+ μ ̃∗ X
a∈A
ψ∗(a) g(x, a, s) + βEsφ′∗(a, s′) − φ
!
≥E(a(ht )∼ψ ̄∗ (ht ))
s0
"∞ X
t=0
βtr(xt, at, st)
#
+ γφ = W (0, x, s, φ) + γφ = W (γ, x, s, φ),
with equality only if (5.5) and (5.6) are satisfied. Furthermore, ψ∗, φ′∗ is a solution to the sup
problem given (λ ̃∗, μ ̃∗) which is a solution to (5.3), and ψ∗(a, s′)(·) is a solution to W (γ + λ∗ +
μ∗, x′, s′, φ′∗(a, s′)), hence Lemma 5.1 implies (5.4). Therefore (λ ̃∗, μ ̃∗, ψ∗, φ′∗) is a solution to
(5.3) satisfying (5.4), (5.5) and (5.6). □
Proof of Theorem 5.6
• 0. The convergence of Lagrangian multipliers follows from Proposition 2.7 in Nedic and
Bertsekas (2001).
• 1. Since the convergence of the Lagrangian multipliers, there exists N ̄1 > 0, s.t. when
k ≥ N ̄1,
∥(λk, μk) − (λ∗, μ∗)∥ ≤ ε.
• 2. According to the upper semi-continuity of the sub-gradient, there eixsts δ > 0, s.t.
when ak = a and
∥(λk, μk) − (λ∗, μ∗)∥ ≤ δ,
we have
dist(φk(s′), ∂D(λ∗ + μ∗, x′, s′)) ≤ ε
2.
According to the convergence of (λk, μk), there exists M ̄ 1 > 0, s.t. when k ≥ M ̄ 1,
∥(λk, μk) − (λ∗, μ∗)∥ ≤ δ.
54

Therefore, when N > M ̄ 1, we have16
dist(φ′N (a, s′), ∂D(λ∗ + μ∗, x′, s′))
=dist(
PN
k=1 1ak=aσkφk(s′)
PN
k=1 1ak=aσk , ∂D(λ∗ + μ∗, x′, s′))
≤
M ̄ 1
X
k=1
1ak=aσ ̃kdist(φk(s′), ∂D(λ∗ + μ∗, x′, s′)) +
N
X
k=M ̄ 1+1
1ak=aσ ̃kdist(φk(s′), ∂D(λ∗ + μ∗, x′, s′))
≤
M ̄ 1
X
k=1
1ak=aσ ̃kdist(φk(s′), ∂D(λ∗ + μ∗, x′, s′)) +
N
X
k=M ̄ 1+1
1ak=aσ ̃k ε
2
≤
M ̄ 1
X
k=1
1ak=aσ ̃kdist(φk(s′), ∂D(λ∗ + μ∗, x′, s′)) + ε
2,
where
σ ̃k = σk
PN
i=1 1ai=aσi .
Since
ψN (a)σ ̃k =
PN
i=1 1ai=aσi PN
i=1 σi · σk
PN
i=1 1ai=aσi = σk
PN
i=1 σi ,
we have
ψN (a)dist(φ′N (a, s′), ∂D(λ∗ + μ∗, x′, s′))
≤
M ̄ 1
X
k=1
σk
PN
i=1 σi dist(φk(s′), ∂D(λ∗ + μ∗, x′, s′)) + ε
2.
(A.41)
Since PN
i=1 σi → ∞, there exits N ̄2 > M ̄ 1, s.t. when N > N ̄2, the RHS of (A.41) ≤ ε.
• 3. According to the updating rule for μk, we have
μk+1 = max{μk − σk g(x, ak, s) − φ + βEsφk(s′) , 0}
≥μk − σk g(x, ak, s) − φ + βEsφk(s′) .
(A.42)
Adding equations (A.42) for k = 1, · · · , N , we have
μN+1 ≥ μ1 −
N
X
k=M
σk g(x, ak, s) − φ + βEsφk(s′) ,
16The first inequality uses the fact that ∂D(λ∗ + μ∗, x′, s′) is a convex set.
55

implying that
X
a
ψN (a)(g(x, a, s) + βEsφ′N (a, s′)) − φ
=
P
a
P
1≤k≤N, ak=a σk g(x, a, s) − φ + βEs
P
1≤k≤N, ak =a σk φk (s′)
P
1≤k≤N, ak =a σk
PN
k=1 σk
=
P
a
h
P
1≤k≤N, ak=a σk (g(x, a, s) − φ) + βEs
P
1≤k≤N, ak=a σkφk(s′)
i
PN
k=1 σk
=
PN
k=1 σk g(x, ak, s) − φ + βEsφk(s′)
PN
k=1 σk ≥ μ1 − μN+1
PN
k=1 σk ,
where the right hand side tends to 0 as N → ∞. Therefore, there exists N ̄3 > 0, s.t.
when N > N ̄3, (3.) holds.
• 4. Similar as (3.), there exists N ̄4 > 0, s.t. (4.) holds.
• 5. It suffices to consider the case μ∗ > 0. Since μk → μ∗, there exists M ̄ 2, such that
when k ≥ M ̄ 2, μk > 0, and (A.42) holds as an equality. Therefore,
∥
X
a
ψN (a)(g(x, a, s) + βEsφ′N (a, s′)) − φ∥
=∥
PN
k=1 σk g(x, ak, s) − φ + βEsφk(s′)
PN
k=1 σk ∥
=∥
PM ̄ 2
k=1 σk g(x, ak, s) − φ + βEsφk(s′) + PN
k=M ̄2+1 σk g(x, ak, s) − φ + βEsφk(s′)
PN
k= σk ∥
≤
PM ̄ 2
k=1 σk PN
k=1 σk ∥g(x, a, s) − φ + βEsφk(s′)∥∞ + | μM ̄2+1 − μN+1
PN
k=1 σk | → 0,
implying that
|⟨μ∗,
X
a
ψN (a)(g(x, a, s) + βEsφ′N (a, s′)) − φ⟩| → 0, as N → ∞.
Hence there exists N ̄5 > M ̄ 2, such that when N ≥ N ̄5, we have
|⟨μ∗,
X
a
ψN (a)(g(x, a, s) + βEsφ′N (a, s′)) − φ⟩| < ε.
• 6. Similar as (5.), there exists N ̄6 > 0, s.t. (6.) holds. Therefore, N ̄ can be taken as
N ̄ = max1≤i≤6{N ̄i}. □
56

Proof of Lemma 6.1
Since cs = ls − gs, s ∈ {1, · · · , S}, we have
b =cs − (1 − τs)ls = cs + v′(ls)
u′(cs) ls
=(ls − gs)(1 − ls
2√1 − ls
) = f (ls; gs),
which is exactly (6.7). In period 0, since c0 = l0 − g0, we have
b−1 =c0 − (1 − τ0)l0 + qb = c0 + v′(l0)
u′(c0) l0 + β p1u′(c1) + p2u′(c2)
u′(c0) b
=(l0 − g0)(1 − l0
2√1 − l0
+ βp b
l1 − g1
+ β(1 − p) b
l2 − g2
)
=(l0 − g0)(1 − l0
2√1 − l0
+ βp 1 − l1
2√1 − l1
+ β(1 − p) 1 − l2
2√1 − l2
)
=f (l0 − g0; g0) + (l0 − g0)(βph(l1) + β(1 − p)h(l2)
| {z }
w
)).
Now we show that 2 ⇒ 1. If ls > gs satisfies (6.7) and (6.8) we construct
cs = ls − gs, τs = 1 + v′(ls)
u′(ls − gs) < 1,
q = βpu′(l1 − g1) + β(1 − p)u′(l2 − g2)
u′(l0 − g0) > 0,
and it is easy to see that {(cs, ls, τs)S
s=0, q, b} satisfies (6.2) to (6.5). □
B Appendix: Preliminary Mathematical Results (on
line only)
B.1 Convex Conjugate
Definition B.1 Let X be a Banach space, f : X → R ∪ {+∞, −∞} be an extended real-valued
functional. If f (x) ̸= −∞, ∀x ∈ X, and f is not identically +∞, then we call f a proper
functional. The effective domain of f , denoted dom(f ), is defined by
dom(f ) = {x ∈ X|f (x) < +∞}.
Definition B.2 Let X be a Banach space, f : X → R ∪ {+∞, −∞} be an extended real-valued
functional. The epigraph of f , denoted epi(f ), is defined by
epi(f ) := {(x, r) ∈ X × R|f (x) ≤ r}.
57

Proposition B.1 Let X be a Banach space, f : X → R ∪ {+∞, −∞} be an extended real
valued functional. Then
f is convex ⇔ epi(f ) is convex in X × R.
Proposition B.2 Let X be a Banach space, f : X → R ∪ {+∞, −∞} be an extended real
valued functional. Then
f is lower semicontinuous(l.s.c.) ⇔ epi(f ) is closed in X × R.
Lemma B.1 (Ascoli Theorem)17 Let X be a Banach space, and E ⊂ X be a closed convex
set. Then for any x0 ∈/ E, there exists x∗ ∈ X∗ and γ ∈ R, such that
⟨x∗, x⟩ < γ < ⟨x∗, x0⟩, ∀x ∈ E.
B.2 Optimization Problem, Lagrangian Dual
Definition B.3 Let X, Ω, Y, f, g be defined as in Definition 4.1. We define the perturbation
functional v : Y → R ∪ {+∞, −∞} by letting v(y) be the optimal value of the following
perturbed problem
xi∈nfΩ f (x),
s.t. g(x) ≤ y,
(B.1)
where g(x) ≤ y means g(x) − y ∈ −P . In particular, v(θY ) is the optimal value of the opti
mization problem (4.1).
Definition B.4 Let X, Ω, Y, f, g be defined as in Definition 4.1. The Lagrangian function
L:Ω×Y∗
+ → R ∪ {+∞} to the optimization problem (4.1) is defined by
L(x, y∗) = f (x) + ⟨y∗, g(x)⟩. (B.2)
Here Y ∗
+ denotes the set
{y∗ ∈ Y ∗|⟨y∗, y⟩ ≥ 0, ∀y ≥ θY }.
Definition B.5 Let X, Ω, Y, f, g be defined as in Definition 4.1. The inf-sup problem, or
the primal problem, is defined by
p := xi∈nfΩ sup
y∗∈Y ∗
+
L(x, y∗). (B.3)
Similarly, the sup-inf problem, or the dual problem, is defined by
d := sup
y∗∈Y ∗
+
xi∈nfΩ L(x, y∗). (B.4)
17This lemma can be deduced directly from the Hahn-Banach Theorem.
58

Remark B.1 We can use Ω to absorb some constraints to consider the partial dual of an
optimization problem. To be precise, if we have the optimization problem as following
xi∈nfΩ f (x),
s.t. g(x) ≤ θY ,
h(x) ≤ θZ .
(B.5)
Then we can define
Ω ̃ := {x ∈ Ω| h(x) ≤ θZ } ⊆ Ω ⊆ X,
and rewrite the optimization problem (B.5) as
inf
x∈Ω ̃
f (x),
s.t. g(x) ≤ θY .
(B.6)
and apply theorem 4.2 to problem (B.6).
Corollary B.1 Assume that X = Rm, Ω = X, Y = Rn, and f is proper and bounded from
below, i.e. there exists M ∈ R, s.t. f (x) ≥ M , ∀x ∈ X. Then for any ε > 0, there exists
yε ∈ Y, ∥yε∥ ≤ ε, {pi ≥ 0}n+2
i=1 , and {xi ∈ X}n+2
i=1 , s.t.
n+2
X
i=1
pi = 1,
n+2
X
i=1
pig(xi) − yε ≤ θY ,
and
n+2
X
i=1
pif (xi) ≤ d + ε.
Proof Since f is proper and bounded from below, we know that the perturbation function v
is also proper and bounded from below, therefore also satisfies Assumption ??. According to
Theorem 4.1, we have
epi(v∗∗) = cl co epi(v).
Note that (θY , d) ∈ epi(v∗∗) according to Theorem 4.2, hence there exists (y ̄, v ̄) ∈ co epi(v) ⊂
Y × R, such that ∥(y ̄, v ̄) − (θY , d)∥Y ×R < ε
2 , implying that
∥y ̄∥Y < ε
2 < ε, ∥v ̄ − d∥ < ε
2.
By Carath ́eodory’s Theorem, since (y ̄, v ̄) ∈ co epi(v) ⊂ Rn+1, there exists {pi ≥ 0}n+2
i=1 ,
{(yi, vi) ∈ epi(v)}n+2
i=1 , s.t.
n+2
X
i=1
pi = 1,
n+2
X
i=1
pi(yi, vi) = (y ̄, v ̄).
59

By the definition of v, for any i ∈ {1, · · · , n + 2}, there exisits xi ∈ X, such that
g(xi) ≤ yi, f (xi) ≤ vi + ε
2.
Therefore, we have
n+2
X
i=1
pigi(xi) − y ̄ ≤
n+2
X
i=1
piyi − y ̄ = θY ,
and
n+2
X
i=1
pif (xi) ≤
n2
X
i=1
pi(vi + ε
2 ) = v ̄ + ε
2 ≤ d + ε.
Hence we finish the proof. □
Corollary B.2 Assume that X is a Banach space, Ω = X, Y is a Banach space with a closed
positive cone P ⊂ Y , and f is proper and bounded from below, i.e. there exists M ∈ R, s.t.
f (x) ≥ M , ∀x ∈ X. Then for any ε > 0, there exists yε ∈ Y, ∥yε∥ ≤ ε, N ∈ N+, {pi ≥ 0}N
i=1 ,
and {xi ∈ X}N
i=1, s.t.
N
X
i=1
pi = 1,
N
X
i=1
pig(xi) − yε ≤ θY ,
and
N
X
i=1
pif (xi) ≤ d + ε.
Proof Similarly to the proof for Corollary B.1, we can still find (y ̄, v ̄) ∈ co epi(v) ⊂ Y × R,
such that
∥y ̄∥Y < ε
2 < ε, ∥v ̄ − d∥ < ε
2.
Note that co epi(v) can be expressed by
co epi(v) = {
n
X
i=1
pi(yi, vi)|n ∈ N+, pi ≥ 0, (yi, vi) ∈ epi(v),
n
X
i=1
pi = 1}.
Hence there exists N ∈ N+, {pi ≥ 0}N
i=1, {(yi, vi) ∈ epi(v)}N
i=1, s.t.
N
X
i=1
pi = 1,
N
X
i=1
pi(yi, vi) = (y ̄, v ̄).
The rest of the proof is the same as the proof for Corollary B.1, and the details are omitted
here. □
Corollary B.3 Assume that X is a Banach space, Ω = X, Y is a Banach space with a closed
positive cone P ⊂ Y , and f is proper and bounded from below, i.e. there exists M ∈ R, s.t.
f (x) ≥ M , ∀x ∈ X. Then for any N ∈ N+, {pi ≥ 0}N
i=1, and {xi ∈ X}N
i=1, s.t.
N
X
i=1
pi = 1,
N
X
i=1
pig(xi) ≤ θY ,
60

we have
N
X
i=1
pif (xi) ≥ d.
Proof For any N ∈ N+, s.t.
N
X
i=1
pi = 1,
N
X
i=1
pig(xi) ≤ θY ,
it is straightforward to verify that (yi, f (xi)) ∈ epi(v) for any i ∈ {1, · · · , N }, yi ≥ g(xi) by
the definition of the perturbation functional v. Therefore,
(
N
X
i=1
piyi,
N
X
i=1
pif (xi)) ∈ co epi(v), ∀yi ≥ g(xi).
Since
N
X
i=1
pig(xi) ≤ θY ,
we have
(θY ,
N
X
i=1
pif (xi)) ∈ co epi(v) ⊂ cl co epi = epi(v∗∗),
implying that
N
X
i=1
pif (xi) ≥ v∗∗(θY ) = d,
according to Theorem 4.2. □
C Existence of Lagrange Multiplier
In this appendix we give a detailed review on the existence of Lagrange mulltilpiers in appro
priate function spaces. Most of the material can be found in Dechert (1982) and Pavoni et al.
(2018b). It is included here for completeness.
Definition C.1 Let f : l∞ → R be a functional bounded from below, i.e. there exists M ∈ R,
s.t. f (x) ≥ M , ∀x ∈ l∞; and g : l∞ → l∞ be an arbitrary functional. The l∞-optimization
problem, is defined by
inf
x∈l∞ f (x),
s.t. g(x) ≤ 0,
(C.1)
where g(x) ≤ 0 means gt(x) ≤ 0, ∀t ∈ Z+.
Lemma C.1 (Yosida-Hewitt Decomposition Theorem, see Yosida and Hewitt (1952)(Theorem
1.23, Theorem 1.24, Theorem 2.3)) For any λ ∈ l∞,∗( or l∞,∗
+ ), there exists a unique λ1 ∈
l1( or l1
+), and a unique λs ∈ ls( or ls
+), s.t. λ = λ1 + λs. Here ls is the set of purely finitely
additive measures.
61

Remark C.1 1. A well-known example of λ ∈ l∞,∗ − l1 is constructed by Hahn-Banach
Theorem. To be precise, we define the set c ⊂ l∞ as
c = {x ∈ l∞| tli→m∞ xt exists}.
Therefore the operator fc defined by
fc(x) = tli→m∞ xt, ∀x ∈ c,
is a bounded linear operator on c. According to Hahn-Banach Theorem, this operator fc
can be extended to be a bounded linear operator on l∞, or equivalently, to be an element
of l∞,∗, denoted as f . It is straightforward to check that f ∈/ l1.
2. Another approach to construct an element belonging to l∞,∗ − l1 is to use ultrafilters.
To be precise, for any A ⊆ Z+, let eA be the indicator function of A, i.e.,
eA(t) =



1, t ∈ A;
0, t ∈/ A.
We consider the set18
M := {λ ∈ l∞,∗|⟨λ, eZ+ ⟩ = 1; ⟨λ, eA⟩ = 0 or 1, ∀A ⊂ Z+}.
We note that when λ ∈ M , such that ⟨λ, eA⟩ = 0 for any finite sets A ⊂ Z+, then
λ ∈ l∞,∗ − l1.
3. We define c0 ⊂ c ⊂ l∞ as
c0 = {x ∈ l∞| tli→m∞ xt = 0}.
Then c∗
0 = l1. Various asymptotic behaviors of x ∈ l∞ bring bounded linear functionals in
l∞,∗ − l1. This is why we need restrictions on asymptotic behaviors of g below for further
discussions.
Definition C.2 Let g : l∞ → l∞ be a functional. For any u, v ∈ l∞, let
xT (u, v) :=



ut, t ≤ T ;
vt, t > T.
We say the functional g is Asymptotically Insensitive(AI), if
tli→m∞
h
gt(xT (u, v)) − gt(v)
i
= 0, ∀u, v ∈ l∞, T ∈ Z+.
18As shown in Dechert (1982)(Page 289), M is indeed the set of extreme points of
G := {λ ∈ l∞,∗|⟨λ, eZ+ ⟩ = 1}.
.
62

We say the funtional g is Asymptotoically Non-Anticipatory(ANA) if
Tli→m∞
h
gt(xT (u, v)) − gt(u)
i
= 0, ∀u, v ∈ l∞, t ∈ Z+.
Remark C.2 1. These terminologies were first discussed in Dechert (1982) and were adapted
for the dual approach to dynamic problems in Pavoni et al. (2018a). Here we use the def
initions in Pavoni et al. (2018a).
2. Intuitively, g is AI means that for any t ∈ Z+, gt is not quite related to xr with r ≪ t;
and g is ANA means that for any t ∈ Z+, gt is not quite related to xr with r ≫ t. A
typical type of constraint in dynamic problems is
gD
t (x) :=
∞
X
r=0
βrht+r(xt+r) ≤ 0, ∀t ∈ Z+,
where 0 < β < 1 denotes the discount factor. It is straightforward to check that gD is both
AI and ANA under some mild regularity assumptions on h.
Lemma C.2 Let g : l∞ → l∞ be AI. Then for any λs ∈ ls, u, v ∈ l∞, T ∈ Z+, we have
⟨λs, g(xT (u, v))⟩ = ⟨λs, g(v)⟩.
Proof See Pavoni et al. (2018b)(Page 11, Lemma C.1). □
Lemma C.3 Let g : l∞ → l∞ be ANA. Given u, v ∈ l∞. Moreover, assume that g(xT (u, v))
is uniformly bounded in l∞ with respect to T ∈ Z+. Then for any λ1 ∈ l1, we have
Tli→m∞⟨λ1, g(xT (u, v))⟩ = ⟨λ1, g(u)⟩.
Proof See Pavoni et al. (2018b)(Page 11, Lemma C.2). □
Theorem C.1 Let f : l∞ → R satisfy
Tli→m∞ f (xT (u, v)) = f (u),
for any u, v ∈ l∞. Let g : l∞ → l∞ be AI and ANA, and that there exists u0 ∈ l∞, such
that sup limt→∞ gt(u0) ≤ 019. Assume also that, for any u, v ∈ l∞, g(xT (u, v)) is uniformly
bounded in l∞ with respect to T ∈ Z+. Then the dual problem of (C.1) satisfies
d = sup
λ∈l∞,∗
+
inf
x∈l∞ f (x) + ⟨λ, g(x)⟩ = sup
λ∈l1
+
inf
x∈l∞ f (x) + ⟨λ, g(x)⟩. (C.2)
19This assumption is weaker than the assumption that there exists at least one feasible point to the problem (C.1). Indeed, if there exists a feasible point v0 s.t. g(v0) ≤ 0, then obviously v0 satisfies sup limt→∞ gt(u0) ≤ 0.
63

Proof • For step 1, we aim to show that
inf
x∈l∞ f (x) + ⟨λ1 + λs, g(x)⟩ ≤ inf
x∈l∞ f (x) + ⟨λ1, g(x)⟩, ∀λ1 ∈ l1
+, λs ∈ ls
+. (C.3)
Given λ1 ∈ l1
+, λs ∈ ls
+. For any u ∈ l∞, according to Lemma C.2, we know that
⟨λs, g(xT (u, u0))⟩ = ⟨λs, g(u0)⟩ ≤ 0.
Therefore, inf
x∈l∞ f (x) + ⟨λ1 + λs, g(x)⟩
≤f (xT (u, u0)) + ⟨λ1 + λs, g(xT (u, u0))⟩
≤f (xT (u, u0)) + ⟨λ1, g(xT (u, u0))⟩, ∀u ∈ l∞, T ∈ Z+.
(C.4)
According to Lemma C.3, we know that
Tli→m∞⟨λ1, g(xT (u, u0))⟩ = ⟨λ1, g(u)⟩.
Therefore, we take the limit T → ∞ in (C.4) and obtain
inf
x∈l∞ f (x) + ⟨λ1 + λs, g(x)⟩
≤ Tli→m∞ f (xT (u, u0)) + ⟨λ1, g(xT (u, u0))⟩
=f (u) + ⟨λ1, g(u)⟩, ∀u ∈ l∞.
(C.5)
Since (λ1, λs) in (C.5) is arbitrarily chosen from (l1
+, ls
+), we can conclude (C.3) from
(C.5).
• For step 2, we utilize Yosida-Hewitt Decomposition to finish the proof. According to
Lemma C.1, any λ ∈ l∞,∗
+ can be decomposed as λ = λ1 + λs, where λ1 ∈ l1
+ and λs ∈ ls
+.
It is then straightforward to conclude (C.2) from (C.3). □
Remark C.3 Under the same assumptions as Theorem C.1, but with the assumption of the
existence of u0 ∈ l∞ s.t. sup limt→∞ gt(u0) ≤ 0 replaced by the Slater’s condition, it is shown
in Pavoni et al. (2018b)(Page 11, Theorem C.2) that if (x∗, λ∗) ∈ l∞ × l∞,∗ is a saddle point
of L(x, λ) = f (x) + ⟨λ, g(x)⟩, then (x∗, λ∗) ∈ l∞ × l1. The properties of the saddle points for
the Lagrangian are studied in Dechert (1982) and Pavoni et al. (2018a), while Theorem C.1
addresses the dual problem.
In practical applications, it is more common to consider optimization problems with a
bounded feasible set A ⊂ l∞. The requirement for f in Theorem C.1 and the ANA property
for g are easily satisfied uniformly with respect to u ∈ A, v ∈ l∞, s.t. xT (u, v) ∈ A based on
the existence of a discount factor 0 < β < 1 over periods. However, the AI property for g is
mainly satisfied by problems with only forward constraints and backward constraints that only
64

affect a few periods. Therefore, for problems with a bounded feasible set A ⊂ l∞, a discount
factor 0 < β < 1 across periods, forward-looking constraints, and general backward-looking
constraints, different assumptions should be made.
Let A ⊂ l∞. For any u ∈ A, we define
BT (u) = {v ∈ l∞|xT (u, v) ∈ A}.
In this section, we consider a slightly different problem to (C.1) as following
xi∈nfA f (x),
s.t. g(x) ≤ 0.
(C.6)
Definition C.3 We say the functional g : A → l∞ is Uniformly Asymptotically Non
Anticipatory(UANA), if for any t ∈ Z+ and u ∈ A,
Tli→m∞ sup
v∈BT (u)
|gt(xT (u, v)) − gt(u)| = 0
Lemma C.4 Let g : A → l∞ be UANA. Given u ∈ A, assume additionaly that g(xT (u, v)) is
uniformly bounded in l∞ with respect to T ∈ Z+ and v ∈ BT (u). Then for any λ1 ∈ l1, we
have
Tli→m∞ sup
v∈BT (u)
|⟨λ1, g(xT (u, v))⟩ − ⟨λ1, g(u)⟩| = 0
Proof Since g(xT (u, v)) is uniformly bounded in l∞, there exists M > 0, s.t.
∥g(xT (u, v)) − g(u)∥l∞ < M, ∀T ∈ Z+, v ∈ BT (u).
Since λ1 ∈ l1, for any ε > 0, there exists t ̄ > 0, such that
∞
X
t=t ̄+1
|λ1
t| < ε
2M .
Since g is UANA, there exists T ̄ > 0, such that
|gt(xT (u, v)) − gt(u)| < ε
2∥λ1∥l1
, ∀T ≥ T ̄, v ∈ BT (u), t ≤ t ̄.
Therefore,
|⟨λ1, g(xT (u, v)) − g(u)⟩|
≤
t ̄
X
t=1
∥λ1∥l1 |gt(xT (u, v)) − gt(u)| +
∞
X
t=t ̄+1
|λ1
t |∥g(xT (u, v)) − g(u)∥l∞
≤∥λ1∥l1
ε
2∥λ1∥1
l
+ε
2M · M = ε, ∀T ≥ T ̄, v ∈ BT (u).
65

Since ε is chosen arbitrarily, we finish the proof. □
Assumption C.1 We assume that for any u ∈ A and T ̄ ∈ Z+, there exists T ≥ T ̄ and
v ∈ BT (u), s.t.
lim sup
t→∞
gt(xT (u, v)) ≤ 0.
Theorem C.2 Let f : A → R satisfy
Tli→m∞ sup
v∈BT (u)
|f (xT (u, v)) − f (u)| = 0. (C.7)
Let g : A → l∞ be UANA, and satisfy Assumption C.1. Assume additionaly that, for any
u ∈ A, g(xT (u, v)) is uniformly bounded in l∞ with respect to T ∈ Z+ and v ∈ BT (u). Then
the dual problem of (C.1) satisfies
d = sup
λ∈l∞,∗
+
xi∈nfA f (x) + ⟨λ, g(x)⟩ = sup
λ∈l1
+
xi∈nfA f (x) + ⟨λ, g(x)⟩. (C.8)
Proof The spirit of the proof is indeed the same as the proof for Theorem C.1. We again
divided it into two steps.
• For step 1, we aim to show that
xi∈nfA f (x) + ⟨λ1 + λs, g(x)⟩ ≤ xi∈nfA f (x) + ⟨λ1, g(x)⟩, ∀λ1 ∈ l1
+, λs ∈ ls
+. (C.9)
Given λ1 ∈ l1
+, λs ∈ ls
+. For any u ∈ A and T ̄ > 0, according Assumption C.1, we know
that there exists T ≥ T ̄ and v(u, T ̄) ∈ BT (u), s.t.
⟨λs, g(xT (u, v(u, T ̄)))⟩ ≤ 0.
Therefore,
xi∈nfA f (x) + ⟨λ1 + λs, g(x)⟩
≤f (xT (u, v(u, T ̄))) + ⟨λ1 + λs, g(xT (u, v(u, T ̄)))⟩
≤f (xT (u, v(u, T ̄))) + ⟨λ1, g(xT (u, v(u, T ̄)))⟩, ∀u ∈ A, T ̄ ∈ Z+.
(C.10)
According to Lemma C.4, and the assumption that
Tli→m∞ sup
v∈BT (u)
|f (xT (u, v)) − f (u)| = 0,
we take the limit T → ∞ in (C.10) and obtain
xi∈nfA f (x) + ⟨λ1 + λs, g(x)⟩
≤f (u) + ⟨λ1, g(u)⟩, ∀u ∈ A.
(C.11)
66

Since (λ1, λs) in (C.11) is arbitrarily chosen from (l1
+, ls
+), we can conclude (C.9) from
(C.11).
• For step 2, we utilize Yosida-Hewitt Decomposition to finish the proof. According to
Lemma C.1, any λ ∈ l∞,∗
+ can be decomposed as λ = λ1 + λs, where λ1 ∈ l1
+ and λs ∈ ls
+.
It is then straightforward to conclude (C.8) from (C.9). □
The following theorem establishes the existence for the dual problem.
Theorem C.3 Under Assumption 3.1, the dual Lagrangian problem of (4.6) can be formulated
as
d = inf
(λit (ht ))∈Λ
sup
(a(st ))∈A ̃∞ (x0 )
L((a(st)), (λi(ht)); (γi), x0, s0), (C.12)
where L is the Lagrangian functional defined in (3.3).
Proof The problem (4.6) can be reformulated as
max
(a(st ))∈A ̃∞ (x0 )⊂A∞
f ((a(st))),
s.t. g((a(st))) ≥ 0,
(C.13)
where f and g are defined in (4.7) and (4.8). It then suffices to verify all the conditions in
Theorem C.2: Due to 0 < β < 1, and the boundedness of r and gi, it is direct to verify that
f satisfies (C.7), g is UANA, and g is bounded in l∞. For any u = (ut(st)) ∈ A ̃∞(x0), we
denote xu
t the state induced by u. For any T ∈ N, sT ∈ ST , according to the fifth assumption
in Assumption 3.1, the problem with (x′
0 = xu
T (sT ), s′
0 = sT +1) has a feasible point. Therefore,
there exists v = (vt(st)), s.t. vt(sT , st−T )t≥T ∈ A ̃∞(xu
T (sT )) for any sT ∈ ST , such that when
considering aT (u, v) = ([aT (u, v)]t(st)) ∈ A ̃∞(x0) defined as
[aT (u, v)]t(st) =



ut(st), t ≤ T ;
vt(st), t > T,
(g(aT (u, v)))t, ht, i ≥ 0 when t ≥ T . Therefore, Theorem C.1 applies. □
Note that in this formulation, the multipliers that correspond to the forward looking con
straint starting that time t depend on the history up to time t but cannot be conditioned on
the action taken at time t.
67

D Relation to Bloise and Siconolfi (2022)
We consider a one-principle one-agent problem
V (x0, s0, μ0) = sup
{at }
E0
∞
X
t=0
βt(u(xt, at, st) + μ0v(xt, at, st))
s.t. xt+1 = ζ(xt, at, st), p(xt, at, st) ≥ 0, ∀t ≥ 0, st ∈ St
Et
∞
X
n=0
βnv(xt+n, at+n, st+n) ≥ v ̄, ∀t ≥ 0, st ∈ St.
We define
W 1(Esu′, x, a, s) = u(x, a, s) + βEsu′, W 2(Esv′, x, a, s) = v(x, a, s) + βEsv′.
Applying the Negishi’s method in Bloise and Siconolfi (2022), we have the recursive formula as
follows
J(θ1, θ2, x, s) = sup
a,u′ ,v′
θ1W 1(Esu′, x, a, s) + θ2W 2(Esv′, x, a, s)),
s.t. p(x, a, s) ≥ 0, x′ = ζ(x, a, s),
v(x, a, s) + βEsv′ ≥ v ̄,
(u′(x′, s′), v′(x′, s′)) ∈ (U (x′, s′)) = {θ ̃1u′(x′, s′) + θ ̃2v′(x′, s′) ≤ J (θ ̃1, θ ̃2, x′, s′), ∀θ ̃1, θ ̃2 ≥ 0}
It is straightforward to see that U (x′, s′) is closed and convex for any x′ ∈ X , s′ ∈ S.
Furthermore, J is homogeneous of degree 1 w.r.t. (θ1, θ2), i.e. J(tθ1, tθ2, x, s) = tJ(θ1, θ2, x, s)
for all t ≥ 0; and it is straightforward to see that J is convex w.r.t. (θ1, θ2). Fix θ1 = 1, We
define D(θ2, x, s) = J(1, θ2, x, s). Then D is convex w.r.t. θ2. The Negishi’s recursive formula
for D is written
D(θ2, x, s) = sup
a,u′ ,v′
W 1(Esu′, x, a, s) + θ2W 2(Esv′, x, a, s)),
s.t. p(x, a, s) ≥ 0, x′ = ζ(x, a, s),
v(x, a, s) + βEsv′ ≥ v ̄,
(u′(x′, s′), v′(x′, s′)) ∈ (U (x′, s′)) = {u′(x′, s′) + θ ̃2v′(x′, s′) ≤ D(θ ̃2, x′, s′), ∀θ ̃2 ≥ 0}
(D.1)
We define the set of all feasible (a, u′, v′) as F . Problem (D.1) can be rewritten as
D(θ2, x, s) = sup
(a,u′ ,v′ )∈F
F (a, u, v′) := u(x, a, s) + θ2v(x, a, s) + βEsu′ + θ2βEsv′ (D.2)
68

1. We show that
D(θ2, x, s) ≤ sup
a∈A ̃(x,s)
λin≥f0 u(x, a, s) + θ2(v(x, a, s) + λ(v(x, a, s) − v ̄) + βEsD(θ2 + λ, x, s).
(D.3)
Noticing that ∀(a, u′, v′) ∈ F and λ ≥ 0, we have
F (a, u′, v′) = u(x, a, s) + θ2v(x, a, s) + βEsu′ + θ2βEsv′
≤ u(x, a, s) + θ2v(x, a, s) + λ(v(x, a, s) + βEsv′ − v ̄) + βEsu′ + θ2βEsv′
= u(x, a, s) + θ2(v(x, a, s) + λ(v(x, a, s) − v ̄) + βEs(u′ + (θ2 + λ)v′)
≤ u(x, a, s) + θ2(v(x, a, s) + λ(v(x, a, s) − v ̄) + βEsD(θ2 + λ, x′, s′).
Since λ is arbitrarily chosen, we have
F (a, u′, v′) ≤ inλf u(x, a, s) + θ2(v(x, a, s) + λ(v(x, a, s) − v ̄) + βEsD(θ2 + λ, x, s),
for all (a, u′, v′) ∈ F , implying that
D(θ2, x, s) = sup
(a,u′ ,v′ )∈F
F (a, u′, v′) ≤ sup
(a,u′ ,v′ )∈F
inλf u(x, a, s)+θ2(v(x, a, s)+λ(v(x, a, s)−v ̄)+βEsD(θ2+λ, x, s)
Therefore,
D(θ2, x, s) ≤ sup
a∈A ̃(x,s)
λin≥f0 u(x, a, s) + θ2(v(x, a, s) + λ(v(x, a, s) − v ̄) + βEsD(θ2 + λ, x, s).
2. We show that
D(θ2, x, s) ≥ sup
a∈A ̃(x,s)
λin≥f0 u(x, a, s) + θ2(v(x, a, s) + λ(v(x, a, s) − v ̄) + βEsD(θ2 + λ, x, s).
(D.4)
By the definition of D, for any x′ ∈ X , s′ ∈ S, λ ≥ 0, there exists (u′
λ(x′, s′), v′
λ(x′, s′)) ∈
U (x′, s′), s.t. D(λ, x′, s′) = u′
λ(x′, s′) + λvλ(x′, s′). For any a ∈ A ̃(x, s), we have
inλf u(x, a, s) + θ2v(x, a, s) + λ(v(x, a, s) − v ̄) + βEsD(θ2 + λ, x′, s′)
= inλf u(x, a, s) + θ2v(x, a, s) + λ(v(x, a, s) − v ̄) + βEs(u′
θ2+λ + (θ2 + λ)v′
θ2 +λ ))
= inλf u(x, a, s) + θ2v(x, a, s) + λ(v(x, a, s) + βEsv′
θ2+λ − v ̄) + βEs(u′
θ2+λ + θ2v′
θ2 +λ )).
If (a, u′
θ2 , v′
θ2 ) ∈ F , then
inλf u(x, a, s) + θ2v(x, a, s) + λ(v(x, a, s) + βEsv′
θ2+λ − v ̄) + βEs(u′
θ2+λ + θ2v′
θ2 +λ ))
≤u(x, a, s) + θ2v(x, a, s) + βEs(u′
θ2 + θ2v′
θ2 ) ≤ D(θ2, x, s).
(D.5)
If (a, u′
θ2 , v′
θ2 ) ̸∈ F and then one of the following happens:
69

• For all s′ ∈ S, (u′(ζ(x, a, s), s′), v′(ζ(x, a, s), s′)) ∈ U (ζ(x, a, s), s′), (a, u′, v′) ̸∈ F .
According to the closedness of U, there exists L > 0, s.t.
v(x, a, s) + βEsv′
θ2+λ − v ̄ ≤ L,
implying that
inλf u(x, a, s)+θ2v(x, a, s)+λ(v(x, a, s)+βEsv′
θ2 +λ −v ̄)+β Es (u′
θ2 +λ +θ2 v′
θ2+λ)) = −∞.
• We could find a λ∗ > 0, s.t. v′
θ2+λ∗ binds the incentive constraint v(x, a, s) +
βEsv′
θ2+λ∗ − v ̄ = 0 due to the convexity of D. Similar arguments gives the same
inequality (D.5).
Therefore,
sup
a∈A ̃(x,s)
inλf u(x, a, s) + θ2v(x, a, s) + λ(v(x, a, s) − v ̄) + βEsD(θ2 + λ, x′, s′) ≤ D(θ2, x, s).
We combine 1. and 2. and see that the largest fixed point of (D.1) coincides with the largest
fixed point of the sup-inf formula.
E Finite horizon forward looking constraints
In the general formulation, incentive constraints only involve finite periods. In this section,
we consider the two-period case. The incentive constraints in the deterministic problems are
replaced by
Est
1
X
n=0
βngi(xt+n, at+n(st+n), st+n) ≥ g ̄i, ∀t ∈ N, ∀s ∈ St, ∀i ∈ {1, · · · , I},
and the deterministic problem is20
max
(at (st ))∈A∞ ⊂l∞
I
X
i=1
γigi(x0, a0(s0), s0) + Es0
∞
X
t=0
βtr(xt, at(st), st)
s.t. Est
1
X
n=0
βngi(xt+n, at+n(st+n), st+n) ≥ g ̄i, ∀t ∈ N, ∀st ∈ St, ∀i ∈ {1, · · · , I},
where xt+1 = ζ(xt, at(st), st) and p(xt, at(st), st) ≥ 0, ∀t ∈ N, st ∈ St
(E.1)
20Note that the objective function is also different from problem (3.1).
70

The Lagrangian is then defined as
L((at(st)), (λi
t(ht)); (γi), x0, s0)
=
I
X
i=1
γigi(x0, a0(s0), s0) + Es0
∞
X
t=0
βt r(xt, at(st), st)
+λi
t(s0, a0(s0), · · · , st−1, at−1(st−1), st)
1
X
n=0
βngi(xt+n, at+n(st+n), st+n) − g ̄i
!!
.
(E.2)
Theorem E.1 For any x ∈ X , s ∈ S, γ ∈ RI
+, the dual value function D(x, γ, s0) defined as
D(γ, x, s0) := inf
(λit (ht ))∈Λ
sup
(at (st ))∈A ̃∞
L((at(st)), (λi
t(ht)); (γi), x0, s0)
satisfies the following recursive equation
D(γ, x, s) = inf
λ∈RI
+
sup
a∈A ̃(x,s)
"
r(x, a, s) +
I
X
i=1
γigi(x, a, s) + λi(gi(x, a, s) − g ̄i)
!
+ βEsD(λ, x′, s′)
#
,
where x′ = ζ(x, a, s).
(E.3)
Proof By straightforward algebric simplification, we have
L((at(st)), (λi
t(ht)); (γi), x0, s0)
=
I
X
i=1
γigi(x0, a0(s0), s0) + Es0
∞
X
t=0
βt r(xt, at(st), st)
+
I
X
i=1
λi
t(s0, a0(s0), · · · , st−1, at−1(st−1), st)
1
X
n=0
βngi(xt+n, at+n(st+n), st+n) − g ̄i
!!
= r(x0, a0, s0) +
I
X
i=1
γigi(x0, a0, s0) + λi
0(gi(x0, a0, s0) − g ̄)
!
+ βEs0
I
X
i=1
λi
0gi(x1, a1, s1) + Es1
∞
X
t=1
βt−1 r(xt, at(st), st)
+
I
X
i=1
λi
t(s0, a0(s0), · · · , st−1, at−1(st−1), st)
1
X
n=0
βngi(xt+n, at+n(st+n), st+n) − g ̄i
!!!
.
(E.4)
The rest of the proof follows the same procedure as in the proof for Theorem 3.1, and we omit
the details here. □
71

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:14.522Z
- **Text Length:** 128914 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 71 of 71
