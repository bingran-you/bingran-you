# PDF Document: Gryszka and Gwoździewicz - 2023 - On some regularity condition.pdf

**File Path:** Gryszka and Gwoździewicz - 2023 - On some regularity condition.pdf

**Processed Date:** 2026-02-10T18:14:29.963Z

**File Size:** 142.37 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2763

**Title:** On some regularity condition

**Collection:** Large Files

---

## Extracted Text Content

arXiv:2106.08001v1 [math.AG] 15 Jun 2021
On some regularity condition
Beata Gryszka and Janusz Gwoździewicz
June 16, 2021
Abstract
Let K be an uncountable field of characteristic zero and let f be a function from Kn to K. We show that if the restriction of f to every affine plane L ⊂ Kn is regular, then f is a regular function.
1 Introduction
In this paper open means always open in Zariski topology. Let K be a field. We say that a function f : Kn → K is regular at a ∈ Kn if there exist polynomials G, H ∈ K[x1, . . . , xn] and an open neighborhood U of a in Kn such that H(x) 6= 0 and f (x) = G(x)/H(x) for every x ∈ U . A function f : Kn → K is called regular if is regular at every point of Kn. We say that f : Kn → K has a rational representation G/H if there exist polynomials G, H ∈ K[x1, . . . , xn] and a nonempty open set U ⊂ Kn such -
that H(x) 6= 0 and f (x) = G(x)/H(x) for every x ∈ U .
In order to keep the presentation on elementary level let us prove the following well-known fact (for more general case see [To]).
Lemma 1. Every regular function f from Kn to K can be written as a quotient f = G/H of two polynomials G, H ∈ K[x1, . . . , xn] with nowhere vanishing denominator.
Proof. If K is finite then every f : Kn → K is a polynomial function. Assume that K is infinite. Let f : Kn → K be a regular function and a1, a2 be points in Kn. The function f has rational representations Gi/Hi such that Gi, Hi are coprime and f (ai) = Gi(ai)/Hi(ai) for i = 1, 2. Thus G1H2 = G2H1 on a non-empty open subset of Kn. Since the field K is infinite, we get G1H2 = G2H1 in the ring K[x1, . . . , xn]. This ring is a unique factorization domain, hence there exists a non-zero constant c ∈ K-
 such that H2 = cH1. Therefore f (a2) = G1(a2)/H1(a2). Since a2 was arbitrary, we get f = G1/H1.
Observe that if F G
F H is a rational representation of f then G
H is also a rational
representation of f . Hence we can always assume that a rational representation is a reduced fraction.
02020 Mathematics Subject Classification: 14A99, 14P99
Key words and phrases: regular function, Bertini’s theorem.
1

2 Results
The main results of this note are Theorems 1 and 2.
Theorem 1. Let K be a field of characteristic zero. Assume that a function f : Kn → K (n ≥ 2) has a rational representation. If for every vector plane L ⊂ Kn the restriction f |L is regular, then f is regular at the origin.
Theorem 1 does not hold under a weaker assumption “regular at the origin”.
Example 1. Let f : R3 → R, f (x, y, z) = x if (y − x2)2 + (z − x3)2 = 0 and f (x, y, z) = 0 otherwise. The restriction of f to any vector plane is regular at the origin. However f is not regular at the origin.
The following example shows that the assumption about a rational representation in Theorem 1 is crucial.
Example 2. Let K be a countable field. Consider the sequence of all pairwise different hyperplanes L1, L2, . . . in Kn with equations li = 0 for i = 1, 2, . . . .
Then Kn is the union ⋃∞
i=1 Li. Let us define
f=
∞
∑
i=1
i
∏
j=1
lj .
The function f restricted to any affine hyperplane is a polynomial function. However f is not regular. Indeed, suppose that f = G/H. Let d be the degree of G. Then the restriction of G = f H to the hyperplane Ld+2 has degree at least d + 1, but on the other hand, this degree is bounded by the degree of G. We arrived to contradiction.
For uncountable fields we can say more.
Theorem 2. Let K be an uncountable field of characteristic zero and let f be a function from Kn to K (n ≥ 2). If for every affine plane L ⊂ Kn, the restriction f |L is regular, then f is regular.
For K = R Theorem 2 follows directly from the Bochnak-Siciak theorem ([BS]) or from [KKK, Theorem 6.1]. For algebraically closed fields it follows from [Pa, Theorem 8.3] since in this case every regular function is a polynomial function. The following classical example shows that in Theorem 2 affine planes cannot be replaced by affine lines.
Example 3. Let f : R2 → R be a function defined as follows
f (x, y) =
{ xy
x2+y2 for (x, y) 6= (0, 0)
0 for (x, y) = (0, 0) .
The restriction of f to any affine line is regular, but f is not continuous, thus f is not regular.
2

3 Proofs
Lemma 2. Let f : Kn → K be a function with a rational representation G/H. If the restriction of f to every affine line is regular then f (x) = G(x)/H(x) for all x ∈ Kn such that H(x) 6= 0.
Proof. Let U be an open set such that H(x) 6= 0 and f (x) = G(x)/H(x) for x ∈ U . Take any a ∈ Kn such that H(a) 6= 0 and let L ⊂ Kn be an affine line passing though a which has a nonempty intersection with U . Then by assumption there exist polynomial functions V, W : L → K such that f |L = V /W , W (a) 6= 0. Comparing the rational representations G|L
H|L and V
W of f |L we get the polynomial equality W · G|L = V · H|L. Hence f (a) = V (a)/W (a) = G(a)/H(a).
Observe that every affine line in Kn is contained in some vector plane. Hence any function that satisfies assumptions of Theorem 1 satisfies also assumptions of Lemma 2.
Lemma 3. If Theorem 1 holds for functions with rational representations G/H, where H ∈ K[x1, . . . , xn] is irreducible, then it holds in full generality.
Proof. We will proceed by induction on the number of irreducible factors of H. Suppose that Theorem 1 is true if H has less than s irreducible factors. Let us assume that f with a rational representation G/H fulfills the assumptions of Theorem 1 and H has s irreducible factors. If H(0) 6= 0, then by Lemma 2 the function f is regular at zero. Otherwise there exists an irreducible factor H1 of H such that H1(0) = 0. Write H = H1kH2, where H2 is not divided by H1. If H2 has positive degree,
then H1kf and H2f fulfill the hypothesis and thus H1kf = V1/W1, H2f = V2/W2
in a neighborhood of 0 ∈ Kn. Then
f = V1
H1kW1
= V2
H2W2
on non-empty open subset of Kn. Hence
H1kW1V2 = H2W2V1.
Since W2(0) 6= 0, we have that H1 does not divide W2. Thus, by the above
polynomial equality, we obtain that V1 = H1kV ∗ for some V ∗ ∈ K[x1, . . . , xn] and
then f has a rational representation V ∗/W1. By Lemma 2 we get f = V ∗/W1 in a neighborhood of 0 ∈ Kn. If H = aH1s, where a ∈ K, then by the hypothesis, we have
H s−1
1 f= G
aH1
=V
W,
on an open non-empty set. Similarly as before, we obtain G = aH1V ∗ for some
V ∗ ∈ K[x1, . . . , xn]. Thus f has a rational representation V ∗/Hs−1
1 . Using the hypothesis we conclude that f is regular at zero.
3

Lemma 4. Let H : Kn → K be an irreducible polynomial. Then after applying some non-singular linear change of coordinates such that degxn H = deg H and H(0, . . . , 0, xn) has no multiple factors different from a power of xn.
Proof. Let H ̃ (u1, . . . , un−1, v) = H(u1v, . . . , un−1v, v) and Hˆ = v−ord H H ̃ . It is
not difficult to check that Hˆ ∈ K[u1, . . . , un−1, v] is irreducible. Let us write
Hˆ = hmvm + hm−1vm−1 + · · · + h0,
where hi ∈ K[u1, . . . , un−1] for i = 0, . . . , m and hm 6= 0. Since Hˆ is irreducible,
its discriminant D = discrimv(Hˆ ) with respect to v is not equal to zero. Let V ⊂ Kn−1 be the set of points, where hmD 6= 0. Then, for every (a1, . . . , an−1) ∈ V ,
the polynomial Hˆ (a1, . . . , an−1, v) has no multiple factors. This implies that
H(a1v, . . . an−1v, v) = vord H Hˆ (a1, . . . , an−1, v) has no multiple factors different from a power of v. Since V is a non-empty open set, after a generic linear change of coordinates xi 7→ xi + aixn for i = 1, . . . , n − 1 and xn 7→ xn we may assume that degxn H = deg H and H(0, . . . , 0, xn) has no multiple factors different from a power of xn.
Proof of Theorem 1. By Lemma 3 we can assume that f has a rational representation G/H, where H is an irreducible polynomial and G, H are coprime. We will prove that H(0) 6= 0. Suppose to the contrary that H(0) = 0. By Lemma 4, we may assume that H is monic of degree d > 0 with respect to xn, and H(0, . . . , 0, xn) has no multiple factors different from a power of xn. Consider the following division with remainder
G = qH + r (1)
in the ring K[x1, . . . , xn−1][xn]. Since G and H are coprime, the reminder
r = rkxkn + rk−1xk−1
n + · · · + r0 is non-zero. Put r ̃k ∈ K[x1, . . . , xn−1] to be the initial homogeneous form of rk. Let us write H(0, . . . , 0, xn) as a product
Hˆ0(xn) · · · Hˆs(xn),
where Hˆ0 is a power of xn and if s ≥ 1, then Hˆ1, . . . , Hˆs are relatively prime irreducible monic polynomials that do not vanish at zero. By Hensel’s lemma we obtain a factorization of H in the ring K[[x1, . . . , xn−1]][xn].
H = H0 · · · Hs,
where Hi(0, . . . , 0, xn) = Hˆi(xn) for i = 0, . . . , s.
Given non-empty subset I of {1, . . . , s} define
AI := ∏
i∈I
Hi, BI := ∏
i∈{0,...s}\I
Hi.
4

These are polynomials in the ring K[[x1, . . . , xn−1]][xn] of positive degrees such that H = AI BI . Since AI and BI are not simultaneously elements of the ring K[x1, . . . , xn], the polynomial AI ∈ K[[x1, . . . , xn−1]][xn] has a non-zero coefficient tI of a monomial xmI
n for some mI < d which is not a polynomial i.e. tI ∈ K[[x1, . . . , xn−1]] \ K[x1, . . . , xn−1]. Hence there exists a non-zero
homogeneous term t ̃I of tI such that deg t ̃I > degx1,...,xn−1 H.
Let
π = r ̃k
∏
∅(I ⊂{1,...s}
t ̃I .
Take a point a = (a1, . . . , an−1) ∈ Kn−1 such that π(a) 6= 0 and consider a plane L ⊂ Kn given by parametric equations x1 = a1u, . . . , xn−1 = an−1u, xn = v.
Let us remark that for any power series h = ∑ ci1,...,in−1 xi1
1 · · · xin−1
n−1 in
K[[x1, . . . , xn−1]] represented as a sum h = ∑∞
i=0 hi of homogeneous polynomials
hi = ∑
i1 +···+in−1 =i
ci1,...,in−1 xi1
1 · · · xin−1
n−1 , for i = 0, 1, . . .
we have h(a1u, . . . , an−1u) = ∑∞
i=0 hi(a)ui in the ring K[[u]].
By assumption there exist coprime polynomials V, W : L → K such that W (0) 6= 0 and G|L
H|L = V
W on a nonempty open subset of L. Hence, we have
W · G|L = V · H|L. (2)
and
H|L = H0|LH1|L · · · Hs|L, (3)
where H0|L, H1|L, . . . , Hs|L are relatively prime polynomials in K[[u]][v] and Hi|L are irreducible for i = 1, . . . , s. By the choice of the plane L, the polynomial r|L ∈ K[u, v] has a nonzero monomial r ̃k(a)udeg r ̃k vk. It follows from (1) that H|L does not divide G|L. Thus by (2) the polynomial W is a non-constant factor of H|L. Since W (0) 6= 0 and H|L(0) = 0, the polynomials W and H0|L are coprime. This implies that s ≥ 1 and W = AI |L for some subset I such that ∅ ( I ⊂ {1, . . . s}. We-
 proved that AI (a1u, . . . , an−1u, v) ∈ K[u, v]. It is impossible since AI (a1u, . . . , an−1u, v) divides H(a1u, . . . , an−1u, v), but in the first polynomial
appears a monomial t ̃I (a)udeg t ̃I vmI while the degree of the second polynomial with respect to u is not greater than degx1,...,xn−1 H. This contradiction finishes
the proof.
The above reasoning is based on the proof of [Ka, Theorem 2], which is in fact the proof of some simple variation of the Bertini’s theorem.
Now we will prove Theorem 2. We begin from two lemmas.
5

Lemma 5. Let K be an uncountable field and let {Ai}i∈I be a countable division of the set Kn. Then there exists i ∈ I such that for any polynomial f : Kn → K: if f |Ai = 0 then f = 0.
Proof. We will proceed by induction on n. For n = 1 any infinite set Ai from the family {Ai}i∈I fulfills the lemma, since every polynomial in one variable that vanishes on the infinite set is the zero polynomial. Assume that Lemma 5 is true for n − 1. Let {Ai}i∈I be a countable division of the set Kn. Without loss of generality, we may assume that I = N. Define h : K → N as follows: for x ∈ K the value h(x) is the smallest index i ∈ N such that the statement of Lemma 5 holds for the division {Ai ∩-
 (Kn−1 × {x})}i∈N
of the set Kn−1 × {x}. By hypothesis the function h is well-defined. Take any positive integer k such that the set Bk = {x ∈ K : h(x) = k} is infinite. Let f : Kn → K be a polynomial such that f |Ak = 0. For arbitrary b ∈ Bk the restriction f |Ak∩(Kn−1×{b}) is equal to zero and thus f |Kn−1×{b} = 0. This
implies that for every a ∈ Kn−1 the one-variable polynomial f |{a}×K vanishes on the infinite set {a} × Bk. This means that f |{a}×K = 0. Since the point
a ∈ Kn−1 was arbitrary, we obtain f = 0.
Lemma 6. Assume that f : K → K is regular, f = G/H, G(x) = b0xr +
b1xr−1 + · · · + br, H(x) = xs + c1xs−1 + · · · + cs and G/H is a reduced fraction. Then, for any pairwise different elements x0, . . . , xr+s of K the system of linear equations
B0xr
i + · · · + Br − f (xi)(C1xs−1
i + · · · + Cs) = f (xi)xs
i , for i = 0, . . . , r + s
with unknowns B0, . . . , Br, C1, . . . , Cs has exactly one solution
(B0, . . . , Br, C1, . . . , Cs) = (b0, . . . br, c1, . . . , cs).
Proof. From the equality f = G/H it is clear that (b0, . . . br, c1, . . . , cs) is a solu
tion of the above system of linear equations. Assume that ( ̃b0, . . .  ̃br, c ̃1, . . . , c ̃s)
is an arbitrary solution of this system. Then for the polynomials G ̃(x) =
 ̃b0xr + ̃b1xr−1+· · ·+ ̃br, H ̃ (x) = xs+c ̃1xs−1 +· · ·+c ̃s we have G(xi) = f (xi)H(xi)
for i = 0, . . . , r + s and thus H ̃ G − HG ̃ = 0 on the set {x0, . . . , xr+s}. Since the left hand side of this equality is a polynomial of degree ≤ r + s, we have the
identity H ̃ G − HG ̃ = 0. This implies that G ̃ = G and H ̃ = H.
We will call the pair (r, s) of positive integers from Lemma 6 the type of f . The Cramer’s Rule implies that for a regular function f : K → K of the type (r, s) the coefficients of G and H are rational functions of x0, . . . , xr+s, f (x0), . . . , f (xr+s) with integer coefficients.
Theorem 3. Let K be an uncountable field and let f : Kn → K be a function such that for any affine line L in Kn that is parallel to one of the axes, the restriction f |L is regular. Then f has a rational representation.
6

Proof. We will proceed by induction on n. For n = 1 the theorem is obvious. Let f : Kn → K fulfills the assumption of the theorem. For (x1, . . . , xn−1, xn) ∈ Kn
we denote x′ = (x1, . . . , xn−1). Let
A(r,s) = {x′ ∈ Kn−1 : f (x′, ·) : K → K has the type (r, s)}.
The family {A(r,s)}(r,s)∈N2 is a countable division of Kn−1. Take a pair (r0, s0) ∈
N2 which fulfills Lemma 5 and fix any pairwise different elements c0, . . . , cr0+s0 of K. By the hypothesis, for every i ∈ {0, . . . , r0+s0}, the function fi := f (·, ci) :
Kn−1 → K has a rational representation. By the comment following Lemma 6, f restricted to the set A(r0,s0) × K has a rational representation f = G/H. Fix c ∈ K. By the hypothesis f |Kn−1×{c} has a form G1/H1. Since rational functions G/H and G1/H1 have the same values on the set A(r0,s0) × {c}, where
H1 6= 0, these functions are equal on Kn−1 × {c}. This implies that G/H is a rational representation of f .
In the language of [Pa] Theorem 3 states that every separately regular function from Kn to K has a rational representation. Perhaps this theorem can be generalized to the product K × L of algebraic varieties as in [Pa].
Theorem 2 follows easily from Theorems 1 and 3.
4 Acknowledgements
This paper is a positive answer to the question of Wojciech Kucharz, which was presented to us in private communication. We would like to thank Wojciech Kucharz for his valuable remarks.
References
[BS] J. Bochnak, J. Siciak, A characterization of analytic functions of several real variables, Ann. Polon. Math. 123 (2019), no. 1, 9–13.
[Pa] R. S. Palais, Some Analogues of Hartogs’ Theorem in an Algebraic Setting, American Journal of Mathematics 100 (1978), no. 2, 387–405.
[Ka] E. Kaltofen, Effective Hilbert irreducibility, Inform. and Control 66 (1985), no. 3, 123–137.
[KKK] J. Kollár, W. Kucharz, K. Kurdyka, Curve-rational functions, Mathematische Annalen 370 (2018), no. 1, 39–69.
[To] A. Tognoli, Algebraic geometry and Nash functions. Institutiones Mathematicae [Mathematical Methods], III. Academic Press, Inc. [Harcourt Brace Jovanovich, Publishers], London-New York, 1978. 60 pp. ISBN: 0-12-363603-3
7

Beata Gryszka Institute of Mathematics Pedagogical University of Cracow Podchor ̧ażych 2 PL-30-084 Cracow, Poland e-mail: bhejmej1f@gmail.com
Janusz Gwoździewicz Institute of Mathematics Pedagogical University of Cracow Podchor ̧ażych 2 PL-30-084 Cracow, Poland e-mail: janusz.gwozdziewicz@up.krakow.pl
8

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:29.963Z
- **Text Length:** 16078 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
