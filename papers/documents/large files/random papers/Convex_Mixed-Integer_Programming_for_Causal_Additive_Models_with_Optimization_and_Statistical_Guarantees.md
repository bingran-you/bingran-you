# PDF Document: Zhang et al. - 2025 - Convex Mixed-Integer Programming for Causal Additive Models with Optimization and Statistical Guaran.pdf

**File Path:** Zhang et al. - 2025 - Convex Mixed-Integer Programming for Causal Additive Models with Optimization and Statistical Guaran.pdf

**Processed Date:** 2026-02-10T18:15:42.774Z

**File Size:** 1000.16 KB

**Total Pages:** 51

**Extracted Pages:** 51

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3403

**Title:** Convex Mixed-Integer Programming for Causal Additive Models with Optimization and Statistical Guarantees

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

CONVEX MIXED-INTEGER PROGRAMMING FOR CAUSAL ADDITIVE
MODELS WITH OPTIMIZATION AND STATISTICAL GUARANTEES
XIAOZHU ZHANG 1, NIR KERET 2, ALI SHOJAIE 1,2, AND ARMEEN TAEB 1
Abstract. We study the problem of learning a directed acyclic graph from data generated according to an additive, non-linear structural equation model with Gaussian noise. We express each non-linear function through a basis expansion, and derive a maximum likelihood estimator with a group l0-regularization that penalizes the number of edges in the graph. The resulting estimator is formulated through a convex mixed-integer program, enabling the use of branch-and-bound methods to obtain a solution t-
hat is guaranteed to be accurate up to a pre-specified optimality gap. Our formulation can naturally encode background knowledge, such as the presence or absence of edges and partial order constraints among the variables. We establish consistency guarantees for our estimator in terms of graph recovery, even when the number of variables grows with the sample size. Additionally, by connecting the optimality guarantees with our statistical error bounds, we derive an early stopping criterion that allo-
ws terminating the branch-and-bound procedure while preserving consistency. Compared with existing approaches that either assume equal error variances, restrict to linear structural equation models, or rely on heuristic procedures, our method enjoys both optimization and statistical guarantees. Extensive simulations and real-data analysis show that the proposed method achieves markedly better graph recovery performance.
Keywords: causal discovery, directed acyclic graphs, discrete optimization, generalized additive models, l0-penalization, non-linear structural equation models
1. Introduction
Understanding causal relationships is arguably the ultimate aim of science. It enables us to predict how a system will behave under external interventions—a crucial step toward both understanding and engineering that system. Directed acyclic graphs (DAGs) offer a convenient and powerful framework for modeling causal relationships. Although in some cases prior knowledge and expert intuition help suggest likely causal models, in many cases, the underlying causal structure is unknown and must be infe-
rred from data. The task of inferring a DAG from observational or experimental data is known as causal discovery. The learned DAG then serves as a basis for making causal inferences. Many methods in the causal discovery literature assume that the relationships among the variables are linear (Chen et al., 2019, Chickering, 2002, Ghoshal and Honorio, 2019, Shimizu et al., 2006, Wang and Drton, 2020, Xu et al., 2025a); see also the survey paper (Glymour et al., 2019). Such methods are naturally limit-
ed by their inability to capture non-linear effects. This paper focuses on causal discovery when relationships among variables may be non-linear. Causal discovery in non-linear settings is commonly performed using a combinatorial search for a DAG structure, either via constraint-based or score-based methods. Constraint-based methods identify conditional independencies from the data. An example is the PC algorithm (Spirtes et al.,
1 Department of Statistics, University of Washington 2 Department of Biostatistics, University of Washington
E-mail addresses: xzzhang@uw.edu, nirkeret@uw.edu, ashojaie@uw.edu, ataeb@uw.edu.
1
arXiv:2511.21126v1 [stat.ME] 26 Nov 2025

2
2000) which initiates with a complete undirected graph and iteratively removes edges based on conditional independence assessments. However, conditional independence testing is known to be hard in non-linear settings (Shah and Peters, 2020); indeed, existing approaches require complicated tests (Chakraborty and Shojaie, 2022, Heinze-Deml et al., 2018, Strobl et al., 2019, Zhang et al., 2011), with low power and poor finite-sample performance. Additionally, constraint-based methods require a condit-
ion known as “strong-faithfulness”, which is known to be restrictive (Sondhi and Shojaie, 2019, Uhler et al., 2013). Score-based methods, which is the approach considered in this paper, often use penalized log-likelihood as a score function to seek the optimal graph within the entire space of DAGs. Unlike constraint-based methods, score-based approaches do not require the “strong-faithfulness” assumption. A prominent example of a score-based method in non-linear settings assumes a causal additive -
model (CAM) where the non-linear functions as well as the noise terms are of additive form (Bu ̈hlmann et al., 2014). CAMs, which build on generalized additive models in standard regression (Hastie and Tibshirani, 1986), are quite expressive and can automatically model non-linear relationships that linear models miss. Furthermore, since the functional forms are non-linear and the noise is additive, the underlying DAG structure is identifiable from observational data (Hoyer et al., 2008, Peters et -
al., 2014). With this powerful model and under Gaussian noise, Bu ̈hlmann et al. (2014) adopt a multistep approach to estimate a DAG: they obtain a topological ordering of the variables by maximizing a likelihood score over the space of permutations, and then perform variable selection with respect to the ordering. They prove that the first step of their algorithm is asymptotically consistent, provided that they can solve the optimization problem exactly. However, they deploy a heuristic greedy al-
gorithm (called IncEdge) with no optimality guarantees. Indeed, Gao et al. (2020) prove that the solution produced by the heuristic IncEdge algorithm in Bu ̈hlmann et al. (2014) can be inconsistent, highlighting a discrepancy between their optimization and statistical guarantees. To address this issue, for general non-linear models, Gao et al. (2020) propose a polynomial-time algorithm for estimating a topological ordering with statistical guarantees. Similar to B ̈uhlmann et al. (2014), in a seco-
nd step, they perform variable selection to obtain a DAG. Their approach relies critically on a condition on the residual variances. This assumption is closely related to assumptions made in prior work on linear models with equal noise variances (Chen et al., 2019, Ghoshal and Honorio, 2019, Peters and Bu ̈hlmann, 2013). As we illustrate next, when this condition is violated, the accuracy of the estimated graph deteriorates.
Example 1. Consider the following structural equation model (SEM):
(1)

   
   
X1 ∼ N (0, 0.52),
X2 = X12 − 0.25 + z2, z2 ∼ N (0, σ22),
X3 = 2X12 − 0.5 + h(X2) − E[h(X2)] + z3, z3 ∼ N (0, σ32),
X4 ∼ N (0, 0.52), X5 ∼ N (0, 0.52),
where X1, z2, z3, X4, X5 are mutually independent. We consider two scenarios: (i) equal noise variances, in which σ2 = σ3 = 0.5, ensuring that the conditions required for the approach in Gao et al. (2020) are satisfied; and (ii) unequal noise variances, in which σ2 = 0.1 and σ3 = 0.3, thereby violating those conditions. In each setting, we generate n samples according to the SEM using five different functions for h(x): h(x) = sin(x), h(x) = 0.5x3, h(x) = arctan(x2), h(x) = |x|, and h(x) = exp(x). -
We apply the procedures in Bu ̈hlmann et al. (2014) (denoted CAM-IncEdge) and Gao et al. (2020) (denoted NPVAR) across all the ten settings, and evaluate the accuracy of their graph estimates, over 100 independent trials. We also apply the mixed-integer programming method in Xu et al. (2025a) (denoted MIP-linear), which was designed for optimal causal discovery in linear settings, to highlight

3
the benefits of deploying non-linear models. In Figure 1, we display the results, in terms of the probability of exact recovery and structural Hamming distance (SHD), for varying sample size n. We observe that CAM-IncEdge behaves unstably across different functions h(x) under the equal-variance setting. Moreover, regardless of the sample size, both CAM-IncEdge and NPVAR cannot estimate the correct graph in the unequal-variance setting. In fact, as the sample size increases, their performance does -
not seem to improve. Our mixed-integer programming approach (MIP-nonlinear), which provides both optimization and statistical guarantees and accounts for nonlinearities, consistently outperforms the other methods across different choices of h(x) when the sample size n is sufficiently large. In particular, it is the only approach that successfully recovers the correct graph under the unequal-variance setting. Furthermore, as we see in Section 6.2, a larger number of variables can result in greater -
deterioration in the performance of CAM and NPVAR (under unequal variances).
There are score-based approaches that do not perform a discrete search over DAGs. Rather, they relax the discrete search space to a continuous search space, allowing gradient descent and other techniques from continuous optimization to be applied to causal discovery (Yu et al., 2019, Zheng et al., 2018). However, the search space of these problems is highly non-convex, so that the optimization procedure may become stuck in a local minima (Wei et al., 2020). Indeed, there are indications that the p-
erformance relies on an artifact of the synthetic evaluation data, and can be matched by a simple algorithm that directly exploits it (Reisach et al., 2021). Furthermore, Seng et al. (2022) found this reliance to be a vulnerability to adversarial attacks. For additional discussion on non-linear causal discovery, we refer the reader to surveys by Peters et al. (2017) and Glymour et al. (2019).
1.1. Our contributions. We propose a mixed-integer programming (MIP) formulation for scorebased causal discovery in causal additive models with Gaussian errors. Each non-linear function is parameterized as a linear combination of a fixed (possibly large) set of basis functions. The score function combines a convex negative log-likelihood with a sparsity-inducing regularizer that penalizes the number of edges in the DAG implied by the model parameters. This regularizer can be expressed as a group l-
0-penalty on the model parameters, where each group corresponds to the coefficients of a non-linear basis expansion. Our estimator minimizes the score subject to DAG constraints, enforced through a layered-network formulation involving both continuous and integer variables (Manzour et al., 2021). In our layered-network formulation, the group l0-penalty admits a linear representation in the integer variables and thus introduces no additional computational burden. Setting the basis functions to be l-
inear recovers the estimator of Xu et al. (2025a), which was developed for linear causal discovery. Incorporating non-linear basis functions allows our method to capture non-linear dependencies that the previous approach cannot. Our MIP framework is different from previous work (Bu ̈hlmann et al., 2014, Gao et al., 2020) in several key ways. First, it enables the use of branch-and-bound methods to obtain a solution that is guaranteed to be accurate up to a pre-specified optimality gap. Second, unl-
ike the method in Gao et al. (2020), it does not assume homoscedastic noise (i.e., equal noise variance). Third, it involves a joint optimization over all model parameters, including a sparse DAG structure via a group l0-regularization, as opposed to a two-step procedure that first estimates a topological ordering and then performs variable selection. Finally, unlike other methods, background knowledge—such as the presence or absence of certain edges and partial order constraints among variables—c-
an be organically incorporated as linear constraints in our optimization framework. We establish consistency guarantees for our estimator, allowing for the number of variables to grow with the sample size. Our analysis combines, and substantially extends, techniques from Bu ̈hlmann et al. (2014) and van de Geer and Bu ̈hlmann (2013). The approach in Bu ̈hlmann et al. (2014) addresses only the consistency of topological ordering and does not accommodate regularization, whereas the analysis in van d-
e Geer and Bu ̈hlmann (2013) is restricted to linear models and cannot handle

4
h(x) = sin(x) h(x) = 0.5x3 h(x) = arctan(x2) h(x) = x h(x) = exp(x)
Equal variances Unequal variances
500 1000 1500 2000 500 1000 1500 2000 500 1000 1500 2000 500 1000 1500 2000 500 1000 1500 2000
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
Sample size n
P (correct recovery)
h(x) = sin(x) h(x) = 0.5x3 h(x) = arctan(x2) h(x) = x h(x) = exp(x)
Equal variances Unequal variances
500 1000 1500 2000 500 1000 1500 2000 500 1000 1500 2000 500 1000 1500 2000 500 1000 1500 2000
0
2
4
6
8
0
2
4
6
8
Sample size n
SHD d
Method CAM−IncEdge NPVAR MIP−linear MIP−nonlinear (our approach)
Figure 1. Graph recovery performance of existing methods and our proposed approach. Top: the probability of recovering the true graph. Bottom: the structural Hamming distance (SHD) d between the estimated graph and the true graph, defined as the number of incorrectly recovered or missed edges. The function h(x) corresponds to the one used in model (1). Implementation details are provided in Appendix H.1.
non-linear settings. Our work integrates these threads to handle both challenges simultaneously. Furthermore, by connecting the optimality and statistical guarantees of our estimator, we present an early stopping criterion under which we can terminate the branch-and-bound procedure while retaining both optimality and statistical consistency guarantees. We develop several computational strategies to ensure that our approach scales to moderate-sized graphs (around 30 nodes) while retaining optimizat-
ion guarantees. First, we re-parameterize the negative-log likelihood function to be convex. This ensures that the resulting MIP is convex once the integer constraints are relaxed, making it amenable to tools from the integer programming literature that provide optimality guarantees. Second, we identify a sufficient statistic and reformulate the

5
optimization problem in terms of it, eliminating the need to iterate over the full dataset each time the objective is evaluated. Third, as discussed above, we apply early stopping without sacrificing statistical guarantees. Finally, we restrict the search space using constraints computed prior to optimization: (i) a super-structure constraint, where we use efficient neighborhood selection methods to estimate an undirected graphical model (Meier et al., 2009, Ravikumar et al., 2009, Voorman et al.,-
 2014) and restrict candidate edges to those in this graph; (ii) an edge-presence constraint, where we run an existing causal discovery method (e.g., B ̈uhlmann et al., 2014, Gao et al., 2020) on many bootstrap samples and retain edges that appear with high stability; and (iii) a partial-order constraint, where we enforce topological ordering relations that are stable across the bootstrap estimates. All of these constraints can be imposed as linear constraints in our optimization program. Finally,-
 we demonstrate our method using both synthetic and real data from a tightly controlled physical system. First, we show that the computational strategies introduced earlier substantially improve efficiency while largely preserving accuracy. Second, in synthetic experiments for non-linear models, we observe that our approach consistently outperforms existing methods, almost always achieving the smallest structural Hamming distance under both homoscedastic and heteroscedastic noise. This advantage i-
s observed across different true functions and choices of basis functions, and can be further enhanced by incorporating richer basis expansions when the underlying non-linear effects are more complex. Lastly, our method attains the most accurate recovery of an underlying DAG in a real physical system. The paper is organized as follows. Section 2 describes the problem setup; Section 3 presents our MIP formulation; Section 4 outlines computational strategies for accelerating the method; Section 5 pr-
ovides consistency guarantees; and Section 6 demonstrates the utility of our approach on synthetic and real data. Section 7 discusses future work.
1.2. Notation. Let V := {1, . . . , p} and E := V × V \ {(j, j) : j ∈ V}. A DAG G = (V, E) over p nodes consists of a node set V and a directed edge set E ⊆ E, such that the graph contains no directed cycles. Here, we use (k, j) ∈ E to indicate that k → j in the DAG G. The sparsity level of a DAG is defined as its number of edges: |G| := |E|. The smallest eigenvalue of a matrix A is
denoted as λmin(A). For any deterministic vector x ∈ Rn, we define its n-norm as ∥x∥n := ∥x∥2/√n. For a random variable X ∈ R with n independent realizations {x1, . . . , xn}, we define its empirical
n-norm as ∥X∥n := (n−1 Pn
i=1 x2
i )1/2. We use Xj, j = 1, . . . , p, to denote the random variable corresponding to the j-th node. Unless otherwise specified (e.g., in certain proofs), the notation Xj, εj, and their linear combinations refer to real-valued random variables, rather than vectors of their sample realizations. Lastly, for two sequences an and bn, we write an ≲ bn if there exists a constant C > 0 and n0 ∈ N such that an ≤ Cbn for all n ≥ n0. We write an ≍ bn if both an ≲ bn and an ≳ bn hold. We write an = o(bn) if an-
/bn → 0 as n → ∞.
2. Problem setup
2.1. Model. Consider an unknown oracle DAG G⋆ := (V, E⋆), where V = {1, . . . , p} is the node set and E⋆ ⊆ E is the true set of directed edges. The p nodes of G⋆ correspond to observed random variables X ∈ Rp. We assume for each node j ∈ V, the variable Xj ∈ R satisfies a structural equation model (Lauritzen, 1996):
Xj = fj(Xpa(j), εj), ε1, . . . , εp mutually independent,
where pa(j) := {k : (k, j) ∈ E⋆} denotes the set of parents for node j in the graph G⋆. The independence of the error terms ensure that there is no latent confounding. We primarily focus on the setting where fj(·) is a non-linear function. Importantly, we assume that fj(Xpa(j), εj) is additive in

6
each of its arguments, allowing the noise and the causal effects from each parental node to be decoupled from one another. This is known as a causal additive model (Bu ̈hlmann et al., 2014, Kertel and Klein, 2025, Maeda and Shimizu, 2021), which applies the principles of generalized additive models (Hastie and Tibshirani, 1986) to causal settings. We also model each noise variable as Gaussian εj ∼ N (0, σ⋆2
j) with non-degenerate variances σ⋆
j > 0 (j = 1, . . . , p). This specification enables us to formulate the distribution of X, which is crucial for establishing identifiability and a score-based estimator. We arrive at an additive structural equation model with Gaussian errors:
(2)
Xj =
X
k∈pa(j)
f⋆
kj (Xk) + εj ,
εj ∼ N (0, σ⋆2
j ), σ⋆
j > 0, E[f ⋆
kj(Xk)] = 0, ∀j, k ∈ V,
where f ⋆
kj(·) is a function from R → R. Note that f ⋆
kj(·) ̸≡ 0 if and only if k ∈ pa(j). Without loss of generality, each additive component f ⋆
kj(Xk) has mean zero; see Appendix A for additional discussion. We denote by P the joint distribution induced by the structural equation model in (2):
(X1, . . . , Xp) ∼ P.
When the functions f ⋆
kj are linear, the model (2) reduces to a linear Gaussian structural equation model. In that setting, identifiability is a challenge: multiple structural equation models may induce the same distribution X, making it impossible to distinguish the true underlying structural equation model based solely on P (van de Geer and B ̈uhlmann, 2013). However, when the functions f ⋆
kj are
non-linear and, notably, smooth enough, G⋆ is the only DAG that is compatible P :
Proposition 2 (Theorem 1 in Hoyer et al. (2008), Corollary 30 in Peters et al. (2014), Lemma 1 in Bu ̈hlmann et al. (2014)). Suppose all non-zero functions {f ⋆
kj}(k,j)∈E are non-linear and three times differentiable. Then any distribution Q that is generated by model (2) with a different DAG G′ ̸= G⋆ and non-constant, three times differentiable functions {f ′
kj} differs from P .
Proposition 2 reveals that the graph G⋆ is guaranteed to be identifiable from the distribution P when non-zero functions f ⋆
kj are assumed to be non-linear and three-times differentiable. We adopt this assumption throughout the paper. This identifiability enables and underpins our goal: to recover the true DAG G⋆.
2.2. The function class. We formalize the class of functions to which the functions {f ⋆
kj} belong. For any (k, j) ∈ E, we consider a set of basis functions {brkj(·)}r∞=1, where each function is three times differentiable and has infinite support. Let
Fkj :=
(
fkj : fkj (·) = β0kj +
∞
X
r=1
βrkj brkj (·), β0kj = −E
"∞ X
r=1
βrkj brkj (Xk)
#)
,
where the choice of β0kj ensures zero mean of fkj(Xk). We assume throughout that the non-linear true functions belong to these function classes: f ⋆
kj ∈ Fkj for all k and j. Hence,
Xj =
X
k∈pa(j)
β⋆
0kj +
∞
X
r=1
β⋆
rkj brkj (Xk) + εj .
In practice, estimators are fitted using a finite collection of basis functions. With n samples, we further consider the space
Fkj,n := {fkj,n ∈ Fkj : βrkj = 0, ∀r ≥ Rn + 1} ⊆ Fkj ,
where Rn is a truncation parameter that increases with n. In other words, estimation is carried out over a subset of the full function class, using only the first Rn basis functions, and increasing the

7
sample size expands the search space over which estimation is performed. In Section 5, in order to facilitate theoretical analysis, we focus on slightly more restricted function classes than Fkj and Fkj,n by imposing additional conditions on the basis functions and coefficients.
2.3. An intractable group l0-penalized maximum likelihood estimator. We assume we have n independent and identically distributed samples of X generated according to model (2) with f ⋆
kj ∈ Fkj .
Denote by θ the parameter with additive functions and error variances: θ := ({fkj}(k,j)∈E , {σj}j∈V). Accordingly, we define G(θ) := (V, E(θ)) as the graph induced by θ, where (k, j) ∈ E(θ) if and only if fkj ̸≡ 0. Then the negative log-likelihood of model (2) parameterized by θ is proportional to
(3) ln(θ) :=
p
X
j=1
log σ2
j+
p
X
j=1
Xj − P
k̸=j fkj (Xk)
2
n
σ2
j
.
The ∥ · ∥n norm is defined in Section 1.2. Naturally, it is desirable to identify a model that not only fits the data well, as measured by a low negative log-likelihood, but also exhibits structural simplicity through a sparse DAG. To this end, we penalize the negative log-likelihood ln(θ) by the number of edges in the DAG, resulting in an l0-penalized maximum likelihood estimator with the regularization parameter λn ≥ 0:
(4) argmin
θ∈Θ
ln(θ) + λ2
n · |G(θ)|.
Here Θ = {θ : fkj ∈ Fkj,n, σj > 0, ∀(k, j) ∈ E, G(θ) is a DAG} is a non-convex constraint set. An equivalent formulation of the model is via the parameter θ ̃ := ({βrkj}(k,j)∈E, r∈[Rn], {σj}j∈V), where
fkj (·) = β0kj + PRn
r=1 βrkjbrkj(·). Under this parameterization, the penalty term |G(θ)| is equivalent to a group l0-penalty P
(k,j)∈E 1{∥βkj ∥2 ̸= 0}, where βkj = (β1kj , . . . , βRnkj ) ∈ RRn . This leads to the following equivalent formulation of (4)
(5) θbn ∈ argmin
θ ̃∈  ̃Θ
ln(θ ̃) + λ2
n
X
(k,j)∈E
1 {∥βkj∥2 ̸= 0} .
Here, Θ ̃ = {θ ̃ : σj > 0, ∀k ∈ V, G(θ ̃) is a DAG}, where G(θ ̃) = (V, E(θ ̃)) with (k, j) ∈ E(θ ̃) if ∥βkj∥2 ̸= 0.
The optimization problem (4) can be re-written as argminθ∈Θ
Pp
j=1 log ωj + λ2n · |G(θ)|, where ωj = ∥Xj − P
k̸=j fkj(Xk)∥2n. Disregarding the penalty term, this formulation closely resembles the maximum likelihood estimator proposed by Bu ̈hlmann et al. (2014), which seeks the topological ordering that minimizes Pp
j=1 log ωj. However, due to the enormous permutation space, the search procedure in IncEdge is carried out heuristically, greedily adding the edge that yields the largest increase in log-likelihood at each step. Consequently, it offers no optimality guarantees. Furthermore, this maximum likelihood estimation step alone does not produce a sparse graph; an additional pruning step is required to obtain sparsity given an estimated ordering. Such a multi-step procedure can accumulate errors. In contras-
t, our proposed l0-penalized estimation process integrates variance estimation, permutation estimation, and graph recovery in a joint optimization procedure. We present methods for solving the optimal solution of (5), thereby improving the reliability of the recovered graph structure. The experiments in Section 6.2 empirically demonstrate the strong graph-recovery performance of our method compared with the method in Bu ̈hlmann et al. (2014). The l0-penalty has been widely used for causal discover-
y problem (Chickering, 2002, Hauser and Bu ̈hlmann, 2012, Silander and Myllym ̈aki, 2006, van de Geer and Bu ̈hlmann, 2013, Xu et al., 2025a). When multiple basis functions are used to represent a single causal effect between two nodes, the group l0-penalty arises as a natural extension. The group l0-penalty directly counts the number of nonzero

8
edges in the graph and thus encourages the minimal edge set needed to characterize the distribution of X. This would not be true when choosing a group l1-penalty: P
(k,j)∈E ∥βkj ∥2. Although an l1
penalty can be preferred in general for its convexity, in our setting, the constraint set Θ ̃ still remains non-convex. Furthermore, as we will see in Section 3.2, when formulating the constraint set Θ ̃ via integer programming, the group l0-penalty admits a linear representation in the integer variables, and can thus be incorporated naturally. Figure 2 presents the regularization paths for when the regularization term is a group l0-penalty—i.e., our formulation in (4)—and when the regularization -
term is swapped with a group l1-penalty. The figure highlights that group l0-penalty empirically achieves superior graph recovery.
0.0
0.2
0.4
0.6
0.8
1e−042e−043e−045e−047e−040.00110.00170.00250.00370.00550.00820.01230.01830.02730.04080.06080.09070.13530.2019 λ
d s∗
Penalty Group L0 Group L1
Figure 2. The performance of the group l0-estimator and group l1-estimator across a range of tuning parameter values λn. The performance is measured by d/s⋆, where d indicates the number of incorrectly recovered and missed edges, and s⋆ indicates the number of true edges. A smaller d/s⋆ indicates better accuracy. The implementation details are provided in Appendix H.2.
Finally, as stated, both the objective function and the constraint set of (4) are non-convex, rendering this optimization problem generally intractable. In the next section, we reformulate our problem using a convex MIP framework to enable efficient computation.
3. Convex Mixed Integer Programming Formulation
3.1. An efficient log-likelihood using a sufficient statistic. The negative log-likelihood function ln(θ), as formulated in (3), can be cumbersome and computationally intensive to evaluate. We provide two main reasons. First, ln(θ) is not necessarily a convex function of θ, which may hinder reaching the optimal solution and can substantially slow down standard optimization solvers, such as Gurobi. Second, the formulation (3) involves computing the empirical norm ∥ · ∥n, which necessitates iteratin-
g over the entire dataset each time the objective function is evaluated. We re-parameterize and reformulate the negative log-likelihood function as follows. Recall that for each fkj ∈ Fkj,n, the function fkj (·) = β0kj + PRn
r=1 βrkjbrkj(·) is a linear combination of Rn basis functions. Without loss of generality, we further assume that the same set of basis functions {br (·)}Rn
r=1 is used across all edges (k, j) ∈ E, so that each brkj(·) reduces to br(·). Let Z ∈ RpRn+p+1 be an extended basis random vector:
Z := X1, . . . , Xp, 1, b1(X1), . . . , b1(Xp), . . . , bRn (X1), . . . , bRn (Xp) ⊤ .

9
We then define a scaled coefficient matrix Γ ∈ Rp×(pRn+p+1) accordingly:
(6) Γ := diag(σ1, . . . , σp)−1 ·
h
Ip×p −B(0)
p×1 −B(1)
p×p · · · −B(Rn)
p×p
i
,
where Ip×p is an identity matrix, the sub-matrix B(r)
p×p, (r = 1, . . . , Rn) encapsulates the coefficients
associated with the sub-vector [br(X1), . . . , br(Xp)] in Z, and sub-matrix B(0)
p×1 encapsulates the in
tercept coefficients. Specifically, for r = 1, . . . , Rn, the j-th row and k-th column of B(r)
p×p is equal to
βrkj, with βrjj = 0 for all j ∈ V. The j-th row of B(0)
p×1 is equal to Pp
k=1 β0kj .
There exists a bijective mapping between the parameters Γ and θ ∈ Θ. Specifically, for any given Γ, the map to θ, θ = μ(Γ), is defined as fkj(·) = [PRn
r=1 Γj,pr+1+k · (E[br(Xk)] − br(·))] · Γ−1
jj and
σj = Γ−1
jj . Particularly, Pp
k=1 fkj (·) = −[Γj,p+1 + Pp
k=1
PRn
r=1 Γj,pr+1+k · br(·)] · Γ−1
jj . Under this mapping, we establish the following equivalence.
Proposition 3. Let {Z(i)}n
i=1 be n independent and identically distributed samples from the distri
bution of Z. Let Σbn := n−1 Pn
i=1 Z(i)Z(i)⊤ be the Gram matrix. Then, the negative log-likelihood function can be equivalently formulated as:
(7) ln(θ) = ln(μ(Γ)) :=
p
X
j=1
−2 log Γjj + tr(Γ⊤ΓΣbn).
The proof of Proposition 3 is given in Appendix B. First, we observe that the equivalent formulation in (7) is a convex function of Γ. Second, given the Gram matrix Σbn, the trace term tr(Γ⊤ΓΣbn) does not require iteration over all samples. It has computational complexity on the order of R2np3, which
is significantly smaller—when the sample size n is sufficiently large—than nRnp2, the complexity of
evaluating Pp
j=1 ∥Xj − P
k̸=j fkj (Xk)∥2n/σ2
j . The two observations above contribute to accelerating both the objective function evaluation and the optimization procedure itself. These observations are corroborated by Figure 3. Lastly, we point out that the result above can be straightforwardly extended to the case where basis functions vary across (k, j).
3.2. A convex mixed-integer constraint set. Handling the acyclicity constraint, that G(θ) forms a DAG, is a key computational challenge in the l0-penalized maximum likelihood estimator (4). Many integer programming approaches have been developed to encode this constraint (Gr ̈otschel et al., 1985, Manzour et al., 2021, Park and Klabjan, 2017). Among these formulations, we adopt the layered network formulation due to its demonstrated effectiveness in continuous-variable scenarios (Manzour et al., 2-
021). This approach has also been applied to a closely related problem under linear structural equation models (Xu et al., 2025a). We introduce two sets of decision variables: (i) A set of binary variables {gkj ∈ {0, 1}}(k,j)∈E , where gkj = 1 represents the presence of the edge from node k to j and gkj = 0 otherwise; (ii) A set of continuous variables {ψj ∈ [1, p]}j∈V, where ψj represents the layer value of each node. The layer values impose a topological ordering on the nodes, such that any ance-
stor node must have a strictly

10
1
10
100
300400500600700800900100011001200130014001500160020002500 Sample size n
Time
Specifying obejective functions
3
4
5
300400500600700800900100011001200130014001500160020002500 Sample size n
Time
The pilot MIP that finds big M
30
100
300
300400500600700800900100011001200130014001500160020002500 Sample size n
Time
The core MIP optimization
30
100
300
300400500600700800900100011001200130014001500160020002500 Sample size n
Time
Total running time
Formultaion Default Sufficient stat
Figure 3. The running time of different components in the MIP (8) solved using Gurobi. All running times are reported in seconds, and the vertical axis is displayed on a log scale. Top left: running time for specifying the objective function involving decision variables before optimization. Top right: running time for the pilot optimization without any constraints to determine the big M . Bottom left: running time for the core mixed-integer optimization that finds the solution. Bottom right: total-
 running time. Each box summarizes results from 30 independent trials. The implementation details are provided in Appendix H.3.
higher layer value than its descendants. Accordingly, we have:
min
Γ∈Rp×(pRn +p+1) gkj ∈{0,1}, ∀(k,j)∈E
ψ∈[1,p]p
p
X
j=1
−2 log Γjj + tr(Γ⊤ΓΣbn) + λ2
n·
X
(k,j)∈E
gkj
(8a)
(8b) s.t. − M gkj ≤ Γj,pr+1+k ≤ M gkj, ∀(k, j) ∈ E, r ∈ {1, . . . , Rn},
−M
p
X
k=1
gkj ≤ Γj,p+1 ≤ M
p
X
k=1
(8c) gkj, ∀j ∈ V,
(8d) 0 < Γjj ≤ M, ∀j ∈ [p],
(8e) 1 − p + pgkj ≤ ψj − ψk, ∀(k, j) ∈ E.
The constant M > 0 is a pre-specified upper bound that exceeds all possible values of |Γij| for i ∈ [p] and j ∈ [pRn + p + 1]. It is used to linearize non-linear terms, resulting in the big-M constraints given in (8b)–(8d). A smaller value of M can improve computational efficiency. In practice, one may

11
first solve the optimization problem without the big-M constraints to obtain a preliminary estimate Γb, and then set M = 2 maxi∈[p], j∈[pRn+p+1] |Γbij| (K ̈uc ̧u ̈kyavuz et al., 2023, Park and Klabjan, 2017, Xu et al., 2025a). Any feasible solution to the optimization problem (8) necessarily forms a DAG. We establish this claim as follows. First, if there exists a path from node k to j, then the layer value assigned to node j must be higher than that of node k. To see this, consider a path k → m →-
 · · · → j; by constraint (8e), the layer values satisfy ψj > ψm > ψk. This property automatically ensures that no cycle can exist between k and j, otherwise it would imply both ψk < ψj and ψk > ψj simultaneously. Second, if there is no edge between nodes k and j, which is encoded by gkj = 0, the corresponding coefficients βrkj must be zero for all r ∈ {1, . . . , Rn}; this is guaranteed by constraint (8b). Moreover,
if there are no parents for node j, which is encoded by Pp
k=1 gkj = 0, the corresponding intercept
coefficient Pp
k=1 β0kj must also be zero; this is guaranteed by constraint (8c). Conversely, when gkj = 1, encoding the presence of an edge between node k and j, the associated coefficients βrkj are generally not exactly zero since additional degrees of freedom contribute to a better model fit. Finally, the penalty term, which is the number of edges in the DAG, is naturally encoded as P
(k,j)∈E gkj .
We recommend choosing the tuning parameter λn that results in the smallest the Bayesian information criterion (BIC) score (Schwarz, 1978). Specifically, if Γb and gb are the estimates of (8), the BIC score is Pp
j=1 −2 log Γbjj + tr(bΓ⊤ΓbΣbn) + (p + P
(k,j)∈E gbkj ) log(n)/n. When the basis functions bjk(·) are linear, (8) reduces to the MIP proposed in Xu et al. (2025a). Thus, our proposed estimator is a generalization of the existing framework to non-linear settings.
3.3. An equal-variance formulation. When the noise variances are assumed to be equal, meaning that σ⋆
j ≡ σ⋆ > 0 for all j ∈ V, the optimization problem (8) can be substantially simplified. Let
B=
h
Ip×p −B(0)
p×1 −B(1)
p×p · · · −B(Rn)
p×p
i
∈ Rp×(pRn+p+1).
Then, we have B = σ⋆Γ under the equal-variance condition, and the objective function (8a) can be written as (σ⋆)−2 · [2pσ⋆2 log σ⋆ + tr(B⊤BΣbn) + λe2n · P
(k,j)∈E gkj ], where λe2n = λ2nσ⋆2. Minimizing this resulting objective function is equivalent to
min
B ∈Rp×(pRn +p+1) gkj ∈{0,1}, ∀(k,j)∈E
ψ∈[1,p]p
tr(B⊤BΣbn) + λe2
n·
X
(k,j)∈E
gkj
(9a)
(9b) s.t. − M gkj ≤ Bj,pr+1+k ≤ M gkj, ∀(k, j) ∈ E, r ∈ {1, . . . , Rn},
−M
p
X
k=1
gkj ≤ Bj,p+1 ≤ M
p
X
k=1
(9c) gkj, ∀j ∈ V,
(9d) 1 − p + pgkj ≤ ψj − ψk, ∀(k, j) ∈ E.
Suppose that Bb is the estimated coefficient matrix obtained from (9), then the variance can be estimated as σb2 = ∥BbZ∥2n. This formulation removes the logarithmic term and reduces the degrees of freedom by p compared with (8). Consequently, incorporating the equal-variance assumption can substantially improve computational efficiency. Similar to (8), in practice, we choose λen that yields the smallest the BIC score. Specifically, if Bb and gb are the estimates of (9), the BIC score is tr(Bb⊤BbΣb-
n) + P
(k,j)∈E gbkj · log(n)/n.
Since we do not usually know whether the data is generated according to SEM with equal variances or unequal variances, in practice, we implement both estimators (after choosing their regularization parameters via BIC scores), and choose the model with a smaller BIC score among the two.

12
4. Computational Speedups: early stopping, and incorporating partial order and edge structures
In this section, we introduce several strategies for improving the computational efficiency of the MIP (8).
4.1. Super-structure. For the DAG G⋆ = (V, E⋆), a super-structure E◦ ⊆ E is an edge set containing the true edge set E⋆: E⋆ ⊆ E◦. The super-structure E◦ may permit bidirectional edges and cycles, though self-loops are excluded. The idea of imposing a super-structure has been adopted by various related methods (Chickering, 2002, Ku ̈ ̧cu ̈kyavuz et al., 2023, Solus et al., 2021, Xu et al., 2025a). We impose this super-structure following the approach of Xu et al. (2025a): set gkj = 0 and Γj,pr+1+k -
= 0 for all (k, j) ∈ E \ E◦ and r ∈ {1, . . . , Rn}. That is, the search space of decision variables is restricted to edges within E◦. Enforcing a super-structure offers multiple advantages. First, in many applications, prior information about the presence or absence of specific edges is available, for example, from domain expertise or some widely accepted knowledge. Such information can be naturally incorporated into the superstructure. Second, as shown above, edges outside the super-structure E◦-
 are excluded from consideration. Consequently, when E◦ is sparse, the search space is greatly reduced, which in turn can substantially accelerate the optimization algorithm. Lastly, the existence of a sparse super-structure greatly facilitates the theoretical analysis of our proposed estimator (8). As we will see in Section 5, we assume access to a super-structure E◦ within which the number of parents for each node is uniformly bounded by a constant. In addition to leveraging prior knowledge when-
 available, we propose two approaches for estimating a super-structure. The goal here is to identify one that is as sparse as possible, while still capturing the true edge set E⋆. The first approach is neighborhood selection following the general idea in Meier et al. (2009), Voorman et al. (2014), where we perform variable selection in an additive model of Xj on the set of all other variables X−j = {Xk : k ̸= j}, via methods such as the group Lasso or the sparse additive model (Haris et al., 2022,-
 Ravikumar et al., 2009). The tuning parameter may be selected using cross-validation, but alternative strategies that incorporate additional information are also possible. In particular, one may first apply a baseline method (e.g., Bu ̈hlmann et al., 2014, Gao et al., 2020, Peters et al., 2014, Zheng et al., 2018), and use the cardinality of the resulting graph as a reference. The tuning parameter for our neighborhood selection can then be gradually increased until the selected super-structure re-
aches a size, for instance, no more than twice of this reference. Note that the neighborhood selection approach obtains an undirected graph, serving as an estimate for the true moral graph of G⋆. (The true moral graph is the undirected graph obtained from G⋆ by adding edges between any two nodes that share a common child and then making all edges undirected.) The second approach also leverages additional information from a related method. Specifically, we generate B bootstrap samples and apply the-
 baseline method to each sample. An edge is included in the super-structure if its selection proportion across the B samples exceeds a prescribed threshold. We denote this threshold by τ ◦. Similar to the tuning parameter in neighborhood selection, one can create a reference for the cardinality of the graph, and then gradually increase the selection proportion threshold τ ◦ until the size of the resulting super-structure is no larger than this reference. In practice, we use the union from both app-
roaches as E◦.
4.2. Partial order and stable edges. The topological ordering, or sometimes referred to as the permutation of nodes, is a key concept in DAG estimation. Several approaches focus on estimating the node ordering as the primary step, and then apply pruning procedures to obtain a fitted graph (Bu ̈hlmann et al., 2014, Chen et al., 2019, Gao et al., 2020, Peters et al., 2014). Although this is not the central idea pursued in our work, some prior information about the ordering of nodes in

13
E◦ can nevertheless be highly beneficial (Shojaie and Chen, 2024). If it is known a priori that node j cannot be a descendant of node k, then this relation can be encoded by imposing the constraint ψk < ψj in our MIP formulation (8). From here, we define the preliminary partial order set, as a collection of edges in E◦ whose ordering is predetermined: Ep := {(k, j) ∈ E◦ : ψk < ψj}. The constraint ψk < ψj excludes any path from node j to k. However, the presence of edge from k to j remains undeterm-
ined: either gkj = 0 or gkj = 1. If the presence of an edge from k to j is further known from prior knowledge, then the constraint gkj = 1 can be directly imposed. Accordingly, we define the preliminary stable set as the collection of edges in Ep that are predetermined to exist: Es := {(k, j) ∈ Ep : gkj = 1}. We view the stable set as a more “confident” set than the partial order set, since imposing it directly eliminates integer decision variables.
0
5
10
0.5 0.55 0.6 0.65 0.7 0.75 0.8 0.85 0.9 0.95 1
Partial set threshold τp
SHD d
Stable set threshold τs = 1
0
100
200
300
0.5 0.55 0.6 0.65 0.7 0.75 0.8 0.85 0.9 0.95 1
Partial set threshold τp
Running time
Stable set threshold τs = 1
0
5
10
0.5 0.55 0.6 0.65 0.7 0.75 0.8 0.85 0.9 0.95 1
Partial set threshold τp
SHD d
Stable set threshold τs = partial set threshold τp
0
100
200
300
0.5 0.55 0.6 0.65 0.7 0.75 0.8 0.85 0.9 0.95 1
Partial set threshold τp
Running time
Stable set threshold τs = partial set threshold τp
Figure 4. The performance of the estimator obtained from solving (8) across a range of threshold values. The metric d is the structural Hamming distance (SHD) which quantifies the number of incorrectly recovered and missed edges, with smaller values indicating better accuracy. All running times are reported in seconds. Top two panels: only τ p varies while τ s is fixed at 1. Bottom two panels: both thresholds vary simultaneously with τ p = τ s. Each box summarizes results from 30 independent trial-
s. The implementation details are provided in Appendix H.4.
Enforcing the stable set and partial order set can substantially reduce the search space, thereby improving optimization efficiency. When prior information is unavailable or insufficient, a preliminary partial order set and stable set can be constructed using bootstrap procedures. Similar to the second approach of the super-structure estimation (see Section 4.1), we apply a baseline method to B bootstrap samples, and an edge is included in the partial order set or stable set if its selection propo-
rtion exceeds a prescribed threshold. We denote the thresholds for the partial order set and stable set by τ p and τ s, respectively. To ensure the nesting property Es ⊆ Ep ⊆ E◦, the thresholds are chosen to satisfy τ ◦ ≤ τ p ≤ τ s. Finally, note that the selected partial order set and stable set may contain

14
cycles. To prevent this, edges are added sequentially in decreasing order of their selection proportion; any edge that would introduce a cycle with previously added edges is omitted. Figure 4 compares the performance of our proposed group l0-estimator, where partial order and stable sets under different threshold levels are imposed. As the threshold increases, the partial order and stable set shrink in size. With fewer constraints imposed, the estimated graph selects fewer incorrect edges but requ-
ires more time to fit. Thus, a balance between accuracy and efficiency is needed, and in practice a good default can be τ p = 0.95 and τ s = 1.
4.3. Early stopping. We employ a branch-and-bound procedure to solve the convex MIP (8). In this process, we iteratively update the lower and upper bounds of the objective function value. At the same time, we track the optimality gap of a solution, defined as the difference between these bounds for that solution. A solution is deemed optimal once its corresponding optimality gap reaches zero. At each iteration, we relax the integer constraints on g and solve the resulting, much simpler convex opti-
mization problem. The obtained optimal objective value then serves as a lower bound. If any variable g takes a fractional value in this solution, the problem is then branched into two subproblems by enforcing either a smaller or larger integer value for g. A feasible solution obtained through this process provides an upper bound.
5
10
15
0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1 Early stopping threshold τearly
SHD d
125
250
375
500
625
750
875
0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1 Early stopping threshold τearly
Running time
Figure 5. The performance of the estimator obtained from solving (8) across a range of τ early values. Left panel: structural Hamming distance (SHD) d, which quantifies the number of incorrectly recovered and missed edges, with smaller values indicating better accuracy. Right panel: total running time in seconds. Each box summarizes results from 30 independent trials. The implementation details are provided in Appendix H.5.
Rather than waiting for the lower and upper bounds to meet, the algorithm can be terminated early once the optimality gap falls below a specified threshold τ early. This practice is referred to as early stopping, and it is commonly used in practice to speed up the algorithm (Chen et al., 2023, Ku ̈ ̧cu ̈kyavuz et al., 2023, Xu et al., 2025a). One may wish that the sub-optimal solution obtained through early stopping, despite its non-zero optimality gap, still behaves similarly to the optimal solut-
ion. As shown in Figure 5, as τ early increases from zero, the performance of the estimator deteriorates only slightly, while the running time decreases substantially. Furthermore, it would be desirable if this sub-optimal solution achieved perfect recovery of the true DAG. In Section 5, we provide a theoretical justification for the early-stopping solution when the stopping threshold is chosen below a certain order.

15
5. Statistical Guarantees
We provide statistical guarantees for our estimator (8). Section 5.1 introduces the necessary notation as well as Assumptions 2–5, which are required for all subsequent theorems. In Section 5.2, we present Theorem 4, which establishes that our estimator achieves a correct permutation with high probability. Note that the additional Assumption 6 introduced in this section is also required for all theorems, although it is most naturally stated in the context of permutations. Section 5.3 presents Theo-
rem 5, which shows that our estimated variances converge to the true variances with high probability. This theorem requires no further assumptions. Finally, Section 5.4 introduces Theorem 6, which states that our estimator perfectly recovers the true graph with high probability, under two additional Assumptions 7 and 8. For each result, we also provide an analogous guarantee for the early-stopping suboptimal solution in addition to the optimal solution. The theoretical analysis in this section sub-
stantially extends those of Bu ̈hlmann et al. (2014) and van de Geer and Bu ̈hlmann (2013), as their results do not suffice for the guarantees we provide. Specifically, the analysis in Bu ̈hlmann et al. (2014) addresses only the consistency of the estimated topological ordering (and not the graph) and does not accommodate regularization; indeed, they view graph estimation as a second step after estimating an ordering among the variables, while we jointly estimate all the model parameters including-
 the DAG structure. On the other hand, the analysis of van de Geer and Bu ̈hlmann (2013) is restricted to linear models and cannot handle non-linear settings. Our analysis unifies and extends these two lines of work, and in particular establishes consistency in terms of graph recovery in non-linear settings.
5.1. Setup. Let s⋆ := |G⋆| denote the sparsity level of the true graph G⋆ = (V, E⋆). We consider the estimator (8) with two additional constraints. The first constraint is that the edges are restricted to be in a super-structure E◦, for which we assume that E⋆ ⊆ E◦. As described in Section 4.1, neighborhood selection methods estimate a moral graph, which can serve as the super-structure E◦. Existing theoretical results (e.g., B ̈uhlmann et al. (2014, Lemma 4)) guarantee that the estimated moral gr-
aph is a supergraph of the true moral graph. By interpreting an undirected edge as bidirected, the super-structure E◦ would satisfy the desired assumption. As a result, for simplicity, we assume access to such a super-structure in the remainder. Second, we add a constraint that the number of edges does not exceed sn, where conditions on sn are described later. Note that the parameter Γ in (8) is in bijective correspondence with the model parameterization θ ̃ = ({βrkj}(k,j)∈E,,r∈[Rn], {σj}j∈V) ∈ Θ -
̃ through the formulation in (6). Given the basis functions, it is also equivalent to the model parameter θ = ({fkj}(k,j)∈E , {σj}j∈V) ∈ Θ via the mapping μ.
For notational convenience, we denote the estimator by θb = ({βbrkj}(k,j)∈E◦, r∈[Rn], {σbj}j∈V), while
noting that all three parameterizations are mutually transformable. For the induced graph G(θb), an edge from node k to node j is present if PRn
r=1 |βrkj|2 ̸= 0, and absent otherwise. The sparsity of
the estimated graph sb := |G(θb)| is defined as the number of selected edges. We also denote their early-stopping counterparts as θbearly = ({βbearly
rkj }(k,j)∈E◦, r∈[Rn], {σbearly
j }j∈V) and sbearly. Throughout, we allow the number of nodes p to vary with the sample size n. A good choice is n ≳ (log p)2 for Theorem 4, and n ≳ p(log p)2 for Theorems 5 and 6.
Assumption 1 (super-structure sparsity). The super-structure E◦ is sparse: sj := |{k : (k, j) ∈ E◦}| ≤ K for each node j ∈ V.
Assumption 2 (model sparsity). The quantity sn that constrains the number of edges satisfies s⋆ ≤ sn.
Assumption 3 (Sobolev function class with bounded basis functions). For all function classes {Fkj}(k,j)∈E , the basis functions {brkj(·)}r∞=1 are orthogonal, satisfying E[brkj(Xk)br′kj(Xk)] = υ1(r =

16
r′) for some υ ∈ (0, 1], and uniformly bounded with supr |brkj(·)| ≤ 1. Furthermore, their coefficients
decay at a fast rate: P∞
r=1 |βrkj| · rη ≤ C and η > 1 for any (k, j) ∈ E.
Assumptions 1 and 2 impose sparsity at both the node and graph levels. Specifically, for each node j, the super-structure {k : (k, j) ∈ E◦} contains all true parents while including no more than K candidate parents per node. As a result, both the true graph and the estimated graph have at most K parents per node. This assumption resembles Condition (B2) in Bu ̈hlmann et al. (2014). Moreover, the size of the true graph, upper bounded by sn, may grow with the sample size. The added constraint sb ≤ s-
n ensures that the estimated graph adheres to the same sparsity level. Assumption 3 imposes additional structure on the function classes. In particular, it maps each function class Fkj into a Sobolev ellipsoid, allowing control over both the complexity of Fkj and the truncation error ∥fkj − β0kj − PRn
r=1 βrkjbrkj∥∞ for all fkj ∈ Fkj. This assumption was also adopted in Ravikumar et al. (2009). In Appendix C.1, we provide a choice of basis functions that satisfies the conditions in Assumption 3.
Additional notation for variances: Letg⃗ j := {k : gkj = 1, (k, j) ∈ E◦} be an index set of underlying parents of node j. Then we can define the additive function classes F ⊕g⃗ j := L
k∈g⃗ j Fkj and F ⊕g⃗ j
n := L
k∈g⃗ j Fkj,n. With the function Rj(f ;g⃗ j) := [Xj − P
k∈g⃗ j fkj(Xk)]2, the residual variances
after projecting Xj onto F ⊕g⃗ j and F ⊕g⃗ j
n are given by νjg(⃗ j ) := minf∈F⊕g⃗ j E [Rj (f ;g⃗ j )] and νn
j g(⃗ j) :=
minf ∈F⊕g⃗ j
n
E [Rj(f ;g⃗ j)] , respectively. Since each node has at most K parents, we can denote the max
imal gap between these variances as dn,p := maxj∈V maxg|⃗ j|∈{0,...,K} νjg(⃗ j ) − νn
j g(⃗ j) , the maximal value of νjg(⃗ j) as νp := maxj∈V E[X2
j ], and the minimal value as νp := minj∈V ming|⃗ j|=K νjg(⃗ j).
Assumption 4 (bounded noise variances). There exist a constant σ such that the noise variances are bounded: σ⋆2
j ≤ σ2 < ∞ for all j ∈ V. In addition, the variance νjg(⃗ j) is uniformly bounded below by a constant c > 0: νp ≥ c.
Assumption 4 ensures that νp ≤ c for some c < ∞, thereby facilitating the boundedness of the estimated variances. This condition is similar to Condition (A3) in Bu ̈hlmann et al. (2014). Intuitively, the estimated variance σb2
j should concentrate around νn
j (gbj), where gbj := {k : gbkj = 1, (k, j) ∈ E◦} denotes the estimated parent set on node j. Thus, the estimated variances are approximately bounded below and above by the smallest and largest possible values of νn
j (gbj), respectively. One may observe that νp and νp are appropriate bounds if νn
j g(⃗ j) does not deviate significantly from νjg(⃗ j), or equivalently dn,p = o(1). See Appendix C.2 for a detailed discussion on the control of ν ̄p and dn,p.
Assumption 5 (functional compatibility). Under the distribution P generated from (2), there exists φ2 > 0 such that for all γ ∈ Rp, minj∈V ∥ Pp
k=1 γkfkj (Xk)∥2
L2 ≥ φ2∥γ∥22 for all fkj ∈ Fkj with ∥fkj (Xk)∥L2 = 1.
Assumption 5 guarantees that the spaces F ⊕g⃗ j and F ⊕g⃗ j
n are closed under the L2 norm. This assumption is standard in high-dimensional additive models (Meier et al., 2009) and is directly adopted from Lemma 2 of Bu ̈hlmann et al. (2014).
5.2. Correct permutation. A permutation of the nodes is a mapping from an ordering to the nodes that respects the ancestor-descendant relationships in the graph. Specifically, for any permutation π of {1, . . . , p}, we say that π is consistent with a DAG if, whenever there is an edge from π(k) to π(j), it holds that k < j. In particular, the node π(1) has no parents. A given DAG may admit multiple such permutations. For example, if the edge set is {(1, 2), (2, 3), (2, 4)}, then both π1 = (1, 2, 3-
, 4) and π2 = (1, 2, 4, 3) are valid permutations. Let Π⋆ denote the set of all permutations consistent

17
with the true graph G⋆, referred to as the set of true permutations. Similarly, let Πb denote the set of permutations consistent with the estimated graph G(θb), referred to as the set of estimated permutations. We also denote its early-stopping counterpart as bΠearly. We aim to show that with high probability, the estimated permutations are correct. Let π−1 denote the inverse permutation that maps each node to its position in the ordering. For any permutation π, we defineg⃗(π) j := {k : π−1(k) < π-
−1(j), (k, j) ∈ E◦}, the set of parents of node j under permutation π. The residual variance after projecting Xj onto the function class F ⊕g⃗(π) j , denoted by νjg(⃗(π) j), quantifies the best possible fit of node j to a DAG with the permutation π. Particularly, when π ∈ Π⋆, we have νjg(⃗(π) j) = σ⋆2
j . When π ∈/ Π⋆, we define the separation between these residual variances and the true variances as:
(10) ξp := min
π∈/Π⋆ p−1
p
X
j=1
log νjg(⃗(π) j) − log σ⋆2
j.
Appealing to properties of the KL-divergence, one can show that ξp ≥ 0. A more detailed discussion of these results is provided in Appendix C.3.
Assumption 6 (non-negligible separation). When the permutation is incorrect, the separation between the best fitted residual variances and the true variances is non-negligible: λ2nsn + pplog p/n +
snR−2η
n = o(pξp).
Assumption 6 ensures the convergence rate of log σbj towards log σj dominates that of ξp towards zero, if the latter occurs. Some example choices for these quantities are: λ2n ≍ p(log p)1/2n−1/2sn−1 and sn ≍ Rn ≍ n1/5. In the extreme case where the number of nodes p is fixed, the assumption holds trivially. Generally speaking, when p varies with n, the assumption simplifies to plog p/n = o(ξp) in both the low-dimensional case where n ≍ p(log p)2 and the high-dimensional case where n ≍ (log p)2. A -
similar condition appears in Theorem 3 of Bu ̈hlmann et al. (2014), where it is also assumed that plog p/n = o(ξp).
Theorem 4. Under conditions in Proposition 2 and Assumptions 1–6, it holds, with probability at least 1 − 4/p, that:
(1) The estimated graph has correct permutations: Πb ⊆ Π⋆. (2) When the early-stopping threshold satisfies τ early = o(pξp), the resulting estimated graph has correct permutations: Πb early ⊆ Π⋆.
A proof is given in Appendix E. This proof generally follows the general idea of Theorem 1 in Bu ̈hlmann et al. (2014), but relies on the KL-divergence gap between any incorrect permutation distribution and the distribution induced by our estimator with regularization. Interestingly, even a sub-optimal solution obtained via early stopping can identify the correct permutations, provided that the optimality gap threshold is appropriately controlled. This result enables substantial computational savi-
ngs without compromising estimation accuracy.
5.3. Convergence of noise variances. We next show convergence of estimated noise variances {
σb2
j }j∈V to the true noise variances {σ⋆2
j }j∈V.
Theorem 5. Under conditions in Proposition 2 and Assumptions 1–6, it holds, with probability at
least 1 − 5/p,
p
X
j=1
σ⋆2
j − σb2
j
2 ≲ (p + snRn) log p/n + snR−2η
n + λ2
nsn.
When snR−2η
n + snRn log p/n ≲ p log p/n and with the choice λ2n ≍ p log p/(nsn),

18
(1) Pp
j=1 σ⋆2
j − σb2
j
2 ≲ λ2nsn.
(2) When the early-stopping threshold satisfies τ early ≲ λ2nsn + (p + snRn) log p/n + snR−2η
n and
τ early = o(pξp), we have Pp
j=1(σ⋆2
j − (σbearly
j )2)2 ≲ λ2nsn.
Theorem 5 is proved in Appendix F. The proof generally follows the strategy of Lemma 7.1 in van de Geer and Bu ̈hlmann (2013), but requires adaptations to accommodate the non-linearity. Some possible choices for the scaling quantities are: n ≍ p(log p)2, sn ≍ Rn ≍ n1/5. Since λ2nsn = o(1),
this result implies convergence of the estimated noise variances: |σb2
j − σ⋆2
j | = o(1) for all j ∈ V with high probability. This upper bound λ2nsn mirrors the result of linear structural equation models in van de Geer and B ̈uhlmann (2013). Moreover, as noted in their Remark 3.1, a natural normalization of the quantity Pp
j=1(σ⋆2
j − σb2
j )2 is to divide it by p. Under this perspective, one can instead choose
n ≍ (log p)2, sn ≍ n, and Rn ≍ n, and obtain a pooled variance convergence: p−1 Pp
j=1(σ⋆2
j − σb2
j )2 ≲ log p/n. This version accommodates a high-dimensional setting where n ≪ p. Finally, for variances convergence, the early-stopping threshold τ early may need to be much smaller than that required to ensure correct permutations in the worst case scenario. To see this, recall that we could choose o(pξp) = pplog p/n and λ2nsn + (p + snRn) log p/n + snR−2η
n ≍ p log p/n; then in order to ensure the correct permutation τ early is at most pplog p/n, whereas to ensure variance convergence it is at most p log p/n.
5.4. Graph recovery. We next show consistency in terms of graph recovery.
Assumption 7 (moderately increasing number of basis functions). The number of basis functions does not grow too fast: Rn ≲
pn/ log p.
Assumption 8 (beta-min condition). For any (k, j) ∈ E⋆, the true coefficients for the basis functions used in estimation are strong: min(k,j)∈E⋆
PRn
r=1 |β⋆
rkj|2 ≥ cuδn,p > 0 for some cu > 0, where (p + snRn) log p/n + snR−2η
n = o(δn,p).
Assumption 7 regulates the growth rate of the number of basis functions. However, Rn cannot be too small either, as this may hinder Assumptions 6 and 8, due to poor approximation from an insufficient number of basis functions. Assumption 8 requires a lower bound on the strength of true causal effects so that they can be captured by the estimated graph. In an example setting we may choose n ≍ p(log p)3, sn ≍ n1/5, Rn ≍ n1/5 log p, and min(k,j)∈E⋆
PRn
r=1 |β⋆
rkj |2 ≍ δn,p ≍ p(log p)2/n. A similar beta-min condition appears as Condition 3.5 in van de Geer and Bu ̈hlmann (2013) for linear structural equation models, which, without basis expansions, requires each nonzero β⋆
kj to be at least
of order pp log p/(snn). After translating their condition into our example setting, the two beta-min requirements align in order.
Theorem 6. Suppose conditions in Proposition 2 and Assumptions 1–8 are satisfied. Take λ2n ∈ [clδn,p, cuδn,p] where 0 < cl < cu. When n is sufficiently large, it holds, with probability at least 1 − 6/p, that:
(1) The estimated graph recovers the true structure: G(θb) = G⋆. (2) By taking an early-stopping threshold satisfying τ early = o(pξp ∧ δn,p), the resulting estimated graph recovers the true structure: G(θbearly) = G⋆.
The proof of Theorem 6 is provided in Appendix G. This proof proceeds by showing that the optimal objective value attained under the true graph G⋆ is strictly lower than that attained under any incorrect graphs. The tuning parameter λ2n cannot be too small so that the selection of redundant edges is prevented. The sample size should be sufficiently large in a sense that, there exists some N such that for all n > N , δn,p > (p + snRn) log p/n + snR−2η
n . The existence of such an N is

19
guaranteed by Assumption 8. Furthermore, the early-stopping sub-optimal solution can also achieve perfect graph recovery although the corresponding threshold may need to be even smaller than that for noise convergence.
6. Experiments
The code used to reproduce all experiments, along with the graph structures used in the analysis, is available in the GitHub repository1.
6.1. Simulation setup. We show the effectiveness of our method over ten graph structures. These structures are publicly available networks sourced from Manzour et al. (2021) and Xu et al. (2025a). They differ in scale, with the number of nodes p ranging from 6 to 25, and the number of true edges s⋆ varying between 6 and 68. For each graph structure, the node set V and true edge set E⋆ are pre-specified. One may freely choose the functional relationships {f ⋆
kj }(k,j)∈E and noise variances {σ⋆2
j }j∈V to construct the corresponding structural equation model. For each dataset, we generate n = 500 independent and identically distributed samples from the model (2). We mainly focus on the ability of our method to correctly recover the true DAG. To measure the closeness of an estimated graph Gb to the true graph G⋆, we use the structural Hamming distance (SHD) (Tsamardinos et al., 2006). Specifically, let Ab ∈ Rp×p and A⋆ ∈ Rp×p denote the estimated and true adjacency matrices, respectively, -
where the (k, j)-th entry equals 1 if there is an edge from node k to node j, and 0 otherwise. The SHD is then given by d := Pp
k=1
Pp
j=1 |Abkj − A⋆
kj|. We also record and compare the running time for each experiment. The MIP (8) is solved using the Gurobi 12.0.3 Optimizer via its Python interface. Notably, the Gurobi optimizer allows termination upon reaching a pre-specified time limit, while still returning a sub-optimal solution. This ensures that computation remains tractable without requiring indefinite runtimes.
6.2. Simulations: comparison to existing methods. We compare our proposed method with the following state-of-the-art approaches for learning DAG structures: the polynomial-time algorithm NPVAR for non-parametric DAG learning (Gao et al., 2020); the equal-variance algorithm EqVar using both top-down and bottom-up approaches to estimate the node ordering for linear models (Chen et al., 2019); the score-based method NoTears that learns non-linear SEMs by a continuous, and non-convex relaxation of acy-
clicity constraint (Zheng et al., 2020); the algorithm RESIT using nonparametric regression and subsequent independence tests (Peters et al., 2014); the coordinate descent algorithm CCDr using sparse regularization for linear models (Aragam and Zhou, 2015); and the heuristic algorithm CAM for causal additive models (Bu ̈hlmann et al., 2014). Among these algorithms, NPVAR and EqVar rely specifically on the assumption of homoscedasticity. We refer to our proposed algorithm as MIP, and in particular,-
 we implement two versions of MIP, each using a different superstructure. The first uses an oracle super-structure, the true moral graph, as adopted by Xu et al. (2025a). The second uses an estimated super-structure, obtained through the procedure described in Section 4.1. In this simulation, the true model is specified as follows. For all (k, j) ∈ E⋆, the true function is set to f ⋆
kj(x) = (sin(x) − E[sin(Xk)] + cos(x) − E[cos(Xk)])/2. Moreover, we consider both homoscedastic
and heteroscedastic variance schemes. In the homoscedastic setting, we fix σ⋆
j = 0.5 for all j ∈ V. In the heteroscedastic setting, each σ⋆
j is independently drawn from the interval [0.5, 1] using a transformed Beta distribution Beta(a0 = 1, μ0) · 0.5 + 0.5. Notably, this yields a uniform distribution
1https://github.com/Xiaozhu-Zhang1998/FSSS Reproducible Codes.

20
over [0.5, 1] when μ0 = 1. As μ0 increases, the sampled variances become increasingly concentrated towards 0.5, gradually approaching the homoscedastic regime. The same set of basis functions is used across all edges. Specifically, we use degree-two splines with two internal knots to construct basis functions. The partial order and stable sets are estimated using the bootstrap procedure outlined in Section 4.2. The CAM algorithm is applied to each bootstrap sample under the heteroscedastic setting-
, while NPVAR is used under homoscedasticity. The tuning parameter λ2n in our estimator (8) is chosen from a grid of values c ̄ · p(log p)2/n via a BIC score (see
Section 3); The parameter λ ̃2n in the equal-variance version of our estimator (9) is chosen in the same manner. We apply both estimators, and choose the one with smaller BIC score. We set the early stopping threshold as τ early = 0.1λ2n/ log p, so that τ early = o(δn,p) when λ2n ≍ δn,p ≍ p(log p)2/n. To ensure computational efficiency, each MIP is terminated if the runtime exceeds 60p seconds, in which case the sub-optimal solution at termination is returned.
Bowling. 9.11 Rain. 14.18 Insurance. 27.52
NPVAR
EqVar(TD)
EqVar(BU)
NoTears
RESIT
CCDr
CAM
MIP(super)
MIP(moral)
NPVAR
EqVar(TD)
EqVar(BU)
NoTears
RESIT
CCDr
CAM
MIP(super)
MIP(moral)
NPVAR
EqVar(TD)
EqVar(BU)
NoTears
RESIT
CCDr
CAM
MIP(super)
MIP(moral)
NPVAR
EqVar(TD)
EqVar(BU)
NoTears
RESIT
CCDr
CAM
MIP(super)
MIP(moral)
0
5
10
15
20
25
0
10
20
30
40
0
50
100
150
SHD d
Unequal variances μ0 = 1 Unequal variances μ0 = 2 Unequal variances μ0 = 3 Equal variances
Figure 6. Performance comparison between our method MIP and baseline methods. The true functions are f ⋆
kj(x) = (sin(x)−E[sin(Xk)]+cos(x)−E[cos(Xk)])/2, and splines are used as the basis functions. Each row corresponds to one graph structure, indicated by name.p.s⋆. The EqVar (TD) and EqVar (BU) refer to the top-down and bottom-up version of EqVar, respectively. The MIP (super) and MIP (moral) refer to the MIP using the estimated superstructure and the true moral graph, respectively. Different colors correspond to different variance schemes. Each box summarizes results from 30 independent trials.
Figure 6 shows the performance of each method in terms of graph recovery on three representative graph structures, with the number of nodes p ranging from 9 to 27 and the number of true edges s⋆ ranging from 11 to 52. Implementation details for the baseline methods are provided in Appendix H.6.1. We observe that both versions of the MIP algorithm consistently achieve the lowest

21
SHD across all four variance settings. Notably, the MIP variant using the estimated super-structure, MIP-super, performs comparably to the version that relies on the oracle moral graph, MIP-moral, suggesting the robustness of the super-structure estimation procedure. Complete results for all ten graph structures, together with running times and further discussion, are presented in H.6.1 and Tables 1–4. We also provide additional experiments with another choice of f ⋆
kj and radial basis functions in Appendix H.6.2 and Tables 5–6. These yield similar observations, demonstrating the improved performance of our approach relative to the others.
6.3. Simulations: role of number of basis functions Rn. A larger number of basis functions Rn improves the approximation accuracy of each function class Fkj by its truncated version Fkj,n. Theoretically, a non-parametric model with Rn ≍ nζ for some appropriately chosen ζ > 0 can substantially improve graph recovery and the convergence rate of variance estimators. We aim to demonstrate this through simulation.
10
20
30
40
5
10
15
20
25
30
Linear 0.10.130.17 0.20.230.27 0.30.330.37 0.40.430.47 0.50.53
Factor ζ
SHD d
Number of basis Rn
0.1
0.2
0.3
0.4
0.5
0.6
5
10
15
20
25
30
Linear 0.10.130.17 0.20.230.27 0.30.330.37 0.40.430.47 0.50.53
Factor ζ
Estimation error for σj
∗ 2's
Number of basis Rn
Figure 7. The performance of our method MIP with Rn = nζ basis functions across a range of ζ values. Left panel: the blue boxes represent the structural Hamming distance d, measured using its left vertical axis. Right panel: the blue boxes represent the values of
p−1 P
j (σb2
j − σ⋆2
j )2, measured using its left vertical axis. Each box summarizes results from 30 independent trials. For both panels, the red dots indicate the corresponding Rn values, measured using their right vertical axis. The “linear” label refers to MIP applied directly to the design matrix X without incorporating any additional basis functions.
In this simulation, we use a graph structure with p = 15 and s⋆ = 25. For all (k, j) ∈ E⋆, the true function is set as f ⋆
kj(x) = sin(20/x) − E[sin(20/Xk)], which exhibits highly oscillatory behavior near the origin and is particularly challenging to approximate using basis functions. The noise variances σ⋆
j alternate between 0.5 and 1 across nodes. We apply procedure (8) and use the same set of degreethree splines across all edges. For a given ζ > 0, we place ⌊nζ⌋ internal knots with evenly spaced percentiles, resulting in a total of Rn = 3 + ⌊nζ⌋ basis functions. We adopt the true moral graph as the super-structure; however, we do not use any partial order set, stable set, or early stopping. The tuning parameter λ2n is fixed at 0.01, and the MIP algorithm is terminated after 30 minutes. Figure 7 c-
ompares the performance of MIP in terms of both graph recovery and variance estimation accuracy across different values of ζ. As ζ increases, the number of basis functions Rn grows exponentially with the sample size, enabling the model to capture increasingly complex patterns in the true functions. Consequently, both the SHD and the variance estimation error p−1 P
j (σb2
j − σ⋆2
j )2 exhibit a decreasing trend. In contrast, when no basis functions are used, as indicated by the “linear” label, the model performs substantially worse in both aspects.

22
6.4. Real data. Causal chambers (Gamella et al., 2025) are computer-controlled devices that allow for manipulating and measuring variables from physical systems, providing a rich testbed for causal discovery algorithms. For the light tunnel chamber, we focus on the the ground truth involving eight variables, as shown in Figure 8a. Among all the causal edges, the only non-linear causal effect is
θ1−θ2 → Ie3, with the true function f ⋆
(θ1 −θ2 )→Ie3
(θ1 −θ2) = β0 +β1 cos2(θ1 −θ2) for some β0, β1 ∈ R. We
collect n = 3000 observational samples of the eight variables and apply both MIP and the baseline methods. The implementation details follow those described in Section 6.2. Figure 8c presents a comparison of their performances, where MIP achieves the most accurate estimation. In particular, as shown in Figure 8b, MIP successfully recovers the skeleton of the true graph, including the nonlinear effect. However, it incorrectly assigns the directions between (R, B, G) and Ce, which may stem from the -
non-identifiability of linear structural equation models.
R
G
B
Ce
Ie1
Ie2
Ie3
θ1 − θ2
(a) Ground truth DAG.
R
G
B
Ce
Ie1
Ie2
Ie3
θ1 − θ2
(b) DAG obtained by MIP.
Method SHD
NPVAR 14 EqVar (TD) 14 EqVar (BU) 14 NoTears 32 RESIT 34 CCDr 11 CAM 28 MIP (super) 6
(c) Performance comparison.
Figure 8. Learning causal models of the light tunnel chamber in Gamella et al. (2025). Left panel: the ground truth. Middle panel: the estimated graph by our method MIP, where red edges indicate incorrect discoveries. Right panel: performance comparison for all methods.
7. Discussion
We propose and theoretically analyze a convex MIP formulation for causal discovery in causal additive models. Unlike existing methods, our method enjoys both optimization and statistical guarantees: it can obtain a solution up to a pre-specified optimality gap, and we prove that it consistently estimates the underlying DAG, even as the number of nodes grows with the sample size. Our experiments on synthetic and real data highlight improvements over other approaches. Our work opens several avenues -
for future research. First, our causal additive model in (2) does not allow interactions among the variables; developing extensions of our framework to account for such interactions would be valuable. Second, our estimator relies on Gaussian errors; adapting it to non-Gaussian errors would broaden the utility of our framework. Third, in the linear causal discovery setting, Xu et al. (2025b) proposed a tailored coordinate descent method to approximately solve their MIP and proved its asymptotic opt-
imality. Applying a similar approach to causal additive models could be of practical interest. Finally, we relied on modern commercial solvers to solve our optimization problem; designing specialized branch-and-bound methods that exploit the problem structure may lead to substantial computational gains (Hazimeh et al., 2020).

23
Acknowledgments
We acknowledge funding from NSF grant DMS-2413074 (Xiaozhu Zhang and Armeen Taeb).
References
Aragam, B. and Zhou, Q. (2015), ‘Concave penalized estimation of sparse gaussian bayesian networks’, Journal of Machine Learning Research 16(1), 2273–2328.
Bennett, G. (1962), ‘Probability inequalities for the sum of independent random variables’, Journal of the American Statistical Association 57(297), 33–45.
Bu ̈hlmann, P., Peters, J. and Ernest, J. (2014), ‘CAM: Causal additive models, high-dimensional order search and penalized regression’, The Annals of Statistics 42(6), 2526 – 2556. Chakraborty, S. and Shojaie, A. (2022), ‘Nonparametric causal structure learning in high dimensions’, Entropy 24(3), 351.
Chen, W., Drton, M. and Wang, Y. S. (2019), ‘On causal discovery with an equal-variance assumption’, Biometrika 106(4), 973–980. Chen, Y., Ning, C. and Goulart, P. (2023), ‘A unified early termination technique for primal-dual algorithms in mixed integer conic programming’, IEEE Control Systems Letters 7, 2803–2808. Chickering, D. M. (2002), ‘Optimal structure identification with greedy search’, Journal of Machine Learning Research 3(Nov), 507–554. Efromovich, S. (1999), Nonparametric Curve Estima-
tion: Methods, Theory, and Applications, Springer. Gamella, J. L., Peters, J. and Bu ̈hlmann, P. (2025), ‘Causal chambers as a real-world physical testbed for ai methodology’, Nature Machine Intelligence 7(1), 107–118. Gao, M., Ding, Y. and Aragam, B. (2020), ‘A polynomial-time algorithm for learning nonparametric causal graphs’, Advances in Neural Information Processing Systems 33, 11599–11611.
Ghoshal, A. and Honorio, J. (2019), ‘Direct estimation of difference between structural equation models in high dimensions’, arXiv preprint arXiv:1906.12024 .
Glymour, C., Zhang, K. and Spirtes, P. (2019), ‘Review of causal discovery methods based on graphical models’, Frontiers in Genetics 10, 524.
Gr ̈otschel, M., J ̈unger, M. and Reinelt, G. (1985), ‘On the acyclic subgraph polytope’, Mathematical Programming 33(1), 28–42.
Haris, A., Simon, N. and Shojaie, A. (2022), ‘Generalized sparse additive models’, Journal of machine learning research 23(70), 1–56.
Hastie, T. and Tibshirani, R. (1986), ‘Generalized additive models’, Statistical Science 1(3), 297–310. Hauser, A. and Bu ̈hlmann, P. (2012), ‘Characterization and greedy learning of interventional markov equivalence classes of directed acyclic graphs’, Journal of Machine Learning Research 13(1), 24092464. Hazimeh, H., Mazumder, R. and Saab, A. (2020), ‘Sparse regression at scale: branch-and-bound rooted in first-order optimization’, Mathematical Programming 196, 347 – 388. Heinze-Deml, C., Peters-
, J. and Meinshausen, N. (2018), ‘Invariant causal prediction for nonlinear models’, Journal of Causal Inference 6(2), 20170016.
Hoyer, P., Janzing, D., Mooij, J. M., Peters, J. and Sch ̈olkopf, B. (2008), Nonlinear causal discovery with additive noise models, in ‘Advances in Neural Information Processing Systems’, Vol. 21. Kertel, M. and Klein, N. (2025), ‘Boosting causal additive models’, Journal of Machine Learning Research 26(169), 1–49. Ku ̈ ̧c ̈ukyavuz, S., Shojaie, A., Manzour, H., Wei, L. and Wu, H.-H. (2023), ‘Consistent second-order conic integer programming for learning bayesian networks’, Journal of Machine Lear-
ning Research 24(322), 1–38.

24
Lauritzen, S. L. (1996), Graphical Models, Oxford University Press, Oxford, United Kingdom. Maeda, T. N. and Shimizu, S. (2021), Causal additive models with unobserved variables, in ‘Uncertainty in Artificial Intelligence’, PMLR, pp. 97–106. Manzour, H., Ku ̈c ̧u ̈kyavuz, S., Wu, H.-H. and Shojaie, A. (2021), ‘Integer programming for learning directed acyclic graphs from continuous data’, INFORMS Journal on Optimization 3(1), 46–73. Meier, L., van de Geer, S. and Bu ̈hlmann, P. (2009), ‘High-dimen-
sional additive modeling’, The Annals of Statistics 37(6B), 3779 – 3821.
Park, Y. W. and Klabjan, D. (2017), ‘Bayesian network learning via topological order’, Journal of Machine Learning Research 18(99), 1–32.
Peters, J. and B ̈uhlmann, P. (2013), ‘Identifiability of Gaussian structural equation models with equal error variances’, Biometrika 101(1), 219–228. Peters, J., Janzing, D. and Sch ̈olkopf, B. (2017), Elements of Causal Inference: Foundations and Learning Algorithms, MIT press.
Peters, J., Mooij, J. M., Janzing, D. and Scho ̈lkopf, B. (2014), ‘Causal discovery with continuous additive noise models’, Journal of Machine Learning Research 15(1), 2009–2053. Ravikumar, P., Lafferty, J., Liu, H. and Wasserman, L. (2009), ‘Sparse additive models’, Journal of the Royal Statistical Society Series B: Statistical Methodology 71(5), 1009–1030.
Reisach, A., Seiler, C. and Weichwald, S. (2021), ‘Beware of the simulated DAG! causal discovery benchmarks may be easy to game’, Advances in Neural Information Processing Systems 34, 2777227784. Schwarz, G. (1978), ‘Estimating the dimension of a model’, The annals of statistics pp. 461–464. Seng, J., Zecevic ́, M., Dhami, D. S. and Kersting, K. (2022), ‘Tearing apart NOTEARS: Controlling the graph prediction via variance manipulation’, arXiv preprint arXiv:2206.07195 . Shah, R. D. and Peters, J. -
(2020), ‘The hardness of conditional independence testing and the generalised covariance measure’, The Annals of Statistics 48(3), 1514 – 1538. Shimizu, S., Hoyer, P. O., Hyv ̈arinen, A. and Kerminen, A. J. (2006), ‘A linear non-gaussian acyclic model for causal discovery’, Journal of Machine Learning Research 7, 2003–2030. Shojaie, A. and Chen, W. (2024), ‘Learning directed acyclic graphs from partial orderings’, arXiv preprint arXiv:2403.16031 .
Silander, T. and Myllym ̈aki, P. (2006), A simple approach for finding the globally optimal bayesian network structure, in ‘Proceedings of the Twenty-Second Conference on Uncertainty in Artificial Intelligence’, UAI’06, AUAI Press, Arlington, Virginia, USA, p. 445–452. Solus, L., Wang, Y. and Uhler, C. (2021), ‘Consistency guarantees for greedy permutation-based causal inference algorithms’, Biometrika 108(4), 795–814. Sondhi, A. and Shojaie, A. (2019), ‘The reduced PC-algorithm: Improved causal s-
tructure learning in large random networks’, Journal of Machine Learning Research 20(164), 1–31. Spirtes, P., Glymour, C. N. and Scheines, R. (2000), Causation, Prediction, and Search, MIT press. Strobl, E. V., Zhang, K. and Visweswaran, S. (2019), ‘Approximate kernel-based conditional independence tests for fast non-parametric causal discovery’, Journal of Causal Inference 7(1), 20180017. Tsamardinos, I., Brown, L. E. and Aliferis, C. F. (2006), ‘The max-min hill-climbing Bayesian network structu-
re learning algorithm’, Machine Learning 65(1), 31–78. Uhler, C., Raskutti, G., Bu ̈hlmann, P. and Yu, B. (2013), ‘Geometry of the faithfulness assumption in causal inference’, The Annals of Statistics 41(2), 436–463. van de Geer, S. and Bu ̈hlmann, P. (2013), ‘l0-penalized maximum likelihood for sparse directed acyclic graphs’, The Annals of Statistics 41(2), 536 – 567.
Van der Vaart, A. W. (2000), Asymptotic Statistics, Vol. 3, Cambridge university press.
Vershynin, R. (2018), High-dimensional Probability: An Introduction with Applications in Data Science, Vol. 47, Cambridge university press.

25
Voorman, A., Shojaie, A. and Witten, D. (2014), ‘Graph estimation with joint additive models’, Biometrika 101(1), 85–101.
Wang, Y. S. and Drton, M. (2020), ‘High-dimensional causal discovery under non-gaussianity’, Biometrika 107(1), 41–59.
Wei, D., Gao, T. and Yu, Y. (2020), ‘Dags with no fears: A closer look at continuous optimization for learning bayesian networks’, Advances in Neural Information Processing Systems 33, 3895–3906. Xu, T., K ̈uc ̧u ̈kyavuz, S., Shojaie, A. and Taeb, A. (2025b), ‘An asymptotically optimal coordinate descent algorithm for learning bayesian networks from gaussian models’, Accepted to Journal of Machine Learning Research abs/2408.11977.
Xu, T., Taeb, A., Ku ̈ ̧cu ̈kyavuz, S. and Shojaie, A. (2025a), ‘Integer programming for learning directed acyclic graphs from non-identifiable gaussian models’, Biometrika p. asaf032. Yu, Y., Chen, J., Gao, T. and Yu, M. (2019), DAG-GNN: DAG structure learning with graph neural networks, in ‘International Conference on Machine Learning’, PMLR, pp. 7154–7163. Zhang, K., Peters, J., Janzing, D. and Sch ̈olkopf, B. (2011), ‘Kernel-based conditional independence test and application in causal discove-
ry’, Proceedings of the Twenty-Seventh Conference on Uncertainty in Artificial Intelligence p. 804–813.
Zheng, X., Aragam, B., Ravikumar, P. K. and Xing, E. P. (2018), ‘DAGs with NO TEARS: continuous optimization for structure learning’, Advances in Neural Information Processing Systems 31, 94929503. Zheng, X., Dan, C., Aragam, B., Ravikumar, P. and Xing, E. (2020), Learning sparse nonparametric dags, in ‘International conference on artificial intelligence and statistics’, Pmlr, pp. 3414–3425.

26
Appendix A. Discussion of the zero-mean formulation
Model (2) assumes
Xj =
X
k∈pa(j)
f⋆
kj (Xk) + εj , εj ∼ N (0, σ⋆2
j ), E[f ⋆
kj(Xk)] = 0.
We show that the zero-mean requirement and the absence of intercepts are without loss of generality. Start from a general additive structural equation model on the same oracle DAG G⋆ = (V, E⋆), allowing intercepts and non-zero mean components,
(11) Xj = μj +
X
k∈pa(j)
f ̃kj(Xk) + ε ̃j, j ∈ V,
where the f ̃kj are arbitrary measurable functions and ε ̃1, . . . , ε ̃p are mutually independent Gaussians with variances σ⋆2
j but possibly non-zero means.
For each (k, j) ∈ E⋆ let mkj := E[f ̃kj(Xk)], and for each j let mj := E[ε ̃j]. Define
f⋆
kj (x) := f ̃kj(x) − mkj, εj := ε ̃j − mj, μ′
j := μj +
X
k∈pa(j)
mkj + mj .
Then (11) can be equivalently formulated as
Xj = μ′
j+
X
k∈pa(j)
f⋆
kj (Xk) + εj ,
with E[f ⋆
kj(Xk)] = 0 and εj ∼ N (0, σ⋆2
j ) by construction. Only constants were subtracted, so pa(j), G⋆, and the induced distribution of X are unchanged. Moreover, in this representation μ′
j = E[Xj]. Center the variables by Xc
j := Xj − μ′
j. By defining the translated functions
g⋆
kj (x) := f ⋆
kj (x + μ′
k ),
we obtain
Xc
j=
X
k∈pa(j)
g⋆
kj (Xc
k) + εj.
Each g⋆
kj is a translation of f ⋆
kj, hence it is non-linear and three-times differentiable whenever f ⋆
kj is. Therefore, the centered model still satisfies the standing assumptions of Proposition 2. Finally, by relabeling the centered variables Xc
j again as Xj, and the translated functions g⋆
kj again as f ⋆
kj , we recover exactly the normalized form (2). Thus the zero-mean convention is without loss of generality. Note that when pa(j) = ∅, centering removes the intercept entirely, so the equation for Xj has no intercept term. This matches the constraint (8c) in our MIP that forces a zero intercept whenever node j has no parents.
Appendix B. Proof of Proposition 3
Proof. Recall the definition
Z := X1, · · · , Xp, 1, b1(X1), · · · , b1(Xp), · · · , bRn (X1), · · · , bRn (Xp) ∈ RpRn+p+1.
Let Z(i) ∈ RpRn+p+1 denote the i-th sample of the random vector Z. Moreover, we defined the mapping θ = μ(Γ): for any Γ ∈ Rp×(pRn+p+1), Pp
k=1 fkj (·) = −[Γj,p+1 + Pp
k=1
PRn
r=1 Γj,pr+1+k ·

27
br(·)] · Γ−1
jj and σj = Γ−1
jj . Denote the j-th row of the matrix Γ as γj ∈ RpRn+p+1. Now replacing θ with μ(Γ) in ln(θ), we obtain
ln(μ(Γ)) =
p
X
j=1
log Γ−2
jj +
p
X
j=1
∥Xj + Γ−1
jj [Γj,p+1 + Pp
k=1
PRn
r=1 Γj,pr+1+kbr(·)]∥2n
Γ−2
jj
=
p
X
j=1
−2 log Γjj +
p
X
j=1
Γjj Xj + Γj,p+1 +
p
X
k=1
Rn
X
r=1
Γj,pr+1+k br (Xk )
2
n
=
p
X
j=1
−2 log Γjj + 1
n
p
X
j=1
n
X
i=1
(γ⊤
j Z(i))2 =
p
X
j=1
−2 log Γjj + tr(Γ⊤ΓΣbn),
where we defined Σbn = n−1 Pn
i=1 Z(i)Z(i)⊤. □
Appendix C. Discussion and implications of assumptions
C.1. Valid basis functions and Sobolev ellipsoid. Under Assumption 3, for each (k, j) ∈ E, the function classes Fkj can be rewritten as
(12) Fkj :=

    
    
fkj : fkj (·) = β0kj +
∞
X
r=1
βrkj brkj (·),
∞
X
r=1
|βrkj| · rη ≤ C, η > 1,
β0kj = −E
"∞ X
r=1
βrkj brkj (Xk)
#

    
    
.
Each basis function brkj(·) for r ≥ 1 satisfies the following: (i) it has infinite support; (ii) it is uniformly bounded with |brkj(·)| ≤ 1; (iii) it is orthogonal with E[brkj(Xk)br′kj(Xk)] = υ1(r = r′) for some υ ∈ (0, 1]; (iv) it is three times differentiable. One example construction of such basis functions, using the sine system (Efromovich, 1999), is given by
brkj(·) = sin (πrΦk(·)) , r ∈ {1, . . . , Rn},
where Φk(·) is the cumulative density function of Xk. Let U = Φk(Xk) ∼ Unif(0, 1), then we see that
E b2
rkj(Xk) = E sin2(πrΦk(Xk)) = E sin2(πrU ) = 1/2,
and for r ̸= r′,
E [brkj(Xk) · br′kj(Xk)] = E [sin(πrΦk(Xk)) · sin(πr′Φk(Xk))] = E [sin(πrU ) · sin(πr′U )] = 0.
The structure on coefficients, P∞
r=1 |βrkj| · rη ≤ C or equivalently P∞
r=0 |βrkj| · rη ≤ C, corresponds to a Sobolev ellipsoid. This structure concentrates most of the “mass” in the early coefficients, resulting in a fast decay. The complexity of each function class Fkj, as a result, can be effectively controlled.
Lemma 7. Under Assumption 3, the bracketing entropy of Fkj in (12) is bounded by:
log N[](ε, Fkj, ∥ · ∥∞) ≲ 1
ε
1/η
log(1/ε).

28
Proof. To simplify notation, we drop the subscripts k and j, and write F for the function class Fkj.
Define the ellipsoid set B = {β : P∞
r=0 |βr| · rη ≤ C} with η > 1. The idea is to represent the complexity of F via a mapping to the ellipsoid set B. First, we find the covering number of the set B. We define a truncated version Be = {β ∈ B : βr = 0 for all r > t}, where t is the smallest integer such that t−η ≤ ε. We note that Be is contained in a (t + 1)-dimensional l1-ball with radius C, so
N (ε, Be, ∥ · ∥1) ≤ 1 + 2C
ε
t+1
.
By selecting t = ⌈(1/ε)1/η⌉ − 1, we have
log N (ε, Be, ∥ · ∥1) ≲ 1
ε
1/η
log(1/ε).
Now let {β1, . . . , βN } be an ε-cover for Be w.r.t. ∥ · ∥1 norm. Then for any β ∈ B, we take the βi such that Pt
j=0 |βj − βi
j| ≤ ε, and then
∥β − βi∥1 =
t
X
j=0
|βj − βi
j| +
∞
X
j=t+1
|βj| ≤ ε + t−η
∞
X
j=t+1
|βr| · tη ≤ (C + 1)ε.
This implies that {β1, . . . , βN } is a (C + 1)ε-cover of B. Therefore,
log N (ε, B, ∥ · ∥1) = log N (ε/(C + 1), Be, ∥ · ∥1) ≲ 1
ε
1/η
log(1/ε).
Next, we find the covering number for the function class F . Note that for any f ∈ F, there exists some β ∈ B we use to construct f : f = β0 + P∞
r=1 βrbr. Let {β1, . . . , βN } be an ε-cover of B w.r.t.
∥ · ∥1 norm. Then there must exist i ∈ {1, . . . , N } such that ∥βi − β∥1 ≤ ε. Therefore,
f − βi
0−
∞
X
r=1
βi
r br
∞
≤ β0 − βi
0+
∞
X
r=1
(βr − βi
r )br
∞
≤
∞
X
r=0
βr − βi
r ≤ ε.
This implies that {βi0 + P∞
r=1 βri br}N
i=1 is an ε-cover of F w.r.t ∥ · ∥∞ norm. Hence,
log N (ε, F , ∥ · ∥∞) ≲ 1
ε
1/η
log(1/ε).
Finally, we arrive at the bracketing entropy of F :
log N[](ε, F , ∥ · ∥∞) ≤ log N (ε/2, F , ∥ · ∥∞) ≲ 1
ε
1/η
log(1/ε).
□
Recall the definition of truncated function class Fkj,n = {fkj ∈ Fkj : fkj,n = β0kj +PRn
r=1 βrkj brkj }.
For any f ∈ Fkj where fkj = β0kj + P∞
r=1 βrkjbrkj, the residual after projecting it onto Fkj,n is given
by Dkj = fkj − β0kj − PRn
r=1 βrkjbrkj. The Sobolev ellipsoid structure allows for effective control of the truncation error ∥Dkj∥∞.
Lemma 8. Under Assumption 3, the truncation error decreases with Rn: ∥Dkj∥∞ ≲ Rn−η.

29
Proof. We note that Dkj = fkj − β0kj − PRn
r=1 βrkj brkj = P∞
r=Rn+1 βrkj (brkj − μrkj ), where μrkj =
E[brkj(Xk)]. Therefore,
∥Dkj ∥∞ =
∞
X
r=Rn +1
βrkj (brkj − μrkj )
∞
≤2
∞
X
r=Rn +1
|βrkj | = 2R−η
n
∞
X
r=Rn +1
|βrkj | · Rη
n ≤ 2CR−η
n.
□
Finally, we show that the function classes are uniformly bounded.
Lemma 9. Under Assumption 3, the functions in Fkj are uniformly bounded:
sup
(k,j)∈E
sup
fkj ∈Fkj
∥fkj(·)∥∞ ≤ 2C,
where C is the constant appeared in Assumption 3.
Proof. For any fkj ∈ Fkj, ∀(k, j) ∈ E, we have
∥fkj (x)∥∞ = β0kj +
∞
X
r=1
βrkj brkj (x)
∞
≤
∞
X
r=0
|βrkj | ≤ |β0kj | +
∞
X
r=1
|βrkj | · rη ≤ |β0kj | + C,
where
β0kj = −E
"∞ X
r=1
βrkj brkj (Xk)
#
≤
∞
X
r=1
|βrkj | ≤
∞
X
r=1
|βrkj | · rη ≤ C.
The result hence follows. □
C.2. More on boundedness of variances. Recall that in Section 5, we defined the maximal variances νp := maxj∈V E[X2
j ], and the minimal variance νp := minj∈V ming|⃗ j|=K νjg(⃗ j). First, we point out that for any noise variance σ⋆2
j , there existsg⃗ j such that νjg(⃗ j) = σ⋆2
j ; see Lemma 12 for a proof. Next, we see that for any νjg(⃗ j),
νp = min
j∈V min
g|⃗ j |∈{0,...,K}
νjg(⃗ j) ≤ νjg(⃗ j) ≤ max
j∈V max
g|⃗ j |∈{0,...,K}
= νp.
The conditions in Assumption 4 ensure uniform boundedness of these quantities.
Lemma 10. Denote σ = minj∈V σ⋆
j . Under Assumptions 3 and 4, the variances are uniformly bounded: c ≤ νp ≤ σ2 ≤ σ2 ≤ νp ≤ c for some c > 0 and c < ∞.
Proof. It suffices to show that there exists c < ∞ such that νp ≤ c. Note that
νp = max
j∈V E X2
j = max
j∈V E


2


X
k∈pa(j)
f⋆
kj (Xk)


2
+ 2ε2
j


 ≤ 8C2K2 + 2σ2 < ∞.
The last inequality follows from the fact that |pa(j)| ≤ K, and Lemma 9.
□

30
We also defined the gap dn,p := maxj∈V maxg|⃗ j|∈{0,...,K} νjg(⃗ j ) − νn
j g(⃗ j) . As n is sufficiently
large, the function class F ⊕g⃗ j
n is expected to closely approximate its non-truncated counterpart F ⊕g⃗ j . Particularly, when n = ∞, the function class F ⊕g⃗ j
n and F ⊕g⃗ j
n coincide exactly for anyg⃗ j, and thus νn
j g(⃗ j) = νjg(⃗ j). This observation motivates the following result: dn,p = o(1).
Lemma 11. Under Assumptions 3 and 4, the gap between νjg(⃗ j) and νn
j g(⃗ j) is sufficiently small for anyg⃗ j: dn,p = o(1).
Proof. We denote
f ̄ ∈ argmin
f ∈F ⊕g⃗ j
E[Xj −
X
k∈g⃗ j
fkj (Xk)]2,
and let f ̄(n) ∈ F ⊕g⃗ j
n be the truncation of f ̄ to the first Rn basis functions. Note that for anyg⃗ j and any j ∈ V,
νn
j g(⃗ j) − νjg(⃗ j) ≤ E

Xj −
X
k∈g⃗ j
f ̄(n)
kj (Xj )


2
−E

Xj −
X
k∈g⃗ j
f ̄kj (Xj )


2
=E

Xj −
X
k∈g⃗ j
f ̄kj (Xj ) +
X
k∈g⃗ j
f ̄kj (Xj ) −
X
k∈g⃗ j
f ̄(n)
kj (Xj )


2
−E

Xj −
X
k∈g⃗ j
f ̄kj (Xj )


2
=2·E



Xj −
X
k∈g⃗ j
f ̄kj (Xj )




X
k∈g⃗ j
f ̄kj (Xj ) −
X
k∈g⃗ j
f ̄(n)
kj (Xj )



+E


X
k∈g⃗ j
f ̄kj (Xj ) −
X
k∈g⃗ j
f ̄(n)
kj (Xj )


2
≤ 2 · (νjg(⃗ j ))1/2 · ∆1/2
f + ∆f ,
where ∆f = E
h P
k∈g⃗ j
f ̄kj(Xj) − P
k∈g⃗ j
f ̄(n)
kj (Xj )
i2
. By Lemma 10, we have (νjg(⃗ j))1/2 ≤ c ̄1/2.
Moreover, letting μrkj = E[brkj(Xk)] ≤ 1, we have
∆f ≤g|⃗ j|
X
k∈g⃗ j
E
hf ̄kj (Xj ) − f ̄(n)
kj (Xj )
i2
≤K
X
k∈g⃗ j
∞
X
r=Rn +1
∞
X
r′ =Rn +1
βrkj βr′kj E [(brkj (Xk) − μrkj ) (br′kj (Xk) − μr′kj )]
≤ K2υ
∞
X
r=Rn +1
β2
rkj + K2
"∞ X
r=Rn +1
|βrkj μrkj |
#2
≤ K2υR−2η
n
"∞ X
r=Rn +1
β2
rkj r2η
#
+ K2R−2η
n
"∞ X
r=Rn +1
β2
rkj r2η
#
≤ (1 + υ)K2C2R−2η
n,
where the last inequality follows from Assumption 3 where P∞
r=Rn+1 β2
rkj · r2η ≤ [P∞
r=1 |βrkj | · rη]2 ≤ C2. As a result, we have
0 ≤ νn
j g(⃗ j ) − νjg(⃗ j ) ≤ 2c ̄1/2(1 + υ)1/2KCR−η
n + (1 + υ)K2C2R−2η
n.
The result hence follows.
□

31
C.3. More on permutations and the likelihood. Recall that for any permutation π, we define the parents of node j asg⃗(π) j = {k : π−1(k) < π−1(j), (k, j) ∈ E◦}, and the corresponding log-likelihood
log p(X; θ, π) := Pp
j=1 log pj(X; θ, π), where
log pj(X; θ, π) := − 1
2 log(2π) − log σj −
h
Xj − P
k∈g⃗(π) j fkj (Xk)
i2
2σ2
j
.
Let θ⋆ := ({f ⋆
kj }(k,j)∈E⋆ , {σ⋆
j }j∈V), and consider the expected negative log-likelihood:
mθin Eθ⋆ [− log p(X; θ, π)] =
p
X
j=1
mθin Eθ⋆ [− log pj(X; θ, π)] .
In order to find θπ := argminθ Eθ⋆ [− log p(X; θ, π)], we analyze the minimum of each component individually. For each j, we observe that
argmin
σj >0
Eθ⋆ [− log pj(X; θ, π)] = Eθ⋆

 

Xj −
X
k∈g⃗(π) j
fkj (Xk)


2


 = Eθ⋆ [Rj(f ;g⃗(π) j)] .
Hence,
mθin Eθ⋆ [− log pj(X; θ, π)] = C + 1
2 min
f ∈F ⊕g⃗(π) j
log Eθ⋆ [Rj(f ;g⃗(π) j)] = C + 1
2 log νjg(⃗(π) j),
where C = log(2π)/2 + 1/2.
Lemma 12. For any permutation π, we have Pp
j=1 log νjg(⃗(π) j) ≥ Pp
j=1 log σ⋆2
j . Particularly, when π ∈ Π⋆, νjg(⃗(π) j) = σ⋆2
j for any j ∈ V.
Proof. First, we show that when π ∈ Π⋆, {f ⋆
kj}k∈V ∈ argminf Eθ⋆ [Rj(f ;g⃗(π) j)] and νjg(⃗(π) j) = σ⋆2
j. To see this, for any {f 0
kj }k∈V, we have
Eθ⋆ Rj (f 0;g⃗(π) j ) = Eθ⋆

ε2
j+
X
k∈g⃗(π) j
f⋆
kj (Xk) − f 0
kj (Xk) 2

 ≥ σ⋆2
j,
and the equality holds when f ⋆
kj = f 0
kj. The desired result thus follows. In addition, the result implies that, when π ∈ Π⋆: (i) θπ = θ⋆; (ii) Eθ⋆ [− log pj(X; θ⋆, π)] = C + log(σ⋆
j ).
Next, we show that Pp
j=1 log νjg(⃗(π) j) ≥ Pp
j=1 log σ⋆2
j for any permutation π. Note that
1 2
p
X
j=1
log νjg(⃗(π) j) − 1
2
p
X
j=1
log(σ⋆2
j ) = Eθ⋆ [− log p(X; θπ, π)] − Eθ⋆ [− log p(X; θ⋆, π)] ≥ 0.
The last inequality holds since the KL-divergence is non-negative. The result hence follows. □
Lemma 12 shows that when π ∈ Π⋆, the residual variance νjg(⃗(π) j) arrives at its best: the irreducible variance. Moreover, the separation quantity ξp defined in (10) is non-negative. We now investigate into a more stringent argument such that ξp > 0.
Lemma 13. Under Assumption 5, the separation is strictly positive: ξp > 0.

32
Proof. For any π, defineg⃗(π ◦)j := {k : π−1(k) < π−1(j)}. We haveg⃗(π) j ⊆g⃗(π ◦)j. Then when π ∈/ Π⋆,
ξp = min
π∈/Π⋆ p−1
p
X
j=1
log νjg(⃗(π) j) − log σ⋆2
j ≥ min
π∈/Π⋆ p−1
p
X
j=1
log νjg(⃗(π ◦)j) − log σ⋆2
j > 0.
The last strict inequality follows from Lemma 3 in Bu ̈hlmann et al. (2014). □
Appendix D. Preliminarily results
D.1. Events that hold with high probability. In this section, εj ∈ Rn, Xj ∈ Rn and D⋆
kj ∈
Rn represent vectors containing n independent samples, and X(i) ∈ Rp represents the i-th sample containing p variables.
Lemma 14. Suppose εj ∼ N (0, σ2
j ), j = 1, . . . , p are independently distributed. Define the event
T1 :=
n
∥εj ∥2
n − σ⋆2
j≲
plog p/n, ∀j ∈ [p]
o
.
Then P(T1) ≥ 1 − 2/p.
Proof. By the Bernstein’s inequality (Bennett, 1962) we have P(T1,j) ≥ 1 − 2e−t/p, where
T1,j :=



∥εj ∥2
n − σ⋆2
j
σ⋆2
j
≤ 2p(t + log p)/n + 2(t + log p)/n



By letting t = log p and using the fact T1 = ∩p
j=1T1,j, the result follows. □
Let P be the true distributions induced by model (2), and Pn the empirical distribution. We denote dx := (dx1, . . . , dxp).
Lemma 15. Define μkk′j(f )(x1, . . . , xp) := fkj(xk)fk′j(xk′ ). Let the combined function class for node j be F ∪
j := Sp
k=1
Sp
k′=1{μkk′j (fkj , fk′j ) : fkj ∈ Fkj , fk′j ∈ Fk′j }. Define the function gj (x(1), . . . , x(n)) :=
supf ∈F ∪
j
R f (x)(Pn − P )(dx) , and the event
T2 :=
(
gj (X(1), . . . , X(n)) ≲
r log p
n , ∀j ∈ [p]
)
.
Then P(T2) ≥ 1 − 1/p.
Proof. Note that each function class Fkj has finite bracketing entropy by Lemma 7. Moreover, each fkj ∈ Fkj is uniformly bounded with |fkj| ≤ 2C by Lemma 9. Now for the function class F ∪
j , its bracketing entropy is given by
log N[](δ, F ∪
j , ∥ · ∥∞) ≤ log(p2 · mk,ajx N 2
[] (δ/(4C), Fkj, ∥ · ∥∞)) ≲ log p + (1/δ)1/η log(1/δ).
When δ ≍ 1, the corresponding bracketing integral is given by
J[](δ, F ∪
j , ∥ · ∥∞) =
Zδ
0
q
log N[](u, F ∪
j , ∥ · ∥∞)du ≲
plog p.

33
Hence, from Corollary 19.35 of Van der Vaart (2000), with F (x) = supf∈F∪
j |f (x)| ≍ 1,
E
h
gj (X(1), . . . , X(n))
i
≲
J[](∥F ∥∞, F ∪
j , ∥ · ∥∞)
√n ≲
r log p
n.
Note that the function gj(x(1), . . . , x(n)) satisfies the bounded difference property with bound 8C2/n for all n samples. To see this, note that for any i = 1, . . . , n,
gj (x(1), . . . , x(i), . . . , x(n)) − gj (x(1), . . . , x(i)′ , . . . , x(n))
≤ sup
f ∈F ∪
j
1
n f (x(i)) − 1
n E[f (X(i))] − 1
n f (x(i)′ ) + 1
n E[f (X(i))] ≤ 1
n sup
f ∈F ∪
j
f (xi) − f (x(i)′ ) ≤ 8C2
n.
Then by the McDiarmid’s inequality, we have P(T2,j) ≥ 1 − e−t/p, where
T2,j :=
n
gj (X(1), . . . , X(n)) ≤ E
h
gj (X(1), . . . , X(n))
i
+ C2p32(t + log p)/n
o
.
By letting t = log p and using the fact that T2 = ∩p
j=1T2,j, the result follows. □
Lemma 16. Let D⋆
kj = P∞
r=Rn+1 β⋆
rkjbrkj(Xk). Define the event
T3 :=



n−1 X
k∈pa(j)
ε⊤
j D⋆
kj ≲ sj R−2η
n + sj log p/n, ∀j ∈ [p]



.
Then P(T3) ≥ 1 − 1/p.
Proof. First consider the set
T3,j :=



n−1 X
k∈pa(j)
ε⊤
j D⋆
kj ≲ sj R−2η
n + sj(t + log p)/n



.
Since εj and D⋆
kj are independent for all k ∈ pa(j), we focus on the conditional event T3,j | D⋆
kj .
When D⋆
kj is fixed, by Lemma 7.4 of van de Geer and Bu ̈hlmann (2013), with probability at least 1 − e−t/p,
(nσ⋆
j )−1 sup
∥D⋆
kj ∥n≤1
|ε⊤
j D⋆
kj| ≤ p2/n + p2(t + log p)/n.
Consequently, for some δ1 ∈ (0, 1).
2(nσ⋆
j )−1 ε⊤
j D⋆
kj = 2(nσ⋆
j )−1 ε⊤
j D⋆
kj · ∥D⋆
kj ∥n
∥D⋆
kj ∥n
≤ 2 p2/n + p2(t + log p)/n · ∥D⋆
kj ∥n
≤ δ1∥Dkj ∥2
n + 4/(nδ1) + 4(t + log p)/(nδ1) ≲ R−2η
n + (t + log p)/n.
The last inequality follows from Lemma 8. This implies that P(T3,j | D⋆
kj) ≥ 1 − e−t/p, and conse
quently P(T3,j) ≥ 1 − e−t/p. By letting t = log p and using the fact that T3 = ∩p
j=1T3j, the result follows. □
We define the following notations used in Lemma 17 and 18. Let
Zj := [1n, b11j (X1), . . . , b1pj (Xp), . . . , bRn1j (X1), . . . , bRnpj (Xp)] ∈ Rn×(pRn+1),

34
and
βj = [β0∗j , β11j , . . . , β1pj , . . . , βRn1j , . . . , βRnpj ]⊤ ∈ RpRn+1, β0∗j =
p
X
k=1
β0kj .
Moreover, denote all permutations corresponding to G(β) as Πβ, where node k is a parent of node j
if PRn
r=1 |βrkj|2 ̸= 0, and βj = 0 if node j has no parents.
Lemma 17. We define the event
T4 :=
n
2n−1 ε⊤
j Zj (β⋆
j − βej ) ≤ δ2∥Zj (β⋆
j − βej )∥2
n + ∆n,p, ∀βej with Πβe ⊆ Π⋆, ∀j ∈ [p]
o
,
where δ2 ∈ (0, 1) and ∆n,p ≲ sjRn log p/n. Then P(T4) ≥ 1 − 1/p.
Proof. First we consider the set
T4,j :=
n
2n−1 ε⊤
j Zj (β⋆
j − βej ) ≤ δ2∥Zj (β⋆
j − βej )∥2
n + ∆(t)n,p, Πβe ⊆ Π⋆o
,
where ∆(t)n,p ≲ sj(Rn + t + log p)/n. When the permutations Πβe are correct, εj and Zj(β⋆
j − βej) are
independent. Therefore, we focus on the conditional event T4,j | Zj(β⋆
j − βej). When Zj(β⋆
j − βej) is fixed, by Lemma 7.4 of van de Geer and B ̈uhlmann (2013), with probability at least 1 − e−t/p,
(nσ⋆
j )−1 sup
∥Z (β ⋆
j −βej )∥n≤1
ε⊤
j Zj (β⋆
j − βej) ≤
q
2(2Rnsj + 1)/n + p2(t + log p)/n
≤
q
2(2Rnsj + 1)/n +
q
2sj(t + log p)/n.
The last inequality can be justified by considering two cases: (1) when sj ≥ 1, the inequality is trivially satisfied; (2) when sj = 0, we have β⋆
j = βej = 0 due to {k : (k, j) ∈ E◦} = ∅, and thus the inequality again holds trivially. Consequently, for some δ2 ∈ (0, 1),
2(nσ⋆
j )−1 ε⊤
j Zj (β⋆
j − βej) = 2(nσ⋆
j )−1 ε⊤
j Zj (β⋆
j − βej) · ∥Zj(β⋆
j − βej )∥n
∥Zj (β⋆
j − βej )∥n
≤2
q
2(2Rnsj + 1)/n +
q
2sj(t + log p)/n ∥Zj(β⋆
j − βej )∥n
≤ δ2∥Zj (β⋆
j − βej )∥2
n + (8Rnsj + 4)/(nδ2) + 4sj(t + log p)/(nδ2).
This implies that P(T4,j | Zj(β⋆
j − βej)) ≥ 1 − e−t/p, and consequently P(T4,j) ≥ 1 − e−t/p. By letting
t = log p and using the fact that T4 = ∩p
j=1T4,p, the result follows.
□
Lemma 18. Define the event
T5 := ∥Zj(β⋆
j − βj )∥2
n ≳ ∥β⋆
j − βj ∥2
2, ∀βj feasible in (8), ∀j ∈ [p] .
Then P(T5) ≥ 1 − 1/p.
Proof. Denote the i-th row of Zj by Z(i)
j ∈ RpRn+1. Note that all entries of Zj are bounded in [−1, 1], and thus they are sub-Gaussian with the same parameter. Without loss of generality, we assume that ∥β⋆
j − βj∥2 = 1. Since ∥β⋆
j − βj∥0 ≤ 2KRn + 1, we have (Z(i)⊤
j (β⋆
j − βj))2 being sub-exponential and

35
|Z (i)⊤
j (β⋆
j − βj)| ≤ ∥β⋆
j −βj∥1 ≤ √2KRn + 1. By the sub-exponential Bernstein inequality (Vershynin, 2018), with probability at least 1 − e−t/p, we have
1 n
n
X
i=1
(β⋆
j − βj )⊤Z(i)
j Z(i)⊤
j (β⋆
j − βj) ≳ μZ,β −  ̄κ2 p(t + log p)/n + (t + log p)/n ,
where  ̄κ = maxi ∥β⊤Z(i)
j Z(i)⊤
j β∥ψ1 ≲ R1/2
n , and
μZ,β = E
"
(β⋆
0∗j − β0∗j ) +
p
X
k=1
Rn
X
r=1
(β⋆
rjk − βrjk) · brjk(X(1)
k)
#2
.
This concentration result implies that P(T5,j) ≥ 1 − e−t/p, where
T5,j :=
n
∥Zj (β⋆
j − βj )∥2
n ≳ μZ,β −  ̄κ2p(t + log p)/n − (t + log p)/n, ∀βj feasible with ∥β⋆
j − βj ∥2 = 1
o
.
By Assumption 7, we have  ̄κ2 ≲
pn/ log p. If μZ,β ≥ c for some c > 0, then by letting t = log p and
using the fact that T5 = ∩p
j=1T5,j, the result follows.
Finally, we show that μZ,β ≥ c for some c > 0. Note that the function f ̄kj(xk) = 1
2
PRn
r=1(β⋆
rkj −
βrkj )(brkj (xk) − μrkj ) ∈ Fkj , where μrkj = E[brkj (Xk)]. Let β ̄rkj = 1
2 (β⋆
rkj − βrkj), and we have
PRn
r=0 |β ̄rkj |2 = 1/4. Then
μZ,β
4 =E
"p X
k=1
f ̄kj (Xk)
#2
≥ φ2
p
X
k=1
E f ̄kj (Xk) 2 = φ2
p
X
k=1
E
"
β ̄0kj +
Rn
X
r=1
β ̄rkj brkj (Xk)
#2
= φ2 β ̄2
0kj + υ
Rn
X
r=1
β ̄2
rkj
!
≥ φ2υ
4 > 0.
The first inequality follows from Assumption 5. The last equality follows from E[brkj(Xk)br′kj(Xk)] = υ1(r = r′) with υ ∈ (0, 1], as well as β ̄0kj = − PRn
r=1 β ̄rkj · E[brkj (Xk)].
□
D.2. Lemmas for the main results. For anyg⃗ j, we introduce the empirical counterpart of the residual variance νn
j g(⃗ j), which is denote by νbn
j g(⃗ j ) := minf∈F⊕g⃗ j
n
R Rj(f ;g⃗ j)Pn(dx).
Lemma 19. Under event T1 ∩ T2, we have
νn
j g(⃗ j) − νbn
j g(⃗ j ) ≲ sj
plog p/n.
Proof. Note that we can rewrite
νn
j g(⃗ j) = min
f ∈F ⊕g⃗ j
n
Z
Rj(f ;g⃗ j)P (dx), νbn
j g(⃗ j) = min
f ∈F ⊕g⃗ j
n
Z
Rj(f ;g⃗ j)Pn(dx).

36
For any f ∈ F ⊕g⃗ j ,
Z
Rj(f ;g⃗ j)(P − Pn)(dx) =
Z

xj −
X
k∈g⃗ j
fkj (xk)


2
(P − Pn)(dx)
≤2
Z


X
k∈pa(j)
f⋆
kj (xk) −
X
k∈g⃗ j
fkj (xk)


2
(P − Pn)(dx) + 2
Z
ε2
j (P − Pn)(dx)
≤ 8 · (g|⃗ j| ∨ |pa(j)|)2 · max
k,k′ sup
fkj ∈Fkj , fk′j ∈Fk′j
Z
fkj (xk)fk′j (xk′ )(P − Pn)(dx) + 2
Z
ε2
j (P − Pn)(dx).
Under the event T1 ∩ T2, since (g|⃗ j| ∨ |pa(j)|)2 ≤ Ksj ≲ sj, this implies that
Z
Rj(f ;g⃗ j)(P − Pn)(dx) ≲ sj
plog p/n.
Now let
fej ∈ argmin
f ∈F ⊕g⃗ j
n
Z
Rj(f ;g⃗ j)P (dx), f ̄j ∈ argmin
f ∈F ⊕g⃗ j
n
Z
Rj(f ;g⃗ j)Pn(dx),
and then
νn
j g(⃗ j) =
Z
Rj(fej;g⃗ j)P (dx), νbn
j g(⃗ j) =
Z
Rj(f ̄j;g⃗ j)Pn(dx).
We conclude that
Z
Rj(f ̄j;g⃗ j)Pn(dx) ≤
Z
Rj(fej;g⃗ j)Pn(dx) ≲
Z
Rj(fej;g⃗ j)P (dx) + sj
plog p/n,
and Z
Rj(fej;g⃗ j)P (dx) ≤
Z
Rj(f ̄j;g⃗ j)P (dx) ≲
Z
Rj(f ̄j;g⃗ j)Pn(dx) + sj
plog p/n.
In summary,
νn
j g(⃗ j) − νbn
j g(⃗ j ) ≲ sj
plog p/n.
□
Lemma 20. Suppose conditions of Lemma 10, 11 and 19 are satisfied. Then c ≤ νn
j g(⃗ j) ≤ c + o(1) and c − o(1) ≤ νbn
j g(⃗ j) ≤ c + o(1) for anyg⃗ j.
Proof. First, by Lemma 10, we have νn
j g(⃗ j) ≥ νjg(⃗ j) ≥ νjg(⃗(π) j) ≥ νp ≥ c, whereg⃗ j ⊆g⃗(π) j. By Lemma 19, we further conclude that νbn
j g(⃗ j ) ≥ νn
j g(⃗ j) − o(1) ≥ c − o(1). Next, recall that dn,p := maxj∈V maxg|⃗ j|∈{0,...,K} νjg(⃗ j ) − νn
j g(⃗ j) . Then by Lemma 10 and 11, we have νn
j g(⃗ j) ≤ νjg(⃗ j) + dn,p ≤ νp + dn,p ≤ c + o(1). By Lemma 19, we further conclude that νbn
j g(⃗ j ) ≤ νn
j g(⃗ j) + o(1) ≤ c + o(1).
□
Lemma 21. Suppose the conditions of Lemma 19 and Lemma 20 are satisfied. For any π ∈/ Π⋆ and anyg⃗ j ⊆g⃗(π) j, we have
p−1
p
X
j=1
log νbn
j g(⃗ j) − log σ⋆2
j ≳ ξp − sn/pplog p/n.

37
Proof. First, note that νn
j g(⃗ j) ≥ c by Lemma 20. Then
p
X
j=1
log νbn
j g(⃗ j) − log σ⋆2
j≳
p
X
j=1
log νn
j g(⃗ j) − log σ⋆2
j − sn
plog p/n
≥
p
X
j=1
log νjg(⃗(π) j) − log σ⋆2
j − sn
plog p/n ≥ pξp − sn
plog p/n.
The first inequality follows from Lemma 19, and log(a − x) ≥ log(a) − x/a for any a > 0 and x < a. The second inequality follows from the fact that νn
j g(⃗ j) ≥ νjg(⃗ j) ≥ νjg(⃗(π) j) for anyg⃗ j. The last inequality follows from the definition of ξp. □
Appendix E. Proof of Theorem 4
E.1. Proof of Theorem 4 Part 1.
Proof. First, note that for any feasible fkj andg⃗ j, the optimization
min
σj ≥0
p
X
j=1


log σ2
j+
Xj − P
k∈g⃗ j fkj (Xk)
2
n
σ2
j


 + λ2
n
p
X
j=1
g|⃗ j|
is solved at σ2
j = Xj − P
k∈g⃗ j fkj (Xk)
2
n
. As a result, we can re-write the objective function as
min
{fkj }, g{⃗ j }
p
X
j=1
log Xj −
X
k∈g⃗ j
fkj (Xk)
2
n
+ p + λ2
n
p
X
j=1
g|⃗ j|
with the constraint that each fkj ∈ Fkj,n and the selected edges form a DAG. Given the solution fbkj and gbj, the estimated variance is thus σb2
j = ∥Xj − P
k∈gbj
fbkj(Xk)∥2n. Recall that D⋆
kj = P∞
r=Rn+1 β⋆
rkjbrkj. Appealing to the basic inequality,
p
X
j=1
log σb2
j + p + λ2
n
sb ≤
p
X
j=1
log σ⋆2
j+
p
X
j=1
∥εj + P
k∈pa(j) D⋆
kj ∥2n
σ⋆2
j
+ λ2
ns⋆
or equivalently
p
X
j=1
log σb2
j
σ⋆2
j
≤
p
X
j=1
∥εj ∥2n − σ⋆2
j
σ⋆2
j
+
p
X
j=1
∥
P
k∈pa(j) D⋆
kj ∥2n
σ⋆2
j
+2
n
p
X
j=1
|ε⊤
j
P
k∈pa(j) D⋆
kj |
σ⋆2
j
+ λ2
n(s⋆ − sb).
(13)
Under event T1 ∩ T3, as well as Lemma 8, we have
(14) p−1
p
X
j=1
log σb2
j − log σ⋆2
j ≲ p−1 λ2
nsn + pplog p/n + snR−2η
n.

38
Under Assumption 6, the upper bound is ξpo(1). This implies that Πb ⊆ Π⋆. Otherwise, there must exist πb ∈ Πb such that πb ∈/ Π⋆. Appealing to Lemma 21, where σb2
j = νbn
j (gbj), we have
p−1
p
X
j=1
log σb2
j − log σ⋆2
j ≳ ξp − sn/pplog p/n.
This lower bound, however, is ξp(1 + o(1)), contradicting with the upper bound ξpo(1) when ξp > 0. Finally, note that this proof relies on the event T1 ∩ T2 ∩ T3, which holds with probability at least 1 − 4/p.
□
E.2. Proof of Theorem 4 Part 2.
Proof. The basic inequality for the early stopping solution θbearly can be written as:
ln(θbearly) + λ2
n
sbearly ≤ ln(θb) + λ2
n
sb + τ early ≤ ln {β⋆
rkj }(k,j)∈E⋆, r∈[Rn], {σ⋆
j }j∈V + λ2s⋆ + τ early,
We use the same proof technique as in Part 1. When the early stopping threshold satisfies τ early = o(pξp), the upper bound of p−1 Pp
j=1[log(σbearly
j )2 − log σ⋆2
j ], similar as in (14), remains to be ξpo(1).
Moreover, the estimated variance from the early-stopping solution satisfies (σbearly
j )2 ≥ νbn
j (gbearly
j ), so
when πbearly ∈/ Π⋆, the lower bound of p−1 Pp
j=1[log(σbearly
j )2 − log σ⋆2
j ] remains to be o(ξp). With these two key facts in place, the early-stopping permutations are guaranteed to be correct.
□
Appendix F. Proof of Theorem 5
F.1. Proof of Theorem 5 Part 1.
Proof. We first note that, by Theorem 4, the estimated permutations are correct: Πb ⊆ Π⋆. Applying the inequality log(1 + x) ≤ x − x2/(2(1 + c)2), −1 < x ≤ c, we obtain
log σb2
j
σ⋆2
j
!
= − log σ⋆2
j
σb2
j
!
≥
σb2
j − σ⋆2
j
σb2
j
+ (minj∈V σb2
j )2
2σ4
σ⋆2
j − σb2
j
σb2
j
!2
.
(15)
Moreover, by (13), we have
(16) K0
p
X
j=1
σ⋆2
j − σb2
j
σb2
j
!2
≤
p
X
j=1
∥εj ∥2n
σ⋆2
j
−1
!
−
p
X
j=1
σb2
j − σ⋆2
j
σb2
j
+
p
X
j=1
(D1j + D2j ) + λ2
n(s⋆ − sb),
where
D1j = ∥ P
k∈pa(j) D⋆
kj ∥2n
σ⋆2
j
, D2j = 2
n
P
k∈pa(j) |ε⊤
j D⋆
kj |
σ⋆2
j
,
and K0 > 0 is a constant such that 0 < K0 ≤ (minj∈V σb2
j )2/(2σ4). Such a constant K0 exists since by Lemma 20, where σb2
j = νbn
j (gbj), we have σb2
j ≥ c − o(1) for all j ∈ V. In the following, we use the
parameterization with fkj(·) = β0kj + PRn
r=1 βrkjbrkj(·). Recall the definition
Zj = [1, b11j (X1), . . . , b1pj (Xp), . . . , bRn1j (X1), . . . , bRnpj (Xp)] ∈ RpRn+1, (as a random vector)

39
and
βj = [β0∗j , β11j , . . . , β1pj , . . . , βRn1j , . . . , βRnpj ]⊤ ∈ RpRn+1, β0⋆j =
p
X
k=1
β0kj .
Then we have Pp
k=1 fkj (Xk) = β⊤
j Zj. For each j ∈ V,
σb2
j − σ⋆2
j = Xj − Zj βbj
2
n
− σ⋆2
j = Zj (β⋆
j − βbj) + εj +
X
k∈pa(j)
D⋆
kj
2
n
− σ⋆2
j
= Zj (β⋆
j − βbj) +
X
k∈pa(j)
D⋆
kj
2
n
+ ∥εj ∥2
n − σ⋆2
j +2
n ε⊤
j (Zj (β⋆
j − βbj)) + 2 ε⊤
j
n
X
k∈pa(j)
D⋆
kj
Under the event T4, we obtain that for some δ3 > 0 with 0 < δ2 + δ3 < 1,
∥εj ∥2
n − σ⋆2
j − σb2
j − σ⋆2
j
≤ − Zj(β⋆
j − βbj) +
X
k∈pa(j)
D⋆
kj
2
n
+ δ2 Zj (β⋆
j − βbj )
2
n
+ ∆n,p + σ⋆2
j D2j
≤ − (1 − δ2 − δ3) Zj(β⋆
j − βbj )
2
n
− (1 − 1/δ3)
X
k∈pa(j)
D⋆
kj
2
n
+ ∆n,p + σ⋆2
j D2j
≤ (1/δ3 − 1)σ⋆2
j D1j + σ⋆2
j D2j + ∆n,p.
(17)
Furthermore, for some 0 < δ4 < K0,
∥εj ∥2n − σ⋆2
j
σ⋆2
j
− ∥εj ∥2n − σ⋆2
j
σb2
j
= ∥εj ∥2n − σ⋆2
j
σ⋆2
j
·
σb2
j − σ⋆2
j
σb2
j
≤1
δ4
∥εj ∥2n − σ⋆2
j
σ⋆2
j
!2
+ δ4
σb2
j − σ⋆2
j
σb2
j
!2
.
(18)
Now we plug (17) and (18) back into (16). Under event T1 ∩ T2 ∩ T3 ∩ T4 and Lemma 8, we obtain
(K0 − δ4)
p
X
j=1
σ⋆2
j − σb2
j
σb2
j
!2
≤
p
X
j=1
" ∥εj ∥2n − σ⋆2
j
σ⋆2
j
− ∥εj ∥2n − σ⋆2
j
σb2
j
#
+
p
X
j=1
" ∥εj ∥2n − σ⋆2
j
σb2
j
−
σb2
j − σ⋆2
j
σb2
j
#
− δ4
p
X
j=1
σ⋆2
j − σb2
j
σb2
j
!2
+
p
X
j=1
(D1j + D2j ) + λ2
n(s⋆ − sb)
≲ (p + snRn) log p/n + snR−2η
n + λ2
nsn.
The result hence follows. Note that this proof relies on the event T1 ∩ T2 ∩ T3 ∩ T4, which holds with probability at least 1 − 5/p. □

40
F.2. Proof of Theorem 5 Part 2.
Proof. Note that the estimated permutations are correct: bΠearly ⊆ Π⋆ by Theorem 4. Then using the same proof technique as in Part 1, this is a direct result from the basic inequality
ln(θbearly) + λ2
n
sbearly ≤ ln(θb) + λ2
n
sb + τ early ≤ ln {β⋆
rkj }(k,j)∈E⋆, r∈[Rn], {σ⋆
j } + λ2s⋆ + τ early.
□
Appendix G. Proof of Theorems 6
G.1. Proof of Theorem 6 Part 1.
Proof. In this proof, we keep using the parameterization with Zj ∈ RpRn+1 and βj ∈ RpRn+1. Let G(β) be the graph induced by β, where an edge between node k and node j is present if PRn
r=1 |βrkj |2 ̸= 0, and absent otherwise. We aim to show that the solution to the following optimization problem, which is equivalent to the original one, recovers the true graph G⋆:
(19) min
β∈B l(β), l(β) :=
p
X
j=1
log ∥Xj − Zjβj∥2
n σ⋆2
j
−
p
X
j=1
∥εj ∥2n − σ⋆2
j
σ⋆2
j
+ λ2
n(1{∥βkj∥2 ̸= 0} − s⋆),
where B corresponds to the feasible set in (8). The proof proceeds in three steps. In each step, we solve an optimization problem that is more constrained than the original one.
• In step I, we restrict the feasible region to R1 := {β ∈ B : G(β) = G⋆}, and derive an upper bound for the minimized objective function over β ∈ R1. We denote this upper bound by l1.
• In step II, we restrict the feasible region to
R2 := {β ∈ B : |G(β)| ≤ s⋆, G(β) ̸= G⋆, G(β) has correct permutations},
and derive a lower bound for the minimized objective function over β ∈ R2. We denote this lower bound by l2, and verify that l1 < l2 when n is sufficiently large.
• In step III, we restrict the feasible region to
R3 := {β ∈ B : |G(β)| > s⋆, G(β) has correct permutations},
and derive a lower bound for the minimized objective function over β ∈ R3. We denote this lower bound by l3, and verify that l1 < l3 when n is sufficiently large.
The three steps above guarantee that the solution to the original problem falls inside R1 when n is sufficiently large. Note that we restrict the search only to the space of correct permutations, since, by Theorem 4, any feasible value associated with an incorrect permutation cannot be optimal. This proof relies on the event T1 ∩ T2 ∩ T3 ∩ T4 ∩ T5, which holds with probability at least 1 − 6/p.
Step I. In this step, we use β ̄ to denote the solution to optimization problem (19) over the additional constraint set R1. The estimated variance is hence σ ̄2
j := ∥Xj − Zjβ ̄j∥2n. Appealing to the basic inequality similar as (13), we can arrive at an upper bound for the objective function:
l(β ̄) =
p
X
j=1
log σ ̄2
j
σ⋆2
j
−
p
X
j=1
∥εj ∥2n − σ⋆2
j
σ⋆2
j
≤
p
X
j=1
∥
P
k∈pa(j) D⋆
kj ∥2n
σ⋆2
j
+2
n
p
X
j=1
|ε⊤
j
P
k∈pa(j) D⋆
kj |
σ⋆2
j
≲ snR−2η
n + sn log p/n.
(20)
We call the upper bound l1 := snR−2η
n + sn log p/n. By Assumption 8, we have l1 = o(δn,p).

41
Step II. In this step, we overload the notation β ̄ to represent the solution to optimization problem (19) over the additional constraint set R2. The estimated variance is σ ̄2
j := ∥Xj − Zjβ ̄j∥2n, and the
estimated sparsity is s ̄ := |G(β ̄)|. Then by (15), (17) and (18),
l(β ̄) =
p
X
j=1
log σ ̄2
j
σ⋆2
j
−
p
X
j=1
∥εj ∥2n − σ⋆2
j
σ⋆2
j
+ λ2
n(s ̄ − s⋆)
≥
p
X
j=1
" σ ̄2
j − σ⋆2
j
σ ̄2
j
− ∥εj ∥2n − σ⋆2
j
σ ̄2
j
#
+
p
X
j=1
" ∥εj ∥2n − σ⋆2
j
σ ̄2
j
− ∥εj ∥2n − σ⋆2
j
σ⋆2
j
#
+ K0
p
X
j=1
σ⋆2
j − σ ̄2
j
σ ̄2
j
!2
+ λ2
n(s ̄ − s⋆)
≳
p
X
j=1
Zj (β⋆
j − βbj )
2
n
− (p + snRn) log p/n − snR−2η
n + λ2
n(s ̄ − s⋆).
Now we attempt to connect this lower bound with the number of missed edges γ1 := |G⋆ \ G(β ̄)|. We
also define γ2 := |G(β ̄) \ G⋆|. For any β ̄ ∈ R2, we consider two cases.
Case 1: If |G(β ̄)| = s⋆, then γ1 = γ2 ≥ 1. Under the event T5, we have
p
X
j=1
Zj (β⋆
j − β ̄j ) 2
n≳
p
X
j=1
β⋆
j − β ̄j
2
2 ≥ γ1 min
(k,j)∈E⋆
Rn
X
r=1
|β⋆
rkj |2 ≥ min
(k,j)∈E⋆
Rn
X
r=1
|β⋆
rkj |2.
Then
l(β ̄) ≳ min
(k,j)∈E⋆
Rn
X
r=1
|β⋆
rkj |2 − (p + snRn) log p/n − snR−2η
n.
We call this lower bound l(1)
2 . By Assumption 8, we have l(1)
2 ≳ δn,p > o(δn,p) = l1 when n is sufficiently large. Case 2: If |G(β ̄)| < s⋆, then γ2 ≥ 0 and γ1 = s⋆ − s ̄ + γ2. Under the event T5, we have
p
X
j=1
Zj (β⋆
j − β ̄j ) 2
n≳
p
X
j=1
β⋆
j − β ̄j
2
2 ≥ γ1 min
(k,j)∈E⋆
Rn
X
r=1
|β⋆
rkj|2 ≥ (s⋆ − s ̄) min
(k,j)∈E⋆
Rn
X
r=1
|β⋆
rkj |2.
Then
l(β ̄) ≳ (s⋆ − s ̄) min
(k,j)∈E⋆
Rn
X
r=1
|β⋆
rkj |2 + λ2
n(s ̄ − s⋆) − (p + snRn) log p/n − snR−2η
n.
We call this lower bound l(2)
2 . By Assumption 8 and the choice of λ2n, we see when n is sufficiently large,
l(2)
2 ≥ (s⋆ − s ̄)
"
min
(k,j)∈E⋆
Rn
X
r=1
|β⋆
rkj |2 − λ2
n − (p + snRn) log p/n − snR−2η
n
#
≳ δn,p > o(δn,p) = l1.
Both cases lead to the result that l2 = min{l(1)
2 , l(2)
2 } > l1 when n is sufficiently large.
Step III. In this step, we overload the notation β ̄ to represent the solution to optimization problem (19) over the additional constraint set R3. The estimated sparsity is also overloaded as s ̄ := |G(β ̄)|.

42
Similarly as in Step II, we obtain a lower bound for l(β ̄):
l(β ̄) ≳
p
X
j=1
Zj (β⋆
j − β ̄j ) 2
n + λ2
n(s ̄ − s⋆) − (p + snRn) log p/n − snR−2η
n
≥ λ2
n − (p + snRn) log p/n − snR−2η
n
We call this lower bound l3. By the choice of λ2n ≳ δn,p, we verify that l3 ≳ δn,p > o(δn,p) = l1 when n is sufficiently large. □
G.2. Proof of Theorem 6 Part 2.
Proof. Note that the estimated permutations are correct: bΠearly ⊆ Π⋆ by Theorem 4. Then the basic inequality for the early stopping solution θbearly can be written as:
l(βbearly) ≤ l(βb) + τ early ≤ l {β⋆
1, . . . , β⋆
p } + τ early,
We use the same proof technique as in Part 1. When the early stopping threshold satisfies τ early = o(pξp ∧ δn,p), the upper bound l1 remains to be o(δn,p). Moreover, the lower bounds l2 and l3 remain at least on the order of δn,p. The result hence follows.
□
Appendix H. More on experiments
H.1. Simulation Setup for Figure 1. The true model is given in (1), and each reported result is averaged over 100 independent trials. The CAM-IncEdge procedure is implemented using the R package CAM with default settings, except that we set pruning = TRUE. The NPVAR procedure is implemented using the publicly available package at https://github.com/MingGao97/NPVAR with default parameters. For MIP (linear), we use whichever of procedures (8) or (9) yields the smaller BIC score, with basis functions-
 {br(Xk)}Rn
k=1 taken simply as Xk itself. Our proposed nonlinear MIP approach is implemented in the same manner: selecting between (8) and (9) based on the BIC score; however, in order to handle non-linearity, we use degree-three splines with five internal knots for all edges. We set λn = 0.01 for both procedures. No super-structure, partial order sets, stable sets, or early stopping is used in any of the MIP-based methods.
H.2. Simulation setup for Figure 2. We use the graph structure Insurance Small with p = 15 nodes and s⋆ = 25 true edges in this experiment. For all (k, j) ∈ E⋆, the true function is set as f⋆
kj(x) = (sin(x) − E[sin(Xk)] + cos(x) − E[cos(Xk)])/2. The noise variances σ⋆
j alternate between 0.5 and 1 across nodes. For each trial, we generate n = 500 independent and identically distributed samples. We apply procedure (8) in this simulation. To construct basis functions, the same set of degree-two splines with two internal knots is used across all edges. We adopt the true moral graph as the super-structure. In this experiment, we do not use any partial order sets, stable sets, or early stopping. Each run of the MIP is terminated after 15 minutes.

43
H.3. Simulation setup for Figure 3. The “default” formulation in Figure 3 refers to the following MIP:
min
νj ∈R, θ0∗j ∈R, ∀j∈V θrkj ∈R, ∀r∈[Rn], ∀(k,j)∈E gkj ∈{0,1}, ∀(k,j)∈E
ψ∈[1,p]p
p
X
j=1
−2 log νj +
p
X
j=1
νj Xj − θ0∗j −
p
X
k=1
Rn
X
r=1
θrkj br(Xk)
2
n
+ λ2
n·
X
(k,j)∈E
gkj
(21a)
(21b) s.t. − M gkj ≤ θrkj ≤ M gkj, ∀(k, j) ∈ E, r ∈ {1, . . . , Rn},
−M
p
X
k=1
gkj ≤ θ0∗j ≤ M
p
X
k=1
(21c) gkj, ∀j ∈ V,
(21d) 0 < νj ≤ M, ∀j ∈ V,
(21e) 1 − p + pgkj ≤ ψj − ψk, ∀(k, j) ∈ E.
Suppose σj denotes the standard deviation of the noise term εj. Then, the decision variable νj corresponds to 1/σj, θrkj represents the scaled coefficient βrkj/σj, and θ0∗j represents the scaled
intercepts Pp
k=1 β0kj /σj .
Regardless of the specific formulation, the implementation of the MIP procedure using Gurobi can be broadly decomposed into three computationally intensive components. First, the objective function must be specified by operating on the decision variables. When this step requires iterating over the entire dataset, it can become a computational bottleneck. Second, an unconstrained version of the optimization problem is solved to obtain a suitable value for the big-M constant. Third, the core optimiz-
ation process is executed to solve the full MIP problem. The computational cost at this stage is influenced by both the complexity of evaluating the objective function and the structural properties of the optimization problem, such as convexity.
We now present the simulation setup, which is very similar to that of Figure 2, but we provide a full description here for completeness. The true model is specified using the graph structure Insurance Small with p = 15 nodes and s⋆ = 25 true edges. For all (k, j) ∈ E⋆, the true function is set as f⋆
kj(x) = (sin(x) − E[sin(Xk)] + cos(x) − E[cos(Xk)])/2. The noise variances σ⋆
j alternate between 0.5 and 1 across nodes. We apply procedure (8) in this simulation. For graph estimation, the same set of degree-two splines with two internal knots is used across all edges. We adopt the true moral graph as the super-structure. The tuning parameter is set as λ2n = 0.5. In this experiment, we do not use any partial order sets, stable sets, or early stopping. Each run of the MIP is terminated after 50 minutes.
H.4. Simulation setup for Figure 4. The simulation setup is very similar to that of Figure 3, but we provide a full description here for completeness. We use the graph structure Insurance Small with p = 15 nodes and s⋆ = 25 true edges in this experiment. For all (k, j) ∈ E⋆, the true function is set as f ⋆
kj(x) = (sin(x) − E[sin(Xk)] + cos(x) − E[cos(Xk)])/2. The noise variances σ⋆
j alternate between 0.5 and 1 across nodes. For each trial, we generate n = 500 independent and identically distributed samples. We apply procedure (8) in this simulation. To construct basis functions, the same set of degree-two splines with two internal knots is used across all edges. We adopt the true moral graph as the super-structure. The partial order and stable sets are estimated via the bootstrap procedure described in Section 4.2, where the CAM algorithm (Bu ̈hlmann et al., 2014) is applie-
d to each bootstrap sample. We set λ2n = 0.01 and fix the early stopping threshold at τ early = 0. Each run of MIP is terminated after 15 minutes.

44
H.5. Simulation setup for Figure 5. The simulation setup is very similar to that of Figure 4, but we provide a full description here for completeness. We use the graph structure Insurance Small with p = 15 nodes and s⋆ = 25 true edges in this experiment. For all (k, j) ∈ E⋆, the true function is set as f ⋆
kj(x) = (sin(x) − E[sin(Xk)] + cos(x) − E[cos(Xk)])/2. The noise variances σ⋆
j alternate between 0.5 and 1 across nodes. For each trial, we generate n = 500 independent and identically distributed samples. We apply procedure (8) in this simulation. To construct basis functions, the same set of degree-two splines with two internal knots is used across all edges. We adopt the true moral graph as the super-structure. In this experiment, we do not use any partial order sets or stable sets. We set λ2n = 0.01. Each run of the MIP is terminated after 15 minutes.
H.6. More on comparison to existing methods.
H.6.1. More on Section 6.2. We describe the implementation details of six baseline approaches here:
• NPVAR: The implementation is available at https://github.com/MingGao97/NPVAR. We first used the function NPVAR() with layer.select = TRUE to find the topological ordering of nodes. The eta parameter was chosen such that the each resulting layer contains only one node. We then used the function prune() to obtain the estimated adjacency matrix, where cutoff was chosen based on the Bayesian information criterion score.
• EqVar : The implementation is available at https://github.com/WY-Chen/EqVarDAG. For the top-down and bottom-up versions, we used the functions EqVarDAG TD() and EqVarDAG BU(), respectively, with the parameter set to mtd = "cvlasso". The cutoff parameter was chosen based on the Bayesian information criterion score.
• NoTears: The implementation is available at https://github.com/xunzheng/notears. We used neural networks for the non-linearities with a single hidden layer of 5 neurons. We used the function notears non-linear() with the training parameters lambda1 and lambda2 chosen based on the Bayesian information criterion score.
• RESIT : The implementation is available at
http://people.tuebingen.mpg.de/jpeters/onlineCodeANM.zip. We used the fucntion ICML() with parameter model = train gam, and its paramter alpha was chosen based on the Bayesian information criterion score.
• CCDr : The implementation is available at the Python Causal Discovery Toolbox (cdt). We used the function CCDr() to fit the model.
• CAM : The implementation is available at the R library CAM and the Python library cdt. We used the function CAM() in Python interface, with parameters score = "non-linear", variablesel = True, pruning = True. The parameter cutoff was chosen based on the Bayesian information criterion score.
Tables 1 – 4 show complete results for all ten graph structures. We observe that NPVAR and EqVar, which rely on the homoscedasticity assumption, perform particularly well when the noise variances are equal, but their performance deteriorates significantly under heteroscedastic settings. A similar pattern is observed for NoTears. In contrast, the method CAM tends to perform substantially better under heteroscedastic conditions, while its performance worsens when the variances are equal. Overall, am-
ong the baseline methods, CAM yields the best performance in heteroscedastic settings, whereas NPVAR performs best in the homoscedastic case. These observations support our choice of base procedures applied to the bootstrap samples in each scenario. Finally, we note that the total running time for MIP should account not only for the values reported in each table, but also for the time spent on the bootstrap procedure. If the bootstrap samples are processed in parallel, this additional

45
cost is simply equal to the running time of a single execution of CAM (or NPVAR). In summary, the MIP algorithm achieves the most accurate graph recovery within the allotted optimization time budget of 60p seconds.
Asia. 8.8 Bowling. 9.11 Rain. 14.18 Insurance Small. 15.25
NPVAR
EqVar(TD)
EqVar(BU)
NoTears
RESIT
CCDr
CAM
MIP(super)
MIP(moral)
NPVAR
EqVar(TD)
EqVar(BU)
NoTears
RESIT
CCDr
CAM
MIP(super)
MIP(moral)
0
5
10
0
10
20
30
0
10
20
30
40
0
10
20
30
40
50
SHD d
Unequal variances μ0 = 2 Equal variances
Figure 9. The performance comparison between MIP and baseline methods. The true functions are f ⋆
kj(x) = sin(x + sin(x)) − E[sin(Xk + sin(Xk))], and radial basis functions are used as basis functions. Each row corresponds to one graph structure, indicated by name.p.s⋆. The EqVar (TD) and EqVar (BU) refer to the top-down and bottom-up version of EqVar, respectively. The MIP (super) and MIP (moral) refer to the MIP using the estimated super-structure and the true moral graph, respectively. Different colors correspond to different variance schemes. Each box summarizes results from 30 independent-
 trials.
H.6.2. Another choice of true and basis functions. We use the same setup as in Section 6.2, except for the choice of the true functions and basis functions. Specifically, for all (k, j) ∈ E⋆, we set the true function as f ⋆
kj(x) = sin(x + sin(x)) − E[sin(Xk + sin(Xk))]. Across all edges, we use the same set of radial basis functions defined as br(x; kr) = exp −(x − kr)2 , where kr is the r-th knot, r = 1, . . . , Rn. These Rn knots are placed at evenly spaced percentiles. We note that for one-dimensional features, radial basis functions typically have weaker approximation power compared to spline basis functions when using a small number of basis terms. To achieve sufficient approximation accuracy in this experiment-
, we set Rn = 30, which, however, imposes a heavier computational burden. Figure 9

46
compares the graph recovery performance of MIP with baseline methods. The comparison focuses on graphs with up to p = 15 nodes, under both the homoscedastic and the heteroscedastic μ0 = 2 settings. Our proposed algorithm MIP achieves the best overall performance across all setups. Complete results are presented in Tables 5 and 6.
NPVAR EqVar (TD) EqVar (BU) Network.p.s⋆ d Time d Time d Time Dsep.6.6 5.9 (2.5) 0.3 (0.0) 5.3 (2.6) 0.2 (0.0) 5.4 (2.7) 0.2 (0.0) Asia.8.8 9.6 (3.6) 0.6 (0.0) 7.9 (3.0) 0.3 (0.0) 8.0 (3.0) 0.3 (0.0) Bowling.9.11 10.7 (4.1) 0.8 (0.1) 8.0 (2.7) 0.4 (0.0) 7.9 (2.8) 0.4 (0.0) InsuranceSmall.15.25 27.1 (7.6) 4.1 (0.2) 27.5 (6.7) 1.0 (0.1) 27.7 (6.9) 0.9 (0.1) Rain.14.18 21.5 (7.1) 3.5 (0.2) 18.4 (6.6) 0.9 (0.1) 18.4 (6.4) 0.8 (0.1) Cloud.16.19 24.2 (6.0) 5.1 (0.2) 19.9 (5.0) 1.0 (0.1) 20.2 (5.0) 1.0 (-
0.1) Funnel.18.18 24.9 (9.9) 5.8 (0.2) 17.1 (5.9) 0.9 (0.1) 17.5 (6.0) 0.9 (0.0) Galaxy.20.22 29.1 (10.0) 7.8 (0.2) 20.6 (5.6) 1.0 (0.0) 21.2 (5.2) 1.0 (0.1) Insurance.27.52 67.9 (15.1) 19.6 (0.5) 73.2 (14.0) 1.4 (0.1) 72.7 (14.2) 1.4 (0.1) Factors.27.68 54.3 (12.2) 19.6 (0.5) 82.8 (21.2) 1.4 (0.0) 83.3 (20.6) 1.4 (0.1)
NoTears RESIT CCDr Network.p.s⋆ d Time d Time d Time Dsep.6.6 4.9 (3.1) 3.5 (1.3) 3.1 (2.5) 3.4 (0.2) 3.4 (1.4) 3.5 (0.6) Asia.8.8 7.5 (3.2) 5.1 (3.2) 6.1 (3.4) 7.1 (0.4) 2.1 (2.7) 4.5 (0.6) Bowling.9.11 6.0 (3.6) 5.5 (1.8) 7.7 (4.7) 10.0 (0.3) 8.0 (3.7) 4.5 (0.8) InsuranceSmall.15.25 18.1 (6.2) 16.7 (7.4) 24.1 (6.2) 67.3 (1.4) 18.1 (4.0) 4.3 (1.0) Rain.14.18 13.8 (5.5) 13.2 (4.8) 18.0 (7.9) 51.7 (1.4) 8.5 (3.5) 4.6 (2.0) Cloud.16.19 17.2 (4.9) 15.0 (6.5) 20.8 (6.0) 86.2 (4.4) 5.5 (3.3) 3.9 (0.7) -
Funnel.18.18 12.7 (5.6) 11.1 (3.3) 17.6 (6.1) 110.3 (2.1) 4.9 (3.0) 4.0 (0.6) Galaxy.20.22 18.8 (7.1) 19.8 (5.3) 23.6 (7.5) 169.0 (4.7) 6.4 (2.6) 3.9 (0.6) Insurance.27.52 42.1 (12.6) 61.1 (16.1) 103.4 (10.2) 497.3 (9.8) 34.4 (7.1) 4.1 (0.6) Factors.27.68 46.8 (14.1) 140.9 (51.7) 119.4 (9.3) 489.2 (11.1) 72.1 (7.7) 4.3 (0.6)
CAM MIP (super) MIP (moral) Network.p.s⋆ d Time d Time d Time Dsep.6.6 2.8 (1.9) 10.8 (0.7) 1.2 (1.6) 4.9 (0.7) 1.1 (1.6) 4.7 (0.5) Asia.8.8 0.3 (0.7) 16.1 (1.3) 0.5 (0.9) 5.7 (1.2) 0.3 (0.8) 4.5 (0.8) Bowling.9.11 2.9 (3.5) 16.5 (1.8) 1.1 (1.5) 15.0 (19.4) 0.9 (1.3) 5.3 (1.1) InsuranceSmall.15.25 11.3 (5.1) 46.3 (4.4) 4.0 (2.8) 681.8 (326.0) 3.2 (3.0) 31.2 (40.3) Rain.14.18 6.1 (6.0) 45.8 (3.7) 1.9 (3.1) 297.7 (324.0) 0.8 (2.6) 11.6 (7.9) Cloud.16.19 3.0 (2.0) 57.0 (5.8) 2.4 (2.1) 133.6 (246.1) 0-
.9 (1.5) 6.8 (0.9) Funnel.18.18 0.2 (0.6) 51.2 (4.8) 1.4 (1.1) 511.5 (452.7) 0.5 (0.8) 11.5 (6.9) Galaxy.20.22 1.1 (1.6) 67.4 (5.4) 2.0 (1.8) 594.5 (500.6) 0.7 (1.3) 8.0 (0.9) Insurance.27.52 12.8 (6.6) 92.2 (6.9) 5.9 (4.3) 1631.8 (1.4) 3.1 (2.7) 718.0 (593.5) Factors.27.68 55.4 (11.4) 112.9 (6.4) 25.8 (10.7) 1633.6 (1.9) 11.2 (9.3) 1627.8 (0.5)
Table 1. The full performance of MIP and baseline methods for the heteroscedastic scheme with μ0 = 1. The true functions are f ⋆
kj(x) = (sin(x) − E[sin(Xk)] + cos(x) − E[cos(Xk)])/2, and splines are used as basis functions. Each entry gives the mean value and standard deviation in parenthesis over 30 independent trials. The EqVar (TD) and EqVar (BU) refer to the top-down and bottom-up version of EqVar, respectively. The MIP (super) and MIP (moral) refer to the MIP using the estimated super-structure and the true moral graph, respectively.

47
NPVAR EqVar (TD) EqVar (BU) Network.p.s⋆ d Time d Time d Time Dsep.6.6 6.7 (3.5) 0.3 (0.0) 6.0 (3.3) 0.2 (0.0) 6.2 (3.5) 0.2 (0.0) Asia.8.8 8.4 (3.8) 0.6 (0.0) 6.7 (3.3) 0.3 (0.0) 6.8 (3.2) 0.3 (0.0) Bowling.9.11 11.0 (4.3) 0.8 (0.1) 7.7 (4.0) 0.4 (0.0) 8.5 (4.6) 0.3 (0.0) InsuranceSmall.15.25 27.7 (8.0) 3.4 (0.1) 26.5 (8.0) 0.7 (0.0) 27.4 (7.6) 0.7 (0.0) Rain.14.18 22.3 (6.3) 2.8 (0.2) 18.3 (6.1) 0.7 (0.1) 18.0 (5.5) 0.6 (0.1) Cloud.16.19 26.0 (8.4) 4.2 (0.2) 22.1 (5.3) 0.7 (0.0) 21.9 (5.8) 0.8 (-
0.1) Funnel.18.18 23.3 (7.8) 6.2 (0.5) 15.3 (5.0) 0.9 (0.1) 15.8 (5.9) 0.9 (0.1) Galaxy.20.22 30.0 (7.5) 7.8 (0.2) 20.1 (5.1) 1.0 (0.1) 20.9 (4.7) 1.0 (0.1) Insurance.27.52 63.9 (10.1) 18.8 (0.8) 69.8 (10.2) 1.3 (0.1) 70.2 (11.5) 1.4 (0.1) Factors.27.68 54.8 (10.7) 21.5 (0.8) 81.7 (22.9) 1.5 (0.1) 82.4 (22.3) 1.6 (0.1)
NoTears RESIT CCDr Network.p.s⋆ d Time d Time d Time Dsep.6.6 5.5 (4.0) 4.3 (2.1) 3.4 (2.9) 3.4 (0.2) 3.7 (2.1) 4.1 (1.6) Asia.8.8 5.9 (3.7) 5.5 (3.2) 6.1 (4.1) 7.3 (0.4) 2.6 (4.1) 4.1 (0.8) Bowling.9.11 5.9 (4.1) 6.4 ( 8.0) 10.0 (4.8) 9.0 (0.3) 10.6 (3.9) 3.6 (0.5) InsuranceSmall.15.25 20.5 (6.8) 18.9 (6.8) 29.0 (7.4) 51.7 (2.0) 18.4 (3.9) 3.7 (0.5) Rain.14.18 14.1 (5.7) 12.6 (5.6) 19.1 (6.0) 39.0 (2.7) 9.5 (3.3) 3.5 (0.6) Cloud.16.19 19.5 (4.5) 15.5 (7.4) 21.2 (7.5) 69.0 (1.5) 4.3 (3.1) 3.9 (0.6-
) Funnel.18.18 11.5 (5.0) 10.0 (3.8) 21.3 (8.7) 114.7 (9.0) 4.7 (2.7) 5.0 (2.6) Galaxy.20.22 17.0 (5.8) 14.9 (6.0) 25.3 (7.6) 170.4 (4.7) 5.4 (3.1) 4.1 (0.5) Insurance.27.52 38.1 (9.7) 72.1 (29.7) 110.6 (15.4) 470.7 (29.4) 36.6 (5.0) 4.1 (0.5) Factors.27.68 46.5 (12.9) 196.3 (100.8) 116.0 (11.0) 535.1 (20.7) 71.3 (6.4) 4.6 (1.0)
CAM MIP (super) MIP (moral) Network.p.s⋆ d Time d Time d Time Dsep.6.6 3.0 (2.1) 11.5 (1.4) 0.8 (1.6) 5.2 (1.0) 0.7 (1.6) 4.8 (0.6) Asia.8.8 0.0 (0.0) 15.5 (1.4) 0.6 (0.8) 5.2 (0.9) 0.3 (0.6) 4.1 (0.3) Bowling.9.11 5.7 (5.2) 15.4 (1.5) 1.1 (2.6) 47.3 (91.3) 1.0 (2.9) 6.4 (2.1) InsuranceSmall.15.25 14.3 (4.1) 41.6 (4.7) 6.4 (4.7) 861.6 (160.5) 4.2 (4.1) 46.2 (37.6) Rain.14.18 6.3 (6.4) 40.4 (4.4) 1.7 (1.8) 460.1 (344.3) 0.9 (1.5) 17.0 (11.1) Cloud.16.19 3.7 (2.3) 53.0 (4.9) 2.6 (2.0) 196.5 (319.6) -
1.2 (1.5) 7.1 (1.6) Funnel.18.18 0.2 (0.7) 50.7 (6.0) 1.4 (1.3) 609.6 (488.7) 0.5 (1.0) 12.9 (7.3) Galaxy.20.22 1.6 (2.1) 66.9 (4.3) 2.4 (1.8) 683.4 (542.9) 0.7 (1.0) 9.1 (1.7) Insurance.27.52 17.4 (5.6) 94.4 (6.5) 7.6 (4.9) 1631.6 (1.1) 4.1 (3.7) 1173.0 (573.2) Factors.27.68 63.4 (11.1) 117.0 (12.8) 30.4 (10.7) 1633.2 (2.0) 16.2 (7.7) 1627.6 (0.7)
Table 2. The full performance of MIP and baseline methods for the heteroscedastic scheme with μ0 = 2. The true functions are f ⋆
kj(x) = (sin(x) − E[sin(Xk)] + cos(x) − E[cos(Xk)])/2, and splines are used as basis functions. Each entry gives the mean value and standard deviation in parenthesis over 30 independent trials. The EqVar (TD) and EqVar (BU) refer to the top-down and bottom-up version of EqVar, respectively. The MIP (super) and MIP (moral) refer to the MIP using the estimated super-structure and the true moral graph, respectively.

48
NPVAR EqVar (TD) EqVar (BU) Network.p.s⋆ d Time d Time d Time Dsep.6.6 4.8 (3.4) 0.3 (0.0) 4.0 (3.1) 0.2 (0.0) 3.9 (3.1) 0.2 (0.0) Asia.8.8 8.3 (3.7) 0.6 (0.0) 6.8 (2.9) 0.3 (0.0) 6.8 (3.2) 0.3 (0.0) Bowling.9.11 11.3 (4.6) 0.8 (0.1) 7.8 (3.0) 0.4 (0.0) 8.0 (2.8) 0.4 (0.0) InsuranceSmall.15.25 24.6 (6.9) 4.1 (0.1) 24.2 (5.8) 0.9 (0.1) 24.2 (5.3) 0.9 (0.1) Rain.14.18 21.1 (8.5) 3.5 (0.1) 18.2 (6.2) 0.9 (0.1) 18.3 (6.3) 0.8 (0.1) Cloud.16.19 21.7 (7.8) 4.5 (0.2) 20.6 (6.3) 0.8 (0.1) 21.0 (6.6) 0.9 (-
0.1) Funnel.18.18 25.0 (5.8) 5.8 (0.2) 17.3 (5.5) 0.9 (0.1) 17.0 (5.8) 0.9 (0.1) Galaxy.20.22 33.1 (7.9) 7.8 (0.3) 21.6 (5.0) 1.0 (0.1) 22.3 (5.3) 1.0 (0.1) Insurance.27.52 58.0 (10.4) 19.7 (1.1) 66.8 (10.0) 1.4 (0.1) 68.0 (8.7) 1.4 (0.1) Factors.27.68 46.1 (8.4) 19.6 (0.5) 67.5 (12.6) 1.4 (0.1) 67.0 (13.3) 1.4 (0.1)
NoTears RESIT CCDr Network.p.s⋆ d Time d Time d Time Dsep.6.6 4.2 (2.9) 4.2 (3.1) 5.0 (3.0) 3.4 (0.3) 3.6 (1.5) 3.9 (0.9) Asia.8.8 5.6 (3.4) 5.9 (2.5) 7.0 (2.8) 7.2 (0.4) 2.2 (2.7) 3.8 (0.7) Bowling.9.11 5.0 (4.3) 6.1 (3.0) 9.3 (4.8) 9.8 (0.4) 10.9 (4.0) 4.0 (0.7) InsuranceSmall.15.25 16.3 (4.6) 20.2 (6.5) 28.5 (7.7) 66.3 (1.2) 18.2 (3.6) 3.9 (0.5) Rain.14.18 12.6 (5.8) 11.8 (3.9) 22.3 (8.4) 50.4 (1.1) 10.1 (2.5) 3.6 (0.4) Cloud.16.19 16.0 (5.5) 13.5 (4.4) 21.4 (7.7) 73.4 (3.2) 4.1 (2.5) 7.3 (1.2)-
 Funnel.18.18 11.2 (5.3) 9.6 (4.1) 20.7 (7.6) 109.7 (2.7) 4.0 (2.4) 3.9 (0.5) Galaxy.20.22 18.4 (7.4) 19.3 (9.0) 28.4 (8.7) 167.8 (3.7) 7.5 (4.0) 4.5 (0.9) Insurance.27.52 33.7 (7.7) 91.7 (49.2) 113.7 (15.8) 511.1 (24.8) 32.7 (7.3) 8.8 (2.1) Factors.27.68 33.1 (8.2) 182.0 (79.3) 118.5 (10.2) 487.5 (6.7) 69.7 (5.5) 4.0 (0.6)
CAM MIP (super) MIP (moral) Network.p.s⋆ d Time d Time d Time Dsep.6.6 2.9 (1.9) 11.0 (0.8) 1.4 (2.0) 4.4 (0.7) 1.5 (2.2) 4.1 (0.5) Asia.8.8 0.1 (0.4) 14.8 (0.9) 0.4 (0.8) 5.2 (0.9) 0.2 (0.6) 4.1 (0.4) Bowling.9.11 7.4 (3.9) 17.2 (1.7) 1.5 (2.8) 46.6 (80.4) 1.1 (2.8) 7.3 (4.4) InsuranceSmall.15.25 15.8 (5.2) 48.7 (5.1) 6.6 (5.9) 858.9 (176.1) 5.3 (5.7) 69.5 (48.7) Rain.14.18 8.0 (6.2) 45.6 (4.7) 1.8 (3.4) 569.0 (356.0) 1.3 (3.4) 22.4 (17.5) Cloud.16.19 4.4 (1.7) 55.3 (4.7) 2.4 (2.0) 172.1 (279.7) -
1.1 (1.5) 8.0 (1.5) Funnel.18.18 0.2 (0.6) 51.2 (5.5) 1.9 (1.4) 675.3 (447.5) 0.8 (1.1) 10.9 (1.5) Galaxy.20.22 3.2 (3.0) 68.9 (4.5) 1.6 (1.8) 696.1 (557.5) 0.4 (0.9) 11.3 (7.9) Insurance.27.52 20.9 (8.6) 97.0 (7.6) 10.2 (6.4) 1632.4 (1.4) 6.9 (4.8) 1382.3 (456.5) Factors.27.68 59.8 (7.1) 115.2 (6.5) 34.1 (9.1) 1633.2 (2.0) 16.4 (8.0) 1627.8 (0.8)
Table 3. The full performance of MIP and baseline methods for the heteroscedastic scheme with μ0 = 3. The true functions are f ⋆
kj(x) = (sin(x) − E[sin(Xk)] + cos(x) − E[cos(Xk)])/2, and splines are used as basis functions. Each entry gives the mean value and standard deviation in parenthesis over 30 independent trials. The EqVar (TD) and EqVar (BU) refer to the top-down and bottom-up version of EqVar, respectively. The MIP (super) and MIP (moral) refer to the MIP using the estimated super-structure and the true moral graph, respectively.

49
NPVAR EqVar (TD) EqVar (BU) Network.p.s⋆ d Time d Time d Time Dsep.6.6 0.7 (1.3) 0.3 (0.0) 0.7 (1.3) 0.3 (0.1) 0.7 (1.4) 0.3 (0.1) Asia.8.8 0.6 (1.1) 0.7 (0.0) 0.5 (1.0) 0.4 (0.0) 0.5 (0.7) 0.4 (0.0) Bowling.9.11 0.8 (1.7) 1.0 (0.1) 0.4 (0.8) 0.5 (0.1) 0.7 (1.4) 0.5 (0.1) InsuranceSmall.15.25 2.5 (3.4) 3.7 (0.2) 9.4 (2.9) 0.8 (0.0) 9.8 (2.8) 0.8 (0.1) Rain.14.18 4.0 ( 4.5) 3.0 (0.2) 3.2 (2.8) 0.7 (0.0) 3.9 (2.5) 0.7 (0.1) Cloud.16.19 2.2 (3.0) 4.4 (0.3) 3.7 (2.4) 0.8 (0.1) 5.5 (4.5) 0.9 (0.1) Funn-
el.18.18 2.9 (5.4) 7.0 (0.3) 2.1 (1.3) 1.1 (0.1) 2.2 (1.4) 1.1 (0.1) Galaxy.20.22 3.0 (4.3) 7.9 (0.6) 4.2 (4.3) 1.0 (0.1) 4.5 (3.8) 1.0 (0.1) Insurance.27.52 16.5 (9.4) 21.2 (1.6) 36.0 (5.9) 1.6 (0.1) 37.3 (5.9) 1.6 (0.2) Factors.27.68 22.9 (5.2) 21.0 (1.0) 55.0 (6.1) 1.6 (0.1) 53.7 (6.9) 1.6 (0.2)
NoTears RESIT CCDr Network.p.s⋆ d Time d Time d Time Dsep.6.6 2.0 (2.0) 3.8 (2.1) 5.5 (3.6) 4.0 (0.3) 3.7 (1.1) 4.7 (1.2) Asia.8.8 1.0 (1.8) 4.7 (1.9) 8.4 (3.4) 8.7 (0.3) 2.6 (2.8) 3.4 (0.5) Bowling.9.11 0.0 (0.0) 5.0 (1.7) 12.3 (5.5) 11.7 (0.6) 11.5 (4.2) 4.7 (1.0) InsuranceSmall.15.25 11.2 (3.8) 34.2 (17.5) 36.3 (7.7) 56.9 (2.8) 19.1 (3.5) 3.7 (0.6) Rain.14.18 5.8 (3.5) 19.0 (11.4) 25.1 (10.1) 44.1 (2.6) 9.3 (1.8) 5.8 (2.5) Cloud.16.19 5.8 (3.7) 16.3 (8.4) 26.3 (7.9) 75.1 (1.7) 3.9 (1.9) 4.1 (0.-
6) Funnel.18.18 1.7 (1.7) 11.0 (5.1) 25.2 (7.4) 134.7 (4.8) 3.1 (2.3) 3.7 (0.5) Galaxy.20.22 5.0 (3.8) 22.0 (9.5) 31.3 (6.2) 170.0 (14.5) 8.3 (3.9) 5.1 (0.8) Insurance.27.52 19.3 (6.7) 107.8 (51.1) 120.5 (14.7) 533.8 (15.2) 32.1 (5.0) 4.4 (0.6) Factors.27.68 17.1 (9.9) 182.4 (41.0) 118.7 (9.9) 522.6 (23.8) 63.2 (3.4) 5.6 (1.3)
CAM MIP (super) MIP (moral) Network.p.s⋆ d Time d Time d Time Dsep.6.6 4.9 (0.6) 11.4 (0.8) 0.0 (0.0) 0.9 (0.6) 0.0 (0.0) 0.4 (0.5) Asia.8.8 0.3 (0.8) 15.9 (0.9) 0.0 (0.0) 1.1 (0.7) 0.1 (0.3) 0.7 (0.6) Bowling.9.11 12.1 (6.6) 18.7 (1.3) 0.0 (0.2) 2.3 (1.5) 0.1 (0.3) 1.6 (0.5) InsuranceSmall.15.25 23.6 (4.4) 47.6 (3.6) 0.2 (0.5) 180.3 (280.8) 0.2 (0.5) 4.2 (3.2) Rain.14.18 16.3 (4.4) 41.6 (2.1) 0.0 (0.2) 40.5 (114.3) 0.1 (0.3) 3.7 (0.7) Cloud.16.19 4.2 (1.6) 53.7 (2.7) 0.3 (0.8) 58.4 (111.8) 0.2 (0-
.7) 3.0 (0.8) Funnel.18.18 0.4 (1.1) 56.0 (4.2) 0.1 (0.4) 57.2 (195.8) 0.2 (0.6) 3.3 (1.2) Galaxy.20.22 9.9 (6.0) 76.3 (5.0) 0.0 (0.2) 271.2 (325.2) 0.1 (0.3) 4.7 (2.0) Insurance.27.52 33.9 (6.4) 103.8 (9.2) 1.0 (1.0) 1625.4 (1.5) 0.3 (0.5) 606.9 (598.2) Factors.27.68 61.3 (5.8) 131.0 (7.2) 2.8 (2.3) 1626.1 (0.8) 0.7 (0.9) 1130.9 (633.6)
Table 4. The full performance of MIP and baseline methods for the homoscedastic scheme. The true functions are f ⋆
kj(x) = (sin(x) − E[sin(Xk)] + cos(x) − E[cos(Xk)])/2, and splines are used as basis functions. Each entry gives the mean value and standard deviation in parenthesis over 30 independent trials. The EqVar (TD) and EqVar (BU) refer to the top-down and bottom-up version of EqVar, respectively. The MIP (super) and MIP (moral) refer to the MIP using the estimated super-structure and the true moral graph, respectively.

50
NPVAR EqVar (TD) EqVar (BU) Network.p.s⋆ d Time d Time d Time Dsep.6.6 0.6 (0.8) 0.3 (0.0) 4.3 (1.1) 0.2 (0.0) 4.3 (1.1) 0.2 (0.0) Asia.8.8 0.7 (0.9) 0.6 (0.0) 6.2 (2.5) 0.3 (0.0) 7.0 (2.9) 0.3 (0.0) Bowling.9.11 0.8 (1.1) 0.8 (0.0) 2.9 (1.0) 0.4 (0.0) 2.9 (0.9) 0.4 (0.0) InsuranceSmall.15.25 5.2 (3.1) 3.3 (0.1) 37.2 (2.9) 0.7 (0.1) 37.0 (3.0) 0.7 (0.0) Rain.14.18 4.7 (2.3) 2.8 (0.1) 32.9 (2.9) 0.6 (0.1) 33.2 (3.4) 0.6 (0.0)
NoTears RESIT CCDr Network.p.s⋆ d Time d Time d Time Dsep.6.6 1.3 (0.6) 4.5 (1.8) 1.9 (2.4) 3.5 (0.2) 4.4 (0.7) 3.6 (0.5) Asia.8.8 1.8 (0.6) 7.2 (5.2) 3.4 (3.4) 7.3 (0.3) 1.7 (1.4) 4.2 (0.5) Bowling.9.11 0.8 (0.7) 11.7 (5.4) 8.2 (4.5) 10.2 (0.4) 12.0 (7.9) 6.5 (3.3) InsuranceSmall.15.25 23.0 (2.4) 33.9 (16.8) 34.6 (6.3) 56.9 (1.3) 29.9 (1.9) 3.6 (0.4) Rain.14.18 19.9 (2.8) 51.7 (46.9) 16.8 (6.1) 43.7 (1.9) 21.4 (3.3) 3.6 (0.5)
CAM MIP (super) MIP (moral) Network.p.s⋆ d Time d Time d Time Dsep.6.6 4.7 (2.2) 7.9 (0.4) 0.1 (0.4) 1.5 (1.2) 0.1 (0.3) 0.8 (0.8) Asia.8.8 0.2 (0.5) 9.7 (0.5) 0.1 (0.3) 35.8 (123.5) 0.7 (0.8) 34.1 (121.3) Bowling.9.11 0.1 (0.3) 10.9 (0.4) 0.3 (0.6) 0.7 (0.8) 0.1 (0.3) 1.8 (1.5) InsuranceSmall.15.25 11.8 (3.7) 24.9 (1.7) 1.8 (2.2) 438.8 (419.8) 2.4 (2.1) 64.6 (227.9) Rain.14.18 7.9 (5.6) 21.1 (1.3) 0.7 (1.3) 279.5 (363.3) 1.5 (1.5) 61.7 (212.2)
Table 5. The full performance of MIP and baseline methods for the homoscedastic scheme. The true functions are f ⋆
kj(x) = sin(x + sin(x)) − E[sin(Xk + sin(Xk))], and radial basis functions are used as basis functions. Each entry gives the mean value and standard deviation in parenthesis over 30 independent trials. The EqVar (TD) and EqVar (BU) refer to the top-down and bottom-up version of EqVar, respectively. The MIP (super) and MIP (moral) refer to the MIP using the estimated super-structure and the true moral graph, respectively.

51
NPVAR EqVar (TD) EqVar (BU) Network.p.s⋆ d Time d Time d Time Dsep.6.6 1.8 (2.4) 0.3 (0.0) 4.1 (2.3) 0.2 (0.0) 4.0 (2.1) 0.2 (0.0) Asia.8.8 4.1 (3.9) 0.6 (0.0) 8.6 (2.7) 0.3 (0.0) 8.2 (2.7) 0.3 (0.0) Bowling.9.11 4.8 (5.0) 0.9 (0.1) 5.7 (3.4) 0.4 (0.0) 5.7 (3.4) 0.4 (0.0) InsuranceSmall.15.25 15.2 (7.3) 3.4 (0.2) 38.0 (6.3) 0.7 (0.1) 38.7 (6.4) 0.7 (0.0) Rain.14.18 13.2 (6.7) 2.9 (0.1) 30.2 (3.9) 0.6 (0.0) 30.9 (3.5) 0.6 (0.0)
NoTears RESIT CCDr Network.p.s⋆ d Time d Time d Time Dsep.6.6 1.1 (0.9) 4.3 (3.0) 2.2 (2.8) 3.5 (0.3) 4.3 (2.4) 4.4 (1.3) Asia.8.8 4.0 (2.8) 5.8 (4.5) 2.7 (2.7) 7.2 (0.4) 2.7 (1.8) 3.6 (0.7) Bowling.9.11 2.3 (2.1) 10.5 (9.0) 6.8 (4.2) 10.2 (0.4) 9.5 (6.3) 3.5 (0.5) InsuranceSmall.15.25 21.2 (5.4) 21.7 (8.8) 30.9 (5.7) 56.2 (1.7) 28.6 (3.7) 3.8 (0.6) Rain.14.18 16.6 (3.6) 14.7 (5.9) 14.7 (5.2) 43.0 (1.2) 20.2 (3.3) 4.3 (0.7)
CAM MIP (super) MIP (moral) Network.p.s⋆ d Time d Time d Time Dsep.6.6 2.6 (2.8) 13.7 (3.1) 2.2 (2.0) 252.3 (230.2) 1.9 (1.9) 232.8 (218.0) Asia.8.8 0.8 (1.3) 9.6 (0.6) 0.6 (1.5) 420.8 (347.5) 0.3 (0.7) 340.5 (334.9) Bowling.9.11 0.1 (0.4) 10.5 (0.4) 0.2 (0.4) 663.3 (318.7) 0.2 (0.4) 714.8 (317.5) InsuranceSmall.15.25 6.8 (3.1) 22.3 (2.2) 4.8 (1.7) 756.1 (654.2) 5.2 (2.0) 828.3 (575.3) Rain.14.18 5.7 (4.6) 21.7 (2.2) 2.4 (2.4) 827.8 (619.7) 2.0 (2.0) 782.9 (598.3)
Table 6. The full performance of MIP and baseline methods for the heteroscedastic scheme with μ0 = 2. The true functions are f ⋆
kj(x) = sin(x + sin(x)) − E[sin(Xk + sin(Xk))], and radial basis functions are used as basis functions. Each entry gives the mean value and standard deviation in parenthesis over 30 independent trials. The EqVar (TD) and EqVar (BU) refer to the top-down and bottom-up version of EqVar, respectively. The MIP (super) and MIP (moral) refer to the MIP using the estimated super-structure and the true moral graph, respectively.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:42.774Z
- **Text Length:** 141760 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 51 of 51
