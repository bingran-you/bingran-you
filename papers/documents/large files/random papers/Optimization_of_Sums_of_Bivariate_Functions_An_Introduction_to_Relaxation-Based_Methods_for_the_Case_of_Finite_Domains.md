# PDF Document: Müller - 2025 - Optimization of Sums of Bivariate Functions An Introduction to Relaxation-Based Methods for the Cas.pdf

**File Path:** Müller - 2025 - Optimization of Sums of Bivariate Functions An Introduction to Relaxation-Based Methods for the Cas.pdf

**Processed Date:** 2026-02-10T18:17:01.252Z

**File Size:** 2848.22 KB

**Total Pages:** 59

**Extracted Pages:** 59

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3464

**Title:** Optimization of Sums of Bivariate Functions: An Introduction to Relaxation-Based Methods for the Case of Finite Domains

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Optimization of Sums of Bivariate Functions
An Introduction to Relaxation-Based Methods
for the Case of Finite Domains
A Preprint
Nils Mu ̈ller
Max Planck Institute for Informatics Saarbru ̈cken, Germany; Department of Mathematics Ruhr University Bochum Bochum, Germany
nmueller@mpi-inf.mpg.de
November 26, 2025
Abstract. We study the optimization of functions with n > 2 arguments that have a representation as a sum of several functions that have only 2 of the n arguments each, termed sums of bivariates, on finite domains.
The complexity of optimizing sums of bivariates is shown to be NP-equivalent and it is shown that there exists free lunch in the optimization of sums of bivariates.
Based on measure-valued extensions of the objective function, so-called relaxations, l2-approximation, and entropy-regularization, we derive several tractable problem formulations solvable with linear programming, coordinate ascent as well as with closed-form solutions.
The limits of applying tractable versions of such relaxations to sums of bivariates are investigated using general results for reconstructing measures from their bivariate marginals.
Experiments in which the derived algorithms are applied to random functions, vertex coloring, and signal reconstruction problems provide insights into qualitatively different function classes that can be modeled as sums of bivariates.
Keywords Linear Programming · Graphical Models · Relaxation · Inverse Problems
arXiv:2511.20607v1 [math.OC] 25 Nov 2025

Contents
1. Introduction 3
2. Approximation 7
3. Optimization 12 3.1. Fundamental Perspective . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 12 3.2. Relaxation Principle . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 17 3.3. Entropy-Regularized Relaxation Principle . . . . . . . . . . . . . . . . . . . . 25 3.4. Recovering Primal Solutions from Dual Solutions . . . . . . . . . . . . . . . . 30
4. Algorithms 33 4.1. Coordinate Descent for the Sum of Bivariates . . . . . . . . . . . . . . . . . . 33 4.2. Linear Programming for the Dual Linear Program . . . . . . . . . . . . . . . 33 4.3. Block Coordinate Ascent for the Dual Tree Relaxation . . . . . . . . . . . . . 36 4.4. Block Coordinate Ascent for the Dual Entropy-Regularized Tree Relaxation . 36
5. Experiments 40 5.1. Random Sums of Bivariates . . . . . . . . . . . . . . . . . . . . . . . . . . . . 40 5.2. Vertex Coloring . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 41 5.3. Signal Reconstruction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 42
6. Conclusion and Future Work 45
References 46
A. Additional Proofs 48 A.1. Lemmata for Theorem 3.5 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 48
B. Additional Code 55 B.1. Verifying that F ◦ p ̃ of Example 3.4 is not a sum of bivariates . . . . . . . . . 55 B.2. Pseudocode for TRW-S . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 57
C. Referenced Results 59

A preprint – November 26, 2025
1. Introduction
In this work, we study the optimization of functions with n > 2 arguments that have a representation as a sum of several functions that have only 2 of the n arguments each. Definition 1.1 introduces the rigorous definition that will be used throughout the work.
Definition 1.1 (Sum of Bivariates). Let the function F : Ω → R be defined on a product space Ω := Ω1 × · · · × Ωn of factors Ωi ⊂ R with a finite number of elements, where |Ωi| = Ki for all i ∈ V := N≤n and for some n, Ki ∈ N. We call the function F a sum of bivariates if there exists an index set E ⊆ {(i, j) ∈ V × V | i < j} and bivariate functions fi,j : Ωi × Ωj → R, (i, j) ∈ E with
F (x1, . . . , xn) =
X
(i,j)∈E
fi,j(xi, xj) ∀(x1, . . . , xn) ∈ Ω .
The function model can be interpreted as indexed by a graph: The vertices index arguments and the edges index bivariate summands. If the functions fi,j, (i, j) ∈ E were instead univariate, due to the additive structure, the problem would be separable into n individual univariate optimization problems. In this sense, the function model at hand presents the simplest non-trivial structure of its kind that makes no further assumptions on the functions fi,j, (i, j) ∈ E. Yet, it will turn out that both -
the structure of the bivariates fi,j, (i, j) ∈ E as well as the edge set E determine the hardness of optimizing F . We restrict ourselves to finite candidate spaces Ω for the benefit of a simpler and tractable problem. Generalizations to uncountable candidate spaces are formally possible and practically useful.
The main focus of this work lies on so-called relaxation-based optimization methods for sums of bivariates. A relaxation is a transformation of a function F : Ω → R to a function
μ ∈ M+
1 (Ω) 7→
Z
Ω
F dμ ,
where (probability) measures μ ∈ M+
1 (Ω) replace the domain Ω and evaluate to the integral of F with respect to μ. Next to being linear functionals on a closed convex space and due to the sparse structure of sums of bivariates, relaxations of sums of bivariates will be shown to have useful properties for optimization. This perspective allows us to derive a wide range of optimization methods for sums of bivariates employing linear programming, coordinate ascent, dynamic programming, and even closed-form solution approaches. To this -
end, we also study the l2-approximation and complexity theory of sums of bivariates. Experiments on random functions, vertex coloring, and signal reconstruction problems provide insights into qualitatively different function classes that can be modeled as sums of bivariates.
Motivation. From a theoretical perspective, the motivation in studying the optimization of sums of bivariates lies in the pursuit of tractable models for global optimization. Making no assumptions on the structure of individual bivariates fi,j, (i, j) ∈ E is an intriguing alternative to tractable models in the literature that often feature some sort of linear, convex, Lipschitz, or smooth structure.
From a practical perspective, sums of bivariates model a wide range of applications, where tractable instances often arise as inverse problems in signal reconstruction. In such problems, we often encounter a structure
F (x1, . . . , xn) =
X
i∈N≤n
Hi(xi) +
X
i,j∈N≤n
Gi,j(xi, xj) ∀(x1, . . . , xn) ∈ Ω ,
3

A preprint – November 26, 2025
where Ω := Ω1 × · · · × Ωn models the possible reconstructions and F : Ω → R models their quality based on argument-wise errors Hi : Ωi → R, i ∈ N≤n that are based on measured data, as well as pairwise regularization terms Gi,j : Ωi × Ωj → R, (i, j) ∈ N2
≤n. Clearly, such problems are sums of bivariates. Sums of bivariates also appear in various other applications, such as, in the Markowitz model for portifolio selection as the hybrid objective that is the linear combination of portfolio risk and return [Mar52], and as the Hamiltonian of so-called Sherrington–Kirkpatrick spin glasses [SK75] as well as that of Hopfield networks [Ama72].
Due to its linearity and its commutativity with the projection operation for bivariate functions, relaxation is a particularly promising transformation for the function class at hand. The pursuit of an elementary and consistent derivation of relaxation-based results from principles of mathematical optimization, approximation, and complexity theory inspires the focus of this work.
Related Work. Relaxation techniques for sums of bivariates were originally developed by [Sch76]. A review of associated linear programming formulations of optimization problems encountered in this work is given by [Wer07]. State-of-the-art methods that have a structure similar to those that we derive from relaxations of sums of bivariates have been studied in [Kol05; Kol14; Kap+15; Tou+18; Tou+20]. Subgradient methods that can serve as an alternative to the block coordinate ascentbased algorithms,-
 which we introduce, have been developed by [SG07; KPT07]. Conversely, block-coordinate ascent methods, similar to those developed in this work, have also been used to create scalable solvers for integer linear programming [LS21]. Methods similar to our entropy-regularized relaxations have been developed before [GJ07; LI13]. Complexity results for various problem formulations encountered in this work are derived in [LSH16]. In particular, [PW15] show that any linear program can be reduced in linea-
r time to what we call the dual linear program associated with a relaxation of sums of bivariates. Extensive collections of results on the subject from a perspective of mathematical optimization as well as from a probabilistic one can be found in [Sav+19] and [WJ08], respectively. Very similar coordinate ascent-based optimization approaches for the Markov Random Field model have been described by [OP24].
Outline. In Section 2, we cover the basic l2-approximation of functions by sums of bivariates. This leads us to derive an elementary characterization of parameterizations of zero and thereby the dual variables encountered later on. We describe hard as well as non-trivial easy instances of sums of bivariates using complexity theory and dynamic programming in Section 3.1. An application of a no-free-lunch theorem will also be presented. In Section 3.2, we focus on the central results on relaxations -
of sums of bivariates and the reconstructions of measures from bivariate marginals. We extend this analysis with a regularized version of relaxation for sums of bivariates in Section 3.3. We conclude our theory with a method that allows us to reconstruct solutions to the optimization of sums of bivariates from relaxation-associated problems in Section 3.4.
Section 4 contains the derivation of algorithms based on the various problem formulations and results encountered throughout the previous sections. Pseudocode for all discussed algorithms is included in this section. The experiments in Section 5 consider the minimization of sums of random bivariates, vertex coloring, and signal reconstruction problems, which constitute qualitatively different problem classes. We verify qualitative properties of the algorithms and contrast hypotheses
4

A preprint – November 26, 2025
about modeling choices.
A conclusion and a description of promising future work can be found in Section 6. The appendix contains extensive lemmata that would otherwise inhibit readability, a computational proof, pseudocode for a state-of-the-art algorithm for the minimization of sums of bivariates, as well as important referenced results. Figure 1 describes the hierarchy of optimization problems that emerges from the reducibility results encountered in this work.
Minimzing Sum of Bivariates
Global Relaxation
by Theorem 3.3
Dynamic Programming
for trees; by Theorem 3.1
Tree Relaxation
for trees; by Theorem 3.3
Star Relaxation
for stars; by Theorem 3.3
Dual Tree Relaxation
similar to Postulate 3.1
Dual Star Relexation
by Postulate 3.1
Separable Local Lower Bound
by Theorem 4.1
Dual Linear Program
by Theorem 4.1
Linear Programming
obvious
Closed-Form Solution
by Postulate 3.2
EntropyRegularized Tree Relaxation
see Remark 5
Dual EntropyRegularized Tree Relaxation
see Remark 4 Block
Coordinate Ascent
by Corollary 4.1
EntropyRegularized Star Relaxation
see Remark 5
Dual EntropyRegularized Star Relaxation
by Theorem 3.5 Closed-Form
Solution
by Theorem 3.5
NPequivalent
by Examples 3.1 and 3.2
Figure 1: Hierarchy of Optimization Problems: The reducibility results considered in this work. An arrow symbolizes that solving one problem yields the optimal value of another problem. Half arrows are approximations. Dotted arrows are conditional. Known generic problems are set in cursive font.
Acknowledgment. This work was submitted as part of the author’s Master’s Thesis at Saarland University in December 2024. The author thanks Peter Ochs and Andreas Karrenbauer, who supervised this work, for many discussions and a review that was helpful in improving the manuscript.
Notation and Terminology.
• Given a measure space (Ω, A, μ) we write ⟨f, μ⟩ := R f dμ for a μ-integrable function f : (Ω, A) → R. We define the entropy of μ as H(μ) := −Eμ log μ({·}) .
• Given two measures μ, λ with μ = f λ, we define ⟨μ, λ⟩ := ⟨f, λ⟩. We define their (λ, μ)cross-entropy as H(λ, μ) := −Eλ log μ({·}) . Their (λ, μ)-KL-divergence is defined as DKL := H(λ, μ) − H(λ).
• If Ω is a product space and f is defined on a factor thereof, we often implicitly consider f to be a function on Ω that is constant along the other factors.
• M+
1 (Ω, A) denotes the set probability measures, M+(Ω, A) the set of measures, and M(Ω, A) the set of signed measures on the measurable space (Ω, A).
• We will only consider (finite) discrete measures; therefore, we have |Ω| ∈ N, A = P(Ω), M(Ω) ∼= RΩ, M+(Ω) ∼= RΩ
≥0 and M+
1 (Ω) ∼= ∆|Ω|, where ∆|Ω| denotes the |Ω|dimensional simplex. Thus, we also adopt the notation μ(x) := μ({x}), where x ∈ Ω and μ ∈ M(Ω).
5

A preprint – November 26, 2025
• Given a product space Ω = Ω1 × · · · × Ωn, n ∈ N, we define the projection πΩ
i :Ω→
Ωi, x 7→ xi. Often we will drop the superscript and write πi := πΩ
i , if the domain is clear by context. In the same setting, where additionally Ωi = N≤m, we often denote f ∈ RΩi by f (1) . . . f (m) i.
• A function F : Ω → R is called separable if there exist fi ∈ RΩi , i ∈ N≤n with F ≡ f1 + · · · + fn.
• We often replace universally quantified variables by · and do not explicitly denote the quantifier.
• Given a graph G = (V, E) with vertices V = N≤n and edges E ⊆ {(i, j) ∈ V × V | i < j}, we define N (i) := {(i, j) ∈ E} and Ne (i) := {j ∈ V | (i, j) ∈ E ∨ (j, i) ∈ E}, i ∈ V. In oriented trees, we will assume that a parent vertex is in the left factor of an edge and a child vertex to be in the right factor of an edge.
• For a set Ω with |Ω| ∈ N and f ∈ RΩ, we define as lseε(f ) := ε log P
x∈Ω exp f (x)/ε
the ε-LogSumExp for all ε > 0. We will also use the notation lsex
ε f (x) := lseε(f ) if f has further parameters.
6

A preprint – November 26, 2025
2. Approximation
Initially, we would like to better understand the parameterization that is implicit to the defining functional equation of sums of bivariates in Definition 1.1. This will yield not only a characterization of the defining functional equation but also a way to efficiently approximate functions by sums of bivariates, i.e. to project onto the space of sums of bivariates.
Figure 2: Visualization of a function L2-orthogonal to the sums of bivariates on Ω = [0, 1]3.
For a given function G : Nn
≤m → R, we call the function that sums G over all values that all but its k-th and l-th argument can take, where k < l, the (k, l)-marginal of G, i.e.
a, b ∈ N≤m 7−→
X
yi ∈N≤m i∈N≤n i̸=k,l
G y1, . . . , yk−1, a, yk+1, . . . , yl−1, b, yl+1, . . . , yn .
The first theorem provides a necessary and sufficient condition for the approximation of a function G by sums of bivariates in terms of all (k, l)-marginals. By that, the theorem also provides a characterization of the defining functional when replacing G by a function that is postulated to be a sum of bivariates. The theorem features a more compact notation of the (k, l)-marginal. Insights into conditions and limits for bivariates to be the marginals of a possibly unknown function G will be cover-
ed in Theorem 3.4 and Example 3.5.
Theorem 2.1 (Approximation). Given G : Nn
≤m → R, m ∈ N, a sum of bivariates
F : Nn
≤m → R, where F ≡ P
(i,j)∈E fi,j, E = {(i, j) ∈ V × V | i < j}, and V = N≤n, is a best
l2-approximation of G if and only if
X
y∈Nn−2
≤m
G zk,l(a, b, y) =
X
y∈Nn−2
≤m
F zk,l(a, b, y) ∀a, b ∈ N≤m ∀(k, l) ∈ E
7

A preprint – November 26, 2025
= mn−2fk,l(a, b) + mn−3 P
j<k fj,k
1(a) + fj,l
1(b)
+
P
k<j<l fk,j
2(a) + fj,l
1(b)
+
P
l<j fk,j
2(a) + fl,j
2(b)
+ mn−4 X
i,j∈/{k,l}
fi,j , (this eq. only holds if n ≥ 4)
where
zk,l(a, b, y) := (y1, . . . , yk−1, a, yk, . . . , yl−2, b, yl−1, . . . , yn−2) ,
fi,j
1(s) :=
X
x∈N≤m
fi,j (x, s) , fi,j
2(s) :=
X
x∈N≤m
fi,j(s, x) , ∀s ∈ {a, b} , and
fi,j :=
X
x,s∈N≤m
fi,j(x, s) , ∀(i, j) ∈ E .
Proof. We want to find a bivariate function F ≡ P
(i,j)∈E fi,j , where E = {(i, j) ∈ V × V | i < j}, and V = N≤m that minimizes
∥G − F ∥l2 =
s X
x∈Nn
≤m
G(x) −
X
(i,j)∈E
fi,j (xi, xj ) 2 .
Due to convexity, the first-order condition
0 != ∂
∂fk,l(a, b)
X
x∈Nn
≤m
G(x) −
X
(i,j)∈E
fi,j(xi, xj) 2 ∀a, b ∈ N≤m ∀(k, l) ∈ E
(first-order condition)
=∂
∂fk,l(a, b)
X
yk ,yl ∈N≤m
X
y∈Nn−2
≤m
G(zk,l(yk, yl, y)) −
X
(i,j)∈E
fi,j (zk,l
i (yk, yl, y), zk,l
j (yk, yl, y)) 2
(reorder summation; definition zk,l)
= −2
X
y∈Nn−2
≤m
G(zk,l(a, b, y)) −
X
(i,j)∈E
fi,j (zk,l
i (a, b, y), zk,l
j (a, b, y)) (differentiation)
⇐⇒
X
y∈Nn−2
≤m
G zk,l(a, b, y) =
X
y∈Nn−2
≤m
X
(i,j)∈E
fi,j zk,l
i (a, b, y), zk,l
j (a, b, y)
(multiply by −1/2; add marginalized sum of bivariates)
=
X
y∈Nn−2
≤m
F zk,l(a, b, y) (definition of F )
= mn−2fk,l(a, b) + mn−3 P
j<k fj,k
1(a) + fj,l
1(b)
+
P
k<j<l fk,j
2(a) + fj,l
1(b)
+
P
l<j fk,j
2(a) + fl,j
2(b)
8

A preprint – November 26, 2025
+ mn−4 X
i,j∈/{k,l}
fi,j
(reorder summation based on occurrences of a and b; definitions f·,·
·, f·,·)
is necessary and sufficient.
Figure 2 shows the residual of (numerically) approximating (x, y, z) ∈ [0, 1]3 7→ xyz by sums of bivariates. The resulting function has a l2-best approximant by sums of bivariates that is the function 0, therefore, it is l2-orthogonal to the sums of bivariates. There are, however, still multiple sets of bivariates that sum to 0 and, therefore, parameterize the best approximant.
Thus, Corollary 2.1 characterizes the parameterizations of 0 by sums of bivariates. As we will see in Sections 3 and 4, the result is central to solvers that use dual formulations and—sometimes without loss—transforms the search space of the minimization of sums of bivariates into one with comparatively low dimensions. A relevant feature of the following result is the representation not only of the constant sum of bivariates F as a sum of univariates, but, in particular, a representation of the in-
dividual bivariates fi,j as a sum of univariates.
Corollary 2.1 (Dual Variables). In the setting of Theorem 2.1, we have
X
y∈Nn−2
≤m
F zk,l(a, b, y) = 0 ∀a, b ∈ {1, . . . , m} ∀(k, l) ∈ E (marginal null constraint)
⇐⇒ F ≡ 0 (global null constraint)
⇐⇒ ∀(i, j) ∈ E : ∃ρi,j , ρj,i ∈ RN≤m : fi,j ≡ ρi,j (·i) + ρj,i(·j )
∧ ∀i ∈ V : ∃ρi ∈ R :
X
j∈V
ρi,j ≡ ρi
∧
X
i∈V
ρi = 0 . (dual null constraint)
Remark 1. Clearly, a similar result holds for constant sums of bivariates.
Proof. We prove the statement as a Ringschluss.
“marginal null constraint ⇒ dual null constraint”: Consider, that for all (k, l) ∈ E and for all a, b ∈ N≤m, we have
0=
X
y∈Nn−2
≤m
F zk,l(a, b, y) (marginal null constraint)
=
X
y∈Nn−2
≤m
X
(i,j)∈E
fi,j zk,l
i (a, b, y), zk,l
j (a, b, y)
(representation of sum of bivariates)
⇐⇒ fk,l(a, b) = − 1
mn−2
X
y∈Nn−2
≤m
X
(i,j )∈E \{(k,l)}
fi,j zk,l
i (a, b, y), zk,l
j (a, b, y) .
(multiplication by −1/mn−2; addition of fk,l(a, b))
9

A preprint – November 26, 2025
Since the right-hand side of the previous equation is a sum of univariate functions in either a or b, or of constants, for all k, l ∈ E, we get that
∃ρk,l, ρl,k ∈ RN≤m : fk,l ≡ ρk,l + ρl,k .
Further, for all a ∈ N≤n and for all k ∈ V, we have
0=
X
b∈N≤m
X
y∈Nn−2
≤m
F zk,l(a, b, y) (sum of marginal null constraint)
=
X
b∈N≤m
X
y∈Nn−2
≤m
X
(i,j)∈E
fi,j zk,l
i (a, b, y), zk,l
j (a, b, y)
(representation of sum of bivariates)
=
X
b∈N≤m
X
y∈Nn−2
≤m
X
(i,j)∈E
ρi,j zk,l
i (a, b, y) + ρj,i zk,l
j (a, b, y) (previous result)
=
X
b∈N≤m
X
y∈Nn−2
≤m
X
i∈V
X
j∈V
ρi,j zk,l
i (a, b, y) (reorder summation)
⇐⇒
X
j∈V
ρk,j(a) = − 1
mn−1
X
b∈N≤m
X
y∈Nn−2
≤m
X
i∈V \{k}
X
j∈V
ρi,j zk,l
i (a, b, y) .
(multiplication by −1/mn−1; addition of P
j∈V ρk,j (a))
Since the right-hand side of the previous equation is a constant, and by a similar argument for the variable b, we get for all k ∈ V that
∃ρk ∈ R :
X
j∈V
ρk,j ≡ ρk .
Finally, we get the last claim for an arbitrary choice of a, b ∈ N≤m and k, l ∈ E by
0=
X
y∈Nn−2
≤m
F zk,l(a, b, y) (marginal null constraint)
=
X
y∈Nn−2
≤m
X
(i,j)∈E
ρi,j zk,l
i (a, b, y) + ρj,i zk,l
j (a, b, y) (previous result)
=
X
y∈Nn−2
≤m
X
i∈V
X
j∈V
ρi,j zk,l
i (a, b, y) (reorder summation)
≡
X
y∈Nn−2
≤m
X
i∈V
ρi (previous result)
= mn−2 X
i∈V
ρi . (constant summation)
10

A preprint – November 26, 2025
“dual null constraint ⇒ global null constraint”: We have for all x1, . . . , xn ∈ N≤m that
F (x1, . . . , xn) =
X
(i,j)∈E
fi,j (xi, xj ) (representation of sum of bivariates)
=
X
(i,j)∈E
ρi,j (xi) + ρj,i(xj ) (first property of dual null constraint)
=
X
i∈V
X
j∈V
ρi,j (xi) (reorder summation)
≡
X
i∈V
ρi (second property of dual null constraint)
= 0 . (third property of dual null constraint)
“global null constraint ⇒ marginal null constraint”: Clear.
Since the main goal of this work is the analysis of relaxation-based solvers, further approximation-based insights into sums of bivariates will be deferred.
11

A preprint – November 26, 2025
3. Optimization
3.1. Fundamental Perspective
We now attempt to classify as well as understand some hard- and easy-to-optimize instances of sums of bivariates. Such insight may help in modeling, managing our expectations for the optimization methods we design, and in interpreting their performance.
The Hamiltonian cycle problem asks to determine whether for a given graph there exists a sequence of successively adjacent vertices that are nonrepetitive. The Hamiltonian cycle problem is among the hardest decision problems for which a solution is polynomially sized and efficiently verifiable. In Example 3.1, we recite the reduction of the Hamiltonian cycle problem to checking whether the minimal value of a sum of bivariates is 0. By that we show that efficiently minimizing sums of bivariates is -
at least as hard as such hardest decision problems.
Example 3.1 (The Hamiltonian Cycle Problem as a Sum of Bivariates [Sav+19, p. 13 Sec. 1.3]). Let (V′, E′) be a graph for which we want prove existence of a Hamiltonian cycle.
Define V := N≤n, n = |V′|, E = {(i, j) ∈ V × V | i < j}, Ωi := V′, i ∈ N≤n, Ω := Ω1 × · · · × Ωn, and for all (i, j) ∈ E for all (xi, xj) ∈ Ωi × Ωj, that
fi,j (xi, xj ) :=



0 if xi ̸= xj ∧ i + 1 = j =⇒ (xi, xj) ∈ E′
1 else.
Therefore,
min
x∈Ω
P
(i,j)∈E fi,j (xi, xj ) = 0
⇐⇒ ∃x ∈ Ω : ∀(i, j) ∈ E : xi ̸= xj ∧ i + 1 = j =⇒ (xi, xj) ∈ E′
⇐⇒ (V′, E′) has a Hamiltonian cycle.
The problem of deciding whether the graph G′ = (V′, E′) has a Hamiltonian cycle is NP-complete. Therefore, since the Hamiltonian cycle problem can be reduced in polynomial time to checking the minimal value of a sum of bivariates, we know that minimization of the sum of bivariates is NP-hard.
Next, we show in Example 3.2 that the minimization of sums of bivariates can be efficiently reduced to integer linear programming. This implies that minimizing rationally-valued sums of bivariates is also NP-easy. In conjunction with the result of NP-hardness by Example 3.1, we therefore know that the minimization of rationally-valued sums of bivariates is NPequivalent. This means that there exists an exact and efficient algorithm for the minimization of rationally-valued sums of bivariates if and-
 only if there is an efficient algorithm for the hardest decision problems for which solutions are polynomially sized and efficiently verifiable, i.e. if P = NP [KV06, p. 368 Prop. 15.35].
Example 3.2 (Sums of Bivariates as Integer Linear Programs). In the setting of Definition 1.1, let F ≡ P
(i,j)∈E fi,j : Ω1 × · · · × Ωn → Q encode a sum of bivariates. Let, w.l.o.g., |Ω1| = · · · = |Ωi| = m ∈ N. Consider the binary variables of the integer linear program to be
xi,j ∈ {0, 1}m×m ∀(i, j) ∈ E ,
12

A preprint – November 26, 2025
and the constraints to be

   
   
Pm
s,t=1 xi,j;s,t = 1 ∀(i, j) ∈ E Pm
s=1 xi,j;s,t = Pm
s=1 xk,j;s,t ∀t ∈ N≤m ∀(i, j), (k, j) ∈ E
Pm
s=1 xi,j;t,s = Pm
s=1 xk,j;t,s ∀t ∈ N≤m ∀(i, j), (i, k) ∈ E
Pm
s=1 xi,j;s,t = Pm
s=1 xj,k;t,s ∀t ∈ N≤m ∀(i, j), (j, k) ∈ E .
The objective to be minimized can be modeled as
X
(i,j)∈E
m
X
s,t=1
fi,j (s, t) · xi,j;s,t ,
which leaves us with a linear integer program that has a polynomial size w.r.t. to the size of the sum of bivariates. Clearly, we obtain an optimal solution y∗ ∈ Ω to the minimization of sums
of bivariates given an optimal solution to the integer linear program x∗ ∈ {0, 1}m×m |E| by picking
y∗
i ∈ arg max
s∈N≤m
m
X
t=1
x∗
i,j;s,t and y∗
j ∈ arg max
j∈N≤m
m
X
s=1
x∗
i,j;s,t ∀(i, j) ∈ E ,
which is well-defined by our constraints.
In contrast to the described hard instances, we now introduce relatively easy-to-minimize instances of sums of bivariates, which are widely known. Interestingly, this class of functions is not characterized by requirements on the structure of the bivariates but on the structure that encodes the dependencies, that is, the graph G = (V, E) that indexes the sum of bivariates F ≡ P
(i,j)∈E fi,j in Definition 1.1. Such easy instances are, in fact, characterized by tree-structured index graphs G.
The following Theorem 3.1 is constructive in the sense that it describes an algorithm to efficiently solve such easy instances. The minimization of sums of bivariates with these tree-structured indices can be interpreted as a dynamic program that sequentially allows the reduction of the problem to a smaller instance.
Theorem 3.1 (Dynamic Programming for Tree-Indexed Instances). Let F ≡ P
(i,j)∈E fi,j be
a sum of bivariates, where G = (V, E) is a tree, and let (it, jt) ∈ E, jt := |V|+1−t, t ∈ N≤|V|−1 be an edge counting, such that
• Et := Et−1 \ {(it, jt)}, where E0 := E ∪ {(∗, i|V|−1)} and ∗ is a placeholder symbol,
• Vt := Vt−1 \ {jt}, where V0 := V,
• jt is a leaf of Gt−1 := (Vt−1, Et−1),
• define f0;∗,i|V|−1 :≡ 0, f0;k,l := fk,l and
ft;k,l :=
(
ft−1;k,l + minxjt ft−1;it,jt (·, xjt ) if l = it
ft−1;k,l else,
for all (k, l) ∈ Et for all t ∈ N≤|V|−1, and
• Ft :≡ P
(i,j)∈Et ft;i,j for all t ∈ N[0,|V |−1].
13

A preprint – November 26, 2025
Then,
• min F = min Ft for all t ∈ N≤|V|−1, and
• x∗ ∈ arg minx∈Ω F (x) if xt∗ ∈ arg minxt∈Ωt F|V |−t(x1∗, . . . , xt∗−1, xt) for all t ∈ N≤|V|.
Proof. The first result can be inductively concluded from the following equation. We have for all t ∈ N≤|V|−1 that
Ft =
X
(i,j)∈Et
ft;i,j (definition of Ft)
=
X
(i,j)∈Et
ft−1;i,j +
X
(i,j)∈Et
ft;i,j − ft−1;i,j (reorder summation; partition of zero)
=
X
(i,j)∈Et
ft−1;i,j + mxjitn
ft−1;it,jt (·, xjt ) (definition of ft;·,·)
= mxjitn
X
(i,j)∈Et−1
ft−1;i,j (definition of Et; jt is leaf of Gt−1)
= mxjitn
Ft−1 . (definition of Ft−1)
The second result is implied by
(x∗
1, . . . , x∗
t ) ∈ arg min
x1 ,...,xt
F|V |−t (x∗
1, . . . , x∗
t−1, xt) ∀t ∈ N≤|V| ,
which is also true inductively by
F|V |−t (x∗
1, . . . , x∗
t ) = mxitn
F|V |−t (x∗
1, . . . , x∗
t−1, xt) (definition of x∗
t)
= F|V|+1−t(x∗
1, . . . , x∗
t−1) (previous equation)
= min F|V|+1−t (induction hypothesis)
= min F|V|−t , (first result)
where t ∈ N[2,|V|] and x1∗ ∈ arg minx1 F|V|−1(x1) by definition.
In Example 3.3, we present a small but detailed example of a sum of bivariates that we minimize using the method described in Theorem 3.1.
Example 3.3 (Dynamic Programming for Tree-Indexed Instances). In the setting of Definition 1.1, consider
V := {1, 2, 3, 4, 5} , E := {(1, 2), (2, 3), (3, 4), (3, 5)} ,
Ω1 = · · · = Ω5 = {1, 2, 3} ,
and a sum of bivariates
F≡
X
(i,j)∈E
fi,j ,
where
f1,2 :=


380 689 619

 ∈ RΩ1×Ω2 , f2,3 :=


842 699 642

 ∈ RΩ2×Ω3 ,
f3,4 :=


700 221 426

 ∈ RΩ3×Ω4 , f3,5 :=


896 027 933

 ∈ RΩ3×Ω5 .
14

A preprint – November 26, 2025
123
4
5
Figure 3: Visualization of the variable dependencies of the sum of bivariates of Example 3.3.
Then, in the setting of Theorem 3.1, we have
j1 = 5 , j2 = 4 , j3 = 3 , and j4 = 2 ,
as well as
F0 ≡ f1,2 + f2,3 + f3,4 + f3,5
F1 ≡ f1,2 + f2,3 + f3,4 + min
x5 ∈Ω5
f3,5(·, x5)
≡ f1,2 + f2,3 + f3,4 + 6 0 3 3
F2 ≡ f1,2 + f2,3 + min
x4 ∈Ω4
f3,4(·, x4) + min
x5 ∈Ω5
f3,5(·, x5)
≡ f1,2 + f2,3 + 0 1 2 3 + 6 0 3 3
F3 ≡ f1,2 + min
x3 ∈Ω3
f2,3(·, x3) + min
x4 ∈Ω4
f3,4(x3, x4) + min
x5 ∈Ω5
f3,5(x3, x5)
≡ f1,2 + min
x3 ∈Ω3
f2,3(·, x3) + 6 1 5 3 (x3)
≡ f1,2 + min
x3 ∈Ω3


14 5 7 12 10 14 12 5 7


2,3
(·, x3)
≡ f1,2 + 5 10 5 2
F4 ≡ min
x2 ∈Ω2
f1,2(·, x2) + min
x3 ∈Ω3
f2,3(x2, x3) + min
x4 ∈Ω4
f3,4(x3, x4) + min
x5 ∈Ω5
f3,5(x3, x5)
≡ min
x2 ∈Ω2


8 18 5 11 18 14 11 11 14


1,2
(·, x2)
≡ 5 11 11 1 .
By Theorem 3.1, we know min F = min F4 = 5 and for
x∗
1 ∈ arg min
x1 ∈Ω1
F4(x1) = {1} ,
x∗
2 ∈ arg min
x2 ∈Ω2
F3(x∗
1, x2) = arg min
x2 ∈Ω2
8 18 5 2 = {3} ,
x∗
3 ∈ arg min
x3 ∈Ω3
F2(x∗
1, x∗
2, x3) = arg min
x3 ∈Ω3
12 5 7 3 = {2} ,
x∗
4 ∈ arg min
x4 ∈Ω4
F1(x∗
1, x∗
2, x∗
3, x4) = arg min
x4 ∈Ω4
6 6 5 4 = {3} , and
x∗
5 ∈ arg min
x4 ∈Ω4
F (x∗
1, x∗
2, x∗
3, x∗
4, x5) = arg min
x5 ∈Ω5
6 8 13 5 = {1} ,
we have (x1∗, . . . , x5∗) ∈ arg min F .
15

A preprint – November 26, 2025
We identified some hard and easy instances of sums of bivariates. However, it does not have to be our goal to solve the hardest problems optimally. We may be happy to solve other instances overproportionally efficient with a particular optimization algorithm. Related to this perspective are results that constrain the overperformance of some algorithms over others when applied to a class of objective functions, which are called no-free-lunch results. Such a result could, in principle, give us a for-
mal reason to abandon the goal of minimizing general sums of bivariates—or at the very least a reason to constrain to particular subclass of sums of bivariates. The following Theorem 3.2, presented rather informally, gives us a characterization of classes of objectives for which all arguably reasonable algorithms have the same performance distribution with respect to all arguably reasonable performance measures.
Theorem 3.2 ((No-)Free-Lunch Theorem [IT04, p. 3 Thm. 2] & [SVW01]). Let Ω, Y ⊂ R be finite sets. If and only if F ⊆ Y Ω is closed under composition with permutations of Ω, then for
• any two algorithms a, b, mapping (candidate, objective value)-sequences to non-repeating successive candidate-objective value points,
• any budget k ∈ N≤|Ω|, and
• any performance measure, mapping objective value-sequences to real numbers,
the distribution of performances of length-k sequences’, generated by a and b, when applied to F, is equivalent.
We conclude this section with the construction of a counterexample. That is, we show in Example 3.4 that sums of bivariates are not closed under permutation of their domain. This means that we find an instance of the sums of bivariates F ≡ P
(i,j)∈E fi,j : Ω → R, such that when we compose it with a permutation of Ω, we obtain a function that does not have a representation as a sum of bivariates. Admittedly, the negation of Theorem 3.2 is rather weak: It just implies that a performance measure exists, such that there exist two algorithms with non-equal performance measures when applied to sums of bivariates. However, this fact may still serve as a sanity check, as we would hope this is true if the endeavor of finding good optimizers fo-
r arbitrary sums of bivariates is meant to be worthwhile.
Example 3.4 (Sums of Bivariate Functions Not Closed Under Permutation). Consider



F : {0, 1}6 −→ Z[−64,64]
x1x2 . . . x6 7−→ P
i,j∈N≤6 i<j
χxi=xj =1(xi, xj )
and the permutation of N[0,63] in cycle notation given by
p =(0, 8, 18, 11, 54, 41, 28, 26, 55, 59, 48, 40, 60, 24, 47, 12, 33, 63, 13, 22, 25, 16, 23, 32, 7, 36, 21,
6, 1, 52, 44, 50, 42, 17, 10, 53, 37, 14, 39, 9, 58, 46, 38, 51, 5, 27, 56, 31, 15, 49, 35, 61, 45, 3,
30, 19, 57, 34, 4, 43, 2, 62, 20, 29) .
Then, let ι : {0, 1}6 → N[0,63] be the decimal coding, then p ̃ = ι−1 ◦ p ◦ ι is a permutation of {0, 1}6, and F ◦ p ̃ not a sum of bivariate functions. The claim can be verified by running the program in Appendix B.1.
16

A preprint – November 26, 2025
3.2. Relaxation Principle
The focus of this work are relaxation-based optimization algorithms. Relaxation is a transformation of an optimization problem minx∈Ω F (x) that generalizes the concept of a candidate x ∈ Ω to probability measures M+
1 (Ω), as well as the objective value of a candidate from F (x) to
⟨F, μ⟩ :=
Z
Ω
F dμ ,
and is applicable to integrable objectives. Relaxations are used in other domains of (applied) mathematics to generalize solution concepts, such as in game theory and PDE-analysis. Although the transformation is often not of practical interest, it associates the original optimization problem with a unique linear optimization problem on a convex and often compact domain. For our purposes, relaxations serve us in generating insight into our problem as well as to derive practically useful problem for-
mulations.
The following Theorem 3.3 recalls that one can generally associate a relaxed optimization problem with the problem of minimizing an objective function, such that it has the same minimal value and any optimal measure evaluates to zero on the set of suboptimal candidates of the original problem. This is, in particular, true for sums of bivariates. The deep insight of Theorem 3.3 is that given a candidate μ ∈ M+
1 (Ω) of the relaxed (global) problem, it is sufficient to know for all (i, j) ∈ E its bivariate marginal measure
μi,j :=μ Ω1 ×· · ·×Ωi−1 ×(·)×Ωi+1 ×· · ·×Ωj−1 ×(·)×Ωj+1 ×· · ·×Ωn
= μ ◦ π−1
i,j ∈ M+
1 (Ωi × Ωj ) ,
to determine its objective value. Here, the function πi,j : Ω → Ωi × Ωj denotes the projection to the coordinates i, j. However, only if the graph that indexes the sum of bivariates is a tree, we associate optimal solutions of the relaxation with optimal solutions of the minimization of the sums of bivariates based solely on their bivariate marginal measures. By this we obtain a formulation for the optimization of tree-structured sums of bivariates that is already efficiently solvable and is an al-
ternative to the dynamic programming approach presented in Theorem 3.1. Additionally, in case the sum of bivariates is indexed by a star graph, one obtains an even simpler linear programming formulation, which we will later learn to admit a closed-form solution.
Theorem 3.3 (Relaxation). If a sum of bivariates F ≡ P
(i,j)∈E fi,j : Ω → R has a unique minimum, then
(arg) min
x∈Ω
F (x1, . . . , xn)
= (arg) min
μ∈M+
1 (Ω)
⟨F, μ⟩ . (global relaxation)
Further, if G = (V, E) is a tree, then
=

    
    
(arg) min
μ·,· ∈M+ (Ω· ×Ω· ) μ· ∈M+
1 (Ω·)
X
(i,j)∈E
fi,j , μi,j
s.t. μi = μi,j ◦ π−1
i , ∀(i, j) ∈ E
μj = μi,j ◦ π−1
j , ∀(i, j) ∈ E .
(tree relaxation)
17

A preprint – November 26, 2025
Further, if G = (V, E) is a star graph with root i∗ ∈ V and E = N (i∗), then
=

  
  
(arg) min
μi∗,·∈M+(Ωi∗ ×Ω·) μi∗ ∈M+
1 (Ωi∗ )
X
(i∗,j)∈N (i∗)
fi∗,j , μi∗,j
s.t. μi∗ = μi∗,j ◦ π−1
i∗ , ∀(i∗, j) ∈ N (i∗) .
(star relaxation)
Proof.
i. The first claim—the equivalence of the minimization of the sum of bivariates and its global relaxation—is a generic result, which can be found in Theorem C.3.
ii. The second claim—the equivalence of the minimization of the global relaxation and the tree relaxation of the sum of bivariates—can be proven by induction over trees G: The fact is trivially true if G has only one edge, as then the global measure and its 2-marginals are equivalent. We prove now that if the second claim holds for all trees with s ∈ N edges, then it must also hold for all trees with s + 1 edges. Let G now have s + 1 edges, i.e. |E| = s + 1,
and w.l.o.g. let (ij∗ , j∗) denote an edge, j∗ be a leaf, then
(arg) min
μ∈M+
1 (Ω)
⟨F, μ⟩ = (arg) min
μ∈M+
1 (Ω)
fk∗,ij∗ + fij∗ ,j∗ +
X
(i,j)∈E (i,j)̸=(ij∗ ,j∗) (i,j)̸=(k∗,ij∗ )
fi,j , μ
(as G is a tree, there exists some (k∗, ij∗ ) ∈ E)
= (arg) min
μ∈M+
1 (Ω)
fk∗,ij∗ + mij∗ ,j∗ +
X
(i,j)∈E (i,j)̸=(ij∗ ,j∗) (i,j)̸=(k∗,ij∗ )
fi,j , μ
(by mij∗ ,j∗ (·) := minxj∗ ∈Ωj∗ fij∗ ,j∗ (·, xj∗ ); j∗ is a leaf)
=

      
      
(arg) min
μ·,· ∈M+ (Ω· ×Ω· ) μ· ∈M+
1 (Ω·)
fk∗,ij∗ + mij∗ ,j∗ , μk∗,ij∗ +
X
(i,j)∈E (i,j)̸=(ij∗ ,j∗) (i,j)̸=(k∗,ij∗ )
fi,j , μi,j
s.t. μi = μi,j ◦ π−1
i , ∀(i, j) ∈ E \ {(ij∗ , j∗)}
μj = μi,j ◦ π−1
j , ∀(i, j) ∈ E \ {(ij∗ , j∗)}
(induction hypothesis; mij∗ ,j∗ : Ωij∗ → R)
=

    
    
(arg) min
μ·,· ∈M+ (Ω· ×Ω· ) μ· ∈M+
1 (Ω·)
mij∗ ,j∗ , μij∗ +
X
(i,j)∈E (i,j)̸=(ij∗ ,j∗)
fi,j , μi,j
s.t. μi = μi,j ◦ π−1
i , ∀(i, j) ∈ E \ {(ij∗ , j∗)}
μj = μi,j ◦ π−1
j , ∀(i, j) ∈ E \ {(ij∗ , j∗)}
(mij∗ ,j∗ : Ωij∗ → R)
=

    
    
(arg) min
μ·,· ∈M+ (Ω· ×Ω· ) μ· ∈M+
1 (Ω·)
mij∗ ,j∗ , μij∗ ,j∗ +
X
(i,j)∈E (i,j)̸=(ij∗ ,j∗)
fi,j , μi,j
s.t. μi = μi,j ◦ π−1
i , ∀(i, j) ∈ E
μj = μi,j ◦ π−1
j , ∀(i, j) ∈ E
(introduce μj∗ ∈ M+
1 (Ωj∗ ), μij∗ ,j∗ ∈ M+(Ωij∗ × Ωj∗ ) : μij∗ = μij∗ ,j∗ ◦ π−1
ij∗ , μj∗ = μij∗ ,j∗ ◦ π−1
j∗ )
18

A preprint – November 26, 2025
=

    
    
(arg) min
μ·,· ∈M+ (Ω· ×Ω· ) μ· ∈M+
1 (Ω·)
X
(i,j)∈E
fi,j , μi,j
s.t. μi = μi,j ◦ π−1
i , ∀(i, j) ∈ E
μj = μi,j ◦ π−1
j , ∀(i, j) ∈ E ,
(by mij∗ ,j∗ (·) := minxj∗ ∈Ωj∗ fij∗ ,j∗ (·, xj∗ ); j∗ is a leaf)
which proves the desired result by induction.
iii. The third claim—the equivalence of the tree relaxation and the star relaxation of the sum of bivariates—immediately follows from the fact that the unary measures of leafs are not part of the objective function and do not impose any non-trivial constraints.
Given we have marginally-coupled bivariate measures μi,j on Ωi × Ωj, (i, j) ∈ E, such as the candidates of the tree relaxation in Theorem 3.3, we can ask the question of whether there exists a (global) measure on Ω that has these bivariate measures as marginals. Theorem 3.4 proves existence of such a global measure for tree-indexed sets of bivariate measures and constructs one such global measure with maximum entropy.
Theorem 3.4 (Reconstruction From Marginals). If G = (V, E) is an oriented tree with root i∗ ∈ V and given

   
   
μi,j ∈ M+(Ωi × Ωj) , ∀(i, j) ∈ E
μi ∈ M+
1 (Ωi) , ∀i ∈ V
s.t. μi = μi,j ◦ π−1
i , ∀(i, j) ∈ E
μj = μi,j ◦ π−1
j , ∀(i, j) ∈ E ,
then the measure μ ∈ M+
1 (Ω) with
μ(x) :=
(
μi∗ (xi∗ ) Q
(i,j)∈E
μi,j (xi,xj )
μi(xi) if μi(xi) > 0 ∀i ∈ V
0 else , ∀(x1, . . . , xn) ∈ Ω
is a maximal-entropy measure, such that it has has marginals μi,j , (i, j) ∈ E, i.e.
μi,j = μ ◦ π−1
i,j for all (i, j) ∈ E .
Remark 2. The definition of μ in Theorem 3.4 does not depend on the choice of the root of a tree. See Corollary 3.1.
Proof. We assume w.l.o.g. that for all x ∈ Ω we have μ(x) > 0, otherwise restrict Ω.
i. First, we prove that μ is a probability measure. To this end, let (ij∗ , j∗) denote an edge and j∗ be a leaf of G. We have
μ(Ω) =
X
x∈Ω
μ(x) (additivity of measures)
=
X
xi ∈Ωi
i̸=j∗
X
xj∗ ∈Ωj∗
μ(x1, . . . , xn) (reorder summation)
=
X
xi ∈Ωi
i̸=j∗
X
xj∗ ∈Ωj∗
μi∗ (xi∗ )
Y
(i,j)∈E
μi,j (xi, xj )
μi(xi) (definition of μ)
19

A preprint – November 26, 2025
=
X
xi ∈Ωi
i̸=j∗
μi∗ (xi∗ )
Y
(i,j)∈E j̸=j∗
μi,j (xi, xj ) μi(xi)
X
xj∗ ∈Ωj∗
μij∗ ,j∗ (xij∗ , xj∗ )
μij∗ (xij∗ )
(distributivity; j∗ is leaf)
=
X
xi ∈Ωi
i̸=j∗
μi∗ (xi∗ )
Y
(i,j)∈E j̸=j∗
μi,j (xi, xj )
μi(xi) (by μij∗ = μij∗ ,j∗ ◦ π−1
ij∗ )
=
X
xi∗ ∈Ωi∗
μi∗ (xi∗ ) (repeated application of the last few steps for remaining leafs)
= 1 . (by μi∗ ∈ M∗
1(Ωi∗ ))
ii. Similarly, we prove that μ ◦ π−1
i,j = μi,j for all (i, j) ∈ E. W.l.o.g., we assume that
for an arbitrary edge (ij∗ , j∗) ∈ E the vertex j∗ is a leaf and that there are no other leafs—otherwise can repeatedly marginalize w.r.t. leafs like in Item i.. Denote with
(i∗, ji∗ ) ∈ E the edge that includes the root. We have for all xij∗ ∈ Ωij∗ , xj∗ ∈ Ωj∗ that
μ ◦ π−1
ij∗ ,j∗ (xij∗ , xj∗ )
=
X
xi ∈Ωi
i̸=ij∗ ,j∗
μi∗ (xi∗ )
Y
(i,j)∈E
μi,j (xi, xj )
μi(xi) (explicit summation; definition of μ)
=
X
xi ∈Ωi
i̸=i∗,ij∗ ,j∗
X
xi∗ ∈Ωi∗ μi∗ (xi∗ )>0
μi∗ (xi∗ ) μi∗,ji∗ (xi∗ , xji∗ )
μi∗ (xi∗ )
Y
(i,j)∈E i̸=i∗
μi,j (xi, xj ) μi(xi)
(distributivity; i∗ is a root)
=
X
xi ∈Ωi
i̸=i∗,ij∗ ,j∗
μji∗ (xji∗ )
Y
(i,j)∈E i̸=i∗
μi,j (xi, xj )
μi(xi) (cancellation; μji∗ = μi∗,ji∗ ◦ π−1
ji∗ )
= μij∗ (xij∗ ) μij∗ ,j∗ (xij∗ , xj∗ )
μij∗ (xij∗ ) .
(repeated application of the last few steps for remaining roots)
iii. Finally, we prove that μ is a unique maximal-entropy measure, such that it has marginals μi,j , (i, j) ∈ E.
For an arbitrary measure λ ∈ M(Ω) with μij = λ ◦ π−1
ij for all (i, j) ∈ E, we have
H(λ) = H(λ, μ) − DKL(λ, μ) (cross-entropy formula)
= −Eλ log μ − DKL(λ, μ) (definition of cross-entropy)
= −Eλ log μi∗ (·i∗ )
Y
(i,j)∈E μi (·i )>0
μi,j (·i, ·j )
μi(·i) − DKL(λ, μ) (definition of μ)
= −Eλ log μi∗ (·i∗ )
−
X
(i,j)∈E μi (·i )>0
Eλ log μi,j(·i, ·j) − Eλ log μi(·i) − DKL(λ, μ)
(properties of log and linearity of E)
= −Eλ◦π−1
i∗ log μi∗
20

A preprint – November 26, 2025
−
X
(i,j)∈E μi (·i )>0
Eλ◦π−1
ij
log μi,j − Eλ◦π−1
i
log μi(·i) − DKL(λ, μ)
(expect. val. of functions constant in an argument)
= −Eμi∗ log μi∗
−
X
(i,j)∈E μi (·i )>0
Eμij log μi,j (·, ·) − Eμi log μi(·i) − DKL(λ, μ)
(assumption μij = λ ◦ π−1
ij for all (i, j) ∈ E)
= −Eμ log μ − DKL(λ, μ) (by the reversed argument)
= H(μ) − DKL(λ, μ) (definition of entropy)
≤ H(μ) . (property of the KL-divergence)
It turns out that the limits to the existence of a global measure that has given marginallycoupled bivariate measures as marginals are related to the consistency of the tree relaxation of Theorem 3.3 in solving the original minimization of sums of bivariates. We see in Example 3.5 that, in general, if we apply the tree relaxation to non-tree-structured sums of bivariates, we obtain a different problem. The problem we obtain differs both in its minimal value and in our ability to make sense of solu-
tions by finding a global measure for a solution that is a set of marginally-coupled bivariate measures.
Example 3.5 (Extension Impossible). Consider the functions F : {0, 1}3 → R, f1,2, f1,3, f2,3 : {0, 1}2 → R with
F (x1, x2, x2) = f1,2(x1, x2) + f1,3(x1, x3) + f2,3(x2, x3) ∀x ∈ {0, 1}3 ,
where
f1,2(x1, x2) :=

 
 
1 if x1 = x2 = 0
0 if x1 = x2 = 1
∞ else,
f1,3(x1, x3) :=

 
 
1 if x1 = 1 − x3 = 0
0 if x1 = x3
∞ else, and
f2,3(x2, x3) :=

 
 
1 if x2 = 1 − x3 = 0
0 if x3 = 1 − x2 = 0
∞ else.
Then, we have
F (x1, x2, x3) =
(
3 if x1 = x2 = 1 − x3 = 0
∞ else
and the tree relaxation of Theorem 3.3 (where in this example ∞ · 0 := 0 and G := (V, E) := ({1, 2, 3}, {(1, 2), (1, 3), (2, 3)}) is not a tree) yields

    
    
(arg) min
μ·,· ∈M+ (Ω· ×Ω· ) μ· ∈M+
1 (Ω·)
X
(i,j)∈E
fi,j , μi,j
s.t. μi = μi,j ◦ π−1
i , ∀(i, j) ∈ E
μj = μi,j ◦ π−1
j , ∀(i, j) ∈ E
21

A preprint – November 26, 2025
0
∞
∞
1
0
∞
1 0
x3
x1
∞
01
∞
x2
Figure 4: Geometric visualization of Example 3.5. Measures μ1,2, μ1,3, and μ2,3 can be understood to be defined on the respective face of the cube. The relaxed objective function is the sum of the scalar product of each measure with the respective face.
=

            
            
(arg) min
μ·,· ∈M+ (Ω· ×Ω· )
f1,2, μ1,2 + f1,3, μ1,3 + f2,3, μ2,3
s.t. μ1,2(Ω1 × Ω2) = 1
μ1,3(Ω1 × Ω3) = 1
μ2,3(Ω2 × Ω3) = 1
μ1,2 ◦ π−1
1 = μ1,3 ◦ π−1
1
μ1,2 ◦ π−1
2 = μ2,3 ◦ π−1
2
μ1,3 ◦ π−1
3 = μ2,3 ◦ π−1
3
(definition of E; eliminating marginal variables)
=

                     
                     
(arg) min
μ·,· ∈M+ (Ω· ×Ω· )
μ1,2(0, 0) + μ1,3(0, 1) + μ2,3(0, 1)
s.t. μ1,2(0, 0) + μ1,2(1, 0) + μ1,2(0, 1) + μ1,2(1, 1) = 1
μ1,3(0, 0) + μ1,3(1, 0) + μ1,3(0, 1) + μ1,3(1, 1) = 1
μ2,3(0, 0) + μ2,3(1, 0) + μ2,3(0, 1) + μ2,3(1, 1) = 1
μ1,2(0, 0) + μ1,2(0, 1) = μ1,3(0, 0) + μ1,3(0, 1)
μ1,2(1, 0) + μ1,2(1, 1) = μ1,3(1, 0) + μ1,3(1, 1)
μ1,2(0, 0) + μ1,2(1, 0) = μ2,3(0, 0) + μ2,3(0, 1)
μ1,2(0, 1) + μ1,2(1, 1) = μ2,3(1, 0) + μ2,3(1, 1)
μ1,3(0, 0) + μ1,3(1, 0) = μ2,3(0, 0) + μ2,3(1, 0)
μ1,3(0, 1) + μ1,3(1, 1) = μ2,3(0, 1) + μ2,3(1, 1)
μ1,2(0, 1) = μ1,2(1, 0) = μ1,3(1, 0) = μ2,3(0, 0) = μ2,3(1, 1) = 0
(definitions of f·,· & Ω·)
22

A preprint – November 26, 2025
=

                     
                     
(arg) min
μ·,· ∈M+ (Ω· ×Ω· )
μ1,2(0, 0) + μ1,3(0, 1) + μ2,3(0, 1)
s.t. μ1,2(0, 0) + μ1,2(1, 1) = 1
μ1,3(0, 0) + μ1,3(0, 1) + μ1,3(1, 1) = 1
μ2,3(1, 0) + μ2,3(0, 1) = 1
μ1,2(0, 0) = μ1,3(0, 0) + μ1,3(0, 1)
μ1,2(1, 1) = μ1,3(1, 1)
μ1,2(0, 0) = μ2,3(0, 1)
μ1,2(1, 1) = μ2,3(1, 0)
μ1,3(0, 0) = μ2,3(1, 0)
μ1,3(0, 1) + μ1,3(1, 1) = μ2,3(0, 1)
μ1,2(0, 1) = μ1,2(1, 0) = μ1,3(1, 0) = μ2,3(0, 0) = μ2,3(1, 1) = 0
(plugging the last equation into all others)
=

                   
                   
(arg) min
μ·,· ∈M+ (Ω· ×Ω· )
2μ1,2(0, 0) + μ1,3(0, 1)
s.t. 2μ1,2(1, 1) + μ1,3(0, 1) = 1
μ1,2(0, 0) = μ1,2(1, 1) + μ1,3(0, 1)
μ1,3(0, 1) + μ1,2(1, 1) = μ1,2(0, 0)
μ1,2(0, 1) = μ1,2(1, 0) = μ1,3(1, 0) = μ2,3(0, 0) = μ2,3(1, 1) = 0
μ1,3(1, 1) = μ1,2(1, 1)
μ2,3(0, 1) = μ1,2(0, 0)
μ1,3(0, 0) = μ2,3(1, 0) = μ1,2(1, 1)
μ1,2(1, 1) = 1 − μ1,2(0, 0)
μ2,3(1, 0) = 1 − μ1,2(0, 0)
(replacing variables constrained by trivial equations)
=

                   
                   
(arg) min
μ·,· ∈M+ (Ω· ×Ω· )
1
s.t. ((((((((((((
μ1,2(0, 0) = 1 − μ1,2(1, 1)
1 − μ1,2(1, 1) = μ1,2(0, 0)
μ1,2(0, 1) = μ1,2(1, 0) = μ1,3(1, 0) = μ2,3(0, 0) = μ2,3(1, 1) = 0
μ1,3(1, 1) = μ1,2(1, 1)
μ2,3(0, 1) = μ1,2(0, 0)
μ1,3(0, 0) = μ2,3(1, 0) = μ1,2(1, 1)
μ1,2(1, 1) = 1 − μ1,2(0, 0)
μ2,3(1, 0) = 1 − μ1,2(0, 0)
μ1,3(0, 1) = 1 − 2μ1,2(1, 1) .
(replacing variables constrained by trivial equations)
Clearly, we have a minimal value of 1 at a (non-unique) minimum of
μ1,2(a, b) = μ1,3(a, b) = 1/2 − μ2,3(a, b) =
(
1/2 if a = b
0 else ∀a, b ∈ {0, 1} .
Further, there exists no measure μ on {0, 1}3 such that it has marginals μ1,2, μ1,3, μ2,3,
23

A preprint – November 26, 2025
i.e. there exists no μ such that
μ1,2 = μ ◦ π−1
1,2 , μ1,3 = μ ◦ π−1
1,3 , and μ2,3 = μ ◦ π−1
2,3 .
This is, as μ1,2(1, 0) = μ1,2(0, 1) = μ1,3(1, 0) = μ1,3(0, 1) = 0 would imply by marginalization that the support of μ is contained in {(0, 0, 0), (1, 1, 1)}. However, since μ2,3(0, 0) = μ2,3(1, 1) = 0, by marginalization, μ must be zero on {(·, 0, 0), (·, 1, 1)}. Therefore, μ cannot have the specified marginals. This example shows that neither the non-global relaxation of Theorem 3.3 nor the reconstruction of Theorem 3.4 can be extended beyond trees in general.
The following two postulates are inspired by and very similar to the results in [OP24]. The goal is to derive the Lagrangian dual of the star relaxation in Postulate 3.1, which restricts to star graph-indexed sums of bivariates. The dual of the tree relaxation would follow similarly and will be described briefly in Theorem 4.1 of Section 4. Later in our derivation, even the specific results for star graph-indexed sums of bivariates will prove useful, as we will be able to use them for a type of co-
ordinate ascent minimization algorithm, similar and motivated to the results in [OP24]. Further, Postulate 3.1 claims that the dual of the star relaxation is strong and involves fewer variables than its primal—the star relaxation. This dual maximization can be understood as the objective to find lower bounds for the functions minxj∈Ωj fi∗,j(·, xj) ∈ RΩi∗ for all (i∗, j) ∈ N (i∗), called min-marginals, such that the sum of the min-marginals has the largest possible minimum.
Postulate 3.1 (Star Lagrangian Duality). If G = (V, E) is a star graph with root i∗ ∈ V and E = N (i∗), the Lagrangian dual of the star relaxation of Theorem 3.3 is strong and

 
 
min
μi∗,·∈M+(Ωi∗ ×Ω·) μi∗ ∈M+
1 (Ωi∗ )
X
(i∗,j)∈N (i∗)
fi∗,j , μi∗,j
s.t. μi∗ = μi∗,j ◦ π−1
i∗ , ∀(i∗, j) ∈ N (i∗)
(star relaxation)
=

 
 
max
ρi∗ ,· ∈RΩi∗
min
xi∗ ∈Ωi∗
P
(i∗,j)∈N (i∗) ρi∗,j (xi∗ )
s.t. ρi∗,j ≤ minxj∈Ωj fi∗,j (·, xj ) , ∀(i∗, j) ∈ N (i∗) .
(dual star relaxation)
We conclude the analysis of the star relaxation by deriving a closed-form solution to the dual star relaxation in Postulate 3.2 using Lemma 3.1. The solution is not unique, but is characterized by linear inequalities. Intuitively, optimal solutions exceed the minimum of the sum of the min-marginals, while being individually bounded by them.
Lemma 3.1. In the setting of Definition 1.1 and Postulate 3.1, we have for all (i∗, j) ∈ N (i∗) that
min
μi∗,j ∈M+(Ωi∗ ×Ωj )
fi∗,j − ρi∗,j , μi∗,j = min
νi∗,j ∈M+(Ωi∗ )
mi∗,j − ρi∗,j , νi∗,j
= δρi∗,j ≤mi∗,j :=
(
0 if ρi∗,j ≤ mi∗,j
−∞ else ,
where mi∗,j (·) := minxj∈Ωj fi∗,j (·, xj ) and ρi∗,j ∈ RΩi∗ .
Proof. Clear.
24

A preprint – November 26, 2025
Postulate 3.2 (Necessary and Sufficient Conditions for Star Dual Variables). If G = (V, E) is a star graph with root i∗ ∈ V and E = N (i∗), the variables of the Lagrangian dual of the star relaxation of Postulate 3.1 are optimal, i.e.
ρ∗
i∗,· ∈

 
 
arg max
ρi∗ ,· ∈RΩi∗
min
xi∗ ∈Ωi∗
P
(i∗,j)∈N (i∗) ρi∗,j (xi∗ )
s.t. ρi∗,j ≤ mi∗,j , ∀(i∗, j) ∈ N (i∗)
(dual star relaxation)
⇐⇒



min
xi∗ ∈Ωi∗
P
(i∗,j)∈N (i∗) mi∗,j (xi∗ ) ≤ P
(i∗,j)∈N (i∗) ρi∗,j
s.t. ρi∗,j ≤ mi∗,j , ∀(i∗, j) ∈ N (i∗) ,
(NSCSDV)
where mi∗,j (·) := minxj∈Ωj fi∗,j (·, xj ) for all (i∗, j) ∈ N (i∗).
3.3. Entropy-Regularized Relaxation Principle
As solutions to the dual star relaxation from Postulate 3.2 are not unique, and with applications of the results to non-tree-structured sums of bivariates in mind, we aim to derive an entropy-regularized star relaxation. The entropy-regularization will, in fact, turn out to help us in deriving a unique solution, and the new objective that we will construct will uniformly approximate our known star relaxation. The heuristic hope is that an entropy-regularization would also help in “distributing” me-
asure by preferring higher entropies in coupled bivariate marginal measures, such that the possibility of suboptimal convergence may be partly prevented. To this end, we formulate a “parameter-free” version of the maximal-entropy measure that has given coupled bivariate marginal measures, known from Theorem 3.4, in Corollary 3.1. We also find a simple expression for its entropy that is a linear combination of the entropies of its marginals.
Corollary 3.1 (Representation of the Maximal-Entropy Reconstruction). If the graph G = (V, E) is a tree and given

   
   
μi,j ∈ M+(Ωi × Ωj) , ∀(i, j) ∈ E
μi ∈ M+
1 (Ωi) , ∀i ∈ V
s.t. μi = μi,j ◦ π−1
i , ∀(i, j) ∈ E
μj = μi,j ◦ π−1
j , ∀(i, j) ∈ E ,
then the maximal-entropy measure μ ∈ M+
1 (Ω) with marginals μi,j , (i, j) ∈ E, i.e.
μi,j = μ ◦ π−1
i,j ∀(i, j) ∈ E ,
known from Theorem 3.4, has a representation
μ(x) =



Q
(i,j)∈E μi,j (xi, xj ) Q
i∈V μi(xi)|Ne (i)|−1 if μi(xi) > 0 ∀i ∈ V
0 else
, ∀x ∈ Ω .
Further, we have for its entropy
H(μ) =
X
(i,j)∈E
H(μi,j ) −
X
i∈V
(|Ne (i)| − 1) · H(μi) .
25

A preprint – November 26, 2025
Proof. W.l.o.g., we assume G to be oriented. Otherwise, we orient it. Note, that we now have
|
Ne (i)| − 1 = |N (i)| , ∀i ∈ V \ {i∗} ,
where the root of the oriented tree is denoted by i∗ ∈ V.
i. We have to prove that μ as defined in Theorem 3.4 equals the representation given. Clearly, this is the case if there exists x ∈ Ω and i ∈ V with μi(xi) = 0 by the “else”-condition of the definitions. Therefore, we assume that for all x ∈ Ω, we have μi(xi) > 0 for all i ∈ V. We prove the equality by induction over trees. The fact is trivially true for a tree with the root as the only parent vertex. We assume, therefore, that the equality holds
for trees of a fixed depth. Denote by (ij∗ , j∗) ∈ E an arbitrary leaf edge of G. Then,
μ(x) = μi∗ (xi∗ )
Y
(i,j)∈E
μi,j (xi, xj )
μi(xi) (definition in Theorem 3.4)
= μi∗ (xi∗ )
Y
(i,j)∈E\{(ij∗ ,j∗)}
μi,j (xi, xj ) μi(xi)
μij∗ ,j∗ (xij∗ , xj∗ )
μij∗ (xij∗ )
(splitting the product)
=
Y
(i,j)∈E\{(ij∗ ,j∗)}
μi,j (xi, xj )
Y
i∈(V \{j ∗ })
μi(xi)|N j∗ (i)| μij∗ ,j∗ (xij∗ , xj∗ )
μij∗ (xij∗ )
(induction hypothesis; N j∗ (i) := {(i, j) ∈ E \ {(ij∗ , j∗)})
=
Y
(i,j)∈E
μi,j (xi, xj )
Y
i∈V
μi(xi)|N j∗ (i)| .
(by |N j∗ (i)| = |N (i)|, if i ̸= ij∗ ; |N j∗ (ij∗ )| + 1 = |N (ij∗ )| ; |N (j∗)| = 0)
ii. W.l.o.g. assume μ(x) > 0 for all x ∈ Ω. Otherweise, restrict Ω. We have
H(μ) = −Eμ log μ(·) (definition of the entropy H)
= −Eμ log
Y
(i,j)∈E
μi,j (·i, ·j )
Y
i∈V
μi ·i)|Ne (i)|−1 (representation of μ)
=−
X
(i,j)∈E
Eμ log μi,j (·i, ·j ) +
X
i∈V
(|Ne (i)| − 1) · Eμ log μi ·i
(properties of the logarithm; linearity of E)
=−
X
(i,j)∈E
Eμ◦π−1
ij
log μi,j +
X
i∈V
(|Ne (i)| − 1) · Eμ◦π−1
i
log μi
(expect. val. of functions constant in an argument)
=−
X
(i,j)∈E
Eμij log μi,j +
X
i∈V
(|Ne (i)| − 1) · Eμi log μi
(assumption μij = λ ◦ π−1
ij for all (i, j) ∈ E)
=
X
(i,j)∈E
H(μij) −
X
i∈V
(|Ne (i)| − 1) · H(μi) . (definition of the entropy H)
26

A preprint – November 26, 2025
Next, we prove the concavity of the function that, given a family of bivariate measures, assigns the entropy of a global measure that has the family as marginals. This result will be essential to prove the strong Lagrangian duality in Theorem 3.5.
Lemma 3.2. If G = (V, E) is a star graph with root i∗ ∈ V and E = N (i∗), the function
μi∗,j ∈ M+
1 (Ωi∗ × Ωj), (i∗, j) ∈ E 7−→
X
(i∗ ,j )∈E
H(μi∗,j ) − |Ne (i∗)| − 1 · H μi∗,j ◦ π−1
i∗
is concave.
Proof. Let μi∗,j , λi∗,j ∈ M+
1 (Ωi∗ × Ωj ), t ∈ [0, 1], and define zi∗,j := tμi∗,j + (1 − t)λi∗,j . Due to concavity of the entropy and |E| = |Ne (i∗)|, it is sufficient to show the concavity of
X
(i∗ ,j )∈E
H(zi∗,j ) − H zi∗,j ◦ π−1
i∗
=
X
(i∗ ,j )∈E
log(|Ωj |) − DKL zi∗,j , zi∗,j ◦ π−1
i∗ (·i∗ )/|Ωj | (see below argument)
=
X
(i∗ ,j )∈E
log(|Ωj |)
− DKL tμi∗,j + (1 − t)λi∗,j , tμi∗,j ◦ π−1
i∗ (·i∗ )/|Ωj | + (1 − t)λi∗,j ◦ π−1
i∗ (·i∗ )/|Ωj |
(definition of zi∗,j & linearity of marginalization)
≥
X
(i∗ ,j )∈E
t log(|Ωj |) − DKL μi∗,j , μi∗,j ◦ π−1
i∗ (·i∗ )/|Ωj |
+ (1 − t) log(|Ωj |) − DKL λi∗,j , λi∗,j ◦ π−1
i∗ (·i∗ )/|Ωj |
(convexity of KL-divergence)
=t
X
(i∗ ,j )∈E
H(μi∗,j ) − H μi∗,j ◦ π−1
i∗ + (1 − t)
X
(i∗ ,j )∈E
H(λi∗,j ) − H λi∗,j ◦ π−1
i∗ .
(see below argument; linearity)
It follows a similar argument as in [GJ07, Appendix A]. We have a representation of what is know as the conditional entropy of μi∗,j, as
H(μi∗,j ) − H μi∗,j ◦ π−1
i∗
= −Eμi∗,j log μi∗,j + Eμi∗,j ◦π−1
i∗ log μi∗,j ◦ π−1
i∗ (definition entropy)
= −Eμi∗,j log μi∗,j − log μi∗,j ◦ π−1
i∗ (·i∗ ) (constant integration)
= −Eμi∗,j log μi∗,j
μi∗,j ◦ π−1
i∗ (·i∗ ) (properties of log)
= log(|Ωj |) − log(|Ωj |) − Eμi∗,j log μi∗,j
μi∗,j ◦ π−1
i∗ (·i∗ ) (constant addition)
= log(|Ωj |) − Eμi∗,j log μi∗,j (·, ·)
μi∗,j ◦ π−1
i∗ (·i∗ )/|Ωj | (linearity & properties of log)
= log(|Ωj |) − DKL μi∗,j , μi∗,j ◦ π−1
i∗ (·i∗ )/|Ωj | .
(definition of KL-divergence; marginalized distribution is constant in marginalized coordinate)
27

A preprint – November 26, 2025
By subtracting a scaled version of the entropy function of Lemma 3.2 from the star relaxation of Theorem 3.3, one obtains a new regularized objective, termed entropy-regularized star relexation, which, due to the boundedness of the entropy, uniformly approximates the star relaxation. Theorem 3.5 shows that the dual of this new objective now has a unique solution and derives its representation based on the ε-LogSumExp. Similarly to the results in Section 3.2, the theorem will also aid in deriving o-
ptimization algorithms that are applicable to generic sums of bivariates.
Theorem 3.5 (Entropy Star Lagrangian Duality). If G = (V, E) is a star graph with root i∗ ∈ V and E = N (i∗), the Lagrangian dual of the following entropy-regularized star relaxation of Theorem 3.3 is strong, has a unique solution, and

  
  
min
μi∗,·∈M+(Ωi∗ ×Ω·) μi∗ ∈M+
1 (Ωi∗ )
X
(i∗,j)∈N (i∗)
fi∗,j , μi∗,j − εH(μi∗,j ) + ε(|N (i∗)| − 1) · H(μi∗ )
s.t. μi∗ = μi∗,j ◦ π−1
i∗ , ∀(i∗, j) ∈ N (i∗) (entropy-regularized star relaxation)
= max
ρi∗ ,· ∈RΩi∗
min
xi∗ ∈Ωi∗
P
(i∗,j)∈N (i∗) ρi∗,j (xi∗ )
−ε
X
(i∗,j)∈N (i∗)
X
xi∗ ∈Ωi∗
X
xj ∈Ωj
exp ρi∗,j (xi∗ ) − fi∗,j (xi∗ , xj ) /ε − 1
(entropy dual star relaxation)
=

                 
                 
ρ − |N (i∗)|
where
ρi∗,j (xi∗ ) = lseε fi∗,j (xi∗ , ·) + 1
|N (i∗)| ρ −
X
(i∗,k)∈N (i∗)
lseε fi∗,k(xi∗ , ·)
∀xi∗ ∈ Ωi∗ , (i∗, j) ∈ N (i∗)
ρ = ε|N (i∗)| + ε|N (i∗)| log |N (i∗)|/ε
−|N (i∗)|lsexi∗ ,j
ε lsexj
ε fi∗,j (xi∗ , xj ) + lsexj
ε − fi∗,j (xi∗ , xj )
−1
|N (i∗)|
X
(i∗,k)∈N (i∗)
lsexk
ε fi∗,k(xi∗ , xk) .
28

A preprint – November 26, 2025
Proof. The equivalence of the value of Lagrangian primal and dual, i.e. the strong duality, as well as the uniqueness of the solution can be derived directly, as

  
  
min
μi∗,·∈M+(Ωi∗ ×Ω·) μi∗ ∈M+
1 (Ωi∗ )
X
(i∗,j)∈N (i∗)
fi∗,j , μi∗,j − εH(μi∗,j ) + ε(|N (i∗)| − 1) · H(μi∗ )
s.t. μi∗ = μi∗,j ◦ π−1
i∗ , ∀(i∗, j) ∈ N (i∗) .
= max
ρi∗ ,· ∈RΩi∗
min
μi∗,·∈M+(Ωi∗ ×Ω·) μi∗ ∈M+
1 (Ωi∗ )
X
(i∗,j)∈N (i∗)
fi∗,j , μi∗,j − εH (μi∗,j )
+ ε(|N (i∗)| − 1) · H(μi∗ )
+
X
(i∗,j)∈N (i∗)
ρi∗,j , μi∗ − μi∗,j ◦ π−1
i∗
(strong Lagrangian duality by Theorem C.2; Lemma 3.2)
= max
ρi∗ ,· ∈RΩi∗
min
μi∗,·∈M+(Ωi∗ ×Ω·) μi∗ ∈M+
1 (Ωi∗ )
− ε(|N (i∗)| − 1) log μi∗ +
X
(i∗,j)∈N (i∗)
ρi∗,j , μi∗
+
X
(i∗,j)∈N (i∗)
ε log μi∗,j + fi∗,j − ρi∗,j , μi∗,j
(definition entropy; linearity; constant integration)
= max
ρi∗ ,· ∈RΩi∗
min
μi∗ ∈M+
1 (Ωi∗ )
− ε(|N (i∗)| − 1) log μi∗ +
X
(i∗,j)∈N (i∗)
ρi∗,j , μi∗
+
X
(i∗,j)∈N (i∗)
min
μi∗,j ∈M+(Ωi∗ ×Ωj )
ε log μi∗,j + fi∗,j − ρi∗,j , μi∗,j
(minimize separable problems)
= max
ρi∗ ,· ∈RΩi∗
min
xi∗ ∈Ωi∗
P
(i∗,j)∈N (i∗) ρi∗,j (xi∗ )
−ε
X
(i∗,j)∈N (i∗)
X
xi∗ ∈Ωi∗
X
xj ∈Ωj
exp ρi∗,j (xi∗ ) − fi∗,j (xi∗ , xj ) /ε − 1
(by Lemma A.1 & Lemma A.2)
= max
ρi∗ ,· ∈RΩi∗
min
xi∗ ∈Ωi∗
P
(i∗,j)∈N (i∗) ρi∗,j (xi∗ )
−ε
X
xi∗ ∈Ωi∗
X
(i∗,j)∈N (i∗)
exp ρi∗,j (xi∗ )/ε
X
xj ∈Ωj
exp − fi∗,j (xi∗ , xj )/ε − 1
(distributivity & order of summation)
29

A preprint – November 26, 2025
=

                 
                 
ρ − |N (i∗)|
where
ρi∗,j (xi∗ ) = lseε fi∗,j (xi∗ , ·) + 1
|N (i∗)| ρ −
X
(i∗,k)∈N (i∗)
lseε fi∗,k(xi∗ , ·) ,
∀xi∗ ∈ Ωi∗ , (i∗, j) ∈ N (i∗)
ρ = ε|N (i∗)| + ε|N (i∗)| log |N (i∗)|/ε
−|N (i∗)|lsexi∗ ,j
ε lsexj
ε fi∗,j (xi∗ , xj ) + lsexj
ε − fi∗,j (xi∗ , xj )
−1
|N (i∗)|
X
(i∗,k)∈N (i∗)
lsexk
ε fi∗,k(xi∗ , xk) .
(by Lemma A.3)
3.4. Recovering Primal Solutions from Dual Solutions
Finally, we describe how to obtain a minimum of the sum of bivariates from a dual solution, e.g., in the problem formulations of Postulates 3.1 and 3.2, Theorems 3.5 and 4.1, and Remark 4. Since we apply the method beyond star graphs, as opposed to much of the theory of this section, we prove that the result of Theorem 3.6 holds for tree-indexed sums of bivariates. However, the result will be heuristically applicable beyond tree-indexed sums of bivariates.
As we have not introduced the dual of the tree relaxation explicitly for this case yet—mainly because closed-form solutions do not exist in this generality—we forward-reference to the description in Theorem 4.1 to avoid redundancy. Intuitively, the method in Theorem 3.6 determines a solution by sequentially minimizing a sum which fixes determined arguments in bivariates, ignores bivariates that are constant in the active argument, and replaces all bivariates with two undertermined arguments by the-
ir min-marginals.
Theorem 3.6 (Recovering Primal Solutions). In the setting of Theorem 4.1, let
• G = (V, E) be an oriented tree,
• ρi,j ∈ RΩi , ρj,i ∈ RΩj ; (i, j) ∈ E be a solution to the dual linear program,
• ij ∈ V denote the parent node for all non-root j ∈ V, and
mi,j(·) := min
xj ∈Ωj
fi,j(·, xj) − ρj,i(xj) ∀(i, j) ∈ E .
Then, we know that
x∗
j ∈ arg min
xj ∈Ωit
(P
k∈Ne (j)\{ij} mj,k(xj ) if j is the root
fij ,j (x∗
ij , xj ) + P
k∈Ne (j)\{ij } mj,k(xj ) else
minimizes the sum of bivariates F ≡ P
(i,j)∈E fi,j : Ω → R.
Proof. Define ρ := P
i∈V ρi ∈ R. By strong duality (similar proof as Postulate 3.1), we know min F − ρ = 0 and that
F −ρ=
X
(i,j)∈E
fi,j − ρi,j − ρj,i .
30

A preprint – November 26, 2025
By the constraint of the dual linear program of Theorem 4.1, we know that each summand fi,j − ρi,j − ρj,i; (i, j) ∈ E is non-negative, and, therefore, that
x∗ ∈ arg min
x∈Ω
F (x) − ρ ⇐⇒ fi,j(x∗
i , x∗
j ) − ρi,j (x∗
i ) − ρj,i(x∗
j ) = 0 ∀(i, j) ∈ E .
We inductively prove over the tree height that each summand is 0 for our candidate x∗ ∈ Ω.
1. Let i∗ be the root. We show that
X
j∈Ne (i∗)
min
xj ∈Ωj
fi∗,j (x∗
i∗ , xj ) − ρi∗,j (x∗
i∗ ) − ρj,i∗ (xj )
= −ρi∗ +
X
j∈Ne (i∗)
min
xj ∈Ωj
fi∗,j (x∗
i∗ , xj ) − ρj,i∗ (xj )
(i1 is a root; definition of ρi∗ in Theorem 4.1)
= −ρi∗ + min
xi∗ ∈Ωi∗
X
j∈Ne (i∗)
mi∗,j (xi∗ ) (definition of mi∗,j ; definition of x∗
i∗ )
= 0 , (by Postulate 3.2; definition of ρi∗ in Theorem 4.1)
Which implies that xj ∈ Ωj can be selected for all vertices j of depth one, such that the the associated summand is zero, i.e.
0 = min
xj ∈Ωj
fi∗,j (x∗
i∗ , xj ) − ρi∗,j (x∗
i∗ ) − ρj,i∗ (xj ) ∀j ∈ Ne (i∗) .
2. Given the presented method actually selects a successive value x∗
j ∈ Ωj in this way, i.e.
0 = fi,j (x∗
i , x∗
j ) − ρi,j (x∗
i ) − ρj,i(x∗
j)
for some (i, j) ∈ E. We know that
X
k∈Ne (j)\{i}
min
xk ∈Ωk
fj,k (x∗
j , xk) − ρj,k(x∗
j ) − ρk,j (xk)
= fi,j (x∗
i , x∗
j ) − ρi,j (x∗
i ) − ρj,i(x∗
j)
+
X
k∈Ne (j)\{i}
min
xk ∈Ωk
fj,k (x∗
j , xk) − ρj,k(x∗
j ) − ρk,j (xk)
(assumption; adding 0)
= min
xi ∈Ωi
fi,j (xi, x∗
j ) − ρi,j (xi) − ρj,i(x∗
j)
+
X
k∈Ne (j)\{i}
min
xk ∈Ωk
fj,k (x∗
j , xk) − ρj,k(x∗
j ) − ρk,j (xk)
(by fi,j − ρi,j − ρj,i ≥ 0)
= −ρj + min
xi ∈Ωi
fi,j (xi, x∗
j ) − ρi,j (xi) +
X
k∈Ne (j)\{i}
mj,k (x∗
j)
(definition of mj,k and ρj in Theorem 4.1)
= −ρj + min
xj ∈Ωi
min
xji∈Ω fi,j (xi, xj ) − ρi,j (xi) +
X
k∈Ne (j)\{i}
mj,k(xj )
(definition of x∗
j ; swapping minimization)
31

A preprint – November 26, 2025
= 0 . (by Postulate 3.2; definition of ρi∗ in Theorem 4.1)
This implies that all values xk ∈ Ωk of child vertices k of j, can also be selected, such that their associated summand is zero, i.e.
0 = min
xk ∈Ωk
fj,k (x∗
j , xk) − ρj,k(x∗
j ) − ρk,j(xk) ∀k ∈ Ne (j) \ {i} .
3. The method, in fact, selects successive values such that summands are minimized to be zero, i.e.
arg min
xj ∈Ωj
fij ,j (x∗
ij , xj ) +
X
k∈Ne (j)\{ij }
mj,k(xj )
= arg min
xj ∈Ωj
fij ,j (x∗
ij , xj ) − ρij,j (x∗
i ) − ρj +
X
k∈Ne (j)\{ij }
min
xk ∈Ωk
fj,k(xj , xk) − ρk,j (xk)
(definition of mj,k; ρj , ρij,j (x∗
i ) ∈ R)
= arg min
xj ∈Ωj
fij ,j (x∗
ij , xj ) − ρij,j (x∗
i ) − ρj,ij (xj )
+
X
k∈Ne (j)\{ij }
min
xk ∈Ωk
fj,k(xj , xk) − ρj,k(xj ) − ρk,j (xk)
(definition of ρj in Theorem 4.1)
⊆ arg min
xj ∈Ωj
fij ,j (x∗
ij , xj ) − ρij,j (x∗
i ) − ρj,ij (xj ) .
(previous result; non-negativity of summands)
32

A preprint – November 26, 2025
4. Algorithms
We have developed the necessary results to derive several relevant types of optimization algorithms for sums of bivariates in this section. The optimization algorithms that we present differ in the objective function they operate on and their degree of approximating it. For example, the first algorithm we introduce, coordinate descent (CD), operates directly on the sum of bivariates, which is the problem we ultimately aim to solve. All other algorithms, in contrast, operate on some form of dual re-
laxation of the sum of bivariates that we covered in the previous section. While we derived insight into tractable optimization problems in the previous section, we will use these results to derive optimization algorithms for more general but similar problem formulations.
4.1. Coordinate Descent for the Sum of Bivariates
As a baseline algorithm for comparison in experiments, we define a simple coordinate descent procedure to heuristically minimize a sum of bivariates. Since we have shown the problem to be NP-hard, we do not expect efficiency nor convergence to the optimal solution, in general.
In contrast to the coordinate optimization approaches presented below, the following coordinate descent algorithm (CD) sequentially optimizes along single coordinates. The reason is that optimizing over neighborhoods of coordinates could yield an objective that is a partial sum of bivariates that does not have tree structure.
Algorithm 1 Coordinate Descent for the Sum of Bivariates (CD)
Input: vertex set V := N≤n, n ∈ N; edge set E ⊆ {(i, j) ∈ V × V | i < j}; candidate sets Ωi ⊂ R, where |Ωi| ∈ N and i ∈ V; functions fi,j : Ωi × Ωj → R, where (i, j) ∈ E; bijection c : V → N≤n; budget B ∈ N. Output: Element x∗ ∈ Ω1 × · · · × Ωn with “low” function value P
(i,j)∈E fi,j (xi, xj ).
Initialize: E ̃ := {i, j} | (i, j) ∈ E}; Ne (i) = {j | {i, j} ∈ Ee}, i ∈ V.
1: for all i ∈ (c−1(1), . . . , c−1(n)) do 2: x∗
i ∈ arg minxi∈Ωi
P
j∈Ne (i) fmin{i,j},max{i,j}(xmin{i,j}, xmax{i,j})
3: end for
4: if B ≤ t then # stopping criterion 5: return x∗ 6: end if
7: t ← t + 1
8: go to line 1 # repeat the loop
4.2. Linear Programming for the Dual Linear Program
Relaxation is the main alternative to an elementary approach that operates directly on the sum of bivariates. As in the previous section, due to strong duality and fewer variables, the dual of the relaxation replaces the relaxation. The variables of the dual can be interpreted as constant sums of bivariates, such that each bivariate lower-bounds the respective bivariate of the objective function (note the constraint
33

A preprint – November 26, 2025
in Theorem 4.1). In the case of Theorem 4.1, we introduce the dual from a primal perspective, as it arguably better motivates constant univariate dual variables, namely as a type of local lower bound. Specifically, the problem we present in Theorem 4.1, generalizes the dual relaxation of Postulate 3.1 to non-star graphs, while Remark 3 explains when it is still exact.
Theorem 4.1 (Dual Linear Program). In the setting of Definition 1.1, let a sum of bivariates F ≡P
(i,j)∈E fi,j : Ω → R be given, then

      
      
maxP ∈RΩ minx∈Ω P (x)
s.t. P is separable
P ≡P
(i,j)∈E ρ ̃i,j
ρ ̃i,j ∈ RΩi×Ωj
ρ ̃i,j ≤ fi,j ∀(i, j) ∈ E
(Separable Local Lower Bound)
=
(
maxρ·,· ∈RΩ·
P
i∈V minxi∈Ωi
P
j∈Ne (i) ρi,j (xi)
s.t. ρi,j + ρj,i ≤ fi,j ∀(i, j) ∈ E (Dual Tree Relaxation)
=

  
  
maxρ·,· ∈RΩ· ρ· ∈R
P
i∈V ρi
s.t. ρi,j + ρj,i ≤ fi,j ∀(i, j) ∈ E
P
j∈Ne (i) ρi,j ≡ ρi ∀i ∈ V .
(Dual Linear Program)
Remark 3. By Theorem 3.3 and Postulate 3.1, we know that for star graphs the minimal value of the Dual Linear Program is the minimal value of the sum of bivariates. By Example 3.5, we know that this does not apply beyond trees in general.
Proof. We prove the equality of the first and third term

      
      
maxP ∈RΩ minx∈Ω P (x)
s.t. P is separable
P ≡P
(i,j)∈E ρ ̃i,j
ρ ̃i,j ∈ RΩi×Ωj
ρ ̃i,j ≤ fi,j ∀(i, j) ∈ E
=

      
      
maxP ∈RΩ minx∈Ω P (x)
s.t. P is constant
P ≡P
(i,j)∈E ρ ̃i,j
ρ ̃i,j ∈ RΩi×Ωj
ρ ̃i,j ≤ fi,j ∀(i, j) ∈ E
(by projection P 7→ (x 7→ min P ))
=

      
      
maxP ∈RΩ minx∈Ω P (x)
s.t. P is constant
P ≡P
(i,j)∈E ρi,j + ρj,i
ρi,j ∈ RΩi , ρj,i ∈ RΩj
ρi,j + ρj,i ≤ fi,j ∀(i, j) ∈ E
(Corollary 2.1)
=

      
      
maxP ∈RΩ minx∈Ω
P
i∈V
P
j∈Ne (i) ρi,j (xi)
s.t. P is constant
P ≡P
(i,j)∈E ρi,j + ρj,i
ρi,j ∈ RΩi , ρj,i ∈ RΩj
ρi,j + ρj,i ≤ fi,j ∀(i, j) ∈ E
(rewrite objective)
34

A preprint – November 26, 2025
=

        
        
maxP ∈RΩ
P
i∈V minxi∈Ωi
P
j∈Ne (i) ρi,j (xi)
s.t. P is constant
P ≡P
(i,j)∈E ρi,j + ρj,i
ρi,j ∈ RΩi , ρj,i ∈ RΩj , ρi, ρj ∈ R
ρi,j + ρj,i ≤ fi,j ∀(i, j) ∈ E
P
j∈Ne (i) ρi,j ≡ ρi ∀i ∈ V
(P constant ⇐⇒ P
j∈Nf(i) ρi,j constant, i ∈ V)
=

  
  
maxρ·,· ∈RΩ· ρ· ∈R
P
i∈V ρi
s.t. ρi,j + ρj,i ≤ fi,j ∀(i, j) ∈ E
P
j∈Ne (i) ρi,j ≡ ρi ∀i ∈ V .
(eliminate variables and rewrite objective)
The first equality becomes clear, by replacing ρi, i ∈ V in the objective and optimizing over non-constant functions P
j∈Ne (i) ρi,j instead.
In algorithm LPDLP, we minimize a sum of bivariates by using the dual linear program formulation of Theorem 4.1 to generate a dual solution and then deriving a solution candidate to the sum of bivariates using the method described in Theorem 3.6. The algorithm is proven to be exact for tree-indexed sums of bivariates, as the tree relaxation of Theorem 3.3 is exact, its dual is strong via a similar argument as in Postulate 3.1, and the recovery of a primal solution is exact via Theorem 3.6.
Algorithm 2 Linear Programming for the Dual Linear Program (LPDLP)
Input: vertex set V := N≤n, n ∈ N; edge set E ⊆ {(i, j) ∈ V × V | i < j}; candidate sets Ωi ⊂ R, where |Ωi| ∈ N and i ∈ V; functions fi,j : Ωi × Ωj → R, where (i, j) ∈ E. bijection c : V → N≤n; Output: Element x∗ ∈ Ω1 × · · · × Ωn with “low” function value P
(i,j)∈E fi,j (xi, xj ).
Initialize: E ̃ := {i, j} | (i, j) ∈ E}; Ne (i) = {j | {i, j} ∈ Ee}, i ∈ V;
ρi,j , mi,j := 0 ∈ RΩi , ρj,i, mj,i := 0 ∈ RΩj , (i, j) ∈ E; ρi := 0 ∈ R, i ∈ V.
1: solve for # solving the dual linear program; see Theorem 4.1

  
  
(ρ·∗,·, ρ·∗) ∈ arg maxρ·,·∈RΩ·
ρ· ∈R
P
i∈V ρi
s.t. ρi,j (xi) + ρj,i(xj ) ≤ fi,j (xi, xj ) ∀xi ∈ Ωi ∀xj ∈ Ωj ∀(i, j) ∈ E
P
j∈Ne (i) ρi,j (xi) = ρi ∀xi ∈ Ωi ∀i ∈ V
2: mi,j ← minxj∈Ωj fi,j (·, xj ) − ρ∗
j,i(xj), (i, j) ∈ E # dual to primal; see Theorem 3.6
3: mj,i ← minxi∈Ωi fi,j (xi, ·) − ρ∗
i,j(xi), (i, j) ∈ E 4: for i ∈ (c−1(1), . . . , c−1(n)) do 5: x∗
i ∈ arg minxi∈Ωi
P
{i,j}∈Ee c(j)<c(i)
fmin{i,j},max{i,j}(xmin{i,j}, xmax{i,j}) +P
{i,j}∈Ee c(i)<c(j)
mi,j (xi)
6: end for 7: return x∗
35

A preprint – November 26, 2025
4.3. Block Coordinate Ascent for the Dual Tree Relaxation
Consider restricting the minimization of the dual tree relexation from Theorem 4.1 to ρi∗,j ∈ RΩi , j ∈ Ne (i∗) for some coordinate i∗ ∈ V. This yields a new problem on what is called a block coordinate of the objective function. We have
(
maxρi∗ ,· ∈RΩi∗
P
i∈V minxi∈Ωi
P
j∈Ne (i) ρi,j (xi)
s.t. ρi,j + ρj,i ≤ fi,j ∀(i, j) ∈ E
=
(
maxρi∗,·∈RΩi∗ minxi∗ ∈Ωi∗
P
j∈Ne (i∗) ρi∗,j (xi∗ )
s.t. ρi∗,j ≤ minxj∈Ωj fi∗,j (·, xj ) − ρj,i∗ (xj ) ∀j ∈ Ne (i∗) .
(possibly transposing f·,·; dropping constant trerms)
However, by Postulate 3.2, we know how to solve this problem. Repeatedly replacing variables by their block coordinate optima in some given order yields our version of what is called (block) coordinate ascent in BCADTR.
Some authors provide counterexamples even for convergence to an optimal solution of the dual linear program of Theorem 4.1 for methods of this class [DW22, Sec. 4.4]. Others make similar claims [Wer07; PW16; Tou+18; Sav+19]. Evidence for the hypothesis that BCADTR does not, in general, converge to an optimal solution of the dual linear program can also be observed in Section 5.1. To obtain a solution candidate for the minimization of the sum of bivariates, we apply the method described in Theorem -
3.6 once again.
4.4. Block Coordinate Ascent for the Dual Entropy-Regularized Tree Relaxation
This algorithm is inspired by the entropy-based algorithm of [OP24]. We showed by Examples 3.1 and 3.5 that, in case the graph G = (V, E) is not a tree, translating solutions of the tree relaxation presented in Theorem 3.3 to solutions to the minimization of sums of bivariates is NP-hard. However, as previously noted, we have developed a method in Theorem 3.6 that can still be applied heuristically. Further, using linear programming, we can already obtain a dual solution—see Section 4.2 for detail-
s. However, one may expect to use the closed-form solution on block coordinates of Section 3.2 to derive a different, possibly a computationally more efficient, solver. We attempted this already in Section 4.3
We thus propose a block coordinate ascent for the dual of a generalization of the entropyregularized star relaxation of Theorem 3.5 to arbitrary graphs, termed entropy-regularized tree relaxation. This generalization is similarly regularized by an entropy function and approximates tree-structured sums of bivariates. The main differences to the block coordinate ascent solver for the dual tree relaxation of Section 4.3 lie in
1. the fact that the objective of the following solver only results in an approximation of the dual of the tree relaxation, and
2. that we are able to prove convergence of the solver to a solution with an objective value that is arbitrarily close to the optimal value of the dual tree relaxation.
We present the algorithm in BCADETR. Note that it is not obvious whether better solution candidates of the dual yield better solution candidates to the sum of bivariates, in general. Therefore, similarly as for BCADTR, it is not clear in which iteration the method obtains the best solution to the original problem of minimizing a sum of bivariates.
36

A preprint – November 26, 2025
Algorithm 3 Block Coordinate Ascent for the Dual Tree Relaxation (BCADTR)
Input: vertex set V := N≤n, n ∈ N; edge set E ⊆ {(i, j) ∈ V × V | i < j}; candidate sets Ωi ⊂ R, where |Ωi| ∈ N and i ∈ V; functions fi,j : Ωi × Ωj → R, where (i, j) ∈ E; bijection c : V → N≤n; weights wi,j;t ∈ R, j ∈ Ne (i), i ∈ V with P
j∈Ne (i) wi,j;t = 1, t ∈ N≤B ;
budget B ∈ N. Output: Element x∗ ∈ Ω1 × · · · × Ωn with “low” function value P
(i,j)∈E fi,j (xi, xj ).
Initialize: t := 1 ∈ N; Ee := {i, j} | (i, j) ∈ E};
Ne (i) = {j | {i, j} ∈ Ee}, mi := 0 ∈ RΩi , i ∈ V;
mi,j , ρi,j := 0 ∈ RΩi , mj,i, ρj,i := 0 ∈ RΩj , (i, j) ∈ E ; F ≡P
(i,j)∈E fi,j ;
x∗ ∈ Ω1 × · · · × Ωn uniformly at random.
1: for all i ∈ (c−1(1), . . . , c−1(n)) do # one loop in order defined by c 2: for all l ∈ Ne (i) do # block coordinate maximization; see Postulate 3.2
3: mi,j (xi) ← minxj ∈Ωj fmin{i,j},max{i,j}(xmin{i,j}, xmax{i,j}) − ρj,i(xj ), ∀xi ∈ Ωi
4: end for 5: mi ← P
j∈Ne (i) mi,j
6: ρi,j ← mi,j − wi,j;t mi − minxi∈Ωi mi(xi) , j ∈ Ne (i) 7: end for
8: for i ∈ (c−1(1), . . . , c−1(n)) do # dual to primal; see Theorem 3.6 9: y∗
i ∈ arg minxi∈Ωi
P
{i,j}∈Ee c(j)<c(i)
fmin{i,j},max{i,j}(xmin{i,j}, xmax{i,j}) +P
{i,j}∈Ee c(i)<c(j)
mi,j (xi)
10: end for
11: if F (y∗) < F (x∗) then # keep best solution candidate 12: x∗ ← y∗ 13: end if
14: if B ≤ t then # stopping criterion 15: return x∗ 16: end if
17: t ← t + 1
18: go to line 1 # repeat the loop
Remark 4 (Representation of Dual Entropy-Regularized Tree Relaxation). In the setting of Definition 1.1, let a sum of bivariates F ≡ P
(i,j)∈E fi,j : Ω → R and ε > 0 be given. Then, by a similar argument as in Theorem 3.5 and Lemma A.2, we have

    
    
min
μ·,· ∈M+ (Ω· ×Ω· ) μ· ∈M+
1 (Ω·)
X
(i,j)∈E
fi,j , μi,j − εH(μi,j ) + ε
X
i∈V
(|Ne (i)| − 1) · H(μi)
s.t. μi = μi,j ◦ π−1
i , ∀(i, j) ∈ E
μj = μi,j ◦ π−1
j , ∀(i, j) ∈ E
(entropy-regularized tree relaxation)
37

A preprint – November 26, 2025
=

  
  
max
ρ·∈R max
ρ·,· ∈RΩ·
X
i∈V
ρi − ε
X
(i,j)∈E
X
xi ∈Ωi xj ∈Ωj
exp ρi,j (xi) + ρj,i(xj ) − fi,j (xi, xj ) /ε − 1
s.t. P
j∈Ne (i) ρi,j (xi) = ρi , ∀xi ∈ Ωi , i ∈ V .
(dual entropy-regularized tree relaxation)
Remark 5. Due to boundedness of the entropy H, it is clear that for a given sum of bivariates, the entropy-regularized tree relaxation uniformly approximates the tree relaxation of Theorem 3.3. This holds, of course, in particular, if the graph associated with the sum of bivariates is a star graph, as in Theorem 3.5.
Corollary 4.1. The objective value of a block coordinate ascent w.r.t. the blocks ρi,j, ρi; j ∈ Ne (i) for all i ∈ V converges to the global maximal value of the dual entropy-regularized tree relaxation of Remark 4.
Proof. Clearly, due to the convexity of exp, the dual entropy-regularized tree relaxation is a sum of concave functions in ρ· ∈ R, ρ·,· ∈ RΩ· . The objective function is smooth, and the domain of the function is a block-wise product space. Furthermore, by Theorem 3.5, block coordinate-wise minimization yields a unique minimum. Therefore, we can apply Theorem C.1.
38

A preprint – November 26, 2025
Algorithm 4 Block Coordinate Ascent for the Dual Entropy-Regularized Tree Relaxation (BCADETR)
Input: vertex set V := N≤n, n ∈ N; edge set E ⊆ {(i, j) ∈ V × V | i < j}; candidate sets Ωi ⊂ R, where |Ωi| ∈ N and i ∈ V; functions fi,j : Ωi × Ωj → R, where (i, j) ∈ E; entropy regularization coefficient ε ∈ (0, ∞); bijection c : V → N≤n; budget B ∈ N. Output: Element x∗ ∈ Ω1 × · · · × Ωn with “low” function value P
(i,j)∈E fi,j (xi, xj ).
Initialize: t := 1 ∈ R; Ee := {i, j} | (i, j) ∈ E};
Ne (i) = {j | {i, j} ∈ Ee},
γi := ε|Ne (i)| + ε|Ne (i)| log |Ne (i)|/ε , i ∈ V;
ρi,j , mi,j , mi,j , mi,j := 0 ∈ RΩi , ρj,i, mj,i, mj,i, mj,i := 0 ∈ RΩj , (i, j) ∈ E ; F ≡P
(i,j)∈E fi,j ;
x∗ ∈ Ω1 × · · · × Ωn uniformly at random.
1: for all i ∈ (c−1(1), . . . , c−1(n)) do # one loop in order defined by c 2: for all l ∈ Ne (i) do # block coordinate maximization; see Theorem 3.5 3: mi,l(xi) ← lsexl
ε fmin{i,l},max{i,l}(xmin{i,l}, xmax{i,l}) − ρl,i(xl) , ∀xi ∈ Ωi
4: mi,l(xi) ← −lsexl
ε ρl,i(xl) − fmin{i,l},max{i,l}(xmin{i,l}, xmax{i,l}) , ∀xi ∈ Ωi
5: end for
6: ρ ← γi − |Ne (i)|lsexi,l
ε mi,l(xi) − mi,l(xi) − 1
|
Ne (i)|
X
(i,k)∈Ne (i)
mi,k (xi )
7: ρi,j ← mi,j + 1
|
Ne (i)| ρ −
X
(i,k)∈N (i)
mi,k , ∀j ∈ Ne (i)
8: end for
9: mi,j ← minxj∈Ωj fi,j(·, xj) − ρj,i(xj), (i, j) ∈ E # dual to primal; see Theorem 3.6 10: mj,i ← minxi∈Ωi fi,j (xi, ·) − ρi,j (xi), (i, j) ∈ E 11: for i ∈ (c−1(1), . . . , c−1(n)) do 12: y∗
i ∈ arg minxi∈Ωi
P
{i,j}∈Ee c(j)<c(i)
fmin{i,j},max{i,j}(xmin{i,j}, xmax{i,j}) +P
{i,j}∈Ee c(i)<c(j)
mi,j (xi)
13: end for
14: if F (y∗) < F (x∗) then # keep best solution candidate 15: x∗ ← y∗ 16: end if
17: if B ≤ t then # stopping criterion 18: return x∗ 19: end if
20: t ← t + 1
21: go to line 1 # repeat the loop
39

A preprint – November 26, 2025
5. Experiments
In this section, we compare implementations of the algorithms CD, LPDLP, BCADTR, TRW-S and TRW-S-LEG for the optimization of several qualitatively distinct and practically relevant objective function classes. The algorithms TRW-S and TRW-S-LEG are considered state-of-the-art methods for the optimization of sums of bivariates. The experiments include two versions of BCADTR. Namely one, where the weights are sampled uniformly on the simplex for each coordinate and each time step independently, terme-
d “random”, and another version, where the weights are constant for each coordinate and each time step, termed “constant”. The numerically stable implementation of BCADETR is considered to be beyond the scope of this work.
The analysis of the value of dual tree relaxation is restricted to LPDLP and both versions of BCADTR due to their consistent parameterization. All algorithms are available in the Python programming language and are implemented in a vectorized, sparse as well as in-place manner, whenever beneficial.1 The implementation of LPDLP is based on the HiGHS solver for linear programs [HH18]. For all iterative algorithms that operate on the objective, intermediate results are shown. In addition, wall-clock -
time is chosen for comparing the algorithms as it is a common index.
5.1. Random Sums of Bivariates
First, we construct random sums of bivariates. As usual, we are in the setting of Definition 1.1, and we assume the function values of all bivariates to be independently normal distributed. In addition, the edges of the graph that indexes the sum of bivariates follow the distribution of the G(n, m)-model of Erd ̋os–Re ́nyi random graphs. Precisely, we have
Ωi := {1, . . . , Ki} , Ki ∼ Unif {5, . . . , 15} ∀i ∈ N≤n ,
F ≡P
(i,j)∈E fi,j ,
fi,j(xi, xj) ∼ N (0, 1) independently ∀xi ∈ Ωi ∀xj ∈ Ωj ∀(i, j) ∈ E , and
E ∼ Unif {H ⊆ J | |H| = m} , where J := {(i, j) ∈ V × V | i < j} , m ∈ N .
For the experiment, we select the number of arguments of the problem as n = 100, the bijection c : V → N≤n uniformly at random and the number of edges m, such that the density m/|J | of the graph (V, E) approximates the values 10−2, 10−1 and 9 · 10−1. We run the algorithms on 10 independent samples of the objective function F ≡ P
(i,j)∈E fi,j . The
results are visualized in Figure 5.
An interpretation of the results of the first experiment is that sufficiently dense random sums of bivariates contain structure that is hard to exploit for algorithms based on dual relaxations. In particular, even a simple method, such as (primal) coordinate descent (CD) outperforms all other algorithms on sufficiently dense instances. Additionally, random sums of bivariates seem to lie outside the design domain of of the legacy tree-reweighted message passing (TRW-S-LEG), as it is outperformed by-
 the block-coordinate ascent algorithm for the dual tree relaxation (BCADTR). Solving the dual tree relaxation more precisely does not in general yield better primal candidates, as can be seen by the exact solution to the dual linear program (LPDLP). Interestingly, for sufficiently dense random instances, the dual block coordinate ascent algorithm
1An implementation can be found at https://github.com/NiMlr/pybiv.
40

A preprint – November 26, 2025
•
LPDLP • CD • BCADTR (constant w·) • BCADTR (random w·) • TRW-S • TRW-S-LEG
Figure 5: Minimization of random sums of bivariates. Benchmark of several algorithms for the optimization of sums of bivariates with 100 arguments that can each take 5 − 15 values for various densities of the Erd ̋os–R ́enyi random graph that indexes the sum of bivariates. The plots represent the average of 10 independent runs and of the best value found after given wall-clock time. Primal and dual relaxed values are shown. See Section 5.1 for details.
(BCADTR) does not converge to the maximal value of the dual linear program. It can also be seen that the quality of the primal candidate derived from the solution to the dual linear program deteriorates for dense instances at least as much as the quality of the best candidates of all other algorithms.
5.2. Vertex Coloring
For a given graph G = (E, V), vertex coloring asks to determine whether we can assign one of nc colors for each vertex, such that neighboring vertices are assigned different colors. Mathematically, the goal is to determine the existence of a function color : V → {1, . . . , nc}, nc ∈ N, such that color(i) ̸= color(j) for all edges (i, j) ∈ E. The problem of determining whether a nc-coloring with nc = 4 exists for the vertices of a graph is NP-complete. In the next experiment, we attempt to find a -
4-coloring for a given random graph with low density by minimizing the number of color defects between neighboring vertices.
41

A preprint – November 26, 2025
10−1 100 101
200
250
300
wall-clock time [s]
average objective value
•
LPDLP
•
CD
•
BCADTR (constant w·)
•
BCADTR (random w·)
•
TRW-S
•
TRW-S-LEG
Figure 6: Minimization of the number of defects in vertex coloring. Benckmark of several algorithms for the optimization of sums of bivariates with 103 arguments. Each argument that represent one of 4 colors in a vertex coloring of a given Erdo ̋s–Re ́nyi random graph with density 10−2 that indexes the sum of bivariates. The plots represent the average of 10 independent runs and of the best value found after given wall-clock time. See Section 5.2 for details.
Precisely, we have in the setting of Definition 1.1 that
Ωi := {1, 2, 3, 4} ,
F ≡P
(i,j)∈E fi,j ,
fi,j (xi, xj ) =
(
1 if xi = xj
0 else ∀xi ∈ Ωi ∀xj ∈ Ωj ∀(i, j) ∈ E , and
E ∼ Unif {H ⊆ J | |H| = m} , where J := {(i, j) ∈ V × V | i < j} , m ∈ N .
Clearly, if we determine x ∈ Ω such that F (x) = 0, then x encodes a 4-coloring of the graph G. For the experiment, we select the number of arguments of the problem as n = 1000, the bijection c : V → N≤n uniformly at random, and the number of edges m, such that the density m/|J | of the graph (V, E) approximates 10−2. We run the algorithms on 10 independent samples of the objective function F ≡ P
(i,j)∈E fi,j. The results are visualized in Figure 6.
An interpretation of the results of the second experiment is that all algorithms that are based on (tree) relaxations can only determine trivial solutions if the structure of the bivariates is sufficiently adverse. This holds even when the density of the graph is comparatively low. Only coordinate descent (CD) progresses by sequentially selecting each vertex color such that it has the least number of defects. However, we must conclude that all considered algorithms are not even heuristically compe-
titive for the problem class of vertex coloring.
5.3. Signal Reconstruction
The challenge of signal reconstruction describes a setting in which a mathematical function, termed signal, is superimposed with (random) noise and where the goal is to determine the function without noise or a good approximation of it, termed reconstruction. For our purposes, we consider a binary signal sig : Zn → {0, 1} defined on a discretized circle, the quotient group Zn. The noisy version of the signal is given by signoisy : Zn → R, where signoisy(x) = sig(x) + νx and νx ∼ Unif([−1, 1]) inde-
pendently for all x ∈ Zn.
42

A preprint – November 26, 2025
100 101
1.4
1.6
1.8
·104
avg. objective value
•
LPDLP
•
CD
•
BCADTR (constant w·)
•
BCADTR (random w·)
•
TRW-S
•
TRW-S-LEG
100 101
1.3
1.4
1.5
·104
wall-clock time [s]
avg. dual relaxation value
Figure 7: Minimization of the error in a (regularized) signal reconstruction problem. Benckmark of several algorithms for the optimization of sums of bivariates with 25 · 103 arguments. Each argument represents one of 2 values the reconstruction of a binary signal can take. The graph that indexes the sum of bivariates representing the error has an approximate density of 8 · 10−5. The plots represent the average of 10 independent runs and of the best value found after given wall-clock time. Primal -
and dual relaxed values are shown. See Section 5.3 for details.
Given the noisy version of the signal, our reconstruction of the signal is determined by minimizing a heuristic error function, which commonly happens to have a representation as a sum of bivariates. The error function penalizes the reconstruction both when deviating from the noisy signal and when neighboring values are different. Precisely, we have in the setting of Definition 1.1 that
Ωi := {0, 1} ,
F ≡P
(i,j)∈E fi,j ,
fi,j (xi, xj ) = |signoisy(xi) − xi|
+ (1/2) ·
(
0 if xi = xj
1 else ∀xi ∈ Ωi ∀xj ∈ Ωj ∀(i, j) ∈ E , and
E = {(x, x + 1) | x ∈ Zn} .
For the experiment, we select the number of arguments of the problem as n = 25 · 103, the signal sig is sampled uniformly at random and the bijection c : V → N≤n as c(i) = i for all i ∈ V. The density is approximately 8 · 10−5. We run the algorithms on 10 independent samples of the objective function F ≡ P
(i,j)∈E fi,j. The results are visualized in Figure 7.
43

A preprint – November 26, 2025
An interpretation of the results of the third experiment is that all algorithms that are based on (tree) relaxations perform well in reconstructing the signal. The fact that the relaxation gap is rather small and that all such methods outperform CD significantly suggests that the performance of the algorithms is non-trivial. Legacy tree-reweighted message passing (TRW-S-LEG) works especially well—arguably because signal reconstruction methods are the design domain of this method. This class of pro-
blems seems to be the only class in which explicitly solving the dual linear program (LPDLP) is competitive. In addition, the block-coordinate ascent methods converge to the maximum of the dual linear program.
44

A preprint – November 26, 2025
6. Conclusion and Future Work
We provided a comprehensive introduction to relaxation theory for the optimization of sums of bivariates that resulted in closed-form, linear programming, and block coordinate ascent solution approaches. The work was motivated by a fundamental perspective on both hard as well as easy instances of sums of bivariates, and a distributional perspective on the function class using a (no-)free-lunch theorem. The theory featured insightful results on the limits of relaxation-based approaches, as well as -
fundamental restrictions on the reconstruction of global functions from their bivariate marginals, which are intimately related to the theory of sums of bivariates. A central technique when working with bivariates was the design of methods that not only provide the correct result for tree-structured sums of bivariates, but are applicable outside this narrow domain. We continued to apply this principle in entropy calculations and regularization.
Promising future work extends the theory of tractable subclasses of the sums of bivariates. This could be done, e.g., via a theory of separable lower bounds to bivariates as well as via approximation results that extend our analysis. Although suggested by the complexity results and the relaxation theory of this work, our experiments provide further evidence for this claim. Generally, it is plausible that a theory of sums of bivariates shall precede a theory of the minimization thereof. It is also -
plausible that such generic structures as sums of bivariates are useful in other areas of applied mathematics. Alternatives to relaxation-based optimization algorithms may be found via integer linear programming formulations of sums of bivariates.
45

A preprint – November 26, 2025
References
[Ama72] S.-I. Amari. “Learning Patterns and Pattern Sequences by Self-Organizing Nets of Threshold Elements”. In: IEEE Transactions on Computers C-21.11 (1972), pp. 1197–1206.
[Ber18] D. P. Bertsekas. Nonlinear Programming: 3rd Edition. Athena Scientific, 2018.
[DW22] T. Dlask and T. Werner. “Classes of linear programs solvable by coordinate-wise minimization”. In: Annals of Mathematics and Artificial Intelligence 90.7 (2022), pp. 777–807.
[GJ07] A. Globerson and T. Jaakkola. “Approximate inference using conditional entropy decompositions”. In: Proceedings of Machine Learning Research. PMLR, 2007, pp. 131–138.
[GK02] C. Geiger and C. Kanzow. Theorie und Numerik restringierter Optimierungsaufgaben. Springer Berlin Heidelberg, 2002.
[HH18] Q. Huangfu and J. J. Hall. “Parallelizing the dual revised simplex method”. In: Mathematical Programming Computation 10.1 (2018), pp. 119–142.
[IT04] C. Igel and M. Toussaint. “A No-Free-Lunch Theorem for Non-Uniform Distributions of Target Functions”. In: Journal of Mathematical Modelling and Algorithms 3.4 (2004), pp. 313–322.
[Kap+15] J. H. Kappes et al. “A Comparative Study of Modern Inference Techniques for Structured Discrete Energy Minimization Problems”. In: International Journal of Computer Vision 115.2 (2015), pp. 155–184.
[Kol05] V. Kolmogorov. “Convergent tree-reweighted message passing for energy minimization”. In: Proceedings of the Tenth International Workshop on Artificial Intelligence and Statistics. Vol. R5. Proceedings of Machine Learning Research. PMLR, 2005, pp. 182–189.
[Kol14] V. Kolmogorov. “A new look at reweighted message passing”. In: IEEE transactions on pattern analysis and machine intelligence 37.5 (2014), pp. 919–930.
[KPT07] N. Komodakis, N. Paragios, and G. Tziritas. “MRF Optimization via Dual Decomposition: Message-Passing Revisited”. In: 2007 IEEE 11th International Conference on Computer Vision. 2007, pp. 1–8.
[KV06] B. Korte and J. Vygen. Combinatorial Optimization: Theory and Algorithms. Springer, 2006.
[LI13] Q. Liu and A. Ihler. “Variational algorithms for marginal MAP”. In: Journal of Machine Learning Research 14 (2013), pp. 3165–3200.
[LS21] J.-H. Lange and P. Swoboda. “Efficient Message Passing for 0–1 ILPs with Binary Decision Diagrams”. In: Proceedings of the 38th International Conference on Machine Learning. Vol. 139. Proceedings of Machine Learning Research. PMLR, 2021, pp. 6000–6010.
[LSH16] M. Li, A. Shekhovtsov, and D. Huber. “Complexity of Discrete Energy Minimization Problems”. In: Computer Vision – ECCV 2016. 2016, pp. 834–852.
[Mar52] H. Markowitz. “Portfolio Selection”. In: The Journal of Finance 7.1 (1952), pp. 77–91.
[MG21] N. M ̈uller and T. Glasmachers. “Non-local optimization: imposing structure on optimization problems by relaxation”. In: Proceedings of the 16th ACM/SIGEVO Conference on Foundations of Genetic Algorithms. FOGA ’21. Association for Computing Machinery, 2021.
46

A preprint – November 26, 2025
[OP24] P. Ochs and T. Pock. “Optimization View on DBCA”. In: Unpublished (2024).
[PW15] D. Pr ̊uˇsa and T. Werner. “Universality of the Local Marginal Polytope”. In: IEEE Transactions on Pattern Analysis and Machine Intelligence 37.4 (2015), pp. 898–904.
[PW16] D. Pru ̊sˇa and T. Werner. “LP relaxation of the Potts labeling problem is as hard as any linear program”. In: IEEE Transactions on Pattern Analysis and Machine Intelligence 39.7 (2016), pp. 1469–1475.
[Sav+19] B. Savchynskyy et al. Discrete Graphical Models—An Optimization Perspective. Vol. 11. 3-4. Now Publishers, Inc., 2019, pp. 160–429.
[Sch76] M. I. Schlesinger. “Syntactic analysis of two-dimensional visual signals in the presence of noise”. In: Cybernetics 12.4 (1976), pp. 612–628.
[SG07] M. I. Schlesinger and V. V. Giginyak. “Solution to structural recognition (MAX,+)problems by their equivalent transformations”. In: Part 1 (2007), pp. 3–15.
[SK75] D. Sherrington and S. Kirkpatrick. “Solvable Model of a Spin-Glass”. In: Phys. Rev. Lett. 35 (26 1975), pp. 1792–1796.
[Sla59] M. Slater. “Lagrange Multipliers Revisited”. In: Cowles Foundation Discussion Papers. 80. 1959.
[SVW01] C. Schumacher, M. D. Vose, and L. D. Whitley. “The No Free Lunch and problem description length”. In: Proceedings of the 3rd Annual Conference on Genetic and Evolutionary Computation. GECCO’01. 2001, pp. 565–570.
[Tou+18] S. Tourani et al. “MPLP++: Fast, parallel dual block-coordinate ascent for dense graphical models”. In: Proceedings of the European Conference on Computer Vision (ECCV). 2018, pp. 251–267.
[Tou+20] S. Tourani et al. “Taxonomy of Dual Block-Coordinate Ascent Methods for Discrete Energy Minimization”. In: Proceedings of the Twenty Third International Conference on Artificial Intelligence and Statistics. Vol. 108. Proceedings of Machine Learning Research. PMLR, 2020, pp. 2775–2785.
[Wer07] T. Werner. “A Linear Programming Approach to Max-Sum Problem: A Review”. In: IEEE Transactions on Pattern Analysis and Machine Intelligence 29.7 (2007), pp. 1165–1179.
[WJ08] M. J. Wainwright and M. I. Jordan. “Graphical Models, Exponential Families, and Variational Inference”. In: Foundations and Trends in Machine Learning 1.1–2 (2008), pp. 1–305.
47

A preprint – November 26, 2025
A. Additional Proofs
A.1. Lemmata for Theorem 3.5
Lemma A.1. In the setting of Definition 1.1 and Theorem 3.5, we have that
min
μi∗ ∈M+
1 (Ωi∗ )
− ε(|N (i∗)| − 1) log μi∗ +
X
(i∗,j)∈N (i∗)
ρi∗,j , μi∗ = min
xi∗ ∈Ωi∗
X
(i∗,j)∈N (i∗)
ρi∗,j (xi∗ ) ,
where ε > 0 and ρi∗,j ∈ RΩi∗ , (i∗, j) ∈ N (i∗).
Proof. W.l.o.g., we assume that |N (i∗)| − 1 > 0. Otherwise, the statement is clearly correct. Define
G(μi∗ ) := − ε(|N (i∗)| − 1) log μi∗ +
X
(i∗,j)∈N (i∗)
ρi∗,j , μi∗
=
X
xi∗ ∈Ωi∗
μi∗ (xi∗ ) − ε(|N (i∗)| − 1) log μi∗ (xi∗ ) +
X
(i∗,j)∈N (i∗)
ρi∗,j (xi∗ )
(definition scalar product)
for all μi∗ ∈ M+
1 (Ωi∗ ) . We have for all xi∗ , yi∗ ∈ Ωi∗ and all strictly positive measures
μi∗ ∈ M+
1 (Ωi∗ ) that
∂
∂μi∗ (yi∗ )
∂
∂μi∗ (xi∗ ) G(μi∗ )
=∂
∂μi∗ (yi∗ )
∂
∂μi∗ (xi∗ ) μi∗ (xi∗ ) − ε(|N (i∗)| − 1) log μi∗ (xi∗ ) +
X
(i∗,j)∈N (i∗)
ρi∗,j (xi∗ )
(definition G)
=∂
∂μi∗ (yi∗ ) − ε(|N (i∗)| − 1) log μi∗ (xi∗ ) + 1 +
X
(i∗,j)∈N (i∗)
ρi∗,j (xi∗ ) (product rule)
= χxi∗ =yi∗
−ε(|N (i∗)| − 1)
μi∗ (xi∗ ) . (χ denotes indicator function)
Therefore, the Hessian of G is negative definite and G is strictly concave. This implies that the minimum of G lies on the boundary of M+
1 (Ωi∗ ). Which in turn implies that at least one atom xi∗ ∈ Ωi∗ of the minimum has zero measure. Fixing μi∗(xi∗ ) = 0 and minimizing G over the remaining atoms yields a problem with the same properties, recursively. Therefore, the minimum of G must be a Dirac measure. Thus, we have
min
μi∗ ∈M+
1 (Ωi∗ )
− ε(|N (i∗)| − 1) log μi∗ +
X
(i∗,j)∈N (i∗)
ρi∗,j , μi∗
= min
μi∗ ∈D(Ωi∗ )
− ε(|N (i∗)| − 1) log μi∗ +
X
(i∗,j)∈N (i∗)
ρi∗,j , μi∗
(D(Ωi∗ ) denotes the Dirac measures on Ωi∗ )
= min
μi∗ ∈D(Ωi∗ )
X
xi∗ ∈Ωi∗
μi∗ (xi∗ ) − ε(|N (i∗)| − 1) log μi∗ (xi∗ ) +
X
(i∗,j)∈N (i∗)
ρi∗,j (xi∗ )
(definition scalar product)
= min
μi∗ ∈D(Ωi∗ )
X
xi∗ ∈Ωi∗
χμi∗ (xi∗ )=1
X
(i∗,j)∈N (i∗)
ρi∗,j (xi∗ ) (χ denotes indicator function)
48

A preprint – November 26, 2025
= min
xi∗ ∈Ωi∗
X
(i∗,j)∈N (i∗)
ρi∗,j (xi∗ ) .
Lemma A.2. In the setting of Definition 1.1 and Theorem 3.5, we have for all (i∗, j) ∈ N (i∗) that
min
μi∗,j ∈M+(Ωi∗ ×Ωj )
ε log μi∗,j + fi∗,j − ρi∗,j , μi∗,j
= −ε
X
xi∗ ∈Ωi∗
X
xj ∈Ωj
exp ρi∗,j (xi∗ ) − fi∗,j (xi, xj ) /ε − 1 ,
where ε > 0 and ρi∗,j ∈ RΩi∗ .
Proof. We have
min
μi∗,j ∈M+(Ωi∗ ×Ωj )
ε log μi∗,j + fi∗,j − ρi∗,j , μi∗,j
= min
μi∗,j ∈M+(Ωi∗ ×Ωj )
X
xi∗ ∈Ωi∗
X
xj ∈Ωj
μi∗,j (xi∗ , xj ) ε log μi∗,j (xi∗ , xj ) + fi∗,j (xi∗ , xj ) − ρi∗,j (xi∗ )
=
X
xi∗ ∈Ωi∗
X
xj ∈Ωj
min
μi∗,j (xi∗ ,xj )∈[0,∞)
μi∗,j (xi∗ , xj ) ε log μi∗,j (xi∗ , xj ) + fi∗,j (xi∗ , xj ) − ρi∗,j (xi∗ ) .
It can be observed that for all xi∗ ∈ Ωi∗ and xj ∈ Ωj, the minimizer of each subproblem will never be at ∞, since the objective convergences to ∞ for μi∗,j(xi∗ , xj) → ∞. Further, at μi∗,j(xi∗ , xj) ↓ 0 the objective has the value 0. Therefore, we check a first order criterion to find critical points with μi∗,j(xi∗ , xj) > 0. We have for such critical points that
0 != d
dμi∗,j (xi∗ , xj ) μi∗,j (xi∗ , xj ) ε log μi∗,j (xi∗ , xj ) + fi∗,j (xi∗ , xj ) − ρi∗,j (xi∗ )
= ε log μi∗,j (xi∗ , xj ) + 1 + fi∗,j (xi∗ , xj ) − ρi∗,j (xi∗ ) (product rule)
⇐⇒ μi∗,j (xi∗ , xj ) = exp ρi∗,j (xi∗ ) − fi∗,j (xi∗ , xj ) /ε − 1 .
Plugging the critical point into the objective, we see that the associated objective value is
exp ρi∗,j (xi∗ ) − fi∗,j (xi∗ , xj ) /ε − 1 ε log exp ρi∗,j (xi∗ ) − fi∗,j (xi∗ , xj ) /ε − 1
+ fi∗,j (xi∗ , xj ) − ρi∗,j (xi∗ )
= − exp ρi∗,j (xi∗ ) − fi∗,j (xi∗ , xj ) /ε − 1 ε .
The critical point, which has a negative function value, must be a minimizer, as at both boundaries the function has non-negative values and there are no further critical points. Plugging this representation of the minimal value into the initial equation, we get
min
μi∗,j ∈M+(Ωi∗ ×Ωj )
ε log μi∗,j + fi∗,j − ρi∗,j , μi∗,j
= −ε
X
xi∗ ∈Ωi∗
X
xj ∈Ωj
exp ρi∗,j (xi∗ ) − fi∗,j (xi∗ , xj ) /ε − 1 .
49

A preprint – November 26, 2025
Lemma A.3. In the setting of Definition 1.1 and Theorem 3.5, we have
max
ρi∗ ,· ∈RΩi∗
min
xi∗ ∈Ωi∗
P
(i∗,j)∈N (i∗) ρi∗,j (xi∗ )
−ε
X
xi∗ ∈Ωi∗
X
(i∗,j)∈N (i∗)
exp ρi∗,j (xi∗ )/ε
X
xj ∈Ωj
exp − fi∗,j (xi∗ , xj )/ε − 1 .
=

                 
                 
ρ − |N (i∗)|
where
ρi∗,j (xi∗ ) = lseε fi∗,j (xi∗ , ·) + 1
|N (i∗)| ρ −
X
(i∗,k)∈N (i∗)
lseε fi∗,k(xi∗ , ·) ,
∀xi∗ ∈ Ωi∗ , (i∗, j) ∈ N (i∗)
ρ = ε|N (i∗)| + ε|N (i∗)| log |N (i∗)|/ε
−|N (i∗)|lsexi∗ ,j
ε lsexj
ε fi∗,j (xi∗ , xj ) + lsexj
ε − fi∗,j (xi∗ , xj )
−1
|N (i∗)|
X
(i∗,k)∈N (i∗)
lsexk
ε fi∗,k(xi∗ , xk) .
Proof. We have
max
ρi∗ ,· ∈RΩi∗
min
xi∗ ∈Ωi∗
P
(i∗,j)∈N (i∗) ρi∗,j (xi∗ )
−ε
X
xi∗ ∈Ωi∗
X
(i∗,j)∈N (i∗)
exp ρi∗,j (xi∗ )/ε
X
xj ∈Ωj
exp − fi∗,j (xi∗ , xj )/ε − 1
=

 
 
max
ρ∈R max
ρi∗ ,· ∈RΩi∗
ρ−ε
X
xi∗ ∈Ωi∗
X
(i∗,j)∈N (i∗)
exp ρi∗,j (xi∗ )/ε
X
xj ∈Ωj
exp − fi∗,j (xi∗ , xj )/ε − 1
s.t. P
(i∗,j)∈N (i∗) ρi∗,j (xi∗ ) = ρ , ∀xi∗ ∈ Ωi∗
(separability & monotonicity)
= max
ρ∈R ρ − ε ·

 
 
minρi∗ ,·∈RΩi∗
X
xi∗ ∈Ωi∗
X
(i∗,j)∈N (i∗)
exp ρi∗,j (xi∗ )/ε
X
xj ∈Ωj
exp − fi∗,j (xi∗ , xj )/ε−1
s.t. P
(i∗,j)∈N (i∗) ρi∗,j (xi∗ ) = ρ , ∀xi∗ ∈ Ωi∗
(separability)
=

     
     
maxρ∈R ρ − ε
X
xi∗ ∈Ωi∗
X
(i∗,j)∈N (i∗)
exp ρi∗,j (xi∗ )/ε
X
xj ∈Ωj
exp − fi∗,j (xi∗ , xj )/ε − 1
where ρi∗,j (xi∗ ) = lseε fi∗,j (xi∗ , ·) + 1
|N (i∗)| ρ −
X
(i∗,k)∈N (i∗)
lseε fi∗,k(xi∗ , ·) ,
∀xi∗ ∈ Ωi∗ , (i∗, j) ∈ N (i∗)
(see “inner problem” below)
50

A preprint – November 26, 2025
=

                   
                   
ρ−ε
X
xi∗ ∈Ωi∗
X
(i∗,j)∈N (i∗)
exp ρi∗,j (xi∗ )/ε
X
xj ∈Ωj
exp − fi∗,j (xi∗ , xj )/ε − 1
where
ρi∗,j (xi∗ ) = lseε fi∗,j (xi∗ , ·) + 1
|N (i∗)| ρ −
X
(i∗,k)∈N (i∗)
lseε fi∗,k(xi∗ , ·) ,
∀xi∗ ∈ Ωi∗ , (i∗, j) ∈ N (i∗)
ρ = ε|N (i∗)| + ε|N (i∗)| log |N (i∗)|/ε
−|N (i∗)|lsexi∗ ,j
ε lsexj
ε fi∗,j (xi∗ , xj ) + lsexj
ε − fi∗,j (xi∗ , xj )
−1
|N (i∗)|
X
(i∗,k)∈N (i∗)
lsexk
ε fi∗,k(xi∗ , xk)
(see “outer problem” below)
=

                 
                 
ρ − |N (i∗)|
where
ρi∗,j (xi∗ ) = lseε fi∗,j (xi∗ , ·) + 1
|N (i∗)| ρ −
X
(i∗,k)∈N (i∗)
lseε fi∗,k(xi∗ , ·) ,
∀xi∗ ∈ Ωi∗ , (i∗, j) ∈ N (i∗)
ρ = ε|N (i∗)| + ε|N (i∗)| log |N (i∗)|/ε
−|N (i∗)|lsexi∗ ,j
ε lsexj
ε fi∗,j (xi∗ , xj ) + lsexj
ε − fi∗,j (xi∗ , xj )
−1
|N (i∗)|
X
(i∗,k)∈N (i∗)
lsexk
ε fi∗,k(xi∗ , xk) .
(see “simplify maximal value” below)
Simplify maximal value: In the above setting, we have
ρ−ε
X
xi∗ ∈Ωi∗
X
(i∗,j)∈N (i∗)
exp ρi∗,j (xi∗ )/ε
X
xj ∈Ωj
exp − fi∗,j (xi∗ , xj )/ε − 1
= ρ − ε exp 1
ε ε log
X
xi∗ ∈Ωi∗
X
(i∗,j)∈N (i∗)
exp ρi∗,j (xi∗ ) + lsexj
ε − fi∗,j (xi∗ , xj ) − ε /ε
(definition lseε; properties of exp; exp log ≡ id)
= ρ − ε exp lsexi∗ ,j
ε ρi∗,j (xi∗ ) + lsexj
ε − fi∗,j (xi∗ , xj ) /ε − 1 .
(definition lseε; properties of lseε)
= ρ − ε exp lsexi∗ ,j
ε lsexj
ε fi∗,j (xi∗ , xj ) + 1
|N (i∗)| ρ −
X
(i∗,k)∈N (i∗)
lsexk
ε fi∗,k(xi∗ , xk)
+ lsexj
ε − fi∗,j (xi∗ , xj ) /ε − 1 .
(representation of ρi∗,j(xi∗ ); renaming variables)
= ρ − ε exp lsexi∗ ,j
ε lsexj
ε fi∗,j (xi∗ , xj ) − 1
|N (i∗)|
X
(i∗,k)∈N (i∗)
lsexk
ε fi∗,k(xi∗ , xk)
+ lsexj
ε − fi∗,j (xi∗ , xj ) /ε + ρ
ε|N (i∗)| − 1
(constant addition to lseε)
51

A preprint – November 26, 2025
= ρ − ε exp 1 + log |N (i∗)|/ε − 1 (representation of ρ)
= ρ − |N (i∗)| . (simplifying)
Outer problem: Since the outer problem is unbounded from below at infinity, a necessary condition for the maximizers of the outer problem can be found using a first order criterion, i.e. in critical points. Define
R(ρ) := ρ − ε ·
X
xi∗ ∈Ωi∗
X
(i∗,j)∈N (i∗)
exp ρi∗,j (xi∗ )/ε
X
xj ∈Ωj
exp − fi∗,j (xi∗ , xj )/ε − 1
where ρi∗,j (xi∗ ) = lseε fi∗,j (xi∗ , ·) − 1
|N (i∗)|
X
(i∗,k)∈N (i∗)
lseε fi∗,k(xi∗ , ·)
| {z }
=:γ(xi∗ ,j)
+ρ
|N (i∗)| .
We have
0= d
dρ R(ρ)
= 1− ε
|N (i∗)| ·
X
xi∗ ∈Ωi∗
X
(i∗,j)∈N (i∗)
exp ρi∗,j (xi∗ )/ε
X
xj ∈Ωj
exp −fi∗,j (xi∗ , xj )/ε−1
= 1− ε
|N (i∗)| ·
X
xi∗ ∈Ωi∗
X
(i∗,j)∈N (i∗)
exp γ(xi∗ , j)/ε + ρ
ε|N (i∗)|
X
xj ∈Ωj
exp −fi∗,j (xi∗ , xj )/ε−1
(definition of ρi∗,·)
⇐⇒
1 = exp ρ
ε|N (i∗)|
ε
|N (i∗)| ·
X
xi∗ ∈Ωi∗
X
(i∗,j)∈N (i∗)
exp γ(xi∗ , j)/ε
X
xj ∈Ωj
exp −fi∗,j (xi∗ , xj )/ε − 1
(rearranging)
⇐⇒ ρ = ε|N (i∗)| log |N (i∗)| ε
X
xi∗ ∈Ωi∗
X
(i∗,j)∈N (i∗)
exp γ(xi∗ , j)/ε
X
xj ∈Ωj
exp − fi∗,j (xi∗ , xj )/ε − 1
(rearranging)
= ε|N (i∗)| log |N (i∗)| ε
X
xi∗ ∈Ωi∗
X
(i∗,j)∈N (i∗)
exp γ(xi∗ , j)/ε exp lseε − fi∗,j(xi∗ , ·) − ε /ε
(definition lseε)
= ε|N (i∗)| log |N (i∗)| ε
X
xi∗ ∈Ωi∗
X
(i∗,j)∈N (i∗)
exp 1
ε γ(xi∗ , j) + lseε − fi∗,j (xi∗ , ·) − ε
(property of exp)
= ε|N (i∗)| log |N (i∗)|/ε
− ε|N (i∗)| log
X
xi∗ ∈Ωi∗
X
(i∗,j)∈N (i∗)
exp 1
ε γ(xi∗ , j) + lseε − fi∗,j (xi∗ , ·) − ε
(property of log)
= ε|N (i∗)| log |N (i∗)|/ε − |N (i∗)|lsexi∗ ,j
ε γ(xi∗ , j) + lsexj
ε − fi∗,j (xi∗ , xj ) − ε
(definition of lseε; superscript of lseε denotes the variable being maximized)
52

A preprint – November 26, 2025
= ε|N (i∗)| + ε|N (i∗)| log |N (i∗)|/ε
− |N (i∗)|lsexi∗ ,j
ε γ(xi∗ , j) + lsexj
ε − fi∗,j (xi∗ , xj )
(constant addition to lseε)
= ε|N (i∗)| + ε|N (i∗)| log |N (i∗)|/ε
− |N (i∗)|lsexi∗ ,j
ε lsexj
ε fi∗,j (xi∗ , xj )
−1
|N (i∗)|
X
(i∗,k)∈N (i∗)
lsexk
ε fi∗,k(xi∗ , xk) + lsexj
ε − fi∗,j (xi∗ , xj )
(definition γ(xi∗ , j); superscript of lseε denotes the variable being maximized)
Inner problem: Since the inner problem is unbounded from above at infinity, a necessary condition for the minimizers of the inner problem can be found using Lagrange multipliers, i.e. in critical points of the function
G λ·, ρi∗,·(·) :=
X
xi∗ ∈Ωi∗
X
(i∗,j)∈N (i∗)
exp ρi∗,j (xi∗ )/ε
X
xj ∈Ωj
exp − fi∗,j (xi∗ , xj )/ε − 1
−
X
xi∗ ∈Ωi∗
λxi∗
P
(i∗,j)∈N (i∗) ρi∗,j (xi∗ ) − ρ ,
where λ· ∈ RΩi∗ . We have for a critical point that
0= ∂
∂ρi∗,j (xi∗ ) G λ·, ρi∗,·(·)
= (1/ε) exp ρi∗,j (xi∗ )/ε
X
xj ∈Ωj
exp − fi∗,j (xi∗ , xj )/ε − 1 − λxi∗
⇐⇒ ε log ελxi∗
= ρi∗,j (xi∗ )+ε log
X
xj ∈Ωj
exp −fi∗,j (xi∗ , xj )/ε−1 , ∀(i∗, j) ∈ N (i∗) , ∀xi∗ ∈ Ωi∗ .
(applying the function ε log(ε(· + λxi∗ )))
From the constraint of the inner problem, we can find the minimizer, as
P
(i∗,k)∈N (i∗) ρi∗,k (xi∗ ) = ρ , ∀xi∗ ∈ Ωi∗
⇐⇒
X
(i∗,k)∈N (i∗)
ε log ελxi∗ − ε log
X
xk ∈Ωk
exp − fi∗,k(xi∗ , xk)/ε − 1 = ρ , ∀xi∗ ∈ Ωi∗
(necessary condition on critical points)
⇐⇒ |N (i∗)|ε log ελxi∗ −
X
(i∗,k)∈N (i∗)
ε log
X
xk ∈Ωk
exp −fi∗,k(xi∗ , xk)/ε−1 = ρ , ∀xi∗ ∈ Ωi∗
(constant summation)
⇐⇒ |N (i∗)| ρi∗,j (xi∗ ) + ε log
X
xj ∈Ωj
exp − fi∗,j (xi∗ , xj )/ε − 1
−
X
(i∗,k)∈N (i∗)
ε log
X
xk ∈Ωk
exp −fi∗,k(xi∗ , xk)/ε−1 = ρ , ∀xi∗ ∈ Ωi∗ , (i∗, j) ∈ N (i∗)
(necessary condition on critical points)
53

A preprint – November 26, 2025
⇐⇒ ρi∗,j (xi∗ ) = 1
|N (i∗)| ρ +
X
(i∗,k)∈N (i∗)
ε log
X
xk ∈Ωk
exp − fi∗,k(xi∗ , xk)/ε − 1
− ε log
X
xj ∈Ωj
exp − fi∗,j (xi∗ , xj )/ε − 1 , ∀xi∗ ∈ Ωi∗ , (i∗, j) ∈ N (i∗)
(rearranging)
⇐⇒ ρi∗,j (xi∗ )
=1
|N (i∗)| ρ+ε
X
(i∗,k)∈N (i∗)
log
P
xj∈Ωjexp fi∗,j (xi∗ , xj )/ε +1
P
xk∈Ωkexp fi∗,k(xi∗ , xk)/ε +1 , ∀xi∗ ∈ Ωi∗ , (i∗, j) ∈ N (i∗).
(simplifying)
⇐⇒ ρi∗,j (xi∗ )
= lseε fi∗,j (xi∗ , ·) + 1
|N (i∗)| ρ −
X
(i∗,k)∈N (i∗)
lseε fi∗,k(xi∗ , ·) , ∀xi∗ ∈ Ωi∗ , (i∗, j) ∈ N (i∗).
(simplifying)
54

A preprint – November 26, 2025
B. Additional Code
B.1. Verifying that F ◦ p ̃ of Example 3.4 is not a sum of bivariates
import numpy as np from sympy.matrices import Matrix import itertools from permutation import Permutation
# drop prefix and add zeros to binary string def fill(bin_num, n): len_bin_num = len(bin_num)-2 return ’0’*(n-len_bin_num)+bin_num[2:]
# evaluate the function given a binary string and its dimension def F(bin_str_ori): n = len(bin_str_ori) num = int(bin_str_ori, 2) pnum = perm[num] bin_str = fill(bin(pnum), n)
out = 0
for pair in itertools.combinations(list(range(n)), 2): if (bin_str[pair[0]] == bin_str[pair[1]]) & (bin_str[pair[0]] == ’1’): out += 1 return out
if __name__ == "__main__":
# smallest possible dimension for a counterexample # with binary domain n=6
# found by perm = np.random.permutation(2**6)
perm = np.array([8, 52, 62, 30, 43, 27, 1, 36, 18, 58, 53, 54, 33, 22, 39, 49, 23, 10, 11, 57, 29, 6, 25, 32, 47, 16, 55, 56, 26, 0, 19, 15, 7, 63, 4, 61, 21, 14, 51, 9, 60, 28, 17, 2, 50, 3, 38, 12, 40, 35, 42, 5, 44, 37, 41, 59, 31, 34, 46, 48, 24, 45, 20, 13])
# to cycle notation; external package indexes by 1 p = Permutation(*list(perm+1)) p = p.to_cycles() print("The permutation is: \n", [tuple(np.array(cycle)-1) for cycle in p])
# maps parameters of bivariates to the sum of bivariates A = np.zeros((2**n, 4*(n*(n-1)//2)), dtype=int) # stores function values
B = np.zeros(2**n, dtype=int)
55

A preprint – November 26, 2025
# assemble system of eqs # iterate eq number
for i in range(2**n):
# iterate bivariate functions edge_ind = -1
# input args of bivariate function bin_str = fill(bin(i), n) for pair in itertools.combinations(list(range(n)), 2): # index of bivariate function edge_ind += 1 inp_args = bin_str[pair[0]] + bin_str[pair[1]] # variable number
var_num = 4*edge_ind + int(inp_args, 2)
# set term
A[i, var_num] = 1
B[i] = F(fill(bin(i), n))
# check system using gauss elimination A = Matrix(A) B = Matrix(B) try: A.gauss_jordan_solve(B) print("Linear system has a solution", "\nThe composition with the\ permutation results in a sum of bivariates") except ValueError as msg: print(msg, "\nThe composition with the permutation does not\ result in a sum of bivariates")
56

A preprint – November 26, 2025
B.2. Pseudocode for TRW-S
Algorithm 5 Legacy Sequential Tree-Reweighted Message Passing (TRW-S-LEG) by [Kol05]
Input: vertex set V := N≤n, n ∈ N; edge set E ⊆ {(i, j) ∈ V × V | i < j}; candidate sets Ωi ⊂ R, where |Ωi| ∈ N and i ∈ V; functions fi,j : Ωi × Ωj → R, where (i, j) ∈ E; bijection c : V → N≤n; budget B ∈ N. Output: Element x∗ ∈ Ω1 × · · · × Ωn with “low” function value P
(i,j)∈E fi,j (xi, xj ).
Initialize: t, δ := 1, 0 ∈ R; E ̃ := {i, j} | (i, j) ∈ E};
mi,j := 0 ∈ RΩi , mj,i := 0 ∈ RΩj , (i, j) ∈ E; mi := 0 ∈ RΩi , i ∈ V;
pi := max |{{i, j} ∈ E ̃ : c(i) < c(j)}|, |{{i, j} ∈ E ̃ : c(j) < c(i)}| , i ∈ V; γi,j := 1/pi, γj,i := 1/pj, (i, j) ∈ E.
1: for all i ∈ (c−1(1), . . . , c−1(n)) do # loop vertices in order defined by c 2: mi ← P
{i,j}∈E ̃ mi,j 3: δ ← minxi∈Ωi mi(xi)
4: mi(xi) ← mi(xi) − δ , ∀xi ∈ Ωi
5: for all {i, j} ∈ E ̃ with c(i) < c(j) do # restrict to “increasing” edges
6: mj,i(xj )←minxi∈Ωi γi,j mi(xi)−mi,j (xi)+fmin{i,j},max{i,j}(xmin{i,j},xmax{i,j}),∀xj ∈ Ωj 7: δ ← minxj∈Ωj mj,i(xj ) 8: mj,i(xj ) ← mj,i(xj ) − δ, ∀xj ∈ Ωj 9: end for 10: end for
11: for i ∈ (c−1(1), . . . , c−1(n)) do # determine the solution candidate 12: y∗
i ∈ arg minxi∈Ωi
P
{i,j}∈Ee c(j)<c(i)
fmin{i,j},max{i,j}(xmin{i,j}, xmax{i,j}) +P
{i,j}∈Ee c(i)<c(j)
mi,j (xi)
13: end for
14: if F (y∗) < F (x∗) then # keep best solution candidate 15: x∗ ← y∗ 16: end if
17: if B ≤ t then # stopping criterion 18: return x∗ 19: end if
20: t ← t + 1 # run again in reversed order 21: c(i) ← |V| + 1 − i , i ∈ V 22: go to line 1
57

A preprint – November 26, 2025
Algorithm 6 Sequential Tree-Reweighted Message Passing (TRW-S) by [Tou+20]
Input: vertex set V := N≤n, n ∈ N; edge set E ⊆ {(i, j) ∈ V × V | i < j}; candidate sets Ωi ⊂ R, where |Ωi| ∈ N and i ∈ V; functions fi,j : Ωi × Ωj → R, where (i, j) ∈ E; bijection c : V → N≤n; budget B ∈ N. Output: Element x∗ ∈ Ω1 × · · · × Ωn with “low” function value P
(i,j)∈E fi,j (xi, xj ).
Initialize: t := 1 ∈ N; Ee := {i, j} | (i, j) ∈ E};
mi,j , ρi,j := 0 ∈ RΩi , mj,i, ρj,i := 0 ∈ RΩj , (i, j) ∈ E ; mi := 0 ∈ RΩi , i ∈ V; pi := max |{{i, j} ∈ Ee : c(i) < c(j)}|, |{{i, j} ∈ Ee : c(j) < c(i)}| , i ∈ V; γi,j := 1/pi, γj,i := 1/pj, (i, j) ∈ E.
1: for all i ∈ (c−1(1), . . . , c−1(n)) do # loop vertices in order defined by c 2: mi ← P
{i,j}∈Ee mi,j
3: for all {i, j} ∈ Ee with c(i) < c(j) do # restrict to “increasing” edges
4: mi,j (xi) ← minxj ∈Ωj fmin{i,j},max{i,j}(xmin{i,j}, xmax{i,j}) − ρj,i(xj ), ∀xi ∈ Ωi
5: ρi,j ← mi,j − γi,j mi
6: end for 7: end for
8: for i ∈ (c−1(1), . . . , c−1(n)) do # determine the solution candidate 9: y∗
i ∈ arg minxi∈Ωi
P
{i,j}∈Ee c(j)<c(i)
fmin{i,j},max{i,j}(xmin{i,j}, xmax{i,j}) +P
{i,j}∈Ee c(i)<c(j)
mi,j (xi)
10: end for
11: if F (y∗) < F (x∗) then # keep best solution candidate 12: x∗ ← y∗ 13: end if
14: if B ≤ t then # stopping criterion 15: return x∗ 16: end if
17: t ← t + 1 # run again in reversed order 18: c(i) ← |V| + 1 − i , i ∈ V 19: go to line 1
58

A preprint – November 26, 2025
C. Referenced Results
Theorem C.1 (Convergence of Block Coordinate Descent [Ber18, p. 324 Prop. 3.7.1]). Let
• a set X = X1 × X2 × · · · × Xm be given, where m, ni ∈ N and Xi ⊆ Rni is closed and convex for all i ∈ N≤m,
• the function f : X → R be continuously differentiable, and
• the function ξ ∈ Xi 7→ f (x1, . . . , xi−1, ξ, xi+1, . . . , xm) attain a unique minimum ξ for all x ∈ X and all i ∈ N≤m, and be monotonically non-increasing in the interval from xi to ξ.
Then, every limit point of the sequence (xk)k∈N in X, where x0 ∈ X, and where for all k ∈ N,
we have
xk+1
i ∈ arg min
ξ∈Xi
f (xk+1
1 , . . . , xk+1
i−1 , ξ, xk
i+1, . . . , xk
m) , i = 1, . . . , m ,
is a stationary point of f .
Theorem C.2 (Strong Lagrangian Duality [Sla59] & [GK02, p. 322 Thm. 6.13]). Consider
• the convex functions f : Rn → R and gi : Rn → R, i ∈ N≤m, as well as
• the affine functions hi : Rn → R, i ∈ N≤p, where n, m, p ∈ N, and
• the non-empty convex set X ⊆ Rn.
Then, if there exists xˆ in the relative interior of X and, such that,
gi(xˆ) < 0 for i = 1, . . . , m and h(xˆ) = 0 ,
we have the equality

 
 
infx∈X f (x)
s.t. g(x) ≤ 0
h(x) = 0
=



supλ∈Rm
μ∈Rp
infx∈X f (x) + Pm
i=1 λigi(x) + Pp
j=1 μj hj (x)
s.t. λ ≥ 0 ,
if the left-hand side of it is finite.
Theorem C.3 (Consistency of Global Relaxations [MG21, Corollary 3.1.1]). Given
• a family of probability measures {Pθ : θ ∈ Θ} on a measure space (Ω, A),
• an optimization problem minx∈Ω f (x), where f : Ω → R is A-continuous at its unique global minimum x∗ ∈ Ω,
• f ∈ L1(Ω, A, Pθ) for all θ ∈ Θ, and
• that for all ε, γ > 0, we have
Z
Ω−Uγ (x∗)
max{|f |, 1} dPθ < ε ,
where Uγ denotes the γ-ball centered at x.
Then, if a minimum θ∗ of
θ ∈ Θ 7→
Z
Ω
f dPθ
exists, it is unique and Pθ∗ = δx∗ , i.e. the Dirac measure at x∗.
59

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:01.252Z
- **Text Length:** 111583 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 59 of 59
