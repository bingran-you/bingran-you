# PDF Document: Belov et al. - 2025 - Trade Execution Flow as the Underlying Source of Market Dynamics.pdf

**File Path:** Belov et al. - 2025 - Trade Execution Flow as the Underlying Source of Market Dynamics.pdf

**Processed Date:** 2026-02-10T18:15:36.944Z

**File Size:** 1577.69 KB

**Total Pages:** 17

**Extracted Pages:** 17

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3534

**Title:** Trade Execution Flow as the Underlying Source of Market Dynamics

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Trade Execution Flow as the Underlying Source of Market Dynamics
Mikhail Gennadievich Belov∗
Lomonosov Moscow State University, Faculty of Mechanics and Mathematics, GSP-1, Moscow, Vorob’evy Gory, 119991, Russia and Autretech Group, Skolkovo Innovation Center, Nobel Street, Building 7, Moscow, 121205, Russia
Victor Victorovich Dubov† and Vadim Konstantinovich Ivanov ‡
Peter the Great St. Petersburg Polytechnic University, 195251, Russia
Alexander Yurievich Maslov ,§ Olga Vladimirovna Proshina,¶ and Vladislav Gennadievich Malyshkin ∗∗
Ioffe Institute, Politekhnicheskaya 26, St Petersburg, 194021, Russia (Dated: June, 6, 2024)
$Id: ExecutionFlow.tex,v 1.120 2025/11/03 10:34:43 mal Exp $
In this work, we demonstrate experimentally that the execution flow, I = dV /dt, is the fundamental driving force of market dynamics. We develop a numerical framework to calculate execution flow from sampled moments using the Radon-Nikodym derivative. A notable feature of this approach is its ability to automatically determine thresholds that can serve as actionable triggers. The technique also determines the characteristic time scale directly from the corresponding eigenproblem. The methodology h-
as been validated on actual market data to support these findings. Additionally, we introduce a framework based on the Christoffel function spectrum, which is invariant under arbitrary non-degenerate linear transformations of input attributes and offers an alternative to traditional principal component analysis (PCA), which is limited to unitary invariance.
I. INTRODUCTION
Modern financial markets display complex dynamics arising from internal and external factors, and from stochastic (or deterministic) processes not linked to any identifiable cause. Since Aristotle [1], this has been a fascinating topic of study, particularly price formation. Price formation driven by market microstructure is the focus of this paper. Most interestingly, the tâtonnement process [2], used as a means to observe supply and demand curves, misses the entire aspect of market dynamics [3].-
 Modern financial markets generate a diverse array of information, including prices, execution volumes across different time scales, limit order book (LOB) data from exchanges, corporate financial reports, sovereign economic indicators, central bank actions, and more. The accessibility, structure, time scale, and impact of this information on market behavior vary significantly. In [4], we formulated the ultimate market dynamics problem: to find evidence of the existence (or proof of the non-existe-
nce) of an automated trading machine that consistently generates positive P&L in a free market as an autonomous agent. In [5], we formulated the problem in weak and strong forms:
• Weak form: Whether such an automated trading
∗ mikhail.belov@tafs.pro † dubov@spbstu.ru ‡ ivvadim@rambler.ru § maslov.ton@mail.ioffe.ru ¶ proshina.ton@mail.ioffe.ru
∗∗ malyshki@ton.ioffe.ru
machine can exist at all using only legally available data. (It can certainly exist in an illegal form—for example, when a brokerage uses client order flow information to frontrun their own clients. Such strategies typically rely on proprietary information about clients’ future supply-demand imbalances and on subsequent monetization of this information.)
• Strong form: Whether such an automated trading machine can exist based solely on transaction sequences — for instance, the historical time series of market observation triples: (time, execution price, shares traded). In this information, supply and demand are matched for every observation: at time t, trader A sold v shares of a security at price P to trader B and received vP dollars. Such a strategy can utilize only information about volume and execution flows.
In this paper, we focus on determining information about the future solely from a sequence of past execution triples: (time,execution price,shares traded). The main result of our previous works [6, 7] is that it is the share execution flow I = dV /dt, rather than the share trading volume V , that drives the market (see Figs. 2 and 3 of Ref. [7]: the asset price exhibits singularities at high I, whereas no price singularity occurs at the maximal volume price – the median of the price-volume distrib-
ution). In other words, it is the execution flow I = dV /dt, not the traded volume, that drives the market. This perspective differs significantly from the commonly studied[8] concept of market impact. The situation is analogous to the difference between Newtonian and Aristotelian dynamics: force causes acceleration vs force causes velocity.
arXiv:2511.01471v1 [q-fin.CP] 3 Nov 2025

2
In this paper, we investigate market microstructure using trading data with sub-microsecond temporal resolution. Previous research initiatives – beginning with the Penn-Lehman Automated Trading (PLAT) project [9] and followed by others [10, 11] among many others have explored the performance characteristics of a variety of automated trading systems. While our group has previously conducted high-frequency trading (HFT) on NASDAQ, the present study focuses primarily on market microstructure analysis-
, emphasizing execution flow as the fundamental driving mechanism of market dynamics. The principal contributions of this work are as follows:
1. Development of a fast and numerically stable method for moment calculation (Section II).
2. Application of this method to real exchange data (Section III).
3. Development of an execution flow estimation methodology (Section IV) and experimental evidence linking execution flow singularities to price singularities. The most important result is the automatic determination of the characteristic time scale from the corresponding eigenproblem.
4. Derivation of a procedure for converting execution flow fluctuations into probabilistic forecasts of price changes (Sections V and VI).
5. Empirical comparison of the derived directional information with observed market behavior (Section VII).
Additionally, we propose a framework based on the Christoffel function spectrum for determining probability contribution components (Appendix C), which is invariant under arbitrary non-degenerate transformations of input attributes. This invariance property provides a significant advantage over conventional principal component analysis (PCA), which is limited to unitary invariance. This paper is accompanied by a software which is available from Ref. [12]; all references to code in the paper corres-
pond to this software. A detailed description of its usage is provided in Appendix D.
II. MOMENT CALCULATION FROM EMPIRICAL SAMPLES
Having established the role of the execution flow I = dV /dt, we now formulate a method for its calculation. For a given time series tl, fl, we introduce the moments ⟨Qjf ⟩ calculated as
⟨Qjf ⟩ =
tZnow
−∞
Qj(x(t))f (t)ω(t)dt
=
X
l
Qj (x(tl))fl ω(l)(tl − tl−1) (1)
this sums the terms from the past till tnow. Here, x(t) is a monotonic function; in this paper, we use either x = (t − tnow)/τ or x = exp((t − tnow)/τ ). The function ω(t) is a decaying weight; in this paper, we consider only an exponential decay, ω = exp((t − tnow)/τ ). The function Qj(x) is a polynomial of degree j. One can simply use, for example, Qj(x) = xj, but it is convenient to employ an arbitrary basis to improve numerical stability. In this paper, we often use the basis of shifted Legend-
re polynomials: Qj(x(t)) = Pj (2 exp((t − tnow)/τ ) − 1), where Pj(x) denotes the Legendre polynomial of degree j. Equation (1) is simply an exponential moving average of Qj(x(t))f (t). For example, a regular moving average price Pma and moving standard deviation σma, calculated from a sequence (tl, Pl), is given by
Pma(tnow) = ⟨Q0P ⟩
⟨Q0⟩ (2)
σ2
ma(tnow) = Q0P 2
⟨Q0⟩ − P 2
ma(tnow) (3)
Equation (1) maps a long sequence of past observations tl, fl to n moments ⟨Qjf ⟩, with j = 0 . . . n − 1. The index j captures contributions from different time scales. If one chooses Qj(x(t)) = exp(i jt/τ ) and ω = 1, the moments ⟨Qjf ⟩ correspond essentially to Fourier amplitudes. In this work, we adopt a decaying weight and an arbitrary basis Qj(x) to improve numerical stability and better capture the dynamics of interest. Given a sequence of (time, execution price, shares traded) as (tl, Pl, -
vl)1 Consider all possible moments that can be calculated from such sequences. They essentially differ only in the choice of integration variable in (1); instead of tl − tl−1, one can use Pl − Pl−1 or Vl − Vl−1 = vl. Formally, consider, for example, I = dV /dt ≈ Vl−Vl−1
tl−tl−1 .
The choice of integration variable allows us to calculate different rates. We now list all the moments that can be calculated by direct sampling using the definition (1) with the following measures:
dt = tl − tl−1 for P kQj (4a)
dP = Pl − Pl−1 for P kQj
dP
dt , P kQjV dP
dt (4b)
dV = Vl − Vl−1 for P kQj
dV
dt (4c)
additionally, other moments, such as P kQj dP V
dt , can be
obtained from these using integration by parts. A fast, efficient, and numerically stable implementation of all these moment calculations in an arbitrary basis Qj is rather complex and has been discussed in [6, 13]. The
1 For convenience, we define vl = Vl − Vl−1 as the number of shares traded at tl, where Vl denotes the total volume traded at or before tl.

3
implementation is available from [12]; see the classes com /polytechnik/trading/{QVMDataM,QVMDataL,QVMDat aP}.java and com/polytechnik/freemoney/{Commonl yUsedMomentsMonomials,CommonlyUsedMomentsLague rre,CommonlyUsedMomentsLegendreShifted}.java for an implementation. An alternative, though not fully rigorous, method of calculation that allows the use of additional measures beyond those in (4) is the “secondary sampling” approach [5], in which a calculated value at tl is treated in (1) as if it we-
re a measured observation. This enables the calculation of a new range of moments. For example, in [5], the maximal eigenvalue of an eigenproblem (14) was used as an integration measure. Note that all the measures in (1) allow us to calculate moments only of the first derivative, such as I = dV /dt, dP/dt, and so on. Moments of second derivatives, such as d2P/dt2 or dI/dt = d2V /dt2 (the latter being particularly important for our future considerations), cannot be obtained from direct sampling. We-
 will discuss approaches for their calculation below. For now, we assume that all necessary first-order derivative moments are calculable and present a few examples of useful calculations with them, followed by a generalization toward a possible solution of the strong form of the ultimate market dynamics problem.
III. AVAILABLE FINANCIAL DATA AND TIME SCALES
In this section, we discuss the available market data, which can be regarded as a form of experimental data against which any theory should be tested. We consider this topic important and therefore include a dedicated section on market data — more precisely, on available trade execution data as a form of measured experimental evidence. After that, we develop an efficient method for computing the moments from this data, which arrive as a continuous stream of individual trades. Our theoretical frame-
work is built upon these moments. The transaction sequence data (tl, Pl, vl) is available across various markets and time scales — from highfrequency exchange trading in liquid markets operating at sub-microsecond intervals, to fixed-income over-thecounter markets with time scales of hours or even days, and to real estate markets where transactions may take months to complete. Derivatives, commodities, and emerging markets also exhibit their own specific characteristics. In our approach, we requir-
e a liquid market with a large number of transactions and active participants. The data must be of high quality and easily accessible at low or no cost. For these reasons, the U.S. equities market is the natural first choice for applying our theory. End-of-day market close data is freely available from numerous sources, such as Yahoo Finance and various data aggregators. However, daily close data is insufficient for applying our theory. The concept of execution flow
maximization requires analysis at the level of individual transactions as they occur in real time from market participants. Moreover, the use of “daily close” data introduces an artificial time scale (one day), which undermines the key strength of our approach — the automatic selection of the relevant time scale based on the maximization of the execution flow. The NASDAQ ITCH feed[14] provides LOB data and full lifecycle information for each order — from its “add order” event to “cancel” or “execu-
te”. However, the daily traded volume on NASDAQ represents only a fraction of the total daily traded volume of the U.S. equities market. Moreover, the primary value of this feed — the limit order book information — has become much less significant. Since approximately 2008–2010, exchange trading has become increasingly similar to dark pool trading. The most typical LOB pattern is now[4] that an added order spends almost no time in the LOB; it is either executed almost immediately or canceled. Empi-
rical observations show that over 90% of orders that reach the best price level at some point are eventually canceled[6, 15]. The current exchange fee structure makes LOB cancellations very cheap, creating a significant incentive for trading algorithms to submit orders for purposes other than actual execution. Executed orders (trades) provide much more meaningful information, since completing a round trip buying and then selling an actual asset – is considerably more costly and risky than simply a-
dding and canceling orders in the LOB. Moreover, current U.S. regulations require that all actual trades be published through the Consolidated Tape System (CTS), which includes execution transactions from all exchanges and dark pools. Historical tapes, known as daily TAQ (Trade and Quote), can be acquired from NYSE[16] at a reasonable cost, or some free samples can be downloaded from their website at https://www. nyse.com/market-data/historical/daily-taq. A single daily TAQ file typically contains-
 over 100 million execution transactions (lines) and exceeds 10 GB in uncompressed size. Across all tickers, the daily volume calculated from the daily TAQ files is slightly higher than the value reported by Yahoo Finance and significantly larger than that computed from the NASDAQ ITCH daily file. In this paper, we primarily use data from NYSE daily TAQ. For the purpose of comparison with our previous works, we also use data from Nasdaq ITCH for September 20, 2012. This date was selected in [6] fo-
r a simple reason: the market exhibited a bear trend before 10:00 and a bull trend with high volatility afterward. Such market behavior often leads to significant losses for automated trading machines. For the purpose of testing, this market data can be viewed as a large file with lines of the form:
NVDA 31556271038450 156.26 3 TSLA 31556274115189 298.7 109 TQQQ 31556285245282 81.88 5 TQQQ 31556335367235 81.8899 5 PLTR 31556335813084 135.48 2

4
P
τ=128 P
τ=512
P
693
694
695
696
697
698
699
9.7 9.8 9.9 10 10.1 10.2 10.3
FIG. 1. An example of regular exponential moving average corresponding to τ = 128s and τ = 512s. Standard deviation is also calculated with the same τ and moving average ± standard deviation is plotted as a thin line in the same color. As τ increases – the moving average “shifts to the right” (τ proportional time delay, lagging indicator). The data is for AAPL stock on September, 20, 2012.
TSLA 31556519786918 298.675 1 NVDA 31556540197765 156.27 1 TSLA 31556542897531 298.6981 3 AAPL 31556561439699 207.2099 6 TSLA 31556591750551 298.7 20 TSLA 31556595205403 298.7 5 PLTR 31556602938660 135.48 5 TSLA 31556640789406 298.7 45
Each line contains the ticker, execution time (in nanoseconds since midnight), execution price, and the number of shares traded. Such a file can be readily computed from NASDAQ ITCH or NYSE daily TAQ, see Appendix D below. The strong form of the ultimate market dynamics problem is equivalent to the existence of a stream processor (possibly with an internal state) that reads such a file line-by-line, updates its internal state, and posts trades that consistently result in a positive P&L. As emphasi-
zed earlier [6], the price prediction problem is distinct from P&L prediction; we will discuss this difference below. For now, let us note that all moments of the form (4) can be efficiently calculated from such a stream using an incremental recurrent update and a Newton-binomial type expansion:
Qj(ax + b) =
j
X
k=0
ckQk(x) (5)
This generalizes the familiar expression (1 + x)j =
Pj
k=0 Ck
j xk to an arbitrary polynomial basis Qj. The exponential weight ω = exp((t − tnow)/τ ) makes this calculation straightforward; if a fixed-window weight function were used, the recurrent calculations would become problematic. Let us provide a simple demonstration. Assume we have obtained three moments: ⟨Q0I⟩, ⟨P Q0I⟩, and P 2Q0I .
Since Q0 is constant, these correspond (up to a constant factor) to volume-weighted (I = dV /dt) P 0, P 1, and P 2, respectively. The moments ⟨Q0⟩, ⟨P Q0⟩, and P 2Q0 represent time-weighted P 0, P 1, and P 2. Using any of these moments, one can construct a moving average (2) and a moving standard deviation (3). In Fig. 1, two volumeweighted moving averages are calculated for τ = 128s and τ = 512s. The time-weighted moving average would be slightly smoother than the volume-weighted version. The x-c-
oordinate, consistent with our previous works, is expressed as a decimal fraction of an hour; for example, 9.75 in plot corresponds to 9:45 am. A ± single moving standard deviation is also shown in the plot. As expected, the moving average is delayed (shifted to the right) by a time scale proportional to τ relative to the actual price, making it a lagging indicator. When the input data undergoes a qualitative regime change, it takes a τ -proportional lag for the moving average to reflect this tran-
sition. Some popular trading strategies use events when the price crosses its moving average as triggers for action. In [6], we discuss the shortcomings of such approaches when operating on a single time scale. As a demonstration, let us present another perspective on the meaning of the moving average. Consider not 3, but 2n + 1 moments P kI , with k = 0 . . . 2n. Now consider the problem of constructing a polynomial of degree n that satisfies the optimization problem of minimizing the square of t-
he polynomial with respect to the measure ⟨·⟩:
D
P n + an−1P n−1 + an−2P n−2 + · · · + a0
2I
E
→ min
(6)
The solution yields an orthogonal polynomial of degree n constructed with respect to the given measure. The roots of this polynomial can be found by solving the following generalized eigenproblem:
n−1
X
k=0
P j P I P k α[i]
k = π[i]
n−1
X
k=0
P j I P k α[i]
k (7)
Here we have changed the notation to Paul Dirac bra–ket notation, a form that will be very useful below. For real matrices, we simply have P j P I P k = P j+k+1I , and P j I P k = P j+kI . As long as the right-hand side matrix P j I P k is positively definite, the problem has n solutions. The n eigenvalues π[i] of the eigenproblem (7) correspond to the n roots of the degree-n polynomial defined in (6). The roots π[i] correspond to the Gaussian quadrature nodes that interpolate the measure used to -
construct the polynomial with an n-point discrete measure. The corresponding weights w[i] can be obtained from the eigenvectors α[i] by evaluating them at corresponding π[i]; alternatively, they can be determined from the Christoffel function. The sum of all weights w[i] equals ⟨I⟩. This is a common method for constructing orthogonal polynomials from a given measure[17] and for finding their roots along with the corresponding measure weights.

5
693
693.5
694
694.5
695
695.5
696
696.5
697
697.5
698
698.5
699
9.7 9.75 9.8 9.85 9.9 9.95 10 10.05 10.1 10.15 10.2 10.25 10.3
P
t
P
FIG. 2. An example of a higher-order orthogonal polynomial root calculated from the moments P kI , k = 0 . . . 2n, is shown for n = 7. Seven roots are obtained, with a substantial volume expected to be traded at each corresponding price level. In this example, the actual measure is approximated by a discrete measure with n = 7 support points. The figure is reproduced from [6].
One can note that the moving average (2) corresponds to the root of an orthogonal polynomial of degree n = 1, which has a single root; the corresponding weight for this node is ⟨I⟩. Given a sufficient number of moments P kI , which can be calculated from the market data as above, one can construct higher-order polynomials and determine their roots. A demonstration from Ref. [6] is shown in Fig. 2 of this paper for n = 7 roots of a polynomial calculated from the moments P kI , k = 0 . . . 2n with τ-
 = 128s. These roots serve as the nodes of a Gaussian quadrature, which approximates the measure used to construct the orthogonal polynomial with a discrete measure at n support points. A quadrature with n = 1 corresponds to a moving average, while a quadrature with n = 2 (two nodes) provides not only the average but also allows the estimation of the distribution’s median and skewness. This is an example of constructing orthogonal polynomials for a single asset. For multiple assets (assuming the p-
rice phase space is relatively stable), such an approach is not directly applicable. A possible alternative is to construct the Christoffel function in the price space of several assets, in a manner similar to that described in Appendix C. For a full basis, this approach provides an analogue of the joint price distribution; selecting a few states with large coverage could potentially create a predictive model (provided the distribution is stable). However, this approach – similar to an orthogonal -
polynomial model – is not dynamic; it is more akin to returning to frequently visited points in the phase space. These demonstrations are simple examples illustrating the potential use of a large number of moments. While they operate on prices and generate charts, they do not directly convey information about market dynamics. Nevertheless, the availability of a large number of sampled moments is valuable, as it allows us to formulate and solve generalized eigenproblems, such as (7). This specific -
eigenproblem primarily serves to plot informative charts that highlight the price levels at which substantial trading oc
curred in the past. A useful application of this orthogonal polynomial technique for market practitioners is as follows. Instead of relying on the commonly used symmetric plots Pma ± σma to determine action thresholds, a substantially better approach is to construct an orthogonal polynomial of degree 2 or 3 and monitor the crossing of the current last price with the minimum or maximum roots π[i] of the polynomial. These roots correspond to the support points of trading volume and can capture distr-
ibution asymmetry and other relevant factors, providing a more informative basis for trading decisions. However, our aim is far more ambitious — understanding market dynamics — and this example was presented solely to illustrate the eigenproblem technique that we actively employ in the subsequent analysis.
IV. EXECUTION FLOW: CALCULATION AND METHODOLOGY
Execution flow I = dV /dt, the number of shares traded per unit time, is a positive quantity — a ratio of two measures ωdV and ωdt — and can be considered as their Radon–Nikodym derivative. To calculate its value at a specific point x, a number of approaches can be applied, from direct interval sampling to a ratio of localized states[6]. Formally, even a least-squares approach can be applied to interpolate dV /dt, for example,
*

I −
n−1
X
j=0
βj Qj (x)


2
+
→ min (8)
ILS(x) =
n−1
X
j,k=0
Qj (x)G−1
jk ⟨QkI⟩ (9)
Gjk = ⟨Qj | Qk⟩ (10)
where G−1 is the inverse of the Gram matrix (10). This expansion uses n moments ⟨QkI⟩ and 2n − 1 moments ⟨Qk⟩ to compute. This approach does not preserve the internal structure of the execution flow (for example, its inherently positive sign) and does not incorporate the full past history in a way that allows determining thresholds, such as whether the execution flow at tnow is small or large. Moreover, expanding the highly fluctuating dV /dt, which varies by many orders of magnitude, in a polynom-
ial basis discards the critical information contained in its spikes.
We need a general method to account for highly fluctuating values over the polynomial moments. The idea is to interpolate not the observed value I, but the probability
density. Consider a function ψ(x) = Pn−1
j=0 αj Qj (x) that defines the density ψ2(x(t))ω(t)dt, and a value expressed as a ratio of two measures, such as I = dV /dt. The value of I corresponding to a given state ψ(x) can then be

6
estimated as measures ratio
Iψ = ⟨ψ | I | ψ⟩
⟨ψ | ψ⟩ =
n−1
P
j,k=0
αj ⟨Qj | I | Qk⟩ αk
n−1
P
j,k=0
αj ⟨Qj | Qk⟩ αk
(11)
Here, we continue to use bra–ket notation; for real matrices, we have ⟨Qj | I | Qk⟩ = ⟨QjQkI⟩, and ⟨ψ | I | ψ⟩ = ψ2I . The (11) expansion uses 2n − 1 moments ⟨QkI⟩ in the numerator and 2n − 1 moments ⟨Qk⟩ in the denominator. The Gram matrix ⟨Qj | Qk⟩ is obtained from ⟨Qk⟩ using the multiplication operator cjmk.
Qj Qk =
j+k
X
m=0
cjk
m Qm (12)
Its form is straightforward for monomial and Chebyshev bases, but can be quite challenging in other cases. See our previous works and the code in [12] for implementation details. Below, we will assume that any matrix ⟨Qj | f | Qk⟩ for j, k = 0 . . . n − 1 can always be obtained from the moments ⟨Qmf ⟩, m = 0 . . . 2n − 2 with (12). In [18], we considered various forms of ψ(x) to interpolate some value in two stages: first, obtaining a state satisfying certain requirements (such as a state ψy(x) lo-
calized at x = y), and then computing the Radon-Nikodym derivative in that state. We do not require this interpolation theory here. The only important feature of (11) in the present context is that it is a ratio of two quadratic forms of equal dimension n, i.e., it is a Rayleigh quotient. If at least one of the two matrices, ⟨Qj | I | Qk⟩ or ⟨Qj | Qk⟩ in (11), is positively definite, then they can be simultaneously diagonalized via a generalized eigenproblem.
I ψ[i]E
= λ[i] G ψ[i]E
(13)
n−1
X
k=0
⟨Qj | I | Qk⟩ α[i]
k = λ[i]
n−1
X
k=0
⟨Qj | Qk⟩ α[i]
k (14)
ψ[i] =
n−1
X
k=0
α[i]
k Qk (15)
Eq. (13) is the bra–ket form of the explicit matrix form (14). This eigenproblem provides a solution for determining whether the current execution flow I is low or high: one can simply compare it’s magnitude with the eigenvalues λ[i], e.g., if the value is close to the λ[maxI], the current I is very high. In most situations, we are interested in determining whether the execution flow “now”, in the state ψ0, is low or high. In this case, it is often more convenient
to consider the state projection ψ0 ψ[maxI] 2, where
ψ0(x) = const ·
n−1
X
j,k=0
Qj (x0)G−1
jk Qk(x) (16)
is the state localized at x0 corresponding to tnow, rather than comparing I0 = ⟨ψ0 | I | ψ0⟩ with λ[maxI]. However,
this is an implementation detail, and the most important features of (14) are:
• Given a sufficiently large n, it contains information about long-past I values. The eigenproblem matrices in (14) incorporate different time scales, with the range of “stored” time scales determined by the value of τ and the problem dimension n. The corresponding realization of an observable in the state ψ(x) is given by the Rayleigh quotient (11).
• The measures ωdV and ωdt enter symmetrically; there are two matrices forming the Rayleigh quotient. To compute the left- and right-hand side matrices in eigenproblem (14), 2n − 1 moments ⟨QjI⟩ and ⟨Qj⟩ are required for each matrix respectively.
• The problem inherently contains thresholds (the eigenvalues λ[i]), making it particularly simple to determine whether the current value is low or high.
• For large enough n, the method can handle large spikes. The approach separates probabilities and values: the situation is analogous to quantum mechanics, where a single “several-orders-off” state essentially does not affect the result if its probability is near zero. This contrasts with L2 approaches, such as in (8), where a single “several-orders-off” observation can completely distort the result.
• The eigenvectors (15) have algebraic properties that are important for our subsequent considerations.
The approach described is a very general method that can be applied to any observable representable as a Radon–Nikodym derivative dμ/dν. One simply constructs two matrices, ⟨Qj | dμ/dt | Qk⟩ and ⟨Qj | dν/dt | Qk⟩, corresponding to the numerator and denominator measures, and then solves the generalized eigenproblem (14). See Ref. [13], Section III, which presents a table of different leftand right-hand side matrices we previously considered. As discussed in [6], when applied to market dynamics, the-
 execution flow I = dV /dt – a highly fluctuating quantity is the most important characteristic. Note that the eigenproblem (7) considered earlier has a similar structure but is applied to price P , with matrices ⟨Qj | P I | Qk⟩ and ⟨Qj | I | Qk⟩. The resulting eigenvalues indicate price levels with high traded volume. For a general basis Qj, this will no longer correspond to an orthogonal polynomial; however, by setting Qj(x(t)) = P j(t) and dV ′ = P dV and dt′ = dV , one recovers (7) exactly fro-
m (14). With dV ′ = P dt and dt′ = dt, one also recovers (7), but the eigenvalues now indicate the price levels at which the most time was spent. Now we present several simple demonstrations of execution flow properties computed from exchange data. Our goal is to illustrate the approach in a way similar to the industry-standard “moving average” concept. We use the basis x = exp((t − tnow)/τ ), ω = exp((t − tnow)/τ ), and Qj(x) as a polynomial of degree j (the result is invariant

7
with respect to the specific choice of polynomial basis). Using these data, we compute 2n − 1 moments ⟨QmI⟩ by direct sampling (1). The calculations are performed at each time t over the interval preceding current tnow – analogous to a moving average – with tnow advancing through the sample. The moments ⟨Qm⟩ are known analytically for the chosen x and ω. All these moments are then used to formulate the eigenproblem (14) and obtain the eigenvalues λ[i] and eigenvectors ψ[i](x). Finally, we compute -
the price P and t−tnow in the state ψ[maxI] corresponding to the maximal eigenvalue λ[maxI] = ψ[maxI] I ψ[maxI] , the states are assumed normalized as ⟨ψ | ψ⟩ = 1.
P [maxI] = ψ[maxI] P I ψ[maxI]
ψ[maxI] I ψ[maxI] (17)
T [maxI] = ψ[maxI] t−tnow
τ I ψ[maxI]
ψ[maxI] I ψ[maxI] (18)
The value of P in the ψ[maxI] state (17) is an important characteristic of our approach to market dynamics[6]. The t−tnow in this state (18) has a much simpler structure than P and allows a straightforward visualization of qualitative “switching” in the structure of the ψ[maxI] state. While the moments ⟨QmI⟩ and ⟨QmP I⟩ are just glorified moving averages, the P [maxI] and T [maxI] are not. There is an additional step – selecting the state ψ[maxI] from the (14) solutions. Thus, the P [maxI] (or T [-
maxI]) can be viewed as a moving average with internal degrees of freedom, a concept we introduced in Ref. [13]. A regular moving average is computed on a past sample by averaging an observable with a density such as ω(t)dt, which remains the same. A moving average with internal degrees of freedom is computed on a past sample by averaging an observable with a density such as ψ2(x(t))ω(t)dt, which changes (according to some equation) as new observations are processed. This is similar to the two-sta-
ge Radon-Nikodym approach of Ref. [18]: first select the state, and then evaluate the observable in that state. For market dynamics, the ψ(x) in the integration density is governed by the generalized eigenproblem (14); the ψ(x) in question is its maximal eigenvector. In Fig. 3, for the same AAPL dataset as in the figures above, we present P [maxI] and T [maxI], along with the maximal and minimal eigenvalues of (14). The value of I at tnow, evaluated as I0 = ⟨ψ0 | I | ψ0⟩, is also shown. Note that -
P [maxI], T [maxI], λ[minI], and λ[maxI] are moving averages with internal degrees of freedom: the state is determined by the eigenvalue problem (14). Contrary to a regular moving average, where it takes a τ -proportional lag to reflect a qualitative regime change (see Fig. 1), a moving average with internal degrees of freedom exhibits an immediate “switch”. It is convenient to look at T [maxI] (18), which grows almost linearly when there is no spike in execution flow and drops to nearly zero duri-
ng an execution spike, when ψ[maxI](x(t)) is localized near tnow
(i.e. when ψ[maxI] ψ0
2 = ψ[maxI](x0)
ψ0 (x0 )
2
is close to 1).
The equation (14) for max I, along with P [maxI], is the
P P[maxI]
I0 λ[minI] λ[maxI] 0.2T[maxI]
692
693
694
695
696
697
698
9.85 9.9 9.95 10 10.05 10.1 10.15
FIG. 3. A demonstration of execution flow. We present the original price P and P [maxI] (17) (light blue). The other plots are shifted to the 693 level and then scaled to avoid cluttering the chart. We also present T [maxI] (18), the minimal and maximal eigenvalues of (14), and I0 = ⟨ψ0 | I | ψ0⟩ (yellow); the result is obtained for n = 12 and τ = 128s. All execution flows are scaled by a factor of 5 · 10−6 to fit the chart. Among the calculated values, only I0 = ⟨ψ0 | I | ψ0⟩ can be regarded as a-
 traditional moving average, since ψ0(x) (16) does not change with the data. The others — P [maxI], T [maxI], λ[minI], and λ[maxI] — can be viewed as moving averages with internal degrees of freedom. One can clearly observe an immediate switch due to these internal degrees of freedom, without the τ -proportional lag typical of regular moving averages shown in Fig. 1.
result we obtained back in [6]. We even constructed a trading strategy that prevents catastrophic losses. The key idea is to predict I = dV /dt, not price. This approach is very accurate: if there is a liquidity excess event (current I0 is large, i.e., ψ[maxI] ψ0
2 > 0.9), then future I0 will be low. Similarly, if there is a liquidity deficit event (current I0 is low, i.e., ψ[minI] ψ0
2 > 0.9), then future I0 will be high. This may seem trivial – alternating periods of low and high liquidity – but it demonstrates that liquidity (not price) undergoes large oscillations, with price changes being a consequence of these liquidity fluctuations. The key element of the strategy is that it trades liquidity: providing liquidity during deficits and taking it during excesses. Specifically, the trader should open a position during liquidity deficits and close it during liquidity excesses. -
The rationale is simple: holding a zero position during liquidity excess makes the system resilient to adverse market moves, while entering a position during liquidity deficits (when volatility is small) allows the strategy to capture the majority of market movement. Our experiments (both paper trading and actual NASDAQ trading in 2010–2012) confirm that this is the only strategy we found that avoids eventual catastrophic P&L loss. A directional trading strategy that is not predisposed to catastro-
phic P&L loss must include at least four types of

8
events:
• Open long position
• Close existing long position
• Open short position
• Close existing short position
Note that a strategy with only two types of events (e.g., when “close existing long” is the same as “open short”) will inevitably fail eventually, resulting in catastrophic P&L loss. Equation (14) indicates when to open a position (current I0 is low) and when to close it (current I0 is large). As shown above, these conditions translate into projections of ψ0 onto ψ[maxI] and ψ[minI]. However, it does not specify the direction of the position when opening: whether to go long or short? One could pot-
entially express this execution flow prediction through volatility trading with options, but this market is much less liquid, and transaction fees prevented us from performing experiments. Since [6], we have devoted substantial effort to determining the direction: whether to open long or short when I0 is low? The best directional indicator we found back then, and failed to improve in subsequent works, is the difference between the last price P last and P [maxI] from (17):
dirdP I = λ[maxI] P last − P [maxI] (19)
Check Fig. 3: you can see fast regime switches and effective tracking of execution flow. However, this result was not accurate enough to construct a profitable trading strategy with our available setup. In this work, we developed a greatly improved directional indicator that brings us close to building such a strategy. This new result is described below.
V. P&L CALCULATION METHODS
Most trading systems focus on price prediction. However, a trader is not actually interested in prices; what matters is the P&L. From our point of view, the P&L, not the price, should be the quantity to predict. Whereas the price P (t) describes the market, the P&L incorporates both market data and trader actions. Let us write a formal expression for the calculation of the P&L of an equity asset. Define the position change dS – the number of shares bought (dS > 0) or sold (dS < 0) during an interv-
al dt. When integrated over the full time horizon, a trading strategy dS must satisfy
0=
Z
dS (20)
This constraint ensures that, for P&L calculation, the position is closed at the end of the investment horizon.
If a trading strategy is not yet closed at tnow, one may formally add a single term −S0 for the currently held position:
S0 =
tZnow
−∞
dS (21)
and define the modified trading strategy
dS′ = dS − S0δ(t − tnow)dt (22)
which satisfies (20). The meaning of this modified strategy is that all held positions are assumed to be sold at tnow; if sold at P last, this corresponds to the calculation of unrealized P&L. For a given strategy dS satisfying (20), its P&L is
P&L = −
Z
P dS (23)
This is the general form of the P&L operator. A simple example: if one buys v shares at P1 and then sells them at P2, the corresponding dS/dt = vδ(t − t1) − vδ(t − t2); substituting into (23) gives P&L = v(P2 − P1). For convenience, it is better to measure dS in the number of shares and use a discrete measure instead of delta functions, i.e., to consider dS/dV and integrate it over dV in (20) and (23), replacing the integral with a sum. Integrating (23) by parts, we obtain a different form of the -
expression, now written in terms of price changes:
P&L =
Z
SdP (24)
S(tstart) = S(tend) = 0 (25)
The constraints (25) explicitly require that the held position S(t) equals zero at both the beginning and the end of the trading interval. This form is less preferable in practice, since integration over dP is harder to perform than integration over a discrete measure dS. The P&L above is presented on a “cash basis”. Initially, a trader holds cash and zero asset positions, trading between them with the goal of ending with zero asset position and a cash position increased by the P&L. One can simila-
rly consider a trading process that results in zero cash position and maximal asset position. In this case, the P&L is measured in units of asset shares, and all P&L operator expressions remain the same. It is also possible to require an explicit percentage split between cash and asset positions to be achieved at the end of the trading strategy. In this case, the P&L operator is modified slightly. In all considerations below, we will use P&L on a cash basis; modifications for asset-based P&L are s-
traightforward. Although asset-based P&L may seem unnatural for equities trading, it is commonly used in currency trading. In Fig. 4, we present a simple demonstration of a trading strategy consisting of ten events (blue dS “impulses”). The position held is obtained by integrating dS, and the P&L is

9
t
P
0
dS S
0
P&L
FIG. 4. A demonstration of P&L calculation according to (23). The discrete measure dS represents the trader’s actions, and its integral S gives the position held. Integrating dS with the asset price yields the P&L. It is important to emphasize that the P&L depends on both the asset price P (t) and the trader’s actions dS.
calculated by integrating P dS (23). The P&L depends on both the asset price P (t) and the trader’s actions dS. The ultimate problem of market dynamics is to construct dS from past observations (tl, Pl, vl) such that it consistently yields a positive P&L. Consider a few trivial strategies that yield a positive P&L. Consider a strategy S(t) = w(t)dP/dt, where w(t) is an arbitrary positive function. For simplicity, assume w = 1, and that dP/dt is zero on the boundaries of the trading interval, thus -
the constraints (25) are satisfied. Substituting this S(t) into (24), we immediately obtain a positive P&L. Differentiating this S, we obtain dS/dt = d2P/dt2. This is an important result: the position increment dS/dt should behave as the second derivative of price. This may look trivial, but it is actually not. The very important point is the symmetry of the trading strategy’s position increment: the position increment should have the symmetry of the second derivative of price. It must change sign-
 for P → −P , and, importantly, must not change sign for t → −t. Trading strategies that do not exhibit this symmetry will not consistently make money. There is a well-known mantra in the HFT community: trade the second derivative of price. Consider a strategy dS = (PmFa − P )dV , where PmFa is the “future” regular moving average of τ scale, calculated on the [tnow, tnow + τ ] interval. Substituting this dS into (23) yields a positive P&L proportional to the standard deviation squared. If using th-
e median price instead of PmFa, the strategy is modified to buy anything below the median price level and sell everything above it. When using, instead of PmFa, the past moving average
Pma (calculated on the past [tnow − τ, tnow] interval), we obtain a typical “mean-reversion” strategy. It may perform adequately as long as there is no large market move. However, when such a move occurs, a catastrophic P&L loss typically results. Consider a strategy dS =
± ψ[minI]2(x(t)) − λ[minI]
λ[maxI] ψ[maxI]2(x(t)) dV , where
ψ[i] are the eigenvectors of (14). This strategy opens a position at P [minI] and closes it at P [maxI]. Whether to go long or short (select the sign of ±) depends on which price is lower. This serves as an example of a strategy where dS is determined by the probability density calculated from (14). These example strategies (along with several others presented in our previous works) present a self-referential problem: to construct a dS strategy with a positive P&L, we need to know future prices. I-
n these examples, we inject future prices into dS to produce a positive P&L from the terms R P dS or R SdP in the P&L operator. Practically, no information about future prices can be used in dS. Yet, to achieve positive P&L, some information “from the future” is required. As discussed in [6], prices cannot serve as such a source. Importantly, any practical dS model must not explicitly depend on asset prices from the future. However, if we examine the execution flow I = dV /dt, we realize that we c-
an have some information “from the future” – specifically, information about the future execution flow. This implies that a dS model should depend on future execution flow only, not future prices. In [4], we introduced the concept of the impact from the future.
VI. IMPACT FROM THE FUTURE
What information about the future can we obtain at t = tnow from past observations of the sequence (tl, Pl, vl)? Given the currently observed value of execution flow I0 = ⟨ψ0 | I | ψ0⟩, we know with certainty that the future execution flow I0F will be greater than I0, since additional trading will inevitably occur in the future. The maximal eigenvalue λ[maxI] of (14) serves as an estimate of the future execution flow I0F :
IF
0 = λ[maxI] (26)
dIF = IF
0 − I0 (27)
dIF ≥ 0 (28)
A very important fact is that the future I estimator, λ[maxI], is calculated based on already executed trades. If trading activity “now” is slow (i.e., I0 is small), this indicates that buyers and sellers are not well matched at the current price, implying that the asset price must adjust. The price movement is expected to occur due to an increase in future I, driven by “future execution”. In this sense, the slower the market is now, the more dramatic the expected price movement in the future. The-
 past most dramatic I, represented by λ[maxI], can therefore

10
serve as a reasonably good estimator (26) of the future dramatic I. Conceptually, this may appear similar to the “reversion to the moving average” type of strategy often applied by market practitioners to asset prices or their standard deviations. However, this analogy is incorrect. Experimental observations [7] show that such reasoning can be applied only to the execution flow I = dV /dt, not to the trading volume, asset price volatility, or any other observable. Moreover, this prediction works o-
nly in one direction — the execution flow tends to increase. A criterion for the absence of information about the future can also be formulated: if the current I0 is close to λ[maxI], it means that we are already in a “very dramatic market” at present, and thus no additional information about the future state of the market can be inferred:
dIF = 0 (29)
In Fig. 3, one can identify the “no information” moments when I0 (yellow line) touches λ[maxI] (top pink line). Similarly, moments of slow current trading activity (where a dramatic price movement is expected in the future) can be identified when I0 is close to λ[minI] (bottom pink line). The question now is how to use the future I (26) to obtain directional price information. One might formally attempt to add some trading volume at t = tnow, as discussed in Section VII.C “Impact From The Future O-
perator” of Ref. [4], but this approach is likely incorrect, since these trades have not yet occurred. Instead, the future I should propagate into the dynamic equation through the boundary condition at t = tnow. As discussed above, a trader should open a position during liquidity deficits and close it during liquidity excesses. This statement defines the trading strategy. In the previous section, we developed a method to compute the strategy’s P&L. Thus, this liquidity trading strategy can be repr-
esented by trading with the following dS:
dS = dI (30)
For this trading strategy, the change in position is equal to the change in execution flow. To calculate its P&L, one needs to integrate (30). Over which time interval? One might think this should be in the ψ[maxI] state with the
measure dμ = ψ[maxI]2(x(t))ω(t)dt, but this measure is localized in the past, and the contribution from tnow, where we know the future I, is small, of order ψ[maxI] ψ0
2.
Based on our previous most successful attempt at a directional indicator (19), it is clear that the strategy should be executed over the interval from the spike in I corresponding to λ[maxI] up to tnow. For the two bases we consider, x = (t − tnow)/τ and x = exp((t − tnow)/τ ) with ω = exp((t − tnow)/τ ), both the infinitesimal time shifts and the partial interval integration preserve the ω(t) weight and the polynomial basis space. This means that integration and differentiation can be expressed v-
ia the same moments (an analogue of integration by parts). If there were no ω(t) weight, this would correspond to plain differentiation and integration operators, but ω(t)
introduces extra terms. The integration with weight corresponding to “since ψ(x) until now” can be obtained via interval partial integration. This transform is analytically known for the two bases we use, see Appendix A of Ref. [13]. Basically, this means that if the value of f in the state ψ is ⟨ψ | f | ψ⟩, then the value of f in the state “since ψ untill now” is Trρf , where the density matrix ρ is calculated from the polynomial ψ2 as described in Appendix A of Ref. [13]. This allows to obtain
f (tnow) − ⟨ψ | f | ψ⟩ = Tr ρ df
dt (31)
This is essentially a glorified integration by parts: the f in the pure state |ψ⟩ can be expressed via df /dt in the mixed state ρ, which is calculated from ψ2 using an integration-like operation, see Section II “Basis Selection” of Ref. [4], Section II “Basic Mathematics” of Ref. [5], and Appendix A of Ref. [13]. Having the method (31) to calculate “since ψ untill now”, let us take f = I and ψ = ψ[maxI], then calculate the density matrix ρ corresponding to the polynomial ψ2(x). We immediately see-
 that if the boundary value I(tnow) equals the impact from the future (26), we have
0 = Tr ρ dI
dt , i.e., it satisfies the P&L constraint (20). In
calculating the P&L for the liquidity trading strategy (30), dI should be used as the position change dS in (23), and the integral should be replaced by a trace with respect to the density matrix ρ. The P&L for the trading strategy (30) provides the directional information. The algorithm is straightforward:
• From past observations, calculate the moments ⟨QmI⟩, construct the matrices ⟨Qj | I | Qk⟩ and ⟨Qj | Qk⟩, solve the eigenproblem (14), and deter
mine λ[maxI] and ψ[maxI].
• Using the procedure of Appendix A of Ref. [13], construct the density matrix ρ from the polynomial
ψ[maxI]2(x); ρ corresponds to the state “since ψ(x) until now”.
• Calculate the P&L for the trading strategy (30)
dirP dI = Tr ρ P dI
dt (32)
which provides the directional information. There is no “−” sign from (23) included in (32) to match our old result (19).
This directional information has a clear meaning: if the current P&L of the trading strategy dS = dI (30) is positive (negative), then it will remain such for some (rather substantial) time in the future. A practical application is that when the current I0 is small (e.g., ψ[minI] ψ0
2 > 0.9) one should open a long (short) position to capture the future dIF (27). There is no such information available from a price move: if the price goes up, it can either continue

11
the trend or bounce back. The difference between a past price move and the P&L (32) is that the P&L preserves its sign for a rather substantial period of time. This is because we determined the optimal time scale of I = dV /dt from (14) by using ψ[maxI] to construct the integration measure in (32) (density matrix ρ).
The only remaining difficulty is calculating the matrix elements Qj P dI
dt Qk required for taking the trace
in (32), an analogue of the P&L integration (23). It would be straightforward if the P dS operator were a full differential. For example, if we formally take the operator dP I
dt as a proxy to P dI
dt , we immediately obtain dir = λ[maxI] P last − P [maxI] , which exactly corresponds to our previous result (19)! However, this is not a proper liquidity trading strategy since it introduces an extra term IdP/dt, but it demonstrates the correctness of our approach. The calculation of the required matrix elements is discussed below in Appendix A. Also see Appendix A of Ref. [13].
VII. DIRECTIONAL INFORMATION: A PRACTICAL DEMONSTRATION
In this section, we present the directional indicators (19) and (32) for the same dataset considered above; the datasets from [16] will be discussed later. The goal of this section is to demonstrate the market microstructure, especially its directional information. One might consider processing the data statistically, but any statistical analysis requires averaging over some time scale, which would prevent us from examining the market microstructure a system that lacks a characteristic time scale -
for which stable statistical properties can be obtained (heteroscedasticity of the market). The only available source of a time scale is the averaging with the density matrix ρ, obtained from the ψ[maxI] solution of (14). Whereas the market itself does not have a characteristic time scale, market participants do — at least the minimal time scale at which they can execute a transaction. An automated trading machine, built based on the time scale obtained from ψ[maxI], also has intrinsic time scales-
. They are determined by τ and the basis dimension n. For the basis x = exp((t−tnow)/τ ), ω = exp((t − tnow)/τ ), the ⟨Qj | I | Qk⟩ matrix has contributions from τ /(2n−1) to τ . For the basis x = (t−tnow)/τ , ω = exp((t − tnow)/τ ), the ⟨Qj | I | Qk⟩ matrix has contributions from τ to approximately 2nτ . Whereas a moving average operates with a single time scale, our approach works with a range of time scales. The solution ψ[maxI] corresponds to the optimal one. In the demonstrations of this sect-
ion, we use n = 12 and τ = 128s. The range may not correspond precisely to any specific market, but the ability to select the proper time scale (from a certain range) is the major result of our work. As discussed above, there should be at least four entry/exit signals. In Fig. 5, we present the directional indicators dirdP I (19) and dirP dI (32). One can clearly see
P P[maxI]
dirdPI/λ[maxI]
dirPdI/λ[maxI]
<ψ[minI]|ψ0>2 if>0.8
<ψ[maxI]|ψ0>2 if>0.8
690
691
692
693
694
695
696
697
698
699
700
9.6 9.7 9.8 9.9 10 10.1 10.2 10.3 10.4 10.5
FIG. 5. The directional information (19) and (32) (shifted to 693 to fit the chart), the price, and P [maxI] (17) are shown above. Below (shifted to 691), we present an indicator of low
I – a possible “entry point”,
D
ψ[minI] ψ0
E2
(if > 0.8), and an
indicator of low I – a possible “exit point”,
D
ψ[maxI] ψ0
E2
(if
> 0.8), shown below the 691 level in the plot.
that they switch when the market conditions change. The older indicator dirdP I [6], having only a positive measure in P [maxI] (17), represents the difference between the last price and the price in the ψ[maxI] state. The indicator dirP dI includes an additional term, dP
dt
dV
dt (A4), which
provides more “forward-looking” information. Empirical results show that the main concept proposed in [13] comparing the terms I dP
dt and P dI
dt – is not particularly
effective. The best directional indicator is obtained from the P dI
dt term in the P&L trading strategy (30). Note
that this strategy assumes very specific entry/exit levels. The corresponding entry/exit points are shown on the same chart as the projections of ψ[minI] and ψ[maxI] on ψ0, exceeding 0.8. They are marked in orange/red on the chart.
This demonstration shows a highly accurate tracking of directional information. Of particular interest is the regime switch at t = 9.97, which is precisely detected by dirP dI (32). A natural question arises: when does this approach fail? Typically, this occurs when the basis dimension n and the parameter τ do not correspond to the actual market dynamics, and the state with the optimal time scale cannot be constructed. Although not shown in the chart, around t = 14.00 the trading data from NASDAQ -
ITCH – used in all charts above – become significantly slower (a few thousand transactions every half hour) compared to the beginning of the trading session (a few thousand transactions every few seconds). Under such conditions, the chosen value n = 12 becomes insufficient to construct a ψ corresponding to a large time scale, and the behavior turns rather random. A distant analogy would be plotting a moving average with a time window τ that is too small.

12
(a) P P[maxI]
dirPdI/λ[maxI]
219
220
221
222
223
224
9.5 9.6 9.7 9.8 9.9 10 10.1 10.2
(b) P P[maxI]
dirPdI/λ[maxI]
219
220
221
222
223
224
10.2 10.3 10.4 10.5 10.6 10.7 10.8 10.9 11
(c) P P[maxI]
dirPdI/λ[maxI]
221
222
223
13.4 13.5 13.6 13.7 13.8 13.9 14 14.1 14.2 14.3 14.4
FIG. 6. The dirP dI (32) is shown for AAPL on 2025.04.01, totaling 594,673 transactions [16]. The dirP dI is filtered by
entry points; its value is displayed only when
D
ψ[minI] ψ0
E2
>
0.8, and otherwise it is set to zero; it is moved to 219 and 221 levels to fit the chart. P [maxI] (17) is also presented. One can see that the term dP
dt
dV
dt (A4) effectively “removes some
signals” compared to dirdP I = λ[maxI] P last − P [maxI] (19).
Periods when the basis dimension n = 12 is insufficient for τ = 128s are also observed.
In our case, this corresponds to τ being so mismatched that the basis of n functions becomes insufficient to construct the proper state.
To demonstrate the approach on appropriate HFT data, we used NYSE TAQ files. This source contains significantly more transactions than NASDAQ ITCH, making it more suitable for our approach. See Appendix D below for
a description of software usage. In Fig. 6, we present data for AAPL stock on 2025.04.01, totaling 594,673 transactions; the data is obtained from [16]. One can see from the figures that the ψ[maxI] state is actually preserved for a substantial period of time. This is why the P&L trading strategy can potentially provide information about the future. The plots also highlight periods when the basis dimension n = 12 is insufficient for τ = 128s. Based on these market observations, we can conclude the-
 following:
• Execution flow, I = dV /dt, is the driving force of the market; price singularities are directly observed in Fig. 3 near large I0, also see [7].
• The state ψ[maxI], corresponding to the maximal execution flow solution of (14), is relatively stable for a time much longer than the price tick interval. This stability allows us to extract information based on the impact from the future assumption (27).
• The method to convert the impact from the future into a possible future price change is the P&L trading strategy, dS = dI (30), by calculating the P&L in the state “since ψ(x) until now” (32).
VIII. CONCLUSION
In this paper, we develop a quantitative approach based on trade execution flow, I = dV /dt. The data typically collected by society consist of individual transactions: side A sells v units of a good to side B at price P , receiving vP dollars. In each such transaction, supply and demand are perfectly matched. Information sources where supply and demand are not matched (such as limit order book or advertisement listings) are much less accessible and collected with far less rigor. In this work, we -
develop a dynamic theory that operates solely on transaction data: instead of stating that price is determined by the balance of supply and demand, we propose that price is determined by the maximum of the execution flow, I = dV /dt, which can be directly observed from transaction data. An original mathematical framework, based on the Radon-Nikodym derivative, is developed to calculate the execution flow from transaction data. The fundamental question is what information about the future is availa-
ble to us. We show that it is information about future execution flow (26). This impact from the future is then converted into the expected price change using the liquidity trading strategy (30), yielding directional information in the form of P&L (32). A demonstration for a single asset is presented using several data samples. The theory can be extended to a multi-asset universe. There are two possible approaches:
• Consider the capital flow for all assets a of interest, dC/dt = P
a P (a)I(a), and formulate a single eigen
value problem similar to (14) for dC/dt instead of dV /dt.

13
• Consider each asset separately, applying its own equation (14) for I(a), and then combine the results as dC/dt = P
a I (a)P (a) last
Our preliminary experiments indicate an advantage of the second approach, since the states of maximal execution flow for different assets may lead or lag each other in a seemingly random manner. While a full understanding of multi-asset dynamics remains a subject of future research, we emphasize that the developed technique for incremental calculation of moments from the execution flow is highly efficient and capable of processing data in real time. Combined with parallelization of solving the eig-
enproblem (14) for each individual asset, we see no obstacles to deploying this approach in real time across the entire U.S. equity market.
ACKNOWLEDGMENTS
This research was supported by Autretech Group, a resident company of the Skolkovo Technopark. We thank our colleagues from the Autretech R&D department who provided insight and expertise that greatly assisted the research. Our grateful thanks are also extended to Mr. Gennady Belov for his methodological support in doing the data analysis.
Appendix A: Calculation of Qj P dI
dt Qk matrix elements from sampled moments
Direct sampling (1) allows obtaining only the moments of first derivatives. Second-order derivatives can be obtained either from secondary sampling or from another type of approximation. The main matrix of interest Qj P dI
dt Qk can be converted, using integration by
parts, to Qj dP I
dt Qk (which is trivial to calculate) and
Qj dP
dt
dV
dt Qk , which is much more difficult to compute.
In Appendix A of Ref. [13], we considered several approximations for calculating the second derivative moments. The main idea for computing the moments of a product of two functions is to introduce a delta-function-type expression.
⟨Qj | f g | Qk⟩ = (A1)
tZnow
−∞
ω(t)dt
tZnow
−∞
dt′Qj(x(t))f (t)δ(t − t′)g(t′)Qk(x(t′))
Then change the integration variable to x and use a reproducing kernel as an approximation of the delta function:
K(x, x′) =
nd −1
X
j,k=0
Qj (x)G−1
jk Qk(x′) (A2)
For a fixed x′ = x0, the reproducing kernel gives a wavefunction localized at x0, e.g., ψ0(x) = const · K(x, x0),
Eq. (16), where const is a normalizing constant such that ⟨ψ0 | ψ0⟩ = 1. If nd = n, then we obtain the familiar approximation for the product of functions[13].
⟨Qj | f g | Qk⟩ ≈
nd −1
X
q,r=0
⟨Qj | f | Qq⟩ G−1
qr ⟨Qr | g | Qk⟩ (A3)
This operator approximation, while being non-Hermitian, creates no problem since it is used only in the calculation of the trace with the Hermitian density matrix ρ, as in (32). Numerical experiments show that it is the moments of dP
dt
dV
dt that are well-approximated in this product
type expression. The moments of functions containing second derivatives (especially of price, e.g.,
D
Qj I d2P
dt2
E
,
D
Qj V d2P
dt2
E
, etc.) are particularly poor in this type of
approximation. For simplicity, we will use f = dP/dt and g = dV /dt, the moments of which are obtained from sampling (1), to estimate Qj dP
dt
dV
dt Qk . This is the sim
plest version of the approximation theory developed in Appendix A of Ref. [13]. An important improvement is that now, in the reproducing kernel (A2), we take the dimension nd > n. This
creates rectangular n × nd matrices Qj dP
dt Qk and
Qj dV
dt Qk , and analytically known Gram matrix (10)
now has dimension nd × nd. Everything else in (A3) remains the same; a typical good value for nd is nd ≳ 2n.
The result is a well-approximated matrix Qj dP
dt
dV
dt Qk
of dimension n × n, which we use to obtain the matrix Qj P dI
dt Qk required for P&L calculation (32) of the
liquidity trading strategy (30).
Qj P dI
dt Qk = Qj
dP I
dt Qk − Qj
dP dt
dV
dt Qk
(A4)
If only the first term, Qj dP I
dt Qk , is retained – then the
new result for directional information (32) corresponds exactly to the old result (19) obtained in Ref. [6].
Appendix B: Solving the Optimization Problem in the Localized Basis
In the considerations above, we studied the states of maximal execution flow, I = dV /dt → max, which led to the eigenproblem (14). We may also consider the states related to a large volume traded in the past. A concept that significantly simplifies this consideration is the Christoffel function:
K(x) = 1
K(x, x) = 1
n−1
P
j,k=0
Qj (x)G−1
jk Qk(x)
(B1)
where K(x, x) is the reproducing kernel (A2), and G−1 is Gram matrix ⟨Qj | Qk⟩ (10) inverse. The Christoffel function has been extensively studied in recent works

14
P P[maxI]
Ploc
[maxI]
0.2T[maxI]
0.2Tloc
[maxI]
692
693
694
695
696
697
698
9.9 9.95 10 10.05
FIG. 7. A presentation of P [maxI] and T [maxI] calculated in the state ψ[maxI] from the solution of (14) (Fig. 3) is compared with the results obtained from the localized optimization (B4); the result is obtained for n = 12 and τ = 128s. One can see very similar results. This confirms that the ψy(x) basis (B3) can be used for optimization problems for which an equivalent eigenproblem is not available.
[19, 20], it is of significant value for data analysis[21]. Among the important results of [18] is the consideration of the Christoffel function spectrum, obtained from the eigenproblem
n−1
X
k=0
⟨Qj | K | Qk⟩ α[i]
k = λ[i]
n−1
X
k=0
⟨Qj | Qk⟩ α[i]
k (B2)
that allows the construction of an invariant expansion a promising basis-invariant alternative to the PCA expansion (which is only unitary-invariant), a transition from variance expansion to coverage expansion. It is based on the eigenproblem (B2), where each eigenvector gives the λ[i] contribution to coverage, with the total coverage being
⟨1⟩ = Pn−1
i=0 λ[i], see Appendix C below. Consider the product of execution flow, I = dV /dt, with the Christoffel function, K(x). Extra terms in the denominator make the problem difficult to approach. However, if we consider only the states localized at x = y, denoted as ψy(x), for y = x0 ψy(x) is just (16),
ψy(x) =
n−1
P
i=0
ψ[i](y)ψ[i](x)
s
n−1
P
i=0
ψ[i](y) 2
=
n−1
P
j,k=0
Qj (y)G−1
jk Qk(x)
s
n−1
P
j,k=0
Qj (y)G−1
jk Qk(y)
(B3)
In this restricted form of ψ, it becomes approachable. Evaluating an operator in the ψy(x) state gives the RadonNikodym approximation [18], which is reduced to a ratio
of polynomials of equal degree
I(y) ≈ ⟨ψy | I | ψy⟩
⟨ψy | ψy⟩ (B4)
=
n−1
P
j,j ′ ,k′ ,k=0
Qj (y)G−1
jj′ ⟨Qj′ | I | Qk′ ⟩ G−1
k′ k Qk (y )
n−1
P
j,k=0
Qj (y)G−1
jk Qk(y)
Compare this expression with the least squares approximation (9), which is a polynomial. The K(y) is known analytically from (B1), obtain:
I(y)K(y) ≈
n−1
P
j,j ′ ,k′ ,k=0
Qj (y)G−1
jj′ ⟨Qj′ | I | Qk′ ⟩ G−1
k′ k Qk (y )
n−1
P
j,k=0
Qj (y)G−1
jk Qk(y)
2
(B5)
The product I(y)K(y), calculated using the RadonNikodym approximation, is reduced to a ratio of polynomials. Contrary to the Rayleigh quotient (11), where the numerator and denominator are of the same degree, for the product I(y)K(y) the denominator degree, 4n − 4, is twice that of the numerator degree, 2n − 2. This means we cannot approach the optimization through an eigenvalue formulation. However, by considering polynomials ratio and using our numerical library [12] for manipulating polynomials-
 in an arbitrary basis Qj, we can find all the zeros of the first derivative of (B5) with respect to y, and then select the one corresponding to the maximal IK; in this way, we reduce the optimization problem to finding the polynomial roots (the zeros of the derivative of (B5)). The cost of this reduction is that the optimization problem is now formulated in the basis of localized states (B3), rather than in the arbitrary basis ψ (15). Before we consider IK, let us compare the two approaches: solv-
e the optimization problem I → max in the localized basis (B4), and then compare the result with that obtained from the eigenproblem (14). The result is presented in the plot in Fig. 7. One can observe that the eigenproblem (14) and the localized optimization (B4) produce very similar results for P and T . This allows us to conclude the validity of localized optimization in the basis of ψy(x) states (B3). Now, having established a technique that takes us beyond the eigenproblem, let us solve the I-
K maximization problem (B5). The IK has the meaning of volume, rather than execution flow I. The state ψy(x) that maximizes (B5) corresponds to the state in which a large trading volume has occurred. Technically, this is an optimization problem of a ratio of two polynomials. The result is presented in Fig. 8. One can observe a similar type of switching, but the K(x) factor makes the switching less likely, as it requires a substantial volume to be traded. The plot demonstrates the validity of the l-
ocalized states ψy (B3) optimization approach.

15
P P[maxI] P[maxIK] 0.2T[maxI] 0.2T[maxIK]
692
693
694
695
696
697
698
9.85 9.9 9.95 10 10.05 10.1 10.15
FIG. 8. A presentation of P [maxI] and T [maxI], calculated in the state ψ[maxI] that maximizes I (14), and P [maxIK] and T [maxIK], corresponding to a localized ψy (B3) that maximizes IK (B5), is shown; the result is obtained for n = 12 and τ = 128s. Both exhibit state switching, but a switch in the states maximizing IK is less likely.
Note that this localized optimization is applicable only for one-dimensional problems. If we were to have a basis of several variables, Qj(y)Qk(z), the optimization (B5) would not allow us to find the roots, whereas the generalized eigenproblem (14) would still be applicable [18].
Appendix C: Christoffel Function Coverage Expansion
The problem (B2) can be generalized to a multidimensional space to construct a coverage-type expansion. Consider a sample in an n-dimensional space x = (x0, x1, x2, . . . , xn−1); in the scalar case, we have xj = Qj(x). We also introduce a measure ⟨·⟩ that enables the calculation of averages ⟨xj | f | xk⟩. The meaning of this average can be, for example, ωdV , ωdt, or a general sample sum. The Gram matrix and the Christoffel function are given by:
Gjk = ⟨xj | xk⟩ (C1)
K(x) = 1
n−1
P
j,k=0
xj G−1
jk xk
=1
n−1
P
i=0
ψ[i]2(x)
(C2)
here, ψ[i] is an arbitrary orthogonal basis, satisfying ψ[i] ψ[j] = δij. Eq. (C2) is a generalization of (B1) to the multi-dimensional space x, the Christoffel function matrix elements are
⟨xj | K | xk⟩ =
*
xj xk
n−1
P
j ′ ,k′ =0
xj′ G−1
j′k′ xk′
+
(C3)
This requires calculating the average of a ratio of two quadratic functions, where the one in the denominator is positively definite. These averages always exist, but their computation is more demanding. Moreover, due to the presence of the denominator term in (C3), they cannot be computed incrementally. A full scan of the entire sample is typically required to construct the matrix ⟨xj | K | xk⟩. Consider the eigenproblem
n−1
X
k=0
⟨xj | K | xk⟩ α[i]
k = λ[i]
n−1
X
k=0
⟨xj | xk⟩ α[i]
k (C4)
ψ[i](x) =
n−1
X
j=0
α[i]
j xj (C5)
From the definition (C2), it immediately follows that all eigenvalues are positive, and their sum equals the total measure of the space considered.
⟨1⟩ =
n−1
X
i=0
λ[i] (C6)
This expansion can be viewed as a generalization of Gaussian quadrature [22], where the weights are λ[i] and the nodes are not discrete measure at n support
points, but n probability densities Kψ[i]2(x), where λ[i] = ψ[i] K ψ[i] . By sorting the eigenvalues λ[i] in descending order, we obtain the factors ψ[i](x) corresponding to a descending contribution to coverage. By selecting a few eigenvectors, we can create a projected state that covers a large portion of the observations, equal to the ratio of the sum of the selected λ[i] to the total sum (C6). This expansion is completely scale-independent, and the result is invariant under an arbitrary non-de-
generate transformation of the x components: x′
j = Pn−1
k=0 Tjkxk.
For a PCA expansion, we need a function f whose standard deviation we calculate, computing the minimal possible least squares
σ2
min =
*

f −
n−1
X
j=0
βj xj


2
+
→ min (C7)
this is essentially (8) in the multi-dimensional case. The standard deviation of f can then be expressed as σ2
min =
(f − f )2 − Pn−1
i=0 σ2
i , where the contributions σ2
i correspond to the eigenvectors of an eigenproblem derived from (C7), obtained by performing an eigen-decomposition of the covariance matrix and expanding f in the resulting eigenbasis. Selecting a few of the largest contributions yields the PCA factors “explanation” of f . This expansion, however, is only unitary invariant (e.g., the solution will change if we rescale one of the xk), and it requires the introduction of some function f , the variation of which is expanded. In contrast, the covera-
ge expansion (C6) requires no function f and directly selects the states with the maximal probability of occurrence. This expansion is

16
of great value for the problem of clustering, where selecting a few most probable states is of critical importance [18]. In some situations, when the behavior of f needs to
be inferred from the behavior of df
dt , it is convenient to
consider the matrix elements of the same structure as in (C3): the average of a ratio of two quadratic functions, where the one in the denominator is positively definite. Similar to the calculation in (4), taking the matrix elements of df /dt replaces the summation over tl − tl−1 with a summation over fl − fl−1. The expression for ⟨·⟩ is identical to (1), except that, instead of a polynomial Qj(x(tl)), we now have a ratio of two quadratic functions
on x(l)
m:
xj K df
dt xk =
*
xj xk df
dt n−1
P
j ′ ,k′ =0
xj′ G−1
j′k′ xk′
+
(C8)
Then we solve a generalized eigenproblem with the matrices
D
xj K df
dt xk
E
and ⟨xj | xk⟩. This approach is analo
gous to the treatment of K dV
dt discussed in Appendix B
above. A trivial example. Let f being some portfolio, and
df
dt being daily portfolio change, xj are the factors affecting
the porfolio value, and the measure ⟨·⟩ is taken as a sum over the days l, with ω(l) = 1. Then the eigenproblem
K df
dt ψ[i] = λ[i] G ψ[i]E
(C9)
expands the P&L contributions by factors. The sum of all eigenvalues λ[i] equals the total change in the portfolio value over the entire period,
D df dt
E
, compare with (C6).
The solution of (C9) can also be interpreted as a form of Lebesgue quadrature, where the weights λ[i] represent P&L contributions (not necessarily positive), and the nodes are not discrete measure at n support points but
rather n probability densities Kψ[i]2(x), where λ[i] =
D
ψ[i] K df
dt ψ[i]
E
; for other forms of Lebesgue quadrature,
see [22]. Note that the observable (total P&L) is obtained as a sum of eigenvalues (Lebesgue weights), representing a form of density matrix average, rather than as a sum of eigenvalues multiplied by squared projections, as in traditional PCA. If the Christoffel function K is not used on the left-hand side – i.e., if we consider an eigenproblem with the matrices
D
xj df
dt xk
E
and ⟨xj | xk⟩ – then the λ[i] would describe
contributions to daily returns, rather than to the total P&L. This situation is similar to that considered in Eq. (14) for calculating the execution flow. It is the presence of K that allows the eigenvalues to describe contributions to the total P&L (rather than to daily changes), which is a significant advantage for risk analysis. Contrary to PCA, where the eigenvalues describe contributions to the variance of f , in (C9) the eigenvalues describe contributions to the probability (with the density
Kψ[i]2(x)), were the P&L given by λ[i]. This allows the expansion (C9) to separately study asymmetric factors that have positive and negative contributions.
Appendix D: Software Usage Description
The software [12] is written in Java. The codebase is fairly large, but all code within the package com/polytec hnik/trading/ – which constitutes the largest part of it – represents our earlier, less successful attempts and has since been converted into unit tests. To test the provided software, install Java 25 or later. Download the source code [12] from the archive AMuseOfCashFlowAndLiquidi tyDeficit.zip, then decompress and recompile it:
unzip AMuseOfCashFlowAndLiquidityDeficit.zip javac -g com/polytechnik/*/*java
Then run the software using the sample data located in the dataexamples/ directory. Here, we use the backslash “\” to split lines to fit the two-column PRE format; BASH interprets it correctly, allowing the commands to be copied directly from the article into the BASH prompt.
java com/polytechnik/algorithms/TestCall_PdI \ --musein_file=dataexamples/aapl_old.csv.gz \ --musein_cols=9:1:2:3 \ --n=12 \ --tau=128 \ --measure=CommonlyUsedMomentsLegendreShifted \ --museout_file=/tmp/museout_PdI_128_12.dat
and
java com/polytechnik/algorithms/TestCall_PdI \ --musein_file=dataexamples/\ taq_AAPL_20250401.csv.gz \ --musein_cols=4:1:2:3 \ --n=12 \ --tau=128 \ --measure=CommonlyUsedMomentsLegendreShifted \ --museout_file=/tmp/mo_PdI_128_12_taq.dat
The file specified with --museout_file= contains the results. The two generated files above include most of the results presented in this paper and are obtained solely from data in the dataexamples/ directory. For a general file from NYSE TAQ [16], one needs to create a .csv file to use as input for --musein_file=. Original daily TAQ files from NYSE are typically not time-sorted; to create a time-sorted file, run:
com/polytechnik/taq/sort_taq_file.sh orig_TAQ.gz
The script sort_taq_file.sh sorts the TAQ records chronologically. The script may need to be edited to adjust the temporary directory, as the generated files are large and a temp directory of over 10Gb is required. The name of the generated file is printed to stdout upon script

17
completion. The resulting sorted file (we recommend compressing and renaming it to sorted_NYSE_TAQ_file.g z) contains all TAQ transactions in chronological order. These “sorted” files, converted from the original TAQ data, can be downloaded from https://mega.nz/folder/uOR jRboa#bnNJnMt0bQRMkgLvhf5Xuw. Next, the data must be filtered to extract only execution transactions for the required stocks. To do this, run:
java com/polytechnik/taq/\ TAQPrintOutput\$DumpTickersExe \ sorted_NYSE_TAQ_file.gz \ >/tmp/all_NYSE_TAQ.csv 2>/tmp/diag.cap
This script generates the file all_NYSE_TAQ.csv containing (ticker,time,price,shares) data, which can be used with the code presented in this paper. The file diag.ca p contains stock trading volumes and traded capital; it is required to select the instruments of interest and to verify that the calculated volumes match those reported
for that day, e.g., by Yahoo Finance. If the output needs to be filtered for specific stocks, such as AAPL, add a stock filter list after the input filename.
java com/polytechnik/taq/\ TAQPrintOutput\$DumpTickersExe \ sorted_NYSE_TAQ_file.gz AAPL \ >/tmp/AAPL_NYSE_TAQ.csv 2>/tmp/diag.cap
The resulting four-column file, AAPL_NYSE_TAQ.csv, can be used as demonstrated above. It can be gzip-compressed for convenience. For some selected assets, pre-generated files are available at https://mega.nz/folder/uORjRbo a#bnNJnMt0bQRMkgLvhf5Xuw. Thus, the conversion software of NYSE TAQ data to .csv format is tested for the latest version, TAQ v4.2. The creation of .csv files from the NASDAQ ITCH feed [14] is described in Appendix A of Ref. [7]. Currently, only ITCH 4.1 is implemented; conversi-
on for ITCH 5.0 is straightforward but has not yet been completed.
[1] K. Polanyi, Aristotle discovers the economy, Trade and market in the early empires , 64 (1957).
[2] L. Walras, Elements of pure economics: Or the theory of social wealth (Routledge, 2013). [3] J. Donier and J.-P. Bouchaud, From Walras’ auctioneer to continuous time double auctions: A general dynamic theory of supply and demand, Journal of Statistical Mechanics: Theory and Experiment 2016, 123406 (2016). [4] V. G. Malyshkin, Market Dynamics. On A Muse Of Cash Flow And Liquidity Deficit, ArXiv e-prints 10.48550/arXiv.1709.06759 (2017), arXiv:1709.06759 [qfin.TR]. [5] V. G. Malyshkin, Market Dy-
namics: On Directional Information Derived From (Time, Execution Price, Shares Traded) Transaction Sequences, arXiv preprint arXiv:1903.11530 10.48550/arXiv.1903.11530 (2019). [6] V. G. Malyshkin and R. Bakhramov, Mathematical Foundations of Realtime Equity Trading. Liquidity Deficit and Market Dynamics. Automated Trading Machines, arXiv preprint arXiv:1510.05510 10.48550/arXiv.1510.05510 (2015). [7] V. G. Malyshkin, Market Dynamics. On Supply and Demand Concepts, ArXiv e-prints (2016), http://arx-
iv. org/abs/1602.04423, arXiv:1602.04423.
[8] F. Bucci, M. Benzaquen, F. Lillo, and J.-P. Bouchaud, Crossover from linear to square-root market impact, Physical review letters 122, 108302 (2019). [9] M. Kearns and L. Ortiz, The Penn-Lehman automated trading project, IEEE Intelligent systems 18, 22 (2003). [10] B. LeBaron, Agent-based computational finance, Handbook of computational economics 2, 1187 (2006). [11] J. B. Chakole, M. S. Kolhe, G. D. Mahapurush, A. Yadav, and M. P. Kurhekar, A Q-learning agent for automated trading in equity s-
tock markets, Expert Systems with
Applications 163, 113761 (2021). [12] V. G. Malyshkin, The code for polynomials calculation (2014), http://www.ioffe.ru/LNEPS/malyshkin/ code.html and an alternative location. [13] V. G. Malyshkin and M. G. Belov, Market Directional Information Derived From (Time, Execution Price, Shares Traded) Sequence of Transactions. On The Impact From The Future, arXiv preprint arXiv:2210.04223 10.48550/arXiv.2210.04223 (2022).
[14] Nasdaq OMX, NASDAQ TotalView-ITCH 4.1 , Report (Nasdaq OMX, 2014) see sample data files at https:// emi.nasdaq.com/ITCH/ and newest version specification TotalView-ITCH 5.0. [15] N. Hautsch and R. Huang, Limit order flow, market impact and optimal order sizes: Evidence from nasdaq totalviewitch data (2011).
[16] NYSE, Daily TAQ Client Spec v4.2 , Report (NYSE, 2025) see sample data files at https://ftp.nyse.com/ Historical%20Data%20Samples/DAILY%20TAQ/, which provide two days of free data every quarter. [17] V. Totik, Orthogonal Polynomials, Surveys in Approximation Theory 1, 70 (11 Nov. 2005). [18] V. G. Malyshkin, On The Radon-Nikodym Spectral Approach With Optimal Clustering, arXiv preprint arXiv:1906.00460 10.48550/arXiv.1906.00460 (2019). [19] J.-B. Lasserre and E. Pauwels, The empirical Christo-
ffel function with applications in data analysis, Advances in Computational Mathematics , 1 (2019). [20] J. B. Lasserre, A disintegration of the Christoffel function, Comptes Rendus. Mathématique 360, 1071 (2022).
[21] J.-B. Lasserre, Moments, positive polynomials and their applications, Vol. 1 (World Scientific, 2009). [22] V. G. Malyshkin, On Lebesgue Integral Quadrature, arXiv preprint arXiv:1807.06007 10.48550/arXiv.1807.06007 (2018).

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:36.944Z
- **Text Length:** 81986 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 17 of 17
