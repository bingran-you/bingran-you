# PDF Document: Boehmer et al. - 2025 - Understanding the Impact of Proportionality in Approval-Based Multiwinner Elections.pdf

**File Path:** Boehmer et al. - 2025 - Understanding the Impact of Proportionality in Approval-Based Multiwinner Elections.pdf

**Processed Date:** 2026-02-10T18:15:54.091Z

**File Size:** 1205.40 KB

**Total Pages:** 38

**Extracted Pages:** 38

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3143

**Title:** Understanding the Impact of Proportionality in Approval-Based Multiwinner Elections

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Understanding the Impact of Proportionality
in Approval-Based Multiwinner Elections
Niclas Boehmer1, Lara Glessen1, and Jannik Peters2
1Hasso Plattner Institute, University of Potsdam, Germany 2National University of Singapore
niclas.boehmer@hpi.de, lara.glessen@hpi.de, peters@nus.edu.sg
Contents
1. Introduction 2
1.1. Our Contributions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3 1.2. Related Work . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4
2. Preliminaries 5
3. Algorithmic Analysis 6 3.1. Differentiating Proportionality Axioms . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6
3.2. Distances Between Proportional Committees . . . . . . . . . . . . . . . . . . . . . . . . . 7
3.3. Candidate Containment . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 3.4. Counting Committees . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8
4. Experiments 8 4.1. How Restrictive Are Proportionality Axioms? . . . . . . . . . . . . . . . . . . . . . . . . . 9 4.2. What Makes a Candidate Important for Proportionality? . . . . . . . . . . . . . . . . . . . 12
5. Conclusion 13
A. Integer Linear Programming Formulations 16
A.1. ILP for JR-not-EJR+ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 16 A.2. ILP for Diff-Committees . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 17 A.3. ILP for p-Candidates-JR . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 18 A.4. ILP for p-Candidates-EJR+ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 19
B. Missing Proofs 19 B.1. Missing Proofs for the JR-not-EJR+ Problem . . . . . . . . . . . . . . . . . . . . . . . . 19 B.2. Missing proofs for the X-Diff-Committees Problem . . . . . . . . . . . . . . . . . . . . . 22
B.3. Missing proofs for the p-Candidate-X Problem . . . . . . . . . . . . . . . . . . . . . . . . 26
B.4. Counting JR-Committees . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 28
C. Appendix for Experiments 31 C.1. How Restrictive Are Proportionality Axioms? . . . . . . . . . . . . . . . . . . . . . . . . . 31 C.2. What Makes a Candidate Important for Proportionality? . . . . . . . . . . . . . . . . . . . 36
1
arXiv:2511.09479v1 [cs.GT] 12 Nov 2025

Abstract
Despite extensive theoretical research on proportionality in approval-based multiwinner voting, its impact on which committees and candidates can be selected in practice remains poorly understood. We address this gap by (i) analyzing the computational complexity of several natural problems related to the behavior of proportionality axioms, and (ii) conducting an extensive experimental study on both real-world and synthetic elections. Our findings reveal substantial variation in the restrictiveness-
 of proportionality across instances, including previously unobserved high levels of restrictiveness in some real-world cases. We also introduce and evaluate new measures for quantifying a candidate’s importance for achieving proportional outcomes, which differ clearly from assessing candidate strength by approval score.
1. Introduction
Proportionality in multiwinner voting is one of the most actively studied topics in computational social choice. Given potentially conflicting preferences of voters over candidates, the goal is to select a fixed-size subset of candidates that proportionally represents the preferences of the voters. Applications of proportional multiwinner voting arise in contexts such as participatory budgeting [Peters et al., 2021], blockchain systems [Boehmer et al., 2024a], or civic participation platforms [Rev-
el et al., 2025]. One of the building blocks of proportional multiwinner voting are so-called proportionality axioms: properties that certify the proportionality of an outcome. Within the study of proportionality, approval-based multiwinner voting, in which each voter votes for a subset of the candidates they approve of, has emerged as a simple, yet expressive model. Accordingly, researchers have put significant effort into the development of axioms capturing various notions of proportionality, th-
eir theoretical analysis, and the design of voting rules that satisfy them [e.g., Aziz et al., 2017, Peters and Skowron, 2020, Brill and Peters, 2023, Halpern et al., 2025, Aziz et al., 2023, Kehne et al., 2025]. Despite the extensive theoretical coverage of proportionality axioms, research into their practical impact remains limited. We are only aware of two papers whose experiments explicitly focus on how proportionality axioms constrain the set of outcomes in approval-based multiwinner election-
s: Bredereck et al. [2019] and Brill and Peters [2023] (see Section 1.2 for further related work). Both of these papers measure the strength of proportionality axioms through their restrictiveness, i.e., they compute the fraction of committees satisfying an axiom in elections sampled from various synthetic models. The conclusions Bredereck et al. and Brill and Peters draw can be viewed as quite negative. Bredereck et al. remark that even for extended justified representation (EJR) [Aziz et al., 20-
17], the strongest axiom they study: “satisfying EJR is quite easy” [Bredereck et al., 2019, page 114], as in the majority of their elections, a majority of all committees satisfy EJR. Similarly, although the EJR+ axiom introduced by Brill and Peters is stronger than EJR, their findings suggest that committees satisfying EJR+ remain quite common in most of their synthetic sampling models. This leaves us in an unsatisfying state. One could interpret the prior work as evidence that proportionality a-
xioms impose only extremely mild constraints, raising doubts about their importance and practical relevance: If proportionality axioms were rarely restrictive, imposing them would not change the set of selectable committees. Thus, appealing to proportionality as a justification for a rule, as commonly done, would be of very limited practical significance. At the same time, both studies focus exclusively on synthetically generated elections, raising questions about the extent to which their conclus-
ions translate to realistic instances and whether proportionality axioms might be even less powerful on real-world preference data. This motivates our first research question: to what extent do proportionality axioms constrain which committees
2

20 40 60 80
0
0.2
0.4
0.6
0.8
1
k
Axiom-Fraction
JR EJR+
Figure 1: Percentage of committees satisfying JR and EJR+ depending on the committee size k, in the Warsaw Praga-Północ PB election 2022.
can be selected in practice? To illustrate the significant, yet nuanced, practical impact proportionality may have, and to motivate further investigation, we present Figure 1. This plot is based on a participatory budgeting election conducted in the Praga-Północ district of Warsaw in 2022. Treating this election’s votes and candidates as an approval-based multiwinner election, we approximate, for each possible committee size k, the percentage of committees satisfying the weak proportionality axiom-
 JR (red) and the stronger axiom EJR+ (blue).1 We observe that for certain values of k, only a small fraction of committees satisfy EJR+, and that the satisfaction rate for JR can fluctuate in seemingly unpredictable ways. This example also highlights a potential limitation of prior experimental work on proportionality, which typically evaluates restrictiveness only for a single, hand-picked value of k. In addition to studying the impact of proportionality on the space of feasible committees, as o-
ur second research question, we investigate the impact of proportionality on the merit of different candidates. In elections based on the principle of individual excellence, in which candidates with the most approvals are selected, a candidate’s merit is naturally quantified by their approval score. In contrast, when aiming to select a committee that satisfies a proportionality axiom, assessing a candidate’s strength becomes more complex, as the proportionality of a committee containing the candid-
ate always depends on which other candidates are present. Good measures for a candidate’s strength under proportionality would contribute to improving the transparency and our understanding of proportional multiwinner elections.
1.1. Our Contributions
Our investigation consists of two parts: an algorithmic analysis (Section 3) and an experimental analysis (Section 4), in both of which we focus on the axioms JR and EJR+, which can be verified and satisfied in polynomial time (see Section 2 for definitions). Proofs and additional experimental results can be found in the appendix. In the algorithmic part, we study the complexity of a range of computational problems aimed at understanding the impact of proportionality in a given instance. Our selec-
tion of questions serves two purposes. First, we study the problems that we would like to compute in our experimental analysis. Second, we provide new results on existing computational problems and introduce new problems related to the behavior of proportionality axioms, which might be of independent interest and help to understand the boundaries of tractability when dealing with (easy-toverify) proportionality axioms. These problems include (i) deciding whether two proportionality axioms are equi-
valent in a given instance, (ii) finding a pair of distant proportional committees, (iii) finding a proportional committee containing a given subset of candidates, (iv) and counting
1Note that the depicted values do contain small sampling errors, e.g., resulting in some slightly higher reported percentages for JR than EJR+.
3

committees (or those containing a given candidate) that satisfy a particular axiom. We show that all of our problems are NP-hard (resp. #P-hard), highlighting that even for easy-to-verify and easy-to-construct axioms, slightly more nuanced computational questions immediately yield computational hardness. Complementing these results, we develop ILP- and sampling-based algorithms for our experiments and investigate our problem’s parameterized complexity. While simple brute-force algorithms yield fi-
xed-parameter tractability (FPT) with respect to the number of candidates m for all problems, we develop slightly more involved algorithms showing FPT with respect to the number of voters n, a parameterization of interest in case only a few opinions need to be aggregated, e.g., in expert or criteria aggregation. In our experimental analysis, we investigate the impact of proportionality on the space of feasible committees and on candidates’ strength. Due to the general lack of real-world data on ap-
proval-based multiwinner elections [Boehmer et al., 2024b], we base our analysis on voting data from participatory budgeting instances available in pabulib [Faliszewski et al., 2023a], complemented by synthetic data generated using the resampling and Euclidean models. Our experimental findings include the following observations: (i) The restrictiveness of proportionality axioms can vary drastically and in unexpected ways with small changes in k, highlighting that the choice of k deserves more care-
ful consideration than it typically receives in experimental studies. (ii) While JR and EJR+ often do not impose strong restrictions, there are some real-world instances where they can significantly constrain the outcome space. Even in such cases, the set of proportional committees tends to be highly diverse. (iii) We introduce two measures for candidates’ importance for proportionality, one of which is inspired by the Banzhaf power index in cooperative game theory. Both measures turn out to be hi-
ghly correlated. We demonstrate that using candidates’ approval scores to assess their proportionality merit can be highly misleading. (iv) Proportional multiwinner voting rules tend to favor candidates with a high approval score over those important for proportionality.
1.2. Related Work
For an overview of experimental work in approval-based multiwinner voting (and beyond), we refer to the recent survey-style “guide” by Boehmer et al. [2024b]. The work closest to ours is the aforementioned paper by Bredereck et al. [2019], which was the first to experimentally investigate the impact of proportionality axioms. They considered elections with 100 candidates, 100 voters, and a committee size of 10, sampled from different variants of the Impartial Culture and Euclidean model. In their -
experiments, they evaluated how many committees satisfy JR, PJR, and EJR, analyzed the size of the smallest candidate set satisfying JR, and studied the satisfaction and coverage scores achievable by JR committees.2 Bredereck et al. also introduced and studied related algorithmic questions, such as the complexity of counting JR, PJR, or EJR committees. Our work differs from theirs in that we focus our experiments on real-world voting data and explore new aspects of the impact of proportionality, s-
uch as its dependency on the committee size and its relation to candidate importance, also resulting in the study of different computational problems. In their work on verifiable proportionality axioms, Brill and Peters [2023] also conducted experimental studies on how often random committees satisfy different proportionality axioms, using synthetic elections from four models (not including the Euclidean model). While they observed that their new axiom EJR+ is significantly harder to satisfy than -
existing ones, such as EJR, for a large part of their parameter space, still over 50% of the committees satisfy it. Faliszewski et al. [2023b] and Boehmer et al. [2024a] examined how frequently committees selected by various approval-based multiwinner voting rules satisfy proportionality axioms. Their
2In a similar setup, satisfaction and coverage scores of JR committees were studied by Elkind et al. [2024], while the size of JR-satisfying candidate sets was examined by Elkind et al. [2023].
4

main finding is that common proportionality axioms are frequently satisfied by a large array of rules. Faliszewski et al. [2023b] studied this question using elections sampled from various synthetic models [Szufa et al., 2022], along with some instances from pabulib, whereas Boehmer et al. [2024a] analyzed large real-world elections from the proof-of-stake Polkadot blockchain. Finally, a recent study by Bardal et al. [2025] empirically examined proportionality and proportional rules in the settin-
g of ordinal multiwinner voting, using a dataset from Scottish local government elections. Among other findings, they observed that the classic PSC axiom [Dummett, 1984] is satisfied by many committees on their elections.
2. Preliminaries
Model and Notation. For t ∈ N, we let [t] := {1, . . . , t}. Let N = [n] be a set of voters and C = {c1, . . . , cm} be a set of candidates. Each voter i ∈ N possesses an approval ballot Ai ⊆ C indicating the candidates approved by this voter. For a given candidate c ∈ C, we denote by Nc := {i ∈ N : c ∈ Ai} the set of approvers of c and refer to |Nc| as the approval score of c. Together, A = (Ai)i∈N forms an approval profile. We let k ≤ m denote the committee size and refer to any set W ⊆ C of can-
didates of size |W | = k as a committee. Together, the tuple I = (N, C, A, k) forms an approval-based multiwinner election.
Proportionality Axioms. The central objects we study in our work are proportionality axioms. We focus on two easy-to-verify axioms: justified representation (JR) [Aziz et al., 2017] and extended justified representation plus (EJR+) [Brill and Peters, 2023].
Definition 2.1 (EJR+). Given an election I = (N, C, A, k) and parameter t ∈ [k], a subset W ⊆ C satisfies t-extended justified representation plus (t-EJR+) if for any candidate c ∈/ W , l ∈ [t], and set N ′ ⊆ Nc of voters with |N ′| ≥ l n
k , there exists an i ∈ N ′ with |Ai ∩ W | ≥ l.
A committee satisfies justified representation (JR) if it satisfies 1-EJR+, and EJR+ if it satisfies k-EJR+. By definition, any committee satisfying EJR+ also satisfies JR. EJR+ and JR committees are guaranteed to exist and can be computed in polynomial time [Brill and Peters, 2023]. For some election I, we denote by EJR+(I), resp. JR(I), the set of committees satisfying EJR+, resp. JR, in I. Moreover, we refer to |EJR+(I)|/(m
k ), resp. |JR(I)|/(m
k ), as the election’s EJR+fraction, resp. JR-fraction. Further, for some candidate c ∈ C, we let EJR+(I, c) ⊆ EJR+(I), resp. JR(I, c) ⊆ JR(I), be the set of committees satisfying EJR+, resp. JR, that contain c.
1 2 3 4 5 6 7 8 9 10
c1
c2
c3 c4
c5
c6 c7
c8 c9
Figure 2: Example instance to illustrate JR and EJR+.
Example 2.1. Consider the instance depicted in Figure 2: voters correspond to integers on the x-axis, while candidates correspond to boxes, with every voter approving the candidates above them, e.g., voter 1 approves c1, c2, and c3. For k = 5, the committee {c1, c3, c4, c5, c7} satisfies JR, as the only “uncovered” voter 8 is on its own not enough to constitute a JR violation. It, however, does not satisfy EJR+ as witnessed by candidate c6. This candidate is approved by five voters, but no voter a-
pproves two candidates in the committee. However, each one of them approves at most one candidate, leading to an EJR+ violation (as n/k = 2). The committee {c1, c2, c3, c4, c6} satisfies EJR+.
5

Parameterized Algorithms. In our algorithmic analysis, we make use of the framework of parameterized algorithms [Cygan et al., 2015], focusing on the complexity classes FPT and W[1]. A parameterized problem X consists of an instance I together with a parameter l ∈ N. A fixedparameter tractable (FPT) algorithm for (I, l) is an algorithm running in time O(f (l) · |I|O(1)) for some computable function f . Under standard complexity theoretical assumptions, if (I, l) is W[1]-hard, then it does not adm-
it an FPT algorithm.
Measures of Candidate Importance for Proportionality. We introduce two ways in which we can quantify a candidate’s importance for proportional representation. As our first measure, we define the JR-prevalence, resp., EJR+-prevalence, of some candidate c ∈ C as the fraction of committees fulfilling the axiom that contain c, i.e., |JR(I,c)|/|JR(I)|, resp. |EJR+(I,c)|/|EJR+(I)|. For our second measure, we draw inspiration from the raw Banzhaf power index [Banzhaf, 1965] from cooperative game theory, -
which counts how often an agent is “pivotal” for a coalition to be winning. Translating this idea, we count the number of proportional committees for which proportionality is violated after we remove the candidate: We let the JR-power-index (resp. EJR+-power-index) of candidate c ∈ C be |{W ∈ JR(I, c) : W \ {c} does not satisfy JR}| (resp. |{W ∈ EJR+(I, c) : W \ {c} does not satisfy EJR+}|).
3. Algorithmic Analysis
In this section, we present an algorithmic analysis of combinatorial problems we would like to solve to better understand the impact of proportionality axioms in practice.
3.1. Differentiating Proportionality Axioms
We start with a simple problem: can we determine whether, for a given instance, EJR+ is a strictly stronger property than JR, i.e., is there a committee satisfying JR, but not EJR+?
JR-not-EJR+
Input: Election I = (N, C, A, k). Question: Is there a committee W ⊆ C satisfying JR but not EJR+?
Despite the significant conceptual differences between EJR+ and JR and the fact that both can be verified in polynomial time, it turns out that checking whether JR and EJR+ coincide on a given instance is NP-complete.
[Proof]
Theorem 3.1. JR-not-EJR+ is NP-complete, and W[1]-hard when parameterized by the committee size k.
In fact, our reduction from a variant of Multicolored Independent Set even shows that it is hard to check the existence of a committee satisfying JR, but not 2-EJR+. We complement this negative result in two ways. Firstly, we present a simple polynomial-size ILP for JR-not-EJR+ in Section A. Secondly, we show that JR-not-EJR+ is in FPT when parameterized by the number of voters n by introducing equivalence classes of candidates: We say that two candidates are equivalent if they are approved by the-
 exact same set of voters. Since there are at most 2n such classes, we can formulate an ILP where the number of variables is a function in n by replacing candidates by their equivalence class. Using Lenstra’s algorithm, which solves ILPs in FPT time with respect to the number of variables [Lenstra, 1983], we get an FPT algorithm for our problem.
[Proof]
Theorem 3.2. JR-not-EJR+ is in FPT when parameterized by the number of voters n.
6

3.2. Distances Between Proportional Committees
We further want to understand the space of proportional committees. To measure its richness and diversity, we compute how different proportional committees can be. For two committees W1 and W2, we define their distance as d(W1, W2) := |W1 \ W2|. Dong et al. [2026] prove that JR committees can be widely different and even isolated: there exists an instance with a JRcommittee W1 such that the closest other JR-committee W2 has distance d(W1, W2) = k − 1. This motivates us to study the following probl-
em to better understand the set of JR/EJR+-committees:
X-Diff-Committees
Input: Election I = (N, C, A, k) and k′ ≤ k. Question: Are there two committees W1 and W2, both satisfying axiom X, with d(W1, W2) ≥ k′?
Bredereck et al. [2019] showed that for any election, every candidate that is approved by at least one voter belongs to at least one JR-committee. Thus, we conclude that any election with m > k has two JR-committees W1 and W2 with d(W1, W2) ≥ 1. We show that already for k′ ≥ 2 the problem becomes NP-complete.
[Proof]
Theorem 3.3. For each k′ ≥ 2, JR-Diff-Committees and EJR+-Diff-Committees are NP-complete and W[1]-hard when parameterized by the committee size k.
We again complement the negative result by giving a polynomial-size ILP formulation in Section A. Using a similar approach as for Theorem 3.2, we additionally show that both JR- and EJR+-Diff-Committees are in FPT when parameterized by n. For JR-Diff-Committees we give an explicit combinatorial algorithm, while for EJR+-Diff-Committees we again employ Lenstra’s algorithm.
[Proof]
Theorem 3.4. JR-Diff-Committees and EJR+-Diff-Committees are in FPT when parameterized by n.
3.3. Candidate Containment
To measure the importance of (subsets of) candidates for proportionality, we aim to solve the following problem:
p-Candidates-X
Input: Election I = (N, C, A, k) and set of candidates C′ ⊆ C with |C′| = p. Question: Is there a committee W ⊆ C with C′ ⊆ W , satisfying the proportionality axiom X?
Indeed, as mentioned previously, for any single candidate c, there always exists a committee satisfying JR containing c, i.e., any instance of 1-Candidates-JR is a ’Yes-Instance’. For EJR+ it follows from Dong et al. [2026, Theorem 4.14] that 1-Candidates-EJR+ is also always a ’Yes-Instance’. Neither of these results transfers to pairs of candidates, for which the problem becomes computationally intractable.
[Proof]
Theorem 3.5. 2-Candidates-JR is NP-complete, and W[1]-hard when parameterized by the committee size k.
Finally, we again prove membership in FPT, when parameterized by the number of voters. For JR, this again follows from a combinatorial algorithm, while for EJR+ we again employ Lenstra’s algorithm.
[Proof]
Theorem 3.6. p-Candidates-JR and p-Candidates-EJR+ are in FPT when parameterized by n.
7

3.4. Counting Committees
To measure the restrictiveness of proportionality axioms, we will count the number of proportional committees. Bredereck et al. [2019] have shown that counting the number of JR committees is #P -hard, and #W [1]-hard when parameterized by k. We complement this result by showing that one can count the number of JR committees in FPT time in n. We achieve this via a dynamic programming approach, again by introducing equivalence classes of candidates.
[Proof]
Theorem 3.7. For a given election I, the number of JR committees |JR(I)| can be computed in FPT time in n.
It remains an open problem whether these results generalize to EJR+. Although most of the measures relevant to our experiments are computationally intractable, we still aim to compute them. For counting problems, we turn to a sampling-based approach. We present an exemplary sampling-based approximation algorithm for the counting variant of the 1-Candidates-JR problem; observe that the #P-hardness of 1-Candidates-JR follows from the #P-hardness of counting JR committees. In particular, we give a sa-
mpling bound on the number of samples needed to accurately approximate the JR-prevalence of a given candidate. The sampling complexity of this problem is polynomial in the instance size, error, and in (m
k )/|JR(I)|, i.e., the inverse of the fraction of JR committees in the given election.
[Proof]
Proposition 3.8. There is an algorithm that, given an election I, candidate c, and two positive rational numbers ε and δ, outputs a value α ̃ such that the JR-prevalence of c lies, with probability at least 1−δ, in the interval [α ̃ −ε, α ̃ +ε]. This algorithm has an expected running time polynomial in |C|, |V |, 1/ε, ln(1/δ) and (m
k )/|JR(I)|.
To compute an instance’s JR/EJR+-fraction, a simple Monte Carlo estimation with Hoeffding’s inequality leads to a similar ε-approximation with probability at least 1 − δ in time polynomial in |C|, |V |, 1/ε, and ln(1/δ).
4. Experiments
We present our experimental investigation. After introducing our dataset, we examine the restrictiveness of different proportionality axioms in Section 4.1 and the importance of individual candidates for proportionality in Section 4.2.
Dataset. We present our results on a real-world dataset in the main body, and relegate results on two synthetic datasets based on the resampling and Euclidean models to Section C. Given the general scarcity of real-world data from approval-based multiwinner elections, we rely on pabulib, the primary source of participatory budgeting elections, as our dataset [Faliszewski et al., 2023a]. Participatory budgeting generalizes multiwinner voting by assigning costs to candidates and selecting a subset t-
hat respects a total budget constraint. We include all pabulib instances with approval ballots and an average ballot size of at least four as of May 2nd, 2025. We do not apply any preprocessing, resulting in 369 instances with n ∈ [69, 95899] and m ∈ [7, 138]. While these instances include voters’ approval ballots over candidates, they do not specify a value for k (since the budget constraint takes the role of k in participatory budgeting). As we discuss in Section 4.1, we set k = ⌊ m
2 ⌋.3
3A similar approach is taken by Szufa et al. [2022] and Faliszewski et al. [2023b]. The only large-scale, real-world approval-based datasets we are aware of are from two blockchains [Boehmer et al., 2024a], but their size (up to 10000 candidates and 40000 voters) is prohibitive for our experiments. Our combination of participatory budgeting data and synthetic approval-based multiwinner voting data represents the most informative and
8

10 20 30 40 50
0
0.2
0.4
0.6
0.8
1
k
Axiom-Fraction
JR EJR+
(a) Warszawa – Obszar 3 (2019)
10 20 30 40 50
0
0.2
0.4
0.6
0.8
1
k
Axiom-Fraction
JR EJR+
(b) Ursynów Wysoki Południowy (2018)
5 10 15 20 25 30
0
0.2
0.4
0.6
0.8
1
k
Axiom-Fraction
JR EJR+
(c) Praga-Północ (2017)
Figure 3: JR-fraction (red) and EJR+-fraction (blue) for different committee sizes k ∈ [m] across selected pabulib instances.
4.1. How Restrictive Are Proportionality Axioms?
We analyze the restrictiveness of JR and EJR+. To shed light on the effect of the choice of k, and select a value for k, we analyze how the JR/EJR+-fraction changes with changing k. Subsequently, we take a closer look at the JR- and EJR+-fractions for k = ⌊ m
2 ⌋, and the average and maximum distances between JR, resp., EJR+-committees.
Dependency on k. We start by analyzing the JR- and EJR+-fraction for varying values of k to understand k’s influence on the impact of proportionality and to provide guidance on how to choose values of k that yield instances which are interesting from the perspective of proportionality.4 We begin by discussing some intuition. At first glance, increasing k has two opposing effects on the constraints imposed by JR (and analogously by EJR+). First, more candidates surpass the approval threshold n/k an-
d may thus induce JR violations. Second, in a randomly selected committee, more voters approve at least one candidate and can therefore not be part of a JR violation. These two effects explain the very high JR-fraction at extreme k: at very low k, no candidate meets the approval threshold n/k; at very high k, nearly every voter approves someone in the committee. However, there is a third, slightly more subtle effect: a candidate c with approval score above n/k can still impose additional constrain-
ts as k increases, since every n/k-subset of Nc must be “satisfied”, and their number grows with k. Our results demonstrate that the interplay of these three effects can be quite intricate. We present results for four instances in Figures 1 and 3. Figures 1 and 3a represent typical behaviors observed in our dataset, while Figures 3b and 3c illustrate more exceptional cases. The pattern in Figure 3a is relatively simple and aligns with basic intuition. Figure 1 already exhibits more complex behavio-
r: JR and EJR+ begin to diverge. JR becomes easy to satisfy between k = 20 and k = 60, but is restrictive before and after, including sharp increases and drops. Figure 3b contains even more local extrema, and Figure 3c reveals a striking non-continuity, where changing k by just one dramatically affects the behavior of the axiom-fractions. One explanation for the sudden drops in the JR-fraction in Figures 1, 3b and 3c could be the
widely used approach in the literature [Boehmer et al., 2024b]. While the costs of a project in a participatory budgeting exercise certainly influences its approval score, the connection in Pabulib is much weaker and more heterogeneous than one might expect (see [Faliszewski et al., 2023a] Fig. B.6). Further, based on measured distances between instances, Szufa et al. [2022] argue that Pabulib instances without costs yield realistic approval elections. 4For each instance and each k ∈ [m], we estim-
ate the JR-fraction (resp. EJR+-fraction) by sampling until we found 1000 JR (resp. 1000 EJR+) committees. We apply a timeout of 15 minutes per k and instance, resulting in the exclusion of 9 instances that did not finish for all k and for which all computed EJR+-fractions exceeded 0.95.
9

.00-.05
.05-.15
.15-.25
.25-.35
.35-.45
.45-.55
.55-.65
.65-.75
.75-.85
.85-.95
.95-1.0
0
50
100
150
200
56
4
34 2036
9 14 1817 3943
1614 1916 1410 3227
189
93
Axiom-Fraction
Frequency
JR EJR+
Figure 4: Number of pabulib instances (in total 360) with given JR-fractions (red) and EJR+fractions (blue).
first effect: new candidates surpass the n/k threshold as k increases. This explanation is at best partial. In Figure 3c, indeed, a new candidate passes the threshold at the jump at k = 19. In contrast, in Figure 3b, all candidates have an approval score of at least n/23, i.e., all are “relevant” for k ≥ 23, and yet we still observe rapid changes and a non-monotonous behavior afterwards. The key takeaway from this analysis is that the dependency of JR/EJR+-fractions on k is more complex and less p-
redictable than one might expect. We observe sudden jumps, multiple local extrema, and differing behaviors between JR and EJR+. This calls for caution when conducting experiments: the choice of k, often treated as a generic hyperparameter, can substantially influence an instance’s behavior from the perspective of proportionality. In our remaining experiments, we aim to select a value of k that maximizes the number of instances that are non-trivial from the perspective of proportionality, i.e., hav-
e an EJR+-fraction below 95%. We pick k = ⌊ m
2 ⌋ , as it maximizes the number of non-trivial instances among
all k = ⌊ m
c ⌋ for c ∈ {2, . . . , 10}; see Figure 9 in Section C. While we have seen above that the chosen k can have a strong impact on the instance level, we verify the robustness of dataset-level trends. For this, we compared the distribution of JR- resp. EJR+-fractions for k = ⌊ m
2 ⌋ to the
distributions for k = ⌊ m
c ⌋ for c ∈ {2, . . . , 10} and for k equal to the total budget of the instance divided by the average-project cost (as an estimation for the average number of affordable projects). General trends turn out to be stable in both cases.
JR/EJR+-Fractions. In Figure 4, we show a frequency histogram for the JR- (red) and EJR+fractions (blue) of the pabulib instances with k = ⌊ m
2 ⌋.5 We observe a diverse picture: While many instances exhibit high fractions and thus confirm previous observations by Bredereck et al. [2019], and Brill and Peters [2023] that JR and EJR+ impose only extremely mild constraints on many instances, there are also numerous instances where only a small fraction of committees satisfy these axioms. This is especially pronounced for EJR+, with 56 instances exhibiting an EJR+-fraction of at most 5%. For JR, this effect is slightly less pronounced but s-
till present, as 24 instances have a JR-fraction of at most 25%. These findings suggest that proportionality notions can matter in real-world voting instances, as they can significantly reduce the space of feasible committees. Prior work suggests that different proportionality axioms tend to coincide in practice. For instance, Boehmer et al. [2024a] note that “proportionality axioms seem to lose their discriminative power in practice”. However, Figure 4 shows that this is not generally the case, a-
s the EJR+fraction is often substantially lower than the JR-fraction for our chosen value of k. We shed
5For every instance, we sampled committees until we reach 5000 JR committees and return 5000 divided by the total number of samples as the JR-fraction. We parallelized instance-wise on 128 kernels with a total timeout of five days, resulting in 360/369 solved instances. We proceed analogously for EJR+.
10

0 0.2 0.4 0.6 0.8 1
0.8
0.85
0.9
0.95
1
Axiom-Fraction
Norm. Average Distance
JR EJR+
Figure 5: Each point represents one instance and one axiom (JR in red, EJR+ in blue). We plot the correlation between the axiom fraction and the normalized average distance among committees fulfilling the axiom.
further light on this question with the help of the JR-not-EJR+ problem:6 For 275 pabulib instances, there exists a committee that satisfies JR but not EJR+, whereas in 70 instances, every JR committee also satisfies EJR+, rendering the two axioms effectively equivalent. These results draw a mixed picture: while there are cases where the distinction between proportionality axioms becomes irrelevant, there are also many instances where the “strength” of the considered axiom continues to matter.
Distances Between Committees. After establishing that EJR+ and even JR can impose quite strong restrictions on real-world instances, the next natural question is: Does each of these axioms lead to a solution space consisting of only similar committees? We answer this question in the negative. For this, we start by measuring the average distance between two JR, resp. EJR+, committees,7 normalized by the expected distance between two randomly drawn committees of size k. In Figure 5, each red (resp. -
blue) dot represents an instance, with the x-coordinate indicating the instance’s JR-fraction (resp. EJR+-fraction) and the y-coordinate the instance’s normalized average distance between two JR (resp. EJR+) committees. We observe that the normalized average distance—even for EJR+—is typically above 0.9, suggesting that proportional committees are widely distributed over the space of all committees. Moreover, while there is some correlation between instances’ normalized distance and their JR/EJR+--
fraction, the general differences in terms of average distance across instances are small, further confirming the heterogeneity of proportional committees, even in cases where only a few committees fulfill proportionality. Examining the maximum, instead of the average distance, between proportional committees paints a similar picture.8 For JR, we find that 329 out of 369 instances admit disjoint JR committees, while for all other instances we can find two JR committees with an overlap strictly sma-
ller than four. For EJR+, we found disjoint committees for 189 out of 269 solved instances, and a maximum overlap of eight among all solved instances. Given our choice of k = ⌊ m
2 ⌋, the existence of disjoint proportional committees is quite remarkable, as it implies that one can partition the candidates into two halves in a way that both are representative.
6We used Gurobi with the ILP implementation for JR-not-EJR+ provided in Section A.1 with a timeout of 30 minutes per instance, resulting in 24 unsolved instances. 7We approximate these values by calculating the average distance between pairs of committees from the set of 5000 sampled JR, resp. EJR+, committees from Footnote 5. 8We compute the maximum distance by solving the ILP formulation for Diff-Committees from Section A.2 using Gurobi. We set a time limit of 30 minutes for each instance, resul-
ting in all instances being solved for JR, and 269 instances for EJR+.
11

120 140 160 180 200 220 240
0.4
0.6
0.8
1
Approval Score
Prevalence
JR EJR+
Figure 6: Each point corresponds to one candidate in the Warszawa, Wysokie-Okoecie (2017) election and one axiom (JR in red, EJR+ in blue). We plot the candidate’s approval score against its axiomatic prevalence.
4.2. What Makes a Candidate Important for Proportionality?
We analyze three candidate importance measures: the prevalence and power index, which aim to capture importance for proportionality, and the traditional approval score (see Section 2 for definitions).9 In this section, we only consider instances with an EJR+-fraction ≤ 95%, resulting in 267 instances. We do this because when nearly all committees are proportional, there are no substantial differences in candidates’ importance for proportionality, skewing the results.
Correlation Between Measures. We are interested in finding out (i) how closely our two new ways to measure candidates’ importance for proportionality are related, and (ii) whether they differ from the established approach of assessing candidates’ merit by approval score. To this end, we compute the Pearson correlation coefficient (PCC) between each pair of measures across all candidates within one instance. Regarding question (a), we find a very strong correlation for EJR+, with an average PCC val-
ue of 0.99. For JR, the average PCC is with 0.72 lower; however, this is also partly due to the fact that, in contrast as for EJR+, our dataset contains instances with JR-ratio very close to 1: for these cases, the prevalences of candidates do not vary significantly, and therefore, small sampling errors can have quite a large impact on the PCC. Regarding question (b), we find that the approval score is notably less correlated with our two proportionality-based measures: the average PCC between app-
roval score and prevalence is only 0.22 for JR and 0.65 for EJR+. To make this observation more tangible, we show in Figure 6 the election from Warszawa, Wysokie-Okoecie (2017), which plots candidates’ approval score (x-axis) against their prevalence (y-axis). We observe virtually no connection between approval scores and prevalence: candidates with the lowest and highest approval scores have similar prevalence, while a candidate with a medium approval score appears in all JR and EJR+ committees. -
While it is intuitive that such behavior can appear in the worst case, it is noteworthy that it also occurs in real-world instances. Practically, a candidate’s strength and merit to be selected is often assessed by their approval score. However, we conclude that from the perspective of proportionality, this approach falls short and can be actively misleading.
Measures and Proportional Voting Rules. Lastly, we investigate whether proportional voting rules select candidates that are important for proportionality, i.e., have a high prevalence or power index. We focus on the popular voting rule Method of Equal Shares (MES) with seq-Phragmén completion, which always returns an EJR+ committee [Peters and Skowron, 2020] and defer results for seq-PAV and seq-Phragmén, which exhibit similar behavior, to the appendix.
9To compute the prevalence and power index of a candidate, we sampled 5000 JR committees and 5000 EJR+ committees using rejection sampling. For the prevalence, we take the fraction of sampled committees containing the candidate. For the power index, we count how many sampled committees containing the candidate stop to satisfy the respective axiom when the candidate is removed.
12

0.0–0.1
0.1–0.2
0.2–0.3
0.3–0.4
0.4–0.5
0.5–0.6
0.6–0.7
0.7–0.8
0.8–0.9
0.9–1.0
0
50
100
150
117
27
84
147
5 11
51
92
43 41
17
7
2 9 16
38
57
105
40
Relative Overlap
Frequency
Approval Score JR Prevalence EJR+ Prevalence
Figure 7: Number of pabulib instances in which the committee returned by MES has a given normalized overlap with the set of k candidates with the highest approval score (olive), JR-prevalence (red), and EJR+-prevalence (blue).
To answer this question, we measure the overlap between the k candidates selected by MES and the k candidates with the highest approval score, JR-prevalence, and EJR+-prevalence. Notably, the committee of the k candidates with the highest JR-prevalence (resp. EJR+-prevalence) satisfies JR (resp. EJR+) in all our instances. Figure 7 presents a histogram showing how often different normalized overlaps occur across instances. We find that MES frequently selects over 90% of the k candidates with the h-
ighest approval score. In contrast, the overlap with the k candidates with the highest prevalence is notably lower, particularly for JR-prevalence. While this does not question the proportionality of the outcome computed by MES, it highlights that the rule tends to select a particular type of proportional committee: committees composed of generally popular candidates.
5. Conclusion
We conducted an algorithmic and experimental investigation into the impact of proportionality on feasible committees and candidate importance in approval-based multiwinner elections. We believe our findings can inform future discussions around proportionality in several ways: (i) Our observation that proportionality axioms can significantly restrict the outcome space on real-world voting data highlights their practical relevance and can help guide discussions on the adoption of proportional voting-
 rules. (ii) Our experiments highlighting the influence of the committee size k can inform the design and interpretation of future experiments, emphasizing the need for greater care when selecting k. (iii) Our prevalence and power index measures offer a new perspective on candidate importance under proportionality and can contribute to the transparency of election outcomes. A promising direction for future research is to move beyond fixed voting rules and explore rule-free approaches that optimize-
 various objectives subject to proportionality constraints. This could be relevant for certain applications and contribute to a more nuanced understanding of the space of proportional outcomes.
Acknowledgements
This work was partially supported by the Singapore Ministry of Education under grant number MOE-T2EP20221-0001. This research was (partially) funded by the HPI Research School on Foundations of AI (FAI).
13

References
H. Aziz, M. Brill, V. Conitzer, E. Elkind, R. Freeman, and T. Walsh. Justified representation in approval-based committee voting. Social Choice and Welfare, 48(2):461–485, 2017. [→ p. 2, 5]
H. Aziz, X. Lu, M. Suzuki, J. Vollen, and T. Walsh. Best-of-both-worlds fairness in committee voting. In Proceedings of the 19th International Conference on Web and Internet Economics (WINE), page 676, 2023. Full version arXiv:2303.03642 [cs.GT]. [→ p. 2]
J. F. Banzhaf. Weighted voting doesn’t work: A mathematical analysis. Rutgers Law Review, 19: 317–343, 1965. [→ p. 6]
T. Bardal, M. Brill, D. McCune, and J. Peters. Proportional representation in practice: Quantifying proportionality in ordinal elections. In Proceedings of the 39th AAAI Conference on Artificial Intelligence (AAAI), pages 13581–13588, 2025. [→ p. 5]
P. Berman, M. Karpinski, and A. D. Scott. Approximation hardness of short symmetric instances of MAX-3SAT. Technical report, Electronic Colloquium on Computational Complexity (ECCC), 2003. [→ p. 19]
N. Boehmer, M. Brill, A. Cevallos, J. Gehrlein, L. Sánchez-Fernández, and U. Schmidt-Kraepelin. Approval-based committee voting in practice: A case study of (over-)representation in the Polkadot blockchain. In Proceedings of the 38th AAAI Conference on Artificial Intelligence (AAAI), pages 9519–9527, 2024a. [→ p. 2, 4, 5, 8, 10]
N. Boehmer, P. Faliszewski, Ł. Janeczko, A. Kaczmarczyk, G. Lisowski, G. Pierczyński, S. Rey, D. Stolicki, S. Szufa, and T. Wąs. Guide to numerical experiments on elections in computational social choice. In Proceedings of the 33rd International Joint Conference on Artificial Intelligence (IJCAI), pages 7962–7970, 2024b. [→ p. 4, 9, 31]
R. Bredereck, P. Faliszewski, R. Niedermeier, and A. Kaczmarczyk. An experimental view on committees providing justified representation. In Proceedings of the 28th International Joint Conference on Artificial Intelligence (IJCAI), pages 109–115, 2019. [→ p. 2, 4, 7, 8, 10, 16, 27]
M. Brill and J. Peters. Robust and verifiable proportionality axioms for multiwinner voting. In Proceedings of the 24th ACM Conference on Economics and Computation (ACM-EC), page 301. ACM Press, 2023. Full version arXiv:2302.01989 [cs.GT]. [→ p. 2, 4, 5, 10]
M. Cygan, F. V. Fomin, L. Kowalik, D. Lokshtanov, D. Marx, M. Pilipczuk, M. Pilipczuk, and S. Saurabh. Parameterized algorithms, volume 5. Springer, 2015. [→ p. 6]
C. Dong, F. Frank, J. Peters, and W. Suksompong. Reconfiguring proportional committees. In Proceedings of the 40th AAAI Conference on Artificial Intelligence (AAAI), 2026. Forthcoming. [→ p. 7]
M. Dummett. Voting Procedures. Oxford University Press, 1984. [→ p. 5]
E. Elkind, P. Faliszewski, A. Igarashi, P. Manurangsi, U. Schmidt-Kraepelin, and W. Suksompong. Justifying groups in multiwinner approval voting. Theoretical Computer Science, 969:114039, 2023. [→ p. 4]
E. Elkind, P. Faliszewski, A. Igarashi, P. Manurangsi, U. Schmidt-Kraepelin, and W. Suksompong. The price of justified representation. ACM Transactions on Economics and Computation, 12 (3):11:1–11:27, 2024. [→ p. 4]
14

P. Faliszewski, J. Fils, D. Peters, G. Pierczyński, P. Skowron, D. Stolicki, S. Szufa, and N. Talmon. Participatory budgeting: Data, tools, and analysis participatory budgeting: Data, tools, and analysis. In Proceedings of the 32nd International Joint Conference on Artificial Intelligence (IJCAI), pages 2667–2674, 2023a. full version: https://arxiv.org/pdf/2305.11035. [→ p. 4, 8, 9]
P. Faliszewski, M. Lackner, K. Sornat, and S. Szufa. An experimental comparison of multiwinner voting rules on approval elections. In Proceedings of the 32nd International Joint Conference on Artificial Intelligence (IJCAI), pages 2675–2683, 2023b. [→ p. 4, 5, 8]
D. Halpern, G. Kehne, A. D. Procaccia, J. Tucker-Foltz, and M. Wüthrich. Representation with incomplete votes. Theory and Decision, 2025. Forthcoming. [→ p. 2]
R. M. Karp. Reducibility among combinatorial problems. pages 219–241. Springer, 2010. [→ p. 22]
G. Kehne, U. Schmidt-Kraepelin, and K. Sornat. Robust committee voting, or the other side of representation. In Proceedings of the 26th ACM Conference on Economics and Computation (ACM-EC), pages 1131 – 1151. ACM Press, 2025. [→ p. 2]
H. W. Lenstra. Integer programming with a fixed number of variables. Mathematics of Operations Research, 8:538–548, 1983. [→ p. 6]
D. Peters and P. Skowron. Proportionality and the limits of welfarism. In Proceedings of the 21st ACM Conference on Economics and Computation (ACM-EC), pages 793–794. ACM Press, 2020. [→ p. 2, 12]
D. Peters, G. Pierczyński, and P. Skowron. Proportional participatory budgeting with additive utilities. In Proceedings of the 34th Conference on Neural Information Processing Systems (NeurIPS), pages 12726–12737, 2021. [→ p. 2]
K. Pietrzak. On the parameterized complexity of the fixed alphabet shortest common supersequence and longest common subsequence problems. Journal of Computer and System Sciences, 67(4):757–771, 2003. ISSN 0022-0000. Parameterized Computation and Complexity 2003. [→ p. 21]
M. Revel, S. Milli, T. Lu, J. Watson-Daniels, and M. Nickel. Representative ranking for deliberation in the public sphere. In Proceedings of the 42nd International Conference on Machine Learning (ICML), pages 51583–51613, 2025. [→ p. 2]
S. Szufa, P. Faliszewski, Ł. Janeczko, M. Lackner, A. Slinko, K. Sornat, and N. Talmon. How to sample approval elections? In Proceedings of the 31st International Joint Conference on Artificial Intelligence (IJCAI), pages 496–502, 2022. [→ p. 5, 8, 9]
15

A. Integer Linear Programming Formulations
A.1. ILP for JR-not-EJR+
Recall that in this problem we ask whether there is a committee of size k that satisfies JR but not EJR+. Bredereck et al. [2019] already introduced a set of constraints that are sufficient for satisfying JR, and it is easy to find a set of constraints that are sufficient for violating EJR+. We combine these two sets of constraints, yielding an almost straightforward ILP formulation for our problem: For each candidate cj ∈ C we add a binary variable xj indicating whether cj is on the committee. Fu-
rther, for each voter i ∈ N we add a variable yi to track the approval-score of voter i. In addition to these two types of variables, we introduce an integer variable l indicating the size of the selected cohesive group violating EJR+. Further, we add for each voter i a binary variable vi with the intended meaning that vi = 1 if voter i is in the group that violates EJR+; and for each candidate cj a binary variable uj, with the intended meaning that uj = 1 if candidate cj witnesses the EJR+ violat-
ion. To ensure that our variables comply to their intended meanings, we add the following constraints:
∑
cj ∈C
xj = k (1)
yi ≥ xj ∀i ∈ N, cj ∈ Ai (2)
yi ≤ ∑
cj ∈Ai
xj ∀i ∈ N (3)
∑
i∈N :cj ∈Ai
(1 − yi) < n/k ∀cj ∈ C (4)
∑
i∈N
vi ≥ ln/k (5)
∑
cj ∈C
uj = 1 (6)
uj + xj ≤ 1 ∀cj ∈ C (7)
uj ≤ [cj ∈ Ai] + (1 − vi) ∀i ∈ N, cj ∈ C (8)
∑
cj ∈C
[cj ∈ Ai] · xj < l + m(1 − vi) ∀i ∈ N (9)
l ∈ N≥2 (10)
yi, vi, xj, uj ∈ {0, 1} ∀i ∈ N, cj ∈ C (11)
We give an informal explanation why the above constraints yield indeed an ILP formulation for the problem JR-not-EJR+: The first constraint ensures that the selected committee is of size k. The next three types of constraints ensure that the committee satisfies JR: On the one hand the constraints of type (2) make sure that yi = 1 holds if voter i approves some candidate in the committee, and on the other hand the constraints of type (3) make sure that yi = 0 holds if voter i does not approve any c-
andidate in the committee. Constraints of type (4) ensure that for all candidates cj there are strictly less than n/k voters approving cj who do not approve any candidate in the committee, that is, JR is satisfied. However, the next four types of constraints make sure EJR+ is violated: Constraints of type (5) and (6) ensure that we select at least ln/k voters as well as a single candidate (to form the violating cohesive group). Constraints of type (7) give us that the “witness” candidate cj with u-
j = 1 cannot be selected by the committee. Constraints of type (8) ensure that if a candidate cj is selected (i.e. uj = 1), then it is approved by all selected voters, i.e., by each voter i with vi = 1. Note that if vi = 0 or uj = 0, then the corresponding constraint is trivially satisfied. To ensure
16

that the selected voters and candidates really form group violating EJR+, we introduce the last type of constraints: For a selected voter, i.e., for whom vi = 1 holds, the constraint ensures that it approves strictly less than l candidates in the committee. We finish by observing that for a non-selected voter this constraint is again trivially satisfied.
A.2. ILP for Diff-Committees
In this problem we want to maximize the distance that two JR-committees W1 and W2 can have in a given instance, i.e., we search for two committees that share a minimum number of candidates. To this end, we introduce for each candidate cj two binary variables xj and aj with the intended meanings that xj = 1 if cj ∈ W1, and aj = 1 if cj ∈ W2. Analogously, we introduce two binary variables vi and bi for each voter i with the intended meaning that yi = 1 if voter i approves at least one candidate in W-
1, and bi = 1 if voter i approves at least one candidate in W2. In addition, we introduce for each candidate cj a new binary variable zj with the intended meaning that zj = 1 if cj ∈ W1 \ W2.
maximize ∑
cj ∈C
zj (12)
∑
cj ∈C
xj = k (13)
∑
cj ∈C
aj = k (14)
yi ≥ xj ∀i ∈ N, cj ∈ Ai (15)
bi ≥ aj ∀i ∈ N, cj ∈ Ai (16)
yi ≤ ∑
cj ∈Ai
xj ∀i ∈ N (17)
bi ≤ ∑
cj ∈Ai
aj ∀i ∈ N (18)
∑
i∈N :cj ∈Ai
(1 − yi) < n/k ∀cj ∈ C (19)
∑
i∈N :cj ∈Ai
(1 − bi) < n/k ∀cj ∈ C (20)
zj ≤ xj ∀cj ∈ C (21)
zj ≤ 1 − aj ∀cj ∈ C (22)
yi, bi, xj, aj, zj ∈ {0, 1} ∀i ∈ N, cj ∈ C (23)
With the explanations given in Section A.1, we observe that the constraints of type (18)-(25) make sure that both selected committees are of size k and satisfy JR. Constraints (26) and (27) ensure that zj = 1 only if xj = 1 and aj = 0 hold. By maximizing the number of zjs with zj = 1, we maximize the distance two JR-committees can have and thus, we obtain an ILP formulation for our problem. We can also adapt the ILP for JR to work for EJR+. Now, instead of using the variables yi and bi to indicate-
 whether voter i is represented or not, we introduce k variables yi,1, . . . , yi,k
17

with variable yi,l indicating that voter i approves less than l candidates in the first committee.
maximize ∑
cj ∈C
zj (24)
∑
cj ∈C
xj = k (25)
∑
cj ∈C
aj = k (26)
l · yi,l ≤ ∑
cj ∈Ai
xj ∀i ∈ N, l ∈ [k] (27)
l · bi,l ≤ ∑
cj ∈Ai
aj ∀i ∈ N, l ∈ [k] (28)
∑
i∈N :cj ∈Ai
(1 − yi,l) < l · n/k + n · xj ∀cj ∈ C, l ∈ [k] (29)
∑
i∈N :cj ∈Ai
(1 − bi,l) < l · n/k + n · aj ∀cj ∈ C, l ∈ [k] (30)
zj ≤ xj ∀cj ∈ C (31)
zj ≤ 1 − aj ∀cj ∈ C (32)
yi,l, bi,l, xj, aj, zj ∈ {0, 1} ∀i ∈ N, cj ∈ C, l ∈ [k] (33)
To see that the ILP is correct, we argue why both selected committees satisfy EJR+: Assume that, without loss of generality, the committee W = {cj ∈ C : xj = 1} does not satisfy EJR+. Thus, there exists some cj′ ∈/ W together with N ′ ⊆ Nj′ and l ∈ [k] such that |N ′| ≥ l n
k and
|Ai ∩ W | < l for all i ∈ N ′. As ∑
cj∈Ai xj < l for all i ∈ N ′ we know that yi,l = 0. Hence, for
candidate cj′ inequality (29) is violated, as the left-hand side is at least l n
k . On the other hand, it is easy to see any pair of EJR+ committees corresponds to a feasible variable assignment for the above ILP.
A.3. ILP for p-Candidates-JR
In this problem we are given in addition to the election instance a subset Cp ⊆ C and ask whether there is a JR-committee of size k containing Cp. Our ILP formulation below consists of the same type of variables and constraints as we used in the previous section to satisfy JR. The only additional constraints, i.e., fixing the candidate-variables xj = 1 for cj ∈ Cp in (38), result by the requirement Cp ⊆ C.
∑
cj ∈C
xj = k (34)
yi ≥ xj ∀i ∈ N, cj ∈ Ai (35)
yi ≤ ∑
cj ∈Ai
xj ∀i ∈ N (36)
∑
i∈N :cj ∈Ai
(1 − yi) < n/k ∀cj ∈ C (37)
x1, . . . , xp = 1 ∀cj ∈ Cp (38)
yi, xj ∈ {0, 1} ∀i ∈ N, cj ∈ C (39)
18

A.4. ILP for p-Candidates-EJR+
Finally, to create the ILP for EJR+, we again add additional binary variables yi,l for each i ∈ N and l ∈ [k] with yi,l = 1 only if voter i approves at least l candidates in the outcome.
∑
cj ∈C
xj = k (40)
l · yi,l ≤ ∑
cj ∈Ai
xj ∀i ∈ N, l ∈ [k] (41)
∑
i∈N :cj ∈Ai
(1 − yi,l) < ln/k + n · xj ∀cj ∈ C, l ∈ [k] (42)
x1, . . . , xp = 1 ∀cj ∈ Cp (43)
yi,l, xj ∈ {0, 1} ∀i ∈ N, cj ∈ C, l ∈ [k] (44)
B. Missing Proofs
B.1. Missing Proofs for the JR-not-EJR+ Problem
[Main]
Theorem 3.1. JR-not-EJR+ is NP-complete, and W[1]-hard when parameterized by the committee size k.
We prove our theorem in two steps: First, we sketch a hardness proof to show that Multicolor Independent Set remains NP-hard on 2-regular graphs. Second, we reduce Multicolor Independent Set on 2-regular graphs to JR-not-EJR+.
Multicolor Independent Set
Input: A graph G = (V, E) with a vertex partition V = V1 ∪ · · · ∪ Vh. Question: Is there an independent set V ′ ⊆ V such that |V ′ ∩ Vi| = 1 for all i ∈ [h]?
We say that a vertex v has color i if v ∈ Vi, and that a set V ′ ⊆ V is h-colorful if |V ′ ∩ Vi| ≥ 1 for all i ∈ [h].
Lemma B.1. Multicolor Independent Set is NP-hard, also when restricted to 2-regular graphs with an even number of vertices and each color appearing exactly three times.
We can show the lemma by reducing from a restricted version of 3-SAT which is NP-hard by Berman et al. [2003].
(3,B2)-Satisfiability
Input: A formula φ = C1 ∧ . . . ∧ Cm in CNF where each clause Ci contains exactly three literals and each literal appears exactly twice. Question: Is there a satisfying assignment for φ?
Proof. We construct an instance G of Multicolor Independent Set with h := m colors. For every clause Ci, we insert |Ci| vertices of color i (corresponding to its literals). We insert an edge between two vertices v and v′, corresponding to literals l and l′ in the given (3,B2)Satisfiability instance, if l = ¬l′. One observes that a satisfying assignment for φ corresponds to an h-colorful independent set in G by selecting for each clause the vertex corresponding to a literal which ensures that the c-
lause is satisfied. For the reverse direction, assume we are given an h-colorful independent set V ′, we assign truth values to the variables such that the literals in φ, corresponding to the vertices in V ′, evaluate to ‘true’. Due to the assumption that every literal appears exactly twice, the number of vertices is even and, by construction, is 2-regular. Thus, the lemma follows.
19

Proof of Theorem. Given a 2-regular graph G = (V, E) together with a vertex partition V = V1 ∪ · · · ∪ Vh, with |Vi| = 3 for all i ∈ [h] and |V | even, we construct an instance of JR-not-2JR as follows:
• For every color i ∈ [h], we add |E|
2 color-i-voters 10 and for every vertex u ∈ Vi, we add a vertex-candidate cu which is approved by all color-i-voters.
• For each edge e = {u, u′} ∈ E, we add an edge-candidate ce and an edge-voter ve who approves ce. We let edge-voter ve also approve the two vertex-candidates cu and cu′.
• We add two dummy-candidates d1 and d2 which are approved by all edge-voters.
• We add |E|2
2 − |E| · h − |E| filling-voters as well as filling-candidates. Each filling-candidate is approved by exactly one filling-voter.
Note that |E| = 3h holds, yielding
|E|2
2 − |E| · h − |E| = |E| ·
( |E|
2 −h−1
)
= |E| ·
( 3h
2 −h−1
)
≥ 0.
Thus, the above number of filling-voters and filling-candidates is well-defined. Last, let n be the total number of voters and set k := |E| − h. To identify the cohesive groups in our election, we observe that
n
k = h · |E|
2 + |E| + |E|2
2 − h · |E| − |E|
|E| − h =
|E|2
2 − |E|·h
2
|E| − h = |E|
2.
We find cohesive groups of four types in our constructed instance:
1. Each color i ∈ [h] induces one 1-cohesive group of color-i-voters who approve all vertexcandidates which derive from vertices in Vi.
2. Each vertex-candidate cu, derived from a vertex u ∈ Vi, induces a 1-cohesive group among the color-i-voters and the two edge-voters approving cu. Clearly, also every subset of these
voters of size at least |E|
2 forms a 1-cohesive group.
3. Every |E|
2 -large subset of edge-voters induces a 1-cohesive group (they all approve the two dummy-candidates).
4. All edge-voters together induce one 2-cohesive group.
(⇒) To show correctness of our reduction, we assume first that there is an h-colorful independent set V ′ = {v1, . . . , vh} in G and construct a JR-committee W which does not satisfy 2-JR. To this end, we add the h vertex-candidates, corresponding to the vertices in V ′, to W and afterwards k − h = |E| − 2h edge-candidates approved by edge-voters who do not approve any selected vertex-candidate (note that since G is 2-regular, at most 2h edge-voters can approve h vertex-candidates). We claim that-
 W fulfills JR, but violates 2-JR. Clearly, for each i ∈ [h] all color-i-voters approve one candidate in the committee since V ′ is an h-colorful set. Note that this also implies that no cohesive group of the second type (in our enumeration above) violates JR. Further, all edge-voters approve exactly one candidate: since V ′ is an independent set, 2h distinct edge-voters approve vertex-candidates in W , and by construction, the other |E| − 2h edge-voters approve an edge-candidate. As there are no -
further 1-cohesive groups, the committee W satisfies JR.
10Since G is 2-regular, we know that |V | = |E| holds and thus, the number of edges must also be even.
20

However, all edge-voters together induce a 2-cohesive group and no edge-voter approves two candidates in W , implying that W violates 2-JR.
(⇐) For the reverse direction assume there exists a committee W satisfying JR, but not 2-JR. To give the 1-cohesive groups within color-i-voters enough representation for every i ∈ [h], there has to be at least one vertex-candidate cu in W with u ∈ Vi. Since there is only one 2-cohesive group, namely the one which consists of all edge-voters, and W violates 2-JR—but satisfies JR—we conclude that no edge-voter is allowed to approve two candidates in W . In particular, no edge-voter approves two ver-
tex-candidates in W . Therefore, no two vertices u, u′ with cu, cu′ ∈ W share an edge in G. Thus, the vertices {u ∈ V |cu ∈ W } form an h-colorful independent set in G (theoretically, the independent set could be strictly larger than h but this does not cause any problems). Since Multicolor Independent Set is W[1]-hard when parameterized by the number of colors [Pietrzak, 2003], and by construction we have k = 2h, that is, the committee-size is a function only depending on the number of colors in -
our reduction, we may even conclude W[1]-hardness with respect to k.
[Main]
Theorem 3.2. JR-not-EJR+ is in FPT when parameterized by the number of voters n.
Proof. We claim that the given ILP is a formulation for JR-not-EJR+. Note that in comparison to the ILP formulation given in Section A, we do not introduce variables for each candidate, but for each equivalence class, allowing us to bound the number of variables by a function in n, as argued above. Accordingly, we define by Qi the set of equivalence classes approved by voter i. To argue why the given formulation is indeed correct, let us first explain the intended meanings of the constraints that -
ensure that a JR-committee is induced by them, that are, constraints of type (45)-(49), and the therein appearing variables: For each equivalence class [cj] ∈ Q, we introduce a binary variable xj and an integer variable zj with the intended meaning that xj = 1 if in the committee there is at least one candidate of the equivalence class [cj], and xj = 0 otherwise; and zj denoting how many candidates of the equivalence class are in the committee. Note that the inequalities of type (48) ensure that z-
j = 0 if xj = 0, and take a value in {1, . . . , |[cj]|}, otherwise. Further, we adapt the equality that ensures that we select exactly k candidates for the committee by summing over the variables zj, instead of xj, for [cj] ∈ Q, resulting in equality (45). Observe that, as before, we have a variable yi for each voter i ∈ [n], indicating whether voter i approves at least one candidate in the committee. Moreover, observe that the remaining constraints, that are, constraints involving the variables -
yi, are taken over from the regular ILP, with the small modification that we introduce constraints for each equivalence class, instead of for each candidate, and accordingly sum over equivalence classes, instead of candidates, if applicable. Second, let us consider the constraints that ensure EJR+ is violated, namely constraints of type (49)-(54), and the therein involved variables: As before, we have a variable vi for each voter i ∈ [n], indicating whether a voter is part of the violating cohesiv-
e group, or not. Further, we have again the integer variable l, reflecting the size of the cohesive group. Next, we have, similar to above, a binary variable tj and an integer variable uj for each equivalence class [cj] ∈ Q: The variable uj denotes whether the equivalence class [cj] is present in the violating cohesive group, and variable tj denotes how many representatives of that equivalence class are selected. Similar to above, we have constraints of type (36) to ensure tj = 0, if uj = 0; and t-
j ∈ [1, . . . , |[cj]|], otherwise. These constraints only slightly modified from the corresponding constraints in the standard ILP, in the way that we sum over, and introduce constraints for, equivalence classes, instead of candidates. In addition, we have to exchange the variables xj by zj to count the total number of candidates a voter approves.
21

∑
[cj ]∈Q
zj = k (45)
yi ≥ xj ∀i ∈ N, [cj] ∈ Qi (46)
yi ≤ ∑
[cj ]∈Qi
xj ∀i ∈ N (47)
xj ≤ zj ≤ |[cj]| · xj ∀[cj] ∈ Q (48)
∑
i∈N :[cj ]∈Qi
(1 − yi) < n/k ∀[cj] ∈ Q (49)
∑
i∈N
vi ≥ ln/k (50)
∑
[cj ]∈Q
tj ≥ 1 (51)
uj ≤ tj ≤ |[cj]| · uj ∀[cj] ∈ Q (52)
uj ≤ [[cj] ∈ Qi] + (1 − vi) ∀i ∈ N, [cj] ∈ Q (53)
∑
cj ∈C
[[cj] ∈ Qi] · zj < l + m(1 − vi) ∀i ∈ N (54)
l ∈ N≥2 (55)
zj, tj ∈ N ∀[cj] ∈ Q (56)
yi, vi, xj, uj ∈ {0, 1} ∀i ∈ N, [cj] ∈ Q (57)
B.2. Missing proofs for the X-Diff-Committees Problem
[Main]
Theorem 3.3. For each k′ ≥ 2, JR-Diff-Committees and EJR+-Diff-Committees are NP-complete and W[1]-hard when parameterized by the committee size k.
Proof. To show our theorem, we reduce from X3C which is known to be NP-hard by Karp [2010].
X3C
Input: A set X = {x1, x2, . . . , x3q} and a collection S of 3-element subsets of X. Question: Does S contain an exact cover of X, i.e., a subcollection S′ ⊆ S such that every element of X occurs in exactly one set of S′?
Given an instance (X, S) of X3C, we construct an instance of Diff-Comm with n := q4 voters and set k := q. For each p ∈ [q − 1] we add q3 + 3q − 1 voters, and a candidate cp who is approved by all of these voters. We call the voters block-p-voters, and the corresponding candidate block-p-candidate. Next, we add for each S = {xi, xj, xl} ∈ S a candidate cS (we call them set-candidates) who is, for all p ∈ [q − 1], approved by the ith, jth and lth block-p-voter. Last, we add another candidate cq and-
 q3 − 3q2 + 4q − 1 voters who jointly approve cq. To identify the cohesive groups in our election, let us first verify that we have indeed q4 voters:
n = (q − 1) · (q3 + 3q − 1) + q3 − 3q2 + 4q − 1
= q4 + 3q2 − q − q3 − 3q + 1 + q3 − 3q2 + 4q − 1 = q4
Hence, a 1-cohesive group consists of at least n/k = q3 voters, yielding that for all p ∈ [q − 1] the candidate cp induces a 1-cohesive group of size q3 + 3q − 1, but that no other candidate is
22

approved by at least q3 voters. It follows that the q − 1 block-candidates form together with any of the remaining ones a JR-committee. We claim that if (X, S) has an exact cover S′, then our created election instance has two JR-committees W1, W2 with d(W1, W2) ≥ 2; and otherwise each pair (W1, W2) of JR-committees has distance at most one. (⇒) To show the correctness of our reduction, we transform an exact cover S′ of (X, S) into a JR-committee W2 with {c1, . . . , cq−1} ∩ W2 = ∅. To this end, w-
e put all candidates corresponding to sets in S′ into W2 and show that W2 is indeed a JR-committee: Since S′ is an exact cover of X and all sets in S are of size three, we conclude |S′| = q, and hence, |W2| = q holds, as well. As the subcollection S′ covers all 3q elements of X, also 3q voters of each 1-cohesive group approve a candidate in W2. That is, in each induced 1-cohesive group only q3 − 1 voters do not approve any candidate in the committee. Hence, we have shown that our committee W2 sati-
sfies JR. (⇐) For the reverse direction we assume there are two JR-committees W1, W2 with d(W1, W2) ≥ 2. We claim that in this case one of the two committees, say W2, has to consist of q set-candidates. For now, we assume the correctness of the previous statement, and postpone its proof to the end. Remember that if a committee W2 in our constructed election satisfies JR, then at least 3q voters of each 1-cohesive group have to approve a candidate in W2. Due to symmetry of the instance, it is suffi-
cient to consider only the possibilities of selecting q set-candidates such that 3q block-1-voters approve someone in W2: Each set-candidate is approved by exactly three block-1-voters, that means, the q set-candidates in W2 need to be approved by disjoint sets of block-1-voters. By construction, these candidates yield a 1-to-1 correspondence to a partition of X into q disjoint subsets. It remains to show that if two JR-committees W1 and W2 exist with d(W1, W2) ≥ 2, then one of them, say W2, has t-
o consist of q set-candidates. To this end we observe that if there exist two JR-committees W1 and W2 with distance at least two, then not both of them can contain all q − 1 block-candidates. Due to symmetry, we may assume, without loss of generality, c1 ∈/ W2. But the only way we can build a committee not containing c1 such that at least 3q block-1-voters approve someone in the committee is by selecting ‘enough’ set-candidates: Since each set-candidate is approved by exactly three block-1-voters,-
 W2 has to contain q set-candidates. As a committee consists of exactly q candidates, the claim follows.
[Main]
Theorem 3.4. JR-Diff-Committees and EJR+-Diff-Committees are in FPT when parameterized by n.
Proof. We claim that Algorithm 1 decides correctly whether a given instance has two JR
committees with distance at least k′, and its running time lies in O(22n · nm). Let us first describe the algorithm: By iterating over all subsets of Q in the first for-loop, we can interpret L as a list of all justifying groups, up to equivalence, that do not contain two equivalent candidates. Subsequently, we consider the sets in L as subsets of C by selecting a representative of each equivalence class to show explicitly how to construct the corresponding committees. In the second for-loop, we i-
terate over all pairs {X1, X2} ∈ (L
2
) and look at their shared candidates. If c ∈ X1 ∩ X2 is equivalent to some candidate c′, then we replace c in X2 by c′, allowing us to reduce kc, namely the number of shared candidates, by one. To construct two JR-committees containing the justifying group X1 resp. X2, while maximizing their distance, we would like to complement the sets X1 and X2 by disjoint sets of candidates (that are also disjoint with X1 ∪ X2, of course). To this end, observe that if m − |X1 ∪ X2| ≥ 2k − |X1| − |X2| holds, t-
hen, we may choose arbitrary 2k − |X1| − |X2| candidates from C \ (X1 ∪ X2), add k − |X1| of them to X1, and the remaining ones to X2. Hence, we have d(X1, X2) = k − kc.
23

Algorithm 1
Input: An instance (N, C, k, k′) of Diff-Committees 1: Construct the quotient Q = C/ ∼ 2: dmax, d ← 0 3: L ← ∅
4: for X ∈ 2Q with |X| ≤ k do 5: if X satisfies JR then 6: add X to L 7: end if 8: end for 9: for {X1, X2} ∈ (L
2
) do 10: kc ← |X1 ∩ X2|
11: for [c] ∈ X1 ∩ X2 do 12: if |[c]| > 1 then 13: kc ← kc − 1 14: end if 15: end for
16: if m − |X1 ∪ X2| ≥ 2k − |X1| − |X2| then 17: d ← k − kc 18: else 19: d ← 2k − m 20: end if 21: if d > dmax then
22: dmax ← d 23: end if 24: end for 25: if k′ ≤ dmax then 26: return Yes 27: else
28: return No 29: end if
24

Otherwise, there are not enough candidates to complement X1 and X2 with by disjoint sets, that is,
m − |X1 ∪ X2| < 2k − |X1| − |X2|
⇔ m + kc < 2k.
In this case, we first fill the remaining seats with candidates from C \ (X1 ∪ X2) until none non-chosen candidate is leftover. Afterwards, we fill the remaining seats in X1 with candidates from X2 and vice versa. Thus, d(X1, X2) = 2k − m. In the last step, we check whether the distance between X1 and X2 is greater than the current best one, and if so, update dmax. Let us argue now why our algorithm (implicitly) finds two JR-committees of maximum distance. Therefore, assume by contradiction, there-
 are two JR-committees W1′ and W2′ with d(W1′, W2′) >
dmax. We delete candidates from W1′ and W2′ such that each equivalence class is represented by at most one candidate, and call the thereby resulting sets W1 resp. W2. Note that at some point in the iteration process we considered a pair X1, X2 such that X1 ∼ W1 and X2 ∼ W2 hold, and that, after having replaced equivalent candidates that appear in X1 and X2, we have |X1 ∩ X2| ≤ |W1 ∩ W2|. In the next step of the algorithm we checked whether there are enough candidates left to fill the remaining spo-
ts, i.e., candidates that neither appear in X1, nor in X2, such that X1 and X2 can be complemented by disjoint sets. If this applied, then we complemented X1 and X2 in this way, resulting in, say, X′1 resp. X′2. However, putting everything together, we obtain
dmax ≥ d(X′
1, X′
2) = k − kc = k − |X1 ∩ X2| ≥ k − |W1 ∩ W2| ≥ d(W ′
1, W ′
2),
contracting our assumption. In the other case, i.e., we do not have enough candidates to proceed as above, we constructed two JR-committees, say again X′1 and X′2, with distance 2k − m. However, observe that there is no way an instance with m < 2k candidates can produce two JR-committees with strictly greater distance. Therefore, dmax ≥ d(X′1, X′2) ≥ d(W1′, W2′) holds, yielding again a contradiction to our assumption. Last, let us study the running time of our algorithm: Iterating over all subsets-
 (of size at
most k) of Q, as well as iterating over all pairs of such subsets, has a running time in O(22n). Verifying JR has a running time of O(n · m), and together with the observation that the lines
10-23 can be implemented in O(m), we obtain a running time lying in O(22n · nm). For EJR+, we again adapt our ILP from earlier to use equivalence classes. However, now we cannot use xj and aj as indicator variables for whether or not a single candidate from this class is left over (and thus the voters approving this candidate need to be fulfilled according to EJR+). Instead we add auxiliary binary variables xˆj (and aˆj) with xˆj = 1 if and only if xj = |[cj]| holds, ensured by constraints (63) an-
d (64). To see this, first observe that if xj = |[cj]|, then the constraints postulate that 0 ≤ (1 − xˆj) ≤ 0. On the other hand, if xj < |cj| holds, then constraint (64) requires that −(1 − xˆj) is negative (and thus xˆj = 0).
25

maximize ∑
[cj ]∈Q
zj (58)
∑
[cj ]∈Q
xj = k (59)
∑
[cj ]∈Q
aj = k (60)
l · yi,l ≤ ∑
[cj ]∈Ai
xj ∀i ∈ N, l ∈ [k] (61)
l · bi,l ≤ ∑
[cj ]∈Ai
aj ∀i ∈ N, l ∈ [k] (62)
|[cj]|(1 − xˆj) ≥ xj − |[cj]| ∀[cj] ∈ Q (63)
−|[cj]|(1 − xˆj) ≤ xj − |[cj]| ∀[cj] ∈ Q (64)
|[cj]|(1 − aˆj) ≥ aj − |[cj]| ∀[cj] ∈ Q (65)
−|[cj]|(1 − aˆj) ≤ aj − |[cj]| ∀[cj] ∈ Q (66)
∑
i∈N :[cj ]∈Ai
(1 − yi,l) < l · n/k + n · xˆj ∀[cj] ∈ Q, l ∈ [k] (67)
∑
i∈N :[cj ]∈Ai
(1 − bi,l) < l · n/k + n · aˆj ∀[cj] ∈ Q, l ∈ [k] (68)
zj ≤ xj ∀[cj] ∈ Q (69)
zj ≤ |[cj]| − aj ∀[cj] ∈ Q (70)
xj, aj, zj ∈ N ∀i ∈ N, [cj] ∈ Q, l ∈ [k] (71)
yi,l, bi,l, xˆj, aˆj ∈ {0, 1} ∀i ∈ N, [cj] ∈ Q, l ∈ [k] (72)
B.3. Missing proofs for the p-Candidate-X Problem
[Main]
Theorem 3.5. 2-Candidates-JR is NP-complete, and W[1]-hard when parameterized by the committee size k.
Proof. Given a graph G = (V, E) with a vertex partition V = V1 ∪ . . . ∪ Vh. Without loss of generality, we assume |Vi| = q for all i ∈ [h], for some q ∈ N. To construct an instance of 2-Candidates-JR we introduce the following voters:
• For each vertex u ∈ V (G), we add a vertex-voter vu.
• We add q − 4 filling-voters.
• We add q − 2h − 1 dummy-voters.
Next, we add the following candidates:
• For each color i ∈ [h] and each vertex u ∈ Vi, we introduce a vertex-candidate cu, approved by all vertex-voters corresponding to the vertices Vi \ {u}.
• For each edge e = {u, u′}, we introduce an edge-candidate ce, approved by vu, vu′ and all filling-voters.
26

• We add two dummy-candidates d1 and d2, approved by all dummy-voters.
We say that vertex-voter vu, resp. vertex-candidate cu, is of color i if u ∈ Vi. Further, we say that edge-candidate ce with e = {u, u′} has color i if u ∈ Vi or u′ ∈ Vi. Let n be the total number of voters and set k := h + 2. To identify the cohesive groups in our election we observe that
n
k = h · q + q − 4 + q − 2h − 1
h + 2 = q − 2h + 5
h+2
holds, yielding q − 3 < n
k < q − 2. As a consequence, we observe 1-cohesive groups of three types in our constructed instance:
1. Each vertex-candidate cu induces one 1-cohesive group of size q − 1.
2. Each vertex-candidate cu induces (q − 1) 1-cohesive groups of size q − 2 (by excluding exactly one vertex-voter in the above 1-cohesive group each time).
3. Each edge-candidate ce with e = {u, u′} induces one 1-cohesive group consisting of vu, vu′ and the filling-voters (this group has q − 2 voters).
(⇒) To show correctness of our reduction, we transform an h-colorful independent set V ′ = {u1, . . . , uh}, with ui ∈ Vi, into a JR-committee W of size h + 2 with d1, d2 ∈ W . In particular, we claim that the h vertex-candidates, corresponding to the vertices in V ′, form together with the two dummy candidates a JR-committee. For each i ∈ [h], every vertex-candidate of color i is approved by all vertex-voters of color i but one, thus, by q −1 vertex-voters. Clearly, each cohesive group among vert-
ex-voters of color i (of type 1 and 2) contains at least one voter approving cui. It remains to argue that also the 1-cohesive groups induced by edge-candidates are represented. Hence, by contradiction, assume there is a 1-cohesive group induced by some edge e = {u, u′} violating JR. By definition, the cohesive group consists of the filling voters, and the two vertexvoters vu and vu′. By construction, the vertex-voter vu approves all vertex-candidates of color i but cu, and the vertex-voter vu′ ap-
proves all vertex-candidates of color i but cu′. Thus, both, cu and cu′, lie in W . However, this means that u and u′ are in V ′, contradicting the assumption that V ′ is an independent set. (⇐) For the reverse direction assume there is a JR committee W of size h + 2 including d1 and d2. We claim that if no 1-cohesive group among the vertex-voters of some color i violates JR for a given committee W ′, then W ′ includes a vertex-candidate of color i, or at least three edge-candidates having color i-
. We omit proving the claim, and instead refer the reader to the hardness proof for Small-Prop-Com, containing the proof of the claim (which still goes through for our modified election) [Bredereck et al., 2019]. We now show that W includes a vertex-candidate of each color. To this end, assume that W consists of j edge-candidates and h − j vertex-candidates. By the above claim we know that we need to have 3j
2 + h − j + 2 candidates in W , implying j = 0. Thus, we know that W consists of h vertex-candidates and the two dummy-candidates. Since W satisfies JR, it contains a vertex-candidate of each color. Further, these candidates also need to ensure that no 1-cohesive group induced by an edge violates JR. Thus, no two vertex-candidates, derived from vertices that share an edge in G, are allowed to be in W at the same time. We conclude that the vertex set {u | cu ∈ W } forms an h-colorful independent se-
t in G. Note that we may apply the same argument that we used for the previous W[1]-hardness conclusion: Since the committee-size is again a function only depending on the number of colors in our reduction, and Multicolor Independent Set is W[1]-hard when parameterized by the number of colors, we may again conclude W[1]-hardness with respect to k.
27

Note that our election does not contain a group of voters of size at least l n
k jointly approving a candidate for any l ≥ 2. Hence, EJR and EJR+ coincide with JR in our constructed election, resulting in hardness of finding an EJR, resp. EJR+, committee containing two given candidates.
[Main]
Theorem 3.6. p-Candidates-JR and p-Candidates-EJR+ are in FPT when parameterized by n.
Proof. For JR we give a simple, self-contained proof, while for EJR+ we again use Lenstra’s algorithm.
JR. We again first construct the quotient Q = C/∼. If we obtain at most k−p equivalence classes, we choose a representative of each equivalence class and check whether they satisfy, together with C′, the axiom JR. In case they do, we found a justifying group and add arbitrary k − p − |Q| candidates to it to form a JR-committee. Otherwise, we answer the question negatively. In case |Q| ≥ k − p holds, we iterate over all size k − p subsets of Q, and check for each subset whether it satisfies, togeth-
er with C′, the axiom JR. If one of them does, we answer the question positively, otherwise negatively. To complete the proof, let us look at the running time: Clearly, the partitioning can be done
in O(nm). As we have ( 2n
k−p
) ≤ 22n subsets of Q of size-(k − p), and checking whether a committee satisfies JR has a running time of O(nm), the total running time of the above procedure lies
in O(22n · nm).
EJR+. To construct the ILP, we assume that p([cj]) is the number of candidates that should at least be chosen from the equivalence class [cj]. We again follow the previous constructions and replace candidates by their respective equivalence classes, leading to an ILP with size FPT in n.
∑
cj ∈Q
xj = k (73)
l · yi,l ≤ ∑
[cj ]∈Ai
xj ∀i ∈ N, l ∈ [k] (74)
|[cj]|(1 − xˆj) ≥ xj − |[cj]| ∀[cj] ∈ Q (75)
−|[cj]|(1 − xˆj) ≤ xj − |[cj]| ∀[cj] ∈ Q (76)
∑
i∈N :cj ∈Ai
(1 − yi,l) < ln/k + n · xˆj ∀[cj] ∈ Q, l ∈ [k] (77)
xj ≥ p([cj]) ∀[cj] ∈ Q (78)
xj ∈ N ∀[cj] ∈ Q (79)
yi,l ∀i ∈ N, l ∈ [k] (80)
B.4. Counting JR-Committees
[Main]
Theorem 3.7. For a given election I, the number of JR committees |JR(I)| can be computed in FPT time in n.
In the following, we give an algorithm in which we use the same idea as before: We iterate over all subsets of the quotient Q = C/∼ that have size at most k, check for each one whether it satisfies JR, and if so, count the number of possibilities we can build a committee of size k, using only elements from the corresponding equivalence classes, but such that each equivalence class
28

has at least one representative in the committee. Then, summing up all possibilities yields the total number of JR-committees.
Proof. We claim that Algorithm 2 proves our theorem.
Algorithm 2
Input: An instance (C, V, k) of #JR-committees 1: Construct the quotient Q = C/ ∼ 2: counter ← 0 3: for j ∈ 1, . . . , k do 4: for X ∈ (Q
j
) do
5: if X satisfies JR then 6: for [cj] ∈ X do 7: aj ← |[cj]| 8: end for
9: T [j′][k′] ← 0 for all (j′, k′) ∈ [j] × [k] 10: for j′ ≤ j do 11: for k′ < j′ do 12: T [j′][k′] ← 0 13: end for
14: T [j′][j′] ← ∏j′
i=1 ai
15: end for 16: for k′ ≤ k do
17: T [1][k′] ← (a1
k′
)
18: end for 19: for 1 < k′ ≤ k do 20: for j′ ≤ min{k′ − 1, j} do
21: T [j′][k′] = ∑min{k′−j′+1,aj′ }
i=1
(aj′ i
) · T [j′ − 1][k′ − i] 22: end for 23: end for
24: counter = counter + T [j][k] 25: end if 26: end for 27: end for 28: return counter
In the algorithm, we first build the quotient Q and introduce an integer variable, initialized with zero, to count the total number of JR-committees. Next, we iterate for all j ∈ [k] over all subsets {[c1], . . . , [cj]} of Q, that is, we iterate over all possible sets of equivalence classes of size at most k. For each such subset, we check if it satisfies JR. If it does, we would like to compute the number of committees that only consist of candidates of the selected equivalence classes, but also-
 contain at least one representative of each one (to avoid double-counting), and increase the counter accordingly. Let us define this number by b([c1], . . . , [cj]). Assuming we know how to compute these numbers, it is easy to see that in the end the counter gives us the total number of JR-committees since we simply iterate over a decomposition of the set of JR-committees. By using a dynamic programming approach, we can calculate each number b([c1], . . . , [cj]) in O(k3): Consider a subset of si-
ze j of Q that satisfies JR. For each such subset, we set up a 2-dimensional table of size j × k, with the intended meaning that for k′ ∈ [k] the entry in T [j′][k′] states the number of sets of size k′, only consisting of candidates of the first j′ equivalence classes [c1], . . . , [cj′], but again such that each equivalence class is represented by at least one
29

representative. We start by initializing the ‘easy’ entries of the table: Clearly, if k′ < j′ holds, then we set T [j′][k′] = 0 as we have strictly less spots than equivalence classes that have to appear in the set. Moreover, if j′ = k′, then we have exactly one spot for each equivalence class,
and thus, set T [j′][j′] = ∏j′
i=1 ai, with ai being the number of candidates in the equivalence
class [ci]. Further, for j′ = 1, we set T [1][k′] = (a1
k′
). Now, we may compute the remaining entries dynamically. To this end, observe that for a fixed k′, we may assume that the rows T [i] for all i < k′ are already filled as we compute the entries T [j′][k′] for j′ < k′ successively for increasing k′. Let us now argue how we compute an arbitrary entry T [j′][k′] for 1 < j′ < k′: For i ∈ [min{k′ − j′ + 1, aj′}], we sum up the number of possibilities of choosing i candidates from [cj′] and the remaining ones from the first j′ − 1 equivalence classes [x-
1], . . . , [xj′−1], that is,
exactly (aj′
i
) · T [j′ − 1][k′ − i]. Thus, in the end, we have T [j][k] = b([c1], . . . , [cj]). We claim that the running time of the above algorithm lies in O(22n · (nm + k3)): In the
beginning, we iterate over all subsets of Q of size at most k, which can be upper-bounded by 22n. As argued before, checking whether a subset X satisfies JR, can be done in O(mn), and filling the 2-dimensional table T of the dynamic program, associated with X, has a cubic running time in k.
Observation B.2. Note that Algorithm 2 can be easily adapted to also solve #p-CandidatesJR, the counting problem associated to p-Candidates-JR, by iterating over all subsets of Qp := C\{c1,...,cp}/∼ of size at most k − p.
Corollary B.3. #p-Candidates-JR lies in FPT, when parameterized by n.
[Main]
Proposition 3.8. There is an algorithm that, given an election I, candidate c, and two positive rational numbers ε and δ, outputs a value α ̃ such that the JR-prevalence of c lies, with probability at least 1−δ, in the interval [α ̃ −ε, α ̃ +ε]. This algorithm has an expected running time polynomial in |C|, |V |, 1/ε, ln(1/δ) and (m
k )/|JR(I)|.
Proof. With r := ln(2/δ)
2ε2 , we claim that Algorithm 3 proves our proposition.
Algorithm 3
Input: An instance (C, V, k, C′) of p-Candidates-JR
X, X′ ← 0
while X < r do
choose a subset W ⊆ C with |W | = k uniformly at random if W satisfies JR then X =X+1
if C′ ⊆ W then X′ = X′ + 1 end if end if end while return X′/X
We first argue why our algorithm is correct. To this end, consider the ith time the algorithm generates a committee W that satisfies JR, that is, the committee W is not rejected. For simplicity, we call this iteration the ith-iteration in the following. We view the sampling of the JR-committees as a Bernoulli trial which is successful if and only if W ∈ Ap. Let Xi′ be the
random variable with Xi′ = 1 if we choose a committee from Ap in the ith-iteration, and Xi′ = 0
30

otherwise. Clearly, E[Xi′] = α and our algorithm computes the random variable X′ = ∑r
i=1 Xi′.
It is easy to see that X′ has a binomial distribution of r trials with probability α success, and hence, X′ ∼ B(r, α). It is known that X′/r is an unbiased, maximum likelihood estimator for α, and in particular E[X′] = α · r. To show that our algorithm achieves the desired accuracy and confidence, we have to show that the number of samples, that is, the number of JR-committees we generate, is sufficient. By Hoeffding’s inequality, we have
P
(∣ ∣ ∣
X′
r − E(X′)
r
∣ ∣
∣≥ε
)
≤ 2e−2r2ε2 .
Substituting r by ln(2/δ)
2ε2 yields indeed
P
(∣ ∣ ∣
X′
r − E(X′)
r
∣ ∣
∣≥ε
)
≤ δ.
We claim that the above algorithm has an expected running time of O(r/β · |C| · |V |). Clearly, we can choose a random committee of cardinality k from C in time O(|C|). Further, checking whether a given committee satisfies JR can be done in time O(|C|·|V |). Since we only increase the variable X if the generated subset satisfies JR, and reject the committee otherwise, the expected number of committees we have to generate until we reach our desired number of JR-committees is r/β. By definition of r-
, this yields the above claimed running time.
C. Appendix for Experiments
Additional Datasets. To generate our synthetic datasets, we consider the resampling model and a variant of the Euclidean model, and sample elections with n = 150, m = 50, and k = 10. For p, φ ∈ [0, 1], in the (p, φ)-resampling model, we generate a uniformly at random sampled central ballot A∗ containing ⌊p · m⌋ candidates. To sample a ballot A, we start with A := A∗. Subsequently, for each candidate c ∈ C, with probability 1 − φ we do not touch c, i.e., we leave the membership of c in the set A un-
changed. Otherwise, we “resample” c, i.e., c gets approved independently with probability p by each voter, and disapproved otherwise. In our (r, d)Euclidean model, voters and candidates correspond to randomly drawn points in a d-dimensional Euclidean space. Each voter approves all candidates who lie within Euclidean distance r from the voter. In our case, the Euclidean space is the d-dimensional uniform cube. To generate the elections, we use the models resampling and euclidean_vcr in the prefsamp-
ling library [Boehmer et al., 2024b]. For the resampling model, we generate, for each parameter combination with p ∈ {0.1, 0.3} and φ ∈ {0.6, 0.7, 0.8, 0.9}, 50 elections, using the seeds [0, . . . , 49]. For the Euclidean model, we generate for each parameter combinations with r ∈ {0.04, 0.08, . . . , 0.32} and d ∈ {1, 2}, also 50 elections, again for the seeds [0, . . . , 49].11
C.1. How Restrictive Are Proportionality Axioms?
Dependency on k. As mentioned in Section 4.1, we encounter a variety of shapes when studying how the JR-fractions, resp. EJR+-fractions, depend on the selected value for k. In Figure 8 we display additional shapes that pabulib instances exhibit. Although this set, together with the shapes shown before, should not be viewed as a classification, we think they give a good overview of the kind of shapes that can be found across the pabulib dataset.12
11In our first run, we generated elections for a broader range of parameters. However, for our final datasets we restricted the parameters to the values given above, as those, generally, generate elections that are interesting from the perspective of proportionality, that is, elections where the EJR+-fraction is not close to one. It is important to keep this ’prefiltering’ in mind throughout the following analysis. 12The missing values for EJR+ in three of the figures are due to the timeout we set-
, i.e., we did not find 1000 EJR+-committees within 15 minutes for the corresponding values of k, probably due to a very low EJR+ fraction.
31

10 20 30 40 50 60
0
0.5
1
k
Axiom-Fraction
JR EJR+
(a) Amsterdam 622 (2022)
10 20 30 40 50
0
0.5
1
k
Axiom-Fraction
JR EJR+
(b) Wawer (2017)
10 20 30 40
0
0.5
1
k
Axiom-Fraction
JR EJR+
(c) Białołęka – Obszar 1 (2018)
5 10 15 20 25 30 35 40
0
0.5
1
k
Axiom-Fraction
JR EJR+
(d) Bielany (2018)
10 20 30 40 50
0
0.5
1
k
Axiom-Fraction
JR EJR+
(e) Wawer (2018)
10 20 30 40 50 60
0
0.5
1
k
Axiom-Fraction
JR EJR+
(f) Tarchomin, Nowodwory, Kępa Tarchomińska – Obszar 1 (2019)
20 40 60 80 100
0
0.5
1
k
Axiom-Fraction
JR EJR+
(g) Ursynów (2021)
5 10 15 20 25 30 35 40
0
0.5
1
k
Axiom-Fraction
JR EJR+
(h) Wesoła (2021)
20 40 60 80
0
0.5
1
k
Axiom-Fraction
JR EJR+
(i) Mokotów (2022)
10 20 30 40 50
0
0.5
1
k
Axiom-Fraction
JR EJR+
(j) Śródmieście (2024)
10 20 30 40
0
0.5
1
k
Axiom-Fraction
JR EJR+
(k) Żoliborz (2024)
10 20 30 40 50
0
0.5
1
k
Axiom-Fraction
JR EJR+
(l) Śródmieście (2025)
Figure 8: JR-fraction and EJR+-fraction for committee sizes k ∈ [m] across selected pabulib instances.
32

Our aim in designing this experiment was for the shapes to uncover a suitable value for k, or more precisely, how to choose the relation between m and k such that the majority of pabulib instances are interesting from the perspective of proportionality. However, given the unexpected variety of shapes, it does not become obvious how to choose c in order to set k = m/c. Hence, we count for each c ∈ [2, . . . , 10] the number of pabulib instances with an EJR+ fraction of at most 0.95 when seeting k -
= m/c. Examining Figure 9, we choose k := ⌊m/2⌋ to maximize this number.
2 3 4 5 6 7 8 9 10
0
50
100
150
200
250
c
Frequency
JR EJR+
Figure 9: Histogram showing, for different values of c, the number of pabulib instances with JR, resp. EJR+, fraction of at most 0.95 when setting k = m/c.
Although we have chosen k in advance for our synthetic elections, we are curious what kind of shapes we can generate with our previously described selection of parameter combinations. Both the resampling and the Euclidean dataset create each a set of shapes that is more homogeneous, compared to our pabulib dataset13. However, instancewise, we make similar, unexpected observations as for the pabulib dataset, see Section 4.1. In the following, we want to point out the most eye-catching differences: -
In the resampling dataset, most (nontrivial) shapes are quite flat, especially the ones for EJR+. Moreover, each considered election, once it has reached its first local minimum behaves afterwards, roughly speaking, quite monotonously, i.e., only allows ’small zigzags’14; for some examples, see Figure 10. Although the observations we made above for the resampling dataset, hold for the majority of the Euclidean instances as well, see Figure 11, there is one striking phenomenon that we only observe,-
 at least to this extent, on the Euclidean dataset: In Figure 11c we observe that for both plots, for JR and EJR+, the shape contains some piecewise linear patterns–which are almost parallel to each other–with rapid jumps in between two. At least for those instances which exhibit this behaviour clearly, we observe that, restricted to a single linear piece, the number of candidates that are relevant for cohesiveness does not change, and differs to the next one. However, although we think that this -
behaviour is far from accidental, one should be careful to reduce one on the other without any further investigation.
JR/EJR+-fractions. For each election–defined by a specific parameter combination and seed–we sample committees until we have found 20000 JR, resp. EJR+, committees. Using the
13To approximate the JR, resp. EJR+, fraction of an instance, we sample, as for pabulib, until we found 1000 committees satisfying the axiom. 14At first glance, one might suspect those are due to sampling errors. However, by closer inspection, one observes that their appearance highly correlates with the number of candidates that are relevant for cohesiveness.
33

10 20 30 40 50
0
0.5
1
k
Axiom-Fraction
JR EJR+
(a) Parameters: p = 0.1 and φ = 0.6
10 20 30 40 50
0
0.5
1
k
Axiom-Fraction
JR EJR+
(b) Parameters: p = 0.2 and φ = 0.7
10 20 30 40 50
0
0.5
1
k
Axiom-Fraction
JR EJR+
(c) Parameters: p = 0.1 and φ = 0.9
Figure 10: JR-fraction and EJR+-fraction for committee sizes k ∈ [m] across selected instances from the resampling model.
10 20 30 40 50
0
0.5
1
k
Axiom-Fraction
JR EJR+
(a) Parameters: d = 1 and r = 0.2
10 20 30 40 50
0
0.5
1
k
Axiom-Fraction
JR EJR+
(b) Parameters: d = 1 and r = 0.04
10 20 30 40 50
0
0.5
1
k
Axiom-Fraction
JR EJR+
(c) Parameters: d = 2 and r = 0.08
Figure 11: JR-fraction and EJR+-fraction for committee sizes k ∈ [m] across selected instances from the Euclidean model.
sampled data, we approximate the JR and EJR+ fractions, as well as the candidates’ prevalences and power indices under these axioms.
In Figure 12, we give two frequency histograms for the resampling and the Euclidean dataset, showing the distribution of their JR and EJR+ fractions. As for pabulib, we observe quite a diverse distribution: On the one hand, many instances exhibit high fractions, but on the other hand, there are also numerous instances where only a small fraction of committees satisfy these axioms; this applies in particular for EJR+ in the resampling dataset.
Distances Between Committees. In Figure 13 we show a plot illustrating the correlation between the JR-, resp. EJR+-, fraction and the normalized average distance for our resampling and Euclidean dataset, analogously to Figure 5. Recall that for each instance we compute the normalized average distance by computing the distance for each pair of sampled JR, resp EJR+, committees, taking the average and dividing the result by the expected distance of two randomly drawn committees. We observe that the -
resampling instances induce almost a logarithmic curve: Instances for JR and EJR+ lie indeed on the same one, but the ones for JR form a strict subgraph of the curve induced by EJR+. Note that also instances with rather small JR, resp. EJR+, fraction exhibit quite high average distances. This phenomenon is particularly strong on the Euclidean dataset: All average distances are higher than 0.96 for both, JR and EJR+. Nevertheless, by rescaling the axes, we could also observe a logarithmic behaviour-
 for this dataset. To finish this discussion, we want to take a small detour: Note that, theoretically, also normalized average distances greater than one are possible (or at least we are not aware of any
34

.00-.05
.05-.15
.15-.25
.25-.35
.35-.45
.45-.55
.55-.65
.65-.75
.75-.85
.85-.95
.95-1.0
0
50
100
150
200
103
53
65 72
32 2212 3
20 4
18 8 18 1616 1215 8
33
202
68
Axiom-Fraction
Frequency
JR EJR+
(a) Resampling dataset (400 instances)
.00-.05
.05-.15
.15-.25
.25-.35
.35-.45
.45-.55
.55-.65
.65-.75
.75-.85
.85-.95
.95-1.0
0
100
200
300
1 1 6 15
32
52
69
108
74
127
69
131
71
93 83
61
86 62
309
150
Axiom-Fraction
Frequency
JR EJR+
(b) Euclidean dataset (800 instances)
Figure 12: Frequency histograms displaying the distribution of JR and EJR+ fractions across instances in our two synthetic datasets.
theoretical result excluding them). However, we did not observe them15, which does not seem surprising to us: Intuitively, the existence of values larger than one should indicate that the set of JR, resp. EJR+-committees of an election can be clustered such that committees within one cluster are quite similar to each other, and committees from different clusters have a somehow large distance from each other.
0 0.2 0.4 0.6 0.8 1
0.6
0.7
0.8
0.9
1
Axiom-Fraction
Normalized Average Distance
JR EJR+
(a) Resampling dataset (400 instances)
0 0.2 0.4 0.6 0.8 1
0.6
0.7
0.8
0.9
1
Axiom-Fraction
Normalized Average Distance
JR EJR+
(b) Euclidean dataset (800 instances)
Figure 13: Each point represents one instance and one axiom (JR in red, EJR+ in blue). The plot shows the correlation between the axiom-fraction and the normalized average distance among committees fulfilling the axiom.
As discussed in Section 4.1, we also computed, via an ILP formulation, the minimum overlap two JR, resp. EJR+, committees can have for each pabulib instance for k = ⌊m/2⌋, see Figure 14. Our results confirm our impression from the preceding discussion regarding the normalized average distance, that is, that JR, resp. EJR+, committees can be quite diverse. In particular,
15To be precise, we did observe values in the order of magnitude of 1 + 10−5, but we assume these are due to sampling errors.
35

for a large majority of instances, we find two disjoint JR-committees. For EJR+ we encounter one instance with minimum overlap of 7 (Amsterdam 622, m = 26) and one with minimum overlap of 8 (Amsterdam 285, m = 40). Consistently, we observe that both elections have a very low EJR+ fraction (0.003 resp. 0.002), and there are 7, resp. 8, fixed candidates that are contained in every EJR+ committee sampled by us. For 100 instances, we did not find an optimal solution within the 30-minute time limit.
0 1 2 3 4 5 6 7 8 TO
0
100
200
300 290
59
18 2000000
189
53
21 310011
100
Minimum Overlap
Frequency
JR EJR+
Figure 14: Histogram depicting the distribution of the minimum overlaps between pairs of JR, resp. EJR+, committees in the pabulib dataset. The bar labeled ‘TO’ represents instances that were not solved within the time limit.
C.2. What Makes a Candidate Important for Proportionality?
Analogously to pabulib in Section 4.2, we only consider instances with an EJR+-fraction of ≤ 0.95% in this part, resulting in a dataset of 650 Euclidean instances, and a dataset of 332 resampling instances.
Correlation Between Measures. In Table 1 we give an overview over the correlation between our different candidates’ importance measures, for each of our three datasets. To this end, we compute the Pearson correlation coefficient (PCC) between each pair of measures across all candidates within one instance. For all three of them we observe that the PCC between the EJR+-prevalence and power index is not only remarkably high in average, but also for the 25% quartile. While the approval score for elec-
tions, following the resampling model, seems to be quite a good measure to predict whether a candidate is likely to be included in an EJR+-committee, this does not hold for the pabulib and Euclidean dataset. Intuitively, this makes sense, since in the resampling model candidates have, roughly speaking, either ’high’ or ’low’ approval scores, (assuming relatively high values of φ), whereas we usually do not find such a partition of approval scores in Euclidean elections. Similarly, for real-world d-
ata, such as pabulib, it is likely that the approval scores of candidates (or projects in our case) are not either ’high’ or ’low’. Last, we want to comment on the fact that, compared to EJR+, the average PCCs, but also all quartiles, are often significantly lower for JR. This can be, at least partially, explained by our filtering: We excluded all instances with an EJR+ fraction greater than 0.95. However, as seen in Figure 12 and Figure 4, many instances remain with a JR-fraction above 0.95–indic-
ating that JR imposes only mild constraints for them.
36

In addition, we explain the differences in the first two columns (pcc(app, prev) and pcc(app, pw)) between JR and EJR+ by the specific nature of the EJR+ definition: When forming an EJR+ committee, it is difficult to avoid including candidates with high approval scores (assuming EJR+ does not imposes only trivial constraints in the given election).
Table 1: Summary statistics of the Pearson correlation coefficients (PCC) computed between all pairs of candidates’ importance measures. The table reports the mean and quartiles [Q0.25, Q0.5, Q0.75] of the PCC values for both JR and EJR+, across our three datasets: pabulib (267 instances), Euclidean (650 instances), and resampling (332 instances).
Dataset Axiom pcc(app, prev) pcc(app, pw) pcc(prev, pw)
pabulib JR 0.22, [0.01, 0.19, 0.41] 0.42, [0.15, 0.38, 0.75] 0.72, [0.42, 0.98, 1.00]
EJR+ 0.65, [0.54, 0.75, 0.84] 0.66, [0.57, 0.75, 0.85] 0.99, [0.99, 1.00, 1.00]
Euclidean JR 0.10, [-0.23, 0.08, 0.45] 0.07, [-0.32, 0.07, 0.47] 0.84, [0.80, 0.97, 0.99]
EJR+ 0.56, [0.40, 0.62, 0.78] 0.58, [0.42, 0.64, 0.81] 0.98, [0.98, 0.99, 1.00]
resampling JR 0.62, [0.23, 0.80, 0.96] 0.83, [0.78, 0.95, 0.97] 0.68, [0.25, 0.99, 1.00]
EJR+ 0.92, [0.90, 0.95, 0.98] 0.92, [0.90, 0.95, 0.98] 0.99, [1.00, 1.00, 1.00]
Measures and Proportional Voting Rules. Recall from Section 4.3 that we compare they k selected candidates by three voting rules (the Method of Equal Shares, seq-Phragmén, seq-PAV) with the k candidates that score highest with respect to each of our three candidates’ importance measures, by computing the relative overlaps for each instance. We show our results separately for each of our datasets in Figures 7 and 15 to 17. We observe that for each dataset and each voting rule, the committees select-
ed by the voting rule have, in general, the highest overlap with the top k candidates ranked by approval scores, followed by those ranked by EJR+-prevalence, and finally by JR-prevalence. A further observation consistent across datasets is that, for a given candidates’ importance measure, the distribution of overlaps varies only marginally among the three voting rules. However, while the distributions for the pabulib and resampling datasets are
0.0–0.1
0.1–0.2
0.2–0.3
0.3–0.4
0.4–0.5
0.5–0.6
0.6–0.7
0.7–0.8
0.8–0.9
0.9–1.0
0
50
100
150
26
22
76
161
6 12
53
87
44 39
20
6
2 9 16
38
50
99
53
Relative Overlap
Frequency
Approval Score JR Prevalence EJR+ Prevalence
(a) seq-Phragmén
0.0–0.1
0.1–0.2
0.2–0.3
0.3–0.4
0.4–0.5
0.5–0.6
0.6–0.7
0.7–0.8
0.8–0.9
0.9–1.0
0
50
100
150
9
26
89
143
6 14
49
91
43 40
19
5
48
20
32
53
113
37
Relative Overlap
Frequency
Approval Score JR Prevalence EJR+ Prevalence
(b) seq-PAV
Figure 15: Histograms showing the distribution of relative overlaps between committees selected by different voting rules and the top k candidates according to our three candidates’ importance measures for the pabulib dataset (267 instances).
37

quite similar, the Euclidean dataset exhibits different behavior: the overlaps are significantly lower across all voting rules and all three candidates’ importance measures.
0.0–0.1
0.1–0.2
0.2–0.3
0.3–0.4
0.4–0.5
0.5–0.6
0.6–0.7
0.7–0.8
0.8–0.9
0.9–1.0
0
100
200
300
400
64
172
344
60
91
11
48
392
155
43 1
10
37
294
198
108
3
Relative Overlap
Frequency
Approval Score JR Prevalence EJR+ Prevalence
(a) Method of Equal Shares
0.0–0.1
0.1–0.2
0.2–0.3
0.3–0.4
0.4–0.5
0.5–0.6
0.6–0.7
0.7–0.8
0.8–0.9
0.9–1.0
0
100
200
300
400
8
146
210
258
19 9
6
35
402
148
59
11
46
333
183
76
1
Relative Overlap
Frequency
Approval Score JR Prevalence EJR+ Prevalence
(b) seq-Phragmén
0.0–0.1
0.1–0.2
0.2–0.3
0.3–0.4
0.4–0.5
0.5–0.6
0.6–0.7
0.7–0.8
0.8–0.9
0.9–1.0
0
100
200
300
400
1
108
189
310
29 12 1
6
32
404
144
64
8
40
330
184
87
1
Relative Overlap
Frequency
Approval Score JR Prevalence EJR+ Prevalence
(c) seq-PAV
Figure 16: Histograms showing the distribution of relative overlaps between committees selected by different voting rules and the top k candidates according to our three candidates’ importance measures for the Euclidean dataset (650 instances).
0.0–0.1
0.1–0.2
0.2–0.3
0.3–0.4
0.4–0.5
0.5–0.6
0.6–0.7
0.7–0.8
0.8–0.9
0.9–1.0
0
50
100
150
200
2
36
119
175
5
22
58
28
84 75
44
16 22
107 116
81
24
Relative Overlap
Frequency
Approval Score JR Prevalence EJR+ Prevalence
(a) Method of Equal Shares
0.0–0.1
0.1–0.2
0.2–0.3
0.3–0.4
0.4–0.5
0.5–0.6
0.6–0.7
0.7–0.8
0.8–0.9
0.9–1.0
0
50
100
150
200
1
31
97
203
6
22
55
27
85 75
51
11
14
88
113
89
37
Relative Overlap
Frequency
Approval Score JR Prevalence EJR+ Prevalence
(b) seq-Phragmén
0.0–0.1
0.1–0.2
0.2–0.3
0.3–0.4
0.4–0.5
0.5–0.6
0.6–0.7
0.7–0.8
0.8–0.9
0.9–1.0
0
50
100
150
200
4
27
96
205
5
17
64
22
104
75
38
7
6
126
90 76
34
Relative Overlap
Frequency
Approval Score JR Prevalence EJR+ Prevalence
(c) seq-PAV
Figure 17: Histograms showing the distribution of relative overlaps between committees selected by different voting rules and the top k candidates according to our three candidates’ importance measures for the resampling dataset (332 instances).
38

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:54.091Z
- **Text Length:** 107776 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 38 of 38
