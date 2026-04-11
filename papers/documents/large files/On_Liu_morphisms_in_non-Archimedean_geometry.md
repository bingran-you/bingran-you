# PDF Document: Xia - 2022 - On Liu morphisms in non-Archimedean geometry.pdf

**File Path:** Xia - 2022 - On Liu morphisms in non-Archimedean geometry.pdf

**Processed Date:** 2026-02-10T18:15:14.569Z

**File Size:** 285.71 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2762

**Title:** On Liu morphisms in non-Archimedean geometry

**Collection:** Large Files

---

## Extracted Text Content

arXiv:2106.08032v3 [math.AG] 23 Mar 2022
ON LIU MORPHISMS IN NON-ARCHIMEDEAN GEOMETRY
MINGCHEN XIA
Abstract. We define Liu morphisms and quasi-Liu morphisms between Berkovich analytic spaces. We show that Liu morphisms and quasi-Liu morphisms behave exactly as affine morphisms and quasi-affine morphisms of schemes.
Contents
1. Introduction 1 2. Preliminaries 3 3. Liu spaces and Liu algebras 4 4. Liu morphisms and quasi-coherent sheaves of Liu algebras 10 5. Quasi-Liu morphisms 13 6. Open problems 15 Appendix A. Results from Ben-Bassat–Kremnizer 15 References 17
1. Introduction
1.1. Motivation. In classical algebraic geometry, the theories of affine morphisms and quasi-affine morphisms play a prominent role. In the non-Archimedean world, it is highly desirable to have analogous results as well. However, there are two principal difficulties in the non-Archimedean setting:
(1) First of all, there is no satisfactory theory of quasi-coherent sheaves in non-Archimedean geometry. There is indeed an ad hoc notion of quasi-coherent sheaves in rigid geometry defined by Conrad in [Con06]: a quasi-coherent sheaf is a sheaf of modules which can be expressed as a filtered colimit of coherent sheaves locally. However, Conrad’s notion of quasi-coherent sheaves does not behave as expected: on an affinoid space, the higher cohomologies of a quasi-coherent sheaf do not vanish in ge-
neral. This makes it hard to handle affine morphisms in terms of quasi-coherent sheaves of algebras. The same problem persists in Berkovich geometry. (2) Secondly, a more severe problem was proposed by Liu [Liu88], [Liu90]. It is shown that there is a quasi-compact, separated non-affinoid rigid space X, a morphism f : X → Y to an affinoid space Y , an admissible affinoid covering {Ui} of Y such that f −1Ui is affinoid for each i. See [Liu90,
Proposition 3.3 and Section 5]. This means that the property that the inverse image of an affinoid domain is affinoid is not G-local.
Thankfully both problems can be fixed. For problem (2), recall that in classical algebraic geometry, we have the celebrated Serre’s criterion ([EGA II, Théorème 5.2.1]): affine schemes can be characterized by cohomological triviality among quasi-compact separated schemes. Similarly, in non-Archimedean setting, we replace the usual local notion of affinoid spaces by cohomologically trivial spaces. Such spaces are studied by Maculan–Poineau in [MP21] under the name of Liu spaces, we follow their ter-
minology.
Definition 1.1 (c.f. Definition 3.1). Let k be a complete non-Archimedean valued field. A quasi-compact, separated k-analytic space X (in the sense of Berkovich) is said to be Liu if for any analytic extension k′/k, any coherent sheaf F on Xk′ is acyclic.
Date: March 24, 2022.
1

2 MINGCHEN XIA
On the morphism level, we define a Liu morphism as a morphism under which the inverse image of a Liu domain is a Liu space, see Definition 4.1. In contrast to the corresponding notion defined by affinoid domains, we show that the property of being a Liu morphism is G-local on the target if the target is separated, see Theorem 4.4. Similarly, we have a notion of quasi-Liu morphisms analogous to the classical notion of quasi-affine morphisms:
Definition 1.2 (c.f. Definition 5.2). Let f : X → Y be a morphism of k-analytic spaces. We say f is quasi-Liu if for any Liu domain Z in Y , f −1Z can be embedded in a Liu k-analytic space as a compact analytic domain and H0(f −1Z, OX ) is a Liu k-algebra (Definition 3.4).
The property of being a quasi-Liu morphism is also G-local on the target if the target is separated, see Proposition 5.4. As for problem (1), due to the progress made by Ben-Bassat–Kremnizer in [BBK17], it is by far clear that the natural notion on a non-Archimedean analytic space is not that of the quasi-coherent sheaves, but the derived category of quasi-coherent sheaves instead. However, as we will see, in the special case of sheaves of Liu algebras studied below, the derived notion reduces to -
a bona fide notion of quasi-coherence at the non-derived level. In particular, on a separated space, there is a global notion of quasi-coherent sheaves of Liu algebras, see Definition 4.2.
1.2. Main results. We fix a complete non-Archimedean valued field k. We allow the valuation on k to be trivial. We work in the framework of Berkovich spaces as in [Ber93]. Our first result show that being a Liu morphism is a G-local property on the target:
Theorem 1.1. Let f : X → Y be a morphism of k-analytic spaces. Assume that Y is separated. Let {Ui}
be a G-covering of Y . Then f is Liu if and only if for each i the restriction f −1Ui → Ui of f is Liu.
See Theorem 4.4. The second main result says that Liu morphisms and quasi-coherent sheaves of Liu k-algebras are essentially equivalent:
Theorem 1.2 (=Corollary 4.9). Let X be a separated k-analytic space. Then the functor
SpX : LiuAlgQCoh
X,k → Liu→X,k
is an anti-equivalence of categories.
Here LiuAlgQCoh
X,k is the category of quasi-coherent sheaves of Liu k-algebras on X, Liu→X,k is the category
of Liu morphisms Y → X. The functor SpX is the relative spectrum functor defined in Definition 4.3. This
result is analogous to the classical result on affine morphisms and quasi-coherent sheaves of algebras ([EGA II, Proposition 1.2.7, Proposition 1.3.1]).
1.3. Structure of the paper. In Section 2, we recall some basic results about Berkovich analytic spaces and the language developed by Ben-Bassat and Kremnizer ([BBK17]). Due to the lack of references, we also prove a representability theorem (Theorem 2.1) about presheaves on the category of analytic spaces. In Section 3, we recall the basic theory of Liu spaces and Liu algebras. We prove that Liu algebras behave very similar to affinoid algebras in many aspects. In Section 4, we introduce Liu morp-
hisms and study their relation to quasi-coherent sheaves of Liu algebras. In Section 5, we introduce and study quasi-Liu morphisms. In Section 6, we give a list of unsolved problems related to this work. We collect results from [BBK17] in Appendix A.
1.4. Conventions. Let k be a complete non-Archimedean valued field. An analytic extension of k is a complete non-Archimedean valued field k′ containing k such that the restriction of the valuation on k′ to k coincides with the given valuation on k. We denote the spectrum of a Banach algebra A by Sp A instead of the more common notation M(A).
1.5. Acknowledgments. I would like to thank Yanbo Fang for discussions, Jérôme Poineau for comments on the draft and Michael Temkin for answering questions about locally affinoid algebras. I am indebted to the anonymous referee for many valuable suggestions and especially for pointing out several mistakes in the original version of the manuscript.

LIU MORPHISMS 3
2. Preliminaries
Let k be a complete non-Archimedean valued field.
2.1. Analytic spaces. In this paper, by a k-analytic space, we mean a k-analytic space in the sense of [Ber93]. The category of k-analytic spaces is denoted by Ank. For each k-analytic space X, we endow X
with the G-topology as in [Ber93]. The corresponding site is still denoted by X. There is a natural sheaf of rings OXG making X a ringed site. We always omit the subindex G and write OX instead. The category of
coherent sheaves on X is denoted by CohX .
Strict k-analytic spaces are defined as in [Ber93]. Recall that by a celebrated result of Temkin [Tem04], strict k-analytic spaces form a full subcategory of the category of k-analytic spaces if k is non-trivially valued. The category of k-affinoid spaces is denoted by Affk, see [Ber12]. The category of k-affinoid algebras
is denoted by AffAlgk. There is an equivalence between Affk and AffAlgk, given by the functor of global
sections X 7→ H0(X, OX ) and the functor of Berkovich spectrum A 7→ Sp A.
2.2. A representability theorem. The following result is analogous to [EGA I-new, Proposition 4.5.4].
Theorem 2.1. Let F be a presheaf on Ank. Assume that
(1) F satisfies the sheaf property for the G-topology, namely, for any k-analytic space X, any G-covering {Ui} of X, F (X) is the equalizer of ∏
i
F (Ui) ⇒
∏
i,j
F (Ui ∩ Uj) .
(2) There is a family {Fi}i of subfunctors of F such that
(a) Each Fi is representable by a k-analytic space Xi.
(b) Each Fi → F is representable by a closed (resp. open) analytic domain. In particular, after
base change to Xj, Fi → F is represented by a closed (resp. open) analytic domain Uji. In
the closed case, we assume furthermore that for each i, the collection of j such that Uij 6= ∅ is
finite. (c) The collection Fi covers F . Then F is representable.
Proof. Let ξi ∈ Fi(Xi) be the universal family of the presheaf Fi. By assumption a morphism of k-analytic
spaces T → Xi factors through Uij iff ξi|T ∈ Fj(T ). In particular, ξi|Uij ∈ Fj(Uij ). So we get a morphism
fij : Uij → Xj such that f ∗
ijξj = ξi|Uij . By definition of Uji, we know that fij factors through Uji.
Now observe that (fij ◦ fji)∗ξj = f ∗
jiξi = ξj, we conclude that fij ◦ fji = idUji . In particular, all fij are
isomorphisms. It is formal to see that the glueing conditions are satisfied by the fij’s, hence we can glue
the Xi’s together to get a k-analytic space X by [Ber93, Proposition 1.3.3]. It is formal to check that X
together with the glueing ξ of ξi represents F . We refer to [Stacks, Tag 01JJ] for the omitted details.
2.3. Polyradii.
Definition 2.1. A polyradius is an element r ∈ Rn>0 for some n ∈ N. A polyradius r is k-free if the
components of r are linearly independent as elements in the Q-vector space Q ⊗Z (R>0/|k∗|).
For any k-polyradius r ∈ Rn>0, define kr as the k-affinoid algebra of formal series
{∑
α∈Zn
aαT α ∈ k[[T1, . . . , Tn]] | aα ∈ k, |aα|rα → 0 when |α| → ∞
}
endowed with the multiplicative norm ∑
α∈Zn aαT α 7→ maxα∈Zn aαT α.
When r is k-free, kr is a field.
For a given k-free polyradius r, a given Banach k-algebra A, for any Banach A-module M , we write
Ar = A⊗ˆ kkr, Mr = M ˆ⊗kkr. Note that Ar is a Banach kr-algebra and Mr is a Banach Ar-module.
Similarly, given any k-analytic space, write Xr := X ×Sp k Sp kr.

4 MINGCHEN XIA
2.4. The category of Banach modules. We briefly summarize a few results in [BBK17]. For the basic theory of quasi-Abelian categories, see [Sch99]. Let Bank be the category of Banach k-modules, where morphisms are bounded homomorphisms. Recall
that Bank is a closed symmetric monoidal quasi-Abelian category with all finite limits and finite colimits,
where the ⊗ operator is given by the completed tensor product ⊗ˆ . Moreover, finite products and finite coproducts coincide. The category Bank has enough projectives. All projective objects in Bank are flat
in the sense of [BBB16]. We have derived categories D∗(Bank), where ∗ means +, −, b or empty. Let
BanAlgk be the category of Banach k-algebras, which is also the category of algebras in the symmetric
monoidal category Bank in the abstract sense. Let A ∈ BanAlgk be a Banach k-algebra. Let BanModA
be the category of Banach A-modules, which is also the category of A-modules in the symmetric monoidal category Bank in the abstract sense. Recall that BanModA is also a closed symmetric monoidal quasi
Abelian category with all finite limits and finite colimits, where the ⊗ operator is also given by ˆ⊗. We write D∗(A) = D∗(BanModA).
Definition 2.2. Let f : A → B be a morphism in BanAlgk. Let M ∈ BanModA. We say that M is
transversal to f if the natural morphism
M ˆ⊗L
AB → M ˆ⊗AB
in D−(A) is an isomorphism.
Proposition 2.2 ([Ber12, Proposition 2.1.2]). For any k-free polyradius, the Banach k-module kr is flat in
Bank: for any admissible exact short sequence 0 → E → F → G → 0 in Bank, the following sequence is also
admissible and exact:
0 → Er → Fr → Gr → 0 .
3. Liu spaces and Liu algebras
Let k be a complete non-Archimedean valued field.
3.1. Liu spaces. In this section, we recall the basic theory of Liu k-analytic spaces following [MP21] and [Liu90].
Definition 3.1 ([MP21, Definition 1.9]). A k-analytic space X is called Liu if
(1) X is quasi-compact, separated. (2) X is holomorphically separable: for any x, y ∈ X, x 6= y, there is f ∈ H0(X, OX ) such that
|f (x)| 6= |f (y)|.
(3) OX is universally acyclic: for any analytic extension k′/k, Hi(Xk′ , OX,k′ ) = 0 for any i > 0.
A morphism of Liu k-analytic spaces is a morphism of the underlying k-analytic spaces. We denote the category of Liu k-analytic spaces by Liuk.
Example 3.1. A k-affinoid space is a Liu k-analytic space. But the converse fails in general. We refer to [Liu90, Section 5] for details. In fact, the theory of non-Archimedean pinching in [Tem21] gives plenty of such examples.
Definition 3.2. Let X be a k-analytic space. An analytic domain Z of X is called a Liu domain if Z is a Liu k-analytic space.
Definition 3.3. Let X be a k-analytic space. We say X is cohomologically Stein if for any coherent sheaf of OX -modules F ,
Hi(X, F ) = 0 , i > 0 .
We say X is universally cohomologically Stein if for any analytic extension k′/k, Xk′ is cohomologically
Stein.
Theorem 3.1 ([MP21, Theorem 1.11], [Liu90, Théorème 2]). Let X be a separated, quasi-compact k-analytic space. Then the following are equivalent:
(1) X is Liu. (2) X is universally cohomologically Stein. (3) X is holomorphically separable and OX is universally acyclic.

LIU MORPHISMS 5
Moreover, if k is non-trivially valued and X is strict, then the conditions are equivalent to (4) X is rig-holomorphically separable and OX is acyclic.
Note that in (4), we only need acyclicity of OX instead of universal acyclicity as explained in [MP21].
For the definition of rig-holomorphically separability, we refer to [MP21, Definition 1.5].
Theorem 3.2 ([MP21, Corollary 1.16]). Let f : Y → X be a finite morphism of k-analytic spaces. Then
(1) If X is Liu, then so is Y . (2) If Y is Liu and f is surjective, then X is Liu.
Theorem 3.3 ([MP21, Corollary 1.15, Corollary 1.17]). Let X be a k-analytic space. Then
(1) For any analytic extension k′/k, Xk′ is Liu iff X is Liu.
(2) Assume that X is separated. Then X is Liu iff Xred is. (3) Assume that X is separated. Then X is Liu iff each irreducible component of X is.
Proof. We only have to make the following remark to (1): X is separated iff Xk′ is. This follows from [CT21,
Theorem 1.2].
Proposition 3.4. Let f : Y → X, g : X′ → X be morphisms in Liuk. Then Y ′ := Y ×X X′ ∈ Liuk.
Proof. We have the following Cartesian diagram
Y ′ Y × X′
X X×X
(f,g) f ×g
∆X
.
As X is separated, ∆X is a closed immersion, so is the morphism Y ′ → Y × X′. By Theorem 3.2, in order
to show that Y ′ is Liu, it suffices to show that Y × X′ is Liu. This follows from [MP21, Theorem A.6].
Corollary 3.5. Let X be a separated k-analytic space. Let Y1, Y2 be Liu domains in X, then Y1 ∩ Y2 is also
a Liu domain.
3.2. Liu algebras.
Definition 3.4. A Liu k-algebra is a Banach k-algebra A such that there is a Liu k-analytic space such that
A ∼= H0(X, OX ), where the isomorphism is an isomorphism of Banach k-algebras. A Liu k-algebra is said
to be strict if there is a strict Liu k-analytic space with A ∼= H0(X, OX ) in BanAlgk.
A morphism of Liu k-algebras is a bounded homomorphism of the underlying Banach k-algebras. The category of Liu k-algebras is denoted by LiuAlgk. It is a full subcategory of BanAlgk.
Proposition 3.6. Let A be a Liu k-algebra. Then
(1) A is Noetherian and all of its ideals are closed. (2) Suppose that k is non-trivially valued and A is strict. For any maximal ideal m of A, A/m is finite dimensional as a vector space over k. (3) We have
⋂
m∈Max(A)
∞ ⋂
n=1
mn = 0 .
Proof. (1) That A is noetherian follows from [MP21, Proposition 2.6(3), Remark 2.7]. When k is nontrivially valued, all ideals are closed by [BGR84, Proposition 3.7.2.2]. In general, this follows from a base field extension argument, see [Ber12, Proposition 2.1.3]. (2) By [Liu90, Proposition 1.3], there is a rigid point x ∈ X such that m = mSp A,x. Take a strictly affinoid
domain Sp B of Sp A containing x. Then x is also rigid in Sp B. It is well-known that B/mSp B,x is finite
dimensional, hence so is A/m. (3) Take an element a ∈ A that lies in the intersection of all mn for any m ∈ Max A, n ≥ 1. Then By Krull’s intersection theorem, for each m ∈ Max A, there is an element m ∈ m such that (1 − m)a = 0. Thus the annihilator of a does not lie in any maximal ideal of A, hence a = 0.

6 MINGCHEN XIA
Corollary 3.7. Let A be a Liu k-algebra. All k-algebra homomorphisms from a Banach k-algebra to A are bounded. In particular, the Liu k-algebra structure of A is uniquely determined by the underlying algebraic structure.
Proof. When k is non-trivially valued and A is strict, this follows from Proposition 3.6 and [BGR84, Proposition 3.7.5.2]. In general, this follows from the change of base argument.
Theorem 3.8 (Liu). The functor of global sections gives an anti-equivalence Liuk → LiuAlgk. The inverse
functor is denoted by Sp A. Moreover, for any k-analytic space Y , any Liu k-analytic space X, the canonical map
HomAnk (Y, X) → HomAlgk (H0(X, OX ), H0(Y, OY )) is bijective.
Remark 3.1. The space Sp A as a topological space coincides with the spectrum in the sense of Berkovich [Ber12, Section 1.2]. See [MP21, Corollary 3.17] for example.
Proof. The latter statement is a formal consequence of the former. When k is non-trivially valued, by [Liu90, Proposition 3.2] and [Ber93, Theorem 1.6.1], we know that the global section functor is an anti-equivalence from the category of strict Liu k-analytic spaces to the category of strict Liu k-algebras. In general, let X, Y be Liu k-analytic spaces. Let A = H0(X, OX ), B = H0(Y, OY ). Let F : A → B be
a homomorphism of k-algebras. We want to construct a morphism Y → X, whose induced map on global sections is given by F . We may assume that Y is affinoid. Take an analytic field extension k′/k, so that k′ is non-trivially valued, Ak′ and Bk′ become strict Liu k-algebras. We may assume that k′ = kr for some k-free
polyradius. Then there is a unique morphism g : Yk′ → Xk′ inducing Fk′ . We claim that there is a unique
morphism f : Y → X such that g = fk′ . Note that it is automatic that f induces F on global sections by
[Ber12, Proposition 2.1.2]. By [MP21, Proposition 3.13], there is a k-affinoid space Z, a locally closed immersion h : X → Z such that there is a finite covering Z1, . . . , Zm of Z by rational domains such that h−1(Zi) → Zi is a Runge immersion
for each i:
Yk′ Xk′ Zk′
Y XZ
g hk′
w
fh
.
Now observe that the composition of maps on global sections
H 0(Zk′ , OZk′ ) → H 0(Xk′ , OXk′ ) → H 0(Yk′ , OYk′ )
is the same as the base extension of the map of k-algebras
H0(Z, OZ ) → A −F→ B .
Thus if we denote by w : Y → Z the morphism of k-analytic spaces corresponding to this latter map, we have wk′ = hk′ ◦ g. Replacing Y by w−1(Zi), X by h−1Zi and Z by Zi and applying [Ber93, Proposition 1.3.2] and
(3.1), we may assume that X → Z is a Runge immersion. In particular X is affinoid. We can take f to be the morphism corresponding to F . Moreover, such f (such that g = fk′ ) is clearly unique. We conclude.
Lemma 3.9. Let A be a Liu k-algebra. Let B, C be Liu k-algebras over A, then B ˆ⊗AC is Liu. In particular,
for any k-free polyradius r, Ar is a Liu k-algebra.
Proof. Let Z = Sp B ×Sp A Sp C. By Proposition 3.4, it suffices to prove
(3.1) H0(Z, OZ) = B⊗ˆ AC .
Firstly, we consider the morphism ∆Sp A : Sp A → Sp A × Sp A .

LIU MORPHISMS 7
It is easy to see that this is a closed immersion, corresponding to the closed ideal J in A⊗ˆ A generated by 1 ⊗ a − a ⊗ 1 for a ∈ A. Also by [PP, Corollary 3.30], we have
H0(Sp B × Sp C, OSp B×Sp C) = B⊗ˆ C .
Hence the closed immersion Z → Sp B × Sp C corresponds to the closed ideal of B⊗ˆ C generated by
J(B⊗ˆ C). In particular, (3.1) holds.
Definition 3.5. Let A be a Liu k-algebra. A Banach A-module M is finite if there is an admissible epimorphism An → M .
Let Modfin(A) be the category of finite A-modules.
Proposition 3.10. Let A be a Liu k-algebra. The forgetful functor from the category of finite Banach A-modules (with bounded A-algebra homomorphisms as morphisms) to Modfin(A) is an equivalence.
Proof. The functor is fully faithful. In fact, we prove more generally that for any finite Banach A-module M , any Banach A-module N , any A-linear map F : M → N is bounded. In fact, taking an admissible epimorphism An → M , we may assume that M = An. In this case, the claim is clear. The functor is essentially surjective. Take an A-linear epimorphism π : An → M , then ker π is closed by Proposition 3.6 (1) and [BGR84, Proposition 3.7.2.2], so we can endow M with the residue Banach norm.
Proposition 3.11. Let A be a Liu k-algebra. Let r be a k-free polyradius. Let M be Banach A-module. Then M is a finite Banach A-module iff Mr is a finite Banach Ar-module.
Proof. This follows verbatim from [Ber12, Proof of Proposition 2.1.11].
Theorem 3.12. Let X = Sp A be a Liu k-analytic space. Let r be a k-free polyradius. Consider a descent datum (Mr, φ) of Banach modules over Ar. Then the descent datum is effective with respect to the natural
morphism Sp Ar → Sp A. Moreover, if Mr is finitely generated as Ar-module, then the descent M is finitely
generated as A-module.
Proof. The first part follows verbatim from [Day21, Proof of Proposition 3.3]. The second part follows from Proposition 3.11.
3.3. Coherent sheaves on Liu k-analytic spaces.
Definition 3.6. Let X = Sp A be a Liu k-analytic space. Let M be a finite A-module. Then we define a sheaf M ̃ on X as the sheafification of the presheaf Sp B 7→ M ⊗A B, where Sp B runs over the set of affinoid
domains in X.
Proposition 3.13 ([MP21, Lemma 2.4]). Let X = Sp A be a Liu k-analytic space. Let M be a finite A-module. Then M ̃ is a coherent sheaf on X. Moreover, for each affinoid domain Sp B in X,
(3.2) H0(Sp B, M ̃) = M ⊗A B .
Now we recall the theory of coherent sheaves on Liu k-analytic spaces. The following is the analogue of Cartan’s Theorem A.
Theorem 3.14 ([MP21, Proposition 2.1]). Assume that k is non-trivially valued. Let X be a Liu k-analytic space. For each coherent sheaf F on X and each x ∈ X, H0(X, F ) generates Fx as an OX,x-module.
In the rigid setting, Cartan’s Theorem A and Theorem B are due to Kiehl [Kie67] and Tate [Tat71] respectively. As explained in [Kie67], Theorem A and Theorem B together imply the following result:
Theorem 3.15. Let X = Sp A be a Liu k-analytic space. Then the category of coherent sheaves on X is equivalent to the category of finite A-modules. The functors are given by F 7→ H0(X, F ) and M 7→ M ̃ respectively.
Proof. This result was proved in [MP21, Proposition 2.6] under the assumption that k is non-trivially valued. When k is trivially valued, take a k-free polyradius r with at least one component. By [Day21, Théorème 3.13], the category of coherent sheaves on X is equivalent to the category of descent data of coherent sheaves on Xr with respect to Xr → X. The latter category is equivalent to the category of

8 MINGCHEN XIA
descent data of finite Ar-modules with respect to A → Ar, which is then equivalent to the category of finite
A-modules by Theorem 3.12. It is easy to see that the composition of these functors is exactly the one given in the theorem. The functors in the proof are summarized in the following diagram:
Des(Coh, Xr → X) Des(Modfin, A → Ar)
Coh(X) Modfin(A)
.
In particular, Theorem 3.14 holds even when k is trivially valued.
3.4. Quasi-coherent sheaves on Liu spaces.
Definition 3.7. Let f : A → B be a morphism in LiuAlgk. We say f is a homotopy epimorphism if the
corresponding morphism Sp B → Sp A of Liu k-spaces identifies Sp B with a Liu domain in Sp A.
Definition 3.8. Let A be a Liu k-algebra. A Banach A-module M is called transversal if M is transversal to all homotopy epimorphisms from A: for all homotopy epimorphism A → B to a Liu k-algebra B, the natural morphism
M ˆ⊗L
AB → M ˆ⊗AB is an isomorphism.
The following result will be proved in Appendix A.
Theorem 3.16. Let A be a Liu k-algebra. Let B, C be Liu k-algebras over A such that Sp C → Sp A is a Liu domain. Then the natural morphism
C⊗ˆ L
AB → C ˆ⊗AB
is an isomorphism.
Definition 3.9. Let A be a Liu k-algebra. Let M be a transversal Banach A-module. Write X = Sp A. We define a sheaf of OX -modules M ̃ as the sheafification of the presheaf
Sp B 7→ M ⊗ˆ AB
on X, where Sp B runs over the set of affinoid domains in X. We call M ̃ the sheaf associated to M . An OX -module M is quasi-coherent if there is a transversal A-module M such that M = M ̃.
Example 3.2. Let X be a Liu k-analytic space. Then all coherent sheaves on X are quasi-coherent. See for example [MP21, Proof of Proposition 2.6(1)]. To be more precise, the same proof shows that for any Liu domain Sp B → Sp A = X, B is a flat A-algebra. Let M be a finite A-module. Consider a presentation
A⊕S → A⊕N → M → 0 .
We have a commutative diagram with exact rows:
A⊕S ⊗ˆ L
AB A⊕N ⊗ˆ L
AB M ˆ⊗L
AB 0
A⊕S ⊗A B A⊕N ⊗A B M ⊗A B 0
.
In order to show that M is transversal, it suffices to show that A is, which is obvious.
Theorem 3.17 (Tate acyclicity theorem). Let X = Sp A be a Liu k-analytic space. Let Sp A1, . . . , Sp An
be a finite G-covering of X by Liu domains. Let M be a transversal Banach A-module, then the following sequence is admissible and exact
(3.3) 0 → M → ∏
i
1
M ˆ⊗AAi1 → ∏
i
1 <i2
M ˆ⊗AAi1 ⊗ˆ AAi2 → · · · → M ˆ⊗AA1⊗ˆ AA2⊗ˆ A · · · ˆ⊗AAn → 0 .

LIU MORPHISMS 9
Proof. It follows from the same proof as [BBK17, Lemma 5.34 and Remark 5.35]. We give a sketch for the convenience of the readers. When M = A, we can prove (3.3) exactly as in the affinoid setting, namely it suffices to treat the case where the covering is given by {A{f }, A{f −1}} for some f ∈ A. Then the acyclicity follows from a direct computation. See [BGR84, Chapter 8] for details. For a general M , taking derived tensor product with (3.3) for M = A and apply the transversality condition, we -
get (3.3) for M .
Corollary 3.18. Let X = Sp A be a Liu k-analytic space. Let M be a quasi-coherent sheaf on X. Let M = H0(X, M). Then for any Liu domain Sp B in X, we have
H0(Sp B, M) = M ˆ⊗AB .
Corollary 3.19. Let X = Sp A be a Liu k-analytic space. Let M be a quasi-coherent sheaf on X. Then
Hi(X, M) = 0 , i > 0 . Proof. This follows from [Stacks, Tag 01EW]∗ and Theorem 3.17.
Definition 3.10. Let X be a k-analytic space. Let F be a sheaf of OX -modules (resp. OX -algebras). A
Banach structure on F is the following data: given any Liu domain Sp A in X, F (Sp A) is topologized so that it forms a Banach A-module (resp. Banach A-algebra). We assume that the following condition holds: if Sp A, Sp B are Liu domains in X such that Sp A is an analytic domain of Sp B, then the natural morphism
of A-modules (resp. A-algebras) F (Sp B)⊗ˆ BA → F (Sp A) is bounded.
An OX -module(resp. OX -algebra) with a given Banach structure is called a sheaf of Banach modules
(resp. sheaf of Banach algebras) on X.
A morphism F → G of sheaves of Banach modules (resp. sheaves of Banach algebras) on X is a morphism of the underlying sheaves of modules (resp. sheaves of algebras) such that for each Liu domain Sp B in X, F (Sp B) → G(Sp B) is bounded. The category of sheaves of Banach modules on X is denoted by BanModX .
Proposition 3.20. Let X = Sp A be a Liu k-analytic space. Let M be a quasi-coherent sheaf on X. Let M = H0(X, M). Let F be a sheaf of Banach OX -modules. Then
HomBanModX (M, F ) = HomBanModA (M, H0(X, F )) .
Proof. Given a morphism f : M → F in BanModX , by taking global sections, we get H0(f ) : M →
H0(X, F ). Conversely, given a bounded homomorphism F : M → H0(X, F ), we construct the morphism of
sheaves f : M → F as follows: for any affinoid domain Sp B in X, define f (Sp B) : M ˆ⊗AB → H0(Sp B, F )
as the natural homomorphism of Banach B-modules induced by the homomorphism of Banach A-modules:
M −F→ H0(X, F ) → H0(Sp B, F ) .
By the obvious functoriality, this is a morphism of Banach OX -modules. It is easy to verify that these maps
are inverse to each other.
Theorem 3.21. Let f : Sp B → Sp A be a morphism in Liuk. Let M be a quasi-coherent sheaf on Sp B.
Then f∗M is a quasi-coherent sheaf on Sp A associated to the transversal A-module H0(Sp B, M).
Proof. Let F : A → B be the corresponding homomorphism of Liu k-algebras. Let M = H0(Sp B, M). We claim that M is transversal as Banach A-module. This is proved in [BBK17, Lemma 4.48], we reproduce the argument: let Sp D → Sp A be a Liu domain. We need to show that
M ˆ⊗L
AD = M ˆ⊗AD . Observe that
M ˆ⊗L
AD = M ˆ⊗L
B(B⊗ˆ L
AD) = M ˆ⊗L
B (B ˆ⊗AD) = M ˆ⊗B(B⊗ˆ AD) = M ˆ⊗AD ,
where for the second equality, we have applied Theorem 3.16; for the third we used Lemma 3.9 and the transversality of M . This concludes the claim. In order to prove the theorem, it suffices to show M ̃A = f∗M. Here M A is M regarded as a Banach A-module. To prove this, it suffices to take an affinoid domain Sp C in Sp A and show that (3.4) M ˆ⊗AC = M(f −1 Sp C) .
∗This result is only stated for a ringed space, but it is easy to check that the proof works in the current situation as well.

10 MINGCHEN XIA
By Lemma 3.9, f −1 Sp C is a Liu domain in Sp B and f −1 Sp C = Sp(B⊗ˆ AC). Hence (3.4) follows from
Corollary 3.18.
Lemma 3.22. Let A be a Liu k-algebra. Consider an admissible exact sequence
0→F →G→H
in BanModA. Assume that G, H are both transversal, then so is F .
This is clear by definition.
Corollary 3.23. Let f : Y → X be a quasi-compact and quasi-separated morphism of k-analytic spaces. Assume that X = Sp A is Liu. Let F be a Banach sheaf of OY -modules such that for each affinoid domain
Sp C in Y , F |Sp C is quasi-coherent. Then f∗F is quasi-coherent on X.
Proof. Let {Ui = Sp Bi} be a finite affinoid covering of Y . For each i, j, let Uij = Ui ∩ Uj, take a finite
affinoid covering {Uijk} of Uij. Let fi (resp. fijk) be the restriction of f to Ui (resp. Uijk). Then fi∗F (resp.
fijk∗F ) is the quasi-coherent sheaf associated to F (Ui) (resp. F (Uijk)) by Theorem 3.21. In particular,
F (Ui) (resp. F (Uijk)) is a transversal Banach A-module.
There is an admissible exact sequence
0 → F (Y ) → ∏
i
F (Ui) → ∏
i,j,k
F (Uijk) .
Thus F (Y ) is a transversal Banach A-modules by Lemma 3.22. In particular, for any affinoid domain Sp B in X, we have an admissible exact sequence
0 → F (Y )⊗ˆ AB → ∏
i
F (Ui)⊗ˆ AB → ∏
i,j,k
F (Uijk)⊗ˆ AB .
By our assumption and Corollary 3.18, this sequence can be rewritten as
0 → F (Y )⊗ˆ AB → ∏
i
F (Ui ∩ f −1(Sp B)) → ∏
i,j,k
F (Uijk ∩ f −1(Sp B)) .
It is now clear that F (Y  ̃)A = f∗F and f∗F is quasi-coherent.
Theorem 3.24. Let f : Y = Sp B → X = Sp A be a morphism in Liuk. Let F be a quasi-coherent sheaf on
X. Let F = H0(X, F ). Assume that F is transversal to f :
F ˆ⊗L
AC = F ⊗ˆ AC
for all Liu domains Sp C in Sp B. Then the left adjoint f ∗ of f∗ : BanModY → BanModX at F exists and
f ∗F is the quasi-coherent sheaf associated to F ⊗ˆ AB.
Proof. We claim that F ⊗ˆ AB is a transversal Banach B-module.
This is proved in [BBK17, Lemma 4.48], we reproduce their proof: let Sp C → Sp B be a Liu domain, we need to show
(F ⊗ˆ AB)⊗ˆ L
BC = (F ⊗ˆ AB)⊗ˆ BC . In fact, (F ⊗ˆ AB)⊗ˆ L
BC = (F ⊗ˆ L
AB)⊗ˆ L
BC = F ˆ⊗L
AC = F ⊗ˆ AC = (F ⊗ˆ AB)⊗ˆ BC ,
which concludes the claim. By Proposition 3.20, for any sheaf of Banach OY -modules G,
HomBanModY (F ⊗ˆ  ̃ AB, G) = HomBanModB (F ˆ⊗AB, H0(Y, G)) = HomBanModA (F, H0(Y, G)) .
On the other hand, by Proposition 3.20, we have
HomBanModX (F , f∗G) = HomBanModA (F, H0(Y, G)) .
We conclude.
4. Liu morphisms and quasi-coherent sheaves of Liu algebras
Let k be a complete non-Archimedean valued field.

LIU MORPHISMS 11
4.1. Liu morphisms.
Definition 4.1. Let f : X → Y be a morphism in Ank. We say f is Liu if for any Liu domain Z of Y ,
f −1Z is a Liu domain. For any k-analytic space Y , let Liu→Y,k denote the category of Liu morphisms X → Y . A morphism
between two Liu morphisms X1 → Y and X2 → Y is a morphism of in the over-category Ank/Y .
The following two propositions are obvious.
Proposition 4.1. Let f : X → Y , g : Y → Z be morphisms in Ank. Assume that f , g are both Liu, then
so is g ◦ f .
Proposition 4.2. Let f : X → Y be a Liu morphism in Ank. Then f is separated and quasi-compact.
Lemma 4.3. Let f : X → Y be a morphism in Liuk. Let F be a coherent sheaf on X. Then Rif∗F = 0 for
all i > 0.
Proof. The problem is local, so it suffices to show that Hi(f −1(Sp A), F ) = 0 for any affinoid domain Sp A of Y . This follows from the fact that f −1(Sp A) is Liu (Proposition 3.4).
Now we prove that Liu morphism is a G-local property on the base.
Theorem 4.4. Let f : X → Y be a morphism in Ank. Assume that Y is separated. Then the following are
equivalent:
(1) f is Liu. (2) There is a G-covering {Ui} of Y by Liu domains such that f −1Ui is Liu for each i. If moreover Y is Liu. Then the conditions are further equivalent to (3) f is quasi-compact and separated, for any analytic field extension k′/k, and coherent sheaf F on Xk′ ,
Rifk′∗F = 0 , i > 0 . (4) X is Liu.
Proof. (1) =⇒ (2): Trivial. (2) =⇒ (1): Let Z be a Liu domain of Y . Let A = H0(Z, OZ). We show that f −1Z is Liu. Take a
finite sub-G-covering {U1, . . . , Un} from {Ui} that covers Z. By [CT21, Theorem 1.2], the morphism f is
separated. Hence f −1Z is separated. It suffices to prove that f −1Z is universally cohomologically Stein. As our assumptions are invariant under base field extension, it suffice to show the following: for any coherent sheaf F on f −1Z,
Hi(f −1Z, F ) = 0 , i > 0 . By Lemma 4.3 and Leray spectral sequence, it suffices to show that
Hi(Z, f∗F ) = 0 , i > 0 .
This follows from Corollary 3.23 and Corollary 3.19. Now assume that Y is Liu. (2) =⇒ (3): As in the previous part, we may assume that k′ = k and it suffices to prove that for any affinoid domain Sp A in Y , Hi(f −1(Sp A), F ) = 0 for all i > 0, which is already proved in the previous part. (3) =⇒ (4): Trivial. (4) =⇒ (1): This follows from Proposition 3.4.
Example 4.1. Recall [Day21, Définition 3.18]: a morphism f : X → Y in Ank is said to be almost affinoid
( presque affinoïde in French) if there is a G-covering of Y by affinoid domains {Ui} such that f −1Ui is
affinoid for each i. Let f : X → Y be an almost affinoid morphism in Ank. If Y is separated, then f is Liu. This follows
immediately from Theorem 4.4.
Corollary 4.5. Let f : X → Y be a Liu morphism in Ank. Let g : Y ′ → Y be a morphism in Ank. Assume
that Y and Y ′ are separated. Let f ′ : X′ → Y ′ be the base change of f by g. Then f ′ is also Liu.
Proof. The problem is G-local on Y and Y ′, so we may assume that both of them are affinoid. Now X′ is Liu by Proposition 3.4.

12 MINGCHEN XIA
Corollary 4.6. Let f : X → Y be a morphism of k-analytic spaces. Assume that Y is separated. Let k′/k be an analytic extension. Suppose f is Liu, then so is fk′.
4.2. Quasi-coherent sheaves of Liu algebras.
Definition 4.2. Let X be a k-analytic space. A sheaf of Banach algebras F on X is a quasi-coherent sheaf of Liu k-algebras if for each Liu domain Sp A in X, H0(Sp A, F ) is a Liu k-algebra and F |Sp A is a quasi
coherent sheaf (in the sense of Definition 3.9). A morphism of quasi-coherent sheaves of Liu k-algebras on X is a homomorphism of the underlying sheaves of OX -algebras. We denote the category of quasi-coherent
sheaves of Liu k-algebras on X by LiuAlgQCoh
X,k .
Remark 4.1. By Corollary 3.7, a sheaf of Liu k-algebras admits a natural Banach structure. Moreover, a morphism of quasi-coherent sheaves of Liu k-algebras on X is automatically a morphism in BanModX .
Hence LiuAlgQCoh
X,k is a full subcategory of BanModX .
Remark 4.2. We do not define a quasi-coherent sheaf on a k-analytic space. In fact, according to the philosophy of [BBK17], in the global setting, the correct notion to consider is the derived category of quasicoherent sheaves.
Proposition 4.7. Let X be a separated k-analytic space. Let A be a quasi-coherent sheaf of Liu k-algebras on X. Consider the presheaf F on Ank:
T 7→ { (f, φ) : f ∈ HomAnk (T, X), φ ∈ HomOT (f ∗A, OT ) } . Then F is representable.
Proof. Assume first that X is paracompact. It suffices to verify that the conditions of Theorem 2.1 are satisfied. (1) The sheaf condition follows from [Ber93, Proposition 1.3.2]. (2) Take a locally finite affinoid covering {Ui} of X. Observe that each Ui is closed as X is separated.
Take Fi to be the subfunctor of F consisting of pairs (f : T → S, φ) such that f (T ) ⊆ Ui. Then Fi is
represented by Sp A(Ui). Thus 2(a) is satisfied. The conditions 2(b) and 2(c) follows from the choice of Ui.
In general, take a paracompact open covering {Vi} of X as in the final step of [Ber93, Proof of Propo
sition 1.4.1]. Repeat the same construction as in the previous step, with {Vi} in place of {Ui}, we get
subfunctors Fi of F . Again, it suffices to verify the conditions of 2(a), 2(b), 2(c) of Theorem 2.1. The
conditions 2(b), 2(c) follows from the choice of {Vi}, while the condition 2(a) follows from the special we
just treated.
Remark 4.3. Of course, in Proposition 4.7, one can weaken the separateness assumption to Hausdorff condition. It is not clear to the author if one can remove this condition.
Definition 4.3. Let X be a separated k-analytic space. Let A be a quasi-coherent sheaf of Liu k-algebras on X. We define the relative spectrum SpX A as the k-analytic space representing the presheaf F in
Proposition 4.7. Note that there is a natural morphism π : SpX A → X. We sometimes call π the rel
ative spectrum as well.
Proposition 4.8. Let X be a separated k-analytic space. Let A be a quasi-coherent sheaf of Liu k-algebras on X. Let π : SpX A → X be the relative spectrum, then
(1) For each Liu domain Sp A in X, the restriction of π to π−1(Sp A) → Sp A is the same as Sp H0(Sp A, A) → Sp A.
(2) For any morphism of separated k-analytic spaces g : X′ → X, g∗A is a quasi-coherent sheaf of Liu k-algebras and the natural morphism
X′ ×X SpX A → SpX′ g∗A
is an isomorphism over X′. (3) The universal map
A → π∗OSpX A
is an isomorphism of sheaves of Banach algebras on X.
We omit the straightforward proof. See [Stacks, Tag 01LQ] for example.

LIU MORPHISMS 13
Corollary 4.9. Let X be a separated k-analytic space. Then the functor
SpX : LiuAlgQCoh
X,k → Liu→X,k
is an anti-equivalence of categories. The quasi-inverse is given by f 7→ f∗.
Now we prove that being a quasi-coherent sheaf of Liu k-algebras is a G-local property.
Proposition 4.10. Let X be a separated k-analytic space. Let F be a sheaf of Banach algebras on X. Let {Ui} be a G-covering of X by Liu domains. Then the following are equivalent:
(1) F is a quasi-coherent sheaf of Liu k-algebras. (2) For each i, H0(Ui, F ) is a Liu k-algebra and F |Ui is quasi-coherent.
Proof. (1) =⇒ (2): Trivial. (2) =⇒ (1): Let Sp A be a Liu domain in X. We need to show that H0(Sp A, F ) is a Liu k-algebra and that F |Sp A is quasi-coherent. By assumption, X is separated, hence for each i, Ui ∩ Sp B is a Liu domain.
We take finitely many U1, . . . , Un from {Ui}, that covers Sp A. Then we may assume that X = Sp A and
{Ui} = {U1, . . . , Un}. By [Ber93, Proposition 1.3.3], the spaces Sp H0(Ui, F ) glue together to form a space Y ,
we get a natural morphism f : Y → X. Moreover, F = f∗OY . Hence F is quasi-coherent by Corollary 3.23.
By Theorem 4.4, f is a Liu morphism, hence Y is Liu. This proves that H0(Sp A, F ) = H0(Y, OY ) is a Liu
k-algebra.
5. Quasi-Liu morphisms
Let k be a complete non-Archimedean valued field.
Definition 5.1. A k-analytic space X is called quasi-Liu if the following conditions hold:
(1) X is quasi-compact. (2) H0(X, OX ) is a Liu k-algebra.
(3) There is a Liu k-analytic space Sp B and a morphism i : X → Sp B, which realizes X as an analytic domain in Sp B.
Proposition 5.1. Let X be a quasi-Liu k-analytic space. Then the natural morphism X → Sp H0(X, OX )
is an analytic domain embedding.
Proof. Let Y = Sp B be a Liu k-analytic space such that there is a morphism i : X → Y , which is an analytic domain embedding. Now we have a natural homomorphism B → A given by the restriction map B = H0(Y, OY ) → A = H0(X, OX ). In particular, we get a factorization X → Sp A → Y of i by
Theorem 3.8. Now it remains to show that X → Sp A is an analytic domain. Take x ∈ X. We can find rational domains V1, . . . , Vm of Y contained in X such that x ∈ ∩iVi and ∪iVi is a neighborhood of x in Y .
Let Ui be the rational domain of Sp A induced by Vi. We claim that Ui ⊆ X. Assuming this claim, then we
find that x ∈ ∪iUi and ∪iUi ⊆ X is a neighborhood of x in Sp A. We conclude that X → Sp A is indeed an
analytic domain. To prove the claim, we will fix some i and omit the indices from Vi, Ui. We write V = Sp B{r−1f /g},
where f = (f1, . . . , fn) is a tuple of elements in B, r = (r1, . . . , rn) is a tuple of positive real numbers and g
is an element in B such that fj, g do not have a common zero. Then U = Sp A{r−1f /g}. Let X′ denote the
analytic domain of X consisting of points where |fj| ≤ rj|g| for all j = 1, . . . , n. As V ⊆ X, we could identify
X′ with the analytic domain in Y defined by the same inequalities. In particular, X′ is a Liu space. Take
a finite affinoid covering Sp Ai of X, we know that A is the equalizer of ∏
i Ai ⇒ ∏
i,j Aij , where Sp Aij =
Sp Ai ∩ Sp Aj. By Theorem 3.16, A{r−1f /g} is the equalizer of ∏
i Ai{r−1f /g} ⇒ ∏
i,j Aij {r−1f /g}. As
Sp Ai{r−1f /g} is an affinoid covering of X′, we find an isomorphism H0(X′, OX′ ) ∼= A{r−1f /g}. It induces
an isomorphism X′ → U by Theorem 3.8, which is the inverse of the composition U → V → X′. In particular, we find that U → X is injective.
Lemma 5.2. Let f : X → Y be a morphism in Ank. Assume that Y is Liu and X is quasi-Liu. Let
g : Y ′ → Y be a Liu domain in Y . Then X′ := X ×Y Y ′ is also quasi-Liu.

14 MINGCHEN XIA
Proof. Let f ′ : X′ → Y ′ be the base change of f . It suffices to show that H0(X′, OX′ ) is a Liu k-algebra.
By decomposing X → Y as in the proof of Proposition 5.1, we have the commutative diagram:
X′ X
Y ′ ×Y Sp H0(X, OX ) Sp H0(X, OX )
Y′ Y
.
Replacing Y by Sp H0(X, OX ) and Y ′ by Y ′×Y Sp H0(X, OX ), we may assume that H0(X, OX ) = H0(Y, OY )
and f is the analytic domain embedding X → H0(X, OX ) in Proposition 5.1.
We have the following commutative diagram:
X′ X
Y′ Y
g′
f′ f g
.
Take a finite affinoid G-covering Xi of X, then we get an admissible exact sequence
0 → H0(Y, OY ) → ∏
i
H0(Xi, OX ) → ∏
i,j
H0(Xij , OX ) ,
where Xij := Xi ∩ Xj. Taking the derived tensor ˆ⊗L
H
0(Y,OY )H0(Y ′, OY ′ ) and applying Theorem 3.16 and
(3.1), we get an admissible exact sequence
0 → H0(Y ′, OY ′ ) → ∏
i
H0(g′−1(Xi), OX′ ) → ∏
i,j
H0(g′−1(Xij ), OX′ ) .
In particular,
H0(Y ′, OY ′ ) = H0(X ′, OX′ )
and this algebra is a Liu algebra. Also observe that the morphism f ′ : X′ → Y ′ satisfies the assumption of Definition 5.1(3) and X′ is quasi-Liu.
Definition 5.2. Let f : X → Y be a morphism of k-analytic spaces. We say f is quasi-Liu if for any Liu domain Z in Y , f −1Z is quasi-Liu.
Proposition 5.3. Let f : X → Y be a quasi-Liu morphism in Ank. Then f is separated and quasi-compact.
This is obvious.
Proposition 5.4. Let f : X → Y be a morphism of k-analytic spaces. Assume that Y is separated. The following are equivalent:
(1) f is quasi-Liu. (2) There is a G-covering of Y by Liu domains {Ui} such that each f −1(Ui) is quasi-Liu.
(3) f∗OX is a quasi-coherent sheaf of Liu k-algebras and the natural morphism X → SpY f∗OX is
quasi-compact and realizes X as an analytic domain. (4) f∗OX is a quasi-coherent sheaf of Liu k-algebras on Y and X can be realized as an analytic domain
in SpY A through a quasi-compact morphism X → SpY A over Y , where A is a quasi-coherent sheaf
of Liu k-algebras on Y .
Proof. It is clear that (3) =⇒ (4) =⇒ (1) =⇒ (2). (2) =⇒ (3): Observe that f∗OX is quasi-coherent by Corollary 3.23. It is a quasi-coherent sheaf of Liu
k-algebras by Lemma 5.2 and Proposition 4.10. The last assertion follows from Proposition 5.1.
Proposition 5.5. Let f : X → Y , g : Y → Z be morphisms in Ank. If f is quasi-Liu and g is Liu, then
g ◦ f is quasi-Liu.
Proof. We need to show that the inverse image of a Liu domain U in Z by g ◦ f is quasi-Liu. But g−1(U ) is Liu and we find that f −1(g−1(U )) is quasi-Liu by definition.

LIU MORPHISMS 15
6. Open problems
Let k be a complete non-Archimedean valued field. We give a list of unsolved problems related to Liu k-algebras and Liu morphisms.
Question 6.1. Is there a global version of Zariski’s main theorem in non-Archimedean geometry?
A local version is proved by Ducros in [Duc07, Théorème 3.2] based on Temkin’s graded reduction. This theorem roughly says that a quasi-finite morphism of separated k-analytic spaces can be written locally as the composition of an étale morphism, an analytic domain embedding and a finite morphism. This theorem, however, does not tell us much information about the global structure of a quasi-finite morphism, in contrast to the classical Zariski’s main theorem ([Stacks, Tag 02LR]). We would like to -
know if the following holds:
Conjecture 6.1. Let f : X → S be a quasi-finite morphism of quasi-compacted, separated k-analytic spaces. Then we can decompose f into h ◦ i ◦ g, where g : X → Y is finite, i : Y → Z is a quasi-compact analytic domain embedding, h : Z → S is étale.
We hope to find suitable extra conditions on f , which guarantee that i is a Liu domain embedding as well.
Question 6.2. Are Liu k-algebras excellent?
In the case of affinoid algebras, this is proved by Ducros [Duc09]. The author is not sure if Ducros’ argument can be generalized to the current setting.
Question 6.3. Can Liu morphisms be effectively descended with respect to fpqc (or Tate-flat) coverings?
In a previous version of this paper, the author claimed a proof. But as pointed out by the referee, the proof contains a gap. By [Day21, Théorème A], the essential difficulty is to treat the case of descending along a finite faithfully flat morphism of affinoid spaces.
Appendix A. Results from Ben-Bassat–Kremnizer
We slightly generalize a few results in [BBK17].
Definition A.1. Let f : A → B be a morphism in BanAlgk. We say f is a homotopy epimorphism if the
following equivalent conditions are satisfied
(1) Lf∗ : D−(B) → D−(A) is fully faithful. (2) The natural morphism
Lf ∗ ◦ Lf∗ → idD−(B)
is a natural equivalence. (3) B ˆ⊗L
AB = B.
Definition A.2. Let f : Sp A → Sp B be a morphism in Liuk. We say f is a homotopy monomorphism if
the corresponding morphism B → A in LiuAlgk is a homotopy epimorphism (Definition A.1).
Lemma A.1. Let A → B be a morphism in LiuAlgk. For any r > 0, f ∈ A, we have the natural
isomorphisms in D−(A):
B⊗ˆ L
AA{r−1f } → B⊗ˆ AA{r−1f } , B⊗ˆ L
AA{rf −1} → B⊗ˆ AA{rf −1} .
Proof. We only treat the former. As in the case of affinoid algebras ([BBK17, Lemma 5.13]), it suffices to prove that the morphism
T − f : A{r−1f } → A{r−1f }
is a strict monomorphism. That this morphism is a monomorphism is well-known (and can be proved exactly as in the affinoid case). To see T − f is strict, by [Ber12, Proposition 2.1.2], we could assume that k is non-trivially valued. Then the image of T − f is closed by Proposition 3.6. Hence T − f is strict.

16 MINGCHEN XIA
Lemma A.2. Let A → B be a morphism in LiuAlgk. Let f1, . . . , fn, g ∈ A be elements that generate A.
Let r1, . . . , rn ∈ R>0, Then we have the natural isomorphism in D−(A):
B ˆ⊗L
AA{r−1
i fi/g} → B⊗ˆ AA{r−1
i fi/g} .
The proof goes exactly as [BBK17, Lemma 5.14].
Lemma A.3. Let A be a Liu k-algebra. Let A1, A2, B be Liu k-algebras over A. Assume that
(1) Sp Ai → Sp A (i = 1, 2) are Liu domains.
(2) Sp A1 ∪ Sp A2 is also a Liu domain in Sp A with Liu k-algebra C.
(3) Let A0 be the Liu k-algebra of the Liu domain Sp A1 ∩ Sp A2 (c.f. Corollary 3.5). Then the following
natural morphisms are isomorphisms
Ai ˆ⊗L
AB → Ai⊗ˆ AB
for i = 0, 1, 2.
Then we have a natural isomorphism
C⊗ˆ L
AB → C⊗ˆ AB .
This is obvious.
Theorem A.4. Let A be a Liu k-algebra. Let B, C be Liu k-algebras over A such that Sp C → Sp A is a Liu domain. Then we have a natural isomorphism
C⊗ˆ L
AB → C⊗ˆ AB . In particular, Sp C → Sp A is a homotopy monomorphism.
Proof. Having established the three preceding lemmas, the proof is the same as [BBK17, Proof of Theorem 5.16].
Theorem A.5. Let f : A → B be a morphism in LiuAlgk. Then f is a homotopy epimorphism iff the
corresponding morphism Sp B → Sp A is a Liu domain.
Proof. Same proof as [BBK17, Theorem 5.31].
In terms of [BBK17], we have shown that LiuAlgk is a homotopy Zariski transversal subcategory of Bank.

REFERENCES 17
References
[BBB16] F. Bambozzi and O. Ben-Bassat. Dagger geometry as Banach algebraic geometry. Journal of Number Theory 162 (2016), pp. 391–462. [BBK17] O. Ben-Bassat and K. Kremnizer. Non-Archimedean analytic geometry as relative algebraic geometry. Annales de la Faculté des sciences de Toulouse: Mathématiques 26.1 (2017), pp. 49126. [Ber12] V. G. Berkovich. Spectral theory and analytic geometry over non-Archimedean fields. 33. American Mathematical Soc., 2012. [Ber93] V. G. Berkovich. Étale cohomology for-
 non-Archimedean analytic spaces. Publications Mathématiques de l’Institut des Hautes Études Scientifiques 78.1 (1993), pp. 5–161.
[BGR84] S. Bosch, U. Güntzer, and R. Remmert. Non-archimedean analysis. Vol. 261. Springer Berlin, 1984. [Con06] B. Conrad. Relative ampleness in rigid geometry. Annales de l’institut Fourier 56.4 (2006), pp. 1049–1126. [CT21] B. Conrad and M. Temkin. Descent for non-archimedean analytic spaces. 2021. arXiv:
1912.06230 [math.AG].
[Day21] M. Daylies. Descente fidèlement plate et algébrisation en géométrie de Berkovich. 2021. arXiv:
2103.10490 [math.AG].
[Duc07] A. Ducros. Variation de la dimension relative en géométrie analytique p-adique. Compositio Mathematica 143.6 (2007), pp. 1511–1532. [Duc09] A. Ducros. Les espaces de Berkovich sont excellents. Annales de l’institut Fourier 59.4 (2009), pp. 1443–1552. [EGA I-new] J. Dieudonné and A. Grothendieck. Éléments de géométrie algébrique: I. Le langage des schémas. Springer Berlin Heidelberg New York, 1971. [EGA II] J. Dieudonné and A. Grothendieck. Éléments de géométrie algébrique: II. Étude global-
e élémentaire de quelques classes de morphismes. Vol. 8. Publications Mathématiques de l’IHÉS, 1961, pp. 5–222. [Kie67] R. Kiehl. Theorem A und Theorem B in der nichtarchimedischen Funktionentheorie. Inventiones mathematicae 2.4 (1967), pp. 256–273. [Liu88] Q. Liu. Un contre-exemple au “critére cohomologique d’affinoidicité”. CR Acad. Sci. Paris Sér. I Math 307.2 (1988), pp. 83–86. [Liu90] Q. Liu. Sur les espaces de Stein quasi-compacts en géométrie rigide. Tohoku Mathematical Journal, Second Seri-
es 42.3 (1990), pp. 289–306. [MP21] M. Maculan and J. Poineau. Notions of Stein spaces in non-Archimedean geometry. Journal of Algebraic Geometry 30.2 (2021), pp. 287–330.
[PP] J. Poineau and A. Pulita. Banachoid spaces. https://poineau.users.lmno.cnrs.fr/Textes/Banachoid.pdf
[Sch99] J.-P. Schneiders. Quasi-abelian categories and sheaves. Société mathématique de France, 1999. [Stacks] The Stacks Project Authors. Stacks Project. http://stacks.math.columbia.edu. 2020. [Tat71] J. Tate. Rigid analytic spaces. Inventiones mathematicae 12.4 (1971), pp. 257–289. [Tem04] M. Temkin. On local properties of non-Archimedean analytic spaces II. Israel Journal of Mathematics 140.1 (2004), pp. 1–27. [Tem21] M. Temkin. Non-archimedean pinchings. 2021. arXiv: 2105.13692 [math.AG].
Mingchen Xia, Department of Mathematics, Chalmers Tekniska Högskola, Göteborg Email address, xiam@chalmers.se Homepage, http://www.math.chalmers.se/~xiam/ .

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:14.569Z
- **Text Length:** 51438 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
