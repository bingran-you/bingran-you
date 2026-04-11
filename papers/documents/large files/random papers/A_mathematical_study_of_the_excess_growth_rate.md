# PDF Document: Campbell and Wong - 2025 - A mathematical study of the excess growth rate.pdf

**File Path:** Campbell and Wong - 2025 - A mathematical study of the excess growth rate.pdf

**Processed Date:** 2026-02-10T18:18:26.992Z

**File Size:** 833.35 KB

**Total Pages:** 54

**Extracted Pages:** 54

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3485

**Title:** A mathematical study of the excess growth rate

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

A MATHEMATICAL STUDY OF THE EXCESS GROWTH RATE
STEVEN CAMPBELL AND TING-KAM LEONARD WONG
Abstract. We study the excess growth rate—a fundamental logarithmic functional arising in portfolio theory—from the perspective of information theory. We show that the excess growth rate can be connected to the Re ́nyi and cross entropies, the Helmholtz free energy, L. Campbell’s measure of average code length and large deviations. Our main results consist of three axiomatic characterization theorems of the excess growth rate, in terms of (i) the relative entropy, (ii) the gap in Jensen’s inequali-
ty, and (iii) the logarithmic divergence that generalizes the Bregman divergence. Furthermore, we study maximization of the excess growth rate and compare it with the growth optimal portfolio. Our results not only provide theoretical justifications of the significance of the excess growth rate, but also establish new connections between information theory and quantitative finance.
1. Introduction
This paper offers a mathematical study of the excess growth rate that originated from portfolio theory and, as we will show, has rich connections with information theory and geometry, probability, and statistical physics. We aim to: (i) demonstrate these relations; (ii) formulate and prove axiomatic characterization theorems of the excess growth rate; and (iii) study maximization of the (expected) excess growth rate. To motivate the definition of the excess growth rate, consider n ≥ 1 financial as-
sets, such as stocks, whose prices are strictly positive. The case n = 1 is both financially and mathematically trivial, but is included for completeness. Throughout this paper, we denote the closed and open unit simplex in Rn by
(1.1) ∆n :=
(
x ∈ [0, 1]n :
n
X
i=1
xi = 1
)
, ∆◦
n :=
(
x ∈ (0, 1]n :
n
X
i=1
xi = 1
)
,
where x = (x1, . . . , xn).1 For a given holding period like a month, let π = (π1, . . . , πn) ∈ ∆n be the vector of initial portfolio weights, so that πi ≥ 0 is the ini
tial proportion of wealth invested in asset i. By construction, we have Pn
i=1 πi = 1. Suppose Ri ∈ (0, ∞) is the gross return of asset i over the holding period. That is,
an investment of one dollar yields Ri dollars at the end of the holding period. Then
Pn
i=1 πiRi is the gross return of the portfolio, and log (Pn
i=1 πiRi) is its log return.
By Jensen’s inequality, this is greater than or equal to Pn
i=1 πi log Ri, the weighted average log return of the assets. The excess growth rate Γ(π, R) is defined as the gap log (Pn
i=1 πiRi) − Pn
i=1 πi log Ri.
Key words and phrases. Excess growth rate, axiomatic characterization, relative entropy, Jensen gap, logarithmic divergence, functional equation, large deviation. 1We adopt the convention that ∆1 = ∆◦
1 := {1} and thus use (0, 1] in the definition of ∆◦n.
1
arXiv:2510.25740v1 [cs.IT] 29 Oct 2025

2 STEVEN CAMPBELL AND TING-KAM LEONARD WONG
For technical purposes, in Definition 1.1 below we shall allow Ri = 0 whenever πi = 0. For x ∈ [0, ∞)n, let supp(x) ⊆ [n] := {1, . . . , n} be the support of x defined by
(1.2) supp(x) := {i ∈ [n] : xi > 0}.
(Our notations are consistent with those in Leinster’s book [38].) Define
(1.3) Dn := {(π, R) ∈ ∆n × [0, ∞)n : supp(π) ⊂ supp(R)}
as well as the slice
Dn(π | ·) := {R ∈ [0, ∞)n : (π, R) ∈ Dn}.
(1.4)
Definition 1.1 (Excess growth rate). For n ≥ 1 and (π, R) ∈ Dn, we define the excess growth rate of R weighted by π by
(1.5) Γ(π, R) := log


X
i∈supp(π)
πiRi

−
X
i∈supp(π)
πi log Ri.
An empirical illustration using US stock data is given in Figure 1 in Section 2.1. By an abuse of notation (following again [38]), we use the same symbol Γ for each of the functions Γ = Γn : Dn → R+ := [0, ∞), n ≥ 1. Note that similar conventions are used throughout information theory. For example, the symbol H(p ∥ q) is used to denote the relative entropy regardless of the dimension. We write Γn (and similarly for other quantities) if there is a need to emphasize the dimension. Since Ri > 0 whene-
ver i ∈ supp(π), the right hand side of (1.5) is well-defined and finite. We may express the excess growth rate probabilistically as
(1.6) Γ(π, R) = φ(Eπ[R]) − Eπ[φ(R)],
where R is a non-negative random variable with probability mass function Pπ(R = Ri) = πi, and φ(·) = log(·) is the logarithm. Since log(·) is strictly concave, Γ(π, R) = 0 if and only if R is constant on supp(π). When n = 1 the simplex ∆n reduces to a singleton, and the excess growth rate vanishes identically.
Remark 1.2.
(i) Note that
(1.7) eΓ(π,R) =
P
i∈supp(π) πiRi
Q
i∈supp(π) Rπi
i
is the ratio between the arithmetic and geometric means of the gross returns weighted by π. The non-negativity of Γ(π, R) can also be seen from the inequality of arithmetic and geometric means. (ii) Let (π, R) ∈ Dn and define r = log R := (log Ri)1≤i≤n ∈ [−∞, ∞)n. Thus, ri = log Ri is the log return of asset i and conversely R = er := (eri )1≤i≤n ∈ Dn(π | ·) (we let log x = −∞ if x ≤ 0 and e−∞ = 0). The excess growth rate can be expressed in terms of the log returns as
(1.8) γ(π, r) := log


X
i∈supp(p)
πieri

−
X
i∈supp(p)
πiri,

A MATHEMATICAL STUDY OF THE EXCESS GROWTH RATE 3
which is the difference between the exponential mean2 log P
i∈supp(p) πieri
and the arithmetic mean of r weighted by π. In Section 3.2 we briefly discuss the exponential mean as a member of the family of quasiarithmetic means. Note that γ(π, r) is convex in r when π is fixed, and concave in π when r is fixed. Taylor expanding (1.8) about r = 0 shows that
(1.9) γ(π, r) =
X
i∈supp(p)
πir2
i−


X
i∈supp(p)
πiri


2
+o


X
i∈supp(p)
r2
i

.
The leading order term, which is quadratic in r, is the variance of r weighted by π. In Section 3.3 we relate this expansion with the Fisher–Rao metric. (iii) The excess growth rate can be extended beyond the discrete setting. In particular, (1.6) makes sense if we let π be a probability measure on a measurable space X , and R be a non-negative random variable on X such that R > 0 π-almost surely. In this paper we focus on the discrete setting.
It is also useful to think of the excess growth rate as a divergence between the initial prices X and the final prices Y. As we shall see, this is analogous to the relative entropy which is a divergence between a pair of probability distributions.
Definition 1.3 (Excess growth rate as a divergence). For n ≥ 1 and π ∈ ∆n, we define Γπ(· ∥ ·) : D(π | ·) × D(π | ·) → R+ by
(1.10) Γπ(Y ∥ X) := log


X
i∈supp(π)
πi
Yi
Xi

−
X
i∈supp(π)
πi log Yi
Xi
,
where X = (X1, . . . , Xn) and Y = (Y1, . . . , Yn).
Clearly, we have Γπ(aY ∥ aX) = Γπ(Y ∥ X) for a > 0. This is a special case of num ́eraire invariance which will be proved in Proposition 2.3 below. It is also clear that generally Γπ(Y ∥ X) ̸= Γπ(X ∥ Y). Financially, this means that the excess growth rate is not invariant under time reversal, as expected. To the best of our knowledge, the concept of “excess growth” in finance was first introduced (in a continuous time set-up using stochastic calculus) in [32]. Later, it became an essential concept-
 in stochastic portfolio theory [26, 30]. Independently, the authors of [8] introduced the quantity Γ(π, R) and called it the diversification return. Our definition follows that of [48]. Also see [54] for a textbook treatment in which the term volatility effect is used. Further discussion of the related literature will be given in Section 2.1, where we establish several properties of the excess growth rate, including a new chain rule (Theorem 2.5), and briefly explain some financial applications. -
The excess growth rate does not only appear in finance. In the rest of Section 2, we show that it can be readily linked to various concepts in information theory, statistical physics and probability. In particular, we show:
• the excess growth rate can be interpreted in terms of the Helmholtz free energy, and has a variational representation (Section 2.2);
• the difference between L. Campbell’s measure of average code length [15] and Shannon’s one can be expressed in terms of the excess growth rate (Section 2.3);
2This is also the (weighted) log–sum–exp function which is popular in machine learning.

4 STEVEN CAMPBELL AND TING-KAM LEONARD WONG
• the excess growth rate emerges in a large deviation principle of the scaled Dirichlet distribution (Definition 2.10), analogous to how the relative entropy features in Sanov’s theorem (Section 2.4).
Several more connections, including correspondences with the Re ́nyi divergence and cross-entropy, and the logarithmic divergence [49, 50, 63] in information geometry, can also be found in the paper. In fact, the excess growth rate can be expressed directly in terms of the relative entropy using algebraic operations on the simplex in compositional data analysis (Lemma 3.4). Nevertheless, our body of results go well beyond this identity. In Section 3, we present a collection of three novel axiomati-
c characterization theorems that uniquely determine the excess growth rate (possibly up to a multiplicative constant) based on natural invariance and analytic properties. Axiomatic characterizations of various information-theoretic quantities have been studied by many researchers, beginning with Shannon himself [59, Theorem 2] (another classic is R ́enyi’s paper [56]). To give a flavor of some of the ideas involved, consider the fundamental additive property of the Shannon entropy:
H(p ⊗ q) = H(p) + H(q),
where p⊗q denotes the product distribution. This property is closely related to the functional equation f (xy) = f (x)+f (y), x, y > 0, whose general solution (assuming only that f : (0, ∞) → R is Lebesgue measurable) is f (x) = c log x, c ∈ R.3 A comprehensive mathematical study of axiomatic characterizations of information measures and related quantities, as well as detailed historical discussions, can be found in Leinster’s book [38] which is primarily motivated by diversity measures in biology-
. In fact, Leinster’s book provided the initial impetus for the development of this paper.4 For more recent axiomatic characterizations we refer the reader to [9] and the references therein. Our three characterization theorems highlight different aspects of the excess growth rate and further reinforce its importance. They also differ from existing axiomatic characterizations of the exponential mean (see Remark 1.2 and a discussion in Section 3.2). We state the main ideas of our characterizations a-
s follows:
• Our first characterization (Theorem 3.20), proved in Section 3.1, shows that the excess growth rate is completely determined by the financial properties established in Section 2.1. Our proof is based on a characterization of relative entropy, its relation with the excess growth rate (Lemma 3.4), as well as a delicate analysis of boundary values. • In Section 3.2, we provide an axiomatic characterization (Theorem 3.13) of the gap in Jensen’s inequality (1.6), for a general “generating function” φ-
, and show in this setting that the logarithmic case φ(·) = c log(·), which leads to the excess growth rate, is characterized by num ́eraire invariance. • In Section 3.3, we exploit the fact that the excess growth rate is a member of the family of logarithmic divergences introduced by Pal and the second author [49] (this is analogous to the fact that the relative entropy on the simplex is a Bregman divergence). We show in Theorem 3.20 that the excess growth rate is the unique logarithmic divergenc-
e which is perturbation
3This functional equation is equivalent to Cauchy’s equation (3.13) which plays an important role in the proof of our second characterization theorem. 4We thank Martin Larsson for bringing this reference to our attention.

A MATHEMATICAL STUDY OF THE EXCESS GROWTH RATE 5
invariant; this is closely related to num ́eraire invariance. A by-product of this result is a characterization of (negative) cross-entropy within the family of exponentially concave functions on the simplex.
The significance of the excess growth rate in portfolio selection leads naturally to maximization of this quantity. In Section 4 we study two versions of this problem, first in a deterministic setting (maxπ∈∆n γ(π, r) where r is fixed), then in a probabilistic setting where we maximize the expected excess growth rate E[γ(π, r)] assuming r is a random vector. In the deterministic case, we derive an explicit characterization of the solution and, via a variational representation, link it with the per-
spective function in convex analysis. In the probabilistic case, we derive a first-order condition for the optimizer and compare this problem with the classical growth optimal portfolio [17, Chapter 16].
As discussed in Remark 1.4 below, information theory and quantitative finance share deep connections. In this paper, we show that the excess growth rate fosters new synergies between the two fields. Our results suggest many directions for future research, some of which are discussed in Section 5.
Remark 1.4 (Information theory and quantitative finance). Interactions between information theory and quantitative finance began soon after Shannon’s inaugural paper [59]. In [36], Kelly showed that in repeated investment or gambling situations, the value of side information can be quantified by mutual information, a fundamental information-theoretic quantity that arises in the definition of channel capacity. Kelly’s work (and that of Breiman [14] among others) led to the concept of growth optimal-
 portfolio, also called the num ́eraire portfolio, which has profound implications in finance [40]. Intuitively, optimal investment and information theory are intimately related because successful investment and efficient data transmission/extraction both hinge on predicting the future (asset returns or source alphabets). Among the many subsequent works, we highlight [2] which investigates the asymptotic equipartition property in the context of growth optimal investment, and the universal portfoli-
o [17] which is the financial analogue of universal coding. In [47], it was shown that regret guarantees of universal portfolio algorithms imply time-uniform concentration inequalities for bounded random variables. For further details and other classical connections, we refer the reader to Chapters 6 and 16 of [17]. Recently, the financial perspective on information theory has been fruitfully extended to optimal hypothesis testing using e-values [37, 55].
2. Excess growth rate: properties and interpretations
In this section, we study several properties of the excess growth rate, and show that it arises naturally not only in finance but also in statistical physics, information theory, and probability theory.
2.1. Basic properties and financial intuition. We establish some mathematical properties of the excess growth rate, some of which were given in [48]. All of these properties have clear financial meanings that will be carefully explained. In Section 3.1, we show that these properties (as well as Lebesgue measurability) uniquely characterize the excess growth rate up to a multiplicative constant. We begin with two properties that are immediate from the definition. Given x ∈ Rn and a permutation σ of-
 [n], we define
xσ := (xσ(1), . . . , xσ(n)) ∈ Rn.

6 STEVEN CAMPBELL AND TING-KAM LEONARD WONG
Proposition 2.1 (Permutation invariance). For any (π, R) ∈ Dn and permutation σ of [n], we have Γ(πσ, Rσ) = Γ(π, R).
Proposition 2.2 (Dependence on support). For π ∈ ∆n and R, R′ ∈ Dn(π | ·), we have Γ(π, R) = Γ(π, R′) if Ri = R′
i for i ∈ supp(π). In particular, Γ(π, R) = 0 if R is constant on supp(π).
Together, Propositions 2.1 and 2.2 state that the excess growth rate is invariant under relabeling the assets (and their returns), and depends only on the assets whose holdings are strictly positive.
Proposition 2.3 (Num ́eraire invariance). For (π, R) ∈ Dn and a > 0, we have Γ(π, aR) = Γ(π, R). Equivalently, we have Γπ(bY ∥ aX) = Γπ(Y ∥ X) for any X, Y ∈ Dn(π | ·) and a, b > 0.
Proof. From (1.5) and the additive property of logarithms, we have
Γ(π, aR) = log


X
i∈supp(π)
πi(aRi)

−
X
i∈supp(π)
πi log(aRi)
= log


X
i∈supp(π)
πiRi

 + log a −
X
i∈supp(π)
πi log Ri − log a
= Γ(π, R). □
Here is the financial interpretation of Proposition 2.3. Suppose that that we express the gross return Ri of asset i ∈ supp(π) as Yi
Xi , where Xi and Yi are, respectively, the initial and final prices. For concreteness, let us fix Xi and Yi as the dollar values. In financial terms, we say that the num ́eraire is cash (with respect to a fixed currency). Now, suppose that we measure prices in terms of another asset (e.g. the value of the S&P500 Index) whose price moves from Q to Q′, both of which are assumed to be positive. That is, we define the relative prices of asset i by X ̃i = Xi/Q and Y ̃i = Yi/Q′; these are the prices un-
der the new num ́eraire. Then, the relative gross return is given by
(2.1) R ̃i :=
Y ̃i
X ̃i
= Yi/Q′
Xi/Q = Q
Q′
Yi
Xi
=Q
Q′ Ri.
Thus, we have R ̃ := (R ̃1, . . . , R ̃n) = aR, where a = Q
Q′ > 0. Num ́eraire invariance states that the excess growth rate is independent of the choice of the num ́eraire. This property makes the excess growth rate an appropriate measure of relative volatility which is different from the more familiar absolute volatility. For example, suppose that all assets fall by 50% in dollar value. Then, the market is volatile in absolute terms, but there is no relative volatility. In particular, all portfolios of these assets earn the same return −50% regardless o-
f their allocation. By num ́eraire invariance, for each n, the function Γ : Dn → R+ is characterized by its restriction to
(2.2) An := Dn ∩ (∆n × ∆n).
We define the slice An(π | ·) analogously (see (1.9)). Specifically, for (π, R) ∈ Dn, we have
(2.3) Γ(π, R) = Γ(π, Cπ[R]),

A MATHEMATICAL STUDY OF THE EXCESS GROWTH RATE 7
where Cπ : Dn(π | ·) → An(π | ·) is the closure with respect to (the support of) π, defined by
(2.4) (Cπ[x])i := xi/ P
j∈supp(π) xj , if i ∈ supp(π), 0, otherwise.
If the relevant support is [n] (so that x ∈ (0, ∞)n), we simply write C[x] which is an element of ∆◦n. We introduce several related algebraic operations for later use:
• Hadamard (componentwise) product:
(2.5) (xy)i := xiyi, x, y ∈ Rn.
• Componentwise inverse:
(x−1)i := 1
xi
, x ∈ (0, ∞)n.
• Perturbation operation with respect to π ∈ ∆n:
x ⊕π y := Cπ[xy], x, y ∈ An(π | ·).
We write x ⊕ y when the support is [n]. • Powering operation:
α ⊗ x := C[(xα
i )1≤i≤n], (x, α) ∈ ∆◦
n × R.
It is well known in compositional data analysis [1, 24, 25] that the open simplex ∆◦n becomes an (n − 1)-dimensional real vector space if we regard ⊕ as vector addition and ⊗ as scalar multiplication. The additive identity (zero element) is the barycenter e ̄ = e ̄n := ( 1
n,..., 1
n ), and vector subtraction is given by
x ⊖ y := C[xy−1], x, y ∈ ∆◦
n.
For a general π ∈ ∆n (whose support may be a strict subset of [n]), and for x, y ∈ An(π | ·), we define the generalized difference x ⊖π y ∈ An(π | ·) by
(x ⊖π y)i := (xi/yi)/ P
j∈supp(π)(xj /yj ), if i ∈ supp(π), 0, otherwise.
The chain rules, to be stated next, tell us how to decompose the excess growth rate of a composite portfolio, i.e., a portfolio of portfolios. These are the key properties in our first characterization of the excess growth rate in Section 3.1. Let n, k1, . . . , kn ≥ 1 be integers and let
π ∈ ∆n, p1 ∈ ∆k1 , . . . , pn ∈ ∆kn .
Write pi = (pi1, . . . , pi
ki ) and p = (p1, . . . , pn). The composite distribution π ◦ p is
π ◦ p := (π1p1
1, . . . , π1p1
k1 , . . . , πnpn
1 , . . . , πnpn
kn )
= (π1p1, . . . , πnpn) ∈ ∆k1+···+kn .
(2.6)
We index its components by (π, p)i,j = πipi
j, where (i, j) ∈ [n] × [ki]. Financially, we may think of the i-th conditional distribution pi as a portfolio consisting of ki assets, and the composite portfolio holds the n portfolios as individual assets. We allow some of the assets to overlap. For example, the capital corresponding to the weights p11 and p21 can be invested in the same asset. This can be enforced by letting
the gross returns R11 and R12 be equal. The following version of the chain rule was formulated in [48]. Throughout the paper, we denote the Euclidean inner product by ⟨x, y⟩.

8 STEVEN CAMPBELL AND TING-KAM LEONARD WONG
Proposition 2.4 (Chain rule (first version)). Let n, k1, . . . , kn ≥ 1,
π ∈ ∆n, p = (p1, . . . , pn) ∈ ∆k1 × · · · × ∆kn ,
and let
R = (R1, . . . , Rn) ∈
n
Y
i=1
Dki (pi | ·).
Denote
⟨⟨p, R⟩⟩ := (⟨p1, R1⟩, . . . , ⟨pn, Rn⟩) ∈ (0, ∞)n.
Then
Γ(π ◦ p, R) = Γ(π,⟨⟨p, R⟩⟩) +
X
i∈supp(π)
πiΓ(pi, Ri).
(2.7)
Consider a portfolio of k1 + · · · + kn assets with weights π ◦ p. Its excess growth rate is equal to Γ(π ◦ p, R). The chain rule states that we may decompose it as a sum of two parts. First, consider the portfolio of portfolios, where “asset i” is the i-th portfolio with gross return ⟨pi, Ri⟩. This gives the excess growth rate Γ(π,⟨⟨p, R⟩⟩). Note that the gross returns Ri
j of the individual “atomic” assets enter indirectly through ⟨⟨p, R⟩⟩ (in [38] this property is called modularity). The second term is the weighted sum of the excess growth rates Γ(pi, Ri) of the individual portfolios. The reader should note that this property is reminiscent of the chain rule of relative entropy (see (3.4)). The precise algebraic relationships between the relative entropy and excess growth rate are given in Lemma 3.4.
Proof of Proposition 2.4. By definition of Γ(π ◦ p, R), we have
Γ(π ◦ p, R)
= log


X
i∈supp(π)
X
j ∈supp(pi )
πipi
j Ri
j

−
X
i∈supp(π)
X
j ∈supp(pi )
πipi
j log Ri
j.
log


X
i∈supp(π)
πi⟨pi, Ri⟩

−
X
i∈supp(π)
πi


X
j ∈supp(pi )
pi
j log Ri
j


= log


X
i∈supp(π)
πi⟨pi, Ri⟩

−
X
i∈supp(π)
πi log⟨pi, Ri⟩
+
X
i∈supp(π)
πi

log⟨pi, Ri⟩ −
X
j ∈supp(pi )
pi
j log Ri
j


= Γ(π,⟨⟨p, R⟩⟩) +
X
i∈supp(π)
πiΓ(pi, Ri). □
Our characterization theorem in Section 3.1 requires a more general version of the chain rule. To motivate it, we extend the financial context of (2.4). Now, suppose that the n portfolios hold assets in n countries with different currencies (or, more generally, different num ́eraires). To compute the excess growth rate of the composite portfolio, we need to express all returns using a common currency (num ́eraire). In the statement below, we think of ai ≥ 0 as the conversion factor

A MATHEMATICAL STUDY OF THE EXCESS GROWTH RATE 9
for the assets in the i-th portfolio; when ai > 0, it plays the role of the factor Q
Q′
in (2.1).
Theorem 2.5 (Chain rule (general)). Let n, k1, . . . , kn ≥ 1,
π ∈ ∆n, p = (p1, . . . , pn) ∈ ∆k1 × · · · × ∆kn ,
R = (R1, . . . , Rn) ∈
n
Y
i=1
Dki (pi | ·) and a = (a1, . . . , an) ∈ Dn(π | ·).
Define
a ◦ R := (a1R1, . . . , anRn) ∈ Dk1+···+kn (π ◦ p | ·).
Then, we have
(2.8) Γ(π ◦ p, a ◦ R) = Γ(π, a⟨⟨p, R⟩⟩) +
X
i∈supp(π)
πiΓ(pi, Ri).
Here a⟨⟨p, R⟩⟩ is the componentwise product (see (2.5)).
Proof. The proof is similar to that of Proposition 2.4, and proceeds by expanding
Γ(π ◦ p, a ◦ R)
= log


X
i∈supp(π)
X
j ∈supp(pi )
πipi
j aiRi
j

−
X
i∈supp(π)
X
j ∈supp(pi )
πipi
j log(aiRi
j ).
We omit the details of the computation. □
Remark 2.6. The general chain rule contains as special cases the first chain rule (Proposition 2.4) and the num ́eraire invariance property (Proposition 2.3). To recover the first chain rule, let a1 = · · · = an = 1. To recover the nume ́raire invariance property, let k1 = · · · = kn = 1 and a1 = · · · = an = a > 0.
In the remainder of this subsection we discuss briefly two financial applications of the excess growth rate. The reader who is primarily interested in the mathematical development may skip them without loss of continuity. First, the excess growth rate, when accumulated over time, captures the profit of a portfolio gained by rebalancing. By rebalancing, we mean the adjustment of positions through trading rather than buy-and-hold. The simplest situation, which can be considerably generalized (see [4-
8, 49, 64]), is a portfolio that periodically rebalances to the same set of weights. For concreteness, consider a portfolio of n stocks that rebalances to the weights given by π ∈ ∆n at the beginning of each month. Let R(1), . . . , R(T ) ∈ (0, ∞)n denote the gross returns of the stocks in T months, and let r(t) = log R(t) be the monthly log return. The total gross return of the rebalanced portfolio over T months is given by compounding the monthly gross returns:5
T
Y
t=1
⟨π, R(t)⟩.
5For simplicity, here we assume implicitly that there are no transaction costs.

10 STEVEN CAMPBELL AND TING-KAM LEONARD WONG
1960 1980 2000 2020
Excess growth rate of top 500 stocks (equally weighted)
Time
0.00
0.01
0.02
0.03
0.0
0.5
1.0
1.5
2.0
2.5
per period (left axis) cumulative (right axis)
Figure 1. Excess growth rates of the largest 500 stocks, over consecutive 20-day periods and equally weighted, of the US stock market from 1962 to 2024. We show both the per period excess growth rate and its aggregate through time.
The log return, which is additive over time, is given by
log
T
Y
t=1
⟨π, R(t)⟩
!
=
T
X
t=1
log⟨π, R(t)⟩
=
N
X
t=1
(log⟨π, R(t)⟩ − ⟨π, r(t)⟩ + ⟨π, r(t)⟩)
=
*
π,
T
X
t=1
r(t)
+
+
T
X
t=1
Γ(π, R(t)).
(2.9)
That is, the log return of the rebalanced portfolio is the sum of the weighted average log return of the stocks and the accumulated excess growth rate. Since the accumulated excess growth rate is increasing, it contributes positively to the portfolio’s log return. In particular, if we consider two price paths along which the stocks have the same initial and final prices, the rebalanced portfolio earns more over the path that has a larger accumulated excess growth rate. This analysis can be expande-
d to explain the empirical observation that a systematically rebalanced portfolio often (but not always) outperforms a capitalization-weighted benchmark portfolio over long horizons.6 Second, the excess growth rate, which is invariant under change of num ́eraire, measures the relative volatility of a stock market. That is, how much the stocks’ returns differ from each other. Intuitively, a market that is relatively volatile offers more opportunities to construct portfolios that may outperform the -
market.
6This phenomenon is sometimes called volatility pumping or volatility harvesting, see [10, 11] and the references therein. Also see [58] for a recent empirical study.

A MATHEMATICAL STUDY OF THE EXCESS GROWTH RATE 11
For precise statements in stochastic portfolio theory, see [27, 29] in the references therein. In fact, it can be argued that a portfolio should rebalance more frequently when the market is relatively more volatile, especially when transaction costs cannot be neglected [50, 64]. In Figure 1, which adopts the data-set and methodology used in [16, Section 4],7. we illustrate the relative volatility of the US stock market. For each (non-overlapping) 20-day period between 1962 and 2024,8 we identify t-
he returns R(t) of the 500 largest stocks of the US stock market, and compute the excess growth rate Γ(π, R(t)) where π = e ̄500 is equally weighted. Note that due to rank switching (as well as events such as initial public offering and delisting) the set of the top 500 stocks changes over time. From the figure, we see that the cumulative excess growth rate increases steadily but sometimes abruptly. The series of per period excess growth rate exhibit clustering of volatility which is typical in fi-
nancial time series. Periods with high relative volatility can often be identified with major economic events such as the financial crisis in 2008 and COVID-19 in early 2020. For other studies of the excess growth rate in financial economics and portfolio management, we refer the reader to [5, 31, 41, 43, 62] and their references.
2.2. Free energy and variational representation. We relate the excess growth rate with the Helmholtz free energy and state a variational representation. Recall that the relative entropy H(· ∥ ·) is given on ∆n × ∆n, n ≥ 1, by
(2.10) H(p ∥ q) =
Pn
i=1 pi log pi
qi , if supp(p) ⊂ supp(q); +∞, otherwise.
Consider a physical system with n possible states and let π ∈ ∆n be a reference distribution that represents the multiplicities of states. Let E = (E1, . . . , En) ∈ Rn represent the energies of the states and β > 0 be the inverse temperature. Consider the (weighted) Gibbs distribution p⋆ = p⋆(π, E, β) ∈ ∆n given by
(2.11) p⋆
i :=
1
Z(π,E,β) πie−βEi , if i ∈ supp(π); 0, otherwise,
where Z(π, E, β) is the partition function given by
Z(π, E, β) :=
X
j∈supp(π)
πj e−βEj .
By construction, we have supp(p⋆) ⊂ supp(π). In this context, the Helmholtz free energy is the quantity
(2.12) A(π, E, β) := − 1
β log Z(π, E, β) = −1
β log


X
j∈supp(π)
πj e−βEj

.
(See, for example, [52, Chapter 3] for the physical background.) On the other hand, the average energy of the system with respect to the reference distribution π is given by U (π, E) :=
X
j∈supp(π)
πj Ej .
7Specifically, we use data from The CRSP US Stock Databases, see https://www. crsp.org/products/research-products/crsp-us-stock-databases. The data-set can be processed using codes on the following repository: https://github.com/stevenacampbell/ Macroscopic-Properties-of-Equity-Markets.
8A year has about 252 trading days, or roughly 21 days per month.

12 STEVEN CAMPBELL AND TING-KAM LEONARD WONG
Letting R = exp(−βE) ∈ (0, ∞)n, we have the identity
(2.13) Γ(π, R) = β(U (π, E) − A(π, E, β)).
That is, the excess growth rate is, up to a multiplicative constant, the difference between the reference average energy and the Helmholtz free energy. The distribution p⋆ given by (2.11) can be justified by Gibb’s variational principle [53, Proposition 4.7] of the free energy (or equivalently the log–exp–sum in (1.8)):
(2.14) A(π, E, β) = inf
p∈∆n
⟨p, E⟩ + 1
β H(p ∥ π) ,
and the infimum is attained uniquely by p = p⋆. From this and (2.13), we immediately obtain a variational representation of the excess growth rate which will be further explored in Section 4.3.
Proposition 2.7 (Variational representation). For π ∈ ∆n and r ∈ Rn, we have
(2.15) γ(π, r) = sup
p∈∆n
n
⟨p − π, r⟩ − H(p ∥ π)
o
,
Moreover, the unique maximizer of (2.15) is p⋆ = π ⊕π C[er].
Proof. We omit the proof as this result is classical. We only note that the support of the optimal p must be contained in that of π as otherwise H(p ∥ π) = ∞. Also, the optimizer is unique since H(· ∥ π) is strictly convex on the set {p ∈ ∆n : supp(p) ⊂ supp(π)}. □
2.3. Information-theoretic interpretation. We show that the excess growth rate can be expressed in terms of L. Campbell’s measure of average code length [15]. Mathematically, the relation is essentially the same as the one in (2.13). Fix n ≥ 1. Let π = (π1, . . . , πn) ∈ ∆◦n be a probability distribution and l =
(l1, . . . , ln) ∈ Zn>0 be a set of codeword lengths over an alphabet X of size D ≥ 2.
Definition 2.8 (Campbell’s measure of expected code length). Consider the distribution π and the vector l of codeword lengths as described above. For ρ > 0, we define
(2.16) Lρ(π, l) := 1
ρ logD
n
X
i=1
πiDρli
!
.
The idea is to consider a cost which is exponential in the length of the codeword. Campbell’s measure is obtained by normalizing the expected value of Dρl by the logarithmic transformation 1
ρ logD(·) (this is an exponential mean; see Remark 1.2(ii))). This can be contrasted with Shannon’s expected code length
S(π, l) :=
n
X
i=1
πili,
which is recovered in the limit
ρli→m0 Lρ(π, l) = S(π, l).
At the other extreme, we have limρ→∞ Lρ(π, l) = max1≤i≤n li. In [15], Campbell established source coding theorems under which the asymptotic optimal value of Lρ(π, l)—for long sequences of input symbols—is the R ́enyi entropy. Also see

A MATHEMATICAL STUDY OF THE EXCESS GROWTH RATE 13
[6] and the references therein for other extensions and applications of Campbell’s measure. We observe that the difference Lρ(π, l) − S(π, l) between Campbell’s and Shannon’s expected lengths is, up to a multiplicative constant, an excess growth rate.
Proposition 2.9 (Excess growth rate in Campbell’s measure). Let n ≥ 1, π ∈ ∆◦n,
l ∈ Zn>0 and ρ > 0. Define
R = (R1, . . . , Rn), where Ri = Dρli ,
be the vector of exponentiated code lengths. Then, we have
(2.17) Lρ(π, l) − S(π, l) = 1
ρ log D Γ(π, R)
Proof. We have
Lρ(π, l) = 1
ρ logD
n
X
i=1
πiRi
!
=1
ρ log D log
n
X
i=1
πiRi
!
.
On the other hand, we have
S(π, l) =
n
X
i=1
πili = 1
ρ
n
X
i=1
πi logD Ri = 1
ρ log D
n
X
i=1
πi log Ri.
We obtain (2.17) by taking the difference. □
2.4. Probabilistic interpretations. In this subsection, we prove two results that provide probabilistic interpretations of the excess growth rate in terms of the scaled Dirichlet distribution. We fix n ≥ 2.
To motivate the first result, recall that the relative entropy arises in Sanov’s theorem in the theory of large deviations. Let p ∈ ∆◦n. For N ≥ 1, let
QN ∼ Multinomial(N, p)
be an n-dimensional multinomial random vector. Let μp,N be the law of 1
N QN . In other words, μp,N represents the law of the empirical distribution of N independent samples from the categorical distribution on the state space [n] with weights p. Then, it can shown that the family (μp,N )N≥1 satisfies the large deivation principle (LDP) with rate N and rate function
(2.18) I(q) = H(q ∥ p), q ∈ ∆◦
N.
In particular, we have
(2.19) lim
N →∞
1
N log μp,N (S) = − qin∈fS H(q ∥ p).
for sufficiently regular Borel subsets S of ∆◦n. In Theorem 2.15(ii) below, we recall the definition of LDP in the context of the excess growth rate. We refer the reader to [20] for a comprehensive treatment of large deviation theory, and [17, Chapter 11] for an introduction with a focus on information-theoretic concepts.
Analogously, we show that the excess growth rate arises in the large deviation principle of another stochastic model involving the scaled Dirichlet distribution [44, 45]. This extends the formulation in [51, Section 3.1] and [66, Example III.18] which is restricted to the case π =  ̄e = ( 1
n,..., 1
n ). For α, β ∈ (0, ∞), we let Gamma(α, β) be the gamma distribution on R+ with shape parameter α and rate parameter β.

14 STEVEN CAMPBELL AND TING-KAM LEONARD WONG
Definition 2.10 (Scaled Dirichlet distribution). The scaled Dirichlet distribution SD(α, β), with parameters α = (α1, . . . , αn) and β = (β1, . . . , βn) in (0, ∞)n, is the distribution of the ∆◦n-valued random vector
(2.20) Y = C[X], X = (X1, . . . , Xn),
where X1, . . . , Xn are jointly independent with Xi ∼ Gamma(αi, βi).
When β = (β, . . . , β) is a constant vector, then SD(α, β) reduces to the Dirichlet distribution D(α) with parameter α. The scaled Dirichlet distribution can be traced to the works of Savage and Dickey [21] in the 1960s. It was studied in [44, 45] as a more flexible version of the Dirichlet distribution to model simplex-valued (or compositional) data.
The following lemma shows that the scaled Dirichlet distribution can be expressed in terms of the usual Dirichlet distribution and the simplicial operations introduced in Section 2.1.
Lemma 2.11. Let α, β ∈ (0, ∞)n. Then SD(α, β) is equal to the distribution of
(2.21) Y = C[β−1] ⊕ Z,
where Z ∼ D(α). In particular, we have SD(α, β) = SD(α, cβ) for any c > 0.
Proof. Suppose Y ∼ SD(α, β) is expressed as (2.20). Recall that if X ̃ ∼ Gamma(a, b), then cX ̃ ∼ Gamma(a, b
c ). So Z ̃i := βiXi ∼ Gamma(αi, 1), and Z := C[  ̃Z] ∼ D(α). It follows that
Y = C[X] = C[β−1 ⊙  ̃Z] = C[β−1] ⊕ Z.
□
We proceed to write down the density of SD(α, β). On ∆◦n, we take as reference measure the Aitchison measure λn defined by
dλn(y) := 1
√n Qn
i=1 yi
dy1 · · · dyn−1, y ∈ ∆◦
n.
More precisely, in the above equation we regard the Lebesgue measure dy1 · · · dyn−1 on
{(y1, . . . , yn−1) ∈ (0, 1)n−1 : y1 + · · · + yn−1 < 1}
as a measure on ∆◦n through the measurable bijection
(y1, . . . , yn−1) ↔ y1, . . . , yn−1, 1 −
n−1
X
i=1
yi
!
.
By [44, (11)], the density of SD(α, β) with respect to the Aitchison measure λn is given by
(2.22) Γ (Pn
i=1 αi) √n
Qn
i=1 Γ(αi)
Qn
i=1(βiyi)αi
(
Pn
i=1 βiyi)
Pn
i=1 αi , y ∈ ∆◦
n,
where Γ(·) is the gamma function (not to be confused with the excess growth rate).
Remark 2.12. The Aitchison measure is the Haar measure on (∆◦n, ⊕) (as a topological commutative group) which is unique up to a multiplicative constant.

A MATHEMATICAL STUDY OF THE EXCESS GROWTH RATE 15
To formulate an LDP involving the excess growth rate, we parameterize α and β as follows. Let π ∈ ∆◦n and let σ > 0 be a noise parameter whose role is analogous
to that of 1
N in (2.19). For x ∈ (0, ∞)n, we define
(2.23) μπ,x,σ := SD α = 1
σ π, β = π ⊙ x−1 .
By Lemma 2.11, μπ,x,σ is the distribution of the random vector
(2.24) Y = (C[x] ⊖ π) ⊕ Z, Z ∼ D 1
σπ .
Since Y depends on x only via C[x], we may assume without loss of generality that x ∈ ∆◦n. We obtain the density of μπ,x,σ by plugging (2.23) into (2.22).
Lemma 2.13 (Density of μπ,x,σ). For π, x ∈ ∆◦n and σ > 0, the density of μπ,x,σ with respect to λn is given by
(2.25) f (y | π, x, σ) := Γ( 1
σ )√n
Qn
i=1 Γ( πi
σ ) e −1
σ H(π)e −1
σ Γπ(y ∥ x), y ∈ ∆◦
n,
where H(π) = − Pn
i=1 πi log πi is the Shannon entropy of π.
Remark 2.14 (The case of equal weights). If π = e ̄ is the barycenter (zero element) of ∆◦n, then in (2.24) (with x ∈ ∆◦n) we have x ⊖ π = x and Y = x ⊕ Z, where
Z ∼ D( σ
n,..., σ
n ). This recovers to the Dirichlet perturbation model studied in [51, 60, 66].
Theorem 2.15 (Excess growth rate as rate function). Let n ≥ 2 and π ∈ ∆◦n.
(i) We have
(2.26) lσi↓m0 sup
x,y∈∆◦n
|−σ log f (y | π, x, σ) − Γπ(y ∥ x)| = 0.
(ii) For x ∈ ∆◦n, the family (μπ,x,σ)σ>0 of probability distributions on ∆◦n sat
isfy the large deviation principle with rate 1
σ and rate function I(y) = Γπ(y ∥ x). By definition, this means that for every closed subset F and every open subset G of ∆◦n, we have
lim sup
σ↓0
σ log μπ,x,σ(F ) ≤ − inf
y∈F Γπ(y ∥ x),
lim inf
σ↓0 σ log μπ,x,σ(G) ≥ − inf
y∈G Γπ(y ∥ x).
(2.27)
Proof. (i) From (2.25), we have
− σ log f (y | π, x, σ) − Γπ(y | x)
= −σ log Γ 1
σ − σ log √n + σ
n
X
i=1
log Γ πi
σ − H(π),
(2.28)
which is independent of x and y (this gives the sup in (2.26)). By Stirling’s approximation
log Γ(z) = z log z − z + O(log z), as z → ∞,

16 STEVEN CAMPBELL AND TING-KAM LEONARD WONG
the last expression in (2.28) is equal to
− log 1
σ − 1 − σ log √n +
n
X
i=1
πi log πi
σ + πi − H(π) + o(1)
= H(π) − H(π) + σ log √n + o(1) = o(1) → 0, as σ ↓ 0.
This gives the desired result (2.26). In particular, from the computation above we have the limit
lσi↓m0 σ log Γ 1
σ Qn
i=1 Γ πi
σ
!
= H(π).
(ii) This is an immediate consequence of the uniform limit in (i). Since the argument is standard in the theory of large deviation and is not needed in the rest of the paper, we omit the details. □
Our second result expresses the excess growth rate as a R ́enyi divergence between members of the family (μπ,x,σ)x∈∆◦n . (Here π ∈ ∆◦n and σ > 0 are fixed and we may regard x as a location parameter.) To give a classical analogue, consider the squared Mahalanobis distance [42] on Rn defined by
(2.29) d2
M(x, y) := (x − y)⊤Σ−1(x − y),
where x, y ∈ Rd are considered column vectors and Σ ∈ Rn×n is a given strictly positive definite matrix. It is well known that d2
M expresses, up to a constant, the relative entropy between members of the normal location family {N (x, Σ)}x∈Rn (note that the covariance matrix Σ is kept fixed):
(2.30) H(N (x, Σ) ∥ N (y, Σ)) = 1
2 d2
M(x, y), x, y ∈ Rd.
A characterization of the Mahalanobis distance is given in Theorem 3.15 below.
Remark 2.16. The identity (2.30) is a special case of the general result that the relative entropy between members of an exponential family of probability distributions can be expressed as a Bregman divergence [4].
For α > 0, the R ́enyi divergence of order α is defined for probability measures μ1, μ2 on a (measurable) state space X by
Hα(μ1 ∥ μ2) := 1
α − 1 log
Z
X
dμ1 dμ2
α
dμ2 ,
when μ1 is absolutely continuous with respect to μ2, and is +∞ otherwise. If dμ1 = f1dν and dμ2 = f2dν where ν is a common dominating measure, then the R ́enyi divergence can be expressed via the densities f1, f2 by
(2.31) Hα(μ1 ∥ μ2) = 1
α − 1 log
Z
X
fα
1 f 1−α
2 dν .
See [61] for a summary of the properties of the R ́enyi divergence.
Theorem 2.17 (Excess growth rate as R ́enyi divergence). For n ≥ 2, π ∈ ∆◦n,
σ > 0 and x, y ∈ ∆◦n, we have
(2.32) H1+σ(μπ,y,σ ∥ μπ,x,σ) = 1
σ Γπ(y ∥ x).

A MATHEMATICAL STUDY OF THE EXCESS GROWTH RATE 17
Proof. Fix π ∈ ∆◦n and σ > 0. By Lemma 2.13, we have
f (z | π, x, σ) = Ce −1
σ Γ(z ∥ x),
where Γ(z ∥ x) := Γπ(z ∥ x) and
C = Cπ,σ := Γ( 1
σ )√n
Qn
i=1 Γ( πi
σ ) e −1
σ H(π).
Let x, y ∈ ∆◦n be given, and consider
σH1+σ(μπ,y,σ ∥ μπ,x,σ)
=σ 1
(1 + σ) − 1 log
Z
∆◦n
f (z | π, y, σ)1+σf (z | π, x, σ)−σdλn(z)
!
= log C
Z
∆◦n
e− 1+σ
σ Γ(z ∥ y)+Γ(z ∥ x)dλn(z)
!
.
To evaluate the integral, consider the identity
(2.33)
Z
∆◦n
Ce −1
σ Γ(z ∥ y)dλn(z) ≡ 1, x ∈ ∆◦
n.
In fact, by num ́eraire invariance (Proposition 2.3), the identity holds for y ∈ (0, ∞)n. Let ∇v be the directional derivative, with respect to y, in the direction
v = y2
i
xi 1≤i≤n
∈ Rn.
Differentiating under the integral sign in (2.33),9 we have
C
Z
∆◦n
e −1
σ Γ(z ∥ y)∇vΓ(z ∥ y)dλn(z) = 1.
Noting that
∇vΓ(z ∥ y) =
X
i
−πi zi
y2
i P
j πj
zj yj
y2
i xi
+
X
i
πi
yi
y2
i xi
=−
P
i πi zi
xi
P
i πi zi
yi
+
X
i
πi
yi
xi
,
we have
X
i
πi
yi
xi
=C
Z
∆◦n
e −1
σ Γ(z ∥ y)
P
i πi zi
xi
P
i πi
zj yj
dλn(z).
Observe that we may rearrange the above as
eΓ(y ∥ x)+P
i πi log yi
xi = C
Z
∆◦n
e −1
σ Γ(z ∥ y)eΓ(z ∥ x)+P
i πi log zi
xi
eΓ(z ∥ y)+P
i πi log zi
yi
dλn(z)
⇒ eΓ(y ∥ x) = C
Z
∆◦n
e− 1+σ
σ Γ(z ∥ y)eΓ(z ∥ x)dλn(z).
We obtain (2.32) by taking logarithm on both sides. □
9This can be justified using Remark 2.12 and standard estimates.

18 STEVEN CAMPBELL AND TING-KAM LEONARD WONG
Remark 2.18. The identity (2.32) can also be derived by showing that the family {μπ,x,σ}x∈∆◦n can be reparameterized as a λ-exponential family in the sense of [66, Definition III.1], and using the fact that the logarithmic divergence of a suitable potential function is the Re ́nyi divergence [66, Theorem III.14]. This result extends the relation in Remark 2.16 beyond the standard exponential family. In fact, the direct proof given above, which is shorter but may appear to be tricky, is motivated b-
y this general theory. See, in particular, the proof of [63, Theorem 13] and [66, Example III.18].
3. Characterization theorems
In this section, we prove three characterization theorems for the excess growth rate that highlight different aspects of this quantity.
3.1. Via relative entropy. Our first characterization theorem shows that the properties of the excess growth rate discussed in Section 2.1, together with Lebesgue measurability, uniquely characterize it (as a family (Γ : Dn → R+)n≥1) up to a proportional constant. Our proof makes use of an algebraic relation between the excess growth rate and the relative entropy (Lemma 3.4), as well as an axiomatic characterization of the latter. For easy reference, we gather here the relevant properties.
Assumption 3.1. Consider a family of functions (G : Dn → R)n≥1.
(A1) G(π, R) is (jointly) Lebesgue measurable. (A2) G(πσ, Rσ) = G(π, R) for every permutation σ. (A3) G(π, R) = G(p, R′) if Ri = R′
i for i ∈ supp(π). (A4) G(π, R) = 0 if R is constant on supp(π). (A5) For (π, a) ∈ Dn, ki ≥ 1, (pi, Ri) ∈ Dki , p = (p1, . . . , pn) and R = (R1, . . . , Rn), the following chain rule holds:
G(π ◦ p, a ◦ R) = G(π, a⟨⟨p, R⟩⟩) +
n
X
i=1
πiG(pi, Ri).
Assumption (A1) asks for a minimal degree of regularity to rule out pathological functions. (A2) is the permutation invariance of Proposition 2.1. (A3) highlights that only the returns of stocks included in the portfolio matter, and (A4) reflects the obvious fact that there is no benefit from diversification if all stocks in the portfolio have identical returns (Proposition 2.2). Finally, (A5) is the general chain rule given in Theorem 2.5. From Remark 2.6, (A5) implies the num ́eraire invariance -
property G(π, aR) = G(π, R), a > 0.
Theorem 3.2 (Characterization I). Let (G : Dn → R)n≥1 be a family of functions. The following are equivalent:
(i) The family satisfies (A1)–(A5). (ii) G = cΓ for some c ∈ R.
We have seen in Section 2.1 that the family (cΓ)n≥1 satisfies (A1)–(A5); nothing is changed by multiplying Γ by a constant. To prove the converse, we adopt the following strategy:
1. Use nume ́raire invariance (from (A5)) to reduce (G : Dn → R)n≥1 to an equivalent family (G : An → R)n≥1 of functions that take simplex-valued arguments.

A MATHEMATICAL STUDY OF THE EXCESS GROWTH RATE 19
2. Using algebraic relations between the excess growth rate and the relative entropy (Lemma 3.4), as well as an axiomatic characterization of the latter (Proposition 3.6), derive the characterization when the domain of the reduced functions from Step 1 is restricted to ∆◦n × ∆◦n. 3. Extend the characterization to the full domain.
Step 1. Recall the set An defined by (2.2). Clearly, if (G : Dn → R)n≥1 is num ́eraire invariant, it is characterized by its restriction to An (see (2.3)). We cast Theorem 3.2 in the following equivalent form.
Theorem 3.3. Let (G : An → R)n≥1 be a family of functions. The following are equivalent:
(i) The family satisfies (B1)–(B5) where: (B1) G(π, r) is (jointly) Lebesgue measurable. (B2) G(πσ, rσ) = G(π, r) for every permutation σ. (B3) G(π, r) = G(π, Cπ[r]).
(B4) G(π, r) = 0 if Cπ[r] = eπ, where eπ is the barycenter on the support of π ∈ ∆n defined by eπ := Cπ[e ̄n].
(B5) For (π, a) ∈ An, ki ≥ 1, (pi, ri) ∈ Aki , p = (p1, . . . , pn) and r = (r1, . . . , rn), we have
G(π ◦ p, a ◦ r) = G(π, Cπ[a⟨⟨p, r⟩⟩]) +
n
X
i=1
πi G(pi, ri).
(ii) G = cΓ for some c ∈ R.
It is easy to see that Theorem 3.2 and Theorem 3.3 are equivalent. Given a family (G : Dn → R)n≥1 that satisfies (A1)–(A5), let G be the restriction of G to An (for each n ≥ 1). For this choice, it can be easily verified that (B1)–(B5) hold. Similarly, if (G : An → R)n≥1 satisfies (B1)–(B5), we can define G(π, R) = G(π, Cπ[R]) and recover (A1)–(A5).
Step 2. The key observation is the following link between the excess growth rate and the relative entropy. It is a slight extension of [51, Lemma 2].
Lemma 3.4 (Excess growth rate as relative entropy). For (π, r) ∈ An we have
(3.1) Γ(π, r) = H(π ∥ π ⊕π r)
and
(3.2) Γ(π, r ⊖π π) = H(π ∥ Cπ[r]).
Proof. Write π ⊕π r = ( 1
Z πiri)1≤i≤n, where Z = P
j∈supp(π) πj rj is a normalizing constant. We verify (3.1) by a direct computation:
H(π ∥ π ⊕π r) =
X
i∈supp(π)
πi log πi
1
Z πiri
=
X
i∈supp(π)
πi log Z
ri
= log Z
X
i∈supp(π)
πi −
X
i∈supp(π)
πi log ri

20 STEVEN CAMPBELL AND TING-KAM LEONARD WONG
= log


X
i∈supp(π)
πiri

−
X
i∈supp(π)
πi log ri
= Γ(π, r).
To prove (3.2), write Z ̃ := P
i∈supp(π) ri/πi. We have
Γ(π, r ⊖π π) = log


X
i∈supp(π)
πi
ri/πi Z ̃

−
X
i∈supp(π)
πi log ri/πi
Z ̃
= log


X
i∈supp(π)
ri

−
X
i∈supp(π)
πi log ri
πi
=
X
i∈supp(π)
πi log πi
ri/ P
j∈supp(π) rj
!
= H(π ∥ Cπ[r]). □
Remark 3.5. Let p, q ∈ An(π | ·). From Definition 1.3 and the previous result, we have
(3.3) Γπ(q ∥ p) = H(π ∥ π ⊕π (q ⊖π p)).
Lemma 3.4 suggests that if a family (G : An → R)n≥1 satisfies (B1)–(B5), then I(p ∥ q) := G(p, q⊖pp), defined for (p, q) ∈ An and n ≥ 1, is a constant multiple of the relative entropy. To this end, we will make use of the following characterization of the relative entropy on the interior of the simplex. It is a slight variant of existing characterizations of relative entropy (cf. [38, Section 3.5]). Since it differs slightly in its domain and aspects of its assumptions, we provide a proof and a te-
chnical discussion in Appendix A.
Proposition 3.6 (Characterization of relative entropy on the open simplex). Let (I(· ∥ ·) : ∆◦n × ∆◦n → R)n≥1 be a family of functions. The following are equivalent:
(i) The family satisfies (C1)–(C4) where: (C1) I(· ∥ ·) is separately Lebesgue measurable: for each fixed p, the map p 7→ I(p ∥ q) is Lebesgue measurable and for each fixed q the map p 7→ I(p ∥ q) is Lebesgue measurable. (C2) I(pσ ∥ qσ) = I(p ∥ q) for every permutation σ. (C3) I(p ∥ p) = 0 for all p ∈ ∆◦n;
(C4) For (p, q) ∈ ∆◦n × ∆◦n, and (μi, νi) ∈ ∆◦
ki × ∆◦
ki for ki ≥ 1, i = 1, . . . , n, the following chain rule holds:
I(p ◦ μ ∥ q ◦ ν) = I(p ∥ q) +
n
X
i=1
(3.4) piI(μi ∥ νi).
(ii) I(· ∥ ·) = cH(· ∥ ·) for some c ∈ R.
With this characterization in mind, we establish a link between (B1)–(B5) and (C1)–(C4) through the function G(p, q ⊖p p). For (π, r) ∈ An, we let
mπ(r) :=
X
i∈supp(π)
ri > 0

A MATHEMATICAL STUDY OF THE EXCESS GROWTH RATE 21
for the mass that r puts on the support of π.
Lemma 3.7. Suppose that (G : An → R)n≥1 satisfies (B1)–(B5). Define (I(· ∥ ·) : An → R)n≥1 by I(p ∥ q) = G(p, q ⊖p p). Then the family (I(· ∥ ·) : An → R)n≥1 satisfies (C1)–(C3) with ∆◦n × ∆◦n replaced by An and the following version of the chain rule:
(C4′) For (p, q) ∈ An, ki ≥ 1, (μi, νi) ∈ Aki , μ = (μ1, . . . , μn), and ν = (ν1, . . . , νn), we have
(3.5) I(p ◦ μ ∥ q ◦ ν) = G(p, (q ⊖p p) ⊕p hμ(ν)) +
n
X
i=1
piI(μi ∥ νi),
where
hμ(ν) := mμi (νi)
Pn
j=1 mμj (νj )
!
1≤i≤n
∈ ∆◦
n.
In particular, when μ and ν are chosen so that supp(μi) = supp(νi) for all i = 1, . . . , n, then (3.5) reduces to (3.4).
Proof. We treat each property in turn.10 (C1) (on An and similarly below): This follows immediately from the joint measurability asserted in (B1) and composition with the measurable operation ⊖p. (C2): It is easy to check that (qσ ⊖p pσ) = (q ⊖p p)σ for any (p, q) ∈ An and permutation σ. Using this with (B2) we obtain
I(pσ ∥ qσ) = G pσ, (qσ ⊖p pσ) = G pσ, (q ⊖p p)σ = G p, (q ⊖p p) = I(p ∥ q).
(C3): Observe that p ⊖p p = ep. Therefore, by (B4) we have
I(p ∥ p) = G(p, p ⊖p p) = G(p, ep) = 0.
(C4′): Consider
I(p ◦ μ ∥ q ◦ ν) = G(p ◦ μ, (q ◦ ν) ⊖p◦μ (p ◦ μ)).
In order to invoke the chain rule (B5), we express (q◦ν)⊖p◦μ (p◦μ) as a composite distribution. Let Z be the normalizing constant in the definition of (q ◦ ν) ⊖p◦μ (p ◦ μ):
Z=
X
(i,j)∈supp(p◦μ)
(q ◦ ν)i,j (p ◦ μ)i,j
=
X
i∈supp(p)
qi
pi
X
j ∈supp(μi )
νi
j
μi
j
=
X
i∈supp(p)
qi
pi
Zi,
where Zi = P
j ∈supp(μi )
νi
j
μi
j
is strictly positive since (μi, νi) ∈ Aki . Write
((q ◦ ν) ⊖p◦μ (p ◦ μ))i,j = 1
Z
qi ν i
j
piμi
j
1supp(p) (i)1supp(μi ) (j )
=
qi
pi Zi
Z 1supp(p)(i)
!
· νi
j /μi
j
Zi
1supp(μi ) (j )
!
= (ρ ◦ ξ)i,j,
where ρ = (ρ1, . . . , ρn) ∈ An(p | ·) with
ρi =
qi
pi Zi
Z 1supp(p)(i), i = 1, . . . , n,
10Note that (B3) is not used here but will be needed in Step 3 below.

22 STEVEN CAMPBELL AND TING-KAM LEONARD WONG
and ξ = (ξ1, . . . , ξn) with
ξi = νi ⊖μi μi ∈ Aμi
ki , i = 1, . . . , n.
Therefore, we may apply (B5) to obtain,
I(p ◦ μ ∥ q ◦ ν) = G(p ◦ μ, (q ◦ ν) ⊖p◦μ (p ◦ μ))
= G(p ◦ μ, ρ ◦ ξ)
= G(p, C[ρ⟨⟨μ, ξ⟩⟩]) +
n
X
i=1
piG(μi, ξi)
= G(p, C[ρ⟨⟨μ, ξ⟩⟩]) +
n
X
i=1
piI(μi ∥ νi),
where the last equality follows from the definitions of ξi and Iki :
G(μi, ξi) = G(μi, νi ⊖μi μi) = I(μi ∥ νi).
It remains to show that C[ρ⟨⟨μ, ξ⟩⟩] = (q ⊖p p) ⊕p hμ(ν). To simplify the notation, for non-zero x, y ∈ [0, ∞)n we write x ∝ y if y = cx for some c > 0. Clearly, x, y ∈ ∆n are equal if and only if x ∝ y. Since
C[ρ⟨⟨μ, ξ⟩⟩] ∝ ρi⟨μi, ξi⟩ i
∝


qi
pi
Zi1supp(p)(i)


n
X
j=1
μi
jξi
j




i
=


qi
pi
1supp(p)(i)
n
X
j=1
μi
j
(ν i
j /μi
j )1supp(μi)(j)
Pki
l=1 (ν i
l /μi
l)1supp(μj )(l)


i
= qi
pi
1supp(p)(i)mμi (νi)
i
∝ (q ⊖p p) ⊕p hμ(ν),
the claim is proved and we have the chain rule in (3.5). Finally, note that if supp(μi) = supp(νi) then hμ(ν) = e ̄n. Hence (3.5) reduces to (3.4). □
Lemma 3.8 (Characterization on ∆◦n × ∆◦n). Theorem 3.3 holds if the domain An
of G and (B1)–(B5) is replaced by ∆◦n × ∆◦n.11
Proof. We only need to show (i) implies (ii). Given a family (G : ∆◦n × ∆◦n → R)n≥1
that satisfies (B1)–(B5), define I(p ∥ q) = G(p, q ⊖ p) for (p, q) ∈ ∆◦n × ∆◦n. From Lemma 3.7, (I : ∆n × ∆n → R)n≥1 satisfies (C1)–(C4). By Proposition 3.6, there exists c ∈ R such that for all n ≥ 1 we have
G(p, q ⊖ p) = cH(p ∥ q), (p, q) ∈ ∆◦
n × ∆◦
n.
Since ⊖ is invertible on ∆◦n, we get (by Lemma 3.4)
G(p, q) = cH(p ∥ p ⊕ q) = cΓ(p, q), (p, q) ∈ ∆◦
n × ∆◦
n. □
11If (π, r) ∈ ∆◦n × ∆◦n, then Cπ[r] = r. Thus (B3) holds automatically and may be removed.

A MATHEMATICAL STUDY OF THE EXCESS GROWTH RATE 23
Step 3. We extend the characterization from ∆◦n × ∆◦n to all of An. To do so, we
need two auxiliary results that address the boundary values. For p ∈ [0, ∞)n with support supp(p) = {j1, . . . , jd} ̸= ∅ (ordered according to increasing index j1 < j2 < · · · < jd), we define the coordinate projection operator Πp : [0, ∞)n → [0, ∞)d, d = | supp(p)|, by
Πp[q] i := qji , i = 1, . . . , d.
In words, Πp[q] restricts q to the coordinates in supp(p). Note that
(p, q) ∈ An ⇒ Πp[Cp[q]] ∈ ∆◦
| supp(p)|.
For clarity, in the following we sometimes use Ik and Gk to show explicitly the underlying dimension.
Lemma 3.9. Suppose (I(· ∥ ·) : An → R)n≥1 satisfies (C1)–(C3) and (C4′). Then, there exists a Lebesgue measurable function φ : (0, 1] → R with φ(1) = 0 such that for every (p, q) ∈ An we have
(3.6) I(p ∥ q) = φ(mp(q)) + I| supp(p)|(Πp[p] ∥ Πp [Cp[q]]).
Proof. Fix (p, q) ∈ An and set d = | supp(p)| ∈ [n]. Write pˆ = Πp[p] ∈ ∆◦
d and
qˆ = Πp[Cp[q]] ∈ ∆◦
d.
Case 1. d = n. Then pˆ = p, qˆ = q and mp(q) = 1. The identity (3.6) holds by letting φ(1) = 0. Case 2. d < n. After permuting coordinates (using (C2)) if necessary, we may assume supp(p) = {1, . . . , d}. Let m = mp(q) ∈ (0, 1]. Next, define qˆ′ ∈ ∆n−d through qˆ′
i = qi+d/(1 − m) for i = 1, . . . , n − d to account for the renormalized
values of q off the support of p. If m = 1, we may take any arbitrary qˆ′ ∈ ∆n−d. By construction, we may represent p and q as the compositions
p = (1, 0) ◦ (pˆ, qˆ′), q = (m, 1 − m) ◦ (qˆ, qˆ′).
Since ((1, 0), (m, 1 − m)) ∈ A2 and supp(pˆ) = supp(qˆ) = [d], the special case in (C4′) applies and we obtain
I(p ∥ q) = I2((1, 0) ∥ (m, 1 − m)) + Id(pˆ ∥ qˆ).
Thus (3.6) holds with φ(m) := I2((1, 0) ∥ (m, 1 − m)). Measurability of φ follows from (C1) and that φ(1) = 0 follows from (C3). □
Lemma 3.10. Suppose that (G : An → R)n≥1 satisfies (B1)–(B5) and define I(p ∥ q) = G(p, q ⊖p p) for (p, q) ∈ An. Then for (p, q) ∈ An we have
I(p ∥ q) = I| supp(p)|(Πp[p] ∥ Πp [Cp[q]]).
In particular, the function φ from Lemma 3.9 vanishes identically.
Proof. Since (G : An → R)n≥1 satisfies (B1)–(B5), Lemma 3.7 implies that (I : An → R)n≥1 satisfies (C1)–(C3) and (C4′). By Lemma 3.9, there exists a measurable φ(·) on (0, 1] with φ(1) = 0 satisfying (3.6). We claim that φ(·) ≡ 0. Fix n and p ∈ ∆n be such that | supp(p)| < n. For α ∈ (0, 1], let q(α) ∈ An(p | ·) be such that Cp[q(α)] = p and mp(q(α)) = α. Such a q(α) can always be constructed by multiplying the coordinates of p by α and distributing the remaining mass 1 − α arbitrarily on [n] \ su-
pp(p). Then, by Lemma 3.9 and (C3),
I(p ∥ q(α)) = φ(mp(q(α))) + I| supp(p)| Πp[p] Πp
h
Cp[q(α)]
i
= φ(α) + I| supp(p)|(Πp[p] ∥ Πp[p]) = φ(α).

24 STEVEN CAMPBELL AND TING-KAM LEONARD WONG
On the other hand, I(p ∥ q(α)) = G(p, q(α) ⊖p p), and a direct calculation shows that q(α) ⊖p p = ep, the uniform distribution on supp(p). By (B4), G(p, ep) = 0, hence I(p ∥ q(α)) = 0. Therefore, φ(α) = 0 for all α ∈ (0, 1], and so φ(·) ≡ 0. □
We are now ready to complete the proof of Theorem 3.3 (and therefore, of Theorem 3.2 as well).
Proof of Theorem 3.3. We have seen that (cΓ)n≥1 satisfies (B1)–(B5). On the other hand, suppose that the collection (G : An → R)n≥1 satisfies (B1)–(B5). By Lemma 3.8, there exists a c ∈ R such that
G(p, q) = cΓ(p, q), for all n and (p, q) ∈ ∆◦
n × ∆◦
n.
Next, observe that for any (p, q) ∈ An,
(Πp[p], Πp [Cp[q]]) ∈ ∆◦
| supp(p)| × ∆◦
| supp(p)|
and moreover, (Πp [Cp[q]] ⊖p Πp[p]) ∈ ∆◦n. Therefore, by Lemma 3.10 (and writing I(p ∥ q) = G(p, q ⊖p p)),
G(p, q ⊖p p) = I(p ∥ q)
= I| supp(p)|(Πp[p] ∥ Πp [Cp[q]])
= G| supp(p)| (Πp[p], Πp [Cp[q]] ⊖p Πp[p])
= cΓ| supp(p)| (Πp[p], Πp [Cp[q]] ⊖p Πp[p]) .
One readily checks that
Γ| supp(p)| (Πp[p], Πp [Cp[q]] ⊖ Πp[p]) = Γ (p, q ⊖p p) ,
and hence G(p, q ⊖p p) = cΓ (p, q ⊖p p) , (p, q) ∈ An.
Unwinding by writing Cp[q] = (q ⊕p p) ⊖p p, we see that this implies
G(p, Cp[q]) = cΓ (p, q) .
Finally, we invoke (B3) to obtain
G(p, q) = G(p, Cp[q]) = cΓ (p, q) , (p, q) ∈ An,
which completes the proof. □
3.2. Via Jensen gap. In this subsection, we characterize the excess growth rate
Γ(π, R) = log


X
i∈supp(π)
πiRi

−
X
i∈supp(π)
πi log Ri, (π, R) ∈ An,
where n ≥ 2 is fixed, as the gap in Jensen’s inequality with respect to the logarithm which is strictly concave. We say that g : An → R is a gap function if there exists φ : (0, ∞) → R (which may be neither convex nor concave) such that
(3.7) g(π, R) = φ


X
i∈supp(π)
πiRi

−
X
i∈supp(π)
πiφ(Ri), (π, R) ∈ An.
We call φ the generator of g. Thus, Γ is the gap function with generator φ = log. Note that since Ri > 0 for i ∈ supp(π), φ only needs to be defined on (0, ∞).

A MATHEMATICAL STUDY OF THE EXCESS GROWTH RATE 25
Lemma 3.11 (Uniqueness of generator). The generator of a gap function is unique up to the addition of an affine function. More precisely, if g is a gap function and φ and φ ̃ are generators (that is, (3.7) holds for both φ and φ ̃), then φ(R) − φ ̃(R) ≡ aR + b for some a, b ∈ R.
Proof. Let 0 <  ̄R < R ̄ be given, and let
R = ( ̄R, R ̄, 1, . . . , 1) ∈ (0, ∞)n.
For R ∈ [ ̄R, R ̄], consider
π(R) :=
R ̄ − R
R ̄ −  ̄R , R −  ̄R
R ̄ −  ̄R , 0, . . . , 0 ∈ ∆n.
Then ⟨π(R), R⟩ = R and we have
g(π, R) = φ(R) −
R ̄ − R
R ̄ −  ̄R φ( ̄R) − R −  ̄R
R ̄ −  ̄R φ(R ̄)
= φ ̃(R) −
R ̄ − R
R ̄ −  ̄R φ ̃( ̄R) − R −  ̄R
R ̄ −  ̄R φ ̃(R ̄).
It follows that φ(R) − φ ̃(R) is affine in R on [ ̄R, R ̄]. Since  ̄R, R ̄ are arbitrary (and
the intercept and slope remain the same upon extension of the domain), φ − φ ̃ is affine on (0, ∞) and the lemma is proved. □
Our goal is the characterize the excess growth rate among the family of gap functions. For R ∈ [0, ∞)n \ {0} (where 0 = (0, . . . , 0) is the zero vector), we define
Dn(· | R) := {π ∈ ∆n : (π, R) ∈ Dn}
be the slice of Dn given the second slot. Consider the following assumptions on g : An → R.
Assumption 3.12.
(D1) For every R ∈ [0, ∞)n \ {0}, the map π 7→ g(π, R) is concave on Dn(· | R). (D2) g(π, R) = 0 if R is constant on supp(π). (D3) g(π, αR) = g(π, R) for all (π, R) ∈ Dn and α > 0.
(D4) For m ∈ (0, ∞) and R ∈ [0, ∞)n \ {0}, let Cm,R ⊂ Dn(· | R) be the constant mean set (which is convex) defined by
Cm,R := {π ∈ Dn(· | R) : ⟨π, R⟩ = m}.
Then, for any m and R, the map π 7→ g(π, R) is affine on Cm,R:
(3.8) g(π, R) = ⟨a(R), π⟩ + b(m), π ∈ Cm,R,
for some gradient a(R) ∈ Rn that depends only on R and is Lebesgue measurable in R, and the intercept b(m) ∈ R depends only on m and is Lebesgue measurable in m.
Note that (D3) encodes nume ́raire invariance. In Section 3.1, num ́eraire invariance allows us to restrict the domain of R to the simplex; the main argument is then driven by the chain rule. Here, num ́eraire invariance is the key property that distinguishes the excess growth rate (again up to a multiplicative constant) among

26 STEVEN CAMPBELL AND TING-KAM LEONARD WONG
other gap functions. To motivate (D4), assume that g is a gap function whose generator φ is Lebesgue measurable. On the constant mean set Dm,R, we have
g(π, R) = φ(m) −
n
X
i=1
πiφ(Ri),
(3.9)
which is affine in π. We may take a(R) = (−φ(Ri))1≤i≤n and b(m) = φ(m) which are Lebesgue measurable in R and m respectively.
Theorem 3.13 (Characterization II). Let n ≥ 2 and let g : An → R be (jointly) Lebesgue measurable.
(i) g is a gap function with a Lebesgue measurable generator if and only if it satisfies (D2) and (D4). In this case, the generator φ (which is unique up to an affine function by Lemma 3.11) is concave if and only if (D1) holds. (ii) g satisfies (D2)–(D4) if and only if g = cΓ for some c ∈ R. In this case, c ≥ 0 if and only if (D1) holds.
Despite the importance of Jensen’s inequality, we have not been able to locate axiomatic characterizations of its gap in the literature. Before proving Theorem 3.13, we compare it with known results about the quasiarithmetic mean of which the exponential mean in (1.8) is a member. For further details, see [38, Chapter 5] and [33, Chapter 4]. Let φ : I → J be a homeomorphism between real intervals. Following [38, Definition 5.1.1], we define the quasiarithmetic mean on I generated by φ be the famil-
y (Mφ : ∆n × In → I)n≥1 where
(3.10) Mφ(π, r) := φ−1
n
X
i=1
πiφ(ri)
!
, (π, r) ∈ ∆n × In.
Taking φ = exp(·) : I = R → J = (0, ∞) recovers the exponential mean which is the first term of the excess growth rate γ(π, r) expressed in terms of the log returns. The following result, which characterizes the (unweighted) exponential mean, can be found in [33, Theorem 4.15]:
Proposition 3.14 (Characterization of unweighted exponential mean). Fix n ≥ 1 and let M : Rn → R be an unweighted quasiarithmetic mean, i.e., M(·) = Mφ(e ̄n, ·) for some φ : (0, ∞) → J. The following are equivalent:
(i) M is difference scale invariant, in the sense that
(3.11) M(r + s1) = M(r) + s, s ∈ R.
(ii) M(·) = Mφ(e ̄n, ·) where φ(x) = eαx for some α ∈ R \ {0} or φ(x) = x.
The property of difference scale invariance (3.11), when expressed in terms of R = er, corresponds to the nume ́raire invariance of the excess growth rate; see the role of (D3) in Theorem 3.13(ii). Also, see [33, Theorem 4.10] which provides a list of properties which characterize the (unweighted) quasi-arithmetic mean (for some φ) as a family (M : Rn → R)n≥1 of functions. Together, these two results characterize the (unweighted) exponential mean. The theory of generalized means, or more generally-
 the theory of aggregation functions (see [33]) and value (as in [38, Chapter 7]), answers the question “what is the value of the whole in terms of its parts.” There, properties such as monotonicity (x ≤ y ⇒ M(x) ≤ M(y)) are natural and crucial. On the other hand, the excess

A MATHEMATICAL STUDY OF THE EXCESS GROWTH RATE 27
growth rate, as the difference between the exponential and arithmetic means (see (1.8)), focuses on how the returns differ from each other (so monotonicity no longer plays a role). This perspective distinguishes our study from that of generalized means.
Proof of Theorem 3.13. (i) Let g be a gap function. Clearly, it satisfies (D2). From (3.9), it is affine on any constant mean set Dm,R with
a = a(R) = (−φ(Ri))1≤i≤n and b = b(m) = φ(m).
Since g is measurable, it is easy to see that φ is measurable. For example, for any 0 <  ̄R < R ̄, consider
R =  ̄R, R ̄, 1, . . . , 1 ∈ (0, ∞)n
and πt = (1 − t, t, 0, . . . , 0) ∈ Dn(· | R) = ∆n, t ∈ [0, 1].
Then g(πt, R) = φ((1 − t) ̄R + tR ̄) − (1 − t)φ( ̄R) − tφ(R ̄)
is measurable in t. It follows that φ is measurable on [ ̄R, R ̄]. Since  ̄R, R are
arbitrary, we have that φ is measurable on (0, ∞). Hence g also satisfies (D4). Next, suppose that g satisfies (D2) and (D4). Then, there exist measurable functions a : Rn → Rn and b : (0, ∞) → R such that
g(π, R) = ⟨a(R), π⟩ + b(⟨π, R⟩), (π, R) ∈ Dn.
Define φ = b which is measurable. Letting π = ei be the i-basis vector, we have
0 = g(π, R) = ai(R) + b(⟨π, R⟩) = ai(R) + φ(Ri),
where the first equality holds by (D2). It follows that a(R) = (−φ(Ri))1≤i≤n, and we have
g(π, R) = φ(⟨π, R⟩) −
n
X
i=1
πiφ(Ri) = φ


X
i∈supp(π)
πiRi

−
X
i∈supp(π)
πiφ(Ri).
Thus, g is a gap function whose generator is measurable. Given that g is a gap function, it is immediate to see that its generator φ is concave if and only if π 7→ g(π, R) is concave on Dn(· | R) for every R ∈ [0, ∞)n \ {0}.
(ii) Suppose g = cΓ for some c ∈ R, so that g is a gap function with generator φ = c log. From (i), g satisfies (D2) and (D4). That g satisfies (D3) is a consequence of Proposition 2.3 (num ́eraire invariance). Now, suppose g satisfies (D2)–(D4). From (i), g is a gap function with a measurable generator φ. We aim to use (D3) to show that φ is equal to c log plus an affine function, for some c ∈ R. If so, we have g = cΓ. For α > 0, consider the function kα : (0, ∞) → R defined by
kα(u) := φ(αu) − φ(u), u ∈ (0, ∞).
Also define h : (0, ∞) → R by
h(α) := φ(α) − φ(1) = kα(1).
Note that h(1) = 0. Our strategy is to derive functional equations for kα and h. Step 1: kα is affine. Fix 0 < u < v. For t ∈ [0, 1], consider
π = (1 − t, t, 0, . . . , 0) ∈ ∆n and R = (u, v, 1, . . . , 1) ∈ (0, ∞)n.

28 STEVEN CAMPBELL AND TING-KAM LEONARD WONG
By (D3), which is the homogeneity property g(π, αR) = g(π, R), we have
φ ((1 − t)αu + tαv) − (1 − t)φ(αu) − tφ(αv) = φ((1 − t)u + tv) − (1 − t)φ(u) − tφ(v).
Writing this in terms of kα gives
kα((1 − t)u + tv) = (1 − t)kα(u) + tkφ(v).
Thus, kα is affine on (0, ∞), and there exist unique aα, bα ∈ R such that
kα(u) = aαu + bα, u ∈ (0, ∞).
Step 2: aα is affine in α. Observe that
kα(u) = φ(αu) − φ(u) = [h(αu) + φ(1)] − [h(u) + φ(1)] = h(αu) − h(u).
On the other hand, we have
kα(1) = aα + bα = φ(α) − φ(1) = h(α).
And so, h(αu) = h(u) + h(α) + aα(u − 1), α, u ∈ (0, ∞).
Swapping α and u gives
h(uα) = h(α) + h(u) = au(α − 1).
Equating the two expression gives
0 = aα(u − 1) − au(α − 1).
Thus, for any α, u ∈ (0, ∞) \ {1} we have
aα
α − 1 = au
u − 1.
We conclude that there is a constant r ∈ R such that
aα = r(α − 1).
Step 3: Cauchy’s functional equation for  ̃h(u) := h(u) − ru + r. From Step 2, we have h(αu) = h(u) + h(α) + r(α − 1)(u − 1), α, u ∈ (0, ∞).
Rearranging yields
(h(αu) − rαu + r) = (h(α) − rα + r) + (h(u) − ru + r).
Letting  ̃h(u) = h(u) − ru + r, we have the functional equation
(3.12)  ̃h(αu) =  ̃h(α) +  ̃h(u), α, u ∈ (0, ∞).
If we make the exponential change of variables α = ex, u = ey, x, y ∈ R, and let ψ(x) :=  ̃h(ex), then (3.12) is equivalent to Cauchy’s functional equation
(3.13) ψ(x + y) = ψ(x) + ψ(y), x, y ∈ R.
Since ψ is measurable, there exists c ∈ R such that (3.13) ψ(x) ≡ cx, see [38, Theorem 1.1.8]. Unwinding the transformations, we have
 ̃h(u) = c log u, u > 0.
(Alternatively, we may apply directly [38, Corollary 1.1.11] to (3.12).) It follows that
(3.14) φ(u) = h(u) + φ(1) =  ̃h(u) + ru − r + φ(1) = c log u + (φ(1) − r) + ru.

A MATHEMATICAL STUDY OF THE EXCESS GROWTH RATE 29
Thus, φ is equal to c log u plus an affine function. Finally, we note that φ given by (3.14) is concave if and only if c ≥ 0. □
3.3. Via logarithmic divergence and cross-entropy. In this subsection, we consider the excess growth rate as the divergence Γπ(Y ∥ X) (see Definition 1.3). We fix n ≥ 2 and, for simplicity, restrict π ∈ ∆◦n so that X, Y ∈ (0, ∞)n. By num ́eraire invariance, we may replace X and Y by p = C[X] and q = C[Y] respectively, and hence regard Γπ(· ∥ ·) as a divergence on ∆◦n. We characterize the excess growth rate as the unique logarithmic divergence (Definition 3.17) which is perturbation invariant in th-
e sense of (3.22) below. In fact, our result can be equivalently stated as a characterization theorem for the cross-entropy. To motivate our result, we first prove a characterization of the Mahalanobis distance (2.29).12 Recall that the Bregman divergence [13] of a differentiable convex function φ on a convex subset of Rn is defined by
(3.15) Bφ(y ∥ x) := φ(y) − φ(x) − ∇y−xφ(x).
When φ is strictly convex, we have Bφ(y ∥ x) = 0 only if x = y. If φ : Rn → R is a quadratic function of the form φ(x) = 1
2 x⊤Ax + b⊤x + c where A is an n × n
positive semidefinite matrix and b, c ∈ Rn (we regard x as a column vector), then
Bφ(y ∥ x) = (y − x)⊤A(y − x), x, y ∈ Rn,
is a squared Mahalanobis distance (provided A is strictly positive definite).
Theorem 3.15 (Characterization of squared Mahalanobis distance as a Bregman divergence). Let φ : Rn → R be C2 (twice continuously differentiable) and strictly convex.13 The following are equivalent:
(i) Bφ(· ∥ ·) is invariant under translation, in the sense that
(3.16) Bφ(y + z ∥ x + z) = Bφ(y ∥ x), x, y, z ∈ Rn.
(ii) φ(x) = 1
2 x⊤Ax+b⊤x+c for some strictly positive definite matrix A ∈ Rn×n
and b, c ∈ Rn.
In particular, any translation invariant Bregman divergence is a squared Mahalanobis distance.
Proof. It is clear that (ii) implies (i). Assume φ satisfies (i). Expanding and rearranging (3.16), we have, for x, y, z ∈ Rn,
(φ(y + z) − φ(y)) − (φ(x + z) − φ(x)) = ⟨∇φ(x + z) − ∇φ(x), y − x⟩.
Differentiating with respect to y gives
φ(y + z) − φ(y) = φ(x + z) − ∇φ(x),
which is independent of y. Letting z = tv for v ∈ Rn, dividing both sides by t ̸= 0 and letting t → 0 shows that the Hessian ∇2φ(y) is a constant matrix A. It follows that φ is quadratic. Since φ is strictly convex, A is strictly positive definite. Hence (ii) holds and the theorem is proved. □
12This result is probably known by experts but we are unable to find an exact reference in the literature. The closest result we could locate, proved in [46], states that the squared Mahalanobis distance is the only Bregman divergence on Rn which is symmetric in the sense that Bφ(y ∥ x) = Bφ(x ∥ y) for all x, y. 13It is possible to assume only that φ is C1. We assume C2 to shorten the proof.

30 STEVEN CAMPBELL AND TING-KAM LEONARD WONG
Remark 3.16 (Characterization of relative entropy as a Bregman divergence). The negative Shannon entropy φ(p) = −H(p) is differentiable and strictly convex in p ∈ ∆◦n. It is well known (see e.g. [4, Chapter 1]) that the induced Bregman divergence is the relative entropy:
B−H (p ∥ q) = H(p ∥ q), p, q ∈ ∆◦
n.
We are unaware of a characterization of the relative entropy (within the family of Bregman divergences) which is a direct analogy of Theorem 3.15 or Theorem 3.20 below. What we could find is the following result by Amari [3, Corollary]: the relative entropy is the unique Bregman divergence which is also an f -divergence.
Our third and last characterization of the excess growth rate is analogous to Theorem 3.15, except that a different kind of divergence is required. By an exponentially concave function on ∆◦n, we mean a function φ : ∆◦n → R such that
Φ = eφ is concave on ∆◦n. Clearly, if φ is exponentially concave then φ itself is concave. The following definition is taken from [49].
Definition 3.17 (Logarithmic divergence). Let φ be differentiable and exponentially concave on ∆◦n. Its logarithmic divergence is the function Lφ(· ∥ ·) : ∆◦n ×
∆◦n → R+ defined by
(3.17) Lφ(q ∥ p) := log (1 + ∇q−pφ(p)) − (φ(q) − φ(p)) , (q, p) ∈ ∆◦
n × ∆◦
n.
The logarithmic divergence is a logarithmic generalization of the Bregman divergence (3.15). To illustrate this point and to see that the logarithmic divergence is well defined, let φ be exponentially concave and consider Φ = eφ which is a positive concave function on ∆◦n. For p, q ∈ ∆◦n, concavity of Φ implies that
Φ(p) + ∇q−pΦ(p) ≥ Φ(q).
Dividing both sides by Φ(p) > 0, we have
1 + ∇q−pφ(p) ≥ Φ(q)
Φ(p) = eφ(q)−φ(p) > 0.
We obtain the logarithmic divergence by taking the logarithm and then the difference. To wit, exponential concavity of φ leads to a logarithmic first-order approximation based at p; it is more accurate than the usual linear approximation since log(1 + ∇q−pφ(p)) ≤ ∇q−pφ(p). See [49, 50, 63, 64, 65, 66] for in-depth studies of the logarithmic divergence motivated by portfolio theory and information geometry [4], as well as further extensions.
Following [49] (also see [26, Example 3.1.6]),the excess growth rate can be expressed as a logarithmic divergence. Recall that the cross-entropy H×(p ∥ q) is defined for p, q ∈ ∆◦n by
(3.18) H×(p ∥ q) := −
n
X
i=1
pi log qi.
Proposition 3.18 (Excess growth rate as a logarithmic divergence). For π = (π1, . . . , πn) ∈ ∆◦n, the function φ(·) = −H×(π ∥ ·) is exponentially concave on
∆◦n. Moreover, its logarithmic divergence is the excess growth rate:
(3.19) Lφ(q ∥ p) = Γπ(q ∥ p), p, q ∈ ∆◦
n.

A MATHEMATICAL STUDY OF THE EXCESS GROWTH RATE 31
Proof. For completeness, we provide a sketch of the proof. Consider φ(p) = −H×(π ∥ p) = Pn
i=1 πi log pi. Note that Φ(p) = eφ(p) = Qn
i=1 pπi
i is the weighted
geometric mean that is concave in p ∈ ∆◦n. Hence φ is exponentially concave. A direct computation shows that
1 + ∇q−pφ(p) =
n
X
i=1
πi
qi
pi
.
It follows from (3.17) that
Lφ(q ∥ p) = log
n
X
i=1
πi
qi
pi
!
−
n
X
i=1
πi log qi
pi
= Γπ(q ∥ p). □
We give another fundamental example of logarithmic divergence that can be expressed in terms of information-theoretic quantities.
Example 3.19 (R ́enyi divergence). Let λ ∈ (0, 1) and α = 1
λ ∈ (1, ∞). Consider
φ(p) = (α − 1)Hα(λ ⊗ p), p ∈ ∆◦
n,
where Hα(p) := 1
1−α log (Pn
i=1 xα
i ) is the R ́enyi entropy of order α. Then φ is exponentially concave and its logarithmic divergence is given by
(3.20) Lφ(q ∥ p) = (α − 1)Hα(λ ⊗ q ∥ λ ⊗ p),
where Hα(p ∥ q) = 1
α−1 log Pn
i=1 pα
i q1−α
i is the Re ́nyi divergence of order α (this is a special case of (2.31)). The details can be found in [64, Proposition 2]. General relationships between the logarithmic divergence and R ́enyi entropy/divergence are developed in [63, 66].
We set out to characterize the excess growth rate within the family of logarithmic divergences. To simplify the proof, we impose some regularity conditions on φ. We say that an exponentially concave function φ : ∆◦n → R is regular if it is C4 on ∆◦n
and, for each p ∈ ∆◦n and v ∈ Rn \ {0} with v1 + · · · + vn = 0 (that is, v is tangent
to ∆◦n), we have
(3.21) d2
dt2 t=0
Φ(p + tv) < 0, where Φ = eφ.
In particular, (3.21) implies that Φ is strictly concave.
Theorem 3.20 (Characterization III). Let φ : ∆◦n → R be regular exponentially concave. The following are equivalent:
(i) Lφ(· ∥ ·) is invariant under perturbations, in the sense that
(3.22) Lφ(q ⊕ h ∥ p ⊕ h) = Lφ(q ∥ p) for p, q, h ∈ ∆◦
n,
(ii) φ = −H×(π ∥ ·) + c for some π ∈ ∆◦n and c ∈ R.
In particular, any perturbation invariant logarithmic divergence is an excess growth rate.
We illustrate the perturbation invariance property (3.22) in Figure 2. Consider a simulated path (p(t))tT=0 in ∆◦n.14 For some h ∈ ∆◦n, let q(t) = p(t) ⊕ h be a perturbed path. The perturbation appears to be non-linear in the figure, but it
14Here n = 3, T = 500 and the path is generated in terms of a 3-dimensional Brownian bridge.

32 STEVEN CAMPBELL AND TING-KAM LEONARD WONG
Figure 2. A path p(t) (in black) on ∆◦n and its perturbation q(t) = p(t) ⊕ h (in grey).
is an ordinary translation in the Aitchison vector space (∆◦n, ⊕, ⊗). Now, (3.22) implies that
T
X
t=0
Lφ(p(t + 1) ∥ p(t)) =
T
X
t=0
Lφ(q(t + 1) ∥ q(t)).
That is, the two paths have the same cumulative (relative) volatility. Perturbation invariance is closely related to num ́eraire invariance. Observe that (3.22) is equivalent to the identity
(3.23) Lφ(p ⊕ r ∥ p) = Lφ(q ⊕ r ∥ q), p, q, r ∈ ∆◦
n.
(To see this, in (3.22) replace q by p ⊕ r and h by q ⊖ p.) In (3.23), we regard r = C[R] as the (normalized) gross return. If p is the (normalized) initial price of the assets, then p ⊕ r is the (normalized) final prices. The identity (3.23) states that the logarithmic divergence depends only on the returns and is independent of the initial prices. Theorem 3.20 states that the excess growth rate is the only logarithmic divergence (subject to the imposed regularity conditions) with this property. -
We believe the regularity conditions can be partially relaxed but do not pursue this further in this paper.
Proof of Theorem 3.20. 15 We first show that (ii) implies (i). Suppose that φ = −H(π, ·) + c for some π ∈ ∆◦n and c ∈ R. Since φ and −H(π, ·) only differ by a constant, they induce the same logarithmic divergence. By Proposition 3.18 (and num ́eraire invariance of Γ), we have Lφ(q ∥ p) = Γ(π, q⊖p). Since the perturbation operation is commutative on ∆◦n, we have
Lφ(q ⊕ r ∥ p ⊕ r) = Γ(π, ((q ⊕ r) ⊖ (p ⊕ r))
= Γ(π, q ⊖ p)
= Lφ(q ∥ p).
Hence Lφ is invariant under perturbation.
15This result was claimed in [50, Example 3.10] without proof. We provide a complete argument here.

A MATHEMATICAL STUDY OF THE EXCESS GROWTH RATE 33
The proof of the converse is more delicate. We will use tools from stochastic portfolio theory and information geometry, which will be introduced as needed, to derive differential implications of the functional equation (3.22). Suppose Lφ is invariant under perturbation. Define a mapping π : ∆◦n → Rn by
(3.24) πi(p) := xi (1 + ∇ei−pφ(p)) , i = 1, . . . , n,
where (e1, . . . , en) is the standard basis of Rn. Since Φ is strictly concave, by [49, Proposition 6] we have that π(p) ∈ ∆◦n for p ∈ ∆◦n. Hence, π is a mapping from
∆◦n into itself. We call π the portfolio map generated by φ. We claim that π(p) is
constant in p ∈ ∆◦n. By an abuse of notation, we have π(p) ≡ π for some element
π of ∆◦n. On the other hand, the portfolio map generated by the exponentially concave function −H(π, ·) is the constant π [26, Example 3.1.6]. Then, by [49, Proposition 6(i)], we have that φ = −H(π, ·) + c for some c ∈ R. (This is a variant of the classical fact that if two functions have the same gradient on a domain then they differ by a constant.) To show that π(·) is a constant mapping, we switch to another coordinate system on ∆◦n under which the meaning of invariance under perturbation is mo-
re apparent.
For x ∈ ∆◦n, we define its exponential coordinates θ = (θ1, . . . , θn) ∈ Rn−1 by
θi = log qi
qn
, i = 1, . . . , n − 1.
Similarly, let φ = (φ1, . . . , φn) be the exponential coordinates of p ∈ ∆◦n. Now, it is easy to verify that the exponential coordinates of q ⊕ p are
log (q ⊕ p)i
(q ⊕ p)n
= θi + φi, i = 1, . . . , n − 1.
That is, the exponential coordinate system is an isomorphism between the commutative groups (∆◦n, ⊕) and (Rn−1, +). Let Leφ : Rn−1 × Rn−1 → R+ be the logarithmic divergence of φ written in exponential coordinates:
Leφ(θ ∥ φ) := Lφ(q ∥ p).
The assumption that Lφ is invariant under perturbation is equivalent to the condition that Leφ is invariant under translation:
Leφ(θ + h ∥ φ + h) = Leφ(θ ∥ φ), θ, φ, h ∈ Rn−1.
For θ ∈ Rn−1, we define
gij(θ) := − ∂
∂θi
∂ ∂φj
Leφ(θ ∥ φ)
φ=θ
, i, j = 1, . . . , n − 1.
In information geometry (see [4, Chapter 6]), the matrix (gij(θ)) represents the Riemannian metric on ∆◦n induced by the divergence Lφ, when expressed under the exponential coordinate system. The assumption that φ is regular implies that the matrix (gij(θ)) is symmetric and strictly positive definite (see [50, Theorem 4.5]). We denote its inverse by (gij(θ)). Furthermore, we define (using the C4 condition)
Γijk(θ) := − ∂
∂θi
∂ ∂θj
∂ ∂φi
Leφ(θ ∥ φ)
φ=θ
, i, j, k = 1, . . . , n − 1,

34 STEVEN CAMPBELL AND TING-KAM LEONARD WONG
and
Γk
ij(θ) :=
n−1
X
l=1
Γijl(θ)glk(θ), i, j, k = 1, . . . , n − 1.
These are the Christoffel symbols of the so-called primal affine connection induced by the divergence. By [50, Theorem 4.7], we have the identity
(3.25) Γk
ij (θ) = δijk − δikπj (θ) − δjkπi(θ), θ ∈ ∆◦
n,
where δijk, δik and δjk are Kronecker deltas and π(θ) := π(p) is the portfolio map expressed in exponential coordinates. The key observation is that since Leφ is translation invariant, the Christoffel symbols Γk
ij(θ) are constant in θ. Differentiating (3.25) with respect to θl gives
−δik
∂ ∂θl
πj (θ) − δjk
∂ ∂θl
πi(θ) = 0, i, j, k, l = 1, . . . , n − 1.
Now, setting i = j = k gives
∂ ∂θl
πi(θ) = 0, i, l = 1, . . . , n − 1.
It follows that π(θ) is constant in θ (and hence π(p) is constant in p), and the claim is proved. □
Remark 3.21 (Excess growth rate and the Fisher–Rao metric). In Remark 1.2(ii) we computed the Taylor approximation of γ(π, r) when π ≈ 0. A similar compu
tation, applied to Γπ(p + tv ∥ p) for p ∈ ∆◦n and v ∈ Rn tangent to ∆◦n (i.e.,
Pn
i=1 vi = 0), shows that
(3.26) Γπ(p + tv ∥ p) = t2
2
n
X
i,j=1
πi(δij − πj )
pipj
vivj + o(t2), as t → 0.
In information geometric language (see [4, Chapter 6]), this expansion defines the Riemannian metric induced by Γπ(· ∥ ·) as a divergence (also called a contrast function on ∆◦n. Letting π = p gives
Γp(p + tv ∥ p) = t2
2
n
X
i=1
v2
i pi
+ o(t2).
Thus, we recover the Fisher–Rao metric ∥v∥2p := Pn
i=1
v2
i
pi at p ∈ ∆◦n. Further details can be found in [49, Section 2.6] and [50].
4. Optimization
Our goal in this section is to study maximization of the (expected) excess growth rate. For a random log return vector r with values in Rn, we consider
(4.1) max
π∈∆n
E γ(π, r) .
In the special case where r is deterministic (constant), this reduces to
(4.2) max
π∈∆n
γ(π, r).

A MATHEMATICAL STUDY OF THE EXCESS GROWTH RATE 35
4.1. Motivations. As we observed in (2.9), the log-wealth of a constant rebalanced portfolio admits a decomposition16 in which the excess growth rate captures a rebalancing premium arising from the cross-sectional dispersion of asset returns. The other component is the weighted average log return of the assets. When all assets have the same average log return, excess growth rate maximization (4.1) agrees with log-wealth maximization and leads to the growth optimal portfolio (Remark 4.13). Because -
the (expected) excess growth rate depends primarily on the covariance structure of the returns and the diversification decision π—rather than on hardto-estimate expected returns—it is comparatively robust and less model-sensitive. Targeting a higher excess growth rate thus aligns with constructing portfolios that (i) diversify across stocks, (ii) systematically “harvest” market volatility, and (iii) outperform relative to buy-and-hold benchmarks under suitable conditions on market diversity (see [-
26, Chapters 1–2]). In this sense, excess growth rate maximization isolates the component of growth attainable from rebalancing alone, independent of growth rates that are difficult to forecast. For these reasons, optimization of the excess growth rate is both practically appealing and theoretically informative. The deterministic problem (4.2) is also of independent interest: we show that it has an explicit solution that provides insight into the structure of γ(π, r). Moreover, after a transformat-
ion, this solution can be used to solve two fundamental variational problems over pairs of distributions (π, q) ∈ ∆n × ∆n:
(4.3) sup
(π ,q)∈∆n ×∆n
n
⟨q − π, r⟩ − λ H(q ∥ π)
o
,
and
(4.4) sup
(π,q)∈∆n×∆n: H(q ∥ π)≤η
⟨q − π, r⟩, η ≥ 0.
For this reason, we first treat the deterministic optimization (4.2) in Section 4.2, followed by the link to the variational problems in Section 2.2. The generalization to (4.1) is treated at the end in Section 4.4. See [22, 41] for other formulations of excess growth rate optimization.
Remark 4.1. As γ(π, ·) is convex it may also seem natural to ask about minimizing the excess growth rate with respect to r, but this is uninteresting since any constant vector attains the minimum, γ(π, 1) = 0 (Proposition 2.2).
4.2. Maximizing the excess growth rate. Consider the Lagrangian for the deterministic concave maximization problem (4.2):
L(π, λ, μ) = log
n
X
i=1
πieri
!
−
n
X
i=1
πiri − λ
n
X
i=1
πi − 1
!
+
n
X
i=1
μiπi,
where the multiplier λ ∈ R enforces Pn
i=1 πi = 1 and the mulipliers μj ≥ 0 enforce πi ≥ 0. The feasible set ∆n is nonempty, compact, and convex. Moreover, Slater’s condition holds: there exists a strictly feasible point for the inequality constraints that satisfies the equality constraint, e.g. e ̄n = (1/n, . . . , 1/n). As a result, strong duality holds (see [12, Section 5.2.3]) and the Karush–Kuhn–Tucker (KKT) conditions are necessary and sufficient for optimality.
16The decomposition is more complex for portfolios whose holdings change over time; see [48] and [26, Corollary 1.1.6] for the continuous-time analogue.

36 STEVEN CAMPBELL AND TING-KAM LEONARD WONG
At any maximizer, the KKT conditions require
∂L ∂πi
= eri
Pn
j=1 πj erj − ri − λ + μi = 0,
together with
μi ≥ 0, πi ≥ 0, μiπi = 0 (complementary slackness),
n
X
i=1
πi = 1.
In particular, if πi > 0 then μi = 0 and
eri
Pn
j=1 πj erj − ri = λ,
while for πi = 0 we have
eri
Pn
j=1 πj erj − ri ≤ λ.
This leads us to the following structural characterization of any optimizer. In the sequel we will see that as long as r has distinct entries the optimizer is unique.
Lemma 4.2. If r ∈ Rn has n ≥ 2 distinct coordinates, any maximizer π⋆ of (4.2) is supported on exactly two indices; i.e., |supp(π⋆)| = 2. In particular, π⋆ has support on the maximum and minimum of r, r(n) and r(1).
Proof. Let Z := Pn
j=1 π⋆
j erj > 0 and define
hλ(x) := ex
Z − x − λ, λ ∈ R.
Then h′′
λ(x) = ex/Z > 0, so hλ is strictly convex and has at most two distinct zeros.
From the KKT condition, for every i in supp(π⋆) we must have hλ(ri) = 0. Since the ri are assumed to be distinct, we conclude |supp(π⋆)| ≤ 2. On the other hand, |supp(π)| = 1 gives γ(π, r) = 0, which is suboptimal whenever r is not constant, because for any i ̸= j and π′ := 1
2 (ei + ej ) ∈ ∆n,
γ(π′, r) = log eri +erj
2 − ri+rj
2 > 0.
Finally, to see that π⋆
i > 0 if and only if ri ∈ {r(1), r(n)} we observe that the KKT conditions imply that hλ(ri) ≤ 0 for all i. By strict convexity and the fact that limx→±∞ hλ(x) = +∞ the sublevel set {x : hλ(x) ≤ 0} is a compact interval [u, v] with hλ(u) = hλ(v) = 0. Moreover,
hλ(x) < 0 for all x ∈ (u, v), hλ(x) > 0 for all x ∈/ [u, v].
As hλ(ri) ≤ 0 for every i, ri ∈ [u, v] for all i. Since the ri are distinct, (u, v) is non-empty. In particular,
u ≤ miin ri = r(1) and miax ri = r(n) ≤ v.
But u and v themselves are necessarily entries of r as we have already established that r contains the two unique roots {x : hλ(x) = 0}. Thus we necessarily have
u = r(1) and v = r(n).
Consequently, the only indices with hλ(ri) = 0 are those achieving the minimum and maximum of r as claimed. □

A MATHEMATICAL STUDY OF THE EXCESS GROWTH RATE 37
This result allows us to obtain an explicit equation for the maximum and the optimal allocation π⋆. The intuition is very much in the spirit of “volatility harvesting.” By comparison to the wealth maximizing strategy (which would invest solely in the stock with the highest return), the optimal strategy for the excess growth rate allocates capital to the most extreme returns; both largest and smallest.
Theorem 4.3. Suppose r ∈ Rn has n ≥ 2 distinct coordinates. Then
max
π∈∆n
γ(π, r) = log er(n) −er(1)
r(n)−r(1) − er(n) r(1) − er(1) r(n)
er(n) − er(1) − 1.
Moreover, the unique optimizer π⋆ is supported on two points:
π⋆
i⋆ = eri⋆ − erj⋆ − (ri⋆ − rj⋆ )erj⋆
(ri⋆ − rj⋆ ) (eri⋆ − erj⋆ ) , π⋆
j⋆ = 1 − π⋆
i⋆ , π⋆
k = 0 (k ∈/ {i⋆, j⋆}),
where the indices {i⋆, j⋆} attain the maximum and minimum of r, respectively; i.e., ri⋆ = r(n) and rj⋆ = r(1).
Proof. Fix distinct indices {i, j} and parameterize π by
πi = t, πj = 1 − t, t ∈ [0, 1], πk = 0 (k ∈/ {i, j}).
Define the univariate objective
fij(t) := γ(π, r) = log teri + (1 − t)erj − tri + (1 − t)rj .
From Lemma 4.2 we conclude that
(4.5) max
π∈∆n
γ(π, r) = max
1≤i<j≤n max
t∈[0,1]
fij(t) = max
t∈[0,1]
fi⋆j⋆ (t).
So, it suffices to treat the inner maximization problem for fixed i ̸= j. One computes
f′
ij (t) = eri − erj
teri + (1 − t)erj − (ri − rj ), f ′′
ij (t) = − (eri − erj )2
teri + (1 − t)erj 2 < 0.
Thus fij is strictly concave on [0, 1]. It is standard to check that fij is maximized at
t⋆
ij = eri − erj − (ri − rj )erj
(ri − rj ) (eri − erj ) ∈ (0, 1),
and the corresponding maximal value simplifies to
max
t∈[0,1]
fij (t) = log eri − erj
ri − rj
− eri rj − erj ri
eri − erj − 1 > 0 for ri ̸= rj .
Combining this with (4.5) completes the proof. □
Remark 4.4. If r has repeated coordinates, we may aggregate equal entries; the same conclusions hold upon reducing to the list of distinct values. In particular, any maximizer is supported on exactly two distinct values of r unless r is constant, in which case any π ∈ ∆n is optimal.

38 STEVEN CAMPBELL AND TING-KAM LEONARD WONG
4.3. Variational interpretation. Before turning to the optimization in expectation, we address the implications of this explicit solution on the variational problems (4.3) and (4.4). The link to the penalized problem (4.3) is easy to see by leveraging the analysis in Section 2.2. Namely, from Proposition 2.7 we obtain
sup
(π ,q)∈∆n ×∆n
n
⟨q − π, r⟩ − H(q ∥ π)
o
= sup
π∈∆n
γ(π, r),
and we understand the form of the optimal q for fixed π. More generally, for λ > 0,
sup
(π ,q)∈∆n ×∆n
n
⟨q − π, r⟩ − λ H(q ∥ π)
o
= sup
π∈∆n
(
λ log
n
X
i=1
πieri/λ
!
−
n
X
i=1
πiri
)
= λ sup
π∈∆n
(4.6) γ(π, r/λ).
So, the maximization of γ(π, r) in Theorem 4.3 provides us with the solution to (4.6) which we collect in the next proposition.
Proposition 4.5. Suppose r ∈ Rn has n ≥ 2 distinct coordinates. Then
sup
(π ,q)∈∆n ×∆n
n
⟨q − π, r⟩ − λ H(q ∥ π)
o
= λ log er(n)/λ−er(1)/λ
r(n)−r(1) − er(n)/λr(1) − er(1)/λr(n)
er(n)/λ − er(1)/λ + λ log λ − λ.
Moreover, for the (unique) indices {i⋆, j⋆} that attain the maximum and minimum of r, respectively, the optimal pair (π⋆, q⋆) are given by
π⋆
i⋆ = eri⋆ /λ − erj⋆ /λ − λ−1(ri⋆ − rj⋆ )erj⋆ /λ
λ−1(ri⋆ − rj⋆ ) (eri⋆ /λ − erj⋆ /λ) , π⋆
j⋆ = 1−π⋆
i⋆ , π⋆
k = 0 (k ∈/ {i⋆, j⋆})
and q⋆ = π⋆ ⊕π⋆ C[er/λ].
Financially, we can interpret this problem as finding the two portfolios π, q whose holdings differ maximally in their average log returns when subject to a relative entropy penalization. The optimal pair has support on the two most extreme returns and q⋆ tilts away from π⋆ towards the rescaled return profile λ−1r. Next, we link the excess growth rate γ(π, ·) to the constrained optimization problem (4.4) through a perspective transformation.17 For a radius η ≥ 0 we first define the objective
(4.7) Φη(r) := sup
q∈∆n: H(q ∥ π)≤η
⟨q − π, r⟩.
Lemma 4.6 (Perspective duality). Fix n ≥ 2 and π ∈ ∆n. For η ≥ 0 and r ∈ Rn
(4.8) Φη(r) = λin>f0
n
λ γ π, 1
λr + ηλ
o
,
with the convention
(4.9) λ γ π, 1
λ r → max
i∈supp(π)
ri − ⟨π, r⟩ as λ ↓ 0.
17The perspective of a function f (r) is given by p(λ, r) := λf (r/λ) for λ ∈ (0, ∞). When f is convex (concave), p : (0, ∞) × Rn → R is jointly convex (concave) (cf. [12, Section 3.2.6]). The perspective of r 7→ γ(π, r) has already appeared in (4.6).

A MATHEMATICAL STUDY OF THE EXCESS GROWTH RATE 39
Proof. Consider the (partial) Lagrangian
L(q, λ) := ⟨q − π, r⟩ − λ H(q ∥ π) − η , q ∈ ∆n, λ > 0.
For each fixed λ > 0, the map q 7→ L(q, λ) is continuous and concave on the compact convex set ∆n, while for fixed q the map λ 7→ L(q, λ) is affine. Hence Sion’s minimax theorem yields
Φη(r) = sup
q∈∆n
λin>f0 L(q, λ) = λin>f0 sup
q∈∆n
L(q, λ).
If λ > 0, we have
(4.10) sup
q∈∆n
L(q, λ) = λ sup
q∈∆n
nD
q − π, r
λ
E
− H(q ∥ π)
o
+ ηλ.
By Theorem 2.7 the inner supremum in (4.10) equals γ(π, r/λ), giving
sup
q∈∆n
L(q, λ) = λ γ(π, r/λ) + ηλ.
Combining the case λ > 0 with the well-known fact that λ log P
i πieri/λ approximates maxi:πi>0 ri as λ ↓ 0 yields (4.8) and (4.9). □
The maximizer of this constrained optimization can be characterized as follows.
Lemma 4.7. Set Mπ(r) := arg maxi∈supp(π) ri and define η(·) and q(·) through
η(r) := − log


X
j∈Mπ (r)
πj

 , qi(r) = πi exp(ri)
Pn
j=1 πj exp(rj ) = π ⊕π C[er].
Then:
(a) If 0 ≤ η < η(r), the infimum in (4.8) is attained at any λ⋆ > 0 satisfying18 H(q(r/λ⋆) ∥ π) = η and the maximizer in (4.7) is given by q⋆ = q(r/λ⋆). (b) If η ≥ η(r) then the infimum in (4.8) is achieved in the limit λ ↓ 0, and any q⋆ supported on Mπ(r) with H(q⋆∥π) ≤ η is optimal for (4.7). In particular, the distribution
q⋆
i = πi
P
j∈Mπ(r) πj
1{i∈Mπ(r)} = lλi↓m0 qi(r/λ)
satisfies H(q⋆∥π) = η(r).
Proof. First, observe that q(r/λ) = ∇rγ(π, r/λ) + π and define for λ > 0
φr,η(λ) := λγ(π, r/λ) + ηλ.
Then from Lemma 4.6 Φη(r) = infλ≥0 φr,η(λ), and from Theorem 2.7,
(4.11) γ(π, r/λ) = ⟨q(r/λ) − π, r/λ⟩ − H(q(r/λ) ∥ π)
= ⟨∇rγ(π, r/λ), r/λ⟩ − H(q(r/λ) ∥ π).
Differentiating and using (4.11) gives
φ′
r,η(λ) = γ(π, r/λ) −
D
∇rγ(π, r/λ), r/λ
E
+ η = η − H(q(r/λ) ∥ π),
φ′′
r,η(λ) = −∂λH(q(r/λ) ∥ π).
18The case η = 0 is solved by setting λ⋆ = ∞ which we identify with q⋆ = limλ↑∞ q(r/λ) = π.

40 STEVEN CAMPBELL AND TING-KAM LEONARD WONG
Since γ(π, ·) is convex, so is its perspective gπ(λ, r) := λγ(π, r/λ) (cf. [12, Section 3.2.6]). In particular, λ 7→ λγ(π, r/λ), and by extension φr,η(·), is convex. We may conclude that
−∂λH(q(r/λ) ∥ π) = φ′′
r,η(λ) ≥ 0
from which it follows that λ 7→ H(q(r/λ) ∥ π) is decreasing. As λ ↓ 0, the distribution q(r/λ) concentrates on the set Mπ(r) with the limit
qi(r/λ) → πi
P
j∈Mπ(r) πj
1{i∈Mπ (r)}
whereas qi(r/λ) → πi as λ → ∞. Therefore,
lλi↓m0 H(q(r/λ) ∥ π) = − log
X
j∈Mπ (r)
πj =: η(r), λli↑m∞ H(q(r/λ) ∥ π) = 0.
We consider now two cases. If r is constant on the support of π then η(r) = 0 and q(r/λ) ≡ π. In particular, φ′(λ) = η ≥ 0 for all λ > 0 and the minimum can be attained by sending λ ↓ 0. Suppose instead that r is not constant on the support of π so that η(r) > 0. Because φ′(λ) = η − H(q(r/λ) ∥ π) and H(q(r/λ) ∥ π) ∈ [0, η(r)] decreases in λ, there exists a λ⋆ ≥ 0 with φ′(λ⋆) = 0 (equivalently, H(q(r/λ) ∥ π) = η) if and only if 0 ≤ η < η(r). If η ≥ η(r) then φ′(λ) ≥ 0 for all λ > 0 and the infimum -
of φ is achieved in the limit λ ↓ 0. In this case, Φη(r) = maxi∈supp(π) ri − ⟨π, r⟩, and any q⋆ supported on Mπ(r) with H(q⋆ ∥ π) ≤ η is optimal. □
Remark 4.8. It is not hard to check that the solution λ⋆ to H(q(r/λ⋆) ∥ π) = η in Lemma 4.7(a) is unique as long as r is not constant on supp(π).
We can now use the connections developed in Lemmas 4.6–4.7 with the excess growth rate maximization in Theorem 4.3 to solve the constrained optimization problem in (4.4). We formalize this final link in the following proposition.
Proposition 4.9. Let r ∈ Rn have n ≥ 2 distinct coordinates. Then for any η ≥ 0
sup
(π,q)∈∆n×∆n: H(q ∥ π)≤η
⟨q − π, r⟩
= λin>f0
(
λ log er(n)/λ−er(1)/λ
r(n)−r(1) − er(n)/λr(1) − er(1)/λr(n)
er(n)/λ − er(1)/λ + λ log λ + λ(η − 1)
)
.
(4.12)
Moreover, for the (unique) indices {i⋆, j⋆} that attain the maximum and minimum of r, respectively, define the pair (π(λ), q(λ)) by
πi⋆ (λ) = eri⋆ /λ − erj⋆ /λ − λ−1(ri⋆ − rj⋆ )erj⋆ /λ
λ−1(ri⋆ − rj⋆ ) (eri⋆ /λ − erj⋆ /λ) , πj⋆ (λ) = 1 − πi⋆ (λ),
πk(λ) = 0 for (k ∈/ {i⋆, j⋆}), and q(λ) = π(λ) ⊕π(λ) C[er/λ]. For any λ⋆ solving19
H(q(λ⋆) ∥ π(λ⋆)) = η
the choice π⋆ = π(λ⋆) and q⋆ = q(λ⋆) is optimal.
19We are assured of the existence of at least one solution. If η = 0 we identify the solution with the limit limλ↑∞ π(λ) = limλ↑∞ q(λ) = 1
2 (ei⋆ + ej⋆ ).

A MATHEMATICAL STUDY OF THE EXCESS GROWTH RATE 41
Proof. By using Lemma 4.6 we can rewrite the constrained joint maximization of (4.4) as
sup
(π,q)∈∆n×∆n: H(q ∥ π)≤η
⟨q − π, r⟩ = sup
π∈∆n
sup
q∈∆n: H(q ∥ π)≤η
⟨q − π, r⟩
= sup
π∈∆n
λin>f0
n
λ γ π, r/λ + η λ
o
= λin>f0
n
λ sup
π∈∆n
γ π, r/λ + η λ
o
.
The interchange of inf{. . . } and sup{. . . } is justified by Sion’s minimax theorem as ∆n is convex and compact, (0, ∞) is convex, π 7→ γ(π, r) is concave, and λ 7→ λγ(π, r/λ) is convex (cf. [12, Section 3.2.6]). To see the characterization of the solution, we observe from (4.6) and Proposition 4.5 that
λ sup
π∈∆n
γ(π, r/λ) = sup
(π ,q)∈∆n ×∆n
n
⟨q − π, r⟩ − λ H(q ∥ π)
o
= ⟨q(λ) − π(λ), r⟩ − λ H(q(λ) ∥ π(λ))
Proposition 4.5 also recovers (4.12). Define the functions
g(π, λ) := λγ π, r/λ , f (λ) := sup
π∈∆n
g(π, λ) + η λ
so that
sup
(π,q)∈∆n×∆n: H(q ∥ π)≤η
⟨q − π, r⟩ = λin>f0 f (λ).
Observe that since λ 7→ λγ π, r/λ is convex for each π, g(π, ·) is convex and (as a
maximum of convex functions) so is f (λ). Moreover, since r has distinct entries we are assured that π(λ) is the unique optimizer. Since ∆n is compact, by Danskin’s Theorem (cf. [7, Proposition A.3.2])
f ′(λ) = ∂λg(π(λ), λ) + η.
Repeating the argument in Lemma 4.7 we see that
∂λg(π(λ), λ) = −H(q(λ) ∥ π(λ)).
Thus, to minimize f (λ) we search for a solution λ⋆ of f ′(λ⋆) = 0, which is equivalently given by the solution to
H(q(λ⋆) ∥ π(λ⋆)) = η.
Moreover, since f (λ) is convex we have f ′′(λ) ≥ 0 and we conclude,
0 ≥ −f ′′(λ) = ∂λH(q(λ) ∥ π(λ)).
That is, λ 7→ H(q(λ) ∥ π(λ)) is continuous and decreasing. As λ ↑ ∞ we see that π(λ) → 1
2 (ei⋆ + ej⋆ ), while as λ ↓ 0, π(λ) → ej⋆ . In the limit λ ↑ ∞ we find that
similarly q(λ) → 1
2 (ei⋆ + ej⋆ ) while as λ ↓ 0 we have q(λ) → ei⋆ . Hence
lλi↓m0 H(q(λ) ∥ π(λ)) = ∞, λli↑m∞ H(q(λ) ∥ π(λ)) = 0.
We conclude that there must be a solution for any 0 ≤ η < ∞ which completes the proof. □

42 STEVEN CAMPBELL AND TING-KAM LEONARD WONG
4.4. Maximizing the expected excess growth rate. We now turn to the optimization of the expected excess growth rate introduced in (4.1). Let R := er ∈ Rn+ and m := E[r]. To distinguish this problem from the deterministic objective γ(π, r) of Section 4.2, we define the function J : ∆n → R through
(4.13) J(π) := E
h
γ(π, r)
i
=E
h
log (⟨π, R⟩)
i
− ⟨π, m⟩.
To ensure J is well defined and finite on ∆n, we impose mild integrability assumptions on r (stated below).
Assumption 4.10. Let r be an Rn–valued random vector such that E[|ri|] < ∞ for all 1 ≤ i ≤ n.
Under Assumption 4.10 we are assured the finiteness of the objective (i.e., J(π) ∈ R) since
J(π) ≤ E
h
miax{ri}
i
− ⟨π, m⟩ ≤ 2
n
X
i=1
E [|ri|] < ∞
and by choosing any i ∈ supp(π),
J(π) ≥ log(πi) + E[ri] −
n
X
j=1
E [|rj|] ≥ −2
n
X
j=1
E [|rj|] > −∞.
Our main result is the following necessary and sufficient first-order condition.
Theorem 4.11 (First-order condition). Under Assumption 4.10, a portfolio π⋆ ∈ ∆n maximizes J(·) if and only if for every π ∈ ∆n,
(4.14) E ⟨π, R⟩
⟨π⋆, R⟩ ≤ 1 + ⟨π − π⋆, m⟩,
with equality in (4.14) whenever π is supported on supp(π⋆).
Proof. Since γ is concave in π, we see that J(π) is concave in π. In Lemma B.2 of the Appendix we provide a direct characterization of the superdifferential set ∂+
∆n J(π) (see Definition B.1). Our approach is slightly more technical but avoids imposing additional integrability conditions on r. By standard convex analysis, we have that π⋆ is a maximizer of J(·) if and only if 0 ∈ ∂+
∆n J(π⋆) (cf. [57, Theorem 27.4]). That is, in view of Lemma B.2, there is
a λ ∈ R and a μ ∈ Rn+ with μi = 0 on supp(π⋆) such that
(4.15) E R
⟨π⋆, R⟩ − m − λ1 + μ = 0,
where 0 is the zero vector. Consequently, for any optimal π⋆, we have the following inequality for all i:
E Ri
⟨π⋆, R⟩ − mi ≤ λ
and moreover, equality holds for all i ∈ supp(π⋆). Multiplying by the coordinates of an arbitrary portfolio π ∈ ∆n we get
E πiRi
⟨π⋆, R⟩ − πimi ≤ πiλ.
Summing over i we get
E ⟨π, R⟩
⟨π⋆, R⟩ − ⟨π, m⟩ ≤ λ.

A MATHEMATICAL STUDY OF THE EXCESS GROWTH RATE 43
In particular, if supp(π) ⊆ supp(π∗) then equality holds at all non-zero coordinates
and
E ⟨π, R⟩
⟨π⋆, R⟩ − ⟨π, m⟩ = λ, supp(π) ⊆ supp(π⋆).
Taking π ≡ π⋆ in the above we see that
1 − ⟨π⋆, m⟩ = λ.
The necessity of (4.14) holding at any optimizer π⋆ (with equality if supp(π) ⊆ supp(π⋆)) follows. Sufficiency can be seen by choosing π = ej ∈ ∆n for j = 1, . . . , n and defining
(4.16) μj = 1 + ⟨ej − π⋆, m⟩ − E ⟨ej, R⟩
⟨π⋆, R⟩ ≥ 0, j = 1, . . . , n.
Since by hypothesis μj = 0 if supp(ej) = {j} ⊆ supp(π⋆), we recover (4.15) with λ = 1 − ⟨π⋆, m⟩ by using (4.16) and evaluating (4.14) at π = ej ∈ ∆n j = 1, . . . , n. □
Remark 4.12. By Taylor expanding as in (1.9) for small ri ≈ 0,
J (π) ≈ 1
2 E Varπ(r) = 1
2


X
i
πi E[r2
i]−
X
i,j
πiπj E[rirj ]

,
which is a concave quadratic form in π in terms of the second moments of r. While directly solving (4.13) is challenging, this provides a tractable quadratic program that can be used to approximate the solution when the values of r are small (e.g., when r represents the log returns over short time horizons). This is particularly relevant in the continuous-time limit where this approximation leads to the (continuous time) excess growth rate. Related optimization problems in this setting have been p-
roposed in [22, 26, 41].
Remark 4.13 (Growth optimal portfolio). If the linear term is absent, the objective
π 7→ E [log⟨π, R⟩]
is the classical log–wealth (growth rate) maximization problem (c.f. [18, Chapter 16]). An optimal portfolio for this objective, πG, is said to be growth optimal. The analogue of Theorem 4.11 for πG is given in [18, Theorems 16.2.1–16.2.2]. There,
it is shown that
E ⟨π, R⟩
⟨πG, R⟩ ≤ 1, π ∈ ∆n,
with equality holding if supp(π) ⊆ supp(πG).
As a corollary, we obtain the following estimate on the relative growth rates by Jensen’s inequality.
Corollary 4.14. Let π⋆ maximize J(·). Then, for all π ∈ ∆n
E log ⟨π, R⟩
⟨π⋆, R⟩ ≤ log (1 + ⟨π − π⋆, m⟩) .
Remark 4.15. From Corollary 4.14 we see that if πG is the growth optimal portfolio then
0 ≤ E log ⟨πG, R⟩
⟨π⋆, R⟩ ≤ log 1 + ⟨πG − π⋆, m⟩ .

44 STEVEN CAMPBELL AND TING-KAM LEONARD WONG
Namely, the growth rate of π⋆ cannot be too much worse than the optimal rate. Its shortfall is controlled both by the deviation of π⋆ from πG and the expected returns m. Indeed, if m is a constant vector (i.e. all stocks have the same expected return) then ⟨πG − π⋆, m⟩ = 0 and π⋆ is also growth optimal. We can also use this chain of inequalities to conclude
⟨π⋆, m⟩ ≤ ⟨πG, m⟩.
That is, the log-optimal portfolio not only has a higher growth rate than π⋆, but also allocates more to securities with the largest expected log-returns.
5. Conclusion
Beginning with the financial definition of the excess growth rate, we demonstrate its rich connections with information-theoretic quantities, characterize it axiomatically from three complementary perspectives, and study its maximization that modifies the classical growth optimal portfolio. We conclude this paper by highlighting several natural questions related to our work.
1. Motivated again by Leinster’s book [38], one may ask if there are (financially) meaningful deformations of the excess growth rate, analogous to how the R ́enyi divergence deforms the relative entropy. If so, a natural follow-up question is to derive axiomatic characterization theorems that show these deformations are, in a sense, canonical. The divergence in Example 3.19, which involves the R ́enyi divergence and corresponds to the so-called diversity-weighted portfolio in stochastic portfolio -
theory, seems to be a reasonable candidate. 2. As shown in [37, 55], intuition and techniques from mathematical finance are instrumental in many modern developments in information theory, statistical inference, and hypothesis testing (Remark 1.4). Can the excess growth rate, or analogous financial quantities, contribute to this development? 3. Our theoretical study of maximization of the (expected) excess growth rate covers only the basic one-period setting. From the practical perspective, it is b-
oth interesting and necessary to consider extensions to dynamic (multiperiod or continuous-time) settings, as well as transaction costs and model uncertainty. One may also ask if there are relations with (suitable generalizations of) the asymptotic equipartition property and Cover’s universal portfolio. 4. Closely related to the relative volatility (quantified by the excess growth rate) of a stock market is the concept of market diversity. Market diversity measures the concentration of a stock mar-
ket. It is high when capital is spread more evenly among the different companies, and it is low when a small number of big companies dominate the entire market. In stochastic portfolio theory, it is typically quantified by the Shannon entropy (see [28]). Currently (2025), the diversity of the US market is rather low (relative to the historical average) due to the emergence of large technology companies. In fact, changes in market diversity tend to correlate with the performance of active large cap-
 fund managers relative to the market; see [16, Section 3] for detailed discussions and an empirical study. A shortcoming of Shannon entropy (and similar quantities) is that it does not take into account the similarities between stocks. For example, stocks in the same industry

A MATHEMATICAL STUDY OF THE EXCESS GROWTH RATE 45
sector tend to be more correlated with each other. In [39] (also see [38, Chapter 5]), generalized diversity measures (and hence entropies) were defined for probability distributions on a finite set equipped with a similarity matrix. It is interesting to adapt their approach to stock markets and study implications for portfolio selection.20
Acknowledgment
S. Campbell acknowledges support from an NSERC Postdoctoral Fellowship (PDF-599675-2025) and a CDFT Research Grant. T.-K. L. Wong acknowledges support from the NSERC Discovery Grant RGPIN-2025-06021. The authors thank Martin Larsson for pointing us to Leinster’s book [38] which inspired us to derive axiomatic characterizations of the excess growth rate. T.-K. L. Wong would also like to thank Soumik Pal with whom many important ideas in this paper, including the first chain rule of the excess growt-
h rate (Proposition 2.4), the logarithmic divergence (3.17) and large deviations of the Dirichlet perturbation (see Remark 2.14), were first developed.
Appendix
Appendix A. Proof of Proposition 3.6
The proof of this result takes three ingredients. The first is a recursion formula for I(· ∥ ·) that is also satisfied by the relative entropy. The second ingredient is a functional equation in four variables that must be satisfied by B(x, y) := I2((x, 1−x) ∥ (y, 1−y)) given the recursion formula. The third is a characterization of the symmetric separately measurable solutions to this equation that vanish on the diagonal. This latter result makes use of the general solution of an auxiliary functio-
nal equation due to [23].
Remark A.1. We provide here some historical context for our approach and also highlight why the specific structure in Proposition 3.6 necessitates a dedicated analysis. As will be seen, the domain (p, q) ∈ ∆◦n × ∆◦n leads to some subtleties that must be carefully checked. In [38, Section 3.5], Leinster provides the characterization in Proposition 3.6 on the larger domain (p, q) ∈ An and also dispenses with measurability in the first argument. However, his proof (see [38, Lemma 3.5.3]) fundamentall-
y requires information about I(· ∥ ·) outside of ∆◦n × ∆◦n and so cannot be directly adapted for our purposes. Instead, our proof follows an alternative line of argumentation that is well understood in the literature (see, for instance, the historical remarks in [38, Section 3.5] and Section 2.1 of the survey [19] where a result of this flavor is attributed to Kannappan and Ng). Indeed, under a related set of assumptions a characterization of relative entropy is proven in Kannappan’s book (see [34-
, Section 10.2f ]).
The arguments employed in [34, Section 10.2f] leverage Kannappan’s work with Ng in [35]. Importantly, the paper [35] enables a characterization of the solution to the functional equation (A.1) on the domain x, y ∈ [0, 1) x + u ∈ [0, 1], y, v, y + v ∈ (0, 1). For our purposes we need a characterization on the restricted domain x, u, y, v, x + u, y + v ∈ (0, 1). Fortunately, we may substitute the result of [35] with a more general result that was proved a few years later by Ebanks, Kannappan and
20This problem was suggested to us by Martin Larsson (private communication).

46 STEVEN CAMPBELL AND TING-KAM LEONARD WONG
Ng [23]. This result allows us to recover the same characterization using similar arguments, but without including the additional boundary points in the domain of the functional equation. Since we are unable to locate the precise characterization postulated in Proposition 3.6 in the literature, we provide a complete proof here.
For notational convenience we use the leave-one-out notation p(−i) ∈ Rn−1 to denote the deletion of coordinate i from the vector p ∈ Rn when n ≥ 2.
Lemma A.2. If In(· ∥ ·) satisfies (C2)–(C4) then for any (p, q) ∈ ∆◦n × ∆◦n and n ≥ 3 it satisfies the recursion
In(p ∥ q) = I2((pi, 1 − pi) ∥ (qi, 1 − qi)) + (1 − pi)In−1
p(−i)
1 − pi
q(−i)
1 − qi
,
for i = 1, . . . , n.
Proof. We can write
p = (p1, 1 − p1) ◦ (1), p2
1 − p1
, . . . , pn
1 − p1
and
q = (q1, 1 − q1) ◦ (1), q2
1 − q1
, . . . , qn
1 − q1
Observe that (p1, 1 − p1), (q1, 1 − q2) ∈ ∆2◦, 1 ∈ ∆1◦ and p(−1)
1−p1 , q(−1)
1−q1 ∈ ∆◦n−1. By the chain rule (C4) and the fact that I1((1)∥(1)) = 0 (see (C3))
In(p ∥ q) = I2((p1, 1 − p1)∥(q1, 1 − q1)) + (1 − p1)In−1
p(−1)
1 − p1
q(−1)
1 − q1
.
By permutation invariance (C2), the index i = 1 is arbitrary. □
Lemma A.3. If In(· ∥ ·) satisfies (C2)–(C4) then B(x, y) := I2((x, 1 − x) ∥ (y, 1 − y)) for x, y ∈ (0, 1) satisfies the functional equation
(A.1) B(x, y) + (1 − x)B u
1 − x, v
1 − y = B(u, v) + (1 − u)B x
1 − u, y
1−v
on the (open) triangular domain x, y, u, v, x + u, y + v ∈ (0, 1).
Proof. Applying Lemma A.2 with n = 3 and i ̸= j ∈ {1, 2, 3} we obtain
I3(p ∥ q) = I2((pi, 1 − pi) ∥ (qi, 1 − qi))
+ (1 − pi)I2
pj 1 − pi
, 1 − pj
1 − pi
qj 1 − qi
, 1 − qj
1 − qi
= B(pi, qi) + (1 − pi)B pj
1 − pi
, qj
1 − qi
.
Swapping the choice of indices and repeating the argument
I3(p ∥ q) = B(pj, qj) + (1 − pj)B pi
1 − pj
, qi
1 − qj
.
Equating these two expressions recovers (A.1). □

A MATHEMATICAL STUDY OF THE EXCESS GROWTH RATE 47
Lemma A.4. If B(·, ·) is a separately measurable solution to (A.1) satisfying
B(x, y) = B(1 − x, 1 − y) and B(x, x) = 0, x, y ∈ (0, 1),
then there exists a c ∈ R such that
B(x, y) = cH((x, 1 − x) ∥ (y, 1 − y)), x, y ∈ (0, 1).
Proof. Fix y, v ∈ (0, 1) with y + v ∈ (0, 1). Writing
k(z) = B z, y
1 − v , g(z) = B z, v
1 − y , f (z) = B(z, y), h(z) = B(z, v),
we may rewrite the functional equation for B as
f (x) + (1 − x)g u
1 − x = h(u) + (1 − u)k x
1−u
for x, u, x + u ∈ (0, 1). This is exactly the equation in [34, Corollary 10.7c] (see also the original paper [23]) for the identity M (x) ≡ x. As the identity map is both additive and multiplicative we get by [34, Corollary 10.7c] the general solution
f (x) = x L(x) + (1 − x) L(1 − x) + η3 x − η2 (1 − x) + η5,
g(x) = x L(x) + (1 − x) L(1 − x) + η1 x + η2,
h(x) = x L(x) + (1 − x) L(1 − x) + η1 x − η4 (1 − x) + η5,
k(x) = x L(x) + (1 − x) L(1 − x) + η3 x + η4,
where L(·) is a solution to the logarithmic equation
(A.2) L(xy) = L(x) + L(y), x, y ∈ (0, 1),
and ηi, i = 1, . . . , 5 are constants. Note that a priori all of the constants depend on y, v, y+v ∈ (0, 1). Since B(·, y) is Lebesgue measurable for each y ∈ (0, 1), so too are the functions f, g, h, k, L. As the Lebesgue measurable solution to the logarithmic equation is L(x) = c log(x) for some c ∈ R, we can make this identification. Define the binary entropy
E(x) = −x log x − (1 − x) log(1 − x), x ∈ (0, 1).
By emphasizing the dependence of the constants on the parameters v, y and substituting the form of the f, g, h, k in terms of B, we arrive at the equations
B(x, y) = −c(y, v)E(x) + η3(y, v) x − η2(y, v) (1 − x) + η5(y, v),
B x, v
1 − y = −c(y, v)E(x) + η1(y, v) x + η2(y, v),
B(x, v) = −c(y, v)E(x) + η1(y, v) x − η4(y, v) (1 − x) + η5(y, v),
B x, y
1 − v = −c(y, v)E(x) + η3(y, v) x + η4(y, v).
Isolating the first and third equations we see that:
B(x, y) = −c(y, v)E(x) + a1(y, v) x + b1(y, v),
B(x, v) = −c(y, v)E(x) + a2(y, v) x + b2(y, v)
where a1(y, v) = η3(y, v)+η2(y, v), a2(y, v) = η1(y, v)+η4(y, v), b1(y, v) = η5(y, v)− η2(y, v) and b2(y, v) = η5(y, v) − η4(y, v). Fix y and take any v1, v2 ∈ (0, 1) with

48 STEVEN CAMPBELL AND TING-KAM LEONARD WONG
v1 + y, v2 + y ∈ (0, 1). Substituting these into the first equation and subtracting gives:
0 = −(c(y, v1) − c(y, v2))E(x) + (a1(y, v1) − a1(y, v2))x + (b1(y, v1) − b1(y, v2))
for all x, y, x + y ∈ (0, 1). This implies
c(y, v1) = c(y, v2), a1(y, v1) = a1(y, v2), b1(y, v1) = b1(y, v2).
Repeating this argument with the second equation gives us
c(y1, v) = c(y2, v), a2(y1, v) = a2(y2, v), b2(y1, v) = b2(y2, v).
Since these holds for all admissible v1, v2 given y (respectively, all admissible y1, y2 given v) we conclude21 that c(y, v) ≡ c is constant and that a1(y, v), b2(y, v) do not depend on v (respectively, a2(y, v), b2(y, v) do not depend on y). Thus, we deduce that B(·, ·) takes the form
(A.3) B(x, y) = −cE(x) + a(y)x + b(y), x, y ∈ (0, 1),
in terms of two univariate functions a, b : (0, 1) 7→ R. The equation (A.3) appears in exactly this form in [34, Equation (10.50)]. By exploiting symmetry, we may employ analogous arguments to [34] in order to recover their [34, Equation (10.50a)] and deduce that
(A.4) B(x, y) = −cE(x) + xl(y) + (1 − x)l(1 − y), x, y ∈ (0, 1),
where l(·) is another solution of the logarithmic equation (A.2). With this verification complete, we can now make use of (A.4) to complete the proof. Consider the sequence of functions bn(y) = B(xn, y) for xn ↑ 1. Each function is Lebesgue measurable by the measurability of y 7→ B(x, y) for each x. Passing to the limit we define
b∞(y) := nli→m∞ bn(y) = l(y), y ∈ (0, 1).
As the pointwise limit of Lebesgue measurable functions, b∞(y) = l(y) is Lebesgue measurable. Hence, l(·) is a Lebesgue measurable solution of (A.2) and so, there exists a c′ ∈ R such that
l(y) = c′ log(y), y ∈ (0, 1).
Using the property B(x, x) = 0 we arrive at the identity
cE(x) = c′ [x log(x) + (1 − x) log(1 − x)] = c′E(x), x ∈ (0, 1),
from which it necessarily follows that c′ = c. Putting this all together,
B(x, y) = −c [E(x) − x log(y) − (1 − x) log(1 − y)] = −cH((x, 1 − x), (y, 1 − y)).
Absorbing −c into a single constant completes the proof. □
With these ingredients we readily complete the proof of Proposition 3.6.
Proof of Proposition 3.6. That relative entropy satisfies (C1)–(C4) is a standard verification, so we focus on the converse implication. First, note that the equality I1 = cH1 trivially holds for n = 1 as ∆1◦ = {1}. Indeed, I1(1 ∥ 1) = cH(1 ∥ 1) = 0. Then, by Lemma A.3 and Assumption (C1), B(x, y) = I2((x, 1 − x) ∥ (y, 1 − y)) is a separately measurable solution of the
21This conclusion is tacitly using that {E(x), x, 1} are linearly independent on (0, 1).

A MATHEMATICAL STUDY OF THE EXCESS GROWTH RATE 49
functional equation (A.1). By the permutation invariance and vanishing properties (C2)–(C3) of I2(· ∥ ·) we also get
B(x, y) = B(1 − x, 1 − y) and B(x, x) = 0, x, y ∈ (0, 1).
So, by Lemma A.4 we conclude that there exists a c ∈ R such that
I2((x, 1 − x) ∥ (y, 1 − y)) = cH((x, 1 − x) ∥ (y, 1 − y)), x, y ∈ (0, 1).
To extend this to general n ≥ 2, we use that relative entropy satisfies the recursion of Lemma A.2. Applying Lemma A.2 for n = 3 and using that I2 = cH yields
I3(p ∥ q) = cH(p ∥ q), p, q ∈ ∆◦
3.
Iterating this recursion for n = 4, 5, . . . completes the proof for general n. □
Appendix B. Superdifferential set for the excess growth rate
Definition B.1. For π ∈ ∆n, the superdifferential set of J at π relative to ∆n is
∂+
∆n J (π) := q ∈ Rn : J (π′) − J (π) ≤ ⟨q, π′ − π⟩ ∀ π′ ∈ ∆n .
Lemma B.2. Under Assumption 4.10 g ∈ ∂+
∆n J(π) if and only if there exists
λ ∈ R and a μ ∈ Rn+ with μi = 0 on supp(π) such that22
g=E R
⟨π, R⟩ − m − λ1 + μ ∈ Rn.
In particular, ∂+
∆n J(π) ̸= ∅ if and only if E
h Ri ⟨π,R⟩
i
< ∞ for all i ∈ {1, . . . , n}.
Proof. Consider the normal cone to the simplex at π ∈ ∆n
N∆n (π) := {v ∈ Rn : ⟨v, π′ − π⟩ ≤ 0 ∀ π′ ∈ ∆n}.
Any v ∈ N∆n (π) admits a representation v = λ1 − μ where λ ∈ R, μi = 0 if
i ∈ supp(π) and μi ≥ 0 otherwise. We observe that if g ∈ ∂+
∆n J (π) and v ∈ N∆n (π)
then (g − v) ∈ ∂+
∆n J (π). We now search for a particular element of the supergradient set. We begin with
the assumption that E
h Ri ⟨π,R⟩
i
< ∞ for all i otherwise the claimed form of g cannot
be a member of ∂+
∆n J (π). For x, y > 0, log y − log x ≤ y−x
x . With x = ⟨π, R⟩ and
y = ⟨π′, R⟩ this yields
log⟨π′, R⟩ − log⟨π, R⟩ ≤ ⟨π′ − π, R⟩
⟨π, R⟩ = π′ − π, R
⟨π, R⟩ .
Taking expectations and adding the remaining linear term we conclude
(B.1) J(π′) − J(π) ≤ π′ − π, E R
⟨π, R⟩ − m .
Define
g⋆(π) = E R
⟨π, R⟩ − m.
By (B.1) g⋆(π) ∈ ∂+
∆n J (π) (and also (g⋆ − v) ∈ ∂+
∆n J (π) for v ∈ N∆n (π)).
22Note that Assumption 4.10 is not sufficient to guarantee that g has finite coordinates. However, the expectation is always non-negative and therefore well defined.

50 STEVEN CAMPBELL AND TING-KAM LEONARD WONG
Next, we argue that on the relative interior of any face of ∆n where πi > 0 the ith coordinate of g⋆(π) defines the partial derivative. Here and in what follows we make regular use of the inequality
0 ≤ Ri
⟨π, R⟩ ≤ 1
πi
when πi > 0. Combining this with the inequality | log(1 + x)| ≤ |x|/(1 − |x|) for x ∈ (−1, ∞) we have for all h ∈ R with |h| ≤ πi/2 (since Ri > 0 and ⟨π, R⟩ > 0)
log⟨π + hei, R⟩ − log⟨π, R⟩
h =1
h log 1 + h Ri
⟨π, R⟩
≤
Ri ⟨π,R⟩
1 − |h| Ri
⟨π,R⟩
≤
1 πi
1 − |h| 1
πi
≤2
πi
< ∞.
The second inequality follows from the monotonicity of x 7→ x/(1 − x) on (−∞, 1). So, by the dominated convergence theorem,
∂πi J (π) = E Ri
⟨π, R⟩ − mi.
We claim that if g ∈ ∂+
∆n J (π) then g = g⋆(π) − v for some v ∈ N∆n (π). Since we necessarily have that the coordinates of g are finite, if this were true the expectations in g⋆(π) would also have to be finite. For a set of “active” indices S ⊂ {1, . . . , n} we define the face
∆S := {π′ ∈ ∆n : π′
i = 0 ∀i ̸∈ S}
and the relative interior of the face,
ri(∆S) := {π′ ∈ ∆n : π′
i = 0 ∀i ̸∈ S and π′
i > 0 ∀i ∈ S}.
For fixed π, choose S = supp(π) so π ∈ ri(∆S). We define the tangent space to ∆S (embedded in Rn) at this π as
TS(π) :=
(
t ∈ Rn : ti = 0 ∀i ̸∈ S,
n
X
i=1
ti = 0
)
.
Let t ∈ TS(π) and g ∈ ∂+
∆n J(π). Then, for sufficiently small ε > 0, π + εt ∈ ∆S and so,
J(π + εt) − J(π) ≤ ⟨g, εt⟩.
Dividing by ε and sending ε ↓ 0, we have (by using the differentiability of J(π) on the relative interior),
⟨g⋆(π), t⟩ ≤ ⟨g, t⟩.
Repeating the argument for −t ∈ TS(π) we have
−⟨g⋆(π), t⟩ ≤ −⟨g, t⟩.
Taking together ⟨g⋆(π) − g, t⟩ = 0. But this implies that g − g⋆(π) is orthogonal to every t ∈ TS(π). In particular, for the coordinates i ∈ S we must have gi = g⋆
i (π) − λ for some λ ∈ R. With this characterization of the coordinates in S, consider the perturbation t = ek − ej for k ̸∈ S and j ∈ S. Once more, for sufficiently small ε > 0 we have that π + εt ∈ ∆n. It follows that
J(π + εt) − J(π) ≤ ⟨g, εt⟩.

A MATHEMATICAL STUDY OF THE EXCESS GROWTH RATE 51
Dividing by ε and sending ε ↓ 0 we have that
(B.2) lim sup
ε↓0
J(π + εt) − J(π)
ε ≤ gk − gj = gk − g⋆
j (π) + λ.
At the same time, we may apply the inequality log(1+x) ≥ x/(1+x) for x ∈ (−1, ∞) to conclude that for sufficiently small ε > 0
log⟨π + εt, R⟩ − log⟨π, R⟩ = log (⟨π, R⟩ + ε(Rk − Rj)) − log⟨π, R⟩
= log 1 + ε(Rk − Rj)
⟨π, R⟩
≥
ε(Rk−Rj ) ⟨π,R⟩
1 + ε(Rk−Rj )
⟨π,R⟩
.
That is,
lim inf
ε↓0
log⟨π + εt, R⟩ − log⟨π, R⟩
ε ≥ (Rk − Rj)
⟨π, R⟩ . Moreover since Rk ≥ 0, and j ∈ supp(π) we have that
ε(Rk − Rj)
⟨π, R⟩ ≥ − εRj
⟨π, R⟩ ≥ − ε
πj
.
Specifically, as x 7→ x/(1 + x) is increasing on (−1, ∞) the following inequalities hold for all ε ≤ πj/2:
1
ε (log⟨π + εt, R⟩ − log⟨π, R⟩) ≥
(Rk−Rj ) ⟨π,R⟩
1 + ε(Rk−Rj )
⟨π,R⟩
≥
−1
πj
1− ε
πi
≥− 2
πj
.
This supplies a uniform lower bound, so by taking expectations and applying Fatou’s lemma we have
(B.3) lim inf
ε↓0
J(π + εt) − J(π)
ε ≥ E (Rk − Rj)
⟨π, R⟩ − (mk − mj) = g⋆
k(π) − g⋆
j (π).
Combining our estimates (B.2) and (B.3) we have23
g⋆
k(π) − g⋆
j (π) ≤ gk − g⋆
j (π) + λ.
Equivalently, g⋆
k(π) − λ ≤ gk. Letting μk := gk − (g⋆
k(π) − λ) ≥ 0 for all k ̸∈ S and
μj = 0 for j ∈ S recovers the claimed representation for any g ∈ ∂+
∆n J (π). □
References
[1] J. Aitchison. Principles of compositional data aanalysis. In Lecture Notes-Monograph Series, pages 73–81. Institute of Mathematical Statistics, 1994. [2] P. H. Algoet and T. M. Cover. Asymptotic optimality and asymptotic equipartition properties of log-optimum investment. The Annals of Probability, pages 876–898, 1988. [3] S.-I. Amari. α-divergence is unique, belonging to both f -divergence and Bregman divergence classes. IEEE Transactions on Information Theory, 55(11):4925–4931, 2009. [4] S.--
I. Amari. Information Geometry and Its Applications. Springer, 2016.
[5] A. Banner, R. Fernholz, V. Papathanakos, J. Ruf, and D. Schofield. Diversification, volatility, and surprising alpha. Journal of Investment Consulting, 19(1):23–30, 2019. [6] J.-F. Bercher. Source coding with escort distributions and Re ́nyi entropy bounds. Physics Letters A, 373(36):3235–3238, 2009.
23It is clear here that g⋆(π) must be finite since −mj ≤ g⋆
j (π) ≤ 1/πj − mj for all j ∈ S, and −mk ≤ g⋆
k(π) ≤ gk + λ for k ̸∈ S.

52 STEVEN CAMPBELL AND TING-KAM LEONARD WONG
[7] D. Bertsekas. Convex optimization theory, volume 1. Athena Scientific, 2009. [8] D. G. Booth and E. F. Fama. Diversification returns and asset contributions. Financial Analysts Journal, 48(3):26–32, 1992. [9] D. Bordoli and R. Iijima. Convex cost of information via statistical divergence. arXiv preprint arXiv:2509.00229, 2025.
[10] P. Bouchey, V. Nemtchinov, A. Paulsen, and D. M. Stein. Volatility harvesting: Why does diversifying and rebalancing create portfolio growth. The Journal of Wealth Management, 15(2):26–35, 2012. [11] P. Bouchey, V. Nemtchinov, and T.-K. L. Wong. Volatility harvesting in theory and practice. The Journal of Wealth Management, 18(3):89, 2015.
[12] S. P. Boyd and L. Vandenberghe. Convex optimization. Cambridge University Press, 2004. [13] L. M. Bregman. The relaxation method of finding the common point of convex sets and its application to the solution of problems in convex programming. USSR Computational Mathematics and Mathematical Physics, 7(3):200–217, 1967.
[14] L. Breiman. Optimal gambling systems for favorable games. In Proceedings of the Fourth Berkeley Symposium on Mathematical Statistics and Probability, Volume 1: Contributions to the Theory of Statistics, volume 4, pages 65–79. University of California Press, 1961. [15] L. L. Campbell. A coding theorem and Re ́nyi’s entropy. Information and Control, 8(4):423429, 1965. [16] S. Campbell, Q. Song, and T.-K. L. Wong. Macroscopic properties of equity markets: stylized facts and portfolio performance-
. Quantitative Finance, 2025. Forthcoming. [17] T. M. Cover and J. A. Thomas. Elements of Information Theory. John Wiley & Sons, second edition, 2006. [18] T. M. Cover and J. A. Thomas. Elements of information theory. John Wiley & Sons, 2nd edition, 2006. [19] I. Csisz ́ar. Axiomatic characterizations of information measures. Entropy, 10(3):261–273, 2008.
[20] A. Dembo. Large Deviations: Techniques and Applications. Springer, 2009.
[21] J. M. Dickey. Three multidimensional-integral identities with Bayesian applications. The Annals of Mathematical Statistics, pages 1615–1628, 1968.
[22] C. Ding and H. Qi. An optimization study of diversification return portfolios. arXiv preprint arXiv:2303.01657, 2023.
[23] B. Ebanks, P. Kannappan, and C. Ng. Generalized fundamental equation of information of multiplicative type. Aequationes Math, 32(1):19–31, 1987. [24] J. J. Egozcue, V. Pawlowsky-Glahn, G. Mateu-Figueras, and C. Barcelo-Vidal. Isometric logratio transformations for compositional data analysis. Mathematical Geology, 35(3):279300, 2003. [25] I. Erb and N. Ay. The information-geometric perspective of compositional data analysis. In Advances in Compositional Data Analysis: Festschrift in Honour of-
 Vera Pawlowsky-Glahn, pages 21–43. Springer, 2021. [26] E. R. Fernholz. Stochastic Portfolio Theory. Springer, 2002. [27] E. R. Fernholz, I. Karatzas, and J. Ruf. Volatility and arbitrage. The Annals of Applied Probability, 28(1):378–417, 2018. [28] R. Fernholz. On the diversity of equity markets. Journal of Mathematical Economics, 31(3):393–417, 1999. [29] R. Fernholz and I. Karatzas. Relative arbitrage in volatility-stabilized markets. Annals of Finance, 1(2):149–177, 2005. [30] R. Fernholz and-
 I. Karatzas. Stochastic portfolio theory: an overview. In P. G. Ciarlet, editor, Handbook of Numerical Analysis, volume 15, pages 89–167. Elsevier, 2009. [31] R. Fernholz and C. Maguire Jr. The statistics of statistical arbitrage. Financial Analysts Journal, 63(5):46–52, 2007. [32] R. Fernholz and B. Shay. Stochastic portfolio theory and stock market equilibrium. The Journal of Finance, 37(2):615–624, 1982. [33] M. Grabisch, J.-L. Marichal, R. Mesiar, and E. Pap. Aggregation Functions. Cambridge -
University Press, 2009.
[34] P. Kannappan. Functional Equations and Inequalities with Applications. Springer Science & Business Media, 2009.

A MATHEMATICAL STUDY OF THE EXCESS GROWTH RATE 53
[35] P. Kannappan and C. Ng. On a generalized fundamental equation of information. Canadian Journal of Mathematics, 35(5):862–872, 1983.
[36] J. L. Kelly. A new interpretation of information rate. The Bell System Technical Journal, 35(4):917–926, 1956. [37] M. Larsson, A. Ramdas, and J. Ruf. The numeraire e-variable and reverse information projection. The Annals of Statistics, 53(3):1015–1043, 2025. [38] T. Leinster. Entropy and Diversity: The Axiomatic Approach. Cambridge University Press, 2021. [39] T. Leinster and C. A. Cobbold. Measuring diversity: the importance of species similarity. Ecology, 93(3):477–489, 2012. [40] L. C. M-
acLean, E. O. Thorp, and W. T. Ziemba. The Kelly Capital Growth Investment Criterion: Theory and Practice. World Scientific, 2011.
[41] J.-M. Maeso and L. Martellini. Maximizing an equity portfolio excess growth rate: a new form of smart beta strategy? Quantitative Finance, 20(7):1185–1197, 2020. [42] P. C. Mahalanobis. On the generalized distance in statistics (reprint). Sankhya ̄: The Indian Journal of Statistics, Series A, 80:S1–S7, 2018.
[43] D. Mantilla-Garcia, J. Malagon, and J. R. Aldana-Galindo. Can the portfolio excess growth rate explain the predictive power of idiosyncratic volatility? Finance Research Letters, 47:102577, 2022. [44] G. Mateu-Figueras, G. S. Monti, and J. Egozcue. Distributions on the simplex revisited. In Advances in Compositional Data Analysis: Festschrift in Honour of Vera Pawlowsky-Glahn, pages 61–82. Springer, 2021. [45] G. S. Monti, G. Mateu-Figueras, V. Pawlowsky-Glahn, and J. J. Egozcue. The shifted--
scaled Dirichlet distribution in the simplex. In Proceedings of the 4th International Workshop on Compositional Data Analysis, 2011.
[46] F. Nielsen, J.-D. Boissonnat, and R. Nock. Bregman voronoi diagrams: properties, algorithms and applications. arXiv preprint arXiv:0709.2196, 2007.
[47] F. Orabona and K.-S. Jun. Tight concentrations and confidence sequences from the regret of universal portfolio. IEEE Transactions on Information Theory, 70(1):436–455, 2023. [48] S. Pal and T.-K. L. Wong. Energy, entropy, and arbitrage. arXiv preprint arXiv:1308.5376, 2013. [49] S. Pal and T.-K. L. Wong. The geometry of relative arbitrage. Mathematics and Financial Economics, 10(3):263–293, 2016. [50] S. Pal and T.-K. L. Wong. Exponentially concave functions and a new information geometry. Th-
e Annals of Probability, 46(2):1070–1113, 2018.
[51] S. Pal and T.-K. L. Wong. Multiplicative Schr ̈odinger problem and the Dirichlet transport. Probability Theory and Related Fields, 178(1):613–654, 2020.
[52] R. K. Pathria and P. D. Beale. Statistical Mechanics. Academic Press, fourth edition, 2021. [53] Y. Polyanskiy and Y. Wu. Information Theory: From Coding to Learning. Cambridge University Press, 2025. [54] E. E. Qian. Portfolio Rebalancing. CRC Press, 2018. [55] A. Ramdas and R. Wang. Hypothesis testing with e-values. arXiv preprint arXiv:2410.23614, 2024. [56] A. Re ́nyi. On measures of entropy and information. In Proceedings of the Fourth Berkeley Symposium on Mathematical Statistics and Pr-
obability, volume 1: Contributions to the Theory of Statistics, volume 4, pages 547–562. University of California Press, 1961. [57] R. T. Rockafellar. Convex Analysis. Princeton University Press, 1997. [58] J. Ruf and K. Xie. The impact of proportional transaction costs on systematically generated portfolios. SIAM Journal on Financial Mathematics, 11(3):881–896, 2020.
[59] C. E. Shannon. A mathematical theory of communication. The Bell System Technical Journal, 27(3):379–423, 1948. [60] X. Tian, T.-K. L. Wong, J. Yang, and J. Zhang. Maximum likelihood estimation for the λ-exponential family. arXiv preprint arXiv:2505.03582, 2025.
[61] T. Van Erven and P. Harremos. R ́enyi divergence and Kullback-Leibler divergence. IEEE Transactions on Information Theory, 60(7):3797–3820, 2014.
[62] S. Willenbrock. Diversification return, portfolio rebalancing, and the commodity return puzzle. Financial Analysts Journal, 67(4):42–49, 2011.

54 STEVEN CAMPBELL AND TING-KAM LEONARD WONG
[63] T.-K. L. Wong. Logarithmic divergences from optimal transport and R ́enyi geometry. Information Geometry, 1(1):39–78, 2018. [64] T.-K. L. Wong. Information geometry in portfolio theory. In Geometric Structures of Information, pages 105–136. Springer, 2019. [65] T.-K. L. Wong and J. Yang. Logarithmic divergences: geometry and interpretation of curvature. In International Conference on Geometric Science of Information, pages 413–422. Springer, 2019. [66] T.-K. L. Wong and J. Zhang. Tsallis and -
Re ́nyi deformations linked via a new λ-duality. IEEE Transactions on Information Theory, 68(8):5353–5373, 2022.
Department of Statistics, Columbia University Email address: sc5314@columbia.edu
Department of Statistical Sciences, University of Toronto Email address: tkl.wong@utoronto.ca

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:26.992Z
- **Text Length:** 128172 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 54 of 54
