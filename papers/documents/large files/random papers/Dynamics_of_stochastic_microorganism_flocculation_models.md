# PDF Document: Hening et al. - 2025 - Dynamics of stochastic microorganism flocculation models.pdf

**File Path:** Hening et al. - 2025 - Dynamics of stochastic microorganism flocculation models.pdf

**Processed Date:** 2026-02-10T18:14:30.297Z

**File Size:** 509.59 KB

**Total Pages:** 22

**Extracted Pages:** 22

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3725

**Title:** Dynamics of stochastic microorganism flocculation models

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

DYNAMICS OF STOCHASTIC MICROORGANISM FLOCCULATION MODELS
ALEXANDRU HENING, NGUYEN T. HIEU, DANG H. NGUYEN, AND NHU NGUYEN
Abstract. In this paper we study the dynamics of stochastic microorganism flocculation models. Given the strong influence of environmental and seasonal fluctuations that are present in these models, we propose a stochastic model that includes multiple layers of stochasticity, from small Brownian fluctuations, to possibly large changes due to environmental ‘shifts’. We are able to give a full classification of the asymptotic behavior of these models. New techniques had to be developed to prove the -
persistence and extinction of the process as the system is not in Kolmogorov form and, as a result, the analysis is significantly more involved.
Keywords. flocculation model, switching diffusion, ergodicity, invariant measures, persistence, extinction
1. Introduction
Flocculation describes a process where particles coagulate, coalesce or agglomerate due to weak interactions. This leads to phase separation due to the formation of large clusters. A flocculant is an agent that can lead to flocculation and therefore to a coagulation of various dispersed particles into an aggregate - see [SS01, RSBC09, SYF18, LSL+21]. There are three main types of flocculants: organic, inorganic and biological. There are good reasons [LSL+21] to prefer bioflocculants as organic and-
 inorganic flocculants can be unsafe due to toxicity. Among bioflocculants an interesting class is the one composed of microbial flocculants. These are not toxic and do not provide primary or seconday sources of pollution [LZJ+15]. Microbial flocculants have already been used extensively in various industrial fields, from wastewater treatment [AVHPA17, PMD+18] and activated sludge dewatering [LML+14] to the removal of pathogens from water [MYY+14, ZLZ13] and in the harvesting of marine microalgae -
[LLA09]. Our goal was to explore some important mathematical models which describe the flocculation of microorganisms and to describe the long-term behavior of these systems. It turns out that the analysis is quite involved as these systems are not in the standard Kolmogorov form
dXi
dt (t) = Xifi(X(t))
which usually appears in the population dynamics literature. The role of the environment in shaping species interactions cannot be overlooked. Since environmental conditions often vary in random and unpredictable ways, it is essential to develop mathematical models that can account for both stochastic environmental fluctuations and the nonlinear dynamics of intra- and interspecies interactions. There are cases where biotic interactions alone may drive a species to extinction, yet the introduction -
of random environmental variation can reverse this outcome and promote coexistence. Conversely, deterministic systems in which all species persist may lead to extinction once environmental randomness is introduced. Recent advances in this field rely on modeling population dynamics through discrete- or continuous-time Markov processes and studying their long-term behavior ([Che00, ERSS13, EHS15, LES03, SLS09, SBA11, BEM07, BS09, BHS08, CM10, CCL+09, FS24, Ben23]).
1
arXiv:2511.12975v1 [math.PR] 17 Nov 2025

2 A. HENING, N. T. HIEU, D.H. NGUYEN, AND N. NGUYEN
One useful approach to investigating species coexistence is to calculate the average per-capita growth rate of a population when it is rare. A positive value suggests that the population tends to increase from low density, while a negative value implies decline and eventual extinction. In twospecies systems, coexistence occurs when each species is capable of invading while rare, provided the other species is at equilibrium ([Tur77, CE89, EHS15]). A well-established theoretical framework exists for-
 coexistence in deterministic models ([Hof81, Hut84, HS89]). Beginning with the foundational work of [Hof81], it was demonstrated that persistence is guaranteed if there exists a set of fixed weights assigned to the populations such that the weighted sum of their invasion rates remains positive for any invariant measure supported on the boundary. More recently, considerable attention has been given to to the study of stochastic differential equations (SDE) models models. For general stochastic dif-
ferential equations with arbitrary noise intensity, sufficient conditions for persistence and extinction have been established in [SBA11, HN18, HNC21, HNS22, Ben23, FS24]. While SDE models are well studied, Brownian noise is not always the most suitable type of noise. Even though, one could argue, small Brownian fluctuations should always be included, sometimes there are more abrupt and significant environmental changes. These can be modeled by a discrete component ξ(t) which switches randomly bet-
ween finitely many environmental states. This leads to stochastic differential equations with switching. In a fixed environmental state the system is modeled by stochastic differential equations. This way we can capture the more realistic behavior of two types of environmental fluctuations:
• major changes of the environment (daily or seasonal changes), • small Brownian fluctuations within each environment.
General properties for these processes have been studied thoroughly [YZ10, ZY09, NYZ17]. However, there are few general results regarding the persistence of ecological systems modeled by stochastic differential equations with switching [HL21]. Another novelty in the model studied in this paper is that boundedness and dissipativity conditions fail. Loosely speaking, dissipativity requires that if a species has a high density, then the species will strongly drift towards zero. This fails in our mode-
l and therefore we cannot immediately use the methods from [HN18, HNC21, HNS22].
1.1. Mathematical Setup and Results. Consider first the model without any environmental fluctuations.
(1.1)
dS
dt (t) = [D(S0 − S(t)) − μ1S(t)X(t)]
dX
dt (t) = μ2S(t)X(t) − DX(t) − h2X(t)P (t)
dP
dt (t) = D(P0 − P (t)) − h3X(t)P (t)
where S(t), X(t), P (t) are the concentrations of the nutrient (or the medium), microorganisms and flocculants at time t ≥ 0. The parameters have the following biological interpretations: D, S0 > 0 are the velocity and the input concentration of the medium, μ1 > 0 is the consumption or death rate of the medium, μ2 > 0 is the yield of the microorganisms, h2 > 0 is the flocculation rate, P0 > 0 is the input concentration of flocculant, and h3 > 0 is the consumption rate of the flocculant. The long-t-
erm behavior of (1.1) is known. According to [ZZ20, ZZ21], if S0 < h2P0+D
μ2 the
microorganisms go extinct and the dynamics converges to (S0, 0, P0) while if S0 > h2P0+D
μ2 there
exists a unique asymptotically stable fixed point (S∗, X∗, P ∗) ∈ R3,◦
+ := (0, ∞)3.

DYNAMICS OF STOCHASTIC MICROORGANISM FLOCCULATION MODELS 3
We consider a stochastic model of the form
(1.2)
dS(t) = [D(ξ(t))(S0 − S(t)) − μ1(ξ(t))S(t)X(t)]dt + σ1S(t)dW1(t)
dX(t) = [μ2(ξ(t))S(t)X(t) − D(ξ(t))X(t) − h2(ξ(t))X(t)P (t)]dt + σ2X(t)dW2(t)
dP (t) = [D(ξ(t))(P0 − P (t)) − h3(ξ(t))X(t)P (t)]dt + σ3P (t)dW3(t)
where (W1(t), W2(t), W3(t)) is a standard Brownian motion on R3. Define Y(t) := (S(t), X(t), P (t)) and let y ∈ R3,◦
+ denote the initial conditions, that is Y(0) := (S(0), X(0), P (0)) = y = (s, x, p) = (y1, y2, y3).
The switching process ξ(t) lives on a finite state space M := {1, . . . , m0} and is defined by
(1.3) P{ξ(t + ∆) = j | r(t) = i, Y(s), r(s), s ≤ t} = qij∆ + o(∆) if i ̸= j and
P{ξ(t + ∆) = i | r(t) = i, Y(s), r(s), s ≤ t} = 1 + qii∆ + o(∆).
The above equation says that the probability that the process ξ(t) jumps from ξ(t) = i to the state j ̸= i in the small time ∆ is approximately equal to qij∆. Here qii := − P
j̸=i qij quantifies the probability of staying in the same state i. We will assume that Q = (qij)m0×m0 is irreducible. This implies that the process ξ(t) has a unique stationary distribution (π1, . . . , πm0) which is the unique solution of
X
j
(πjqji − πiqij) = 0.
It is well-known [YZ10] that a process (Y(t), ξ(t)) satisfying (1.2) and (1.3) is a Markov process with generator acting on functions G : Rn+ × N 7→ R that are continuously differentiable in y for each k ∈ N as
(1.4) LG(y, k) =
n
X
i=1
Fi(y, k) ∂G
∂yi
(y, k) + 1
2
3
X
l=1
σ2
l
∂2G
∂y2
l
(y, k) +
X
l∈M
qklG(y, l).
where Fi(y, k) are the drift terms from (1.2). The first theorem tells us that we can bound the moments of the process, and that the process stays in compact sets with a large probability.
Theorem 1.1. For any initial value (y, k) ∈ R3+ × M, there exists uniquely a global solution Y(t)
to (1.2) such that Py,k{Y(t) ∈ R3+, ∀t ≥ 0} = 1. Moreover, S(t) > 0 and P (t) ≥ 0 for all t > 0 with probability 1 and if X(0) = 0 then X(t) = 0 for all t ≥ 0 with probability 1. If X(0) > 0 then X(t) > 0 for all t ≥ 0 with probability 1. We also have that (Y(t), ξ(t)) is a Markov-Feller process on R3 × M. Furthermore, there exists q0 > 1 such that for any q ∈ [1, q0],
(1.5) Ey,k(1 + |Y(t)|)q ≤ (1 + |y|)qe−c1,qt + c2,q where |y| = s + x + p.
for some positive constants c1,q and c2,q. There exists K > 0 such that
(1.6) Ey,k(1 + |Y(t)|)2 ≤ eKt(1 + |y|)2.
For any ε > 0, H > 0, T > 0, there exists Ke (ε, H, T ) > 0 such that
(1.7) Py,k
n
|Y| ≤ Ke (ε, H, T ), 0 ≤ t ≤ T
o
≥ 1 − ε given |y| ≤ H.
Let (Sb, Pb) satisfy
(1.8) dSb(t) = [D(ξ(t))(S0 − Sb(t))]dt + σ1Sb(t)dW1(t)
d
Pb(t) = [D(ξ(t))(P0 − Pb(t))]dt + σ3Pb(t)dW3(t).
By an easy application of Theorem 1.1 we get the following.

4 A. HENING, N. T. HIEU, D.H. NGUYEN, AND N. NGUYEN
Corollary 1.2. The solution process (Sb(t), Pb(t), ξ(t)) of (1.8) is a Markov Feller process on R2+×M
and for any initial value (s, p, k) ∈ R2+ × M, we have (Sb(t), Pb(t)) ∈ R2,◦
+ , t ≥ 0 with probability 1. Moreover, we have
(1.9) Es,p,k(1 + Sb(t) + Pb(t))q ≤ (1 + s + p)e−c1,qt + c2,q.
There is a unique invariant probability measure νb on R2+ × M and the following two properties hold
(1) νb(R2,◦
+ × M) = 1. (2) P
k∈M
R
R2
+
(1 + s + p)qνb(dsdp, k) ≤ c2,q, q ≤ q0.
Proof. The moment boundedness from (1.9) together with the nondegeneracy of the diffusion implies by [YZ10] the existence of a unique invariant probability measure νb on R2+ × M. We get that
ν b (R2,◦
+ × M) = 1 because any initial value (s, p, k) ∈ R2+ × M, we have (Sb(t), Pb(t)) ∈ R2,◦
+ ,t ≥ 0 with probability 1. □
Using Corollary 1.2 we can define the invasion rate of the microorganisms by
(1.10) Λ =
X
k∈M
Z
R2
+
μ2(k)s − h2(k)p − σ22(k)
2 νb(dsdp, k).
Remark 1.1. Loosely speaking, the invasion rate (also called the Lyapunov exponent) tells us what happens when one introduces the microorganisms at an infinitesimally small density in the ecosystem where the nutrient and flocculants are at stationarity. To see the intuition behind invasion rates and population dynamics we refer the reader to [SBA11, HN18, HNC21].
Define
(1.11) A := Q − diag(D(1), D(2), · · · , D(m0)).
Then A is nonsingular. Let
η = (η(1), · · · , η(m0))⊤ = A−1m2
and
ζ = (ζ(1), · · · , ζ(m0))⊤ = A−1h1
where m2 = (−μ2(1), · · · , −μ2(m0))⊤ and h1 = (h1(1), · · · , h1(m0))⊤. The next lemma shows that we can explicitly compute λ.
Lemma 1.1. We have
Λ=
X
k∈M
D(k)(ξ(k) + ζ(k)) − σ22(k)
2 πk.
Usually invasion-rates cannot be computed explicitly for higher dimensional systems so it is very interesting that it can be done in this setting. The next result tells us that if λ is negative then the microorganisms go extinct with probability 1. Furthermore, it also gives the exact exponential rate of extinction.
Theorem 1.3. If Λ < 0 then for any Y(0) = y ∈ R3,◦
+ we have with probability 1 that
(1.12) tli→m∞
ln X(t)
t =Λ
which means that X goes extinct exponentially fast at rate Λ.
If Λ > 0 we get stochastic persistence as shown in the next result.

DYNAMICS OF STOCHASTIC MICROORGANISM FLOCCULATION MODELS 5
Theorem 1.4. If Λ > 0 then there exist an invariant measure ν◦ on R3,◦
+ × M, q > 1 such that
for any (y, k) ∈ R3,◦
+ ×M
(1.13) tli→m∞ tq−1∥Pt(y, k, ·) − ν◦(·)∥T V = 0,
where ∥ · ∥T V is the total variation metric and Pt(y, k, ·) = Py((Y(t), ξ(t)) ∈ ·) is the transition probability of the process (Y(t), ξ(t)).
In Section 4 we explore how nonlinear noise can be treated.
2. Proof of the extinction result (Theorem 1.3)
We start by first proving Theorem 1.1 and Lemma 1.1.
Proof of Theorem 1.1. The existence and uniqueness of solutions can be proved similarly to [ZZ20, Theorem 2.1] or [NNY20, Theorem 2.1]. The proof for the Markov-Feller property of (Y(t)) can be done by applying [NYZ17, Theorem 5.1].
Let α2 = min{ μ2(k)
μ1(k) , k ∈ M}. It is easy to see that we can find q0 ∈ (1, 2) and α0 > 0 such that
the following inequality holds for all y ∈ R3+
−(q0 − 1)(σ2
1 (k)(σ2
1(k)s2 + α2
2σ2
2(k)x2 +2 σ2
3(k)p2) + D(k)α0(1 + s + α2x + p)2 ≥ α0(1 + s + α2x + p)2.
Define the function
(2.1) U q(y) = (1 + x + α2y + z)q.
For 0 < q ≤ q0, we have
(2.2)
[LU q](y, k) =[U q]s(y) D(k)(S0 − s) − μ1(k)sx
+ [U q]x(y) μ2(k)sx − D(k)x − h2(k)xp
+ [U q]z(y) D(k)(P0 − p) − h3(k)xp
+1
2 σ2
1(k)[U q]sss2 + σ2
2(k)[U q]xxx2 + σ3
3(k)[U q]ppp2
≤q(D(k)(S0 + P0 − S(t) − X(t) − P (t)))(1 + s + α2x + p)q−1
+ q(q − 1)
2 (1 + s + α2x + p)q−2(σ2
1s2 + α2
2σ2
2x2 +2 σ2
3 p2 )
≤q D(k)(1 + s + α2x + p)q−1 − qα0(1 + s + α2x + p)q
≤Cq − qα0U q(y) ∀y ∈ R3
+ for some constant Cq > 0.
By Dynkin’s formula, we have
(2.3)
Eyeα0(t∧τn)U q(Y(t ∧ τ n)) ≤U q(y) + Ey
Z t∧τ n
0
Cq0 eqα0sds
≤U q(y) + Cq0
Zt
0
eqα0sds
≤U q(y) + Cq0
qα0
eqα0t
where the stopping time τ is defined by τn = inf{t ≥ 0 : U (y) ≥ n}. Dividing both sides by eqα0t we obtain (1.5). Similary, with some elementary estimates, we have [LU 2](y, k) ≤ K U 2, ∀y ∈ R3+, k ∈ M. Thus, by Dynkin’s formula,
(2.4) Eye−KtU 2(Y(t ∧ τ n)) ≤ Eye−K(t∧τn)U 2(Y(t ∧ τ n)) ≤U 2(y).

6 A. HENING, N. T. HIEU, D.H. NGUYEN, AND N. NGUYEN
Letting n → ∞, we can derive (1.6) from Lebesgue’s dominated convergence theorem. One can then obtrain (1.7) from (2.4). □
Let c0 be sufficiently large such that (2.5) −2d(k)[(s − se)2 + (p − pe)2] + σ2
1(k)(s − se)2 + σ2
3(k)(p − pe)2 + 2(s − se)μ1(k)sexe + 2(p − pe)h2(k)pexe
≤ c0 s − se)2 + (p − pe)2 + (se + pe)2
xe2 for all s, se, p, pe, xe > 0.
Since in this subsection we look at extinction, we remind the reader that Λ < 0. Let γ0 := − Λ
3 > 0 and pick λ > γ0 + σ12 ∨ σ22 + c0
2 . We will consider the following coupling process.
(2.6)

           
           
dS(t) = [D(ξ(t))(S0 − S(t))]dt + σ1(ξ(t))S(t)dW1(t)
dP (t) = [D(ξ(t))(P0 − P (t))]dt + σ2(ξ(t))P (t)dW3(t)
d
Se(t) = [D(ξ(t)(S0 − Se(t)) − μ1(ξ(t))Se(t)Xe(t)]dt + σ1(ξ(t))Se(t)dW1(t)
+λ1{t<τeδ}(S(t) − Se(t))dt
d
Pe(t) = [D(ξ(t)(P0 − Pe(t)) − h2Xe(t)Pe(t)]dt + σ3Pe(t)dW3(t)
+λ1{t<τeδ}(P (t) − Pe(t))dt
d
Xe(t) = Xe(t)
h
μ2(ξ(t))Se(t) − h2(ξ(t))Pe(t)
i
dt + σ2(ξ(t))Xe(t)dW2(t)
This coupling will help us prove the extinction results by ensuring that we can control certain processes and keep them close on an infinite time horizon with high probability.
Proof of Lemma 1.1. Since qij > 0 for i ̸= j and qii = − P
j̸=i qij, it is easy to see that A is a strictly
diagonally dominant matrix. As a result, A is nonsingular and A−1 exists. By Itˆo’s formula, we have
(2.7)
Eνb η(ξ(T ))S(T ) + ζ(ξ(T ))P (t) =Eνb η(ξ(0))S(0) + ζ(ξ(0))P (0)
+ Eνb
ZT
0
D(ξ(t))[η(ξ(t)) + ζ(ξ(t))]dt
+ Eνb
ZT
0

−D(ξ(t))η(ξ(t)) +
X
j∈M
qξ(t),j η(j)

 S(t)dt
+ Eνb
ZT
0

−D(ξ(t))ζ(ξ(t)) +
X
j∈M
qξ(t),j ζ(j)

 P (t)dt
=Eνb η(ξ(0))S(0) + ζ(ξ(0))P (0)
+ Eνb
ZT
0
D(ξ(t))[η(ξ(t)) + ζ(ξ(t))]dt
+ Eνb
ZT
0
−μ2(ξ(t))S(t) + h1(ξ(t))P (t) dt
where the last equality comes from the fact that −D(k)η(k) + P
j∈M qkjη(k) = −μ2(k) and −D(k)ζ(k) + P
j∈M qkjζ(k) = h1(k). In the equation above the subscript of Eνb indicates that we
condition on the initial distribution νb. This implies that (S(t), P (t), ξ(t)) has distribution νb for any t ≥ 0 since νb is an invariant probability measure. As a result,
(2.8) Eνb η(ξ(T ))S(T ) + ζ(ξ(T ))P (t) = Eνb η(ξ(0))S(0) + ζ(ξ(0))P (0) ,
(2.9) Eνb
ZT
0
−μ2(ξ(t))S(t) + h1(ξ(t))P (t) dt = T
X
k∈M
Z
R2
+
(η(k)s + ζ(k)p) νb(dsdp)

DYNAMICS OF STOCHASTIC MICROORGANISM FLOCCULATION MODELS 7
and
(2.10)
Eνb
ZT
0
D(ξ(t))[η(ξ(t)) + ζ(ξ(t))]dt =T
X
k∈M
Z
R2
+
(D(k)(ξ(k) + ζ(k))) νb(dsdp)
=T
X
k∈M
(D(k)(ξ(k) + ζ(k))πk
where the last equality is due to the fact that the process ξ(t) has a unique invariant probability measure π. Plugging (2.8), (2.9) and (2.10) into (2.7), we have
X
k∈M
Z
R2
+
(η(k)s + ζ(k)p) νb(dsdp) =
X
k∈M
(D(k)(ξ(k) + ζ(k))πk.
Thus,
Λ=
X
k∈M
Z
R2
+
(η(k)s + ζ(k)p) νb(dsdp) −
X
k∈M
σ22(k)
2=
X
k∈M
D(k)(ξ(k) + ζ(k)) − σ22(k)
2 πk.
□
Lemma 2.1. For any δ > 0, s, p ≥ 0, ε ∈ (0, 1), there exists M0 = M0(ε, δ, s, p) such that
Ps,p,k
n
S(t) + P (t) + S−1(t) + P −1(t) ≤ M0eδt, t ≥ 0
o
≥ 1 − ε.
Proof. Consider the Markov process (S(t), ξ(t)) where S(t) satisfying
dS(t) = [D(ξ(t))(S0 − S(t))]dt + σ1(ξ(t))S(t)dW1(t), S(0) = s > 0.
Let Φ(s) = s + s−1. By Itˆo’s formula, and a standard algebraic inequality, we have
dΦ(S(t)) =
"
D(ξ(t))(S0 − S(t)) − D(ξ(t)) (S0 − S(t))
S2(t)
+ σ2
1(ξ(t)) 1
S(t)
#
dt
+ σ1(ξ(t))S(t)dW1(t) − σ1(ξ(t)) 1
S(t) dW1(t)
≤[CΦ − DmΦ(S(t))]dt + σ1(ξ(t))S(t)dW1(t) − σ1(ξ(t)) 1
S(t) dW1(t)
where Dm = min{D(k) : k ∈ M} and Cφ is a sufficiently large constant. Applying Dynkin’s formula, we deduce that
(2.11) Es,keDm(τL∧t)Φ(S(τ L ∧ t)) ≤ Φ(s) + Es,k
Z τ L∧t
0
CΦeDmsds ≤ Φ(s) + CΦeDmt
Dm
,
where τ L := inf{t ≥ 0 : Φ(S(t)) ≥ L}. Letting L → ∞ and then diving both sides of (2.11) by eDmt we have
(2.12) Es,kΦ(S(τ L ∧ t)) ≤ Φ(s) + CΦ
Dm
,t ≥ 0
On the other hand, for any L > 0, applying Markov’s inequality we have from (2.11) that
P
(
sup
t∈[0,1]
Φ(S(t)) ≥ L
)
≤1
L Es,kΦ(S(τ L ∧ 1)) ≤ 1
L Φ(s) + CΦeDm
Dm
By the Markov property of (X, ξ(t)) and by applying the inequality above for L = M01eδn we have
P
(
sup
t∈[n,n+1]
V (X(t), Y (t)) > M01eδn
)
≤1
M01eδn Es,kΦ(S(n)) + CΦeDm
Dm
≤1
M01eδn Φ(s) + CΦ
Dm
+ CΦeDm
Dm

8 A. HENING, N. T. HIEU, D.H. NGUYEN, AND N. NGUYEN
where the last inequality is due to (2.12). As a result, (2.13)
P
(
sup
t∈[n,n+1]
V (X(t), Y (t)) ≤ M01eδθn, for all n ∈ Z+
)
> 1 − Φ(s) + CΦ
Dm
+ CΦeDm
Dm
∞
X
n=1
1
M01eδn
For ε > 0, pick M01 = M01(s, ε, δ) such that Φ(s) + CΦ
Dm + CΦeDm
Dm
P∞ n=1
1
M01eδn ≤ ε
2 , we have
Ps,k
n
S(t) + S−1(t) ≤ M01eδt, t ≥ 0
o
≥1− ε
2 for all ε ∈ (0, 1).
Similarly, we can find M02 such that
Pp,k
n
P (t) + P −1(t) ≤ M02eδt, t ≥ 0
o
≥1− ε
2 for all ε ∈ (0, 1).
Combining two displays above we can complete the proof. □
Proposition 2.1. We have that
(2.14) E sup
0≤t≤τeδ
eγ0t[(S(t) − Se(t))2 + (P (t) − Pe(t))2] ≤ Ce((x − xe)2 + (y − ye)2 + δ2)
where
τeδ = inf
n
t ≥ 0 : (Se(t) + Pe(t))Xe(t) ≥ δe−γ0to
.
Moreover, there are Mfε,x,y, me ε,x,y > 0 such as
(2.15) Px,y,ye
( Z
τeδ
0
|v1(t)|2 + |v2(t)|2)dt ≥ Mfε,x,y((s − se)2 + (p − pe)2 + δ2)
)
≤ε
as long as (s − se)2 + (p − pe)2 + δ2 ≤ me ε,x,y where
v1(t) = λ(S(t) − Se(t))
σ1(ξ(t))Se(t) and v3(t) = λ(P (t) − Pe(t))
σ3(ξ(t))Pe(t) .
Proof. Using (2.5) we get
(2.16)
d[(S(t) − Se(t))2 + (P (t) − Pe(t))2]
=
h
− 2D(ξ(t))[(S(t) − Se(t))2 + (P (t) − Pe(t))2
+ σ2
1(ξ(t))(S(t) − Se(t))2 + σ2
3(ξ(t))(P (t) − Pe(t))2
+ 2(S(t) − Se(t))μ1(ξ(t))Se(t)Xe(t) + 2(P (t) − Pe(t))h2Pe(t)Xe(t)
− 2γ[(S(t) − Se(t))2 + (P (t) − Pe(t))2i
dt
+ 2σ1(ξ(t))(S(t) − Se(t))2dW1(t) + 2σ3(ξ(t))(P (t) − Pe(t))2dW3(t)
≤ (−2γ + c0)[(S(t) − Se(t))2 + (P (t) − Pe(t))2]dt
+ c0(Se(t) + Pe(t))2Xe2(t)dt
+ 2σ1(ξ(t))(S(t) − Se(t))2dW1(t) + 2σ3(ξ(t))(P (t) − Pe(t))2dW3(t)
By Itˆo’s formula and Cauchy’s inequality, we have (2.17) de2γ0t[(S(t) − Se(t))2 + (P (t) − Pe(t))2]2
≤ −(4γ − 4γ0 + 4c0 + 4σˇ2)e4γ0t[(S(t) − Se(t))2 + (P (t) − Pe(t))2] + c0e4γ0t(Se(t) + Pe(t))4|Ze(t)|4dt
+ 4e4γ0t[(S(t) − Se(t))2 + (P (t) − Pe(t))2]2 σ1(ξ)(S(t) − Se(t))2dW1(t) + σ2(ξ)(P (t) − Pe(t))2dW2(t) .

DYNAMICS OF STOCHASTIC MICROORGANISM FLOCCULATION MODELS 9
where σˇ = max{|σ1(k)|, |σ2(k)|, k ∈ M}. Let τbn = τeδ ∧ inf{n ≥ 0 : (S(t) − Se(t))2 + (P (t) − Pe(t))2 ≥ n}, we have from Dynkin’s formula that
Es,p,ye,ke4γ0t[(S(t) − Se(t))2 + (P (t ∧ τbn) − Pe(∧τbn))2]2 + Es,p,ye,k
Z t∧τeδ
0
e4γ0s[(S(s) − Se(s))2 + (P (s) − Pe(s))2]2
≤E
Z t∧τbn
0
c0e4γ0s(Se(t) + Pe(t))4|Ze(s)|4ds + ((s − se)2 + (p − pe)2)2,
Letting n → ∞ we have from Lebesque’s dominated theorem that
(4γ − 4γ0 + 2c0 + 4σˇ2)E
Z t∧τeδ
0
e4γ0s[(S(s) − Se(s))2 + (P (s) − Pe(s))2]2
≤E
Z t∧τeδ
0
c0e4γ0s(Se(t) + Pe(t))4|Xe(s)|4ds + ((x − xe)2 + (y − ye)2)2.
Consequently, we have from the definition of τeδ that
(2.18) E
Z t∧τeδ
0
e4γ0s[(S(s) − Se(s))2 + (P (s) − Pe(s))2]2 ≤ C((x − xe)4 + (y − ye)4 + δ4)
Here and thereafter, C is a generic constant independent of |x − xe|, |y − ye| and δ and C can be different in different lines. Now, applying Itoˆ’s fomula to (2.16), we have
(2.19)
de2γ0t[(S(t) − Se(t))2 + (P (t) − Pe(t))2]
≤ −(λ − 2γ0 − c0)e2γ0t[(S(t) − Se(t))2 + (P (t) − Pe(t))2] + c0e2γ0t(Se(t) + Pe(t))2Xe2(t)dt
+ e2γ0t σ1(ξ(t))(S(t) − Se(t))2dW1(t) + σ3(ξ(t))(P (t) − Pe(t))2dW2(t) .
Then taking expectation yields (2.20)
E sup
t≤T ∧τeδ
e2γ0t[(S(t) − Se(t))2 + (P (t) − Pe(t))2]
≤E
Z T ∧τeδ
0
c0e2γ0s(Se(s) + Pe(s))2Xe2(t)ds
+ E sup
t≤T ∧τeδ
Zt
0
n
e2γ0s σ1(ξ(s))(S(s) − Se(s))2dW1(s) + σ2(ξ(s))(P (s) − Pe(s))2dW2(s)
o
In view of the Burkholder-Davis-Gundy inequality, we have
(2.21)
E sup
t≤T ∧τeδ
Zt
0
n
e2γ0s σ1(S(s) − Se(s))2dW1(s) + σ2(P (s) − Pe(s))2dW2(s)
o
≤C
"
E
Z t∧τeδ
0
e4γ0s[(S(s) − Se(s))2 + (P (s) − Pe(s))2]2
#1
2
≤C((x − xe)2 + (y − ye)2 + δ2) (due to (2.18))
and clearly from the definition of τeδ,
(2.22) E
Z T ∧τeδ
0
c0e2γ0s(Se(s) + Pe(s))2Xe2(s)ds ≤ Cδ2.
Applying (2.21) and (2.22) to (2.20), we can easily obtain (2.14). Next, let v1(t) = λ(S(t) − Se(t))
σ1(ξ(t))Se(t)

10 A. HENING, N. T. HIEU, D.H. NGUYEN, AND N. NGUYEN
and v3(t) = λ(P (t) − Pe(t))
σ3(ξ(t))Pe(t) .
In view of Lemma 2.1,
(2.23) Px,y Ωe3 :=
n
[S(t)−1 + P −1(t)]2 ≤ Mε,s,p,1e
γ0 t
2 , for all t ≥ 0
o
≥1− ε
2.
By virtue of (2.14), there is Ce0 independent of (x − xe)2 + (y − ye)2 + δ2 such that Px,y,ye(Ωe4) ≥ 1 − ε
2
where (2.24)
Ωe4 :=
(
e2γ0t[(S(t) − Se(t))2 + (P (t) − Pe(t))2] ≤ Ce0((x − xe)2 + (y − ye)2 + δ2)
ε for all 0 ≤ t ≤ τeδ
)
.
For t ≤ τδ, if S(t) ≥ M −1
ε,s,p,1e− γ0t
2 and (S(t) − Se(t)) ≤ 1
2 M −1
ε,s,p,1e− γ0t
2 , we have
(2.25) 1
Se(t) ≤ 1
S(t) + (S(t) − Se(t)) ≤ 1
M −1
ε,s,p,1e− γ0t
2 + (S(t) − Se(t))
≤ 2Mε,s,p,1e
γ0 t 2
Analogously,
(2.26) 1
Pe(t) ≤ 2Mε,s,p,1e
γ0 t
2 when S(t) ≥ M −1
ε,s,p,1e− γ0t
2 and (S(t) − Se(t)) ≤ 1
2 M −1
ε,s,p,1e− γ0t
2.
If (x − xe)2 + (y − ye)2 + δ2) ≤ ε
4
Ce0M 2
ε,x,y,1
and ω ∈ Ωe3 then
(S(t) − Se(t)) ∨ (P (t) − Pe(t)) ≤ Ce0((x − xe)2 + (y − ye)2 + δ2)
ε
!− 1
2
e− γ0t
2 ≤1
2 M −1
ε,s,p,1e− γ0t
2.
This together with (2.25) and (2.26) implies that
(2.27) 1
Se(t) ∨ 1
Pe(t) ≤ 2Mε,s,p,1e
γ0 t 2
for ω ∈ Ωe3
T
Ωe4 and (x − xe)2 + (y − ye)2 + δ2) ≤ ε
2
Ce0 Mε,x,y,1
.
Note that,
|v1(t)|2 + |v2(t)|2 ≤ 2λ2
σb2 Se−2(t) ∧ Pe−2(t) [(S(t) − Se(t))2 + (P (t) − Pe(t))2]
where σb = min{|σ1(k)|, |σ3(k)|, k ∈ M}. Putting (2.23) and (2.24) and (2.27) together, we have
P
(
|v1(t)|2 + |v2(t)|2 ≤ 8λ2Mε2,s,p,1
σb2
Ce0((x − xe)2 + (y − ye)2 + δ2)
ε e−γ0t/2 for all 0 ≤ t ≤ τeδ
)
≥ 1 − ε,
when (x − xe)2 + (y − ye)2 + δ2) ≤ ε
2
Ce0 Mε,s,p,1
=: me ε,s,p. Now we can see that (2.15) also follows
easily. □
Proposition 2.2. For any (s, p) ∈ R2,◦
+ and ε ∈ (0, 1), there exists ς = ς(s, p, ε) > 0 such that
P
ye
(
tli→m∞
ln X ̃ (t)
t =Λ<0
)
>1−ε
if (se − s)2 + (pe − p)2 + xe2 ≤ ς2.

DYNAMICS OF STOCHASTIC MICROORGANISM FLOCCULATION MODELS 11
Proof. First, we choose δ = δ(ε, s, p) ∈ 0, 1
2 such that
(2.28) 2Mfε,s,pδ2 ≤ ε and 2ε2Mfε,s,p2δ ≤ ε and Ce02δ2
ε ≤1
where Mfε,s,p is determined as in (2.15). We will choose ς ∈ (0, δ) later. Now, we assume that (
se − s)2 + (pe − p)2 + xe2 ≤ ς2 which leads to (se − s)2 + (pe − p)2 + δ2 ≤ 2δ2. Define
Ω1 :=
(
e2γ0t[(S(t) − Se(t))2 + (P (t) − Pe(t))2] ≤ Ce0((s − se)2 + (p − pe)2 + δ2)
ε ≤1
)
Because of the egodicity of (S(t), P (t), ξ(t)), we have that
Ps,p,k
1
t
Zt
0
μ2(ξ(t))S(t) + h1(ξ(t))P (t) − D(ξ(t)) − σ22(ξ(t))
2 dt = λ < 0 = 1.
We also get that if we define
Ω2 := 1
t
Zt
0
μ2(ξ(s))S(s) + h1(ξ(s))P (s) − D(ξ(s)) − σ22(ξ(s))
2 ds ≤ Λ + γ0, t ≥ T
there is T > 0 such that Ps,p(Ω2) > 1 − ε. Letting
Ω3 :=
Zt
0
μ2(ξ(s))S(s) + h1(ξ(s))P (s) − D(ξ(s)) − σ22(ξ(s))
2 ds ≤ Des,p,ε,T , t ≤ T
we see that in view of (1.7) we can find Des,p,ε,T > 0 such that Ps,p(Ω3) ≥ 1 − ε. Moreover, if we set
Ω4 :=
Zt
0
σ2(ξ(s))dW2(s) ≤ σˇ2
2γ0
| ln ε| + γ0t, ∀ t ≥ 0
using the exponential martingale inequality, see e.g. [Mao97], we get P(Ω4) ≥ 1 − ε. By Lemma 2.1, there is M2(ε, s, p) such that Ω5 ≥ 1 − ε, where
Ω5 = {S(t) + P (t) + S−1(t) + P −1(t) ≤ M2(ε, s, p)eγ0t}.
Let K = max{h1(k), μ2(k), k ∈ M}, for 0 ≤ t ≤ T ∧ τeδ, ω ∈ T5
i=1 Ωi we have that (2.29)
ln Xe(t) = ln xe +
Zt
0
μ2(ξ(s))Se(s) + h1(ξ(s))Pe(s) − D(ξ(s)) − σ22(ξ(s))
2 ds +
Zt
0
σ2(ξ(s))W2(s)
≤ ln xe +
Zt
0
μ2(ξ(t))S(t) + h1(ξ(t))P (t) − D(ξ(t)) − σ22(ξ(t))
2 dt +
Zt
0
σ2(ξ(s))W2(s)
+K
Zt
0
|(Ze(t))2 + (P (s) − Pe(s))2| 1
2 ds
≤ ln xe + σˇ2
2γ0
| ln ε| + Des,p,ε,T + γ0t + K
Zt
0
e−γ0sds
≤ ln xe + σˇ2
2γ0
| ln ε| + γ0t + Des,p,ε,T + K
γ0
,
and that
(2.30) ln(Se(t) + Pe(t)) ≤ ln(S(t) + P (t) + 1) ≤ ln Mε,x,y,2 + γ0t.

12 A. HENING, N. T. HIEU, D.H. NGUYEN, AND N. NGUYEN
If ln xe < ln ς := ln δ − ln Mε,x,y,2 + σˇ2
2γ0 | ln ε| + γ0T + Des,p,ε,T + K
γ0 then it is easily seen that
τeδ ≥ T for any ω ∈ T5
i=1 Ωi because
ln Xe(t) + ln(Se(t) + Pe(t)) ≤ ln δ
for any t ≤ T ∧ τeδ for any ω ∈ T5
i=1 Ωi. For T ≤ t ≤ τeδ we have from (2.29) and (2.30) that
ln Xe(t) + ln(Se(t) + Pe(t)) ≤ ln xe + (Λ + 3γ0)t + σˇ2
2γ0
| ln ε| + Des,p,ε,T + K
γ0
+ ln Mε,x,y,2 < ln δ.
In particular, we have
ln Xe(t) + ln(Se(t) + Pe(t)) ≤ ln xe + (Λ + 2γ0)t + σˇ2
2γ0
| ln ε| + Des,p,ε,T + K
γ0
for ω ∈ T5
i=1 Ωi which leads to
(2.31) lim sup
t→∞
ln Xe(t)
t ≤ Λ − 2γ0 < 0 for ω ∈
5
\
i=1
Ωi.
An application of the Cameron-Martin-Girsanov theorem implies that under the measure Qs,p,ye defined by
dQs,p,ye
dPs,p,ye
= exp
(
−
Z
τeδ
0
[v1(s)dW1(s) + v2(s)dW2(s)] −
Z
τeδ
0
[v2
1(s) + v2
2 (s)]ds
)
,
W1(t) + R t∧τeδ
0 v1(s)ds, W2(t) + R t∧τeδ
0 v2(s)ds is a standard two-dimensional brownian motion un
der Q. As a result, (Se(t), Xe(t), Pe(t)) is the solution to (1.2) with initial condition (ye, k) under Q.
Let
Ω6 :=
( Z
τeδ
0
|v1(t)|2 + |v2(t)|2)dt ≥ Mfε,s,p
)
and
Ω7 :=
Zt
0
(v1(s)dW1(s) + v2(s)dW2(s)) ≤ ε2
2δ
Zt
0
|v1(s)|2 + |v2(s)|2)ds + ε .
In view of the exponential martingale inequality, we have
Ps,p,ye(Ω7) ≥ 1 − eε3/δ ≥ 1 − ε
if δ ≤ ε3/(− ln ε). For ω ∈ Ω6
T Ω7, we get that
(2.32)
dQs,p,ye,k
dPs,p,ye,k
= exp
(
−
Z
τeδ
0
[v1(s)dW1(s) + v2(s)dW2(s)] −
Z
τeδ
0
[v2
1(s) + v2
2 (s)]ds
)
≥ exp
(
− ε2
2δ
Zt
0
|v1(s)|2 + |v2(s)|2)ds − ε −
Z
τeδ
0
[v2
1(s) + v2
2 (s)]ds
)
≥e− ε2Mfε,x,y 2δ2
2δ −ε−Mfε,x,y2δ2 ≥ e−3ε ≥ 1 − 4ε (due to (2.28)).
As a result,
Qs,p,ye,k
7
\
i=1
Ωi
!
=
Z
T6
i=1 Ωi
dQs,p,ye,k
dPs,p,ye,k
dPs,p,ye,k ≥ (1−4ε)Ps,p,ye,k
6
\
i=1
Ωi
!
≥ (1−4ε)(1−6ε) = 1−10ε.

DYNAMICS OF STOCHASTIC MICROORGANISM FLOCCULATION MODELS 13
Note that for ω ∈ T7
i=1 Ωi, we have τeδ = ∞ and
(2.33) eγ0t[(S(t) − Se(t))2 + (P (t) − Pe(t))2] ≤ Ce0((x − xe)2 + (y − ye)2 + δ2)
ε.
Thus, we have from (2.31) and (2.33) that
(2.34) tli→m∞[Xe(t) + |Se(t) − S(t)| + |Pe(t) − P (t)|] = 0.
(2.35)
ln Xe(t) = ln xe +
Zt
0
μ2(ξ(s))Se(s) − h1(ξ(s))Pe(s) − D(ξ(s)) − σ22(ξ(s))
2 ds +
Zt
0
σ2(ξ(s))W2(s)
= ln xe +
Zt
0
μ2(ξ(t))S(t) − h1(ξ(t))P (t) − D(ξ(t)) − σ22(ξ(t))
2 dt +
Zt
0
σ2(ξ(s))W2(s)
+
Zt
0
h
μ2(ξ(t))[S(s) − Se(s)] − h1(ξ(t)[P (s) − Pe(s)]
i
ds
Diving both sides of (2.35) by t and then letting t → ∞, we have from (2.34) and the ergodicity of (S(t), P (t), ξ(t)) that
tli→m∞
ln Xe(t)
t = Λ < 0 for almost all ω ∈
7
\
i=1
Ωi.
Finally, because Sb(t) is the solution to (1.2) with initial condition ye under Q and Qs,p,ye,k(T7
i=1 Ωi) ≥
1 − 10ε, we can claim that
P
ye tli→m∞
ln X(t)
t = Λ < 0 = Qs,p,ye,k
(
tli→m∞
ln Xe(t)
t =Λ<0
)
≥ 1 − 11ε
as long as (se − s)2 + (pe − p)2 + xe2 ≤ ς2. □
Proof of Theorem 1.3. Proposition 2.2 shows that there is no invariant measure on R3,◦
+ . So νb is
the unique ergodic invariant probability measure of (Y(t), ξ(t)) on R3+×M. In view of Theorem 1.1,
the family Πy,k
t (·) := 1
t
Rt
0 Py {(Y(s), ξ(s)) ∈ ·} ds, t ≥ 0 is tight in R3+ × M and any weak-limit
of Πy,k
t as t → ∞ must be an invariant probability measure of (Y(t), ξ(t)), that is, the weak-limit must be the unique invariant measure νb; we can refer to [EK09, HN18, Ben23] for the proof that limit points of Πy,k
t have to be invariant measures of (Y(t), ξ(t)).
Let Rε > 0 such that μ12([Rε−1, Rε]2) ≥ 1 − ε. By the Heine–Borel covering theorem, there
exists (x1, y1), · · · , (xl, yl) such that [Rε−1, Rε]2 is covered by the union of disks centered at (xk, yk)
with radius 1
2 ςxk,yk,ε, k = 1, · · · , n. Here ς is determined as in Proposition 2.2. Then, for any
ye ∈ [Rε−1, Rε]2 × (0, 1
2 ςm) with ςm = mink=1,··· ,l{ςxk,yk,ε}, there exists kye ∈ {1, · · · , l} such that
(
se − skye )2 + (pe − pkye )2 + xe2 ≤ ς2
m
Thus,
(2.36) Pye tli→m∞
ln(t)
t = Λ < 0 > 1 − ε, ye ∈ [R−1
ε , Rε]2 × (0, ςm).
For ε > 0 let Rε > 0 be sufficiently large that νb([Rε−1, Rε]2 × M) > 1 − ε. Because of the weak
convergence of Πy,k
t to νb, there exists a Tˇ = Tˇ(y, ε) > 0 such that
Πˇ Tˇ
y ([R−1
ε , Rε]2 × (0, ςm)) > 1 − ε

14 A. HENING, N. T. HIEU, D.H. NGUYEN, AND N. NGUYEN
or in other words,
1 Tˇ
Z Tˇ
0
Py{(Y(t), ξ(t)) ∈ ([R−1
ε , Rε]2 × (0, ςm)) × M}dt > 1 − ε.
Consequently,
Py{τb ≤ Tˇ} > 1 − ε
where τb = inf{t ≥ 0 : Y(t) ∈ [Rε−1, Rε]2 × (0, ςm)}. Using the strong Markov property and (2.36), we deduce that
(2.37) Py tli→m∞
ln X(t)
t = Λ ≥ (1 − ε)(1 − ε) ≥ 1 − 2ε given y ∈ R3,◦
+.
Letting ε → 0 we obtain the desired result. □
3. Proof of Theorem 1.4
Theorem 1.4 is proved by arguments developed in [BBN22]. We begin with citing [BBN22, Lemma 4.6].
Lemma 3.1. Let 1 < p ≤ 2. There exists cp > 0 such that for any a > 0 and x ∈ R we have
(3.1) |a + x|p ≤ ap + pap−1x + cp|x|p
Moreover, there exists dp,b > 0 depending only on p, b > 0 such that if x + a ≥ 0 then
(3.2) (a + x)p − b(a + x)p−1 ≤ ap + pap−1x − b
2 ap−1 + cb,p(|x|p + 1)
It follows straightforwardly from (3.1) that for a random variable R and a constant c > 0, one has that there exists K ̃c > 0 such that
(3.3) E|R + c|p ≤ cp + pcp−1EY + K ̃cE|R|1+p.
In this section, let γ2 > 0, γ3 > 0 such that
L(γ2 ∨ γ3) ≤ 1
2 min{α1, α4 − α2, α5 − α3} and γ2Λ − γ3 α3 + σ32
2 >0
and pick
ρ= 1
2 (−γ3λ2) ∨ γ2λ1 − γ3 α3 + σ32
2 > 0.
Let β > 0 such that β max{h1(k), μ2(k) : k ∈ M} ≤ α0
2 . Pick c1 > 0 such that (s + αx + p) −
β ln x + c1 ≥ 0 for any (s, x, p) ∈ R3,◦
+ and
V (y) = U (y) − β ln x + c1 = s + αx + p − β ln x + c1, y ∈ R3,◦
+.
Using (2.2) we get the following estimate
(3.4)
[LV ](y, k) =[LU ](y, k) − β μ2(k)s − h1(k)p − σ22(k)
2
≤C1 − α0(s + αx + p) − β μ2(k)s − h1(k)p − σ22(k)
2
≤C1 − α0
2 (s + αx + p)
≤C11{U(y)≤M} − α0
4 U (y)
where M = 4C1
α0 .

DYNAMICS OF STOCHASTIC MICROORGANISM FLOCCULATION MODELS 15
Lemma 3.2. There exist T ‵ > 0, δ > 0 such that
Ey,k
ZT
0
LV (Y(s))ds ≤ − βλ
2T
for any T ∈ [T ‵, n‵T ‵], y ∈ R3,◦
+ , |y| ≤ M , and dist(y, ∂R3,◦
+ ) ≤ δ.
Proof. On the boundary R2+ × {0} × M, νb is the unique invariant probability measure.. In view of Theorem 1.1 and [HN18, Lemma 3.3, Lemma 3.4, Lemma 3.5], we easily deduce that
(C1) (x + y + z)q0 is νb-integrable and
(3.5)
X
k∈M
Z
R3
+
[LU ](y, k)νb(dy, k)
=
X
k∈M
Z
R3
+
[D(k)(s − αx + y) + (αμ2(k) − μ1(k))sx − (αh1(k) + h2(k))xp] νb(dy, k) = 0
(C2) {Πˇ y,k
t : t ≥ 1, |y| ≤ M } is tight and all its weak-limit as t → ∞ must be an invariant measure of (Y(t), ξ(t)). (C3) For a sequence of bounded initial points {yk ∈ R3+} and an increasing sequence Tk → ∞ as
k → ∞, if {Πˇ yk
Tk } converges to μ as Tk tends to ∞ then
kli→m∞
Z
R3
+
h(y) ˇΠyk
Tk (dy) =
Z
R3
+
h(y)μ(dy)
for any continuous function h(y) satisfying h(y) ≤ Ch(1 + x + y)q for some Ch > 0, 0 < q < q0.
Next, combining (3.4), (3.5), we obtain (3.6)
X
k∈M
Z
R3
+
[LV ](y, k)νb(y, k) =
X
k∈M
Z
R3
+
[LV ](y, k) + β μ2(k)s − h1(k)p − σ22(k)
2 νb(y, k) = −βλ.
Now, we show the existence of T ‵ = T ‵(M ) > 0 such that if y ∈ R2+ × {0} and |yb| ≤ M then
(3.7) Eyb,k
1
T
ZT
0
LV (Y(s))ds =
Z
R3
+
LV (y)Πˇ yb,k
T (dy) ≤ − 3
4 βλ.
If it is untrue, there exists a sequence {yn, kn} ⊂ R2+ × {0} × M such that |yn| ≤ M and a sequence Tn ↑ ∞ such that
Eyn,kn
1
Tn
Z Tn
0
LV (X(s))ds > − 3
4 βλ.
In view of Claim (C2), there is a subsequence, still denoted by {yn, kn} and {Tn} for convenience, such that Πˇ yn,kn
Tn converges to an invariant probability measure ν as n → ∞. Since νb is the unique
invariant measure on R2+ × {0} × M, we deduce from Claim (C3) that
Z
R3
+
LV (y)νb(dy) = nli→m∞
Z
R3
+
LV (y)Πˇ yn,k
Tn (dy) ≥ − 3
4βλ
which contradicts (3.6). As a result, (3.7) holds true. Then, we deduce from the Feller-Markov property of (Y(t), ξ(t)) and the uniform moment boundedness (1.5) that there exists δ > 0 such that
Ey,k
ZT
0
LV (X(s))ds ≤ − βλ
2 T, T ∈ [T ‵, n‵T ‵]

16 A. HENING, N. T. HIEU, D.H. NGUYEN, AND N. NGUYEN
for any y ∈ R3+, U (y) ≤ M . □
Proposition 3.1. Let q be any number in the interval (1, q0), n‵ > 0 such that (n‵−1) α0
4 −2q−1C1 ≥
βλ
4 , and U (y) = 1 + x + y + z. There are κ‵ > 0 and C, C‵ > 0 independent of y such that
Ey[C|Y(t)|q + V q(Y(n‵T ‵))] ≤ CU q(x) + V q(x) − κ‵[CU q(y) + V q(y)]
q−1
q + C‵
Proof. First we assume that 1 < q ≤ 2. In the sequel, C‵ is a generic constant depending on T ‵, M, n‵ but independent of (y, k) ∈ R3+ × M. C‵ can differ from line to line. Suppose Y(0) = y. We have from Itˆo’s formula that
V (Y(t)) = V (y) +
Zt
0
LV (Y(s))ds + Mf(t),
where
Mf(t) :=
Zt
0
(σ1(ξ(s))S(s)dW1(s) + ασ2(ξ(s))X(s)dW2(t) + σ3(ξ(s))P (s)dW3(s) − βσ2(ξ(s))dW2(s))
is a martingale with quadratic variation: (3.8)
⟨
Mf(t)⟩ =
Zt
0
σ2
1(ξ(s))S2(s) + α2σ2
2(ξ(s))(X(s) − β)2 + σ2
3(ξ(s))P 2(s) ds ≤ K
Zt
0
U 2(Y(s))ds,
for some constant K = K(σ1, σ2, σ3, γ2, γ3). Note that LV (y) ≤ C1. Thus
V (X(T )) = V (x) +
ZT
0
LV (X(s))ds + Mf(T ) ≤ V (x) + C1T + Mf(T ).
Applying (3.3) to the inequality above yields
(3.9) Ey[V (P (T ))]q ≤V q(y) + qC1T V q−1(y) + C‵U q(y), T ≤ n‵T ‵.
On the other hand, since |LV (y)| ≤ K0(|y| + 1), ∀y ∈ R3+ for some constant K0, we deduce from Itˆo’s isometry and H ̈older’s inequality that
(3.10) Ey
Zt
0
LV (Y(s))ds
q
+ Ey |M (t)|q ≤ C‵U q(y) t ≤ n‵T ‵, y ∈ R3,◦
+.
It follows from (3.10) and (3.3) that (3.11)
Ey[V (Y(t))]q ≤V q(y) + q Ey
Zt
0
LV (Y(s))ds V q−1(y) + C‵Ey
Zt
0
LV (Y(s))ds + M (t)
q
≤V q(y) + q Ey
Zt
0
LV (Y(s))ds V q−1(y) + C‵U q(y), t ≤ n‵T ‵.
Recall that if U (y) ≤ M and dist(y, ∂R3+) ≤ δ, then Ey
Rt
0 LV (Y(s))ds ≤ − βλ
2 t, t ∈ [T ‵, n‵T ‵].
As a result, for T ∈ [T ‵, n‵T ‵], if U (y) ≤ M ,
(3.12)
Ey[V (Y(T ))]q ≤V q(y) − q βλ
2 T V q−1(y) + C‵U q(y)
≤V q(y) − q βλ
2 T V q−1(y) + C‵.
Define
ζ = inf{t ≥ 0 : U (Y(t)) ≤ M } ∧ (n‵T ‵).

DYNAMICS OF STOCHASTIC MICROORGANISM FLOCCULATION MODELS 17
For t ≤ ζ, we have from (3.4) that
(3.13) V (Y(t)) = V (y) +
Zt
0
LV (Y(s))ds + Mf(t) ≤ V (y) − α0
4 t + Mf(t).
Using (3.12) and the strong Markov property of {Y(t), ξ(t)}, we can estimate
(3.14)
Ex 1{ζ≤T ‵(n‵−1)}V q(Y(n‵T ‵))
≤Ex 1{ζ≤T ‵(n‵−1)} V q(Y(ζ)) + C‵
− Ex 1{ζ≤T ‵(n‵−1)}q βλ
2 (n‵T ‵ − ζ)V q−1(Y(ζ))
≤Ex
h
1{ζ≤T ‵(n‵−1)}(V (y) + Mf(ζ))q + C‵
i
− qβλ
2 T ‵Ex
h
1{ζ≤T ‵(n‵−1)}(V (y) + Mf(ζ))q−1i
(due to (3.13))
≤Ex
"
1{ζ≤T ‵(n‵−1)} V q(y) − q βλ
2 T‵
2 V q−1(y) + qMf(ζ)V q−1(y) + C‵(|Mf(ζ)|q + 1)
!#
( thanks to (3.2) ).
If T ‵(n‵ − 1) ≤ ζ ≤ T ‵n‵ we have
Ex 1{ζ≥T ‵(n‵−1)}V q(Y(n‵T ‵))
≤Ex 1{ζ≥T ‵(n‵−1)}V q(Y(ζ)) + C‵
+ qC1Ex 1{ζ≥T ‵(n‵−1)}(n‵T ‵ − ζ)V q−1(Y(ζ))
(by applying (3.9) and the strong Markov property)
≤Ex
h
1{ζ≥T ‵(n‵−1)}[(V (y) + Mf(ζ) − α0
4 ζ)q + C‵]
i
+ qC1T ‵Ex
h
1{ζ≥T ‵(n‵−1)}(V (y) + Mf(ζ) − α0
4 ζ)q−1i
(in view of (3.13))
≤Ex
h
1{ζ≥T ‵(n‵−1)} V q(y) − q α0
4 ζV q−1(y) + qMf(ζ)V q−1(y) + C‵ |Mf(ζ)| + 1
q
i
+ 2qC1T ‵Ex
h
1{ζ≥T ‵(n‵−1)} V q−1(y) + |Mf(ζ)|q−1 i
(using (3.1) and the inequality |x + y|q−1 ≤ 2(|x|q−1 + |y|q−1))
≤Ex 1{ζ≥T ‵(n‵−1)} V q(y) − qβλT ‵
4 V q−1(y) + qMf(ζ)V q−1(y) + C‵ |Mf(ζ)| + 1
q
(because α0
4 ζ ≥ α0
4 T ‵(n‵ − 1)) ≥ (2C1 + βλ
4 )T ‵).
(3.15)
As a result, by adding (3.14) and (3.15) and noting that ExMf(ζ) = 0, we have
(3.16)
ExV q(Y(n‵T ‵)) ≤V q(y) − q βλ
4 T ‵V q−1(y) + C‵Ex(|Mf(ζ)| + 1)q
≤V q(y) − q βλ
4 T ‵V q−1(y) + C‵U q(y)

18 A. HENING, N. T. HIEU, D.H. NGUYEN, AND N. NGUYEN
where the inequality Ex(|Mf(ζ)| + 1)q ≤ C‵U q(y) comes from an application of the BurkholderDavis-Gundy Inequality, H ̈older’s inequality and (3.8) and (1.6). From (1.5), we have
(3.17) ExU q(Y(n‵T ‵)) ≤U q(y) − 1 − e−k2qn‵T ‵ U q(y) + k1q
k2q
.
Combining (3.16) and (3.17), we can easily get that
(3.18) Ex V q(Y(n‵T ‵)) + CU q(Y(n‵T ‵)) ≤ V q(y) + CU q(y) − κ‵[V q(y) + CU q(y)](q−1)/q + C‵,
for some κ‵ > 0, C‵ > 0 and sufficiently large C. □
4. Nonlinear Perturbed models
As a novelty, we also wanted to explore what happens when the white noise perturbations which influence (1.1) are nonlinear. More specifically, assume that the dynamics is given by (4.1) dS(t) = [D(S0 − S(t)) − μ1(ξ(t))S(t)X(t)]dt + (σ1(ξ(t)) + σ4(ξ(t))S(t))S(t)dW1(t)
dX(t) = [μ2(ξ(t))S(t)X(t) − D(ξ(t))X(t) − h2(ξ(t))X(t)P (t)]dt + (σ2(ξ(t)) + σ5(ξ(t)X(t))X(t)dW2(t)
dP (t) = [D(ξ(t))(P0 − P (t)) − h3(ξ(t))X(t)P (t)]dt + (σ3(ξ(t)) + σ6(ξ(t))P (t))P (t)dW3(t)
where (W1(t), W2(t), W3(t)) is a standard Brownian motion on R3. Let Y(t) := (S(t), X(t), P (t)) and let y ∈ R3,◦
+ denote the initial conditions, that is Y(0) := (S(0), X(0), P (0)) = y. We will use the framework developed in [HNC21] which allows to treat processes and auxiliary variables. This way, the process can be in Kolmogorov form while the auxiliary variables can be in non-Kolmogorov form. Specifically, we assume that (S(t), P (t), α(t)) is the auxiliary variable and we focus on the ex
tinction and persistence of the process X(t). Letting Ue(y) = (s + x + p) 1
2 we have
(4.2) [L2Ue](y, k) ≤ ce1 − ce2Ue3(y).
We can therefore see that [HNC21, Assumption 3.1] holds for the model 4.1. When X(t) = 0 t ≥ 0, (4.1) reduces to the system:
(4.3) dS(t) = [D(S0 − S(t))]dt + (σ1(ξ(t)) + σ4(ξ(t))S(t))S(t)dW1(t)
dP (t) = D(ξ(t))(P0 − P (t))dt + (σ3(ξ(t)) + σ6(ξ(t))P (t))P (t)dW3(t)
In view of (4.2), by applying Dynkin’s formula in the same manner as in the proof of Theorem 1.1, we have
Ey,kUe(s, 0, p) ≤ e−ce2tU ̃ (s, 0, p) + ce1
ce2
, t ≥ 0,
and
Ey,k
1
t
Zt
0
Ue5(S(u), 0, P (u))du ≤ ce1 + 1
t
Ue(s, 0, p).
As a result, the set of invariant probability measures of (S(t), P (t), ξ(t)) is non empty and for any invariant probability measure ν
X
k∈M
Z
R2
+
U 5(s, 0, p)ν(s, 0, p, k) ≤ ce1.
Since U 5(s, 0, p) = (s + p) 5
2 is ν-integrable, we can define
λ(ν) =
X
k∈M
Z
R2
+
μ2(k)s − h2(k)p − σ22(k)
2 ν(dsdp, k).

DYNAMICS OF STOCHASTIC MICROORGANISM FLOCCULATION MODELS 19
While the probability measure ν is probably not unique, the value λ(ν) is unique due to the following claim.
Lemma 4.1. For any invariant probability measure ν of (S(t), P (t), ξ(t)), we have
λ(ν) =
X
k∈M
D(k)(ξ(k) + ζ(k)) − σ22(k)
2 πk.
Proof. The proof is almost identical to Lemma 1.1 and is therefore omitted. □
Because [HNC21, Assumption 3.1] holds for model 4.1 and λ(ν) is unique, we can apply Theorem 3.2, Theorem 3.4 and Theorem 3.5 of [HNC21] to obtain the following result.
Theorem 4.1. If λ(ν) > 0 then X(t) is stochastically persistent in probability, that is for any ε > 0, there exists ∆ > 0 such that
lim inf
t→∞ Py,k{X(t) ≥ ∆} ≥ 1 − ε, (y, k) ∈ R3,◦
+ × M.
We also have that
Py,k lim inf
t→∞
1
t
Zt
0
X(s)ds > 0 = 1.
If λ(ν) < 0 then for any ε > 0, (s, p) ∈ R2+, there exists δs,p > 0 such that
P
ye,k lim t → ∞ 1
t ln X(t) = λ(ν) < 0 ≥ 1 − ε
whenever ye = (se, xe, pe) satisfies |se − s| + |pe − p| + xe ≤ δs,p. Moreover, if the boundary R2+ × {0} is
accessible from the interior, that is, for any y ∈ R3+, k ∈ M, we can find K > 0 such that
sup
t≥0
Py,k{|S(t)| + |P (t)| ≤ K and X(t) < ε} > 0 for any ε > 0,
then
Py,k tli→m∞
1
t ln X(t) = λ(ν) < 0 = 1, for any (y, k) ∈ R3,◦
+ × M.
The next result gives us an easy condition which ensures almost sure extinction.
Corollary 4.2. Suppose that λ(ν) < 0. If there is k0 ∈ M such that σ2(k0)σ5(k0) > 0 then we have
Py,k tli→m∞
1
t ln X(t) = λ(ν) < 0 = 1, for any (y, k) ∈ R3,◦
+ × M.
Proof. We only need to show that if σ2(k0)σ5(k0) > 0 then the boundary R2+ × {0} is accessible from the interior. It turns out that the accessibility of a certain region of space can be checked using deterministic control theory. Consider the following control system associated with (4.1): (4.4)
dSu(t) = [D(S0 − Su(t)) − μ1(ψ(t))Su(t)Xu(t) + 1
2 (σ1(ψ(t)) + 2σ4(ψ(t))Su(t))]dt
+ (σ1(ψ(t)) + σ4(ψ(t))Su(t))Su(t)φ1(t)dt
dXu(t) = [μ2(ψ(t))Su(t)Xu(t) − D(ψ(t))Xu(t) − h2(ψ(t))Xu(t)Pu(t) + 1
2 (σ2(ψ(t)) + 2σ5(ψ(t)Xu(t))]dt
+ (σ2(ψ(t)) + σ5(ψ(t)Xu(t))Xu(t)φ2(t)dt
dPu(t) = [D(ψ(t))(P0 − Pu(t)) − h3(ψ(t))Xu(t)Pu(t)
+1
2 (σ3(ψ(t)) + 2σ6(ψ(t))Pu(t)]dt + (σ3(ξ(t)) + σ6(ξ(t))Pu(t))Pu(t)φ1(t)dt

20 A. HENING, N. T. HIEU, D.H. NGUYEN, AND N. NGUYEN
where φi(t), i = 1, 2, 3 are real-valued c`adl`ag functions and ψ(t) a M-valued c`adl`ag function. In view of various support theorems, see Sections 4.3, 5.1 and 6 from and [Ben23], if we can find controls u(t) = (ψ(t), φ1(t), φ2(t), φ3(t)) satisfying (4.4) such that
ψ(0) = k, (Su(0), Xu(0), Pu(0) = y and (Su(T ), Xu(T ), Pu(T )) = y⋄ = (s⋄, x⋄, p⋄)
then
(4.5) Py,k {|Y(T ) − y⋄| ≤ ε} > 0 for any ε > 0.
Now, we define a control as follows: ψ(t) ≡ k0, t ≥ 1, φ1(t) ≡ − sgn(σ4(k0)), φ3(t) ≡ − sgn(σ6(k0)) and φ2(t) is a feedback control such that dXu(t) ≤ −Xu(t)dt, t ≥ 1. To be more specific, since σ2(k0)σ5(k0) > 0, which leads to sgn(σ2(k0)) [σ2(k0) + σ5(k0)Xu(t)] > |σ2(k0)|, we can select
φ2(t) =
(
−1 − μ2(k0)Su(t) − 1
2 (σ2(k0) + 2σ5(k0)Xu(t)) if σ2(k0) > 0
1 + μ2(k0)Su(t) if σ2(k0) < 0.
Since dXu(t) ≤ −Xu(t)dt, t ≥ 1, we have
(4.6) tli→m∞ Xu(t) = 0
On the other hand, with ψ(t) ≡ k0, t ≥ 1, φ1(t) = φ2(t) = 0, t ∈ [0, 1) and φ1(t) = − sgn(σ4(k0)), φ3(t) = − sgn(σ6(k0)), t ≥ 1, one can see that
d[Su(t) + Pu(t)] ≤ [k1 − k2(Su(t) + Pu(t))2]dt, t ≥ 1.
This inequality implies
(4.7) lim sup
t→∞
(Su(t) + Pu(t)) ≤ k3 := k1
k2
1 2
.
Combining (4.6) and (4.7) and applying (4.5), we deduce that
sup
t≥0
Py,k{|S(t)| + |P (t)| ≤ k3 + 1 and X(t) < ε} > 0 for any ε > 0,
which means the boundary R2+ × {0} is accessible. The corollary is therefore proved. □
Acknowledgments: The research was supported by the research project QG.22.10 “Asymptotic behaviour of mathematical models in ecology” of Vietnam National University, Hanoi for Nguyen Trong Hieu. A. Hening, D. Nguyen, and N. Nguyen acknowledge support from the NSF through the grants DMS CAREER 2339000 and DMS-2407669.
References
[AVHPA17] Mayowa Oladele Agunbiade, Esta Van Heerden, Carolina H Pohl, and Anofi Tom Ashafa, Flocculating performance of a bioflocculant produced by arthrobacter humicola in sewage waste water treatment, BMC biotechnology 17 (2017), no. 1, 51. [BBN22] Michel Benaı ̈m, Antoine Bourquin, and Dang H Nguyen, Stochastic persistence in degenerate stochastic lotka-volterra food chains, Discrete and Continuous Dynamical Systems-B (2022).
[BEM07] J. Blath, A. Etheridge, and M. Meredith, Coexistence in locally regulated competing populations and survival of branching annihilating random walk, Ann. Appl. Probab. 17 (2007), no. 5-6, 1474–1507. MR 2358631 [Ben23] M. Bena ̈ım, Stochastic persistence, preprint. [BHS08] M. Benaı ̈m, J. Hofbauer, and W. H. Sandholm, Robust permanence and impermanence for stochastic replicator dynamics, J. Biol. Dyn. 2 (2008), no. 2, 180–195. MR 2427526
[BS09] M. Benaı ̈m and S. J. Schreiber, Persistence of structured populations in random environments, Theoretical Population Biology 76 (2009), no. 1, 19–34. [CCL+09] P. Cattiaux, P. Collet, A. Lambert, S. Martı ́nez, S. Me ́le ́ard, and J. San Mart ́ın, Quasi-stationary distributions and diffusion models in population dynamics, Ann. Probab. 37 (2009), no. 5, 1926–1969. MR 2561437

DYNAMICS OF STOCHASTIC MICROORGANISM FLOCCULATION MODELS 21
[CE89] P. L. Chesson and S. Ellner, Invasibility and stochastic boundedness in monotonic competition models, Journal of Mathematical Biology 27 (1989), no. 2, 117–138.
[Che00] P. Chesson, General theory of competitive coexistence in spatially-varying environments, Theoretical Population Biology 58 (2000), no. 3, 211–237.
[CM10] P. Cattiaux and S. Me ́le ́ard, Competitive or weak cooperative stochastic Lotka–Volterra systems conditioned on non-extinction, J. Math. Biol. 60 (2010), no. 6, 797–829. MR 2606515
[EHS15] S. N. Evans, A. Hening, and S. J. Schreiber, Protected polymorphisms and evolutionary stability of patchselection strategies in stochastic environments, J. Math. Biol. 71 (2015), no. 2, 325–359. MR 3367678 [EK09] Stewart N Ethier and Thomas G Kurtz, Markov processes: characterization and convergence, John Wiley & Sons, 2009. [ERSS13] S. N. Evans, P. L. Ralph, S. J. Schreiber, and A. Sen, Stochastic population growth in spatially heterogeneous environments, J. Math. Biol. 66 (2013), no. 3, -
423–476. MR 3010201
[FS24] Juraj Foldes and Declan Stacy, Stochastic extinction, an average lyapunov function approach, arXiv preprint arXiv:2407.19606 (2024).
[HL21] Alexandru Hening and Yao Li, Stationary distributions of persistent ecological systems, Journal of Mathematical Biology 82 (2021), no. 7, 64.
[HN18] A. Hening and D. H. Nguyen, Coexistence and extinction for stochastic Kolmogorov systems, Ann. Appl. Probab. 28 (2018), no. 3, 1893–1942.
[HNC21] A Hening, D. Nguyen, and P Chesson, A general theory of coexistence and extinction for stochastic ecological communities, Journal of Mathematical Biology 82 (2021), no. 6, 1–76.
[HNS22] A. Hening, D. H. Nguyen, and S. J. Schreiber, A classification of the dynamics of three-dimensional stochastic ecological systems, Annals of Applied Probability 32 (2022), no. 2. [Hof81] J. Hofbauer, A general cooperation theorem for hypercycles, Monatshefte f ̈ur Mathematik 91 (1981), no. 3, 233–240. [HS89] J. Hofbauer and J. W-H So, Uniform persistence and repellors for maps, Proceedings of the American Mathematical Society 107 (1989), no. 4, 1137–1142. [Hut84] V. Hutson, A theorem on av-
erage Liapunov functions, Monatshefte f ̈ur Mathematik 98 (1984), no. 4, 267–275.
[LES03] R. Lande, S. Engen, and B.-E. Saether, Stochastic population dynamics in ecology and conservation, Oxford University Press on Demand, 2003. [LLA09] Andrew K Lee, David M Lewis, and Peter J Ashman, Microbial flocculation, a potentially low-cost harvesting technique for marine microalgae for the production of biodiesel, Journal of Applied Phycology 21 (2009), no. 5, 559–567. [LML+14] Jiewei Liu, Junwei Ma, Yanzhong Liu, Ya Yang, Dongbei Yue, and Hongtao Wang, Optimized production of a novel -
bioflocculant m-c11 by klebsiella sp. and its application in sludge dewatering, Journal of Environmental Sciences 26 (2014), no. 10, 2076–2083. [LSL+21] Cong Liu, Di Sun, Jiawen Liu, Jingrong Zhu, and Weijie Liu, Recent advances and perspectives in efforts to reduce the production and application cost of microbial flocculants, Bioresources and Bioprocessing 8 (2021), no. 1, 51. [LZJ+15] Weijie Liu, Chenchu Zhao, Jihong Jiang, Qian Lu, Yan Hao, Liang Wang, and Cong Liu, Bioflocculant production fro-
m untreated corn stover using cellulosimicrobium cellulans l804 isolate and its application to harvesting microalgae, Biotechnology for biofuels 8 (2015), no. 1, 170.
[Mao97] X. Mao, Stochastic differential equations and their applications, Horwood Publishing Series in Mathematics & Applications, Horwood Publishing Limited, Chichester, 1997. MR 1475218 [MYY+14] TT More, Jay Shankar Singh Yadav, Song Yan, Rajeshwar Dayal Tyagi, and Rao Y Surampalli, Extracellular polymeric substances of bacteria and their potential environmental applications, Journal of environmental management 144 (2014), 1–25. [NNY20] Dang H Nguyen, Nhu N Nguyen, and George Yin, General nonlin-
ear stochastic systems motivated by chemostat models: Complete characterization of long-time behavior, optimal controls, and applications to wastewater treatment, Stochastic Processes and their Applications 130 (2020), no. 8, 4608–4642.
[NYZ17] Dang Hai Nguyen, George Yin, and Chao Zhu, Certain properties related to well posedness of switching diffusions, Stochastic Processes and their Applications 127 (2017), no. 10, 3135–3158. [PMD+18] Shengyan Pu, Hui Ma, Daili Deng, Shengyang Xue, Rongxin Zhu, Yan Zhou, and Xingying Xiong, Isolation, identification, and characterization of an aspergillus niger bioflocculant-producing strain using potato starch wastewater as nutrilite and its application, PloS one 13 (2018), no. 1, e0190236.
[RSBC09] Franc ̧ois Renault, Bertrand Sancey, P-M Badot, and Gr ́egorio Crini, Chitosan for coagulation/flocculation processes–an eco-friendly approach, European Polymer Journal 45 (2009), no. 5, 13371348.

22 A. HENING, N. T. HIEU, D.H. NGUYEN, AND N. NGUYEN
[SBA11] S. J. Schreiber, M. Bena ̈ım, and K. A. S. Atchad ́e, Persistence in fluctuating environments, J. Math. Biol. 62 (2011), no. 5, 655–683. MR 2786721
[SLS09] S. J. Schreiber and J. O. Lloyd-Smith, Invasion dynamics in spatially heterogeneous environments, The American Naturalist 174 (2009), no. 4, 490–505.
[SS01] H Salehizadeh and SA Shojaosadati, Extracellular biopolymeric flocculants: recent trends and biotechnological importance, Biotechnology advances 19 (2001), no. 5, 371–385. [SYF18] Hossein Salehizadeh, Ning Yan, and Ramin Farnood, Recent advances in polysaccharide bio-based flocculants, Biotechnology advances 36 (2018), no. 1, 92–119. [Tur77] M. Turelli, Random environments and stochastic calculus, Theoretical Population Biology 12 (1977), no. 2, 140–178.
[YZ10] G Yin and . Zhou, C, Hybrid switching diffusions: Properties and applications, 2010. [ZLZ13] Haijuan Zhao, Hongtao Liu, and Jiangang Zhou, Characterization of a bioflocculant mbf-5 by klebsiella pneumoniae and its application in acanthamoeba cysts removal, Bioresource technology 137 (2013), 226232.
[ZY09] Chao Zhu and G Yin, On competitive lotka–volterra model in random environments, Journal of Mathematical Analysis and Applications 357 (2009), no. 1, 154–170.
[ZZ20] Haisu Zhang and Tongqian Zhang, The stationary distribution of a microorganism flocculation model with stochastic perturbation, Applied Mathematics Letters 103 (2020), 106217.
[ZZ21] , Asymptotic behavior of a stochastic microorganism flocculation model with time delay, Applied Mathematics Letters 121 (2021), 107384.
Department of Mathematics, Texas A&M University, Mailstop 3368, College Station, TX 778433368, United States
Email address: ahening@tamu.edu
Faculty of Mathematics Mechanics and Informatics, Vietnam National University of Science, Hanoi 334 Nguyen Trai St, Hanoi, Vietnam
Email address: hieunguyentrong@gmail.com
Department of Mathematics, University of Alabama, 345 Gordon Palmer Hall, Box 870350, Tuscaloosa, AL 35487-0350, United States
Email address: dangnh.maths@gmail.com
Department of Mathematics and Applied Mathematical Sciences, University of Rhode Island, 5 Lippitt Road, Suite 200, Kingston, RI 02881-2018, United States Email address: nhu.nguyen@uri.edu

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:30.297Z
- **Text Length:** 50866 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 22 of 22
