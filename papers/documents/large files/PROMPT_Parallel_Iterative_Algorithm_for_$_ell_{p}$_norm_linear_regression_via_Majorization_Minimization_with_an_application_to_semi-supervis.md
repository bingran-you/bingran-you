# PDF Document: Jyothi and Babu - 2021 - PROMPT Parallel Iterative Algorithm for $ell_{p}$ norm linear regression via Majorization Minimiza.pdf

**File Path:** Jyothi and Babu - 2021 - PROMPT Parallel Iterative Algorithm for $ell_{p}$ norm linear regression via Majorization Minimiza.pdf

**Processed Date:** 2026-02-10T18:14:01.821Z

**File Size:** 1073.41 KB

**Total Pages:** 11

**Extracted Pages:** 11

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2775

**Title:** PROMPT: Parallel Iterative Algorithm for $\ell_{p}$ norm linear regression via Majorization Minimization with an application to semi-supervised graph learning

**Collection:** Large Files

---

## Extracted Text Content

arXiv:2110.12190v1 [cs.LG] 23 Oct 2021
1
PROMPT: Parallel Iterative Algorithm for lp norm
linear regression via Majorization Minimization
with an application to semi-supervised graph
learning
R. Jyothi and P. Babu
Abstract—In this paper, we consider the problem of lp norm linear regression, which has several applications such as in sparse recovery, data clustering, and semi-supervised learning. The problem, even though convex, does not enjoy a closed-form solution. The state-of-the-art algorithms are iterative but suffer from convergence issues, i.e., they either diverge for p > 3 or the convergence to the optimal solution is sensitive to the initialization of the algorithm. Also, these algorithms are not g-
eneralizable to every possible value of p. In this paper, we propose an iterative algorithm : Parallel IteRative AlgOrithM for lP norm regression via MajorizaTion Minimization (PROMPT) based on the principle of Majorization Minimization and prove that the proposed algorithm is monotonic and converges to the optimal solution of the problem for any value of p. The proposed algorithm can also parallelly update each element of the regression variable, which helps to handle large scale data efficiently-
, a common scenario in this era of data explosion. Subsequently, we show that the proposed algorithm can also be applied for the graph based semi-supervised learning problem. We show through numerical simulations that the proposed algorithm converges to the optimal solution for any random initialization and also performs better than the state-of-the-art algorithms in terms of speed of convergence. We also evaluate the performance of the proposed algorithm using simulated and real data for the grap-
h based semi-supervised learning problem.
Index terms— lp norm linear regression, Majorization Minimization, Parallel algorithm, Graph based semi-superivsed learning
I. INTRODUCTION AND PROBLEM FORMULATION
Linear regression is a statistical model which is used to estimate the relationship between a dependent variable and one or more independent variables [1]. This technique is commonly used in data forecasting [2], time series analysis [3] and for risk assessment [4]. In linear regression, the dependent variable y is related to the unknown independent variables x = [x1, x2, . . . , xn]T ∈ Rn using a linear model as follows:
y = a1x1 + a2x2 + · · · + anxn + e = aT x + e (1)
where ai’s are the known regression parameters and e is the unknown noise usually modeled as a Gaussian random variable. Suppose we have m such observations, then the model in (1) can be re-written compactly as:
y = Ax + e (2)
where y ∈ Rm is obtained by stacking the observations {yi}im=1, A = [a1, a2, . . . , am]T ∈ Rm×n and e =
[e1, e2, . . . , em]T ∈ Rm is the unknown error vector. Usually, m > n i.e., there are more equations than unknowns and hence the linear system of equations in (2) does not have any solution. In such a case, a classical approach adopted to solve the set of equations in (2) is to find an x such that the sum of the squares of the error i.e., the l2 norm of the error vector is minimum:
arg min
x
{f (x) = ‖y − Ax‖22} (3)
where ‖ · ‖2 is the Euclidean norm. The estimate x obtained by solving the above problem is known as the least-squares
estimator and is given by x = (AT A)−1 (AT y). However, it has been observed that the performance of the least-squares estimator is degraded when the underlying noise is not Gaussian distributed [5]. To overcome this issue, the authors in [6] and [7] show that the estimate x obtained by minimizing the lp norm of the error vector, for p 6= 2, is less sensitive to the noise distribution. In practice, the noise distribution may be non-Gaussian and hence in this paper we focus on solving the lp norm l-
inear regression problem which is defined as:
LR: arg min
x
{fLR(x) = ‖y − Ax‖p} (4)
Even though the problem in (4) is convex and differentiable, one cannot obtain a closed-form solution for it using the KKT conditions. Hence, the state-of-the art methods used to solve the problem in (4) are iterative in nature. The benchmarking algorithm used to solve the lp norm problem for p ∈ [1, ∞) is the Iterative Reweighted Least Squares (IRLS) algorithm ([8], [9], [10], [11]). It is a simple iterative algorithm which replaces the objective function in (4) with a weighted l2 norm function a-
t every iteration, which when minimized admits a closed-form solution. However, it was found that this method diverges for p > 3 ([10],[12]). Since then, many algorithms have been proposed to overcome the issue of convergence faced by IRLS algorithm ([13], [14], [15]). We review these methods briefly in the next section. Apart from being a robust regressor, the lp norm linear regression for p > 2 has applications in semisupervised learning commonly used in classification problems ([16], [17], [18]-
), which we discuss next. In today’s world, classification problems are becoming pervasive wherein the goal is to categorize the given data into

2
its corresponding class using a mapping function [1]. In the supervised learning setting, the training data set (which consists of data points and its corresponding class labels) are used to learn the mapping function which can be used later to predict the class label of an unknown test data point. However, one setback of this approach is that it requires large amount of labeled data points to learn the mapping function. Data labeling is a laborious task (e.g. writing a transcript for speech recog-
nition) and also requires expert input (deciding whether a brain scan is healthy or not). However, one can easily obtain large amounts of unlabeled data. Semi-supervised learning utilizes both the labeled and unlabeled data points to learn the mapping function. By doing so, semi-supervised learning learns a better mapping function when compared to the supervised learning which uses only the labeled data points [12]. Under the semi-supervised learning approach, graph based semi-supervised learning -
is commonly used, wherein the labels of the unknown data points are learned by propagating the known label information using graphs. Suppose we are given n data points vi ∈ Rd out of which u are unlabeled data points and l are labeled points with labels hi = f (vi) (where f is an unknown real-valued function). Generally, the number of labeled points are much smaller than the number of unlabeled points i.e., l << u. An undirected graph G = (V, E) with vertex set V = {v1, v2, . . . vn} are used to r-
epresent the n data points. The subset L ⊂ V of the vertex set are used to represent the labeled points and the remaining vertices V \ L represents the unlabeled points. The edges E of the graph are equipped with non-negative edge weights W = {wxy}x,y∈E, which are chosen such that wxy ≈ 1 when x is similar to y and wxy ≈ 0 when x and y are dissimilar. The task of graph based semi-supervised learning is to assign labels to the remaining vertices without changing the labels at the vertex subset L. S-
ince, this problem has infinitely many solutions, one usually makes the semi-supervised smoothness assumption which states that if two data points v1, v2 in a high density region are close then so should be their corresponding outputs h1, h2; hence the function f is required to be smooth in the high density regions [19]. A common approach used to label the data points at remaining vertices such that the mapping function does not change rapidly in the high density regions and also agrees with the l-
abels at the vertices L is by using the l2-based Laplacian regularizer, which is given as:
fˆ(v) = arg min
f
∑
i,j∈E
wij (f (vi) − f (vj))2
subject to f (vi) = hi, i ∈ L
(5)
The above model was first introduced by [20]. From an intuitive perspective, minimizing the objective function in (5) will ensure that the similar points (for which wij is larger) will
have similar labels, making (f (vi) − f (vj))2 smaller, while for dissimilar points (wij is small) and hence are allowed to have dissimilar labels. However, it was found that when the number of unlabeled data points u is much greater than the number of labeled data points l, the learned function
fˆ(v) becomes constant everywhere, with sharp spikes near the labeled data. We illustrate the same in Fig.1.a. for the number
of labeled points l equal to 2 and number of unlabeled points u equal to 105. In Fig. 1, the X and the Y -axis represent the values taken by the data points and the Z-axis represent the value of the function surface at the corresponding data points.
From Fig.1.a it can be seen that for p = 2 the function fˆ(v) is constant everywhere with sharp spikes near the labeled data point. We also illustrate the function surface for p = 2.5 and p = ∞ in Fig.1.b and Fig. 1.c, respectively. From Fig. 1.b
Figure 1: Illustration of the function surface fˆ(v) for different values of p. For p = 2 the surface is constant with peaks near the labeled points and for p > 2 the surface becomes smoother. This example was generated for two labeled and 105 unlabeled data points [12].
and Fig. 1.c it can be seen that as the value of p increases the function becomes smooth. This observation led to the formulation of lp-based Laplacian regularizer problem [21]:
arg min
f
∑
i,j∈E
wij |f (vi) − f (vj)|p
subject to f (vi) = hi, i ∈ L
(6)
The above problem can be cast as an lp norm linear regression problem (which we will show in sec. IV). Hence, the benchmarking algorithm used to solve the problem in (6) is the modified IRLS algorithm [15]. The paper is organized as follows. In the next section, we discuss the methods used to solve the lp norm regression problem and also list the contributions made in this manuscript. In sec. III, we give an overview of Majorization Minimization (MM) procedure and in sec. IV we propose a parallel -
algorithm to solve the problem in (4) using the MM principle for any value of p. At the end of the same section we discuss the application of the proposed algorithm for the graph based semi-supervised problem. In sec. V, we compare the proposed algorithm with the state-of-the art methods via computer simulations and finally conclude the paper in sec. VI.
II. RELATED WORK AND CONTRIBUTIONS
The conventional IRLS algorithm used to solve the lp norm problem was first developed by Karlovitz [8] and also independently by several other researchers ([9], [10], [11]). A brief history of IRLS algorithm can be found in [22]. To compute the value of the next iterate xk+1, the IRLS algorithm solves the following weighted least-squares problem:
xk+1 = arg min
x
(Ax − y)T W k(Ax − y) (7)

3
where W is a diagonal matrix with diagonal elements {w1, w2 · · · wm} and W k is the value taken by W at the
kth iteration. The IRLS algorithm starts with W 0 = I and solves the problem in (7) whose solution is the least
squares estimator x0 = (AT A)−1 (AT y). It then updates the weights matrix W k = diag(|Axk − y|p−2) and solves the weighted least-squares problem in (7) whose solution is xk = (AT W kA)−1AT W ky and this is repeated until convergence. The pseudocode of IRLS algorithm is shown in Table 1.
Table 1: Pseudocode of IRLS algorithm
Input: Noisy observed data y, data matrix A and p Initialize: Set k = 0. Initialize x0 = (AT A)−1 (AT y). Repeat:
1) Update W k = diag(|Axk − y|p−2) 2) xk+1 = (AT W kA)−1AT W ky k ← k+1
until
∣ ∣ ∣ ∣
f
LR (xk) − fLR (xk−1) f
LR (xk−1)
∣ ∣ ∣ ∣
≤ 10−3
The IRLS algorithm has several drawbacks. Firstly, the IRLS algorithm involves computing the inverse of a square matrix of size n at every iteration - making the algorithm computationally expensive for large n. Also, at any iteration, if y becomes equal to Axk, the matrix (AT W kA) becomes illconditioned and the algorithm will run into numerical issues. Another drawback of IRLS algorithm is that it fails to converge for p > 3 ([10],[12]). To overcome the issue of convergence, the authors in [8] ca-
lculated the value of the next iterate by the following weighted combination of the previous iterate xk−1 and the IRLS iterate x ̃k with the updated weights:
xk+1 = qx ̃k + (1 − q)xk−1 (8)
However, this method is very slow because one has to choose an optimal value for q at every iteration. The authors in [15] proposed a modified IRLS algorithm wherein to avoid illconditioned matrix, they systematically added non-zero values to the diagonal elements of the matrix W k. Also, to improve the stability of the IRLS algorithm, the next iterate xk+1 is calculated by doing a line search along the line joining the previous iterate xk−1 and the standard IRLS iterate with the modified weights.-
 Homotopy based approaches have also been proposed to solve the lp norm regression problem [13], wherein first a simpler optimization problem is solved i.e., the lp norm problem for p = 2 is solved and then p is slowly increased until the desired minimum of the original objective function is reached. The authors in [23] used interior point methods to solve the lp norm problem. However, this method converges very slowly for large dimension of input data [15].
In this paper, we propose a parallel iterative algorithm to solve the lp norm regression problem for any p based on the Majorization Minimization (MM) procedure (which will be introduced briefly in the next section) and show through numerical simulations that the proposed algorithm converges to the stationary point of the problem for any
random initialization and enjoys faster speed of convergence. The major contributions of this paper are:
1) A MM based parallel algorithm - Parallel IteRative AlgOrithM for lP norm regression via MajorizaTion Minimization (PROMPT) is proposed to solve the lp norm regression problem for p ∈ [1, ∞]. The proposed algorithm can update each element of x parallely which is useful for solving large dimensional problem. 2) We prove that the proposed algorithm converges to the stationary point of the problem. 3) We show that the proposed algorithm can be applied for the graph based semi-supervised learning pr-
oblem. 4) Numerical simulations are conducted to compare the proposed algorithm with the state-of-the-art algorithms.
III. MAJORIZATION MINIMIZATION
In this section, we give an overview of MM procedure which has been applied to develop PROMPT. To explain the MM framework, we consider the following optimization problem:
minimize
x∈χ f (x) (9)
where f (x) could be either a convex or non-convex function and χ is the constraint set. Under the MM framework, at every iteration, a surrogate function g(x|xk) which majorizes the function f (x) is constructed and minimized i.e.
xk+1 ∈ arg min
x∈χ
g
(x|xk) (10)
where xk+1 is the value taken by x at the (k + 1)th iteration. A surrogate function g(x|xk) is said to majorize a function f (x) if it satisfies the following properties:
g
(xk|xk) = f (xk) (11)
g
(x|xk) ≥ f (x) (12)
Using (10), (11) and (12) it can be shown that the sequence of points {xk} generated by the MM procedure monotonically decrease the objective function:
f (xk+1) ≤ g(xk+1|xk) ≤ g(xk|xk) = f (xk) (13)
where the first inequality and the last equality are obtained by using (11) and (12). The second inequality is by (10). The computational complexity and the convergence speed of the algorithm depends on the choice of the surrogate function. For instance, in the case of a multivariate optimization problem, a surrogate function could make the parameters separable and hence each of them could be updated parallely - which is particularly useful for a large scale problem. An overview of the various sur-
rogate functions used can be found in ([24], [25]).
IV. PROPOSED ALGORITHM FOR lp NORM LINEAR REGRESSION PROBLEM
In this section, we first propose an iterative algorithm PROMPT based on the MM principle to solve the lp norm linear regression problem for p ∈ (1, ∞). The proposed algorithm can parallely update each element of x which is useful to handle large scale data efficiently. We then discuss

4
the extensions of the proposed algorithm to solve the l1 and the l∞ norm linear regression problems. Next, we show that the proposed algorithm converges to the stationary point of the lp norm linear regression problem. Finally, at the end of the section, we discuss the application of the proposed algorithm for the graph based semi-supervised learning problem.
A. Parallel IteRative AlgOrithM for lP norm regression via MajorizaTion Minimization (PROMPT)
The objective function fLR(x) in (4) is not separable in each element of x, which can be observed by first rewriting f
LR (x) as:
f
LR (x) = ‖y − Ax‖p =
m
∑
i=1
|yi − aiT x|p (14)
where ai ∈ Rn is the ith row of A matrix and yi is the
ith element of y. Expanding |yi − aiT x|p, one gets terms coupled in the elements of x which makes the parallel minimization of fLR(x) challenging. In this section, we develop a parallel algorithm using the MM principle in which we form a surrogate function g(xj|xk) which majorizes fLR(x). The surrogate function is separable in each element of x and hence each element of x can be updated parallely. To develop the surrogate function we make use of the following lemma:
Lemma 4.1: Given any x ̃ = x ̃k, the function ∣
∣cT  ̃x∣
∣
p (p ≥ 1), where c and x ̃ ∈ Rn+1, can be upper bounded as:
∣ ∣
(cT x ̃)∣
∣
p≤
n+1
∑
j=1
1 n+1
∣ ∣
∣(n + 1) cj
(x ̃j − x ̃jk
) + cT x ̃k∣
∣ ∣
p
(15)
Proof: We replicate the proof from [24] for the sake of
clarity. Note that the function |(·)|p (p ≥ 1) is convex and hence by using the Jensen’s inequality we get:
∣ ∣ ∣ ∣ ∣ ∣


n+1
∑
j=1
sj n+1


∣ ∣ ∣ ∣ ∣ ∣
p
≤
n+1
∑
j=1
| (sj) |p
n + 1 (16)
Letting sj = (n + 1)cj
(x ̃j − x ̃jk
) + cT (x ̃k) and substituting it in (16), the inequality in (15) is achieved.
Let ci = [ci,1 · · · ci,n+1]T = [−ai yi]T and let  ̃x = [x, 1]T . Then the objective function fLR(x) in (14) can be rewritten as:
f
LR (x) =
m
∑
i=1
|yi − aiT x|p =
m
∑
i=1
|ciT  ̃x|p (17)
Using lemma 4.1, we majorize the term |ciT  ̃x|p and hence
majorize the objective function fLR(x). At any given xk, the
majorization function g(xj|xk) is given by:
g(xj|xk) =
m
∑
i=1
n+1
∑
j=1
1 n+1
∣ ∣
∣(n + 1) cij
(x ̃j − x ̃jk
) + ciT  ̃xk∣
∣ ∣
p
(18)
where cij represents the jth element of the ith vector ci . The above surrogate function can be rewritten as:
g(xj|xk) =
m
∑
i=1
n
∑
j=1
∣
∣cij x ̃j + dikj
∣ ∣
p+
m
∑
i=1
∣
∣ci,n+1x ̃n+1 + dik,n+1
∣ ∣
p=
m
∑
i=1
n
∑
j=1
∣
∣−aij xj + dikj
∣ ∣
p+
m
∑
i=1
∣
∣yi + dik,n+1
∣ ∣
p
(19)
where dikj = −cij x ̃jk + 1
n + 1 ciT xk. From above, it can be
observed that if aij is zero then the product aij xj becomes
equal to zero, hence the first term of g(xj|xk) has to be computed only over the non-zero elements of aij i.e.,
g(xj |xk) =
m
∑
i=1
n
∑
j=1 aij 6=0
∣
∣−aij xj + dikj
∣ ∣
p+
m
∑
i=1
∣
∣yi + dik,n+1
∣ ∣
p
(20) Ignoring the constant terms in g(xj|xk), the surrogate mini
mization problem at any iteration, given xk becomes:
arg min
x
m
∑
i=1
n
∑
j=1 aij 6=0
wij
∣ ∣ ∣ ∣ ∣
xj − dikj
aij
∣ ∣ ∣ ∣ ∣
p
(21)
where wij = |aij|p. The above problem is separable in each element of x. Hence, at every iteration we solve the following surrogate minimization problem parallely over each element of x:
arg min
xj
m
∑
i=1 aij 6=0
wij
∣ ∣ ∣ ∣ ∣
xj − dikj
aij
∣ ∣ ∣ ∣ ∣
p
(22)
Therefore, each element of x can be updated parallely. The problem in (22) does not have a closed-form solution. However, we can employ a parameter free bisection method to solve the above problem. The initial interval [a, b] of the bisection method for the problem in (22) is found using the following lemma: Lemma 4.2: Consider the following problem wherein given the positive weights (w1, w2 · · · wN ) and the data points (a1, a2 · · · aN ), the problem is to estimate x such that it minimizes the -
weighted sum of absolute deviations raised to the pth power, i.e.
arg min
x
f (x) =
N
∑
j=1
wj|x − aj|p (23)
The solution x of the above problem will always lie in-between min(a) and max(a) where a = [a1, a2 · · · aN ]T .
Proof: The gradient of the problem in (23) is given as:
f ′(x) =
N
∑
j=1
p wj |x − aj |p−2(x − aj) =
N
∑
j=1
vj(x − aj)
(24) where vj = p wj|x − aj|p−2 and is always positive. Note that for x = min(a) and x = max(a), the gradient f ′(x)

5
will always be lesser than and greater than zero, respectively. Then, according to the Intermediate Value Theorem [26], the gradient will be equal to zero for x in the interval [min(a), max(a)].
Using lemma 4.2, the initial interval [a, b] for the bisection search approach to solve the problem in (22) is [min(sj) max(sj)]T where the ith element of sj is given as
sij = dikj
aij
. Further, by the principle of MM, it is sufficient
that the bisection search approach finds a value xk at the kth iteration such that fLR (xk) < fLR (xk−1) and not find the exact minimum of the surrogate minimization problem in (22). Pseudocode of the proposed algorithm is shown in Table 2. We would like to point out here that unlike the IRLS algorithm, the proposed algorithm does not have the problem of getting stuck - since the minimum in (22) is found over the nonzero elements of aij’s. Also, when compared to IRLS and the modified IRLS algorith-
m, the proposed algorithm does not involve computing matrix inverse.
Table 2: Pseudocode of the proposed algorithm for lp norm linear regression problem for p ∈ (1, ∞).
Input: Noisy observed data y, data matrix A and p Initialize: Set k = 0. Initialize x0
Precompute: wij = |aij|p, i ∈ (1, · · · m) and j ∈ (1, · · · n) Repeat:
Compute the following parallely over all the elements of x:
1) Compute sij = dikj
aij
= xjk + yi − aiT xk
(n + 1)aij
,i ∈
(1, 2, · · · m).
2) xk+1
j is obtained by solving (22) using bisection
method with a = min (sj) and b = max (sj).
k ← k + 1, until
∣ ∣ ∣ ∣
f
LR (xk) − fLR (xk−1) f
LR (xk−1)
∣ ∣ ∣ ∣
≤ 10−3
Before ending this subsection, we will here discuss the computational complexity of the proposed algorithm. First, we would like to point out that the weights wij which are required to
compute xk+1
j are independent of the optimization variable
and hence can be precomputed with a complexity of O(p). Next, at every iteration, the complexity of the algorithm is only dictated by the computation of the inner product aiT xk and the bisection search step. The complexity of the inner product aiT xk is O(n) and the complexity of the bisection search algorithm is O(log l), where l is the number of subintervals. Hence, the total complexity of the proposed algorithm is O (p + k (n + log l)). Also as mentioned earlier, the complexity of the state-of-
-the-art IRLS algorithm is dictated by the computation of the inverse of the matrix AT W kA and hence the complexity of the IRLS algorithm is O(n3). Hence, the proposed algorithm has the least computational complexity when compared to the state-of-the-art algorithm.
B. Special Cases
When compared to the lp norm regression problem for p ∈ (1, ∞), the l1 and l∞ norm regression problems are non
differentiable - thereby one cannot use the bisection search algorithm developed in the previous subsection to solve the l1 and l∞ norm regression problem. Hence, in this subsection, we discuss an alternate approach to solve the surrogate minimization problem and extend PROMPT algorithm to solve the l1 and l∞ norm regression problems. 1. l1 norm linear regression - Consider the following l1 norm linear regression problem:
f
LR(x) = ‖y − Ax‖1 =
m
∑
i=1
|yi − aiT x| (25)
Similar to the lp norm regression problem (p > 2) in (14), we rewrite the above problem as:
f
LR (x) =
m
∑
i=1
|ciT  ̃x| (26)
where ci = [ci,1 · · · ci,n+1]T = [−ai yi]T and let x ̃ = [x, 1]T .
Then by using lemma 4.1, we majorize the term |ciT x ̃| and obtain the following surrogate minimization problem:
arg min
xj
m
∑
i=1
n
∑
j=1
wij |xj − sij | (27)
where wij = |aij |, sij = dikj
aij
and dikj = −cij x ̃jk + 1
n + 1 ciT xk.
Similar to the surrogate mimization problem in (22), the above problem is separable in each element of x and hence can be updated parallely. In addition, unlike the surrogate minimization problem in (22), the above surrogate minimization problem has a closed-form solution and is given by the weighted median of the points sij [27]. Given the points s1j, s2j, · · · , smj and its associated weights wij, the weighted median xj is calculated as a. Sort the points sij in ascending order. b. Normalize th-
e weights wij associated with the data points sij such that the sum of the weights is equal to one. c. The weighted median xj is one of the points sqj satisfying
q−1
∑
i=1
wij ≤ 1
2 and
m
∑
i=q+1
wij ≤ 1
2.
The pseudocode of the proposed algorithm for l1 norm regression problem is shown in Table 3.
Table 3: Pseudocode of the proposed algorithm for l1 norm linear regression problem
Input: Noisy observed data y, data matrix A Initialize: Set k = 0. Initialize x0
Precompute: wij = |aij |, i ∈ (1, · · · m) and j ∈ (1, · · · n) Repeat:
Compute the following parallely over all the elements of x:
1) Compute sij = dikj
aij
= xjk + yi − aiT xk
(n + 1)aij
,i ∈
(1, 2, · · · m).

6
Table 3: Pseudocode of the proposed algorithm for l1 norm linear regression problem
2) xk+1
j is obtained by finding the weighted median of the points sij as discussed in Subsection IV.B.
k ← k + 1, until
∣ ∣ ∣ ∣
f
LR (xk) − fLR (xk−1) f
LR (xk−1)
∣ ∣ ∣ ∣
≤ 10−3
2. l∞ norm linear regression - The l∞ norm linear regression problem is given as:
arg min
x
{fLR(x) = ‖y − Ax‖∞ =
max
1,2,··· ,m |yi − aiT x|} (28)
Similar to the development of the PROMPT algorithm, we majorize the objective function in (28) using lemma 4.1 and obtain the following surrogate minimization problem:
mxijn
max
1,2,··· ,m wij |xj − sij | (29)
Note that the above surrogate minimization problem is separable in each element of x and therefore we can solve the above problem parallely over each element of x: To solve the above problem, we first rewrite the problem in the epigraph form as:
min
xj,z z
subject to wi2j |xj − sij |2 ≤ z i = 1, 2, · · · , m (30)
The Lagrange of the above problem is:
L(xj, z, λ) = z +
m
∑
i=1
λi
(
wi2j |xj − sij |2 − z
)
(31)
where λi’s are the Lagrange multiplier associated with each inequality. Next, we derive the KKT conditions for the problem in (30). 1) Minimizing the Lagrange function with respect to z we get: m
∑
i=1
λi = 1 (32)
2) Minimizing the Lagrange function with respect to xj we get:
xj =
m
∑
i=1
λiwi2j sij
m
∑
i=1
λiwi2j
(33)
3) By the complementary slackness property we have:
λi
(z − wi2j |xj − sij |2) = 0 (34)
4) Each dual variable λi must be non-negative. Since the
problem in (30) is convex, any pair of (xj , λi) that satisfies the KKT conditions would be the primal and dual optimal solutions. Hence, we use the above KKT conditions to solve the problem in (30) iteratively [28]. The pseudo code of the proposed algorithm to solve the l∞ norm linear regression problem is shown in Table. 3.
Table 3: Pseudocode of the proposed algorithm for l∞ norm linear regression problem
Input: Noisy observed data y, data matrix A Initialize: Set k = 0. Initialize x0 and λi0.
Precompute: wij = |aij |, i ∈ (1, · · · m) and j ∈ (1, · · · n) Repeat:
Compute the following parallely over all the elements of x:
1) Compute sij = dikj
aij
= xjk + yi − aiT xk
(n + 1)aij
,i ∈
(1, 2, · · · m).
2) Using the KKT conditions solve the problem in (30) iteratively to obtain xk+1
j
k ← k + 1, until
∣ ∣ ∣ ∣
f
LR (xk) − fLR (xk−1) f
LR (xk−1)
∣ ∣ ∣ ∣
≤ 10−3
C. Proof of convergence
Given that the proposed algorithm is based on MM procedure, it is guaranteed that the sequence of points {xk} generated by MM algorithm will monotonically decrease the problem in (4). Moreover, since fLR (x) in (4) is bounded below by zero, it is ensured that the sequence fLR (x) will converge to a finite value. We now show that the sequence {xk} converges to the stationary point of the problem in (4). From the monotonic property of MM we have:
f
LR (x0) ≥ fLR (x1) ≥ fLR (x2) (35)
Assume that there is a subsequence xrj converging to a limit point q ̃. Then from (11), (12) and (35) we get:
g(xrj+1 |xrj+1 ) = fLR (xrj+1 ) ≤ fLR (xrj +1) ≤ g(xrj +1|xrj )
≤ g(x|xrj )
(36) where g(·) is the surrogate function as defined in (20). Then, letting j → ∞, we get:
g(q ̃|q ̃) ≤ g(x|q ̃) (37)
which implies g′(q ̃|q ̃) ≥ 0. Since the first order behavior of surrogate function is same as function fLR (x) ([12]), g′(q ̃|q ̃) ≥
0 implies f ′
LR (q ̃) ≥ 0. Hence, q ̃ is the stationary point of f
LR (x) and therefore the proposed algorithm converges to the stationary point of the problem in (4).
D. Graph Based semi-supervised learning
In this subsection we discuss the application of proposed algorithm for the graph based semi-supervised learning problem. Graph based semi-supervised learning consists of two steps:
1) Construction of graph G = (V, E) from the given data. 2) Using the constructed graph estimating the labels of the unlabeled data points using an appropriate algorithm.
We now discuss each step in detail. In the case of first step, as suggested in [12], one can construct a symmetric Knearest neighbour (K-NN) graph from the given data. In KNN graph, each vertex are used to represent a data point. An edge between the data points vi and vj exists if and only if vi ∈ KNN(vj) or vj ∈ KNN(vi), where KNN(vj) stands

7
for the K-nearest neighbours of the vj among the data points v1, · · · , vj−1, vj+1, · · · , vn. The K-nearest neighbours of vj are found by measuring the Euclidean distance between vj and each of the remaining data points v1, · · · , vj−1, vj+1, · · · , vn and choosing the data points corresponding to the K smallest distance. Each edge is associated with a non-negative edge weight which is defined as:
wij =

   
   
exp
(
− ‖vi − vj ‖22
σ2
)
; vi ∈ KNN(vj)
exp
(
− ‖vj − vi‖22
σ2
)
; vj ∈ KNN(vi)
0 ; otherwise
(38)
where σ = 1
2 max{‖vi − vj‖22 : wij > 0}.
From the constructed graph G, we now estimate the labels of the unlabeled points by solving the problem in (6). For the ease of readability, we re-write the problem once again here:
arg min
f
∑
i,j∈E
wij |f (vi) − f (vj)|p
subject to f (vi) = hi, i ∈ L
(39)
Let fi = f (vi) and f = [f1, f2 · · · fn] ∈ Rn and h =
[h1, h2, · · · , hl] ∈ Rl. Then the constrained problem in (39) can be re-written as:
arg min
f
u
∑
i=1
u
∑
j=1
wij |fi − fj|p +
u
∑
i=1
l
∑
j=1
wi,j+u|fi − hj |p
(40) We now convert the above problem to lp norm regression problem. To do so, we first define the edge vertex incidence matrix B. Each row of the edge incidence matrix B corresponds to an edge and each column corresponds to a vertex and its entries are given as:
Bev =

 
 
1 ; if v is the head of e
−1 ; if v is the tail of e
0 ; otherwise
(41)
Let G = W 1/pB, where W is a diagonal matrix with the weights of the edges and z = −[B]:,u+1:u+lh, where the notation [B]:,u+1:u+l is used to represent all the rows of u + 1 to u + l columns of the matrix B. Then the problem in (40) can be re-written as:
arg min
f
‖Gf − z‖p (42)
which is an lp-norm regression problem and the proposed algorithm can be used to solve it.
V. NUMERICAL SIMULATION
In this section, we compare the performance of the proposed algorithm with the state-of-the art algorithms used to solve the lp norm linear regression problem. In particular, we compare the proposed algorithm with the IRLS algorithm ([8], [9], [10], [11]) and the modified IRLS algorithm [15]. Also, we compare the performance of the proposed algorithm with the modified IRLS algorithm for the Graph based semi-supervised learning problem. The algorithms were
implemented in MATLAB. All the simulations were carried out on a PC with 2.40 GHz Intel Xeon Processor with 64 GB RAM.
1. In this simulation, we fix p equal to 5, the dimension of the observation vector y ∈ Rm as 50, the dimension of x ∈ Rn as 20 and compare the convergence of the proposed algorithm with the state-of-the art algorithms, IRLS algorithm ([8], [9], [10], [11]) and the modified IRLS algorithm [15]. The elements of the matrix A and the observed data y were randomly generated from Normal distribution with zero mean and unit variance. All the algorithms were initialized at
x0 = (AT A)−1 (AT y), i.e., at the optimal solution of l2 norm regression problem. Fig. 2.a. shows the objective value vs run time of the proposed algorithm and the modified IRLS algorithm and Fig. 2.b. shows the objective value vs run time of the IRLS algorithm. The ground truth shown in Fig. 2.a. is obtained using CVX [29]. From Fig. 2 it can be seen that the proposed algorithm and the modified IRLS algorithm converges to the true solution, while the IRLS algorithm fails to converge. Also, from -
Fig. 2.a. it can be seen that the proposed algorithm converges faster than the modified IRLS algorithm which could be because the proposed algorithm can parallely update each elements of x when compared to the non-parallel modified IRLS algorithm. Although we show the convergence of the algorithms for single run in Fig. 2, we observed similar behavior for many runs.
2. In this simulation, we compare the convergence of the algorithms with the elements of x0 generated randomly from Normal distribution with mean zero and unit variance. Similar to the previous experiment, we fix p equal to 5, the dimension of the observation vector y as 50 and the dimension of x equal to 20 and generate the elements of the data matrix A and the observed data y randomly from Normal distribution with zero mean and unit variance. Fig. 3.a. shows the objective value vs run time of th-
e proposed algorithm and the modified IRLS algorithm for 10 different random initializations x0. Fig. 3.b. shows the objective value vs run time of the IRLS algorithm for one such random initialization. From Fig. 3 it can be seen that the proposed algorithm converges to the ground truth while the IRLS and the modified IRLS algorithms fails to converge. Hence, the modified IRLS algorithm converges to the optimal solution of the lp norm regression problem only when initialized with the solution of l-
2 norm regression problem. This initialization scheme has two issues. Firstly, it requires the matrix AT A to be invertible and secondly, the computational complexity associated with the inversion of AT A is O(n3) - which make this initialization expensive for large value of n.
3. In this simulation, we show that the proposed algorithm converges to the optimal solution irrespective of the initialization. To show the same we generate elements of x0 from three different distributions - normal distribution with zero mean and unit variance, uniform distribution from [0, 1]n and exponential distribution with mean equal to 0.1. Similar

8
0 0.005 0.01 0.015 0.02 0.025 0.03 0.035 0.04 0.045 0.05 time(sec)
0.56
0.58
0.6
0.62
0.64
0.66
0.68
0.7 Modified IRLS Proposed Algorithm Ground Truth
(a) Objective value vs run time of the proposed algorithm and the modified IRLS algorithm
0123456789 time(sec) 10-3
0.5
1
1.5
2
2.5
3
(b) Objective value vs run time of the IRLS algorithm
Figure 2: Comparison of convergence of the proposed algorithm with the modified IRLS and the IRLS algorithm with x0 equal to the optimal point of the l2 norm regression problem.
to the previous experiments, the dimension of the observation vector and the dimension of x were set equal to 50 and 20, respectively and their elements were randomly generated from Normal distribution with zero mean and unit variance. The algorithm was made to run until the following condition was met:
f
LR (xk) − fLR (x∗) ≤ 10−3 (43)
where fLR(x∗) is the optimal value of the problem in (4) and is obtained by solving the problem using CVX. Fig. 4 shows the objective value vs run time of the proposed algorithm with the elements of x0 generated randomly from different distributions and for different values of p. From Fig. 4 it can be seen that the proposed algorithm converges to the optimal solution irrespective of the initialization scheme. Hence, unlike the modified IRLS algorithm, the proposed algorithm is not sensitive to the-
 initialization. 4. In this simulation, we vary the dimension of the observation vector y and compare the convergence speed of the proposed algorithm and the modified IRLS algorithm. The dimension
0 0.02 0.04 0.06 0.08 0.1 0.12 0.14 0.16 0.18 0.2 time (sec)
0.5
1
1.5
2
2.5
3 Proposed Algorithm Modified IRLS Ground Truth
0 0.1 0.2
0.85
0.9
(a) Objective value vs run time of the proposed and the algorithm in [15]
0 0.005 0.01 0.015 0.02 0.025 time (sec)
1.8
1.9
2
2.1
2.2
2.3
2.4
2.5
2.6
(b) Objective value vs run time of the IRLS algorithm
Figure 3: Comparison of convergence of the proposed algorithm with the modified IRLS and the IRLS algorithm with x0 generated randomly from Normal distribution
of the observation vector was varied i.e. m was varied from 10000 to 20000 in steps of 1000, n was fixed at 1000 and p was kept equal to 10. The elements of the data matrix A and the observed data y were generated from a Normal distribution with mean zero and unit variance. Both the algorithms were initialized at the optimal point of l2 norm regression problem. The run time was averaged over 50 trials. Fig. 5 shows the performance of the algorithms for the varying dimension of the observation vect-
or y and as can be seen from the figure the proposed algorithm converges about five times faster than the modified IRLS algorithm. 5. In this simulation, we show that the proposed algorithm converges to the optimal solution for the two special cases discussed in section. IV i.e., for the l1 and the l∞ norm linear regression problems. In the case of l1 norm linear regression, we also compare the convergence speed of the proposed algorithm with the IRLS algorithm. Since, neither the IRLS algorithm n-
or the modified IRLS algorithm can be extended to solve the l∞ norm regression problem, we do not compare the convergence speed of the proposed algorithm with them. For both the special cases, the elements of the matrix A and the observed data y were randomly generated from Normal distribution with zero mean and unit variance. Fig. 6 and Fig.

9
0 0.01 0.02 0.03 0.04 0.05 0.06 0.07 0.08 0.09 0.1 time(sec)
0
0.5
1
1.5
2
2.5
3 Ground Truth Proposed Algorithm with x0 from Normal Distribution Proposed Algorithm with x0 from Uniform Distribution Proposed Algorithm with x0 from Exponential Distribution
(a) Objective value vs run time of the proposed algorithm for p = 10
0 0.02 0.04 0.06 0.08 0.1 0.12 0.14 0.16 0.18 0.2 time(sec)
0
0.5
1
1.5
2
2.5
3 Ground Truth Proposed Algorithm with x0 from Normal Distribution Proposed Algorithm with x0 from Uniform Distribution Proposed Algorithm with x0 from Exponential Distribution
(b) Objective value vs run time of the proposed algorithm for p = 30
0 0.05 0.1 0.15 0.2 0.25 0.3 0.35 0.4 0.45 0.5 time(sec)
0
0.5
1
1.5
2
2.5
3 Ground Truth Proposed Algorithm with x0 from Normal Distribution Proposed Algorithm with x0 from Uniform Distribution Proposed Algorithm with x0 from Exponential Distribution
(c) Objective value vs run time of the proposed algorithm for p = 80
Figure 4: Objective value vs run time of the proposed algorithm for different random initialization.
7 shows the objective value vs. run time of the proposed algorithm for the l1 and l∞ norm regression problems for different sizes of the data matrix A and for different random initialization x0. From Fig. 6 and Fig. 7 it can be seen that the proposed algorithm converges to the true solution for all the initialization. Also, from Fig. 6 it can be seen that the proposed algorithm converges faster than the IRLS algorithm.
6. In this simulation we compare the performance of the proposed algorithm and the modified IRLS algorithm for the
1 1.1 1.2 1.3 1.4 1.5 1.6 1.7 1.8 1.9 2 104
101
102
Avg. run time (sec)
Modified IRLS Proposed Algorithm
Figure 5: Comparison of average run time of the proposed algorithm with the modified IRLS algorithm for varying size of the observation vector y
0 0.1 0.2 0.3 0.4 0.5 0.6 time (sec)
6.4
6.6
6.8
7
7.2
7.4
7.6 Ground Truth Proposed Algorithm IRLS
0 0.2 0.4 0.6
6.4561
6.4562
(a) Objective value vs run time for problem dimension m = 800 and n = 3
0 0.1 0.2 0.3 0.4 0.5 0.6 time (sec)
6.6
6.8
7
7.2
7.4
7.6
7.8
8 Ground Truth Proposed Algorithm IRLS
0 0.2 0.4 0.6
6.6505
6.651
(b) Objective value vs run time for problem dimension m = 1000 and n = 5.
Figure 6: Objective value vs run time of the proposed and the IRLS algorithm for the l1 norm regression problem
Graph based semi-supervised problem. To do so, we simulated the labeled and unlabeled data points randomly from a uniform distribution from [0, 1]d for d = 10. The labels were also generated randomly from a uniform distribution from [0, 1]. A K-NN graph was constructed with the value of K = 10 using the code in [30]. The non-negative edge weights were

10
0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1 time (sec)
0.9
1
1.1
1.2
1.3
1.4
1.5 Ground Truth Proposed Algorithm
(a) Objective value vs run time for problem dimension m = 500 and n = 3
0.2 0.4 0.6 0.8 1 1.2 1.4 time (sec)
1.2
1.4
1.6
1.8
2
2.2
2.4 Ground Truth Proposed Algorithm
(b) Objective value vs run time for problem dimension m = 1000 and n = 5.
Figure 7: Objective value vs run time of the proposed algorithm for the l∞ norm regression problem
generated using (38). We compared the convergence of the algorithms by varying the number of unlabeled data points u from 50 to 500 in steps of 50 and for fixed number of labeled data points equal to 10. Fig. 8 compares the average run time of the algorithms for varying number of unlabeled points. The run time was average over 50 monte carlo trials. From Fig. 8 it can be seen as the number of unlabeled points increases the run time of the modified IRLS algorithm increases exponentially while that -
that of the proposed algorithm increases linearly.
50 100 150 200 250 300 350 400 450 500 Number of unlabeled points
0
0.5
1
1.5
2
2.5
3
3.5
Avg. run time (sec)
Modified IRLS Proposed Algorithm
Figure 8: Comparison of average run time of the proposed algorithm with the modified IRLS algorithm for simulated data.
Next, we compare the performance of the algorithms for the graph based semi-supervised problem on two different real data sets obtained from [31]. We describe each data set here:
1) IRIS data set - This data set contains fifty samples of three different Iris flower - Iris Setosa, Iris Versicolour and Iris Virginica. Four features were measured from each sample - sepal length, sepal width, petal length and the petal width, all in centimeter. Hence, the dimension d of the data points is equal to four. The task is to learn a classifier which can can classify the data points into its corresponding species. 2) SPECT data set - It is a multivariate data set containing 267 sample-
s. Each sample is described by 23 features obtained from the Single Proton Emission Computed Tomography (SPECT) images. Hence, the dimension d of each data point is equal to 23. The task is to classify the given data point as normal or abnormal perfusion.
Similar to the previous experiment we compare the performance of the algorithms by varying the number of unlabeled data points. The unlabeled data points were obtained by taking lc data points from each class such that the total number of labeled data points is equal to l and treating the remaining data as unlabeled data. Table. I and Table. II compares the run time of the algorithms for varying number of labeled points per class and from the Table it can be seen that the proposed algorithm conver-
ges faster than the modified IRLS algorithm for both the data sets.
Table I: Comparison of run time of algorithms in seconds for IRIS data set
No. of labeled data points per class
Proposed algorithm
Modified IRLS [15]
2 0.18 0.29 4 0.14 0.28 6 0.11 0.25 8 0.08 0.24 10 0.07 0.21
Table II: Comparison of run time of algorithms in seconds for SPECT data set
No. of labeled data points per class
Proposed algorithm
Modified IRLS [15]
2 0.19 1.01 4 0.16 0.97 6 0.11 0.91 8 0.09 0.86 10 0.08 0.78
VI. CONCLUSION
In this paper, we proposed an iterative algorithm PROMPT based on the MM procedure to solve the lp norm regression problem for any value of p. PROMPT can parallely update each element of x which is helpful to handle the large scale

11
data efficiently. Also, unlike the state-of-the-art algorithm, the proposed algorithm converges to to the optimal point irrespective of the initialization scheme. We show through computer simulations that the proposed algorithm has faster speed of convergence when compared to the state-of-the-art algorithms and in the end we also evaluate the performance of the proposed algorithm for the graph based semi-supervised problem using real and simulated data.
REFERENCES
[1] C. M. Bishop, Pattern recognition and machine learning. springer, 2006. [2] R. J. Hyndman and G. Athanasopoulos, Forecasting: principles and practice. OTexts, 2018.
[3] M. S. Paolella, Linear Models and Time-Series Analysis: Regression, ANOVA, ARMA and GARCH. John Wiley & Sons, 2018. [4] R. T. Rockafellar, S. Uryasev, and M. Zabarankin, “Risk tuning with generalized linear regression,” Mathematics of Operations Research, vol. 33, no. 3, pp. 712–729, 2008. [5] G. Agro, “Maximum likelihood and lp-norm estimators,” Statistica Applicata, vol. 4, no. 2, pp. 171–182, 1992. [6] A. B. Forsythe, “Robust estimation of straight line regression coefficients by minimizing-
 pth power deviations,” Technometrics, vol. 14, no. 1, pp. 159–166, 1972. [7] H. Leon Harter, “Nonuniqueness of least absolute values regression,” Communications in Statistics-Theory and Methods, vol. 6, no. 9, pp. 829–838, 1977. [8] L. Karlovitz, “Construction of nearest points in the lp, p even, and l∞ norms.” Journal of Approximation Theory, vol. 3, no. 2, pp. 123–127, 1970. [9] C. L. Lawson, “Contribution to the theory of linear least maximum approximation,” Ph. D. dissertation, Univ. Calif., -
1961. [10] M. R. Osborne, Finite algorithms in optimization and data analysis. John Wiley & Sons, Inc., 1985. [11] I. F. Gorodnitsky and B. D. Rao, “Sparse signal reconstruction from limited data using focuss: A re-weighted minimum norm algorithm,” IEEE Transactions on signal processing, vol. 45, no. 3, pp. 600–616, 1997. [12] M. F. Rios, J. Calder, and G. Lerman, “Algorithms for lp-based semisupervised learning on graphs,” arXiv preprint arXiv:1901.05031, 2019. [13] S. Kahng, “Best lp approximati-
on,” Mathematics of Computation, vol. 26, no. 118, pp. 505–508, 1972. [14] H. Ekblom, “Calculation of linear best lp approximations,” BIT Numerical Mathematics, vol. 13, no. 3, pp. 292–300, 1973. [15] D. Adil, R. Peng, and S. Sachdeva, “Fast, provably convergent irls algorithm for p-norm linear regression,” in Advances in Neural Information Processing Systems, 2019, pp. 14 166–14 177. [16] A. Subramanya and P. P. Talukdar, “Graph-based semi-supervised learning,” Synthesis Lectures on Artificial In-
telligence and Machine Learning, vol. 8, no. 4, pp. 1–125, 2014. [17] M. Guillaumin, J. Verbeek, and C. Schmid, “Multimodal semisupervised learning for image classification,” in 2010 IEEE Computer society conference on computer vision and pattern recognition. IEEE, 2010, pp. 902–909. [18] A. Elmoataz, X. Desquesnes, and M. Toutain, “On the game p-laplacian on weighted graphs with applications in image processing and data clustering,” European Journal of Applied Mathematics, vol. 28, no. 6, pp. 922-
–948, 2017. [19] O. Chapelle, B. Scho ̈lkopf, A. Zien et al., “Semi-supervised learning, vol. 2,” Cambridge: MIT Press. Cortes, C., & Mohri, M.(2014). Domain adaptation and sample bias correction theory and algorithm for regression. Theoretical Computer Science, vol. 519, p. 103126, 2006. [20] X. Zhu, Z. Ghahramani, and J. D. Lafferty, “Semi-supervised learning using gaussian fields and harmonic functions,” in Proceedings of the 20th International conference on Machine learning (ICML-03), 2003, pp-
. 912–919. [21] A. El Alaoui, X. Cheng, A. Ramdas, M. J. Wainwright, and M. I. Jordan, “Asymptotic behavior of \ell p-based laplacian regularization in semisupervised learning,” in Conference on Learning Theory, 2016, pp. 879906. [22] C. S. Burrus, “Iterative reweighted least squares,” OpenStax CNX. Available online: http://cnx. org/contents/92b90377-2b34-49e4-b26f7fe572db78a1, vol. 12, 2012.
[23] Y. Nesterov and A. Nemirovskii, Interior-point polynomial algorithms in convex programming. Siam, 1994, vol. 13.
[24] Y. Sun, P. Babu, and D. P. Palomar, “Majorization-minimization algorithms in signal processing, communications, and machine learning,” IEEE Transactions on Signal Processing, vol. 65, no. 3, pp. 794–816, 2016. [25] D. R. Hunter and K. Lange, “A tutorial on MM algorithms,” The American Statistician, vol. 58, no. 1, pp. 30–37, 2004. [26] E. W. Weisstein, “Bolzano’s theorem,” 2008. [27] Y. Vardi and C.-H. Zhang, “The multivariate l1-median and associated data depth,” Proceedings of the National -
Academy of Sciences, vol. 97, no. 4, pp. 1423–1426, 2000. [28] H. Juel, “Minimax location.” [Online]. Available: http://www2.imm.dtu.dk/courses/02721/kap6.pdf [29] M. Grant and S. Boyd, “CVX: Matlab software for disciplined convex programming, version 2.1,” http://cvxr.com/cvx, Mar. 2014. [30] M. F. Rios, “Laplacian lp graph ssl,” 2019. [Online]. Available: https://github.com/mauriciofloresML/Laplacian Lp Graph SSL [31] D. Dua and C. Graff, “UCI machine learning repository,” 2017. [Online]. Availa-
ble: http://archive.ics.uci.edu/ml

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:01.821Z
- **Text Length:** 49359 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 11 of 11
