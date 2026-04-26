# PDF Document: Polson and Sokolov - 2025 - $MC^2$ Mixed Integer and Linear Programming.pdf

**File Path:** Polson and Sokolov - 2025 - $MC^2$ Mixed Integer and Linear Programming.pdf

**Processed Date:** 2026-02-10T18:17:03.032Z

**File Size:** 537.89 KB

**Total Pages:** 30

**Extracted Pages:** 30

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3433

**Title:** $MC^2$ Mixed Integer and Linear Programming

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

MC2 Mixed Integer and Linear Programming
Nick Polson
Booth School of Business University of Chicago
Vadim Sokolov*
Department of Systems Engineering and Operations Research George Mason University
First Draft: December 25, 2024 This Draft: November 26, 2025
Abstract
In this paper, we design MC2 algorithms for Mixed Integer and Linear Programming. By expressing a constrained optimisation as one of simulation from a Boltzmann distribution, we reformulate integer and linear programming as Monte Carlo optimisation problems. The key insight is that solving these optimisation problems requires the ability to simulate from truncated distributions, namely multivariate exponentials and Gaussians. Efficient simulation can be achieved using the algorithms of Kent and Da-
vis. We demonstrate our methodology on portfolio optimisation and the classical farmer problem from stochastic programming. Finally, we conclude with directions for future research.
Keywords: Stochastic Programming, Slice Sampling, Stochastic optimisation, MCMC, Markov chain.
*Nick Polson is at Chicago Booth: ngp@chicagobooth.edu. Vadim Sokolov is Associate Professor at Volgenau School of Engineering, George Mason University, USA: vsokolov@gmu.edu.
1
arXiv:2511.20575v1 [stat.CO] 25 Nov 2025

1 Introduction
The connection between optimisation and simulation has a rich history in the operations research and statistics literature. Following the seminal work of Pincus [1968, 1970], who established the theoretical foundations for using Monte Carlo methods to solve optimisation problems, and Kirkpatrick et al. [1983], who introduced simulated annealing as a stochastic optimisation technique, there has been sustained interest in simulation-based approaches to combinatorial and continuous optimisation. Gema-
n et al. [1990] extended these ideas to constrained optimisation by introducing soft constraint penalties. In parallel, Besag [1974] used the Boltzmann distribution and an iterated conditional mode estimation procedure in image processing. Gelfand et al. [1992] considered the general problem of simulation from truncated distributions, which is central to our approach. In the foundational work, Pincus considered the problem of finding maxx f (x) subject to g(x) = 0. Geman proposed to solve this via-
 an exponentially tilted sampling problem by defining
πκ,λ(x) ∝ exp{−κ( f (x) + λκ g(x))}
where κ and λκ are annealing parameters. This formulation is closely related to the Lagrange multiplier approach, and the parameter λκ plays a role analogous to dual variables in constrained optimisation. That is, take the Pincus density πκ(x) ∝ exp{−κ f (x)} and replace the constraint g(x) = 0 by a “soft” exponential tilting exp{−λκ g(x)}. The advantage of this approach is that it can handle nonlinear constraints g(x). Moreover, EM-style algorithms can be constructed by using a latent variable sc-
heme for both densities. If we augment with latents (λ, ω) then we can write
πκ,λ(x) ∝ exp{−κ( f (x) + λκ g(x))}
= eaxEω e− x2
2 ω ebxEλ e− x2
2λ
where the parameters (a, b) depend on (κ, λκ) and the functional forms of ( f (x), g(x)). This latent variable representation enables the construction of an EM algorithm that is quadratic in x given (ω, λ). The conditional moments E(ω|x) and E(λ|x) are available in terms of derivatives of f and g. A number of simulation techniques can be employed, including nested sampling, vertical likelihood sampling, and MCMC methods. For simulated annealing tasks, standard MCMC approaches can perform poorly du-
e to the difficulty of
2

traversing energy barriers. In the integer programming case, where the simulation is supported on a discrete set, we recommend the use of a stochastic water-filling method to reduce the number of particles in the simulation set while retaining the required Monte Carlo properties. The use of auxiliary variables (slice variables) is particularly useful in multi-modal cases, as they enable the sampler to escape local optima more easily. MCMC methods can achieve polynomial-time complexity for certain-
 combinatorial problems: Polson and Sokolov [2024] demonstrated this for the N-Queens problem, and Kannan [1987] established similar results for integer programming under appropriate conditions. The central idea of our approach is straightforward. Suppose that we wish to solve the optimisation problem
x∗ = arg max
x∈X f (x) subject to g(x) < 0
Then we replace this with the problem of finding the mode of the Boltzmann distribution
πκ(x) = 1
Zκ
exp (−κ f (x)) Ig(x)<0.
This can be achieved in an annealed fashion. In some formulations, the dual problem replaces a hard equality constraint with an inequality constraint. Both types of constraints can be handled naturally within our Monte Carlo framework. Our methodology is particularly well-suited for one-stage and two-stage stochastic programming problems with uncertainty. In these settings, simulation-based methods are essential because the objective function involves expectations that are not available in closed -
form [Ekin et al., 2017, 2014]. The key computational challenge is that one must simultaneously calculate an expectation and optimise. A brute-force Monte Carlo approach first estimates the expectation and then optimises, but this can be highly inefficient, particularly in rare event simulation problems. Our MCMC approach allows both tasks to be performed simultaneously. Related work by Glynn et al. [2010] uses splitting methods to count the number of solutions to integer programming problems, whi-
ch shares the spirit of our simulation-based approach. The rest of the paper is organised as follows. In the remainder of this section, we establish the theoretical foundations for optimisation via Boltzmann distributions and discuss efficient sampling from discrete distributions. Section 2
3

develops the MC2 methodology for integer and linear programming problems, using the annealed stochastic optimisation approach of Pincus. Section 3 presents stochastic sampling techniques for truncated multivariate exponentials and normals, including the stochastic water-filling representation for particle economisation. Section 4 demonstrates the methodology on the classical farmer problem from stochastic programming. We conclude with a discussion of future research directions. Technical details -
on one-stage and two-stage stochastic programming formulations, along with slice sampling methods, are provided in an Appendix.
1.1 Optimisation with Constraints
The general problem we address is to find argminx f (x) where x ∈ X for some
domain X with a given objective function, f (x), which is assumed to have a finite minimum attainable in X that may exhibit multi-modality. We define the set of minima as
Xmin = {x ∈ X : f (x) = myin f (y)} .
We will develop a simulation-based method to find Xmin by exploiting a wellknown duality between the problem above and that of finding the modes of the Boltzmann distribution with energy potential, f (x), and density defined by
πκ(x) = exp {−κ f (x)} /Zκ for x ∈ X .
This density is indexed by a “temperature” parameter, κ, and Zκ = R
X exp {−κ f (x)} dx is the normalisation constant, or partition function. Like simulated tempering, we have to perform a sensitivity analysis with respect to the cooling parameter κ by specifying an initial set of values. A number of methods, e.g. Wang-Landau algorithm and its generalisations and multi-canonical sampling Berg and Neuhaus [1991], place pseudo-prior weights over κ, denoted by p(κ), and use the mixture distribution ∑κ p(κ)πκ(x) to traverse the multi-modal distribution. We allow for t-
his possibility in our framework, although as we show empirically, the use of slice variables greatly enhances the ability of the Markov chain to traverse low and high energy states of the sample space. We will use Markov chain MC simulation methods to sample from this possibly high dimensional joint distribution. One advantage of this approach is that they will not be require explicit knowledge of Zκ. There are, however, many possible Markov transition dynamics that have the appropriate equilibri-
um distribution. Here we propose a new method based on exponential slice sampling.
4

The limiting cases, κ ∈ {0, ∞} both lead to a uniform measure but on different sets. For κ = 0, we have π0(x) as the uniform measure on X . For κ → ∞, we have a uniform measure on the desired set Xmin. Specifically, we have
κli→m∞ πκ(x) = π∞(x) = |Xmin|−1δXmin (x)
where δx denotes Dirac measure. The asymptotic in κ is the basis of simulated annealing Kirkpatrick et al. [1983], van Laarhoven and Aarts [1987], Aarts and Korst [1988], Mu ̈ ller et al. [2004] which uses a schedule of parameter values κ(g) that increases with the length of the Markov chain simulation in an appropriate fashion Gidas [1985]. Other approaches include simulated tempering which uses a random walk on a set of temperature values 0 < κ1 < . . . < κm rather than increasing κ on a schedul-
e, equi-energy sampling Kou et al. [2006], evolutionary MCMC and the Wang-Landau algorithm.. There are a number of ways of computing the mode: for example, Markov chain simulation methods. For a fixed κ, consider running Markov chain
X(0), X(1), . . . , X(G), . . .
with a transition kernel defined so as to have the appropriate equilibrium distribution πκ(x). Then under mild Harris recurrence conditions, given any starting point,
lim
G→∞ P X(G) ∈ A|X(0) = x = πκ(A),
for any Borel sets A. The main issue is determining which Markov chain to use. We argue for the use of slice sampling methods for a set of temperature values defined in a given set in a similar fashion to simulated tempering. In seminal work, Pincus [1968, 1970] proposed to directly use a Metropolis algorithm to simulate from the Gibbs distribution, then after discarding a burn-in period, to use the ergodic mean along the chain 1
G ∑gG=1 X(g) as an estimate of the mode. In the uni-modal case, as κ → ∞, this will find the mode. The simulated annealing literature also includes κ as a control parameter in the Markov chain, which indexes the transition kernel with κ(g). This now makes the simulation procedure a time-inhomogeneous chain and conditions on the choice of schedule κ(g) are required to guarantee convergence to the mode, see Gidas [1985], Geman et al. [1990] for further discussion. We note that even in the multimodal-
 case, a suitably defined Markov chain will converge to a uniform measure over the modes. By monitoring the output
5

of the chain, in principle we can find all the modes. On the theoretical side, the issue is where the constructed Markov chain converges in polynomial time so that the conductance Polson [1996] of moving from mode to mode for a large κ is high enough. Clearly, in hard multi-modal cases this is unlikely to be the case, as the surfaces typically have witches’ hat spikes where it is known that, even though there is geometric convergence of a simple Gibbs sampler, it is not polynomial. Only differenc-
e is that for integer programming we are sampling from a discrete set. There are a number of methods to stochastically sample discrete distributions Bertsimas and Weismantel [2005]. When the optimisation problem has a discrete feasible region, we require efficient methods for sampling from discrete probability distributions. Fearnhead and Clifford [2003] proposed an O(N) algorithm for exact simulation from discrete distributions that avoids the O(N log N) complexity of methods based on sorting or -
balanced tree structures. Their approach uses a clever partitioning scheme that allows direct sampling in linear time. An alternative approach is to use nested sampling, as developed in the context of Bayesian computation by Skilling [2006]. This method constructs a sequence of nested constraint sets and can be particularly effective when the target distribution concentrates on a small subset of the discrete space. The combination of these techniques with our MCMC framework provides a complete too-
lkit for discrete optimisation problems. We defer the detailed discussion of one-stage and two-stage stochastic programming formulations to the Appendix.
2 MC2 for Integer and Linear Programming
We now develop the MC2 methodology for linear programming problems. Consider the LP problem of calculating
G(z) = mπax π′z : W′π ≤ q
Following Pincus, we consider the annealed distribution
pκ(π|z, q, W) = exp (−κπz) I W′π ≤ q /Zκ
where Zκ = R
W′π≤q exp (−κπz) dπ is an appropriate normalisation constant.
Then as κ → ∞, this distribution tends to a Dirac measure on the solution π⋆ of the LP. Simulation from pκ(π), however, requires a method for dealing with truncated multivariate exponential distributions.
6

We can then simulate a Markov chain and obtain draws π(h) for h = 1, . . . , H and estimate the value function as a Monte Carlo Rao-Blackwellised average Gˆ (z) =
1
H ∑iH=1 π(g)z, an average of piecewise linear functions.
2.1 Example: Pincus [1968]
Consider the problem with b, t > 0
max c1x1 + c2x2 subject to x1 + bx2 = t
where we also have the constraint x1, x2 > 0. An alternative approach is to substitute out a variable. For instance, using x1 = t − bx2 introduces a nonlinear term (t − bx2)+ to enforce the positivity constraint on x1. We can still use the Pincus marginal annealed distribution with this formulation. Furthermore, data augmentation or EM-style algorithms can handle the exp(κ max(·)) term that arises from the positivity constraint by introducing appropriate latent variables. The solution is given by
x⋆
1 = t if c1 > 0, bc1 < c2
and otherwise x⋆
1 = 0. For the other variable
x⋆
2= t
b if c2 > 0, bc1 < c2
and otherwise x⋆
2 = 0. We can add two slack variables for the greater than zero constraints and solve max cT x subject to Ax = b where xT = (x1, x2, x3, x4) and
A=


1b00 1010 0101

 b=


t 1 1


Moreover,by Duality (see Birge and Louveaux [1997], p. 73)
max{cT x | Ax = b} equivalent to min{πTb | πT A ≥ cT}
where π are called dual variables. The optimal solutions satisfy cTx⋆ = (π⋆)Tb The Dual variables define a Boltzmann-Gibbs distribution for π = (π1, π2, π3) defined by
pκ(π) ∝ e−κ(tπ1+π2+π3)I πT A ≥ cT
7

The Gibbs sampler iterates through the following truncated exponential conditionals:
• π1|π2, π3 ∼ e−κπ1tI max(c1 − π2, c2−π3
b ), ∞
• π2|π1, π3 ∼ e−κπ2I (max(c1 − π1, 0), ∞)
• π3|π1, π2 ∼ e−κπ3I (max(c2 − bπ1, 0), ∞)
Depending on the sign of c2 − bc1 the conditional for π3 will converge to the desired two solutions. If c2 < bc1, then π3 ≈ 0 and then π1 ≈ c1 and π2 ≈ 0.
Hence x⋆.
If c2 > bc1, then π3 ≈ c2 − bπ1. Then c2−π3
b = π1 and π1 ≈ c1 and π2 ≈ 0.
Alternatively, one can substitute out x1 using the equality constraint x1 = t − bx2 and solve a one-dimensional optimisation problem in x2 alone. This reduces the Gibbs sampler to sampling from a single truncated exponential distribution, which can significantly improve computational efficiency. For simulation from the one-dimensional truncated exponentials we proceed as follows. For the one-dimensional truncated exponentials we have: density exp(mx) on (a, t) where m > 0 has inverse cdf
t + log expm(a−t) +U(1 − expm(a−t) /m
where U ∼ U(0, 1).
2.2 Example: Bayesian Portfolio Optimisation
To illustrate the method’s performance on a problem with uncertainty, consider the classical problem of maximising the expected utility of wealth from investing
in a portfolio of risky assets. In this case, G(ω, x) = K − e−γ(r(ω)Tx+rf ), where r(ω) is an n-vector of the excess returns of the risky assets relative to a risk-free return r f and K is chosen sufficiently large that the returns can be restricted so that G(ω, x) ≥ 0. For r normally distributed with mean μ and covariance Σ, the system can be solved analytically to obtain x∗ = Σ−1μ/γ. For the MCMC implementation, we introduce an auxiliary variable w so that
G(ω, x) =
Z r(ω)T x+r f
− log K/γ
γe−γwdw,
8

i.e., so that w is conditionally a truncated exponential random variable. We then have
πJ(ωJ, x) ∝
J
∏
j=1
γe−γwj 1{− log K/γ≤wj≤rjT x+r f }e−(r−μ)TΣ−1(r−μ)/2.
The MCMC iterations then iteratively draw wj, returns rj, and solutions x(g) as follows.
wj − log(K)/γ ∼ E (γ, [0, log(K)
γ
+ rjTx + r f ])( truncated exponential with parameter γ),
rj ∼ N ((μ, Σ)|rjT x + r f ≥ wj)( truncated normal),
xk ∼ U ([max
r jk >0
wj − rT
jk ̄ xk ̄ − r f
rjk
, min
r jk <0
wj − rT
jk ̄ xk ̄ − r f
rjk
])( uniform),
where k = 1, . . . , n and subscript k ̄ denotes the vector of components other than k. The sample-average approximation method tries to avoid a potentially exponential number of evaluations for ω by simulating ω = (ω1, . . . , ωN) and approximating the criterion function E[G(ω, x)] by the sample average
Gˆ (x) = 1
N
N
∑
i=1
G(ωi, x). (1)
The method then can use gradient-based methods to also estimate the gradient using MC samples to find argmaxxGˆ (x). In the general, the solution xN to (1), while consistent, may be biased for finite N with a bias that is difficult to detect without additional information.
3 Stochastic Sampling Techniques
The MC2 methodology requires efficient algorithms for sampling from truncated distributions. In this section, we develop the necessary sampling techniques for multivariate exponentials, which arise in linear programming, and multivariate normals, which arise in quadratic programming.
9

3.1 Truncated Sampling: Multivariate Exponentials
The most direct approach to draw from a truncated multivariate exponential is to use one-at-a-time Gibbs sampling. This can be slow to converge when there is an “icicle” in the constraint region. First write x = (x+, x−) and then transform the system so that all coordinates are positive x > 0. Also assume that the constraint is of the form Ax ≤ b where x is K × 1 and A is n × K where typically n ≥ K. The constraint Ax ≤ b can be written as a series of conditional constraints [Gelfand et al., 1992]-
 where
n
∑
j=1
aijxj ≤ bi implies aikxk ≤ bi − ∑
j̸=k
ai j xj ;
therefore, xk ≤ mini(bi − ∑j̸=k aijxj)/aik if the aik > 0. In some cases, we can use the factorisation p(x1, x2) = p(x1|x2)p(x2). For example, consider the joint distribution
exp −q′x I (a1x1 + a2x2 ≤ b)
We can use the transformation z = a1x1 and y − z = a2x2; then, the distribution
p(y|z) ∼ TExp(z,b)(q2a−1
2 ).
The marginal distribution p(z) is then determined by
p(z) ∝ e−z 1 − e−q2a−1
2 (b−z) where 0 < z < b.
This is a density tilted by a cdf, which can be sampled using the following result.
Theorem 1. (Vaduva) Generate X ∼ f and Y with cdf F until X ≥ Y. This will gives samples from p(x) = c f (x)F(x), where c gives the efficiency of the algorithm.
Conditioned to the Simplex The truncated multivariate exponential on the simplex x ∈ Sk−1 is defined by
f (x) = d(λ)−1 exp
k−1
∑
j=1
−λjxj
!
x = (x1, . . . , xk−1)′; xj ≥ 0,
k−1
∑
j=1
xj ≤ 1
10

Kent et al. [2004] calculate the normalisation constant for unequal and equal λ’s. They write
pK(λ) = d(λ)
k−1
∏
j=1
λj
where pK(λ) = P ∑k−1
i=1 Xi < 1 is the probability of the indept exponentials ly
ing in the simplex. If the λ’s are all equal we get
pK(λ) = eλ −
k−2
∑
j=1
λj
j!
!
e−λ.
Equal λ’s If the λj = λ then this distribution can be easily sampled. Consider
the transformation xj = yrj where y = ∑k−1
j=1 xj is the “size” of x. After a change of
variables,
f (y, r) ∝ yk−2 exp (−λy) , r ∈ Sk−2 , 0 ≤ y ≤ 1.
We need to sample from the simplex and from a truncated gamma as follows.
• It is straightforward to sample from the simplex. Take uniforms U1, . . . , Uk−2
on [0, 1] and let s′
1, . . . , s′
k−2 be the successive gaps in the order statistics, s′
1=
U1, s′
j = U(j) − U(j−1) for j = 2, . . . , k − 1. See Method 2.
• Sampling from a truncated gamma distribution can be done with the ratios of uniforms method. See Method 3. Simulating Y ∼ Γ(k − 1, λ) on [0, 1] is equivalent to X = λY ∼ Γ(k − 1, λ) on [0, λ]. Then if we let W − X − min(k − 1, λ) be a location shift. Let f (w) be the pdf. Then we can define u+, v−, v+ (see Kent, p.56) and generate (U, V) uniformly in the rectangle
D = [0, u+] × [v−, v+]
and accept W = V/U if U < f 21 (V/U).
In the general case of differing λj’s. Kent proposes to use accept-reject on the simplex and calculates the rejection probability using mgf methods. This takes a truncated independent exponential
fTE(x) = b(λ) fE(x) , 0 < sj < 1, b(λ)−1 =
k−1
∏
j=1
1 − exp −λj
11

and then conditions down to the simplex. Method 1 applies for small values of the concentration parameter λ, Method 2 for large, and Method 3 for ranges between the others.
3.1.1 Distribution of Y = ∑k−1
i=1 Xj
The Laplace transform of Y = ∑k−1
i=1 Xj where (Xj|λj) ∼ Exp(λj) is given by
M(φ) = E (exp(φY)) =
k−1
∏
j=1
1
1 + φ/λj
If the λj are all unequal this can be given by a partial fraction expansion
M(φ) =
k−1
∑
j=1
λj
λj + φ
k−1
∏
i=1,i̸=j
λi
λi − λj
.
Let aj = ∏k−1
i=1,i̸=j
λi
λi−λj where the λ’s have been ordered. This can be inverted to
give the cdf of Y = ∑k−1
i=1 xj as
F(y) =
k−1
∑
j=1
aj(1 − e−λjy),
Hence, the density for Y is a weighted sum of exponentials, which is easy to simulate. Setting y = 1 given the probability of lying in the simplex,
pT(λ) =
k−1
∑
j=1
(1 − e−λj )
k−1
∏
i=1,i̸=j
λi
λi − λj
Hence, we can calculate the normalisation constant d(λ).
3.2 Exponential Slice Sampling
An important enhancement to the basic Gibbs sampler is the introduction of auxiliary slice variables. Suppose that we wish to find maxX f (x, y). We define the annealed distribution
πκ(x, y) = exp (κ f (x, y)) /Zκ where (x, y) ∈ X
12

If we introduce an auxilary exponential slice variable, so that the joint distribution is
π(u, x, y) ∝ κ exp(κu)I (−∞ < u < f (x, y)) I ((x, y) ∈ X )
Then, we have a truncated exponential for the slice variable
π(u|x, y) = κ exp(κu)
exp(κ f (x, y)) I (−∞ < u < f (x, y))
and a uniform for (x, y) truncated via the bound u < f (x, y). Marginalising out u also gives us the appropriate marginal
πκ(x, y) = exp (κ f (x, y)) I ((x, y) ∈ X ) /Zκ
assuming this is a well-defined density. This differs from the case of finding minX f (x, y) which requires a slice uniform on (0, exp(−κ f (x, y))).
3.3 Truncated Sampling: Multivariate Normal
We now turn to quadratic objectives, which arise in portfolio optimisation and quadratic programming. These lead to truncated multivariate normal distributions. Consider the problem of sampling from a truncated normal θ ∼ NT(μ, Σ) on the constraint set T = {θ : Aθ ≤ b}. We denote this distribution by
θ ∼ NT(μ, Σ) on {θ : Aθ ≤ b} (2)
One approach is to transform the constraint set and let φ = Aθ and rewriting the model as
φ ∼ NT(Aμ, AΣAT) on {φ : φ ≤ b} (3)
This can lead to inefficient sampling due to the correlation structure of φ. Highly correlated variables will lead to poor Gibbs convergence properties. In order to do this we would have to use the conditionals
φk|φ(−k) ∼ N(μ∗
k , σk2k) (4)
μ∗
k = μk + Σ1TΣ−1
11 (y1 − μ1) and σk2k = σkk − Σ1TΣ−1
11 Σ1 (5)
An efficient alternative is to re-parameterise and use a variance stabilizing transformation. First find Q such that QΣQ′ = I and set φ = Qθ. Notice that the
13

constraint set S = {Qθ : Aθ ≤ b} transforms to S = {φ : Dφ ≤ b} where D = AQ−1. The problem becomes that of sampling
φ ∼ NS(Qμ, AΣAT) on {φ : Dφ ≤ b} (6)
Let α = Qμ. We can now compute the complete conditionals and sample this joint distribution in a Gibbs fashion as follows
φj|φ(−j) ∼ NSj (αj, 1) (7)
where the conditional constraint set is given by
Sj = {φj : dj φj ≤ b − D(−j) φ(−j)} (8)
Since the constraint on y form a convex subset of Rk the set Sj can be determined as an interval of the form [lj, uj], (−∞, uj] or [lj, ∞) using the 1-dimensional constraints defined by dj φj ≤ b − D(−j) φ(−j). Using the variance stabilizing transformation leads to a far more efficient algorithm. The algorithm can be summarised as follows:
1. Initialize φ(0) satisfying the constraints Dφ ≤ b.
2. For t = 1, . . . , T:
(a) For j = 1, . . . , k:
• Calculate the bounds for φj given the current values of φ(−j). For each constraint i = 1, . . . , m, we have
dij φj ≤ bi − ∑
l̸=j
dil φ(current)
l
If dij > 0, this provides an upper bound; if dij < 0, a lower bound. The intersection of these intervals over all i defines the conditional support [Lj, Rj].
• Sample φ(t)
j from a truncated normal N(αj, 1) constrained to [Lj, Rj] using the inverse CDF method.
3. Transform back to the original parameters: θ(t) = Q−1 φ(t).
This decorrelation step is crucial. In the original parameterization, the components of θ are correlated both due to Σ and the constraints. The transformation removes the dependence due to Σ, leaving only the dependence due to the constraints, which is handled naturally by the truncated Gibbs steps.
14

3.4 Stochastic Water-Filling Representation
When implementing MC2 algorithms with particle approximations, we need to devise a method of selecting a fixed number, say N, particles from the expanding set of particles to provide support economisation. This problem reduces to that of approximating a discrete probability mass function, q = {qj}jM=1 with finite
support by a stochastic probability mass function, Q = {Qj}jM=1 with fewer support points. We need to determine Q so that for a given value of N < M,
• E(Qj) = qj
• The support of Q has no more than N points
• ∑jM=1 E(Qj − qj)2 is minimised.
The unbiased condition, qj = E(Qj), lets us conclude
M
∑
j=1
fjqj =
M
∑
j=1
fjE(Qj) = EQ
M
∑
j=1
fjQj
!
for any functional f . We can use 1
N ∑iN=1 fiQi to estimate the last term, that is
averaging the functional over the current weights. The water-filling solution is constructed as follows. Let N < M and α be the unique root of N = ∑jM=1 min(αqj, 1). Then select particles with weights
Qj = qj
pj
with prob pj = min(αqj, 1)
and zero otherwise. Equivalently, let pj = min(αqj, 1) and select Qj such that
Qj = qj if qj ≥ 1
α and pj = 1
1
α prob pj = min(αqj, 1)
If qj ≥ 1/α the weight stays the same (i.e. Qj = qj) and the particle is selected with probability one. If qj < 1/α, it is resampled with probability αqj and the new weight is set equal to Qj = 1/α. This scheme satisfies the three required conditions described above. By definition of α, we have N particles left out of the M.
We apply this with qj = p(φ(j)
t+1)/ ∑iN=1 p(φ(i)
t+1) at time t + 1.
15

The condition that with probability one at most N of the Qj’s are non-zero im
plies that Qj = Xj with some probability pj and zero otherwise, where ∑jM=1 pj ≤ N. We can decompose the mean aquared error as
E (Qj − qj)2 = pj(E(Xj) − qj)2 + pjVar(Xj) + (1 − pj)qj2
Thus is minimised by taking Xj = cj, a constant. The unbiasedness condition E(Qj) = qj implies that cj = qj/pj. Then we have
E (Qj − qj)2 =
M
∑
j=1
qj2 p−1
j −1
Minmising this is equivalent to minimising
M
∑
j=1
qj2
pj
subject to
M
∑
j=1
pj ≤ N
This is a standard constrained minimisation problem and the KKT condition gives
pj = min(αqj, 1) for j = 1, . . . , M .
Water-filling has the feature that it “keeps the winners” and “re-sampler the losers”. We minmise the weight mean squared error whilst retaining unbiaseness. The N particles will each having a possible K “children” and the next mixture has M = NK particles which is then collapsed back to N particles and the process is repeated. For the water-filling solution, the condition
min(αq1, 1) + min(αq1, 1) = N = 1
implies that α−1 = q1 + q2, neither particle is above the bar and so the sequential collapsing mixture approach reduces to Barker’s algorithm. When M ≫ N with uniform weights qj = 1/M, the condition ∑jM=1 min(αqj, 1) = N implies α ≈ 1/N, and since 1/M < 1/N, no particles exceed the threshold. In this regime, the water-filling approach offers no advantage over standard resampling. The method works best when there is an exponentially small number of high posterior probability solutions and one disco-
vers them sequentially, with the ratio M/N = K held fixed.
16

Several extensions of the basic water-filling scheme are noteworthy. First, the method can be applied sequentially, which prevents an exponentially large number of low-quality models from diluting the weight of good solutions. Second, the same argument extends to settings with latent variables. Suppose qj = E(qj(z)) but the expectation cannot be evaluated directly. The procedure can be applied conditional on z, using the fact that
M
∑
j=1
qj(z) = 1 ∀z implies
M
∑
j=1
Ez(qj(z)) = 1.
The water-filling representation also applies to ratios of expectations, which arise in Bayes factor calculations:
Eq( f )
Eq(g) =
M
∑
j=1
qjgj
∑jM=1 qj gj
fj
gj
≈
N
∑
j=1
Qj
fj
gj
.
More generally, when qj = Ev(qj(v)), one can simulate vj ∼ p(v) and collapse the mixture over both indices j and latent variables vj, while preserving the unbiasedness property:
M
∑
j=1
fjqj =
M
∑
j=1
fjEv(qj(v)) = EQ,v
M
∑
j=1
fjQj(vj)
!
.
Finally, the method can be iterated using the law of iterated expectations. Writing Qj = E(Q ̃ j), we have
M
∑
j=1
fjqj =
M
∑
j=1
fjE(Qj) = EQ
M
∑
j=1
fjQj
!
= EQ
M
∑
j=1
fjE(Q ̃ j)
!
,
which allows sequential refinement of the particle approximation.
4 Applications
4.1 Example: Farmer Problem
We demonstrate our methodology on the classical farmer problem from stochastic programming. This example is based on the crop allocation problem in Birge and
17

Louveaux [1997] for the farmer’s decision of an initial storage decision x and then subsequent allocation decisions y1 and y2 that depend on the realization of the random outcome. The overall problem is to maximize profit of −kx + E[143y1 + 60y2] subject to storage y1 + y2 ≤ x and investment constraints,
110y1 + 30y2 ≤ ω1 and 120y1 + 210y2 ≤ ω2,
with y1, y2 ≥ 0. We can directly use conditional exponential sampling or introduce a further exponential slice variable and then sample from conditional uniforms. In the former, we have conditionals
p(y1|y2) ∝ exp (143κy1) I (0 ≤ y1 ≤ min((ω1 − 30y2)/110, (ω2 − 210y)/120, x − y2))
p(y2|y1) ∝ exp (60κy2) I (0 ≤ y2 ≤ min((ω1 − 110y1)/30, (ω2 − 120y1)/210, x − y1))
If we use the auxiliary slice variable we have the extra constraint u ≤ 143y1 + 60y2. Then we sample three conditionals
p(u|y1, y2) = κ exp(κu)I (−∞ < u < 143y1 + 60y2)
p(y1|x, y2) ∝ I (max(0, (u − 60y2)/143) ≤ y1
≤ min((ω1 − 30y2)/110, (ω2 − 210y2)/120, x − y2))
p(y2|x, y1) ∝ I (max(0, (u − 143y1)/60) ≤ y2
≤ min((ω1 − 110y1)/30, (ω2 − 120y1)/210, x − y1))
The latter might be able to escape from local modes. Figures 2 and 3 present the results of these iterations for fixed x = 75, ω1 = 4000, and ω2 = 15000. For an example, we make J = 20 copies of the recourse variables and then
follow the MCMC iterations over x, yj
2, and auxiliary variables uj. For different
values of k, with ω1 ∼ U (3000, 500) and ω2 ∼ U (10000, 20000), we have the objective values as a function of x as given in Figure 4. The histogram results for the last 2500 MCMC iterations of 5000 iterations appear in Figure 5. The modal interval again contains (or nearly contains) x∗ in each case. We need to calculate the normalising constant Z(z, ω). The constraint region (y1, y2) ∈ X (ω, x) is given by
y1, y2 > 0, y1 + y2 ≤ x, 110y1 + 30y2 ≤ ω1, 120y1 + 210y2 ≤ ω2
18

16 18 20 22 24 26 28
30 35 40 45 50 55
x
y
kappa=0.01, G=10000
21.0 21.5 22.0 22.5
51 52 53
x
y
kappa=0.1
21.82 21.86 21.90 21.94
52.85 52.95 53.05 53.15
x
y
kappa=1
21.870 21.874 21.878
53.105 53.115 53.125
x
y
kappa=10, G=100000
Figure 1: Gibbs Output.
19

We will also assume that
0 < x < 100 , 3000 ≤ ω1 ≤ 5000 , 10, 000 < ω2 < 20000 .
Given x and (ω1, ω2), we can find the optimal x⋆ as we know
0 < y1 < min (x − y2, (ω1 − 30y2)/110, (ω2 − 210y2)/120)
For the y variable, we have marginally 0 < y2 < min(x, ω1/30, ω2/210). Given that x < 100 and ω1 > 3000, this reduces to 0 < y2 < min(x, ω2/210). Hence, we can substitute out and consider the nonlinear criteria function
Eω myax (60y2 + 143 min (x − y2, (ω1 − 30y2)/110, (ω2 − 210y2)/120))
This leads to a marginal annealed distribution where we use the Pincus result for nonlinear functionals. We can therefore anneal only the distribution of (y2|ω, x) with density
pκ(y2|ω, x) = exp (κ(60y2 + 143 min (x − y2, (ω1 − 30y2)/110, (ω2 − 210y2)/120))) /Zκ(ω, x)
defined over the region I (0 < y2 < min(x, ω2/210)). This is a piecewise exponential distribution. We still need to be able to either calculate the normalisation constant Zκ(ω, x) explicitly, which follows from integrating the piecewise exponential distribution. An alternative is to directly sample from this distribution. In this case the normalisation constant cancels in the Metropolis acceptance probability calculation.
5 Discussion
We have developed MC2 algorithms for solving mixed integer and linear programming problems by reformulating them as simulation problems from Boltzmann distributions. The key insight is that constrained optimisation can be expressed as sampling from appropriately truncated distributions, namely multivariate exponentials for linear programs and multivariate Gaussians for quadratic objectives. As the annealing parameter κ increases, these distributions concentrate on the optimal solutions. The approa-
ch has several advantages over traditional optimisation methods. First, it provides a unified framework for handling both discrete and continuous decision variables, as well as linear and nonlinear constraints. Second, the MCMC
20

framework naturally handles uncertainty in the problem parameters, making it well-suited for stochastic programming applications where one must simultaneously compute expectations and optimise. Third, the introduction of auxiliary slice variables enables the sampler to traverse multi-modal objective landscapes more effectively than standard simulated annealing. Our methodology relies on efficient algorithms for sampling from truncated distributions. For truncated multivariate exponentials, the wo-
rk of Kent et al. [2004] provides methods that work well across different parameter regimes. For truncated multivariate normals, variance-stabilising transformations following Gelfand et al. [1992] lead to efficient Gibbs samplers. The stochastic water-filling representation offers a principled approach to particle economisation when the number of scenarios becomes large. Several directions for future research merit attention. The computational complexity of our MCMC algorithms warrants further st-
udy, particularly in identifying problem structures that lead to polynomial-time mixing. Recent work on counting solutions to combinatorial problems via MCMC [Polson and Sokolov, 2024] suggests that certain problem classes may admit efficient algorithms. Additionally, combining our framework with variance reduction techniques such as importance sampling or control variates could improve the efficiency of expected value estimation in stochastic programming. Finally, extending the methodology to mul-
ti-stage stochastic programs with more than two stages, where the curse of dimensionality is most severe, remains an important challenge.
References
E. Aarts and J. Korst. Simulated annealing and boltzmann machines. January 1988.
Bernd A. Berg and Thomas Neuhaus. Multicanonical algorithms for first order phase transitions. Phys. Lett. B, 267:249–253, 1991.
Dimitris Bertsimas and Robert Weismantel. Optimization over Integers. Dynamic Ideas, Belmont, 2005. ISBN 978-0-9759146-2-5.
Julian Besag. Spatial Interaction and the Statistical Analysis of Lattice Systems. Journal of the Royal Statistical Society. Series B (Methodological), 36(2):192–236, 1974.
21

John R. Birge and Fran c
Louveaux. Introduction to Stochastic Programming. Springer, New York, 1997.
Luc Devroye. Non-Uniform Random Variate Generation. Springer-Verlag, New York, 1986.
Robert G. Edwards and Alan D. Sokal. Generalization of the Fortuin-KasteleynSwendsen-Wang representation and Monte Carlo algorithm. Physical Review D, 38(6):2009–2012, September 1988.
Tahir Ekin, Nicholas G. Polson, and Refik Soyer. Augmented Markov Chain Monte Carlo Simulation for Two-Stage Stochastic Programs with Recourse. Decision Analysis, 11(4):250–264, December 2014.
Tahir Ekin, Nicholas G. Polson, and Refik Soyer. Augmented nested sampling for stochastic programs with recourse and endogenous uncertainty. Naval Research Logistics (NRL), 64(8):613–627, December 2017.
Paul Fearnhead and Peter Clifford. On-line inference for hidden Markov models via particle filters. Journal of the Royal Statistical Society: Series B (Statistical Methodology), 65(4):887–899, 2003.
Alan Gelfand, Adrian F. M. Smith, and Tai-Ming Lee. Bayesian analysis of constrained parameter and truncated data problems using Gibbs sampling. Journal of the American Statistical Association, 87:523–532, 1992.
D. Geman, S. Geman, C. Graffigne, and P. Dong. Boundary detection by constrained optimization. IEEE Transactions on Pattern Analysis and Machine Intelligence, 12(7):609–628, July 1990.
Basilis Gidas. Nonstationary Markov chains and convergence of the annealing algorithm. Journal of Statistical Physics, 39(1-2):73–131, April 1985.
Paul Glasserman. Monte Carlo Methods in Financial Engineering, volume 53 of Stochastic Modelling and Applied Probability. Springer New York, New York, NY, 2003. ISBN 978-1-4419-1822-2 978-0-387-21617-1.
Peter W. Glynn, Andrey Dolgin, Reuven Y. Rubinstein, and Radislav Vaisman. How to generate uniform samples on discrete sets using the splitting method. Probability in the Engineering and Informational Sciences, 24(3):405–422, January 2010.
22

Ravi Kannan. Minkowski’s Convex Body Theorem and Integer Programming. Mathematics of Operations Research, 12(3):415–440, August 1987.
John T. Kent, Patrick D.L. Constable, and Fikret Er. Simulation for the complex Bingham distribution. Statistics and Computing, 14(1):53–57, January 2004.
S. Kirkpatrick, C. D. Gelatt, and M. P. Vecchi. Optimization by simulated annealing. Science, 220:671–680, 1983.
S. C. Kou, Qing Zhou, and Wing Hung Wong. Equi-energy sampler with applications in statistical inference and statistical mechanics. The Annals of Statistics, 34 (4), August 2006.
Peter Mu ̈ ller, Bruno Sans  ́o, and Maria De Iorio. Optimal Bayesian Design by Inhomogeneous Markov Chain Simulation. Journal of the American Statistical Association, 99(467):788–798, September 2004.
Radford M. Neal. Slice Sampling, 2000.
Martin Pincus. A closed form solution of certain dynamic programming problems. Operations Research, 16:690–694, 1968.
Martin Pincus. A Monte Carlo Method for the Approximate Solution of Certain Types of Constrained Optimization Problems. Operations Research, 18(6):12251228, December 1970.
Nicholas Polson. Convergence of Markov chain Monte Carlo algorithms (with discussion). Bayesian Statistics, 5:297–321, 1996.
Nick Polson and Vadim Sokolov. Counting $N$ Queens, 2024.
Herbert Robbins and Sutton Monro. A stochastic approximation method. The Annals of Mathematical Statistics, 22(3):400–407, 1951.
Reuven Rubinstein. The cross-entropy method for combinatorial and continuous optimization. Methodology and computing in applied probability, 1(2):127–190, 1999.
Alexander Shapiro and Tito Homem-de-Mello. A simulation-based approach to two-stage stochastic programming with recourse. 1996.
John Skilling. Nested sampling for general Bayesian computation. Bayesian Analysis, 1(4):833–859, December 2006.
23

Peter J. M. van Laarhoven and Emile H. L. Aarts. Simulated Annealing: Theory and Applications. CWI Tract 51. Reidel, Amsterdam, 1987.
A Stochastic Programming Formulations
A.1 One-Stage Stochastic Programming
The set-up for the one-stage problem is as follows. We seek x∗ such that
Eω [G(ω, x∗)] = mxax Eω [G(ω, x)] , (9)
where ω ∼ p(ω) for G(·, ·) given. Let G(x) = Eω [G(ω, x)]. Assuming G > 0 and Z
Eω [G(ω, x)] dμ(x) < ∞
for some measure μ(dx) to avoid singularities for x∗. Let
πJ(ωJ, x) ∝
J
∏
j=1
G(ωj, x)p(ωj).
The marginal πJ(x) ∝ Eω [G(ω, x)]J has its mode at x∗ and collapses on x∗ as J ↑ ∞ as required (see Pincus [1968]). The MCMC conditionals can then be found as:
πJ(ωj|x) ∝ G(ωj, x)p(ωj)
and
πJ(x|ωJ) ∝
J
∏
j=1
G(ωj, x)p(ωj),
which can be sampled through Gibbs sampling or via Metropolis–Hastings algorithms. The result is a Markov chain with samples {ωJ,(h), x(h)}hH=1.
The key property is the ability to simulate the ωj’s from a density that depends
on current state in the chain x(h). Convergence is achieved with {ωJ,(H), x(H)} → πJ(ωJ, x) and x(H) → x∗ in mode (and expectation as J → ∞). This approach requires no optimization step as in methods based on a sampleaverage approximation (see Birge and Louveaux [1997]) and does not require the
24

setting of step-length parameters as in approaches based on stochastic approximation (see Robbins and Monro [1951] and Rubinstein [1999]). By also not requiring properties such as convexity, the MCMC method allows for a wide range of objectives (such as black-box functions) that are not amenable to solution with other methods.
A.2 Two-Stage Stochastic Programming
The one-stage problem (9) can be extended to dynamic environments in which multiple actions take place sequentially as uncertainty is gradually resolved. A simple version is the two-stage (linear) stochastic program with (fixed) recourse to find x∗ to solve min
x∈S cT x + Eω [Q(x, ω)]
where S = {Ax = b, x ≥ 0} and
Q(x, ω) = min
y(ω)≥0
{qT(ω)y∥Wy = h(ω) − T(ω)x},
y(ω) is known as the recourse decision given the realization of ω. See Shapiro and Homem-de-Mello [1996] and Birge and Louveaux [1997] for Monte Carlo solutions, and Glasserman [2003] for financial applications of Monte Carlo methods. We can convert a two-stage problem into a simulation problem that resembles the one-stage formulation. The key observation is that, by duality, we can write the recourse function as Q(x, ω) = G(h(ω) − T(ω)x), where
G(h − Tx) = max
ξ
{(h − Tx)Tξ : WTξ ≤ q}.
MCMC simulation is far easier to apply with an inequality constraint WTξ ≤ q than with an equality constraint Wy = h − Tx. With this dual formulation, the two-stage problem becomes
max
x∈S Eω
"
max
ξ :W T ξ ≤q(ω)
{(h(ω) − T(ω)x)Tξ + cTx}
#
.
For the two-stage stochastic program, the LP recourse problem can be replaced by an expectation under the annealed distribution
pκ(π|ω, x, q, W) = exp (−κπ(T(ω)x − h(ω))) I W′π ≤ q /Zκ(ω.x)
25

where Zκ is an appropriate normalisation constant. We can then sample from this multivariate distribution in a number of ways. For an “over-determined” W using one-at-a-time Gibbs leads to min/max constraints. Overall, the MCMC method leads to the limit
Eπ|ω,x,q,W π′(T(ω)x − h(ω)) → (π⋆)′(T(ω)x − h(ω)) as κ → ∞
Therefore, we can instead use MCMC methods to solve
mxax Eω − max
π:W′π≤q π′(T(ω)x − h(ω)) = mxax Eω −Eπ|ω,x,q,W π′(T(ω)x − h(ω))
For MCMC sampling, we define a joint distribution
p(x, π, ω) ∝ π′q · pκ(π|ω, x)p(ω)
where pκ is the annealed distribution. This has the appropriate marginal p(x) ∝
Eω
n
Eπ|ω,x (π′q)
o
. We can also introduce a further slice variable u to deal with
the objective function, where the slice variable satisfies 0 < u < π′q. Consider the augmented joint distribution
p(x, u, π, ω) ∝ I 0 < u < π′q · pκ(π|ω, x)p(ω)
with a uniform measure on x. The conditional for the π generation essentially adds another constraint
I 0 < u < π′q and I W′π ≤ q .
We use one-at-a-time Gibbs to draw from the annealed conditional p(π|ω, x) as a truncated multivariate exponential on this set of inequality constraints. The uncertainty variable samples from an exponentially tilted distribution rather than the prior p(ω) in typical stochastic methods; the conditional posterior is
p(ω|π, x) ∝ p(ω) exp −π′(T(ω)x − h(ω))
Finally, for the choice variable at the first stage,
p(x|π, ω) ∝ exp −π′(T(ω)x − h(ω)) μ(x),
where μ(x) is a uniform measure on the set X . We can also add J-copies over (ω, π) so that p(x) again collapses on the optimum x∗.
26

Conditional Sampling Gelfand et al. [1992] propose using Gibbs sampling to draw from the annealed distribution. This requires only the one-dimensional conditionals
pκ(ξj|ξ(−j), a, W, γ),
where ξ(−j) denotes the vector of all variables except ξj.
If the inequality constraints WTξ ≤ γ can be written as ξj ≤ b(−j)(W, ξ(−j), γ), then the one-dimensional conditionals are simply truncated exponentials:
ξj|ξ(−j), a, W, γ ∼ 1
κaj
eκaj(ξj−b(−j)) on ξj ≤ b(−j)(W, ξ(−j), γ).
In the two-stage case, a = a(ω, x) and γ = γ(ω, x) depend on the random outcome and first-stage decision, leading to the conditional distribution
pκ(ξ|ω, x) ∝ eκa′(ω,x)ξ I{WTξ≤γ(ω,x)},
which makes explicit the conditioning on (ω, x). The optimum is now a decision function ξ⋆(ω, x), which can be determined by simulating from the joint distribution
pκ(ξ, ω, x) = eκa′(ω,x)ξ
C(ω, x) I{WTξ≤γ(ω,x)}
for some reference measure μ(ω, x) that ensures integrability and positivity. For large κ, plotting the ξ draws versus (ω, x) reveals the decision function. Here C(ω, x) = R
WTξ≤γ(ω,x) eκa′(ω,x)ξ dξ is typically not available in closed form. However, MCMC uses the conditionals
pκ(ξj|ξ(−j), ω, x) and pκ(ω, x|ξ),
and the former does not require the normalisation constant—it is just a truncated exponential with parameters depending on (ω, x). The latter,
pκ(ω, x|ξ) ∝ eκa′(ω,x)ξ
C(ω, x) IWTξ≤γ(ω,x)μ(ω, x),
does depend on C(ω, x). We can avoid direct evaluation by using the Metropolis algorithm and noting that, by the Clifford–Hammersley theorem, the ratio for any two candidate draws (ω, x)(g) and (ω, x)(g+1) can be computed as
pκ(ω(g), x(g)|ξ)
pκ(ω(g+1), x(g+1)|ξ) =
k
∏
j=1
pκ(ξj|ξ(−j), ω(g), x(g))
pκ(ξj|ξ(−j), ω(g+1), x(g+1))
27

in terms of the normalisation constants of the one-dimensional conditionals, which are known in closed form.
A.3 Slice Sampling
The intuition behind uniform slice sampling is simple. Suppose that we wish to sample from a possibly high dimensional un-normalised density π(x). We do this by sampling uniformly from the region that lies under the density plot of π. This idea is formalised by letting u be an auxiliary “slice-variable” and defining a joint distribution π(x, u) that is uniform on the set U = {(x, u) : 0 < u < π(x)}. Therefore, p(x, u) = 1/Z on U and zero otherwise. Here Z = R
X π(x)dx is the appropriate normalisation constant. The marginal is the desired normalised density as
π(x) =
Z
U π(x, u)du = (1/Z)
Z π(x)
0
dU = π(x)/Z .
We are then left with sampling from the uniform density on U. Neal [2000] provides a general slice algorithm. When it is straightforward to sample from the “slice” region defined by u, namely Su = {x : u < π(x)}, then a simple Gibbs sampler which iterates between drawing a uniform (u|x) ∼ Uni(0, π(x)) and (x|u) ∼ UniSu (x) provides a Markov chain with the appropriate joint distribution π(x, u) and hence marginal π(x)/Z. This is a special case of the so-called Swendsen–Wang algorithm [Edwards and S-
okal, 1988]. Suppose that we wish to sample from a density that is a product of functions: p(x) = π1(x) . . . πK(x)/ZK. Then we introduce a set of K auxiliary uniform slice variables (u1, . . . , uK) and a joint (x, u1, . . . , uK) that is uniform on the “slice” region:
Su = {x : ui < π(x) ∀i }
Then we sample in a Gibbs fashion, from the complete conditionals
(ui|x) ∼ Uni(0, πi(x)) for i = 1, . . . , K and (x|u) ∼ UniSu (x) .
In the case where the objective function of interest is additive and f (x) = ∑iK=1 fi(x), we have a more structured joint distribution given by
πκ(x) = exp (−κ f (x)) /Zκ = exp −κ
K
∑
i=1
fi(x)
!
/Zκ .
When constructing our Markov chain, we also wish to perform a sensitivity analysis to the cooling parameter κ. Therefore, we modify the standard uniform slice
28

sampler to the exponential slice sampler as follows. Define an auxiliary latent random variable (y|κ) ∼ Exp(κ) and a joint distribution:
πκ(x, y) ∝ p(y|κ)I (0 ≤ y ≤ f (x)) .
The auxiliary variable is exponential with mean 1/κ and hence p(y) = κe−κy. To check that this has the appropriate marginal distribution, we have
πκ(x, y) ∝ e−κyI (0 ≤ y ≤ f (x))
Integrating out y,
π(x) ∝
Z∞
f (x) κe−κydy = exp (−κ f (x))
as required. This leads to a simple Markov chain based on its complete conditionals and a Gibbs sampler of the form:
π(x|y) ∝ I ( f (x) ≥ y) = I x ∈ f −1(y)
π(y|x) ∝ e−κyI (y ≤ f (x)) .
For ease of implementation, we have to be able to compute the slice set and the set-theoretic inverse f −1. We also need to be able to sample from a truncated version of f and from a truncated exponential. There are a number of extensions of this algorithm. First, suppose that we wish to sample from πκ(x) = g(x) exp (−κ f (x)) /Zκ where g(x) and its truncated counterpart are straightforward to sample [Devroye, 1986]. Then we can slice the last term and consider the augmented joint distribution:
πκ(x, y) = g(x)e−κyI (0 ≤ y ≤ f (x)) .
In a similar fashion this leads to a simple Gibbs sampler with the only difference being that we have to draw from g(x) on the conditioned slice set given y. Second, by introducing multiple exponential slice variables, as in the SwendsenWang algorithm, we extend this to densities of the form:
πκ(x) = exp −κ
K
∑
i=1
fi(x)
!
/Zκ
The advantage of our approach is that it works seamlessly for large values of K. Hence we can deal efficiently with multi-modal functions.
29

Specifically, define multiple independent exponential slice variables y1, . . . , yK and a joint distribution:
π(x, y1, . . . , yk) = exp −κ
K
∑
i=1
yi
!K
∏
i=1
I (0 ≤ yi ≤ fi(x)) /Zκ.
For the p(x|y1, . . . , yK) conditional we now need to sample from
π(x|y) ∼ Uni
n
fi(x) ≥ yi ∀i = ∪iK=1 xi ∈ f −1
i (yi) }
Neal [2000] for a general approach for dealing with sets of this form. Finally, we can use the first coordinate of the draws from the joint distribution as a sample from the marginal dustribution πκ(x) of interest. So far we have con
structed a Markov chain that generates a sequence of draws x(n), y(n)
1 , . . . , y(n)
k
which converges in distribution as n → ∞ to a draw (x, y1, . . . , yk) ∼ π from the
joint distribution of interest. We write x(n), y(n)
1 , . . . , y(n)
k
=D (x, y1, . . . , yk) ∼ π.
Given standard properties of weak convergence (or convergence in distribution), we have weak convergence for functionals F : RK → Rp where p ≤ K and we
have
F x(n), y(n)
1 , . . . , y(n)
k
=D F(x, y1, . . . , yk) .
We can use this to estimate means Eπ (g(x)) of posterior functionals of interest by appealing to the ergodic theorem and using a delayed average mean estimator
1
N ∑nN=1 f (X(n)) along the dependent draws of the chain.
This approach can also be used to perform marginal density estimation. Suppose that we require an estimator πˆ (x) of the given F(x, y1, . . . , yk) = x. There
fore, we have x(n) =D x as n → ∞. We can average along the chain to obtain the histogram density estimator of the marginal distribution:
πˆ (x) = 1
N
N
n∑=1
δx(n) (x),
where δx(·) is the Dirac measure at point x.
30

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:03.032Z
- **Text Length:** 50702 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 30 of 30
