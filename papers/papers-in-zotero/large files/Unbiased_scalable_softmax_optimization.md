# PDF Document: Fagan and Iyengar - 2018 - Unbiased scalable softmax optimization.pdf

**File Path:** Fagan and Iyengar - 2018 - Unbiased scalable softmax optimization.pdf

**Processed Date:** 2026-02-10T18:15:35.722Z

**File Size:** 1110.71 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2711

**Title:** Unbiased scalable softmax optimization

**Collection:** Large Files

---

## Extracted Text Content

Unbiased scalable softmax optimization
Francois Fagan, Garud Iyengar
Department of Industrial Engineering and Operations Research
Columbia University
Abstract
Recent neural network and language models rely on softmax distributions with an extremely large number of categories. Since calculating the softmax normalizing constant in this context is prohibitively expensive, there is a growing literature of efficiently computable but biased estimates of the softmax. In this paper we propose the first unbiased algorithms for maximizing the softmax likelihood whose work per iteration is independent of the number of classes and datapoints (and no extra work is r-
equired at the end of each epoch). We show that our proposed unbiased methods comprehensively outperform the state-of-the-art on seven real world datasets.
1 Introduction
Under the softmax model1 the probability that a random variable y takes on the label ` ∈ {1, ..., K}, is given by
p(y = `|x; W ) = ex>w`
∑K
k=1 ex>wk
, (1)
where x ∈ RD is the covariate, wk ∈ RD is the vector of parameters for the k-th class, and W = [w1, w2, ..., wK ] ∈ RD×K is the parameter matrix. Given a dataset of N label-covariate pairs D = {(yi, xi)}N
i=1, the ridge-regularized maximum log-likelihood problem is given by
L(W ) =
N
∑
i=1
x>
i wyi − log(
K
∑
k=1
ex>
i wk ) − μ
2 ‖W ‖2
2, (2)
where ‖W ‖2 denotes the Frobenius norm. The softmax is a fundamental and ubiquitous distribution, with applications in fields such as economics and biomedicine (Rust & Zahorik, 1993; Kirkwood & Sterne, 2010; Gopal & Yang, 2013) and appears as a convex surrogate for the (hard) maximum loss in discrete optimization (Maddison et al., 2016) and network flows (Shahrokhi & Matula, 1990). This paper focusses on how to maximize (2) when N , K, D are all large. Large values for N ,K,D are increasingly comm-
on in modern applications such as natural language processing and recommendation systems, where N , K, and D can each be on the order of millions or billions (Chelba et al., 2013; Partalas et al., 2015). A natural approach to maximizing L(W ) with large values for N , K and D is to use Stochastic Gradient Descent (SGD), sampling a mini-batch of datapoints each iteration. However when K and D are large, the O(KD) cost of calculating the normalizing sum ∑K
k=1 ex>
i wk in the stochastic gradients can be prohibitively expensive. Several approximations that avoid calculating the normalizing sum have been proposed to address this difficulty. These include tree-structured methods (Bengio et al., 2003; Daume III et al., 2016; Grave et al., 2016; Jernite et al., 2016), sampling methods (Bengio & Senécal, 2008; Mnih & Teh, 2012; Ji et al., 2015; Joshi et al., 2017) and self-normalization (Andreas & Klein, 2015). Alternative models such as the spherical family of l-
osses (de Brébisson & Vincent, 2015; Vincent et al., 2015) that do not require normalization have been proposed to sidestep the issue entirely (Martins & Astudillo, 2016). Krishnapuram et al. (2005) avoid calculating the sum using a maximization-majorization approach based on lower-bounding the eigenvalues of the Hessian matrix. All2 of these approximations are computationally tractable
1Also known as the multinomial logit model. 2The method of Krishnapuram et al. (2005) does converge to the optimal MLE, but has O(N D) runtime per iteration which is not feasible for large N and D.
1
arXiv:1803.08577v1 [stat.ML] 22 Mar 2018

for large N , K and D, but are unsatisfactory in that they are biased and do not converge to the optimal W ∗ = argmax L(W ). Recently3 Raman et al. (2016) showed how to recast (2) as a double-sum over N and K. This formulation is amenable to SGD that samples only one datapoint and class in each iteration, reducing the per iteration cost to O(D). However, vanilla SGD applied to this formulation is unstable in that the stochastic gradients may have high variance and a high dynamic range leading to -
computational overflow errors. Raman et al. (2016) deal with this instability by occasionally calculating the normalizing sum for all datapoints at a cost of O(N KD). Although this achieves stability, its high cost nullifies the benefit of the cheap O(D) per iteration cost. In this paper we propose two robust unbiased SGD algorithms for optimizing double-sum formulations of the softmax likelihood. The first is an implementation of Implicit SGD, a stochastic gradient method that is known to be more-
 stable than vanilla SGD, and yet has similar convergence properties (Toulis et al., 2016). We show that the Implicit SGD updates for the double-sum formulation can be efficiently computed using a bisection method with tight initial bounds. Furthermore, we guarantee the stability of Implicit SGD by proving that the step size is asymptotically linearly bounded (unlike vanilla SGD which is exponentially bounded). The second algorithm is a new SGD method called U-max, that is guaranteed to have bound-
ed gradients and converges to the optimal solution of (2) for all sufficiently small learning rates. This method is particularly suited to situations where calculating simultaneous inner products is cheap (for example when using GPUs). We compare the performance of U-max and Implicit SGD to the (biased) state-of-the-art methods for maximizing the softmax likelihood which cost O(D) per iteration. Both U-max and Implicit SGD outperform all other methods. Implicit SGD has the best performance with an-
 average log-loss 4.44 times lower than the previous state-of-the-art biased methods. In summary, our contributions in this paper are that we:
1. Develop an alternative softmax double-sum formulation with gradients of smaller magnitude as compared to that in Raman et al. (2016) (Section 2).
2. Derive an efficient implementation of Implicit SGD using a bisection method, analyze its runtime and bound its step size (Section 3.1).
3. Propose the U-max algorithm to stabilize the vanilla SGD updates and prove its convergence (Section 3.2).
4. Conduct experiments showing that both U-max and Implicit SGD outperform the previous state-of-the-art, with Implicit SGD having the best performance (Section 4).
2 Convex double-sum formulation
2.1 Derivation of double-sum
In order to have an SGD method that samples both datapoints and classes each iteration, we need to represent (2) as a double-sum over datapoints and classes. We begin by rewriting (2) in a more convenient form,
L(W ) =
N
∑
i=1
− log(1 +
∑
k6=yi
ex>
i (wk−wyi )) − μ
2 ‖W ‖2
2. (3)
The key to converting (3) into its double-sum representation is to express the negative logarithm using its convex conjugate4:
− log(a) = max
v<0 {av − (− log(−v) − 1)}
= muax{−u − exp(−u)a + 1} (4)
3This same idea has appeared multiple times in the literature. For example (Ruiz et al., 2018) use a similar idea for variational inference of the softmax. 4This trick is related to the bounds given in (Gopal & Yang, 2013).
2

where u = − log(−v) and the optimal value of u is u∗(a) = log(a). Applying (4) to each of the logarithmic terms in (3) yields L(W ) = − minu≥0 {f (u, W )} + N where
f (u,W ) =
N
∑
i=1
∑
k6=yi
ui + e−ui
K − 1 + ex>
i (wk−wyi )−ui + μ
2 ‖W ‖2
2 (5)
is our double-sum representation that we seek to minimize. Clearly f is a jointly convex function in u and W . The variable ui can be thought of as an approximation to the log-normalizer, as its optimal solution is u∗
i (W ) = log(1 + ∑
k6=yi ex>
i (wk−wyi )) ≥ 0. In Appendix B we prove that the optimal u and W are contained in a compact convex set and that f is strongly convex within this set. Thus performing projected-SGD on f is guaranteed to converge to a unique optimum with a convergence rate of O(1/T ) where T is the number of iterations (Lacoste-Julien et al., 2012).
2.2 Instability of vanilla SGD
The challenge in optimizing f using SGD is that the gradients can have very large magnitudes. Observe that f = Eik[fik] where i ∼ unif({1, ..., N }), k ∼ unif({1, ..., K} − {yi}) and
fik(u, W ) = N
(
ui + e−ui + (K − 1)ex>
i (wk−wyi )−ui
)
+μ
2 (βyi ‖wyi ‖2
2 + βk‖wk‖2
2), (6)
where βj = N
nj+(N−nj)/(K−1) is the inverse of the probability of class j being sampled either through
i or k, and nj = |{i : yi = j}|. The corresponding stochastic gradient is:
∇wk fik = N (K − 1)ex>
i (wk−wyi )−ui xi + μβkwk
∇wyi fik = −N (K − 1)ex>
i (wk−wyi )−ui xi + μβyi wyi
∇wj fik = 0 ∀j ∈/ {k, yi}
∇ui fik = −N (K − 1)ex>
i (wk−wyi )−ui + N (1 − e−ui ) (7)
If ui is at its optimal value u∗
i (W ) = log(1 + ∑
k6=yi ex>
i (wk−wyi )) then ex>
i (wk−wyi )−ui ≤ 1 and the
magnitude of the N (K − 1)ex>
i (wk−wyi )−ui terms in the gradient are bounded by N (K − 1)‖xi‖2. However if ui x>
i (wk − wyi ), then ex>
i (wk−wyi )−ui ≫ 1 and the magnitude of the gradients can become extremely large. Extremely large gradients lead to two major problems: (a) they could lead to overflow errors and cause the algorithm to crash, (b) they result in the stochastic gradient having high variance, which leads to slow convergence5. In Section 4 we show that these problems occur in practice and make vanilla SGD both an unreliable and inefficient method6. The sampled softmax optimizers in the literature (Bengio & Senécal, 20-
08; Mnih & Teh, 2012; Ji et al., 2015; Joshi et al., 2017) do not have the issue of large magnitude gradients. Their gradients are bounded by N (K − 1)‖xi‖2 since their approximations ensure that u∗
i (W ) > x>
i (wk − wyi ).
For example, in one-vs-each (Titsias, 2016), u∗
i (W ) is approximated by log(1 + ex>
i (wk−wyi )) >
x>
i (wk − wyi ). However, since these methods only approximate u∗
i (W ), the iterates do converge to
the optimal W ∗. The goal of this paper is to design reliable and efficient SGD algorithms for optimizing the double-sum formulation in (5). We propose two such methods: Implicit SGD (Section 3.1) and U-max (Section 3.2). But before we introduce these methods we should establish that (5) is a good choice for the double-sum formulation.
5The convergence rate of SGD is inversely proportional to the second moment of its gradients (Lacoste-Julien et al., 2012). 6The same problems arise if we approach optimizing (3) via stochastic composition optimization (Wang et al., 2016). As is shown in Appendix C, stochastic composition optimization yields near-identical expressions for the stochastic gradients in (7) and has the same stability issues.
3

2.3 Choice of double-sum formulation
The double-sum in (5) is different to that of Raman et al. (2016). Their formulation can be derived by applying the convex conjugate substitution to (2) instead of (3). The resulting equations are
L(W ) = − mu ̄in



1 N
N
∑
i=1
1
K −1
∑
k6=yi
f ̄ik(u ̄, W )



+N
where
f ̄ik(u ̄, W ) = N (u ̄i − x>
i wyi + ex>
i wyi −u ̄i + (K − 1)ex>
i wk−u ̄i ) + μ
2 (βyi ‖wyi ‖2
2 + βk‖wk‖2
2) (8)
and the optimal solution for u ̄i is u ̄∗
i (W ∗) = log(∑K
k=1 ex>
i w∗
k ). The only difference between the formulations is the reparameterization u ̄i = ui + x>
i wyi .
Although either double-sum formulations can be used as a basis for SGD, our formulation in (5) tends to have smaller magnitude stochastic gradients, and hence faster convergence. To see this on a high level, note that typically x>
i wyi = argmaxk{x>
i wk} and so the u ̄i, x>
i wyi and ex>
i wyi −u ̄i terms
are of the greatest magnitude in (8). Although at optimality these terms should roughly cancel, this will not be the case during the early stages of optimization, leading to stochastic gradients of large magnitude. In contrast, the function fik in (6) only has x>
i wyi appearing as a negative
exponent, and so if x>
i wyi is large then the magnitude of the stochastic gradients will be small. A more rigorous version of this argument is presented in Appendix A and in Section 4 we present numerical results confirming that our double-sum formulation leads to faster convergence.
3 Stable SGD methods
3.1 Implicit SGD
One method that solves the large gradient problem is Implicit SGD7 (Bertsekas, 2011; Ryu & Boyd, 2014; Toulis & Airoldi, 2015; Toulis et al., 2016). Implicit SGD uses the update equation
θ(t+1) = θ(t) − ηt∇f (θ(t+1), ξt), (9)
where θ(t) is the value of the tth iterate, f is the function we seek to minimize and ξt is a random variable controlling the stochastic gradient such that ∇f (θ) = Eξt [∇f (θ, ξt)]. The update (9) differs from vanilla SGD in that θ(t+1) appears on both the left and right side of the equation, whereas in vanilla SGD it appears only on the left side. In our case θ = (u, W ) and ξt = (it, kt) with ∇f (θ(t+1), ξt) = ∇fit,kt (u(t+1), W (t+1)).
Although Implicit SGD has similar convergence rates to vanilla SGD, it has other properties that can make it preferable over vanilla SGD. It is more robust to the learning rate (Toulis et al., 2016), which important since a good value for the learning rate is never known a priori, and is provably more stable (Ryu & Boyd, 2014, Section 5). Another property, which is of particular interest to our problem, is that it has smaller step sizes.
Proposition 1. Consider applying Implicit SGD to optimizing f (θ) = Eξ[f (θ, ξ)] where f (θ, ξ) is m-strongly convex for all ξ. Then
‖∇f (θ(t+1), ξt)‖2 ≤ ‖∇f (θ(t), ξt)‖2 − m‖θ(t+1) − θ(t)‖2
and so the Implicit SGD step size is smaller than that of vanilla SGD.
Proof. The proof is provided in Appendix D.
The bound in Proposition 1 can be tightened for our particular problem. Unlike vanilla SGD whose step size magnitude is exponential in x>
i (wk − wyi ) − ui, as shown in (7), for Implicit SGD
the step size is asymptotically linear in x>
i (wk − wyi ) − ui. This effectively guarantees that Implicit SGD cannot suffer from computational overflow.
7Also known to as an “incremental proximal algorithm” (Bertsekas, 2011) or “stochastic proximal iteration” (Ryu & Boyd, 2014).
4

Proposition 2. Consider the Implicit SGD algorithm where in each iteration only one datapoint i and one class k 6= yi is sampled. The magnitude of its step size in W is O(x>
i ( wk
1+ημβk − wyi
1+ημβyi
) − ui).
Proof. The proof is provided in Appendix E.2.
The major difficulty in applying Implicit SGD is that in each iteration one has to compute a solution to (9) (Ryu & Boyd, 2014, Section 6). The tractability of this procedure is problem dependent. We show that computing a solution to (9) is indeed tractable for the problem considered in this paper. The details are laid out in full in Appendix E.
Proposition 3. Consider the Implicit SGD algorithm where in each iteration n datapoints and m classes are sampled. The Implicit SGD update θ(t+1) can be computed to within accuracy in runtime O(n2(n + m) log( −1) + nmD).
Proof. The proof is provided in Appendix E.4.
In Proposition 3 the log( −1) factor comes from applying a first order method to solve the strongly convex Implicit SGD update equation. It may be the case that performing this optimization is more expensive than the O(nmD) cost of computing the x>
i wk inner products, and so each iteration of Implicit SGD may be significantly slower than that of vanilla SGD. Fortunately, in certain cases we can improve the runtime of solving the implicit update. If n = 1 and we just sample one datapoint per iteration then it is possible to reduce the update to solving just a univariate strongly convex optimization problem (see Appendix E.3 for details). Furthermore, when m = 1 and only one class is sampled per iteration then we can derive upper and lower bo-
unds on the one-dimensional variate to be optimized over. The optimization problem can then be solved using a bisection method, with an explicit upper bound on its cost.
Proposition 4. Consider the Implicit SGD algorithm with learning rate η where in each iteration only one datapoint i and one class k 6= yi is sampled. The Implicit SGD iterate θ(t+1) can be computed to within accuracy with only two D-dimensional vector inner products and at most log2( −1) + log2(|x>
i ( wk
1+ημβk − wyi
1+ημβyi
) − ui| + 2ηN ‖xi‖22 + log(2K)) bisection method function
evaluations.
Proof. The proof is provided in Appendix E.1 and the pseudocode is presented in Algorithm 1 in the appendix.
For any reasonably large dimension D, the cost of the two D-dimensional vector inner-products will outweigh the cost of the bisection, and Implicit SGD with n = m = 1 will have roughly the same speed per iteration as vanilla SGD with n = m = 1. This is empirically confirmed for seven real-world datasets in Section 4.1. However, if calculating inner products is relatively cheap (for example if D is small or GPUs are used), then Implicit SGD will be slower than vanilla SGD. The U-max algorithm, pres-
ented next, is stable in the same way Implicit SGD is but has the same runtime as vanilla SGD. This makes U-max an ideal choice when inner products are cheap.
3.2 U-max method
As explained in Section 2.2, vanilla SGD has large gradients when ui x>
i (wk − wyi ). This
can only occur when ui is less than its optimum value for the current W , since u∗
i (W ) = log(1 +
∑
j6=yi ex>
i (wk−wyi )) ≥ x>
i (wk − wyi ). A simple remedy is to set ui = log(1 + ex>
i (wk−wyi )) whenever
ui x>
i (wk − wyi ). Since log(1 + ex>
i (wk−wyi )) > x>
i (wk − wyi ) this guarantees that ui >
x>
i (wk − wyi ) and so the gradients will be bounded. It also brings ui closer8 to its optimal value for the current W and thereby decreases the the objective f (u, W ). This is exactly the mechanism behind the U-max algorithm — see Algorithm 2 in Appendix F for its pseudocode. U-max is the same as vanilla SGD except for two modifications: (a) ui is set equal to log(1 + ex>
i (wk−wyi )) whenever ui ≤ log(1 + ex>
i (wk−wyi )) − δ for some threshold δ > 0, (b) ui is projected onto [0, Bu], and W onto {W : ‖W ‖2 ≤ BW }, where Bu and BW are set so that the optimal u∗
i ∈ [0, Bu] and the optimal W ∗ satisfies ‖W ∗‖2 ≤ BW . See Appendix B for more details on how to set Bu and BW .
8Since ui < x>
i (wk − wyi ) < log(1 + ex>
i (wk−wyi )) < log(1 + ∑
j6=yi ex>
i (wk−wyi )) = u∗
i (W ).
5

Table 1: Datasets with a summary of their properties. Where the number of classes, dimension or number of examples has been altered, the original value is displayed in brackets.
Data set Classes Dimension Examples
MNIST 10 780 60,000 Bibtex 147 (159) 1,836 4,880 Delicious 350 (983) 500 12,920 Eurlex 838 (3,993) 5,000 15,539 AmazonCat-13K 2,709 (2,919) 10,000 (203,882) 100,000 (1,186,239) Wiki10 4,021 (30,938) 10,000 (101,938) 14,146 WikiSmall 18,207 (28,955) 10,000 (2,085,164) 90,737 (342,664)
Proposition 5. Suppose Bf ≥ maxik ‖∇fik(u, W )‖2 for all ‖W ‖22 ≤ B2
W and 0 ≤ u ≤ Bu.
Suppose the learning rate ηt ≤ δ2/(4B2
f ), then U-max with threshold δ converges to the optimum of (2), and the rate of convergence is at least as fast as SGD with the same learning rate.
Proof. The proof is provided in Appendix G.
U-max directly resolves the problem of extremely large gradients. Modification (a) ensures that δ ≥ x>
i (wk − wyi ) − ui (otherwise ui would be increased to log(1 + ex>
i (wk−wyi ))) and so the magnitude of the U-max gradients are bounded above by N (K − 1)eδ‖xi‖2. In U-max there is a trade-off between the gradient magnitude and learning rate that is controlled by δ. For Proposition 5 to apply we require that the learning rate ηt ≤ δ2/(4B2
f ). A small δ yields small magnitude gradients, which makes convergence fast, but necessitates a small ηt, which makes convergence slow. As presented above U-max only samples one datapoint and class per iteration, but it trivially generalizes to multiple datapoints and classes. If n datapoints and m classes are sampled, then the runtime is O(nmD), due to the vector inner-product calculations. This is the same runtime as vanilla SGD as well as the state-of-the-art biased methods such as Noise Cont-
rastive Estimation (Mnih & Teh, 2012), Importance Sampling (Bengio & Senécal, 2008) and One-Vs-Each (Titsias, 2016).
4 Experiments
Two sets of experiments were conducted to assess the performance of the proposed methods. The first compares U-max and Implicit SGD to the state-of-the-art over seven real world datasets. The second investigates the difference in performance between the two double-sum formulations discussed in Section 2.3. We begin by specifying the experimental setup and then move onto the results.
4.1 Experimental setup
Data. We used the MNIST, Bibtex, Delicious, Eurlex, AmazonCat-13K, Wiki10, and WikiSmall datasets9, the properties of which are summarized in Table 1. Most of the datasets are multi-label and, as is standard practice (Titsias, 2016), we took the first label as being the true label and discarded the remaining labels. To make the computation more manageable, we truncated the number of features to be at most 10,000 and the training and test size to be at most 100,000. If, as a result of the dimension-
 truncation, a datapoint had no non-zero features then it was discarded. The features of each dataset were normalized to have unit L2 norm. All of the datasets were pre-separated into training and test sets. We only focus on the performance on the algorithms on the training set, as the goal in this paper is to investigate how best to optimize the softmax likelihood, which is given over the training set.
9All of the datasets were downloaded from http://manikvarma.org/downloads/XC/XMLRepository.html, except WikiSmall which was obtained from http://lshtc.iit.demokritos.gr/.
6

Algorithms. We compared our algorithms to the state-of-the-art methods for optimizing the softmax which have runtime O(D) per iteration10. The competitors include Noise Contrastive Estimation (NCE) (Mnih & Teh, 2012), Importance Sampling (IS) (Bengio & Senécal, 2008) and One-Vs-Each (OVE) (Titsias, 2016). Note that these methods are all biased and will not converge to the optimal softmax MLE, but, perhaps, something close to it. For these algorithms we set n = 100, m = 5, which are standard setti-
ngs11. For Implicit SGD we chose to implement the version in Proposition 4 which has n = 1, m = 1 and used Brent’s method as out bisection method solver. For U-max and vanilla SGD we set n = 1, m = 5 and for U-max the threshold parameter δ = 1. For both methods we also experimented with m = 1 but obtained significantly better performance with m = 5. The probable reason is that having a larger m value decreases the variance of the gradients, making the algorithms more stable with higher learning ra-
tes and thereby improving convergence. The ridge regularization parameter μ was set to zero and the classes were sampled uniformly for all algorithms.
Epochs, losses and runtimes. Each algorithm was run for 50 epochs on each dataset. The learning rate was decreased by a factor of 0.9 each epoch. Both the prediction error and log-loss (2) were recorded at the end of 10 evenly spaced epochs over the 50 epochs. The OVE, NCE, IS, Vanilla and U-max algorithms have virtually the same runtime per iteration and so their relative performance can be gauged by plotting their log-loss over the epochs. Since Implicit SGD has to solve an inner optimization pr-
oblem each iteration, its runtime will be slower than that of other algorithms with n = 1, m = 1, but may be faster than algorithms with n = 1, m > 1. Thus plotting its performance over the epochs may yield an inaccurate comparison to the other algorithms with respect to runtime. To investigate this we measured the runtime of Implicit SGD with n = m = 1 vs vanilla SGD12 with n = 1, m = 5 for 50 epochs on each dataset. To make the runtime comparison as fair as possible, both algorithms were coded i-
n a standard NumPy framework. The runtime of Implicit SGD is 0.65 ± 0.15 times that of vanilla SGD (see Table 4 in Appendix H for runtimes.)13. Although these results are data, implementation and hardware dependent, they strongly indicate that Implicit SGD with n = m = 1 is faster than vanilla SGD (or any similar method) with n = 1, m = 5. Thus plotting the log-loss over the epochs gives a conservative estimate of Implicit SGD’s relative performance with respect to runtime.
Learning rate. The magnitude of the gradient differs in each algorithm, due to either underor over-estimating the normalizing constant from (2). To set a reasonable learning rate for each algorithm on each dataset, we ran them on 10% of the training data with initial learning rates14 η = 100,±1,±2,±3/N . The learning rate with the best performance after 50 epochs is then used when the algorithm is applied to the full dataset. The tuned learning rates are presented in Table 2. Note that vanilla SGD-
 requires a very small learning rate, otherwise it suffered from overflow. On average the tuned vanilla SGD learning rate is 3,019 times smaller than Implicit SGD’s and 319 times smaller than U-max’s.
4.2 Results
Comparison to state-of-the-art. Plots of the performance of the algorithms on each dataset are displayed in Figure 1 with the relative performance compared to Implicit SGD given in Table 3. The Implicit SGD method has the best performance on all datasets but one. After just one epoch its performance is better than all of the state-of-the-art biased methods are after 50. Not
10Raman et al. (2016) have runtime O(N KD) per epoch, which is equivalent to O(KD) per iteration. This is a factor of K slower than the methods we compare against. In most of our experiments, the second epoch of Raman would not have even started by the time our algorithms have already nearly converged. 11We also experimented setting n = 1, m = 5 in these methods and there was virtually no difference in performance except the runtime was slower. 12Any of OVE, NCE, IS, Vanilla and U-max could have b-
een used since their runtimes are virtually identical. 13As noted above, vanilla SGD with m = 5 performed significantly better than with m = 1, thus we compare to the m = 5 runtime. The runtime of Implicit SGD was on average 1.04 ± 0.07 times that of vanilla SGD with n = m = 1 for both methods. 14The learning rates are divided by N to counter the stochastic gradient being proportional to N and thereby make the step size independent of N .
7

Table 2: Tuned initial learning rates for each algorithm on each dataset. The learning rate in 100,±1,±2,±3/N with the lowest log-loss after 50 epochs using only 10% of the data is displayed. Vanilla SGD applied to AmazonCat, Wiki10 and WikiSmall suffered from overflow with a learning rate of 10−3/N , but was stable with smaller learning rates (the largest learning rate for which it was stable is displayed).
Data set OVE NCE IS Vanilla Umax Implicit
MNIST 101 101 101 10−2 101 10−1 Bibtex 102 102 102 10−2 10−1 101 Delicious 101 103 103 10−3 10−2 10−2 Eurlex 10−1 102 102 10−3 10−1 101 AmazonCat 101 103 103 10−5 10−2 10−3 Wiki10 10−2 103 102 10−4 10−2 100 WikiSmall 103 103 103 10−4 10−3 10−3
0 10 20 30 40 50
0.5
1.0
1.5
2.0
MNIST
0 10 20 30 40 50
1
2
3
4
Bibtex
0 10 20 30 40 50
3.5
4.0
4.5
5.0
5.5
Delicious
0 10 20 30 40 50
2
3
4
5
6
Eurlex
0 10 20 30 40 50
4
5
6
7
AmazonCat
0 10 20 30 40 50
2
3
4
5
6
7
8
Wiki10
0 10 20 30 40 50
7.5
8.0
8.5
9.0
9.5
Wiki-small
Figure 1: The x-axis is the number of epochs and the y-axis is the log-loss from (2).
Table 3: Relative log-loss after 50 epochs. The values for each dataset are normalized by dividing by the corresponding Implicit log-loss. The algorithm with the lowest log-loss for each dataset is in bold.
Data set OVE NCE IS Vanilla U-max Implicit
MNIST 5.25 5.55 5.26 1.31 1.40 1.00 Bibtex 12.65 12.65 12.48 6.61 4.25 1.00 Delicious 1.77 1.78 1.76 1.16 1.03 1.00 Eurlex 4.65 4.59 4.58 2.58 1.50 1.00 AmazonCat 2.01 2.03 2.00 1.39 0.93 1.00 Wiki10 3.68 3.72 3.64 3.13 1.24 1.00 WikiSmall 1.33 1.33 1.33 1.13 1.01 1.00
Average 4.48 4.52 4.44 2.47 1.62 1.00
only does it converge faster in the first few epochs, it also converges to the optimal MLE (unlike the biased methods that prematurely plateau). On average after 50 epochs Implicit SGD’s log-loss is a factor of 4.44 times lower than that of the biased methods. Out of the algorithms that sample more than one class per iteration, U-max’s performance is the best. It is the only algorithm to outperform Implicit SGD on a dataset (AmazonCat). Vanilla
8

Learning rates
0 10 20 30 40 50
6.4
6.6
OVE
0 10 20 30 40 50
6.2
6.4
6.6
NCE
0 10 20 30 40 50
6.2
6.4
6.6
IS
0 10 20 30 40 50
5.6
5.7
5.8
5.9
6.0 Vanilla
0 20 40
0
1000
2000
3000
U-max
0 10 20 30 40 50
1
2
3
4 Implicit
Figure 2: Log-loss on Eurlex for different learning rates.
0 10 20 30 40 50 Epochs
101
Log-likelihood
Double-sum formulations
Learning rates
Figure 3: Log-loss of U-max on Eurlex for different learning rates with our proposed double-sum formulation and that of Raman et al. (2016).
SGD’s performance is better than the previous state-of-the-art but is generally worse than U-max. The difference in performance between vanilla SGD and U-max can largely be explained by vanilla SGD requiring a smaller learning rate to avoid computational overflow. The sensitivity of each method to the initial learning rate can be seen in Figure 2, where the results of running each method on the Eurlex dataset with learning rates η = 100,±1,±2,−3/N is presented. The results agree with those in Figu-
re 1, with Implicit SGD having the best performance for most learning rate settings. This is consistent with the theoretical results proving that Implicit SGD is robust to the learning rate (Ryu & Boyd, 2014; Toulis & Airoldi, 2015). In fact, Implicit SGD’s worst performance is still better than the best performance all of the other algorithms. For learning rates η = 101,2/N the U-max log-loss is extremely large. This can be explained by Proposition 5, which does not guarantee convergence for U-ma-
x if the learning rate is too high. Vanilla SGD only has one line plotted, corresponding to the learning rate of 10−3/N , as for any high learning rate the algorithm suffered from computational overflow. The OVE, NCE and IS methods are very robust to the learning rate, which is perhaps why they have been so popular in the past.
Comparison of double-sum formulations. Figure 3 illustrates the performance on the Eurlex dataset of U-max using the proposed double-sum in (6) compared to U-max using the doublesum of Raman et al. (2016) in (8). The proposed double-sum outperforms for all15 learning rates η = 100,±1,±2,±3,±4/N , with its 50th-epoch log-loss being 3.08 times lower on average. This supports the argument from Section 2.3 that SGD methods applied to the proposed double-sum have smaller magnitude gradients and converg-
e faster. Indeed, if the log-loss of vanilla SGD, U-max and Implicit SGD in Figure 1 and Table 3 were multiplied by 3.08 they would be roughly the same as OVE, NCE and IS. Thus our proposed double-sum formulation is crucial to the success of the U-max and Implicit SGD algorithms.
15The learning rates η = 101,2,3,4/N are not displayed in the Figure 3 for visualization purposes. They have similar behavior as η = 1.0/N .
9

5 Conclusion
In this paper we propose two unbiased robust algoritms for for optimizing the softmax likelihood: Implicit SGD and U-max. These are the first unbiased algorithms that require only O(D) computation per iteration, and no additional work at the end of each epoch. Implicit SGD can be efficiently implemented and clearly out-performs the previous state-of-the-art on seven real world datasets. The result is a new method that enables optimizing the softmax for extremely large number of samples and classes-
. One limitation of the Implicit SGD method is that it is relatively slow if multiple datapoints are sampled each iteration or multiple inner-products can be efficiently computed (e.g. using GPUs). U-max should be the method of choice in such a setting. We only tested U-max and Implicit SGD on the simple softmax, but these methods can also be applied to any neural network where the final layer is the softmax. Furthermore, applying these methods to word2vec type models, which can be viewed as a sof-
tmax where both x and w are parameters to be fit, might be provide a significant speed-up.
References
Andreas, Jacob and Klein, Dan. When and why are log-linear models self-normalizing? In HLT-NAACL, pp. 244–249, 2015.
Bengio, Yoshua and Senécal, Jean-Sébastien. Adaptive importance sampling to accelerate training of a neural probabilistic language model. IEEE Transactions on Neural Networks, 19(4):713–722, 2008.
Bengio, Yoshua, Senécal, Jean-Sébastien, et al. Quick training of probabilistic neural nets by importance sampling. In AISTATS, 2003.
Bertsekas, Dimitri P. Incremental proximal methods for large scale convex optimization. Mathematical programming, 129(2):163, 2011.
Boyd, Stephen and Vandenberghe, Lieven. Convex optimization. Cambridge university press, 2004.
Chelba, Ciprian, Mikolov, Tomas, Schuster, Mike, Ge, Qi, Brants, Thorsten, Koehn, Phillipp, and Robinson, Tony. One billion word benchmark for measuring progress in statistical language modeling. arXiv:1312.3005, 2013.
Daume III, Hal, Karampatziakis, Nikos, Langford, John, and Mineiro, Paul. Logarithmic time one-against-some. arXiv:1606.04988, 2016.
de Brébisson, Alexandre and Vincent, Pascal. An exploration of softmax alternatives belonging to the spherical loss family. arXiv:1511.05042, 2015.
Gopal, Siddharth and Yang, Yiming. Distributed training of large-scale logistic models. In International Conference on Machine Learning, pp. 289–297, 2013.
Grave, Edouard, Joulin, Armand, Cissé, Moustapha, Grangier, David, and Jégou, Hervé. Efficient softmax approximation for GPUs. arXiv:1609.04309, 2016.
Jernite, Yacine, Choromanska, Anna, Sontag, David, and LeCun, Yann. Simultaneous learning of trees and representations for extreme classification, with application to language modeling. arXiv:1610.04658, 2016.
Ji, Shihao, Vishwanathan, SVN, Satish, Nadathur, Anderson, Michael J, and Dubey, Pradeep. Blackout: Speeding up recurrent neural network language models with very large vocabularies. arXiv:1511.06909, 2015.
Joshi, Bikash, Amini, Massih-Reza, Partalas, Ioannis, Iutzeler, Franck, and Maximov, Yury. Aggressive sampling for multi-class to binary reduction with applications to text classification. arXiv:1701.06511, 2017.
Kirkwood, Betty R and Sterne, Jonathan AC. Essential medical statistics. John Wiley & Sons, 2010.
10

Krishnapuram, Balaji, Carin, Lawrence, Figueiredo, Mario AT, and Hartemink, Alexander J. Sparse multinomial logistic regression: Fast algorithms and generalization bounds. IEEE transactions on pattern analysis and machine intelligence, 27(6):957–968, 2005.
Lacoste-Julien, Simon, Schmidt, Mark, and Bach, Francis. A simpler approach to obtaining an O(1/t) convergence rate for the projected stochastic subgradient method. arXiv:1212.2002, 2012.
Maddison, Chris J, Mnih, Andriy, and Teh, Yee Whye. The concrete distribution: A continuous relaxation of discrete random variables. arXiv:1611.00712, 2016.
Martins, André FT and Astudillo, Ramón Fernandez. From softmax to sparsemax: A sparse model of attention and multi-label classification. CoRR, abs/1602.02068, 2016.
Mnih, Andriy and Teh, Yee Whye. A fast and simple algorithm for training neural probabilistic language models. arXiv:1206.6426, 2012.
Partalas, Ioannis, Kosmopoulos, Aris, Baskiotis, Nicolas, Artieres, Thierry, Paliouras, George, Gaussier, Eric, Androutsopoulos, Ion, Amini, Massih-Reza, and Galinari, Patrick. LSHTC: A benchmark for large-scale text classification. arXiv:1503.08581, 2015.
Raman, Parameswaran, Matsushima, Shin, Zhang, Xinhua, Yun, Hyokun, and Vishwanathan, SVN. DS-MLR: Exploiting double separability for scaling up distributed multinomial logistic regression. arXiv:1604.04706, 2016.
Ruiz, Francisco JR, Titsias, Michalis K, Dieng, Adji B, and Blei, David M. Augment and reduce: Stochastic inference for large categorical distributions. arXiv preprint arXiv:1802.04220, 2018.
Rust, Roland T and Zahorik, Anthony J. Customer satisfaction, customer retention, and market share. Journal of retailing, 69(2):193–215, 1993.
Ryu, Ernest K and Boyd, Stephen. Stochastic proximal iteration: a non-asymptotic improvement upon stochastic gradient descent. Author website, early draft, 2014.
Shahrokhi, Farhad and Matula, David W. The maximum concurrent flow problem. Journal of the ACM (JACM), 37(2):318–334, 1990.
Titsias, Michalis K. One-vs-each approximation to softmax for scalable estimation of probabilities. arXiv:1609.07410, 2016.
Toulis, Panos and Airoldi, Edoardo M. Implicit stochastic approximation. arXiv:1510.00967, 2015.
Toulis, Panos, Tran, Dustin, and Airoldi, Edo. Towards stability and optimality in stochastic gradient descent. In Artificial Intelligence and Statistics, pp. 1290–1298, 2016.
Vincent, Pascal, de Brébisson, Alexandre, and Bouthillier, Xavier. Efficient exact gradient update for training deep networks with very large sparse targets. In Advances in Neural Information Processing Systems, pp. 1108–1116, 2015.
Wang, Mengdi, Liu, Ji, and Fang, Ethan. Accelerating stochastic composition optimization. In Advances in Neural Information Processing Systems, pp. 1714–1722, 2016.
11

A Comparison of double-sum formulations
In Section 2.3 our double-sum formulation was compared to that of Raman et al. (2016). It was noted that the formulations only differ by a reparameterization u ̄i = ui + x>
i wyi , and an intuitive argument was given as to why our formulation leads to smaller magnitude gradients. Here we flesh out that argument and also explore different reparameterizations. Let us introduce the set of parameterizations vi = log(1 + ∑
k6=yi ex>
i (wk−wyi )) + αx>
i wyi where α ∈ R. Our double-sum corresponds to α = 0 while that of Raman et al. (2016) to α = 1. The question is, what is the optimal α? The stochastic functions with vi are of the form
fik(v, W ) =N
(
vi − αx>
i wyi + eαx>
i wyi −vi + (K − 1)ex>
i (wk−(1−α)wyi )−vi )
)
where for notational simplicity we have set the ridge-regularization parameter μ = 0. The stochastic gradients are
∇wk fik = N (K − 1)ex>
i (wk−(1−α)wyi )−vi xi
∇wyi fik = N
(
−α + αeαx>
i wyi −vi − (1 − α)(K − 1)ex>
i (wk−(1−α)wyi )−vi
)
xi
∇wj fik = 0 ∀j ∈/ {k, yi}
∇ui fik = N
(
1 − eαx>
i wyi −vi − (K − 1)ex>
i (wk−(1−α)wyi )−vi
)
.
Let x>
i wyi = x>
i w ̃yi + δi where w ̃yi is the old value of wyi from the previous time datapoint
i was sampled. Let us write vi = u ̃i − γi + α(x>
i w ̃yi − i), where γi is the error between log(1 +
∑
k6=yi ex>
i (w ̃k−w ̃yi )) and its estimate u ̃i, while i is the error from estimating the x>
i w ̃yi term. The gradients become
∇wk fik = N (K − 1) · e(1−α)δi+α i−γi · ex>
i (wk−w ̃yi )−u ̃i xi
∇wyi fik = N
(
−α + αeαδi+α i−γi · e−u ̃i − (1 − α)e(1−α)δi+α i−γi · (K − 1)ex>
i (wk−w ̃yi )−u ̃i
)
xi
∇ui fik = N
(
1 − eαδi+α i−γi · e−u ̃i − e(1−α)δi+α i−γi · (K − 1)ex>
i (wk−w ̃yi )−u ̃i
)
.
The goal is for the variance of these stochastic gradients to be as small as possible. This may be achieved by setting α to decrease the effect of the noise factors δi and i. The noise i always appears as eα i and so it is best to have α = 0 from this perspective. The noise δi appears as
eαδi , e(1−α)δi · (K − 1)ex>
i (wk−w ̃yi ) or (1 − α)e(1−α)δi · (K − 1)ex>
i (wk−w ̃yi ), and so there is tension between setting α = 0 or α = 1. The optimal value of α clearly depends on the data and algorithm. If the noise is large and it is often the case that x>
i w ̃yi > x>
i w ̃k + log(K − 1) then α ≈ 0 is ideal, but if not then it is best for α ≈ 1. In Section 4 we showed that for our datasets α = 0 yields better results than α = 1, although the optimal value of α is probably between 0 and 1. A future line of work is to develop methods to learn the optimal α, perhaps dynamically per datapoint.
B Proof of variable bounds and strong convexity
We first establish that the optimal values of u and W are bounded. Next, we show that within these bounds the objective is strongly convex and its gradients are bounded.
Lemma 1 (Raman et al. (2016)). The optimal value of W is bounded as ‖W ∗‖22 ≤ B2
W where
B2
W=2
μ N log(K).
Proof.
−N log(K) = L(0) ≤ L(W ∗) ≤ − μ
2 ‖W ∗‖2
2
Rearranging gives the desired result.
Lemma 2. The optimal value of ui is bounded as u∗
i ≤ Bu where Bu = log(1 + (K − 1)e2BxBw ) and Bx = maxi{‖xi‖2}
12

Proof.
u∗
i = log(1 +
∑
k6=yi
ex>
i (wk−wyi ))
≤ log(1 +
∑
k6=yi
e‖xi‖2(‖wk‖2+‖wyi ‖2))
≤ log(1 +
∑
k6=yi
e2BxBw )
= log(1 + (K − 1)e2BxBw )
Lemma 3. If ‖W ‖22 ≤ B2
W and ui ≤ Bu then f (u, W ) is strongly convex with convexity constant greater than or equal to min{exp(−Bu), μ}.
Proof. Let us rewrite f as
f (u, W ) =
N
∑
i=1
ui + e−ui +
∑
k6=yi
ex>
i (wk−wyi )−ui + μ
2 ‖W ‖2
2
=
N
∑
i=1
a>
i θ + e−ui +
∑
k6=yi
eb>
ikθ + μ
2 ‖W ‖2
2.
where θ = (u>, w1>, ..., w>
k ) ∈ RN+KD with ai and bik being appropriately defined. The Hessian of f is
∇2f (θ) =
N
∑
i=1
e−ui eie>
i+
∑
k6=yi
eb>
ik θ bik b>
ik + μ · diag{0N , 1KD}
where ei is the ith canonical basis vector, 0N is an N -dimensional vector of zeros and 1KD is a KD-dimensional vector of ones. It follows that
∇2f (θ) I · min{ min
0≤u≤Bu
{e−ui }, μ}
= I · min{exp(−Bu), μ}
0.
Lemma 4. If ‖W ‖22 ≤ B2
W and ui ≤ Bu then the 2-norm of both the gradient of f and each stochastic gradient fik are bounded by
Bf = N max{1, eBu − 1} + 2(N eBu Bx + μ mkax{βk}BW ).
Proof. By Jensen’s inequality
max
‖W ‖2
2 ≤B 2
W ,0≤u≤Bu
‖∇f (u, W )‖2 = max
‖W ‖2
2 ≤B 2
W ,0≤u≤Bu
‖∇Eikfik(u, W )‖2
≤ max
‖W ‖2
2 ≤B 2
W ,0≤u≤Bu
Eik‖∇fik(u, W )‖2
≤ max
‖W ‖2
2 ≤B 2
W ,0≤u≤Bu
mikax ‖∇fik(u, W )‖2.
Using the results from Lemmas 1 and 2 and the definition of fik from (6),
‖∇ui fik(u, W )‖2 = ‖N
(
1 − e−ui − (K − 1)ex>
i (wk−wyi )−ui )
)
‖2
= N |1 − e−ui (1 + (K − 1)ex>
i (wk−wyi ))|
≤ N max{1, (1 + (K − 1)e‖xi‖2(‖wk‖2+‖wyi ‖2)) − 1}
≤ N max{1, eBu − 1}
13

and for j indexing either the sampled class k 6= yi or the true label yi,
‖∇wj fik(u, W )‖2 = ‖ ± N (K − 1)ex>
i (wk−wyi )−ui xi + μβj wj ‖2
≤ N (K − 1)e‖xi‖2(‖wk‖2+‖wyi ‖2)‖xi‖2 + μβj ‖wj ‖2
≤ N eBu Bx + μ mkax{βk}BW .
Letting
Bf = N max{1, eBu − 1} + 2(N eBu Bx + μ mkax{βk}BW )
we have
‖∇fik(u, W )‖2 ≤ ‖∇ui fik(u, W )‖2 + ‖∇wk fik(u, W )‖2 + ‖∇wyi fik(u, W )‖2 = Bf .
In conclusion:
max
‖W ‖2
2 ≤B 2
W ,0≤u≤Bu
‖∇f (u, W )‖2 ≤ max
‖W ‖2
2 ≤B 2
W ,ui≤Bu,
mikax ‖∇fik(u, W )‖2 ≤ Bf .
C Stochastic Composition Optimization
We can write the equation for L(W ) from (3) as (where we have set μ = 0 for notational simplicity),
L(W ) = −
N
∑
i=1
log(1 +
∑
k6=yi
ex>
i (wk−wyi ))
= Ei[hi(Ek[gk(W )])]
where i ∼ unif ({1, ..., N }), k ∼ unif ({1, ..., K}), hi(v) ∈ R, gk(W ) ∈ RN and
hi(v) = −N log(1 + e>
i v)
[gk(W )]i =
{
K ex>
i (wk−wyi ) if k 6= yi
0 otherwise .
Here e>
i v = vi ∈ R is a variable that is explicitly kept track of with vi ≈ Ek[gk(W )]i =
∑
k6=yi ex>
i (wk−wyi ) (with exact equality in the limit as t → ∞). Clearly vi in stochastic composition optimization has a similar role as ui has in our formulation for f in (5). If i, k are sampled with k 6= yi in stochastic composition optimization then the updates are of the form (Wang et al., 2016)
wyi = wyi + ηtN K ex>
i (zk−zyi )
1 + vi
xi
wk = wk − ηtN K ex>
i (zk−zyi )
1 + vi
xi,
where zk is a smoothed value of wk. These updates have the same numerical instability issues as
vanilla SGD on f in (5): it is possible that exi>zk
1+vi 1 where ideally we should have 0 ≤ exi>zk
1+vi ≤ 1.
D Proof of general Implicit SGD gradient bound
Proof of Proposition 2. Let f (θ, ξ) be m-strongly convex for all ξ. The vanilla SGD step size is ηt‖∇f (θ(t), ξt)‖2 where ηt is the learning rate for the tth iteration. The Implicit SGD step size is ηt‖∇f (θ(t+1), ξt)‖2 where θ(t+1) satisfies θ(t+1) = θ(t) − ηt∇f (θ(t+1), ξt). Rearranging, ∇f (θ(t+1), ξt) = (θ(t) − θ(t+1))/ηt and so it must be the case that ∇f (θ(t+1), ξt)>(θ(t) − θ(t+1)) = ‖∇f (θ(t+1), ξt)‖2‖θ(t) − θ(t+1)‖2.
14

Our desired result follows:
‖∇f (θ(t), ξt)‖2 ≥ ∇f (θ(t))>(θ(t) − θ(t+1))
‖θ(t) − θ(t+1)‖2
≥ ∇f (θ(t+1))>(θ(t) − θ(t+1)) + m‖θ(t) − θ(t+1)‖22
‖θ(t) − θ(t+1)‖2
= ‖∇f (θ(t+1))‖2‖θ(t) − θ(t+1)‖2 + m‖θ(t) − θ(t+1)‖22
‖θ(t) − θ(t+1)‖2
= ‖∇f (θ(t+1))‖2 + m‖θ(t) − θ(t+1)‖2
where the first inequality is by Cauchy-Schwarz and the second inequality by strong convexity.
E Update equations for Implicit SGD
In this section we will derive the updates for Implicit SGD. We will first consider the simplest case where only one datapoint (xi, yi) and a single class is sampled in each iteration. Later we will derive the updates for when multiple classes are sampled, and finally when both multiple classes and multiple datapoints are sampled.
E.1 Single datapoint, single class
Equation (6) for the stochastic gradient with a single datapoint, single sampled class is
fik(u, W ) = N (ui + e−ui + (K − 1)ex>
i (wk−wyi )−ui ) + μ
2 (βyi ‖wyi ‖2
2 + βk‖wk‖2
2).
The Implicit SGD update corresponds to finding the variables optimizing
min
u,W
{
2ηfik(u, W ) + ‖u − u ̃‖2
2 + ‖W − W ̃ ‖2
2
}
,
where η is the learning rate and the tilde refers to the value of the old iterate (Toulis et al., 2016, Eq. 6). Since fik is only a function of ui, wk, wyi , we have the optimal wj = w ̃j for j ∈/ {k, yi} and uj = u ̃j for j 6= i. The optimization reduces to
min
ui ,wk ,wyi
{2ηfik(ui, wk, wyi ) + (ui − u ̃i)2 + ‖wyi − w ̃yi ‖2
2 + ‖wk − w ̃k‖2
2
}
= min
ui ,wk ,wyi
{
2ηN (ui + e−ui + (K − 1)ex>
i (wk−wyi )−ui ) + ημ(βyi ‖wyi ‖2
2 + βk‖wk‖2
2)
+ (ui − u ̃i)2 + ‖wyi − w ̃yi ‖2
2 + ‖wk − w ̃k‖2
2
}
.
Solving for wk, wyi with auxiliary variable b
Much of the difficulty in optimizing this equation comes from the interaction between the
ex>
i (wk−wyi )−ui term and the ‖ · ‖22 terms. To isolate this interaction we introduce an auxiliary
variable b = x>
i (wk − wyi ) and rewrite the optimization problem as
umii,bn
{
2ηN (ui + e−ui + (K − 1)eb−ui ) + (ui − u ̃i)2
+ min
wk ,wyi
{ημ(βyi ‖wyi ‖2
2 + βk‖wk‖2
2) + ‖wyi − w ̃yi ‖2
2 + ‖wk − w ̃k‖2
2 : b = x>
i (wk − wyi )}
}
.
The inner optimization problem over wk, wyi is a quadratic program with linear constraints. Taking the dual and solving yields
wk = w ̃k
1 + ημβk
− γi
x>
i ( w ̃k
1+ημβk − w ̃yi
1+ημβyi
)−b
1 + ημβk
xi
wyi = w ̃yi
1 + ημβyi
+ γi
x>
i ( w ̃k
1+ημβk − w ̃yi
1+ημβyi
)−b
1 + ημβyi
xi (10)
15

where
γi = 1
‖xi‖22((1 + ημβk)−1 + (1 + ημβyi )−1) (11)
Substituting in the solution for wk, wyi and dropping constant terms, the optimization problem reduces to
umii,bn
{
2ηN (ui + e−ui + (K − 1)eb−ui ) + (ui − u ̃i)2 +
(
b − x>
i ( w ̃k
1 + ημβk
− w ̃yi
1 + ημβyi
)
)2
γi
}
. (12)
We’ll approach this optimization problem by first solving for b as a function of ui and then optimize over ui. Once the optimal value of ui has been found, we can calculate the corresponding optimal value of b. Finally, substituting b into (10) will give us our updated value of W .
Solving for b
We solve for b by setting its derivative equal to zero in (12)
0 = 2ηN (K − 1)eb−ui + 2
(
b − x>
i ( w ̃k
1 + ημβk
− w ̃yi
1 + ημβyi
)
)
γi.
Letting a = x>
i ( w ̃k
1+ημβk − w ̃yi
1+ημβyi
) − b and using simple algebra yields
aea = ηN (K − 1)γ−1
i ex>
i ( w ̃k
1+ημβk − w ̃yi
1+ημβyi
)−ui . (13)
The solution for a can be written in terms of the principle branch of the Lambert-W function, P ,
a(ui) = P
(
ηN (K − 1)γ−1
i ex>
i ( w ̃k
1+ημβk − w ̃yi
1+ημβyi
)−ui
)
. (14)
The optimal value of b given ui is therefore b(ui) = x>
i ( w ̃k
1+ημβk − w ̃yi
1+ημβyi
) − a(ui).
Bisection method for ui Substituting b(ui) = x>
i ( w ̃k
1+ημβk − w ̃yi
1+ημβyi
) − a(ui) into (12), we now only need minimize over ui:
muiin
{
2ηN (ui + e−ui + (K − 1)ex>
i ( w ̃k
1+ημβk − w ̃yi
1+ημβyi
)−a(ui)−ui ) + (ui − u ̃i)2 + a(ui)2γi
}
(15)
= muiin
{
2ηN ui + 2ηN e−ui + 2γia(ui) + (ui − u ̃i)2 + a(ui)2γi
}
= muiin
{
2ηN ui + 2ηN e−ui + (ui − u ̃i)2 + γia(ui)(2 + a(ui))
}
(16)
where and we used the fact that e−P (z) = P (z)/z to simplify the (K −1)ex>
i ( w ̃k
1+ημβk − w ̃yi
1+ημβyi
)−a(ui )−ui
term. The derivative in (16) with respect to ui is
∂ui
{
2ηN ui + 2ηN e−ui + (ui − u ̃i)2 + γia(ui)(2 + a(ui))
}
= 2ηN − 2ηN e−ui + 2(ui − u ̃i) + 2γi(1 + a(ui))∂ui a(ui)
= 2ηN − 2ηN e−ui + 2(ui − u ̃i) − 2γia(ui) (17)
where we used the fact that ∂zP (z) = P (z)
z(1+P (z)) to work out that ∂ui a(ui) = − a(ui)
1+a(ui) .
We can solve for ui using a bisection method. Below we show how to calculate the initial lower and upper bounds of the bisection interval and prove that the size of the interval is bounded (which ensures fast convergence). The initial lower and upper bounds we use depends on the derivative in (17) at ui = u ̃i. In deriving the bounds we will use u′
i to denote the optimal value of ui and a′ to denote the optimal value of a.
16

Case: u′
i > u ̃i
If the derivative is negative then u′
i is lower bounded by u ̃i. An upper bound on u′
i can be derived from (15):
u′
i = argmin
ui
{
2ηN (ui + e−ui + (K − 1)ex>
i ( w ̃k
1+ημβk − w ̃yi
1+ημβyi
)−a′−ui ) + (ui − u ̃i)2
}
≤ argmin
ui
{
2ηN (ui + e−ui + (K − 1)ex>
i ( w ̃k
1+ημβk − w ̃yi
1+ημβyi
)−ui ) + (ui − u ̃i)2
}
= u ̃i + P (ηN eηN−u ̃i (1 + (K − 1)ex>
i ( w ̃k
1+ημβk − w ̃yi
1+ημβyi
))) − ηN
where in the inequality we set a′ = 0, since the minimal value of ui is monotonically decreasing in a′. This bound should be used in the bisection method, but for ease of analysis we can weaken the bound:
u′
i ≤ argmin
ui
{
2ηN (ui + e−ui + (K − 1)ex>
i ( w ̃k
1+ημβk − w ̃yi
1+ημβyi
)e−ui )
}
= log(1 + (K − 1)ex>
i ( w ̃k
1+ημβk − w ̃yi
1+ημβyi
)).
where we used the assumption that u′
i is lower bounded by u ̃i to remove the (ui − u ̃i)2 term. Thus
u ̃i ≤ u′
i ≤ log(1 + (K − 1)ex>
i ( w ̃k
1+ημβk − w ̃yi
1+ημβyi
)). If (K − 1)ex>
i ( w ̃k
1+ημβk − w ̃yi
1+ημβyi
) ≤ 1 then the size of the bounding interval must be less than log(2), since u ̃i ≥ 0. Otherwise the gap must be at most
log(2(K − 1)ex>
i ( w ̃k
1+ημβk − w ̃yi
1+ημβyi
)) − u ̃i = log(2(K − 1)) + x>
i ( w ̃k
1+ημβk − w ̃yi
1+ημβyi
) − u ̃i. Either way,
the size of the interval is upper bounded by log(2K) + |x>
i ( w ̃k
1+ημβk − w ̃yi
1+ημβyi
) − u ̃i|.
Case: u′
i < u ̃i
Now let us consider if the derivative in (17) is positive at ui = u ̃i. Then u′
i is upper bounded by u ̃i.
We can lower bound u′
i by:
u′
i = argmin
ui
{
2ηN (ui + e−ui + (K − 1)ex>
i ( w ̃k
1+ημβk − w ̃yi
1+ημβyi
)e−a′−ui ) + (ui − u ̃i)2
}
(18)
≥ argmin
ui
{
ui + e−ui + (K − 1)ex>
i ( w ̃k
1+ημβk − w ̃yi
1+ημβyi
) e−a′ −ui
}
= log(1 + (K − 1) exp(x>
i ( w ̃k
1 + ημβk
− w ̃yi
1 + ημβyi
) − a′))
≥ log(K − 1) + x>
i ( w ̃k
1 + ημβk
− w ̃yi
1 + ημβyi
) − a′ (19)
where the first inequality comes dropping the (ui − u ̃i)2 term due to the assumption that u′
i < u ̃i and the second inequality is from the monotonicity of the log function. Recall (13),
a′ea′ = ηN (K − 1)γ−1
i ex>
i ( w ̃k
1+ημβk − w ̃yi
1+ημβyi
)−u′
i.
We can upper bound a′ using the lower bound on u′:
a′ = e−a′ a′ea′
= e−a′ ηN (K − 1)γ−1
i ex>
i ( w ̃k
1+ημβk − w ̃yi
1+ημβyi
)−u′
i
≤ e−a′ ηN (K − 1)γ−1
i ex>
i ( w ̃k
1+ημβk − w ̃yi
1+ημβyi
)−(log(K −1)+x>
i ( w ̃k
1+ημβk − w ̃yi
1+ημβyi
)−a′ )
= ηN γ−1
i (20)
Substituting this upper bound for a′ into (18) and solving yields a lower bound on u′
i,
u′
i ≥ u ̃i + P (ηN eηN−u ̃i (1 + (K − 1)ex>
i ( w ̃k
1+ημβk − w ̃yi
1+ημβyi
)−ηN γ−1
i )) − ηN.
17

Algorithm 1 Implicit SGD with one datapoint and class sampled each iteration
Input: Data D = {(yi, xi)}N
i=1, number of iterations T , learning rate ηt, threshold δ > 0, regularization constants β and γ from (11), principle Lambert-W function P , initial u, W . Ouput: W
for t = 1 to T do
Sample datapoint and classes i ∼ unif ({1, ..., N }) k ∼ unif ({1, ..., K} − {yi})
Calculate gradient at ui = u ̃i
g ← 2ηtN − 2ηtN e−ui − 2γiP (ηtN (K − 1)γ−1
i ex>
i ( wk
1+ηtμβk − wyi
1+ηt μβyi
)−ui )
Calculate lower and upper bounds on ui if g < 0 then
(bl, bu) ← (ui, ui + P (ηtN eηtN−ui (1 + (K − 1)ex>
i ( wk
1+ηtμβk − wyi
1+ηt μβyi
))) − ηtN ) else if g > 0 then
(bl, bu) ← (ui + P (ηtN eηtN−ui (1 + (K − 1)ex>
i ( w ̃k
1+ηtμβk − w ̃yi
1+ηt μβyi
)−ηtN γ−1
i )) − ηtN, ui) else if g = 0 then (bl, bu) ← (ui, ui) end if
Optimize ui using Brent’s method with bounds bl, bu and gradient g(u)
ui ← Brents(bl, bu, g(u) = 2ηtN − 2ηtN e−u + 2(u − ui) − 2γiP (ηtN (K −
1)γ−1
i ex>
i ( wk
1+ηtμβk − wyi
1+ηt μβyi
)−u))
Update w
wkj ← wk
1+ηtμβk − γi
P (ηtN (K−1)γ−1
ie
xi>( w ̃k
1+ηt μβk
− w ̃yi
1+ηt μβyi
)−ui )
1+ηtμβk xi
wyi ← wyi
1+ηt μβyi
+ γi
P (ηtN (K−1)γ−1
ie
xi> ( w ̃k
1+ηt μβk
− w ̃yi
1+ηt μβyi
)−ui )
1+ηt μβyi
xi end for
Again this bound should be used in the bisection method, but for ease of analysis we can weaken the bound by instead substituting the bound for a′ into (19) which yields:
u′
i ≥ log(K − 1) + x>
i ( w ̃k
1 + ημβk
− w ̃yi
1 + ημβyi
) − ηN γ−1
i.
Thus log(K − 1) + x>
i ( w ̃k
1+ημβk − w ̃yi
1+ημβyi
) − ηN γ−1
i ≤ u′
i ≤ u ̃i. The size of the bisection method
interval is upper bounded by u ̃i − x>
i ( w ̃k
1+ημβk − w ̃yi
1+ημβyi
) + ηN γ−1
i − log(K − 1).
In summary, for both signs of the derivative in (17) at ui = u ̃i we are able to lower and upper bound the optimal value of ui such that interval between the bounds is at most |u ̃i − x>
i ( w ̃k
1+ημβk − w ̃yi 1+ημβyi
)| + ηN γ−1
i + log(2K). This allows us to perform the bisection method where for > 0 level
accuracy we require only log2( −1) + log2(|u ̃i − x>
i ( w ̃k
1+ημβk − w ̃yi
1+ημβyi
)| + ηN γ−1
i + log(2K)) function
evaluations. In practice we use Brent’s method as the optimization routine, which is faster than the simple bisection method. The pseudocode of the entire method is displayed in Algorithm 1.
E.2 Bound on step size
Here we will prove that the step size magnitude of Implicit SGD with a single datapoint and sampled class with respect to w is bounded as O(x>
i ( w ̃k
1+ημβk − w ̃yi
1+ημβyi
) − u ̃i). We will do so by
considering the two cases u′
i > u ̃i and u′
i < u ̃i separately, where u′
i denotes the optimal value of ui
18

in the Implicit SGD update and u ̃i is its value at the previous iterate.
Case: u′
i > u ̃i
Let a′ denote the optimal value of a in the Implicit SGD update. From (14)
a′ = P
(
ηN (K − 1)γ−1
i ex>
i ( w ̃k
1+ημβk − w ̃yi
1+ημβyi
)−u′
i
)
≤P
(
ηN (K − 1)γ−1
i ex>
i ( w ̃k
1+ημβk − w ̃yi
1+ημβyi
)−u ̃i
)
where u′
i is replace by u ̃i and we have used the monotonicity of the Lambert-W function P . Now using the fact that P (z) = O(log(z)),
a′ = O(x>
i ( w ̃k
1 + ημβk
− w ̃yi
1 + ημβyi
) − u ̃i + log(ηN (K − 1)γ−1
i ))
= O(x>
i ( w ̃k
1 + ημβk
− w ̃yi
1 + ημβyi
) − u ̃i)
Case: u′
i < u ̃i
If u′
i < u ̃i then we can lower bound a′ from (20) as a′ ≤ ηN γ−1
i.
Combining cases
Putting together the two cases,
a′ = O(max{x>
i ( w ̃k
1 + ημβk
− w ̃yi
1 + ημβyi
) − u ̃i, ηN γ−1
i })
= O(x>
i ( w ̃k
1 + ημβk
− w ̃yi
1 + ημβyi
) − u ̃i).
From (10) we know that the step size magnitude is proportional to a′. Thus the step size magnitude
is also O(x>
i ( w ̃k
1+ημβk − w ̃yi
1+ημβyi
) − u ̃i).
E.3 Single datapoint, multiple classes.
Consider the case where only one datapoint i, but multiple classes {kj : ky 6= yi}m
j=1 are sampled each iteration. Like in Appendix E.1, we will be able to reduce the implicit update to a onedimensional strongly-convex optimization problem. The resulting problem may be solved using any standard convex optimization method, such as Newton’s method. We do not derive upper and lower bounds for a bisection method as we did in Appendix E.1. Let us rewrite the double-sum formulation from (5) as f (u, W ) = Ei,Ci [fi,Ci (u, W )] where i is a uniformly sampled datapoint, Ci is a set of m-
 uniformly sampled classes from {1, ..., K} − {yi} (without replacement) and
fi,Ci (u, W ) = N (ui + e−ui + α
∑
k∈Ci
ex>
i (wk−wyi )−ui ) + μ
2
∑
k∈Ci ∪{yi }
βk ‖wk ‖2
2,
where α−1 = P (k ∈ Ci|k 6= yi) = 1 − ∏m
j=1(1 − 1
K−j ),
β−1
k = P (k ∈ Ci ∪ {yi})
= P (k = yi) + P (k ∈ Ci|k 6= yi)P (k 6= yi)
= nk + α−1(N − nk)
N
and nk = |{i : yi = k, i = 1, ..., N }|. Using the same derivation as in Appendix E.1, the implicit SGD update is
min
ui, {wk }k∈Ci∪{yi}
2η

N (ui + e−ui + α
∑
k∈Ci
ex>
i (wk−wyi )−ui ) + μ
2
∑
k∈Ci ∪{yi }
βk ‖wk ‖2
2


+ (ui − u ̃i)2 +
∑
k∈Ci ∪{yi }
‖wk − w ̃k‖2
2. (21)
19

The goal is to simplify this multivariate minimization problem into a one-dimensional strongly convex minimization problem. The first trick we will use is to reparameterize ui = vi − x>
i wyi for
some vi ∈ R. This changes the ex>
i (wk−wyi )−ui factors to ex>
i wk−vi , decoupling wk and wyi , which will make the optimization easier. The problem becomes:
min
vi, {wk }k∈Ci∪{yi}
2η

N (vi − x>
i wyi + ex>
i wyi −vi + α
∑
k∈Ci
ex>
i wk−vi ) + μ
2
∑
k∈Ci ∪{yi }
βk ‖wk ‖2
2


+ (vi − x>
i wyi − u ̃i)2 +
∑
k∈Ci ∪{yi }
‖wk − w ̃k‖2
2. (22)
Since vi = ui + x>
i wyi is a linear transformation, (22) is jointly strongly convex in vi and {wk}k∈Ci∪{yi}. Bringing the wk minimizations inside yields
mviin
2ηN vi
+ mwyiin
{
−2ηN x>
i wyi + 2ηN ex>
i wyi −vi + ημβyi ‖wyi ‖2
2 + (vi − x>
i wyi − u ̃i)2 + ‖wyi − w ̃yi ‖2
2
}
+
∑
k∈Ci
mwikn
{
2ηN αex>
i wk−vi + ημβk‖wk‖2
2 + ‖wk − w ̃k‖2
2
}
. (23)
In Appendix E.1 we were able to reduce the dimensionality of the problem by introducing an auxiliary variable b to separate the exponential terms from the norm terms. We will do a similar thing here. Let us first focus on the inner minimization for k ∈ Ci.
mwikn
{
2ηN αex>
i wk−vi + ημβk‖wk‖2
2 + ‖wk − w ̃k‖2
2
}
= mbin
{
2ηN αeb−vi + mwikn
{η μβk ‖wk ‖2
2 + ‖wk − w ̃k‖2
2 : b = x>
i wk
}
}
= mbin
{
2ηN αeb−vi + max
λ∈R mwikn
{η μβk ‖wk ‖2
2 + ‖wk − w ̃k‖2
2 + 2λ(b − x>
i wk)}
}
where we have taken the Lagrangian in the final line. The solution for wk in terms of λ is
wk = w ̃k
1 + ημβk
+λ
1 + ημβk
xi.
Thus we know that our optimal wk must satisfy wk = w ̃k
1+ημβk − ak xi
‖xi ‖2
2
for some ak ∈ R. It can
similarly be shown that wyi = w ̃yi
1+ημβyi
+ ayi
xi ‖xi ‖2
2
for some ayi ∈ R. Substituting this into (23) and
dropping constant terms yields
mviin
2vi
(
ηN − x>
i w ̃yi
1 + ημβyi
− u ̃i
)
+ v2
i
+ mayiin
{
2eayi
(
ηN e
xi> w ̃yi 1+ημβyi
−vi
)
+ 2ayi
(
−vi − ηN + x>
i w ̃yi
1 + ημβyi
+ u ̃i
)
+ a2
yi (1 + ‖xi‖−2
2 (1 + ημβyi ))
}
+
∑
k∈Ci
maikn
{
2e−ak
(
ηN αe
xi> w ̃k
1+ημβk −vi
)
+ a2
k(‖xi‖−2(1 + ημβk))
}
. (24)
Using the same techniques as in Appendix E.1 we can analytically solve for the a values:
ayi (vi) = ηN ‖xi‖22 − x>
i w ̃yi ‖xi‖22/(1 + ημβyi ) + (vi − u ̃i)‖xi‖22 1 + ημβyi + ‖xi‖22
− P (σ(vi))
ak(vi) = P
(η
1 + ημβk
‖xi‖2
2N αe
xi> w ̃k
1+ημβk −vi
)
.
where σ(vi) = ηN‖xi‖2
2
1+ημβyi +‖xi‖2
2
exp
( x>
i w ̃yi −vi(1+ημβyi )+(ηN −u ̃i)‖xi‖2
2 1+ημβyi +‖xi‖2
2
)
. Substituting these values into
20

(24) yields
mviin
2vi
(
1 + ηN − x>
i w ̃yi
1 + ημβyi
− u ̃i)
)
+ v2
i
− 2ayi (vi)
(
vi + ηN − x>
i w ̃yi
1 + ημβyi
− u ̃i + 1 + ‖xi‖−2
2 (1 + ημβyi )
)
+ ayi (vi)2(1 + ‖xi‖−2
2 (1 + ημβyi ))
+
∑
k∈Ci
ak(vi)(1 + ak(vi))‖xi‖−2(1 + ημβk). (25)
This is a one-dimensional strongly convex minimization problem in vi. The optimal vi can be solved for using any standard convex optimization method, such as Newton’s method. Each iteration in such a method will take O(m) since it is necessary to calculate ak(vi), ∂vi ak(vi) and ∂v2i ak(vi) for all k ∈ Ci ∪ {yi}. The first derivatives are easily calculated,
∂vi ayi (vi) = ‖xi‖22
1 + ημβyi + ‖xi‖22
+ 1 + ημβyi
1 + ημβyi + ‖xi‖22
P (σ(vi)) 1 + P (σ(vi))
∂vi ak(vi) = − ak(vi)
1 + ak(vi) ,
as are the second derivatives,
∂2
vi ayi (vi) = −
( 1 + ημβyi 1 + ημβyi + ‖xi‖22
)2 P (σ(vi))
(1 + P (σ(vi)))3
∂2
vi ak(vi) = ak(vi)2
(1 + ak(vi))3 .
E.4 Multiple datapoints, multiple classes
Consider the case where n datapoints and m classes are sampled each iteration. Using similar methods to Appendix E.3, we will reduce the implicit update to an n dimensional strongly convex optimization problem. Let us rewrite the double-sum formulation from (5) as f (u, W ) = EI,C [fI,C (u, W )] where I is a set of n datapoints uniformly sampled from 1, ..., N (without replacement), C is a set of m uniformly sampled classes from 1, ..., K (without replacement). The sampled function is of the form
fI,C (u, W ) =
∑
i∈I
(
αn(ui + e−ui ) + αm
∑
k∈C
I[k 6= yi]ex>
i (wk−wyi )−ui
)
+μ
2
∑
k∈C∪i∈I {yi}
βk ‖wk ‖2
2,
where
αn = P (i ∈ I)−1 =

1 −
n−1
∏
j=0
(1 − 1
N −j)


−1
αm/αn = P (k ∈ C)−1 =

1 −
m−1
∏
j=0
(1 − 1
K −j)


−1
βk = P (k ∈ C ∪i∈I {yi})−1 = (P (k ∈ C) + P (k ∈ ∪i∈I {yi}) − P (k ∈ C)P (k ∈ ∪i∈I {yi}))−1
P (k ∈ ∪i∈I {yi}) = 1 −
n−1
∏
j=0
(
1 − |{i : yi = k}|
N −j
)
.
It will be useful to group the classes that appear in ∪i∈I {yi} and those that only appear in C:
fI,C (u, W ) =
∑
k∈∪i∈I {yi}
∑
i∈I
(
I[k = yi]αn(ui + e−ui ) + I[k 6= yi, k ∈ C]αmex>
i (wk−wyi )−ui
)
+μ
2 βk‖wk‖2
2
+
∑
k∈C−∪i∈I {yi}
∑
i∈I
αmex>
i (wk−wyi )−ui + μ
2 βk‖wk‖2
2.
21

The implicit SGD update is
min
{ui }i∈I
{wk }k∈C∪i∈I {yi}
2η
( ∑
k∈∪i∈I {yi}
∑
i∈I
(
I[k = yi]αn(ui + e−ui ) + I[k 6= yi, k ∈ C]αmex>
i (wk−wyi )−ui
)
+μ
2 βk‖wk‖2
2
+
∑
k∈C−∪i∈I {yi}
∑
i∈I
αmex>
i (wk−wyi )−ui + μ
2 βk‖wk‖2
2
)
+
∑
i∈I
(ui − u ̃i)2 +
∑
k∈C∪i∈I {yi}
‖wk − w ̃k‖2
2.
Like in Appendix E.3, the first step to simplifying this equation is to reparameterize ui = vi − x>
i wyi
for some vi ∈ R and to bring the wk minimizations inside:
min
{vi }i∈I
2ηαnvi +
∑
k∈∪i∈I {yi}
mwikn
{ ∑
i∈I
(
I[k = yi]
(
2ηαn(−x>
i wk + ex>
i wk−vi ) + (vi − x>
i wk − u ̃i)2)
+ I[k 6= yi, k ∈ C]2ηαmex>
i wk−vi
)
+ ημβk‖wk‖2
2 + ‖wk − w ̃k‖2
2
}
+
∑
k∈C−∪i∈I {yi}
mwikn
{ ∑
i∈I
2ηαmex>
i wk−vi + ημβk‖wk‖2
2 + ‖wk − w ̃k‖2
2
}
. (26)
As done in Appendix E.3, the inner minimizations can be solved analytically by introducing constrained auxiliary variables bki = x>
i wk and optimizing the dual. We’ll do this separately for k ∈ ∪i∈I {yi} and k ∈ C − ∪i∈I {yi}.
For datapoint labels k ∈ ∪i∈I {yi},
mwikn
∑
i∈I
(
I[k = yi]
(
2ηαn(−x>
i wk + ex>
i wk−vi ) + (vi − x>
i wk − u ̃i)2)
+ I[k 6= yi, k ∈ C]2ηαmex>
i wk−vi
)
+ ημβk‖wk‖2
2 + ‖wk − w ̃k‖2
2
= mbkiin
∑
i∈I
(
I[k = yi] (2ηαn(−bki + ebki−vi ) + (vi − bki − u ̃i)2) + I[k 6= yi, k ∈ C]2ηαmebki−vi
)
+ mwikn
{η μβk ‖wk ‖2
2 + ‖wk − w ̃k‖2
2 : bki = x>
i wk
}.
Focusing on the minimization over wk:
mwikn
{η μβk ‖wk ‖2
2 + ‖wk − w ̃k‖2
2 : bki = x>
i wk
}
= mλkaix
mwikn
η μβk ‖wk ‖2
2 + ‖wk − w ̃k‖2
2+2
∑
i∈I
λki(bki − x>
i wk).
The solution for wk in terms of λki is
wk = w ̃k + ∑
i∈I λkixi
1 + ημβk
Dropping constant terms, the dual becomes
mλkaix
−‖∑
i∈I λkixi‖22
1 + ημβk
+2
∑
i∈I
λki(bki − x>
i w ̃k 1 + ημβk
)
= mλkaix
−λ>
k Qkλk + 2λ>
k
(
bk − X>
I w ̃k 1 + ημβk
)
=
(
bk − X>
I w ̃k 1 + ημβk
)>
Q−1
k
(
bk − X>
I w ̃k 1 + ημβk
)
=
∥ ∥ ∥ ∥
bk − X>
I w ̃k 1 + ημβk
∥ ∥ ∥ ∥
2
Q−1
k
,
22

where Qk,ij = x>
i xj
1+ημβk and XI = (xi)i∈I ∈ RD×n and the optimal λ = Q−1
k
(
bk − X>
I w ̃k 1+ημβk
)
. Now
we can solve for bk,
mbkiin
∑
i∈I
I[k = yi] (2ηαn(−bki + ebki−vi ) + (vi − bki − u ̃i)2) + I[k 6= yi, k ∈ C]2ηαmebki−vi +
∥ ∥ ∥ ∥
bk − X>
I w ̃k 1 + ημβk
∥ ∥ ∥ ∥
2
Q−1
k
.
Setting to zero the derivative with respect to bk ∈ Rn and dividing by 2:
0 = I[k = yI ] ◦ (ηαn(−1 + ebk−vI ) + bk + u ̃I − vI
) + I[k 6= yI , k ∈ C] ◦ ηαmebk−vI + Q−1
k
(
bk − X>
I w ̃k 1 + ημβk
)
= diag(a)ebk + Akbk − hk (27)
where ◦ denotes the element-wise product, diag(a) is a diagonal matrix, 1 denotes the vectors of all ones, vI = (vi)i∈I ∈ Rn, likewise for u ̃I and yI , and
ak = I[k = yI ] ◦ ηαne−vI + I[k 6= yI , k ∈ C] ◦ ηαme−vI
Ak = diag(I[k = yI ]) + Q−1
k
hk = I[k = yI ] ◦ (ηαn1 − u ̃I + vI ) + Q−1
k
X>
I w ̃k 1 + ημβk
.
Multiplying (27) on the left by A−1
k , letting zk = A−1
k hk − bk and multiplying on the right by
diag(ezk ) yields
zk ◦ ezk = A−1
k (a ◦ eA−1
k hk ).
The solution for zk decomposes into separate Lambert-W functions:
zk = P (A−1
k (a ◦ eA−1
k hk ))
where P is the principle branch of the Lambert-W function applied component-wise. The solution for bk is thus
bk(vI ) = A−1
k hk − P (A−1
k (a ◦ eA−1
k hk )) (28)
where bk is a function of the variable vI , which is the only unknown variable that we are yet to minimize over.
For pure class labels k ∈ C − ∪i∈I {yi} the procedure is nearly identical for the the datapoint labels. The optimal value of wk is
wk = w ̃k + ∑
i∈I λkixi
1 + ημβk
where λ = Q−1
k
(
bk − X>
I w ̃k 1+ημβk
)
and
bk(vI ) = X>
I w ̃k 1 + ημβk
−P
(
η αn Qk e
X>
I w ̃k
1+ημβk −vI
)
.
Final optimization problem
Substituting the optimal values of bk in (26) yields the final optimization problem
min
{vi }i∈I
2ηαnvi
+
∑
k∈∪i∈I {yi}
∑
i∈I
I[k = yi]
(
2ηαn(−bki(vI ) + ebki(vI )−vi ) + (vi − bki(vI ) − u ̃i)2)
+ I[k 6= yi, k ∈ C]2ηαmebki(vI )−vi
+
∥ ∥ ∥ ∥
bk(vI ) − X>
I w ̃k 1 + ημβk
∥ ∥ ∥ ∥
2
Q−1
k
+
∑
k∈C−∪i∈I {yi}
∑
i∈I
2ηαme
X>
I w ̃k
1+ημβk −P

ηαn Qk e
X>
I w ̃k
1+ημβk
−vI

−vi
+
∥ ∥ ∥ ∥
P
(
η αn Qk e
X>
I w ̃k
1+ημβk −vI
)∥ ∥ ∥ ∥
2
Q−1
k
.
23

where bk(vI ) is from (28). This is a strongly convex optimization problem in vI ∈ Rn. Using standard first order gradient methods, it can be solved to > 0 accuracy in O(log( −1)) iterations. The cost per iteration is O(n2(n + m)) for the matrix multiplications and O((n + m)n3) for the matrix inversions. Note that the matrix inversions do not depend on vI and so they only have to be performed once. Furthermore, if the same minibatches are used each epoch, then the inverted matrices can be calcula-
ted just once and stored. The amortized matrix inversion cost is therefore expected to be dominated by the O(n2(n + m) log( −1)) cost for solving for vI and the O(nmD) cost of taking the x>
i w ̃k inner products each iteration. Note that we have assumed that Qk is invertible. As long as the vectors {xi}i∈I are independent, this will be the case. If not, then a similar method as above can be developed where a basis of {xi}i∈I is used.
F U-max pseudocode
Algorithm 2 U-max for a single datapoint and multiple classes sampled per iteration.
Input: Data D = {(yi, xi)}N
i=1, number of classes to sample each iteration m, number of iterations T , learning rate ηt, threshold δ > 0, constants α and β, initial u, W . Ouput: W
for t = 1 to T do
Sample datapoint and classes i ∼ unif ({1, ..., N }) kj ∼ unif ({1, ..., K} − {yi}) for j = 1, ..., m (with replacement)
Increase ui
if ui < log(1 + ∑m
j=1 ex>
i (wkj −wyi )) − δ then
ui ← log(1 + ∑m
j=1 ex>
i (wkj −wyi ))
end if
SGD step
wkj ← wkj − ηtN (K − 1)/m · ex>
i (wkj −wyi )−ui xi − ηtμβkj wkj for j = 1, ..., m
wyi ← wyi + ηtN (K − 1)/m · ∑m
j=1 ex>
i (wkj −wyi )−ui xi − ηtμβyi wyi
ui ← ui − ηtN (1 − e−ui − (K − 1)/m · ∑m
j=1 ex>
i (wkj −wyi )−ui )
end for
G Proof of convergence of U-max method
In this section we will prove the claim made in Proposition 5, that U-max converges to the softmax optimum. Before proving the proposition, we will need a lemma.
Lemma 5. For any δ > 0, if ui ≤ log(1 + ex>
i (wk−wyi )) − δ then setting ui = log(1 + ex>
i (wk−wyi ))
decreases f (u, W ) by at least δ2/2.
Proof. As in Lemma 3, let θ = (u>, w1>, ..., w>
k ) ∈ RN+KD. Then setting ui = log(1 + ex>
i (wk−wyi ))
is equivalent to setting θ = θ + ∆ei where ei is the ith canonical basis vector and ∆ = log(1 +
ex>
i (wk−wyi )) − ui ≥ δ. By a second order Taylor series expansion
f (θ) − f (θ + ∆ei) ≥ ∇f (θ + ∆ei)>ei∆ + ∆2
2 e>
i ∇2f (θ + λ∆ei)ei (29)
for some λ ∈ [0, 1]. Since the optimal value of ui for a given value of W is u∗
i (W ) = log(1 +
∑
k6=yi ex>
i (wk−wyi )) ≥ log(1 + ex>
i (wk−wyi )), we must have ∇f (θ + ∆ei)>ei ≤ 0. From Lemma 3
24

we also know that
e>
i ∇2f (θ + λ∆ei)ei = exp(−(ui + λ∆)) +
∑
k6=yi
ex>
i (wk−wyi )−(ui+λ∆)
= exp(−λ∆)e−ui (1 +
∑
k6=yi
ex>
i (wk−wyi ))
= exp(−λ∆) exp(−(log(1 + ex>
i (wk−wyi )) − ∆))(1 +
∑
k6=yi
ex>
i (wk−wyi ))
≥ exp(∆ − λ∆)
≥ exp(∆ − ∆)
= 1.
Putting in bounds for the gradient and Hessian terms in (29),
f (θ) − f (θ + ∆ei) ≥ ∆2
2 ≥ δ2
2.
Now we are in a position to prove Proposition 5.
Proof of Proposition 5. Let θ(t) = (u(t), W (t)) ∈ Θ denote the value of the tth iterate. Here Θ = {θ : ‖W ‖22 ≤ B2
W , ui ≤ Bu} is a convex set containing the optimal value of f (θ).
Let π(δ)
i (θ) denote the operation of setting ui = log(1+ex>
i (wk−wyi )) if ui ≤ log(1+ex>
i (wk−wyi ))−
δ. If indices i, k are sampled for the stochastic gradient and ui ≤ log(1 + ex>
i (wk−wyi )) − δ, then
the value of f at the t + 1st iterate is bounded as
f (θ(t+1)) = f (πi(θ(t)) − ηt∇fik(πi(θ(t))))
≤ f (πi(θ(t))) + max
θ∈Θ ‖ηt∇fik(πi(θ))‖2 max
θ∈Θ ‖∇f (θ)‖2
≤ f (πi(θ(t))) + ηtB2
f
≤ f (θ(t)) − δ2/2 + ηtB2
f
≤ f (θ(t) − ηt∇fik(θ(t))) − δ2/2 + 2ηtB2
f
≤ f (θ(t) − ηt∇fik(θ(t))),
since ηt ≤ δ2/(4B2
f ) by assumption. Alternatively if ui ≥ log(1 + ex>
i (wk−wyi )) − δ then
f (θ(t+1)) = f (πi(θ(t)) − ηt∇fik(πi(θ(t))))
= f (θ(t) − ηt∇fik(θ(t))).
Either way f (θ(t+1)) ≤ f (θ(t) − ηt∇fik(θ(t))). Taking expectations with respect to i, k,
Eik[f (θ(t+1))] ≤ Eik[f (θ(t) − ηt∇fik(θ(t)))].
Finally let P denote the projection of θ onto Θ. Since Θ is a convex set containing the optimum we have f (P (θ)) ≤ f (θ) for any θ, and so
Eik[f (P (θ(t+1)))] ≤ Eik[f (θ(t) − ηt∇fik(θ(t)))],
which shows that the rate of convergence in expectation of U-max is at least as fast as that of standard SGD. The proof trivially generalizes to sampling multiple datapoints and classes per iteration by
replacing log(1 + ex>
i (wk−wyi )) with log(1 + ∑m
j=1 ex>
i (wkj −wyi )).
25

H Results over runtime
Table 4: Time in seconds taken to run 50 epochs. OVE/NCE/IS/Vanilla/U-max with n = 1, m = 5 all have the same runtime. Implicit SGD with n = 1, m = 1 is faster per iteration. The final column displays the ration of OVE/.../U-max to Implicit SGD for each dataset.
Data set Implicit SGD OVE/NCE/IS/Vanilla/U-max Ratio
MNIST 1283 2494 1.94 Bibtex 144 197 1.37 Delicious 287 325 1.13 Eurlex 427 903 2.12 AmazonCat 24392 42816 1.76 Wiki10 783 1223 1.56 WikiSmall 6407 8470 1.32
Average - - 1.60
0 10 20 30 40 50
0.5
1.0
1.5
2.0
MNIST
0 10 20 30 40 50
1
2
3
4
Bibtex
0 10 20 30 40 50
3.5
4.0
4.5
5.0
5.5
Delicious
0 10 20 30 40 50
1
2
3
4
5
6
Eurlex
0 10 20 30 40 50
4
5
6
7
AmazonCat
0 10 20 30 40 50
2
3
4
5
6
7
8
Wiki10
0 10 20 30 40 50
7.5
8.0
8.5
9.0
9.5
Wiki-small
Figure 4: The x-axis is runtime measured by the number of epochs for OVE, NCE, IS, vanilla SGD and U-max (they all have the same runtime). Since Implicit SGD is faster than these methods, more epochs are plotted for it. The number of Implicit SGD epochs is equal to 50 times by the ratio displayed in Table 4 for each dataset. The y-axis is the log-loss from (2).
26

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:35.722Z
- **Text Length:** 69864 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
