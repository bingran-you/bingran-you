# PDF Document: Moda et al. - 2025 - Numerical valuation of European options under two-asset infinite-activity exponential Lévy models.pdf

**File Path:** Moda et al. - 2025 - Numerical valuation of European options under two-asset infinite-activity exponential Lévy models.pdf

**Processed Date:** 2026-02-10T18:17:30.466Z

**File Size:** 4530.23 KB

**Total Pages:** 22

**Extracted Pages:** 22

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3519

**Title:** Numerical valuation of European options under two-asset infinite-activity exponential Lévy models

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Numerical valuation of European options under two-asset
infinite-activity exponential Lévy models
Massimiliano Moda,∗ Karel J. in ’t Hout,† Michèle Vanmaele,‡ Fred Espen Benth§
November 5, 2025
Abstract
We propose a numerical method for the valuation of European-style options under two-asset
infinite-activity exponential Lévy models. Our method extends the effective approach developed
by Wang et al. (2007) for the 1-dimensional case to the 2-dimensional setting and is applicable for
general Lévy measures under mild assumptions. A tailored discretization of the non-local integral
term is developed, which can be efficiently evaluated by means of the fast Fourier transform. For
the temporal discretization, the semi-Lagrangian θ-method is employed in a convenient splitting
fashion, where the diffusion term is treated implicitly and the integral term is handled explicitly by a
fixed-point iteration. Numerical experiments for put-on-the-average options under Normal Tempered
Stable dynamics reveal favourable second-order convergence of our method whenever the exponential
Lévy process has finite-variation.
1 Introduction
The accurate valuation of derivative securities in modern financial markets requires modeling techniques
capable of capturing empirical irregularities in asset price dynamics. Classical models based on Brownian
motion, such as the Black–Scholes model, rely on continuous-path diffusion and fail to reflect important
stylized facts, such as heavy tails and skewness in log-returns. This has motivated the use of Lévy
processes in the last decades, which naturally offers a richer class of models for asset dynamics. Among
various Lévy models, the Normal Inverse Gaussian (NIG) process has emerged as a parsimonious and
effective choice to capture such characteristics. Among others, Rydberg (1997) shows how the NIG model
provides a significantly better statistical fit to equity return data compared to classical Gaussian-based
models. Lévy models allow for a more realistic representation of market risk and are therefore natural
candidates for use in option pricing models.
In this paper, we propose a numerical method for pricing European-style financial derivatives writ
ten on two underlying assets, whose dynamics are driven by a 2-dimensional Lévy process, with par
ticular focus on infinite activity processes. Financial pricing under jump-diffusion models can be ap
proached through various methodologies, such as Monte Carlo simulation, Fourier-based methods, and
∗Department of Mathematics, University of Antwerp, Middelheimlaan 1, 2020 Antwerp, Belgium. Email: massimiliano.moda@uantwerpen.be †Department of Mathematics, University of Antwerp, Middelheimlaan 1, 2020 Antwerp, Belgium. Email: karel.inthout@uantwerpen.be ‡Department of Mathematics, Computer Science and Statistics, Ghent University, 9000 Ghent, Belgium. Email: michele.vanmaele@ugent.be §Department of Data Science and Analytics, BI Norwegian Business School, N-0484 Oslo, Norway. Email: fred.e.ben-
th@bi.no
1
arXiv:2511.02700v1 [math.NA] 4 Nov 2025

partial integro-differential equations (PIDEs). Monte Carlo methods are flexible and easy to implement,
but they suffer from slow convergence. Fourier-based methods, such as in Jackson et al. (2008) and
Ruijter & Oosterlee (2012), can be applied when the characteristic exponent of the process is known, and
they can achieve exponential convergence. Numerical methods for PIDEs, such as in Cont & Voltchkova
(2005), d’Halluin et al. (2005), Wang et al. (2007), Clift & Forsyth (2008), Salmi et al. (2014), Kaushansky et al.
(2018), Boen & in ’t Hout (2021) and in ’t Hout & Lamotte (2023), can instead be applied when the Lévy
measure is known, and do not require knowledge of the characteristic exponent. They are applicable to
a wide variety of financial derivatives.
The numerical method derived in this paper focuses on the case where the underlying 2-dimensional
Lévy process exhibits infinite-activity, meaning that an infinite number of jumps occur over any finite time
horizon. In this setting, particular care must be taken in the discretization of the non-local 2-dimensional
integral term in the PIDE near the origin, where the Lévy measure becomes singular. Indeed, classical
quadrature formulae fail to yield the desired second-order convergence.
The main contribution of this paper is an extension of the effective numerical solution approach of
Wang et al. (2007) from the 1-dimensional to the 2-dimensional setting. Here a key idea, originally
introduced in Asmussen & Rosiński (2001) and Cont & Voltchkova (2005), is to replace the small jumps
with an artificial diffusion term. This substitution enables the development of a tailored quadrature
scheme, which restores the desired order of convergence of the entire numerical scheme. For the efficient
evaluation of the discretized integral operator, a fast Fourier transform (FFT) algorithm is constructed.
For the temporal discretization, the semi-Lagrangian θ-method is considered. Here operator splitting is
applied, where the diffusion term is treated implicitly and the integral term is handled explicitly by a
fixed-point iteration. For the large linear system in each time step, the BiCGSTAB iterative solver is
used.
An outline of this paper is as follows. In Section 2, we introduce the market model and the PIDE for
the derivative pricing. In Section 3 the proposed numerical scheme is derived. Numerical experiments
are discussed in Section 4. The final Section 5 contains our conclusions.
2 Model framework
2.1 Market model
Let
(
Ω, F , (Ft)t∈[0,T ] , P
)
be a filtered probability space, for some given T > 0. We consider an arbi
trage free market characterized by a constant (instantaneous) risk-free interest rate r and an equivalent
martingale measure Q ∼ P. We assume that there exist two risky assets, whose prices are modeled by
the 2-dimensional stochastic process X = (X(1), X(2)) that solves the following stochastic differential
equation
dX (t) = μ (X (t)) dt + Σ (X (t)) dW (t) +
∫
R2∗
γ (z, X (t−))  ̃Π (dt, dz) (t ∈ (0, T ]) (2.1)
for some non-negative initial value X (0). In (2.1), W denotes a standard 2-dimensional Wiener process
and  ̃Π is a compensated Poisson random measure with Lévy measure l over R2∗ = R2 \ {0}. Both are
directly defined under Q and are mutually independent.
The functions μ : R2≥0 → R2, Σ : R2≥0 → R2×2 and γ : R2 × R2≥0 → R2 are called drift, diffusion
and jump function (or term) respectively, where R2≥0 = {x ∈ R2 : x(i) ≥ 0 for i = 1, 2}. In this paper, we
consider the case of the well-known exponential Lévy process, i.e. where the coordinates of the coefficient
2

functions are defined as follows
μ(i) (x) = x(i)r (2.2)
(ΣΣ⊤)(i,j) (x) = x(i)x(j) (σσ⊤)(i,j) (2.3)
γ(i) (z, x) = x(i) (
ez(i) − 1
)
, (2.4)
where σσ⊤ is a constant positive definite symmetric 2 × 2 matrix and σ denotes the volatility matrix.
Here, ΣΣ⊤ (x) is a shorthand notation for the matrix product Σ (x) Σ⊤ (x).
Let ‖·‖ be any given norm on R2. In this paper we assume that l is absolutely continuous, has finite
variance, i.e. ∫
R
z2l (dz) < ∞
and there exist constants Al < 2, Bl > 2 such that for any given h > 0 there is Cl (h) > 0 such that



l (z) ≤ Cl (h) ‖z‖−Al−2 for any z such that ‖z‖ ∈ (0, h]
l (z) = O (e−Bl‖z‖) as ‖z‖ → ∞.
(2.5)
The number Al governs the activity and variation of the process: X is of finite-activity if Al < 0, since
∫
R2 l (dz) < ∞; it is of finite-variation if Al < 1, since ∫
‖z‖<ǫ ‖z‖ l (dz) < ∞ for any ǫ > 0. The number
Bl characterizes the exponential decay of l at infinity. Since the process X has finite moments of all
orders up to k ∈ N if and only if ∫
‖z‖>ǫ ek‖z‖l (dz) < ∞ for any ǫ > 0, then k < Bl provides a necessary
condition of it. Following Applebaum (2004, Chapter 6), the stronger condition Bl ≥ 2 is necessary to
guarantee the existence of a unique solution with finite variance to the stochastic differential equation
(2.1). Most of the common Lévy processes in finance satisfy the conditions (2.5), such as the Kou,
Carr-Geman-Madan-Yor (CGMY), Variance Gamma (VG) and Normal Inverse Gaussian (NIG) models.
In this work, we focus on the case of 2-dimensional Normal Tempered Stable (NTS) processes. These
are obtained by subordinating a 2-dimensional arithmetic Brownian motion with a Tempered Stable
subordinator. A detailed construction of the NTS process together with its main properties is provided
in Appendix A. The choice of this class of processes is motivated by two reasons. First, bivariate VG and
NIG processes arise as particular cases. Second, the associated Lévy measure satisfies the conditions (2.5)
with constant Al = 2α, where α is the key model parameter. The NTS framework provides a convenient
and flexible setting for the purposes of this paper.
2.2 Initial boundary value problem for derivatives pricing
By the fundamental theorem of asset-pricing, the value at time t ∈ [0, T ] of an European-style1 financial
derivative of X with maturity T is represented by the stochastic process P such that
P (t) = EQ [
φ (X (T )) e−r(T −t) | Ft
]
where φ : R2 → R denotes the pay-off function and EQ [· | Ft] is the Ft-conditional expected value (i.e.
knowing the history of the asset prices up to t) under Q.
Let A be the infinitesimal generator of X (see Applebaum (2004), Garroni & Menaldi (1992) and
1Means a financial derivative with no intermediate cash flows.
3

Øksendal & Sulem (2019)), defined in matrix notation as2
Au (x, t) = μ (x)⊤ ux (x, t) + 1
2 1⊤ (uxx (x, t) ◦ ΣΣ⊤ (x)) 1 +
∫
R2∗
f (z, x, t) l (dz) (2.6)
where 1 = [1, 1]⊤, the symbol ◦ denotes the Hadamard (element-wise) product3 and
f (z, x, t) = u (x + γ (z, x) , t) − u (x, t) − γ (z, x)⊤ ux (x, t) . (2.7)
If there exists a function u : R2≥0 × [0, T ] → R that solves the following initial value problem for a partial
integro-differential equation (PIDE)



ut (x, t) = Au (x, t) − ru (x, t) for any (x, t) ∈ R2≥0 × (0, T ]
u (x, 0) = φ (x)
(2.8)
then the value of the financial derivative is given by
P (t) = u (X (t) , T − t) .
Note that u also satisfies the PIDE at the boundary of the x-domain, as in the case of option pricing
with the Black–Scholes model.
3 Numerical scheme
In this section, we derive the numerical scheme proposed for problem (2.8).
The method consists of three main steps: integral discretization, spatial discretization, and temporal
discretization. By discretization, we mean that the pertinent integro/differential operators are approxi
mated on a given finite set of grid points. The adjectives indicate the variable being discretized: integral
for z, spatial for x, and temporal for t.
The integral discretization yields an approximation to the integral term in (2.8) for any given pair
(x, t) ∈ R2≥0 × [0, T ]. The quadrature formula that we derive is inspired by the ideas in Wang et al.
(2007) and Cont & Voltchkova (2005), where the singular part of the integral near the origin z = 0 is
approximated by a diffusion (second-order spatial derivative). The integral discretization leads to the
approximate problem (3.8) where the integral in (2.8) has been replaced by a summation term.
The spatial discretization concerns the diffusion and summation terms in (3.8). For the diffusion term,
a standard second-order central finite difference scheme is applied on a suitable nonuniform spatial grid.
For the summation term, a direct valuation on the spatial grid is computationally too expensive. For the
efficient treatment of this term, we shall extend the FFT-based approach by Wang et al. (2007).
The temporal discretization is done by the semi-Lagrangian θ-method. The semi-Lagrangian approach
is chosen to take into account that problem (3.8) can be convection-dominated. In each time step of the
semi-Lagrangian θ-method, the summation term appears in an implicit manner. To effectively handle
this term, a fixed-point iteration is employed.
2By expanding the term, we obtain the common notation used for A, which is
Au (x, t) =
2
∑
i=1
μ(i) (x) ∂u
∂x(i) (x, t) + 1
2
2
∑
i,j=1
(
ΣΣ⊤)(i,j) (x) ∂2u
∂x(i)∂x(j) (x, t)
+
∫
R2∗
(
u (x + γ (z, x) , t) − u (x, t) −
2
∑
i=1
γ(i) (z, x) ∂u
∂x(i) (x, t)
)
l (dz) .
3In this paper, we use the convention AB ◦ CD = (AB) ◦ (CD), for any suitable matrices A, B, C, D.
4

Figure 1: Partition of the integration domain Rz
3.1 Integral discretization
When the Lévy measure is singular, it is not possible to apply classical quadrature formulae, such as the
midpoint or the trapezoidal rule. In fact, in this case the error will blow up as the number of quadrature
points increases. To address this problem, we develop in this subsection a different quadrature formula.
First, it is useful to investigate the behaviour of f , defined in (2.7), around the origin with respect to
z. For any given point (x, t) ∈ R2≥0 × [0, T ], the Taylor approximation of the function z 7→ f (z, x, t) at
z = 0 is given by
f (z, x, t) = f (0, x, t) + z⊤fz (0, x, t) + 1
2 z⊤fzz (0, x, t) z + ε (z, x, t) as ‖z‖ → 0+,
where fz and fzz are the gradient and the Hessian of f with respect to z. Here, ε denotes the remainder
and is such that ε (z, x, t) = O
(
‖z‖3)
. Invoking (2.7) and noting that f (0, x, t) = 0 and fz (0, x, t) = 0,
we can rewrite the previous equation, after some straightforward computations, as
f (z, x, t) = 1
2 1⊤ (uxx (x, t) ◦ Ixzz⊤Ix
) 1 + ε (z, x, t) as ‖z‖ → 0+, (3.1)
where uxx is the Hessian of u with respect to x and Ix = diag (x(1), x(2)).
Next, let RIz, RIzI and RIzII be three sets defined by
RIz = {z ∈ R2 : ‖z‖∞ ≤ zImax
},
RIzI = {z ∈ R2 : zImax < ‖z‖∞ ≤ zImIax
},
RIzII = {z ∈ R2 : zImIax < ‖z‖∞ ≤ zImIaIx
},
where ‖z‖∞ = maxj=1,2
∣
∣z (j ) ∣
∣ and 0 < zImax < zImIax < zImIaIx are given numbers, which will be specified
in Section 4. The above three sets represent a partition of Rz = {z ∈ R2 : ‖z‖∞ ≤ zImIaIx
}, which is a
square centered at the origin, as shown in Figure 1. For any given Nz ∈ N, define a set of points z whose
elements are
zl1l2 =
((
l1 + 1
2
)
hz ,
(
l2 + 1
2
)
hz
)
(l1, l2 = −Nz, −Nz + 1, . . . , Nz − 2, Nz − 1) ,
5

where hz = zImIaIx/Nz denotes the mesh-width. Note that the point zl1l2 is the center of the cell
Rl1l2 = [l1hz, (l1 + 1) hz] × [l2hz, (l2 + 1) hz] .
We then consider the approximation
∫
R2∗
f (z, x, t) l (dz) ≃
∫
RIz
f (z, x, t) l (dz) +
∫
RIzI
f (z, x, t) l (dz) +
∫
RIzII
f (z, x, t) l (dz) , (3.2)
where the individual terms on the right-hand side will be approximated in different ways: the first one
will be transformed into a diffusion term by replacing the integrand function with its Taylor expansion;
for the second one, a particular quadrature formula is used that takes into account the limiting singular
behaviour of the Lévy measure as ‖z‖ → 0+; for the third one, a generic method is used.
By substituting (3.1) in the first integral in (3.2), it follows that
∫
RIz
f (z, x, t) l (dz) ≃ 1
2 1⊤
(
uxx (x, t) ◦ Ix
( ∫
RIz
zz⊤l (dz)
)
Ix
)
1. (3.3)
Here, the entries of the matrix ∫
RIz zz⊤l (dz) can be accurately approximated using a common numerical
integrator.
Moving on to the second and third terms in (3.2), we consider a quadrature formula of the form
∫
RIzI∪RIzII
f (z, x, t) l (dz) ≃
Nz −1
∑
l1 ,l2 =−Nz
ωl1l2 f (zl1l2 , x, t) . (3.4)
Defining the coefficients
ωl1l2 =

   
  
0 if l1, l2 : zl1l2 ∈ RIz,
‖zl1l2 ‖−2 ∫
Rl1l2 ‖z‖2 l (dz) if l1, l2 : zl1l2 ∈ RIzI,
l (zl1l2 ) hz2 if l1, l2 : zl1l2 ∈ RIzII,
(3.5)
a high level of accuracy is achieved, despite the integrand being singular at the origin. Clearly, the
quadrature weights used in RIzI are constructed as integrals of the Lévy measure, which turns out to
be beneficial for the convergence behaviour (as Nz → ∞). Analogously to the entries of the matrix
∫
RIz zz⊤l (dz) in (3.3), the integrals ∫
Rl1l2 ‖z‖2 l (dz) can be precomputed using a common numerical
integrator. Regarding RIzII, the coefficients are obtained by applying the classical midpoint rule, see for
example Quarteroni et al. (2007). Finally, note that the weights ωl1l2 are null over RIz, as the first integral
in (3.2) has already been approximated through (3.3).
Using (3.3) and substituting (2.7) into (3.4), we can define an approximating operator Aω and a
number rω such that
Au (x, t) − ru (x, t) ≃ Aωu (x, t) − rωu (x, t) for any (x, t) ∈ R2≥0 × (0, T ] ,
with
Aωu (x, t) = μω (x)⊤ ux (x, t) + 1
2 1⊤ (uxx (x, t) ◦ ΣωΣω⊤ (x)) 1 + (Bωu) (x, t) (3.6)
rω = r +
Nz −1
∑
l1 ,l2 =−Nz
ωl1l2
6

where, for i, j = 1, 2,
μ(ωi) (x) = x(i)κ(ωi)
κ(ωi) = r −
Nz −1
∑
l1 ,l2 =−Nz
ωl1 l2
(
ez(i)
l1l2 − 1
)
(Σω Σω⊤
)(i,j) (x) = x(i)x(j) (σω σω⊤
)(i,j)
σωσω⊤ = σσ⊤ +
∫
RIz
zz⊤l (dz)
(Bωu) (x, t) =
Nz −1
∑
l1 ,l2 =−Nz
ωl1l2 u (x + γ (zl1l2 , x) , t) . (3.7)
Then, we approximate the solution u of (2.8) by the function v : R2≥0 × [0, T ] → R which solves the
following problem



vt (x, t) = Aωv (x, t) − rωv (x, t) for any (x, t) ∈ R2≥0 × (0, T ]
v (x, 0) = φ (x) .
(3.8)
3.2 Spatial discretization
In this section, we successively consider the spatial discretization of the diffusion and summation terms
in the operator Aω. The convection term will be discussed in Section 3.3.
Let Rx = [0, xmax] × [0, xmax] be the truncated x-domain over which the solution to (3.8) is approx
imated and Nx ∈ N be a given number of spatial grid points. Here, xmax is heuristically chosen in such
a way that the localization error is negligible. We construct a spatial grid x in Rx by applying, in each
dimension, a strictly increasing and smooth transformation φ to an artificial uniform grid. Let
xm = φ
(
φ−1 (0) + φ−1 (xmax) − φ−1 (0)
Nx
m
)
(m = 0, 1, . . . , Nx)
with hx,m = xm − xm−1. The elements of x are defined by
xm1m2 = (xm1 , xm2 ) (m1, m2 = 0, 1, . . . , Nx) .
The function φ will be chosen in such a way that relatively many points are placed in a region of financial
and numerical interest.
In what follows, we denote the values over x of any given function g : Rx × [0, T ] → R by the vector
g (x, t) = [g (x00, t) , g (x10, t) , . . . , g (xNx−1,Nx, t) , g (xNxNx , t)]⊤ . (3.9)
3.2.1 Diffusion term
In this subsection, we construct a semi-discrete diffusion matrix D such that
Dv (x, t) ≃
[1
2 1⊤ (vxx (xm1m2 , t) ◦ ΣωΣω⊤ (xm1m2 )) 1
]
m1,m2=0,1,...,Nx
, (3.10)
where the right-hand side is a vector, whose elements are ordered according to (3.9).
To this purpose, in each spatial dimension, we approximate the first- and second-order derivatives of
a given smooth function g : R → R by the following second-order central finite difference schemes
g′ (xm) ≃ α(−1)
m g (xm−1) + α(m0)g (xm) + α(m1)g (xm+1)
g′′ (xm) ≃ β(−1)
m g (xm−1) + β(m0)g (xm) + β(m1)g (xm+1)
7

with coefficients
α(−1)
m = −hx,m+1
hx,m (hx,m + hx,m+1) , α(m0) = hx,m+1 − hx,m
hx,mhx,m+1
, α(m1) = hx,m
hx,m+1 (hx,m + hx,m+1) ,
β(−1)
m= 2
hx,m (hx,m + hx,m+1) , β(m0) = −2
hx,mhx,m+1
, β(m1) = 2
hx,m+1 (hx,m + hx,m+1) .
Concerning the boundary of the truncated spatial domain, we modify the previous formulae in the
following way. At the lower boundary x0 = 0, the first- and second-order derivative terms in (3.8) vanish.
Hence, it is natural to choose α(j)
0 = 0 and β(j)
0 = 0 for any j = {−1, 0, 1}. At the upper boundary
xNx = xmax, we make the natural assumption that the solution v behaves linearly in x, thus we choose
β(j)
Nx = 0 for any j = {−1, 0, 1}, and we approximate the first-order derivative by the first-order backward
finite difference scheme.
Noting that x is the Cartesian product of two identical 1-dimensional grids, by employing the 1
directional finite difference formulae in both the spatial dimensions, it leads to the matrix D defined
by
D= 1
2
(σω σω⊤
)(1,1) I ⊗ I2
xD2 + (σωσω⊤
)(1,2) IxD1 ⊗ IxD1 + 1
2
(σω σω⊤
)(2,2) I 2
xD2 ⊗ I. (3.11)
Here, I ∈ R(Nx+1)×(Nx+1) is the identity matrix, Ix = diag
(
x(i)
0 , . . . , x(i)
Nx
)
and ⊗ denotes the Kronecker
product.4 The matrices D1, D2 ∈ R(Nx+1)×(Nx+1) are the matrices representing numerical differentiation
of first- and second-order by the relevant finite difference formulae above. The mixed derivative has been
approximated by applying the finite difference formula for the first-order derivative subsequently in the
two spatial dimensions.
3.2.2 Summation term
In this section, we derive an efficient method to approximate the summation term (Bωv) (x, t) given the
values of v (x, t). Unlike the differential component of Aω, we do not construct a matrix Bω such that
(Bωv) (x, t) ≃ Bωv (x, t), as this matrix would be large and dense.
Assuming that the values of v are known for all (x, t) ∈ Rx × [0, T ], using formula (3.7) to directly
evaluate (Bωv) (x, t) would require O (Nx2Nz2
) elementary operations, which is computationally too ex
pensive. For this reason, a particularly efficient method combining interpolation and FFT is considered,
which extends the approach by Wang et al. (2007).
Let Ny−, Ny+ ∈ N be any given natural numbers and let yout and yin be two grids of points defined by5
yout
m1m2 = (em1hz , em2hz ) (m1, m2 = −Ny−, −Ny− + 1, . . . , Ny+ − 1, Ny+
),
yin
m1m2 =
(
e(m1+ 1
2 )hz , e(m2+ 1
2 )hz
)
(m1, m2 = −Nz − Ny−, −Nz − Ny− + 1, . . . , Nz + Ny+ − 2, Nz + Ny+ − 1) ,
then it holds that
(Bωv) (yout
m1m2 , t) =
Nz −1
∑
l1 ,l2 =−Nz
ωl1l2 v (yin
l1+m1,l2+m2 , t) (m1, m2 = −Ny−, −Ny− + 1, . . . , Ny+ − 1, Ny+
).
(3.12)
Clearly, the summation term (3.12) can be viewed as a discrete 2-dimensional cross-correlation. It is well
known, see for instance Plonka et al. (2018, Chapter 3), that it can be written in the form
(Bωv) (yout, t) = I ̃Cv (yin, t) (3.13)
where:
4In this paper, we use the convention AB ⊗ CD = (AB) ⊗ (CD), for any suitable matrices A, B, C, D. 5The superscripts stand for “input” and “output”.
8

• C ∈ R(♯in)2×(♯in)2 is a circulant matrix whose first row is given by C1⊤,· with
C1,· = vec
([
Ω 0♯z×(♯in−♯z)
0(♯in−♯z)×♯z 0(♯in−♯z)×(♯in−♯z)
])
. (3.14)
Here, 0P ×Q denotes the null matrix of dimensions P × Q, vec (·) denotes the vectorization of a
matrix, ♯ indicates the number of points of a given grid in one direction and Ω ∈ R♯z×♯z is the
matrix whose entries are the coefficients ωl1l2 defined by (3.5). For an example of a matrix C, we
refer to Appendix B.
The matrix-vector multiplication Ca, for any given vector a ∈ R(♯in)2×1, can be obtained by two
(1-dimensional) FFTs and one (1-dimensional) inverse FFT, requiring just O
(
(♯in)2 · log ♯in
)
ele
mentary operations. The pertinent formula is
Ca = ifft
(
fft (C1,·)H ◦ fft (a)
)
, (3.15)
where H denotes the complex conjugate.
• I ̃ ∈ R(♯out)2×(♯in)2 is obtained from the identity matrix I ∈ R(♯in)2×(♯in)2 by removing the rows
corresponding to the zeros in the following vector
vec
([
1♯out×♯out 0♯out×(♯in−♯out)
0(♯in−♯out)×♯out 0(♯in−♯out)×(♯in−♯out)
])
.
Here, 1P ×P denotes a P × P matrix whose elements are all equal to 1. We note that the matrix
vector multiplication Cv (yin, t) in (3.13) returns a value also for grid points that can be discarded.
The purpose of I ̃ is precisely to extract only those entries that correspond to (Bωv) (yout, t).
In order to obtain an approximation to (Bωv) (x, t) using (3.13), we need to interpolate both the input
and the output value in (3.13) since yin and yout are generally different from x. Let T in ∈ R(♯in)2×(Nx+1)2
be a matrix representing an interpolation procedure from the x grid to the yin grid and let T out ∈
R(Nx+1)2×(♯in)2 be a matrix representing an interpolation procedure from the yout grid to the x grid.
Then
v
(yin, t) ≃ T inv (x, t) , (3.16)
(Bωv) (x, t) ≃ T out (Bωv) (yout, t) . (3.17)
Note that, by using Lagrange interpolation, the interpolation matrices are sparse and have at most P + 1
nonzero entries per row, where P is the polynomial degree. Let M be the number of rows, it follows that
the corresponding matrix–vector multiplications require a number of operations of order O (M P ), and
are therefore negligible compared with multiplication performed via FFT.
From (3.13), (3.16) and (3.17), we arrive at the approximation
(Bωv) (x, t) ≃ Bωv (x, t) , (3.18)
where Bω ∈ R(Nx+1)2×(Nx+1)2 is given by
Bω = T outI ̃CT in. (3.19)
We emphasize that Bω is only used for notational purposes and never explicitly computed. To compute
the right-hand side of (3.18), we always use
BωV = T outI ̃ifft
(
fft (C1,·)H ◦ fft (T inV )
)
, (3.20)
for any vector V ∈ R(Nx+1)2×1. Figure 2 provides a schematic illustration of how FFT and interpolation
are combined to evaluate (3.20).
9

Figure 2: Diagram of the scheme used to approximate (Bωv) (x, t)
v (x, t) (Bωv) (x, t)
interpolation
from x to yin ↓ ↑ interpolation
from yout to x
v
(yin, t) −−−−−−−−−−−−−−−→ (Bωv) (yout, t)
matrix-vector multiplication by FFT
3.2.3 Cell averaging
We conclude the spatial discretization with a technique for handling the non-smoothness of the initial
function φ of (2.8). As it turns out, pointwise valuation of φ over the spatial grid can lead to deteriorated
(spatial) convergence behaviour, which can be alleviated by applying cell averaging.
Let
xm+ 1
2 =1
2 (xm + xm+1) (m = 0, 1, . . . , Nx − 1)
hx,m+ 1
2 = xm+ 1
2 − xm− 1
2 (m = 0, 1, . . . , Nx)
with x− 1
2 = −x 1
2 and xNx+ 1
2 = 2xmax − xNx− 1
2 . Then, we use the approximation
v (xm1m2 , 0) ≃ 1
hx,m1+ 1
2 hx,m2+ 1
2
∫ xm1+ 12
xm1− 21
∫ xm2+ 21
xm2− 21
φ (x1, x2) dx2dx1, (3.21)
whenever the cell
[
xm1− 1
2 , xm1+ 1
2
)
×
[
xm2− 1
2 , xm2+ 1
2
)
has a nonempty intersection with the set of non
smoothness of φ.
3.3 Temporal discretization: the semi-Lagrangian θ-method
The problem (3.8) can be convection-dominated. To account for this, we shall consider temporal dis
cretization using the θ-method combined with the semi-Lagrangian approach, as described by Spiegelman & Katz
(2006). The semi-Lagrangian method follows, in each time step, the characteristics backwards in time to
determine the departure points of the spatial grid points.
Let x : [0, T ] → R2≥0 and v∗ : [0, T ] → R such that v∗ (t) = v (x (t) , t). The derivative of v∗ is given
by
vt∗ (t) = vt (x (t) , t) + xt (t)⊤ vx (x (t) , t) .
Assume x satisfies the following (linear) ODE:
xt (t) = −μω (x (t)) (0 < t ≤ T ) . (3.22)
Then
vt∗ (t) = (ASL
ω − rω
) v (x (t) , t) (0 < t ≤ T ) , (3.23)
where
ASL
ω v (x, t) = 1
2 1⊤ (vxx (x, t) ◦ ΣωΣω⊤ (x)) 1 + (Bωv) (x, t) .
Clearly, ASL
ω is obtained from Aω by omitting the convection term.
Let parameter θ ∈ [0, 1]. Let t = (tn)Nt
n=0 be any given uniform grid with step size ht = T
Nt . For any
given n = 1, 2, . . . , Nt, approximating (3.23) using the θ-method and substituting the definition of v∗, we
10

obtain
v (x (tn) , tn) − v (x (tn−1) , tn−1)
ht
≃ θ (ASL
ω − rω
) v (x (tn) , tn) + (1 − θ) (ASL
ω − rω
) v (x (tn−1) , tn−1) .
(3.24)
The approximation (3.24) holds along any trajectory satisfying (3.22). In each given time step from
tn−1 to tn, the semi-Lagrangian approach involves selecting the set of trajectories that intersect the
points (x, tn), ensuring that an approximation is defined on the fixed grid x. Let xSL denote the grid
corresponding to tn−1 along this set of trajectories. Its elements are given by xSL
m1m2 = (xSL
m1 , xSL
m2
) where
xSL
mi is obtained by (3.22) as
xSL
mi = xmi eκ(i)
ω ht (mi = 0, 1, . . . , Nx) .
Then (3.24) becomes
v (x, tn) − v (xSL, tn−1
)
ht
≃ θ (ASL
ω − rω
) v (x, tn) + (1 − θ) (ASL
ω − rω
) v (xSL, tn−1
).
Interpolation is employed to acquire approximations at the grid xSL. Let T SL ∈ R(Nx+1)2×(Nx+1)2 be
a matrix representing an interpolation procedure from the x grid to the xSL grid. Together with the
approximation of the diffusion and summation terms, discussed in Section 3.2, we obtain
v
(xSL, tn−1
) ≃ T SLv (x, tn−1) , (3.25)
(ASL
ω − rω
) v (x, tn) ≃ (D + Bω − rωI) v (x, tn) ,
(ASL
ω − rω
) v (xSL, tn−1
) ≃ T SL (D + Bω − rωI) v (x, tn−1) .
This leads to the following natural definition of the approximation V n to the exact solution vector
v (x, tn): (I − htθ (D + Bω − rωI)) V n = T SL (I + ht (1 − θ) (D + Bω − rωI)) V n−1 (3.26)
for n = 1, 2, . . . , Nt. The initial vector V 0 is defined by pointwise valuation on the spatial grid x of the
pay-off function φ, except near the set of non-smoothness, where cell averaging is employed (see Section
3.2.3). The time-stepping scheme (3.26) is called the semi-Lagrangian θ-method. We shall apply (3.26)
with θ = 1
2 , which is also called the semi-Lagrangian Crank–Nicolson method. Here, to account for the
non-smoothness of φ, a damping procedure is used where the first time step (i.e. n = 1) is replaced by
four time steps of size equal to 1
4 ht of (3.26) with θ = 1.
It remains to consider the treatment of the discretized integral term in (3.26), represented formally
by the matrix Bω. Recall from Section 3.2.2 that Bω is never actually computed. To effectively handle
this term, we shall employ fixed-point iteration:
(I − htθ (D − rωI)) Y n,k = htθBωY n,k−1 + T SL (I + ht (1 − θ) (D − rωI)) V n−1 + ht (1 − θ) T SLBωV n−1
(3.27)
for k = 1, 2, . . .. Here matrix-vector multiplications involving Bω are always computed by the efficient
FFT algorithm of Section 3.2.2. For a given tolerance tol > 0 sufficiently small, we use the following
stopping criterion
max
m1 ,m2
∣
∣Ymn,1km2 − Y n,k−1
m1 m2
∣ ∣
max
{
1,
∣
∣
∣Ymn,1km2
∣ ∣ ∣
} < tol (3.28)
and define V n = Y n,k.
The starting vector Y n,0 for the fixed-point iteration is commonly chosen in the literature as Y n,0 =
V n−1. Here, we shall consider a more accurate starting vector, defined by higher-order extrapolation
11

Algorithm 1 Outline of the algorithm precomputations:
• define the grids z, x, yin, yout, t and xSL • define the matrix D given by (3.11) and compute the ILU factorization of I − htθ (D − rωI) • define the vector C1,· given by (3.14) and compute fft (C1,·) • define the matrices T in, T out and T SL given by (3.16), (3.17) and (3.25) • choose θ = 1
2
time-stepping:
compute V 0 = φ (x) and apply cell averaging (3.21) for n = 1, 2, . . . , Nt
1. compute BωV n−1 using (3.20)
2. compute W n−1 = T SL (I + ht (1 − θ) (D − rωI)) V n−1 + ht (1 − θ) T SLBωV n−1 3. compute Y n,0 given by (3.29) 4. for k = 1, 2, . . .
i. compute BωY n,k−1 using (3.20) ii. solve (I − htθ (D − rωI)) Y n,k = htθBωY n,k−1 + W n−1 using BiCGSTAB
5. end for if Y n,k satisfies (3.28) 6. let V n = Y n,k
end for
from known approximations at previous temporal grid points:
Y n,0 =

     
     
V n−1 n = 1,
2V n−1 − V n−2 n = 2,
3V n−1 − 3V n−2 + V n−3 n = 3,
4V n−1 − 6V n−2 + 4V n−3 − V n−4 n ≥ 4.
(3.29)
This yields a significant reduction in the number of fixed-point iterations compared to the common choice.
Finally, for the linear system in (3.27) we apply the BiCGSTAB iterative solver using an ILU precon
ditioner.
Our complete algorithm for the numerical solution of problem (2.8) is outlined in Algorithm 1.
4 Numerical experiments
We consider an European put-on-the-average option, which has the pay-off function
φ (x) = max
(
K−1
2
(
x(1) + x(2))
,0
)
with fixed strike price K > 0. Clearly, φ is non-smooth over the set {x ∈ R2≥0 : x(1) + x(2) = 2K}. To
define the non-uniform grid x, we use the same transformation φ as in in ’t Hout & Lamotte (2023). Let
c, xint be two given positive numbers. We choose the function φ in Section 3.2 as
φ (ξ) =



cξ 0 ≤ ξ ≤ ξint,
xint + c sinh (ξ − ξint) ξint < ξ ≤ ξmax,
with
ξint = xint
c , ξmax = ξint + sinh−1
( xmax − xint
c
)
.
12

Table 1: Parameter sets
Parameters VG0 VG1 NIG0 NIG1
α 00 1
2
1 2
λ 1 6 20766.4 57.1108
δ 1 6 0.77576 4.26367
η(1) -0.1 -0.1 -37.688 -0.295846
η(2) -0.2 -0.2 -2.224 -0.292984
ρ(1,1) 0.09 0.01 3.984 0.037021
ρ(1,2) 0.06 0 3.160 0.026574
ρ(2,2) 0.16 0.0225 3.512 0.054613
r 0.05 0 0 0
T 11
2
1 2
1 2
K 100 100 100 100
In this way, the resulting spatial grid in each direction is uniform over [0, xint], whereas in [xint, xmax] the
distance between consecutive grid points gradually increases as one moves away from xint. The limit of
the fraction of spatial grid points within the interval [0, xint] as Nx → ∞, denoted by F , is given by
F = ξint
ξmax
=
(
1+ c
xint
sinh−1
( xmax − xint
c
))−1
.
Note that F → xint
xmax as c → ∞, which corresponds to the uniform case.
Moving on to the Lévy measure, we model the jump component in (2.1) by a pure-jump 2-dimensional
Normal Tempered Stable process. It is characterized by the parameters 0 ≤ α < 1, δ > 0, λ > 0, η ∈ R2×1
and a positive definite symmetric matrix ρ ∈ R2×2. The case where α = 0 is known as Variance Gamma,
while the case where α = 1
2 is known as Normal Inverse Gaussian. Both are commonly used to model
financial dynamics. The Lévy measure is given by
l (z) = δ
π
√ √ √ √
(
‖η‖2
ρ + 2λ
)1+α
det [ρ] K1+α
(√
‖η‖2
ρ + 2λ ‖z‖ρ
)
‖z‖−1−α
ρ e〈η,z〉ρ
where Kν (τ ) = 1
2
∫∞
0 yν−1e− 1
2 τ(y+y−1)dy, for τ > 0, denotes the modified Bessel function of the second kind,6 〈x, y〉ρ = x⊤ρ−1y and ‖x‖ρ =
√
〈x, x〉ρ is its induced norm. The constants Al, Bl and Cl in (2.5)
are defined, with respect to ‖·‖ρ, as
(Al, Bl, Cl (h)) =
(
2α,
√
‖η‖2
ρ + 2λ − ‖η‖ρ , 2αδΓ (1 + α)
π
√det [ρ] eh‖η‖ρ
)
.
The variance of the random variable L (t) = ∫ t
0
∫
R2∗ z  ̃Π (dt, dz), for t ∈ [0, T ], is given by
V [L (t)] = t · δ Γ (2 − α)
λ2−α
(ρλ1−α + ηη⊤) .
We refer to Appendix A for further details.
Table 1 lists four sets of representative parameter values where we always take the diffusion matrix σ
equal to zero. Table 2 contains the corresponding standard deviations and correlation coefficients. The
sets VG0 and NIG0 are taken from Hilber et al. (2013, page 208) and Rydberg (1997, Figure 8), respec
6See Schoutens (2003, Appendix A).
13

Table 2: Standard deviation and correlation coefficient
VG0 VG1 NIG0 NIG1
√
V
[L(1) (1)] 0.3162 0.1080 0.1958 0.1943
√
V
[L(2) (1)] 0.4472 0.1707 0.1830 0.2352
cov[L(1) (1),L(2) (1)]
√
V[L(1)(1)]V[L(2)(1)] 0.5656 0.1807 0.8417 0.5975
tively. The VG1 set was designed by us based on VG0. Finally, the NIG1 set was obtained via standard
maximum likelihood estimation7 using the close price data of S&P500 (^GSPC) and EUROSTOXX50
(^STOXX50E), retrieved from Yahoo Finance, covering the period from 01/01/2014 to 31/12/2024. In
particular, we apply the methodology used by Hainaut & Le Courtois (2014) to the logarithmic return
of the price, i.e. d ln X.
The following list specifies all choices for the values of the parameters of our numerical scheme:
• Nz = 2Nx and Nt = round [ 1
2 Nx
]. Clearly, with this choice, the three mesh widths are directly
proportional to each other.
• zImax = 2hz. This choice is motivated by the fact that the artificial diffusion acts over a small region
around the origin.
• zImIax = √0.1zImIaIx. In this way, the size of RIzI is about 10% of the full integration domain Rz.
• zImIaIx = max {‖z‖∞ : z ∈ R2, l (z) = 10−8}. Since the Lévy measure decays at least exponentially
as ‖z‖ → ∞, we ensure that l (z) < 10−8 for all z ∈ R2 such that ‖z‖∞ > zImIaIx.
• xint = 5
2 K. The non-smoothness set of φ is contained in the portion of Rx where the grid x is
uniform.
• xmax was heuristically chosen as 57K for VG0, 5K for VG1, 6K for NIG0, and 7K for NIG1.
• c is chosen such that F = max
(
65%, xint
xmax
)
. In this way, approximately at least 65% of the spatial
grid points in each given direction are in the interval [0, xint].
• Ny− = ceil
[
−1
hz ln (x1)
]
+ Ny∗ and Ny+ = ceil
[1
hz ln (xmax)
]
+ Ny∗ for some given Ny∗ ∈ N0. This
choice minimises the need for extrapolation in (3.17) as it is necessary to extrapolate just to the
grid points xm1m2 with either m1 = 0 or m2 = 0. This is done in a linear fashion. In (3.16), we set
v (x, t) = 0 whenever x ∈/ Rx.
• Ny∗ is taken as the minimal n ∈ N0 such that the maximal prime factor of ♯in = Ny− + Ny+ + 2Nz
is at most 7. This is beneficial for the efficiency of the FFT.
• The tolerances used for the fixed-point iteration and BiCGSTAB are set to 10−7 and 10−14, respec
tively.
• Interpolation is performed by cubic Lagrange polynomials.
Figure 3 displays the graphs of the option price function and its Greeks Delta and Gamma for the
parameter set NIG0 from Table 1, where we have taken Nx = 400. The Greeks have been approximated
(at negligible computational cost) by applying the second-order central finite difference schemes described
in Section 3.2. Table 3 provides the numerical option prices for various points x around (K, K) and all
four parameter sets from Table 1.
We next investigate the convergence behaviour of the numerical scheme. Let xN denote the set
of spatial grid points if Nx = N . For x ∈ Rx, let u ̃(x; N ) denote the approximation of the exact
7The density function for the case where α ∈ {0, 1
2
} can be found in Appendix A.
14

Figure 3: European put-on-the-average option price and the Greeks Delta and Gamma for the parameter set NIG0
15

Table 3: Numerical option prices for points x near (K, K)
(x(1), x(2)) VG0 VG1 NIG0 NIG1
(90, 90) 12.6534 10.1080 11.4067 11.5830
(90, 100) 10.6121 5.8462 7.8724 8.1529
(90, 110) 9.0136 3.0178 5.1023 5.4657
(100, 90) 10.4061 5.7637 7.8897 8.0910
(100, 100) 8.8015 2.9037 5.1186 5.3953
(100, 110) 7.5309 1.3893 3.1156 3.4311
(110, 90) 8.6181 2.8070 5.1393 5.3381
(110, 100) 7.3464 1.3062 3.1326 3.3735
(110, 110) 6.3290 0.6014 1.7937 2.0397
Figure 4: Total error in [0, 3K] × [0, 3K]
solution value u(x, T ) obtained by the numerical scheme if Nx = N . More precisely, the vector V Nt
generated by (3.27), (3.28) yields the approximation on the spatial grid xN and cubic interpolation is
employed whenever x ∈/ xN . We consider u ̃(x; N ) with N = 400 as the reference solution and study for
50 ≤ N ≤ 200 the total error defined by
E (N ) = max {|u ̃(x; N ) − u ̃(x; 400)| : x ∈ xN and x ∈ [0, 3K] × [0, 3K]} .
Figure 4 displays the total errors for all four parameter sets from Table 1. The quantity p in the
legend denotes the numerical order of convergence, which is computed by linear regression. Clearly, the
favourable result is found that the numerical scheme achieves second-order convergence for each set of
parameters.
16

5 Conclusions
In this paper, we have developed an effective numerical method for the valuation of European options
under two-asset exponential Lévy models with particular attention to the infinite-activity case. Our
method is based upon the ideas in Wang et al. (2007) for the one-asset case. A key part of our method
is the tailored discretization of the non-local integral term, designed to handle singular measures under
mild assumptions. The discretized integral term can subsequently be efficiently evaluated by FFT. For
the discretization in time, the semi-Lagrangian Crank–Nicolson method is employed with a fixed-point
iteration on the integral part. Numerical experiments for put-on-the-average options under Normal Tem
pered Stable processes indicate that our method achieves favourable second-order convergence whenever
the exponential Lévy model has finite-variation.
A main topic for future research will be extending the proposed methodology to the valuation of
American-style two-asset options under exponential Lévy models with infinite-activity, where the combi
nation of the early-exercise feature and the non-local integral term poses additional challenges.
6 Acknowledgements
The authors acknowledge the support of the Research Foundation - Flanders (FWO) under grant G0B5623N
and the FWO Scientific Research Network ModSimFIE (FWO WOG W001021N). The third author also
acknowledges the financial support of the Research Foundation - Flanders (FWO) through FWO SAB
K803124.
17

Table 4: Main quantities of the Tempered Stable subordinator
Quantity Formula
Lévy measure lG (x) = Ix>0δe−λxx−1−α
Characteristic exponent ψG (x) =
{
−δ ln (1 − ixλ−1) if α = 0
δΓ (−α) ((λ − ix)α − λα) if α ∈ (0, 1)
Expected value E [G (1)] = δ Γ(1−α)
λ1−α
Variance V [G (1)] = δ Γ(2−α)
λ2−α
Density function fG (x) =

 
 
Ix>0 λδ
Γ(δ) xδ−1e−λx if α = 0
Ix>0δx− 3
2 e−(√λx−δ√π)2x−1 if α = 1
2
not known analytically else
A d-dimensional Normal Tempered Stable process
The term d-dimensional Normal Tempered Stable process refers to a d-dimensional pure-jump compen
sated Lévy process L with Lévy measure generated by subordinating a d-dimensional Brownian motion
B with a tempered stable subordinator G, i.e., a pure-jump process with almost surely non-decreasing
trajectories. Such a process is defined by the following equation
L (t) = B (G (t)) − E [B (G (t))] with L (0) = 0.
In our context, we will use this process to define the jump component of the logarithmic return in asset
prices, i.e. we choose ∫
R2∗
z  ̃Π (dt, dz) = dL (t) .
A.1 Tempered Stable subordinator
A tempered stable subordinator is a non-compensated 1-sided tempered stable process G, which is char
acterized by the parameters δ, λ > 0 and α ∈ [0, 1). For more details see Küchler & Tappe (2013). Table
4 shows the main quantities for such a process. Note that G corresponds to the Gamma process for α = 0
and to the Inverse Gaussian process for α = 1
2.
A.2 Normal Tempered Stable process
Consider B (t) = ηt+√ρ W (t), where W is a standard d-dimensional Wiener process, η ∈ Rd and √ρ is the
Cholesky decomposition of a given positive semi-definite symmetric matrix ρ, i.e., ρ = √ρ·√ρ⊤. Adapting
the results presented in Barndorff-Nielsen et al. (2001) and Rocha-Arteaga & Sato (2019, Chapter 4)8,
we define a d-dimensional Normal Tempered Stable process as
L (t) = B (G (t)) − ct, (A.1)
where G is a Tempered Stable subordinator and c = E [B (G (t))] = δ Γ(1−α)
λ1−α η.
Table 5 shows the main quantities for such a process. Most of the formulae are expressed in terms of
8The authors consider the more general case where the characteristic exponent of L is defined as ψL (τ ) =
∫
Rd
(
eiτ ⊤z − 1 − iτ ⊤zI‖z‖<1
)
lL (dz), while we consider the case where ψL (τ ) = ∫
Rd
(
eiτ ⊤z − 1 − iτ ⊤z
)
lL (dz).
18

Table 5: Main quantities of the Normal Tempered Stable process
Quantity Formula
Lévy measure lL (x) = δΦ (x | α, 0)
Characteristic exponent ψL (x) =
{
−δ ln
( λ−ix⊤η+ 1
2 x⊤ρx λ
)
− ix⊤c if α = 0
δΓ (−α) ((λ − ix⊤η + 1
2 x⊤ρx)α − λα) − ix⊤c if α ∈ (0, 1)
Expected value E [L (1)] = 0
Variance V [L (1)] = δ Γ(2−α)
λ2−α
(
ρλ
1−α + ηη⊤)
Density function fL (x) =

 
 
λδ
Γ(δ) Φ (x + c | −δ, 0) if α = 0
δe2δ√λπΦ (x + c | 1
2 , δ2π) if α = 1
2
not known analytically else
the function Φ which is given by
Φ (x | a, b) = 2
√ √ √ √ √
(
‖η‖2
ρ + 2λ
)a+ d
2
(2π)d det [ρ]
Ka+ d
2
(√
(
‖η‖2
ρ + 2λ
)(
‖x‖2
ρ + 2b
))
(√
‖x‖2
ρ + 2b
)a+ d
2
e〈η,x〉ρ (A.2)
where Kν (τ ) = 1
2
∫∞
0 yν−1e− 1
2 τ(y+y−1)dy, for τ > 0, denotes the modified Bessel function of the second
kind (see Schoutens (2003, Appendix A)), 〈x, y〉ρ = x⊤ρ−1y and ‖x‖ρ = √〈x, x〉 is its induced norm. We
conclude this appendix with the following proposition.
Proposition A.1. Consider a Lévy measure l over R∗d = Rd \ {0}. Assume that there exist constants
Al and Bl, and for any given h > 0 a constant Cl(h) such that



l (z) ≤ Cl (h) ‖z‖−Al−d
ρ for any z ∈ R∗d such that ‖z‖ρ ∈ (0, h]
l (z) = O
(
e−Bl ‖z ‖ρ
)
as ‖z‖ρ → ∞.
Then, for a Normal Tempered Stable process these constants are given by
Al = 2α
Bl =
√
‖η‖2
ρ + 2λ − ‖η‖ρ
Cl (h) = 2αδΓ (α + d
2
)
√πd det [ρ] eh‖η‖ρ .
Proof. Denote c1 =
√
‖η‖2
ρ + 2λ and c2 = 2δcα+ d
2
1 (2π)− d
2 det [ρ]− 1
2 . The function l : R>0 → R, defined
by
l (τ ) = c2τ −α− d
2 Kα+ d
2 (c1τ ) eτ ‖η‖ρ ,
represents a radial upper bound for l, since by the Cauchy-Schwarz inequality l (z) ≤ l
(
‖z‖ρ
)
for any
z ∈ R∗d. Applying the following well known inequality for the modified Bessel function of the second kind
τ ν Kν (τ ) ≤ Γ (ν) 2ν−1 for any τ, ν > 0,
we readily get
l (τ ) ≤ c2c−α− d
2
1 2α+ d
2 −1eτ ‖η‖ρ Γ
(
α+ d
2
)
τ −2α−d.
For τ = ‖z‖ρ with ‖z‖ρ ∈ (0, h] we easily deduce the stated expressions for Al and Cl(h). Invoking the
19

following asymptotic behaviour of the modified Bessel function of the second kind
Kν (τ ) = O
(
τ−1
2 e−τ )
as τ → ∞,
it follows that
l (τ ) = O
(
τ −α− d
2−1
2 e−τ (c1−‖η‖ρ))
.
Since τ −α− d
2−1
2 = O (1) as τ → ∞, we obtain the expression for Bl.
B Summation operator as a circulant matrix-vector multiplica
tion
Let Nz = 1, Ny− = 0 and Ny+ = 1. Then ♯out = Ny+ + Ny− + 1 = 2 and ♯in = 2Nz + Ny+ + Ny− = 3. The
quadrature matrix Ω, whose entries are the coefficients ω defined in (3.5), is given by
Ω=
[
ω−1,−1 ω−1,0
ω0,−1 ω0,0
]
∈ R2Nz×2Nz .
The first row of the circulant matrix C is defined according to
C1,· = vec

 

 
ω−1,−1 ω−1,0 0
ω0,−1 ω0,0 0
0 00

 


 ∈ R(♯in)2×1,
while the entire matrix is
C=

                
ω−1,−1 ω0,−1 0 ω−1,0 ω0,0 0 0 0 0
0 ω−1,−1 ω0,−1 0 ω−1,0 ω0,0 0 0 0
0 0 ω−1,−1 ω0,−1 0 ω−1,0 ω0,0 0 0
0 0 0 ω−1,−1 ω0,−1 0 ω−1,0 ω0,0 0
0 0 0 0 ω−1,−1 ω0,−1 0 ω−1,0 ω0,0
ω0,0 0 0 0 0 ω−1,−1 ω0,−1 0 ω−1,0
ω−1,0 ω0,0 0 0 0 0 ω−1,−1 ω0,−1 0
0 ω−1,0 ω0,0 0 0 0 0 ω−1,−1 ω0,−1
ω0,−1 0 ω−1,0 ω0,0 0 0 0 0 ω−1,−1

                
∈ R(♯in)2×(♯in)2 .
The entries in the first, second, fourth, and fifth rows (highlighted in red) correspond to the matrix
I ̃C ∈ R(♯out)2×(♯in)2 .
20

References
Applebaum, D. (2004) Lévy Processes and Stochastic Calculus. Cambridge University Press, Cambridge,
UK.
Asmussen, S. & Rosiński, J. (2001) Approximations of small jumps of Lévy processes with a view towards
simulation. Journal of Applied Probability, 38(02), 482–493.
Barndorff-Nielsen, O.E., Pedersen, J., & Sato, K.I. (2001) Multivariate subordination, self
decomposability and stability. Advances in Applied Probability, 33(1), 160–187.
Boen, L. & in ’t Hout, K.J. (2021) Operator splitting schemes for the two-asset Merton jump-diffusion
model. Journal of Computational and Applied Mathematics, 387, 112309.
Clift, S.S. & Forsyth, P.A. (2008) Numerical solution of two asset jump diffusion models for option
valuation. Applied Numerical Mathematics, 58, 743–782.
Cont, R. & Voltchkova, E. (2005) A finite difference scheme for option pricing in jump diffusion and
exponential Lévy models. SIAM Journal on Numerical Analysis, 43(4), 1596–1626.
d’Halluin, Y., Forsyth, P.A., & Vetzal, K.R. (2005) Robust numerical methods for contingent claims
under jump diffusion processes. IMA Journal of Numerical Analysis, 25(1), 87–112.
Garroni, M.G. & Menaldi, J.L. (1992) Green Functions for Second Order Parabolic Integro-Differential
Problems. Longman, Harlow, UK.
Hainaut, D. & Le Courtois, O. (2014) An intensity model for credit risk with switching Lévy processes.
Quantitative Finance, 14(8), 1453–1465.
Hilber, N., Reichmann, O., Schwab, C., & Winter, C. (2013) Computational Methods for Quantitative
Finance: Finite Element Methods for Derivative Pricing. Springer, Heidelberg.
in ’t Hout, K.J. & Lamotte, P. (2023) Efficient numerical valuation of European options under the
two-asset Kou jump-diffusion model. Journal of Computational Finance, 26(4), 101–137.
Jackson, K.R., Jaimungal, S., & Surkov, V. (2008) Fourier space time-stepping for option pricing with
Lévy models. Journal of Computational Finance, 12(2), 1–29.
Kaushansky, V., Lipton, A., & Reisinger, C. (2018) Numerical analysis of an extended structural default
model with mutual liabilities and jump risk. Journal of Computational Science, 24, 218–231.
Küchler, U. & Tappe, S. (2013) Tempered stable distributions and processes. Stochastic Processes and
their Applications, 123(12), 4256–4293.
Øksendal, B. & Sulem, A. (2019) Applied Stochastic Control of Jump Diffusions. Springer, Cham,
Switzerland.
Plonka, G., Potts, D., Steidl, G., & Tasche, M. (2018) Numerical Fourier Analysis. Springer, Cham,
Switzerland.
Quarteroni, A., Sacco, R., & Saleri, F. (2007) Numerical Mathematics. Springer, Berlin.
Rocha-Arteaga, A. & Sato, K.I. (2019) Topics in Infinitely Divisible Distributions and Lévy Processes,
Revised Edition. Springer, Cham, Switzerland.
21

Ruijter, M.J. & Oosterlee, C.W. (2012) Two-dimensional Fourier cosine series expansion method for
pricing financial options. SIAM Journal on Scientific Computing, 34(5), B642–B671.
Rydberg, T.H. (1997) The normal inverse Gaussian Lévy process: simulation and approximation. Com
munications in Statistics. Stochastic Models, 13(4), 887–910.
Salmi, S., Toivanen, J., & von Sydow, L. (2014) An IMEX-scheme for pricing options under stochastic
volatility models with jumps. SIAM Journal on Scientific Computing, 36, B817–B834.
Schoutens, W. (2003) Lévy Processes in Finance: Pricing Financial Derivatives. Wiley, Chichester, UK.
Spiegelman, M. & Katz, R.F. (2006) A semi-Lagrangian Crank-Nicolson algorithm for the numerical
solution of advection-diffusion problems. Geochemistry, Geophysics, Geosystems, 7(4).
Wang, I.R., Wan, J.W.L., & Forsyth, P.A. (2007) Robust numerical valuation of European and American
options under the CGMY process. Journal of Computational Finance, 10(4), 31–69.
22

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:30.466Z
- **Text Length:** 48486 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 22 of 22
