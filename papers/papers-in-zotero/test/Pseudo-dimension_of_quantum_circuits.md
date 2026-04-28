# PDF Document: Caro and Datta - 2020 - Pseudo-dimension of quantum circuits.pdf

**File Path:** Caro and Datta - 2020 - Pseudo-dimension of quantum circuits.pdf

**Processed Date:** 2026-02-10T18:14:35.632Z

**File Size:** 311.35 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 328

**Title:** Pseudo-dimension of quantum circuits

**Collection:** TEST

---

## Extracted Text Content

arXiv:2002.01490v3 [quant-ph] 9 Nov 2020
PSEUDO-DIMENSION OF QUANTUM CIRCUITS
MATTHIAS C. CARO†1 AND ISHAUN DATTA‡1,2
1Technical University of Munich, Germany, Department of Mathematics
2Stanford University, USA, Institute for Computational and Mathematical Engineering
Abstract. We characterize the expressive power of quantum circuits with the pseudo-dimension,
a measure of complexity for probabilistic concept classes. We prove pseudo-dimension bounds
on the output probability distributions of quantum circuits; the upper bounds are polynomial in
circuit depth and number of gates. Using these bounds, we exhibit a class of circuit output states
out of which at least one has exponential gate complexity of state preparation, and moreover
demonstrate that quantum circuits of known polynomial size and depth are PAC-learnable.
1. Introduction
An important line of research in classical learning theory is characterizing the expressive
power of function classes using complexity measures. Such complexity bounds can in turn be
used to bound the size of training data required for learning. Among the most prominent of these
are the Vapnik-Chervonenkis (VC) dimension introduced by (Vapnik and Chervonenkis 1971).
Other well-known measures are the pseudo-dimension due to (Pollard 1984), the fat-shattering
dimension due to (Alon et al. 1997), the Rademacher complexities (see Bartlett and Mendelson
2002), and more generally covering numbers in metric spaces.
The goal of characterizing an object’s expressive power also appears in different guises
throughout quantum information. A well-known example is quantum state tomography. (Aaronson
2007) related a variant of state tomography to a classical learning task whose fat-shattering di
mension can be bounded using a particular function class related to the set of quantum states.
Associated to this is a corresponding upper bound on sample complexity.
(Aaronson 2007) observes that there is no analogous theorem for general quantum process
tomography, but leaves as an open question whether there are restricted classes of operations that
are information-efficiently learnable. We answer this question in the affirmative. In particular,
we show that for quantum circuits with depth and size polynomial in the number of qubits,
quantum process tomography is possible using only polynomially many examples.
Gate complexity of unitary implementation and state preparation are yet another example
of how one may capture the richness of a function class that corresponds to a quantum compu
tational process (see e.g. Aaronson 2016). For unitary complexity, the challenge is to determine,
e.g., how many two-qubit unitaries (i.e. two-qubit logical gates, in a computational setting) are
E-mail address: †caro@ma.tum.de, ‡idatta@stanford.edu. Date: November 10, 2020.
1

 2 CARO, DATTA
required to implement a certain multi-qubit unitary (i.e. a quantum circuit). For the gate com
plexity of state preparation, it is to determine how many unitaries produce a certain multi-qubit
state. An alternative perspective, adopted in this work, is to consider the expressive power of a
set of circuits with a fixed number of unitaries.
In this work we describe a new way of applying complexity measures from classical learning,
specifically pseudo-dimension, to quantum information. We associate with a quantum circuit a
natural probabilistic function class describing the outcome probabilities of measurements per
formed on the circuit output. In this way, a function class corresponding to a quantum circuit can
be studied with the classical tool of pseudo-dimension. Here, we show that the pseudo-dimension
of such a class can be bounded in terms of a polynomial of the circuit depth and size. We also
give two applications of these bounds, one for the gate complexity of quantum state preparation,
the other in learnability of quantum circuits.
These findings are noteworthy not only because of the results themselves, but because we
demonstrate the power of pseudo-dimension to gain insight into quantum computation. We hope
that these tools may be applied to other problems in quantum computing in future work.
1.1. Related Work. (Aaronson 2007) showed that using the framework of PAC learning, one
can introduce a variant of quantum state tomography and prove an upper bound on the required
number of copies of the unknown state. This idea was developed further in (Aaronson et al.
2018) and (Aaronson 2018).
Motivated by Aaronson’s work, (Cheng et al. 2016) use pseudo-dimension and fat shattering
dimension to characterize the learnability of measurements, as a dual problem to learning the
state. We apply this mathematical framework to study the problem of learning the circuit itself,
in particular by offering a natural function class corresponding to a quantum circuit.
(Rocchetto 2017) proved that stabilizer states, prevalent in error correction, are computa
tionally-efficiently learnable, establishing a connection between efficient classical simulability
and computationally efficient learnability. This was realized experimentally for small optical
systems in (Rocchetto et al. 2019). Similarly, in Sec. 5 we pose as an open problem whether
there are quantum operations that can be PAC-learned with modest computation, which could
then in principle be demonstrated in an experiment.
In (Chung and Lin 2018), the authors study the problem of PAC-learning classes of functions
with computational basis states as input and quantum output, possibly mixed. We highlight
two main differences: first, whereas we assume the training data to be measurement statistics,
(Chung and Lin 2018) consider examples given as classical-quantum states. Thus, the two sce
narios are not directly comparable. Our learning result yields a semi-classical strategy for the
problem described in (Chung and Lin 2018), though it is possibly suboptimal. Second, the learn
ability result of (Chung and Lin 2018) is only for finite concept classes, whereas our result does
not have this restriction. While (Chung and Lin 2018) show learnability of quantum circuits
with a finite gate set, we allow for arbitrary 2-qudit gates, i.e. a continuous gate set. Note that
our corresponding notions of learnability differ.
While we take a formal approach to learning quantum circuits, others have studied learning
unitaries numerically, e.g. with heuristics such as gradient descent (Kiani et al. 2020). Practical

 PSEUDO-DIMENSION OF QUANTUM CIRCUITS 3
machine learning algorithms have also been used for state tomography by (Torlai et al. 2018),
and similar techniques could be applied to restricted classes of process tomography.
Another branch of quantum learning deals with whether quantum examples can decrease the
information-theoretic complexity of learning a classical function. There are different flavors of this
question, e.g. depending on whether learning is distribution-specific or distribution-independent.
(Arunachalam and de Wolf 2017) gives an overview of some of these aspects of quantum learning.
In classical learning theory, bounding the complexity measures of function classes (based on
complexity-theoretic assumptions) has been studied widely. (Goldberg and Jerrum 1995) derived
an upper bound on the VC-dimension of a function class in terms of the runtime required by
an algorithm implementing the elements of that class. (Karpinski and Macintyre 1997) estab
lished an analogous bound for the function class implemented by a neural network (for various
activation functions) in terms of the number of nodes and the number of programmable param
eters of the network. (Koiran 1996) demonstrated that by bounding the complexity of function
classes implemented on a given architecture, one can lower-bound the size of an architecture
implementing a specific “hard” function.
1.2. Overview of Results. We consider the general scenario in which one measures the output
state of a 2-local qudit quantum circuit, generating a probability distribution. We do not assume
geometric locality, i.e. we do not assume that 2-qudit unitaries act on neighboring qudits. We
show an upper bound on the pseudo-dimension of the distributions arising from these quantum
circuits. By doing so, we provide insight into the complexity or “hardness” of the circuit and
the output state that gives rise to the probability distribution. Below, we provide informal
statements of the key results.
Theorem (Pseudo-dimension bounds, Informal).
Consider quantum circuits with fixed architecture, namely those for which the input qudits of
the 2-qudit gates are specified, but the gates may vary subject to this constraint. That is, we
allow for arbitrary 2-qudit unitaries, and in particular we do not restrict ourselves to a finite
gate library.
Parameterize a quantum circuit N by its qudit dimension d, depth δ, and number of gates or size
γ.
Theorem 3.3: For a suitable function class FN corresponding to the possible probability dis
tributions formed by product measurements in the computational basis on the circuit output,
Pdim(FN ) ≤ O(d4 · γ log γ).
Consider quantum circuits with variable architecture, i.e. those for which the input qudits of
the gates are not specified. For such circuits of depth δ and number of gates or size γ, one may
similarly define function classes Fδ,γ for circuits whose gates are unitaries, and Gδ,γ for circuits
whose gates are quantum operations, which describe the possible probability distributions formed
by product measurements on the circuit output. Then,

 4 CARO, DATTA
Theorem 3.7: Pdim(Fδ,γ) ≤ O(δ · d4 · γ2 log γ).
Theorem 3.10: Pdim(Gδ,γ) ≤ O(δ · d8 · γ2 log γ).
All upper bounds are polynomial in the dimension d, the depth δ, and the size γ.
In Sec. 4.1, we demonstrate how to apply these complexity upper bounds to explicitly con
struct, for each n ∈ N, a finite-but-large set of n-qubit quantum states, out of which at least one
cannot be implemented by a 2-local qudit circuit of subexponential depth or size.
Theorem (Gate Complexity of State Preparation, Informal).
For any subset C ⊆ {|x0〉}x∈{0,1}n , define
|ψC 〉 =



√1|C|
∑
|x0〉∈C
|x0〉 if C 6= ∅
|0〉⊗n ⊗ |1〉 if C = ∅.
If each state in {|ψC 〉}C can be generated from the input state |0〉⊗(n+1) by some circuit of depth
δ and size γ, then 2n ≤ O (δ · γ2 log γ) . As a corollary, there exists at least one such C so that
|ψC〉 requires a circuit exponential in depth and size.
Analogously to (Aaronson 2007), in Sec. 4.2 we use our pseudo-dimension bounds to prove a
relaxed variant of quantum process tomography, which following Aaronson’s terminology can be
called pretty-good circuit tomography:
Theorem (Learnability, Informal). Given a circuit with depth ∆ and size Γ, both polynomial in
the number of qudits and known in advance to the learner, polynomially-many training examples,
each a triple of input state, output measurement, and corresponding probability, suffice to learn
the quantum operation implemented by a 2-local quantum circuit of depth ∆ and size Γ.
That is, for confidence δ, accuracy, ε, and error margins α and β, all in (0, 1), a candidate circuit
of depth ∆ and size Γ that performs sufficiently well (in a sense made rigorous in Sec. 4.2) on
O
(1
ε
(
∆d8Γ2 log Γ log2
( ∆d8Γ2 log Γ (β − α)ε
)
+ log 1
δ
))
many samples will with probability at least 1 − δ approximate the actual circuit from which the
samples are drawn.
In this framework, each training example is a three-tuple of the input state, the observed mea
surement outcome, and the corresponding measurement probability. Alternately, one may take
each training example as a two-tuple of the input state and the measurement outcome, whose
probability is the corresponding measurement probability (see Aaronson 2007, Appendix 8).
We review the basics of quantum information, quantum computation, and classical learning
theory in Sec. 2. We also discuss prior classical results as motivation. Sec. 3 contains our main
results on the pseudo-dimension of quantum circuits and the respective proofs. In Sec. 4, we
apply these results to fin lower bounds on the gate complexity of quantum state preparation and
to a learning problem for quantum operations. We conclude with open questions in Sec. 5.

 PSEUDO-DIMENSION OF QUANTUM CIRCUITS 5
2. Preliminaries
As our readership includes both physicists and computer scientists, in this section we review
the mathematical frameworks of quantum information theory and learning theory. Further details
appear in the reference texts (Heinosaari and Ziman 2013) and (Nielsen and Chuang 2010).
2.1. Quantum Information and Computation. The most general descriptor of a d-level
quantum system or statistical ensemble thereof is a density matrix, an element of
S
(
Cd)
:= {ρ ∈ Cd×d | ρ ≥ 0, tr[ρ] = 1}.
Here, ρ ≥ 0 means that the matrix ρ is Hermitian and all its eigenvalues are non-negative.
An important subset of density matrices is the set of pure states, which are one-dimensional
projections. Following Dirac notation, we denote the projector onto the subspace spanned by a
unit vector |ψ〉 ∈ Cd by |ψ〉〈ψ|. By the spectral theorem, every quantum state can be written as
a convex combination of pure states, though this decomposition is not unique in general.
Central to the framework of quantum mechanics is the measurement, the mechanism by
which one may observe properties of a quantum system. These are typically described by so
called positive-operator valued measures (POVMs). As we focus on measurements with a finite
set of outcomes {i}, it suffices to think of measurements as collections of so-called effect operators
{Ei}im=1 with Ei ∈ Cd×d, 0 ≤ Ei ≤ 1d, and
m
∑
i=1
Ei = 1d. We denote the set of effect operators by
E
(
Cd)
:= {E ∈ Cd×d | 0 ≤ Ei ≤ 1d}.
Again, we highlight a special case: if we take an orthonormal basis {|ψi〉}id=1 of Cd, then the set
{Ei = |ψi〉〈ψi|}id=1 is called a projective measurement.
Born’s rule connects measurements to measurement outcomes: given a state characterized by
a density operator, the effect operator has a corresponding probability pi = tr[ρEi]. Thus the
requirement that the effect operators sum to the identity can be seen as probabilities summing to
one. In the special case of pure state ρ = |ψ〉〈ψ| and projective measurement {Ei = |ψi〉〈ψi|}id=1,
the probability of outcome i is pi = tr[ρEi] = |〈ψ|ψi〉|2.
So far we have described the components of static quantum theory. The dynamics of quantum
states are described by so-called quantum operations, which we denote by
T
(
Cd)
:= {T : Cd×d → Cd×d | T is linear, completely positive, and trace-non-increasing}.
Here, a map T is completely positive if T ⊗ Idn is positivity-preserving for every n ∈ N. If
T ∈ T (Cd) is trace-preserving, we call T a quantum channel. An important example is the
unitary quantum channel, T (ρ) = U ρU ∗ for some unitary U ∈ Cd×d.
Note that any element of T (Cd) is a linear map between vector spaces of dimension d2 and can
thus be understood as a d2 × d2 matrix.
2.2. Classical Learning Theory and Complexity Measures. Next we describe the “proba
bly approximately correct” (PAC) model of learning, introduced and formalized by (Vapnik and Chervonenkis
1971) and (Valiant 1984). In (realizable) PAC learning for spaces X, Y and a concept class

 6 CARO, DATTA
F ⊆ Y X , a learning algorithm receives as input labeled training data {(xi, f (xi))}im=1 for some
f ∈ F, where the samples xi are drawn independently according to some unknown probability
distribution D on X that is unknown to the learner. Given the training examples, the goal of
the learner is to approximate the unknown function f by a hypothesis function h, with high
probability.
We can formalize this as follows: first, we introduce a loss function l : Y × Y → R+ to
quantify the discrepancy between the hypothesis h and the function f . We call a concept class F
PAC-learnable if there exists a learning algorithm A such that for every probability distribution
D on X, f ∈ F and δ, ε ∈ (0, 1), running A on training data drawn according to D and f
yields a hypothesis h such that Ex∼D[l(h(x), f (x))] ≤ ε with probability ≥ 1 − δ (with regard
to the choice of training data). Moreover, we quantify the minimum amount of training data
that an algorithm A needs to meet the above conditions by a map mF : (0, 1) × (0, 1) → N,
(δ, ε) 7→ m(δ, ε), the so-called sample complexity of F. We focus on proper learning, in which
the learning algorithm must output as its hypothesis an element of the concept class, i.e., we
require h ∈ F.
A standard approach to assessing learnability is to characterize the complexity of the re
spective concept class F. Many such complexity measures are used, the most common being
the VC-dimension for binary-valued function classes F ⊆ {0, 1}X , named after its progenitors
(Vapnik and Chervonenkis 1971). This combinatorial parameter can be shown to fully charac
terize the learnability: a concept class F ⊆ {0, 1}X is PAC-learnable (w.r.t. the 0-1-loss) if and
only if the VC-dimension of F is finite. Moreover, the sample complexity of PAC learning F can
be expressed in terms of its VC-dimension (see Blumer et al. 1989; Hanneke 2016).
In this work, we employ a widely-used extension of the VC-dimension to real-valued concept
classes:
Definition 2.1. (Pseudo-dimension (Pollard 1984)) Let F ⊆ RX be a real-valued concept class.
A set {x1, ..., xk} ⊆ X is pseudo-shattered by F if there are y1, ..., yk ∈ R such that for any
C ⊆ {1, ..., k} there is an fC ∈ F such that for all 1 ≤ i ≤ k, i ∈ C if and only if fC(xi) ≥ yi.
The pseudo-dimension of F is defined to be
Pdim(F) := sup{n ∈ N0 | ∃S ⊆ X s.t. |S| = n and S is pseudo-shattered by F}.
Alternatively, one can express the pseudo-dimension in terms of the VC-dimension. Namely,
Pdim(F) = VC({X × R ∋ (x, y) 7→ sgn(f (x) − y) | f ∈ F}).
Here, the VC-dimension for a function class H ⊆ {±1}Z is defined as
VC(H) := sup{n ∈ N0 | ∃z1, . . . , zn ∈ Z s.t. ∀b ∈ {±1}n ∃hb ∈ H s.t. ∀i : hb(zi) = bi}.
There is also a scale-sensitive version of the pseudo-dimension:
Definition 2.2. (Fat-Shattering Dimension (Alon et al. 1997)) Let F be a real-valued concept
class and let α > 0. A set {x1, ..., xk} ⊆ X is α-fat-shattered by F if there are y1, ..., yk ∈ R such
that for any C ⊆ {1, ..., k} there is an fC ∈ F such that for all 1 ≤ i ≤ k:

 PSEUDO-DIMENSION OF QUANTUM CIRCUITS 7
(1) i ∈/ C ⇒ fC(xi) ≤ yi − α and
(2) i ∈ C ⇒ fC(xi) ≥ yi + α.
The α-fat-shattering dimension of F is defined to be
fatF (α) := sup{n ∈ N0| ∃S ⊆ X s.t. |S| = n ∧ S is α-fat-shattered by F}.
Note that, trivially, fatF (α) ≤ Pdim(F) holds for every α > 0 and for every real-valued function
class F.
Sample complexity upper bounds for [0, 1]-valued function classes in terms of the fat-shattering
dimension have been proved in (Bartlett and Long 1998; Anthony and Bartlett 2000).
3. Pseudo-Dimension Bounds for Quantum Circuits
We now formulate how to characterize the expressive power of quantum circuits. In particular,
we consider circuits with n input registers of qudits, size (i.e. number of gates) γ, and depth
(i.e. number of layers) δ. More precisely, we consider circuits composed of two-qudit unitaries,
i.e. logical gates with two inputs. Note that two-qudit gates include one-qudit gates. We assume
that gates in the same layer and acting on disjoint pairs of qudits can act in parallel. Additionally,
we assume that each qudit is acted upon by at least one gate, else it effectively does not participate
in the circuit.
In this section, we assign function classes to quantum circuits and then derive bounds on the
pseudo-dimension of these function classes, in terms of the number of qudits and the size and
depth of the circuits. First, we fix quantum circuit structure and inputs, varying only the entries
of the unitary gates and thereby the resulting function. Then, we broaden our scope to variable
circuit architectures, variable inputs, and circuits whose ‘gates’ are general quantum operations.
An important tool that will recur throughout our work is the following result on polynomial
sign assignments, used in (Goldberg and Jerrum 1995) to derive VC-dimension bounds from
computational complexity.
Theorem 3.1. (Warren 1968, Theorem 3) Let {p1, . . . , pm} be a set of real polynomials in n
variables with m ≥ n, each of degree at most d ≥ 1. Then the number of consistent non-zero sign
assignments to {p1, . . . , pm} is at most ( 4edm
n
)n.
Here, e is Euler’s number and a “consistent non-zero sign assignment” to a set of polynomials
{p1, . . . , pm} is a vector b ∈ {±1}m s.t. there exist x1, . . . , xn ∈ R for which it holds that
sgn(pi(x1, . . . , xn)) = bi for all 1 ≤ i ≤ m.
The following implication of Theorem 3.1 for consistent but not necessarily non-zero sign
assignments (which we define as above, but with b ∈ {−1, 0, 1}m) to sets of polynomials was
observed in (Goldberg and Jerrum 1995, Corollary 2.1).
Corollary 3.2. Let {p1, . . . , pm} be a set of real polynomials in n variables with m ≥ n, each
of degree at most d ≥ 1. Then the number of consistent sign assignments to {p1, . . . , pm} is at
most ( 8edm
n
)n.

 8 CARO, DATTA
Proof: (Sketch) This can be obtained by applying Theorem 3.1 to the set {p1 +ε, p1 −ε, . . . , pm +
ε, pm − ε} with ε > 0 chosen sufficiently small.
3.1. Fixed Circuit Structure. Suppose we fix the architecture of a quantum circuit of depth
δ and size γ. Specifically, we restrict our attention to 2-local quantum circuits, i.e. circuits whose
logical gates have support on two qudits, not necessarily neighboring each other. (See Fig. 1.)
“Fixed architecture” means that we specify the positions of the two-qudit unitaries, namely their
order and which qudits they act on. Though the unitaries’ positions are fixed, we may vary the
entries of the unitaries themselves. Here, we allow for arbitrary 2-qudit unitaries. In particular,
we do not restrict ourselves to a finite gate library. Can we bound the pseudo-dimension of the
function class of measurement probability distributions that this circuit generates? And how
does the bound depend on d (the dimensionality of the qudits), δ and γ?
To formalize this question: let n ∈ N be the number of qudits, d ∈ N be their dimensionality,
and N be a fixed quantum circuit architecture of depth δ and size γ acting on n qudits. We
enumerate the positions of the two-qudit unitaries in N by tuples (i, j) with 1 ≤ i ≤ δ denoting
the layer and 1 ≤ j ≤ γi the position of the unitary among all the unitaries inside layer i, where
w.l.o.g. we count from top to bottom and take into account only the first qudit on which a
unitary acts.
Note that
δ
∑
i=1
γi = γ, and trivially γi ≤ γ and γi ≤ n
2 , as we assume that every qudit is acted
upon by at least one gate. We write the unitary at position (i, j) as U (i,j). These constitute
the “free parameters” which we can vary in order to make the quantum circuit perform different
tasks. The overall unitary implemented by N when plugging in the unitaries {U (i,j)}1≤i≤δ,1≤j≤γi
at the respective positions we denote by UN |{U(i,j)}. Note that UN |{U(i,j)} strongly depends on
the two-qudit unitaries that are plugged into the architecture, but sometimes we will suppress
this dependence and simply write UN for notational ease.
The quantum circuit N now gives rise to the following set of output states:
SN
(
(Cd)⊗n)
:= {UN |{U (i,j)}|0〉⊗n| U (i,j) ∈ U
(
(Cd)⊗2)
}.
These output states in turn give rise to a function class of measurement probability distributions
with regard to product measurements:
FN := {f : X → [0, 1] | ∃|ψ〉 ∈ SN
(
(Cd)⊗n)
: f (x) = |〈x|ψ〉|2},
where we take X = Sd × . . . × Sd to be the Cartesian product of n unit spheres of Cd.
The main insight of this subsection is the following:
Theorem 3.3. With the notation and assumptions from above, it holds that
Pdim(FN ) ≤ 8d4 · γ · log(16e · γ).
Here and throughout the paper, log denotes the logarithm to base 2.
To prove this result, we provide the following.
Lemma 3.4. With the notation and assumptions from above, there exists a polynomial pN with
real coefficients, in 2γd4 + 2dn real variables of degree ≤ 2(γ + n) such that every f ∈ FN can

 PSEUDO-DIMENSION OF QUANTUM CIRCUITS 9
|0〉
U (1,1)
· · · |x1〉
✌✌✌
|0〉
U (2,1)
· · · |x2〉
✌✌✌
|0〉
U (3,1)
· · · |x3〉
✌✌✌
|0〉
U (1,2)
· · · |x4〉
✌✌✌
|0〉 · · · |x5〉
✌✌✌
Figure 1. An example 2-local circuit. U (i,j) denotes the jth 2-qudit unitary in the ith layer of the circuit
be obtained from pN by fixing values for the first 2γd4 variables. Moreover, in each term of p,
the degree in the first 2γd4 real variables is ≤ 2γ and the degree in the last 2dn real variables is
≤ 2n.
Notably, there is no explicit dependence on depth δ.
Proof: We first observe that
|〈x|UN |0〉⊗n|2 = |〈0|⊗nU †
N |x〉|2.
We study this expression in a layer-wise analysis. When reading the circuit from right to left, the
state that enters layer δ is transformed by the unitary
γ⊗δ
j=1
U (δ,j)† such that each amplitude of the
state after the δth layer is a linear combination of the amplitudes of |x〉, where each coefficient is
a multilinear monomial of degree γδ in some of the γδ · d4 complex entries of the {U (δ,j)†}1≤j≤γδ .
By iterating this reasoning, we see that the state after the (δ −i)th layer has amplitudes which
are given by a linear combination of the amplitudes of |x〉, where each coefficient is a multilinear
polynomial of degree ≤
i
∑
k=0
γδ−k in (some of) the entries of the unitaries {U (δ−k,jk)†}0≤k≤i,1≤jk≤γk .
In particular, the |0〉⊗n-amplitude of the state U †
N |x〉 can be written as a linear combination
of the amplitudes of |x〉, where each coefficient is given by a multilinear polynomial qN of degree
≤
δ
∑
k=0
γδ−k = γ in (some of) the γ · d4 complex entries of the unitaries {U (i,ji)†}0≤i≤δ,1≤ji≤γi .
Recalling that the probability of observing outcome |0〉⊗n is the square of the absolute value of
the corresponding amplitude of |x〉, we obtain from the polynomial qN a polynomial pN = |qN |2
that describes the output probabilities. As qN has degree at most γ in the γ · d4 complex
parameters of the unitaries, pN has degree at most 2γ in the corresponding 2γ·d4 real parameters.
Fixing these 2γd4 parameters corresponds to fixing the circuit, and therefore one may obtain
every f ∈ FN by fixing these parameters in pN .
Moreover, pN is a polynomial in the 2dn real parameters which give rise to the amplitudes
of |x〉. (Here, the assumption that |x〉 is a product state enters.) As each such amplitude has

 10 CARO, DATTA
degree ≤ n in the 2dn complex parameters, the degree of pN in these real parameters is at most
2n.
Remark 3.5. We formulate the result only for measurement operators consisting of tensor
products of 1-dimensional projections, and continue to do so throughout this manuscript. For
x ∈ X, we can write |x〉 =
n
⊗
i=1
(d∑−1
j=0
α(i)
j |j〉
)
, so we associate dn complex variables with x. That
each amplitude of |x〉 can be written as a product of n complex parameters gives rise to the
upper bound of n in the degree.
We could instead look at more general measurement operators consisting of 1-dimensional
projections without requiring product structure, i.e. entangled measurements. In this scenario,
we would write |x〉 = ∑
z∈{0,...,d−1}n
xz|z〉, associating dn complex variables with x. In this setup,
each amplitude of x is simply a polynomial of degree 1 in these complex variables.
As we fix the variables corresponding to x and y in the shattering assumption that appears in
our proof of Theorem 3.3, their corresponding degrees are not relevant to our argument; only the
degree in the entries of the unitaries enters our analysis. Therefore, both product measurements
or entangled measurements lead to the same pseudo-dimension bound. This is due to the fact
that allowing for entangled measurements changes the set of allowed inputs but not the function
class itself.
Now that we have established Lemma 3.4, we can prove Theorem 3.3 with reasoning analo
gous to that in (Goldberg and Jerrum 1995).
Proof: (Theorem 3.3) Let {(xi, yi)}im=1 ⊆ X × R be such that for every C ⊆ {1, . . . , m} there
exists fC ∈ FN such that fC(xi) − yi ≥ 0 if and only if i ∈ C.
By Lemma 3.4, there exists a polynomial pN in 2γd4 + 2dn real variables of degree ≤ 2(γ + n)
such that for every C ⊆ {1, . . . , m} there exists an assignment ΞC to the first 2γd4 variables of
pN such that pN (ΞC, xi) − yi ≥ 0 if and only if i ∈ C.
In particular, this implies (using the “moreover” part of Lemma 3.4) that the set P =
{pN (·, xi) − yi}im=1 is a set of m polynomials of degree ≤ 2γ in 2γd4 real variables that has
at least 2m different consistent sign assignments.
We now claim that m ≤ 8d4 · γ · log(16e · γ). If m < 2γd4, this holds trivially. Hence,
w.l.o.g. m ≥ 2γd4. So by Corollary 3.2, we have
2m ≤
( 8e · 2γ · m 2γd4
)2γd4
.
Taking logarithms now gives
m ≤ 2γd4
(
log(16e · γ) + log
(m
2γd4
))
.
Now we distinguish cases. If 16e · γ ≥ m
2γd4 , then the above immediately implies m ≤ 4γd4 ·
log(16e · γ). If 16e · γ ≤ m
2γd4 , then we obtain m ≤ 4γd4 · log
(m
2γd4
)
, which in turn implies

 PSEUDO-DIMENSION OF QUANTUM CIRCUITS 11
m ≤ 8γd4. In both cases we have m ≤ 8d4 · γ · log(16eγ). By definition of the pseudo-dimension,
we conclude Pdim(FN ) ≤ 8d4 · γ · log(16eγ), as claimed.
The attentive reader may notice that we do not explicitly refer to the unitarity assumption
in our reasoning; our argument mainly uses linearity. This already hints at a generalization to
quantum circuits not of unitaries but of operations, which we will describe in Subsec. 3.4. In
that subsection, we will also see how the unitarity assumption implicit in this proof produces a
better upper bound than in the general setting of quantum operations.
Remark 3.6. We formulate our bounds in terms of the pseudo-dimension, not its scale-sensitive
version called fat-shattering dimension, even though the latter is more commonly used in clas
sical learning. In our scenario, however, the pseudo-dimension and the fat-shattering dimension
effectively coincide. This is because we could apply our reasoning for general matrices instead
of only unitaries in the setting of Theorem 3.3 as well and achieve the same bounds. In that
case, however, the resulting real-valued function class is closed under scalar multiplication with
non-negative scalars and it follows from the definition that for such classes, the fat-shattering
dimension equals the pseudo-dimension.
3.2. Variable Circuit Structure. Whereas in the previous subsection we fixed a quantum cir
cuit architecture and only varied the entries of the two-qudit unitaries plugged into this structure,
we now additionally vary the structure of the quantum circuit architecture itself and consider
the complexity of the class of all quantum circuits of a given depth and size. Once again, we
consider 2-local quantum circuits, i.e. circuits with one- and two-qudit gates acting on arbitrary
pairs of qudits.
The class of states which is of relevance in this analysis is
Sδ,γ
(
(Cd)⊗n)
:= {|ψ〉 | ∃ quantum circuit N of depth δ and size γ such that |ψ〉 ∈ SN
(
(Cd)⊗n)
}.
Again, this set of states gives rise to a function class via
Fδ,γ := {f : X → [0, 1] | ∃|ψ〉 ∈ Sδ,γ
(
(Cd)⊗n)
: f (x) = |〈x|ψ〉|2},
where X is as above given by X = Sd × . . . × Sd. As before, we want to bound the pseudo
dimension of this function class.
We summarize the result of this subsection in the following:
Theorem 3.7. With the notation and assumptions from above, it holds that
Pdim(Fδ,γ ) ≤ O(δ · d4 · γ2 log γ).
As with Theorem 3.3, the main step towards this result consists of relating the functions
appearing in Fδ,γ to polynomials. The difference here is that we must upper bound the number
of polynomials, as below.
Lemma 3.8. With the notation and assumptions from above, there exists a set Pδ,γ of polyno
mials with real coefficients, in 2γd4 + 2dn real variables of degree ≤ 2(γ + n) such that for every

 12 CARO, DATTA
f ∈ Fδ,γ there exists a polynomial p ∈ Pδ,γ such that f can be obtained from p by fixing values
for the first 2γd4 variables, and such that
|Pδ,γ| ≤ γ! δγ−δ
(γ − δ)! (n!)δ.
Moreover, in each term of p ∈ Pδ,γ the degree in the first 2γd4 real variables is ≤ 2γ and the
degree in the last 2dn real variables is ≤ 2n.
Proof: There are at most γ! δγ−δ
(γ−δ)! ways to assign the gates among the δ layers. The term γ!
(γ−δ)!
counts assigning a single gate to each layer, to ensure that there are no trivial (empty) layers.
Having assigned each layer one gate, the remaining γ − δ gates may be distributed to any of the
δ layers.
Next, we bound the number of ways of assigning qudits to the circuit layers, so that the
qudits are inputs to the fixed-position unitaries. For our purposes, it suffices to crudely upper
bound this by n! for each single layer and thus by (n!)δ overall. Hence, there are at most
γ! δγ−δ
(γ − δ)! (n!)δ
different quantum circuit architectures. The proof is completed by applying Lemma 3.4 to every
such quantum circuit architecture.
Now that we have established Lemma 3.8, we can prove Theorem 3.7 by reasoning analogous
to that in (Goldberg and Jerrum 1995). See the Appendix for the proof of Theorem 3.7.
3.3. Extension to Circuits with Variable Inputs. We now modify the results of 3.1 and 3.2
to allow not only for the fixed input |0〉⊗n, but also for variable input. This is of use, for instance,
in Subsec. 4.2, in which we consider the PAC-learnability of quantum circuits (of unitary gates
or more general quantum channels). In that context, allowing variable input amounts to learning
the entire quantum circuit, rather than just its action on |0〉⊗n. This is necessary in order to
meaningfully compare the learning problem in Subsec. 4.2 to exact circuit tomography.
To consider variable input states, we define the following function classes, analogously to
those in Subsecs. 3.1 and 3.2:
F ′N := {f : X × Y → [0, 1] | ∃UN |{U(i,j)}, U (i,j) ∈ U
(
(Cd)⊗2)
: f (x, y) = |〈x|UN |y〉|2},
where Y can be taken as the computational basis states {0, 1, ..., d − 1}n, or more generally as
Y = X = Sd × ... × Sd.
Lemma 3.9. With the notation and assumptions from above the following holds: There exists a
polynomial p′N in 2γd4 + 4dn real variables of degree ≤ 2γ + 4n such that every f ∈ F′N can be
obtained from p′N by fixing values for the first 2γd4 variables. Moreover, in each term of p′N the
degree in the first 2γd4 real variables is ≤ 2γ, the degree in the 2dn real variables corresponding
to x ∈ X is ≤ 2n, and the degree in the 2dn real variables corresponding to y ∈ Y is ≤ 2n.

 PSEUDO-DIMENSION OF QUANTUM CIRCUITS 13
Proof: Consider the product state input |y〉 = ∑
z yz|z〉. As we consider product states, each
yz is a product of n complex parameters. Following the same reasoning as before, for a fixed
z ∈ {0, . . . , d − 1}, 〈z|UN |x〉 is a multilinear polynomial qzN . Then, the amplitude 〈y|UN |x〉 is
q′N (x, y) = 〈y|UN |x〉 = ∑
z∈{0,1,...,d−1}n
yz 〈z|UN |x〉
=
∑
z∈{0,1,...,d−1}n
yz qzN (x).
In the above equation, q′N (x, y) has degree at most n in y, and so upon squaring the amplitude
q′N (x, y) to obtain p′N (x, y) as in 3.4, we have a degree at most 2n in the 2dn real variables
corresponding to y. The rest follows from Lemma 3.4.
The bound from Theorem 3.3 still holds for the case of variable circuit input, with the proof
proceeding almost identically upon replacing Lemma 3.4 by Lemma 3.9. The 2d · n additional
variables that arise from the polynomial y- dependence do not alter the bound because we fix
the values of these variables in the pseudo-shattering assumption.
3.4. Extension to Circuits of Quantum Operations. We finish this section by describing
an extension of Theorems 3.3 and 3.7 to the case of circuits of quantum operations, instead of
only unitaries. This generalization is relatively straightforward because the decisive property
of unitaries used in our previous proofs was not the preservation of inner products, but rather
linearity. This setting is useful to e.g. describe circuits with imperfect gates. Rather than consider
a logical gate that implements a unitary exactly, each gate can instead be considered a quantum
operation that executes the desired unitary with some probability, and e.g. depolarizes input
qudits with some probability. (Other noise models are of course possible.) Note that although
quantum operations can, by Stinespring’s dilation theorem, be viewed as subsystem dynamics of
a larger, unitarily-evolving system, if we only have access to measurement data for the subsystem
then we cannot directly apply our result for the unitary case.
We use analogous notation to that introduced at the beginning of Subsec. 3.1, writing
TN |{T (i,j)} for the overall quantum operation implemented by N when plugging the two-qudit
quantum operations {T (i,j)}1≤i≤δ,1≤j≤γi into the respective positions of the quantum circuit.
The quantum circuit N (of operations) now gives rise to the set of output states
DN
(
(Cd)⊗n)
:= {TN |{T (i,j)}(|0n〉〈0n|) | T (i,j) ∈ T
(
(Cd)⊗2)
},
where we write |0n〉 = |0〉⊗n, so |0n〉〈0n| = (|0〉〈0|)⊗n.
By taking into account all possible quantum circuits of size γ and depth δ, we obtain
Dδ,γ
(
(Cd)⊗n)
:= {ρ | ∃ circuit N of two-qudit operationsof size γ
and depth δ such that ρ ∈ DN
(
(Cd)⊗n)
}.
These states now yield again a p-concept class
Gδ,γ := {f : X → [0, 1] | ∃ρ ∈ Dδ,γ
(
(Cd)⊗n)
: f (x) = 〈x|ρ|x〉}.
In this scenario, we show:

 14 CARO, DATTA
Theorem 3.10. With the notation and assumptions from above, it holds that
Pdim(Gδ,γ) ≤ O(δ · d8 · γ2 log γ).
Proof: We only sketch the reasoning, as it is similar to that in the proof of Theorem 3.7. We
first need to establish an analogue of Lemma 3.8. To this end, observe that a quantum operation
acting on two-qudit states can be interpreted as a d4 ×d4 matrix with complex entries. Moreover,
we may write
〈x|TN (|0n〉〈0n|)|x〉 = tr[TN (|0n〉〈0n|)|x〉〈x|]
= tr[|0n〉〈0n|TN∗ (|x〉〈x|)]
= 〈0n|TN∗ (|x〉〈x|)|0n〉,
where TN∗ denotes the adjoint operation of TN with regard to the Hilbert-Schmidt inner product.
As before, we can do a layer-wise analysis of the transformation of |x〉〈x| and observe that the
entries of the (sub-normalized) density matrix after a layer can be written as linear combinations
of the entries of the (sub-normalized) density matrix before the layer. Moreover, the coefficients
can be written as multilinear polynomials with the degree determined by the number of two-qudit
operations in the layer. Hence, we obtain the result of Lemma 3.4 with d8 instead of d4. The
bound on the number of different quantum circuit architectures can be derived in exactly the
same way as before, so the analogue of Lemma 3.8 holds, completing the proof of the theorem.
Theorem 3.10 and its proof sketch also help to elucidate the relevance of the unitarity as
sumption in Theorems 3.3 and 3.7. Unitarity justifies our restriction to pure states, but in other
respects Theorems 3.3 and 3.7 do not exploit unitary. The difference between Theorems 3.7 and
3.10 amounts to the size of the matrices that represent the unitaries or quantum operations.
4. Applications
In this section, we explore two different applications of our pseudo-dimension upper bounds.
First, we employ the pseudo-dimension to exhibit a large but finite discrete set of quantum
states, out of which at least one is hard to implement in the sense that preparing it requires
exponentially many 2-qubit unitaries. Second, we combine the pseudo-dimension bound with
results from the theory of p-concept learning to derive the PAC-learnability of quantum circuits.
4.1. Lower Bounds on the Gate Complexity of Quantum State Preparation. It is
well known that almost all n-qubit unitaries require an exponential (in n) number of 2-qubit
unitaries to be implemented. Similarly, almost all pure n-qubit states require an application
of exponentially (in n) many 2-qubit unitaries to be generated from the |0〉⊗n state (see e.g.
Nielsen and Chuang 2010). However, in neither case are there explicit examples of unitaries
or states saturating this exponentiality bound. (See (Aaronson 2016) for more information on
the gate complexity of unitary implementation and state preparation.) We will use the pseudo
dimension as a tool to exhibit a discrete set of pure qubit states such that at least one of them
requires exponentially many 2-qubit unitaries to be generated from |0〉⊗n.

 PSEUDO-DIMENSION OF QUANTUM CIRCUITS 15
The drawback of our result is that the size of this set is 22n and thus unsatisfyingly large. By
relatively simple deliberations this size can be reduced by an order of 2n elements, though this
is negligible compared to the overall size.
We now describe the construction of the candidate set of states. For a subset C ⊆ {|x0〉}x∈{0,1}n ,
namely a subset of the set of all computational basis states of n + 1 qubits that end on 0, with
C 6= ∅, define
|ψC 〉 = 1
√|C |
∑
x0∈C
|x0〉.
For C = ∅ we take
|ψ∅〉 = |0〉⊗n ⊗ |1〉.
(Note that the (n + 1)st qubit only really matters for |ψ∅〉.) Our set of interest will be
S := {|ψC 〉 | C ⊆ {|x0〉}x∈{0,1}n }.
This discrete set of 22n multi-qubit quantum states now gives rise to a class of p-concepts
FS = {fC : X → [0, 1] | ∃C ⊆ {|x0〉}x∈{0,1}n : fC (x) = |〈x|ψC 〉|2}.
This class has large pseudo-dimension, as described in the following lemma.
Lemma 4.1. With the notation introduced above, it holds that Pdim(FS ) ≥ 2n.
Proof: Consider the subset of computational basis states
{|x0〉}x∈{0,1}n and the corresponding threshold values yx0 = 1
2n = min
C ⊆{|x0〉}x∈{0,1}n
1
|C| indepen
dently of x0. By construction of S and thus FS the following holds:
For any C ⊆ {|x0〉}x∈{0,1}n
fC(x0) = |〈x0|ψC 〉|2 =



1
|C| if |x0〉 ∈ C
0 else .
In particular, we have
fC(x0) ≥ yx0 ⇐⇒ |x0〉 ∈ C.
Hence, Pdim(FS ) ≥ 2n, because we have found an example of a set of size 2n that is pseudo
shattered.
We now combine this simple observation with Theorem 3.7, which gives us the following:
Theorem 4.2. With the notation introduced above, if γ and δ are such that each state in S can
be generated from the state |0〉⊗(n+1) by some circuit of size γ and depth δ, then
2n ≤ O (δ · 24 · γ2 log γ)
Proof: Under the assumption of the Theorem we can conclude FS ⊆ Fδ,γ. Now combine the
lower bound of Lemma 4.1 with the upper bound from Theorem 3.7.

 16 CARO, DATTA
Corollary 4.3. There exists a C ⊆ {|x0〉}x∈{0,1}n such that |ψC 〉 = √1|C|
∑
|x0〉∈C
|x0〉 cannot be
implemented by a quantum circuit of 2-qubit unitaries with subexponential (in n) size or depth.
Note that any set of functions which pseudo-shatters a set of size 2n has to have at least 22n
elements. Hence, the large size of the set C is an automatic consequence of our line of reasoning.
Remark 4.4. We note that a set of n-qubit states with cardinality doubly exponential in n
s.t. at least one of them needs an exponential number of gates (up to logarithmic factors) to be
implemented can also be obtained with more standard reasoning. Namely, it is well known that
there are n-qubit states the approximation of which up to trace-distance ε requires Ω
(
2n log
(1
ε
)
log(n)
)
unitary gates (see Nielsen and Chuang 2010, chap. 4.5.4). So if we pick a 1
2 -net of size O (22n )
for the set of pure n-qubit quantum states, this will have the desired properties.
We sketch another way of using our pseudo-dimension bound to study the gate complexity
of state preparation and which might lead to a smaller set of candidates. Given n-qubit pure
states |ψ1〉, . . . , |ψm〉 and efficiently implementable (i.e. with polynomially many 2-qubit unitary
gates arranged in polynomially many layers) unitaries U1, . . . , Uk, one can study the set of states
{Ui|ψj 〉}1≤i≤k,1≤j≤m.
If an exponential (in n) pseudo-dimension lower bound can be established for
{f : X → [0, 1] | ∃1 ≤ i ≤ k, 1 ≤ j ≤ m : f (x) = |〈x|Ui|ψj〉|2},
then, since every Ui is efficiently implementable, one can conclude that at least one among the
states |ψj〉 is not efficiently implementable.
The advantage of such a pseudo-dimension-based reasoning would be that m need not be
doubly exponential in n, since we can compensate for this in k. This realization can already be
used to reduce the size of the set of candidate states given in Corollary 4.3. However, we have
not yet been able to identify sufficiently many efficiently-implementable unitaries to reduce the
size below doubly exponential. Nevertheless, there is likely room for improvement in applying
our method to the gate complexity of quantum state preparation.
4.2. Learnability of Quantum Circuits. We now use our pseudo-dimension bounds to study
learnability. Specifically, we use the pseudo-dimension bound for the case of variable inputs
(Subsec. 3.3) combined with the generalization to quantum operations (Subsec. 3.4). We pro
ceed quite similarly to (Aaronson 2007).
The learning problem which we want to study is the following: Let μ be a probability measure
on (X × Y ) × [0, 1], unknown to the learner. Let S = {((x(i), y(i)), p(i))}im=1 be corresponding
training data drawn i.i.d. according to μ. A learner must, upon input of training data S, size
Γ ∈ N, depth ∆ ∈ N, confidence δ ∈ [0, 1), accuracy, ε ∈ [0, 1) and error margin β ∈ (0, 1),
output a hypothesis quantum circuit N of size Γ and depth ∆ consisting of two-qudit operations
such that, with probability ≥ 1 − δ with regard to the choice of training data,
P((x,y),p)∼μ [|fN (x, y) − p| > β] ≤ ε + inMf
P(x,p)∼μ [|fM(x, y) − p| > β] ,

 PSEUDO-DIMENSION OF QUANTUM CIRCUITS 17
where the infimum runs over all quantum circuits M of size Γ and depth ∆. Here, fN denotes
the function fN (x, y) = 〈x|TN (|y〉〈y|)|x〉 and fM is defined analogously, similarly to Subsec. 3.3.
We use our pseudo-dimension bound in order to upper-bound the size of the training data
sufficient for solving this task. More precisely, we make use of sample complexity upper bounds
from the fat-shattering dimension as proved in (Anthony and Bartlett 2000; Bartlett and Long
1998), together with the fact that the fat-shattering dimension is upper-bounded by the pseudo
dimension.
First we restrict our scope to the “realizable” scenario, i.e. we will assume the probability
measure to be of the form
μ((x, y), p) =



μ1(x, y) if p = fN∗(x, y)
0 else
for some quantum circuit N∗ of size Γ and depth ∆. This will in particular imply that for
quantum circuits M of size Γ and depth ∆
inMf
P((x,y),p)∼μ [|fM(x, y) − p| > β] = 0.
Colloquially, realizability means that there exists a set of “correct” parameters Γ and ∆ and these
are known to the learner, i.e. training samples are promised to be drawn from circuits of size Γ
and depth ∆.
We will focus on a proper learning scenario, i.e., we will assume the unknown target circuit
to be in some (known) class, namely the class of circuits whose size and depth satisfy certain
polynomial bounds, and require the learner to output an element of that same class as hypothesis.
We will make use of the following classical result:
Theorem 4.5. (Anthony and Bartlett 2000, Corollary 3.3)
Let X be an input space, let F ⊆ [0, 1]X . Let D be a probability measure on X, let f∗ ∈ F. Let
δ, ε, α, β ∈ (0, 1) with β > α. Let S = {x1, . . . , xm} be a set of m samples drawn i.i.d. according
to D. Let h ∈ F be such that |h(xi) − f∗(xi)| ≤ α for all 1 ≤ i ≤ m.
Then, a sample size
m=O


1 ε

fatF
(β − α 8
)
log2


fatF
( β−α 8
)
(β − α)ε

 + log 1
δ




suffices to guarantee that, with probability ≥ 1 − δ with regard to the choice of training data S,
Px∼D[|h(x) − f∗(x)| > β] ≤ ε.
In our setting, this result implies:
Corollary 4.6. Let N∗ be a quantum circuit of quantum operations with size Γ and depth ∆.
Let μ be probability measure on X × Y unknown to the learner. Let
S = {((x(i), y(i)), fN∗ (x(i), y(i))}im=1

 18 CARO, DATTA
be corresponding training data drawn i.i.d. according to μ. Let δ, ε, α, β ∈ (0, 1). Then, training
data of size m = O
(1 ε
(
∆d8Γ2 log(Γ) log2 ( ∆d8Γ2 log(Γ)
(β−α)ε
)
+ log 1
δ
))
suffice to guarantee that, with
probability ≥ 1 − δ with regard to choice of the training data, any quantum circuit N of size Γ
and depth ∆ that satisfies
|fN (xi, yi) − fN∗(xi, yi)| ≤ α ∀1 ≤ i ≤ m
also satisfies
P(x,y)∼μ[|fN (x, y) − fN∗(x, y)| > β] ≤ ε.
Proof: Combine Theorem 4.5 with Theorem 3.7 (more precisely, with its version for variable
input states, which can be proved for operations analogously to the reasoning in Subsec. 3.3)
and use that the fat-shattering dimension is always upper-bounded by the pseudo-dimension.
Note that in particular, this implies that for the class of circuits of quantum operations with
polynomial size and depth in the number of qudits, a hypothesis that performs well on training
data will also perform well in a probably approximately correct sense.
Next, we want to discuss briefly how our result compares to the work (Aaronson 2007)
on the learnability of quantum states. There, it is shown that quantum states can be PAC
learned with a sample complexity that depends linearly on the number of qubits and (among
other dependencies) polynomially on 1
ε , where ε denotes the desired accuracy. However, this
result does not imply learnability of quantum channels with a sample complexity that depends
polynomially on the number of qubits. This observation is already stated in (Aaronson 2007),
and we provide an alternate, intuitive explanation for why the result on states does not directly
apply to operations.
One can straightforwardly apply the result of (Aaronson 2007) to learn the Choi-Jamiolkowski
state of a quantum channel. One can then compute measurement probabilities of output states
of a channel T acting on n-qubit states, using its Choi-Jamiolkowski state τ . For this we must
make use of the formula
tr[ET (ρ)] = 2n tr[τ (E ⊗ ρT )].
Here, we see that any error on the side of the Choi-Jamiolkowski state will be multiplied by a
factor exponential in n, and thus in this case the overall n-dependence of the sample complexity
bound from (Aaronson 2007) becomes exponential via the accuracy-dependence.
This motivates our study of learnability of a restricted class of quantum operations. Find
ing such operations for which process tomography is possible was left as an open problem in
(Aaronson 2007). Our answer to this question is that a PAC-version of quantum process tomog
raphy is possible when we restrict our scope to operations that can be implemented by quantum
circuits of depth and size polynomial in the number of qudits. However, note that this is sub
ject to a realizability assumption: the learner must known in advance a polynomial bound on
the size and depth of the circuit. We show that imposing the operations be efficiently imple
mentable automatically reduces the information-theoretic complexity of learning, requiring only
a modest number of training examples. We do not make any statement about the computational
complexity of this learning task; this remains an open problem.

 PSEUDO-DIMENSION OF QUANTUM CIRCUITS 19
How can this probably approximately correct version of quantum process tomography be
put to use? Given polynomially many uses of a black box implementing an unknown quantum
operation of polynomial size and depth, one can exhibit a circuit of two-qudit quantum operations
that approximates the unknown channel. In other words, we obtain a classical description of an
approximate copy of the channel.
5. Open Problems
Finally, in this section we discuss future directions and possible generalizations of our results.
Two natural parameters of a circuit, depth and size, appear polynomially in the pseudo
dimension upper bounds. Notably, these bounds are independent of the number of qudits in
the circuit. Are our upper bounds tight in their dependence on size and depth? Can similar
techniques produce pseudo-dimension lower bounds? For example, by considering a single 2
qudit unitary it is relatively straightforward to see that the pseudo-dimension of a circuit is
≥ Ω(d). Can we close the gap in dimension-dependence between this linear lower bound and our
quartic upper bound?
Our application of pseudo-dimension for lower bounds on the gate complexity of state prepara
tion complements known methods (described e.g. in Nielsen and Chuang 2010), based on count
ing dimensions or covering arguments. We exhibit a class of states of size 22n , for which at least
one has exponential gate complexity of state preparation. Can we exploit this new technique to
exhibit a smaller set of states? Perhaps the most exciting application of pseudo-dimension bounds
could be provable lower bounds on the gate complexity of state preparation, if the reasoning in
4.1 is sharpened or the tools are developed further.
If circuit depth and size are known in advance, one can information-efficiently learn the
circuit. If the learner receives training data generated by an approximation of the circuit, does
the result still hold? Can the realizability assumption be relaxed?
Does “pretty-good circuit tomography” have applications? On the theory side, this might
involve exploiting the learning process as an approximate copy-machine for quantum circuits.
Of interest for both theory and experiment is whether circuits can be learned with a reasonable
amount of computation. One can imagine progress on this question for process tomography
similar to that for state tomography; demonstrating a class of states for which learning is com
putationally efficient in (Rocchetto 2017) made it possible to learn physically interesting states
in a laboratory in (Rocchetto et al. 2019). An efficiency improvement in the process tomography
case might also have experimental ramifications.
6. Acknowledgements
M.C.C. and I.D. thank Michael Wolf for suggesting this problem and both Michael Wolf and
Yifan Jia for insightful discussions. Also, M.C.C. and I.D. thank Scott Aaronson, Srinivasan
Arunachalam and Andrea Rocchetto for their valuable feedback on an earlier version of this
paper. Finally, M.C.C. and I.D. thank the reviewers for their helpful suggestions.
M.C.C. gratefully acknowledges support from the TopMath Graduate Center of the TUM
Graduate School at the Technische Universität München, Germany, and from the TopMath

 20 CARO, DATTA
Program at the Elite Network of Bavaria. M.C.C. is supported by a doctoral scholarship of the
German Academic Scholarship Foundation (Studienstiftung des deutschen Volkes).
I.D. gratefully acknowledges that this material is based upon work supported by the National
Science Foundation (NSF) Graduate Research Fellowship under Grant No. DGE 1656518, and by
the German Academic Exchange Service (DAAD) under Grant No. 57381410. Any conclusions
expressed in this material are those of the authors and do not necessarily reflect the views of the
aforementioned institutions.

 PSEUDO-DIMENSION OF QUANTUM CIRCUITS 21
References
Aaronson S (2007) The learnability of quantum states. Proceedings of the Royal Society A:
Mathematical, Physical and Engineering Sciences 463(2088):3089–3114, DOI 10.1098/rspa.
2007.0113
Aaronson S (2016) The complexity of quantum states and transformations: From quantum
money to black holes. Electronic Colloquium on Computational Complexity (ECCC) 23:109
Aaronson S (2018) Shadow tomography of quantum states. DOI 10.1145/3188745.3188802, URL
http://dl.acm.org/ft_gateway.cfm?id=3188802&type=pdf
Aaronson S, Chen X, Hazan E, Kale S (2018) Online learning of quantum states. URL
http://dl.acm.org/ft_gateway.cfm?id=3327572&type=pdf
Alon N, Ben-David S, Cesa-Bianchi N, Haussler D (1997) Scale-sensitive dimensions, uniform
convergence, and learnability. Journal of the ACM 44(4):615–631, DOI 10.1145/263867.263927
Anthony M, Bartlett PL (2000) Function learning from interpolation. Combinatorics, Probability
and Computing 9(3):213–225, DOI 10.1017/S0963548300004247
Arunachalam S, de Wolf R (2017) Guest column: A survey of quantum
learning theory. SIGACT News 48, DOI 10.1145/3106700.3106710, URL
https://pure.uva.nl/ws/files/25255496/p41_arunachalam.pdf
Bartlett PL, Long PM (1998) Prediction, learning, uniform convergence, and scale-sensitive
dimensions. Journal of Computer and System Sciences 56(2):174–190, DOI 10.1006/jcss.1997.
1557
Bartlett PL, Mendelson S (2002) Rademacher and gaussian complexities: Risk bounds
and structural results. Journal of Machine Learning Research 3(Nov):463–482, URL
http://www.jmlr.org/papers/volume3/bartlett02a/bartlett02a.pdf
Blumer A, Ehrenfeucht A, Haussler D, Warmuth MK (1989) Learnability and the vapnik
chervonenkis dimension. Journal of the ACM 36(4):929–965, DOI 10.1145/76359.76371
Cheng HC, Hsieh MH, Yeh PC (2016) The learnability of unknown quantum measurements.
Quantum Information & Computation 16(7-8):615–656
Chung KM, Lin HH (2018) Sample efficient algorithms for learning quantum chan
nels in pac model and the approximate state discrimination problem. URL
https://arxiv.org/pdf/1810.10938
Goldberg PW, Jerrum MR (1995) Bounding the vapnik-chervonenkis dimension of concept classes
parameterized by real numbers. Machine Learning 18(2-3):131–148, DOI 10.1007/BF00993408
Hanneke S (2016) The optimal sample complexity of pac learning.
The Journal of Machine Learning Research 17(1):1319–1333, URL
http://dl.acm.org/ft_gateway.cfm?id=2946683&type=pdf
Heinosaari T, Ziman M (2013) The mathematical language of quantum theory: From uncertainty
to entanglement. Cambridge University Press, Cambridge
Karpinski M, Macintyre A (1997) Polynomial bounds for vc dimension of sigmoidal and general
pfaffian neural networks. Journal of Computer and System Sciences 54(1):169–176, DOI 10.
1006/jcss.1997.1477

 22 CARO, DATTA
Kiani BT, Lloyd S, Maity R (2020) Learning unitaries by gradient descent. URL
https://arxiv.org/pdf/2001.11897
Koiran P (1996) VC dimension in circuit complexity. In: Cai JY, Homer S (eds) Proceedings,
Eleventh Annual IEEE Conference on Computational Complexity, IEEE Computer Society
Press, Los Alamitos, Calif, pp 81–85, DOI 10.1109/CCC.1996.507671
Nielsen MA, Chuang IL (2010) Quantum computation and quantum information. Cambridge
University Press, Cambridge and New York
Pollard D (1984) Convergence of Stochastic Processes. Springer Series in Sta
tistics, Springer, New York, NY, DOI 10.1007/978-1-4612-5254-2, URL
http://dx.doi.org/10.1007/978-1-4612-5254-2
Rocchetto A (2017) Stabiliser states are efficiently pac-learnable. Quantum Information and
Computation 18
Rocchetto A, Aaronson S, Severini S, Carvacho G, Poderini D, Agresti I, Bentivegna M, Sciarrino
F (2019) Experimental learning of quantum states. Science Advances 5(3), DOI 10.1126/sciadv.
aau1946
Torlai G, Mazzola G, Carrasquilla J, Troyer M, Melko R, Carleo G (2018) Neural-network quan
tum state tomography. Nature Physics 14(5):447–450, DOI 10.1038/s41567-018-0048-5, URL
https://www.nature.com/articles/s41567-018-0048-5.pdf
Valiant LG (1984) A theory of the learnable. Communications of the ACM 27(11):1134–1142,
DOI 10.1145/1968.1972
Vapnik VN, Chervonenkis AY (1971) On the uniform convergence of relative frequencies of
events to their probabilities. Theory of Probability & Its Applications 16(2):264–280, DOI
10.1137/1116025
Warren HE (1968) Lower bounds for approximation by nonlinear manifolds. Transactions of the
American Mathematical Society 133(1):167, DOI 10.2307/1994937

 PSEUDO-DIMENSION OF QUANTUM CIRCUITS 23
Appendix A. Proof of Theorem 3.7
Here, we prove Theorem 3.7, namely that Pdim(Fδ,γ) ≤ O(δ · d4 · γ2 log γ).
Proof: (Theorem 3.7)
We rely upon Lemma 3.8. Let {(xi, yi)}im=1 ⊆ X × R be such that for every C ⊆ {1, . . . , m},
there exists fC ∈ Fδ,γ such that fC(xi) − yi ≥ 0 if and only if i ∈ C.
By Lemma 3.8, there exists a set of polynomials Pδ,γ in 2γd4 + 2dn real variables such that
|Pδ,γ | ≤ γ! δγ−δ
(γ−δ)! (n!)δ and such that for every C ⊆ {1, . . . , m}, there exists a pC ∈ Pδ,γ and an
assignment ΞC to the first 2γd4 variables of pC such that pC(ΞC, xi) − yi ≥ 0 if and only if i ∈ C.
In particular, this implies (using the “moreover”-part of Lemma 3.8) that the set P =
{p(·, xi) − yi}im=1 | p ∈ Pδ,γ} is a set of m · |Pδ,γ| ≤ m γ! δγ−δ
(γ−δ)! (n!)δ polynomials of degree ≤ 2γ
in 2γd4 real variables that has at least 2m different consistent sign assignments. So by Corollary
3.2, we have
2m ≤
( 8e · 2γ · m
2γd4 · γ! δγ−δ
(γ − δ)! (n!)δ
)2γd4
.
Taking logarithms yields
m ≤ 2γd4
(
log(16e · γ) + log
(m
2γd4 · γ! δγ−δ
(γ − δ)! (n!)δ
))
.
Repeating the argument in the proof of Theorem 3.3, we distinguish cases and observe that in
both cases,
m ≤ 8d4 · γ · log
(
16eγ · γ! δγ−δ
(γ − δ)! (n!)δ
)
.
Expanding the logarithm and using Stirling’s formula up to two terms, we have
log
(
16eγ · γ! δγ−δ
(γ − δ)! (n!)δ
)
=1
ln 2
(
4 ln 2 + 1 + ln γ +
[
n · δ ln n − n · δ + O(ln n) + γ ln γ − γ✓ + O(ln γ) − (γ − δ) ln(γ − δ)
+ (γ✓ − δ) + O(ln(γ − δ)) + (γ − δ) ln δ
])
≤1
ln 2
(
4 ln 2 + 1 + ln γ + [2γ · δ(ln(2γ) − 1) + γ ln γ − (γ − δ) ln(γ − δ) − δ + (γ − δ) ln δ]
)
= O(γ · δ log γ).
We use the fact that n ≤ 2γ (because we assume that each qudit is acted upon by at least one
gate) in the second step, and note that because γ ≥ δ, the asymptotic behavior of all of the
above terms are subsumed by the first term in the bracket. We have also confirmed that the
log(16eγ) term above may be neglected. Thus, by the definition of the pseudo-dimension we
conclude Pdim(FN ) ≤ O(δ · d4 · γ2 log γ).

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:35.632Z
- **Text Length:** 61171 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
