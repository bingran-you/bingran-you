# PDF Document: Fernández et al. - 2025 - Approximate Least-Favorable Distributions and Nearly Optimal Tests via Stochastic Mirror Descent.pdf

**File Path:** Fernández et al. - 2025 - Approximate Least-Favorable Distributions and Nearly Optimal Tests via Stochastic Mirror Descent.pdf

**Processed Date:** 2026-02-10T18:16:10.534Z

**File Size:** 543.92 KB

**Total Pages:** 62

**Extracted Pages:** 62

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3235

**Title:** Approximate Least-Favorable Distributions and Nearly Optimal Tests via Stochastic Mirror Descent

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Approximate Least-Favorable Distributions and Nearly
Optimal Tests via Stochastic Mirror Descent∗
Andr ́es Aradillas Fern ́andez† Jos ́e Blanchet‡ Jos ́e Luis Montiel Olea§ Chen Qiu§ J ̈org Stoye§ Lezhi Tan‡
November 2025
Abstract
We consider a class of hypothesis testing problems where the null hypothesis postulates
M distributions for the observed data, and there is only one possible distribution under the
alternative. We show that one can use a stochastic mirror descent routine for convex optimiza
tion to provably obtain—after finitely many iterations—both an approximate least-favorable
distribution and a nearly optimal test, in a sense we make precise. Our theoretical results
yield concrete recommendations about the algorithm’s implementation, including its initial
condition, its step size, and the number of iterations. Importantly, our suggested algorithm
can be viewed as a slight variation of the algorithm suggested by Elliott, Mu ̈ller, and Watson
(2015), whose theoretical performance guarantees are unknown.
1 Introduction
Consider the problem of testing a null hypothesis that postulates finitely many distributions for the
observed data against a single alternative hypothesis. More concretely, suppose the data is modeled
∗We would like to thank Isaiah Andrews, Tim Armstrong, Patrik Guggenberger, Phillip Heiler, Ulrich M ̈uller, Mikkel Sølvsten, Karthik Sridharan, Vasilis Syrgkanis and participants of Aarhus Workshop in Econometrics VII for very helpful feedback, comments, and suggestions. We gratefully acknowledge financial support from the NSF under grants SES-2315600, 2229012, 2312204, 2403007; and from the Department of Defense through the Air Force Office of Scientific Research under award number FA9550-20-1-0-
397 and ONR 1398311. †Department of Economics, Massachusetts Institute of Technology. ‡Management Science and Engineering Department, Stanford University. §Department of Economics, Cornell University.
1
arXiv:2511.16925v1 [econ.EM] 21 Nov 2025

as a Y-valued random variable, denoted as Y , and let the hypothesis testing problem take the form:
H0 : the distribution of Y is Fm, m = 1, . . . , M, vs. H1 : the distribution of Y is G. (1)
The structure of the null and alternative hypothesis in (1) arises in nonstandard testing problems
that involve nuisance parameters; we refer the reader to the work of Elliott et al. (2015).1
We are interested in the computational aspects of finding the most powerful test of size α
for the testing problem in (1).2 It is well known that such most powerful test is based on the
likelihood ratio that replaces the null hypothesis by a single mixture distribution obtained from
averaging F1, . . . , FM according to what the literature refers to as the least-favorable distribution;
see, for example, Theorem 1 in Lehmann and Stein (1948). It is also known, but perhaps less so,
that the least favorable distribution can be characterized as the solution of a nonlinear convex
program; see Lemma 3 in Krafft and Witting (1967). Although these results immediately suggest
a computational strategy for finding the most powerful test of size α for (1), the algorithms that
have been thus far suggested in the econometrics literature for this purpose—for example, Chiburis
(2008), Moreira and Moreira (2013), Elliott et al. (2015)—do not explicitly exploit the connection
between finding the least-favorable distribution and solving a nonlinear convex program.
Our first result (Theorem 1) shows that the structure of the convex program that defines the
least-favorable distribution associated with the testing problem in (1) is amenable to the application
of the methods of (stochastic) mirror descent (henceforth, S-MD); see Chapter 6.1 in Bubeck (2015)
and also Chapter 3 in Nemirovski and Yudin (1983) for textbook references. The methods of mirror
descent are a family of iterative procedures designed for finding an approximate solution of convex
problems in high dimensions. These methods require repeated (but finitely many) evaluations of an
1See also Elliott and M ̈uller (2014), M ̈uller and Watson (2016), M ̈uller and Wang (2017), M ̈uller and Watson (2018), Guggenberger, Kleibergen, and Mavroeidis (2019), M ̈uller and Watson (2020), Dou and M ̈uller (2021), Li and M ̈uller (2021), M ̈uller (2025), Muralidharan, Romero, and W ̈uthrich (2025) for related problems in different applications. 2The most powerful test of size α correctly rejects the null hypothesis as frequently as possible, while guaranteeing that the probability of inco-
rrectly rejecting the null is bounded above by a prespecified constant α ∈ (0, 1).
2

unbiased estimator of the subgradient of the objective function. These methods exploit the geometry
of the optimization domain, but they do not exploit any higher-order smoothness information about
the optimization problem.3 We have emphasized the term approximate solution since a common
approach in theoretical computer science, operations research, and optimization is “to relax the
requirement of finding an optimal solution, and instead settle for a solution that is good enough”
(Williamson and Shmoys, 2011, p. 14). We follow this approach and, instead of insisting on finding
the exact solution of the convex program that defines the least favorable distribution, we settle for
an approximate least-favorable distribution that solves the convex program of interest, but up to a
prespecified additive factor ǫ (see our Definition 1).
Our second result (Theorem 2) shows that our suggested algorithm can indeed be used to prov
ably find—after finitely many iterations and with high probability—an approximate least-favorable
distribution. Our results are probabilistic since the output of the algorithm depends on the stochas
tic estimator of the subgradient, and not the subgradient itself. Our theoretical results yield con
crete recommendations about the algorithm’s implementation, including its initial condition, its
step size, the number of iterations, and the number of stochastic draws per iteration that can be
used to estimate the subgradient of the objective function. We think there at least two important
implications from our theoretical results. First, the number of iterations used by the algorithm
(4(1 − α)2/α2ǫ2) · ln(M)—scales logarithmically in M, which means there is no theoretical sense
in which the number of iterations should be expected to scale poorly as function of how many ele
ments there are in the null hypothesis in (1). Second, and perhaps the most striking feature of our
analysis, the unbiased estimator of the gradient used by our S-MD routine—defined in Equation
(10) in Theorem 1—can be based on a single Monte Carlo draw from each null distributions Fm,
m = 1, . . . , M. As expected, taking a larger number of draws improves the approximation error
of the S-MD routine, but using a small number of draws reduces the computational burden of the
3Mirror descent is known to outperform gradient descent in some optimization domains, such as the probability simplex; see Section 4.3 of Bubeck (2015). See also Section 5.1.1 in Nemirovski, Juditsky, Lan, and Shapiro (2009).
3

algorithm.
Interestingly, our suggested S-MD routine can be viewed as a slight modification of the algo
rithm suggested by Elliott et al. (2015) for finding a least-favorable distribution for the testing
problem in (1). We think this is an important observation since, to the best of our knowledge, the
theoretical guarantees for their procedure remain unknown. We note, however, that—in addition
to the recommended initial condition, the step size, the number of iterations, and the number of
stochastic draws per iteration—there is at least one important conceptual difference between the
two algorithms. As we will explain later, the output of our recommended S-MD algorithm is based
on averaging the output of the mirror descent routine over all iterations, as opposed to just trying
to obtain the least-favorable distribution from the last update as suggested by Elliott et al. (2015).4
While it might be possible to derive theoretical guarantees for the last iterate, this will likely require
considering step sizes that vary with each iteration (and in our case, the step size is fixed throughout
the whole routine).
Finally, we analyze the extent to which the output of the S-MD routine allows us to construct
the most powerful test for the problem in (1). If it were possible to extract an exact least-favorable
distribution, the most powerful test could be obtained directly. However, since we only obtain an
approximate least-favorable distribution we need additional work to show that we can construct a
nearly optimal test. We define a test φ to be (ǫ, δ)-nearly optimal (Definition 2) whenever i) the size
of φ is at most α + δ; and ii) up to the additive constant ǫ, the test φ rejects the null hypothesis as
frequently as the most powerful test of size α. Based on this definition, we say that a test is nearly
optimal if it is (ǫ, δ)-nearly optimal for some parameters ǫ and δ. Our third result (Theorem 3)
shows that it is indeed possible to use the S-MD routine to construct a randomized nearly optimal
test with high probability. The nearly optimal test is shown to be the average of each of the tests of
4Averaging the trajectories of a stochastic gradient-descent routine is commonly referred to as Polyak-Ruppert averaging. See Ruppert (1988) and Polyak and Juditsky (1992). See also Forneron (2024) for a discussion of PolyakRuppert averaging in the context of estimation and inference by stochastic optimization of nonlinear econometric models.
4

the Neyman-Pearson form associated with each vector of multipliers generated by the S-MD routine.
We present explicit expressions for its size distortion and its power loss relative to the best test. We
note that an important challenge in reporting such a test is that, in principle, it requires keeping
track of the history of multipliers obtained from the S-MD routine. When both M and the number
of iterations of S-MD are large, this could come at a significant computational cost. To address
this issue, we show that there is a simple strategy to implement the average test: we randomize the
number of iterations uniformly between 1 and our recommended T , update the multipliers, and use
the resulting test to decided whether or not to reject the null hypothesis. The resulting procedure,
thus, can be thought of as the Neyman-Pearson (or likelihood ratio test) associated with the last
iterate of the S-MD routine that stops randomly before our suggested number of rounds.
Related Literature: When the sample space Y is infinite, the mathematical problem that
defines the most powerful test of a given size in the problem (1) is an infinite linear program
ming problem: Since the testing problems analyzed in this paper posit M null distributions for
the observed data, the corresponding linear program has finitely many constraints but a choice
variable of infinite dimension; see Section 2 below for details. If the data were discrete-valued
or if we were to discretize it—as suggested by Chiburis (2008), Moreira and Moreira (2013), and
Moreira and Moreira (2019)—then one could find the most powerful test of a given size by using
any algorithm for finite linear programming. Krafft and Witting (1967) is the seminal reference for
using linear programming methods to characterize the most powerful test of a given size.
Elliott et al. (2015) also show how the most powerful test for composite hypotheses can be ex
pressed as a minimax decision problem where a false rejection of H0 induces a loss of 1, and a false
rejection of H1 induces a loss of φ > 0 (correct choices have loss of zero). In this problem the decision
maker chooses a test φ. An adversarial nature decides which element in {F1, F2, . . . , G} to use to gen
erate the data; consequently, a mixed strategy for nature can be represented by a vector in the sim
plex of RM+1. One could then use an algorithm for solving the corresponding maximin problem—for
example, the Hedge algorithm suggested by Aradillas Fern ́andez, Blanchet, Montiel Olea, Qiu, Stoye, and Tan
5

(2025); the fictitious play algorithm suggested by Guggenberger and Huang (2025); or a general con
vex optimization routine as in Chamberlain (2000). An important limitation of this approach is
that one would need to solve the maximin problem repeatedly for different values of φ, until one
finds a test with correct size.
Although there are no theoretical results showing that one of these algorithms is better than
another for the purpose of finding a nearly optimal test, we think that our analysis illustrates
how a rich literature in optimization can be leveraged to provide theoretical results about the
performance of different algorithms and also to provide practical recommendations regarding their
implementation.
Outline: The rest of the paper is organized as follows. Section 2 presents notation, the
statement of the hypothesis testing problem of interest, and the primal and dual optimization
problems that arise when searching for the most powerful test of a given size. Section 3 presents
a formal definition of a stochastic mirror descent routine (S-MD) for convex optimization and also
our main results: namely, that the algorithm provably generates an approximate least favorable
distribution and a nearly optimal test. Section 4 uses an elementary testing problem that arises
in the context of the univariate Gaussian location model to illustrate our main results. Section 5
discusses some extensions and Section 6 concludes. The proofs of our main theorems and supporting
lemmas are collected in Appendix A. Additional results are collected in Appendix B.
2 Notation and Statement of the Problem
We first present the formal statement of the hypothesis testing problem analyzed in this paper.
We follow the notation and terminology used in Elliott et al. (2015) as close as possible. We then
present the convex program associated with the least-favorable distribution.
6

2.1 Statement of the Hypothesis Testing Problem
We observe a random element Y that takes values in some space Y endowed with σ-algebra F . Let
ν denote a σ-finite measure defined over the measurable space (Y, F ). Let F1, . . . , FM denote M > 1
candidate probability measures for the distribution of Y under the null hypothesis. Let G be the
candidate distribution of Y under the alternative hypothesis. Assuming all of these distributions are
absolutely continuous with respect to ν, Theorem 5.5.4 in Dudley (2002) guarantees the existence
of nonnegative integrable functions f1, . . . , fM , g, which can be taken as the probability density
functions of F1, . . . , FM , G relative to ν.
Based on a single observation of Y , the testing problem of interest is
H0 : the density of Y is fm, m = 1, . . . , M, against H1 : the density of Y is g. (2)
Using the typical jargon of hypothesis testing problems, the null hypothesis in (2) is composite,
since it contains more than one possible distributions for the data. The alternative hypothesis is
simple, in that it contains a single distribution.5
A statistical test for (2) (or simply a test) is a measurable function φ : Y → [0, 1], where φ(y) is
interpreted as the probability of rejecting the null hypothesis given that data y were observed. A
test φ is said to be nonrandomized if φ(y) ∈ {0, 1} for ν-almost every realization of Y ; otherwise
the test is said to be randomized.
The rate of Type I error under fm is the probability of rejecting the null hypothesis when Y ∼ fm
and it equals ∫ φfmdν. As usual, the size of a test is the largest rate of Type I error under the null
hypothesis. The power of a test is the probability of rejecting the null hypothesis when Y ∼ g and
it equals ∫ φgdν.
5As explained in Section 2.2 of Elliott et al. (2015), the density g can arise by appealing to the weighted average power criterion in cases where the alternative hypothesis is composite as well.
7

2.2 Primal and Dual Problems in Hypothesis Testing
We would like to find the most powerful test of size α for the problem (2). By definition, such a
test correctly rejects the null hypothesis as frequently as possible, but guarantees that the prob
ability of incorrectly rejecting the null is bounded above by the prespecified constant α ∈ (0, 1).
Mathematically, the problem of finding the most powerful test of size α can be written as:
sup
φ:Y →[0,1]
∫
φgdν, s.t.
∫
φfmdν ≤ α, m = 1, ..., M. (3)
We refer to the optimization problem in (3) as the primal problem associated with the hypothesis
testing problem in (2). We note that the primal problem is an infinite linear programming problem,
in the sense of Anderson and Nash (1987). The infinite linear program in (3) has finitely many
constraints but a choice variable of infinite dimension.
Define the Lagrangian function associated with the optimization problem (3) as
L(φ, κ) ≡
∫
φgdν −
M ∑
m=1
κm
[∫
φfmdν − α
]
, (4)
where we refer to κ ≡ (κ1, ..., κM ) ∈ R+M as the Lagrange multipliers (or simply, multipliers)
associated with each of the inequality constraints in the primal problem (3).
Consider thus the optimization problem on R+M with variable κ ≡ (κ1, ..., κM ) given by
v ̄ ≡ inf
κ∈RM
+
f (κ), (5)
where
f (κ) ≡ sup
φ:Y →[0,1]
L(φ, κ). (6)
We refer to the problem in (5) as the dual problem of (3).
Remark 1. The dual problem in (5) can be viewed as a device to solve the primal problem in (3). This
8

is a well-known fact—see Lemma 3 in Krafft and Witting (1967) and also Cvitanic and Karatzas
(2001); Rudloff and Karatzas (2010)—and we present a heuristic argument to help the exposition
(relegating technical details to Appendix B.2). Suppose that the multipliers κ∗ solve the problem
(5) in that f (κ∗) = v ̄. Then, by definition
f (κ∗) = sup
φ:Y →[0,1]
L(φ, κ∗)
=
∫
φκ∗gdν −
M ∑
m=1
κ∗
m
[∫
φκ∗fmdν − α
] ,
where φκ∗ is a test of the Neyman-Pearson form; that is
φκ∗(y) ≡


1 if g(y) > ∑M
m=1 κ∗mfm(y)
0 if g(y) ≤ ∑M
m=1 κ∗mfm(y).
(7)
Lemma 1 in Elliott et al. (2015) and Theorem 3.8.1 in Lehmann and Romano (2005) imply that if
the test φκ∗ has size α under H0 then φκ∗ solves (3); that is, it maximizes power among all tests
of size at most α. The direction of the vector κ∗—namely, λ∗ ≡ κ∗/ ∑M
m=1 κ∗m is a least-favorable
distribution in the sense of Lehmann and Romano (2005), Chapter 3, p. 84.
Remark 2. In order to justify the terminology of primal and dual problems, Section B.2 in Appendix
B formalizes the connection between the optimization problems (3) and (5), by showing that the
value functions of both problems are equal, and that a solution to the dual problem in (5) can indeed
be translated to a solution to the primal problem in (3). As usual, an important step in showing
that the solution of the dual problem can be used to solve the primal problem consists in verifying
that the complementary slackness conditions in the dual problem are satisfied. We also note that
similar duality results have been established and used elsewhere; for example, see Lemma 3 in
Krafft and Witting (1967) and Proposition 3.1 and Equation 3.11 of Cvitanic and Karatzas (2001).
Since these results are established with more generality than what is required by our framework,
9

Appendix B presents simpler versions of these results.
2.3 Solving the dual problem
We have explained how the solution to the dual problem in (5) can be used to construct the most
powerful test of a given size. We now discuss the computational aspects of solving the dual problem.
We start by showing that the objective function in (5) is convex over R+M and presenting a formula
for its subgradient. In particular, we show that the vector collecting the negative of the excess rate
of Type I error of the test φκ in (7) is a subgradient of f (·) at κ.
Lemma 1. The function f (κ) defined in Equation 6 is convex. Furthermore, a subgradient of f at
κ is given by
∇f (κ) ≡ −
(∫
φκf1dν − α, ...,
∫
φκfM dν − α
) ,
where φκ is defined as in (7).
Proof. See Section A.1 of Appendix A.
Lemma 1 shows that dual problem in (5) has, as expected, a convex objective function, and we
present a simple formula for a subgradient. We now show that the dual problem can be further
simplified by restricting the multipliers to belong to the bounded domain:
X≡
{
κ ∈ RM
+ : ‖κ‖1 ≤ 1
α
}
. (8)
Lemma 2. infκ∈RM
+ f (κ) = infκ∈X f (κ).
Proof. See Section A.2 in Appendix A.
Lemma 1 and 2 show that in order to find the multipliers associated with the dual program in
(5), it is sufficient to solve a convex optimization problem over a bounded domain (in particular,
an l1-ball around the origin with radius 1/α) instead of solving a convex optimization problem over
10

all of R+M . An intuitive explanation of this result can be given as follows. Consider the hypothesis
testing problem
H
0 : Y ∼ f0 vs. H1 : Y ∼ f1.
Suppose that Y is real-valued and that both f0 and f1 are absolutely continuous with respect to
Lebesgue measure. The Neyman-Pearson lemma implies that most powerful test of size α rejects if
and only if
f1
f0
> cα,
where cα is the critical value that satisfies
P0
( f1
f0
> cα
)
= α.
Markov’s inequality trivially implies that
α = P0
( f1
f0
> cα
)
≤ c−1
α E0
[ f1
f0
]
= c−1
α
∫ f1(y)
f0(y) f0 (y)dy
= c−1
α.
Thus cα ≤ 1/α. Lemma 2 can be viewed as a generalization of this simple observation. In the next
section we show that—due to Lemma 1 and 2—the structure of the dual problem in (5) is amenable
to the application of the methods of stochastic mirror descent.
3 Main Results
This section presents our main results. First, we present a formal definition of a stochastic mirror
descent (S-MD) routine for convex optimization. The members of the mirror descent family are
11

indexed by what is called a mirror map. We apply S-MD to the problem in (5) by setting the mirror
map to be equal to the negative entropy. This choice is motivated by our Lemma 2 and the fact
that negative entropy is a common recommendation for convex problems over l1 balls; see Section
5.7 in Nemirovski et al. (2009) and Example 2 in Srebro and Sridharan (2012). Second, we define
an approximate least-favorable distribution and show that S-MD provably obtains an approximate
least favorable distribution (Theorem 2). Finally, we define a nearly optimal test and show that the
S-MD routine can be used to generate such a test (Theorem 3).
3.1 Stochastic Mirror Descent
This section follows as closely as possible the notation in Sections 4.1 and 6.1 of Bubeck (2015).
Let R+M+ denote the set of all strictly positive vectors in RM . We say that a map Φ : R+M+ → R is a
mirror map if it satisfies the following properties
i) Φ is strictly convex and differentiable.
ii) The gradient of Φ takes all possible values, that is ∇Φ(R+M+) = RM .
iii) The gradient of Φ diverges on the boundary of R+M+.
Mirror Maps are used to build iterative algorithms for constrained optimization problems when
unbiased estimators of the gradient are available. More precisely, consider the optimization problem
inf
κ∈X f (κ),
where f : X → R is a convex function and X ⊆ R+M . Suppose that ̂G(κ) is an unbiased estimator
of a subgradient of f at κ, in the sense that E
[ ̂G(κ)
]
is a subgradient of the function f at κ.6 Let
6The expectation should be understood as being conditional on κ, since κ is stochastic. See Chapter 6 in Bubeck (2015).
12

DΦ(κ, κ′) denote the Bregman divergence associated with Φ, that is
DΦ(κ, κ′) ≡ Φ(κ) − Φ(κ′) − ∇Φ(κ′)(κ − κ′).
The stochastic mirror descent algorithm (henceforth, S-MD) given the mirror map φ is defined as
follows:
Algorithm 1 Stochastic Mirror Descent with mirror map Φ, stopped after T epochs.
1: Input: Step size η > 0, number of epochs T ∈ N. 2: Initialize κ1 ∈ arg minκ∈X ∩RM
++ Φ(κ).
3: for t = 1, . . . , T − 1 do 4:
κt+1 = arg min
κ∈X ∩RM
++
η
( ̂G(κt)⊤κ
)
+ DΦ(κ, κt). (9)
5: end for 6: Output: κ ̄T ≡ 1
T
∑T
t=1 κt.
The general interpretation of the S-MD update in equation (9) is that “the method is trying to
minimize the local linearization of the function while not moving too far away from the previous
point, with distances measured via the Bregman divergence of the mirror map”; see p. 301 in Bubeck
(2015).
An important observation regarding Algorithm 1 is that its output is the average value of
κt over all the iterations, and not its last value. Averaging the trajectories of a stochastic op
timization routine is commonly referred to as Polyak-Ruppert averaging; see Ruppert (1988) and
Polyak and Juditsky (1992). This idea goes back to seminal work on mirror descent by Nemirovski and Yudin
(1983).
The following theorem specializes the mirror descent routine in Algorithm 1 to the dual problem
in 5. The mirror map is set to be equal to the negative entropy.
Theorem 1. Consider the optimization problem infκ∈X f (κ), where f (·) is defined in (6) and the
set X is defined in (8).
13

1. Let κt be a realization of an arbitrary X -valued random vector. For each m = 1, . . . , M, let
Ym,1, ..., Ym,N be i.i.d. random variables with distribution Y ∼ fm sampled independently of
the realized value of κt. For any N ≥ 1
̂GN (κt) ≡ −
( 1 N
N ∑
n=1
φκt(Y1,n) − α, ..., 1
N
N ∑
n=1
φκt(YM,n) − α
)⊤
, (10)
is an unbiased estimator of the subgradient of f at κt; where φκt is a test of the Neyman
Pearson form defined in (7).
2. The stochastic mirror descent update in Algorithm 1 based on ̂GN (·) and the mirror map
Φ(κ) = ∑M
m=1 κm ln(κm) is
κt+1,m = ct · κt,m exp
(
−η · ̂Gm,N (κt)
)
, (11)
where ̂Gm,N (κt) is the m-th coordinate of ̂GN (κt) and
ct ≡ min

1, 1
α ∑M
m=1 κt,m exp
(
−η · ̂Gm,N (κt)
)

.
3. The initial condition in Algorithm 1 based on the mirror map Φ(κ) = ∑M
m=1 κm ln(κm) is
κ1 =


(1
exp(1) , . . . , 1
exp(1)
)
, if 1 ≤ M < exp(1)
α,
(1
αM , . . . , 1
αM
) if M ≥ exp(1)
α.
(12)
Proof. See Section A.3 in Appendix A.
It is useful to make an explicit connection between the updating formula in (11) and Equation
14

10, p. 782 in Elliott et al. (2015). Following the notation in Elliott et al. (2015), define
μt+1
m ≡ ln(κt+1,m).
Taking logarithms on both sides of (11) and using the definition of ̂GN (κt) yields
μt+1
m = ln(ct) + μt
m+η
( 1 N
N ∑
n=1
φexp(μt)(Ym,n) − α
)
. (13)
When ct = 1, the term ln(ct) = 0, and thus, (13) essentially matches Equation 10, p. 782 in
Elliott et al. (2015) after noting that ̂Gm,N (κt) is a Monte Carlo estimate of the negative excess
rate of Type I error the test φκt:
α−
∫
φκt fm dν.
Other than notation, the main difference between our expressions is the presence of the additional
term ct. In the stochastic mirror descent routine, this term is used to take into account the fact
that—because of our Lemma 2—the optimization domain in the dual problem (5) can be restricted
to values of κ such that ∑M
m=1 κm ≤ 1/α.
3.2 Approximate Solutions to the Dual Problem
In this subsection we show that if the number of epochs (T ) and the step size (η) are chosen
appropriately, then κ ̄T ≡ (1/T ) ∑T
t=1 κt—obtained using Equations 11 and 12 in Theorem 1
indeed can be used to generate an approximate least-favorable distribution for the problem in (1).
In order to formalize this statement, note that we have defined v ̄ as the value of the dual problem
infκ∈X f (κ), where f (·) is defined in (6) and the set X is defined in (8). Let
∆M−1 ≡
{
λ ∈ RM | λm ≥ 0 for all m = 1, . . . , M and
M ∑
m=1
λm = 1
}
(14)
15

denote the probability simplex in RM .
Definition 1 (ǫ-least favorable distribution). We say that a vector λǫ∗ ∈ ∆M−1 is an ǫ-least favorable
distribution if there exists a positive constant cvǫ∗ such that
κ∗
ǫ ≡ cv∗
ǫ · λ∗
ǫ
satisfies
f (κ∗
ǫ ) ≤ v ̄ + ǫ, (15)
where f (·) is defined in (6). We say that a vector λ∗ ∈ ∆M−1 is an approximate least-favorable
distribution if there exists ǫ > 0 for which λ∗ is ǫ-least favorable.
Remark 3. The definition presented above is different from the notion of “ǫ-approximate least
favorable distribution” used by Elliott et al. (2015). They define an ǫ-approximate least favorable
distribution as any distribution for which the corresponding Neyman-Pearson test has size exactly
equal to α, and has power at most ǫ away from that of the most powerful test (see their Definition
1, p. 780). In contrast, we focus on the optimization problem that defines such a least-favorable
distribution: the dual problem we presented in (5). Our notion allows the associated Neyman
Pearson test to be over (or under) sized. This flexibility enables us to avoid the computational
cost of having to simulate rates of Type I error for different critical values, and then to search
over critical values either at the last round or within each iteration. In Section 3.3, we show that
with our definition, it is still possible to theoretically control the Type I error of our recommended
nearly-optimal test (see our Theorem 3 and the simulation results in Section 4).
Our definition is inspired by a large literature in theoretical computer science, operations re
search, and optimization where it is a common approach to “to relax the requirement of finding an
optimal solution, and instead settle for a solution that is good enough” (Williamson and Shmoys,
2011, p. 14). There are different criteria that can be used to formalize the statement that an approx
16

imate solution is “good enough”, but a typical choice in optimization problems relies on its value
function (which is the metric we use in our Definition 1). We deliberately chose an additive approx
imation error, because most of the results that we are familiar with regarding the approximation
error of mirror descent routines—and, more generally, first-order methods for convex optimization
problems—take this form; see, for example, Section 5.1.1 in Juditsky and Nemirovski (2011) and
also Bubeck (2015). But it is also possible to give results for multiplicative approximation errors;
for example, see Theorem 1 in Chen, Lucier, Singer, and Syrgkanis (2017).
We now present a result showing that Algorithm 1 provably generates an approximate least
favorable distribution. For any nonnegative real number x, let ⌈x⌉ denote the “ceiling function”;
that is smallest integer larger than x.
Theorem 2. Consider the optimization problem infκ∈X f (κ), where f (·) is defined in (6) and the
set X is defined in (8). Let κT be the output of Algorithm 1 based on the mirror map Φ(κ) =
∑M
m=1 κm ln(κm) and the unbiased estimator of the gradient ̂GN (·) defined in Equation 10 of Theorem
1. If α ∈ (0, 1/2) and M > exp(1)/α,
T=
⌈ 4(1 − α)2
α2ǫ2 · ln(M )
⌉
, and η = α · ǫ
2(1 − α)2 , (16)
then
λ∗
T ≡ κT
∑M
m=1 κT,m
(17)
is a
(
1 + 2Ω
√ln(M )N (1−α)2
)
ǫ-least favorable distribution, in the sense of our Definition 1, with prob
ability at least 1 − exp (−Ω2).
Proof. See Section A.4 in Appendix A.
Theorem 2 shows that—even after finitely many iterations—the S-MD routine for the dual problem,
inf
κ∈X f (κ),
17

generates an approximate least-favorable distribution (in the sense of our Definition 1) with high
probability. The approximate least favorable distribution in (17) is the direction of the multipliers
κT (in analogy to what we would do if we had access to the exact solution of the dual problem).
The probabilistic statement in the theorem arises due to the randomness in the gradient estimator
in (10), which makes the output of the S-MD routine behave as a random variable. Note that if
we fix the frequency at which we would like to obtain an approximate least-favorable distribution
(over different runs of the S-MD routine), then the number of draws used to construct the gradient
estimator (N) determines how close we get to finding a “good enough” solution for the dual problem.
For example, suppose that ǫ = .1, α = 10% and M = 200, and suppose we set Ω = √ln(1/α),
so that 1 − exp(−Ω2) = 1 − α = 90%. If we run the S-MD routine using N = 1 (only one draw per
density fm), then with probability 90% we will obtain a
(
1+2
√
ln(1/α) ln(M)(1 − α)2
)
ǫ ≈ 2.5ǫ = .25
least-favorable distribution. If we use N = 10 (only ten draws per density) we get a
(
1+2
√
ln(1/α) ln(M) · 10 · (1 − α)2
)
ǫ ≈ 1.5ǫ = .15
least favorable distribution. If we use N = 100, with probability 90% we get a 1.15ǫ = .11-least
favorable distribution. More generally, Theorem 2 shows that, for any target probability, we can
always make N large enough to get as close as we would like to the desired approximation error ǫ.
In our view, the most surprising part of Theorem 2 is that even if the number of draws per
density used to implement the S-MD routine are as low as N = 1, it is still possible to get an
approximate least-favorable distribution that provides a non-trivial approximate solution to the
dual problem in (5). For instance, in the example above, using only one draw per density yields an
approximation error of 2.5ǫ = .25 with probability 90%. The approximation error of .25 should be
18

interpreted as a worst-case guarantee that applies to any testing problem of the form (1). As we
show in our illustrative example, the resulting approximation error can, in practice, be considerably
smaller.
3.3 Nearly Optimal Tests via Stochastic Mirror Descent
Now that we have established that the S-MD routine in Algorithm 1 (with negative entropy as a
mirror map) provably generates an approximate least-favorable distribution—in the sense of our
Definition 1—we discuss the extent to which the S-MD routine can also be used to generate a nearly
optimal test.
Before presenting a formal definition of what we mean by a nearly optimal test, it is helpful
to explain why it is not entirely trivial to translate the approximate least-favorable distribution in
Equation 17 into a nearly optimal test. Let κ∗T be the multipliers that we obtain after running the
S-MD routine, with T and η defined as in Theorem 2. Consider the test of the Neyman-Pearson
form, φκ∗T , defined in (7) based on the multipliers κ∗T .7 Since the S-MD routine never explicitly
tried to enforce size control, it is possible that the size of φκ∗T is strictly above the nominal level
α. Mathematically, this happens because an approximate optimizer to the dual problem does not
necessarily imply a feasible solution to the primal problem (let alone a nearly optimal one). This
suggests that, when defining a nearly optimal test, it could be helpful to take into account i) possible
violations of the required size; ii) as well as potential loss in power, relative to the optimal solution.
Let v ̄ be defined as value function of the dual problem in (5). As we show in Section B.2 of
Appendix B, duality holds, and v ̄ equals the power of the most powerful test of size α.8
7Note that κ∗
T can be decomposed into its direction λ∗
T as in Equation 17 and its norm cv∗
T ≡ ∑M
m=1 κ∗
T,m. Thus, the test in (7) rejects the null if and only if
g(y) > cv∗
T
M ∑
m=1
λ∗
T ,m fm (y ).
8For the sake of exposition, we deliberately write v ̄ instead of v ̄(α).
19

Definition 2. A statistical test φ⋆
ǫ,δ : Y → [0, 1] is said to be (ǫ, δ)-nearly optimal of size α if:
1. The size of φ⋆
ǫ,δ is no larger than α(1 + δ),
∫
φ⋆
ǫ,δfmdν ≤ α(1 + δ), for all m = 1, . . . , M.
2. The power of φ⋆
ǫ,δ is at most ǫ away of the maximum power of a test of size α,
∫
φ⋆
ǫ,δgdν ≥ v ̄ − ǫ.
We say that test φ∗ is nearly optimal of size α, if there exists ǫ, δ > 0 for which φ∗ is (ǫ, δ)-nearly
optimal.
The following theorem shows that Algorithm 1 can provably be used to generate a nearly optimal
test.
Theorem 3. Consider the optimization problem infκ∈X f (κ), where f (·) is defined in (6) and the
set X is defined in (8). Let {κt}tT=1 be the sequence of multipliers generated by Algorithm 1 based
on the mirror map Φ(κ) = ∑M
m=1 κm ln(κm) and the unbiased estimator of the subgradient ̂GN (·)
defined in Equation (10) of Theorem 1. If M > exp(1)/α,
T=
⌈ 4(1 − α)2
α2ǫ2 · ln(M )
⌉
, and η = α · ǫ
2(1 − α)2 ,
then the test
φ ̄T (y) ≡ 1
T
T ∑
t=1
φκt(y) (18)
is nearly optimal of size α with high probability (where φκt is the test of the Neyman-Pearson form
in (7)). More concretely, with probability at least 1 − exp(−Ω2)
20

1. For any m = 1, . . . , M,
∫
φ ̄T fmdν ≤ α
(
1+
[
1 + 2Ω
√ln(M)N (1 − α)2
]
ǫ− 1
T
T ∑
t=1
̂GN (κt)⊤κt
)
. (19)
2. The power of φ ̄T is larger than
v ̄ −
[
1 + 2Ω
√ln(M)N (1 − α)2
]
ǫ. (20)
Proof. See Section A.5 in Appendix A.
Theorem 3 shows that the S-MD routine analyzed in this paper provably generates a nearly optimal
test, in the sense of our Definition 2. There are three aspects about our result that are worth
highlighting.
First, it is rather surprising that the nearly optimal test in (18) takes the form of an “average”
test. In order to get some intuition of why this construction is helpful to obtain theoretical results,
it is useful to explicitly write the dual in (5) as the minimax problem
min
κ∈RM
+
mφax L(φ, κ),
where L(φ, κ) is the Lagrangian function defined in (4). In this problem, the “min” player is choosing
a vector of (Lagrange) multipliers, and the “max” player is choosing a test. For a fixed κ, the best
response of the max player is a test of the Neyman-Pearson form φκ defined in (7). A mirror descent
routine for this problem initializes the choice of κ by the “min” player, and iteratively updates its
values based on the (sub)gradient of the Lagrangian with respect to κt, which—by results analogous
to the envelope theorem—will give the rates of Type I error of φκt. The most powerful test of size
21

α is the solution to the maximin problem
mφax min
κ∈RM
+
L(φ, κ).
The question is how to translate the iterates, {κt}tT=1, into a solution to the maximin problem.
This question is common in the application of the mirror descent algorithm to minimax problems
that arise in game theory and statistical decision theory; see Aradillas Ferna ́ndez et al. (2025) and
the discussion of matrix games in Arora, Hazan, and Kale (2012). While these papers consider
different problems to the one studied in this paper, a suggestion therein is to use the best responses
of the max player {φκt}tT=1 and randomize over them with uniform probability. In our problem,
such a construction becomes the average test in (18); and this is what motivated us to study its
performance. To the best of our knowledge, our results have not been stated elsewhere.
Second, the upper bound on the rate of Type I error features a term whose value changes with
each specific run of the S-MD routine. This is not ideal, but we were not able to derive a better
bound. To better understand the role of this term, consider again the example we discussed after
Theorem 2. Suppose that ǫ = .1, α = 10% and M = 200, and suppose we set Ω = √ln(1/α), so
that 1 − exp(−Ω2) = 1 − α = 90%. If we run the S-MD routine using N = 1 (only one draw per
density fm),
1+
[
1+2
√
ln(1/α) ln(M)(1 − α)2
]
ǫ ≈ 1 + 2.5ǫ = 1.25.
If the term
−1
T
T ∑
t=1
̂GN (κt)⊤κt, (21)
were not part of (19), then we could conclude that with probability at least 90%, the test φ ̄T has
size of at most 12.5% (that is, there is a size distortion of 2.5%) and power that is no less than v ̄
minus 25 percent points. Again, making N arbitrarily large makes the size closer to α(1 + ǫ) and
the power at least v ̄ − ǫ. The interpretation of Theorem 3 changes slightly when we incorporate
22

(21). Suppose for example that in one run of the S-MD routine the term in (21) equals .05. Then,
for that run, our best hope is that (19) is satisfied with the larger bound 1.3 instead of 1.25. This
means that we could see a rate or Type I error of the average test as high as 13%. As we discuss in
the next section, in our illustrative example the term in (21) tends to be small (and negative), but
we do not have any theoretical guarantees for this.9
Third, to report the entire test (as function of all possible data), one would have to retain
the history of multipliers obtained from the S-MD routine. When both M and the number of
iterations of S-MD are large, this could come with significant computational and data storage
expense. However, a typical use case is to perform the test on a specific data set. For this purpose,
data storage requirements can be much reduced because, rather than retaining the weights for every
epoch, it suffices to store the implied test results, i.e. one bit per epoch and parameter value being
tested (and even less if one is content with only updating the average). Furthermore, rather than
reporting a rejection probability, it usually suffices to either accept or reject, although in cases where
the rejection probability is interior, this decision will then be random conditionally on the data. But
this can be achieved at much lower computational expense: (ii) By a simple application of the Law
of Iterated Expectations, rejecting with probability corresponding to the average test is equivalent
to first drawing a “realized epoch” t∗ ∼ unif({1, . . . , T }) and then executing the Neyman-Pearson
test for epoch t∗ only. (iii) As t∗ can be drawn before starting the iteration, it is only necessary to
execute iterations up to epoch t∗, threreby only executing T /2 iterations in expectation. By using
these simplifications, it should be easy to execute the test.
An alternative to the average test is to simply report the Neyman-Pearson test in (7) asso
ciated with the multipliers κ ̄T obtained as the output of Algorithm 1 based on the mirror map
Φ(κ) = ∑M
m=1 κm ln(κm) and the unbiased estimator of the gradient ̂GN (·) defined in Equation 10
of Theorem 1. While it is challenging to analyze the size and power properties of this test for finite
9The terms − ̂GN (κt)⊤κt is a Monte-Carlo estimate of the average excess rate of Type I error of φκt , evaluated at the different null densities. The term in (21) averages these Monte-Carlo estimates over all iterations.
23

T , in Appendix B.3.1 we show that, under some conditions, as T → ∞ the power of the test will
converge to v ̄, and it will have correct size (in a sense we make precise).
3.4 Remarks on Confidence Regions
It is common to construct confidence regions by inverting tests. However, the test advocated here
is in general randomized, raising the question of how to invert it. Conceptual discussions of this
matter go back at least to the 1950’s (Stevens, 1950; Lehmann, 1959).10 To summarize some key
points, for this paragraph only let the test function ρ(·) also depend on the parameter value to be
tested, i.e. we temporarily define ρ : Y × Θ → [0, 1], where ρ(y, θ) is the probability of rejecting
the instance of H0 characterized by parameter value θ given data y; Lehmann (1959) calls this the
critical function. Then we can define no less than four intervals that arguably invert our test:
1. Lehmann (1959) defines a randomized confidence region as the set {θ : ρ(y, θ) ≤ u}, where u is
a realization of U ∼ unif(0, 1), reflecting data-independent randomization by the statistician.
2. Geyer and Meeden (2005) propose to directly report 1−ρ(y, θ) as function of θ and to interpret
it as membership function of a fuzzy set; it is easy to see that expected membership of the
true parameter value will correspond to the target coverage.
3. Similarly to our discussion just above, one could draw a random epoch t∗ and invert the
corresponding (nonrandomized) Neyman-Pearson test.
4. Again similar to previous discussion, one could invert the Neyman-Pearson test that utilizes
average weights κ ̄T .
Mirroring discussions in the previous subsection, idea 4 is the computationally most involved and
its justification is asymptotic, idea 3 will be the computationally easiest, and idea 1 is intermediate;
10A notable difference to our setting is that these discussions were motivated by the randomized nature of optimal or exact tests in highly discrete sample spaces.
24

2 is computationally equivalent to 1. Some users might find 2 hard to interpret (Berger and Casella,
2005). We leave further analysis of the issue to future research.
4 Illustrative Example
In order to illustrate the performance of the SM-D routine in Algorithm 1—along with the im
plications of the theoretical guarantees in Theorem 2 and Theorem 3—we consider an elementary
testing problem that arises in the context of the univariate Gaussian location model. More precisely,
suppose we observe a realization of the random variable
Y ∼ N (θ, 1).
The location parameter, θ, is unknown to the econometrician. Let Θ0 ≡ {θ0,1, . . . , θ0,M } be an
equally-spaced grid over the interval [−5, 0] consisting of M = 200 points. We order the elements
of Θ0 in decreasing order, so that θ0,1 = 0. We also define the singleton set Θ1 ≡ {θ1}.
We assume that the econometrician is interested in the following hypothesis testing problem:
H0 : θ ∈ Θ0 vs. H1 : θ ∈ Θ1.
It is well known that the most powerful test of size α for this problem—which we denote as φ∗α
rejects the null if Y is large enough. More precisely, φ∗α(Y ) ≡ 1{Y ≥ z1−α}, where z1−α is the 1 − α
quantile of a standard normal. The power of this test can then be expressed in terms of the normal
c.d.f. as Pr(N (0, 1) ≤ θ1 − z1−α). Since the most powerful test of size α for this example is known,
we can use this information to analyze the theoretical guarantees we provided in Theorem 2 and
Theorem 3.
The Stochastic Mirror Descent (S-MD) Routine: We first obtain a nearly optimal test of size
α = 10%. We set θ1 = 2, which means that the largest power of a test of size α = 10% is
25

Φ(2 − 1.28) ≈ 76.38%. This is also the value of the dual problem in (5). We set ǫ = .1, and use the
formulae in Theorem 2 to determine the maximum number of iterations (T ) and the learning rate
(η) for the S-MD routine:
T=
⌈ 4(1 − α)2
α2ǫ2 · ln(M )
⌉
= 171, 666, η = α · ǫ
2(1 − α)2 = .0062. (22)
In this example M = 200 > (exp (1) /α) = exp(1) · 10. Thus, in accordance with our theoretical
derivations, the initial condition for the S-MD routine (κ0 ∈ RM ) is chosen to be:
κ0 = (1/(αM), . . . , 1/(αM))⊤ = (.05, . . . , .05)⊤.
The main component of the S-MD routine is the stochastic mirror descent update. We implement
the unbiased estimator of the gradient in Theorem 1 using only one draw per density; that is, N = 1.
More precisely, if we let fm(·) denote the p.d.f. of Y under the null hypothesis θ0,m ∈ Θ0 and we let
g(·) be the p.d.f. of Y under the alternative Θ1, the mirror descent update necessitates an unbiased
estimator of the rates of Type I error of the test
φκ(Y ) ≡ 1
{
g(Y ) >
M ∑
m=1
κmfm(Y )
}
. (23)
In our example, an unbiased estimator for the rate of Type I error at θ0,m can be succinctly obtained
by sampling Z ∼ N (0, 1) and using φκ(Z + θ0,m) as an estimator. More precisely, in each epoch t we
obtain one draw Zt ∼ N (0, 1) and compute the mirror descent update (coordinate by coordinate)
as
κm,t+1 ≡ κm,t · exp (η [φκt(Zt + θ0,m) − α]) , for each m = 1, . . . , M.
The intuition of the update is very simple. If φκ(Z + θ0,m)—the unbiased estimator of the rate
of Type I error of φκt at θ0,m—is larger than α, then κm,t+1 increases (and otherwise decreases).
26

We also know that ‖κt‖1 must be less than or equal than 1/α. Thus, after the update we check if
‖κt+1‖ ≤ 1/α. If this is the case, we keep κt+1 as is; but otherwise we normalize κt+1 to guarantee
that ∑M
m=1 κm ≤ 1/α. This gives us back the update described in part 2 of Theorem 1.
In general, updating κt is numerically very cheap when N = 1, as it only involves obtaining
one sample from each of the null densities (along with the evaluation of the null and alternative
densities at each draw) and also evaluation of the exponential function. Using Matlab R2024a on
a personal ASUS Vivobook Pro 15 @ 2.5GHz Intel Core Ultra 9 185H, it took around 280 seconds
(slightly less than 5 minutes) to complete all of the T = 171, 666 iterations.
Approximate Least-Favorable Distribution: As suggested by our Theorem 2, in order to construct
an approximate least-favorable distribution we standardize the average value of κt to represent it
as a probability distribution. More precisely, the blue bars in Figure 1 below correspond to
λT ≡ κ ̄T
‖κ ̄T ‖1
, where  ̄κT ≡ 1
T
T ∑
t=1
κt.
In the testing problem we are considering, it is known that the least-favorable distribution loads all
of its mass on θ0,1. As Figure 1 shows, the output of the S-MD routine resembles such distribution.
Our definition of approximate least-favorable distribution in Definition 1 makes reference to the
value function of the dual problem in (5), and not in terms of its minimizer. In this example, it
is easy to show that the value of the dual (which we denoted by v ̄) equals 76.38% (the power of
the most powerful test of size α = 10%). We now argue that, as expected, the distribution λT
approximately solves the dual problem, in the sense of Definition 1. To see this, we just need to
evaluate the function:
f (κ ̄T ) =
∫
φκ ̄T g(y)dy } {{ }
≈76.96%
−
M ∑
m=1
 ̄κT ,m
(∫
φκ ̄T (y)fm(y)dy − α
)
} {{ }
−1.01%
≈ 77.97%,
where φκ ̄T is the test of Neyman-Pearson form defined in (7), and where a Monte-Carlo approxima
27

-5 -4.5 -4 -3.5 -3 -2.5 -2 -1.5 -1 -0.5 0 Null Hypothesis
0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0.9
1
Figure 1: λT ≡ κ ̄T /‖κ ̄T ‖1 for α = 10% and ǫ = 0.1; where  ̄κT = (1/T ) ∑T
t=1 κt.
tion with 100,000 draws is used for the evaluation of each of the integrals. Thus, in this example:
f (κ ̄T ) ≈ 77.97% < v ̄ + ǫ = 76.38% + 10% = 86.38%.
This means that in our run of the S-MD routine we obtained an ǫ = .016-least-favorable distribution.
The quality of the approximation is much better than what we expected based on our theoretical
results in Theorem 2. This is consistent with the fact that the results in Theorem 2 apply to
every possible testing problem with M null densities and a single alternative. We also conducted
a Monte-Carlo simulation where we implemented the S-MD routine with different draws for the
estimation of the subgradient, with 10,000 draws being used for integral evaluation in each. In all
of the 100 runs we obtain a 10%-least favorable distribution. This is consistent that the theoretical
results we presented in Theorem 2 apply to any testing problem of the form (1).
Nearly Optimal Test φ ̄T : Figure 2 reports the test φ ̄T (red, solid line), which is the test defined in
(18). For comparison, we also report the test φκ ̄T (blue, solid line). The size of φ ̄T is approximately
28

-3 -2 -1 0 1 2 3 Data Realizations
0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0.9
1
Probability of Rejecting
Figure 2: φ ̄T (red) alongside φκ ̄T (blue) for α = 10% and ǫ = .1.
10.22%, and its power is approximately 76.98%. This means that the test φ ̄T is slightly over-sized,
but it has competitive power.
We also conducted 100 different runs of our S-MD routine. In all of the 100 hundred runs the
size was at most α(1 + ǫ) and the lowest power achieved was 76.82%.
Time Comparison of Using More Draws in the S-MD Routine: We also analyzed the increased
computational effort of increasing the number of draws used to evaluate the subgradient during
each iteration. To do this, we re-ran our illustrative example using 1, 10, 100, and 1,000 draws
in each round. Table 1 shows the runtime as a function of the number of draws. Lastly, we also
calculated the expected runtime associated with 20,000 draws in each round—the number of draws
recommended by Elliott et al. (2015).11 Our expected runtime was 369,697 seconds.12 We think
11To be clear, they recommended to have a fixed set of draws at the beginning of the iterations and to reuse those draws via importance sampling at each iteration. While this may be computationally more feasible for certain distributions, most theoretical results on S-MD require the draws in each period to be independent of the history (otherwise, it is difficult to guarantee unbiasedness of the estimator of the subgradient). The theoretical performance guarantee with their recommendations may be -
derived with additional assumptions, but remains unknown to the best of our knowledge. 12This estimate was generated by taking the time difference between the first and second round, and then multi
29

Draws Runtime (seconds) 1 314 10 882 100 4,028 1,000 36,320
Table 1: Number of draws in S-MD routine during each round versus runtime.
these results illustrate the computational gains of implementing the S-MD routine with a small
number of draws to evaluate the subgradient.
5 Approximately Unbiased Tests
Consider now a variation of the testing problem in (1) where the alternative hypothesis is also
composite, but with only I possible distributions for the data:
H0 : the density of Y is fm, m = 1, . . . , M, vs. H1 : the density of Y is gi, i = 1, . . . , I.
(24)
As explained in Section 2.2 of Elliott et al. (2015), one can reduce the problem in (24) to the
problem in (1) by choosing weights w ≡ (w1, . . . , wI) ∈ ∆I−1 and defining g ≡ ∑I
i=1 wigi. Then,
the test φ that solves (3) can be interpreted as the test that maximizes w-weighted average power
among all tests of size at most α.
A common criticism of tests that maximize a weighted average power criterion (henceforth,
WAP) is that they can be biased : their power for some density gi can be lower than α(Moreira and Moreira,
2013; Andrews, 2016). Moreira and Moreira (2013) note that one could include additional con
straints in the problem (1) and consider:
sup
φ:Y →[0,1]
∫
φgdν, s.t.
∫
φfmdν ≤ α, m = 1, ..., M,
∫
φgidν ≥ α, i = 1, . . . , I. (25)
plying by T . Note that this estimate is smaller than extrapolation from the last two observations based on a linear trend.
30

Just as before, we can define the Lagrangian function associated with problem (25) as
L(φ, κ, μ) ≡
∫
φgdν −
M ∑
m=1
κm
[∫
φfmdν − α
] −
I ∑
i=1
μi
[∫
φ(−gi)dν + α
]
, (26)
where we refer to κ ≡ (κ1, ..., κM ) ∈ R+M as the Lagrange multipliers associated with each of the
inequality constraints that bound the test’s rate of Type I error, and we let μ ≡ (μ1, ..., μI) ∈ RI+
denote the Lagrange multipliers associated with each of the inequality constraints preventing the
test to be biased.
We could then proceed as we did before and define the dual optimization problem:
inf
κ∈RM
+ , μ∈RI
+
f (κ, μ), (27)
where
f (κ, μ) ≡ sup
φ:Y →[0,1]
L(φ, κ, μ). (28)
It is possible to show that the function f (κ, μ) is convex in its arguments. Moreover, a test φ that
achieves the maximum is the test
φκ,μ(y) ≡


1 if g(y) > ∑M
m=1 κmfm(y) − ∑I
i=1 μigi(y),
0 if g(y) ≤ ∑M
m=1 κmfm(y) − ∑I
i=1 μigi(y),
(29)
and a subgradient of f (·) at (κ, μ) is
∇f (κ, μ) ≡ −
(∫
φκ,μf1dν − α, ...,
∫
φκ,μfM νdν − α,
∫
φκ,μ(−g1)dν + α . . .
∫
φκ,μ(−gI )dν + α
) .
If ∇f (κ, μ) were known, the mirror descent routine (with negative entropy as mirror map) for
31

this problem would have updates
κt+1,m = κt,m exp (−η · ∇mf (κt, μt)) ,
μt+1,i = μt,i exp (−η · ∇if (κt, μt)) .
Establishing a result similar to Theorem 2 and 3 is more challenging because the application of
standard results would need ex-ante constraints on the ‖ · ‖1-norm of κ and μ. But, for example,
if one knew that the optimal values of κ and μ satisfied the constraint ‖κ + μ‖1 < 1/α then our
previous theoretical results for S-MD would apply.
6 Conclusion
We showed that—in testing problems where the null hypothesis postulates M distributions for the
observed data—one can use a stochastic mirror descent routine to provably obtain—after finitely
many iterations—both an approximate least-favorable distribution and a nearly optimal test. The
convex program that arises naturally in the testing problem in (1) is the dual of the mathematical
program that defines the most powerful test of size α.
Our theoretical results allowed us to provide concrete recommendations about the algorithm’s
implementation: including its initial condition, its step size, the number of iterations, and the
number of stochastic draws per iteration that can be used to approximate the subgradient of the
objective function. These practical recommendations have at least two important implications.
First, the number of iterations used by the algorithm scales logarithmically in M (which means
there is no theoretical sense in which the algorithm scales poorly as a function of the elements in
the null hypothesis). Second, the algorithm can be implemented with a single stochastic draw per
null density in each iteration (taking a larger number of draws improves the approximation error
of the S-MD routine, but using a small number of draws reduces the computational burden of the
32

algorithm). Importantly, our suggested algorithm coincides with a slight variation of the algorithm
in Elliott et al. (2015).
References
Anderson, E. J. and P. Nash (1987): Linear programming in infinite-dimensional spaces: theory
and applications, John Wiley & Sons.
Andrews, I. (2016): “Conditional linear combination tests for weakly identified models,” Econo
metrica, 84, 2155–2182.
Aradillas Fern ́andez, A., J. Blanchet, J. L. Montiel Olea, C. Qiu, J. Stoye, and
L. Tan (2025): “Epsilon-Minimax Solutions of Statistical Decision Problems via the Hedge
Algorithm,” .
Arora, S., E. Hazan, and S. Kale (2012): “The multiplicative weights update method: a
meta-algorithm and applications,” Theory of computing, 8, 121–164.
Berger, R. L. and G. Casella (2005): “Comment: Fuzzy and Randomized Confidence Intervals
and P-Values,” Statistical Science, 20, 372–374.
Bubeck, S. (2015): “Convex optimization: Algorithms and complexity,” Foundations and
Trends® in Machine Learning, 8, 231–357.
Chamberlain, G. (2000): “Econometric applications of maxmin expected utility,” Journal of
Applied Econometrics, 15, 625–644.
Chen, R. S., B. Lucier, Y. Singer, and V. Syrgkanis (2017): “Robust optimization for
non-convex objectives,” Advances in Neural Information Processing Systems, 30.
33

Chiburis, R. (2008): “Approximately Most Powerful Tests for Moment Inequali ties, Unpublished
manuscript,” Department of Economics, Princeton University.
Cvitanic, J. and I. Karatzas (2001): “Generalized Neyman-Pearson lemma via convex duality,”
Bernoulli, 7, 79–97.
Dou, L. and U. K. M ̈uller (2021): “Generalized Local-to-Unity Models,” Econometrica, 89,
1825–1854.
Dudley, R. (2002): Real Analysis and Probability, vol. 74, Cambridge University Press.
Elliott, G. and U. K. M ̈uller (2014): “Pre and post break parameter inference,” Journal of
Econometrics, 180, 141–157.
Elliott, G., U. K. M ̈uller, and M. W. Watson (2015): “Nearly optimal tests when a
nuisance parameter is present under the null hypothesis,” Econometrica, 83, 771–811.
Forneron, J.-J. (2024): “Estimation and inference by stochastic optimization,” Journal of Econo
metrics, 238, 105638.
Geyer, C. J. and G. D. Meeden (2005): “Fuzzy and Randomized Confidence Intervals and
P-Values,” Statistical Science, 20, 358–366.
Guggenberger, P. and J. Huang (2025): “On the numerical approximation of minimax regret
rules via fictitious play,” arXiv preprint arXiv:2503.10932.
Guggenberger, P., F. Kleibergen, and S. Mavroeidis (2019): “A more powerful subvector
Anderson Rubin test in linear instrumental variables regression,” Quantitative Economics, 10,
487–526.
Juditsky, A. and A. Nemirovski (2011): “5 ct First-Order Methods for Nonsmooth Convex
Large-Scale Optimization, I: General Purpose Methods,” Optimization for Machine Learning,
121.
34

Krafft, O. and H. Witting (1967): “Optimale tests und ung ̈unstigste verteilungen,” Zeitschrift
f ̈ur Wahrscheinlichkeitstheorie und verwandte Gebiete, 7, 289–302.
Lehmann, E. L. (1959): Testing Statistical Hypotheses, Springer Texts in Statistics, New York:
Springer, first ed.
Lehmann, E. L. and J. P. Romano (2005): Testing statistical hypotheses, Springer Texts in
Statistics, New York: Springer, third ed.
Lehmann, E. L. and C. Stein (1948): “Most powerful tests of composite hypotheses. I. Normal
distributions,” The Annals of Mathematical Statistics, 19, 495–516.
Li, C. and U. K. M ̈uller (2021): “Linear regression with many controls of limited explanatory
power,” Quantitative Economics, 12, 405–442.
Moreira, H. and M. J. Moreira (2013): Contributions to the theory of optimal tests, Citeseer.
——— (2019): “Optimal two-sided tests for instrumental variables regression with heteroskedastic
and autocorrelated errors,” Journal of Econometrics, 213, 398–433.
M ̈uller, U. K. (2025): “A more robust t-test,” Review of Economics and Statistics, 107, 786–802.
M ̈uller, U. K. and Y. Wang (2017): “Fixed-k asymptotic inference about tail properties,”
Journal of the American Statistical Association, 112, 1334–1343.
M ̈uller, U. K. and M. W. Watson (2016): “Measuring uncertainty about long-run predic
tions,” Review of Economic Studies, 83, 1711–1740.
——— (2018): “Long-run covariability,” Econometrica, 86, 775–804.
——— (2020): “Low-frequency analysis of economic time series,” preparation. In Handbook of
Econometrics. Elsevier.
35

Muralidharan, K., M. Romero, and K. W ̈uthrich (2025): “Factorial designs, model selec
tion, and (incorrect) inference in randomized experiments,” Review of Economics and Statistics,
1–16.
Nemirovski, A., A. Juditsky, G. Lan, and A. Shapiro (2009): “Robust stochastic approxi
mation approach to stochastic programming,” SIAM Journal on optimization, 19, 1574–1609.
Nemirovski, A. and D. Yudin (1983): Problem Complexity and Method Efficiency in Optimiza
tion, A Wiley-Interscience publication, Wiley.
Polyak, B. T. and A. B. Juditsky (1992): “Acceleration of stochastic approximation by
averaging,” SIAM journal on control and optimization, 30, 838–855.
Rudin, W. (2005): Functional Analysis., International Series in Pure and Applied Mathematics,
McGraw-Hill, New York.
Rudloff, B. and I. Karatzas (2010): “Testing composite hypotheses via convex duality,”
Bernoulli, 1224–1239.
Ruppert, D. (1988): “Efficient estimations from a slowly convergent Robbins-Monro process,”
Tech. rep., Cornell University Operations Research and Industrial Engineering.
Simons, S. (1995): Minimax Theorems and Their Proofs, Boston, MA: Springer US, 1–23.
Srebro, N. and K. Sridharan (2012): “On convex optimization, fat shattering and learning,”
unpublished note.
Stein, E. M. and R. Shakarchi (2011): Functional analysis: introduction to further topics in
analysis, vol. 4, Princeton University Press.
Stevens, W. L. (1950): “Fiducial Limits of the Parameter of a Discontinuous Distribution,”
Biometrika, 37, 117–129.
36

Van der Vaart, A. W. (2000): Asymptotic statistics, vol. 3, Cambridge university press.
Williamson, D. P. and D. B. Shmoys (2011): The design of approximation algorithms, Cam
bridge university press.
A Proofs of Main Results
A.1 Proof of Lemma 1
Proof. To prove convexity, note that by definition
f (λκ + (1 − λ)κ′) = sup
φ
∫
φgdν −
M ∑
m=1
(λκm + (1 − λ)κ′
m)
[∫
φfmdν − α
] ,
where we have slightly abused notation by omitting the fact that φ is allowed to be an arbitrary
element of the space of all randomized tests. Consequently,
f (λκ + (1 − λ)κ′) ≤ λ sup
φ
{
φgdν −
M ∑
m=1
κm
[∫
φfmdν − α
]}
+ (1 − λ) sup
φ
{∫
φgdν −
M ∑
m=1
κ′
m
[∫
φfmdν − α
]}
= λf (κ) + (1 − λ)f (κ′).
Therefore, f is convex in κ.
To show that ∇f (κ) is a subgradient of f at κ ∈ R+M , we need to show that for any κ′ ∈ R+M
f (κ) ≤ f (κ′) + ∇f (κ)(κ − κ′).
37

Note first that the test φκ solves the problem
sup
φ:Y →[0,1]
∫
φgdν −
M ∑
m=1
κm
[∫
φfmdν − α
]
. (30)
We can then rewrite (30) as
sup
φ:Y →[0,1]
∫ φ
(
g−
M ∑
m=1
κmfm
)
dν + α
M ∑
m=1
κm.
Consequently,
f (κ) =
∫
φκgdν −
M ∑
m=1
κm
[∫
φκfmdν − α
]
=
∫
φκgdν −
M ∑
m=1
(κm − κ′
m)
[∫
φκfmdν − α
]
−
M ∑
m=1
κ′
m
[∫
φκfmdν − α
]
=
∫
φkgdν −
M ∑
m=1
κ′
m
[∫
φκfmdν − α
]
+ ∇f (κ)(κ − κ′)
≤ f (κ′) + ∇f (κ)(κ − κ′).
A.2 Proof of Lemma 2
Proof. Since X ⊂ R+M we have
inf
κ∈RM
+
f (κ) ≤ inf
κ∈X f (κ).
Thus, it is sufficient to show that
inf
κ∈RM
+
f (κ) ≥ inf
κ∈X f (κ).
38

Suppose this is not the case and that
v ̄ ≡ inf
κ∈RM
+
f (κ) < inf
κ∈X f (κ).
By definition of infimum, for any ǫ > 0 there exists κǫ ∈ R+M such that
v ̄ ≤ f (κǫ) < v ̄ + ǫ.
By choosing ǫ small enough, we can guarantee the existence of an element κǫ ∈ R+M such that
f (κǫ) < v ̄ + ǫ < inf
κ∈X f (κ).
Since X and (R+M \X ) form a partition of R+M , it must be the case that either κǫ ∈ X or κǫ ∈
(R+M \X ). Clearly, we cannot have κǫ ∈ X (as this would immediately yield a contradiction). Thus,
we must have κǫ ∈ (R+M \X ).
Note that at κ = 0,
f (0) =
∫ φ
0gdν ≤
∫
gdν = 1.
But also, for any κ such that ‖κ‖1 > 1/α,
f (κ) = sup
φ:Y →[0,1]
∫ φ
[
g−
M ∑
m=1
κmfm
]
dν + α
M ∑
m=1
κm ≥
M ∑
m=1
κmα > 1.
Therefore,
1 < f (κǫ) < inf
κ∈X f (κ) ≤ f (0) ≤ 1.
This yields a contradiction. We conclude that v ̄ ≡ infκ∈RM
+ f (κ) = infκ∈X f (κ).
39

A.3 Proof of Theorem 1
Proof of Part 1 of the Theorem: Let κt be a realization of an arbitrary X -valued random
vector. Let ̂Gm,N (κt) be the m-th coordinate of ̂GN (κt). If suffices to show that if (Ym,1, . . . , Ym,N )
are i.i.d. random variables with distribution Y ∼ fm sampled independently of the realized value
of κt, then E[ ̂Gm,N (κt)|κt] = − (∫ φκfmdν − α).
By definition of ̂Gm,N (κt),
E[ ̂Gm,N (κt)|κt] = −E
[ 1 N
N ∑
n=1
φκt (Ym,n)
∣∣∣κt
]
+α
= −E
[
φκt (Ym,n)
∣∣∣κt
]
+ α,
where the last line follows from the fact that (Ym,1, . . . , Ym,N ) are i.i.d. according to fm, indepen
dently of the value of κt. Since fm is the p.d.f. of Y relative to the σ-finite measure ν, Problem 1,
Chapter 5, p. 177 of Dudley (2002) implies
E
[
φκt (Ym,n)
∣∣∣κt
] =
∫
φκt fm dν.
Therefore, ̂GN (κt) is an unbiased estimator of the subgradient of f at the realized κt.
Proof of Part 2 of the Theorem: Let ̂GN (κt) be the unbiased estimator of the subgradient
of f at κt. We provide an explicit solution for the problem
κt+1 = arg min
κ∈X ∩RM
++
η ̂GN (κt)⊤κ + DΦ(κ, κt), (31)
when Φ(κ) = ∑M
m=1 κm ln(κm). By definition of Bregman divergence,
DΦ(κ, κt) = Φ(κ) − Φ(κt) − 〈∇Φ(κt), κ − κt〉.
40

Consequently, κt+1 is the solution to the following optimization problem
min
κ∈RM
++
η ̂GN (κt)⊤κ +
M ∑
m=1
κm ln (κm/κt,m) −
M ∑
m=1
(κm − κt,m), (32)
subject to the constraint
M ∑
m=1
κm ≤ 1/α.
Let μ denote the Lagrange multiplier associated with this constraint. Thus, the first-order conditions
of the problem for each κt+1,m become:
η ̂Gm,N (κt) + ln(κt+1,m/κt,m) + μ = 0, (33)
where ̂Gm,N (κt) is the m-th entry of ̂GN (κt). The first-order condition in (33) can be written as
κt+1,m = κt,m exp
(
−η ̂Gm,N (κt)
)
exp (−μ) .
Two cases to consider. First, if
M ∑
m=1
κt,m exp
(
−η ̂Gm,N (κt)
)
< 1/α,
then μ = 0 and
κt+1,m = κt,m exp
(
−η ̂Gm,N (κt)
)
. (34)
Second, if
M ∑
m=1
κt,m exp
(
−η ̂Gm,N (κt)
)
≥ 1/α,
41

then μ > 0 and ∑M
m=1 κt+1,m must equal 1/α. Consequently,
κt+1,m = 1
α·
κt,m exp
(
−η ̂Gm,N (κt)
)
∑M
m=1 κt,m exp
(
−η ̂Gm,N (κt)
) , (35)
which can be achieved by setting
μ = ln
(
α
M ∑
m=1
κt,m exp
(
−η ̂Gm,N (κt)
)) .
Proof of Part 3 of the Theorem: The initial condition κ1 solves:
min
κ∈RM
++
M ∑
m=1
κm ln(κm) s.t. ‖κ‖1 =
M ∑
m=1
κm ≤ 1/α. (36)
We re-parameterize this problem by defining
K ≡ ‖κ‖1, pm ≡ κm/K, p = (p1, . . . , pM )⊤.
Since κ ∈ R+M+, then K > 0 and wm > 0 for all m = 1, . . . , M . Moreover, if we denote by ∆M−1
the simplex in RM and use int(∆M−1) to denote its interior, the optimization problem in (36) thus
becomes the nested optimization problem
min
K >0
(
min
p∈int(∆M−1) K
( M ∑
m=1
pm ln(pm)
)
+ K ln(K)
)
s.t. K ≤ 1/α. (37)
Thus, we first solve the inner problem which consists of finding the distribution in the simplex
with the smallest negative entropy:
min
p∈int(∆M −1 )
M ∑
m=1
pm ln(pm).
42

It is known that the solution of this problem is to set pm = 1/M. We verify this below for the sake
of exposition. The first order conditions are
1 + ln(pm) + μ = 0,
where μ is the Lagrange multiplier associated with ‖p‖1 = 1. Solving for pm yields
pm = exp (−(1 + μ))
which implies (by summing the left side over m = 1, . . . , M):
1
M = exp (−(1 + μ)) .
We conclude that p∗m = 1/M is the optimal direction of κ1. We now find its scale by solving the
outer optimization problem
min
K>0 K
( M ∑
m=1
1
M ln
(1
M
))
+ K ln(K) = min
K>0 K(ln(K) − ln(M )) s.t. K ≤ 1/α. (38)
Without the constraint, the objective function has a global minimum at K∗ satisfying
ln(K∗) + 1 − ln(M) = 0,
or equivalently, K∗ = M/ exp(1). It is also decreasing for K < K∗ and increasing for larger values.
Therefore, the solution to the problem in (38) is
K∗ =


M
exp(1) if 1 ≤ M < exp(1)
α
1
α if M ≥ exp(1)
α.
,
43

Thus, the initial condition is
κ1 =


(1
exp(1) , . . . , 1
exp(1)
)
if 1 ≤ M < exp(1)
α,
(1
Mα, . . . , 1
Mα
) if M > exp(1)
α.
A.4 Proof of Theorem 2
The approximation error of the numerical iteration consists of two parts: optimization error and
estimation error. The former is intrinsic to the optimization algorithm when applying the exact
(sub)gradient, while latter is induced by the estimation error of the unknown subgradient.
Proof. By Lemma 1, the function f (·) in the dual problem (5) is convex. Consequently, for any
κ ∈ X,
f
( 1 T
T ∑
t=1
κt
)
− f (κ) ≤ 1
T
T ∑
t=1
f (κt) − f (κ). (39)
Note under the S-MD routine of Algorithm 1, κt is a random variable. Part 1 of Theorem 1 showed
that, given the realized value of κt, ̂GN (κt) is an unbiased estimator of the subgradient of f at
κt; that is, E
[ ̂GN (κt)
]
= ∇f (κt)⊤. Consequently, Equation (39) and the definition of subgradient
imply
f
( 1 T
T ∑
t=1
κt
)
− f (κ) ≤ 1
T
T ∑
t=1
∇f (κt) (κt − κ)
=1
T
T ∑
t=1
(
∇f (κt)⊤ − ̂GN (κt)
)⊤
(κt − κ) (40)
+1
T
T ∑
t=1
̂GN (κt)⊤ (κt − κ) . (41)
It follows by Bubeck (2015, proof of Theorem 4.2 and Equation (10) on p.307) that (41) is
bounded above by
DΦ(κ, κ1)
ηT + η
2ρ
1 T
T ∑
t=1
‖ ̂GN (κt)‖2
∞,
44

where ρ is the parameter of the convexity of Φ(·) with respect to ‖ · ‖1. We have already proved
in Lemma 4 that ρ = α/2. Additionally, Dφ(κ, κ1) ≤ ln(M)/α. 13 Accordingly, (41) is bounded
above by
Dφ(κ, κ1)
ηT + η
2ρ
1 T
T ∑
t=1
‖ ̂GN (κt)‖2
∞ ≤ ln(M )
αT η + η(1 − α)2
α , (42)
where ‖ · ‖∞ is the sup norm, and where the last inequality follows from the fact that α < 1/2.
Since
T=
⌈ 4(1 − α)2
α2ǫ2 · ln(M )
⌉
, and η = α · ǫ
2(1 − α)2 ,
we conclude that (41) is at most ǫ. Next, we upper bound the term (40). Define
∆t ≡ ̂GN (κt) − ∇f (κt). (43)
Given t and κt, we write ∆t as an average of N independent vectors, i.e.,
∆t = 1
N
N ∑
n=1
∆t,n,
where ∆t,n ≡
(
φκt(Y (t)
1,n ) −
∫
φκtf1dν, ..., φκt(Y (t)
M,n) −
∫
φκtfM dν
)
, n = 1, 2, ..., N.
Denote the M × N random vectors at time t as Yt ≡ (Ym(t,)n), and let Ft = σ(Y1, Y2, ..., Yt) denote
the canonical filtration of Yt. From our iteration, κt is Ft-predictable, i.e., σ(κt) ⊂ Ft−1 for each t.
Also note that ‖κt − κ∗‖1 ≤ 2/α for any κ ∈ X . Thus, applying Lemma 5 with Xt = κt − κ and
13When M > e
α , meaning the problem is high in dimension, then
R2 ≡ sup
κ∈X
Φ(κ) − Φ(κ1)
=1
α ln
(1
α
)
−1
α
( ln
(1
α
)
− ln(M )
)
=1
α ln(M ).
45

L = 2/α, we conclude that, for a given confidence level Ω > 0, (40) is upper bounded by
4Ω
α√T N = 2Ωǫ
√(1 − α)2 ln(M)N ,
with probability at least 1 − exp(−Ω2). The conclusion follows from combining the upper bound
for (41) and (40), and take κ = κ∗, the solution to the dual problem.
A.5 Proof of Theorem 3
Proof. First, it is already derived in the proof for Theorem 2 that for any κ ∈ X ,
1 T
T ∑
t=1
̂GN (κt)⊤ (κt − κ) ≤ ln(M )
αηT + η(1 − α)2
α = ǫ (44)
For a given κ ∈ X , apply Lemma 5 with Xt = κ and Xt = κt, respectively. Notice that both
‖κ‖1 ≤ 1/α, ‖κt‖1 ≤ 1/α hold, then
Pr
[ 1 T
T ∑
t=1
( ̂GN (κt) − ∇f (κt))⊤κ < 2Ω
α√T N
]
≥ 1 − exp(−Ω2),
and Pr
[ 1 T
T ∑
t=1
−( ̂GN (κt) − ∇f (κt))⊤κt < 2Ω
α√T N
]
≥ 1 − exp(−Ω2).
Combining with (44), we have
Pr
[ 1 T
T ∑
t=1
̂GN (κt)⊤κt − 1
T
T ∑
t=1
∇f (κt)⊤κ < ǫ + 2Ω
α√T N
]
≥ 1 − exp(−Ω2), (45)
and similarly,
Pr
[ 1 T
T ∑
t=1
∇f (κt)⊤κt − 1
T
T ∑
t=1
̂GN (κt)⊤κ < ǫ + 2Ω
α√T N
]
≥ 1 − exp(−Ω2). (46)
46

Note (45) implies a high probability bound for the Type I error: take κm = 1/α for m = j and
κm = 0 for other m 6= j. Then,
1 T
T ∑
t=1
∇f (κt)⊤κ = 1
T
T ∑
t=1
M ∑
m=1
κm(α −
∫
φtfmdν)
=α· 1
α− 1
T
1 α
T ∑
t=1
∫
φtfmdν = 1 − 1
α
∫
φ ̄fmdν.
Taking it back to (45), we have
∫
φ ̄fmdν ≤ α
(
1− 1
T
T ∑
t=1
̂GN (κt)⊤κt + ǫ + 2Ω
α√T N
)
with probability at least 1 − exp(−Ω2). The first statement follows from the arbitrariness of m.
For the second statement, note according to (46), we have
1 T
T ∑
t=1
∇f (κt)⊤κt − ǫ − 2Ω
α√T N ≤ 1
T
T ∑
t=1
̂GN (κt)⊤κ
with probability at least 1 − exp(−Ω2). Add the power of φ ̄, ∫ φ ̄gdν, to both sides. Notice that
power(φ ̄) + 1
T
T ∑
t=1
∇f (κt)⊤κt = 1
T
T ∑
t=1
f (κt) ≥ v ̄,
taking κ = 0 leads to
power(φ ̄) ≥ v ̄ − ǫ − 2Ω
α√T N ,
with probability at least 1 − exp(−Ω2). This concludes the proof of the second statement of Theo
rem 3.
47

B Online Appendix
B.1 Additional Lemmas
Lemma 3. The function Φ : R+M+ → R given by Φ(κ) = ∑M
m=1 κm ln(κm) is a mirror map.
Proof. It is sufficient to verify the conditions i)-ii)-iii) given at the beginning of Section (3.1), which
are taken from Section 4.1 in Bubeck (2015). We first verify i); namely that Φ(·) is differentiable
and strictly convex. The gradient of Φ at any κ ∈ R+M+ is:
∇Φ(κ) = (1 + ln(κ1), ..., 1 + ln(κM )).
Thus, Φ is differentiable in its domain. Moreover, for any κ ∈ R+M+ the Hessian takes the form


1
κ1 0 ... 0
01
κ2 ... ...
... ... ... ...
0 ... ... 1
κM


,
which is a positive definite matrix. Therefore, Φ(·) is strictly convex in its domain.
Next, we verify ii); namely, that ∇Φ(R+M+) = RM . Since ln(R++) = R, condition ii) holds.
Lastly, we verify condition iii), which in this case is equivalent to showing that for any κ∗ with
one or more entries equal to zero satisfies
κli→mκ∗ ||∇Φ(RM
++)|| = ∞.
Note that, if the m-th entry of κ∗ is zero, then
lim
x→0+ 1 + ln(x) = −∞.
OA-1

Therefore, condition iii) holds. Therefore, Φ(·) is a mirror map.
Lemma 4. The function Φ(κ) = ∑M
m=1 κm ln(κm) restricted on X is α
2 -strongly convex w.r.t. ‖ · ‖1.
Proof. We intend to prove, for any κ1, κ2 ∈ X ,
Φ(κ1) − Φ(κ2) − 〈∇Φ(κ2), κ1 − κ2〉 ≥ α
4 ‖κ1 − κ2‖21 (47)
Define K1 ≡ ‖κ1‖1, K2 ≡ ‖κ2‖1, and p1 = κ1/‖κ1‖1, p2 = κ2/‖κ2‖1, we write
κ1 = K1p1, κ2 = K2p2.
Then, we decompose the left-hand side of (47) as
Φ(κ1) − Φ(κ2) − 〈∇Φ(κ2), κ1 − κ2〉 = K1 ln K1
K2
− (K1 − K2) + K1
M ∑
m=1
p1,m ln p1,m
p2,m
Notice that:
1. the function Φ : (0, 1
α] → R defined by Φ(x) = x ln(x) is α-strongly convex, so
K1 ln K1
K2
− (K1 − K2) ≥ α
2 |K1 − K2|2.
2. p1, p2 are on the (M − 1)-dimensional simplex. We can apply the Pinsker’s inequality,
K1
M ∑
m=1
p1,m ln p1,m
p2,m
≥ K1
2 ‖p1 − p2‖21 ≥ α
2 ‖K1(p1 − p2)‖21.
OA-2

Together we get
Φ(κ1) − Φ(κ2) − 〈∇Φ(κ2), κ1 − κ2〉 ≥ α
2 |K1 − K2|2 + α
2 ‖K1(p1 − p2)‖21
=α
2
(‖K1p2 − K2p2‖21 + ‖K1p1 − K1p2‖21
)
≥α
4 (‖K1p2 − K2p2‖1 + ‖K1p1 − K1p2‖1)2
≥α
4 ‖K1p1 − K2p2‖21.
Lemma 5. Suppose our unbiased estimator ̂GN (κt) is evaluated on M × N independent draws in
Yt. Let ∆t be defined as in (43). Then, for any γ > 0 and any {Xt ∈ RM , t = 1, 2, ...} that is
Ft-predictable, if there exists a constant L such that ‖Xt‖1 ≤ L, we have
E
[
exp
( γ T
T ∑
t=1
〈Xt, ∆t〉
)]
≤ exp
( γ2L2
TN
) ,
which leads to
Pr
[ 1 T
T ∑
t=1
〈Xt, ∆t〉 ≥ δ
]
≤ exp
(
−T Nδ2
4L2
) .
Moreover, for a given confidence level Ω > 0, we have
Pr
[ 1 T
T ∑
t=1
〈Xt, ∆t〉 ≥ 2LΩ
√T N
]
≤ exp(−Ω2).
Proof. By the definition of ∆t in (43) we have
∆t = 1
N
N ∑
n=1
∆t,n,
where ∆t,n ≡
(
φκt(Y (t)
1,n ) −
∫
φκtf1dν, ..., φκt(Y (t)
M,n) −
∫
φκtfM dν
)
, n = 1, 2, ..., N.
OA-3

Note first that for any t, n, ‖∆t,n‖∞ ≤ 1. Since, by assumption, ‖Xt‖1 ≤ L, we have
E
[
exp
( 〈Xt, ∆t,n〉2 L2
) ∣∣∣Ft−1
]
≤ exp(1).
Apply the same steps as in Nemirovski et al. (2009). Consider first the case in which 0 < γL ≤ 1.
In this case, we apply ex ≤ x + ex2,
E[ exp (γ〈Xt, ∆t,n〉) |Ft−1
] ≤ E[ exp (γ2〈Xt, ∆t,n〉2) |Ft−1
] ≤ exp (γ2L2) ,
where the last inequality follows from the fact that ‖∆t,n‖∞ ≤ 1 and ‖Xt‖1 ≤ L. Consider now the
case in which γL > 1. Note that
E[ exp (γ〈Xt, ∆t,n〉) |Ft−1
] ≤ E [exp (γL) ∣∣Ft−1
] ≤ exp (γ2L2) .
Therefore, in both cases,
E[exp(γ〈Xt, ∆t,n〉)|Ft−1] ≤ exp(γ2L2).
Because {∆t,n, n = 1, 2, .., N } are independent, we have
E[exp(γ〈Xt, ∆t〉)|Ft−1] = ΠN
n=1 E
[
exp
(γ
N 〈Xt, ∆t,n〉
) ∣∣∣Ft−1
]
≤ exp
( γ2L2
N
)
. (48)
OA-4

Applying Law of Iterated Expectations sequentially yields
E
[
exp
( γ T
T ∑
t=1
〈Xt, ∆t〉
)]
=E
[
E
[
exp
( γ T
T ∑
t=1
〈Xt, ∆t〉
) ∣∣∣FT −1
]]
=E
[
E
[
exp
(γ
T 〈XT , ∆T 〉
) ∣∣∣FT −1
]
· exp
( γ T
T −1
∑
t=1
〈Xt, ∆t〉
)]
≤E
[
exp
(
γ2L2
T 2N + γ
T
T −1
∑
t=1
〈Xt, ∆t〉
)]
(by (48))
≤ ... ≤ exp
( γ2L2
TN
) .
It follows by Markov’s inequality that
Pr
[ 1 T
T ∑
t=1
〈Xt, ∆t〉 ≥ δ
]
≤ E[exp( γ
T
∑T
t=1〈Xt, ∆t〉)]
exp(γδ) ≤ exp
( γ2L2
TN − γδ
)
, ∀γ > 0.
For a given confidence level Ω > 0, applying the above relation with γ = T Nδ
2L2 abd δ = 2LΩ
√T N yields
the desired conclusion.
B.2 Duality Results
In this section we formalize the connection between the optimization problems (3) and (5). Through
out this section we assume that (Y, F , ν) is a separable measure space in the sense of Exercise 10,
Chapter 1 in Stein and Shakarchi (2011).
Proposition 1. i) There exists a test φ∗ that solves (3); that is, φ∗ maximizes ∫ φgdν among all
level-α tests. ii) Furthermore, there exists an optimizer κ∗ to the dual problem (5), and the value
of the dual problem is finite. iii) Moreover, for any solution κˆ of the dual (5), and for any test φˆ
that solves (3), the pair (φˆ, ˆκ) satisfy:
OA-5

φˆ(y) = 1, when g(y) >
M ∑
m=1
κˆmfm(y),
φˆ(y) = 0, when g(y) <
M ∑
m=1
κˆmfm(y),
(49)
and the complementary slackness,
ˆκm
(∫
φˆfmdν − α
)
= 0, ∀m ∈ [M]. (50)
Proof. Let ν denote the σ-finite measure defined over the measurable space (Y, F ). In a slight
abuse of notation, denote by L∞(Y) the set of essentially bounded real-valued measurable functions
on (Y, F ). Let L1(Y) be the space of all real-valued measurable functions f : Y → R that are
integrable with respect to ν; that is ∫ |f |dν < ∞. Endow L∞(Y) with the weak∗-topology; see
Rudin (2005), p. 67, 68. By definition, a sequence {φn}n∈N ⊆ L∞(Y) converges to φ in the weak∗
topology if and only if ∫
f φndν →
∫
f φdν, for any f ∈ L1(Y),
see p. 62-68 of Rudin (2005). It is known that when endowed with the weak∗ topology, the set
L∞(Y) is a linear topological space.
Proof of Statement i). Define the set of all tests
C := {φ ∈ L∞(Y) | 0 ≤ φ(y) ≤ 1 for ν-a.e. },
and consider the subset of all α-level tests
Cα :=
{
φ∈C |
∫
φfmdν ≤ α for all m = 1, . . . , M
} .
Note that Cα is nonempty since φ0 ∈ Cα for any α. By Lemma 6, the set Cα is compact under the
OA-6

weak∗-topology. As the objective function in (3) is continuous in the weak∗-topology, we conclude
that there exists a test φ∗ that solves (3).
Proof of Statement ii). Recall the Lagrangian
L(φ, κ) =
∫
φgdν −
M ∑
m=1
κm
[∫
φfmdν − α
] .
We first show that Sion’s minimax theorem holds, i.e.,
sup
φ∈C
min
κ∈RM
+
L(φ, κ) = min
κ∈RM
+
sup
φ∈C
L(φ, κ) := v. (51)
First, by Lemma 6, C is a convex, compact subset of L∞(Y) when endowed with the weak∗ topology.
It is clear that RM
+ is a convex subset of RM . Second, since we endowed L∞(Y) with the weak∗
topology, then, by definition, for any fixed κ, the functional L(·, κ) : C → R is a continuous
functional, that is also linear. Similarly, or any fixed φ, L(φ, ·) : RM
+ → R is a continuous and linear
function of κ. Therefore, all conditions of Sion’s minimax theorem are verified; see Simons (1995,
Theorem 3).
Since
sup
φ∈Cα
∫
φgdν = sup
φ∈C
min
κ∈RM
+
L(φ, κ),
and by part i) of Proposition 1 there exists a test φ∗ ∈ Cα such that
∫
φ∗gdν = sup
φ∈Cα
∫
φgdν,
then
0 ≤ v ≤ 1.
OA-7

Therefore, by definition of minimum, there exists multipliers κ∗ ∈ R+M such that
0 ≤ sup
φ∈C
L(φ, κ∗) = min
κ∈RM
+
sup
φ∈C
L(φ, κ) := v ≤ 1.
Proof of Statement iii). Let ˆκ be an arbitrary solution to the dual problem in (5). Let φˆ be
an arbitrary solution to the primal (3). First, we would like to show that
inf
κ∈RM
+
L(φˆ, κ) = sup
φ∈C
min
κ∈RM
+
L(φ, κ), (52)
which means that φˆ solves the maxmin problem. To this end, note that
∫
φˆgdν = sup
φ∈Cα
∫
φgdν = sup
φ∈C
min
κ∈RM
+
L(φ, κ).
Moreover, for any φ ∈ Cα,
min
κ∈RM
+
L(φ, κ) =
∫
φgdν.
We conclude that
min
κ∈RM
+
L(φˆ, κ) =
∫
φˆgdν = sup
φ∈Cα
∫
φgdν = sup
φ∈C
min
κ∈RM
+
L(φ, κ).
This establishes (52). By (52) and (51), we have
L(φˆ, κˆ) ≥ min
κ∈RM
+
L(φˆ, κ) = sup
φ∈C
min
κ∈RM
+
L(φ, κ)
= min
κ∈RM
+
sup
φ∈C
L(φ, κ) = sup
φ∈C
L(φ, ˆκ) ≥ L(φˆ, ˆκ).
Then, note that L(φˆ, ˆκ) = infκ∈RM
+ L(φˆ, κ), implying (50). Also, L(φˆ, ˆκ) = supφ∈C L(φ, κˆ), implying
(49).
OA-8

Below is a lemma proving that the domain of the primal problem is compact.
Lemma 6. Let (Y, F , ν) be a separable measure space in the sense of Exercise 10, Chapter 1 in
Stein and Shakarchi (2011) and let ν be a σ-finite measure. Define
C := {φ ∈ L∞(Y) | 0 ≤ φ(y) ≤ 1 for ν-a.e. y ∈ Y},
and
Cα :=
{
φ∈C |
∫
φfmdν ≤ α for all m = 1, . . . , M
} .
Then, C and Cα are compact in the weak∗ topology (where L∞(Y) is viewed as the dual space of
L1(Y)). Moreover, C is a convex subset of L∞(Y).
Proof. Recall that L∞(Y) is identified with the dual of L1(Y), and the weak∗ topology on L∞(Y)
is the weakest topology that makes all maps
φ 7→ 〈f, φ〉 :=
∫
Y
φf dν,
continuous for every f ∈ L1(Y). By the Banach–Alaoglu theorem (Rudin, 2005, p.68), the closed
unit ball
B :=
{
φ ∈ L∞(Y)
∣∣∣
∣∣∣∣
∫
Y
φf dν
∣∣∣∣ ≤ 1 for all f ∈ L1(Y) with ‖f ‖1 ≤ 1
}
is compact in the weak∗-topology.
Observe that
C := {φ ∈ L∞(Y) | 0 ≤ φ(y) ≤ 1 for ν-a.e. y ∈ Y}
is a subset of B, since for any φ ∈ C and any f ∈ L1(Y) with ‖f ‖1 ≤ 1, one has
∣∣∣∣
∫
Y
φf dν
∣∣∣∣ ≤
∫
Y
|φ||f | dν ≤
∫
Y
|f | dν ≤ 1.
OA-9

We now show that C is weak∗-sequentially closed. Suppose that {φn}n∞=1 is a sequence in C that
converges to some φ ∈ L∞(Y) in the weak∗ topology. Assume for contradiction that φ ∈/ C; then
either the set A+ := {y ∈ Y | φ(y) > 1} or A− := {y ∈ Y | φ(y) < 0} has positive measure w.r.t.
ν. Without loss of generality, assume that ν(A+) > 0. Define the function
f (y) := 1A+(y)
ν(A+) .
Then f ∈ L1(Y) and ‖f ‖1 = 1. Since each φn ∈ C, we have
∫
Y
φnf dν ≤ 1 for all n.
By the weak∗ convergence we obtain
nli→m∞
∫
Y
φnf dν =
∫
Y
φf dν ≤ 1
On the other hand, because (φ − 1)f is positive we have
∫
Y
(φ − 1)f dν ≥ 0 =⇒
∫
Y
φf dν ≥ 1.
This implies that ∫ φf dν = 1, which in turn gives ∫ (φ − 1)f dν = 0. Such equality holds only
when (φ − 1)f = 0 for ν-almost surely. However, (φ − 1)f > 0 on A+. This contradicts the fact
that ν(A+) > 0! This contradiction shows that φ(y) ∈ [0, 1] for ν-almost every y ∈ Y, i.e., φ ∈ C.
Therefore, C is sequentially closed in the weak∗-topology. Since (Y, F , ν) is a separable measure
space, then L1(Y) is separable; see Exercise 10, Chapter 1 in Stein and Shakarchi (2011). Therefore,
Theorem 3.16 in Rudin (2005) p. 70 implies that B (with its subspace weak∗ topology) is compact
and metrizable. This means that the sequential closure of C coincides with its closure; thus showing
that C is closed in the weak∗ topology. Since C is a closed subset of the compact set B, it is compact
OA-10

in the weak∗ topology. The proof that Cα is compact is entirely analogous and we omit it for the
sake of brevity.
Finally, C is convex because if φ1, φ2 ∈ C and t ∈ [0, 1], then for ν-almost every y ∈ Y,
(1 − t)φ1(y) + tφ2(y) ∈ [0, 1],
which implies that (1 − t)φ1 + tφ2 ∈ C.
B.3 Theoretical Results on φ ̄κT
B.3.1 Asymptotic analyses of φκT
Lemma 7. Suppose the conditions of Theorem 2 hold. Then, we have f (κT ) p → υ ̄ as T → ∞.
Proof. For each T , let εT = 2(1 − α)
α
√ ln M
T , ηT = α
2(1 − α)2 εT .
Denote by {κT,j}T
j=1 the sequence generated by Algorithm 1 with step number T and step size ηT .
Then, κT = 1
T
∑T
j=1 κT,j. It follows by Theorem 2 that, for any Ω > 0,
Pr
{
|f (κ ̄T ) − υ ̄| >
(
1 + 2Ω
√(1 − α)2N ln M
)
εT
}
< exp (−Ω2) .
For each ε > 0, pick Ω = εα
8
√N T . Then, for all T > ln M
(
εα
4(1−α) )2 , we have
Pr {|f (κ ̄T ) − υ ̄| > ε} < exp
(
− ε2α2N T
64
) ,
implying f (κT ) p → υ ̄ as T → ∞.
Lemma 7 shows that, κT is also asymptotically a least favorable distribution. This result is
expected given Theorem 2’s finite-sample numerical convergence result. Next, we show that, with
OA-11

additional regularity conditions, the Neyman-Pearson test φκT based on κT is asymptotically opti
mal as T → ∞.
Proposition 2. Suppose the conditions of Theorem 2 hold. In addition, suppose for all κ ∈ R+
M,
we have g(y) − ∑M
m=1 κmfm(y) 6= 0 for ν-almost all y. Then, the following statements are true:
1. ∫ φκT gdν p → v ̄ as T → ∞;
2. For each convergent subsequence {κTt} of κT , we have, for each j ∈ [M],
Pr
{∫
φκTt (y)fjdν ≤ α
}
→ 1, as t → ∞;
3. If κ∗ is unique, we have, for each j ∈ [M],
∫
φκT (y)fjdν p →
∫
φκ∗fjdν, as T → ∞.
Proof. First note, under the stated assumptions in the proposition, the absolute continuity of Fj, j =
1, . . . , M and G with respect to ν implies that, g(y) 6= ∑M
m=1 κ∗mfm(y) for Fj-almost all y, for each
j = 1 . . . M, and the same holds for G-almost all y as well. Together with Proposition 1, we have
that, for any solution of the dual κ∗, the test of form φκ∗, i.e.,
φκ∗(y) = 1, when g(y) >
M ∑
m=1
κ∗
mfm(y),
φκ∗(y) = 0, when g(y) ≤
M ∑
m=1
κ∗
mfm(y)
is such that
∫
φκ∗fmdν ≤ α, ∀m ∈ [M ],
∫
φκ∗gdν = υ ̄. (53)
OA-12

Moreover, dominated convergence theorem implies that the size function
αj(· ) =
∫
φ(·)fj dν : RM
+ → R+,
is continuous at all κ ∈ R+
M , for each j = 1, . . . , M, and the power function
π(· ) =
∫
φ(·)gdν : RM → R+
is continuous at all κ ∈ R+
M as well.
Proof of Part 1 of the Theorem: As κT is bounded, Prohorov’s Theorem (e.g., Theorem
2.4(ii) in Van der Vaart 2000) implies that there exists a converging subsequence {κTt} such that
κTt
→d XM as t → ∞, where XM is a random vector in R+M . Denote by PXM the probability measure
for the distribution of XM . Since f is continuous, continuous mapping theorem implies that, as
t → ∞,f (κTt) d → f (XM ). As we also know f (κT ) p → υ ̄ as T → ∞, conclude that f (κT ) d → υ ̄,
implying that f (κTt) →d υ ̄ as t → ∞ as well. Therefore, f (XM ) must share the same distribution
as υ ̄. Conclude that f (xM ) = υ ̄, for PXM -almost every xM . Since υ ̄ is the optimal value, this
implies that for PXM -almost every xM , we have f (xM ) = υ ̄ = infκ∈RM
+ f (x), i.e., xM solves the dual
problem. Therefore, due to (53), we have ∫ φxM gdν = v ̄ for PXM -almost every xM . Conclude that
∫ φXM gdν = υ ̄ with probability 1. By continuity of the power function π(· ) = ∫ φ(·)gdν in R+M ,
conclude further that as t → ∞,
π(κTt ) →d
∫
φXM gdν = v ̄.
As the preceding convergence claim holds for every convergent subsequence, conclude that π(κT ) →d
v ̄, as T → ∞, implying π(κT ) →p v ̄.
Proof of Part 2 of the Theorem: Analogous to the proof of part 1 of the theorem, consider
a convergent subsequence {κTt} that converges in distribution to some random vector XM ∈ R+M
OA-13

with a probability measure PXM for its distribution function. Note, by analogous arguments to the
proof of part 1, for PXM -almost every xM , we have
∫
φxM fjdν ≤ α, ∀j ∈ [M ]. (54)
Therefore, ∫ φXM fjdν ≤ α with probability 1 for each j ∈ [M]. The proof is further divided in
three steps.
Step 1: We show that αj(κTt) p → ∫ φXM fjdν for each j ∈ [M ]. Note since αj is bounded and
continuous, Portmanteau’s Lemma implies that
Eαj(κTt) → E
∫
φXM fjdν ≤ α
as t → ∞. As αj(κTt) is bounded, αj(κTt) is also uniformly integrable. Therefore, we have
αj(κTt) p →
∫
φXM fj dν
as t → ∞ for each j ∈ [M].
Step 2: We show that for any ǫ > 0, we have, as t → ∞, Pr{αj(κTt) ≤ α + ǫ} → 1. For any ǫ > 0,
it suffices to show that Pr{αj(κTt) > α + ǫ} → 0 as t → ∞. To this end, note for any 0 < δ < ǫ:
Pr{αj(κTt) > α + ǫ}
= Pr{αj(κTt) > α + ǫ, αj(κTt) −
∫
φXM fjdν > δ}
+ Pr{αj(κTt) > α + ǫ, αj(κTt) −
∫
φXM fjdν ≤ δ}
≤ Pr
{
αj(κTt) −
∫
φXM fjdν > δ
}
+ Pr
{∫
φXM fjdν > α + ǫ − δ
} .
OA-14

Note Pr{αj(κTt)−∫ φXM fjdν > δ} → 0 as t → ∞ by the conclusion from step 1, and Pr{∫ φXM fjdν >
α + ǫ − δ} = 0 since ǫ − δ > 0. Conclude that Pr{αj(κTt) > α + ǫ} → 0 as t → ∞.
Step 3: From step 2, we have that, for each ǫ > 0, Pr{αj(κTt) ≤ α + ǫ} → 1 as t → ∞. As ǫ is
arbitrary, conclude that Pr{αj(κTt) ≤ α} → 1, as t → ∞ as desired.
Proof of Part 3 of the Theorem: Since f (κT ) p → v ̄ = f (κ∗) as T → ∞ and κ∗ is the unique
solution of the dual, we must have κT
p → κ∗ as well given continuity of f . The conclusion then
follows immediately from continuous mapping theorem.
OA-15

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:10.534Z
- **Text Length:** 88140 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 62 of 62
