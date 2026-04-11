# PDF Document: Li et al. - 2024 - Generalization Error Curves for Analytic Spectral Algorithms under Power-law Decay.pdf

**File Path:** Li et al. - 2024 - Generalization Error Curves for Analytic Spectral Algorithms under Power-law Decay.pdf

**Processed Date:** 2026-02-10T18:15:02.098Z

**File Size:** 781.32 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2750

**Title:** Generalization Error Curves for Analytic Spectral Algorithms under Power-law Decay

**Collection:** Large Files

---

## Extracted Text Content

GENERALIZATION ERROR CURVES FOR ANALYTIC SPECTRAL
ALGORITHMS UNDER POWER-LAW DECAY
Yicheng Li,∗ Weiye Gan,† Zuoqiang Shi,‡ Qian Lin§
ABSTRACT
The generalization error curve of certain kernel regression method aims at determining the exact order of generalization error with various source condition, noise level and choice of the regularization parameter rather than the minimax rate. In this work, under mild assumptions, we rigorously provide a full characterization of the generalization error curves of the kernel gradient descent method (and a large class of analytic spectral algorithms) in kernel regression. Consequently, we could sharp-
en the near inconsistency of kernel interpolation and clarify the saturation effects of kernel regression algorithms with higher qualification, etc. Thanks to the neural tangent kernel theory, these results greatly improve our understanding of the generalization behavior of training the wide neural networks. A novel technical contribution, the analytic functional argument, might be of independent interest.
Keywords reproducing kernel Hilbert space, spectral algorithm, gradient descent, analytic functional calculus
1 Introduction
The neural tangent kernel (NTK) theory (Jacot et al., 2018), which shows that the gradient kernel regression approximates the over-parametrized neural network trained by gradient descent well (Jacot et al., 2018; Allen-Zhu et al., 2019; Lee et al., 2019), brings us a natural surrogate to understand the generalization behavior of the neural networks in certain circumstances. This surrogate has led to recent renaissance of the study of kernel methods. For example, one would ask whether overfitting c-
ould harm the generalization (Bartlett et al., 2020), how the smoothness of the underlying regression function would affect the generalization error (Li et al., 2023), or if one can determine the lower bound of the generalization error at a specific function? All these problems can be answered by the generalization error curve which aims at determining the exact generalization error of a certain kernel regression method with respect to the kernel, the regression function, the noise level and the c-
hoice of the regularization parameter. It is clear that such a generalization error curve would provide a comprehensive picture of the generalization ability of the corresponding kernel regression method (Bordelon et al., 2020; Cui et al., 2021; Li et al., 2023).
Although there have been extensive works on the generalization errors of kernel regression, most of them focused on the optimal rate of convergence under the minimax framework. For example, Caponnetto and De Vito (2007) showed with a proper choice of the regularization parameter, kernel ridge regression (KRR) can achieve the minimax optimal rate of convergence. Being a special case, KRR falls into a large class of kernel methods often referred to as spectral algorithms (Rosasco et al., 2005; Gerfo-
 et al., 2008). For general spectral algorithms, subsequent works (e.g., Blanchard and Mu ̈cke (2018); Lin et al. (2018)) proved similar optimality results. We refer the reader to Subsection 1.1 for more details. However, these works are not sufficient to answer the aforementioned problems motivated from the studies in neural networks, since they only considered the method-dependent upper bound and the method-independent
∗liyc22@mails.tsinghua.edu.cn. Center for Statistical Science, Department of Industrial Engineering, Tsinghua University, Beijing, China. †gwy22@mails.tsinghua.edu.cn. Department of Mathematical Sciences, Tsinghua University, Beijing, China. ‡zqshi@tsinghua.edu.cn. Yau Mathematical Sciences Center, Tsinghua University, Beijing, 100084, China & Yanqi Lake Beijing Institute of Mathematical Sciences and Applications, Beijing, 101408, China. §Corresponding author. qianlin@tsinghua.edu.cn. Center for S-
tatistical Science, Department of Industrial Engineering, Tsinghua University, Beijing, China.
arXiv:2401.01599v3 [cs.LG] 23 Nov 2024

Li et al. Generalization of Spectral Algorithms
minimax lower bound of the generalization error. In addition, most of them focused mainly on the rate of convergence and ignored the constant factors. Therefore, these traditional results are not enough to provide a comprehensive picture of the generalization error of kernel methods.
Going beyond the traditional results, several recent works attempt to describe the generalization error curve of kernel ridge regression (KRR). With some heuristic arguments, Bordelon et al. (2020); Cui et al. (2021) derived the generalization error curve of KRR under certain restrictive assumptions. Under mild assumptions, Li et al. (2023) first rigorously characterized the generalization error curve of KRR in terms of asymptotic convergence rate. They show an exact bias-variance trade-off U-shap-
ed curve for the generalization error of KRR with respect to the choice of regularization parameter. Since the neural networks are often trained by the gradient descent, it is of great interest to further study the generalization error curves of the gradient descent kernel regression. To the best of our knowledge, few attention is made on this aspect.
In this paper, we study the generalization error curves of a large class of analytic spectral algorithms, including the kernel gradient method. To be precise, let ρ be a probability distribution on X × R and f ∗ be the unknown regression function (Andreas Christmann, 2008), namely the conditional expectation f ∗(x) = Eρ(y|x). Given n i.i.d. samples {(xi, yi)}n
i=1, let fˆλ be the estimator given by a spectral algorithm with regularization parameter λ = λ(n) > 0. Then, our result shows that for λ in a reasonable range,
E fˆλ − f ∗ 2
L2 X = (1 + oP(1)) R2
φ(λ; f ∗) + σ2
n N2,φ(λ) ,
where the conditional expectation is taken with respect to the training sample X = (x1, . . . , xn), σ2 is the variance of
the noise, R2φ(λ; f ∗) and N2,φ(λ) are two deterministic quantities (see (28) and (29)) corresponding to the bias and the variance respectively, and φ is the filter function defining the spectral algorithm (see (19)). Moreover, if λ does not lie in the reasonable range, we also show that the generalization error is lower bounded by nearly a constant. The assumptions made in this paper are also mild and are satisfied for many RKHSs and spectral algorithms. We refer to Section 3 for a complete state-
ment for our main result.
With the exact 1 + oP(1) form, our result characterizes exactly and completely the generalization error for a large class of analytic spectral algorithms. In particular, it shows a solid U-shaped bias-variance trade-off curve that the bias decreases while the variance increases as the regularization strength λ decreases, where the optimal point corresponds to the minimax optimal rate of convergence. The result also shows that when the regularization is too weak, the overfitting method can not gene-
ralize, emphasizing the necessity of regularization. Moreover, our result also expose a high-order saturation effect of some specific spectral algorithms. Our result would greatly improve the understanding of the generalization behavior of spectral algorithms and the wide neural networks.
Last but not the least, the novel application of the “analytic functional argument” in deriving sharp estimations for spectral algorithms might be of independent interest and worth of further investigations.
1.1 Related works
Optimality of kernel methods There are a large number of works studying the optimal rates of kernel ridge regression and also spectral algorithms. The classical work (Caponnetto and De Vito, 2007) proved the minimax optimality of KRR when the regression lies in the RKHS; subsequent works (Steinwart et al., 2009; Fischer and Steinwart, 2020; Zhang et al., 2023) further extend the result to the misspecified cases when the regression function does not lie in the RKHS. Zhang and Yu (2005) and Yao et a-
l. (2007) considered the kernel gradient method and proved consistency and fast rates of convergence respectively. The general spectral algorithms are first introduced Bauer et al. (2007) and then studied extensive in the follow-up works (Gerfo et al., 2008; Rosasco et al., 2005), but the eigenvalue decay (see Assumption 1) of the kernel was not considered so the rates are not optimal. When certain restrictive conditions, Caponnetto (2006) proved the minimax optimality of the spectral algorithms. -
More recently, a sequence of works further extend the result to more general cases (e.g., Blanchard and Mu ̈cke (2018); Lin et al. (2018)). In addition, the very recent work (Zhang et al., 2023) showed the optimality for the misspecified cases even when the regression function is unbounded. We also refer to Table 1 in Zhang et al. (2023) for a summary of the results. However, as discussed above, these results only focused on the upper bounds and are not enough to provide the exact generalization e-
rror curve.
Recent advances in kernel ridge regression Focusing particularly on KRR, a recent line of work provide further results on its generalization. Some works (Rakhlin and Zhai, 2018; Buchholz, 2022; Beaglehole et al., 2022; Li et al., 2023) studied kernel ridgeless regression, which is the limiting case of KRR as the regularization goes to zero, and proved that it can not generalize. Using a restrictive Gaussian design assumption and also some non-rigorous arguments, Bordelon et al. (2020); Cui et al. -
(2021) derived the generalization error curve of KRR and Mallinar et al.
2

Li et al. Generalization of Spectral Algorithms
(2022) studied further the interpolation regime. For rigorous results, Li et al. (2023) proved the generalization error curve with asymptotic rates in the form of ΘP(n−r), but the hidden constant factors are not tracked.
Kernel regression in the high-dimensional limit There is also a line of works studying the generalization of kernel regression in the high-dimensional limit when the dimension of the input space d diverges with n. For example, in the high-dimensional setting, Liang and Rakhlin (2020) showed that kernel interpolation can generalize; Ghorbani et al. (2020); Ghosh et al. (2021); Liu et al. (2021); Lu et al. (2023) studied the generalization of kernel ridge regression and kernel gradient method. Howev-
er, we would like to emphasize that their results could be substantially different from ours since the setting is different. Moreover, the high dimensionality in their setting actually makes the problem easier since the kernel can now be linearizing and the well-established random matrix theory can be applied, which is not the case in our setting.
3

Li et al. Generalization of Spectral Algorithms
2 Preliminaries
2.1 Reproducing kernel Hilbert space
Let a compact metric space X be the space of input and Y ⊆ R be the space of output. Let ρ be the unknown probability measure supported on X × Y and μ be the marginal probability measure of ρ on X . Denote by L2 = L2(X , dμ) the space of (complex-valued) square integrable functions on X . Assume that E(x,y)∼ρ(y2) < ∞, let the conditional expectation
f ∗(x) = Eρ(y | x) =
Z
Y
ydρ(y|x) ∈ L2 (1)
be the regression function. We fix a continuous positive definite5 kernel k : X × X → C over X and let H be the (complex) separable reproducing kernel Hilbert space (RKHS) associated with k. Note that we adopt the convention that inner product is linear in the second component and conjugate linear in the first component, that is, ⟨f, g⟩L2 = R
X f (x)g(x)dx and ⟨k(x, ·), f ⟩H = f (x) for f ∈ H. Since X is compact and k is continuous, we have
supx∈X k(x, x) ≤ κ2 < ∞. Consequently, we have the natural inclusion Sk : H → L2 which is Hilbert-Schmidt (An
dreas Christmann, 2008; Steinwart and Scovel, 2012). Denote by S∗
k : L2 → H the adjoint operator of Sk. Then,
T = SkS∗
k : L2 → L2 defines a integral operator
(T f )(x) =
Z
X
k(x, x′)f (x′)dμ(x′). (2)
Moreover, it is well known (Caponnetto and De Vito, 2007; Steinwart and Scovel, 2012) that T is a self-adjoint, positive and trace class operator that the trace norm ∥T ∥1 ≤ κ2. Focusing only on the infinite dimensional case that T is not of finite rank, we have the spectral decomposition
T=
∞
X
m=1
μmPVm , (3)
where (μm)m≥1 is the decreasing sequence of the distinct positive eigenvalues of T and PVm is the projection onto the eigenspace Vm associated with μm. Denote by dm = dim Vm the multiplicity of μm. Let us further choose an orthonormal basis {em,l}dm
l=1 for each Vm, where each em,l is the continuous representative among the μ-equivalent
class. Then, {em,l} forms an orthonormal basis of Ran Sk = (Ker S∗
k )⊥ ⊆ L2 and {μ1/2
m em,l} forms an orthonormal basis of Ran S∗
k = (Ker Sk)⊥ = H, where we notice that Sk is injective since the support of μ is X . Finally, the Mercer’s theorem (Andreas Christmann, 2008; Steinwart and Scovel, 2012) yields that
k(x, x′) =
∞
X
m=1
μm
dm
X
l=1
em,l(x)em,l(x′), (4)
where the summation converges absolutely and uniformly. To be in line with the previous literature, we denote by (λj)j≥1 the eigenvalues of T counting multiplicities and, with a little abuse of notation, denote by ej the corresponding eigenfunction. Then, we introduce the following assumption on the eigenvalues of T , which is commonly considered in the previous literature (Caponnetto and De Vito, 2007; Fischer and Steinwart, 2020; Li et al., 2023).
Assumption 1 (Eigenvalue decay). There are some β > 1 and constants ceig, Ceig > 0 such that
ceigj−β ≤ λj ≤ Ceigj−β, j ≥ 1, (5)
or equivalently,
#{i : λi ≥ λ} =
X
m:μm ≥λ
dm = Θ(λ−1/β), as λ → 0. (6)
where (λj)j≥1 are the eigenvalues (counting multiplicities) of the integral operator T and {μm}m≥1 are the distinct ones defined in (3).
5We consider complex-valued spaces here since the analytic functional argument later will be based on the complex analysis. Now, k is conjugate symmetric k(x, y) = k(y, x) and positive definite in the sense that Pn
i,j=1 cicj k(xi, xj ) ≥ 0 for any n ≥ 1, x1, . . . , xn ∈ X and c1, . . . , cn ∈ C.
4

Li et al. Generalization of Spectral Algorithms
Remark 2.1. The equivalence of (5) and (6) is elementary and a proof can be found in Proposition A.1. (6) allows us
to deal with some less explicit cases. For example, if we have Pm
k=1 dk ≍ mγ for some γ ≥ 1, then λj ≍ j−β is just
equivalent to μm ≍ m−γβ.
The eigenvalue decay rate in Assumption 1 is a common assumption in the previous literature (Caponnetto and De Vito, 2007; Fischer and Steinwart, 2020; Li et al., 2023). As we aim to derive the exact generalization error, the lower bound part in (5) is also necessary. Assumption 1 is satisfied by many commonly used kernels, such as the Laplacian kernel, Mat ́ern kernels and neural tangent kernels etc. This assumption on the eigenvalues characterizes the smoothness of the functions in the RKHS and -
larger β implies better smoothness. We also remark that since T is trace-class, (λj)j≥1 is summable so the requirement β > 1 is necessary. Assumption 1 is also closely connected to the effective dimension or capacity condition of the RKHS in the previous literature (Caponnetto and De Vito, 2007). Later, with a spectral algorithm φ, we will introduce generalized φ-effective dimension that characterizes the variance of the method, see (29).
Interpolation spaces We need to further introduce the interpolation spaces (Steinwart and Scovel, 2012) to state our results. For p ≥ 0, we define the fractional power T p : L2 → L2 by
Tp =
∞
X
m=1
μp
mPVm =
∞
X
m=1
μp
m
dm
X
l=1
⟨em,l, ·⟩L2 em,l. (7)
Then, we can introduce the interpolation space [H]s by
[H]s = Ran T s/2 =
(
f=
∞
X
m=1
μs/2
m
dm
X
l=1
am,lem,l
∞
X
m=1
dm
X
l=1
|am,l|2 < ∞
)
⊆ L2. (8)
For f, g ∈ [H]s with coefficients (am,l) and (bm,l) respectively, we define the inner product in [H]s by
⟨f, g⟩[H]s =
∞
X
m=1
dm
X
l=1
am,lbm,l = T − s
2 f, T −s
2 g L2 . (9)
Then, it is easy to see that [H]s is a separable Hilbert space with an orthogonal basis {μs/2
m em,l : m ≥ 1, 1 ≤ l ≤ dm}. In particular, we have [H]0 ⊆ L2 and also [H]1 = H. We also have natural inclusions [H]s ⊆ [H]t for s ≥ t and the inclusion is compact if s > t. Moreover, the restriction of T (and also T p) on [H]s is also a bounded operator with the same spectra, so we will still denote it by T (and also T p) for simplicity.
Regular RKHS To derive the tightest possible learning rate, we need to characterize the regularity of the functions in the RKHS to the greatest extent. Since Vm is a finite dimensional space of L2 and also H, it is a reproducing kernel Hilbert space with respect to ⟨·, ·⟩L2 and its reproducing kernel km is determined uniquely by
⟨km(x, ·), f ⟩L2 =
Z
X
km(x, x′)f (x′)dμ(x′) = f (x). (10)
Choosing an orthonormal basis {em,l}dm
l=1, we have explicitly
km(x, x′) =
dm
X
l=1
em,l(x)em,l(x′), (11)
which is invariant of the choice of the basis. It is also easy to see that
k(x, x′) =
∞
X
m=1
μmkm(x, x′).
In this paper, we introduce the following condition of regular RKHS:
Assumption 2 (Regular RKHS). There is some constant M > 0 such that
sup
x∈X
N
X
m=1
km(x, x) = sup
x∈X
N
X
m=1
dm
X
l=1
|em,l(x)|2 ≤ M
N
X
m=1
dm, ∀N ≥ 1, (12)
In this case, we call this RKHS (together with the underlying distribution μ) is regular.
5

Li et al. Generalization of Spectral Algorithms
It is obvious that if the eigenfunctions are uniformly bounded, that is, supx∈X |em,l(x)|2 ≤ M , then the RKHS is regular. Moreover, there are some more cases that the RKHS is regular, so we believe that it is a rather general assumption.
Example 2.1 (Shift-invariant periodic kernels). Let X = Td = [−π, π)d be the d-dimensional torus and μ be the uniform measure on Td. Consider a shift-invariant kernel satisfying k(x, y) = h(x − y), where h is a function defined on Td. Then, it is easy to show that the Fourier basis {φm = ei⟨m,x⟩, m ∈ Zd} gives an orthonormal set of eigenfunctions of T . Consequently, it is regular since the basis is uniformly bounded. Moreover, if the corresponding eigenvalues satisfy λm ≍ (1 + ∥m∥2
2)−α, then the corresponding RKHS is H ∼= Hα(Td), the Sobolev space on Td,
and also [H]s ∼= Hsα(Td).
Example 2.2 (Dot-product kernel on the sphere). Let X = Sd be the d-dimensional sphere and μ be the uniform measure on Sd. Consider a dot-product kernel satisfying k(x, y) = h(⟨x, y⟩), where h is a function on [−1, 1]. Then, the Funk-Hecke formula (Dai and Xu, 2013) shows that the spherical harmonics {Ym,l m ≥ 1, 1 ≤ l ≤ dm} consists of an orthonormal set of eigenfunctions of T , where {Ym,l 1 ≤ l ≤ dm} are order-m homogeneous harmonic polynomials and dm = m+d
m − m−2+d
m−2 ≍ md−1. Using the theory of spherical harmonics, we can show that this RKHS is regular, see Subsection B.1.1.
Example 2.3 (Dot-product kernel on the ball). Now, let us consider the d-dimensional unit ball X = Bd = {x ∈
Rd+1 : ∥x∥ ≤ 1} with μ be proportional to the classical weight p(x) = (1 − ∥x∥2)−1/2. Consider still a dot-product kernel k. Then, an analog of the Funk-Hecke formula on the ball Dai and Xu (2013, Section 11) shows that the space Vmd of orthogonal polynomials of degree exactly m is an eigenspace associated with the same eigenvalue of
T and dim Vmd = m+d−1
m ≍ md−1. Similar to the spherical case, we can show that this RKHS is regular, see
Subsection B.1.2.
In previous literature (Steinwart et al., 2009; Fischer and Steinwart, 2020; Zhang et al., 2023), the following L∞embedding property is introduced to characterize the regularity of the RKHS. We say H has an embedding property of order α ∈ (0, 1] if [H]α can be continuously embedded into L∞(X , dμ), that is, the operator norm
Mα := ∥[H]α ,→ L∞(X , μ)∥ < ∞. (13)
Then, we define the embedding index by α0 = inf {α : Mα < ∞}. It is obvious that α ≤ 1 because
sup
x∈X
|f (x)| = sup
x∈X
⟨k(x, ·), f ⟩H ≤ ∥k(x, ·)∥H∥f ∥H ≤ κ∥f ∥H,
and it is also shown in Fischer and Steinwart (2020, Lemma 10) that α0 ≥ β. To obtain sharp concentrations, previous works (Zhang et al., 2023; Li et al., 2023) assume that α0 = β. Here we show that this embedding index condition is satisfied by the regular RKHS.
Proposition 2.2. Under Assumption 1 and Assumption 2, the embedding index is α0 = 1/β.
Moreover, we remark that the embedding index condition only makes sense for the eigenvalues with power-law decay, while the regular RKHS condition can also be considered for more general decays. In fact, the regular RKHS condition essentially considers the eigenfunctions rather than the eigenvalues.
2.2 Spectral algorithm
Let Z = {(xi, yi)}n
i=1 ⊆ X × Y be a set of training sample drawn i.i.d. from ρ. We also denote by X = (x1, . . . , xn) the collection of sample inputs. To introduce the spectral algorithm, we first introduce some auxiliary notations. Denote by kx = k(x, ·) ∈ H. Let Kx : R → H be given by Kxy = ykx, whose adjoint Kx∗ : H → R is given by
Kx∗f = ⟨kx, f ⟩H = f (x). Moreover, we denote by Tx = KxKx∗ : H → H and
TX = 1
n
n
X
i=1
Txi . (14)
Here we notice that since k(x, x) ≤ κ2, we have ∥TX ∥ ≤ κ2. We also define the sample basis function
gˆZ = 1
n
n
X
i=1
Kxi yi = 1
n
n
X
i=1
yik(xi, ·) ∈ H. (15)
Then, a spectral algorithm is obtained by applying to gˆZ a “regularized inverse” of TX via a filter function (Bauer et al., 2007). We introduce first the following definition of filter functions.
6

Li et al. Generalization of Spectral Algorithms
Definition 2.3 (Filter functions). Let φλ : [0, κ2] → R≥0 | λ ∈ (0, 1) be a family of functions indexed with regularization parameter λ and define the remainder function
ψλ(z) := 1 − zφλ(z). (16)
We say that {φλ | λ ∈ (0, 1)} (or simply φλ(z)) is a filter function if:
(i) For any fixed λ, ψλ(z) ≥ 0 is decreasing with respect to z ∈ [0, κ2]. For any fixed z, ψλ(z) decreases as λ decreases.
(ii) There is some constant E such that
sup
z ∈[0,κ2 ]
(z + λ)φλ(z) ≤ E, ∀λ ∈ (0, 1). (17)
(iii) The qualification of this filter function is τmax ∈ [1, ∞] such that ∀0 ≤ τ ≤ τmax (and also τ < ∞),
sup
z ∈[0,κ2 ]
zτ ψλ(z) ≤ Fτ λτ , ∀λ ∈ (0, 1), (18)
where Fτ is a constant depending only on τ .
(iv) In addition, if τmax is finite, then there is some constant F that
ψλ(z) ≥ F λτmax , ∀z ∈ [0, κ2], λ ∈ (0, 1).
Now, given a filter function φλ(z), a spectral algorithm is defined by
fˆλ = φλ(TX )gˆZ ∈ H. (19)
We postpone concrete examples of spectral algorithms to the end of this subsection.
Remark 2.4. We remark that the property (i) and (iv) are not essential for the definition of filter functions in the literature (Bauer et al., 2007; Gerfo et al., 2008; Rosasco et al., 2005), but we introduce them to avoid some unnecessary technicalities in the proof. In particular, property (i) says the general scheme of a spectral filter and property (iv) determines exactly the qualification of this filter function. We also remark that the regularization parameter λ will depend on the sample siz-
e n and λ(n) goes to zero as n tends to infinity, so the upper bound of λ ∈ (0, 1) is not essential and can be smaller if necessary.
To evaluate the performance of the spectral algorithm fˆλ, we consider the generalization error (or excess risk) (Andreas Christmann, 2008) defined by
fˆλ − f ∗ 2
L2 = Ex∼μ fˆ(x) − f ∗(x)
2
. (20)
Moreover, it is more convenient to consider its conditional expectation with respect to X, namely
E fˆλ − f ∗ 2
L2 | X , which is still a random variable depending on X. If the noise ε = y − f ∗(x) is indepen
dent of x, this conditional expectation is just taking the expectation over the noise. For our main result, we will derive a precise estimation of this quantity in a high-probability form.
However, to derive the precise generalization error curve, the above definition of filter functions is not sufficient for our purpose. The key novelty of our techniques is that we develop a special argument based on analytical functional calculus. To this end, we introduce the following assumption on the analytic filter function. As far as we know, we are the first to consider such properties of the filter function.
Assumption 3 (Analytic filter function). Let
Dλ = z ∈ C : Re z ∈ [−λ/2, κ2], |Im z| ≤ Re z + λ/2
∪ z ∈ C : z − κ2 ≤ κ2 + λ/2, Re z ≥ κ2 .
The filter function φλ(z) can be extended to be an analytic function on some domain containing Dλ and the following conditions holds for all λ ∈ (0, 1):
(C1) |(z + λ)φλ(z)| ≤ E ̃, ∀z ∈ Dλ;
7

Li et al. Generalization of Spectral Algorithms
(C2) |(z + λ)ψλ(z)| ≤ F ̃λ, ∀z ∈ Dλ;
where E ̃, F ̃ are positive constants.
Remark 2.5. The domain Dλ is essential and is related to the analytic functional argument in the proof, see also Figure 2 on page 20 for an illustration. The two conditions (C1) and (C2) can be seen as the complex extension of (17) and (18) respectively, so one can expect that they also hold for the filter functions. Indeed, we will show in the following many commonly used filter functions satisfy Assumption 3. The proof is postponed to Subsection B.2.
0.0 0.2 0.4 0.6 0.8 1.0
0
1
2
3
4
5
1
Filter functions (z); =0.4
KRR IT,2 GF GD 1/z
0.0 0.2 0.4 0.6 0.8 1.0
0.0
0.2
0.4
0.6
0.8
1.0 Remainder functions (z); =0.4
KRR IT,2 GF GD
Figure 1: An illustration of the filter functions φλ and ψλ.
Example 2.4 (Kernel ridge regression). The filter function of kernel ridge regression (KRR) is well known to be
φKR
λ (z) = 1
z + λ , ψKR
λ (z) = λ
z + λ . (21)
Both φλ and ψλ are analytic on {z ∈ C : Re z > −λ} ⊃ Dλ. This filter function is of qualification only τmax = 1.
Example 2.5 (Iterated ridge regression). To overcome the limited qualification of KRR, Rosasco et al. (2005) introduce following iterated ridge (or iterated Tikhonov) method. Let p ≥ 1 be fixed. We define
φIT,p
λ (z) = 1
z 1 − λp
(z + λ)p , ψIT,p
λ (z) = λp
(z + λ)p . (22)
It is easy to show that z = 0 is a removable singular point of φIT,p
λ (z) and both φIT,p
λ (z) and ψIT,p
λ (z) are analytic on
{z ∈ C : Re z > −λ} ⊃ Dλ. The merit of this filter function is that it has qualification τmax = p.
To understand the name “iterated”, let us consider the particular case p ∈ N∗. Then,
φIT,p
λ (z) =
p
X
r=1
λr−1(z + λ)−r,
and the method is obtained by iterating the ridge method p times:
(TX + λ)hi = gˆZ + λhi−1, i = 1, . . . , p.
Example 2.6 (Gradient flow). The gradient flow method (Yao et al., 2007) is another popular regularization method. Let us consider the empirical loss
L(f ) = 1
2n
n
X
i=1
(f (xi) − yi)2 = 1
2n
n
X
i=1
(K ∗
xi f − yi)2, f ∈ H.
Then, with the initial value f0 = 0, f ̇t = −∇f L(ft) defines a gradient flow in H. The gradient flow equation, which can be solved in closed-form, gives the filter function
φGF
λ (z) = 1 − e−tz
z , ψGF
λ (z) = e−tz, t = λ−1. (23)
8

Li et al. Generalization of Spectral Algorithms
It is also easy to show that z = 0 is a removable singular point of φGF
λ (z), so both φGF
λ (z) and ψGF
λ (z) are analytic on the whole complex plane. Moreover, elementary inequalities can show that the gradient flow method has qualification τmax = ∞ with diverging Fτ = (τ /e)τ .
Example 2.7 (Gradient descent). The gradient descent method is the discrete version of gradient flow. Let η > 0 be a fixed step size. Then, iterating gradient descent with respect to the empirical loss t steps yields the filter function
φGD
λ (z) = η
t−1
X
k=0
(1 − ηz)k = 1 − (1 − ηz)t
z , λ = (ηt)−1,
ψGD
λ (z) = (1 − ηz)t.
(24)
Moreover, when η is small enough, say η < 1/(2κ2), we have Re(1 − ηz) > 0 for z ∈ Dλ, so we can take the
single-valued branch of (1 − ηz)t even when t is not an integer. Therefore, we can extend the definition of the filter function so that λ can be arbitrary and t = (ηλ)−1. It is also easy to show that z = 0 is a removable singular point of φGD
λ (z). Consequently, φGD
λ (z) and ψGD
λ (z) are analytic on Dλ. Similar to the gradient flow method, the gradient
descent method is also of qualification τmax = ∞ with Fτ = (τ /e)τ .
2.3 Notations
We denote by #A the cardinality of a set A. We use the big-O notations O(·), Ω(·), Θ(·), o(·). and also their probability versions OP(·), ΩP(·), ΘP(·) and oP(·). Let (ξn)n≥1 be a sequence of non-negative random variables and (an)n≥1 a sequence of positive numbers. We say ξn = OP(an) if for any δ > 0, there exists Nδ and Mδ such that when n ≥ Nδ, P {|ξn| ≤ Mδan} ≥ 1 − δ. The notation ΩP(an) is defined similarly and ξn = ΘP(an) iff ξn = OP(an) and ξn = ΩP(an) both hold. Moreover, we say ξn = oP(an) -
if ξn/an converges in probability to 0. Also, we sometimes write an ≍ bn if an = Θ(bn).
9

Li et al. Generalization of Spectral Algorithms
3 Main results
3.1 More assumptions
Before stating our main theorem, we introduce two assumptions. The first assumption concerns about the noise. This assumption is quite standard and is satisfied if the noise is independent of the input x and has a bounded variance. Assumption 4 (Noise). We assume
E(x,y)∼ρ
h
(y − f ∗(x))2 x
i
= σ2 > 0, μ-a.e. x ∈ X , (25)
The second assumption is about the regression function f ∗. Recall the definition of interpolation spaces and that {em,l : m ≥ 1, 1 ≤ l ≤ dm} consists of an orthogonal set in L2. Then, we first assume that the regression function admits the following expansion in the sense of L2-norm:
f∗ =
∞
X
m=1
dm
X
l=1
fm,lem,l. (26)
Here we note that f ̄2m := Pdm
l=1 |fm,l|2 = ∥PVm f ∗∥2
L2 is invariant of the choice of {em,l}dm
l=1 which is an orthogonal
basis of Vm. Then, we assume that the regression function satisfies the following source condition. Assumption 5 (Source). There exists some s > 0 such that f ∗ ∈ [H]t for any t < s, f ∗ ̸= 0, and if s < 2τmax,
X
m:μm <λ
dm
X
l=1
|fm,l|2 =
X
m:μm <λ
f ̄2
m = Ω(λs). (27)
This assumption assumes that the regression function can be approximately described by a power-law decay with smoothness index s, but it does not require that the coefficient of f ∗ decays exactly in a power-law manner, which allows a wider range of regression functions to be considered. We note that since we have to establish the exact generalization error curve, the lower bound is also necessary, which is presented in a tail sum manner. The following shows some examples of regression functions s-
atisfying Assumption 5, whose proofs are deferred to Subsection B.3. Example 3.1 (Exact power-law f ∗). Let Assumption 1 hold and Pm
k=1 dk ≍ mγ for some γ ≥ 1. Suppose f ∗ satisfy
that f ̄m ≍ m−(γp+1)/2 for some p > 1. Then f ∗ satisfies Assumption 5 for s = p
β . In particular, with a little abuse of notation, if we rearrange (fm,l) as
(fj )j≥1 = (f1,1, . . . , f1,d1 , f2,1, . . . , fm,1, . . . , fm,dm , . . . ).
Then, this example includes the case |fj| ≍ λ
s 2
j j−1
2 ≍ j− sβ+1
2 considered in Li et al. (2023); Cui et al. (2021).
We can also consider the following case that there are some gaps in the coefficients of f ∗.
Example 3.2. In this example, we assume Assumption 1 holds and consider the (fj)j≥1 introduced in the previous example. Suppose that for some q ≥ 1, p > 1,
fj(l) ≍ l−(p+1)/2, l = 1, 2, . . . , fj = 0, otherwise,
where j(l) ≍ lq. Then, f ∗ satisfies Assumption 5 for s = p/(qβ).
3.2 Main theorem
Let us first introduce the two deterministic quantities that characterize the bias and the variance respectively. We define the main bias term by
R2
φ(λ; f ∗) := ∥ψλ(T )f ∗∥2
L2 =
∞
X
m=1
ψλ(μm)2
dm
X
l=1
|fm,l|2 =
∞
X
m=1
ψλ(μm)2f ̄2
m. (28)
For the variance term, we extend the definition of effective dimension (Caponnetto and De Vito, 2007) to introduce the φ-effective dimension of order p ≥ 1 by
Np,φ(λ) :=
∞
X
j=1
[λj φλ(λj )]p =
∞
X
m=1
dm [μmφλ(μm)]p . (29)
In particular, φKR-effective dimension of order p = 1 is just the ordinary effective dimension considered in the previous work (see (36) in the proof).
10

Li et al. Generalization of Spectral Algorithms
Theorem 3.1. Under Assumptions 1,2,3,4 and 5, for any λ = λ(n) → 0, we have
• If λ = Ω(n−θ) for some θ < β, then
E fˆλ − f ∗ 2
L2 X = (1 + oP(1)) R2
φ(λ; f ∗) + σ2
n N2,φ(λ) , (30)
where R2φ(λ; f ∗) and N2,φ(λ) are two deterministic quantities defined in (28) and (29) respectively.
• If λ = O(n−β), then
E fˆλ − f ∗ 2
L2 X = ΩP (ln n)−4σ2 , (31)
where we notice that the hidden constant in ΩP(·) depends on ε.
3.3 Discussion
In this subsection, we discuss our main result in the following aspect:
Minimax optimal rate Theorem 3.1 naturally recovers the minimax optimal rates of spectral algorithms that have been derived in previous works (see Lin et al. (2018); Zhang et al. (2023) and also the references therein). Let us suppose further that f ∗ ∈ [H]s as in the standard literature and s ≤ 2τ . Then, for the bias term, Lemma 4.4 shows that
R2
φ(λ; f ∗) = ∥ψλ(T )f ∗∥2
L2 = O(λs). For the variance term, Proposition A.2 shows that
σ2
n N2,φ(λ) ≍ σ2
n λ−1/β .
Consequently, choosing λ ≍ n−θ with θ = 1
sβ+1 (as in the previous literature) yields the optimal rate
E fˆλ − f ∗ 2
L2 X = OP n− sβ
sβ+1 .
Exact generalization error curve Our result provides a complete picture of the generalization error of spectral algorithms, showing the effect of the choice of the regularization parameter, the source condition of the regression function, the noise level and also the choice of the filter function. In terms of regularization, as the regularization strength λ decreases, the bias decreases while the variance increases, showing that the bias-variance trade-off also exists for spectral algorithms and t-
he learning curve is U-shaped as our traditional belief. It also suggests that a proper choice of λ is necessary to achieve the optimal rate.
The main strength of our result is that it provides the exact 1 + oP(1) form of the generalization error for a specific spectral algorithm when λ lies in the reasonable range. In comparison, the previous works (for example, Caponnetto and De Vito (2007); Lin et al. (2018); Zhang et al. (2023)) on minimax optimal rates can only provide upper bounds. While their results can also partially reflect the bias-variance trade-off, it is only in the upper bound manner. More precisely, they demonstrate that-
:
Error = Bias(λ) + Var(λ), and Bias(λ) ≲ B(λ) Var(λ) ≲ V (λ),
and then choose the optimal λ by balancing B(λ) and V (λ). They further check that, for such a choice of λ, the upper bound B(λ) + V (λ) can match the minimax lower bound. However, as B(λ) and V (λ) are only upper bounds, there is no guarantee that they reflect the exact bias-variance trade-off. Moreover, the standard approach in the recent literature on spectral algorithms is to apply the so-called approximation-estimation decomposition (see, e.g., the beginning of the Proof of Theorem 4.2 in Lin-
 et al. (2018)) to analyze the generalization error, which directly loses the exact bias-variance trade-off.
In contrast, our results establish the precise approximation of Bias(λ) and Var(λ) for any λ ∝ n−θ, θ ∈ (0, β) in the 1 + oP (1) form, providing the exact bias-variance trade-off even without losing constant factors. While the recent work (Li et al., 2023) proved rigorously the learning curves of KRR, but only asymptotic rates (in the form of ΘP(n−r)) are provided, so our result is also a refinement of their result even in the KRR case. For general spectral algorithms, as far as we know, we are th-
e first to provide such 1 + oP(1) form of exact generalization error curves.
The implication of the 1 + oP(1) form of exact generalization error is that it allows us to consider the constant factor in the generalization error. It could reflect precisely how the magnitude of the regression function and the noise affect the generalization error. Moreover, from the oracle viewpoint, minimizing the sum of the two terms in (30) would result in the best choice of λ = λ(n) and the best generalization error, going beyond merely the asymptotic rate.
11

Li et al. Generalization of Spectral Algorithms
Interpolating regime We refer to the case of weak regularization, namely λ = λ(n) = O(n−β), as the interpolating regime. Theorem 3.1 shows that in this regime, the generalization error is of order ΩP((ln n)−4), which is nearly a constant, so estimator does not generalize at all.
The performance of kernel methods in the interpolating regime is also considered in the previous literature. Under restricted settings, several works (Rakhlin and Zhai, 2018; Buchholz, 2022; Beaglehole et al., 2022) shown the inconsistency of the kernel minimum-norm interpolator, which is the λ → 0+ limit of spectral algorithms. Being the most relevant with this paper, Li et al. (2023) showed that for general RKHSs associated with a Ho ̈lder continuous kernel satisfying the embedding index conditi-
on, the generalization error of KRR in the interpolating regime is ΩP(n−ε) for any ε > 0. In comparison, we remove the condition of Ho ̈lder continuity and also provide an improved lower bound ΩP((ln n)−4) for spectral algorithms in the interpolating regime by refine the analysis using the condition of regular RKHS. We believe that this improved lower bound further confirms kernel methods do not generalize in the interpolating regime, highlighting the necessity of the regularization.
Saturation effect of higher order The saturation effect refers to the phenomenon that, for a certain spectral algorithm with limited qualification, it cannot achieve the minimax optimal rate of convergence when the smoothness of the regression function exceeds its qualification. Since the traditional literature only provides the upper bound of the generalization error, they cannot prove the saturation effect. The recent work Li et al. (2023) rigorously proved the saturation effect for KRR, whose q-
ualification is τmax = 1, but there is still result for other spectral algorithms with higher (but limited) qualification, such as the iterated ridge regularization (see Example 2.5).
Thanks to the exact generalization error curve, we can prove the saturation effect for spectral algorithms with higher qualification. Let us consider a spectral algorithm such that it has limited qualification τmax < ∞, which is the case
of the iterated ridge regularization. Then, for f ∗ ∈ [H]s with s ≥ 2τmax and f ∗ ̸= 0 it is easy to see that
R2
φ(λ; f ∗) =
∞
X
m=1
ψλ(μm)2f ̄2
m≥
∞
X
m=1
F λ2τ f ̄2
m = F ∥f ∗∥2
L2 λ2τ .
Consequently, with the upper bound in Lemma 4.4, we conclude that R2φ(λ; f ∗) ≍ λ2τ . Then, when λ is not too small, the main theorem gives
E fˆλ − f ∗ 2
L2 X = (1 + oP(1)) R2
φ(λ; f ∗) + σ2
n N2,φ(λ)
= ΩP λ2τ + σ2
n λ−1/β = ΩP n− 2τβ
2τβ+1 .
To cover the case when λ can possibly be too small, we can consider λ ̄ = max(λ, n−θ) for some θ < β and apply the monotonicity of the variance term (Lemma 4.15) as in Li et al. (2023). We formulate it as a corollary.
Corollary 3.2 (Saturation effect). Suppose Assumptions 1,2,3,4 hold. Let φλ be a filter function with qualification
τ = τmax < ∞. Then, for any non-zero f ∗ ∈ [H]s for s ≥ 2τ , for any choice of λ = λ(n) → 0, we have
E fˆλ − f ∗ 2
L2 X = ΩP n− 2τβ
2τβ+1 . (32)
Moreover, the lower bound is attained when λ ≍ n−θ for θ = β
2τ β+1 .
The analytic functional argument As one of our technical contributions, we develop an analytic functional argument based on analytic functional calculus in the context of spectral algorithms, which enables us to derive the exact generalization error curve. While functional calculus has a long history in operator perturbation theory (Hsing and Eubank, 2015), as far as we know, we are the first to apply it to analyze spectral algorithms. First, we would like to illustrate the difficulties here and w-
hy the existing techniques are not applicable. The traditional literature on the optimal rate focused only on the upper bound and their approaches, which are based on the approximation-estimation decomposition (for example, Eq. (88) in Zhang et al. (2023)), are not applicable for the lower bound. Moreover, it is in general more difficult to provide the lower bound than the upper bound since the former requires the error term to be infinitesimal, For the simple case of KRR, the rigorous work (Li et-
 al., 2023) determined the asymptotic rate of convergence, but the proof method must rely on the resolvent identity of KRR, that is,
φKR
λ (A) − φKR
λ (B) = (A + λ)−1 − (B + λ)−1 = (A + λ)−1(B − A)(B + λ)−1,
and also ψKR
λ (A) = λ(A + λ)−1. This identity is crucial for concentrating the random terms (see (35)) to the non
random counterpart appearing on the right hand side of (30), where we will encounter quantities like φλ(T ) − φλ(TX )
12

Li et al. Generalization of Spectral Algorithms
and ψλ(T ) − ψλ(TX ). However, for general spectral algorithms, it is impossible to derive similar identity. Moreover, the effect of λ must also be taken into consideration.
Our “analytic functional argument” overcomes these difficulties using the analytic functional calculus that
φλ(A) − φλ(B) = − 1
2πi
I
Γ
φλ(z) [RA(z) − RB(z)] dz
=1
2πi
I
Γ
RB(z)(A − B)RA(z)φλ(z)dz,
where RA(z) = (A − z)−1 is the resolvent of A and Γ is a contour. Then, the terms in the integral resemble that of KRR (but note that now z a complex number now). Surprisingly, with carefully chosen contour Γ depending on λ, this crucial formula allows us to apply the concentration results obtained for the resolvent and derive very sharp estimations, leading to the exact generalization error curve. We believe that this novel technique is of independent interest and can be applied to other problems-
.
13

Li et al. Generalization of Spectral Algorithms
4 Proof
4.1 Proof sketch
The proof idea is quite direct. The first step is the traditional bias-variance decomposition, which is also standard in the literature (Li et al., 2023). Let us first define some quantities derived from conditional expectation on the sample points X:
g ̃X := E gZ X = 1
n
n
X
i=1
Kxi f ∗(xi) ∈ H, (33)
f ̃λ := E fˆλ X = φλ(TX )g ̃X ∈ H. (34)
Proposition 4.1. Under Assumption 4, we have
E fˆλ − f ∗ 2
L2 X = f ̃λ − f ∗ 2
L2 + σ2
n2
n
X
i=1
∥φλ(TX )k(xi, ·)∥2
L2
=: Bias2(λ) + Var(λ),
(35)
where we note that both Bias2(λ) and Var(λ) are still random variables depending on X.
Then, we will show respectively in Theorem 4.14 and Theorem 4.19 that for λ = Ω(n−θ), θ < β,
Var(λ) = (1 + oP(1)) σ2
n N2,φ(λ),
Bias2(λ) = R2
φ(λ; f ∗) + oP(1) R2
φ(λ; f ∗) + 1
n N2,φ(λ) .
Moreover, in Corollary 4.16, using the monotonicity of Var(λ), we can also provide a lower bound of Var(λ) when λ = O(n−β). Then, pulling all together finishes the proof of the Theorem 3.1.
Organization In the following, we first give a simple proof of the bias-variance decomposition in Proposition 4.1. In Subsection 4.2, we will derive estimations of some fundamental quantities that will be used later. In Subsection 4.3, we will use concentration inequalities to obtain high-probability bounds on some intermediate but crucial quantities. In Subsection 4.4, we recall some basic facts about analytic functional calculus and define the contour that is essential in our the proof. Finally,-
 we prove the estimation of the two terms in Subsection 4.5 and Subsection 4.6.
More notations In the proof, we will denote by C, c generic positive constants that may change from line to line. We use ∥·∥B(H) or simply ∥·∥ to represent the operator norm on a Hilbert space H. We also denote by x+ = max(x, 0).
Proof of Proposition 4.1. Let εi = yi − f ∗(xi) be the noise. Then, plugging (15) into (19), we get
fˆλ = φλ(TX )gˆZ = φλ(TX ) 1
n
n
X
i=1
Kxi (f ∗(xi) + εi)
!
= φλ(TX ) 1
n
n
X
i=1
Kxi f ∗(xi) + 1
n
n
X
i=1
εiφλ(TX )kxi
= f ̃λ + 1
n
n
X
i=1
εiφλ(TX )kxi ,
so
fˆλ − f ∗ = f ̃λ − f ∗ + 1
n
n
X
i=1
εiφλ(TX )kxi .
Taking conditional expectation on X and using the fact that {εi}n
i=1 are i.i.d. mean-zero random variables conditioned on X and also Assumption 4, we get
E fˆλ − f ∗ 2
L2 X = E
hDfˆλ − f ∗, fˆλ − f ∗E
L2 X
i
14

Li et al. Generalization of Spectral Algorithms
= f ̃λ − f ∗ 2
L2 + 2E
"
Re
*
f ̃λ − f ∗, 1
n
n
X
i=1
εiφλ(TX )kxi
+
L2
X
#
+E


1 n
n
X
i=1
εiφλ(TX )kxi
2
L2
X


= f ̃λ − f ∗ 2
L2 + 1
n2 E
"* n X
i=1
εiφλ(TX )kxi ,
n
X
i=1
εiφλ(TX )kxi
+
L2
X
#
= f ̃λ − f ∗ 2
L2 + 1
n2
n
X
i=1
E(ε2
i |X)∥φλ(TX )k(xi, ·)∥2
L2
= f ̃λ − f ∗ 2
L2 + σ2
n2
n
X
i=1
∥φλ(TX )k(xi, ·)∥2
L2 .
4.2 Fundamental controls
Denote the effective dimension (of power p ≥ 1) of the RKHS H by
Np(λ) :=
∞
X
i=1
λi λ + λi
p
. (36)
This quantity corresponds to the φKR-effective dimension defined previously in (29). When p = 1, it is the ordinary effective dimension in the literature (Caponnetto and De Vito, 2007).
Let us provide first the controls of the regularized basis functions using the regular RKHS condition. Lemma 4.2. Under Assumption 2, for any x ∈ X ,
φ1/2
λ (T )kx
2
H
≤ M N1,φ(λ), ∥φλ(T )kx∥2
L2 ≤ M N2,φ(λ). (37)
In particular, for φλ = φKR
λ,
T −1/2
λ kx
2
H
≤ M N1(λ), T −1
λ kx
2
L2 ≤ M N2(λ). (38)
Proof. Using the spectral decomposition (3) and also Mercer’s decomposition (4), we have
φ1/2
λ (T )kx
2
H
= φ1/2
λ (T )
∞
X
m=1
μm
dm
X
l=1
em,l(x)em,l
2
H
=
∞
X
m=1
φ1/2
λ (μm)μm
dm
X
l=1
em,l(x)em,l
2
H
=
∞
X
m=1
μmφλ(μm)
dm
X
l=1
|em,l(x)|2.
Then, noticing that am = μmφλ(μm) is decreasing since μm is decreasing and tφλ(t) decreases as t decreases, Proposition A.3 and Assumption 2 yield
φ1/2
λ (T )kx
2
H
≤M
∞
X
m=1
μmφλ(μm)dm = M N1,φ(λ).
Similarly,
∥φλ(T )kx∥2
L2 =
∞
X
m=1
(μmφλ(μm))2
dm
X
l=1
|em,l(x)|2 ≤ M N2(λ).
15

Li et al. Generalization of Spectral Algorithms
Under the power-law decay Assumption 1, we have the following asymptotics of the effective dimension, see Proposition A.2 in the appendix for the proof.
Lemma 4.3. Let Assumption 1 hold and φλ be a filter function satisfying (17) and (18). Then, for any p ≥ 1 and λ > 0, we have
Np,φ(λ) ≍ λ−1/β. (39)
Particularly, for φλ = φKR
λ , we have Np(λ) ≍ λ−1/β.
The following lemma controls the residual term, which will be used in the proof of the bias term. Lemma 4.4. Suppose f ∗ ∈ [H]t. Let φλ be a filter function of qualification τ and f ∗
λ = φλ(T )T f ∗. Then, for
γ ∈ [0, t],
∥f ∗ − f ∗
λ ∥[H]γ = ∥ψλ(T )f ∗∥[H]γ ≤ Fθκ(t−γ−2τ)+ ∥f ∗∥[H]t λθ, (40)
where θ = min t−γ
2 , τ . In addition, for γ ∈ [0, 2 + t],
∥f ∗
λ ∥[H]γ ≤ Eκ(t−γ)+ ∥f ∗∥[H]t λ− (γ−t)+
2 . (41)
Proof. Since f ∗ ∈ [H]t, we can find h ∈ L2 such that f ∗ = T t/2h and ∥h∥L2 = ∥f ∗∥[H]t . Then,
∥ψλ(T )f ∗∥[H]γ = T −γ/2ψλ(T )T t/2h
L2 ≤ T t−γ
2 ψλ(T )
B(L2 )
∥h∥L2
≤ T (t−γ−2τ)+
2 T min( t−γ
2 ,τ)ψλ(T )
B(L2 )
∥f ∗∥[H]t
≤ Fθκ(t−γ−2τ )+ ∥f ∗∥[H]t λmin( t−γ
2 ,τ ),
where θ = min t−γ
2 , τ . For the second inequality, we have
∥f ∗
λ ∥[H]γ = T − γ
2 T φλ(T )T t
2h
L2
≤ T 2+t−γ
2 φλ(T )
B(L2 )
∥h∥L2
≤ T (t−γ)+
2 T 1− (γ−t)+
2 φλ(T )
B(L2 )
∥h∥L2
≤ Eκ(t−γ)+ ∥f ∗∥[H]t λ− (γ−t)+
2,
where we use (78) for the second term in the last inequality.
Proposition 4.5. Let f ∗ ∈ [H]0. Suppose φλ is a filter function defined in Definition 2.3 with qualification τmax. Then,
R2
φ(λ; f ∗) ≥ 1
4
X
m:μm< λ
2E
f ̄2
m
Moreover, if τmax < ∞, we also have R2φ(λ; f ∗) ≥ ∥f ∗∥2
L2 F λ2τmax .
Consequently, under Assumption 5, we have
R2
φ(λ; f ∗) = Ω(λmin(s,2τmax)). (42)
Proof. Recall the definition of R2φ(λ; f ∗) in (28). For the first estimation, using the last control in Lemma A.5, when μm ≤ λ
2E , we have ψλ(μm) ≥ 1/2, so
R2
φ(λ; f ∗) =
∞
X
m=1
ψλ(μm)2f ̄2
m≥
X
m:μm< λ
2E
ψλ(μm)2f ̄2
m≥ 1
4
X
m:μm< λ
2E
f ̄2
m.
For the second one, using the property (iv) in Definition 2.3, we have
R2
φ(λ; f ∗) =
∞
X
m=1
ψλ(μm)2f ̄2
m≥
∞
X
m=1
F λ2τmax f ̄2
m = F λ2τmax ∥f ∗∥2
L2 .
16

Li et al. Generalization of Spectral Algorithms
4.3 Concentrations
Using the regular RKHS condition, the following inequality is a refinement of the concentration in the previous literature (Li et al., 2023, Proposition 5.8). The main improvement is that the quantity N1(λ) ≍ λ−1/β appearing in the
right-hand side is strictly smaller than the quantity Mαλ−α, α > 1/β appearing in their bound, which diverges as α → 1/β.
Proposition 4.6. Under Assumption 2, for all δ ∈ (0, 1), with probability at least 1 − δ,
T−1
2
λ (T − TX )T − 1
2
λ B(H)
≤2
3 u + √u, (43)
where
u = u(n, λ) = 2M N1(λ)
n ln 4(∥T ∥ + λ)N1(λ)
δ∥T ∥ . (44)
Proof. We will prove by Lemma A.8. Let us define
A(x) = T − 1
2
λ (Tx − T )T − 1
2 λ
and Ai = A(xi). Then, it is easy to see that E(Ai) = 0 and
1 n
n
X
i=1
Ai = T − 1
2
λ (TX − T )T − 1
2
λ,
which is the quantity of interest. Moreover, since
T−1
2
λ TxT − 1
2
λ = T−1
2
λ KxK∗
xT − 1
2
λ = T−1
2
λ Kx
h
T−1
2
λ Kx
i∗
,
from (38) we have
T−1
2
λ TxT − 1
2
λ B(H)
= T−1
2
λ Kx
2
B(R,H)
= T−1
2
λ kx
2
H
≤ M N1(λ). (45)
By taking expectation, we also have T − 1
2
λ TT−1
2
λ B(H)
≤ M N1(λ). Therefore, we get
∥A∥B(H) ≤ T − 1
2
λ TT−1
2
λ B(H)
+ T−1
2
λ TxT − 1
2
λ B(H)
≤ 2M N1(λ) =: L.
For the second part of the condition, using the fact that E(B − E(B))2 ⪯ E(B2) and also B2 ⪯ ∥B∥B for a positive self-adjoint operator B, where ⪯ denotes the partial order induced by positive operators, we have
E(A2) ⪯ E T − 1
2
λ TxT − 1
2 λ
2
⪯ LE T − 1
2
λ TxT − 1
2
λ = LT T −1
λ =: V,
where the second ⪯ comes from (45). Therefore,
∥V ∥ = L T T −1
λ = L λ1
λ + λ1
, Tr V = L Tr T T −1
λ = LN1(λ),
B = ln 4 Tr V
δ∥V ∥ = ln 4(λ1 + λ)N1(λ)
δλ1
.
Finally, we note that the quantities in the lemma are:
2LB
3n = 4M N1(λ)B
3n = 2
3 u, 2∥V ∥B
n ≤ 2M N1(λ)B
n = u.
The next lemma is a consequence of Proposition 4.6.
17

Li et al. Generalization of Spectral Algorithms
Lemma 4.7. Suppose Assumption 2 holds. Fix δ ∈ (0, 1). Let us denote
v = v(n, λ) = M N1(λ)
n ln N1(λ)
δ . (46)
Suppose λ = λ(n) → 0 satisfies v(n, λ) = o(1). Then, when n is sufficiently large, with probability at least 1 − δ we have
T −1/2
λ (T − TX )T −1/2
λ ≤ C√v, (47)
T −1/2
Xλ T 1/2
λ
2
= T 1/2
λ T −1/2
Xλ
2
= T 1/2
λ T −1
XλT 1/2
λ ≤ 3,
T −1/2
λ T 1/2
Xλ
2
= T 1/2
Xλ T −1/2
λ
2
= T −1/2
λ T1
XλT −1/2
λ ≤ 2,
(48)
where C is an absolute constant.
Combining with Lemma 4.3, we have the following corollary.
Corollary 4.8. Suppose Assumption 1 and Assumption 2 hold. Then, as long as λ(n) = Ω(n−θ) for some θ < β, for fixed δ ∈ (0, 1), we have v(n, λ) = o(1), so the conclusion in Lemma 4.7 holds.
Proof of Lemma 4.7. (47) is a direct corollary of Proposition 4.6 with v = o(1) and
u = 2M N1(λ)
n ln 4(λ1 + λ)N1(λ)
δλ1
≤ C0v
for some absolute constant C0. For the second part, when n is sufficiently large that u ≤ 1/4,
T −1/2
λ (T − TX )T −1/2
λ ≤2
3 u + √u ≤ 2
3.
Noticing that T −1/2
Xλ T 1/2
λ
∗
= T 1/2
λ T −1/2
Xλ and ∥A∥2 = ∥A∗∥2 = ∥A∗A∥, we have
T −1/2
Xλ T 1/2
λ
2
= T 1/2
λ T −1/2
Xλ
2
= T 1/2
λ (TX + λ)−1T 1/2
λ
=
h
T −1/2
λ (TX + λ)T −1/2
λ
i−1
=
h
I − T −1/2
λ (T − TX )T −1/2
λ
i−1
≤
h
1 − T −1/2
λ (T − TX )T −1/2
λ
i−1
≤ 3,
where the last inequality we use the fact that (I − A)−1 ≤ (1 − ∥A∥)−1.
For the other part, we have
T −1/2
λ T 1/2
Xλ
2
= T 1/2
Xλ T −1/2
λ
2
= T −1/2
λ TXλT −1/2
λ
= I + T −1/2
λ (TX − T )T −1/2
λ
≤ 1 + T −1/2
λ (TX − T )T −1/2
λ ≤ 2.
4.4 Analytic functional calculus
The analytic functional argument based is one of our main novelty in this paper. Let us first recall some basic facts about analytic functional calculus. We refer to for example, Simon (2015) for mathematical details.
Definition 4.9. Let A be a linear operator on a Banach space X. The resolvent set ρ(A) is given by
ρ(A) := {λ ∈ C | A − λ is invertible} ,
and we denote RA(λ) := (A − λ)−1. The spectrum of A is defined by
σ(A) := C\ρ(A).
18

Li et al. Generalization of Spectral Algorithms
A simple but key ingredient in the analytic functional calculus is the following resolvent identity:
RA(λ) − RB(λ) = RA(λ)(B − A)RB(λ) = RB(λ)(B − A)RA(λ). (49)
The resolvent allows us to define the value of f (A) in analog to the form of Cauchy integral formula, where A is an operator and f is an analytic function. This is often referred to as the analytic functional calculus, see e.g., Simon (2015, Theorem 2.3.1).
Proposition 4.10 (Analytic Functional Calculus). Let A be an operator on a Hilbert space H and f be an analytic function defined on Df ⊂ C. Let Γ be a contour contained in Df surrounding σ(A). Then,
f (A) = 1
2πi
I
Γ
f (z)(z − A)−1dz = − 1
2πi
I
Γ
f (z)RA(z)dz, (50)
and it is independent of the choice of Γ.
Remark 4.11. For a self-adjoint compact operator A, we have spectral decomposition
A=
∞
X
i=1
λi ⟨ei, ·⟩ ei,
and f (A) is often defined by
f (A) =
∞
X
i=1
f (λi) ⟨ei, ·⟩ ei. (51)
In fact, this definition is consistent to the one in Proposition 4.10. We remark that (51) is also valid for continuous f and an extension to self-adjoint (not necessarily compact) operators is also possible by the spectral theorem (Simon, 2015, Section 5).
Now, let Γ be a contour contained in Df surrounding both σ(A) and σ(B). Using (49), we get
f (A) − f (B) = − 1
2πi
I
Γ
f (z) [RA(z) − RB(z)] dz = 1
2πi
I
Γ
RB(z)(A − B)RA(z)f (z)dz. (52)
We will use the following spectral mapping theorem to bound some operator norms in the proof, see Simon (2015, Theorem 5.1.11).
Proposition 4.12 (Spectral Mapping Theorem). Let A be a bounded self-adjoint operator and f be a continuous function on σ(A). Then
σ(f (A)) = {f (λ) | λ ∈ σ(A)} . (53)
Consequently, ∥f (A)∥ = supλ∈σ(A) |f (λ)| ≤ ∥f ∥∞.
Finally let us define the contour Γλ by
Γλ = Γλ,1 ∪ Γλ,2 ∪ Γλ,3
Γλ,1 = {x ± (x + η)i ∈ C | x ∈ [−η, 0]}
Γλ,2 = x ± (x + η)i ∈ C | x ∈ (0, κ2)
Γλ,3 = z ∈ C | z − κ2 = κ2 + η, Re(z) ≥ κ2 ,
(54)
where η = λ/2, see Figure 2 on page 20. Then, since T and TX are positive self-adjoint operators with ∥T ∥, ∥TX ∥ ≤
κ2, we have σ(T ), σ(TX ) ⊂ [0, κ2]. Therefore, Γλ is indeed a contour satisfying the requirement in Proposition 4.10.
Proposition 4.13. When (48) holds, there is an absolute constant C that for any z ∈ Γλ,
T
1 2
λ (T − z)−1T
1 2
λ ≤C
T
1 2
λ (TX − z)−1T
1 2
λ ≤ 3C
(55)
Proof. Using the spectral mapping theorem, for a self-adjoint operator A with σ(A) ⊆ [0, κ2] we have
A
1 2
λ (A − z)−1A
1 2
λ = sup
t∈σ(A)
t+λ
t−z .
19

Li et al. Generalization of Spectral Algorithms
−λ/2 κ2
σ(T )
Re
Im
0
Γλ
Figure 2: An illustration of the contour Γλ defined in (54). The region enclosed by Γλ is just Dλ in Assumption 3.
The dashed interval [0, κ2] contains the spectrum of T and TX .
Now, when z = x + (x + λ/2)i ∈ Γλ,1 ∪ Γλ,2, where x ∈ [−λ/2, κ2], we get
sup
t∈σ(A)
t+λ t−z
2
≤ sup
t≥0
t+λ t−z
2
=
( 4λ2
λ2+4λx+8x2 , − 1
2λ ≤ x ≤ − 1
2(2+√2) λ, 5λ2 +12λx+8x2
(λ+2x)2 , x ≥ 1
2(2+√2) λ,
Tedious calculations show that the right hand side achieve the maximum of 8 at x = −λ/4, so
sup
t∈σ(A)
t+λ t−z
2
≤ 8, z ∈ Γλ,1 ∪ Γλ,2.
When z ∈ Γλ,3, we have |t − z| ≥ κ2 for t ∈ σ(A) ⊆ [0, κ2], so
sup
t∈σ(A)
t+λ
t − z ≤ sup
t∈σ(A)
t+λ
κ2 ≤ λ + κ2
κ2 ≤ 2.
In summary, we have an absolute constant C such that
A
1 2
λ (A − z)−1A
1 2
λ ≤ C.
Consequently, letting A = T yields the first inequality. For the second one, we notice that
T
1 2
λ (TX − z)−1T
1 2
λ =T
1 2
λ T−1
2
Xλ · T
1 2
Xλ(TX − z)−1T
1 2
Xλ · T −1
2
Xλ T
1 2 λ
≤T
1 2
λ T−1
2
Xλ · T
1 2
Xλ(TX − z)−1T
1 2
Xλ · T −1
2
Xλ T
1 2 λ
≤ 3C,
where we use (48) and also the norm bound with A = TX .
4.5 The variance term
The following theorem greatly improves the result in Li et al. (2023, Theorem A.10) and also Zhang et al. (2024). Beside the main difference that it considers general spectral algorithms, it also (1) removes the requirement of Ho ̈lder continuity of the kernel function in Li et al. (2023); (2) gives exact 1 + oP(1) form with no loss of constant factor compared to Zhang et al. (2024); (3) it allows a wider range of λ, leading to a logarithmic lower bound in Corollary 4.16
Theorem 4.14. Under Assumptions 1,2 and 3, suppose λ = λ(n) → 0 satisfies
λ−1/β
n (ln λ−1)3 = o(1), (56)
then we have
Var(λ) = [1 + oP(1)] σ2
n N2,φ(λ). (57)
In particular, sufficient conditions for (56) is λ = Ω(n−θ) for some θ < β or λ = Ω(n−β lnp n) for any p > 3β.
20

Li et al. Generalization of Spectral Algorithms
Proof. We recall that
Var(λ) = σ2
n
1 n
n
X
i=1
∥φλ(TX )kxi ∥2
L2 .
Lemma 4.3 gives that
N1(λ) ≍ N2(λ) ≍ N2,φ(λ) ≍ λ−1/β. (58)
Therefore, the condition (46) in Lemma 4.7 holds as long as n is large enough, since λ = Ω(n−θ) for some θ < β. Then, applying Lemma 4.7, Lemma 4.18 and Lemma 4.17, when n is large enough, with probability at least 1 − δ we have
1 n
n
X
i=1
∥φλ(TX )kxi ∥2
L2 −
Z
X
∥φλ(T )kx∥2
L2 dμ(x)
≤1
n
n
X
i=1
∥φλ(TX )kxi ∥2
L2 − ∥φλ(T )kxi ∥2
L2 + 1
n
n
X
i=1
∥φλ(T )kxi ∥2
L2 −
Z
X
∥φλ(T )kx∥2
L2 dμ(x)
≤ CM pvN1(λ) ln λ−1 +
q
N2,φ(λ) pvN1(λ) ln λ−1 + M N2,φ(λ)
r2
n ln 2
δ
= o (N2,φ(λ)) ,
where for the last estimation, we recall that v is given by (46), so by (56), we get
hpvN1(λ) ln λ−1i2
= M N12(λ)
n ln N1(λ)
δ (ln λ−1)2
≤ C ln 1
δ · λ−1/β
n (ln λ−1)3 · λ−1/β = o λ−1/β = o (N2,φ(λ)) .
Finally, using Mercer’s expansion, we find that
∥φλ(T )kx∥2
L2 = φλ(T )
∞
X
m=1
μm
dm
X
l=1
em,l(x)em,l
2
L2
=
∞
X
m=1
φλ(μm)μm
dm
X
l=1
em,l(x)em,l
2
L2
=
∞
X
m=1
(φλ(μm)μm)2
dm
X
l=1
|em,l(x)|2,
and thus the deterministic term writes
Z
X
∥φλ(T )kx∥2
L2 dμ(x) =
Z
X
"∞ X
m=1
(φλ(μm)μm)2
dm
X
l=1
|em,l(x)|2
#
dμ(x)
=
∞
X
m=1
(φλ(μm)μm)2 = N2,φ(λ).
Lemma 4.15. The variance term Var(λ) increases as λ decreases, i.e., for any λ1 ≤ λ2, we have Var(λ1) ≥ Var(λ2).
Proof. Let us define the kernel matrix K = 1
n k(xi, xj) n×n. Then, it is easy to show that the representation matrix
of TX on the set {kxi }n
i=1 is given by K (see, for example, Li et al. (2023, Section A.1)). Consequently, denoting a
column vector K(X, ·) = (kx1 , . . . , kxn )T , we have
φλ(TX )K(X, ·) = φλ(K)K(X, ·),
21

Li et al. Generalization of Spectral Algorithms
where the action of φλ(TX ) on the left-hand side is element-wise. Then,
Var(λ) = σ2
n2
n
X
i=1
∥φλ(TX )kxi ∥2
L2 = σ2
n2
n
X
i=1
Z
X
|(φλ(TX )kxi )(x)|2dμ(x)
= σ2
n2
Z
X
n
X
i=1
|(φλ(TX )kxi )(x)|2dμ(x) = σ2
n2
Z
X
∥(φλ(TX )K(X, ·))(x)∥2
Rn dμ(x)
= σ2
n2
Z
X
∥(φλ(K)K(X, ·))(x)∥2
Rn dμ(x) = σ2
n2
Z
X
∥φλ(K)K(X, x)∥2
Rn dμ(x)
= σ2
n2
Z
X
[K(X, x)]H φ2
λ(K)K(X, x)dμ(x),
where [K(X, x)]H is the conjugate transpose of K(X, x). Moreover, the property (i) of the filter function implies that φλ(z) increases as λ decreases. Therefore, we get φ2
λ1 (K) ⪰ φ2
λ2 (K) and the result follows.
Corollary 4.16. When λ = λ(n) = O(n−β), we have
Var(λ) = ΩP (ln n)−4σ2 . (59)
Proof. Let us choose λ ̃ = n−β(ln n)4β, then we have λ ≤ λ ̃ when n is large enough. Using Lemma 4.15, we get Var(λ) ≥ Var(λ ̃). Moreover, the choice of λ ̃ satisfies the condition (56), so applying Theorem 4.14 yields
Var(λ ̃) = [1 + oP(1)] σ2
n N2,φ(λ ̃) = ΩP
σ2
n
λ ̃−1/β = ΩP σ2(ln n)−4 .
Lemma 4.17. With probability at least 1 − δ, we have
1 n
n
X
i=1
∥φλ(T )kxi ∥2
L2 −
Z
X
∥φλ(T )kx∥2
L2 dμ(x) ≤ M N2,φ(λ)
r2
n ln 2
δ . (60)
Proof. Let ξ(x) = ∥φλ(T )kx∥2
L2 and ξi = ξ(xi). Then, they are i.i.d. random variables with
|ξ|2 = ∥φλ(T )kx∥2
L2 ≤ M N2,φ(λ)
from (37). Then, Lemma A.6 yields the desired result.
Lemma 4.18. Under Assumption 2 and Assumption 3, when (47) and (48) hold, we have
sup
x∈X
∥φλ(TX )kx∥2
L2 − ∥φλ(T )kx∥2
L2 ≤ CM pvN1(λ) ln λ−1 +
q
N2,φ(λ) pvN1(λ) ln λ−1. (61)
Proof. We start with
D = |∥φλ(TX )kx∥L2 − ∥φλ(T )kx∥L2 | ≤ T 1
2 [φλ(T ) − φλ(TX )] kx H
.
Using operator calculus, we get
T
1
2 [φλ(T ) − φλ(TX )] kx
=T1
21
2πi
I
Γλ
RTX (z)(T − TX )RT (z)φλ(z)dz kx
=1
2πi
I
Γλ
T
1
2 (TX − z)−1(T − TX )(T − z)−1kxφλ(z)dz
=1
2πi
I
Γλ
T
1
2 T−1
2
λ ·T
1 2
λ (TX − z)−1T
1 2
λ · T−1
2
λ (T − TX )T − 1
2
λ ·T
1 2
λ (T − z)−1T
1 2
λ · T−1
2
λ kxφλ(z)dz.
22

Li et al. Generalization of Spectral Algorithms
Therefore, taking the norms yields
D≤C T1
2 T−1
2
λ ·T
1 2
λ (TX − z)−1T
1 2
λ · T−1
2
λ (T − TX )T − 1
2
λ ·T
1 2
λ (T − z)−1T
1 2 λ
· T−1
2
λ kx H
I
Γλ
|φλ(z)dz|
≤ C · 1 · C · C√v · C · pM N1(λ)
I
Γλ
|φλ(z)dz|
≤ CpM vN1(λ)
I
Γλ
|φλ(z)dz|,
where in the second estimation, we use respectively for part (1): operator calculus, (2,4): Proposition 4.13, (3): estimation (47) and (5): estimation (38). With Assumption 3, we get
I
Γλ
|φλ(z)dz| ≤ C
I
Γλ
1
|z + λ| |dz|.
Now we focus on the latter integral. For z ∈ Γλ,1, we have |z + λ| ≥ λ/(2√2) and thus
Z
Γλ,1
1
|z + λ| |dz| ≤ 2√2λ−1|Γλ,1| ≤ C,
where we notice that |Γλ,1| ≤ Cλ. For Γλ,2, we have
Z
Γλ,2
1
|z + λ| |dz| = 2
Z κ2
0
1
|x + (x + λ/2)i + λ|
√2dx
≤C
Z κ2
0
1
x + λ dx
≤ C ln λ−1.
For z ∈ Γλ,3, we have |z + λ| ≥ κ2 and thus
Z
Γλ,3
1
|z + λ| |dz| ≤ 1
κ2 |Γλ,3| ≤ C.
Therefore, we get
I
Γλ
1
|z + λ| |dz| ≤ C ln λ−1, (62)
and thus
D = |∥φλ(TX )kx∥L2 − ∥φλ(T )kx∥L2 | ≤ CpM vN1(λ) ln λ−1.
Then, combining with the second estimation in (37), we have
∥φλ(TX )kx∥L2 + ∥φλ(T )kx∥L2 ≤ 2∥φλ(T )kx∥L2 + D ≤ C
√ M
q
N2,φ(λ) + pvN1(λ) ln λ−1 .
Finally,
∥φλ(TX )kx∥2
L2 − ∥φλ(T )kx∥2
L2 = |∥φλ(TX )kx∥L2 − ∥φλ(T )kx∥L2 | (∥φλ(TX )kx∥L2 + ∥φλ(T )kx∥L2 )
≤ CM
q
N2,φ(λ) + pvN1(λ) ln λ−1 pvN1(λ) ln λ−1.
23

Li et al. Generalization of Spectral Algorithms
4.6 The bias term
Theorem 4.19. Let λ = λ(n) satisfy λ = Ω(n−θ) for some θ < β. Under Assumptions 1,2,3 and 5, we have
Bias2(λ) = R2
φ(λ; f ∗) + oP R2
φ(λ; f ∗) + 1
n N2,φ(λ) . (63)
More precisely, letting s ̃ = min(s, 2τmax), if s ̃ ≤ 2, or s ̃ > 2 with further n−1λ−(β−1+s ̃−2)(ln n)3 = o(1), we have
Bias2(λ) = (1 + oP(1))R2
φ(λ; f ∗). (64)
Proof of Theorem 4.19. First, we can apply Corollary 4.8 so that (47) and (48) hold. We recall that
g∗ = T f∗, f∗
λ = φλ(T )T f ∗ = φλ(T )g∗.
As mentioned in Subsection 4.1, the bias term is defined as
Bias2(λ) = f ̃λ − f ∗ 2
L2 = f ∗
λ − f ∗ + f ̃λ − f ∗
λ
2
L2 .
Hence,
∥f ∗
λ − f ∗∥L2 − f ̃λ − f ∗
λ L2 ≤ Bias(λ) ≤ ∥f ∗
λ − f ∗∥L2 + f ̃λ − f ∗
λ L2 ,
where ∥f ∗
λ − f ∗∥L2 = Rφ(λ; f ∗) is the main term define in (28). As for the error term, do the decomposition,
f ̃λ − f ∗
λ = φλ(TX )g ̃X − (ψλ(TX ) + φλ(TX )TX )f ∗
λ
= φλ(TX )(g ̃X − TX f ∗
λ ) − ψλ(TX )T φλ(T )f ∗
= φλ(TX )(g ̃X − TX f ∗
λ ) − φλ(TX )ψλ(T )g∗ + φλ(TX )ψλ(T )g∗ − ψλ(TX )T φλ(T )f ∗
= φλ(TX ) [g ̃X − TX f ∗
λ − ψλ(T )g∗] + [φλ(TX )ψλ(T )T f ∗ − ψλ(TX )T φλ(T )f ∗]
= φλ(TX )(g ̃X − TX f ∗
λ − g∗ + T f∗
λ ) + (φλ(TX )T ψλ(T ) − ψλ(TX )T φλ(T ))f ∗.
(65)
For the first term in (65),
∥φλ(TX )(g ̃X − TX f ∗
λ − g∗ + T f∗
λ )∥L2
= T1
2 φλ(TX )(g ̃X − TX f ∗
λ − g∗ + T f∗
λ)
H
≤ T1
2 T−1
2
λ ·T
1 2
λ φλ(TX )T
1 2
λ · T−1
2
λ [(g ̃X − TX f ∗
λ ) − (g∗ − T f ∗
λ )]
H
(i)
≤ 1·E T
1 2
λ T −1
XλT
1 2
λ · T−1
2
λ [(g ̃X − TX f ∗
λ ) − (g∗ − T f ∗
λ )]
H
≤ C T−1
2
λ [(g ̃X − TX f ∗
λ ) − (g∗ − T f ∗
λ )]
H
,
where the second control in (i) comes from (17) and the last one can be derived from (48). Employing Proposition 4.5, we also have
Rφ(λ; f ∗) = Ω(λs ̃/2), (66) where we denote s ̃ = min(s, 2τmax). Hence, owing to Lemma 4.20 with t sufficiently closed to s, we have
T
1 2
λ (g ̃X − TX f ∗
λ − g∗ + T f∗
λ)
L2 = oP (Rφ(λ; f ∗)) . (67)
For the second term in (65), since λ = Ω(n−θ) for some θ < β, as discussed (58) in the proof of variance term, we have
v = O(n−1N1(λ) ln λ−1) = O(n−1λ− 1
β ln λ−1) = o(1),
so the condition in Lemma 4.7 is satisfied. Then, combining Lemma 4.7 and Lemma 4.21, for any fixed t satisfying t < s and t ≤ 2,
∥(φλ(TX )T ψλ(T ) − ψλ(TX )T φλ(T ))f ∗∥L2 = OP Rφ(λ; f ∗) + ∥f ∗∥[H]t λ t
2
√v ln λ−1.
Moreover, we also have √v ln λ−1 = o(1) so
Rφ(λ; f ∗)√v ln λ−1 = o(Rφ(λ; f ∗)).
For the last term, we notice
λ
t 2
√v ln λ−1 2
= O λtn−1λ− 1
β (ln λ−1)3 .
Let us consider:
24

Li et al. Generalization of Spectral Algorithms
• Case 1: Using (66), if for some t < s and t ≤ 2,
n−1λ−(β−1+s ̃−t)(ln λ−1)3 = O n−1λ−(β−1+s ̃−t)(ln n)3 = o(1), (68)
we have λ t
2
√v ln λ−1 = o(Rφ(λ; f ∗)).
• Case 2: Using (58), if λt(ln λ−1)3 = O(λt(ln n)3) = o(1), we have λ t
2
√v ln λ−1 = o 1
n N2,φ(λ) 1/2 .
Now, if s ̃ ≤ 2, then since λ = Ω(n−θ) for some θ < β, (68) can always be satisfied by choosing t sufficiently close to
s, namely t > s ̃ − 1
θ−1
β , so we always have the result in case 1.
On the other hand, if s ̃ > 2, we fix t = 2 and fix some 0 < θ0 < (β−1 + s ̃ − 2)−1. Then, when λ ≥ n−θ0 , case 1 applies; and when λ ≤ n−θ0 , case 2 applies. In summary, we always have
λ
t 2
√v ln λ−1 = o R2
φ(λ; f ∗) + 1
n N2,φ(λ)
1/2
.
Consequently, we have shown that
∥[φλ(TX )T ψλ(T ) − ψλ(TX )T φλ(T )]f ∗∥L2 = oP R2
φ(λ; f ∗) + 1
n N2,φ(λ)
1/2
.
Combining it with (67), we prove that the error term f ̃λ − f ∗
λ L2 is also of this order and (63) follows.
The following lemma is a control of an approximation error in the bias term, which is similar to the combination of Lemma A.5 and Lemma A.10 in Li et al. (2023), but we consider general spectral algorithms here. Moreover, we also apply the techniques in Zhang et al. (2023) to deal with the misspecified case. The proof is deferred to the appendix.
Lemma 4.20. Let Assumptions 1 and 2 hold, f ∗ ∈ [H]t and φλ be a filter function with qualification τ . Suppose λ = Ω(n−θ) for some θ < β. Then, there exists some ε > 0 (depending on θ) such that
T−1
2
λ [(g ̃X − TX f ∗
λ ) − (g∗ − T f ∗
λ )]
H
= OP n−ελt ̃/2 . (69)
where g∗ = T f ∗, f ∗
λ = T φλ(T )f ∗ and t ̃ = min(t, 2τ ).
The next lemma deals with the interaction term in (65), where we apply the analytic functional argument.
Lemma 4.21. Under Assumptions 2,3, assume that f ∗ ∈ [H]t, when (47) and (48) hold, we have
∥(φλ(TX )T ψλ(T ) − ψλ(TX )T φλ(T ))f ∗∥L2 ≤ C Rφ(λ; f ∗) + ∥f ∗∥[H]t ̃λt ̃/2 √v ln λ−1,
where t ̃ = min(t, 2).
Proof. Firstly, let us decompose
∥(φλ(TX )T ψλ(T ) − ψλ(TX )T φλ(T ))f ∗∥L2 = T 1
2 (φλ(TX )T ψλ(T ) − ψλ(TX )T φλ(T ))f ∗
H
≤ T1
2 (φλ(TX )T ψλ(T ) − ψλ(T )T φλ(T ))f ∗
H
+ T1
2 (ψλ(TX )T φλ(T ) − ψλ(T )T φλ(T ))f ∗
H
.
(70)
For the second term in (70), we use the similar argument as in Lemma 4.18. With Proposition 4.10 on Γλ defined as (54), we have
T
1
2 (ψλ(TX )T φλ(T ) − ψλ(T )T φλ(T ))f ∗
=T1
21
2πi
I
Γλ
RTX (z)(T − TX )RT (z)ψλ(z)dz T φλ(T )f ∗
25

Li et al. Generalization of Spectral Algorithms
=1
2πi
I
Γλ
T
1
2 (TX − z)−1(T − TX )(T − z)−1ψλ(z)T φλ(T )f ∗dz
=1
2πi
Z
Γλ
T
1
2 T−1
2
λ ·T
1 2
λ (TX − z)−1T
1 2
λ · T−1
2
λ (T − TX )T − 1
2 λ
·T
1 2
λ (T − z)−1T
1 2
λ · T−1
2
λ T φλ(T )f ∗ψλ(z)dz.
Hence,
T
1
2 (ψλ(TX )T φλ(T ) − ψλ(T )T φλ(T ))f ∗
H
≤C
Z
Γλ
T
1
2 T−1
2
λ ·T
1 2
λ (TX − z)−1T
1 2
λ · T−1
2
λ (T − TX )T − 1
2 λ
·T
1 2
λ (T − z)−1T
1 2
λ · T−1
2
λ T φλ(T )f ∗
H
|ψλ(z)dz|
(a)
≤ C · 1 · C · √v · C · T − 1
2
λ T φλ(T )f ∗
H
·λ
Z
Γλ
1
z + λ dz
(b)
≤ C√v T − 1
2
λ T φλ(T )f ∗
H
λ ln λ−1,
where in (a), we use (1) operator calculus, (2,4) Proposition 4.13, and (3) estimation (47) and (6) condition (C2) in Assumption 3 for each term respectively, and in (b) we apply (62) for the last term.
Let t ̃ = min(t, 2). Since f ∗ ∈ [H]t, we also have f ∗ ∈ [H]t ̃, so we can write f ∗ = T t ̃h for some h ∈ L2 with ∥h∥L2 = ∥f ∗∥[H]t ̃. This yields
T−1
2
λ T φλ(T )f ∗
H
= T−1
2 T−1
2
λ T φλ(T )T t ̃
2h
L2
≤ T1
2 T−1
2
λ · T t ̃
2 φλ(T ) · ∥h∥L2
≤ C∥f ∗∥[H]t ̃λ t ̃
2 −1,
where the last inequality comes from Lemma A.5. Consequently, we have
T
1
2 (ψλ(TX )T φλ(T ) − ψλ(T )T φλ(T ))f ∗
H
≤ C∥f ∗∥[H]t ̃
√vλ t ̃
2 ln λ−1. (71)
For the first term in (70), we still employ the analytic functional argument:
T
1
2 (φλ(TX )T ψλ(T ) − ψλ(T )T φλ(T ))f ∗
=T1
2 (φλ(TX ) − φλ(T ))T ψλ(T )f ∗
=1
2πi
I
Γλ
T
1
2 (TX − z)−1(TX − T )(T − z)−1φλ(z)T ψλ(T )f ∗dz
=1
2πi
I
Γλ
T
1
2 T−1
2
λ ·T
1 2
λ (TX − z)−1T
1 2
λ · T−1
2
λ (T − TX )T − 1
2 λ
·T
1 2
λ (T − z)−1T
1 2
λ · T−1
2
λ T1
2 ·T1
2 ψλ(T )f ∗φλ(z)dz.
Therefore,
∥T 1
2 (φλ(TX )T ψλ(T ) − ψλ(T )T φλ(T ))f ∗∥H
≤
I
Γλ
T
1
2 T−1
2
λ ·T
1 2
λ (TX − z)−1T
1 2
λ · T−1
2
λ (T − TX )T − 1
2
λ·
·T
1 2
λ (T − z)−1T
1 2
λ T−1
2
λ T1
2 · T1
2 ψλ(T )f ∗
H
|φλ(z)dz|
≤ C√vRφ(λ; f ∗)
I
Γλ
|φλ(z)dz|
≤ C√vRφ(λ; f ∗) ln λ−1.
where the last control holds owing to condition (C2) in Assumption 3. Consequently, plugging the previous control and (71) into (70) yields the desired result.
26

Li et al. Generalization of Spectral Algorithms
5 Conclusion
In this paper, we rigorously illustrated a full characterization of the generalization error curves for a large class of analytic spectral algorithms, providing an exact and complete picture of generalization errors of these kernel methods. The result shows the interplay between the kernel, the regression function, the noise level and also the choice of the regularization parameter. In particular, the result shows a solid U-shaped bias-variance trade-off curve with respect to the regularization pa-
rameter. As applications, the result recovers the minimax optimal rates, shows the poor generalization in the interpolating regime, and also exposes a high-order saturation effect. These results would help us greatly improve our understanding of the generalization of spectral algorithms.
It is also of interest to extend ask if similar characterization holds for other non-analytic spectral algorithms. One particular algorithm is the spectral cut-off method (also known as the truncated singular values decomposition) (Bauer et al., 2007), whose filter function is even not continuous:
φcut
λ (z) = z−1, z ≥ λ,
0, z < λ. , and ψcut
λ (z) = 1 {z < λ} . (72)
The difficulty here is that it is hard to approximate it by analytic ones while keeping the desired properties. We think more analysis tools are needed to handle this case, so we would like to leave it as a future direction.
Finally, this work focuses on the eigenvalues of power-law decay and also a power-law like source condition. It would also be interesting to extend the result to other situations, such as the eigenvalues of exponential decay and also the source condition of exponential decay. We believe that the techniques developed in this work would be helpful in this direction.
27

Li et al. Generalization of Spectral Algorithms
References
A. Jacot, F. Gabriel, C. Hongler, Neural tangent kernel: Convergence and generalization in neural networks, in: S. Bengio, H. Wallach, H. Larochelle, K. Grauman, N. Cesa-Bianchi, R. Garnett (Eds.), Advances in Neural Information Processing Systems, volume 31, Curran Associates, Inc., 2018.
Z. Allen-Zhu, Y. Li, Z. Song, A convergence theory for deep learning via over-parameterization, 2019. arXiv:1811.03962.
J. Lee, L. Xiao, S. Schoenholz, Y. Bahri, R. Novak, J. Sohl-Dickstein, J. Pennington, Wide neural networks of any depth evolve as linear models under gradient descent, in: Advances in Neural Information Processing Systems, volume 32, Curran Associates, Inc., 2019.
P. L. Bartlett, P. M. Long, G. Lugosi, A. Tsigler, Benign overfitting in linear regression, Proceedings of the National Academy of Sciences 117 (2020) 30063–30070. doi:10.1073/pnas.1907378117. arXiv:1906.11300.
Y. Li, H. Zhang, Q. Lin, On the saturation effect of kernel ridge regression, in: International Conference on Learning Representations, 2023.
B. Bordelon, A. Canatar, C. Pehlevan, Spectrum dependent learning curves in kernel regression and wide neural networks, in: Proceedings of the 37th International Conference on Machine Learning, PMLR, 2020, pp. 10241034.
H. Cui, B. Loureiro, F. Krzakala, L. Zdeborova ́, Generalization error rates in kernel regression: The crossover from the noiseless to noisy regime, Advances in Neural Information Processing Systems 34 (2021) 10131–10143.
Y. Li, H. Zhang, Q. Lin, On the asymptotic learning curves of kernel ridge regression under power-law decay, in: Thirty-Seventh Conference on Neural Information Processing Systems, 2023.
A. Caponnetto, E. De Vito, Optimal rates for the regularized least-squares algorithm, Foundations of Computational Mathematics 7 (2007) 331–368. doi:10.1007/s10208-006-0196-8.
L. Rosasco, E. De Vito, A. Verri, Spectral methods for regularization in learning theory, DISI, Universita degli Studi di Genova, Italy, Technical Report DISI-TR-05-18 (2005).
L. L. Gerfo, L. Rosasco, F. Odone, E. D. Vito, A. Verri, Spectral algorithms for supervised learning, Neural Computation 20 (2008) 1873–1897. doi:10.1162/neco.2008.05-07-517.
G. Blanchard, N. Mu ̈cke, Optimal rates for regularization of statistical inverse learning problems, Foundations of Computational Mathematics 18 (2018) 971–1013. doi:10.1007/s10208-017-9359-7.
J. Lin, A. Rudi, L. Rosasco, V. Cevher, Optimal rates for spectral algorithms with least-squares regression over Hilbert spaces, Applied and Computational Harmonic Analysis 48 (2018) 868–890. doi:10.1016/j.acha.2018.09.009.
I. S. a. Andreas Christmann, Support Vector Machines, Information Science and Statistics, 1 ed., Springer-Verlag New York, New York, NY, 2008. doi:10.1007/978-0-387-77242-4.
I. Steinwart, D. R. Hush, C. Scovel, et al., Optimal Rates for Regularized Least Squares Regression., in: COLT, 2009, pp. 79–93.
S.-R. Fischer, I. Steinwart, Sobolev norm learning rates for regularized least-squares algorithms, Journal of Machine Learning Research 21 (2020) 205:1–205:38.
H. Zhang, Y. Li, W. Lu, Q. Lin, On the optimality of misspecified kernel ridge regression, in: International Conference on Machine Learning, 2023.
T. Zhang, B. Yu, Boosting with early stopping: Convergence and consistency, The Annals of Statistics 33 (2005) 1538–1579. doi:10.1214/009053605000000255.
Y. Yao, L. Rosasco, A. Caponnetto, On early stopping in gradient descent learning, Constructive Approximation 26 (2007) 289–315. doi:10.1007/s00365-006-0663-2.
F. Bauer, S. Pereverzev, L. Rosasco, On regularization algorithms in learning theory, Journal of complexity 23 (2007) 52–72. doi:10.1016/j.jco.2006.07.001.
A. Caponnetto, Optimal rates for regularization operators in learning theory (2006).
H. Zhang, Y. Li, Q. Lin, On the optimality of misspecified spectral algorithms, 2023. doi:10.48550/arXiv.2303. 14942. arXiv:2303.14942.
A. Rakhlin, X. Zhai, Consistency of interpolation with Laplace kernels is a high-dimensional phenomenon, 2018. arXiv:1812.11167.
S. Buchholz, Kernel interpolation in Sobolev spaces is not consistent in low dimensions, in: Conference on Learning Theory, PMLR, 2022, pp. 3410–3440.
28

Li et al. Generalization of Spectral Algorithms
D. Beaglehole, M. Belkin, P. Pandit, Kernel ridgeless regression is inconsistent in low dimensions, 2022. doi:10. 48550/arXiv.2205.13525. arXiv:2205.13525.
Y. Li, H. Zhang, Q. Lin, Kernel interpolation generalizes poorly, Biometrika (2023) asad048. doi:10.1093/biomet/ asad048. arXiv:2303.15809.
N. Mallinar, J. B. Simon, A. Abedsoltan, P. Pandit, M. Belkin, P. Nakkiran, Benign, tempered, or catastrophic: A taxonomy of overfitting, 2022. doi:10.48550/arXiv.2207.06569. arXiv:2207.06569.
T. Liang, A. Rakhlin, Just interpolate: Kernel ”ridgeless” regression can generalize, The Annals of Statistics 48 (2020). doi:10.1214/19-AOS1849. arXiv:1808.00387.
B. Ghorbani, S. Mei, T. Misiakiewicz, A. Montanari, Linearized two-layers neural networks in high dimension, 2020. arXiv:1904.12191.
N. Ghosh, S. Mei, B. Yu, The three stages of learning dynamics in high-dimensional kernel methods, 2021. arXiv:2111.07167.
F. Liu, Z. Liao, J. A. K. Suykens, Kernel regression in high dimensions: Refined analysis beyond double descent, 2021. doi:10.48550/arXiv.2010.02681. arXiv:2010.02681.
W. Lu, H. Zhang, Y. Li, M. Xu, Q. Lin, Optimal rate of kernel regression in large dimensions, 2023. arXiv:2309.04268.
I. Steinwart, C. Scovel, Mercer’s Theorem on General Domains: On the Interaction between Measures, Kernels, and RKHSs (2012). doi:10.1007/S00365-012-9153-3.
F. Dai, Y. Xu, Approximation Theory and Harmonic Analysis on Spheres and Balls, Springer Monographs in Mathematics, Springer New York, New York, NY, 2013. doi:10.1007/978-1-4614-6660-4.
T. Hsing, R. Eubank, Theoretical Foundations of Functional Data Analysis, with an Introduction to Linear Operators, Wiley Series in Probability and Statistics, 1 ed., Wiley, 2015. doi:10.1002/9781118762547.
B. Simon, Operator Theory, American Mathematical Society, Providence, Rhode Island, 2015. doi:10.1090/simon/ 004.
H. Zhang, Y. Li, W. Lu, Q. Lin, Optimal rates of kernel ridge regression under source condition in large dimensions, 2024. arXiv:2401.01270.
M. J. Wainwright, High-Dimensional Statistics: A Non-Asymptotic Viewpoint, Cambridge Series in Statistical and Probabilistic Mathematics, Cambridge University Press, 2019. doi:10.1017/9781108627771.
J. A. Tropp, An introduction to matrix concentration inequalities, 2015. doi:10.48550/arXiv.1501.01571. arXiv:1501.01571.
29

Li et al. Generalization of Spectral Algorithms
A Auxiliary results
This elementary proposition justifies the equivalence between (5) and (6) in Assumption 1.
Proposition A.1. Let (aj)j≥1 be a sequence of positive numbers descending to zero. Then,
aj = Θ(j−β), ⇐⇒ # {j : aj ≥ λ} = Θ(λ−1/β) as λ → 0.
Proof. We notice first that max {j : aj ≥ λ} = # {j : aj ≥ λ} since aj is descending.
(=⇒): Suppose cj−β ≤ aj ≤ Cj−β. Then,
max {j : aj ≥ λ} ≥ max j : cj−β ≥ λ = Ω(λ−1/β).
On the other hand,
max {j : aj ≥ λ} = min {j : aj+1 < λ} ≤ min j : C(j + 1)−β < λ = O(λ−1/β).
(⇐=): Let N (λ) = max {j : aj ≥ λ} and suppose cλ−1/β ≤ N (λ) ≤ Cλ−1/β. We notice that N (λ) ≥ j implies aj ≥ λ, so
aj ≥ sup {λ : N (λ) ≥ j} ≥ sup
n
λ : cλ−1/β ≥ j
o
= Ω(j−β).
On the other hand, N (λ) < j implies aj < λ, so
aj ≤ inf {λ : N (λ) < j} ≤ inf
n
λ : Cλ−1/β < j
o
= O(j−β).
Proposition A.2. Let (λj)j≥1 be the descending sequence of eigenvalues counting multiplicities. Let us define
Φ(ε) = # {j : λj ≥ ε} . (73)
Suppose φλ is a filter function satisfying (17) and (18). Then, for any p ≥ 1 and λ > 0, we have
2−pΦ(2F1λ) ≤ Np,φ(λ) ≤ pEpλ−1
Zλ
0
Φ(x)dx. (74)
In particular, if Assumption 1 is satisfied, then
Np,φ(λ) = Θ λ−1/β , as λ → 0. (75)
Proof. We first deal with the upper bound. The property (17) of filter function yields
zφλ(z) ≤ E z
λ + z ≤ E min(1, λ−1z)
Consequently,
Np,φ(λ) =
∞
X
j=1
[λj φλ(λj )]p ≤ Ep
∞
X
j=1
min(1, λ−pλp
j ) = Epλ−p
∞
X
j=1
min(λ, λj)p.
Now, noticing that p R a
0 xp−1dx = ap, we have
∞
X
j=1
min(λ, λj)p =
∞
X
j=1
p
Z min(λ,λj )
0
xp−1dx
=p
Z∞
0


∞
X
j=1
1 {min(λ, λj) ≥ x}

 xp−1dx
=p
Zλ
0
Φ(x)xp−1dx.
30

Li et al. Generalization of Spectral Algorithms
Therefore, it shows that
Np,φ(λ) ≤ pEpλ−p
Zλ
0
Φ(x)xp−1dx ≤ pEpλ−1
Zλ
0
Φ(x)dx, (76)
where the last inequality comes from x/λ ≤ 1 when x ≤ λ.
For the lower bound, first, (18) gives ψλ(z) ≤ F1λz−1. Together with zφλ(z) = 1 − ψλ(z), we get
zφλ(z) = 1 − ψλ(z) ≥ 1 − F1λz−1 ≥ 1
2 , ∀z ≥ 2F1λ.
Consequently, denoting λ ̃ = 2F1λ, we have
Np,φ(λ) =
∞
X
j=1
[λj φλ(λj )]p
≥
X
j≤Φ(λ ̃)
[λj φλ(λj )]p
≥
X
j≤Φ(λ ̃)
2−p = 2−pΦ(2F1λ).
Finally, if Assumption 1 is satisfied, then Proposition A.1 implies Φ(λ) ≍ λ−1/β, where 1/β < 1, so
λ−1
Zλ
0
Φ(x)dx ≤ Cλ−1
Zλ
0
x−1/β dx ≤ Cλ−1 · λ1−1/β = Cλ−1/β ,
showing that the two sides in (74) have the same order of λ−1/β.
Proposition A.3. Let (am)m≥1 be a descending sequence of positive numbers and (bm)m≥1, (cm)m≥1 be two sequence of positive numbers satisfying
m
X
k=1
bk ≤
m
X
k=1
ck, ∀m ≥ 1.
Then, for any N ≥ 1,
N
X
m=1
ambm ≤
N
X
m=1
amcm.
Proof. Using Abel’s summation formula, we have
N
X
m=1
ambm =
N −1
X
m=1
(am − am+1)
m
X
k=1
bk + aN
N
X
k=1
bk
≤
N −1
X
m=1
(am − am+1)
m
X
k=1
ck + aN
N
X
k=1
ck =
N
X
m=1
amcm.
A.1 General filter functions
The following is a well-known elementary property related to φKR
λ:
Proposition A.4. For λ > 0 and α ∈ [0, 1], we have
zα
z + λ ≤ λα−1. (77)
31

Li et al. Generalization of Spectral Algorithms
Lemma A.5. Let φλ be a filter function defined in Definition 2.3. Then, for s ∈ [0, 1],
sup
z ∈[0,κ2 ]
φλ(z)zs ≤ Eλs−1. (78)
Also, suppose (18) is satisfied for τ , then the constant Fr satisfies
Fr ≤ F 1− r
τ
0F
r
ττ , ∀r ∈ [0, τ ]. (79)
Moreover, when z ≤ λ
2E , we have ψλ(z) ≥ 1/2.
Proof. The first inequality is a consequence of (17) and (77). The second one comes from
zrψλ(z) = ψλ(z)1− r
τ (zτ ψλ(z)) r
τ ≤ F 1− r
τ
0 (Fτ λτ ) r
τ = F 1− r
τ
0F
r
ττ λr.
For the last one, we notice that φλ(z) ≤ Eλ−1, so when z ≤ λ
2E ,
ψλ(z) = 1 − zφλ(z) ≥ 1 − λ
2E Eλ−1 = 1
2.
A.2 Concentration inequalities
See, for example Wainwright (2019, Proposition 2.5) for the standard Hoeffding’s inequality.
Lemma A.6 (Hoeffding’s inequality). Let ξ, ξ1, . . . , ξn be i.i.d. random variables such that |ξ| ≤ B almost surely. Then, for any δ ∈ (0, 1), with probability at least 1 − δ we have
1 n
n
X
i=1
ξi − Eξ ≤
r
2B2
n ln 2
δ . (80)
The following inequality about vector-valued random variables is well-known in the literature (Caponnetto and De Vito, 2007).
Lemma A.7. Let H be a separable Hilbert space. Let ξ, ξ1, . . . , ξn be i.i.d. random variables taking values in H. Assume that
E∥ξ − Eξ∥m
H≤1
2 m!σ2Lm−2, ∀m = 2, 3, . . . . (81)
Then for fixed δ ∈ (0, 1), one has
P
(
1 n
n
X
i=1
ξi − Eξ
H
≤2 L
n + √σn ln 2
δ
)
≥ 1 − δ. (82)
Particularly, a sufficient condition for (81) is
∥ξ∥H ≤ L
2 a.s., and E∥ξ∥2
H ≤ σ2.
The following Bernstein’s inequality for random self-adjoint Hilbert-Schmidt operators is commonly used in the literature (e.g., Li et al. (2023, Lemma B.5)), which is a slightly modified version of its original form (Tropp, 2015, Theorem 7.7.1).
Lemma A.8. Let H be a separable Hilbert space. Let A1, . . . , An be i.i.d. random variables taking values of selfadjoint Hilbert-Schmidt operators on H such that E(A1) = 0, ∥A1∥ ≤ L almost surely for some L > 0 and
E(A21) ⪯ V for some positive trace-class operator V . Then, for any δ ∈ (0, 1), with probability at least 1 − δ we have
1 n
n
X
i=1
Ai ≤ 2LB
3n + 2∥V ∥B
n
1/2
, where B = ln 4 Tr V
δ∥V ∥ .
32

Li et al. Generalization of Spectral Algorithms
B Omitted proofs
B.1 Regular RKHS
Proof of Proposition 2.2. It is shown in Fischer and Steinwart (2020, Theorem 9) that the norm of embedding
∥[H]α ,→ L∞(X , μ)∥ = kα
μ L∞ := ess sup
x∈X , μ
∞
X
i=1
λα
i ei(x)2 = ess sup
x∈X , μ
∞
X
m=1
μα
m
dm
X
l=1
|em,l(x)|2 (83)
Then, recalling Assumption 2, Proposition A.3 with a limit argument yields
∞
X
m=1
μα
m
dm
X
l=1
|em,l(x)|2 ≤ M
∞
X
m=1
dmμα
m
=M
∞
X
i=1
λα
i ≤M
∞
X
i=1
i−αβ ,
so the norm of the embedding is finite as long as α > 1/β.
B.1.1 Dot-product kernel on the sphere
Let X = Sd be the d-dimensional sphere and μ be the uniform measure on Sd. Then, classical results (Dai and Xu, 2013) shows that the eigen-decomposition of the spherical Laplacian ∆Sd gives an orthogonal direct sum decomposition
L2(Sd) =
∞
M
m=0
Hd
m(Sd),
where Hdm(Sd) consists of the restriction of n-degree homogeneous harmonic polynomials with d + 1 variables on
Sd and Hdm(Sd) is an eigenspace of ∆Sd associated with eigenvalue −m(m + d − 1). Moreover, the dimension of
Hdm(Sd) is given by
am := dim Hd
m(Sd) = m + d
m − m−2+d
m − 2 ≍ md−1,
and also P
k≤m ak = m+d
m + m−1+d
m−1 ≍ md.
Moreover, the reproducing kernel Zm(x, y) of Hdm(Sd) is well-defined and unique, which can be given explicitly by
Zm(x, y) =
am
X
l=1
Ym,l(x)Ym,l(y),
where {Ym,l}am
m=1 is an arbitrary orthonormal basis of Hdm(Sd). Let us denote by Cλm the Gegenbauer polynomial, which is often defined by the following power series
∞
X
m=0
Cλ
m(t)αm = 1
(1 − 2tα + α2)λ . (84)
Then, when d ≥ 2, we have
Zm(x, y) = n + λ
λ Cλ
m(u), u = ⟨x, y⟩ , λ = d − 1
2 . (85)
Also, Dai and Xu (2013, Corollary 1.27) shows that
Zm(x, x) = n + λ
λ Cλ
m(1) = dim Hd
m(Sd). (86)
Furthermore, we have the following Funk-Hecke formula (Dai and Xu, 2013, Theorem 1.2.9).
33

Li et al. Generalization of Spectral Algorithms
Proposition B.1 (Funk-Hecke formula). Let d ≥ 3 and h be an integrable function such that R 1
−1 |h(t)|(1 −
t2)(d−2)/2dt is finite. Then for every Ym ∈ Hdm(Sd),
Z
Sd
h(⟨x, y⟩)Ym(y)dμ(y) = μm(h)Ym(x), ∀x ∈ Sd, (87)
where μm(h) is a constant defined by
μm(h) = ωd
Z1
−1
h(t) Cλm(t)
Cλm(1) (1 − t2) d−2
2 dt,
and ωd is the surface area of the unit sphere Sd.
Comparing (2) and (87), we conclude that Hdm(Sd) is an eigenspace of T corresponding to the eigenvalue μm = μm(h). Consequently, we get Zm = km and hence according to (86), we have
km(x, x) = Zm(x, x) = dim Hd
m(Sd) = dim Vm,
so Assumption 2 holds for M = 1.
B.1.2 Dot-product kernel on the ball
The case of the ball is similar to the case of the sphere. We refer to Dai and Xu (2013, Section 11) for more details. Let us consider the d-dimensional unit ball X = Bd = {x ∈ Rd+1 : ∥x∥ ≤ 1} with μ be proportional to the classical
weight W (x) = (1 − ∥x∥2)−1/2. Let us denote by Vmd the space of orthogonal polynomials of degree exactly n with respect to the inner product
⟨f, g⟩W = cW
Z
Bd
f (x)g(x)W (x)dx,
where cW is a normalization constant. Then, we have
dim V d
m = m+d−1
m.
Moreover, we have the following analog of the Funk–Hecke formula (Dai and Xu, 2013, Theorem 11.1.9):
Proposition B.2 (Funk-Hecke formula). Let λ = d−1
2 and h be an integrable function such that R 1
−1 |h(t)|(1 −
t2)λ−1/2dt is finite. Then for every Pm ∈ Vmd ,
cW
Z
Bd
h(⟨x, y⟩)Pm(y)W (y)dy = μm(f )Pm(x), ∀x ∈ Bd, (88)
where μm(h) is a constant defined by
μm(h) = cλ
Z1
−1
h(t) Cλm(t)
Cλm(1) (1 − t2)λ− 1
2 dt,
and cλ is a constant that μ0(1) = 1.
Consequently, for any inner product kernel k(x, y) = h(⟨x, y⟩), Vmd consists of an eigenspace of T corresponding to the eigenvalue μm = μm(h).
Moreover, Dai and Xu (2013, Corollary 11.1.8) shows that the reproducing kernel km for Vmd is
km(x, y) = n + λ
2λ Cλ
n (⟨x, y⟩ + xd+1yd+1) + Cλ
n (⟨x, y⟩ − xd+1yd+1) ,
where xd+1 =
q
1 − ∥x∥2, yd+1 =
q
1 − ∥y∥2. Consequently,
km(x, x) = n + λ
2λ Cλ
n (1) + Cλ
n (2∥x∥2 − 1) ≤ n + λ
λ Cλ
n (1) = n + λ
λ
Γ(2λ + n) Γ(2λ)n!
where we use Dai and Xu (2013, Eq. (B.2.2)) for Cnλ(1). Expanding the expression with λ = (d − 1)/2, we get
n+λ λ
Γ(2λ + n)
Γ(2λ)n! / dim V d
n = 2n + d − 1
n + d − 1 ≤ 2,
so Assumption 2 also holds with M = 2.
34

Li et al. Generalization of Spectral Algorithms
B.2 Analytic filter functions
To further analyze the properties of filter functions in the complex plane, let us first recall some results in complex analysis.
Proposition B.3 (Maximum modulus principle). Let f be an analytic function on an open set Ω and K ⊂ Ω be a compact set. Then
sup
z∈K
|f (z)| = sup
z∈∂K
|f (z)|.
Proposition B.4. The filter functions of KRR (Example 2.4), iterated ridge (Example 2.5) and gradient flow (Example 2.6) satisfy Assumption 3.
Proof. In the case of KRR, this conclusion is trivial. (I) Conditions (C1), iterated ridge and gradient flow: Define H = {z ∈ C : Re(z) ≥ − λ
2 }. Note that the filter
functions of gradient flow and iterated ridge are both in the form of φλ(z) = g(u)/(λu) for some analytic function
g(u) on H, where u = z/λ. Specifically, for iterated ridge, g(u) = 1 − 1
(u+1)p . For gradient flow, g(u) = 1 − e−u.
Note that g(u)
u can be extended to a analytic function on H. Hence,
|(z + λ)φλ(z)| = |(u + 1)g(u)/u| =: G(u) > 0
can also be considered as an analytic function on H. In the case of iterated ridge, lim sup|u|→∞ G(u) = lim sup|u|→∞ g(u) = 1 is finite. As a result, supu∈H G(u) < ∞ which means that condition (C1) holds. The filter
function of gradient flow also satisfies this condition owing to lim sup|u|→∞ g(u) ≤ supu∈H g(u) ≤ 1 + √e < ∞. (II) Condition (C2), iterated ridge and gradient flow: In the case of iterated ridge,
z+λ
λ ψIT,p
λ (z) = |λ|
|z + λ|
p−1
≤ 2p−1
for all z satisfying Re(z) ≥ − λ
2 . As for gradient flow, when Re(z) ≤ 0 and z ∈ Dλ,
z+λ
λ ψGF
λ (z) = z + λ
λ eRe(− z
λ) ≤ 5
2
√e.
If Re(z) > 0 and z ∈ Dλ,
z+λ
λ ψGF
λ (z) ≤ 2(1 + Re(z)
λ )eRe(− z
λ ).
Note that function f (x) := (1 + x)e−x monotonly decreases on [0, +∞). Hence, z+λ
λ ψGF
λ (z) ≤ 2.
Proposition B.5. The filter function of gradient descent (Example 2.7) satisfyies Assumption 3.
Proof. For condition (C1), Note that (z + λ)φGD
λ (z) can be extended to be an analytic function on Dλ. According
to Proposition B.3, we only need to prove that supz∈Γλ (z + λ)φGD
λ (z) is controled by a constant independent of λ.
Actually, for all z ∈ Γλ, |z+λ|
|z| ≤ 1 + |λ|
|z| ≤ 3 and |1 − ηz| 1
ηλ ≤ 1 + 1
2 ηλ
1
ηλ ≤ √e. Hence, condition (C1) also
holds for φGD
λ.
As for condition (C2), we need to demonstrate that
sup
z ∈Dλ ,λ∈(0,ε)
z+λ
λ ψGD
λ (z) = sup
z ∈Dλ ,λ∈(0,ε)
z+λ
λ (1 − ηz) 1
ηλ < ∞
for some constant ε > 0. In fact, when |1 − ηz| ≥ 1,
z+λ
λ (1 − ηz) 1
ηλ ≤ 3
2 1+ 1
2 ηλ
1
ηλ
≤3
2
√e
for all z ∈ Dλ. When |1 − ηz| < 1,
z+λ
λ (1 − ηz) 1
ηλ ≤ 1 + z
λ (1 − ηz) 1
ηλ ≤ 1 + z(1 − ηz) 1
η ≤3
2 + 2κ2
for all z ∈ Dλ and λ ∈ (0, 1).
35

Li et al. Generalization of Spectral Algorithms
B.3 Source condition on the regression function
Proof of Example 3.1. With Assumption 1 and Pm
k=1 dk ≍ mγ , we have μm ≍ m−γβ. Select s = p
β . Then, for all t < s,
∞
X
m=1
f ̄2m
μtm
=O
∞
X
m=1
m−(γp+1)mtγβ
!
=O
∞
X
m=1
m−1−γ(p−βt)
!
< ∞.
Hence, f ∗ ∈ [H]t for all t < s.
On the other hand,
X
m:μm ≤λ
f ̄2
m≥c
X
m≥C λ−(γ β )−1
m−γp−1 = Ω(λ p
β ) = Ω(λs).
Finally, if fj ≍ j−(p+1)/2, we have
f ̄2
m=
Dm
X
j=Dm−1
f2
j≍
Z mγ
(m−1)γ
x−p−1dx ≍ m−(γp+1)
where Dm := Pm
k=1 dk ≍ mγ .
Proof of Example 3.2. Let s = p
qβ . Then, with Assumption 1, for all t < s,
∞
X
j=1
λ−t
j |fj |2 =
∞
X
l=1
λ−t
j(l) fj(l)
2≤C
∞
X
l=1
ltqβ l−(p+1) ≤ C
∞
X
l=1
l−1+(p−tqβ),
where we recall that j(l) ≍ lq and fj(l) ≍ l−(p+1)/2, so f ∗ ∈ [H]t for all t < s.
On the other hand,
X
j:λj ≤λ
|fj |2 =
X
l:λj (l) ≤λ
fj(l)
2≥c
X
l≥C λ−1/(qβ )
l−(p+1) = Ω(λ p
qβ ) = Ω(λs).
B.4 Proof of Lemma 4.20
The proof follows the same idea as the proof of Lemma A.5 and Lemma A.10 in Li et al. (2023), but we establish the results for spectral algorithms and also improve the estimates by Lemma 4.2 using the regular RKHS property. The proof will be divided into two cases: t > 1/β and t ≤ 1/β. For the first case, the regression function f ∗ is L∞-bounded so that we can directly apply the Bernstein inequality. For the second case, we have to apply a truncation technique.
Proof for the case t > 1/β. By the inclusion relation of [H]t, we can replace t with t ̃ = min(t, 2τ ) so now we have t ≤ 2τ . We will use the Bernstein inequality in Lemma A.7. Let us denote
ξ(x) = T − 1
2
λ (Kxf ∗(x) − Txf ∗
λ). (89)
Then, we have
T−1
2
λ [(g ̃X − TX f ∗
λ) − (g − T f ∗
λ)] = 1
n
n
X
i=1
ξ(xi) − Ex∼μξ(x).
Moreover, we have
E∥ξ(x)∥m
H = E T−1
2
λ Kx(f ∗(x) − f ∗
λ (x))
m
H
≤E
h
T−1
2
λ kx
m
H
· E |f ∗(x) − f ∗
λ (x)|m x
i
. (90)
36

Li et al. Generalization of Spectral Algorithms
The first term in (90) is bounded through (37) and Lemma 4.3:
T−1
2
λ kx
2
H
≤ M N1(λ) ≤ Cλ−1/β.
For the second term, since t > 1/β, using the embedding property Proposition 2.2 and also Lemma 4.4, for α ∈ (1/β, t), we have
∥f ∗
λ − f ∗∥L∞ ≤ Mα∥f ∗
λ − f ∗∥[H]α ≤ MαF(t−α)/2∥f ∗∥[H]t λ t−α
2 ≤ CMαRλ t−α
2
Moreover, Lemma 4.4 also implies
E|f ∗
λ (x) − f ∗(x)|2 = ∥f ∗
λ (x) − f ∗(x)∥2
L2 ≤ F 2
t/2∥f ∗∥2
[H]t λt ≤ CR2λt.
Plugging in these estimations in (90), we get
(90) ≤ (Cλ−1/(2β))m · ∥f ∗ − f ∗∥m−2
L∞ · E|f ∗
λ (x) − f ∗(x)|2
≤ (Cλ−1/(2β))m · CMαRλ t−α
2
m−2
· CR2λt
≤1
2 m! CR2λt−1/β CMαRλ t−α−1/β
2
m−2
Consequently, applying Lemma A.7 with
σ2 = CR2λt−1/β , L = CMαRλ t−α−1/β
2.
yields
T−1
2
λ [(g ̃X − TX f ∗
λ ) − (g∗ − T f ∗
λ )]
H
≤ CR
r
λ−1/β
n 1 + Mα
r
λ−α
n
!
λt/2.
Since λ = Ω(n−θ) for some θ < β, choosing α > 1/β sufficiently close to 1/β yields the desired result.
Proof for the case t ≤ 1/β. For this case, we have to apply a truncation technique. To bound the extra error terms caused by truncation, we have to use the following proposition about the Lq embedding of the RKHS (Zhang et al., 2023, Theorem 5).
Proposition B.6. Under Assumption 2, for any 0 < s ≤ α0 and α > α0, we have embedding
[H]s ,→ Lq(X , dμ), q = 2α
α − s . (91)
Now, let us consider ΩB = {x ∈ X : |f ∗(x)| ≤ BR} and
ξ ̄(x) = ξ(x)1ΩB (x)
as ξ is defined in (89), where the choice of B will be determined later. Then,
1 n
n
X
i=1
ξ(xi) − Eξ(x)
H
≤1
n
n
X
i=1
ξ ̄(xi) − Eξ ̄(x)
H
+1
n
n
X
i=1
ξ(xi)1Ω∁
B
(xi)
H
+ Eξ(x)1Ω∁
B
(x)
H
.
(92)
For the first term in (92), we can repeat the same argument in the first case with the extra bound
∥1 {x ∈ Ωr} (f ∗
λ − f ∗)∥L∞ ≤ ∥f ∗
λ ∥L∞ + ∥1 {x ∈ Ωr} f ∗∥L∞
≤ Mα∥f ∗
λ ∥[H]α + BR
≤ MαRλ t−α
2 + BR,
where we apply Lemma 4.4 in the last inequality. Consequently, we get
1 n
n
X
i=1
ξ ̄(xi) − Eξ ̄(x)
H
≤ CR
r
λ−1/β
n 1 + Mαλ−α/2 + Bλ−t/2
√n λt/2, (93)
37

Li et al. Generalization of Spectral Algorithms
For the second term in (92), Proposition B.6 together with Markov’s inequality yields
Pμ(Ω∁
B) = Px∼μ {|f ∗(x)| > BR} ≤ (BR)−q∥f ∗∥q
Lq , (94)
where q = 2α
α−s . Then,
P {xi ∈ ΩB, i = 1, . . . , n} = 1 − Pμ(Ω∁
B)
n
≥ (1 − (BR)−q∥f ∗∥q
Lq )n.
Consequently, as long as
B−q = o 1
n , or equivalently, B = ω n1/q , (95)
we have P {xi ∈ ΩB, i = 1, . . . , n} → 1 and thus the second term in (92) vanishes with high probability when n is large enough.
For the third term in (92),
Eξ(x)1Ω∁
B
(x)
H
≤ E ξ(x)1Ω∁
B
(x)
H
=E
h
1Ω∁
B
(x)(f ∗(x) − f ∗
λ (x)) φ1/2
λ (T )kx H
i
(a)
≤ Cλ−1/(2β)E
h
1Ω∁
B
(x)(f ∗(x) − f ∗
λ (x))
i
(b)
≤ Cλ−1/(2β)∥f ∗ − f ∗
λ ∥L2 P(Ω∁
B)1
2
(c)
≤ Cλ−1/(2β)λt/2B−q/2∥f ∗∥q/2
Lq = C∥f ∗∥q/2
Lq λt/2p
λ−1/βB−q, (96)
where in (a) we apply (37), in (b) we apply Cauchy-Schwarz inequality and in (c) we apply Lemma 4.4 for the L2 norm and (94) for the probability.
Finally, since θ < β, we can choose α ∈ (β−1, θ−1). Then we have
1 − θ/β > 1 − αθ > 0,
and we can choose some l such that
1
q=1
2 (1 − t
α) < l < 1 − θt
2.
Now we set B = nl. Then (95) immediately holds. For the term (93), we have
r
λ−1/β
n = O n−(1−θ/β)/2 , λ−α/2
√n = O n−(1−αθ)/2 , Bλ−t/2
√n = O n−( 1−θt
2 −l) ;
For the term (96), we have
p
λ−1/β B−q = O n−(ql−θ/β)/2 = O n−(1−θ/β)/2 .
Therefore, we prove the desired result since all the exponents are negative.
38

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:02.098Z
- **Text Length:** 92452 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
