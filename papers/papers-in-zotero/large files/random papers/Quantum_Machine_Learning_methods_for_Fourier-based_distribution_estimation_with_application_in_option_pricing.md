# PDF Document: Alonso et al. - 2025 - Quantum Machine Learning methods for Fourier-based distribution estimation with application in optio.pdf

**File Path:** Alonso et al. - 2025 - Quantum Machine Learning methods for Fourier-based distribution estimation with application in optio.pdf

**Processed Date:** 2026-02-10T18:15:45.747Z

**File Size:** 1230.15 KB

**Total Pages:** 27

**Extracted Pages:** 27

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3497

**Title:** Quantum Machine Learning methods for Fourier-based distribution estimation with application in option pricing

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Quantum Machine Learning methods for Fourier-based
distribution estimation with application in option pricing
Fernando Alonso1,2, A ́ lvaro Leitao1,3,*, and Carlos Va ́zquez1,3
1CITIC Research center, Spain 2Galician Supercomputing Center (CESGA), Spain 3Department of Mathematics, University of A Corun ̃a, Spain *Corresponding author: alvaro.leitao@udc.gal
October 23, 2025
Abstract
The ongoing progress in quantum technologies has fueled a sustained exploration of their
potential applications across various domains. One particularly promising field is quantita
tive finance, where a central challenge is the pricing of financial derivatives—traditionally
addressed through Monte Carlo integration techniques. In this work, we introduce two hybrid
classical–quantum methods to address the option pricing problem. These approaches rely
on reconstructing Fourier series representations of statistical distributions from the outputs
of Quantum Machine Learning (QML) models based on Parametrized Quantum Circuits
(PQCs). We analyze the impact of data size and PQC dimensionality on performance.
Quantum Accelerated Monte Carlo (QAMC) is employed as a benchmark to quantitatively
assess the proposed models in terms of computational cost and accuracy in the extraction of
Fourier coefficients. Through the numerical experiments, we show that the proposed meth
ods achieve remarkable accuracy, becoming a competitive quantum alternative for derivatives
valuation.
1 Introduction
Quantum computing is a field that studies how information processing can be optimized by
leveraging the principles of quantum mechanics. Since its inception, significant advances have
been made in the design of algorithms and the development of quantum hardware. This has led
to a surge in quantum technologies and a continuous search for their applications across various
areas. One of these areas is quantitative finance, and the main reason for exploring this field
is that some of the internal procedures currently used by financial institutions require highly
demanding computations. One of the most relevant applications in finance is the valuation of
financial derivatives, which consists of determining the price of a derivative at any date prior to
a known maturity date, given by a payoff established in the contract. A derivative is a financial
contract, the price of which depends on the future evolution of one or several financial products
or rates, which are referred to as underlying. Options represent a main class of derivatives (see
[1], for a general introduction to options and derivatives).
1
arXiv:2510.19494v1 [quant-ph] 22 Oct 2025

Several proposals of quantum computing developments for financial applications have been
explored in recent years, including the pricing of financial derivatives, as described in some review
articles (see [2], [3] or [4], for example). Among the possible quantum computing techniques for
options pricing, we can find the so-called Quantum Accelerated Monte Carlo (QAMC) algorithms
(see [5], [6] or [7], for example). For these algorithms, the pricing problem is posed in terms of
an expectation, which leads to the computation of an integral. In the QAMC approach, this
integral is mainly obtained by means of an amplitude estimation algorithm, where the solution
of the integral is encapsulated into the amplitude of a quantum state. More precisely, three
main steps are involved: a quantum circuit to sample the paths for a prescribed probability
distribution, a quantum operator to encode the payoff of the derivative and the aforementioned
amplitude estimation routine. This idea has been recently exploited in [8], where a specific
QAMC method proposed in [9] is applied to price derivatives with potential negative price. We
note that other recent methodologies to calculate integrals with quantum computers are based on
the decomposition of the integrand into Fourier series using quantum machine learning models,
such as in [10] or [11]. Alternative formulations for option pricing based on partial differential
equations (PDEs) transform the classical PDE for the problem into the propagation governed
by an appropriate Hamiltonian operator (see [12], with additional ideas in [13] and [14]).
The core ingredient in the present work relies on the area of Quantum Machine Learning
(QML), from which different proposals have already been made to address financial problems,
such as in [15], [16] or [17], for example. Among the QML models, one of the most well
known approaches is to construct quantum circuits containing sets of gates, some of which
depend on certain parameters that are typically adjusted according to a criterion based on the
output of the circuit, thus looking for the set of parameters that provides the optimal value
that minimizes a cost function. This classical–quantum concept is known in the literature
as Parametrized Quantum Circuits (PQCs). In the context of QML, the ability of PQCs to
approximate functions belonging to certain functional spaces has been studied in works like [18]
and [19], with positive results when PQCs configurations are expressed in terms generalized
trigonometric series. More recently, in [8] and [20] a rigorous analysis has been carried out on
the approximation of continuous functions and functions in different Sobolev spaces by means
these PQCs configurations. In the present article, we recall some of the theorems from [20]
that constitute the theoretical basis of the here proposed QML methodology to approximate
the involved probability distributions by means of PQCs. More recently, in [11] the authors
propose a methodology for computing Monte Carlo integrals by decomposing the integrand in
trigonometric Fourier series, the coefficients of which are approximated by specific PQCs, namely
the so called quantum neuronal networks (QNN). Next, the integration of the trigonometric
terms is performed with iterated quantum amplitude estimation techniques (IQAE). Unlike the
work in [11], in this article we address the Fourier expansion of the payoff of the derivative
with the exact coefficients while the probability distribution is obtained from PQCs, that learn
the respective Fourier coefficients. Then, the integral estimate can be obtained as the sum
of products of coefficients corresponding to the expansion of the two factors of the integral,
namely the payoff and the probability distribution. Indeed, for the probability distribution
we propose two characterization: the probability density function or the cumulative density
function. Moreover, in our financial application, this approach provides the relevant flexibility
2

with great practical interest of getting the information about the probability distribution from
samples of the prices of the underlying taken from the market.
Thus, in the present article, a classical–quantum method for the pricing of financial deriva
tives is proposed and formulated, based on the outputs of QML models built with PQCs, that
enables to address the valuation problem pricing from a novel perspective, combining QML
tools with fundamental principles of quantitative finance. Within this framework, two different
training approaches have been developed to calculate the price of the derivative with the goal
of leveraging the expressive power and generalization capabilities that these models offer, in
various practical scenarios. Moreover, in order to assess the performance of the designed circuits
through numerical results, QAMC is used to obtain a meaningful comparison in terms of both
cost and accuracy in the extraction of Fourier coefficients.
The manuscript is organized as follows. In Section 2, we introduce the fundamental concepts
that will serve as a foundation throughout the article. More precisely, in Section 2.1, an overview
of the pricing problem is given; in Section 2.2, we demonstrate how, with an appropriate choice
of PQC, it is possible to construct Fourier series capable of approximating specific functions;
and in Section 2.3, a brief overview is provided on how the QAMC tackles the problems written
in terms of expectations. Section 3 is devoted to the introduction of the newly proposed method
based on the use of a QML model built on PQCs. In the first part, Section 3.1, the mathe
matical formulation of the first two methods is presented. In the second part, Section 3.2, the
implementation of each method is carefully described. Then, in Section 4, the numerical results
obtained are presented, specifying the experimental settings in Section 4.1, and discussing the
impact of the data size and the PQC dimension schemes employed in Section 4.2.1 and Section
4.2.2, respectively. Finally, the main conclusions are summarized in Section 5.
2 Preliminaries
2.1 Basic concepts on options pricing
One of the fundamental areas in quantitative finance concerns the pricing of financial derivatives.
A derivative is a financial product whose price depends on the price of another financial product
or the value of another financial magnitude (interest rate, exchange rate, etc.) on future dates.
This financial magnitude or product is referred to as an underlying factor or underlying asset. In
the class of European derivatives, there is usually a unique future date to be considered that is
termed the maturity date. Thus, the pricing of financial derivatives consists in determining the
price of the derivative at any date prior to its maturity, as the value at maturity is known and
given by a payoff established in the contract. Among financial derivatives, which also include
forward contracts and futures among others, we will focus on options contracts. European
options give the owner the right, but not the obligation, to buy/sell the underlying asset at
maturity date or receive the payoff at that date (for example, see [1] for a review of option
types, practical use, and their pricing). Therefore, option pricing requires taking into account
the future and uncertain dynamics of the underlying asset price, which is assumed to be a
stochastic process (i.e., a random variable at each time). Such dynamics is typically modeled in
terms of stochastic differential equations (SDEs). Therefore, the option price is also a stochastic
3

2.2 PQCs as universal approximators
process.
In this section, we introduce the main mathematical concepts and notation to address the
option pricing techniques proposed in this article. Let St and vt, respectively, denote the prices
of the underlying asset and the option at time t ∈ [0, T ], where T is the maturity date. In view of
the previous arguments, we can assume that vt = V (t, St), for some function V : [0, T ] × R → R
that relates the option price to time and the underlying asset price. A European option specifies
the payoff h received by its holder at maturity date, which depends on the underlying asset price
at maturity date:
vT = h(T, ST ).
Using option pricing theory (see [1], for example), the price of a European option at time
t < T can be obtained in terms of a conditional expectation in the form:
vt = e−r(T −t)EQ [h(T, ST ) | Ft] = e−r(T −t)
Z
R
h(T, y) f (y | Ft) dy, (1)
where EQ denotes the expectation under a probability measure Q1, r is the constant risk-free
interest rate and Ft denotes the σ-algebra containing the market information available up to
time t, which is assumed to be known. Moreover, f (·) is the probability density function (PDF)
of the asset price process St under Q.
Note that the expression (1) indicates that the value of the derivative at time t is the discounted
price of the expected payoff, conditional on the market information available up to time t.
Moreover, in view of expression (1), the computation of the expectation to obtain the option
price requires appropriate integration methods for general payoff and PDF expressions. In the
present research work we mainly aim to take advantage of QML techniques to estimate the PDF
and approximate this integral.
2.2 PQCs as universal approximators
A very common approach within the quantum-classical framework of QML consists of using
trainable quantum circuits as models, in a similar way to neural networks. In this approach,
quantum gates are used both to encode the data inputs, x = (x1, . . . , xN ), and to implement
trainable weights, θ = (θ1, . . . , θM ). The circuit is measured multiple times to estimate the
expected value of an observable, and this result is understood as a prediction, leading to the
implementation of a function fθ(x). This approach is referred by various authors in the literature
as PQCs (see for example [21], [22] or [23]). The information extracted from the circuit and the
process of evaluating the cost function are both classical, which makes PQC-based algorithms
hybrid.
Let a univariate quantum model be defined as the expectation value of an observable with
respect to a state prepared by a PQC, that is:
fθ(x) = ⟨0|U †(x, θ)M U (x, θ)|0⟩,
1In the literature, it is common to refer to it as the risk-neutral measure.
4

2.2 PQCs as universal approximators
where |0⟩ is one of the computational basis states, U (x, θ) is a quantum circuit that depends
on the input (x) and on a set of parameters (θ), and M is an observable. The quantum circuit
representing our model will be constructed from L layers, each one consisting of a data-encoding
block SH (x) and a trainable block W (θ) controlled by the parameters θ, as shown in Figure
1. For simplicity, in the subsequent developments, we will assume that the trainable blocks are
arbitrary unitary operations, i.e., W (θ) = W , and we will omit the subscript in fθ hereafter.
Thus, the total quantum circuit has the form
U (x) = W (L+1)(θ)SH (x)W (L)(θ) · · · W (2)(θ)SH (x)W (1)(θ), (2)
where the data-encoding block is identical in each layer and has the form SH (x) = e−x1H ⊗ · · · ⊗
e−xN H , for H a Hamiltonian that generates the time evolution used to encode the data.
...
Figure 1: Scheme of a quantum circuit composed of L layers, where each layer consists of a trainable circuit block W (i)(θ), with i ∈ {1, . . . , L}, and a data-encoding block SH (x), from [18].
In this context, the fundamental idea under the developments we will carry out is that, given
an appropriate choice of circuits, the quantum function representing our model can be written
as a Fourier series of the form
fθ(x) =
X
ω∈Ω
cω (θ)eiωx .
Several references in the literature prove that the frequency spectrum (Ω ⊆ RN ) is completely
determined by the eigenvalues of the Hamiltonians forming the encoding block, while the com
plete circuit design controls the coefficients (cω) that a quantum model can adjust (for example,
see [18] and [19]). Moreover, in many cases the frequencies are integers (Ω ⊆ ZN ), and the sum
becomes a partial Fourier series2
fθ(x) =
X
n∈Ω
cn(θ)einx,
2The term partial Fourier series indicates that only a subset of the Fourier coefficients are nonzero.
5

2.2 PQCs as universal approximators
where the functions einx form an orthogonal basis. This formalism allows quantum models to
be studied using the tools of Fourier analysis.
From the aforementioned results, it arises the intuition that, employing a sufficiently large
number of repetitions of encoding gates or Hamiltonians with sufficiently large dimension and
suitably non-degenerate spectrum, quantum models can approximate a wide range of functions.
Thus two key aspects appear: the universality and the expressivity of PQCs, that is, the
ability of PQCs to approximate any function belonging to a given function space defined over
a prescribed domain, up to arbitrary precision with respect to a specific norm. This idea was
first explored in [18] and [19], and following these developments it is shown that, if trainable
circuit blocks are allowed with sufficient flexibility to implement arbitrary global unitary gates,
then there exists a quantum model with L = 1 capable of realizing any possible set of Fourier
coefficients.
Furthermore, in [24] and Chapter 5 of [20] it has been proven that PQCs can approximate
arbitrarily well the space of continuous functions, the space of p-integrable functions and the
Sobolev space Hk, which is the set of functions whose derivatives up to order k are L2-integrable.
Before recalling these results, it is necessary to introduce the following definition of universal
Hamiltonian family proposed in [18].
Definition 2.1. Let {Hm | m ∈ N} be a Hamiltonian family where Hm acts on m subsystems
of dimension d. Such a Hamiltonian family gives rise to a family of models {fm} in the following
way:
fm(x) = ⟨Γ | S†
Hm(x)M SHm(x) | Γ⟩. (3)
Furthermore, for each m ∈ N, the set ΩHm := λjm − λkm j, k ∈ {1, . . . , dm} , where
{λ1m, . . . , λdmm} are the eigenvalues of Hm, is defined as the frequency spectrum of Hm. A Hamil
tonian family is a universal Hamiltonian family if for any Z ∈ N there exists m ∈ N such that
{−Z, . . . , 0, . . . , Z} ⊂ Hm(Ω).
Based on the previous definition, in Chapter 5 of [20], the following three theorems have been
proved.
Theorem 2.1. (Convergence in C0)
Let {Hm} be a universal Hamiltonian family, and {fm} the associated quantum model family
(3). For all functions f ∗ ∈ C0(U ) where U is compactly contained in [0, 2π]N , and for all ε > 0,
there exists some m′ ∈ N, some state |Γ⟩ ∈ Cdm′ , and some observable M such that fm′ converges
uniformly to f ∗:
∥fm′ − f ∗∥C0 < ε.
with
∥fm′ − f ∗∥C0 := sup
x∈[0,2π]N
∥fm′(x) − f ∗(x)∥.
Theorem 2.2. (Convergence in Lp)
Let {Hm} be a universal Hamiltonian family, and {fm} the associated quantum model family
(3). For all functions f ∗ ∈ Lp [0, 2π]N where 1 ≤ p < ∞, and for all ε > 0, there exists some
6

2.3 Quantum accelerated Monte Carlo techniques
m′ ∈ N, some state |Γ⟩ ∈ Cdm′ , and some observable M such that:
∥fm′ − f ∗∥Lp < ε,
with
∥fm′ − f ∗∥Lp :=
Z
[0,2π]N
|fm′ − f ∗|p dP
!1/p
.
Theorem 2.3. (Convergence in Hk)
Let {Hm} be a universal Hamiltonian family and {fm} the associated quantum model family
(3). For all functions f ∗ ∈ Hk+1(U ) where U is compactly contained in the closed cube [0, 2π]N ,
and for all ε > 0, there exists some m′ ∈ N, some state |Γ⟩ ∈ Cdm′ , and some observable M
such that fm′ converges to f ∗ with respect to the Hk–norm:
∥fm′ − f ∗∥Hk < ε,
with
∥fm′ − f ∗∥Hk :=


X
|α|≤k
Z
U
∂|α|
∂x1α1 · · · ∂xαN
N
(fm′ − f ∗)(x)
2
dP (x)


1/2
.
As discussed in Chapter 6 of [20], the relevance of these results is that the generalization
bounds of the empirical risk defined in H1 imply the minimization of the empirical risk in C0.
This is really strong because the convergence in the sense of C0 is equivalent to a convergence
of every point to the true solution.
2.3 Quantum accelerated Monte Carlo techniques
Monte Carlo method is one of the best-known integration techniques for solving option pricing
problems, when formulated in terms of expectations. This method gives an approximation of
the value of definite integrals by generating random samples within the integration region and
computing the average value of the function evaluated in these samples [25].
Let us consider the definite integral
E[g(x)] =
Z xmax
xmin
g(x)f (x) dx,
where f is a PDF with support contained in the interval [xmin, xmax] and g is a function of
interest, namely, the payoff in the options pricing problem. The Monte Carlo method consists
in generating I independent and identically distributed samples xi, for i = 0, . . . , I − 1, drawn
from the PDF f , such that the value of the integral is approximated by
Z xmax
xmin
g(x)f (x) dx ≈
I −1
X
i=0
g(xi)f (xi).
Since this method can be computationally demanding for certain types of integrals, in recent
7

years the advantages offered by quantum computing have been exploited to develop the QAMC
method [26], which achieves a quadratic improvement, in terms of the mean squared error, in
the number of queries required compared to its classical counterpart.
The idea behind this method is to encapsulate the value of the expectation within the am
plitudes of a quantum state, and then maximize the probability of obtaining this value when
performing a measurement. For this purpose, the following state is constructed
|ψ⟩ =
2n−1
X
x=0
pg(x)f (x) |x⟩n|1⟩ +
2n−1
X
x=0
p(1 − g(x))f (x) |x⟩n|0⟩.
If we now conveniently define the following quantities
q=
2n−1
X
x=0
g(x)f (x) ≈ E[g(x)]
|ψ ̃1⟩ = √1q
2n−1
X
x=0
pg(x)pf (x) |x⟩n,
|ψ ̃0⟩ = 1
√1 − q
2n−1
X
x=0
p1 − g(x)pf (x) |x⟩n,
and rewrite |ψ⟩ as
|ψ⟩ = √q |ψ ̃1⟩|1⟩ + p1 − q |ψ ̃0⟩|0⟩,
we can observe that the problem can be solved through Quantum Amplitude Estimation (QAE)
[27], since the probability of the state a corresponds to the integral to be computed, that
estimates E[g(x)].
However, QAMC presents some drawbacks for which several modifications of its original for
mulation have been proposed. For instance, to address the problem that emerges from the
Quantum Phase Estimation (QPE) [28] subroutine, alternatives such as the Iterative Quantum
Amplitude Estimation (IQAE) [29] or the Real Quantum Amplitude Estimation (RQAE) [9]
have been developed. Furthermore, to adequately prepare the initial quantum state different
ideas have been proposed, as discussed in [30], [31], and [32]. Other approaches include methods
based on decomposing the integrand into Fourier series, such as Fourier Quantum Monte Carlo
Integration (FQMCI) [10] or Quantum Fourier Iterative Amplitude Estimation (QFIAE) [11],
which propose ways to compute the Fourier series using QML.
3 Formulation and methodology
As previously mentioned, in quantitative finance, efficient numerical methods are required to
value complex contracts and calibrate various financial models. Existing methods can be classi
fied into three main groups: numerical methods for partial differential equations, Monte Carlo
simulation techniques, and numerical integration methods, each presenting its own advantages
and disadvantages depending on the specific financial application.
As mentioned before, the rise of quantum computing can lead to a new set of methods which
8

3.1 Fourier series approximation of PDF and CDF
can accelerate numerical simulations and potentially achieve more efficient valuation and cal
ibration of complex financial models. In this work, we explore such potential through classi
cal–quantum techniques built on PQC-based QML models. The following sections describe the
formulation and implementation of these techniques, along with the methodology
3.1 Fourier series approximation of PDF and CDF
The here proposed approaches rely on the use of trigonometric Fourier series, that is, series
based on sine and cosine functions. They rely on the same idea, although their main difference
is that the first one uses the trigonometric series of the PDF, as in [33], and the second one uses
the trigonometric series of the cumulative distribution function (CDF), as in [34].
3.1.1 PDF approximation formulation
Returning to the formulation (1) of the derivative pricing problem for European vanilla options,
the starting point lies in the calculation of the pricing formula under the risk-neutral measure,
given by
V (t0, x) = e−r(T −t0) EQ[h(T, y)|x] = e−r(T −t0)
Z
R
h(T, y)f (y|x) dy, (4)
where x and y are the state variables at times t0 and T , respectively, and f (y|x) is the probability
density of y conditioned on x.
In finance, it is common to work in practice with PDFs whose tails tend to vanish, so it can be
assumed that there exists an interval [a, b] ⊂ R such that the integral in (4) can be approximated
without significant loss of accuracy, i.e.,
V (t0, x) ≈ e−r(T −t0)
Zb
a
h(T, y)f (y|x) dy. (5)
Since f (y|x) is usually not known explicitly, we can approximate the density by its K-truncated
trigonometric Fourier series expansion in y
f (y|x) ≈ Af
0
2+
K
X
k=1
Af
k cos 2πk (y − a)
b − a + Bf
k sin 2πk (y − a)
b − a , (6)
where
Af
k= 2
b−a
Zb
a
f (y|x) cos 2πk (y − a)
b − a dy,
and
Bf
k= 2
b−a
Zb
a
f (y|x) sin 2πk (y − a)
b − a dy.
It should be remarked that regarding the underlying asset price process, we can use the same
arguments as in [33] to ensure that, due to the conditions required for the existence of the Fourier
series, it is possible to truncate the number of terms in the series while controlling the accuracy.
9

3.1 Fourier series approximation of PDF and CDF
By substituting equation (6) into equation (5), we obtain
V (t0, x) ≈ e−r(T −t0)
Zb
a
h(T, y) Af
0
2+
K
X
k=1
Af
k cos 2πk (y − a)
b−a
!
dy
+ e−r(T −t0)
Zb
a
h(T, y)
K
X
k=1
Bf
k sin 2πk (y − a)
b − a dy.
(7)
Next, if we now exchange the summation and the integral in (7) and introduce the definitions
Ck := 2
b−a
Zb
a
h(T, y) cos 2πk (y − a)
b − a dy,
and
Dk := 2
b−a
Zb
a
h(T, y) sin 2πk (y − a)
b − a dy,
we obtain
V (t0, x) ≈ 1
2 (b − a)e−r∆t Af
0 · C0
2+
K
X
k=1
Af
k · Ck + Bf
k · Dk
!
.
It should be noted that Ck and Dk are the coefficients of the trigonometric Fourier series of
h(T, y). Thus, the integral of the product of two real functions, f (y|x) and h(T, y) has been
transformed into the sum of the product of the respective coefficients of their trigonometric
Fourier series.
3.1.2 CDF approximation formulation
In the original formulation of the valuation integral, the integrand may have either infinite or
bounded support, and the payoff function may be only piecewise smooth and have discontinuities.
Therefore, working directly with the PDF can be numerically unstable or ill-posed. Unlike the
PDF, the CDF provides a smoother and continuous representation of the underlying variable’s
behavior regardless its critical features, which allows to efficiently handle discontinuities and to
come up with more stable numerical approximations.
Firstly, assuming that the derivative of the payoff function has a discontinuity at c ∈ [a, b], we
split valuation integral as
V (t0, x) = e−r(T −t0)
Zb
a
h(T, y)f (y|x) dy
= e−r(T −t0)
Zc
a
h(T, y)f (y|x) dy +
Zb
c
h(T, y)f (y|x) dy .
Then, integrating by parts we obtain
V (t0, x) = e−r(T −t0) (h(T, b)F (b) − h(T, a)F (a))
− e−r(T −t0)
Zc
a
h′(T, y)F (y) dy +
Zb
c
h′(T, y)F (y) dy ,
(8)
10

3.2 Methodology
where the CDF is given by
F (y) =
Zy
−∞
f (x) dx.
Following the same reasoning as before, it is possible to define the Fourier series of period 2(b−a)
in an interval [ˆa, bˆ], whose election will be later motivated. Thus, the Fourier series of the CDF
is
F (y) ≈ A0F
2+
K
X
k=1
AkF cos 2πk (y − aˆ)
bˆ − aˆ + BkF sin 2πk (y − aˆ)
bˆ − aˆ . (9)
Substituting (9) in (8) and exchanging the summation with the integral we obtain
V (t0, x) ≈ e−r∆t (h(T, b)F (b) − h(T, a)F (a))
− e−r∆t A0F · C0a
2+
K
X
k=1
AkF · Cka + BkF · Dka
!
− e−r∆t A0F · C0b
2+
K
X
k=1
AkF · Ckb + BkF · Dbk
!
where
Cka :=
Zc
a
h′(T, y) cos 2πk (y − aˆ)
ˆb − aˆ dy, Dka :=
Zc
a
h′(T, y) sin 2πk (y − aˆ)
ˆb − aˆ dy,
Ckb :=
Zb
c
h′(T, y) cos 2πk (y − aˆ)
bˆ − aˆ dy, Dbk :=
Zb
c
h′(T, y) sin 2πk (y − aˆ)
ˆb − aˆ dy.
(10)
It should be remarked that, in contrast with the previous method, the quantities defined in (10)
do not correspond to the Fourier coefficients of the series that approximates h(T, y), because
the integration domain does not match with the one of the basis functions.
3.2 Methodology
As mentioned before, the proposed technique is based on the approximation of functions through
Fourier series extracted from the QML models built on PQCs. This approximation allows for a
flexible capture of the functional structure of the distributions involved in the pricing models,
taking advantage of the expressive and differentiable capabilities of these models. Moreover,
the integration of classical and quantum computing provides an alternative framework for the
valuation of derivatives and the approximation of complex financial functions. For this purpose,
three approaches have been designed.
In the first one, supervised learning is employed, using datasets that contain both inputs and
labeled outputs. In this case, a PQC is trained to approximate the PDF of the variable represent
ing the underlying asset price and to extract its Fourier series. The coefficients corresponding
to the payoff of the derivative are obtained analytically.
The second approach is more realistic from a practical point of view, since in derivatives
pricing one rarely has access to the exact PDF of the underlying asset price, but to asset price’s
evolution in time. Therefore, in this second case, self-supervised learning is employed, after
providing the model with a sufficiently representative set of asset samples. From these samples,
11

3.2 Methodology
the model must infer the implicit distribution and estimate the coefficients needed to calculate
the price of the derivative.
Note that, as argued in [20], in both cases it is assumed that the probability distribution
P (x, y) yields a deterministic mapping for some function g∗ : X → Y. Therefore, to solve the
classical problem
g = arg min
gˆ∈M R(gˆ),
for M a subset of functions in some functional space. Instead of working with the joint proba
bility distribution P (x, y), so that
R(g) =
Z
X ×Y
l(g∗(x), g(x)) dP (x, y),
it is possible to work with the marginal distribution PX = PX (x), so that
R(g) =
Z
X
l(g∗(x), g(x)) dPX (x).
Since in both scenarios we will work in the Sobolev space H1(X ) where X ⊂ R and g∗ ∈ T ⊆
H1(X ), the corresponding risk can be defined in terms of the usual norm in H1 as
RH1 (g) = ∥g∗ − g∥2H1 =
Z
X
(g∗(x) − g(x))2 + ∂g∗(x)
∂x − ∂g(x)
∂x
2
dPX (x),
and the empirical risk can be defined as
RhS1 (g∗, g) = 1
I
I −1
X
i=0
(g∗(xi) − g(xi))2 + 1
I
I −1
X
i=0
∂g∗
∂x (xi) − ∂g
∂x (xi)
2
, (11)
where I is the number of samples considered in the corresponding dataset. The use of information
about the derivatives of the outputs with respect to the inputs was first introduced in [35], giving
rise to a new subfield of machine learning known as Differential Machine Learning (DML).
In accordance with the aforementioned theorems, several results show that incorporating this
information can significantly improve a model’s training performance, as it forces the function
estimates to converge point-wise rather than on average.
Another significant aspect that has to be taken into account is that the model to obtain the
statistical functions is going to be trained in [−2π, 2π] with data rescaled to [−π, π], rather than
trained directly in [−π, π]. This ensures that the resulting Fourier series is smoother and does
not exhibit Gibbs phenomena, since outside [−π, π] an approximation freedom is allowed due
to the lack of data information outside that region. An example of the impact of this feature
can be observed in Figure 2 but, specially, in Figure 3, because of the sharp jumps that the the
CDF exhibits at its edges due to the periodic extension, causing the oscillations to become more
pronounced and the approximation to be worse.
12

3.2 Methodology
15 10 5 0 5 10 15
0.0
0.2
0.4
0.6
0.8
1.0
1.2
Prediction
(a) Training in [−π, π]
15 10 5 0 5 10 15
0.0
0.2
0.4
0.6
0.8
1.0
1.2 Prediction
(b) Training in [−2π, 2π]
Figure 2: Approximation of the PDF with training in different intervals.
10.0 7.5 5.0 2.5 0.0 2.5 5.0 7.5 10.0
0.3
0.4
0.5
0.6
Prediction
(a) Training in [−π, π]
10.0 7.5 5.0 2.5 0.0 2.5 5.0 7.5 10.0
0.0
0.2
0.4
0.6
0.8
1.0 Prediction
(b) Training in [−2π, 2π]
Figure 3: Approximation of the CDF with training in different intervals.
In addition, all experiments related to these first two methods are conducted using the same
quantum ansatz, illustrated in Figure 4, which is composed of a fixed number of qubits and
layers. However, this design can be scaled in complexity to analyze how the results vary with
respect to the capacity of the circuit. This strategy allows to study both the accuracy and
generalization of the model in different scenarios.
Layer
|0⟩ Rx(x) Ry(θ11)
|0⟩ Rx(x) Ry(θ21)
Figure 7.1: One layer of the PQC used in the experiments. The parameters θij are variational parameters.
In finance, the lognormal distribution has a special prevalence through the Black-Scholes model, which assumes that the evolution of prices follow a Geometric Brownian Motion (GBM), that satisfies the SDE:
dXt = μBSXtdt + σBSXtdWt. (7.24)
Figure 4: Scheme of a single layer of the quantum ansatz used to construct the PQC for 2 qubits, extracted from [20].
The last proposed method is based on the use of QAMC. As a QAE routine we select a modified
13

3.2 Methodology
version of the RQAE algorithm, termed mRQAE (see [8] for details), which allows to estimate
not only the magnitude but also the sign of the quantity of interest. This is crucial in this case,
since the Fourier coefficients can be either positive or negative. Thus, by employing the mRQAE
algorithm, we will be able to obtain the Fourier coefficients of the underlying distribution to a
certain precision and eventually calculate the derivative’s price.
Although the structure of this third quantum method differs from the previously proposed
ones, its primary purpose in this context is to serve as a benchmark for assessing the perfor
mance of the designed circuits. Specifically, it provides a set of reference numerical results that
enable a meaningful comparison in terms of both cost and accuracy in the extraction of Fourier
coefficients.
In order to establish this comparison, the QAMC method will be evaluated under various
error tolerances achievable by Methods I and II. For each tolerance level, we will measure the
number of circuits runs for each coefficient (interpreted as quantum samples in the context of
QAMC). This number of executions will serve as a proxy for computational cost, thus providing
an empirical cost metric against which the efficiency of the designed PQCs can be evaluated.
Next, we explain in more detail the relevant methodological aspects of the three mentioned
approaches.
3.2.1 Method I: Supervised Learning for PDF approximation
First, we consider a labeled dataset associated with the probability distribution T = {(xi, yi) ∈
Z = X × Y ∼ P (x, y) | ∀i ∈ {0, . . . , I − 1}}, defined over a truncation interval that ensures
the Fourier series approximation is sufficiently accurate. This interval is obtained following the
same reasoning described in [33].
Next, we train the PQC using the empirical risk function defined in (11) applied to the PDF,
i.e.,
RhS1 (f ∗, f ) = 1
I
I −1
X
i=0
(f ∗(xi) − f (xi))2 + 1
I
I −1
X
i=0
df ∗
dx (xi) − df
dx (xi)
2
, (12)
to approximate the underlying PDF in [−2π, 2π] with data rescaled to [−π, π], as mentioned
before.
Subsequently, the Fourier series coefficients are extracted using a precise and efficient strategy
based on the Discrete Fourier Transform (DFT), applied to direct evaluations of the trained
circuit in [−π, π]. For this purpose, we use the scalar function that returns the output of the
trained quantum circuit for each input x, corresponding to the Fourier series in exponential
form, i.e.,
f (y|x) ≈
K
X
k=−K
ck · eikx,
where K is the specified maximum degree and the coefficients ck ∈ C. To obtain the desired
trigonometric form, the coefficients Af
k and Bf
k of the trigonometric series are computed from
14

3.2 Methodology
the complex coefficients ck of the exponential form, using the identities
Af
k = (ck + c−k), Bf
k = −i(ck − c−k).
Then, the Fourier series coefficients associated with the payoff function, Ck and Dk, are typically
available in closed-form. Finally, the price is computed using the expression:
V (t0, x) ≈ 1
2 (b − a)e−r∆t Af
0 · C0
2+
K
X
k=1
Af
k · Ck + Bf
k · Dk
!
. (13)
3.2.2 Method II: Self-supervised Learning for CDF approximation
As mentioned before, in derivative pricing, the exact probability distribution of the underlying
asset is rarely available. Therefore, in this case, self-supervised learning will be employed,
providing the model with only a representative set of asset samples, so that the labels required
to construct the model’s cost function are generated internally from that set.
The formulation of the process is based on the results of Chapter 7 of [20], where, from various
convergence results, an adaptation of the classical optimization problem is proposed. This starts
from a target function F ∗ ∈ T ⊆ Hk mapping inputs x ∈ X to target labels y ∈ Y, a model
F ∈ M ⊆ Hk, and a risk function RHk : M −→ R+ ∪ {0}, where the goal is to find the best
approximation F of the target F ∗ such that
F = arg min
Fˆ∈M
RHk (Fˆ).
The main differences introduced in this method are that the training dataset is given solely by
samples and that the function to be estimated will be the CDF. For this purpose, we start by
defining the dataset T = {xi ∈ X | xi ∼ F ∗, i ∈ {0, . . . , I − 1}}, where neither labels nor
their derivatives are available. Therefore, it is necessary to define a new risk function that uses
only the inputs x ∈ X and somehow incorporates the derivatives to ensure convergence of the
approximation.
To do this, we first consider the case where the empirical risk R is defined as the squared norm
in the discretized space l2(X ):
RT
l2 (F ) = 1
I
I −1
X
i=0
(F ∗(xi) − F (xi))2.
Since in our case the true labels F ∗(xi) are not available, we approximate them by the empirical
CDF:
F ∗(x) ≈ Fe∗mp(x) = 1
I
I −1
X
i=0
1xi≤x,
so that we use the empirical risk
RX
T ,l2 (F ) = 1
I
I −1
X
i=0
Fe∗mp(xi) − F (xi) 2 .
15

3.2 Methodology
Next, we want to apply a similar procedure to the derivative of F , i.e., the probability density
function f . To this end, we consider the following risk:
RL2 (f ) =
Z
X
(f ∗(x) − f (x))2 dx =
Z
X
f ∗(x)2 dx − 2
Z
X
f (x)f ∗(x) dx +
Z
X
f (x)2 dx.
Instead of working with the full expression of RL2(f ), we consider each term separately. Firstly,
the term
−2
Z
X
f (x)f ∗(x) dx,
can be easily approximated by a Monte Carlo method:
−2
Z
X
f (x)f ∗(x) dx ≈ − 2
n
I −1
X
i=0
f (xi).
Secondly, the term
Z
X
f (x)2 dx,
can be approximated by any numerical integration method Q:
Z
X
f (x)2 dx ≈ Q(f 2).
Finally, the term
Z
X
f ∗(x)2 dx,
is a constant. If, in a minimization problem, we remove a constant from the function to be
minimized, the minimum value of the function changes but not the point where this minimum
is achieved, which in our case is the function f . That is, we have
f = arg min
fˆ∈M
RL2(fˆ) ⇐⇒ f = arg min
fˆ∈M
h
RL2 (fˆ) − ∥f ∗∥2L2
i
.
Combining these ideas, the empirical risk we construct for the total risk based on the PDF takes
the form
RT
l2 (f ) = − 2
I
I −1
X
i=0
f (xi) + Q(f 2).
In order to build a new empirical risk function in a similar way to (11), we can consider the
combination of the empirical risks of F and f :
RT
l2,l2 (F ) = RX
T ,l2 (F ) + RT
l2 (f ) = 1
I
I −1
X
i=0
Fe∗mp(xi) − F (xi) 2 − 2
I
I −1
X
i=0
f (xi) + Q(f 2),
which is related to the use of DML features for the CDF estimation.
Moreover, in order to guarantee that the CDF approximation is sufficiently accurate at the
extremes of the function domain, we add an additional constraint term to the empirical risk
16

3.2 Methodology
function, resulting in
RT
l2,l2 (F ) = 1
I
I −2
X
i=1
Fe∗mp(xi) − F (xi) 2
−2
I
I −1
X
i=0
f (xi) + Q(f 2)
+ Fe∗mp(x0) 2 + Fe∗mp(xI−1) − 1 2 .
Since the sample sizes will be sufficiently representative, the constraints introduced here do not
involve a forced approximation, but rather help to improve the fit at those points that may
exhibit instabilities, particularly at the extremes. Thus, given an unlabeled dataset where the
truncation interval is determined by the sample elements, the PQC will be trained in [−2π, 2π]
but with data rescaled to [−π, π]. Subsequently, the series coefficients will be extracted using
the DFT, applied to the direct evaluations of the trained circuit in [−2π, 2π]. This allows us
to recover the coefficients ck of the exponential series and turn them into in their trigonometric
form.
Finally, as mentioned, the Fourier series coefficients associated with the payoff function are
often obtained analytically, allowing to compute the final price using the expression
V (t0, x) ≈ e−r∆t (h(T, b)F (b) − h(T, a)F (a))
−e−r∆t A0F · C0a
2+
K
X
k=1
AkF · Cka + BkF · Dka
!
−e−r∆t A0F · C0b
2+
K
X
k=1
AkF · Ckb + BkF · Dbk
!
Note that the reason for using a Fourier series of period 2(b − a), as defined in (9), in the interval
[ˆa, ˆb] = 3a − b
2 , 3b − a
2,
is that the the Gibbs phenomenon is completely eliminated, because we are only considering the
part of the series corresponding to the CDF when defining the quantities in (10) between [a, c]
and [c, b], respectively. This is also why these are not the Fourier coefficients of the series that
approximates h(T, y).
3.2.3 Method III: QAMC with mRQAE for PDF approximation
In this case, we propose an approach similar to the one employed in the first method, in the
sense that we will compute the values of the coefficients of the trigonometric Fourier series of
the underlying price PDF, although using QAMC.
We start from the same conditions as in Section 3.1, assuming the existence of an interval
[a, b] ⊂ R and a number K of terms so that the Fourier series represents the PDF with sufficient
17

accuracy, i.e.,
f (y|x) ≈ A0
2+
K
X
k=1
Af
k cos 2πk (y − a)
b − a + Bf
k sin 2πk (y − a)
b − a , (14)
In order to compute the coefficients, we proceed as described in [36], restricting ourselves to
models where an exact simulation of the asset’s evolution can be performed, thereby avoiding
errors arising from the use of numerical methods such as Euler-Maruyama. Therefore, when
working for example with a Black-Scholes model, we can also assume the existence of a unitary
operator that encodes the distribution of paths.
This results in the need for only a single register of n×n qubits to perform the entire simulation,
so that we generate a set of I3 labeled data, T = {(Si, f (Si)) ∈ X × Y | ∀i ∈ {0, . . . , I − 1}},
that allows us to estimate the coefficients as
Af
k= 2
b−a
Zb
a
f (y|x) cos 2πk (y − a)
b − a dy ≈ 2
b−a
I −1
X
i=0
f (Si) cos 2πk (Si − a)
b−a ,
Bf
k= 2
b−a
Zb
a
f (y|x) sin 2πk (y − a)
b − a dy ≈ 2
b−a
I −1
X
i=0
f (Si) sin 2πk (Si − a)
b−a .
As mentioned, to achieve this we make use of the mRQAE, which is an asymptotically more
efficient version of the RQAE. Their main difference is that parameters such as the confidence
and the required precision in each iteration are chosen following different criteria. Note again
that this QAE routine enables to recover the sign of the coefficients and compute the price
accurately.
Again, we assume that the Fourier series coefficients associated with the payoff function, Ck
and Dk, can be evaluated via analytical expressions, enabling to calculate the derivative’s price
using (13).
4 Numerical results
In the following section, we present and discuss the results obtained from the different exper
iments, highlighting the main trends and insights derived from the comparative evaluation of
the proposed methods.
4.1 Experiment setting
For our numerical experiments, we consider the pricing of a European vanilla put option at
t0 = 0, so that the payoff takes the form (see [1], for example):
h(T, ST ) = max{K − ST , 0}.
3Note that it is not necessarily true that I = 2n for n the number of qubits.
18

4.1 Experiment setting
In order to price an option, the stochastic dynamics of the underlying asset price St has to be
introduced, usually in terms of a stochastic differential equation (SDE). In the present work, we
assume that the underlying asset follows a Black–Scholes-type dynamics, which is described by
the following SDE:
dSt = rSt dt + σSt dBt, (15)
where S0 is the given price of the underlying at t = 0, r is the risk-free interest rate, σ is
the constant volatility of the assets, and Bt represents a standard Brownian motion under the
probability measure Q.
In the case of more complex dynamics, such as stochastic volatility models, the simulation of
the underlying asset prices to obtain ST (and therefore h(T, ST )) requires the use of numerical
methods to solve SDEs. However, in the case of Black-Scholes dynamics, the exact solution of
SDE (15) can be obtained from Ito calculus and is given by
St = S0 exp r − σ2
2 t + Bt . (16)
It should be remarked that, in Black–Scholes models for asset prices, when valuing derivatives
it is common to work with logarithmic normalized by the strike price, due to the transformation
of the statistical behavior of the underlying asset. Note that expression (16) implies that the
model assumes the following lognormal distribution for the asset price at time t:
St ∼ Lognormal(r, σ2t),
then it can be easily proven that the logarithmic normalized prices Xt follow a normal distribu
tion as follows:
Xt := log(St/K) ∼ N log S0
K + r−1
2 σ2 t, σ2t . (17)
The goal of this transformation is to work with a symmetric and unbounded distribution, such
as the normal distribution, which is particularly useful in contexts where techniques based on
Fourier theory, machine learning, or quantum simulation are employed, since many of these tools
operate more naturally and efficiently in symmetric domains centered around zero.
Note that when working with the process Xt, the consideration of its probability distribution
(17) allows one to obtain the expression of the payoff h and the PDF f that appear in the
integral expression (4).
The following model parameters have been chosen:
S0 = 100, r = 0.1, T = 1, σ = 0.25.
These values allow the simulation of a realistic yet controlled market scenario, suitable for
evaluating the generalization ability and accuracy of the proposed methods. Additionally, three
different strike prices have been selected:
K = 90, K = 100 and K = 110,
19

4.2 Results and discussion
with the aim of analyzing the model’s behavior for different option contract configurations where
the spot price S0 is above, equal to, or below the strike price K, respectively.
Regarding the PQC training setup, the hyperparameters used in the different experiments are
summarized in Table 1.
Table 1: Training hyperparameters used in methods I and II.
Hyperparameter I II Optimizer Adam Adam Learning rate 0.005 0.1 Epochs 300 300 Supervised weight 0.9 0.2 Differential weight 0.1 0.8 Training points 250 − 2.5 · 103 103 − 104 Test points 100 103 Repetitions 10 10
Additionally, experiments have been conducted with different regular (n × n) configurations
(referring to the n qubits and n layers employed in the PQC), to assess whether another num
ber of parameters improves the results. However, as it is common in QML problems, there is
neither universal optimal configuration, nor a clear relationship between scalability and accu
racy. In many cases, it is necessary to find an appropriate balance (a trade-off) between model
the complexity and the specific characteristics of the problem under consideration. For the
(QAMC-based) Method III, the number of coefficients used will be the same as in Method I,
by construction, and we vary the number of executions of the circuit, often called shots in the
quantum jargon, by prescribing an increasing tolerance for the mRQAE routine.
In general, the structures used to design the PQCs in the experiments are chosen such that they
return accurate approximations of the distributions and the payoff and capture the complexity
of the problem. For Method I, the minimum scheme is 6 × 6, while for Method II it is 4 × 4.
Finally, Table 2 shows the technical characteristics of the computational system for the ex
periments.
Table 2: Technical characteristics of the computational environment used.
Parameter Value
Processor Intel(R) Core(TM) i7-8550U CPU @ 1.80GHz RAM Memory 8.0 GB Operating System Windows 10 (64 bits) Python Version 3.12.7 JAX Version 0.4.35 PennyLane Version 0.40.0
4.2 Results and discussion
In this section, we firstly present the convergence results obtained by the three methods described
in Section 3. Several experiments have been carried out for each method with an increasing
approximation power of the PQC and the results are shown in Figure 5 (Method I and Method
20

4.2 Results and discussion
II) and Figure 8 (Method III), respectively. Each of the pictures in these graphs show the
accuracy convergence in terms of the size of each case’s employed dataset for the three considered
strike prices. Next, in Sections 4.2.1 and 4.2.2, we discuss the presented results more in depth,
analyzing the impact on the PQC estimations in terms of the dataset size and the PQC structures
(number of coefficients in the approximation).
250 500 1000 2500 Size of the dataset (n)
0
2
4
6
8
10
12
Price
Estimated prices for (6x6)
K = 90 K = 100 K = 110
(a) 6 × 6
1000 2500 5000 10000 Size of the dataset (n)
0
2
4
6
8
10
12
Price
Estimated prices for (4x4)
K = 90 K = 100 K = 110
(b) 4 × 4
250 500 1000 2500 Size of the dataset (n)
0
2
4
6
8
10
12
Price
Estimated prices for (7x7)
K = 90 K = 100 K = 110
(c) 7 × 7
1000 2500 5000 10000 Size of the dataset (n)
0
2
4
6
8
10
12
Price
Estimated prices for (5x5)
K = 90 K = 100 K = 110
(d) 5 × 5
250 500 1000 2500 Size of the dataset (n)
0
2
4
6
8
10
12
Price
Estimated prices for (8x8)
K = 90 K = 100 K = 110
(e) 8 × 8
1000 2500 5000 10000 Size of the dataset (n)
0
2
4
6
8
10
12
Price
Estimated prices for (6x6)
K = 90 K = 100 K = 110
(f) 6 × 6
Figure 5: Convergence results for Method I (left column) and Method II (right column).
21

4.2 Results and discussion
4.2.1 Impact of the data size
One of the main objectives of increasing the sample size is to obtain a more complete and
representative dataset, in order to capture the underlying distribution in a more faithful way.
As the number of observations increases, the estimations obtained through approximation models
should reflect more accurately the statistical patterns of the original data, thus resulting in a
better generalization and a reduction of the error.
From Figure 5, a clear convergence towards the exact value in both Method I and Method
II can be observed as the sample size increases. However, some outliers appear, which can be
attributed to the inherent error of the training process, particularly to the randomness in the
initialization of the quantum model weights, which introduces fluctuations that are not always
corrected during optimization. These aspects highlight the importance of carrying out a larger
number of experimental repetitions, accompanied by a statistical analysis that isolates these
sources of uncertainty.
Despite these limitations, the results obtained so far are clearly satisfactory and demonstrate
the potential of the approach, as illustrated in Figures 6 and 7 for Method I and Method II,
respectively.
2 10 1 2
0.0
0.2
0.4
0.6
0.8
1.0
1.2
1.4
1.6 Prediction P75 Prediction P25 Prediction Median Real Function
(a) 6 × 6
2 10 1 2
0.0
0.2
0.4
0.6
0.8
1.0
1.2
1.4
1.6 Prediction P75 Prediction P25 Prediction Median Real Function
(b) 7 × 7
2 10 1 2
0.0
0.2
0.4
0.6
0.8
1.0
1.2
1.4
1.6 Prediction P75 Prediction P25 Prediction Median Real Function
(c) 8 × 8
Figure 6: Output of the PQC for Method I (a) and for Method II (b).
0.75 0.50 0.25 0.00 0.25 0.50 0.75 1.00
0.0
0.2
0.4
0.6
0.8
1.0 Prediction P75 Prediction P25 Prediction Median Real Function
(a) 4 × 4
1.0 0.5 0.0 0.5 1.0
0.0
0.2
0.4
0.6
0.8
1.0 Prediction P75
Prediction P25 Prediction Median Real Function
(b) 5 × 5
1.00 0.75 0.50 0.25 0.00 0.25 0.50 0.75
0.0
0.2
0.4
0.6
0.8
1.0 Prediction P75
Prediction P25 Prediction Median Real Function
(c) 6 × 6
Figure 7: Output of the PQC for Method II.
The Method III (Figure 8) achieves remarkably accurate estimations, with reduced variability
(specially when more shots are employed). Those effects are somehow expected since, while
the precision and variability of the estimations provided by the PQCs (Methods I and II) are
mainly affected by the quality of the optimization process (subject to the intrinsic variability of
22

4.2 Results and discussion
initial parameters, random jumps, etc.) and the data, the precision by QAMC is controlled by
the QAE routine (mRQAE), prescribing that the discrete data points are enough to accurately
represent the continuous density function.
2000 3000 4000 5000 6000 7000 Shots (n)
2
4
6
8
10
Price
Estimated prices for 6x6
K=90 K=100 K=110
(a) 6 × 6
2000 3000 4000 5000 6000 7000 Shots (n)
2
3
4
5
6
7
8
9
10
Price
Estimated prices for 7x7
K=90 K=100 K=110
(b) 7 × 7
2000 3000 4000 5000 6000 7000 Shots (n)
2
4
6
8
10
Price
Estimated prices for 8x8
K=90 K=100 K=110
(c) 8 × 8
Figure 8: Convergence results for Method III.
Note however that, in order to get highly accurate predictions, we need around 5000 shots per
coefficient in average, thus implying an order of hundreds of thousand shots to obtain the final
price. In comparison, with Method II we obtain similar results with 10000 data samples (and, of
course, after a training procedure), which highlights the potential of QML-based approaches in
the derivatives valuation area, as a complementary methodology to the more popular QAMC.
23

From a practical point of view, the performance of Method II is even more relevant, since it does
not require the availability of the underlying PDF, but only the generation of random samples
following the proper distribution.
4.2.2 Impact of the number of coefficients
Since the functions to be approximated in each method are different, it is necessary to use
distinct dimensions in the PQC schemes to ensure good results. This is because, in certain
cases, adding an excessive number of terms in the approximation of a function can introduce
additional contributions to oscillations and instabilities in the model. In the specific case of the
CDF, which exhibits sharp jumps at its boundaries due to periodic extension, these oscillations
may become more pronounced.
Moreover, the exponential nature of the payoff and the periodicity of the approximation give
rise to abrupt jumps at the points of discontinuity. As a result, the outcomes may present larger
errors and significant variability as the number of terms in the Fourier expansion increases.
Nevertheless, when using dimensions on the order of 6 × 6, 7 × 7, and 8 × 8 for Method I, and
4 × 4, 5 × 5, and 6 × 6 for Method II, both methods display stable behavior, showing a clear
trend of convergence towards the true derivative value as the expressive capacity of the circuit
increases. This can be clearly seen in Figure 5, reinforcing the idea that introducing flexibility
in the Fourier series approximation is essential to achieve accurate and reliable estimates.
It is worth noting that, according to the results, the best performance is obtained with an
intermediate scheme (7 × 7 for Method I and 5 × 5 for Method II), illustrating how in this type
of problem there is often a trade-off between model complexity and the specific characteristics
of the problem under study. On the other hand, in the case of Method III, increasing the
number of coefficients leads to a substantial improvement in the results, particularly when the
number of shots is low. Beyond a certain threshold, the coefficients tend to take significantly
small values and, combined with the accuracy provided by QAMC, it clearly shows how these
small contributions help to refine the computed price, thus illustrating a clear convergence of
the estimated prices.
5 Conclusions
In this work, we have presented two hybrid classical–quantum approaches for the option pric
ing problem. This framework connects quantum learning models with Fourier-based valuation
techniques, enabling the extraction of relevant statistical information from quantum-generated
data. The performance of the proposed models was benchmarked against QAMC, allowing for a
quantitative comparison in terms of computational cost and accuracy in the recovery of Fourier
coefficients. The number of circuit executions per coefficient, interpreted as quantum samples,
served as an empirical cost metric to evaluate PQC efficiency.
Both methods exhibited stable convergence towards the true derivative value as the expressive
capacity of the PQCs increased. Circuit dimensions on the order of 6 × 6 to 8 × 8 for Method
I and 4 × 4 to 6 × 6 for Method II yielded consistent and reliable estimates, confirming the
24

REFERENCES
importance of model flexibility in Fourier-based approximations.
In addition, as the sample size is increased, a systematic convergence towards the exact so
lution has been observed across methods, though minor outliers appeared due to stochastic
effects in the training phase, particularly from random initialization of quantum weights. These
effects suggest the need for multiple experimental runs and statistical post-analysis to isolate
uncertainty sources.
Finally, Method II obtains comparable precision using only ∼ 10000 data samples as the
benchmarking Method III, which requires on the order of hundreds of thousands of shots to
achieve high accuracy with low variability. This fact underscores the potential of QML-based
strategies as efficient and complementary alternatives to traditional QAMC schemes. Moreover,
Method II stands out for not requiring explicit knowledge of the underlying probability density
function, instead relying on sampling from the appropriate distribution, as it is common practice
in industry.
Acknowledgements
All authors acknowledge the support of CITIC, as a center accredited for excellence within the
Galician University System and a member of the CIGUS Network, receiving subsidies from the
Department of Education, Science, Universities, and Vocational Training of the Xunta de Gali
cia. Additionally, it is co-financed by the EU through the FEDER Galicia 2021-27 operational
program (ref. ED451G 2023/01).  ́A. Leitao and C. V ́azquez acknowledge the funding from the
Ministry of Science and Innovation of Spain (ref. PID2022-141058OB-I00) and from the De
partment of Education, Science, Universities, and Vocational Training of the Xunta de Galicia
(ref. ED451C 2022/047), both including FEDER financial support. A ́ . Leitao acknowledges the
financial support from the Spanish Ministry of Science and Innovation through the Ram ́on y Ca
jal 2022 grant, and the Department of Education, Science, Universities, and Vocational Training
of the Xunta de Galicia through the Excellence research program (ref. ED431F 2025/032).
References
[1] John C. Hull. Options, Futures and Other Derivatives. 6. ed. Pearson Prentice Hall, 2006.
[2] Andr ́es G ́omez, Alvaro Leitao, Alberto P. Manzano, Maria R. Nogueiras, Gustavo Ord ́on ̃ez,
and Carlos V ́azquez. “A Survey on Quantum Computational Finance for Derivatives Pric
ing and VaR”. In: Archives of Computational Methods in Engineering 9 (2022), pp. 4137
4163.
[3] Adam Bouland, Wim van Dam, Hamed Joorati, Iordanis Kerenidis, and Anupam Prakash.
Prospects and Challenges of Quantum Finance. 2020. arXiv: 2011.06492.
[4] Rom ́an Or ́us, Samuel Mugel, and Enrique Lizaso. “Quantum Computing for Finance:
Overview and Prospects”. In: Reviews in Physics 4 (2019). 100028.
[5] Nikitas Stamatopoulos, Daniel J. Egger, Yue Sun, Christa Zoufal, Raban Iten, Ning Shen,
and Stefan Woerner. “Option Pricing Using Quantum Computers”. In: Quantum 4 (2020).
291.
25

REFERENCES
[6] Robert Scriba, Yuying Li, and Jingbo B Wang. Monte Carlo Option Pricing in Quantum
Parallel. 2025. arXiv: 2505.09459.
[7] Zolt ́an Udvarnoki, G ́abor F ́ath, and Norbert Fogarasi. “Quantum Advantage of Monte
Carlo Option Pricing”. In: Journal of Physics Communications 7.5 (2023). 055001.
[8] Alberto P. Manzano, Gonzalo Ferro, A ́ lvaro Leitao, Carlos V ́azquez, and Andr ́es G ́omez.
“Alternative Pipeline for Option Pricing Using Quantum Computers”. In: EPJ Quantum
Technology 12 (2025). 28.
[9] Alberto P. Manzano, Daniele Musso, and A ́ lvaro Leitao. “Real Quantum Amplitude Esti
mation”. In: EPJ Quantum Technology 10.1 (2023), pp. 1–24.
[10] Steven Herbert. “Quantum Monte Carlo Integration: The Full Advantage in Minimal Cir
cuit Depth”. In: Quantum 6 (2022). 823.
[11] Jorge J. Martı ́nez de Lejarza, Michele Grossi, Leandro Cieri, and Germ ́an Rodrigo. “Quan
tum Fourier Iterative Amplitude Estimation”. In: 2023 IEEE International Conference on
Quantum Computing and Engineering (QCE). IEEE, 2023, pp. 571–579.
[12] Javier Gonz ́alez-Conde, Angel Rodrı ́guez-Rozas, Enrique Solano, and Mikel Sanz. Pricing
Financial Derivatives with Exponential Quantum Speedup. 2021. arXiv: 2101.04023.
[13] Filipe Fontanela, Antoine Jacquier, and Mugad Oumgari. “Short Communication: A Quan
tum Algorithm for Linear PDEs Arising in Finance”. In: SIAM Journal on Financial
Mathematics 12.4 (2021), SC98–SC114.
[14] Swagat Kumar and Colin Michael Wilmott. “Simulating the non-Hermitian dynamics of
financial option pricing with quantum computers”. In: Scientific Reports 15.1 (2025).
[15] Lucas Leclerc, Luis Ortiz-Guitierrez, Sebastian Grijalva, Boris Albrecht, Julia R. K. Cline,
Vincent E. Elfving, Adrien Signoles, Loı ̈c Henriet, Gianni Del Bimbo, Usman Ayub Sheikh,
Maitree Shah, Luc Andrea, Faysal Ishtiaq, Andoni Duarte, Samuel Mugel, Irene Caceres,
Michel Kurek, Roman Orus, Achraf Seddik, Oumaima Hammammi, Hacene Isselnane,
and Didier M’tamon. Financial Risk Management on a Neutral Atom Quantum Processor.
2024. arXiv: 2212.03223 [quant-ph].
[16] Sohum Thakkar, Skander Kazdaghli, Natansh Mathur, Iordanis Kerenidis, Andre ́ J. Ferreira
Martins, and Samurai Brito. Improved Financial Forecasting via Quantum Machine Learn
ing. 2024. arXiv: 2306.12965 [q-fin.ST].
[17] Sascha Wilkens and Joe Moorhouse. “Quantum computing for financial risk measure
ment”. In: Quantum Information Processing 22 (Jan. 2023). doi: 10.1007/s11128-022
03777-2.
[18] Maria Schuld, Ryan Sweke, and Johannes Jakob Meyer. “Effect of Data Encoding on the
Expressive Power of Variational Quantum-Machine-learning Models”. In: Physical Review
A 103.3 (2021).
[19] Adri ́an P ́erez-Salinas, David L ́opez-Nu ́n ̃ez, Artur Garcı ́a-S ́aez, P. Forn-Dı ́az, and Jose ́ I.
Latorre. “One Qubit as a Universal Approximant”. In: Physical Review A 104 (2021).
01245.
[20] Alberto P. Manzano. “Contributions to the Pricing of Financial Derivatives Contracts in
Commodity Markets and the Use of Quantum Computing in Finance”. Doctoral Thesis.
Universidade da Coru ̃na (UDC), 2024.
26

REFERENCES
[21] Yu Liu, Kentaro Baba, Kazuya Kaneko, Naoyuki Takeda, Junpei Koyama, and Koichi
Kimura. Analysis of Parameterized Quantum Circuits: on The Connection Between Ex
pressibility and Types of Quantum Gates. 2024. arXiv: 2408.01036.
[22] Marcello Benedetti, Erika Lloyd, Stefan Sack, and Mattia Fiorentini. “Parameterized
Quantum Circuits as Machine Learning Models”. In: Quantum Science and Technology
4.4 (2019). 043001. issn: 2058-9565.
[23] Mateusz Ostaszewski, Edward Grant, and Marcello Benedetti. “Structure Optimization
for Parameterized Quantum Circuits”. In: Quantum 5 (2021). 391. issn: 2521-327X.
[24] Alberto P. Manzano, David Dechant, Jordi Tura, and Vedran Dunjko. “Approximation
and Generalization Capacities of Parametrized Quantum Circuits for Functions in Sobolev
Spaces”. In: Quantum 9 (2025). 1658.
[25] Paul Glassermann. Monte Carlo Methods in Financial Engineering. Springer, 2004.
[26] Ashley Montanaro. “Quantum Speedup of Monte Carlo Methods”. In: Proceedings of the
Royal Society A: Mathematical, Physical and Engineering Sciences 471 (2015). 2181.
[27] Gilles Brassard, Peter Høyer, Michele Mosca, and Alain Tapp. “Quantum Amplitud Am
plification and Estimation”. In: Quantum Computation and Information. Ed. by Samuel
J. Lomonaco Jr and Howard E. Brandt. Vol. 305. Contemporary Mathematics. American
Mathematical Society, 2002, pp. 53–74.
[28] Philip Intallura, Georgios Korpas, Sudeepto Chakraborty, Vyacheslav Kungurtsev, and
Jakub Marecek. A Survey of Quantum Alternatives to Randomized Algorithms: Monte
Carlo Integration and Beyond. 2023. arXiv: 2303.04945.
[29] Dmitry Grinko, Julien Gacon, Christa Zoufal, and Stefan Woerner. “Iterative Quantum
Amplitude Estimation”. In: npj Quantum Information 7 (2021). 52.
[30] Almudena Carrera V ́azquez and Stefan Woerner. “Efficient State Preparation for Quantum
Amplitude Estimation”. In: Phys. Rev. Appl. 15 (2021). 034027.
[31] Adam Holmes and A. Y. Matsuura. Efficient Quantum Circuits for Accurate State Prepa
ration of Smooth, Differentiable Functions. 2020. arXiv: 2005.04351.
[32] Lov Grover and Terry Rudolph. Creating Superpositions that Correspond to Efficiently
Integrable Probability Distributions. 2002. arXiv: quant-ph/0208112.
[33] Fang Fang and Cornelis W. Oosterlee. “A Novel Pricing Method for European Options
Based on Fourier-Cosine Series Expansions”. In: SIAM Journal on Scientific Computing
31.2 (2009), pp. 826–848.
[34] Leif B.G. Andersen and Mark Lake. High-Performance Applications of the Non-Uniform
Fast Fourier Transform to Option Pricing. SSRN. 2022. url: https://papers.ssrn.
com/sol3/papers.cfm?abstract_id=4335916.
[35] Brian Huge and Antoine Savine. Differential Machine Learning. 2020.
[36] Dong An, Noah Linden, Jin-Peng Liu, Ashley Montanaro, Changpeng Shao, and Jiasu
Wang. “Quantum-accelerated Multilevel Monte Carlo Methods for Stochastic Differential
Equations in Mathematical Finance”. In: Quantum 5 (2021). 481.
27

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:45.747Z
- **Text Length:** 64952 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 27 of 27
