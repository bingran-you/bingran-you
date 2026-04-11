# PDF Document: Henderson and Souganidis - 2017 - The reactive-telegraph equation and a related kinetic model.pdf

**File Path:** Henderson and Souganidis - 2017 - The reactive-telegraph equation and a related kinetic model.pdf

**Processed Date:** 2026-02-10T18:15:11.372Z

**File Size:** 511.21 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2731

**Title:** The reactive-telegraph equation and a related kinetic model

**Collection:** Large Files

---

## Extracted Text Content

The reactive-telegraph equation and a related kinetic model
Christopher Henderson∗ and Panagiotis E. Souganidis†
June 22, 2021
Abstract
We study the long-range, long-time behavior of the reactive-telegraph equation and a related reactive-kinetic model. The two problems are equivalent in one spatial dimension. We point out that the reactive-telegraph equation, meant to model a population density, does not preserve positivity in higher dimensions. In view of this, in dimensions larger than one, we consider a reactive-kinetic model and investigate the long-range, long-time limit of the solutions. We provide a general characterization-
 of the speed of propagation and we compute it explicitly in one and two dimensions. We show that a phase transition between parabolic and hyperbolic behavior takes place only in one dimension. Finally, we investigate the hydrodynamic limit of the limiting problem.
1 Introduction
The Fisher-KPP equation
ut = uxx + u(1 − u)
is the classical model used to study the spread of a population in an environment. Being based on the heat equation, the Fisher-KPP equation exhibits infinite speed of propagation. Indeed the population density is non-zero everywhere for any positive time even if the initial data is compactly supported.
One approach to remove this unphysical behavior is to look at the reactive-telegraph equation
τ ρtt + (1 − τ (1 − 2ρ))ρt = ∆ρ + ρ(1 − ρ). (1.1)
This may be stated with more general non-linearities F (ρ) in place of ρ(1 − ρ) and F ′(ρ) in place
of 1 − 2ρ. In one dimension, this is equivalent, for ρ = p−+p+
2 , to the kinetic system
{p+
t + √1τ px+ = 1
2τ (p− − p+) + 1
2 ρ(1 − ρ),
p−
t − √1τ px− = 1
2τ (p+ − p−) + 1
2 ρ(1 − ρ). (1.2)
The solution ρ is a population density, while p± represents the density of those individuals moving with velocity ±1. The positive parameter τ is related to the relaxation time, which depends on
∗Corresponding author, Department of Mathematics, The University of Chicago, 5734 S. University Avenue, Chicago, IL 60637, E-mail: henderson@math.uchicago.edu
†Department of Mathematics, The University of Chicago, 5734 S. University Avenue, Chicago, IL 60637, E-mail: souganidis@math.uchicago.edu
1
arXiv:1706.00483v2 [math.AP] 30 Oct 2017

the mean run length between changes in velocity. A small sample of the more applied literature addressing these models, including the interpretation of τ can be found in the works of Fedotov [17], Hillen and Othmer [18], Holmes [19], Horsthemke [20], Kac [21], M ́endez, Fort, and Farjas [24], and Ortega, Fort, and M ́endez [25].
We discuss, in particular the work in [17], where the author proposed (1.1) as a model for population dynamics in more than one dimension, deriving it from a general transport model with the flux given by convolution of the gradient with a kernel, and formally analyzed the long-range, long-time behavior of the solution with arguments similar to those used to rigorously study the same problem for the Fisher-KPP equation. However, to even write down this formal analysis it is necessary to know that -
the solutions to (1.1) preserve the sign, that is if they start nonnegative, they remain nonnegative.
Our first result is to show that, in general, such formal computations cannot be justified when n ≥ 2. Indeed, solutions to (1.1) need not remain positive. In other words, it is not possible to rule out negative population densities, which are unphysical.
Theorem 1.1. Assume n = 1 and fix ρ0 ∈ C1(R) ∩ L1(R) with 0 ≤ ρ0 ≤ 1. If ρ is the solution of (1.1) with initial data ρ(·, 0) = ρ0 and ρt(·, 0) = 0, then 0 ≤ ρ(x, t) ≤ 2 for all (x, t) ∈ R × [0, ∞).
If n ≥ 2, there exists ρ0 ∈ C∞(Rn) with 0 ≤ ρ0 ≤ 1 and (x0, t0) ∈ Rn × R+ such that, if ρ solves (1.1) with initial data ρ(·, 0) = ρ0 and ρt(·, 0) = 0, then ρ(x0, t0) < 0.
We discuss first why (1.1) preserves positivity when n = 1. In this case, (1.1) is equivalent to (1.2), which preserves positivity because, roughly, ρ is controlled by p from below. Neither the equivalence of the model (1.1) to a kinetic equation nor the fact that ρ is controlled below by p holds in higher dimensions.
As is evident in the proof of Theorem 1.1, (1.1) does not preserve positivity for a wide class of non-linearities F . The essential ingredients of the proof are that the equation is well-defined for short times for data in a “nice” enough Sobolev space and that F is piecewise C1 near zero with F (0) = 0. In particular, the second claim in Theorem 1.1 is due to the properties of the wave operator and not the non-linearity ρ(1 − ρ).
In view of the discussion above, the reactive-telegraph equation allows for negative population densities, suggesting that it may not be an appropriate biological model in some settings. As such, we restrict our focus to the following generalization of the kinetic system (1.2)
pt + an,τ v · Dp = 1
τ (ρ − p) + ρ(1 − ρ)+ in Rn × Sn−1 × R+, (1.3)
where D is the spatial gradient, p is the density of individuals moving with velocity v ∈ Sn−1,
ρ(x, t) :=
Sn−1
p(x, v, t)dv
is the population density, an,τ := √n/τ (1.4)
is the speed of pure transport, Sn−1 is the unit sphere in Rn, R+ := (0, ∞), ffl denotes the normalized
integral such that ffl
Sn−1 dx = 1, and x+ := max(x, 0).
We make a few general comments regarding (1.3). First, although the reactive-telegraph equation (1.1) is equivalent to a kinetic model like (1.3) (cf. (1.2)) in one dimension, there is no rigorous
2

connection between the two in higher dimensions. Second, we use the non-linearity ρ(1−ρ)+ so that the model preserves positivity1 and retains the fundamental aspects of the logistic one, ρ(1 − ρ). In particular, it represents the physical assumption that growth and competition depend only on
the total population at a particular location and do not depend on velocity. Lastly, the √n factor in an,τ is to fix the hydrodynamic limit τ → 0 as the classical Fisher-KPP equation regardless of the dimension. This is discussed later in the paper (see Proposition 1.6).
By analogy with the Fisher-KPP equation, we expect the population to spread linearly-in-time. In situations like this, where a front2 is expected to move at an approximately constant speed, it is standard to use the hyperbolic long-range, long-time limit, see Barles, Evans and Souganidis [2], Evans and Souganidis [16], and Majda and Souganidis [23] and the large body of literature citing these works. This limit corresponds to scaling space and time by the same large parameter in order to capture t-
his linear-in-time propagation while ignoring fluctuations and short-time behavior.
As such, we use the hyperbolic scaling (x, v, t) 7→ (x/ , v, t/ ) and consider the rescaled function
p (x, v, t) := p(x/ , v, t/ ),
which solves
pt + an,τ v · Dp = 1
τ (ρ − p ) + 1 ρ (1 − ρ )+ in Rn × Sn−1 × R+, (1.5)
with
ρ (x, t) :=
Sn−1
p (x, v, t)dv.
We study the behavior, as → 0, of p and ρ with initial datum
p (·, ·, 0) = p0 on Rn × Sn−1 × {0} (1.6)
such that
{0 ≤ p0 ≤ 1, and there exists an open, Lipschitz domain G0 ⊂ Rn so that
G0 := {x ∈ Rn : infv p0(x, v) > 0} and Gc0 = {x ∈ Rn : supv p0(x, v) = 0}.
(1.7)
In order to investigate the propagation properties of p and ρ as → 0, we use the classical HopfCole transform p = exp (J / ), which is a standard tool in the study of front propagation [2, 16, 23], and study first the behavior, as → 0, of the J ’s, which solve

 
 
Jt + an,τ v · DJ = 1
τ
(ffl
Sn−1 e 1 (J (x,v′,t)−J (x,v,t))dv′ − 1
)
+ffl
Sn−1 e 1 (J (x,v′,t)−J (x,v,t))dv′(1 − ρ )+ in Rn × Sn−1 × R+.
(1.8)
Note that it is possible to use this transformation since p ≥ 0 in Rn × Sn−1 × R+. This is shown to be the case in Lemma 2.1 if (1.7) holds.
In what follows, when necessary to signify the dependence on τ , we write J ,τ , Jτ and Hτ instead of J , J and H.
1See Lemma 2.1 for a proof of the preservation of positivity and see Section 6 for a discussion of a related model with the logistic non-linearity ρ(1 − ρ) that does not preserve positivity, which suggests that ρ(1 − ρ)+ is a better choice of non-linearity. 2By “front,” we mean the area between where ρ approximately takes the value 0 and the value 1.
3

Theorem 1.2. Assume (1.7) and let J solve (1.8) with initial data J (·, ·, 0) = log p0 on Rn × Sn−1. Then, for each τ > 0, there exists a concave, rotationally invariant function H : Rn → R, defined in (3.4), such that, as → 0 and uniformly in v and locally uniformly in Rn × R+, J converges to J, the unique solution to
max (Jt + H(DJ), J) = 0 in Rn × R+ J(·, 0) =
{−∞ in Gc
0,
0 in G0.
(1.9)
We make a few brief comments on some technical aspects of Theorem 1.2. First, the limiting function J does not depend on v. Second, when p0 is zero, we define log p0 to be the extended real value −∞. Lastly, by the locally uniform convergence of J to J, we mean that this convergence is uniform on compact sets K such that either K ⊂ Int{J = −∞} or K ⊂ Int{J < −∞}.
Knowing Theorem 1.2 we then infer the following spreading behavior of ρ .
Theorem 1.3. Suppose that (1.7) holds and that J is the solution to (1.9). Then, as → 0 and locally uniformly in {J < 0}, lim →0 ρ (x, t) = 0.
If τ ≤ 1, then, as → 0 and locally uniformly in Int{J = 0}, lim →0 ρ (x, t) = 1.
If τ > 1, then, as → 0 and locally uniformly in Int{J = 0}, lim inf →0 ρ (x, t) ≥ 1.
Before discussing the proof of Theorem 1.3, we mention the reason that there is a distinction between τ > 1 and τ ≤ 1. When τ < 1, it is possible to bound p by 1 by using a maximum principle-type argument. On the other hand, when τ ≥ 1, it is shown in Lemma 2.1 that upper bound is order (1 + τ )2/4τ . The proof of Theorem 1.3 yields that lim inf →0 ρ (x, t) ≥ 1 on Int{J = 0}. When τ < 1, the bound above gives us immediately that lim sup →0 ρ (x, t) ≤ 1, yielding the exact value of the limit. When -
τ ≥ 1, this argument does not work.
To prove the asymptotic results, we use the classical half-relaxed limits of Barles and Perthame [3] along the lines of [2, 16] and a modification due to Barles and Souganidis [4], which allows us to side-step the technical difficulty that, due to the finite speed of propagation in kinetic equations, the J ’s take the value −∞. The combination of the half-relaxed limits and the technique of [4] is that, roughly, when the limiting Hamilton-Jacobi equation represents a distance function, no a priori-
 bounds or regularity are needed to pass to the limit → 0.
The Hamiltonian H in Theorem 1.2 is the same one found by Bouin and Calvez [6] and Caillerie [12] in a related context since the linearized equations are the same.
Since H in (1.9) is space-time homogeneous, it follows from [16, 23] that
J(x, t) = min (I(x, t), 0) , (1.10)
where I is the solution to
It + H(DI) = 0 in Rn × R+, I(·, 0) =
{−∞ in Gc
0,
0 in G0.
Let L be the concave dual of H. Then, see, for example, Lions [22],
I(x, t) = t sup
{
L
(x − y
t
)
: y ∈ G0
}
. (1.11)
As mentioned in Theorem 1.2, H is concave and rotationally invarant. From this it follows that H is radially decreasing; this can also be seen from the explicit formula (3.4). As a result, L has the
4

same properties. Taking some liberty with notation, we write L(q) = L(|q|). It then follows that, for t ∈ R+,
{x ∈ Rn : J(x, t) < 0} =
{
x ∈ Rn : sup
y∈G0
L
(x − y
t
)
<0
}
=
{
x ∈ Rn : L
( d(x, G0)
t
)
<0
}
,
(1.12) where d(x, G0) is the usual distance from the point x to the closed set G0.
In view of Theorem 1.3, it is clear that the front is ∂{x ∈ Rn : J(x, t) < 0}. From the discussion above, we see that
∂{x ∈ Rn : J(x, t) < 0} = ∂{x ∈ Rn : I(x, t) < 0} =
{
x ∈ Rn : L
( d(x, G0)
t
)
=0
}
. (1.13)
The next result, which holds for n ≥ 2, provides a characterization of the 0-level set of L and, hence, the speed of propagation in terms of a global property of the Hamiltonian.
Let
cn,τ := − sup
q∈Rn
H (q)
|q| .
The claim is:
Proposition 1.4. Assume (1.7) and n ≥ 2. Then cn,τ is achieved, cn,τ < an,τ , and the front is the set {x ∈ Rn : d(x, G0) = cn,τ t}.
Since cn,τ < an,τ , it follows that, for n ≥ 2, the front moves with velocity slower than that of pure transport. Following [8], we call this behavior parabolic to distinguish it from the hyperbolic one, which is observed, as discussed below, for n = 1, when τ ≥ 1.
To heuristically justify the term “parabolic,” we return to the unscaled problem (1.3) and discuss the behavior of ρ when ρ0 has compact support. Indeed, due to the kinetic nature of (1.3), the support of ρ propagates with the speed of the pure transport an,τ . Proposition 1.4, however, implies that the set on which ρ is approximately 1 propagates at speed cn,τ . This difference suggests that ρ has long tails connecting 0 and 1. As a result the profile resembles that of solutions to the Fisher-KPP-
 equation, whose long tails are caused by the infinite speed of propagation in the heat equation. See Figure 1 for a cartoon picture of this, and see [8] for an explicit construction where the long tails are observed.
When n = 1 and n = 2 it is possible to explicitly compute H and, hence, the speed of propagation. This is the contents of the proposition below. We point out that the speed c1,τ is the one given in [17] and is the speed of the traveling waves constructed by Bouin, Calvez, and Nadin in [8].
Proposition 1.5. Assume (1.7). Then
cτ,1 =



2
1+τ if τ ≤ 1,
√1τ if τ ≥ 1, and cτ,2 =
√2(2 + τ )
1+τ .
When n = 1 and τ ≥ 1, a1,τ = c1,τ . We refer to this behavior as “hyperbolic”. To heuristically justify this term, we again return to the unscaled problem (1.3) and consider initial data ρ0 with compact support. Following the discussion above, we see that the support of ρ and the set on which ρ approximately takes the value 1 move with the same speed. In particular, we do not
5

x cn,τ t an,τ t cn,τ t an,τ t
1
ρρ
Hyperbolic behavior Parabolic behavior
Figure 1: Cartoon pictures showing the difference between the hyperbolic behavior (the graph on the left) seen in one spatial dimension when τ ≥ 1 and the parabolic behavior (the graph on the right) seen otherwise. The key distinction is, in the parabolic behavior, the formation of long tails connecting the boundary of the support of ρ, which progress with speed an,τ , with the location of the front, which progresses with speed cn,τ , which is strictly less than an,τ .
see the formation of long tails as in the discussion above. Once more, see Figure 1 for a cartoon representation of this behavior and see [8] for an explicit construction where one sees this behavior.
It follows from the last two propositions that there is a phase transition, depending on τ , between parabolic and hyperbolic behavior only in one dimension. We now heuristically explain the reason for this. In order to exhibit hyperbolic behavior, growth due to the reaction must “keep up” with pure transport. That this is possible in only R1 is related to the fact that p controls ρ from below; that is, for any v ∈ S0 = {−1, 1}, p(x, v, t)/2 ≤ ρ(x, t) for all (x, t). In particular, the non-local r-
eaction term ρ(1 − ρ)+ can be bounded below by a local term when ρ is small. This is not possible in higher dimensions.
Formally, taking the limit τ → 0 in (1.1), we recover the Fisher-KPP equation ut = ∆u + u(1 − u). In addition, solutions of (1.3) formally converge, as τ → 0, to the Fisher-KPP equation regardless of dimension; see, for example, the discussion of Cuesta, Hittmeir, and Schmeiser in [14] and also Section 3 of [18].
We prove that the limits may be taken in the reverse order to obtain the same limiting object. Indeed, fix u0 such that G0 = {u0 > 0} and let u be the solution to
ut = ∆u + −1u (1 − u ) in Rn × R+ u (·, 0) = u0 on Rn.
It is well-known (see [16]) that, as → 0 and locally uniformly in (x, t), z := log u converges to the unique solution z of
max{zt − |Dz|2 − 1, z} = 0 in Rn × R+ z(·, 0) =
{0 on G0,
−∞ on Gc
0.
(1.14)
We show that, as τ → 0, Jτ → z, implying that limτ→0 lim →0 Jτ, = z. This is what one would expect in view of the discussion above, which formally gives that lim →0 limτ→0 Jτ, = z.
Proposition 1.6. Assume (1.7) and let Jτ and z be respectively the unique solutions to (1.9) and (1.14). Then, as τ → 0 and locally uniformly in Rn × R+, Jτ → z.
The convergence in Proposition 1.6 essentially follows from the formal convergence of Hτ to −|·|2−1.
As seen explicitly in the proof, without the √n factor in (1.4), there would be a factor n in the equation for limτ→0 Jτ . This is related to the fact that the variance of any unit vector over Sn−1
is 1/n. We mention briefly that, in the equation (1.3), the √n factor can be added or removed by simply scaling in x and therefore does not affect our analysis.
6

Next we discuss briefly related works. As mentioned above, the one dimensional problems have been considered from the modeling perspective in [18, 19, 21]. The reactive-telegraph model (1.1) has only been rigorously studied in the one dimensional setting. We point out, in particular, the work of Bouin, Calvez, and Nadin [8], in which they prove existence and stability of traveling waves in a weighted space. In addition, there is [17] which was discussed earlier. There has been more work recently -
on related kinetic equations in one dimension. Bouin and Calvez [6] obtained convergence to a limiting equation for the linearization of (1.3) assuming that J0 is Lipschitz and bounded. Later Bouin, Calvez, and Nadin [9], and Bouin, Calvez, Grenier, and Nadin [7] showed acceleration in a kinetic-reactive equation similar to our setting but where the velocity space is unbounded and the reaction term is replaced by ρ(M (v) − p). In higher dimensions, the kinetic model studied here with ρ(1 − ρ) repl-
aced by ρ(M (v) − p) was investigated by Caillerie [12]. In this work Caillerie performs a limiting procedure with well-prepared initial data and identifies the same Hamiltonian as the one we find above3.
Finally, during the write-up of this work, we became aware of a parallel work by Bouin and Caillerie [5] which has some similarity to the present one. In [5], the authors investigate a related kinetic system with reaction term ρ(M (v) − p) and with general dispersal kernel M (v). The authors consider the long-range, long-time limit of this equation, the question of propagation in the unscaled equation, and the existence of traveling waves. There are many differences between the two papers. First, -
in the long-range, long-time limit, Bouin and Caillerie consider well-prepared initial data4 for J , which corresponds to initial conditions that are exponentially decaying (in contrast to the compactly supported initial conditions considered here and widely considered in the front propagation literature5). Second, the equation considered by Bouin and Caillerie enjoys the maximum principle. These two facts simplify many technical details in the long-range, long-time limit. Also, the questions cons-
idered in the present work about the appropriateness of the reactive-telegraph equation, the difference in behavior with the non-linearity ρ(1 − ρ) versus ρ(1 − ρ)+, and the existence and dependence on dimension of the phase transition in τ are not considered in [5]. On the other hand, the work of Bouin and Caillerie considers a much broader class of kinetic models, which will be useful in studying a variety of biological models.
Organization of the paper
The paper is organized into six main parts. In Section 2 we present a preliminary lemma that gives an upper bound for J that is independent of and prove the convergence part of Theorem 1.3. The Hamiltonian and its properties as well as the proof of Theorem 1.2 are given in Section 3. In Section 4 we prove Proposition 1.4 and Proposition 1.5. In Section 5 we show that we may take the hydrodynamic limit τ → 0 to recover the Hamilton-Jacobi equation of the Fisher-KPP equation. In Section 6 we prove T-
heorem 1.1 and discuss an example of a related kinetic system with logistic reaction term which does not preserve positivity either. A brief Appendix is included containing computations of some non-standard integrals that are used throughout the manuscript.
3That they are related can be seen by the fact that F (ρ) and ρ(M (v) − p) have the same linearization when M (v) is 1 for all v ∈ Sn−1. 4The authors fix initial data for their analogue of J and apparently assume that this initial data is independent of and finite everywhere. This is in contrast to the present work in which J takes infinite values in Gc
0.
5 Since the study of front propagation is the study of a new population (or other physical quantity) invading a previously unexplored area, which corresponds to p0 being zero, this type of assumption is crucial to a full investigation. We note that this is not a mere technical detail – there are many situations where the behavior of compactly supported initial data and well-prepared initial data are quite different (see, e.g., Bramson [10], Zlatosˇ [27], Cabre and Roquejoffre [11]).
7

The notion of solution
We are not making any assumptions for (1.5) and (1.8) to have smooth solutions. We interpret both equations as well as the limiting Hamilton-Jacobi variational inequalities and equations in the classical Crandall-Lions viscosity sense.
Acknowledgements
We wish to thank the anonymous referees for a close reading of the manuscript and their very helpful comments. CH would like to thank Jacek Jendrej for pointing out the refence [26] regarding regularity of hyperbolic equations. CH was partially supported by the National Science Foundation Research Training Group grant DMS-1246999. PS was partially supported by the National Science Foundation grants DMS-1266383 and DMS-1600129 and the Office for Naval Research Grant N00014-17-1-2095.
2 Bounds and the proof of Theorem 1.2
The a priori bounds
We state as a lemma the fact that (1.5) preserves positivity and yields an upper bound that is independent of . This is important, since without the positivity of p , J is not well-defined, while the upper bound is needed in order to study the limit → 0.
Lemma 2.1. Assume 0 ≤ p0 ≤ 1 and let p be the solution to (1.5) and (1.6). Then, for all t ∈ R+,
0 ≤ p (·, ·, t) ≤ Mτ ,
where
Mτ =



1 if τ ≤ 1,
(1+τ )2
4τ if τ > 1.
Proof. The positivity of p follows from rewriting (1.5) as
pt + an,τ v · Dp + 1
τp = 1
τ ρ + 1 ρ (1 − ρ )+,
and observing that the right hand side of the above equation is always nonnegative.
For the upper bound, if τ > 1, let
q := (1 + τ )2
4τ − p and ρˆ :=
Sn−1
q (x, v, t)dv.
It follows that
qt + an,τ v · Dq + 1
τq = 1
τ ρˆ + 1 (
ρˆ − (1 + τ )2
4τ
)(
ρˆ −
( (1 + τ )2
4τ − 1
))
+
.
Straightforward calculations yield that the right hand side above is nonnegative, which, in turn, implies that q ≥ 0 and, hence, the claim.
When τ ≤ 1 the proof is similar, so we omit the details.
8

Propagation
We present the proof of Theorem 1.2, which is an immediate consequence of Theorem 1.3.
Proof of Theorem 1.2. Fix any (x0, t0) ∈ {J < 0} with t0 > 0. Since J converges locally uniformly in x, t and uniformly in v to J, then, for all sufficiently small, we have
sup
v∈Sn−1
J (x0, v, t0) ≤ J (x0, t0)/2 < 0.
It follows that
ρ (x0, t0) =
Sn−1
p (x0, v, t0)dv ≤ sup
v∈Sn−1
p (x0, v, t0) = e 1 supv∈Sn−1 J (v,x0,t0) ≤ e
J (x0 ,t0 )
2,
and, hence, lim →0 ρ (x0, t0) = 0; the local uniformity of the limit is immediate.
Now consider any point (x0, t0) ∈ Int{J = 0} with t0 > 0. Let φ(x, t) = −|t − t0|2 − |x − x0|2 and notice that J − φ has a strict local minimum at (x0, t0). Hence, there exist (x , t ) converging to (x0, t0) such that minv J (x, t)−ψ has a local minimum at (x , t ). Let v be such that J (x , v , t ) = minv J (x , v, t ).
Uaing (1.8), we find
φt(x , t ) + an,τ v · Dφ(x , t ) ≥ 1
τ
( ρ (x , t )
p (x , v , t ) − 1
)
+ ρ (x , t )
p (xe, v , t ) (1 − ρ (x , t ))+. (2.1)
Observe that, since (x , v , t ) is the location of a global minimum in v of J (x , v , t ),
ρ (x , t )
p (xe, v , t ) ≥ 1.
Moreover, an explicit computation implies that, as → 0, φt(x , t ) + an,τ v · Dψ(x , t ) → 0.
Then
li→m0
ρ (x , t )
p (x , v , t ) = 1 and li→m0(1 − ρ (x , t ))+ = 0. (2.2)
The second limit above implies that lim inf →0 ρ (x , t ) ≥ 1.
Next, recall that, for all v ∈ Sn−1, J (x0, v, t0) ≥ J (x , v , t ) − φ(x , t ). Hence
ρ (x0, t0) =
Sn−1
e
J (x0,v,t0)
dv ≥
Sn−1
e
J (x ,v ,t )+|x −x0|2+|t −t0|2
dv
≥ p (x , v , t ) =
( p (x , v , t )
ρ (x , t )
)
ρ (x , t ).
Letting → 0 and using (2.2), we conclude that
lim inf
→0 ρ (x0, t0) ≥ 1. (2.3)
Since, when τ ≤ 1, p ≤ 1, we have ρ ≤ 1, (2.3) yields
li→m0 ρ (x0, t0) = 1.
9

3 The Hamiltonian, its properties and the proof of Theorem 1.3
The Hamiltonian H and its properties
To motivate the choice of the Hamiltonian H, we first present a formal argument about the limit of the J assuming that
J (x, v, t) = J(x, t) + η(x, v, t) + o( ).
Working in {J < 0}, where we can ignore ρ in (1 − ρ )+, we get from (1.8) that
Jt + an,τ v · DJ = 1
τ
(
Sn−1
eη(x,v′,t)−η(x,v,t)dv′ − 1
)
+
Sn−1
eη(x,v′,t)−η(x,v,t)dv′.
Since Jt is independent of v, there must exist some, independent of v, constant H(DJ) so that, for all v ∈ Sn−1,
−H(DJ) + 1
τ + an,τ v · DJ = τ + 1
τ Sn−1
eη(x,v′,t)−η(x,v,t)dv′.
The above expresssion leads to the cell (eigenvalue) problem to find, for each p ∈ Rn, a unique constant H(p) (eigenvalue) and some η = η(v; p) (eigenfunction) such that, for all v ∈ Sn−1,
eη(v)
ffl
Sn−1 eη(v′)dv′ = τ + 1
τ
1
−H(p) + 1
τ + an,τ v · p . (3.1)
It follows that, if it exists, H(p) must be defined implicitly by
τ
1+τ =
Sn−1
dv
−H(p) + 1
τ + an,τ v · p . (3.2)
Consider the function Φ : [1, ∞) → R+ given by
Φ(s) :=
Sn−1
dv
s + v1
; (3.3)
here v = (v1, v2, . . . , vn). It is immediate that Φ′ < 0 and lims→∞ Φ(s) = 0. Moreover, as it is shown in the Appendix, Φ(1) = ∞ when n ∈ {1, 2, 3}, while Φ(1) < ∞ for n > 3.
Fix p ∈ Rn \ {0}. Then, looking at (3.2) and the properties of Φ we assert that
H(p) :=



−an,τ |p| + 1
τ if Φ(1) ≤ τ
1+τ an,τ |p|,
α if Φ(1) ≥ τ
1+τ an,τ |p|,
(3.4)
where, in the latter case, α is the unique negative number such that
Φ
(
−α + 1
τ
an,τ |p|
)
=τ
1 + τ an,τ |p|. (3.5)
Note that H is continuous, isotropic, that is depends only on |p|, and H(0) = −1. We note that this Hamiltonian is the same as found in [5, 12].
Next we show that (3.4) is indeed correct for every p, when n ∈ {1, 2, 3}, and for all p such that Φ(1) > τ
1+τ an,τ |p|, if n > 3. We present the argument in the latter case, since the discussion applies to the former.
10

If Φ(1) > τ
1+τ an,τ |p|, then η : Sn−1 → R given by
eη(u) = τ + 1
τ
1
−H(p) + 1
τ + an,τ v · p , (3.6)
with H(p) given by the second alternative in (3.4), clearly satisfies (3.1). If Φ(1) = τ
1+τ an,τ |p|, then
the η given in (3.6) also satisfies (3.1) for all v ∈ Sn−1 except v = −p/|p|.
It is clear that, when Φ(1) < τ
1+τ an,τ |p|, it is not possible to find such an η. In the proofs, we deal with this issue by considering “approximate” correctors, which for δ > 0 and appropriately chosen μ > 0, are given by
ημ,δ(v) := τ + 1
τ
1
(δ − H(p) + 1
τ + an,τ v · p)μ . (3.7)
We now discuss the concavity of H. We present the argument for n > 3, since the other cases follow similarly without having to deal with the first part of the definition of the Hamiltonian.
When |p| > (1+τ )Φ(1)/(an,τ τ ), the concavity is obvious from (3.4). When |p| < (1+τ )Φ(1)/(an,τ τ ), we use (3.2) to obtain
Sn−1
DpH(p) − an,τ v
(−H(p) + 1
τ + an,τ v · p)2 dv = 0. (3.8)
Differentiating again we get
Sn−1
Dp2 H (p)dv
(−H(p) + 1
τ + an,τ v · p)2 = −2
Sn−1
(DpH(p) − an,τ v) ⊗ (DpH(p) − an,τ v)
(−H(p) + 1
τ + an,τ v · p)3 dv.
Fix any non-zero vector ξ ∈ Rn. Then
D2
pH(p)ξ · ξ
Sn−1
dv
(−H(p) + 1
τ + an,τ v · p)2 = −2
Sn−1
|(DpH(p) − an,τ v) · ξ|2
(−H(p) + 1
τ + an,τ v · p)3 dv,
and concavity follows after noticing that, by its construction, −H(p) + 1
τ − an,τ |p| ≥ 0.
Finally to conclude we need to show that the concavity property is preserved across |p| = 1+τ
τ an,τ Φ(1)
when Φ(1) < ∞. Since H is isotropic, this is immediate if we show that
lim sup
|p|→ 1+τ
τ an,τ Φ(1)−
|DpH(p)| ≤ lim
|p|→ 1+τ
τ an,τ Φ(1)+
|DpH(p)| = an,τ . (3.9)
To establish (3.9) we consider two cases depending on whether ffl
Sn−1(1 + v · pˆ)−2dv is finite or not. Note that this quantity does not depend on pˆ, since we may simply change variables in the integral.
If ffl
Sn−1(1 + v · pˆ)−2dv < ∞ then, in view of (3.8), we get
lim sup
|p|→ 1+τ
τ an,τ Φ(1)−
|DpH(p)| =
∣ ∣ ∣
∣ Sn−1
an,τ v
(1 + v · pˆ)2 dv
∣ ∣ ∣ ∣
(
Sn−1
1
(1 + v · pˆ)2 dv
)−1
≤ an,τ .
If ffl
Sn−1(1 + v · pˆ)−2dv = ∞, then, using (3.8), we find
lim
|p|→ 1+τ
τ an,τ Φ(1)−
|DpH(p)| = an,τ ,
since, otherwise, the left hand side of (3.8) is not finite, and the claim follows.
11

The half-relaxed limits and the limiting equation
We prove Theorem 1.2. The main tools are the classical (in the theory of viscosity solutions) halfrelaxed limits [3] and the methodology of [2]. The problem is that, since J takes infinite values, we do not have uniform bounds. To circumvent this we use an argument introduced in [4] to deal with this kind of difficulty.
We begin with the definition of the half-relaxed limits. Given a family f of uniformly bounded functions depending only on x and t, the half-relaxed upper and lower limits f and f are respectively
f (x, t) := lim sup f (x, t) := lim sup
y→x,s→t, →0
f (y, s) and f (x, t) := lim inf f (x, t) := lim inf
y→x,s→t, →0 f (y, s).
We also remark that, in view of Lemma 2.1,
J ≤ log Mτ in Rn × Sn−1 × R+. (3.10)
Fix A > 0 and let JA := max{J , −A}.
Since JA is bounded, uniformly in , from above and below by log Mτ and −A respectively, we take the half-relaxed upper and lower limits of maxv JA and minv JA respectively; that is, we consider JA and J A given by
JA(x, t) := lim sup mvax JA(x, v, t) and JA(x, t) := lim inf mvin JA(x, v, t). (3.11)
We point out that maxv JA and minv JA are uniformly bounded in and do not depend on v. Hence, their half-relaxed limits are well-defined. Further, we note that we expect the limit of JA to be independent of v as fluctuations in v will “average out.” This suggests that we lose no information in taking the maximum and minimum in v.
To state the next lemma we introduce some additional notation. First, JA,t refers to the time derivative of JA, and this notation applies similarly to other terms derived from JA. Second, given g : Rn → R, g? and g? are respectively its upper and lower semicontinuous envelopes. Moreover,
1A :=



0 on G0,
−A on (Rn \ G0).
Lemma 3.1. Assume (1.7). Then: (i) JA is a (viscosity) sub-solution to



max {J A,t + H(DJ A), J A, −J A − A} ≤ 0 in Rn × R+,
J A(·, 0) ≤ (1A)? on Rn;
(3.12)
(ii) JA is a (viscosity) super-solution to



max {J A,t + H(DJ A), J A, −J A − A} ≥ 0 in Rn × R+,
J A(·, 0) ≥ (1A)? on Rn.
(3.13)
12

The proofs of (3.12) and (3.13) are similar. We separate into cases based on how the Hamiltonian is defined. When H is defined by the second case of (3.4), the proof is based on perturbing the test function by a small multiple of the corrector. This method is classical, dating back to the work of Evans [15] (see also [23] for another early use and [5, 6] for an application in a very similar context). On the other hand, when H is defined by the first case of (3.4), additional care is required beca-
use, as per the discussion in the previous subsection, exact correctors do not exist and a few more additional arguments are need in that case. This is where the proofs of (3.12) and (3.13) differ.
The proofs of parts (i) and (ii) are quite long and involved, and for the readers convenience we separate them into two proofs. We first show the proof of (i), which is slightly simpler.
Proof of Lemma 3.1(i).
# The proof of (3.12) for positive times:
Since ρ ≥ 0, it follows from (1.8) that
Jt + an,τ v · DJ ≤ 1
τ
(
Sn−1
e 1 (J (·,v′,·)−J (·,v,·))dv′ − 1
)
+
Sn−1
e 1 (J (·,v′,·)−J (·,v,·))dv′.
Noting that −A also solves the inequality above and using that the maximum of two sub-solutions is itself a sub-solution implies that
JA,t + an,τ v · DJA ≤ 1
τ
(
Sn−1
e 1 (JA(·,v′,·)−JA(·,v,·))dv′ − 1
)
+
Sn−1
e 1 (JA(·,v′,·)−JA(·,v,·))dv′. (3.14)
Let φ be a smooth test function and assume that JA − φ has a strict maximum at (x0, t0) and φ(x0, t0) = J A(x0, t0).
We first assume that t0 > 0 and claim that
max {φt(x0, t0) + H(Dφ(x0, t0)), J A(x0, t0), −J A(x0, t0) − A} ≤ 0. (3.15)
That max {JA(x0, t0), −JA(x0, t0) − A} ≤ 0 is an immediate consequence of the definition of JA and (3.10).
Next we show that φt(x0, t0) + H(Dφ(x0, t0)) ≤ 0. (3.16)
To simplify the presentation and shorten some formulae in what follows we write
p0 := Dφ(x0, t0) and pˆ0 := Dφ(x0, t0)
|Dφ(x0, t0)| .
There are two cases.
Case one: If
Φ(1) > τ
1 + τ an,τ |p0|,
we consider the perturbed test φ = φ + η(v; p0) with η given by (3.6).
Let (x , t ) be a maximum point of maxv JA − φ in a neighborhood of (x0, t0). The use of such an approximating sequence in the theory of viscosity solutions is standard (see, for example, [1, 22]). In short, using the boundedness and continuity of η along with the fact that (x0, t0) is a strict local maximum of JA − φ, its existence follows directly from the definition of lim sup.
13

Then there exist v ∈ Sn−1 such that (x , v , t ) is a maximum point of JA − φ and along a
subsequence, which we denote the same way, → 0, there exists v0 ∈ Sn−1 such that (x , v , t ) → (x0, v0, t0) and JA(x , v , t ) → JA(x0, t0). We note that the existence of the limiting vector v0 ∈
Sn−1 follows from the compactness of Sn−1.
It follows that, for small enough and all v ∈ Sn−1 and all (x, t) in a small ball Br(x0, t0) of radius r > 0, φ (x, v, t) − φ (x , v , t ) ≥ JA(x, v, t) − JA(x , v , t ). (3.17)
Then (3.14) implies
φt(x , v , t ) + an,τ v · Dφ (x , v , t ) + 1
τ ≤ τ +1
τ Sn−1
eη(v′)−η(v )dv′. (3.18)
Using now the definition of η in (3.18) we find
φt(x , t ) + an,τ v · Dφ (x , t ) ≤ −H(Dφ(x0, t0)) + an,τ v · Dφ(x0, t0),
which, after letting → 0, gives (3.16).
Case two: If
Φ(1) ≤ τ
1 + τ an,τ |Dφ(x0, t0)|,
we observe that the previous argument cannot be repeated verbatim, since, as remarked on during the previous discussion, we do not have an exact corrector. We follow the same line of proof as above but with an additional twist to deal with this difficulty.
For δ > 0, we consider the “approximate” corrector ηδ given by
eηδ(v) = τ + 1
τ an,τ |p0|
1
1 + δ + v · pˆ0
,
and note that
Sn−1
eηδ(v)dv = τ + 1
τ an,τ |p0| Sn−1
1
1 + δ + v · pˆ0
dv
≤ τ +1
τ an,τ |p0| Sn−1
1
1 + v · pˆ0
= τ +1
τ an,τ |p0| Φ(1) ≤ 1.
(3.19)
Consider the perturbed test function φδ, (x, v, t) = φ(x, t) + ηδ(v). Let (xδ, , tδ, ) be a maximum point of maxv JA − φδ, in a neighborhood of (x0, t0). Then there exists vδ, ∈ Sn−1 such that
(xδ, , vδ, , tδ, ) is a maximum point of JA − φδ, and along a subsequence, which we denote the same
way, → 0, (xδ, , vδ, , tδ, ) → (x0, vδ,0, t0) for some vδ,0 ∈ Sn−1 and JA(xδ, , vδ, , tδ, ) → J τ
A(x0, t0). Note that the limit of the (xδ, , tδ, ) is independent of δ since (x0, t0) is a strict local maximum of J A − φ.
As before we have
φδ,
t (xδ, , tδ, ) + an,τ vδ, · Dφδ, (xδ, , tδ, ) + 1
τ ≤ τ +1
τ Sn−1
eηδ(v′)−ηδ(vδ, )dv′.
Using the definition of ηδ and (3.19), we find
φt(xδ, , tδ, ) + an,τ vδ, · Dφ(xδ, , tδ, ) + 1
τ ≤ an,τ |p0|(1 + δ + vδ, · pˆ0) = an,τ (|p0|(1 + δ) + vδ, · p0) .
14

After letting → 0, we obtain
φt(x0, t0) + an,τ vδ,0 · Dφ(x0, t0) + 1
τ ≤ an,τ (|p0|(1 + δ) + vδ,0 · p0) ,
and, hence,
φt(x0, t0) − (1 + δ)an,τ |Dφ(x0, t0)| + 1
τ ≤ 0,
from which the claim follows after taking δ → 0.
# The proof of (3.12) at t = 0: To conclude the proof of the sub-solution property, we consider the case t0 = 0. Here the first conclusion is that JA satisfies the initial condition in the following weak sense:
min {max {J A,t + H(DJ A), J A, −J A − A} , J A − (1A)?} ≤ 0 on Rn × {0}. (3.20)
Then an argument as in [2] implies that actually
J A ≤ (1A)? on Rn × {0},
and hence the claim.
To prove (3.20) we assume that, for some smooth φ, JA − φ has a strict maximum at (x0, 0). Then we argue as before, that is we consider the perturbed test function we used for the proof when t0 > 0. If the maximum points at the level are in Rn × R+ for infinitely many ’s, we argue exactly as before and obtain
max{φt(x0, t0) + H(Dφ(x0, t0)), −J A(x0, t0), −J A(x0, t0) − A} ≤ 0,
otherwise we have
J A(x0, t0) ≤ (1A)?,
and, hence, the claim.
We now proceed with the proof of part (ii).
Proof of Lemma 3.1(ii).
# The proof of (3.13) for positive times: Let φ be a smooth test function and assume that J A − φ has a strict minimum at (x0, t0) and φ(x0, t0) = J A(x0, t0).
We claim that
max {φt(x0, t0) + H(Dφ(x0, t0)), J A(x0, t0), −J A(x0, t0) − A} ≥ 0. (3.21)
If JA(x0, t0) = 0 or JA(x0, t0) = −A the claim is true. Hence we assume that −A < JA(x0, t0) < 0 and show that φt(x0, t0) + H(Dφ(x0, t0)) ≥ 0. (3.22)
Again, to simplify the presentation and shorten some formulae, we use as before the notation p0 and pˆ0 for Dφ(x0, t0) and Dφ(x0, t0)/|Dφ(x0, t0)| respectively. There are two cases to consider.
Case one: If
Φ(1) > τ
1 + τ an,τ |p0|,
we use the perturbed test φ = φ + η(v; p0) with η given by (3.6).
15

Let (x , t ) be a minimum point of minv JA − φ in a neighborhood of (x0, t0). Then there exist
v ∈ Sn−1 such that (x , v , t ) is a minimum point of JA − φ and, along a subsequence, which
we denote the same way, → 0, there exists v0 ∈ Sn−1 such that (x , v , t ) → (x0, v0, t0) and JA(x , v , t ) → JA(x0, t0). We note that, for sufficiently small, −A < JA(x , v , t ) < 0 and JA(x , v , t ) = J (x , v , t ), and, hence, the J (x , v , t )’s are bounded away from 0.
Then (1.8) implies
φt(x , v , t )+an,τ v · Dφ (x , v , t ) + 1
τ
≥
(1
τ + (1 − ρ (x , t ))+
)
Sn−1
e J (x ,v′,t )−J(x ,v ,t ) dv′.
(3.23)
Since the left hand side of (3.23) is bounded independently of , so must be the integral term
Sn−1
e(J (x ,v′,t )−J(x ,v ,t ))/ dv′.
Finally, note that
ρ (x , t ) = e J (x ,v ,t )
Sn−1
e J (x ,v′,t )−J (x ,v ,t ) dv′.
Combining the last two observations and the formula above we conclude that
li→m0 ρ (x , t ) = 0. (3.24)
Returning to (3.23), we obtain
φt(x , v , t )+an,τ v · Dφ (x , v , t ) + 1
τ ≥ 1+τ
τ Sn−1
e J (x ,v′,t )−J (x ,v ,t ) dv′ + o(1).
Using now that (x , v , t ) is a minimum point of JA − φ , we get
φt(x , v , t ) + an,τ v · Dφ (x , v , t ) + 1
τ ≥ 1+τ
τ Sn−1
eη(v′)−η(v )dv′ + o(1). (3.25)
The definition of η in (3.6) then yields
φt(x , t ) + an,τ v · Dφ (x , t ) ≥ −H(Dφ(x0, t0)) + an,τ v · Dφ(x0, t0) + o(1),
which, after letting → 0, gives the desired inequality.
Case two: If
Φ(1) ≤ τ
1 + τ an,τ |p0|,
the argument needs to be modified. We recall that this may only occur when n ≥ 4.
We consider, for μ ∈ (0, μc), with μc := (n − 1)/2, and for δ > 0, the “approximate” corrector
ημ,δ(v) = μ log
(1
1 + δ + v · pˆ0
)
. (3.26)
16

The perturbed test function is now φμ,δ, (x, v, t) := φ(x, t) + ημ,δ(v). As in the previous case, let (xμ,δ, , tμ,δ, ) be local minima of minv JA − φμ,δ, . Then there exists vμ,δ, ∈ Sn−1 such that
(xμ,δ, , vμ,δ, , tμ,δ, ) is a minimum point of JA − φμ,δ, . Further, along a subsequence, which we
denote the same way, → 0, there exists vμ,δ,0 ∈ Sn−1 such that (xμ,δ, , vμ,δ, , tμ,δ, ) converges to (x0, vμ,δ,0, t0) and JA(xμ,δ, , vμ,δ, , tμ,δ, ) → J A(x0, t0). That (xδ, , tδ, ) → (x0, t0) as → 0 is a consequence of the fact that (x0, t0) is a strict minimum of JA − φ.
The fact that (3.24) holds is proved as before. Moreover, as in (3.25), we find
φμ,δ,
t (xμ,δ, , vμ,δ, , tμ,δ, ) + an,τ vμ,δ, · Dφμ,δ, (xμ,δ, , vμ,δ, , tμ,δ, ) + 1
τ + o(1)
≥ 1+τ
τ Sn−1
eημ,δ(v′)−ημ,δ(vμ,δ, )dv′.
(3.27)
Letting → 0 in (3.27) yields
φt(x0, t0) + an,τ vμ,δ,0 · Dφ(x0, t0) + 1
τ ≥ 1+τ
τ Sn−1
eημ,δ(v′)−ημ,δ(vμ,δ,0)dv′. (3.28)
Using now the definition of ημ,δ, we rewrite (3.28) as
φt(x0, t0) + an,τ vμ,δ,0 · Dφ(x0, t0) + 1
τ ≥ 1+τ
τ (1 + δ + vμ,δ,0 · pˆ0)μ
Sn−1
dv′
(1 + δ + v′ · pˆ0)μ . (3.29)
Along a subsequence, which we denote in the same way, δ → 0, it follows that vμ,δ,0 → vμ,0,0 for some vμ,0,0 ∈ Sn−1, and
φt(x0, t0) + an,τ vμ,0,0Dφ(x0, t0) + 1
τ ≥ 1+τ
τ (1 + vμ,0,0 · pˆ0)μ
Sn−1
dv′
(1 + v′ · pˆ0)μ dv′. (3.30)
It shown in the Appendix that
μli→mμc Sn−1
dv′
(1 + v′ · pˆ0)μ dv′ = ∞,
while the left hand side of (3.30) is bounded independently of μ. It follows that vμ,0,0 → −pˆ0 as μ → μc.
Hence,
φt(x0, t0) − an,τ |Dφ(x0, t0)| + 1
τ ≥ lim inf
μ→μc
1+τ
τ (1 + vμ,0,0 · pˆ0)μ
Sn−1
dv′
(1 + v′ · pˆ0)μ ≥ 0,
and the proof is now complete in the case that t0 = 0.
# The proof of (3.13) at t = 0: The case t0 = 0 is treated very similarly to the work above; see the proof of the sub-solution property. As such, we omit it. The proof is now complete.
From the above, we now easily show that J converges uniformly to the solution of (1.9). In other words, we establish Theorem 1.2.
Proof of Theorem 1.2. By construction, JA ≤ JA. Also, since JA is a super-solution to an equation that JA is a sub-solution to, it follows that JA ≥ JA, by the comparison principle (see Crandall, Lions and Souganidis [13]). Hence, we have that JA = JA. This, in turn, implies that JA converges
locally uniformly in (x, t) and uniformly in v to Jτ
A = JA = JA, which does not depend on v and which solves (3.13).
On the other hand, it is easily seen that JA = inf{−A, J} and JA = inf{−A, J}. Letting A → ∞, we see that J converges locally uniformly to a limit J which solves (1.9).
17

4 The speed of the moving front
Propagation speed when n > 1
Proof of Proposition 1.4. When n > 3, the fact that H(p)/|p| attains its maximum follows from the observation that, for large |p|,
H (p)
|p| = 1
τ |p| − an,τ > −an,τ = lim
|p|→∞
H (p)
|p| .
This last observation also yields that cn,τ < an,τ .
SWhen n = 2, 3, H is defined by the second alternative in (3.4) and the argument above can not be used. Instead we compute the Hamiltonians in order to conclude that H(p)/|p| attains a maximum.
We first consider the case n = 2. Using (1.4), (3.4) and the fact that, as shown in the Appendix, for s ≥ 1,
Φ(s) = 1
√s2 − 1 , (4.1)
we find
H(p) = 1
τ−
√
(1 + τ
τ
)2
+2
τ |p|2. (4.2)
Next we consider the case n = 3. Using again (1.4), (3.4) and the fact that, as shown in the Appendix, for s > 1,
Φ(s) = 1
2 log
(s + 1
s−1
)
, (4.3)
we obtain
H(p) = 1
τ−
√3|p|
√τ
e 2√3τ
1+τ |p| + 1
e 2√3τ
1+τ |p| − 1
. (4.4)
In either case the claim follows after some straightforward calculations.
In view of the discussion in the introduction, to conclude the proof it suffices to show that, for each e ∈ Sn−1, L(cn,τ e) = 0.
Let pc ∈ Rn \ {0} be a maximizing vector in the definition of cn,τ , that is,
cn,τ = − H(pc)
|pc| ;
note that, in view of the isotropy of H, any rotation of pc is also a maximizing vector. Thus we may assume that e · pc = −|pc|.
Since, for q ∈ Rn, L(q) = inf
p∈Rn (q · p − H(p)) ,
it is immediate that L(cn,τ e) ≤ (−cn,τ |pc| − H(pc)) = 0.
Rewriting the definition of L, we obtain
L(cn,τ e) = cn,τ inf
p∈Rn |p|
(
e · pˆ − 1
cn,τ
H (p)
|p|
)
. (4.5)
18

If L(cn,τ e) < 0, then there exists p ∈ Rn \ {0} such that
L(cn,τ e) ≤ cn,τ |p|
(
−1 − 1
cn,τ
H (p)
|p|
)
< 0.
This implies that
−cn,τ < H(p)
|p| ,
which contradicts the definition of cn,τ . We conclude that L(cn,τ e) = 0.
Explicit formulas for the speed for n = 1 and n = 2.
Proof of Proposition 1.5. We begin with the speed when n = 2 since the proof is simple. Using Proposition 1.4 along with (4.2), find
c2,τ = − max
p∈R2
H (p)
|p| = − max
p∈R2


1
τ |p| −
√
(1 + τ
τ |p|
)2
+2
τ

.
Elementary calculus yields that the maximum is attained when |p| = (1 + τ )√2 + τ /√2, giving
c2,τ =
√2(2 + τ )
1+τ .
We now consider the case n = 1. Let α = −H(p) + τ −1. It follows from (3.4) and the fact that S0 = {−1, 1} that, for any p ∈ R \ {0},
α an,τ |p| α2 a2
1,τ |p|2 − 1 = τ
1 + τ a1,τ |p|,
and after rearranging this
α= 1+τ
2τ +
√
(1 + τ
2τ
)2
+1
τ |p|2;
that is
H(p) = 1 − τ
2τ −
√
(1 + τ
2τ
)2
+1
τ |p|2. (4.6)
Using elementary calculus, it is easy to see that c1,τ is given by the formula in Proposition 1.5.
The definition of the concave dual and elementary calculus now yields
L(q) =
{
− 1−τ
2τ + 1+τ
2τ
√1 − τ |q|2, if τ |q|2 ≤ 1,
−∞, otherwise.
If τ < 1, L(q) = 0 if and only if |q| = 2/(1 + τ ). In view of (1.13), this implies that c1,τ = 2/(1 + τ ).
If τ ≥ 1, there is no q ∈ R such that L(q) = 0. In this case, we notice that L(q) > 0 when τ |q|2 ≤ 1
and L(q) < 0 otherwise. Hence ∂{q ∈ R : L(q) < 0} = {q ∈ R : |q| = 1/√τ }. In view of (1.12), this
implies that c1,τ = 1/√τ , finishing the proof.
19

5 The limit τ → 0
Let Jτ be the solution to (1.9), recall that Jτ ≤ 0, and define
Jτ
A := max{J τ , −A}.
Consider the half-relaxed limits
zA := lim sup
τ →0
Jτ
A and zA := lim inf
τ →0 J τ
A, (5.1)
and note that, by construction, − A ≤ zA ≤ zA ≤ 0. (5.2)
We prove the following lemma.
Lemma 5.1. Let Jτ solve (1.9) and define zA and zA by (5.1). Then (i) zA is a super-solution to
max {zA,t − |DzA|2 − 1, zA, −A − zA
} ≥ 0 in Rn × R+ zA(·, 0) ≥ (1A)? on Rn. (5.3)
(ii) zA is a sub-solution to
max {zA,t − |DzA|2 − 1, zA, −A − zA
} ≤ 0 in Rn × R+, zA(·, 0) ≤ (1A)? on Rn. (5.4)
We momentarily postpone the proof of Lemma 5.1 to note that the comparison principle yields zA = zA. Letting then A → ∞ we obtain Proposition 1.6 from Lemma 5.1. The argument follows exactly as in Lemma 3.1, so we omit it.
Proof of Lemma 5.1. We prove only the claim for zA. The argument is similar for zA with similar modifications as in the proof of Lemma 3.1.
Fix any smooth test function φ and any point (x0, t0) such that zA − ψ has a strict local minimum of zero at (x0, t0).
Assume that t0 > 0. If zA(x0, t0) = 0 or −A the claim is immediate from (5.3). Hence, we need only consider the case where zA(x0, t0) ∈ (−A, 0) and aim to show that
0 ≤ φt(x0, t0) − |Dφ(x0, t0)|2 − 1.
It follows from the definition of zA that, as τ → 0, there exists a sequence (xτ , tτ ) → (x0, t0) such
that J τ
A − φ has a local minimum at (xτ , tτ ) and Jτ
A(xτ , tτ ) − φ(xτ , tτ ) → zA(x0, t0) − φ(x0, t0). In
addition, since zA(x0, t0) ∈ (−A, 0), Jτ
A(xτ , tτ ) ∈ (−A, 0) for all τ sufficiently small.
Using the definition of Hτ and that Jτ satisfies (1.9), when τ is sufficiently small, we obtain, at
(xτ , tτ ),
τ
1+τ −
Sn−1
dv
1
τ + φt(xτ , tτ ) + an,τ v · Dφ(xτ , tτ ) ≥ 0.
We point out that we need only use this form of the Hamiltonian H (3.4) since, for any fixed p,
Φ(1) > √nτ |p|/(1 + τ ) when τ is small enough.
Dividing both sides by τ and using Taylor’s theorem on the integrand, we see that, at (xτ , tτ ),
0≤ 1
1+τ −
(
1 − τ φt(xτ , tτ ) − √τ nv · Dφ(xτ , tτ ) + nτ (v · Dφ(xτ , tτ ))2 + o(τ )
)
.
20

The third term under the integral vanishes after integrating over Sn−1 as it is odd in v, while, a calculation in the Appendix, yields that
Sn−1
n(v · Dφ(xτ , tτ ))2dv = |Dφ(xτ , tτ )|2. (5.5)
Applying Taylor’s theorem again, it is now immediate that, at (xτ , tτ ),
0 ≤ (1 − τ + o(τ )) − 1 + τ φt(xτ , tτ ) − τ |Dφ(xτ , tτ )|2 + o(τ ),
which, after dividing by τ and letting τ → 0, yields
0 ≤ φt(x0, t0) − |Dφ(x0, t0)|2 − 1.
The case when t0 = 0 may be easily handled by a combination of the methods above and in Section 2.
6 The failure of positivity
The reactive-telegraph equation: proof of Theorem 1.1 when n = 1
We prove that the reactive-telegraph equation preserves positivity when n = 1. We note that the upper bound in the statement of Theorem 1.1 is clearly not sharp. Due to the lack of maximum principle and the structure of the equation (1.1), the upper and lower bounds must be obtained simultaneously. Since our main interest is in the lower bound, we do not optimize the proof of the upper bound and use 2 since it is sufficient to obtain the desired lower bound.
Proof of Theorem 1.1 when n = 1. Before beginning we note that it is enough to prove the claim with nonlinearity ρ(1 − ρ), since ρ(1 − ρ) ≤ ρ(1 − ρ)+. The key tool is the equivalence between (1.1) and (1.3) in one spatial dimension, which may also be written as (1.2). That is, let p± solve (1.2) with p+(·, 0) = p−(·, 0) = ρ0, then ρ = (p+ + p−)/2. Hence, if we show that 0 ≤ p+, p− ≤ 2, the result follows for ρ.
Fix > 0. By approximation, we may assume that p± are smooth and uniformly equal to 2√
outside a compact set and that the initial data satisfy 2√ ≤ ρ0 ≤ 1. We define
p+(x, t) = p+(x, t) + t and p−(x, t) = p−(x, t) + t,
and let
T = sup{t ∈ (0, 1/√ ) : √ < p+(x, s), p−(x, s) < 2 − √ for all s ∈ (0, t)}.
Here, T is the first time that either p+ or p− “touches” √ or 2 − √ . It is well-defined and positive due to the smoothness of ρ0 that is inherited by p+ and p−.
Our goal is to show that T = 1/√ for every > 0. Once we have shown this, the bounds on p+ and p− follow by taking → 0. To this end, we proceed by contradiction and assume that
T ∈ (0, 1/√ ).
Let x ∈ R be such that p+(x , T ) is either √ or 2 − √ . The argument follows similarly if
p−(x , T ) is either √ or 2 − √ .
Before continuing with the proof, we briefly justify the existence of x . Let R > 0 be sufficiently
large so that ρ0 ≡ 2√ on Bc
R . Since (1.2) has no space or time dependence, the finite speed of
21

propagation for kinetic equations implies that px± ≡ 0 on Bc
R +(τ )−1/2 × [0, 1/√ ]. As such, (1.2)
reduces to an ordinary differential equation in t at every point x ∈ Bc
R +(τ )−1/2 . The ODE is the
same for both p+ and p−, and, hence, the p+ and p− are equal on Bc
R +(τ )−1/2 . This, in turn,
implies that p+ = p− = ρ on Bc
R +(τ )−1/2, which, from (1.2), implies that
ρt = ρ(1 − ρ) with ρ0(x) = 2√
on Bc
R +(τ )−1/2 × [0, 1/√ ]. At this point, it is clear that p+ and p− can achieve neither the value
√ nor the value 2 − √ on Bc
R +(τ )−1/2 × [0, 1/√ ], so long as is sufficiently small. As such, if
T < 1/√ , the smoothness of p+ and p− guarantees the existence of x ∈ BR +(τ )−1/2.
First we consider the case that p+(x , T ) = √ . Using that p+ is smooth and (x , T ) is the location of a minimum of p+ on R × (0, T ], we see that, at (x , T ),
(p+)t + √1τ (p+)x ≤ 0.
From this, along with (1.2) and the definition of p+ in terms of p+, we get that, at (x , T ),
+1
τ
(ρ − p+) + ρ(1 − ρ) = (p+)t + √1τ (p+)x ≤ 0. (6.1)
The definition of T yields that √ ≤ p−(x , T ) ≤ 2 − √ . Using these bounds for p−, the facts
that p+(x , T ) = √ and T < √ , and the relationship between p± and p±, we obtain
0 ≤ ρ(x , T ) ≤ 1.
Also, since p+(x , T ) ≤ p−(x , T ), it follows that p+(x , T ) ≤ ρ(x , T ). Hence, at (x , T ),
1
τ
(ρ − p+) + ρ(1 − ρ) ≥ 0.
The combination of this inequality with the positivity of contradicts (6.1), finishing this case.
Now we consider the case that p+(x , T ) = 2 − √ . Reasoning as above, we see that, at (x , T ),
0 ≤ (p+)t + √1τ (p+)x = + 1
τ
(ρ − p+) + ρ(1 − ρ).
Moving the and p+ terms from the right hand side to the left hand side and using that p+ = p+− T
and T < 1/√ , we obtain
2
τ−
√ (2 − τ √ )
τ =1
τ
(2 − 2√ ) − ≤ 1
τ
(p+ − T ) − ≤ 1
τ ρ + ρ(1 − ρ). (6.2)
On the other hand the definition of T implies that √ ≤ p−(x , T ) ≤ 2 − √ . From this, we see that
1 − √ ≤ (p+(x , T ) − T ) + (p−(x , T ) − T )
2 = ρ(x , T ) < p+(x , T ) + p−(x , T )
2 ≤2−√ ,
or, more succinctly,
1 − √ ≤ ρ(x , T ) < 2 − √ . (6.3)
22

When is sufficiently small, depending only on τ , the two inequalities (6.2) and (6.3) are incompatible. Briefly, this may be seen by considering two cases. First, if ρ ∈ [1 − , 3/2], we obtain
2
τ−
√ (2 − τ √ )
τ ≤1
τ ρ + ρ(1 − ρ) ≤ 3
2τ + 3
2
√.
from (6.2). This is clearly a contradiction when is sufficiently small. Second, if ρ ∈ [3/2, 2 − √ ], we find from (6.2)
2
τ−
√ (2 − τ √ )
τ ≤1
τ ρ + ρ(1 − ρ) ≤ 2 − √
τ +3
2
(
1− 3
2
)
,
which is also a contradiction for is sufficiently small.
This finishes the consideration of the second case and thus finishes the proof.
The reactive-telegraph equation: proof of Theorem 1.1 when n ≥ 2
We need the following estimate:
Theorem 6.1 (Chapter 1, Theorem 4.1 [26]). Let Fwave : R2 → R be a smooth function such that Fwave(0, 0) = 0. Assume that 2s ≥ n + 2, f ∈ Hs+1(Rn), and g ∈ Hs(Rn). Then there exists T > 0, depending on Fwave, ‖f ‖Hs+1, and ‖g‖Hs, such that the initial value problem
{
utt = ∆u + Fwave(u, ut) in Rn × (0, T ),
u = f, ut = g on Rn × {0},
has a unique solution u satisfying, for some universal constant C,
‖u‖Hs+1(Rn×[0,T ]) ≤ C (‖f ‖Hs+1(Rn) + ‖g‖Hs(Rn)
).
With this in hand, we now show that the reactive-telegraph equation (1.1) does not preserve positivity.
Proof of Theorem 1.1 when n ≥ 2. It is enough to work with n = 2, since any example in this setting also works for n > 2.
Fix ρ0(x) = e−|x|2/δ for , δ ∈ (0, 1) so that ≤ δ5/4 and let ρ be the solution to
{τ ρtt + (1 − τ + 2τ ρ)ρt = ∆ρ + ρ(1 − ρ) in R2 × (0, T ),
ρ(·, 0) = ρ0 and ρt(·, 0) = 0 on R2,
(6.4)
where T > 0 gives the time interval of existence, which we obtain below.
Next we change variables to transform (6.4) to a wave equation with a right hand side which we can analyze using Theorem 6.1.
It is immediate that u(x, t) = e(1−τ)t/2τ ρ(x, t) satisfies
τ utt − ∆u = u
(
1 − (1 − τ )2
4τ 2 + 2τ e−(1−τ )t/2τ ut − e−(1−τ )t/2τ u
)
.
23

Letting v(x, t) = u(x, √τ t), we find



vtt − ∆v = v
(
1 − (1−τ )2
4τ 2 + 2√τ e−(1−τ )t/2τ vt − e−(1−τ )t/2τ v
)
on R2 × (0, T ),
v(·, 0) = ρ0 and vt(·, 0) = 1−τ
2√τ ρ0 on R2.
Using Theorem 6.1 with s = 7/2 and s = 5/2 respectively, we find T > 0 and Cτ , which is independent of T and will change from line to line below, such that
‖vt‖L∞((0,T )×R2) ≤ CSob‖v‖H7/2((0,T )×R2) ≤ Cτ ‖ρ0‖H7/2(R2) ≤ Cτ δ−5/4 (6.5)
and
‖v‖L∞((0,T )×R2) ≤ CSob‖v‖H5/2((0,T )×R2) ≤ Cτ ‖ρ0‖H5/2(R2)) ≤ Cτ δ−3/4; (6.6)
note that in the second inequality we absorbed CSob into Cτ to simplify the notation.
Since ≤ δ5/4, it follows that, for some Cτ depending only on τ ,
‖ρ0‖H7/2 ≤ Cτ .
In view of this and Theorem 6.1, it follows that T does not depend on or δ.
Duhamel’s formula for the solution to the wave equation for n = 2 gives
v(x, t) = 1
2 Bt(x)
1
√t2 − |x − y|2
[
t2 1 − τ
2√nτ ρ0(y) + tρ0(y) + tDρ0(y) · (y − x)
]
dy
+
ˆt
0
s2
Bs(x)
v
√s2 − |x − y|2
(
1 − (1 − τ )2
4τ 2 + 2√τ e−(1−τ )t/2τ vt − e−(1−τ )t/2τ v
)
dyds.
(6.7)
At this point we mention that this example does not work in one dimension because the general form of the solution is different in one dimension. In particular, the crucial term Dρ0 does not appear.
Inserting the bounds (6.5) and (6.6) in (6.7), we find
v(0, t) ≤
(
e−t2/δ
[
t |1 − τ |
2√τ + 1 − 2 t2
δ
]
+ Cτ δ−3/4t2 [
1 + δ−5/4]
)
,
which, for δ = t2, becomes
v(0, t) ≤
(
e−1t |1 − τ |
2√τ − 2e−1 + Cτ t1/2 + Cτ t−2
)
.
The claim follows by choosing first t and then small to obtain v(0, t) < 0, and, hence, that
ρ(0, t/√τ ) < 0.
A kinetic model that does not preserve positivity
In the interest of simplicity, we study here a slightly different model than (1.3) and somewhat singular initial data. Generalizations to a larger class of equations and initial data are conceptually straightforward, though with significantly more involved computations.
24

We consider solutions to a two-dimensional discrete version of (1.3) given by
{pt + a2,τ v · Dp = 1
τ (ρ − p) + p(1 − p) in R2 × S1
d × R+,
p(·, 0) = p0 on R2 × S1
d,
(6.8)
where S1
d := {e1, e2, −e1, −e2} with e1, e2 the standard basis vectors of R2 and
ρ(x, t) := 1
4


∑
v∈S1
d
p(x, v, t)

.
We have:
Proposition 6.2. Fix τ > 4. There exist a bounded p0 with
( ∑
v∈S1
d p0
)
/4 ≤ 1 and (x0, v0, t0) ∈
R2 × S1
d × R+ such that, if p solves (6.8) with initial datum p0, then p(x0, v0, t0) < 0.
The idea is to choose p0 having three patches, one moving in the −e1 direction, one moving in the e2 direction, and another moving in the e1 direction, which will eventually collide. Their sum will then be large enough to force the reaction term to be negative, which will cause the population density of the species moving in the e2 direction to become negative.
Proof of Proposition 6.2. To choose p0, we introduce the (moving) sets



X1,t = {(x1, x2) ∈ R2 : |x2| < −x1 + a2,τ t}, X2,t = {(x1, x2) ∈ R2 : |x1| < x2 + a2,τ t}, and
X3,t = {(x1, x2) ∈ R2 : |x2| < x1 + a2,τ t},
which, when t = 0, are disjoint cones with a vertex at the origin in the directions −e1, e2, and e1, respectively, while, for t > 0, they move in time in the directions e1, −e2, and −e1, respectively, with speed a2,τ .
Let p0 be so that



p0(x, e2) ≡ 0, p0(x, e1) = 4 (1 − 3
τ
) 1X1,0 (x),
p0(x, −e2) = 4 (1 − 3
τ
) 1X2,0 (x), and p0(x, −e1) = 4 (1 − 3
τ
) 1X3,0 (x).
The constant 4(1 − 3/τ ) is chosen so that p0 is in a quasi-equilibrium, that is, for any fixed e ∈ S1
d, the right hand side of (6.8) is zero at t = 0.
A simple computation shows that, in view of the choice of the sets Xi,0,
0 ≤ ρ(·, 0) ≤ 1 in R2.
To simplify the notation, we introduce
p(x, t) := e−t/τ p(x + e2a2,τ t, e2, t),
which satisfies
pt = 1
τ ρ + ρ(1 − ρ) in R2 × S1
d × R+, (6.9)
with ρ(x, t) = ρ(x + e2a2,τ t, t). For future reference note that the right hand side of (6.9) is decreasing in ρ when τ > 1 and ρ ≥ (τ + 1)/2τ .
25

Fix > 0. It is easy to see, from equation (6.8), that there exists T , depending only on , such that, for t ∈ (0, T ),
4
(
1− 3
τ
)
1X1,t(x) ≥ p(x, e1, t) ≥ 4(1 − )
(
1− 3
τ
)
1X1,t (x),
4
(
1− 3
τ
)
1X2,t (x) ≥ p0(x, −e2) ≥ 4(1 − )
(
1− 3
τ
)
1X2,t (x), and
4
(
1− 3
τ
)
1X3,t(x) ≥ p(x, −e1, t) ≥ 4(1 − )
(
1− 3
τ
)
1X3,t (x).
(6.10)
Fix δ ∈ (0, 2T a2,τ ). We point out that the domains of the indicator functions in (6.10) are initially disjoint but contain (0, −δ) when t > δ/2a2,τ . Then (6.10) yields, for all t ∈ (δ/2a2,τ , T ),
ρ((0, −δ), t) ≥ 3(1 − )
(
1− 3
τ
)
, (6.11)
and, hence, for small enough and t > δ/2a2,τ and since τ > 4,
ρ((0, −δ), t) ≥ (τ + 1)/2τ. (6.12)
Using (6.12), the lower bound in (6.11), and the fact that τ > 4 and choosing an even smaller in (6.9), we obtain, for all t ∈ (δ/2a2,τ , T ),
pt((0, −δ), t) = 1
τ ρ((0, −δ), t) + ρ((0, −δ), t)(1 − ρ((0, −δ), t))
≤ 3(1 − )
τ
(
1− 3
τ
)
+ 3(1 − )
(
1− 3
τ
)(
1 − 3(1 − )
(
1− 3
τ
))
= 3(1 − )
(
1− 3
τ
)(
1+ 1
τ − 3(1 − )
(
1− 3
τ
))
< 0.
(6.13)
By a similar, though simpler, computation, pt((0, −δ), t) = 0 when t ∈ [0, δ/2a2,τ ]. Using this, (6.13), and that p((0, −δ), 0) = 0, we see that, for all t ∈ (δ/2a2,τ , T ),
p ((a2,τ t − δ) e2, e2, t) = p((0, −δ), t) < 0,
and the proof is now complete.
A Appendix: The integrals (3.3) and (5.5)
We compute the three simple integrals used above.
The integral (3.3)
When n = 1, this computation is simple, since it reduces to a sum. On the other hand, when n > 3, the expression becomes more complicated. As such, we omit these cases. Here, for s > 1, w ∈ Sn−1, and n = 2, 3, we compute the integral
Φ(s) =
Sn−1
dv
s + v · w . (A.1)
26

When n = 2, changing variables we may assume that w = (|w|, 0). This, along with using spherical coordinates, yields the integral
Φ(s) =
S1
dv
s+v·w = 1
π
ˆπ
0
dθ
s + cos(θ) .
The substitution r = tan(θ/2) then implies
Φ(s) = 2
π
ˆ∞
0
dr
2(1 + r2) + (1 − r2) = 2
π
ˆ∞
0
dr
s + 1 + (s − 1)r2 = 1
√s2 − 1 .
When n = 3, again we change variables so that v · w = v1|w|. Then, using spherical coordinates, (A.1) becomes
Φ(s) =
S2
dv
a+v·w = 1
2
ˆπ
0
sin(θ)dθ
a + |w| cos(θ) .
The substitution r = tan(θ/2) yields
Φ(s) = 2
ˆ∞
0
r
(2 + 1) + 2sr2 + (s − 1)r4 dr = 2
s−1
ˆ∞
0
r
(r2 + 1)
(
r2 + s+1
s−1
) dr
=
ˆ∞
0
[
r
r2 + 1 − r
r2 + s+1
s−1
]
dr = 1
2 log
(s + 1
s−1
)
.
The convergence of the integral in (3.30) to infinity
We prove that the integral term in (3.30) tends to infinity as μ → μc− where μc := (n − 1)/2.
Following the work above, we have, for some normalizing factor ωn depending only on n,
Sn−1
dv
(1 + v1)μ = 1
ωn
ˆ
Sn−1
sin(θ)n−2
(1 + cos(θ))μ dθ,
and the change of variables r = tan(θ/2) yields
Sn−1
dv
(1 + v1)μ = 1
ωn
ˆ∞
0
(2r)n−2 (1+r2 )n−2
(
1 + 1−r2
1+r2
)μ
2dr
1 + r2 = 2n−1−μ
ωn
ˆ∞
0
rn−2
(1 + r2)n−1−μ dr. (A.2)
This integral is finite only when μ < (n − 1)/2. When μ = 1, the integral is finite if and only if n > 3. Hence, Φ(1) < ∞ if and only if n > 3.
The integral (5.5)
We show here that, for any vector w ∈ Sn−1,
Sn−1
n(v · w)2dv = 1.
The general result follows by scaling. Moreover, we consider only the case n > 2, since, for n = 1, 2 the formula is almost immediate.
27

Changing variables so that the term v · w = v1 gives,
Sn−1
(v · w)2dv =
Sn−1
v2
1 dv1 .
Using polar coordinates, we obtain
Sn−1
(v · w)2dv = 1
 ́π
0 sin(θ)n−2dθ
ˆπ
0
sin(θ)n−2 cos(θ)2dθ
=1
 ́π
0 sin(θ)n−2dθ
ˆπ
0
(sin(θ)n−2 − sin(θ)n)dθ = 1 −
 ́π
0 sin(θ)ndθ
 ́π
0 sin(θ)n−2dθ .
Denoting In =  ́ π
0 sin(θ)ndθ, which is sometimes referred to as the Wallis integral, we integrate by parts to obtain the recurrence relation
In = In−2 −
ˆπ
0
sin(θ)n−2 cos(θ)2dθ = In−2 − 1
n − 1 In,
which implies that In/In−2 = n−1
n , and, hence,
Sn−1
(v · w)2dv = 1 − In
In−2
=1
n.
References
[1] G. Barles. Nonlinear Neumann boundary conditions for quasilinear degenerate elliptic equations and applications. J. Differential Equations, 154(1):191–224, 1999.
[2] G. Barles, L. C. Evans, and P. E. Souganidis. Wavefront propagation for reaction-diffusion systems of PDE. Duke Math. J., 61(3):835–858, 1990.
[3] G. Barles and B. Perthame. Exit time problems in optimal control and vanishing viscosity method. SIAM J. Control Optim., 26(5):1133–1148, 1988.
[4] G. Barles and P. E. Souganidis. A remark on the asymptotic behavior of the solution of the KPP equation. C. R. Acad. Sci. Paris Se ́r. I Math., 319(7):679–684, 1994.
[5] E. Bouin and N. Caillerie. Spreading in kinetic reaction-transport equations in higher velocity dimensions. Preprint, 2017. https://arxiv.org/abs/1705.02191.
[6] E. Bouin and V. Calvez. A kinetic eikonal equation. C. R. Math. Acad. Sci. Paris, 350(56):243–248, 2012.
[7] E. Bouin, V. Calvez, E. Grenier, and G. Nadin. Large deviations for velocity-jump processes and non-local Hamilton-Jacobi equations. Preprint, 2017. https://arxiv.org/abs/1607.03676.
[8] E. Bouin, V. Calvez, and G. Nadin. Hyperbolic traveling waves driven by growth. Math. Models Methods Appl. Sci., 24(6):1165–1195, 2014.
[9] E. Bouin, V. Calvez, and G. Nadin. Propagation in a kinetic reaction-transport equation: travelling waves and accelerating fronts. Arch. Ration. Mech. Anal., 217(2):571–617, 2015.
28

[10] M. Bramson. Convergence of solutions of the Kolmogorov equation to travelling waves. Mem. Amer. Math. Soc., 44(285):iv+190, 1983.
[11] X. Cabr ́e and J.-M. Roquejoffre. The influence of fractional diffusion in Fisher-KPP equations. Comm. Math. Phys., 320(3):679–722, 2013.
[12] N. Caillerie. Large deviations of a velocity jump process with a Hamilton-Jacobi approach. C. R. Math. Acad. Sci. Paris, 355(2):170–175, 2017.
[13] M. G. Crandall, P.-L. Lions, and P. E. Souganidis. Maximal solutions and universal bounds for some partial differential equations of evolution. Arch. Rational Mech. Anal., 105(2):163–190, 1989.
[14] C. M. Cuesta, S. Hittmeir, and C. Schmeiser. Traveling waves of a kinetic transport model for the KPP-Fisher equation. SIAM J. Math. Anal., 44(6):4128–4146, 2012.
[15] L. C. Evans. The perturbed test function method for viscosity solutions of nonlinear PDE. Proc. Roy. Soc. Edinburgh Sect. A, 111(3-4):359–375, 1989.
[16] L. C. Evans and P. E. Souganidis. A PDE approach to geometric optics for certain semilinear parabolic equations. Indiana Univ. Math. J., 38(1):141–172, 1989.
[17] S. Fedotov. Wave front for a reaction-diffusion system and relativistic Hamilton-Jacobi dynamics. Phys. Rev. E (3), 59(5, part A):5040–5044, 1999.
[18] T. Hillen and H. G. Othmer. The diffusion limit of transport equations derived from velocityjump processes. SIAM J. Appl. Math., 61(3):751–775, 2000.
[19] E. E. Holmes. Are diffusion models too simple? a comparison with telegraph models of invasion. The American Naturalist, 142(5):779–795, 1993.
[20] W. Horsthemke. Spatial instabilities in reaction random walks with direction-independent kinetics. Physical Review E, 60(3):2651, 1999.
[21] M. Kac. A stochastic model related to the telegrapher’s equation. Rocky Mountain J. Math., 4:497–509, 1974. Reprinting of an article published in 1956, Papers arising from a Conference on Stochastic Differential Equations (Univ. Alberta, Edmonton, Alta., 1972).
[22] P.-L. Lions. Generalized solutions of Hamilton-Jacobi equations, volume 69 of Research Notes in Mathematics. Pitman (Advanced Publishing Program), Boston, Mass.-London, 1982.
[23] A. J. Majda and P. E. Souganidis. Large-scale front dynamics for turbulent reaction-diffusion equations with separated velocity scales. Nonlinearity, 7(1):1–30, 1994.
[24] V. M ́endez, J. Fort, and J. Farjas. Speed of wave-front solutions to hyperbolic reaction-diffusion equations. Physical Review E, 60(5):5231, 1999.
[25] V. Ortega-Cejas, J. Fort, and V. Me ́ndez. The role of the delay time in the modeling of biological range expansions. Ecology, 85(1):258–264, 2004.
[26] C. D. Sogge. Lectures on nonlinear wave equations. Monographs in Analysis, II. International Press, Boston, MA, 1995.
29

[27] A. Zlatoˇs. Sharp transition between extinction and propagation of reaction. J. Amer. Math. Soc., 19(1):251–263, 2006.
30

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:11.372Z
- **Text Length:** 64700 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
