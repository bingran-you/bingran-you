# PDF Document: Alos et al. - 2025 - Estimating the Hurst parameter from the zero vanna implied volatility and its dual.pdf

**File Path:** Alos et al. - 2025 - Estimating the Hurst parameter from the zero vanna implied volatility and its dual.pdf

**Processed Date:** 2026-02-10T18:14:24.813Z

**File Size:** 162.82 KB

**Total Pages:** 20

**Extracted Pages:** 20

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3546

**Title:** Estimating the Hurst parameter from the zero vanna implied volatility and its dual

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Estimating the Hurst parameter from the zero vanna
implied volatility and its dual
Elisa Al `os* Frido Rolloos Kenichiro Shiraya†
November 17, 2025
Abstract
The covariance between the return of an asset and its realized volatility can be approximated as the difference between two specific implied volatilities. In this paper it is proved that in the small time-to-maturity limit the approximation error tends to zero. In addition a direct relation between the short time-to-maturity covariance and slope of the at-the-money implied volatility is established. The limit theorems are valid for stochastic volatility models with Hurst parameter H ∈ (0, 1). An a-
pplication of the results is to accurately approximate the Hurst parameter using only a discrete set of implied volatilities. Numerical examples under the rough Bergomi model are presented.
Keywords: Malliavin calculus, fractional volatility models, implied volatility, skew, covariance. AMS subject classification: 91G99
1 Introduction
In Rolloos [10] an approximation is derived that relates the covariance between price returns and realized volatility to the difference between two specific implied volatilities:
Et


ST
St
−1
s
1 T−t
ZT
t
σ2udu


≈ I(k+
t,T) − I(k−
t,T) ≈ I2(k∗
t,T)(T − t)
∂I(k∗
t,T )
∂k (1.1)
Here St denotes the asset price, σt its instantaneous volatility, I(k−
t,T) the implied volatility (IV)
corresponding to the (log)strike where the Black-Scholes-Merton (BS) vanna and volga of a vanilla option with maturity date T is zero, I(k+
t,T) the IV corresponding to the strike where the
BS volga is zero but the BS vanna is nonzero, and I(k∗
t,T) is the at-the-money forward (ATM) IV.
Notice that the strikes k±
t,T, k∗
t,T are floating strikes, not fixed strikes.
*Department of Economics and Business, University Pompeu Fabra, and Barcelona GSE. Supported by grant MEC MTM 2016-76420-P †Graduate School of Economics, The University of Tokyo. Supported by CARF.
1
arXiv:2510.26310v2 [q-fin.MF] 14 Nov 2025

The approximations (1.1) are of use to the practitioner for several reasons. For example, in contrast to other more ad-hoc measures of skew such as the difference between the IVs of 90% and 110% moneyness, the difference between I(k+
t,T) and I(k−
t,T) has a clear link to covariance.
This means that by observing the difference between the two implied volatilities I(k±
t,T) the
practitioner can obtain an estimate for the implied covariance between price return and realized volatility. They can then compare the implied measure to subsequent realized covariance and infer whether on average the skew contains a premium. Furthermore, since for small times to maturity the covariance is directly proportional to the ATM slope the approximation complements other results that relates the ATM skew to statistical measures. One such result was obtained by Backus et al. [3] which stat-
es that for short times to maturity the ATM skew is approximately the skewness of the distribution of the asset log returns. As we shall demonstrate the approximations (1.1) also enable accurate approximation of the Hurst parameter H using only a discrete set of IVs. To see this recall that as has been shown by Alo` s et al. [1] and Fukasawa [5, 6] the short time-to-maturity (T − t ≪ 1) ATM skew has the following property:
∂I(k∗
t,T )
∂k ∝ (T − t)H− 1
2 . (1.2)
It follows from the above and (1.1) that
H ≈ −1
2+
ln I(k+
t,T1 )−I(k−
t,T1 )
I(k+
t,T2 )−I(k−
t,T2 )
I2(k∗
t,T2 )
I2(k∗
t,T1 )
!
ln T1−t
T2−t
(1.3)
This approximation for the Hurst parameter is appealing because it does not depend on specific model parameters. Hence, it can be used without first calibrating a specific stochastic volatility model. If volatility is indeed driven by fractional noise, as put forward by among others Comte and Renault [4] for H > 1/2 and Alo` s, Le  ́on and Vives [1] for H < 1/2, then the approximation (1.3) provides a straightforward way to estimate the Hurst parameter from the IV surface. Note also that our estim-
ation of H is easier to carry out than using short-dated volatility swaps (Alo` s and Shiraya [2]) since volatility swaps are illiquid. In spite of the practical usefulness of the approximations, Rolloos does not give any insight into the approximation errors. This is due to the fact that the approximations were derived by Taylor expansions of the ‘mixing’ formula due to Hull and White [8], Romano and Touzi [11], and Willard [12]. Even though a Taylor expansion is straightforward, in this particul-
ar case it is unable to give information on the approximation errors. In contrast, techniques from Malliavin calculus have been shown to be quite powerful in proving limit theorems and providing error bounds. This is the main contribution of our paper: by using techniques from Malliavin calculus we will prove limit theorems for the approximations (1.1). The paper is structured as follows. In Section 2 the main assumptions are stated and notation introduced. This is followed by Section 3 in which t-
he main limit theorems concerning the difference between an arbitrary IV and the volatility swap strike, and the difference between I(k+
t,T) and I(k−
t,T) are proved. The approximations stated above then follow from the main
theorems. In Section 4 we present numerical examples where the rough Bergomi model is
2

taken as benchmark skew generating model. The accuracy of approximations (1.1) and (1.3) are then examined. The final section concludes.
2 The main problem and notations
This paper assumes a stochastic volatility model for a log asset price Xt := log St under the risk-neutral probability measure P. The dynamics is described by the following stochastic differential equation:
Xt = X0 − 1
2
Zt
0
σs2ds +
Zt
0
σs ρdWs +
q
1 − ρ2dBs , t ∈ [0, T]. (2.1)
In this formulation X0 represents the initial log asset price and the dynamics are driven by two independent standard Brownian motions, W and B, on a complete probability space (Ω, G, P). The filtrations generated by W and B are denoted by F W and F B, respectively, with F representing their joint filtration, F := F W ∨ F B. The volatility component, σ, is a square-integrable and right-continuous stochastic process that is adapted to F W. For the sake of analytical simplicity, we assume a zero int-
erest rate (r = 0). However, the core arguments of this study remain valid even when r , 0. Under this framework the value of a European call option with strike price K is determined by its conditional expectation, as expressed by the following equality:
Vt = Et[(eXT − K)+],
where Et signifies the Ft-conditional expectation with respect to measure P.
The quantity vt =
q1 T−t
RT
t σ2udu s the future average volatility over the time to maturity of the option, and this process is not adapted. Its conditional expectation, Et [vt], is known as the fair strike of a volatility swap with maturity T. The price of a European call option in the Black-Scholes model is given by the function BS(t, T, x, k, σ), assuming constant volatility σ, an initial asset price ex, a time to maturity T − t, and a strike price K = exp(k). For the special case of zero interest rate we recall that the-
 formula is:
BS(t, T, x, k, σ) = exN(d1(k, σ)) − ekN(d2(k, σ)),
Here, N is the cumulative distribution function for a standard normal variable, with the parameters d1 and d2 defined as:
d1 (k, σ) := x − k
σ
√
T−t + σ
2
√
T − t, d2 (k, σ) := x − k
σ
√
T−t
−σ 2
√
T − t.
For convenience we occasionally simplify the notation by writing
BS(k, σ) := BS(t, T, Xt, k, σ).
We also define the inverse Black-Scholes function, BS−1(t, T, x, k, ·), with respect to the volatility parameter such that
BS(t, T, x, k, BS−1(t, T, x, k, λ)) = λ,
3

for all λ > 0. On occasion we use the following compact notation:
BS−1(k, λ) := BS−1(t, T, Xt, k, λ).
The implied volatility I(t, T, Xt, k) is defined for any fixed set of parameters t, T, Xt, k as the unique volatility value that equates the Black-Scholes price to the market price:
BS(t, T, Xt, k, I(t, T, Xt, k)) = Vt.
It follows directly that
I(t, T, Xt, k) = BS−1(t, T, Xt, k, Vt).
We define k∗
t := Xt is the ATM strike at time t and I(t, T, Xt, k∗
t) the ATM IV. When interest rate is nonzero then the ATM strike depends on time to maturity T as well. However, under our assumptions there is no dependence on T. The zero vanna strike at time t for maturity date T is the strike k−
t,T for which the Black-Scholes
vanna vanishes, i.e.,
d2(k−
t,T, I(t, T, Xt, k−
t,T)) = 0.
The Black-Scholes vanna is defined as the first-order partial derivative of the option’s delta with respect to the implied volatility and is proportional to d2. The implied volatility I(t, T, Xt, k−
t,T )
is referred to as the zero vanna implied volatility. A similar definition applies to I(t, T, Xt, k+
t,T )
and k+
t,T, where d1(k+
t,T, I(t, T, Xt, k+
t,T)) = 0. The strike k+
t,T is called the dual zero vanna strike and
the corresponding implied volatility I(t, T, Xt, k+
t,T) is the dual zero vanna implied volatility.
Even when interest rate and dividend yield are zero the zero vanna strike and its dual depend on time to maturity T. For the sake of notational economy, when not considering multiple maturities we shall henceforth drop the dependence of these strikes on T and only reintroduce it in the section on numerical results. We introduce also the following notations:
Λ−
r := Er
hBS(t, T, Xt, k−
t,T, vt)i , Λr+ := Er
hBS(t, T, Xt, k+
t,T, vt)i .
We also define Θr(k) := BS−1(k, Λr), and note that
Θt(kt,T) = I(t, Xt, kt,T, Vt), ΘT(k±
t,T) = vt.
Finally, we define the following operators on the Black-Scholes function:
G(t, T, x, k, σ) := ∂2
∂x2 − ∂
∂x
!
BS(t, T, x, k, σ), H(t, T, x, k, σ) := ∂3
∂x3 − ∂2
∂x2
!
BS(t, T, x, k, σ).
The methodology for the remainder of this paper is grounded in Malliavin calculus. The domain of the Malliavin derivative operator DW with respect to the Brownian motion W is denoted by D1,2
W . For n > 1, the domains for the iterated derivatives Dn,W is denoted by Dn,2
W.
We also utilize the notation Ln,2
W = L2 [0, T] ; Dn,2
W.
4

3 Limit theorems
In this section the main assumptions and theorems are stated. Due to the length of the proofs of the theorems they have been placed in the appendix. The proofs of the corollaries are sufficiently short to be kept in the main text. Let us then first state our hypotheses:
(H1) There exist two positive constants a, b such that a ≤ σt ≤ b, for all t ∈ [0, T] .
(H2) σ ∈ L3,2
W and there exists two constants ν > 0 and H ∈ (0, 1) such that, for all 0 < r <
u, s, θ < T
|Er[DrWσs2]| ≤ ν(s − r)H− 1
2 , |Er[DW
θ DrWσs2]| ≤ ν2(s − r)H− 1
2 (s − θ)H− 1
2,
and
|Er [DuW DW
θ DrWσs2]| ≤ ν3(s − r)H− 1
2 (s − θ)H− 1
2 (s − u)H− 1
2.
(H3) Hypotheses (H1), (H2’), hold and the terms
1
(T − t)3+2H Et


ZT
t
ZT
s
DsW σr2 drds
!2

,
1
(T − t)2+2H Et
"Z T
t
ZT
s
DsW σr
ZT
r
DrW σ2u dudrds
#
,
1
(T − t)2+2H Et
"Z T
t
ZT
s
ZT
r
DsW DrW σ2u dudrds
#
have a finite limit as T → t.
The following result follows from the same argument as Proposition 4.1 in Alo` s and Shiraya (2019) and serves as the main tool in this section.
Proposition 1. Consider the model (2.1) and assume that hypotheses (H1), (H2) and hold for some H ∈ (0, 1). Then,
I (t, T, Xt, k) = I0 (t, T, Xt, k)
+ρ
2 Et
"Z T
t
(BS−1)′(k, Γs)H(s, T, Xs, k, vs)Φsds
#
(3.1)
where I0(t, T, Xt, k) denotes the implied volatility in the uncorrelated case ρ = 0,
Γs := Et[BS(t, T, Xt, k, vt)] + ρ
2 Et
"Z s
t
H(r, T, Xr, k, vr)Φrdr
#
,
and Φt := σt
RT
t DW
t σr2dr.
By making use of Proposition 1 we can prove the following.
5

Proposition 2. Consider the model (2.1) and assume that hypotheses (H1), (H2’) and (H3) hold for some H ∈ (0, 1). Then
I (t, T, Xt, k) − Et (vt)
= I0 (t, T, Xt, k) − Et [vt]
+ρ
2 Et [H(t, Xt, k, vt)Ut(k)
+ ρ2
4 Et
"Z T
t
∂ ∂x
∂2
∂x2 − ∂
∂x
!
H(s, Xs, k, vs)σs
ZT
s
DsW σr2 dr
!
Us(k)ds
+
ZT
t
∂
∂x H(s, Xs, k, vs)
ZT
s
BS−1 ′
(k, Γr) DsWΦr dr
!
σsds
#
where Ut(k) = R T
t BS−1 ′
(k, Γs) Φsds.
We can now state and prove our main theorem.
Theorem 3. Consider the model (2.1) and assume that hypotheses (H1), (H2’) and (H3) hold for some H ∈ (0, 1). Then
lTi→mt
I(t, T, Xt, k+
t,T) − I(t, T, Xt, k−
t,T )
(T − t)H+ 1
2
=ρ
2 lTi→mt
1
(T − t)H+ 3
2
ZT
t
ZT
s
DsW σr2 dr
!
ds.
From the main theorem the following set of corollaries easily follow. The corollaries contain the results that we will be looking at in the section on numerics.
Corollary 4. In the short time-to-maturity limit
lTi→mt
I(t, T, Xt, k+
t,T) − I(t, T, Xt, k−
t,T )
(T − t)H+ 1
2
= σt2 lTi→mt
1
(T − t)H− 1
2
∂I
∂k (k∗
t,T). (3.2)
Thus, for short time-to-maturity the following approximation holds:
I(t, T, Xt, k+
t,T) − I(t, T, Xt, k−
t,T) ≈ σt2(T − t) ∂I
∂k (k∗
t,T). (3.3)
Proof. Notice that, from the results in Alo` s et al. [1] we know that
lTi→mt(T − t) 1
2 −H ∂I
∂k (k∗
t,T) = ρ
2σt2
lTi→mt
1
(T − t)H+ 3
2
ZT
t
ZT
s
DsW σr2 dr
!
ds.
Jointly with Theorem 3 gives us the result. □
Corollary 5. In the small time-to-maturity limit
lTi→mt
I(t, T, Xt, k+
t,T) − I(t, T, Xt, k−
t,T )
(T − t)H+ 1
2
=1
2σt
lTi→mt
1
(T − t)H+ 1
2
Et
" ST − St
St
1
(T − t)
ZT
t
σr2dr
#
. (3.4)
Thus, for short time-to-maturity the following approximation holds:
I(t, T, Xt, k+
t,T) − I(t, T, Xt, k−
t,T) ≈ 1
2σt
Et
" ST − St
St
1
(T − t)
ZT
t
σr2dr
#
. (3.5)
6

Proof. Assume the model (2.1). Then
ST = St +
ZT
t
σrSr ρdWr +
q
1 − ρ2dBr .
On the other hand, a direct application of the Clark-Ocone-Haussman theorem gives us that (see for example Alo` s and Garcı ́a-Lorite (2024))
ZT
t
σr2dr = Et
"Z T
t
σr2dr
#
+
ZT
t
ZT
r
Er [DrW σ2u ]dudWr .
Then,
Et
" ST − St
St
1 T−t
ZT
t
σr2dr
#
=ρ
St
Et
"Z T
t
σrSrdWr
!1
T−t
ZT
t
ZT
r
Er (DrW σ2u )dudWr
!#
=ρ
St
Et
"Z T
t
σrSr
1 T−t
ZT
r
Er [DrW σ2u ]du
!
dr
#
. (3.6)
Together with Theorem 3 this proves the corollary. □
Corollary 6. In the small time-to-maturity limit
lTi→mt
I(t, T, Xt, k+
t,T) − I(t, T, Xt, k−
t,T )
(T − t)H+ 1
2
= lTi→mt
1
(T − t)H+ 1
2
Et


ST − St
St
s
1 T−t
ZT
t
σr2dr


. (3.7)
That is, for short times to maturity
I(t, T, Xt, k+
t,T) − I(t, T, Xt, k−
t,T )
(T − t)H+ 1
2
≈1
(T − t)H+ 1
2
Et


ST − St
St
s
1 T−t
ZT
t
σr2dr


. (3.8)
Proof. A direct application of the Clark-Ocone-Haussman theorem gives us that
s
ZT
t
σr2dr = Et


s
ZT
t
σr2dr


+
ZT
t
ZT
r
Er


DrW σ2u
2
qR T
t σr2dr


dudWr.
A similar argument as in the previous corollary allow us to deduce the result. □
7

4 Numerical examples
In this section, we examine the accuracy of the approximation derived in Corollary 6 (which is equivalent to approximation (1.1)) and approximation (1.3) for ρ , 0 using the Monte Carlo method under the rough Bergomi model:
St = exp X0 − 1
2
Zt
0
σs2ds +
Zt
0
σsdBs
!
, (4.1)
σt2 = σ2
0 exp αWH
t −1
2 α2t2H (4.2)
where WH
t :=
√
2H R t
0 (t − s)H− 1
2 dWs, and for 0 ≤ s < t and ρ ∈ [−1, 1],
E[WH
t WsH] = s2H
Z1
0
2H
(1 − x) 1
2 −H(t/s − x) 1
2 −H dx (4.3)
E[WH
t Bs] = ρ
√
2H
H+ 1
2
tH+ 1
2 − (t − min(t, s))H+ 1
2 . (4.4)
The model parameters are set as S0 = 100, σ0 = 0.2, α = 0.8, the correlations are ρ = −0.2, −0.4, −0.6, −0.8, the Hurst indices are H = 0.1, 0.3, 0.5, 0.7, 0.9, and the maturities are set to T = 0.0025, 0.005, 0.01, 0.025, 0.05, 0.1, 0.25, 0.5, 1, 2 and 3. The number of time steps in the Monte Carlo method is set to max{500T, 100}, and the number of simulations is set to 20 million. Tables 1 to 4 contains the approximation of Corollary 6, or equivalently (1.1), for various values of H, ρ and T − t-
. Times to maturity less than 0.05 have not been included to save space. However, as can also be seen in the tables the accuracy increases as T − t decreases. In the tables “Cov” denotes the covariance between ST/St − 1 and vt
8

H index Maturity 0.05 0.1 0.25 0.5 1 2 0.1 I(k−
t,T) 0.1977 0.1974 0.1969 0.1963 0.1958 0.1952
I(k+
t,T) 0.1975 0.1970 0.1963 0.1954 0.1945 0.1931
Cov -0.0002 -0.0004 -0.0006 -0.0009 -0.0014 -0.0022
I(k+
t,T )−I(k−
t,T )
(T−t)H+1/2 -0.0014 -0.0014 -0.0014 -0.0014 -0.0014 -0.0013
Cov
(T−t)H+1/2 -0.0015 -0.0014 -0.0015 -0.0014 -0.0014 -0.0014
0.3 I(k−
t,T) 0.1990 0.1985 0.1975 0.1961 0.1941 0.1911
I(k+
t,T) 0.1989 0.1983 0.1969 0.1952 0.1926 0.1885
Cov -0.0002 -0.0003 -0.0006 -0.0010 -0.0017 -0.0029
I(k+
t,T )−I(k−
t,T )
(T−t)H+1/2 -0.0017 -0.0017 -0.0016 -0.0016 -0.0015 -0.0015
Cov
(T−t)H+1/2 -0.0017 -0.0017 -0.0017 -0.0017 -0.0017 -0.0016
0.5 I(k−
t,T) 0.1997 0.1995 0.1987 0.1973 0.1946 0.1893
I(k+
t,T) 0.1997 0.1993 0.1983 0.1965 0.1932 0.1867
Cov -0.0001 -0.0002 -0.0004 -0.0008 -0.0016 -0.0030
I(k+
t,T )−I(k−
t,T )
(T−t)H+1/2 -0.0016 -0.0016 -0.0015 -0.0015 -0.0014 -0.0013
Cov
(T−t)H+1/2 -0.0016 -0.0016 -0.0016 -0.0016 -0.0016 -0.0015
0.7 I(k−
t,T) 0.1999 0.1998 0.1993 0.1982 0.1954 0.1881
I(k+
t,T) 0.1999 0.1997 0.1991 0.1976 0.1941 0.1855
Cov 0.0000 -0.0001 -0.0003 -0.0006 -0.0014 -0.0031
I(k+
t,T )−I(k−
t,T )
(T−t)H+1/2 -0.0014 -0.0014 -0.0014 -0.0014 -0.0013 -0.0011
Cov
(T−t)H+1/2 -0.0014 -0.0014 -0.0014 -0.0014 -0.0014 -0.0013
0.9 I(k−
t,T) 0.2000 0.1999 0.1997 0.1989 0.1961 0.1869
I(k+
t,T) 0.2000 0.1999 0.1995 0.1984 0.1949 0.1845
Cov 0.0000 -0.0001 -0.0002 -0.0005 -0.0012 -0.0031
I(k+
t,T )−I(k−
t,T )
(T−t)H+1/2 -0.0012 -0.0012 -0.0013 -0.0012 -0.0012 -0.0009
Cov
(T−t)H+1/2 -0.0013 -0.0013 -0.0013 -0.0013 -0.0012 -0.0012
Table 1: Approximate error of covariance in ρ = −0.2
9

H index Maturity 0.05 0.1 0.25 0.5 1 2 0.1 I(k−
t,T) 0.1975 0.1971 0.1966 0.1960 0.1954 0.1947
I(k+
t,T) 0.1970 0.1964 0.1954 0.1942 0.1927 0.1907
Cov -0.0005 -0.0007 -0.0013 -0.0019 -0.0028 -0.0042
I(k+
t,T )−I(k−
t,T )
(T−t)H+1/2 -0.0028 -0.0028 -0.0027 -0.0027 -0.0027 -0.0026
Cov
(T−t)H+1/2 -0.0029 -0.0029 -0.0029 -0.0029 -0.0028 -0.0028
0.3 I(k−
t,T) 0.1989 0.1984 0.1972 0.1957 0.1936 0.1902
I(k+
t,T) 0.1986 0.1979 0.1962 0.1939 0.1905 0.1852
Cov -0.0003 -0.0005 -0.0011 -0.0019 -0.0033 -0.0056
I(k+
t,T )−I(k−
t,T )
(T−t)H+1/2 -0.0033 -0.0033 -0.0032 -0.0032 -0.0030 -0.0029
Cov
(T−t)H+1/2 -0.0034 -0.0034 -0.0034 -0.0033 -0.0033 -0.0032
0.5 I(k−
t,T) 0.1997 0.1994 0.1985 0.1970 0.1941 0.1883
I(k+
t,T) 0.1996 0.1991 0.1978 0.1955 0.1913 0.1833
Cov -0.0002 -0.0003 -0.0008 -0.0016 -0.0031 -0.0059
I(k+
t,T )−I(k−
t,T )
(T−t)H+1/2 -0.0031 -0.0031 -0.0031 -0.0030 -0.0028 -0.0025
Cov
(T−t)H+1/2 -0.0032 -0.0032 -0.0032 -0.0031 -0.0031 -0.0030
0.7 I(k−
t,T) 0.1999 0.1998 0.1993 0.1981 0.1950 0.1870
I(k+
t,T) 0.1998 0.1996 0.1988 0.1969 0.1924 0.1821
Cov -0.0001 -0.0002 -0.0005 -0.0012 -0.0028 -0.0060
I(k+
t,T )−I(k−
t,T )
(T−t)H+1/2 -0.0028 -0.0028 -0.0028 -0.0027 -0.0026 -0.0022
Cov
(T−t)H+1/2 -0.0028 -0.0028 -0.0028 -0.0028 -0.0028 -0.0026
0.9 I(k−
t,T) 0.2000 0.1999 0.1997 0.1988 0.1958 0.1858
I(k+
t,T) 0.1999 0.1998 0.1993 0.1978 0.1935 0.1810
Cov 0.0000 -0.0001 -0.0004 -0.0009 -0.0025 -0.0060
I(k+
t,T )−I(k−
t,T )
(T−t)H+1/2 -0.0025 -0.0025 -0.0025 -0.0025 -0.0023 -0.0018
Cov
(T−t)H+1/2 -0.0025 -0.0025 -0.0025 -0.0025 -0.0025 -0.0023
Table 2: Approximate error of covariance in ρ = −0.4
10

H index Maturity 0.05 0.1 0.25 0.5 1 2 0.1 I(k−
t,T) 0.1971 0.1967 0.1961 0.1954 0.1948 0.1939
I(k+
t,T) 0.1964 0.1957 0.1943 0.1928 0.1908 0.1881
Cov -0.0007 -0.0011 -0.0019 -0.0028 -0.0042 -0.0062
I(k+
t,T )−I(k−
t,T )
(T−t)H+1/2 -0.0042 -0.0042 -0.0041 -0.0040 -0.0040 -0.0039
Cov
(T−t)H+1/2 -0.0043 -0.0043 -0.0043 -0.0043 -0.0042 -0.0041
0.3 I(k−
t,T) 0.1988 0.1982 0.1968 0.1952 0.1927 0.1889
I(k+
t,T) 0.1983 0.1974 0.1952 0.1925 0.1882 0.1816
Cov -0.0005 -0.0008 -0.0017 -0.0029 -0.0049 -0.0082
I(k+
t,T )−I(k−
t,T )
(T−t)H+1/2 -0.0050 -0.0050 -0.0048 -0.0047 -0.0045 -0.0042
Cov
(T−t)H+1/2 -0.0051 -0.0051 -0.0050 -0.0050 -0.0049 -0.0047
0.5 I(k−
t,T) 0.1997 0.1993 0.1983 0.1966 0.1933 0.1868
I(k+
t,T) 0.1994 0.1989 0.1972 0.1944 0.1892 0.1794
Cov -0.0002 -0.0005 -0.0012 -0.0023 -0.0046 -0.0086
I(k+
t,T )−I(k−
t,T )
(T−t)H+1/2 -0.0047 -0.0047 -0.0046 -0.0045 -0.0042 -0.0037
Cov
(T−t)H+1/2 -0.0047 -0.0047 -0.0047 -0.0047 -0.0046 -0.0043
0.7 I(k−
t,T) 0.1999 0.1998 0.1992 0.1978 0.1944 0.1854
I(k+
t,T) 0.1998 0.1995 0.1984 0.1961 0.1906 0.1782
Cov -0.0001 -0.0003 -0.0008 -0.0018 -0.0041 -0.0087
I(k+
t,T )−I(k−
t,T )
(T−t)H+1/2 -0.0042 -0.0042 -0.0042 -0.0041 -0.0038 -0.0032
Cov
(T−t)H+1/2 -0.0043 -0.0042 -0.0042 -0.0042 -0.0041 -0.0038
0.9 I(k−
t,T) 0.2000 0.1999 0.1996 0.1986 0.1953 0.1842
I(k+
t,T) 0.1999 0.1998 0.1991 0.1972 0.1919 0.1771
Cov -0.0001 -0.0002 -0.0005 -0.0014 -0.0036 -0.0087
I(k+
t,T )−I(k−
t,T )
(T−t)H+1/2 -0.0038 -0.0038 -0.0037 -0.0037 -0.0034 -0.0027
Cov
(T−t)H+1/2 -0.0038 -0.0038 -0.0038 -0.0038 -0.0036 -0.0033
Table 3: Approximate error of covariance in ρ = −0.6
11

H index Maturity 0.05 0.1 0.25 0.5 1 2 0.1 I(k−
t,T) 0.1966 0.1961 0.1954 0.1946 0.1939 0.1929
I(k+
t,T) 0.1957 0.1948 0.1931 0.1912 0.1887 0.1853
Cov -0.0010 -0.0014 -0.0025 -0.0037 -0.0056 -0.0082
I(k+
t,T )−I(k−
t,T )
(T−t)H+1/2 -0.0056 -0.0055 -0.0054 -0.0053 -0.0052 -0.0050
Cov
(T−t)H+1/2 -0.0058 -0.0057 -0.0057 -0.0056 -0.0056 -0.0054
0.3 I(k−
t,T) 0.1986 0.1979 0.1963 0.1943 0.1915 0.1871
I(k+
t,T) 0.1980 0.1968 0.1942 0.1908 0.1856 0.1778
Cov -0.0006 -0.0011 -0.0022 -0.0038 -0.0064 -0.0107
I(k+
t,T )−I(k−
t,T )
(T−t)H+1/2 -0.0067 -0.0066 -0.0064 -0.0062 -0.0059 -0.0054
Cov
(T−t)H+1/2 -0.0068 -0.0067 -0.0067 -0.0066 -0.0064 -0.0061
0.5 I(k−
t,T) 0.1996 0.1992 0.1981 0.1961 0.1923 0.1848
I(k+
t,T) 0.1993 0.1986 0.1965 0.1932 0.1868 0.1753
Cov -0.0003 -0.0006 -0.0016 -0.0031 -0.0060 -0.0112
I(k+
t,T )−I(k−
t,T )
(T−t)H+1/2 -0.0063 -0.0062 -0.0061 -0.0059 -0.0055 -0.0048
Cov
(T−t)H+1/2 -0.0063 -0.0063 -0.0063 -0.0062 -0.0060 -0.0056
0.7 I(k−
t,T) 0.1999 0.1997 0.1991 0.1975 0.1935 0.1833
I(k+
t,T) 0.1997 0.1994 0.1980 0.1952 0.1885 0.1739
Cov -0.0002 -0.0004 -0.0011 -0.0024 -0.0054 -0.0114
I(k+
t,T )−I(k−
t,T )
(T−t)H+1/2 -0.0057 -0.0056 -0.0056 -0.0054 -0.0050 -0.0041
Cov
(T−t)H+1/2 -0.0057 -0.0057 -0.0056 -0.0056 -0.0054 -0.0049
0.9 I(k−
t,T) 0.2000 0.1999 0.1996 0.1984 0.1945 0.1819
I(k+
t,T) 0.1999 0.1997 0.1988 0.1966 0.1901 0.1728
Cov -0.0001 -0.0002 -0.0007 -0.0019 -0.0048 -0.0113
I(k+
t,T )−I(k−
t,T )
(T−t)H+1/2 -0.0050 -0.0050 -0.0050 -0.0049 -0.0045 -0.0034
Cov
(T−t)H+1/2 -0.0050 -0.0050 -0.0050 -0.0050 -0.0048 -0.0043
Table 4: Approximate error of covariance in ρ = −0.8
In addition to the tables, in Figure 1 we plot the ratios (I(k+
t,T) − I(k−
t,T))/Cov for various values
of H and T − t while keeping correlation fixed at ρ = −0.8. In Figure (2) the Hurst parameter is fixed H = 0.3 and T − t and ρ are varied. We observe that the Hurst parameter and time to maturity has a larger impact on accuracy than correlation. The sensitivity of the accuracy to the Hurst parameter is consistent with the fact that the error of the approximation in Corollary 6 is O((T − t)2H+1) (see proof of Theorem 3 in Appendix). For small values of H the error is less for T − t > 1 but converge-
s slower for T − t < 1.
12

0 0.5 1 1.5 2 2.5 3
0.75
0.80
0.85
0.90
0.95
1.00
T−t
(I(k+
t,T) − I(k−
t,T))/Cov
ρ = −0.8
H = 0.1 H = 0.3 H = 0.5
Figure 1: Impact of H and T − t on covariance estimate accuracy
0 0.5 1 1.5 2 2.5 3
0.75
0.80
0.85
0.90
0.95
1.00
T−t
(I(k+
t,T) − I(k−
t,T))/Cov
H = 0.3
ρ = −0.8 ρ = −0.6 ρ = −0.4
Figure 2: Impact of ρ and T − t on covariance estimate accuracy
Lastly we examine the accuracy of approximation (1.3) by plotting the estimated value of H as given by expression (1.3) divided by its exact value. Equation (1.3) requires two value for time to
13

maturity. In the plots we have fixed T1 = 0.0025 and let T2 ∈ {0.005, 0.01, 0.025, 0.05, 0.1, 0.25, 0.5, 1, 2, 3}. In figure 3 the accuracy is shown for ρ = −0.8 and various values for H and T2 − t. In figure 4 we fix H = 0.3 and plot the ratio for different ρ and T2 − t. We observe that for especially for short maturities the simple approximation (1.3) is accurate.
0 0.5 1 1.5 2 2.5 3
0.90
0.92
0.94
0.96
0.98
1.00
T−t
Eq. (1.3)/Exact value
ρ = −0.8
H = 0.1 H = 0.3 H = 0.5
Figure 3: Impact of H and T − t on H estimate accuracy
14

0 0.5 1 1.5 2 2.5 3
0.90
0.92
0.94
0.96
0.98
1.00
T−t
Eq. (1.3)/Exact value
H = 0.3
ρ = −0.8 ρ = −0.6 ρ = −0.4
Figure 4: Impact of ρ and T − t on H estimate accuracy
5 Conclusion
In this paper we have derived rigorous limit theorems for the approximation (1.1). In addition we have noted that it can be used to estimate the value of the Hurst parameter as given by expression (1.3). Numerical runs have confirmed, under the rough Bergomi model, that the approximations are accurate for short times to maturity for different values of the Hurst parameter and correlation. The results are not only of theoretical interest, but also of practical interest. They can, for instance, be u-
sed to calibrate or estimate the Hurst parameter from a limited number of short dated options.
References
[1] Alo` s, E., Le  ́on, J. A. and Vives, J., “On the short-time behavior of the implied volatility for jump-diffusion models with stochastic volatility”, Finance and Stochastics, (2007).
[2] Alo` s, E. and Shiraya, K., “Estimating the Hurst parameter from short term volatility swaps: a Malliavin calculus approach”, Finance and Stochastics, (2019).
[3] Backus, D., Foresi, S. and Wu, L., “Accounting for biases in Black-Scholes”, Available at SSRN: https://ssrn.com/abstract=585623.
[4] Comte, F. and Renault, E., “Long memory in continuous-time stochastic volatility models”, Mathematical Finance, (1998).
15

[5] Fukasawa, M., “Asymptotic analysis for stochastic volatility: martingale expansion”, Finance and Stochastics, (2011).
[6] Fukasawa, M., “Short-time at-the-money skew and rough fractional volatility”, Quantitative Finance, (2017).
[7] Gatheral, J., Jaisson, T. and Rosenbaum, M., “Volatility is rough”, Quantitative Finance, (2018).
[8] Hull, J. and White, A., “The pricing of options on assets with stochastic volatilities”, Journal of Finance, (1987).
[9] Renault, E. and Touzi, N., “Option hedging and implied volatilities in a stochastic volatility model”, Mathematical Finance, (1996).
[10] Rolloos, F., “The future of skew”, Risk, (2022).
[11] Romano, M. and Touzi, N., “Contingent claims and market completeness in a stochastic volatility model”, Mathematical Finance, (1997).
[12] Willard, G.A., “Calculating prices and sensitivities for path-independent securities in multifactor models”, Journal of Derivatives, (1997).
A Greeks
This section shows the proofs of Propositions and Theorems in Section 3. Firstly, we give some Greeks of Black-Scholes formula. A direct calculation gives us that k ∈ R and all u > 0:
(BS−1)′(k, u) = 1
∂BS
∂σ (k, BS−1(k, u)) .
Then it follows that
(BS−1)′′(k, u) = − 1
( ∂BS
∂σ (k, BS−1(k, u)))2
∂2BS
∂σ2 (k, BS−1(k, u)) 1
∂BS
∂σ (k, BS−1(k, u))
=− 1
( ∂BS
∂σ (k, BS−1(k, u)))3
∂2BS
∂σ2 (k, BS−1(k, u)). (A.1)
Now, the classical relationship between the Vomma and the Vega
∂2BS
∂σ2 (k, σ) = ∂BS
∂σ (k, σ) d1(k, σ)d2(k, σ)
σ
allows us to write
(BS−1)′′(k, u) = 1
( ∂BS
∂σ (k, BS−1(k, u)))2
(BS−1(k, u))4(T − t)2 − 4(Xt − k)2
4(BS−1(k, u))3(T − t) .
16

Finally, as
∂BS
∂σ (k, BS−1(k, u)) = exp(Xt)N′(d1 k, BS−1(k, u) )
√
T − t,
the above equality reduces to
(BS−1)′′(k, u) = (BS−1(k, u))4(T − t)2 − 4(Xt − k)2
4(exp(Xt)N′(d1 k, BS−1(k, u) )(T − t))2(BS−1(k, u))3 . (A.2)
B Proofs
Proof of Proposition 2. Proposition 1 gives us that
I (t, T, Xt, k) − Et [vt]
= I0 (t, T, Xt, k) − Et [vt]
+ρ
2 Et
ZT
t
BS−1 ′
(k, Γs) H(s, Xs, k, vs)Φsds
= T1 + T2.
Now we apply the anticipating It ˆo’s formula (see for example Nualart (2005)) to the process
H(t, Xt, k, vt)Ut(k),
and we get
0 = Et
"
H(t, Xt, k, vt)Ut(k)
−
ZT
t
H(s, Xs, k, vs) BS−1 ′
(k, Γs) Φsds
+
ZT
t
∂H
∂s (s, Xs, k, vs)Us(k)ds
+ρ
2
ZT
t
DsW
∂H
∂x (s, Xs, k, vs)Us(k)
!
σsds
+1
2
ZT
t
∂2H
∂x2 (s, Xs, k, vs)σs2Us(k)ds
+1
2
ZT
t
∂2
∂x2 − ∂
∂x
!
H(s, Xs, k, vs) vs2 − σs2 Us(k)ds
#
,
which implies that
T2 = ρ
2 Et
"
H(t, Xt, k, vt)Ut
+ρ
2
ZT
t
DsW
∂H
∂x (s, Xs, k, vs)Us(k)
!
σsds
#
= T1
2 + T2
2.
17

Now, notice that
T2
2 = ρ2
4 Et
"Z T
t
∂ ∂x
∂2
∂x2 − ∂
∂x
!
H(s, Xs, k, vs)σs
ZT
s
DsW σr2 dr
!
Us(k)ds
+
ZT
t
∂
∂x H(s, Xs, k, vs)
ZT
s
BS−1 ′
(k, Γr) DsWΦr dr
!
σsds
#
.
Now the proof is complete. □
Proof of Theorem 3. Proposition 2 allows us to write
I t, T, Xt, k+
t,T − I t, T, Xt, k−
t,T
= I0(t, T, Xt, k+
t,T) − I0(t, T, Xt, k−
t,T )
+ρ
2 Et
hH(t, Xt, k+
t,T, vt)Ut(k+
t ) − H(t, Xt, k−
t,T, vt)Ut(k−
t )i
+ ρ2
4 Et
"Z T
t
∂ ∂x
∂2
∂x2 − ∂
∂x
!
H(s, Xs, k+
t,T, vs)σs
ZT
s
DsW σr2 dr
!
Us(k+
t,T )ds
−
ZT
t
∂ ∂x
∂2
∂x2 − ∂
∂x
!
H(s, Xs, k−
t,T, vs)σs
ZT
s
DsW σr2 dr
!
Us(k−
t,T )ds
+2
ZT
t
∂
∂x H(s, Xs, k+
t,T, vs)
ZT
s
BS−1 ′
k+
t,T, Γr DsWΦr dr
!
σsds
−2
ZT
t
∂
∂x H(s, Xs, k−
t,T, vs)
ZT
s
BS−1 ′
k−
t,T, Γr DsWΦr dr
!
σsds
#
. (B.1)
Now the proof is decomposed into several steps. Step 1 By making use of Proposition 3.1 from Renault and Touzi [9] it can readily be seen that when ρ = 0:
I0(t, T, Xt, k+
t,T) = I0(t, T, Xt, k−
t,T ).
Step 2 As
H(t, Xt, k, vt) = eXtN′(d+ (k, vt))
vt
√
T − t 1 − d+ (k, vt)
vt
√
T−t
!
.
it follows that
H(t, Xt, k+
t,T, vt) = eXt N′(d+ k+
t,T, vt )
2vt
√
T−t


1
vt2(T − t) vt2 + I(k+
t,T)2 (T − t)

 ,
and
H(t, Xt, k−
t,T, vt) = eXt N′(d+ k−
t,T, vt )
2vt
√
T−t


1
vt2(T − t) vt2 − I(k−
t,T)2 (T − t)

 .
Moreover,
(BS−1)′(k, u) = 1
∂BS
∂σ (k, BS−1(k, u)) = 1
exp(Xt)N′(d+ k, BS−1(k, u) )
√
T − t.
18

Then
lTi→mt
ρ
2
H(t, Xt, k+
t,T, vt)Ut(k+
t,T )
(T − t)H+ 1
2
= lTi→mt
ρ
2
eXs N′(d+ k+
t,T, vt )
2vt
√
T−t


1
vt2(T − t) vt2 + I(k+
t,T)2 (T − t)


×
ZT
t
BS−1 ′
k+
t,T, Γs Φsds
=ρ
2 lTi→mt
1
(T − t)H+ 3
2
ZT
t
1
vs
σs
ZT
s
DsW σr2 dr
!
ds
=ρ
2 lTi→mt
1
(T − t)H+ 3
2
ZT
t
ZT
s
DsW σr2 dr
!
ds (B.2)
while
lTi→mt
ρ
2
H(t, Xt, k−
t,T, vt)Ut(k−
t,T )
(T − t)H+ 1
2
= 0. (B.3)
Step 3 A direct computation gives us that
∂ ∂x
∂2
∂x2 − ∂
∂x
!
H(t, Xt, k+
t,T, vt)
= ex
16
N′(d+ k+
t,T, vs )
v9
t (T − t) 5
2
× (T − t)2(I(k+
t,T)8 + 2I(k+
t,T)6vt2 − 2I(k+
t,T )2 v6
t − v8
t ) − 24(T − t)(I(k+
t,T)4vt2 + I(k+
t,T)2vt4) + 48vt4 ,
and
∂ ∂x
∂2
∂x2 − ∂
∂x
!
H(t, Xt, k−
t,T, vt)
= ex
16
N′(d− k−
t,T, vt )
v9
t (T − t) 5
2
× (T − t)2(I(k−
t,T)8 − 2I(k−
t,T)6vt2 + 2I(k−
t,T )2 v6
t − v8
t ) + 24(T − t)(I(k−
t,T)4vt2 − I(k−
t,T)2vt4) + 48vt4 .
Notice that the leading term as T → t is the same in both expressions. Moreover, they appear in (B.1) with different sign. Then straightforward computations allow us to see that the sum of the third and the fourth terms in (B.1) is of order O(T − t)2H+1. Step 4 Notice that
∂H
∂x (t, Xt, k+
t,T, vt) = 1
4
eXt N′(d− k+
t,T, vt )
v5
t
√
T − t 3 (vt2 − I(k+
t,T)2)2(T − t) − 4vt2 ,
19

and
∂H
∂x (t, Xt, k−
t,T, vt) = 1
4
eXt N′(d− k−
t,T, vt )
v5
t
√
T − t 3 (vt2 + I(k−
t,T)2)2(T − t) − 4vt2 .
Notice that, as in Step 3, the leading terms are the same, and they appear in (B.1) with different sign. This allows us to see that the last two terms in (B.1) are of order O(T − t)2H+1. Step 5 Finally, the results in Steps 1, 2, and 3, together with (B.1) allow us to complete the proof. □
20

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:24.813Z
- **Text Length:** 30830 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 20 of 20
