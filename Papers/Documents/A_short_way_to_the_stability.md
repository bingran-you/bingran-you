# PDF Document: Danilov - 2025 - A short way to the stability.pdf

**File Path:** Danilov - 2025 - A short way to the stability.pdf

**Processed Date:** 2026-02-10T18:17:25.498Z

**File Size:** 184.85 KB

**Total Pages:** 9

**Extracted Pages:** 9

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3191

**Title:** A short way to the stability

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

A short way to the stability
Danilov V.I.
November 21, 2025
A longer and more correct title is ‘a short and direct path to the theory of stable contract systems in a bipartite market’. There is no new meaningful results in the article. It is dedicated to the presentation of a short method for obtaining the main body of stability theory: existence, polarization, and latticing. The brevity and uniformity are achieved through the use of the desirability operator (Section 1) and, most importantly, the successful notion of an ample system of contracts (Section -
3). The use of the latter radically simplifies the problem of the existence of fixed points. The general bipartite problem (with many agents using Plott choice functions) is reduced easily by the aggregation to the case of two agents (see [2, 5]). Therefore, further, we restrict ourselves to the case of two agents (the Worker and the Firm) and a large set E of contracts between them.
1 Reminders of Plott choice functions
The preferences of our agents (Firm and Worker) are given by Plott choice functions. Therefore, let us briefly recall their properties (for more details, see [5]). A choice function on a set X is a mapping C : 2X → 2X so that C(A) ⊆ A for any A ⊆ X. It is called a Plott function if it satisfies two conditions: Consistency. If C(A) ⊆ B ⊆ A, then C(A) = C(B). Substitutability. If A ⊆ B then A ∩ C(B) ⊆ C(A).
The second condition implies (and is actually equivalent to) the following axiom:
C(A ∪ B) ⊆ C(A) ∪ B. (1)
Indeed, C(A ∪ B) ∩ A ⊆ C(A). Applying the consistency condition to the inclusions
C(A ∪ B) ⊆ C(A) ∪ B ⊆ A ∪ B,
we obtain the equity (the original definition, given by Plott [8])
C(A ∪ B) = C(C(A) ∪ B). (2)
Two derived notions can be related to a Plott function C: Blair (hyper)relation ⪯=⪯C and the desirability operator D = DC. These notions will be actively involved in the future presentation.
1
arXiv:2511.16104v1 [econ.TH] 20 Nov 2025

Blair relation ⪯ is defined as follows: for set A and B
A ⪯ B ⇔ C(A ∪ B) ⊂ B.
(Instead of ⊂ B one can write = C(B).) Obviously, A ⊆ B implies A ⪯ B. Another example: A ⪯ C(A). Indeed, due to (1) we have C(A ∪ C(A)) ⊆ C(A) ∪ C(A) = C(A). The relation ⪯ is a preorder relation (that is, reflexive and transitive) on 2X and is an order on the subset of acceptable subsets (a subset A ⊆ X is called acceptable if A = C(A)). It is sometimes called the revealed preference relation: A is available for selection in A∪B, but only elements from B are selected). The corresponding equivale-
nce relation is denoted by ≈ or ≈C. For example,
A ≈ C(A). (3)
An element x is called desirable in a state A ⊆ X, if x ∈ C(A ∪ {x}). The set of desirable elements is denoted D(A) or DC(A). It is obvious that
C(A) = A ∩ D(A). (4)
In particular, a set A is acceptable iff A ⊆ D(A). The first important property of the operator DC is:
DC(A) = DC(C(A)) (5)
It follows from (2), since C(A ∩ x) = C(C(A) ∪ x). The second property of D is antitonicity: A ⊆ B implies D(B) ⊆ D(A). This follows from the substitutability of the choice function C. In fact, the stronger statement is true:
if A ⪯ B, then D(B) ⊆ D(A). (6)
Indeed, A ⪯ B means (by definition) C(A ∪ B) ⊆ B, from where DB ⊆ D(C(A ∪ B)) (5=) D(A ∪ B) ⊆ DA (since A ⊆ A ∪ B). In particular, for any family (Ai, ı ∈ I) we have the following inclusion
D(∪iAi) ⊆ ∩iD(AI ). (7)
2 Stability
Let’s return to the stability in a situation with two agents, Firm and Worker. The set of contracts is E. Subsets of E are called systems of contracts or simply systems. Preferences of Worker are given by Plott choice function W on the set E; preferences of Firm are given by F . A contract system S ⊆ E is stable if
S = DF (S) ∩ DW (S). (8)
That is, S is acceptable to both agents, and if a contract e is desirable for both in the state S, then it is already in S (that is, it has already been concluded). In this case, our
2

agents have no desire to refuse any contract from S or to conclude a contract out of S. Such a contract system can be considered as stable [3]. The set of stable systems is denoted as S. For what follows, an asymmetrical formulation of stability is more important.
Proposition 1. A system S is stable if and only if S = W DF (S).
Proof. For short, we denote B = DF (S). Assume that S = W B. Then, using (4), (5), we have
DF (S) ∩ DW (S) = B ∩ DW (W B) = B ∩ DW (B) = W B = S.
So that S is stable due to (8). Conversely, let C be stable. Then S ⊆ DF (S) = B, from where DW (B) ⊆ DW (S).
Therefore S = B ∩ DW (S) ⊇ B ∩ DW (B) (5=) W B. We get the inclusion W B ⊆ S ⊆ B, whence W B = W S = S due to the consistency. □
Corollary 1. Suppose that S is a stable system and A is arbitrary system. If S ⪯F A then F (A) ⪯W S. Symmetrically, if S ⪯W A then W (A) ⪯F S.
Proof. S ⪯F A implies (due to (6)) DF (A) ⊆ DF (S). Since F (A) ⊆ DF (A) (4), then F (A) ⊆ DF (S). Finally, due to Proposition 1, S ≈W DF (S), from where F (A) ⪯W S. □
Corollary 2. Let S and T be stable systems. If S ⪯F T then T ⪯W S. And conversely, if S ⪯W T , then T ⪯F S.
Proof. Let S ⪯F T . Due to Corollary 1, applied to A = T , T = F (T ) ⪯W S. □
The moral of this statement is this. Stable contract systems (as well as any other systems) can be evaluated (compared) from the point of view of Worker and/or of Firm using Blair orders ⪯W and ⪯F . Corollary 2 asserts the fundamental fact that these estimates are directly opposite to each other. In the literature, this is called the polarization theorem.
Corollary 3. Again S and T are stable systems.The following two statements are equivalent:
1. S ⪯W T ; 2. DF (S) ⊆ DF (T ).
Proof. If S ⪯W T then due to Corollary 2 T ⪯F S, from where we get 2 due to (6). Conversely, let DF (S) ⊆ DF (T ). By Proposition 1 and (3), S = W DF (S) ≈W DW (S). Similarly, T ≈W DW (T ). From where S ≈W DF (S) ⪯W DF (T ) ≈W T . □
It is convenient to present these statements in the following way.
Definition. A subset A ⊆ E is called a neat system if A = DF (W A). The set of neat systems is denoted A.
In these terms, the mappings DF : S → A and W : A → S are mutually inverse bijections. Moreover (see Corollary 3), these bijections are consistent with the order structures ⊆ on the set A and ⪯W on the set S of stable systems. One can imagine the neat system A = DF (S) as the neat shell of a stable system S and the stable system S = W (A) as the core of its neat shell A. Obviously, the core
3

S = W (A) lies in the shell A = DF (S). Moreover, this neat shell DF (S) is the smallest neat system containing S. Indeed, let A be a neat system containing a stable system S. By Corollary 1, W A ⪯F S, from where DF (S) ⊆ DF (W A) = A (antitonicity). So, in principle, one can temporarily forget about stability and work with neat systems.
Lemma 1. Let A be a neat system contained in a system B. Then A ⊆ DF (W B).
Proof. Let S = W A be the stable core of A. Then S ⊆ A ⊆ B, and, due to Corollary 1, we have W B ⪯F S = W A. Applying the antitonicity of DF to this relation, we obtain A = DF (W A) ⊆ DF (W B). □
Note that neat systems are exactly fixed points of the operator DF W . In order to prove the existence of the fixed points (that is, neat systems and, therefore, stable systems) we introduce a more general notion of ample systems.
3 Ample systems
Ample systems are obtained by weakening the neatness: the equality A = DF (W A) is replaced by the inclusion DF (W B) ⊆ B.
Definition. A system B ⊆ E is called ample if DF (W B) ⊆ B.
Examples. 1. The whole set E is ample. 2. Of course, any neat system is ample. 3. Let B be an ample system, and let B′ be such a system that B ⊆ B′ and W B ⊆ W B′ (or, equivalently, W B′ ∩ B = W B; roughly speaking, B′ larger than B, but not much). Then B′ is ample as well. For example, when we extend B by the addition of undesirable (for Worker) contracts. Indeed, DF (W B′) ⊆ DF (W B) ⊆ B ⊆ B′. The first inclusion follows from the antitonicity and the inclusion of W B ⊆ W B′. 4. As we will see be-
low, the intersection of ample systems is ample. 5. There is an easy way to build ample systems. Consider the following (increasing) dynamics on the set 2E: A 7→ A ∪ DF (W (A)). Ample systems are exactly the fixed points of this dynamics.
There are two important operations that permit to construct new ample systems from the old ones.
Proposition 2. Let (Bi, i ∈ I) be an arbitrary family of ample systems. Then B = ∩iBi is ample.
Proof. Let’s denote Ai = W Bi (so that DF (Ai) ⊆ Bi due to the ampleness of Bi) and A = ∪iAi. By the antitonicity, we have DF (A) ⊆ DF (Ai). And since F (A) ⊆ DF (A), we get inclusions F (A) ⊆ DF (Ai) ⊆ Bi for every i and, therefore, F (A) ⊆ B. Since B ⊆ Bi, by virtue of the substitutability of the choice function W , we have inclusions B ∩ W Bi ⊆ W B, that is, B ∩ Ai ⊆ W B, from where B ∩ A ⊆ W B. And since F (A) is contained in B (see above) and tautologically in A, we get the inclusion of F (A)-
 ⊆ W B.
4

By the antitonicity, this gives the inclusion
DF (W B) ⊆ DF (F (A)) (5=) DF (A) = DF (∪iAi)
(7)
⊆ ∩iDF (Ai) ⊆ ∩iBi = B,
which means ampleness of B. □
The other operation permits to diminish ample systems.
Proposition 3. If B is an ample system then the system B′ = DF (W B)) is also ample.
Proof. Let’s apply the substitutability of W to the inclusion B′ ⊆ B. We get W B ∩ B′ ⊆ W B′. But W B ∩ B′ = W B ∩ DF (W B) = F W B, so that F W B ⊆ W B′. Now we use the antitonicity of DF : DF (W B′) ⊆ DF (F W B) = DF (W B) = B′. □
4 Existence and latticeness
Due to Proposition 2, there exists the minimal (by inclusion) ample system. Indeed, one can take the intersection of all stable systems. Let Bmin be the minimal ample system. Then it is neat. This follows from Proposition 3. This implies that the set A of neat systems is not empty, as well as the set S of stable systems. Thus, stable systems exist. Note also that the stable system Smin = W (Bmin) is the minimal stable system with respect to Worker’s order ⪯W . This can be seen from Corollary 3 of -
Proposition 1. The poset (S, ⪯W ) possesses the maximal element. Indeed, let B be the minimal ample system which contains every neat system (such a system exists by Proposition 2). We assert that B is neat. This follows from Lemma 1. Indeed, let A be an arbitrary neat system. Since A ⊆ B then (by Lemma 1) A ⊆ B′ = DF (W B). Therefore B′ contains every neat system. But B′ is ample due to Proposition 3, and B′ ⊆ B. Hence B′ = B and is neat. Moreover, it is the biggest neat system, and Smax = W B is -
the maximal stable system with respect to Worker’s order ⪯W .
Actually, the above arguments show that there exists the supremum (the least upper bound) of any family of stable systems. Indeed, let (Si, i ∈ I) be such a family. And let B be the minimal ample system which contains every Si. As above, S = W B be an upper bound of the family, Si ⪯W S. Let us show that S is the least upper bound. Suppose that Si ⪯W T , where T is a stable system. Then T ⪯F Si (Corollary 2) and Si ⊆ DF (Si) ⊆ DF (T ) (antitonicity). So that an ample system DF (T ) contains all Si -
and, consequently, DF (S) = B ⊆ DF (T ). From where S ⪯W T (Corollary 3). All these implies the following
Theorem. The poset (S, ⪯W ) of stable systems is a nonempty complete lattice. □
In particular, every ample system B contains the largest neat system N (B) and the corresponding stable system W N (B) which we denote as Σ(B). For example, the system Σ(E) is equal to Smax. If S and R are stable systems then their meet S ⋏ T in the lattice S is equal to Σ(DF (S) ∩ DF (T )). Of course, all this is a manifestation of the more general phenomenon of Galois connection (between the poset S and the set of ample systems), see the excellent book [7].
5

Remark. Before that, we were looking for fixed points of the operator DF W . But it is possible to work with the operator W DF , fixed points of which are stable systems. This approach has been implemented by Yang [9]. He introduces the concept of a quasistable system Q as such that Q ⊆ W DF (Q) and shows that if Q is such a system with minimal (by inclusive) set DF (Q), then Q is stable. This gives again the existence of stable systems. This approach is essentially mirror symmetric (dual) to the-
 one described above. The fact is that it’s easy to install the following two facts: 1) if Q is a quasi-stable system, then the system DF (Q) is abundant; and 2) if B is an abundant system, then F W B is quasi-stable. Note, however, that these two maps are not reciprocal. Indeed, if we start with an abundant system of B, then DF (F W (B)) is equal to DF (W (B)), not to B (cf. Proposition 3). Similarly, if we start with a quasi-stable system Q, then F W DF (Q) is generally different from Q. This ca-
n be seen from the fact that DF (Q) is usually greater than DF (F W DF (Q)) = DF (W DF (Q)), because Q ⊆ W DF (Q).
This definition of Σ(B) is not very explicit, but we can take a more constructive description of it. Suppose, for simplicity, that the set E is finite. Denote B0 = B and determine by induction Bi+1 as DF (W Bi); we get the following decreasing sequence
B = B0 ⊇ B1 ⊇ ...
of ample systems, which (due to the finiteness of E) stabilizes (that is, for large n all sets Bn are the same). We denote this stabilized set as B∞. Clearly, B∞ is a neat system; moreover, due to Lemma 1, it is the largest neat system contained in B (that is N (B)). Therefore, W B∞ = Σ(B). Here we assume that E is finite. In general case, one needs to use a transfinite iteration of this process, as in [6].
Substantially, this process looks like this. The ample set B is a current variety of vacancies for Worker. Worker selects the best subset W B and offers it to Firm. In response, Firm forms a new set of vacancies B′ as the set DF (W B) of desirable contracts for it. At the same time, it ”rejects” a part of the proposed set W B, leaving only F W B in it (because W B ∩ DF (W B) = F W B). This process is similar to the process proposed by Alkan and Gale in [1]. By Proposition 3, the system B′ is ample-
 as well, and we can continue this process of improvement for Firm. And by virtue of inclusion B′ ⊆ B, the process proceeds monotonously and ends, leading to a neat system B∞ and, thus, to the stable system Σ(B). Note that Σ(B) is not better than B for Worker, and is usually worse.
5 Comparative statics, [6]
So far, we have dealt with one problem (E; F, W ). Now let’s consider another problem (E; F ′, W ′) (again with Plott functions E′, W ′), and assume that F ′ ⊆ F and W ⊆ W ′. That is, in the new problem, the Firm is more demanding (chooses less), and Worker, on the contrary, is more compliant. And let B be an ample system in the original problem. Then B will be ample in the modified problem task as well.
6

Indeed, D′
F (W ′B) ⊆ DF (W ′B) ⊆ DF (W B) ⊆ B. The first inclusion is true because D′
F ⊆ DF , and the second one is obtained from antitonicity and W B ⊆ W ′B. Let S be a stable system in the original problem (E; W, F ). Then the system B = W S is neat (in the original problem and, according to the above, ample in the new problem (E; W ′, F ′). This implies that S′ = Σ′(B) is a stable system in a modified problem. So we have some ”natural” transformation (mapping) of stable to stable (S → S′, § 7→ S′ = Σ′(DF S)). Since S is W -equivalent to B, it is also equivalent to W ′. (The fac-
t is that A ⪯W Y entails A ⪯′
W Y .) On the other hand, Σ′(B) ⊆ B, so S′ = Σ′(B) ⪯W S. In other words, a new stable system (obtained in a ”natural” way from the old one) is worse for Worker. Which is quite expected. Let S and T be stable (in the original problem), and S ⪯W T . Then, as we know from Corollary 3 of Proposition 1, DF (S) ⊆ DF (T ). Hence S′ = Σ′(DF (S)) ⊆ DF (S) ⊆ DF (T ). Therefore S′, as stable system in an ample DF (T ), ⪯′ Σ′(DF (T )) = T ′. Thus, our ”natural” map S to S’ is a poset morphism (with orders ⪯ a-
nd ⪯′).
6 Generalization to graduated contracts
The above mentioned theory can be generalized to the case considered by Alkan and Gale in [1] (see also [4]), when contracts allow gradation, that is, intermediate (instead of full acceptance and complete rejection) degrees of performance. An example is a deposit agreement, where, in addition to the interest rate and term, the amount of money is indicated, which can range from 0 to 10 million. Formally, this means that, for any contract e ∈ E, there is another scale X(e), that is a finite linearly-
 ordered set of ”execution levels of the contract e”. And now the system of contracts is a tuple (x(e), e ∈ E), where x(e) ∈ X(e), that is, an element of the Cartesian product X = Q
e X(e).
However, it is better to do a little differently. Namely, to form a direct sum of ordered sets C(e) and consider the ideals in this set. This suggests a more general view: to consider E not just a set, but a poset, that is, an ordered set equipped with a (partial) order of ≤. And to consider the ideals of this set as a menu, that is, subsets containing any smaller one with each element. This reflects the idea that there is no way to prohibit an agent from reducing his level of participation in the-
 contract. (As in the old situation, agents could refuse to participate in the contract.) So, let’s move on to formal notions. Now E is a poset with an order relation ≤. An ideal in the poset E is a subset A such that if b ≤ a ∈ A, then b ∈ A. I(E) is the set of ideals of the poset E. A choice function on a poset E is a mapping C : I(E) → I(E), such that C(A) ⊆ A for any ideal A. The consistency and substitutability conditions are formulated in the same way as in the case of a discrete poset (that-
 is, just a set). In particular, C(A ∪ B) ⊆ C(A) ∪ B. Next, we assume that all choice functions satisfy the conditions of consistency and substitutability. As before, ⪯=⪯C is Blair relation on I(E): A ⪯ B if C(A ∪ B) ⊆ B (or = C(B)). As before, the desirability operator D = DC is introduced. More precisely, we say that an element e is desirable in the ideal state A if e ∈ C(A∪ < e >), where < e >= {x ∈
7

X, x ≤ e} is the ideal generated by e. The set of desirable elements (in the state A) is denoted by D(A). Note that D(A) is also ideal. Indeed, let e ∈ D(A) and x ≤ e be. Since x belongs to A∪ < x > and is selected in A∪ < e > (because e is selected in A∪ < e >, and x ≤ e), then by the substitution condition x is selected in A∪ < x >. As before, C(A) = A ∩ D(A). As before, substitutability implies the antitonicity of D. As before, D(A) = D(C(A)). The inclusion ⊆ is evident from the antitonicity. -
Suppose that x ∈ D(C(A)), that is, x ∈ C(C(A)∪ < x >). Since
C(A∪ < x >) ⊆ C(A)∪ < x >⊆ A∪ < x >,
then, from the consistency, we get C(A∪ < x >) = C(C(A)∪ < x >) and x ∈ C(A∪ < x >).
Hence, as before, strong anti-monotonicity follows: if A ⪯ B, then D(B) ⊆ D(A). Let’s move on to the stability problem. Again, there are two agents (Worker and Firm), a poset (E, ≤) of possible contracts and two choice functions W and F on E, satisfying the conditions of consistency and substitutability. An ideal S is called stable if 1) S = W S = F S, and 2) if e is desirable for Worker and Firm in the state S, then e ∈ S. In short, this can be written as S = DW (S) ∩ DF (S). One can check that a-
ll the previous statements remain true in the ”poset” setup (because we used only the properties of the operators W, F, DF , which are also true in the poset setup). And in this more general setup, we get the same main facts: the existence, the polarization, the latticeness.
References
[1] A. Alkan and D. Gale. Stable schedule matching under revealed preference. J. Econom. Theory (2003), 112(2) 289–306.
[2] Fleiner T. A fixed-point approach to stable matchings and some applications. Math. Oper. Res. (2003) 28 (1) 103–126.
[3] Gale D. and Shapley L.S. College admissions and the stability of marriage. Amer. Math. Monthly (1962) 69 9–15.
[4] Danilov V.I. Stable systems of schedule contracts. Journal of the new economic association (2021) v. 3 (51) 32–49 (in Russian).
[5] Danilov V. I. Introduction to the theory of choice and stable contracts, Uspekhi matematicheskih nauk (2025) v. 80, issue 4, 3–46 (in Russian). English translation: Russian Math. Surveys (2025) Vol. 80, Iss. 4, P. 549-590.
[6] Danilov, V., Koshevoy, G. Gale-Shapley Algorithm Revisited: Semistability. In: Khan, M.A., Sagara, N., Zaslavski, A.J. (eds) Matching, Dynamics and Games for the Allocation of Resources. Monographs in Mathematical Economics (2025) vol 7. Springer, Singapore, pp 421–436.
8

[7] Fong B., Spivak D. I. An Invitation to Applied Category Theory: Seven Sketches in Compositionality. Cambridge University Press, 2019.
[8] Plott C.R. Path independence, rationality, and social choice. Econometrica (1973) 41 (6) 1075–1091.
[9] Yang Y.Y. On the existence of stable matchings with contracts. Theory and Decision (2025) 98, 367–372
9

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:25.498Z
- **Text Length:** 20775 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 9 of 9
