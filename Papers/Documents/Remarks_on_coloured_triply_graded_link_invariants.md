# PDF Document: Cautis - 2017 - Remarks on coloured triply graded link invariants.pdf

**File Path:** Cautis - 2017 - Remarks on coloured triply graded link invariants.pdf

**Processed Date:** 2026-02-10T18:17:39.234Z

**File Size:** 345.33 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2725

**Title:** Remarks on coloured triply graded link invariants

**Collection:** Large Files

---

## Extracted Text Content

arXiv:1611.09924v2 [math.QA] 4 Oct 2017
REMARKS ON COLOURED TRIPLY GRADED LINK INVARIANTS
SABIN CAUTIS
Abstract. We explain how existing results (such as categorical sln actions, associated braid group actions and infinite twists) can be used to define a triply graded link invariant which categorifies the HOMFLY polynomial of links coloured by arbitrary partitions. The construction uses a categorified HOMFLY clasp defined via cabling and infinite twists. We briefly discuss differentials and speculate on related structures.
Contents
1. Introduction 1 2. Background: (sln, θ) actions, braid group actions and projectors 2 3. The category Kn 5 4. Link invariants 7 5. K-theory 11 6. Some differentials 11 7. Examples 15 8. Some remarks and speculation 17 Appendix A. Ψ-functors 18 References 20
1. Introduction
In [KR1, K] Khovanov and Rozansky defined a triply graded link invariant using matrix factorizations and subsequently Soergel bimodules. In their case the link is coloured by the partition (1) and the invariant categorifies the HOMFLY polynomial. In this paper we explain how existing tools can be used to extend this construction to links coloured by arbitrary partitions which categorifies the coloured HOMFLY polynomial. The idea is as follows. First one defines a 2-category Kn out of Soergel bimod-
ules and constructs a categorical (sln, θ) action on it (Sections 2 and 3). Combining this action with a trace 2-functor (Hochschild (co)homology) one obtains a triply graded invariant for links coloured by partitions with only one part (k) for k ∈ N. Finally, to deal with an arbitrary partition (k1, . . . , ki) one cables together i strands
labeled k1, . . . , ki and composes with a certain projector P−. We will call these (categorified) HOMFLY clasps to differentiate them from those in the Reshetikhin-Turaev context (RT clasps). Apart from some general results on (sln, θ) actions and associated braid group actions and projectors (see for instance [C1]) I have tried to keep this paper self-contained. Some example computations are worked out in Section 7.
1

2 SABIN CAUTIS
There are many papers in the literature on coloured HOMFLY homology and it is difficult to list them all without forgetting some. We try to recall some of the ones which are more closely related to this paper. There are several papers defining various generalities of triply graded homologies. In [MSV] Mackaay, Stosˇic ́ and Vaz work out the case of links labeled by the one part partition (2). In [WW] Webster and Williamson define a triply graded homology of links coloured by partitions with only o-
ne part. Their construction, which is geometric, is related to ours via the equivalence between perverse sheaves on finite flag varieties and (singular) Soergel bimodules. The same relationship appears (and is briefly discussed) in [CDK]. More recently, Wedrich [W] examines these constructions in the “reduced” case as well as some associated spectral sequences. The papers [H, AH] discuss the categorified HOMFLY clasps for partitions with parts of size at most one (i.e. coloured with (1k) for k ∈ N-
). As with our projectors, these are build as infinite twists. As far as I understand, Elias and Hogancamp aim to develop a more systematic, more general construction of such projectors. This will hopefully shed some light on the projectors P− and the various properties they (are expected to) satisfy. In [DGR, Ra] it was conjectured (and partially proved) that there exist certain differentials on triply graded link homology which recovers SL(N ) link homology. In Section 6 we discuss a differentia-
l dN for N > 0 which gives rise to an SL(N )-type link invariant. Somewhat surprising, the resulting homology seems to be finite-dimensional while categorifying SL(N )-representations of the form Symk(CN ). A homology of this form is predicted by the physical interpretation of knot homologies as spaces of open BPS states (see for instance [GS]) but does not show up in our earlier work on knot homologies ([CK1] and subsequent papers). In Section 8 we also speculate on defining differentials dN for -
N < 0 which should categorify SL(N )-representations of the form Λk(CN ). The author was supported by an NSERC discovery/accelerator grant.
2. Background: (sln, θ) actions, braid group actions and projectors
2.1. Notation. We work over an arbitrary field k. By a graded 2-category K we mean a 2-category whose 1-morphisms are equipped with an auto-equivalence 〈1〉 (so graded means Z-graded). We say K is idempotent complete if for any 2-morphism f with f 2 = f the image of f exists in K. For n ≥ 1 we denote by [n] the quantum integer qn−1 + qn−3 + · · · + q−n+3 + q−n+1 where q is a formal variable. By convention, for negative entries we let [−n] = −[n].
Moreover [n]! := [1][2] . . . [n] and
[
n
k
]
:= [n]!
[k]![n−k]! .
If f = faqa ∈ N[q, q−1] and A is a 1-morphism inside a graded 2-category K then we
write ⊕f A for the direct sum ⊕s∈ZA⊕fs〈s〉. For example,
⊕
[n]
A = A〈n − 1〉 ⊕ A〈n − 3〉 ⊕ · · · ⊕ A〈−n + 3〉 ⊕ A〈−n + 1〉.

REMARKS ON COLOURED TRIPLY GRADED LINK INVARIANTS 3
We will always assume N contains 0. Moreover, we will write Endi(A) as shorthand for Hom(A, A〈i〉) where i ∈ Z. Finally, if γi : Ai → Bi is a sequence of 2-morphisms in K for i = 1, . . . , k we will write γ1 . . . γk : A1 . . . Ak → B1 . . . Bk for the corresponding 2-morphism. We will denote by I the identity 2-morphism.
2.2. Categorical actions. (g, θ) actions were introduced in [C2] in order to simplify some of the earlier definitions from [KL, Rou, CL]. A (g, θ) action involves a target graded, additive, k-linear, idempotent complete 2-category K whose objects are indexed by the weight lattice of g. In this paper we only consider the case g = sln. The vertex set of the Dynkin diagram of sln is indexed by I = {1, . . . , n − 1}. However, it will be more convenient if the objects
K(k) of K are indexed by k = (k1, . . . , kn) ∈ Zn which we can identify with the weight lattice of gln. In this notation the root lattice is generated by αi = (0, . . . , −1, 1, . . . , 0)
for i ∈ I (this notation agrees with that in [C1]). We equip Zn with the standard nondegenerate bilinear form 〈·, ·〉 : Zn × Zn → Z (so that 〈αi, αj〉 is given by the standard Cartan datum for gln). We require that the 2-category K is equipped with the following.
• 1-morphisms: Ei1k = 1k+αi Ei and Fi1k+αi = 1kFi where 1k is the identity 1-morphism of K(k). • 2-morphisms: for each k ∈ Zn, a k-linear map span{αi : i ∈ I} → End2(1k).
We abuse notation and denote by θ ∈ End2(1k) the image of θ ∈ span{αi : i ∈ I} under the linear maps above. On this data we impose the following conditions.
(i) Endl(1k) is zero if l < 0 and one-dimensional if l = 0 and 1k 6= 0. Moreover, the space of maps between any two 1-morphisms is finite-dimensional. (ii) Ei and Fi are left and right adjoints of each other up to specified shifts. More precisely:
(a) (Ei1k)R ∼= 1kFi〈〈k, αi〉〉 + 1〉
(b) (Ei1k)L ∼= 1kFi〈−〈k, αi〉 − 1〉. (iii) We have {
EiFi1k ∼= FiEi1k
⊕
[〈k,αi〉] 1k if 〈k, αi〉 ≥ 0
FiEi1k ∼= EiFi1k
⊕
[−〈k,αi〉] 1k if 〈k, αi〉 ≤ 0.
(iv) If i 6= j ∈ I, then FjEi1k ∼= EiFj1k. (v) For i ∈ I we have
EiEi ∼= E(2)
i 〈−1〉 ⊕ E(2)
i 〈1〉
for some 1-morphism E(2)
i . Moreover, if θ ∈ span{αi : i ∈ I} then the map
IθI ∈ End2(Ei1kEi) induces a map between the summands E(2)
i 〈1〉 on either
side which is • nonzero if 〈θ, αi〉 6= 0 and • zero if 〈θ, αi〉 = 0. (vi) If α = αi or α = αi + αj for some i, j ∈ I with |i − j| = 1, then 1k+rα = 0 for r ≫ 0 or r ≪ 0.

4 SABIN CAUTIS
(vii) Suppose i 6= j ∈ I. If 1k+αi and 1k+αj are nonzero, then 1k and 1k+αi+αj are also nonzero.
Remark 2.1. In the rest of the paper the object K(k) will be nonzero (i.e. 1k 6= 0) if and only if all ki ≥ 0. Thus, conditions (vi) and (vii) are trivial to check.
In [C2, Theorem 1.1] we showed that such an (sln, θ) action must carry an action of the quiver Hecke algebras (KLR algebras). In particular, this gives us a decomposition
Eir ∼= ⊕
[r]!
E(r)
i and Fir ∼= ⊕
[r]!
F(r)
i
for certain 1-morphism E(r)
i and F(r)
i (called divided powers). These satisfy
(E(r)
i 1k)R ∼= 1λF(r)
i 〈r(〈k, αi〉 + r)〉
(E(r)
i 1k)L ∼= 1λF(r)
i 〈−r(〈k, αi〉 + r)〉.
2.3. (Categorical) braid group actions. The reason we are interested in (sln, θ) actions is that they can be used to define braid group actions [CK2], as we now recall. Suppose that, as above, we have an (sln, θ) action on a 2-category K. Denote by Kom(K) the bounded homotopy category of K (where objects are the same as in K, 1-morphisms are complexes of 1-morphisms which are bounded from above and below
and 2-morphisms are maps of complexes). We define Ti1k ∈ Kom(K) as
[
· · · → E(−〈k,αi〉+2)
i F(2)
i 〈−2〉 → E(−〈k,αi〉+1)
i Fi〈−1〉 → E(−〈k,αi〉)
i
]
1k if 〈k, αi〉 ≤ 0 [
· · · → F(〈k,αi〉+2)
i E(2)
i 〈−2〉 → F(〈k,αi〉+1)
i Ei〈−1〉 → F(〈k,αi〉)
i
]
1k if 〈k, αi〉 ≥ 0.
One can show the differentials must be the unique nonzero maps. Notice that these complexes are actually bounded on the left since 1k±rαi = 0 if r ≫ 0. The main result of [CK2] states that these complexes give us a braid group action. This fact categorifies a classical result of Lusztig [L, 5.2.1].
2.4. Categorified projectors. To obtain projectors let us first consider
Tω1k := (Tn−1)(Tn−2Tn−1) . . . (T2 . . . Tn−1)(T1 . . . Tn−1)1k
corresponding to a half twist in the braid group. In [C1, Section 5.3] we constructed a natural map 1k → T2ω1k and showed that there is a well-defined limit P−1k :=
liml→∞ T2ωl1k which lives in a certain subcategory Kom∗−(K) ⊂ Kom−(K) of the bounded above homotopy category (see [C1, Section 3.5] for more details).
Remark 2.2. To illustrate, if K was the category of Z-graded k-vector spaces then
⊕i≥0k[i]〈−i〉 would belong to Kom∗−(K) because ∑
i≥0(−1)iqi[k] converges to 1
1+q [k] (here [k] is the class in K-theory of the one-dimensional vector space). On the other
hand, ⊕i≥0k[i] would not belong to Kom∗−(K) because ∑
i≥0(−1)i[k] does not converge.
Having shown that P−1k is well-defined it is then easy to see that P−1k is idempotent,
meaning that P−P−1k ∼= P−1k. The main result of [C1] showed using an instance of
skew Howe duality that P− can be used to categorify all the clasps. The inspiration of

REMARKS ON COLOURED TRIPLY GRADED LINK INVARIANTS 5
using infinite twists to categorify clasps goes back to [Roz] who categorified Jonez-Wenzl projectors within Bar-Natan’s graphical formulation of Khovanov homology.
3. The category Kn
3.1. Categories and functors. We now define a 2-category Kn with an (sln, θ) action. For k ∈ N consider the affine space Ak := Spec k[x1, . . . , xk] where deg(xl) = 2 (the
grading is equivalent to endowing Ak with a k× action). The quotient Ak := Ak/Sk by the symmetric group Sk in k letters is isomorphic to Spec k[e1, . . . , ek] where el are the elementary symmetric functions and deg(el) = 2l. For a sequence k we write
Ak := Ak1 × · · · × Akn. Finally, we will denote by D(Ak) the derived category of k×equivariant quasi-coherent sheaves on Ak. We will denote by {·} a shift in the grading
induced by the k× action. In particular, this means that multiplication by el induces a map OAk → OAk {2l} since el has degree 2l. This is the same convention as in earlier papers such as [CK1]. For n ∈ N the 2-category Kn is defined as follows. The objects are the categories D(Ak). The 1-morphisms are all kernels on products Ak × Ak′ (with composition given by the convolution product ⋆) and the 2-morphisms are morphisms between kernels. The grading shift 〈1〉 is by definition {1}. Note that for a,-
 b ∈ N there exists a natural projection map π : Aa,b → Aa+b. This
map is finite of degree (a+b
a
). More generally, we can consider correspondences such as
(1) A(...,ki−r,r,ki+1,... )
π1
xqqqqqqqqqqq
❖❖❖❖π❖2❖❖❖❖❖❖'
Ak Ak+rαi
where αi = (0, . . . , −1, 1, . . . , 0) with a −1 in position i. We then define the following data.
• 1-morphisms
Ei1k := OA(...,ki−1,1,ki+1,... ) {ki − 1} ∈ D(Ak × Ak+αi )
1kFi := OA(...,ki−1,1,ki+1,... ) {ki+1} ∈ D(Ak+αi × Ak)
where we embed A(...,ki−1,1,ki+1,... ) ⊂ Ak × Ak+αi using π1 and π2 from (1) (taking r = 1 in this case). • A k-linear map θ : span{αi : i ∈ I} → End2(1k) where the image of αi is
given by mutiplication by e(i)
1 − e(i+1)
1 where e(i)
1 , e(i)
2 , . . . , e(i)
ki are the elementary
generators of the factor Aki inside Ak.
Remark 3.1. Although we use derived categories of quasi-coherent sheaves, we could restrict everything to abelian categories of coherent sheaves. This is because all the morphisms involved are flat and finite. However, it is natural to work with these larger categories because later we will apply Hochschild cohomology.
Theorem 3.2. The data above defines an (sln, θ) action on Kn.

6 SABIN CAUTIS
Proof. The fact that relations of an (sln, θ) action are satisfied is not difficult to prove and essentially follows from [KL, Section 6]. The fact that θ satisfies relation (v) comes
down to the following elementary fact. Consider k[x, y] as a k[x, y]S2 ∼= k[e1, e2] bimodule where S2 acts by switching x and y while (following our notation above) e1 = x + y, e2 = xy. Then, as a bimodule,
k[x, y] ∼= k[e1, e2] ⊕ k[e1, e2]{2}
and multiplication by x (or y) induces an endomorphism of k[x, y] which is an isomorphism between the summands k[e1, e2]{2} on either side. Perhaps one thing to note is that our choices of shifts in defining the Eis and Fis differ slightly from [KL]. However, the specific choice of shifts is not so important and is
mainly determined by the fact that the canonical bundle of Ak is ωAk ∼= OAk {dk} where
dk = − ∑
l kl(kl + 1).
It is not hard to show that the divided powers E(r)
i 1k and 1kF(r)
i are given by kernels
E (r)
i 1k := OA(...,ki−r,r,ki+1,... ) {r(ki − r)} ∈ D(Ak × Ak+rαi )
1kF (r)
i := OA(...,ki−r,r,ki+1,... ) {rki+1} ∈ D(Ak+rαi × Ak)
where again we embed A(...,ki−r,r,ki+1,... ) using (1) (we will not use this fact).
Remark 3.3. Note that there are three different gradings that show up. First there is 〈1〉 = {1} which corresponds to the grading induced by the k× action. Second there is
the cohomological grading [1] in Kom∗−(Kn). Third there is the cohomological grading [[1]] which is internal to D(Ak). This last grading only shows up when we apply the trace 2-functors described in Section 3.3.
3.2. The braid group action. Following Section 2.3 we define the braid group generators Ti1k ∈ Kom(Kn) as [
· · · → E (−〈k,αi〉+2)
i ⋆ F (2)
i {−2} → E (−〈k,αi〉+1)
i ⋆ Fi{−1} → E (−〈k,αi〉)
i
]
1k if 〈k, αi〉 ≤ 0 [
· · · → F (〈k,αi〉+2)
i ⋆ E (2)
i {−2} → F (〈k,αi〉+1)
i ⋆ Ei{−1} → F (〈k,αi〉)
i
]
1k if 〈k, αi〉 ≥ 0
We also get the corresponding projectors P−1k ∈ Kom∗−(Kn). Following the construction in [C1, Section 7.1] it is useful to also define the elements
Ti′1k :=
{
Ti1k[−ki+1]{ki+1 + kiki+1} if 〈k, αi〉 ≤ 0 Ti1k[−ki]{ki + kiki+1} if 〈k, αi〉 ≥ 0.
Notice that in contrast to [C1, Section 7.1] we have an extra shift of {kiki+1}. These Ti′
also generate a braid group action but are better behaved with respect to E’s and F’s since, using [C1, Corollary 7.3] and [C1, Corollary 4.6], we have
(2) Ti′ ⋆ Tj′ ⋆ Ei ∼= Ej ⋆ Ti′ ⋆ Tj′ and Ti′ ⋆ Tj′ ⋆ Fi ∼= Fj ⋆ Ti′ ⋆ Tj′ if |i − j| = 1
(3) Ti′ ⋆ Ei ∼= Fi ⋆ Ti′ and Ti′ ⋆ Fi ∼= Ei ⋆ Ti′.

REMARKS ON COLOURED TRIPLY GRADED LINK INVARIANTS 7
3.3. Trace 2-functors. For any l ∈ N we now define a 2-functor Ψl : Kn → Kn+1. This functor should be thought of as adding a strand labeled l. At the level of objects Ψl takes D(Ak) to D(Ak,l). Given a 1-morphism M ∈ D(Ak × Ak′ ) we define
(4) Ψl(M) := ∆∗π∗(M) ∈ D(Ak,l × Ak′,l)
where π∗ and ∆∗ are pullback and pushforward with respect to the natural projection and diagonal maps
π : Ak × Al × Ak′ → Ak × Ak′ and ∆ : Ak × Al × Ak′ → (Ak × Al) × (Ak′ × Al).
Given a 2-morphism f : M → M′ we define Ψl(f ) := ∆∗π∗(f ). Using Corollary A.2 (see the Appendix) this defines a 2-functor Ψl : Kn → Kn+1. It is not difficult to see
that Ψl(Ei1k) ∼= Ei1k,l and Ψl(1kFi) ∼= 1k,lFi.
We can likewise define a 2-functor Ψ′l : Kn+1 → Kn. On objects it takes D(Ak,l)
to D(Ak). All other objects, meaning D(Ak,l′) where l 6= l′, are mapped to zero. On 1-morphisms it acts by
D(Ak,l × Ak′,l) ∋ N 7→ Ψ′l(N ) := π∗∆∗(N ) ∈ D(Ak × Ak′).
By Propositions A.3 we also have
(5) Ψ′l(N ⋆ Ψl(M)) ∼= Ψ′l(N ) ⋆ M
where M ∈ D(Ak × Ak′) and N ∈ D(Ak,l × Ak′,l). If we denote by • = Spec k then D(•) is the category of complexes of (possibly infinite-dimensional) graded vector spaces. For any k we define
τ : D(Ak × Ak) → D(•) where M 7→ Ψ′k1 ◦ · · · ◦ Ψ′kn(M).
Note that this is just the Hochschild homology HH∗(M) of M.
4. Link invariants
Consider an oriented link L whose components are coloured by partitions. For now we assume that each such partition has only one part, meaning it is of the form (k) for some k ∈ N. Such a link can be given as the closure ̂β of a coloured braid β, where we visualize the strands of this braid vertically with the top and bottom labeled by the same sequence k. To a positive crossing exchanging strands i and i + 1 (i.e. the strand starting at i crosses over the one starting at i + 1) we associate the 1-
-morphism
Ti′ ∈ Kom∗−(D(Ak × Asi·k))
as defined in Section 3.2, where si acts on k by switching ki and ki+1. Composing these
1-morphisms gives a complex Tβ′ ∈ Kom∗−(D(Ak × Ak′)). The invariant associated to the
closure ̂β of the braid is then τ (Tβ′) ∈ Kom∗−(D(•)). To deal with partitions with more than one parts we cable strands together and use the projector P−. More precisely, given a strand labeled by a partition k(·)
i = (k(1)
i≤
· · · ≤ k(p)
i ), we replace it with p strands labeled k(1)
i , . . . , k(p)
i together with the projector
P −1k(·)
i
on these strands.

8 SABIN CAUTIS
Theorem 4.1. Suppose L = ̂β where β is a braid whose strands are coloured by par
titions. Then, up to an overall grading shift, H(L) := τ (Tβ′) ∈ Kom∗−(D(•)) defines a triply graded link invariant.
Remark 4.2. In order to obtain a homology which is invariant on the nose (not just up to shifts) one needs to shift the functor Ψ′l by [ l
2 ][[− l
2 ]] and the definition of a T
switching two strands labeled l by [ l
2 ][[− l
2 ]].
Before we can prove Theorem 4.1 we need the following Lemma.
Lemma 4.3. For T1 ∈ Kom∗−(D(A1,1 × A1,1)) we have
Ψ′1(T1) ∼= O∆[[1]]{−2} and Ψ′1(T1−1) ∼= O∆{2}[−1]
inside Kom∗−(D(A1 × A1)).
Remark 4.4. The key to Lemma 4.3 is the exact triangle OS → O∆ → OT [[1]]{−2} where S and T are the loci inside Ak,1,1 × Ak,1,1 given by (7) on the last two strands. The argument in the proof shows in fact that for P ∈ Kom(D(Ak,1 × Ak,1)) we have an isomorphism
(6) Ψ′1((OS → O∆) ⋆ Ψ1(P)) −∼→ Ψ′1(OT [[1]]{−2} ⋆ Ψ1(P))
inside Kom(D(Ak,1 × Ak,1)).
Proof. On A1,1 × A1,1 consider the following subvarieties:
(7) ∆ := {(x, y, x, y)}, T := {(x, y, y, x)} and S := T ∪ ∆.
Then T1 ∼= [OS → O∆] and T1−1 ∼= [O∆ → OS {2}] where in both cases O∆ is in
cohomological degree zero. The result will follow if we can show that
[Ψ′1(OS ) → Ψ′1(O∆)] ∼= [0 → O∆[[1]]{−2}]
[Ψ′1(O∆) → Ψ′1(OS{2})] ∼= [0 → O∆{2}]
in the homotopy category Kom∗−(D(A1 × A1)).
We will prove the first assertion (the second follows similarly). Note that S ∩ T ⊂ T
is the divisor cut out by x = y. Thus, OT (−S ∩ T ) ∼= OT {−2} and we have the exact
triangle OT {−2} → OS → O∆. Recall that Ψ′1(·) = π∗∆∗(·) where π and ∆ are the
natural maps
A1 × A1
←π− A1 × A1 × A1 −∆→ A1,1 × A1,1.
Now, O∆ ∈ D(A1,1 × A1,1) has a resolution
OA1,1×A1,1 {−2} ·(y1−y2)
−−−−−→ OA1,1×A1,1 → O∆
which means that ∆∗O∆ ∼= O∆′ ⊕ O∆′ [[1]]{−2} where ∆′ ⊂ A1 × A1 × A1 is the locus
(x, y, x). Moreover, π∗(O∆′ ) ∼= O∆ ⊗k k[y] ∈ D(A1 × A1). Hence
(8) Ψ′1(O∆) = π∗∆∗O∆ ∼= π∗(O∆′ ⊕ O∆′ [[1]]{−2}) ∼= (O∆ ⊕ O∆[[1]]{−2}) ⊗k k[y].
On the other hand, ∆∗OT ∼= O{(x,x,x)} which means that
Ψ′1(OT {−2}) = π∗∆∗OT {−2} ∼= π∗O{(x,x,x)}{−2} ∼= O∆{−2}.

REMARKS ON COLOURED TRIPLY GRADED LINK INVARIANTS 9
Thus, the exact triangle Ψ′1(OS) → Ψ′1(O∆) → Ψ′1(OT {−2}[1]) becomes
Ψ′1(OS) −f→ O∆ ⊗k k[y] ⊕ O∆[[1]]{−2} ⊗k k[y] → O∆[[1]]{−2}.
Now H0(Ψ′1(OS)) ∼= π∗L0∆∗OS ∼= π∗O∆′ ∼= O∆ ⊗k k[y] and f induces an isomorphism
in this degree. Thus, from the long exact sequence we get
(9) H∗(Ψ′1(OS )) =


O∆ ⊗k k[y] if ∗ = 0, O∆{−4} ⊗k k[y] if ∗ = −1, 0 otherwise.
It is easy to see that on A1 × A1 we have End2(O∆{·} ⊗k k[y]) = 0 so
Ψ′1(OS) ∼= (O∆ ⊕ O∆[[1]]{−4}) ⊗k k[y].
Hence, using a version of the Gaussian Elimination Lemma [C1, Lemma 3.2], we combine (8) and (9) to obtain
(10) [Ψ′1(OS ) → Ψ′1(O∆)] ∼= [0 → O∆[[1]]{−2}].
Proof of Theorem 4.1. We already know that β 7→ Tβ′ satisfies the braid relations. It
remains to check that τ (Tβ′1 ⋆ Tβ′2) ∼= τ (Tβ′2 ⋆ Tβ′1) and the Markov move (stabilization).
The first relation is a standard property of Hochschild homology (in fact the more
general trace property τ (A ⋆ B) ∼= τ (B ⋆ A) holds for any kernels A, B).
To prove the Markov move first note that since projectors P− move freely through crossings it suffices to prove the Markov move when the extra strand is coloured by a
partition (l). In this case, for any P ∈ Kom∗−(D(Ak × Ak) we claim that
(11) τ (Tn′ ⋆ Ψl(P)) ∼= τ (P)[−l][[l]] and τ ((Tn′)−1 ⋆ Ψl(P)) ∼= τ (P).
We prove the isomorphism on the left by induction on l (the right one is similar). For
P ∈ Kom∗−(D(Ak × Ak)) we have the following algebraic computation
⊕
[l]
τ (Tn′ ⋆ Ψl(P)) ∼= ⊕
[l]
τ (Tn′+1 ⋆ Tn′ ⋆ Tn′+2 ⋆ Tn′+1 ⋆ (Ψ0 ◦ Ψl ◦ Ψ0)(P))
(12)
(13) ∼= τ (Tn′+1 ⋆ Tn′ ⋆ Tn′+2 ⋆ Tn′+1 ⋆ Fn+2 ⋆ En+2 ⋆ (Ψ0 ◦ Ψl ◦ Ψ0)(P))
(14) ∼= τ (Fn ⋆ Tn′+1 ⋆ Tn′ ⋆ Tn′+2 ⋆ Tn′+1 ⋆ En+2 ⋆ (Ψ0 ◦ Ψl ◦ Ψ0)(P))
(15) ∼= τ (En+2 ⋆ Fn ⋆ Tn′+1 ⋆ Tn′ ⋆ Tn′+2 ⋆ Tn′+1 ⋆ (Ψ1 ◦ Ψl−1 ◦ Ψ0)(P))
(16) ∼= τ (Fn ⋆ Tn′+1 ⋆ Tn′ ⋆ Tn′+2 ⋆ Tn′+1 ⋆ En ⋆ (Ψ1 ◦ Ψl−1 ◦ Ψ0)(P))
(17) ∼= τ (Fn ⋆ Tn′+1 ⋆ Tn′ ⋆ Tn′+1 ⋆ En ⋆ (Ψl−1 ◦ Ψ0)(P))[−1][[1]]
(18) ∼= τ (Fn ⋆ Tn′ ⋆ Tn′+1 ⋆ Tn′ ⋆ En ⋆ (Ψl−1 ◦ Ψ0)(P))[−1][[1]]
(19) ∼= τ (Fn ⋆ Tn′ ⋆ Tn′ ⋆ En ⋆ Ψ0(P))[−l][[l]]
(20) ∼= τ (Tn′ ⋆ En ⋆ Fn ⋆ Tn′ ⋆ Ψ0(P))[−l][[l]]

10 SABIN CAUTIS
∼=
⊕
[l]
(21) τ (P)[−l][[l]].
Here we added two strands labeled 0 to obtain the first isomorphism, used (2) twice to obtain (14), used the Markov relation to obtain (15), used that
En+2 ⋆ Fn ⋆ Tn′+1 ⋆ Tn′ ⋆ Tn′+2 ⋆ Tn′+1 ∼= Fn ⋆ En+2 ⋆ Tn′+1 ⋆ Tn′+2 ⋆ Tn′ ⋆ Tn′+1
∼= Fn ⋆ Tn′+1 ⋆ Tn′+2 ⋆ Tn′ ⋆ Tn′+1 ⋆ En
to get (16), used (11) with Ψ1 to obtain (17) and with Ψl−1 to obtain (19), applied (3)
twice to obtain (21) and used that (Ti′)2 is the identity if one of the strands it acts on is labeled 0 to get (21). Thus, (11) follows by induction if we can prove the base case l = 1. In this case we have
τ (Tn′ ⋆ Ψ1(P)) ∼= τ (Ψ′1(Tn′ ⋆ Ψ1(P))) ∼= τ (Ψ′1(Tn′) ⋆ P)
so it suffices to show that Ψ′1(Tn′) ∼= O∆[−1][[1]]. This follows from Lemma 4.3 (since
Tn′ = Tn[−1]{2} in this case).
Remark 4.5. For those familiar with webs, see for instance [CKM], the algebraic computation above can be summarized as follows. First break up the strand labeled l and then use that “trivalent vertices” move naturally through crossings together with the Markov move. Figure 1 illustrates this procedure where the box denotes an arbitrary braid (we simplify by omitting the closure of each diagram).
Figure 1. The Markov move involving a strand labeled l.

REMARKS ON COLOURED TRIPLY GRADED LINK INVARIANTS 11
5. K-theory
Recall that to a link L whose strands are coloured by partitions one can associate the coloured HOMFLY polynomial PL(q, a) ∈ k(q, a). We now explain why the invariant from Theorem 4.1 categorifies the coloured HOMFLY polynomial. This is normalized so that if L = ©(k) (the unknot labeled by k) then
(22) PL(q, a) =
k ∏
l=1
aq−l+1 − a−1ql−1
q−l − ql .
Remark 5.1. Note that for notational convenience we use the transpose notation, meaning that what we call λ would normally be the transpose partition. For example, our partition (k) would be instead (1k) (and vice versa).
On the other hand, we can consider the Poincare ́ polynomial PL(q, a, t) of H(L) from Theorem 4.1. Here the shifts {1}, [[1]] and [1] are kept track of by formal variables q, −a2, t respectively.
Proposition 5.2. For a coloured link L, the invariants PL(q, a) and PL(q, aq, −1) agree,
up to an explicit factor amqn.
Proof. In the rest of the proof we will ignore extra factors amqn. Let us first suppose that L is the closure of a braid β coloured by partitions (k) with only one part. One can compute PL(q, a) from β by applying a trace. Moreover, as explained (for instance) in [CKM, Section 6] one can break down the crossings in L into web diagrams since the crossing element is a linear combination of webs. This reduces the evaluation of PL(q, a) to evaluating this trace on webs diagrams. As usual one views the-
 trace of a web diagram as the closure on that diagram on the annulus. The algebra of webs on the annulus is generated (as an algebra) by unknots labeled by one part partitions (where multiplication is given by glueing one annulus inside the other). This reduces the computation of PL(q, a) to the case L = ©(k) (which is described in (22)). Similarly, the evaluation of PL(q, a, −1) can be reduced to the case L = ©(k). This case is computed in Section 7.1 and agrees with (22) once you replace a with-
 aq. This completes the proof when L contains partitions with only one part. To deal with arbitrary partitions we will show that PL(q, qN ) = PL(q, qN+1, −1) for all N > 0 (i.e. the specializations a = qN for all N > 0). Note that PL(q, qN ) recovers the corresponding SL(N ) Reshetikhin–Turaev (RT) invariant and that we know PL(q, qN ) =
PL(q, qN+1, −1) are equal if L is coloured by one part partitions. On the other hand, in [C1] we showed that, when evaluating RT invariants, the projectors (clasps) for arbitrary partitions can be constructed as infinite twists. Since this construction only uses the braiding group action it follows that PL(q, qN ) = PL(q, qN+1, −1) holds for any L.
6. Some differentials
To simplify notation we will omit the {·} grading in this section. We also fix N > 0. Note that
HH1(Ak) = Ext1
Ak×Ak (∆∗OAk , ∆∗OAk ) ∼= ⊕ik[x1, . . . , xk]∂xi

12 SABIN CAUTIS
so that
γ1k := ∑
i
xiN ∂xi ∈ HomAk×Ak (∆∗OAk , ∆∗OAk [1]).
Since this element is Sk-invariant it descends to HH1(k[e1, . . . , ek]). We denote by
γk ∈ HomAk×Ak (∆∗OAk , ∆∗OAk [1])
the corresponding element obtained by descending γ1k1 ⊗ · · · ⊗ γ1kn .
Now, given a braid β with endpoints marked k, we have
τ (Tβ′) = HH∗(Tβ′) ∼= Ext∗Ak×Ak (∆∗ω−1
Ak [[− dim Ak]], Tβ′)
where ωAk denotes the canonical bundle. Thus, we have an action of HH1(Ak) coming from precomposing on the left with
HH1(Ak) ∼= HomAk×Ak (∆∗ω−1
Ak , ∆∗ω−1
Ak [1]).
We denote by dN the action of γk. Note that d2N = 0 since γk belongs to HH1. Moreover,
dN commutes with the differential d used in the definition of the complex Tβ′ because of associativity of composition. Thus, we get a bicomplex with differentials d and dN .
Theorem 6.1. Suppose L = ̂β where β is a coloured braid. If we denote by HN (L) the
cohomology of τ (Tβ′) equipped with the total differential d + dN then, up to an overall grading shift, HN (L) defines a doubly graded link invariant.
In the remainder of this section we prove this result. Sometimes we will write HN (Tβ′)
instead of HN (L) where L = ̂β.
If β and β′ are equivalent braids, then Tβ′ is homotopic to Tβ′′, which means that
HN (Tβ′) ∼= HN (Tβ′′). Next, to prove invariance under conjugation, we must show that
HN (Tβ′1 ⋆ Tβ′2) ∼= HN (Tβ′2 ⋆ Tβ′1) for any braids β1 and β2. This follows as in the proof of
Theorem 4.1 together with the fact that for any braid β we have
IIγk = γk′ II ∈ Hom(∆∗OAk′ ⋆ Tβ′ ⋆ ∆∗OAk , ∆∗OAk′ ⋆ Tβ′ ⋆ ∆∗OAk [1])
where k and k′ label the bottom and top strands of β (this equality follows from Lemma 6.3 below).
Remark 6.2. Here we use the convention mentioned at the end of Section 2.1. For instance, IIγk denotes the map induced by the identity on the first two factors of
∆∗OAk′ ⋆ Tβ′ ⋆ ∆∗OAk and by γk on the last (right) one.
Lemma 6.3. Consider E ∈ D(Ai−1,j+1 × Ai,j). Then
IIγi,j = γi−1,j+1II ∈ Hom(∆∗OAi−1,j+1 ⋆ E ⋆ ∆∗OAi,j , ∆∗OAi−1,j+1 ⋆ E ⋆ ∆∗OAi,j [1])
and likewise if we replace E with F.
Proof. E is the kernel inducing the correspondence
Ai × Aj
←π1− Ai−1 × A1 × Aj
−π2 → Ai−1 × Aj+1.
On the other hand IIγi,j is the element obtained by descending γ1i+j via the map
Ai+j → Ai−1 × A1 × Aj
−π1 → Ai × Aj .

REMARKS ON COLOURED TRIPLY GRADED LINK INVARIANTS 13
Likewise γi−1,j+1II is the map obtained by descending γ1i+j again via the map
Ai+j → Ai−1 × A1 × Aj
−π2 → Ai−1 × Aj+1.
The result follows.
Finally, we need invariance under the Markov move. As in the proof of Theorem 4.1 we can significantly reduce what we must show. First, since projectors pass through crossings we can assume each strand is coloured by a partition (l) with only one part. By breaking up this strand into l strands coloured by 1 and using Lemma 6.3 we can further reduce to the case l = 1. Using the homotopy equivalence from (6) we know that
HN (Ψ′1(Tn′⋆Ψ1(P))) = HN (Ψ′1((OS → O∆)⋆Ψ1(P))) −∼→ H−N (Ψ′1(OT [[1]]{−2}⋆Ψ1(P)))
where P ∈ Kom(D(Ak,1 × Ak,1)). Recall that we have the standard exact sequence
OT {−2} → OS → O∆
where S, T are the varieties corresponding to the last two strands. Moreover, Ψ′1(OT ⋆
Ψ1(P)) −∼→ P and Lemma 6.4 implies that HN (Tn′ ⋆ Ψ1(P)) ∼= HN (P) (up to a grading shift). This completes the proof of Theorem 6.1.
Lemma 6.4. For P ∈ Kom(D(Ak,1 × Ak,1)) the following diagram commutes
Extj
Ak,1,1×Ak,1,1 (∆∗S−1
Ak,1,1 , OT ⋆ Ψ1(P)) γk,1,1 /
φ
Extj+1
Ak,1,1×Ak,1,1 (∆∗S−1
Ak,1,1 , OT ⋆ Ψ1(P))
φ′
Extj
Ak,1×Ak,1 (∆∗S−1
Ak,1 , P) γk,1 / Extj+1
Ak,1×Ak,1 (∆∗S−1
Ak,1 , P)
where S−1
X := ω−1
X [[− dim X]] for a variety X and where isomorphisms φ and φ′ are
induced by the isomorphism Ψ′1(OT ⋆ Ψ1(P)) −∼→ P.
Proof. As before, we will ignore shifts in {·}. Note that the left adjoint of Ψ′1 : Ak,1 → Ak
is the functor (Ψ′1)L(·) = ∆∗(π∗(·) ⊗ p∗S−1
A1 )
where p : Ak × A1 × Ak → A1 is the projection. Now take
α ∈ Extj
Ak,1,1×Ak,1,1 (∆∗S−1
Ak,1,1 , OT ⋆ Ψ1(P))
and consider the following diagram
∆
∗ S −1
Ak,1 [[−1]]
γk,1 /
adj
∆
∗ S −1
Ak,1
adj
φ(α)
( Ψ
′
1 (Ψ′
1 )L (∆∗ S −1
Ak,1 )[[−1]]
Ψ′
1 (Ψ′
1)L(γk,1) / Ψ′
1 (Ψ′
1 )L (∆∗ S −1
Ak,1 )
Ψ′
1(α) / Ψ′
1(OT ⋆ Ψ1(P))[[j]] ∼ / Ψ′
1(OT ) ⋆ P[[j]]
Note that (Ψ′1)L(S−1
Ak,1 ) = S−1
Ak,1,1 which explains how Ψ′1(α) acts. The left square com
mutes since adjunction is a natural transformation. The triangle on the right commutes by the definition of φ.

14 SABIN CAUTIS
The composition along the top is the map α 7→ φ(α) ◦ γk,1. On the other hand, the composition along the bottom row is α 7→ φ′(α ◦ (Ψ′1)L(γk,1)). So it suffices to show
that φ′(α ◦ (Ψ′1)L(γk,1)) = φ′(α ◦ γk,1,1). The difference γk,1,1 − (Ψ′1)L(γk,1) is equal to
xnN+1∂xn+1 so it remains to show that φ′(α ◦ xnN+1∂xn+1 ) = 0.
The map φ′(α ◦ xnN+1∂xn+1 ) is given by the composition
∆∗S−1
Ak,1
adj
−−→ Ψ′1(Ψ′1)L(∆∗S−1
Ak,1 ) = Ψ′1(∆∗S−1
Ak,1,1 ) Ψ′1(xnN+1∂xn+1 )
−−−−−−−−−−→ Ψ′1(∆∗S−1
Ak,1,1 [[1]])
Ψ′1(α)
−−−−→ Ψ′1(OT ⋆ Ψ1(P))[[j + 1]] −∼→ P[[j + 1]].
One can check that
Ψ′1(Ψ′1)L(∆∗S−1
Ak,1 ) ∼= ∆∗S−1
Ak,1 ⊗k k[xn+1] ⊕ ∆∗S−1
Ak,1 ⊗k k[xn+1]∂xn+1 [[−1]].
Then the composition of the first two maps is given by
(23)
∆∗ S −1
Ak,1 ⊗k k[xn+1]∂xn+1 [[−1]]
∆∗ S −1
Ak,1
i−d→ ⊕ ∆∗S−1
Ak,1 ⊗k k[xn+1] ·xN
n+1∂xn+1
−−−−−−−−→ ∆∗S−1
Ak,1 ⊗k k[xn+1]∂xn+1
⊕
∆∗ S −1
Ak,1 ⊗k k[xn+1][[1]]
where the missing arrows are all zero. On the other hand, to understand Ψ′1(α), consider the isomorphisms
Extj
Ak,1,1×Ak,1,1 (∆∗S−1
Ak,1,1 , OT ⋆ Ψ1(P)) ∼= Extj
Ak,1,1×Ak,1,1 ((Ψ′1)L(∆∗S−1
Ak,1 ), OT ⋆ Ψ1(P))
∼= Extj
Ak,1×Ak,1 (∆∗S−1
Ak,1 , Ψ′1(OT ⋆ Ψ1(P)))
∼= Extj
Ak,1×Ak,1 (∆∗S−1
Ak,1 , P).
The image of β : ∆∗S−1
Ak,1 → P[[j]] under these isomorphisms is the composition
(Ψ′1)L(∆∗S−1
Ak,1 ) (Ψ′1)L(β)
−−−−−−→ (Ψ′1)L(P)[[j]] = ∆∗p∗(S−1
A1 ) ⋆ Ψ1(P)[[j]] −h→ (OT ⋆ Ψ1(P))[[j]]
where p : Ak,1,1 → A1 projects onto the last factor. Here h is induced by the map
∆∗p∗(S−1
A1 ) → OT which comes from the standard exact sequence
OT {−2} → OS → O∆
after noting that ∆∗p∗(S−1
A1 ) ∼= O∆[[−1]]{2}. Thus, we can assume that α is such a
composition for some β. Applying Ψ′1 we find that Ψ′1(α) factors as
∆
∗ S −1
Ak,1 ⊗k k[xn+1]∂xn+1 [[−1]] Ψ′
1 (Ψ′
1 )L (β)
−−−−−−−−−→ P ⊗k k[xn+1]∂xn+1 [[j − 1]]
⊕ ∆∗S−1
Ak,1 ⊗k k[xn+1] Ψ′
1 (Ψ′
1 )L (β)
−−−−−−−−−→ ⊕ P ⊗k k[xn+1][[j]] Ψ′
1 (h)
−−−−→ Ψ′
1(OT ⋆ Ψ1(P))[[j]]
.
Finally, the composition of Ψ′1(h) with the isomorphism Ψ′1(OT ⋆ Ψ1(P))[[j]] −∼→ P[[j]]
gives a map which is zero on the summand P ⊗k k[xn+1]∂xn+1[[j − 1]] and the natural projection map P ⊗k k[xn+1][[j]] → P[[j]] on the second summand (which sends xn+1 to zero). This fact can be traced back to the map
∆∗OA1 ⊗k k[x2][[−1]] ⊕ ∆∗OA1 ⊗k k[x2] = Ψ′1(∆∗OA1,1 ) → Ψ′1(OT ) ∼= ∆∗OA1

REMARKS ON COLOURED TRIPLY GRADED LINK INVARIANTS 15
which, as we saw in the proof of Lemma 4.3, acts by zero on the first summand and by the natural projection map on the second summand. In conclusion, the composition
Ψ′1(Ψ′1)L(∆∗S−1
Ak,1 )[[1]] Ψ′1(α)
−−−−→ Ψ′1(OT ⋆ Ψ1(P))[[j + 1]] −∼→ P[[j + 1]]
is isomorphic to the composition
∆∗S−1
Ak,1 ⊗k k[xn+1]∂xn+1
Ψ′1 (Ψ′1 )L (β )
−−−−−−−→ P ⊗k k[xn+1]∂xn+1 [[j]]
⊕ ∆∗S−1
Ak,1 ⊗k k[xn+1][[1]] Ψ′1(Ψ′1)L(β)
−−−−−−−→ ⊕ P ⊗k k[xn+1][[j + 1]] −π→ P[[j + 1]]
where π is the natural projection map from the lower summand. The composition of this with (23) is clearly zero and hence φ′(α ◦ xnN+1∂xn+1) = 0.
Remark 6.5. Note that in the proof above of Lemma 6.4 the observation we used is that the difference γk,1,1 − Ψ1(γk,1) is of the form f ∂xn+1 for some function f on Ak,1,1.
7. Examples
For a partition k = (k1, . . . , kn) be a partition we denote by H(©k) the triply graded homology of the unknot labeled by k. We will compute this invariant when k = (k) and k = (12). Its Poincare ́ polynomial is denoted P©k (q, a, t) where the shifts {1}, [[1]] and [1] are kept track of by q, −a2, t respectively.
7.1. Cohomology of ©(k). If k = 1 we have
H(©(1)) ∼= π∗∆∗(O∆) ∼= π∗(OA1 ⊕ OA1[[1]]{−2}) ∼= k[x] ⊕ k[x][[1]]{−2}
where ∆ and π are the natural maps • ←π− A1 −∆→ A1 × A1. Hence
P©(1) (q, a, t) = (1 + q−2 + q−4 + . . . )(1 − a2q−2) = 1 − a2q−2
1 − q−2 .
Note that k[x] ∼= ⊕i≥0k{−2i} which explains why it contributes (1 + q−2 + q−4 + . . . ). More generally, Ak = Spec k[e1, . . . , ek] and a similar argument shows that
H(©(k)) ∼=
k ⊗
l=1
(k[el] ⊕ k[el][[1]]{−2l}) .
It follows that
P©(k) (q, a, t) =
k ∏
l=1
1 − a2q−2l
(24) 1 − q−2l .
7.2. Cohomology of ©(12). First, we need to explicitly identify the projector P− which
lives in Kom∗−(D(A1,1 × A1,1)). The braid element in this case is isomorphic to
T = [EF〈−1〉 → id] ∼= [OS → O∆]
where S is the variety described in the proof of Lemma 4.3. If (x, y) are the coordinates of A1,1 then
T = [k[x, y] ⊗k[e1,e2] k[x, y] → k[x, y]]

16 SABIN CAUTIS
as k[x, y]-bimodules (where e1 = x + y and e2 = xy are the usual elementary symmetric functions). Now, squaring and simplifying gives
T2 ∼= [EFEF〈−2〉 → EF〈−1〉 ⊕ EF〈−1〉 → id]
∼= [EF〈−3〉
O
• −O •
−−−−−−→ EF〈−1〉 −−−→ id]
∼= [OS {2} x⊗1−1⊗x
−−−−−−→ OS → O∆].
The maps in the first and second lines above are encoded using the diagrammatics of [KL]. The isomorphism between the first and second lines was proved in [C1, Section 10.2]. The isomorphism between the second and third lines follows from the fact that
O
• corresponds to x ⊗ 1 and O • to 1 ⊗ x (this follows form the action of the nilHecke defined in [KL] or indirectly from the main result in [C2]). Now, if we multiply again by T we get
T3 ∼= [EFEF〈−4〉 → EF〈−3〉 ⊕ EFEF〈−2〉 → EF〈−1〉 ⊕ EF〈−1〉 → id]
∼= [EF〈−5〉
O
• + O • − O •Q2
−−−−−−−−−−−−−−−→ EF〈−3〉
O
• −O •
−−−−−−→ EF〈−1〉 −−−→ id]
∼= [OS {−4} x⊗1−1⊗y
−−−−−−→ OS{−2} x⊗1−1⊗x
−−−−−−→ OS → O∆].
Here the 2 beside the dot in the second line indicates that we add 2 dots. The second line
follows again from [C1, Section 10.2] while the third isomorphism is because O •Q2 is given by 1 ⊗ 1 7→ (x + y) ⊗ 1 = 1 ⊗ (x + y). Continuing this way one finds that
P− = lli→m∞
Tl =
[
. . . −g→ OS {−6} −f→ OS{−4} −g→ OS{−2} −f→ OS → O∆
] (25)
where the maps alternate between f = x ⊗ 1 − 1 ⊗ x and g = x ⊗ 1 − 1 ⊗ y.
We need to compute H(©(12)) = Ψ′1Ψ′1(P−). Now, using (10) and arguing as in the
proof of Lemma 4.3, we find that Ψ′1(P−) is isomorphic to the complex
. . . 0 / O∆ ⊗k k[y]{−4}
⊕
17→x−y / O∆ ⊗k k[y]{−2}
⊕
0 / O∆ ⊗k k[y]
⊕
∼ / O∆ ⊗k k[y]
⊕
. . . 0 / O∆ ⊗k k[y]{−8} 17→x−y / O∆ ⊗k k[y]{−6} 0 / O∆ ⊗k k[y]{−4} 17→y / O∆ ⊗k k[y]{−2}
where, going to the left, the differentials alternate. Now, consider the exact triangle
O∆ ⊗k k[y]{−2} 17→x−y
−−−−→ O∆ ⊗k k[y] → O∆.
Applying Ψ′1 leaves us with
Ψ′1(O∆ ⊗k k[y]{−2}) → Ψ′1(O∆ ⊗k k[y]) → k[x][[1]]{−2} ⊕ k[x].
Thus, applying Ψ′1(·) to Ψ′1(P−) gives us a complex isomorphic to
. . . 0 k[x]{−6} 0 k[x]{−2} 0 0 . . . 0 k[x]{−8, −10} 0 k[x]{−4, −6} 0 k[x]{−2} . . . 0 k[x]{−12} 0 k[x]{−8} 0 k[x]{−4}

REMARKS ON COLOURED TRIPLY GRADED LINK INVARIANTS 17
where the top right entry in cohomology bidegree (0, 0). The generating series is then
P©(12) (q, a, t) = 1
1 − q−2
1
1 − q−4t2 (q−2t2 − q−2a2 − q−4a2t2 + q−4a4)
= q−2t2(1 − q−2a2)(1 − a2t−2)
(1 − q−2)(1 − q−4t2) .
8. Some remarks and speculation
8.1. SL(N )-homologies. In order to make the differential dN homogeneous one needs to kill the [[·]] grading. More precisely, one needs to set [[−1]] = {−2(−N + 1)}. Since [[1]] is recorded by −a2 and {1} by q this means that the Euler characteristic χN (L) of
HN (L) satisfies χN (L) = PL(q, iq−N+1, −1). But
P©(k) (q, iq−N+1, −1) =
k ∏
l=1
1 − q−2N+2−2l
1 − q−2l
which, up to sign and a factor of q, equals
[
N +k−1
k
]
. In particular, this means that if
L is a link labeled by (k) then HN (L) categorifies the RT invariant of SL(N ) labeled by the representation Symk(CN ). Moreover, the homology of the unknot in this case can be shown to be finite-dimensional homology. This implies (using conjugation invariance of the homology) that HN (L) is finite-dimensional for any L labeled by partitions with only one part.
8.2. Batalin-Vilkovisky structures. In Section 6 we defined the differential dN for
N > 0. This was based on the fact that for any algebra A and A-bimodule M, HH∗(A) acts on HH∗(M). More generally, under fairly general hypothesis described in [KK,
Section 1], HH∗(A) is a Gerstenhaber algebra and HH∗(M) is a Batalin-Vilkovisky (BV) module. Without going into details (see [KK] for more) this equips HH∗(A) with the usual cup product as well as a graded Lie algebra structure
{·, ·} : HHp+1(A) ⊗k HHq+1(A) → HHp+q+1(A)
while HH∗(M) carries the standard module structure as well as a graded Lie algebra module structure
(26) L : HHp+1(A) ⊗k HHn(M) → HHn−p(M).
When p = −1 we get a map
HH0(A) ⊗k HHn(M) → HHn+1(M).
If A is commutative then HH0(A) ∼= A and for f ∈ A we denote by df the map HHn(M) → HHn+1(M) induced in (26) by f (the conditions of being a BV-module implies that d(f g) = f dg + gdf ). If we take A = k[x1, . . . , xk] then we obtain a map
∑
i
d(xiN ) : HHn(M) → HHn+1(M)

18 SABIN CAUTIS
for any k[x1, . . . , xk]-bimodule M. One would like this map to give a differential d−N which commutes with d and so that, as in Theorem 6.1, the total differential d + d−N defines a doubly graded link invariant H−N (L). This would give us a spectral sequence which commences at H(L) and converges to HN (L) for any N ∈ Z. On the other hand, if we take p = 0 then we get a map
(27) HH1(A) ⊗k HHn(M) → HHn(M).
Since HH1(k[x]) ⊂ HH1(k[x1, . . . , xk]) can be identified with the so-called Witt algebra one would hope that the resulting action from (27) agrees with the action of the Witt algebra defined in [KR2] (see the introduction and Theorem 5.6 therein). Finally, it is worth noting that in [BF, Section 2.3] and [BG, Corollary 1.1.3] one
obtains a Gestenhaber algebra structure on Tor∗X (OY , OZ ) whenever Y, Z are smooth coisotropic subvarieties inside a smooth Poisson variety X as well as a BV-module
structure on Ext∗X (OY , OZ ). In our case each term M in the complex Tβ′ is a (direct sum of) the structure sheaf of a non-smooth Lagrangian subvarieties inside Ak × Ak where the latter is equipped with the standard symplectic structure. This suggests that HH∗(M) might carry the structure of a Gerstenhaber algebra and HH∗(M) that of a BV-module over it.
Appendix A. Ψ-functors
In this section we suppose all varieties are smooth. However, we work over an arbitrary base ring and do not assume properness at any point. The results also hold if we equip all our varieties with an action of k× and work equivariantly. Fix a variety Z. For any two varieties Y1, Y2 we define
• ΨZ : D(Y1 × Y2) → D((Y1 × Z) × (Y2 × Z)) and
• Ψ′Z : D((Y1 × Z) × (Y2 × Z)) → D(Y1 × Y2)
via ΨZ := ∆∗π∗ and Ψ′ := π∗∆! where π and ∆ are the natural projection and diagonal inclusion maps
π : Y1 × Z × Y2 → Y1 × Y2 and ∆ : Y1 × Z × Y2 → (Y1 × Z) × (Y2 × Z).
Recall that if i : Y1 → Y2 is an inclusion of smooth varieties then i!(·) = i∗(·) ⊗ ωi[−c]
where ωi = ωY1 ⊗ ωY∨2|Y1 and c is the codimension of the inclusion.
Proposition A.1. Let Y1, Y2, Y3, Z1, Z2, Z3 be six varieties and suppose
P ∈ D(Y1 × Y2), Q ∈ D(Y2 × Y3), P′ ∈ D(Z1 × Z2) and Q′ ∈ D(Z2 × Z3).
Then (Q ⊠ Q′) ⋆ (P ⊠ P′) ∼= (Q ⋆ P) ⊠ (Q′ ⋆ P′).
Proof. This is a fairly straightforward exercise with kernels which we leave up to the reader.
Corollary A.2. Let Y1, Y2, Y3 be three varieties and suppose
P ∈ D(Y1 × Y2) and Q ∈ D(Y2 × Y3).
Then ΨZ(Q ⋆ P) ∼= ΨZ(Q) ⋆ ΨZ(P).
Proof. This follows from Proposition A.1 by taking Z1 = Z2 = Z and P′ = Q′ = ∆∗OZ
because in this case ΨZ(·) ∼= (·) ⊠ OZ .

REMARKS ON COLOURED TRIPLY GRADED LINK INVARIANTS 19
Proposition A.3. Let Y1, Y2, Y3 be three varieties and suppose
P ∈ D(Y1 × Y2) and Q ∈ D((Y2 × Z) × (Y3 × Z)).
Then Ψ′Z(Q ⋆ ΨZ(P)) ∼= Ψ′Z(Q) ⋆ P ∈ D(Y1 × Y3).
Proof. For i, j ∈ {1, 2, 3} denote by pij : Y1 × Y2 × Y3 → Yi × Yj and
p′ij : (Y1 × Z) × (Y2 × Z) × (Y3 × Z) → (Yi × Z) × (Yj × Z)
the natural projections. We also denote by
πij : Yi × Z × Yj → Yi × Yj and ∆ij : Yi × Z × Yj → (Yi × Z) × (Yj × Z)
the projection and diagonal inclusion. Then
Ψ′Z (Q ⋆ ΨZ (P)) ∼= π13∗∆∗13(Q ⋆ (∆12∗π1∗2P))
∼= π13∗∆∗13(p′13∗(p′1∗2∆12∗π1∗2P ⊗ p′2∗3Q))
∼= π13∗∆∗13(p′13∗(∆′12∗p′1′2∗π1∗2P ⊗ p′2∗3Q))
∼= π13∗∆∗13(p′13∗∆′12∗(p′1′2∗π1∗2P ⊗ ∆′1∗2p′2∗3Q))
∼= π13∗∆∗13q13∗(p′1′2∗π1∗2P ⊗ p′2′′3∗∆∗23Q)
∼= π13∗q′13∗∆∗Z (p′1′2∗π1∗2P ⊗ p′2′′3∗∆∗23Q)
where the third isomorphism follows from the commutative square in (28), the fourth via the projection formula, the fifth using p′23∆′12 = ∆23p′2′′3 where p′2′′3 is the map
(Y1 × Z × Y2) × (Y3 × Z) → Y2 × Z × Y3, (x1, z, x2, x3, z′) 7→ (x2, z, x3)
and the last from the commutative square in (29).
(28) (Y1 × Z × Y2) × (Y3 × Z)
p′1′2
∆′12 / (Y1 × Z) × (Y2 × Z) × (Y3 × Z)
p′12
Y1 × Z × Y2
∆12 / (Y1 × Z) × (Y2 × Z)
(29) (Y1 × Z × Y2) × Y3
∆Z /
q′13
(Y1 × Z × Y2) × (Y3 × Z)
q13
Y1 × Z × Y3
∆13 / (Y1 × Z) × (Y3 × Z)
Now, π13q′13 = p13(π12 × idY3 ) and π12p′1′2∆Z = p12(π12 × idY3 ) so we get
π13∗q′13∗∆∗Z (p′1′2∗π1∗2P ⊗ p′2′′3∗∆∗23Q)
∼= p13∗(π12 × idY3 )∗(∆∗Z p′1′2∗π1∗2P ⊗ ∆∗Z p′2′′3∗∆∗23Q ⊗ ωZ∨[− dim Z])
∼= p13∗(π12 × idY3 )∗((π12 × idY3)∗p∗12P ⊗ ∆∗Z p′2′′3∗∆∗23Q ⊗ ωZ∨[− dim Z])
∼= p13∗(p∗12P ⊗ (π12 × idY3)∗((p′2′′3 ◦ ∆Z )∗(∆∗23Q ⊗ ωZ∨[− dim Z])))
∼= p13∗(p∗12P ⊗ p∗23π23∗∆∗23Q)
∼= Ψ′Z (Q) ∗ P

20 SABIN CAUTIS
where the third isomorphism is via the projection formula and the fourth uses (30).
(30) (Y1 × Z × Y2) × Y3
p′2′′3◦∆Z
π12×idY3 / Y1 × Y2 × Y3
p23
Y2 × Z × Y3
π23 / Y2 × Y3
The result follows.
References
[AH] M. Abel and M. Hogancamp, Categorified Young symmetrizers and stable homology of torus links II; arXiv:1510.05330
[BF] K. Behrend and B. Fantechi, Gerstenhaber and Batalin-Vilkovisky structures on Lagrangian intersections, Algebra, arithmetic, and geometry: in honor of Yu. I. Manin. Vol. I, Progr. Math. 269 (2009), 1–47, Birkh ̈auser, Boston, Inc., Boston, MA. [BG] V. Baranovsky and V. Ginzburg, Gerstenhaber-Batalin-Vilkovisky structures on coisotropic intersections, Math. Res. Lett 17 (2010), no. 2, 221–229; arXiv:0907.0037 [C1] S. Cautis, Clasp technology to knot homology via the affine Grassmannian, Math. -
Ann. 363 (2015), no. 3, 1053–1115; arXiv:1207.2074 [C2] S. Cautis, Rigidity in higher representation theory; arXiv:1409.0827 [CDK] S. Cautis, C. Dodd and J. Kamnitzer, Associated graded of Hodge modules and categorical sl2 actions; arXiv:1603.07402
[CK1] S. Cautis and J. Kamnitzer, Knot homology via derived categories of coherent sheaves I, sl2 case, Duke Math. J. 142 (2008), no. 3, 511–588. math.AG/0701194 [CK2] S. Cautis and J. Kamnitzer, Braiding via geometric categorical Lie algebra actions, Compos. Math. 148 (2012), no. 2, 464–506; arXiv:1001.0619 [CKM] S. Cautis, J. Kamnitzer, and S. Morrison, Webs and quantum skew Howe duality, Math. Ann. 360 no. 1 (2014), 351–390; arXiv:1210.6437 [CL] S. Cautis and A. Lauda, Implicit structure in 2-r-
epresentations of quantum groups, Selecta Math. 21 no. 1 (2015), 201–244; arXiv:1111.1431 [DGR] N. Dunfield, S. Gukov and J. Rasmussen, The superpolynomial for knot homologies, Experiment. Math. 15 (2006), no. 2, 129–159; arXiv:math/0505662 [GS] S. Gukov and M. Stosˇic ́, Homological algebra of knots and BPS states, Proceedings of the Freedman Fest, Geom. Topol. Monogr. 18, 309–367, Geom. Topol. Publ., Coventry; arXiv:1112.0030 [H] M. Hogancamp, Stable homology of torus links via categorified Youn-
g symmetrizers I: one-row partitions; arXiv:1505.08148
[K] M. Khovanov, Triply-graded link homology and Hochschild homology of Soergel bimodules, Intern. J. of Math. 18 (2007), 869–885. arXiv:math/0510265
[KL] M. Khovanov and A. Lauda, A diagrammatic approach to categorification of quantum groups III, Quantum Topol. 1, Issue 1 (2010), 1–92; arXiv:0807.3250 [KR1] M. Khovanov and L. Rozansky, Matrix factorizations and link homology II, Geom. Topol. 12 (2008) 1387–1425; math.QA/0505056 [KR2] M. Khovanov and L. Rozansky, Positive half of the Witt algebra acts on triply graded link homology, Quantum Topol., no. 4 (2016), 737–795; arXiv:1305.1642 [KK] N. Kowalzig and U. Krahmer, Batalin-Vilkovisky struct-
ures on Ext and Tor, J. Reine Angew. Math., 697 (2014), 159–219; arXiv:1203.4984 [L] G. Lusztig, Introduction to quantum groups, Progress in Mathematics 110, Birkh ̈auser Boston Inc., Boston, MA, 1993. [MSV] M. Mackaay, M. Stosˇic ́ and P. Vaz, The 1,2-coloured HOMFLY-PT link homology, Trans. Amer. Math. Soc. 363 (2011), 2091–2124; arXiv:0809.0193

REMARKS ON COLOURED TRIPLY GRADED LINK INVARIANTS 21
[Ra] J. Rasmussen, Some differentials on Khovanov-Rozansky homology, Geom. Topol., 19 (2015), no. 6, 3031–3104; arXiv:math/0607544
[Rou] R. Rouquier, 2-Kac-Moody Algebras; arXiv:0812.5023 [Roz] L. Rozansky, An infinite torus braid yields a categorified Jones-Wenzl projector; Fund. Math. 225 (2014), 305–326; arXiv:1005.3266 [WW] B. Webster and G. Williamson, A geometric construction of colored HOMFLYPT homology, Geom. Topol. (to appear); arXiv:0905.0486
[W] P. Wedrich, Exponential growth of colored HOMFLY-PT homology; arXiv:1602.02769
E-mail address: cautis@math.ubc.ca
Department of Mathematics, University of British Columbia, Vancouver BC, Canada

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:39.234Z
- **Text Length:** 46840 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
