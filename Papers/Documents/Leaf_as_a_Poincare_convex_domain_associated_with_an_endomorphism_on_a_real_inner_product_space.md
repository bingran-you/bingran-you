# PDF Document: Ogawa - 2025 - Leaf as a Poincaré convex domain associated with an endomorphism on a real inner product space.pdf

**File Path:** Ogawa - 2025 - Leaf as a Poincaré convex domain associated with an endomorphism on a real inner product space.pdf

**Processed Date:** 2026-02-10T18:14:23.896Z

**File Size:** 234.52 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2758

**Title:** Leaf as a Poincaré convex domain associated with an endomorphism on a real inner product space

**Collection:** Large Files

---

## Extracted Text Content

arXiv:2401.01612v6 [math.FA] 1 Mar 2025
Leaf as a Poincar ́e convex domain associated with an endomorphism on a real inner product space
HIROYUKI OGAWA
Abstract. We define a subset of the closure of the upper half plane associated with an endomorphism on a real inner product space, which is called the leaf. When the dimension of the space is at least 3, the leaf is a convex with respect to the Poincar ́e metric, and contains all eigenvalues with nonnegative imaginary part. Moreover, the leaf of a normal endomorphism is the minimum Poincar ́e convex domain containing all eigenvalues with nonnegative imaginary part. The most commonly studied convex-
 domain containing eigenvalues is number range. Numerical range is convex with respect to the Euclidean metric on C, so numerical range has less information than leaf about real eigenvalues. We provide a new visual approach to endomorphisms.
1. Introduction
In this paper we define a subset of the closure of the upper half plane associated with an endomorphism on a real inner product space, which is called the leaf, and show the structure theorems (Theorem A, B and C). The structure theorems on leaf correspond to the fundamental theorems on numerical range (Theorem 5.1, 5.2 and 5.3), which is the well-known convex domain containing all eigenvalues, as below. Both numerical range and leaf are simply connected domains containing eigenvalues, but numeric-
al range is convex with respect to the Euclidean metric on C, and leaf is convex with respect to the Poincar ́e metric on the closure of the upper half plane. The structure theorems on leaf and the fundamental theorems on numerical range correspond to each other, but they are proved in the different ways because of the difference in the shape of leaf and numerical range. The most significant difference is in the points shared with the real axis, whereas the intersection of numerical range and the -
real axis is an interval containing all real eigenvalues, whereas that of leaf is the set of all real eigenvalues. Since leaf hold information on individual real eigenvalues, it is possible to study the behaviour of an endomorphism around the eigenspace with respect to a real eigenvalue. Let V be a finite dimensional inner product space over R. We denote the ring of endomorphisms (R-linear maps) on V by End(V ). Since the dimension of the space V is important in this paper, an endomorphism on a d--
dimensional space V is sometimes simply referred to as an endomorphism of dimension d. The angle θ = θ(v1, v2) ∈ [0, π] ⊂ R of two nonzero vectors v1, v2 ∈ V × (= V r {0}) is defined by v1 · v2 = ‖v1‖ ‖v2‖ cos θ. Let φ be an endomorphism on V . We consider the continuous map
Lφ : V × → C is defined by
Lφ(v) = ‖φ(v)‖
‖v‖ e
√−1 θ(v, φ(v)) for v ∈ V ×.
When φ(v) = 0, we don’t define the angle θ(v, φ(v)), but can put Lφ(v) = 0 because of ‖φ(v)‖ = 0. Since 0 ≤ θ(v, φ(v)) ≤ π, the imaginary part of Lφ(v) is nonnegative. Lφ(v) belongs to the closure of the upper half plane H = H ∪ R ∪ {∞}, where H = {z ∈ C | Im z > 0}.
Definition 1.1. The image of Lφ
Ψ(φ) = {Lφ(v) | v ∈ V ×} ⊂ H
is called the leaf of the endomorphism φ.
Example 1.2. Figure 1 contains leaves of five endomorphisms on an real Euclid spaces Rn with standard inner product. Such endomorphism are given by some square matrices and direct sums of square matrices.
Put E =
(1 0 01
)
,J=
(01 −1 0
)
,K=
(0 1 10
)
, and J(λ; d) be the Jordan cell with eigenvalue λ ∈ R
and of degree d. The straight line at the bottom on each figure is the real axis.
Leaf is a bounded closed set in the Euclidean metric on C. Numerical range is convex with respect to the Euclidean metric on C, but, in generally, leaf is not convex on the Euclidean metric on C. In §4, we
1

2 Hiroyuki Ogawa
(a) (1) ⊕ (3 J+2 K)
⊕(−4 E+10 J) (b)


002 100 010


(c) J(0; 2) (d) J(0; 3) (e) (−2) ⊕ (6 J) ⊕(2 E + J)
Figure 1. Examples of leaves
will show that leaf is path-connected (see Proposition 4.2), and that leaf and the real axis share only all real eigenvalues (see Theorem 4.3). In §6, we will see that leaf of endomorphism of dimension at most 2 is simple (see Theorem 6.1). The purpose of this paper is to show the following structure theorems of leaf of endomorphism of dimension at least 3.
Theorem A (Poincar ́e Convexity). Leaf is convex with respect to the Poincare ́ metric.
Theorem B (Eigenvalue inclusion). Leaf contains all eigenvalues whose imaginary part is nonnegative.
The smallest convex domain containing all eigenvalues with nonnegative imaginary part is the convex filled geodesic polygon whose vertices are eigenvalues, that is called the eigenvalue geodesic polygon. The structure theorem A and B lead that the leaf of an endomorphism of dimension at least 3 includes the eigenvalue geodesic polygon.
Theorem C (Normal case). Leaf of a normal endomorphism is the eigenvalue geodesic polygon.
Remark 1.3. Although not covered in this paper, leaf can also be defined for any bounded linear operator on any infinite dimensional inner product space, by taking the closure, and the above structure theorems also hold.
In §2-3, there are some basic facts on a normal endomorphism and on the Poincar ́e metric. In §4, we define the leaf of an endomorphism. In §5, we describe the difference between numerical range and leaf. We decide the leaf of an endomorphism of dimension 1 or 2 in §6, and prove the structure theorems for the leaf of any endomorphism of dimension at least 3 in §7-8.
2. Normal endomorphisms
Let V be a real inner product space of finite dimension, and φ a normal endomorphism on V . Then V is the orthogonal direct sum of φ-stable subspaces of dimension 1 or 2 (see Theorem 10.10 in [7]). In this section, we provide a brief introduction to this fact.
Put VC = V ⊗R C = V ⊕ √−1V the coefficient extension of V to C. There exists a Hermitian inner product on VC which extends the real inner product on V . The same dot symbol is used for both inner
products. Each v ∈ VC = V ⊕ √−1V is expressed by vr + √−1vi for some vr, vi ∈ V . vr is called the real
part of v, denoted by Re v, and vi is called the imaginary part of v, denoted by Im v. v = vr − √−1vi is called the complex conjugate of v. Each endomorphism φ on V can be extended to the endomorphism on VC over C. The same symbol φ is used for both endomorphisms. Let v ∈ VC be an eigenvector of φ corresponding to an eigenvalue λ ∈ C.
φ(v) = φ(Re v + √−1 Im v) = φ(Re v) + √−1 φ(Im v)
φ(v) = λ v = (Re λ Re v − Im λ Im v) + √−1 (Im λ Re v + Re λ Im v)
∴ (φ(Re v), φ(Im v)) = (Re v, Im v) (Re λ E + Im λ J)
where E and J are the quadratic matrices defined in Example 1.2. The complex conjugate v is an eigenvector of φ corresponding to the eigenvalue λ. If λ ∈ R, then Re v, Im v and v are eigenvectors of φ corresponding to λ. If λ 6∈ R, since v and v are linearly independent on C, {Re v, Im v} is a basis of the φ-stable subspace 〈Re v, Im v〉 = (C v + C v) ∩ V . Especially, if v and v are orthogonal in VC, then Re v and Im v are orthogonal in V . Because
Re v · Im v = v + v
2 · v−v
2√−1 = −1
4 (‖v‖2 − v · v + v · v − ‖v‖2) = 1
2 Re (v · v) = 0.

Leaf of endomorphism 3
{Re v/‖Re v‖, Im v/‖Im v‖} is an orthonormal basis of 〈Re v, Im v〉. Moreover, since ‖Re v‖ = ‖Im v‖ =
‖v‖/√2, the matrix Re λ E + Im λ J is the matrix representation of the restriction of φ to the subspace 〈Re v, Im v〉 with respect to the orthonormal basis {Re v/‖Re v‖, Im v/‖Im v‖}. The adjoint endomorphism φ∗ of φ is defined by the endomorphism on V satisfying that φ(v1) · v2 =
v1 · φ∗(v2) for any v1, v2 ∈ V . The adjoint endomorphism of φ as an endomorphism on VC is equal to the
extension to VC of φ∗ on V . An endomorphism that commutative with its adjoint is said to be normal. Each normal endomorphism on VC is diagonalizable by an orthonormal basis consisting eigenvectors on VC. Every normal endomorphism on V has as the matrix representation the direct sum of the real eigenvalues and of the a E+b J-type quadratic matrices (a, b ∈ R, b 6= 0) corresponding to the non-real
eigenvalues (a + b√−1), given an appropriate orthonormal basis.
3. The Poincar ́e metric on H
The Poincar ́e metric on the complex upper half plane H is defined by ds = |dz|/Im z for z ∈ H. The distance ρ(z1, z2) between two points z1, z2 ∈ H is given by
ρ(z1, z2) =
∫ z2
z1
|ds| = log 1 + δ(z1, z2)
1 − δ(z1, z2) where δ(z1, z2) = |z1 − z2|
|z1 − z2| .
We see that 0 ≤ δ(z1, z2) ≤ 1, and the function log 1+k
1−k is monotonic increasing on k. R ∪ {∞} is called the line at infinity, because δ(z1, z2) = 1 and ρ(z1, z2) = ∞, if and only if at least one of z1 and z2 lies on R ∪ {∞}. The geodesic on H with respect to the Poincar ́e metric is a part of a line parallel to the imaginary axis or a part of a semicircle whose center is on the real axis. A geodesic circle whose center is z0 ∈ H and radius is r = log 1+k
1−k for 0 ≤ k ≤ 1 is defined by
CP(z0; k) = {z ∈ H | δ(z, z0) = k} = {z ∈ H | ρ(z, z0) = r}.
By putting z = x + y√−1, z0 = p + q√−1 ∈ H ∪ R (x, y, p, q ∈ R, y ≥ 0, q ≥ 0), the equation δ(z, z0) = k or ρ(z, z0) = r is equivalent to
(x − p)2 + (y − 1 + k2
1 − k2 q)2 = (( 1 + k2
1 − k2 )2 − 1) q2 = ( 2 k
1 − k2 q)2.
Therefore, the geodesic circle CP(z0; k) is a ordinary circle in C with center p + 1+k2
1−k2 q√−1 and radius
2k
1−k2 q. A geodesic circle on the Poincar ́e metric is simply called a geodesic circle, and an ordinary circle
in the complex plane is simply called a circle.
4. Leaf and real eigenvalues
Let φ be an endomorphism on a real inner product space V of finite dimension. The continuous map Lφ on V × (= V r {0}) to C defining by
Lφ(v) = ‖φ(v)‖
‖v‖ e
√−1 θ(v, φ(v)) (v ∈ V ×),
where the angle θ = θ(v, φ(v)) ∈ [0, π] ⊂ R between v and φ(v) is gdefined by v · φ(v) = ‖v‖ ‖φ(v)‖ cos θ. When φ(v) = 0, we don’t define the angle θ,but can put Lφ(v) = 0 because of ‖φ(v)‖ = 0. Lφ(kv) = Lφ(v) holds for any k ∈ R×, because ‖φ(kv)‖/‖kv‖ = ‖φ(v)‖/‖v‖ and θ(kv, φ(kv)) = θ(v, φ(v)). So the continuous map Lφ is considered as the continuous map on the projective space P(V ) = V ×/R×. For any v1, v2 ∈ V ×, put σ(v1, v2) = √‖v1‖2 ‖v2‖2 − (v1 · v2)2. Then we have
Lφ(v) = v · φ(v) + σ(v, φ(v)) √−1
‖v‖2 .
The real part of Lφ(v) is equal to the Rayleigh quotient v·φ(v)
‖v‖2 of φ, and the square of absolute value of
Lφ(v) to that of φ∗φ. The operator norm ‖φ‖ of φ is the supremum of the absolute value of Lφ(v).
Definition 4.1 (leaf). The image of Lφ
Ψ(φ) = Lφ(V ×) = Lφ(P(V ))
is called the leaf of the endomorphism φ.
Proposition 4.2. Ψ(φ) is path connected.

4 Hiroyuki Ogawa
Proof. Let λ1, λ2 ∈ Ψ(φ), and take v1, v2 ∈ V × satisfying that λ1 = Lφ(v1) and λ2 = Lφ(v2). The path [0, 1] ∋ t 7→ Lφ((1 − t) v1 + t v2) ∈ Ψ(φ) in Ψ(φ) connects λ1 and λ2. Hence, the leaf Ψ(φ) is path connected.
The leaf Ψ(φ) is a bounded closed set in C because the projective space P(V ) is compact. Since an argument θ belongs to the closed interval [0, π], the value of Lφ belongs to the closure of the upper half plane H = H ∪ R ∪ {∞}. The leaf is included in H. We will see that the Poincar ́e metric of H plays an important role on the leaf in the later chapters. In closing this section, we show the following theorem on the real eigenvalues.
Theorem 4.3. The intersection of the leaf and the real axis is the set of real eigenvalues.
Proof. Let φ an endomorphism on a real inner product space of finite dimension V . Let λ ∈ R a real eigenvalue of φ, and v ∈ V an eigenvector of φ corresponding to λ. If λ = 0, then φ(v) = 0, so Lφ(v) = 0 = λ. Assume that λ 6= 0. Since φ(v) = λ v is parallel to v, the angle θ = θ(v, φ(v)) is equal to
0 if λ > 0, and to π if λ < 0. Since ‖φ(v)‖/‖v‖ = ‖λ v‖/‖v‖ = |λ|, and eθ√−1 = signλ = λ/|λ|, we have that Lφ(v) = λ. Thus λ = Lφ(v) ∈ Ψ(φ) ∩ R. Conversely, we will show that each element λ ∈ Ψ(φ) ∩ R is an eigenvalue of φ. Take v ∈ V × satisfying that λ = Lφ(v). In the case that λ = 0, it follows from Lφ(v) = λ = 0 that ‖φ(v)‖ = 0, i.e. φ(v) = 0 = 0 v, so 0 is an eigenvalue of φ. Assume that λ 6= 0. Since ‖φ(v)‖ = |Lφ(v)| ‖v‖ = |λ| ‖v‖ 6= 0, the angle θ = θ(v, φ(v)) is defined. And θ is also the -
angle of the real number λ = Lφ(φ), so θ = 0 or π. φ(v) is parallel to v, namely v is an eigenvector of φ. Put λ′ be the eigenvalue of φ satisfying that φ(v) = λ′v, then it follows from the first step in this proof that Lφ(v) = λ′. Hence λ = Lφ(v) = λ′ is an eigenvalue of φ.
5. Numerical range vs. leaf
Well-known object as a convex domain containing all eigenvalues is a numerical range (cf. [3], [4]). Here we introduce the fundamental theorems that were the starting point for studies of numerical range, according to chapter 1 of Guatafson-Rao’s text boot ([4]). Let φ be a bounded linear operator on a Hermite inner product space V . The numerical range of φ is the subset in C defined by
W (φ) = { v · φ(v)
‖v‖2 | v ∈ V ×} = {v · φ(v) | ‖v‖ = 1},
that is the range of the Rayleigh quotients v · φ(v)/‖v‖2, v ∈ V ×. The fundamental theorems of numerical range are following.
Theorem 5.1 (Convexity, Toeplitz-Hausdorff, [5], [9]). The numerical range of an operator is convex with respect to the Euclidean metric on C.
Theorem 5.2 (Spectral inclusion, [10]). The spectrum of a bounded linear operator is contained in the closure of its numerical range.
Theorem 5.3 ([2], [8]). The closure of numerical range of a normal bounded linear operator is the convex full of its spectrum.
Theorem 5.4 (Equivalent norm). Put w(φ) = sup{|λ| | λ ∈ W (φ)} (the numerical radius), and ‖φ‖ = sup{‖φ(v)‖/‖v‖ | v ∈ V ×} (the operator norm). Then w(φ) ≤ ‖φ‖ ≤ 2w(φ).
The structure theorems of leaf (Theorem A, B, C) correspond to the first three of the fundamental theorems above. The corresponding result to the last theorem on the leaf is that
‖φ‖ = sup{|λ| | λ ∈ Ψ (φ)}
which follows from the definition of leaf. There is an essential difference between Theorem 5.1 and Theorem A: numerical range is convex with respect to the Euclidean metric, and leaf is convex with respect to the Poincar ́e metric. Different metrics lead to different appearances of the real eigenvalues in the figures. The intersection of numerical range and the real axis is an interval containing all real eigenvalues (Theorem 5.1, 5.2), whereas that of leaf is the set of all real eigenvalues (The-
orem 4.3). The information on each of the real eigenvalues is lost in numerical range, but retained in leaf.

Leaf of endomorphism 5
Theorem B and Theorem 5.2 have different ways of proving. In the case of numerical range, the Rayleigh quotient of an eigenvector is the eigenvalue. But, since any endomorphism on a real vector space has no real eigenvector with respect to the non-real eigenvalue which is a non-real root of the characteristic polynomial, the same method cannot be use for leaf as for numerical range. We need to use Theorem A, to find a real vector for which the value of the function Lφ is the non-real eigenvalue (P-
roposition 7.2). Theorem A and Theorem 5.1 also have different ways to proving. The line connecting the two points of numerical range is given by the image by the Rayleigh quotient of real coefficient linear combination of two vectors giving the two points on numerical range. The geodesic connecting the two points of leaf is contained in the interior of the closed curve formed by the image by Lφ of the subspace generated by the two vectors giving the two points (Proposition 7.3). It can be shown t-
hat the geodesic connecting the two points is contained in leaf, by continuously moving that closed curve using a third vector to fill the interior of that closed curve (Proposition 7.5). In the case of a normal endomorphism, both numerical range and leaf are convex sets containing all eigenvalues. The metrics are different, so the geodesics are different shapes. The edges which are geodesics connecting the eigenvalues have different shapes for numerical range and leaf.
6. Leaf of an endomorphism of dimension 1 or 2
In this section, we will show the following theorem.
Theorem 6.1. Leaf of an endomorphism of dimension 1 or 2 is either a single point set, a circle or a bended circle.
A bended circle is defined by a figure formed by bending a circle that intersects the real axis upward along the real axis. The center and the radius of a bended circle are defined by the center and the radius of the original circle, respectively. Let C be a circle in C crossing the real axis, and put C′ be the complex conjugate of C. Then (C ∪ C′) ∩ H is a bended circle. Clearly leaf of each endomorphism of dimension 1 is a single point set.
Proposition 6.2. Let V be a real inner product space of dimension 2, and φ an endomorphism on V .
(a) If φ has
(a b cd
)
as a matrix representation with respect to an orthonormal basis of V , then the leaf
Ψ(φ) contains a + |b|√−1, a + |c|√−1, d + |b|√−1 and d + |c|√−1. (b) Put α = a+d
2 + |b−c|
2
√−1 and r = 1
2
√(a − d)2 + (b + c)2. Both α and r are independent of choice of orthonormal basis of V . (c) Let C ⊂ C be the circle with center α and radius r. If φ does not have any real eigenvalues, then Ψ(φ) = C. Moreover, if r > 0, then the eigenvalue with positive imaginary part is located on the circumference or on the interior of C. (d) If all eigenvalues of φ are real, then C crosses the real axis at the eigenvalues, and Ψ(φ) is a bended circle (C ∪ C′) ∩ H, where C′ is the complex conjugate of C.
Proof. (a) Let {u1, u2} be an orthonormal basis of V satisfying that
(a b cd
)
is the matrix representation
of φ with respect to this basis. Then φ(u1) = a u1 + c u2. Since ‖u1‖ = 1, ‖φ(u1)‖2 = a2 + c2, u1 · φ(u1) =
a and σ(u1, φ(u1)) = |c|, we have Lφ(u1) = a + |c|√−1. Similarly, we have Lφ(u2) = d + |b|√−1,
Lφ((a − d)u1 + (b + c)u2) = a + |b|√−1 and Lφ((b + c)u1 − (a − d)u2) = d + |c|√−1. Their four points belongs to Ψ(φ).
(b) Let A =
(a b cd
)
and A′ =
( a′ b′
c′ d′
)
be the matrix representations of φ with respect to the
two orthonormal bases of V . Put P be the translation matrix between their orthonormal bases, then A′ = P −1AP = tP AP , because P is an orthogonal matrix. The column vectors p and q where P = (p q) are an orthonormal basis of R2. Comparing the (1, 2) and (2, 1) components of A′ = tP AP yields b′ = tpAq and c′ = tqAp = tptAq. And then b′ − c′ = tp(A − tA)q = tp(b − c)Jq = (b − c)tpJq, where J is defined in Example 1.2. J is the π/2-rotation on R2, so Jq = ±p. Hence, |b′−c′| = |(b−c)(±‖p‖2)| = |b−c-
|. The trace and the determinant of a matrix representation are independent of choice of basis. That is a + d = a′ + d′ and ad − bc = a′d′ − b′c′, then α= a+d
2 + |b − c|
2
√−1 = a′ + d′
2 + |b′ − c′|
2
√−1

6 Hiroyuki Ogawa
and
(2r)2 = (a − d)2 + (b + c)2 = (a + d)2 + (b − c)2 − 4(ad − bc)
= (a′ + d′)2 + (b′ − c′)2 − 4(a′d′ − b′c′) = (a′ − d′)2 + (b′ + c′)2.
We have that α and r are independent of choice of orthonormal basis of V . (c) Let D be the discriminant of the characteristic polynomial of φ. φ does not have any real eigenvalues, so D is negative. Since D = (a + d)2 − 4(ad − bc) = (a − d)2 + 4bc, we have bc < 0. Four points of (a) form the rectangle with center α and diagonal length 2r. Therefore, four points in (a) lies on C. Let λ′ = Lφ(v) ∈ Ψ(φ) where v ∈ V ×, and put u = v/‖v‖. There exists an orthonormal basis of V containing u. Since C is-
 independent of choice of orthonormal basis of V , λ′ = Lφ(v) = Lφ(u) lies on C. Ψ(φ) is included in C. We will show that C ⊂ Ψ(φ). The leaf is path connected (Proposition 4.2), so the complement
C r Ψ(φ) is at most 1 connected component. For a matrix representation
( a′ b′
c′ d′
)
of φ with respect
to an orthonormal basis of V , two points a′ + |c′|√−1 and d′ + |b′|√−1 ∈ Ψ(φ) are on the diagonal on C. Ψ(φ) is point symmetric with respect to the center α of C. The complement C r Ψ(φ) is also point symmetric. Thus, the complement C r Ψ(φ) is the empty set or whole of C. Since Ψ(φ) is not empty, C ⊂ Ψ(φ). So Ψ(φ) = C. Let λ be an eigenvalue of φ with positive imaginary part. Then we have λ = a+d
2+
√D
2 . Since
D + (b − c)2 = (a − d)2 + (b + c)2 = (2r)2 ≥ 0 and D < 0, we have that √|D| ≤ |b − c|. The distance between λ and α (the center of C) is at most the radius of C, as below.
|λ − α|2 = (√|D| − |b − c|)2
4 = |D| + (b − c)2 − 2√|D| |b − c|
4 ≤ |D| + (b − c)2 − 2|D|
4 = r2.
Namely, λ is located on the circumference or on the interior of C.
(d) Let λ be a real eigenvalue of φ, which is denoted by a+d±√D
2.
|λ − α|2 = (λ − a + d
2 )2 + ( |b − c|
2 )2 = D + (b − c)2
4 = r2.
Hence, each real eigenvalue lies on the circumference of the circle C. Let C′ be the circle with center
α = a+d
2 − b−c
2
√−1 and radius r. C′ is symmetric with C about the real axis. Hence, each real eigenvalue
also lies on the circumference of the circle C′. We consider eight points a ± b√−1, a ± c√−1, d ± b√−1
and d ± c√−1. Four points a + b√−1, a − c√−1, d + b√−1 and d − c√−1 are the vertices of the rectangle
with center α and diagonal length 2r, and are on C. Another four points a − b√−1, a + c√−1, d − b√−1
and d + c√−1 are the vertices of the rectangle with center α and diagonal length 2r, and are on C′.
Therefore these eight points are on the union of the circles C and C′. Four of eight points, a + |b|√−1,
a + |c|√−1, d + |b|√−1 and d + |c|√−1 belongs to H, and then are on the bended circle (C ∪ C′) ∩ H which is the shape made by bending the circle C upward along the real axis. We have that Ψ(φ) is included in (C ∪ C′) ∩ H. The reverse inclusive relation (C ∪ C′) ∩ H ⊂ Ψ(φ) is valid in the same way as the proof of (c).
Proposition 6.3. Let φ be an endomorphism on a real inner product space V of dimension at least 2. Assume that φ has two different real eigenvalues λ1 and λ2. Let v1 and v2 ∈ V be unit eigenvectors of φ
corresponding to λ1 and λ2, respectively, and put β = v1 · v2. Then Lφ(〈v1, v2〉×) is the bended circle with center α and radius r, where α = λ1+λ2
2 + t√−1, and t and r are nonnegative real numbers satisfying
that
r2 = ( λ1 − λ2
2 )2 + t2, t = |λ1 − λ2|
2
|β|
√1 − β2 , and r = |λ1 − λ2|
2
1
√1 − β2 .
Proof. Since the last proposition leads that λ1 and λ2 lies on the circle with center α and radius r, we have that |λ1 − α| = |λ2 − α| = r, namely
( λ1 − λ2
2 )2 + t2 = r2

Leaf of endomorphism 7
Put w = v1 + v2 ∈ 〈v1, v2〉×, then
‖w‖2 = 2(1 + β), ‖φ(w)‖2 = λ21 + λ22 + 2λ1λ2β, and w · φ(w) = (λ1 + λ2)(1 + β)
∴ |Lφ(w)|2 = ‖φ(w)‖2
‖w‖2 = λ21 + λ22 + 2λ1λ2β
2(1 + β) , Re Lφ(w) = w · φ(w)
‖w‖2 = λ1 + λ2
2
Hence
(Im Lφ(w))2 = |Lφ(w)|2 − (Re Lφ(w))2 = ( λ1 − λ2
2 )2 1 − β
1+β. Since the real part of Lφ(w) coincides with that of the center α of the bended circle Lφ(〈v1, v2〉×).
Im Lφ(w) = (the radius of bended circle) ± Im α = r ± t.
We obtain that
r2 − t2 = ( λ1 − λ2
2 )2, and r ± t = λ1 − λ2
2
√
1−β 1+β
Therefore
r = λ1 − λ2
2
1 2
(
√
1−β
1+β +
√
1+β 1−β
)
= λ1 − λ2
2
1
√1 − β2 ,
t = λ1 − λ2
2
1 2
∣ ∣ ∣ ∣
√
1−β
1+β −
√
1+β 1−β
∣ ∣ ∣ ∣
= λ1 − λ2
2
|β|
√1 − β2 .
7. Leaf in H and eigenvalues with nonnegative imaginary part
There are various shapes within the leaves of endomorphisms of dimension at least 3. We will show the structure theorems on leaf. The first one is the geometric property that each leaf is convex on the Poincar ́e metric, and then each leaf is simply connected. The second one is the algebraic property that each leaf contains all eigenvalues with nonnegative complex part. Let V be a real inner product space of finite dimension, and φ an endomorphism on V . Let W be a φ-stable subspace in V . Since t-
he restriction φ|W of φ on W is the endomorphism on W , the subset Lφ(W ×) of Ψ(φ) is equal to the leaf Ψ(φ|W ) of φ|W . Lφ(W ×) = Ψ(φ|W ) is called the subleaf corresponding to W and denoted by Ψ(φ; W ).
Proposition 7.1. A subleaf corresponding to a 2-dimensional stable subspace is one of three kinds of figures on Theorem 6.1.
Proposition 7.2. If the leaf is simply connected, then it contains all eigenvalues with nonnegative imaginary part.
Proof. It is already shown that the leaf contains all real eigenvalues, by Theorem 4.3. Let λ ∈ H be an eigenvalue of φ with positive imaginary part, and v ∈ VC an eigenvector of φ corresponding to λ. W = 〈Re v, Im v〉 is a φ-stable subspace of dimension 2. By Propositions 7.1 and 6.2, λ is located on the circumference or on the inside of the circle Ψ(λ; W ) = Lφ(W ×). By the assumption that Ψ(φ) is simply connected, Ψ(φ) includes the circumference or on the interior of the circle Ψ(λ; W ). Hence, -
λ belongs to Ψ(φ).
Put l(W ) = Lφ(W ×) = Lφ(P(W )) for any 2-dimensional subspace W in V . l(W ) is a closed curve, because the projective space P(W ) = W ×/R× is homeomorphic to the circle. Let D(W ) be the simple connected domain bounded by the closed curve l(W ), and put D(W )◦ = D(W )rl(W ) the interior of D(W ).
Proposition 7.3. Let λ1, λ2 ∈ Ψ(φ) ⊂ H with λ1 6= λ2. Take v1, v2 ∈ V × with ‖v1‖ = ‖v2‖ = 1, λ1 = Lφ(v1) and λ2 = Lφ(v2), and put W = 〈v1, v2〉 which is a 2-dimensional subspace of V . Let s(λ1, λ2) be the geodesic connecting λ1 to λ2 on H.
(a) The geodesic s(λ1, λ2) is included in the domain D(W ).
(b) If s(λ1, λ2) does not pass through the interior D(W )◦(= D(W )rl(W )), then the interior D(W )◦ is empty, and l(W )(= ∂D(W )) is a geodesic including s(λ1, λ2).
(c) If s(λ1, λ2) passes through the interior D(W )◦, then s(λ1, λ2) ∩ l(W ) = {λ1, λ2}.

8 Hiroyuki Ogawa
(d) If the interior D(W )◦ is not empty, then l(W ) is a closed simple curve.
Proof. We observe the positional relationship between the closed curve l(W ) and the geodesic s(λ1, λ2).
Express a typical w ∈ P(W ) = W ×/R× is the form by xv1 + v2 for some x ∈ P2(R) = (R2)×/R× = R ∪ {∞}. Note that v1 = ∞v1 + v2 in this notation. We have that
‖w‖2 = x2 + 2x(v1 · v2) + 1,
‖φ(w)‖2 = x2‖φ(v1)‖2 + 2x(φ(v1) · φ(v2)) + ‖φ(v2)‖2,
w · φ(w) = x2(v1 · φ(v1)) + x(v1 · φ(v2) + v2 · φ(v1)) + v2 · φ(v2).
A geodesic on the Poincar ́e metric is a part of a line parallel to the imaginary axis and semicircle with center on the real axis. s(λ1, λ2) is a part of a line, if Re λ1 = Re λ2, or a part of a semicircle, otherwise. (i) In the case that Re λ1 = Re λ2. Put a = Re λ1 = Re λ2 (= v1 · φ(v1) = v2 · φ(v2)). s(λ1, λ2) is a part of the line whose real part is a.
Re Lφ(w) − a = w · φ(w)
‖w‖2 − v1 · φ(v1) = R x
‖w‖2 ,
where R = v1 · φ(v2) + v2 · φ(v1) − a (v1 · v2).
Since ‖w‖2 = O(x2) as x → ∞, we ramark that Re Lφ(x v1 + v2) − a = O(x−1) as x → ∞. (ii) In the case that Re λ1 6= Re λ2. s(λ1, λ2) is a part of semicircle. Let c ∈ R be the center of the semicircle and d the radius. Since
d2 = |λi − c|2 = (Re λi − c)2 + (Im λi)2 = |λi|2 − 2c Re λi + c2 (i = 1, 2),
we have that
d2 − c2 = |λi|2 − 2c Re λi, c = |λ1|2 − |λ2|2
2(Re λ1 − Re λ2) . Thus,
|Lφ(w) − c|2 − d2 = |Lφ(w)|2 − 2c Re Lφ(w) = R x
‖w‖2 , where R = 2(φ(v1) · φ(v2) + c(v1 · φ(v2) + v2 · φ(v1)) + (c2 − d2)(v1 · v2)).
In this case, we also remark that |Lφ(x v1 + v2) − c|2 − d2 = O(x−1) as x → ∞. In both cases (i) and (ii), the sign of R t/‖w‖2 shows the position on Lφ(w) relative to s(λ1, λ2). Let K be the geodesic extending from the both endpoints of s(λ1, λ2) to R ∪ {∞}. K divides the upper half plane H r K into two connected areas K1 and K2. In the case that K is a line, put K1 be the right area of K, and K2 the left area. In the case that K is a semicircle, put K1 be the outer area of K, and K2 the inner ar-
ea. Then Lφ(w) belongs to K if R x/‖w‖2 = 0, to K1 if R x/‖w‖2 > 0, and to K2 if R x/‖w‖2 < 0. Since R is independent of t, and ‖w‖ is always positive, the sign change of R t/‖w‖2 coincides with the sign change of t. We separate two cases R = 0 and R 6= 0. (A) In the case that R = 0, Lφ(w) is always on K, so l(W ) is a part of K. l(W ) contains λ1 and λ2. Hence s(λ1, λ2) ⊂ l(W ). (B) In the case that R 6= 0. If x 6= 0, ∞, then R x/‖w‖2 6= 0, so Lφ(w) does not belong to K. Lφ(w) belongs to one of K-
1 or K2 if x > 0, and to the other if x < 0. l(W ) goes around s(λ1, λ2) as below: starts at λ1 which is one of endpoints of the geodesic s(λ1, λ2), goes through K1, crosses K at λ2 which is the other endpoint of s(λ1, λ2), goes through K2, and returns to λ1. Hence, s(λ1, λ2) is included in D(W ). In both cases (A) and (B), s(λ1, λ2) is included in D(W ), so (a) holds. (b) follows from (A), and (c) from (B). Finally, we will show that (d) holds. Let λ3 be a self-intersection point of l(W ). If l(W-
 ) has a normal crossing at λ3, then there exist two geodesics that tangent to l(W ) at λ3. Each geodesic between these geodesic intersects l(W ) in at least three points. This contradict (c), so there exists only one tangent geodesic at λ3. There exists a geodesic that displaces the tangent geodesic just a little and crosses l(W ) by more than two points. This also contradict (c). Therefore, l(W ) does not intersect itself.
Proposition 7.4. Let v1, v2 ∈ V ×. Assume that v1 and v2 satisfy the orthogonal condition:
〈v1, φ(v1)〉 ⊥ 〈v2, φ(v2)〉.
Then the curve l(〈v1, v2〉) is the geodesic connecting Lφ(v1) to Lφ(v2).

Leaf of endomorphism 9
Proof. Put λ1 = Lφ(v1), λ2 = Lφ(v2) and W = 〈v1, v2〉. The orthogonal condition leads that R = 0, where R is defined in the proof of the last proposition. Hence, l(W ) is a geodesic connecting λ1 to λ2.
Express a typical w ∈ V × is the form by x v1 + y v2 for some x, y ∈ R with (x, y) 6= (0, 0). It follows from the orthogonal condition that
‖w‖2 = x2‖v1‖2 + y2‖v2‖2,
‖φ(w)‖2 = x2‖φ(v1)‖2 + y2‖φ(v2)‖2,
w · φ(w) = x2v1 · φ(v1) + y2v2 · φ(v2).
Hence,
Re Lφ(w) = w · φ(w)
‖w‖2 = (x ‖v1‖)2 Re λ1 + (y ‖v2‖)2 Re λ2
(x ‖v1‖)2 + (y ‖v2|)2 ,
|Lφ(w)|2 = ‖φ(w)‖2
‖w‖2 = (x2 ‖v1‖)2|λ1|2 + (y ‖v2‖)2|λ2|2
(x ‖v1‖)2 + (y ‖v2|)2 .
Re Lφ(w) divides Re λ1 and Re λ2 into the ratio (y‖v2‖)2 : (x‖v1‖)2. And |Lφ(w)|2 divides |λ1|2 and |λ2|2 into the same ratio. Since each point on l(W ) lies between λ1 and λ2, l(W ) is the geodesic with the endpoints λ1 and λ2.
Proposition 7.5. If dim V ≥ 3, then D(W ) ⊂ Ψ(φ) for any 2-dimensional subspace W ⊂ V .
Proof. It is enough to show the assertion in the case that D(W ) has an interior point. In this case, l(W ) is a closed simple curve. Let U be a 3-dimensional subspace of V including W . Put P+(U ) = U ×/R>0. P+(U ) is the quotient set of U × identified by multiplying by positive real numbers, namely the set of half-lines starting at the origin. P+(U ) is homeomorphic to a spherical surface, and double covering of the projective plane P(U ). The map Lφ is also regarded as a map on P+(U ). We have -
that Lφ(U ×) = Lφ(P(U )) = Lφ(P+(U )). For any 2-dimensional subspace W1 ⊂ U , the quotient space
P+(W1) = W ×
1 /R>0 is a great circle on a spherical surface P+(U ). Let {v0, v1, v2} be a basis of U satisfying that {v0, v1} is a basis of W . Put λ0 = Lφ(v0), λ1 = Lφ(v1), λ2 = Lφ(v2) ∈ H, and T = 〈v1, v2〉. For any t ∈ P+(T ), we define the closed oriented curve c(t) by
c(t) : [0, 1] ∋ θ 7→ Lφ(cos(π θ)v0 + sin(π θ)t)) ∈ l(〈v0, t〉) ⊂ Lφ(U ×) ⊂ Ψ(φ).
c(t) is a closed curve passing through λ0, because c(t)(0) = c(t)(1) = Lφ(±v0) = λ0. {c(t)}t is the continuous deformation of a closed curve on the complex plane. c(v1) and c(−v1) are the same curve l(W ), but have different orientations. Through the continuous deformation {c(t)}t, the closed curve l(W ) is superimposed on itself in the opposite orientation. Therefore, the continuous deformation passes through all interior points of D(W ). Any interior point of D(W ) lies on a curve c(t) for some -
t ∈ P+(T ). So, D(W ) ⊂ Ψ(φ) holds.
Theorem A. Leaf is convex on the Poincare ́ metric, for any endomorphism of dimension at least 3
Proof. Let φ be an endomorphism on a real inner product space V of dimension at least 3. Let λ1, λ2 ∈ Ψ(φ), v1, v2 ∈ V with λ1 = Lφ(v1) and λ2 = Lφ(v2), and s(λ1, λ2) be the geodesic connecting λ1 to λ2. By Proposition 7.3, s(λ1, λ2) is included in D(〈v1, v2〉). By Proposition 7.5, D(〈v1, v2〉) is included in Ψ(φ). Hence, the leaf is convex on the Poincar ́e metric.
The last theorem leads that the leaf of an endomorphism of dimension at least 3 is simply connected, so the following theorem holds by Proposition 7.2. It is interesting to note that the following algebraic property are derived from the geometric property.
Theorem B. Leaf contains all eigenvalues whose imaginary part is nonnegative, for any endomorphism of dimension at least 3
8. Leaf and the eigenvalue geodesic polygon
For any endomorphism on the real inner product space of finite dimension, the smallest convex domain in H containing all eigenvalues with nonnegative imaginary part is a filled geodesic polygon whose vertexes are eigenvalues with nonnegative imaginary part. The domain is called the eigenvalue geodesic polygon. By the structure theorems (Theorems A and B), the leaf includes the eigenvalue geodesic polygon, for each endomorphism on a real inner product space of dimension at least 3. In generally, th-
e leaf is larger

10 Hiroyuki Ogawa
than the eigenvalue geodesic polygon. We will show that they coincide for each normal endomorphism (Theorem C) in this section. Let φ be an endomorphism on a real inner product space V of finite dimension.
Proposition 8.1. Let λ ∈ H be an eigenvalues of φ with positive imaginary part, and v ∈ VC an eigenvector of φ corresponding to λ. Put W = 〈Re v, Im v〉 ⊂ V and l(W ) = Lφ(W ×).
(a) W is a 2-dimensional φ-stable subspace of V . Hence l(W ) is the subleaf. (b) Put λ+ = Lφ(Re v), λ− = Lφ(Im v) and β = v · v/‖v‖2. Then
|λ±|2 = |λ|2 ± Re (λ2β)
1 ± Re β , Re λ± = Re λ ± Re (λβ)
1 ± Re β , Im λ± = Im λ
√1 − |β|2
1 ± Re β .
(c) λ± = λ holds, if and only if v ⊥ v. (d) If v ⊥ v, then l(W ) = {λ}. (e) Three points λ, λ+ and λ− ∈ Ψ(φ) lies on the same geodesic.
(f) l(W ) is a geodesic circle CP(λ; 1−√1−|β|2
|β| ). (rem. 1−√1−|β|2
|β| → 0 as β → 0)
Proof. (a) The assertion is already shown in §2.
(b) Since Re v = (v + v)/2, Im v = (v − v)/(2√−1), and v is an eigenvector of φ corresponding to λ, we have that
‖Re v‖2 = ‖v‖2
2 (1 + Re β), ‖Im v‖2 = ‖v‖2
2 (1 − Re β),
‖φ(Re v)‖2 = ‖v‖2
2 (|λ|2 + Re λ2β), ‖φ(Im v)‖2 = ‖v‖2
2 (|λ|2 − Re λ2β),
Re v · φ(Re v) = ‖v‖2
2 (Re λ + Re λβ), Im v · φ(Im v) = ‖v‖2
2 (Re λ − Re λβ),
and then
|λ+|2 = ‖Lφ(Re v)‖2 = |λ|2 + Re λ2β
1 + Re β , Re λ+ = Re Lφ(Re v) = Re λ + Re λβ
1 + Re β ,
|λ−|2 = ‖Lφ(Im v)‖2 = |λ|2 − Re λ2β
1 − Re β , Re λ− = Re Lφ(Im v) = Re λ − Re λβ
1 − Re β .
The imaginary parts of λ± (> 0) are given by √|λ±|2 − (Re λ±)2.
(Im λ±)2 = |λ±|2 − (Re λ±)2 = |λ|2 ± Re λ2β
1 ± Re β − ( Re λ ± Re λβ
1 ± Re β )2 = (Im λ)2 (1 − |β|2)
(1 ± Re β)2 .
Since Cauchy-Schwarz inequality leads |β| ≤ 1 and |Re β| ≤ 1, we have that
Im λ± = Im λ
√1 − |β|2
1 ± Re β .
(c) By the above formulae, |λ±| = |λ| if and only if λβ ∈ R and λβ ≤ 0. Re λ± = Re λ if and only if β ∈ R. Hence, λ± = λ if and only if β = 0, i.e. v ⊥ v. (d) λ and λ are the eigenvalues of the restriction φ|W of φ on the two-dimensional φ-stable subspace W . By Propositions 7.1 and 6.2, the closed curve l(W ) is a circle (or a single point set), and λ lies on the circumference or the inside of l(W ). By §2, Re λ E + Im λ J is the matrix representation of φ|W with respect to the basis Re v, Im v o-
f W . Since v and v are orthogonal, Re v and Im v are also orthogonal and equal in length. l(W ) is the circle with radius 0 by Proposition 6.2, so the single point set {λ}. (e) Each geodesic of H is a part of line parallel to the imaginary axis or a semicircle whose center is on the real axis. The geodesic connecting through λ+ and λ− is a part of line if Re λ+ = Re λ−, or a part of semicircle if Re λ+ 6= Re λ−. • In the case that Re λ+ = Re λ−. It follows from (b) that (Re λ+ =) Re λ + Re λβ
1 + Re β = Re λ − Re λβ
1 − Re β (= Re λ−)
(Re λ + Re λβ)(1 − Re β) = (Re λ − Re λβ)(1 + Re β)
∴ Re λ Re β = Re λβ
∴ Re λ± = Re λ ± Re λβ
1 ± Re β = Re λ ± Re λ Re β
1 ± Re β = Re λ.

Leaf of endomorphism 11
λ lies on the line which is the geodesic connecting through λ+ and λ−. • In the case that Re λ+ 6= Re λ−. The geodesic connecting through λ+ and λ− is a semicircle. Put c ∈ R be the center of the semicircle, and d the radius. The calculation in the proof of Proposition 6.2 leads that
d2 − c2 = |λ±|2 − 2c Re λ± c = |λ+|2 − |λ−|2
2 (Re λ+ − Re λ−)
To show that λ is on the semicircle, we need only show that |λ−c| = d holds. Since the equality |λ−c| = d is equivalent to
d2 = |λ − c|2 = |λ|2 − 2c Re λ + c2,
we show that d2 − c2 = |λ|2 − 2c Re λ.
d2 − c2 = |λ±|2 − 2c λ± = |λ±|2 − |λ+|2 − |λ−|2
Re λ+ − Re λ− Re λ± = |λ±|2 (Re λ+ − Re λ−) − (|λ+|2 − |λ−|2) Re λ±
Re λ+ − Re λ− = |λ−|2 Re λ+ − |λ+|2 Re λ−
Re λ+ − Re λ− |λ|2 − 2c Re λ = |λ|2 (Re λ+ − Re λ−) − (|λ+|2 − |λ−|2) Re λ
Re λ+ − Re λ−
Substituting (b) into the right-hand side of the two equations above, both are equal to the following:
2(|λ|2 Re λβ − Re λ Re λ2β)
(1 + Re β)(1 − Re β)(Re λ+ − Re λ−) .
Hence |λ − c| = d. Namely, λ lies on the geodesic connecting through λ+ and λ−.
(f) In §3, we already see that the geodesic circle CP(λ; k) with center λ = p + q√−1 for some 0 ≤ k ≤ 1 is the circle with center p + 1+k2
1−k2 q√−1 and radius 2 k
1−k2 q. We give k ∈ R such that l(W ) = CP(λ; k).
In the case v ⊥ v, we already get l(W ) = {λ} in (c). Since 1−√1−β2
|β| → 0 as β → 0, we consider that
CP(λ; 1−√1−β2
|β| ) = CP(λ; 0) = {λ} for β = 0. v ⊥ v means β = 0, so the assertion holds in this case.
Assume that v 6⊥ v, i.e. β 6= 0. Let
(a b cd
)
be a matrix representation of φ|W with respect to an
orthonormal basis of W . Then λ = (a+d)+√D
2 , where D = (a + d)2 − 4(ad − bc). By Proposition 6.2,
the subleaf l(W ) = Ψ(φ; W ) corresponding to W is the circle with center (a+d)+|b−c|√−1
2 and radius
√(a−d)2+(b+c)2
2 . For the centers of circles CP(λ; k) and l(W ) to coincide, p, q and k satisfy that
p= a+d
2 , q=
√−D
2 , 1 + k2
1 − k2 q = |b − c|
2.
And then the radiuses of the circles coincide as the following.
( 2k
1 − k2 q)2 = (( 1 + k2
1 − k2 )2 − 1) q2 = ( |b − c|
2 )2 − (
√−D
2 )2 = (
√(a − d)2 + (b + c)2
2 )2.
Hence l(W ) = CP(λ; k). λ+ lies on the geodesic circle CP(λ; k), so we have that
k2 = δ(λ, λ+)2 = |λ − λ+|2
|λ − λ+|2 = (Re λ − Re λ+)2 + (Im λ − Im λ+)2
(Re λ − Re λ+)2 + (Im λ + Im λ+)2 = 1 − √1 − |β|2
1 + √1 − |β|2 .
Hence,
√1 − |β|2 = 1 − k2
1 + k2 ∴ |β| = 2k
1 + k2 . Since k is the root of the quadratic equation |β| k2 − 2 k + |β| = 0 lying on the interval [0, 1], we obtain that
k = 1 − √1 − |β|2
|β| .
Corollary 8.2. Let λ be an eigenvalue of φ with positive imaginary part. If there exist two C-linearly independent eigenvectors corresponding to λ, then λ belongs to Ψ(φ).

12 Hiroyuki Ogawa
Proof. Let v1, v2 ∈ VC be C-linearly independent eigenvectors corresponding to λ. If v1 ⊥ v1, then the last proposition (c) leads that Lφ(Re v1) = λ, i.e. λ ∈ Ψ(φ). Assume that v1 6⊥ v1. Put v = t v1 + v2 ∈ Vλ (t ∈ C). The quadratic equation v · v = (v1 · v1) t2 + 2 Re (v1 · v2) t + (v2 · v2) = 0 has a root t0 ∈ C, because the coefficient of the leading term is nonzero. Put v0 = t0v1 + v2, and then v0 ⊥ v0. The last proposition (c) leads that Lφ(Re v0) = λ, i.e. λ ∈ Ψ(φ).
The last corollary is included in Theorem B. By Theorem B, there exists a vector whose value of the function Lφ is the given eigenvalue. However, by the last corollary, one such vector is explicitly given by eigenvectors, if the eigenspace is of dimension at least 2. Let λ ∈ H be an eigenvalue of φ with nonnegative imaginary part, and Vλ ⊂ VC the eigenspace corresponding to λ. The real part Re Vλ = {Re v | v ∈ Vλ} of Vλ is a subspace of V . It is easy to show that Re Vλ = (Vλ + Vλ) ∩ V = Im Vλ and-
 Vλ = Vλ. Moreover, since Re Vλ is φ-stable, Lφ((Re Vλ)×) is the
subleaf Ψ(φ; Re Vλ) corresponding to Re Vλ. In Proposition 8.1, we use the closed curve l(〈Re v, Im v〉) for some v ∈ Vλ, to see Ψ(φ) around λ. We need the subleaf Ψ(φ; Re Vλ) to look at the relationship between λ and the other point on Ψ(φ).
Proposition 8.3. Let λ ∈ H be an eigenvalue with non-negative imaginary part.
(a) If λ ∈ R, then Ψ(φ; Re Vλ) = {λ}.
(b) Assume that λ 6∈ R. Ψ(φ; Re Vλ) = {λ} holds, if and only if Vλ ⊥ Vλ. (c) Assume that λ 6∈ R and Vλ 6⊥ Vλ. Then Ψ(φ; Re Vλ) is a geodesic circle with center λ when dim Re Vλ = 2, and a geodesic disc (a filled geodesic circle) with center λ when dim Re Vλ > 2.
Proof. (a) Since λ ∈ R, Re Vλ is the eigenspace in V corresponding to λ. It follows from the proof of Proposition 4.3 that Ψ(φ; Re Vλ) = Lφ((Re Vλ)×) = {Lφ(v) | v ∈ (Re Vλ)×} = {λ}. (b) Assume that Vλ ⊥ Vλ. Each v1 ∈ Vλ is orthogonal to its conjugate. Proposition 8.1 (c) leads that
Lφ(Re v1) = λ. Then, Ψ(φ; Re Vλ) = Lφ((Re Vλ)×) = {λ}. Conversely, we assume that Vλ 6⊥ Vλ. Take v1, v2 ∈ Vλ satisfying that v1 6⊥ v2. At least one of v1, v2 and v1 + v2 is not orthogonal to the conjugate of itself. Because, if v1 ⊥ v1 and v2 ⊥ v2, then (v1 + v2) 6⊥ v1 + v2 as the following:
(v1 + v2) · (v1 + v2) = v1 · v1 + v1 · v2 + v2 · v1 + v2 · v2 = v1 · v2 + v2 · v1 = 2 v1 · v2 6= 0.
Put v0 one of v1, v2, v1 + v2 which is not orthogonal to the conjugate of itself. Proposition 8.1 (c) leads
that Lφ(Re v0) 6= λ. Hence, Ψ(φ; Re Vλ) = Lφ((Re Vλ)×) 6= {λ}. (c) If dim Re Vλ = 2, then the subleaf Ψ(φ; Re Vλ) is a geodesic circle with center λ. Assume that dim Vλ ≥ 3. Then the subleaf Ψ(φ; Re Vλ) is simply connected. By Proposition 8.1 (f), l(〈Re v, Im v〉) is a geodesic circle with center λ for any v ∈ Vλ. Since Re Vλ = ⋃
v∈Vλ 〈Re v, Im v〉, we see that Ψ(φ; Re Vλ) =
⋃
v∈Vλ l(〈Re v, Im v〉), the union of geodesic circle with same center. The simply connected domain
Ψ(φ; Re Vλ) is a geodesic disc with center λ.
Remark 8.4. The geometric property (Theorem A) was used in the above proof of the last proposition (c). However, it can be shown without it. The subleaf Ψ(φ; Re Vλ) is the union of concentric geometric circles l(〈Re v, Im v〉) (v ∈ Re Vλ) with center λ, by Proposition 8.1 (f). Moreover, Proposition 8.1 (f) and the argument of the proof of Corollary 8.2 lead that the set of radiuses of the geometric circles l(〈Re v, Im v〉) is a closed interval from 0 to some nonnegative real number. So, the leaf Ψ(φ-
; Re Vλ) is a geodesic disc with center λ.
Definition 8.5. For any subset A, B ⊂ H, the union of all geodesics connecting a point on A to a point on B is called the geodesic bridge connecting A to B, denoted by A ≍ B.
The geodesic bridge ≍ is a commutative semigroup on the power set of H, that is, it satisfies the associativity: (A ≍ B) ≍ C = A ≍ (B ≍ C), and the commutativity: A ≍ B = B ≍ A. The geodesic bridge connecting finite convex subsets is the smallest convex set including all those subsets. Hence, the eigenvalue geodesic polygon of an endomorphism φ is represented by {λ1} ≍ · · · ≍ {λr} where λ1, . . . , λr are the eigenvalue of φ with nonnegative imaginary part.
Proposition 8.6. Let φ be an endomorphism on a real inner product space V , and W1 and W2 two nonzero φ-stable subspaces of V satisfying that W1 ⊥ W2. Then
Ψ(φ; W1 ⊕ W2) = Ψ(φ; W1) ≍ Ψ(φ; W2).

Leaf of endomorphism 13
Proof. dim(W1 + W2) ≤ 2 leads dim W1 = dim W2 = 1, so Ψ(φ; W1) and Ψ(φ; W2) are single point sets. The elements λ1 and λ2 ∈ R of these sets are eigenvalues of φ|W1 and φ|W2 , respectively, Since W1 ⊥ W2, the representation matrix of φ|W1⊕W2 of an orthonormal bases is the diagonal matrix whose components of diagonal are λ1 and λ2. By Proposition 6.2, the subleaf Ψ(φ; W1⊕W2) is a geodesic connecting through λ1 and λ2, that is the geodesic bridge connecting {λ1} to {λ2}. Hence, Ψ(φ; W1 ⊕ W2) = Ψ(φ; W-
1) ≍ Ψ(φ; W2). Assume that dim(W1 ⊕ W2) ≥ 3. The subleaf Ψ(φ; W1 ⊕ W2) is convex, so Ψ(φ; W1 ⊕ W2) includes Ψ(φ; W1) ≍ Ψ(φ; W2)). We will show the inverse inclusion relation. By looking at the end points of the geodesics, Ψ(φ; W1) and Ψ(φ; W2) are included in Ψ(φ; W1 ⊕ W2). Let λ ∈ Ψ(φ W1 ⊕ W2) r (Ψ(φ; W1) ∪ Ψ(φ; W2)). Take v = w1 + w2 ∈ W1 ⊕ W2 such that λ = Lφ(v), w1 ∈ W1 and w2 ∈ W2. Since w1 and w2 satisfy the orthogonal condition in Proposition 7.4, the curve l(〈w1, w2〉) is the geodesic conne-
cting Lφ(w1) to Lφ(w2). Since λ = Lφ(w1 + w2) ∈ l(〈w1, w2〉), Lφ(w1) ∈ Ψ(φ; W1) and Lφ(w2) ∈ Ψ(φ; W2), λ lies on the geodesic bridge connecting Ψ(φ; W1) to Ψ(φ; W2). Hence,
Ψ(φ; W1 ⊕ W2) = Ψ(φ; W1) ≍ Ψ(φ; W2).
Theorem C. Leaf is the eigenvalue geodesic polygon, for any normal endomorphism of dimension at least 3,
Proof. Let φ be a normal endomorphism on a real inner product space V of finite dimension. Then, eigenvectors of φ corresponding to different eigenvalues are orthogonal. V is the orthogonal sum of real parts of eigenspaces of all eigenvalues with nonnegative imaginary part. Let Λ = {λ1, . . . , λr} be the set of all eigenvalues with nonnegative imaginary part, Λ the set of all eigenvalues, and Vλ the eigenspace corresponding to λ ∈ Λ. Since φ is normal, Vλ ⊥ Vλ′ for any λ, λ′ ∈ Λ with λ 6= λ′. And-
 then Ψ(φ; Re Vλ) = {λ} for any λ ∈ Λ by Proposition 8.3, and V is the φ-stable orthogonal sum of Re Vλ1 , · · · , Re Vλr . Namely, V = Re Vλ1 ⊕ · · · ⊕ Re Vλr , Re Vλi ⊥ Re Vλj (i 6= j), and each Re Vλi is φ-stable. By Proposition 8.6,
Ψ(φ) = Ψ(φ; Re Vλ1 ) ≍ · · · ≍ Ψ(φ; Re Vλr ) = {λ1} ≍ {λ2} ≍ · · · ≍ {λr}
Remark 8.7. In general, the converse of the last theorem does not hold. For example, take the endomorphism φ = (−1)⊕ (0)⊕ (1)⊕ ((3 J+ K)/4) on R5, where J and K are quadratic square matrixes defined in Example 1.2. (3 J + K)/4 is not normal, so φ is also not. The eigenvalues with nonnegative imaginary part are −1, 0, 1 and √−1/2. The filled geodesic triangle ∆ with vertexes −1, 0 and 1 is surrounded by three semicircles with center 1/2 and radius 1/2, with center −1/2 and radius 1/2, and with cent-
er 0 and radius 1. The eigenvalue λ = √−1/2 lies on the interior of ∆, so ∆ is also the eigenvalue geodesic polygon of φ. Put W = Re Vλ, then we have that φ|W = (3 J + K)/4 and φ|W ⊥ = (−1) ⊕ (0) ⊕ (1). The
subleaf Ψ(φ; W ) is a circle with center α = 3√−1/4 and radius 1/4 by Proposition 6.2, and the subleaf Ψ(φ; W ⊥) = ∆ by the last theorem. We see that the circle Ψ(φ; W ) is included in ∆, by calculating the distance between the center α of the circle and the edges of ∆. Therefore, the leaf Ψ(φ) is the eigenvalue geodesic polygon. φ and φ|W ⊥ have the same leaf. By replacing or increasing the direct sum factor appropriately, it is possible to obtain infinitely many endomorphisms with the same leaf.
Acknowlegments
The author would like to thank Hiroaki Nakamura, Yu Yasufuku, Michihisa Wakui and Kanji Namba for several crucial remarks and valuable information on relevant researches. Special thanks are due to Hiroaki Nakamura for his support and suggestions on various aspects of the author’s continued research.
References
[1] Sheldon Axler, Linear Algebra Done Right (4th ed), Springer Cham, 2023 [2] S. K. Berberian, The Numerical Range of a Normal Operator, Duke Math. J. 31 (1964), 479–483. [3] M. Elin, S. Reich and D. Shoikhet, Numerical Range of Holomorphic Mappings and Applications, Birkh ̈auser, 2019 [4] Karl E. Gustafson and Duggirala K. M. Rao, Numerical Range, Springer-Verlag, 1995 [5] F. Hausdorff, Der Wertvorrat einer Bilinearform, Math. Z. 3 (1919), 314–316 [6] C. K. Li, C-Numerical Ranges and C-Numerical-
 Radii, Linear and Multilinear Algebra 37 (1994), 51–82 [7] S. Roman, Advanced Linear algebra (3rd ed), Springer GTM, 2007 [8] M. H. Stone, Linear Transformations in Hilbert Space, American Mathematical Society, R.I., 1932

14 Hiroyuki Ogawa
[9] O. Toeplitz, Das algebraische Analogon zu einem Satz von Fejer, Math. Z. 2 (1918), 187–197. [10] A. Wintner, Zur Theorie der beschrankten Bilinearformen, Math. Z. 30 (1929), 228–282.
Department of Mathematics, Graduate School of Science, Osaka University, Toyonaka, Osaka 560-0043, Japan
Email address: ogawa@math.sci.osaka-u.ac.jp

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:23.896Z
- **Text Length:** 47446 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
