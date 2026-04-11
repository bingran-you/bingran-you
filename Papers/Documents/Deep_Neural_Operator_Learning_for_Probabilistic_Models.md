# PDF Document: Bayraktar et al. - 2025 - Deep Neural Operator Learning for Probabilistic Models.pdf

**File Path:** Bayraktar et al. - 2025 - Deep Neural Operator Learning for Probabilistic Models.pdf

**Processed Date:** 2026-02-10T18:18:08.042Z

**File Size:** 642.89 KB

**Total Pages:** 36

**Extracted Pages:** 36

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3583

**Title:** Deep Neural Operator Learning for Probabilistic Models

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Deep Neural Operator Learning for Probabilistic Models
Erhan Bayraktar * Qi Feng† Zecheng Zhang‡ Zhaoyu Zhang§
November 11, 2025
Abstract
We propose a deep neural-operator framework for a general class of probability models. Under global Lipschitz conditions on the operator over the entire Euclidean space—and for a broad class of probabilistic models—we establish a universal approximation theorem with explicit network-size bounds for the proposed architecture. The underlying stochastic processes are required only to satisfy integrability and general tail-probability conditions. We verify these assumptions for both European and Ameri-
can option-pricing problems within the forward–backward SDE (FBSDE) framework, which in turn covers a broad class of operators arising from parabolic PDEs, with or without free boundaries. Finally, we present a numerical example for a basket of American options, demonstrating that the learned model produces optimal stopping boundaries for new strike prices without retraining.
1 Introduction
Operator learning [13, 32, 35, 31, 30, 42] uses deep neural networks to approximate mappings between functions or function spaces, enabling efficient solutions to a wide range of computational science problems. For instance, it can learn the mapping from the initial condition of a partial differential equation (PDE) to its corresponding solution. Another example is to learn the mapping from fine-scale PDE solutions to coarse-scale ones [21, 29], effectively performing model upscaling. A key advant-
age of operator learning is its ability to handle parametric PDEs. For example, when the PDE initial condition is parameterized by free variables, the operator learning framework can learn the mapping between the space formed by all initial conditions and the space of their
*Department of Mathematics, University of Michigan, Ann Arbor, 48109; email: erhan@umich.edu. This author is supported in part the Susan M. Smith Professorship and in part by by the National Science Foundation under grant #DMS-2507940. †Department of Mathematics, Florida State University, Tallahassee, 32306; email: qfeng2@fsu.edu. This author is partially supported by the National Science Foundation under grant #DMS-2420029. ‡Department of Applied Computational Mathematics and Statistics, Universi-
ty of Notre Dame, Notre Dame 46556; zzhang48@nd.edu. This author is partially supported by the Department of Energy DE-SC0025440 §Department of Mathematics, University of California, Los Angeles, CA, 90095; email: zhaoyu@math.ucla.edu.
1
arXiv:2511.07235v1 [cs.LG] 10 Nov 2025

corresponding solution space. Once trained, a deep neural operator (DNO) can instantly predict the solution for any new initial condition within the same function space. Compared to the standard numerical solvers, operator learning offers much faster and more cost-efficient computations. This approach has been widely applied to inverse PDE problems, where it is often integrated with standard numerical solvers—either providing an initial approximation refined by numerical methods or serving as a r-
apid surrogate model to accelerate the overall solution process. Many popular deep neural operators (DNOs) have been proposed [13, 32, 35, 31, 30, 42], and operator learning has been successfully applied to solving practical problems [36, 10], making it an important machine learning framework for large-scale computational applications. Theoretically, the first operator learning framework was proposed in the seminal works [13, 12], where the authors introduced a shallow universal approximation arch-
itecture for nonlinear operators. This foundational theory has directly inspired the design of several modern DNOs, such as DeepONet [35]. Later, operator learning—viewed as a mapping between infinite-dimensional function spaces—has been analyzed in [9, 33], where the approximation error was quantified with respect to the discretization size of the input function, network complexity, and related parameters. In [23, 24], the authors generalized the framework of several neural operators, including t-
he Fourier Neural Operator (FNO), and analyzed their universal approximation properties in shallow network settings, though without establishing convergence rates. In [26, 34], the convergence rate of DeepONet was established for a class of PDE operators. In [27], the author studied the lower bound of the convergence rate for PCA-Net, with potential generalizations to other DNOs, while an upper bound result for PCA-Net was given in [25]. Across the existing literature, establishing rigorous conver-
gence rates for general operators—without restricting to specific PDE formulations—remains one of the central theoretical challenges in operator learning. One notable contribution in this direction is provided by [34], which unifies various formulations of neural operators and rigorously establishes convergence rates as the network depth and width increase, for general operators not tied to any specific PDE. Specifically, the total number of trainable parameters to reach ε error in L∞ norm is
scaled as ε−ε−d2 . However, all the aforementioned studies address deterministic problems on bounded domains, without involving any stochastic processes or probabilistic models. To the best of our knowledge, the neural operator approach has only recently been extended to Forward–Backward Stochastic Differential Equations (FBSDEs) [17], which can be applied to solve European-type option pricing problems, and to Dynamic Stackelberg Games [1]. In this paper, we develop a neural-operator framework und-
er general Lipschitz conditions for broad classes of stochastic processes satisfying integrability and tail-probability assumptions. In particular, we employ our neural operator to address the American option pricing problem and its associated optimal stopping boundary problem. Recently, American option pricing and optimal stopping problems have been investigated using deep neural networks in [39, 28, 22, 7, 8, 37, 5, 18, 6, 19, 20]. Theoretical results on the continuity property of optimal stoppi-
ng boundary have been investigated in [40], while a more general Stefan-type problem for partial differential equations (PDEs) with free boundaries has been studied in [38]. In these existing works, the methods are typically designed for a fixed terminal payoff function, requiring retraining of the network when the terminal function changes.
2

In contrast, by adopting the operator learning perspective, our trained model can directly generate the optimal stopping boundary for a new terminal payoff function without retraining. Our general neural-operator approximation results encompass both European and American options in the FBSDE setting. Through the Feynman–Kac correspondence (and its optimal-stopping/variationalinequality version for American options), the same guarantees apply to the corresponding PDEs and free-boundary PDEs. The p-
aper is organized as follows. Section 2 states the standing assumptions on the underlying probabilistic models and the conditions imposed on the operators. Section 3 presents the deep neural operator architecture, including its construction and size bounds. Section 4 establishes a universal approximation theorem for functions, functionals, and operators under these assumptions. Section 5 and Section 6 verifies that European- and American-style option pricing problems within the FBSDE framework sat-
isfy the assumptions; by the Feynman–Kac representation (and its variational-inequality form for optimal stopping), the theorem then applies to the associated parabolic PDEs, with or without free boundaries. Section 7 provides a numerical example for a basket of American options, demonstrating that the learned model produces optimal stopping boundaries for new strike prices without retraining.
2 Assumptions
Let (Ω, F , {Ft}t∈[0,T ], P) be a filtered probability space satisfying the usual conditions and rightcontinuity. In this paper, we denote
X = (Xt)t∈[0,T ]
such that X0 = x, as an Rd1-valued adapted process progressively measurable with respect to
{Ft}t∈[0,T ].
Definition 2.1. For x ∈ Rd, |x| :=
v u u t
d
X
i=1
x2
i , and ∥x∥∞ := max
1≤i≤d |xi|.
Assumption 1. For any p > 0, there exists a constant Cp > 0, such that
E
"
sup
0≤t≤T
|Xt|p
#
≤ Cp. (2.1)
Assumption 2. There exists a constant CT depending on time T , and a constant c such that for any r > 0,
P sup
t∈[0,T ]
|Xt − x| ≥ r
!
≤ exp − crα
CT
. (2.2)
3

Definition 2.2. For any r > 0, we define
Ωr := {x ∈ Rd1 : |x| ≤ r} and ΩC
r := Rd1 \ Ωr, (2.3)
where , and we define the cube correspondingly as follows
Qr := [−r, r]d1 =
n
x ∈ Rd1 : ∥x∥∞ ≤ r
o
.
Definition 2.3 (Input space G). Define the input space as below
G :=
(
g : Rd1 → R g(Xt) is progressively measurable and E
"
sup
0≤s≤T
|g(Xs)|2
#
<∞
)
.
The space G is equipped with the norm
∥g∥S2 := E
"
sup
0≤s≤T
|g(Xs)|2
#!1/2
.
Definition 2.4 (Output space U). Define the output space as below
U :=
(
u : [0, T ] × Rd2 → R u(t, Xt) is progressively measurable and E
"
sup
0≤s≤T
|u(s, Xs)|2
#
<∞
)
,
with the norm
∥u∥S2 := E
"
sup
0≤s≤T
|u(s, Xs)|2
#!1/2
. (2.4)
Remark 2.5. We denote X = (Xt)t∈[0,T ] for a generic stochastic process. Depending on the
context, X ∈ Domain(G) implies Xt ∈ Rd1, while X ∈ Domain(U ) implies Xt ∈ Rd2.
We impose the following polynomial growth condition and Lipschitz condition.
Assumption 3. For any function g ∈ G, and x ∈ Rd1, there there exists a constant Cg, such that
g(x) ≤ Cg(1 + |x|p), for p > 0. (2.5)
Assumption 4. Any function g ∈ G is Lipschitz with a Lipschitz constant no more than Lg > 0:
|g(x1) − g(x2)| ≤ Lg|x1 − x2|2
for any x1, x2 ∈ Rd1.
4

Assumption 5. Any function u ∈ U is Lipschitz with a Lipschitz constant no more than Lu > 0:
|u(x1) − u(x2)| ≤ Lu|x1 − x2|,
for any x1, x2 ∈ Rd2.
Assumption 6. Assume the operator
Γ : G −→ U, g 7−→ u = Γ(g),
from G to U is Lipschitz if : there exists LΓ such that for any g1, g2 ∈ G, we have
E
"
sup
0≤t≤T
|Γ(g1)(Xt) − Γ(g2)(Xt)|2
#
≤ L2
ΓE
"
sup
0≤t≤T
|g1(Xt) − g2(Xt)|2
#
, ∀g1, g2 ∈ G.
or equivalently,
∥Γ(g1) − Γ(g2)∥S2 ≤ LΓ∥g1 − g2∥S2 .
As mentioned in Remark 2.5, the process X ∈ Domain(U ), i.e. Xt ∈ Rd2.
Definition 2.6 (Lipschitz functional). We say a functional F : V → R, where V could either be the input space G or the output space U is Lipschitz with Lipschitz constant LF if
|F(v1) − F(v2)| ≤ LF∥v1 − v2∥S2, ∀v1, v2 ∈ V.
Lemma 2.7 (Theorem 13.7(ii) of [41]). Let {Ωk}M
k=1 be an open cover of a compact smooth man
ifold M . There exists a C∞ partition of unity {ωk}M
k=1 that subordinates to {Ωk}M
k=1 such that support(ωk) ⊂ Ωk for any k.
3 Deep Operator Learning Architecture
Operator learning aims to approximate mappings between infinite-dimensional function spaces, distinguishing itself from traditional neural networks, which approximate functions directly. Specifically, given a nonlinear operator Γ that maps an input function g to an output function Γ(g), the objective is to learn Γ using a neural network architecture. In this work, the nonlinear operator Γ represents a pricing operator, and the goal is to approximate it via a neural network-based approach. We will -
use the notations used in [33], we will define the fully connected ReLU neural network. we define a feedforward ReLU network q : Rd1 → R as
q(x) = WL · ReLU (WL−1 · · · ReLU(W1x + b1) + · · · + bL−1) + bL, (3.1)
where Wl’s are weight matrices, bl’s are bias vectors, ReLU(a) = max{a, 0} is the rectified linear unit activation (ReLU) applied element-wise, and Ω is the domain. We define the network class FNN : Rd1 → Rd2 :
FNN(d1, d2, L, p, K, κ, R) = {[q1, q2, ..., qd2]⊺ ∈ Rd2 : for each k = 1, ..., d2,
5

qk : Rd1 → R is in the form of (3.1) with L layers, width bounded by p,
∥qk∥L∞ ≤ R, ∥Wl∥∞,∞ ≤ κ, ∥bl∥∞ ≤ κ,
L
X
l=1
∥Wl∥0 + ∥bl∥0 ≤ K, ∀l},
(3.2)
where ∥q∥L∞(Ω) = sup
x∈Ω
|q(x)|, ∥Wl∥∞,∞ = mi,ajx |Wi,j|, ∥b∥∞ = miax |bi|, and ∥ · ∥0 denotes
the number of nonzero elements of its argument. The network class above has input dimension d1, output dimension d2, L layers, width p, and the number of nonzero parameters no larger than K. All parameters are bounded by κ, and each element in the output is bounded by R. The objective of operator learning is to construct an operator network Γp[·; θ] that approximates Γ. One approximation structure [13, 35] which is widely adopted in designing DNOs is the following. To better demonstrate the idea o-
f the approximation, we denote y as the independent variable of the output function of the operator Γ, and denote Γ(g; θ)(y) as the neural operator approximation to Γ, we then have the approximation,
Γ(g)(y) ≈ Γ(g; θ)(y) :=
N1
X
k=1
eak(g; θb)qek(y; θe) (3.3)
where g is the input function with a discretization denoted as g, Γ(g) is the output function depends on y, and θ = {θb, θe} represents the set of trainable parameters of the operator network consisted of eak and qek. The framework was first proposed in [13, 12] as a two-layer universal approximation scheme for nonlinear operators. It was later extended computationally to deep neural network architectures in [35], and was finally rigorously analyzed in terms of error convergence and generalization-
 in [34]. Following the terminology widely adopted in recent literature, we use the notation introduced in [35] to name the substructure of the network. Specifically, the architecture consists of two components:
• Branch network: ea(g; θb) = (ea1(g; θb1), . . . , eaN1(g; θbN1))T encode the input function g and
the operator Γ. Each component eak : RN2 → R is implemented as a sum of fully connected
neural networks. Specifically, eak =
H
X
n=1
anben, where N2 is the size of the discretization
g , H is the number of basis represented as a network ben in a neural network class F2 = FNN(N2, 1, L2, p2, K2, κ2), an are constants. The size of the entire network β (containing all ebk) is specified in Theorem 4.5.
• Trunk network: qe(y; θe) = (qe1, ..., qeN1). Here each qek : Rd2 → R is a network in class F1 = FNN(d2, 1, L1, p1, K1, κ1) with size to be specified in Theorem 4.5.
The following lemma from [44][Proposition 3] shows that a function of the product can be approximated by a network with arbitrary accuracy.
6

Lemma 3.1. Given M > 0 and ε > 0, there is a ReLU network e× : R2 → R in FNN(2, 1, L, p, K, κ, R) such that for any |x| ≤ M, |y| ≤ M , we have
|
e×(x, y) − xy| < ε.
The network architecture has
L = O(log ε−1), p = 6, K = O(log ε−1), κ = O(ε−1), R = M 2. (3.4)
The constant hidden in O depends on M .
4 Neural scaling of operator learning
4.1 Function Approximation
We will first prove the function approximation and establish the convergence rate. The results will be used in proving the operator approximation Theorem 4.5.
Theorem 4.1. Assume Assumptions 1, 2, 3, 4 hold. For any ε > 0, set r = − 2CT
c log ε
4C0
1 α
in
Assumption 2, and set N = Cpd1ε−1/2(log(ε−1)) 1
α , with constant C depends on CT , C0, c, Lg.
Let {ck}Nd1
k=1 be a uniform grid on Qr (covering Ωr) with spacing 2r/N along each dimension.
There exists a network architecture FNN(d1, 1, L, p, K, κ, R) and networks {qek}Nd1
k=1 with qek ∈
FNN(d1, 1, L, p, K, κ, R) for k = 1, ..., N d1, such that for any g ∈ G, we have
E
h
sup
0≤t≤T
g(Xt) −
N d1
X
k=1
g(ck)qek(Xt)
2
i
≤ ε. (4.1)
Such a network architecture has
L = O d2
1 log d1 + d21 + d1
2 log(ε−1) + d21 + d1p
α log log(ε−1) , p = O(1),
K = O d2
1 log d1 + d21 + d1
2 log(ε−1) + d21 + d1p
α log log(ε−1) ,
κ = O(d− d1
2
1 ε− d1+1
2 (log(ε−1))
d1 +p
α ), R = 1.
Here, the network order is determined by the constants CT , C0, c, α, Lg specified in Assumptions 1, 2, 3, and 4, which concern the function g and process {Xt}0≤t≤T . In particular, we denote C0
as the upper bound of E
h
sup
0≤t≤T
1 + |Xt|p 4i1/2
.
7

Proof. Recall Ωr and ΩC
r from the Definition 2.2. Without loss of generality, we assume that the origin 0 ∈ Ωr. We then decompose g(Xt) = g(Xt)1Ωr + g(Xt)1ΩrC For the compact domain
Ωr ⊂ Qr, we apply a partition to Qr covered by N d1 subcubes for some N to be specified later. We first approximate g(Xt)1Ωr on each cube by a constant function and then assemble them together
to get an approximation of {g(Xt)}0≤t≤T on Ωr. Denote the centers of the subcubes by {ck}Nd1
k=1
with ck = [ck,1, ck,2, ..., ck,d1 ]⊺. Let {ck}Nd1
k=1 be a uniform grid on Qr (covering Ωr), so that each
ck ∈ −r, −r + 2r
N − 1 , ..., r
d1
for each k. Define
ψ(a) =

 
 
1, |a| < 1,
0, |a| > 2,
2 − |a|, 1 ≤ |a| ≤ 2,
(4.2)
with a ∈ R, and
φck (x) =
d1
Y
j=1
ψ 3(N − 1)
2r (xj − ck,j) , x ∈ Qr. (4.3)
In this definition, we have supp (φck ) = x : ∥x − ck∥∞ ≤ 4r
3(N − 1) ⊂ x : ∥x − ck∥∞ ≤ 2r
(N − 1) and for the constraint space Ωr, we have
∥φck ∥L∞(Qr) = 1,
N d1
X
k=1
φck = 1.
For any g(Xt) with Xt ∈ Ωr, we construct a piecewise constant approximation as below,
g ̄(Xt) =
N d1
X
k=1
g(ck)φck (Xt), Xt ∈ Ωr.
Based on the decomposition of the domain Rd1 = Ωr ∪ ΩC
r , for any T ≥ 0, we have
E
h
sup
0≤t≤T
g(Xt) − g ̄(Xt)
2
i
=E
h
sup
0≤t≤T
g(Xt)
2
1ΩrC (Xt)
i
| {z }
I1
+E
h
sup
0≤t≤T
g(Xt) − g ̄(Xt)
2
1Ωr (Xt)
i
| {z }
I2
.
For the first term I1, applying the polynomial growth Assumption 3 for function g and uniform bound Assumption 1, and Cauchy-Schwartz inequality, we have
I1 = E
h
sup
0≤t≤T
g(Xt)
2
1ΩrC (Xt)
i
8

≤E
h
sup
0≤t≤T
g(Xt)
4
i1/2
E
h
sup
0≤t≤T
(1ΩrC (Xt))2i1/2
≤E
h
sup
0≤t≤T
1 + ∥Xt∥p 4i1/2
P sup
0≤t≤T
|Xt| ≥ r
1/2
≤ C0 P sup
0≤t≤T
|Xt| ≥ r
1/2
.
According to the tail bound Assumption 2, by taking the initial point X0 as the center of the domain,
and selecting r = − 2CT
c log ε
4C0
1 α
, we get the following bound
I1 ≤ C0e− crα
2CT ≤ ε
4 , (4.4)
where C0 denotes the upper bound of E
h
sup
0≤t≤T
1 + ∥Xt∥p 4i1/2
, which follows from Assumption
1. For the second term I2, by applying the partition of unity property
N d1
X
k=1
φck = 1, we have
I2 =E
h
sup
0≤t≤T
N d1
X
k=1
[g(Xt) − g(ck)]φck (Xt)
2
1Ωr (Xt)
i
≤E
h
sup
0≤t≤T
N d1
X
k=1
|g(Xt) − g(ck)||φck (Xt)|
2
1Ωr (Xt)
i
=E
h
sup
0≤t≤T
X
k:∥ck−Xt∥∞≤ 2r
(N −1)
|g(Xt) − g(ck)|φck (Xt)
2
1Ωr (Xt)
i
,
≤E
h
sup
0≤t≤T
max
k:∥ck−Xt∥∞≤ 2r
(N −1)
|g(Xt) − g(ck)|
X
k:∥ck−Xt∥∞≤ 2r
(N −1)
φck (Xt)
2
1Ωr (Xt)
i
≤E
h
sup
0≤t≤T
max
k:∥ck−Xt∥∞≤ 2r
(N −1)
|g(Xt) − g(ck)|21Ωr (Xt)
i
≤ (2rLg)2d1
(N − 1)2 , (4.5)
where we use the Lipschitz assumption of g in the last inequality and the uniform bound given
{Xt}0≤t≤T ∈ Ωr. Let N =
&
4√d1 log1/α(ε−1)Lg
√ε
'
+ 1, we get
I2 ≤ ε/4. (4.6)
9

Combining the estimates (4.4) and (4.5), we get
E
h
sup
0≤t≤T
g(Xt) − g ̄(Xt)
2
i
≤ε
2 . (4.7)
We then show that φck can be approximated by a network with arbitrary accuracy on the compact domain Ωr with a fixed parameter r. Notice that for a compact domain Ωr, this type of approximation has already been established in [34]. Since a different norm is employed here, we provide the proof for completeness. Note that φck is the product of d1 functions, each of which is piecewise linear and can be realized by the constant depth ReLU networks. Let e× be the network defined in Lemma 3.1 with accur-
acy δ > 0. For any x ∈ Qr, we approximate φck with qek defined as follows,
qek(x) = e× ψ 3(N − 1)
2r (x1 − ck,1) , e× ψ 3(N − 1)
2r (x2 − ck,2) , · · · .
For each k, define qek ∈ FNN(d1, 1, L, p, K, κ, R) with sizes to be specified later. For any Xt ∈ Ωr which is equivalent to considering Xt · 1Ωr , we may simply take x ∈ Ωr. That is, by viewing x as an arbitrary point in the domain Ωr, we have
|
qek(x) − φck (x)|
≤
e× ψ 3(N − 1)
2r (x1 − ck,1) , e× ψ 3(N − 1)
2r (x2 − ck,2) , · · · − φck (x)
≤
e× ψ 3(N − 1)
2r (x1 − ck,1) , ×e ψ 3(N − 1)
2r (x2 − ck,2) , · · ·
− ψ 3(N − 1)
2r (x1 − ck,1) e× ψ 3(N − 1)
2r (x2 − ck,2) , · · ·
+ ψ 3(N − 1)
2r (x1 − ck,1) e× ψ 3(N − 1)
2r (x2 − ck,2) , · · · − φck (x)
≤δ + E2,
where
E2 = ψ 3(N − 1)
2r (x1 − ck,1) e× ψ 3(N − 1)
2r (x2 − ck,2) , · · · − φck (x)
= ψ 3(N − 1)
2r (x1 − ck,1) e× ψ 3(N − 1)
2r (x2 − ck,2) , · · · −
d1
Y
j=2
ψ 3(N − 1)
2r (xj − ck,j)
Repeat this process to estimate E2, E3, ..., Ed1+1, where Ed1+1 =
d1
Y
k=1
ψ 3(N − 1)
2γ1
(x2 − ck,2) −
φck = 0. This implies that ∥φck − qek∥L∞(Ωr) ≤ d1δ. Thus, we have
E
"
sup
0≤t≤T
|φck (Xt) − qek(Xt)|21Ωr (Xt)
#
≤ d2
1δ2.
10

Applying Cauchy–Schwarz inequality and the Assumption 3, we have
E

 sup
0≤t≤T
N d1
X
k=1
g(ck)qek(Xt) − g ̄(Xt)
2
1Ωr (Xt)

 (4.8)
=E

 sup
0≤t≤T
N d1
X
k=1
g(ck)qek(Xt) −
N d1
X
k=1
g(ck)φck (Xt)
2
1Ωr (Xt)


≤E


N d1
X
k=1
|g(ck)|2 sup
0≤t≤T
N d1
X
k=1
|
qek(Xt) − φck (Xt)|21Ωr (Xt)


≤d2
1N 2d1 C2
g (1 + rp)2δ2 ≤ ε
2 , (4.9)
where the last inequality follows from the fact Xt ∈ Ωr and the polynomial growth of g. By
selecting δ =
rε
2d21N 2d1 Cg2(1 + rp)2 = O(d− d1
2
1ε
d1 +1
2 log(ε−1) − d1+p
α ). Thus, we have
E

 sup
0≤t≤T
g(Xt) −
N d1
X
k=1
g(ck)qek
2


≤E
h
sup
0≤t≤T
|g(Xt) − g ̄(Xt)|2 i
+E

 sup
0≤t≤T
g ̄(Xt) −
N d1
X
k=1
u(ck)qek
2


≤ε
2+ε
2 = ε.
The network architecture is then specified in the theorem.
4.2 Functional Approximations
Theorem 4.2. Let F be defined in Definition 2.6, and assume Assumptions 1, 2, 3, and 4 hold.
For any ε > 0, set r = − 2CT
c log ε2
8C0L2
F
1 α
+ 1. Let {cm}Nδ
m=1 ⊂ Qr so that {Bδ(cm)}Nδ
m=1
is a cover of Qr for some N δ > 0 to be estimated in Remark 4.4, and with ball radius δ =
Cε(LFLg)−1d− 1
2
1 , with C a constant. Let H = O(
√
N δε−Nδ ), and set the network FNN(N, 1, L, p, K, κ, R) with
L = O (N δ)2 log(N δ) + (N δ)2 log(ε−1) , p = O(1), K = O (N δ)2 log N δ + (N δ)2 log(ε−1) ,
κ = O((N δ)− Nδ
2 ε −Nδ −1
2 ), R = 1.
11

There are {qek}H
k=1 with qek ∈ FNN(N δ, 1, L, p, K, κ, R) for any k, such that we have
sup
g∈G
|Fg −
H
X
k=1
akqek(g)| ≤ ε, (4.10)
where g = [g(c1), g(c2), ..., g(cNδ )]⊤, ak’s are coefficients depending on F. The constant hidden in O and all constants C depend on the constants LF, Lg, CT , C0, c, α in the assumptions.
Proof. For r > 0, define the cube as before,
Qr := [−r, r]d1 =
n
x ∈ Rd1 : ∥x∥∞ < r
o
, where ∥x∥∞ := max
1≤j≤d |xj |.
Here r is chosen so that tail probability is small as we did in the function approximation. Let
{Bδ (ck )}N δ
k=1 be a finite cover of Qr by N δ Euclidean balls. By the Lemma 2.7, there exists a
partition of unity {wk(x)}N
k=1 subordinate to the cover {Bδ(ck)}Nδ
k=1.
For any g ∈ U , define g = [g(c1), g(c2), . . . , g(cNδ )]T, and define,
gw(x) =

  
  
Nδ
X
k=1
g(ck) wk(x), x ∈ Ωr,
0, x ∈ Ω C
r.
(4.11)
Then, similar to the estimates in (4.7), as N δ is the covering number of all d1 dimensions, we have
E
"
sup
t≤s≤T
g(Xs) − gw(Xs) 2
#
=E
h
sup
t≤s≤T
g(Xs)
2
1ΩrC (Xs)
i
| {z }
J1
+E
h
sup
t≤s≤T
g(Xs) − gw(Xs)
2
1Ωr (Xt)
i
| {z }
J2
. (4.12)
Similar to (4.4), we have
J1 ≤ C0e− crα
2CT . (4.13)
Similar to (4.5), taking into consideration of the radius of the covering ball being δ, we have
J2 =E
h
sup
t≤s≤T
Nδ
X
k=1
[g(Xs) − g(ck)]wk(Xs)
2
1Ωr (Xs)
i
≤E
h
sup
t≤s≤T
Nδ
X
k=1
|g(Xs) − g(ck)||wk(Xs)|
2
1Ωr (Xs)
i
12

=E
h
sup
t≤s≤T
X
k:∥ck −Xs ∥∞ ≤δ
|g(Xs) − g(ck)|wk(Xs)
2
1Ωr (Xs)
i
,
≤E
h
sup
t≤s≤T
max
k:∥ck −Xs ∥∞ ≤δ
|g(Xs) − g(ck)|
X
k:|ck −Xs |≤δ
wk (Xs )
2
1Ωr (Xs)
i
≤E
h
sup
t≤s≤T
max
k:∥ck −Xs ∥∞ ≤δ
|g(Xs) − g(ck)|21Ωr (Xs)
i
≤(Lgδ)2d1. (4.14)
From the Lipschitz property of the functional F defined in Definition 2.6, we have
F(g) − F(gw) 2 ≤ L2
F ∥g − gw∥2
S2
≤ L2
F (Lgδ)2d1 + C0e− crα
2CT < ε2/4, (4.15)
i.e.
F(g) − F(gw) < ε/2, (4.16)
which follows by selecting
r = − 2CT
c log ε2
8C0L2
F
1 α
+ 1, δ = ε
2√2LF Lg d
1 2 1
. (4.17)
Now, for any g, ge ∈ G, define gw and gew as in (4.11), and set
g = g(c1), . . . , g(cNδ ) T, ge = ge(c1), . . . , ge(cNδ ) T.
Define the function h(g) := F(gw). Then
|h(g) − h(ge)|2 = F(gw) − F(gew) 2
≤ L2
F ∥gw − gew∥2
S2
= L2
FE

 sup
t≤s≤T
Nδ
X
k=1
g(ck) − ge(ck) wk(Xs)
2


≤ L2
F
Nδ
X
k=1
|g(ck) − ge(ck)|2 E

 sup
t≤s≤T
Nδ
X
k=1
wk (Xs )2


≤ L2
F
Nδ
X
k=1
|g(ck) − ge(ck)|2
13

≤ L2
F |g − ge|2, (4.18)
where we use the fact that {wk(x)}Nδ
k=1 is a partition of unity. Thus we show that h(g) := F(gw) is a Lipchitz function on G according to (4.18).Besides, according to the assumption on F and the definition of h, h is bounded. Also, the domain of h is bounded by the range of g. Consequently, h satisfies the approximation rate estimate in [34][Theorem 5], it follows that, for ε > 0, if we set
H =C
√
N δε−Nδ for some C, then there exists a network architecture FNN(N δ, 1, L, p, K, κ, R) and {qek}H
k=1 with qek ∈ FNN(N δ, 1, L, p, K, κ, R) for k = 1, . . . , H such that
sup
g∈G
F(gw) −
H
X
k=1
akqek(g) ≤ ε
2 , (4.19)
where ak are constants depending on f . Such an architecture has
L = O (N δ)2 log(N δ) + (N δ)2 log(ε−1) , p = O(1), K = O (N δ)2 log N δ + (N δ)2 log(ε−1) ,
κ = O((N δ)− Nδ
2 ε −Nδ −1
2 ), R = 1.
Finally, We have, for any g ∈ G and g = [g(c1), ..., g(cNδ )]⊤
sup
g∈G
F(g) −
H
X
k=1
akqek(g) ≤ sup
g∈G
|F(g) − h(g)| + sup
g
h(g) −
H
X
k=1
ak qek (g )
≤ε
2+ε
2 = ε.
The next lemma and remark are used to estimate N δ and H.
Lemma 4.3. Let D = [−γ, γ]d for some γ > 0. For any δ > 0, there exists a cover {Bδ(cm)}M
m=1
of D with
M ≤ Cδ−d, (4.20)
where C is a constant depending on γ and d.
Proof of Lemma 4.3. By [14, Chapter 2], we have,
c ≤ 2γ
δ
d
+ 7d log d ≤ C γ
δ
d
(4.21)
for some C depending on γ and d.
14

Remark 4.4. In this remark, we estimate the number of covering N δ and hence the number of basis H needed. By Lemma 4.3 and Equation 4.17 in the proof, it follows that,
Nδ ≤ C γ
δ
d1 ≤ C(− 2CT
c)
d1
α log ε2
8C0L2
F
d1 α
ε−d1 d
d1 2 1
≤ C log(ε−2)
d1
α ε−d1 ,
where the constant C depends on CT , c, C0, α, LF, Lg and d1. Dropping the lower order term in Equation 4.22, it follows that
H = C(N δ) 1
2 ε−N δ = Cε− d1
2 ε−ε−d1 ,
or H = O(ε−ε−d1 ).
4.3 Operator Approximation
Theorem 4.5. [Operator] Let Assumptions 1, 2, 3, 4, 5, and 6 hold. For any ε > 0, set N1 = Cε−d2, and N2 = O(ε−d1d2−d1). Define the network architecture F1 = FNN(d2, 1, L1, p1, K1, κ1) and F2 = FNN(N2, 1, L2, p2, K2, κ2) with
L1 = O log(ε−2) , p1 = O(1), K1 = O log(ε−2) , κ1 = O(ε−d2), R = 1,
and
L2 = O N 2
2 log N2 + N 2
2 log(ε−d2−1) , p2 = O(N
1 2
2 ε−N2d2−N2 ),
K2 = O N
1 2
2 ε−N2d2−N2 N 2
2 log N2 + N 2
2 log(ε−d2−1) ,
κ2 = O(N − N2
2
2 ε− N2d2
2 −N2 ).
For any operator Γ : G → U satisfying Assumption 6, there are {qek}N1
k=1 with qek ∈ F1 and {eak}N1
k=1
with eak ∈ F2 such that
sup
g∈G
E sup
0≤t≤T
Γ(g)(Xt) −
N1
X
k=1
eak(g)qek(Xt) ≤ ε. (4.22)
Proof of Theorem 4.5. By Assumption 5 and 6, Γ(g)(·) satisfies the assumptions of Theorem 4.1.
It follows that, for ε1 > 0 which will be specified, set r = − 2CT
c log ε1
4C0
1 α
, and define Qr, Ωr
as in Definition 2.2, there exists a constant N1 = Cε−d2
1 for some constant C depending on d2, Lg
15

and r, a network architecture F1 = FNN(d2, 1, L1, p1, K1, κ1, R1) and {qek}N1
k=1 with qek ∈ F1, and
{ck }N1
k=1 ⊂ Qr such that for any g ∈ G, we have
E sup
0≤t≤T
Γ(g)(Xt) −
N1
X
k=1
Γ(g)(ck)qek(Xt)
2 1/2
≤ ε1. (4.23)
Such a network has size
L1 = O log(ε−2
1 ) , p1 = O(1), K1 = O log(ε−2
1 ) , κ1 = O(ε−d2
1 ).
For each k, define the functional
Fk(Γg) := Γg(ck). (4.24)
For any g1, g2 ∈ G, and the forward process at t starts at ck, we have
|Fk(Γg1) − Fk(Γg2)|2 (4.25)
≤E sup
0≤s≤T
|Γ(g1)(Xs) − Γ(g2)(Xs)|2
≤L2
ΓE sup
0≤s≤T
|g1(Xs) − g2(Xs)|2 (4.26)
=L2
Γ∥g1 − g2∥2
S2, (4.27)
where the last inequality follows from Assumption 6. By Theorem 4.2, for any ε2 > 0, there exist N2 and H with values estimated later, and a network architecture F2 = FNN(N2, 1, L2, p2, K2, κ2, R2) with
L2 = O N 2
2 log N2 + N 2
2 log(ε−1
2 ) , p2 = O(1), K2 = O N 2
2 log N2 + N 2
2 log(ε−1
2),
κ2 = O(N − N2
2
2 ε−N2−1
2 ), R = 1.
Such a network architecture gives a network eak so that
sup
g
|Fk(Γ(g)) − eak(g)| ≤ ε2.
Therefore,
E sup
0≤s≤T
N1
X
k=1
Fk(Γg)qek(Xs) −
N1
X
k=1
eak(g)qek(Xs)
=E sup
0≤s≤T
N1
X
k=1
(Fk(Γg) − eak(g)) qek(Xs)
16

≤
N1
X
k=1
sup
g
|Fk(Γg) − eak(g)| = N1ε2. (4.28)
Applying the Cauchy–Schwarz inequality, using (4.23) and (4.28), we have,
sup
g∈G
E sup
0≤s≤T
Γg(Xs) −
N1
X
k=1
eak(g)qek(Xs)
≤ sup
g∈G
E sup
0≤s≤T
Γ(g)(Xs) −
N1
X
k=1
Fk(Γg)qek(Xs)
+ sup
g∈G
E sup
0≤s≤T
N1
X
k=1
Fk(Γg)qek(Xs) −
N1
X
k=1
eak(g)qek(Xs)
≤ sup
g∈G
E sup
0≤s≤T
Γ(g)(Xs) −
N1
X
k=1
Fk(Γg)qek(Xs)
2 1/2
+ sup
g∈G
E sup
0≤s≤T
N1
X
k=1
Fk(Γg)qek(Xs) −
N
X
k=1
eak(g)qek(Xs)
≤ε1 + N1ε2.
Set ε2 = ε1/(2N1), ε1 = ε
2 , it follows that ε2 = O(εd2+1), we then have
sup
g∈G
E sup
0≤s≤T
Γg(Xs) −
N1
X
k=1
eak(g)qek(Xs) ≤ ε.
By Remark 4.4, the resulting network architectures have N2 = O(ε−d1d2−d1), the number of basis
H needed is then estimated as H = O(N
1 2
2 ε−N2
2 ) = O(ε−(d2+1)ε−d1d2−d1 ), which determines the width of F2, which is p2 = H. Consequently, the network size estimate follows,
L2 = O N 2
2 log N2 + N 2
2 log(ε−d2−1) , p2 = O(N
1 2
2 ε−N2d2−N2 ),
K2 = O N
1 2
2 ε−N2d2−N2 N 2
2 log N2 + N 2
2 log(ε−d2−1) ,
κ2 = O(N − N2
2
2 ε− N2d2
2 −N2 ).
5 European Option Pricing Operator
After proving the universal approximation of the operator, we consider the following applications on European and American type option pricing problems in this section and the next section. The
17

relationship of the functional, operator and the solution of the BSDE is decripted in the following table 5.
Symbol Meaning Definition / Norm
G Input space (payoffs) E
"
sup
0≤s≤T
|g(Xs)|2
#
<∞
U Output space (pricing functions) E
"
sup
0≤s≤T
|u(s, Xs)|2
#
<∞
Γ Pricing operator Γ : G → U , g 7→ u = Γ(g)
Ft,x Evaluation functional Ft,x(u) = u(t, x)
Yt BSDE solution Yt = (Ft,Xt ◦ Γ)(g)
5.1 European option pricing
Let (Ω, F , {Ft}t∈[0,T ], Q) be a filtered probability space satisfying the usual conditions, carrying
a d-dimensional Brownian motion B = (B1, . . . , Bd) under the risk-neutral measure Q. The state process Xt ∈ Rd1 follows the diffusion
dXt = b(t, Xt) dt + σ(t, Xt) dBt, X0 = x, (5.1)
where b : [0, T ] × Rd1 → Rd1 and σ : [0, T ] × Rd1 → Rd1×d are measurable, locally bounded, and Lipschitz in x. Let g : Rd1 → R be the terminal payoff, such that g(XT ) ∈ L2(Q). The price of the European option is
u(t, x) = EQ exp −
ˆT
t
r(s, Xs) ds g(XT ) Xt = x . (5.2)
where the risk free rate r(t, Xt) ≥ 0. Let L denote the infinitesimal generator of Xt:
(Lφ)(t, x) =
n
X
i=1
bi(t, x)∂xiφ(t, x) + 1
2
n
X
i,j=1
aij(t, x)∂2
xixj φ(t, x). (5.3)
where a(t, x) = σ(t, x)σ(t, x)⊤. Then u(t, x) satisfies the PDE
∂tu + Lu − ru = 0, u(T, x) = g(x). (5.4)
In addition, from a probablistic point of view, the price process (Yt, Zt) satisfies the backward stochastic differential equation (BSDE):
Yt = g(XT ) −
ˆT
t
r(s, Xs)Ys ds −
ˆT
t
Zs dBs, (5.5)
18

where Yt = u(t, Xt) and Zt = σ⊤(t, Xt)∇xu(t, Xt).
As an example, in the case of Black–Scholes Model, for a single asset Xt with
dXt = Xt(r dt + σ dBt),
and payoff g(XT ), the PDE reduces to
∂tu + 1
2 σ2x2uxx + (r − q)xux − ru = 0, u(T, x) = g(x). (5.6)
Theorem 5.1 (Lipschitz continuity of the European pricing operator in S2). Let (Ω, F , {Ft}t∈[0,T ], Q) support a d-dimensional Brownian motion B, and let the state process X solve
dXt = b(t, Xt) dt + σ(t, Xt) dWt, X0 = x, (5.7)
with b, σ Lipschitz in x and of linear growth. Let the risk free rate r(t, Xt) be bounded and nonnegative, with 0 ≤ r(t, x) ≤ r ̄. For any terminal payoff g : Rd1 → R with E[|g(XT )|2] < ∞, let u = ΓEg denote the (unique) solution to
∂tu + Lu − r u = 0, u(T, ·) = g(·),
where L is the generator of X. Set Y g
t := u(t, Xt) and define the S2-norm ∥Y ∥S2 := E[ sup
0≤t≤T
|Yt|2] 1/2.
Then for any two terminal payoffs g1, g2, the operator ΓE satisfies the following condition,
E
"
sup
0≤t≤T
ΓE(g1)(t, Xt) − ΓE(g2)(t, Xt) 2
#
≤ LE
"
sup
0≤t≤T
g1(t, Xt) − g2(t, Xt) 2
#
,
with Lipschitz constant L = 4e2r ̄T . Hence the pricing operator Γ is Lipschitz on S2.
Proof. By Feynman–Kac, for each g we have (under Q)
ΓE(g) := Y g
t = u(t, Xt) = E exp −
ˆT
t
r(s, Xs) ds g(XT ) Ft .
Fix g1, g2 and write ∆g := g1 − g2, ∆Yt := Y g1
t − Y g2
t . Then
∆Yt =E exp −
ˆT
t
r(s, Xs) ds ∆g(XT ) Ft
= exp
ˆt
0
r(s, Xs) ds E exp −
ˆT
0
r(s, Xs) ds ∆g(XT ) Ft
= exp
ˆt
0
r(s, Xs) ds Mt,
19

where Mt := E exp −
ˆT
0
r(s, Xs) ds ∆g(XT ) Ft is a square-integrable martingale.
Because 0 ≤ r ≤ r ̄, we have sup
0≤t≤T
exp
ˆt
0
r(s, Xs) ds ≤ er ̄T . Therefore
sup
0≤t≤T
|∆Yt| ≤ er ̄T sup
0≤t≤T
|Mt|.
Taking expectations and applying Doob’s inequality for martingales,
E
"
sup
0≤t≤T
|∆Yt|2
#
≤e2r ̄T E
"
sup
0≤t≤T
|Mt|2
#
≤4e2r ̄T E |MT |2 = 4e2r ̄T E exp
ˆT
0
−2r(s, Xs) ds |∆g(XT )|2 .
Since r ≥ 0, exp
ˆT
0
−2r(s, Xs) ds ≤ 1 a.s., hence
E
"
sup
0≤t≤T
|∆Yt|2
#
≤ 4e2r ̄T E |∆g(XT )|2 ≤ 4e2r ̄T E
"
sup
0≤t≤T
|∆g(t, Xt)|2
#
.
Next we verify the tail probability Assumption 2. According to [2] and [11], we have the following estimate.
Proposition 5.2. The solution Xt for the equation (5.7) has the following tail probability,
P( sup
t∈[0,T ]
|Xt − x0| ≥ r) ≤ exp(− cr2
T ), (5.8)
for some constants c > 0, and r > 0.
Remark 5.3. For SDEs driven by fractional Brownian motion, such estimates are proved in [4]. For rough differential equations, the corresponding estimates are established in [16].
6 Deep neural operator for American option pricing and PDE with
free boundary
Given a Markov process Xt and exercise payoff g(t, Xt), the price of an American option is the value function
u(t, x) = sup
τ ∈Tt,T
EQ exp −
ˆτ
t
r(s, Xs) ds g(τ, Xτ ) Xt = x , (6.1)
20

where Tt,T is the set of stopping times with values in [t, T ]. Thanks to [15], the triple (Y, Z, K) satisfies the reflected backward SDE:
Yt = g(T, XT ) −
ˆT
t
r(s, Xs)Ys ds + KT − Kt −
ˆT
t
Zs dWs,
Yt ≥ g(t, Xt),
ˆT
0
(Ys − g(s, Xs)) dKs = 0,
(6.2)
with (Y, Z, K) ∈ S2 × H2 × A2. Here S2 denotes square-integrable adapted processes, H2 is the predictable processes with square-integrable norm, and A2 the increasing, adapted, square-integrable processes vanishing at 0. The price u(t, x) can also be formulated using variational inequality. If u(t, x) is sufficiently smooth, it satisfies the obstacle problem:
max{∂tu + Lu − ru + c, g − u} = 0, u(T, x) = g(T, x). (6.3)
Our resutls thus also provide a deep neural operator approximation for PDE with free boundary. For the special case of Black–Scholes American Option, a single asset St under the dynamic,
dXt = Xt(r dt + σ dWt).
The corresponding PDE becomes
max ∂tu + 1
2 σ2x2uxx + rxux − ru, g(x) − u = 0, u(T, x) = g(x). (6.4)
In what follows, we denote by ΓA the American option pricing operator associated with (6.1) and (6.2), equivalently the PDE free-boundary problem (6.4). We first show that ΓA satisfies a Lipschitz condition.
Theorem 6.1. Assume that E
h
sup
0≤t≤T
g(Xt)
2
i
< ∞, then we have
E
"
sup
0≤t≤T
|ΓA(g1)t − ΓA(g2)t|2
#
≤ LΓE ∥g1(XT ) − g2(XT )∥2 +Cf,g1,g2 (E |(g1 − g2)∗
T |2 )1/2,
where we denote ΓA(gi)t = Y i
t as the solution for (6.2) with terminal and boundary function gi.
Proof. According to [45][Theorem 6.2.3] with same generator f (Y, Z) = rY in the BSDE (6.2), we first have the following estimates,
E
"
sup
0≤t≤T
|ΓA(g1)t − ΓA(g2)t|2
#
≤ LΓE[∥g1(XT ) − g2(XT )∥2]
+ C(I1 + I2)E[( sup
0≤t≤T
|g1(Xt) − g2(Xt)|)2]1/2
≤ [LΓ + C(I1 + I2)](E[( sup
0≤t≤T
|g1(Xt) − g2(Xt)|)2])1/2,
21

where
Ii := E[|gi(XT )|2 + (
ˆT
0
|f i
t (0, 0)|dt)2 + |( sup
0≤t≤T
(gi(Xt))+|2]. (6.5)
Denote Cg1,g2 as the constant depending on g1, g2, LΓ, f , we conclude the proof.
6.1 Operator approximation for American option pricing operator
In this section, we generalize the operator approximation framework from Section 4 to encompass a wider class of operators. The extension is based on a Lipschitz assumption motivated by Theorem 6.1, which naturally arises in the study of American option pricing problems, reflected FBSDEs, and PDEs with free boundary conditions.
Assumption 7. Assume the operator
ΓA : G −→ U , g 7−→ u = ΓA(g),
from G to U is Lipschitz if : there exists LΓA such that for any g1, g2 ∈ G, we have
E
"
sup
0≤t≤T
|ΓA(g1)(Xt) − ΓA(g2)(Xt)|2
#
≤L2
ΓA

E
"
sup
0≤t≤T
|g1(Xt) − g2(Xt)|2
#
+E
"
sup
0≤t≤T
|g1(Xt) − g2(Xt)|2
#!1/2
.
for all g1, g2 ∈ G. Or equivalently,
∥ΓA(g1) − ΓA(g2)∥2
S2 ≤ L2
ΓA (∥g1 − g2∥S2 + ∥g1 − g2∥2
S2). (6.6)
For notation simplicity, we denote ∥g1 − g2∥1,2
S2 := ∥g1 − g2∥S2 + ∥g1 − g2∥2
S2.
We next prove the operator approximation under Assumption 7.
Theorem 6.2. [American Option Pricing Operator] Let Assumptions 1, 2, 3, 4, and 7 hold. For
any ε > 0, set N = O ε−2d2 , and N δ = O(ε−4d1d2−2d1). Define the network architecture
F1 = FNN(d2, 1, L1, p1, K1, κ1, R1) and F2 = FNN(N δ, 1, L2, p2, K2, κ2, R2) with
L1 = O ( 1
2 d2 + 2d2
2) log(ε−2
1 ) , p1 = O(1), K1 = O ( 1
2 d2 + 2d2
2) log(ε−2
1 ) , κ1 = O ε−2d2
1 , R1 = 1.
and,
L2 = O (N δ + 1
2 (N δ)2) log(N δ) + (2(N δ)2 + N δ) log ε−(2d2+1) + N δ log(re) , p2 = O(ε−(4d1−2)Nδ
2 ),
22

K2 = O (N δ + 1
2 (N δ)2) log(N δ) + (2(N δ)2 + N δ) log ε−2(d2+1) + N δ log(re) ,
κ2 = O(ε−Nδ(2d2+1)), R2 = 1,
where re is a constant. For any operator ΓA : G → U satisfying Assumption 7, there are {qek}N1
k=1
with qek ∈ F1 and {eak}N1
k=1 with aek ∈ F2 such that
sup
g∈G
E sup
0≤t≤T
ΓA(g)(Xt) −
N1
X
k=1
eak(g)qek(Xt) ≤ ε. (6.7)
Proof of Theorem 6.2. We reproduce the function, functional and operator approximation under the new Assumption 7. Step 1 (function approximation): We first prove the function approximation under Assumption 7 which is the building block for the rest of the proof. Following the proof of Theorem 4.1, the only difference is that we need to estimate I2 in the proof of Theorem 4.1, which now has the following form due to the new Assumption 7. In specific, the function approximation for the function ΓA(-
g) following the proof of Theorem 4.1 has the following form,
E
h
sup
0≤t≤T
ΓA(g)(Xt) −
N d2
X
k=1
ΓA(g)(ck)φck (Xt)
2
i
=E
h
sup
0≤t≤T
ΓA(g)(Xt)
2
1ΩrC (Xt)
i
| {z }
IA
1
+E
h
sup
0≤t≤T
ΓA(g)(Xt) −
N d2
X
k=1
ΓA(g)(ck)φck (Xt)
2
1Ωr (Xt)
i
| {z }
IA
2
.
The estimate of IA
1 follows the same as in (4.4). For the second term IA
2 , reproducing the estimates
in (4.5) under Assumption 7 for the function ΓA(g) ∈ U , we have
IA
2 =E
h
sup
0≤t≤T
N d2
X
k=1
[ΓA(g)(Xt) − ΓA(g)(ck)]φck (Xt)
2
1Ωr (Xt)
i
≤E
h
sup
0≤t≤T
N d2
X
k=1
|ΓA(g)(Xt) − ΓA(g)(ck)||φck (Xt)|
2
1Ωr (Xt)
i
=E
h
sup
0≤t≤T
X
k:∥ck−Xt∥∞≤ 2r
(N −1)
|ΓA(g)(Xt) − ΓA(g)(ck)|φck (Xt)
2
1Ωr (Xt)
i
,
≤E
h
sup
0≤t≤T
max
k:∥ck−Xt∥∞≤ 2r
(N −1)
|ΓA(g)(Xt) − ΓA(g)(ck)|
X
k:∥ck−Xt∥∞≤ 2r
(N −1)
φck (Xt)
2
1Ωr (Xt)
i
≤E
h
sup
0≤t≤T
max
k:∥ck−Xt∥∞≤ 2r
(N −1)
|ΓA(g)(Xt) − ΓA(g)(ck)|21Ωr (Xt)
i
23

≤E
h
sup
0≤t≤T
max
k:∥ck−Xt∥∞≤ 2r
(N −1)
|ΓA(g)(Xt) − ΓA(g)(ck)|21Ωr (Xt)
i
≤L2
ΓA E
"
sup
0≤t≤T
max
k:∥ck−Xt∥∞≤ 2r
(N −1)
|g(Xt) − g(ck)|2
#
+E
"
sup
0≤t≤T
max
k:∥ck−Xt∥∞≤ 2r
(N −1)
|g(Xt) − g(ck)|2
#!1/2

≤L2
ΓA
(2rLg )2 d2
(N − 1)2 + (2rLg)2d2
(N − 1)2
1/2!
≤C L2
ΓA
2rLg d1/2
2
(N − 1) ≤ 1
4 × ε21
4 , (6.8)
where we use the Lipschitz assumption of ΓA from Assumption (7), and (2rLg)2d2
(N − 1)2
1/2
is the
dominating term since (2rLg)2d2
(N − 1)2 < 1 by choosing ε1 to be sufficiently small. Following the same
idea and estimate in (4.6), in order to get the desired estimate in (6.11), we make the following selection.
Up to a constant c change, for ε1 > 0 which will be specified, set r = − 2CT
c log ε21
16C0
1 α
,
and define Qr, Ωr as in Definition 2.2, there exists a constant N = O rLgd
1 2
1 ε−2
1 following
from the designed estiamtes in (6.8), for some constant C depending on d2, Lg and r, a network architecture F1 = FNN(d2, 1, L1, p1, K1, κ1, R1) and {qek}N1
k=1 with qek ∈ F1, and {ck}N1
k=1 ⊂ Qr
such that for any g ∈ G, we separate the estimates into the following two parts,

E sup
0≤t≤T
ΓA(g)(Xt) −
N1
X
k=1
ΓA(g)(ck)qek(Xt)
2


1/2
≤ ε1/2. (6.9)
For the ease of the notation, we denote N1 = CN d2 for some constant C. Since ε1/2 < 1, this further implies
E sup
0≤t≤T
ΓA(g)(Xt) −
N1
X
k=1
ΓA(g)(ck)qek(Xt)
2
≤ ε2
1/4 ≤ ε1/2. (6.10)
Combining the above two estimates, we get
∥ΓA(g) −
N1
X
k=1
ΓA (g )(ck )qek ∥1,2
S2 ≤ ε1. (6.11)
24

According to Theorem 4.1, and the relations between (6.9) and (6.10), the network size F1 will be determined by the estimate in (6.10). Since the Lipschitz assumption is not used in (4.9), following
the same estimate in (4.9) and r = O (log(ε−2
1 )) 1
α , N = O rLgd
1 2
1 ε−2
1 estimates, we have
δ = O d− d2
2 −1
1ε
1
2 +2d2
1 (log ε−2
1 )− p+d2
α . Such a network has size,
L1 = O ( 1
2 d2 + 2d2
2) log(ε−2
1 ) , p1 = O(1), K1 = O ( 1
2 d2 + 2d2
2) log(ε−2
1) ,
κ1 = O ε−2d2
1 , R1 = 1.
Step 2 (functional approximation): For each k, define the functional induced by the operator ΓA as follows,
Fk(ΓA(g)) = ΓA(g)(ck). (6.12)
For any g1, g2 ∈ G, and the forward process at t starts at ck, we have
|Fk(ΓA(g1)) − Fk(ΓA(g2))|2
≤E sup
0≤s≤T
|ΓA(g1)(Xs) − ΓA(g2)(Xs)|2
≤L2
ΓA

E sup
0≤s≤T
|g1(Xs) − g2(Xs)|2 + E sup
0≤s≤T
|g1(Xs) − g2(Xs)|2
!1/2

=L2
ΓA ∥g1 − g2∥1,2
S2 , (6.13)
where the last inequality follows from Assumption 7. Recall the function gw(x) defined in (4.11), for the functional F induced by the American option pricing operator ΓA, we have
F(g) − F(gw) 2 ≤ L2
ΓA ∥g − gw∥1,2
S2
≤ L2
ΓA ∥g − gw∥2
S2 + LΓA ∥g − gw∥1
S2,
which is equivalent to
F(g) − F(gw) ≤ (L2
ΓA ∥g − gw∥2
S2 + LΓA ∥g − gw∥1
S2 )1/2,
where we assume that Γ2
A ≤ ΓA to ease the computation which, up to a constant change, does not
change the order of the radius size. (Similarly, ΓA ≤ Γ2
A implies similar computations). Following the idea to the derivation of (6.11) from (6.9) and (6.10), up to a constant, for any ε2 > 0, we can
pick r such that L2
ΓA ∥g − gw∥2
S2 ≤ ε42
64 ≤ ε22
8 , which thus implies LΓA∥g − gw∥1
S2 ≤ ε22
8 , and the
following estimate
F(g) − F(gw) ≤ ( ε22
8 + ε22
8 )1/2 ≤ ε2/2. (6.14)
25

Thus, L2
ΓA ∥g − gw∥2
S2 ≤ ε42
64 determines the following parameters, following (4.13), (4.14)
and (4.15), we have
r2 = − 2CT
c log ε42
128C0L2
F
1 α
+ 1, δ2 = Cε22
8√2LF Lg d
1 2 1
, (6.15)
where C is a constant. Now, for any g, ge ∈ G, define gw and gew as in (4.11), and set
g = g(c1), . . . , g(cNδ ) T, ge = ge(c1), . . . , ge(cNδ ) T.
Define the function h(g) := F(gw). According to (6.12) and (6.13), we have
|h(g) − h(ge)|2 = F(gw) − F(gew) 2
≤ L2
ΓA ∥gw − gew∥1,2
S2
= L2
ΓA E

 sup
t≤s≤T
Nδ
X
k=1
g(ck) − ge(ck) wk(Xs)
2


+ L2
ΓA

E

 sup
t≤s≤T
Nδ
X
k=1
g(ck) − ge(ck) wk(Xs)
2




1/2
≤ L2
ΓA
Nδ
X
k=1
|g(ck) − ge(ck)|2 E

 sup
t≤s≤T
Nδ
X
k=1
wk (Xs )2


+ L2
ΓA
Nδ
X
k=1
|g(ck) − ge(ck)|2 1/2
E

 sup
t≤s≤T
Nδ
X
k=1
wk (Xs )2


1/2
≤ L2
ΓA
Nδ
X
k=1
|g(ck) − ge(ck)|2 +


Nδ
X
k=1
|g(ck) − ge(ck)|2


1/2
≤ L2
ΓA(|g − ge|2 + |g − ge|), (6.16)
which is equivalent to
|h(g) − h(ge)| ≤ LΓA(|g − ge|2 + |g − ge|)1/2.
By Assumption 3, we have the bound of function g on Qr as below,
g(x) ≤ Cg(1 + |x|p) ≤ Cg(1 + |r2|p) := re, x ∈ Qr2.
26

Similarly, according to our definition in (6.12), h is also bounded above. Applying Lemma 6.3
(which is proved below), we claim that for 1
2 ε2 > 0 the function (functional) h(g) = F(gw) can be
approximated by a network F2 = FNN(N δ, 1, L2, p2, K2, κ2, R2),
L2 = O (N δ + 1
2 (N δ)2) log(N δ) + (2(N δ)2 + N δ) log ε−1
2 + N δ log(re) , p2 = O(1),
K2 = O (N δ + 1
2 (N δ)2) log(N δ) + (2(N δ)2 + N δ) log ε−1
2 + N δ log(re) ,
κ2 = O(ε−Nδ
2 ), R2 = 1.
That is
sup
g∈U
F(gw) −
N2
X
k=1
h(gk)qek ≤ 1
2 ε2, (6.17)
where N2 = N Nδ , with N = O(
√
N δε−2
2 ). Combining the above estimates in (6.14) and (6.17), such a network architecture gives a network eak so that
sup
g
|Fk(Γ(g)) − eak(g)| ≤ ε2.
Therefore,
E sup
0≤s≤T
N1
X
k=1
Fk(Γg)qek(Xs) −
N1
X
k=1
eak(g)qek(Xs)
=E sup
0≤s≤T
N1
X
k=1
(Fk(Γg) − eak(g)) qek(Xs)
≤
N1
X
k=1
sup
g
|Fk(Γg) − eak(g)| = N1ε2. (6.18)
Step 3 (American pricing operator approximation): Applying the Cauchy–Schwarz inequality, using (6.11) and (6.18), we have
sup
g∈G
E sup
0≤s≤T
ΓAg(Xs) −
N1
X
k=1
eak(g)qek(Xs)
≤ sup
g∈G
E sup
0≤s≤T
ΓA(g)(Xs) −
N1
X
k=1
Fk(Γg)qek(Xs)
+ sup
g∈G
E sup
0≤s≤T
N1
X
k=1
Fk(ΓAg)qek(Xs) −
N1
X
k=1
eak(g)qek(Xs)
27

≤ sup
g∈G
E sup
0≤s≤T
ΓA(g)(Xs) −
N1
X
k=1
Fk (ΓA g )qek (Xs )
2 1/2
+ sup
g∈G
E sup
0≤s≤T
N1
X
k=1
Fk(ΓAg)qek(Xs) −
N
X
k=1
eak(g)qek(Xs)
≤ sup
g∈G
∥ΓA(g) −
N1
X
k=1
ΓA (g )(ck )qek ∥1,2
S2 + sup
g∈G
E sup
0≤s≤T
N1
X
k=1
Fk(Γg)qek(Xs) −
N1
X
k=1
eak(g)qek(Xs)
≤ε1 + N1ε2.
Set ε2 = ε1/(2N1), ε1 = ε
2 , or ε2 = O ε2d2+1(log ε−2)− d2
α d− d2
2
1 , we then have
sup
g∈G
E sup
0≤s≤T
ΓAg(Xs) −
N1
X
k=1
eak(g)qek(Xs) ≤ ε.
Consequently, the network size is estimated to be,
L2 = O (N δ + 1
2 (N δ)2) log(N δ) + (2(N δ)2 + N δ) log ε−(2d2+1) + N δ log(re) , p2 = O(ε−(4d1−2)Nδ
2 ),
K2 = O (N δ + 1
2 (N δ)2) log(N δ) + (2(N δ)2 + N δ) log ε−2(d2+1) + N δ log(re) ,
κ2 = O(ε−Nδ(2d2+1)), R2 = 1.
By Lemma 4.3, and equation 6.15,
N δ ≤ C(log ε−4
2)
d1
α ε−2d1
2d
d1 2
1.
Substitute back to ε, we have N δ = O(ε−4d1d2−2d1)). It follows that N2 = O(ε−(4d2−2)ε−4d1d2−2d1 ).
Lemma 6.3. Let Qre = [−re, re]Nδ , g = g1, . . . , gNδ
T ∈ Qre and βg = sup
g∈Qre
|h(g)|. Assume
function h : Qre → R, with N δ as an integer and some constant re, and h satisfies the following assumption,
|h(g) − h(ge)| ≤ L(|g − ge|2 + |g − ge|)1/2, g, ge ∈ Qre, (6.19)
where L is a constant. For ε2 > 0, there exist N2, {gk}N2
k=1 ⊂ Qre, and a network F2 =
FNN(N δ, 1, L2, p2, K2, κ2, R2), where
L2 = O (N δ + 1
2 (N δ)2) log(N δ) + (2(N δ)2 + N δ) log ε−1
2 + N δ log(re) , p2 = O(1),
28

K2 = O (N δ + 1
2 (N δ)2) log(N δ) + (2(N δ)2 + N δ) log ε−1
2 + N δ log(re) ,
κ2 = O(ε−Nδ
2 ), R = 1,
such that
sup
g∈Qre
h(g) −
N2
X
k=1
h(gk)qek ≤ ε2,
where N2 = N Nδ , with N = O(
√
N δε−2
2 ).
Proof of Lemma. Let us partition Qre into N Nδ subcubes for some N to be specified later, and N δ
follows the Theorem 6.2. Let {gk}NNδ
k=1 be a uniform grid on Qre so that each gk ∈ −re, −re + 2re
N − 1 , ..., re
Nδ
for each k. Define
ψ(a) =

 
 
1, |a| < 1,
0, |a| > 2,
2 − |a|, 1 ≤ |a| ≤ 2,
(6.20)
with a ∈ R, and
φgk (x) =
Nδ
Y
j=1
ψ 3(N − 1)
2
re (xj − gk,j) . (6.21)
In this definition, we have supp (φgk ) = x : ∥x − gk∥∞ ≤ 4re
3(N − 1) ⊂ x : ∥x − gk∥∞ ≤ 2re
(N − 1) and
mkax φgk = 1,
NNδ
X
k=1
φgk = 1.
We construct a piecewise constant approximation to h as
 ̄h(x) =
NNδ
X
k=1
h(gk)φgk (x).
It follows that,
|h(g) −  ̄h(g)| =
NNδ
X
k=1
φgk (x)(h(g) − h(gk))
29

≤
NNδ
X
k=1
φgk (x)|h(g) − h(gk)|
=
X
k:∥gk−x∥∞≤ 2re
(N −1)
φgk (x)|(h(x) − h(gk))|
≤ max
k:∥gk−x∥∞≤ 2re
(N −1)
|(h(x) − h(gk))|

 
X
k:∥gk−x∥∞≤ 2re
(N −1)
φgk (x)

 
≤ max
k:∥gk−x∥∞≤ 2re
(N −1)
|(h(x) − h(gk))|
≤LΓA


2
√
Nδ
re
N −1
!2
+2
√
Nδ
re
N −1
!


1 2
< ε2
2 , (6.22)
where the last line follows from the Assumption 6.19. Setting N = CL2
ΓA ε−2
2 (N δ) 1
2 re, where C is a constant. Now we adopt neural network with structure qek ∈ F2 to be specified later to approximate φgk such that ∥φgk − qek∥L∞(Qre) ≤ N δδe, with δe to be specified later. We hence have,
NNδ
X
k=1
h(gk)qek −  ̄h
L∞ (Qre)
≤
NNδ
X
k=1
|h(gk)|∥qek − φgk ∥L∞(Qre)
≤N δN Nδ βgδe. (6.23)
Now set δe = C ε2
N δN Nδ βg
, where C is a constant. Consequently the network has an architecture,
F2 = FNN(N δ, 1, L2, p2, K2, κ2, R2), where
L2 = O (N δ + 1
2 (N δ)2) log(N δ) + (2(N δ)2 + N δ) log ε−1
2 + N δ log(re) , p2 = O(1),
K2 = O (N δ + 1
2 (N δ)2) log(N δ) + (2(N δ)2 + N δ) log ε−1
2 + N δ log(re) ,
κ2 = O(ε−Nδ
2 ), R2 = 1,
here the hidden constant depends on LΓA and βg.
7 Algorithm
A unifying view to solve a basket of American options has been studied in [3] by using one unified Snell envelope. In this section, we use the proposed deep neural operator to solve this basket
30

of American options problem. In particular, we are able to provide the exercise boundary for new strike prices within the range of our training sets. The precise training process and model specification is presented below. In the following numerical example, we train a deep operator neural network to obtain the pricing operator of Bermudan put option. Then we plot the exercise boundaries for various terminal payoff functions in Figure 1. The ground-truth training data are produced by a fully impl-
icit finite-difference discretization of the Black–Scholes American pricing PDE in log-price variables on a uniform grid, closely following standard references on PDE methods for options [43]. Under the risk–neutral measure, the price of an American option with strike K, volatility σ > 0, and risk–free rate r > 0 satisfies the Black–Scholes PDE with free boundary as in (6.4) with terminal condition u(T, x) = gk(x) = max(K − x, 0). The space–time grid is given by xj = xmin + j∆x for j = 0, . . . , -
Nx − 1 and tn = n∆t for n = 0, . . . , Nt, with ∆x = (xmax − xmin)/(Nx − 1), ∆t = T /Nt. In our numerical example, we set the risk-free interest rate r = 0.1, the volatility σ = 0.2, the time to maturity T = 1, Nt = 50 and Nx = 300. The price interval is chosen wide enough to contain the early-exercise region for all strikes in the training range: with Kmin = 90 and Kmax = 120, we take xmin = Kmin/2 = 45 and xmax = 1.5Kmax = 180.
We first perform a log transformation such that let y = ln x and define v(y, t) := u(x, t) = u(ey, t). Then
ux = 1
x vy, uxx = 1
x2 (vyy − vy) ,
and (6.4) becomes the constant–coefficient convection–diffusion equation
∂tv + 1
2 σ2vyy + μ vy − rv = 0, μ := r − 1
2 σ2. (7.1)
Denote vn
j ≈ v(yj, tn). Use centered differences in space at time level n:
vy(yj, tn) ≈ vn
j+1 − vn
j−1
2∆y , vyy(yj, tn) ≈ vn
j+1 − 2vn
j + vn
j−1
∆y2 .
The finite difference algorithm runs backward in time from tNt = T to t0 = 0, the fully implicit step
vn
j − vn+1
j
∆t + 1
2σ2 vn
j+1 − 2vn
j + vn
j−1
∆x2 + μ vn
j+1 − vn
j−1
2∆x − rvn
j = 0. (7.2)
After rearranging into matrix form, and enforcing the free boundary condition, (v)n are obtained from (v)n+1. Our approach uses operator learning for Bermudan-style put options. From sampled spacetime values of option prices, we train a neural operator that, given a payoff function, reconstructs the full price surface and thereby recovers the optimal exercise (stopping) boundary.
31

Let Γ denote the pricing operator that maps a payoff gk to its price surface uk. On a grid {xj }Nx
j=1 × {tn}Nt
n=1,
uk(xj, tn) = Γgk(xj, tn).
The neural operator Γθ with parameters θ is trained to approximate the pricing operator by minimizing the empirical mean-squared error
L(θ) = 1
K Nt Nx
K
X
k=1
Nx
X
j=1
Nt
X
n=1
Γθgk(xj, tn) − uk(xj, tn) 2. (7.3)
This optimization ensures that the operator network learns an accurate mapping from input payoff functions to their corresponding option price surfaces. Our algorithm is capable of computing the exercise boundary for any strike price between 90 and 120. We select six payoff functions with different strike prices and present their corresponding exercise boundaries in the Figure 1. Once trained, the learned operator Γθ can be utilized to recover the entire exercise boundary from the approximated sol-
ution surface.
32

Figure 1: Exercise boundaries for American put options.
References
[1] Guillermo Alvarez, Ibrahim Ekren, Anastasis Kratsios, and Xuwei Yang. Neural operators can play dynamic stackelberg games. arXiv preprint arXiv:2411.09644, 2024.
[2] Robert Azencott. Formule de taylor stochastique et de ́veloppement asymptotique d’inte ́grales de feynmann. In S ́eminaire de Probabilit ́es XVI, 1980/81 Suppl ́ement: G ́eom ́etrie Diff ́erentielle Stochastique, pages 237–285. Springer, 2006.
[3] Peter Bank and Hans Fo ̈llmer. American options, multi–armed bandits, and optimal consumption plans: A unifying view. In Paris-Princeton Lectures on Mathematical Finance 2002, pages 1–42. Springer, 2003.
[4] Fabrice Baudoin, Eulalia Nualart, Cheng Ouyang, and Samy Tindel. On probability laws of solutions to differential systems driven by a fractional brownian motion. Ann. Probab., 44(4):2554–2590, 2016.
[5] Christian Bayer, Paul P Hager, Sebastian Riedel, and John Schoenmakers. Optimal stopping with signatures. The Annals of Applied Probability, 33(1):238–273, 2023.
[6] Erhan Bayraktar, Qi Feng, and Zhaoyu Zhang. Deep signature algorithm for multidimensional path-dependent options. SIAM Journal on Financial Mathematics, 15(1):194–214, 2024.
[7] Sebastian Becker, Patrick Cheridito, and Arnulf Jentzen. Deep optimal stopping. Journal of Machine Learning Research, 20(74):1–25, 2019.
[8] Sebastian Becker, Patrick Cheridito, Arnulf Jentzen, and Timo Welti. Solving highdimensional optimal stopping problems using deep learning. European Journal of Applied Mathematics, 32(3):470–514, 2021.
33

[9] Kaushik Bhattacharya, Bamdad Hosseini, Nikola B Kovachki, and Andrew M Stuart. Model reduction and neural networks for parametric pdes. The SMAI journal of computational mathematics, 7:121–157, 2021.
[10] Cristian Bodnar, Wessel P Bruinsma, Ana Lucic, Megan Stanley, Anna Allen, Johannes Brandstetter, Patrick Garvan, Maik Riechert, Jonathan A Weyn, Haiyu Dong, et al. A foundation model for the earth system. Nature, pages 1–8, 2025.
[11] Fabienne Castell. Asymptotic expansion of stochastic flows. Probability theory and related fields, 96(2):225–239, 1993.
[12] Tianping Chen and Hong Chen. Approximations of continuous functionals by neural networks with application to dynamic systems. IEEE Transactions on Neural networks, 4(6):910–918, 1993.
[13] Tianping Chen and Hong Chen. Universal approximation to nonlinear operators by neural networks with arbitrary activation functions and its application to dynamical systems. IEEE Transactions on Neural Networks, 6(4):911–917, 1995.
[14] John Horton Conway and Neil James Alexander Sloane. Sphere packings, lattices and groups, volume 290. Springer Science & Business Media, 2013.
[15] Nicole El Karoui, Christophe Kapoudjian, Etienne Pardoux, Shige Peng, and Marie-Claire Quenez. Reflected solutions of backward sde’s, and related obstacle problems for pde’s. the Annals of Probability, 25(2):702–737, 1997.
[16] Qi Feng and Xuejing Zhang. Taylor expansions and castell estimates for solutions of stochastic differential equations driven by rough paths. Journal of Stochastic Analysis, 1(2):4, 2020.
[17] Takashi Furuya and Anastasis Kratsios. Simultaneously solving fbsdes with neural operators of logarithmic depth, constant width, and sub-linear rank. arXiv preprint arXiv:2410.14788, 2024.
[18] Chengfan Gao, Siping Gao, Ruimeng Hu, and Zimu Zhu. Convergence of the backward deep bsde method with applications to optimal stopping problems. SIAM Journal on Financial Mathematics, 14(4):1290–1303, 2023.
[19] Lukas Gonon. Deep neural network expressivity for optimal stopping problems. Finance and Stochastics, 28(3):865–910, 2024.
[20] Calypso Herrera, Florian Krach, Pierre Ruyssen, and Josef Teichmann. Optimal stopping via randomized neural networks. Frontiers of Mathematical Finance, 3(1):31–77, 2024.
[21] Amanda A Howard, Mauro Perego, George E Karniadakis, and Panos Stinis. Multifidelity deep operator networks. arXiv preprint arXiv:2204.09157, 2022.
34

[22] Coˆme Hur ́e, Huyeˆn Pham, and Xavier Warin. Deep backward schemes for high-dimensional nonlinear pdes. Mathematics of Computation, 89(324):1547–1579, 2020.
[23] Nikola Kovachki, Samuel Lanthaler, and Siddhartha Mishra. On universal approximation and error bounds for fourier neural operators. Journal of Machine Learning Research, 22(290):176, 2021.
[24] Nikola Kovachki, Zongyi Li, Burigede Liu, Kamyar Azizzadenesheli, Kaushik Bhattacharya, Andrew Stuart, and Anima Anandkumar. Neural operator: Learning maps between function spaces with applications to pdes. Journal of Machine Learning Research, 24(89):1–97, 2023.
[25] Samuel Lanthaler. Operator learning with pca-net: upper and lower complexity bounds. Journal of Machine Learning Research, 24(318):1–67, 2023.
[26] Samuel Lanthaler, Siddhartha Mishra, and George E Karniadakis. Error estimates for deeponets: A deep learning framework in infinite dimensions. Transactions of Mathematics and Its Applications, 6(1):tnac001, 2022.
[27] Samuel Lanthaler and Andrew M Stuart. The parametric complexity of operator learning. IMA Journal of Numerical Analysis, page draf028, 2025.
[28] Bernard Lapeyre and J ́eroˆme Lelong. Neural network regression for bermudan option pricing. Monte Carlo Methods and Applications, 27(3):227–247, 2021.
[29] Wing Tat Leung, Guang Lin, and Zecheng Zhang. Nh-pinn: Neural homogenization-based physics-informed neural network for multiscale problems. Journal of Computational Physics, 470:111539, 2022.
[30] Zongyi Li, Daniel Zhengyu Huang, Burigede Liu, and Anima Anandkumar. Fourier neural operator with learned deformations for pdes on general geometries. Journal of Machine Learning Research, 24(388):1–26, 2023.
[31] Zongyi Li, Nikola Kovachki, Kamyar Azizzadenesheli, Burigede Liu, Kaushik Bhattacharya, Andrew Stuart, and Anima Anandkumar. Fourier neural operator for parametric partial differential equations. arXiv preprint arXiv:2010.08895, 2020.
[32] Guang Lin, Christian Moya, and Zecheng Zhang. B-deeponet: An enhanced bayesian deeponet for solving noisy parametric pdes using accelerated replica exchange sgld. Journal of Computational Physics, 473:111713, 2023.
[33] Hao Liu, Haizhao Yang, Minshuo Chen, Tuo Zhao, and Wenjing Liao. Deep nonparametric estimation of operators between infinite dimensional spaces. Journal of Machine Learning Research, 25(24):1–67, 2024.
[34] Hao Liu, Zecheng Zhang, Wenjing Liao, and Hayden Schaeffer. Neural scaling laws of deep relu and deep operator network: A theoretical study. arXiv preprint arXiv:2410.00357, 2024.
35

[35] Lu Lu, Pengzhan Jin, Guofei Pang, Zhongqiang Zhang, and George Em Karniadakis. Learning nonlinear operators via deeponet based on the universal approximation theorem of operators. Nature Machine Intelligence, 3(3):218–229, 2021.
[36] Jaideep Pathak, Shashank Subramanian, Peter Harrington, Sanjeev Raja, Ashesh Chattopadhyay, Morteza Mardani, Thorsten Kurth, David Hall, Zongyi Li, Kamyar Azizzadenesheli, et al. Fourcastnet: A global data-driven high-resolution weather model using adaptive fourier neural operators. arXiv preprint arXiv:2202.11214, 2022.
[37] A Max Reppen, H Mete Soner, and Valentin Tissot-Daguette. Neural optimal stopping boundary. arXiv preprint arXiv:2205.04595, 2022.
[38] Mykhaylo Shkolnikov, H Mete Soner, and Valentin Tissot-Daguette. Deep level-set method for stefan problems. Journal of Computational Physics, 503:112828, 2024.
[39] Justin Sirignano and Konstantinos Spiliopoulos. Dgm: A deep learning algorithm for solving partial differential equations. Journal of computational physics, 375:1339–1364, 2018.
[40] H Mete Soner and Valentin Tissot-Daguette. Stopping times of boundaries: Relaxation and continuity. SIAM Journal on Control and Optimization, 63(4):2835–2855, 2025.
[41] Loring W Tu. Manifolds. In An Introduction to Manifolds, pages 47–83. Springer, 2011.
[42] Jindong Wang and Wenrui Hao. Laplacian eigenfunction-based neural operator for learning nonlinear reaction–diffusion dynamics. Journal of Computational Physics, page 114400, 2025.
[43] Paul Wilmott, Sam Howison, and Jeff Dewynne. The Mathematics of Financial Derivatives: A Student Introduction. Cambridge University Press, 1995.
[44] Dmitry Yarotsky. Error bounds for approximations with deep relu networks. Neural networks, 94:103–114, 2017.
[45] Jianfeng Zhang and Jianfeng Zhang. Backward stochastic differential equations. Springer, 2017.
36

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:08.042Z
- **Text Length:** 58796 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 36 of 36
