# PDF Document: Diakonikolas et al. - 2025 - PTF Testing Lower Bounds for Non-Gaussian Component Analysis.pdf

**File Path:** Diakonikolas et al. - 2025 - PTF Testing Lower Bounds for Non-Gaussian Component Analysis.pdf

**Processed Date:** 2026-02-10T18:14:19.739Z

**File Size:** 682.65 KB

**Total Pages:** 43

**Extracted Pages:** 43

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3373

**Title:** PTF Testing Lower Bounds for Non-Gaussian Component Analysis

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

PTF Testing Lower Bounds for Non-Gaussian Component Analysis
Ilias Diakonikolas* University of Wisconsin-Madison ilias@cs.wisc.edu
Daniel M. Kane† University of California, San Diego dakane@cs.ucsd.edu
Sihan Liu‡ University of California, San Diego sil046@ucsd.edu
Thanasis Pittas§ University of Wisconsin-Madison pittas@wisc.edu
November 25, 2025
Abstract
This work studies information-computation gaps for statistical problems. A common approach for providing evidence of such gaps is to show sample complexity lower bounds (that are stronger than the information-theoretic optimum) against natural models of computation. A popular such model in the literature is the family of low-degree polynomial tests. While these tests are defined in such a way that make them easy to analyze, the class of algorithms that they rule out is somewhat restricted. An impo-
rtant goal in this context has been to obtain lower bounds against the stronger and more natural class of low-degree Polynomial Threshold Function (PTF) tests, i.e., any test that can be expressed as comparing some low-degree polynomial of the data to a threshold. Proving lower bounds against PTF tests has turned out to be challenging. Indeed, we are not aware of any non-trivial PTF testing lower bounds in the literature. In this paper, we establish the first non-trivial PTF testing lower bounds f-
or a range of statistical tasks. Specifically, we prove a near-optimal PTF testing lower bound for Non-Gaussian Component Analysis (NGCA). Our NGCA lower bound implies similar lower bounds for a number of other statistical problems. Our proof leverages a connection to recent work on pseudorandom generators for PTFs and recent techniques developed in that context. At the technical level, we develop several tools of independent interest, including novel structural results for analyzing the behavior -
of low-degree polynomials restricted to random directions.
*Supported by NSF Medium Award CCF-2107079, and an H.I. Romnes Faculty Fellowship. †Supported by NSF Medium Award CCF-2107547 and NSF Award CCF-1553288 (CAREER). ‡Supported by NSF Medium Award CCF-2107547 and NSF Award CCF-1553288 (CAREER). §Supported by NSF Medium Award CCF-2107079.
arXiv:2511.19398v1 [cs.DS] 24 Nov 2025

1 Introduction
In classical statistical estimation, the focus has primarily been on determining the minimum amount of information required to estimate the parameters of an unknown distribution to a desired level of accuracy. Classical statistical theory provides general methodology to characterize this quantity for a range of estimation and inference tasks. When taking computational aspects into account, the situation becomes more subtle. Statistically optimal estimators often entail an exhaustive search. On the-
 other hand, known computationally efficient estimators often require more data than is necessary. A fundamental question is whether these observed gaps are inherent. An information-computation gap describes a scenario where no computationally efficient method can achieve the information-theoretic limits. A key question is how to formally establish the existence of an information-computation gap for a particular problem. Traditional methods from complexity theory, such as NP-hardness, seem inadequ-
ate for this purpose; see, e.g., [ABX08]. Over the past decade, a line of work in theoretical computer science has made progress in our understanding of this broad question. A prominent approach to establishing information-computation gaps involves showing unconditional lower bounds within natural (yet restricted) computational models—such as Statistical Query (SQ) algorithms [Kea93, FGR+13], low-degree polynomials (LDP) [Hop18, KWB19], and Sum-of-Squares (SoS) algorithms (see, e.g., [BS16]). Thes-
e methodologies have provided rigorous evidence of information-computation tradeoffs for a range of fundamental and well-studied statistical tasks. In this paper, we consider the class of algorithms based on low-degree Polynomial Threshold Functions (PTFs). A degree-k PTF f : RN → {0, 1} is a function of the form f (x) = sign(p(x)), where p : RN → R is a polynomial of degree at most k and sign(u) denotes the function which is equal to 1 whenever u ≥ 0 and 0 otherwise. PTFs is a natural class of Bo-
olean functions that has been extensively studied in complexity theory and machine learning over the past six decades; see, e.g., [Ros58, Cho61, MTT61, Der65, MP88] for some early work and [DGJ+10, DHK+10, DKN10, MZ10, Kan11b, Kan14, DS14, DDFS14, DRST14, DKS18a, DK19, OST20, KM22, DKK+24]. We will use the term “PTF tests” for the associated class of algorithms. As we will explain below, PTF tests are strictly stronger than LDP tests. Perhaps surprisingly, prior to this work, no non-trivial inform-
ation-computation gaps were known against this class.
Background Before defining the family of PTF tests, we provide some background. We focus on hypothesis testing problems, as lower bounds for more complex tasks (like learning or parameter estimation) often stem from testing lower bounds. In particular, the null hypothesis is a single distribution D∅, and the alternative is sampled from a prior μ on a family Dalt of distributions (μ, D, and Dalt are known to the testing algorithm).
Problem 1.1 (Hypothesis Testing). We are given n samples in Rd generated in one of two ways:
• (Null Hypothesis) The samples are drawn i.i.d. from a known distribution D∅.
• (Alternative Hypothesis) A member Dalt is sampled according to a known prior distribution μ on a family of alternative distributions Dalt, and then the n samples are drawn i.i.d. from Dalt.
Given the samples, the goal is to distinguish between the two cases with high constant probability.
A natural class of tests is based on PTFs. As we review below, the well-studied class of Low-Degree Polynomial Tests consists of PTFs but they take a specifc form.
Low-Degree Polynomial (LDP) Tests We now define the family of LDP tests and discuss existing testing lower bounds in this model. Informally, the family contains tests of the following form: For a polynomial p that satisfies a separation in terms of its expected values under the null and the alternative distributions, the test is the thresholded version of p at the midpoint of these expected values. These tests are usually parameterized by two numbers: the maximum degree k of the polynomial, which -
quantifies the runtime of
1

evaluating the test, and, the number n of samples used. In slightly more formal language, given a polynomial p, a null distribution D∅ and an alternative distribution family Dalt that we aim to distinguish, the “advantage” γ of the polynomial is defined as the difference in expected values of p under D∅ versus under a random distribution Dalt from Dalt, relative to the variance of the polynomial. We will use the notation x(1:n) as a shorthand notation for x(1), . . . , x(n) throughout the paper.
Definition 1.2 (γ-advantageous polynomial). Let γ > 0, p : Rn×d 7→ R be a degree-k, n-sample polynomial. Let D∅ be a distribution in Rd, Dalt be a family of distributions in Rd, μ be a distribution on Dalt, and H be the hypothesis testing of distinguishing between D∅ and Dalt with prior μ. We say that p is a degree-k, n-sample, γ-advantageous polynomial with respect to the testing problem H if:1
E
x(1:n) ∼D∅
h
p(x(1:n))
i
− DalEt∼μ y(1:n) ∼Dalt
h
p(y(1:n))
i
> γ max Var
x(1:n) ∼D∅
h
p(x(1:n))
i
, Var
Dalt ∼μ y(1:n) ∼Dalt
h
p(y(1:n))
i 1/2
.
The family of n-sample, k-degree polynomial tests includes all tests h : Rn×d → {0, 1} of the following form. For every polynomial p : Rn×d → R of degree at most k, the family contains a test h(x(1), . . . , x(n)) = sign p(x(1), . . . , x(n)) − κ that thresholds the polynomial at the point κ which is defined to be the midpoint
of the two expectations Ex(1),...,x(n)∼D∅ p(x(1), · · · , x(n)) and EDalt∼μ,y(1),...,y(n)∼Dalt p(y(1), · · · , y(n) . It then follows immediately from Chebyshev’s inequality that if there is a γ-advantageous polynomial p, then the test h in the family corresponding to p has bounded error probability:
Pr
x(1) ,...,x(n) ∼D∅
h x(1), . . . , x(n) = 1 + Pr
Dalt ∼μ,y(1) ,...,y(n) ∼Dalt
h y(1), . . . , y(n) = 0 ≤ 8/γ2.
That is, a polynomial with large advantage γ directly translates to an effective tester with low error probability. Conversely, an upper bound on γ against all low-degree polynomials indicates that no tests (with high success probability) exist under this design framework. A convenient fact about Definition 1.2 is that the optimal advantage for a testing problem is relatively easy to analyze.2 In particular, if one squares the defining equation for γ-advantage, it becomes a bound on the relative s-
ize of two explicit quadratic forms over the space of all degree at most k-polynomials, which can be explicitly optimized to find the optimal value of γ. This yields a convenient framework for analyzing the power of Low-Degree Polynomial tests, in which many quantitatively tight lower bounds have been established; see, e.g., [HS17, BKW19, KWB19, BBH+21, MW21, SW22, DKWB24] for a variety of statistical problems.
(General) Polynomial Threshold Function Tests Following the above discussion, one could see that a key limitation of existing hardness results for the LDP tests family is that they only yield lower bounds against the specific proof technique based on second-moment Chebyshev’s inequality while leaving the general power of all polynomial threshold function tests, namely all tests of the form sign(p(x(1), · · · , x(n))), where p is an arbitrary low-degree polynomial, and x(i) are the samples drawn, p-
oorly understood; see the definition below for a formal definition of a low-degree PTF test.
Definition 1.3 (β-good PTF test). Let D∅ be a distribution in Rd, Dalt be a family of distributions in Rd, μ be a distribution on Dalt, and H be the hypothesis testing problem whose null distribution, alternative distributions family, and prior distribution are given by D∅, Dalt, and μ accordingly. Let h : Rn×d 7→ {0, 1} be a polynomial threshold function of degree-k. We say h is a β-good PTF test for H if it satisfies that
E
x(1) ,...,x(n) ∼D∅
h
h(x(1), · · · , x(n))
i
−E
Dalt ∼μ,y(1) ,...,y(n) ∼Dalt
h
h(y(1), · · · , y(n))
i
≥ β. (1)
1Many works focusing on lower bounds, use only the variance under D∅ in the RHS of the condition in Definition 1.2. 2This holds for the variant where the RHS in Definition 1.2 includes only the variance with respect to D∅, which is usually a much simpler distribution. Using this variant suffices for the purpose of proving upper bounds on γ.
2

There is no clear reason to expect that the failure of this specific technique on a test problem would rule out all PTFs. Indeed, as we show in Section B, there exist simple examples of pairs of null and alternative distributions for which no polynomial satisfies the separation condition of Definition 1.2, yet PTF tests effectively solve the testing problem with high success probability. Understanding the power of general PTF tests is considered as a prominent research direction within the releva-
nt community [Hop24, Wei24]. Specifically, a recent workshop [HSW24] on information-computation tradeoffs highlighted PTF tests as one of the main directions in the frontier of this field. In his new survey [Wei], Wein writes: “[...] it is an interesting open problem to rule out other notions of success such as thresholding, but this seems beyond our current capabilities.” In this work, we therefore ask the question:
Can we rigorously prove information-computation gaps within the family of all PTF tests?
As our main contribution, we answer this question in the affirmative. In particular, we give the first PTF testing lower bound for the fundamental task of Non-Gaussian Component Analysis. As an immediate corollary, we obtain PTF lower bounds for a number of other statistical problems.
Non-Gaussian Component Analysis Historically, NGCA is a problem that originates from the signal processing literature [BKS+06], and has since attracted much attention from the algorithmic statistics and theoretical machine learning communities; see [SKBM08, SNS16, DJNS13, GS19, DH24]. Informally, the problem corresponds to the task of searching for a non-Gaussian direction of some high-dimensional distribution. The testing version of NGCA aims at distinguishing between a high dimensional standard -
Gaussian N (0, I) and a distribution that is non-Gaussian along an unknown direction, but behaves like standard Gaussian in every other orthogonal direction. The alternative distribution, commonly referred to as the hidden-direction distribution is defined below:
Definition 1.4 (High-Dimensional Hidden Direction Distribution). For a distribution A on R and a unit vector v of Rd, we denote by MA,v the distribution of the random variable x+ξv, where x ∼ N (0, I−vv⊤) and ξ ∼ A. That is, MA,v is the distribution which coincides with A on the direction of v and is standard Gaussian in the orthogonal subspace.
The standard assumption is that the non-Gaussian component A is also similar to N (0, 1) in the sense that their first m moments match. The higher the m, the harder it becomes to distinguish MA,v, for random v, from the standard multivariate Gaussian. On the other hand, for algorithms to exist, one needs to assume that the (m + 1)st moment differs by a non-trivial amount.
Problem 1.5 (Non-Gaussian Component Analysis). Let A be a distribution in R that matches the first m moments with N (0, 1). We are given n samples generated in one of the following two ways:
• (Null Hypothesis) The samples are drawn i.i.d. from D∅ = N (0, I).
• (Alternative Hypothesis) First, a unit vector v ∈ Rd is drawn uniformly at random from the unit sphere, then the samples are drawn i.i.d. from Dalt = MA,v from Definition 1.4.
Given the samples, the goal is to distinguish between the two cases with high constant probability.
A concrete motivation in studying NGCA is that it exhibits information-computation gaps when A is carefully constructed to match many moments with the standard Gaussian. Information theoretically, it is known that the sample complexity of this problem is O(d) under some mild assumptions on the distribution A (see, e.g., [VX11]). Nonetheless, all known efficient algorithms require significantly larger resources (see e.g., [DH24]). Prior work has given formal evidence that solving NGCA requires eith-
er access to a large amount of information (specifically, many i.i.d. samples from the test distribution) or significant computational resources. Concretely, this phenomenon has been established for several well-studied families of algorithms, including Statistical Query (SQ) algorithms [DKS17, DKRS23], Sum-of-Squares (SoS) algorithms [DKPP24], and
3

Low-Degree Polynomial tests [MW21, BBH+21]. Since NGCA can be used to embed hard instances of several other statistical tasks [DKS17], a lower bound against NGCA directly implies lower bounds for several other problems. In this work, we give the first lower bound of NGCA against the family of PTF tests.
Connection to Pseudorandom Generators There is a close connection between lower bounds for hypothesis testing and the theory of pseudorandom generators (PRGs). Specifically, for a test to effectively distinguish between the null and alternative hypotheses, the probability of accepting each hypothesis must differ significantly. In the language of PRGs, Definition 1.3 failing implies that D⊗n
alt “fools” h with respect
to D⊗n
∅ with error at most β. Thus, proving lower bounds against degree-k PTF tests with n samples reduces
to showing that D⊗n
alt fools low-degree PTFs with respect to D⊗n
∅.
There is an extensive literature on PRGs for PTFs. These works generally aim to construct lowentropy distributions that fool PTFs under structured high-entropy distributions such as Gaussians, see, e.g., [DGJ+09, DKN10, MZ10, Kan11a, Kan11b, Kan12, OST20, KM22]. Despite this distinction, some techniques developed in the PRG literature (in particular [KM22]) can be leveraged in our setting. For our specific NGCA problem, the null distribution is precisely the standard Gaussian—for which some of the-
 strongest PRGs for PTFs are known. Moreover, the alternative distributions are assumed to match many moments with the Gaussian, a condition that is essentially necessary for indistinguishability and one that is also required by SQ and Low-degree lower bounds for establishing information-computation gaps in the literature.
1.1 Our Result
Our main theorem establishes that when the non-Gaussian component A from Problem 1.5 matches the first m moments with N (0, 1), there is no degree-k PTF that satisfies Definition 1.3 with β = 0.11 for the NGCA hypothesis testing problem of Problem 1.5, unless at least one of the following holds: The sample complexity
n is at least dΩ(m) or the degree k of the PTF is at least dΩ(1) (suggesting a runtime of (nd)dΩ(1)). Notably, this matches quantitatively with the computation-statistic tradeoff established for the weaker model of LDP tests.
Theorem 1.6 (Main Result). There exists a sufficiently large absolute constant C∗ such that the following holds. For any c∗ ∈ (0, 1/4), d, k, n, m ∈ Z+ such that (i) m is even, (ii) max(k, m) < dc∗/C∗, and (iii)
n < d(1/4−c∗)m, we have that if p : Rn×d 7→ R is a degree-k polynomial, and A is a distribution on R that matches the first m moments with N (0, 1), then:
E
v∼U (Sd−1)
x(1) ,...,x(n) ∼MA,v
h
sign(p(x(1), · · · , x(n)))
i
−E
x(1),...,x(n)∼N (0,I)
h
sign(p(x(1), · · · , x(n)))
i
≤ 0.11. (2)
where MA,v denotes the hidden direction distribution from Definition 1.4, and sign : R → {0, 1} is the sign function with sign(x) = 1 if and only if x ≥ 0.
One way of interpreting Theorem 1.6 is as follows. Let c∗ be an arbitrary constant chosen from (0, 1/4). If the PTF test uses n < d(1/4−c∗)m many samples, then the degree of the tester k must be at least some polynomial in the sample dimension d in order for the tester to be effective. The degree k can be interpreted as a parameter controlling the runtime of the tester. For an arbitrary polynomial p, the runtime for this computation is on the order of poly((nd)k)—as this is the space required for -
storing all relevant coefficients
of p. Consequently, Theorem 1.6 implies an inherent trade-off between the exponential runtime (nd)dΘ(c∗), and the sample complexity d(1/4−c∗)m for the family of PTF tests. One might wonder to what extent is the tradeoff established in Theorem 1.6 optimal, and how our result compares quantitatively to the hardness results shown in other restricted computation models. For hardness results against Statistical Query algorithms and LDP tests, existing lower bounds imply that there are no “efficient” te-
sters within these families if the number of samples drawn is less than d(1/2−c∗)m (see
4

Theorem D.1 and Theorem D.3 for the formal statements). Interestingly, the constant 1/2 in the exponent of these results is better than the constant 1/4 that appears in Theorem 1.6. Surprisingly, this gap—rather than being an artifact of our proof technique—is inherent for the family of PTF tests. In particular, if one fixes m to be some constant, we show in Theorem C.1 that there exists a degree-Θ(log d) PTF that draws only  ̃Θ(dm/4) many samples, and effectively solves the NGCA problem for some-
 specific moment-matching distribution A. As a sharp contrast, the SQ, and LDP test lower bounds predict that no such test should exist. This suggests that the constant 1/4 that appears in Theorem 1.6 is indeed worst-case optimal, and that PTF tests are (slightly) more powerful than SQ and LDP tests for certain NGCA problem instances. We leave it as an interesting open question whether the lower bound against PTF tests can be improved by making further structural assumptions on the non-Gaussian co-
mponent A beyond the moment-matching condition. Before we end this subsection, we briefly comment on the subtle condition that m < dc∗/C∗. This condition is commonly used in the literature for lower bounds against NGCA (see [DKS17, DKRS23]). Informally, the necessity of such a condition can be seen as follows. If m ≈ d, one cannot hope to prove a computation lower bound of (nd)m ≈ 2d log d. There is always a simple test that runs in time 2O(d): construct an exponential size cover of all possible d-
irections v, project the distribution along each possible direction and reduce to a one-dimensional testing problem.
Application to Other Statistical Tasks For many important statistical problems—such as robust mean estimation, list-decodable mean estimation, and learning Gaussian mixture models— that are seemingly unrelated to each other, one can construct hard instances that can be encoded as NGCA instances; see Chapter 8 of [DK23] or Section 1 of [DKPP24] for a more thorough treatment. This means that proving an information-computation gap for NGCA within a given computational model translates to informationc-
omputation gap for all these tasks. See Table 1 for a summary of some PTF testing lower bounds obtained as corollaries of Theorem 1.6.
Information-Computation Gaps for PTF tests
Statistical Estimation Task Information-Theoretic Sample Complexity
for low-degree PTFs
Robust Mean Estimation up to l2-error
O(τ plog(1/τ )/B2) with Isotropic Gaussians Oτ,B(d) Ω(dB(1−c∗)/4) Robust Mean Estimation up to l2-error O( 1
m τ 1−1/m) with bounded m-th moments Oτ (d) Ω(dm(1−c∗)/4)
List-decodable Mean Estimation to error O((mτ )−1/m) Oτ (d) Ω(dm(1−c∗)/4)
Learning the mixture of m Gaussians Oe(md) Ω(dm(1−c∗)/2)
Table 1: Comparison of our PTF lower bounds with the information-theoretic sample complexity for various tasks. The parameter τ is the rate of contamination, and the parameter c∗ can be set to any arbitrarily small constant. See Section E for the formal statements of the results that appear in the table.
Comparison with Existing Lower Bounds In general, lower bounds against PTF tests are incomparable to SQ and SoS lower bounds, as they capture different structural limitations of learning algorithms. For the specific problem of Non-Gaussian Component Analysis, SQ lower bounds are effectively equivalent to Low-Degree Polynomial (LDP) lower bounds as established in [BBH+21]. Our result therefore strengthens prior SQ and LDP lower bounds by demonstrating hardness under the more general PTF testing fra-
mework.
Future Directions Our work proves the first lower bounds against general PTF tests, a strenthening of the well-studied low-degree polynomial test family, for multiple statistical problems. Several open questions remain for future research. A key technical question is whether our lower bounds can be quantitatively improved under additional structural assumptions on the non-Gaussian component distribution A that arise
5

naturally in learning-theoretic settings, like bounded chi-square distance between A and N (0, 1). Identifying such refinements could lead to sharper hardness results and a deeper understanding of the limitations of PTF tests. Another important direction is to obtain PTF testing lower bounds for other fundamental statistical estimation problems not covered in this paper, such as planted clique [BHK+16] and sparse principal component analysis [ZHT06].
1.2 Technical Overview
We will use the notation x(1:n) to denote the sequence of vectors x(1), . . . , x(n). We want to show that for any low degree polynomial p : Rn×d 7→ R, we have that
E[sign p(x(1:n)) ] ≈ E
h
sign p(y(1:n))
i
, (3)
where each x(i) ∈ Rd follows an independent standard Gaussian, and each y(i) ∈ Rd follows our hidden direction distribution MA,v (see Definition 1.4) using a fixed vector v, which is sampled once uniformly at random from the unit sphere at the start. We begin with a brief recap of the setup in the PRG literature, and present a high level comparison between these approaches and ours. These works consider a generator distribution y ̄ = n−1/2 Pn
i=1 y ̄(i) in
Rd, where each y ̄(i) is chosen to be some low-entropy distribution whose low-degree moments match with the standard Gaussian.3 Given an arbitrary low-degree polynomial q : Rd 7→ R, the goal is then to show that E[sign(q(x))] ≈ E sign q n−1/2 Pn
i=1 y ̄(i) , where x is a standard Gaussian vector in Rd. Note that
the standard Gaussian x can be alternatively written as x = n−1/2 Pn
i=1 x(i), where the x(i)’s are themselves independent standard Gaussian distributions. Under this setup, their objective can be alternatively formulated
E
h
sign p ̄ x(1:n) i
≈E
h
sign p ̄ y ̄(1:n) i
where p ̄(z(1:n)) = q √1n
n
X
i=1
z(i) . (4)
Under this new formulation, one can see that our objective Equation (3) looks particularly similar to theirs except for two subtle differences. First, in the PRG setup, the polynomial p ̄ : Rn×d 7→ R has the specific form of being a lifted version of a significantly lower-dimensional polynomial q : Rd 7→ R (see Equation (4)). In fact, the structure turns out to be quite convenient for controlling the higher order derivatives of p ̄ in terms of each individual variable z(i), which are subsequently -
exploited in the PRG literature to establish the left part of Equation (4). In our setup, the polynomial p has a much more complex structure as it can be an arbitrary polynomial with n × d many inputs. This makes the task seemingly intractable at a first glance. The twist lies in the second difference between our setups: the underlying distribution of each y(i) in our objective exhibits significantly more structure compared to the pseudorandom distributions of y ̄(i). Specifically, instead of bein-
g an arbitrary distribution whose low-degree moments match with the standard Gaussian, the distribution of y(i) is identical to the Gaussian distribution in all but some randomly chosen direction v. This turns out to be a valuable property that counteracts the complexity of the polynomial p in our setup. More concretely, our main insight is that the specific properties of the hidden direction distribution essentially allow us to restrict our attention to higher order directional derivatives of p (-
projected onto the hidden direction v). By exploiting the fact that v is chosen randomly, we manage to show that the higher order directional derivatives of p can be effectively bounded in a way that is qualitatively similar to (but quantitatively different from) the case in the PRG literature, allowing us to escape from the full complexity of the polynomial p in all directions. In what follows, we give a more detailed sketch of our arguments interleaved with technical comparisons with the prior w-
ork in the PRG literature.
3In fact, each Yi is independently from a k-wise independent family of Gaussian distributions, which effectively satisfies the low-entropy and moment-matching conditions.
6

Overall Framework: Hybrid Argument and Mollification The basic proof strategy is via the so called hybrid argument developed in the PRG literature. At a high level, the framework is motivated by the wishful thinking that the task may be significantly easier if one progressively replaces the samples x(1:n) into y(1:n). In particular, in a single “replacement step”, the goal is to show the following intermediate approximation steps for all i = 1, . . . , n:
E
h
sign p x(1:i−1), x(i), y(i+1:n) i
≈E
h
sign p x(1:i−1), y(i), y(i+1:n) i
± o(1/n). (5)
If so, applying the triangle inequality n − 1 times would complete the proof of Equation (3). In both the PRG and the NGCA settings, one would like to exploit the assumption that the alternative distribution matches many moments with the standard Gaussian. Hence, a natural attempt to show Equation (5) would be to rewrite the expected values in terms of the moments of the corresponding distributions. If the PTF function were a smooth function, this can be achieved by considering the Taylor expansio-
n of the function. However, it is not hard to see that the function is discontinuous when the polynomial p evaluates to 0, making Taylor’s theorem not directly applicable. To circumvent the issue, the PRG literature uses the idea of mollification. Specifically, we would like to construct a sufficiently smooth function h : Rn×d 7→ [0, 1] that approximates the PTF sign(p(·)) well. As we have said, the PTF function sign(p(·)) is discontinuous when p(x) = 0. Hence, we cannot hope to have a smooth and -
pointwise close approximation near the zeros of the polynomial. Instead, we want h to have the same behavior as the PTF when the polynomial is “large” (in a technical sense that will be specified later), and then smoothly interpolate in the other case. On the one hand, this effectively ensures the smoothness property of h globally. On the other hand, h indeed approximates the PTF well under the Gaussian distribution4 as the only disagreement region is when the polynomial p is small, whose probabil-
ity mass can be bounded by the Gaussian anti-concentration properties or some variants (that will be discussed later on). For convenience, we refer to this smoothed approximation h of the PTF as the mollified PTF, and our task is now reduced to showing
E
h
h p x(1:i−1), x(i), y(i+1:n) i
≈E
h
h p x(1:i−1), y(i), y(i+1:n) i
± o(1/n). (6)
It then remains for us to (1) construct a smooth mollified PTF h that closely approximates sign(p(·)) under Gaussian inputs, and (2) show a single replacement step (Equation (6)) for this smooth function h (the formal version of this is in Proposition 3.5).
Mollification by Strong Anti-Concentration The difficulty of (1) is as follows: since the PTF function is discontinuous and h is smooth, we cannot expect h x(1:n) − sign p x(1:n) to be small for all inputs.
Alternatively, one must rely on some type of anti-concentration result saying that the probability of x(1:n) lying in the disagreement region between h and sign(p(·)) is small under the Gaussian distribution. A natural idea to do so would be to construct a smooth approximation of the indicator function g(x(1:n)) ≈ 1{|p(x(1:n))| > ε}, and define the mollified PTF to be the product g x(1:n) sign p x(1:n) . On the one hand, this ensures
that the function will smoothly interpolate between 0 and 1 for inputs x(1:n) near the zeros of p. On the other hand, the disagreement region will be roughly the same as the set {x(1:n) | p(x(1:n)) < ε}, which is guaranteed to have small mass by the famous Gaussian anti-concentration theorem from [CW01]. However, for an arbitrary polynomial p, the anti-concentration property decays rapidly as the degree of the polynomial
4A technical detail we omit here is that naively it seems like one also needs to show a similar approximation result under the distribution of y(1:n), which is technically challenging. Fortunately, this can be solved by a standard sandwich trick that reduces the task into constructing two mollified PTFs h+, h− such that (i) h+ (·) ≥ sign (p (·)) ≥ h− (·), and (ii) h+, h− approximates the PTF function well under the Gaussian distribution. This saves us from the trouble of showing how well the molli-
fied PTF approximates the PTF under the less structured distributions of y(1:n). We refer the reader to Section 3.2, and more specifically Lemma 3.4 for more detail on this.
7

increases, i.e., there exists a degree-k polynomial p such that Pr[p(x(1:n)) < ε] ≈ ε1/k. In the context of the PRG literature, this leads to an exponential dependency on the seed length5 while in our context the approach might break entirely once the polynomial degree k becomes larger than the logarithm of the sample dimension d. Needless to say, such an assumption would significantly weaken the lower bound on k compared to the target of k = dΩ(1) in Theorem 1.6. To tackle the issue, we borrow t-
he ideas from [OST20, Kan11b, KM22] that take advantage of the strong anti-concentration properties of polynomials. In particular, strong anti-concentration (see Equation (13)) is a relative notion of anti-concentration on the sizes of the derivatives of the polynomials: given a polynomial p of degree k, for any 0 ≤ t ≤ k − 1 and ε ∈ (0, 1), it holds that ∥∇tp x(1:n) ∥F > ε∥∇t+1p x(1:n) ∥F
with probability at least 1 − O(k2ε), where ∇tp x(1:n) denotes the tensor containing all t-th order partial derivatives of p. Notably, unlike the Carbery-Wright anti-concentration theorem, the failure probability here is only a polynomial in k, and it is precisely this polynomial dependency that makes the stronger lower bound on k from Theorem 1.6 possible. By setting ε = k−2.1, applying the union bound, and chaining the inequalities obtained, we obtain that
p x(1:n) > k−2.1 ∇p x(1:n)
F
> k−6.2 ∇2 x(1:n)
F
> . . . > k−2.1k ∇kp x(1:n)
F
, (7)
with high constant probability. Note that ∇kp is a constant tensor. Thus, as long as Equation (7) holds approximately (within a constant factor), we can infer that p x(1:n) must be non-zero and the PTF sign p x(1:n)
will be smooth. Therefore, it suffices to modify the function on inputs x(1:n) where Equation (7) is not approximately true. In particular, we can define a function ρ : R 7→ [0, 1] that serves as a smooth approximation of the indicator function 1{|z| ≤ 1}, and set the mollified PTF to be
 ̃h x(1:n) :=
k
Y
t=1
ρ k−Θ(1) ∇tp(x(1), . . . , x(n)) 2
F
∇t−1p(x(1), . . . , x(n)) 2
F
!
sign p x(1), . . . , x(n) . (8)
When Equation (7) holds,  ̃h is simply the same as the smooth part of the original PTF function. As the value of |p(x(1:n))| approaches 0, k−Θ(1)∥∇tp(x(1),...,x(n))∥2
F
∥∇t−1p(x(1),...,x(n))∥2
F
for some t must begin to exceed 1. Consequently, the
function ρ(·), which we define to be a smooth approximation of the indicator function 1{|x| ≤ 1} will decay smoothly until it reaches 0, ensuring the smoothness of the function  ̃h globally. Moreover, since Equation (7) holds with high constant probability, this ensures  ̃h approximates sign(p(·)) up to a small constant error over Gaussian inputs. As promising as it may seem, there are still substantial technical difficulties in showing the replacement step (Equation (6)) for this particular molli-
fied PTF  ̃h. At a high level, the difficulty stems from a design flaw in which Equation (8) fails to leverage the hidden directional structure of the underlying distribution of y(1:n). In the rest of the subsection, we will present a natural attempt to prove the replacement step for this mollified PTF  ̃h, illustrate the difficulty encountered, and present a simple modification on top of  ̃h to obtain our actual mollified PTF h (see Equation (10)).
Replacement Step by Taylor Expansion Consider the following natural attempt in showing the i-th replacement step (Equation (6)) for the mollified PTF  ̃h. Thanks to the smoothness property of  ̃h, we can rewrite  ̃h using its Taylor expansion in terms of the variable z to be replaced:
 ̃h x(1:i−1), z, y(i+1:n) =
∞
X
t=0
D
∇t
i ̃h x(1:i−1), 0, y(i+1:n) , z⊗tE
, (9)
5This was indeed the case for the early work [MZ10] based on such naive mollification procedures.
8

where ∇t
i ̃h denotes the tensor containing all t-th order partial derivatives of  ̃h with respect to its i-th argument.
Suppose that the first degree-m moments of z = x(i) ∼ N (0, I) and z = y(i) ∼ MA,v match exactly.
We then have that the difference Ez∼N (0,I)
h ̃h x(1:i−1), z, y(i+1:n) i
− Ez∼MA,v
h ̃h x(1:i−1), z, y(i+1:n) i
comes only from the higher order terms (the terms with t > m from Equation (9)). As we have said, the function  ̃h is carefully constructed to be as smooth as the polynomial p. Concretely, one can show by some straight
forward computation that ∇t
i ̃h x(1:n)
F should be roughly the same as ∇t
ip x(1:n)
F / p x(1:n) . In
the PRG literature, the particular polynomial p showing up is of the form p x(1:n) = q √1n x(1) + · · · + x(n) .
Due to the specific form of p, one can see that p has only a mild dependence on the i-th sample. Consequently, it is not hard to show that ∇t
ip x(1:n)
F / p x(1:n) is at most n−Θ(t). If we were to have the same bound on higher-order derivatives in our case, we could then consider the Taylor expansion truncated to the first degree-m terms, which gives that
 ̃h x(1:i−1), z, y(i+1:n) =
m−1
X
t=0
D
∇t
i ̃h x(1:i−1), 0, y(i+1:n) , z⊗tE
+
D
∇m
i  ̃h x(1:i−1), zb, y(i+1:n) , z⊗mE
,
where zb is some vector that lies in the line between z and 0. After that, we note that the expected values of the first (m − 1) terms match exactly under N (0, I) and MA,v while the last term is on the order of n−Θ(m) ≪ o(1/n). This would then readily conclude the proof of the replacement step. However, in our case, since p can be an arbitrary low-degree polynomial, we cannot say that p and subsequently  ̃h have only a weak dependence on the i-th sample. In particular, the best bound on ∇t
ip x(1:n)
F / p x(1:n) (and therefore ∥∇t
i ̃h∥F ) will be on the order of kΘ(t) (due to the tightness
of Equation (7)), which is an increasing function in t. As a result, the mollified PTF  ̃h simply cannot be approximated by its low-degree Taylor expansion, and this appears to be a substantial barrier in showing the replacement step (Equation (6)) for  ̃h. Our key insight is that we can instead leverage the specific structure of the underlying hidden direction distribution. In particular, we can exploit the fact that the distribution of y(i) only differs from that of x(i) in some randomly chosen -
direction v. As a result, instead of taking the Taylor expansion of  ̃h viewed as a multivariate function in terms of the entire i-th sample, we can now consider the directional Taylor expansion of  ̃h restricted to the v direction. That is, we view z as z ̄ + ξv for some z ̄ orthogonal to v, and we use the Taylor expansion with respect to the scalar variable ξ:
 ̃h x(1:i−1), z ̄ + ξv, y(i+1:n) =
m−1
X
t=0
Dt
i,v ̃h x(1:i−1), z ̄, y(i+1:n) ξt + Dm
i,v ̃h x(1:i−1),  ̄z + ξb, y(i+1:n) ξm ,
where ξb is some point in [0, ξ], and Dt
i,v ̃h denotes the t-th order directional derivative of  ̃h with respect to
the i-th sample, i.e., Di,v ̃h = v⊤∇i ̃h. Using the directional Taylor expansion, one can then write
E
z∼N (0,I)
h ̃h x(1:i−1), z, y(i+1:n) i
−E
z∼MA,v
h ̃h x(1:i−1), z, y(i+1:n) i
=E
z ̄∼N (0,I−vv⊤)
"∞ X
t=0
Dt
i,v ̃h x(1:i−1),  ̄z, y(i+1:n) ξ∼EA ξt − E
ξ∼N (0,1)
ξt
#
.
Since we assume that the first degree m moments of A match exactly with N (0, 1), it suffices to argue that the size of the t-th order directional derivative Dt
i,v ̃h is of diminishing size as a function of t.
Derivative Decay in a Random Direction Towards this goal, let x(1:n) be input samples following the
standard Gaussian distribution, and we will show that the directional derivative D(t)
i,v ̃h(x(1:n)) will have small
9

size with high constant probability, where the randomness is over v and x(1:n). With some straightforward computation, one can show that the above derivative has about the same size as the tensor containing all t-th order directional derivatives of the polynomial p along the direction of v. Specifically, we consider the tensor p[t],v(x(1:n)) ∈ (Rn)⊗t defined as follows:
p[t],v
i1,...,it (x(1), . . . , x(n)) = Di1,vDi2,v · · · Dit,vp(x(1), . . . , x(n)).
Alternatively, this directional derivative of p can be written as a product between the gradient tensor ∇tp(x(1:n)) and the “random direction tensor” v⊗t. By the strong anti-concentration property of Gaussian, x(1:n) satisfies Equation (7), and ∇tp(x(1:n)) must have size at most kΘ(t) p(x(1:n)) with high constant
probability. Therefore, the directional derivative can be large only if the full gradient tensor ∇tp(x(1:n)) correlates well with v⊗t. Since the distribution of x(1:n) is rotationally invariant (as a property of the standard Gaussian) and v is chosen randomly, it can be intuitively seen that the correlation will be small with high constant probability. In particular, via some technical tensor computation, we show in Lemma 3.1 that
p[t],v
i1,...,it x(1:n)
F
/|p(x(1:n))| will be on the order of d−t/4kO(t) with high constant probability over the
random choice of v and x(i) ∼ N (0, I). Consequently, if we assume that the degree k is a sufficiently small polynomial in d, i.e., k ≪ dΘ(1), d−t/4kO(t) should then be an exponentially decreasing function in t, implying that  ̃h is indeed well-approximated by its low-degree directional Taylor expansion. However, one subtle technical issue remains. That is, the above argument works only for the first replacement step when the input samples all follow the standard Gaussian distribution. In later re-
placement steps, some of the samples have already been replaced with the hidden direction distribution, which can make the gradient correlate strongly with the hidden direction v. As a result, we can no longer effectively control the size of the directional derivative even for x(1:n) satisfying the derivative decay condition in Equation (7).
Controlling Derivatives by Fine-Tuning the Mollifier To circumvent the issue, we proceed with the following simple modification to the mollifier function to explicitly check for derivative decay along the v-direction: instead of zeroing out the inputs on which the full derivative tensor ∇tp violates the strong anti-concentration property stated in Equation (7), we now define a new mollified PTF defined directly with respect to the directional derivatives of p:
h x(1:n) :=
k
Y
t=1
ρ dΘ(t) p[t],v(x(1), . . . , x(n)) 2
F
p(x(1), . . . , x(n))2
!
sign p(x(1), . . . , x(n)) , (10)
where ρ is as before a smooth approximation of the indicator function 1{|z| ≤ 1}. On the one hand, as a direct implication of Lemma 3.1, we have that the disagreement region between h and the original PTF will be small for a randomly chosen v under the Gaussian distribution. On the other hand, this simple modification ensures smoothness along the v direction for an arbitrary input x(1:n) that makes the mollifier PTF h non-zero. By some tedious but straightforward computation (Lemma 3.12), one can -
show that the size of the t-th order directional derivative of h is still roughly comparable to p[t],v x(1:n)
F / p x(1:n) . We can then
do a simple case analysis. If the ratio is large, then the term ρ dΘ(t)∥p[t],v(x(1),...,x(n))∥2
F
p(x(1),...,x(n))2 ensures that the
entire mollified PTF evaluates to 0. Otherwise, we can conclude that the t-th order directional derivative Dt
i,vh will be roughly on the order of d−Θ(t) (cf. Lemma 3.10). Due to the moment matching condition, when
one computes the difference Ez∼N (0,I) h x(1:i−1), z, y(i+1:n) − Ez∼MA,v h x(1:i−1), z, y(i+1:n) via the directional Taylor expansion, the first degree m terms in ξ cancel exactly, leaving us with the dominating term
Dm+1
i,v h x(1:i−1),  ̄z, y(i+1:n) ξ∼EA ξm+1 − E
ξ∼N (0,1)
ξm+1 ,
10

which can be appropriately bounded by d−Θ(m).6 As long as we have d−Θ(m) ≪ o(1/n), the replacement step will go through, and this concludes the sketch of our proof of Theorem 1.6.
2 Notation
2.1 Basic Notation
We use Z+ for the set of positive integers and [n] to denote {1, . . . , n}. We use bold lowercase letters for vectors and bold uppercase letters for tensors. We use 1d for the d-dimensional all-one vector, 0d for the d-dimensional all-zero vector, and Id for the d × d identity matrix. When the dimension is clear from the context, we will drop the subscript. For a set S, we use U(S) to denote the uniform distribution on S. Given a distribution D in Rd, we write x(1), · · · , x(n) ∼ D to denote n i-
.i.d. samples from D. For the sake of saving space, we often write x(1:n) to denote the sequence of vectors x(1), . . . , x(n). We write a ≫ b to denote that a ≥ C b for some sufficiently large constant C > 0.
2.2 Tensor Notation
We frequently use tensors in (Rn)⊗k. For some A ∈ (Rn)⊗k, we denote by Ai1,...,ik the entry in A indexed
by i1, . . . , ik ∈ [n]. For two tensors A, B ∈ (Rn)⊗k, we define the inner product (or dot product) between them as⟨A, B⟩ = P
i1,...,ik∈[n] Ai1,...,ik Ai1,...,ik . We use A♭ to denote the flattened version of A, i.e., the
vector in Rnk obtained by stacking all entries of A into a single vector in lexicographic order. We define the Frobenius norm of tensor A to be ∥A∥F := p⟨A, A⟩. For two tensors A ∈ (Rn)⊗k and B ∈ (Rn)⊗l with k > l we write AB to denote the tensor in (Rn)⊗(k−l) defined as follows:
(AB)il+1,...,ik :=
X
i1,...,il∈[n]
Ai1,...,il Bi1,...,il .
Note that for A, B ∈ (Rn)⊗k it holds that AB defined as above is the same as the inner product ⟨A, B⟩. Moreover, using the tensor product notation, if e(1), . . . , e(n) ∈ Rn denote the standard basis vectors, then T e(i) is simply the tensor T restricted on the first index being equal to i. Similarly T (e(i1) ⊗ · · · ⊗ e(ik)) selects the sub-tensor with the first k indices being i1, . . . , ik.
2.3 Derivative Notation
We write p : Rn×d 7→ R to denote a multi-variable function with n variables, where each variable is a d-dimensional vector. We write ∇ip to denote the vector of partial derivatives with respect to the i-th argument, i.e., ∇ip : Rn×d 7→ Rd and ∇ip(x(1), . . . , x(n)) j = ∂
∂x(i)
j
p(x(1), . . . , x(n)). Without the
subscript, ∇p(x(1), . . . , x(n)) denotes the usual gradient vector that takes derivatives with respect to all arguments at the same time, i.e., ∇p : Rn×d 7→ Rn×d and ∇p(x(1), . . . , x(n)) i,j = ∂
∂x(i)
j
p(x(1), . . . , x(n)).
We also define the t-th order derivative tensor as follows:
∇tp(x(1), . . . , x(n))
i1,j1,...,it,jt
=∂
∂ x(it )
jt
··· ∂
∂ x(i1 )
j1
p(x(1), . . . , x(n)) (11)
6Technically, for the bound to holds, we will need to assume that the support of A is contained within [d−c, dc] for some sufficiently small constant c. To circumvent the issue, we instead show the replacement step for the truncated distribution A ̄, and then relate the expected value of h under ξ ∼ A ̄ back to the one under ξ ∼ A using the fact that h is bounded between [0, 1] (cf. Lemma 3.6).
11

We will also make use of directional partial derivatives Di,vp : Rn×d 7→ R defined as:
Di,vp(x(1), · · · , x(n)) = v⊤∇ip(x(1), · · · , x(n))
More generally, we denote by p[k],v : Rn×d 7→ (Rn)⊗k the following directional derivative tensors:
p[k],v
i1,...,ik (x(1), . . . , x(n)) = Di1,vDi2,v · · · Dik,vp(x(1), . . . , x(n)).
When the unit vector v is clear from the context (typically inside proofs), we will just write p[k]. Recall the convention of multiplying two tensors of different dimensions in Section 2.2. Following that convention, we also note the following equivalence, which we will use sparingly in the paper:
Di,vp[k],v(x(1), . . . , x(n)) = p[k+1],v(x(1), . . . , x(n))e(i),
where e(i) is the i-th standard basis vector.
3 Proof of Theorem 1.6
3.1 Decay of Derivatives Restricted to a Random Direction
In this subsection, we show that the t-th order directional partial derivatives of a low-degree polynomial p : Rn×d 7→ R along a random direction v can be bounded from above by an exponentially decreasing function in t. The formal statement is given below.
Lemma 3.1 (Derivative Decay). For any k ∈ Z+ and ε ∈ (0, 1), if p : Rn×d → R is a degree-k polynomial and v ∼ U (Sd−1), then the following holds with probability 0.99 over the randomness of v:
Pr
x(1),...,x(n)∼N (0,I)
h
∀t ∈ [k] : ∥p[t],v(x(1), . . . , x(n))∥F ≤ (k/ε)4td−t/4|p(x(1), . . . , x(n))|
i
≥ 1 − ε. (12)
Our starting point is the so called strong anti-concentration properties of Gaussian distributions used frequently in the PRG literature. Specifically, it states that the output of a polynomial is usually not too small compared to its derivative. As a simple corollary of this property, we obtain another interesting property of polynomials that come in handy in showing Lemma 3.1. That is, the sizes of the higher order derivative tensor of a polynomial grow rather slowly (notably, the growth rate is-
 independent of the input dimension).
Fact 3.2 (Slow Growth of Derivatives; Lemma 1.6 in [KM22]). For any k ∈ Z+ and ε ∈ (0, 1), if p : Rn×d → R is a degree-k polynomial, it holds that
Pr
x(1),··· ,x(n)∼N
h
∃t ∈ [k] : ∥∇tp(x(1), · · · , x(n))∥F > k3t/εt |p(x(1), . . . , x(n))|
i
≤ O(ε). (13)
As argued in Section 1.2, a direct application of the strong anti-concentration property is not enough for our purposes. Instead, we need to leverage the specific structure of the distribution in the NGCA problem: the distribution MA,v is non-Gaussian only along a single randomly chosen direction v, and is the same as the standard Gaussian in every orthogonal direction. Our main result in this subsection is that if we fix a low-degree polynomial p and take v to be some random unit vector, the dire-
ctional derivative tensor p[k],v will instead be shrinking with high probability. Intuitively, this is because p[t],v(x(1), . . . , x(n)) is just a random sub-part of the entire tensor ∇tp(x1, · · · , xn) that appeared in Fact 3.2.
12

Proof of Lemma 3.1. Fix some arbitrary x(1), . . . , x(n) ∈ Rd. For convenience, define the tensor M := ∇tp(x(1), . . . , x(n)), and N := p[t],v(x(1), . . . , x(n)). Recall that the full degree-t gradient tensor M lives in the space (Rn×d)⊗t. We can therefore label each entry of M by some indices i1, j1, · · · , it, jt, where i1, · · · it ∈ [n] and j1, · · · jt ∈ [d]. On the other hand, the projected derivative tensor N lives in the space (Rn)⊗t. We can therefore label each entry of N by some ind-
ices i1, . . . it, where i1, . . . it ∈ [n]. One can then verify using the definitions from Section 2.3 that the entries of N and M satisfy the following relationship:
Ni1,··· ,it =
X
j1∈[d]
vj1
∂
∂ x(i1 )
j1
X
j2∈[d]
vj2
∂
∂ x(i2 )
j2
···
X
jt∈[d]
vjt
∂
∂ x(it )
jt
p(x(1), . . . , x(n))
=
X
j1,··· ,jt∈[d]
vj1 · · · vjt
∂
∂ x(i1 )
j1
··· ∂
∂ x(it )
jt
p(x(1), . . . , x(n))
=
X
j1,...,jt∈[d]
vj1 · · · vjt Mi1,j1,...it,jt .
Let v⊗t be the t-fold tensor product of v with itself, i.e., the tensor with entries:
v⊗t
j1,··· ,jt := vj1 · · · vjt ,
and M(i1,··· ,it) ∈ Rd ⊗t be the sub-tensor of M of the form:
M(i1,··· ,it)
j1,··· ,jt := Mi1,j1,··· ,it,jt . (14)
We can then write
E
v∼U (Sd−1)
∥N∥2
F=
X
i1,··· ,it∈[n]
E
v∼U (Sd−1)




X
j1,···jt
vj1 · · · vjt Mi1,j1,···it,jt


2


=
X
i1,··· ,it∈[n]
E
v∼U (Sd−1)
D
v⊗t, M(i1,··· ,it)E2
=
X
i1,··· ,it∈[n]
M(i1,··· ,it) ♭,⊤
E
v∼U (Sd−1)
h
v⊗t ♭ v⊗t ♭,⊤i
M(i1,··· ,it) ♭
. (15)
We claim the following bound on the matrix Ev∼U(Sd−1)
h
v⊗t ♭ v⊗t ♭,⊤i
∈ Rdt×dt that appeared earlier:
Claim 3.3. Define W(v) := Ev∼U(Sd−1)
h
v⊗t ♭ v⊗t ♭,⊤i
∈ Rdt×dt . Then we have
∥W(v)∥F ≤ 2t
e√d
t
.
We defer the proof of the above claim to the end of this subsection. Before that, we show how to conclude the proof of Lemma 3.1 using the claim. Combining Claim 3.3 and eq. (15) gives the following (recall that M(i1,··· ,it) denotes the tensor from Equation (14)):
E
v∼U (Sd−1)
∥N∥2
F≤
X
i1,··· ,it∈[n]
∥M(i1,··· ,it)∥2
F ∥W(v)∥F
≤ (2t/e)td−t/2 X
i1,··· ,it∈[n]
∥M(i1,··· ,it)∥2
F (Claim 3.3)
= (2t/e)td−t/2∥M∥2
F.
13

By Jensen’s inequality, we have that
E
v∼U (Sd−1)
[∥N∥F ] ≤ (2t/e)t/2 d−t/4∥M∥F . (16)
Recall that at the beginning of the proof we fixed some arbitrary x(1), . . . , x(n) and defined the quantities N := p[t],v x(1), . . . , x(n) , M := ∇tp x(1), . . . , x(n) accordingly. Therefore, Equation (16) implies that
E
v∼U (Sd−1)
h
∥p[t],v x(1), . . . , x(n) ∥F
i
≤ (2t/e)t/2 d−t/4∥∇tp x(1), . . . , x(n) ∥F . (17)
Define the event Ex(1),...,x(n) = ∥p[t],v x(1), . . . , x(n) ∥F ̸= 0, ∇tp x(1), . . . , x(n) ̸= 0 with respect to
a sequence of points x(1), . . . , x(n). Then we have that
E
v∼U (Sd−1)
"
E
x(1),...,x(n)∼N (0,I)
"
∥p[t],v x(1), . . . , x(n) ∥F
∥∇tp x(1), . . . , x(n) ∥F
Ex(1),...,x(n)
##
=E
x(1),...,x(n)∼N (0,I)
"
E
v∼U (Sd−1)
"
∥p[t],v x(1), . . . , x(n) ∥F
∥∇tp x(1), . . . , x(n) ∥F
Ex(1),...,x(n)
##
≤ (2t/e)t/2 d−t/4. (using Equation (17) and the definition of Ex(1),...,x(n) )
Applying Markov’s inequality on v then gives that
E
x(1),...,x(n)∼N (0,I)
"
∥p[t],v x(1), . . . , x(n) ∥F
∥∇tp x(1), . . . , x(n) ∥F
Ex(1),...,x(n)
#
≤ O(1) (2t/e)t/2 d−t/4 (18)
with high constant probability. In the remaining analysis, we condition on some v such that Equation (18) holds. Note that in the case that the event Ex(1),...,x(n) does not hold then we still have p[t],v x(1), . . . , x(n)
F≤
O (2t/e)t/2 d−t/4 ∇tp x(1), . . . , x(n)
F as both sides of the inequality are zero. We thus have that
Pr
x(1),...,x(n)∼N (0,I)
h
p[t],v x(1), . . . , x(n)
F
≤ O ε−1 (2t/e)t/2 d−t/4 ∇tp x(1), . . . , x(n)
F
i
≥ Pr
x(1),...,x(n)∼N (0,I)
"
p[t],v x(1), . . . , x(n)
F
≤ O ε−1 (2t/e)t/2 d−t/4 ∇tp x(1), . . . , x(n)
F
Ex(1),...,x(n)
#
≥ 1 − ε/2,
where we used that the event Ex(1),...,x(n) happens with probability 1 (this is because the complement of
the event amounts to x(1), . . . , x(n) being the exactly equal to the roots of a polynomial), and Markov’s inequality. By a union bound over t ∈ [k], we further get that
Pr
x(1),...,x(n)∼N (0,I)
h
∀t ∈ [k] : p[t],v x(1), . . . , x(n)
F
≤ O ε−1k (2t/e)t/2 d−t/4 ∇tp x(1), . . . , x(n)
F
i
≥ 1 − ε/2.
Combining this with Equation (13) and the union bound then gives that
Pr
x(1),...,x(n)∼N (0,I)
h
∀t ∈ [k] : p[t],v x(1), . . . , x(n)
F
≤ O ε−1k (2t/e)t/2 d−t/4 k3t(2/ε)t p x(1), . . . , x(n) i
≥ 1 − ε.
14

We can finally simplify the expression O ε−1k (2t/e)t/2 d−t/4 that appears above as follows:
O ε−1k (2t/e)t/2 d−t/4 k3t(2/ε)t ≤ (k/ε)4td−t/4
which concludes the proof of Lemma 3.1.
We conclude this section by showing Claim 3.3:
Proof of Claim 3.3. To show that, we will first relate the expected value of W(v) under v ∼ U Sd−1 to that under v ∼ N (0, I). In particular, denote by g : R 7→ R the probability density function of the random variable ∥v∥2, where v ∼ N (0, I). Then we have that
E
v∼N (0,I)
h
V(v)♭V(v)♭,⊤i
F
=
+∞
Z
0
E
v∼N (0,I)
h
V(v)♭V(v)♭,⊤ ∥v∥2 = b
i
g(v) db
F
=E
v∼U (Sd−1)
h
V(v)♭V(v)♭,⊤i
+∞
Z
0
b2tg(v) db
F
≥E
v∼U (Sd−1)
h
V(v)♭V(v)♭,⊤i
F
dt = ∥W(v)∥F dt
where the last line used that R +∞
0 b2tg(b) db = Ev∼N (0,I)[∥v∥2t] ≥ Ev∼N (0,I)[∥v∥2]t = dt. Rearranging this gives the following upper bound on the Frobenius norm of W(v):
∥W(v)∥F = E
v∼U (Sd−1)
h
V(v)♭V(v)♭,⊤i
F
≤ d−t E
v∼N (0,I)
h
V(v)♭V(v)♭,⊤i
F
= d−t
v u u t
X
j1,··· ,j2t∈[d]
E
v∼N (0,I)
[vj1 · · · vj2t ]
2
. (19)
We can further bound the quantity E2
v∼N (0,I) [vj1 · · · vj2t] that appears in the right hand side above using
Iserrlis’ theorem (Fact A.4) as follows (P 2
k below denotes the set of all matchings among {1, . . . , k}):
X
j1,··· ,j2t∈[d]
(E [vj1 · · · vj2t ])2 =
X
j1,··· ,j2t∈[d]


X
p∈P 2
2t
Y
{k,l}∈p
E[vjk vjl ]


2
≤ |P 2
2t|
X
j1,··· ,j2t∈[d]
X
p∈P 2
2t
Y
{k,l}∈p
(E[vjk vjl ])2
= |P 2
2t|
X
p∈P 2
2t
Y
{k,l}∈p
X
jk ,jl ∈[d]
(E[vjk vjl ])2
= |P 2
2t|
X
p∈P 2
2t
dt
= ((2t − 1)!!)2 dt ≤ (2t/e)2tdt , (20)
where the first line is an application of Iserrlis’ theorem (Fact A.4), the second line uses the inequality 2ab ≤ a2 + b2, the fourth line uses that E[vjk vjl] = 1(jk = jl) and |p| (the number of pairs within
15

the matching) is t, and the last line uses that the number of all possible matchings over [2t] is (2t − 1)!! < (2t)!! = 2tt! < 2t(t/e)t = (2t/e)t. Combining Equation (19) and Equation (20) then gives that ∥W(v)∥F ≤ d−t/2(2t/e)t, concluding the proof of Claim 3.3.
3.2 Framework: Mollification, Sandwiching, and Hybrid Argument
In this subsection, we lay out the high level proof strategy for our main theorem based on the ideas of mollification and the hybrid argument. To begin with, we need a smooth function ρ : R 7→ [0, 1] satisfying the following conditions:
ρ(x) = 1 if |x| < 1 , ρ(x) = 0 if |x| ≥ 3 , ∥ρ(t)(x)∥∞ ≤ O tt . (21)
There are standard ways to construct such a function, deferred to Lemma A.5 in Section A.2. We then use it to define the following mollifier function g:
g(x(1), . . . , x(n)) =
k
Y
t=1
ρ dcgt p[t](x(1), . . . , x(n)) 2
F
p2(x(1), . . . , x(n))
!
, (22)
where cg ∈ (0, 1/2) is some constant that we will specify later. Intuitively, g is constructed such that if some points x(1:n) satisfy the derivative decay condition from Lemma 3.1, then g(x(1), . . . , x(n)) should evaluate to 1. Conversely, if g(x(1), . . . , x(n)) evaluates to 1, we can infer from its definition that the weaker derivative
decay condition p[t](x(1), . . . , x(n)) 2
F ≤ 3d−cgtp2(x(1), . . . , x(n)) must hold for the input points. Finally, the mollified version of the PTF is the following function:
h(x(1), . . . , x(n)) := sign(p(x(1), . . . , x(n)))g(x(1), . . . , x(n)). (23)
Thanks to Lemma 3.1 and our construction of g, we can show that h(x(1), . . . , x(n)) is a good approximation of sign(p(x(1), . . . , x(n))) under the Gaussian distribution. Moreover, since g is at most 1, we note that h(·) is bounded from above by sign(p(·)) pointwise. Combining these two observations with a sandwiching argument allows us to show the following: if MA,v fools the mollified PTF h with respect to the Gaussian distribution, then MA,v also fools the original PTF.
Lemma 3.4 (Sandwiching). Let p : Rn×d 7→ R be a degree-k polynomial, v ∈ Rd be some vector satisfying Equation (12) with ε = 0.05, and h : Rn×d 7→ R be the mollified PTF of p defined as in Equation (23). Assume that (k/0.05) < d(1/4−cg/2)/4, where cg is the parameter used in Equation (22). The following statement holds: If
E
y(1) ,...,y(n) ∼MA,v
h
h(y(1:n))
i
−E
x(1),...,x(n)∼N (0,I)
h
h(x(1:n))
i
≤ δ , (24)
then it holds that
E
y(1) ,...,y(n) ∼MA,v
h
sign p(y(1:n))
i
−E
x(1),...,x(n)∼N (0,I)
h
sign p(x(1:n))
i
≤ δ + 0.05. (25)
Proof. For x(1), . . . , x(n) ∈ Rd define the event
Ev(x(1:n)) =
n
∀t ∈ [k] ∥p[t],v(x(1), . . . , x(n))∥F ≤ d−cgt/2|p(x(1), . . . , x(n))|
o
.
16

Fix ε = 0.05. Recall that we assume v is chosen such that the derivative decay condition in Equation (12) holds. For convenience, we restate the condition below.
Pr
x(1),...,x(n)∼N (0,I)
h
∀t ∈ [k] ∥p[t],v(x(1), . . . , x(n))∥F ≤ (k/ε)4td−t/4|p(x(1), . . . , x(n))|
i
≥ 1 − ε. (26)
Using our assumption k/ε = (k/0.05) < d(1/4−cg/2)/4, we have that (k/ε)4td−t/4 < d−cgt/2. Thus a simplified version of Equation (26) holds, and in particular implies that:
Pr
x(1),...,x(n)∼N (0,I)
h
Ev(x(1:n))
i
≥ 1 − ε. (27)
We will first show that | Ex(1),...,x(n)∼N (0,I)[h(x(1:n))] − Ex(1),...,x(n)∼N (0,I)[sign(p(x(1:n)))]| ≤ ε for
any degree-k polynomial p : Rn×d 7→ R. Then, we will use that to show Equation (25). To see the first claim, using the definition of g(x(1:n)) (Equation (22)) and Equation (27) we have that
E
x(1),...,x(n)∼N (0,I)
[h(x(1:n))] − E
x(1),...,x(n)∼N (0,I)
[sign(p(x(1:n)))] (28)
=E
x(1),...,x(n)∼N (0,I)
h
(g(x(1:n)) − 1)sign(p(x(1:n)))
i
=E
x(1),...,x(n)∼N (0,I)
h
(g(x(1:n)) − 1)sign(p(x(1:n))) · 1 Ec
v (x(1:n) )
i
(29)
≤ Pr
x(1),...,x(n)∼N (0,I)
h
Ec
v (x(1:n) )
i
≤ ε, (30)
where Equation (29) used that g(x(1:n)) can be different than 1 only under the complement of the event Ev(x(1:n)).
We can now show Equation (25), which states that the two expectations (under N (0, I) and MA,v) of sign(p(x(1), . . . , x(n))) are close to each other in absolute value. We will show both a lower bound and an upper bound on their difference, which together yield the bound in absolute value. We start with the lower bound. Using that g(x(1:n)) ≤ 1 and sign(p(x(1:n))) ∈ {0, 1}, we have the pointwise relationship sign p x(1:n) ≥ sign p x(1:n) g(x(1:n)). In particular, this implies that:
E
y(1) ,...,y(n) ∼MA,v
h
sign p y(1:n) i
≥E
y(1) ,...,y(n) ∼MA,v
h
sign p y(1:n) g(x(1:n))
i
≥E
x(1),...,x(n)∼N (0,I)
h
sign p x(1:n) g(x(1:n))
i
− δ (by Equation (24))
≥E
x(1),...,x(n)∼N (0,I)
h
sign p x(1:n) i
− δ − ε. (by Equation (30))
We can prove the other direction E[sign(p(y(1:n)))] ≤ E[sign(p(x(1:n)))] + δ + ε by repeating the same argument with −p in place of p. This concludes the proof of Lemma 3.4.
Given the above sandwiching lemma, it then suffices for us to bound from above the difference | Ey(1:n))∼MA,v [h(y(1:n))] − Ex(1:n)∼N (0,I)[h(x(1:n))]|. We will show this via the hybrid argument. In
particular, let x(1:n) be i.i.d. samples from the standard Gaussian N (0, I) and y(1:n) be i.i.d. samples from the hidden direction distribution MA,v. In the i-th replacement step of the hybrid argument, we compare the expected values of h(x(1), · · · , x(i), y(i+1), · · · , y(n)) and h(x(1), · · · , y(i), y(i+1), · · · , y(n)). We show that the difference between the expected values is on the order of d−cgm/2.
17

Proposition 3.5 (Replacement Step). For any c ∈ (0, 1/4), d, m, k ∈ Z+ such that m is even, and d > max(mC/c, kC/c) for some sufficiently large constant C, if p : Rn×d 7→ R is a degree-k polynomial, v ∈ Rd is a unit vector satisfying Equation (12) with ε = 0.05, A is a one-dimensional distribution that matches the first m moments with N (0, 1), and h : Rn×d 7→ R is the mollified PTF from Equation (23), then the following holds: For every i ∈ [n]
E
h
h(x(1), · · · , x(i), y(i+1), · · · , y(n)i
−E
h
h(x(1), · · · , y(i), y(i+1), · · · , y(n)i
≤ d−cgm/2+cm , (31)
where cg is the parameter used in Equation (23), x(1), · · · , x(n) ∼ MA,v, and y(1), · · · , y(n) ∼ N (0, I).
Our main result follows immediately from Lemma 3.4 and Proposition 3.5.
Proof of Theorem 1.6. Let c∗ be the constant parameter in the statement of Theorem 1.6. Fix ε = 0.05, c = c∗/2, and cg = 2 (1/4 − c∗/2). By Lemma 3.1, we have that a randomly chosen v satisfies Equation (12) with high probability 0.99. We will condition on such a v in the rest of the proof. First, combining Proposition 3.5 (the proposition is applicable because of our assumptions d > max kC∗/c∗, mC∗/c∗ in the statement of Theorem 1.6 and c = c∗/2) for each position i ∈ [n] with the triangle inequa-
lity yields that
E
y(1) ,...,y(n) ∼MA,v
h
h(y(1:n))
i
−E
x(1),...,x(n)∼N (0,I)
h
h(x(1:n))
i
≤ nd−cgm/2+cm.
Since we have cg = 2(1/4 − c∗/2) and c = c∗/2, the right hand side can be further bounded from above
by nd−(1/4−c∗)m, which is at most 0.05 by our assumption that n ≪ d(1/4−c∗)m. We can then apply the sandwiching lemma (Lemma 3.4) with δ = 0.05.7 This yields that
E
y(1) ,...,y(n) ∼MA,v
h
sign p(y(1:n))
i
−E
x(1),...,x(n)∼N
h
sign p(x(1:n))
i
≤ δ + ε = 0.1. (32)
So far we have shown that Equation (32) holds with probability 0.99. From this, we can complete the proof as follows. First, denote by E the event in Equation (32). We have the following by Jensen’s inequality:
E
v∼U (Sd−1)
x(1) ,...,x(n) ∼MA,v
h
sign(p(x(1), · · · , x(n)))
i
−E
x(1),...,x(n)∼N (0,I)
h
sign(p(x(1), · · · , x(n)))
i
(33)
≤E
v∼U (Sd−1)
"
E
y(1) ,...,y(n) ∼MA,v
h
sign p(y(1:n))
i
−E
x(1),...,x(n)∼N (0,I)
h
sign p(x(1:n))
i
#
. (34)
Now let the random variable
Z= E
y(1) ,...,y(n) ∼MA,v
h
sign p(y(1:n))
i
−E
x(1),...,x(n)∼N (0,I)
h
sign p(x(1:n))
i
for brevity. We can further bound the RHS in Equation (34) as follows:
E
v∼U (Sd−1)
[Z] = E
v∼U (Sd−1)
[Z1(E)] + E
v∼U (Sd−1)
[Z 1(E c )]
≤ 0.1 + E
v∼U (Sd−1)
[1(E c )]
≤ 0.1 + 0.01 = 1.01 ,
7The lemma is applicable since the assumption k < dc∗/C∗ from Theorem 1.6 implies that (k/0.05) < d(1/4−cg/2)/4 as long as cg = 2(1/4 − c∗/2) and C∗ is sufficiently large.
18

where we used that under the event E we have Z ≤ 0.1, we also used that Z is always at most 1 since it is a difference of PTFs that take values in {0, 1} and we used that E happens with probability at least 0.99 over the choice of v. This concludes the proof of Theorem 1.6.
3.3 Proof of Proposition 3.5
In the rest of this section, we focus on establishing a single replacement step by proving Proposition 3.5. This subsection is organized as follows. In Section 3.3.1, we introduce a truncation procedure that reduces the problem to the case where the non-Gaussian component A has bounded support, which will be helpful later on, and argue that the truncation will not significantly change the expectation of the mollified PTF. In Section 3.3.2, we show that if the derivative of the polynomial is small -
at any point in the truncated interval, it is small throughout the entire interval. In Section 3.3.3, we perform a Taylor expansion of the mollified PTF, derive expressions for the derivatives in the higher-order terms, and upper bound them using the results from Section 3.3.2. Finally, Section 3.3.4 concludes the proof of Proposition 3.5 by carefully combining the results from the previous sections.
3.3.1 Domain Truncation
Let A be a distribution on R which matches the first m moments with N (0, 1). Note that the hidden direction distribution MA,v from Definition 1.4 can be viewed of as the sum y ̄ + ξv, where y ̄ ∼ N 0, I − vv⊤ and ξ ∼ A. Hence, Equation (31) can be alternatively written as
E
h
h(x(1), · · · , x(i), y ̄ + ξv, · · · , y(n))
i
−E
h
h(x(1), · · · , x(i), y ̄ + zv, · · · , y(n))
i
≤ d−cgm/2+cm ,
(35)
where ξ ∼ A, z ∼ N (0, 1), y ̄ ∼ N 0, I − vv⊤ , x(1), . . . , x(i)∼MA,v, and y(i+1), · · · , y(n)∼N (0, I). To show Equation (35), we will condition on fixed values for all random variables except from ξ and z and show that
ξ∼EA
h
h(x(1), · · · , x(i), y ̄ + ξv, · · · , y(n))
i
−E
z∼N (0,1)
h
h(x(1), · · · , x(i), y ̄ + zv, · · · , y(n))
i
≤ d−cgm/2+cm.
(36)
Equation (35) will then follow from Equation (36) via an averaging argument. It turns out that the arguments of the rest of the subsection (in particular the part that analyzes the Taylor expansion in Section 3.3.3) will be easier if ξ and z are bounded random variables. Fortunately, the two are both concentrated around 0, and we can therefore truncate them to the interval [−d−ctrunc, dctrunc] for some constant ctrunc. In particular, we argue that after the truncation we still have an approximate -
moment matching condition, and the mass of the non-Gaussian component A outside the truncated interval cannot be too large.
Lemma 3.6 (Domain Truncation). For any d, m ∈ Z+, where m is even and d ≫ m, and every ctrunc > 0, if A is a distribution on R which matches the first m moments with N (0, 1), then for all t ∈ [m − 1] it holds that
x∼EA[xt | x ∈ [−dctrunc , dctrunc ]] − E
y∼N (0,1)
[yt | y ∈ [−dctrunc , dctrunc ]] ≤ mO(t)d−ctrunc(m−t). (37)
Moreover, it holds
Pr
x∼A[x ̸∈ [−dctrunc , dctrunc ]] ≤ mmd−ctruncm. (38)
19

Proof of Lemma 3.6. We start with Equation (37). Let us first denote I = [−dctrunc, dctrunc] and p := Prx∼A[x ̸∈ I]. We can write
x∼EA[xt|x ∈ I] = Ex∼A[xt1(x ∈ I)]
1 − p = Ex∼A[xt]
1 − p − Ex∼A[xt1(x ̸∈ I)]
1−p .
Rearranging, we have that
x∼EA[xt|x ∈ I] − x∼EA[xt] ≤ p x∼EA[xt|x ∈ I] + x∼EA[xt1(x ̸∈ I)] . (39)
We can upper bound p using the higher-order Chebyshev’s inequality and the moment matching property of A:
p := Pr
x∼A[|x| > dctrunc ] ≤ Ex∼A[|x|m]
dctruncm = Ex∼N (0,1)[|x|m]
dctruncm ≤ mm/2
dctruncm (40)
Using this bound on p, the first term in the RHS of Equation (39) is
p x∼EA[xt|x ∈ I] ≤ p · x∼EA[|x|t|x ∈ I] ≤ p
1 − p x∼EA[|x|t]
=p
1−p E
x∼N (0,1)
[|x|t] ≤ mO(m)d−ctruncm, (41)
where we used the definition of conditional expectation, the moment matching property of A and that d ≫ m. The second term in the RHS of Equation (39) can be upper bounded using Holder’s inequality as follows:
x∼EA[xt1(x ̸∈ I)] ≤ x∼EA [xm]
t/m p1−t/m
=E
x∼N (0,1)
[xm]
t/m p1−t/m
≤ mO(t)d−ctrunc (m−t). (42)
Combining Equations (41) and (42) then gives that Ex∼A[xt|x ∈ I] − Ex∼A[xt] ≤ mO(t)d−ctrunc(m−t). Repeating the same steps (using N (0, 1) in place of A), it can be shown that
E
y∼N (0,1)
[yt|y ∈ I] − E
y∼N (0,1)
[yt] ≤ mO(t)d−ctrunc(m−t)
as well. The rest of the proof of Equation (37) then follows from the triangle inequality and the fact that Ey∼N (0,1)[yt] = Ex∼A[xt]. Finally, we note that Equation (38) has already been shown in Equation (40). This completes the proof of Lemma 3.6.
In the rest of the subsection, we focus in bounding the difference in expected values under the truncated distributions. In particular, our goal is to show that
E
ξ∼A ̄
h
h(x(1), · · · , x(i), y ̄ + ξv, · · · , y(n))
i
−E
z∼N ̄ (0,1)
h
h(x(1), · · · , x(i), y ̄ + zv, · · · , y(n))
i
≤ d−cgm+c/2 ,
(43)
where A ̄ and N ̄ (0, 1) correspond to the distributions A and N (0, 1) conditioned on the domain [−dctrunc, dctrunc] respectively.
20

3.3.2 Controlling Derivatives of Nearby Points
Recall that the mollifier g (Equation (22)) gives zero value to points where the derivatives of the polynomial p fail to decay at the desired rate. Fix some points x(1), · · · , x(i−1), y ̄, y(i+1), · · · , y(n) ∈ Rd. If it happens to be the case that for all ξ ∈ [−dctrunc, dctrunc] there exists some t ∈ [k] such that
p[t] x(1), · · · , y ̄ + ξv, · · · , y(n) 2
F
≥ 3d−cgtp2 x(1), · · · , y ̄ + ξv, · · · , y(n) ,
it follows by the definition of the mollifier that the mollified PTF will be zero over the entire truncated domain, i.e., for all ξ ∈ [−dctrunc , dctrunc ] we will have
E
ξ∼A ̄
h
h(x(1), · · · , x(i), y ̄ + ξv, · · · y(n))
i
=E
z∼N ̄ (0,1)
h
h(x(1), · · · , x(i), y ̄ + zv, · · · y(n))
i
= 0.
Consequently, Equation (43) will hold trivially. Hence, it suffices to consider the complementary case: there exists some ξ∗ ∈ [−dctrunc, dctrunc] such that the desired derivative decay holds for all t ∈ [k]. We formalize this complementary condition in the definition of a well-behaved point set below.
Definition 3.7 (Well-Behaved Point Set). Let p : Rd×n → R be a polynomial on n points of Rd, I ⊆ R be an interval, and cg > 0 be a parameter. Let x(1), · · · , x(i−1), y ̄, y(i+1), · · · , y(n) ∈ Rd. We say that these points form a well-behaved point set at position i (with respect to p, I and cg) if there exists some ξ∗ ∈ I such that
∀t ∈ [k] p[t] x(1), · · · , y ̄ + ξ∗v, · · · , y(n) 2
F
≤ 3d−cgt p x(1), · · · , y ̄ + ξ∗v, · · · , y(n) 2
.
Throughout this section, we will always use I = [−dctrunc, dctrunc] for the interval, and cg will be the same parameter as in the definition of the mollified PTF (Equation (22)). A key technical lemma we will prove is that if we condition on a well-behaved point set, the derivatives must also be “approximately” well-behaved for all ξ in the truncated domain.
Lemma 3.8 (Derivative Decay of Nearby Points). Let p : Rd×n → R be a polynomial on n points of Rd, and cg, ctrunc > 0 be parameters satisfying cg/2 − ctrunc ≥ Ω(1). Let x(1), · · · , x(i−1), y ̄, y(i+1), · · · y(n) ∈ Rd be a well-behaved point set at position i with respect to p, interval I = [−dctrunc, dctrunc], and cg. Then it holds that
∀t ∈ [k] p[t] x(1), · · · , y ̄ + ξv, · · · , y(n) 2
F
≤ O(1)d−cgtp2 x(1), · · · , y ̄ + ξv, · · · , y(n) (44)
for all ξ ∈ I.
Proof. By Definition 3.7, there exists some point ξ∗ such that
∀k′ ∈ [k] : p[k′] x(1), · · · , y ̄ + ξ∗v, · · · , y(n) 2
F
≤ 3d−cgtp2 x(1), · · · , y ̄ + ξ∗v, · · · , y(n) . (45)
Fix an arbitrary ξ ∈ [−dctrunc, dctrunc]. We claim that the following holds.
Claim 3.9. Consider the setting and notation of Lemma 3.8. For every k′ ∈ {0, 1, . . . , k}, the following holds:
p[k′] x(1), · · · , y ̄ + ξv, · · · , y(n) 2
F
− p[k′] x(1), · · · , y ̄ + ξ∗v, · · · , y(n) 2
F
≤ O d−cgk′+(cg/2−ctrunc) p2 x(1), · · · , y ̄ + ξ∗v, · · · , y(n) . (46)
21

We first show how to obtain Equation (44) using Claim 3.9. Applying Equation (46) with k′ = 0 yields
p2 x(1), · · · , y ̄ + ξv, · · · , y(n) − p2 x(1), · · · , y ̄ + ξ∗v, · · · , y(n)
≤ O d−(cg/2−ctrunc) p2 x(1), · · · , y ̄ + ξ∗v, · · · , y(n) .
Since we assume that (cg/2 − ctrunc) ≥ Ω(1), it then follows that
p2 x(1), · · · , y ̄ + ξ∗v, · · · , y(n) ≤ (1 + o(1)) p2 x(1), · · · , y ̄ + ξv, · · · , y(n) . (47)
Applying Equation (46) for k′ ∈ [k] gives
p[k′] x(1), · · · , y ̄ + ξv, · · · , y(n) 2
F
≤ p[k′] x(1), · · · , y ̄ + ξ∗v, · · · , y(n) 2
F
+ O d−cg(k′+0.01) p2 x(1), · · · , y ̄ + ξ∗v, · · · , y(n)
≤ d−cgk′ + O d−cgk′+(cg/2−ctrunc) p2 x(1), · · · , y ̄ + ξ∗v, · · · , y(n) (using Equation (45))
≤ (1 + o(1))d−cgk′ p2 x(1), · · · , y ̄ + ξv, · · · , y(n) . (using Equation (47))
This proves Equation (44) and completes the proof of Equation (44).
It remains to show Claim 3.9.
Proof of Claim 3.9. We will use the Taylor expansion of ∥p[k′] x(1), · · · , y ̄ + ξv, · · · , y(n) ∥2
F (which is a
degree at most 2(k − k′) polynomial) in the variable ξ centered at ξ∗. In particular, Taylor’s theorem gives that
p[k′] x(1), · · · , y ̄ + ξv, · · · , y(n) 2
F
= p[k′] x(1), · · · , y ̄ + ξ∗v, · · · , y(n) 2
F
+
2(k−k′)
X
t=1
∂t
∂ξt p[k′] x(1), · · · , y ̄ + ξv, · · · , y(n) 2
F ξ=ξ∗
!
(ξ − ξ∗)t
t! . (48)
We claim that the derivative ∂t
∂ξt p[k′] x(1), · · · , y ̄ + ξv, · · · , y(n) 2
F ξ=ξ∗
satisfies the following bound:
∂t
∂ξt p[k′] x(1), · · · , y ̄ + ξv, · · · , y(n) 2
F ξ=ξ∗
≤ O(1) 2t d−cg(t/2+k′) p2 x(1), · · · , y ̄ + ξ∗v, · · · , y(n) . (49)
Combining Equation (49) and |ξ − ξ∗| ≤ dctrunc then gives that
∂t
∂ξt p[k′] x(1), · · · , y ̄ + ξv, · · · , y(n) 2
F ξ=ξ∗
(ξ − ξ∗)t ≤ O(1) 2t d−cg(t/2+k′)+t ctrunc
= O(1) 2t d−cgk′−(cg/2−ctrunc)t.
22

Combining the above with Equation (48), and the fact that P
t 2t/t! = O(1) then gives that
p[k′] x(1), · · · , y ̄ + ξv, · · · , y(n) 2
F
− p[k′] x(1), · · · , y ̄ + ξ∗v, · · · , y(n) 2
F
≤ O d−cgk′−(cg/2−ctrunc)t p2 x(1), · · · , y ̄ + ξ∗v, · · · , y(n) .
This concludes the proof of Equation (46). It remains to show Equation (49). Using the product rule, the
derivative ∂t
∂ξt p[k′] x(1), · · · , y ̄ + ξv, · · · , y(n) 2
F ξ=ξ∗
is a sum of at most 2t terms of the following
form:
D
p[β] x(1), · · · , y ̄ + ξ∗v, · · · , y(n) e(i)⊗β′ , p[γ] x(1), · · · , y ̄ + ξ∗v, · · · , y(n) e(i)⊗γ′ E
,
where β, β′, γ, γ′ are natural numbers such that β − β′ = γ − γ′, and β + γ = 2k′ + t. Combining the above observation with the Cauchy–Schwarz inequality then gives the bound
∂t
∂ξt p[k′] x(1), · · · , y ̄ + ξv, · · · , y(n) 2
F ξ=ξ∗
≤ 2t max
β,γ:β+γ=2k′+t p[β] x(1), · · · , y ̄ + ξ∗v, · · · , y(n)
F
p[γ] x(1), · · · , y ̄ + ξ∗v, · · · , y(n)
F
≤ O(1) 2td−cg(k′+t/2)p2(x(1), · · · , y ̄ + ξ∗v, · · · , y(n)), (Equation (45))
where the last line used that the set of points x(1), · · · , x(i−1), y ̄, y(i+1), · · · y(n) is well-behaved (Definition 3.7). This concludes the proof of Claim 3.9.
3.3.3 Taylor Expansion of the Mollified PTF and Bounds for the Higher-Order Terms
As explained in the technical overview of Section 1.2, the goal is to prove Equation (36) by performing a Taylor expansion of h. We then use the moment-matching property of the hidden direction distribution to bound the contribution of the low-order terms to the difference of expectations on the LHS of Equation (36) and leverage the derivative decay property of the mollifier to show that the contribution from the high-order error term is also small. The main result of this subsection formalizes th-
e second argument that bounds the derivative appearing in the Taylor error term in Lemma 3.10. In particular, we consider the degree-m expansion of h along the direction of v at its i-th coordinate around some point ξ∗ that will be specified later:
h(x(1), · · · , y ̄ + ξv, · · · , y(n)) =
m−1
X
t=0
(ξ − ξ∗)t /t! Dt
i,vh x(1), · · · , y ̄ + ξ∗v, · · · , y(n)
+ ((ξ − ξ∗)m /m!) Dm
i,vh x(1), · · · , y ̄ + ξbv, · · · , y(n) , (50)
where ξb is some point between ξ and ξ∗ which also depends on x(1), · · · y ̄, · · · , y(n). Recall that A has its first m-moments matched with N (0, 1). So the expected values of the first m terms in Equation (50) are identical under ξ ∼ A and ξ ∼ N (0, 1). The rest of the section will focus on how we control the magnitude of the last term ((ξ − ξ∗)m /m!)Dm
i,vh(x(1), · · · , y ̄ + ξbv, · · · , y(n)).
We now proceed to control the magnitudes of the derivatives Dm
i,vh x(1), · · · , y ̄ + ξbv, · · · , y(n) .
Lemma 3.10 (Mollified PTF Derivative Decay). Let p : Rn×d → R be a degree k polynomial, v be a unit vector satisfying Equation (12) with ε = 0.05, and h be the mollified PTF defined in Equation (23). Let cg be
23

the constant that appears in the definition of h, and ctrunc > 0 be a parameter satisfying cg/2 − ctrunc ≥ Ω(1). Let x(1), · · · , y ̄, · · · , y(n) be a well-behaved point set (cf. Definition 3.7) at position i, with respect to p, [−dctrunc , dctrunc ], and cg. Then for all t ∈ Z+ and all ξ ∈ [−dctrunc , dctrunc ] it holds that
Dt
i,vh x(1), · · · , y ̄ + ξv, · · · , y(n) ≤ (k + t)O(t)d−cgt/2.
The first observation is that computing Dt
i,vh (·) essentially boils down to computing the derivatives of
the mollifier Dt
i,vg(·).
Claim 3.11. For all x(1), . . . , x(n) ∈ Rd, we have that
Dt
i,vh(x(1), . . . , x(n)) = sign(p(x(1), . . . , x(n)))Dt
i,vg(x(1), . . . , x(n)).
Proof. The claim follows from the product rule and the fact that the derivatives of sign(p(x(1), . . . , x(n))) are 0 almost everywhere.
Writing down the exact expression of the derivatives of the mollifier i.e., Dt
i,vg(x(1), . . . , x(n)), is quite
tedious. However, we show that the derivative is the sum of at most (2k)t many terms of a specific functional form. For presentation purposes, similarly to earlier sections, we abbreviate x(1), . . . , x(n) by x(1:n).
Lemma 3.12 (Unfolded Derivatives of the Mollifier). Let i ∈ [n], t ∈ [k], and v be some unit vector, and p, ρ, g defined as in Equation (21). Then Dt
i,vg(x(1:n)) is a sum of at most T := kO(t) terms where the j-th term is of the form:
Λj,t := ± d(cg/2)κ(t)
j

 
Y
(α,α′)∈A(t)
j
ρ(α) dcgα′ ∥p[α′](x(1:n))∥2
F p2 x(1:n)
!

 

 
Y
(β,β′,γ,γ′)∈B(t)
j
D
p[β] x(1:n) e(i) ⊗β′
, p[γ] x(1:n) e(i) ⊗γ′ E
p2(x(1:n))


 , (51)
where κ(t)
j ∈ Z+, A(t)
j is a multiset made up of elements from ({0} ∪ [k])2, B(t)
j is a multiset made up of
elements from ({0} ∪ [k])4 8, and e(i) is the i-th standard basis vector. Moreover, A(t)
j , B(t)
j satisfy
• Maximum ρ derivative degree: P
α∈A(t)
j
α ≤ t for all A(t)
j.
• Cardinality bound: |Aj,t| + |Bj,t| ≤ k + t.
• Degree growth: −κ(t)
j +P
(β,β′,γ,γ′)∈B(t)
j
(β + γ) ≥ t for every j ∈ [T ].
Proof. We will show this by induction on t. The base case is when t = 0. This corresponds to the case where
we just have one term, where κ(0)
1 = 0, A(0)
1 = {(i, i) | i ∈ [k]}, and B(0)
1 = ∅. The properties are then immediate.
8Of course, for the expression to be well defined, we will need β − β′ = γ − γ′ as the tensor dimensions will not match up otherwise.
24

We proceed to show the inductive step. For convenience, define
Λ−(α,α′)
j,t := Λj,t ρ(α) dcg α′∥p[α′] x(1:n) ∥2
F p2(x(1:n))
!!−1
,
Λ−(β,β′,γ,γ′)
j,t := Λj,t


D
p[β] x(1:n) e(i) ⊗β′
, p[γ] x(1:n) e(i) ⊗γ′ E
p2(x(1:n))


−1
.
By the inductive hypothesis, we have that Dt+1
i,v g(x(1), . . . , x(n)) = P
j Di,vΛj,t. So it remains to compute Di,vΛj,t. In particular, by the product rule, we have that
Di,vΛj,t :=
X
(α,α′)∈Aj,t
Λ−(α,α′)
j,t Di,vρ(α) dcg α′∥p[α′] x(1:n) ∥2
F p2(x(1:n))
!
+
X
(β,β′,γ,γ′)∈Bj,t
Λ−(β,β′,γ,γ′)
j,t Di,v
D
p[β] x(1:n) e(i) ⊗β′
, p[γ] x(1:n) e(i) ⊗γ′ E
p2(x(1:n)) .
We first analyze the term Di,v
D
p[β] x(1:n) e(i) ⊗β′
, p[γ] x(1:n) e(i) ⊗γ′ E
p2(x(1:n)).
Di,v
D
p[β] x(1:n) e(i) ⊗β′
, p[γ] x(1:n) e(i) ⊗γ′ E
p2(x(1:n))
=
Di,v
D
p[β] x(1:n) e(i) ⊗β′
, p[γ] x(1:n) e(i) ⊗γ′ E
p2(x(1:n))
−
D
p[β] x(1:n) e(i) ⊗β′
, p[γ] x(1:n) e(i) ⊗γ′ E
Di,v p2 (x(1:n) )
p4(x(1:n)) (Quotient rule)
=
D
p[β+1] x(1:n) e(i) ⊗β′+1 , p[γ] x(1:n) e(i) ⊗γ′ E
p2(x(1:n)) +
D
p[β] x(1:n) e(i) ⊗β′
, p[γ+1] x(1:n) e(i) ⊗γ′+1E
p2(x(1:n))
−
D
p[β] x(1:n) e(i) ⊗β′
, p[γ] x(1:n) e(i) ⊗γ′ E
p2(x(1:n))
2 p[1](x(1:n))e(i) p(x(1:n))
p2(x(1:n)) . (Product rule)
One can check that each term in the summation above is still of the desired form. Moreover, we have that:
• The total derivative degree on β is β +γ +1 while the power κj in the leading constant stays unchanged, ensuring the desired potential growth.
• Since the last line contains 3 terms, it follows that the number of terms in
X
(β,β′,γ,γ′)∈Bj,t
Λ−(β,β′,γ,γ′)
j,t Di,v
D
p[β] x(1:n) e(i) ⊗β′
, p[γ] x(1:n) e(i) ⊗γ′ E
p2(x(1:n))
is 3|Bj,t|.
• The set cardinality bound increases by 1 due to the third term.
25

Next, we analyze the term Di,vρ(α) dcg α′∥p[α′] x(1:n) ∥2
F /p2(x(1:n)) .
Di,vρ(α) dcgα′ ∥p[α′] x(1:n) ∥2
F p2(x(1:n))
!
(52)
= ρ(α+1) dcgα′ ∥p[α′] x(1:n) ∥2
F p2(x(1:n))
!
Di,v
dcgα′ ∥p[α′] x(1:n) ∥2
F
p2(x(1:n)) (Chain rule)
= dcgα′ ρ(α+1) dcgα′ ∥p[α′] x(1:n) ∥2
F p2(x(1:n))
!
Di,v∥p[α′] x(1:n) ∥2
F
p2(x(1:n)) − ∥p[α′] x(1:n) ∥2
F Di,vp2(x(1:n))
p4(x(1:n))
!
(Quotient rule)
= dcgα′ ρ(α+1) d(cg/2)2α′ ∥p[α′] x(1:n) ∥2
F p2(x(1:n))
!2
D
p[α′+1] x(1:n) e(i), p[α′] x(1:n) E
p2(x(1:n)) (53)
−
D
p[α′] x(1:n) e(i), p[α′] x(1:n) E
p2(x(1:n))
p[1] x(1:n) e(i), p x(1:n)
p2(x(1:n)) . (Product Rule)
One can check that each term in the summation above is still of the desired form. Moreover, we have that
• The total derivative degree is 2α′ + 1 while the power κj in the leading constant increases by 2α′, ensuring the desired potential growth.
• Since the above equation has 2 additive terms, it follows that
X
(α,α′)∈Aj,t
Λ−(α,α′)
j,t Di,vρ(α) dcg α′∥p[α′] x(1:n) ∥2
F p2(x(1:n))
!
contains at most 2|Aj,t| terms.
• The set cardinality bound increases by 1 due to the last term.
• The maximum derivative degree of ρ increases by 1.
The total number of terms in Dt+1
i,v g(x(1), . . . , x(n)) is at most (O(k))t (3|Bj,t| + 2|Aj,t|) ≤ (O(k))t+1. This concludes the inductive step as well as the proof of Lemma 3.12.
We are now ready to conclude the proof of Lemma 3.10.
Proof of Lemma 3.10. For notational convenience, we define x(i) = y ̄ + ξv. Recall that g and h are the mollifier and the mollified PTF respectively, defined in Equations (22) and (23). By Claim 3.11, it holds
Dt
i,vh(x(1), . . . , x(n)) ≤ Dt
i,vg(x(1), . . . , x(n)) .
By Lemma 3.12, Dt
i,vg(x(1), . . . , x(n)) is the sum of at most kO(t) terms Λj,t of the form given in Equa
tion (51). We now claim that each term in the form of Equation (51) is at most tO(t)d−cgt/2. It follows immediately that
Dt
i,vg(x(1), . . . , x(n)) ≤ tO(t)kO(t)d−cgt/2
≤ (t + k)O(t)d−cgt/2
26

for all t ∈ Z+. It remains to show that the quantity Λj,t in Equation (51) is at most tO(t)d−cgt/2. Recall that ∥ρ(α)∥∞ is at most αO(α) by Equation (21). Combining this with the maximum degree property of Lemma 3.12 then gives that
Y
(α,α′)∈A(t)
j
ρ(α) dcgα′ ∥p[α′](x(1:n))∥2
F p2 x(1:n)
!
≤ tO(t). (54)
Next, applying the Cauchy–Schwarz inequality gives that
D
p[β] x(1:n) e(i) ⊗β′
, p[γ] x(1:n) e(i) ⊗γ′ E
p2(x(1:n)) ≤ ∥p[β] x(1:n) ∥F
p(x(1:n))
∥p[γ] x(1:n) ∥F
p(x(1:n)) . (55)
Recall that we define x(i) := y ̄ + ξv. By the assumption of the lemma, x(1), · · · , y ̄, · · · , x(n) form a well-behaved point set with respect to p, [−dctrunc , dctrunc ], and cg (cf. Definition 3.7), and ξ ∈ [−dctrunc , dctrunc ]. Therefore, Lemma 3.8 is applicable. This gives that
∥p[β] x(1:n) ∥F
p(x(1:n))
∥p[γ] x(1:n) ∥F
p(x(1:n)) ≤ O d−cg(β+γ)/2 . (56)
We will use Equation (56) to bound the remaining part of Λj,t from Equation (51); all the factors in the RHS
of Equation (51) excluding the Q
(α,α′)∈A(t)
j
ρ(α) dcgα′ ∥p[α′](x(1:n))∥2
F /p2 x(1:n) that have already been
bounded earlier. Combining Equation (56) with Equation (55) gives the following bound for the term
d(cg /2)κ(t)
j
Y
(β,β′,γ,γ′)∈Bj,t
D
p[β] x(1:n) e(i) ⊗β′
, p[γ] x(1:n) e(i) ⊗γ′ E
p2(x(1:n))
≤ O d−(cg/2) P
(β,β′,γ,γ′)∈Bj,t β+γ −κ(t)
j.
By the degree growth property of Lemma 3.12, it follows that
d(cg /2)κ(t)
j
Y
(β,β′,γ,γ′)∈Bj,t
D
p[β] x(1:n) e(i) ⊗β′
, p[γ] x(1:n) e(i) ⊗γ′ E
p2(x(1:n)) ≤ d−cgt/2. (57)
Combining Equation (57) and Equation (54) then gives that the expression in Equation (51) is at most tO(t)d−cgt/2. This concludes the proof of Lemma 3.10.
3.3.4 Putting Everything Together: Proof of Proposition 3.5
We are now ready to conclude the proof of Proposition 3.5, restated below for convenience:
Proposition 3.5 (Replacement Step). For any c ∈ (0, 1/4), d, m, k ∈ Z+ such that m is even, and d > max(mC/c, kC/c) for some sufficiently large constant C, if p : Rn×d 7→ R is a degree-k polynomial, v ∈ Rd is a unit vector satisfying Equation (12) with ε = 0.05, A is a one-dimensional distribution that matches the first m moments with N (0, 1), and h : Rn×d 7→ R is the mollified PTF from Equation (23), then the following holds: For every i ∈ [n]
E
h
h(x(1), · · · , x(i), y(i+1), · · · , y(n)i
−E
h
h(x(1), · · · , y(i), y(i+1), · · · , y(n)i
≤ d−cgm/2+cm , (31)
where cg is the parameter used in Equation (23), x(1), · · · , x(n) ∼ MA,v, and y(1), · · · , y(n) ∼ N (0, I).
27

Proof. First, using an averaging argument, it suffices to show the following for an arbitrary set of points Si := {x(1), · · · , x(i−1), y ̄, y(i+1), · · · y(n)}:
ξ∼EA
h
h(x(1), · · · , x(i), y ̄ + ξv, · · · , y(n))
i
−E
z∼N (0,1)
h
h(x(1), · · · , x(i), y ̄ + zv, · · · , y(n))
i
≤ d−cgm/2+cm. (58)
Throughout the proof, we will fix ctrunc = cg/2 − c/2, and set the truncated domain to be I =
[−dctrunc , dctrunc ].
It then follows from Lemma 3.6 that
max ξ∼EA [ξ ∈ I] , E
ξ∼N (0,1)
[ξ ∈ I] ≤ mmd−ctruncm ≤ d−cgm/2+cm ,
where the last inequality follows from the assumption that m < dc/C Since the mollified PTF is constructed to be bounded from above by 1, showing Equation (58) can be reduced to showing
E
ξ∼A ̄
h
h(x(1), · · · , x(i), y ̄ + ξv, · · · , y(n))
i
−E
ξ∼N ̄ (0,1)
h
h(x(1), · · · , x(i), y ̄ + zv, · · · , y(n))
i
≤ d−ctruncm+cm/2 , (59)
where A ̄ and N ̄ (0, 1) are the truncated versions of the distributions that condition on ξ and z being inside the interval [−dctrunc , dctrunc ]. We will show Equation (59) by considering two cases. The first is when Si is not a well-behaved point set (Definition 3.7) at position i. That is, we have that for every ξ ∈ [−dctrunc, dctrunc], there exists some t such that
p[t] x(1), · · · , y ̄ + ξv, · · · , y(n) 2
F
> 3d−cgt p(x(1), · · · , y ̄ + ξy, · · · , y(m))
2
.
By the definition of the mollified PTF (cf. Equation (22)), we immediately have that in this case h(x(1), · · · , x(i), y ̄+ ξv, · · · , y(n)) = 0 for all ξ ∈ [−dctrunc, dctrunc]. Thus, Equation (59) follows trivially in this case as the left hand side is zero. Now consider the complementary case where Si is a well-behaved point set at position i. By Lemma 3.10, we have that
Dt
i,vh x(1), · · · , y ̄ + ξv, · · · , y(n) ≤ (k + t)O(t) d−cgt/2 (60)
for all t ∈ [m] and ξ ∈ [−dctrunc, dctrunc]. In this case, we will show Equation (59) by rewriting h in terms of its Taylor expansion, and then bounding the differences between the Taylor terms. Consider the degree-m Taylor expansion of h around 0:
h(x(1), · · · , y ̄ + ξv, · · · , y(n)) =
m−1
X
t=0
ξt/t! Dt
i,vh x(1), · · · , y ̄ + ξ∗v, · · · , y(n)
+ (ξm/m!) Dm
i,vh x(1), · · · , y ̄ + ξbv, · · · , y(n) , (61)
28

where ξbis some point between ξ and ξ∗ which also depends on x(1), · · · y ̄, · · · , y(n) and ξ∗ lies in [−dctrunc, dctrunc]. For convenience, we write ∆(a) := Eξ∼A ̄[ξa] − Eξ∼N ̄ (0,1)[ξa]. For t ∈ [m − 1], we have that
Dt
i,vh x(1), · · · , y ̄ + ξ∗v, · · · , y(n) E
ξ∼A ̄
ξt − E
ξ∼N ̄ (0,1)
ξt (62)
= Dt
i,vh x(1), · · · , y ̄ + ξ∗v, · · · , y(n) ∆(a) (63)
≤ (m + t)O(t)d−cgt/2 d−ctrunc(m−t) (by Equation (60), and Lemma 3.6)
≤ (m + t)O(t)d−ctruncm. (using ctrunc = cg/2 − 0.01)
In particular, this implies that
E
ξ∼A ̄
"m−1
X
t=1
ξt/t! Dt
i,vh x(1), · · · , y ̄ + ξ∗v, · · · , y(n)
#
− (64)
E
ξ∼N ̄ (0,1)
"m−1
X
t=1
ξt/t! Dt
i,vh x(1), · · · , y ̄ + ξ∗v, · · · , y(n)
#
(65)
≤ m mO(m)d−ctruncm = mO(m) d−ctruncm , (66)
where we used the triangle inequality. For the last Taylor remainder term, applying Equation (60) again gives that
(ξm/m!) Dm
i,vh x(1), · · · , y ̄ + ξbv, · · · , y(n) ≤ (ξm/m!) (k + m)O(m)d−cgm/2 ,
for all ξ. In particular, this implies that the expected value of the Taylor remainder term under the distribution of ξ ∼ A ̄ is at most
(k + m)O(m)d−cgm/2 E
ξ∼A ̄
[ξm/m!]
≤ (k + m)O(m)d−cgm/2 ξ∼EA [ξm/m!] (since the mass of A within the truncated interval is 1 − o(1))
= (k + m)O(m)d−cgm/2 E
ξ∼N (0,1)
[(ξm/m!)]
(since we assume the degree-m moment of A match with N (0, 1))
≤ (k + m)O(m)d−cgm/2 (by the Gaussian moment bound)
The same bound can be established for the Taylor remainder term under the distribution of ξ ∼ N ̄ (0, 1) as well. It then follows from the trinagle inequality that the difference between the expected value of the Taylor remainder term under N ̄ (0, 1) and A ̄ is at most (k + m)O(m)d−cgm/2. Combining this with Equations (61) and (64) then shows that
E
ξ∼A ̄
h
h(x(1), · · · , x(i), y ̄ + ξv, · · · , y(n))
i
−E
ξ∼N ̄ (0,1)
h
h(x(1), · · · , x(i), y ̄ + zv, · · · , y(n))
i
≤ (k + m)O(m)d−ctruncm ≤ d−ctruncm+cm/2 ,
where the last inequality follows from the assumption that d > max kC/c, mC/c . This concludes the proof of Equation (59), as well as Proposition 3.5.
29

References
[ABX08] B. Applebaum, B. Barak, and D. Xiao. On basing lower-bounds for learning on worst-case assumptions. In 49th Annual IEEE Symposium on Foundations of Computer Science, FOCS 2008, pages 211–220. IEEE Computer Society, 2008.
[BBH+21] M. Brennan, G. Bresler, S. B. Hopkins, J. Li, and T. Schramm. Statistical query algorithms and low-degree tests are almost equivalent. In Proceedings of The 34th Conference on Learning Theory, COLT, 2021.
[BHK+16] B. Barak, S. B. Hopkins, J. A. Kelner, P. Kothari, A. Moitra, and A. Potechin. A nearly tight sum-of-squares lower bound for the planted clique problem. FOCS, 2016.
[BKS+06] G. Blanchard, M. Kawanabe, M. Sugiyama, V. Spokoiny, and K. B. Müller. In search of non-gaussian components of a high-dimensional distribution. Journal of Machine Learning Research, 7(9):247–282, 2006.
[BKW19] A. S. Bandeira, D. Kunisky, and A. S. Wein. Computational hardness of certifying bounds on constrained pca problems. arXiv preprint arXiv:1902.07324, 2019.
[BS16] B. Barak and D. Steurer. Proofs, beliefs, and algorithms through the lens of sum-of-squares. 2016.
[Cho61] C. K. Chow. On the characterization of threshold functions. In Proceedings of the Symposium on Switching Circuit Theory and Logical Design (FOCS), pages 34–38, 1961.
[CW01] A. Carbery and J. Wright. Distributional and Lq norm inequalities for polynomials over convex bodies in Rn. Mathematical Research Letters, 8(3):233–248, 2001.
[DDFS14] A. De, I. Diakonikolas, V. Feldman, and R. A. Servedio. Nearly optimal solutions for the chow parameters problem and low-weight approximation of halfspaces. J. ACM, 61(2):11:1–11:36, 2014.
[Der65] M. Dertouzos. Threshold Logic: A Synthesis Approach. MIT Press, Cambridge, MA, 1965.
[DGJ+09] I. Diakoniokolas, P. Gopalan, R. Jaiswal, R. Servedio, and E. Viola. Bounded independence fools halfspaces. In Proc. 50th IEEE Symposium on Foundations of Computer Science (FOCS), pages 171–180, 2009.
[DGJ+10] I. Diakonikolas, P. Gopalan, R. Jaiswal, R. Servedio, and E. Viola. Bounded independence fools halfspaces. SIAM Journal on Computing, 39(8):3441–3462, 2010.
[DH24] R. Dudeja and D. Hsu. Statistical-computational trade-offs in tensor pca and related problems via communication complexity. The Annals of Statistics, 52(1):131–156, 2024.
[DHK+10] I. Diakonikolas, P. Harsha, A. Klivans, R. Meka, P. Raghavendra, R. A. Servedio, and L. Y. Tan. Bounding the average sensitivity and noise sensitivity of polynomial threshold functions. In STOC, pages 533–542, 2010.
[DJNS13] E. Diederichs, A. Juditsky, A. Nemirovski, and V. Spokoiny. Sparse non gaussian component analysis by semidefinite programming. Machine learning, 91:211–238, 2013.
30

[DK19] I. Diakonikolas and D. M. Kane. Degree-d chow parameters robustly determine degree-d ptfs (and algorithmic applications). In Proceedings of the 51st Annual ACM SIGACT Symposium on Theory of Computing, STOC 2019, Phoenix, AZ, USA, June 23-26, 2019, pages 804–815. ACM, 2019.
[DK23] I. Diakonikolas and D. M. Kane. Algorithmic high-dimensional robust statistics. Cambridge university press, 2023.
[DKK+22] I. Diakonikolas, D. M. Kane, S. Karmalkar, A. Pensia, and T. Pittas. Robust sparse mean estimation via sum of squares. In Conference on Learning Theory, pages 4703–4763. PMLR, 2022.
[DKK+24] I. Diakonikolas, D. M. Kane, V. Kontonis, S. Liu, and N. Zarifis. Super non-singular decompositions of polynomials and their application to robustly learning low-degree ptfs. In Proceedings of the 56th Annual ACM Symposium on Theory of Computing, STOC 2024, Vancouver, BC, Canada, June 24-28, 2024, pages 152–159. ACM, 2024.
[DKN10] I. Diakonikolas, D. M. Kane, and J. Nelson. Bounded independence fools degree-2 threshold functions. In FOCS, pages 11–20, 2010.
[DKP+21] I. Diakonikolas, D. M. Kane, A. Pensia, T. Pittas, and A. Stewart. Statistical query lower bounds for list-decodable linear regression. Advances in Neural Information Processing Systems, 34:3191–3204, 2021.
[DKPP24] I. Diakonikolas, S. Karmalkar, S. Pang, and A. Potechin. Sum-of-squares lower bounds for non-gaussian component analysis. In 2024 IEEE 65th Annual Symposium on Foundations of Computer Science (FOCS), pages 949–958. IEEE, 2024.
[DKRS23] I. Diakonikolas, D. Kane, L. Ren, and Y. Sun. Sq lower bounds for non-gaussian component analysis with weaker assumptions. Advances in Neural Information Processing Systems, 36:4199–4212, 2023.
[DKS17] I. Diakonikolas, D. M. Kane, and A. Stewart. Statistical query lower bounds for robust estimation of high-dimensional gaussians and gaussian mixtures. In 2017 IEEE 58th Annual Symposium on Foundations of Computer Science (FOCS), pages 73–84, 2017.
[DKS18a] I. Diakonikolas, D. M. Kane, and A. Stewart. Learning geometric concepts with nasty noise. In Proceedings of the 50th Annual ACM SIGACT Symposium on Theory of Computing, STOC 2018, pages 1061–1073, 2018.
[DKS18b] I. Diakonikolas, D. M. Kane, and A. Stewart. List-decodable robust mean estimation and learning mixtures of spherical gaussians. In Proceedings of the 50th Annual ACM SIGACT Symposium on Theory of Computing, pages 1047–1060, 2018.
[DKWB24] Y. Ding, D. Kunisky, A. S. Wein, and A. S. Bandeira. Subexponential-time algorithms for sparse pca. Foundations of Computational Mathematics, 24(3):865–914, 2024.
[DRST14] I. Diakonikolas, P. Raghavendra, R. A. Servedio, and L. Y. Tan. Average sensitivity and noise sensitivity of polynomial threshold functions. SIAM J. Comput., 43(1):231–253, 2014.
[DS14] A. De and R. A. Servedio. Efficient deterministic approximate counting for low-degree polynomial threshold functions. In Symposium on Theory of Computing, STOC 2014, pages 832–841, 2014.
31

[FGR+13] V. Feldman, E. Grigorescu, L. Reyzin, S. Vempala, and Y. Xiao. Statistical algorithms and a lower bound for detecting planted cliques. In Proceedings of STOC’13, pages 655–664, 2013. Full version in Journal of the ACM, 2017.
[GS19] N. Goyal and A. Shetty. Non-gaussian component analysis using entropy methods. In Proceedings of the 51st Annual ACM SIGACT Symposium on Theory of Computing, pages 840–851, 2019.
[Hop18] S. Hopkins. Statistical inference and the sum of squares method. Cornell University, 2018.
[Hop24] S. Hopkins. Personal communication, 2024.
[HS17] S. B. Hopkins and D. Steurer. Efficient bayesian estimation from few samples: community detection and related problems. In 2017 IEEE 58th Annual Symposium on Foundations of Computer Science (FOCS), pages 379–390. IEEE, 2017.
[HSW24] S. Hopkins, T. Schramm, and A. Wein. Low-degree polynomial methods in average-case complexity. AIM and NSF Workshop, Pasadena, California, December 2024. Available at
https://aimath.org/workshops/upcoming/lowdegreecomplexity/.
[Kan11a] D. M. Kane. k-independent gaussians fool polynomial threshold functions. In IEEE Conference on Computational Complexity, pages 252–261, 2011.
[Kan11b] D. M. Kane. A small prg for polynomial threshold functions of gaussians. In FOCS, pages 257–266, 2011.
[Kan12] D. M. Kane. A pseudorandom generator for polynomial threshold functions of gaussian with subpolynomial seed length. CoRR, abs/1210.1280, 2012.
[Kan14] D. M. Kane. The correct exponent for the gotsman-linial conjecture. Computational Complexity, 23(2):151–175, 2014.
[Kea93] M. J. Kearns. Efficient noise-tolerant learning from statistical queries. In Proceedings of the Twenty-Fifth Annual ACM Symposium on Theory of Computing, pages 392–401, 1993.
[Kea98] M. J. Kearns. Efficient noise-tolerant learning from statistical queries. Journal of the ACM, 45(6):983–1006, 1998.
[KM22] Z. Kelley and R. Meka. Random restrictions and prgs for ptfs in gaussian space. In Proceedings of the 37th Computational Complexity Conference, pages 1–24, 2022.
[KWB19] D. Kunisky, A. S. Wein, and A. S. Bandeira. Notes on computational hardness of hypothesis testing: Predictions using the low-degree likelihood ratio. In ISAAC Congress (International Society for Analysis, its Applications and Computation), pages 1–50. Springer, 2019.
[MP88] M. Minsky and S. Papert. Perceptrons: an introduction to computational geometry (expanded edition). MIT Press, Cambridge, MA, 1988.
[MTT61] S. Muroga, I. Toda, and S. Takasu. Theory of majority switching elements. J. Franklin Institute, 271:376–418, 1961.
[MW21] C. Mao and A. S. Wein. Optimal spectral recovery of a planted vector in a subspace. arXiv preprint arXiv:2105.15081, 2021.
32

[MZ10] R. Meka and D. Zuckerman. Pseudorandom generators for polynomial threshold functions. In Proceedings of the Forty-second ACM Symposium on Theory of Computing, pages 427–436, 2010.
[O’D14] R. O’Donnell. Analysis of Boolean Functions. Cambridge University Press, 2014.
[OST20] R. O’Donnell, R. A. Servedio, and L. Tan. Fooling gaussian ptfs via local hyperconcentration. In Proceedings of the 52nd Annual ACM SIGACT Symposium on Theory of Computing, pages 1170–1183, 2020.
[Ros58] F. Rosenblatt. The Perceptron: a probabilistic model for information storage and organization in the brain. Psychological Review, 65:386–407, 1958.
[SKBM08] M. Sugiyama, M. Kawanabe, G. Blanchard, and K. B. Muller. Approximating the best linear unbiased estimator of non-gaussian signals with gaussian noise. IEICE transactions on information and systems, 91(5):1577–1580, 2008.
[SNS16] H. Sasaki, G. Niu, and M. Sugiyama. Non-gaussian component analysis with log-density gradient estimation. In Artificial Intelligence and Statistics, pages 1177–1185. PMLR, 2016.
[SW22] T. Schramm and A. S. Wein. Computational barriers to estimation from low-degree polynomials. The Annals of Statistics, 50(3):1833–1858, 2022.
[Sze67] G. Szegö. Orthogonal Polynomials. Number τ . 23 in American Mathematical Society colloquium publications. American Mathematical Society, 1967.
[VX11] S. S. Vempala and Y. Xiao. Structure from local optima: Learning subspace juntas via higher order pca. arXiv preprint arXiv:1108.3329, 2011.
[Wei] A. S. Wein. Computational Complexity of Statistics: New Insights from Low-Degree Polynomials.
[Wei24] A. S. Wein. Personal communication, 2024.
[ZHT06] H. Zou, T. Hastie, and R. Tibshirani. Sparse principal component analysis. Journal of computational and graphical statistics, 15(2):265–286, 2006.
33

Appendix
A Additional Preliminaries
A.1 Basics of Hermite Polynomials
Hermite polynomials form a complete orthogonal basis of the vector space L2(R, N (0, 1)) of all functions f : R → R such that Ex∼N (0,1)[f 2(x)] < ∞. We will use the normalized probabilist’s Hermite polynomials, which have unit norm and are pairwise orthogonal with respect to the Gaussian measure, i.e., R
R hk(x)hm(x)e−x2/2dx = √2π1(k = m) These polynomials are the ones obtained by Gram
Schmidt orthonormalization of the basis {1, x, x2, . . .} with respect to the inner product ⟨f, g⟩N (0,1) :=
Ex∼N (0,1)[f (x)g(x)]. Every function f ∈ L2(R, N (0, 1)) can be uniquely written as f (x) = P∞
i=0 aihi(x)
and we have limn→∞ Ex∼N (0,1)[(f (x) − Pn
i=0 aihi(x))2] = 0. We have the following closed form formula (see, e.g., [Sze67]):
hn(x) =
√ n!
⌊n/2⌋
X
j=0
(−1)j
j!(n − 2j)!2j xn−2j . (67)
To extend the basis to d-dimensions, we use a multi-indices J ∈ Nd to define the d-variate normalized Hermite polynomial. For J = (v1, . . . , vd) we define hJ(x) = Qd
i=1 hvi(xi). The total degree of hJ is
|J| = P
vi∈J vi. Given a function f ∈ L2(Rd, N (0, I)) we compute its Hermite coefficients as fb(J) =
Ex∼Nn[f (x)hJ(x)] and express it uniquely as P
J∈Nn fb(J)hJ(x). For more details on the Gaussian space and Hermite Analysis (especially from the theoretical computer science perspective), we refer the reader to [O’D14]. Most of the facts about Hermite polynomials that we use in this work are well known properties and can be found, for example, in [Sze67]. We denote by f [k](x) the degree k part of the Hermite expansion of f , f [k](x) = P
|J|=k fb(J)·hJ(x). We say that a polynomial q is harmonic of degree k if it is a linear combination of degree k Hermite polynomials, that is q can be written as
q(x) = q[k](x) =
X
J:|J|=k
cJhJ(x) .
We will use the following fact, stating that odd degree Hermite polynomials are small around the origin.
Claim A.1 (Upper Bound on Hermite Polynomial around the Origin). Let δ ∈ (0, 1/2) be such that δ < k−C for some sufficiently large constant C, and ha be a degree-k multivariate Hermite polynomial. We then have that ha(δ 1) < 1.
Proof. Consider a univariate Hermite polynomial hk : R 7→ R. By the explicit formula of hk(δ) in Equation (67), it follows that the polynomial is dominated by its constant term (when k is even) or its linear term (when k is odd) when δ is a sufficiently small polynomial in its degree k. It is not hard to verify that the coefficient of the constant term or linear term is smaller than 1. It then follows that hk(δ) < 1 when δ is a sufficiently small polynomial in k. Since the multivariate Hermite pol-
ynomials are just products of many univariate Hermite polynomials, it follows that ha(δ 1) < 1.
Another useful property of Hermite polynomials is that there exists a nice recurrence relationship between the polynomial itself and its derivative.
Fact A.2. We have that d
dx hk(x) = khk−1(x).
The fact implies the following bound on the Lipchitzness of the multivariate Hermite polynomials are around the origin.
34

Claim A.3 (Lipchitz continuity of Hermite Polynomials around the Origin). Let k ∈ Z+, and δ ∈ (0, 1/2) be at most a sufficiently small polynomial in k, and ha : Rn 7→ R be a multivariate degree-k Hermite polynomial. Then it holds that
|ha (δ1n) − ha (0n)| ≤
√
k3nδ.
Proof. For notational convenience, we define hb(x) to be the constant 0 function when b contains any negative entries. Under this notation, Fact A.2 then implies that the gradient of ha is simply
∇ha(x) = a1ha−e(1)(x), · · · , anha−e(n)(x) ⊤ ,
where e(i) is the multi-index having zeroes everywhere except from the i-th position, where it has 1. Combining the above with Claim A.1 then gives that
∥∇ha(δ1)∥2
2≤
n
X
i=1
k2h2
a−e(i)(δ1)
=
X
i:ai>0
k2ha−e(i)(δ1)2
≤ k3 ,
where the last inequality follows from Claim A.1 and the fact that there can be at most k positive entries in a. We therefore have that
|ha (δ1n) − ha (0n)| ≤ ∥∇ha(δ1)∥2∥δ1∥2 ≤
√
k3nδ.
This concludes the proof of Claim A.3.
A.2 Other Facts
Fact A.4 (Isserlis’s Theorem). Let (x1, . . . , xk) ∼ N (0, Σ). Then,
E[x1 · · · xk] =
X
p∈P 2
k
Y
{i,j}∈p
E[xixj] ,
where P 2
k is the set of all matchings of {1, . . . , k}.
Lemma A.5. There exists a smooth function ρ : R 7→ [0, 1] satisfying that (1) ρ(x) = 1 if |x| < 1 , (2) ρ(x) = 0 if |x| ≥ 3, and ∥ρ(t)(x)∥∞ ≤ tO(t).
Proof. Within the context of this proof, we call a function smooth if its t-th order derivative is bounded from above by tO(t). First, consider the function f : R 7→ R defined as
ρ0(x) :=
(
0 if x ≥ 0
exp(−1/x2) otherwise.
Then we have ρ0 is a smooth function, and ρ0(x) = 0 for all x ≥ 0. Next, define ρ1(x) := ρ0(−1 + x)ρ0(−1 − x). ρ1 is still a smooth function, and we have ρ1(x) = 0 if |x| ≥ 1, and ρ1(x) > 0 if |x| < 1. We can define a probability distribution supported on [−1, 1] whose probability density function is exactly proportional to ρ1. Denote by ρ2 the cumulative density function of this probability distribution. ρ2 remains a smooth function. Furthermore, we have that ρ2(x) = 0 if x < −1, and ρ2(x) = 1 if-
 x > 1. Finally, define ρ(x) = ρ2(2 + x) ρ2(2 − x). ρ is still a smooth function, and it satisfies that ρ(x) = 1 if |x| < 1, and ρ(x) = 0 if |x| > 3. This concludes the proof of Lemma A.5.
35

B Separation between PTF Tests and LDP Tests
In this section, we show that having no γ-advantageous polynomials in the sense of Definition 1.2 for a testing problem does not necessarily rule out the existence of a good PTF test in the sense of Definition 1.3. In this section, we will work with hypothesis testing where the family of distributions for the alternative hypothesis consists of only one distribution. We restate the simplified version of γ-advantageous for simple hypothesis testing below:
Definition B.1 (γ-advantageous polynomial). Let γ > 0, p : Rn×d 7→ R be a degree-k, n-sample polynomial, and D∅ be a distribution in Rd, Dalt be a distribution family in Rd and μ be the uniform distribution over Dalt. We say that p is a degree-k, n-sample, γ-advantageous polynomial with respect to D∅, Dalt if:
E
x(1) ,...,x(n) ∼D∅
h
p(x(1), · · · , x(n))
i
−E
y(1) ,...,y(n) ∼Dalt
h
p(y(1), · · · , y(n)
i
> γ max
r
Var
x(1) ,...,x(n) ∼D∅
p(x(1), · · · , x(n)) ,
r
Var
y(1) ,...,y(n) ∼Dalt
p(y(1), · · · y(n))
!
. (68)
We show that even in one-dimension there exist distributions D∅, Dalt for which there is no low-degree γ-advantageous polynomial, but the hypothesis problem can be easily solved with a polynomial threshold test of degree k = 1 using n = 1 sample. The definition of the testing problem, and the statement of the claim is given below.
Definition B.2 (δ-Gap Threshold Test under ε-Gaussian Noise). Let δ, ε ∈ (0, 1). We consider the hypothesis testing problem of distinguishing between the two distributions D∅ and Dalt in R defined as follows: (1) D∅ := (1 − ε)p0 + εN (0, 1), where p0 is a point mass on 0, and (2) Dalt := (1 − ε)pδ + εN (0, 1), where pδ is a point mass on δ.
Theorem B.3. Let ε, γ, δ ∈ (0, 1/2), and n, k ∈ Z+. Assume that
√
kn ε−n k3n δ ≤ γ. Then there is no degree-k, n-sample, γ-advantageous polynomial with respect to D∅, Dalt from Definition B.2. However, the 1-sample linear threshold function 1{x > δ/2} distinguishes between D∅, Dalt with probability at least 1 − ε.
Proof. The fact that the linear threshold function test 1{x > δ/2} distinguishes between D∅, Dalt with probability 1 − ε is immediate by the definition of the problem. We will use the notation D⊗n
∅ and D⊗n
alt to denote the product distribution of n samples under the two
hypotheses. Now, consider a degree-k polynomial p : Rn 7→ R. Since Equation (68) is invariant to shifting and scaling of the polynomial, we can assume without loss of generality that Varx∼(D∅)⊗n [p(x)] = 1 and
Ex∼(D∅)⊗n [p(x)] = 0.
Under this assumption, note that we can bound from above the L2-norm of p under the standard Gaussian distribution as
E
x∼N (0,I)
p2(x) ≤ ε−n E
x∼(D∅)⊗n p2(x)
= ε−n Var
x∼(D∅)⊗n [p(x)] = ε−n ,
where the first inequality follows from the fact that x will be sampled from the n-dimensional standard Gaussian distribution with probability εn by the definition of D∅, and the last two equalities follow from our assumptions on Varx∼(D∅)⊗n [p(x)] and Ex∼(D∅)⊗n [p(x)].
36

It then suffices for us to show that
E
x∼(D∅)⊗n [p(x)] − E
y∼(Dalt)⊗n [p(y)] ≤ γ , (69)
for any polynomial p satisfying Ex∼N (0,I) p2(x) ≤ ε−n. We first prove a structural claim.
Claim B.4. Let m ≤ n, and q : Rm 7→ R be an arbitrary degree-k polynomial such that Ex∼N (0,I) q2(x) ≤ ε−n. Then it holds that
|q(δ1m) − q(0m)| ≤ γ.
Proof. Assume that q(x) admits the Hermite decomposition q(x) = P
a∈Nn:|a|≤k caha(x) (see Section A.1
for definitions and notation regarding Hermite polynomials). By our assumption that Ex∼N (0,I) q2(x) ≤ ε−n, the coefficients in the Hermite decomposition should satisfy that P
a∈Nn:|a|≤k c2a ≤ ε−n. Using Claim A.3 and the assumption that δ is a sufficiently small polynomial in k, we have that ha(δ1m)−ha(0m) ≤
√
k3mδ for all a ∈ Nn : |a| ≤ k. It follows that
|q(δ1m) − p(δ0m)| ≤
X
a∈Nn:|a|≤k
|ca| |ha(δ1m) − ha(0m)|
≤
X
a∈Nn:|a|≤k
|ca|
√
k3m δ
≤
√
kn ε−n k3m δ ≤ γ
where the first inequality is by the triangle inequality, the second inequality is by the bound on ha(δ1m) − ha(0m), the third inequality is by Cauchy’s inequality and the bound P
a∈Nn:|a|≤k c2a ≤ ε−n, and the last inequality is by our assumption on k, n, δ, γ, ε. This concludes the proof of Claim B.4.
Given two vectors y ∈ Rm, z ∈ Rn−m, and a subset of indices S ⊆ [n] with cardinality |S| = m, we define x := y ∪S z as the vector that has xi = yi if i ∈ S and xi = zi otherwise. Given an arbitrary subset of indices S ⊆ [n], we can then define the function qS : Rn−|S| 7→ R as
qS(y) := E
z∼N (0,I|S|)
[p (z ∪S y)] .
It is not hard to see that qS is a degree at most k polynomial in y satisfying Ey∼N (0,In−|S|) q2
S(y) =
Ex∼N (0,In) p2(x) , which is at most ε−n. Note that we can decompose the difference in Equation (69) by conditioning on different subsets of samples that are sampled from the Gaussian distribution. In particular, we have that
E
x∼(D∅)⊗n [p(x)] − E
y∼(Dalt)⊗n [p(y)] ≤ max
S⊂[n]
E
z∼N (0,I|S|)
p z ∪S δ1n−|S| − p z ∪S 0n−|S|
= max
S⊂[n]
qS(δ1n−|S|) − qS(0n−|S|) ≤ γ ,
where the equality is by the definition of qS, and the last inequality follows from Claim B.4. This shows Equation (69), and concludes the proof of Theorem B.3.
37

C (Near-)Optimality of the Sample Lower Bound in Theorem 1.6
Theorem C.1. For any d, m ∈ Z+, there exists a univariate distribution A on R that matches m moments
with N (0, 1) so that for n ≫ (C d m log d)m/4, where C is a sufficiently large constant, and k > 4 log n, there exists a degree-k polynomial p : Rn×d 7→ {0, 1} that successfully distinguishes N (0, I) and MA,v for any unit vector v ∈ Rd sign(p(·)) with constant probability: Ex(1),··· ,x(n)∼N (0,1) sign p x1:n < 1/10
but Ey(1),··· ,y(n)∼MA,v sign p y1:n > 9/10 for all unit vector v ∈ Rd.
The basic idea is to construct a distribution A that takes values slightly larger than d1/4 with probability almost d−m/4 but has its first m moments matched with N (0, 1). If so, any sample y from MA,v that witnesses the extreme values of A will have an unusually large norm compared to the Gaussian case. However, since the distribution of ∥x∥22 over the standard Gaussian has its variance being approximately
d1/2, this leads to a detectable discrepancy. This forms the basis of our algorithm for distinguishing N (0, I) and MA,v: the algorithm draws approximately dm/4 many samples and simply looks for a sample with an abnormally large l2 norm. After that, we show that it is not difficult to turn this algorithm into an actual PTF test with a small loss in efficiency. To begin with, the following proposition constructs a moment-matching distribution A that has a nontrivial amount of mass on some extreme v-
alue R.
Proposition C.2. For any positive integer m, and real number R > 0, there exists a distribution A on R that matches m moments with the standard Gaussian and satisfies that Pr[A = R] ≥ R−m/poly(m).
Proof. Let ε be R−m divided by a sufficiently large polynomial in m. We define A to be a probability distribution with the following probability density function:
A(x)dx = G(x)dx + (p(x)1{|x| < 1}dx) + ε δx=R
where G : R 7→ R+ is the probability density function of the standard Gaussian, δx=R is a point mass at x = R, and p(x) is some degree-m polynomial we will specify later. It is clear that Prx∼A [x = R] = ε. We just need to show that there is a polynomial p which ensures that (1) A(x) is non-negative, (2) R
R A(x)dx = 1, and (3) A match enough moments with the standard Gaussian N (0, 1):
Z
R
G(x)xtdt =
Z
R
A(x)xtdt
for all integers 0 ≤ t ≤ m. In particular, we need some polynomial p such that
Z1
−1
p(x)xtdt = εRt
for all such 0 ≤ t ≤ m, and p(x) + G(x) ≥ 0 for all |x| ≤ 1. Such a polynomial can be constructed with standard techniques based on linear programming (see e.g. exercise 8.3 of [DK23]). This concludes the proof of Proposition C.2.
We are now ready to prove Theorem C.1.
Proof of Theorem C.1. Let A be the distribution given by Proposition C.2 with R = Cd1/4, where C is some sufficiently large constant multiple of log1/4(n). Let t = ⌊log n⌋. Define the polynomial p : Rn×d 7→ R as
p(x(1), · · · , x(n)) =
n
X
i=1
x(i) 2
2
−d
2t
. (70)
38

If the x(i)’s are independent Gaussians, we have that x(i) 2
2 − 1 is a degree-2 polynomial with L2 norm
O(√d). Therefore, by Gaussian hypercontractivity, we have that E x(i) 2
2−1
2t
≤ O(t)tdt. In
particular, this implies that
E[p x(1:n) ] ≤ O(t)tdtn.
Note that p is a non-negative polynomial. Applying Markov’s inequality therefore gives that
Pr
h
p x(1:n) < (C′t)tdti
≥ 9/10 ,
where C′ is some sufficiently large constant. On the other hand, suppose that x is drawn from MA,v conditioned on v⊤x = R (which happens with
probability at least R−m/poly(m)). Then we immediately have that ∥x∥22 = R2+ x⊥ 2
2, where x⊥ is the part
of x that is orthogonal to v, which is distributed like N (0, I − vv⊤). Therefore, E ∥x∥2
2 − d v⊤x = R =
R2 − 1 and
Var ∥x∥2
2 − d v⊤x = R = Var x⊥ 2
2
= O(d).
Therefore, by Chebyshev’s inequality, we have
Pr ∥x∥2
2 − d > R2/2 v⊤x = R > 1/2 ,
which further implies that
Pr
h
∥x∥2
2 − d > R2/2
i
> (1/2)R−m/poly(m) > 10/n.
Thus, if x(1), · · · , x(n) are drawn independently from MA,v, the probability that there exists some i ∈ [n]
such that x(i) 2
2 − d > R2/2 is at least 9/10. However, if this happens, we immediately have that
p x(1), · · · , x(n) ≥ x(i) 2 2
−d
2t
≥ R4t/22t = C4tdt/22t ≥ T.
This shows a separation between the two cases, and completes the proof of Theorem C.1.
D Comparison with Information-Computation Gaps for NGCA from Prior
Work
D.1 Bound on Low-Degree Likelihood Ratio
The following result follows by combining [BBH+21], (which shows that a lower bound on the statistical query dimension of a hypothesis testing problem implies an upper bound on the norm of the low-degree likelihood ratio) and the statistical query dimension bound from [DKS17]. The details of this combination can be found in [DKP+21] (Corollary 6.4, treating y as a fixed value).
39

Additional notation For a distribution D over X , we use D⊗n to denote the joint distribution of n i.i.d. samples from D. For two functions f : X → R, g : X → R and a distribution D, we use ⟨f, g⟩D to denote the inner product EX∼D[f (X)g(X)]. We use ∥f ∥D to denote p⟨f, f ⟩D. We say that a polynomial f : Rn×d → R has sample-wise degree (r, l) if each monomial uses at most l different samples from x(1), . . . , x(n) and uses degree at most r for each of them. Let Cr,l be the linear space of all po-
lynomials of sample-wise degree (r, l) with respect to the inner product defined above. For a function f : Rn×d → R, we use f ≤r,l to be the orthogonal projection onto Cr,l with respect to the inner product ⟨·, ·⟩N (0,I)⊗n. Finally,
for the null distribution N (0, I) and a distribution MA,v from Problem 1.5, define the likelihood ratio
M⊗n
A,v(x(1), . . . , x(n)) to be the ratio of the pdf of M⊗n
A,v on the point (x(1), . . . , x(n)) divided by the pdf of
N (0, I) evaluated on the point (x(1), . . . , x(n)). The χ2-distance between two distributions D and R on X is defined as χ2(D, R) := R
x∈X D2(x)/R(x)dx − 1.
Theorem D.1. For any c ∈ (0, 1/2) the following holds. There exists a subset S of the d-dimensional unit sphere for which the following hold. Let a sufficiently small positive constant c. Let MA,v denote the distribution from Problem 1.5 and assume that A matches the first m moments with N (0, I) and the vector v is drawn from the uniform distribution over S. For any d ∈ Z+ with d = mΩ(1/c), any n ≤ Ω(d)(m+1)(1/2−c)/χ2(A, N (0, I)) and any even integer l < dc/4, we have that
E
v∼U(S)
M⊗n
A,v
≤∞,l
−1
N (0,I)⊗n
≤ 1 . (71)
The quantity in the right hand side of Equation (71) is the norm of the low-degree likelihood ratio. This is an equivalent rewriting of the best possible advantage β in Definition 1.2 with D∅ = N (0, I) and Dalt = 1
|S|
P
v∈S MA,v. In particular the variant of that definition where the right hand side in
Equation (68) only scales with the standard deviation under the null distribution N (0, I) instead of the maximum. Comparing with Theorem 1.6, the three conditions of Theorem 1.6 appear in some form in Theorem D.1: The sample complexity condition now is n ≤ Ω(d)(m+1)/(1/2−c)/χ2(A, N (0, I)), which has a better constant 1/2 in the exponent. Surprisingly, we show in Theorem C.1 that the exponent from Theorem 1.6 is essentially best possible, implying that PTF tests are inherently slightly more power-
ful than LDPs even for the NGCA problem. The condition k < dΩ(1) of Theorem 1.6 corresponds to the part of the statement in Theorem D.1 restring l < dc/4. Since the low-degree likelihood ratio uses sample-wise degree (∞, l) this means that the total degree of the resulting polynomial is restricted to be at most l < dc/4. Finally, the condition d > mΩ(1) appears in both Theorem 1.6 and Theorem D.1 with different constants.
D.2 Hardness in the Statistical Query Model
In this section we restate the result from [DKS17] regarding the information-computation gap for NGCA within the Statistical Query model. Before we restate the theorem, we recall the basics of the SQ model [Kea98, FGR+13]. Instead of drawing samples from the input distribution, SQ algorithms are only permitted query access to the distribution via the following oracle:
Definition D.2 (STAT Oracle). Let D be a distribution in Rd. A statistical query is a bounded function f : Rd → [−1, 1]. For τ > 0, the STAT(τ ) oracle responds to the query f with a value v such that |v − Ex∼D[f (x)] ≤ τ . We call τ the tolerance of the statistical query.
An information-computation gap in this model for a learning problem Π is typically of the following form: any SQ algorithm for Π must either make a large number of queries q or at least one query with small tolerance τ . When simulating a statistical query in the standard PAC model (by averaging i.i.d. samples to approximate expectations), the number of samples needed for a τ -accurate query can be as high as Ω(1/τ ).
40

Thus, we can intuitively interpret an SQ lower bound as a tradeoff between runtime of Ω(q) or a sample complexity of Ω(1/τ 2). The statement for NGCA is the following.
Theorem D.3 (See, e.g., Proposition 8.14 in [DK23]). For any constant c ∈ (0, 1/2) and any m, d ∈ Z+ with d ≥ ((m + 1) log d)2/c the following hold. If A is a distribution on R that matches the first m moments with N (0, 1) and MA,v denotes the distribution from Definition 1.4, then any SQ algorithm for distinguishing
between MA,v and N (0, I) (when v is unknown to the algorithm) requires either 2Ω(dc) many SQ queries or at least one query to STAT with accuracy τ ≤ 2d−(m+1)(1/4−c/2)pχ2(A, N (0, 1).
The interpretation of the above is a trade-off between exponential runtime and sample complexity at least d(m+1)(1/2−c)/χ2(A, N (0, 1). As shown in [DKRS23], the dependence on χ2(A, N (0, 1)) was merely an artifact of the original analysis and can be removed, at the cost of a larger constant in the exponent in the sample complexity. As one can see Theorem D.3 uses the same three assumptions as Theorem 1.6 up to differences in the constant and polylog factors. In the particular, the assumption d ≥ -
((m + 1) log d)2/c in
Theorem D.3 ensures that 2dc/2 ≥ d(m+1)(c−1/2), i.e., both the runtime and the sample complexity are at
least d(m+1)(c−1/2).
E Applications to Learning Mixture Models and Robust Statistics
In this section, we show that Theorem 1.6 implies strong lower bounds against PTF tests for a range of problems in machine learning theory and robust statistics. Note that since PTF produces binary output, all the lower bounds will be for the testing version of the corresponding statistical estimation problems. Similar to the approach taken in [DKPP24], we first define two meta testing problems that can be instantiated to model the testing version of various statistical estimation problems under t-
he total-variation corruption model and the Hubert Contamination model.
Definition E.1 (TV-Corruption Model). Let D be a set of distributions. We define BT V (τ, N (0, Id), D) to be the following hypothesis testing problem: Given n i.i.d. samples {x(1), · · · , x(n)} ⊆ Rd drawn from one of the following two distributions, the goal is to determine which one generated the samples: (a) N (0, Id); and (b) D′ such that dT V (D′, D) ≤ τ for D drawn uniformly at random from D.
Definition E.2 (Huber Contamination Model). Let D be a family of distributions. We define Bhuber(τ, N (0, Id), D) to be the following hypothesis testing problem: Given n i.i.d. samples {x(1), · · · , x(n)} ⊆ Rd drawn from one of the following two distributions, determine which one generated the samples: (a) N (0, Id); (b) D′, which is (1 − τ )D + τ B, where D is drawn uniformly at random from D and B is an arbitrary distribution possibly dependent on D.
We start with the testing version of robust mean estimation of isotropic Gaussian distribution.
Problem E.3 (Hypothesis-Testing-Robust-Mean-Estimation with Identity Covariance). Let τ > 0 and B = O(log1/2(1/τ )) be a parameter. The problem is BT V (τ, N (0, Id), D) (Definition E.1), where every D ∈ D is of the form N (μD, Id) and ∥μD∥ ≥ Ω(τ log(1/τ )1/2)/B2).
It is shown in [DKS17] that the above testing problem can be reduced to NGCA whose non-Gaussian component A matches m = B many moments. The lower bound against PTF tests then follows.
Corollary E.4. Let h : Rn×d 7→ R be a degree-k PTF. If h solves the hypothesis testing problem in
Problem E.3, then we must either have n ≥ dB(1−c∗)/4 or k ≥ dΩ(1), where c∗ is some small constant.
41

The second application is on robust mean estimation of distributions with bounded m-moments. The testing version of the problem is as follows (see Section 6 from [DKK+22] for the justification).
Problem E.5 (Hypothesis-Testing-Robust-Mean-Estimation with Bounded m-th Moments). Let m be a posi
tive integer and τ ∈ (0, 1). Hypothesis-Testing-RME-Bounded-m-Moments is the problem Bhuber(τ, N (0, Id), D) (Definition E.2) where each D ∈ D satisfies the following: (i) the mean vector μ satisfies ∥μ∥ ≥
Ω( 1
m τ 1−1/m); (ii) D has subgaussian tails of order m, i.e., for all v ∈ Rd and 1 ≤ i ≤ m, Ex∼D[ v⊤(x − μ) i]1/i ≤
O(√i).
It is shown in [DKK+22] that the problem can be reduced to NGCA whose non-Gaussian component A matches m many moments with the standard Gaussian. We therefore obtain the following lower bound against PTF tests.
Corollary E.6. Let h : Rn×d 7→ R be a degree-k PTF. If h solves the hypothesis testing problem in
Problem E.5, then we must either have n ≥ dm(1−c∗)/4 or k ≥ dΩ(1), where c∗ is some small constant.
The third application is on Gaussian list-decodable mean estimation. The testing version is given below. See [DKS18b] for a thorough walkthrough of this problem, and the reduction between its learning version and the testing version.
Problem E.7 (Hypothesis-Testing-List-Decodable-Mean-Estimation). Given τ ∈ (0, 1
2 ) and positive integer m ≥ 2, the hypothesis-testing-LDME is the problem Bhuber(1 − τ, N (0, Id), D) (Definition E.2), where every D ∈ D has the form N (μD, Id) for some μD ∈ Rd whose l2-norm is at least Ω((mτ )−1/m).
It is shown in [DKS18b] that this problem can be reduced to NGCA whose non-Gaussian component matches m moments with the standard Gaussian. We hence obtain the following lower bound against PTF tests.
Corollary E.8. Let h : Rn×d 7→ R be a degree-k PTF. If h solves the hypothesis testing problem in
Problem E.7, then we must either have n ≥ dm(1−c∗)/4 or k ≥ dΩ(1), where c∗ is some small constant.
The last application is on learning mixtures of k Gaussians. It is shown in [DKS17] that this learning problem can be reduced from the following testing problem.
Problem E.9 (Hypothesis-Testing-m-GMM). Let 0 < γ < 1. Hypothesis-Testing-m-GMM is the problem Bhuber(0, N (0, Id), D) (Definition E.2), where every D ∈ D is a mixture of m Gaussians such that each pair of the Gaussians are 1 − γ apart in total variation and dT V (D, N (0, Id)) ≥ 1
2.
It has been shown in the same work that the testing problem can be further reduced from NGCA whose non-Gaussian component matches 2m − 1 moments with N (0, 1). We therefore obtain the following lower bound.
Corollary E.10. Let h : Rn×d 7→ R be a degree-k PTF. If h solves the hypothesis testing problem in
Problem E.9, then we must either have n ≥ dm(1−c∗)/2 or k ≥ dΩ(1), where c∗ is some small constant.
42

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:19.739Z
- **Text Length:** 123810 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 43 of 43
