# PDF Document: Anderson et al. - 2025 - Stochastic Reaction Networks Within Interacting Compartments with Content-Dependent Fragmentation.pdf

**File Path:** Anderson et al. - 2025 - Stochastic Reaction Networks Within Interacting Compartments with Content-Dependent Fragmentation.pdf

**Processed Date:** 2026-02-10T18:16:46.288Z

**File Size:** 495.58 KB

**Total Pages:** 23

**Extracted Pages:** 23

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3691

**Title:** Stochastic Reaction Networks Within Interacting Compartments with Content-Dependent Fragmentation

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Stochastic Reaction Networks Within Interacting Compartments
with Content-Dependent Fragmentation
David F. Anderson∗ Aidan S. Howells† Diego Rojas La Luz‡
November 14, 2025
Abstract
Stochastic reaction networks with mass-action kinetics provide a useful framework for understanding processes—biochemical and otherwise—in homogeneous environments. However, cellular reactions are often compartmentalized, either at the cell level or within cells, and hence non-homogeneous. A general framework for compartmentalized chemistry with dynamic compartments was proposed in [9], and the special case where the compartment dynamics do not depend on their contents was studied mathematically i-
n [5]. In the present paper, we investigate the case in which the rate of fragmentation of a compartment depends on the abundance of some designated species inside that compartment. The main focus of this work is on providing general conditions for (positive) recurrence and non-explosivity of the models. In particular, we demonstrate that the explosivity characterization from [5] fails in this setting and provide new sufficient conditions for non-explosivity and positive recurrence, under the assu-
mption that the underlying CRN admits a linear Lyapunov function. These results extend the theoretical foundation for modeling content-mediated compartment dynamics, with implications for systems such as cell division and intracellular transport.
1 Introduction
Chemical reaction networks (CRNs) have been studied mathematically for over fifty years [13], with applications spanning ecology [16], gene regulation [8], infection modeling [22], and many other domains, such as synthetic biology, chemical engineering, and computational theory [7, 21, 23]. Several well-established approaches exist for modeling these systems, most commonly as deterministic systems of ordinary differential equations (ODEs) or stochastic continuous-time Markov chains (CTMCs). In the-
 CTMC approach, which is the exclusive focus of this paper, the most common choice of transition rates for the Markov chain is mass-action kinetics. Mass-action kinetics is one of the earliest and most biologically motivated frameworks, especially in the case where the environment is homogeneous. A variety of other stochastic models of CRNs have been developed to address the case where the environment is not homogeneous. For example, in reaction-diffusion models, each molecule has a spatial positi-
on that evolves over time, and reactions occur only when molecules are sufficiently close, with the precise definition of ‘close’ depending on the model; see [10] or the introduction to [1]. Another approach is to replace mass-action kinetics with alternatives better suited to heterogeneous systems [18]. A further strategy is to divide the environment into compartments (e.g., patches, voxels, or cells, etc.) and restrict reactions to be within compartments [16, 15, 20]. In 2020, a variation on thi-
s idea was proposed, with [9] introducing a general framework for stochastic compartment CRN models where the compartments were themselves dynamic, allowed to merge, divide, die off, etc. An initial mathematical analysis of the framework introduced in [9] was carried out in [5], focusing on the special case where the total number of compartments evolves according to the CRN 0 ⇆ C ⇆ 2C, independently of their internal molecular contents. While mathematically tractable, this case is limited in its a-
bility to model biologically realistic phenomena such as cell division, where compartment behavior is
∗anderson@math.wisc.edu, NSF Support via DMS-2051498 †aidan.howells@polito.it, support from MUR PRIN grant number 2022XRWY7W. Corresponding author. ‡rojaslaluz@wisc.edu, partially supported by the Fulbright Program.
1
arXiv:2511.10223v1 [math.PR] 13 Nov 2025

regulated by internal species. Notably, even the second toy model in [9] features fragmentation rates that depend linearly on the count of a particular species within each compartment—a scenario not covered by the analysis in [5]. In this paper, we extend that analysis to include models in which the fragmentation rate of a compartment is directly proportional to the abundance of a designated species it contains. In [5], the behavior of compartment models was characterized across all parameter reg-
imes, including conditions for explosion, recurrence, and positive recurrence. A key result from that work is that the compartment model explodes if and only if the underlying CRN—when considered without compartmentalization—is itself explosive. In the present setting, where fragmentation rates depend on compartment contents, this equivalence no longer holds (see Example 3.11). Nevertheless, we establish new results concerning explosivity, including Theorem 3.1, which provides a mild sufficient co-
ndition for non-explosivity. Similarly, while the recurrence and positive recurrence results from [5] do not directly carry over, we prove analogous results in this new context, such as Theorem 4.1. Both Theorems 3.1 and 4.1 rely on an additional technical assumption about the CRN being compartmentalized – namely, the existence of a Lyapunov function that is linear and satisfies a standard generator bound. Linear Lyapunov functions have been studied extensively in prior work. For example, [12] int-
roduces a sufficient condition, stronger than any Lyapunov condition used in this paper, for stability of stochastic reaction networks. They provide sufficient criteria for this condition to hold in unimolecular and bimolecular networks (see Sections S3 and S4 of their supplementary material) and verify it for a range of biologically motivated examples (Sections S5–S12). Much of the material in this paper was originally developed as part of the PhD thesis of Howells [14], which is unpublished. In -
particular, the foundational framework, key definitions, and several core resultsincluding Theorem 3.1 and Corollary 3.3—first appeared in that thesis. The present paper builds on that work by expanding the analysis, introducing new examples, and proving additional results, such as those in Section 3. For instance, Example 3.11 generalizes a case that was only partially treated in the thesis for p ∈ {0, 1}.
The remainder of the paper is organized as follows. In the next section, we give an overview of stochastic chemical reaction networks with mass-action kinetics and then introduce the compartment models that are the main object of study in this paper. In section 3, we provide a sufficient condition for these compartment models to be non-explosive (Theorem 3.1), along with two examples (Examples 3.4 and 3.11) that illustrate that this condition is not necessary. In section 4, we provide a sufficient-
 condition for positive recurrence in models where compartments can both coagulate and exit (Theorem 4.1), and then show that, in at least some cases, the presence of either coagulation or exit alone is sufficient (Proposition 4.4). Our techniques have not yielded any nontrivial sufficient conditions for transience in general, but may do so for specific models (Proposition 4.7). Finally, Appendix A collects the Lyapunov function theorems used throughout the paper. A standard knowledge of continuou-
s-time Markov chains is assumed [19].
2 Mathematical Models
2.1 Stochastic Reaction Networks
A chemical reaction network, or CRN, consists of the following: A collection S of species, and a collection R of reactions ν → ν′, where ν and ν′ are linear combinations of species with coefficients taken from Z≥0. Linear combinations of species which appear in some reaction are called complexes. For a reaction ν → ν′, the complexes ν and ν′ are referred to as the source complex and product complex, respectively, of the reaction.
Example 2.1: Consider the reaction network whose species set is S = {E, S} and whose reactions are
0 E E + 2S E + 3S.
Here 0 denotes the empty linear combination. Here the set of complexes is {0, E, E + 2S, E + 3S}. △
Suppose we have a fixed CRN with species S and reactions R, and let d := |S| be the number of different species. We adopt the standard convention of fixing an ordering of the species set S, allowing us to identify each complex ν = Pd
i=1 νiSi with the vector (ν1, . . . , νd) ∈ Zd
≥0. As discussed in the introduction, one way to construct a dynamical system from a given CRN is as a CTMC using stochastic mass-action kinetics. In
2

this case, the state of the Markov chain is given by a vector in Zd
≥0. A state vector x ∈ Zd
≥0 is interpreted as the molecular count of each species, and the possible transitions are given by the reactions in the sense that when the system is in state x ∈ Zd
≥0 the only possible next states are those of the form x + ν′ − ν for
some reaction ν → ν′. In stochastic mass-action kinetics, the rate λν→ν′ (x) of the transition x 7→ x + ν′ − ν is directly proportional to the number of ways the species in the input complex ν can be chosen from the current state x:
λν→ν′ (x) = κν→ν′
d
Y
j=1
xj
νj
(1)
for some rate constant κν→ν′ ∈ R≥0, with the convention that x
0 = 1 and x
y = 0 for all 0 ≤ x < y. If I is a particular CRN (that is, a particular set of species and accompanying reactions), then we will use IK to denote the CRN with a particular choice of rate constants. Note that an alternative convention, which is the most commonly used in the stochastic reaction networks literature, is to define mass-action kinetics as λalt
ν→ν′ (x) = κalt
ν →ν ′
Qd j=1
xj !
(xj−νj)! , where the constant terms νj! are absorbed into the rate constant κalt
ν →ν ′
(and the “alt” stressing that this is an alternative formulation not used here). This formulation is equivalent to (1) but shifts the burden of combinatorial normalization into the rate constants. We adopt the formulation in (1), as it facilitates certain computations—particularly those involving Lyapunov functions—and aligns with the conventions used in prior work on compartmentalized CRNs [5].
Example 2.2: One possible assignment of rate constants in Example 2.1 would be to give the reaction 0 → S rate 1 and give E + 2S → E + 3S rate 2α for some α > 0. The usual convention is to write these rate constants over the reaction arrows as follows:
0 E E + 2S E + 3S.
1 2α
Because there are two species, the state space of the network is Z2
≥0. If the chain is in state (e, s) ∈ Z2
≥0,
then the next state must be one of (e + 1, s) or (e, s + 1). The rate of this first transition is 1, and the rate of the second is
2α e
1
s
2 = 2αe s(s − 1)
2 = αes(s − 1).
△
Suppose we are given a mass-action CRN IK with d species S and reactions R. Then one characterization of the process is as the CTMC on Zd
≥0 with infinitesimal generator A which sends a function f : Zd
≥0 → R to the function Af : Zd
≥0 → R defined by
Af (x) =
X
ν →ν ′ ∈R
λν→ν′ (x)(f (x + ν′ − ν) − f (x)), (2)
provided f is sufficiently nice [11]. This perspective of IK in terms of its generator will be useful for us because we will make frequent use of Lyapunov function techniques (see section A for the various Lyapunov conditions used in this paper).
2.2 Compartments With Content-Dependent Fragmentation
In [5], we studied stochastic CRNs within interacting compartments. In that paper, the number of compartments evolved according to a CRN of the form 0 ⇆ C ⇆ 2C, with no feedback from the contents of the compartments. Between compartment-level transitions, the contents of each compartment evolved independently according to a fixed CRN IK with d species. We begin by recalling the assumptions about compartment transitions introduced in [5], which we adopt here with one modification.
• A reaction of the form 0 → C is called a compartment inflow reaction, and its rate constant will be denoted κI . When a compartment inflow happens, the state of the new compartment is distributed according to a fixed probability measure μ on the state space Zd
≥0 of IK.
3

• A reaction of the form C → 0 is called a compartment exit reaction, and its rate constant will be denoted κE. When a compartment exits the system, we assume that the compartment and all of its contents are deleted (rather than, say, being distributed to the other compartments).
• A reaction of the form C → 2C is called a compartment fragmentation reaction, and its rate constant is denoted κF . The compartment undergoing fragmentation, called the parent compartment, is removed from the system and replaced by two daughter compartments whose states sum to that of the parent. For each possible parent state, we assume a fixed probability measure ψ that describes how its molecules are distributed across the daughters.
• A reaction of the form 2C → C is called a compartment coagulation reaction, and its rate constant will be denoted κC. When a coagulation happens, the state of the resulting compartment is assumed to be the sum of the states of the compartments that coagulated, such that total mass is again conserved.
In this paper, the only change to the above concerns the fragmentation reactions. Instead of letting each compartment fragment at rate κF , we consider a process with feedback, where the rate of fragmentation of each compartment is a function of its contents. Specifically, we will assume that S is some species in the chemistry IK, and that the rate of compartment fragmentation C → 2C for each compartment is directly proportional to the number of molecules of S in that compartment, with constant of-
 proportionality κF . A compartment model of this form is determined by the chemistry IK, rate constants for each of the four reactions 0 ⇆ C ⇆ 2C, and a probability distribution μ on the state space for IK which describes the state of new compartments after inflow reactions 0 → C. We will record this information in a diagram of the form
IK 0 C 2C μ.
κI
κE
κF SC
κC
(3)
Strictly speaking, in addition to the components described above, we also need to specify a probability distribution ψ for each possible state of the parent compartment. This distribution describes how the molecules of the parent are allocated across the daughter compartments, subject to the constraint that fragmentation C → 2C preserves total mass. However, the specific choice of ψ will only play a role in a few of our examples, so we suppress it in the notation.
Remark 2.3: The usual convention in the study of reaction networks is to write rate constants over reaction arrows, but κF SC is not a rate constant, which may seem strange. One way to think about the rate constants we have been writing is that any given compartment exits the system with rate κE, any given pair of compartments coagulates with rate κC, etc.. Viewed in this light, the new notation makes more sense, since if SC is the number of S in compartment C, then κF SC is exactly the rate at wh-
ich compartment C is fragmenting, consistent with the old notation. △
We now describe the model more precisely. Let d be the number of species in the chemistry IK, and for each x ∈ Zd
≥0, let S(x) denote the number of molecules of species S in state x. For a reaction ν → ν′ in IK, let λν→ν′ (x) denote its rate when the compartment is in state x, so that the generator A of IK is given by (2). Define the state space N := n : Zd
≥0 → Z≥0 n has finite support ,
where n(x) gives the number of compartments in internal state x. That is, a state n ∈ N records the number of compartments in each possible internal state, with only finitely many nonzero entries. For n ∈ N , define the total number of compartments by
C(n) :=
X
x∈Zd
≥0
nx, (4)
and the total number of S molecules across all compartments by
S(n) :=
X
x∈Zd
≥0
S(x) nx.
4

Here, S(x) denotes the number of molecules of species S in state x—that is, the coordinate of x corresponding to species S. For example, if S is the first species, then S(x) = x1. For each x, y ∈ Zd
≥0, let ψ(x, y) denote the probability that, when a compartment in state x fragments, one of the resulting daughter compartments is in state y, and the other is in state x−y. (Note that the parent compartment is removed during fragmentation.) For example, in [5], we used ψ(x, y) = 2−(x1+···+xd) x
y , and in Remark 4.6, we take y 7→ ψ(x, y) to be uniform over all valid daughter pairs. In general, we require that ψ(x, y) = 0 whenever yi > xi for some i, and that y 7→ ψ(x, y) is a probability distribution for each x. We now define the Markov chain N with state space N and generator L, acting on sufficiently nice functions V : N → R by
LV (n) :=
X
x∈Zd
≥0
" X
ν →ν ′
nxλν→ν′ (x) V (n − ex + ex+ν′−ν ) − V (n)
!
(internal chemistry)
+ κI μ(x) V (n + ex) − V (n) + κEnx V (n − ex) − V (n) (inflow and exit)
+ κF S(x)nx

 
X
y∈Zd
≥0
ψ(x, y) V (n − ex + ey + ex−y) − V (n)


 (fragmentation)
+ κC
nx
2 V (n − 2ex + e2x) − V (n) (coagulation (same state))
+
X
y∈Zd
≥0 y̸=x
κC
nxny
2 V (n − ex − ey + ex+y) − V (n)
#
, (coagulation (distinct states))
where we have labeled the transition types that lead to each term. As in [5] we will refer to N as the coarse-grained model associated to (3). Note that any of the rate constants may be taken to be zero. Throughout the paper, we will frequently assume the following condition:
Condition 2.4: Let λ denote the expectation under μ of the total molecular count of new compartments: λ=P
x∈Zd
≥0
μ(x) Pd
j=1 xj. Assume μ is such that λ < ∞.
This condition ensures that the expected total molecular count of a newly formed compartment is finite. We will often illustrate our results and techniques using the following one-species model:
0 S 0 C 2C μ.
κb
κd
κI
κE
κF SC
κC
(5)
The generator for this model is given by:
LV (n) =
∞
X
x=0
"
κbnx V (n − ex + ex+1) − V (n) + κdnxx V (n − ex + ex−1) − V (n)
+ κI μ(x) V (n + ex) − V (n) + κEnx V (n − ex) − V (n)
+ κF xnx
∞
X
y=0
ψ(x, y) V (n − ex + ey + ex−y) − V (n)
!
+ κC
nx
2 V (n − 2ex + e2x) − V (n)
+
∞
X
y=0 y̸=x
κC
nxny
2 V (n − ex − ey + ex+y) − V (n)
#
.
The special case of this model where κb = κd = 0, so that the number of S molecules in each compartment changes only via compartment events, was studied in [9].
5

3 Non-Explosivity
In Theorem 3.3 of [5], we showed that when the fragmentation rate does not depend on compartment contents, compartmentalizing a CRN does not affect whether or not it explodes. That is, N (the reaction network within compartments model) is explosive iff IK (the stochastic chemical model) is. We would like a similar result in the context of this paper, in which the fragmentation rate depends upon the content of a designated species. Unfortunately, things are more delicate here. Nevertheless, we are -
able to establish the following partial result:
Theorem 3.1: Let N be the coarse-grained model associated to (3), and let A denote the generator of the associated chemistry IK. Suppose there exists w ∈ Rd>0 and c, d ∈ R>0 such that Af (x) ≤ cf (x) + d for
every x ∈ Zd
≥0, where f : Zd
≥0 → R is the function defined by f (x) := w · x. Then N is not explosive.
Remark 3.2: Note that the hypothesis of Theorem 3.1, that there exists a linear function f with Af (x) ≤ cf (x) + d for some c and d, is stronger than assuming that IK is not explosive. Indeed, by Theorem A.1 the existence of a (not necessarily linear) function f with Af (x) ≤ cf (x) + d is a sufficient condition for nonexplosivity.
Proof of Theorem 3.1. Recall that Condition 2.4 assumes the expected molecular count of new compartments, denoted by λ, is finite. This assumption simplifies the analysis by ensuring that the inflow of mass into the system is controlled. Hence, in the first part of the proof we will assume that the condition holds (i.e., that λ < ∞). The second part of the proof consists of dropping that assumption and extending the result to the case λ = ∞. Let C(n) denote, as in (4), the total number of compartm-
ents when in state n, and let V (n) := C(n) +
P
x∈Zd
≥0
nx(w · x) be the total number of compartments plus a weighted sum of molecular counts across
compartments. The assumption that every coordinate of w is strictly positive means that V → ∞ in the sense of Theorem A.1. Notice that neglecting the κE and κC terms, which are negative for our choice of V , and computing the other terms exactly gets us the upper bound
LV (n) ≤
X
x∈Zd
≥0
κF S(x)nx + κI μ(x)(1 + w · x) +
X
ν →ν ′
nxλν→ν′ (x) w · (x + ν′ − ν) − w · x
=
X
x∈Zd
≥0
κF S(x)nx + κI μ(x)(1 + w · x) + nxAf (x)
≤
X
x∈Zd
≥0
κF S(x)nx + κI μ(x) + κI μ(x)(mjax wj)


X
j
xj

 + nxcf (x) + dnx
≤ (κF w−1
S + c + d)V (n) + κI + κI (mjax wj)λ .
It follows from Theorem A.1 that N is not explosive when λ < ∞. To handle the case where λ = ∞, we construct a sequence of truncated processes N (j) that exclude events after (and including) the jth inflow occurrence. We then show by induction—using the result established for the λ < ∞ case—that each N (j) is non-explosive, and use this to conclude that the full process N is also non-explosive. Let τ0 = 0 and for j = 1, 2, 3, . . . , let τj denote the jth time that a compartment-level reaction of -
the form 0 → C takes place. For j = 0, 1, 2, . . . , let N (j)(t) = N (t)It<τj . (Strictly speaking, N (j) is not a Markov chain, but it can be made one in the standard way by enlarging the state space to include the number of inflows that have occurred. We omit these details.) We claim that N (j) is not explosive, for any j. We proceed by induction on j. N (0) isn’t explosive, since it’s just a constant. Suppose that N (j−1) is not explosive. N (j)(t) = N (j−1)(t) for t < τj−1, so N (j) cannot ex-
plode before time τj−1, and N (j)(t) is constant for t ≥ τj, so it remains only to consider what happens for τj−1 ≤ t < τj. At τj−1, an inflow event takes place, yielding a value N (τj−1) which is equal to N (j−1)(τj−1−) plus the change due to the inflow event. We will denote this state by ˆn(τj−1). Next, for τj−1 ≤ t < τj, by the strong Markov property N (j)(t) has the same distribution as N (t) with, 0 ≤ t < τ1, started from ˆn(τj−1). To formally proceed, we construct a
6

coupled Markov chain N ̃ by removing all inflow transitions from N . Since inflow events do not occur in N ̃ , we have N ̃ (t) = N (t) for all 0 ≤ t < τ1, where τ1 is the time of the first inflow. Moreover, N ̃ is non-explosive by the argument already established for the λ < ∞ case. Now with the claim that each N (j) is non-explosive proven, we let t, ε > 0 be arbitrary. We will show that the probability that N explodes by time t is at most ε. Pick j large enough that τj > t with probability at l-
east 1 − ε. Then since N (j)(s) = N (s) when s < τj and since N (j) is not explosive, it follows that {N explodes by time t} ⊆ {τj < t}, and hence the probability N explodes by time t is at most ε. Since ε > 0 was arbitrary, N explodes by time t with probability zero. Since t was arbitrary, N is not explosive.
We now illustrate Theorem 3.1 by applying it to the specific model with chemistry 0 ⇆ S.
Corollary 3.3: Let N be the coarse-grained model associated with (5):
0 S 0 C 2C μ.
κb
κd
κI
κE
κF SC
κC
For any choice of parameters, N is not explosive. (We do not assume μ has finite expectation here.)
Proof. Let f (x) = x. Notice that
Af (x) = κb − κdx ≤ κb.
Therefore, N is not explosive by Theorem 3.1.
Notice that Corollary 3.3 applies even in the case where all of the growth parameters (κb, κI , and κF ) are positive and all of the decay parameters (κd, κE, and κC) are zero. It is not obvious a priori that the process should fail to explode in this case, since there is a feedback loop where the (global, across all compartments) rate of 0 → S increases with the number of compartments, and in turn the growth rate of the number of compartments increases with the total number of S. One natural ques-
tion is whether there exists a CRN IK which is not explosive but for which there is no linear Lyapunov function satisfying the hypotheses of Theorem A.1. In that case, we would not be able to apply Theorem 3.1 to the compartment model with chemistry IK. It turns out that yes, such a CRN does exist; see Example 3.4 below. Moreover, for the example given the corresponding compartment model is not explosive either. This observation suggests that the linearity assumption in Theorem 3.1 may be unnecess-
arily restrictive, and motivates the search for more general conditions under which non-explosivity can be guaranteed.
Example 3.4: Consider the compartment model
E 2E E + S E + 2S C 2C
1 1 SC (6)
△
Proposition 3.5: The internal CRN in (6) is not explosive, but no linear Lyapunov function witnesses that it is not explosive. That is, for all c1, c2 ∈ R>0, if f (e, s) = c1e + c2s and A denotes the generator of IK, then for all c3, c4 ∈ R≥0 there exists e, s ∈ Z≥0 such that Af (e, s) > c3f (e, s) + c4. Moreover, the coarse-grained model N associated to (6) is also not explosive.
Proof. To see that the internal CRN is not explosive, let g(e, s) = e + ln(s + 1). Then
Ag(e, s) = e(g(e + 1, s) − g(e, s)) + es(g(e, s + 1) − g(e, s))
= e + es ln s + 2
s + 1 = e + es ln 1 + 1
s+1
≤ e + es 1
s + 1 ≤ e + e ≤ 2g(e, s).
So the claim follows from Theorem A.1.
7

To see that g(e, s) = e+log(s+1) cannot be replaced with a linear Lyapunov function above, fix c1, c2 > 0 and c3, c4 ≥ 0, and let f (e, s) = c1e + c2s. Notice that
Af (e, s) = c1e + c2es.
If s is chosen such that h(s) := c2s2+c1s−c3c1s−c3c2s−c4 > 0 and we set e = s, then Af (e, s) > c3f (e, s)+c4. But c2 > 0, so h is a quadratic function with positive leading term and hence we can always pick such an s. Lastly, we have to show that N is not explosive. For n ∈ N , let
C(n) =
X
x∈Z2
≥0
nx, S(n) =
X
(e,s)∈Z2
≥0
sn(e,s), E(n) =
X
(e,s)∈Z2
≥0
en(e,s)
denote the total number of compartments, S molecules, and enzymes, respectively, when in state n. Consider the function V (n) = E(n) + log(S(n) + C(n) + 1). Then if L denotes the generator of N , we have
LV (n) =
X
x=(e,s)∈Z2
≥0
"
nxe E(n) + 1 − E(n) + nxes log(S(n) + 1 + C(n) + 1) − log(S(n) + C(n) + 1)
+ snx


X
y∈Z2
≥0
ψ(x, y) log(S(n) + C(n) + 1 + 1) − log(S(n) + C(n) + 1)


#
= E(n) + log(S(n) + C(n) + 2) − log(S(n) + C(n) + 1)
X
x=(e,s)∈Z2
≥0
nx(es + s)
≤ E(n) + log(S(n) + C(n) + 2) − log(S(n) + C(n) + 1)
X
x=(e,s)∈Z2
≥0
nx(E(n)s + s)
= E(n) + E(n)S(n) + S(n) log(S(n) + C(n) + 2) − log(S(n) + C(n) + 1)
≤ E(n) + E(n)S(n) + S(n) 1
S(n) + C(n) + 1
≤ E(n) + E(n) + 1
≤ 2V (n) + 1.
So the remaining claim follows, as before, from Theorem A.1.
In light of this, we conjecture that the linear Lyapunov assumption in Theorem 3.1 can be relaxed:
Conjecture 3.6: Let N be the coarse-grained model associated to (3). If the chemistry IK is not explosive, then N is not explosive.
A closer look at the previous example sheds some light on the obstructions to proving Conjecture 3.6. Specifically, let N be the coarse-grained compartment model associated with Example 3.4, and let IK denote its underlying chemistry. As in the proof of Proposition 3.5, let E(n) and S(n) denote the total numbers of enzyme and substrate molecules across all compartments when the system is in state n ∈ N . Now compare the total rate of the reaction E → 2E across all compartments in N with the rate o-
f the same reaction in the uncompartmentalized model IK when that model is in state (E(n), S(n)). These two rates coincide (both are equal to E(n)). By contrast, if we compare the total rate of E + S → E + 2S in N with the rate of this reaction in IK under the same substitution, the rates are no longer identical; however, the total rate in N is still bounded above by S(n)E(n), which is the corresponding rate in IK. These comparisons illustrate a general principle that, while implicit in the Lyapun-
ov-function arguments throughout this paper and in [5], is worth stating explicitly:
Observation 3.7: Let N be any coarse-grained compartment model with associated chemistry IK. If a reaction in IK has at least one species in its source complex, then the total rate of that reaction across all compartments in N is bounded above by the rate that reaction would have in the non-compartmental model evaluated at the state given by the total species counts of N . If the source complex is unimolecular, equality
8

holds. For inflow reactions (those with an empty source complex), however, the situation is reversed: the inflow rate in IK is a constant, whereas in N it is that constant multiplied by the number of compartments.1
Inflow reactions therefore accelerate as the number of compartments increases, whereas more complex reactions proceed fastest when all reactants are concentrated within a single compartment. In the setting of this paper, where the rate of compartment formation grows with the abundance of a species S, such inflows can participate in a feedback loop: an increase in S leads to more compartments, which in turn amplifies the inflow (either directly through 0 → S or indirectly through inflow of another -
species that promotes S). No such loop can occur in the absence of inflow reactions. In light of this, the most challenging case of Conjecture 3.6 appears to be when inflow reactions are present. Replacing the reaction E → 2E in Proposition 3.5 with 0 → E would provide stronger evidence for the conjecture, but we have not been able to establish that result.
Open Problem 3.8: Is the compartment model
0 E E + S E + 2S C 2C
1 1 SC
1 (7)
explosive?
If Conjecture 3.6 holds, then the compartment model in (7) should be non-explosive. One possible approach to proving this is through a projection argument. Specifically, consider the chemical reaction network
2X X X + E E + S E + 2S S S + X
1 1 1 1 (8)
which can be viewed as a projection of the compartment model above onto a single, aggregate state space. The relationship between the CRN given by (8) and the compartment model given by (7) is described by the following proposition.2
Proposition 3.9: Let N denote the compartment model in (7), and let N be its state space. For n ∈ N , define
C(n) =
X
x∈Z2
≥0
nx
S(n) =
X
(e,s)∈Z2
≥0
sn(e,s)
E(n) =
X
(e,s)∈Z2
≥0
en(e,s).
These represent, respectively, the total numbers of compartments, substrate molecules, and enzymes when the system is in state n. The compartment model (7) and the CRN (8) can be constructed on a common probability space such that the process (C(N ), E(N ), S(N )) is componentwise stochastically dominated by the process (X, E, S). In particular, if the CRN is not explosive, then the compartment model is not explosive.
Proof. Notice that the rate of reducing X by one is exactly 1
2 X(X − 1), and the rate that C(N ) is reduced
by one is exactly 1
2 C(N )(C(N ) − 1). Similarly, the rate at which E is increased by one is X, while the rate at which E(N ) is increased by one is C(N ); the rate at which X is increased by one is S, and the rate at which C(N ) is increased by one is S(N ). The only remaining transition affecting (X, E, S) (respectively, (C(N ), E(N ), S(N ))) is the one in which S (respectively, S(N )) increases by one. The rate of this transition
1In some sense, this is a modeling choice—we could instead have assumed the total inflow rate across compartments remains constant. Our convention follows [9], where reaction propensities take the form κg(x)n(x) with n(x) denoting the number of compartments in state x. If Conjecture 3.6 were to fail only in the presence of inflow reactions, that outcome would motivate reconsidering this particular modeling assumption. 2As we will see momentarily, in some sense X corresponds to the total number of -
compartments, and E and S correspond to the total number of E and S across all compartments. We use X instead of C to reduce the risk that the CRN is mistaken for some sort of compartment model.
9

in (X, E, S) is exactly E · S, whereas in the compartment model it is bounded above by E(N ) · S(N ) (see Observation 3.7). From this, we conclude that if (C(N ), E(N ), S(N )) ≤ (X, E, S) termwise, then the exponential rate of the reaction increasing E (respectively, increasing S) in the CRN is at least as large as that of the corresponding transition(s) in the compartment model. By contrast, while the reaction S → S + X increasing X is at least as fast as the corresponding fragmentation transit-
ions increasing C(N ), it may also happen that the reaction 2X → X is faster than the corresponding coagulation transition in the compartment model. However, since X can only decrease by one and when X = C(N ) both are decreasing at the same exponential rate, this does not affect the ordering. Suppose now that (C(N ), E(N ), S(N )) ≤ (X, E, S) termwise at time zero. If we couple N and (X, E, S) so that whenever a transition in N that is no slower than its corresponding transition in (X, E, S) fire-
s, the corresponding transition in (X, E, S) fires as well, then the inequality (C(N ), E(N ), S(N )) ≤ (X, E, S) will hold for all time. Such a coupling can be constructed by a straightforward modification of the split coupling (introduced for CRNs in [3] and for compartment models in [6]).
In light of this, as well as the fact that as a CRN rather than a compartment model there are more techniques for proving (non)explosivity, we are led to consider the following
Open Problem 3.10: Is the CRN
2X X X + E E + S E + 2S S S + X
11 1 1
explosive when modeled with stochastic mass-action kinetics?
We are not able to resolve this second problem either. We present it here in the hope that as relatively simple question about a relatively simple CRN it will be of wider interest and may prove more tractable, while also (as discussed above) potentially shedding light on the previous problem.
3.1 Explosive Chemistry
It is natural to also ask about the converse of Conjecture 3.6: if I is explosive, must the associated compartment model N also be explosive? The answer is no, as the following example demonstrates.
Example 3.11: Consider the following model
0 S E + 2S E + 3S C 2C
1 2α SC (9)
For p ∈ (0, 1), let ψp : Z2
≥0 × Z2
≥0 → [0, 1] be any function with the following properties:
(i) ψp(x, y) = 0 if yi > xi for some i.
(ii) y 7→ ψp(x, y) is a probability measure for each x ∈ Z2
≥0.
(iii) For each e ≥ 2, we have r(e) < 1, where
r(e) := sup
s
"s X
t=0
ψp((e, s), (e, t)) +
s
X
t=0
ψp((e, s), (0, t))
#
is the supremum of the probability that, after a compartment with e enzymes undergoes a fragmentation, all enzymes remain in the same compartment.
(iv) For each s ∈ Z≥0, the map t 7→ ψp((1, s), (1, t)) + ψp((1, s), (0, s − t)) is the probability mass function of a binomial random variable with parameters s and p. △
In other words, ψp is a distribution for daughter compartments after fragmentation with the property that enzymes disperse with positive probability, and once there is one enzyme left the remaining S stay with that enzyme independently with probability p. It turns out that when the model defined above is given the fragmentation distribution ψp, whether it explodes depends on both p and α, even though the underlying chemistry is explosive for every α > 0. In particular, the chemistry explodes when -
started in any state with at least one enzyme, and yet the compartment model is not explosive for certain choices of p and α even when there are compartments with at least one enzyme for all time.
10

Proposition 3.12: Let N be the coarse-grained model associated with (9), equipped with fragmentation distribution ψp for p ∈ (0, 1) and α > 0. Then N is explosive if p > e−α and non-explosive if p < e−α.
Proof. For n ∈ N , let
C(n) =
X
x∈Z2
≥0
nx
S(n) =
X
(e,s)∈Z≥1 ×Z≥0
sn(e,s)
Sb(n) =
X
s∈Z≥0
sn(0,s)
denote the total number of compartments, the total number of S which are in the same compartment as at least one enzyme, and the total number of S whose compartment has zero enzymes, respectively, when in state n. Notice that in general, the processes S(N ), Sb(N ), and C(N ) are not Markovian. However, in the special case where N starts with exactly one enzyme (and hence has exactly one enzyme for all time), the process S(N ) (but still neither Sb(N ) nor C(N )) will be a Markov chain. Indeed, S(-
N ) will change for three reasons: an inflow 0 → S happens in the compartment with the enzyme, the reaction E + 2S → E + 3S fires, or the compartment with the enzyme splits. The rates of these reactions and the value of S(N ) after each depend only on S(N ), so S(N ) is a Markov chain. Our approach will be to work with this simpler chain to the extent possible. Specifically, our strategy is as follows. First, we will use a Lyapunov function to show that the Markov chain S(N ) is explosive when p >-
 e−α. From this we can conclude that N is explosive in this parameter regime. Next, we will use another Lyapunov function to show that S(N ) is positive recurrent when N is started with one enzyme and p < e−α. Because a projection of an explosive Markov chain can be positive recurrent, showing S(N ) is positive recurrent does not directly imply any of the desired results about N , but it will nevertheless be useful. Indeed, we will use the calculations from this step to show in the next step that -
when p < e−α, N does not explode when started with one enzyme. The final step will be to show nonexplosivity of N for general starting states using an inductive argument.
Step 1 (Explosivity for p > e−α). In this step we establish that when the fragmentation parameter p exceeds e−α, the Markov chain S(N ) (corresponding to the total number of S molecules in the one–enzyme case) satisfies the hypotheses of Corollary A.5. We construct a Lyapunov function f (y) = 1/ ln(y + 2) and show that Af (x) ≤ −1 for all sufficiently large x, which implies that S(N ) is explosive. Since an explosion of S(N ) entails infinitely many jumps of N in finite time, N itself must also be-
 explosive in this parameter regime.
To that end, fix p > e−α and choose δ satisfying p > δ > e−α. Let B1, B2, . . . be i.i.d. Bernoulli(p)
random variables, so that Yx := Px
k=1 Bk is binomial with parameters (x, p). We begin by bounding P(f (Yx) ≥ f (δx)). Note that
P(f (Yx) ≥ f (δx)) = P
x
X
k=1
Bk ≤ δx
!
=P
x
X
k=1
(Bk − p) ≤ x(δ − p)
!
,
where the first equality is because f is a decreasing function. The Bi are independent with mean p and take values in [0, 1], so by Hoeffding’s inequality,
P
x
X
k=1
(Bk − p) ≤ x(δ − p)
!
≤ exp(−2x(δ − p)2).
But then
E[f (Yx)] = E[f (Yx)1{f(Yx)≥f(δx)}] + E[f (Yx)1{f(Yx)<f(δx)}]
≤ P(f (Yx) ≥ f (δx)) + f (δx) P(f (Yx) < f (δx))
≤ exp(−2x(δ − p)2) + f (δx). (10)
11

Now let A denote the generator of the Markov chain S(N ) under the assumption that N is started in a state with one enzyme total across all compartments. Then for x = 1, 2, 3, . . . ,
Af (x) = (αx(x − 1) + 1)(f (x + 1) − f (x)) + x
x
X
y=0
x
y py(1 − p)x−y(f (y) − f (x))
= (αx(x − 1) + 1) ln(x + 2) − ln(x + 3)
ln(x + 2) ln(x + 3) + xE[f (Yx)] − x
ln(x + 2)
≤ αx(x − 1) ln(x + 2) − ln(x + 3)
ln(x + 2) ln(x + 3) + xE[f (Yx)] − x
ln(x + 2)
≤ −αx(x − 1)
(x + 3) ln(x + 2) ln(x + 3) + x exp(−2x(δ − p)2) + x
ln(δx + 2) − x
ln(x + 2)
=x
ln(x + 2) ln(x)
−α(x − 1) ln(x)
(x + 3) ln(x + 3) + ln(x + 2) ln(x) exp(−2x(δ − p)2) + ln(x) ln(x + 2)
ln(δx + 2) − ln(x) (11)
where the second inequality comes from (10) plus the fact that log(x + 2) − log(x + 3) ≤ −(x + 3)−1. But one can straightforwardly compute the following limits:
xli→m∞
−α(x − 1) ln(x)
(x + 3) ln(x + 3) = −α
xli→m∞ ln(x + 2) ln(x) exp(−2x(δ − p)2) = 0
xli→m∞
ln(x) ln(x + 2)
ln(δx + 2) − ln(x) = ln(1/δ).
It follows that the expression inside the brackets in (11) is converging to the (negative, in light of our assumption that 1/δ < eα) quantity −α + ln(1/δ). In particular, the expression inside the brackets is uniformly negative for sufficiently large x; to be concrete, we can for instance conclude that
−α(x − 1) ln(x)
(x + 3) ln(x + 3) + ln(x + 2) ln(x) exp(−2x(δ − p)2) + ln(x) ln(x + 2)
ln(δx + 2) − ln(x) ≤ −α + ln(1/δ)
2,
and hence
Af (x) ≤ x
ln(x + 2) ln(x)
−α + ln(1/δ)
2,
for all large enough x. Since the quantity outside the brackets is converging to ∞ as x → ∞ and the quantity inside is negative and does not depend on x, we have Af (x) ≤ −1 for all large enough x. But the Markov chain S(N ) is irreducible and f (y) → 0 as y → ∞, so it follows that the hypotheses of Corollary A.5 are satisfied: one can take K ⊂ Z≥0 to be any non-empty finite set containing all points x such that Af (x) > −1, z any point in K, and y sufficiently large. Hence S(N ) is explosive. But-
 S(N ) is a projection of N , so N is also explosive.
Step 2 (Positive Recurrence of S(N ) for p < e−α with one enzyme). We now turn to the case p < e−α and show that, when N is started with a single enzyme, the projected process S(N ) is positive recurrent. The approach mirrors Step 1 but with a different Lyapunov function: we take g(x) = xλ for a carefully chosen λ ∈ (0, 1) satisfying αλ + pλ − 1 < 0. Intuitively, this function penalizes large values of S(N ) while keeping the algebra manageable, allowing us to prove that the drift Ag(x) is eventua-
lly negative and thus that S(N ) cannot diverge. To verify that such a λ exists, note that for any λ ∈ (0, 1),
pλ = eλ log p < 1 + λ log p + 1
2 λ2(log p)2,
and therefore αλ + pλ − 1 < λ α − log(1/p) + 1
2 λ(log p)2 .
12

Since α < log(1/p) by assumption, the right-hand side is negative for sufficiently small λ > 0, so such a λ always exists. Now, let g(x) = xλ. Note that g is concave and hence E[g(Yx)] ≤ g(E[Yx]), and because g′′(x) < 0 for x > 0, the mean value theorem implies
(x + 1)λ − xλ ≤ λxλ−1.
Applying these bounds yields, for x = 1, 2, 3, . . . ,
Ag(x) = (αx(x − 1) + 1)(g(x + 1) − g(x)) + x
x
X
y=0
x
y py(1 − p)x−y(g(y) − g(x))
= (αx(x − 1) + 1)((x + 1)λ − xλ) + xE[g(Yx)] − x1+λ
≤ (αx2 + 1)((x + 1)λ − xλ) + xE[g(Yx)] − x1+λ
≤ (αx2 + 1)λxλ−1 + x(xp)λ − x1+λ
= x1+λ(αλ + pλ − 1) + λxλ−1. (12)
However, λ was chosen precisely so that the coefficient of the leading term of this bound, αλ + pλ − 1, would be negative. It follows that Ag(x) < −1 for all sufficiently large x, and hence S(N ) is positive recurrent.
Step 3 (Nonexplosivity for p < e−α with one enzyme). We now extend the argument to show that when p < e−α, the full compartment model N is nonexplosive even when started with one enzyme. The idea is to combine the Lyapunov function for S(N ) from Step 2 with additional control over the total substrate and compartment counts. To this end, we introduce a composite Lyapunov function that penalizes growth in both the enzyme-containing and enzyme-free compartments, and we verify that its generator rema-
ins uniformly bounded above. Specifically, let λ ∈ (0, 1) be such that αλ + pλ − 1 < 0 (such a λ exist by the argument given in Step 2) and define g(x) = xλ as before. Consider the function
V (n) = g(S(n)) + log(Sb(n) + C(n)),
and let L denote the generator of N . Using the bounds on Ag derived in Step 2, together with the following observations: (i) because Sb(n) + S(n) is unchanged by fragmentation, the most that Sb(n) can increase by, after the compartment with the enzyme splits, is S(n); (ii) for any fixed S(n) ≥ 0, the function
x 7→ log(S(n) + 1 + x) − log(x)
is strictly decreasing for x > 0 (since its derivative 1
S(n)+1+x − 1
x = − S(n)+1
x(S(n)+1+x) is negative), and hence it
is maximized at the minimal admissible value of x; and (iii) Sb(n) + C(n) ≥ 1, we obtain that for all n with exactly one enzyme and S(n) ≥ 1,
LV (n) = (αS(n)(S(n) − 1) + 1)(g(S(n) + 1) − g(S(n))) + S(n)
S(n)
X
y=0
S(n)
y py(1 − p)S(n)−y(g(y) − g(S(n)))
+ S(n)
S(n)
X
y=0
S(n)
y py(1 − p)S(n)−y(log(Sb(n) + S(n) − y + C(n) + 1) − log(Sb(n) + C(n)))
+ (C(n) − 1) log(Sb(n) + 1 + C(n)) − log(Sb(n) + C(n))
+
Sb(n) log(Sb(n) + C(n) + 1) − log(Sb(n) + C(n))
≤ (S(n))1+λ(α + pλ − 1) + λ(S(n))λ−1 + S(n) log(Sb(n) + S(n) + C(n) + 1) − log(Sb(n) + C(n))
+ C(n) − 1
Sb(n) + C(n) + Sb(n)
Sb(n) + C(n)
≤ (S(n))1+λ(α + pλ − 1) + λ(S(n))λ−1 + S(n) log(S(n) + 2) + C(n) − 1
Sb(n) + C(n) + Sb(n)
Sb(n) + C(n)
≤ (S(n))1+λ(α + pλ − 1) + λ(S(n))λ−1 + S(n) log(S(n) + 2) + 2.
13

Since λ > 0, we know that x1+λ grows faster than x log(x + 2). So the coefficient of the leading order term is α + pλ − 1 just as in step 2, and this coefficient is negative just as in step 2. Moreover, this upper bound depends only on S(n), not Sb(n) or C(n), and so we conclude that LV (n) ≤ −1 for all n with exactly one enzyme such that S(n) is bigger than some threshold. For each of the finitely many remaining nonzero values of S(n), the upper bound above is still uniform in Sb(n) and C(n). Mo-
reover, the only reason that our argument doesn’t work for S(n) = 0 is the fact that g′(0) is not defined, but that case is easily handled directly to get, for instance,
LV (n) ≤ 1(g(1) − g(0)) + C(n) − 1
Sb(n) + C(n) + Sb(n)
Sb(n) + C(n) ≤ 3.
So all told we have a finite number of upper bounds collectively covering all cases, and we conclude that LV (n) is bounded above uniformly in n over the set of states with exactly one enzyme. Since the set of such states is closed (in the Markov chain sense that the process N cannot leave the set), we have enough to conclude by Theorem A.1 that N is not explosive when started with a single enzyme.
Step 4 (Nonexplosivity for p < e−α in general). Finally, we extend the argument to general initial conditions. Our goal is to show that N is not explosive when started with any number of enzymes. We begin by handling the trivial case where all compartments contain zero enzymes, and then proceed by induction on the total enzyme count. The inductive step relies on two key observations: (i) compartments evolve independently, so a sum of nonexplosive subsystems remains nonexplosive, and (ii) with prob-
ability one, a dispersion event eventually separates enzymes into multiple compartments, after which the process can be written as a sum of lower-enzyme subsystems. We begin with the base case, that initial number of enzymes is at most one. The case where the initial number of enzymes is precisely one is exactly the content of Step 3, so for the base case it just remains to argue that N does not explode when started with zero enzymes. However, proving that N does not explode when all compartments -
have zero enzymes is straightforward. Indeed, note that in this case N is equivalent to (5) with coefficients κb = κF = 1, κd = κI = κE = κC = 0, and so by Corollary 3.3 we see that it is not explosive. Now fix p < e−α and k > 1 with the property that for i = 0, 1, . . . , k − 1, the system N is not explosive when started with i enzymes. We will show that N does not explode when started with k enzymes. First, notice that the model given by (9) has the property that separate compartments do not int-
eract in any manner. It follows that if N1 and N2 are independent copies of this model with initial states n1, n2 respectively, then N1 + N2 is also an instance of (9) with initial state n1 + n2. In particular, if the initial state N (0) has the property that not all enzymes are in the same compartment, then N can be expressed as the sum of two Markov chains which are both not explosive by the induction hypothesis, and hence N is not explosive. Moreover, this means that if a dispersion (which we h-
ere define as a fragmentation after which not all enzymes remain in the same compartment) happens, there cannot be an explosion after. Going forward, then, we will assume that all k enzymes are in the same compartment, and try to prove that an explosion cannot happen without a dispersion occurring along the way. Notice that we can use the assumption that all k enzymes are in the same compartment to separate the transitions of N into four types:
(i) A new substrate S is produced in the compartment with the enzymes,
(ii) A new substrate S is produced in the other compartments,
(iii) The compartment with the enzymes fragments, or
(iv) There is a fragmentation from the other compartments
Note that transitions of type (i) and (iii) are the only ones that affect S(N ). We will first prove that if the process N explodes, then infinitely many transitions of type (i) or (iii) will happen. Then, we will prove that in either case, infinitely many transitions of type (iii) will happen, and from there that a dispersion happens, a contradiction. Consider the event that N explodes and nevertheless only finitely many transitions (i) and (iii) happen. Suppose towards a contradiction that this -
event has positive probability. It is the union over m = 0, 1, 2, . . .
14

of the total number of transitions of type (i) and (iii) that happen before an explosion of N ; this union is countable so we can fix a particular m such that the event Em, that exactly m transitions total of type (i) and (iii) happen and then N explodes, has positive probability. Let τ be the time of the m-th transition of type (i) or (iii). Then on the event Em the process Nb consisting of all compartments other than the one with all the enzymes is a Markov chain from time τ onward. Moreover, w-
e know the Markov chain Nb does not explode, and on the event Em the compartment with all the enzymes does not undergo any transitions after time τ . Therefore, N does not actually explode on the event Em, which is a contradiction. So now we know that if N explodes with positive probability, then there must a.s. be infinitely many transitions of type (i) or (iii). Suppose towards a contradiction that with positive probability, N explodes and infinitely many transitions of type (iii) happen. Then, -
the probability that the enzymes disperse in each given fragmentation of type (iii) is bounded below by 1−r(k), which is positive, so by the Borel–Cantelli lemma, dispersion occurs almost surely. But as discussed, if we restart N after the time of the first dispersion then it can be expressed as the sum of two non-explosive Markov chains, so we again get a contradiction. So now finally, suppose towards a contradiction simply that N explodes with positive probability. From the above, we know that i-
nfinitely many transitions of type (i) occur, and only finitely many transitions of type (iii) do. To get a contradiction from here, we will compare the rate of production of the substrate S to the rate of production of new compartments, and we will use the Borel–Cantelli lemma to say that, actually, infinitely many transitions of type (iii) must happen. Note that the rate of gaining a substrate S (transitions of type (i)) when in state n in the projected process S(N ) is given by
αS(n)(S(n) − 1)k + 1,
and that the rate of fragmentation for S(N ) (transitions of type (iii)) when in state n is simply
S(n).
Thus, the probability of transitions of type (iii) happening when in state n is:
S(n)
αS(n)(S(n) − 1)k + 1 + S(n) = Θ 1
S(n) .
By our previous two contradiction arguments, on the event where N explodes there must be finitely many transitions of type (iii) and infinitely many of type (i). But transitions of type (iii) are the only ones which decrease S(N ) and transitions of type (i) are the only ones which increase it, and moreover they increase it by one. Therefore, on the event that N explodes, S(N ) must take on every integer value between its starting value and infinity. But the harmonic series diverges, so by the Bor-
el-Cantelli lemma we conclude that there will, with probability one, be infinitely many transitions of type (iii), a contradiction. Therefore, the original model N is not explosive when started with k enzymes. The claimed result now follows by induction.
Remark 3.13: By replacing the Lyapunov function sλ with the Lyapunov function
g(s) =
(
ln(s) s ≥ p
s
p − 1 + ln(p) s < p ,
in step 2 above one can show, not just that S(N ) is positive recurrent when N is started with one enzyme and α < log(1/p), but also that S(N ) is positive recurrent for such starting states when α = log(1/p). Moreover, this alternative proof has the benefit that one doesn’t have to worry about picking λ based on α and p. So one might be tempted to use the Lyapunov function V (n) = g(S(n)) + log(Sb(n) + C(n)), or more generally some Lyapunov function of the form V (n) = g(S(n)) + h(Sb(n), C(n)), i-
n step 3 of the proof above to prove nonexplosivity when α ≤ log(1/p). However, no such Lyapunov function can work, even when α < log(1/p), much less when equality holds. Indeed, one can check that the negative term in (12) which was previously on the order of s1+λ is now on the order of s, whereas the other term arising from the fragmentation will be of the form S(n)E[h(Sb(n) + S(n) − Y, C(n) + 1) − h(Sb(n), C(n))]. Since h must be growing in its first
15

argument to be a Lyapunov function for nonexplosivity (which requires finite sublevel sets), one sees that the positive term is superlinear in S(n) and thus swamps both the negative term and the desired upper bound of (a constant times) V (n). So, while we are inclined to believe the following conjecture that N is not explosive even when α = log(1/p), it does not seem likely that this conjecture will be proven by a trivial modification of the proof above. △
Conjecture 3.14: Suppose N is as in the proposition above, with parameters α = log(1/p). Then N is not explosive.
4 Positive Recurrence
In the previous sections we characterized the possible behaviors of the process with respect to explosivity. In particular, we established general conditions ensuring that the system is non-explosive, and in certain specific models we identified parameter regimes leading to transience. We now turn to the complementary question: when is the process positive recurrent? As before, our analysis relies on the existence of a linear Lyapunov function for IK. We have the following theorem.
Theorem 4.1: Let N be the coarse-grained model associated to (3):
IK 0 C 2C μ.
κI
κE
κF SC
κC
Let A denote the generator of the associated chemistry IK. Suppose there exists a linear function f : Zd
≥0 → R of the form f (x) = w · x for some w ∈ Rd>0, such that supx Af (x) < ∞, and that condition 2.4 holds; that is, λ < ∞. If κC > 0 and κE > 0, then the state with no compartments is positive recurrent for N , all states reachable from it are also positive recurrent for N , and all other states are transient with finite expected time to reach the set of positive recurrent states.
Remark 4.2: If f were a Lyapunov function witnessing (via Corollary A.3) that IK was positive recurrent, we would have Af (x) ≤ −1 outside some finite set. Similarly, if f were witnessing that IK was recurrent, we would have Af (x) ≤ 0 outside some finite set. Either of these conditions would imply the assumption supx Af (x) < ∞ from the theorem. The assumption supx Af (x) < ∞ is in fact strictly weaker than having a Lyapunov function for recurrence, as we will see in Corollary 4.3, when we apply -
it with the transient chemistry 0 → S. However, the assumption supx Af (x) < ∞ is stronger than having a Lyapunov function for non-explosivity. Indeed, if supx Af (x) < ∞ and f → ∞, then a suitable shift g of f will satisfy Ag(x) ≤ g(x). △
Proof of Theorem 4.1. Let V (n) = C(n) + α P
x∈Zd
≥0
nx(w · x), for some constant α > 0 to be chosen
later. The assumption that every coordinate of w is strictly positive means that V → ∞ in the sense of Corollary A.3. Our goal is to show that LV (n) ≤ −1 outside a finite set of states, which will then allow us to conclude positive recurrence via Corollary A.3.
16

We next compute LV (n), the generator of V , and bound its growth term by term.
LV (n) =
X
x∈Zd
≥0
κF S(x)nx + κI μ(x)(1 + αw · x) + α
X
ν →ν ′
nxλν→ν′ (x) w · (x + ν′ − ν) − w · x
− κEnx(1 + αw · x) − κC
nx
2−
X
y∈Zd
≥0 y̸=x
κC
nxny 2
=
X
x∈Zd
≥0
κF S(x)nx − ακEnx(w · x) + κI μ(x)(1 + αw · x) + αnxAf (x)
− κC
C (n)
2 − κEC(n)
≤ −κC
C (n)
2 + α sup
x
Af (x) − κE C(n) + (κF w−1
S − ακE)
X
x∈Zd
nx(w · x)
+ κI + ακI (mjax wj)λ.
Pick α large enough that ακE > κF w−1
S (here we used κE > 0). Then we claim this upper bound is at
most −1 outside a finite set of n. Indeed, the term (κF w−1
S − ακE) P
x∈Zd nx(w · x) is non-positive by the choice of α, so LV (n) is at most a polynomial in C(n) (with no dependence on n other than through C(n)) with negative leading term (here we used κC > 0). So for large enough values of C(n) we have LV (n) ≤ −1. For each individual value of C(n) less than this threshold, the only term that varies as n varies is (κF w−1
S − ακE) P
x∈Zd nx(w · x) , and this approaches −∞ as P
x∈Zd nx(w · x) → ∞. It follows that LV (n) ≤ −1 outside some finite set, as claimed. Therefore, by Corollary A.3 any state in a closed, irreducible component of N is positive recurrent, and from any given state the expected time for the process to enter the union of the closed irreducible components is finite. So to complete the proof it remains only to point out that the state with no compartments is a member of a (indeed, the) closed irreducible component of N ; this fact follows from the fact t-
hat κE > 0 and hence the state with no compartments is reachable from every state in N .
We now illustrate this theorem by applying it to the specific model with chemistry 0 ⇆ S. Note that the result applies even when IK is transient.
Corollary 4.3: Let N be the coarse-grained model associated to (5):
0 S 0 C 2C μ.
κb
κd
κI
κE
κF SC
κC
Assume that condition 2.4 holds, i.e., λ < ∞. If both κC > 0 and κE > 0, then the state (0, 0, 0, . . . ) with no compartments is positive recurrent. Moreover,
• If κI > 0 and either κb > 0 or μ ̸= δ0, then all states are reachable from (0, 0, 0, . . . ) and hence positive recurrent.
• If κI > 0 and both κb = 0 and μ = δ0, then all states with zero S are positive recurrent and all other states are transient. These other states all have finite expected time to be absorbed by the collection of zero-S states.
• If κI = 0, then all states with a positive number of compartments are transient, but are absorbed by the state with zero compartments in finite expected time.
Proof. Let f (x) = x, and notice that Af (x) ≤ κb, where A is as in the statement of Theorem 4.1. Therefore, the state with no compartments is positive recurrent for N by Theorem 4.1. The “moreover” part of this corollary follows from straightforward considerations of which states are reachable from the state with no compartments.
17

In specific models, one may be able to do better than Theorem 4.1 by using a more tailored Lyapunov function. The next proposition provides an example of this by extending Corollary 4.3.
Proposition 4.4: Let N be the coarse-grained model associated to (5):
0 S 0 C 2C μ.
κb
κd
κI
κE
κF SC
κC
Assume that condition 2.4 holds, i.e., λ < ∞. Consider the following parameter regimes:
(a) κC > 0 and κE > 0.
(b) κ2
E + κE κd > κbκF .
(c) κC > 0, κd > 0, and κE = 0.
If condition (a) or (b) is satisfied, the state (0, 0, 0, . . . ) with no compartments is positive recurrent. Moreover,
• If κI > 0 and either κb > 0 or μ ̸= δ0, then all states are reachable from (0, 0, 0, . . . ) and hence positive recurrent.
• If κI > 0 and both κb = 0 and μ = δ0, then all states with zero S are positive recurrent and all other states are transient. These transient states have finite expected time to be absorbed by the collection of zero-S states.
• If κI = 0, then all states with a positive number of compartments are transient, but are absorbed by the state with zero compartments in finite expected time.
If condition (c) is satisfied, the state (1, 0, 0, . . . ) with one empty compartment is positive recurrent. Moreover,
• If κI κb > 0, or κF κb > 0, or κI > 0 and μ ̸= δ0, then all states other than (0, 0, 0, . . . ) are reachable from (1, 0, 0, . . . ) and hence positive recurrent.
• If κI > 0 and both κb = 0 and μ = δ0, then all states with zero S and a positive number of compartments are positive recurrent and all other states are transient. These other states all have finite expected time to be absorbed by the collection of zero-S states.
• If κb > 0 but κI = 0 = κF , then all states with one compartment are positive recurrent, and all other states are transient and have finite expected time to be absorbed by the one-compartment states.
• If κI = 0 and κb = 0, then the state with no compartments is absorbing, as is the state with one empty compartment, and all other states are transient. These other states have finite expected time to be absorbed by the state with one empty compartment.
Remark 4.5: Note that the above covers conditions (a), (b), and (c) completely: All possible combinations of other parameters are listed in the bullet points following each “Moreover”. Furthermore, note that (a) and (c) together cover every possible case where κC > 0 except the one where κE = κd = 0, which is not a very interesting case since the number of S cannot decrease. So the proposition is essentially complete except for the parameter regime where κC = 0 and κ2
E + κEκd ≤ κbκF . Later, in Proposition 4.7, we will prove transience in part (though not all) of this remaining regime. △
Proof of Proposition 4.4. The claims about condition (a) are just repeating Corollary 4.3. For the remaining conditions, let L denote the generator of N . For n ∈ N , let C(n) = P∞
x=0 nx and S(n) = P∞
x=0 xnx
be the total number of compartments and the total number of S across compartments, respectively. Let V (n) = αS(n) + C(n) for some constant α > 0 to be chosen later. Then
LV (n) = −κC
C (n)
2 + κF S(n) − κEC(n) − ακES(n) + ακbC(n) − ακdS(n)
+
∞
X
x=0
κI μ(x) 1 + αx
= −κC
C (n)
2 + (κF − α(κE + κd))S(n) + (ακb − κE)C(n) + κI + κI λα.
18

If κC > 0 and κd +κE > 0, then picking α > κF /(κd +κE) we have that LV (n) ≤ −1 outside a finite set. The claims about condition (c) now follow from Corollary A.3 and straightforward reachability considerations. (This also gives an alternate proof of the claims about condition (a).) If κ2
E + κEκd > κbκF , then κF /(κE + κd) < κE/κb; pick α to be some number satisfying κF /(κE + κd) < α < κE/κb (with the convention that κE/κb = ∞ if κb = 0). Then the coefficients of both S(n) and C(n) are negative, so LV (n) ≤ −1 outside a finite set. The claims about condition (b) follow just as above.
Remark 4.6: In section 2.B of [9], the model (5) is studied via simulation and moment closure methods in the case where κb = 0 = κd, where μ is Poisson with parameter λ, and where ψ(x, y) is uniform over possible unordered pairs {y, x − y}. Their analysis focuses on a moment-closure approximation of the model over finite time scales, and does not address its long-term behavior. As it turns out, their model is positive recurrent. This follows directly from Proposition 4.4; one could use either cond-
ition (a) or (b). In fact, since Proposition 4.4(a) is just Corollary 4.3, the existence of the stationary distribution is essentially free from Theorem 4.1. △
In the simple model with chemistry 0 ⇆ S, we can also establish results concerning transience. Throughout what follows, we assume κC = 0, since by Proposition 4.4, conditions (a) and (c) already imply that if κC > 0, then N is positive recurrent whenever κd > 0 or κE > 0. The remaining case κd = 0 = κE is not of particular interest, as in that regime the total number of molecules of S across all compartments cannot decrease.
Proposition 4.7: Let N be the coarse-grained model associated with (5)
0 S 0 C 2C μ,
κb
κd
κI
κE
κF SC
κC
where we again assume that condition 2.4 holds, i.e., λ < ∞. If (κF − κE)κb > (κE + κd)κE and κI > 0 and κC = 0, then all states are transient for N .
Proof. Let C(n) = P∞
x=0 nx and C>0(n) = P∞
x=1 nx, and define
W (n) = C(n) + α C>0(n),
for some constant α > 0 to be chosen later. Set V (n) = 1 − 1
W (n)+1 .
We first compute and (lower) bound LV (n) (using the convention 0/0 = 0):
LV (n) =
∞
X
x=0
κbnx V (n − ex + ex+1) − V (n) + κdnxx V (n − ex + ex−1) − V (n)
+ κI μ(x) V (n + ex) − V (n) + κEnx V (n − ex) − V (n)
+ κF xnx
∞
X
y=0
ψ(x, y) V (n − ex + ey + ex−y) − V (n)
!
≥ κbn0
1
W (n) + 1 − 1
W (n) + 1 + α + κdC>0(n) 1
W (n) + 1 − 1
W (n) + 1 − α
+ κE n0
1
W (n) + 1 − 1
W (n) + κEC>0(n) 1
W (n) + 1 − 1
W (n) − α
+ (κF C>0(n) + κI ) 1
W (n) + 1 − 1
W (n) + 2
= ακbn0
(W (n) + 1)(W (n) + 1 + α) + κF C>0(n) + κI
(W (n) + 1)(W (n) + 2)
− κE n0
(W (n) + 1)(W (n)) − (1 + α)κEC>0(n)
(W (n) + 1)(W (n) − α) − ακdC>0(n)
(W (n) + 1)(W (n) + 1 − α) .
19

Multiplying through by (W (n) + 1)(W (n) + 2), the above becomes
(W (n) + 1)(W (n) + 2)LV (n) = ακbn0
W (n) + 2
W (n) + 1 + α + κF C>0(n) + κI − κEn0
W (n) + 2 W (n)
− (1 + α)κEC>0(n) W (n) + 2
W (n) − α − ακdC>0(n) W (n) + 2
W (n) + 1 − α .
Let ε > 0 be another constant to be chosen later. Notice that all four fractions immediately above are converging to 1 as W (n) → ∞. Let Bε be a set of the form {n : W (n) < kε} for some number kε, such that the first fraction is bounded below by 1 − ε on Bεc and the latter three are bounded above by 1 + ε on Bεc. Then, outside Bε,
(W (n) + 1)(W (n) + 2)LV (n) ≥ ακbn0(1 − ε) + κF C>0(n) + κI − κEn0(1 + ε)
− (1 + α)κEC>0(n)(1 + ε) − ακdC>0(n)(1 + ε)
= κF − (1 + α)κE(1 + ε) − ακd(1 + ε) C>0(n)
+ ακb(1 − ε) − κE(1 + ε) n0 + κI .
Since (κF − κE)κb > (κE + κd)κE, it follows that
κF − κE κE + κd
> κE
κb
.
Choose α > 0 so that κF − κE
κE + κd
> α > κE
κb
.
Rearranging gives ακb − κE > 0 and κF − (1 + α)κE − ακd > 0. So, for some sufficiently small ε > 0, we have ακb(1 − ε) − κE(1 + ε) > 0 and κF − (1 + α)κE(1 + ε) − ακd(1 + ε) > 0.
Let ε be such. Thus, outside Bε,
(W (n) + 1)(W (n) + 2)LV (n) ≥ 0
LV (n) ≥ 0.
Since supn∈Bε V (n) < infn∈Bεc V (n), and N is non-explosive by Corollary 3.3, Theorem A.4 implies that if N starts outside Bε, the probability it ever enters Bε is less than one. Moreover, since κI > 0, the chain starting from (0, 0, 0, . . . ) reaches (kε, 0, 0, 0, . . . ) ∈ Bεc with positive probability, and by the above it never returns to (0, 0, 0, . . . ) with positive probability. Hence (0, 0, 0, . . . ) is transient. If κE = 0, every state is trivially transient; if κE > 0, the transient s-
tate (0, 0, 0, . . . ) is reachable from every state. In either case, all states are transient, as claimed.
Remark 4.8: Notice the gap between the previous two results: If κC = 0 and κI > 0, the former says that N is positive recurrent if κ2
E + κEκd > κbκF whereas the latter says that N is transient if κ2
E + κE κd <
κbκF − κbκE. We conjecture that N is transient in the case where κbκF > κ2
E + κE κd ≥ κbκF − κbκE .
Limited numerical simulation supports this conjecture. With a team of four undergraduate students (Carina Guo, Olivia Guo, Leo Shen, and Yikai Zhang), we simulated the model of this chapter using a combination of the Gillespie and next reaction algorithms (see [2], specifically Algorithms 1 and 2, for background on these two methods). Specifically, simulations were done with parameters κC = 0, κb = κd = κE = κI = 1, and κF ∈ {1.9, 2.0, 2.1}. By the theorem above, the system should be positive recu-
rrent with κF = 1.9, whereas κF = 2.0 and κF = 2.1 fall into the gap (with κF = 2 right on the boundary and not covered by the conjecture above). Indeed, trajectories kept returning to zero in the κF = 1.9 case; they increased steadily for κF = 2.1; and the κF = 2.0 case was less clear. △
20

References
[1] Ikemefuna C. Agbanusi and Samuel A. Isaacson. A comparison of bimolecular reaction models for stochastic reaction–diffusion systems. Bulletin of Mathematical Biology, 76, 2014.
[2] David F. Anderson. A modified next reaction method for simulating chemical systems with time dependent propensities and delays. J. Chem. Phys., 127(21):214107, 2007.
[3] David F. Anderson. An efficient finite difference method for parameter sensitivities of continuous time Markov chains. SIAM Journal on Numerical Analysis, 50(5):2237–2258, 2012.
[4] David F. Anderson, Daniele Cappelletti, Jinsu Kim, and Tung D. Nguyen. Tier structure of strongly endotactic reaction networks. Stochastic Processes and their Applications, 130(12):7218–7259, 2020.
[5] David F. Anderson and Aidan S. Howells. Stochastic reaction networks within interacting compartments. Bulletin of Mathematical Biology, 85, 2023.
[6] David F. Anderson and Aidan S. Howells. Parametric sensitivity analysis for models of reaction networks within interacting compartments. The Journal of Chemical Physics, 162(15):154105, 04 2025.
[7] David F Anderson and Badal Joshi. Chemical mass-action systems as analog computers: implementing arithmetic computations at specified speed. Theoretical Computer Science, 1025:114983, 2025.
[8] Roberto Barbuti, Roberta Gori, Paolo Milazzo, and Lucia Nasti. A survey of gene regulatory networks modelling methods: from differential equations, to boolean and qualitative bioinspired models. Journal of Membrane Computing, 2:207–226, 2020.
[9] Lorenzo Duso and Christoph Zechner. Stochastic reaction networks in dynamic compartment populations. Proceedings of the National Academy of Sciences, 117(37):22674–22683, 2020.
[10] Radek Erban and Hans G. Othmer. Editorial: Special issue on stochastic modelling of reaction–diffusion processes in biology. Bulletin of Mathematical Biology, 76:761–765, 2014.
[11] Stewart N. Ethier and Thomas G. Kurtz. Markov Processes: Characterization and Convergence. John Wiley & Sons, 2 edition, 2005.
[12] Ankit Gupta, Corentin Briat, and Mustafa Khammash. A scalable computational framework for establishing long-term behavior of stochastic reaction networks. PLOS Computational Biology, 10(6):1–16, 06 2014.
[13] F. Horn and R. Jackson. General mass action kinetics. Archive for Rational Mechanics and Analysis, 47:81–116, 1972.
[14] Aidan S. Howells. Stochastic reaction networks within interacting compartments. PhD thesis, University of Wisconsin–Madison, 2024.
[15] Samuel A. Isaacson. A convergent reaction-diffusion master equation. The Journal of Chemical Physics, 139(5):054101, 2013.
[16] A. J. McKane and T. J. Newman. Stochastic models in population biology and their deterministic analogs. Phys. Rev. E, 70:041902, Oct 2004.
[17] Sean P. Meyn and R. L. Tweedie. Stability of Markovian processes III: Foster–Lyapunov criteria for continuous-time processes. Advances in Applied Probability, 25(3):518–548, 1993.
[18] Ander Movilla Miangolarra and Michele Castellana. On non-ideal chemical-reaction networks and phase separation. Journal of Statistical Physics, 190, 2022.
[19] James R. Norris. Markov Chains. Cambridge Series in Statistical and Probabilistic Mathematics. Cambridge University Press, 1997.
21

[20] Lea Popovic, Scott A. McKinley, and Michael C. Reed. A stochastic compartmental model for fast axonal transport. SIAM Journal on Applied Mathematics, 71(4):1531–1556, 2011.
[21] David Soloveichik, Georg Seelig, and Erik Winfree. Dna as a universal substrate for chemical kinetics. Proceedings of the National Academy of Sciences, 107(12):5393–5398, 2010.
[22] R. Srivastava, L. You, J. Summers, and J. Yin. Stochastic vs. Deterministic Modeling of Intracellular Viral Kinetics. J. Theor. Biol, 218:309–321, 2002.
[23] Hendrik WH van Roekel, Bas JHM Rosier, Lenny HH Meijer, Peter AJ Hilbers, Albert J Markvoort, Wilhelm TS Huck, and Tom FA de Greef. Programmable chemical reaction networks: emulating regulatory functions in living cells using a bottom-up approach. Chemical Society Reviews, 44(21):7465–7483, 2015.
A Necessary results related to Lyapunov functions
This section is devoted to collecting all of the Lyapunov conditions we use in the present paper, and providing proofs (or references for proofs) for each. The first result provides a necessary condition for Markov chains to explode. As stated below, it is a corollary of Theorem 2.1 of [17].
Theorem A.1: Let X be a continuous-time Markov chain on a countable state space S with generator L. Suppose V is a function on S which satisfies V → ∞ in the sense that {x ∈ S : V (x) < y} is finite for every y ∈ (−∞, ∞). If there are constants c, d ≥ 0 so that LV (x) ≤ cV (x) + d for all x, then X is not explosive.
Proof. See Theorem 2.1 in [17].
The next theorem is the standard Lyapunov function criterion for positive recurrence. For a proof of the version given below, see for example Theorem 7.3 in [4]. (Note that Theorem 7.3 in [4] is actually our Corollary A.3; that is, they assume V → ∞ instead of assuming that X is not explosive. However, their proof only uses the fact that V → ∞ to show non-explosivity. The fact that V → ∞ is only required for non-explosivity is not a new observation; see for instance the exposition following condit-
ion (CD2) in [17].)
Theorem A.2: Let X be a continuous-time Markov chain on a countable state space S with generator L. Suppose there exists a finite set K ⊂ S and a positive function V on S such that
LV (x) ≤ −1
for all x ∈ S \ K. Suppose further that X is not explosive. Then each state in a closed, irreducible component of S is positive recurrent. Moreover, if τx0 is the time for the process to enter the union of the closed irreducible components given an initial condition x0, then Ex0 [τx0 ] < ∞.
Proof. See Theorem 7.3 in [4].
The following corollary is useful enough for proving positive recurrence that it is worth stating explicitly.
Corollary A.3: Let X be a continuous-time Markov chain on a countable state space S with generator L. Suppose there exists a finite set K ⊂ S and a positive function V on S such that
LV (x) ≤ −1
for all x ∈ S \ K. Suppose further that V → ∞ in the sense that {x ∈ S : V (x) < y} is finite for every y ∈ (−∞, ∞). Then each state in a closed, irreducible component of S is positive recurrent. Moreover, if τx0 is the time for the process to enter the union of the closed irreducible components given an initial condition x0, then Ex0 [τx0 ] < ∞.
Proof. By Theorem A.1, X is not explosive, so the conclusions follow from Theorem A.2.
22

The next theorem gives a Lyapunov condition for checking transience. For a proof of the version given here, see for instance the appendix of [5].
Theorem A.4: Let X be a non-explosive continuous-time Markov chain on a countable discrete state space S with generator L. Let B ⊂ S, and let τB be the time for the process to enter B. Suppose there is some bounded function V such that for all x ∈ Bc,
LV (x) ≥ 0.
Then Px0 (τB < ∞) < 1 for any x0 such that
sup
x∈B
V (x) < V (x0).
Proof. See the appendix of [5].
Lastly, the following condition can be used to show that a Markov chain is explosive.
Corollary A.5: Let X be a continuous-time Markov chain on a countable state space S with generator L. Suppose there exists a finite set K ⊂ S and a positive function V on S such that
LV (x) ≤ −1
for all x ∈ S \ K. Suppose further that V is bounded from above. If there exists z ∈ K such that z is in a closed, irreducible component of S, and there exists a y ∈ S reachable from z such that V (y) < infx∈K V (x), then X is explosive.
Proof. On the one hand, if X was not explosive, every state in a closed, irreducible component of S would be positive recurrent by Theorem A.2. In particular, the point z ∈ K given by the statement of the corollary would be positive recurrent for X. On the other hand, if X was not explosive, then applying Theorem A.4 to X with function −V would yield that Px0 (τK < ∞) < 1 for any x0 such that supx∈K −V (x) < −V (x0). In particular, taking x0 to be the y given to us by the statement of the corollar-
y, we would have Py(τK < ∞) < 1. But then when the chain was started from z, it would reach y with positive probability by assumption, and then fail to return to z with positive probability. Thus Theorems A.2 and A.4, taken together, show that if X were not explosive then the point z given in the statement of this corollary would be both positive recurrent and transient. This is absurd, so X is explosive.
23

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:46.288Z
- **Text Length:** 75370 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 23 of 23
