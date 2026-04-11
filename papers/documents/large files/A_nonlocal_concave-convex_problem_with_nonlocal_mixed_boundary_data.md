# PDF Document: Abdellaoui et al. - 2016 - A nonlocal concave-convex problem with nonlocal mixed boundary data.pdf

**File Path:** Abdellaoui et al. - 2016 - A nonlocal concave-convex problem with nonlocal mixed boundary data.pdf

**Processed Date:** 2026-02-10T18:16:53.202Z

**File Size:** 216.12 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2719

**Title:** A nonlocal concave-convex problem with nonlocal mixed boundary data

**Collection:** Large Files

---

## Extracted Text Content

arXiv:1611.09902v2 [math.AP] 21 Dec 2016
.
A NONLOCAL CONCAVE-CONVEX PROBLEM WITH NONLOCAL MIXED BOUNDARY DATA
BOUMEDIENE ABDELLAOUI, ABDELRAZEK DIEB, AND ENRICO VALDINOCI
Abstract. The aim of this paper is to study the following problem
Pλ ≡



(−∆)su = λuq + up in Ω, u > 0 in Ω, Bsu = 0 in RN \Ω,
with 0 < q < 1 < p, N > 2s, λ > 0, Ω ⊂ RN is a smooth bounded domain,
(−∆)su(x) = aN,s P.V.
∫
RN
u(x) − u(y)
|x − y|N+2s dy,
aN,s is a normalizing constant, and Bsu = uχΣ1 + NsuχΣ2 . Here, Σ1 and Σ2 are open sets in RN \Ω such that Σ1 ∩ Σ2 = ∅ and Σ1 ∪ Σ2 = RN \Ω. In this setting, Nsu can be seen as a Neumann condition of nonlocal type that is compatible with the probabilistic interpretation of the fractional Laplacian, as introduced in [20], and Bsu is a mixed Dirichlet-Neumann exterior datum. The main purpose of this work is to prove existence, nonexistence and multiplicity of positive energy solutions to problem (Pλ)-
 for suitable ranges of λ and p and to understand the interaction between the concave-convex nonlinearity and the Dirichlet-Neumann data.
Contents
1. Introduction 1 2. Preliminaries and functional setting. 3 3. Proof of Theorem 1 10 4. Proof of Theorem 2 13 Acknowledgements 17 References 18
1. Introduction
In [20], the authors introduced a new nonlocal Neumann condition, which is compatible with the probabilistic interpretation of the nonlocal setting related to some L ́evy process in RN . Motivated by this, we aim in this work to study a semilinear nonlocal elliptic problem with mixed Dirichlet-Neumann data. More precisely, we
2010 Mathematics Subject Classification. 35R11, 35A15.
Key words and phrases. Integrodifferential operators, fractional Laplacian, weak solutions, mixed boundary condition, multiplicity of positive solution. The first author is partially supported by project MTM2013-40846-P, MINECO, Spain. 1

2 B. ABDELLAOUI, A. DIEB, AND E. VALDINOCI
study existence and multiplicity of positive solutions to the following problem
Pλ ≡



(−∆)su = λuq + up in Ω, u > 0 in Ω, Bsu = 0 in RN \Ω,
with 0 < q < 1 < p, N > 2s, λ > 0. In our setting, Ω ⊂ RN is a smooth bounded domain and (−∆)s is the fractional Laplacian operator, defined as
(1.1) (−∆)su(x) = aN,s P.V.
∫
RN
u(x) − u(y)
|x − y|N+2s dy.
See e.g. [23], [24], [17] and the references therein for more information about this operator. In this framework aN,s > 0 is a suitable normalization constant and the exterior condition
(1.2) Bsu = uχΣ1 + NsuχΣ2,
can be seen as a nonlocal version of the classical Dirichlet-Neumann mixed boundary condition. As a matter of fact, here Ns is the non-local normal derivative introduced in [20], given by
(1.3) Nsu(x) = aN,s
∫
Ω
u(x) − u(y)
|x − y|N+2s dy, x ∈ RN \Ω.
Also, Σ1 and Σ2 are open sets in RN \Ω such that Σ1 ∩ Σ2 = ∅ and Σ1 ∪ Σ2 = RN \Ω. As customary, in (1.2) we denoted by χA the characteristic function of a set A. We observe that, differently from the case of homogeneous Dirichlet conditions, the case of Neumann and mixed boundary conditions has not been much investigated in the fractional setting. This is due to the fact that the classical Neumann condition combines good geometrical properties (e.g. the normal derivative of the function vanishes, -
allowing symmetry and blow-up arguments) and analytic properties, while in the nonlocal case the consequences of (1.3) are much less intuitive and harder to deal with. This is indeed probably the first article devoted to the analysis of a nonlinear and nonlocal problem with mixed exterior data that involve the Neumann condition of [20]. We notice that recently a Hopf Lemma has been proved in [8] for such mixed exterior conditions.
Using an integration by parts formula stated in [20], one sees that problem (Pλ) can be set in a variational setting, since the requested solutions can be seen as critical points of the functional
(1.4) Jλ(u) = 1
2
∫∫
DΩ
|u(x) − u(y)|2
|x − y|N+2s dx dy − λ
q + 1 ‖u+‖q+1
q+1 − 1
p + 1 ‖u+‖p+1
p+1,
where
DΩ = (RN × RN ) \ (Ωc × Ωc),
‖v‖r
r=
∫
Ω
|v|r dx and u+ = max(u, 0).

3
Such problem, in the local case of the classical Laplacian, was extensively studied in the literature, especially after the seminal work of Ambrosetti, Brezis and Cerami [3]. Similar problems with a Dirichlet-Neumann datum were studied, for the subcritical case, in [15] and, in the critical case, in [22]. In the nonlocal framework, (that is, when s ∈ (0, 1)), with Dirichlet data, the problem was dealt with in [9] for the subcritical case and in [7], [18], [19] and [11] for the critical case. See a-
lso [28], [29]. In [7] and [19], the authors use an extension method, introduced in [13], which allows them to reduce the problem to a local one. We stress that, in our case, because of the nonlocal Neumann part, we cannot use such extension and then we deal with the problem in an appropriate purely nonlocal, and somehow more general, framework. Moreover, to obtain our multiplicity result, we have to use an additional argument which was classically developed by Alama in [1]. For a series of motiva-
tions about nonlocal equations and fractional operators, see e.g. [12] and the references therein.
Our main results are the following:
Theorem 1. Let 0 < s < 1, 0 < q < 1 < p. Then there exists Λ > 0, such that:
(1) For all λ ∈ (0, Λ), problem (Pλ) has a minimal solution uλ such that Jλ(uλ) < 0. Moreover, these solutions are ordered, namely: if λ1 < λ2 then uλ1 < uλ2. (2) If λ > Λ, problem (Pλ) has no positive weak solutions. (3) If λ = Λ, problem (Pλ) has at least one weak positive solution.
Theorem 2. For all 0 < s < 1, 0 < q < 1 < p < N+2s
N−2s , λ ∈ (0, Λ), problem (Pλ) has
a second solution vλ > uλ.
The paper is organized as follows: In Section 2, we introduce the functional setting to deal with problem (Pλ), as well as the notion of solution we will work with and some auxiliary results. Section 3 is devoted to prove the existence of minimal and extremal solutions. Finally in Section 4 we prove the existence of a second solution using Alama’s argument.
2. Preliminaries and functional setting.
We introduce in this section a natural functional framework for our problem and we give some related properties and some useful embedding results needed when we deal with problem (Pλ). According to the definition of the fractional Laplacian, see [17], [28], and the integration by parts formula, see [20] , it is natural to introduce the following spaces. We denote by Hs(RN ) the classical fractional Sobolev space,
(2.1) Hs(RN ) =
{
u ∈ L2(RN ) : |u(x) − u(y)|
|x − y| N
2 +s ∈ L2(RN × RN )
}
,
endowed with the norm
(2.2) ‖u‖2
Hs(RN ) = ‖u‖2
L2(RN ) +
∫∫
RN ×RN
|u(x) − u(y)|2
|x − y|N+2s dx dy.
It is clear that Hs(RN ) is a Hilbert space. We recall now the classical Sobolev inequality that the proof can be found in [17]. See also [25] for an elementary proof.

4 B. ABDELLAOUI, A. DIEB, AND E. VALDINOCI
Proposition 3. Let s ∈ (0, 1) with N > 2s. There exists a positive constant S = S(N, s) such that, for any function u ∈ Hs(RN ), we have
(2.3) S‖u‖2
L2s∗ (RN ) 6
∫∫
RN ×RN
|u(x) − u(y)|2
|x − y|N+2s dx dy,
where 2s∗ = 2N
N−2s .
Definition 4. Let Ω be a bounded domain of RN . For 0 < s < 1, we define the space
Hs(Ω, Σ1) = {u ∈ Hs(RN ) : u = 0 in Σ1
}.
It is clear that Hs(Ω, Σ1) is a Hilbert space endowed with the norm induced by Hs(RN ).
For u ∈ Hs(Ω, Σ1), we set
‖u‖2 = aN,s
∫∫
DΩ
|u(x) − u(y)|2
|x − y|N+2s dx dy.
The properties of this norm are described by the following result.
Proposition 5. The norm ‖ . ‖ in Hs(Ω, Σ1) is equivalent to the one induced by Hs(RN ), and then (Hs(Ω, Σ1), 〈 , 〉) is a Hilbert space with scalar product given by
〈u, v〉 = aN,s
∫∫
DΩ
(u(x) − u(y))(v(x) − v(y))
|x − y|n+2s dx dy.
Proof. For u ∈ Hs(Ω, Σ1), we set
‖u‖21 = ‖u‖2
L2(Ω) + aN,s
∫∫
DΩ
|u(x) − u(y)|2
|x − y|N+2s dx dy.
It is clear that Hs(Ω, Σ1) is a Hilbert space with the associated scalar product given by
〈u, v〉1 = aN,s
∫∫
DΩ
(u(x) − u(y))(v(x) − v(y))
|x − y|n+2s dx dy +
∫
Ω
uv dx.
Notice that the completeness of Hs(Ω, Σ1) can be proved using exactly the same argument as in the proof of of Proposition 3.1 in [20]. Now, setting
λ1(Ω) = inf
{φ∈Hs (Ω,Σ1 ),φ6=0}
aN,s
∫∫
DΩ
|φ(x) − φ(y)|2
|x − y|N+2s dx dy
∫
Ω
φ2 dx
,
then the authors in [8] proved that λ1(Ω) > 0. As a consequence, the previous scalar product can be reduced to the following one
〈u, v〉 = aN,s
∫∫
DΩ
(u(x) − u(y))(v(x) − v(y))
|x − y|n+2s dx dy.

5
Hence we can endowed Hs(Ω, Σ1) with the Gagliardo norm
‖u‖2 = aN,s
∫∫
DΩ
|u(x) − u(y)|2
|x − y|N+2s dx dy.
Now, the norm ‖ . ‖ in Hs(Ω, Σ1) is bounded by the one induced by Hs(RN ), and so, using the Open Mapping Theorem, it holds that the norm ‖ . ‖ in Hs(Ω, Σ1) is in fact equivalent to the one induced by Hs(RN ). Hence the result follows.
The following result justifies our choice of ‖ . ‖.
Proposition 6. Let s ∈ (0, 1), for all u, v ∈ Hs(Ω, Σ1) we have,
∫
Ω
v(−∆)su dx = aN,s
2
∫∫
DΩ
(u(x) − u(y))(v(x) − v(y))
|x − y|N+2s dx dy −
∫
Σ2
vNsu dx.
The proof of this result is a direct application of the integration by parts formula, see Lemma 3.3 in [20]. In the rest of the paper, for the simplicity of typing, we shall denote the functional space introduced in Definition 4 by Hs and we shall normalize the constant aN,s to be equal to 2. Now we give a Sobolev-type result for functions in Hs.
Corollary 7. Suppose that s ∈ (0, 1) and N > 2s. There exists a positive constant C = C(N, s, Ω, Σ2) such that, for any function u ∈ Hs,
‖u‖2
Lr(Ω) 6 C‖u‖2,
for all 1 6 r 6 2s∗.
Proof. Since u ∈ Hs ⊂ Hs(RN ), then using the Sobolev inequality in (3), it holds that
S‖u‖2
L2s∗ (Ω) 6 S‖u‖2
L2s∗ (RN ) 6
∫∫
RN ×RN
|u(x) − u(y)|2
|x − y|N+2s dx dy.
Now, the result follows using H ̈older inequality and Proposition 5.
Consider now the standard truncation functions given by
Tk(u) = max { − k, min{k, u}}
and Gk(u) = u −Tk(u). In this setting, the following are some useful properties of Hsfunctions which are needed to get some regularity results for some elliptic problems in Hs (see also Theorem 13 below).
Proposition 8. Let u be a function in Hs, then
(1) if Φ ∈ Lip(R) is such that Φ(0) = 0, then Φ(u) ∈ Hs. In particular for any k > 0, Tk(u), Gk(u) ∈ Hs. (2) For any k > 0
‖Gk(u)‖2 6
∫
Ω
Gk(u)(−∆)su dx +
∫
Σ2
Gk(u)Nsu dx.
(3) For any k > 0
‖Tk(u)‖2 6
∫
Ω
Tk(u)(−∆)su dx +
∫
Σ2
Tk(u)Nsu dx.

6 B. ABDELLAOUI, A. DIEB, AND E. VALDINOCI
Proof. The claim in (1) follows from the setting of the norm given in Definition 4. As for (2) and (3), we claim that, for any a, b > 0 and any x ∈ RN ,
(2.4) a (Gk(u)(−∆)sTk(u))(x) + b (Gk(u)NsTk(u))(x) > 0.
To check this, we can take x ∈ {Gk(u) 6= 0}, otherwise (2.4) is obvious. Then, if x ∈ {Gk(u) > 0} we have that Tk(u)(x) = k, which is the maximum value that Tk(u) attains, and therefore (−∆)sTk(u)(x) > 0 and NsTk(u)(x) > 0. Conversely, if x ∈ {Gk(u) < 0} we have that Tk(u)(x) = −k, which is the minimum value that Tk(u) attains, and therefore (−∆)sTk(u)(x) 6 0 and NsTk(u)(x) 6 0. By combining these observations, we obtain (2.4). From (2.4) and Proposition 6 it follows that
∫
Ω
Tk(u)(−∆)sGk(u) dx +
∫
Σ2
Tk(u)NsGk(u) dx
=
∫
Ω
Gk(u)(−∆)sTk(u) dx +
∫
Σ2
Gk(u)NsTk(u) dx > 0.
(2.5)
Using the normalization condition and by Propositions 6, we reach that
‖Gk(u)‖2 =
∫∫
DΩ
(Gk(u)(x) − Gk(u)(y))2
|x − y|N+2s dx dy
=
∫
Ω
Gk(u)(−∆)sGk(u) dx +
∫
Σ2
Gk(u)NsGk(u) dx
=
∫
Ω
Gk(u)(−∆)s(u − Tk(u)) dx +
∫
Σ2
Gk(u)Ns
(u − Tk(u)) dx.
(2.6)
In a similar way,
‖Tk(u)‖2 =
∫
Ω
Tk(u)(−∆)s(u − Gk(u)) dx +
∫
Σ2
Tk(u)Ns
(u − Gk(u) dx.
(2.7)
Then, the claim in (2) follows from (2.6) and (2.5), while the claim in (3) follows from (2.7) and (2.5).
Let us now consider the following problem,
(2.8)
{ (−∆)su = f in Ω, Bsu = 0 in RN \Ω,
where Ω is a bounded regular domain of RN , N > 2s, H−s is the dual space of Hs and f ∈ H−s.
Definition 9. We say that u ∈ Hs is an energy solution to (2.8) if
(2.9)
∫∫
DΩ
(u(x) − u(y))(φ(x) − φ(y))
|x − y|N+2s dx dy = (f, φ) ∀φ ∈ Hs,
where ( , ) represent the duality between Hs and H−s.
Notice that the existence and uniqueness of energy solutions to problem (2.8) follow from the Lax-Milgram Theorem. Furthermore if f > 0 then u > 0. Indeed for u ∈ Hs, thanks to Lemma 8, we know that u− = min{u, 0} ∈ Hs. Taking u− as a test function in (2.9) it follows that u− = 0.

7
A supersolution (respectively, subsolution) is a function that verifies (2.9) with equality replaced by “>” (respectively, “6”) for every non-negative test function in Hs. Using a standard iterative argument we can easily prove the following result.
Lemma 10. Assume that problem (2.8) has a subsolution w and a supersolution w, verifying w 6 w. Then there exists a solution w satisfying w 6 w 6 w.
Here we prove some regularity results when f satisfies some minimal integrability conditions. To prove the boundedness of the solution we follow the idea of Stampacchia for second order elliptic equations with bounded coefficients. The interior H ̈older regularity is a consequence of continuity properties, see [20], and the regularity results in [30].
Lemma 11. Let u be a solution to problem (2.8). If f ∈ Lq(Ω), q > N
2s , then
u ∈ L∞(Ω).
Proof. We follow here a related argument presented in [24]. See also [30] and [18] for related results. Let k > 0 and take φ = Gk(u) as a test function in (2.9). Hence, thanks to Proposition 8, we get
‖Gk(u)‖2 6
∫
Ak
Gk(u)f dx +
∫
Σ2
Gk(u)Nsu dx,
where Ak = {x ∈ Ω : u > k}. Recalling (2.8), we obtain
‖Gk(u)‖2 6
∫
Ak
Gk(u)f dx.
Applying Corollary 7 in the left hand side and H ̈older inequality in the right hand side, we obtain
S2‖Gk(u)‖2
L2s∗ (Ω) 6 ‖Gk(u)‖2 6 ‖f ‖Lm(Ω)‖Gk(u)‖L2s∗ (Ω)|Ak|1− 1
2s∗ − 1
m
we have that,
S2‖Gk(u)‖2
L2s∗ (Ω) 6 ‖f ‖Lm(Ω)|Ak|1− 1
2s∗ − 1
m
thus,
S2(h − k)|Ah|
1
2s∗ 6 ‖f ‖Lm(Ω)|Ak|1− 1
2s∗ − 1
m
and then,
|Ah| 6 S2∗
s−2 ‖f ‖2∗
s
Lm (Ω) |Ak |2∗
s (1− 1
2s∗ − 1
m)
(h − k)2∗
s
.
Since m > N
2s we have that
2∗
s
(
1− 1
2s∗
−1
m
)
> 1.
Hence we apply Lemma 14 in [24] with ψ(σ) = |Aσ| and the result follows.
Corollary 12. Let u be an energy solution of (2.8) and suppose that f ∈ L∞(Ω). Then u ∈ Cγ(Ω), for some γ ∈ (0, 1).

8 B. ABDELLAOUI, A. DIEB, AND E. VALDINOCI
Proof. We claim that u is bounded in RN . Then one could apply interior regularity results for the solutions to (−∆)su = 0 ∈ Ω and u = g in Ωc. See e.g. [30] and [26]. To check the claim, recalling Lemma 11, we have to consider only the case x ∈ Σ2. Then, by (1.3)
u(x) = c(N, s)−1
∫
Ω
u(y)
|x − y|N+2s dy , where c(N, s) =
∫
Ω
1
|x − y|N+2s dy.
Hence,
(2.10) |u(x)| 6 ‖u‖L∞(Ω) for all x ∈ Σ2.
Also, if Σ2 is unbounded, using Proposition 3.13 in [20], we have
(2.11) lim
x→∞, x∈Σ2
u(x) = 1
|Ω|
∫
Ω
u(y) dy.
Then the claim follows from Lemma 11, inequalities (2.10) and (2.11).
As a variation of Lemma 11, we point out that if f = f (x, u) and f has the following growth
(2.12) |f (x, s)| 6 c(1 + |s|p) where p 6 N + 2s
N − 2s, then, using a Moser iterative scheme, we can prove that:
Theorem 13. Let u be an energy solution to problem (2.8) with f satisfies (2.12), then u ∈ L∞(Ω).
The following is a strong maximum principle for semi-linear equations, it will be used to separate minimal solution of problem (Pλ) for different values of the parameter λ, see [16].
Proposition 14. Let N > 1, 0 < s < 1 and let f1, f2 : RN × R → R be two
continuous functions. Let Ω be a domain in RN and v, w ∈ L∞(RN ) ∩ C2s+γ(Ω), for some γ > 0, be such that

    
    
(−∆)sv > f1(x, v), in Ω,
(−∆)sw 6 f2(x, w), in Ω,
v > w in RN .
Suppose furthermore that
(2.13) f2(x, w(x)) 6 f1(x, w(x)) for any x ∈ Ω.
If there exists a point x0 ∈ Ω at which v(x0) = w(x0), then v = w in the whole Ω.
Proof. Let φ = v − w and set
Zφ = {x ∈ Ω : φ(x) = 0} .
By assumption x0 ∈ Zφ. Moreover, thanks to the continuity of φ, we know that Zφ is closed. We claim now that Zφ is also open. Indeed, let x ̄ ∈ Zφ. Clearly φ > 0 in RN , φ(x ̄) = 0 and
(−∆)sφ(x ̄) > f1(x ̄, v(x ̄)) − f2(x ̄, w(x ̄)) = f1(x ̄, w(x ̄)) − f2(x ̄, w(x ̄)) > 0,

9
in view of (2.13). Accordingly,
0 6 (−∆)sφ(x ̄) = 1
2
∫
RN
2φ(x ̄) − φ(x ̄ + z) − φ(x ̄ − z)
|z|N+2s dz
=1
2
∫
RN
−φ(x ̄ + z) − φ(x ̄ − z)
|z|N+2s dz 6 0.
Hence φ vanishes identically in Bε(x ̄) and then, for ε small, Bε(x ̄) ⊆ Zφ. That is, we have proved that Zφ is open, and so, by the connectedness of Ω, we get that Zφ = Ω.
Now we establish two important results for our purposes. The first result is a Picone-type inequality and the second is a Brezis-Kamin comparison principle for concave nonlinearities.
Theorem 15. Consider u, v ∈ Hs, suppose that (−∆)su > 0 is a bounded Radon measure in Ω, u > 0 and not identically zero, then,
∫
Σ2
|v|2
u Nsu dx +
∫
Ω
|v|2
u (−∆)su dx 6
∫∫
DΩ
(v(x) − v(y))2
|x − y|N+2s dx dy.
The proof of this result is based on a punctual inequality and follows in the same way as in [24]. As a consequence, we have the next comparison principle that extends to the fractional framework the classical one obtained by Brezis and Kamin, see [10].
Lemma 16. Let f (x, σ) be a Carath ́eodory function such that f(x,σ)
σ is decreasing in
σ, uniformly with respect to x ∈ Ω. Suppose that u, v ∈ Hs, with 0 < s < 1, are such that 


(−∆)su > f (x, u), u > 0 in Ω,
(−∆)sv 6 f (x, v), v > 0 in Ω.
Then u > v in Ω.
The proof of this result is a slight modification of the proof of Theorem 20 in [24]. Finally, we will use the following compactness lemma to get strong convergence in the space Hs.
Lemma 17. Let {vn}n be a sequence of non-negative functions such that {vn}n is bounded in Hs, vn ⇀ v in Hs and vn 6 v. Assume that (−∆)svn > 0 then, vn → v strongly in Hs.
Proof. Since vn 6 v, then using the fact that (−∆)svn > 0, it follows that
∫
Ω
(−∆)svn(v − vn) dx > 0.
Hence ∫
Ω
(−∆)svnv dx >
∫
Ω
(−∆)svnvn dx.
Now, using Young’s inequality, we obtain that
∫∫
DΩ
(vn(x) − vn(y))2
|x − y|N+2s dx dy 6
∫∫
DΩ
(v(x) − v(y))2
|x − y|N+2s dx dy.

10 B. ABDELLAOUI, A. DIEB, AND E. VALDINOCI
Thus lim sup
n→∞
‖vn‖ 6 ‖v‖.
Since
lim sup
n→∞
‖vn − v‖2 = lim sup
n→∞
(‖vn‖2 + ‖v‖2 − 2〈vn, v〉)
6 2‖v‖2 − 2 lim sup
n→∞
〈vn, v〉,
taking into consideration that vn ⇀ v in Hs, we get
lim sup
n→∞
‖vn − v‖2 = 0.
As a consequence, vn → v strongly in Hs.
3. Proof of Theorem 1
In this section we prove Theorem 1. We split the proof into several auxiliary Lemmas. Let us begin by proving an existence result.
Lemma 18. Assume that 0 < q < 1 < p, then problem (Pλ) has a nontrivial bounded solution at least for λ > 0 small.
Proof. The main idea is to show that for λ small, the problem (Pλ) has a comparable bounded sub and supersolution. Let V be the unique positive solution to the problem



(−∆)sV = 1 in Ω, V > 0 in Ω, BsV = 0 in RN \Ω.
Notice that the existence of V follows by using the Lax-Milgram theorem in the space
Hs, however the positivity of V follows form [8]. It is clear that V ∈ Cα(Ω ̄ ) for some α < 1. Let C = ‖V‖∞, it is not difficult to show the existence of λ∗ > 0 such that for
all λ < λ∗, the inequality
M > λM qCq + M pCp,
has a solution M > 0. Fix λ, M as above and define v1 = MV, then v1 solves
(3.1)



(−∆)sv1 = M > λvq
1 + vp
1 in Ω, v1 > 0 in Ω, Bsv1 = 0 in RN \Ω.
Thus v1 is a supersolution to problem (Pλ). We consider now the following problem
(3.2)



(−∆)sz = zq in Ω, z > 0 in Ω, Bsz = 0 in RN \Ω.
Since q ∈ (0, 1), then setting
M = min
{1
2 ‖w‖2 − λ
q+1
∫
Ω
wq+1
+ dx, w ∈ Hs
}
,
it follows that M is achieved by a minimizer z. It is clear that z > 0, then by Proposition 14 and Lemma 16, it follows that z > 0 and it is unique. In particular, z is the solution to problem (3.2). By Theorem 13, it holds that z ∈ L∞(Ω).

11
Now setting zλ = λ
1
1−q z, then zλ is a solution to
(3.3)
{ (−∆)szλ = λzq
λ in Ω,
Bszλ = 0 in RN \Ω.
By the comparison result in Lemma 16, it holds that zλ 6 v1. It is clear that zλ is a subsolution to problem (Pλ). Hence a monotonicity argument allows us to get the existence of a solution uλ to problem (Pλ) with zλ 6 uλ 6 v1.
Lemma 19. Let Λ be defined by
Λ = sup {λ > 0 : problem (Pλ) has a solution } .
Then 0 < Λ < ∞.
Proof. By Lemma 18, we reach that Λ > 0. We show now that Λ < ∞. Let λ be such that problem (Pλ) has a solution u ̄λ. By the comparison principle in Lemma 16, we get zλ 6 u ̄λ where zλ is the unique positive solution to problem (3.3). Let φ ∈ Hs, then using Picone’s inequality we obtain that
∫∫
DΩ
(φ(x) − φ(y))2
|x − y|N+2s dx dy >
∫
Ω
φ2
u ̄λ
(−∆)su ̄λ dx
>
∫
Ω
φ2(λu ̄q−1
λ + u ̄p−1
λ ) dx
>
∫
Ω
zp−1
λ φ2 dx
> λ p−1
1−q
∫
Ω
zp−1φ2 dx.
Hence
(3.4) λ p−1
1−q 6 inf
φ∈Hs
∫∫
DΩ
(φ(x) − φ(y))2
|x − y|N+2s dx dy
∫
Ω
zp−1φ2 dx
= Λ∗.
Consequently, Λ 6 (Λ∗)
1−q
p−1 < ∞. This gives point (2) in Theorem 1.
We show now that for all 0 < λ < Λ, problem (Pλ) has a solution. This will be a consequence of the following lemma.
Lemma 20. Let
(3.5) S = {λ > 0 : problem (Pλ) has a solution} .
Then S is an interval.
Proof. Notice that S 6= ∅, thanks to Lemma 18. Let λ1 ∈ S be fixed, we have just to prove that for all 0 < λ2 < λ1, problem (Pλ2) has a non trivial solution. Since λ1 ∈ S, then we get the existence of u1 ∈ Hs such that u1 solves (Pλ1). It is clear that u1 is a supersolution to problem (Pλ2). Recall that z is the unique solution
to problem (3.2). Setting z2 = λ
1 1−q
2 z, then z2 solves
{ (−∆)sz2 = λ2zq
2 in Ω,
Bsz2 = 0 in RN \Ω.

12 B. ABDELLAOUI, A. DIEB, AND E. VALDINOCI
By the comparison principle in Lemma 16, it holds that z2 6 u1. Since z2 is a subsolution to problem (Pλ2), then using a monotonicity argument we get the existence of u2 ∈ Hs such that z2 6 u2 6 u1 and u2 solves problem (Pλ2). Thus λ2 ∈ S and the result follows.
We now prove that (Pλ) possesses a minimal solution and we give some energy properties of such solutions.
Lemma 21. For all 0 < λ < Λ, problem (Pλ) has a minimal solution uλ such that Jλ(uλ) < 0. Moreover the family uλ of minimal solutions is increasing with respect to λ.
Proof. Suppose that (Pλ) has a solution vλ for a given λ ∈ S. Define the sequence vn by v0 = zλ,
(3.6)



(−∆)svn = λvq
n−1 + vp
n−1 in Ω, vn > 0 in Ω, Bsvn = 0 in RN \Ω,
where zλ is the unique solution to problem (3.3). By the comparison result in Lemma 16, we have that z ̄ 6 ... 6 vn−1 6 vn 6 vλ and then, by Proposition 14, it follows that zλ < vn < vλ.
So, using vn as a test function in (3.6), we get ‖vn‖ 6 ‖vλ‖. Hence there exists uλ ∈ Hs such that vn ⇀ uλ. Accordingly, since (−∆)svn > 0, using Lemma 17, we conclude that vn → uλ strongly in Hs and uλ 6 vλ. This shows that uλ is a minimal solution. Then, by Lemma 16 and Proposition 14, we obtain the monotonicity of the family {uλ, λ ∈ (0, Λ)}.
Henceforth, given λ ∈ (0, Λ), we use the notation uλ for the minimal solution. Let us
define a(x) = λquq−1
λ + pup−1
λ and let μ1 be the first eigenvalue of the following the
problem
(3.7)



(−∆)sφ − a(x)φ = μ1φ in Ω, φ > 0 in Ω, Bsφ = 0 in RN \Ω.
Using closely the same argument as in the proof of Lemma 3.5 in [3], we can prove that
(3.8) μ1 > 0.
It is clear that (3.8) is equivalent to
(3.9) ‖φ‖2 >
∫
Ω
a(x)φ2dx ∀φ ∈ Hs.
Since uλ is a solution to (Pλ), testing the equation against uλ itself, we find that
(3.10) ‖uλ‖2 = λ‖uλ‖q+1
q+1 + ‖uλ‖p+1
p+1.
By (3.9), it follows that
(3.11) ‖uλ‖2 − λq‖uλ‖q+1
q+1 − p‖uλ‖p+1
p+1 > 0.
By inserting these relations into (1.4), we obtain that Jλ(uλ) < 0, as desired.

13
This gives point (1) in Theorem 1. Thus, to complete the proof of Theorem 1, we can now focus on the proof of point (3). To this end, we have the following result:
Lemma 22. Problem (Pλ) has at least one solution if λ = Λ.
Proof. Let {λn} be a sequence such that λn ր Λ. We denote by un ≡ uλn the minimal solution to problem (Pλn), then the sequence {un}n is increasing in n. Since Jλn(un) < 0, we get
0 > Jλ(un) − 1
p + 1J′
λ(un)
> (1
2− 1
p + 1 )‖un‖2 + λ( 1
p+1− 1
q + 1 )‖un‖q+1
q+1
> (1
2− 1
p + 1 )‖un‖2 − λ( 1
q+1 − 1
p + 1 )‖un‖q+1.
Then, it follows that {un} is bounded in Hs. Accordingly, we have that un ⇀ u∗ in Hs, for some u∗ ∈ Hs. Since {un}n is increasing in n, using the fact that (−∆)sun > 0, recalling Lemma 17, we conclude that un → u∗ strongly in Hs. As a consequence, u∗ is a solution of (Pλ) for λ = Λ.
Remark 23. If p 6 2s∗ − 1 then using Theorem 13, we can easily prove that u∗ ∈
L∞(Ω), that means that u∗ is a regular extremal solution.
In view of Lemma 22, we obtain point (3) of Theorem 1. The proof of Theorem 1 is thus complete.
4. Proof of Theorem 2
In this section we prove the existence of a second positive solution to (Pλ).
Since p < N+2s
N−2s , we observe that problem (Pλ) has a variational structure, indeed
it is the Euler-Lagrange equation of the energy functional in (1.4). We note that Jλ is well defined, it is differentiable on Hs and for any φ ∈ Hs,
(J ′
λ(u), φ) = 〈u, φ〉 − λ
∫
Ω
|u|qφ dx −
∫
Ω
|u|pφ dx.
Thus critical points of the functional Jλ are solutions to (Pλ). To prove Theorem 2, we will use a mountain pass-type argument. The proof goes as follows. As in the local case, we can prove that the problem has a second positive solution for λ small. This follows using the mountain pass theorem. For this purpose it is essential to have a first solution which is a local minimum in Hs. Let
fλ(r) =



λrq + rp, if r > 0,
0, if r < 0,
and
Fλ(u) =
∫u
0
fλ(r) dr.

14 B. ABDELLAOUI, A. DIEB, AND E. VALDINOCI
We define the functional Jλ(u) = 1
2 ‖u‖2 −
∫
Ω
Fλ(u). Critical points of Jλ correspond
to solutions of (Pλ). Define the set
A = {λ > 0 : Jλ has a local minimum u0,λ}.
It is clear that if λ ∈ A and wλ is a minimum of Jλ in Hs, then v = 0 is a local minimum of the functional
(4.1) Jˆλ(v) = 1
2 ‖v‖2 −
∫
Ω
Gλ(v)dx,
where
Gλ(v) =
∫v
0
gλ(r) dr
and
gλ(r) =



λ ((u0,λ(x) + r)q − u0,λ(x)q) + (u0,λ(x) + r)p − u0,λ(x)p, if r > 0,
0, if r < 0.
We can see that Jˆλ possesses the mountain pass geometry. Thus, let v0 ∈ Hs be such
that Jˆλ(v0) < 0 and define
Γ = {γ : [0, 1] → Hs γ(0) = 0, γ(1) = v0} and c = inf
γ∈Γ max
t∈[0,1] Φλ (γ(t)) .
We have that c > 0 and since p < 2s∗ − 1, then Jˆλ satisfies the Palais-Smale condition. If c > 0, then using the Ambrosetti-Rabinowitz theorem we reach a non trivial critical point. If c = 0, then we use the Ghoussoub-Preiss Theorem, see [21]. As a consequence if we start with a local minimum of the functional Jˆλ, then we
obtain a second critical point of Jˆλ, and hence a second solution to (Pλ). Next, to show that problem (Pλ) has a second solution for all λ ∈ (0, Λ), we follow some arguments similar to those developed by Alama in [1] taking into consideration the nonlocal nature of the operator. We prove first, using a variational formulation of the Perron’s method, that the functional has a constrained minimum and then that this minimum is a local minimum in the whole Hs. To this end, we use a truncation techniq-
ue and some energy estimates.
Fix λ0 ∈ (0, Λ) and let λ0 <  ̄λ < Λ. Define u0, u ̄ to be the minimal solutions
to problem (Pλ) with λ = λ0 and λ =  ̄λ respectively. By definition we obtain that u0 < u ̄. Let us define
M = {u ∈ Hs : 0 6 u 6 u ̄}.
It is clear that u0 ∈ M and that M is a convex closed subset of Hs. Since Jλ0 is bounded from below in M and lower semi-continuous, then we get the existence of θ ∈ M such that Jλ0(θ) = inf
u∈M Jλ0 (u).
Let v be the unique solution to



(−∆)su = λ0uq in Ω, u > 0 in Ω, Bsu = 0 in RN \Ω .

15
We have that Jλ0(v) < 0, and then θ 6= 0. As in Theorem 2.4 in [32], page 17, we conclude that θ is a solution to problem (Pλ). If θ 6= u0, then the proof of Theorem 2 is complete. Accordingly, we can assume that θ = u0. We show that
(4.2) θ is a local minimum of Jλ0.
For this, we argue by contradiction, and we assume that θ is not a local minimum of Jλ0. Then there exists a sequence {vn} ⊂ Hs such that ‖vn − θ‖Hs → 0 as n → ∞ and
(4.3) Jλ0(vn) < Jλ0(θ).
We define wn = (vn − u ̄)+ and un = max{0, min{vn, u ̄}}. It is clear that un ∈ M and
un(x) =



0 if vn(x) 6 0, vn(x) if 0 6 vn(x) 6 u ̄(x), u ̄(x) if u ̄(x) 6 vn(x).
Thus un = vn+ − wn. Let Tn = {x ∈ Ω : un(x) = vn(x)} and Sn = supp wn ∩ Ω.
Notice that supp vn+ ∩ Ω = Tn ∪ Sn. We claim that
(4.4) |Sn| → 0 as n → ∞.
To this end, let ε > 0,
En = {x ∈ Ω : vn(x) > u ̄(x) > θ(x) + δ}
and Fn = {x ∈ Ω : vn(x) > u ̄(x) and u ̄(x) 6 θ(x) + δ},
where δ has to be suitably chosen. Since
0 = |{x ∈ Ω : u ̄(x) < θ(x)}| =
∣ ∣ ∣ ∣ ∣
∞
⋂
j=1
{
x ∈ Ω : u ̄(x) 6 θ(x) + 1
j
}
∣ ∣ ∣ ∣ ∣
= jli→m∞
∣ ∣ ∣ ∣
{
x ∈ Ω : u ̄(x) 6 θ(x) + 1
j
}∣ ∣ ∣ ∣
,
then we get the existence of a suitable δ0 = 1
j0 such that if δ < δ0, then
|{x ∈ Ω : u ̄(x) 6 θ(x) + δ}| 6 ε
2.
Thus |Fn| 6 ε
2 . Since ‖un − v0‖L2(Ω) → 0 as n → ∞, we get that for η = δ2ε
2 , if
n > n0, we have that
δ2ε
2>
∫
Ω
|vn − θ|2dx >
∫
En
|vn − θ|2dx > δ2|En|.
Hence |En| 6 ε
2 . Since Sn ⊂ Fn ∪ En, we conclude that |Sn| 6 ε for n 6 n0 and then
the claim in (4.4) follows. Now we define
H(u) = λ0
q + 1 uq+1
+ + up+1
+
p + 1. Using the fact that
‖vn‖2 > ‖v+
n ‖2 + ‖v−
n ‖2,

16 B. ABDELLAOUI, A. DIEB, AND E. VALDINOCI
we obtain that
Jλ0(vn) = 1
2 ‖vn‖2 −
∫
Ω
H (vn)dx
>1
2 ‖v+
n ‖2 −
∫
Ω
H(vn)dx + 1
2 ‖v−
n ‖2
=1
2 ‖v+
n ‖2 −
∫
Tn
H(un)dx −
∫
Sn
H(vn)dx + 1
2 ‖v−
n ‖2
=1
2 ‖v+
n ‖2 −
∫
Tn
H(un)dx −
∫
Sn
H(wn + u ̄)dx + 1
2 ‖v−
n ‖2
= Jλ0(un) + 1
2
(
‖v+
n ‖2 − ‖un‖2)
+1
2 ‖v−
n ‖2 −
∫
Sn
(
H(wn + u ̄) − H(u ̄)
)
dx,
where we have used the fact that
∫
Ω
H(un)dx =
∫
Tn
H(un)dx +
∫
Sn
H (u ̄)dx.
Also, since vn+ = un + wn, then
1 2
(
‖v+
n ‖2 − ‖un‖2)
=1
2 ‖wn‖2 + 〈un, wn〉.
Using that
{wn 6= 0} = {un = u ̄},
we see that
〈un, wn〉 >
∫
Ω
(−∆)su ̄wndx > λ
∫
Sn
u ̄qwndx +
∫
Sn
u ̄pwndx.
Therefore, recalling that u ̄ is a supersolution to problem (Pλ) for λ = λ0, we conclude that
Jλ0(vn) > Jλ0(θ) + 1
2 ‖wn‖2 + 1
2 ‖v−
n ‖2
−
∫
Sn
{
H(wn + u ̄) − H(u ̄) − λ0u ̄qwn − u ̄pwn
}
dx.
Taking into account that
06 1
q + 1 (wn + u ̄)q+1 − 1
q + 1 u ̄q+1 − u ̄qwn 6 q
2
w2n
u ̄1−q ,
and using the Picone inequality in Theorem 15, we find that
 ̄λ
∫
Ω
w2n
u ̄1−q dx 6
∫
Ω
w2n
u ̄ (−∆)su ̄ 6 ‖wn‖2.
Then, we obtain that
λ0
∫
Ω
{1
q + 1 (wn + u ̄)q+1 − 1
q + 1 u ̄q+1 − u ̄qwn
}
dx 6 q
2
∫
Ω
w2n
u ̄1−q dx 6 q
2 ‖wn‖2.

17
Moreover, since 2 6 p + 1,
06 1
p + 1 (wn + u ̄)p+1 − 1
p + 1 u ̄p+1 − u ̄pwn 6 p
2 w2
n(wn + u ̄)p−1 6 C(u ̄p−1w2
n + wp+1
n ).
Hence, using the Sobolev inequality and the fact that |Sn| → 0 as n → ∞, we reach that ∫
Ω
{1
p + 1 (wn + u ̄)p+1 − 1
p + 1 u ̄p+1 − u ̄pwn
}
dx 6 o(1)‖wn‖2.
Hence
Jλ0(vn) > Jλ0(θ) + 1
2 ‖wn‖2(1 − q − o(1)) + 1
2 ‖v−
n ‖2
> Jλ0(θ) + 1
2 ‖wn‖2(1 − q − o(1)) + o(1).
So we get that
0 > Jλ0(vn) − Jλ0(θ) > 1
2 ‖wn‖2(1 − q − o(1)) + 1
2 ‖v−
n ‖2.
Since q < 1, we conclude that wn = vn− = 0 for n large, so vn ∈ M and then
Jλ0(vn) > Jλ0(θ),
which is in contradiction with (4.3). This completes the proof of (4.2). From this, we have that θ is a local minimum for Jλ0, and Jˆλ0 has u = 0 as a local minimum and then Jˆλ0 has a nontrivial critical point uˆ. As a consequence, u = θ + uˆ is a solution, different from θ, of problem (Pλ). This concludes the proof of Theorem 2.
Remark 24. If we consider the odd symmetric version of problem (Pλ), namely,
(4.5)



(−∆)su = λ|u|q−1u + |u|p−1u in Ω,
Bsu = 0 in RN \Ω ,
the associated functional
Iλ(u) = 1
2‖u‖2 − λ
q + 1 ‖u‖q+1
q+1 − 1
p ‖u‖p+1
p+1
is even. Then, for p < N+2s
N−2s , by using the Lusternik-Schnirelman min-max argument,
it is possible to prove that problem (4.5) has infinitely many solutions with negative energy, see [3] and [6], and following closely the arguments in [4], [3] the same holds for solutions with positive energy.
Acknowledgements
The authors would like to express their gratitude to the anonymous referee for his/her comments and suggestions that improve the last version of the manuscript.
Part of this work was carried out while the second author was visiting the WeierstraßInstitut f ̈ur Angewandte Analysis und Stochastik in Berlin. He thanks the institute for the warm hospitality.

18 B. ABDELLAOUI, A. DIEB, AND E. VALDINOCI
References
[1] S. Alama, Semilinear elliptic equation with sublinear indefinite nonlinearities, Adv. Differential Equation 4 (6) (1999), 813-842.
[2] A. Ambrosetti, Critical points and nonlinear variational problems. Mem. Soc. Math. France (N.S.) 49 (1992), 1-139.
[3] A. Ambrosetti, H. Brezis, G. Cerami, Combined effects of concave and convex nonlinearities in some elliptic problems, J. Funct. Anal. 122 (2) (1994), 519-543.
[4] A. Ambrosetti, P.H. Rabinowitz, Dual variational methods in critical point theory and applications, J. Funct. Anal. 14 (1973), 349-381.
[5] D. Applebaum, Le ́vy processes and stochastic calculus (2nd edn), Cambridge Studies in Advanced Mathematics, vol. 116 (Cambridge University Press, 2009).
[6] J. G. Azorero, I. Peral. Multiplicity of solutions for elliptic problems with critical exponent or with a non-symmetric term. Trans. Am. Math. Soc. 323 (1991), 877-895.
[7] B. Barrios, E. Colorado, R. Servadei, F. Soria, A critical fractional equation with concave-convex power nonlinearities. Ann. Inst. H. Poincar ́e Anal. Non Lin ́eaire 32 (2015), no. 4, 875-900.
[8] B. Barrios, M. Medina, Strong maximum principles for fractional elliptic and parabolic problems with mixed boundary conditions, ArXiv 1607.01505. [9] B. Barrios, M. Medina, I. Peral, Some remarks on the solvability of non-local elliptic problems with the Hardy potential. Commun. Contemp. Math. 16 (2014), no. 4, 1350046, 29 pp. [10] H. Brezis, S. Kamin, Sublinear elliptic equations in Rn, Manuscripta Math. 74 (1992), 87-106. [11] C. Bucur, M. Medina, A fractional elliptic problem in Rn with cri-
tical growth and convex nonlinearities, ArXiv 1609.01911. [12] C. Bucur, E. Valdinoci, Nonlocal diffusion and applications. Lecture Notes of the Unione Matematica Italiana, 20. Springer; Unione Matematica Italiana, Bologna, 2016. xii+155 pp. ISBN: 978-3-319-28738-6; 978-3-319-28739-3.
[13] L. Caffarelli, L. Silvestre, An extension problem related to the fractional Laplacian. Comm. Partial Differential Equations 32 (2007), no. 7-9, 1245-1260.
[14] L. Caffarelli, L. Silvestre, Regularity results for nonlocal equations by approximation, Arch. Ration. Mech. Anal. 200 (2011), no. 1, 59-88.
[15] E. Colorado, I. Peral, Semilinear elliptic problems with mixed Dirichlet-Neumann boundary conditions. J. Funct. Anal. 199 (2003), no. 2, 468-507.
[16] M. Cozzi, Qualitative Properties of Solutions of Nonlinear Anisotropic PDEs in Local and Nonlocal Settings. PhD thesis, 2015.
[17] E. Di Nezza, G. Palatucci and E. Valdinoci, Hitchhiker’s guide to the fractional Sobolev spaces, Bull. Sci. Math. 136 (2012), no. 5, 521-573. [18] S. Dipierro, M. Medina, I. Peral, E. Valdinoci, Bifurcation results for a fractional elliptic equation with critica exponent in Rn, Manuscripta Math. doi:10.1007/s00229-016-0878-3
[19] S. Dipierro, M. Medina, E. Valdinoci, Fractional elliptic problems with critical growth in the whole of RN . Appunti. Scuola Normale Superiore di Pisa (Nuova Serie) [Lecture Notes. Scuola Normale Superiore di Pisa (New Series)]. Edizioni della Normale, Pisa.
[20] S. Dipierro, X. Ros-Oton, E. Valdinoci, Nonlocal problems with Neumann boundary conditions, to appear in Rev. Mat. Iberoam.
[21] N. Ghoussoub, D. Preiss, A general mountain pass principle for locating and classifying critical points, Ann. Inst. H. Poincar ́e Anal. Nonlin ́eaire 6 (5) (1989), 321-330.
[22] M. Grossi, F. Pacella, Positive solutions of nonlinear elliptic equations with critical Sobolev exponent and mixed boundary conditions. Proc. Roy. Soc. Edinburgh Sect. A 116 (1990), no. 1-2, 23-43. [23] N. S. Landkof, Foundations of modern potential theory, Translated from the Russian by A. P. Doohovskoy, Die Grundlehren der mathematischen Wissenschaften, Band 180, Springer-Verlag, New York-Heidelberg (1972) x+424 pp.
[24] T. Leonori, I. Peral, A. Primo, F. Soria, Basic estimates for solutions of a class of nonlocal elliptic and parabolic equations, Discrete Contin. Dyn. Syst. 35 (2015), no. 12, 6031-6068.

19
[25] A. C. Ponce, Elliptic PDEs, Measures and Capacities. Tracts in Mathematics 23, European Mathematical Society (EMS), Zurich, 2016.
[26] X. Ros-Oton, Nonlocal elliptic equations in bounded domains: A survey. Publ. Mat. 60 (2016), 3-26.
[27] X. Ros-Oton, J. Serra, The Dirichlet problem for the fractional Laplacian: regularity up to the boundary, J. Math. Pures Appl. 101 (2014), 275-302.
[28] R. Servadei, E. Valdinoci, Mountain pass solutions for non-local elliptic operators, J. Math. Anal. Appl. 389 (2012), no. 2, 887-898.
[29] R. Servadei, E. Valdinoci, Variational methods for non-local operators of elliptic type, Discrete Contin. Dyn. Syst. 33 (2013), no. 5, 2105-2137.
[30] R. Servadei, E. Valdinoci, Weak and viscosity solutions of the fractional Laplace equation, Publ. Mat. 58 (2014), 133-154.
[31] G. Stampacchia, Le proble`me de Dirichlet pour les e ́quations elliptiques du second ordre `a coefficients discontinus, Ann. Inst. Fourier (Grenoble), 15 (1965), 189-258.
[32] M. Struwe, Variational Methods: Applications to Nonlinear Partial Differential Equations and Hamiltonian Systems, Ergeb. Math. Grenzgeb. (3), Springer-Verlag, Berlin Heidelberg, 1990.
(Boumediene Abdellaoui) Laboratoire d’Analyse Nonlin ́eaire et Math ́ematiques Appliqu ́ees. D ́epartement de Math ́ematiques, Universit ́e Abou Bakr Belkaı ̈d, Tlemcen, Tlemcen 13000, Algeria.
E-mail address: boumediene.abdellaoui@inv.uam.es
(Abdelrazek Dieb) Laboratoire d’Analyse Nonlin ́eaire et Math ́ematiques Appliqu ́ees. Universit ́e Abou Bakr Belkaı ̈d, Tlemcen, Tlemcen 13000, Algeria., And, D ́epartement de Math ́ematiques, Universit ́e Ibn Khaldoun, Tiaret, Tiaret 14000, Algeria. E-mail address: dieb d@yahoo.fr
(Enrico Valdinoci) University of Melbourne, School of Mathematics and Statistics, Richard Berry Building, Parkville VIC 3010, Australia, University of Western Australia, School of Mathematics and Statistics, 35 Stirling Highway, Crawley, Perth WA 6009, Weierstraß-Institut fu ̈r Angewandte Analysis und Stochastik, Mohrenstraße 39, 10117 Berlin, Germany, Dipartimento di Matematica, Universita` degli studi di Milano, Via Saldini 50, 20133 Milan, Italy, and Istituto di Matematica Applicata e Tecnologi-
e Informatiche, Consiglio Nazionale delle Ricerche, Via Ferrata 1, 27100 Pavia, Italy.
E-mail address: enrico@mat.uniroma3.it

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:53.202Z
- **Text Length:** 38002 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
