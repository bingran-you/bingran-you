# PDF Document: Shen et al. - 2025 - Asymptotic linear dependence and ellipse statistics for multivariate two-sample homogeneity test.pdf

**File Path:** Shen et al. - 2025 - Asymptotic linear dependence and ellipse statistics for multivariate two-sample homogeneity test.pdf

**Processed Date:** 2026-02-10T18:18:03.323Z

**File Size:** 836.41 KB

**Total Pages:** 19

**Extracted Pages:** 19

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3408

**Title:** Asymptotic linear dependence and ellipse statistics for multivariate two-sample homogeneity test

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Asymptotic linear dependence and ellipse statistics for
multivariate two-sample homogeneity test
Chifeng Shena, Yuejiao Fua,∗, Michael Chena, Xiaoping Shib
aDepartment of Mathematics and Statistics, York University, Toronto, ON M3J 1P3, Canada
bDepartment of Computer Science, Mathematics, Physics and Statistics, University of
British Columbia, Kelowna, BC V1V 1V7, Canada
∗Correspondence: yuejiao@yorku.ca
Abstract
Statistical depth, which measures the center-outward rank of a given sample with
respect to its underlying distribution, has become a popular and powerful tool in
nonparametric inference. In this paper, we investigate the use of statistical depth
in multivariate two-sample problems. We propose a new depth-based nonparametric
two-sample test, which has the χ21 asymptotic distribution under the null hypothesis.
Simulations and real-data applications highlight the efficacy and practical value of the
proposed test.
MSC (2020): Primary 62G10
Keywords: multivariate two-sample test, statistical depth, elliptical distribution, homogene
ity test
1 Introduction
The objective of the multivariate two-sample homogeneity test is to determine whether two
observed multivariate datasets stem from the same underlying distribution. The alternative
hypothesis characterizes discrepancies between distributions, typically in terms of a location
shift, a scale change, or a combination of both. The two-sample homogeneity test is crucial
in numerous fields and essential for informed decision-making and inference. For instance,
researchers in behavioral ecology often need to differentiate between the central tendencies
1
arXiv:2511.19381v1 [stat.ME] 24 Nov 2025

of two samples (Neuhäuser and Ruxton, 2009). Financial analysts frequently compare
financial metrics such as returns, volatility, and correlations of two investment portfolios
to evaluate their performance and risk (Rachev et al., 2007). In microbiology, researchers
analyze differential abundance between two conditions (Banerjee et al., 2019). Two-sample
homogeneity tests allow researchers to gain deeper insights into underlying patterns and
disparities in data, thereby enhancing decision-making processes.
For univariate data, the classical parametric test is the two-sample t-test, which compares
the means of two samples drawn from normally distributed populations with equal variance.
Hotelling’s T 2 test extends this approach to multivariate data analysis (Lawley, 1938; Hotelling,
1951). However, the normality assumption for multivariate data is often challenging to
validate. To overcome the limitations of parametric methods, various non-parametric two
sample homogeneity tests have been developed. Cramér test is consistent and invariant with
respect to orthogonal linear transformations and sensitive against location shifts (Baringhaus
and Franz, 2004). The Energy Distance test proposed by Székely and Rizzo (2004) measures
the discrepancy of underlying distributions based on the Euclidean distance between sample
elements, and performs particularly well in high dimension. The connection between the
multivariate Wasserstein test and the Energy Distance test was explained by Ramdas et al.
(2017). Additionally, kernel-based two-sample homogeneity tests have been proposed, which
use the maximum mean discrepancy (MMD) to detect mean differences (Gretton et al., 2012;
Zhang and Smaga, 2022).
Many robust inference methods have been proposed in the literature, leveraging the
natural center-outward ranking provided by multivariate statistical depths (Liu et al., 1999).
Zuo and Serfling (2000) provided the general notion of depth function and its desirable
statistical properties for multivariate data. Based on the concept of data depth and motivated
by the quality control problem, Liu and Singh (1993) proposed a multivariate rank-based
test. They proposed a quality index, Q(F, G), which measures the overall outlyingness
of one distribution G with respect to its reference distribution F . Let x1, x2, · · · , xm and
y1, y2, · · · , yn be two independent samples raised from the distributions F and G, respectively.
For a depth function D, Q(F, G) = ∫ R(y; F )dG(y), where R(y; F ) = ∫ 1{D(x;F )≤D(y;F )}dF (x).
Given the two-sample data, the quality index Q(F, G) can be estimated by Q(Fm, Gn), where
Fm and Gn are the empirical distributions. Later, Zuo and He (2006), Shi et al. (2023) and
Gnettner et al. (2024) proved the conjectured limiting distribution of the Liu-Singh statistic
under different sets of regularity conditions. One major drawback of the Liu-Singh statistic
lies in the asymmetry in the pair of sample quality indexes, i.e., Q(Fm, Gn) ̸= Q(Gn, Fm),
leading the test result to depend on the choice of the reference distribution. Liu and Singh
(1993) discussed a symmetrized modification by using the pooled sample to calculate the
2

depth value. Liu and Singh (2006) and Chenouri et al. (2011) extended the Liu-Singh test to
multi-sample multivariate scale test. They also generalized the Siegel-Tukey (Siegel and Tukey,
1960) and Ansari-Bradley (Ansari and Bradley, 1960) scale tests for the multivariate data
setting. Recently, not limiting to the scale test, several new statistics have been proposed by
combining pairwise Liu-Singh statistics to restore symmetry in the two samples. For example,
Shi et al. (2023) proposed the Weighted average statistic Wm,n(ω) and the Maximum statistic
Mm,n. Gnettner et al. (2024) also investigated extensively variations of the Liu-Singh statistic
with clear geometric illustrations and extended the tests from multivariate to functional data.
Inspired by the work of Shi et al. (2023) and Gnettner et al. (2024), we propose a new
statistic that combines the pair of Liu-Singh statistics, boosting the power of the two-sample
homogeneity test. This statistic leverages the complementary strengths of the pair of Liu
Singh statistics to deliver more accurate and reliable results. The main idea is to design the
non-rejection region of the proposed test to enhance its power while ensuring the significance
level remains controlled, leveraging information from the null limiting distribution of the
test statistic. As illustrated by an example in Figure 1, the pair of statistics represents the
Liu–Singh statistics computed using Mahalanobis depth. The specific distributions used are
detailed in the Appendix B. Under the alternative hypothesis, the generated points (colored)
may appear anywhere around those generated under the null hypothesis (black). Therefore, it
is crucial for the non-rejection region to be smaller, well-defined, and closed, while adequately
covering enough points generated under the null hypothesis. More broadly, this approach can
be extended to pairs of statistics that are asymptotically linearly dependent, and elliptical
(see Def 1).
Figure 1: Black Points: F = G; Points in other color: F ̸= G. The number of replications is 1000, and m = n = 800.The pairs (Q(Fm, Gn), Q(Gn, Fm)) represent the Liu–Singh statistics.
3

Definition 1. Let xm = (x1, x2, · · · , xm) ∈ X and yn = (y1, y2, · · · , yn) ∈ Y be the samples
drawn from distribution F and G, respectively. Consider two statistics h1(xm, yn) and
h2(xm, yn). For m, n → ∞, m
m+n → τ for some 0 < τ < 1, if
√ mn
m+n


h1(xm, yn) − a
h2(xm, yn) − b


−d→ z,
where a, b ∈ R, z ∼ MVN
(


0
0

,


σ2
1 ρσ1σ2
ρσ1σ2 σ2
2


)
, ρ ∈ [−1, 0) ∪ (0, 1], and σ1, σ2 >
0. Then, the two statistics h1(xm, yn) and h2(xm, yn) are called asymptotically linearly
dependent, and elliptical (ALDE).
Remark 1. When ρ = 0, the pair of statistics is asymptotically linearly independent. The
scatter plot of the pairs of statistics forms a standard ellipse with a shifted center.
Definition 2. Let m, n ∈ Z+, θ ∈ [− π
2, π
2 ], and C, λ > 0.
ER(m, n, θ, λ, C) =
{
(u, v)| mn
m+n


u
v


T


cos2 θ + λ sin2 θ (1 − λ) sin θ cos θ
(1 − λ) sin θ cos θ sin2 θ + λ cos2 θ




u
v

≤C
}
is called an elliptical region.
For the pair of ALDE statistics (h1(xm, yn), h2(xm, yn)), we propose the elliptical non
rejection region with the following parameter specifications. The ratio of the minor axis to
the major axis of the ellipse, λ, depends on the prior information. The counterclockwise
rotation angle, θ, equals π
2 + arctan ν2
ν1 , where (ν1, ν2)T is the eigenvector corresponding to the
largest eigenvalue of the variance-covariance matrix. The value of C depends on the limiting
distribution, and the significance level. This can be visualized in Figure 2 based on cases I
and II as follows.
Let F = G ∼ N (2, 3), and h1(xm, yn) = 1
m
∑m
i=1 xi.
Case I: Let h2(xm, yn) = 1
m+n
∑m
i=1
∑n
j=1(xi + yj).
Case II: Let h2(xm, yn) = − 1
m+n
∑m
i=1
∑n
j=1(xi + yj).
The paper is outlined as follows. In Section 2, we propose the new multivariate two
sample homogeneity test statistic and establish its null limiting distribution. The motivation
behind the new test is further elucidated through geometric illustrations, providing a visual
understanding of the conceptual framework. In Section 3, simulation studies demonstrate the
good performance of the proposed test using three different depth functions: Mahalanobis
depth (Liu and Singh, 1993), Spatial depth (Serfling, 2002; Vardi and Zhang, 2000; Pokotylo
4

Figure 2: Left plot: Case I; Right plot: Case II. The number of replications is 1000, and m = n = 50. The blue circle is the ellipse with α = 0.05, and λ = 0.3.
et al., 2019), and Projection depth (Liu, 1992; Zuo and Serfling, 2000). Two real data
examples are shown in Section 4. Conclusions and future work are presented in Section 5.
2 Main Results
Consider two d-dimensional samples x1, x2, · · · , xm and y1, y2, · · · , yn randomly and indepen
dently raised from the distributions F and G, respectively. For a depth function D, Liu and
Singh (1993) introduced the relative deepness of a point y with respect to the probability
measure F as follows,
R(y; F ) =
∫
1{D(x;F )≤D(y;F )}dF (x).
With the reference distribution F , the Liu-Singh statistic is defined as
Q(F, G) =
∫
R(y; F )dG(y).
Without the information about the distributions F and G, the empirical distributions Fm
and Gn can be used for the following sample version,
R(yj; Fm) = 1
m
m
∑
i=1
1{D(xi;Fm)≤D(yj ;Fm)},
Q(Fm, Gn) = 1
n
n
∑
j=1
R(yj; Fm).
In general, the Q-statistics are asymmetric, leading to a different test decision when the
reference distributions are exchanged. To tackle the drawback, Shi et al. (2023) introduced
5

the weighted average statistic Wm,n(ω) and maximum statistic Mm,n as follows,
Wm,n(ω) = 12mn
m+n
[
ω
(
Q(Fm, Gn) − 1
2
)2 + (1 − ω)
(
Q(Gn, Fm) − 1
2
)2]
, (2.1)
where 0 ≤ ω ≤ 1.
Mm,n = 12mn
m + n max{
(
Q(Fm, Gn) − 1
2
)2,
(
Q(Gn, Fm) − 1
2
)2}. (2.2)
There are various statistical depth functions that can be applied for the new test. In this
paper, we focus on Mahalanobis depth, Spatial depth, and Projection depth, which are
reviewed below.
For any observation x ∈ Rd and a given d−dimensional distribution F , the Mahalanobis
depth (Liu and Singh, 1993) of x with respect to the distribution F is defined as follows,
M D(x; F ) = 1
1 + (x − μF )T Σ−1
F (x − μF ) ,
where μF and ΣF are the mean and variance-covariance matrix of F. The Spatial depth (also
L1−depth) (Serfling, 2002; Vardi and Zhang, 2000; Pokotylo et al., 2019) of x with respect
to the distribution F is defined as follows,
SD(x; F ) = 1 − ||EX
(x − X)
||x − X||||,
where X ∼ F. The projection depth (Liu, 1992; Zuo and Serfling, 2000) is defined as
P D(x; F ) = 1
1 + O(x; F ) ,
where O(x; F ) = sup||ν||=1
|νT x−M ed(νT X)|
Med|νT X−Med(νT x)| , X ∼ F, and M ed is the median function.
Given a d dimensions dataset x = {x1, x2, · · · , xm} and a point x in Rd, the sample
versions for these depths are adapted as follows.
• Mahalanobis Depth
M D(x; Fm) =
√
(x − x ̄)T S−1(x − x ̄),
where x ̄ is the sample mean vector, and S is the sample variance-covariance matrix
matrix.
• Spatial Depth
SD(x; Fm) = 1 − || 1
m
m
∑
i=1
(x − xi)
||x − xi|| ||.
6

• Projection Depth
P D(x; Fm) = 1
1 + O(x; Fm) ,
where
O(x; Fm) = sup
||ν||=1
|νT x − M ed1≤i≤m(νT xi)|
M ed1≤i≤m(|νT xi − M ed1≤j≤m(νT xj)|)
For a given depth function D(·; ·) with 0 ≤ D(x; H) ≤ 1, (Gnettner et al., 2024) proposed
four conditions on depths as follows,
(A1) P(D(X, F ) ∈ [y1, y2]) ≤ C|y2 − y1|β for positive constants C, β and any y1, y2 ∈ R≥0,
for some 1/2 < β ≤ 1.
(A2) E
(
supx∈Ω |D(x, Fm) − D(x, F )|2β)
= O(m−β) with 1/2 < β ≤ 1 as in A1.
(A3) There exist a deterministic constant Cdet and an index m0 such that for every m ≥
m0: supx∈Ω
∣ ∣
∣D(x, Fm) − D(x, F −{1}
m)
∣ ∣
∣ ≤ Cdet
m almost surely, where F −I
m for some I ∈
{1, . . . , n} is the empirical probability measure with respect to {Xi : i ∈ {1, . . . , n} \ I}.
(A4) Let X be an independent copy of X1, . . . , Xm. Then, for any constant C > 0, it holds
E
( [
P
(∣ ∣
∣D(X1, F −{1}
m ) − D(X, F −{1}
m)
∣ ∣
∣≤ C
m
∣ ∣ ∣ ∣
X2, . . . , Xm
)]2)
= O(m−2β)
with 1/2 < β ≤ 1 as in A1.
Zuo and He (2006) showed that, under their regularity conditions, Q(Fm, Gn) − 1
2=
1
2 − Q(Gn, Fm) + op(n−1/2) + op(m−1/2) . Under the same conditions, (Shi et al., 2023)
established that the asymptotic distribution of both statistics Wm,n(ω) and Mm,n is χ2
1. The
result also holds under the assumptions A1-A4 from Gnettner et al. (2024).
The geographic illustration shows the shape of the non-rejection region (Gnettner et al.,
2024). When α = 0.05 and m = n = 300, Figure 3 plots non-rejection regions of the
weighted average statistics Wm,n(ω) and maximum statistic Mm,n, covering 1,000 points
of (Q(Fm, Gn), Q(Gn, Fm)) computed using Mahalanobis depth under the null hypothesis,
F = G = N (⃗0, I2).
In Figure 3, the non-rejection region of Wm,n(ω) is a standard ellipse, and the region
of Mm,n is a square. Both have the center ( 1
2, 1
2 ). The points of (Q(Fm, Gn), Q(Gn, Fm))
tend to centralize to the point ( 1
2, 1
2 ) along the line Q(Fm, Gn) + Q(Gn, Fm) − 1 = 0 as
min(m, n) → ∞. To increase the power with controlling type I error, it is reasonable to create
a non-rejection region which is symmetric about the point ( 1
2, 1
2 ) and spread along the line
7

Figure 3: The non-rejection regions of Wm,n for ω = 0.1, 0.5, 0.9 and Mm,n, when α = 0.05. The black points are 1,000 (Q(Fm, Gn), Q(Gn, Fm)) computed using Mahalanobis depth under the null hypothesis, F = G = N (⃗0, I2).
Q(Fm, Gn) + Q(Gn, Fm) − 1 = 0. Thus, the ellipse statistic R(λ, θ, Fm, Gn) is conducted as
follows,
R(λ, θ, Fm, Gn) = 12mn
m+n
⃗QT


cos2 θ + λ sin2 θ (1 − λ) sin θ cos θ
(1 − λ) sin θ cos θ sin2 θ + λ cos2 θ

 ⃗Q (2.3)
where ⃗Q =


Q(Fm, Gn) − 1
2
Q(Gn, Fm) − 1
2

, λ is the ratio of minor axis to major axis of the ellipse, and θ
is the counterclockwise rotation angle.
Under conditions A1-A4 and the null hypothesis, we show that the proposed test statistic
has a simple
[
1 + λ − (1 − λ) sin 2θ
]
χ2
1 asymptotic distribution, as stated in the following
theorem.
8

Theorem 1. Given two d-dimensional random samples x1, x2, · · · , xm and y1, y2, · · · , yn
raised independently from the distributions F and G, respectively. Let Fm and Gn be the
corresponding empirical distributions. Let A1-A4 hold true and, for m, n → ∞,
m
m + n → τ for some 0 < τ < 1.
Under the null hypothesis H0 : F = G,and min(m, n) → ∞, we have R(λ, θ, Fm, Gn) −d→
[
1 + λ − (1 − λ) sin 2θ
]
χ2
1.
The Proof of the theorem 1 is presented in Appendix A.
Remark 2. Wm,n(ω) is a special case of 1
1+λ−(1−λ) sin 2θ R(λ, θ, Fm, Gn). They are equivalent
when θ = 0 and λ = 1−ω
ω.
Remark 3. It is easy to show that under the null hypothesis, F = G, with the critical value from
the asymptotic distribution, the intersection points between the boundary of the non-rejection
region and the line are Q(Fm, Gn)+Q(Gn, Fm)−1 = 0 are

  
  
Q(Fm, Gn) = 1
2±
√
(m+n)χ2
1−α (1) 12mn
Q(Gn, Fm) = 1
2∓
√
(m+n)χ2
1−α (1) 12mn
for Wm,n(ω), Mm,n, and R(λ, θ, Fm, Gn). In other words, the λ supply a flexibility to adjust
the shape of non-rejection region created by R(λ, θ, Fm, Gn).
Figure 4: The non-rejection region of rotated ellipse statistic R(λ, θ, Fm, Gn) for λ = 0.1, 0.4, 0.7, 1 with θ = π
4 and for θ = 0, π
4, 1
2 π with λ = 0.3, when α = 0.05.
Figure 4 shows non-rejection regions of R(λ, θ, Fm, Gn) for different values of λ and θ with
α = 0.05. When θ = π
4 , one axis of the ellipse lies along the line Q(Fm, Gn)+Q(Gn, Fm)−1 = 0,
and it is symmetric about the point ( 1
2, 1
2 ). Moreover, with a fixed θ, the ellipse becomes more
9

flatten along one axis as the value of λ decreasing. It is nature to set θ = π
4 and then choose
an appropriate λ to control the area of ellipse. The Equation 2.3 can be modified as follows,
Em,n(λ) = Rm,n(λ, π
4 , Fm, Gn)
= 6mn
m+n
[
(1 + λ)(Q(Fm, Gn) − 1
2 )2 + (1 + λ)(Q(Gn, Fm) − 1
2 )2
+ 2(1 − λ)(Q(Fm, Gn) − 1
2 )(Q(Gn, Fm) − 1
2)
]
According to the Theorem 1, 1
2λ Em,n(λ) −−d→ χ2
1.
Figure 5: The non-rejection region for Mm,n and Em,n(λ) for λ = 0.3, 1, when α = 0.05. The black points are 1,000 (Q(Fm, Gn), Q(Gn, Fm)) computed using Mahalanobis depth under the null hypothesis, F = G = N (⃗0, I2).
Figure 5 compares the non-rejection region for Mm,n and Em,n for λ = 0.3, 1, when
α = 0.05 and m = n = 300. The black points are 1,000 (Q(Fm, Gn), Q(Gn, Fm)) computed
using Mahalanobis depth under the null hypothesis, F = G = N (⃗0, I2). Clearly, the ellipse
can cover more points with a smaller area than the square. In other words, compared
with square, the ellipse improves the power of the proposed test and controls the type I
error simultaneously. In the next section, the simulations are conducted to compare the
performances between different statistical tests.
10

3 Simulation Studies
The simulation studies are conducted to compare the performance of the proposed tests in
the finite two-sample problem. Two random samples x1, x2, · · · , xm and y1, y2, · · · , yn are
randomly drawn from distributions F and G, respectively. Compared with other two-sample
homogeneity tests such as MANOVA, Energy, and Wasserstein, Wm,n(ω) and Mm,n have
better performance (Shi et al., 2023). Therefore, we examine the empirical size and power of
Mm,n, Wm,n(ω) and Em,n(λ) using Mahalanobis depth, spatial depth, and projection depth,
with λ = 0.1, 0.3, 0.5, 0.7, 1. To estimate the empirical power, the critical value from the
asymptotic distribution is replaced by a value derived from the empirical quantile of simulated
observations under the null hypothesis. For the sample size, we consider n = m and n = 1
2 m,
where m = 100, 200, · · · , 1000.
The Type I error is considered at first. Assuming F = G follow a bivariate normal
distribution, N (⃗0, I), with mean ⃗0 and identity covariance matrix I2×2. Since Wm,n(0.5) and
Em,n(1) are equivalent, we compare α = 0.05 with the empirical size of the test statistics,
Em,n(λ) for λ = 0.1, 0.3, 0.5, 0.7, 1, Mm,n and Wm,n( n
m+n ) with 10,000 repetitions.
Figure 6: Comparison of empirical size of three statistics, Em,n(λ) and Mm,n for m = 100, 200, · · · , 1000 and n = m (1st row) or m = 2n (2nd row). Three depth functions are adopted: Mahalanobis depth (1st column), Spatial depth (2nd column), and Projection depth (3rd column). λ = 0.1, 0.3, 0.5, 0.7, 1.
Figure 6 shows the comparisons of empirical size and the theoretical Type I error. For
11

Em,n(λ), the empirical size is closer to α = 0.05 as increasing the value of λ for small sample
size, but the difference becomes smaller as λ ≥ 0.3. Compared with Mm,n, Em,n(λ) can
approach the theoretical Type I error with smaller sample size. Overall, the empirical size of
Em,n(λ) is closer to α = 0.05 for all three depth functions, except λ < 0.3 under small sample
sizes.
Next, we consider the empirical power for these statistics: Mm,n and Em,n(λ) with
λ = 0.1, 0.3, 0.5, 0.7, 1 We also consider the sample sizes n = m and n = 1
2 m, where
m = 100, 200, · · · , 1000. The empirical power is studied for α = 0.05 with 1,000 repetitions
under the following three alternative hypotheses.
1. Two bivariate normal distribution with a scale change, Ha : F ∼ N (⃗0, ( 10 01 )) vs
G ∼ N (⃗0, ( 1 0.5
0.5 1 )).
2. Two bivariate normal distributions with a mean change, Ha : F ∼ N (⃗0, ( 10 01 )) vs
G ∼ N (( 0.35
0.35 ), ( 10 01 )).
3. Two bivariate normal distributions with the scale and mean change, Ha : F ∼ N (⃗0, ( 10 01 ))
vs G ∼ N (( 00..33 ), ( 1 0.4
0.4 1 )).
Figure 7: Power comparison under alternative hypothesis Ha : F ∼ N (⃗0, ( 10 01 )) vs G ∼
N (⃗0, ( 1 0.5
0.5 1 )) for m = 100, 200, · · · , 1000 and m = n (1st row) or m = 2n (2nd row). Three depth functions are adopted: Mahalanobis depth (1st column), Spatial depth (2nd column), and Projection depth (3rd column). λ = 0.1, 0.3, 0.5, 0.7, 1.
12

Figure 8: Power comparison under alternative hypothesis Ha : F ∼ N (⃗0, ( 10 01 )) vs G ∼
N (( 0.35
0.35 ), ( 10 01 )) for m = 100, 200, · · · , 1000 and m = n (1st row) or m = 2n (2nd row). Three depth functions are adopted: Mahalanobis depth (1st column), Spatial depth (2nd column), and Projection depth (3rd column). λ = 0.1, 0.3, 0.5, 0.7, 1
Figure 9: Power comparison under alternative hypothesis Ha : F ∼ N (⃗0, ( 10 01 )) vs G ∼ N (( 00..33 ), ( 1 0.4
0.4 1 )) for m = 100, 200, · · · , 1000 and m = n (1st row) or m = 2n (2nd row). Three depth functions are adopted: Mahalanobis depth (1st column), Spatial depth (2nd column), and Projection depth (3rd column). λ = 0.1, 0.3, 0.5, 0.7, 1
13

All the Figures 7, 8, and 9 show that the power of Em,n(λ) is increasing as the decrease of
the value of λ. Compared with Mm,n, Em,n(λ) outperforms when λ is less than 0.3 (Figure 7),
0.5(Figure 8) and 0.5 (Figure 9), respectively. To balance the type I error and power, λ = 0.3
is adaptable when the sample size is bigger than 300. For larger sample size, a smaller λ can
be considered.
4 Analysis of Real Data Set
4.1 Breast Cancer Data
Breast cancer screening helps to detect the breast cancer early and ensure a good outcome
in treatment with a higher probability. Patrício et al. (2018) analyzed the data collected in
routine blood analyses—notably, Glucose, Insulin, Homeostasis Model Assessment (HOMA),
Leptin, Adiponectin, Resistin, Chemokine Monocyte Chemoattractant Protein 1 (MCP-1),
Age and Body Mass Index (BMI)—to predict the presence of breast cancer. It is interesting
to see whether the proposed test can distinguish healthy people from patients based on this
data set. The blood samples were collected from 64 patients with breast cancer and 52
healthy controls at the same time of the day after an overnight fasting. 9 clinical features were
observed or measured in routine blood analysis. The BMI (kg/m2) was the ratio of weight and
squared height. An automatic analyzer using a commercial kit determined the Serum Glucose
(mg/dL) levels. Serum values of Resistin (ng/mL), MCP-1 (pg/dL), Leptin (ng/mL) and
Adiponectin (μg/mL) were all assessed using commercial enzyme-linked immunosorbent assay
kits from R&D System, UK, and Human MCP-1 ELISA Set, BD Biosciences Pharmingen,
CA, EUA. ELISA kit used Mercodia Insulin ELISA to measure the plasma levels of Insulin
(μU/mL). Insulin resistance was evaluated by the HOMA index, where HOMA = log If∗Gf
22.5 .
If (μU/mL) is the fasting insulin level and Gf (mmol/L) is the fasting Glucose level.
Table 1: Estimated p-values of ellipse statistic Em,n(0.3), maximum statistic Mm,n, and weighted statistic Wm,n( n
m+n ), by using three depth functions under 10,000 repetitions.
Depth Function Em,n(0.3) Mm,n Wm,n( n
m+n )
Mahalanobis 0.0013 0.0337 0.0079 Projection 0.0007 0.0522 0.0373 Spatial 0.0010 0.0380 0.0064
Table 1 shows all estimated p-values of rotated ellipse statistic Em,n(0.3), maximum
statistic Mm,n, and weighted statistic Wm,n( n
m+n ), by using three depth functions under
10,000 repetitions. The estimated p-values are obtained by replacing the asymptotic critical
14

value with an empirical quantile derived from simulated observations under the null hypothesis.
Compared with α = 0.05, all estimated p-values are significant except the maximum statistic
Mm,n and weighted statistic Wm,n( n
m+n ) for Projection depth. We note that the estimated
p-values of rotated ellipse statistic Em,n(0.3) are much smaller than others for all three depth
functions. Compared with smaller α, they are still significant.
4.2 Red Wine Data
In the second case, we consider red wine of vinho verde, a unique band of Portugal (Cortez
et al., 2009). In the data, there are 11 features—notably, Fixed acidity, Citric acid, Residual
sugar, Chlorides, Free sulfur dioxide, Total sulfur dioxide, Density, pH, Sulphates, and Alcohol,
which are results of the most common physicochemical tests. The grade of the wine on a
scale ranges from 0 (very bad) to 10 (excellent). In our study, we pairwise compared the wine
with quality scores 4, 5, 6, and 7. The sample sizes are 53, 681, 638, and 199 respectively.
Both the empirical p-value and asymptotic p-value are close to 0 for all comparison cases
except the case 4 vs 5, and 4 vs 6.
Table 2: Estimated p-values of ellipse statistic Em,n(0.15), Em,n(0.3), maximum statistic Mm,n, and weighted statistic Wm,n
(n
m+n
)
, by using three depth functions under 10,000 repetitions.
Depth Function Em,n(0.15) Em,n(0.3) Mm,n Wm,n
(n
m+n
)
4 vs 5 4 vs 6 4 vs 5 4 vs 6 4 vs 5 4 vs 6 4 vs 5 4 vs 6 Mahalanobis 0.0402 0 0.1009 0 0.7355 0.3407 0.0189 0.0005 Projection 0.0007 0.0019 0.0021 0.0090 0.0087 0.0910 0.4095 0.3104 Spatial 0.0401 0 0.1043 0 0.7592 0.3692 0.0144 0.0004
Table 2 shows that the ellipse test statistic has the smallest estimated p-value across all
cases and depth functions. Compared with other test statistics, it can successfully distinguish
the wines with varying quality levels, thereby supporting the Wine Rating Method. When the
sample size is big enough, a smaller value of λ can significantly improve the power of ellipse
statistic. In case 4 vs 5, Em,n(0.15) has a much smaller estimated p-value than Em,n(0.3).
5 Conclusions
In this paper, we introduce a novel test statistic for assessing the homogeneity of two
multivariate samples. The ellipse statistics, derived from pairwise quality indices, are shown
to follow a χ2
1 asymptotic null distribution. Through simulation studies, we demonstrate
the superior performance of our proposed tests. In our future work, although it presents
15

a challenge, we would like to explore the generalization of the ellipse statistics into the
multivariate multi-sample situation, which would be of interest.
Disclosure statement
The authors report there are no competing interests to declare.
Data Availability Statement
The breast cancer dataset analyzed in this study is publicly available from the UCI Machine
Learning Repository at https://archive.ics.uci.edu/ml/datasets/Breast+Cancer+Coimbra.
The wine quality dataset analyzed in this study is also publicly available from the UCI Machine
Learning Repository at https://archive.ics.uci.edu/ml/datasets/Wine+Quality.
Funding
Dr. Shi’s work was supported by the Natural Sciences and Engineering Research Council
of Canada under Grant RGPIN-2022-03264, the NSERC Alliance International Catalyst
Grant ALLRP 590341-23, and the University of British Columbia Okanagan (UBC-O) Vice
Principal Research in collaboration with UBC-O Irving K. Barber Faculty of Science. Dr.
Fu’s research was supported by NSERC Discovery Grant RGPIN 2018-05846. Dr. Chen’s
research was supported by NSERC Discovery Grant RGPIN 2022-04519.
A Proof of Theorem 1
Gnettner et al. (2024) shows that under A1-A4 and null hypothesis H0 : F = G, for m, n → ∞,
m
m + n → τ for some 0 < τ < 1,
we have √ 12mn
m+n


Q(Fm, Gn) − 1
2
Q(Gn, Fm) − 1
2


−−D−→


1
−1

 z, where z ∼ N (0, 1).
16

According to the Continuous Mapping Theorem,
R(λ, θ, Fm, Gn) = 12mn
m+n
⃗QT


cos2 θ + λ sin2 θ (1 − λ) sin θ cos θ
(1 − λ) sin θ cos θ sin2 θ + λ cos2 θ

 ⃗Q
−−D−→
[


1
−1

z
]T


cos2 θ + λ sin2 θ (1 − λ) sin θ cos θ
(1 − λ) sin θ cos θ sin2 θ + λ cos2 θ


[


1
−1

z
]
= zT (
1 −1
)


cos2 θ + λ sin2 θ (1 − λ) sin θ cos θ
(1 − λ) sin θ cos θ sin2 θ + λ cos2 θ




1
−1

z
= [1 + λ − (1 − λ) sin 2θ]zT z
∼ [1 + λ − (1 − λ) sin 2θ]χ2
1
where ⃗Q =


Q(Fm, Gn) − 1
2
Q(Gn, Fm) − 1
2

.
B Distributions Specified for Alternative Hypothesis
Scenarios
F = 0.8N (⃗0, I) + 0.2N (( 1155 ), I)
• Green points:
G = 0.6N (( 55 ), I) + 0.4N (( −2
−2 ), I)
• Blue points:
G = 0.8N (( 44 ), ( 0.9 0
0 0.9 )) + 0.2N (( −5
−5 ), ( 0.9 0
0 0.9 ))
• Yellow points:
G = 0.8N (( 00 ), ( 0.8 0
0 0.8 )) + 0.2N (( −12
−12 ), ( 0.7 0
0 0.7 ))
• Brown points:
G = 0.8N (( 33 ), I) + 0.2N (( −1
−1 ), ( 20 02 ))
• Red points:
G = 0.8N (( 77 ), I) + 0.2N (( −8
−8 ), I)
References
A.R. Ansari and R.A. Bradley. Rank-sum tests for dispersions. Annals of Mathematical
Statistics, 31:1174–1189, 1960.
17

K. Banerjee, N. Zhao, A. Srinivasan, L. Xue, S.D. Hicks, F.A. Middleton, F.A. Wu, and
X. Zhan. An adaptive multivariate two-sample test with application to microbiome
differential abundance analysis. Frontiers in Genetics, 10:447114, 2019. Article 447114.
L. Baringhaus and C. Franz. On a new multivariate two-sample test. Journal of Multivariate
Analysis, 88:190–206, 2004.
S. Chenouri, C.G. Small, and T.J. Farrar. Data depth-based nonparametric scale tests.
Canadian Journal of Statistics, 39(2):356–369, 2011.
P. Cortez, A.L. Cerdeira, F. Almeida, T. Matos, and J. Reis. Modeling wine preferences by
data mining from physicochemical properties. Decision Support Systems, 47:547–553, 2009.
F. Gnettner, C. Kirch, and A. Nieto-Reyes. Symmetrisation of a class of two-sample tests
by mutually considering depth ranks including functional spaces. Electronic Journal of
Statistics, 18(2):3021–3106, 2024.
A. Gretton, K.M. Borgwardt, M.J. Rasch, B. Schölkopf, and A. Smola. A kernel two-sample
test. Journal of Machine Learning Research, 13(1):723–773, 2012.
H. Hotelling. A generalized t test and measure of multivariate dispersion. In Proceedings
of the Second Berkeley Symposium on Mathematical Statistics and Probability, volume 2,
pages 23–42, 1951.
D.N. Lawley. A generalization of fisher’s z test. Biometrika, 30(1/2):180–187, 1938.
R. Liu, J. Parelius, and K. Singh. Multivariate analysis by data depth: Descriptive statistics,
graphics and inference. Annals of Statistics, 27, 1999.
Regina Liu and Kesar Singh. Rank tests for multivariate scale difference based on data depth.
DIMACS: Series in Discrete Mathematics and Theoretical Computer Science, 72:17–35, 11
2006. doi: 10.1090/dimacs/072/02.
R.Y. Liu. Data depth and multivariate rank tests. In L1-Statistical Analysis and Related
Methods, pages 279–294. North-Holland, Amsterdam, 1992.
R.Y. Liu and K. Singh. A quality index based on data depth and multivariate rank tests.
Journal of the American Statistical Association, 88(421):252–260, 1993.
M. Neuhäuser and G.D. Ruxton. Distribution-free two-sample comparisons in the case of
heterogeneous variances. Behavioral Ecology and Sociobiology, 63:617–623, 2009.
18

M. Patrício, J. Pereira, J. Crisóstomo, P. Matafome, M. Gomes, R. Seiça, and F. Caramelo.
Using resistin, glucose, age and bmi to predict the presence of breast cancer. BMC Cancer,
18:1–8, 2018.
O. Pokotylo, P. Mozharovskyi, and R. Dyckerhoff. Depth and depth-based classification with
r package ddalpha. Journal of Statistical Software, 91(5):1–46, 2019.
S.T. Rachev, S. Mittnik, F.J. Fabozzi, and S.M. Focardi. Financial Econometrics: From
Basics to Advanced Modeling Techniques. Wiley, New York, 2007.
A. Ramdas, N.G. Trillos, and M. Cuturi. On wasserstein two-sample testing and related
families of nonparametric tests. Entropy, 19(2):47, 2017. Article 47.
R. Serfling. A depth function and a scale curve based on spatial quantiles. In Statistical
Data Analysis Based on the L1-Norm and Related Methods, pages 25–38. Birkhäuser, Basel,
2002.
X. Shi, Y. Zhang, and Y. Fu. Two-sample tests based on data depth. Entropy, 25(2):238,
2023. Article 238.
S. Siegel and J.W. Tukey. A nonparametric sum of squares test for homogeneity of variance
in several populations. Journal of the American Statistical Association, 55(290):129–143,
1960.
G. Székely and M. Rizzo. Testing for equal distributions in high dimension. InterStat, 5,
2004.
Y. Vardi and C.H. Zhang. The multivariate l1-median and associated data depth. Proceedings
of the National Academy of Sciences of the USA, 97(4):1423–1426, 2000.
J.-T. Zhang and Ł. Smaga. Two-sample test for equal distributions in separate metric space:
New maximum mean discrepancy based approaches. Electronic Journal of Statistics, 16(2):
4090–4132, 2022.
Y. Zuo and X. He. On the limiting distributions of multivariate depth-based rank sum
statistics and related tests. Annals of Statistics, 34(6):2879–2896, 2006.
Y. Zuo and R. Serfling. General notions of statistical depth function. Annals of Statistics, 28:
461–482, 2000.
19

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:03.323Z
- **Text Length:** 32867 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 19 of 19
