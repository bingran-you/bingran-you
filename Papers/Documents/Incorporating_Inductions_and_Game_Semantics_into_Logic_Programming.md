# PDF Document: Kwon - 2015 - Incorporating Inductions and Game Semantics into Logic Programming.pdf

**File Path:** Kwon - 2015 - Incorporating Inductions and Game Semantics into Logic Programming.pdf

**Processed Date:** 2026-02-10T18:17:43.106Z

**File Size:** 98.41 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2748

**Title:** Incorporating Inductions and Game Semantics into Logic Programming

**Collection:** Large Files

---

## Extracted Text Content

arXiv:1508.01927v1 [cs.LO] 8 Aug 2015
Incorporating Inductions and Game Semantics into Logic Programming
Keehang Kwon
Dept. of Computer Engineering, DongA University Busan 604-714, Korea khkwon@dau.ac.kr
Abstract: Inductions and game semantics are two useful extensions to traditional logic programming. To be specific, inductions can capture a wider class of provable formulas in logic programming. Adopting game semantics can make logic programming more interactive. In this paper, we propose an execution model for a logic language with these features. This execution model follows closely the reasoning process in real life. keywords: induction, game semantics, read, computability logic.
1 Introduction
Fixed-point definitions, inductions and game semantics are all useful extensions to the theory of logic programming. In this paper, we propose an execution model that combines these three concepts. First, logic programming with fixed-point definitions has been studied by
several researchers [6, 10]. In this setting, clauses of the form A △ = B – called definition clauses – are used to provide least fixed-point definitions of atoms. We assume that a set D of such definition clauses – which we call a program – has been fixed. The following definition-right rule, which is a variant of the one used in LINC[10], is used in this paper as an inference rule which introduces atomic formulas on the right.
pv(σ, G ⊢ A) if A′ △ = B ∈ D and A′θ = Aσ and pv(σθ, G ⊢ B).
This rule is similar to backchaining in Prolog with the difference that a current answer subsititution σ (also called a run) is maintained and applied to formulas in a lazy way here. The definition-left rule represents a case analysis in reasoning.
1

pv(σ, A : G ⊢ D) if, for each θ which is the mgu(Aσ, A′) for some
A′ △ = B ∈ D, pv(σθ, B : G ⊢ D).
Here, D represents a goal. This rule is well-known and used to instantiate the free variables of the sequent by θ, which is a most general unifier (mgu) for atoms Aσ and A′. If there is no such θ, the sequent is proved. Natural number induction is also useful in many applications. We use 0 for zero and x+ 1 for a successor of x. The following nat-right rules introduce natural numbers on the right.
pv(σ, G ⊢ nat(z)).
pv(σ, G ⊢ nat(I + 1)) if pv(σ, G ⊢ nat(I)).
The nat-left rule corresponds to an induction in reasoning.
pv(σ, nat(n) ⊢ G) if pv(σ, ∅ ⊢ G(n/0)) and pv(σ, G(n/j) ⊢ G(n/(j + 1))) where j is a new variable. This rule is a well-known induction rule [6] and used to prove a goal G for all natural numbers using only trivial inductions. As we shall see later, even simple inductions make their implementation difficult. The operational semantics of these languages [6] is typically based on intuitionistic provability. In the operational semantics based on provability, solving the universally quantified goal ∀xD-
 from a definition D simply terminates with a success if it is provable. In this paper, we make the above operational semantics more “interactive” by adopting the game semantics in [2, 3]. That is, our approach in this paper involves a modification of the operational semantics to allow for more active participation from the user. Solving ∀xD from a program D now has the following two-step operational semantics:
• Step (1): the machine tries to prove ∀xD from a program D. If it fails, the machine returns the failure. If it succeeds, goto Step (2).
• Step (2): the machine requests the user to choose a constant c for x and then proceeds with solving the goal, [c/x]D.
As an illustration of this approach, let us consider the following program.
2

{ f act(0, 1) =△ ⊤.
f act(X + 1, XY + Y ) △ = f act(X, Y ) }
As a particular example, consider a goal task ∀x(nat(x) ⊃ ∃yf act(x, y)). To prove that this goal is valid, we need to use induction. Most theorem provers simply terminates with a success as it is solvable. However, in our context, execution requires more. To be specific, execution proceeds as follows: the system requests the user to select a particular number for x. After the number – say, 5 – is selected, the system returns y = 120. As seen from the example above, universally quantified goals in-
 intuitionistic logic can be used to model the read predicate in Prolog. In this paper we present the syntax and semantics of this language called PrologInd,G. The remainder of this paper is structured as follows. We describe PrologInd,G in the next section. Section 3 describes the new semantics. Section 4 concludes the paper.
2 An Overview of PrologInd,G
Our language is a variant of the level 0/1 prover in [10] extended with simple inductions. Therefore, we closely follow their presentation in [10]. We assume that a program – a set of definition clauses D – is given. We have two kinds of goals given by G- and D-formulas below:
G ::= ⊤ | ⊥ | nat(x) | A | G ∧ G | ∃x G
D ::= ⊤ | ⊥ | nat(x) | A | D ∧ D | ∃x D | ∀x D | G ⊃ D | nat(x) ⊃ G
In the rules above, A represents an atomic formula. The formulas in this languages are divided into level-0 goals, given by G above, and level-1 goals, given by D. We assume that atoms are partitioned level-0 atoms and level-1 atoms. Goal formulas can be level-0 or level-1
formulas, and in a definition A =△ B, A and B can be level-0 or level-1 formulas, provided that level(A) ≥ level(B). Proving Level-0 formulas and Level-1 formulas is similar to proving goal formulas in Prolog. However, there are some major differences:
3

• when the Level-1 prover meets the implication G ⊃ D where G is not nat(x), it attempts to solve G (in level-0 mode). If G is solvable with all the possible answer substitutions Σ1, . . . , Σn, then the Level-1 prover checks that, for every substitution Σi, DΣi holds. If Level-0 finitely fails, the implication is proved.
• when the Level-1 prover meets the implication nat(x) ⊃ G, the choices for x can be infinite. Therefore the machine needs to prove G using induction (in induction mode). In induction mode, the machine attempts to decompose the induction hypothesis G(x/n) (in level-0 submode) into a set atomic formulas A. Then it attempts to solve G(x/n + 1) (in level-1 submode ) relative to A. If G(x/n + 1) is solvable with respect to G(x/n) with an (partial) answer substitution ∆n , then the machine concludes th-
at G(x/k) holds with an (total) answer substitution ∆k . . . ∆0 (i.e., by composing answer substitutions) for each natural number k.
We will present the standard operational semantics for this language as inference rules [1]. Below the notation G : G denotes {G} ∪ G. Note that execution alternates between two phases: the left rules phase and the right rules phase. In this fragment, all the left rules (excluding the defL in in) are invertible and therefore the left-rules (excluding the defL) take precedence over the right rules. Note that our semantics is a lazy version of the semantics of level 0/1 prover in the sense that an a-
nswer substitution is applied as lazily as possible. Below, the proof procedure for some formula returns a final run Σ in normal mode and a final run ∆ in induction mode. Note that it is not always possible to obtain the final run due to the presence of induction. In such a case, we assume that the machine returns a F ailure.
Definition 1. Let σ, δ be answer substitutions, let G, D be a goal, let G be a set of G-formulas. Then the task of
• proving D from ∅ (empty premise) with respect to σ, D and returns a total run Σ – pv(l1, σ, ∅, D, Σ) – % in level 1,
• proving D from G : G with respect to σ, D and returns a total run Σ pv(l0, σ, G : G, D, Σ) – % in level 0,
• proving G from G : G with respect to σ, δ, D and returns a partial run ∆ – pv(i0, σ, δ, G : G, G, ∆) – % induction mode, level 0
4

• proving G from G : G with respect to σ, δ, D and returns a partial run ∆ – pv(i1, σ, δ, G : G, G, ∆) % induction mode, level 1
– are defined as follows:
(1) pv(l0, σ, ⊥ : G ⊢ D, σ). % This is a success.
(2) pv(l0, σ, ⊤ : G ⊢ D, Σ) if pv(l0, σ, G ⊢ D, Σ). % ⊤ in the premise is redundant.
(3) pv(l0, σ, A : G ⊢ Dθ, Σ) if, for each θ which is the mgu(Aσ, A′) for some
A′ △ = B ∈ D, pv(l0, σθ, B : G ⊢ D, Σ). % DefL rule
(4) pv(l0, σ, nat(n) : G ⊢ G, F ailure) if % invokes induction pv(l1, σ{(n, 0)}, ∅ ⊢ G, Σ) % prove base case and pv(i0, σ{(n, j)}, ∅, G ⊢ G(n/n + 1), ∆) % prove induction step where j is a new free variable. % In induction step, δ – a partial substitution – is initialized to an empty substitution. F ailure means that it is not possible to obtain the final run.
(5) pv(l0, σ, (G0 ∧ G1) : G ⊢ D, Σ) if pv(l0, σ, G0 : G1 : G ⊢ D, Σ).
(6) pv(l0, σ, ∃xG : G ⊢ D, Σ) if pv(l0, σ, [y/x]G : G ⊢ D, Σ) where y is a new free variable.
% Below is the description of the level-0 prover in induction phase
(7) pv(i0, σ, δ, A ⊢ G, ∆) if pv(i1, σ, δ, A ⊢ G, ∆). % switch from i0 to i1.
(8) pv(i0, σ, δ, A : G ⊢ G, ∆) if (a nonatomic G is in G) and pv(i0, σ, δ, G : A : G′ ⊢ G, ∆). where G′ is G − G. % process G if it contains a nonatomic formula.
(9) pv(i0, σ, δ, (G0 ∧ G1) : G ⊢ G, ∆) if pv(i0, σ, δ, G0 : G1 : G ⊢ G, ∆).
(10) pv(i0, σ, δ, ∃xG1 : G ⊢ G, ∆) if pv(i0, σ, δ, [y/x]G1 : G ⊢ G, ∆) where y is a new free variable.
% Below is the description of the level-1 prover in induction phase
(11) pv(i1, σ, δ, A : A ⊢ A, δ). % This is a success via induction hypothesis A.
5

(12) pv(i1, σ, δ, A ⊢ G0∧G1, ∆′
0∪∆′
1) if pv(i1, σ, δ, A ⊢ G0, ∆0) and pv(i1, σ, δ, A ⊢ G1, ∆1).
Here, the answer substitution ∆′
0 is identical to ∆0 but locations of the form loc(x) in ∆′
0 are adjusted to new locations properly. Similarly for
∆′
1.
(13) pv(i1, σ, δ, A ⊢ ∃xG, ∆) if pv(i1, σ, δδ1, A ⊢ [y/x]G, ∆) where y is a new free variable, δ1 = {(loc(x), t)}{(y, t)} and t is a term. Note that we assume that loc(x) represents a unique location in the sequent.
% Below is the description of the level-1 prover
(14) pv(l1, σ, ∅ ⊢ ⊤, σ). % solving a true goal
(15) pv(l1, σ, ∅ ⊢ A, Σ) if A′ △ = B ∈ D and A′θ = Aσ and pv(l1, σθ, ∅ ⊢ B, Σ). % DefR
(16) pv(l1, σ, ∅ ⊢ D0 ∧ D1, Σ0 ∪ Σ1) if pv(l1, σ, G ⊢ D0, Σ0) and pv(l1, σ, G ⊢ D1, Σ1). % conjunctive goals
(17) pv(l1, σ, ∅ ⊢ G ⊃ D, Σ) if pv(l0, σ, G ⊢ D, Σ). % switch from level 1 to level 0
(18) pv(l1, σ, ∅ ⊢ ∀xD, Σ) if pv(l1, σ, ∅ ⊢ [y/x]D, Σ) where y is a new free variable.
(19) pv(l1, σ, ∅ ⊢ ∃xD, Σ) if pv(l1, σσ1, ∅ ⊢ [y/x]G, Σ) where y is a new free variable, σ1 = {(y, t)} and t is a term.
The following is a proof tree (from bottom up) of the example given in Section 1. Note that a proof tree is represented as a list. Now, a proof tree of a proof formula is a list of tuples of the form 〈E, Σ, Ch〉 where E is a proof formula, Σ is a final run for E, and Ch is a list of the form i1 :: . . . :: in :: nil where each ik is the address of its kth child (actually the distance to E’s kth chilren in the proof tree). % base case
l1,{(h0, 0), (w0, 1)}, ∅ ⊢ ⊤,Σ, nil % success l1,{(h0, 0), (w0, 1)}, ∅ ⊢ f act(h0, w0), Σ, 1::nil % defR
6

l1,{(h0, 0)}, ∅ ⊢ ∃y f ib(h0, y), Σ, 1::nil % nat-0
% start of induction step
i1,{(h0, j)}, {(y, w0), (loc(z), (j + 1)w0), (w1, (j + 1)w0)}, f act(h0, w0) ⊢ f act(h0, w0), ∆, nil % success
i1,{(h0, j)}, {(y, w0), (loc(z), (j + 1)w0), (w1, (j + 1)w0)}, f act(h0, w0) ⊢ f act(h0 + 1, w1), ∆, 1::nil % defR i0,{(h0, j)}, {(y, w0)}, f act(h0, w0) ⊢ ∃zf act(h0 + 1, z), ∆, 1::nil % ∃-L i0,{(h0, j)},∅, ∃yf act(h0, y) ⊢ ∃zf act(h0 + 1, z), ∆, 1::nil % ∃-L % end of induction step
l0,∅, nat(h0) ⊢ ∃y f ib(h0, y), F ailure, 5::1::nil % defL l1,∅, ∅ ⊢ nat(h0) ⊃ ∃y f ib(h0, y), F ailure, 1::nil l1,∅,∅ ⊢ ∀x(nat(x) ⊃ ∃y f ib(x, y)), F ailure, 1::nil % ∀-R
In the above, Σ = {(h0, 0), (w0, 1)} and ∆ = {(y, w0), (loc(z), (j+1)w0), (w1, (j+ 1)w0)}.
3 An Alternative Operational Semantics
Adding game semantics requires some changes to the previous execution model. To be precise, our new execution model – adapted from [2] – solves the goal relative to the program using the proof tree built in the proof search. To be precise, execution proceeds in two different phases: normal phase and induction phase. In normal phase, execution simply follows the proof tree because the proof tree encodes all the possible total runs. In induction phase, things are more complicated. Note that the proo-
f tree in induction mode encodes only the partial run (from ith inductive step to i+1th inductive step). Therefore, a total run must be obtained from composing all the partial runs, not from the proof tree. In addition, to deal with the universally quantified goals properly, the execution needs to maintain an input substitution F of the form {y0/c0, . . . , yn/cn} where each yi is a variable introduced by a universally quantified goal in the proof phase and each ci is a user input during the execu-
tion phase.
Definition 2. let L be a fixed proof tree. Let i be an index to a proof tree and let F be an input substitution. In addition, let σ be an answer substitution,
7

let ∆ be an answer substitution (obtained from composing induction steps). Then executing Li (the i element in L) with F in normal phase – written as ex(i, F ) – and executing G with σ, ∆, F in induction phase – written as ex(ind, σ, ∆, ∅ ⊢ G, F ) – are defined as follows:
(1) ex(i, F ) if Li = (E, nil). % no child. This is a success.
(2) ex(i, F ) if Li = ((l1, σ, ∅, D0 ∧ D1, Σ), m :: 1 :: nil) and ex(i − m, F ) and % execute D0 ex(i − 1, F ). % execute D1
(3) ex(i, F ) if Li = ((l1, σ, G, ∀xD, Σ), 1 :: nil) and Li−1 = ((l1, σ, G, [y/x]D, Σ), ) and read(r) % read a user input and ex(i − 1, F ∪ {y/c}) % update F for universal quantifiers where c is the user input (the value stored in r).
(4) ex(i, F ) if Li = ((l0, σ, A : G, D, Σ), i1 :: . . . :: in :: nil) and choose a ik such that Li−ik = ((l0, σθk, B, G, D, Σ), ) and (F and θk agree on the variables appearing in F ) and ex(i − ik, F ). % choose a correct one using F among many paths in defL
(5) ex(i, F ) if Li = ((l0, σ, nat(n) ⊢ G, F ailure), p :: q :: nil) and Li−p = ((l1, σ{(n, 0)}, ∅ ⊢ G, ΣB), ) and % base case Li−q = ((i0, σ{(n, j}, ∅, G ⊢ G(n/n + 1), ∆), ) and % induction step ex(ind, σ, ∆total, ∅ ⊢ G, F ) % run in induction mode where k = F (n) and ∆total = (∆|(j, k − 1) . . . ∆|(j, 0)ΣB))|(j, k − 1) represents a total run for G
(6) ex(i, F ) if Li = ((l1, σ, ∅ ⊢ ∃xD), 1 :: nil) and Li−1 = ((l1, σ{(y, t)}, ∅ ⊢ [y/x]D), )
and (print x = yσF ) and ex(i − 1, F ). Hence the value of x is y instantiated by F and σ.
(7) ex(i, F ) if Li = (E, 1 :: nil) and ex(i − 1, F ). % otherwise
(8) ex(ind, σ, ∆, ∅ ⊢ A, F ). % success in induction mode
8

(9) ex(ind, σ, ∆, ∅ ⊢ G0 ∧ G1, F ) if
ex(ind, σ, ∆, ∅ ⊢ G0, F ) and % execute the first goal. ex(ind, σ, ∆, ∅ ⊢ G1, F ). % execute the second goal.
(10) ex(ind, σ, ∆, ∅ ⊢ ∃xG, F ) if (print x = t) and ex(ind, σ, ∆, ∅ ⊢ [t/x]G, F )
where t = loc(x) ∆σF . % apply ∆, σ and then F to loc(x).
Initially, σ, F are empty substitutions. In the above, ∆total = ((∆|(j, k − 1) . . . ∆|(j, 0) ΣB))|(−k + 1) is used to correctly obtain a total run for G. To be precise, the notation ∆|(j, i) is used
• to rename each varaible wr to wr+im,
• to replace j with i
where m is the number of existentially quantified variables in G. Thus the composition ∆|(j, k −1) . . . ∆|(j, 0) ΣB contains all the answer substitutions obtained in inductive steps upto the number k. Thus it contains all the answer substitutions for km variables. Then to produce correct answers in solving G, we must undo the renaming via |(−k + 1), deleting unnecessary answer substitions. Note that each ∆|(j, i) may contain location variables of the form loc(x) and we assume that loc(x) is adjus-
ted properly in obtaining
∆total .
The following is an execution sequence of the goal ∀x(nat(x) ⊃ ∃y f ib(x, y)) using the proof tree above. We assume that the user chooses 3 for x. Note that the last component represents F .
% execution (from bottom up)
ind, i0,∅, ∆total, f act(h0 + 1, 6), 1::nil % success, print z = 6. ind, i0,∅, ∆total, ∃zf act(h0 + 1, z), 1::nil % ∃-L
l0,∅, nat(h0) ⊢ ∃yf ib(h0, y), , , 5::1::nil, {(h0, 3)}% defL l1,∅, ∅ ⊢ nat(h0) ⊃ ∃yf act(h0, y), , , {(h0, 3)}% the user input is 3. update F
l1,∅,∅ ⊢ ∀x(nat(x) ⊃ ∃yf act(x, y)), , , ∅ % ∀-R
In the above, ∆total is obtained as follows:
9

(1) From the base case in the proof tree, we obtain ΣB = {(h0, 0), (w0, 1)}.
(2) From the inductive case in the proof tree, we obtain {(h0, j)} and a run ∆ = {(loc(z), (j + 1)w0), (w1, (j + 1)w0).
(3) Then ∆|(j, i) = {(loc(z), (i + 1)wi), (wi+1, (i + 1)wi)}
(4) ∆|(j, 2) . . . ∆|(j, 0) ΣB = {(w3, (2+1)w2)}{(w2, (1+1)w1)}{(w1, 1w0)}{(w0, 1)} = {(w3, 6), (w2, 2), (w1, 1), (w0, 1)}. It also contains answer substitutions for loc(z0), . . . which we will not show here.
(5) ∆total = (∆|(j, 2) . . . ∆|(j, 0) ΣB)|(j, −k + 1) = {(w1, 6)}
(6) In the above, for simplicity, we omit the answer substitutions for loc(z) variables in ∆total.
4 Conclusion
In this paper, we have considered a new execution model for a subset of the level 0/1 prover, enhanced with simple inductions and game semantics. This new model is interesting in that it gives a logical status to the read predicate in Prolog. We plan to connect our execution model to Japaridze’s Computability Logic [2, 3] in the near future.
References
[1] G. Kahn, “Natural Semantics”, In the 4th Annual Symposium on Theoretical Aspects of Computer Science, LNCS vol. 247, 1987.
[2] G. Japaridze, “Introduction to computability logic”, Annals of Pure and Applied Logic, vol.123, pp.1–99, 2003.
[3] G. Japaridze, “Sequential operators in computability logic”, Information and Computation, vol.206, No.12, pp.1443-1475, 2008.
[4] D. Miller, G. Nadathur, F. Pfenning, and A. Scedrov, “Uniform proofs as a foundation for logic programming”, Annals of Pure and Applied Logic, vol.51, pp.125–157, 1991.
10

[5] David Baelde, Andrew Gacek, Dale Miller, Gopalan Nadathur, and Alwen Tiu. A User Guide to Bedwyr, November 2006.
[6] Raymond McDowell and Dale Miller. A logic for reasoning with higherorder abstract syntax. In Proc. LICS 1997, pp. 434–445, IEEE Comp. Soc. Press, 1997.
[7] Peter Schroeder-Heister. Rules of definitional reflection. In Proc. LICS 1993, pages 222–232. IEEE Comp. Soc. Press, 1993.
[8] Alwen Tiu. A Logical Framework for Reasoning about Logical Specifications. PhD thesis, Pennsylvania State University, May 2004.
[9] Alwen Tiu. Model checking for π-calculus using proof search. In M. Abadi and L. de Alfaro, editors, CONCUR, volume 3653 of LNCS, pages 36–50. Springer, 2005.
[10] Alwen Tiu, Gopalan Nadathur, and Dale Miller. Mixing finite success and finite failure in an automated prover. In Proc. of ESHOL’05: Empirically Successful Automated Reasoning in Higher-Order Logics, pages 79 – 98, December 2005.
11

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:43.106Z
- **Text Length:** 18637 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
