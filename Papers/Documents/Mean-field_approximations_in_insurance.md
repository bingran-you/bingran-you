# PDF Document: Hornung - 2025 - Mean-field approximations in insurance.pdf

**File Path:** Hornung - 2025 - Mean-field approximations in insurance.pdf

**Processed Date:** 2026-02-10T18:13:42.036Z

**File Size:** 613.51 KB

**Total Pages:** 50

**Extracted Pages:** 50

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3558

**Title:** Mean-field approximations in insurance

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

MEAN-FIELD APPROXIMATIONS IN INSURANCE
PHILIPP C. HORNUNG
November 7, 2025
Abstract. The calculation of the insurance liabilities of a cohort of dependent individuals in general requires the solution of a high-dimensional system of coupled linear forward integro-differential equations, which is infeasible for a larger cohort. However, by using a mean-field approximation, the high dimensional system of linear forward equations can be replaced by a low-dimensional system of non-linear forward integro-differential equations. We show that, subject to certain regularity condi-
tions, the insurance liability viewed as a (conditional) expectation of a functional of an underlying jump process converges to its mean-field approximation, as the number of individuals in the cohort goes to infinity. Examples from both life- and non-life insurance illuminate the practical importance of mean-field approximations.
Keywords: Reserving; Non-linear forward equations; Propagation of Chaos; McKean–Vlasov Jump Process;
1. Introduction
When modelling the insurance liabilities of a cohort, the individual liability can depend on the other individuals’ liabilities, either because the insurance payments of one individual depend on the insurance payments of the other individuals, while the individuals themselves are independent, or because the individuals themselves are dependent. The former case was the subject of [9], while the latter case so far has recieved little to no attention in the literature. The purpose of this paper is to-
 remedy this fact.
We consider a cohort of n homogeneous individuals, each with an associated jump process, where the insurance payments of each individual are given by a functional the individual’s jump process path. The insurance liability is then either the expectation of the insurance payments, or the conditional expectation of the insurance payments given the individual’s initial state or covariates. The compensators of the jump processes are assumed to be absolutely continuous with respect to the Lebesgue meas-
ure and we allow the intensity kernel to depend on collective quantities, such as cohort averages or functions thereof. Thus the individuals are dependent. When using the forward method, the calculation of the insurance liability of a single individual requires one to solve a system of linear forward integro-differential equations satisfied by the occupation or transition probabilities, and since the individuals are dependent, one would have to solve n coupled systems of forward integro-differenti-
al equations simultaneously. This is computationally infeasible when n is large.
1
arXiv:2511.04198v1 [q-fin.RM] 6 Nov 2025

2 PHILIPP C. HORNUNG
One solution to this problem is to replace all collective quantities by their expectations. In this case the forward integro-differential equations become non-linear, but the dimension of the system remains the same as for a single individual and thus one can calculate the liabilities in a similar fashion as if the individuals were independent. This is called a mean-field approximation and the resulting insurance liability will be called the mean-field liability.
These mean-field approximations have been used to calculate the insurance liability for contracts that cover risks with contagion effects, such as epidemics, where the probability of infection can depend on the number of individuals in the cohort already infected, see [14], or cyber attacks, where the probability of a computer getting infected by a computer virus can depend on the number of infected neighbours in a network, see [10]. Another possible example is the inclusion of collective effects -
across lines of business, such as the modelling of disability insurance using collective information about health insurance claims, see [15]. The goal of this paper is to give these approximations a solid mathematical foundation.
The non-linear equations obtained by replacing the collective quantities by their expectation are solved by the occupation- or transition probabilites of a distribution dependent jump process, which is distribution dependent in the sense that the intensity kernel depends on the distribution of the process itself. Thus by replacing the average with the mean, one changes the probabilistic model from a model of dependent individuals with a jump process to a model of independent individuals with a dis-
tribution dependent jump process and the mean-field liability can therefore be interpreted as the (conditional) expectation of a functional of a distribution-dependent jump process path.
We show that if the insurance payments are almost surely continuous and uniformly integrable functionals of jump process paths, then their expectation (the insurance liability) converges as well, both in the unconditional and under some additional assumptions in the conditional case. Additionally we prove a law of large numbers in the sense that the cohort average of insurance payments converges to the (unconditional) mean-field insurance liability when n becomes large. This shows that the diversi-
fication effect of large cohorts persists, even though the individuals are dependent.
The key to these results is to show that for large n, the joint distribution of the jump processes for a subcohort of k individuals in a cohort of n individuals converges weakly to the joint distribution of k independent individuals with a distributiondependent jump process. This type of weak convergence is also called chaos or propagation of chaos and was first introduced by [21], while the concept of distribution dependent processes for diffusion processes stems from [24, 25]. Ever since these c-
oncepts have been further developed in many directions and have found numerous applications (for a very comprehensive review, see [4, 5]). While the papers [27] and [8] provide different propagation of chaos results specifically for jump processes, the assumptions on the distribution dependence are too strict for many actuarial applications, as they do not allow for distribution dependent jump sizes. We therefore borrow some results and methods from the jump-diffusion literature. In particular, we-
 use a coupling construction introduced by [18] combined with an approach used by [1] to prove chaosticity for a class of time-inhomogenous

MEAN-FIELD APPROXIMATIONS IN INSURANCE 3
pure jump processes with potentially unbounded jump sizes. This is sufficient for the unconditional case and in the case that the state space is countable, it is also sufficient for the conditional case.
If the state space is uncountable, this result is not enough for the conditional case and more work is required. For any fixed k we can condition on the initial state or covariates for the first k individuals. Under the assumption that the joint conditional distribution of the initial state or covariates of the remaining n  ́ k individuals given the inital state or covariates of the first k individuals is chaotic, we show that the joint conditional distribution of the first k individuals, given th-
eir intial state or covariates, converges weakly to the joint distribution of k independent individuals, each following the conditional distribution of a non-linear jump process given the respective initial value or covariates. While this result is not surprising, it has (to the best of our knowledge) not previously received attention in the literature.
Finally we note that the mean-field liabilities considered in this paper can naturally be calculated via the forward method by solving the non-linear forward integro-differential equations for the occupation or transition probabilities of the distribution dependent jump process. Since only the initial distribution is known and the intensity kernel depends on the occupation probabilities themselves, a backwards approach appears cumbersome. If one individual’s insurance payments only depends on the -
other individuals’ insurance payments, while the individuals themselves are independent, then [9] shows that a backwards approach is possible. In that case the liability can be calculated by solving a non-linear version of Thiele’s backward differential equation, which has been generalised to the non-Markovian case in [6] and the as-if-Markov case in [7].
In Section 2 we introduce non-linear jump processes, and show that their conditional path-laws are equal to the path-laws of a linearised jump processes. In Section 3 we prove the usual chaosticity result, while we in Section 4 prove the conditional result. In Sections 5 and 6, we discuss mean-field approximations for typical non-life and life insurance liabilities, verify a law of large numbers and central limit theorem followed by two illuminating examples. The individual non-life insurance paym-
ent is the aggregate claim amount, where the claim occurence rate and the claim sizes can depend on collective quantities, while the individual life insurance payments are modelled by a typical payment stream containing sojourn and transition payments.
Notation, definitions and preliminaries
Throughout the text, we will be using some spaces and metrics which we will define here. On Rd we will use the metric
dpx, yq “
d
ÿ
i“1
|xi  ́ yi|, x, y P Rd
and the norm
}x} “
d
ÿ
i“1
|xi|, x P Rd,
where |  ̈ | is the absolute value function on R.

4 PHILIPP C. HORNUNG
Let pS, dSq be a Polish space. We let Dprτ, T s, Sq be the Skorohod space of c`adl`ag paths t ÞÑ xt with values in S on the time interval rτ, T s. On this space we will use the following two metrics. The uniform metric dU defined as
dU px, yq :“ sup
τ ďtďT
dSpxt, ytq, x, y P Dprτ, T s, Sq
and the Skorokhod metric
dJ 1
px, yq :“ λinPfΛ
"
sup
τ ďtďT
dSpxλptq, ytq _ sup
τ ďt‰sďT
log
ˇ ˇ ˇ ˇ
λptq  ́ λpsq t ́s
ˇ ˇ ˇ ˇ
*
,
for x, y P Dprτ, T s, Sq. The set Λ contains all increasing bijections on rτ, T s. The metric space pDprτ, T s, Sq, dU q is complete but not separable and therefore not Polish. Luckily the space pDprτ, T s, Sq, dJ1 q is Polish. Note that dJ1 px, yq ď dU px, yq, as the identity t ÞÑ t is an element of Λ. This implies that the topology induced by dU is stronger than the topology induced by dJ1 , meaning that any sequence converging in the uniform topology also converges in the J1-topology. Finally l-
et Hprτ, T s, Sq Ă Dprτ, T s, Sq be the space of piecewise constant c`adl`ag paths, with a finite number of jumps on a finite time interval.
Let PpSq denote the set of probability measures on S. Let q ě 1 and define Pq as
PqpSq :“
"
ρ P PpSq :
ż
S
dSpx0, xqqρpdxq ă 8
*
,
where x0 P S is arbitrary. Note that PppSq Ă PqpSq Ă P1pSq for p ą q ą 1.
On the set P1pEq we define the Wasserstein(1)-distance between two measures ρ1, ρ2 P P1pSq as
dW :“ inf
X„ρ1,Y „ρ2
ErdSpX, Y qs, ρ1, ρ2 P P1pSq.
If pS, dSq is Polish, then pP1pSq, dW q will be Polish as well (see Th. 6.9 in [29]). We will denote the Wasserstein distance on P1pSq simply as dW , while we on P1pDprτ, T s, Sqq will use dU
W and dJ1
W , which are the Wasserstein(1)-distances based
on dU and dJ1 . Note that it holds that dJ1
W ď dU
W.
A starting point for many proofs below is the following inequality:
dW pρ1, ρ2q ď ErdSpX, Y qs,
where X, Y : Ω Ñ S are two random variables with XpPq “ ρ1 and Y pPq “ ρ2.
By the Kantorovich-Rubinstein duality it holds that the Wasserstein(1) distance on P1pSq is equal to the Kantorovich-Rubinstein distance defined as
dKRpρ1, ρ2q “ sup
f PLip(1)
"ˇ ˇ ˇ ˇ
ż
S
f pxqρ1pdxq  ́
ż
S
f pxqρ2pdxq
ˇ ˇ ˇ ˇ
*
,
where Lipp1q is the set of Lipschitz continuous functions f : S Ñ R with Lipschitz constant less than or equal to 1 (see p. 60 of [29]).
The Kantorovich-Rubinstein distance can be extended to to the set M1
b pSq given by
M1
b pSq :“
"
μ P MpSq : μpSq ă 8 and
ż
S
dSpx0, xqμpdxq ă 8
*
,

MEAN-FIELD APPROXIMATIONS IN INSURANCE 5
by defining for μ1, μ2 P M1
b pSq
dKRpμ1, μ2q :“ sup
f PLip(1)
"ˇ ˇ ˇ ˇ
ż
S
f pxqμ1pdxq  ́
ż
S
f pxqμ2pdxq
ˇ ˇ ˇ ˇ
*
.
For x0 P S we can also define
dx0
KRpμ1, μ2q :“ sup
f PLip(1),f px0q“0
"ˇ ˇ ˇ ˇ
ż
S
f pxqμ1pdxq  ́
ż
S
f pxqμ2pdxq
ˇ ˇ ˇ ˇ
*
.
It holds that
dx0
KRpμ1, μ2q ď dKRpρ1, ρ2q,
with equality when μ1pSq “ μ2pSq. In particular, if ρ1, ρ2 P P1pEq then
dx0
KRpρ1, ρ2q “ dKRpρ1, ρ2q “ dW pρ1, ρ2q.
2. Jump processes
Let pΩ, F , F, Pq be a filtered probability space satisfying the usual conditions, where we write F “ pFtqtě0. We fix a terminal time T ą 0 and a set E Ă Rd such that pE, dq is a Polish space, will henceforth denote the state space of the jump processes considered here. Let h : E ˆ E Ñ Rd be given by hpx, yq “ y  ́ x and set A :“ hpE, Eq. Thus A is the set of possible jump sizes.
2.1. Jump processes. For pτ, xq P r0, T s ˆ E we consider the jump process with state space E given by the SDE
X τ,ζ
t “Y `
ż
pτ,tsˆA
(2.1) z Qpds, dzq,
where Y has distribution ζ P P1pEq and Q is a random counting measure with state space A and compensating measure
L ̄pdt, dzq “ μtpXτ,ζ
t ́ , dzqdt.
Here μ is assumed to be a bounded kernel with first moment, that is pt, xq ÞÑ μtpx, Bq is Borel-measurable for all B P BpAq and B ÞÑ μtpx, Bq is an element of M1
bpAq for all pt, xq P r0, T s ˆ E. We can now define the bounded and Borelmeasurable function λtpxq :“ μtpx, Aq and the probability kernel rtpx, dzq :“
μt px,dz q
λtpxq . Thus μtpx, dzq “ λtpxqrtpx, dzq, where λ can be interpreted as the jump
intensity, while rtpx, dzq is the distribution of the jump sizes of Xτ,ζ given that a jump occurs at time t and that Xτ,ζ
t ́ “ x. In order for Xτ,ζ
t to always take values in E we assume that μtpx, Azgx ́1pEqq “ 0 for all x P E, where gx : A Ñ Rd is given by gxpzq “ x ` z.
Theorem 2.1. Assume that the function λ : r0, T sˆE Ñ r0, 8q is Borel-measurable and that there exists a Cλ, Cr ą 0 such that
sup
tPrτ,T s,xPE
λtpxq ď Cλ and sup
tPrτ,T s,xPE
ż
A
}z} rtpx, dzq ď Cr.
Then there exists a unique weak solution to the SDE (2.1), which is non-explosive.

6 PHILIPP C. HORNUNG
Proof. Let Y be a random variable with distribution ζ and let pTi, ZiqiPN be a marked point process with associated random counting measure Q with state space A. We let the compensating measure of Q, which determines the distribution of both Q and pTi, ZiqiPN, be given by
Lpdt, dzq “ μt
ˆ
Y`
Nt ́ ÿ
i“1
Zi, dz
 ̇
dt,
where Nt ́ :“ Qppτ, tq ˆ Aq. This satisfies the conditions of Theorem 8.2.2 of [23], thus yielding existence an uniqueness of Q with compensating measure L. Let now f : E ˆ NA Ñ Hprτ, T s, Eq be a mapping from the space of marked point process realisations on A into the space of jump process paths on E given by
f pY, pTi, ZiqiPNq “
ˆ
Y`
Nt
ÿ
i“1
Zi
 ̇
tPrτ,T s
.
Let πt : Hprτ, T s, Eq Ñ E be the time marginal projection. Then
X τ,ζ
t “ πtpf pY, pTi, ZiqiPNqq “ Y `
Nt
ÿ
i“1
Zi
and since
Lpdt, dzq “ μtpπt ́pf pY, pTi, ZiqiPNqq, dzqdt “ μtpXt ́, dzqdt,
we can conclude that Xτ,ζ
t “ πtpf pY, pTi, ZiqiPNqq is the unique solution of (2.1).
The non-explosiveness follows, as
E
„
sup
τ ďtďT
}X τ,ζ
t}
ȷ
ď Er}Y }s ` E
„ż T
τ
ż
E
}z }μs pX τ,ζ
s ́ , dyqdt
ȷ
ď Er}Y }s ` CλCrpT  ́ τ q.
□
The stochastic process Xτ,ζ has c`adl`ag paths and can thus be viewed as a random variable taking values in the space Dprτ, T s, Eq and the path-law of Xτ,ζ given by Qτ,ζ :“ Xτ,ζpPq is an element of P1pDprτ, T s, Eqq. Theorem 2.1 yields existence and uniqueness of the path-law Qτ,ζ.
A special case of (2.1) that is of particular interest is
X τ,x
t “x`
ż
pτ,tsˆA
(2.2) z Qpds, dzq,
with a deterministic initial starting value, corresponding to ζ “ δtxu. Let Qτ,x “ Xτ,xpPq. Then the familiy pQτ,xqxPE constitutes a regular conditional probability of Qτ,ζ given the initial value:
Theorem 2.2. The familiy pQτ,xqxPE constitutes a regular conditional probability of Qτ,ζ. Thus it holds that
Qτ,ζ pdωq “
ż
E
Qτ ,x pdωqζ pdxq.

MEAN-FIELD APPROXIMATIONS IN INSURANCE 7
Proof. For a proof see Appendix A. This is the jump process version of Proposition 2.8 of [28]. □
This result shows us, that the distribution of the SDE (2.1) conditional on the initial state being x P E is given by Qτ,x, which is the distribution of the SDE (2.1). Furthermore, we have that this conditional distribution is independent of the initial distribution ζ, meaning that the same pQτ,xqxPE is a regular conditional distribution for any Qτ,ζ.
When it comes to practical calculations, we are interested in the time-marginal distributions ητ,x
t :“ Xτ,x
t pPq and ητ,ζ
t :“ Xτ,ζ
t pPq. The former satisfy the wellknown (see [12, 11]) integro-differential equations given by:
Proposition 2.3. The law ητ,x
t satsifies the forward integro-differential equation
d
dt ητ,x
t pBq “
ż
EzB
ż
A
1Bpy ` zqμtpy, dzqητ,x
t pdyq
 ́
ż
B
ż
A
1EzBpy ` zqμtpy, dzqητ,x
t pdyq,
with ηττ,xpBq “ δtxupBq for t ě τ and x P E.
Theorem 2.2 directly implies
ητ,ζ
t pBq “
ż
E
ητ,x
(2.3) t pBqζpdxq.
As the time-marginals pητ,x
t qxPE do not depend on ζ, one can easily calculate the
probabilities ητ,ζ
t for any ζ P P1pEq, once pητ,x
t qxPE is obtained. But by using
(2.3) we can also prove that ητ,ζ
t can be calculated by directly solving the following integro-differential equations:
Proposition 2.4. Let B P BpEq. The law ητ,ζ
t satsifies the forward integrodifferential equation
d
dt ητ,ζ
t pBq “
ż
EzB
ż
A
1Bpx ` zqμtpx, dzqητ,ζ
t pdxq
 ́
ż
B
ż
A
1EzBpx ` zqμtpx, dzqητ,ζ
t pdxq,
with ηττ,ζpBq “ ζpBq for t ě τ and ζ P P1pEq.

8 PHILIPP C. HORNUNG
Proof. By (2.3) and Proposition 2.3 we have that:
ητ,ζ
t pBq “
ż
E
ητ,x
t pBqζpdxq “
ż
E
ητ,x
τ ζpdxq
`
ż
pτ,ts
ż
EzB
ż
A
1Bpy ` zqμspy, dzq
ż
E
ητ,x
s pdyqζpdxqds
 ́
ż
pτ,ts
ż
B
ż
A
1EzBpy ` zqμspy, dzq
ż
E
ητ,x
s pdyqζpdxqds
“ζpBq `
ż
pτ,ts
ż
EzB
ż
A
1Bpy ` zqμspy, dzqητ,ζ
s pdyqds
 ́
ż
pτ,ts
ż
B
ż
A
1EzBpy ` zqμspy, dzqητ,ζ
s pdyqds.
Differentiating with respect to t finishes the proof. □
Finally we will show that it is always possible to construct a pathwise representation of (2.1) in terms of a marked Poisson process, in such a way, that the jump times of the driving random counting measure do not depend on the process, but are given by a homogeneous Poisson process. In this way, it is possible to construct couplings between different jump processes with the same jump times, which will be very useful in the coming proofs. The following result is the jump destination version of Th-
eorem 9.2.2 of [23].
Proposition 2.5. Let Y is a random variable with distribution ζ and set
X τ,ζ
t “Y `
ż
pτ,tsˆA
z N pdt, dzq,
where N is a marked Poisson process with compensating measure given by
LN pdt, dzq “ Cλκtpdz, Xτ,ζ
t ́ qdt
and where the probability measure κtpx, dzq on A is given by
κtpx, dzq “ λtpxq
C1
λ
rtpx, dzq `
ˆ
1  ́ λtpxq
C1
λ
 ̇
δt0updzq.
Then Xτ,ζ
t is a solution of 2.1 with Xτ,ζ
Ti “ X τ,ζ
Ti ́ ` Zi and where Nt “ N ppτ, ts ˆ Aq is a homogeneous Poisson process with intensity Cλ.
Proof. Set Nt :“ N ppτ, ts ˆ Aq then the compensating measure is
Lppτ, ts ˆ Aq “
żt
τ
Cλ κs pX τ,ζ
s ́ , Aqds “ Cλpt  ́ τ q,
which shows that Nt is a homogeneous Poisson process with intensity Cλ.
Set Xτ,ζ
t as
X τ,ζ
t “Y `
ż
pτ,tsˆA
z N pdt, dzq,
Since the contribution to the integral is zero, whenever z “ 0, we can write
X τ,ζ
t “Y `
ż
pτ,tsˆA
z Qpdt, dzq,

MEAN-FIELD APPROXIMATIONS IN INSURANCE 9
where
Qpdt, dyq “
ż
pτ,T sˆE
1Azt0upzqN pdt, dzq.
The compensating measure of Q is given by
LQpdt, dyq “ 1Azt0upzqLN pdt, dzq “ 1Azt0upzqκtpXτ,ζ
t ́ , dzqCλdt
“ λtpXτ,ζ
t ́ qrtpXτ,ζ
t ́ , dzqdt “ μtpXτ,ζ
t ́ , dzqdt.
This shows that Xt,ζ constructed here indeed is a solution of (2.1). □
2.2. Distribution dependent jump process. Now we consider the distributiondependent SDE
X ̄ τ,ζ
t “Y `
ż
pτ,ts
ż
A
(2.4) z Q ̄pds, dzq,
where Y has distribution ζ P P1pEq and Q ̄ is a random counting measure with compensating measure
L ̄pdt, dzq “ μtpX ̄ τ,ζ
t ́ , η ̄τ,ζ
t , dzqdt.
Here η ̄τ,ζ
t :“ X ̄ τ,ζ
t pPq debntes the law of X ̄ τ,ζ
t at time t. The notable difference to (2.1) is that the intensity kernel μtpdz, x, ρq “ λtpx, ρqrtpx, ρ, dzq now is allowed to be measure-dependent. As one inserts η ̄τ,ζ
t , the process depends on its own distribution and therefore further regularity conditions are necessary in order to obtain existence and uniqueness.
Assumption 1. Assume that there exists some q ě 1 such that:
(1) There exists Cλ, Cr ą 0 such that:
λtpx, ρq ď Cλ and
ż
A
}z}q rtpx, ρ, dzq ď Cr
for all t P r0, T s, x P E, ρ P PqpEq. (2) There exists Cμ ą 0 such that
d0
KRpμtpx1, ρ1, dzq, μtpx2, ρ2, dzqq ď Cμp}x1  ́ x2} ` dW pρ1, ρ2qq
for all x1, x2 P E and ρ1, ρ2 P PqpEq.
Theorem 2.6. Let ζ P PqpEq and assume that Assumption 1 holds. Then there exists a unique weak solution of the distribution dependent SDE (2.4).
Proof. Theorem 2.6 is a time-inhomogenous pure jump version of Theorem 2.2 in [18], which shows existence and uniqueness for a time-homogeneous jump diffusion process. The proof of Theorem 2.6 uses similar methods and is included in Appendix B. □
As in the jump process case, the stochastic process X ̄ τ,ζ has c`adl`ag paths and can thus be viewed as a random variable taking values in the space Dprτ, T s, Eq and the distribution of X ̄ τ,ζ given by Q ̄ τ,ζ :“ X ̄ τ,ζpPq is an element of P1pDprτ, T s, Eqq.
Theorem 2.6 yields existence and uniqueness of Q ̄ τ,ζ.

10 PHILIPP C. HORNUNG
Similarly to (2.2), we can now for each x P E consider the linearised SDE
Xr τ,x
t “x`
ż
pτ,ts
ż
A
z
(2.5) Qrpdt, dzq,
where Qr is a random counting measure with compensating measure
Lrpdt, dzq “ μtpXrτ,x
t ́ , η ̄τ,ζ
t , dzqdt,
and where η ̄τ,ζ
t “ X ̄ τ,ζ
t pPq is considered known and fixed. The process Xrτ,x thus
does not depend on its own distribution, but rather on the distribution of X ̄ τ,ζ. As pη ̄τ,ζ
t qtPrτ,T s is known, we can apply Theorem 2.1 to get that (2.5) has a unique
solution for all x P E. We write Qr x
τ,ζ :“ Xrτ,xpPq and now have the following analogue to Theorem 2.2:
Theorem 2.7. The familiy p rQx
τ,ζqxPE constitutes a regular conditional distribution of Q ̄ τ,ζ given X ̄ττ,ζ “ x. Thus it holds that
Q ̄ τ,ζ pdωq “
ż
E
rQx
τ,ζ pdωqζpdxq.
Proof. See Appendix A. □
Thus we have that the conditional path-law of the distribution dependent SDE (2.4) given that the initial state is x P E is equal to Qr x
τ,ζ, which is the path-law of the linearised SDE (2.5). As a consequence, the transition probabilities of X ̄ τ,ζ are given by ηrτ,ζ
t px,  ̈q :“ Xr τ,x
t pPq. As (2.5), given pη ̄ζ,τ
t qtPrτ,T s, has no distribution
dependence, we can invoke Proposition 2.3 to conclude that, given pη ̄ζ,τ
t qtPrτ,T s,
the transition probabilities ηrτ,ζ
t px, Bq satisfy the linear forward integro-differential equations:
Proposition 2.8. Given pη ̄τ,ζ
t qtPrτ,T s the transition probabilities ητx,ζ pt, Bq satisfy the forward integro-differential equation
d
dt ηrτ,ζ
t px, Bq “
ż
EzB
ż
A
1Bpy ` zqμtpy, η ̄τ,ζ
t , dzqηrτ,ζ
t px, dyq
 ́
ż
B
ż
A
1EzBpy ` zqμtpy, η ̄τ,ζ
t , dzqηrτ,ζ
t px, dyq,
with ηrττ,ζ px,  ̈q “ δtxu and x P E.
Note that contrary to the transition probabilities ητ,x
t of Xτ,ζ, the transition proba
bilities ηrτ,ζ
t px,  ̈q of X ̄ τ,ζ now depend on the initial distribution ζ through pη ̄τ,ζ
t qtPrτ,T s,
and while the forward equations are linear, we need to know pη ̄τ,ζ
t qtPrτ,T s in order to actually calculate ηrτ,ζ
t px,  ̈q.
By Theorem 2.7 we obtain the following analogue of (2.3):
η ̄τ,ζ
t pBq “
ż
E
ηrτ,ζ
(2.6) t px, Bqζpdxq.
Using this we get that η ̄τ,ζ
t satisfies the following non-linear forward integro-differential equations:

MEAN-FIELD APPROXIMATIONS IN INSURANCE 11
Proposition 2.9. The law η ̄τ,ζ
t satsifies the forward integro-differential equation
d
dt η ̄τ,ζ
t pBq “
ż
EzB
ż
A
1Bpy ` zqμtpy, η ̄τ,ζ
t , dzqητ,ζ
t pdyq
 ́
ż
B
ż
A
1EzBpy ` zqμtpy, ητ,ζ
t , dzqητ,ζ
t pdyqds.
with η ̄ττ,ζpBq “ ζpBq for t ě τ and ζ P PqpEq.
Proof. Repeat the proof of Proposition 2.4 using (2.6) and Proposition 2.8 instead. □
Remark 2.10. Note that Proposition 2.9 makes no statement about uniqueness of the non-linear equations. Thus numerical solutions should be treated with care.
Remark 2.11. Due to (2.6), it is also possible to replace η ̄τ,ζ
t with ş
E
ηrτ,ζ
t px,  ̈qζpdxq in the forward equations of Proposition 2.8. In that case the system becomes nonlinear as well, but in that case one would be able to calculate ηrτ,ζ
t px, Bq directly.
Remark 2.12. The forward equations of Propositions 2.8 and 2.9 are the pure jump equivalent of the linearised and non-linear Fokker-Planck-Kolmogorov equations known from McKean-Vlasov diffusion processes, see [26]. Therefore we conjecture that pQ ̄ τ,ζ qpτ,ζqPr0,T sˆPqpEq constitutes a non-linear Markov process in the sense of [26].
2.3. Jump destination specification. So far we have specified the jump process in terms of jump sizes, but in many life insurance applications it is more natural to specify the jump process in terms of jump destinations. That is
X ̄ τ,ζ
t “Y `
ż
pτ,ts
ż
E
py  ́ X ̄ τ,ζ
(2.7) s ́ qQ ̄dpds, dyq,
where Q ̄d is a random counting measure with compensating measure
L ̄dpdt, dyq “ μd
t pX ̄ τ,ζ
t ́ , η ̄τ,ζ
t , dyqdt.
The intensity kernel μtdpx, ρ, dyq “ λtpx, ρ, qrtdpx, dyq is a bounded kernel on pE, BpEqq,
where rtdpx, ρ, dyq specifies the distribution of the next jump destination, given that
a jump occurs at time t and that X ̄ τ,ζ
t ́ “ x. Via a change of variables argument, it is possible to switch back and forth between the jump size specification (2.4) and the jump destination specification (2.7).
In order to see this let x P E and define gx : A Ñ Rd as gxpzq “ x ` z and hx : E Ñ Rd as hxpyq “ y  ́ x. The function hx takes a jump destination and maps it to a jump size, while gx takes a jump size and maps it to a potential jump destination. We now have the following result:
Proposition 2.13. Let x P E and let gx : A Ñ Rd be given by gxpzq “ x ` z. Then the solution of (2.4) is a solution to (2.7) with
μd
t px, ρ, Bq “ μtpx, ρ, g ́1
x pBqq @B P BpEq.
Let x P E and let hx : E Ñ A be given by hxpyq “ y  ́ x. Then the solution of (2.7) is a solution to (2.4) with
μtpx, ρ, Bq “ μd
t px, ρ, h ́1
x pBqq @B P BpAq.

12 PHILIPP C. HORNUNG
Proof. Let Nt “ Q ̄prτ, ts ˆ Aq. Then
X ̄ τ,ζ
t“
ż
pτ,tsˆA
z Q ̄pds, dzq “ Y `
Nt
ÿ
i
pX ̄ τ,ζ
Ti ́ ` Ziq  ́ X ̄ τ,ζ
Ti  ́
“Y `
Nt
ÿ
i“1
pgX ̄ τ,ζ
Ti ́ pZiq  ́ X ̄Ti ́q “ Y `
ż
pτ,T sˆE
py  ́ X ̄ τ,ζ
t ́ qQdpdt, dyq,
where Qd has the same jump times as Q and marks Yi :“ gX ̄τ,ζ
Ti ́ pZiq. Thus we have
that
μd
t px, ρ1, Bq “ μtpx, ρ1, g ́1
x pBqq, @B P BpEq.
Similary let Ntd “ Q ̄dprτ, ts ˆ Eq. Then
X ̄ τ,ζ
t “Y `
ż
pτ,T sˆE
py  ́ X ̄ τ,ζ
t ́ qQ ̄dpdt, dyq “ Y `
Nd
t ÿ
i“1
hX ̄ τ,ζ
Ti ́ pYiq
“Y `
ż
pτ,T sˆA
z Q ̄pdt, dzq,
where Q ̄ has the same jump times as Q ̄d and jump marks Zi :“ hX ̄d
Ti ́ pYiq. Thus
we have that
μtpx, ρ, Bq “ μd
t px, ρ, h ́1
x pBqq @B P BpAq.
□
This shows that if (2.4) exists and is unique, then the corresponding jump destination specification as given by Proposition 2.13 exists and is unique and vice versa. In particular we can prove that Assumption 1 ensuring existence and uniqueness of (2.4) is equivalent to:
Assumption 2. There exists a q ě 1 such that
(1) There exists Cλ, Cr ą 0 such that:
λtpx, ρq ď Cλ and
ż
E
}y  ́ x}q rd
t px, ρ, dyq ď Cr
For all t P r0, T s, x P E, ρ P PqpEq. (2) There exists Cμ ą 0 such that
dx2
KRpμd
t px1, ρ1, dyq, μd
t px2, ρ2, dyqq ď Cμp}x1  ́ x2} ` dW pρ1, ρ2qq
for all x1, x2 P E and ρ1, ρ2 P PqpEq.
Proposition 2.14. Let μtpx, ρ, dzq satisfy Assumption 1. Then μtdpx, ρ, dyq given by
μd
t px, ρ, Bq “ μtpx, ρ, g ́1
x pBqq @B P BpEq,
satisfies Assumption 2.
Let μtdpx, ρ, dyq satisfy Assumption 2. Then μtpx, ρ, dzq given by
μtpx, ρ, Bq “ μd
t px, ρ, h ́1
x pBqq @B P BpAq.
satisfies Assumption 1.

MEAN-FIELD APPROXIMATIONS IN INSURANCE 13
Proof. We only prove the first statement, as the second follows by a similar argument. Given that μ satisfies Assumption 1 a simple change of variable argument gives that μd satisfies Assumption 2(1).
In order to prove that Assumption 2(2) is satisfied, let f : E Ñ R be Lipp1q with f px2q “ 0. We can then write
ż
E
f pyqμd
t px, ρ, dyq “
ż
gx ́1 pE q
f pgxpzqqμtpx, ρ, dzq “
ż
A
frpgxpzqqμtpx, ρ, dzq.
The first equality is due to a change of variables. In order to achieve the second equality, we first have to extend f , since f is only defined on E and E Ď gxpAq. This can be achieved by setting frpyq :“ infxPEtf pxq`}x ́y}u. Note that fr still is a Lipp1q-function with frpyq “ f pyq for all y P E and so frpx2q “ 0. Thus the equality follows since μtpx, ρ, Azgx ́1pEqq “ 0 and frpx ` zq “ f px ` zq for all z P gx ́1pEq.
Now using the above equality we arrive at
ˇ ˇ ˇ ˇ
ż
E
f pyqμd
t px1, ρ1, dyq  ́
ż
E
f pyqμd
t px2, ρ2, dyq
ˇ ˇ ˇ ˇ
ď
ˇ ˇ ˇ ˇ
ż
A
frpgx1 pzqqμtpx1, ρ1, dzq  ́
ż
A
frpgx2 pzqqμtpx2, ρ2, dzq
ˇ ˇ ˇ ˇ
ď
ˇ ˇ ˇ ˇ
ż
A
frpgx2 pzqqμtpx1, ρ1, dzq  ́
ż
A
frpgx2 pzqqμtpx2, ρ2, dzq
ˇ ˇ ˇ ˇ
`
ˇ ˇ ˇ ˇ
ż
A
frpgx1 pzqq  ́ frpgx2 pzqqμtpx1, ρ1, dzq
ˇ ˇ ˇ ˇ
Note that for any f P Lipp1q with f px2q “ 0 we have that z ÞÑ frpgx2 pzqq is a Lipp1q-function which is zero for z “ 0. Thus the first term can be bounded by d0
KRpμtpx1, ρ1, dzq, μtpx2, ρ2, dzqq. Furthermore since px, zq ÞÑ frpgxpzqq is a Lipp1qfunction, applying Jensen’s inequality, Assumption 1(1) and the afore mentioned Lipschitz property to the last term yields the bound Cλ}x1  ́ x2}. By Assumption 1(2) we thus arrive at
dx2
KRpμd
t px1, ρ1, dyq, μd
t px2, ρ2, dyqq ď pCλ ` Cμqp}x1  ́ x2} ` dW pρ1, ρ2qq.
□
3. Mean-field approximation
For any n P N, let Xn “ pXl,nql“1,...,n be a family of stochastic processes, with state space En, given by the following system of SDEs
X l,n
t “ Y l,n `
ż
pτ,tsˆA
(3.1) z Ql,npds, dzq, l “ 1, . . . , n,
where the random counting measures Ql,n have compensating measures
Ll,npdt, dzq “ μtpXl,n
t ́ , εn
t ́, dzqdt, l “ 1, . . . , n.

14 PHILIPP C. HORNUNG
The single coordinate processes Xl,n only depend on the other coordinate process through their common empirical distribution εtn given by
εn
t :“ 1
n
n
ÿ
l“1
δtX l,n
t u.
We assume that the probability for simultaneous jumps across l is zero, which makes it possible to view Xn as one SDE with values in En driven by a random counting measure defined on state space Ťn
l“1 A ˆ tlu. Thus existence and uniqueness of a solution to the system (3.1) is guaranteed by Theorem 2.1.
Let Qn
τ,ζn :“ XnpPq denote the path-law of the entire process Xn and for k ă n
let Qn,k
τ,ζn :“ pX1,n, . . . , Xk,nqpPq denote the marginal path-law of the first k coor
dinates of the process Xn. Each coordinate can be interpreted as an individual, while Xn is the joint model for a cohort of n individuals. The common dependence on the empirical measure can be interpreted as dependence on collective quantities, such as cohort averages. As all individuals in (3.1) are dependent, it is computationally infeasible to calculate any quantities of interest such as expected values of path-functionals, especially if n is large. This would require keeping track of each indi-
vidual’s state, causing the system of forward equations of Propositions 2.4 and 2.3 to explode in dimension. In particular, if the system of forward-equations has m equations for one individual, then it will have mn equations for n individuals.
Instead we suggest to use a mean-field approximation, where we replace the empirical distribution εtn ́ with the law of the process, thus yielding a non-linear jump process of the form (2.4). In order for this to be a valid approximation we have to show that pQn
τ,ζn qnPN is chaotic.
Definition 3.1. Let pS, dSq be a Polish space, Q a probability measure on S and let pQnqnPN be sequence of exchangeable probability measures, each defined on Sn, with k-marginals Qn,k :“ Qp ̈ ˆ Sn ́kq for k ă n. Then the sequence pQnqnPN is Q-chaotic if for any fixed k P N it holds that
Qn,k wÑk. Qbk as n Ñ 8.
Remark 3.2. Assuming that each Qn is the distribution of the random variables pX1,n, . . . , Xn,nq, we have that Qn is exchangeable if
pX1,n, . . . , Xn,nq “d pXσp1q,n, . . . , Xσpnq,nq
for each permutation σ : t1, . . . , nu Ñ t1, . . . , nu. Intuitively this means that the joint distribution of the individuals does not change when reordering them and in particular this implies that all individuals have the same marginal distribution. A sufficient, but not necessary condition for this to hold is that all individuals are independent and identically distributed.
Intuitively this means that any fixed number of individuals becomes independent and identically distributed with distribution Q, when the overall number of individuals tends to infinity.
Definition 3.1 goes back to [21], but as chaosticity is equivalent to weak convergence of the marginals Qn,k to the product measure Qbk, it is possible to relate the notion of chaosticity to convergence in a metric space (see [19] for chaosticity in terms of

MEAN-FIELD APPROXIMATIONS IN INSURANCE 15
different metrics). We will use the slightly stronger notion of Wasserstein(1)-chaos in the space pP1pSq, dW q, since pρnqnPN Ă P1pSq converges weakly to ρ P P1pSq if and only if limnÑ8 dW pρn, ρq “ 0 (see Theorem 6.9 in [29]).
Definition 3.3. Let pS, dSq be a Polish space, Q P P1pSq a probability measure on S and let pQnqnPN be sequence of symmetric probability measures, each defined on Sn and in P1pSnq. Then the sequence pQnqnPN is Q-Wasserstein(1)-chaotic if and only if for any k P N it holds that
nliÑm8 dW pQn,k, Qbkq “ 0, @k P N,
where Qn,k denotes the marginal distribution of the first k individuals.
Remark 3.4. Note that Wasserstein(1)-chaos is stronger than the notion of chaos in Definition 3.1, since we have restricted the set of probability measures to P1pSq. If pS, dSq is a bounded metric space, then the Wasserstein(1) distance metrizes weak convergence in PpSq (the set of all probability measures on S), see Corollary 6.13 in [29], in which case Definition 3.3 can be extended to hold for all of PpSq.
In our case the Polish space pS, dSq is pDprτ, T s, Eq, dJ1 q, the sequence of probability measures for which we want to prove chaosticity are the path-laws pQn
τ,ζn qnPN and
the measure for which we would like the sequence to be chaotic for is Q ̄ τ,ζ. Note that each Qn
τ,ζn should be exchangeable in the sense of Remark 3.2, which is the case,
if the initial distribution ζn is exchangeable, the intensity kernels of the random counting measures Ql,n are the same for all 1 ď l ď n and the coordinates depend on each other in a symmetric way through εtn ́ only. Therefore we make the following assumption:
Assumption 3. There exists a q ą 1 such that:
(1) For all n P N it holds that ζn P PqpEq. (2) There exists ζ P PqpEq such that
nliÑm8 dW pζn,k, ζq “ 0 @k P N.
(3) The intensity kernel μtpx, ρ, dzq “ λtpx, ρqrtpx, ρ, dzq does not depend on 1 ď l ď n.
Note that we now require q ą 1, contrary to Assumption 1 which only requires q ě 1. We now have the following result:
Theorem 3.5. Let pQn
τ,ζn qnPN be the path-law of (3.1) and  ̄Qτ,ζ be the path-law of (2.4). Assume that Assumptions 1 and 3 are satisfied. Then for any fixed k P N, it holds that
nliÑm8 dJ1
W pQn,k
τ,ζn ,  ̄Qbk
τ,ζ q “ 0
Remark 3.6. Consider the jump destination specification of (3.1)
X l,n
t “ Y l,n `
ż
pτ,tsˆE
py  ́ Xl,n
s ́ q Ql,n
d pds, dyq, l “ 1, . . . , n,
where the random counting measures Ql,n
d have compensating measures
Ll,n
d pdt, dyq “ μd
t pXl,n
t ́ , εn
t ́, dyqdt, l “ 1, . . . , n.

16 PHILIPP C. HORNUNG
By Propositions 2.13 and 2.14 we know that this jump destination specification satisfying Assumption 2 leads to an equivalent jump size representation (3.1) satisfying Assumption 1 and therefore Theorem 3.5 is still valid for the jump destination specification.
3.1. Proof of Theorem 3.5. Before we begin, we will state one lemma, on which the proof heavily relies on.
Lemma 3.7. Let η P PpRdq. Assume that mq :“ ş
Rd }x}qηpdsq ă 8 for q ą 1 and
let pXlqlPN be an iid sequence with Xl „ η. Then there exists a constant Cpd, qq ą 0 such that for all n P N:
dW pεn, ηq ď Cpd, qqm
1
qq βpnq,
where
βpnq “
$
’ ’ &
’ ’ %
n ́ 1
2 ` n ́ q ́1
q if d “ 1 and q ‰ 2
logp1`nq n1
2
` n ́ q ́1
q if d “ 2 and q ‰ 2
n ́ 1
d ` n ́ q ́1
q if d ą 2 and q ‰ d
d ́1
Proof. This is corresponds to Theorem 1 in [13] with p “ 1. □
The idea of the proof is to construct a coupling between Qn,k
τ,ζn and  ̄Qbk
τ,ζ , since
dJ1
W pQn,k
τ,ζn , Q ̄ bk
τ,ζ q ď dU
W pQn,k
τ,ζn ,  ̄Qbk
τ,ζ q ď
k
ÿ
l“1
E
„
sup
τ ďtďT
}X l,n
t  ́ X ̄ l
t}
ȷ
.
Thus it suffices to show
nliÑm8
k
ÿ
l“1
E
„
sup
τ ďtďT
}X l,n
t  ́ X ̄ l
t}
ȷ
“0
for our choice of coupling. In particular, based on an approach of [18], we will use the Poisson representation of Proposition 2.5 to create a coupling of the system (3.1) and of (2.4) with the same jump times.
For this let pN lqlPN be independent homogeneous Poisson processes with intensity
Cλ and from this we construct the marked Poisson processes N l,n and N ̄ l given by
N l,npBq :“
ÿ
iPN
1BpT l
i , Zl,n
i q and N ̄ lpBq :“
ÿ
iPN
1BpT l
i , Z ̄l
i q, l “ 1, . . . , n,
for B P Bprτ, T sq b BpEq, where the marks pZl,n
i qiPN and pZ ̄l
i qiPN are determined using the kernel
κtpx, ρ, dyq “ λtpx, ρq
C1
λ
rtpx, ρ, dyq `
ˆ
1  ́ λtpx, ρq
C1
λ
 ̇
δt0updyq.
That is, given T l
i “ t, Xl,n
t ́ and X ̄tl ́ we determine Zl,n
i and Z ̄l
i according to the
optimal coupling between κtpXl,n
t ́ , εtn ́, dzq and κtpX ̄tl ́, η ̄t, dzq. This means we have that
E
“}Z l,n
i  ́ Z ̄l
i}
ˇ
ˇT l
i “ t, Xl,n
t ́ , X ̄ l
t ́
‰ “ dW pκtpXl,n
t ́ , εn
t ́, dzq, κtpX ̄ l
t ́, η ̄t, dzqq.

MEAN-FIELD APPROXIMATIONS IN INSURANCE 17
The marked Poisson processes N l,n then have compensating measure
Ll,n
N pdt, dzq “ CλκtpXl,n
t ́ , εn
t ́, dzqdt,
where εtn ́ “ řn
l“1 δtXl,n
t ́ u, while the N ̄ l have compensating measures
LlN ̄ pdt, dzq “ CλκtpX ̄ l
t ́, η ̄t, dzqdt.
Let pY l,nql“1,...,n be from distribution ζn and let pY ̄ lqlPN be iid. from distribution ζ chosen jointly from the optimal coupling between ζn and ζbn. Proposition 2.5 then yields that the system (3.1) can be represented as
X l,n
t “ Y l,n `
ż
pτ,tsˆA
z N l,npds, dzq, l “ 1, . . . , n,
and that Xl,n
Tl
i
“ Xl,n
Tl
i  ́ ` Zl,n
i and similarly Proposition 2.5 yields that the system
X ̄ l
t “ Y ̄ l `
ż
pτ,tsˆA
z N ̄ lpds, dzq, l P N
are iid. copies of (2.4), with X ̄ l
Tl
i
“ X ̄ l
Tl
i  ́ ` Z ̄l
i.
As Xl,n and X ̄ l are identically distributed across l we have that
dU
W pQk,n
τ,ζn , Qbk
τ,ζ q ď
k
ÿ
l“1
E
„
sup
τ ďtďT
}X l,n
t  ́ X ̄ l
t}
ȷ
“ kE
„
sup
τ ďtďT
}X 1,n
t  ́ X ̄ 1
t}
ȷ
.
Since N 1,n and N ̄ 1 have the same jump times as N 1 we can write
E
„
sup
τ ďtďT
}X 1,n
t  ́ X ̄ 1
t}
ȷ
ďdW pζn,1, ζq ` E
„ N1
T ÿ
i“1
}Z 1,n
i  ́ Z ̄1
i}
ȷ
.
Due to Assumption 1(2) and from the definition of κ we get
dKRpκn
t px1, ρ1, dzq, κtpx2, ρ2, dzqq ď CLp}x1  ́ x2} ` dW pρ1, ρ2qq
for x1, x2 P E and ρ1, ρ2 P P1pEq, where CL “ Cμ
Cλ . Using this and the existence of an optimal coupling we get
Er}Z 1,n
i  ́ Z ̄1
i }||N 1
T s “ ErEr}Z1,n
i  ́ Z ̄1
i }|N 1
T,T1
i , X ̄ 1,n
T1
i  ́, X ̄ 1
T1
i  ́s|NT s
“ ErdKRpκT 1
i pX 1,n
T1
i  ́, εn
T1
i  ́, dzq, κT 1
i pX ̄ 1
T1
i  ́, η ̄T 1
i , dzqq|N 1
Ts
ď ErCL}X1,n
T1
i  ́  ́ X ̄ 1
T1
i  ́} ` CLdW pεn
T1
i  ́, η ̄T 1
i q|N 1
T s.
The second equality follows, since pZ1,n
i , Z ̄1
i q are independent of N 1
T , given pT 1
i , X1,n
T1
i  ́, X ̄ 1
T1
i  ́q.
Thus we arrive at
E
„ N1
T ÿ
i“1
}Z 1,n
i  ́ Z ̄l
i}
ȷ
ď Cμ
żT
τ
E
„
sup
τ ďsďt
}X 1,n
s  ́ X ̄ 1
s}
ȷ
` ErdW pεn
t ́, η ̄tqsdt.
Furthermore by the triangle inequality we have
dW pεn
t ́, ηtq ď dW pεn
t ́, ε ̄n
t ́q ` dW pε ̄n
t ́, ηt ́q,

18 PHILIPP C. HORNUNG
where ε ̄tn :“ 1
n
řn
l“1 δtX ̄ l
t u. Lemma B.1 allows us to apply Lemma 3.7 to the second distance in order to obtain:
ErdW pεn
t ́, ηt ́qs ď E
„1
n
n
ÿ
l“1
}X l,n
t ́  ́ X ̄ l
t ́}
ȷ
` Cβpnq
ďE
„
sup
τ ďsďt
}X 1,n
s  ́ X ̄ 1
s}
ȷ
` Cβpnq,
where the sum disappears due the fact that the individuals are identically distributed. Inserting this back in the main expression we get
E
„
sup
τ ďtďT
}X l,n
t  ́ X ̄ l
t}
ȷ
ď dW pζn,1, ζq
`
żT
τ
2CμE
„
sup
τ ďsďt
}X l,n
s  ́ X ̄ l
s}
ȷ
` CμCβpnqdt.
Applying Gr ̈onwalls inequality yields
E
„
sup
τ ďtďT
}X l,n
t  ́ X ̄ l
t}
ȷ
ď e2CμpT  ́τqpdW pζn,1, ζq ` CμCβpnqpT  ́ τ qq.
As limnÑ8 dW pζn,1, ζq “ 0 taking the limit n Ñ 8 yields the desired result.
4. Mean-field approximation of the conditional distribution
For insurance applications it is of particular interest, whether a similar convergence result can be obtained for the conditional path-laws of Qn
τ,ζn , given the initial value.
Recall that by Theorem 2.2, Qn
τ,ζ can be written as
Qn
τ,ζn pdωq “
ż
En
Qn
τ,xn pdωqζnpdxnq,
where each of the Qτn,xn is the path-law of the system
X l,n
t “ xl `
ż
pτ,tsˆA
z Ql,npds, dzq, l “ 1, . . . , n
with compensating measure
Ll,npdt, dzq “ μtpXl,n
t ́ , εn
t ́, dzqdt.
Thus pQτn,xn qxnPEn is a regular version of the joint path-law of the n individuals
given that their initial values Y n are equal to xn P En.
Recall also that by Theorem 2.7, Q ̄ τ,ζ can be written as
 ̄Qτ,ζ pdωq “
ż
E
Qr x
τ,ζ pdωqζpdxq,
where pQr x
τ,ζ qxPE are path-laws of (2.5). Thus pQr x
τ,ζ qxPE is a regular conditional
distribution of Q ̄ τ,ζ given that the initial value is x. The question in which we are
now interested in, is whether Qτn,xn can be approximated by Ân
l“1 Qr xn
l
τ,ζ .

MEAN-FIELD APPROXIMATIONS IN INSURANCE 19
Let εxn :“ 1
n
řn
l“1 δtxn
l u. According to Theorem 4.2 of [16] it holds that if εxnn Ñ ζ
in P1pEq, then the sequence of symmetrisations pQp τ,xn qnPN is Q ̄ τ,ζ -chaotic. The symmetrisation Qp τ,xn is defined as
Qp τ,xn pBq :“ 1
n!
ÿ
σPΠn
Qp τ,xn pσpBqq, B P BpDprτ, T s, Eqnq,
where Πn is the set of all permutations σ of the set t1, . . . , nu and σpBq :“ tσpxq|x P Bu. Thus it is not possible to relate Qτn,xn to rQx
τ,ζ directly and, due to the sym
metrisation, Q ̄ τ,ζ can be interpreted as the distribution of a typical individual and not of a specific individual. From Theorem 3.5 it is therefore not clear, whether Qτn,xn can actually be approximated by Ân
l“1 Qr xn
l
τ,ζ .
Nevertheless this can be shown by using a natural extension of the arguments behind Theorem 3.5. As before, we assume that pζnqnPN is ζ-chaotic. Then we fix m P N and xm “ pxm
l ql“1,...,m P Em and assume:
Assumption 4. There exists a q ą 1 such that:
(1) There exists a regular conditional probability distribution pζnpxmqqxmPEm Ă PqpEn ́mq of
PppY m`1,n, . . . , Y n,nq P  ̈|pY 1,n, . . . , Y m,nq “ xmq.
(2) It holds that pζnpxmqqnPN is ζ-chaotic in the Wasserstein sense for any xm P Em.
Remark 4.1. Note that in the case of E being countable, pζnpxmqqnPN being ζchaotic is implied by the fact that the unconditional pζnqnPN is ζ-chaotic. This is therefore only a more restrictive assumption in the case that E is not countable.
It now follows that ρnpxmq given by ρnpxmq :“ δtxmu b ζnpxmq is a regular conditional probability of
PppY 1,n, . . . , Y n,nq P  ̈|pY 1,n, . . . , Y m,nq “ xmq.
Using ρnpxmq as initial distribution, we can define the system of SDEs given by
X l,n
t “ xm
l`
ż
pτ,tsˆA
z Ql,npds, dzq, l “ 1, . . . , m
X l,n
t “ Y l,n `
ż
pτ,tsˆA
z Ql,npds, dzq, l “ m ` 1, . . . , n.
(4.1)
where the random counting measures Ql,n have compensating measures
Ll,npdt, dzq “ μtpXl,n
t ́ , εn
t ́, dzqdt, l “ 1, . . . , n.
The difference to (3.1) is now that the first m individuals have known and deterministic starting values xm P Em, while the rest have random starting values pY l,nql“m`1,...,n from distribution ζnpxmq.
The path-law of (4.1) denoted by Qn
τ,ρnpxmq now has the following relationship to the path-law Qn
τ,ζ of (3.1):

20 PHILIPP C. HORNUNG
Proposition 4.2. The family pQn
τ,ρnpxmqqxmPEm constitutes a regular conditional
distribution of Qn
τ,ζ given pY 1,n, . . . , Y m,nq “ xm. Thus it holds that
Qn
τ,ζ pdωq “
ż
Em
Qn
τ ,ρn pxm q pdωqζ n,m pdxm q.
Proof. By Theorem 2.2, we have that
Qn
τ,ρnpxmqpdωq “
ż
En
Qn
τ,xn pdωqρnpxmqpdxnq.
As ρnpxmq is a regular conditional probability of
PppY 1,n, . . . , Y n,nq P  ̈|pY 1,n, . . . , Y m,nq “ xmq.
it holds that
ζnpdxnq “
ż
Em
ρn pxm qζ n,m pdxm q,
where ζn,m is the marginal distribution of pY 1,n, . . . , Y m,nq. Combining these two equations, we get
ż
Em
Qn
τ,ρnpxmqpdωqζn,mpdxmq “
ż
Em
ż
En
Qn
τ,xn pdωqρnpxmqpdxnqζn,mpdxmq
“
ż
En
Qn
τ,xn pdωq
ż
Em
ρn pxm qpdxn qζ n,m pdxm q
“
ż
En
Qn
τ,xn pdωqζnpdxnq “ Qn
τ,ζn pdωq.
□
We can now show, that the joint path-law of the first m individuals in the system (4.1), denoted by Qn,m
τ,ρnpxmq converges to Âm
l“1 Qr xm
l
τ,ζ . This means that the m indivuals with known initial values embedded into a large cohort of individuals with random starting values, which have a chaotic distribution, become asymptotically
independent, with rQxm
l
τ,ζ as their marginal limiting path-law, even though they also depend on the individuals m ă l ď n. Furthermore we have for any fixed k P N that the joint path-law of the individuals l “ m ` 1, . . . , m ` k of (4.1), denoted
by Qn,m:k
τ,ρnpxkq converges to Q ̄ bk
τ,ζ, even though they also depend on the individuals 1 ď l ď m. The intuition is, that changing the initial distribution of a finite number of individuals has no effect on the empirical distribution of the collective, when the total number of individuals tends to infinity.
Theorem 4.3. Assume that Assumption 1, 3 and 4 are satisfied for some q ą 1. Then for any fixed m P N it holds that
nliÑm8 dJ1
W
ˆ
Qn,m
τ ,ρn pxm q ,
m
â
l“1
rQxm
l τ,ζ
 ̇
“ 0.
Addionally it holds for any fixed k P N, that
nliÑm8 dJ1
W
ˆ
Qn,m:k
τ,ρnpxmq, Q ̄ bk
τ,ζ
 ̇
“ 0, @ k P N.

MEAN-FIELD APPROXIMATIONS IN INSURANCE 21
Remark 4.4. By Propositions 2.13 and 2.14 we know that the jump destination specification with Assumption 2 is equivalent to (3.1) with Assumption 1. Thus Theorem 4.3 is still valid for the jump destination representation.
4.1. Proof of Theorem 4.3. The technique behind the proof is again to use a pathwise representation based on marked Poisson processes as in the proof of Theorem 3.5. Using the same independent homogeneous Poisson processes pN lqlPN,
we will now construct three families of marked Poisson processes: N l,n, N ̄ l and Nr l, where the marks are chosen the same way using the kernel κtpx, ρ, dyq and the optimal coupling. The compensating measures are given by
Ll,n
N pdt, dzq “ CλκtpXl,n
t ́ , εn
t ́, dzqdt
LlN ̄ pdt, dyq “ CλκtpX ̄ l
t ́, η ̄t, dzqdt
Ll
NĂpdt, dyq “ CλκtpXr l
t ́, η ̄t, dzqdt.
Let pY l,nql“1,...,n be from distribution ρnpxmq. Proposition 2.5 then yields that the system (4.1) can be written as
X l,n
t “ xm
l`
ż
pτ,tsˆA
z N l,npds, dzq, l “ 1, . . . , m,
X l,n
t “ Y l,n `
ż
pτ,tsˆA
z N l,npds, dzq, l “ m ` 1, . . . , n.
Thus relative to the proof of Theorem 3.5, we have only changed the initial distribution of the system. The representation of pX ̄tlqlPN is completely unchanged from the proof of Theorem 3.5. In addition, we now construct the system pXrlql“1,...,m given by
Xr l
t “ xm
l`
ż
pτ,tsˆA
z
Nr lpds, dzq, l “ 1, . . . , m.
Proposition 2.5 yields that these are m independent solutions of (2.5) with initial value xm
l and with Xrl
Tl
i
“
Xr l
Tl
i  ́ ` Zrl
i.
Note that for each l P t1, . . . , nu and n P N we have that N l,n, Nr l and N ̄ l have the same jump times, as both are constructed based on the same Poisson process N l. This way we have constructed a coupling between the measures Qn,m
τ,ρnpxmq and Âm
l“1 rQxm
l
τ,ζ and between the measures Qn,m:k
τ,ρnpxmq and Q ̄ bk
τ,ζ .
We start with the following lemma:
Lemma 4.5. It holds that
E
„
sup
τ ďtďT
}
Xr l
t  ́ X ̄ l
t}
ȷ
ď eCμpT  ́τqdW pδtxlu, ζq.
Proof. Similar to previous arguments we have that
E
„
sup
τ ďtďT
}
Xr l
t  ́ X ̄ l
t}
ȷ
ďEr}xm
l  ́ Y ̄ l}s ` E
„ Nl
T ÿ
i“1
}Z l,n
i  ́ Z ̄l
i}
ȷ
.

22 PHILIPP C. HORNUNG
Using the Lipschitz property of κ and the optimal coupling construction, an argument similar the one used in the proof of Theorem 3.5 yields
E
„ Nl
T ÿ
i“1
}
Zrl
i  ́ Z ̄l
i}
ȷ
ď Cμ
żT
τ
E
„
sup
τ ďsďt
}
Xr l
s  ́ X ̄ l
s}
ȷ
` ErdW pη ̄t, η ̄tqsdt
As dW pη ̄t, η ̄tq “ 0 and dW pδtxlu, ζq “ Er}xl  ́ Y ̄ l}s we obtain
E
„
sup
τ ďtďT
}
Xr l
t  ́ X ̄ l
t}
ȷ
ď dW pδtxlu, ζq ` Cμ
żT
τ
E
„
sup
τ ďsďt
}
Xr l
s  ́ X ̄ l
s}
ȷ
dt.
An application of Gr ̈onwalls inequality finishes the proof. □
By similar arguments as in the proof of Theorem 3.5 we have
E
„
sup
τ ďtďT
}X l,n
t  ́ Xr l
t}
ȷ
ďCμ
żT
τ
E
„
sup
τ ďsďt
}X l,n
s  ́ Xr l
s}
ȷ
dt
` Cμ
żT
τ
ErdW pεn
t ́, η ̄tqsdt.
for l “ 1, . . . , m and
E
„
sup
τ ďtďT
}X l,n
t  ́ X ̄ l
t}
ȷ
ďCμ
żT
τ
E
„
sup
τ ďsďt
}X l,n
s  ́ X ̄ l
s}
ȷ
dt
` Cμ
żT
τ
ErdW pεn
t ́, η ̄tqsdt ` dW pζn,1pxmq, ζq
for l “ m ` 1, . . . , n. We then get
E
„m ÿ
l“1
sup
τ ďtďT
}X l,n
t  ́ Xr l
t}
ȷ
ď
żT
τ
CμE
„m ÿ
l“1
sup
τ ďsďt
}X l,n
s  ́ Xr l
s}
ȷ
dt ` m
żT
τ
CμErdW pεn
t ́, ηtqsdt.
Now set
εrn
t :“ 1
n
ˆm ÿ
l“1
δ
XĂl
t`
n
ÿ
l“m`1
δX ̄ l
t
 ̇
.
Then by the triangle inequality, we have that
dW pεn
t ́, ηt ́q ď dW pεn
t ́, εrn
t ́q ` dW pεrn
t ́, ε ̄n
t ́q ` dW pε ̄n
t ́, η ̄tq,
for which we can obtain the bounds
ErdW pεn
t ́, εrn
t ́qs ď 1
nE
„m ÿ
l“1
sup
τ ďsďt
}X l,n
s  ́ Xr l
s}
ȷ
`1
nE
„n ÿ
l“m`1
sup
τ ďsďt
}X l,n
s  ́ X ̄ l
s}
ȷ
ErdW pεrn
t ́, ε ̄n
t ́qs ď 1
n
m
ÿ
l“1
E
„
sup
τ ďsďt
}
Xr l
s  ́ X ̄ l
s}
ȷ
ď1
n eCμpT  ́τ q
m
ÿ
i“l
dW pδtxlu, ζq,

MEAN-FIELD APPROXIMATIONS IN INSURANCE 23
where Lemma 4.5 implies the last inequality in the second line. By Lemma B.1 we may still apply Lemma 3.7, to obtain the bound ErdW pε ̄tn ́, η ̄tqs ď Cβpnq. Set
ting K :“ eCμpT  ́τq řm
l“1 dW pδtxlu, ζq and ∆ :“ T  ́ τ , we get
E
„m ÿ
l“1
sup
τ ďtďT
}X l,n
t  ́ Xr l
t}
ȷ
ď
żT
τ
Cμ
ˆ
1` m
n
 ̇
E
„m ÿ
l“1
sup
τ ďsďt
}X l,n
s  ́ Xr l
s}
ȷ
dt
`
żT
τ
Cμ
m
nE
„n ÿ
l“m`1
sup
τ ďsďt
}X l,n
s  ́ X ̄ l
s}
ȷ
dt
` Cμ∆ m
n pK ` Cβpnqnq.
The goal is now to apply Gr ̈onwalls inequality, but before we do that, we have to find a bound for the expectation in the second line of the above equation. By repeating the above arguments, we arrive at
E
„n ÿ
l“m`1
sup
τ ďtďT
}X l,n
t  ́ X ̄ l
t}
ȷ
ď pn  ́ mqdW pζn,1pxmq, ζq
`
żT
τ
Cμ
ˆ
1` n ́m
n
 ̇
E
„n ÿ
l“m`1
sup
τ ďsďt
}X l,n
s  ́ X ̄ l
s}
ȷ
dt
` Cμ∆pn  ́ mq
ˆ1
nE
„m ÿ
l“1
sup
τ ďtďT
}X l,n
t  ́ Xr l
t}
ȷ
`K
n ` Cβpnq
 ̇
.
Set αpnq :“ dW pζn,1pxmq, ζq. Applying Gr ̈onwalls inequality yields
E
„n ÿ
l“m`1
sup
0ďtďT
}X l,n
t  ́ X ̄ l
t}
ȷ
ď C1p∆, n, mq
 ̃
nαpnq ` Cμ∆
ˆ
E
„m ÿ
l“1
sup
τ ďtďT
}X l,n
t  ́ Xr i
t}
ȷ
` K ` Cnβpnq
 ̇
 ̧
,
where C1p∆, n, mq :“ eCμ∆p1` n ́m
n qp1  ́ m
n q. Inserting this in the inequality further above yields
E
„m ÿ
l“1
sup
τ ďtďT
}X l,n
t  ́ Xr l
t}
ȷ
ďCμ∆m
ˆ
C1p∆, n, mqαpnq ` C2p∆, n, mq
ˆK
n ` Cβpnq
 ̇ ̇
`
żT
τ
Cμ
ˆ
1` m
n C2p∆, n, mq
 ̇
E
„m ÿ
l“1
sup
τ ďsďt
}X l,n
s  ́ Xr l
s}
ȷ
dt
with C2p∆, n, mq :“ 1 ` Cμ∆C1p∆, n, mq. Now a final application of Gr ̈onwalls inequality yields
E
„m ÿ
l“1
sup
τ ďtďT
}X l,m
t  ́ Xr l
t}
ȷ
ď eCμ∆p1` m
n C2p∆,n,mqqCμ∆m
 ̃
C1p∆, m, nqαpnq ` C2p∆, n, mq
ˆK
n ` Cβpnq
 ̇
 ̧
.
As limnÑ8 dW pζn,1pxmq, ζq “ 0 taking the limit n Ñ 8 yields

24 PHILIPP C. HORNUNG
nliÑm8 dJ1
W
ˆ
Qn,m
τ ,ρn pxm q ,
m
â
l“1
Qr xm
l τ,ζ
 ̇
ď nliÑm8 E
„m ÿ
l“1
sup
τ ďtďT
}X l,n
t  ́ Xr l
t}
ȷ
“ 0.
By applying the same methods, we arrive at
E
„ m`k
ÿ
l“m`1
sup
τ ďtďT
}X l,n
t  ́ X ̄ l
t}
ȷ
ď C3p∆, n, kq
ˆ1
nE
„m ÿ
i“1
sup
τ ďtďT
}X i,n
t  ́ Xr i
t}
ȷ
`K
n ` Cβpnq ` αpnq
Cf ∆
 ̇
,
where C3p∆, n, kq :“ keCμ∆p1` k
n qCμ∆. Taking the limit on both sides, yields
nliÑm8 dJ1
W
ˆ
Qn,m:k
τ,ρnpxmq, Q ̄ bk
τ,ζ
 ̇
ď nliÑm8 E
„k ÿ
l“m`1
sup
τ ďtďT
}X l,n
t  ́ X ̄ l
t}
ȷ
“ 0.
5. Non-life insurance applications
In non-life insurance the main quantity of interest is the expected claim amount. If we have a cohort of n individuals, the claim amount of each individual is modelled by
W l,n
t“
ż
p0,tsˆA
z Ql,npds, dzq “
N l,n
t ÿ
i“1
Z l,n
i,
where Ql,n is a random counting measure. The counting process N l,n
t “ Ql,npp0, tsˆ
Aq can be interpreted as the number of claims, while the marks pZl,n
i qiPN are the claim sizes. The set A Ď r0, 8q is the set of potential claim sizes. In reality the cohort is not entirely homogeneous, which is why each individual is allowed to have F0-measurable covariates U l,n taking values in the covariate space U Ď Rd1 . Let νn P P1pU nq be the distribution of pU l,nql“1,...,n. We assume that νn is ν-chaotic for some ν P P1pUq. Thus while the individuals can be heterogenous, the heterogenuity has to be sufficiently homogeneous.
This can all jointly be modelled by the process Xl,n “ pW l,n, N l,n, U l,nq on state space E “ r0, 8q ˆ N0 ˆ U defined by
X l,n
t“
 ̈
 ̋
W l,n
t
N l,n
t
U l,n
t
 ̨
‚“
 ̈
 ̋
0 0
U l,n
 ̨
‚`
ż
p0,tsˆA
 ̈
 ̋
z 1 0
 ̨
‚Ql,npds, dzq, l “ 1, . . . , n,
where Ql,n has compensating measure
Ll,npdt, dzq “ μtpW l,n
t ́ , N l,n
t ́ , U l,n, εn
t ́, dzqdt.
Here μtpw, m, u, ρ, dzq “ λtpw, m, u, ρqrtpw, m, u, ρ, dzq where λ is the claim occurence intensity, while the probability measure r is the claim size distribution. Both are allowed to depend on the covariates, which are constant over time. The initial distribution of the process X “ pX1,n, . . . , Xn,nq is now given by ζn “
δbn
t0u b δbn
t0u b νn and it is clear that ζn is ζ-chaotic, where ζ :“ δt0u b δt0u b ν.

MEAN-FIELD APPROXIMATIONS IN INSURANCE 25
The main quantities of interest to be calculated are the expected claim amounts given by:
Definition 5.1. The cohort-wide expected claim amount is defined as
V 1,npT q :“ ErW 1,n
T s.
The individual expected claim amount is defined as
V 1,npT, uq :“ ErW 1,n
T |U 1,n “ us.
The corresponding mean-field model is given by the following distribution dependent jump process
X ̄t “
 ̈
 ̋
WUN ̄ ̄ ̄ttt
 ̨
‚“
 ̈
 ̋
0 0 U ̄
 ̨
‚`
ż
pτ,tsˆA
 ̈
 ̋
z 1 0
 ̨
‚Q ̄pds, dzq,
where Q ̄ has compensating measure
L ̄pdt, dzq “ μtpW ̄ t ́, N ̄t ́, U ̄ , η ̄t, dzqdt
and U ̄ has distribution ν. The corresponding mean-field expected claim amounts are:
Definition 5.2. The cohort-wide mean-field expected claim amount is defined as
V ̄ pT q :“ ErW ̄ T s.
The individual mean-field expected claim amount is defined as
V ̄ pT, uq :“ ErW ̄ T |U ̄ “ us.
We now have the following result:
Proposition 5.3. Let Assumptions 1 and 3 be satisfied for some q ą 1 such that
sup
nPN
Er}U 1,n}qs ă 8
for the same q. Then it holds that
nliÑm8 V 1,npT q “ V ̄ pT q
and if additionally νn satisfies Assumption 4 we have that
nliÑm8 V 1,npT, uq “ V ̄ pT, uq.
Proof. The goal is to apply Proposition C.1. The necessary chaosticity is guaranteed by Theorem 3.5 and Theorem 4.3. It remains to show that there exists an ε ą 0 such that
sup
nPN
ErpW 1,n
T q1`εs ă 8.
For this we note that by Lemma B.1 we have that
sup
nPN
Er|W 1,n
T |qs ď 2q ́1
ˆ
sup
nPN
Er}U 1,n}qs ` CrErM q
Ts
 ̇
ă 8,
since Mt is Poisson process with intensity Cλ. As q ą 1, the result follows. □

26 PHILIPP C. HORNUNG
This shows that we indeed have convergence of the cohort-wide expected claim amount for one individual in the n-individual model towards the mean-field expected claim amount, as long as the distribution of covariates is chaotic and pU 1,nqnPN is uniformly integrable. If the distribution of the covariates in addition satisfies the conditional chaosticity property required in Assumption 4, then one can also use a mean-field approximation for the individual expected claim amount.
If we strengthen the moment conditions a little, then one can obtain the following law of large numbers:
Proposition 5.4. Let Assumptions 1 and 3 be satisfied for some q ą 2 such that
sup
nPN
Er}U 1,n}qs ă 8
for the same q. Then it holds that
1 n
n
ÿ
l“1
W l,n
T
L2
Ñ V ̄ pT q.
Proof. The goal is to apply Proposition C.2. The necessary chaosticity is guaranteed by Theorem 3.5 and that there exists a ε ą 0 such that
sup
nPN
ErpW 1,n
T q2`εs ă 8
follows again from Lemma B.1. □
This shows, that as the number of individuals grows, the cohort average of the total claim size converges to the expected total claim size under the mean-field model. Thus even though the individuals are dependent and weakly heterogenous, all risk is diversified away when the portfolio is sufficiently large.
Let now σ2n :“ VarpW 1,n
T q and σ2 :“ VarpW ̄ T q. Then under some additional assumptions we have the following central limit theorem:
Proposition 5.5. Let Assumptions 1 and 3 be satisfied for some q ą 4 such that
sup
nPN
Er}U 1,n}qs ă 8
for the same q. Furthermore assume that
nliÑm8 nCovpW 1,n
T , W 2,n
T q “ 0 and nliÑm8
?npV 1,npT q  ́ V ̄ pT qq “ 0.
Then it holds that
?1n
n
ÿ
l“1
W l,n
T  ́ V ̄ pT q σ
D Ñ N p0, 1q.
Proof. The goal is to apply Proposition C.3. The necessary chaosticity is guaranteed by Theorem 3.5 and that there exists a ε ą 0 such that
sup
nPN
ErpW 1,n
T q4`εs ă 8
is again guaranteed by Lemma B.1. □

MEAN-FIELD APPROXIMATIONS IN INSURANCE 27
Apart from a stricter moment condition on the distribution of claim sizes and the covariates, the additional assumptions require the convergence of the covariance between the total claim sizes of the two individuals to zero and the convergence of the portfolio-wide claim amount to its mean-field equivalent to be sufficiently fast. Whether this indeed is the case is very difficult to verify theoretically.
In most cases we would assume that the distribution of claim sizes has a density with respect to some measure ν on A. In that case we would have
rtpw, m, u, ρ, dzq “ gz
t pw, m, u, ρqνpdzq.
The intensity kernel is then given by
μtpw, m, u, ρ, dzq “ λtpw, m, u, ρqgz
t pw, m, u, ρqνpdzq.
The following result states sufficient conditions on λ and g in order for Assumption 1 to be satisfied. For notational simplicity, we let x “ pw, m, uq.
Proposition 5.6. Assume that ν P M1pAq and that
(1) There exists Cλ ą 0 and Cr ą 0 such that
λtpx, ρq ď Cλ and
ż
A
|z|gz
t px, ρqνpdzq ď Cr.
for all x P E and ρ P P1pEq. (2) There exists Cλ,L ą 0 such that
|λtpx1, ρ1q  ́ λtpx2, ρ2q| ď Cλ,Lp}x1  ́ x2} ` dW pρ1, ρ2qq
for all x1, x2, y P E and ρ1, ρ2 P P1pEq.
(3) There exists a non-negative measurable function Cgpzq with
ş
A }z}Cgpzqνpdzq ă 8 such that
|gz
t px1, ρ1q  ́ gz
t px2, ρ2q| ď Cgpzqp}x1  ́ x2} ` dW pρ1, ρ2qq
for all x1, x2, y P E and ρ1, ρ2 P P1pEq.
Then Assumption 1 is satisfied.
Proof. The first assumption directly corresponds to Assumption 1(1).
In order to prove Assumption 1(2), we let f by any Lipp1q-function with f p0q “ 0. Then we have
ˇ ˇ ˇ ˇ
ż
A
f pzqλtpx1, ρ1qgz
t px1, ρ1qνpdzq  ́
ż
A
f pzqλtpx2, ρ2qgz
t px2, ρ2qνpdzq
ˇ ˇ ˇ ˇ
ď
ż
A
|f pzq|λtpx1, ρ1q|gz
t px1, ρ1q  ́ gz
t px2, ρ2q|νpdzq
` |λtpx1, ρ1q  ́ λtpx2, ρ2q|
ż
A
|f pzq|gz
t px2, ρ2qνpdzq
ď
ˆ
Cλ
ż
A
}z}Cgpzq νpdzq ` Cλ,LCr
 ̇
p}x1  ́ x2} ` dW pρ1, ρ2qq
Taking the supremum over f P Lipp1q with f p0q “ 0 shows that Assumption 1(2) is satisfied. □

28 PHILIPP C. HORNUNG
Note that Proposition 5.6 does not require A to be bounded. Hence it is possible to choose A “ r0, 8q and let gtzpx, ρq be a density with respect to the Lebesgue measure on r0, 8q. This density can then be measure-dependent.
In order to build a model with this feature, we need to be able have sufficient conditions for when gtzpx, ρq satisfies (3) of Proposition 5.6. For this the following result is useful:
Proposition 5.7. Let B Ď Rk and let g : r0, T s ˆ E2 Ñ B and assume that there exists Cg ą 0 and q ě 1 such that
}gpt, x1, y1q  ́ gpt, x1, y2q}B ď Cgp}x1  ́ x2} ` }y1  ́ y2}q,
for all px1, y1q, px2, y2q P E2 and such that
}gpt, x, yq} ď Cgp1 ` }y}qq
for all pt, x, yq P r0, T s ˆ E2. Define f : r0, T s ˆ E ˆ PqpEq Ñ B by
f pt, x, ρq :“
ż
E
gpt, x, yqρpdyq.
Then f satisfies
}f pt, x1, ρ1q  ́ f pt, x2, ρ2q}B ď Cgp}x1  ́ x2} ` dW pρ1, ρ2qq,
for all x1, x2 P E and ρ1, ρ2 P PqpEq.
Proof. First we note, that f is well-behaved, since we for any ρ P PqpEq have
}f pt, x, ρq}B ď
ż
E
}gpt, x, yq}Bρpdyq ď Cg
ˆ
1`
ż
E
}y}q ρpdyq
 ̇
ă 8.
Let now πpdy1, dy2q be a probability measure on E2, such that πpdy1, Eq “ ρ1pdy1q and πpE, dy2q “ ρ2pdy2q. We then have that
}f pt, x1, ρ1q  ́ f pt, x2, ρ2q}B “
› › › ›
ż
E
gpt, x1, yqρ1pdyq  ́
ż
E
gpt, x2, yqρ2pdyq
› › › ›B
“
› › › ›
ż
E2
gpt, x1, y1q  ́ gpt, x2, y2qπpdy1, dy2q
› › › ›B
ď
ż
E2
}gpt, x1, y1q  ́ gpt, x2, y2q}Bπpdy1, dy2q
ď Cg
ˆ
}x1  ́ x2} `
ż
E2
}y1  ́ y2}Bπpdy1, dy2q
 ̇
.
As this inequality holds for all π with πpdy1, Eq “ ρ1pdy1q and πpE, dy2q “ ρ2pdy2q, the inequality also holds when taking the infimum over all such probability measures π. Thus we have that
}f px1, ρ1q  ́ f px2, ρ2q}B ď Cgp}x1  ́ x2} ` dW pρ1, ρ2qq.
□
This shows that if hy : r0, T s ˆ E ˆ B Ñ r0, 8q is Lipschitz in the second and third argument, then γypt, x, ρq :“ hypt, x, f pt, x, ρqq satisfies Assumption (3) of Proposition 5.6.

MEAN-FIELD APPROXIMATIONS IN INSURANCE 29
Example 5.8 (Gamma-distributed claim-sizes). We now assume that λtpw, m, ρq “ Cλ ą 0, that is the number of claims is Poisson distributed. Furthermore we assume that A “ r0, 8q and let the claim sizes be Γpα, θpw, m, ρqq-distributed. That is
rtpw, m, ρ, dzq “ gz
t pw, m, ρqdz,
where gtzpw, m, ρq “ f pz|α, θtpρqq and where f pz|α, θq is the density of a Γpα, θq distribution. The shape parameter α is considered fixed and thus
gz
t pw, m, ρq “ xα ́1
Γpαqθpw, m, ρqα exp
ˆ
 ́x
θtpρq
 ̇
We thus allow for a measure-dependent scale parameter. In order to construct θtpρq, we define the function hK : E Ñ r0, Ks as
hpw, mq :“
#
0 when m “ 0
mint w
m , Ku when m ‰ 0,
for some K ą 0. Note that this function is Lipschitz continuous. For very large K, we can interpret hK pW l,n
t , N l,n
t q as the average claim size of individual l and thus
ˆmn
t :“ 1
n
n
ÿ
l“1
hK pW l,n
t , N l,n
tq
as the average claim size of the entire cohort. Define m ̄ : P1pEq Ñ r0, 8q as
 ̄mpρq :“
ż
E
hK pv, kqρpdv, dkq.
Then ˆmtn “  ̄mpεtnq. The function θtpρq is now defined as
θtpρq :“ max
"
θ, min
"
uptq  ̄mtpρq
α ` p1  ́ uptqqθ ̊, θs
**
,
for 0 ă θ ă θ ̊ ă θs and u : r0, T s Ñ r0, 1s. When inserting εtn we get
θtpεn
t q :“ max
"
θ, min
"
uptq ˆmtn
α ` p1  ́ uptqqθ ̊, θs
**
.
Given iid. observations pYiqi“1,...,n from a Γpα, θq-distribution, the maximum-likelihood estimate for θ when α is known is
θˆ “ 1
nα
n
ÿ
i“1
Yi.
So in that sense θtpρq can be seen as a credibility estimate between the estimated scale parameter of the portfolio and a benchmark θ ̊. The parameters θ and θs define maximum and minimum values for the scale parameter. The function u determines how much weight is placed on the cohort estimate and it would typically be increasing, placing more weight on the cohort estimate as time goes by and more information becomes available.
We now have to ensure, that the conditions in Proposition 5.6 are satisfied. Since hK is Lipschitz and bounded, Proposition 5.7 yields that m ̄ pρq is Lipschitz. Hence θtpρq is Lipschitz in ρ.

30 PHILIPP C. HORNUNG
As gtzpw, m, ρq :“ f pz|α, θtpρqq, it can be shown that
|gz
t pw1, m1, ρ1q  ́ gz
t pw1, m2, ρ2q| ď CgpzqdW pρ1, ρ2q
for all pw1, m1q, pw2, m2q P E and ρ1, ρ2 P P1pEq, where Cgpzq “ Czα ́1e ́z{θs. It can be seen that
ż
r0,8q
zCgpzqdz “ θsα`2αΓpα ` 1q ă 8.
Thus condition (3) of Proposition 5.6 is satisfied. The other conditions are easily checked to be true as well. This shows that the mean-field approximation is valid.
6. Life insurance applications
In life insurance applications the biometric risk that is insured and other quantities of interest are modelled by a jump process X on a state space E Ď Rd. Often it is most convenient to specify the model in terms of the jump destination representation and thus the cohort is modelled by
X l,n
t “ Y l,n `
ż
pτ,tsˆE
py  ́ Xl,n
s ́ qQl,npds, daq, l “ 1, . . . , n,
where the random counting measures Ql,n have compensating measures
Ll,npdt, dyq “ μtpXl,n
t ́ , εn
t ́, dyqdt, l “ 1, . . . , n,
might be the proper description. The intial distribution of the cohort is given by ζn P P1pEnq and it is assumed that pζnqnPN is ζ-chaotic for ζ P P1pEq. Within this model, each individual recieves the contractual payments given by
Bl,npdtq “ bpt, Xl,n
t qdt `
ż
E
bypt, Xl,n
t ́ qQl,npdt, dyq, l “ 1, . . . , n,
where Ql,n is the same random counting measure which also drives Xl,n. For now we only assume that the payment functions b and pbyqyPE are bounded and measurable. The function b describes the sojourn payments, while the functions pbyqyPE describe the transition payments. Let r : r0, T s Ñ R be a bounded and measurable function and define the present value of future payments as
P V l,npτ q :“
żT
τ
e ́ şt
τ rpuqduBl,npdtq.
We can now define the following two reserves:
Definition 6.1. The cohort-wide reserve is defined as
V 1,npτ q :“ ErP V 1,npτ qs.
The state-wise reserve is defined as
V 1,npτ, xq :“ ErP V 1,npτ q|Xl,n
τ “ xs.
The calculation of the reserves in this n-individual model by the forward method requires the numerical solution of the forward integro-differential equations of either Proposition 2.3 or Proposition 2.4. These systems explode in dimension for growing n and therefore we would like to use a mean-field approximation.

MEAN-FIELD APPROXIMATIONS IN INSURANCE 31
The mean-field model X ̄τ,ζ is given by (2.7). The mean-field payment process is given by
B ̄pdtq “ bpt, X ̄tqdt `
ż
E
bypt, X ̄tqQ ̄pdt, dyq,
and the present value of future payments in the mean-field model is given by
PĚV pτ q :“
żT
τ
e ́ şt
τ rpuqduB ̄pdtq.
Thus we can define the mean-field reserves as
Definition 6.2. The cohort-wide mean-field reserve is defined as
V ̄ pτ q :“ ErPĚV pτ qs.
The state-wise mean-field reserve is defined as
V ̄ pτ, xq :“ ErPĚV pτ q|X ̄τ “ xs.
In order to prove that the n-individual reserves indeed converge to the mean-field reserves, we will have to make the following assumptions for the processes X ̄ and Xr and for the random counting measures Q1,n:
Assumption 5. Let pT ̄iq and pTriq be the jump times of X ̄ and Xr. Assume that:
(1) There exists ε ą 0 such that
P
ˆ č
iPN
p}∆X ̄T ̄i } ą εq
 ̇
“P
ˆ č
iPN
p}∆XrTri } ą εq
 ̇
“ 1.
(2) It holds that supnPN E“`Q1,nppτ, T s ˆ Eq ̆p‰ ă 8 for all p ą 1.
The first assumption ensures that with probability one, the norm of the jump size of the mean-field processes will always exceed ε. The second assumption ensures that the total number of jumps for one individual does not behave too wildly when the number of individuals increases. In particular this holds if Assumption 1(1) is satisfied, see Lemma D.4. The following assumptions are made for the payment functions b and by.
Assumption 6. Let pT ̄iq and pTriq be the jump times of X ̄ and Xr. Assume that
(1) pt, xq ÞÑ bpt, xq is bounded and t ÞÑ bpt, xq has a countable number of discontinuities for all x P E.
(2) pt, x, y, zq ÞÑ bypt, x, zq is bounded and
P
ˆ č
iPN
ppT ̄i, X ̄T ̄i ́, X ̄T ̄i , ∆X ̄Ti q P Jbq
 ̇
“0
P
ˆ č
iPN
ppTri, XrTri ́, XrTri , ∆XrTi q P Jbq
 ̇
“ 0,
where Jb :“ tpt, x, y, zq : bypt, x, zq discontinuousu.
We now have the following result

32 PHILIPP C. HORNUNG
Proposition 6.3. Under Assumptions 2, 3, 5 and 6 it holds that
nliÑm8 V 1,npτ q “ V ̄ pτ q.
and if additionally Assumption 4 holds we have that
nliÑm8 V 1,npτ, xq “ V ̄ pτ, xq.
If E is discrete and ζpxq ą 0, Assumption 4 is not required.
Proof. See Appendix D. □
This shows that we indeed have convergence of the portfolio-wide n-individual reserves towards the mean-field reserve and of the state-wise n-individual reserve to the state-wise mean-field reserve. Furthermore we have the following law of large numbers:
Proposition 6.4. Under Assumptions 2, 3, 5 and 6 it holds that
1 n
n
ÿ
l“1
P V l,npτ q L2
Ñ V ̄ pτ q.
If furthermore E is discrete and ζpxq ą 0, then
1 n
řn
l“1 1tXl,n
τ “xuP V l,npτ q
1 n
řn
l“1 1tXl,n
τ “xu
P Ñ V ̄ pτ, xq.
Proof. See Appendix D. □
It can be seen that the portfolio average of the present value of future payments converges to the mean-field reserve when the number of individuals tends to infinity. Thus all risk is still diversified away for large portfolios, even though the individuals are dependent. For the portfolio-wide reserve we have L2 convergence, while for the state-wise reserves we only have convergence in probability.
Now set σ2n :“ VarpP V 1,npτ qq and σ2 :“ VarpP ̄V pτ qq. Then under some additional assumptions we have the following central limit theorem:
Proposition 6.5. Assume that Assumptions 2, 3, 5 and 6 are satisfied. Assume further, that
nliÑm8 nCovpP V 1,npτ q, P V 2,npτ qq “ 0 and nliÑm8
?npV 1,npτ q  ́ V ̄ pτ qq “ 0.
Then
?1n
n
ÿ
l“1
P V l,npτ q  ́ V ̄ pτ q σ
D Ñ N p0, 1q.
Proof. See Appendix D. □
In order for this result to hold, it is required that the convergence of the covariance between P V 1,npτ q and P V 2,npτ q to zero and the convergence of the reserves is sufficiently fast, meaning that the individuals should become uncorrelated sufficiently fast. These convergence speeds are very difficult to verify theoretically.

MEAN-FIELD APPROXIMATIONS IN INSURANCE 33
In most applications we assume that the intensity kernel μtpx, ρ, dyq has a density
γy
t pt, x, ρq with respect to some measure ν on E. In that case we would have
μtpx, ρ, dyq “ γy
t px, ρqνpdyq.
The following result states sufficient conditions for γ in order for Assumption 2 to be satisfied.
Proposition 6.6. Assume that
(1) There exists Cμ ą 0 such that
ż
E
γy
t px, ρqνpdyq ď Cμ and
ż
E
}y}γy
t px, ρqνpdyq ď Cμ.
for all x P E and ρ P P1pEq. (2) There exists a non-negative measurable function Cγpyq with
ş
E }y}Cγpyqνpdyq ă 8 such that
|γy
t px1, ρ1q  ́ γy
t px2, ρ2q| ď Cγ pyqp}x1  ́ x2} ` dW pρ1, ρ2qq
for all x1, x2, y P E and ρ1, ρ2 P P1pEq.
Then Assumption 2 is satisfied.
Proof. The proof is similar to the proof of Proposition 6.6. □
Example 6.7 (Life insurance during epidemics). We now consider insurance products for an individual exposed to epidemic risk. During an epidemic the probability of one individual getting infected depends heavily on how many individuals in the entire population already are infected and thus it is important to include these collective effects. As an example we are going to look at the SIRD model, where an individual can be either Susceptible to the disease, Infected by the disease, Recovered from th-
e disease or Dead. The state space E of the individual can thus be set to E “ t1, 2, 3, 4u (see Figure 1).
Susceptible 1 Infected 2 Recovered 3
Dead 3
Figure 1. State space E “ t1, 2, 3, 4u for the SIRD model. The arrows represent the possible transitions.
The state of the individual can be modelled as a jump process X with intensity kernel
μtpdy, x, ρq “ γy
t px, ρqνpdyq,
where ν is the counting measure on E and γy
t px, ρq are transition intiensities satisfying the conditions in Proposition 6.6. The only non-zero transition intensities are γt2p1, ρq, γt3p2, ρq and γt4px, ρq for x “ 1, 2, 3, as indicated by Figure 1, and we
assume that only the infection intensity γt2p1, ρq will be measure-dependent. The others are just assumed to be bounded, measurable functions of time.

34 PHILIPP C. HORNUNG
In the n-individual model we are interested in, the infection intensity takes the form:
γ2
t pεn
t ́q “ β1ptq 1
n
n
ÿ
l“1
1tX l,n
t ́ “2u,
where β1 is a bounded and measurable function. It can be seen that the infection intensity increases with the proportion of individuals out the entire population which are infected. The mean-field model is then specified by using
γ12pt, η ̄tq “ β1ptqη ̄tpt2uq,
where the proportion of individuals being infected is replaced by the probability of being infected.
Now we can write that γt2p1, ρq “ β1ptqf pρq where
f pρq “
ż
E
1t2upyqρpdyq “ β1ptqρpt2uq,
By Lemma E.4 and Proposition 5.7 f pρq is Lipschitz, which implies that γt2p1, ρq
satisfies condition (2) of Proposition 6.6. The boundedness of the γypx, ρq insures that condition (1) of Proposition 6.6 is satisfied and thus we can conclude that Assumption 2 is satisfied. Since every jump has a jump size of at least 1, Assumption 5 is satisfied as well. Thus as long the initial distribution of the population is chaotic we can invoke Theorem 3.5 to conclude chaosticity and as long as we have a payment stream satisfying Assumption 6, we can invoke Proposition 6.3 to conclude tha-
t the cohort-wide reserve converges to the mean-field reserve and since the state space E is discrete, we can conclude the same for the state-wise reserves.
An example is the insurance product discussed in [14] with a payment stream given by
Bl,npdtq “  ́1tXt“1uπ dt ` 1tXt“2ub dt,
where π, b ą 0 are constants. As long as the individual is susceptible they pay a premium and if they are infected they recieve a benefit until they recover or die. Clearly Assumption 6 is satisfied. Thus assuming that the initial distribution is chaotic, we can conclude that the mean-field model and mean-field reserves discussed in [14] indeed can be interpreted as approximations of the n-individual model discussed here since both the cohort-wide and state-wise reserves of the n-individual model -
converge to their mean-field counterparts.
Acknowledgements
The author has carried out this research in association with the project frame InterAct. The author would also like to thank Christian Furrer for many fruitful discussions and his helpful comments on earlier versions of the manuscript.

MEAN-FIELD APPROXIMATIONS IN INSURANCE 35
References
1. Luisa Andreis, Paolo Dai Pra, and Markus Fischer, McKean-Vlasov limit for interacting systems with simultaneous jumps, Stochastic Analysis and Applications 36 (2018), 960–995. 2. Patrick Bllingsley, Convergence of Probability Measures, Wiley, 1999.
3. J. R. Blum, H. Chernoff, M. Rosenblatt, and H. Teicher, Central Limit Theorems For Interchangeable Processes, Canadian Journal of Mathematics 10 (1958), 222–229.
4. Louis-Pierre Chaintron and Antoine Diez, Propagation of chaos: A review of models, methods and applications. I. Models and methods, Kinetic and Related Models 15 (2022), 895–1015. 5. , Propagation of chaos: A review of models, methods and applications. II. Applications, Kinetic and Related Models 15 (2022), 1017–1173. 6. Marcus C. Christiansen and Boualem Djehiche, Non-linear reserving and multiple contract modifications in life insurance, Insurance: Mathematics and Economics 93 (2020), 187–195-
. 7. , As-if-Markov reserves for reserve-dependent payments, Insurance: Mathematics and Economics 124 (2025), 103–129.
8. Boualem Djehiche and Ingemar Kaj, The rate function for some measure-valued jump processes, The Annals of Probability 23 (1995), 1414–1438.
9. Boualem Djehiche and Bj ̈orn L ̈ofdahl, Nonlinear reserving in life insurance: Aggregation and mean-field approximation, Insurance: Mathematics and Economics 69 (2016), 1–13. 10. Matthias A. Fahrenwaldt, Stefan Weber, and Kerstin Weske, Pricing of cyber insurance contracts in a network model, ASTIN Bulletin 48 (2018), 1175–1218. 11. Eugene A. Feinberg, Manasa Mandava, and Albert N. Shiryaev, On solutions of Kolmogorov’s equations for nonhomogeneous jump Markov processes, Journal of Mathematical-
 Analysis and Applications 411 (2014), 261–270.
12. Willy Feller, On the Integro-Differential Equations of Purely Discontinuous Markoff Processes, Transactions of the American Mathematical Society 48 (1940), 488–515.
13. Nicolas Fournier and Arnaud Guillin, On the rate of convergence in Wasserstein distance of the empirical measure, Probability Theory and Related Fields 162 (2015), 707–738. 14. Laura Francis and Mogens Steffensen, Individual life insurance during epidemics, Annals of Actuarial Science 18 (2024), 152–175.
15. Christian Furrer and Philipp C. Hornung, Disability insurance with collective health claims: A mean-field approach, 2025, In preparation.
16. Alexander David Gottlieb, Markov Transitions and the Propagation of Chaos, 1998, Ph.D. Thesis.
17. Carl Graham, McKean-Vlasov Ito-Skorohod equations and nonlinear diffusions with discrete jump sets, Stochastic Processes and their Applications 40 (1992), 69–82. 18. , Nonlinear diffusion with jumps, Ann. Inst. Henri Poincare ́ Probab. Stat. 29 (1992), 393–402. 19. Maxime Hauray and Ste ́phane Mischler, On Kac’s chaos and related problems, Journal of Functional Analysis 266 (2014), 6055–6157. 20. Jean Jacod and Albert N. Shiryaev, Limit Theorems for Stochastic Processes, Springer, 2003. 21. M.-
 Kac, Foundations of kinetic theory, Proceedings of the Third Berkeley Symposium on Mathematical Statistics and Probability 3 (1956), 171–197.
22. T.G. Kurtz, Equivalence of Stochastic Equations and Martingale Problems, Stochastic Analysis 2010 (D. Crisan, ed.), Springer, 2010, pp. 113–130. 23. Gu ̈nther Last and Andreas Brandt, Marked Point Processes on the Real Line, Springer, 1999. 24. H. P. McKean, A class of Markov processes associated with nonlinear parabolic equations, Proceedings of the National Academy of Sciences of the United States of America 56 (1966), 1907–1911.
25. Henry P. McKean, Propagation of chaos for a class of non-linear parabolic equations, Lecture Series in Differential Equations, Volume 2 (A. K. Aziz, ed.), Van Nostrand Reinhold Company, 1969, pp. 177–194.
26. Marco Rehmeier and Michael R ̈ockner, On Nonlinear Markov Processes in the Sense of McKean, Journal of Theoretical Probability 38 (2025).
27. Tokuzo Shiga and Hiroshi Tanaka, Central Limit Theorem for a System of Markovian Particles with Mean Field Interactions, Zeitschrift fu ̈r Wahrscheinlichkeitstheorie und verwandte Gebiete 69 (1985), 439–459.

36 PHILIPP C. HORNUNG
28. Dario Trevisan, Well-posedness of multidimensional diffusion processes with weakly differentiable coefficients, Electronic Journal of Probability 21 (2016), 1–41. 29. Ce ́dric Villani, Optimal Transport, Old and New, Springer, 2009.

MEAN-FIELD APPROXIMATIONS IN INSURANCE 37
Appendix A. Proof of Theorems 2.2 and 2.7
Before starting with the proofs, we will introduce some notation.
Let πt : Dprτ, T s, Eq Ñ E be the projection πtpωq “ ωt. In the following we will work on the canoncial space pDprτ, T s, Eq, BpDprτ, T s, Eqq, Fq, where BpDprτ, T s, Eqq is the Borel σ-algebra associated with dJ1 and the filtration F “ pFtqtPrτ,T s is the one generated by the projections πt. Let X ̋ denote the canoncical process.
A.1. Proof of Theorem 2.2. Associated to equation (2.1) is the so-called ζmartingale problem:
Definition A.1. Let ζ P P1pEq. The measure Q P PpDprτ, T s, Eqq solves the ζ-martingale problem starting at ζ if πτ pQq “ ζ and for any f P C1pEq
Mf
t “ f pX ̋
t q  ́ f pX ̋
0q  ́
żt
τ
ż
A
pf pX ̋
s ́ ` zq  ́ f pX ̋
s ́ qqμs pX  ̋
s ́, dzqds
is a local martingale wrt. Q and Ft “ σpπs|τ ď s ď tq.
Similary equation (2.5) has associated the so-called x-martingale problem to it:
Definition A.2. Let x P E. The measure Q P PpDprτ, T s, Eqq solves the xmartingale problem starting at x if Qτ “ δtxu and for any f P C1pEq
Mf
t “ f pX ̋
t q  ́ f pX ̋
0q  ́
żt
τ
ż
A
pf pX ̋
s ́ ` zq  ́ f pX ̋
s ́ qqμs pX  ̋
s ́, dzqds
is a local martingale wrt. Q and Ft “ σpπs|τ ď s ď tq.
The martingale problems and the SDEs are connected as follows:
Lemma A.3. There exists a unique weak solution to (2.1) if and only if there exists a unique solution to the ζ-martingale problem. There exists a unique weak solution to (2.2) if and only if there exists a unique solution to the x-martingale problem.
Proof. See [22] Theorem 2.3 and Corollary 2.5 □
The next result relates the solutions of the two martingale problems with each other.
Lemma A.4. The following holds:
(1) Let Q be a solution to the ζ-martingale problem and let pQxqxPE be a regular conditional probability for Q given Y . Then for ζ-a.a. x P E, Qx is a solution of the x-martingale problem. (2) If pQxqxPE are solutions for the x-martingale problem for ζ-a.a. x P E, then the measure
Qpdωq :“
ż
E
Qx pdωqζ ppdqxq
is a solution for the ζ-martingale problem.

38 PHILIPP C. HORNUNG
Proof. Let M f
t be a Q-martingale and let s ą t ě 0. Then due to disintegration and the martingale property we have for all B P Ft
ż
E
ż
Ω
1BpωqM f
s pωqQxpdωqζpdxq “
ż
Ω
1BpωqM f
s pωqQpdωq
“
ż
Ω
1BpωqM f
t pωqQpdωq “
ż
E
ż
Ω
1BpωqM f
t pωqQxpdωqζpdxq.
Due to the martingale property, we have equality between the two rows above, yielding the first claim.
On the other hand, if M f
t is a Qx-martingale for ζ-a.a. x P E, we have due to the definition of Q
ż
Ω
1BpωqM f
s pωqQpdωq “
ż
E
ż
Ω
1BpωqM f
s pωqQxpdωqζpdxq “
“
ż
E
ż
Ω
1BpωqM f
t pωqQxpdωqζpdxq “
ż
Ω
1BpωqM f
t pωqQpdωq.
□
Under the assumptions of Theorem 2.1 both (2.1) and (2.2) have unique weak solutions. Thus by Lemma A.3, the ζ-martingale problem has a unique solution and the x-martingale problem has a unique solution for all x. By Lemma A.4 it follows that
Qτ,ζ pdωq “
ż
E
Qτ ,x pdωqζ pdxq
and thus pQτ,xqxPE constitutes a regular conditional probability of Qτ,ζ.
A.2. Proof of Theorem 2.7. Associated to the distribution dependent SDE (2.4) we have the non-linear ζ-martingale problem
Definition A.5. Let ζ P P1pEq. The measure  ̄Q P PpDprτ, T s, Eqq solves the non-linear ζ-martingale problem starting at ζ if πτ pQ ̄ q “ ζ and for any f P C1pEq
Mf
t “ f pX ̋
t q  ́ f pX ̋
0q  ́
żt
τ
ż
A
pf pX ̋
s ́ ` zq  ́ f pX ̋
s ́ qqμs pX  ̋
s ́, πtp  ̄Qqdzqds
is a local martingale wrt. Q ̄ and Ft “ σpπs|τ ď s ď tq.
Associated to the linearised SDE (2.5) and the non-linear ζ-martingale problem, we have the linearised x-martingale problem:
Definition A.6. Let x P E. Given Q ̄ , the measure Q P PpDprτ, T s, Eqq solves the linearised ζ-martingale problem starting at x if Q ̄ τ “ ζ and for any f P C1pEq
Mf
t “ f pX ̋
t q  ́ f pX ̋
0q  ́
żt
τ
ż
A
pf pX ̋
s ́ ` zq  ́ f pX ̋
s ́ qqμs pX  ̋
s ́, πtpQ ̄ qdzqds
is a local martingale wrt. Q and Ft “ σpπs|τ ď s ď tq.
Lemma A.3 still applies for the link between the linearised x-martingale problem and the linearised SDE (2.5), as the measure Q ̄ is given and fixed. For the link between the non-linear ζ-martingale problem and the distribution dependent SDE (2.4) we need a different result:

MEAN-FIELD APPROXIMATIONS IN INSURANCE 39
Lemma A.7. It holds that
(1) Existence of a weak solution to (2.4) implies existence of a solution to the non-linear ζ-martingale problem. (2) Under the Assumption 1 the solution of the non-linear ζ-martingale problem is unique.
Proof. The first statement is a direct consequence of Ito’s formula. The second statement follows by a similar argument as in the proof of Theorem 2.1 of [17]. □
Assuming that Assumption 1 is satisfied, Theorem 2.6 yields existence and uniqueness of (2.4), while Theorem 2.1 yields existence and uniqueness of (2.5). Thus by Lemma A.7, the non-linear ζ-martingale problem has a unique solution and the linearised x-martingale problem has a unique solution for all x. By Lemma A.4 it follows that
Q ̄ τ,ζ pdωq “
ż
E
Qr x
τ,ζ pdωqζpdxq
and thus p rQx
τ,ζ qxPE constitutes a regular conditional probability of Q ̄ τ,ζ .
Appendix B. Proof of Theorem 2.6
We start by proving the following lemma, which proves non-explosiveness.
Lemma B.1. Assume that Assumption 1(1) holds for some q ě 1 and that ζ P PqpEq. Then it holds that
E
„
sup
tPrτ,T s
}X ̄t}q
ȷ
ď 2q ́1pEr}Y }qs ` CrErM q
T sq ă 8,
where M is a Poisson process with constant intensity Cλ and it holds that  ̄Qτ,ζ P PqpDprτ, T s, Eqq and η ̄τ,ζ
t P PqpEq for all t P rτ, T s.
Proof. By the triangle inequality and Lemma E.3 we have that
}X ̄t}q ď 2q ́1}Y }q ` 2q ́1N ̄ q ́1
t
N ̄t
ÿ
i“1
}Z ̄i }q .
As the right-hand side is increasing in t and by the tower property we get
E
„
sup
tPrτ,T s
}X ̄t}q
ȷ
ď 2q ́1Er}Y }qs ` 2q ́1E
„
pN ̄T qq ́1
N ̄T
ÿ
i“1
Er}Z ̄i}q|N ̄T s
ȷ
.
The first term is finite by assumption. For the second term, using the tower property again and utilising that Z ̄i is independent of N ̄T , given pTi, X ̄Ti ́q we obtain due to Assumption 1(1) that
Er}Z ̄i}q|N ̄T s “ ErEr}Z ̄i}q|Ti, X ̄Ti ́s|N ̄T s
“E
„ż
A
}z}q rTi pX ̄Ti ́, η ̄τ,ζ
Ti , dzq
ˇ ˇ ˇ ˇ
N ̄T
ȷ
ď Cr

40 PHILIPP C. HORNUNG
Thus we obtain
E
„
sup
tPrτ,T s
}X ̄t}q
ȷ
ď 2q ́1pEr}Y }qs ` CrErN ̄ q
T sq.
Finally we have that N ̄T is dominated by a homogeneous Poisson process M with intensity Cλ in the sense of first order stochastic dominance and thus we have that
E
„
sup
tPrτ,T s
}X ̄t}q
ȷ
ď 2q ́1pEr}Y }qs ` CrErM q
T sq ă 8,
since a Poisson random variable has moments of all orders. The other assertions follow. □
This result shows that if the initial distribution has moments of order q ě 1 and the jump size distributions have moments of order q, then the jump process will have moments of order q. In particular this ensures, that pη ̄τ,ζ
t qtPrτ,T s Ă P1pEq. We continue by proving uniqueness.
Lemma B.2. Assume that Assumption 1 is satified. If there exists a weak solution of the DDSDE (2.4), then it is unique.
Proof. Let  ̄Q1 and Q ̄ 2 be two weak solutions of (2.4) and let Nt be a Poisson process with constant intensity Cλ and jump times pTiqiPN. Based on this Poisson process, we can construct the two Poisson random measures N 1 and N 2 given by
N jpBq :“
ÿ
iPN
1BpTi, Zj
i q, B P Bprτ, 8qq b BpAq, j “ 1, 2
where, given Ti “ t and X ̄ j
t ́ “ x, the Zj
i are chosen according to the distribution
κtpx, η ̄j
t , dzq “ λtpx, η ̄j
tq
Cλ
rtpx, η ̄j
t , dzq `
ˆ
1  ́ λtpx, η ̄j
tq
Cλ
 ̇
δt0updzq.
Moreover, we can let the joint distribution of Z1
i and Z2
i given pTi, X ̄ 1
Ti ́, X ̄ 2
Ti ́q “
pt, x1, x2q be given by the optimal coupling of κtpx1, η ̄t1, dzq and κtpx2, η ̄t2, dzq. Thus it holds that
dW pκTi pZ1
i ́1, η ̄1
t , dyq, κTi pZ2
i ́1, η ̄2
t , dyqq “ Er}Z1
i  ́ Z2
i }|Ti, Z1
i ́1, Z2
i ́1s
We can now write
X ̄ j
t “Y `
ż
pτ,ts
ż
A
z N jpds, dzq,
with
L ̄jpdt, dzq “ CλκtpX ̄ j
t ́, η ̄j
t , dzqdt.
As Q ̄ j are assumed to exist, we can take them as given and by Theorem 2.1 X ̄ jpPq exist and are unique. Furthermore due to Proposition 2.5 and since Qj is a solution of (2.4), we have that X ̄ jpPq “ Qj. Since the jump times of X ̄ 1 and X ̄ 2 are the same (given by pTiqiPN) we can write
sup
τ ďtďT
}X ̄ 1
t  ́ X ̄ 2
t}ď
NT
ÿ
i“1
}Z 1
i  ́ Z2
i}

MEAN-FIELD APPROXIMATIONS IN INSURANCE 41
Taking the expectation and conditioning on NT yields
E
„
sup
τ ďtďT
}X ̄ 1
t  ́ X ̄ 2
t}
ȷ
ďE
„ NT ÿ
i“1
}Z 1
i  ́ Z2
i}
ȷ
“E
„ NT ÿ
i“1
Er}Z 1
i  ́ Z2
i }|NT s
ȷ
.
Due to Assumption 1(2) and from the definition of κ we get
d0
KRpκtpx1, ρ1, dyq, κtpx2, ρ2, dyqq ď CLp}x1  ́ x2} ` dW pρ1, ρ2qq
for x1, x2 P E and ρ1, ρ2 P PqpEq, where CL “ Cμ
Cλ . Using this and the existence of an optimal coupling we get
E
“}Z 1
i  ́ Z2
i}
ˇ
ˇNT
‰ “ ErE“}Z1
i  ́ Z2
i}
ˇ
ˇNT , Ti, X ̄ 1
Ti ́, X ̄ 2
Ti ́s
ˇ
ˇNT
‰
“ E“d0
KRpκTi pX ̄ 1
Ti ́, η ̄1
Ti , dyq, κTi pX ̄ 2
Ti ́, η ̄2
Ti , dyqq
ˇ
ˇNT
‰
ď E“CL}X ̄ 1
Ti ́  ́ X ̄ 2
Ti ́} ` CLdW pη ̄1
Ti , η ̄2
Ti q
ˇ
ˇNT
‰.
The second equality follows, since pZ1
i , Z2
i q are independent of NT , given
pTi, X ̄ 1
Ti ́, X ̄ 2
Ti ́q. Thus we obtain
E
„ NT ÿ
i“1
}Z 1
i  ́ Z2
i}
ȷ
ď CLE
„ż
pτ,T s
}X ̄ 1
t ́  ́ X ̄ 2
t ́} ` dW pη ̄1
t , η ̄2
t qN pdtq
ȷ
“ CλCL
żT
τ
Er}X ̄ 1
t ́  ́ X ̄ 2
t ́}s ` dW pη ̄1
t , η ̄2
t qdt
ď 2Cμ
żT
τ
E
„
sup
τ ďsďt
}X ̄ 1
s  ́ X ̄ 2
s}
ȷ
dt.
Putting everything together yields
E
„
sup
τ ďtďT
}X ̄ 1
t  ́ X ̄ 2
t}
ȷ
ď Cλ2Cμ
żT
τ
E
„
sup
τ ďsďt
}X ̄ 1
s  ́ X ̄ 2
s}
ȷ
dt,
which by Gronwall’s inequality yields
dU
W pQ ̄ 1, Q ̄ 2q ď E
„
sup
τ ďtďT
}X ̄ 1
t  ́ X ̄ 2
t}
ȷ
“ 0.
Thus uniqueness follows. □
Proof of Theorem 2.6. The proof of existence is based on a classical Picard-iteration scheme. Throughout the proof we fix τ and ζ and we suppress the dependence on τ and ζ.
Existence is proven by identifying the path-law of 2.4 as the limit of the sequence of path-laws Qn “ XnpPq, where Xn is given by
X0
t “Y
Xn
t “Y `
ż
pτ,ts
ż
A
z Qnpds, dzq, n P N,
and where
LQn
pdt, dzq “ μtpXn
t ́, ηn ́1
t , dzqdt
Here ηn ́1
t :“ Xn ́1
t pPq and Y is random variable with distribution ζ. Note that by Lemma B.1 the measure dependence is well-defined and by Theorem 2.1 the corresponding path-laws Qn “ XnpPq exist and are unique for each n P N.

42 PHILIPP C. HORNUNG
Similar to the proof of Lemma B.2, we construct a representation using Poisson random measures with the same jump times. For this let Nt be a Poisson process with constant intensity Cλ and jump times pTiqiPN. For each n P N let N n be defined by
N npBq :“
ÿ
iPN
1BpTi, Zn
i q, B P Bprτ, T sq b BpAq,
where Zn
i given pTi, Xn
Ti ́q “ pt, xq are chosen according to
κn
t px, ηn ́1
t , dzq “ λtpx, ηn ́1
tq
C1
λ
rtpx, ηn ́1
t , dzq `
ˆ
1  ́ λtpx, ηn ́1
tq
C1
λ
 ̇
δt0updzq.
The compensating measure of the N n are given by
LN n
pdt, dyq “ Cλκtpdz, Xn
t ́, ηn ́1
t qdt.
Then by Proposition 2.5 Xn can be represented as
X0
t “Y
Xn
t “Y `
ż
pτ,ts
ż
A
z N npds, dzq, n P N.
We now show, that the sequence pQnqnPN has a limit Q8 P P1pDprτ, T s, Eqq. First we show by induction, that
dU
W pQn, Qn ́1q ď E
„
sup
τ ďtďT
}X n
t  ́ Xn ́1
t}
ȷ
ď CλCrKn pT  ́ τ qn
n! , @n P N,
for any fixed T ě τ , where K “ CμeCμpT  ́τq. By using Assumption 1(1), we obtain
E
„
sup
τ ďtďT
}X 1
t  ́ X0
t}
ȷ
ď CλCrpT  ́ τ q.
Note that this bound holds for any fixed T ě τ . Now assume that the result holds for some n ą 1. As in the proof of Lemma B.2, we can utilise that the jump times of the processes are the same, to arrive at
E
„
sup
τ ďtďT
}X n`1
t  ́ Xn
t}
ȷ
ďE
„ NT ÿ
i“1
}Z n`1
i  ́ Zn
i}
ȷ
.
Due to Assumption 1(2) and from the definition of κ we get
d0
KRpκtpx1, ρ1, dzq, κtpx2, ρ2, dzqq ď CLp}x1  ́ x2} ` dW pρ1, ρ2qq
for x1, x2 P E and ρ1, ρ2 P P1pEq, where CL “ Cμ
Cλ . Again using this and the fact that the marks may be chosen in accordance with an optimal coupling, similar calculations as in the proof of Lemma B.2 yield
E
„ NT ÿ
i“1
}Z n`1
i  ́ Zn
i}
ȷ
ď Cμ
żT
τ
E
„
sup
τ ďsďt
}X n`1
s  ́ Xn
s}
ȷ
`E
„
sup
τ ďsďt
}X n
s  ́ Xn ́1
s}
ȷ
dt.

MEAN-FIELD APPROXIMATIONS IN INSURANCE 43
Now using the induction assumption yields
E
„
sup
τ ďtďT
}X n`1
t  ́ Xn
t}
ȷ
ďCμ
żT
τ
E
„
sup
τ ďsďt
}X n`1
s  ́ Xn
s}
ȷ
` CμKn ́1 pT  ́ τ qn`1
pn ` 1q!
An application of Gronwall’s inequality yields the desired result. Let m P N. Using this result, we can conclude that
dU
W pQn`m, Qnq ď mCλCrKn pT  ́ τ qn
n! ,
which can become arbitrarily small for n large. Thus pQnqnPN is a Cauchy sequence in the space pP1pDprτ, T s, Eqq, dU
W q. As the space pDprτ, T s, Eq, dU q is com
plete, but not separable we cannot conclude that pP1pDprτ, T s, Eqq, dU
W q is com
plete as well and hence we cannot directly conclude that pQnqnPN has a limit in pP1pDprτ, T s, Eqq, dU
W q. Luckily the space pP1pDprτ, T s, Eqq, dJ1
W q is complete and since the metric dU
W is stronger than dJ1
W , the sequence pQnqnPN is Cauchy for dJ1
W
as well. Thus pQnqnPN converges towards a limit Q8, when using dJ1 .
It remains to show that Q8 is actually a path-law of (2.4). For this we construct the process
X8
t “Y `
ż
pτ,T qˆA
z Q8pdt, dzq,
with
LQ8
pdt, dzq “ μtpX8
t ́, Q8
t , dzqdt.
This process exists by Theorem 2.1 as for all the Xn we can find a Poisson representation with the same jump times pTiqiPN. By a similar induction argument, it can then be shown that
dU
W pQn, X8pPqq ď CλCrT pCμT eCμT qn.
For T  ̊ such that CμT eCμT ă 1 we obtain
nliÑm8 dU
W pQn, X8pPqq ď nliÑm8 CλCrT  ̊pCμT  ̊eCμT  ̊
qn “ 0.
Thus on r0, T  ̊s we have that X8pPq is a limit of the sequence pQnqnPN, which means that X8pPq “ Q8. As there are no point masses in the distribution of jump times, we can take X8
T  ̊ pPq as initial distribution at time τ “ T  ̊. Repeating the
argument yields then X8pPq “ Q8 for rT  ̊, 2T  ̊s. The procedure can be repeated and thus yields existence on all of r0, T s. □
Appendix C. LLN and CLT for chaotic random variables
Let pS, dsq be a Polish space and let pΩ, F, Pq be a probability space. Consider the triangular array ppX1,n, . . . , Xn,nqqnPN of random variables Xl,n : Ω Ñ S, where each row Xn “ pX1,n, . . . , Xn,nq has distribution XnpPq “ Qn P PpSq. Furthermore let X : Ω Ñ S be a random variable with XpPq “ Q P PpSq.

44 PHILIPP C. HORNUNG
Proposition C.1. Assume that pQnqnPN is Q-chaotic and that f : S Ñ R is Qa.s. continuous. Then
f pXl,nqpPq wÑk. f pXqpPq for n Ñ 8.
If furthermore the sequence pf pX1,nqqnPN is uniformly integrable, then we have that
Erf pXl,nqs Ñ Erf pXqs for n Ñ 8.
Proof. Due to chaosticity we have that Xl,npPq “ Qn,1 wÑk. Q “ XpPq. The first result follows directly from 3.8 on p.348 in [20], while the second result follows from Theorem 3.5 in [2]. □
The next result is a law of large numbers:
Proposition C.2. Assume that pQnqnPN is Q-chaotic and let f : S Ñ R be Qa.s. continuous with
sup
nPN
Er|f pX1,nq|2`εs ă 8, for some ε ą 0
Then it holds that
nliÑm8 E
„ˆ 1
n
n
ÿ
l“1
f pXl,nq  ́ Erf pXqs
 ̇2ȷ
“ 0.
Proof. The proof is based on part of the proof of Theorem 3.2 in [16]. Set μ :“ Erf pXqs.
E
„ˆ 1
n
n
ÿ
l“1
f pXl,nq  ́ μ
 ̇2ȷ
“1
n2
n
ÿ
i,j“1
Erpf pXi,nq  ́ μqpf pXj,nq  ́ μqs
“1
n Erpf pX1,nq  ́ μq2s
` n ́1
n Erpf pX1,nq  ́ μqpf pX2,nq  ́ μqs,
The last equality is due the fact that all individuals are identically distributed. Our assumptions, Lemma E.3 and (3.18) on p. 31 of [2] imply that pf pX1,nq  ́ μq2 and pf pX1,nq  ́ μqpf pX2,nq  ́ μq are uniformly integrable sequences. Thus by Definition 3.1 and Theorem 3.5 of [2], it holds that
nliÑm8
1
n Erpf pX1,nq  ́ μq2s “
ˆ
nliÑm8
1 n
 ̇ˆ
nliÑm8 Erpf pX1,nq  ́ μq2s
“ 0  ̈ Erpf pXq  ́ μq2s “ 0
and
nliÑm8 Erpf pX1,nq  ́ μqpf pX2,nq  ́ μqs “ 2pErf pXqs  ́ μq “ 0.
The result follows. □
Now set μn :“ Erf pX1,ns and σ2n :“ Erpf pX1,nq  ́ μq2s and similarly set μ :“
Erf pXqs and σ2 :“ Erpf pXq  ́ μq2s. It is also possible (under additional assumptions) to derive a central limit theorem.

MEAN-FIELD APPROXIMATIONS IN INSURANCE 45
Proposition C.3. Assume that pQnqnPN is Q-chaotic and that
nliÑm8 nErpf pX1,nq  ́ μnqpf pX2,nq  ́ μnqs “ 0.
Let f : S Ñ R be Q-a.s. continuous with
sup
nPN
Er|f pX1,nq|4`εs ă 8, for some ε ą 0
Then
?1n
n
ÿ
i“1
f pXi,nq  ́ μn
σn
D Ñ N `0, 1 ̆.
If furthermore limnÑ8
?npμn  ́ μq “ 0, then
?1n
n
ÿ
i“1
f pXi,nq  ́ μ σ
D Ñ N p0, 1q.
Proof. Since tXl,n; l “ 1, 2, . . .unPN are exchangeable and so is tf pXl,nq; l “ 1, 2, . . .unPN. Therefore we would like to apply a CLT for exchangeable processes (see Theorem 2 in [3]).
The first step is now to prove the following three equalities:
nliÑm8 μn “ nliÑm8 Erf pX1,nqs “ Erf pXqs “: μ
nliÑm8 σn “ nliÑm8 Erpf pX1,nq  ́ μnq2s “ Erpf pXq  ́ μq2s “: σ
nliÑm8 ρn “ nliÑm8 Erf pX1,nqf pX2,nqs “ Erf pXqs2 “ μ2.
Due to our Assumptions, Lemma E.3 and (3.18) on p. 31 of [2] all involved sequences are uniformly integrable. Thus all three identities are implied by chaosticity and Theorem 3.5 of [2]. Using the same argument and the three identities it follows that
nliÑm8 E
„ˆ f pX1,nq  ́ μn
σn
 ̇2ˆ f pX2,nq  ́ μn
σn
 ̇2ȷ
“1
σ4 Erpf pXq  ́ μq2s2 “ 1.
So condition (2) of Theorem 2 in [3] is satisfied.
A similar argument yields
nliÑm8 E
„ˇ ˇ ˇ ˇ
f pX1,nq  ́ μn
σn
ˇ ˇ ˇ ˇ
3
ȷ
“1
σ3 Erpf pXq  ́ μq3s ă 8,
and therefore condition (3) of Theorem 2 in [3] is satisfied. Finally we have that
nliÑm8 E
„ˆ f pX1,nq  ́ μn
σn
 ̇ˆ f pX2,nq  ́ μn
σn
 ̇ȷ
“1
σ2
`Erpf pXq  ́ μqs ̆2 “ 0.
This shows that we have the right convergence, which is required for condition (1) of Theorem 2 in [3], but not necessarily the required convergence speed. Therefore we had to assume this in addition to the chaosticity assumption. Now all conditions of Theorem 2 in [3] are satisfied and thus we obtain
?1n
n
ÿ
l“1
f pXl,nq  ́ μn
σn
D Ñ N `0, 1 ̆.

46 PHILIPP C. HORNUNG
Furthermore as limnÑ8 μn “ μ and limnÑ8 σn “ σ and since we have assumed that limnÑ8
?npμn  ́ μq “ 0, an application of Slutsky’s Lemma yields
?1n
n
ÿ
l“1
f pXl,nq  ́ μ
σ “ σn
σ
ˆn ÿ
l“1
f pXl,nq  ́ μn
σn
 ̇
`
?npμn  ́ μq σ
D Ñ N p0, 1q.
□
Appendix D. Proof of Propositions 6.3, 6.4 and 6.5
Let Hprτ, T s, Eq Ă Dprτ, T s, Eq be the space of all jump process paths the form
ωt :“ y `
m
ÿ
i“1
zi1rti,T sptq,
where y is the initial value, τ ă t1 ă . . . ă tm ă T for m P N Y t0u are the jump times and pziqi“1,...,m Ă E are the jump sizes. Let J pωq :“ tt1, . . . , tmu denote the set of jump times with m “ 0 meaning Jpωq “ H.
In order to prove the results, it is convenient to view the present value of discounted future payments as a function of a jump process path into the real numbers. That is P V 1,n “ f pX1,nq, where f : Hprτ, T s, Eq Ñ R is given by
f pωq “
żT
τ
bpt, ωtqdt `
ÿ
tPJ pωq
bωt pt, ωt ́, ∆ωtq.
Using this, we can write
V 1,npτ q “
ż
Dprτ,T s,Eq
f pωqQn,1
τ,ζ pdωq, V ̄ pτ q “
ż
Dprτ,T s,Eq
f pωqQ ̄ τ,ζ pdωq,
V 1,npτ, xq “
ż
Dprτ,T s,Eq
f pωqQn,1
τ,ρpxqpdωq, V ̄ pτ, xq “
ż
Dprτ,T s,Eq
f pωqQr x
τ,ζ pdωq
and the results then follow from Proposition C.1 and Proposition C.2 if f is Q ̄ τ,ζ (or Qr x
τ,ζ)-a.s. continuous. As we have  ̄Qτ,ζpHprτ, T s, Eqq “ Qr x
τ,ζ pHprτ, T s, Eqq “ 1, we only have to prove continuity of f on Hprτ, T s, Eq. We do this in two parts.
Lemma D.1. Let f : Hprτ, T s, Eq Ñ R be given by
f pωq “
żT
τ
bpt, ωtqdt,
where b : rτ, T s ˆ E Ñ R is bounded and t ÞÑ bpt, yq has a countable number of discontinuity points for each fixed y P E. Then f is bounded and continuous.
Proof. Let ω P Hprτ, T s, Eq and let pωnqnPN Ă Hprτ, T s, Eq be sequence such that limnÑ8 dJ1 pωn, ωq “ 0. The goal is to show
nliÑm8
ż
rτ,T s
bpt, ωn
t qdt “
ż
rτ,T s
bpt, ωtqdt.
The Skorokhod convergence implies ωtn Ñ ωt for all continuity points t P rτ, T szJpωq of ω, where Jpωq denotes the points of discontinuity. Furthermore, the set of

MEAN-FIELD APPROXIMATIONS IN INSURANCE 47
discontinuity points of the function t ÞÑ bpt, yq, denoted by Jypbq, is assumed to be countable for any y P E, and thus of Lebesgue measure zero. Set now
A :“ Jpωq Y
ď
tPJ pωq
Jωt pbq.
As A is a finite union of Lebesgue null sets, it is a Lebesgue null set itself. Thus all points, where the necessary convergence can go wrong, can be excluded from the integral. By dominated convergence, we thus get:
nliÑm8 f pωnq “ nliÑm8
ż
rτ,T szA
bpt, ωn
t qdt “
ż
rτ,T szA
nliÑm8 bpt, ωn
t qdt
“
ż
rτ,T szA
bpt, ωtqdt “
ż
rτ,T s
bpt, ωtqdt “ f pωq.
This proves the desired result. □
For any ω P Hprτ, T s, Eq the set of absolute jump sizes is given by U pωq “ t}z1}, . . . , }zm}u. Now for any ε ą 0 and ε R U pωq one can define the following sequence of jump times
tε
0pωq :“ 0
tε
i pωq :“ inftt ą tε
i ́1pωq : }∆ωt} ą εu,
with convention inf H “ 8. Set Jεpωq :“ ttε
i pωq : tε
i pωq ă 8u. Note that Jεpωq Ď Jpωq, where Jpωq “ tt1, . . . , tmu is finite.
Lemma D.2. Let f ε : Hprτ, T s, Eq Ñ R be given by
f εpωq “
ÿ
tPJ εpωq
bωt pt, ωt ́, ∆ωtq,
and let f : Hprτ, T s, Eq Ñ R be given by
f pωq “
ÿ
tPJ pωq
bωt pt, ωt ́, ∆ωtq.
where b : rτ, T s ˆ E3 Ñ R is bounded and continuous. Then f ε is continuous on Hprτ, T s, Eq, while f is continuous on the set
tω P Hprτ, T s, Eq|}∆ωt} ą ε, @t P rτ, T su.
for any ε ą 0.
Proof. By Proposition 2.7 on p.339 in [20] the mappings ω ÞÑ tε
i pωq, ω ÞÑ ωtε
i pωq,
ω ÞÑ ωtε
i pωq ́ and ω ÞÑ ∆ωtε
i pωq are continuous. Thus if b is continuous then ω ÞÑ
bωtiεpωq ptε
i pωq, ωtε
i pωq ́, ∆ωtε
i pωqq is continuous. As J εpωq is finite, f ε is a finite sum
of such functions, which imlies that f ε is continuous.
If ω P tω P Hprτ, T s, Eq|}∆ωt} ą ε, @t P rτ, T su, then tipωq “ tε
i pωq for all i P t0, . . . , mu and thus
f pωq “
ÿ
tPJ pωq
bωt pt, ωt ́q “
ÿ
tPJ ε pωq
bωt pt, ωt ́q “ f εpωq,
which is continuous. □

48 PHILIPP C. HORNUNG
Remark D.3. Lemma D.2 holds true on all of Hprτ, T s, Eq, if there exists an ε ą 0, such that bypt, x, y  ́ xq “ 0 for }x  ́ y} ď ε.
Next we observe that Assumption 1(1) implies Assumption 5(2).
Lemma D.4. Assume that Assumption 1(1) is satisfied. Then it holds that
sup
nPN
E
“`Q1,nprτ, T s ˆ Eq ̆p‰ ă 8
for all p ą 1.
Proof. Note that X1,n by construction only jumps, when Q1,n jumps. Therefore let N l,n
t be the counting process t ÞÑ Q1,nprτ, ts ˆ Eq which has intensity process
t ÞÑ
żt
τ
ż
E
μspx, ρ, dyqds ď Cλpt  ́ τ q,
which is bounded, without the bound depending on n. Thus it follows that all N 1,n
t
are dominated by a time-homogeneous Poisson process M with rate Cμ1pt ́τ q in the
sense of first order stochastic dominance. This implies that ErpN 1,n
T qps ď EM p
T ă8 for all n P N and p ą 1. The desired result follows. □
Before proving Proposition 6.3 we need one final result:
Lemma D.5. Let E Ă Rd be countable and that there exists ε ą 0 such that dEpx, yq ą ε for all x ‰ y, x, y P E. If g : Hprτ, T s, Eq Ñ R is continuous, then so is
f pωq :“ 1txupωτ qgpωq
for all x P E.
Proof. Note that t “ τ is a continuity point for every ω P Hprτ, T s, Eq, since no jump can occur at the initial time. Therefore ω ÞÑ ωτ is continuous. Lemma E.4 yields that y ÞÑ 1txupyq is continuous for every x P E. Thus ω ÞÑ 1txupωτ q is continuous and hence also f . □
We now arrive at the proof of Proposition 6.3.
Proof of Proposition 6.3. By Assumptions 5 and 6 we can use Lemmas D.1 and D.2 to conclude that f is  ̄Qτ,ζ-a.s. and rQx
τ,ζ-a.s. continuous. Due to the weak convergence proved in Theorem 3.5 and Theorem 4.3 we may apply Proposition C.1 in order to get the desired result. A sufficient condition for Proposition C.1 to hold is
sup
nPN
Er|f pX1,nq|ps ă 8 @p ą 1.
Due the boundedness of b and pbyqyPE we have that
Er|f pX1,nq|ps ď 2p ́1Cp
b p1 ` E“`Q1,nppτ, T s ˆ Eq ̆p‰q.
Thus it follows by Lemma D.4 that
sup
nPN
Er|f pX1,nq|ps ď 2p ́1Cp
b
 ́
1 ` sup
nPN
E
“`Q1,nppτ, T s ˆ Eq ̆p‰
 ̄
ă 8.
We may thus apply Proposition C.1 to arrive at the desired result.

MEAN-FIELD APPROXIMATIONS IN INSURANCE 49
Finally if E is countable and infx‰y }x  ́ y} ą 0, we can use Lemma D.5 to conclude that ω ÞÑ 1txupωτ qf pωq and ω ÞÑ 1txupωτ q are continuous. As 1txupωτ qf pωq ď f pωq we use Proposition C.1 to conclude that
nliÑm8 Er1txupX1,n
τ qP V 1,npτ qs “ Er1txupX ̄τ qPĚV pτ qs
and
nliÑm8 Er1txupX1,n
τ qs “ Er1txupX ̄τ qs “ ζpxq.
Thus if ζpxq ą 0, we have that
nliÑm8 V 1,npτ, xq “ nliÑm8
Er1txupXτ1,nqP V 1,npτ qs
Er1txupXτ1,nqs “ Er1txupX ̄τ qPĚV pτ qs
ζpxq “ V ̄ pτ, xq.
□
We continue with the proof of Proposition 6.4.
Proof of Proposition 6.4. By Assumptions 5 and 6 we can use Lemmas D.1 and D.2 to conclude that f is Q ̄ τ,ζ-a.s. and Qr x
τ,ζ -a.s. continuous.
The first result follows from the weak convergence proved in Theorem 3.5 and a similar argument as in the proof of Proposition 6.3 shows that we may apply Proposition C.2 to arrive at the desired result.
For the second result we use Lemma D.5 to conclude that ω ÞÑ 1txupωτ qf pωq and ω ÞÑ 1txupωτ q are continuous. As 1txupωτ qf pωq ď f pωq we use Proposition C.2 to conclude that
1 n
n
ÿ
l“1
1tX l,n
τ “xuP V l,npτ q L2
Ñ Er1tX ̄τ “xuPĚV pτ qs
and
1 n
n
ÿ
l“1
1tX l,n
τ “xu
L2
Ñ PpX ̄τ “ xq “ ζpxq.
Both convergences also hold in probability and as ζpxq ą 0, we may apply the continuous mapping Theorem for convergence in probability to arrive at the desired result. □
Proof of Proposition 6.5. The goal is to apply Proposition C.3. By Theorem 3.5 we have the necessary chaosticity property, by Lemmas D.1 and D.2 the function f is almost surely continuous and by Lemma D.4 and an argument as in the proof of Proposition 6.3 the necessary moment conditions are satisfied. Thus the result follows from Proposition C.3. □
Appendix E. Auxiliary results
Lemma E.1. Let Q1, Q2 P PpDprτ, T s, Eqq and let πt : Dprτ, T s, Eq Ñ E be the time-marginal projection. Then dW pπtpQ1q, πtpQ2qq ď dU
W pQ1, Q2q.

50 PHILIPP C. HORNUNG
Proof. Let D be the set of couplings between Q1 and Q2 and let Kt be the set of couplings between πtpQ1q and πtpQ2q.
Take any P P D. Then we have that πtpPp‚ˆDprτ, T s, Eqqq “ πtpQ1q and πtpPpDprτ, T s, Eqˆ ‚qq “ πtpQ2q. Thus we have that πtpDq Ă Kt. Hence we get that
dU
W pQ1, Q2q “ PiPnfD
ż
Dprτ,T s,Eq2
sup
tPrτ,T s
}πtpω1q  ́ πtpω2q}Ppdω1, dω2q
ě PiPnfD
ż
E2
}x  ́ y}πtpPqpdx, dyq
ě inf
ρPKt
ż
E2
}x  ́ y}ρpdx, dyq “ dW pπtpQ1q, πtpQ2qq.
□
Lemma E.2 (Gronwall’s inequality). Let u, v be non-negative real functions on the interval rτ, T s, with v integrable and u bounded and measurable. Let c ě 0 and assume that
uptq ď c `
żt
τ
vpsqupsqds.
Then it holds that
uptq ď ce
şt
τ vpsqds.
Lemma E.3. Let pxiqi“1,...,n Ă R and let p ą 1. Then
ˇ ˇ ˇ ˇ
n
ÿ
i“1
xi
ˇ ˇ ˇ ˇ
p
ď np ́1
n
ÿ
i“1
|xi|p
Lemma E.4. Let pE, dEq be a metric space and assume that there exists ε ą 0 such that dEpx, yq ą ε for all x ‰ y, x, y P E. Let f : E Ñ pS, dSq, where pS, dSq is a metric space. Assume that K :“ supx,yPE dSpf pxq, f pyqq ă 8. Then f is Lipschitz continuous with Cf “ K
ε.
Proof. Let x1, x2 P E. Then dEpx, yq ă ε if and only if x1 “ x2. Thus we have that
dSpf px1q, f px2qq ď K ď K
ε |x1  ́ x2|.
□
Department of Mathematical Sciences, University of Copenhagen, Universitetsparken 5, DK-2100 Copenhagen, Denmark
Email address: pcho@math.ku.dk

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:42.036Z
- **Text Length:** 103746 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 50 of 50
