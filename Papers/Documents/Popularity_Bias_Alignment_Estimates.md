# PDF Document: Lyubinin - 2025 - Popularity Bias Alignment Estimates.pdf

**File Path:** Lyubinin - 2025 - Popularity Bias Alignment Estimates.pdf

**Processed Date:** 2026-02-10T18:16:43.776Z

**File Size:** 523.79 KB

**Total Pages:** 14

**Extracted Pages:** 14

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3417

**Title:** Popularity Bias Alignment Estimates

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

POPULARITY BIAS ALIGNMENT ESTIMATES
ANTON LYUBININ
Abstract. We are extending Popularity Bias Memorization theorem from [LGCZHFCW] in several directions. We extend it to arbitrary degree distributions and also prove both upper and lower estimates for the alignment with “top-k” singular hyperspace.
Introduction
Recommender systems routinely exhibit popularity bias: items that already attract many interactions receive disproportionate exposure, which further entrenches their dominance. Recent spectral analyses formalize one mechanism behind this effect by studying how a model’s recommendation scores align with singular vectors of the user-item interaction matrix. In particular, Lin et al. in [LGCZHFCW] have studied popularity bias in collaborative filtering embedding-based recommender systems, under the a-
ssumption that the item-popularity distribution follows a power law. Following their empirical observations, they have established Popularity Bias Memorization Effect, showing alignment of popularity with principal singular vector and obtaining explicit bounds on the alignment between model outputs and this direction, and Popularity Bias Amplification Effect, finding the bound for the relative proportion of most popular item in top-1 recommendation over all users. They have also proposed a debiasi-
ng method based on their findings.
However, power laws are not the only possible item popularity distribution in real data. A power law appears as a straight line on a log-log plot, but many other monotone decreasing distributions can masquerade as “straight enough” under common plotting choices. Empirically, popularity counts across items often deviate from pure power laws: double-Pareto-lognormal (DPLN) families have been proposed on theoretical and empirical grounds [RJ, FWLG], and multiple datasets in social/news domains displa-
y shapes better captured by log-normal, power-law-with-cutoff, or other heavy-tailed forms [HL, LG, CPM].
Log-normal: μ = 2.0, σ = 1.0, Power law: α = 1.5
Importantly, a log-normal distribution of item counts does not induce a power law after ranking. Moreover, goodness-of-fit is tricky: depending on parameters, both log-normal and even exponential
Date: November 24, 2025.
1
arXiv:2511.19999v1 [cs.IR] 25 Nov 2025

POPULARITY BIAS ALIGNMENT ESTIMATES 2
tails can look deceptively straight on logarithmic axes, and statistical tests, like the KolmogorovSmirnov test, have limited power to reliably distinguish these alternatives from power laws [CSN]. Consistent with this, Clauset–Shalizi–Newman emphasize that pure power laws are rare in practice, while log-normal and power-law-with-cutoff often fit better [CSN].
These observations matter for spectral analyses of popularity bias. If the data’s popularity distribution deviates from a pure power law, alignment with the principal singular vector need not be strong - and may vary systematically with the tail shape and truncation. This motivates a study that does not assume a specific parametric tail.
Building on the spectral perspective from [LGCZHFCW], we remove the power-law assumption and establish distribution-agnostic results:
(1) Π1-memorization. We extend the Popularity Bias Memorization theorem to an arbitrary item–popularity distribution, identifying conditions under which recommendation scores align with the principal singular vector.
(2) Πk-memorization. We prove several two-sided bounds for the alignment between popularity and the top-k singular “hyperspace” (i.e., the subspace spanned by the top k right singular vectors). These bounds recover the power-law case of [LGCZHFCW] as a special instance and reveal regimes where alignment weakens (e.g., log-normal or truncated/exponential-like tails). The very existence of the upper bound on the alignment means that in some cases the alignment with top-k singular hyperspace (and, in-
 particular, with the principal singular vector) has limits.
Our framework yields interpretable quantities—expressed in terms of tail mass, effective ranks, and concentration—that can be estimated from data and used to anticipate when models will (or will not) align with popularity. Let us outline the content of this paper.
In Preliminaries section we review related notions from graph theory and collaborative filtering models. Popularity bias memorization contains the statement of Π1-memorization theorem with complete proof, and the statements and discussion of results on Πk-memorization. The proofs of Πk-memorization, due to their technical nature and complexity, are moved to the Appendix, together with our discussion of the interpretation of Kumar’s bound in terms of graph topology.
Preliminaries
We will be considering collaborative filtering embedding-based recommender systems. This section fixes notation and reviews related notions about bipartite graphs (user–item), its linear-algebraic representations, and basic spectral facts used throughout.
Bipartite interaction graph and matrices.
• Let G = (VG, EG) be a bipartite graph with vertex partition VG = {U , I}, where U are users and I are items, |U| = n, |I| = m.
• The binary interaction matrix (biadjacency matrix) is Y ∈ {0, 1}n×m, with (u, i) ∈ EG ⇐⇒ Yui = 1, represents interactions between users and items.
• the block matrix A is the (bipartite) adjacency matrix of G,
A=
[0 Y Y′ 0
]
∈ R(n+m)×(n+m),
• We use prime (·)′ for transpose; all vectors are columns.
• Degrees and “popularity.” For an item i ∈ I:
ri = ∑
u∈U
Yui (item degree / popularity).

POPULARITY BIAS ALIGNMENT ESTIMATES 3
• Lete⃗ k = (1, . . . , 1)′ ∈ Rk and define the popularity vector:
r⃗ = (r i)m
i=1 = Ye′⃗ n ∈ Rm.
• For a user u ∈ U , du = ∑
i Yui and for an item i, di = ri. - Edge count and volumes:
|EG| = ∑
u,i
Yui =e⃗ ′
nYe⃗ m =e⃗ ′
mr⃗.
Volumes and degree summaries (following [CL]).
• For any S ⊆ VG and k ≥ 0, with dx the degree of vertex x:
volk(S) = ∑
x∈S
dk
x, vol(S) = vol1(S), |S| = vol0(S), d ̄S = vol(S)
|S| , d ̃S = vol2(S)
vol(S) .
• Global summaries:
|G| = |VG| = vol0(G), d ̄ = vol(G)
|G| , d ̃ = vol2(G)
vol(G) .
• For the item side in a recommender graph:
ri = di, r∥⃗∥ 2
2=
m
∑
i=1
r2
i = vol2(I).
Embedding models and low-rank structure (following [LGCZHFCW, WHWZW]).
• Embedding-based recommenders assign d-dimensional representations to users/items:
U ∈ Rn×d, V ∈ Rm×d, rows: u′
u and v′
i.
• A generic link function μ : R → R maps inner products to scores:
yˆui = μ(u′
uvi), Yˆ = (yˆui) = μ(U V ′).
Note that μ is applied entrywise, with mean-squared error:
LR = ∥Y − Yˆ ∥2
F → min .
• When μ is the identity (or after an appropriate inverse link/linearization), the model reduces to finding a low-rank matrix Yˆ = U V ′.
SVD and Eckart–Young–Mirsky (EYM). Let the singular value decomposition (SVD) of Y be:
Y = P ΣQ′ =
rank(Y )
∑
k=1
σk pk q ′
k,
with {pk}n
k=1 and {qk}m
k=1 orthonormal singular vectors and singular values σ1 ≥ · · · ≥ 0.
By the Eckart–Young–Mirsky theorem, the best rank-l approximation (in any unitarily invariant norm, in particular the Frobenius norm) is the truncated SVD:
Yˆl =
l
∑
k=1
σk pk q ′
k.
Similar to [LGCZHFCW], we will be assuming that after the training ||Y − Yˆ ||2
F (which, in general,
depends on μ) achieves the minimum, and so Yˆ = Yˆl for some l. Equivalent eigen-relations:
Y qk = σkpk, Y ′pk = σkqk,
(Y Y ′)pk = σ2
kpk, (Y ′Y )qk = σ2
k qk .

POPULARITY BIAS ALIGNMENT ESTIMATES 4
Hence, for the truncated approximant Yˆl, the nonzero singular values are {σ1, . . . , σl}; equivalently:
σi(Yˆl) = σi(Y ) for i = 1, . . . , l, σ2
i (Y ) = λi(Y Y ′) = λi(Y ′Y ).
Remark. If Y ′Y v = a2v with a > 0 and u = 1
a Y v, then Y v = au and Y ′u = av; thus eigenvectors of
Y ′Y (resp. Y Y ′) are right (resp. left) singular vectors of Y .
Spectrum of the bipartite adjacency. For the bipartite adjacency matrix:
A=
[0 Y Y′ 0
]
,
the spectrum is symmetric:
spec(A) = {±σk : k = 1, . . . , rank(Y )} ∪ {0 with appropriate multiplicity}.
In particular, the nonzero eigenvalues of A are ± the singular values of Y .
Popularity bias memorization.
Π1-memorization. Below is a direct generalization of the Popularity Bias Memorization theorem from [LGCZHFCW] to the case of an arbitrary recommender graph.
Theorem. 1A. In the above notations,
A : cosr(⃗,q ⃗ 1) ≥ σ12
vol2 (I )
√
1− 1
σ12
(vol(I) − rmax).
B : σ2
1 ≥ rmax.
Proof. A: The proof in general follows [LGCZHFCW].
cosr(⃗,q ⃗ 1) = (Ye′⃗) q′ ⃗ 1
|r|⃗|| =e⃗ ′(Yq ⃗ 1)
|r|⃗|| = σe1⃗ p′⃗ 1
√vol2 (I )
cosr(⃗,q ⃗ s) = (Ye′⃗) q′ ⃗ s
|r|⃗|| =e⃗ ′(Yq ⃗ s)
|r|⃗|| = σes⃗ p′⃗ s
√vol2 (I ) If Z = Y ′Y = ||zkl||, zkl ≥ 0, then
σ2
1 = max
|q|⃗||=1
q⃗ ′(Y ′Y q)⃗ = max
|q|⃗||=1
m
∑
k=1
m
∑
l=1
qk zkl ql
As explained in [LGCZHFCW], it is possible to choseq⃗ 1 so thatq⃗ 1 ≥ 0 (q1i > 0), thenp⃗ 1 = 1
σ1 (Yq′⃗ 1) ≥ 0. Note that all other eigenvectors (and so singular vectors) may have at least one negative component (see Perron-Frobenius theorem).
Let s be the number of an item,y⃗ k = ||y·,k||,p⃗ 1 ≥ 0, yu,i ∈ {0, 1}. Since Yp′⃗ 1 = σq1⃗ 1, we have y⃗ ′ps⃗ 1 = σ1qs1 ande⃗ p′⃗ 1 ≥y⃗ ′ps⃗ 1 = σ1qs1. So we get the initial lower bound,
cosr(⃗,q ⃗ 1) ≥ σ12qs1
√vol2(I) .
We shall try to estimate the qs1 term through qs21 = 1 − ∑
i̸=s q2
i1, since Q is unitary matrix.
If Bs = Y withouty⃗ s, then for any j
∑
i̸=s
y⃗ jy⃗ i ≤
∑
i̸=s
y⃗ yi⃗ i = ∑
i̸=s
ri = vol(I) − rs
Then for Cs = B′sBs = ||cij|| we have ∑
j cij ≤ vol(I) − rs, and so, by Perron-Frobenius theorem,
λmax(B′
sBs) ≤ max ∑
j
cij ≤ vol(I) − rs.

POPULARITY BIAS ALIGNMENT ESTIMATES 5
This gives us an estimate of ∑
i̸=s
(qi1)2,
∑
i̸=s
(qi1)2 = 1
σ12
||B′
ps⃗ 1||2 ≤ 1
σ12
λmax(B′
sBs) ≤ 1
σ12
(vol(I) − rs).
Thus we get
q2
s1 = 1 −
∑
i̸=s
q2
1i ≥ 1 − 1
σ12
(vol(I) − rs)
and so
cosr(⃗,q ⃗ 1) ≥ σ12
√vol2 (I )
√
1− 1
σ12
(vol(I) − rs),
and, in particular,
cosr(⃗,q ⃗ 1) ≥ σ12
√vol2 (I )
√
1− 1
σ12
(vol(I) − rmax).
B: same as in [LGCZHFCW]. □
Remark 1. i. If item degrees or rank-frequencies follow distribution ρ, define vol(ρ) and vol2(ρ) in similar way (assuming they exist, i.e. the required sums converge). Then vol(ρ) > vol(I) and vol2(ρ) > vol2(I) and so we get a new estimate:
cosr(⃗,q ⃗ 1) ≥ σ12
√vol2 (I )
√
1− 1
σ12
(vol(I) − rmax) ≥ σ12
√vol2(ρ)
√
1− 1
σ12
(vol(ρ) − rmax).
This the type of estimate from [LGCZHFCW].
ii. In order to analyze a popularity distribution on alignment with principal singular vector one need to estimate further the part of the RHS in theorem A. One can use the estimates for radical and the singular number to simplify it. The standard inequalities for estimating the square root are
√1 − a ≥ 1 − a
2 − a2
2 ≥ 1 − a. If σ12 ≥ L, then we get the following estimates:
cosr(⃗,q⃗ 1) ≥ L
√ vol2(I)
√
1− 1
L
(vol(I) − rmax
)≥
≥L
√ vol2(I)
(
1 − vol(I) − rmax
2L −
(vol(I) − rmax
)2
2L2
)
≥
≥L
√ vol2(I)
(
1 − vol(I) − rmax
L
)
.
The rough estimates for σ12 are umin ≤ σ1 ≤ umax. There is more refined estimate by Kumar [K], that we review in the appendix,
σ2
1 ≥ KL ≃ d ̄+ sK
√p − 1 , s2
K ≃ V ar(d) + W
p + 4B
p,
where
• sK is the “upscaled variance”,
• p = ⌊ n+m
2
⌋,
• W = W (G) is the “wedge number”,
• B = c4(G) is the “butterfly number” of the graph G.
Kumar’s lower bound KL depends on the topology of the whole graph G, showing deep connection between this topology and popularity alignment.

POPULARITY BIAS ALIGNMENT ESTIMATES 6
Πk-memorization. For a general popularity distribution we may not necessarily have an alignment with the principal singular vector. In this section we will prove that we always have a closer alignment with the span of the top-k singular vectors. We will prove several bounds, each with their own pros/cons.
Let Πk be the orthogonal projector onto the span of the first k right singular vectors q{ ⃗ 1, . . . ,q ⃗ k} and Qk =q[ ⃗ 1, . . . ,q ⃗ k] is the matrix formed by them. Define the angle between the span and the popularity vector,
θk := ∠
(r, Πkr⃗ ).
Then
cos θk = ∥Πkr⃗∥
r∥⃗∥ =
√
r⃗ ′Πkr⃗
|r|⃗|| 2 = √κk, Πk = QkQ′
k, κk :=
k
∑
i=1
cos2(r,q⃗ i).
Combinatorial estimate. Our proof will use the strategy from k = 1, so in preparation we will prove a few lemmas. Let S ⊂ I be any set of items, BS be Y with the columns in S removed, andv⃗ S be a projection of a vectorv⃗ onto the span of q{⃗ s}s∈S. Also let
τS = ∑
j,s∈S
q2
js =
k
∑
j=1
∥q(⃗ j )S∥2
2 , and rS = ∑
r∈S
rs.
Lemma. 1. With τS as above,
τS ≥ k − (vol(I) − rS)


k
∑
j=1
1
σ2
j

 = k − ∆SHk,
where ∆S := vol(I) − rS, and Hk := ∑k
j=1 σ−2
j.
The bound of the lemma can be improved using Ky Fan’s principle.
Lemma. 1′.
k− 1
σ12
n
∑
j=n−k+1
λj (BS B′
S) ≥ τS ≥ k − 1
σ2
k
k
∑
j=1
λj (B′
S BS ).
Theorem. 1C. Let UτS ≥ τS ≥ LτS . Then
r⃗ ′Πkr⃗ ≥
(
[LτS − (|S| − 1)]
+
)
r∥⃗ S∥2 − 2 r∥⃗ S∥ r∥⃗ Sc ∥,
r⃗ ′Πkr⃗ ≤ min
{
1, UτS
}
∥rS∥2 + 2∥rS∥ ∥rSc ∥ + ∥rSc ∥2.
Normalizing the inequality from the theorem by r∥⃗∥ = √vol2(I), for the values of LτS , UτS from lemmas 1, 1’, we are getting the following bounds for the angle:
Combinatorial bounds:
A1. For general |S|, using LτS = k − ∆SHk, with ∆S := vol(I) − rS, and Hk := ∑k
j=1 σ−2
j,
cos θk = ∥Πkr⃗∥
r∥⃗∥ ≥
(
[ k − ∆SHk − (|S| − 1) ]+ r∥⃗ S∥2 − 2 r∥⃗ S∥ r∥⃗ Sc ∥
)1/2
+
√vol2 (I )

POPULARITY BIAS ALIGNMENT ESTIMATES 7
A2. For |S| = k, A1 becomes
cos θk = ∥Πkr⃗∥
r∥⃗∥ ≥
(
[ 1 − ∆SHk ]+ r∥⃗ S∥2 − 2 r∥⃗ S∥ r∥⃗ Sc ∥
)1/2
+
√vol2 (I )
Remark 2. If S = “k most popular items” (largest rs), then rS and ∥rS∥2 = ∑
s∈S rs2 are large, and the deficit ∆S = vol(I) − rS is small - tightening the bound. As k grows, ∆S shrinks and Hk grows slowly; the factor [1 − ∆SHk]+ increases, so the bound strengthens—matching the intuition that a larger top subspace captures more of r.
B1. Ky Fan strengthening. Using LτS = k − 1
σ2
k
∑k
j=1 λj (B′
S BS )
cos θk = ∥Πkr⃗∥
r∥⃗∥ ≥
√ √ √ √
([
k− 1
σ2
k
∑k
j=1 λj (B′
SBS) − (|S| − 1)
]
+
)
r∥⃗ S∥2 − 2 r∥⃗ S∥ r∥⃗ Sc ∥
vol2 (I )
B2. For |S| = k, B1 becomes
cos θk = ∥Πkr⃗∥
r∥⃗∥ ≥
√ √ √ √
([
1− 1
σ2
k
∑k
j=1 λj (B′
S BS )
]
+
)
r∥⃗ S∥2 − 2 r∥⃗ S∥ r∥⃗ Sc ∥
vol2 (I )
These are the bounds A1/A2 with the crude λmax in the middle steps (see appendix) replaced by the Ky Fan sum ∑k
j=1 λj (B′
SBS). As the result, it strictly strengthens A1/A2 (since ∑
j≤k λj ≤ kλmax).
Still combinatorial (uses which columns are removed).
B3. Cauchy interlacing simplification. Using Cauchy interlacing,
σ2
i = λi(Y Y ′) ≥ λi(BSB′
S ) ≥ λi+|S|(Y Y ′) = σ2
i+|S|,
we can get the bound in terms of the singular values of Y . We get from B1
cos θk = ∥Πkr⃗∥
r∥⃗∥ ≥
√ √ √ √
[
k− 1
σ2
k
(
∑k
j=1 σ2
j
)
− (|S| − 1)
]
+
r∥⃗ S∥2 − 2 r∥⃗ S∥ r∥⃗ Sc ∥
vol2 (I )
and from B2
cos θk = ∥Πkr⃗∥
r∥⃗∥ ≥
√ √ √ √
[
1− 1
σ2
k
(
∑k
j=1 σ2
j
)]
+
r∥⃗ S∥2 − 2 r∥⃗ S∥ r∥⃗ Sc ∥
vol2 (I )
The bounds B3 become basis-invariant and easier to evaluate, but weaker than B1/B2.
Upper bounds. C1. We have the general upper bound
cos θk = ∥Πkr⃗∥
r∥⃗∥ ≤
√
λ1(MS)r∥⃗ S∥2 + 2 r∥⃗ S∥ r∥⃗ Sc ∥ + r∥⃗ Sc ∥2 vol2 (I )
with
λ1(MS) ≤ min

1, UτS −
|S|
∑
i=2
λi (MS )

 ≤ min(1, UτS ).
Smaller terms in the inequality give sharper bound.

POPULARITY BIAS ALIGNMENT ESTIMATES 8
C2. Ky Fan’s principle lower side (sum of smallest eigenvalues of BSB′
S ).
Using UτS = k − 1
σ2
1
∑n
j=n−k+1 λj (BS B′
S), we can specialize C1 to
cos θk = ∥Πkr⃗∥
r∥⃗∥ ≤
√
min(1, k − 1
σ2
1
∑n
j=n−k+1 λj (BS B′
S))r∥⃗ S∥2 + 2 r∥⃗ S∥ r∥⃗ Sc ∥ + r∥⃗ Sc ∥2
vol2 (I )
(we write here only the largest inequality).
C3. Using Cauchy interlacing we can replace some of the λj(BSB′
S) in C2 with σ2
j+|S|.
Remark 3. Trivial but useful: since Πk ⪰ Πk−1 (in Loewner’s order), we always have cos θk ≥ cos θk−1, in particular cos θk ≥ cos θ1. So our lower Π1-bound already applies to all k. Πk-bound improves it whenever the top-k items hold a substantial share of popularity.
Linear programming estimate. Let us prove another estimate using linear programming methods. From the SVD decomposition of Y = ∑
i σip⃗ qi⃗ ′
i and expansion
e⃗ = ∑
i
cip⃗ i, ci :=p⃗ ′
ei⃗ = p(⃗,e⃗).
we obtain
r⃗ = Y e′⃗ = ∑
i
σiciq⃗ i, κk =
∑k
i=1 σ2
i c2
i
∑
j σ2
j c2
j
.
Set si := σ2
i (descending as s1 ≥ s2 ≥ · · · ≥ 0) and define
μ := r∥⃗∥ 2
e∥⃗∥ 2 = ∥Ye′⃗∥ 2
n = vol2(I)
vol0(U ) = d ̃I
vol1 (I )
vol0(U ) .
Normalize αi := c2
i
∑
j c2
j
= c2
i
n , so ∑
i αi = 1 and
μ=∑
i
siαi, κk =
∑k
i=1 siαi
μ.
Thus, in fact, κk depends only on the spectrum {si} and the scalar μ = r∥⃗∥ 2/n.
Theorem. 1LP. In the above notations, we have the lower and upper bound estimates:
cos2 θk = κk ≥
[ 0, when σ2n ≤ μ ≤ σ2
k+1 σ2
1 μ
μ−σ2
k+1 σ2
1 −σ2
k+1
, when σ2
k+1 < μ ≤ σ12
cos2 θk = κk ≤
[ σ2
k μ
μ−σ2
n
σ2
k −σ2n
, when σ2n ≤ μ ≤ σ2
k
1, when σ2
k < μ ≤ σ12
Interpretation. If the “degree-squared mean” μ does not exceed the (k + 1)-st spectral level σ2
k+1,
there is no information forcingr⃗ to live in the top-k space (bound 0). Once μ crosses σ2
k+1, a nonzero fraction ofr⃗ must lie in the top-k subspace. The bound is stronger when the gap μ − σ2
k+1 is larger. If μ approaching σ12, the bound approaches 1: most ofr⃗ must be captured by the top-k space.
• These are tight bounds, given only {σi} and μ: the worst case is a two-point mix of the q1 direction and the qk+1 direction.
• It ignores head structure; sometimes stronger than B-style bounds (e.g., big spectral gap, μ near σ12); sometimes weaker (heavy head but small gap).
• The bounds is monotonic non-decreasing in k (easy to check with basic Calculus). Because σk+1 decreases with k; as we allow a larger top subspace, θk must shrink (alignment grows).

POPULARITY BIAS ALIGNMENT ESTIMATES 9
• For k = 1 LP lower bound reduces to the “gap-only” principal-direction bound: cos2 θ1 ≥ s1
(μ−s2 )
[μ(s1−s2)] if μ > s2, else 0.
• If σn = 0 (common), LP upper bound reduces to cos θk ≤ 1 for μ ≤ σ2
k, which is not informative.
• We can state the symmetric user-side version by replacing r = Y ′e, n with s = Y e, m; the spectrum is the same.
Appendix.
A. Kumar’s bounds. A two-sided estimate is from [K] by R. Kumar:
m+ s
√p − 1 ≤ λ2
1 ≤ m + s√p − 1,
where m = e
p, s =
√M
2p − m2, p = ⌊ n+m
2
⌋, M = tr(A4), and, as we know, λ1 = σ1. It is also known that tr(A4) = 2|EG| + 4W + 8c4(G),
where W = ∑
v∈VG
( dv 2
)
is the number of “wedges” in G and c4(G) is the number of 4-cycles
(“butterflies”) in G. Lets analyze the terms in the inequality m + √ps−1 ≤ λ21 . Assume that n + m is
even, then m = e
p = 2e
2⌊ n+m
2 ⌋ = 2e
n+m = d ̄ is the average degree of a vertex. In s2 = M
2p − m2 = M
2p − d ̄2,
we have M
2p = 2|EG|
2p + 4W
2p + 8c4
2p = d ̄+ 4W
4p + 8c4
2p . It is well known that n+m
∑
i=1
d2
i = "number of open 2-paths" = 2e + 2W
and thus
2e
2p + 4W
2p − m2 = 2e + 2W
2p + 2W
2p − m2 =
(
1 2p
n+m
∑
i=1
d2
i − d ̄2
)
+W
p = V ar(d) + W
p
and so
s2 = V ar(d) + W
p + 4c4
p Thus we can say that
m+ s
√p − 1
∼= d ̄+
√
V ar(d) + W
p + 4c4
p
p−1 .
Theorem 1C.
Proof of Lemma 1.
We have for every singular vectorq⃗ j
q ⃗ j = q( ⃗ j )S + q( ⃗ j )Sc and 1 = q∥ ⃗ j ∥2 = ∥q( ⃗ j )S∥2 + ∥q( ⃗ j )Sc ∥2
Since Yp′⃗ j = σqj⃗ j ⇒ (B′
Sp⃗ j ) = σjq(⃗ j )Sc . Hence
∥q(⃗ j )Sc ∥2
2 = σ−2
j ∥B′
Sp⃗ j ∥2
2 ≤ σ−2
j λmax(B′
S BS ).
Altogether we get
∥q( ⃗ j )S∥2
2 ≥ 1 − λmax(B′
S BS )
σ2
j
.

POPULARITY BIAS ALIGNMENT ESTIMATES 10
For binary Y one has the row-sum bound
λmax(B′
S BS ) ≤
∑
i∈Sc
ri = vol(I) − rS,
so
∥q(⃗ j )S∥2
2 ≥ 1 − vol(I) − rS
σ2
j
.
The (s, s) entry (the s-th diagonal element) of Πk is
πs := [Πk]ss =e⃗ ′
sΠke⃗ s = e(⃗ ′
s Qk )(Q′
ke⃗ s) =
k
∑
j=1
e(⃗ ′
qs⃗ j )2 =
k
∑
j=1
q2
js,
and
τS := tr(Πk)SS = ∑
s∈S
πs.
Then
τS = ∑
j,s∈S
q2
js =
k
∑
j=1
∥q(⃗ j )S∥2
2 ≥ k − (vol(I) − rS)


k
∑
j=1
1
σ2
j

 = k − ∆SHk,
with ∆S := vol(I) − rS, and Hk := ∑k
j=1 σ−2
j. □
Proof of Lemma 1′.
Since B′
Spj = σj (qj)Sc , we can write the norm as
∥(qj )Sc ∥2 = 1
σ2
j
∥B′
S pj ∥2 = 1
σ2
j
(B′
S pj )′(B′
Spj ) = 1
σ2
j
p′
j (BS B′
S )pj .
Let P (u)
k = ∑k
j=1 pj p′
j be the projector onto span{p1, . . . , pk}, and Wk = ∑k
j=1
1 σ2
j
pj p′
j is projection
onto the same span with scaling. We have
P (u)
k Wk = WkP (u)
k = Wk.
Now summing ∥(qj)Sc ∥2 over j = 1, . . . , k gives
k
∑
j=1
∥(qj )Sc ∥2 =
k
∑
j=1
1
σ2
j
p′
j (BS B′
S)pj = Tr


k
∑
j=1
1
σ2
j
p′
j (BS B′
S )pj

(0.1)  =
=
k
∑
j=1
1
σ2
j
Tr (p′
j (BS B′
S )pj
)=
k
∑
j=1
1
σ2
j
Tr ((BSB′
S )pj p′
j
(0.2) ) =
= Tr

BS B′
S


k
∑
j=1
1
σ2
j
pj p′
j



 = Tr
(
BS B′
S Wk
)
(0.3) =
= Tr
(
BS B′
S P (u)
k WkP (u)
k
)
= Tr
(
P (u)
k BS B′
S P (u)
k Wk
)
(0.4) .
Note P (u)
k BS B′
S P (u)
k ⪰ 0 (in Loewner’s order) because BSB′
S ⪰ 0. On span{p1, . . . , pk}, Wk is diagonal
with eigenvalues 1/σ2
j (nonincreasing in j). Hence
1 σ12
P (u)
k ⪯ Wk ⪯ 1
σ2
k
P (u)
k.
Therefore 1 σ12
Tr
(
P (u)
k BS B′
S P (u)
k P (u)
k
)
≤ Tr
(
P (u)
k BS B′
S P (u)
k Wk
)
≤1
σ2
k
Tr
(
P (u)
k BS B′
S P (u)
k P (u)
k
)
.

POPULARITY BIAS ALIGNMENT ESTIMATES 11
Using idempotence of projectors and trace properties, this inequality changes to
1 σ12
Tr(P (u)
k BS B′
S
)≤
k
∑
j=1
∥(qj )Sc ∥2 ≤ 1
σ2
k
Tr(P (u)
k BS B′
S
)
and using Ky Fan’s principles,
1 σ12
n
∑
j=n−k+1
λj (BS B′
S) ≤
k
∑
j=1
∥(qj )Sc ∥2 ≤ 1
σ2
k
k
∑
j=1
λj (BS B′
S ).
Equivalently,
(KF–S) k − 1
σ12
n
∑
j=n−k+1
λj (BS B′
S) ≥
k
∑
j=1
∥(qj)S∥2 ≥ k − 1
σ2
k
k
∑
j=1
λj (B′
S BS ) .
□
Proof of Theorem 1C.
Step 1. Spectral bounds on the principal submatrix. Consider the principal submatrix MS := (Πk)SS ∈ R|S|×|S| (cuts out S-s rows and columns). Let ES : R|S| → Rm be the column-selector (embeds vectors supported on S). Then
MS = E′
S ΠkES = E′
S QkQ′
kES = (Q′
kES )′(Q′
kES ),
so it is positive semi-definite. Also ∥Πk∥2 = 1 (it’s a projector), hence
(MSx, x) = (ΠkESx, ESx) ≤ ∥ESx∥2
2 = ∥x∥2
2,
so ∥MS∥2 ≤ 1. Therefore all eigenvalues of MS lie in [0, 1]. Note that - tr(MS) = τS = ∑
s∈S [Πk]ss = ∑k
j=1 ∥(qj)S∥2 - rank(MS) ≤ rank(Πk) = k. - In particular, if |S| > k, then MS has at least |S| − k zero eigenvalues. Let the eigenvalues of MS be λ1(MS) ≥ · · · ≥ λ|S|(MS) ≥ 0, each ≤ 1, with sum
∑|S|
i=1 λi(MS) = τS. Then
λmin(MS ) = λ|S|(MS ) =τS −
|S|−1
∑
i=1
λi(MS) ≥ max

0, LτS −
|S|−1
∑
i=1
λi (MS )


(0.5)
(0.6) ≥ max (0, LτS − (|S| − 1)) ≡ [LτS − (|S| − 1)]+.
λmax(MS) = λ1(MS) = τS −
|S|
∑
i=2
(0.7) λi(MS)
≤ min

1, UτS −
|S|
∑
i=2
λi (MS )

(0.8)  ≤ min(1, UτS )
When |S| > k, due to the previous remark λmin(MS) = 0, consistent with 0 = [ τS − (|S| − 1) ]+ because τS ≤ k ≤ |S| − 1.
Step 2. Block lower bound for r′Πkr.
Let r(⃗ S,r⃗ Sc ) denote the rearrangement of coordinates of vectorr⃗ such that the coordinates from S come first, and let P be the permutation matrix such that Pr⃗ = r(⃗ S,r⃗ Sc ). With MS = (Πk)SS, C = (Πk)SSc , N = (Πk)ScSc , the projection Πk in this permuted basis has the form
Πk′ = P ΠkP ′ =
[MS C C′ N
]
, Pr =
[r⃗ S r⃗ Sc
]
and
r⃗ ′Πkr⃗ = (Pr⃗) ′Πk′ (Pr⃗) =r⃗ ′
SMSr⃗ S + 2r⃗ ′
S Cr⃗ Sc +r⃗ ′
Sc Nr⃗ Sc ,

POPULARITY BIAS ALIGNMENT ESTIMATES 12
since everything is real and
r⃗ ′
Sc Cr′⃗ S = (Cr′⃗ S,r⃗ Sc ) = r(⃗ S, Cr⃗ Sc ) =r⃗ ′
S Cr⃗ Sc
is the same scalar. Using MS ⪰ λmin(MS)I, N ⪰ 0, and ∥C∥2, ∥N ∥2 ≤ 1 (since ∥Πk∥2 = 1), we get that
λmin(MS)r∥⃗ S∥2 ≤ r⃗ ′
S MSr⃗ S ≤ λmax(MS )r∥⃗ S ∥2
− 2 r∥⃗ S∥ r∥⃗ Sc ∥ ≤ 2r⃗ ′
SCr⃗ Sc ≤ 2 r∥⃗ S∥ r∥⃗ Sc ∥
0 ≤ r⃗ ′
Sc Nr⃗ Sc ≤ r∥⃗ Sc ∥2
and
r⃗ ′Πkr⃗ ≥ λ min(MS) r∥⃗ S∥2 − 2 r∥⃗ S∥ r∥⃗ Sc ∥ r⃗ ′Πkr⃗ ≤ λ max(MS) r∥⃗ S∥2 + 2 r∥⃗ S∥ r∥⃗ Sc ∥ + r∥⃗ Sc ∥2
Combining with (†) and the bound on τS:
r⃗ ′Πkr⃗ ≥
([
LτS − (|S| − 1)
]
+
)
r∥⃗ S∥2 − 2 r∥⃗ S∥ r∥⃗ Sc ∥
r⃗ ′Πkr⃗ ≤
(
min[1, UτS ]
)
r∥⃗ S∥2 + 2 r∥⃗ S∥ r∥⃗ Sc ∥ + r∥⃗ Sc ∥2
□
LP theorem.
Finding a lower and an upper bounds for κk turns into two linear programming problems on αi:
(LP)
{
N (α) = ∑
i≤k siαi → min N (α) = ∑
i≤k siαi → max s.t.
n
∑
i=1
αi = 1,
n
∑
i=1
siαi = μ, αi ≥ 0, s1 ≥ s2 ≥ · · · ≥ 0.
The feasible region is a polytope - the intersection of the simplex {α ≥ 0, ∑ αi = 1} with the hyperplane ∑ siαi = μ. It’s nonempty and compact. Lets also note that, as a convex combination of (ordered values) si, μ ∈ [sn, s1].
Linear programs attain their optima at extreme points (a.k.a. vertices) of the feasible polytope. At a vertex, at least m − 2 of the αi’s must be active (αi = 0). Therefore at most 2 entries can be positive. (If μ happens to equal some sj, there is just 1 positive entry: αj = 1)
Define the index sets A = {1, . . . , k} and B = {k + 1, . . . , n}. Since there are at most two positive αi’s, there are only three cases:
Both indices in A: Then N (α) = μ.
Both indices in B: Then N (α) = 0, which is ideal. This is possible if μ lies between two values in B. Since B = {k + 1, . . . , n}, the largest value for μ to take is sk+1. So
if sk+1 ≥ μ, then we can achieve N (α) = 0.
One index in A, one in B: This is the most interesting case. Suppose i ∈ A, j ∈ B, and
αi + αj = 1, siαi + sjαj = μ.
Solving this system gives:
αi = μ − sj
si − sj
, αj = si − μ
si − sj
.
For these to be nonnegative, we require sj ≤ μ ≤ si. The objective becomes:
N (α) = siαi = si
μ − sj si − sj
.
This is a decreasing function both in si and in sj.

POPULARITY BIAS ALIGNMENT ESTIMATES 13
To minimize N (α), we want to choose:
• The largest possible si from A: s1
• The largest possible sj from B: sk+1.
Then the solution is:
α1 = μ − sk+1
s1 − sk+1
, αk+1 = s1 − μ
s1 − sk+1
,
feasible when s1 ≥ μ ≥ sk+1, with
N (α) = s1
μ − sk+1
s1 − sk+1
.
To maximize N (α), we want to choose:
• The smallest possible si from A: sk
• The smallest possible sj from B: sn.
Then the solution is:
αk = μ − sn
sk − sn
, αn = sk − μ
sk − sn
,
feasible when sk ≥ μ ≥ sn, with
N (α) = sk
μ − sn sk − sn
.
All together:
• when sn ≤ μ ≤ sk+1 we have vertices with N (α) = 0
• when sk+1 < μ ≤ s1 we are choosing between (not minimal) μ and s1
μ−sk+1
s1−sk+1 .
So the final answer to (LP) is
N (α) ≥
[ 0, when sn ≤ μ ≤ sk+1
s1
μ−sk+1
s1−sk+1 , when sk+1 < μ ≤ s1 and N (α) ≤
[ sk μ−sn
sk−sn , when sn < μ ≤ sk
μ, when sk ≤ μ ≤ s1
And so
cos2 θk = κk ≥
[ 0, if σ2n ≤ μ ≤ σ2
k+1 σ2
1 μ
μ−σ2
k+1 σ2
1 −σ2
k+1
, if σ2
k+1 < μ ≤ σ12
cos2 θk = κk ≤
[ σ2
k μ
μ−σ2
n
σ2
k −σ2n
, when σ2n ≤ μ ≤ σ2
k
1, when σ2
k < μ ≤ σ12
References
[CSN] Aaron Clauset, Cosma Rohilla Shalizi, M. E. J. Newman, Power-Law Distributions in Empirical Data, SIAM Review, Vol. 51, No. 4 (December 2009), pp. 661-703. arxiv:0706.1062 (document) [FWLG] Fang, Z., Wang, J., Liu, B., Gong, W. (2012). Double Pareto Lognormal Distributions in Complex Networks. In: Thai, M., Pardalos, P. (eds) Handbook of Optimization in Complex Networks. Springer Optimization and Its Applications(), vol 57. Springer, Boston, MA. https://doi.org/10.1007/978-1-46140754-6_3 (do-
cument) [RJ] Reed, W. J., & Jorgensen, M. (2004). The Double Pareto-Lognormal Distribution—A New Parametric Model for Size Distributions. Communications in Statistics - Theory and Methods, 33 (8), 1733–1753. https://doi.org/10.1081/STA-120037438 (document) [CPM] Leonardo R. Cunha, Arthur A. B. Pessa, Renio S. Mendes (2024). Shape patterns in popularity series of video games. https://arxiv.org/abs/2406.10241 (document) [HL] Hogg, T., Lerman, K. Social dynamics of Digg. EPJ Data Sci. 1, 5 (2012). ht-
tps://doi.org/10.1140/epjds5 (document) [LG] Kristina Lerman, Rumi Ghosh. Information Contagion: an Empirical Study of the Spread of News on Digg and Twitter Social Networks. https://arxiv.org/abs/1003.2664 (document)

POPULARITY BIAS ALIGNMENT ESTIMATES 14
[LGCZHFCW] Siyi Lin, Chongming Gao, Jiawei Chen, Sheng Zhou, Binbin Hu, Yan Feng, Chun Chen, Can Wang (2025). How Do Recommendation Models Amplify Popularity Bias? An Analysis from the Spectral Perspective. {Proceedings of the Eighteenth ACM International Conference on Web Search and Data Mining (2025). Association for Computing Machinery. New York, NY, USA. p. 659–668. doi:10.1145/3701551.3703579, http://arxiv.org/abs/2404.12008 (document), 2, 1 [WHWZW] Le Wu, Xiangnan He, Xiang Wang, Kun Zhang, -
and Meng Wang. 2022. A survey on accuracy-oriented neural recommendation: From collaborative filtering to information-rich recommendation. IEEE Transactions on Knowledge and Data Engineering 35, 5 (2022), 4425–4445. (document) [CL] Fan Chung, Linyuan Lu. Complex graphs and networks (CBMS regional conference series in mathematics ; no. 107) ISBN-13: 978-0-8218-3657 (document) [K] RAVINDER KUMAR. BOUNDS FOR EIGENVALUES OF A GRAPH Journal of Mathematical Inequalities, Volume 4, Number 3 (2010), 399–4-
04 1

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:43.776Z
- **Text Length:** 28013 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 14 of 14
