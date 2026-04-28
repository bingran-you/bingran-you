# PDF Document: Grendar - 2025 - Wilcoxon-Mann-Whitney Test of No Group Discrimination.pdf

**File Path:** Grendar - 2025 - Wilcoxon-Mann-Whitney Test of No Group Discrimination.pdf

**Processed Date:** 2026-02-10T18:18:47.974Z

**File Size:** 313.05 KB

**Total Pages:** 6

**Extracted Pages:** 6

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3390

**Title:** Wilcoxon-Mann-Whitney Test of No Group Discrimination

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

WILCOXON-MANN-WHITNEY TEST OF NO GROUP
DISCRIMINATION
M. GRENDA ́ R
To George Judge, centenarian
Abstract. The traditional WMW null hypothesis H0: F = G is erroneously too broad. WMW actually tests narrower H0: AUC = 0.5. Asymptotic distribution of the standardized U statistic (i.e., the empirical AUC) under the correct H0 is derived along with finite sample bias corrections. The traditional alternative hypothesis of stochastic dominance is too narrow. WMW is consistent against H1: AUC ̸= 0.5, as established by Van Dantzig in 1951.
1. Introduction
The Wilcoxon-Mann-Whitney (WMW) test statistic [13, 9] is the U -statistic U =P
i
P
j 1{Xi > Yj}. Its standardized version U/(n1n2) [3] is the empirical
AUC (eAUC = Pˆ(X > Y )), cf. [10], connecting the familiar rank-based framework to discrimination analysis. WMW is traditionally stated to test H0: F = G against H1: F ̸= G or alternatives of stochastic dominance. This formulation appears in most statistical textbooks [8] and software implementations [11]. We argue this formulation is incorrect.
2. Theoretical Evidence Against Traditional H0
Consider two independent samples from N (0, σ12) and N (0, σ22) with σ1 ̸= σ2. Here F ̸= G due to different variances, so the traditional null hypothesis H0: F = G is false and H1: F ̸= G holds. However, Monte Carlo simulation demonstrates that the test statistic eAUC concentrates asymptotically on 0.5 - the value expected under a true null hypothesis. The simulation (10,000 replications, σ1 = 0.1, σ2 = 3, n1 = n2 = n = 1000) yields empirical mean 0.5000069 and SD 0.01554. This agrees closely with-
 the theoretical asymptotic distribution N (1/2, 1/(4n)) derived under H0: AUC = 0.5, which predicts SD = 0.01581 for n = 1000. The empirical AUC concentrates precisely on 0.5 despite the traditional H0: F = G being false. This creates a logical contradiction: if WMW tested distributional equality, the test statistic should not concentrate on its null value when distributions clearly differ. Though the Gaussian example invalidates the traditional claim that WMW tests H0: F = G, it does not specify-
 the maximal class of alternatives that WMW can detect. This is provided by Van Dantzig [12] who proved that WMW is consistent against alternatives H1: AUC ̸= 0.5, where AUC = P (X > Y ) for independent observations from the two populations. For sufficiently small significance levels,
1
arXiv:2511.20308v1 [stat.ME] 25 Nov 2025

2 M. GREND  ́AR
the test is consistent against no other alternatives. This consistency characterization establishes that WMW tests H0: AUC = 0.5, detecting systematic pairwise dominance rather than general distributional differences.
3. The Most General Alternative Hypothesis of WMW
Traditional alternative hypothesis of WMW test is H1: F ̸= G, cf. [8]. Lehmann [8] notes that not all pairs of distributions F ̸= G are of equal relevance, and then defines stochastic dominance as the alternative hypothesis of interest. This restriction is unnecessarily narrow. Van Dantzig’s consistency result shows WMW detects any departure from AUC = 0.5. This includes cases where distributions cross multiple times, violating stochastic dominance assumptions, yet systematic pairwise advantage ex-
ists. The correct alternative H1 : AUC ̸= 0.5 subsumes stochastic dominance as a special case while capturing the full range of discrimination patterns WMW can detect.
4. Asymptotic Distribution of Empirical AUC Under the Null Hypothesis H0: AUC = 0.5
4.1. General Framework. Consider the general setup with identically and inde
pendently distributed (i.i.d.) random variables taking values in R: X1, . . . , Xn1
i.i∼.d.
F , Y1, . . . , Yn2
i.i∼.d. G. Let n = n1 + n2, λn = n1
n → λ ∈ (0, 1). A = R F dG is 0.5
by assumption. And Aˆ is an estimator of A
Aˆ = (n1n2)−1
n1
X
i=1
n2
X
j=1
1{Xi < Yj}.
4.2. U-statistic Central Limit Theorem. From the general two-sample U-statistic
CLT: √n(Aˆ − A) −d→ N (0, σ2), σ2 = ζ12
λ + ζ22
1 − λ, where
(1)
ζ2
1 = Var(G(X)) =
Z
G2 dF −
Z
G dF
2
,
ζ2
2 = Var(F (Y )) =
Z
F 2 dG −
Z
F dG
2
.
Under the assumption, R G dF = 0.5 and R F dG = 0.5, so (1) simplifies to
ζ2
1=
Z
G2 dF − 0.25,
ζ2
2=
Z
F 2 dG − 0.25.
4.3. Placement Variables. Define the placement variables
U := G(X) ∼ H1, V := F (Y ) ∼ H2.
Since F and G are continuous, U and V are uniform on [0, 1] if and only if F = G. In general, they follow distributions H1, H2 on [0, 1] satisfying
E[U ] = 0.5, E[V ] = 0.5.

WILCOXON-MANN-WHITNEY TEST OF NO GROUP DISCRIMINATION 3
Then
ζ2
1 = Var(U ) = E[U 2] − 0.25,
ζ2
2 = Var(V ) = E[V 2] − 0.25.
Hence σ2 = Var(U )
λ + Var(V )
1−λ .
4.4. Asymptotic Distribution. Under the restriction R F dG = 0.5:
√n(Aˆ − 0.5) −d→ N (0, σ2),
σ2 = Var(G(X))
λ + Var(F (Y ))
1−λ .
4.5. Consistent Variance Estimation. Compute the empirical placement values
Gˆ(Xi) = n−1
2
n2
X
j=1
1{Yj ≤ Xi},
Fˆ(Yj) = n−1
1
n1
X
i=1
1{Xi ≤ Yj}.
Then
Vdar(G(X)) = (n1 − 1)−1
n1
X
i=1
(Gˆ(Xi) − 0.5)2,
Vdar(F (Y )) = (n2 − 1)−1
n2
X
j=1
(Fˆ(Yj) − 0.5)2,
and σˆ2 = Vdar(G(X))
λn
+
Vdar(F (Y )) 1 − λn
is consistent for σ2. Therefore,
Aˆ ± zα/2 · √σˆn
provides an asymptotically valid (1 − α) confidence interval for A = 0.5.
4.6. Finite Sample Bias Correction. Under the restriction A = R F dG = 0.5 but F ̸= G, we derive bias correction using general U-statistic theory.
4.6.1. Bias of Naive Estimators. Let ζ12 = Var(G(X)) and ζˆ12 = (n1−1)−1 Pn1
i=1(Gˆ(Xi)−
0.5)2. Since Gˆ(·) is the empirical CDF of the Y -sample:
Gˆ(x) = G(x) + ∆2(x), where ∆2(x) =
pR2(x)
n2
and R2(x) ≈ G(x)(1 − G(x)) · n2.
A first-order stochastic expansion gives
E[ζˆ2
1] = ζ2
1− 1
n2
E[G(X)(1 − G(X))] + o(1/n2).

4 M. GREND  ́AR
Therefore, the finite-sample bias is
Bias1 = − 1
n2
E[G(X)(1 − G(X))].
An analogous calculation for the second term yields
Bias2 = − 1
n1
E[F (Y )(1 − F (Y ))].
4.6.2. Bias-Corrected Estimators. Estimate the expectations by the plug-in principle:
ωˆ1 = 1
n1
n1
X
i=1
Gˆ(Xi)(1 − Gˆ(Xi)),
ωˆ2 = 1
n2
n2
X
j=1
Fˆ(Yj)(1 − Fˆ(Yj)).
The bias-corrected estimators are
(2)
Vdar∗(G(X)) = (n1 − 1)−1 X
i
(Gˆ(Xi) − 0.5)2 + ωˆ1
n2
,
Vdar∗(F (Y )) = (n2 − 1)−1 X
j
(Fˆ(Yj) − 0.5)2 + ωˆ2
n1
.
4.6.3. Final Variance Estimator. Insert (2) into the Welch-type combination:
σˆ2
adj = Vdar∗(G(X))
λn
+
Vdar∗(F (Y )) 1 − λn
,
with λn = n1/n. Use σˆ2
adj together with Welch-Satterthwaite degrees of freedom for the combined variance estimator:
df = (σˆ2
adj)2
[
Vdar∗ (G(X ))/λn ]2
n1−1 + [Vdar∗(F (Y ))/(1−λn)]2
n2 −1
and the t-quantile tα/2,df to obtain
Aˆ ± tα/2,df · σˆadj
√n .
4.7. Higher-Order Correction. For enhanced finite-sample performance, a databased correction that reduces remaining bias:
(3) σˆ2
final = 1 − 1
n1
−1
n2
· σˆ2
adj.
Equation (3) provides O(n−2) coverage accuracy for any continuous F, G with A = 0.5.
4.7.1. Summary. Whenever the true AUC is 0.5, the empirical AUC is asymptotically normal:
(1) √n(Aˆ − 0.5) −d→ N (0, σ2), σ2 = Var(G(X))
λ + Var(F (Y ))
1−λ , with consistently estimable variance via the bias-corrected estimators.

WILCOXON-MANN-WHITNEY TEST OF NO GROUP DISCRIMINATION 5
4.8. R implementation. Traditional asymptotic p-values are derived under H0: F = G and employ variance estimation appropriate for that hypothesis. However, as demonstrated above, WMW actually tests H0: AUC = 0.5. This discrepancy leads to miscalibrated inference, particularly under heteroscedasticity. Even in the location-shift special case where H0: F = G ⇔ H0: AUC = 0.5 the variance estimation under the F = G framework can differ from that under the correct AUC = 0.5 framework, leading to differ-
ent p-values. The correct asymptotic p-values and finite-sample bias corrections derived under H0: AUC = 0.5 are implemented in the R package wmwAUC, available from [7].
5. Notes
For historical precision, Van Dantzig [12] formulated the alternative hypothesis in terminology that would today be stated as ’the Area above the Ordinal Dominance Graph ̸= 0.5’. The Area above the Ordinal Dominance Graph [2] corresponds to the AUC. For application of the dominance statistic in psychology, see [4]. Notably, Van Dantzig [12] paired his AUC-based alternative hypothesis H1: AUC ̸= 0.5 with the traditional null hypothesis H0: F = G. This creates a logical inconsistency, as H0: F = G i-
s not the proper complement to H1: AUC ̸= 0.5. The correct pairing is H0: AUC = 0.5 versus H1: AUC ̸= 0.5. The condition P (X ≤ Y ) ≥ 1/2 is defined in [1] as stochastic precedence. Under location-shift assumption, the traditional H0: F = G and the correct H0: AUC = 0.5 are mathematically equivalent. However, the asymptotic distributions used to derive p-values differ between the two frameworks, leading to different variance estimation and potentially different inference. While this work focuses o-
n continuous random variables, the core critique of traditional hypothesis formulations extends to discrete cases, though the positive characterization of what WMW tests becomes more complex due to tied observations. Similar issues arise in k-sample extensions (Kruskal-Wallis test), though the correct characterization requires investigation beyond the present scope. Recent work has begun addressing limitations of traditional nonparametric frameworks. Conroy [5] highlighted misinterpretations of WM-
W as testing median equality, emphasizing its role as measuring P (X > Y ). In [6], the authors developed measures of disagreement when stochastic dominance assumptions fail. The present work provides a more fundamental resolution by establishing the correct null hypothesis and complete characterization of WMW sensitivity.
Acknowledgments
Valuable discussions with Claude AI Sonnet 4 (Anthropic, 2025) and Kimi AI (Moonshot AI, 2025), which contributed to refining ideas presented in this work, are gratefully acknowledged. After using these tools the author reviewed and edited the content as necessary and takes full responsibility for the content of the publication.
References
1. Miguel A Arcones, Paul H Kvam, and Francisco J Samaniego, Nonparametric estimation of a distribution subject to a stochastic precedence constraint, Journal of the American Statistical Association 97 (2002), no. 457, 170–182.
2. Donald Bamber, The area above the ordinal dominance graph and the area below the receiver operating characteristic graph, Journal of mathematical psychology 12 (1975), no. 4, 387–415.

6 M. GREND  ́AR
3. Zygmund William Birnbaum, On a use of the mann-whitney statistic, Proceedings of the Berkeley Symposium on Mathematical Statistics and Probability, vol. 1, University of California Press, 1955, p. 13.
4. Norman Cliff, Dominance statistics: Ordinal analyses to answer ordinal questions., Psychological bulletin 114 (1993), no. 3, 494.
5. Ron ́an M Conroy, What hypotheses do “nonparametric” two-group tests actually test?, The Stata Journal 12 (2012), no. 2, 182–190. 6. E del Barrio, JA Cuesta-Albertos, and C Matr ́an, Invariant measures of disagreement with stochastic dominance, The American Statistician (2025), 1–13. 7. Marian Grend ́ar, wmwAUC, https://github.com/grendar/wmwAUC, 2025, GitHub repository. 8. Erich Leo Lehmann and Howard JM D’Abrera, Nonparametrics: statistical methods based on ranks, Holden-Day, 1975.
9. Henry B Mann and Donald R Whitney, On a test of whether one of two random variables is stochastically larger than the other, The annals of mathematical statistics (1947), 50–60.
10. Margaret Sullivan Pepe, The statistical evaluation of medical tests for classification and prediction, Oxford university press, 2003.
11. R Core Team, R: A language and environment for statistical computing, R Foundation for Statistical Computing, Vienna, Austria, 2021.
12. David Van Dantzig, On the consistency and the power of wilcoxon two sample test, Proceedings of the Berkeley Symposium on Mathematical Statistics and Probability, Ser. A., vol. 54, 1951, pp. 1–8. 13. Frank Wilcoxon, Individual comparisons by ranking methods, Biometrics bulletin 1 (1945), no. 6, 80–83.
1 Laboratory of Bioinformatics and Biostatistics, Biomedical Centre Martin, Jessenius Faculty of Medicine, Comenius University, Slovakia. 2 Laboratory of Theoretical Methods, Institute of Measurement Science, Slovak Academy of Sciences, Slovakia. 3 Bioptic Laboratory Ltd., Czech Republic.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:47.974Z
- **Text Length:** 12225 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 6 of 6
