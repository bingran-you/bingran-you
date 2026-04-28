# PDF Document: Boyko - 2025 - On non-uniqueness of solutions to degenerate parabolic equations in the context of option pricing in.pdf

**File Path:** Boyko - 2025 - On non-uniqueness of solutions to degenerate parabolic equations in the context of option pricing in.pdf

**Processed Date:** 2026-02-10T18:13:56.102Z

**File Size:** 316.24 KB

**Total Pages:** 8

**Extracted Pages:** 8

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3510

**Title:** On non-uniqueness of solutions to degenerate parabolic equations in the context of option pricing in the Heston model

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

ON NON-UNIQUENESS OF SOLUTIONS TO DEGENERATE PARABOLIC
EQUATIONS IN THE CONTEXT OF OPTION PRICING IN THE HESTON
MODEL
RUSLAN R. BOYKO
Abstract. In [1] it was shown that the price of call options in the Heston model is determined in a non-unique way. In this paper, this problem is analyzed from the point of view of the existing mathematical theory of uniqueness classes for degenerate parabolic equations. For the special case of degeneracy, a new example is constructed demonstrating the accuracy of the uniqueness theorem for a solution in the class of functions of sublinear growth at infinity.
Introduction
In modern financial mathematics, one of the fundamental problems is finding the “fair” price of various derivative financial instruments, especially options, which are used to construct volatility surfaces necessary for standard calibration methods of various derivative pricing models. The uniqueness of the price guarantees the absence of arbitrage opportunities in financial markets. There are many probabilistic approaches to studying the question of price uniqueness in pricing models; however, a -
definitive and most complete solution to this important problem does not exist. The problem of existence and uniqueness of option prices in the Heston model is related to the behavior of diffusion coefficients, which can degenerate when approaching the domain’s boundaries. This work will explain the phenomenon of non-uniqueness in the option evaluation problem for the Heston model from the perspective of the theory of boundary value problems for degenerate second-order partial differential equatio-
ns. Namely, it will be shown that non-uniqueness can arise for two reasons: the absence of necessary boundary conditions, or due to the solution leaving the Tikhonov–Ta ̈cklind class.
1. Option price in the Heston model
The behavior of the asset in the Heston stochastic volatility model [2] is described by the system of stochastic differential equations
(
dSt = (r − q)Stdt + √vtStdWt1
dvt = κ(θ − vt)dt + σ√vtdWt2, (1)
where the volatility process vt is a Cox-Ingersoll-Ross (CIR) process [3], θ > 0 is the long-term mean volatility, κ > 0 is the rate of mean reversion, σ is the volatility of volatility, the Brownian motions Wt1, Wt2 are correlated with parameter |ρ| ≤ 1, i.e., dWt1dWt2 = ρdt. Additionally, it is
2020 Mathematics Subject Classification. 35K65 35G16 35A02.
Key words and phrases. option valuation problem, Heston model, degenerate parabolic equations, boundary conditions, T ̈acklind classes.
1
arXiv:2511.11288v1 [math.AP] 14 Nov 2025

2 RUSLAN R. BOYKO
assumed that the model is written under the equivalent risk-neutral measure with drift μ = r − q, where r ≥ 0 is the interest rate and q ≥ 0 is the dividend yield. The option price with payoff function Φ(·) in the considered model can be defined as the solution to the following boundary value problem in the domain S, v ≥ 0, and 0 ≤ t ≤ T ≤ ∞ with a given terminal condition [2] [4]:
vS2
2 VSS + ρσvSVSv + vσ2
2 Vvv + (r − q)SVS + (κ(θ − v) − λv)Vv − rV + Vt = 0, (2)
V (S, v, T ) = Φ(S, v). (3)
1.1. Correct setting of boundary conditions. Equation (2) belongs to the class of parabolic equations degenerate on the boundary of the form
Lu =
m
X
i,j=1
aij (x)uxixj +
m
X
l=1
bl(x)uxl + c(x)u = f (x), (4)
defined in an open domain D ⊂ Rm with regular boundary ∂D. Assume that the matrix A(x) = aij(x) is symmetric, positive semidefinite (i.e., ⟨Aξ, ξ⟩ ≥ 0 for any unit vector ξ), and has degeneration points on the boundary ∂D, with the coefficient c(x) < 0. A general theory of weak solutions for such equations was constructed in [5] [6]. To investigate the correctness of the boundary condition formulation, we introduce the Fichera function
H(x) =
m
X
i=1
h
bi(x) −
m
X
j=1
aij (x) xj
i
ni,
constructed for points of the set Σ0 = x ∈ ∂D | ⟨A(x)ν, ν⟩ = 0 ⊂ ∂D, where ν denotes the unit normal to the boundary ∂D at point x. The Fichera function for problem (2), (3) has the form
H(S, v, t) = (r − q)S − vS + ρσS
2 n1 + κ(θ − v) − λv − ρσv
2 + σ2
2 n2 + n3,
where n = (n1, n2, n3) defines the inward normal in coordinates (S, v, t) to the boundary of the domain. Let us introduce the domains associated with the sign of the Fichera function
Σ0 = x ∈ Σ0 | H(x) = 0 , Σ2 = x ∈ Σ0 | H(x) < 0 ,
Σ1 = x ∈ Σ0 | H(x) > 0 , Σ3 = ∂D − Σ0 .
For (4), we pose the boundary value problem u = g on Σ2 ∪ Σ3. In [5], a theorem on the existence of a weak solution applicable to our problem was proved. Namely, assume that for the boundary value problem
the following conditions hold: c(y) ≤ c0 < 0 in D, f is a bounded measurable function on D, g is a bounded measurable function on Σ2 ∪ Σ3. Then there exists a weak solution to the posed boundary value problem.
Thus, for the correct formulation of the problem, it is necessary to impose a boundary condition on the domain Σ2 ∪ Σ3, i.e., at points of non-degeneracy and at points where the Fichera function is negative.

NON-UNIQUENESS IN THE HESTON MODEL 3
According to Fichera’s theory [5] [7], for the well-posedness of the boundary value problem it is necessary to impose a boundary condition at the terminal moment t = T . Furthermore, if the model parameters do not satisfy the inequality
kθ ⩾ σ2
2 , (5)
then a boundary condition must also be imposed on the boundary v = 0 (the moment the volatility trajectory reaches the zero level). This condition is commonly referred to in probability theory as the Feller condition.
Thus, under certain conditions on the model parameters, the non-uniqueness of the solution in problem (2), (3) occurs due to a missing boundary condition. Studying the sign of the Fichera function shows that on the boundaries S = 0, S = +∞, and v = +∞, imposing a boundary condition is not required. Note that the analysis of the necessity of imposing boundary conditions for the option price equation in the Heston model was carried out in [7].
2. The uniqueness problem in option pricing in the Heston model under the Feller condition
In [1], an Example 3 showing that the solution to the option pricing problem may be non-unique. For this, a special case of model (1) was considered:
(
dSt = rStdt + √νtStdZQ
t
dνt = σ2dt + σ√νtdZQ
t,
where the parameters σ > 0, r ≥ 0 correspond to the characteristics of the volatility process and the drift of the price process, respectively, and ZQ
t is a Wiener process under the risk-neutral measure Q. Equation (2) becomes
vS2
2 VSS + σvSVSv + vσ2
2 Vvv + rSVS + σ2Vv − rV + Vt = 0. (6)
Note that from the standpoint of Fichera function theory, this equation, as in the general Heston model, requires a condition to be imposed only at the terminal time t = T (the investigation reduces to examining the sign of the Fichera function on the boundaries). Here, the ”Feller condition,” which previously arose on the boundary v = 0, is replaced in the considered problem by the condition
σ2 − σ2
2 = σ2
2 ⩾ 0, i.e., imposing a condition on the boundary v = 0 is not required. In [1], the differential equation
vσ2
2 Πvv + σ2Πv + Πt − rΠ = 0 (7)
with final condition Π(v, T ) = 0 was considered to prove the non-uniqueness of the solution to problem (6), (3). This work shows that the function
Π(v, t) = 1
v e−r(T −t)− 2v
σ2(T −t) (8)
provides a nontrivial solution to this problem. Consequently, if V1(S, v, t) denotes the “standard” solution of problem (6), (3) (e.g., [2] [4]), then V2(S, v, t) = V1(S, v, t) + Π(v, t) also solves the original problem.

4 RUSLAN R. BOYKO
Note that solution (8) is unbounded as v → 0, and it is natural to assume that to single out a unique solution, restrictions on the behavior of the solution as v → 0 must be imposed. Below it will be shown how the reason for this kind of non-uniqueness can be explained in terms of classical results of the theory of parabolic equations. Furthermore, questions concerning the growth restriction of the solution also arise as S → 0, v → +∞, S → +∞. We will also obtain growth conditions for the solution-
 that ensure uniqueness when approaching finite or infinite boundaries.
3. Classes of uniqueness in the problem of option valuation in the Heston model
3.1. Tikhonov–T ̈acklind classes (S → ∞, v → ∞). The question of identifying uniqueness classes for the Cauchy problem for degenerate parabolic equations was first addressed by E. Holmgren in his 1924 work. The exact uniqueness class for the solution of the Cauchy problem in the context of the heat equation was obtained by A.N. Tikhonov in 1935 in [8]. It was established that the solution u(x, t) of the heat equation ut = ∆u with zero initial condition u(x, 0) = 0 is unique in the class of functio-
ns
|u(x, t)| ≤ B exp{β|x|2}, β > 0, x ∈ Rn, t ∈ [0, T ],
and Tikhonov constructed an example of a nonzero solution to this Cauchy problem that belonged to a wider class. In 1936, S. T ̈acklind in [9] refined Tikhonov’s results by showing that the solution of the Cauchy problem is unique in the class
|u(x, t)| ≤ B exp{|x|h(x)}, x ∈ R, t ∈ [0, T ],
where h(·) is a non-decreasing nonnegative function with a divergent integral R +∞
1
ds
h(x) (this function is commonly called the Ta ̈cklind function). It was also established that if the latter condition is violated, the solution ceases to be unique. The works of Tikhonov and T ̈acklind were successively generalized to broader classes of equations. In particular, Kamynin and Khimchenko in [10] [11] [12] extended the theory to general secondorder parabolic equations with nonnegative characteristic form and unbounded coefficients. They proposed a generalized Tikhonov–T ̈acklind class
|u(x, t)| ≤ C exp G(|x|)h(G(|x|)) , G(s) =
Zs
0
dx
g(x) ,
where g : [0, +∞) → [1, +∞) is a non-decreasing function of class C1[0, +∞), g(s) ≡ 1 for s ∈ [0, 1]
and R +∞
0
ds
g(s) = ∞.
In [11], Theorem 1 was proved, which we formulate in a special case that allows its application to our situation. Namely, assume that
the coefficients of the differential operator
L=
m
X
i,j=1
aij (x, t)∂xixj +
m
X
l=1
bl(x, t)∂xl + c(x, t) − ∂t,

NON-UNIQUENESS IN THE HESTON MODEL 5
in the strip Π(T ) = {x ∈ R, 0 ⩽ t ⩽ T } satisfy the conditions
0 ≤ A(x, t; ξ) =
n
X
i,j=1
aij(x, t)ξiξj ≤ k(|x|), ∀|ξ| = 1,
0 ≤ a(x, t) =
n
X
i=1
b2
i (x, t)
!1/2
≤ g(|x|)φ(G(|x|)), c(x, t) ≤ 0,
where k(s) = min{g2(s), sg(s)} for s ≥ 1, and the function u(x, t) ∈ C(Π(T )) ∩
C 2,1
x,t (Π(T )) belongs to the generalized Tikhonov–T ̈acklind class. Then, if Lu = 0 and u(x, 0) = 0, then u(x, t) ≡ 0 in the entire strip Π(T ).
To find the Tikhonov–T ̈acklind uniqueness class for equation (6) as S → +∞ and v → +∞, we perform the substitution x = ln S. Then equation (6) is rewritten as
v
2 Vxx + σvVxv + vσ2
2 Vvv + r − v
2 Vx + σ2Vv − rV + Vt = 0. (9)
Let us estimate the quadratic and linear coefficients:
0 ≤ A(x, v, t; ξ) = v
2 ξ2
1 + σvξ1ξ2 + vσ2
2 ξ2
2 ≤ C1v,
0 ≤ a(x, v, t) = r − v
2
2
+ (σ2)2
1/2
≤ C2v,
where C1, C2 are constants. Choose
g(s) =

 
 
1, s ∈ [0, 1 − ε]
smooth, s ∈ [1 − ε, 1 + ε)
s, s ⩾ 1 + ε
G(s) =
Zs
0
dx
g(x) ∼ C ln(s), s → +∞,
which satisfy the necessary conditions given in [10] [11]. Thus, from Theorem 1 in [10] follows that the uniqueness class as S → ∞ and v → ∞ has the form:
|V (S, v, t)| ⩽ C exp ln
q
ln2(S) + v2 · h ln
q
ln2(S) + v2 . (10)
3.2. Uniqueness class for (6) as S → 0. Note that the substitution x = ln S also allows us to investigate the behavior of the solution as S → 0, since it reduces the problem to studying the uniqueness class for equation (9) as x → −∞. This equation does not degenerate in the variable x, so the uniqueness class coincides with the well-known uniqueness class for the heat equation. Performing the inverse substitution, we see that condition (10) also singles out the uniqueness class for equation (6) a-
s S → 0.
3.3. Uniqueness class for (6) as v → 0. The question of uniqueness classes in this case is resolved somewhat differently. We could, of course, make the substitution w = 1
v and study the behavior of the solutions of the resulting equation as w → ∞, but the theory used above turns out to be inapplicable in this case. Therefore, we will proceed differently and study the behavior of the solution of equation (7) as v → 0 within the framework of the theory of degenerate partial differential equations, similar to what was done in [17]. Note that equation (7) reduces to the Feller equation [13]
ut = (axu)xx − ((bx + c)u)x, (11)

6 RUSLAN R. BOYKO
where a, b, c are some constants. Namely, performing the substitution x = 4
σ2 v and τ = T − t (assuming r = 0) we obtain Πτ = 2xΠxx + 4Πx,
i.e., a = 2, b = 0 and c = 4 = 3−2α
1−α , α = 1
2. In turn, the substitution y = 1
x leads us to the equation
Πτ = 2y3Πyy, (12)
with parameter α = 3
2 . Equation (12) belongs to the class of equations with power-law degeneracy of the form
Πτ = ay2αΠyy, α > 0, a > 0, (13)
which are closely related to stochastic processes with constant elasticity (CEV) [14]. It is known that the change of variables
x= 1
2a(1 − α)2 y2(1−α)
reduces them to the Feller equation (11) [14]. For equation (13) in the case α > 1, there also exists a non-uniqueness problem, which was investigated in [15] from the perspective of the theory of degenerate partial differential equations. Thus, (12) is a special case of such a problem. Let us list the results concerning the growth rate of the solution as y → ∞ that ensure its uniqueness: 1. In [16] (Theorem 4.8) it is shown that for α ≥ 0,
if the initial condition Π(x, 0) = g(x) in (7) has (strictly) sublinear growth at infinity, then the solution to problem (7) with this terminal condition is unique.
2. In [15] it is shown that for 0 ≤ α ≤ 1 the standard approach related to the construction of exact Tikhonov–T ̈acklind uniqueness classes [11] [12] is applicable; functions from this class can grow faster than a linear function, i.e., the necessary condition given in [16] is not sufficient. 3. For α > 1, the theory of [10] [11] is not applicable and, apparently, it is unknown whether the sublinear growth condition is sufficient for identifying uniqueness classes. At the same time, an example of -
a nontrivial solution in the case of zero initial data for α = 2 is known (see [17])
Π2(y, t) = y 1 − 2Φ − 1
σy√t , (14)
where Φ(z) = √12π
Zz
−∞
e−u2/2 du is the Laplace function. This solution has linear growth as
y → +∞ and serves as an example of non-uniqueness of the solution for the given parameter value. Thus, for α = 2, Theorem 4.3 of [16] gives both a necessary and sufficient condition for the uniqueness of the solution. Let us construct a similar example of non-uniqueness for α = 3/2 based on solution (8). For this, it suffices to note that (8) under the substitution will become
Π(y, τ ) = 4y
σ2 e− 1
2yτ , y > 0, τ > 0. (15)
This function is a nontrivial solution of (13), vanishes at τ = 0, and grows linearly as y → +∞. Thus, the uniqueness class for solutions in problem (6), (3) as v → +0 consists of functions having sublinear growth at infinity (after the coordinate change y = 4
σ2v ), i.e., the solution has a singularity weaker than 1/v, in particular, integrable. Outside this class, the solution of the considered equation is, generally speaking, non-unique.

NON-UNIQUENESS IN THE HESTON MODEL 7
3.4. Main theorem. Let us summarize the results obtained in Section 3 on uniqueness classes for problem (6), (3):
Theorem 1. Assume that the parameters of model (1) are such that the Feller condition (5) is satisfied. Then the classical solution to problem (6), (3) is unique in the class of functions having, as S → +∞, v → +∞, S → 0, growth determined by condition (10), and belonging to the class o1
v as v → 0.
4. Conclusion and discussion
This work contains the following main results. 1. The uniqueness class in the option pricing problem in the Heston model has been found. In particular, it is shown that it consists of functions having a singularity weaker than 1/v as v → +0. This shows the reason for non-uniqueness in the example constructed in [1]. 2. Example (15) is constructed, showing that the requirement of sublinear growth at infinity is not only necessary but also a sufficient condition for the uniqueness of the solution to-
 the parabolic equation with power-law degeneracy (13) for α = 3/2. In fact, in addition to the known example (14) for α = 2, we have constructed a second example of this kind. A natural question arises: is it possible, by reduction to the Feller equation, to construct a similar non-uniqueness example for the remaining α > 1 and thereby show that the sublinear growth condition at infinity is precise for identifying the uniqueness class for solutions of equations of the form (13)? Such a result see-
ms quite natural, but the corresponding examples are currently unknown. A formal obstacle to transferring the result from α = 3/2 to other α > 1 is that when reducing (12) to the Feller equation for α ̸= 3/2, additional lower-order terms appear.
References
[1] Heston S. L., Loewenstein M., Willard G. A. Options and bubbles// The Review of Financial Studies. 2007. 20. 359–390. [2] Heston S. L. A closed form solution for options with stochastic volatility with applications to bond and currency options// The Review of Financial Studies. 1993. 6. 327–344. [3] Cox J. C., Ingersoll J. E., Ross S. A. A Theory of the Term Structure of Interest Rates// Econometrica. 1985. 53. 385–407. [4] Gatheral J., Taleb N. N. The Volatility Surface: A Practitioner’s Guid-
e. Wiley Finance. 2006. [5] Fichera G. On a unified theory of boundary value problems for elliptic-parabolic equations of second order// Matematika. 1963. 7. 99–122. [6] Oleinik O. A., Radkevich E. V. Second-order equations with nonnegative characteristic form. Itogi Nauki. Ser. Matematika. Mat. anal. 1969, VINITI, M., 1971, 7–252. (In Russian) [7] Meyer G. H. The time-discrete method of lines for options and bonds: A PDE approach. World Scientific, 2015. [8] Tikhonov A. N. Uniqueness theorems for-
 the heat equation// Mat. Sb.. 1935. 42. No 3. 199–216. (In Russian) [9] Tacklind S. Sur les classes quasianalityques des solutions des l’equations aux derive ́es partielles du type paraboliques// Nord. Acta Regial Soc. Scient. Uppsaliensis. 1936, ser. 4. 10. No 3. 3–55. [10] Kamynin L. I., Khimchenko B. N. On the uniqueness of the solution of the first boundary value problem and the Cauchy problem for a parabolic equation of the 2nd order with nonnegative characteristic form// Dokl. Akad. Nauk SS-
SR. 1979. 248. No 2. 290–294. (In Russian) [11] Kamynin L. I., Khimchenko B. N. On the Tikhonov–Petrovsky problem for parabolic equations of the 2nd order// Sib. Mat. Zh.. 1981. 22. No 5. 78–109. (In Russian) [12] Kamynin L. I. On the uniqueness of the solution of the first boundary value problem in an unbounded domain for a parabolic equation of the second order// Zh. Vychisl. Mat. Mat. Fiz.. 1984. 24. No 9. 1331–1345. (In Russian) [13] Feller W. Two singular diffusion problems// Annals of Mathem-
aties. 1951. 54. No 1. 173–182.

8 RUSLAN R. BOYKO
[14] Hull J. C. Options, Futures, and Other Derivatives. 8th ed., Dialektika (Williams). 2019. (Russian translation) [15] Ladykova E. A., Rozanova O. S. On non-uniqueness in the option pricing problem// Moscow University Mathematics Bulletin, 2025, to appear. (arXiv:2501.18721) [16] Ekstrom E., Tysk J. Bubbles, convexity and the Black-Sholes equation// The Annals of Applied Probability. 2009. 19. No 4. 1369–1384. [17] Cox A. M. G., Hobson D. G. Local martingales, bubbles and option prices// Financ-
e and Stochastics. 2005. 9. 477–492.
Mathematics and Mechanics Department, Lomonosov Moscow State University, Leninskie Gory, Moscow, 119991, Russian Federation
Email address: ruslan.boiko@math.msu.ru

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:56.102Z
- **Text Length:** 19658 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 8 of 8
