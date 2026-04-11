# PDF Document: Almani - 2025 - Insights into Tail-Based and Order Statistics.pdf

**File Path:** Almani - 2025 - Insights into Tail-Based and Order Statistics.pdf

**Processed Date:** 2026-02-10T18:15:49.500Z

**File Size:** 5039.52 KB

**Total Pages:** 28

**Extracted Pages:** 28

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3570

**Title:** Insights into Tail-Based and Order Statistics

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Insights into Tail-Based and Order Statistics
Hamidreza Maleki Almani
ORCID: https://orcid.org/0000-0002-3071-4982 Web: https://www.uwasa.fi/en/person/2169161
This article is an independent work by the author. He is a Postdoctoral Researcher in the Department of Mathematics and Statistics and the Department of Energy Technology at the University of Vaasa, Finland. He independently conducted and completed all aspects of this study.
November 6, 2025 Vaasa, FINLAND
arXiv:2511.04784v1 [math.ST] 6 Nov 2025

Insights into Tail-Based and Order Statistics
HAMIDREZA MALEKI ALMANI
Department of Mathematics and Statistics, School of Technology and Innovations, University of Vaasa, P.O. Box 700, FIN-65101 Vaasa, FINLAND
ORCID: https://orcid.org/0000-0002-3071-4982
Abstract. Heavy-tailed phenomena appear across diverse domains—from wealth and firm sizes in economics to network traffic, biological systems, and physical processes—characterized by the disproportionate influence of extreme values. These distributions challenge classical statistical models, as their tails decay too slowly for conventional approximations to hold. Among their key descriptive measures are quantile contributions, which quantify the proportion of a total quantity (such as income, ener-
gy, or risk) attributed to observations above a given quantile threshold. This paper presents a theoretical study of the quantile contribution statistic and its relationship with order statistics. We derive a closed-form expression for the joint cumulative distribution function (CDF) of order statistics and, based on it, obtain an explicit CDF for quantile contributions applicable to small samples. We then investigate the asymptotic behavior of these contributions as the sample size increases, est-
ablishing the asymptotic normality of the numerator and characterizing the limiting distribution of the quantile contribution. Finally, simulation studies illustrate the convergence properties and empirical accuracy of the theoretical results, providing a foundation for applying quantile contributions in the analysis of heavy-tailed data.
1. Introduction
In 1906, Pareto, in his first well-known work [46], showed that approximately 80% of the land in the Kingdom of Italy was owned by only 20% of the population at that time. This became known as Pareto’s 80/20 principle. Sturgeon’s publications in the 1950s [55–58] highlighted the observation that the majority of everything is of low quality. However, the prevalence of lowquality content across all genres disproves the notion that any single genre is inherently inferior. This idea is now known as St-
urgeon’s adage: ”Ninety percent of everything is crud!” Computer programmers are familiar with this in another form [10, 41]: in computer programming and software engineering,
E-mail address: hmaleki@uwasa.fi. Date: November 10, 2025. 2020 Mathematics Subject Classification. 60E05, 62E20, 60F05, 60G15, 60G70, 62G30, 62G32, 62M10, 62P20. Key words and phrases. Heavy-tailed distributions, Quantile contributions, Order statistics, Asymptotic distribution, Ratio distribution, Convergence analysis, Extreme value theory, Empirical simulation,
1

2 ALMANI
the Ninety–Ninety Rule is a humorous aphorism that states, “The first 90% of the code accounts for the first 90% of the development time, and the remaining 10% of the code accounts for the other 90% of the development time!” This adds up to 180%, making a wry allusion to the notorious tendency of software development projects to significantly overrun their schedules. In global health care, as a seriouse issue, the 10/90 gap is a term adopted by the Global Forum for Health Research to highlight the-
 finding by the Commission on Health Research for Development in 1990 that less than 10% of worldwide resources devoted to health research were allocated to developing countries—where over 90% of all preventable deaths worldwide occur (see [1, 22, 62]). This disparity is a major concern of the World Health Organization (WHO) [19, 20]. This is observed even more sharply in internet culture [13, 61]. The 1% rule is a general rule of thumb regarding participation in an online community, stating that -
only 1% of a website’s users actively create new content, while the other 99% simply lurk.
The observations mentioned above relate to a deeper fact beyond mere statistical inference. Informally, to estimate the probability of an event, it is often sufficient to focus on the concentration region of its distribution—provided we have a large enough sample and the distribution’s tails “vanish rapidly enough.” However, this assumption does not hold if the tails are thicker than negligible. In such cases, infrequent events have a significant probability, meaning that the usual “well-behaved” -
statistical models fail to accurately represent them. This is when the tails of the distribution must be taken into account, leading to what are called heavy-tailed processes. The historical evolution of heavy-tailed phenomena, some of which we have mentioned, reveals the following setup:
• Vanishing rapidly enough means a negligible tail, typically vanishing exponentially, • Well-behaved also refers to distributions with exponentially vanishing tails.
So, a distribution F is heavy-tailed [28, 50] if 1 − F (x) = P[X > x] ≫ e−sx for x → ∞ and s > 0, i.e.,
xli→m∞ esx(1 − F (x)) = ∞.
Three well-known sub-classes of the heavy-tailed distributions are
(i) Fat-tailed distributions [40, 44] with index 0 < α < 2 that
1 − F (x) ∼ x−α for x → ∞,
(ii) Long-tailed distribution [4] that for all t > 0 we have
1 − F (x + t) ∼ 1 − F (x) for x → ∞,
(iii) Subexponential distributions [14, 23] that for all independent processes X1, . . . , Xn ∼ F we have
P[X1 + · · · + Xn > x] ∼ P[max(X1, . . . , Xn) > x] for x → ∞.

INSIGHTS INTO TAIL-BASED AND ORDER STATISTICS 3
Heavy-tailed distributions are crucial in numerous scientific fields due to their ability to model rare, high-impact events and skewed distributions. In economy, finance, and business, they capture extreme asset returns [26, 39], volatility clustering [16], and market shocks [53], enhancing risk modeling and forecasting. Wealth and firm size distributions often follow power laws, aiding economic analysis [5,29]. These models also inform business strategies in sales, resource allocation, and resili-
ence to demand shocks [23, 38, 59]. In computer science, heavy-tailed patterns appear in internet traffic [35], file sizes [21], and server loads, affecting network protocols and performance [18, 47]. They also underpin job scheduling in distributed systems [31,36] and anomaly detection in cybersecurity [8].
In physics and engineering, heavy-tailed distributions describe anomalous diffusion [52], turbulent transport [42], and structural failure in materials [9, 12]. They are used in modeling impulsive noise and signal degradation in communication systems [43, 45], as well as robust signal processing under uncertainty.In biology and health sciences, these distributions explain superspreading in epidemics [24,37], scale-free gene and protein networks [7,33], and variability in neural dynamics [11]. They-
 also capture skewed healthcare metrics such as drug response and hospital stays [15]. Across disciplines, heavytailed distributions support more realistic, data-driven modeling of complex systems, improving prediction, design, and decision-making.
The most important statistics of a heavy-tailed distribution are its quantiles. This is because we aim to identify a precise split of the distribution into two parts: the head and the tail. Specifically, we look for the point below which a considerable percentage p of the population falls (the pth quantile), while the accumulated value of the remaining (1 − p) percent above that point constitutes a significant portion of the total value in the population. This measure is known as the quantile cont-
ribution [60]. It refers to the proportion of a total quantity—such as income, risk, energy, or emissions—attributed to elements above (or sometimes below) a certain quantile threshold within a statistical distribution. In simple terms, it shows how much of a total amount is accounted for by a particular subset of units ranked by size (e.g., income, energy, or emissions). The “natural” estimator for the quantile contribution is calculated as the ratio of the sum of values above the exceedance thre-
shold (the value above a specific quantile) to the total sum. That is
Λn(p) =
P
j∈Jn(p) Xj Pn
j=1 Xj
, (1.1)
where p ∈ [0, 1] is a constant number, Xj, j = 1, . . . , n are independently identically distributed (i.i.d), and
Jn(p) = {j | Xj ∈ 100p% largest observations among X1, . . . , Xn}, (1.2)
we note that for all p ∈ [0, 1], n ≥ 1 we have |λn(p)| ≤ 1.
In this article, we study the connection between quantile contributions and order statistics, focusing on their distributions and convergence. In Section 2,

4 ALMANI
we derive a closed-form expression for the joint cumulative distribution function (CDF) of order statistics. Building on this, Section 3 presents an explicit form of the CDF for quantile contributions, applicable to a small number of variables. Section 4 explores the convergence of quantile contributions as the number of variables grows large. Section 5 presents the asymptotic normality of the numerator, and Section 6 applies this result to characterize the asymptotic distribution of quantile cont-
ributions for a large number of variables. Finally, in Section 7, we present simulations of important cases and cumulative errors to illustrate the empirical performance and accuracy of our results.
2. Ordered and Tail-Based Statistics
To investigate the convergence and distribution of the Λn given in (1.1), first we must consider its close relationship to the order statistics. For the random variables X1, X2, . . . , Xn , the associated order statistics are the random variables Xn
(1), X n
(2), . . . , Xn
(n) defined by ascending resorting of the X1, X2, . . . , Xn . Then we have
Λn(p) =
Pn
i=⌈np⌉ X n
(i) Pn
i=1 Xi
=
Pn
i=⌈np⌉ X n
(i) Pn
i=1 X n
(i)
. (2.1)
In other word, to investigate the probability distribution of Λn , it is sufficient to know the joint distribution of the order statistics Xn
(1), X n
(2), . . . , Xn
(n) . The
following proposition for the distribution of each Xn
(i) is explained in [3,17,49]. Here I just rewrite the proof with a quantitative formulation of its combinatorics.
Proposition 2.1. The probability distribution F n
(i) and density function f n
(i)
of the order statistic Xn
(i) are
Fn
(i)(x) = I F (x); i, n − i + 1 =
n
X
J =i
n
J F (x)
J
1 − F (x)
n−J
, (2.2)
fn
(i)(x) = f (x)
B(i, n − i + 1) F (x)
i−1
1 − F (x)
n−i
, (2.3)
where F and f are respectively the probability distribution and density function of the variable X1 , and B, I are respectively the beta function and the regularized inclomplete beta function, i.e., for all Re(p), Re(q) > 0
B(p, q) =
Z1
0
tp−1(1 − t)q−1 dt,
I(x; p, q) = 1
B(p, q)
Zx
0
tp−1(1 − t)q−1 dt.
Proof. As Xn
(i) is the (i/n)-quantile variable of X1, . . . , Xn , for all x ∈ R
Xn
(i) = Qn(i/n) ≤ x ⇐⇒ i ≤
n
X
j=1
1(−∞,x] (Xj ).

INSIGHTS INTO TAIL-BASED AND ORDER STATISTICS 5
So,
Fn
(j)(x) = P[Xn
(i) ≤ x]
=P
"
i≤
n
X
j=1
1(−∞,x](Xj )
#
=
n
X
J =i
P
"
J=
n
X
j=1
1(−∞,x](Xj )
#
=
n
X
J =i
n
J P[X1 ≤ x]
J
P[X1 > x]
n−J
=
n
X
J =i
n
J F (x)
J
1 − F (x)
n−J
.
Now, we note
n
X
J =i
n
J yJ (1 − y)n−J
=
Zy
0
ti(1 − t)n−i+1 dt
B(i, n − i + 1)
= I y; i, n − i + 1 ,
and these prove (2.2). The proof of (2.3) is straight forward as follows.
fn
(j)(x) = dF n
(j)(x)
dx = dI F (x); i, n − i + 1
dx
= f (x) F (x) i−1 1 − F (x) n−i
B(i, n − i + 1) .
□
The joint density function of the order statistics Xn
(1), X n
(2), . . . , Xn
(n) is given
by [2, 49] as following theorem and corollary.
Theorem 2.2. Let 1 ≤ k ≤ n and 0 = r0 < r1 < · · · < rk < rk+1 = n + 1. If the random variables X1, X2, . . . , Xn are i.i.d with common absolutely continuous distribution F and density function f , then the joint density function of Xn
(r1), X n
(r2), . . . , Xn
(rk) is
fn
(r1,...,rk)(x1, . . . , xk) = n!
k
Y
i=1
f (xi)
! k+1
Y
i=1
F (xi) − F (xi−1) ri−ri−1−1
(ri − ri−1 − 1)! , (2.4)
if x1 < x2 < · · · < xk , and it is 0 otherwise. Here F (x0) = 0 and F (xk+1) = 1.

6 ALMANI
Corollary 2.3. If the random variables X1, X2, . . . , Xn are i.i.d with common absolutely continuous distribution F and density function f , then the joint density function of Xn
(1), X n
(2), . . . , Xn
(n) is
fn
(1,...,n)(x1, . . . , xn) = n!
n
Y
i=1
f (xi), (2.5)
if x1 < x2 < · · · < xn , and it is 0 otherwise.
Next, we evaluate the cumulative distribution function of the order statistics. However, this requires some insight into the relationship between the Binomial distribution and the regularized incomplete Beta function, as presented in the following lemma.
Lemma 2.4. For all positive integers p, q ≥ 1, and all a, b ∈ R
Ia,b(y; p, q) := 1
B(p, q)
Zy
a
(x − a)p−1(b − x)q−1 dx
=
p+q−1
X
j=p
p+q−1
j (y − a)j(b − y)p+q−1−j
=
q−1
X
j=0
p+q−1
j (y − a)p+q−1−j(b − y)j.
Proof. By changing the variable t = x−a
b−a , we have
Ia,b(y; p, q) = (b − a)p+q−1I y − a
b − a ; p, q ,
and
I (u; p, q) = P[J ≥ p]
=
p+q−1
X
j=p
p+q−1
j uj(1 − u)p+q−1−j
=
q−1
X
j=0
p+q−1
j up+q−1−j(1 − u)j,
where J ∼ Binomial(u; p + q − 1). Now, substituting u = y−a
b−a proves the claim. □
Theorem 2.5. Let 1 ≤ k ≤ n and 0 < r1 < · · · < rk < n + 1 are integers. If the random variables X1, X2, . . . , Xn are i.i.d with common absolutely continuous distribution F and density function f , then the cumulative distribution function of Xn
(r1), X n
(r2), . . . , Xn
(rk) is
Fn
(r1,...,rk)(x1, . . . , xk)
=
n−rk
X
Jk =0
n−rk−1 −Jk
X
Jk−1 =0
n−rk−2 −Jk −Jk−1
X
Jk−2 =0
···
n−r1−Pk
i=2 Ji X
J1=0

INSIGHTS INTO TAIL-BASED AND ORDER STATISTICS 7
n
J0, J1, . . . , Jk
k
Y
i=0
F xk
(i+1) − F xk
(i)
Ji
,
s.t.
k
X
i=0
Ji = n, (2.6)
if x1 < x2 < · · · < xk , and it is 0 otherwise. Here F (x0) = 0, and F (xk+1) = 1. (Note: J0 = n − Pk
i=1 Ji )
Proof 1: Calculus. Applying the density function from Theorem 2.2, for y1 ≤ · · · ≤ yk we have
Fn
(r1,...,rk)(y1, . . . , yk)
= n!
Z y1
−∞
Z y2
x1
···
Z yk−1
xk−2
Z yk
xk−1
dxk · · · dx1
×
k
Y
i=1
f (xi)
! k+1
Y
i=1
F (xi) − F (xi−1) ri−ri−1−1
(ri − ri−1 − 1)! ,
where r0 = 0 and rk+1 = n + 1. By changing the variables ui = F (xi), i = 1, . . . k + 1, we have
= n!
Z F (y1)
0
Z F (y2)
u1
···
Z F (yk−1)
uk−2
Z F (yk)
uk−1
k+1
Y
i=1
(ui − ui−1)ri−ri−1−1
(ri − ri−1 − 1)! duk · · · du1
= n!
Z F (y1)
0
Z F (y2)
u1
···
Z F (yk−1)
uk−2
k−1
Y
i=1
(ui − ui−1)ri−ri−1−1
(ri − ri−1 − 1)! duk−1 · · · du1
| {z } πk−1
×
Z F (yk)
uk−1
(uk+1 − uk)rk+1−rk−1(uk − uk−1)rk−rk−1−1
(rk+1 − rk − 1)!(rk − rk−1 − 1)! duk
= n! πk−1
Z F (yk)
uk−1
(uk+1 − uk)rk+1−rk−1(uk − uk−1)rk−rk−1−1
B(rk+1 − rk, rk − rk−1 − 1)(rk+1 − rk−1 − 1)! duk.
Taking pk = rk − rk−1, qk = rk+1 − rk , then by Lemma 2.4
= n! πk−1
(rk+1 − rk−1 − 1)! Iuk−1,uk+1 F (yk); rk − rk−1, rk+1 − rk
= n! πk−1
(rk+1 − rk−1 − 1)! Iuk−1,uk+1 F (yk); pk, qk
= n! πk−1
(rk+1 − rk−1 − 1)!
×
qk −1
X
Jk =0
pk + qk − 1
Jk
F (yk) − uk−1
pk+qk−1−Jk uk+1 − F (yk) Jk
= n! πk−1
(rk+1 − rk−1 − 1)!

8 ALMANI
×
rk+1 −rk −1
X
Jk =0
rk+1 − rk−1 − 1
Jk
F (yk) − uk−1
rk+1−rk−1−1−Jk uk+1 − F (yk) Jk
= n! πk−2
rk+1 −rk −1
X
Jk =0
uk+1 − F (yk) Jk
Jk!
| {z } ΣJk
×
Z F (yk−1)
uk−2
(uk−1 − uk−2)rk−1−rk−2−1
(rk−1 − rk−2 − 1)! · (F (yk) − uk−1)rk+1−rk−1−1−Jk
(rk+1 − rk−1 − 1 − Jk)! duk−1
= n! πk−2ΣJk
×
Z F (yk−1)
uk−2
(uk−1 − uk−2)rk−1−rk−2−1 · (F (yk) − uk−1)rk+1−rk−1−1−Jk
B(rk−1 − rk−2, rk+1 − rk−1 − Jk)Γ(rk+1 − rk−2 − Jk) duk−1.
Again, by taking pk−1 = rk−1 − rk−2, qk−1 = rk+1 − rk−1 − Jk , then from Lemma 2.4
= n! πk−2ΣJk
(rk+1 − rk−2 − Jk − 1)! Iuk−2,F (yk) F (yk−1); pk−1, qk−1
= n! πk−2ΣJk
(rk+1 − rk−2 − Jk − 1)!
qk−1 −1
X
Jk−1 =0
pk−1 + qk−1 − 1
Jk−1
× F (yk−1) − uk−2
pk−1+qk−1−1−Jk−1 uk − F (yk−1) Jk−1
= n! πk−2ΣJk
(rk+1 − rk−2 − Jk − 1)!
rk+1 −rk−1 −Jk −1
X
Jk−1 =0
rk+1 − rk−2 − Jk − 1
Jk−1
× F (yk−1) − uk−2
rk+1−rk−2−Jk−Jk−1−1 uk − F (yk−1) Jk−1
= n! πk−3ΣJk
rk+1 −rk−1 −Jk −1
X
Jk−1 =0
F (yk) − F (yk−1) Jk−1
Jk−1!
| {z }
ΣJk−1
×
Z F (yk−2)
uk−3
(uk−2 − uk−3)rk−2−rk−3−1
(rk−2 − rk−3 − 1)!
· (F (yk−1) − uk−2)rk+1−rk−2−Jk−Jk−1−1
(rk+1 − rk−2 − Jk − Jk−1 − 1)! duk−2
= n! πk−3ΣJk ΣJk−1
Z F (yk−2)
uk−3
(uk−2 − uk−3)rk−2−rk−3−1
Γ(rk+1 − rk−3 − Jk − Jk−1)
× (F (yk−1) − uk−2)rk+1−rk−2−Jk−Jk−1−1
B(rk−2 − rk−3, rk+1 − rk−2 − Jk − Jk−1) duk−2,
To identify the limits of the summations, we proceed one step further, and again by taking pk−2 = rk−2 − rk−3, qk−2 = rk+1 − rk−2 − Jk − Jk−1 , from

INSIGHTS INTO TAIL-BASED AND ORDER STATISTICS 9
Lemma 2.4, we have
= n! πk−3ΣJk ΣJk−1
(rk+1 − rk−3 − Jk − Jk+1 − 1)! Iuk−3,F (yk−1) F (yk−2); pk−2, qk−2
= n! πk−3ΣJk ΣJk−1
(rk+1 − rk−3 − Jk − Jk−1 − 1)!
qk−2 −1
X
Jk−2 =0
pk−2 + qk−2 − 1
Jk−2
× F (yk−2) − uk−3
pk−2+qk−2−1−Jk−2 uk − F (yk−1) Jk−2
= n! πk−3ΣJk ΣJk−1
(rk+1 − rk−3 − Jk − Jk−1 − 1)!
×
rk+1 −rk−2 −Jk −Jk−1 −1 X
Jk−2 =0
rk+1 − rk−3 − Jk − Jk−1 − 1
Jk−2
× F (yk−2) − uk−3
rk+1−rk−3−Jk−Jk−1−Jk−2−1 F (yk−1 − F (yk−1) Jk−2
= n! πk−4ΣJk ΣJk−1
rk+1 −rk−2 −Jk −Jk−1 −1 X
Jk−2 =0
F (yk−1) − F (yk−2) Jk−2
Jk−2!
| {z }
ΣJk−2
×
Z F (yk−3)
uk−4
(uk−3 − uk−4)rk−3−rk−4−1
(rk−3 − rk−4 − 1)!
· (F (yk−2) − uk−3)rk+1−rk−3−Jk−Jk−1−Jk−2−1
(rk+1 − rk−3 − Jk − Jk−1 − Jk−2 − 1)! duk−3.
Continuing this calculation recursively, we obtain
= n!ΣJk · · · ΣJ2
Z F (y1)
u0
(u1 − u0)r1−r0−1
(r1 − r0 − 1)! · (F (y2) − u1)rk+1−r1−1−Pk
i=2 Ji
(rk+1 − r1 − 1 − Pk
i=2 Ji)! du1
= n!ΣJk · · · ΣJ2
Z F (y1)
0
ur1−1
1 (F (y2) − u1)rk+1−r1−1−Pk
i=2 Ji
B(r1, rk+1 − r1 − Pk
j=2 Ji)(rk+1 − 1 − Pk
i=2 Ji)! du1.
By taking p1 = r1, q1 = rk+1 − r1 − Pk
i=2 Ji , we have
= n!ΣJk · · · ΣJ2
I0,F (y2) F (y − 1); p1, q1
(rk+1 − 1 − Pk
i=2 Ji)!
= n!ΣJk · · · ΣJ2
1
(rk+1 − 1 − Pk
i=2 Ji)!
×
q1−1
X
J1=0
p1 + q1 − 1
J1
F (y1)
p1+q1−1−J1
F (y2) − F (y1)
J1
= n!ΣJk · · · ΣJ2
1
(rk+1 − 1 − Pk
i=2 Ji)!
rk+1−r1−1−Pk
i=2 Ji X
J1=0
rk+1 − 1 − Pk
i=2 Ji
J1
× F (y1)
rk+1 −1−Pk
i=2 Ji
F (y2) − F (y1)
J1

10 ALMANI
= n!ΣJk · · · ΣJ2
rk+1−r1−1−Pk
i=2 Ji X
J1=0
F (y2) − F (y1) J1
J1! · F (y1) rk+1−1−Pk
i=1 Ji
(rk+1 − 1 − Pk
i=1 Ji)!
=
rk+1 −rk −1
X
Jk =0
rk+2 −rk−1 −Jk −1
X
Jk−1 =0
rk+1 −rk−2 −Jk −Jk−1 −1 X
Jk−2 =0
···
rk+1−r1−1−Pk
i=2 Ji X
J1=0
n!
(rk+1 − 1 − Pk
i=1 Ji)!J1! · · · Jk!
× F (yk+1) − F (yk) Jk F (yk) − F (yk−1) Jk−1 · · · F (y1) − F (y0) rk+1−1−Pk
i=1 Ji
where F (y0) = 0 and F (yk+1) = 1. Then, taking J0 = rk+1 − 1 − Pk
i=1 Ji =
n − Pk
i=1 Ji , we have
=
n−rk
X
Jk =0
n−rk−1 −Jk
X
Jk−1 =0
n−rk−2 −Jk −Jk−1
X
Jk−2 =0
···
n−r1−Pk
i=2 Ji X
J1=0
(2.7)
n
J0, J1, . . . , Jk
k
Y
i=0
F (yi+1) − F (yi)
Ji
,
s.t.
k
X
i=0
Ji = n.
Now, for arbitrary y1, . . . , yk , we have
Fn
(r1,...,rk)(y1, . . . , yk)
= P Xn
(1) ≤ y1, . . . , Xn
(k) ≤ yk
= P Xn
(1) ≤ yk
(1), . . . , Xn
(k) ≤ yk
(k)
= Fn
(r1,...,rk) yk
(1), . . . , yk
(k) , (2.8)
and as yk
(1) ≤ · · · ≤ yk
(k) , applying (2.7) to (2.8) returns
Fn
(r1,...,rk)(y1, . . . , yk)
=
n−rk
X
Jk =0
n−rk−1 −Jk
X
Jk−1 =0
n−rk−2 −Jk −Jk−1
X
Jk−2 =0
···
n−r1−Pk
i=2 Ji X
J1=0
n
J0, J1, . . . , Jk
k
Y
i=0
F yk
(i+1) − F yk
(i)
Ji
,
s.t.
k
X
i=0
Ji = n.
□

INSIGHTS INTO TAIL-BASED AND ORDER STATISTICS 11
Proof 2: Combinatorics. First, we note
Xn
(r) ≤ y ⇐⇒ r ≤
n
X
i=1
1(−∞,y](Xi),
and so,
Fn
(r1,...,rk)(y1, . . . , yk)
= P Xn
(1) ≤ y1, . . . , Xn
(k) ≤ yk
=P
"
r1 ≤
n
X
i=1
1(−∞,y1](Xi) , · · · , rk ≤
n
X
i=1
1(−∞,yk](Xi)
#
. (2.9)
Here, we consider the following intervals
U0 U1 · · · Uk−1 Uk
−∞ = y0 ]———[ y1 ]———[y2 · · · yk−1 ]———[ yk ]———[yk+1 = ∞,
and denote
#k := #{i|Xi ∈ Uk} =
n
X
i=1
1]yk ,yk+1 [ (Xi ),
where # denotes the cardinality of the set. Then, we have
rk ≤
n
X
i=1
1(−∞,yk](Xi) ⇐⇒ 0 ≤ #k ≤ n − rk.
Thus, equation (2.9) can be rewritten as follows.
=P
"
r1 ≤
n
X
i=1
1(−∞,y1](Xi) , · · · , rk−1 ≤
n
X
i=1
1(−∞,yk−1](Xi), 0 ≤ #k ≤ n − rk
#
=
n−rk
X
Jk =0
P
"
r1 ≤
n
X
i=1
1(−∞,y1](Xi) , · · · , rk−1 ≤
n
X
i=1
1(−∞,yk−1](Xi) #k = Jk
#
× P[#k = Jk]
=
n−rk
X
Jk =0
P
"
r1 ≤
n
X
i=1
1(−∞,y1](Xi) , · · · , rk−1 ≤
n
X
i=1
1(−∞,yk−1](Xi) #k = Jk
#
×n
Jk
F (yk+1) − F (yk)
Jk . (2.10)
By denoting
#k−1 := #{i|Xi ∈ Uk−1} =
n
X
i=1
1]yk−1 ,yk [ (Xi ),
we can continue (2.10) as follows.
=
n−rk
X
Jk =0
n−Jk −rk−1
X
Jk−1 =0

12 ALMANI
P
"
r1 ≤
n
X
i=1
1(−∞,y1](Xi) , · · · , rk−2 ≤
n
X
i=1
1(−∞,yk−2](Xi) #k−1 = Jk−1, #k = Jk
#
× P[#k−1 = Jk−1 | #k = Jk] · P[#k = Jk]
=
n−rk
X
Jk =0
n−Jk −rk−1
X
Jk−1 =0
P
"
r1 ≤
n
X
i=1
1(−∞,y1](Xi) , · · · , rk−2 ≤
n
X
i=1
1(−∞,yk−2](Xi) #k−1 = Jk−1, #k = Jk
#
×n
Jk
n − Jk
Jk−1
F (yk+1) − F (yk)
Jk F (yk) − F (yk−1)
Jk−1 .
By continuing this process, we obtain
=
n−rk
X
Jk =0
n−rk−1 −Jk
X
Jk−1 =0
n−rk−2 −Jk −Jk−1
X
Jk−2 =0
···
n−r1−Pk
i=2 Ji X
J1=0
P[#1 = J1 | #2 = J2, . . . , #k = Jk]
P[#2 = J2 | #3 = J3, . . . , #k = Jk]
···
P[#k−1 = Jk−1 | #k = Jk]
P[#k = Jk]
=
n−rk
X
Jk =0
n−rk−1 −Jk
X
Jk−1 =0
n−rk−2 −Jk −Jk−1
X
Jk−2 =0
···
n−r1−Pk
i=2 Ji X
J1=0
n
Jk
n − Jk
Jk−1
· · · n − Pk
i=2 Ji
J1
· F (y1) − F (y0)
n−Pk
i=1 Ji
× F (y2) − F (y1)
J1
· · · F (yk+1) − F (yk)
Jk ,
and by taking J0 = n − Pk
i=1 Ji , this returns (2.6). □
Corollary 2.6. Given the assumptions and notations in Theorem 2.5, if x1 ≤ · · · ≤ xk , then
Fn
(r1,...,rk)(x1, . . . , xk) (2.11)
=
n−rk
X
Jk =0
n−rk−1 −Jk
X
Jk−1 =0
n−rk−2 −Jk −Jk−1
X
Jk−2 =0
···
n−r1−Pk
i=2 Ji X
J1=0
n
J0, J1, . . . , Jk
k
Y
i=0
F (xi+1) − F (xi) Ji,
s.t.
k
X
i=0
Ji = n.

INSIGHTS INTO TAIL-BASED AND ORDER STATISTICS 13
3. Exact Distribution of Tail-Based Statistics
Here, we apply the Corollary 2.3 to investigate the exact cumulative distribution of Λn(p). We use a.s. to denote almost sure convergence.
Proposition 3.1. Let p ∈ (0, 1) and 0 < |λ| < 1. If the random variables X1, X2, . . . , Xn are i.i.d with common absolutely continuous distribution F , and the almost everywhere positive density function f , then for some N0 ≥ 1, the cumulative distribution function of Λn(p), n ≥ N0 is
(i) If λE[X] > 0, then
FΛn(p)(λ) = 1 − n!
Z1
0
Z un
0
···
Z u3
0
F


1−λ
λ
n
X
i=⌈np⌉
F −1(ui) −
⌈np⌉−1
X
i=2
F −1(ui)

 du2 · · · dun. (3.1)
(ii) If λE[X] < 0, then
FΛn(p)(λ) = n!
Z1
0
Z un
0
···
Z u3
0
F


1−λ
λ
n
X
i=⌈np⌉
F −1(ui) −
⌈np⌉−1
X
i=2
F −1(ui)

 du2 · · · dun. (3.2)
Proof. For (i), let 0 < λ, E[X] < 1. Then by the strong low of larg numbers (LLN) Pn
i=1 Xi/n a.s.
−→ E[X] and so, there are some N0 ≥ 1 that for all
n ≥ N0 we have Pn
i=1 Xi > 0. Next we have
Λn(p) ≤ λ
⇐⇒
Pn
i=⌈np⌉ X n
(i) Pn
i=1 Xi
≤λ
⇐⇒
n
X
i=⌈np⌉
Xn
(i) ≤ λ
n
X
i=1
Xi
⇐⇒ λ
⌈np⌉−1
X
i=1
Xn
(i) − (1 − λ)
n
X
i=⌈np⌉
Xn
(i) ≥ 0
⇐⇒ Xn
(1) ≥ 1 − λ
λ
n
X
i=⌈np⌉
Xn
(i) −
⌈np⌉−1
X
i=2
Xn
(i). (3.3)
Now, by denoting
Dn(λ, p) :=
(
x = (x1, . . . , xn)
1−λ λ
Pn
i=⌈np⌉ xi − P⌈np⌉−1
i=2 xi ≤ x1,
x1 < x2 < · · · < xn
)
⊂ Rn,
from Corollary 2.3, one can write
FΛn(p)(λ) = P[Λn(p) ≤ λ]

14 ALMANI
=P

λ
⌈np⌉−1
X
i=1
Xn
(i) − (1 − λ)
n
X
i=⌈np⌉
Xn
(i) ≥ 0


=
Z
Dn(λ,p)
fn
(1,...,n)(x) dx
= n!
Z
···
Z
Dn(λ,p)
n
Y
i=1
f (xi)
!
dx1 · · · dxn
= n!
Z∞
−∞
Z xn
−∞
···
Z x3
−∞
Z x2
( 1−λ
λ ) Pn
i=⌈np⌉ xi−P⌈np⌉−1
i=2 xi
n
Y
i=1
f (xi)
!
dx1 · · · dxn.
Then, since F is almost everywhere differentiable and invertible, by changing the variables ui = F (xi) or xi = F −1(ui), for every i = 1, . . . , n we have
= n!
Z1
0
Z un
0
···
Z u3
0
Z u2
F
h( 1−λ
λ ) Pn
i=⌈np⌉ F −1(ui)−P⌈np⌉−1
i=2 F −1(ui)
i du1 · · · dun
= n!
Z1
0
Z un
0
···
Z u3
0
Z u2
0
du1 · · · dun
− n!
Z1
0
Z un
0
···
Z u3
0
ZF
h( 1−λ
λ ) Pn
i=⌈np⌉ F −1(ui)−P⌈np⌉−1
i=2 F −1(ui)
i
0
du1 · · · dun,
and this yields (3.1). If −1 < λ, E[X] < 0, then similarly (3.3) is valid and so we have the same result.
For (ii), let λ > 0, E[X] < 0. Similar to the proof of (i), there are some
N0 ≥ 1 that for all n ≥ N0 we have Pn
i=1 Xi < 0. Next, for this case, one can see
Λn(p) ≥ λ ⇐⇒ Xn
(1) ≥ 1 − λ
λ
n
X
i=⌈np⌉
Xn
(i) −
⌈np⌉−1
X
i=2
Xn
(i), (3.4)
and so, in this case we have
FΛn(p)(λ) = P[Λn(p) ≤ λ]
= 1 − P[Λn(p) ≥ λ]
=1−P

X n
(1) ≥ 1 − λ
λ
n
X
i=⌈np⌉
Xn
(i) −
⌈np⌉−1
X
i=2
Xn
(i)


=1−
Z
Dn(λ,p)
fn
(1,...,n)(x) dx.
Now, proceeding with similar calculation of part (i), from this final integral we have (3.2). If λ < 0, E[X] > 0, then similarly (3.4) is valid, and so, we have the same result. □

INSIGHTS INTO TAIL-BASED AND ORDER STATISTICS 15
4. Convergence of Tail-Based Statistics
As the explicit form of the exact distribution functions (3.1) and (3.2) include multiple integrals, they are not computationally suitable for larg nambers of n. So, we need to investigate further for the asymptotic behavior and distribution here.
Lemma 4.1. Let X1, X2, . . . , Xn be i.i.d random variables with common absolutely continuous distribution F . Then, for all p ∈ (0, 1) that F is continuous at its pth quantile qp , we have
1
n
n
X
i=1
Xi1{Xi≥Qn(p)}
a.s.
−→ E X11{X1≥qp} , (4.1)
where Qn(p) is the pth quantile of {Xi}n
i=1 .
Proof. Let
Un(p) = 1
n
n
X
i=1
Xi1{Xi≥Qn(p)},
Vn(p) = 1
n
n
X
i=1
Xi1{Xi≥qp}.
By the strong LLN we have
Vn(p) a.s.
−→ E X11{X1≥qp} . (4.2)
On the other hand, it is shown in [25] that, given the continuity of F on qp , we have
Qn(p) a.s.
−→ qp. (4.3)
Next, we can write
|Un(p) − Vn(p)| ≤ 1
n
n
X
i=1
|Xi| · |1{Xi≥Qn(p)} − 1{Xi≥qp}|
=1
n
n
X
i=1
|Xi| 1{Qn(p)∧qp≤Xi<Qn(p)∨qp}
=1
n
n
X
i=1
|Xi| 1{an(p)≤Xi<bn(p)},
where ∧ and ∨ are respectively minimum and maximum. Here, from (4.3), for both an(p) = Qn(p) ∧ qp and bn(p) = Qn(p) ∨ qp we have
an(p), bn(p) a.s.
−→ qp.
So, almost surely, for all arbitrary ε > 0, there are some N ε
1 (p) > 0 that for
all n ≥ N ε
1 (p), we have
1[an(p),bn(p))(x) = 0, ∀x ∈ R \ (qp − ε, qp + ε),
and so,
1[an(p),bn(p))(x) ≤ 1(qp−ε , qp+ε)(x).

16 ALMANI
Hence, for i ≥ 1
1[an(p),bn(p))(Xi) ≤ 1(qp−ε , qp+ε)(Xi).
So, for n ≥ N ε
1 (p), we have
|Un(p) − Vn(p)| ≤ 1
n
n
X
i=1
|Xi| 1{[an(p),bn(p))}(Xi)
≤1
n
n
X
i=1
|Xi| 1(qp−ε , qp+ε)(Xi).
Again, by the strong LLN
1
n
n
X
i=1
|Xi| 1(qp−ε , qp+ε)(Xi) a.s.
−→ E |X1| 1(qp−ε , qp+ε)(X1) .
That is, almost surely, for all ε > 0, there are some N ε
2 (p) > 0 that for all
n ≥ Nε
2 (p), we have
|Un(p) − Vn(p)| ≤ E |X1| 1(qp−ε , qp+ε)(X1)
=
Zε
−ε
|qp − x| · f (qp − x) dx
≤ 2ε max
(−ε,ε)
|qp − x| · f (qp − x)
≤ 2εM,
where f is the Radon-Nikodym derivative of F , i.e., the probability density function of X1 . We note, as f is integrable in an interval (qp − l, qp + l) around x = qp , we have M = max(−l,l) |qp − x| · f (qp − x) < ∞. So,
|Un(p) − Vn(p)| a.s.
−→ 0. (4.4)
Now, (4.2) and (4.4) prove the Theorem since the intersection of two events, each with probability 1, also has probability 1. □
Corollary 4.2. By the assumptions and notations of the Lemma 4.1 and its proof, for n → ∞ we have Un(p) = 1
n
Pn
i=1 Xi1{Xi≥Qn(p)} is almost surely
(a.s.) close to the process Vn(p) = 1
n
Pn
i=1 Xi1{Xi≥qp} .
Next, we note
Λn(p) =
1 n
Pn
i=1 Xi1{Xi≥Qn(p)} 1 n
Pn
i=1 Xi
, (4.5)
and so, we have the following theorem as a straightforward consequence of the Lemma 4.1 and the strong LLN result that 1
n
Pn
i=1 Xi
a.s.
−→ μ .
Theorem 4.3. Let X1, X2, . . . , Xn be i.i.d random variables with common absolutely continuous distribution F , and μ = E[X1] ̸= 0. Then, for all p ∈ (0, 1) that F is continuous at its pth quantile qp , we have
Λn(p) a.s.
−→ aqp
μ , (4.6)
where aqp = E[X1 1{X1≥qp}].

INSIGHTS INTO TAIL-BASED AND ORDER STATISTICS 17
5. Asymptotic Distribution of Numerator
Considering the explicit form of Λn(p) given by equation (4.5), it has a ratio distribution for large n → ∞. If {Xi}i≥1 are i.i.d with E[Xi] = μ, Var[Xi] = σ2 , Then, by the central limit theorem (CLT), the denominator of the fraction converges to a normally distributed random variable. That is, for n → ∞
Zn = 1
n
n
X
i=1
Xi ∼ N (μ, σ2/n).
On the other hand, as {Xi 1{Xi≥Qn(p)}}i≥1 are not independent random variables, the CLT is not applicable for the asymptotic distribution of the numerator of the fraction Un(p), even though it converges almost surely by the Lemma 4.1. Considering the literature on ratio distributions and the multiple integral involved in the explicit form of the exact distribution functions, (3.1) and (3.2), a close form of the Λn(p) distribution is so complicated (casedependent) to characterize in general for lar-
ge n → ∞.
To overcome these difficulties, the asymptotic distribution of Un(p) is required. To this, we apply the asymptotic distribution of Qn(p) and the law of total probability. The asymptotic normality of the distribution of Qn(p) for n → ∞ was investigated by [6, 51]
Qn(p) ∼ N qp , p(1 − p)
nf 2(qp) , n → ∞. (5.1)
So, applying this distribution, one can see
fQn(p)(q) = e− nf2(qp)
2p(1−p) (q−qp)2
q 2πp(1−p) nf 2(qp)
n−→→∞ δqp(q).
While there are plenty studies for the ratio distributions of two Gaussian processes, the literatures for those ratios that numerator or denumerator are non-Gaussian are not that rich and also show sevear difficulties to have an explicit form of those ratio distribution. Then, a very straight forward question one may ask that is:
“Does Un have an asymptotic normality in distribution?”
The following theorem reveals a positive response, and the fact behind it.
Theorem 5.1. Let X1, X2, . . . , Xn be i.i.d square integrable random variables, i.e., E[X2
1 ] < ∞, with common distribution F continuous at qp . Then, for n → ∞, the process Un admits the asymptotic normal distribution
Un(p) ∼ N aqp , (b+
qp )2 + (b−
qp )2 + 2a+
qp a−
qp
.
n , (5.2)
where a+
qp , b+
qp are the expectation and standard deviation of X+
i 1{Xi≥qp} , and a−
qp , b−
qp are the expectation and standard deviation of X−
i 1{Xi≥qp} .

18 ALMANI
Proof. First, considering (5.1), for n → ∞ there are some rn > 0 that rn → 0 and P[Qn ∈ Brn(qp)] ≈ 1.
So, for n → ∞ almost surely
qp − rn ≤ Qn ≤ qp + rn,
and so,
1{Xi≥qp+rn} ≤ 1{Xi≥Qn} ≤ 1{Xi≥qp−rn}.
Next, we have Xi = X+
i − X−
i where X+
i = max{Xi, 0} and X−
i= max{−Xi, 0}, and also
X+
i 1{Xi≥qp+rn} ≤ X +
i 1{Xi≥Qn} ≤ X +
i 1{Xi≥qp−rn},
X−
i 1{Xi≥qp+rn} ≤ X −
i 1{Xi≥Qn} ≤ X −
i 1{Xi≥qp−rn}.
Hence,
X+
i 1{Xi≥qp+rn} − X −
i 1{Xi≥qp−rn}
≤ Xi1{Xi≥Qn} = (X +
i − X−
i )1{Xi≥Qn}
≤ X+
i 1{Xi≥qp−rn} − X −
i 1{Xi≥qp+rn}, (5.3)
and so,
W+
+ (n) − W −
− (n) ≤ Un ≤ W +
− (n) − W −
+ (n),
where
W+
+ (n) = 1
n
n
X
i=1
X+
i 1{Xi≥qp+rn},
W+
− (n) = 1
n
n
X
i=1
X+
i 1{Xi≥qp−rn},
W−
+ (n) = 1
n
n
X
i=1
X−
i 1{Xi≥qp+rn},
W−
− (n) = 1
n
n
X
i=1
X−
i 1{Xi≥qp−rn},
are all Gaussian processes. So, the processes Wn := W +
+ (n) − W −
− (n) and
Vn := W +
− (n) − W −
+ (n) are also Gaussian and
Wn ≤ Un ≤ Vn. (5.4)
Now,
E[Wn] = E[X+
1 1{X1≥qp+rn}] − E[X −
1 1{X1≥qp−rn}] =: a+
+(n, qp) − a−
−(n, qp),
E[Vn] = E[X+
1 1{X1≥qp−rn}] − E[X −
1 1{X1≥qp+rn}] =: a+
−(n, qp) − a−
+(n, qp),
and
Var[Wn] = 1
n Var[X+
1 1{X1≥qp+rn}] + Var[X −
1 1{X1≥qp−rn}]
− 2Cov[X+
1 1{X1≥qp+rn}, X −
1 1{X1≥qp−rn}]

INSIGHTS INTO TAIL-BASED AND ORDER STATISTICS 19
=1
n (b+
+)2(n, qp) + (b−
−)2(n, qp) + 2a+
+(n, qp)a−
−(n, qp) .
Similarly,
Var[Vn] = 1
n Var[X+
1 1{X1≥qp−rn}] + Var[X −
1 1{X1≥qp+rn}]
− 2Cov[X+
1 1{X1≥qp−rn}, X −
1 1{X1≥qp+rn}]
=1
n (b+
−)2(n, qp) + (b−
+)2(n, qp) + 2a+
−(n, qp)a−
+(n, qp) .
Then, for n → ∞
E[Wn], E[Vn] ≈ aqp,
Var[Wn], Var[Vn] ≈ 1
n (b+
qp )2 + (b−
qp )2 + 2a+
qp a−
qp .
These and (5.4) proves this Theorem. □
6. Asymptotic Distribution of Tail-Based Statistic
The previous section discussed how Un is asymptotically a normal process N (μn(p), σ2
n(p)/n), that for known large-size sample distributions we have
μn(p) ≈ aqp and σ2
n(p) ≈ (b+
qp )2 + (b−
qp )2 + 2a+
qp a−
qp . Thus, the process Λn has a ratio distribution of two correlated, noncentral, normally distributed processes, Un and Zn . Here, we aim to identify this ratio distribution. The method used in the following lemma was initiated by [32] and further developed by [54], who transformed the variables into a ratio of two uncorrelated normal processes with a constant offset. [30] showed that these ratios can be “almost Gaussian” under certain restrictions, [27] provided an exact analysis, and [48] exami-
ned them comprehensively. However, their computational combinations and associated complexities must be taken into account. [32] also developed exact results for the correlated case. By transforming the variables to be uncorrelated, however, one can simply apply Hinkley’s formula rather than resorting to more complicated expressions.
Lemma 6.1. Let X1, X2, . . . , Xn be i.i.d square integrable random variables, i.e., E[X2
1 ] < ∞, with common absolutely continuous distribution F . Then, for n → ∞,
Cn(p) = Cov[Un, Zn] = cn(p)/n, (6.1)
ρn(p) = Cor[Un, Zn] = cn(p)
σ · σn(p) , (6.2)
cn(p) ≈ a(2)
qp − μaqp = b2
qp −  ̃aqpaqp, (6.3)
where a(2)
qp = E[X2
i 1{Xi≥qp}] and a ̃qp = μ − aqp = E[Xi1{Xi≤qp}] .
Proof.
Cov[Un, Zn] = 1
n2 Cov
"n X
i=1
Xi1{Xi≥Qn},
n
X
j=1
Xj
#

20 ALMANI
=1
n2
n
X
i,j=1
Cov[Xi1{Xi≥Qn}, Xj].
From (5.3) we have
X+
j X+
i 1{Xi≥qp+rn} − X +
j X−
i 1{Xi≥qp−rn}
≤ X+
j Xi1{Xi≥Qn}
≤ X+
j X+
i 1{Xi≥qp−rn} − X +
j X−
i 1{Xi≥qp+rn},
and also,
X−
j X+
i 1{Xi≥qp+rn} − X −
j X−
i 1{Xi≥qp−rn}
≤ X−
j Xi1{Xi≥Qn}
≤ X−
j X+
i 1{Xi≥qp−rn} − X −
j X−
i 1{Xi≥qp+rn}.
So,
X+
j X+
i 1{Xi≥qp+rn} − X +
j X−
i 1{Xi≥qp−rn}
− X−
j X+
i 1{Xi≥qp−rn} + X −
j X−
i 1{Xi≥qp+rn}
≤ Xj Xi1{Xi≥Qn} = (X+
j − X−
j )Xi1{Xi≥Qn}
≤ X+
j X+
i 1{Xi≥qp−rn} − X +
j X−
i 1{Xi≥qp+rn}
− X−
j X+
i 1{Xi≥qp+rn} + X −
j X−
i 1{Xi≥qp−rn},
and for n → ∞ we have
E[Xj Xi1{Xi≥Qn}] ≈ E[Xj Xi1{Xi≥qp}]
=
(
E[X 2
i 1{Xi≥qp}] = a(2)
qp i = j
E[Xj]E[Xi1{Xi≥qp}] = μaqp i ≤ j.
Hence,
Cov[Xi1{Xi≥Qn}, Xj] ≈
(
a(2)
qp − μaqp i = j
0 i ̸= j,
and so,
Cov[Un, Zn] = a(2)
qp − μaqp
.
n.
□
Lemma 6.2. For μ ̸= 0, the process
eΛn = Λn − cn
σ2
is a ratio of uncorrelated noncentral Gaussian processes, and has the probability density function
f
Λen(t) =
rn
2πσ2σ ̃2n
·
Be(t)
Ae3(t) · exp
"
−n
2 · μ2
σ2 · (t − μ ̃n/μ)2
t2 + σ ̃2n/σ2
#
erf Be(t)
Ae(t)
rn
2
!
+ e− n
2 r2n
πσσ ̃nAe2(t) , (6.4)

INSIGHTS INTO TAIL-BASED AND ORDER STATISTICS 21
where
μ ̃n = μn − μcn/σ2, σ ̃n = pσ2n − c2n/σ2, r2
n = μ ̃2
n/σ ̃2
n + μ2/σ2
Ae(t) =
s
t2
σ ̃2n
+1
σ2 , Be(t) = μ ̃n
σ ̃2n
t+ μ
σ2 .
Proof. We have
Λn = μn + un
μ + zn
, (6.5)
where un(p) and zn are corellated central Gaussian variables with variances σ2
n/n and σ2/n respectively, and correlation ρn . Now, we apply the GearyHinkley transformation. Let
u ̃n = un − ρu,z
σu
σz
zn
= un − ρn
σn
σ zn
= un − cn
σ2 zn,
then u ̃n and zn are uncorrelated, and by
E[u ̃n] = μn − μ · cn
σ2 =: μ ̃n,
Var[u ̃n] = (σ2
n − c2
n/σ2)/n =: σ ̃2
n/n,
we have
Λn = μ ̃n + u ̃n
μ + zn
+ cn
σ2 .
Hence,
Λen = Λn − cn
σ2 = μ ̃n + u ̃n
μ + zn
,
is a ratio of uncorrelated noncenteral Gaussian process, and so by [32] has the probability density function
f
Λen(t) = n exp(−R2/2)
2πσnσ a2(t)
√2π b(t)
a(t) exp b2(t)
2a2(t) erf b(t)
√2a(t) + 2 , (6.6) where
R2 = n μ ̃2
n
σ ̃2n
+ μ2
σ2 = nr2
n,
a(t) =
s
n t2
σ ̃2n
+1
σ2 = √nAe(t),
b(t) = n μ ̃n
σ ̃2n
t+ μ
σ2 = nBe(t).
Finally, since
1
2 R2 − b2(t)
a2(t) = n
2 R2 − B2(t)
A2(t) = n
2 · μ2
σ2 · (t − μ ̃n/μ)2
t2 + σ ̃2n/σ2 ,

22 ALMANI
(6.6) results (6.4). □
Compensating the constant offset −cn/σ2 of the Lemma 6.2, by changing variable t 7→ t − cn/σ2 we have the following theorem.
Theorem 6.3. For μ ̸= 0 and n → ∞, the (asymptotic) probability density function of Λn is
fΛn(t) =
rn
2π(σ2σ2n − c2n) · B(t)
A3(t) erf B(t)
A(t)
rn
2
× exp −n
2 · μ2
σ2 · (t − μn/μ)2
(t − σn/σ)2 + 2t(1 − ρn)σn/σ
+ e− n
2 r2n
πA2(t)pσ2σ2n − c2n
, (6.7)
where
A(t) =
s
(t − cn/σ2)2
σ2n − c2n/σ2 + 1
σ2 ,
B(t) = μn − cnμ/σ2
σ2n − c2n/σ2 (t − cn/σ2) + μ
σ2 ,
r2
n = (μn − cnμ/σ2)2
σ2n − c2n/σ2 + μ2
σ2 .
Proof. For all T ∈ R
FΛn(T ) = P[Λn ≤ T ]
= P[eΛn ≤ T − cn/σ2]
=
Z T −cn/σ2
−∞
f
Λen(u) du
=
ZT
−∞
f
Λen(t − cn/σ2) dt,
and so,
fΛn(t) = fΛen(t − cn/σ2),
where fΛen is given by Lemma 6.2. Now, one may note
(t − cn/σ2 − μ ̃n/μ)2
(t − cn/σ2)2 + σ ̃2n/σ2 = (t − μn/μ)2
(t − σn/σ)2 + 2t(1 − ρn)σn/σ .
□
There is another approach to investigate the ratio distribution provided by Katz (1978) distribution approximation [34]. Here, we formulate it for Λn by the following proposition.

INSIGHTS INTO TAIL-BASED AND ORDER STATISTICS 23
Proposition 6.4. For μ ̸= 0 and n → ∞, the process Λn admits the approximatly logarithmic Gaussian distribution
Λn ∼ μn
μ · LogN ormal 0,
σ2
μ2 + σ2n
μ2n − 2cn
μnμ
n
!
. (6.8)
Proof. From (6.5) we have
Λn = μn
μ · 1 + un/μn
1 + zn/μ , (6.9)
where un ∼ N (0, σ2
n/n) and zn ∼ N (0, σ2/n). Taking the logarithm of (6.9), we have
log Λn = log μn
μ + log 1 + un
μn
− log 1 + zn
μ . (6.10)
Here, we apply the logarithmic power series, covergent on |x| < 1,
log(1 + x) =
∞
X
k=0
(−1)k xk+1
k + 1 = x − x2
2 + x3
3 −···
to approximate the two final part of the right hand side of (6.10). By the first power k = 1, for n → ∞ we have
log Λn ≈ log μn
μ + un
μn
− zn
μ
∼ log μn
μ + N 0,
σ2
μ2 + σ2n
μ2n − 2cn
μnμ
n
!
, (6.11)
or equivalently
Λn ≈ μn
μ · exp un
μn
− zn
μ,
and this proves (6.8). □
Remark 6.5. The asymptotic ratio distributions (6.7) and (6.8) are indeed usefull when the sample distribution is unknown. However, if the sample distribution is known, then by Theorem 4.3, Theorem 5.1, and Lemma 6.1 for n → ∞ we can apply
μn ≈ aqp ,
σ2
n ≈ (b+
qp )2 + (b−
qp )2 + 2a+
qp a−
qp ,
cn ≈ b2
qp −  ̃aqp aqp ,
in (6.7), and also (6.8) returns
Λn ∼ aqp
μ · LogN ormal


0,
σ2
μ2 + (bq+p )2+(bq−p )2+2aq+p aq−p
aq2p
− 2bq2p −2 ̃aqp aqp
μaqp
n


 . (6.12)

24 ALMANI
7. Simulation and Callibration
In this section, we conduct Monte Carlo simulations of the distribution (6.8) with p = 80% for n = 1000 i.i.d variables, and N = 105 replications, with variables’ common (continuous) distributions
Normal(μ, σ2), Lognormal(μ, σ2), Exponential(μ),
Raileigh(b), GeneralizedPareto(k, s, θ), Gamma(α, θ),
where μ = θ = 1, σ = k = b = s = 0.25, α = 3, and their practical estimated distribution. To enable a clear comparison between the log-normal formulated density function and the empirically estimated density function, both are plotted on the histogram of the Λn statistics in Figure 1. One can easily observe how closely they approximate the actual density of this statistic, although, due to the sample size and the numbers n and N , there are always some differences between the formulated and estima-
ted distributions. The accumulated area between the two curves (which represents the difference in cumulative probability) is reported in Table 1.
Figure 1. The histogram, analytical log-normal probability density function, and estimated probability density function of Λn for i.i.d variables from different continuous distributions.

INSIGHTS INTO TAIL-BASED AND ORDER STATISTICS 25
Distribution Area between PDFs
Normal 0.0713 LogNormal 0.0708 Exponential 0.0662 Rayleigh 0.0687 Generalized Pareto 0.0949 Gamma 0.0709
Table 1. Cumulative area between analytic and estimated PDFs for different variable distributions.
Acknowledgement
The concept of quantile contributions was originally introduced to me by Tommi Sottinen and Klaus Grobys in the context of another study on applied statistics in economics, sincerely grateful to them for their valuable insights and inspiration. Nevertheless, the present work is an independent analytical study, and all parts of the research, analysis, and writing have been carried out solely by the author.
References
[1] 10/90 gap, vol. from the original on January 21, 2021. Retrieved April 16, 2015., Global Forum for Health Research (Organization), Archive of Global Forum for Health Research, 2011.
[2] B. C. Arnold and N. Balakrishnan, Relations, bounds and approximations for order statistics, vol. 53, Springer Science & Business Media, 2012.
[3] B. C. Arnold, N. Balakrishnan, and H. N. Nagaraja, A first course in order statistics, SIAM, 2008.
[4] S. Asmussen, Steady-state properties of GI/G/1, Applied probability and Queues, (2003), pp. 266–301. [5] R. L. Axtell, Zipf distribution of us firm sizes, science, 293 (2001), pp. 1818–1820. [6] R. R. Bahadur, A note on quantiles in large samples, The Annals of Mathematical Statistics, 37 (1966), pp. 577–580.
[7] A.-L. Barabasi and Z. N. Oltvai, Network biology: understanding the cell’s functional organization, Nature reviews genetics, 5 (2004), pp. 101–113.
[8] P. Barford, J. Kline, D. Plonka, and A. Ron, A signal analysis of network traffic anomalies, in Proceedings of the 2nd ACM SIGCOMM Workshop on Internet measurment, 2002, pp. 71–82.
[9] Z. P. Bazˇant, Scaling theory for quasibrittle structural failure, Proceedings of the National Academy of Sciences, 101 (2004), pp. 13400–13407. [10] J. Bentley, Programmimg pearls, Communications of the ACM, 28 (1985), pp. 896901.
[11] G. Buzs ́aki and K. Mizuseki, The log-dynamic brain: how skewed distributions affect network operations, Nature Reviews Neuroscience, 15 (2014), pp. 264–278.
[12] E. Castillo and A. Fern ́andez-Canteli, A general regression model for lifetime evaluation and prediction, International Journal of Fracture, 107 (2001), pp. 117–137. [13] A. Charles, What is the 1% rule?, The Guardian, July 2006.
[14] V. Chistyakov, A theorem on sums of independent positive random variables and its applications to branching random processes, Theory of Probability & Its Applications, 9 (1964), pp. 640–648.

26 ALMANI
[15] A. Clauset, C. R. Shalizi, and M. E. Newman, Power-law distributions in empirical data, SIAM review, 51 (2009), pp. 661–703.
[16] R. Cont, Empirical properties of asset returns: stylized facts and statistical issues, Quantitative finance, 1 (2001), p. 223.
[17] R. M. Cooke, D. Nieboer, and J. Misiewicz, Fat-Tailed Distributions: Data, Diagnostics and Dependence, Volume 1, vol. 1, John Wiley & Sons, 2014. [18] M. E. Crovella and A. Bestavros, Self-similarity in world wide web traffic: Evidence and possible causes, IEEE/ACM Transactions on networking, 5 (2002), pp. 835846.
[19] L. Currat, A. Francisco, S. Al-Tuwaijri, A. Ghaffar, and S. Jupp, 10/90 report on health research 2003-2004, vol. Archived 2015-04-16 at the Wayback Machine, WHO Drug Information, 2004.
[20] S. Davey, The 10/90 report on health research 2003-2004., 2004. [21] A. B. Downey, The structural cause of file size distributions, in Proceedings of the 2001 ACM SIGMETRICS international conference on Measurement and modeling of computer systems, 2001, pp. 328–329.
[22] L. Doyal, Gender and the 10/90 gap in health research, 2004.
[23] P. Embrechts, C. Klu ̈ppelberg, and T. Mikosch, Modelling extremal events: for insurance and finance, vol. 33, Springer Science & Business Media, 2013.
[24] A. Endo, S. Abbott, A. J. Kucharski, S. Funk, et al., Estimating the overdispersion in covid-19 transmission using outbreak sizes outside china, Wellcome open research, 5 (2020), p. 67.
[25] V. Fabian and J. Hannan, Introduction to probability and mathematical statistics, John Wiley & Sons, 1985.
[26] E. F. Fama, Mandelbrot and the stable paretian hypothesis, The journal of business, 36 (1963), pp. 420–429.
[27] E. C. Fieller, The distribution of the index in a normal bivariate population, Biometrika, 24 (1932), pp. 428–440.
[28] S. Foss, D. Korshunov, S. Zachary, et al., An introduction to heavy-tailed and subexponential distributions, vol. 6, Springer, 2011. [29] X. Gabaix, Power laws in economics and finance, Annu. Rev. Econ., 1 (2009), pp. 255–294.
[30] R. C. Geary, The frequency distribution of the quotient of two normal variates, Journal of the Royal Statistical Society, 93 (1930), pp. 442–446.
[31] M. Harchol-Balter, B. Schroeder, N. Bansal, and M. Agrawal, Size-based scheduling to improve web performance, ACM Transactions on Computer Systems (TOCS), 21 (2003), pp. 207–233.
[32] D. V. Hinkley, On the ratio of two correlated normal random variables, Biometrika, 56 (1969), pp. 635–639.
[33] H. Jeong, S. P. Mason, A.-L. Barab ́asi, and Z. N. Oltvai, Lethality and centrality in protein networks, Nature, 411 (2001), pp. 41–42.
[34] D. Katz, J. Baptista, S. Azen, and M. Pike, Obtaining confidence intervals for the risk ratio in cohort studies, Biometrics, (1978), pp. 469–474.
[35] W. E. Leland, M. S. Taqqu, W. Willinger, and D. V. Wilson, On the selfsimilar nature of ethernet traffic (extended version), IEEE/ACM Transactions on networking, 2 (2002), pp. 1–15.
[36] M. Lin, B. Fan, J. C. Lui, and D.-M. Chiu, Stochastic analysis of file-swarming systems, Performance Evaluation, 64 (2007), pp. 856–875.
[37] J. O. Lloyd-Smith, S. J. Schreiber, P. E. Kopp, and W. M. Getz, Superspreading and the effect of individual variation on disease emergence, Nature, 438 (2005), pp. 355–359.
[38] T. Lux and M. Marchesi, Scaling and criticality in a stochastic multi-agent model of a financial market, Nature, 397 (1999), pp. 498–500.

INSIGHTS INTO TAIL-BASED AND ORDER STATISTICS 27
[39] B. Mandelbrot, The variation of certain speculative prices, The Journal of Business, 39 (1963), p. 394–419.
[40] B. B. Mandelbrot and R. L. Hudson, The (mis) behaviour of markets: a fractal view of risk, ruin and reward, Profile books, 2010. [41] M. W. Mantle and R. Lichty, Managing the unmanageable: rules, tools, and insights for managing software people and teams, Addison-Wesley, 2012. [42] R. Metzler and J. Klafter, The random walk’s guide to anomalous diffusion: a fractional dynamics approach, Physics reports, 339 (2000), pp. 1–77.
[43] D. Middleton, Non-gaussian noise models in signal processing for telecommunications: new methods an results for class a and class b noise models, IEEE Transactions on information theory, 45 (2002), pp. 1129–1149.
[44] T. Mikosch, Regular variation, subexponentiality and their applications in probability theory, (1999).
[45] C. L. Nikias and M. Shao, Signal processing with alpha-stable distributions and applications, Wiley-Interscience, 1995. [46] V. Pareto, Cours d’e ́conomie politique, vol. 1, Librairie Droz, 1964.
[47] V. Paxson and S. Floyd, Wide area traffic: the failure of poisson modeling, IEEE/ACM Transactions on networking, 3 (1995), pp. 226–244.
[48] T. Pham-Gia, N. Turkkan, and E. Marchand, Density of the ratio of two normal random variables and applications, Communications in Statistics-Theory and Methods, 35 (2006), pp. 1569–1591.
[49] R.-D. Reiss, Approximate distributions of order statistics: with applications to nonparametric statistics, Springer science & business media, 2012.
[50] T. Rolski, H. Schmidli, V. Schmidt, and J. L. Teugels, Stochastic processes for insurance and finance, John Wiley & Sons, 2009. [51] R. J. Serfling, Approximation theorems of mathematical statistics, John Wiley & Sons, 2009.
[52] M. F. Shlesinger, G. M. Zaslavsky, and J. Klafter, Strange kinetics, Nature, 363 (1993), pp. 31–37.
[53] D. Sornette, Why stock markets crash: critical events in complex financial systems, in Why stock markets crash, Princeton university press, 2009. [54] M. D. Springer, The algebra of random variables, (1979).
[55] T. Sturgeon, The Claustrophile, Venture: Science fiction Magazine, (1956). [56] , On Hand: A book, Venture: Science fiction Magazine, 1 (1957). [57] , On Hand...Offhand: Books, Venture: Science fiction Magazine, 1 (1957). [58] , Sturgeon’s law, Venture Science Fiction, 66 (1958), pp. 2–8.
[59] N. N. Taleb, The Black Swan: The Impact of the Highly Improbable, vol. 2, Random house trade paperbacks, 2010.
[60] N. N. Taleb and R. Douady, On the super-additivity and estimation biases of quantile contributions, Physica A: Statistical Mechanics and its Applications, 429 (2015), pp. 252–260.
[61] T. Van Mierlo et al., The 1% rule in four digital health social networks: an observational study, Journal of medical Internet research, 16 (2014), p. e2966.
[62] D. Vidyasagar, Global notes: the 10/90 gap disparities in global health research, Journal of Perinatology, 26 (2006), pp. 55–56.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:49.500Z
- **Text Length:** 47362 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 28 of 28
