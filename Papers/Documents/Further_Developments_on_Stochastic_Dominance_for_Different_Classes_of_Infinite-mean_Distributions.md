# PDF Document: Zeng et al. - 2025 - Further Developments on Stochastic Dominance for Different Classes of Infinite-mean Distributions.pdf

**File Path:** Zeng et al. - 2025 - Further Developments on Stochastic Dominance for Different Classes of Infinite-mean Distributions.pdf

**Processed Date:** 2026-02-10T18:16:38.147Z

**File Size:** 551.41 KB

**Total Pages:** 31

**Extracted Pages:** 31

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3588

**Title:** Further Developments on Stochastic Dominance for Different Classes of Infinite-mean Distributions

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Further Developments on Stochastic Dominance
for Different Classes of Infinite-mean Distributions
Keyi Zeng∗ Zhenfeng Zou† Yuting Su‡ Taizhong Hu§
November 4, 2025
Abstract
In recent years, stochastic dominance for independent and identically distributed (iid) infinite-mean
random variables has received considerable attention. The literature has identified several classes of
distributions of nonnegative random variables that encompass many common heavy-tailed distributions.
A key result demonstrates that the weighted sum of iid random variables from these classes is stochas
tically larger than any individual random variable in the sense of the first-order stochastic dominance.
This paper systematically investigates the properties and inclusion relationships among these distribu
tion classes, and extends some existing results to more practical scenarios. Furthermore, we analyze the
case where each random variable follows a compound binomial distribution, establishing necessary and
sufficient conditions for the preservation of the aforementioned stochastic dominance relation.
Mathematics Subject Classifications (2000): Primary 60E15, 91G10; secondary 91B06.
Keywords: Infinite mean; Stochastic order; Diversification; Majorization order; Pareto distribution;
Fre ́chet distribution; Cauchy distribution
1 Introduction
The stochastic comparison of linear combinations of random variables has a long history, and a vast
literature has accumulated over the past decades. However, the majority of research in this area assumes
that the expectations of the involved random variables are finite. For example, see Proschan (1965), Bock
et al. (1987), Ma (2000), Amiri et al. (2011), Xu and Hu (2011), Yu (2011), Mao et al. (2013), Pan et al.
(2013), and the references therein.
Let X1, . . . , Xn be independent and identically distributed (iid) random variables having one-sided stable
distribution with infinite mean. Ibragimov (2005) showed that
n
X
i=1
θi
!
X1 ≤st
n
X
i=1
θiXi (SD∗)
∗School of Management, University of Science and Technology of China, China. Email: kyzeng@mail.ustc.edu.cn †School of Public Affairs, University of Science and Technology of China, China. Email: zfzou@ustc.edu.cn ‡School of Management, University of Science and Technology of China, China. Email: syt20020224@mail.ustc.edu.cn §School of Management, University of Science and Technology of China, China. Email: thu@ustc.edu.cn
1
arXiv:2511.00764v1 [math.PR] 2 Nov 2025

for any nonnegative real vector θ = (θ1, . . . , θn), where ≤st is the usual stochastic order or the first-order
stochastic dominance. For two random variables Y and Z, we say Y ≤st Z if P(Y > x) ≤ P(Z > x) for
all x ∈ R. For iid random variables X1, . . . , Xn having s symmetric stable distribution with infinite mean,
Ibragimov (2009) established
n
X
i=1
θi
!
|X1| ≤st
n
X
i=1
θiXi
for any nonnegative vector θ. Chen et al. (2025a) showed that (SD∗) holds for Pareto distribution with
tail parameter α ∈ (0, 1]. The special case of two Pareto distributed random variables with α = 1/2 was
considered by Embrechts et al. (2002) to demonstrate that, in view of Value-at-Risk, independence is worse
than perfect dependence no matter how large we choose the confidence level. The definition of the Pareto
distribution is given in Section 2. In portfolio diversification, property (SD∗) has an intuitive implication: A
more diversification portfolio is stochastically larger. Investigating the class of distributions for which (SD∗)
holds has received much attention in recent years. For example, Arab et al. (2025), Chen et al. (2025b),
Mu ̈ller (2025) and Vincent (2025) have shown that (SD∗) holds for more general classes of distributions: H,
V, H∗, G, super-Pareto, super-Fre ́chet and super-Cauchy. The formal definitions of H, V, H∗ and G are given
in Section 2, and the definitions of super-Pareto, super-Fr ́echet and super-Cauchy distributions are given in
Remark 3.15. It is known that (SD∗) cannot be expected if X1, . . . , Xn have a finite mean (see Chen et al.,
2025a, Proposition 2). This means all distribution in the above classes have infinite means. We list three
important results on this direction from the aforementioned papers. The definition of the majorization order
⪯m is given in Section 2.
Theorem 1.1. (Chen et al., 2025b) Let X = (X1, . . . , Xn) be a vector of iid random variables with a
common distribution function F . If F ∈ H, then
n
X
i=1
ηiXi ≤st
n
X
i=1
θiXi (SD)
for θ, η ∈ [0, ∞)n such that θ ⪯m η. If F ∈ H∗, then (SD∗) holds for all θ ∈ [0, ∞)n.
Theorem 1.2. (Chen and Shneer, 2025) Let X = (X1, . . . , Xn) be a vector of iid random variables with a
common distribution function F ∈ G. Then (SD∗) holds for all θ ∈ [0, ∞)n.
Theorem 1.3. (Vincent, 2025) Let X = (X1, . . . , Xn) be a vector of independent random variables with
Xi ∼ Fi ∈ V for each i, and let (I1, . . . , In) be a multivariate Bernoulli random vector, independent of X,
satisfying Pn
i=1 Ii = 1 and P(Ii = 1) = θi for each i, where Pn
i=1 θi = 1. Then
n
X
i=1
IiXi ≤st
n
X
i=1
θiXi. (SDcp)
In Theorem 1.3, the vector I has exactly one component equal to 1 and the others equal to 0. The sum
Pn
i=1 IiXi is termed as concentrated portfolio by Vincent (2025), which concentrates all exposure on a single
risk (i.e., selects exactly one of the Xi at random according to the random weights). Thus, the stochastic
2

dominance between the diversified portfolio Pn
i=1 θiXi and the concentrated portfolio Pn
i=1 IiXi is referred
to property (SDcp). If X1, . . . , Xn are iid, then (SDcp) reduces to (SD∗). It is known from Examples 3.16
and 3.17 that F belonging to H [resp. H∗ or V] is a sufficient, but not necessary, condition for (SD) [resp.
(SD∗)].
The main contributions of this paper are as follows:
1. We systematically investigate the inclusion relationships and fundamental properties among four dis
tribution classes: H, V, H∗ and G (Propositions 3.1, 3.11 and 3.14). These properties include closure
under power transformations of distribution and survival functions, maximum transformations of ran
dom variables, convex transformations of random variables, and others. Some of these properties are
already known, while others are newly established.
2. We extend Theorem 1.1 to several other practical scenarios. In Theorems 4.1 and 4.2, we consider the
case where the loss variables are iid with a common distribution belonging to the classes H and H∗,
respectively, but each loss variable is triggered by an external rare event. Proposition 4.4 considers
truncated H-distributed loss variables with an upper bound. Two loss variables with H-type and
H∗-type tails (that is, losses whose tails follow distributions from H or H∗) are also considered in
Proposition 4.3.
3. A counterexample is presented to show that H in Theorem 1.1 cannot be replaced by a larger class V.
Also, a simple proof of Theorem 1.3 is presented.
4. A necessary and sufficient condition for a compound binomial distribution satisfying (SD) [resp. (SD∗)]
is given (Theorem 5.1).
The rest of the paper is organized as follows. In Section 2, we collect necessary definitions of four
distribution classes and of the majorization order. Properties of these distribution classes are investigated in
Section 3. Section 4 contains our main results concerning stochastic dominance between diversified portfolios.
In Section 5, we consider the case where each random variable follows a compound binomial distribution,
and investigate respective conditions for the preservation of the (SD) and (SD∗) relations. Section 6 contains
some concluding remarks, raising some open problems. Some detailed proofs of propositions and examples
in Section 3 are relegated to Appendix A. An alternative proof of Theorem 1.1 is offered in Appendix B
when the underlying distribution F has a density.
Throughout, random variables are defined on an atomless probability space (Ω, F , P). We write X =d Y
if X and Y have the same distribution, and write f (x) sg=n g(x) if two functions f (x) and g(x) have the same
sign. For a distribution function F , its left-continuous inverse is defined by
F −1(α) = inf{x ∈ R : FX (x) ≥ α), α ∈ (0, 1],
with F −1(0) = inf{x ∈ R : F (x) > 0}. Denote by N the set of all positive integers, R+ be the set of all
nonnegative real number, and R++ be the set of all positive real numbers. For n ∈ N, let [n] = {1, . . . , n}.
3

Denote ∆n = {θ ∈ (0, 1)n : Pn
i=1 θi = 1}. Also, “increasing” and “decreasing” mean “nondecreasing” and
“nonincreasing”, respectively. The ratio a/0 is understood to be +∞ whenever a > 0, and the ratio 0/0 is
not well-defined.
2 Definitions
First, we introduce some concepts and terminology to be used in the sequel. A function φ is said to
be subadditive if φ(x + y) ≤ φ(x) + φ(y) for all x, y in the domain of φ. The function φ is said to be
superadditive if the inequality is reversed. A function φ : R+ → R is said to be star-shaped if φ(0) = 0 and
φ(x)/x is increasing in x ∈ R++. If φ(0) = 0 and φ(x)/x is decreasing in x ∈ R++, then φ is said to be
anti-star-shaped.
The notion of majorization defines a partial ordering of the diversity of the components of vectors.
To recall the definition of majorization order (Marshall et al., 2011), let a(1) ≤ a(2) ≤ · · · ≤ a(n) be the
increasing arrangement of components of the vector a = (a1, a2, . . . , an). For vectors a, b ∈ Rn, a is said to
be majorized by b, denoted by a ⪯m b, if Pn
i=1 a(i) = Pn
i=1 b(i) and
j
X
i=1
a(i) ≥
j
X
i=1
b(i) for j ∈ [n − 1]. (2.1)
If the strict inequality (2.1) holds for at least one j ∈ [n − 1], a ⪯m b is denoted by a ≺m b. A real-valued
function φ defined on a set A ⊆ Rn is said to be Schur-concave [Schur-convex] on A if φ(a) ≥ [≤] φ(b)
whenever a ⪯m b and a, b ∈ A.
Throughout this paper, we always assume random variables are nonnegative unless stated otherwise.
Definition 2.1. (Vincent, 2025) Let F be a non-degenerate distribution function with F (0−) = 0. F is
said to be completely subscalable if the inequality
θ F (x) ≤ F x
θ (2.2)
holds for all x ∈ R+ and all θ ∈ (0, 1). Denote by V the class of all completely subscalable distribution
functions.
The property (2.2) is equivalent to the quasi-homogeneous of F (1/x), i.e.,
Fx
t ≤ tF (x) , x ∈ R+, t > 1.
For more details about quasi-homogeneous, we refer to Rosenbaum (1950) and Kuczma (2009). From Remark
4 in Matkowski (1993), it follows that F ∈ V if and only if log F (e−x) is a non-expansive mapping of R,
i.e.,
log F e−x − log F e−y ≤ |x − y|, x, y ∈ R.
4

Definition 2.2. (Chen et al., 2025b) Let F be a non-degenerate distribution function with F (0−) = 0. We
say F ∈ H if the function
φ(x1, x2) = F 1
x1
+F 1
x2
is Schur-concave in (x1, x2) ∈ R2+. In particular, we say F ∈ H∗ if F (1/x) is subadditive in x ∈ R+.
Definition 2.3. (Chen and Shneer, 2025) Let F be a non-degenerate distribution function with F (0−) = 0.
We say F ∈ G if the function
ΛF (x) = − log F 1
x (2.3)
is subadditive in x ∈ R+ with the convention log 0 = −∞.
The distributions in H∗ are called InvSub (inverted subadditive) by Arab et al. (2025) who also showed
that H∗ is more general than the class of super-Pareto distributions. Clearly, H ⊂ H∗. In fact, H is a proper
subset of H∗ (see Example 3.2). Equivalent characterizations of distributions in V and H are as follows:
• (Vincent, 2025) F ∈ V if and only if xF (x) is increasing in x ∈ R+.
• (Chen et al., 2025b, Proposition 2) F ∈ H if and only if F (1/x) is concave in x ∈ R++. In addition,
if F has density f , then F ∈ H if and only if x2f (x) is increasing in x ∈ R+.
• (Arab et al., 2025, Proposition 2.5) Let F have a density function f , and λ(t) = f (t)/F (t) denote the
failure rate of F . If xλ(x) ≤ 1 for all x ∈ R+, then F ∈ H∗.
For α > 0, the Pareto distribution, denoted by Pareto(α), is given by
Fα(x) = 1 − 1
xα , x ≥ 1,
and the Fr ́echet distribution, denoted by Fre ́chet(α), is given by
Fα(x) = exp −x−α , x > 0.
For α ≤ 1, both distributions have infinite means, and belong to any one of H and G. Many other examples
of distributions in H and G are listed in Chen et al. (2025b) and Chen and Shneer (2025), respectively.
Remark 2.1. (Continuity of F on R++) From the proof of Theorem 1 in Matkowski and S ́wi ̧atkowski
(1993), it can be shown that if F ∈ G or F ∈ H∗ then F is continuous on R++. In view of this, Example 3
in Chen and Shneer (2025) and Example 2.7 in Arab et al. (2025) are wrong because a discrete distribution
cannot be in G or in H∗ . From the above characterizations, F ∈ V implies F (x) is continuous on R++.
Similarly, if F ∈ H, then F (x) is also continuous on R++ by using the concavity of F (1/x). We can prove
it directly. To see it, assume on the contrary that F (x) is not continuous at 1/y0 ∈ R++. Choose x0 ∈ R++
such that x0 < y0 and F (x) is continuous at 1/x0. Since limy↓y0 F (1/y) = F (1/y0) + δ for some δ > 0, we
have φ(x0, y0) < φ(x0 − ε, y0 + ε) when ε > 0 is small enough. This violates the Schur-concavity of φ since
(x0, y0) ≺m (x0 − ε, y0 + ε) for ε > 0. Thus, F (x) is continuous on R++.
5

Remark 2.2 (Essential infimum). Note that F ∈ G is equivalent to
F xy
x + y ≥ F (x)F (y), (x, y) ∈ R2
++. (2.4)
This implies ess-inf(F ) = 0, that is, F (x) > 0 for any x ∈ R++. Now let X be a truncated Fre ́chet random
variable with density function given by
f (x) =



0, x ∈ [0, 1],
cx−α−1 exp{−x−α}, x > 1,
where c > 0 is a normalized constant. Then F ∈ H since x2f (x) is increasing in x ∈ R+. Thus, in view of
Proposition 3.1 (i), F ∈ H, V or H∗ does not necessarily imply ess-inf(F ) = 0. Example 4.5 also shows that
F ∈ V or F ∈ H∗ does not necessarily imply ess-inf(F ) = 0. In view of these observations, we have H ̸⊂ G.
In the sequel, a random variable X is said to be T -distributed if its distribution function belongs to the
class T , where T can be any one of H, V, H∗ or G. For X ∼ F where F ∈ T , we also write X ∈ T .
3 Properties of distribution classes
If X belongs to any of the classes H, V, H∗ and G, then cX also belongs to the same class for c ∈ R++.
Further properties of these four classes are listed in the following three propositions (Propositions 3.1, 3.11
and 3.14). For two random variables X and Y with respective distribution functions FX and FY , X is said
to be smaller than Y in the hazard rate order, denoted by X ≤hr Y or FX ≤hr FY , if F Y (x)/F X (x) is
increasing in x for which the ratio is well-defined. X is said to be smaller than Y in the likelihood ratio
order, denoted by X ≤lr Y or FX ≤lr FY , if FX and FY have the density functions fX and fY , respectively,
satisfying that fY (x)/fX (x) is increasing in x for which the ratio is well-defined. For more on stochastic
orders, see Shaked and Shanthikumar (2007).
Proposition 3.1.
(i) G ⊊ H∗ (Arab et al., 2025, Theorem 4.13).
H ⊊ V ⊊ H∗.
(ii) If F ∈ H, then F β ∈ H for β ≥ 1 (Chen et al., 2025b, Proposition 3 (i)).
If F ∈ G, then F β ∈ G for all β > 0 (Chen and Shneer, 2025, Proposition 2(ii)).
If F ∈ V [resp. H∗], then F β ∈ V [resp. H∗] for all β ≥ 1.
(iii) If F ∈ V [resp. H, H∗, G], then 1 − F β ∈ V [resp. H, H∗, G] for all β ∈ (0, 1).
(iv) If F ∈ H and F ≤lr G, then G ∈ H (Chen et al., 2025b, Proposition 3(iv)).
If F ∈ V [resp. H∗] and F ≤hr G, then G ∈ V [resp. H∗].
(v) For w1, . . . , wn ∈ R+ such that Pn
i=1 wi = 1,
6

– if F1, . . . , Fn ∈ V, then Pn
i=1 wiFi ∈ V.
– if F1, . . . , Fn ∈ H [resp. H∗], then Pn
i=1 wiFi ∈ H [resp. H∗] (Chen et al., 2025b, Proposition 4).
– If F1, . . . , Fn ∈ G and F1 ≤st · · · ≤st Fn, then Pn
i=1 wiFi ∈ G (Chen and Shneer, 2025, Proposition
3).
Example 3.2. (H ⊊ V and V ̸⊂ G). Let F1 be a distribution function with F1(0−) = 0, and η1(x) = F 1(1/x)
be defined as follows (see Figure 1)
η1(x) =

     
     
x/2, x ∈ [0, 1],
1/2, x ∈ (1, 2],
x/4, x ∈ (2, 4),
1, x ∈ [4, ∞).
It is easy to see that η1(x) is not concave, and η1(x)/x = (1/x)F 1(1/x) is decreasing in x ∈ R+. Thus,
F1 ̸∈ H, but F1 ∈ V, implying H ⊊ V. On the other hand, F1 ̸∈ G since ess-inf(F1) = 1/4.
x
η1(x)
012 4
1/2
1
Figure 1: The function η1(x)
Example 3.3. (H ⊊ V). Consider a distribution function F such that F (x) = 0 for x < 1, and
F (x) = 1 − 3(1/x − 1)2 + 1
x , x ≥ 1.
Denote g(x) = xF (x). Then g(x) = x for x ∈ [0, 1], and g(x) = 3(1/x − 1)2 + 1 for x > 1. It is easy to see
that
g′(x) = 6
x2 1 − 1
x ≥ 0, x ≥ 1,
implying g(x) is increasing in x ∈ (1, ∞). Thus, F ∈ V. Denote η(x) = F (1/x). Then η(x) = 3x3 − 6x2 + 4x
for x ∈ (0, 1], and η(x) = 1 for x > 1. Since η′′(x) = 6(3x − 2) > 0 for x ∈ (2/3, 1), η(x) is not concave on
R+, implying F ̸∈ H. Therefore, H ⊊ V.
7

Example 3.4. (V ⊊ H∗). Let F2 be a distribution function with F2(0−) = 0, and η2(x) = F 2(1/x) be
defined as follows (see Figure 2)
η2(x) =

     
     
x/2, x ∈ [0, 1],
1/2, x ∈ (1, 3],
x/2 − 1, x ∈ (3, 4),
1, x ∈ [4, ∞).
It is easy to see that η2(x)/x = (1/x)F 2(1/x) is not decreasing in x ∈ R++, which implies F2 ̸∈ V. Now, we
prove that η2 is subadditive on R+, that is,
η2(x + y) ≤ η2(x) + η2(y), x, y ∈ R++. (3.1)
Notice that
• Since η2(z)/z is decreasing in z ∈ (0, 3], (3.1) holds true when x + y ≤ 3.
• When x + y ∈ (3, ∞)] with x ≥ 1 and y ≥ 1, we have η2(x) + η2(y) ≥ 1/2 + 1/2 ≥ η2(x + y). When
x + y ∈ (3, ∞) with x ∈ (0, 1], we have η2(x + y) − η2(y) ≤ η2(x).
Then (3.1) always holds, implying F2 ∈ H∗. Therefore, V ⊊ H∗.
x
η2(x)
01 34
1/2
1
Figure 2: The function η2(x)
Example 3.5 (G ̸⊂ H). Let F be a Log-Cauchy distribution, that is,
F (x) = arctan(log x)
π +1
2 , x ∈ R++.
Then the density function of F is
f (x) = 1
πx[1 + (log x)2] , x ∈ R++.
According to Table 1 of Chen et al. (2025b), we have F ∈ H. In Appendix A, it is shown that F β ∈/ H for
β = 0.5.
8

Next, we prove F ∈ G, i.e., ΛF (x) = − log F (1/x) is subadditive on R++. If so, by Proposition 3.2 (ii), we
have F β ∈ G for all β ∈ (0, 1). To establish the subadditivity of ΛF , it suffices to show that L(x) = ΛF (x)/x
is decreasing on R++. In view of F (1/x) = F (x) and (1/x)f (1/x) = xf (x), we have
L′(x) = 1
x2 log F (x)) + xf (x)
F (x)
sg=n log F (x)) + xf (x)
F (x) ,
which is non-positive for all x ∈ R++ (For its proof, see Appendix A). Therefore, F ∈ G.
Example 3.6 (G ̸⊂ V). Let F be a distribution function such that F (0−) = 0 and
ΛF (x) = − log F 1
x=



x1/2, x ∈ [0, 1],
(x − 0.99)1/2 + 0.9, x ≥ 1.
We first show the subadditivity of ΛF , i.e., F ∈ G. Choose x ≥ 0 and y ≥ 0. If x + y ≤ 1, then
ΛF (x + y) = (x + y)1/2 ≤ x1/2 + y1/2 = ΛF (x) + ΛF (y). If x + y > 1, we need to consider the following three
cases.
• Case 1. If x ≥ 1 and y ≥ 1, then ΛF (x+y) = (x+y −0.99)1/2 +0.9 ≤ (x−0.99)1/2 +(y −0.99)1/2 +1.8 =
ΛF (x) + ΛF (y).
• Case 2. If x ≥ 1 and 0 ≤ y < 1, then ΛF (x + y) = (x + y − 0.99)1/2 + 0.9 ≤ (x − 0.99)1/2 + y1/2 + 0.9 =
ΛF (x) + ΛF (y). The proof for the case 0 ≤ x < 1 and y ≥ 1 is similar.
• Case 3. If 0 ≤ x < 1 and 0 ≤ y < 1, we have x + y ∈ [1, 2) and
ΛF (x + y) = (x + y − 0.99)1/2 + 0.9 ≤ (x + y − 1)1/2 + 1 ≤ x1/2 + y1/2 = ΛF (x) + ΛF (y).
Define g(x) = (1/x)F (1/x) = [1−exp{−ΛF (x)}]/x. It can be checked that g(1) ≈ 0.6321 < g(1.01) ≈ 0.6406.
This means g(x) is not decreasing. Thus, F ∈/ V.
The above discussion thus allows us to depict the relationships in Figure 3 among the classes H, G, V
and H∗ in a Venn diagram.
Proposition 3.1(ii) shows that F β ∈ H [resp. V, H∗] when F ∈ H [resp. V, H∗] and β ≥ 1. Below, we
demonstrate that this result cannot be extended to β ∈ (0, 1).
Example 3.7. Let F be a distribution function with F (0−) = 0, and η(x) = F (1/x) be defined as follows
η(x) =

    
    
x
2 , x ∈ [0, 1],
1
2 + x−1
4 , x ∈ (1, 3],
1, x ≥ 3.
Then η(x) is a concave function on R++, i.e., F ∈ H. Hence, F ∈ V and F ∈ H∗. Now, define G = F β for
β ∈ (0, 1), so that ηβ(x) := G(1/x) = 1 − (1 − η(x))β . For β ∈ (0, 0.69), we have ηβ(3) > ηβ(2) + ηβ(1),
which implies that F ∈/ H∗.
9

H∗
VH G
Figure 3: Venn diagram illustrating the relationships among the classes H, G, V, and H∗. The largest class
H∗ is indicated by the dashed boundary, while H is a subset of V, and G has non-empty intersections with
both H and V.
Many commonly encountered examples, such as those listed in Table 1 of Chen and Shneer (2025), satisfy
the condition that ΛF (x) is a concave function on R++.
Proposition 3.8. If ΛF (x) is a concave function on R++, then F β ∈ H [resp. V and H∗] for all β ∈ (0, 1).
Proof. Define η(x) = F (1/x). It suffices to show that ηβ(x) = 1 − [1 − η(x)]β is concave. Observing
that ΛF (x) = − log F (1/x) = − log (1 − η(x)), we have ηβ(x) = 1 − exp{−βΛF (x)}. Since the function
t 7→ 1 − exp(−βt) is increasing and concave, and ΛF is concave by assumption, it follows that ηβ(x) is
concave as a composition of a concave and increasing function with a concave function.
A counterexample is given in Example 3.9 to show that the likelihood ratio order ≤lr in Proposition 3.1
(iv) for H cannot be replaced by the hazard rate order ≤hr. Specifically, there exist distributions F and G
such that F ∈ H and F ≤hr G, yet G ∈/ H.
Example 3.9. Consider two distribution functions F and G, having a common support (6/5, ∞), with
survival functions given by
F (x) = c1
x + 1 and G(x) = c2
3(1/x − 1)2 + 1
x for x ≥ 6
5,
where the positive constants c1 and c2 are determined such that F (6/5) = G(6/5) = 1. To verify that G is
a distribution, it suffices to prove that h(y) := G(1/y) = c2[3(y − 1)2 + 1]y is increasing in y ∈ (0, 5/6). This
is trivial since h′(y) = c2(3y − 2)2 ≥ 0.
It is easy to show that F (1/x) = c1x/(1 + x) is concave in x ∈ R+, and hence F ∈ H. Note that
g(x) := G(1/x)
F (1/x) = c2
c1
[3(x − 1)2 + 1](1 + x), x ≤ 5
6.
Since g′(x) = 9x2 − 6x − 2 = 9(x − 1/3)2 − 3 < 0 for x ∈ (0, 5/6), we have F ≤hr G. However, G(1/x) is
convex over [2/3, 5/6]. This means G ∈/ H.
10

In Proposition 3.1 (iv), F ∈ G and F ≤hr G does not imply G ∈ G, as shown by the next example.
Example 3.10. Let
F (x) = 1
1 + x and G(x) = min 2
1 + x , 1 for x ∈ R+.
It is known that F ∈ G (see Chen and Shneer, 2025, Example 2). Note that
G(x)
F (x) =



1 + x, 0 ≤ x < 1,
2, x ≥ 1.
Therefore, F ≤hr G. However, the subadditivity of ΛG does not hold in general, which can be checked by
choosing x = y = 0.4. This means G ∈/ G. In fact, it is easy to see G ∈/ G since ess-inf(G) = 1, not zero.
Proposition 3.11.
(vi) Let X and Y be independent.
– If X, Y ∈ G, then max{X, Y } ∈ G (Chen and Shneer, 2025, Proposition 2).
– if X, Y ∈ H, then max{X, Y } ∈ H (Chen et al., 2025b, Proposition 3).
– If X, Y ∈ V [resp. H∗], then max{X, Y } ∈ V [resp. H∗].
(vii) If X ∈ H, then (X − c)+ ∈ H (Chen et al., 2025b, Proposition 5).
If X ∈ V [resp. G, H∗], then (X − c)+ ∈ V [resp. G, H∗] for any c ∈ R++.
(viii) Let X and Y be independent such that X ∈ V [resp. H, G, H∗]. If Y is non-negative, then (X−Y )+ ∈ V
[resp. H, G, H∗].
(ix) If X ∈ V [resp. H, H∗], then [X|X > c] ∈ V [resp. H, H∗] for any c ∈ R++. However, [X|X > c] ∈/ G
for any c ∈ R++.
The next examples demonstrate that H, V, H∗ and G are not closed under convolution.
Example 3.12 (Convolution). Let X1 and X2 be iid Pareto(1) distributed random variables. It is easy to
see that X1 ∈ H and hence X1 ∈ V and X1 ∈ H∗ by Proposition 3.1(i). We claim that X1 + X2 ∈/ H∗ and
hence X1 + X2 ̸∈ H and X1 + X2 ̸∈ V. To see it, the distribution function of X1 + X2 is given by
G(x) =



0, x ≤ 2,
1 − 2x−1 − 2x−2 log(x − 1), x ≥ 2.
However, the inequality G(1/(x + y)) ≤ G(1/x) + G(1/y) does not hold in general for any (x, y) ∈ R++. A
counterexample is given by x = y = 0.1. This means X1 + X2 ∈/ H∗. Therefore, H, V and H∗ are not closed
under convolution.
Example 3.13 (Convolution). Let X, X1, X2 be iid with distribution function
F (x) = x
1 + x , x ∈ R+.
11

It is known F ∈ G. However, X1 + X2 ∈/ G. To prove it, denote Z = X1 + X2 ∼ G. Then
G(z) = P (X1 + X2 ≤ z) =
Zz
0
Z z−x
0
1
(1 + x)2(1 + y)2 dy dx
=z
z + 2 − 2 log(1 + z)
(z + 2)2 ,
and
ΛG(x) = − log G 1
x = 2 log(1 + 2x) − log 1 + 2x − 2x2 log 1 + 1
x.
Choosing x = 0.02 and y = 0.18, we have ΛG(x + y) = ΛG(0.2) ≈ 0.444488 > ΛG(x) + ΛG(y) ≈ 0.443596.
Thus, G ∈/ G.
It is a common consensus that applying an increasing, convex and nonconstant transformation to a
random variable X results in a new random variable Y with a heavier right tail than X. The following result
demonstrates that the distribution properties of H, V, H∗ and G are closed under an increasing, convex and
nonconstant transform anchoring at zero.
Proposition 3.14.
(x) (Vincent, 2025, Lemma 5.5). Let ψ be an increasing, convex and nonconstant function with ψ(0) = 0.
If X ∈ V, then ψ(X) ∈ V.
(xi) (Chen et al., 2025b, Proposition 3). Let ψ be a strictly increasing and convex function with ψ(0) = 0
and 1/ψ−1(1/x) being concave in x ∈ R++. If X ∈ H, then ψ(X) ∈ H.
(xii) (Arab et al., 2025, Theorem 2.9). Let ψ be a continuous, and nonconstant star-shaped function with
ψ(0) = 0. If X ∈ H∗, then ψ(X) ∈ H∗.
(xiii) (Chen and Shneer, 2025, Proposition 2(iv)). Let ψ be an increasing, convex and nonconstant function
with ψ(0) = 0. If X ∈ G, then ψ(X) ∈ G.
Remark 3.15. Let ψ be an increasing, convex and nonconstant function, and denote Y = ψ(X). If ψ(0) = 0
and X has Pareto(1) distribution, then we say Y or its distribution is super-Pareto (Chen et al., 2025a). If
ψ(0) = 0 and X has Fr ́echet(1) distribution, we say Y or its distribution is super-Fr ́echet (Chen and Shneer,
2025). If ψ(−∞) = 0 and X has Cauchy(0, 1) distribution given by FC(x) = π−1 arctan(x) + 1/2 for x ∈ R,
we say Y or its distribution is super-Cauchy (M ̈uller, 2025). Denote by SP, SF and SC the classes of all
super-Pareto, super-Fr ́echet and super-Cauchy distributions, respectively.
For two distribution functions F and G, we say F is smaller than G in the convex transform order,
denoted by F ≤c G, if G−1 ◦ F is convex on R+ (Shaked and Shanthikumar, 2007, Section 4.B). The order
F ≤c G gives us an intuition that F is less skewed to the right than G. This concept is discussed in detail
in Zwet (1964) and Barlow and Proschan (1981). Denote by F+ the class of all distributions of non-negative
random variables. Then
SP = {G ∈ F+ : FP ≤c G},
12

SF = {G ∈ F+ : FF ≤c G},
SC = {G ∈ F+ : FC ≤c G}.
Since FF ≤c FP, FP ̸≤c FF (Chen and Shneer, 2025, Example 4) and FC ≤c FF, FF ̸≤c FC (Mu ̈ller, 2025,
Theorem 2.10), we have
SP ⊊ SF ⊊ SC.
Mu ̈ller (2025) gave counterexamples to show G ̸⊂ SC and SC ̸⊂ H∗. It is easy to check that, for α ∈ (0, 1],
Pareto(1) ≤c Pareto(α), Fr ́echet(1) ≤c Fr ́echet(α).
Thus, Pareto(α) ∈ SP and Fee ́chet(α) ∈ SF for α ∈ (0, 1]. By Proposition 3.14 (iii) and Fr ́echet(1) ∈ H∗, we
have SF ⊂ H∗. The relationships among four classes SP, SF, SC and H∗ are depicted in Figure 4.
H∗
SC SF
SP
Figure 4: Venn diagram illustrating the relationships among four classes SP, SF, SC and H∗.
Examples 3.16 and 3.17 below show that H, V and H∗ are not closed under a simple convex transform
ψ(x) = x + c with c > 0. It is also shown that the assumption ψ(0) = 0 cannot be removed from Proposition
3.14.
Example 3.16. Let X ∼ F , where F is the Fr ́echet(1) distribution. Denote Y = X + 1 = ψ(X) ∼ G, where
ψ(x) = x + 1. Let f and g denote the respective density functions of X and Y . It is easy to see that x2f (x)
is increasing on R+, while x2g(x) is increasing on [0, 2] and decreasing on (2, ∞). Therefore, X ∈ H while
Y ∈/ H.
Example 3.17. Let X ∼ F2 with F2 given by Example 3.4. Denote Y = X + 1 = ψ(X) ∼ G, where
ψ(x) = x + 1. It is easy to see that
η
Y (x) := G 1
x=

           
           
x
2(1 − x) , x ∈ 0, 1
2,
1
2, x ∈ 1
2, 2
3,
x
2(1 − x) − 1, x ∈ 2
3, 4
5,
1, x ∈ 4
5,∞ .
13

Choosing x0 = y0 = 2/5, we have ηY (x0) + ηY (y0) = 2ηY (x0) = 2/3 < 1 = ηY (x0 + y0), violating the
subadditivity of ηY (x). Thus, Y ∈/ H∗ and hence Y ∈/ V. However, X ∈ V and hence X ∈ H∗, as shown in
Example 3.2.
The next example demonstrates that the class H [resp. G, V and H∗] is not closed under weak convergence.
Example 3.18. Consider the distribution functions
Fn(x) = 1 − 1
nx + 1 , x ∈ R+.
Note that F n(1/x) = x/(n + x) is concave on R+, so Fn ∈ H for all n. Hence, Fn ∈ V and Fn ∈ H∗. Also,
ΛF (x) = − log F (1/x) is subadditive on R+, i.e., F ∈ G. However, as n → ∞, Fn converges weakly to the
degenerate distribution at zero, which does not belong to H∗.
4 Stochastic dominance between diversified portfolios
4.1 H and H∗-distributed losses triggered by events
In actuarial science, extremely heavy-tailed losses are often triggered by events with small probabilities
of occurrence (Bowers et al., 1997). In this context, the outcome (loss) of a rare event can be modeled
as X1A, where X is a heavy-tailed random variable and A is the triggering event independent of X. Let
X = (X1, . . . , Xn) be a vector of n iid random variables with a common distribution F ∈ H, and A1, . . . , An
be the respective triggering events of X1, . . . , Xn such that A1, . . . , An are independent of X.
If A1 = · · · = An, then 1A1 , . . . , 1An shares a comonotonicity structure, a notion of the strongest positive
dependence. In this special dependence structure, by Theorem 1.1, we have
n
X
i=1
ηi1Ai Xi ≤st
n
X
i=1
θi1Ai Xi (4.1)
for all θ, η ∈ Rn+ such that θ ⪯m η. Theorem 4.1 below shows that inequality (4.1) also holds for any
events A1, . . . , An with an arbitrary dependence structure and an equal probability of occurrence. Chen et
al. (2025c) in their Theorem 2 established Theorem 4.1 for the case F being a Pareto(α), where α ∈ (0, 1] is
the tail parameter.
Theorem 4.1. Let X = (X1, . . . , Xn) be a vector of n iid random variables with a common distribution
F ∈ H, and A1, . . . , An be events with equal probability, which are independent of X. Then (4.1) holds for
all θ, η ∈ Rn+ such that θ ⪯m η.
Proof. Assume that θ, η ∈ ∆n and P(Ai) = p ∈ (0, 1) for each i. Below, we first show (4.1) for the case
n = 2. For λ ∈ (0, 1/2], define S(λ) = P (λ1A1 X1 + (1 − λ)1A2 X2 > x) for x ∈ R+. It suffices to show that
S(λ) is increasing in λ ∈ (0, 1/2]. Note that
S(λ) = P(A1A2) P λX1 + (1 − λ)X2 > x + P(A1Ac
2)F x
λ + P(Ac
1A2)F x
1−λ
14

= P(A1A2) P λX1 + (1 − λ)X2 > x + (p − P(A1A2)) F x
λ +F x
1−λ .
Since F ∈ H, we have F (x/λ) + F (x/(1 − λ)) is increasing in λ ∈ (0, 1/2] for x ∈ R+. On the other hand, by
Theorem 1.1, P λX1 + (1 − λ)X2 > x is also increasing in λ ∈ (0, 1/2] for x ∈ R+. Thus, S(λ) is increasing
in λ ∈ (0, 1/2] for x ∈ R+. This proves (4.1) for n = 2.
Next, we consider the case n ≥ 3 and θ ≺m η by using the same argument as that in the proof of
Theorem 2 in Chen et al. (2025c) with a minor modification. By the nature of majorization (see Marshall
et al., 2011, Section 1.A.3), there exist a finite number of vectors θ(0), θ(1), . . . , θ(m) in Rn+ such that θ =
θ(0) ≺m θ(1) ≺m · · · ≺m θ(m) = η, and for each k ∈ [m], θ(k−1) and θ(k) differ only in two coordinates.
Without loss of generality, assume that θ and η differ only in coordinates k and l with k < l. For S ⊆ [n],
let BS = T
i∈S Ai ∩ T
i∈Sc Ac
i . For θ ∈ Rn+, we write
n
X
i=1
θi1Ai Xi =
X
S⊆[n]\{k,l}
1BS
X
i∈S
θiXi +
X
{k,l}⊆S⊆[n]
1BS
X
i∈S
θiXi
+
X
{k}⊆S⊆[n]\{l}
1BS
X
i∈S
θiXi +
X
{l}⊆S⊆[n]\{k}
1BS
X
i∈S
θiXi. (4.2)
It is clear that
X
S⊆[n]\{k,l}
1BS
X
i∈S
θiXi =
X
S⊆[n]\{k,l}
1BS
X
i∈S
ηiXi. (4.3)
By Theorem 1.1, we have
X
{k,l}⊆S⊆[n]
1BS
X
i∈S
θiXi ≥st
X
{k,l}⊆S⊆[n]
1BS
X
i∈S
ηiXi. (4.4)
Note that
X
{k}⊆S⊆[n]\{l}
1BS
X
i∈S
θiXi =
X
D⊆[n]\{k,l}
1Ak 1Ac
l
Y
s∈D
1As
Y
t∈([n]\{k,l})\D
1Ac
t θkXk +
X
i∈D
θiXi
!
.
Then
X
{k}⊆S⊆[n]\{l}
1BS
X
i∈S
θiXi +
X
{l}⊆S⊆[n]\{k}
1BS
X
i∈S
θiXi
=
X
D⊆[n]\{k,l}
Y
s∈D
1As
Y
t∈([n]\{k,l})\D
1Ac
t
× 1Ak 1Ac
l θkXk +
X
i∈D
θiXi + 1Ac
k 1Al θlXl +
X
i∈D
θiXi
!
. (4.5)
For D ⊆ [n]\{k, l}, let G denote the distribution function of P
i∈D θiXi. For s ∈ R+, we have
P 1Ak 1Ac
l θkXk +
X
i∈D
θiXi + 1Ac
k 1Al θlXl +
X
i∈D
θiXi > s
!
= P(Ak ∩ Ac
l) P θkXk +
X
i∈D
θiXi > s + P θlXl +
X
i∈D
θiXi > s
!
15

= P(Ak ∩ Ac
l)
Z∞
−∞
P(θkXk > s − t) dG(t) +
Z∞
−∞
P(θlXl > s − t) dG(t)
= P(Ak ∩ Ac
l)
Z∞
−∞
F s−t
θk
+F t−s
θl
dG(t)
≥ P(Ak ∩ Ac
l)
Z∞
−∞
F s−t
ηk
+F t−s
ηl
dG(t)
= P 1Ak 1Ac
l ηkXk +
X
i∈D
ηiXi + 1Ac
k 1Al ηlXl +
X
i∈D
ηiXi > s
!
,
where the inequality follows since F ∈ H and (θk, θl) ≺m (ηk, ηl). From (4.5), it follows that
X
{k}⊆S⊆[n]\{l}
1BS
X
i∈S
θiXi +
X
{l}⊆S⊆[n]\{k}
1BS
X
i∈S
θiXi
≥st
X
{k}⊆S⊆[n]\{l}
1BS
X
i∈S
ηiXi +
X
{l}⊆S⊆[n]\{k}
1BS
X
i∈S
ηiXi. (4.6)
Combining (4.2)-(4.4) and (4.6), we conclude (4.1) for n ≥ 3. This completes the proof of the theorem.
Similarly, we can establish the next result.
Theorem 4.2. Let X = (X1, . . . , Xn) be a vector of n iid random variables with a common distribution
F , and A1, . . . , An be events with equal probability, which are independent of X. If F ∈ H∗, then, for all
θ ∈ ∆n,
1A1 X1 ≤st
n
X
i=1
θi1Ai Xi.
4.2 Losses with H-type and H∗-type tails
In practice, random variables may not follow distributions from H or H∗ in their entire support, whereas
they have H or H∗-type distributions beyond some thresholds. Let Y be a random variable with distribution
function G and G(0−) = 0. We say that Y has a H-type distribution in tail beyond a point c ∈ R++ if
there exists F ∈ H such that G(y) = F (y) for y ≥ c. Similarly, we can define a H∗-type distribution in tail
beyond a point c.
Proposition 4.3. Let Y1, Y2 be iid random variables with distribution function G.
(i) If G is a H-type distribution in tail beyond a point c ∈ R++, then
P (θ1Y1 + θ2Y2 > x) ≥ P (η1Y1 + η2Y2 > x) , x ≥ c,
for θ, η ∈ ∆2 such that θ ≺m η.
(ii) If G is a H∗-type distribution in tail beyond a point c ∈ R++, then for θ ∈ ∆2,
P (θ1Y1 + θ2Y2 > x) ≥ P (Y1 > x) , x ≥ c.
16

Proof. We give the proof of part (i); the proof of part (ii) is similar. Assume that there exists F ∈ H such
that G(y) = F (y) for y ≥ c, and let X1, X2 be iid with distribution function F . For λ ∈ (0, 1/2], define
S(λ) = P(λY1 + (1 − λ)Y2 > x), where x ≥ c. It suffices to show that S(λ) is increasing in λ ∈ (0, 1/2]. Note
that
S(λ) = P(λY1 + (1 − λ)Y2 > x, Y1 ≤ c) + P(λY1 + (1 − λ)Y2 > x, Y2 ≤ c)
+ P(λY1 + (1 − λ)Y2 > x, Y1 > c, Y2 > c)
=
Zc
0
G x−y
λ + y dG(y) +
Zc
0
G x−y
1 − λ + y dG(y)
+ P(λY1 + (1 − λ)Y2 > x, Y1 > c, Y2 > c)
d=ef S1(λ) + S2(λ),
where
S1(λ) =
Zc
0
G x−y
λ +y +G x−y
1 − λ + y dG(y),
S2(λ) = P(λY1 + (1 − λ)Y2 > x, Y1 > c, Y2 > c).
Since (x − y)/λ + y ≥ c and (x − y)/(1 − λ) + y ≥ c for y ∈ [0, c], we have
S1(λ) =
Zc
0
F x−y
λ +y +F x−y
1 − λ + y dG(y).
It is shown in the proof of Theorem 1 in Chen et al. (2025b) that
F x−y
λ2
+y +F x−y
1 − λ2
+y ≥F x−y
λ1
+y +F x−y
1 − λ1
+y
for 0 < λ1 < λ2 ≤ 1/2. Hence, S1(λ) is increasing in λ ∈ (0, 1/2].
Let X1∗, X2∗ be iid random variables with X1∗
=d [X1|X1 > c]. By Proposition 3.11(ix), X1 ∈ H implies
X1∗ ∈ H. Then, by Theorem 1.1,
S2(λ) = P(λY1 + (1 − λ)Y2 > x|Y1 > c, Y2 > c) F (c) 2
= P(λX∗
1 + (1 − λ)X∗
2 > x) F (c) 2 ,
which is increasing in λ ∈ (0, 1/2]. Therefore, S(λ) = S1(λ) + S2(λ) is increasing in λ ∈ (0, 1/2]. This
completes the proof of the proposition.
Proposition 4.3 may not hold for comparing the survival functions of Pn
i=1 θiYi and Pn
i=1 ηiYi for n > 2.
There is one gap in the proof of Proposition 3 in Chen et al. (2025c) for n > 2, in which they considered
Pareto-type distribution in tail beyond a point c.
4.3 Truncated H-distributed random variables
Heavy-tailed distributions are widely used in finance and insurance due to their ability to capture extreme
events. However, the infinite upper bound may raise concerns about theoretical practicality, as real word risks
17

often have natural limits. Truncated heavy-tailed distributions offer a more realistic approach by imposing
an upper bound while retaining tail risk characteristics. For a threshold c ∈ R++, let Y = (X1 ∧c, . . . , Xn ∧c)
be a vector of the truncated random variables of X1, . . . , Xn at c, where X1, . . . , Xn are iid with a common
distribution in H. As the Yi have finite mean, one cannot expect to establish the usual stochastic ordering
between Pn
i=1 θiYi and Pn
i=1 ηiYi for any θ, η ∈ ∆n such that θ ≺m η. However, a more diversified portfolio
Pn
i=1 θiYi can dominate a less diversified one Pn
i=1 ηiYi in the sense of tail probability in a large region if
the upper bound c is large enough.
Proposition 4.4. Let θ, η ∈ ∆n such that θ ≺ η, and denote b = 1/η(1), where η(1) = min{η1, . . . , ηn} > 0.
Let X1, . . . , Xn be iid with a common distribution function F ∈ H, and define Y = (X1 ∧ c, . . . , Xn ∧ c) with
c ∈ (b, ∞). Then
P
n
X
i=1
ηiYi > x
!
≤P
n
X
i=1
θiYi > x
!
, x∈
h
0, c
b.
Proof. The proof is similar to that of Proposition 6 in Chen et al. (2025c). First, note that if there exists at
least one Xj > c with j ∈ [n], then Pn
i=1 ηi(Xi ∧ c) ≥ ηjXj ≥ η(1)c = c/b. Thus, for x ∈ [0, c/b), we have
P
n
X
i=1
ηiYi ≤ x
!
=P
n
X
i=1
ηiYi ≤ x, X1 ≤ c, . . . , Xn ≤ c
!
=P
n
X
i=1
ηiXi ≤ x, X1 ≤ c, . . . , Xn ≤ c
!
=P
n
X
i=1
ηiXi ≤ x
!
.
Since θ ≺m θ, we have cη(1) ≤ cθ(1). Similarly, for x ∈ [0, c/b), we have
P
n
X
i=1
θiYi ≤ x
!
=P
n
X
i=1
θiXi ≤ x
!
.
Hence, the desired result follows from Theorem 1.1.
4.4 V-distributed losses
In Theorem 1.1, (SD) is established under the assumption F ∈ H. Since H ⊂ V, it is natural to wonder
whether (SD) is also true if F ∈ V. However, this assertion is negative, as shown by the following example.
Example 4.5. Consider a random variable X with survival function
F (x) =

     
     
1, for x < 1,
1/x, for 1 ≤ x < 2,
1/2, for 2 ≤ x < 3,
3/(2x), for x ≥ 3.
18

It is easy to see that xF (x) increases in x ∈ R+ and thus F ∈ V. The corresponding density function is
f (x) =

  
  
1/x2, for 1 ≤ x < 2,
3/(2x2), for x ≥ 3,
0, otherwise.
Denote A = [1, 2) and B = [3, ∞), and let X, X1, X2 be iid random variables. Then,
P1
4 X1 + 3
4 X2 > 3
2 = P (X1 + 3X2 > 6)
= P (X1 +3X2 > 6, X1 ∈ A, X2 ∈ A) + P (X1 +3X2 > 6, X1 ∈ A, X2 ∈ B)
+ P (X1 +3X2 > 6, X1 ∈ B, X2 ∈ A) + P (X1 +3X2 > 6, X1 ∈ B, X2 ∈ B)
= P (X1 + 3X2 > 6, X1 ∈ A, X2 ∈ A) + P (X1 ∈ A, X2 ∈ B)
+ P (X1 ∈ B, X2 ∈ A) + P (X1 ∈ B, X2 ∈ B)
= 1 − P (X1 + 3X2 ≤ 6, X1 ∈ A, X2 ∈ A)
=1−
Z2
1
1 x21
Z (6−x1)/3
1
1 x22
dx2
!
dx1
=1− 1
4− 1
12 ln 5
2 =3
4+ 1
12 ln 5
2 ≈ 0.826358.
Similarly,
P2
5 X1 + 3
5 X2 > 3
2 = P 2X1 + 3X2 > 15
2
= 1 − P (2X1 + 3X2 ≤ 7.5, X1 ∈ A, X2 ∈ A)
=1−
Z2
1
1 x21
Z (7.5−2x1)/3
1
1 x22
dx2
!
dx1
=1− 3
10 − 8
75 ln 22
7 =7
10 + 8
75 ln 22
7 ≈ 0.822147.
It is known that (2/5, 3/5) ⪯ (1/4, 3/4). However, we observe that
P1
4 X1 + 3
4 X2 > 3
2 >P 2
5 X1 + 3
5 X2 > 3
2,
which implies
1
4 X1 + 3
4 X2 ̸≤st
2
5 X1 + 3
5 X2.
In Vincent (2025), Theorem 1.3 was proved by applying the law of total probability and exploiting the
special partition structure of the sample space Ω. In the remaining of this subsection, we present a simple
proof by the induction method.
Proof of Theorem 1.3. First, we consider the case n = 2. For (θ1, θ2) ∈ ∆2 and x ∈ R+, we have
P(θ1X1 + θ2X2 > x) ≥ P θ1X1 + θ2X2 > x, X1 > x
θ1
, X2 ≤ x
19

+ P θ1X1 + θ2X2 > x, X2 > x
θ2
, X1 ≤ x
+ P (θ1X1 + θ2X2 > x, X1 > x, X2 > x)
= P X1 > x
θ1
, X2 ≤ x + P X2 > x
θ2
, X1 ≤ x + P (X1 > x, X2 > x)
= F1
x
θ1
F2(x) + F 2
x
θ2
F1(x) + F 1(x)F 2(x)
≥ θ1F 1(x)F2(x) + θ2F 2(x)F1(x) + F 1(x)F 2(x)
= θ1F 1(x) + θ2F 2(x) ≥ 0,
where the last inequality follows from F1, F2 ∈ V. Now, assume (SDcp) holds when n = m ≥ 2. For
(θ1, . . . , θm, θm+1) ∈ ∆m+1 and x ∈ R+, we have
P
m+1
X
i=1
θiXi > x
!
= P Xm+1 > x
θm+1
+P
m+1
X
i=1
θiXi > x, Xm+1 ≤ x
θm+1
!
= F m+1
x
θm+1
+
Z x/θm+1
0
P
m
X
i=1
θiXi > x − θm+1t
!
dFm+1(t)
= F m+1
x
θm+1
+
Z x/θm+1
0
P
m
X
i=1
θi
1 − θm+1
Xi > x − θm+1t
1 − θm+1
!
dFm+1(t)
≥ F m+1
x
θm+1
+
Z x/θm+1
0
m
X
i=1
θi
1 − θm+1
Fi
x − θm+1t
1 − θm+1
dFm+1(t)
=
m
X
i=1
θi
1 − θm+1
"
F m+1
x
θm+1
+
Z x/θm+1
0
Fi
x − θm+1t
1−θm+1
dFm+1(t)
#
=
m
X
i=1
θi
1−θm+1
P Xm+1
θm+1
> x + P (1−θm+1)Xi + θm+1Xm+1 > x, Xm+1
θm+1
≤x
=
m
X
i=1
θi
1 − θm+1
P (1−θm+1)Xi + θm+1Xm+1 > x
≥
m
X
i=1
θi
1 − θm+1
(1 − θm+1)F i(x) + θm+1F m+1(x)
=
m+1
X
i=1
θiF i(x),
where the first inequality follows from the induction assumption since (θ1/(1 − θm+1), . . . , θm/(1 − θm+1)) ∈
∆m, and the last inequality follows from the result for n = 2. This means (SDcp) holds when n = m + 1.
Therefore, the desired result follows by induction.
5 Compound distributions
Let {Z1, Z2, . . .} be a sequence of iid random variables with distribution F , N follow a Poisson distribution
with parameter λ ∈ R++, and N is independent of the Zi. Then we say that Y = PN
i=1 Zi follows a compound
20

Poisson distribution with Poisson parameter λ and distribution F , denoted by CPoi(λ, F ). Similarly, if
N ∼ B(m, p) [resp. NB(α, p)], then the distribution of Y is called compound binomial distribution [resp.
compound negative binomial distribution], denoted by Cb(m, p; F ) [resp. Cnb(α, p; F )], where m ∈ N,
α ∈ R++ and p ∈ (0, 1).
If X1, . . . , Xn be iid ∼ F , satisfying (SD) or (SD∗), we also say F satisfies (SD) or (SD∗). It is known
from Chen et al. (2025b) that
• CPoi(λ, F ) satisfies (SD) for any λ ∈ R++ if and only if F ∈ H;
• CPoi(λ, F ) satisfies (SD∗) for any λ ∈ R++ if and only if F ∈ H∗.
Theorem 5.1. Let m ∈ N be fixed with m ≥ 2.
(i) Cb(m, p; F ) satisfies (SD) for any p ∈ (0, 1) if and only id F ∈ H.
(ii) Cb(n, p; F ) satisfies (SD∗) for any p ∈ (0, 1) if and only if F ∈ H∗.
Proof. We give the proof of part (i) by applying Theorem 4.1; the proof of part (ii) is similar by applying
Theorem 4.2.
Sufficiency Assume F ∈ H. Using the argument similar to the proof of Theorem 4.1, it suffices to
establish (SD) for n = 2. Let Y1, Y2 be iid random variables, each having Cb(m, p; F ) distribution. If F ∈ H,
we need to show
η1Y1 + η2Y2 ≤st θ1Y1 + θ2Y2
for θ, η ∈ ∆2 such that θ ≺m η.
First, we give a stochastic representation of a random variable Y ∼ Cb(m, p; F ). Denote by ψZ(t) and
ψY (t) the characteristic functions of Z ∼ F and Y , respectively. Note that Y = PN
k=1 Zk, where Z1, . . . , Zm
are iid with Z1 ∼ F , and N ∼ B(m, p), which is independent of the Zi. Then the characteristic function of
Y is given by
ψY (t) = E
"
exp
(
it
N
X
k=1
Zk
)#
=
m
X
k=0
[ψZ (t)]k m
k pk(1 − p)m−k = [1 − p + pψZ (t)]m , t ∈ R,
which implies
Y =d
m
X
k=1
IkZk, (5.1)
where I1, . . . , Im are iid B(1, p)-distributed random variables, independent of the Zi
Next, let X(1)
k , X(2)
k , k ∈ [m] be iid random variables with a common distribution F ∈ H, and let
I (1)
k , I(2)
k , k ∈ [m] be iid B(1, p)-distributed random variables, independent of the X(1)
k and X(2)
k . In view
of (5.1), we have
(Y1, Y2) =d
m
X
k=1
I (1)
k X (1)
k,
m
X
k=1
I (2)
k X (2)
k
!
. (5.2)
21

Thus,
η1Y1 + η2Y2
=d
m
X
k=1
η1 I (1)
k X (1)
k + η2I(2)
k X (2)
k
≤st
m
X
k=1
θ1 I (1)
k X (1)
k + θ2I(2)
k X (2)
k
=d θ1Y1 + θ2Y2,
where the inequality follows from Theorem 4.1 and the independence of all random variables. This proves
part (i).
Necessity In view of (5.2) and the independence of all random variables, we have, for any x ∈ R+.
P(η1Y1 + η2Y2 > x) = P
m
X
k=1
η1 I (1)
k X (1)
k + η2I(2)
k X (2)
k >x
!
= m(1 − p)2m−1p F x
η1
+F x
η2
+ ◦(p)
= mp F x
η1
+F x
η2
+ ◦(p), p → 0. (5.3)
Similarly,
P(θ1Y1 + θ2Y2 > x) = mp F x
θ1
+F x
θ2
+ ◦(p), p → 0. (5.4)
For any θ, η ∈ ∆2 satisfying (θ1, θ2) ≺m (η1, η2), inequality (SD) implies P(η1Y1 + η2Y2 > x) ≤ P(θ1Y1 +
θ2Y2 > x) for x ∈ R+. Hence, letting p → 0 in (5.3) and (5.4), we have
Fx
η1
+F x
η2
≤F x
θ1
+F x
θ2
, x ∈ R+.
This means F ∈ H.
It is still unknown whether Theorem 5.1 holds for Cnb(α, p; F ).
Remark 5.2. If Cb(m, p; F ) ∈ V for any p ∈ (0, 1), then F ∈ V. To see it, denote by Gp(x) the distribution
function of Cb(m, p; F ), Then, for any x ∈ R+,
Gp(x) =
m
X
k=1
m
k pk(1 − p)m−kF ∗k(x) = mpF (x) + ◦(p).
Thus,
xGp(x) = mp · xF (x) + ◦(p), p → 0.
So, if xGp(x) is increasing in x ∈ R+, we have xF (x) is also increasing in x ∈ R+, i.e., F ∈ V.
6 Discussions
For a random variable X with distribution FX , the VaR (Value-at-Risk) of X at confidence level α ∈ [0, 1]
is defined to be the left inverse of its distribution function FX , given by VaRα(X) := F −1
X (α). We say that
VaR is subadditive for a random vector X = (X1, . . . , Xn) if
VaRα
n
X
i=1
Xi
!
≤
n
X
i=1
VaRα(Xi), α ∈ (0, 1). (6.1)
22

If the inequality in (6.1) is reversed, we say VaR is superadditive for a random vector X. From Theorem
1.1, we conclude that VaR is superadditive for a vector of iid random variables X1, . . . , Xn with a common
distribution belonging to H∗. Recently, Imamura and Kato (2025) proved that, in an atomless probability
space (Ω, F , P), VaR is subadditive for a random vector X with each component integrable (unnecessarily
identically distributed) if, and only if X is comonotonic. This result also gives a new equivalent character
ization for the comonotonicity of a random vector. For the definition of comonotonicity and its properties,
see Dhaene et al. (2002).
It is interesting to investigate sufficient conditions under which VaR is superadditive for a positive random
vector. It is natural to wonder whether we have
VaRα
n
X
i=1
Xi
!
≥
n
X
i=1
VaRα(Xi), α ∈ (0, 1).
if X1, . . . , Xn are independent random variables with Xi ∈ H∗ or V for each i.
In what follows, define
D+
n = {θ ∈ Rn : θ1 ≥ θ2 ≥ · · · ≥ θn ≥ 0}.
Let X = (X1, . . . , Xn) be a vector of iid random variables with a common distribution F ∈ H. Another
question is whether
ηnXn, ηnXn + ηn−1Xn−1, . . . ,
n
X
i=1
ηiXi
!
≤st θnXn, θnXn + θn−1Xn−1, . . . ,
n
X
i=1
θiXi
!
(6.2)
holds whenever θ, η ∈ Dn+ such θ ≺m η. By Lemma 1 in Ma (1998), there exist a finite number of vectors
θ(0), θ(1), . . . , θ(m) in Dn+ such that θ = θ(0) ≺m θ(1) ≺m · · · ≺m θ(m) = η, and for each k ∈ [m], θ(k−1) and
θ(k) differ only in two coordinates. Thus, to prove (6.2), it suffices to prove that, for 0 < η < θ < 1−θ < 1−η,
η1X1, η1X1 + (1 − η1)X2 ≤st θ1X1, θ1X1 + (1 − θ1)X2 .
These two questions are still under our investigation.
Appendices
A Proofs of the main results in Section 3
Lemma A.1. For any (x, y, β) ∈ (0, 1)3, we have
(1 − xy)β ≤ (1 − x)β + (1 − y)β − (1 − x)β(1 − y)β.
Proof. Define u = 1/(1 − x) > 1 and v = 1/(1 − y) > 1, and consider the function
h(u, v) = (u + v − 1)β − uβ − vβ + 1.
23

We aim to show that h(u, v) ≤ 0 for u > 1 and v > 1. Observe that the partial derivative with respect to u
is
∂h(u, v)
∂u = β (u + v − 1)β−1 − uβ−1 .
Since β − 1 < 0 and u + v − 1 > u, we have (u + v − 1)β−1 < uβ−1, which implies ∂h(u, v)/∂u < 0. Thus,
h(u, v) is strictly decreasing in u ∈ (1, ∞) for fixed v ∈ (1, ∞), and hence h(u, v) ≤ h(1, v) = 0. This
completes the proof of the lemma.
Proof of Proposition 3.1. (i) See Arab et al. (2025) for the proof of G ⊂ H∗. G is a proper subset of H∗
since ess-inf(F ) = 0 for F ∈ G while ess-inf(F ) may be positive from F ∈ H∗.
To prove H ⊂ V, choose F ∈ H. Then η(x) := F (1/x) is concave in x ∈ R++. Denote η(0) =
limx↓0 F (1/x) = 0. Then η(x) is concave on R+, which implies η(y)/y is decreasing on R++, that is, xF (x)
is increasing on R+. So, F ∈ V, implying H ⊂ V. Example 3.2 shows that H is a proper subset of V.
To prove V ⊂ H∗, choose F ∈ V. Denote l(x) = xF (x). Since F ∈ V, we have l(x) is increasing in
x ∈ R+. Thus,
F1
x1
+F 1
x2
= x1l 1
x1
+ x2l 1
x2
≥ x1l 1
x1 + x2
+ x2l 1
x1 + x2
=F 1
x1 + x2
for all (x1, x2) ∈ R2++. This means F ∈ H∗, implying V ⊂ H∗. Example 3.4 shows that V is a proper subset
of H∗.
To prove G ⊂ H∗, see Theorem 4.13 in Arab et al. (2025). For completeness, we give the proof. choose
F ∈ G. Then
F1
x1 + x2
≥F 1
x1
F1
x2
, (x1, x2) ∈ R2
++,
which implies
F1
x1 + x2
=1−F 1
x1 + x2
≤1−F 1
x1
F1
x2
=1− 1−F 1
x1
1−F 1
x2
=F 1
x1
+F 1
x2
−F 1
x1
F1
x2
≤F 1
x1
+F 1
x2
.
This means F ∈ H∗.
(ii) Denote G(x) = 1 − F β(x). For the case of H, see the proof of Proposition 3(i) in Chen et al.
(2025b). The proof of the case H∗ follows similarly. Assume F ∈ H∗. Note that G(1/x) = ψ ◦ F (1/x), where
ψ(x) = 1 − (1 − x)β is concave on [0, 1] and, hence, subadditive. Then G(1/x) is subadditive in x ∈ R++,
i.e., G ∈ H∗.
Next, assume F ∈ V, i.e., xF (x) is increasing in x ∈ R+. Note that
xG(x) = xF (x) · 1 − F β(x)
1 − F (x) = xF (x) · φ(F (x)),
where φ(t) = [1 − tβ]/(1 − t). It is easy to see that
φ′(t) sg=n 1 + (β − 1)tβ − βtβ−1 d=ef ζ(t),
24

and ζ′(t) = β(β − 1)tβ−2(t − 1) ≤ 0 for t ∈ [0, 1]. Since φ′(1) = 0, it follows that φ′(t) ≥ 0 for t ∈ [0, 1], that
is, φ(t) is increasing in t ∈ [0, 1]. Thus, xG(x) is increasing in x ∈ R+, i.e., G ∈ V. The proof of the case G
is trivial.
(iii) We only consider the case for G since the other cases are trivial. Let F ∈ G, i.e.,
F1
x1 + x2
≥F 1
x1
F1
x2
, (x1, x2) ∈ R2
++.
Then, by Lemma A.1,
Fβ 1
x1 + x2
≤ 1−F 1
x1
F1
x2
β
≤F 1
x1
β
+F 1
x2
β
−F 1
x1
β
F1
x2
β
.
Denote G = 1 − F β. We have
G1
x1 + x2
≥1− F 1
x1
β
−F 1
x2
β
+F 1
x1
β
F1
x2
β
=G 1
x1
G1
x2
.
This means G ∈ G.
(iv) The proof for the case of V is trivial. Now, assume F ∈ H∗. Since F ≤hr G, we have
G1
x +G 1
y =F 1
x · G(1/x)
F (1/x) + F 1
y · G(1/y)
F (1/y)
≥F 1
x +F 1
y
G(1/(x + y))
F (1/(x + y))
≥F 1
x+y
G(1/(x + y))
F (1/(x + y)) = G 1
x + y , (x, y) ∈ R++,
implying G ∈ H∗. □
Proof of Example 3.5. First, we prove F β ∈/ H for β = 0.5. Define ηβ(x) = 1 − F β(1/x). Then
η′′
β (x) = βF β−2(1/x)
x4 (1 − β)f 2 1
x − 2xf 1
x − f′ 1
x
sg=n (1 − β)f 2 1
x − 2xf 1
x − f′ 1
x
sg=n (1 − β − 2π log x) f 1
x −x
sg=n 1 − β − 2π log x
π[1 + (log x)2] − 1
sg=n 1 − β − π(1 + log x)2.
For β = 0.5, we find η′′
1/2(e−1) > 0, which implies F 1/2 ∈/ H.
Next, we prove N (x) ≤ 0 for all x ∈ R++, where
N (x) = log F (x)) + xf (x)
F (x) .
25

A straightforward calculation yields
N (x) = log 1
2 − arctan(log x)
π+ 1
π (1 + (log x)2) [1/2 − (1/π) arctan(log x)] .
Let y = 1/2 − (1/π) arctan(log x). Then y ∈ (0, 1), and it remains to prove that
h(y) := log y + sin2(πy)
πy ≤ 0.
We now show that ψ(y) := πyh(y) ≤ 0 for y ∈ (0, 1). Note that limy→0 ψ(y) = ψ(1) = 0 and
ψ′(y) = π [log y + 1 + sin(2πy)] .
Setting ψ′(y) = 0, we find that the equation has three roots: y1 ∈ (0.15, 0.16), y2 ∈ (0.56, 0.58), and
y3 ∈ (0.84, 0.85). Furthermore, ψ′(y) ≤ 0 on (0, y1) ∪ (y2, y3) and ψ′(y) ≥ 0 on (y1, y2) ∪ (y3, 1). Therefore,
ψ(y) is decreasing on (0, y1) ∪ (y2, y3) and increasing on (y1, y2) ∪ (y3, 1). Since ψ(y2) < 0, it follows that
ψ(y) ≤ 0 for all y ∈ (0, 1).
Proof of Proposition 3.11. (vi) Assume X, Y ∈ V, and denote by H the distribution function of max{X, Y }.
Then H(x) = FX (x)FY (x) for all x ∈ R+. Since xF X (x) and xF Y (x) are increasing in x ∈ R+, it follows
that
xH(x) = x 1 − 1 − F X (x) FY (x) = xF Y (x) + xF X (x)FY (x)
is also increasing in x ∈ R+. Thus, H ∈ V. Next, assume X, Y ∈ H∗. Then,
H1
x +H 1
y = FX
1
x +FX
1
y +FY
1
x FX
1
x +FY
1
y FX
1 y
≥ FX
1
x+y +FY
1
x FX
1
x+y +FY
1
y FX
1 x+y
≥ FX
1
x+y +FY
1
x + y FX
1 x+y
=H 1
x + y , (x, y) ∈ R++,
implying H ∈ H∗.
(vii) Note that the distribution function of max{X − c, 0} is give by G(x) = FX (x + c) for x ∈ R+. First,
assume FX ∈ V. Then xG(x) = xF X (x + c) = (x + c)F X (x + c) − cF X (x + c) is increasing in x ∈ R+.
Second, assume FX ∈ H. It suffices to show that F X (c + 1/x) is concave in x ∈ R++. Note that
F X (c + 1/x) = η ◦ τ (x), where η(x) = F X (1/x) and τ (x) = x/(1 + cx). Since both η(x) and τ (x) are
increasing concave, it follows that F X (c + 1/x) is concave in x ∈ R++.
Third, assume FX ∈ H∗. To prove G ∈ H∗, it suffices to show that
FX
1
x +c +FX
1
y +c ≥ FX
1
x + y + c (A.1)
for any (x, y) ∈ R2++. Denote x∗ = x/(1 + cx), y∗ = y/(1 + cy) and a∗ = (x + y)/(1 + (x + y)c). It is easy
to see that x∗ + y∗ ≥ a∗. Since FX ∈ H∗, we have
G1
x +G 1
y = FX
1
x∗ + F X
1
y∗ ≥ F X
1
x∗ + y∗
26

≥ FX
1
a∗ ≥ G 1
x+y ,
implying (A.1). This proves G ∈ H∗.
Fourth, assume FX ∈ G. Since x∗ + y∗ ≥ a∗, we have
G1
xG1
y = FX
1
x∗ FX
1
y∗ ≤ FX
1
x∗ + y∗ ≤ FX
1
a∗ = G 1
x+y ,
which implies G ∈ G.
(viii) Denote by H the distribution function of (X − Y )+. First, assume FX ∈ V, which implies
xF X (x + z) is increasing in x ∈ R+ for each z ∈ R+. Then
xH(x) =
Z∞
0
xF X (x + z) dFY (z)
is increasing in x ∈ R+, implying H ∈ V.
Second, the proofs for FX ∈ H and FX ∈ H∗ directly follow from part (vii).
Third, assume FX ∈ G. To prove H ∈ G, it suffices to show that
H1
xH 1
y ≤H 1
x + y (A.2)
for any (x, y) ∈ R2++. For fixed (x, y) ∈ R2++, FX (z + 1/x) and FX (z + 1/y) are both increasing in z ∈ R+
and, hence, FX (Y + 1/x) and FX (Y + 1/y) are positively associated (Esary et al., 1967). Thus,
E FX
1
x + Y · E FX
1
y + Y ≤ E FX
1
x + Y FX
1
y +Y .
Consequently, we have
H1
xH 1
y=
Z∞
0
xF X
1
x + z dFY (z) ·
Z∞
0
xF X
1
y + z dFY (z)
= E FX
1
x + Y · E FX
1
y +Y
≤ E FX
1
x + Y FX
1
y +Y
≤ E FX
1
x + y + Y (A.3)
=H 1
x+y ,
where (A.3) follows from part (vii) for G. This proves (A.2).
(ix) For any distribution FX from one of V, H and H∗, FX is heavily-tailed and thus F X (c) > 0. Hence,
[X|X > c] ∈/ G follows since its essential infimum is not zero. The remaining proof is trivial by observing
that the P(X > x|X > c) = min{F X (x)/F X (c), 1} for x ∈ R+. □
B H-distributed losses with densities
Chen et al. (2025c) proved Theorem 1.1 under the general assumption F ∈ H. If, additionally, F has a
density function, we offer an alternative proof via direct computation.
27

Proposition B.1. Let X = (X1, . . . , Xn) be a vector of iid random variables with a common distribution
function F ∈ H. If F has a density function f , then
n
X
i=1
ηiXi ≤st
n
X
i=1
λiXi.
whenever λ = (λ1, . . . , λn) ∈ Rn+ and η = (η1, . . . , ηn) ∈ Rn+ such that λ ⪯m η.
Proof. Following the same reasoning as in Theorem 1 of Chen et al. (2025b), it suffices to prove the theorem
for the case n = 2. Without loss of generality, assume λ1 + λ2 = η1 + η2 = 1. We only meed to show that
P(ηX1 + (1 − η)X2 ≤ x) ≥ P(λX1 + (1 − λ)X2 ≤ x) (A.1)
holds for all 0 ≤ η < λ ≤ 1/2 and for all x ∈ R+. Note that
P(ηX1 + (1 − η)X2 ≤ x) =
Z x/η
0
F x − ηt
1 − η f (t) dt, x ∈ R+.
Similarly, we have
P(λX1 + (1 − λ)X2 ≤ x) =
Z x/λ
0
F x − λt
1 − λ f (t) dt, x ∈ R+.
Thus, to prove (A.1), we need to show that
Z x/η
0
F x − ηt
1 − η f (t) dt ≥
Z x/λ
0
F x − λt
1 − λ f (t) dt, x ∈ R+,
or, equivalently, to show that the following function
H(a) =
Z x/a
0
F x − at
1 − a f (t) dt
is decreasing in a ∈ (0, 1/2] for any given x ≥ 0.
The derivative function of H(a) can be expressed as
H′(a) = 1
(1 − a)2
Z x/a
0
(x − t)f x − at
1 − a f (t) dt
=1
a2(1 − a)2
Zx
0
(ax − v)f x − v
1−a f v
a dv
= x2
a2(1 − a)2
Z1
0
(a − y)f x 1 − y
1 − a f xy
a dy.
Below, we turn to prove H′(a) ≤ 0 for a ∈ (0, 1/2], that is, to prove
g(a) =
Z1
0
(a − y)f x 1 − y
1 − a f xy
a dy ≤ 0.
Note that
g(a) =
Za
0
(a − y)f x 1 − y
1 − a f xy
a dy −
Z1
a
(y − a)f x 1 − y
1 − a f xy
a dy
=
Za
0
(a − y)f x 1 − y
1 − a f xy
a dy −
Z 1−a
0
(1− a− y)f x y
1 − a f x1 − y
a dy
28

= a2
Z1
0
(1− z)f x 1− az
1 − a f (xz) dz − (1− a)2
Z1
0
(1− z)f (xz) f x 1−(1−a)z
a dz
=
Z1
0
(1− z)f (xz) a2f x 1 − az
1 − a − (1− a)2f x 1− (1− a)z
a dz.
Next, we only need to show that
h(a) := a2f x 1 − az
1−a
is increasing in a ∈ (0, 1/2] for any given x ∈ R++ and z ∈ [0, 1). Let’s prove it by contradiction. Assume
that there exist 0 < a < b ≤ 1/2 such that
h(a) = a2f x 1 − az
1 − a > b2f x 1 − bz
1 − b = h(b). (A.2)
Define ξ(a, b) = (1 − az)(1 − b)
(1 − a)(1 − bz) .
It can be checked that ξ(a, b) ≤ 1 and a/b ≤ ξ(a, b). On other hand, F ∈ H means that t2f (t) is increasing
in t ∈ R+. Thus, we have
1 − az 1−a
2
f x 1 − az
1 − a ≤ 1 − bz
1−b
2
f x 1 − bz
1 − b . (A.3)
Hence,
a2
b2 f x 1 − az
1 − a ≤ ξ2(a, b)f x 1 − az
1 − a ≤ f x 1 − bz
1−b ,
which contradicts (A.2). Therefore, H(a) is decreasing in a ∈ (0, 1/2]. This completes the proof of the
theorem.
Funding
Z. Zou gratefully acknowledges financial support from National Natural Science Foundation of China
(No. 12401625), and the Fundamental Research Funds for the Central Universities (No. WK2040000108).
T. Hu gratefully acknowledges financial support from the National Natural Science Foundation of China
(No. 72332007, 12371476).
Disclosure statement
No potential conflict of interest was reported by the authors.
References
Amiri, L., Khaledi, B.E. and Samaniego, F.J. (2011). On skewness and dispersion among convolutions of
independent gamma random variables. Probability in the Engineering and Informational Sciences, 25,
55-69.
29

Arab, I., Lando, T., and Oliveira, P. E. (2025). Convex combinations of random variables stochastically dom
inate the parent for a large class of heavy-tailed distributions. Electronic Communications in Probability,
30, articl no. 65, 1-11.
Barlow, R.E. and Proschan, F. (1981). Statistical Theory of Reliability and Life Testing. To Begin With,
Silver Spring, MD.
Bock, M.E., Diaconis, P., Huffer, F.W. and Perlman, M.D. (1987). Inequalities for linear combinations of
Gamma random variables. The Canadian Journal of Statistics, 15, 387-395.
Bowers, N.L., Gerber, H.U., Hickman, J.C., Jones, D.A., Nesbitt, C.J. (1997). Actuarial Mathematics, 2nd
ed. The Society of Actuaries, Illinois.
Chen, Y., Embrechts, P. and Wang, R. (2025a). An unexpected stochastic dominance: Pareto distributions,
dependence, and diversification. Operations Research, 37(3), 1336-1344.
Chen, Y., Hu, T., Shneer, S. and Zou, Z. (2025b). Stochastic dominance for linear combinations of infinite
mean risks. arXiv: 2505.01739.
Chen, Y., Hu, T., Wang, R. and Zou, Z. (2025c). Diversification for infinite-mean Pareto models without
risk aversion. European Journal of Operational Research, 323(1), 341-350.
Chen, Y. and Shneer, S. (2025). Risk aggregation and stochastic dominance for a class of heavy-tailed
distributions. Astin Bulletin, doi:10.1017/asb.2025.10053.
Chen, Y. and Wang, R. (2025). Infinite-mean models in risk management: Discussions and recent advances.
Risk Sciences, 1, 100003.
Dhaene, J., Denuit, M., Goovaerts, M.J., Kaas, R., Vyncke, D. (2002). The concept of comonotonicity in
actuarial science and finance: theory. Insurance: Mathematics and Economics, 31, 3-33.
Esary, J.D., Proschan, F. and Walkup, D.W. (1967). Association of random variables with applications.
Annals of Mathematical Statistics, 44, 1466-1474.
Embrechts, P., McNeil, A. and Straumann, D. (2002) Correlation and dependence in risk management:
Properties and pitfalls. In Risk Management: Value at Risk and Beyond (eds. Dempster), pp. 176-223.
Cambridge University Press.
Ibragimov, R. (2005). New majorization theory in economics and martingale convergence results in econo
metrics. Ph.D. dissertation, Yale University, New Haven, CT.
Ibragimov, R. (2009). Portfolio diversification and value at risk under thick-tailedness. Quantitative Finance,
9(5), 565-580.
30

Imamura, Y. and Kato, T. (2025). A note on subadditivity of value at risks (VaRs): a new connection to
comonotonicity. Journal od Applied Probability, doi: 10.1017/jpr.2025.31.
Kuczma, M. (2009). An introduction to the theory of functional equations and inequalities: Cauchy’s equation
and Jensen’s inequality. Katowice: Silesian University Press. Springer.
Ma, C. (1998). On peakedness of distributions of convex combinations. Journal of Statistical Planning and
Inference, 70, 51-56.
Ma, C. (2000). Convex orders for linear combinations of random variables. Journal of Statistical Planning
and Inference, 84(1-2), 11-25.
Mao, T., Pan, X. and Hu, T. (2013). On orderings between weighted sums of random variables. Probability
in the Engineering and Informational Sciences, 27(1):85-97.
Marshall, A.W., Olkin, I. and Arnold, B. (2011). Inequalities: Theory of Majorization and Its Applications.
Second edition. Springer, New York.
Matkowski, J. (1993). Subadditive functions and a relaxation of the homogeneity condition of seminorms.
Proceedings of the American Mathematical Society, 117(4), 991-1001.
Matkowski, J. and S ́wi ̧atkowski, T. (1993). On subadditive functions. Proceedings of the American Mathe
matical Society, 119(1), 187-197.
Mu ̈ller, A. (2025). Some remarks on the effect of risk sharing and divesification for infinite mean risk. Astin
Bulletin, doi:10.1017/asb.2025.10054.
Pan, X., Xu, M. and Hu, T. (2013). Some inequalities of linear combinations of independent random variables:
II. Bernoulli, 19(5A):1776-1789.
Proschan, F. (1965). Peakedness of distributions of convex combinations. The Annals of Mathematical Statis
tics, 36(6):1703-1706.
Rosenbaum, R. A. (1950). Sub-additive functions. Duke Mathematical Journal, 17, 227-247.
Shaked, M. and Shanthikumar, J. G. (2007). Stochastic Orders. Springer, New York.
Vincent, L. (2025). Diversification and stochastic dominance: When all eggs are better put in one basket.
arXiv: 2507.16265v2.
Xu, M. and Hu, T. (2011). Some inequalities of linear combinations of independent random variables: I.
Journal of Applied Probability, 48(4):1179-1188.
Yu, Y. (2011). Some stochastic inequalities for weighted sums. Bernoulli, 17(3):1044-1053.
Zwet, W.R. (1964). Convex Transformations of Random Variables. Mathematisch Centrum Amsterdam.
31

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:38.147Z
- **Text Length:** 60606 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 31 of 31
