# PDF Document: Müßig and Johannsen - 2025 - New Hybrid Heuristics for Pseudo-Boolean Propagation.pdf

**File Path:** Müßig and Johannsen - 2025 - New Hybrid Heuristics for Pseudo-Boolean Propagation.pdf

**Processed Date:** 2026-02-10T18:18:28.039Z

**File Size:** 362.20 KB

**Total Pages:** 5

**Extracted Pages:** 5

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3751

**Title:** New Hybrid Heuristics for Pseudo-Boolean Propagation

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

NEW HYBRID HEURISTICS FOR PSEUDO-BOOLEAN PROPAGATION
MIA M  ̈USSIG AND JAN JOHANNSEN
Abstract. In pseudo-boolean solving the currently most successful unit propagation strategy is a hybrid mode combining the watched literal scheme with the counting method. This short paper introduces new heuristics for this hybrid decision, which are able to drastically outperform the current method in the RoundingSAT solver.
1. Introduction
Pseudo-boolean solvers are an extension of SAT solvers that allow general linear inequalities to be used as constraints and optionally a linear objective function to be specified. This increased flexibility for users comes at the cost of complicating many components of the CDCL algorithm, with both conflict analysis and unit propagation still being continuously improved by ongoing research [4, 5, 9]. Here, we focus on the latter, where the simple counting method was the dominant paradigm until 202-
0, when Devriendt [1] developed a specialised watched literal scheme for the RoundingSAT solver. This implementation was further improved by Nieuwenhuis et al. [8], who demonstrated that the existing hybrid method combining the counting and watched literal scheme could outperform both approaches. Finally, the authors of this paper recently extended the watched literal scheme with the significant literal approach [7], which could improve the runtime for specific applications like knapsack instances-
. In this paper we will apply the most successful heuristics from the significant literal scheme to the hybrid method to improve the constraint-specific choice between watched literals and the counting approach. We observe a remarkable improvement across the decision and optimization instances from recent competition datasets.
2. Preliminaries
A pseudo-boolean problem consists of variables xi ∈ {0, 1}, with literals li representing either xi
or xi := 1 − xi and pseudo-boolean constraints C as Pn
i=1 aili ≥ b for ai, b ∈ N. Without loss of generality we will assume that the coefficients are in descending order, so ∀i : ai ≥ ai+1. The slack of a pseudo-boolean constraint under the current (partial) assignment ρ of the literals is defined as slack(C, ρ) = −b+P
li∈/ρ ai, which is the amount by which the left-hand side can exceed the right-hand side. Thus, if slack(C, ρ) < 0, the constraint C is unsatisfiable without unassigning literals. A literal li is called a unit literal if slack(C, ρ) < ai. This means that the literal li must be set to 1 as otherwise slack(C, ρ ∪ {li}) < 0.
In the counting method for detecting unit literals, each time we assign or unassign a variable, we update the slack of all constraints in which it occurs. The watched literal scheme by Devriendt instead maintains a set of literals W (C) for each constraint, which all must be either set to 1 or unassigned and satisfy the following inequality:
(1)
X
li∈W (C)
ai ≥ b + a1
Similar to the watched scheme for SAT we now only have updates to W (C) when assigning variables and only in constraints where the variable is a watched literal. Contrary to SAT, where using watched literals has been the dominant method for more than two decades, in pseudo-boolean solving this method only offers a slight improvement over the counting approach. We refer the reader to Devriendts paper [1] for more details on the mathematical background and important implementation optimizations.
1
arXiv:2511.21417v1 [cs.AI] 26 Nov 2025

2 MIA M  ̈USSIG AND JAN JOHANNSEN
The current implementation of the RoundingSAT solver uses a hybrid method between the counting and watched literal scheme [3]. Each time a new constraint is added, either as part of the original instance or via conflict analysis, algorithm 1 is used to decide if the constraint will be treated using the counting method or otherwise with the watched literal scheme. The parameter p is set with the prop-counting option and has a default value of 0.7.
Algorithm 1 Hybrid (Constraint Pn
i=1 aili ≥ b, propagation parameter p)
1: sum ← −b 2: m ← 1
3: while m < n and sum < 0 do 4: sum ← sum + am+1 5: m ← m + 1 6: end while
7: useCounting ← (p = 1) ∨ p > 1 − m
n
The idea is to use m to count the minimal number of watched literal necessary. Since the literals are sorted by descending coefficient, we simply choose the first literals until we fulfill equation 1. Because the code initializes sum ← −b and skips a1, the equation is equivalent to sum ≥ 0. So for the default value 0.7 the code checks if the watched set W (C) must contain ≥ 30% of the literals in C, in which case it uses the counting method instead.
3. New Hybrid Heuristics
Inspired by the successful heuristics from the significant literal approach [7], we introduce the Absolute Hybrid Heuristic:
useCounting ← (a1 > c)
and the Additive Hybrid Heuristic:
useCounting ← (a1 > c + a2)
We implemented these heuristics with just a few lines of code in commit a5c28f99 of the RoundingSAT solver, which is the newest version at the time of writing. For our benchmark, we use the 1157 instances from the OPT-LIN and DEC-LIN track of the Pseudo Boolean Competition 2025 [10]. However, we filter out instances where all coefficients of all input constraints are smaller than 100, which we will call small instances. The reason is that both our heuristics only perform well for c ≥ 100, so for t-
he small instances useCounting would simply be always false and thus the performance identical to the current RoundingSAT solver without hybrid mode. Additionally, this leaves us with a more manageable dataset of 206 instances, which we run with a 3600s timeout on an “AMD Ryzen 7 7735HS” CPU and 16 GB of memory. For all measurements, the optional SoPlex LP solver is enabled. Our implementation, the benchmark scripts and all measurements are available on Gitlab [6]. Our first observation from the c-
actus plot in Figure 1 is that the counting method performs slightly better than the watched literal scheme, which is often the case for instances with large coefficients. We can also clearly see that the default hybrid method outperforms the two pure methods it combines. But most importantly, our two new hybrid heuristics are dramatically better than the current hybrid method. Especially the additive hybrid heuristic with c = 500 is vastly faster on average. In Figure 3 we also show the runtime w-
ith larger and smaller c values. They still outperform the current hybrid mode, but perform worse than c = 500 and c = 1000. We also experimented with heuristics of the form a1 > c · a2 and c > (max1≤i<n ai − ai+1), which could not outperform the current hybrid method but are still available on Gitlab [6]. Another dataset that is often used in pseudo-boolean solving research [2, 5, 7] are the 783 knapsack instances submitted to the Pseudo Boolean Competition 2024. In Figure 2, it can be observed t-
hat criterion a1 ≥ 500 + a2, which performed very well on general instances, is again a big improvement in average runtime. This result is particularly noteworthy, as in this dataset the current hybrid method performs noticeably worse than the Watched Literal scheme. Again, the data for other values of c and the less effective additive hybrid heuristic can be found on Gitlab.

NEW HYBRID HEURISTICS FOR PSEUDO-BOOLEAN PROPAGATION 3
70 75 80 85 90 95 100
0s
500s
1000s
1500s
2000s
2500s
3000s
3500s
Watched Literals (91) Counting Method (92) Default Hybrid (96) a1 ≥ 500 + a2 (96) a1 ≥ 1000 + a2 (97) a1 ≥ 500 (95) a1 ≥ 1000 (97)
Figure 1. Runtime comparison on the 206 instances of the OPT-LIN and DECLIN track from the Pseudo Boolean Competition 2025, where at least one constraint contains a coefficient ≥ 100.
710 715 720 725 730 735 740
0s
500s
1000s
1500s
2000s
2500s
3000s
3500s
Watched Literals (737) Counting Method (730) Default Hybrid (735) a1 ≥ 500 + a2 (736) a1 ≥ 500 + a2 (736)
Figure 2. Runtime comparison on the 783 knapsack instances from the Pseudo Boolean Competition dataset.
4. Conclusion
We have successfully demonstrated that our proposed change of the hybrid heuristic leads to a significant performance improvement of RoundingSAT and would require only minimal modifications of the source code. Since the classification of which instance is small can be performed in negligible time, one could automatically use the current hybrid heuristic for small instances and the new heuristics for the remaining ones.

4 MIA M  ̈USSIG AND JAN JOHANNSEN
70 75 80 85 90 95 100
0s
500s
1000s
1500s
2000s
2500s
3000s
3500s
Watched Literals (91) Counting Method (92) Default Hybrid (96) a1 ≥ 100 + a2 (92) a1 ≥ 2000 + a2 (91) a1 ≥ 5000 + a2 (94) a1 ≥ 100 (91) a1 ≥ 2000 (95) a1 ≥ 5000 (96)
Figure 3. Runtime comparison with more c values on the 206 instances of the OPTLIN and DEC-LIN track from the Pseudo Boolean Competition 2025, where at least one constraint contains a coefficient ≥ 100.
References
[1] Jo Devriendt. 2020. Watched Propagation of 0-1 Integer Linear Constraints. In Principles and Practice of Constraint Programming - 26th International Conference, CP 2020, Proceedings, Helmut Simonis (Ed.). Springer, 160–176. [2] Jo Devriendt, Ambros Gleixner, and Jakob Nordstro ̈m. 2020. Learn to Relax: Integrating 0-1 Integer Linear Programming with Pseudo-Boolean Conflict-Driven Search. In Integration of AI and OR Techniques in Constraint Programming. CPAIOR 2020, Vol. 12296. xxiv – xxvi.
[3] Jan Elffers, Jo Devriendt, Stephan Gocht, and Jakob Nordstro ̈m. 2025. RoundingSat - The pseudo-Boolean solver powered by proof complexity! https://gitlab.com/MIAOresearch/software/roundingsat
[4] Jan Elffers and Jakob Nordstro ̈m. 2018. Divide and Conquer: Towards Faster Pseudo-Boolean Solving. In Proceedings of the 27th International Joint Conference on Artificial Intelligence, IJCAI 2018, Je ́roˆme Lang (Ed.). ijcai.org, 1291–1299. [5] Orestis Lomis, Jo Devriendt, Hendrik Bierlee, and Tias Guns. 2025. Improving Reduction Techniques in Pseudo-Boolean Conflict Analysis. In 28th International Conference on Theory and Applications of Satisfiability Testing, SAT 2025, Jeremias Berg and Ja-
kob Nordstro ̈m (Eds.). 21:1–21:17. doi:10.4230/ LIPIcs.SAT.2025.21
[6] Mia M ̈ußig. 2025. RoundingSAT with new hybrid heuristics. https://gitlab2.cip.ifi.lmu.de/ muessig/roundingsat-hybrid
[7] Mia Mu ̈ßig and Jan Johannsen. 2025. Improving Watched Pseudo-Boolean Propagation with Significant Literals. In Joint Proceedings of the 23rd International Workshop on Satisfiability Modulo Theories and the 16th Pragmatics of SAT International Workshop. 177–189. http://ceur-ws.org/Vol-4008/
[8] Robert Nieuwenhuis, Albert Oliveras, Enric Rodrı ́guez-Carbonell, and Rui Zhao. 2024. Speeding up Pseudo-Boolean Propagation. In 27th International Conference on Theory and Applications of Satisfiability Testing, SAT 2024, Supratik Chakraborty and Jie-Hong Roland Jiang (Eds.). 22:1–22:18. doi:10.4230/ LIPIcs.SAT.2024.22
[9] Robert Nieuwenhuis, Albert Oliveras, Enric Rodrı ́guez-Carbonell, and Rui Zhao. 2025. Symbolic Conflict Analysis in Pseudo-Boolean Optimization. In 28th International Conference on Theory and Applications of Satisfiability Testing, SAT 2025, Jeremias Berg and Jakob Nordstro ̈m (Eds.). 23:1–23:18. doi:10.4230/ LIPIcs.SAT.2025.23
[10] Pseudo-Boolean Competition. 2025. Pseudo-Boolean Competition 2025. https://www.cril. univ-artois.fr/PB25/ Organized by Olivier Roussel, CRIL, Universit ́e d’Artois, France..

NEW HYBRID HEURISTICS FOR PSEUDO-BOOLEAN PROPAGATION 5
(Mia Mu ̈ßig) Institut fu ̈r Informatik, Ludwig-Maximilians-Universit ̈at M ̈unchen, Germany Email address: nienna@miamuessig.de
(Jan Johannsen) Institut f ̈ur Informatik, Ludwig-Maximilians-Universit ̈at M ̈unchen, Germany Email address: jan.johannsen@ifi.lmu.de

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:28.039Z
- **Text Length:** 11695 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 5 of 5
