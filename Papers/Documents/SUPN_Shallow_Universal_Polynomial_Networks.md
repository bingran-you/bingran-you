# PDF Document: Morrow et al. - 2025 - SUPN Shallow Universal Polynomial Networks.pdf

**File Path:** Morrow et al. - 2025 - SUPN Shallow Universal Polynomial Networks.pdf

**Processed Date:** 2026-02-10T18:18:25.541Z

**File Size:** 3831.25 KB

**Total Pages:** 37

**Extracted Pages:** 37

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3766

**Title:** SUPN: Shallow Universal Polynomial Networks

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

SUPN: SHALLOW UNIVERSAL POLYNOMIAL NETWORKS∗
ZACHARY MORROW† ‡ , MICHAEL PENWARDEN† ‡ , BRIAN CHEN‡ , AURYA JAVEED‡ , AKIL NARAYAN§ , AND JOHN D. JAKEMAN‡
Abstract. Deep neural networks (DNNs) and Kolmogorov–Arnold networks (KANs) are popular methods for function approximation due to their flexibility and expressivity. However, they typically require a large number of trainable parameters to produce a suitable approximation. Beyond making the resulting network less transparent, overparameterization creates a large optimization space, likely producing local minima in training that have quite different generalization errors. In this case, network init-
ialization can have an outsize impact on the model’s out-of-sample accuracy. For these reasons, we propose shallow universal polynomial networks (SUPNs). These networks replace all but the last hidden layer with a single layer of polynomials with learnable coefficients, leveraging the strengths of DNNs and polynomials to achieve sufficient expressivity with far fewer parameters. We prove that SUPNs converge at the same rate as the best polynomial approximation of the same degree, and we derive exp-
licit formulas for quasi-optimal SUPN parameters. We complement theory with an extensive suite of numerical experiments involving SUPNs, DNNs, KANs, and polynomial projection in one, two, and ten dimensions, consisting of over 13,000 trained models. On the target functions we numerically studied, for a given number of trainable parameters, the approximation error and variability are often lower for SUPNs than for DNNs and KANs by an order of magnitude. In our examples, SUPNs even outperform polyno-
mial projection on non-smooth functions.
Key words. Machine learning, approximation theory, neural networks
AMS subject classifications. 41A46, 41A63, 65D15, 65D40, 68T07
1. Introduction. Many scientific applications involve computationally expensive input–output maps, denoted f , resulting from physical systems, such as statespace evolution [60] or the relationship between a model’s parameters and certain quantities of interest [54]. Accordingly, much work has been devoted toward constructing less costly approximations equipped with error estimates or convergence guarantees. One approach is focused on accelerating a numerical solver, such as a finite-element metho-
d, by simplifying a model’s governing equations [35] or constructing a reduced-order model [7] that diminishes the number of unknowns. Though this approach is focused on the physical system and not directly on f , such improvements will nonetheless reduce the expense of constructing f . Another approach is to approximate f directly. In practice, this requires sampling its inputs and outputs, and an approximation constructed this way is called a data-driven surrogate model. The efficiency of this a-
pproach depends on the dimensionality and nonlinearity of f . Many
†Z. M. and M. P. contributed equally to this work. ∗Submitted to the editors on November 25, 2025. Funding: The authors gratefully acknowledge funding from Sandia National Laboratories’ Laboratory Directed Research and Development program. Sandia National Laboratories is a multimission laboratory managed and operated by National Technology and Engineering Solutions of Sandia, LLC, a wholly owned subsidiary of Honeywell International Inc., for the U.S. Department of Energy’s National Nuclear Securi-
ty Administration under contract DE-NA0003525. Any subjective views or opinions that might be expressed in the paper do not necessarily represent the views of the U.S. Department of Energy or the United States Government. The publisher acknowledges that the U.S. Government retains a non-exclusive, paid-up, irrevocable, world-wide license to publish or reproduce the published form of this written work or allow others to do so, for U.S. Government purposes. The DOE will provide public access to resu-
lts of federally sponsored research in accordance with the DOE Public Access Plan. SAND2025-14696O ‡Sandia National Laboratories, 1515 Eubank Blvd SE, Albuquerque, NM 87123 ({zbmorro, mspenwa, brichen, asjavee, jdjakem}@sandia.gov). §Scientific Computing and Imaging Institute and Department of Mathematics, University of Utah, 155 S 1400 E, Room 233, Salt Lake City, UT 84112 (akil@sci.utah.edu).
1
arXiv:2511.21414v1 [cs.LG] 26 Nov 2025

2 Z. MORROW, M. PENWARDEN, ET AL.
methods in this category are understandably focused largely on the high-dimensional case because a system may have a very large number of parameters mapped to some quantity of interest. In this paper, we present a highly expressive method for approximating nonlinear and low-regularity functions, which outperforms state-of-the art alternatives, including deep neural networks and polynomial approximation. Several different varieties of data-driven surrogate models exist, and we will purposefully sav-
e the technical formulation for a later section. Although an exhaustive list is beyond the scope of this paper, we offer a brief description. A data-driven surrogate of an input–output map can be broadly categorized as linear or nonlinear, depending on how the parameters appear within the surrogate’s ansatz. Linear methods express the resultant surrogate as a linear combination of chosen basis functions. This category includes polynomial chaos expansions [24, 75], sparse grids [57, 5], operator in-
ference [60, 6], spectral methods [11, 27], and radial basis functions [10]. In contrast, the parameters of nonlinear methods are embedded within the surrogate’s constituent functions, which are generally nonlinear. The parameters of a nonlinear surrogate are determined with an iterative optimization procedure. Functional tensor trains [26] and deep neural networks (DNNs) are examples of this category. Although linear surrogates are well-established methods with a rich body of theory, DNNs have at-
tracted significant contemporary interest due to their flexibility and expressivity, resulting in a proliferation of architectures [16, 29, 64, 49, 72] and bespoke adaptations tailored to specific problems, such as AlphaFold [37]. Nonetheless, the search for a sufficiently accurate DNN is often hampered by vanishing or exploding gradients, as well as an unwieldy number of trainable parameters. Theoretical results establish that feedforward networks, also known as multi-layer perceptrons (MLPs), ca-
n approximate continuous functions arbitrarily well [32, 31, 16]. An alternative to the MLP is the Kolmogorov–Arnold network (KAN), based on the KolmogorovArnold representation theorem [3, 42, 9]. In contrast to MLPs, KANs have learnable parameters within their activation functions, which are parametrized as, e.g., splines [19] or Chebyshev polynomials [4, p. 211]. In fact, KANs with a linear spline basis are equivalent to MLPs with a ReLU activation function [2]. Neural networks (NNs) have also b-
een extended to learn discretizations of operators between function spaces. Kernel-based methods such as the Fourier neural operator (FNO) [46] and kernel neural operator (KNO) [50] seek to learn a sequence of kernel integral operators. Deep operator networks (DeepONets) [51] are an alternative approach consisting of two NNs, one learning a set of basis functions and the other learning a set of coefficients. We avoid the previously discussed issues in deep learning of functions by adopting a funda-
mentally shallow approach. We introduce a single-layer tanh-activated network with an initial lift consisting of Chebyshev polynomials, which we call a shallow universal polynomial network (SUPN). This function-approximation method leverages the power of both polynomial approximation and NNs (via a nonlinear activation function) to produce an approximation that is both parsimonious and robust with respect to network parameter initialization. Our numerical experiments indicate that SUPNs are compet-
itive against DNNs and KANs on smooth target functions, and they are competitive against polynomial projection on nonsmooth targets. Moreover, we observed that SUPNs perform at least as well as DNNs or KANs when the target function has tensor-product structure. Figure 1 shows a visual comparison of SUPNs with other methods. SUPNs differ from MLPs through the Chebyshev lift, and they differ from KANs through the use of fixed activation functions and a single layer. In particular, previous discussio-
ns of Chebyshev KANs [66, 65] adopted a deep-learning approach that composed tanh

SHALLOW UNIVERSAL POLYNOMIAL NETWORKS 3
activated Chebyshev layers together. In addition, [77] proposed a Chebyshev feature map where the learnable parameters are not basis coefficients but instead generalized “degrees” of Chebyshev polynomials; those networks still use a deep MLP after the Chebyshev lift. The term polynomial networks has historically referred to methods that utilize polynomial activation functions. Despite the similarity in naming conventions, our method has little in common with these prior models, such as polynomial -
neural networks (PNNs) [18, 38, 30], deep PNNs [40, 13, 43], and sum-product networks [63]. What unites these methods is that they are reformulations or extensions of the socalled Group Method of Data Handling [33], which builds hierarchical polynomial regressions and is equivalent to an MLP with polynomial activation functions. However, it is well-established that MLPs with polynomial activation functions are not universal approximators [45, 67, 62]. In contrast, our proposed method, based on lin-
ear combinations of tanh-activated polynomials, is a universal approximator. To motivate the derivation of SUPNs, enable their analysis, and demonstrate their approximation capabilities, the rest of the paper is organized as follows. Section 2 provides a general framework for data-driven surrogate modeling and error estimation, as well as basic formulations of polynomial projection, MLPs, and KANs. Section 3 presents the mathematical formulation of SUPNs and proves two universal approximation theo-
rems. Section 4 discusses the second-order optimizer utilized for training. Section 5 studies several examples comparing SUPNs, polynomial projection, DNNs, and KANs in one, two, and ten dimensions. Existing literature currently lacks a systematic comparison of machine learning methods against polynomial approximations. Section 6 summarizes our findings and discusses possible extensions of this work. For convenience, Appendix A summarizes the notation used throughout this paper.
Fig. 1. Illustration of function approximators considered in this work. Note that MLPs and KANs are shown in their single layer form for comparison, but are most often used in a deep (manylayer) configuration compared to SUPNs, which are always a single layer.
2. Surrogate models. Consider a model f mapping D bounded inputs to Q outputs. We can denote this model as f : RD ⊃ Ω → RQ.1 The first step of surrogate modeling is to define a space F of candidate functions, parameterized by an ansatz
1Without loss of generality, we may take Ω = [−1, 1]D since a compact interval [a, b] can be mapped to [−1, 1] with a straightforward affine transformation. We also often take Q = 1 for convenience, since the multi-output case constructs a scalar-valued result for each output dimension.

4 Z. MORROW, M. PENWARDEN, ET AL.
g ̄ = g ̄(· ; θ) and θ ∈ RP such that Fθ = {g ̄(· ; θ) : θ ∈ RP }. At the highest level, the goal of surrogate modeling is to find a suitable approximation fˆ ∈ Fθ. With p ≥ 1 and μ a positive measure on Ω, the best approximation of f by Fθ in the μ-weighted Lp(Ω) norm is
fˆ := arg min
g∈Fθ
(2.1) ∥f − g∥Lpμ .
An alternative form of (2.1), which will become useful later, is
(2.2) fˆ = g ̄(· ; θˆ), θˆ = arg min
θ∈RP
∥f − g ̄(· ; θ)∥Lpμ .
The choice of norm and g ̄ in (2.2) are crucial to the accuracy of fˆ. Common choices of g ̄ are degree-n polynomials (denoted Pn), sines and cosines with maximum frequency n, or neural networks of a given width and depth. Well-established theory exists for these ansatzes, and we will review some of this theory later in this section. In practice, surrogates are constructed instead from a finite amount of data because the explicit functional form of f is rarely available. In the supervised learning-
 context, one collects K ∈ N input–output pairs {(xk, f (xk))}k∈[K], where [K] :=
{1, . . . , K}. Data-driven surrogates approximate the continuous Lp norms with a corresponding discrete lp norm. The discrete minimization problem becomes
f ̃ = g ̄(· ; θ ̃), θ ̃ = arg min
θ∈RP
∥g ̄(θ) − f ∥lpw(RK ),
g ̄ = (g ̄(xk; θ))k∈[K] , f = (f (xk))k∈[K] ,
(2.3)
which is a direct adaptation of the best-approximation problem (2.2). The weights w ∈ RK are chosen to approximate the integral in the Lp norm using a quadrature rule, for example wk = 1/K. The final step is to minimize (2.3). Popular optimization methods include grid search and gradient-based optimizers. Grid searches discretize the feasible set for θ and take the discrete minimum. However, grid searches often do not provide optimality guarantees, and P is typically quite large, so the number of -
samples required to cover the sample space (e.g., with low discrepancy) is practically prohibitive. Alternatively, when using gradient-based optimizers, the lp should be differentiable. As a result, practical implementation uses (2.3) with the l2 norm, yielding the familiar loss-minimization problem with mean-squared error (MSE):
(2.4) θ ̃ = arg min
θ∈RP
L(θ), L(θ) = ∑
k∈[K ]
wk (g ̄(xk; θ) − f (xk))2 .
In the special case where g ̄ depends linearly on θ, the minimizer θ ̃ is the solution to a linear system, which is significantly cheaper to solve than the nonlinear case.
2.1. Ansatzes. We now present three prominent choices of the ansatz g ̄. These ansatzes have associated theory that will be crucial in the theoretical analysis of section 3, and they will be used for comparison in section 5.
2.1.1. Polynomials. Consider how to approximate a function f : Ω → R with polynomials in some norm. For this paper, there are two important cases to consider: the L∞ norm and the L2 norm. The first case is addressed in the following theorems, which will be needed in the proofs of section 3.

SHALLOW UNIVERSAL POLYNOMIAL NETWORKS 5
Theorem 2.1 (Stone–Weierstrass [15, 69, 74]). Let f : Ω → R be continuous and Ω ⊂ RD be compact. For any ε > 0, there exists a polynomial q : Ω → R such that ∥f − q∥L∞ < ε.
Theorem 2.2 (Jackson’s inequality [34]). Let f ∈ Ck([−1, 1], R) with f (k) Lipschitz continuous. There exists a constant βk > 0 such that, for every n ≥ 1, there is a polynomial qn ∈ Pn for which
∥f − qn∥L∞ ≤ βk n−(k+1) .
Now consider a polynomial approximation of degree at most P in the unweighted L2 norm. For simplicity, we address D = 1. This corresponds to (2.2) with the L2 norm and
(2.5) g ̄P (x; θ) = ∑
p∈[P −1]0
θp Lp(x),
where [P − 1]0 := {0, . . . , P − 1} and Lp is the Legendre polynomial of degree p. The Legendre polynomials satisfy
⟨Ln, Lm⟩ = δnm
2
2n + 1 .
where
⟨f, g⟩L2μ(Ω) :=
∫
Ω
f (x)g(x) dμ(x) , ∥f ∥2L2μ(Ω) := ⟨f, f ⟩L2μ(Ω) .
In this case, the coefficients of the best approximation are
θˆp = ⟨Lp, f ⟩
⟨Lp, Lp⟩ = ⟨f, Lp⟩ 2p + 1
2,
and we have
Pli→m∞ ∥f − g ̄P ∥L2 = 0 .
The data-driven setting approximates ⟨f, φp⟩ with a quadrature rule
(2.6) θ ̃p = ∑
k∈[K ]
wkf (xk)Lp(xk) .
Projection in higher dimensions. It will later become necessary to consider D ≥ 2. In that case, the notion of “degree” must be generalized to allow for differing amounts of cross-interaction terms among the input space. This is accomplished by replacing the sum over p ∈ [P − 1]0 with a sum over p ∈ Λ ⊂ N0d, where Λ is a lower set and the multi-dimensional Legendre polynomials are products of the univariate ones:
Lp(x) =
D
∏
d=1
Lpd (xd) .
Definition 2.3 (Lower set [12]). A set Λ ⊂ N0D is called lower (or downwardclosed) if and only if, for each i ∈ Λ, {j : j ≤ i} ⊂ Λ. Here, j ≤ i if and only if jd ≤ id for all d ∈ [D].

6 Z. MORROW, M. PENWARDEN, ET AL.
0 10
i1
0
5
10
i2
Λ
TD(10)
0 10
i1
0
5
10
i2
Λ
HC(10)
Fig. 2. Two examples of lower sets, the total-degree space (left) and hyperbolic cross-section (right).
Example 2.4. Two common examples of lower sets are the hyperbolic-cross and total-degree spaces, shown in Figure 2 and given by
ΛHC(M ) =
{
i ∈ N0D :
D
∏
d=1
(id + 1) ≤ M + 1
}
(2.7) ,
ΛTD(M ) =
{
i ∈ N0D :
D
∑
d=1
id ≤ M
}
(2.8) ,
respectively.
2.1.2. Multi-layer perceptrons. A multi-layer perceptron (MLP) is given by
(2.9)

 

f ̃(x) = W LyL(x) yk+1(x) = σ(W kyk(x) + bk), k ∈ [L − 1]
y1(x) = σ(W 0 x + b0)
.
Here, L is the network depth, N = dim(bk) is the uniform network width, and σ(x) is a non-polynomial activation function applied component-wise. The network parameters θ are the concatenation of the entries of each W k and bk. By counting the size of each W k and bk, the total number of parameters is P = N (D + 2) + (L − 1)(N 2 + N ). We now state two universal approximation theorems for MLPs that will be foundational for the proofs in section 3.
Theorem 2.5 (Shallow, wide MLPs [62]). Let both f : Ω → RQ and σ : R → R be continuous. Let the network depth be fixed at L = 1. Then σ is non-polynomial if and only if, for any ε > 0, there exists N ∈ N, W 0 ∈ RN×D, b0 ∈ RN , and W 1 ∈ RQ×N
such that f ̃ in (2.9) satisfies
sup
x∈Ω
∥f (x) − f ̃(x)∥l∞(RQ) < ε
where σ(·) is applied componentwise.
Theorem 2.6 (Deep, narrow MLPs [39]). Let f : Ω → RQ be continuous, and let σ : R → R be non-affine. Let the network width N be fixed such that N ≥ D + Q + 2.

SHALLOW UNIVERSAL POLYNOMIAL NETWORKS 7
Then there exists L ∈ N, weights {W k}k∈[L]0 , and biases {bk}k∈[L−1]0 such that f ̃(x) in (2.9) satisfies
sup
x∈Ω
∥f (x) − f ̃(x)∥l∞(RQ) < ε .
2.1.3. Kolmogorov–Arnold networks. A deep KAN [49, Eq. 2.10–2.12] has the form
(2.10) f ̃(x) = ΦL ◦ ΦL−1 ◦ · · · Φ0(x)
where the KAN layer Φl : RNl → RNl+1 is defined as
(2.11) (Φl(z))k = W l SiLU(z) + ∑
j ∈[Nl ]
φ(p)
l,k,j (zj ),
where l ∈ [L]0, k ∈ [Nl+1], and W l ∈ RNl+1×Nl . For a given spline order p, the functions φ are univariate B-splines of the form
φ(p)(x) = ∑
n∈[G]
αnBn,p(x),
where G is the size of the grid partition {xn}n∈[G]. The splines themselves are defined recursively via
Bn,0 :=
{
1, xn ≤ x < xn+1 0, otherwise
and, for p > 0,
Bn,p(x) := x − xn
xn+p − xn
Bn,p−1(x) + xn+p+1 − x
xn+p+1 − xn+1
Bn+1,p−1(x).
The network parameters θ are the concatenation of W l and all B-spline coefficients over all KAN layers.
2.2. Empirical accuracy estimation. To evaluate the effectiveness a surrogate model, we identify some useful metrics such as best approximation error, sampling error, and training robustness. We will utilize these metrics in section 5. For clarity of presentation, we take D = 1 here.
2.2.1. Best approximation error. This error is determined purely by the choice of θ ∈ RP . The error under consideration is
(2.12) ε(θˆ) := inf
g∈F ∥f − g∥Lpμ = ∥f − fˆ∥Lpμ ,
where fˆ is defined in (2.2).
2.2.2. Sampling error. This error is due to the replacement of the continuous L2 norm in (2.2) with an empirical norm. Using this norm, we seek to minimize the empirical training loss (2.4). The corresponding generalization error is given by
ε(θ ̃) = ∥f − f ̃∥L2μ

8 Z. MORROW, M. PENWARDEN, ET AL.
where f ̃ is given by (2.3). The meaningful indicator about the effect of sampling would be a comparison between ε(θˆ) and ε(θ ̃). Fixing K, we examine three potential choices of grids on [−1, 1], where k ∈ [K]: • Uniform sampling:
xk
ii∼d U ([−1, 1]), wk = 2/K
• Equidistant sampling:
xk = −1 + 2(k − 1)
K − 1 , wk = 2/K
• Gauss–Legendre quadrature [4, p. 276]:
{xk}k∈[K] = L−1
K ({0}), wk = −2
(K + 1)LK+1(xk)L′
K (xk)
2.2.3. Training robustness. When numerically optimizing the parameters of a nonlinear surrogate, typically we can only discover various local minima of (2.4) instead of a global minimum. However, different local minima of the training loss can result in dramatically different generalization error. Much attention has been given to the proper initialization of network weights for desirable generalization error, e.g. through explicit probability distributions [17, 22, 44, 53, 52, 25, 28] or metalearn-
ed initializations [21, 56, 48, 61]. We examine training robustness by randomly initializing the network many times and reporting the variance of the test error:
Var
θ init ∼μ
[
ε(θ ̃)
]
where μ is the Kaiming uniform distribution [28].
3. Shallow universal polynomial networks (SUPNs). For one input dimension, we define a shallow universal polynomial network as any function of the form
fN,M (x) := ∑
n∈[N ]
cn tanh


∑
m∈[M −1]0
an,m Tm(x)

(3.1)  , x ∈ [−1, 1],
where cn, and an,m are trainable parameters and Tm(x) is the degree-m Chebyshev polynomial. Intuitively, a SUPN replaces the first L − 1 layers of a deep MLP with a Chebyshev polynomial, yielding P = N (M + 1) . This substantially decreases the number of trainable network parameters, which accelerates training and improves interpretability of the neural network. For our purposes, Tm may be computed either trigonometrically or via the three-term recurrence relation [4, p. 211]. In principle, any po-
lynomial basis on Ω could be used in (3.1), but we observed that the Chebyshev basis performs well in practice. We hypothesize that the special approximation properties of Chebyshev polynomials may be responsible for this performance. For instance, among all degree-n polynomials with unit L∞ norm, Tn has largest leading coefficient, and each local extremum is ±1, which provides stability when learning an,m. We emphasize that SUPNs differ from Chebyshev KANs through the absence of repeated composit-
ions.

SHALLOW UNIVERSAL POLYNOMIAL NETWORKS 9
In higher dimensions, we define a multi-dimensional SUPN as
(3.2) fN,Λ(x) := ∑
n∈[N ]
cn tanh
( ∑
m∈Λ
an,m Tm(x)
)
where Λ ⊂ N0D is a lower set and Tm(x) = ∏D
d=1 Tmd (xd), as in subsection 2.1.1. In this multi-dimensional setting, the number of trainable parameters for a SUPN is P = N |Λ|. Multi-dimensional SUPNs are able to model cross-interactions between the inputs with a single layer. In contrast, KANs require compositions to model interaction terms as each layer (2.11) only has sums of univariate functions. In this paper, we only use isotropic Λ, but we plan to incorporate anisotropy in Λ as future work, which would further increase the scalabilit-
y of SUPNs to higher dimensions.
3.1. Universal approximation of SUPNs. We present two theorems for the universal approximation properties of (3.1), which rely on the fixed-width and fixeddepth universal approximation theorems for MLPs. We emphasize that these theorems do not construct the network attaining a given ε-accuracy, but they are necessary to establish the suitability of (3.1) as an approximation basis.
Theorem 3.1 (fixed M , variable N ). Let f : Ω → RQ be continuous with Ω ⊂ RD compact. Fix M ≥ D + 1. For any ε > 0, there exists N ∈ N such that ∥f − fN,M ∥L∞ < ε.
Proof 3.1. Let ε > 0 be arbitrary. By Theorem 2.5, there exists N ∈ N, W 0 ∈
RN×d, b0 ∈ RN , and W 1 ∈ RD×N such that ∥f − f ̃N ∥L∞ < ε, where
f ̃N (x) = W 1 tanh(W 0x + b) ,
with tanh(·) applied componentwise. Each entry of W 0x + b is a linear polynomial and can be exactly represented by the inner sum of (3.2) with {1, x1, . . . , xd}. □
Theorem 3.2 (fixed N , variable M ). Let f : Ω → RQ be continuous, with Ω ⊂ RD compact. Fix N ≥ D + Q + 2. For any ε > 0, there exists M ∈ N such that ∥f − fN,M ∥L∞ < ε.
Proof 3.2. Fix N ≥ D + Q + 2, and let ε > 0. By Theorem 2.6, there exists L ∈ N, {W k}k∈[L]0 , and {bk}k∈[L−1]0 such that
sup
x∈Ω
∥f (x) − f ̃L(x)∥l∞(RQ) < ε/2,
where f ̃L is given by (2.9). Let f ̃L−1(x) denote the output of layer, i.e. f ̃L(x) =
W L tanh
(f ̃L−1(x)
)
. By Theorem 2.1 and the uniform continuity of tanh and f ̃L−1, there exists a polynomial p ∈ PΛ such that, for all x ∈ Ω,
∥fN,Λ(x) − f ̃L(x)∥l∞(RQ) < ε/2 ,
where fN,Λ(x) = W L tanh(p(x)). The triangle inequality completes the proof. □
Remark 3.3. In principle, any non-polynomial activation function σ(x) would suffice in Theorem 3.1 and Theorem 3.2. However, we observed numerical instabilities when σ(x) is not bounded, such as the ReLU activation. Furthermore, in [20] the authors show networks with two tanh hidden layers are as expressive as deeper ReLU networks, providing motivation for their use in a shallow formulation here.

10 Z. MORROW, M. PENWARDEN, ET AL.
3.2. Approximation properties inherited from polynomials. In this section, we present several theorems that bound the best-approximation error of SUPNs by the best-approximation error of polynomials. These theorems relax the assumptions of Subsection 3.1 and have considerably stronger accuracy guarantees. Proposition 3.4 shows that the best polynomial approximation of f in L2μ can be approximated uniformly by SUPNs. Its proof motivates the use of σ(x) = tanh(x) as our activation function. Corollar-
y 3.5 asserts that if a P -term Chebyshev series achieves a given accuracy, then there is a P -term SUPN achieves essentially the same accuracy. Hence, the approximation power of SUPNs can at least match polynomials. Theorem 3.6 and Theorem 3.7 derive explicit expressions for a quasi-optimal SUPN in the L2μ and L∞ norms. Finally, Theorem 3.8 obtains a best-approximation convergence rate that is polynomially fast in the smoothness of f .
Proposition 3.4 (Polynomial approximation proximity). Let f ∈ Wμk,p(Ω; R), with μ a probability measure, Ω ⊂ RD compact, k ∈ N0, and 1 ≤ p ≤ ∞. For Λ ∈ N0D and with PΛ := spanm∈ΛTm, define
εΛ(f ) := inf
q∈PΛ
∥f − q∥Wμk,p .
For any δ > 0, there is a polynomial q ̃ ∈ PΛ and a SUPN of the form (3.2) with P = |Λ| + 1 parameters such that
∥f − q ̃∥Wμk,p <
{ (1 + δ)εΛ(f ), if εΛ(f ) > 0
(3.3) δ, if εΛ(f ) = 0 and
∥fN,Λ − q ̃∥W k,∞ <
{ δ εΛ(f ), if εΛ(f ) > 0
(3.4) δ, if εΛ(f ) = 0 .
Proof 3.4. We deal explicitly with k = 0, εΛ(f ) > 0. An analogous proof holds for εΛ(f ) = 0. We give the proof for k > 0 in the Supplementary Materials. By definition of εΛ(f ), there is some polynomial q ̃ ∈ PΛ satisfying (3.3). Let q ̃ = ∑
m∈Λ αmTm, and define R := ∑
m∈Λ |αm|. If R = 0, set c1 = 0 in (3.2) with
N = 1 to achieve fN,Λ = q = 0, achieving (3.4). Otherwise, consider R > 0. Note that,
sup
x∈Ω
|q ̃(x)| ≤ sup
x∈Ω
∑
m∈Λ
|αm||Tm(x)| ≤ R .
We will construct a SUPN with (N, M ) = (1, |Λ|) that well-approximates q ̃. Let σ(y) = tanh(y). Around y = 0, σ(y) ≈ y, and using |σ′′(y)| < 2|y|, Taylor’s Theorem with the integral form of the remainder gives, for any r > 0,
|σ(y) − y| < r3, |y| < r .
Now consider the (N, M ) = (1, |Λ|) SUPN in (3.2), with the parameter assignment
a1,m = αm
S , c1 = S, S :=
√
R3
δεΛ(f ) .
Then, for any x ∈ Ω,
|fN,Λ(x) − q ̃(x)| = S
∣ ∣ ∣ ∣
σ
( q ̃(x) S
)
− q ̃(x)
S
∣ ∣ ∣ ∣
≤S
(R
S
)3
= δ εΛ(f ) .

SHALLOW UNIVERSAL POLYNOMIAL NETWORKS 11
The k > 0 proof introduces no significantly new ideas but is more technical; see Supplementary Materials. □
The next result uses the L∞ (or W k,∞) approximability by SUPNs of the bestapproximating polynomial to establish explicit error bounds of fN,Λ in the Wμk,p norm.
Corollary 3.5. Under assumptions of Proposition 3.4, for any δ > 0, there is a SUPN of the form (3.2) with P = |Λ| + 1 parameters such that
∥f − fN,Λ∥Wμk,p <
{ (1 + δ)εΛ(f ), if εΛ(f ) > 0
(3.5) δ, if εΛ(f ) = 0 .
In contrast to the generality of approximability in Sobolev spaces we have shown above, if we specialize to k = 0 and p = 2, we can construct the near-optimal SUPN weights under the L2μ norm. This can be done by explicitly using the argumentation of Proof 3.4.
Theorem 3.6 (Constructive SUPN in L2μ norm). The SUPN guaranteed under Proposition 3.4 with k = 0 and p = 2 is given by
a1,m = α ̃m
S , c1 = S, S :=



√
R3
δ if εΛ(f ) = 0
√ R3
δ εΛ(f) if εΛ(f ) > 0
where
αm = ⟨φm, f ⟩L2μ
⟨φm, φm⟩L2μ
, R= ∑
m∈Λ
|αm|,
⟨φm, φn⟩L2μ = δm,n∥φn∥2L2μ , φm ∈ PΛ,
and {α ̃m}m∈Λ are the transformed coefficients of the polynomial φm to the Chebyshev polynomial Tm. Furthermore, the error εΛ(f ) can be computed via
(3.6) εΛ(f ) =
√
∥f ∥2L2μ − ∑
m∈Λ
|αm|2
Proof 3.6. Apply Proposition 3.4 with the optimal L2μ projection coefficients. □
Now, the optimal L2μ projection onto Chebyshev polynomials with the measure
dμ = dx/√1 − x2 is nearly optimal under the L∞ norm [23]. Hence, we can explicitly construct the network weights guaranteed by the universal approximation theorem (Theorem 3.2), and we can even relax its assumptions on N .
Theorem 3.7 (Constructive SUPN in L∞ norm). Let f ∈ C(Ω) with Ω ⊂ R compact. For any δ > 0, we can construct a SUPN (3.1) with P = M + 1 parameters satisfying
∥f − f1,M ∥L∞ < (2 ln M + 3) inf
p∈PM
∥f − p∥L∞ + δ
using weights from Theorem 3.6 with S := √R3/δ and μ being the Chebyshev measure.
Proof 3.7. As shown in [23], the Chebyshev series
f ̃ = ∑
m∈[M ]0
αmTm(x), αm = ⟨Tm, f ⟩μ
⟨Tm, Tm⟩μ
, dμ(x) = dx
√1 − x2

12 Z. MORROW, M. PENWARDEN, ET AL.
is nearly optimal as a degree-M minimax polynomial, with a multiplicative term arising from the Lebesgue constant λM , yielding
∥f − f ̃∥L∞ < (1 + λM ) inf
p∈PM
∥f − p∥L∞ .
Furthermore, [23] demonstrates the bound λM ≤ 2 ln M + 2. Using S := √R3/δ and the weights from Theorem 3.6 within Proof 3.4 yields
∥f ̃ − f1,M ∥L∞ < δ,
which completes the proof. □
Finally, we can use well-established bounds on polynomial approximation error in terms of the target function’s smoothness class to get an explicit convergence rate of SUPNs.
Theorem 3.8 (SUPN L∞ convergence rate). Let f ∈ Ck(Ω) with Ω ⊂ R compact, f (k) Lipschitz continuous, and εM,∞(f ) > 0. Then there exists β > 0 such that, for any M ∈ N and δ > 0, there is a SUPN of the form (3.1) satisfying
(3.7) ∥f − f1,M ∥L∞ < (1 + δ)β M −(k+1) .
Proof 3.8. The result is immediate from Proposition 3.4 and Theorem 2.2. □
4. Second-order optimizer. The use of second-order optimization methods for training SUPNs is inspired by the similar mathematical structure of that problem and classical inverse problems where such methods have worked well. Secondorder optimization methods approximate a Newton step on the optimality condition ∇θL(θ) = 0, as opposed to approximating the direction of steepest descent, as is done in first-order methods. Empirical advantages gained by the use of second-order methods over first-order -
methods include robustness (i.e., the performance of these methods requires less hyperparameter tuning), the ability to navigate past saddle points and flat regions, and more rapid rates of convergence. Second-order methods have also been explored in the context of training deep neural networks; an empirical study of these methods can be found in, e.g., [76]. In our experiments, we use a fixed batch of data, so there is no stochasticity in the calculation of the gradients and Hessians (e.g., as a -
result of minibatching). However, trust region methods can also be applied in the case of stochastic gradients or Hessians; the complexity and convergence of trust region methods in this setting has been explored in [8, 59]. In the case of training SUPNs, DNNs, and KANs, which are generally nonconvex, the Hessians of these networks with respect to their parameters are generally not positive-definite. Trust-region methods are able to handle indefinite Hessian estimates. At every iteration n of a tr-
ust-region method, we approximate the loss function L(θ) locally near the current parameters θn using a model, which is often quadratic:
L(θn + s) ≈ L(θn) + (∇θL(θn))⊤s + 1
(4.1) 2 s⊤Hs,
where H is either the Hessian ∇θ2L(θn) or an approximation thereof. This model is
(approximately) minimized with the constraint that ∥s∥ is less than some trust radius ∆n:
min
s∈RP (∇θL(θn))T s + 1
2 sT Hs
s.t. ∥s∥ < ∆n
}
(4.2) .

SHALLOW UNIVERSAL POLYNOMIAL NETWORKS 13
Note that we have dropped L(θn) as it does not depend on the step s. Letting sn be a solution (or approximate solution) of the above optimization problem (called the “subproblem”), the proposed iterate θn + sn is either accepted or rejected. Note that an exact subproblem solution is not required; finding an s that satisfies a fraction of Cauchy decrease is enough (i.e., a fraction of the decrease attained by the minimizer in the direction of the negative gradient). The trust-region radius is adjus-
ted from one iteration to the next by assessing the accuracy of the model. Additional details and specific implementations can be found in, e.g., [58, 14]. For our experiments, we use a trust region method, where the subproblem solver is the Steihaug–Toint conjugate gradient (CG) method [70, 68]. We accelerate this optimization method using a limited-memory BFGS Hessian approximation [47] as a preconditioner. This optimization algorithm is implemented using the Rapid Optimization Library [36]. Thi-
s method does not require fully forming a Hessian or computing its inverse; it only requires Hessian–vector products, which can be efficiently calculated with automatic differentiation.
Example 4.1. In Figure 3, we show training losses for the Adam [41], BFGS [47], and second-order trust-region methods after an initial 1000 epochs of burn-in with Adam (not shown). Adam and BFGS use a learning rate of 10−2 and are implemented in PyTorch. The target function to learn is f (x) = |x|. Both DNNs and SUPNs converge attain a lower error in far fewer epochs with Newton–CG than with Adam or BFGS. This demonstrates the utility of using a second-order method to determine best-approximation -
error.
0 1000 2000 3000 4000 5000
Epochs
10−4
10−3
10−2
10−1
Training loss
Performance of different optimizers
SUPN (Adam) SUPN (BFGS) SUPN (TR-2)
DNN (Adam) DNN (BFGS) DNN (TR-2)
Fig. 3. Training losses with Adam, BFGS, and a second-order trust-region method.
5. Numerical experiments. We present several experiments in one, two, and ten dimensions to demonstrate the utility of SUPNs. These experiments are designed to show how SUPNs, DNNs, KANs, and polynomial projection perform on functions of varying regularity. We briefly summarize the commonalities among all examples. Every DNN uses tanh activations in each layer except the output layer. KANs use a grid size of 5, a spline order of 3, and the SiLU activation function, in keeping with [49]. The Supple-
mentary Materials contain specific values for N and M in each example. All experiments were performed on Nvidia A100 GPUs, except the 10D case, which used H100 GPUs due to memory requirements. The loss functions for neural networks are highly nonconvex in general, so we use a large number of allowable optimization

14 Z. MORROW, M. PENWARDEN, ET AL.
iterations. Training consisted of a burn-in period of 5000 epochs with Adam (learning rate 10−3), followed by trust-region Newton–CG. The trust-region algorithm has a maximum of 1000 Newton steps, a gradient tolerance of 10−6 and a step tolerance of 5 × 10−5. At each optimization step, CG has an absolute tolerance of 10−4, a relative tolerance of 10−2, and a maximum of 500 iterations. Finally, five independent realizations of initial network weights are performed for each experiment. Accuracy on a-
 validation set is monitored during training, and the reported accuracy is the test-set accuracy at the minimum validation-set error.
5.1. One dimension. We first compare best-approximation error and training robustness between SUPNs, DNNs, KANs, and polynomial projection on a suite of test problems. Then, we establish sampling requirements of SUPNs at models corresponding to low, medium, and high best-approximation accuracy. Next, we demonstrate that the order of convergence of SUPNs on the Runge function is independent of its bandwidth. Finally, we show that SUPNs can fit a highly oscillatory sine function from [1, Fig. 5] wit-
h an extended domain.
−1 0 1
0
2
Cont. Rastrigin (ω = 5)
−1 0 1
0
1
Absolute value, p = 1
−1 0 1
0
2
Discontinuous Rastrigin
−1 0 1
0
1
Runge, c = 5
−1 0 1
0
1
Absolute value, p = 1/2
−1 0 1
0.0
2.5
Step Functions
−1.00 −0.75 −0.50 −0.25 0.00 0.25 0.50 0.75 1.00
−2.5
0.0
2.5 Sinusoid of polynomial
Fig. 4. 1D target functions for approximation.
5.1.1. Target functions. We consider seven 1D functions f : [−1, 1] → R, shown in Figure 4. These functions are defined below. 1. Continuous Rastrigin:
(5.1) f1(x; ω) = 2(x − 0.2)2 − 1
2.77 cos(2πωx − 1.22) + 1
2. Discontinuous Rastrigin:
f2(x) =
{
0, 0 ≤ x ≤ 0.6 f1(x; ω = 5), otherwise
3. Absolute value of order p ∈ (0, 1]:
f3(x; p) = |x − 0.2|p

SHALLOW UNIVERSAL POLYNOMIAL NETWORKS 15
10−7
10−5
10−3
10−1
Mean relative L2 error
Cont. Rastrigin (ω = 5)
10−5
10−4
10−3
10−2
10−1 Absolute value, p = 1
10−2
10−1
Discontinuous Rastrigin
101 102 103
Num. trainable parameters
10−7
10−5
10−3
10−1
Mean relative L2 error
Runge, c = 5
101 102 103
Num. trainable parameters
10−3
10−2
10−1 Absolute value, p = 1/2
DNN KAN Projection SUPN
101 102 103
Num. trainable parameters
10−2
10−1
Step Functions
Fig. 5. Relative L2 errors vs. trainable parameters using SUPN, DNN, KAN, and polynomial projection for fk, k ∈ [5].
4. Linear combination of step functions:
f4(x) =

  

1, −1 ≤ x < −0.75 0, −0.75 ≤ x < −0.375 4, −0.375 ≤ x < 0 or 0.5 ≤ x < 0.7 2, 0 ≤ x < 0.5 or 0.7 ≤ x ≤ 1
5. Runge function (c ≥ 1):
(5.2) f5(x; c) = 1
1 + (cx)2
6. Sinusoid of polynomial:
f6(x) = sin(2π2x) + cos(π3x2) + cos(π4x3) sin(π4x3)
5.1.2. Best-approximation error. We first examine the error of a local minimizer of (2.2). We use a 2000-point Gauss–Legendre quadrature rule in the loss function (2.4). The validation set consists of 3001 equidistant points on [−1, 1]. The test set consists of 17001 equidistant points on [−1, 1], and we report the test error at the minimum validation error encountered during training. We vary N , M , width and depth to create networks with P ≤ 2000; exact details are in the Supplementary Material-
s. We perform five initializations of network weights from the Kaiming uniform distribution [28]. In Figure 5, we demonstrate that SUPNs are able to attain a given error tolerance with significantly fewer parameters than DNNs or KANs, often by an order of magnitude. For the continuously differentiable targets, i.e. continuous Rastrigin and Runge,

16 Z. MORROW, M. PENWARDEN, ET AL.
101 102 103
10−7
10−5
10−3
10−1
√Var(rel. error)
Cont. Rastrigin (ω = 5)
101 102 103
10−7
10−5
10−3
10−1
Absolute value, p = 1
101 102 103
10−7
10−5
10−3
10−1
Discontinuous Rastrigin
101 102 103 Num. trainable parameters
10−7
10−5
10−3
10−1
√Var(rel. error)
Runge (c = 5)
101 102 103 Num. trainable parameters
10−7
10−5
10−3
10−1
Absolute value, p = 1/2
DNN KAN SUPN
101 102 103 Num. trainable parameters
10−7
10−5
10−3
10−1
Step Functions
Fig. 6. Standard deviation of relative error over 5 realizations of initial network weights.
projection outperforms all the other methods given sufficiently many trainable parameters, but SUPNs outperform DNNs and KANs. For f (x) = |x|, SUPNs have a very slight advantage over DNNs and projection when 102 ≤ P ≤ 103. For f (x) = |x|1/2, SUPNs and DNNs track each other very closely, outperforming polynomial projection; the infinite derivative at x = 0 causes stagnation around P ≈ 500. For discontinuous targets, SUPNs have the fewest parameters at the lowest error threshold. Similar trends ho-
ld for the L∞ norm (except for discontinuous targets, where all methods fail); for brevity, further details may be found in the Supplementary Materials. Figure 6 shows the standard deviation of relative error over five realizations of initial network weights. The standard deviation decreases as the mean relative error decreases, except in a handful of very small networks, which give reliably high error. Comparing Figure 5 and Figure 6 at a fixed number of trainable parameters shows that SUPNs are -
almost always more robust than DNNs and KANs for a given parameter count. The caveat is f (x) = |x|1/2, where DNNs and SUPNs are equally robust.
5.1.3. Effect of hyperparameters. Figure 7 shows a heat map of SUPN, DNN, KAN, and polynomial projection best-approximation error on the continuous Rastrigin target, for a subset of the (N, M ) pairs used to make Figure 5. The bottom row shows how P varies with different choices of N and M . This plot indicates that overly narrow networks (small N ) can saturate the approximation capability of a degree-M polynomial in practice (e.g., initializing differently than Theorem 3.6). Likewise, networks w-
ith a low polynomial degree M will require a large number N of basis functions. SUPNs have the desirable feature of continuously improving in accuracy in (N, M ), instead of abruptly achieving high accuracy at some arbitrary (based on the target function) hyperparameter condition like DNNs or KANs. These observations are consistent with Theorem 2.5 and Theorem 2.6.

SHALLOW UNIVERSAL POLYNOMIAL NETWORKS 17
4 8 12 16 20 M
4
8
12
16
20
N
SUPN
4 8 12 16 20 M
4
8
12
16
20
N
Projection
1 5 9 13 Depth
1
5
9
13
Width
DNN
246 Depth
2
4
6
Width
KAN
−3 −2 −1 log10(mean relative L2 error)
Sinusoid: Accuracy
4 8 12 16 20 M
4
8
12
16
20
N
SUPN
4 8 12 16 20 M
4
8
12
16
20
N
Projection
1 5 9 13 Depth
1
5
9
13
Width
DNN
246 Depth
2
4
6
Width
KAN
1.0 1.5 2.0 2.5 3.0 log10(num. trainable params)
Sinusoid: Trainable Parameters
4 8 12 16 20 M
4
8
12
16
20
N
SUPN
1 5 9 13 Depth
1
5
9
13
Width
DNN
246 Depth
2
4
6
Width
KAN
−2.5 −2.0 −1.5 −1.0 log10(sec. per backward pass)
Sinusoid: Timing
Fig. 7. Top: Heat map of test errors for f7(x) over hyperparameter sweep. Middle: Corresponding parameter counts. Bottom: Time required to compute one backward pass; projection is omitted because it requires no backward passes. Direct numerical comparisons are in Figure 5. Compared to DNNs and KANs, SUPNs display continuous accuracy improvement in (N, M ) along with far lower parameter counts and relative errors.

18 Z. MORROW, M. PENWARDEN, ET AL.
10−1 100 101
10−6
10−3
100
Cont. Rastrigin
Relative error
Low best approx. accuracy
10−1 100 101
10−6
10−3
100
Medium best approx. accuracy
10−1 100 101
10−6
10−3
100
High best approx. accuracy
10−1 100 101
10−2
Abs, p = 1
Relative error
10−1 100 101
10−2
100
10−1 100 101
10−2
10−1 100 101
K/P
10−2
10−1
100
Disc. Rastrigin
Relative error
10−1 100 101
K/P
10−2
10−1
100
Uniform distribution Equidistant Gauss–Legendre
10−1 100 101
K/P
10−2
10−1
100
Fig. 8. Mean L2 error (over network initialization) of finite-sampling experiments for different combinations of target function, best approximation accuracy, and sampling strategy. For the “uniform” results, the line is the mean over 10 realizations of training data and 5 weight initializations, while the shaded region is the 10th to 90th percentile.
5.1.4. Sampling error. Next, we empirically investigate sampling requirements for SUPNs. We vary the ratio between the number of training data K and the number of SUPN parameters, P = N (M + 1). We examine models corresponding to qualitatively low, medium, and high best-approximation accuracy from Figure 5, using the sampling techniques discussed in subsection 2.2. Figure 8 indicates that Gauss–Legendre requires the fewest number of samples to achieve best-approximation error. The specific ratio a-
ppears to depend on the smoothness of the target function. We see up to K = P for continuous Rastrigin, and K = 2P for absolute value and discontinuous Rastrigin.
5.1.5. Convergence on Runge function. The Runge function (5.2) is a famous example of a function that can be difficult to approximate with naive methods [4]. Consider approximating the parameterized Runge function with polynomial projection in the L2 norm. It can be shown that the best approximation error (2.12) using the P -term Legendre series (2.5) is bounded by
ε(θˆ) ≲ exp(−βP/c)
for some universal constant β > 0. See, e.g., [73, Theorem 2.1] or [71, Theorem 8.2]. This bound gives spectral convergence, but the convergence rate decays with c. Figure 9 shows spectral convergence for polynomial projection that degrades as c increases. In contrast, SUPNs display a finite order of convergence, but that order appears to be independent of c.
5.1.6. Sinusoid of polynomial. This function uses an extended domain of the problem in [1, Sec. 3.1], in which the authors observe MLPs struggling to fit high-frequency components of the function. We display these results separately from the other functions because larger networks are required than for the experiments in Figure 5. Figure 10 demonstrates that SUPNs and polynomial projection have low error with a small number of parameters, while KANs and especially MLPs struggle

SHALLOW UNIVERSAL POLYNOMIAL NETWORKS 19
101 102
Num. trainable parameters
10−9
10−7
10−5
10−3
10−1
Mean relative L2 error
Runge Function Convergence
c = 5 (projection) c = 10 (projection) c = 20 (projection)
c = 5 (SUPN) c = 10 (SUPN) c = 20 (SUPN)
Fig. 9. Convergence of SUPN and polynomial projection on Runge function for c = 5, 10, 20. Lines of best fit are shown for SUPN.
−1.0 −0.5 0.0 0.5 1.0
−2.5
0.0
2.5 DNN (1020 params; rel. L2 err. 1.18e-01)
−1.0 −0.5 0.0 0.5 1.0
−2.5
0.0
2.5 Projection (270 params; rel. L2 err. 7.90e-06)
−1.0 −0.5 0.0 0.5 1.0 x
−2.5
0.0
2.5 KAN (1412 params; rel. L2 err. 9.65e-02)
−1.0 −0.5 0.0 0.5 1.0 x
−2.5
0.0
2.5 SUPN (420 params; rel. L2 err. 1.35e-03)
Fig. 10. Surrogate predictions on sinusoid example corresponding to median-error model.
at higher frequencies.
5.2. Two dimensions. We now present best-approximation results for functions with two input dimensions. The results of a finite-sampling study are in the Supplementary Materials and qualitatively similar to the one-dimensional case. For both SUPN and projection, we consider the isotropic hyperbolic cross-section ΛHC (2.7) and total-degree space ΛTD (2.8) to describe admissible polynomial degrees.
5.2.1. Target functions. We consider three 2D functions f : [−1, 1]2 → R, based on the one-dimensional Rastrigin function (5.1) with ω = 5. These target functions are shown in Figure 11 and are selected to have different amounts of regularity. 1. Continuous Rastrigin (sum):
f7(x, y) = f1(x; ω = 5) + f1(y; ω = 5)
2. Continuous Rastrigin (radial):
f8(x, y) = f1(r; ω = 5), r = √(x − 0.2)2 + (y − 0.2)2
3. Discontinuous Rastrigin (ω = 5):
f9(x, y) =
{
0, r ∈ [0.3, 0.5] f1(|x − 0.2|)f1(|y − 0.2|), otherwise

20 Z. MORROW, M. PENWARDEN, ET AL.
−1 0 1 x
−1.0
−0.5
0.0
0.5
1.0
y
Sum
−1 0 1 x
−1.0
−0.5
0.0
0.5
1.0
Radial
−1 0 1 x
−1.0
−0.5
0.0
0.5
1.0
Discontinuous
0.0 0.8 1.6 2.4 3.2 4.0 f (x, y)
Fig. 11. 2D target functions for approximation.
5.2.2. Best-approximation error. In the loss function (2.4), we use a tensorproduct Gauss–Legendre rule with 200 nodes in each dimension. The validation set consists of a 130×130 grid of equispaced points, and the test set consists of a 450×450 grid of equispaced points. Due to the computational cost of a tensor-product grid, the validation and test sets are commensurate in size with the training set, unlike in subsection 5.1.2. As before, we report the test error at the minimum validation error s-
een during training. Figure 12 shows that SUPNs are a competitive method in 2D. For a sum of onedimensional Rastrigin functions, SUPNs dramatically outperform DNNs and KANs. SUPNs with a properly chosen index set Λ even outperform polynomial projection with a misspecified Λ. Interestingly, DNNs outperform all methods on the radial target, which we explain by the lack of tensor-product structure in f8 causing difficulty for polynomial-based methods. However, with a transform into polar coordinates -
(r, θ), the radial results would become qualitatively similar to the top left panel of Figure 5. Moreover, the horizontal spread of KANs on the radial target is much wider than for SUPNs, so the performance of KANs is less predictable with respect to its width and depth. On the discontinuous target, SUPNs have the lowest error among all methods at a given parameter count. Robustness on these 2D examples is qualitatively similar to Figure 6 and may be found in the Supplementary Materials.
5.3. Ten dimensions. We now demonstrate that SUPNs can scale into moderately large dimensions. We consider the anisotropic and purposefully nonlinear target function
faniso(x) = exp(x1 − 0.7) sin(1.3x2) + 0.2 cos(2πx3) + 0.01|x4 − 0.27|x5
+ 0.1|x6|x7 + 0.05 exp(−(x8 − 0.3)2/16) + 0.1x9x10
where x ∈ [−1, 1]10. We use 105 samples from the Halton sequence for training. For validation, we use the next 2 × 105 Halton elements, and for testing, the next 2 × 105 Halton elements. As in subsection 5.2, all index sets are isotropic. Figure 13 displays the results. Asymptotically, SUPNs are an order of magnitude more accurate than both KANs and DNNs. To ensure we show best-approximation

SHALLOW UNIVERSAL POLYNOMIAL NETWORKS 21
102 103
Num. trainable parameters
10−4
10−3
10−2
10−1
Mean relative L2 error
Sum
102 103
Num. trainable parameters
10−4
10−3
10−2
10−1
Radial
DNN KAN
Projection (HC) Projection (TD)
SUPN (HC) SUPN (TD)
102 103
Num. trainable parameters
10−2
10−1
100
Discontinuous
Cost–Accuracy Tradeoff (Trainable Parameters)
Fig. 12. Mean L2 error versus number of trainable parameters P for 2D examples (fk, k = 7, 8, 9).
102 103 104 Num. trainable parameters
10−4
10−3
10−2
10−1
Mean relative L2 error
10D Anisotropic Target
DNN KAN Projection Projection (107 samples) SUPN
Fig. 13. Mean relative L2 error on anisotropic target function with D = 10 input dimensions.
error rather than sampling error, we also show projection using 107 Halton elements to compute the L2 inner products. With only 105 samples, there is significant quadrature error in the higher-order Legendre expansion coefficients (P ≳ 103).
6. Conclusion and future work. We have presented shallow universal polynomial networks, a parsimonious and provably convergent surrogate model that avoids common issues arising from highly over-parameterized models. Intuitively, SUPNs replace the learned bases of a DNN or KAN with a learned polynomial, which dramatically reduces the parameter count of the network. The early layers of an NN learn the same simplistic building blocks, creating unnecessarily complex loss landscapes which can inhibit t-
he learning of high frequency features shown in Section 5. An extensive set of numerical experiments validates that SUPNs outperform DNNs and KANs with on one-, two-, and ten-dimensional target functions that exhibit tensor-product structure. Additionally, the performance of SUPNs is significantly more robust with respect to network initialization. In future work, we see SUPNs as potential building-blocks for operator learning in

22 Z. MORROW, M. PENWARDEN, ET AL.
one, two, and three spatial dimensions, which are the predominant use-case of neural networks in physics-informed cases. Although MLPs work well in high dimensions, they cannot match traditional approximation methods in lower dimensions. Physicsinformed SUPNs may overcome issues fitting higher frequencies in PDEs such as the Helmholtz equation without the need for domain decomposition such as in [55]. Additionally, we plan to investigate adaptive methods for populating Λ so that SUPNs can exploit -
anisotropy to scale to even higher dimensions.
Appendix A. Symbols and Notation.
D Input dimension L(·) Loss function Q Output dimension θ Learnable parameters P Parameter dimension θˆ Best-approximation parameters Ω Compact subset of RD θ ̃ Empirically trained parameters Ti Chebyshev polynomial of deg. i σ Activation function Li Legendre polynomial of deg. i Bj,i B-spline of deg. i on partition j K Training set size ε Generalization error [N ] {1, 2, . . . , N } [N ]0 {0, 1, . . . , N } Pn Polynomials of degree n
Table 1
Symbols and notation.
REFERENCES
[1] D. W. Abueidda, P. Pantidis, and M. E. Mobasher, DeepOKAN: Deep operator network based on Kolmogorov Arnold networks for mechanics problems, Comput. Meth. Appl. Mech. Eng., 436 (2025), p. 117699, https://doi.org/10.1016/j.cma.2024.117699.
[2] J. A. Actor, G. Harper, B. Southworth, and E. C. Cyr, Leveraging KANs for expedient training of multichannel MLPs via preconditioning and geometric refinement, 2025, https: //arxiv.org/abs/2505.18131.
[3] V. I. Arnold, On the representation of functions of several variables as a superposition of functions of a smaller number of variables, Springer Berlin Heidelberg, 2009, pp. 25–46. [4] K. E. Atkinson, An Introduction to Numerical Analysis, Wiley, 1989. [5] V. Barthelmann, E. Novak, and K. Ritter, High dimensional polynomial interpolation on sparse grids, Adv. Comput. Math., 12 (2000), pp. 273–288, https://doi.org/10.1023/A: 1018977404843.
[6] P. Benner, S. Gugercin, and K. Willcox, A survey of projection-based model reduction methods for parametric dynamical systems, SIAM Rev., 57 (2015), pp. 483–531, https: //doi.org/10.1137/130932715.
[7] P. Benner, M. Ohlberger, A. Cohen, and K. Willcox, Model Reduction and Approximation: Theory and Algorithms, SIAM, 2017.
[8] R. Bollapragada, R. H. Byrd, and J. Nocedal, Exact and inexact subsampled Newton methods for optimization, IMA J. Numer. Anal., 39 (2018), pp. 545–578, https://doi.org/ 10.1093/imanum/dry009.
[9] J. Braun and M. Griebel, On a constructive proof of Kolmogorov’s superposition theorem, Constr. Approx., 30 (2009), pp. 653–675, https://doi.org/10.1007/s00365-009-9054-2.
[10] M. D. Buhmann, Radial Basis Functions: Theory and Implementations, Cambridge University Press, 2003.
[11] C. Canuto, M. Y. Hussaini, A. Quarteroni, and T. A. Zang Jr, Spectral Methods: Fundamentals in Single Domains, Springer, 2006.
[12] A. Chkifa, N. Dexter, H. Tran, and C. G. Webster, Polynomial approximation via compressed sensing of high-dimensional functions on lower sets, Math. Comput., 87 (2018), pp. 1415–1450, https://doi.org/10.1090/mcom/3272.
[13] G. G. Chrysos, S. Moschoglou, G. Bouritsas, J. Deng, Y. Panagakis, and S. Zafeiriou, Deep polynomial neural networks, IEEE Trans. Pattern Anal. Mach. Intell., 44 (2021),

SHALLOW UNIVERSAL POLYNOMIAL NETWORKS 23
pp. 4021–4034.
[14] A. R. Conn, N. I. M. Gould, and P. L. Toint, Trust Region Methods, SIAM, 2000, https: //doi.org/10.1137/1.9780898719857.
[15] N. Cotter, The Stone–Weierstrass theorem and its application to neural networks, IEEE Trans. Neural Netw., 1 (1990), pp. 290–295, https://doi.org/10.1109/72.80265.
[16] G. Cybenko, Approximation by superpositions of a sigmoidal function, Math. Control Signals Syst., 2 (1989), pp. 303–314, https://doi.org/10.1007/BF02551274.
[17] E. C. Cyr, M. A. Gulian, R. G. Patel, M. Perego, and N. A. Trask, Robust training and initialization of deep neural networks: An adaptive basis viewpoint, in Proceedings of the First Mathematical and Scientific Machine Learning Conference, J. Lu and R. Ward, eds., vol. 107 of Proceedings of Machine Learning Research, 2020, pp. 512–536, https: //proceedings.mlr.press/v107/cyr20a.html. [18] S. Das, The polynomial neural network, Inf. Sci., 87 (1995), pp. 231–246, https://doi.org/https: //doi.or-
g/10.1016/0020-0255(95)00133-6. [19] C. de Boor, A Practical Guide to Splines, Springer, 1978, https://doi.org/10.2307/2006241. [20] T. De Ryck, S. Lanthaler, and S. Mishra, On the approximation of functions by tanh neural networks, Neural Netw., 143 (2021), pp. 732–750, https://doi.org/https://doi.org/ 10.1016/j.neunet.2021.08.015.
[21] C. Finn, P. Abbeel, and S. Levine, Model-agnostic meta-learning for fast adaptation of deep networks, in International Conference on Machine Learning, 2017, pp. 1126–1135.
[22] D. Fokina and I. Oseledets, Growing axons: Greedy learning of neural networks with application to function approximation, 2020, https://arxiv.org/abs/1910.12686.
[23] K. O. Geddes, Near-minimax polynomial approximation in an elliptical region, SIAM J. Numer. Anal., 15 (1978), pp. 1225–1233, https://doi.org/10.1137/0715083.
[24] R. G. Ghanem and P. D. Spanos, Stochastic Finite Element Method: Response Statistics, Springer, 1991, pp. 101–119.
[25] X. Glorot and Y. Bengio, Understanding the difficulty of training deep feedforward neural networks, in Proceedings of the Thirteenth International Conference on Artificial Intelligence and Statistics, Y. W. Teh and M. Titterington, eds., vol. 9 of Proceedings of Machine Learning Research, 2010, pp. 249–256, https://proceedings.mlr.press/v9/glorot10a.html. [26] A. Gorodetsky, S. Karaman, and Y. Marzouk, A continuous analogue of the tensor-train decomposition, Comput. Meth. Appl. Mech. Eng., 34-
7 (2019), pp. 59–84, https://doi.org/ 10.1016/j.cma.2018.12.015.
[27] D. Gottlieb and S. A. Orszag, Numerical Analysis of Spectral Methods, SIAM, 1977, https: //doi.org/10.1137/1.9781611970425.
[28] K. He, X. Zhang, S. Ren, and J. Sun, Delving deep into rectifiers: Surpassing humanlevel performance on ImageNet classification, in 2015 IEEE International Conference on Computer Vision, 2015, pp. 1026–1034, https://doi.org/10.1109/ICCV.2015.123.
[29] S. Hochreiter and J. Schmidhuber, Long short-term memory, Neural Comput., 9 (1997), pp. 1735–1780, https://doi.org/10.1162/neco.1997.9.8.1735.
[30] J. J. Hopfield, Neural networks and physical systems with emergent collective computational abilities, Proc. Nat. Acad. Sci. USA, 79 (1982), pp. 2554–2558, https://doi.org/10.1073/ pnas.79.8.2554.
[31] K. Hornik, Approximation capabilities of multilayer feedforward networks, Neural Netw., 4 (1991), pp. 251–257, https://doi.org/10.1016/0893-6080(91)90009-T.
[32] K. Hornik, M. Stinchcombe, and H. White, Multilayer feedforward networks are universal approximators, Neural Netw., 2 (1989), pp. 359–366, https://doi.org/10.1016/ 0893-6080(89)90020-8.
[33] A. G. Ivakhnenko, Polynomial theory of complex systems, IEEE Trans. Syst. Man Cybern., SMC-1 (1971), pp. 364–378, https://doi.org/10.1109/TSMC.1971.4308320. [34] D. Jackson, The Theory of Approximation, American Mathematical Society, 1930, ch. 1. Theorem VII.
[35] J. D. Jakeman, M. Perego, D. T. Seidl, T. A. Hartland, T. R. Hillebrand, M. J. Hoffman, and S. F. Price, An evaluation of multi-fidelity methods for quantifying uncertainty in projections of ice-sheet mass change, Earth Syst. Dyn., 16 (2025), pp. 513–544, https: //doi.org/10.5194/esd-16-513-2025, https://esd.copernicus.org/articles/16/513/2025/.
[36] A. Javeed, D. Kouri, D. Ridzal, and G. von Winckel, Get ROL-ing: An introduction to Sandia’s Rapid Optimization Library, in 7th International Conference on Continuous Optimization, 2022.
[37] J. Jumper, R. Evans, A. Pritzel, T. Green, M. Figurnov, O. Ronneberger, K. Tunyasuvunakool, R. Bates, A. Zidek, A. Potapenko, A. Bridgland, C. Meyer, S. A. A. Kohl, A. J. Ballard, A. Cowie, B. Romera-Paredes, S. Nikolov, R. Jain,

24 Z. MORROW, M. PENWARDEN, ET AL.
J. Adler, T. Back, S. Petersen, D. Reiman, E. Clancy, M. Zielinski, M. Steinegger, M. Pacholska, T. Berghammer, S. Bodenstein, D. Silver, O. Vinyals, A. W. Senior, K. Kavukcuoglu, P. Kohli, and D. Hassabis, Highly accurate protein structure prediction with AlphaFold, Nature, 596 (2021), pp. 583–589, https://doi.org/10.1038/ s41586-021-03819-2.
[38] S. C. Kak, Feedback neural networks: New characteristics and a generalization, Circuits Syst. and Signal Process., 12 (1993), pp. 263–278, https://doi.org/10.1007/BF01189877.
[39] P. Kidger and T. Lyons, Universal approximation with deep narrow networks, 2020, https: //arxiv.org/abs/1905.08539.
[40] J. Kileel, M. Trager, and J. Bruna, On the expressive power of deep polynomial neural networks, Adv. Neural Inf. Process. Syst., 32 (2019).
[41] D. P. Kingma and J. Ba, Adam: A method for stochastic optimization, 2017, https://arxiv. org/abs/1412.6980.
[42] A. N. Kolmogorov, On the representations of continuous functions of many variables by superposition of continuous functions of one variable and addition, in Dokl. Akad. Nauk USSR, vol. 114, 1957, pp. 953–956, http://mi.mathnet.ru/dan22050.
[43] K. Kubjas, J. Li, and M. Wiesmann, Geometry of polynomial neural networks, Algebr. Stat., 15 (2024), pp. 295–328.
[44] H. Lee, Y. Kim, S. Y. Yang, and H. Choi, Improved weight initialization for deep and narrow feedforward neural network, Neural Netw., 176 (2024), p. 106362, https://doi.org/10.1016/ j.neunet.2024.106362.
[45] M. Leshno, V. Y. Lin, A. Pinkus, and S. Schocken, Multilayer feedforward networks with a nonpolynomial activation function can approximate any function, Neural Netw., 6 (1993), pp. 861–867, https://doi.org/https://doi.org/10.1016/S0893-6080(05)80131-5.
[46] Z. Li, N. Kovachki, K. Azizzadenesheli, B. Liu, K. Bhattacharya, A. Stuart, and A. Anandkumar, Fourier neural operator for parametric partial differential equations, 2021, https://arxiv.org/abs/2010.08895.
[47] D. C. Liu and J. Nocedal, On the limited memory BFGS method for large scale optimization, Math. Program., 45 (1989), pp. 503–528.
[48] X. Liu, X. Zhang, W. Peng, W. Zhou, and W. Yao, A novel meta-learning initialization method for physics-informed neural networks, Neural Comput. Appl., 34 (2022), pp. 1451114534.
[49] Z. Liu, Y. Wang, S. Vaidya, F. Ruehle, J. Halverson, M. M. Soljaci ́c, T. Y. Hou, and M. Tegmark, KAN: Kolmogorov–Arnold networks, 2025, https://arxiv.org/abs/2404. 19756.
[50] M. Lowery, J. Turnage, Z. Morrow, J. D. Jakeman, A. Narayan, S. Zhe, and V. Shankar, Kernel neural operators (KNOs) for scalable, memory-efficient, geometrically-flexible operator learning, 2024, https://arxiv.org/abs/2407.00809.
[51] L. Lu, P. Jin, G. Pang, Z. Zhang, and G. E. Karniadakis, Learning nonlinear operators via DeepONet based on the universal approximation theorem of operators, Nat. Mach. Intell., 3 (2021), pp. 218–229, https://doi.org/10.1038/s42256-021-00302-5.
[52] L. Lu, S. Yanhui, and G. E. Karniadakis, Collapse of deep and narrow neural nets, 2018, https://arxiv.org/abs/1808.04947.
[53] L. Lu, S. Yeonjong, S. Yanhui, and G. E. Karniadakis, Dying ReLU and initialization: Theory and numerical examples, Commun. Comput. Phys., 28 (2020), pp. 1671–1706, https://doi.org/10.4208/cicp.OA-2020-0165.
[54] Z. Morrow and M. Stoyanov, A method for dimensionally adaptive sparse trigonometric interpolation of periodic functions, SIAM J. Sci. Comput., 42 (2020), pp. A2436–A2460, https://doi.org/10.1137/19M1283483.
[55] B. Moseley, A. Markham, and T. Nissen-Meyer, Finite basis physics-informed neural networks (FBPINNs): A scalable domain decomposition approach for solving differential equations, Adv. Comput. Math., 49 (2023), p. 62.
[56] A. Nichol, J. Achiam, and J. Schulman, On first-order meta-learning algorithms, 2018, https://arxiv.org/abs/1803.02999.
[57] F. Nobile, R. Tempone, and C. G. Webster, A sparse grid stochastic collocation method for partial differential equations with random input data, SIAM J. Numer. Anal., 46 (2008), pp. 2309–2345, https://doi.org/10.1137/060663660. [58] J. Nocedal and S. Wright, Numerical Optimization, Springer, 2nd ed., 2006, https://doi. org/10.1007/978-0-387-40065-5.
[59] T. O’Leary-Roseberry, N. Alger, and O. Ghattas, Inexact Newton methods for stochastic nonconvex optimization with applications to neural network training, 2019, https://arxiv. org/abs/1905.06738.

SHALLOW UNIVERSAL POLYNOMIAL NETWORKS 25
[60] B. Peherstorfer and K. Willcox, Data-driven operator inference for nonintrusive projection-based model reduction, Comput. Meth. Appl. Mech. Eng., 306 (2016), pp. 196215, https://doi.org/10.1016/j.cma.2016.03.025.
[61] M. Penwarden, S. Zhe, A. Narayan, and R. M. Kirby, A metalearning approach for physics-informed neural networks (PINNs): Application to parameterized PDEs, J. Comput. Phys., 477 (2023), p. 111912.
[62] A. Pinkus, Approximation theory of the MLP model in neural networks, Acta Numer., 8 (1999), p. 143–195, https://doi.org/10.1017/S0962492900002919.
[63] H. Poon and P. Domingos, Sum-product networks: A new deep architecture, in 2011 IEEE International Conference on Computer Vision Workshops, 2011, pp. 689–690.
[64] O. Ronneberger, P. Fischer, and T. Brox, U-net: Convolutional networks for biomedical image segmentation, in International Conference on Medical Image Computing and Computer-Assisted Intervention, Springer, 2015, pp. 234–241, https://doi.org/10.1007/ 978-3-319-24574-4 28.
[65] K. Shukla, J. D. Toscano, Z. Wang, Z. Zou, and G. E. Karniadakis, A comprehensive and FAIR comparison between MLP and KAN representations for differential equations and operator networks, Comput. Meth. Appl. Mech. Eng., 431 (2024), p. 117290, https: //doi.org/10.1016/j.cma.2024.117290.
[66] S. S. Sidharth, A. R. Keerthana, R. Gokul, and K. P. Anas, Chebyshev polynomial-based Kolmogorov–Arnold networks: An efficient architecture for nonlinear function approximation, 2024, https://arxiv.org/abs/2405.07200.
[67] S. Sonoda and N. Murata, Neural network with unbounded activation functions is universal approximator, Appl. Comput. Harmon. Anal., 43 (2017), pp. 233–268.
[68] T. Steihaug, The conjugate gradient method and trust regions in large scale optimization, SIAM J. Numer. Anal., 20 (1983), pp. 626–637, https://doi.org/10.1137/0720042.
[69] M. H. Stone, Applications of the theory of Boolean rings to general topology, Trans. Am. Math. Soc., 41 (1937), pp. 375–481, https://doi.org/10.1090/S0002-9947-1937-1501905-7. [70] P. L. Toint, Towards an efficient sparsity exploiting Newton method for minimization, in Sparse Matrices and Their Uses, 1981, https://api.semanticscholar.org/CorpusID: 115391681.
[71] L. N. Trefethen, Approximation Theory and Approximation Practice, SIAM, 2012.
[72] A. Vaswani, N. Shazeer, N. Parmar, J. Uszkoreit, L. Jones, A. N. Gomez, L. Kaiser, and I. Polosukhin, Attention is all you need, Adv. Neural Inf. Process. Syst., 30 (2017), https://proceedings.neurips.cc/paper files/paper/2017/file/ 3f5ee243547dee91fbd053c1c4a845aa- Paper.pdf .
[73] H. Wang and S. Xiang, On the convergence rates of Legendre approximation, Math. Comput., 81 (2012), pp. 861–877, https://doi.org/10.1090/S0025-5718-2011-02549-4.
[74] K. Weierstrass, U ̈ber die analytische Darstellbarkeit sogenannter willk ̈urlicher Functionen reeller Argumente, K ̈onigl. Akad. der Wiss., 9 (1885), pp. 1–37, https://doi.org/10.1017/ CBO9781139567886.002.
[75] D. Xiu and G. E. Karniadakis, The Wiener–Askey polynomial chaos for stochastic differential equations, SIAM J. Sci. Comput., 24 (2002), pp. 619–644, https://doi.org/10.1137/ S1064827501387826.
[76] P. Xu, F. Roosta, and M. W. Mahoney, Second-order Optimization for Non-convex Machine Learning: An Empirical Study, SIAM, 2020, pp. 199–207, https://doi.org/10.1137/ 1.9781611976236.23.
[77] Z. Xu, Y. Chen, and D. Xiu, Chebyshev feature neural network for accurate function approximation, J. Mach. Learn. Model. Comput., 6 (2025), https://doi.org/10.1615/ JMachLearnModelComput.2025056536.

SUPPLEMENTARY MATERIALS: SUPN: SHALLOW UNIVERSAL POLYNOMIAL NETWORKS ̊
ZACHARY MORROW: ; , MICHAEL PENWARDEN: ; , BRIAN CHEN; , AURYA JAVEED; , AKIL NARAYAN§ , AND JOHN D. JAKEMAN;
SM1. One dimension.
SM1.1. L8 best-approximation error. In Figure SM1.1, we observe similar convergence trends in learnable parameter count for L8 as we do in L2 for continuous function approximation cases. The exceptions are that KANs perform noticeably worse on f pxq “ |x|p, and SUPNs are now evenly matched on the Runge function. For discontinuous cases, all methods suffer in L8.
SM1.2. Architecture details. We specify the architectures of the 1D networks in Table SM1.1. We performed polynomial projection with the same number of degrees of freedom as SUPNs.
SM2. Two dimensions.
SM2.1. L8 best-approximation error. L8 convergence on the 2D examples (Figure SM2.1) is qualitatively similar to the L2 case, with two exceptions. First, uniform approximation of a discontinuous function by polynomials is error-prone. Second, the L8 accuracy of projection on the radial example has seriously degraded from the L2 setting, but it appears that (for ΛT D, at least) accuracy begins to improve after P « 1000. This is consistent with the lack of tensor-product structure in the radial targ-
et function.
SM2.2. L2 robustness. Figure SM2.2 shows that for P Á 100, SUPNs have between 5-100x less variability in their performance than DNNs and KANs at the same error tolerance. These results comport with those for the one-dimensional examples. Compared to the 1D robustness plots, we do observe an early increase in variability up to P « 100. In this regime, networks have sufficiently few parameters to yield reliable predictions that are nonetheless poor.
SM2.3. Finite sampling. Figure SM2.3 shows the results of a finite sampling experiment. The horizontal axis is the ratio of the univariate grid size to the squareroot of the number of network parameters. The largest ratio needed to obtain best
:Z. M. and M. P. contributed equally to this work.  ̊Submitted to the editors on November 25, 2025. Funding: The authors gratefully acknowledge funding from Sandia National Laboratories’ Laboratory Directed Research and Development program. Sandia National Laboratories is a multimission laboratory managed and operated by National Technology and Engineering Solutions of Sandia, LLC, a wholly owned subsidiary of Honeywell International Inc., for the U.S. Department of Energy’s National Nuclear Secur-
ity Administration under contract DE-NA0003525. Any subjective views or opinions that might be expressed in the paper do not necessarily represent the views of the U.S. Department of Energy or the United States Government. The publisher acknowledges that the U.S. Government retains a non-exclusive, paid-up, irrevocable, world-wide license to publish or reproduce the published form of this written work or allow others to do so, for U.S. Government purposes. The DOE will provide public access to res-
ults of federally sponsored research in accordance with the DOE Public Access Plan. SAND2025-14696O ;Sandia National Laboratories, 1515 Eubank Blvd SE, Albuquerque, NM 87123 ({zbmorro, mspenwa, brichen, asjavee, jdjakem}@sandia.gov). §Scientific Computing and Imaging Institute and Department of Mathematics, University of Utah, 155 S 1400 E, Room 233, Salt Lake City, UT 84112 (akil@sci.utah.edu).
SM1

SM2 Z. MORROW, M. PENWARDEN, ET AL.
10−7
10−5
10−3
10−1
Mean relative L∞ error
Cont. Rastrigin (ω = 5)
10−3
10−2
10−1
100
Absolute value, p = 1
10−1
100
Discontinuous Rastrigin
101 102 103
Num. trainable parameters
10−7
10−5
10−3
10−1
Mean relative L∞ error
Runge, c = 5
101 102 103
Num. trainable parameters
10−2
10−1
100
Absolute value, p = 1/2
DNN KAN Projection SUPN
101 102 103
Num. trainable parameters
100
101 Step Functions
Fig. SM1.1. Relative L8 errors vs. trainable parameters using SUPN, DNN, KAN, and polynomial projection for fk, k P r6s.
SUPN DNN KAN
N (width) 3, 5, 9, 18, 2, 3, 5, 9, 12 [6]
27, 35, 40
M (depth) 3, 5, 9, 18, 2, 3, 5, 9, 12 [5]
27, 35, 40
Table SM1.1
Network architectures for 1D examples.
102 103
Num. trainable parameters
10−3
10−2
10−1
100
Mean relative L∞ error
Sum
102 103
Num. trainable parameters
10−2
10−1
100
Radial
DNN KAN
Projection (HC) Projection (TD)
SUPN (HC) SUPN (TD)
102 103
Num. trainable parameters
10−2
10−1
100
Discontinuous
Cost–Accuracy Tradeoff (Trainable Parameters)
Fig. SM2.1. Relative L8 errors in 2D.

SUPPLEMENTARY MATERIALS: SHALLOW UNIV. POLY. NETW. SM3
102 103 Num. trainable parameters
10−5
10−4
10−3
10−2
10−1
√Var(rel. error)
Sum
102 103 Num. trainable parameters
10−5
10−4
10−3
10−2
10−1 Radial
DNN KAN SUPN
102 103 Num. trainable parameters
10−5
10−4
10−3
10−2
10−1 Discontinuous
Fig. SM2.2. Standard deviation of relative error over 5 realizations of initial network weights for 2D examples. To reduce clutter, only the better-performing of ΛTD and ΛHC are shown for SUPN.
SUPN (HC) SUPN (TD) DNN KAN N (width) 1, 3, 5, 7, 1, 3, 5, 7, [10] [5]
9, 11, 13, 15 9, 11, 13, 15 L (depth) 0, 3, 7, 11, 0, 2, 4, 6, [10] [5]
16, 22, 28, 34 8, 10, 12, 14
Table SM2.1
Network architectures for 2D examples.
approximation accuracy is K1D « 5?P . Since our networks have P ă 1600, then our tensor-product Gauss–Legendre rule with 200 nodes in each dimension is sufficient.
SM2.4. Architecture details. Table SM2.1 describes the architecture for the 2D targets. Here, L refers to the contour of either ΛHCpLq or ΛTDpLq.
SM3. Ten dimensions.
SM3.1. Architecture details. Table SM3.1 describes the architecture for the 10D targets.
SM4. Best-approximation predictions. In this section, we plot the predictions corresponding to the 1D step function and continuous Rastrigin targets. These plots provide a qualitative complement to the best-approximation error plots in our results. We sweep over pN, M q P r10sˆr10s. For KANs and DNNs, N denotes network width, and M denotes network depth.
SM4.1. Step functions. Figures SM4.1 to SM4.4 demonstrate that the assumption of continuity on the target function is truly necessary for L8 convergence. All methods can exhibit persistent spikes over very small sub-intervals of Ω at the discontinuities, analogous to Gibbs effects. Note that we distinguish between the training and testing grid. These spikes are not present on the training grid, since the error of the approximation is include din the loss and therefore minimized at that grid. Howev-
er, at finer resolutions during testing, there is no constraint (it is necessary to not have a constraint to fit the discontinuities in the first place during training). To fit the discontinuities at the training grid, the basis functions become extreme which

SM4 Z. MORROW, M. PENWARDEN, ET AL.
10−1 100 101
10−4
10−3
10−2
10−1
100
Sum
Relative error
Low best approx. accuracy
10−1 100 101
Medium best approx. accuracy
10−1 100 101
High best approx. accuracy
10−1 100 101
10−4
10−3
10−2
10−1
100
Radial
Relative error
10−1 100 101 10−1 100 101
10−1 100 101
K1D/√P
10−4
10−3
10−2
10−1
100
Discontinuous
Relative error
10−1 100 101
K1D/√P
Gauss–Legendre
10−1 100 101
K1D/√P
Fig. SM2.3. Finite-sampling error on the 2D examples.
SUPN (HC) DNN KAN N (width) 5, 10, 15, 20 20, 40, 60 5, 10, 15 L (depth) [7] [4] [5]
Table SM3.1
Network architectures for 10D example.
can randomly induce spikes in the underlying approximation which is seen in L8 but not L2 since they contribute very little in that norm. This is a limitation of all methods, but is particularly bad for SUPNs, and could be a future research direction to mitigate the effect while still maintaining the ability to fit discontinuities at the training grid level.

SUPPLEMENTARY MATERIALS: SHALLOW UNIV. POLY. NETW. SM5
987654321
1
10
2 3 4 5 6 7 8 9 10
Testing Grid Training Grid
SUPN: Step Functions
M
N
Fig. SM4.1. Plot of best approximation with SUPN on the step functions over pN, M q hyperparameter sweep.
987654321
1
10
2 3 4 5 6 7 8 9 10
Testing Grid Training Grid
DNN: Step Functions
Depth
W idth
Fig. SM4.2. Plot of best approximation with DNN on the step functions over pW idth, Depthq hyperparameter sweep.

SM6 Z. MORROW, M. PENWARDEN, ET AL.
54321
1
6
2345
Testing Grid Training Grid
KAN: Step Functions
Depth
W idth
Fig. SM4.3. Plot of best approximation with KAN on the step functions over pN, M q hyperparameter sweep.
654321
1
7
234567
Testing Grid Training Grid
Projection: Step Functions
M
N
Fig. SM4.4. Plot of best approximation with polynomial projection on the step functions over pN, M q hyperparameter sweep.

SUPPLEMENTARY MATERIALS: SHALLOW UNIV. POLY. NETW. SM7
SM4.1.1. Zoomed-in Discontinuities. Figures SM4.5 to SM4.7 provide a more nuanced perspective to the discontinuity approximation and how it drives the lack of L8 convergence in Figure SM1.1. Consider the initialization 0 results in Figure SM4.5 for the DNN on the test discretization. Despite the approximation perfectly fitting the training points, the method has no knowledge of the analytical location of the discontinuity, so it is misaligned with the target which is observable at higher sampling.-
 Because of this, the L8 error for the DNN in this case is 4. Regardless of the spiking behavior observed in all NN-based models (which can be more clearly seen in Figures SM4.5 to SM4.7), they have no chance of ever converging in L8 due to simply lacking the exact location of the discontinuity at higher discretizations. Other noteworthy observations from these plots is how smooth polynomial projection is compared to the NN-based methods when zoomed in, as well as the fact KAN sometimes fails to p-
ass through the training points as seen in Figure SM4.7 initialization 0.
−0.378 −0.376 −0.374
0
1
2
3
4
f(x)
Initialization 0 (Test)
−0.378 −0.376 −0.374
−2
0
2
4
Initialization 1 (Test)
−0.378 −0.376 −0.374
−1
0
1
2
3
4
Initialization 2 (Test)
Analytical (Test grid) Test grid Train grid DNN (test) SUPN (test) KAN (test) Proj (test)
−0.378 −0.376 −0.374 x
0
1
2
3
4
f(x)
Initialization 0 (Train)
−0.378 −0.376 −0.374 x
0
1
2
3
4
Initialization 1 (Train)
−0.378 −0.376 −0.374 x
0
1
2
3
4
Initialization 2 (Train)
Analytical (Train grid) Test grid Train grid DNN (train) SUPN (train) KAN (train)
Small Sized Networks (Step Function Zoomed-in)
Fig. SM4.5. Plot of zoomed in discontinuity at x “  ́0.375 for the step function target. The network approximations shown are drawn from the 5th largest width/depth or M/N models shown in Figures SM4.1 to SM4.3, i.e., along the diagonal, for three different model initializations.
SM4.2. Continuous Rastrigin. Figures SM4.8 to SM4.11 visually show the approximation methods as a function of architecture size at both the training and testing discretizations. Unlike Subsection SM4.1, we see very little generalization error between the training and testing discretizations, and spiking is not induced at higher discretizations. This gives credence to the idea that the NN-based models learn extreme basis functions to fit the discontinuity more accurately than polynomial projection.-
 For continuous functions, this phenomena is not observed and models converge with respect to their expressability under proper optimization.

SM8 Z. MORROW, M. PENWARDEN, ET AL.
−0.378 −0.376 −0.374
0
2
4
f(x)
Initialization 0 (Test)
−0.378 −0.376 −0.374
−1
0
1
2
3
4
Initialization 1 (Test)
−0.378 −0.376 −0.374
0
2
4
6
Initialization 2 (Test)
Analytical (Test grid) Test grid Train grid DNN (test) SUPN (test) KAN (test) Proj (test)
−0.378 −0.376 −0.374 x
0
1
2
3
4
f(x)
Initialization 0 (Train)
−0.378 −0.376 −0.374 x
0
1
2
3
4
Initialization 1 (Train)
−0.378 −0.376 −0.374 x
0
1
2
3
4
Initialization 2 (Train)
Analytical (Train grid) Test grid Train grid DNN (train) SUPN (train) KAN (train)
Medium Sized Networks (Step Function Zoomed-in)
Fig. SM4.6. Plot of zoomed in discontinuity at x “  ́0.375 for the step function target. The network approximations shown are drawn from the 3rd largest width/depth or M/N models shown in Figures SM4.1 to SM4.3, i.e., along the diagonal, for three different model initializations.
−0.378 −0.376 −0.374
−2
0
2
4
6
f(x)
Initialization 0 (Test)
−0.378 −0.376 −0.374
0
2
4
6
8
Initialization 1 (Test)
−0.378 −0.376 −0.374
0
1
2
3
4
Initialization 2 (Test)
Analytical (Test grid) Test grid Train grid DNN (test) SUPN (test) KAN (test) Proj (test)
−0.378 −0.376 −0.374 x
0
1
2
3
4
f(x)
Initialization 0 (Train)
−0.378 −0.376 −0.374 x
0
1
2
3
4
Initialization 1 (Train)
−0.378 −0.376 −0.374 x
0
1
2
3
4
Initialization 2 (Train)
Analytical (Train grid) Test grid Train grid DNN (train) SUPN (train) KAN (train)
Large Sized Networks (Step Function Zoomed-in)
Fig. SM4.7. Plot of zoomed in discontinuity at x “  ́0.375 for the step function target. The network approximations shown are drawn from the largest width/depth or M/N models shown in Figures SM4.1 to SM4.3, i.e., along the diagonal, for three different model initializations.

SUPPLEMENTARY MATERIALS: SHALLOW UNIV. POLY. NETW. SM9
987654321
1
10
2 3 4 5 6 7 8 9 10
Testing Grid Training Grid
SUPN: Cont. Rastrigin (ω = 5)
M
N
Fig. SM4.8. Plot of best approximation with SUPN on the continuous Rastrigin function over pN, M q hyperparameter sweep.
987654321
1
10
2 3 4 5 6 7 8 9 10
Testing Grid Training Grid
DNN: Cont. Rastrigin (ω = 5)
Depth
W idth
Fig. SM4.9. Plot of best approximation with DNN on the continuous Rastirgin function over pW idth, Depthq hyperparameter sweep.

SM10 Z. MORROW, M. PENWARDEN, ET AL.
54321
1
6
2345
Testing Grid Training Grid
KAN: Cont. Rastrigin (ω = 5)
Depth
W idth
Fig. SM4.10. Plot of best approximation with KAN on the continuous Rastirgin function over pW idth, Depthq hyperparameter sweep.
654321
1
7
234567
Testing Grid Training Grid
Projection: Cont. Rastrigin (ω = 5)
Depth
W idth
Fig. SM4.11. Plot of best approximation with polynomial projection on the continuous Rastrigin function over pN, M q hyperparameter sweep. Each grid cell uses N pM ` 1q terms, i.e. the same as an SUPN.

SUPPLEMENTARY MATERIALS: SHALLOW UNIV. POLY. NETW. SM11
SM5. Sobolev space SUPN estimates. We provide the proof of Proposition 3.4 for k ą 0 and εΛpf q ą 0. This proof is conceptually the same as the k “ 0 proof, but involves more opaque constants. By definition of εΛpf q, there is some polynomial q ̃ P PΛ satisfying (3.3). Let q ̃ “ ř
mPΛ αmTm, and define
R :“ }q ̃}W k,8pΩq “ max
|β|ďk sup
xPΩ
ˇ ˇ ˇ ˇ
Bβ
Bxβ q ̃pxq
ˇ ˇ ˇ ˇ
ă 8.
If R “ 0, set c1 “ 0 in (3.2) with N “ 1 to achieve fN,Λ “ q “ 0, achieving (3.4). Otherwise, consider R ą 0. With σpyq “ tanh y, we have that,
σpnqp0q “
# 0, n even
2n`1 p2n`1  ́1qBn`1
n`1 , n odd
where Bn is the nth Bernoulli number. An additional property of σ we require is that there are absolute numbers, pcn, dnq, such that,
ˇ ˇ
ˇσpnqpyq  ́ σpnqp0q
ˇ ˇ
ˇ ď cn|y|, |y| ď dn ď 1.
For example, the above is true for any function with a bounded derivative of order n ` 2, which includes the tanh function. To make computations simpler, we use the looser but sufficient estimate,
ˇ ˇ
ˇσpnqpyq
ˇ ˇ
ˇ ď an, |y| ď d ̃n,
where an “ maxt1, σpnqp0qu, where d ̃n P p0, dnq. To compute an order-k derivative of an SUPN, Faa ́ di Bruno’s formula states that, for a function q with sufficient differentiable smoothness,
dk
dxk σpqpxqq “
k
ÿ
l“0
σplqpqpxqqBk,l
 ́
qp1q, . . . , qpk ́l`1q
 ̄
“ σ1pqpxqqBk,1
 ́
qp1q, . . . , qpkq
 ̄
`
k
ÿ
l“0
l‰1
σplqpqpxqqBk,l
 ́
qp1q, . . . , qpk ́l`1q
 ̄
,
where Bk,l is the k-variate (exponential) incomplete Bell polynomial of degree l. We note that Bk,1ps1, . . . , skq “ sk for all k, and Bk,0 “ 0 for any k ą 0, so that our formula simplifies to,
dk
dxk σpqpxqq “ σ1pqpxqqqpkqpxq `
k
ÿ
l“2
σplqpqpxqqBk,l
 ́
qp1q, . . . , qpk ́l`1q
 ̄
,
We will need suprema of the incomplete Bell polynomials over a compact isotropic hypercube of edgelength R:
Bk :“ max
l“0,...,k }Bk,lpz1, . . . , zkq}L8pr ́R,Rskq.
A final property of the Bell polynomials we need is that for r ě 2, Br,lpz1, . . . , zrq is homogeneous of order l, i.e., Br,lpcz1, . . . , czrq “ clBr,lpz1, . . . , zrq.

SM12 Z. MORROW, M. PENWARDEN, ET AL.
For simplicity, we take the multi-index β specifying the derivative to be a (multiple of a) cardinal unit vector, i.e., β “ res, where r P r1, ks, and es P Rd is the cardinal unit vector in direction s. Then Bβf “ Bsrf . For any r P r1, ks,
Br
Bxrs
σpqpxqq  ́ qpr,sqpxq “ `σ1pqpxqq  ́ 1 ̆ qprqpxq
loooooooooooomoooooooooooon
pAq
`
r
ÿ
l“2
σplqpqpxqqBr,l
 ́
qp1,sq, . . . , qpr ́l`1,sq
 ̄
loooooooooooooooooooooooooomoooooooooooooooooooooooooon
pBq
where for shorthand we’ve written qpr,sq to denote the r-th partial derivative of q in the sth variable. Now, define q as,
qpxq “ 1
S q ̃pxq, S “ 1
aδεΛpf q max
"
1, R
mintd ̃1, . . . , d ̃ku , R3{2, Br maxta2, . . . , aru
*
Then:
|pAq| ď ˇ
ˇσ1pqpxqq  ́ 1ˇ
ˇ R{S ď |qpxq|2R{S ď R3{S3 ď δεΛpf q 1
S
|pBq| ď
r
ÿ
l“2
|σplqpqpxqq|
ˇ
ˇ
ˇBr,l
 ́
qp1,sq, . . . , qpr ́l`1,sq
 ̄ˇ ˇ ˇ
ď
r
ÿ
l“2
al
ˇ
ˇ
ˇBr,l
 ́
qp1,sq, . . . , qpr ́l`1,sq
 ̄ˇ ˇ ˇ
ď
r
ÿ
l“2
alS ́l ˇ
ˇ
ˇBr,l
 ́
q ̃p1,sq, . . . , q ̃pr ́l`1,sq
 ̄ˇ ˇ ˇ
ď
r
ÿ
l“2
alS ́lBr
ď1
S
r
ÿ
l“2
alS ́1Br
ď δεΛpf q 1
S
The same estimate holds for all β satisfying |β| ď k by taking iterated derivatives in each variable. Now consider the pN, M q “ p1, |Λ|q SUPN in (3.2), with the parameter assignment
a1,m “ αm
S , c1 “ S,
so that fN,Λpxq “ Sσpqpxqq. We have shown, for any x P Ω and |β| ď k,
ˇ ˇ ˇ ˇ
Bβ
Bxβ fN,Λpxq  ́ Bβ
Bxβ q ̃pxq
ˇ ˇ ˇ ˇ
“S
ˇ ˇ ˇ ˇ
Bβ
Bxβ σpqpxqq  ́ Bβ
Bxβ qpxq
ˇ ˇ ˇ ˇ
ď δεΛpf q ,
which completes the proof.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:25.541Z
- **Text Length:** 83949 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 37 of 37
