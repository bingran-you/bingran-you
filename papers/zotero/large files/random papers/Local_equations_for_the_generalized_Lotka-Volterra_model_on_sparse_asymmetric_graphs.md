# PDF Document: Machado et al. - 2025 - Local equations for the generalized Lotka-Volterra model on sparse asymmetric graphs.pdf

**File Path:** Machado et al. - 2025 - Local equations for the generalized Lotka-Volterra model on sparse asymmetric graphs.pdf

**Processed Date:** 2026-02-10T18:16:26.260Z

**File Size:** 1225.84 KB

**Total Pages:** 38

**Extracted Pages:** 38

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3644

**Title:** Local equations for the generalized Lotka-Volterra model on sparse asymmetric graphs

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Local equations for the generalized Lotka-Volterra model on sparse asymmetric graphs
D. Machado,1, 2, 3 P. Valigi,1 T. Tonolo,4, 5 and M. C. Angelini1, 6
1Dipartimento di Fisica, Sapienza Universit`a di Roma, P.le Aldo Moro 5, 00185 Rome, Italy 2Group of Complex Systems and Statistical Physics and Department of Theoretical Physics. Physics Faculty, University of Havana. CP10400, La Habana, Cuba 3CNR - Nanotec, unita` di Roma, P.le Aldo Moro 5, 00185 Rome, Italy∗ 4Gran Sasso Science Institute, Viale F. Crispi 7, 67100 L’Aquila, Italy 5INFN-Laboratori Nazionali del Gran Sasso, Via G. Acitelli 22, 67100 Assergi (AQ), Italy 6Istituto Nazionale di Fisic-
a Nucleare, Sezione di Roma I, P.le A. Moro 5, 00185 Rome, Italy (Dated: November 24, 2025)
Real ecosystems are characterized by sparse and asymmetric interactions, posing a major challenge to theoretical analysis. We introduce a new method to study the generalized Lotka-Volterra model with stochastic dynamics on sparse graphs. By deriving local Fokker-Planck equations and employing a mean-field closure, we can efficiently compute stationary states for both symmetric and asymmetric interactions. We validate our approach by comparing the results with the direct integration of the dynamica-
l equations and by reproducing known results and, for the first time, we map the phase diagram for sparse asymmetric networks. Our framework provides a versatile tool for exploring stability in realistic ecological communities and can be generalized to applications in different contexts, such as economics and evolutionary game theory.
I. INTRODUCTION
The stability of complex ecosystems and the rules governing species coexistence present a central puzzle in theoretical ecology. The generalized Lotka-Volterra (gLV) model has been a cornerstone of this inquiry, also related to models used in evolutionary game theory and in economic theory [1–3]. Recently, the random, symmetric, and dense version of the gLV model has been analyzed through the lens of equilibrium statistical mechanics. This approach has yielded profound insights, revealing how the -
phases of single equilibrium, unbounded growth, and multiple equilibria are dictated by a handful of macroscopic parameters: the mean μ and variance σ of inter-species interactions, and the intensity of demographic noise T . A key finding is that densely connected networks with random symmetric interactions can exhibit a phase of multiple equilibria at high interaction heterogeneity [4]. However, real ecological networks are generally neither dense nor symmetric. In real ecosystems, the interactio-
ns between two species are almost always asymmetric, the existence of predator-prey couples of species being just an example. For this reason, some other works have tried to go beyond the assumption of symmetry [5–14]. Moreover, in real ecosystems, a species typically interacts only with a few others [15, 16]. In the last years, Random Matrix Theory (RMT) results [17, 18] have shown that the spectra of sparse random graphs exhibit qualitative differences from the dense case, suggesting that this m-
ay have implications for the stability of ecological models defined on sparse networks. Accordingly, it would be interesting to study the properties of the gLV
∗ david.machado@uniroma1.it
model on graphs with finite connectivity. Unfortunately, in this case, the methods used for fully-connected systems [4, 7] cannot be applied, in particular because no central-limit-type arguments hold.
In a very recent paper, for the first time, the equilibrium properties of the symmetric gLV model on a sparse graph were analyzed [19] using the so-called BeliefPropagation (BP) cavity method. This can, however, be used only when an equilibrium measure exists, preventing its implementation in the case of asymmetric interactions. In general, the description of out-of-equilibrium systems has been even more elusive, and the available techniques deal only with specific limits. When species interact th-
rough a fully-connected network [20], we can use Dynamical Mean-Field Theory (DMFT) to describe the temporal evolution of dynamic observables, which has also been extended to non-Gaussian disorder in the interactions [21]. Other generalizations include the limit of very small connectivity [21], the limit of a large connectivity that grows sublinearly with the number of species in the graph [22], and the case of unidirectional interactions [23]. However, until now, there has been no way to systemat-
ically analyze gLV models with sparse asymmetric interactions.
In this work, we bridge this gap by analyzing both symmetric and asymmetric, quenched-disordered sparse interactions. We go beyond equilibrium statistical mechanics, introducing a new method for the evaluation of the stationary probability distribution for the stochastic differential equations (SDE) that describe the evolution of the species abundance. We start from the usual formulation of the stochastic dynamics in terms of an SDE and derive the equivalent Fokker-Planck equation for the associat-
ed time-dependent probability densities. However, solving the full system of partial differential equations defined on the whole graph in a high-dimensional space is a cumbersome task. To overcome this difficulty, we derive
arXiv:2511.17499v1 [q-bio.PE] 21 Nov 2025

2
local closures that allow us to obtain tractable relations for the stationary distributions. The main idea of a local closure is to propose an ansatz for the probability densities, in general involving some suitable factorizations that exploit the properties of the interaction graph. It has been used successfully in several contexts, such as the study of epidemics spreading on networks [24–27], algorithmic dynamics in hard combinatorial optimization problems [28, 29], spin-glass dynamics in random-
 graphs [30], or the dynamics of the voter model [31]. As far as we know, this work constitutes the first application of local closures to Fokker-Planck equations in sparse graphs. The new approximate descriptions derived here are what we call local Fokker-Planck equations. We will validate our method by applying it to different situations, comparing its prediction with the results obtained from the direct numerical integration of the SDE and recovering known results from previous literature. We a-
lso show how, starting from the general equations in the asymmetric case, one can recover the BP equations when only symmetric couplings are considered. The rest of the manuscript is organized as follows. In Section II we introduce the generalized Lotka-Volterra equations and the underlying networks that we will analyze. In Section III, we present the Fokker-Planck equations that describe the evolution of the probability distributions of the species abundances in time. These are complicated global-
 equations, which in general are not solvable. For this reason, in Section III A we introduce a new local closure, corresponding to a mean-field approximation for the dynamics, called Individual Based Mean Field (IBMF). Our procedure leads to the main local solvable Fokker-Planck equations that we discuss in this article. In Section III B we go beyond IBMF, introducing a more refined closed local Fokker-Planck equation that we call Pair Based Mean Field (PBMF), showing that the BP equations introd-
uced in Ref. [19] correspond to the stationary solution of PBMF in the symmetric case. We validate our new methods in Section IV, where we give details on the numerical implementation of IBMF both at null and finite temperatures. We compare the stationary abundances obtained with IBMF with those obtained from simulations in the presence of thermal noise for a single random graph. The results are a useful example to emphasize the strengths of IBMF, and to also point out its limitations. Then, we pr-
oceed to apply IBMF to three different scenarios. In Subsection IV A, we study undirected graphs with asymmetric interactions at null temperature, obtaining the corresponding phase diagram in the plane (μ, σ) for the first time, as far as we know. We thus generalize the results for the fullyconnected asymmetric case in Ref. [5] and for the sparse case with symmetric interactions in Ref. [19]. In Subsection IV B, we apply the IBMF closure to directed graphs with null variance in the couplings and n-
ull temperature, confirming and extending the results of Ref. [32], which were obtained there with a completely different method.
In Subsection IV C we move back to undirected graphs, but this time with symmetric couplings at finite T . This setting helps us study the performance of IBMF in the presence of thermal noise in a systematic way. We compare the results with Ref. [19], where the BP method is used to exactly solve the model. We identify the limitations of IBMF, which stops converging to a single equilibrium as soon as the exact species abundances found by BP start developing a non-Gaussian distribution tilted toward-
s extinctions. Finally, in Section V, we draw our conclusions.
II. THE MODEL
Let us introduce the generalized Lotka-Volterra (gLV) equations that we will study in the rest of this article. They describe the dynamics of an ecosystem with N interacting species. To each of them, we associate a positive real variable ni, interpreted as the abundance of the i-th species, with i = 1, . . . , N . In general, a single species will not interact with all the others, but instead with a subset of the species known as the neighborhood of i. The interactions occur in a graph G(V, E), wh-
ere V is the set of vertices, each representing a species, and E is the set of edges. To keep the definitions as general as needed, for now the reader should think of G as a directed graph. If the presence of species i influences the growth of species j, we add the directed edge i → j. It is possible to have i → j in the graph without having the edge in the opposite direction (j → i). We define the in-neighborhood ∂i− of i as the set of in-neighbors j such that the edge j → i exists in the graph. -
For simplicity, graphs G with selfloops will not be considered here The gLV equation for the abundance of the i-th species can be written as:
dni
dt = ri
Ki
ni(Ki − ni − ∑
j∈∂i−
αijnj) + ξi(t) + λ , (1)
where ni ≥ 0 is the abundance of the i-th species, and the real parameters ri and Ki are known as the intrinsic growth rate and carrying capacity, respectively. To simplify the setting, we will take ri = Ki = 1 in what follows, but the reader will find no difficulties in generalizing our results to consider other values of these constants. The term ξi(t) in Eq. (1) is a noise term, which has average ⟨ξi(t)⟩ = 0 and second moments ⟨ξi(t1) ξj(t2)⟩ = 2 T ni δi,j δ(t1 − t2), where T is known as temper-
ature of the noise. This thermal noise is referred to as demographic [4, 33–36] and accounts for death and birth processes. The parameter λ, known as immigration rate, acts as a small source term that allows extinct species to come back should conditions become favorable to them [20, 37]. Its effect will be clarified later. The couplings αij are real numbers that set the type and strength of the interactions. The value of αij encodes

3
the way that species j affects the evolution of species i, and therefore corresponds to the edge j → i on the graph. In the case where for all j ∈ ∂i− we also have the edge i → j, the graph is known as undirected. Having αij and αji simultaneously positive means that the two species i and j have a competitive interaction, where the presence of individuals of species j is prejudicial for the individuals of species i, and vice versa. When they are both negative, we have a mutualistic interaction, an-
d the species are beneficial to each other. On the other hand, when the interaction is positive for one species and negative for the other, we have a predator-prey or antagonistic interaction. Finally, in the presence of directed interactions, we can also have commensalism and amensalism, whereby one species benefits or is harmed by the interaction, while the other is unaffected.
Given that the edge j → i already exists in the graph, we can add noise to the interactions by drawing αij at random from some probability distribution. Following many other works [19, 20, 38], we choose the Gaussian distribution αij ∼ N (μ, σ), with mean μ and variance
σ2. The reader should note that, as a particular case, we can set the interaction strengths αij to be homogeneous by choosing σ = 0. In that case, we get αij = μ for all the edges j → i.
Our methodology, derived below in Section III, applies to graphs with directed and/or undirected interactions. We demonstrate this by including results for three different scenarios in Section IV. In Subsection IV B we study a case where, with high probability, the edges j → i and i → j are not simultaneously present. We follow the same model used in Ref. [39] to study the gLV dynamics with asymmetric interactions. To construct the network, for each species i we select the incoming edges by going -
over all possible j ̸= i, and adding the edge j ̸= i with probability c/N , where c > 0. The in-neighbors of i are chosen independently of the in-neighbors of j, and in the limit when the number of species is large, it is highly improbable that we find i → j and j → i simultaneously in the graph. The result is a graph where the degree follows a Poisson distribution with mean c, and where most interactions are directed. Finally, for each edge j → i we draw αij from the Gaussian distribution N (μ, σ-
). In Subsection IV B below, we include results for different values of μ but only two values of σ (σ = 0 and σ = 0.15).
In Fig. 1, and in Subsections IV A and IV C, the species interact over an undirected random regular graph, whose edges are randomly selected such that each species (vertex) has the same number of neighbors, denoted by c and called connectivity. After the graph is built, we need to choose the interaction strengths αij and αji for each edge. In Subsection IV A, we draw αij independently of αji using the Gaussian distribution N (μ, σ), for different values of μ and σ. Notice that this creates asymmet-
ric interactions where, in general, we have αij ̸= αji whenever σ ̸= 0. In Subsection IV C we study the case σ = 0, where we always get αij = αji = μ and the interactions are symmetric.
III. LOCAL FOKKER-PLANCK EQUATIONS
Given a graph of interactions, Eq. (1) gives the temporal evolution of the abundances in a stochastic process with thermal noise ξ(t). Sampling different realizations of the initial conditions and of ξ(t), one gets the probability distribution Ptn(⃗ ) of the vectorn⃗ = (n1, . . . , nN ) at time t. This quantity obeys a Fokker-Planck equation that can be derived from Ito’s rule [38]. However, contrary to the usual case where the variables are defined in the interval (−∞, +∞), each abundance ni is d-
efined in the interval [0, +∞). As a natural consequence of this fact (see Appendix A for more details), one needs to impose the proper boundary conditions at ni = 0, guaranteeing that the current of probability density through the border is always zero [40]. The resulting Fokker-Planck equation is:
∂Ptn(⃗ )
∂t = T
N
∑
i=1
∂2
∂ni2
{niPtn(⃗ )} (2)
−
N
∑
i=1
∂ ∂ni
{
[ni(1 − ni − ∑
j∈∂i−
αijnj) + λ]Ptn(⃗ )
}
,
The first and second terms on the right-hand side of Eq. (2) are the usual diffusion and drift terms of the Fokker-Planck equation, respectively. They encode the evolution of a species subject to Eq. (1). The deterministic growth ratio ni(1−ni−∑
j∈∂i− αij nj )+λ experienced
by species i goes into the drift term. The thermal noise with temperature T gives birth to the diffusion term. In any case, solving Eq. (2) is a cumbersome task mainly because Ptn(⃗ ) is a highly dimensional object. The
abundances are defined on the space (0, +∞)N and the time can be in general defined in the space (−∞, ∞). Even when we consider a single species (N = 1), finding Pt(n) at any time t is not simple. However, we can obtain its stationary solution (see Appendix B), which will be useful for us later. It reads:
P∞(n) = 1
Z nβλ−1 exp
{
−β
2 (n − 1)2}
, (3)
where Z is a normalization constant and β ≡ 1/T . Eq. (3) clarifies the role of the parameter λ in the
model. The integral ∫ ∞
0 dn P∞(n) is finite if and only
if λ > 0. Otherwise, the divergence at n = 0 dominates the integral, which would be divergent. In other words, the existence of λ > 0 allows the density P∞(n) to be normalizable. On the other hand, when λ = 0 and T > 0 the species are doomed to go extinct for large times.
A. Individual Based Mean Field
To find solvable equations, we need to simplify Eq. (2). In this subsection, we obtain the first local Fokker

4
Planck equation for the gLV model. Let us marginalize Eq. (2) over all the abundances except ni to obtain the differential equations for the local probabilities
Pt(ni) = ∫ ∞
0 [∏
k̸=i dnk]Ptn(⃗ ):
∂Pt(ni)
∂t = T ∂2
∂ni2
{niPt(ni)} (4)
−∂
∂ni
{
[ni
(1 − ni − ∑
j∈∂i−
αij mj→i(ni, t)) + λ]Pt(ni)
}
,
where mj→i(ni) is the conditional average
mj→i(ni, t) ≡
∫∞
0
dnj njPt(nj | ni). (5)
As in the Fokker-Planck equation for the whole system, the local version in Eq. (4) has two different contributions. The first line in the equation shows the diffusion term. On the other hand, after averaging over the rest of species, the single species i senses an effective drift ni
(1 − ni −∑
j∈∂i− αij mj→i(ni, t)) + λ, where nj is substituted by its conditional average mj→i(ni, t). For more details on the derivation of Eq. (4), the reader is referred to Section 1 of the Supplemental Materials (SM). We have not introduced any approximation so far. To solve Eq. (4), one would also need to obtain all the functions mj→i(ni), but from its definition (Eq. (5)) it is evident that this is equivalent to getting the solution for the pair probabilities Pt(ni, nj). Indeed, to compute the conditio-
nal probability density Pt(nj | ni), we need the pair Pt(ni, nj) and the single-site Pt(ni) probabilities. As we will show in the next section, the local Fokker-Planck equation for Pt(ni, nj) depends, in turn, on probabilities Pt(ni, nj, nk) defined over three species. After iterating this process, we get a hierarchy of equations that never closes until we recover the full Eq. (2). Therefore, solving Eq. (4) has the same level of difficulty as solving Eq. (2). To overcome this problem, we need to -
introduce an approximation that allows us to get a closed system of differential equations for the Pt(ni), i.e, one that can be solved without going up in the hierarchy. The first step that one could take in that direction is to assume mj→i(ni, t) is independent of ni and write mj→i(ni, t) ≈ mj(t), where
mj(t) ≡
∫∞
0
dnj njPt(nj). (6)
Doing this is equivalent to assuming that the pair probabilities are all factorized such that Pt(ni, nj) ≈ Pt(ni)Pt(nj). Therefore, we are trivializing the correlations in the system. Nevertheless, this approximation allows us to close the system of differential equations since all the information that we need is in the single-species distributions Pt(ni). We get:
∂Pt(ni)
∂t = T ∂2{niPt(ni)}
∂ni2
(7)
−∂
∂ni
{
[ni
(1 − ni − ∑
j∈∂i−
αij mj(t)) + λ]Pt(ni)
}
.
These local Fokker-Planck equations form a dynamic closure that can in principle be solved, and that we will call Individual Based Mean Field (IBMF) in what follows. This name has been used before in the literature, particularly in the study of epidemic spreading throughout a network [24, 26], to identify an approximation that factorizes the pair probabilities distribution as explained above. Finding the stationary solution of Eq. (7) has the same level of difficulty as for an isolated variable (s-
ee Eq. (3) and Appendix B). The result is:
P∞(ni) = 1
Zi
nβλ−1
i exp
{
−β
2 (ni − Mi)2}
, (8)
where
Zi =
∫∞
0
dni nβλ−1
i exp
{
−β
2 (ni − Mi)2}
(9)
Mi = 1 − ∑
j∈∂i−
αij mj(∞) . (10)
This is a mean-field solution to the problem derived for sparse graphs with any type of interactions. In fact, a similar probability density has been recently introduced in Ref. [41] for the case of fully-connected models, a scenario where mean-field assumptions like these are more commonly used. The presence of other species modifies the center Mi of the Gaussian in Eq. (8) to make ni align with the average effect of its neighbors. To evaluate the stationary solution of IBMF, we need to design an-
 algorithm capable of computing the averages mj(∞), which we will denote by mj for simplicity. Exploiting Eq. (8), we can write:
mi = 1
Zi
∫∞
0
dni nβλ
i exp
{
−β
2 (ni − Mi)2}
. (11)
As said above, Zi and Mi are functions of the aver
ages mj, with j ∈ ∂i−. After making an initial guess for the average abundances mi, with i = 1, . . . , N , we can use Eq. (11) to update their values. Then, we iterate until all mi converge to the IBMF’s prediction for the stationary average abundances. In practice, we employ numerical tricks, such as adding damping and using sequential updates, to aid this iterative process in reaching convergence (see Appendices C and D). In the process of obtaining the stationary solution of IBMF, we did not a-
ssume any particular structure of the graph, nor any specific type of interaction. It

5
is in principle applicable to any directed or undirected graph, with symmetric or asymmetric interactions. However, one should expect better results when correlations are weak enough for the factorization P∞(ni, nj) ≈ P∞(ni) P∞(nj) to approximately hold. The latter is intuitively more likely to happen in the case of asymmetric interactions.
B. Continuous Belief Propagation
To go beyond IBMF, we need to include non-trivial correlations between pairs of interacting species. Therefore, it is reasonable to go up one level in the hierarchy and write the local Fokker-Planck equations for the
pair probabilities Pt(ni, nj) = ∫ ∞
0 [∏
k̸=i,j dnk]Ptn(⃗ ). After marginalizing Eq. (2) over the abundances of all the species (the details can be found in Section 1 of the SM), except for i and j, we obtain a local equation that depends on the conditional averages:
mk→i,j (ni, nj , t) ≡
∫∞
0
dnk nk Pt(nk | ni, nj). (12)
Solving for mk→i,j(ni, nj, t) implies knowing the threespecies probabilities Pt(ni, nj, nk), but we need to close the hierarchy at some point. However, if one focuses on random sparse graphs like random regular or Erdo ̋sRe ́nyi, the tree-like structure of the interactions makes it very unlikely that species k interacts with i and j simultaneously, provided that i and j interact. If k ∈ ∂i−, we can assume that mk→i,j(ni, nj, t) strongly depends on ni and only weakly depends on nj. We then make the-
 approximation mk→i,j(ni, nj, t) ≈ mk→i(ni, t). The result (see Section 1 of the SM) is a closed local Fokker-Planck equation that we call Pair Based Mean Field (PBMF), also using a name that is popular in the context of epidemics spreading on networks when the dynamics is described using pair probabilities [25, 26].
Although the PBMF is simpler than the full Eq. (2), it is still difficult to obtain a general solution, even when we focus only on the stationary point. Only in the case of symmetric interactions in undirected graphs (αij = αji), as we show in Subsection 2.1 of the SM, the proper solution to the local Fokker-Planck equation for pair probabilities in sparse random graphs is Belief Propagation (BP). This technique was already introduced in Ref. [19] for the gLV model. However, while in that case the-
 abundances of the species are considered as discrete variables with states ni = 1, 2, . . ., here we use the continuous version of the model. We solve this issue by proposing a new continuous implementation of BP equations for our model, which have the same structure as the ones in Ref. [19], but include the proper adjustments to consider continuous ni ∈ [0, +∞). These are:
ηi→j (ni) = nβλ−1
i
zi→j
exp
{
−β
2 (ni2 − 2ni)
}
×
×
∏
k∈∂ i− \j
∫∞
0
dnk ηk→i(nk) e−βαikni nk ,(13)
where ηi→j(ni) is the cavity marginal, or message, that represents the marginal probability density of species i in a modified graph where the edge connecting i and j is removed. The constant zi→j is a normalization factor. Here, we can identify that the local field hi, whose ex
ponential e−β hi(ni) usually appears in front of BP equations, is simply hi = ni2/2 − ni + (T − λ) ln(ni). This
expression properly considers the immigration rate and the continuous nature of ni. From it, we can obtain the stationary single-site and the pair probabilities as follows:
PBP (ni) = nβλ−1
i Zi
exp
{
−β
2 (ni2 − 2ni)
}
×
×
∏
k∈∂i−
∫∞
0
dnk ηk→i(nk) e−βαikni nk (14)
PBP (ni, nj ) = 1
Zij
ηi→j (ni) e−βαijni nj ηj→i(nj ) , (15)
where Zi and Zij are normalization factors and the messages ηi→j(ni) are the fixed point solution of Eq. (13). The reader could wonder what the relation is between BP and the local Fokker-Planck equations that we have been presenting here. Remarkably, it is possible to prove that the expression in Eq. (15) for the pair probabilities, together with BP equations (Eq. (13)), is a stationary solution of PBMF when the interactions are symmetric. The details of the proof are given in Subsection 2.1 of t-
he SM. To obtain numerical results from BP, we use an iterative algorithm analogous to the one we introduced above for IBMF. Making an initial guess for the messages ηi→j(ni), we can use Eq. (13) to update their values at each ni. This procedure is iterated until all ηi→j(ni) converge, and the final messages are used to compute the true marginals PBP (ni) and PBP (ni, nj). For the interested reader, we include details about our specific implementation of BP in Section 4 of the SM.
IV. NUMERICAL RESULTS
As said above, to use IBMF to obtain the actual values of the averages mi, we need to numerically compute integrals of the form:
Ik(β, λ, M ) =
∫∞
0
dn nβλ−1+k exp
{
−β
2 (n − M )2}
,
(16) with the parameter k taking the value k = 0 in Eq. (9), and k = 1 in Eq. (11).

6
Luckily, the integral in Eq. (16) can be expressed in terms of known special functions, called parabolic cylinder functions (see 9.241 in Ref. [42]). This is very convenient because we can write the parabolic cylinder functions in terms of the more practical Kummer’s confluent hypergeometric function, which can be found already tabulated in different programming languages. The interested reader can find the details in Section 3 of the SM. The code is available at Ref. [43]. When the temperature is-
 zero or close to zero, the equations can be simplified even further. The exponential in Eq. (16) concentrates around its maximum, and provided that λ is small, IBMF equations reduce to:
ni = max
{
0, 1 − ∑
j∈∂i−
αij nj
}
. (17)
At T = 0, we simply need to iterate Eq. (17) until convergence. It is important to note that this is not the same as running the zero-temperature simulations of the dynamics, which in turn implies integrating the system of differential equations:
dni
dt = ni(1 − ni − ∑
j∈∂i−
αijnj) + λ . (18)
Such numerical integration of the gLV dynamical equations at T = 0 can be performed using the Cash-Karp adaptive Runge-Kutta method [44]. The code is available at Ref. [43]. For small λ, the fixed points of Eq. (17) coincide with the stationary solutions of the exact dynamics in Eq. (18). Therefore, whenever IBMF converges, the fixed point represents an actual stationary configuration of the dynamics. On the other hand, the non-convergence of IBMF is not guaranteed to be reflected in the behavior -
of the simulated dynamics. One could think of them as two different algorithms trying to find the same fixed points. If one of the algorithms succeeds, the resulting abundances constitute a fixed point also for the other algorithm. If one of them does not succeed, the other still could. However, we show in Subsections IV A and IV B (see below) that IBMF can nevertheless be used to predict the relevant phase transitions observed in the simulations at T = 0. In Appendix D and for a random regular gr-
aph with homogeneous interactions, we show that the exact result for the transition from single-to-multiple equilibria [32] arises naturally from IBMF. Furthermore, in Section 2.2 of the SM, we recover the stationary solution of Dynamical Mean Field Theory [20] in the limit of large connectivity at zero temperature. In the presence of thermal noise (T > 0), we still have a fast implementation of IBMF. It is important to note that, for finite temperatures, IBMF is always a factorized ansatz for the-
 probability density of the abundances. With its stationary solution, we can predict the final average abundance nIBMF
i for each of the species in a given
0
0.5
1
1.5
2
0 0.5 1 1.5 2
nIBMF
nSIM
1e-4
0.01
1
0 100 200
Small ni
ni
SIM
t
0.4
0.8
1.2
1.6
2
0 100 200
Large ni
ni
SIM
t
FIG. 1. Comparing individual abundances from IBMF and simulations in a random regular graph at finite temperature T = 0.015. The connectivity is c = 3, and the immigration rate is λ = 10−6. Each αij is independently drawn from the Gaussian N (0, σ), with σ = 0.15 (the interactions are asymmetric). Each point in the main graphic has coordinates
(nSIM
i , nIBMF
i ), where nSIM
i is the average stationary abundance of species i obtained from 100 simulations of the dynamics, and nIBMF
i is the prediction of IBMF for the same species. The black dashed line is just the linear function f (x) = x. The system has N = 1024 species, thus there are 1024 points in the main graphic. The inserted graphic in the top-left corner shows the temporal evolution of four species with small stationary abundances. The corresponding points are marked with the same colors in the main graphic. The horizontal lines are the predictions of IBMF for the same species. The graphic is in semi-log scale. Anal-
ogously, the inserted graphic in the bottom-right is done with four species whose abundances are not small. Colored lines show the results of simulations, and the horizontal black lines show the predictions made with IBMF.
graph. To illustrate how this works, Fig. 1 compares each nIBMF
i with the average stationary abundances niSIM
obtained from simulations for a specific realisation of a random regular graph in the presence of thermal noise. The numerical integration of the SDE defining the gLV model in Eq. (1) are performed by means of the Milstein method [45, 46]. As with the other algorithms, the code is provided in Ref. [43]. The interactions are asymmetric, i.e., we choose αij independently of αji, each from a Gaussian distribution N (0, σ). As far as we know, this is the first time a theoretical prediction of this kin-
d has been made for sparse graphs.
The main graphic of Fig. 1 shows that IBMF accurately predicts the abundances of the species that are dominant in the ecosystem. For ni > 0.6, the points
(niSIM, nIBMF
i ) lie around the line f (x) = x of perfect
agreement. Most species (∼ 91%) are in this group. In the bottom-right corner of Fig. 1, the inserted graphic shows the temporal evolution of four of those species observed in a single simulation. The corresponding points in the main graphic are marked using the same colors.

7
The stationary abundances of those species, which were selected at random, oscillate around the corresponding predictions from IBMF (presented in black dashed lines). We observe almost perfect agreement between them. On the other hand, IBMF consistently underestimates the stationary abundances obtained from simulations for species that are closer to extinction, with ni < 0.6. Very few (∼ 9%) species are in this group. The results become clearer after analyzing the inserted graphic in the top-left -
of Fig. 1. There, we show the temporal evolution of the abundances of four species that are very close to extinction according to IBMF, but whose average stationary abundance from simulations is not as small. The corresponding points in the main graphic are marked using the same colors. The inserted graphic shows that these species in the lower bottom corner of Fig. 1 continuously switch between two time-persistent states. After spending some time oscillating around a value of the abundance nhigh
i
that is not small (from the figure we see that nhigh
i > 0.1),
the species suddenly drop down and oscillate for a while around a very small abundance nliow ∼ 0.001. This small
nliow corresponds well to the predictions of IBMF, marked
with horizontal dashed lines in the graphic. The real stationary abundance measured in simulations by averaging ni for long times, however, is somewhere in be
tween nliow and nhigh
i . Instead of mimicking this inter
mediate value without a clear physical meaning, IBMF gives only the smallest of the two true values nliow and
nhigh
i . Although it is only partially right, it definitely al
lows identifying the species that are going to exhibit this type of dynamics. A similar behavior has been recently found in fully-connected systems with asymmetric interactions and without thermal noise [47], where the species also switch between two time-persistent states, only one of which is close to extinction. Remarkably, while in Ref. [47] this is observed for every species, in our case we have only a few switching species. This species heterogeneity is probably related to the sparsity of in-
teractions. Both with IBMF and with simulations, we verified that the corresponding stationary abundances were independent of the initial conditions (and of the realization of the noise in simulations). Remarkably, computing the stationary abundances with IBMF is two orders of magnitude faster than running the simulations. By averaging over 100 different initial conditions, we get the average wall-clock times of 22.0 ± 0.3 ms for IBMF, and of 1390±60 ms for simulations (ms stands for milliseconds)-
. The results in Fig. 1 clarify the meaning of IBMF and its predictions for a single graph, while also raising new questions on the link between the structure of the interaction graph and the observed non-trivial dynamics. This phenomenon can also depend on the model’s parameters. Getting a clear picture will require further work, especially because of the difficulties involved in numerically analyzing the results from simulations in the presence of thermal noise. In this introductory work, we pro-
vide a general and
clearer picture of how IBMF works in more controlled scenarios. First, Subsections IV A and IV B compare IBMF with simulations at zero temperature, where the results from the latter are easier to interpret. In Subsection IV A, we study the phase diagram of the model in graphs with asymmetric interactions in undirected random regular graphs. In Subsection IV B, we revisit a model discussed in Ref. [39] to predict the probability of observing persistent fluctuations in the dynamics for any given sys-
tem size. Subsection IV C is devoted, instead, to a case where we include thermal noise. Although IBMF with T > 0 can be applied to symmetric or asymmetric interactions, we chose to study the model with symmetric and homogeneous interactions. The reason is that, in this case, we can compare the output of IBMF with the results of BP, thereby avoiding the numerical complications associated with studying the phase transitions of the simulated dynamics in the presence of thermal noise. The latter is l-
eft for future work.
A. Undirected graphs with asymmetric interactions
In this Subsection, we apply IBMF to undirected graphs with Gaussian noise in the interactions at zero temperature. We take a random regular graph with a given connectivity c, and draw every αij from a Gaussian with mean μ and standard deviation σ (αij ∼ N (μ, σ)). This means that the coupling in the opposite direction, αji, is independently drawn from the same distribution. Thus, the interactions are generally asymmetric. The larger the standard deviation σ, the bigger the average difference betw-
een αij and αji. Fig. 2 shows the phase diagram obtained by simulating the gLV dynamics at T = 0 and μ > 0, with λ = 10−6 (see Eq. (18)). We identify three distinct regions. When σ is small enough, the species reach a unique fixed point for long times, which corresponds to the single-fixed-point (SFP) phase. The first transition occurs at σSF P (μ), and is represented with blue points in Fig. 2. For σ > σSF P (μ), simulations with different initial conditions will not converge to the same fixed po-
int in most interaction graphs. The unbounded growth (UG) transition is located at σUG(μ) ≥ σSF P (μ), and is represented by the red points in Fig. 2. Above this line, the abundance of at least one species grows and diverges in most simulations. Note that the transition at σSF P (μ) is not purely between a single-fixed-point phase and a multiple-fixedpoints phase. Although for large μ this is indeed the case, for μ ≤ 0 the system goes directly from reaching a single fixed point to showing unbounde-
d growth (see Appendix E). In between, we have a crossover between these two types of transitions. The crossover poses a problem in predicting them using IBMF. As said before, any fixed point of IBMF is also a stationary solution of the exact dynamics at T = 0.

8
0.1
0.2
0.3
0.4
0.5
0.6
0 0.05 0.1 0.15 0.2 0.25 0.3 0.35
UNBOUNDED GROWTH
SINGLE FIXED POINT
MULTIPLE FIXED POINTS
σ
μ
FIG. 2. Transitions obtained simulating the gLV model for T = 0, asymmetric interactions (αij is chosen independently of αji), and λ = 10−6. For several pairs (μ, σ), we run the dynamics for 10000 different random regular graphs with connectivity c = 3 and size N = 1024. The interaction strengths are drawn from the Gaussian distribution: αij ∼ N (μ, σ). By repeating the simulation 10 times with different initial conditions for each graph, we identify one of three possible outcomes: i) all realizat-
ions converge to the same fixed point, ii) all the realizations converge but the fixed points are different, or iii) the abundances in at least one of the simulations grow and diverge for long times. The blue points mark, for each μ, the maximum value of σ at which more than 50% of the samples are of type i). The red points mark, for each μ, the minimum value of σ at which more than 50% of the samples are of type iii).
We need to design a procedure capable of detecting the presence of different fixed points if they exist. We then compare the results when we choose different initial conditions for the average abundances of IBMF. In Fig. 3, we compare the results of the simulations with the predictions of IBMF. There are three possible outcomes of IBMF, and they are similar to those obtained from the simulations. For σ small enough, running IBMF in a specific graph many times with different initial conditions alwa-
ys gives the same fixed point. For σ large enough, two things can happen. Either IBMF converges to multiple fixed points for a given graph, provided that we change the initial conditions, or it does not converge at all. Interestingly, for IBMF we also observe a crossover between these behaviors. Fig. 3a shows the transitions between the single-fixed-point phase and the region where we either find multiple fixed points or no convergence. The lines, representing IBMF, accurately reproduce the result-
s from the simulations. Although we know that if IBMF reaches a fixed point, this is also a fixed point of the exact dynamics, it does not necessarily stop converging when the simulations do. We used IBMF to reproduce the transition to unbounded growth. Fig. 3b shows a very good agreement between simulations and IBMF. This also extends to negative values of μ, which correspond to interactions that are mu
0
0.1
0.2
0.3
0.4
0.5
0 0.05 0.1 0.15 0.2 0.25 0.3 0.35
SINGLE FIXED POINT
σ
μ
N=4096 N=2048 N=1024
N=512 N=256 IBMF
(a)
0.35
0.4
0.45
0.5
0.55
0.6
0.65
0.7
0 0.05 0.1 0.15 0.2 0.25 0.3 0.35
UNBOUNDED GROWTH
σ
μ
N=4096 N=2048 N=1024
N=512 N=256 IBMF
(b)
FIG. 3. Transitions of the gLV model for different system sizes at T = 0. The interactions are asymmetric (αij is chosen independently of αji) and defined on random regular graphs with connectivity c = 3. Points represent the results of simulations with immigration rate λ = 10−6, and lines are the predictions made with IBMF for the same sizes. Each transition was determined using 10000 graphs. Simulations are repeated for 10 different initial conditions. IBMF was run with damping (see Appendix C) -
for 10 different random initial conditions. (a) For each system size N and average strength μ, points (lines) mark the maximum value of σ such that simulations (IBMF) converged to the same fixed point in more than 50% of the interaction graphs. (b) Points (lines) mark the minimum value of σ such that simulations (IBMF) displayed unbounded growth (not converged) more than 50% of the interaction graphs.
tualistic on average (see Appendix E). Our results indicate that IBMF is enough to independently describe both aspects of the crossover: the transition to the multiple-fixed-points phase and the transition to unbounded growth. Note that the finite-size effects are relevant in both panels of Fig. 3. The transitions obtained with the simulations and with the theory move downward when the number of species N increases. Nevertheless, IBMF is enough to capture these effects correctly, and its descripti-
on is already accurate for finite

9
systems.
B. Directed graphs
As in Ref. [39], we study the emergence of fluctuating abundances ni in graphs where the degree follows a Poisson distribution with mean c, and where most interactions are directed. If the edge j → i is present, with high probability the edge in the opposite direction does not exist. The graph can be seen as representing a directed flow between the species. We say that species j is upstream with respect to species i (j → i). Conversely, species i is said to be downstream with respect to species j.-
 We then independently draw each associated αij from the Gaussian distribution N (μ, σ). The authors of Ref. [39] carefully studied the case with homogeneous interactions (σ = 0), and demonstrated that the zero temperature dynamics in this toy model can have two distinct outcomes at long times. One possibility is that all abundances converge to a fixed stationary value, with the whole system reaching a fixed point. The second possibility is that not all species converge, resulting in a system with-
 persistent fluctuations. The latter case can also be subdivided into two by taking into account the number of fluctuating species, with one regime with local fluctuations and another with global fluctuations. One of the main objects to measure is the probability that we obtain persistent fluctuations pfluc after running the dynamics in a graph extracted at random for some average connectivity c and interaction strength μ. Note that pfluc does not distinguish between local and global fluctuations.-
 The system undergoes a transition around μ = 1 [39]. For c < e, where e is the Euler’s constant, and in the limit when the number of species is large (N → ∞), one gets pfluc = 0 for μ < μc = 1 and pfluc > 0 for μ > μc = 1. For c > e and also in the limit N → ∞, the same transition occurs but is displaced to smaller μ, and the critical μc ≲ 1 slowly decreases when the connectivity increases. As in the case of asymmetric interactions in a random regular graph (Subsection IV A), we numerically demon-
strate that, for this toy model, the probability of having persistent fluctuations in the simulations can be well approximated by studying the probability that IBMF converges. Fig. 4a presents the results obtained in the toy model. In this case, we observe that adding damping to the iterations is particularly important (see Appendix F). For each graph of interactions generated with the rules described above, we also have two different outcomes. Either the abundances converge to a fixed point, or t-
hey continue to exhibit persistent fluctuations. As in simulations, the probability of convergence displays a qualitative change in its behavior around μ = 1.0. The probability Pnc that IBMF does not converge corresponds very well to the predictions made in Ref. [39]
0
0.2
0.4
0.6
0.8
1
0 0.5 1 1.5 2 2.5 3 3.5 4
N = 65536
Pnc
c
IBMF μ = 0.8 μ = 0.9 μ = 1.1 μ = 1.5 μ = 3.0
0
0.2
0.4
0.6
0.8
1
01234
N = 16384
Pnc
c
(a)
0
0.2
0.4
0.6
0.8
1
4.6 4.8 5 5.2 5.4 5.6
Pnc
c
N=8192 N=16384 N=32768 N=65536 σ = 0.00 σ = 0.15
(b)
FIG. 4. Probability that IBMF does not converge (Pnc) in directed graphs. IBMF is run over different realizations of the interaction graph with a given average connectivity c, size N , and interaction strength μ. There is no unique function for all μ > 1, and dashed lines in the top panel are obtained exactly as in Ref. [39] (see the text for clarification). (a) Toy model without noise in the interactions (σ = 0). The colored lines in the main graphic represent the results of IBMF for N = 65536 an-
d different values of μ. In the inserted graphic, IBMF (lines) is run instead for systems with N = 16384 species, and the points represent the results of simulations of the dynamics for the same system size. The vertical line marks the value c = e. The error bars for IBMF predictions are small and are not included in the graphics. (b) The interaction strengths are drawn from the distribution N (μ, σ) with μ = 0.7 and two values of σ. The values of Pnc for different values of c are represented usin-
g points with their corresponding error bars. Lines are a guide to the eye.
for the probability of having fluctuations, represented with dashed lines in the main graphic of Fig. 4a. When μ > 1, the authors of Ref. [39] conclude that, in a given graph, the only fluctuating species are located in short cycles of odd length. The species in any cycle of length n = 2k + 1 will fluctuate if two conditions are met: i) all the species that are upstream of the species in the cycle are extinct, and ii) the cycle is unstable, which happens

10
for μ > 1/ cos(π/n). The value of μ thus determines the minimum length nmin of the fluctuating cycles. For details on the computation, see Appendix F in this article or directly read Ref. [39]. From top to bottom in the figure, the dashed lines correspond to μ = 3.0 (nmin = 3), μ = 1.5 (nmin = 5), and μ = 1.1 (nmin = 9). When n is large, the values of μc(n) = 1/ cos(π/n) are close to each other and to μ = 1, and it is numerically harder to distinguish between two values of μ. However, in Fig. 4a, -
IBMF results for μ = 1.1 (orange points) are not far apart from the corresponding dashed line. Below μ = 1.0, the results in Fig. 4a are qualitatively different, also in agreement with Ref. [39]. For μ = 0.9, the probability that IBMF does not converge remains close to zero until it abruptly grows towards one around c ∼ 3.1. If we decrease μ just a bit more to μ = 0.8, we get Pnc ∼ 0 for all c < 4. In Appendix G, we study the dependence of the results on the system size to conclude that, effective-
ly, the transition for μ < 1 is qualitatively different from the one for μ > 1. Even for a large system with N = 65536 species, we observe that the predictions of IBMF deviate from the theory of Ref. [39], which is derived in the infinite size limit. In the inserted graphic of the same Fig. 4a, we show that this is not a particular problem of IBMF. With points, we represent the results obtained after simulating the dynamics by integrating Eq. (18). They are in very good agreement with the predicti-
ons of IBMF (lines), also above the critical connectivity c = e, which is marked with a vertical dashed line. As in Section IV A, IBMF allows us to capture the finite-size effects in simulations, which is an advantage with respect to previous theoretical predictions. It is important to note that, even when run in single graphs, obtaining results from IBMF is computationally much simpler than performing actual simulations. Remarkably, the average runtime of IBMF for different values of μ and c is c-
onsistently 10 times faster than the runtime of simulations, under equivalent conditions and for the same system size (see Appendix H). Moreover, our IBMF equations are not restricted to this toy model, and some variations can also be studied. The authors of Ref. [39] try a modification to include noise in the interaction strengths. They take αij from the Gaussian distribution N (μ, σ), again with probability c/N , and zero otherwise. According to the text of that article, for σ = 0 and μ = 0.7 th-
e transition occurs around c ∼ 5.3, while for σ = 0.15 and μ = 0.7 they get c ∼ 4.9.
Fig. 4b shows the probability that IBMF does not converge when the interactions are drawn using this modified toy model. We include results for μ = 0.7 and two values of σ. With σ = 0 (continuous lines), we recover the original toy model and use it as a reference. On the other hand, setting σ = 0.15 (dashed lines) adds noise to the interaction strengths, and the probability that IBMF does not converge increases.
In both cases, we run IBMF for different system sizes. The curves show crossing points at c ∼ 5.1 and c ∼ 4.95, for σ = 0 and σ = 0.15, respectively. When the number of species N increases, the probability Pnc has a sharper transition between Pnc ∼ 0 to the left and Pnc ∼ 1 to the right of the crossing point. If this trend continues as expected when the number of species is large, the values c ∼ 5.1 and c ∼ 4.95 are reliable estimates of the location of the transition between a single equilibrium -
phase and the phase with global fluctuations. These results are indeed close to the ones mentioned in the text of Ref. [39]. The small discrepancies should be investigated further by performing the same analysis with data from simulations of the dynamics, which is technically more difficult because simulations take more computational time (see Appendix H)
C. Including thermal noise
Subsections IV A and IV B show that at T = 0 the results of IBMF are in good agreement with simulations. When thermal noise is present (T > 0), the fixed points of IBMF can still be efficiently retrieved using Eqs. (9), (10), and (11), and taking advantage of the fact that these integrals can be expressed in terms of Kummer’s confluent hypergeometric functions (see Section 3 in the SM). However, in this case, IBMF is an approximation that considers the probability distribution of the system to be -
factorized as Pn(⃗ ) = ∏
i P (ni). Its predictions,
accurate for low temperatures, are expected to fail when T is high enough. In this section, we study how the results of IBMF depend on the temperature in the gLV model defined over random regular graphs with symmetric interactions. This is a controlled scenario where we have a reliable theoretical technique to compare with, which is BP. We further simplify the setting by eliminating any noise in the interaction strength. Provided that (i, j) is an edge in the random regular graph, we set αij = αji-
 = μ, which is equivalent to drawing all αij from the trivial Gaussian N (μ, 0). A first version of the phase diagram T vs. μ is available in Ref. [19], where BP is run using discretized abundances. Interestingly, the authors of Ref. [19] note a re-entrant transition in their phase diagram: for low temperatures, the critical value of μ decreases when T increases, until it reaches a minimum. Then, it returns and starts increasing as the temperature continues to rise. To compare BP with IBMF, which -
works directly with continuous variables, we use our new implementation of BP with continuous variables. After obtaining the messages by iterating Eq. (13) until convergence, we use Eqs. (14) and (15) to get the true marginals. The reader can find details about our implementation in Section 4 of the SM. From Eq. (14), we see that the stationary distribution for a single species is bounded to have the form PBP (ni) = nβλ−1
i P ̃BP (ni)/Zi, where:

11
1e−05
0.0001
0.001
0.01
0.1
1
0 0.2 0.4 0.6 0.8 1 1.2 1.4 1.6 1.8
P~
BP(n)
n
BP T=0.03 μ=0.04 Fitted Trunc. Gauss.
−0.4
0
0.4
0.8
0.4 0.8 1.2 1.6
∆BP−G
n
(a)
1e−05
0.0001
0.001
0.01
0.1
1
0 0.2 0.4 0.6 0.8 1 1.2 1.4 1.6 1.8
P~
BP(n)
n
BP T=0.03 μ=0.06 Fitted Trunc. Gauss.
−0.4
0
0.4
0.8
0.4 0.8 1.2 1.6
∆BP−G
n
(b)
1e−05
0.0001
0.001
0.01
0.1
1
0 0.2 0.4 0.6 0.8 1 1.2 1.4 1.6 1.8
P~
BP(n)
n
BP T=0.03 μ=0.12 Fitted Trunc. Gauss.
−0.4
0
0.4
0.8
0.4 0.8 1.2 1.6
∆BP−G
n
(c)
0
0.01
0.02
0.03
0.04
0.05
0.05 0.1 0.15 0.2 0.25 0.3 0.35
σ=0
T
μ
IBMF BP
(d)
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0.9
1
1.1
0 0.05 0.1 0.15 0.2 0.25 0.3 0.35
<n>
μ
T=0.001 T=0.010 T=0.020
T=0.025 T=0.028 T=0.031
T=0.034 BP
-5
-1
3
0 0.1 0.2 0.3
γ (X 104)
μ
(e)
FIG. 5. Predictions of IBMF and BP in the presence of thermal noise for graphs with symmetric and homogeneous interactions (drawn using σ = 0). Both techniques are applied to random regular graphs with connectivity c = 3. The immigration rate is λ = 10−6. Damping is not used in the iteration process (see Appendix C). (a), (b), and (c) Points represent the probability distributions P ̃BP (n) obtained with BP (see Eq. (19)) for μ = 0.04, μ = 0.06, and μ = 0.12. The temperature is T = 0.03 in all cas-
es, and the system size is N = 128. Black continuous lines are fits to the points via a truncated Gaussian. The inserted graphics show the relative deviation ∆BP −G of the points with respect to the fits (see Eq. (20)), as a function of the abundance n. (d) For each temperature T , we mark the maximum value of μ where BP converges (green points). We also run IBMF on 10000 graphs, each with 10 times different initial conditions, and mark the maximum value of μ where it converges to the same fixed p-
oint in at least 50% of the graphs (blue points). System sizes are N = 128 and N = 1024 for BP and IBMF, respectively. (e) Average abundance predicted by BP and IBMF as a function of μ. At each temperature T , the black dashed lines are obtained with BP over the range of values of μ where this algorithm converges (to the left of the green points in panel (d)). Analogously, the continuous colored lines are obtained with IBMF where it converges to a single fixed point (to the left of the blue points-
 in panel (a)). The colored points represent the average over many fixed points of IBMF where the fixed point is no longer unique (to the right of the blue points in the panel (a)), sampled by running IBMF with 10000 distinct initial conditions. The inserted graphic shows the skewness γ of the distribution PˆBP (n) for the same values of T and μ presented in the main graphic. We use colored lines in the region where IBMF finds a single equilibrium point, and continuous black lines where it finds d-
ifferent fixed points. BP and IBMF are run over the same graph with N = 1024 species.
P ̃BP (ni) = 1
Z ̃i
exp
{
−β
2 (ni2 − 2ni)
}
×
×
∏
k∈∂i−
∫∞
0
dnk ηk→i(nk) e−βαikni nk (19)
can be interpreted as an auxiliary probability distribution
if Z ̃i is taken as the proper normalization factor. The
messages ηk→i(nk), necessary to compute P ̃BP (ni), are the fixed point solution of Eq. (13). Since the abundance ni must be positive, the distri
bution in Eq. (19) is defined only for ni ≥ 0. Whenever interactions are absent (αik = μ = 0 for all i and
k), P ̃BP (ni) becomes a truncated Gaussian centered at ni = 1. Letting μ increase away from zero, one gets a dis
tribution P ̃BP (ni) that is no longer strictly a truncated Gaussian. Moreover, when the interactions are homoge
neous (all αik = μ), BP converges to the same P ̃BP (ni) for all sites i. This index can be dropped, and the av
erage distribution P ̃BP (n) = ∑
i P ̃BP (ni)/N is equal to
P ̃BP (ni) itself.
Figs. 5a, 5b, and 5c show that, even with non-negligible

12
thermal noise and non-zero values of μ, the distribu
tion P ̃BP (n) obtained with BP is not far from Gaussian. These three distributions are obtained for the same temperature T = 0.03, using μ = 0.04, μ = 0.06, and
μ = 0.12, respectively. While P ̃BP (n) is represented with colored points in the main graphics, the continuous black
lines are the result of fitting truncated Gaussians P ̃G(n) to the data. The inserted graphics show the relative deviation ∆BP −G of the points with respect to the fits:
∆BP −G = P ̃BP (n) − P ̃G(n)
P ̃G(n) . (20)
For μ = 0.04 and μ = 0.06 (Figs. 5a and 5b, respectively), the relative deviation is small for all the values of the abundance. In the corresponding main graphics, the points are indeed very close to the fits. The most significant difference occurs at the tails of the distribu
tion. Close to n = 0, we get that P ̃BP (n) is below the truncated Gaussian, while for n large it is above. In other words, the presence of thermal noise and interactions tilts the true distribution and gives slightly more weight to large abundances. The ecosystem is a bit more favorable for the species to thrive. The difference with respect to a Gaussian increases with μ and is more evident at μ = 0.12 (Fig. 5c). There, the scenario has been reversed. The main and inserted graphics show that now -
the true distribution is above the Gaussian for n ∼ 0, and is below for large n. The non-Gaussianity of the distribution gives more weight to species that are close to extinction. In terms of the model, this corresponds to an ecosystem that can support fewer species. Eventually, the situation is no longer compatible with the existence of a fixed point of BP, and this algorithm stops converging around μ = 0.1405(5). In summary, we observe two distinct types of non-Gaussianity in BP at T = 0.03: one-
 that is tilted towards larger abundances, which occurs at small values of μ, and another one tilted towards extinctions, which occurs close to the point where BP stops converging. In the phase diagram in Fig. 5d, the points where BP stops converging at each temperature are marked with green crosses. The results confirm the re-entrant transition detected in Ref. [19]. When the temperature goes to zero, one recovers the exact result μ ≈ 0.354 of Ref. [32] (see Appendix I) for the transition from th-
e single equilibrium phase to the phase with multiple equilibria. The blue circles, on the other hand, represent the prediction made with IBMF for the same transition. We run this approximation for several random regular graphs, in each case using different initial conditions for the average abundances. To the left of the circles, different runs of IBMF converge to the same average abundances in at least 50% of the graphs. To the right, we find instead distinct stationary values of the average abu-
ndances just by changing the initial conditions in at least 50% of the graphs. IBMF reproduces very closely the results of BP
for low temperatures and, as expected, deviates from it for high temperatures. However, it maintains qualitative agreement with BP, also displaying a re-entrant transition. It is also important to mention that the computational cost of running IBMF is considerably lower than the cost of BP. When an extensive use of computational resources is required, as in Fig. 5d, this advantage of IBMF plays an important role and one can use it to study larger systems. Nevertheless, we checked that the transiti-
on points presented in this figure do not change when the system size is increased, neither for IBMF nor for BP. Since IBMF is a factorized ansatz for the stationary distribution P∞n(⃗ ) = ∏
i P∞(ni), and each of the factors
P∞(ni) is a Gaussian multiplied by the factor nβλ−1
i , it
can be used to shed light on the discussion about the non-Gaussianity of BP’s solution. The latter, illustrated here in Figs. 5a, 5b, and 5c, has already been noticed in Ref. [19]. To study it in more detail, we computed the stationary average abundance ⟨n⟩ with both techniques, IBMF and BP, for different temperatures. The black dashed lines in Fig. 5e are obtained with BP in the range of values of μ where this algorithm converges. In turn, the colored continuous lines represent the prediction of -
IBMF when it converges to a single fixed point. However, this is not the only way to estimate the average abundance with IBMF. Even in the region where the fixed point is not unique, we compute ⟨n⟩ by averaging over the different fixed points of IBMF (colored points in the figure). Interestingly, the predictions of IBMF closely follow the dashed lines of BP, also in the region where the fixed point of IBMF is not unique. In other words, this approximation describes the average abundance well at al-
l temperatures under consideration. Furthermore, IBMF’s transition, marked with blue circles in Fig. 5d, is related to the type of non-Gaussianity displayed by BP. In the inserted graphic of Fig. 5e, we
present the skewness γ of the distribution P ̃BP (n) (see Eq. (19)) to quantify this non-Gaussianity. When the distribution is tilted towards large abundances, we get
γ > 0. On the other hand, when P ̃BP (n) is tilted towards extinctions, we get γ < 0. We use colored lines in the inserted graphic to repre
sent the skewness of P ̃BP (n) in the region where IBMF converges to a single fixed point. Black continuous lines are used, in turn, in the region where IBMF converges to different fixed points. The results indicate that around the same value of μ where BP starts developing a distri
bution P ̃BP (n) that is tilted towards extinctions, IBMF stops converging to a single fixed point.
V. CONCLUSIONS
In conclusion, our local closures for the global FokkerPlanck equations, and in particular the Individual Based Mean Field (IBMF) method, provide a powerful and versatile tool for analyzing the stationary states of the gen

13
eralized Lotka-Volterra model on sparse graphs. We have demonstrated its efficacy across a range of scenarios, from asymmetric interactions on undirected graphs to directed networks and systems with thermal noise. IBMF faces its greatest challenge in the symmetric case, where its assumption of species independence breaks down due to correlations. These correlations are precisely what the Belief Propagation (BP) method captures, but BP is restricted to symmetric interactions. This highlights a key -
trade-off: BP offers higher accuracy for symmetric networks, while IBMF provides a versatile and effective solution for the more general and common case of asymmetric couplings.
Our analysis reveals that the phase diagram for sparse, asymmetric interactions (Fig. 2) is qualitatively distinct from its symmetric counterpart; notably, we observe a transition towards a multiple-equilibria phase at a positive σ even for μ ≳ 0, whereas symmetric interactions always lead to a single fixed point at small μ [19]. This sparse topology also induces a different stability landscape compared to fully-connected systems [5], with a transition occurring at a positive μ for σ = 0, a phenom-
enon linked to the intrinsic instability of sparse competitive loops identified in [32].
The observed finite-size effects in the transition lines are correctly captured by IBMF. Notably, the transition lines to both multiple fixed points and unbounded growth progressively shift toward lower heterogeneity σ as the system size N increases. This suggests that the sparse ecological models under consideration may be intrinsically unstable in the infinite-species limit whenever heterogeneity is finite. This observation is consistent with previous RMT results [17, 18, 48], which show that, i-
n general, sparse random matrices remain stable in the large size limit only if the interactions are purely antag
onistic or unidirectional. However, for finite sizes we do observe a region where there is a single stable fixed point, a fact that is accurately predicted by our new method. Looking forward to new applications, the computational efficiency and general applicability of IBMF make it a promising candidate for predicting stable states in real ecological networks, when direct data on interaction strengths is available [49–52] or, in its absence, when one has access to the relevant parameters from whic-
h the interaction strengths can be drawn [41, 53]. Furthermore, the methodological framework is not restricted to ecology and could be fruitfully generalized to analyze a wide class of models in economics, evolutionary game theory, and other fields defined on complex, sparse, and even asymmetric interaction networks.
VI. ACKNOWLEDGMENTS
We thank Giacomo Gradenigo and Chiara Cammarota for early discussions on this problem. Our special gratitude goes to Mattia Tarabolo, Roberto Mulet, and Luca Dall’Asta, with whom we maintained a productive scientific dialogue throughout the writing process, and who generously contributed their own novel insights. This project has been supported by the FIS 1 funding scheme (SMaC - Statistical Mechanics and Complexity) from Italian MUR (Ministry of University and Research) and from the project MIUR--
PRIN2022, “Emergent Dynamical Patterns of Disordered Systems with Applications to Natural Communities”, code 2022WPHMXK, funded by European Union — Next Generation EU, Mission 4 Component 1 CUP: B53D23005310001. This study was conducted using the DARIAH HPC cluster at CNRNANOTEC in Lecce, funded by the ”MUR PON Ricerca e Innovazione 2014-2020” project, code PIR01 00022.
[1] J. Moran and J.-P. Bouchaud, May’s instability in large economies, Physical Review E 100, 032307 (2019). [2] T. Galla and J. D. Farmer, Complex dynamics in learning complicated games, Proceedings of the National Academy of Sciences 110, 1232 (2013). [3] J. Garnier-Brun, M. Benzaquen, S. Ciliberti, and J.-P. Bouchaud, A new spin on optimal portfolios and ecological equilibria, Journal of Statistical Mechanics: Theory and Experiment 2021, 093408 (2021). [4] A. Altieri, F. Roy, C. Cammarota, and -
G. Biroli, Properties of equilibria and glassy phases of the random lotkavolterra model with demographic noise, Physical Review Letters 126, 258301 (2021). [5] G. Bunin, Ecological communities with lotka-volterra dynamics, Physical Review E 95, 042414 (2017). [6] T. Galla, Dynamically evolved community size and stability of random lotka-volterra ecosystems (a), Europhysics Letters 123, 48004 (2018). [7] V. Ros, F. Roy, G. Biroli, G. Bunin, and A. M. Turner, Generalized lotka-volterra equations wit-
h random, non
reciprocal interactions: The typical number of equilibria, Physical Review Letters 130, 257401 (2023). [8] V. Ros, F. Roy, G. Biroli, and G. Bunin, Quenched complexity of equilibria for asymmetric generalized lotkavolterra equations, Journal of Physics A: Mathematical and Theoretical 56, 305003 (2023). [9] L. Poley, J. W. Baron, and T. Galla, Generalized lotkavolterra model with hierarchical interactions, Physical Review E 107, 10.1103/PhysRevE.107.024313 (2023). [10] J. W. Baron, T. J. Jewell, C.-
 Ryder, and T. Galla, Breakdown of random-matrix universality in persistent lotka-volterra communities, Physical Review Letters 130, 10.1103/PhysRevLett.130.137401 (2023). [11] I. A. Hatton, O. Mazzarisi, A. Altieri, and M. Smerlak, Diversity begets stability: Sublinear growth and competitive coexistence across ecosystems, Science 383, 10.1126/science.adg8488 (2024). [12] M. Barbier, J.-F. Arnoldi, G. Bunin, and M. Loreau, Generic assembly patterns in complex ecological communities, Proceedings of-
 the National Academy of Sciences

14
115, 10.1073/pnas.1710352115 (2018). [13] J. Giral Mart ́ınez, M. Barbier, and S. De Monte, Interplay of structured and random interactions in manyspecies ecological dynamics, bioRxiv , 2024 (2024). [14] M. T. Pearce, A. Agarwala, and D. S. Fisher, Stabilization of extensive fine-scale diversity by ecologically driven spatiotemporal chaos, Proceedings of the National Academy of Sciences 117, 14572 (2020). [15] J. A. Dunne, R. J. Williams, and N. D. Martinez, Foodweb structure and network theory: t-
he role of connectance and size, Proceedings of the National Academy of Sciences 99, 12917 (2002). [16] D. M. Busiello, S. Suweis, J. Hidalgo, and A. Maritan, Explorability and the origin of network sparsity in living systems, Scientific reports 7, 12323 (2017). [17] A. M. Mambuca, C. Cammarota, and I. Neri, Dynamical systems on large networks with predator-prey interactions are stable and exhibit oscillations, Physical Review E 105, 014305 (2022). [18] P. Valigi, I. Neri, and C. Cammarota, Local -
sign stability and its implications for spectra of sparse random graphs and stability of ecosystems, Journal of Physics: Complexity 5, 015017 (2024). [19] T. Tonolo, M. C. Angelini, S. Azaele, A. Maritan, and G. Gradenigo, Generalized lotka-volterra model with sparse interactions: non-gaussian effects and topological multiple-equilibria phase (2025), arXiv:2503.20887 [condmat.stat-mech]. [20] F. Roy, G. Biroli, G. Bunin, and C. Cammarota, Numerical implementation of dynamical mean field theory for-
 disordered systems: application to the lotka–volterra model of ecosystems, Journal of Physics A: Mathematical and Theoretical 52, 484001 (2019). [21] S. Azaele and A. Maritan, Generalized dynamical mean field theory for non-gaussian interactions, Phys. Rev. Lett. 133, 127401 (2024). [22] F. Aguirre-Lo ́pez, Heterogeneous mean-field analysis of the generalized lotka–volterra model on a network, Journal of Physics A: Mathematical and Theoretical 57, 345002 (2024). [23] F. L. Metz, Dynamical mean-fi-
eld theory of complex systems on sparse directed networks, Physical Review Letters 134, 037401 (2025). [24] Y. Wang, D. Chakrabarti, C. Wang, and C. Faloutsos, Epidemic spreading in real networks: an eigenvalue viewpoint, in 22nd International Symposium on Reliable Distributed Systems, 2003. Proceedings. (2003) pp. 25–34. [25] E. Cator and P. Van Mieghem, Second-order meanfield susceptible-infected-susceptible epidemic threshold, Physical review E 85, 056111 (2012). [26] R. Pastor-Satorras, C. Cas-
tellano, P. Van Mieghem, and A. Vespignani, Epidemic processes in complex networks, Reviews of Modern Physics 87, 925 (2015). [27] E. Ortega, D. Machado, and A. Lage-Castellanos, Dynamics of epidemics from cavity master equations: Susceptible-infectious-susceptible models, Physical Review E 105, 024308 (2022). [28] E. Aurell, E. Domı ́nguez, D. Machado, and R. Mulet, A theory of non-equilibrium local search on random satisfaction problems, Physical Review Letters 123, 230602 (2019). [29] D. Machad-
o, J. Gonza ́lez-Garcı ́a, and R. Mulet, Local equations describe unreasonably efficient stochastic algorithms in random k-sat (2025), arXiv:2504.06757 [cond
mat.dis-nn]. [30] D. Machado, R. Mulet, and F. Ricci-Tersenghi, Improved mean-field dynamical equations are able to detect the two-step relaxation in glassy dynamics at low temperatures, Journal of Statistical Mechanics: Theory and Experiment 2023, 123301 (2023). [31] A. Jedrzejewski and K. Sznajd-Weron, Pair approximation for the q-voter models with quenched disorder on networks, Phys. Rev. E 105, 064306 (2022). [32] S. Marcus, A. M. Turner, and G. Bunin, Local and collective transitions in spars-
ely-interacting ecological communities, PLoS Computational Biology 18, e1010274 (2022). [33] M. Loreau and C. De Mazancourt, Biodiversity and ecosystem stability: a synthesis of underlying mechanisms, Ecology letters 16, 106 (2013). [34] G. Biroli, G. Bunin, and C. Cammarota, Marginally stable equilibria in critical ecosystems, New Journal of Physics 20, 10.1088/1367-2630/aada58 (2018). [35] F. Larroya and T. Galla, Demographic noise in complex ecological communities, Journal of Physics: Complexit-
y 4, 10.1088/2632-072X/acd21b (2023). [36] G. Garcia Lorenzana, A. Altieri, and G. Biroli, Interactions and migration rescuing ecological diversity, PRX Life 2, 10.1103/PRXLife.2.013014 (2024). [37] T. Arnoulx de Pirey and G. Bunin, Many-species ecological fluctuations as a jump process from the brink of extinction, Phys. Rev. X 14, 011037 (2024). [38] A. Altieri and G. Biroli, Effects of intraspecific cooperative interactions in large ecosystems, SciPost Phys. 12, 013 (2022). [39] S. Marcus, A. M-
. Turner, and G. Bunin, Local and extensive fluctuations in sparsely interacting ecological communities, Phys. Rev. E 109, 064410 (2024).
[40] C. Gardiner, Stochastic Methods: A Handbook for the Natural and Social Sciences, 4th ed., Springer Series in Synergetics (Springer Berlin, Heidelberg, Berlin, Heidelberg, 2009). [41] J. Pasqualini, A. Maritan, A. Rinaldo, S. Facchin, E. Savarino, A. Altieri, and S. Suweis, Microbiomes through the looking glass: Linking species interactions to dysbiosis through a disordered lotka-volterra framework, eLife 10.7554/elife.105948.2 (2025). [42] I. Gradshteyn and I. Ryzhik, Table of Integrals, Seri-
es, and Products (Elsevier, 7th Edition, 2007). [43] D. Machado, P. Valigi, T. Tonolo, and M. C. Angelini, GenLotkaVolterra SparseGraphs: Github repository for this article (2025). [44] W. H. Press, S. A. Teukolsky, W. T. Vetterling, and B. P. Flannery, Numerical Recipes in C (Cambridge University Press, 2007). [45] G. N. Mil’shtejn, Approximate integration of stochastic differential equations, Theory of Probability & Its Applications 19, 557 (1975), https://doi.org/10.1137/1119062. [46] P. E. Klo-
eden and E. Platen, Numerical Solution of Stochastic Differential Equations, 1st ed., Stochastic Modelling and Applied Probability (Springer Berlin, Heidelberg, Berlin, Heidelberg, 1992). [47] T. A. de Pirey and G. Bunin, Critical behavior of a phase transition in the dynamics of interacting populations, SciPost Phys. 18, 051 (2025). [48] P. Valigi, J. W. Baron, I. Neri, G. Biroli, and C. Cammarota, Eigenvalue spectral tails and localisation properties of asymmetric networks, Journal of Physics A:-
 Mathematical and Theoretical 58, 455002 (2025).

15
[49] P. C. de Ruiter, A.-M. Neutel, and J. C. Moore, Energetics, patterns of interaction strengths, and stability in real ecosystems, Science 269, 1257 (1995), https://www.science.org/doi/pdf/10.1126/science.269.5228.1257. [50] R. R. Stein, V. Bucci, N. C. Toussaint, C. G. Buffie, G. R ̈atsch, E. G. Pamer, C. Sander, and J. B. Xavier, Ecological modeling from time-series inference: Insight into dynamics and stability of intestinal microbiota, PLoS Computational Biology 9, e1003388 (2013). [51] C. -
Jacquet, C. Moritz, L. Morissette, P. Legagneux, F. Massol, P. Archambault, and D. Gravel, No complexity–stability relationship in empirical ecosystems, Nature Communications 7, 12573 (2016). [52] M. Barbier, C. de Mazancourt, M. Loreau, and G. Bunin, Fingerprints of high-dimensional coexistence in complex ecosystems, Phys. Rev. X 11, 011009 (2021). [53] M. Barbier, G. Bunin, and M. A. Leibold, Getting more by asking for less: Linking species interactions to species co-distributions in metacommuni-
ties, Peer Community Journal 5, e1 (2025). [54] B. D. McKay, The expected eigenvalue distribution of a large regular graph, Linear Algebra and its Applications 40, 203 (1981). [55] F. Caltagirone, F. Krzakala, and L. Zdeborova ́, On convergence of approximate message passing, in ISIT 2014 - 2014 IEEE International Symposium on Information Theory, Vol. 2014, IEEE (IEEE, Honolulu, United States, 2014) pp. 1812–1816, 5 pages, 3 figures.
[56] B. Bollobas, Random Graphs (Cambridge Studies in Advanced Mathematics, 2nd Edition, 2001). [57] Y. Kabashima, A cdma multiuser detection algorithm on the basis of belief propagation, Journal of Physics A: Mathematical and General 36, 11111 (2003).
Appendix A: From Ito’s rule to the Fokker-Planck equation
Let An(⃗ ) be a generic observable that depends on the whole systemn⃗ = (n1, . . . , nN ) at time t, but does not explicitly depend on time. For example, An(⃗ ) could be the average abundance An(⃗ ) = ∑
i ni(t)/N . Following
Ito’s rule:
d
dt E[An(⃗ )] = E
[N
∑
i=1
∂An(⃗ ) ∂ni
dni dt
]
+T E
[N
∑
i=1
∂2An(⃗ ) ∂ni2
ni
]
,
(A1) where E[ · ] is the average over the probability density Ptn(⃗ ) of having abundancesn⃗ at time t, which is defined in a stochastic process where each trajectory is given by a specific realization of the thermal noise and a specific choice for the initial conditions. In other words, E[ · ] is an average over the thermal noise and the initial conditions. Using this definition and Eq. (1) for dni/dt, one gets:
∫∞
0
dn⃗ A n(⃗ ) ∂
∂t Ptn(⃗ ) =
N
∑
i=1
∫∞
0
dn⃗ P tn(⃗ ) [ni(1 − ni − ∑
j∈∂i−
αijnj) + λ] ∂An(⃗ )
∂ni
+T
N
∑
i=1
∫∞
0
dn⃗ P tn(⃗ ) ni
∂2An(⃗ ) ∂ni2
.(A2)
To obtain Eq. (A2) one needs to use the fact that ⟨ξi(t)⟩ = 0, where ξi(t) is the Gaussian noise that appears in Eq.
(1). Integrating by parts and using that, to have finite moments, Ptn(⃗ ) → 0 faster than n−2
i when ni → ∞, leads to:
∫∞
0
dn⃗ A n(⃗ ) ∂
∂t Ptn(⃗ ) = −
N
∑
i=1
∫∞
0
dn⃗ A n(⃗ ) ∂
∂ni
{
[ni(1 − ni − ∑
j∈∂i−
αijnj) + λ]Ptn(⃗ )
}
+T
N
∑
i=1
∫∞
0
dn⃗ A n(⃗ ) ∂2
∂ni2
{niPtn(⃗ )} +
N
∑
i=1
(T − λ)
∫∞
0
[∏
k̸=i
dnk
]
lim
ni →0+
[An(⃗ ) Ptn(⃗ )] .(A3)
In the usual diffusion problems where one follows this procedure, the variables are defined in the whole open space x ∈ (−∞, ∞). The property limx→±∞ P (x) = 0 kills all the terms that come from evaluating the integrands in x → ±∞. However, now one has a variable ni defined in [0, +∞), and limni→0+ Ptn(⃗ ) ̸= 0 in general. The last term in Eq. (A3) highlights the role of the conditions at the border ni = 0, and this is relevant to find the right local closures.
To continue from here, however, we should impose the proper boundary conditions for this Fokker-Planck equation. To guarantee that Ptn(⃗ ) keeps properly normalized, the current of probability density must be zero at
every border ni = 0, using what is called a reflecting boundary condition [40]. We must then enforce the relations (T − λ) limni→0+ Pt(ni) = 0 for all species i, where
Pt(ni) = ∫ ∞
0 [∏
k̸=i dnk]Ptn(⃗ ) is the single-site probabil
ity for the abundance of species i. Therefore, the last term in Eq. (A3) vanishes. In other words, we can neglect the surface terms that arise after integrating by parts.
Since An(⃗ ) is a generic function, the only way to fulfill this relation is to have

16
∂Ptn(⃗ )
∂t = T
N
∑
i=1
∂2
∂ni2
{niPtn(⃗ )} (A4)
−
N
∑
i=1
∂ ∂ni
{
[ni(1 − ni − ∑
j∈∂i−
αijnj) + λ]Ptn(⃗ )
}
,
which is the right Fokker-Planck equation, valid for any graph G(V, E).
Appendix B: Solution for the isolated variable
For the rest of this article, it will be useful to obtain the stationary solution of Eq. (2) in the particular case where there is only one variable n. The equation is then:
∂
∂t Pt(n) = T ∂2
∂n2
{nPt(n)} (B1)
−∂
∂n
{
[n(1 − n) + λ]Pt(n)
}
.
In the steady state:
0 = T ∂2{nP∞(n)}
∂n2 − ∂
∂n
{
[n(1 − n) + λ]P∞(n)
}
. (B2)
Integrating over n and remembering that limn→∞ n2P∞(n) = 0, the integration constant goes away. We get:
d
dn P∞(n) = 1 − n
T P∞(n) +
(λ
T −1
) P∞(n)
n . (B3)
Solving this differential equation with separable variables is simple. The result is:
P∞(n) = 1
Z nβλ−1 exp
{
−β
2 (n − 1)2}
, (B4)
where Z is a normalization constant and β ≡ 1/T . Once one has the solution (Eq. (B4)) to the FokkerPlanck equation for a single species (Eq. (B1)), it is not hard to see what will be the solution for IBMF in the stationary regime. In the open space ni ∈ (0, +∞), the equation to fulfill is:
0=−∂
∂ni
{
[ni(1 − ni − ∑
j∈∂i−
αij mj(∞)) + λ]P∞(ni)
}
+T ∂2
∂ni2
{niP∞(ni)} . (B5)
This is essentially the same Eq. (B2), where one substitutes 1−ni by 1−ni −∑
j∈∂i− αij mj (∞). Thus, if the
solution to the single variable was Eq. (B4), the solution to Eq. (B5) is:
P∞(ni) = 1
Zi
nβλ−1
i exp
{
−β
2 (ni − Mi)2}
, (B6)
where Mi = 1 − ∑
j∈∂i− αij mj (∞).
The stationary solution in Eqs. (B4) and (B6) are normalizable functions for any λ > 0. Therefore, they give valid distributions P∞(ni) that solves the Fokker-Planck equation when t → ∞ for any λ > 0. Nevertheless, we identify two distinct qualitative behaviors of P∞(ni), depending on the value of the immigration rate λ. When λ > T , we get that limni→0+ P∞(ni) = 0, which is consistent with the boundary conditions imposed by us while deriving the Fokker-Planck equation. In this case, the immigrati-
on effectively counteracts the thermic noise and the species are strongly repelled from extinction (ni = 0). When 0 < λ < T , the stationary distribution P∞(ni) diverges at ni = 0. This contradicts the boundary condition (T − λ) limni→0+ Pt(ni) = 0. However, the mathematical inconsistency in the definition of the Fokker-Planck problem for 0 < λ < T does not impede P∞(ni) from being a valid solution of Eq. (B2) also in this interval. We can still give a physical interpretation to this case: when th-
e effect of the immigration λ is small, a finite fraction of the species goes nearly extinct. Indeed, our simulations in Fig. 1, for a system of N interacting species in a random graph, remain stable even for λ ≪ T . We observe, both from simulations and from IBMF, how a fraction of species spend long times close to extinction.
Appendix C: Use of damping to improve convergence
As usual in the scenario of iterating equations until the quantities reach a fixed point, some standard tricks can be used to help IBMF converge. Perhaps the most common mechanism is to add damping to the iterations. Given the update rule mi = fi({mk}k∈∂i− ), one chooses a parameter d ∈ [0, 1], and updates the vector {mik}i=1,...,N of the average abundances by doing:
mk+1
i = d · f ({mk}k∈∂i−
) + (1 − d) · mik . (C1)
The value d = 1 corresponds to the original case, where IBMF is iterated without damping. When d = 0 nothing happens to mik. A quick study shows that, for IBMF,
the probability of convergence is maximized for some intermediate d around d = 0.2. The results in Subsections IV A and IV B are obtained using precisely this value (d = 0.2). In the latter case, the impact of damping is explained in detail in Appendix F. In the first case, achieving convergence with IBMF is an important issue due to the crossover between the phase of multiple fixed points and the phase of unbounded growth.

17
For T = 0 any fixed point of IBMF is also a fixed point for simulations, and we can be sure that whenever we find different fixed points with IBMF this has implications also for simulations. However, the phase of unbounded growth is determined by the divergence of the abundances, and, as said in the main text, it could be that the iteration process of IBMF does not converge while the simulations do. Fig. 6a shows that the differences between IBMF without damping and simulations are indeed noticeab-
le only for μ ≤ 0.2, where unbounded growth starts to dominate the crossover. Therefore, one needs to add damping to overcome the convergence problems that are not physical and are only related to the algorithmic dynamics of the iterations. On the other hand, the phase diagram of Fig. 5d is produced without damping (using d = 1). Here, we do not find any problems in achieving convergence with IBMF. In fact in that phase diagram the unbounded growth phase is not present. The iteration process reach-
es a fixed point for any temperature T and average interaction strength μ. The only relevant question is, at a given temperature, what is the smallest value of μ where we can find two different fixed points. Fig. 6b shows that the answer is approximately the same in most of the phase diagram, except at very low temperatures. As expected, the effect of adding damping, if any, is to move the transition to larger values of μ. Intuitively, the damping could stabilize one fixed point more than the othe-
rs, preventing the algorithm to sample them with the right probability: when one wants to correctly locate the transition between the single and the multiple attractor phases, the correct physical results are obtained by using IBMF without damping (d = 1).
Appendix D: Limits of IBMF with parallel updates at zero temperature
Eq. (17), which is the zero-temperature limit of IBMF, can be straightforwardly recast to matrix form as:
n⃗ = ⃗1 − Jˆ ·n⃗ , (D1)
wheren⃗ = (n1, . . . nN ) is the vector of species abundances, ⃗1 is a vector full of ones, and Jˆ is the interaction matrix, whose elements are Jij = αij. In the case with homogeneous interactions, we have that Jˆ can be expressed in a simple way in terms of the adjacency matrix
Aˆ associated with the interaction graph. By its definition, the element Aij of this matrix is zero if αij = 0, and is one otherwise. Thus, when all nonzero αij are equal to the same number μ, Eq. (D1) transforms into n⃗ = ⃗1 − μ Aˆ ·n⃗ .
Similarly to Ref. [32], we can use the properties of Aˆ to derive the exact single-to-multiple-equilibria transition in the case of random regular graphs with homogeneous interactions. The same equation can be rewritten
0
0.05
0.1
0.15
0.2
0.25
0.3
0.35
0.4
0.45
0 0.05 0.1 0.15 0.2 0.25 0.3 0.35
SINGLE FIXED POINT
σ
μ
N=1024 IBMF d=1.0 IBMF d=0.2
(a)
0
0.01
0.02
0.03
0.04
0.05
0.05 0.1 0.15 0.2 0.25 0.3 0.35
σ=0
T
μ
IBMF d=1.0 IBMF d=0.2
(b)
FIG. 6. Effects of damping in the results of IBMF for the phase diagrams of the gLV model. The equations are run on random regular graphs with size N = 1024 and connectivity c = 3. Each transition was determined using 10000 graphs. In panel (a) (panel (b)), we mark the maximum value of σ (resp. μ) such that simulations or IBMF converged to the same fixed point in more than 50% of the interaction graphs. IBMF was run on each graph with damping (d = 0.2) and without damping (d = 1) for 10 different -
random initial conditions. (a) Phase diagram at T = 0. The interactions are asymmetric (αij is chosen independently of αji). Points represent the results of simulations with immigration rate λ = 10−6, and lines are obtained with IBMF. Simulations are repeated for 10 different initial conditions. (b) Results of IBMF in the presence of thermal noise for graphs with symmetric and homogeneous interactions (drawn using σ = 0). The immigration rate is λ = 10−6.
as (I + μ Aˆ) ·n⃗ = ⃗1, where I is the identity matrix. Then, the solution is obtained after a matrix inversion by mak
ingn⃗ ∗ = (I + μ Aˆ)−1 · ⃗1. For the matrix I + μ Aˆ to be invertible, all its eigenvalues must be nonzero. When A is the adjacency matrix of a large random regular graph, we can use the fact that its smallest eigenvalue must be
close to λAmin = −2√c − 1 [54]. Then, the smallest eigen

18
value of I + μ Aˆ is λmin = 1 − 2μ√c − 1. To compute the
fixed pointn⃗ ∗, or equivalently, for the matrix I + μ Aˆ to be invertible, one should verify the relation λmin > 0. In other words, the interaction strength μ must satisfy the relation:
μ < μ∗ ≡ 1
2√c − 1 , (D2)
which is the same result presented in Ref. [32]. Since the eigenvalues of Aˆ cover the interval λA ∈
[−2√c − 1, 2√c − 1], for μ ≥ μ∗ one could always find an eigenvalue in this bulk of the distribution such that 1 + λAmin = 0, and the matrix will not be invertible for
μ ≥ μ∗. Furthermore, given the homogeneity of the interactions, Eq. (17) must admit the solution:
n= 1
1 + c μ , (D3)
which is also presented in Ref. [32] as the unique fixed point for μ < μ∗. It is also interesting to understand what would happen if one uses Eq. (17) in an iterative way by settingn⃗ k+1 = ⃗1 − Jˆ ·n⃗ k, choosing a given initialn⃗ 0. This, simply put, is a parallel update that gives a full vectorn⃗ k+1 using information about the previous vectorn⃗ k. The result of iterating k times can be expressed as:
n⃗ k =
(⃗1 − Jˆ · (⃗1 − Jˆ · (⃗1 − Jˆ · . . . · (1 − Jˆ ·n⃗ 0)))
)
(D4)
n⃗ k = (−Jˆ)k ·n⃗ 0 +
k−1
∑
i=0
(−Jˆ)i · ⃗1 . (D5)
In Eq. (D5), the power (−Jˆ)i must be interpreted as the product of the matrix Jˆ with itself i times, which returns a matrix. Now, we can use the expression for the geometric sum of matrices to explicitly write the result of the sum on the right-hand side and get:
n⃗ k = (−Jˆ)k ·n⃗ 0 + (I + Jˆ)−1 · ( (I − (−Jˆ)k) · ⃗1)
n⃗ k = (I + Jˆ)−1 · ⃗1 + (−Jˆ)k ·
(
n⃗ 0 − (I + Jˆ)−1 · ⃗1
)
.
(D6)
This expression will converge to the right solution if
limk→∞(−Jˆ)k = ˆ0, or, equivalently, if the eigenvalue of Jˆ with the maximum absolute value |λJ |max is smaller than one. At this point, it is important to note that this conclusion is independent on the specific interaction graph. The convergence of IBMF with parallel updates at zero temperature can be determined by computing the
eigenvalue of Jˆ with the largest absolute value. Unfortunately, the maximum eigenvalue associated to the adjacency matrix of a random regular graph is not
inside the bulk [−2√c − 1, 2√c − 1]. There is an eigenvalue outside of the bulk and its value is λAmˆax = c.
Therefore, |λJˆ|max = cμ and the iterations will not con
verge for any μ ≥ μpar = 1/c. As μpar is smaller than
μ∗ = 1/(2√c − 1) for any c > 2, in these cases there will be an interval μ ∈ [μpar, μ∗) where the parallel iterations will not converge to the right solution, even if that solution exists. To overcome this problem, the results in the main text are obtained using a sequential update. In practice, this
means that each nik is updated to nk+1
i asynchronously.
We choose a random order of the species, and one by one we apply Eq. (17). When ni is recomputed, the new value is ready to be used in the next update. It is important to mention that the problem with parallel updates is already known and has been solved using sequential updates in other contexts [55].
Appendix E: Unbounded growth for asymmetric mutualistic interactions
Fig. 2 in Subsection IV A shows that, in random regular graphs with Gaussian asymmetric interactions, the phase with multiple equilibria exists only for positive values of the average interaction strength μ. A positive value of μ corresponds to ecosystems in which most species develop competitive interactions. On the other hand, when μ is negative the interactions are mostly mutualistic (species abundances grow together). In this case, we have only one transition line σc(μ) that separates two phas-
es. For σ < σc(μ) the abundances converge to a single equilibrium state, while for σ > σc(μ) at least one abundance grows indefinitely and diverges for long times. The latter is called unbounded growth. The results in the right panel of Fig. 3 are easily extended to μ < 0. Fig. 7 shows that IBMF (lines) maintains a good agreement with the results of the simulations (points) for random regular graphs with connectivity c = 3. For μ < −1/c ≈ −0.333 the abundances diverge for any value of σ, and the t-
ransition line goes to σ(−1/3) = 0. This is consistent with the fact that at σ = 0 the interaction strengths αij are homogeneous and all equal to μ. The solution in the single equilibria phase is then ni = 1/(1 + c μ) for all species (for i = 1, . . . , N ). Given that ni must be non-negative, when μ < −1/c we do not have a feasible solution anymore and the abundances diverge in any simulation.
Appendix F: Convergence of IBMF in directed graphs
The convergence of IBMF is sensitive to the addition of damping. In the toy model described in Subsection IV B, using no damping (d = 1 in Eq. (C1)) has negative implications on the convergence, and the results no longer coincide with the predictions in Ref. [39].

19
0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
-0.3 -0.2 -0.1 0 0.1 0.2 0.3
UNBOUNDED GROWTH
σ
μ
N=4096 N=2048 N=1024
N=512 N=256 IBMF
FIG. 7. Transitions of the Generalized Lotka-Volterra model for different system sizes at T = 0. The interactions are asymmetric (αij is chosen independently of αji) and defined on random regular graphs with connectivity c = 3. Points represent the results of simulations with immigration rate λ = 10−6, and lines are the predictions made with IBMF for the same sizes. Each transition was determined using 10000 graphs. Simulations are repeated for 10 different initial conditions. IBMF was run with se-
quential updates for 10 different random initial conditions. Points (lines) mark the minimum value of σ such that simulations (IBMF) displayed unbounded growth (not converged) in more than 50% of the interaction graphs. The vertical line marks the limit value μ = −1/c ≈ −0.333
In Fig. 8a, we show the probability that IBMF, without damping, does not converge (Pnc) for large graphs with different average connectivities and interaction strengths. In this case, Pnc is independent of μ for all μ > 1. It follows a slowly increasing function that goes from zero at c = 0 to one at c = e. This function is represented with a dashed line in the figure, and we give its precise mathematical form below. This behavior is also nearly independent of the size N , as can be seen in Fig. 8-
b. Only close to Pnc ∼ 1, for c ∼ e, finite-size effects make IBMF have a small deviation from the dashed line. The empirical Pnc is not exactly equal to one at c = e for finite sizes, but the inserted graphic shows that Pnc increases when the number of species N increases.
To compute the function followed by IBMF for d = 1 and μ > 1, we can do something analogous to what the authors of Ref. [39] did to predict the probability of fluctuations in simulations. Their results indicate that, for any μ > 1 and in the stationary state, all species in the graph are completely polarized, i.e., either they are extinct (ni = 0) or they reach their carrying capacity (ni = 1). First, we write the probability φ that a species is isolated and therefore can have ni = 1. In treelike -
graphs, the neighbors belong to nearly independent
subgraphs, and we get φ = ∑∞
k=0 p(k)(1 − φ)k, where k
is the connectivity of the species and p(k) is its distribution. When p(k) is Poisson, the authors of Ref. [39] show that φ = W (c)/c, where c is the average connec
0
0.2
0.4
0.6
0.8
1
0 0.5 1 1.5 2 2.5 3 3.5 4
N = 65536
Pnc
c
μ = 0.90 μ = 0.95 μ = 1.05 μ = 1.10 μ = 1.50 theory
(a)
0
0.2
0.4
0.6
0.8
1
0 0.5 1 1.5 2 2.5 3 3.5 4
Pnc
c
N=8192 N=16384 N=32768 N=65536 μ = 0.9 μ = 1.1 theory
0.95
1
2.68 e 2.76
Pconv
c
(b)
FIG. 8. Probability that IBMF does not converge (Pnc) in instances of the toy model (directed graphs with σ = 0). Each point is obtained by running IBMF for 10000 different realizations of the interaction graph with a given average connectivity c, size N , and interaction strength μ. In both panels, IBMF is run without damping, and for μ > 1 its results follow a unique function represented using a dashed line. This function is the analytical result (see the computation in the text) for the probabi-
lity of having at least one isolated cycle in the graph formed by species with completely polarized abundances (ni = 0 or ni = 1). It is close to zero for small c and goes to one exactly at c = e. (a) IBMF convergence without damping for N = 65536 and different values of μ. (b) IBMF convergence without damping for two values of the interaction strength around the transition (μ = 0.9 and μ = 1.1) obtained with several system sizes. The inserted graphic shows an enlargement of the zone where Pconv ∼-
 1.
tivity and W (x) is the Lambert W function. Second, we compute the probability that a directed cycle of length n is isolated. Indeed, a species in a directed cycle has one incoming edge from another species inside the cycle. For the cycle to be isolated, we need all the other incoming edges to correspond to extinct species. Since in Poisson graphs the number of these other incoming

20
edges is also distributed as Poisson with the same mean, and the neighbors of different species in the cycle are independent, the probability that the cycle of length n is isolated is simply φn. The number of directed cycles of length n in a Poisson graph with mean connectivity c is also Poisson distributed with mean cn/n [56]. Thus, the number of directed isolated cycles is Poisson distributed with mean (c φ)n/n = [W (c)]n/n. The probability of having at least one cycle is then:
f (c) = 1 − exp
{
−
∞
∑
n=2
[W (c)]n n
}
f (c) = 1 − c
W (c)
( 1 − W (c) ) , (F1)
where we used that W (c) eW (c) = c. This function f (c) is the one represented with dashed lines in Fig. 8. On the other hand, for μ < 1, the probability that IBMF does not converge without damping is very close to zero for all c < e. In this regime, the results for different system sizes N have a nice crossing point at c > e, as can be seen in Fig. 8a for μ = 0.9. This is a familiar feature of a first-order phase transition that happens exactly at that crossing point. To the left of the crossing-
, the probability that IBMF does not converge goes to zero when the number of species N goes to infinity. To the right, the probability approaches one as N → ∞. Adding damping considerably helps IBMF to converge at any μ. For the interesting case μ > 1, setting d = 0.2 avoids the problems caused by a subset of the directed isolated cycles. Now, the probability Pnc does not follow a unique function f (c) for all μ > 0 (see Fig. 4). They coincide, instead, with the predictions made by the authors of-
 Ref. [39]. Their computation is analogous, but with a key difference. They concluded that, for the simulations, the cycles with even length do not cause fluctuations. If we exclude the even values of n, Eq. (F1) changes to:
f3(c) = 1 − exp
{
−
∞
∑
k=1
[W (c)]2k+1 2k + 1
}
f3(c) = 1 − c
W (c)
√
1 − W (c)
1 + W (c) . (F2)
Eq. (F2) gives the probability f3(c) of having at least one directed isolated cycle with odd length. Furthermore, a cycle of odd length n will be unstable, and thus will fluctuate, for all μ > μc(n) = 1/ cos(π/n) > 1 [39]. Therefore, Eq. (F2) gives the probability of fluctuations for any μ > 1/ cos(π/3) = 2. When μ < 2 the cycles of length n = 3 are stable, but the ones with n = 5 are still unstable for any μ > 1/ cos(π/5) ≈ 1.24. Thus, to compute the line that corresponds to the blue points (done-
 for μ = 1.5) in Fig. 4a, we simply need to subtract the number of cycles with length n = 3 from the sum in Eq. (F2). We get the probability:
0
0.2
0.4
0.6
0.8
1
1 1.5 2 2.5 3 3.5 4
Pnc
c
N=8192 N=16384 N=32768 N=65536 μ = 0.9 μ = 1.1
FIG. 9. Probability that IBMF does not converge (Pnc) in instances of the modified toy model (directed graphs with σ = 0). Each point is obtained by running IBMF for 10000 different realizations of the interaction graph with a given average connectivity c and several sizes N . IBMF is run with damping for two values of the interaction strength around the transition (μ = 0.9 and μ = 1.1). The vertical line marks the value c = e.
f5(c) = 1 − exp
{
−
∞
∑
k=2
[W (c)]2k+1 2k + 1
}
(F3)
f5(c) = 1 − exp
{1
2 ln
( 1 + W (c) 1 − W (c)
)
+ W (c) + [W (c)]2
3
}
,
that we also plot using a dashed line in Fig. 4a, showing that it indeed coincides very well with the results of IBMF obtained at μ = 1.5. This is the procedure to follow for any μ. Fig. 4a indicates that, once we use damping, the convergence of IBMF stops being affected by the cycles of even length and coincides with the theoretical predictions for the probability of fluctuations as presented in Ref. [39].
Appendix G: Finite size effects of IBMF on directed graphs
Fig. 9 shows the finite size effects for two values of μ around μ = 1.0 when we run IBMF for the toy model defined in Subsection IV B. We observe two distinct types of transitions in the probability that IBMF does not converge (Pnc). As with the simulations in Ref. [39], when μ > 1 the results for finite systems do not reach Pnc = 1 exactly at c = e. We present numerical evidence that, for μ = 1.1, the probability Pnc increases with the system size and the points move to the left towards the line -
c = e.
The curves for μ = 0.9, instead, have a clear crossing point at c ∼ 3.28. When the number of species N increases, the probability Pnc has a sharper transition

21
0.01
0.1
1
10
0 0.5 1 1.5 2 2.5 3 3.5 4
N = 8192
runtime(s)
c
Simulations μ = 0.8 μ = 1.5 IBMF μ = 0.8 μ = 1.5
FIG. 10. Average runtime (in seconds) required to obtain IBMF predictions and to run simulations for the toy model (directed graphs with σ = 0, see Subsection IV B). Runs that show persistent fluctuations are not included. System size is N = 8192 in both cases. The points, with error bars, are averages over different graphs for which IBMF and the simulations converge to a fixed point. We consider 10000 graphs in total, and discarded the cases where fewer than 200 lead to convergence.
between Pnc ∼ 0 to the left and Pnc ∼ 1 to the right of the crossing point. Therefore, the value c ∼ 3.28 is a good estimate for the location of the transition between the single equilibrium phase and the phase with global fluctuations. Indeed, it is compatible with the results in Fig. 1 of Ref. [39].
Appendix H: Comparing runtimes of IBMF and simulations in directed graphs
One of the advantages of IBMF is that it can be implemented efficiently (see Section 3 of the SM). Here, we show that running IBMF in single graphs is considerably faster than running simulations. Although we present data for the toy model on directed graphs of Subsection IV B, this conclusion is generally applicable to all the scenarios discussed in this article. In Fig. 10, we compare the average wall-clock time required for IBMF to converge to a fixed point with the corresponding simulation wal-
l-clock time. The average discards all the samples that lead to persistent fluctuations for long times. For all connectivities and for both values of μ in the figure, IBMF is consistently around 10 times faster to reach convergence. Both algorithms, available at Ref. [43], were run on a single CPU Intel Xeon Gold 6248 2.5G. It is important to note that the iterations required by IBMF to converge do not possess a physical meaning. The process is discrete, and at each step we update one of the avera-
ge abundances mi using Eq. (17). On the other hand, the simulation involves integrating a differ
ential equation (see Eq. (18)) whose time t does have a physical meaning and is a continuous variable. Therefore, the wall-clock time is sensitive to the precision of the integration in time. In this case, we use an adaptive step size to optimize the number of steps needed to reach convergence. Our results indicate that, even at zero temperature, where the dynamics is simpler to simulate, it is advantageous to run IBMF instead. It gives fast and accurate predictions, as can be seen in Subsections -
IV A and IV B.
Appendix I: Zero-temperature limit of BP
We discuss here the zero temperature limit of BP for random regular graphs with symmetric and homogeneous interactions (σ = 0, see Section IV C). We show that the exact results for the single-to-multiple equilibria [32] can be easily retrieved after properly taking the limit T → 0. This has already been suggested by the numerical results in Ref. [19], obtained with the discretized version of BP, and by the results presented here in Fig. 5d. When the temperature is small, the probability densities -
concentrate around the mean values. We can then assume that the message ηi→j(ni) can be written as the multiplication of a Gaussian factor and a power-law factor nβλ−1
i as follows:
ηi→j (ni) = 1
zi→j
nβλ−1
i exp
{
−β
2Qi2→j
(ni − mi→j
)2}
.
(I1) This means that every message ηi→j(ni) can be pa
rameterized using the mean mj→i and the variance Qj2→i.
The update rule (Eq. (13)) becomes:
ηi→j (ni) ∼ nβλ−1
i exp
{
−β
2 (ni2 − 2ni)
}
× (I2)
×
∏
k∈∂ i− \j
∫∞
0
dnk nβλ−1
k e−β αik ni nk−β(n2
k−2nkmk→i) / 2 Q2
k→i
When β → ∞, with βλ finite, the integral is dominated by the value nk = n∗k such that the argument of the expo
nential is maximum. Finding this maximum is equivalent to compute the minimum of f (nk) = n2k − 2 nk mk→i +
2 αik ni nk Q2k→i. The result is n∗k = mk→i − αik ni Q2k→i.
Therefore:
ηi→j (ni) ∼ nβλ−1
i e− β
2 (n2
i −2ni) × (I3)
×
[∏
k∈∂ i− \j
(mk→i − αik ni Q2k→i
)βλ−1]
×
× exp
{∑
k∈∂ i− \j
β
2Q2k→i
(mk→i − αik ni Q2k→i
)2}
.
Using again that, when β → ∞ with βλ finite, the distribution ηi→j(ni) will concentrate around ni = ni∗

22
such that the argument of the exponential is maximum, we get:
ηi→j (ni) = nβλ−1
i
zi→j
exp
{
−β
2 ni2
(1 − ∑
k∈∂ i− \j
αi2k Q2k→i
)+
β ni
(1 − ∑
k∈∂ i− \j
αik mk→i
)
]}
. (I4)
Comparing with Eq. (I1), we can easily identify that:
Qi2→j = 1
1−∑
k∈∂i−\j αi2kQ2k→i
(I5)
mi→j = 1 − ∑
k∈∂i−\j αik mk→i
1−∑
k∈∂i−\j αi2kQ2k→i
. (I6)
These equations are known as relaxed Belief Propagation [57], and in this case correspond to the zero temperature expansion of BP. When we have a random regular graph with homogeneous interactions (αij ≡ μ for all edges in the graph), all sites become equivalent and
Q2→ = 1
1 − (c − 1)μ2Q2→
(I7)
m→ = 1 − (c − 1)μ m→
1 − (c − 1)μ2Q2→
. (I8)
From Eq. (I7), we can obtain a closed expression for the variance Q2→:
Q2→ = 1
2(c − 1)μ2
(
1 ± √1 − 4(c − 1)μ2
)
. (I9)
From where it follows that, in order to have Q2→ ∈ R, the strength of the interactions must fulfill the relation
μ ≤ μ∗ ≡ 1
2√c − 1 . (I10)
This result, again, coincides with the exact relation obtained in Ref. [32] and we already presented it in Eq. (D2). Finally, we can also use that
mi = 1 − ∑
k∈∂i− αik mk→i
1−∑
k∈∂i− αi2kQ2k→i
, (I11)
In the case with homogeneous interactions we have αi2k = μ2 and αi2k = μ2 for all edges in the graph. Thus:
m ≡ 1 − cμ m→
1 − cμ2Q2→
, (I12)
together with Eqs. (I7) and (I8) to get another exact result:
m= 1
1 + cμ . (I13)
With Eqs. (I10) and (I13), we recover two known results for the single-to-multiple-equilibria transition for β → ∞ [32]. In terms of BP, this transition is simply
a boundary μ∗ = 1/(2√c − 1) such that, for μ > μ∗ and at low temperature (β ≫ 1), it is impossible to have a “Gaussian” stationary point like the one in Eq. (I1) (more precisely, a Gaussian multiplied by the power
nβλ−1).

Supplemental Materials for the article
Local Fokker-Planck equations for the
Generalized Lotka-Volterra model on sparse
random graphs
D. Machado1,2,3,*, P. Valigi1, T. Tonolo5, 6, and M. C. Angelini1, 4
1Dipartimento di Fisica, Sapienza Università di Roma, P.le Aldo Moro 5, 00185 Rome, Italy 2Group of Complex Systems and Statistical Physics and Department of Theoretical Physics. Physics Faculty, University of Havana. CP10400, La Habana, Cuba 3CNR - Nanotec, unità di Roma, P.le Aldo Moro 5, 00185 Rome, Italy 4Istituto Nazionale di Fisica Nucleare, Sezione di Roma I, P.le A. Moro 5, 00185 Rome, Italy 5Gran Sasso Science Institute, Viale F. Crispi 7, 67100 L’Aquila, Italy 6INFN-Laboratori Nazionali -
del Gran Sasso, Via G. Acitelli 22, 67100 Assergi (AQ), Italy *david.machado@uniroma1.it
November 24, 2025
S1 Local closures
To write the local closures, one needs to marginalize Eq. 2 in the main text to obtain
the differential equations for the local probabilities. This will be done first with Pt(ni) =
∫∞
0 [∏
k̸=i dnk]Ptn(⃗ ). Marginalizing over all the abundances except ni, one gets:
S1

∂
∂t Pt(ni) = − ∂
∂ni
{
[ni(1 − ni) + λ]Pt(ni)
}
+ T ∂2
∂ni2
{niPt(ni)}
+∂
∂ni
{
ni
∑
j∈∂i−
αij
∫∞
0
dnj njPt(ni, nj)
}
−
∑
k̸=i
∫∞
0
dnk
∂ ∂nk
{∫ ∞
0
(∏
r̸=k,i
dnr
)[nk(1 − nk − ∑
l∈∂k−
αklnl) + λ]Ptn(⃗ )
}
+
+T ∑
k̸=i
∫∞
0
dnk
∂2
∂n2
k
{nkPt(ni, nk)} . (S1)
Assuming that limnk→∞ n2
k Ptn(⃗ ) = 0, this equation can be simplified to:
∂
∂t Pt(ni) = − ∂
∂ni
{
[ni(1 − ni) + λ]Pt(ni)
}
+ T ∂2
∂ni2
{niPt(ni)}
+∂
∂ni
{
ni
∑
j∈∂i−
αij
∫∞
0
dnj njPt(ni, nj)
}
+
∑
k̸=i
λ lim
nk→0+ Pt(ni, nk) − T ∑
k̸=i
lim
nk→0+ Pt(ni, nk) . (S2)
Now, the boundary conditions that we imposed on the Fokker-Planck equation become useful. We should enforce that, for each species k, the relation (T − λ) limnk→0+ P∞(nk) = 0. Because of this, the last two terms in Eq. (S2) cancel, leaving:
∂
∂t Pt(ni) = − ∂
∂ni
{
[ni(1 − ni) + λ]Pt(ni)
}
+ T ∂2
∂ni2
{niPt(ni)}
+∂
∂ni
{
ni
∑
j∈∂i−
αij
∫∞
0
dnj njPt(ni, nj)
}
. (S3)
Defining the conditional average
mj→i(ni, t) ≡
∫∞
0
dnj njPt(nj | ni), (S4)
it is possible to write:
∫∞
0
dnj njPt(ni, nj) = mj→i(ni, t) Pt(ni) (S5)
and
∂
∂t Pt(ni) = − ∂
∂ni
{
[ni(1 − ni − ∑
j∈∂i−
αij mj→i(ni, t)) + λ]Pt(ni)
}
+ T ∂2
∂ni2
{niPt(ni)} . (S6)
S2

Since one does not know the shape of mj→i(ni, t), Eq. (S6) cannot be solved directly. Its stationary solutions must fulfill the equation:
0=− d
dni
{
[ni(1 − ni − ∑
j∈∂i−
αij mj→i(ni)) + λ]P∞(ni)
}
+ T d2
dni2
{niP∞(ni)} , (S7)
where mj→i(ni) is the stationary value of the conditional average mj→i(ni, t) and P∞(ni) is the stationary distribution of the i-th species abundance. Integrating once over ni, gives:
d dni
P∞(ni) =
[
β(1 − ni − ∑
j∈∂i−
αij mj→i(ni)) + βλ − 1
ni
]
P∞(ni) , (S8)
where β = 1/T . This equation has the following formal solution:
P∞(ni) = 1
Zi
nβλ−1
i exp
{
−β
2 (n2
i − 2ni)
}
exp
{
−β ∑
j∈∂i−
αij
∫ ni
0
dx mj→i(x)
}
. (S9)
Although Eq. (S9) gives a simple expression that will be useful in the future, it is not a solution to the problem because we still do not have the functions mj→i(ni). But to obtain mj→i(ni) one needs to compute the conditional probabilities, or equivalently, the pair probabilities Pt(ni, nj). The corresponding differential equation can be obtained following a similar procedure.
∂
∂t Pt(ni, nj) = − ∂
∂ni
{
[ni(1 − ni − αijnj) + λ]Pt(ni, nj)
}
+ T ∂2
∂ni2
{niPt(ni, nj)}
−∂
∂nj
{
[nj(1 − nj − αjini) + λ]Pt(ni, nj)
}
+ T ∂2
∂nj2
{njPt(ni, nj)}
+∂
∂ni
{
ni
∑
k∈∂i−\j
αik
∫∞
0
dnk nkPt(nk, ni, nj)
}
+∂
∂nj
{
nj
∑
l∈∂j−\i
αjl
∫∞
0
dnl nlPt(ni, nj, nl)
}
. (S10)
Similarly as before, let us define the conditional average mk→i,j(ni, nj, t) ≡ ∫ ∞
0 dnkPt(nk, t |
ni, nj). Eq. (S10) reduces to:
∂
∂t Pt(ni, nj) = − ∂
∂ni
{
[ni(1 − ni − αijnj − ∑
k∈∂i−\j
αik mk→i,j(ni, nj)) + λ]Pt(ni, nj)
}
−∂
∂nj
{
[nj(1 − nj − αjini − ∑
l∈∂j−\i
αjl ml→i,j(ni, nj)) + λ]Pt(ni, nj)
}
+T ∂2
∂ni2
{niPt(ni, nj)} + T ∂2
∂nj2
{njPt(ni, nj)} . (S11)
S3

Again, one does not know the shape of mk→i,j(ni, nj, t), but to obtain it, one needs to solve the differential equation for Pt(nk, ni, nj). This process builds a hierarchy of differential equations that, in the end, goes back to the Fokker-Planck equation for the full system (Eq. (2) in the main text). This is not surprising, since no approximations have been done, the solution of these local Fokker-Planck equations must be as difficult as the solution of the original Fokker-Planck equation for t-
he whole system. To close the hierarchy at some point, one can make some factorization of the joint probability densities so that they are expressed in terms of probability densities of a lower level in the hierarchy. The first approximation one could do is known in the studies of epidemic spreading as Individual Based Mean Field (IBMF) [1, 2] and it is simply:
Pt(ni, nj) ≈ Pt(ni) Pt(nj) , (S12)
which implies that:
mj→i(ni, t) =
∫∞
0
dnj njPt(nj | ni) =
∫∞
0
dnj nj
Pt(ni, nj) Pt(ni)
mj→i(ni, t) ≈
∫∞
0
dnj nj
Pt(ni) Pt(nj)
Pt(ni) =
∫∞
0
dnj njPt(nj) ≡ mj(t) , (S13)
where mj(t) is the expected value of the abundance nj at time t. The IBMF differential equation is then:
∂
∂t Pt(ni) = − ∂
∂ni
{
[ni(1 − ni − ∑
j∈∂i−
αij mj(t)) + λ]Pt(ni)
}
+ T ∂2
∂ni2
{niPt(ni)} , (S14)
which must be completed with the definition mj(t) ≡ ∫ ∞
0 dnj nj Pt(nj).
The IBMF is the first local closure one can provide. However, it is possible to go ahead and propose closures that stop at higher levels of the hierarchy. To express Pt(nk, ni, nj) in terms of pair probability densities like Pt(ni, nj), one could use information about the actual graph of interactions. In the third line of Eq. (S10), the probability density Pt(nk, ni, nj) is actually defined in a graph G(V, E) that contains the edges k → i and i → j, but not necessarily the edges k → j or j → k. In-
 tree-like graphs, with high probability when the number of species is large, given that the edges k → i and i → j are present, we will have that k and j are not directly connected by any edge. Moreover, the length of the cycles diverges with the system size N , so the only short path that connects k and j necessarily passes through i. So, expecting that it works especially well in tree-like graphs, one could propose:
Pt(nk, ni, nj) ≈ Pt(nk, ni) Pt(ni, nj)
Pt(ni) ≡ Pt(nk | ni) Pt(ni) Pt(nj | ni) , (S15)
This is known as Pair Based Mean Field (PBMF) in the above-mentioned context of epidemic spreading [3, 4] and is a factorization of the conditional measure. Given ni at
S4

time t, one assumes nj and nk are independent. This is not strange for those who know the replica symmetric cavity method, whose algorithmic counterpart is Belief Propagation (BP). However, even in the cases where BP is the exact solution in equilibrium (provided also that equilibrium exists), this approximation is not necessarily valid for the dynamics, since temporal correlations can still forbid the factorization, and nj and nk are not independent given only the value of ni at time t. Anyways,-
 one can assume Eq. (S15) to be valid and continue:
mk→i,j(ni, nj, t) =
∫∞
0
dnk nkPt(nk | ni, nj) =
∫∞
0
dnk nk
Pt(nk, ni, nj) Pt(ni, nj)
mk→i,j(ni, nj, t) ≈
∫∞
0
dnk nk
Pt(nk, ni)
Pt(ni) ≡ mk→i(ni, t) . (S16)
Thus, the PBMF differential equation is:
∂
∂t Pt(ni, nj) = − ∂
∂ni
{
[ni(1 − ni − αijnj − ∑
k∈∂i−\j
αik mk→i(ni, t)) + λ]Pt(ni, nj)
}
−∂
∂nj
{
[nj(1 − nj − αjini − ∑
l∈∂j−\i
αjl ml→j(nj, t)) + λ]Pt(ni, nj)
}
+T ∂2
∂ni2
{niPt(ni, nj)} + T ∂2
∂nj2
{njPt(ni, nj)} , (S17)
which must be completed with the definition mj→i(ni, t) ≡ ∫ ∞
0 dnj njPt(nj | ni).
Both closures, IBMF and PBMF, are in principle solvable, at least numerically. However, when the system is large this is a difficult task.
S2 Connections with known results
S2.1 Belief Propagation as stationary solution of Pair Based Mean
Field
As mentioned before, the approximation in Eq. (S15) is valid in equilibrium in all the cases where BP is also valid, since BP respects this factorization of the conditional measure. It is no surprise then that the BP equations, introduced in Ref. [5] for symmetric interactions (αij = αji), are a stationary solution of PBMF equations for symmetric interactions. Nevertheless, proving it could be a useful exercise for the future. BP’s update rule, as presented in Ref. [5], is:
ηi→j(Ni) = 1
zi→j
1
Ni + ∆ exp
{
−β
2 (N 2
i − 2Ni)
}∏
k∈∂i−\j
∞
∑
Nk =0
ηk→i(Nk) exp
{
− βαikNi Nk
}
,
(S18)
S5

where the constants r and K are set to one for simplicity. The constant zi→j is a normalization factor, ∆ > 0 is a small parameter and ηi→j(Ni) are BP’s messages. One must remember that in this case αik = αki, so one could write one or the other and Eq. (S18) remains valid. First of all, one must notice that Eq. (S18) is written in a discretized space, so Ni is actually taking discrete values. That is the reason why in Eq. (S18) one sees a sum over Nk and not an integral. It is always possible to-
 recast this expression in terms of the continuous variables ni. Besides substituting sums by integrals, one has to pay particular attention to the factor (Ni + ∆)−1. As λ in the continuous case, here ∆ ensures that the divergence when Ni goes to zero is not so critical that it makes the probability distribution non-normalizable. Any positive ∆ will remove this divergence at Ni = 0. Thus, in the continuous version, one
must simply substitute the factor (Ni + ∆)−1 by the analogous factor nβλ−1
i , present in Eqs. 3 and 8 in the main text. The resulting update rule is:
ηi→j(ni) = 1
zi→j
nβλ−1
i exp
{
−β
2 (n2
i − 2ni)
}∏
k∈∂i−\j
∫∞
0
dnk ηk→i(nk) exp { − βαikni nk
},
(S19) It will be helpful to look closely at the integral
Zk→i(ni) =
∫∞
0
dnk ηk→i(nk) exp { − βαikni nk
} . (S20)
In understanding its meaning, it is useful to write the stationary pair probability density in terms of BP’s messages:
P∞(ni, nk) = ηi→k(ni) ηk→i(nk) e−βαikni nk . (S21)
Then, the conditional probability density is
P∞(nk | ni) = ηi→k(ni) ηk→i(nk) e−βαikni nk
∫∞
0 dnk ηi→k(ni) ηk→i(nk)e−βαikni nk = ηk→i(nk) e−βαikni nk
∫∞
0 dnk ηk→i(nk)e−βαikni nk
P∞(nk | ni) = 1
Zk→i(ni) ηk→i(nk) e−βαikni nk . (S22)
So Zk→i(ni) is the normalization factor of the conditional probability density. Furthermore, its derivative with respect to ni is:
∂ ∂ni
Zk→i(ni) = −β αik
∫∞
0
dnk nk ηk→i(nk)e−βαikni nk
∂ ∂ni
Zk→i(ni) = −β αikZk→i(ni)
∫∞
0 dnk nk ηk→i(nk)e−βαikni nk
Zk→i(ni) . (S23)
Remembering the definition of mk→i(ni) and Eq. (S21), one gets
S6

∂ ∂ni
Zk→i(ni) = −β αik Zk→i(ni) mk→i(ni) , (S24)
from where it is easy to see that
Zk→i(ni) ∝ exp
{
− β αik
∫ ni
0
dx mk→i(x)
}
. (S25)
Returning to Eq. (S19), the expression can be rewritten in a form that is very similar to the formal solution for P∞(ni) in Eq. (S9), and that is connected with the differential equation for PBMF (Eq. (S17)):
ηi→j(ni) = 1
zi→j
nβλ−1
i exp
{
−β
2 (n2
i − 2ni)
}
exp
{
−β ∑
k∈∂i−\j
αik
∫ ni
0
dx mk→i(x)
}
. (S26)
Thus, the pair probability can be written as:
P∞(ni, nj) = 1
Zij
(ni nj )βλ−1 e− β
2 (n2
i −2ni) e− β
2 (n2
j −2nj ) e−βαij ni nj ×
× exp
{
−β ∑
k∈∂i−\j
αik
∫ ni
0
dx mk→i(x)
}
exp
{
−β ∑
l∈∂j−\i
αjl
∫ nj
0
dx ml→j(x)
}
.(S27)
Everything is now ready to use the update rule and obtain an expression for the derivative of the probability density P∞(ni, nj) with respect to ni:
∂ ∂ni
P∞(ni, nj) = P∞(ni, nj)
[βλ − 1
ni
− β(ni − 1) − β αij nj − β ∑
k∈∂i−\j
αik mk→i(ni)
]
. (S28)
Therefore
T∂
∂ni
{niPt(ni, nj)} − [ni(1 − ni − αijnj − ∑
k∈∂i−\j
αik mk→i(ni)) + λ]Pt(ni, nj)
= Pt(ni, nj)
{
T + T ni
[βλ − 1
ni
− β(ni − 1) − β αij nj − β ∑
k∈∂i−\j
αik mk→i(ni)
]
−
−
[ni(1 − ni − αijnj − ∑
k∈∂i−\j
αik mk→i(ni)) + λ]
}
= 0 . (S29)
Something analogous happens with the derivative with respect to nj. This means that, in the open region (ni, nj) ∈ (0, +∞) × (0, +∞), the right hand side of Eq. (S17) is equal to zero. In other words, BP is a stationary solution for PBMF when the interactions are symmetric.
S7

S2.2 Zero temperature and large connectivity limit of IBMF
So far, we have presented two stationary distributions that are approximate solutions to the problem. First, IBMF, which is the simplest local closure one can do, but at the same time is of a general purpose. Regardless of the degree of symmetry in the interactions, the stationary solution of IBMF is:
P∞(ni) = 1
Zi
nβλ−1
i exp
{
−β
2 (ni − hi)2}
, (S30)
with hi = 1 − ∑
j∈∂i− αij mj and mj = ∫ ∞
0 dnj nj P∞(nj).
When taking the zero temperature limit (equivalently β → ∞), it is crucial to know how to treat the parameter λ. One must remember that λ has the role of ensuring that the distribution is normalizable, by avoiding the extinction of all the species. It is usually interpreted as an immigration rate that must be taken positive, but small, to study the phenomenology of the model in its purest version possible. Therefore, one should take β → ∞ but keep βλ finite, since λ ∼ 0. We will compare the final -
result of taking this limit with Eq. (13) in Ref. [6], which gives an expression for the steady state abundance of the fully connected model at T = 0:
n = max
(
0, 1 − μˆ m∞ − σˆ ζ∞
1 − ε σˆ2 χint
)
. (S31)
Remember that μ is the average value of the couplings αij, and σ2 is its variance. When the system is fully connected, it is necessary to rescale these parameters and send them to zero when N → ∞, but keeping finite μˆ = N μ and σˆ2 = N σ2. The number ε ∈ [0, 1] is the probability that αij = αji, or, in other words, the level of symmetry in the couplings. Besides these parameters, in Eq. (S31) one has: m∞, which is the expected value of n; ζ∞, which is a random Gaussian variable; and χint, which i-
s the integrated response of n to the effect of a small external field. To recover this result, one can start by taking the limit T → 0 in Eq. (S30). As we discussed in Section IV of the main text, the probability density then concentrates at one point:
ni = max
(
0, 1 − ∑
j∈∂i−
αij mj
)
. (S32)
This way of writing it ensures that ni must always be non-negative. When the connectivity is large, the sum θ = ∑
j∈∂i− αij mj is distributed as a Gaussian with the following first and second moments:
⟨θ⟩ = ∑
j∈∂i−
⟨αij mj⟩ (S33)
⟨θ2⟩ = ∑
j∈∂i−
∑
k∈∂i−
⟨αij αik mj mk⟩ . (S34)
S8

The averages in Eqs. (S33) and (S34) are taken over the disorder in the interactions,
i.e., over the possible values of the whole matrix of couplings ←α→ with elements αij. Then
we must realize that mj is actually a function of ←α→, and that it is not possible to compute the averages in Eqs. (S33) and (S34) as if mj were independent of the specific realization of
the disorder ←α→. However, one can explicitly average Eqs. (S33) and (S34) over part of the
disorder since most of the elements of ←α→ are indeed independent of αij:
⟨θ⟩ = ∑
j∈∂i−
⟨αij mj(←α→)⟩ = ∑
j∈∂i−
⟨ αij mj(αij, αji) ⟩ (S35)
⟨θ2⟩ = ∑
j∈∂i−
∑
k∈∂i−
⟨ αij αik mj(αij, αji, αik, αki) mk(αij, αji, αik, αki) ⟩ . (S36)
The dependence of mj on the disorder has been reduced to the only elements that are not independent of αij, which are αij itself and possibly αji (if ε > 0). The new mj(αij, αji) is already an average over almost all the couplings, except for the ones associated with the edges i → j and j → i. Therefore, the right-hand sides of Eqs. (S35) and (S36) are no longer averages over all the couplings that appear in the arguments of the functions. More specifically, the average ⟨ αij mj(αij, αji) ⟩ in Eq.-
 (S35) is taken over the values of αij and αji, considering that they can be correlated. In the same way, the average in Eq. (S36) is taken over the values of αij, αji, αik, and αki. To compute those averages, it will be useful to write the couplings in terms of standardized Gaussians xij ∼ N (0, 1) as:
αij = μ + σ xij, with
⟨xij⟩ = 0; ⟨xijxkl⟩ = δij,kl + εδij,lk . (S37)
Then mj(αij, αji) becomes a function of xij and xji. However, when the connectivity is large, it is safe to assume that the dependence of mj(xij, xji) on each xij, associated to only one of the many edges that contain the node j, is very weak. Taking an expansion of mj(xij, xji) in powers of xij and xji up to the first order leads to:
mj(xij, xji) ≈ mj(0, 0) + xij
{∂
∂xij
mj(xij, 0)
}∣ ∣
∣xij=0 + xji
{∂
∂xji
mj(0, xji)
}∣
∣
∣xji=0 . (S38)
Remembering that xij actually does not appear in the equation for dnj/dt, but in the equation for dni/dt, one realizes that its effect in mj(xij, xji) must be even weaker than the effect of xji. Finally:
mj(xij, xji) ≈ mj(xji) ≈ mj(0) + xji
{∂
∂xji
mj (xji )
}∣
∣
∣xji=0 . (S39)
Inserting Eqs. (S37) and (S39) back into Eq. (S35) gives:
S9

⟨θ⟩ = ∑
j∈∂i−
〈
(μ + σ xij)
(
mj(0) + xji
{∂
∂xji
mj (xji )
}∣ ∣
∣xji=0
)〉
⟨θ⟩ = μ ∑
j∈∂i−
⟨mj(0)⟩ + σ ∑
j∈∂i−
〈
xij xji
{∂
∂xji
mj (xji )
}∣ ∣
∣xji=0
〉
. (S40)
Let the connectivity be equal to c. After identifying that ⟨mj(0)⟩ ≡ m∞, where m∞ is the parameter in Eq. (S31) above, and by using the expression for the second moment in Eq. (S37), one gets:
⟨θ⟩ = μ c m∞ + σ c ε
〈{ ∂
∂xji
mj (xji )
}∣ ∣
∣xji=0
〉
. (S41)
The derivative in Eq. (S41) gives the average response of mj to a small perturbation in the couplings. This will be related to the response to a small external field, and to see the relation more explicitly, it is convenient to recast the differential equation for nj (see Eq. 1 in the main text) in terms of xji:
dnj
dt = −nj(1 − nj − μ ∑
l∈∂j−
nl − σ ∑
l∈∂j−
xjl nl) + ξj(t) + λ . (S42)
Taking i outside the sum over the neighbors:
dnj
dt = −nj(1 − nj − μ ∑
l∈∂j−
nl − σ ∑
l∈∂j−\i
xjl nl − σ xji ni) + ξj(t) + λ . (S43)
The effect of a small perturbation xji is the same as the one provoked by a small external field with value hj(t) = −σ xji ni(t). The two responses must be related by:
〈{ ∂
∂xji
mj (xji )
}∣ ∣
∣xji=0
〉
=
〈{ ∂hj
∂xji
∂ ∂hj
mj (hj )
}∣ ∣
∣hj =0
〉
= −σ ni χint . (S44)
Inserting Eq. (S44) back into Eq. (S41), one finally obtains an expression for ⟨θ⟩ in terms of m∞ and χint, which are two of the parameters in the known result from DMFT (see Eq. (S31)):
⟨θ⟩ = μ c m∞ − σ2 c ε ni χint . (S45)
The same needs to be done with the second moments:
S10

⟨θ2⟩ = ∑
j∈∂i−
∑
k∈∂i−
〈 (μ + σ xij) (μ + σ xik) (m∞ − σ ni χint xji) (m∞ − σ ni χint xki) 〉
⟨θ2⟩ = ∑
j∈∂i−
∑
k∈∂i−
〈 [μ2 + μ σ (xij + xik) + σ2 xij xik
]×
×
[m2∞ − m∞σ ni χint (xji + xki) + σ2 n2
i χ2
int xji xki
]〉
⟨θ2⟩ = c2 μ2 m2∞ + c σ2 m2∞ − μ σ2 m∞ ni χint
∑
j∈∂i−
∑
k∈∂i−
〈 (xij + xik) (xji + xki) 〉 +
+c μ2σ2 n2
i χ2
int + σ4 n2
i χ2
int
∑
j∈∂i−
⟨x2
ij x2
ji⟩ + σ4 n2
i χ2
int
∑
j∈∂i−
∑
k∈∂i−\j
⟨xij xji xik xki⟩
⟨θ2⟩ = c2 μ2 m2∞ + c σ2 m2∞ − μ σ2 m∞ ni ε χint
(4c + 2c(c − 1)) +
+c μ2σ2 n2
i χ2
int + σ4 n2
i χ2
int
(c + c(c − 1)ε2)
⟨θ2⟩ = c2 μ2 m2∞ + c σ2 m2∞ − 2 μ σ2 m∞ ni ε χint c (c + 1) +
+c μ2σ2 n2
i χ2
int + σ4 n2
i χ2
int
(c + c(c − 1)ε2) . (S46)
where we assumed that ⟨xi2j xj2i⟩ = 1 and that ⟨xij xji xik xki⟩ = ε2, if i ̸= k. Then, the variance of θ is:
s2
θ = ⟨θ2⟩ − ⟨θ⟩2
s2
θ = c σ2 m2∞ − 2 μ σ2 m∞ ni ε χint c + cμ2σ2n2
i χint + σ4 n2
i χ2
int c (1 − ε2) . (S47)
Now, to complete the procedure, one needs to rescale the average μ and the variance σ2 of the couplings for ⟨θ⟩ and ⟨σ2⟩ to remain finite. The natural choice is
μˆ = c μ , σˆ2 = c σ2 . (S48)
After neglecting the terms that go to zero when c → ∞, we finally obtain:
⟨θ⟩ = μˆ m∞ − σˆ2 ε ni χint (S49) s2
θ = σˆ2 m2∞ . (S50)
Remembering Eq. (S32), the stationary abundance for large connectivity and at T = 0 was:
ni = max
(
0, 1 − ∑
j∈∂i−
αij mj(∞)
)
≡ max(0, 1 − θ) = max(0, 1 − ⟨θ⟩ − sθ ν) . (S51)
where ν ∼ N (0, 1) is a standardized Gaussian. Substituting Eqs. (S49) and (S50) into this expression, we get:
ni = max(0, 1 − μˆ m∞ + σˆ2 ε ni χint − σˆ m∞ ν) . (S52)
S11

Rearranging terms, we finally recover Eq. (13) of [6]:
ni = max
(
0, 1 − μˆ m∞ − σ ζ∞
1 − ε σˆ2 χint
)
, (S53)
where ζ∞ is a Gaussian with zero mean ⟨ζ∞⟩ = 0 and variance ⟨ζ2∞⟩ = m∞. The latter is also consistent with the third line of Eq. (12) in Ref. [6].
S3 Efficient implementation of IBMF
To use IBMF to obtain the actual values of the averages mi, one needs to numerically compute integrals of the form
Ik(β, λ, M ) =
∫∞
0
dn nβλ−1+k exp
{
−β
2 (n − M )2}
, (S54)
with the parameter k taking the value k = 0, 1 in our case. Luckily, the integral (S54) can be expressed in terms of known special functions, called parabolic cylinder functions. They have the integral representation (see 9.241 in Ref. [7]):
D−p(z) = e−z2/4
Γ(p)
∫∞
0
dx e−xz−x2/2xp−1 , (S55)
which is valid for Re[p] > 0 and where Γ(−p) is the Euler’s Gamma function. Looking back
at Eq. (S54), we can change variables making x = n√β to get
Ik =
[1
β
] βλ+k
2 e− βM2
2
∫∞
0
dx xβλ−1+k exp
{
− x2
2 + √β M 2 x M
}
. (S56)
After comparing Eqs. (S55) and (S56), we identify p = βλ + k and z = −√β M 2, and we can write the integral Ik in terms of the parabolic cylinder functions as:
Ik(β, λ, M ) =
[1
β
] βλ+k
2 exp
{
− βM2
4
}
Γ(βλ + k) D−βλ−k
(
−
√βM 2
)
. (S57)
Eq. (S57) is very convenient since we can express the first moments of the distribution P∞(nj) in terms of these integrals. Indeed, one has:
mj = I1(β, λ, Mj)
I0(β, λ, Mj) = √β λ
D−βλ−1
(−
√
βMj2
)
D−βλ
(−
√
βMj2
) , (S58)
where Mj = 1 − ∑
k∈∂j− αjk mk.
Using again Ref. [7] (9.240), we can write the parabolic cylinder functions in terms of the more practical Kummer’s confluent hypergeometric function Φ(a, b; z), which can be found already tabulated in different programming languages. The relation is:
S12

D−βλ−k
( − √βM 2 ) = 2−(βλ+k)/2e−βM2/4√π
Γ
( βλ+1+k 2
)
Γ
( βλ+k 2
) × (S59)
×
{
Γ
(βλ + k 2
)
Φ
[βλ + k
2 ,1
2, βM2
2
]
+
√2βM 2 Γ
(βλ + 1 + k 2
)
Φ
[βλ + 1 + k
2 ,3
2, βM2
2
]}
Then, the first moment can be written as:
mj =
Γ
( βλ+1 2
)
Φ
[ βλ+1
2 ,1
2, βM2
j
2
]
+
√
β
2 Mj β λ Γ
( βλ 2
)
Φ
[
1 + βλ
2 ,3
2, βM2
j
2
]
√
β
2Γ
( βλ 2
)
Φ
[ βλ
2 ,1
2, βM2
j
2
]
+ βMj Γ
( βλ+1 2
)
Φ
[ βλ+1
2 ,3
2, βM2
j
2
] (S60)
We can then set an initial condition for all the mi, with i = 1, . . . , N , and iterate Eq. (S60). This is computationally fast, and the result of the iteration process depends on the relevant parameters of the model (μ, σ, β) and on the interaction graph. The code is available at Ref. [8].
S4 Continuous BP equations
The continuous BP equations for the Generalized Lotka-Volterra (gLV) model, as introduced in Eq. (13) in the main text, read:
ηi→j(ni) = 1
zi→j
nβλ−1
i exp
{
−β
2 (n2
i − 2ni)
}∏
k∈∂i−\j
(∫ ∞
0
dnk ηk→i(nk) exp { − βαikni nk
}
)
.
(S61) Eq. (S61) is the update rule for the cavity marginals, or messages, ηi→j(ni), which are the probability distributions for the abundance of species (node) i once we cut the edges with species j. As usual, we call ηi→j(ni) node-to-link messages. What we immediately notice from Eq. (S61) is that ηi→j(ni) contains the factor nβλ−1
i , which diverges in ni = 0, for βλ < 1. To avoid such divergence, we introduce the link-to-node cavity messages, which we denote ηˆi→j(nj) and which represent the distribution of the abundance of species j once all its links, except the one with i, are cut. These cavity marginals are defined as:
ηˆi→j(nj) ∝
∫∞
0
dni ηi→j(ni) exp { − βαijni nj
} . (S62)
Inserting Eq. (S61) into Eq. (S62), we get:
ηˆi→j(nj) ∝
∫∞
0
dni nβλ−1
i exp
{
−β
2 (n2
i − 2ni)
}
exp { − βαijni nj
}∏
k∈∂i−\j
ηˆk→i(ni) , (S63)
which is now the update rule for the link-to-node cavity marginals ηˆi→j(nj). Importantly, once the messages ηˆi→j(nj) are determined, the cavity marginals ηi→j(ni) follow directly, as we can see by rewriting Eq. (S61) as:
S13

ηi→j(ni) ∝ nβλ−1
i exp
{
−β
2 (n2
i − 2ni)
}∏
k∈∂i−\j
ηˆk→i(ni). (S64)
We can then analyze the BP convergence directly at the level of the link-to-node cavity messages ηˆi→j(nj). As said before, the advantage is that ηˆi→j(nj) is a well-behaved function that allows us to avoid the divergence of ηi→j(ni) at ni = 0. If we initialize all the messages ηˆi→j(nj) to the uniform distribution over nj, the update rule (S63) in the first iteration step becomes:
ηˆi→j(nj) ∝
∫∞
0
dni nβλ−1
i exp
{
−β
2 (n2
i − 2ni)
}
exp { − βαijni nj
}. (S65)
The advantage of this initialization is that we can rewrite Eq. (S65) as
ηˆi→j(nj) ∝
∫∞
0
dninβλ−1
i exp
{
−β
2 n2
i + βni(1 − αijnj)
}
(S66)
=1
β
βλ 2
∫∞
0
dx x−p−1 exp
{
− x2
2 − zx
}
, (S67)
where in the last passage we introduced the change of variable x = √βni, with p = −βλ,
z = √β(αijnj − 1). The integral in Eq. (S67) can be exactly solved and expressed in terms of parabolic cylinder functions Dp(z). In particular, as it is shown in Eq. 9.241 in Ref. [7], the integral (I) is equivalent to:
I = Γ(−p)
e− z2
4
Dp(z), (S68)
where Γ(−p) is the Euler’s Gamma function. The first iteration step for the update of the message ηˆi→j(nj) then corresponds to
ηˆi→j(nj) ∝ β− βλ
2 Γ(βλ) e β
4 (αij nj −1)2 D−βλ
(√β(αijnj − 1)
)
, (S69)
which then has to be normalized. For the following iteration steps, instead, we go back to Eq. (S63), which we rewrite as
ηˆi→j(nj) ∝ exp
{β
2 (1 − αijnj)2} ∫ ∞
0
dni nβλ−1
i exp
{
−β
2 (ni − 1 + αijnj)2} ∏
k∈∂i−\j
ηˆk→i(ni).
(S70)
In order to analyze the integral part of Eq. (S70), which we will denote by Ii→j(nj), let us split it at some δ > 0:
Ii→j(nj) =
∫δ
0
dni nβλ−1
i exp
{
−β
2 (ni − 1 + αijnj)2} ∏
k∈∂i−\j
ηˆk→i(ni)+
+
∫∞
δ
dni nβλ−1
i exp
{
−β
2 (ni − 1 + αijnj)2} ∏
k∈∂i−\j
ηˆk→i(ni). (S71)
S14

For δ ≪ 1, the first contribution, i.e. the integral between 0 and δ, can be approximated as:
Iδ
i→j(nj) = exp
{
−β
2 (1 − αijnj)2} ∏
k∈∂i−\j
ηˆk→i(0) δβλ
βλ , (S72)
where we performed the integration of the factor nβλ−1
i over the interval [0, δ], while approximating the remaining part of the integrand by its value at ni = 0. Substituting Eqs. (S71) and (S72) into Eq. (S70), we obtain the following BP update rule for the cavity messages ηˆi→j:
ηˆi→j(nj) = 1
zˆi→j
[ δβλ
βλ
∏
k∈∂i−\j
ηˆk→i(0)+
+
∫∞
δ
dni nβλ−1
i exp
{
−β
2 (n2
i − 2ni)
}
exp
{
− βαijninj
}∏
k∈∂i−\j
ηˆk→i(ni)
]
. (S73)
After having initialized the messages following Eq. (S69), the update rule of the continuous BP equations is given by Eq. (S73). This approach is general, but we specifically used it in order to study the transition from a single-equilibrium phase (where BP converges) to a multiple-equilibria one (where BP does not converge) in the presence of homogeneous (σ = 0) and competitive interactions (μ > 0). The results are in Subsection IV.C of the main text. In this case, the species abundances will onl-
y rarely be larger than the carrying capacities, which in our case are all equal to 1. Some thermal fluctuations could drive species to abundances slightly larger than 1, but we
can safely restrict the integral ∫ ∞
δ in Eq. (S73) to the interval [δ, 2]. In our implementation,
we set δ = 10−4 and compute the integral numerically. Let us specify that in our analysis we used a sequential update, meaning that at each
iteration step k, each ηˆ(k)
i→j(nj) is updated to ηˆ(k+1)
i→j (nj) asynchronously. In particular, the order of updates follows a random fixed sequence of directed edges i → j. This sequential approach is essential to avoid convergence inconsistencies, ensuring that BP stops converging only once the multiple-equilibria phase is reached. These issues are also discussed in Appendix C of the main text. As for IBMF and numerical integration, the code is available at Ref. [8].
References
[1] Wang, Y., Chakrabarti, D., Wang, C., and Faloutsos, C. “Epidemic spreading in real networks: an eigenvalue viewpoint”. In: 22nd International Symposium on Reliable Distributed Systems, 2003. Proceedings. 2003, pp. 25–34. 10.1109/RELDIS.2003.1238052.
[2] Pastor-Satorras, R., Castellano, C., Van Mieghem, P., and Vespignani, A. “Epidemic processes in complex networks”. Reviews of Modern Physics 87.3 (2015), p. 925. 10. 1103/RevModPhys.87.925.
S15

[3] Cator, E. and Van Mieghem, P. “Second-order mean-field susceptible-infected-susceptible epidemic threshold”. Physical review E 85.5 (2012), p. 056111. 10.1103/PhysRevE. 85.056111.
[4] Mata, A. S. and Ferreira, S. C. “Pair quenched mean-field theory for the susceptibleinfected-susceptible model on complex networks”. EPL (Europhysics Letters) 103.4 (2013), p. 48003. 10.1209/0295-5075/103/48003.
[5] Tonolo, T., Angelini, M. C., Azaele, S., Maritan, A., and Gradenigo, G. Generalized Lotka-Volterra model with sparse interactions: non-Gaussian effects and topological multiple-equilibria phase. 2025. arXiv: 2503.20887 [cond-mat.stat-mech].
[6] Roy, F., Biroli, G., Bunin, G., and Cammarota, C. “Numerical implementation of dynamical mean field theory for disordered systems: application to the Lotka–Volterra model of ecosystems”. Journal of Physics A: Mathematical and Theoretical 52.48 (2019), p. 484001. 10.1088/1751-8121/ab1f32.
[7] Gradshteyn, I. and Ryzhik, I. Table of Integrals, Series, and Products. Elsevier, 7th Edition, 2007. isbn: 9780123736376.
[8] Machado, D., Valigi, P., Tonolo, T., and Angelini, M. C. GenLotkaVolterra_SparseGraphs: GitHub Repository for this article. 2025. 10.5281/zenodo.17612770.
S16

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:26.260Z
- **Text Length:** 133919 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 38 of 38
