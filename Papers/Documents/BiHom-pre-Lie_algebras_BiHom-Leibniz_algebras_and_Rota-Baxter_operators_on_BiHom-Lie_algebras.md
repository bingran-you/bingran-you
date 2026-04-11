# PDF Document: Liu et al. - 2020 - BiHom-pre-Lie algebras, BiHom-Leibniz algebras and Rota-Baxter operators on BiHom-Lie algebras.pdf

**File Path:** Liu et al. - 2020 - BiHom-pre-Lie algebras, BiHom-Leibniz algebras and Rota-Baxter operators on BiHom-Lie algebras.pdf

**Processed Date:** 2026-02-10T18:15:10.280Z

**File Size:** 169.92 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2736

**Title:** BiHom-pre-Lie algebras, BiHom-Leibniz algebras and Rota-Baxter operators on BiHom-Lie algebras

**Collection:** Large Files

---

## Extracted Text Content

arXiv:1706.00474v2 [math.QA] 2 Feb 2020
BiHom-pre-Lie algebras, BiHom-Leibniz algebras and
Rota-Baxter operators on BiHom-Lie algebras
Ling Liu College of Mathematics and Computer Science, Zhejiang Normal University, Jinhua 321004, China e-mail: ntliulin@zjnu.cn
Abdenacer Makhlouf Universit ́e de Haute Alsace, IRIMAS-D ́epartement de Math ́ematiques, 6 bis, rue des fr`eres Lumi`ere, F-68093 Mulhouse, France e-mail: Abdenacer.Makhlouf@uha.fr
Claudia Menini University of Ferrara, Department of Mathematics and Computer Science Via Machiavelli 30, Ferrara, I-44121, Italy e-mail: men@unife.it
Florin Panaite Institute of Mathematics of the Romanian Academy, PO-Box 1-764, RO-014700 Bucharest, Romania e-mail: florin.panaite@imar.ro
February 4, 2020
Abstract
We contribute to the study of Rota-Baxter operators on other types of algebras than associative and Lie algebras. If A is an algebra of a certain type and R is a Rota-Baxter operator on A, one can define a new multiplication on A by means of R and the previous multiplication and ask under what circumstances the new algebra is of the same type as A. Our first main result deals with such a situation in the case of BiHom-Lie algebras. Our second main result is a BiHom analogue of Aguiar’s theorem tha-
t shows how to obtain a pre-Lie algebra from a Rota-Baxter operator of weight zero on a Lie algebra. The BiHom analogue does not work for BiHom-Lie algebras, but for a new concept we introduce here, called left BiHom-Lie algebra, at which we arrived by defining first the BiHom version of Leibniz algebras. Keywords: Rota-Baxter operator; BiHom-Lie algebra; BiHom-Leibniz algebra MSC2010: 15A04; 17A99; 17D99
1

1 Introduction
Algebras of Hom-type appeared in the Physics literature of the 1990’s, in the context of quantum deformations of some algebras of vector fields, such as the Witt and Virasoro algebras, in connection with oscillator algebras ([3, 12]). A quantum deformation consists of replacing the usual derivation by a σ-derivation. It turns out that the algebras obtained in this way do not satisfy the Jacobi identity anymore, but instead they satisfy a modified version involving a homomorphism. This kind of alge-
bras were called Hom-Lie algebras and studied by Hartwig, Larsson and Silvestrov in [11, 13]. The Hom analogue of associative algebras was introduced in [17], where it is shown that the commutator bracket defined by the multiplication in a Hom-associative algebra leads to a Hom-Lie algebra. A categorical approach to Hom-type algebras was considered in [7]. A generalization has been given in [9], where a construction of a Hom-category including a group action led to concepts of BiHom-type algebras.-
 Hence, BiHom-associative algebras and BiHom-Lie algebras, involving two linear maps (called structure maps), were introduced. The main axioms for these types of algebras (BiHom-associativity, BiHom-skew-symmetry and BiHom-Jacobi condition) were dictated by categorical considerations. Rota-Baxter operators first appeared in G. Baxter’s work in probability and the study of fluctuation theory ([5]). Afterwards, Rota-Baxter algebras were intensively studied by Rota ([19, 20]) in connection with combi-
natorics. Rota-Baxter operators have appeared in a wide range of areas in pure and applied mathematics, for example in the work of Connes and Kreimer ([8]) about their Hopf algebra approach to renormalization of quantum field theory. This seminal work was followed by an important development of the theory of Rota-Baxter algebras and their connections to other algebraic structures, see for example the book [10] and references therein. In the context of Lie algebras, Rota-Baxter operators were intro-
duced independently by Belavin and Drinfeld ([6]) and Semenov-Tian-Shansky ([21]), in connection with solutions of the (modified) classical Yang-Baxter equation. The first aim of this paper is to obtain a BiHom analogue of the classical result, due to Aguiar ([2]), saying that, if (L, [·, ·]) is a Lie algebra and R : L → L is a Rota-Baxter operator of weight 0, and one defines a new operation on L by x · y = [R(x), y], then (L, ·) is a left pre-Lie algebra. The Hom analogue of this result was obta-
ined in [16], see also [18]. So, we first define, in Section 3, the concepts of (left and right) BiHom-pre-Lie algebras and present some properties of these objects. Then, our aim was to prove that, if (L, [·, ·], α, β) is a BiHom-Lie algebra and R : L → L is a Rota-Baxter operator of weight 0 such that R ◦ α = α ◦ R and R ◦ β = β ◦ R, then (L, ·, α, β) is a left BiHom-pre-Lie algebra, where x · y = [R(x), y]. It turns out that this does not work (unless the structure maps α and β are bijective). -
We were thus led to realize that, apart from the concept of BiHom-Lie algebra (introduced in [9]), there exist other natural BiHom analogues of Lie and Hom-Lie algebras, that we called left and right BiHom-Lie algebras. We arrived at these concepts as follows (we concentrate on the left case): we introduced first the concept of left BiHom-Leibniz algebra (the natural BiHom analogue of Loday’s concept of left Leibniz algebra) and then a left BiHom-Lie algebra is a left BiHom-Leibniz algebra satisfy-
ing the BiHom-skew-symmetry condition. It turns out (Proposition 4.9) that the concepts of BiHom-Lie algebra and left BiHom-Lie algebra coincide if the structure maps are bijective, and that the BiHom analogue of Aguiar’s result mentioned above holds indeed for left BiHom-Lie algebras (Proposition 4.11), although it does not hold in general for BiHom-Lie algebras. In a previous paper ([14]), where we studied Rota-Baxter operators on BiHom-associative algebras, we proved the following result. Let (-
A, ·, α, β) be a BiHom-associative algebra, R : A → A a Rota-Baxter operator of weight λ commuting with α and β, and define a new multiplication
2

on A by a∗b = R(a)·b+a·R(b)+λa·b, for all a, b ∈ A; then (A, ∗, α, β) is also a BiHom-associative algebra. The second aim of the current paper is to prove a similar result for BiHom-Lie algebras; this is achieved in Proposition 4.13. We also prove similar results for left or right BiHom-Leibniz algebras and for left or right BiHom-Lie algebras. In Section 5 we prove that, in the case of bijective structure maps, Propositions 4.11 and 4.13 admit a common generalization, in terms of what we call Bi-
Hom-PostLie algebras (a concept introduced independently in [1]), the BiHom analogue of the concept of PostLie algebra introduced in [22] and studied in [4].
2 Preliminaries
All algebraic structures in this paper (algebras, linear spaces etc.) will be defined over a base field k; we denote ⊗k simply by ⊗. We denote by kM the category of linear spaces over k. Unless otherwise specified, the algebras we work with are not required to be unital, and a multiplication μ : V ⊗ V → V on a linear space V is denoted by μ(v ⊗ v′) = vv′. We write g ◦ f or simply gf for the composition of two maps f and g. The identity map on a linear space V is denoted by idV . We denote by x,y,z-
 summation over the cyclic permutations of some elements x, y, z.
Definition 2.1 A left (respectively right) pre-Lie algebra is a linear space A endowed with a linear map · : A ⊗ A → A satisfying, for all x, y, z ∈ A,
x · (y · z) − (x · y) · z = y · (x · z) − (y · x) · z, (2.1)
respectively
x · (y · z) − (x · y) · z = x · (z · y) − (x · z) · y. (2.2)
Any associative algebra is a left and a right pre-Lie algebra. If (A, ·) is a left or a right pre-Lie algebra, then (A, [x, y] = x · y − y · x) is a Lie algebra.
Definition 2.2 ([15]) A left (respectively right) Leibniz algebra is a pair (L, [·, ·]), where L is a linear space and [·, ·] : L × L → L is a bilinear map satisfying, for all x, y, z ∈ L,
[x, [y, z]] = [[x, y], z] + [y, [x, z]], (2.3)
respectively
[[x, y], z] = [[x, z], y] + [x, [y, z]]. (2.4)
A morphism of (left or right) Leibniz algebras L and L′ is a linear map f : L → L′ such that f ([x, y]) = [f (x), f (y)], for all x, y ∈ L.
A Rota-Baxter structure on an algebra of a given type is defined as follows.
Definition 2.3 Let A be a linear space and μ : A ⊗ A → A, μ(x ⊗ y) = xy, for all x, y ∈ A, a linear multiplication on A and let λ ∈ k. A Rota-Baxter operator of weight λ for (A, μ) is a linear map R : A → A satisfying the so-called Rota-Baxter condition
R(x)R(y) = R(R(x)y + xR(y) + λxy), ∀ x, y ∈ A. (2.5)
3

In this case, if we define on A a new multiplication by x ∗ y = xR(y) + R(x)y + λxy, for all x, y ∈ A, then R(x ∗ y) = R(x)R(y), for all x, y ∈ A, and R is a Rota-Baxter operator of weight λ for (A, ∗). If (A, μ) is associative, then (A, ∗) is also associative. We recall now from [9] several facts about BiHom-type algebras.
Definition 2.4 A BiHom-associative algebra is a 4-tuple (A, μ, α, β), where A is a linear space, α : A → A, β : A → A and μ : A ⊗ A → A are linear maps, with notation μ(x ⊗ y) = xy, for all x, y ∈ A, satisfying the following conditions, for all x, y, z ∈ A:
α ◦ β = β ◦ α, (2.6)
α(xy) = α(x)α(y) and β(xy) = β(x)β(y), (multiplicativity) (2.7)
α(x)(yz) = (xy)β(z). (BiHom-associativity) (2.8)
The maps α and β (in this order) are called the structure maps of A.
Definition 2.5 A BiHom-Lie algebra (L, [·, ·] , α, β) is a 4-tuple in which L is a linear space, α, β : L → L are linear maps and [·, ·] : L×L → L is a bilinear map, such that, for all x, y, z ∈ L :
α ◦ β = β ◦ α,
α([x, y]) = [α (x) , α(y)] and β([x, y]) = [β (x) , β (y)] ,
[β (x) , α (y)] = − [β (y) , α (x)] , (BiHom-skew-symmetry)
[β2 (x) , [β (y) , α (z)]] + [β2 (y) , [β (z) , α (x)]] + [β2 (z) , [β (x) , α (y)]] = 0.
(BiHom-Jacobi condition)
The maps α and β (in this order) are called the structure maps of L. A morphism between two BiHom-Lie algebras (L, [·, ·] , α, β) and (L′, [·, ·]′ , α′, β′) is a linear map f : L → L′ satisfying the conditions α′ ◦f = f ◦α, β′ ◦f = f ◦β and f ([x, y]) = [f (x), f (y)]′, for all x, y ∈ L.
If (L, [·, ·]) is an ordinary Lie algebra and α, β : L → L are two commuting morphisms of Lie algebras, and we define the bilinear map {·, ·} : L × L → L, {x, y} = [α (x) , β (y)], for all x, y ∈ L, then L(α,β) = (L, {·, ·} , α, β) is a BiHom-Lie algebra, called the Yau twist of (L, [·, ·]). If (L, [·, ·] , α, β) is a BiHom-Lie algebra, α′, β′ : L → L are morphisms of BiHom-Lie algebras and any two of the maps α, β, α′, β′ commute, then (L, [·, ·] ◦ (α′ ⊗ β′), α ◦ α′, β ◦ β′) is a BiHomLie algebra-
.
3 BiHom-pre-Lie algebras
Definition 3.1 A left (respectively right) BiHom-pre-Lie algebra (A, ·, α, β) is a 4-tuple in which A is a linear space and · : A ⊗ A → A and α, β : A → A are linear maps satisfying α ◦ β = β ◦ α, α(x · y) = α(x) · α(y), β(x · y) = β(x) · β(y) and
αβ(x) · (α(y) · z) − (β(x) · α(y)) · β(z) = αβ(y) · (α(x) · z) − (β(y) · α(x)) · β(z), (3.1)
respectively
α(x) · (β(y) · α(z)) − (x · β(y)) · αβ(z) = α(x) · (β(z) · α(y)) − (x · β(z)) · αβ(y), (3.2)
for all x, y, z ∈ A. The maps α and β (in this order) are called the structure maps of A.
4

A morphism between two left or right BiHom-pre-Lie algebras (A, ·, α, β) and (A′, ·′, α′, β′) is a linear map f : A → A′ satisfying f (x ·y) = f (x)·′ f (y), for all x, y ∈ A, as well as f ◦α = α′ ◦f and f ◦ β = β′ ◦ f .
Obviously, any BiHom-associative algebra is also a left and a right BiHom-pre-Lie algebra. If (A, ·, α, β) is a left BiHom-pre-Lie algebra and we define a new multiplication ∗ on A by x ∗ y = y · x, then (A, ∗, β, α) is a right BiHom-pre-Lie algebra.
Proposition 3.2 If (A, ·) is a left (respectively right) pre-Lie algebra and α, β : A → A are linear maps satisfying α ◦ β = β ◦ α, α(x · y) = α(x) · α(y) and β(x · y) = β(x) · β(y), for all x, y ∈ A, and we define a new multiplication on A by x ∗ y = α(x) · β(y), then (A, ∗, α, β) is a left (respectively right) BiHom-pre-Lie algebra, called the Yau twist of (A, ·).
Proof. We only prove (3.1) and leave the rest to the reader:
αβ(x) ∗ (α(y) ∗ z) − (β(x) ∗ α(y)) ∗ β(z)
= α2β(x) · (α2β(y) · β2(z)) − (α2β(x) · α2β(y)) · β2(z) (2.1)
= α2β(y) · (α2β(x) · β2(z)) − (α2β(y) · α2β(x)) · β2(z)
= αβ(y) ∗ (α(x) ∗ z) − (β(y) ∗ α(x)) ∗ β(z),
finishing the proof.
Remark 3.3 More generally, one can prove that, if (A, ·, α, β) is a left (respectively right)
BiHom-pre-Lie algebra and α ̃, β ̃ : A → A are two morphisms of BiHom-pre-Lie algebras such
that any two of the maps α, β, α ̃, β ̃ commute, and we define a new multiplication on A by
x ∗ y = α ̃(x) · β ̃(y), for all x, y ∈ A, then (A, ∗, α ◦ α ̃, β ◦ β ̃) is also a left (respectively right) BiHom-pre-Lie algebra.
Proposition 3.4 Let (A, ·, α, β) be a left or a right BiHom-pre-Lie algebra such that α and β are bijective. Define [·, ·] : A ⊗ A → A by [x, y] = x · y − (α−1β(y)) · (αβ−1(x)), for all x, y ∈ A. Then (A, [·, ·], α, β) is a BiHom-Lie algebra.
Proof. We only give the proof in the case A is a left BiHom-pre-Lie algebra, the other case is similar and left to the reader. The fact that α and β are multiplicative with respect to [·, ·] is obvious, and so is the BiHom-skew-symmetry relation. We only have to prove that BiHom-Jacobi condition holds. We compute, for x, y, z ∈ A,
x,y,z [β2(x), [β(y), α(z)]] = x,y,z [β2(x), β(y) · α(z) − β(z) · α(y)]
= x,y,z ([β2(x), β(y) · α(z)] − [β2(x), β(z) · α(y)])
= x,y,z (β2(x) · (β(y) · α(z)) − α−1β(β(y) · α(z)) · αβ(x)
−β2(x) · (β(z) · α(y)) + α−1β(β(z) · α(y)) · αβ(x))
= x,y,z (β2(x) · (β(y) · α(z)) − (α−1β2(y) · β(z)) · αβ(x)
−β2(x) · (β(z) · α(y)) + (α−1β2(z) · β(y)) · αβ(x))
= β2(x) · (β(y) · α(z)) − (α−1β2(y) · β(z)) · αβ(x)
−β2(x) · (β(z) · α(y)) + (α−1β2(z) · β(y)) · αβ(x)
+β2(y) · (β(z) · α(x)) − (α−1β2(z) · β(x)) · αβ(y)
5

−β2(y) · (β(x) · α(z)) + (α−1β2(x) · β(z)) · αβ(y)
+β2(z) · (β(x) · α(y)) − (α−1β2(x) · β(y)) · αβ(z)
−β2(z) · (β(y) · α(x)) + (α−1β2(y) · β(x)) · αβ(z)
(3.1) 3 times
= 0 + 0 + 0 = 0,
finishing the proof.
Definition 3.5 ([14]) A BiHom-dendriform algebra is a 5-tuple (A, ≺, ≻, α, β) consisting of a linear space A and linear maps ≺, ≻: A ⊗ A → A and α, β : A → A satisfying, for all x, y, z ∈ A, the following conditions:
α ◦ β = β ◦ α, (3.3)
α(x ≺ y) = α(x) ≺ α(y), α(x ≻ y) = α(x) ≻ α(y), (3.4)
β(x ≺ y) = β(x) ≺ β(y), β(x ≻ y) = β(x) ≻ β(y), (3.5)
(x ≺ y) ≺ β(z) = α(x) ≺ (y ≺ z + y ≻ z), (3.6)
(x ≻ y) ≺ β(z) = α(x) ≻ (y ≺ z), (3.7)
α(x) ≻ (y ≻ z) = (x ≺ y + x ≻ y) ≻ β(z). (3.8)
We call α and β (in this order) the structure maps of A.
Proposition 3.6 Let (A, ≺, ≻, α, β) be a BiHom-dendriform algebra such that α and β are bijective. Let ⊲, ⊳ : A ⊗ A → A be linear maps defined for all x, y ∈ A by
x ⊲ y = x ≻ y − (α−1β(y)) ≺ (αβ−1(x)), x ⊳ y = x ≺ y − (α−1β(y)) ≻ (αβ−1(x)).
Then (A, ⊲, α, β) (respectively (A, ⊳, α, β)) is a left (respectively right) BiHom-pre-Lie algebra.
Proof. We only check identity (3.1) and leave the rest to the reader. We compute:
αβ(x) ⊲ (α(y) ⊲ z) − (β(x) ⊲ α(y)) ⊲ β(z)
= αβ(x) ⊲ (α(y) ≻ z − α−1β(z) ≺ α2β−1(y))
−(β(x) ≻ α(y) − β(y) ≺ α(x)) ⊲ β(z)
= αβ(x) ≻ (α(y) ≻ z) − (β(y) ≻ α−1β(z)) ≺ α2(x)
−αβ(x) ≻ (α−1β(z) ≺ α2β−1(y)) + (α−2β2(z) ≺ α(y)) ≺ α2(x)
−(β(x) ≻ α(y)) ≻ β(z) + α−1β2(z) ≺ (α(x) ≻ α2β−1(y))
+(β(y) ≺ α(x)) ≻ β(z) − α−1β2(z) ≺ (α(y) ≺ α2β−1(x)) (3.6), (3.8)
= (β(x) ≺ α(y)) ≻ β(z) + (β(x) ≻ α(y)) ≻ β(z)
−(β(y) ≻ α−1β(z)) ≺ α2(x) − αβ(x) ≻ (α−1β(z) ≺ α2β−1(y))
+α−1β2(z) ≺ (α(y) ≺ α2β−1(x)) + α−1β2(z) ≺ (α(y) ≻ α2β−1(x))
−(β(x) ≻ α(y)) ≻ β(z) + α−1β2(z) ≺ (α(x) ≻ α2β−1(y))
+(β(y) ≺ α(x)) ≻ β(z) − α−1β2(z) ≺ (α(y) ≺ α2β−1(x))
= (β(x) ≺ α(y)) ≻ β(z) + (β(y) ≺ α(x)) ≻ β(z)
−(β(y) ≻ α−1β(z)) ≺ α2(x) − αβ(x) ≻ (α−1β(z) ≺ α2β−1(y))
6

+α−1β2(z) ≺ (α(y) ≻ α2β−1(x)) + α−1β2(z) ≺ (α(x) ≻ α2β−1(y)) (3.7)
= (β(x) ≺ α(y)) ≻ β(z) + (β(y) ≺ α(x)) ≻ β(z)
−(β(y) ≻ α−1β(z)) ≺ α2(x) − (β(x) ≻ α−1β(z)) ≺ α2(y)
+α−1β2(z) ≺ (α(y) ≻ α2β−1(x)) + α−1β2(z) ≺ (α(x) ≻ α2β−1(y)).
This expression is obviously symmetric in x and y, so we are done.
4 BiHom-Leibniz algebras and BiHom-Lie algebras
Definition 4.1 A left (respectively right) BiHom-Leibniz algebra is a 4-tuple (L, [·, ·], α, β), where L is a linear space, [·, ·] : L × L → L is a bilinear map and α, β : L → L are linear maps satisfying α ◦ β = β ◦ α, α([x, y]) = [α(x), α(y)], β([x, y]) = [β(x), β(y)] and
[αβ(x), [y, z]] = [[β(x), y], β(z)] + [β(y), [α(x), z]], (4.1)
respectively
[[x, y], αβ(z)] = [[x, β(z)], α(y)] + [α(x), [y, α(z)]], (4.2)
for all x, y, z ∈ L. We call α and β (in this order) the structure maps of L. A morphism f : (L, [·, ·], α, β) → (L′, [·, ·]′, α′, β′) of BiHom-Leibniz algebras is a linear map f : L → L′ such that α′ ◦ f = f ◦ α, β′ ◦ f = f ◦ β and f ([x, y]) = [f (x), f (y)]′, for all x, y ∈ L.
Proposition 4.2 If (L, [·, ·]) is a left (respectively right) Leibniz algebra and α, β : L → L are two commuting morphisms of Leibniz algebras, and we define the map {·, ·} : L × L → L, {x, y} = [α(x), β(y)], for all x, y ∈ L, then (L, {·, ·}, α, β) is a left (respectively right) BiHomLeibniz algebra, called the Yau twist of L and denoted by L(α,β).
Proof. We prove the case when L is a left Leibniz algebra, the other case is similar and left to the reader. We compute:
{αβ(x), {y, z}} = {αβ(x), [α(y), β(z)]} = [α2β(x), [αβ(y), β2(z)]],
{{β(x), y}, β(z)} + {β(y), {α(x), z}}
= {[αβ(x), β(y)], β(z)} + {β(y), [α2(x), β(z)]}
= [[α2β(x), αβ(y)], β2(z)] + [αβ(y), [α2β(x), β2(z)]],
and the desired equality follows by applying (2.3) to the elements α2β(x), αβ(y), β2(z).
Remark 4.3 More generally, let (L, [·, ·], α, β) be a left (respectively right) BiHom-Leibniz algebra and α′, β′ : L → L two morphisms of BiHom-Leibniz algebras such that any two of the maps α, α′, β, β′ commute. If we define the map {·, ·} : L × L → L by {x, y} = [α′(x), β′(y)], for all x, y ∈ L, then (L, {·, ·}, α ◦ α′, β ◦ β′) is a left (respectively right) BiHom-Leibniz algebra.
Remark 4.4 One can easily see that, if (L, [·, ·], α, β) is a left (respectively right) BiHom-Leibniz algebra and we define {·, ·} : L × L → L by {x, y} := [y, x], then (L, {·, ·}, β, α) is a right (respectively left) BiHom-Leibniz algebra.
7

Definition 4.5 A left (respectively right) BiHom-Lie algebra is a left (respectively right) BiHomLeibniz algebra (L, [·, ·], α, β) satisfying the BiHom-skew-symmetry condition
[β(x), α(y)] = −[β(y), α(x)], ∀ x, y ∈ L. (4.3)
A morphism f : (L, [·, ·], α, β) → (L′, [·, ·]′, α′, β′) of BiHom-Lie algebras is a linear map f : L → L′ such that α′ ◦ f = f ◦ α, β′ ◦ f = f ◦ β and f ([x, y]) = [f (x), f (y)]′, for all x, y ∈ L.
Remark 4.6 In view of Remark 4.4, if (L, [·, ·], α, β) is a left (respectively right) BiHom-Lie algebra and we define {·, ·} : L × L → L by {x, y} := [y, x], then (L, {·, ·}, β, α) is a right (respectively left) BiHom-Lie algebra.
Remark 4.7 If (L, [·, ·]) is a Lie algebra and α, β : L → L are two commuting morphisms of Lie algebras, and we define the map {·, ·} : L × L → L by {x, y} = [α(x), β(y)], then (L, {·, ·}, α, β) is a left and right BiHom-Lie algebra, denoted by L(α,β) and called the Yau twist of L.
Remark 4.8 More generally, let (L, [·, ·], α, β) be a left (respectively right) BiHom-Lie algebra and α′, β′ : L → L two morphisms of left (respectively right) BiHom-Lie algebras such that any two of the maps α, α′, β, β′ commute. If we define the map {·, ·} : L × L → L, {x, y} = [α′(x), β′(y)], then (L, {·, ·}, α ◦ α′, β ◦ β′) is a left (respectively right) BiHom-Lie algebra.
Proposition 4.9 Let L be a linear space, [·, ·] : L × L → L a bilinear map, α, β : L → L two commuting linear maps such that α([x, y]) = [α(x), α(y)] and β([x, y]) = [β(x), β(y)] for all x, y ∈ L, and the BiHom-skew-symmetry condition (4.3) is satisfied. Assume that α and β are bijective. Then the following three conditions are equivalent: (i) (L, [·, ·], α, β) is a BiHom-Lie algebra; (ii) (L, [·, ·], α, β) is a left BiHom-Lie algebra; (iii) (L, [·, ·], α, β) is a right BiHom-Lie algebra.
Proof. We first prove that the BiHom-Jacobi condition
[β2(x), [β(y), α(z)]] + [β2(y), [β(z), α(x)]] + [β2(z), [β(x), α(y)]] = 0
is equivalent to (4.1). The BiHom-Jacobi condition may be rewritten in one of the following equivalent forms:
[β2(x), β([y, αβ−1(z)])] + [β2(y), β([z, αβ−1(x)])] + [β2(z), β([x, αβ−1(y)])] = 0,
[β(x), [y, αβ−1(z)]] + [β(y), [z, αβ−1(x)]] + [β(z), [x, αβ−1(y)]] = 0,
[β(x), [y, αβ−1(z)]] + [β(y), [z, αβ−1(x)]] + [β(z), α([α−1(x), β−1(y)])] = 0,
or, by applying the BiHom-skew-symmetry condition to the third term in the last equation,
[β(x), [y, αβ−1(z)]] + [β(y), [z, αβ−1(x)]] − [β([α−1(x), β−1(y)]), α(z)] = 0,
which, by replacing x with α(x), is equivalent to
[αβ(x), [y, αβ−1(z)]] + [β(y), [z, α2β−1(x)]] − [[β(x), y], α(z)] = 0,
8

and this relation, by replacing z with α−1β(z), may be rewritten as
[αβ(x), [y, z]] + [β(y), [α−1β(z), α2β−1(x)]] − [[β(x), y], β(z)] = 0,
or equivalently
[αβ(x), [y, z]] + [β(y), [β(α−1(z)), α(αβ−1(x))]] − [[β(x), y], β(z)] = 0,
which, by applying the BiHom-skew-symmetry condition to the second bracket in the second term, may be transformed as
[αβ(x), [y, z]] − [β(y), [α(x), z]] − [[β(x), y], β(z)] = 0,
and this is obviously equivalent to (4.1). Now we prove that (4.1) is equivalent to (4.2). We begin with (4.1), rewritten as
[αβ(x), [y, z]] = [[β(x), y], β(z)] + [β(y), α([x, α−1(z)])],
which, by applying the BiHom-skew-symmetry condition to the second term in the right hand side, becomes
[αβ(x), [y, z]] = [[β(x), y], β(z)] − [β([x, α−1(z)]), α(y)],
or equivalently
[αβ(x), [y, z]] = [[β(x), y], β(z)] − [[β(x), α−1β(z)], α(y)],
which, by replacing x with β−1(x) and z with α(z), may be rewritten as
[α(x), [y, α(z)]] = [[x, y], αβ(z)] − [[x, β(z)], α(y)],
and this is obviously equivalent to (4.2).
Remark 4.10 By using one more time the same type of calculations, one can easily prove that, under the hypotheses of Proposition 4.9, (L, [·, ·], α, β) is a BiHom-Lie algebra if and only if, for all x, y, z ∈ L, the following equation is satisfied:
[[β(x), α(y)], α2(z)] + [[β(y), α(z)], α2(x)] + [[β(z), α(x)], α2(y)] = 0.
Proposition 4.11 Let (L, [·, ·], α, β) be a left (respectively right) BiHom-Lie algebra and R : L → L be a Rota-Baxter operator of weight 0 such that R ◦ α = α ◦ R and R ◦ β = β ◦ R. Define a new operation on L by x · y := [R(x), y] (respectively by x · y := [x, R(y)]), for all x, y ∈ L. Then (L, ·, α, β) is a left (respectively right) BiHom-pre-Lie algebra.
Proof. We prove the left-handed version and leave the right-handed one to the reader. It is obvious that α(x · y) = α(x) · α(y) and β(x · y) = β(x) · β(y), so we only need to prove the relation (3.1) defining a left BiHom-pre-Lie algebra. We compute:
αβ(x) · (α(y) · z) − (β(x) · α(y)) · β(z)
= αβ(x) · [R(α(y)), z] − [R(β(x)), α(y)] · β(z)
= [R(αβ(x)), [R(α(y)), z]] − [R([R(β(x)), α(y)]), β(z)]
9

(2.5)
= [R(αβ(x)), [R(α(y)), z]] − [[R(β(x)), R(α(y))], β(z)] + [R([β(x), R(α(y))]), β(z)]
= [R(αβ(x)), [R(α(y)), z]] − [[β(R(x)), R(α(y))], β(z)] + [R([β(x), R(α(y))]), β(z)] (4.1)
= [R(αβ(x)), [R(α(y)), z]] − [αβ(R(x)), [R(α(y)), z]] + [αβ(R(y)), [α(R(x)), z]]
+[R([β(x), R(α(y))]), β(z)]
= [αβ(R(y)), [α(R(x)), z]] + [R([β(x), α(R(y))]), β(z)] (4.3)
= [αβ(R(y)), [α(R(x)), z]] − [R([β(R(y)), α(x)]), β(z)]
= [R(αβ(y)), [R(α(x)), z]] − [R([R(β(y)), α(x)]), β(z)]
= αβ(y) · (α(x) · z) − (β(y) · α(x)) · β(z),
finishing the proof.
Lemma 4.12 We consider a 4-tuple (L, [·, ·] , α, β), where L is a linear space, α, β : L → L are linear maps and [·, ·] : L × L → L is a bilinear map. Let also λ ∈ k be a fixed scalar and R : L → L be a linear map such that
R ◦ α = α ◦ R and R ◦ β = β ◦ R. (4.4)
Define a new multiplication on L by
{x, y} = [R(x), y] + [x, R(y)] + λ[x, y], ∀ x, y ∈ L.
Then
i) If α and β satisfy
α([x, y]) = [α (x) , α (y)] and β([x, y]) = [β (x) , β (y)] , ∀ x, y ∈ L, (4.5)
then they also satisfy
α({x, y}) = {α (x) , α (y)} and β({x, y}) = {β (x) , β (y)} , ∀ x, y ∈ L.
ii) If α and β satisfy
[β (x) , α (y)] = − [β (y) , α (x)] , ∀ x, y ∈ L, (4.6)
then they also satisfy
{β (x) , α (y)} = − {β (y) , α (x)} , ∀ x, y ∈ L.
iii) If R satisfies
[R(x), R(y)] = R([R(x), y] + [x, R(y)] + λ[x, y]), ∀ x, y ∈ L, (4.7)
then
R ({x, y}) = [R(x), R(y)], ∀ x, y ∈ L. (4.8)
10

Proof. i) We compute
{α (x) , α (y)} = [R(α (x)), α (y)] + [α (x) , R(α (y))] + λ[α (x) , α (y)] (4.4)
= [α(R (x)), α (y)] + [α (x) , α(R (y))] + λ[α (x) , α (y)] (4.5)
= α({x, y}).
ii) We compute
{β (x) , α (y)} = [R (β(x)) , α (y)] + [β (x) , R(α (y))] + λ[β (x) , α (y)] (4.4)
= [β (R(x)) , α (y)] + [β (x) , α(R (y))] + λ[β (x) , α (y)] (4.6)
= −[β (y) , α (R(x))] − [β (R (y)) , α(x)] − λ [β (y) , α (x)] (4.4)
= −[β (y) , R(α (x))] − [R (β(y)) , α (x)] − λ [β (y) , α (x)]
= − {β (y) , α (x)} .
iii) It is obvious by (4.7) and the definition of {·, ·}.
Proposition 4.13 Let (L, [·, ·] , α, β) be a BiHom-Lie algebra, λ ∈ k a fixed scalar and R : L → L be a Rota-Baxter operator of weight λ satisfying R ◦ α = α ◦ R and R ◦ β = β ◦ R (i.e. (4.4) and (4.7) hold). Define a new multiplication on L by
{x, y} = [R(x), y] + [x, R(y)] + λ[x, y], ∀ x, y ∈ L.
Then (L, {·, ·} , α, β) is a BiHom-Lie algebra.
Proof. In view of Lemma 4.12, we only need to prove that {·, ·} satisfies the BiHom-Jacobi condition. Note also that, by Lemma 4.12 again, (4.8) holds. We compute, for x, y, z, t ∈ L,
{β (x) , α (z)} = [R(β (x)), α (z)] + [β (x) , R(α (z))] + λ[β (x) , α (z)],
{R(β (y)), α (z)} = [R(R(β (y))), α (z)] + [R(β (y)), R(α (z))] + λ[R(β (y)), α (z)],
{β2 (x) , t} = [R(β2(x)), t] + [β2(x), R(t)] + λ[β2(x), t].
So, we obtain
{β2 (x) , {β (y) , α (z)}}
= [R(β2(x)), {β (y) , α (z)}] + [β2(x), R({β (y) , α (z)})] + λ[β2(x), {β (y) , α (z)}] (4.8)
= [R(β2(x)), {β (y) , α (z)}] + [β2(x), [R(β (y)), R(α (z))]] + λ[β2(x), {β (y) , α (z)}]
= [R(β2 (x)), [R(β (y)), α (z)]] + [R(β2 (x)), [β (y) , R(α (z))]]
+[R(β2 (x)), λ[β (y) , α (z)]] + [β2(x), [R(β (y)), R(α (z))]]
+λ[β2 (x) , [R(β (y)), α (z)]] + λ[β2 (x) , [β (y) , R(α (z))]]
+λ[β2 (x) , λ[β (y) , α (z)]],
and hence
11

{β2 (y) , {β (z) , α (x)}}
= [R(β2 (y)), [R(β (z)), α (x)]] + [R(β2 (y)), [β (z) , R(α (x))]]
+[R(β2 (y)), λ[β (z) , α (x)]] + [β2(y), [R(β (z)), R(α (x))]]
+λ[β2 (y) , [R(β (z)), α (x)]] + λ[β2 (y) , [β (z) , R(α (x))]]
+λ[β2 (y) , λ[β (z) , α (x)]],
{β2 (z) , {β (x) , α (y)}}
= [R(β2 (z)), [R(β (x)), α (y)]] + [R(β2 (z)), [β (x) , R(α (y))]]
+[R(β2 (z)), λ[β (x) , α (y)]] + [β2(z), [R(β (x)), R(α (y))]] +
+λ[β2 (z) , [R(β (x)), α (y)]] + λ[β2 (z) , [β (x) , R(α (y))]]
+λ[β2 (z) , λ[β (x) , α (y)]].
Thus, we get
{β2 (x) , {β (y) , α (z)}} + {β2 (y) , {β (z) , α (x)}} + {β2 (z) , {β (x) , α (y)}}
= [R(β2 (x)), [R(β (y)), α (z)]] + [R(β2 (x)), [β (y) , R(α (z))]]
+[R(β2 (x)), λ[β (y) , α (z)]] + [β2(x), [R(β (y)), R(α (z))]]
+λ[β2 (x) , [R(β (y)), α (z)]] + λ[β2 (x) , [β (y) , R(α (z))]] + λ[β2 (x) , λ[β (y) , α (z)]]
+[R(β2 (y)), [R(β (z)), α (x)]] + [R(β2 (y)), [β (z) , R(α (x))]]
+[R(β2 (y)), λ[β (z) , α (x)]] + [β2(y), [R(β (z)), R(α (x))]]
+λ[β2 (y) , [R(β (z)), α (x)]] + λ[β2 (y) , [β (z) , R(α (x))]] + λ[β2 (y) , λ[β (z) , α (x)]]
+[R(β2 (z)), [R(β (x)), α (y)]] + [R(β2 (z)), [β (x) , R(α (y))]]
+[R(β2 (z)), λ[β (x) , α (y)]] + [β2(z), [R(β (x)), R(α (y))]] +
+λ[β2 (z) , [R(β (x)), α (y)]] + λ[β2 (z) , [β (x) , R(α (y))]] + λ[β2 (z) , λ[β (x) , α (y)]],
i.e., in view of (4.4),
{β2 (x) , {β (y) , α (z)}} + {β2 (y) , {β (z) , α (x)}} + {β2 (z) , {β (x) , α (y)}}
= [β2(R (x)), [β(R(y)), α (z)]] + [β2 (R(x)), [β (y) , α(R(z))]] + [β2(z), [β (R (x)) , α (R (y))]]
+[β2 (R(y)), [β (R(z)), α (x)]] + [β2(y), [β (R(z)) , α (R(x))]]
+[β2 (R(y)), [β (z) , α (R(x))]] + [β2(x), [β (R (y)) , α (R (z))]]
+[β2(R (z)), [β (R(x)), α (y)]] + [β2 (R(z)), [β (x) , α (R(y))]]
+λ[β2 (x) , [β (R(y)), α (z)]] + [β2 (R(y)), λ[β (z) , α (x)]] + λ[β2 (z) , [β (x) , α(R(y))]]
+λ[β2 (x) , [β (y) , α (R(z))]] + λ[β2 (y) , [β (R(z)), α (x)]] + [β2 (R(z)), λ[β (x) , α (y)]]
+[β2 (R(x)), λ[β (y) , α (z)]] + λ[β2 (y) , [β (z) , α (R(x))]] + λ[β2 (z) , [β (R(x)), α (y)]]
+λ[β2 (x) , λ[β (y) , α (z)]] + λ[β2 (y) , λ[β (z) , α (x)]] + λ[β2 (z) , λ[β (x) , α (y)]]
= R(x),R(y),z [β2(R(x)), [β(R(y)), α(z)]]+ R(y),R(z),x [β2(R(y)), [β(R(z)), α(x)]]
+ R(z),R(x),y [β2(R(z)), [β(R(x)), α(y)]] + λ x,R(y),z [β2(x), [β(R(y)), α(z)]]
+λ y,R(z),x [β2(y), [β(R(z)), α(x)]] + λ z,R(x),y [β2(z), [β(R(x)), α(y)]]
+λ2 x,y,z [β2(x), [β(y), α(z)]]
12

= 0,
where the last equality follows by applying 7 times the BiHom-Jacobi condition for [·, ·].
By taking α = β = idL in Proposition 4.13, we obtain the following well-known result:
Corollary 4.14 ([4]) Let (L, [·, ·]) be a Lie algebra, λ ∈ k a fixed scalar and R : L → L a Rota-Baxter operator of weight λ. Define a new multiplication on L by
{x, y} = [R(x), y] + [x, R(y)] + λ[x, y], ∀ x, y ∈ L.
Then (L, {·, ·}) is also a Lie algebra (and of course we have R({x, y}) = [R(x), R(y)]).
Proposition 4.15 Let (L, [·, ·], α, β) be a left (respectively right) BiHom-Leibniz algebra, λ ∈ k a fixed scalar and R : L → L a Rota-Baxter operator of weight λ such that R ◦ α = α ◦ R and R ◦ β = β ◦ R. Define a new multiplication on L by
{x, y} = [R(x), y] + [x, R(y)] + λ[x, y], ∀ x, y ∈ L.
Then (L, {·, ·} , α, β) is a left (respectively right) BiHom-Leibniz algebra.
Proof. We only prove the left-handed version, the right-handed one is similar and left to the reader. In view of Lemma 4.12, we only need to show that {·, ·} satisfies (4.1). Note also that, by Lemma 4.12 again, (4.8) holds. We compute, for all x, y, z, t ∈ L,
{αβ(x), t} = [R(αβ(x)), t] + [αβ(x), R(t)] + λ[αβ(x), t],
{αβ(x), {y, z}} = [R(αβ(x)), [R(y), z]] + [R(αβ(x)), [y, R(z)]] + [R(αβ(x)), λ[y, z]]
+[αβ(x), R({y, z})] + λ[αβ(x), [R(y), z]]
+λ[αβ(x), [y, R(z)]] + λ[αβ(x), λ[y, z]]
(4.8)
= [R(αβ(x)), [R(y), z]] + [R(αβ(x)), [y, R(z)]] + [R(αβ(x)), λ[y, z]]
+[αβ(x), [R(y), R(z)]] + λ[αβ(x), [R(y), z]]
+λ[αβ(x), [y, R(z)]] + λ[αβ(x), λ[y, z]],
which, by using the fact that R ◦ α = α ◦ R and R ◦ β = β ◦ R, may be written as
{αβ(x), {y, z}} = [αβ(R(x)), [R(y), z]] + [αβ(R(x)), [y, R(z)]] + [αβ(R(x)), λ[y, z]]
+[αβ(x), [R(y), R(z)]] + λ[αβ(x), [R(y), z]]
+λ[αβ(x), [y, R(z)]] + λ[αβ(x), λ[y, z]].
On the other hand, we have
{β(x), y} = [R(β(x)), y] + [β(x), R(y)] + λ[β(x), y],
{t, β(z)} = [R(t), β(z)] + [t, R(β(z))] + λ[t, β(z)],
{{β(x), y} , β(z)} = [R({β(x), y}), β(z)] + [[R(β(x)), y], R(β(z))]
+[[β(x), R(y)], R(β(z))] + [λ[β(x), y], R(β(z))]
+λ[[R(β(x)), y], β(z)] + λ[[β(x), R(y)], β(z)] + λ[λ[β(x), y], β(z)] (4.8)
= [[R(β(x)), R(y)], β(z)] + [[R(β(x)), y], R(β(z))]
13

+[[β(x), R(y)], R(β(z))] + [λ[β(x), y], R(β(z))]
+λ[[R(β(x)), y], β(z)] + λ[[β(x), R(y)], β(z)] + λ[λ[β(x), y], β(z)]
and
{β(y), t} = [R(β(y)), t] + [β(y), R(t)] + λ[β(y), t],
{α(x), z} = [R(α(x)), z] + [α(x), R(z)] + λ[α(x), z],
{β(y), {α(x), z}} = [R(β(y)), [R(α(x)), z]] + [R(β(y)), [α(x), R(z)]]
+[R(β(y)), λ[α(x), z]] + [β(y), R({α(x), z})]
+λ[β(y), [R(α(x)), z]] + λ[β(y), [α(x), R(z)]] + λ[β(y), λ[α(x), z]] (4.8)
= [R(β(y)), [R(α(x)), z]] + [R(β(y)), [α(x), R(z)]]
+[R(β(y)), λ[α(x), z]] + [β(y), [R(α(x)), R(z)]]
+λ[β(y), [R(α(x)), z]] + λ[β(y), [α(x), R(z)]] + λ[β(y), λ[α(x), z]].
So
{{β(x), y} , β(z)} + {β(y), {α(x), z}}
= [[R(β(x)), R(y)], β(z)] + [[R(β(x)), y], R(β(z))] + [[β(x), R(y)], R(β(z))]
+[λ[β(x), y], R(β(z))] + λ[[R(β(x)), y], β(z)] + λ[[β(x), R(y)], β(z)]
+λ[λ[β(x), y], β(z)] + [R(β(y)), [R(α(x)), z]] + [R(β(y)), [α(x), R(z)]]
+[R(β(y)), λ[α(x), z]] + [β(y), [R(α(x)), R(z)]] + λ[β(y), [R(α(x)), z]]
+λ[β(y), [α(x), R(z)]] + λ[β(y), λ[α(x), z]],
i.e., by using again the fact that R ◦ α = α ◦ R and R ◦ β = β ◦ R,
{{β(x), y} , β(z)} + {β(y), {α(x), z}}
= [[β(R(x)), R(y)], β(z)] + [β(R(y)), [α(R(x)), z]] +
+[[β(R(x)), y], β(R(z))] + [β(y), [α(R(x)), R(z)]]
+λ[[β(R(x)), y], β(z)] + λ[β(y), [α(R(x)), z]]
+[[β(x), R(y)], β(R(z))] + [β(R(y)), [α(x), R(z)]]
+λ[[β(x), R(y)], β(z)] + [β(R(y)), λ[α(x), z]]
+[λ[β(x), y], β(R(z))] + λ[β(y), [α(x), R(z)]]
+λ[λ[β(x), y], β(z)] + λ[β(y), λ[α(x), z]].
By using 7 times (4.1), we obtain {αβ(x), {y, z}} = {{β(x), y} , β(z)} + {β(y), {α(x), z}}.
Corollary 4.16 Let (L, [·, ·], α, β) be a left (respectively right) BiHom-Lie algebra, λ ∈ k a fixed scalar and R : L → L a Rota-Baxter operator of weight λ such that R◦α = α◦R and R◦β = β◦R. Define a new multiplication on L by
{x, y} = [R(x), y] + [x, R(y)] + λ[x, y], ∀ x, y ∈ L.
Then (L, {·, ·} , α, β) is a left (respectively right) BiHom-Lie algebra.
Proof. It follows by Proposition 4.15 in view of ii) in Lemma 4.12.
14

5 BiHom-PostLie algebras
The aim of this section is to prove that, in the case of bijective structure maps, Propositions 4.11 and 4.13 above admit a common generalization.
Definition 5.1 ([4], [22]) A left PostLie algebra is a triple (L, [·, ·], ◦), where L is a linear space endowed with two bilinear operations [·, ·] and ◦ such that (L, [·, ·]) is a Lie algebra and the following relations are satisfied, for all x, y, z ∈ L:
z ◦ (y ◦ x) − y ◦ (z ◦ x) + (y ◦ z) ◦ x − (z ◦ y) ◦ x + [y, z] ◦ x = 0,
z ◦ [x, y] − [z ◦ x, y] − [x, z ◦ y] = 0.
Definition 5.2 A left BiHom-PostLie algebra is a 5-tuple (L, {·, ·}, ∗, α, β), where L is a linear space, {·, ·} and ∗ are bilinear operations on L, α, β : L → L are two commuting linear maps such that α({x, y}) = {α(x), α(y)}, β({x, y}) = {β(x), β(y)}, α(x ∗ y) = α(x) ∗ α(y), β(x ∗ y) = β(x)∗β(y), for all x, y ∈ L, (L, {·, ·}, α, β) is a left BiHom-Lie algebra and the following identities are satisfied, for all x, y, z ∈ L:
αβ(z) ∗ (α(y) ∗ x) − αβ(y) ∗ (α(z) ∗ x) + (β(y) ∗ α(z)) ∗ β(x)
−(β(z) ∗ α(y)) ∗ β(x) + {β(y), α(z)} ∗ β(x) = 0, (5.1)
αβ(z) ∗ {x, y} − {β(z) ∗ x, β(y)} − {β(x), α(z) ∗ y} = 0. (5.2)
Proposition 5.3 Let (L, [·, ·], ◦) be a left PostLie algebra and α, β : L → L two commuting linear maps such that α([x, y]) = [α(x), α(y)], β([x, y]) = [β(x), β(y)], α(x ◦ y) = α(x) ◦ α(y), β(x ◦ y) = β(x) ◦ β(y), for all x, y ∈ L. Define two new operations on L by {x, y} = [α(x), β(y)] and x ∗ y = α(x) ◦ β(y), for all x, y ∈ L. Then (L, {·, ·}, ∗, α, β) is a left BiHom-PostLie algebra, called the Yau twist of (L, [·, ·], ◦).
Remark 5.4 Obviously, if the bracket {·, ·} in the definition of a left BiHom-PostLie algebra is trivial, then a left BiHom-PostLie algebra is just a left BiHom-pre-Lie algebra.
A proof for the next result may be found in [1].
Proposition 5.5 Let (L, {·, ·}, ∗, α, β) be a left BiHom-PostLie algebra such that α and β are bijective. Define a new multiplication on L by
< x, y >:= x ∗ y − (α−1β(y)) ∗ (αβ−1(x)) + {x, y}, ∀ x, y ∈ L.
Then (L, < ·, · >, α, β) is a BiHom-Lie algebra.
The next result is the BiHom analogue of Corollary 5.6 in [4], we leave the proof to the reader.
Proposition 5.6 Let (L, [·, ·], α, β) be a left BiHom-Lie algebra, λ ∈ k a fixed scalar and R : L → L a Rota-Baxter operator of weight λ such that R ◦ α = α ◦ R and R ◦ β = β ◦ R. Define two new operations on L by
{x, y} := λ[x, y] and x ∗ y := [R(x), y], ∀ x, y ∈ L.
Then (L, {·, ·}, ∗, α, β) is a left BiHom-PostLie algebra.
15

Note that, by taking λ = 0 in Proposition 5.6, we obtain Proposition 4.11. On the other hand, if α and β are bijective (and λ is arbitrary), then Proposition 4.13 (or, equivalently, Corollary 4.16) is a particular case of Proposition 5.6. Indeed, to the left BiHom-PostLie algebra (L, {·, ·}, ∗, α, β) obtained in Proposition 5.6 we apply Proposition 5.5, and we obtain a BiHomLie algebra (L, < ·, · >, α, β), where the bracket < ·, · > is given by
< x, y > = x ∗ y − (α−1β(y)) ∗ (αβ−1(x)) + {x, y}
= [R(x), y] − [Rα−1β(y), αβ−1(x)] + λ[x, y]
= [R(x), y] − [βα−1R(y), αβ−1(x)] + λ[x, y] (4.3)
= [R(x), y] + [ββ−1(x), αα−1R(y)] + λ[x, y]
= [R(x), y] + [x, R(y)] + λ[x, y],
which is exactly the bracket in Proposition 4.13.
6 Conclusions
This paper is a contribution to the study of Rota-Baxter operators on other types of algebras than associative and Lie algebras. The starting point was the following question, formulated in our previous paper [14]: if (A, ·) is an algebra of a certain type, R : A → A is a Rota-Baxter operator of weight λ and we define a new multiplication on A by a • b = R(a) · b + a · R(b) + λa · b, for all a, b ∈ A, then under what circumstances is (A, •) an algebra of the same type as (A, ·)? In [14] we treated-
 the case of BiHom-associative algebras, while in this paper we investigated the case of BiHom-Lie algebras. The second aim of the paper was to obtain a BiHom version of the result of Aguiar telling how to obtain a pre-Lie algebra from a Rota-Baxter operator of weight zero on a Lie algebra. It turned out that the BiHom version does not work for BiHomLie algebras, but for a new concept we introduce in this paper, called left BiHom-Lie algebra. It is an interesting phenomenon that the concepts of Li-
e algebra and Hom-Lie algebra admit two different generalizations in the BiHom context, and we expect that the new concept of left BiHom-Lie algebra, introduced here, will appear in many other situations. Actually, we expect that some results from classical Lie theory may be extended to BiHom-Lie algebras, while others may be extended to left BiHom-Lie algebras. For instance, there are indications that representation theory might work better for left BiHom-Lie algebras than for BiHom-Lie algebras.
ACKNOWLEDGEMENTS
This paper was written while Ling Liu was visiting the Institute of Mathematics of the Romanian Academy (IMAR), supported by the NSF of China (Grant Nos. 11801515, 11601486); she would like to thank IMAR for hospitality. Claudia Menini was a member of the National Group for Algebraic and Geometric Structures, and their Applications (GNSAGA-INdAM).
References
[1] H. Adimi, T. Chtioui, S. Mabrouk, S. Massoud, Construction of BiHom-post-Lie algebras, arXiv:math.RA/2001.02308.
[2] M. Aguiar, Pre-Poisson algebras, Lett. Math. Phys. 54 (2000), 263–277.
16

[3] N. Aizawa, H. Sato, q-deformation of the Virasoro algebra with central extension, Phys. Lett. B 256 (1991), 185–190.
[4] C. Bai, L. Guo, X. Ni, Nonabelian generalized Lax pairs, the classical Yang-Baxter equation and PostLie algebras, Comm. Math. Phys. 297 (2010), 553–596.
[5] G. Baxter, An analytic problem whose solution follows from a simple algebraic identity, Pacific J. Math. 10 (1960), 731–742.
[6] A. A. Belavin, V. G. Drinfeld, Solutions of the classical Yang-Baxter equation for simple Lie algebras, Funct. Anal. Appl. 16 (1982), 159–180.
[7] S. Caenepeel, I. Goyvaerts, Monoidal Hom-Hopf algebras, Comm. Algebra 39 (2011), 22162240.
[8] A. Connes, D. Kreimer, Hopf algebras, renormalization and noncommutative geometry, Comm. Math. Phys. 199 (1998), 203–242.
[9] G. Graziani, A. Makhlouf, C. Menini, F. Panaite, BiHom-associative algebras, BiHom-Lie algebras and BiHom-bialgebras, Symmetry Integrability Geom. Methods Appl. (SIGMA) 11 (2015), 086, 34 pages.
[10] L. Guo, An introduction to Rota-Baxter algebra, Surveys of Modern Mathematics, 4. International Press, Somerville, MA; Higher Education Press, Beijing, 2012.
[11] J. T. Hartwig, D. Larsson, S. D. Silvestrov, Deformations of Lie algebras using σderivations, J. Algebra 295 (2006), 314–361.
[12] N. Hu, q-Witt algebras, q-Lie algebras, q-holomorph structure and representations, Algebra Colloq. 6 (1999), 51–70.
[13] D. Larsson, S. D. Silvestrov, Quasi-hom-Lie algebras, central extensions and 2-cocycle-like identities, J. Algebra 288 (2005), 321–344.
[14] L. Liu, A. Makhlouf, C. Menini, F. Panaite, Rota-Baxter operators on BiHom-associative algebras and related structures, arXiv:math.QA/1703.07275.
[15] J.-L. Loday, Une version non commutative des alge`bres de Lie: les alge`bres de Leibniz, Enseign. Math. 39 (1993), 269–293.
[16] A. Makhlouf, Hom-dendriform algebras and Rota-Baxter Hom-algebras, in ”Operads and universal algebra”, Nankai Ser. Pure Appl. Math. Theor. Phys. (Eds. C. Bai, L. Guo and J.-L. Loday), Vol. 9, World Sci. Publ., Singapore, 2012, 147–171.
[17] A. Makhlouf, S. D. Silvestrov, Hom-algebras structures, J. Gen. Lie Theory Appl. 2 (2008), 51–64.
[18] A. Makhlouf, D. Yau, Rota-Baxter Hom-Lie-admissible algebras, Comm. Algebra 42 (2014), 1231–1257
[19] G. C. Rota, Baxter algebras and combinatorial identities, I, II, Bull. Amer. Math. Soc. 75 (1969), 325–329; Bull. Amer. Math. Soc. 75 (1969), 330–334.
17

[20] G. C. Rota, Baxter operators, an introduction, in ”Gian-Carlo Rota on combinatorics”, Contemp. Math., 504–512. Birkhauser Boston, Boston, MA, 1995.
[21] M. A. Semenov-Tian-Shansky, What is a classical r-matrix?, Funct. Anal. Appl 17 (1983), 259–272.
[22] B. Vallette, Homology of generalized partition posets, J. Pure Appl. Algebra 208 (2007), 699–725.
18

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:10.280Z
- **Text Length:** 40291 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
