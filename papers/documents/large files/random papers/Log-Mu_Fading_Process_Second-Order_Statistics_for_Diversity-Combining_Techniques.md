# PDF Document: Tenkorang and Yacoub - 2025 - Log-Mu Fading Process Second-Order Statistics for Diversity-Combining Techniques.pdf

**File Path:** Tenkorang and Yacoub - 2025 - Log-Mu Fading Process Second-Order Statistics for Diversity-Combining Techniques.pdf

**Processed Date:** 2026-02-10T18:18:50.883Z

**File Size:** 440.58 KB

**Total Pages:** 5

**Extracted Pages:** 5

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3355

**Title:** Log-Mu Fading Process: Second-Order Statistics for Diversity-Combining Techniques

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Log-Mu Fading Process: Second-Order Statistics for
Diversity-Combining Techniques
Godfred Kumi Tenkorang Department of Communications Faculty of Electrical and Computer Engineering State University of Campinas Campinas, Brazil g218490@dac.unicamp.br
Michel Daoud Yacoub Department of Communications Faculty of Electrical and Computer Engineering State University of Campinas Campinas, Brazil mdyacoub@unicamp.br
Abstract—This paper derives second-order statistics for diversity-combining techniques over Log-mu fading channels. Closed-form expressions for the level crossing rate (LCR) and average fading duration (AFD) are derived for pure selection combining (PSC), while exact multidimensional integral expressions are obtained for equal gain combining (EGC) and maximal ratio combining (MRC). The analysis considers M unbalanced, independent, and non-identically distributed (i.n.i.d.) Log-mu fading channels. -
Monte Carlo simulations are conducted to validate the theoretical results, demonstrating excellent agreement and confirming the accuracy of the proposed expressions. Index Terms—Average fade duration, diversity-combining techniques, level crossing rate, Log-mu fading channels
I. INTRODUCTION
I
N wireless communication systems, the performance of received signals is significantly impacted by fading, which arises primarily from two key phenomena, namely shadowing and multipath propagation. Shadowing, often referred to as long-term fading, is caused by obstacles blocking the line-ofsight (LoS) path, leading to slow variations in signal strength over large distances. In contrast, multipath propagation, also known as short-term fading, arises from the diffraction, reflection, and scattering -
of transmitted signals, causing rapid fluctuations in signal amplitude and phase. A wide range of statistical models have been proposed and extensively studied in the literature to characterize these fading effects. Among these, α-μ arose to explicitly incorporate the concept of the non-linear effects of the propagation medium, rendering it more versatile to characterize short-term fading. Due to its non-linear structure and mathematical tractability, the authors in [1] investigated its suitabilit-
y for composite fading scenarios, which, implicitly, is a non-linear phenomenon. Their study compared the statistical fitting accuracy of the α–μ model with well-established composite fading models, Nakagami–Lognormal, Generalized-K, and Fisher–Snedecor, based on field measurements at 1.8 GHz. Their results demonstrated that the α–μ model either outperformed these benchmarks or achieved comparable performance. Motivated by these findings and the growing need for models that capture
This work was partially supported by the S ̃ao Paulo Research Foundation, FAPESP, (2024/20097-3).
non-linear propagation effects with simpler mathematical formulations, the authors in [2] recently introduced the Log–μ fading model, which is revisited in section II of this paper. As is widely known, the same phenomenon that provokes fading, i.e., multipath, can also be used to counteract its deleterious effects. Hence, diversity combining is a crucial technique in wireless communication systems to improve performance. Evaluating the performance of these techniques relies on key first- and secon-
d-order statistics, for instance, outage probability, LCR, AFD, the latter two providing insight into the temporal dynamics of fading processes. These metrics have been extensively studied for classical fading models [3]–[6], however, their characterization under the recently proposed Log–μ fading channel has not yet been addressed. In this paper, we derive the expressions of the LCR and AFD for the three conventional diversity-combining schemes, namely PSC, EGC, and MRC techniques, in the presenc-
e of M unbalanced, independent, and non-identically distributed (i.n.i.d.) Log–μ fading channels. For the PSC scheme, closedform expressions are obtained, whereas the EGC and MRC statistics are expressed in the form of multidimensional integrals. The analytical derivations are validated through Monte Carlo simulations, confirming the accuracy of the proposed results.
II. THE LOG-μ FADING MODEL REVISITED
In this section, we revisit the Log-μ fading model, originally introduced in [2]. This model considers that the received signal at the receptor arises from the superposition of μ clusters of multipath components propagating through a nonhomogeneous environment. The envelope of the resulting signal is described as a non-linear transformation of the modulus of the sum of these multipath waves, where the non-linearity of the propagation medium is captured by a logarithmic function. Accordingly, the n-
ormalized envelope, Pi = Ri/rˆi, at the i-th branch, i = 1, 2, ..., M , can be expressed as
g(Pi) = log Pi + (1 − si)1/αi
αi
+ si =
μi
X
l=1
(X 2
il + Y 2
il ),
(1)
arXiv:2511.20298v1 [eess.SP] 25 Nov 2025

where αi > 0 and si ∈ R are arbitrary parameters, rˆi is a scale parameter, and Xil and Yil are mutually independent Gaussian processes with zero mean and equal variance. The probability density function (PDF) of the normalized envelope, fPi (ρi), is given as [2]
fPi (ρi) = αi(ρi + (1 − si)1/αi )αi−1μμi
i
Γ(μi)((ρi + (1 − si)1/αi )αi + si)μi+1
× log((ρi + (1 − si)1/αi )αi + si)μi−1,
(2)
where Γ(u) = R ∞
0 xu−1exp(−x)dx is the Gamma function. The parameter αi is unrestricted for si ≤ 1; however, for si > 1, αi must be restricted to odd integers to ensure realvalued expressions. The corresponding cumulative distribution function (CDF) of the normalized envelope, FPi (ρi) is obtained in a closedform as
FPi (ρi) = 1 −
Γ μi, μi log ρi + (1 − si)1/αi αi + si
Γ(μi) ,
(3)
where Γ(u, v) = R ∞
v xu−1 exp(−x)dx is the incomplete Gamma function. A distinctive feature of the Log-μ fading model is its ability to exhibit bimodal characteristics for certain parameter configurations, particularly when α > 1 and s > 1.
III. LEVEL CROSSING RATE AND AVERAGE FADE
DURATION
The LCR is defined as the average number of times a fading signal crosses a given signal level ρ within a certain period of time. The LCR in the positive direction can be obtained by
NP (ρ) =
Z∞
0
ρ ̇fP,P ̇ (ρ, ρ ̇)dρ ̇, (4)
where P ̇ is the time derivative of P , and fP,P ̇ (·, ·) is the joint
PDF of P and P ̇ . The AFD represents the average time the signal remains below the threshold ρ, and it can be expressed as
TP (ρ) = FP (ρ)
NP (ρ) , (5)
where FP (·) is the CDF.
A. No Diversity (M = 1)
These second-order statistics can be derived using any suitable relation between the envelope of the Log-μ model and the envelope of another well-characterized fading model. From (1), it can be observed that the non-linear transformation applied to the received signal relates the Log-μ envelope to the Nakagami-m model through the expression
g(Pi) = P 2
i, N , (6)
where Pi and Pi, N represent the normalized envelopes of the Log-μ and Nakagami-m fading models, respectively.
By differentiating both sides of (6) with respect to time, we obtain
P ̇i = 2 (g(Pi))0.5 P ̇i, N
g′(Pi) , (7)
where g′(Pi) = dg(Pi)/dPi. As presented in [7], the time
derivative P ̇i, N of the Nakagami-m envelope follows a zeromean Gaussian distribution with variance
σ2
P ̇i, N = ω
2
21
μi
, (8)
where ω is the maximum Doppler shift in radians per second. Applying the standard procedure for transformation of random variables to (7), fP ̇i|Pi (·|·) is also found to be Gaussian with zero mean and variance
σ2
P ̇i = g(Pi)ω2
(g′(Pi))2 μi
. (9)
The joint PDF of the envelope and its time derivative is then given as fP ̇i,Pi (ρ ̇i, ρi) = fP ̇i|Pi (ρ ̇i|ρi)fPi (ρi) and by substituting this into (4), the LCR is obtained in closed-form as
NPi (ρ) = σP ̇i fPi (ρ)
√2π . (10)
More explicitly, the LCR for the Log-μ fading envelope is expressed as
NPi (ρ) =
ωμμi−0.5
i log ρ + (1 − si)1/αi αi + si
μi −0.5
√2πΓ(μi) ρ + (1 − si)1/αi αi + si
μi .
(11) The AFD can be derived in a closed-form by substituting (3) and (11) into (5), yielding
TPi (ρ) = √2π ρ + (1 − si)1/αi
αi
+ si
μi
×
Γ(μi) − Γ μi, μi log ρ + (1 − si)1/αi αi + si
ωμμi−0.5
i log ρ + (1 − si)1/αi αi + si
μi−0.5 .
(12)
B. Pure Selection Combining
In PSC, the receiver continuously monitors all branches and selects the one with the highest instantaneous signal envelope. Consequently, the output envelope P at the combiner is defined as
P = max
i=1,...,M{Pi}. (13)
In [8], a general formulation for the LCR of PSC system over M independent fading channels was derived. Based on this formulation, the LCR for PSC over Log-μ fading channels is obtained as

NP (ρ) =
M
X
i=1
NPi (ρ)
M
Y
j=1 j̸=i
FPj (ρ), (14)
where FPj and NPi are given by (3) and (11), respectively. A general formulation for the AFD of PSC system over M independent fading channels has also been derived in [6]. It is expressed as
T −1
P (ρ) =
M
X
i=1
T −1
Pi (ρ), (15)
where TPi is given in our case by (12).
C. Equal Gain Combining
In EGC, the signals received with envelopes ρi are cophased and coherently added. Taking into account the resultant noise power at the combiner output, the overall output envelope P and its time derivative P ̇ are given as
P = √1M
M
X
i=1
Pi and P ̇ = √1M
M
X
i=1
P ̇i. (16)
Following a similar procedure to that in [9], where the distribution of the sum of M independent Rayleigh signals was derived, we obtain the distribution of the Log-μ signals over the M -dimensional volume bounded by the hyperplane
√M ρ = PM
i=1 ρi as
FP (ρ) =
Z
√M ρ
0
Z
√M ρ−ρM
0
···
Z
√M ρ−PM
i=3 ρi
0
Z
√M ρ−PM
i=2 ρi
0
×
M
Y
i=1
fPi (ρi)dρ1dρ2...dρM−1dρM ,
(17) where fPi (ρi) is given by (2). Differentiating (17) with respect to ρ yields the envelope PDF fP (ρ), and using Bayes’ rule, the joint distribution fP,P ̇ (ρ, ρ ̇) is found as (18). The joint density function f (ρ1, ρ2, . . . , ρM , ρ ̇) is expressed as
fP1,...,PM ,P ̇ (ρ1, . . . , ρM , ρ ̇) = fP ̇ |P1,...,PM (ρ ̇|ρ1, . . . , ρM )
×fP1,...,PM (ρ1, . . . , ρM ) (19) where f (ρ ̇|ρ1, . . . , ρM ) is a zero-mean Gaussian distribution with variance σ2
P ̇ = PM
i=1 σ2
P ̇i
/M , and
fP1,...,PM (ρ1, . . . , ρM ) = QM
i=1 fPi (ρi). By substituting (19) into (18) and subsequently incorporating the result into (4), we obtain the expression for the LCR of the EGC system, as presented in (20). The corresponding AFD is then obtained directly with (20), (17), and (4).
D. Maximal Ratio Combining
In MRC, the received signals are co-phased, each signal is amplified appropriately to achieve optimal combining. The resulting signals are then summed, such that the combiner output envelope P and its time derivative P ̇ are given by
P=
v u u t
M
X
i=1
P2
i and P ̇ =
M
X
i=1
Pi P
P ̇i. (21)
The MRC analysis follows the same general procedure as that of EGC. However, in the case of MRC, the distribution is derived over a M -dimensional volume bounded by the hyperplane ρ2 = PM
i=1 ρ2
i . The resulting variance of P ̇ can be expressed as σ2
P ̇ = PM
i=1 P 2
i σ2
P ̇i
/P 2. The CDF is expressed as
FP (ρ) =
Zρ
0
Z
√ρ2 −ρ2
M
0
···
Z
√
ρ2 −PM
i=3 ρ2
i
0
Z
√
ρ2 −PM
i=2 ρ2
i
0
×
M
Y
i=1
fPi (ρi)dρ1dρ2...dρM−1dρM .
(22) The joint PDF fP,P ̇ (·, ·) and the LCR NP (·) are expressed by (23) and (24), respectively. The corresponding AFD is then obtained directly with (24), (22), and (4).
IV. RESULTS
This section presents numerical results to illustrate the derived expressions and validate their accuracy through Monte Carlo simulations. All diversity branches are assumed to be balanced, independent, and identically distributed (i.i.d.), and curves corresponding to single-branch transmission (no diversity) are omitted for clarity. Fig. 1 illustrates the behavior of the LCR and AFD for PSC, EGC, and MRC with M = 2 diversity branches, considering fixed si and αi while varying μi. Fig. 2 presents -
results for the same number of branches with fixed si and μi, varying αi. To further analyze the effect of the arbitrary parameters, Fig. 3 shows plots for M = 2 diversity branches with fixed αi and μi while varying si. The analysis is then extended in Fig. 4 to a four-branch diversity system (M = 4) with fixed si and αi and varying μi. A comparison of Fig. 1 and Fig. 4 shows that, under identical fading conditions, increasing the number of diversity branches enhances the output signal, leading to-
 a notable shift in crossing behavior; lower thresholds are crossed less frequently, while higher thresholds are crossed more frequently, reflecting improved link reliability and reduced occurrence of deep fading. Knowing that the Log-μ PDF can exhibit bimodal behavior for certain parameter configurations, Fig. 5 provides additional insight into this scenario by plotting the LCR and AFD for such parameter sets. This highlights the flexibility of the Logμ model in capturing non-standard fading char-
acteristics.

fP,P ̇ (ρ, ρ ̇) =
√ M
Z
√M ρ
0
Z
√M ρ−ρM
0
···
Z
√M ρ−PM
i=3 ρi
0
× fP1,P2,··· ,PM ,P ̇
√
Mρ −
M
X
i=2
ρi
!
, ρ2, . . . , ρM , ρ ̇
!
dρ2 . . . dρM−1dρM .
(18)
NP (ρ) = √ω2π
Z
√M ρ
0
Z
√M ρ−ρM
0
···
Z
√M ρ−PM
i=3 ρi
0
v u u u u t
g √M ρ − PM
i=2 ρi
g′ √M ρ − PM
i=2 ρi
2
μ1
+
M
X
i=2
g(ρi)
(g′(ρi))2μi
×fP1
√
Mρ −
M
X
i=2
ρi
!M Y
i=2
fPi (ρi)dρ2 . . . dρM−1dρM .
(20)
fP,P ̇ (ρ, ρ ̇) =
Zρ
0
Z
√ρ2 −ρ2
M
0
···
Z
√
ρ2 −PM
i=3 ρ2
i
0
ρ
q
ρ2 − PM
i=2 ρ2
i
× fP1,P2,··· ,PM ,P ̇




v u
u
tρ2 −
M
X
i=2
ρ2
i

 , ρ2, . . . , ρM , ρ ̇

 dρ2 . . . dρM−1dρM .
(23)
NP (ρ) = √ω2π
Zρ
0
Z
√ρ2 −ρ2
M
0
···
Z
√
ρ2 −PM
i=3 ρ2
i
0
1
q
ρ2 − PM
i=2 ρ2
i
v u u u u u u t
g
q
ρ2 − PM
i=2 ρ2
i ρ2 − PM
i=2 ρ2
i
g′
q
ρ2 − PM
i=2 ρ2
i
2
μ1
+
M
X
i=2
g(ρi)ρ2
i
(g′(ρi))2μi
×fP1


v u
u
tρ2 −
M
X
i=2
ρ2
i


M
Y
i=2
fPi (ρi)dρ2 . . . dρM−1dρM .
(24)
Across all scenarios and parameter configurations, PSC consistently demonstrates the lowest performance, whereas EGC and MRC exhibit comparable and superior performance levels, with MRC generally achieving the best overall performance. Finally, Fig. 6 compares the analytical results with Monte Carlo simulations for M = 2 branches, showing excellent agreement and validating the accuracy of the derived expressions.
V. CONCLUSION
In this paper, we derived expressions for the LCR and AFD of PSC, EGC, and MRC techniques over M unbalanced, independent, and non-identically distributed (i.n.i.d.) Log-μ fading channels. For the PSC scheme, exact closed-form expressions for both metrics were obtained, while in the EGC and MRC cases, the solutions were expressed as multidimensional integrals. The analytical results were validated through
Monte Carlo simulations, demonstrating excellent agreement and confirming the accuracy of the proposed expressions.
REFERENCES
[1] A. A. d. Anjos, G. K. Tenkorang, F. C. Martins, E. J. Leonardo, and M. D. Yacoub, “Suitability of α-μ for composite fading modeling,” IEEE Transactions on Antennas and Propagation, vol. 72, no. 4, pp. 3670–3679, 2024. [2] G. K. Tenkorang and M. D. Yacoub, “The Log-μ process,” Proc. XLIII Braz. Symp. Telecommun. Signal Process. (SBrT), 2025.
[3] L. Zeng, X. Liao, Z. Ma, W. Xie, H. Jiang, and Z. Chen, “Envelope level crossing rate and average fade duration of low-altitude uav-to-uav channels,” IEEE Wireless Communications Letters, vol. 13, no. 8, pp. 2220–2224, 2024. [4] C. M. Stefanovic, A. G. Armada, and X. Costa-Pe ́rez, “Second order statistics of -fisher-snedecor distribution and their application to burst error rate analysis of multi-hop communications,” IEEE Open Journal of the Communications Society, vol. 3, pp. 2407–2424, 2022-
.
[5] A. Sauco-Gallardo, U. Fern ́andez-Plazaola, L. Dı ́ez, and E. Martos-Naya, “Higher order statistics in switch and stay diversity systems,” IEEE

-30 -25 -20 -15 -10 -5 0 5 10 15 20
10-4
10-3
10-2
10-1
20Log(ρ)
NP(ρ) / ω
10-2
10-1
100
101
102
103
TP(ρ) ω
μi = 0.5
μi = 1
μi = 1.5
μi = 2
μi = 4.5
μi = 5
μi = 2
Fig. 1. LCR and AFD of PSC, EGC, and MRC techniques over Log-μ fading channels (dashed lines → PSC, solid lines → EGC, dotted lines → MRC, M = 2, si = 1, αi = 1.5, and varying μi).
-30 -25 -20 -15 -10 -5 0 5 10 15 20
10-4
10-3
10-2
10-1
20Log(ρ)
NP(ρ) / ω
10-2
10-1
100
101
102
103
TP(ρ) ω
αi = 0.5
αi = 1
αi = 1.5
αi = 2.5
αi = 4.5
αi = 2 αi = 1.5
Fig. 2. LCR and AFD of PSC, EGC, and MRC techniques over Log-μ fading channels (dashed lines → PSC, solid lines → EGC, dotted lines → MRC, M = 2, si = 1, μi = 2, and varying αi).
Transactions on Vehicular Technology, vol. 66, no. 2, pp. 1222–1232, 2017. [6] D. B. Da Costa, J. C. Silveira Santos Filho, M. D. Yacoub, and G. Fraidenraich, “Crossing rates and fade durations for diversity-combining schemes over α − μ fading channels,” IEEE Transactions on Wireless Communications, vol. 6, no. 12, pp. 4263–4267, 2007. [7] M. D. Yacoub, J. V. Bautista, and L. G. de Rezende Guedes, “On higher order statistics of the nakagami-m distribution,” IEEE Transactions on Vehicular Technolog-
y, vol. 48, no. 3, pp. 790–794, 1999. [8] L. Yang and M.-s. Alouini, “Level crossing rate over multiple independent random processes: an extension of the applicability of the rice formula,”
-30 -25 -20 -15 -10 -5 0 5 10 15 20
10-4
10-3
10-2
10-1
20Log(ρ)
NP(ρ) / ω
10-2
10-1
100
101
102
103
104
TP(ρ) ω
si = -5
si = -1
si = 0.5
si = -1
si = 0.8
si = 1
si = 1
Fig. 3. LCR and AFD of PSC, EGC, and MRC techniques over Log-μ fading channels (dashed lines → PSC, solid lines → EGC, dotted lines → MRC, M = 2, αi = 3, μi = 2, and varying si).
-30 -25 -20 -15 -10 -5 0 5 10 15 20
10-4
10-3
10-2
10-1
20Log(ρ)
NP(ρ) / ω
10-2
10-1
100
101
102
103
TP(ρ) ω
μi = 0.25
μi = 0.5
μi = 1
μi = 5 μi = 1
μi = 4.5
Fig. 4. LCR and AFD of PSC, EGC, and MRC techniques over Log-μ fading channels (dashed lines → PSC, solid lines → EGC, dotted lines → MRC, M = 4, si = 1, αi = 1.5, and varying μi).
-30 -25 -20 -15 -10 -5 0 5 10 15 20
10-4
10-3
10-2
10-1
20Log(ρ)
NP(ρ) / ω
10-1
100
101
102
103
TP(ρ) ω
μi = 1
μi = 1.5
μi = 3
μi = 8 μi = 5
μi = 2
μi = 7
Fig. 5. LCR and AFD of PSC, EGC, and MRC techniques over Log-μ fading channels (dashed lines → PSC, solid lines → EGC, dotted lines → MRC, M = 2, si = 2, αi = 3, and varying μi (bimodal scenario)).
IEEE Transactions on Wireless Communications, vol. 6, no. 12, pp. 42804284, 2007. [9] D. G. Brennan, “Linear diversity combining techniques,” Proceedings of the IRE, vol. 47, no. 6, pp. 1075–1102, 1959.
●
●
●
●
●
●
●
●
●
●
●●●●●●●
● ● ● ● ● ● ● ● ● ●
●
■
■
■
■
■
■
■
■
■■■ ■ ■ ■
■
■
■
■
■
■■
■
▲
▲
▲
▲
▲
▲
▲▲
▲ ▲
▲
▲
▲
▲
▲ ▲
EGC
MRC
PSC
-20 -15 -10 -5 0 5 10 15 20
10-4
10-3
10-2
10-1
20Log(ρ)
NP(ρ) / ω
Fig. 6. Comparison between simulated and theoretical curves (PSC: M = 2, si = 1, αi = 2, μi = 2 , EGC: M = 2, si = 1, αi = 3, μi = 2, MRC: M = 2, si = 1, αi = 4.5, μi = 2).

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:50.883Z
- **Text Length:** 18585 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 5 of 5
