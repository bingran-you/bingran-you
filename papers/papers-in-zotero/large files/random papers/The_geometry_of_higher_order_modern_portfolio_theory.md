# PDF Document: Horobet - 2025 - The geometry of higher order modern portfolio theory.pdf

**File Path:** Horobet - 2025 - The geometry of higher order modern portfolio theory.pdf

**Processed Date:** 2026-02-10T18:17:05.115Z

**File Size:** 392.64 KB

**Total Pages:** 14

**Extracted Pages:** 14

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3525

**Title:** The geometry of higher order modern portfolio theory

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

The geometry of higher order modern portfolio
theory
Emil Horobe ̧t
Sapientia Hungarian University of Transylvania, Romania
Simion Stoilow Institute of Mathematics of the Romanian Academy, Romania
Abstract
In this article, we study the generalized modern portfolio theory, with utility functions admitting higher-order cumulants. We establish that under certain genericity conditions, the utility function has a constant number of complex critical points. We study the discriminant locus of complex critical points with multiplicity. Finally, we switch our attention to the generalization of the feasible portfolio set (variety), determine its dimension, and give a formula for its degree.
1 Introduction
Classical portfolio theory, as formalized by Markowitz [4], rests on the assumption that risk can be adequately described by the variance of returns and that investors’ preferences can be captured by quadratic utility. While this framework has proven foundational, it is increasingly recognized as restrictive: financial return distributions often exhibit skewness, kurtosis, and higher-order irregularities that cannot be explained by second-order moments alone. The resulting misalignment between mod-
el assumptions and empirical distributions motivates the development of higher-order portfolio theory. In higher-order modern portfolio theory, utility maximization is extended beyond the variance–mean trade-off to include systematic contributions from higher-order moments or, more fundamentally, higher-order cumulants. This generalization provides a richer characterization of investors’ attitudes toward asymmetry and tail behavior, embedding skewness and kurtosis aversion (or preference) directly-
 into the optimization framework. Recent works on this topic include [2, 3, 5]. The challenge, however, is not simply technical (of incorporating additional terms into an expansion) but conceptual: the geometry of parameter selection within the utility function must be mathematically understood. Investors’ preferences for higherorder risks translate into weightings on cumulants that determine the shape of the feasible portfolio set. These sets are no longer ellipsoids, as in the quadratic case, bu-
t algebraic varieties whose degree grows rapidly with the order of cumulants used, whose geometry depends on both the order and relative scaling of chosen parameters.
1
arXiv:2511.20674v1 [q-fin.PM] 15 Nov 2025

Understanding this geometry is crucial, for it dictates feasible diversification strategies, the stability of critical portfolios, and the interpretability of preference parameters. The present work develops a geometric perspective on higher-order modern portfolio theory, first by understanding the generic number of critical portfolios and their discriminant locus. We have the following main results.
Theorem. Under the assumptions of Theorem 3.1 the generalized utility function
L(x1, x2, . . . , xn) =
d
X
j=1
n
X
i=1
wj kij xj
i
has (d − 1)n−1 complex non-degenerate critical points.
Theorem. A critical point, (x1, x2, . . . , xn), of the utility function L has a multiplicity
if and only if it satisfies
n
X
i=1
Y
j̸=i
∂ Pj (xj )
∂xj
= 0, (1)
where Pi(xi) = Pd
j=1 jwj kij xj−1
i.
Finally, we study the basic geometric invariants (dimension and degree) of the generalized feasible portfolio set (variety). Our main findings can be summarized as follows.
Theorem. Under the conditions of Theorem 5.4 the feasible portfolio variety Pk has dimension n − 1 and degree
d · (d − 1) · . . . · (d − n + 2).
Acknowledgements. The author was supported by the project “Singularities and Applications” - CF 132/31.07.2023 funded by the European Union - NextGenerationEU - through Romania’s National Recovery and Resilience Plan and by the Domus ”Alkoto ́i” Scholarship of the Hungarian Academy of Science.
2 Mathematical setup
In this paper, we consider X1, X2, . . . , Xn independent random variables, where Xi represents the relative (annual/quarterly/etc.) return of the ith asset in our portfolio. In this context, a portfolio P is a random variable that is a convex combination of the Xi’s, that is
P = x1X1 + x2X2 + . . . + xnXn,
with xi ∈ (0, 1) and x1 + x2 + . . . + xn = 1. We consider a utility function L dependent on the portfolio P through x1, x2, . . . , xn. Classically, L depends on the expected value of P and its variance. So
L(x1, x2, . . . , xn) = w1E(P ) + w2V(P ),
2

where w1, w2 are weights and E(P ) is the expected value of P , and V(P ) is its variance. Now, since we assumed that the Xi’s are independent, we have the additivity and homogeneity of the expected value and of the variance, so we get
L(x1, x2 . . . , xn) = w1E(x1X1 + x2X2 + . . . + xnXn) + w2V(x1X1 + x2X2 + . . . + xnXn) =
= w1
n
X
i=1
xiE(Xi) + w2
n
X
i=1
x2
i V(Xi).
For almost all choices of weights, w1, w2, this is a quadratic polynomial function that can be easily optimized relative to the constraints x1 + x2 = 1 and x1, x2 ∈ (0, 1).
Example 2.1 (Markowitz utility on a two asset portfolio). Let us now consider a simple portfolio consisting of two independent assets and their corresponding X1 and X2 independent returns. We can write the portfolio as
P = x · X1 + (1 − x) · X2,
with x ∈ (0, 1). The classical Markowitz utility function equals
L(x) = E(P ) − 1
2 V(P ) = x · E(X1) + (1 − x) · E(X2) − 1
2 x2 · V(X1) + (1 − x)2 · V(X2) .
Which is a quadratic function in x, always attaining a maximum because the leading coefficient − 1
2 (V(X1) + V(X2)) is always negative. And this maximum is attained for
x∗ = E(X1) − E(X2) + V(X2)
V(X1) + V(X2) ,
if this value is in between (0, 1). If this value is negative, then we set x∗ = 0, and as a consequence, X1 disappears from the portfolio. Or if this value is greater than one, then we set x∗ = 1 and as a consequence X2 disappears from the portfolio. In such cases, we say that we have gotten a degenerate portfolio.
In this paper, from now on, we only consider non-degenerate portfolios, meaning that we assume that xi ̸= 0, for all i = 1, . . . , n.
2.1 Higher-order utility functions
We have seen in the classical theory that it is crucial that for independent variables X1, X2, . . . , Xn the expected value and the variance utilized in L are additive and homogeneous. In this fashion, we propose to generalize the theory by using higher-order cumulants.
Definition 2.2. The cumulants of a random variable X are defined using the cumulant
generating function K(t) = log E(etX). Now, if K(t) =
∞
X
j=1
κj
tj
j! is the power series
expansion of K(t), then the j-th cumulant of X is equal to κj.
3

We have the property that κj are additive and homogeneous for any j ≥ 0 and that the first cumulants are equal to the moments (expected value, variance, etc.). Now, for generic weights let us consider the following generalized utility function
L(x1, x2, . . . , xn) =
d
X
j=1
wjκj(P ),
where, by the properties of cumulants and because the Xi are independent we get that
κj(P ) =
n
X
i=1
xj
i κj(Xi).
So we want to optimize
L(x1, x2, . . . , xn) =
d
X
j=1
n
X
i=1
wj xj
i κj(Xi),
with respect to Pn
i=1 xi = 1 and xi ∈ (0, 1), for all i = 1, . . . , n.
3 The critical equations and the generic number of
critical points
We consider the complexified critical point system to study the algebraic geometry of the solutions, and we say that we want to find all complex critical points of the function
L(x1, x2, . . . , xn) =
d
X
j=1
n
X
i=1
wj xj
i κj(Xi),
with respect to Pn
i=1 xi = 1, where we consider xi ∈ C. By doing this, we shed light on the geometry of the critical points variety (or equivalently, we get an understanding of the isolated Morse singularities of L). On the other hand, we lose the positivity of the solutions, so at the end, we will have to work on finding and understanding the real and positive solutions. The first question to answer is whether the number of constrained critical points of the generalized utility function is constant for generic par-
ameter data. We consider the cumulant values of the Xi’s to be fixed, real, and non-zero. We will denote κj(Xi) by kij and hence we get a fixed matrix of data, K = (kij)ij, comprising all the statistical data of the elements of the portfolio. Now we use Lagrange multipliers to find the constrained critical points of L with respect to Pn
i=1 xi = 1. The Lagrange function of this problem is
L(x1, . . . , xn; λ) =
d
X
j=1
n
X
i=1
wj kij xj
i −λ
n
X
i=1
xi − 1
!
.
Taking derivatives with respect to the xi’s and to λ, we get the following system of critical equations
(Pd
j=1 jwj kij xj−1
i = λ, for i = 1, . . . , n,
Pn
i=1 xi = 1. (2)
4

The system consists of n degree d − 1 univariate polynomials and one linear condition in n + 1 complex variables. So, in general, it has a zero-dimensional (meaning discrete) solution set, and we have the following result.
Theorem 3.1. Under the assumption that kij are real, non-zero, and that wd ̸= 0 the generalized utility function
L(x1, x2, . . . , xn) =
d
X
j=1
n
X
i=1
wj kij xj
i
has (d − 1)n−1 complex non-degenerate critical points with respect to the constraint
Pn
i=1 xi = 1. Here, non-degenerate means that no xi equals zero.
Proof. System 2 can be rewritten in the following form

 
 
Pd
j=1 jwj k1j xj−1
1 = λ,
Pd
j=1 jwj k1j xj−1
1 = Pd
j=1 jwj kij xj−1
i , for i = 2, . . . , n,
Pn
i=1 xi = 1.
(3)
The number of solutions of the above system equals the number of solutions of the system
(Pd
j=1 jwj k1j xj−1
1 = Pd
j=1 jwj kij xj−1
i , for i = 2, . . . , n,
Pn
i=1 xi = 1. (4)
This is true because once we have a value for x1, then λ it is uniquely defined by it in 3. Now, by B ́ezout’s theorem, we get that the number of complex solutions to system 4 is at most the product of the degrees of these equations, which is exactly (d − 1) · (d − 1) · . . . · (d − 1) · 1 = (d − 1)n−1. We need the assumption that wd ̸= 0 to ensure that the polynomials are actually of degree d − 1 and not less. Now we see that for the specific instance of w1 = w2 = . . . = wd−1 = 0 , and wd ̸= 0 w-
e get
(
dwdk1dxd−1
1 = dwdkidxd−1
i , for i = 2, . . . , n,
Pn
i=1 xi = 1.
That is (
k1dxd−1
1 = kidxd−1
i , for i = 2, . . . , n,
Pn
i=1 xi = 1.
From the first (n − 1) equations, we get that
xi = ζi
d−1
r k1d
kid
x1,
for some ζi a (d − 1)-th root of unity, for all i = 2, n. Now, for all the (d − 1)n−1 choices of the ζi’s we plug in the expressions of the xi’s to the last equation, and we get
x1 1 +
n
X
i=2
ζi
d−1
r k1d
kid
!
= 1,
5

which has a unique solution in x1. So this particular system has indeed (d − 1)n−1 many complex solutions. The generic degree is the maximal possible degree among all choices of wi. Picking particular weights can only decrease the degree of the system. Now we have seen that the maximal degree is greater than or equal to the degree of this specific system with w1 = . . . = wd−1 = 0 and wd ̸= 0, which was (n − 1)d−1, but also by B ́ezout’s theorem states that the generic degree is less than or equa-
l to (d − 1)n−1, so we conclude that under the circumstances of the statement of the theorem, the degree of this system is exactly (d − 1)n−1.
Now, if we don’t condition on that wd ̸= 0, then we get the following result.
Proposition 3.2. Under the assumption that kij are real and non-zero the generalized utility function L(x1, x2, . . . , xn) has
(d − 1)n−1 + (d − 2)n−1 + . . . + 1n−1
complex non-degenerate critical points with respect to the constraint Pn
i=1 xi = 1. Here, non-degenerate means that no xi equals zero.
Proof. We will work recursively. There are two cases. Critical points arising from wd = 0 and from wd ̸= 0. For the latter case, by Theorem 3.1 we have (d − 1)n−1 non-degenerate critical points. In the former case, we just restricted to a degree (d − 1) utility function, where we repeat our arguments from Theorem 3.1 recursively, so we again split into two cases of wd−1 = 0 and wd−1 ̸= 0. So finally we get a total of
(d − 1)n−1 + (d − 2)n−1 + . . . + 1n−1.
critical points
Remark 3.3. We make the following observations.
• In the case of d = 2, we get back the well-known fact that when only considering the first two cumulants (the expected value and the variance), we get one critical point of the system.
• In the case of n = 2, we will always get d − 1 complex solutions (roots of a degree (d − 1) polynomial).
• If d is even, then we always have at least one real solution, because (d − 1)n−1 is odd, and complex solutions come in conjugate pairs.
Observe that if d is even and the leading term of L, that is wd
Pn
i=1 kidxd
i , is negative definite, then we get a global maximum. Otherwise, there is no global maximum.
Proposition 3.4. The generalized utility function L has a global maximum, if and only if d is even and all the dth order cumulants are of the same sign and wd has the opposite sign.
6

Example 3.5. Let us now consider a portfolio consisting of two assets, and assume that the utility function takes into account the first four cumulants of the returns. In this case, our statistical data matrix k = (kij) is a 2×4 matrix of real non-zero numbers. In this case, the system of critical equations looks like

 
 
P4
j=1 jwj k1j xj−1
1 = λ,
P4
j=1 jwj k2j xj−1
2 = λ,
x1 + x2 = 1.
One can find out, by for example using Macaulay 2 (see [1]), that before fixing the kij and the wj, this system gives rise to a degree 15, codimension 3 variety in the 8 + 4 + 2 + 1 = 15 dimensional space of the kij’s, wj’s, xi’s and λ. For fixed wj, we get a degree 7, codimension 7 variety. For fixed kij, this system gives rise to a degree 6, codimension 11 variety. Finally, when fixing both the kij’s and the wj’s, we get a degree 3 = (4 − 1)(2−1), zero-dimensional variety. Moreover, the leading -
form of the utility function L is equal to w4(k14x4
1 + k24x4
2). If this is negative definite, then we will have a global maximum of L.
3.1 Critical points at infinity
We have seen in the previous section that under mild assumptions on kij-s, the utility function L will always have (d − 1)n−1 complex critical points given that wd ̸= 0. In this section, we study those (kij)-s for which we will have fewer than (d − 1)n−1 critical points even if we assume that wd ̸= 0. Actually, we do not “lose” critical points; they merge or escape to infinity, so the number counted with multiplicity remains constant. The B ́ezout bound we used in the proof of Theorem 3.1 original-
ly holds for a system of homogeneous polynomials and acts as an upper bound for the non-homogeneous case. This is because of the following. If given a non-homogeneous system, we homogenize it using an extra variable y, and we get a homogeneous system with as many solutions as the product of the degrees. Now, each solution of the homogenized system is also a solution of the original non-homogeneous system by scaling it to get y = 1, unless the homogeneous solution is of the form such that y = 0. We-
 call such a solution a solution at infinity.
Now, if we analyze when our system 2 of critical equations loses solutions at infinity. By homogenizing the system 2 using the variable y we get
(Pd
j=1 jwj kij xj−1
i yd−j = λyd−1, for i = 1, . . . , n,
Pn
i=1 xi = y.
Now, setting y = 0, we get
(
wdkidxd−1
i = 0, for i = 1, . . . , n,
Pn
i=1 xi = 0.
Now, since wd ̸= 0 and kid ̸= 0, we get that the only solution at infinity is when all xi are zero.
7

4 The discriminant locus
We have established so far that under the assumptions we made, the number of complex critical points of L is constant, counting multiplicities, and equals (d−1)n−1. Moreover, critical points never get lost to infinity. In this section, we try to understand the locus of those wi-s, for which at least one of the critical points of L gains multiplicity. This locus is the discriminant locus of L. Let us denote by Cw,k ⊆ Cn+1
λ,x1...,xn the zero-dimensional variety of critical points defined by the equations in the system 2, which was
(
Pi(xi) − λ = 0, for i = 1, . . . , n,
Pn
i=1 xi − 1 = 0, (5)
where Pi(xi) = Pd
j=1 jwj kij xj−1
i . We aim to describe conditions on Cw,k so that the Jacobian of the system has a rank deficit. That is, condition on the wj’s and the kij, so Cw,k has singular points. First, we differentiate the polynomials of the above system with respect to λ, then with respect to x1, x2, . . . , xn, and we see that the Jacobian is
equal to

     
−1 ∂P1
∂x1 0 . . . 0
−1 0 ∂P2
∂x2 . . . 0
... ... ... . . . ...
−1 0 0 . . . ∂Pn
∂xn
0 1 1 ... 1

     
.
It has a rank deficit if it has a non-trivial kernel, so we need v = (v0, v2, . . . , vn) ∈ Cn+1 non-zero, such that Jac(Cw,k) · v = 0.
This translates to ( ∂Pi(xi)
∂xi vi = v0, for all i = 1, n,
Pn
i=1 vi = 0.
There are three cases to consider. First, if there are at least two partial derivatives that are zero, say ∂Pi(xi)
∂xi = ∂Pj (xj )
∂xj = 0, then setting v0 = vk = 0 k ̸= i, j and vj = vi ̸= 0
gives infinitely many non-zero vectors in the kernel. Now, suppose that exactly one of
the ∂Pi(xi)
∂xi -s is zero, then v0 must be zero, and as a consequence, all the vj-s must be
zero, with j ̸= i. But then the last condition forces vi it to become zero as well, thus producing the trivial solution. Lastly, suppose that none of the partial derivatives is zero. Then, to get a non-trivial solution, we must have that no vi is zero (because if one of the vi’s is zero, this forces v0 to be zero, but then all the other vi’s become zero
as well). We get that



vi = v0
∂ Pi (xi ) ∂xi
, for all i = 1, n,
Pn
i=1 vi = 0.
And plugging in the first n equations into the last one and dividing by v0, we get
n
X
i=1
1
∂Pi(xi) ∂xi
= 0.
8

Now multiplying this equation by Qn
i=1
∂Pi(xi)
∂xi , we get
n
X
i=1
Y
j̸=i
∂ Pj (xj )
∂xj
= 0.
To summarize this, we have the following theorem.
Theorem 4.1. A critical point, (x1, x2, . . . , xn), of the utility function L has a multiplicity if and only if it satisfies
n
X
i=1
Y
j̸=i
∂ Pj (xj )
∂xj
= 0, (6)
where Pi(xi) = Pd
j=1 jwj kij xj−1
i.
Proof. The proof of this theorem follows from the discussion preceding it; the only thought to be added is that in the case when two partials are zero, say ∂Pi(xi)
∂xi = ∂Pj (xj )
∂xj = 0, the equation 6 is satisfied automatically.
Now, to get the locus of those kij and wj for which L has a critical point with a multiplicity, namely the discriminant locus of L, one has to eliminate the xi from the equation 6. Let us see this in the following example.
Example 4.2. Let us consider the portfolio consisting of two assets, and we want to optimize an order four utility function L. The system of equations defining the critical
points of L is the following,

 
 
P1(x1) = λ,
P2(x2) = λ,
x1 + x2 = 1,
where Pi(xi) = P4
j=1 jwj kij xj−1
i . Now, based on Theorem4.1 in order to have critical points with multiplicity, we need in addition that
∂P1
∂x1
+ ∂P2
∂x2
= 0.
Adding this to the system and eliminating first λ, then x1, and x2 we get the following irreducible polynomial in variables kij and wj, of degree 8, with 128 terms
9k2
12k2
13w2
2w2
3 + 18k12k2
13k22w2
2w2
3 + . . . − 2592k13k14k2
24w3w3
4 − 1728k2
14k2
24w4
4,
defining the discriminant locus of L.
5 The feasible portfolio variety
So far, we have approached portfolio optimization by optimizing the utility function
L = Pd
j=1 wjκj, which incorporates the cumulants of the portfolio P = Pn
i=1 xiXi,
9

with respect to the constraint that Pn
i=1 xi = 1. A different way is to first consider the so-called feasible portfolio set of points with coordinates equal to the possible cumulants
of the portfolio depending on the choice of the xi’s, and optimize the linear function
Pd
j=1 wjyj on it.
Remember that the jth cumulant of our portfolio was
κj(P ) =
n
X
i=1
xj
i kij ,
where we denoted kij = κj(Xi). Then we have the following definition.
Definition 5.1. We call the feasible portfolio variety Pk the closure of the image
of the hyperplane Pn
i=1 x1 = 1 under the map
(
φ : Cn → Cd,
(x1, x2 . . . , xn) 7→ (Pn
i=1 xj
i kij )j=1,d.
In order to incorporate that Pk is the image of the hypersurface Pn
i=1 xi = 1 under φ, we instead look at Pk as the closure of the image of the map
(
φ′ : Cn−1 → Cd,
(x1, x2, . . . , xn−1) 7→ (Pn−1
i=1 xj
i kij + (1 − Pn−1
i=1 xi)j knj )j=1,d.
Example 5.2. A plot of the feasible portfolio curve (dimension n − 1 = 2 − 1 = 1) in the case of two assets (n = 2) of order three (d = 3), for the following parametrization of Pk
x1 7→ (2x1 + 5 (1 − x1) , x2
1 + 2 (1 − x1)2 , 7x3
1 + (1 − x1)3),
is displayed on the left of Figure 1. In this case, Pk is of degree 3 = d · . . . · (d − n + 2), and is generated by the vanishing of the polynomials

 
 
36y2
2 + 18y1y3 + 367y1 − 561y2 + 81y3 − 1028 = 0,
6y1y2 + 23y1 − 63y2 + 9y3 − 58 = 0,
y2
1 − 6y1 − 3y2 + 11 = 0.
A plot of the feasible portfolio surface (dimension n − 1 = 3 − 2 = 2) in the case of three assets (n = 3) of order three (d = 3), for the following parametrization of Pk
(x1, x2) 7→ (2x1 −3x2 +5(1−x1 −x2), x2
1 +5x2
2 −7(1−x1 −x2)2, −3x3
1 +x3
2 +(1−x1 −x2)3),
is displayed on the right of Figure 1. In this case, Pk is of degree 6 = 3 · 2 = d · . . . · (d − n + 2) and it is generated by the vanishing of the polynomial
1468y6
1 − 5280y5
1 + 46512y4
1y2 + 229584y4
1 + . . . + 6234864y2 + 1303344y3 − 2752336.
We used Macaulay 2 (see [1]) for the computations and Desmos (https: // www. desmos. com ) for the pictures.
We want to study the basic geometric properties (dimension and degree) of Pk, for generic parameters kij.
10

Figure 1: On the left, a two-asset order three feasible portfolio curve. On the right, a three-asset order three feasible portfolio surface.
5.1 The dimension of Pk
We suppose that d ≥ n − 1. We want to show that for generic choices of kij, the image
of the n − 1 dimensional hypersurface defined by Pn
i=1 xi = 1 will be n − 1 dimensional
inside Cd. For this, we pick a generic point on Pk parametrized by a generic choice of (x1, x2, . . . , xn) and we compute the Jacobian of the map at this point and show that it is of full rank. For this, we compute the derivatives and we get that for i = 1, . . . , n − 1
∂φ′
∂xi
=

jxj−1
i kij − j 1 −
n−1
X
i=1
xi
!j−1
knj


j=1,d
.
If we denote 1 − Pn−1
i=1 xi by xn, then we get that
∂φ′
∂xi
= j xj−1
i kij − xj−1
n knj j=1,d .
Now, to see that Jac(φ′) is generically of full rank, we need one specific instance of the kij’s and the xi’s so that we get a full rank Jacobian (this is to see that the variety of k’s and x’s for which all the maximal minors vanish is a proper codimension at least one variety). First, choose x1, x2, . . . , xn−1, such that xn = 1 − Pn−1
i=1 xi = 0 and kn1 = 0 (this choice violates the non-zero assumption but is used only to show the existence of one full-rank instance), so get the row vectors
∂φ′
∂xi
= j xj−1
i kij j=1,d , for i = 1, n − 1.
These row vectors are independent if and only if the following row vectors are indepen
dent
xj−1
i kij j=1,d , for i = 1, n − 1.
11

Now, when choosing all kij = 1, we get a (n − 1) × d Vandermonde matrix, which is of full rank if all the xi’s are distinct. This can be easily realized. To summarize this we get the following statement.
Proposition 5.3. For generic values of the cumulants k = (kij)ij, the feasible portfolio variety Pk is (n − 1) dimensional.
5.2 The degree of Pk
To get the degree of Pk we will have to intersect it with a generic complementary dimensional (by Proposition5.3 that is equal to d − (n − 1)) hypersurface and count the number of intersection points. Let H ⊆ Cd be a d − (n − 1) dimensional generic hypersurface defined by the
vanishing of

    
    
Pd
j=1 c1,j yj = c1,0,
Pd
j=1 c2,j yj = c2,0,
...
Pd
j=1 cn−1,j yj = cn−1,0.
Recall that Pk is the closure of the image of the hyperplane, defined by Pn
i=1 xi = 1,
under the map
(
φ : Cn → Cd,
(x1, x2, . . . , xn) 7→ (Pn
i=1 kij xj
i )j=1,d.
Now, H ∩ Pk is given by

      
      
Pd
j=1 c1,j
Pn
i=1 kij xj
i = c1,0,
Pd
j=1 c2,j
Pn−1
i=1 kij xj
i = c2,0,
...
Pd
j=1 cn−1,j
Pn−1
i=1 kij xj
i = cn−1,0,
Pn
i=1 xi = 1.
(7)
After homogenizing using y we get

      
      
Pd
j=1 c1,j
Pn
i=1 kij xj
i yd−j = c1,0yd,
Pd
j=1 c2,j
Pn−1
i=1 kij xj
i yd−j = c2,0yd,
...
Pd
j=1 cn−1,j
Pn−1
i=1 kij xj
i yd−j = cn−1,0yd,
Pn
i=1 xi = y.
At infinity, this system has a positive-dimensional solution set, namely the solution set
of (Pn
i=1 kij xj
i = 0,
Pn
i=1 xi = 0.
12

Therefore, we must rewrite system 7 in an equivalent form to prevent this from happening. For l = 1, . . . , n − 1 let us denote
Pl(x1, . . . , xn) = cl,d
n
X
i=1
ki,dxd
i + cl,d−1
n
X
i=1
ki,d−1xd−1
i + . . . + cl,1
n
X
i=1
ki,1xi − cl,0.
We can observe now that all degree k terms of the Pl’s are scalar multiples of each other, for all k = 0, . . . , d. By multiplying with non-zero scalars and adding the equations of the system 7, we do not change the solution set of it, so we get that system 7 is equivalent to

      
      
P1 = 0,
Q2 := c1dP2 − c2,dP1 = (c1,dc2,d−1 − c2,dc1,d−1) Pn
i=1 ki,d−1xd−1
i + l.o.t = 0,
...
Qn−1 := c1,dPn−1 − cn−1,dP1 = (c1,dcn−1,d−1 − cn−1,dc1,d−1) Pn
i=1 ki,d−1xd−1
i + l.o.t = 0,
Pn
i=1 xi = 1.
Observe that here again all degree k terms of the Ql’s are scalar multiples of each other, for all k = 0, . . . , d − 1, so we repeat the same process. By repeating this, finally, we get that system 7 is equivalent to

      
      
m1,d(Pn
i=1 ki,dxd
i ) + m1,d−1(Pn
i=1 ki,d−1xd−1
i ) + lower order terms = 0,
m2,d−1(Pn
i=1 ki,d−1xd−1
i ) + m2,d−2(Pn
i=1 ki,d−2xd−2
i ) + lower order terms = 0,
...
mn−1,d−n+2(Pn
i=1 ki,d−n+2xd−n+2
i ) + mn−1,d−n+1(Pn
i=1 ki,d−n+1xd−n+1
i ) + lower order terms = 0,
Pn
i=1 xi = 1,
with some corresponding generic coefficients ml,k ∈ R.
Now if we denote vl := Pn
i=1 ki,lxl
i, for l = d, d − 1, . . . , d − n + 2, then the first n − 1 equations of the above system form a generic linear system, with a unique solution, in the unknowns vl. So, in order to find the xi solutions to the above system, first we need to find the solutions to

      
      
Pn
i=1 ki,dxd
i = vd,
Pn
i=1 ki,d−1xd−1
i = vd−1,
...
Pn
i=1 ki,d−n+2xd−n+2
i = vd−n+2,
Pn
i=1 xi = 1,
for generic vl’s. Now, by Bezout’s theorem, we get at most d · (d − 1) · . . . · (d − n + 2) · 1 solutions. And this is the generic degree of this system because this bound can be reached for the specific instance of all vl = 1, and ki,l = δi,(d−l+1) for all i ∈ {1, . . . , n} and l ∈ {d, . . . , d − n + 2}, where δ is the Kronecker delta. Indeed, for this instance of
13

parameters we get

      
      
xd
1 = 1,
xd−1
2 = 1,
...
xd−n+2
n−1 = 1,
Pn
i=1 xi = 1,
From the first equation, x1 can be any of the dth-roots of unity, from the second equation, x2 can be any of the (d − 1)th-roots of unity, etc. Finally, from the last equation, xn can be determined uniquely. To summarize this we have the following theorem.
Theorem 5.4. For generic values of the cumulants k = (kij)ij, the feasible portfolio variety Pk has degree
d · (d − 1) · . . . · (d − n + 2).
Remark 5.5 (Further directions). Beyond the necessity of testing these generalized portfolios to concrete real-world data, further theoretical aspects should be studied. Some of these are the study of more complex geometric and topological features of the feasible portfolio variety; understanding the special portfolios lying on the discriminant; results on the number of real solutions – in view of the connected components of the complement of the discriminant; existence, and number of positive sol-
utions; understanding solutions in (0, 1); etc.
References
[1] Grayson, D. R., Stillman, M. E., Macaulay2, a software system for research in algebraic geometry, 2002.
[2] Leo ́n-Camacho, B., Perote, J., Mora-Valencia, A., Zapata-Quimbayo, C. A., ESG Portfolio Optimization: The Relevance of Higher Order Moments, Corporate Social Responsibility and Environmental Management, 2025.
[3] Mandal, P. K., Thakur, M., Higher-order moments in portfolio selection problems: A comprehensive literature review, Expert Systems with Applications, 238 (2024), 121625.
[4] Markowitz, H., Portfolio Selection, The Journal of Finance, 7 (1952), 77-91.
[5] Zhao, Y., Wang, J., Wang, Y., Lv, M., How to optimize modern portfolio theory? A systematic review and research agenda, Expert Systems with Applications, 263 (2025), 125780.
14

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:05.115Z
- **Text Length:** 28298 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 14 of 14
