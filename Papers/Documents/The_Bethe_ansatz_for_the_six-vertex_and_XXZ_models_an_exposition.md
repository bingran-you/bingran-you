# PDF Document: Duminil-Copin et al. - 2018 - The Bethe ansatz for the six-vertex and XXZ models an exposition.pdf

**File Path:** Duminil-Copin et al. - 2018 - The Bethe ansatz for the six-vertex and XXZ models an exposition.pdf

**Processed Date:** 2026-02-10T18:16:46.890Z

**File Size:** 651.39 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2720

**Title:** The Bethe ansatz for the six-vertex and XXZ models: an exposition

**Collection:** Large Files

---

## Extracted Text Content

The Bethe ansatz for the six-vertex and XXZ models: an
exposition
Hugo Duminil-Copin ∗†, Maxime Gagnebin†, Matan Harel†, Ioan Manolescu‡, Vincent Tassion†
December 1, 2016
Abstract
In this paper, we review a few known facts on the coordinate Bethe ansatz. We present a detailed construction of the Bethe ansatz vector ψ and energy Λ, which satisfy V ψ = Λψ, where V is the the transfer matrix of the six-vertex model on a finite square lattice with periodic boundary conditions for weights a = b = 1 and c > 0. We also show that the same vector ψ satisfies Hψ = Eψ, where H is the Hamiltonian of the XXZ model (which is the model for which the Bethe ansatz was first developed), with-
 a value E computed explicitly. Variants of this approach have become central techniques for the study of exactly solvable statistical mechanics models in both the physics and mathematics communities. Our aim in this paper is to provide a pedagogically-minded exposition of this construction, aimed at a mathematical audience. It also provides the opportunity to introduce the notation and framework which will be used in a subsequent paper by the authors [5] that amounts to proving that the random cl-
uster model on Z2 with cluster weight q > 4 exhibits a first-order phase transition.
1 Introduction
The study of statistical mechanics has greatly benefited from the analysis of exactly solvable lattice models. Although we will not offer a proper definition of the notion of exact solvability, its essence lies in the existence of closed-form formulae for many of the important thermodynamics quantities associated with the model. Perhaps the earliest example in modern statistical mechanics came in 1931, with Bethe’s [3] approach to diagonalizing the Hamiltonian of the XXZ model, a particular case o-
f the anisotropic one-dimensional Heisenberg chain. His technique, now known as the coordinate Bethe ansatz, shows that, given a solution to a (relatively) small number of simultaneous nonlinear equations, one can construct a candidate eigenvector and eigenvalue - i.e. a vector ψ satisfying Hψ = Eψ. In 1967, Lieb [10] noticed that the same construction can be used to find candidate eigenvectors for the transfer matrix of the six-vertex model. This model, initially proposed by Pauling in 1931 for t-
he study of the thermodynamic properties of ice, is a major object of study on its own right: see [11] and Chapter 8 of [2] (and references therein) for a bibliography on the six-vertex model. The work of Baxter [1] showed that there is a rich algebraic structure to the six-vertex model (as well as the eight-vertex model, which generalizes it). His approach, based on commuting matrices and the so-called Yang-Baxter relations, led to a great generalization of Bethe’s original technique. This approa-
ch, called the algebraic Bethe ansatz (to distinguish it from the coordinate
∗I.H.É.S. †University of Geneva ‡University of Fribourg
1
arXiv:1611.09909v1 [math.PR] 29 Nov 2016

Bethe ansatz), has been at the heart of the study of exactly solvable models in the next two decades (see [6] for a short survey of this work, and [4] for a more complete description). In this paper, we will focus on the original formulation – the coordinate Bethe ansatz – as it is sufficient for our analysis of the six-vertex model. Besides being a model of independent interest, this model is also deeply connected to Fortuin-Kasteleyn percolation, which motivates our work here; we defer a discus-
sion of this connection to [5]. As such, we will present a detailed derivation, aimed at a mathematical audience, of the construction of a candidate eigenvector for the six-vertex transfer matrix, under toroidal boundary conditions. Our goal will be to provide a proof of the statements which will be needed in the subsequent papers of this series. This include the “singular” case of the construction, in which one of the solutions to Bethe’s equations is zero (see below for formal definitions). The -
paper ends with a short proof of the fact that the construction for the XXZ model is, in fact, identical to the one used for the six-vertex model. While these results are not new, we hope that an elementary exposition will nonetheless be of some use to the community.
2 Definitions and statements of main theorems
2.1 The six-vertex model and its transfer matrix
For the rest of the paper, fix two positive integers M and N . Write ZN and ZM for the cyclic groups of order N and M , respectively (which are identified with {1, . . . , N } and {1, . . . , M }, respectively). Consider the torus TN,M , with vertex set ZN × ZM and edges between vertices at Y ⋅ Y1-distance 1 of each others. Let ω be an arrow configuration on the edges of TN,M – i.e. a map ω from edge-set of TN,M to {−1, 1}, where +1 is considered as a right or up arrow, and -1 as a left or down ar-
row. The six-vertex model is given by restricting ω to configurations that have an equal number of arrows entering and exiting each vertex, i.e. formally satisfying the ice rule
∀v ∈ TN,M , Q
edge e with endpoint v
ω(e) = 0 .
The rule leaves six possible configurations at each vertex, depicted in Figure 2.1. Assign the weight a to configurations 1 and 2, b to 3 and 4, and c to 5 and 6. This choice is made to ensure that the weight is invariant under a global arrow flip. Letting ni be the number of vertices with configuration i in ω, define the weight of ω as
w(ω) = an1+n2 ⋅ bn3+n4 ⋅ cn5+n6 .
Furthermore, if ω does not obey the ice rule, set w(ω) = 0. The partition function of the model is given by
Z6V (a, b, c) = Q w(ω) ,
where the sum is over all 4NM arrow configurations, or equivalently, over all arrow configurations satisfying the ice rule.
Figure 1: The six possibilities for vertices in the six-vertex models. Each possibility comes with a weight a, b or c.
2

In this paper, we will study the isotropic model, in which a = b = 1, while c > 0. We note that similar statements can be formulated to generalize our work to arbitrary positive values of a, b and c.
We now introduce a matrix V which turns out to be the transfer matrix of the model (see the next section for more details). Let ⃗x = (x1, . . . , xn) denote a set of orderd integers 1 ≤ x1 < ⋅ ⋅ ⋅ < xn ≤ N with 0 ≤ n ≤ N . The quantity xi will refer to the i-th coordinate of ⃗x. We set S⃗xS for the length n of ⃗x. Let Ω = {−1, 1}⊗N be the 2N -dimensional real vector space spanned by the basis Ψ⃗x ⃗x,
where for any ⃗x, Ψ⃗x ∈ {±1}N is given by
Ψ
⃗x(i) =
⎧⎪⎪ ⎨ ⎪⎪⎩
+1 if i ∈ {x1, . . . , xn},
−1 if i ∉ {x1, . . . , xn}.
Associate to each Ψ⃗x a sequence of vertical arrows entering or exiting the vertices of ZN , with up arrows at xi and down arrows otherwise. Note that S⃗xS corresponds to the number of up arrows of Ψ⃗x. For two basis vectors Ψ⃗x, Ψ⃗y ∈ Ω, we say that Ψ⃗x and Ψ⃗y are interlaced if S⃗xS = S⃗yS and
x1 ≤ y1 ≤ x2 ≤ ⋅ ⋅ ⋅ ≤ xn ≤ yn or y1 ≤ x1 ≤ y2 ≤ ⋅ ⋅ ⋅ ≤ yn ≤ xn .
For a pair of interlacing vectors, we define
P (Ψ⃗x, Ψ⃗y) = S{i ∈ ZN ∶ Ψ⃗x(i) ≠ Ψ⃗y(i)}S .
The matrix V is an endomorphism of Ω written in the basis (Ψ⃗x)⃗x. It is defined as follows:
V (Ψ⃗x, Ψ⃗y) =
⎧⎪⎪⎪ ⎨ ⎪⎪⎪⎩
2 if Ψ⃗x = Ψ⃗y; cP (Ψ⃗x,Ψ⃗y) if Ψ⃗x ≠ Ψ⃗y and Ψ⃗x and Ψ⃗y are interlaced; 0 otherwise.
(2.1)
The spectral properties of this matrix encode many properties of the associated six-vertex model. As a motivating example, we will prove in Section 4 one of the simplest such associations, between the trace of V M and the partition function of the six-vertex model.
Proposition 2.1. V is a block diagonal, symmetric matrix, fixing the subspaces
Ωn ∶= Span{Ψ⃗x ∶ S⃗xS = n} .
Furthermore, Z6V (1, 1, c) = Tr(V M ).
2.2 Statement of the Bethe ansatz
In light of the above proposition, we have a clear interest in studying the spectral properties of V as these provide asymptotics for the partition function of the model (and other related quantities). For more precise statements, see [5]. The main theorem of this paper is the explicit construction of ψ and Λ such that V ψ = Λψ. This is the eponymous Bethe Ansatz, and its proof takes up the majority of this text. Set ∆ ∶= (2 − c2)~2, and define the function S ∶ R2 → C by
S(x, y) ∶= e−ix + eiy − 2∆ .
If ∆ ∈ [−1, 1), define μ to be the unique solution to cos(μ) = −∆, μ ∈ [0, π). For ∆ < −1, set μ = 0. We introduce the set D∆ ∶= (−π + μ, π − μ). Next, we define Θ ∶ D2
∆ → R to be the unique continuous function which satisfies Θ(0, 0) = 0 and
exp(−iΘ(x, y)) = ei(x−y) ⋅ S(x, y)
S(y, x)
.
3

It may be shown that such a function Θ exists and that it real and analytic on D∆, for any ∆ < 1. In this paper we will only use its differentiability, antisymmetry, and the algebraic relation (2.7) which follows directly from the definition. For z ≠ 1, we set
L(z) ∶= 1 + c2z
1 − z , M (z) ∶= 1 − c2
1 − z . (2.2)
For S⃗xS = n and (p1, p2, . . . , pn) ∈ Dn
∆, set
ψ(⃗x) ∶= Q
σ∈Sn
Aσ
n
M k=1
exp ipσ(k)xk , (2.3)
where Sn is the symmetric group on n elements and
Aσ ∶= ε(σ) M 1≤k<`≤n
eipσ(k) S(pσ(k), pσ(`)), for σ ∈ Sn, (2.4)
with ε(σ) being the signature of the permutation. We also define the vector ψ ∈ Ω by
ψ= Q
S⃗xS=n
ψ(⃗x) Ψ⃗x .
Theorem 2.2 (Bethe Ansatz for V ). Fix n ≤ N ~2. Let (p1, p2, . . . , pn) ∈ Dn
∆ be distinct and satisfy the equations
exp (iN pj) = (−1)n−1 exp −i
n
Q k=1
Θ(pj, pk) , ∀j ∈ {1, 2, . . . , n}. (BE)
Then, ψ satisfies the equation V ψ = Λψ, where
Λ ∶=
⎧⎪⎪⎪⎪⎪⎪
⎨
⎪⎪⎪⎪⎪⎪⎩
n
M j=1
L(eipj ) +
n
M j=1
M (eipj ), if p1, . . . , pn are non zero,
2 + c2(N − 1) + c2 Q
j≠`
∂1Θ(0, pj) ⋅ M j≠`
M (eipj ), if p` = 0 for some `.
(2.5)
We note that the restriction n ≤ N ~2 is insignificant since the transfer matrix V is invariant under global arrow flip, and as a consequence the spectrums of V on Ωn and ΩN−n are identical.
2.3 Comments on Theorem 2.2
There are several important features of the theorem above which merit explicit mention:
Logarithmic form of the Bethe ansatz This theorem reduces the N
n -dimensional problem
of finding an eigenvector of V in Ωn to the solution of the n relations (BE), often called Bethe’s equations. In most applications, it is far more instructive to consider the equations in their logarithmic form, i.e.
N pj = 2πIj −
n
Q k=1
Θ(pj, pk) ∀j ∈ {1, 2, . . . , n}, (2.6)
where {Ij} are distinct integers (resp. half integers) if n is odd (resp. even).
Existence and uniqueness The existence of solutions to (BE) is nontrivial, and uniqueness is, in general, false (due to our ability to choose {Ij} in the logarithmic form). It is more instructive to consider existence and uniqueness for (2.6). In our subsequent paper, we consider a specific choice of {Ij} to prove existence of solutions which will generate the leading eigenvalues of V restricted to ΩN~2−k for any fixed k.
4

The coefficients Aσ and the origin of the Bethe’s equations (BE) The function Aσ is defined in such a way that the following relation holds true for every 1 ≤ j < n:
Aσ○(j,j+1)
Aσ
= − exp iΘ(pσ(j), pσ(j+1)) , (2.7)
where (j, j + 1) is the transposition permuting j and j + 1. The relations (BE) are introduced in order to obtain a similar identity for the transposition (1, n) permuting 1 and n
Aσ○(1,n)
Aσ
=−
exp(iN pσ(n))
exp(iN pσ(1))
× exp iΘ(pσ(n), pσ(1)) . (2.8)
This equation can be seen as enforcing toroidal boundary conditions. Those two relations are proved in Section 3.3, and play a fundamental role in the proof.
The role of the singularity Inspecting the form of L(z) and M (z) clearly indicates that the case p` = 0 for some ` requires special treatment. Moreover, solutions of (BE) in which p` = 0 for some ` are not esoteric. In fact, the leading eigenvalue of V restricted to Ωn is given by such a solution whenever n is odd. Note that the p` = 0 formula in (2.5) is not given by a simple limit of the formula in the line that precedes it; instead, it includes terms depending on the derivative of Θ that would-
 have canceled out algebraically in the non-degenerate case. This degenerate case only appears when a = b. Theorem 2.2 may be extended to a general sixvertex model by setting ∆ = (a2+b2−c2)~2ab, and replacing L and M by [ab+(c2−b2)z]~[a2−abz] and [a2 − c2 − abz]~[ab − b2z], respectively (setting a = b = 1 gives the formulation above). Then, whenever a ≠ b, L(eip) and M (eip) are bounded for all values of p, thus eliminating the need for the singular case of Theorem 2.2.
Nontriviality of ψ It is important to note that the theorem does not guarantee that ψ is a true eigenvector of V , as it may be identically equal to 0. In order to apply (BE) to deduce information on the spectrum of V , one must have an independent argument that ensures that ψ is nonzero. A quick computation shows that, for (p1, . . . , pn) ∈ Dn
∆ with at least two equal entries, the vector ψ given by (2.3) is identically 0; this explains the condition that p1, . . . , pn be distinct. Again, specifying a set of {Ij} in the logarithmic form of Bethe’s equations is an essential step in applications, and usually enables one to prove that ψ ≠ 0 on a case-by-case basis.
2.4 The XXZ model
The final result of this paper relates to the XXZ model on ZN , which describes a one-dimensional, periodic system of spin 1~2 particles. For an introduction to the Bethe ansatz that is focused on the XXZ model and aimed at physicists, we refer the interested reader to the work of Karbach, Hu and Müller [7, 8, 9]. Our goal here is not to present a detailed analysis of this model; instead, we will present a short proof that the Bethe ansatz vector ψ of the six-vertex model is also useful for this a-
 priori very different model. To do so, we must first define the Hamiltonian H of the XXZ model. We conserve the notation Ω as the vector space spanned by vertical arrow configurations on ZN . For any i ∈ ZN , let wi ∶ Ω → Ω be the linear operator which exchanges the arrows at i and i + 1, whenever they are different, and is zero otherwise. For ∆ < 1, let
Hi(Ψ⃗x, Ψ⃗y) =
⎧⎪⎪⎪⎪⎪
⎨
⎪⎪⎪⎪⎪⎩
∆~2 if Ψ⃗x = Ψ⃗y and Ψ⃗x(i) = Ψ⃗x(i + 1);
−∆~2 if Ψ⃗x = Ψ⃗y and Ψ⃗x(i) ≠ Ψ⃗x(i + 1);
1 if wi(Ψ⃗x) = Ψ⃗y;
0 otherwise.
(2.9)
5

The Hamiltonian H is defined by
H ∶=
N
Q i=1
Hi .
Theorem 2.3. Fix ∆ < 1 and n ≤ N ~2. Assume (p1, p2, . . . , pn) ∈ Dn
∆ are distinct and satisfy (BE) and let ψ be defined as in Theorem 2.2. Then
Hψ = Eψ ,
where
E = N∆
2 −2
n
Q k=1
[∆ − cos(pk)] .
This result is simpler to prove once we know that ψ is an eigenvector of V (n), rather than directly: we will simply show that H and V (n) commute, and therefore share eigenvectors. The exact value of E will appear through direct computation.
Organisation of the paper Section 3 contains the proof of Theorem 2.2, the main result of this paper. In Section 4 we prove Proposition 2.1 on the structure and role of the transfer matrix. Finally, in Section 5, we prove Theorem 2.3, the equivalent of Theorem 2.2 for the XXZ model.
Acknowledgements We thank A. Borodin, I. Corwin and C. Hagendorf for useful comments. This research was supported by the NCCR SwissMAP, the ERC AG COMPASP, the Swiss NSF and the IDEX chair funded by Paris-Saclay.
3 Proof of the Bethe ansatz (Theorem 2.2)
We begin by introducing some useful notation. For the entire section, fix n ≤ N ~2 and some (p1, p2, . . . , pn) ∈ D n
∆ where the pi are distinct. Set
zj = eipj ∈ {z ∈ C ∶ SzS = 1}, ∀j ∈ {1, . . . , n}.
Given σ ∈ Sn and a vector ⃗x, set
Z
⃗x
σ ∶=
n
M j=1
zxj
σ(i). (3.1)
Also fix for the whole section a vector ⃗x with S⃗xS = n. Recall the definition of ψ from the statement of the theorem. Using the notation introduced above and the definition of interlacement, the coordinate V ψ(⃗x) of the vector V ψ along Ψ⃗x can be written as
V ψ(⃗x) = Q σ∈Sn
Aσ Q
1≤y1≤x1≤⋯≤yn≤xn
cP (Ψ⃗x,Ψ⃗y)Z ⃗y
σ+Q σ∈Sn
Aσ Q
x1≤y1≤⋯≤xn≤yn≤N
cP (Ψ⃗x,Ψ⃗y)Z ⃗y
σ. (3.2)
Note that the weight of ⃗y = ⃗x is split up over both sums. Also keep in mind that the sums are on ⃗y = (y1, . . . , yn), where the yi are distinct and ordered. One needs to show that the expression above is equal to Λψ(⃗x). Our proof is organized as follows.
• In Section 3.1, we state a lemma that provides several important relations satisfied by the coefficients Aσ, which will be used later in the proof.
6

• In Section 3.2, we provide a change of variables formula based on Bethe’s equations. This formula allows us to “merge” the two terms in (3.2) and provides us with the compact expression
V ψ(⃗x) = Q σ∈Sn
AσRσ, (3.3)
where Rσ will be defined as a sum suitable for further manipulations.
• In Section 3.3, we perform certain algebraic manipulations in order to rewrite the sum on the RHS of (3.3). More precisely, we define a set of words W as well as functions rσ, Zσ ∶ W → C (defined in terms of the functions L, M and the zi’s) and prove an expression of the form
Rσ = Q w∈W
rσ(w)Zσ(w). (3.4)
The only requirement for this re-encoding step will be that none of the zi’s is equal to 1 (or, equivalently, that none of the pi’s is equal to 0). This requirement is important when
computing partial sums of the form ∑xi≤y≤xi zy
σ(i).
• In Section 3.4, we prove that V ψ(⃗x) = Λψ(⃗x) in the non-singular case, when none of the pi’s is equal to 0. In this case the two steps (3.3) and (3.4) are valid and we can write
V ψ(⃗x) = Q w∈W
Q σ∈Sn
Aσ rσ (w)Zσ (w).
We conclude the proof by showing that for any non-constant w ∈ W ,
Q σ∈Sn
Aσrσ(w)Zσ(w) = 0. (3.5)
The remaining terms corresponding to constant words will be equal to Λψ(⃗x).
• In Section 3.5, we treat the singular case when one entry p` = 0. In this case, the encoding with words (3.4) is not valid directly (since z` = 1). Nevertheless, we will be able to perform a perturbative strategy, and write
V ψ(⃗x) = lεi→m0 Q
w∈W
Q σ∈Sn
Aσ rε
σ (w)Z ε
σ (w)
where rεσ and Zσε are defined by replacing p`(= 0) with ε in the definition of rσ and Zσ. When analysing the contribution (as ε → 0) of words in W , we will need to keep track of the first order terms (terms of order ε) which compensate diverging terms of the form L(eiε) or M (eiε) and do not vanish in the limit: this explains the different expression of Λ when one of the pi’s is 0.
3.1 Relations satisfied by the coefficients Aσ
The coefficients Aσ defined in (2.4) play an important role in our proof. In order to perform algebraic manipulations, one needs to express Aσ○σ′ as a function of Aσ for certain permutations σ′. Furthermore, the coefficients Aσ are related to the functions L and M introduced in Section 2.2. In the lemma below, we state the relations needed for our derivation of the Bethe ansatz. Let τ be the permutation with τ (i) = i + 1 for 1 ≤ i < n and τ (n) = 1. Moreover, let (j, k) be the transposition inver-
ting the elements j and k.
7

Lemma 3.1. Assume that (p1, . . . , pn) ∈ Dn
∆ satisfies Bethe’s equations (BE), and let Aσ be the coefficients defined by (2.4). Then, for every σ ∈ Sn, we have
Aσ○(j,j+1)
Aσ
= − exp iΘ(pσ(j), pσ(j+1)) for every 1 ≤ j < n, (3.6)
Aσ○(n,1)
Aσ
=−
zσ(n)
zσ(1)
N
⋅ exp iΘ(pσ(n), pσ(1)) , (3.7)
Aσ○τ
Aσ
= z−N
σ(1). (3.8)
Furthermore, when pj and pk are nonzero,
exp iΘ(pj, pk) =
M (zj)L(zk) − 1
M (zk)L(zj) − 1 . (3.9)
Remark 3.2. Equations (3.6) and (3.9) do not use that the pk’s are solutions of Bethe’s equations.
Proof Equations (3.6) and (3.9) are straightforward consequences of the definitions of Aσ and Θ. In order to prove (3.8), we use the transposition decomposition τ = (1, 2) ○ ⋅ ⋅ ⋅ ○ (n − 1, n) and apply (3.6) n − 1 times to deduce
A
(σ○τ )
Aσ
= (−1)n−1 ⋅ exp i
n
Q k=2
Θ pσ(1), pσ(k) = (−1)n−1 ⋅ exp i
n
Q k=1
Θ pσ(1), pk .
In the last equality, we used the fact that Θ(p, p) = 0 to add the missing term in the sum. Therefore,
A
(σ○τ )zN
σ(1)
Aσ
= (−1)n−1 exp ipσ(1)N + i
n
Q k=1
Θ pσ(1), pk
(BE)
= 1,
which proves (3.8). Finally, we deduce (3.7) from the previous computations by using the decomposition (n, 1) = τ
−1 ○ (1, 2) ○ τ . We find
Aσ○(n,1)
Aσ
= Aσ○τ −1
Aσ
⋅
Aσ○τ −1○(1,2)
Aσ○τ −1
⋅
Aσ○τ −1○(1,2)○τ
Aσ○τ −1○(1,2)
= zN
σ(n) ⋅ − exp iΘ(pσ○τ −1(1), pσ○τ −1(2)) ⋅ z−N
(σ○τ −1○(1,2))(1)
=−
zσ(n)
zσ(1)
N
⋅ exp − iΘ(pσ(1), pσ(n))
=−
zσ(n)
zσ(1)
N
⋅ exp iΘ(pσ(n), pσ(1)) ,
where in the last line we used the antisymmetry of Θ. ◻
3.2 Toroidal boundary conditions
As mentioned in the first comment of Section 2.3, Bethe’s equations (BE) implies the important “boundary relation” (2.8) between the coefficients Aσ’s. This relation will allow us to perform a change of variables, stated in the proposition below, that will be instrumental in our proof. To express this formula in a compact way, set x0 = xN − N ≤ 0. Recall that
cP (Ψ⃗x,Ψ⃗y) =
n
M k=1
c21yk∉{xk−1,xk} (3.10)
8

for any ⃗y interlaced with ⃗x. We extend this formula to all sets (y1, . . . , yn) with x0 ≤ y1 ≤ x1 ≤ ⋅ ⋅ ⋅ ≤ xn−1 ≤ yn ≤ xn. Henceforth ⃗y is considered to satisfy the more relax condition above; in particular, we may have y1 < 0 and yj = yj+1 for certain j’s. Recall that τ is the cyclic permutation of {1, . . . , n} defined by τ (n) = 1 and τ (i) = i + 1 for each 1 ≤ i < n.
Proposition 3.3 (Change of variables formula). Assume that (p1, . . . , pn) ∈ Dn
∆ satisfies Bethe’s equations (BE). For any function f ∶ Sn → R,
Q σ∈Sn
Aσ f (σ) Z ⃗x
σ= Q σ∈Sn
Aσ f (σ ○ τ ) Zτ−1 ⃗x
σ , (3.11)
where τ −1 ⃗x ∶= (x0, x1, . . . , xn−1).
Proof By making the change of variables σ ↦ σ ○ τ , the LHS of (3.11) is equal to
Q σ∈Sn
A
(σ○τ)f (σ ○ τ ) Z ⃗x
(σ○τ). (3.12)
Then, (3.8) and the straightforward computation Z ⃗σx○τ = zN
σ(1)Zτ −1 ⃗x
σ complete the proof. ◻
Corollary 3.4. If p1, . . . , pn are solutions of Bethe’s equations (BE), then
V ψ(⃗x) = Q σ∈Sn
Aσ Q
x0≤y1≤x1≤y2≤⋅⋅⋅≤xn−1≤yn≤xn
cP (Ψ⃗x,Ψ⃗y)Z ⃗y
σ
 ́11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111 ̧111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111¶
Rσ
, (3.13)
where the second sum is such that the yi’s must all be distinct modulo N .
Proof Consider the two terms on the RHS of (3.2). By applying the change of variables formula of Proposition 3.3 and reindexing ⃗y, the second term is equal to
Q σ∈Sn
Aσ Q
x0≤y1≤0≤x1≤y2≤⋅⋅⋅≤xn−1≤yn≤xn
cP (Ψ⃗x,Ψ⃗y)Z ⃗y
σ(k).
Then, combining this expression with the first term on the RHS of (3.2) yields the desired expression for (V ψ)(⃗x). ◻
3.3 Encoding with words
The goal of this section is to provide an alternate sum representation for Rσ. For this part, we do not assume that (p1, . . . , pn) satisfy (BE). Computing directly Rσ is rather cumbersome, due to the restriction forcing the yi’s to be distinct. To illustrate the fact that the restriction on the yi’s to be distinct creates the main difficulty, let us start by computing a slightly different quantity obtained by considering the sum Rσ(∅) (the notation will become clear later) of the expression cP (-
Ψ⃗x,Ψ⃗y) ∏n
k=1 zyk
σ(k) for all y1, . . . , yn with x0 ≤ y1 ≤ x1 ≤ y2 ⋅ ⋅ ⋅ ≤ xn – even when the terms y1, . . . , yn are not distinct modulo N (the notation cP (Ψ⃗x,Ψ⃗y) in this case was defined in (3.10)). Recall that ⃗x is fixed and that the
9

sum below is only on the yi.
Rσ(∅) ∶= Q
x0≤y1≤x1≤y2≤⋅⋅⋅≤xn
cP (Ψ⃗x,Ψ⃗y) Z ⃗y
σ
=Q
x0≤y1≤x1≤y2≤⋅⋅⋅≤xn
n
M k=1
c21yk∉{xk−1,xk} zyk
σ(k)
=Q
x0≤y1≤x1
c21y1∉{x0,x1} zy1
σ(1) Q
x1≤y2≤x2
c21y2∉{x1,x2} zy2
σ(2) ⋅ ⋅ ⋅ Q
xn−1 ≤yn ≤xn
c21yn∉{xn−1,xn} zyn
σ(n)
=
n
M k=1
zxk−1
σ(k) + Q
xk−1 <y <xk
c2zy
σ(k) + zxk
σ(k)
=
n
M k=1
L(zσ(k))zxk−1
σ(k) + M (zσ(k))zxk
σ(k) . (3.14)
The last equality is given by the definition of L, M , and the basic formula on geometric series. Note that this equality only holds if the values of z1, . . . , zn are all different from 1 - i.e. no p1, . . . , pn is equal to 0. Let W ∶= {L, M }n. An element of W is called a word and is denoted by w = w1w2 . . . wn. Expanding the product in (3.14), we get
Rσ(∅) = Q w∈W
M k∶ wk=L
L(zσ(k))zxk−1
σ(k) ⋅ M
k∶ wk=M
M (zσ(k))zxk
σ(k). (3.15)
Importantly, the separation of the sums on the yi was possible because we dropped the restriction that y1, . . . , yn be distinct. In the general case, this is not possible; however, we will still manage to express Rσ using the strategy above via an inclusion-exclusion formula. For w ∈ W , define
rσ(w) ∶= M
k ∶ wkwk+1=M L
(M (zσ(k))L(zσ(k+1)) − 1) M
k ∶ wk−1wk=LL
L(zσ(k)) M
k ∶ wkwk+1=M M
M (zσ(k)),
(3.16)
Zσ(w) ∶= M k∶ wk=L
zxk−1
σ(k) ⋅ M
k∶ wk=M
zxk
σ(k).
(Note that the indexes are k − 1 and k in the second product of the definition of rσ(w), and k and k + 1 in the third.) The next lemma shows that Rσ itself can be written in terms of the quantities rσ(w) and Zσ(w).
Lemma 3.5. For any σ ∈ Sn and any p1, . . . , pn distinct and non-zero,
Rσ = Q w∈W
rσ (w)Zσ (w).
Proof of Lemma 3.5 For S ⊂ {1, . . . , n}, introduce
Rσ(S) ∶= Q
x0≤y1≤x1≤y2≤⋅⋅⋅≤xn i∈S⇒yi=xi=yi+1
cP (Ψ⃗x,Ψ⃗y) Z ⃗y
σ,
where yn+1 = y1 + N . The definition is coherent with the quantity Rσ(∅) introduced before the lemma. Note that Rσ(S) = 0 as soon as S contains two successive integers (with n + 1 being identified with 1) since xi ≠ xi+1. Thus, we will assume henceforth that S contains no two two successive integers. With this notation, the inclusion exclusion formula reads:
Rσ = Q
S⊂{1,...,n}
(−1)SSSRσ(S) . (3.17)
10

Now, the computation leading to (3.14) can be repeated for S ≠ ∅ to yield
Rσ(S) =
n
M
k∶{k−1,k}∩S=∅
L(zσ(k))zxk−1
σ(k) + M (zσ(k))zxk
σ(k) M
k∈S
zxk
σ(k) M
k ∶ k−1∈S
zxk−1
σ(k). (3.18)
This is because, whenever k ∈ S, the sums over yk and yk+1 are degenerate, including only one
term - namely zxk
σ(k). (The condition k − 1 ∈ S in the last product corresponds to the fact that yk+1 is equal to xk when k ∈ S.) Meanwhile, unrestricted yk’s result in geometric sums, as before. Fix S ⊂ {1, . . . , n} with no two consecutive values when considered periodically. As in (3.15), we may expand the first product in terms of words w = w1 . . . wn. However, only the choices of letters wi with i ∉ S and i−1 ∉ S matter. Thus, we expand Rσ(S) using words w ∈ {L, M }n, with the restriction that wk = M and wk-
+1 = L for k ∈ S; the choice of wk when {k − 1, k} ∩ S = ∅ is
free and indicates whether we pick the term L(zσ(k))zxk−1
σ(k) or M (zσ(k))zxk
σ(k) in the first product. For a word w, write S(w) for the set of indices k such that wkwk+1 = M L. Then the above restriction may be written as S(w) ⊃ S. Therefore,
Rσ(S) = Q
w∈W ∶
S(w)⊃S
M k∶ wk=L
{k−1,k}∩S=∅
L(zσ(k))zxk−1
σ(k) M
k∶ wk=M
{k−1,k}∩S=∅
M (zσ(k))zxk
σ(k) M
k∈S
zxk
σ(k) M
k ∶ k−1∈S
zxk−1
σ(k)
=Q
w∈W ∶
S(w)⊃S
M
k∶ wk=L k−1∉S
L(zσ(k)) M
k∶ wk=M k∉S
M (zσ(k)) Zσ(w).
In the second line, we have used that the considered words satisfy wk = M and wk+1 = L for all k ∈ S. Plugging this expression in (3.17) and interchanging the sums, we find
Rσ = Q w∈W
Q S⊂S(w)
(−1)SSS M
k∶ wk=L k−1∉S
L(zσ(k)) M
k∶ wk=M k∉S
M (zσ(k)) Zσ(w), (3.19)
where S ranges over sets with no two consecutive values. In order to conclude the proof, one needs to check that the term inside the brackets in the equation above is equal to rσ(w). To see this, expand the first product in the definition of rσ(w) (see (3.16)) in order to obtain
rσ(w) = Q S⊂S(w)
(−1)SSS M
k∈S(w)∖S
M (zσ(k))L(zσ(k+1)) M
k ∶ wk−1wk=LL
L(zσ(k)) M
k ∶ wkwk+1=M M
M (zσ(k)).
One may check that the expression above matches the bracketed term in (3.19), and this completes the proof. ◻
3.4 Proof of Theorem 2.2 when no entry is zero
In this section assume (p1, . . . , pn) ∈ Dn
∆ satisfies the Bethe equations (BE) and that pk ≠ 0 for every k. We will prove that V ψ(⃗x) = Λψ(⃗x). From Corollary 3.4 and Lemma 3.5 (which can be applied since the pk’s are nonzero), we already know that
V ψ(⃗x) = Q w∈W
Q σ∈Sn
Aσrσ(w)Zσ(w). (3.20)
We begin with an important lemma, proving that the sum above has many cancellations and reduces to a sum over exactly two words:
Lemma 3.6. Let W0 = {L⋯L, M ⋯M } be the set of constant words. Then,
V ψ(⃗x) = Q w∈W0
Q σ∈Sn
Aσ rσ (w)Zσ (w).
11

Proof Thanks to (3.20), it is sufficient to show that for any w ∈ W ∖ W0,
Q σ∈Sn
Aσrσ(w)Zσ(w) = 0.
Fix a particular word w ∈ W ∖ W0, and pick some m such that wmwm+1 = M L (we consider the integers modulo n, in particular n + 1 is identified with 1). By pairing the permutation σ with σ ○ (m, m + 1), we can write the sum displayed above as
1
2Q
σ∈Sn
Aσrσ(w)Zσ(w) + Aσ○(m,m+1)rσ○(m,m+1)(w)Zσ○(m,m+1)(w) . (3.21)
We wish to compute the ratio of the two terms in the summand above. First, it follows from the definitions of rσ(w) and Zσ(w) that
rσ○(m,m+1)(w)
rσ (w)
=
M (zσ(m+1))L(zσ(m)) − 1
M (zσ(m))L(zσ(m+1)) − 1 and Zσ○(m,m+1)(w)
Zσ (w)
=
zσ(1)
zσ(n)
N 1m=n
.
Furthermore, by Lemma 3.1, we have
Aσ○(m,m+1)
Aσ
=−
zσ(n)
zσ(1)
N1m=n M (zσ(m))L(zσ(m+1)) − 1
M (zσ(m+1))L(zσ(m)) − 1 .
Therefore, for any value of m
Aσ○(m,m+1)rσ○(m,m+1)(w)Zσ○(m,m+1)(w)
Aσ rσ (w)Zσ (w)
= −1, (3.22)
so that the sum (3.21) vanishes. ◻
We conclude the proof by computing the contributions corresponding to the constant words in the simple expression of V ψ(⃗x) provided by the previous lemma. The definition of Z ⃗σx implies
that Zσ(M ⋯M ) = Z ⃗σx and Zσ(L⋯L) = Z(τ−1)⋅⃗x
σ.
Hence, the sum corresponding to the word M ⋯M is equal to
Q σ∈Sn
Aσrσ(M ⋯M )Zσ(M ⋯M ) =
n
M i=1
M (zi) Q σ∈Sn
AσZ ⃗x
σ=
n
M i=1
M (zi) ψ(⃗x).
For the word L⋯L, the same computation gives
Q σ∈Sn
Aσrσ(L⋯L)Zσ(L⋯L) =
n
M i=1
L(zi) Q σ∈Sn
AσZτ −1 ⃗x
σ=
n
M i=1
L(zi) ψ(⃗x),
where the final equality follows from the change of variables formula (3.11).
3.5 Proof of Theorem 2.2 when one entry is zero
For this part, suppose (p1, p2, . . . , pn) ∈ Dn
∆ satisfies the Bethe equations (BE) and that one of p1, . . . , pn is null. Since p1, . . . , pn are distinct, there exists exactly one index ` with p` = 0. The symmetry under the permutation group allows us to assume without loss of generality that p1 = 0. Henceforth we work under this assumption. In the whole proof, we consider integers modulo n. In particular, n + 1 is considered equal to 1. Recall that W0 denotes the set of constant words, and introduce the set W1 of words w such that there e-
xists a unique index m with wmwm+1 = M L. These words are formed, when
12

regarded periodically, from a non-empty sequence of letters M followed by a non-empty sequence of letters L. We also set
ΠM ∶=
n
M k=2
M (zk).
The proof begins very much like in the previous section. Namely, we may apply (3.13), as it does not rely on the assumption that the pi’s are nonzero to find
V ψ(⃗x) = Q σ∈Sn
Aσ Rσ .
The computation of Rσ in Section 3.3 was based on the assumption that the pk’s are non-zero. To reuse those results, we introduce a new variable ε ~∈ {0, p2, . . . , pn} and set z = exp(iε). Our goal will be to take the limit as ε tends to 0 of the quantities defined below. Let Rεσ, rεσ(w) and Zσε(w) be the quantities defined in the previous section, but with ε instead of p1(= 0) and therefore z instead of z1 = exp(ip1) = 1. Lemma 3.5 (which does not rely on (BE)) gives
Rε
σ= Q w∈W
rε
σ (w)Z ε
σ(w). (3.23)
Observe that Rε(σ) is a polynomial in z and that it is equal to Rσ when z = 1. Thus, continuity guarantees that
V ψ(⃗x) = lεi→m0 Q
σ∈Sn
Aσ Rε
σ.
Note that the coefficients Aσ used here do not depend on ε; they are computed using (p1, . . . , pn). Before studying the limit when ε tends to 0, we use the word encoding of Rεσ and perform some algebraic manipulations as in the nonsingular case in order to obtain a simple expression for ∑σ AσRεσ. Summing (3.23) over all the permutations, we obtain
Q σ∈Sn
Aσ Rε
σ= Q
(w,σ)∈W ×Sn
gε
σ(w), where gε
σ(w) ∶= Aσrε
σ (w)Z ε
σ(w). (3.24)
We begin by applying the strategy from the proof of Lemma 3.6. Using suitable pairing, we obtain many cancellations in the sum above. This is based on the following relation. Let w ∈ W and σ ∈ Sn, and assume that there exists an index m such that wmwm+1 = M L and σ(m) and σ(m + 1) are different from 1. In this case, as in (3.22), we have
gε
σ○(m,m+1)(w)
gεσ (w)
= −1.
Thus, the contribution of any pair (w, σ) to (3.24) cancels out with that of (w, σ ○ (m, m + 1)). The only terms in (3.24) that do not vanish correspond to pairs (w, σ) such that a. w ∈ W0 and σ ∈ Sn is arbitrary or b. w ∈ W1 and σ ∈ Sn satisfies that σ(m) = 1 or σ(m + 1) = 1 for the unique m such that wmwm+1 = M L. We obtain
Q σ∈Sn
Aσ Rε
σ= Q
(w,σ) in Case a
gε
σ (w)
 ́111111111111111111111111111111111111111111111111111111 ̧111111111111111111111111111111111111111111111111111111¶
T0(ε)
+Q
(w,σ) in Case b
gε
σ (w)
 ́11111111111111111111111111111111111111111111111111111111 ̧111111111111111111111111111111111111111111111111111111111¶
T1(ε)
. (3.25)
We will compute the limits of the two terms T0(ε) and T1(ε) in Lemmas 3.7 and 3.8, respectively, and the proof of the Bethe ansatz will follow by summing the two results. Taking
13

the limit in the expressions above is not straightforward: each term gεσ(w) taken independently diverges like O(1~ε) as ε tends to 0 (since it contains a factor L(z) or M (z)). For the analysis of both T0(ε) and T1(ε), we will use suitable groupings to cancel these diverging terms, and study the constant order terms that remain after these cancellations. In T0(ε), we show that the diverging terms corresponding to the word L⋯L cancel with the diverging terms corresponding to the word M ⋯M , leavin-
g an extra non-vanishing term that comes from the toroidal boundary conditions. In T1(ε), the diverging part of gεσ(w) cancels with the one of gε
σ○(m,m+1)(w) (where
m is such that wmwm+1 = M L). In the non degenerate case, we used several times the relation (3.9) in Lemma 3.1 expressing Θ(pk, p`) in terms of the functions L, M . This relation is particularly useful to compute ratios between different Aσ. When one entry is vanishing, we will use the following straightforward identity: for every k ≥ 2
exp iΘ(0, pk) = − L(zk)
M (zk)
. (3.26)
Let us now move to the computation of the limits of the two terms in (3.24). We begin with the term T0(ε) which is the easiest one to compute.
Lemma 3.7. We have
lεi→m0 T0(ε) = (2 − c2)ΠM ψ(⃗x) + c2N ΠM Q
σ∈Sn σ(n)=1
AσZ ⃗x
σ.
Proof For every permutation σ ∈ Sn,
rε
σ(M ⋯M ) = M (z)ΠM .
Therefore, the contribution of the word M ⋯M can be written as
Q σ∈Sn
gε
σ(M ⋯M ) = M (z)ΠM Q σ∈Sn
Aσ Z ε
σ(M ⋯M ). (3.27)
Let us now move to the contribution of the word L⋯L. Using first (3.26), and then Bethe’s equations (BE) applied to (0, p2, . . . , pn), we obtain
n
M k=2
M (zk)
L(zk)
= (−1)n−1 exp −i
n
Q k=2
Θ(0, pk)
(BE)
= 1.
Thus, for any permutation σ,
rε
σ(L⋯L) = L(z)ΠM .
Defining f (σ) = zxk−1 when σ(k) = 1, we have
Zε
σ(L⋯L) = f (σ)Zτ−1 ⃗x
σ.
Using the two displayed equations above and then the change of variables formula (3.11), we can write the contribution of the constant word L⋯L as
Q σSn
gε
σ(L⋯L) = L(z)ΠM Q σ∈Sn
Aσf (σ)Zτ −1 ⃗x
σ
= L(z)ΠM Q σ∈Sn
Aσf (σ ○ τ −1)Z ⃗x
σ
= L(z)ΠM Q σ∈Sn
Aσ z−N 1σ(n)=1 Z ε
σ(M ⋯M ). (3.28)
14

Finally, putting the contributions (3.27) and (3.28) of the two words together, we find
T0(ε) = [M (z) + L(z)] ΠM Q σ∈Sn
Aσ Z ε
σ(M ⋯M ) + ΠM Q σ∈Sn
AσL(z) 1 − z−N1σ(n)=1 Zε
σ(M ⋯M ).
The proof follows by letting z tend to 1 and using the straightforward computations
L(z) + M (z) = 2 − c2, lzi→m1 Zε
σ(M ⋯M ) = Z ⃗x
σ and lzi→m1 L(z)(1 − z−N1σ(n)=1 ) = c2N 1σ(n)=1.
◻
The computation of the limit of T1(ε) is less direct and requires further algebraic manipulations. Note that this limit corresponds to terms which cancel exactly in the non-degenerate case, but which contribute in this case.
Lemma 3.8. We have that
lεi→m0 T1(ε) = c2ΠM N +
n
Q k=2
∂1Θ(0, pk) ψ(⃗x) − c2N ΠM Q
σ∈Sn σ(n)=1
AσZ ⃗x
σ.
This lemma, together with Lemma 3.7, implies the theorem in the singular case (note that the second term in the RHS above cancels exactly the second term in the expression of Lemma 3.7). The rest of the section is dedicated to proving Lemma 3.8.
Proof The proof is done in several steps. First, for (w, σ) a word, permutation pair contributing to T1, we will group gεσ(w) with gε
σ○(m,m+1)(w) (for m such that wmwm+1 = M L) to cancel the singular terms in gεσ(w) and gε
σ○(m,m+1)(w). While in the non-degenerate case, gεσ(w) + gε
σ○(m,m+1)(w) is exactly equal to 0, this is no longer the case here, and we will see that a new term written Dσgˆσ(w) appears in the limit ε ↘ 0, where
gˆσ(w) ∶= Aσc2 M k∶wk =L, σ(k)≠1
L(zσ(k)) M k∶wk =M σ(k)≠1
M (zσ(k)) Zσ(w) and
Dσ ∶= ∂1Θ(0, pσ(m)) + N 1m=n. (3.29)
Let us highlight the fact that we may see m (and therefore Dσ) as a function of σ, since m = σ−1(1) − 1. In particular, Dσ does not depend on w, as illustrated by the notation. Second, we will show that gˆσ(w) can be expressed in terms of gˆσ○[`,m](M ⋯M ), where [`, m] is a permutation depending on the word w only. Finally, we will combine the two previous claims to conclude the proof.
Claim 1. Fix 1 ≤ m ≤ n. Consider σ ∈ Sn with σ(m + 1) = 1 and w ∈ W1 with wmwm+1 = M L. Then,
lεi→m0 gε
σ(w) + gε
σ○(m,m+1)(w) = Dσgˆσ(w),
where Dσ and gˆσ(w) are defined in (3.29).
Proof of Claim 1. To prove the claim, we write
gε
σ(w) + gε
σ○(m,m+1)(w) = gε
σ(w) 1 +
gε
σ○(m,m+1)(w)
gεσ (w)
(3.30)
and establish the asymptotic behavior of the two terms in the product. First, note that
gε
σ(w) = gˆσ(w) ⋅
M (zσ(m))L(z) − 1
c2M (zσ(m))
= gˆσ(w) 1
iε + o 1
ε . (3.31)
15

The computation of the ratio in (3.30) is similar to previous computations. It follows from the definitions of rεσ(w) and Zσε(w) that
rε
σ○(m,m+1)(w)
rεσ (w)
=
M (z)L(zσ(m)) − 1
M (zσ(m))L(z) − 1
(3.9)
= exp iΘ(ε, pσ(m)) ,
and Zε
σ○(m,m+1)(w)
Zσε (w)
=z
zσ(n)
N 1m=n .
Furthermore, by Lemma 3.1, we have
Aσ○(m,m+1)
Aσ
= − zσ(n)
N1m=n exp iΘ(pσ(m), 0) = − zσ(n)
N1m=n exp − iΘ(0, pσ(m)) .
(We used that Θ(y, x) = −Θ(x, y).) Using the three equations above and a Taylor expansion, we find gε
σ○(m,m+1)(w)
gεσ (w)
= −1 + iεDσ + o(ε).
Plugging (3.31) and the equation above in (3.30) completes the proof of the claim. ◻
Claim 2. For w ∈ W1, let ` and m be the unique indexes such that w`w`+1 = LM and wmwm+1 = M L. If σ ∈ Sn satisfies σ(m + 1) = 1, we find that
gˆσ(w) = gˆσ○[`,m](M ⋯M ), (3.32)
where [`, m] is the permutation defined by
[`, m](i) =
⎧⎪⎪⎪⎪
⎨
⎪⎪⎪⎪⎩
` if i = m + 1,
i − 1 if i ∈ {m + 2, m + 3, . . . , ` − 1, `},
i otherwise.
Here, as in the rest of the proof, we use periodic notation for the set {m + 2, m + 3, . . . , ` − 1, `}.
We will prove this step by “zipping up" the letters L in the word w step by step: imagine a zipper positioned at m + 1, the pre-image of 1 by σ. This is also the position of the first letter L after the series of M in w. Move the zipper one step on the right, thus changing the first letter L to M in w and composing σ with the transposition exchanging the zipper index with the index on its right. Such a procedure will be shown to not affect the quantity gˆσ(w). By doing this again and again, we zip-
 off all the letters L and end up with the constant word M ⋯M . The composition of all the transpositions gives [`, m].
Proof of Claim 2. Let us start with analysing one move of the zipper. We will show that, for any 1 ≤ k ≤ n and any w ∈ W1 and σ ∈ Sn satisfying σ(k) = 1 and wk−1wk = M L, we have that
gˆσ(w) = gˆσ○(k,k+1)(w′), (3.33)
where w′ is the word obtained from w by changing wk = L to w′
k = M . To prove this fact, first observe that, by definition,
gˆσ○(k,k+1)(w′)
gˆσ (w)
=
Aσ○(k,k+1)
Aσ
⋅
M (zσ(k))
L(zσ(k))
⋅
Zσ○(k,k+1)(w′)
Zσ (w)
. (3.34)
By Lemma 3.1 and (3.26), we have
Aσ○(k,k+1)
Aσ
= − zσ(1)
−N1k=n exp iΘ(0, pσ(k+1)) = zσ(1)
−N 1k=n L(zσ(k))
M (zσ(k))
. (3.35)
16

Here, the ratio of the Z functions is not a priori simple; however, our requirement that σ(k) = 1 implies that
Zσ○(k,k+1)(w′)
Zσ (w)
= zσ(1)
N1k=n . (3.36)
Plugging (3.35) and (3.36) in (3.34) implies (3.33). To conclude observe that [`, m] = (m + 1, m + 2) ○ (m + 2, m + 3) ○ ⋅ ⋅ ⋅ ○ (` − 1, `) (note that the indexes are taken in Zn, so that ` may in fact be smaller than m). Applying (3.33) repeatedly proves the claim. ◻
We can now conclude the proof of Lemma 3.8. For each w ∈ W1, there are exactly two terms of the form gεσ(w) entering in the sum T1(ε). Claim 1 enables us to rewrite the limit of the sum of these two terms in terms of Dσ and gˆσ(w), so that
lεi→m0 T1(ε) = Q
m
Q σ∈Sn σ(m+1)=1
Q w∈W1 wm−1wm=M L
Dσ gˆσ (w).
For each word in the third sum, denote by ` the unique index such that w`w`+1 = LM . Note that, as w ranges over words in W1 with wm−1wm = M L, ` takes all the values of {1, . . . , n} different from m. Therefore, Claim 2 implies that
lεi→m0 T1(ε) = Q
m
Q
σ∈Sn∶ σ(m+1)=1
Q `∶ `≠m
Dσgˆσ○[`,m](M ⋯M ).
Using the change of variables σ ↦ σ ○ [`, m] and exchanging the sums, we obtain
lεi→m0 T1(ε) = Q
`
Q σ∈Sn σ(`)=1
gˆσ(M ⋯M ) Q m∶ m≠`
Dσ○[`,m]−1 .
For any σ as in the second sum, m + 1 is sent to 1 by σ ○ [`, m]−1. Thus
Q m∶ m≠`
Dσ○[`,m]−1 = Q m∶ m≠`
∂1Θ(0, pσ(m)) + N 1m=n = N 1σ(n)≠1 +
n
Q k=2
∂1Θ(0, pk),
where we used that ∑m≠` 1m=n = 1`≠n = 1σ(n)≠1. Thus
lεi→m0 T1(ε) = Q
σ∈Sn
gˆσ(M ⋯M ) N 1σ(n)≠1 +
n
Q k=2
∂1Θ(0, pk) .
The proof follows by observing that gˆσ(M ⋯M ) = c2ΠM AσZ ⃗σx. ◻
4 The six-vertex transfer matrix
The goal of this section is to prove Proposition 2.1. We begin by defining the transfer matrix in a standard way. Let G be the graph constructed by putting horizontal edges between neighboring vertices of ZN together with vertical edges above and below each vertex. For basis vectors Ψ⃗x and Ψ⃗y, let V (Ψ⃗x, Ψ⃗y) be the set of arrow configurations on G that obey the ice rule and whose vertical arrows coincide with Ψ⃗x on the bottom vertical edges and with Ψ⃗y on the top ones. Then, set
̃V (Ψ⃗x, Ψ⃗y) ∶= Q
ω∈V (Ψ⃗x,Ψ⃗y)
an1+n2 bn3+n4 cn5+n6 ,
where ni is the number of vertices of ZN with configuration i in ω.
17

Lemma 4.1. For any pair of basis vectors Ψ⃗x, Ψ⃗y,
SV (Ψ⃗x, Ψ⃗y)S =
⎧⎪⎪⎪⎪
⎨
⎪⎪⎪⎪⎩
2 if ⃗x = ⃗y,
1 if ⃗x ≠ ⃗y are interlaced,
0 otherwise.
Proof If ⃗x = ⃗y, there are clearly two configurations of arrows in V (Ψ⃗x, Ψ⃗x) corresponding to all horizontal arrows pointing left, or all horizontal arrows pointing right. Let us now assume that ⃗x ≠ ⃗y and V (Ψ⃗x, Ψ⃗y) is nonempty. By summing the ice-rule at every vertex, we immediately see that S⃗xS = S⃗yS. Let ω be a configuration in V (Ψ⃗x, Ψ⃗y). Call a vertex in ZN a source (resp. sink) if both vertical arrows enter (resp. exit) it; other vertices are neutral. Since Ψ⃗x ≠ Ψ⃗y, there exist-
s i such that Ψ⃗x(i) = 1 and Ψ⃗y(i) = −1, or in other word such that i is a source. By the ice rule at i, the two horizontal arrows adjacent to i must point outwards. This determines the orientation of three of the arrows adjacent to the vertex i+1. By considering the ice rule at the vertex i + 1, we observe that the fourth adjacent arrow is also determined. Continuing this way, all arrows of ω are determined, thus SV (Ψ⃗x, Ψ⃗y)S = 1. Moreover, the ice rule can be satisfied at i + 1 if and only if-
 i + 1 is either neutral or a sink. If i + 1 is neutral, i + 2 must in turn be neutral or a sink; if i + 1 is a sink, then i + 2 must be neutral or a source. Repeating this reasoning at every vertex of ZN , we find that the configuration obeys the ice rule if and only if the sinks and sources alternate. Note that this alternation must be taken periodically – i.e. if the first non-neutral vertex is a source, the final one must be a sink. This translates immediately to the condition of interlacement-
 between ⃗x and ⃗y.
◻
Corollary 4.2. The matrices V defined in (2.1) and ̃V are equal.
Proof We first consider the diagonal terms. As mentioned before, for any basis vector Ψ⃗x, V (Ψ⃗x, Ψ⃗x) contains exactly two configurations: those with all horizontal arrows point in the same direction. In both such configurations, no vertex is of type 5 or 6, and their weight is 1. We conclude that all diagonal terms of V are indeed equal to 2. For off-diagonal terms, the above lemma implies that ̃V (Ψ⃗x, Ψ⃗y) is zero if the two configurations are not interlacing, and equal to the weight of the s-
ingle configuration in V (Ψ⃗x, Ψ⃗y) if they are interlacing. Assuming Ψ⃗x and Ψ⃗y are interlacing, since a = b = 1, the weight of the unique configuration ω ∈ V (Ψ⃗x, Ψ⃗y) is obtained by counting the total number of vertices of type 5 and 6, i.e. sources and sinks. Observe that P (Ψ⃗x, Ψ⃗y) is the number of sources and sinks. Thus, ̃V (Ψ⃗x, Ψ⃗y) = cP (Ψ⃗x,Ψ⃗y) = V (Ψ⃗x, Ψ⃗y). ◻
Proof of Proposition 2.1 The symmetry and block-diagonal nature of V is evident from the formula that defines its entries. Pick M basis vectors Ψ⃗x1, . . . , Ψ⃗xM in Ω, and define Z(c; Ψ⃗x1, . . . , Ψ⃗xM ) to be the sum of the weights of all configurations on TN,M whose vertical arrows configuration between the ith and (i + 1)th row is equal to Ψ⃗xi for all i ∈ ZM . By definition of ̃V and the multiplicative nature of the weights,
Z(c; Ψ⃗x1 , . . . , Ψ⃗xM ) =
M
M i=1
̃V (Ψ⃗xi , Ψ⃗xi+1 ) =
M
M i=1
V (Ψ⃗xi , Ψ⃗xi+1 ) ,
where Ψ⃗xM+1 = Ψ⃗x1. Summing over all possible configurations of the vertical arrows, we find that
Z6V (1, 1, c) = Q
Ψ⃗x1 ,...,Ψ⃗xM
Z(c; Ψ⃗x1 , . . . , Ψ⃗xM ) = Q
Ψ ⃗x1
V M (Ψ⃗x1 , Ψ⃗x1 ) = Tr(V M ) . (4.1)
18

◻
5 The XXZ Model
Recall from Section 2 the notation related to the XXZ model, namely wi, Hi and the hamiltonian H. We prove Theorem 2.3 in two steps. We first show that there exists E such that Hψ = Eψ i.e. that either ψ is an eigenvector of H, or that it is 0. Then, we compute the value of E. The first step follows from showing that the matrices H and V commute (where V is the transfer matrix of the six-vertex model), and hence are simultaneously diagonalizable.
Lemma 5.1. We have V H = HV .
Proof We have proved in Proposition 2.1 that V is a symmetric matrix. Moreover, H is also symmetric, as we observe from its definition. Thus, it is sufficient to prove that V H is itself a symmetric matrix to obtain the lemma. For this proof, we suppress the dependence of basis vectors Ψ⃗x on ⃗x for notational convenience; we will instead consider Ψ as a function from ZN to {−1, 1}. For such Ψ, define
IΨ ∶= {i ∶ Ψ(i) ≠ Ψ(i + 1)} ,
where we use the periodic convention so that N + 1 ≡ 1. Then wi(Ψ) is nonzero whenever i ∈ IΨ. Note that, due to periodicity, the cardinality of this set is always even. Fix two basis vector Ψ′ ≠ Ψ. The definition of H and the symmetry of V imply that
(V H)(Ψ, Ψ′) − (V H)(Ψ′, Ψ) =∆ ⋅ V (Ψ, Ψ′) (SIΨS − SIΨ′S) +
+Q
i∈IΨ′
V (Ψ, wi(Ψ′)) − Q i∈IΨ
V (wi(Ψ), Ψ′) . (5.1)
Our aim is to prove that the above is zero for all Ψ and Ψ′. Recall the notation of Lemma 4.1: we place the arrow configurations associated with Ψ and Ψ′ below and above a copy of ZN , denote this by [Ψ, Ψ′]. A vertex i is called a sink (resp. source) if Ψ(i) ≠ Ψ′(i) and Ψ(i) = +1 (resp. −1). Otherwise, i is neutral. Then [Ψ, Ψ′] is interlacing if and only if the sources and sinks alternate, considered periodically. To start, assume that Ψ and Ψ′ are not interlacing. Then the first term in the rig-
ht-hand side of (5.1) is null. Moreover, all other terms also vanish unless there exists some i for which either [wi(Ψ), Ψ′] or [Ψ, wi(Ψ′)] is interlacing. Suppose this is the case and consider one such i; by symmetry we can assume [wi(Ψ), Ψ′] is interlacing. Then the action of wi on Ψ transforms an adjacent sink/source pair of [Ψ, Ψ′] which occurred in the “wrong” order into two neutral vertices, and thus creates the interlacing pair [wi(Ψ), Ψ′]. Therefore, Ψ(i) ≠ Ψ′(i) and Ψ(i + 1) ≠ Ψ′(i + 1), -
and i ∈ IΨ ∩ IΨ′. Furthermore, if [wi(Ψ), Ψ′] is interlacing, then so is [Ψ, wi(Ψ′)], as in both cases, the sink/source pair of [Ψ, Ψ′] is transformed by wi into a pair of neutral vertices. Finally, both of these interlacing pairs have the same weight, as they exhibit the same number of sinks and sources. Thus their contribution to (5.1) cancels out, and by summing over i the result is proved. Assume now that Ψ and Ψ′ are interlacing. If i ∈ IΨ ∖IΨ′, then [Ψ, Ψ′] has one neutral vertex and one sin-
k or source at the vertices i and i + 1. See Figure 2 for the four possibilities. In this case, in [wi(Ψ), Ψ′] we also find one of these four configurations at position i, i + 1. Moreover, the alternating sink/source structure is maintained in [wi(Ψ), Ψ′], and hence wi(Ψ) and Ψ′ are also interlacing. Finally, the number of sources and sinks of [wi(Ψ), Ψ′] is the same as in [Ψ, Ψ′], and we conclude that
V (wi(Ψ), Ψ′) = V (Ψ, Ψ′).
19

i i+1
Figure 2: The four possibilities when i ∈ IΨ ∖ IΨ′. Here Ψ is below and Ψ′ above. The first and second configurations are mapped by wi to the third and fourth, respectively, and vice-versa.
If i ∈ IΨ ∩IΨ′, there are two possible scenarios. First, suppose Ψ(i) ≠ Ψ′(i). Then [Ψ, Ψ′] has a sink/source pair at i and i + 1. Acting by wi on either configuration replaces the sink/source pair with a pair of neutral vertices. Thus, in this case
V (wi(Ψ), Ψ′) = V (Ψ, wi(Ψ′)) = 1
c2 V (Ψ, Ψ′).
Secondly, suppose that Ψ(i) = Ψ′(i). Then the vertices i, i + 1 are both neutral in [Ψ, Ψ′], and applying wi to either Ψ or Ψ′ transforms them into a sink/source pair. The order in which this sink and source pair occurs in [wi(Ψ), Ψ′] is reversed in [Ψ, wi(Ψ′)]. Thus, exactly one of these pairs is interlacing, and we find that
either V (wi(Ψ), Ψ′) = c2V (Ψ, Ψ′) and V (wi(Ψ), Ψ′) = 0
or V (Ψ, wi(Ψ′)) = c2V (Ψ, Ψ′) and V (Ψ, wi(Ψ′)) = 0.
Putting all this information together, through some straightforward algebra, we find that
(V H)(Ψ, Ψ′) − (V H)(Ψ′, Ψ) = V (Ψ, Ψ′) ⋅ (∆ − 1) (SIΨS − SIΨ′S) +
+ c2 ⋅ Q
i∈I
1
[Ψ,wi(Ψ′)] interlacing − 1[Ψ,wi(Ψ′)] interlacing , (5.2)
where I = {i ∶ i ∈ IΨ ∩ IΨ′, Ψ(i) = Ψ′(i)}. Thanks to the definition of ∆, the proof will be done if we can show that
Q
i∈I
1
[Ψ,wi(Ψ′)] interlacing − 1[Ψ,wi(Ψ′)] interlacing =
SIΨS − SIΨ′ S
2.
Define a run R ⊂ ZN to be a maximal connected subset of neutral vertices of [Ψ, Ψ′], taken periodically. Let l(R) and r(R) + 1 be the vertices to the left (resp. right) of the run R. Note that, for l(R) < i < r(R), i ∈ IΨ if and only if i ∈ IΨ′. Considering this, one may observe that the points of I are exactly the points of IΨ ∩IΨ′ that are contained inside some run. The endpoints of the run however satisfy l(R), r(R) ∈ IΨ △ IΨ′. A short analysis shows that any point of IΨ △ IΨ′ is of the form r(-
R) or l(R) for some run R. For a run R, write N (R) ∶= SR ∩ IS. Then the interlacement of Ψ and Ψ′ implies that
l(R) ∈ IΨ ⇐⇒ r(R) ∈
⎧⎪⎪ ⎨ ⎪⎪⎩
IΨ if N (R) is even,
IΨ′ if N (R) is odd.
Fix a run R and consider the sum
Q
i∈I ∩R
1
[Ψ,wi(Ψ′)] interlacing − 1[Ψ,wi(Ψ′)] interlacing . (5.3)
Assume that Ψ(l(R)) = +1 and that l(R) ∈ IΨ ∖IΨ′. Let i1, i2, . . . , iN(R) be the elements of I ∩R, ordered from left to right. By assumption, there is a source at l(R) and Ψ(i1) = Ψ′(i1) = −1. It
20

The run R with N (R) = 3
r(R) l(R)
Figure 3: An example of a run R. The red arrows are in IΨ and IΨ′.
is easy to see that, in this case, the configuration [Ψ, wi1(Ψ′)] has a sink at i1 and a source at i1 + 1, and thus is an interlaced configuration. However, Ψ(i2) = Ψ′(i2) = +1, and [wi2(Ψ), Ψ′] is interlaced - the opposite configuration as for i1. Repeating this, we see that the sum in (5.3) is zero when N (R) is even, and +1 when N (R) is odd. In the former case, r(R) ∈ IΨ′ ∖ IΨ, while in the latter, r(R) ∈ IΨ ∖ IΨ′. This is also valid when N (R) = 0. The same procedure implies that, when Ψ(l(R)-
) = +1 and l(R) ∈ IΨ′, the sum of (5.3) is −1 when N (R) is odd (thus when r(R) ∈ IΨ′ ∖ IΨ) and zero otherwise (i.e. when r(R) ∈ IΨ ∖ IΨ′). The same analysis may be applied when Ψ(l(R)) = −1. In conclusion,
Q R run
Q
i∈I ∩R
1
[Ψ,wi(Ψ′)] interlacing − 1[Ψ,wi(Ψ′)] interlacing
=Q R
(1l(R)∈IΨ + 1r(R)∈IΨ ) − (1l(R)∈IΨ′ + 1r(R)∈IΨ′ )
2.
Since every element of IΨ △ IΨ′ is the boundary of some run, this completes the proof. ◻
Proof of Theorem 2.3 Lemma 5.1 implies that Hψ = Eψ for some E. It is sufficient to consider any individual coordinate to evaluate E. We choose to evaluate the coefficient of Ψ
(2,...,2n), where we use the assumption n ≤ N ~2 to ensure that this coordinate vector is in Ω. Thanks to the very simple structure of H, we can explicitly compute the entry of Hψ corresponding to (2, . . . , 2n):
(Hψ)(2, . . . , 2n) =
(N − 4n)∆
2 ⋅ ψ(2, . . . , 2n)+
+
n
Q i=1
[ψ(x1, . . . , xi − 1, . . . , xn) + ψ(x1, . . . , xi + 1, . . . , xn)] .
Now, thanks to the form of ψ, we deduce that
(Hψ)(2, . . . , 2n) = Q
σ∈Sn
Aσ
n
M k=1
z2k
σ(k) ⋅ N ∆
2−
n
Q k=1
2∆ − 1
zσ(k)
− zσ(k) .
The bracketed term is independent of σ, and is equal to
E = N∆
2 −2
n
Q k=1
[∆ − cos(pk)] ,
as required. ◻
Note that the above computation is simple because of the choice of the coordinate (2, . . . , 2n) and the simple action of the Hamiltonian. One may be tempted to reverse the procedure of this
21

paper: prove that Hψ = Eψ directly, and then look for a shrewd choice of coordinate to compute Λ. Unfortunately, the transfer matrix V (n) is far less well-behaved than H. Even in the most symmetric case, (V (n)ψ)(2, . . . , 2n) is a sum over exponentially many different coordinates of ψ (as opposed to the linear number of terms above), many of which have dramatically different weights.
Acknowledgements The first and the third authors were funded by the IDEX grant of ParisSaclay. The fifth author was funded by a grant from the Swiss NSF. All the authors are partially funded by the NCCR SwissMap.
References
[1] R. J. Baxter, Partition function of the eight vertex lattice model, Annals Phys., 70 (1972), pp. 193–228.
[2] R. J. Baxter, Exactly solved models in statistical mechanics, Academic Press Inc. [Harcourt Brace Jovanovich Publishers], London, 1989. Reprint of the 1982 original.
[3] H. Bethe, Zur Theorie der Metalle I. Eigenwerte und Eigenfunktionen der Hnearen Atomkette, Zeitschrift für Physik, 71 (1931), pp. 205–226.
[4] N. M. Bogoliubov, A. G. Izergin, and V. E. Korepin, Quantum inverse scattering method and correlation functions, Cambridge university press, 1997.
[5] H. Duminil-Copin, M. Gagnebin, M. Harel, I. Manolescu, and V. Tassion, Discontinuity of phase transition for planar random-cluster and potts models with q > 4. In preparation, 2016.
[6] M. Jimbo and T. Miwa, Algebraic Analysis of Solvable Lattice Models, American Mathematical Soc., 1994.
[7] M. Karbach, K. Hu, and G. Müller, Introduction to the Bethe ansatz II, Computers in Physics, 12 (1998), pp. 565–573.
[8] , Introduction to the Bethe ansatz III. 2000.
[9] M. Karbach and G. Müller, Introduction to the Bethe ansatz I, Computers in Physics, 11 (1997), pp. 36–43.
[10] E. Lieb, Residual entropy of square ice, Physical Review, 162 (1967), p. 162.
[11] N. Reshetikhin, Lectures on the integrability of the 6-vertex model, ArXiv e-prints, (2010).
22

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:46.890Z
- **Text Length:** 54233 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
