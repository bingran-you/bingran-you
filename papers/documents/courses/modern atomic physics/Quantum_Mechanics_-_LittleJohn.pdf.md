# PDF Document: Quantum Mechanics - LittleJohn.pdf

**File Path:** Quantum Mechanics - LittleJohn.pdf

**Processed Date:** 2026-02-10T18:17:36.657Z

**File Size:** 7668.73 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 71

**Collection:** Courses > Modern Atomic Physics

---

## Extracted Text Content

Copyright c 2019 by Robert G. Littlejohn
Physics 221A Fall 2019 Notes 1
The Mathematical Formalism of Quantum Mechanics†
1. Introduction
The prerequisites for Physics 221A include a full year of undergraduate quantum mechanics. In this semester we will survey that material, organize it in a more logical and coherent way than the ﬁrst time you saw it, and pay special attention to fundamental principles. We will also present some new material. Physics 221B will largely consist of new material.
We begin by presenting some of the mathematical formalism of quantum mechanics. We will introduce more mathematics later in the course as needed, but for now we will concentrate on the linear algebra of spaces of wave functions, which are called Hilbert spaces. These notes gather together and summarize most of what you will need to know of this subject, so we can proceed with other matters. In the next set of notes we will turn to the physical postulates of quantum mechanics, which allow us to con-
nect experimental results with the mathematics presented here.
Introductory courses on linear algebra are usually limited to ﬁnite-dimensional, real vector spaces. Making the vector spaces complex is a small change, but making them inﬁnite-dimensional is a big step if one wishes to be rigorous. We will make no attempt to be rigorous in the following—to do so would require more than one course in mathematics and leave no time for the physics. Instead, we will follow the usual procedure in physics courses when encountering new mathematics, which is to proceed b-
y example and analogy, attempting to gain an intuitive understanding for some of the main ideas without going into technical proofs. Speciﬁcally, in dealing with Hilbert spaces we will try to apply what we know about ﬁnite-dimensional vector spaces to the inﬁnite-dimensional case, often using ﬁnite-dimensional intuition in inﬁnite dimensions, and we will try to learn where things are diﬀerent in inﬁnite dimensions and where one must be careful. Fortunately, it is one of the consequences of the mat-
hematical deﬁnition of a Hilbert space that many of its properties are the obvious generalizations of those that hold in ﬁnite dimensions, so much of ﬁnite-dimensional intuition does carry over. We will use what we know about spaces of wave functions (an example of a Hilbert space) to gain some intuition about where this is not so.
† Links to the other sets of notes can be found at: http://bohr.physics.berkeley.edu/classes/221/1920/221.html.

2

Notes 1: Mathematical Formalism

2. Hilbert Spaces
Let us consider a wave function ψ(x) for a one-dimensional quantum mechanical problem. In practice it is common to require ψ(x) to be normalized, but for the purpose of the following discussion we will require only that it be normalizable, that is, that

|ψ(x)|2 dx < ∞

(1)

(which means that the integral is ﬁnite). Wave functions that are not normalizable cannot represent physically realizable states, because the probability of ﬁnding a real particle somewhere in space must be unity. Nevertheless, wave functions that are not normalizable, such as the free particle energy eigenfunctions eikx, are deﬁnitely useful for some purposes, and we will have to say something about them later. For now, however, we will stick to normalizable wave functions.
Mathematically speaking, the space of complex functions that are normalizable (or square integrable) in the sense of Eq. (1) constitutes a complex vector space. This is because if ψ(x) is square-integrable, then so is cψ(x), where c is any complex number, and if ψ1(x) and ψ2(x) are square-integrable, then so is ψ1(x) + ψ2(x). Moreover, the space is inﬁnite-dimensional (see Sec. 29). This vector space is an example of a Hilbert space; in general, a Hilbert space is a complex, inner product vector s-
pace (a vector space upon which an inner or scalar product is deﬁned) with certain additional properties that will not concern us in this course (see Sec. 29). Often the term “Hilbert space” is deﬁned to be an inﬁnite-dimensional space, but in this course we will refer to any of the vector spaces of wave functions that occur in quantum mechanics as Hilbert spaces, even when ﬁnite-dimensional.
As you know, given a normalized wave function ψ(x) in conﬁguration space, |ψ(x)|2 is the probability density for making measurements of position on an ensemble of systems. The wave function ψ(x) is connected physically with position measurements. (See Sec. B.3 for the deﬁnition of “conﬁguration space.”)
Given ψ(x) in conﬁguration space, one can compute the corresponding wave function φ(p) in momentum space, by a version of the Fourier transform:

φ(p) = √ 1

dx e−ipx/h¯ ψ(x).

(2)

2π¯h

The Fourier transform is linear and invertible (via the inverse Fourier transform), so provides a one-

to-one, linear map between the spaces of wave function ψ(x) and that of φ(p). Moreover, according

to the Parseval identity, the norm of ψ in conﬁguration space and the norm of φ in momentum space

are equal,

dx |ψ(x)|2 = dp |φ(p)|2,

(3)

so if we consider the Hilbert space of normalizable wave functions {ψ(x)} in conﬁguration space, then the set {φ(p)} of corresponding momentum space wave functions also forms a Hilbert space.

Notes 1: Mathematical Formalism

3

(The “norm” of a wave function is the square root of the quantity shown in Eq. (3); it is like the length of a vector.)
The momentum space wave function φ(p) is connected with the measurement of momentum, in particular, if φ(p) is normalized then |φ(p)|2 is the probability density for momentum measurements on an ensemble of systems. The Parseval identity expresses the equality of the total probability for measurements of either position or momentum.
Likewise, let {un(x), n = 1, 2, . . .} be an orthonormal set of energy eigenfunctions, Hun(x) = Enun(x) for some Hamiltonian H. An arbitrary wave function ψ(x) can be expanded as a linear combination of the functions un(x), that is, we can write

ψ(x) = cnun(x),

(4)

n

where the expansion coeﬃcients cn are given by

cn = dx un(x)∗ψ(x).

(5)

Equation (4) can be regarded as a linear transformation taking us from the sequence of coeﬃcient (c1, c2, . . .) to the wave function ψ(x), while Eq. (5) goes the other way.
The sequence of coeﬃcients (c1, c2, . . .) uniquely characterizes the state of the system, and we can think of it as the “wave function in energy space.” Notice that if the sequence is normalized,
n |cn|2 = 1, then the probability of making a measurement E = En of energy is |cn|2. Also, the norm of the original wave function ψ(x) can be expressed in terms of the expansion coeﬃcients by

dx |ψ(x)|2 = |cn|2,

(6)

n

which is ﬁnite if ψ(x) belongs to Hilbert space. This is another expression of conservation of probability. Mathematically speaking, the set of sequences {(c1, c2, . . .)} of complex numbers of ﬁnite norm is yet another example of a Hilbert space.
Thus, we have three Hilbert spaces, the two spaces of wave functions, {ψ(x)} and {φ(p)}, and the space of sequences {(c1, c2, . . .)}, all assumed to be normalizable. These Hilbert spaces are isomorphic, in the sense that the vectors of each space are related to one another by invertible, norm-preserving linear transformations, so they all contain the same information. (See Sec. 29 for some mathematical points regarding Hilbert spaces of wave functions.) Therefore none of these spaces can be taken-
 as more fundamental than the other; any calculation that can be carried out in one space (or in one representation, as we will say), can be carried out in another.
Psychologically, there is a tendency to think of wave functions ψ(x) on conﬁguration space as fundamental, probably because we are used to thinking of ﬁelds such as electric ﬁelds deﬁned over physical space. This is also the bias imposed on us by our ﬁrst courses in quantum mechanics, as well as the historical development of the subject. Also, we live in physical space, not momentum space. But the Schr¨odinger wave function is not really deﬁned over physical space, rather it is deﬁned over

4

Notes 1: Mathematical Formalism

conﬁguration space, which is the same only in the case of a single particle (see Sec. B.3). Furthermore, completely apart from the mathematical equivalence of the diﬀerent Hilbert spaces discussed above, the physical postulates of quantum mechanics show that the diﬀerent wave functions discussed above correspond to the measurement of diﬀerent sets of physical observables. They also show that there is a kind of democracy among the diﬀerent physical observables one can choose to measure, as long as -
the set of observables is compatible and complete in a sense we will discuss later.
Finally, even if we do have a single particle moving in three dimensions so the wave function ψ(r) can be thought of as a ﬁeld over physical space, the physical measurement of ψ(r) is very diﬀerent from the measurement of a classical ﬁeld such as the electric ﬁeld or the pressure of a ﬂuid. We have thermometers that can measure the temperature at a point, we have pressure gauges, and it is possible to measure electric and magnetic ﬁelds at points of space. But there is no such thing as a “ψ-meter”-
 for measuring the wave function ψ(r). Later we will consider how one can obtain ψ(r) from measurements, but the process involves several subtleties. (In particular, it requires one to understand the diﬀerence between a pure and a mixed state; only pure states have wave functions.) It is a very diﬀerent business than the measurement of a classical ﬁeld. See Prob. 2.3.
In summary, it is probably best to think of the diﬀerent wave functions as equivalent descriptions of the same physical reality, none of which is more fundamental than the other. This leads to the concept of the state space of a quantum mechanical system as an abstract vector space in which the state vector lies, while the various wave functions are the expansion coeﬃcients of this state vector with respect to some basis. Diﬀerent bases give diﬀerent wave functions, but the state vector is the sam-
e.
This was not the point of view in the early days of quantum mechanics, when ψ(r) was seen as a complex-valued ﬁeld on physical space, and before it was completely clear what the wave function of multiparticle systems should be. We will return to this earlier point of view when we take up the Dirac equation and ﬁeld theory, but that reconsideration will not change the basic concept of the state space for the quantum mechanical system, a complex vector space in which the state vector lies.
Thus, the mathematical formalism of quantum mechanics exhibits a kind of form invariance or covariance with respect to the set of observables one chooses to represent the states of a system. This view of quantum mechanics, and the transformation theory connected with changes of representation, was worked out in the early days of the quantum theory, notably by Dirac, Born, Jordan, von Neumann and others.
3. Dirac Ket Notation
Since none of the three Hilbert spaces has any claim over the other, it is preferable to use a notation that does not prejudice the choice among them. This is what the Dirac notation does. In the Dirac notation, a state of a system is represented by a so-called ket vector, denoted by | , which stands for any of the three wave functions discussed above, ψ(x), φ(p), or {cn}, assuming that

Notes 1: Mathematical Formalism

5

they are related by the transformations (2) and (5). It is customary to put a symbol into the ket to identify the state, to write, for example, |ψ [although the choice of the letter ψ seems to point to something special about the conﬁguration space wave function ψ(x), which there is not]. Some people think of a ket |ψ as simply another notation for a wave function on conﬁguration space, and I have even seen some authors write equations like

ψ(x) = |ψ .

(7)

But our point of view will be that the space of kets is yet another Hilbert space, an abstract space that is isomorphic to but distinct from any of the concrete Hilbert spaces of wave functions discussed above. Thus, we will never use equations like (7). I think this approach is appropriate in view of the physical postulates of quantum mechanics, which show how one can construct a Hilbert space out of the results of physical measurements. There is no need to start with wave functions. Therefore we-
 will now put wave functions aside, and discuss the mathematical properties of ket spaces. Later, in Notes 4, we will return to wave functions, in eﬀect deriving them from the ket formalism. In this set of notes, we use wave functions only for the purpose of illustrating some general features of Hilbert spaces, calling on your experience with them in a previous course in quantum mechanics.

4. Kets, Ket Spaces and Rays

Kets and ket spaces arise out of the physical postulates of quantum mechanics, which we will

discuss in detail later. For now we will just say enough to get started.

A basic postulate of quantum mechanics is that a given physical system is associated with a

certain complex vector space, which we will denote by E. The physical principles by which this vector

space is constructed will be discussed later, but for now we simply note that the properties of this

space such as its dimensionality are determined by the physics of the system under consideration.

For some systems, E is ﬁnite-dimensional (notably spin systems), while for others it is inﬁnite-

dimensional. The vectors of the space E are called kets, and they are denoted in the Dirac notation

by | , as discussed above. Since E is a complex vector space, the multiplication of kets by complex

numbers and the addition of kets is deﬁned. The product of a complex number c and a ket |ψ can

be written in either order,

c|ψ = |ψ c.

(8)

In addition, there exist physical principles that allow us to associate a deﬁnite (pure) state of a physical system with a ray in E. We will say more about this association later, when we will deﬁne what we mean by a pure state of a physical system, but for now we simply note that a ray in E is a 1-dimensional vector subspace of E, that is, it consists of kets |ψ related to some nonzero ket |ψ0 by a complex multiplicative factor, that is,

|ψ = c|ψ0 ,

(9)

6

Notes 1: Mathematical Formalism

for some complex number c. The kets |ψ in the ray diﬀer from one another only by normalization and overall phase, which have no physical signiﬁcance; thus, we say that a (pure) physical state corresponds to the ray (not to any particular ket in the ray).

5. The Dual Space and Bras

You are probably familiar with the fact that kets correspond to wave functions ψ(x), while bras correspond to complex conjugated wave functions ψ(x)∗. But if we are doing without wave functions

until we can properly derive them, how do we describe bras and the complex conjugation of kets?

The answer is the dual correspondence. Also, it would appear that ψ(x)∗ is just another wave function, so it should belong to the same

space of wave functions as ψ(x). But it turns out that there is great advantage in regarding kets

and bras as belonging to two diﬀerent spaces. Kets belong to the space E, while bras belong to the so-called dual space, denoted E∗.
If E is any (complex) vector space, then the dual space, denoted E∗, is the space of complex-

valued, linear operators that act on E. In the Dirac notation, such operators are called bras, and

are denoted |. (In mathematics, they are called forms, covectors or dual vectors.) As with kets, it

is customary to insert some symbol to identify a bra and distinguish it from other bras, such as α|.

In mathematical language, we write

α| : E → C,

(10)

which means that α| maps a ket into a complex number. To be a bra, the map must be linear. If |ψ is a ket, then the complex number that results by letting α| act on it can be written α|(|ψ ). Usually we drop the parentheses write the complex number simply as α|ψ , but if we wish to emphasize the interpretation of the bra as an operator acting on kets we will keep the parentheses.
Since the map is required to be linear, we have

α|(c1|ψ1 + c2|ψ2 ) = c1 α|(|ψ1 ) + c2 α|(|ψ2 ).

(11)

A bra, as a linear operator acting on kets, is not to be confused with the familiar linear operators used

in quantum mechanics, such as the Hamiltonian operator, which also act on kets. The distinction

is that a bra is a complex-valued operator, whereas the Hamiltonian and other such operators are

ket-valued operators.

It is easy to see how to deﬁne the product of a bra with a complex scalar, and the sum of two

bras; we simply set

(c α|)(|ψ ) = c α|(|ψ ),

(12)

and

( α1| + α2|)(|ψ ) = α1|(|ψ ) + α2|(|ψ ).

(13)

Therefore the set of all bras acting on a given ket space forms a vector space in its own right, which by deﬁnition is the dual space E∗. It is easy to show that if E is ﬁnite-dimensional, then

Notes 1: Mathematical Formalism

7

E∗ is also, and has the same dimension. If E is inﬁnite-dimensional, then the dual space E∗ is also inﬁnite-dimensional.
What we have said so far allows us to talk about bras, but not to convert a ket into a bra (the analog of the complex conjugation of wave functions). To do that we need to introduce the metric or scalar product on our ket space. In real, Euclidean vector spaces the metric is what allows us to measure distances, and from that, angles. This is an analogy to keep in mind while thinking about the metric in (complex) Hilbert spaces, because it provides useful geometrical interpretations.

6. The Scalar Product and Dual Correspondence We postulate the existence of a metric or scalar product g on E, which is a function

g:E×E →C

(14)

with certain properties. This notation means that g is a function that takes two kets and produces a complex number; for example, we will write g(|ψ , |φ ) for the complex number that results upon letting g act on kets |ψ and |φ . The postulated properties of g are the following. First, g is linear in its second operand and antilinear in its ﬁrst operand. Explicitly, this means

g(|ψ , c1|φ1 + c2|φ2 ) = c1g(|ψ , |φ1 ) + c2g(|ψ , |φ2 ), g(c1|ψ1 + c2|ψ2 , |φ ) = c∗1 g(|ψ1 , |φ ) + c∗2 g(|ψ2 , |φ ).

(15a) (15b)

(An antilinear function requires us to take the complex conjugate of the coeﬃcients when evaluating it on linear combinations of vectors.) Next, g is symmetric or Hermitian, which means

g(|ψ , |φ ) = g(|φ , |ψ )∗.

(16)

Third, g is positive deﬁnite, which means

g(|ψ , |ψ ) ≥ 0,

(17)

for all |ψ , with equality holding if and only if |ψ = 0. Note that by property (16), the left hand side of Eq. (17) is necessarily real.
Next, given the metric g, we can deﬁne the dual correspondence, which is a mapping that converts kets into bras. It is the map which in wave function language amounts to taking the complex conjuate of a wave function. We will denote the dual correspondence by DC; it is the map

DC : E → E∗.

(18)

If |ψ is a ket, then we will denote the bra corresponding to it under the dual correspondence by

ψ|, with the same identifying symbol. We deﬁne the bra ψ| in terms of its action on an arbitrary

ket |φ ; the deﬁnition is

ψ|(|φ ) = g(|ψ , |φ ).

(19)

8

Notes 1: Mathematical Formalism

The idea is that in the scalar product, we regard the ﬁrst argument as ﬁxed and the second as variable, which gives us a complex valued function of kets, which according to Eq. (15a) is linear. Thus, the function is a bra. By way of notation, we will denote the bra resulting from a given ket under the dual correspondence by a dagger, so that if

DC : |ψ → ψ|,

(20)

then we will write

ψ| = (|ψ )†.

(21)

We will say that ψ| is the Hermitian conjugate of |ψ . We note that since the scalar product is antilinear in its ﬁrst operand, the dual correspondence is antilinear, that is,

(c1|ψ1 + c2|ψ2 )† = c∗1 ψ1| + c∗2 ψ2|.

(22)

If E is ﬁnite-dimensional, then it is easy to prove that the dual correspondence is one-to-one and onto, so that every bra is in fact the Hermitian conjugate of some ket. This follows from the postulated properties of the metric. In inﬁnite-dimensional spaces, this is true only if certain restrictions are placed on the bra space. We will ignore such technicalities, and proceed as if the dual correspondence is always one-to-one and onto (which, with the right understandings, it is for a Hilbert spa-
ce). This means that every bra is the dagger of some unique ket, so the dual correspondence has an inverse. We will denote the inverse with the same dagger notation, so that

|ψ = ( ψ|)†,

(23)

and so that

(|ψ )†† = |ψ .

(24)

We now simplify the notation for the scalar product by dropping the parentheses on the left hand side of Eq. (19). That is, we write

ψ|(|φ ) = g(|ψ , |φ ) = ψ|φ .

(25)

With this notational change, we can rewrite properties (16) and (17) of the metric as

ψ|φ = φ|ψ ∗,

(26)

and

ψ|ψ ≥ 0,

(27)

for all |ψ , with equality if and only if |ψ = 0. The complex number ψ|φ is sometimes called the inner product or scalar product of |ψ and |φ . Using the notation shown in Eq. (25), we can henceforth dispense with the g-notation when talking about scalar products.

Notes 1: Mathematical Formalism

9

7. The Schwarz Inequality

We can now prove an important theorem, namely the Schwarz inequality. We are interested in this inequality for complex vector spaces, but it is also true in real vector spaces with a positive deﬁnite inner product, that is, in Euclidean spaces. There it is equivalent to the geometrical fact that the shortest distance between two points is a straight line. The Schwarz inequality is important in quantum mechanics because it is used to prove the Heisenberg uncertainty relations.
The Schwarz inequality says that

| ψ|φ |2 ≤ ψ|ψ φ|φ ,

(28)

for all |ψ and |φ , with equality if and only if |ψ and |φ are linearly dependent, that is, if they lie in the same ray. To prove the theorem, we set

|α = |ψ + λ|φ ,

(29)

where λ is a complex number, and we use Eq. (27) to write,

α|α = ψ|ψ + λ ψ|φ + λ∗ φ|ψ + |λ|2 φ|φ ≥ 0.

(30)

This is true for all kets |ψ and |φ , and all complex numbers λ. Since the Schwarz inequality is obviously true if |φ = 0, we consider the case |φ = 0, and we set

λ=−

φ|ψ φ|φ

,

(31)

so that Eq. (30) becomes

ψ|ψ

−

|

ψ|φ φ|φ

|2

≥ 0,

(32)

which is equivalent to Eq. (28). Finally, it is easy to show that Eq. (32) becomes an equality if

|ψ = c|φ for any complex number c, and conversely, if Eq. (32) is an equality, then α|α = 0,

which implies |α = 0, or |ψ = −λ|φ . Therefore the equality holds in Eq. (28) if and only if |ψ

and |φ are linearly dependent.

8. Operators

Next we discuss operators. Usually in quantum mechanics we use only linear or antilinear

operators. A linear operator L and an antilinear operator A are both mappings from the ket space

into itself,

L : E → E, A : E → E,

(33)

but they have diﬀerent properties when acting on linear combinations of kets. In particular, we have

L(c1|ψ1 + c2|ψ2 ) = c1L|ψ1 + c2L|ψ2 , A(c1|ψ1 + c2|ψ2 ) = c∗1 A|ψ1 + c∗2 A|ψ2 .

(34a) (34b)

10

Notes 1: Mathematical Formalism

The only antilinear operator of interest in nonrelativistic quantum mechanics is the time-reversal operator, which we will discuss later. For now we ignore antilinear operators, and concentrate exclusively on linear operators.
Linear operators themselves can be multiplied by complex numbers and added, so they form a complex vector space in their own right. Linear operators can also be multiplied with one another; the product AB means, apply B ﬁrst, then A (to some ket). The multiplication is associative,

A(BC) = (AB)C,

(35)

for any linear operators A, B, C, but it is not commutative, that is

AB = BA

(36)

in general. The lack of commutativity of two linear operators A and B is measured by their com-

mutator, deﬁned by

[A, B] = AB − BA.

(37)

For reference, we also deﬁne the anticommutator,

{A, B} = AB + BA.

(38)

We use the same curly bracket notation for the anticommutator as for the Poisson bracket in classical mechanics (see Sec. B.21). It will usually be clear from context which is intended.
A linear operator A may possess an inverse, A−1; if it exists, it satisﬁes

AA−1 = A−1A = 1,

(39)

where the identity operator is simply denoted by 1. In ﬁnite-dimensional spaces, if A−1 exists, then it is both a right- and a left-inverse; but in inﬁnite dimensional spaces, some operators may possess a right-inverse but not a left-inverse, or vice versa. When all indicated inverses exist, we have

(AB)−1 = B−1A−1.

(40)

9. Rules for Commutators

The commutator [ , ] obeys the following properties, which are trivial consequences of the deﬁnition (37). In the following, capital letters are linear operators and lower case letters are complex numbers. First, the commutator is linear in both operands,

[c1A1 + c2A2, B] = c1[A1, B] + c2[A2, B], (41)
[A, c1B1 + c2B2] = c1[A, B1] + c2[A, B2],

it is antisymmetric,

[A, B] = −[B, A],

(42)

Notes 1: Mathematical Formalism

11

and it obeys the Jacobi identity,

[A, [B, C]] + [B, [C, A]] + [C, [A, B]] = 0.

(43)

Any bracket operation [ , ] deﬁned on any vector space (not just spaces of linear operators) that satisﬁes properties (41)–(43) qualiﬁes that vector space as a Lie algebra.
In addition, the commutator satisﬁes the following properties, sometimes referred to as the derivation property or Leibnitz rule:
[AB, C] = A[B, C] + [A, C]B, (44)
[A, BC] = B[A, C] + [A, B]C.
Calculations in quantum mechanics often require one to reduce complicated commutators into simpler ones that are known. Rules (44) are especially useful for this purpose. It is interesting that properties (41)–(44) are also valid for the Poisson bracket in classical mechanics [except that the ordering of the factors in Eq. (44), which must be respected in quantum mechanics, is immaterial in classical mechanics]. See Sec. B.21.

10. The Action of Operators on Bras

The operators we have introduced begin life as operators that act on kets, mapping them into other kets; but the deﬁnition of these operators is easily extended to allow them to act on bras, whereupon they produce other bras. If ψ| is a bra and A an operator, we denote the action of A on ψ| by ψ|A, with the bra to the left. That is, we think of A as acting on kets to the right, but on bras to the left. The deﬁnition of ψ|A is as follows. Since ψ|A is supposed to be a new bra, it is speciﬁed by its-
 action on an arbitrary ket, say, |φ ; the deﬁnition is given by writing

( ψ|A)(|φ ) = ψ|(A|φ ).

(45)

Since by this deﬁnition the ordering of the parentheses is immaterial, it is customary to drop them,

and to write simply

( ψ|A)(|φ ) = ψ|A|φ .

(46)

Thus, we can think of A as acting either to the left or the right in the “matrix element” ψ|A|φ .

11. The Outer Product

If |α and |β are kets, then we can deﬁne a linear operator denoted by |α β|, whose action on

an arbitrary ket |ψ is given by

(|α β|)|ψ = |α β|ψ ,

(47)

where the right-hand side is the product of the complex number β|ψ times the ket |α . The action

of |α β| on bras is given by

ψ|(|α β|) = ψ|α β|.

(48)

12

Notes 1: Mathematical Formalism

This is not the deﬁnition of |α β|, which is given by Eq. (47), rather it is a simple consequence of that deﬁnition. Its proof will be left as an exercise. The operator |α β| can be viewed as the tensor product of the ket |α with the bra β|; this kind of product is similar to the dyadic product used in ordinary vector or tensor analysis. The operator |α β| is called the outer product of |α and |β .

12. Bases and Orthonormal Bases; Resolutions of the Identity

As in any vector space, a basis is a set of linearly independent vectors that span the entire space,

and the number of such vectors is the dimension of the space. This is a familiar concept in ﬁnite

dimensions. In an inﬁnite-dimensional space, we obviously need an inﬁnite number of basis vectors,

but is the basis countably or uncountably inﬁnite? That is, can we label the basis vectors with a

discrete index, or do we need continuous indices as well? As it turns out, it is one the mathematical

properties of Hilbert spaces that they always possess a countable basis, that is, a set of linearly

independent, normalizable vectors that span the space and can be indexed n = 1, 2, 3, . . ., or by

some other such discrete indexing scheme. This does not mean that every basis we encounter will

be labeled by a discrete index, only that such bases always exist. In fact, in practice in quantum

mechanics we frequently encounter “bases” with continuous indices as well, but the basis vectors

of the continuum are not normalizable and do not belong to Hilbert space. We will say more

about these kinds of bases later, and for now proceed with the case of discrete bases, consisting of

normalizable vectors. As an example, you may think of the harmonic oscillator wave functions un(x) in one-dimensional quantum mechanics.

Let us denote a discrete basis in a ket space by {|n , n = 1, . . .}. We say the basis is orthonormal

if

n|m = δmn.

(49)

We usually use orthonormal bases in quantum mechanics, but non-orthonormal bases are useful sometimes as well (if much more diﬃcult to work with). In any basis, an arbitrary ket |ψ can be represented as a linear combination of the basis vectors,

|ψ = cn|n = |n cn,

(50)

n

n

and if the basis is orthonormal, the expansion coeﬃcients are given by

cn = n|ψ .

(51)

Substituting this into Eq. (50), we have

|ψ = |n n|ψ = |n n| |ψ ,

(52)

n

n

or, since |ψ is arbitrary,

1 = |n n|,

(53)

n

Notes 1: Mathematical Formalism

13

where 1 is the identity operator. This is the resolution of the identity associated with the orthonormal basis {|n }.
Resolutions of the identity associated with bases with continuous indices will be discussed below.

13. Hermitian Conjugation

We have already deﬁned Hermitian conjugation (denoted by the dagger †) of bras and kets. We now deﬁne Hermitian conjugation of operators. If A : E → E is a linear operator, then A† : E → E is another linear operator, deﬁned by its action on an arbitrary ket |ψ by

A†|ψ = ( ψ|A)†.

(54)

We should note that ψ| is an antilinear function of |ψ (because of the dual correspondence), but

when we do the (second) Hermitian conjugation indicated on the right hand side of Eq. (54), the result is a linear function of |ψ . Thus, A† is a linear operator.

There are a number of immediate consequences of this deﬁnition, which we list here. The proofs

are left as simple exercises.

φ|A†|ψ = ψ|A|φ ∗,

(55)

(A†)† = A,

(56)

(c1A1 + c2A2)† = c∗1 A†1 + c∗2 A†2,

(57)

(AB)† = B†A†,

(58)

(|α β|)† = |β α|.

(59)

We have now deﬁned the action of the Hermitian conjugate operation † on kets, bras, and operators. It is convenient also to deﬁne the action of the Hermitian conjugate on complex numbers as being identical with ordinary complex conjugation. With this understanding, we can state a general rule, which is illustrated in several various ways in the results above, which says that the Hermitian conjugate of a product of objects (kets, bras, operators, complex numbers) is given by reversing the order of -
the objects and replacing each by its Hermitian conjugate. The products involved can be either ordinary multiplication by scalars, operator products, or inner or outer (tensor) products. We only require that the original product be meaningful.

14. Hermitian, Anti-Hermitian and Unitary Operators

We say that an operator A is Hermitian if it is equal to its own Hermitian conjugate,

A† = A.

(60)

An equivalent deﬁnition is

ψ|A|φ = φ|A|ψ ∗,

(61)

14

Notes 1: Mathematical Formalism

for all kets |ψ and |φ . Similarly, an operator is said to be anti-Hermitian if it satisﬁes

A† = −A.

(62)

An arbitrary operator is in general neither Hermitian nor anti-Hermitian, but can always be uniquely decomposed into a sum of a Hermitian and an anti-Hermitian operator:

A

=

A + A† 2

+

A

− 2

A†

.

(63)

If A is Hermitian, then the matrix element ψ|A|ψ is necessarily real, for all choices of |ψ , in accordance with Eq. (55). We say that a Hermitian operator is positive deﬁnite if it satisﬁes

ψ|A|ψ > 0,

(64)

for all nonzero kets |ψ . Similarly, we say that A is nonnegative deﬁnite if

ψ|A|ψ ≥ 0,

(65)

for all kets |ψ . We have not discussed eigenvalues yet, but a positive deﬁnite, Hermitian operator is one whose
eigenvalues are all positive, while a nonnegative deﬁnite, Hermitian operator is one whose eigenvalues are all nonnegative.
A simple but important theorem is the following:

Theorem 1. The product of two Hermitian operators is Hermitian if and only if they commute.

The (trivial) proof is left as an exercise.

An operator U is unitary if

U U † = U †U = 1,

(66)

so that

U −1 = U †.

(67)

The product of two unitary operators is always unitary.

15. Eigenvalues and Eigenkets; the Spectrum of an Operator

If A is an operator acting on E and there exists a nonzero ket |u and complex number a such

that

A|u = a|u ,

(68)

then we say that |u is an eigenket of A and a is a (right) eigenvalue. Similarly, if there exists a nonzero bra v| and a complex number b such that

v|A = b v|,

(69)

Notes 1: Mathematical Formalism

15

then we say that v| is an eigenbra of A and b is a (left) eigenvalue. In ﬁnite dimensions, every right eigenvalue is also a left eigenvalue, but in inﬁnite dimensions this need not be true.
We deﬁne the spectrum of an operator as the set of its eigenvalues, seen as a subset of the complex plane. (If necessary, we can distinguish between a left and right spectrum.) In ﬁnite dimensions, this is a set of discrete points in the complex plane.

Im E
(a)

Im E
(b)

Re E

Re E

(c)

Im E

(d)

Im

Re E

Re

Egnd

Fig. 1. Examples of spectra of operators. Part (a), the harmonic oscillator; part (b), the free particle; part (c), the hydrogen atom; part (d), a ﬁnite-dimensional unitary operator.

Some examples of the spectra of familiar operators in quantum mechanics are illustrated in

Fig. 1. In part (a) of the ﬁgure we have the spectrum of the harmonic oscillator, whose eigenvalues

En

=

(n +

1 2

)h¯ ω

are

shown

as

spots

on

the

real

energy

axis.

This is an example of a discrete

spectrum. Only real energies are physically meaningful, but we show the whole complex energy

plane because in general eigenvalues of operators are complex. (We will see complex energies play

a role in scattering and resonance theory later in the course.) In part (b) we have the spectrum of

the free particle Hamiltonian H = p2/2m. It consists of all real energies E ≥ 0, indicated by the

thick line on the positive real axis. This is an example of the continuous spectrum. In part (c) we

have the spectrum of the hydrogen atom. It consists of a discrete set of spots at negative energy,

representing the bound states, an inﬁnite number of which accumulate as we approach E = 0. As

with the free particle, there is a continuous spectrum above E = 0. Altogether, the hydrogen atom

has a mixed spectrum (discrete and continuous). Finally, in part (d) we have the spectrum of a

unitary operator on a ﬁnite-dimensional space. Its eigenvalues are phase factors that lie on the unit

16

Notes 1: Mathematical Formalism

circle in the complex plane.
E2
E1

E2 E1

Fig. 2. An operator A acting on ket space E has eigen- Fig. 3. In the case of a Hermitian operator, the eigenspa-

spaces En, associated with its discrete eigenvalues an.

ces are orthogonal.

In the case of the discrete spectrum, the set of kets |u that satisfy Eq. (68) for a given eigenvalue a forms a vector subspace of the ket space. This subspace is at least 1-dimensional, but the dimensionality may be higher (even inﬁnite, on inﬁnite-dimensional vector spaces). We will call this subspace the eigenspace of the operator corresponding to the given eigenvalue. If the eigenspace is 1-dimensional, then we say the eigenvalue is nondegenerate, otherwise, that it is degenerate. We refer to -
the dimensionality of the eigenspace as the order of the degeneracy. This is the same as the number of linearly independent eigenvectors of a given eigenvalue. We can imagine the eigenspaces of the discrete spectrum as illustrated in Fig. 2, which shows the eigenspaces for a two-fold degenerate eigenvalue a1 and a nondegenerate eigenvalue a2 (dim E1 = 2, dim E2 = 1).

16. The Case of Hermitian Operators

In general, there is no simple relation between the eigenkets and eigenbras of an operator, even in ﬁnite dimensions. But if an operator A is Hermitian, then there are a number of simpliﬁcations. We speak for the time being of the discrete spectrum.
First, the eigenvalue a is real, so the spectrum in the complex eigenvalue plane is a subset of the real axis. To prove this we take A|u = a|u and multiply on the left by u|, obtaining

u|A|u = a u|u .

(70)

Now taking the complex conjugate of this, the left-hand side goes into itself, while the right becomes

a∗ u|u . Thus we have

(a − a∗) u|u = 0.

(71)

Since |u = 0, this implies a = a∗.

Second, if A|u = a|u , then u|A = a u|, so that the eigenbras are the Hermitian conjugates of the eigenkets, and the left and right eigenvalues are equal.

Notes 1: Mathematical Formalism

17

Third, any two eigenkets corresponding to distinct eigenvalues are orthogonal. We state this ﬁnal property as a theorem:

Theorem 2. The eigenspaces of a Hermitian operator corresponding to distinct eigenvalues are orthogonal. This means that any pair of vectors chosen from the two eigenspaces are orthogonal.

To prove this, we let A|u = a|u and A|u′ = a′|u′ for two eigenkets |u and |u′ and two eigenvalues a and a′. Multiplying the ﬁrst equation by u′| and the second by u|, we obtain
u′|A|u = a u′|u , (72)
u|A|u′ = a′ u|u′ .

Now taking the Hermitian conjugate of the second equation and subtracting from the ﬁrst, we ﬁnd

(a − a′) u|u′ = 0,

(73)

showing that either a = a′ or else u|u′ = 0. In view of this theorem, Fig. 3 gives a more accurate picture of the eigenspaces of a Hermitian
operator than does Fig. 2.

17. Completeness

In looking at Figs. 2 and 3 we may imagine that the space in which the eigenspaces lie is

three dimensional, so the two eigenspaces (of dimension 2 and 1) “ﬁll up” the whole space. Do the

eigenspaces of an operator always “ﬁll up” the space upon which the operator acts? An operator

that does this is said to be complete. The answer is no, not even in ﬁnite dimensions. For example,

the matrix

01 00

(74)

possesses only one eigenvector, namely,

1 0

,

(75)

so it has only a single one-dimensional eigenspace. The matrix (74) is not Hermitian. On the other hand, in ﬁnite dimensions every Hermitian operator is complete. Thus, the sum
of the dimensionalities of the eigenspaces is the dimension of the whole space. Since the eigenspaces are orthogonal, by choosing an orthonormal basis in each eigenspace we obtain an orthonormal eigenbasis for the whole space, that is, a set of orthonormal basis vectors that are also eigenvectors of the operator. This is a consequence of the standard methods taught in linear algebra courses for diagonalizing Hermitian matrices, which explicitly produce the orthonormal eigenbasis.
Notice that the orthonormal eigenbasis is not unique. First, if there is any degeneracy (any eigenspace with dimensionality ≥ 2), then obviously there are an inﬁnite number of ways of choosing

18

Notes 1: Mathematical Formalism

an orthonormal basis in that eigenspace. But even in a nondegenerate (one-dimensional) eigenspace, a normalized eigenvector is only determined to within a phase factor.
These nice properties of Hermitian operators are shared by a larger class of normal operators, which will be studied in a homework exercise. Occasionally in quantum mechanics we must deal with the eigenvectors of non-Hermitian operators and worry about their completeness properties. This happens, for example, in the theory of the Dirac equation.

18. The Direct Sum; Orthonormal Eigenbases

Suppose we have some vector space E, and suppose E1 and E2 are vector subspaces of E that have no element in common except 0, such as the spaces we see in Figs. 2 and 3. Then we say that the direct sum of E1 and E2, denoted E1 ⊕ E2, is the set of vectors that can be formed by taking linear combinations of vectors in the two subspaces. That is,

E1 ⊕ E2 = {|ψ1 + |ψ2 such that |ψ1 ∈ E1, |ψ2 ∈ E2}.

(76)

The direct sum is itself a vector subspace of E. One can also think of the direct sum as the span of the set of vectors formed when we throw together a basis in E1 with a basis in E2. Thus, we have

dim(E1 ⊕ E2) = dim E1 + dim E2.

(77)

This is not the most abstract deﬁnition of the direct sum, but it is the one we will use. We can now express the completeness property in ﬁnite dimensions in terms of the direct sum.
Let A be an operator acting on a ﬁnite-dimensional space E. Let the eigenvalues of A be a1, . . . , aN , and let En be the n-th eigenspace, that is,

En = {|u such that A|u = an|u }.

(78)

Then A is complete if

E1 ⊕ E2 ⊕ . . . ⊕ EN = E.

(79)

In ﬁnite dimensions, any Hermitian A is complete, and moreover it decomposes the original Hilbert space E into a collection of orthogonal subspaces, the eigenspaces of the operator.
Let us choose an orthonormal basis, say |nr , in each of the subspaces En, where r is an index labeling the orthonormal vectors in the subspace, so that r = 1, . . . , dim En. This can always be done, in many ways. Then, since the various subspaces are themselves orthogonal, the collection of vectors |nr for all n and r forms an orthonormal basis on the entire space E, so that

nr|n′r′ = δnn′ δrr′ .

(80)

These kets are eigenkets of A,

A|nr = an|nr ,

(81)

Notes 1: Mathematical Formalism

19

that is, they constitute an orthonormal eigenbasis. Furthermore, we have the resolution of the

identity,

1 = |nr nr|,

(82)

nr

corresponding to the chosen orthonormal eigenbasis of the complete Hermitian operator A. Also,

the operator itself can be written in terms of this eigenbasis,

A = an|nr nr|.

(83)

nr

This follows if we let both sides of this equation act on a basis vector |n′r′ , whereupon the answers are the same. By linear superposition, the same applies to any vector. Thus, both sides are the same operator.

19. Spectral Properties in Inﬁnite Dimensions

Here we make some remarks about inﬁnite-dimensional ket spaces and illustrate the kinds of new phenomena that can arise.
In inﬁnite dimensions, there exist Hermitian operators that are not complete. To cover this case, we deﬁne a complete Hermitian operator as an observable. This terminology is related to the physical interpretation of observables in quantum mechanics, as explained in Notes 2. In practice we seldom deal with incomplete Hermitian operators in quantum mechanics.
We now use examples from one-dimensional wave mechanics to illustrate some phenomena that can occur in inﬁnite dimensions. The Hilbert space of wave functions in one dimension consists of normalizable functions ψ(x) with the scalar product,

ψ|φ = +∞ dx ψ∗(x)φ(x).

(84)

−∞

We will present four examples of operators and their spectral properties. The ﬁrst is the one-dimensional harmonic oscillator with Hamiltonian,

H

=

p2 2m

+

mω2x2 2

,

(85)

which is a Hermitian operator. The energy eigenvalues are

En

=

(n

+

1 2

)h¯ ω ,

(86)

so that the spectrum consists of a discrete set of isolated points on the positive energy axis, as illustrated in Fig. 1(a). The eigenfunctions un(x) are normalizable (they belong to Hilbert space) and orthogonal for diﬀerent values of the energy. Thus they can be normalized so that

n|m = dx u∗n(x)um(x) = δmn.

(87)

20

Notes 1: Mathematical Formalism

These eigenfunctions are nondegenerate and complete, so we have a resolution of the identity,

∞

1 = |n n|.

(88)

n=0

Not all Hermitian operators on an inﬁnite dimensional space have a discrete spectrum. As a

second example, consider the momentum operator in one dimension, which is pˆ = −i¯h d/dx. (We

put a hat on the operator, to distinguish it from the eigenvalue p.) The momentum is a Hermitian

operator (see below). The eigenvalue-eigenfunction equation for this operator is

pˆup(x)

=

pup(x)

=

−i¯h

dup dx

,

(89)

where up(x) is the eigenfunction with eigenvalue p. This equation has a solution for all values, real

and complex, of the parameter p,

up(x) = c eipx/h¯ ,

(90)

where c is a constant. If p has a nonzero imaginary part, then up(x) diverges exponentially as x → ∞ or x → −∞, so the “eigenfunction” is rather badly behaved. It is certainly not normalizable in this

case. But even if p is purely real, the function up(x) is still not normalizable, so it does not represent a physically allowable state (a vector of Hilbert space). The momentum operator pˆ does not have

any eigenvectors that belong to Hilbert space, much less a basis.

One way to handle this case, which provides a kind of generalization of the nice situation we

ﬁnd in ﬁnite dimensions, is to regard every real number p as an eigenvalue of pˆ, which means that

the spectrum of p is the entire real axis (in the complex p-plane). See Fig. 1(b) for an illustration

of the spectrum of the free particle Hamiltonian, which is the portion E ≥ 0 of the real axis. Recall

that in ﬁnite dimensions a Hermitian operator has only real eigenvalues. This is an example of the

continuous spectrum. Also, the eigenfunctions that result in this case are orthonormal and complete

in a certain sense, but as noted they do not belong to Hilbert space. We obtain an orthonormal

basis, but it consists of vectors that lie outside Hilbert space.

We adopt a normalization of the eigenfunctions (that is, we choose the constant c in Eq. (90))

so that

up(x)

=

e√ipx/h¯ , 2π¯h

(91)

because this implies a convenient normalization relation,

p0|p1 =

dx u∗p0 (x) up1 (x) =

dx 2π¯h

ei(p1 −p0 )x/h¯

=

δ(p0

−

p1),

(92)

where we write the function up(x) in ket language as |p (giving only the eigenvalue). The eigenfunctions up(x) of the continuous spectrum are orthonormal only in the δ-function sense. They are also complete, in the sense that an arbitrary wave function ψ(x) can be expanded as a linear combination

of them, but since they are indexed by a continuous variable, the linear combination is an integral,

not a sum. That is, given ψ(x), we can ﬁnd expansion coeﬃcients φ(p) such that

ψ(x) =

∞
dp φ(p) up(x) =
−∞

∞ √dp eipx/h¯ φ(p). −∞ 2π¯h

(93)

Notes 1: Mathematical Formalism

21

We know this because Eq. (93) is essentially a Fourier transform, whose inverse is given by

φ(p) =

√dx e−ipx/h¯ ψ(x) = 2π¯h

dx u∗p (x) ψ(x) = p|ψ .

(94)

We see that the “momentum space wave function” φ(p) is otherwise the scalar product p|ψ .

Another example of an operator with a continuous spectrum is the position operator xˆ (again

using hats to denote an operator). This operator acting on wave functions means, multiply by x.

If we denote the eigenfunction of this operator with eigenvalue x0 by fx0(x), then the eigenvalue equation is

xˆfx0 (x) = xfx0 (x) = x0fx0 (x),

(95)

or,

(x − x0)fx0 (x) = 0.

(96)

This implies either x = x0 or fx0(x) = 0, so fx0(x) is a “function” that is zero everywhere except possibly at x0. We interpret this situation in terms of the Dirac delta function, by writing the solution as

fx0(x) = δ(x − x0).

(97)

Again, the spectrum is continuous and occupies the entire real axis; again, the “eigenfunctions” are of inﬁnite norm and obey the continuum orthonormality condition,

x0|x1 = dx δ(x − x0)δ(x − x1) = δ(x0 − x1),

(98)

where we write the function fx0(x) in ket language as |x0 (giving only the eigenvalue). In addition, we have the identity,

ψ(x0) = dx δ(x − x0) ψ(x) = dx fx∗0(x) ψ(x) = x0|ψ .

(99)

We see that the wave function ψ(x0) is otherwise the scalar product x0|ψ . Substituting this back into Eq. (99) and using Eq. (98), we have

x0|ψ = dx x0|x x|ψ ,

or, since x0 is arbitrary,

|ψ = dx |x x|ψ .

Finally, since |ψ is arbitrary, we can strip it oﬀ, leaving

(100) (101)

1 = dx |x x|,

(102)

the resolution of the identity in the case of the continuous eigenbasis of the position operator.

22

Notes 1: Mathematical Formalism

We can also get the resolution of the identity in the momentum basis. Since ψ(x) = x|ψ for any ψ, we have up(x) = x|p . Substituting these and Eq. (94) into Eq. (93), we have

x|ψ = dp x|p p|ψ ,

(103)

or, stripping oﬀ both x| on the left and |ψ on the right,

1 = dp |p p|.

(104)

Equations (102) and (104) illustrate resolutions of the identity in the case of the continuous spectrum.
V (x)

x

Fig. 4. A potential in 1-dimension with both bound and unbound eigenstates.

For a ﬁnal example, let us consider the 1-dimensional potential illustrated in Fig. 4, which has a well followed on the right by an inﬁnitely high barrier. The purpose of the barrier is simply to make the unbound energy eigenfunctions nondegenerate, which simpliﬁes the following discussion. In a potential such as this, we expect there to be some number of bound eigenfunctions un(x) in the potential well, which have negative energies En < 0. These eigenfunctions are normalizable, because the wave f-
unctions die oﬀ exponentially outside the well, and we can normalize them according to n|m = δnm, as with the discrete spectra discussed above. But there will also be unbound eigenfunctions uE(x) corresponding to any energy E ≥ 0; these eigenfunctions become free particle wave functions at large negative x, and therefore have inﬁnite norm. We normalize them according to E|E′ = δ(E − E′). Finally, all bound states are orthogonal to all continuum states, n|E = 0. Thus, the completeness relation in t-
his case has the form,

∞

1 = |n n| + dE |E E|.

n

0

(105)

In this case we have an example of a mixed spectrum, with some discrete and some continuous eigenvalues. The spectrum consists of a discrete set of points En on the negative energy axis, plus the entire positive energy axis E ≥ 0.

Notes 1: Mathematical Formalism

23

More complicated kinds of spectra also occur. It is possible to have discrete states imbedded in the continuum, not in real physical problems but in approximations to them, in which certain interactions are switched oﬀ. When all the physics is taken into account, such discrete states typically move oﬀ the real axis, and become resonances with a ﬁnite lifetime. Examples of this occurs in the autoionizing states of helium, or in the radiative decay of excited atomic states. It is also possible to ha-
ve a discrete spectrum in which the eigenvalues are not isolated, as in the random potentials that occur in the theory of Anderson localization, an important topic in solid state physics.
20. Generalizations about Spectra, Eigenspaces and Eigenbases
On a ﬁnite-dimensional Hilbert space, all Hermitian operators have a discrete spectrum (and they are moreover complete). The continuous and more complicated types of spectra arise only in the inﬁnite dimensional case.
In the inﬁnite dimensional case, each eigenvalue of the discrete spectrum corresponds to a deﬁnite eigenspace, a subspace of the Hilbert space consisting of normalizable eigenvectors of the Hermitian operator in question. If such an eigenspace is ﬁnite dimensional, then it possesses a ﬁnite, discrete basis of normalizable eigenvectors, as does any ﬁnite-dimensional Hilbert space. If an eigenspace of the discrete spectrum is inﬁnite dimensional, then it is an inﬁnite dimensional subspace of a Hilbe-
rt space and is therefore an inﬁnite dimensional Hilbert space in its own right. This means that it is possible to choose a discrete basis of normalizable vectors that span this space, but that it may be convenient in practice to choose other types of bases, such as a continuous basis, consisting of unnormalizable vectors outside Hilbert space, or a mixed basis, or other possibilities.
An example of an inﬁnite dimensional eigenspace of an operator with a discrete spectrum is given by the parity operator acting on wave functions ψ(x) in one dimension. The two eigenspaces consist of wave functions that are even and odd under x → −x, corresponding to the eigenvalues +1 and −1 of the parity operator, and both are inﬁnite dimensional.
In the continuous spectrum, there is no subspace of the Hilbert space corresponding to a given eigenvalue. For example, in the case of the free particle in one dimension with Hamiltonian H = p2/2m, for a given E > 0 there are two linearly independent eigenfunctions, eikx and e−ikx, where E = ¯h2k2/2m. But these eigenfunctions are not normalizable, and do not belong to Hilbert space. Since there is no linear combination of these eigenfunctions that is normalizable, they do not specify a subspace of-
 Hilbert space. On the other hand, any interval in the continuous spectrum does correspond to a subspace of the Hilbert space. This subspace consists of normalizable vectors that can be represented as linear combinations of the unnormalizable eigenvectors whose eigenvalues lie in the given interval.
For example, let I = [p0, p1] be an interval of the momentum axis. Then normalizable wave functions ψ(x) whose Fourier transform φ(p) vanishes outside the interval I form a subspace of the Hilbert space of normalizable wave functions ψ(x).
Concepts like this are familiar in electronics. A circuit that passes a signal in a certain frequency

24

Notes 1: Mathematical Formalism

range [ω0, ω1] while rejecting frequency components outside that range is analogous to a projection operator in quantum mechanics that projects onto a certain interval of the momentum axis [p0, p1]. The main diﬀerence is that one works in the time domain and the other in the spatial domain [when acting on wave functions ψ(x)].
The concept of a subspace corresponding to an interval of the continuous spectrum plays a role in the measurement postulates of quantum mechanics, as we will see in Notes 2.

21. Proving of Hermiticity of the Momentum

To show that the momentum operator pˆ is Hermitian on the Hilbert space of wave functions ψ(x) with scalar product (84), we appeal to the deﬁnition of Hermiticity in the form (61). Letting ψ(x) and φ(x) be two wave functions, we have

ψ|pˆ|φ =

dx ψ∗

−i¯h

∂φ ∂x

=

dx

−i¯h

∂ ∂x

(ψ∗φ) +

dx

i¯h

∂ψ∗ ∂x

φ,

(106)

by integration by parts. The ﬁrst integral vanishes if ψ and φ go to zero as x → ±∞, something we

normally expect for normalizable wave functions (but see Sec. 29). The ﬁnal integral is

dx φ∗

−i¯h

∂ψ ∂x

∗ = φ|pˆ|ψ ∗,

(107)

which completes the proof. A similar proof can be given for Hamiltonians of the form H = p2/2m + V (x). More simply, once we know that xˆ and pˆ are Hermitian, we can use the general rules presented in these notes (for example, Eq. (58) and Sec. 25)) to conclude that the sum of any real function of xˆ and any real function of pˆ is Hermitian.

22. Orthonormality and Completeness in the General (Degenerate) Case

We return now to the general case of a complete Hermitian operator A (an observable) acting on an inﬁnite-dimensional Hilbert space. In general, the spectrum consists of a discrete part, with eigenvalues an, and a continuous part, with eigenvalues a(ν) that are functions of some continuous variable ν. (We could choose ν = a, but sometimes it is convenient to use another continuous parameter upon which the eigenvalue depends. For example, we may wish to use the momentum p instead of the energy E to-
 parameterize continuum energy eigenvalues and eigenfunctions.) In addition, we must in general introduce another index r to resolve degeneracies in degenerate subspaces; for simplicity we will assume that r is a discrete index, although in some problems this would be continuous, too. Then the orthonormality conditions have the form,

nr|n′r′ = δnn′ δrr′, nr|νr′ = 0, νr|ν′r′ = δ(ν − ν′) δrr′ ,

(108)

Notes 1: Mathematical Formalism

25

and the completeness relation has the form,

1 = |nr nr| + dν |νr νr|.

nr

r

(109)

As a speciﬁc example of these relations, consider the hydrogen atom in the electrostatic model, in which we neglect the electron spin. The bound state wave functions are ψnℓm(r) in the usual notation, which we write in ket language as |nℓm . We normalize these so that nℓm|n′ℓ′m′ = δnn′ δℓℓ′ δmm′. In addition, there are unbound (and unnormalizable) eigenfunctions of energy E ≥ 0, which we write in ket language as |Eℓm . We normalize these so that Eℓm|E′ℓ′m′ = δ(E − E′)δℓℓ′ δmm′. Also, the bound sta-
tes are orthogonal to the unbound states, nℓm|Eℓ′m′ = 0. Then the completeness relation has the form,

∞

1 = |nℓm nℓm| + dE |Eℓm Eℓm|.

nℓm

0

ℓm

(110)

The generalized orthonormality and completeness relations we have just presented are examples of an important theorem, which we now quote:

Theorem 3. An observable always possesses an orthonormal eigenbasis.
This eigenbasis must include states of inﬁnite norm, if the observable possesses a continuous spectrum.

23. Simultaneous Eigenbases of Commuting Observables
Next we turn to an important theorem, applications of which will occur many times in this course:

Theorem 4. Two observables possess a simultaneous eigenbasis if and only if they commute. This eigenbasis may be chosen to be orthonormal. By extension, a collection of observables possesses a simultaneous eigenbasis if and only if they commute.

For simplicity we will work on a ﬁnite-dimensional Hilbert space E. We begin with the case of

two observables. In the ﬁrst part of the proof, we assume we have two Hermitian operators A, B

that commute. We wish to prove that they possess a simultaneous eigenbasis.

Consider the n-th eigenspace En of the operator A, and let |u be a eigenket in this eigenspace, so that

A|u = an|u .

(111)

Then by multiplying by B and using the fact that AB = BA, we easily conclude that

A(B|u ) = an(B|u ),

(112)

26

Notes 1: Mathematical Formalism

in which we use parentheses to emphasize the fact that the ket B|u is also an eigenket of A with the

same eigenvalue, an. Note the possibility that B|u could vanish, which does not, however, change any of the following argument. We see that if any ket |u belongs to the subspace En, then so does the ket B|u .

To complete the proof we need the concept of the restriction of an operator to a subspace. In

general, it is only meaningful to talk about the restriction of an operator to some subspace of a

larger space upon which the operator acts if it should happen that the operator maps any vector of

the given subspace into another vector of the same subspace. In this case, we say that the subspace

is invariant under the action of the operator.

In the present example, both operators A and B leave the subspace En invariant. As for A,
this follows from Eq. (111), which is in eﬀect the deﬁnition of En. As for B, this follows from Eq. (112). Let us denote the restriction of A and B to the subspace En by A¯ and B¯, respectively. Then, according to Eq. (111), A¯ is a multiple of the identity, A¯ = anI¯, where I¯ stands for the identity operator acting on the subspace. The operator B¯ cannot be expressed so simply, but it is

a Hermitian operator, since B was Hermitian on the larger space E. Since we are assuming that

E is ﬁnite-dimensional, so is En, and therefore B¯ is complete on En. Therefore B¯ possesses an

orthonormal eigenbasis in En, say,

B¯|nr = bnr|nr ,

(113)

where r = 1, . . . , dim En. Here n is considered ﬁxed, and if there are any degeneracies of B¯, they are indicated by repetitions of the eigenvalues bnr for diﬀerent values of r.
If we now construct the bases |nr in a similar manner for each value of n, then we obtain a

simultaneous, orthonormal eigenbasis for both A and B on the whole space E. Notice that there

may be degeneracies of B that cross the eigenspaces of A, that is, there may be repetitions in the

values bnr for diﬀerent values of n.

To prove the converse of Theorem 4, we assume that A and B possess a simultaneous eigenbasis.

We sequence the kets of this eigenbasis according to some index s, and write

A|s = as|s , B|s = bs|s .

(114)

In these formulas, we do not assume that the eigenvalues as or bs are distinct for diﬀerent values of s; degeneracies are indicated by repetitions of the values as or bs for diﬀerent values of s. Now from Eq. (114) it follows immediately that

AB|s = asbs|s = BA|s ,

(115)

or,

[A, B]|s = 0.

(116)

But since the kets |s form a basis, Eq. (116) implies [A, B] = 0. QED. (The extension of Theorem 4 will be left as an exercise.)

Notes 1: Mathematical Formalism

27

An important corollary of Theorem 4 occurs when some eigenvalue an of A is nondegenerate, so that En is 1-dimensional. In that case, all kets in En are proportional to any nonzero ket in En. Thus, if we let |n be some standard, normalized eigenket of A with eigenvalue an, then Eq. (112) tells us that B|n must be proportional to |n , say,

B|n = b|n ,

(117)

for some number b. We see that b is an eigenvalue of B, and |n is an eigenket, although the theorem does not tell us the value of b. The number b must be real, since B is Hermitian. We summarize these facts by another theorem.

Theorem 5. If two observables A and B commute, [A, B] = 0, then any nondegenerate eigenket of A is also an eigenket of B. (It may be a degenerate eigenket of B.) By extension, if A1, . . . , An are observables that commute with each other and with another observable B, then any nondegenerate, simultaneous eigenket of A1, . . . , An is also an eigenket of B.
The proof of the extension will be left as an exercise. As an example of this theorem, consider a Hamiltonian that commutes with parity, [H, π] = 0.
According to the theorem, every nondegenerate eigenstate of the Hamiltonian is necessarily a state of deﬁnite parity (even or odd), that is, it is an eigenstate of parity. Recall that in the one-dimensional harmonic oscillator, the energy eigenstate for n = even are even under parity, while those for n = odd are odd.

24. Projection Operators

We turn now to the subject of projection operators. We say that an operator P is a projection operator or a projector if it is an observable that satisﬁes

P 2 = P.

(118)

(On account of this equation, we say that P is idempotent, from Latin idem = ‘same,’ and potens =

‘powerful.’) It follows immediately from this deﬁnition that the eigenvalues of P are either 0 or 1,

for if we write

P |p = p|p ,

(119)

then by Eq. (118) we have

P 2|p = P |p = p2|p = p|p ,

(120)

or,

(p2 − p)|p = 0.

(121)

Thus, either p2 = p or |p = 0; we exclude the latter possibility, since eigenkets are supposed to be

nonzero, and therefore conclude that either p = 0 or p = 1. Therefore P breaks the Hilbert space E

into two orthogonal subspaces,

E = E0 ⊕ E1,

(122)

28

Notes 1: Mathematical Formalism

such that P annihilates any vector in E0, and leaves any vector in E1 invariant. We say that E1 is the space upon which P projects.
Projection operators arise naturally in the eigenvalue problem for an observable A. For simplicity, assume that A has a discrete spectrum, so that we can write

A|nr = an|nr ,

(123)

where |nr is an orthonormal eigenbasis of A, with an arbitrarily chosen orthonormal basis r = 1, . . . , dim En in each eigenspace En. We then deﬁne

Pn = |nr nr|.

(124)

r

It is left as an exercise to show that the operator Pn actually is a projector, and that it projects

onto eigenspace En of A. The set of projectors Pn for diﬀerent n also satisfy

PnPm = PmPn = δnm Pn.

(125)

As we say, the projectors Pn form an orthogonal set. It follows immediately from the deﬁnition (124) and the resolution of the identity (82) that

Pn = 1,
n

(126)

which is yet another way of writing the completeness relation for A.

One can also express the operator A itself in terms of its projectors. We simply let A act on

both sides of the resolution of the identity, Eq. (82), and use Eqs. (123) and (124). The result is

A = anPn.
n

(127)

In the case of the continuous spectrum, a projector can be associated with an interval I = [ν1, ν2] of the parameter describing the continuous spectrum. For if we normalize the eigenkets of some

operator A as in Eq. (108), then it is easy to show that the operator

ν2

PI = dν |νr νr|

ν1

r

(128)

is a projector, and that the projectors for two intervals I and I′ are orthogonal if and only if I and

I′ do not intersect.

The use of projection operators is generally preferable to the use of eigenvectors, because the

latter are not unique. Even when nondegenerate and normalized, an eigenvector is subject to

multiplication by an arbitrary phase factor, and in the case of degeneracies, an orthonormal basis

can be chosen in the degenerate eigenspace in many ways. However, it is easy to show that the

projector deﬁned in Eq. (124) is invariant under all such redeﬁnitions, as should be obvious from the

geometrical fact that Pn projects onto En. Also, in the continuous spectrum there are no eigenvectors that belong to Hilbert space (which means that they are normalizable and hence physical), but the

projection operators (128) are always deﬁned and well behaved.

Notes 1: Mathematical Formalism

29

25. A Function of an Observable

The concept of a function of an observable arises in many places. We begin with the case of the discrete spectrum. If A is an observable with discrete eigenvalues a1, a2, . . . and corresponding projectors P1, P2, . . ., we deﬁne f (A) by

f (A) = f (an)Pn.
n

(129)

It is easy to show that when f is a polynomial or power series, f (A) is the same as the obvious polynomial or power series in the operator A; but Eq. (129) deﬁnes a function of an observable in more general cases, such as the important cases f (x) = 1/(x − x0), or even f (x) = δ(x − x0). When A has a continuous spectrum, we can no longer express f (A) in terms of projectors, but we can write it in terms of the complete basis of eigenkets, in the notation of Eq. (109). In this case we have

f (A) = f (an)|nr nr| + dν f a(ν) |νr νr|.

nr

r

(130)

26. Number Terminology
In quantum mechanics we often have to draw the distinction between an operator and its eigenvalues, or an operator (a quantum observable) and its classical counterpart, which is number. Some terminology due to Dirac is useful for such purposes. Dirac refers to an ordinary (real or complex) number as a “c-number,” while he calls an operator a “q-number.” We will often use this terminology.

27. Operators and Kets versus Matrices and Vectors

We now consider the relation between abstract kets, bras, and operators and the vectors and

matrices of numbers that are used to represent those abstract objects. Consider, for example, the

eigenvalue problem A|u = an|u for a Hermitian operator A. To convert this into numerical form, we simply choose an arbitrary orthonormal basis {|k }, k|ℓ = δkℓ, and insert a resolution of the identity |ℓ ℓ| before the ket |u on both sides. We then multiply from the left with bra k|, to

obtain

k|A|ℓ ℓ|u = cn k|u .
ℓ

(131)

Thus, with

Akℓ = k|A|ℓ , uk = k|u ,

(132)

we have

Akℓ uℓ = anuk.
ℓ

(133)

30

Notes 1: Mathematical Formalism

The matrix elements Akℓ form a Hermitian matrix, Akℓ = A∗ℓk,

(134)

and the eigenvalue problem becomes that of determining the eigenvalues and eigenvectors of a Hermitian matrix. Now the eigenvector uk, as a column vector of numbers, contains the components of the eigenket |u with respect to the chosen basis. Of course, if the Hilbert space is inﬁnitedimensional, then the matrix Akℓ is also inﬁnite-dimensional. In practice, one usually truncates the inﬁnite-dimensional matrix at some ﬁnite size, in order to carry out numerical calculations. One can hope that if th-
e answers seem to converge as the size of the truncation is increased, then one will obtain good approximations to the true answers (this is the usual procedure).
The above is for a discrete basis. Sometimes we are also interested in a continuous basis, for example, the eigenbasis |x of the operator xˆ. Again working with the eigenvalue problem A|u = an|u , we can insert a resolution of the identity dx′ |x′ x′| before |u on both sides, and multiply from the left by x|. Then using the orthogonality relation (98), we obtain

dx′ x|A|x′ x′|u = an x|u ,

(135)

or,

dx′ A(x, x′)u(x′) = anu(x),

(136)

where

A(x, x′) = x|A|x′ , u(x) = x|u .

(137)

We see that the “matrix element” of an operator with respect to a continuous basis is nothing but the kernel of the integral transform that represents the action of that operator in the given basis. (The kernel of an integral transform such as (136) is the function A(x, x′) that appears under the integral.)

28. Traces

The trace of a matrix is deﬁned as the sum of the diagonal elements of the matrix. Likewise, we deﬁne the trace of an operator A acting on a Hilbert space as the sum of the diagonal matrix elements of A with respect to any orthonormal basis. Thus, in a discrete basis {|k } we have

tr A = k|A|k .
k

(138)

One can easily show that it does not matter which basis is chosen; the trace is a property of the operator alone. One can also use a continuous basis to compute the trace (replacing sums by integrals). The operator in Eq. (138) need not be Hermitian, but if it is, then the trace is equal to the sum of the eigenvalues, each weighted by the order of the degeneracy,

tr A = gnan,
n

(139)

Notes 1: Mathematical Formalism

31

where gn is the order of the degeneracy of an. This is easily proven by choosing the basis in Eq. (138) to be the orthonormal eigenbasis of A. But if A has a continuous range of eigenvalues, then the result diverges (or is not deﬁned). Even if the spectrum of A is discrete, the sum (139) need not converge.
The trace of a product of operators is invariant under a cyclic permutation of the product. For example, in the case of three operators, we have

tr(ABC) = tr(BCA) = tr(CAB).

(140)

This property is easily proven. Another simple identity is

tr |α β| = β|α .

(141)

If A and B are operators, we are often interested in a kind of “scalar product” of A with B, especially when we are expressing some operators as linear combinations of other operators (the Pauli matrices, for example). The most useful deﬁnition of a scalar product of two operators is

(A, B) = tr(A†B) = A∗mnBmn,
mn

(142)

where the ﬁnal expression involves the matrix elements of A and B with respect to an arbitrary

orthonormal basis. Thus, the scalar product of an operator with itself is the sum of the absolute

squares of the matrix elements,

(A, A) = |Amn|2,
mn

(143)

which vanishes if and only if A = 0.

29. Mathematical Notes
We collect here some remarks of a mathematical nature on the preceding discussion. For a precise treatment of the mathematics involved, see the references.
The set of normalizable wave functions {ψ(x)} is inﬁnite-dimensional because given any ﬁnite sequence of normalizable wave functions, (ψ1, . . . , ψn), one can always ﬁnd a new normalizable wave function that is linearly independent of those given.
A Hilbert space is a complex, normed vector space that is complete. The latter property means that all Cauchy sequences converge to a point of the space. This property is automatic in ﬁnite dimensions. In addition, many authors require a Hilbert space to be separable, which means that it possesses a countable basis. Sakurai (in Modern Quantum Mechanics) is mistaken when he says that a Hilbert space has an uncountable basis; he is thinking of the “bases” of the continuous spectrum, such as the set -
{δ(x − x0)|x0 ∈ R}, but these basis wave functions are not normalizable and do not belong to Hilbert space. In ﬁeld theory, one must deal with spaces that are not separable (since they possess uncountable bases of normalizable vectors, but not countable ones). Such spaces are called Fock spaces.

32

Notes 1: Mathematical Formalism

Properly speaking, functions ψ(x) do not stand in one-to-one correspondence with elements of Hilbert space. The functions must be measurable, and two functions that diﬀer by a subset of measure zero are considered equivalent. Thus, it is really an equivalence class of wave functions ψ(x) that corresponds to a state vector |ψ . All these wave functions, however, give the same results in their physical predictions (such as the probability of ﬁnding a particle on some interval). This is related to th-
e fact that one cannot measure a wave function at a point, so there is no physical way to detect the diﬀerence between two wave functions that diﬀer on a subset of measure zero.
Sometimes Hermitian operators are also called self-adjoint; to be precise about this terminology, on a ﬁnite-dimensional Hilbert space “Hermitian” and “self-adjoint” are equivalent, but on an inﬁnite-dimensional space this is true only if certain assumptions are made about the properties of the operators and their domains of deﬁnition.
The usual Hermitian operators encountered in quantum mechanics (for example, Hamiltonians) are complete, although the mathematical proof is often technical. In fact, the completeness property is intimately tied up with the physical interpretation of the measurement process, since (according to the usual interpretation of measurement) if a measurement were to correspond to an incomplete operator, it would mean that measuring all possible outcomes would result in a total probability less than unity.-
 In this course (and in most of the literature on quantum mechanics) we assume the completeness of all Hermitian operators we encounter without further comment.
Regarding the ﬁrst integral on the right in Eq. (106), which must vanish in order to show that ψ|pˆ|φ = φ|pˆ|ψ ∗, we note that normalizability does not imply that a wave function ψ(x) approaches zero as x → ±∞. At issue here is the fact that the momentum operator pˆ is unbounded, that is, it maps some normalizable wave functions into unnormalizable ones (taking them out of Hilbert space). If, however, both pˆψ and pˆφ are normalizable, then the integral in question does vanish.
30. References
The standard early reference for physicists on the formalism of quantum mechanics is P. A. M. Dirac, The Principles of Quantum Mechanics, 4th ed (Oxford University Press, Oxford, 1974), while for mathematicians it is John von Neumann, Mathematical Foundations of Quantum Mechanics (Princeton University Press, Princeton, 1955) (this is the English translation of the German original). Modern textbooks that devote more than the usual attention to mathematical questions include Albert Messiah, Quantum -
Mechanics vols. I and II (John Wiley, New York, 1966) (translation of French original), and Leslie E. Ballentine, Quantum Mechanics: A Modern Development (World Scientiﬁc, Singapore, 1998). The standard modern reference on the mathematics of quantum mechanics is Michael Reed and Barry Simon, Functional Analysis revised ed (Academic Press, New York, 1980), and, by the same authors, Fourier Analysis, Self-Adjointness (Academic Press, New York, 1975). See also Quantum Mechanics in Hilbert Space by Ed-
uard Prugoveˇcki (Dover, Mineola, New York, 1981).

Notes 1: Mathematical Formalism

33

Problems

1. Consider the 2 × 2 matrices:

I=

10 01

,

σx =

0 1

1 0

,

σy =

0 i

−i 0

,

σz =

10 0 −1

.

(144)

Matrices σx, σy and σz are called the Pauli matrices. We will also denote them σ1, σ2, σ3.

(a) Show that

σiσj = δij + iǫijk σk,

(145)

where δij is understood to be multiplied by I, where we use the summation convention (see Sec. E.3),

and where ǫijk is the completely antisymmetric Levi-Civita symbol (see Sec. E.15, and ask if you

don’t understand, since this notation will be used frequently in the course). Notice that Eq. (145)

implies

[σi, σj ] = 2i ǫijk σk,

(146)

and

{σi, σj } = 2δij ,

(147)

where the curly brackets are the anticommutator. What we mean by a vector operator is a vector of operators, for example, A = (Ax, Ay, Az),
where Ax, Ay and Az are operators. Now given any two vector operators A, B that commute with σ but not necessarily with each other, use Eq. (145) to show that

(σ · A)(σ · B) = A · B + iσ · (A × B),

(148)

where

σ = σxxˆ + σyyˆ + σzzˆ.

(149)

We think of σ as a “vector” of 2 × 2 matrices.

Two vector operators are considered to commute if all of their components commute. Note that in general, A · B = B · A, and A × B = −B × A.

(b) Let nˆ be an arbitrary unit vector and θ an arbitrary angle. Show that

exp(−iθσ · nˆ) = I cos θ − i(σ · nˆ) sin θ.

(150)

In this course we will often drop the I, it being understood that a scalar like cos θ is multiplied by the identity matrix.

2. Lie algebraic techniques for operators.

(a) Consider two operators A, B that do not necessarily commute. Show that

eABe−A

=

B

+

[A,

B]

+

1 2!

[A,

[A,

B]]

+

1 3!

[A,

[A,

[A,

B]]]

+

.

..

.

(151)

34

Notes 1: Mathematical Formalism

Hint: Replace A by λA, where λ is a parameter, and let the left-hand side be F (λ). Find a diﬀerential equation satisﬁed by F (λ), and solve it. Alternatively, expand F (λ) in a Taylor series in λ.

(b) Let A(t) be an operator that depends on time. Derive the following operator identity:

d(eA) dt

e−A

=

∞

(n

1 +

1)!

LnA

dA dt

,

n=0

(152)

where

LA(X) = [A, X], L2A(X) = [A, [A, X]], . . . ,

(153)

where X is an arbitrary operator. Also, L0A(X) = X. Do not assume that A commutes with dA/dt. We will use this identity when we study the nonrelativistic limit of the Dirac equation.

3. Pauli matrices and traces. (a) If A and B are square matrices, show that

tr(AB) = tr(BA).

(154)

Also prove Eq. (140).

(b) Show that tr σi = 0. It may be easiest just to use the deﬁnitions (144). Then use Eq. (145) to ﬁnd a simple expression for tr(σiσj ).
(c) The set of four 2 × 2 matrices, (I, σ) form a basis in the space of 2 × 2 matrices, that is, an arbitrary 2 × 2 matrix can be expressed as a linear combination of these four matrices. Thus, if M is an arbitrary 2 × 2 matrix, it can be expressed as

M = aI + b · σ,

(155)

This follows from the fact that I and the three σi are linearly independent, as can be seen just by looking at the four matrices. Find neat expressions for the expansion coeﬃcients, a and b = (b1, b2, b3). Do this by taking traces, or by multiplying by a Pauli matrix and then taking traces. Also show that M is Hermitian if and only if a, b are real.

(d) Now suppose that M is nonzero in only the (r, s) slot, where it has a 1. That is, let

Mij = δir δjs.

(156)

Use this in Eq. (155) to ﬁnd a nice expression for (σm)ij (σm)kℓ (summation convention everywhere, so sum on m in this expression) in terms of Kronecker deltas.

4. Some easy proofs from the notes. (a) Show that Eq. (48) follows from Eq. (47).

Notes 1: Mathematical Formalism

35

(b) Prove Eqs. (55), (58), and (59).

(c) Prove that the product of two Hermitian operators is Hermitian if and only if they commute.

(d) Show that

tr |α β| = β|α .

(157)

5. The problem of ﬁnding the eigenkets and eigenbras of an arbitrary operator is more complicated and full of exceptions than in the case of Hermitian operators. There are, however, other classes of operators that share many of the nice properties of Hermitian operators. These include antiHermitian and unitary operators.
We deﬁne an operator to be normal if it commutes with its Hermitian conjugate, [A, A†] = 0. Notice that Hermitian, anti-Hermitian, and unitary operators are normal. In the following you may assume that you are working on a ﬁnite-dimensional Hilbert space.
(a) Show that if A is normal, and A|u = a|u for some nonzero |u , then A†|u = a∗|u . Thus, the eigenbras of A are the Hermitian conjugates of the eigenkets, and the left spectrum is identical to the right spectrum. Hint: it is not necessary to introduce orthonormal bases or anything of the kind.
(b) Show that the eigenspaces corresponding to distinct eigenvalues of a normal operator are orthogonal. This is a generalization of the easy and familiar proof for Hermitian operators.

6. Some things that will be needed in subsequent problems. You may assume that you are working on a ﬁnite-dimensional Hilbert space.

(a) If A is an observable, show that

Pn

=

k=n

A − ak an − ak

,

(158)

where Pn is the projector onto the n-th eigenspace of A. This shows that the projector Pn is a function of the operator A (see Sec. 25).

(b) Show that if

ψ|A|ψ = 0

(159)

for all |ψ , then A = 0. (A is not necessarily Hermitian.) Would this be true on a real vector space? (A real vector space is one in which the coeﬃcients allowed in forming linear combinations of basis vectors are real. In a complex vector space, such as Hilbert space, these coeﬃcients are allowed to be complex.)

(c) Let U be a linear operator, and let |ψ′ = U |ψ . Show that ψ′|ψ′ = ψ|ψ for all kets |ψ if and only if U is unitary.

36

Notes 1: Mathematical Formalism

7. Let V be a real vector space with a positive deﬁnite scalar product. If x and y are vectors in V , we denote their scalar product by (x, y). This is like the scalar product x|y in the Hilbert spaces of quantum mechanics, except only real coeﬃcients are allowed when forming linear combinations of vectors. We interpret (x, x) as the square of the length of the vector x. Show that the Schwarz inequality (28) implies that the shortest distance between two points is a straight line.

Copyright c 2019 by Robert G. Littlejohn
Physics 221A Fall 2019 Notes 2
The Postulates of Quantum Mechanics†
1. Introduction
In these notes we present the postulates of quantum mechanics, which allow one to connect experimental results with the mathematical formalism described in Notes 1. Actually, we are not ready to state the postulates in their complete and ﬁnal form, since that requires the use of the density operator, which we discuss in Notes 3. Therefore our ﬁrst version of the postulates will involve some undeﬁned terminology, and will be incomplete. Nevertheless, even in their incomplete form, the postulates ex-
plain a good deal about the mathematical formalism of quantum mechanics and its relation to physical reality.
These postulates are not supposed to be obvious. In fact, even after the correct equations describing quantum mechanics had been discovered (by Heisenberg and Schr¨odinger, in 1925–1926), it was still not obvious what the correct interpretation should be. The interpretation presented in these notes and the next set is the orthodox one, although there are controversial aspects about it and there are alternatives that are active competitors even today. For example, recent work in cosmology has led t-
o renewed interest in the “many worlds” interpretation, in which the “wave function of the universe” plays a role. For now it is best to state the postulates of the orthodox interpretation and see how they work out on some speciﬁc physical examples.
2. Postulates of Quantum Mechanics (Incomplete Form)
In their incomplete form, the postulates of quantum mechanics are the following: 1. Every physical system is associated with a Hilbert space E. We call the vectors of this space
kets. 2. Every pure state of a physical system is associated with a deﬁnite ray in E. We postpone for
a while the deﬁnition of a pure state, but a ray was deﬁned in Eq. (1.9). In practice we often represent the state of a system by some nonzero ket lying in the ray in question. In this course we will often refer to a nonzero ket |ψ as the “state” of the system, but really it is the ray that corresponds to the state (the normalization and phase of the ket are of no physical signiﬁcance).
† Links to the other sets of notes can be found at: http://bohr.physics.berkeley.edu/classes/221/1920/221.html.

2

Notes 2: Postulates of Quantum Mechanics

3. Every measurement that can be carried out on the system corresponds to a complete Hermitian operator A (an observable).

4. The possible results of the measurement are the eigenvalues of A, either the discrete eigenvalues a1, a2, . . . or the continuous ones a(ν).
5. In the discrete case, the probability of measuring A = an is

Prob(A = an) =

ψ|Pn|ψ ψ|ψ

,

(1)

where Pn is the projection operator onto the eigenspace En corresponding to eigenvalue an, as indicated by Eq. (1.124), and where |ψ is any nonzero ket in the ray representing the state of the system. In the continuous case, the probability of measuring A to lie in some interval I = [a0, a1] of the continuous spectrum is

Prob(a0 ≤ A ≤ a1) =

ψ|PI |ψ ψ|ψ

,

(2)

where PI is the projection operator corresponding to interval I, as in Eq. (1.128). Notice that the probabilities in Eqs. (1) and (2) depend only on the ray, not on which ket is chosen to represent the ray.
6. After a measurement with discrete outcome A = an, the system is represented by the ket Pn|ψ , where |ψ represents the system before the measurement. Note that in this case, the system is in an eigenstate of A with eigenvalue an after the measurement. In the continuous case, with outcome a0 ≤ A ≤ a1, the system is represented by PI |ψ after the measurement, where again PI is as in Eq. (1.128).

As postulate 5 shows, the predictions made by quantum mechanics are of a statistical nature. The probabilities referred to in that postulate are determined experimentally by repeating the same measurement on a large number of identically prepared systems. The fact that identically prepared systems can yield diﬀerent results on successive measurements is a point that we will discuss after we give some examples.
We emphasize that quantum mechanics makes statistical predictions about measurements on an ensemble, that is, a collection of (conceptually) an inﬁnite number of identically prepared systems. Although we often use language like “the wave function of the electron,” in reality the state vector (or wave function) does not describe an individual system, but only the statistics of an ensemble. And postulate 6, also called the collapse postulate, does not refer to the “collapse” of any individual system-
, but rather the creation of a new ensemble, described by a new state vector, that results from the act of making a measurement on the old ensemble.
There is a seventh postulate, not listed here, which states that the state vector evolves in time by means of a time-dependent, unitary transformation. This subject will be taken up in Notes 5. Postulate 7 is actually in conﬂict with postulate 6, assuming that the measuring apparatus is governed by the same rules of quantum mechanics as the system being measured. This is because

Notes 2: Postulates of Quantum Mechanics

3

the projection required by postulate 6 cannot be achieved by unitary transformations, nor can the measurement apparatus end up in a deﬁnite state (indicating the result of the measurement) by such means. Much of the ongoing discussion and debate regarding the quantum theory of measurement involves such issues as these in an attempt to explain how in practice we do end up with deﬁnite measurements. An aspect that cannot be neglected is that a real measurement apparatus is always macroscopic object -
that cannot be isolated from its environment. Thus any consideration of the quantum state of the apparatus must take into account the interactions with the environment in some statistical way.
We could pursue these questions but for now the more important task is to see how these postulates actually work in practice. For example, we will have to answer questions such as the following: How do we know what Hilbert space is associated with a given physical system? What operator corresponds to deﬁnite measurements? And which ray corresponds to a deﬁnite (pure) state of system?
3. Postulates Applied to the Stern-Gerlach Experiment
To answer such questions, we will analyze the Stern-Gerlach experiment, pretending that we know nothing except the experimental results and the postulates listed above. In particular, we will pretend that we know nothing about wave functions, spin, Pauli matrices, the Schr¨odinger equation, etc. The following presentation is based closely on that given by J. J. Sakurai, Modern Quantum Mechanics.
Suppose we are working with a beam of silver atoms, as in the original Stern-Gerlach experiment. From a modern perspective, we know that silver atoms possess a magnetic moment µ because of their single unpaired valence electron, so that the measured value of any component of magnetic moment is ±µ0, where µ0 = e¯h/2mc is a Bohr magneton (this is in Gaussian units; see Appendix A). The silver atom has the same electronic spin and magnetic moment as a free electron, but it is electrically neutral. Ch-
arged particles are not suitable for a Stern-Gerlach experiment, because in practice the ordinary Lorentz force (q/c)v×B is much larger than the force due to the magnetic moment, F = ∇(µ · B). The original experiment of Stern and Gerlach in 1921 provided a measurement of µ0, with a result in good agreement with Bohr’s value. We also know that the magnetic moment operator is proportional to the spin operator, µ = (e/mc)S, where any component of spin takes on the values ±¯h/2. In the following discu-
ssion, however, we will play dumb and ignore all of this, and instead we will work solely with the experimental results. For the same reason, we will speak in terms of measurements of magnetic moment, not spin.
Consider the tandem Stern-Gerlach apparatus illustrated in Fig. 1, in which we ﬁrst measure the x-component of the magnetic moment µ, and then pass the beam with µx = +µ0 to a second magnet which measures µz. The experimental result is that the two beams emerging from the second magnet, with µz = ±µ0, each carry 50% of the atoms that entered that magnet.
Since a measurement of µx gives rise to two possible outcomes, we must assume according to

4

Notes 2: Postulates of Quantum Mechanics

Ag
oven

+ |µx+
µx −

|µz +
µz |µz−

50% 50%

Fig. 1. A beam of silver atoms is subjected to a measurement of µx, after which the atoms with µx = +µ0 are passed to a second magnet which measures µz.

postulates 3 and 4 that the operator µx has two possible eigenvalues, ±µ0. The same is true for µy and µz, or indeed, for any component of spin (in any direction). Therefore the Hilbert space E must be at least 2-dimensional, since the eigenspaces corresponding to µx = ±µ0 are orthogonal. Indeed, measurements of the components of the magnetic moment alone give us no indication that the Hilbert space has more than two dimensions. The easiest way to proceed with the following argument is simply to a-
ssume that the eigenvalues ±µ0 are nondegenerate, and then to come back later to the question of degeneracies. Under this assumption, the eigenspaces are 1-dimensional, the ket space E has exactly two dimensions, and it is spanned by the eigenkets of µx with eigenvalues ±µ0. It is also spanned by eigenkets of µy or µz with eigenvalues ±µ0, and therefore the pair of eigenkets of any one of these operators must be expressible as linear combinations of the eigenkets of any other operator.
Let us denote some normalized eigenvector of µx with eigenvalue +µ0 by |µx+ ; we say “some” because any other vector diﬀering from this one by an overall phase would work just as well at this stage of the argument. Similarly, let us choose normalized eigenvectors |µx− , |µy± , and |µz± = |± (we will henceforth omit the µz speciﬁcation in the eigenkets of this operator). Because eigenkets corresponding to distinct eigenvalues are orthogonal, we have

µx+|µx− = µy+|µy− = +|− = 0.

(3)

In accordance with postulate 2, the state of the atomic beam at various stages in the apparatus is described by some state vector (as we will discuss later, the spin system is in a pure state anywhere after the measurement of µx in the ﬁrst magnet). Also, according to postulate 6, after the measurement of µx with result +µ0, the state of the system is speciﬁed by |µx+ , as indicated by the ket attached to the upper beam in Fig. 1. This is because by our assumption the eigenspace of

µx with eigenvalue µ0 is one-dimensional, that is, it is a ray, so the projection operator onto this subspace produces a vector in that ray. The state of the system is determined by the ray, which is speciﬁed by any nonzero vector that lies in it, such as |µx+ . Similarly, the two beams emerging from the second magnet, which measures µz, are represented by the state vectors |µz± = |± . We represent the state |µx+ entering the second magnet as a linear combination of the eigenkets |± ,

|µx+ = c+|+ + c−|− ,

(4)

where c± are the expansion coeﬃcients. Since |+ and |− are orthogonal, this implies

c± = ±|µx+ .

(5)

Notes 2: Postulates of Quantum Mechanics

5

Then, according to postulate 5, we have

Prob(µz = +µ0) = µx+|P+|µx+ ,

(6)

where

P+ = |+ +|

(7)

is the projection operator onto the +µ0 eigenspace of µz. The denominator in Eq. (2) is unity because |µx+ is normalized. Therefore Eq. (6) becomes

Prob(µz = +µ0) =

µx+|+

+|µx+

=

|

+|µx+

|2

=

|c+|2

=

1 2

,

(8)

where we use Eq. (4) and the experimentally measured probability. This implies

c+

=

√1 2

eiα1 ,

(9)

where eiα1 is an unknown phase factor. But since Prob(µz = −µ0) is also 1/2, a similar argument

gives

c−

=

√1 2

eiβ1 ,

(10)

where eiβ1 is another unknown phase. Thus, we have

|µx+

= √1 (eiα1 |+ 2

+ eiβ1 |− ).

(11)

Ag
oven

+
µx − |µx−

|µz +
µz |µz−

50% 50%

Fig. 2. Same as Fig. 1, except the beam with µx = −µ0 is fed into the second magnet.

In general, the wave function of a system is the expansion coeﬃcients of the state vector with

respect to some speciﬁed basis. Since the coeﬃcients c+ and c− are the expansion coeﬃcients of |µx+ with respect to the eigenbasis of µz, they constitute the wave function in the µz-representation. We see that the analysis so far, which makes use of the measured probabilities in Fig. 1, has determined

the wave function (c+, c−) only to within the two phases shown in Eq. (11). We will now pin down these phases by using a combination of further experimental data and phase conventions.

Equation (11) can be simpliﬁed by changing the phase of the ket |µx+ so as to absorb the

phase eiα1 on the right hand side. Let |µx+ = |µx+ ′eiα1 and multiply Eq. (11) by e−iα1, setting

β1′ = β1 − α1. Then we have

|µx+

= √1 (|+ 2

+ eiβ1 |− ),

(12)

6

Notes 2: Postulates of Quantum Mechanics

after dropping the primes. Now we have established a phase convention for the ket |µx+ and we cannot change its phase again. By a similar analysis, if we feed the beam emerging from the ﬁrst magnet with µx = −µ0 into the second magnet, as illustrated in Fig. 2, and analyze the probabilities exactly as we have done here, we obtain

|µx−

= √1 (|+ 2

+ eiγ1 |− ),

(13)

where eiγ1 is another phase. Now we have ﬁxed the phases of both kets |µx± . But the phases eiβ1 and eiγ1 are related, for by orthogonality we have

µx+|µx−

=

1 2

[1

+

ei(−β1+γ1)]

=

0,

(14)

or eiγ1 = −eiβ1. Thus, Eqs. (12) and (13) can be written

|µx±

= √1 (|+ 2

± eiβ1 |− ).

(15)

Similarly, suppose we measure µy instead of µx in the ﬁrst magnet in Figs. 1 and 2. Then the two beams that emerge from the second magnet still carry 50% each of the silver atoms, and an analysis just like that presented above gives

|µy ±

= √1 (|+ 2

± eiβ2 |− ),

(16)

where eiβ2 is another phase. Now the phases of kets |µy± have been ﬁxed. We can now write down the operators representing the components of µ in the |± basis. For
example, according to Eq. (1.127) we have

µx = µ0 |µx+ µx+| − |µx− µx−| ,

(17)

which can be transformed to the |± basis by substituting Eq. (15). This gives

µx = µ0 e−iβ1 |+ −| + eiβ1 |− +| .

(18)

Similarly, we ﬁnd

µy = µ0 e−iβ2 |+ −| + eiβ2 |− +| ,

(19)

and of course we have

µz = µ0 |+ +| − |− −| .

(20)

Next, a relation can be found between the phases eiβ1 and eiβ2 by imagining another SternGerlach experiment, like Fig. 1 except that we measure µy in the second magnet instead of µz. Again, we can take it as an experimental result that the two values µy = ±µ0 are measured with equal probability. Therefore we have

1 2

=

|

µy ±|µx +

|2

=

1 2

[1

±

cos(β2

−

β1)],

(21)

Notes 2: Postulates of Quantum Mechanics

7

where we use Eqs. (15) and (16). But this implies β2 = β1 ± π/2, or

eiβ2 = ±ieiβ1 .

(22)

Thus, the two unknown phases in Eqs. (18) and (19) reduce to one unknown phase and an unknown sign.
The remaining unknown phase, say, eiβ1, can be pinned down by choosing a phase convention for the ket |− ; for example, we can make the matrix elements of either µx or µy in the |± basis purely real, but not both, because by Eq. (22), if the matrix elements of one of these operators is real, those of the other operator must be purely imaginary. We see that it is impossible to satisfy the postulates of quantum mechanics and the experimental results with only real numbers; complex numbers are necess-
ary. Here we choose to absorb the phase eiβ1 into the deﬁnition of the ket |− , so that Eqs. (18), (19) and (20) become

µx = µ0 |+ −| + |− +| ,

µy = ±µ0 −i|+ −| + i|− +| ,

µz = µ0 |+ +| − |− −| .

(23)

We notice that we cannot change the phase of |+ without messing up equations such as (15) or (16). Thus, all the freedom in phase conventions has been used up. To state results equivalent to Eqs. (23), we can write out the matrices representing the three operators in the |± basis,

µx = µ0

0 1

1 0

,

µy = ±µ0

0 i

−i 0

,

µz = µ0

1 0

0 −1

,

(24)

where the basis vectors are ordered |+ , |− . We frequently write equations like (24), but we do not really mean that the operator on the left is equal to the matrix on the right, instead we mean that its matrix elements in some given or understood basis are given by the matrices. Here the basis is the eigenbasis of µz. We see in Eq. (24) the appearance of the Pauli matrices.
We see that to within a ﬁnal unknown sign, the three Pauli matrices are determined solely from the postulates of quantum mechanics, the experimental results, and some phase conventions. But there is the question of the ﬁnal, unknown sign. Sakurai has some discussion of this point, but he never deﬁnitively settles the issue. We will look at this question more carefully in Prob. 2.

4. Compatible or Commuting Observables
So far we have simply assumed that the eigenspaces of µx (and µy, µz) are nondegenerate. How would we know if this were not true? If we were given a Hermitian operator or matrix as a purely mathematical problem, then the answer could be obtained purely by mathematics: we ﬁrst compute the eigenvalues, and then the order of the degeneracy of an eigenvalue is the number of linearly independent eigenvectors of that eigenvalue. But here we are building up the Hilbert space out of

8

Notes 2: Postulates of Quantum Mechanics

the results of physical measurements, and there must be physical meaning to any degeneracies that might exist. As we will now show, the answer to this question involves the notion of compatible or commuting observables.

an |ψ1

|ψ0

A

bm |ψ2
B

Fig. 3. A quantum system is subjected to a measurement of two observables, ﬁrst A, and then B.

Consider an idealized measurement such as illustrated in Fig. 3. A system that is known to be in a pure state |ψ0 is ﬁrst subjected to a measurement of observable A. Out of the several possible outcomes, all are thrown away except an. The system after the measurement of A = an is described by |ψ1 ; this system is passed to a device that measures observable B, and all outcomes except B = bm are thrown away. The state of the system after the second measurement is described by |ψ2 .
According to the postulates, the probability of measuring A = an in the ﬁrst apparatus is

Prob(an) =

ψ0|PAn|ψ0 ψ0|ψ0

,

(25)

where PAn is the projection operator onto the eigenspace of A corresponding to eigenvalue an. Also, the ket describing the state that emerges from the ﬁrst ﬁlter is

|ψ1 = PAn|ψ0 .

(26)

Next let us compute the probability of measuring ﬁrst A = an and then B = bm. This is the (conditional) probability of measuring B = bm given that we had A = an, multiplied times the probability of measuring A = an in the ﬁrst place. We denote the probability of this compound measurement by Prob(an; bm); it is given by

Prob(an; bm) =

ψ1 |PB m |ψ1 ψ1|ψ1

ψ0|PAn|ψ0 ψ0|ψ0

,

(27)

where PBm is the projection operator onto the eigenspace of B with eigenvalue bm. But we also

have

ψ1|ψ1 = ψ0|PA† nPAn|ψ0 = ψ0|PAn|ψ0 ,

(28)

where we have used Eq. (26) and the fact that PAn is Hermitian and idempotent. Thus, the denominator of the ﬁrst factor in Eq. (27) cancels the numerator of the second factor, and we have

Prob(an; bm) =

ψ0 |PAn PB m PAn |ψ0 ψ0|ψ0

.

(29)

Notes 2: Postulates of Quantum Mechanics

9

Similarly, if we reverse the order of the measurements, measuring ﬁrst B = bm and next A = an, we

obtain the probability

Prob(bm; an) =

ψ0 |PB m PAn PB m |ψ0 ψ0|ψ0

.

(30)

These two probabilities are not equal, in general.

Now it can be shown that if [A, B] = 0, then [PAn, PBm] = 0, so in this case we have

PAnPBmPAn = PA2nPBm = PAnPBm = PBmPAnPBm,

(31)

so that both probabilities are equal,

Prob(an; bm) = Prob(bm; an) =

ψ0 |PAn PB m |ψ0 ψ0|ψ0

.

(32)

Conversely, it can be shown that if the probabilities P (an; bm) and P (bm; an) are equal for all initial states |ψ0 and all n and m, then [A, B] = 0.
Altogether, we see that probability of a compound measurement is independent of the order of the measurements, for all initial states and all outcomes of the two measurements, if and only if the observables commute. This is the physical meaning of commuting observables. Commuting observables are also said to be compatible. A lesson of this analysis is that it is in principle an experimental matter to determine if two observables, corresponding to deﬁnite measurement processes, commute; we simply c-
arry out those measurements in diﬀerent orders on a large number of systems, and compare the resulting probabilities.
We have described an example of what we might call quantum statistics, in which probabilities depend on the order in which measurements are carried out. A similar problem in classical statistics, by which we mean ordinary statistics, is the following. Suppose we have an urn containing balls with spots of various colors painted on them. If we ﬁrst select the balls that have a red spot, and then feed these to a device that selects balls that have a green spot, then what comes out is the set of balls-
 that have both a red and a green spot. The number of these balls, divided by the total number of balls in the urn, is the probability of selecting a ball with both a red and a green spot from the urn in the ﬁrst place. Moreover, the same number is obtained if we select balls with green spots ﬁrst and then those with red spots. The order does not matter. In this sense, classical statistics is commutative, while quantum statistics is noncommutative. We will have more to say later about the dependen-
ce in quantum mechanics of experimental results on the order in which measurements are carried out.

5. Resolving Degeneracies; Complete Sets of Commuting Observables
Let us now return to the question of degeneracies. Referring to Fig. 3, how do we know if the eigenvalues of the operator A are degenerate? (You may wish to review the proof of the theorem that commuting observables possess a simultaneous eigenbasis, given in Sec. 1.23, to better understand this section.) If an eigenvalue an is degenerate, then the eigenspace En corresponding

10

Notes 2: Postulates of Quantum Mechanics

to this eigenvalue is multidimensional, so we are asking about the dimensionality of the subspaces En. The answer is obtained by searching for other observables B that commute with A, to see if one of them will ‘resolve’ the degeneracy of an, that is, produce more than one outcome when a measurement of B is made subsequent to the measurement A = an. If such an observable can be found, then the states emerging from the B-apparatus lie in the simultaneous eigenspaces of the operators A and B, which -
are subspaces of the eigenspace En of A. A vector lying in one of these subspaces is obtained by applying the projectors PAn and PBm (in either order, since they commute) to an arbitrary ket, such as |ψ0 in the ﬁgure. In this case, the order of the degeneracy of an is at least equal to the number of outcomes of the subsequent B-measurement, since each of the simultaneous eigenspaces is at least one-dimensional.
However, these simultaneous eigenspaces of A and B may themselves be degenerate. To ﬁnd out if they are, we can search for another operator C that commutes with both A and B, that will resolve the simultaneous eigenspaces of A and B into smaller subspaces. The process continues until no more resolutions are possible; then the set of observables (A, B, C, . . .) constitutes a complete set of commuting observables, or CSCO for short. At this point we can declare that the simultaneous eigenspaces of -
the CSCO are nondegenerate, and the dimensionalities of all simultaneous eigenspaces of all operators in the CSCO are determined.
Once we have found a CSCO, then any new observable that commutes with the CSCO must be a function of the members of the CSCO. This is because the new observable does not produce any further resolutions of the simultaneous eigenspaces of the CSCO, so its eigenvalue on any one of these (one-dimensional) subspaces is just a number that can be regarded as a function of the eigenvalues of the members of the CSCO. This is what we mean by a function of an operator (see Sec. 1.25).
How do we know if we have gone far enough in the search for operators when trying to construct a CSCO? In short, we don’t. If we cannot ﬁnd a new operator (that is, a new measurement process) that commutes with the operators already in the list and that creates a further resolution of the eigenspaces, it may be due to the lack of such an operator, or the lack of our imagination in searching for one. In practice, this means that there are degrees of freedom that we are ignoring, either because we d-
on’t know about them or because they are not important for the physics we are interested in. For example, in the usual discussion of the hydrogen atom we ignore the degrees of freedom associated with the quarks in the nucleus.
In other words, we often choose not to go all the way to a complete set of commuting observables because we are only interested in some subset of the degrees of freedom of a system. For example, in our discussions of the Stern-Gerlach apparatus, we have been ignoring the spatial degrees of freedom of the silver atom, as well as the internal degrees of freedom representing the motion of the electrons around the nucleus, the motion of the nucleons in the nucleus, the quarks in the nucleons, etc. If -
we were to include the spatial degrees of freedom of the silver atoms as well as the spin, our Hilbert space would be inﬁnite-dimensional (actually, 2 × ∞).

Notes 2: Postulates of Quantum Mechanics

11

For another example, we frequently treat electrons as spinless particles (eﬀectively ignoring the spin degrees of freedom), so that the wave function is a scalar ψ(r) instead of a 2-component spinor. This is physically justiﬁed in the common case that the electron is moving in an electrostatic ﬁeld, since spins do not interact with electric ﬁelds. It may also be useful as an approximation when spin-dependent eﬀects are small, as they usually are in nonrelativistic quantum mechanics. Later, if we i-
ncorporate spin in a more realistic model, we will ﬁnd that the Hilbert space becomes enlarged and new quantum numbers appear.
6. Noncommuting Measurements
As discussed above, it is a feature of quantum mechanics that the outcome of measurements depends in general on the order in which they are taken. This is sometimes described by saying that when we measure one observable, we introduce an unavoidable and uncontrollable disturbance in the values of all other observables that do not commute with the one we are measuring. For example, when measuring µz, we disturb the values of µx and µy, or when measuring the position of a particle we disturb its mom-
entum. In comparison to the ﬁltering of classical ensembles, for example, selecting balls from an urn with diﬀerent colored spots on them, it is as if when we select a ball and discover it has a red spot, this fact alone causes all the other spots on the ball to be replaced by new ones with randomly chosen colors.
z

N y
S

Fig. 4. The Stern-Gerlach apparatus seen from one end.
Such disturbances in noncommuting variables also occur in classical mechanics, it is just that in the classical framework we can in principle reduce the disturbance to an arbitrarily small value. To understand this point, let us consider the measurement of µz in a Stern-Gerlach apparatus in more detail, adopting a classical point of view. Measuring the force on an object in an inhomogeneous magnetic ﬁeld in order to measure its magnetic moment is something we can do with any magnetized object, inc-
luding macroscopic ones for which classical mechanics is valid.
An end-view of the apparatus is sketched in Fig. 4. The beam is directed along the x-axis and runs just below the knife edge of the upper pole tip, where the magnetic ﬁeld has the largest gradient.

12

Notes 2: Postulates of Quantum Mechanics

The force on the atoms is small, so the magnet extends as far as practicable in the x-direction, to

maximize the momentum transfer in the z-direction. Obviously this momentum transfer must be

greater than the statistical spread in the beam in pz in order to see the eﬀect at all. Assuming the

beam is of small spatial extent, we can assume the magnetic ﬁeld is purely in the z-direction at the

location of the beam (directly below the pole tip), B = Bzˆz, so Bx = By = 0 at the location of the beam. Actually, ignoring fringe ﬁelds, Bx = 0 everywhere due to symmetry. Both the z- and y-components of B have nonzero gradients, however, at the location of the beam (these gradients

are restricted by ∇ · B = 0). The force is F = ∇(µ · B). The magnetic moment µ characterizes

the magnetic particle and is a function of time, but it does not depend on space so the force can be

written

F = µy∇By + µz∇Bz.

(33)

The magnetic moment itself is not constant in the magnetic ﬁeld, but precesses according to

µ˙ = ω×µ,

(34)

where ω is in the direction of B. For the silver atom, ω has the magnitude

ω

=

eB mc

.

(35)

Equation (34) applies to a silver atom, but would not be true for a macroscopic magnetized object

unless the magnetic moment were proportional to the angular momentum which is assumed to be

large. Otherwise a more complicated equation of motion for µ must be used. Of course Stern and

Gerlach did not know this about silver atoms, but for simplicity we will content ourselves with the

simple equation of motion (34), which is correct for silver atoms.

The consequence of Eq. (34) is that µ precesses about the direction B with frequency ω, sweeping

out a cone, so that its component along B (in this case, µz) is constant, while the component of µ perpendicular to B rotates in a circle with frequency ω. In fact, in a real Stern-Gerlach experiment,

the atom stays in the magnetic ﬁeld for a time T that is much greater than the precession period

τ = 2π/ω. This is because, as mentioned, it is desirable to keep the particle in the inhomogeneous

magnetic ﬁeld as long as possible to maximize the momentum transfer.

Due to the precession, the component µy in Eq. (33) averages to zero on time scales long compared to the precession time, and the average force felt by the particle is

F

=

µz ∇Bz

=

µz

∂Bz ∂z

zˆ,

(36)

where we use the fact that near the pole tip the gradient of Bz is predominantly in the z-direction. Thus, the momentum transfer in the z-direction is

∆pz

=

T µz

∂Bz ∂z

,

(37)

assuming ∂Bz/∂z does not change much as the beam gradually bends in response to the force (that is, assuming the spatial displacement in the z-direction is small enough, something that may or may

not be true in practice).

Notes 2: Postulates of Quantum Mechanics

13

An important point of this analysis is that while we do measure the (constant) value of µz while the atom is in the inhomogeneous magnetic ﬁeld, the other two components µx and µy undergo precession and so are not constant. This happens even in a classical description, and is an example of the fact that measuring an observable introduces a disturbance in other observables that do not commute with it. In classical mechanics, however, it is possible in principle to account for the evolution of µx an-
d µy in the apparatus. For any given particle with deﬁnite initial position and momentum, we can in principle calculate its trajectory through the magnet, integrate Eq. (34) along the trajectory, and compensate for the evolution of µx and µy. Of course, the actual beam has some spatial extent, so diﬀerent particles will follow slightly diﬀerent trajectories and the spins will precess by diﬀerent total angles, producing a spread in the distribution of precession angles when the beam emerges. If thi-
s spread is much greater than 2π, then we will have the appearance even in classical mechanics of a random disturbance in µx and µy upon measuring µz.
In classical mechanics we can minimize this spread by making the beam suﬃciently narrow in its spatial extent. In quantum mechanics, however, this is not possible because of the uncertainty principle applied to the position and momentum of the particles in the beam. An analysis of these restrictions shows that it is impossible to reduce the spatial extent of the beam enough to make the spread in precession phase angles much less than 2π. Thus, in quantum mechanics, there is indeed an unavoidable a-
nd uncontrollable disturbance in µx and µy, upon measuring µz. This question is examined further in Prob. 3.
Perhaps you have seen a discussion of the “Heisenberg microscope,” which is often used to explain the position-momentum uncertainty relations. This is a gedankenexperiment that attempts to measure the position of a particle with some accuracy by shining light on it, and forming the image with a lens. The position of the image is limited by diﬀraction of the light, which can be reduced by using light of shorter wavelength. This, however, increases the momentum transfer when the photon scatters oﬀ t-
he particle we are trying to observe, introducing an unavoidable and uncontrollable disturbance in the momentum of the particle. The details of the Heisenberg microscope are diﬀerent but the principle is the same as in the spin example we are discussing here.
In discussions of this sort we are really using a mixture of classical and quantum reasoning to understand certain phenomena. There is no harm in this, and classical reasoning must never be underestimated as a means for understanding quantum phenomena. Nevertheless, the kind of language we have been using ascribes a reality to certain quantities that are not observable, for example, the value of µx of the atom inside the Stern-Gerlach apparatus. It is a safer point of view, and more in accordance -
with the orthodox interpretation of quantum mechanics, that unobservable quantities should not be considered a part of physical reality. More on this point later.
7. The Ensemble Interpretation
You may be familiar with the “Schr¨odinger cat” paradox. Like Einstein, Schr¨odinger was a physicist who did not like the statistical interpretation of quantum mechanics. To argue against it,

14

Notes 2: Postulates of Quantum Mechanics

he pointed out that linear combinations of microscopic quantum states could apparently be translated into linear combinations of macroscopic states, something we do not observe. His example was a (poor) cat conﬁned to a box with in which there was a radioactive nucleus. As time goes on, the state of the nucleus becomes a linear combination of an excited nucleus and a nucleus in the ground state with an emitted particle. A detector sits nearby, and when it detects the emitted particle, it releases -
a capsule of cyanide which kills the cat. Now, Schr¨odinger asks, do we have a linear combination of a live cat and a dead cat?
We emphasize that quantum mechanics makes statistical predictions about measurements on an ensemble, that is, a collection of (conceptually) an inﬁnite number of identically prepared systems. Although we often use language like “the wave function of the electron,” in reality the state vector (or wave function) does not describe an individual system, but only the statistics of an ensemble. And postulate 6, the collapse postulate, does not refer to any collapse of any individual system, but rather t-
he creation of a new ensemble, described by a new state vector, that results from the act of making a measurement on the old ensemble. In this way we avoid apparent paradoxes of the “Schr¨odinger cat” type. That is, at any given time we have an ensemble of cats in boxes; if we pick one out and look at it (observe it), we ﬁnd either a live cat or a dead one. Quantum mechanics correctly predicts the statistical distribution of these results.
To analyze the Schr¨odinger cat situation more carefully, one would have to take into account that the cat in the box is a macroscopic system, whose quantum state is unavoidably coupled to its environment.

8. Statistical Aspects of Measurement

We turn now to some simple observations of a statistical nature regarding the postulates of quantum mechanics. For simplicity we deal with observables with a discrete spectrum. Let us denote the probability of measuring A = an on a normalized, pure state |ψ by fn, so that

fn = ψ|Pn|ψ ,

(38)

where Pn is the projector onto the n-th eigenspace of A. Then the average value of a, in the ordinary sense of statistics, is just the sum of the an’s weighted by the probabilities fn. This quantity can, however, be expressed in terms of Hilbert space operations,

a = fnan = ψ anPn ψ = ψ|A|ψ ,

(39)

n

n

where we use Eq. (1.127). We will also write A = a for this quantity. Similarly, the variance ∆a2, deﬁned in the usual way in statistics, can be expressed in terms of Hilbert space operations:

∆a2 = fna2n −
n

2
fnan = ψ|A21|ψ ,
n

(40)

where

A1 = A − A .

(41)

Notes 2: Postulates of Quantum Mechanics

15

We will also write ∆A2 = ∆a2. The proof of Eq. (40) is straightforward. But this equation has an immediate consequence. Let us ask for the conditions under which ∆a2 = 0, that is, the conditions under which measurements of a quantum mechanical system will yield a single value with 100% probability, with no dispersion. We write

∆a2 = 0 = ψ|A†1A1|ψ = φ|φ ,

(42)

where |φ = A1|ψ . But by Eq. (1.27), this holds if and only if |φ = 0, or,

A|ψ = A |ψ .

(43)

In other words, a quantum measurement of an observable A produces no dispersion if and only if the state |ψ is an eigenstate of A.

9. Generalized Uncertainty Principle

A related subject is that of the generalized uncertainty principle, which places lower bounds on the products of the dispersions of two observables, A and B. We ﬁrst quote the result,

∆A2 ∆B2

≥

1 4

|

[A, B]

|2 ,

(44)

where expectation values are taken with respect to some state |ψ . We note that these dispersions refer to measurements of either A or B on an ensemble of identically prepared systems. They do not refer to successive measurements, an important topic discussed elsewhere in these notes.
To prove Eq. (44), we write

|α = A1|ψ ,

|β = B1|ψ ,

(45)

where

A1 = A − A ,

B1 = B − B ,

(46)

and use the Schwarz inequality (1.28) in the form,

α|α β|β ≥ | α|β |2.

(47)

By Eq. (40), the left hand side of this is ∆A2 ∆B2. As for the right hand side, we have

α|β

=

ψ|A1B1|ψ

=

1 2

ψ|[A1, B1]|ψ

+

1 2

ψ|{A1, B1}|ψ

,

(48)

where we have written the product A1B1 as one half the sum of the commutator and the anticommutator. Since A1 and B1 are Hermitian, the commutator is anti-Hermitian and the anticommutator is Hermitian. Therefore the ﬁrst term on the right hand side of Eq. (48) is purely imaginary and

16

Notes 2: Postulates of Quantum Mechanics

the second is purely real; the two terms on the right hand side are the real and imaginary parts of

the expression on the left. Therefore when we take the absolute value squared of the left hand side,

we obtain the inequality,

|

α|β

|2

≥

1 4

|

ψ|[A1, B1]|ψ

|2.

(49)

But since A and A1 diﬀer only by the c-number A , which commutes with everything, and likewise for B and B1, the commutator in Eq. (49) can be replaced simply by [A, B]. Combining all the pieces, we obtain Eq. (44).

The best known example of this generalized uncertainty principle is the case A = x, B = p,

[A, B] = i¯h, and therefore (after taking the square root)

∆x

∆p

≥

¯h 2

.

(50)

When using the uncertainty principle in the form of Eq. (44), it is important to realize that the measurements of observables A and B are carried out independently on a given ensemble, represented by |ψ . That is, ﬁrst one measures A on the ensemble, and computes A and ∆A; then one measures B on the same ensemble, and computes B and ∆B. One does not measure A and B successively on individual systems in the ensemble. We talked about successive measurements in Sec. 4 above, but that is not what we a-
re talking about when using Eq. (44).

Problems
1. Let A and B be observables, for simplicity with discrete spectra.
(a) Show that [A, B] = 0 if and only if [PAn, PBm] = 0 for all n, m, where PAn and PBm are projectors deﬁned below Eq. (25).
(b) Show that the probabilities deﬁned in Eqs. (29) and (30) are equal for all n, m and |ψ0 if and only if [A, B] = 0.
2. This problem arose out of the thought that maybe the last, unknown sign multiplying µy in Eq. (23) could be determined if we investigated tandem Stern-Gerlach measurements at all possible orientations, not just at right angles.
In this problem we imagine that we know nothing about Pauli matrices or the formalism of spin, but we do know the measurement postulates of quantum mechanics, and we do know certain experimental facts.
In particular, suppose we have a collimated beam of silver atoms from an oven which is passed through a Stern-Gerlach apparatus oriented in the nˆ1 direction. The beam splits in two, and the beam corresponding to spin pointing in the negative nˆ1 direction is thrown away, while the beam corresponding to spin pointing in the positive nˆ1 direction is passed onto a second Stern-Gerlach

Notes 2: Postulates of Quantum Mechanics

17

apparatus, oriented in the nˆ2 direction. Experimentally (or perhaps we should say, gedankenexperimentally), it is found that the probability that an atom entering the second apparatus will be

measured to point in the positive nˆ2 direction is given by

1 2

(1

+

nˆ 1

·

nˆ 2 )

=

cos2

γ/2,

(51)

where γ is the angle between nˆ1 and nˆ2,

cos γ = nˆ1 · nˆ2.

(52)

We take γ to lie in the range 0 ≤ γ ≤ π. The probability of measuring the spin to lie in the negative nˆ2 direction is complementary to (1), namely,

1 2

(1

−

nˆ 1

·

nˆ 2 )

=

sin2

γ/2.

(53)

We notice that all spin measurements produce only two possible results, so we take the Hilbert space of our quantum system to be 2-dimensional, so that the eigenspaces of the operators which corresponds to measurements of spin are nondegenerate. We let S(nˆ) or S(θ, φ) be the operator corresponding to measuring spin with an apparatus pointing in the nˆ = (θ, φ) direction, and we let |S(nˆ)± or |S(θ, φ)± be normalized eigenkets corresponding to the component of spin in the nˆ direction taking on th-
e values ±¯h/2. These eigenkets are subject to phase conventions which we will have to specify further.

(a) At ﬁrst we are interested in expressing the kets |S(θ, φ)± in terms of some standard eigenkets of the operator Sz = S(ˆz) = S(0, 0), which we call |+ and |− . Therefore we consider the case that nˆ1 = nˆ = (θ, φ), and nˆ2 = ˆz. Write the kets |S(θ, φ)± as linear combinations of the kets |± with unknown coeﬃcients. Show that by using the experimental results (51) and (53), and phase conventions for the kets |S(θ, φ)± , it is possible to make the coeﬃcient of |+ real and nonnegative in the expre-
ssion for |S(θ, φ)+ , and the coeﬃcient of |− real and nonnegative in the expression for |S(θ, φ)− , and to determine all coeﬃcients apart from a single phase factor, say, eiβ, where β is an as-yet-unknown function of (θ, φ). Show that with these phase conventions, we have |S(0, 0)+ = |+ , and |S(0, 0)− = |− .

(b) Now write out the operators S(θ, φ) in terms of the basis operators |+ +|, |+ −|, etc., and in terms of the unknown phase β. Show that by changing the phase conventions for all kets |S(θ, φ)+ , including |+ , by a constant phase factor, independent of (θ, φ), and similarly by changing all kets |S(θ, φ)− , including |− , by a (possibly diﬀerent) constant phase factor, it is possible to make β(θ, φ) vanish at one chosen value of (θ, φ). Do this for (θ, φ) = (π/2, 0), so that Sx = S(π/2, 0) will -
have real matrix elements in the |± basis.

(c) Now return to the case of arbitrary nˆ1 = (θ1, φ1) and nˆ2 = (θ2, φ2), and try to use the experimental data (51) and (53) to determine the function β(θ, φ). Is this function completely determined by the experimental data, or is there still some ambiguity?

18

Notes 2: Postulates of Quantum Mechanics

Finally, prove the formula,

S(nˆ) = nˆ · S.

(54)

(d) Were you able to ﬁnd the last, unknown sign in µy in Eq. (23)? If not, how do you think Pauli knew what sign to choose?

3. In quantum mechanics the measurement of one observable introduces an uncontrollable and unpredictable disturbance in the value of any observable that does not commute with the one being measured, as discussed in Sec. 6. For example, a measurement of µz in a Stern-Gerlach apparatus causes the values of µx and µy to become completely undetermined.
We can understand how this disturbance comes about in a classical model. To measure µz, we must use a magnetic ﬁeld in the z-direction, but this causes µx and µy to precess, so their values on emerging from the Stern-Gerlach apparatus are diﬀerent from their values when they entered. If classical mechanics were valid, we could calculate the precession angle for any particular particle in the beam, and compensate for the evolution in µx and µy. The beam has some spatial extent, however, so particle-
s do not follow the same trajectory and their spins do not precess by the same angle, but if the size of the beam is made small enough the spread in these angles can be made as small as we like. In particular, it can be made ≪ 2π, giving us a deﬁnite phase angle for the whole beam, and therefore known (and controllable) eﬀects on µx and µy when we measure µz.
Show that if we try to do this in quantum mechanics, we wash out the eﬀect we are trying to observe, namely, the splitting of the beam into two beams that make two spots on a screen. For simplicity you may assume that Eq. (37) is valid.

S

p X

Figure for problem 4. A scattering experiment.
4. Measuring the Schr¨odinger wave function is not like measuring a classical ﬁeld, such as an electric ﬁeld. Consider a scattering gedankenexperiment in which spinless particles of a given energy are

Notes 2: Postulates of Quantum Mechanics

19

directed at a target, as in the ﬁgure. We wish to measure the wave function downstream from the scatter. We assume the beam is described by a pure state, and that the incident wave is a plane wave (over a suﬃciently large spatial region). The beam is low density, so the particles do not interact with one another. To measure |ψ(r)|2 over some volume of space, we just put a screen S in a certain location, and gather enough statistics to get the probability density on this surface. We then move the s-
urface and measure again.
Describe a modiﬁcation to this gedankenexperiment by which the phase of the wave function ψ(r) can be measured on the screen, apart from the overall phase, which is nonphysical and can never be measured.

Copyright c 2019 by Robert G. Littlejohn
Physics 221A Fall 2019 Notes 3
The Density Operator†

1. The Quantum State of a Thermal Beam

Consider the apparatus illustrated in Fig. 1. A collimated beam of silver atoms is extracted

from an oven, which is then passed to observer 1, who with a Stern-Gerlach apparatus measures Sx.

In these notes we will speak of measuring spin instead of magnetic moment; these are proportional,

S

=

e mc

µ,

(1)

so measuring one implies the measurement of the other. (But physically the Stern-Gerlach apparatus

really measures magnetic moment.) Of the two beams that emerge from the apparatus, the one with

measured value Sx = −¯h/2 is thrown away.

In the previous set of notes we decided that the Hilbert space for the spin of a silver atom is two-

dimensional, and that the eigenspaces of Sx (which are the eigenspaces of µx) are one-dimensional. Therefore according to the postulates of quantum mechanics, whatever the state of the beam when

it enters the ﬁrst apparatus, it will be projected onto the one-dimensional eigenspace of Sx with

eigenvalue +¯h/2 when Sx = +h¯/2 is measured. Therefore the state of the + beam emerging from

the ﬁrst measurement apparatus is described by any nonzero vector in this eigenspace. We let |Sx+ be such a vector, assumed to be normalized. The + beam is passed to observer 2, who measures some

other observable A. According to the measurement postulates of quantum mechanics, observer 2

will measure an average value of A given by

A = Sx+|A|Sx+ .

(2)

The quantity A is the average of a large number of measured values of observable A, which are made on diﬀerent silver atoms.

Ag
oven

+ |Sx +

Sx −

A

observer 1

observer 2

Fig. 1. An atomic beam from a thermal source is prepared by observer 1 who measures Sx, and is then passed to observer 2 who measures some observable A.
† Links to the other sets of notes can be found at: http://bohr.physics.berkeley.edu/classes/221/1920/221.html.

2

Notes 3: Density Operator

Thus the quantum state of the beam emerging from the ﬁrst apparatus is known. But what about the beam that enters the ﬁrst apparatus, coming from the oven? How is its quantum state described? Is it also associated with some state vector?

2. Thermal Beam Not Described by a State Vector

The answer is deﬁnitely no, for a beam from a thermal source such as we have described is isotropic, and has no preferred direction of spin. For if we measure Sx on the thermal beam we ﬁnd 50% of the atoms with Sx = +¯h/2 and 50% with Sx = −¯h/2, for an average of Sx = 0. Similarly we ﬁnd Sy = Sz = 0, or S = 0. Naturally, the thermal beam has no preferred direction of spin.
On the other hand, any deﬁnite quantum state (a so-called “pure” state) of the spin system is associated with a normalized ket in the 2-dimensional Hilbert space, and such a ket is not isotropic but rather necessarily “points in” some direction. To show this, let us represent an arbitrary normalized ket |χ in terms of its components with respect to the basis |+ , |− , consisting of eigenkets of the observable Sz. Then |χ can be written in the form,

|χ = α|+ + β|− ,

(3)

where

|α|2 + |β|2 = 1.

(4)

We can equally well represent |χ in terms of a 2-component spinor,

|χ =

α β

,

(5)

where the column spinor contains the components of |χ with respect to the basis {|± }. Then by

using S = (h¯/2)σ and the standard forms for the Pauli matrices σ, we easily ﬁnd

 α∗β + β∗α   2 Re α∗β 

S

=

¯h 2

 −iα∗β + iβ∗α  |α|2 − |β|2

=

¯h 2

 2 Im α∗β |α|2 − |β|2



=

¯h 2

nˆ,

(6)

where the vector nˆ is the real, 3-component vector shown. Vector nˆ is a unit vector, as follows immediately by computing nˆ · nˆ and using Eq. (4). Thus, S does not vanish, but rather points in some direction nˆ. For example, one ﬁnds that the state |Sx+ “points in” the xˆ direction.
Conversely, if a direction nˆ is speciﬁed by its usual spherical angles (θ, φ),

 sin θ cos φ 

nˆ =  sin θ sin φ  ,

(7)

cos θ

then it is possible to construct a normalized spinor “pointing in” this direction; this spinor is unique up to an arbitrary overall phase. With one choice of phase convention, this spinor is given by

|χ

=

e−iφ/2

cos

θ 2

|+

+ eiφ/2 sin

θ 2

|−

,

(8)

Notes 3: Density Operator

3

or,

|χ =

e−iφ/2

cos

θ 2

e+iφ/2

sin

θ 2

.

(9)

The upshot of all this is that the state of the beam emerging from the oven cannot be described by

any deﬁnite ket in the Hilbert space.

3. A Random Ensemble of State Vectors
Now let us modify the apparatus by allowing the ﬁrst observer to orient his or her Stern-Gerlach apparatus in an arbitrary direction nˆ, as illustrated in Fig. 2, to measure the component of S in the direction nˆ. Furthermore, let us suppose that before each silver atom enters the ﬁrst apparatus from the oven, the ﬁrst observer chooses a random direction nˆ, uniformly distributed in solid angle, in which to orient the apparatus. (Fortunately, this is a gedankenexperiment, but what we describe is p-
ossible in principle. The easiest way to measure the component of the spin in an arbitrary direction would probably be to rotate the spin, rather than the magnet, before the measurement. This could be done with a uniform magnetic ﬁeld. It is also possible in principle to change the direction of the beam without changing the spin by use of an inhomogeneous electric ﬁeld.) The ﬁrst observer keeps this information secret from the second observer, who therefore has no knowledge of the state of polariz-
ation of the beam he or she is receiving.

Ag
oven

+ |Snˆ +

Snˆ −

A

observer 1

observer 2

Fig. 2. Now the ﬁrst observer polarizes the beam in a random direction nˆ.
Under these circumstances, the second observer will be unable to tell, by any measurement performed on the beam, whether the beam has passed through a randomly oriented Stern-Gerlach apparatus on its way from the oven, as illustrated in Fig. 2, or whether it has been received straight from the oven. (We assume that observer 2 has no information about the intensity of the beam, which otherwise would allow the two cases to be distinguished.) In the absence of knowledge about the orientation of the ﬁ-
rst apparatus, the two cases are physically indistinguishable.
[Of course, in making these statements, we are assuming that the beam from the oven really is unpolarized, in the sense that S = 0. It is a matter of experiment to decide whether this is true or not, and we can imagine physical processes in the oven that would result in a net polarization of the beam from the oven. For example, magnetic ﬁelds in the oven would impart an energy diﬀerence (small, but nonzero) to the two spin states, and then the Boltzmann factor would give diﬀerent

4

Notes 3: Density Operator

weights to the two states. But for the sake of this discussion, we assume that the thermal beam really is unpolarized.]
Accepting the equivalence of these two physical situations, the results obtained by measuring observable A on the beam directly from the oven are given by the following expression,

A

=

1 4π

dΩ Snˆ +|A|Snˆ + ,

(10)

where dΩ represents the element of solid angle of the direction in which nˆ points, and where the integral simply averages the expectation value with respect to a deﬁnite state |Snˆ + over all solid angles. The isotropy of the beam is achieved, not by any deﬁnite state vector, but by an isotropic probability distribution of state vectors.

4. Ensembles of State Vectors from a General Standpoint

Let us now consider state vectors distributed according to some probability distribution from a more general standpoint. Let |ψ(λ) be a family of normalized kets depending on some continuous parameter (or parameters) λ, and suppose λ is distributed according to some probability distribution f (λ), so that f (λ) ≥ 0 and

dλ f (λ) = 1.

(11)

For example, in the situation discussed above, λ could be identiﬁed with the angles (θ, φ), so that dλ would represent dΩ = sin θ dθ dφ. Then the expectation value of an arbitrary operator A is given by

A = dλ f (λ) ψ(λ)|A|ψ(λ) ,

(12)

in which the notion of expectation value includes both the statistics inherent in the measurement of a deﬁnite quantum state, and the lack of knowledge about that quantum state. The experimenter cannot tell the diﬀerence between these two types of statistics, based solely on experiments performed on the systems he or she receives.
The discrete case is also of interest. Suppose |ψi is some set of normalized kets, where i is a discrete index to which probabilities fi are assigned, so that fi ≥ 0 and

fi = 1.

(13)

i

Then the expectation value of an arbitrary operator is given by

A = fi ψi|A|ψi .

(14)

i

It is important to note that the kets |ψi are not assumed to be orthogonal; they simply represent a collection of states to which probabilities are assigned. Nor in the continuous case is there any orthogonality relation assumed among the kets |ψ(λ) for diﬀerent values of the parameter λ; for

Notes 3: Density Operator

5

example, in the Stern-Gerlach apparatus discussed above, the states |Snˆ + for diﬀerent values of nˆ are not orthogonal unless the two nˆ vectors point in opposite directions.

5. The Density Operator

We now express the expectation values (12) or (14) in terms of the density operator ρ, deﬁned in the continuous case by

ρ = dλ f (λ) |ψ(λ) ψ(λ)|

(15)

and in the discrete case by

ρ = fi |ψi ψi|.

(16)

i

In terms of ρ, the expectation values (12) and (14) can be written,

A = tr(ρA), (17)
as follows immediately from the deﬁnitions of ρ and the properties of the trace. Equation (17) is a fundamental result in quantum mechanics, as it expresses the results of an arbitrary measurement in the general case in which the state vector is only known in a statistical sense.
The generality of Eq. (17) is even greater than is apparent. At ﬁrst sight is seems that the measurement of the average value of an observable is a special kind of measurement, and furthermore one that throws some information away. For example, if the measurement of A produces three values, a1, a2 and a3, with associated probabilities p1, p2, and p3, then when we compute the average value we have lost information about the possible outcomes and their probabilities. But that information is availabl-
e if we replace A by one of its projectors, say P1, whose average value is p1; or if we replace A by P1A, whose average value is p1a1. Thus, with a suﬃciently broad interpretation of the operator A that appears in Eq. (17), we can say that every possible physical measurement that can be made on a physical system gives a result that can be written in the form (17). Therefore knowledge of the density operator allows one in principle to calculate the results of any measurement process.

6. Pure and Mixed States

The case in which the state of the system is known to be represented by a deﬁnite state vector, for example the case of the beam delivered to the second experimenter in Fig. 1, is one in which one state vector can be assigned a probability of 100%, and all other state vectors have probability zero. In this case, the density operator has the form

ρ = |ψ ψ|,

(18)

where |ψ is the state vector in question, assumed to be normalized. In this case we speak of a pure state. On the other hand, if there is any statistical uncertainty in the state vector, then we

6

Notes 3: Density Operator

speak of a mixed state. Mixed states are the norm in real experiments. There is some subtlety in this deﬁnition, because if we have two kets |ψ1 and |ψ2 that diﬀer only by a phase factor, and we decide to attach 50% probability to each, then in fact we have a pure state. This of course is what we expect, since the two kets are physically equivalent. Similarly, if kets |ψ1 and |ψ2 are nearly linearly dependent, and the system is known to be in one or the other with 50% probability, then the system -
is nearly in a pure state. On can quantify the degree of “pureness” with the entropy, which is discussed below.
Pure and mixed states in quantum mechanics are similar in many respects to coherent and incoherent light in optics. For example, an ensemble of light waves with random phases but very nearly the same k vector (all moving in nearly the same direction with the same frequency) represents nearly coherent light. This is the case with light from a star, in which the angular spread in k is the very small angular diameter of the star. Although the individual light wave are emitted incoherently by atoms on-
 the surface of the star, the light arrives at earth in a high degree of coherence. (More precisely, it has a large correlation length, which can be many meters. As realized by Michaelson, measurements of this correlation length can be used to determine the angular diameter of a star, something that cannot be done with ordinary telescopes because the angles are too small).
7. A Complete and Minimal Description of the Physics
The density operator contains a complete and minimal description of the information available about the given system (more precisely, about the ensemble of identically prepared systems). The description is complete because, as discussed above, knowledge of ρ suﬃces to calculate the outcome of any statistical measurement. The description is minimal because ρ can be measured (see Sec. 18). There are no phase or other conventions involved in determining the density operator. Therefore the density ope-
rator contains the physics, all the physics, and nothing but the physics. This is in contrast to wave functions or state vectors, which are subject to phase conventions (and which in any case only work for pure states). It is easy to see from the deﬁnitions (15) and (16) that the density operator is independent of the phase conventions inherent in its constituent state vectors.
8. The Statistical Nature of the Measurement Process
In these discussions, however, the measurement process in quantum mechanics must be understood in the appropriate, statistical sense. The postulates of quantum mechanics are obviously stated in statistical terms; nothing is said about the outcome of a measurement performed on an individual system. For example, if we feed a x-polarized beam of silver atoms into a Stern-Gerlach magnet oriented in the z-direction, then neither quantum mechanics nor anything else in the universe can say whether an ind-
ividual silver atom will go up or down in the magnet. What quantum mechanics does do is make predictions about the distribution of up- and down-going atoms when large numbers of silver atoms, prepared in an identical way, are sent into the z-magnet. In the general case, we

Notes 3: Density Operator

7

must imagine an ensemble of identically prepared systems—in imagination, an inﬁnite number— upon which measurements are made. Quantum mechanics predicts the statistical distribution of measurements on such ensembles. In the orthodox interpretation of quantum mechanics, that is all it does: the density operator ρ, which is measurable on an ensemble of identically prepared systems, is the repository of all information about that ensemble of systems, and allows us to predict the outcome (in a statist-
ical sense) of any experiments performed on that system in accordance with Eq. (17).
9. Quantum Statistics and Hidden Variables
In quantum mechanics it is meaningful to talk about the value of a certain observable, if the system has been prepared in an eigenstate of that observable with some eigenvalue (which is done by measuring that observable and keeping only those systems with a particular outcome). Then subsequent measurements of that observable will return the given eigenvalue with 100% probability, as explained in Sec. 2.8. More generally, we can prepare a system in a simultaneous eigenstate of commuting observables-
, and we can talk about the values of those observables. If the observables in question are not constant in time (if they do not commute with the Hamiltonian), then the system will not remain in the given eigenstate, and in order to obtain the 100% probability quoted it will be necessary to make the subsequent measurements immediately after the preparation. In particular, the Hamiltonian for an isolated system commutes with itself, so if a system is measured to have a certain energy, then it is me-
aningful afterwards (assuming the system remains isolated) to talk about its energy.
There is, however, no role played in the orthodox interpretation of quantum mechanics for the simultaneous values of noncommuting observables. These are in principle not measurable. We are of course tempted by the analogy with classical mechanics to think in such terms, because in classical mechanics such simultaneous values of noncommuting observables are meaningful. But to do so means that we are using concepts for understanding physical reality that have no physical consequences. One is reminde-
d of Newton’s ideas of absolute space and time, which likewise had no physical consequences, and which were eliminated from physics with the advent of relativity theory. The idea of basing quantum mechanics on strictly measurable quantities seems to be due to Heisenberg, who was apparently inﬂuenced by Einstein’s similar reasoning in his development of relativity theory.
In classical statistics, we can reduce our uncertainty about an ensemble (increase our information) by ﬁltering the system, for example, extracting balls from an urn and keeping only those with a red spot. The new (reduced) ensemble is now known to contain only balls with a red spot on them. Similarly, in quantum mechanics, we can reduce our uncertainty of a system described by some density operator ρ by performing measurements. As discussed later in these notes, a measurement produces a new densi-
ty operator ρ′, representing a (reduced) ensemble about which we have more information. Our information (or rather the lack of it) can be quantiﬁed by the entropy, deﬁned in

8

Notes 3: Density Operator

Eq. (37), which reaches its minimum value of zero when a complete set of commuting observables has been measured and the system is in a pure state. Even in a pure state, however, the results of experiments are still predicted only in a statistical sense. In this important sense quantum statistics diﬀers greatly from classical statistics.
The idea that nature is intrinsically statistical is one that has not sat well with a number of physicists, notably Einstein. One way of escaping from the orthodox view is to imagine that there are extra dynamical variables present in a physical system, so-called “hidden variables,” which we do not usually measure but which, if we could know them, would allow us to predict the outcomes of individual measurements. There are a variety of hidden variable theories that compete with quantum mechanics a-
nd attempt to explain the experimental results within a framework that is fundamentally deterministic, not statistical. These theories can be classiﬁed as “local” or “nonlocal.” In a nonlocal hidden variable theory, communication between diﬀerent parts of the system takes place faster than the speed of light, that is, instantaneously in some Lorentz frame. Since this seems unlikely from the standpoint of relativity theory, local hidden variable theories seem preferable. However, as ﬁrst shown by J-
. S. Bell in 1965, local hidden variable theories give physical predictions that diﬀer from those of quantum mechanics. Experiments testing these predictions were carried out by Alain Aspect in the 1980’s, and they showed that quantum mechanics is correct. For this reason, there does not seem to be much room left for hidden variable theories, although there is speculation about nonlocal hidden variable theories in quantum gravity. See Quantum Gravity by Lee Smolin for a nontechnical discussion of -
some of these ideas.
For these reasons it seems to me that the orthodox view of quantum mechanics is probably correct, and that it is unwise in talking about quantum mechanics to use a language that implies a reality to the simultaneous values of noncommuting observables. I suspect, however, that there will be a reinterpretation of quantum mechanics when and if quantum gravity is ﬁnally comprehended.

10. The Properties of the Density Operator

We return now to the density operator and describe its characteristic properties, of which there are three. First, ρ is Hermitian, as follows immediately from the deﬁnitions (15) and (16). Second, ρ is nonnegative deﬁnite (see Eq. (1.65)), as follows by computing the expectation value of ρ with respect to an arbitrary ket |φ ,

φ|ρ|φ = fi | ψi|φ |2 ≥ 0,

(19)

i

where for simplicity we work with the discrete case. The third characteristic property of a density

operator is that it has unit trace,

tr ρ = 1.

(20)

This property is equivalent to the normalization condition on the probabilities, Eq. (11) or (13), as one can easily show. Conversely, as we shall show below, every nonnegative deﬁnite, Hermitian

Notes 3: Density Operator

9

operator with unit trace can be interpreted as a density operator, that is, there exist kets and corresponding statistical weights such that the operator can be written in the form (15) or (16).

11. Decomposing a Density Operator into Pure States with Weights

Let us return now to the atomic beam emerging from the oven in Fig. 1 or 2, and actually

compute the density operator that represents it. We use the continuum formula (15), which in the

present case becomes

ρ

=

1 4π

dΩ |Snˆ + Snˆ +|.

(21)

We write the integrand in terms of spinors and matrices in the Sz basis, so that the outer product becomes the product of a column spinor times a row spinor,

e−iφ/2

cos

θ 2

e+iφ/2

sin

θ 2

e+iφ/2

cos

θ 2

e−iφ/2

sin

θ 2

=

cos2

θ 2

e+iφ

sin

θ 2

cos

θ 2

e−iφ

sin

θ 2

cos

θ 2

sin2

θ 2

.

(22)

Here we are identifying |Snˆ + with the state χ in Eq. (9). When we average the resulting matrix

over

solid

angles,

the

oﬀ-diagonal

elements

vanish,

and

the

diagonal

elements

each

give

1 2

.

Therefore

ρ is represented by a multiple of the identity matrix in the Sz basis,

ρ=

1 2
0

0
1 2

,

(23)

or, in terms of explicit basis vectors,

ρ

=

1 2

|+

+| + |−

−|

=

1 2

.

(24)

Although this calculation was carried out in the Sz basis, the answer is independent of that basis. It is an important lesson of this calculation that an isotropic density operator is represented by a

multiple of the identity matrix; as we will see later when we discuss the theory of rotation operators,

only such a matrix is invariant under rotations.

Let us now return to the apparatus sketched in Fig. 2, and change the game somewhat. Let

us suppose that observer 1, instead of choosing the orientation nˆ of the Stern-Gerlach apparatus

uniformly over all solid angles, makes a choice between only two possibilities, nˆ = ˆz and nˆ = −ˆz,

each with 50% probability. That is, suppose the only two directions chosen for nˆ lie at the north

and south poles. Then we have an example of a discrete set of state vectors as in Eq. (16), with |ψi

identiﬁed with |+

and |−

for

i

= 1, 2,

each

with

probability

1 2

.

It

follows

that

the

density

operator

is

ρ

=

1 2

|+

+|

+

1 2

|−

−|.

(25)

10

Notes 3: Density Operator

But this is the same density operator as in Eq. (24), obtained under the assumption of an isotropic distribution of vectors nˆ! Therefore, since the density operator contains within it the results of all physical measurements that can be performed on the ensemble of systems, it is impossible to tell by any experiment whether the ensemble contains atoms polarized in directions that are random and uniform distributed over all solid angles, or simply in the ±ˆz directions.
12. The “Real” Wave Functions
There is another important lesson contained in this result, namely, that there is no unique decomposition of a given density operator into a set of pure states with probability weights. Such a decomposition into pure states and associated weights can be carried out in many diﬀerent ways. But since the density operator contains all the physics that can be measured on a given ensemble of systems, one cannot determine by any physical measurement which pure states and associated weights are the “real”-
 ones. The reality is the density operator itself.
This point would be easier to understand if we had not deﬁned the density operator in the ﬁrst place in terms of pure states and associated weights [Eqs. (15) and (16)]. We did this because you have probably spent more time thinking about wave functions than density operators, so you have some feel or intuition for wave functions. Mixed states may be the norm in real experiments, but pure states are the norm in ﬁrst courses in quantum mechanics and homework problems. But our presentation has been -
circular: we deﬁned the density operator in terms of pure states, and then deﬁned a pure state in terms of the density operator. A more satisfactory approach from a logical standpoint would be to incorporate density operators into the postulates of quantum mechanics from the outset, and then to “derive” pure states as a special case. We will, in fact, present a revised and ﬁnal version of the postulates of quantum mechanics in Sec. 19, formulated in terms of the density operator, and you should re-
gard these as a satisfactory starting point for understanding the measurement process in quantum mechanics.
This point has interesting implications in some practical situations. Consider, for example, a scattering experiment, in which a beam of particles is directed at a target. As you know, in mathematical treatments of scattering theory, it is common to speak of a plane wave incident on a target, which is scattered into a scattered wave. This is done for reasons of mathematical simplicity, but note that a plane wave is not normalizable and cannot represent the quantum state of a real particle. A more -
sophisticated approach uses wave packets, which is somewhat closer to real physics because wave packets are normalizable and can represent physically realizable states (but pure ones). But when we are faced with a real accelerator, an obvious question is, what actually is the wave function of the particles coming out? Is it a plane wave, a wave packet, or something else? And how would we know? The answer is that in most cases the state of the particles emerging from an accelerator is not a pure st-
ate at all, but rather a statistical mixture, which must be represented by a density operator. Since the density operator has no unique decomposition into pure states, the question about the “real” wave function of the particles is meaningless.

Notes 3: Density Operator

11

Another shortcoming in ﬁrst courses in quantum mechanics is that they spend a lot of time talking about wave functions, but little time explaining how a wave function is measured. Measuring a wave function in quantum mechanics is not like measuring a wave ﬁeld in classical mechanics (for example, an electromagnetic wave in classical electromagnetic theory). Consider, for example, a spinless particle moving in three dimensions. As you know, if the system is described by a wave function ψ(x), then t-
he probability density for ﬁnding the particle somewhere is space is

P (x) = |ψ(x)|2.

(26)

Certainly we can measure P (x), at least in principle, by making measurements on an ensemble of identically prepared systems. And if the system is described by a wave function ψ(x), then we have determined the amplitude of ψ, that is,

ψ(x) = P (x) eiφ(x),

(27)

where φ is a phase that is not determined by our measurements and which may be a function of position. Obviously further measurements are needed to determine this phase.
But before we do that we must ask, how do we even know that the system is represented by a wave function ψ(x), that is, how do we know that it is in a pure state? If the system is represented by a density operator ρ that has a decomposition into a discrete set of pure states and associated weights as in Eq. (16), then what we have actually measured is

P (x) = fi|ψi(x)|2.

(28)

i

This in fact is the diagonal matrix element of the density operator in the position representation,

ρ(x, x′) = x|ρ|x′ = fiψi(x)ψi(x′)∗,

(29)

i

that is, we have measured

P (x) = ρ(x, x).

(30)

The x-space matrix elements of ρ given in Eq. (29) actually constitute the correlation function of the quantum wave function. Generally speaking, the correlation function of a wave ﬁeld is the statistical average of a product like ψ(x)ψ(x′)∗, for example, one can talk about the correlation function of the electric ﬁeld in optics. Thus, before we attempt to measure the phase φ in Eq. (27), we should make sure that we have a pure state. One way to do this would be to measure the oﬀ-diagonal elements-
 of ρ, thereby determining ρ as an operator, and then decide whether it represents a pure state. See Sec. 14.

13. General Properties of the Density Operator (Continued)
In the following (and for the rest of the course) we will adopt the point of view that the density operator is the primary object and that pure states are just a special case. This is certainly how

12

Notes 3: Density Operator

it is in real experiments, but it means that our original “deﬁnitions” of the density operator, in

Eqs. (15) and (16), are not satisfactory, because they express the density operator in terms of a

statistical ensemble of pure states. Nevertheless, those equations do give a useful perspective on

the density operator, which is directly applicable in situations such as the gedankenexperiment we

considered earlier in which the beam of atoms was polarized in a random direction. Moreover, as

shown in Sec. 10, they lead to three important properties of the density operator: it is Hermitian,

it is nonnegative deﬁnite, and it has unit trace.

To pursue this idea, we now ask, if an operator ρ has these three properties, can it be represented

as a statistical mixture of pure states? That is, do there exist weights and state vectors such that

Eq. (15) or (16) is true? The answer is yes, as we now show.

Suppose we have a nonnegative deﬁnite, Hermitian operator ρ of unit trace. Consider its

eigenkets |n and eigenvalues pn,

ρ|n = pn|n .

(31)

The operator ρ can only have a discrete spectrum, because any operator with a continuous spectrum

has a trace that is inﬁnite (or not deﬁned, see Sec. 1.22). Since ρ is Hermitian, the eigenvalues pn are real. Furthermore, since ρ is nonnegative deﬁnite, we can multiply Eq. (31) on the left by n| to

obtain

n|ρ|n = pn ≥ 0.

(32)

Next, by summing this over n and using the fact that tr ρ = 1, we obtain

pn = 1,

(33)

n

so that the pn are nonnegative numbers that sum to unity and can be interpreted as probabilities. Finally, expressing ρ in terms of its eigenvalues and projectors, we have

ρ = pn |n n|,

(34)

n

which is a special case of Eq. (16). This proves the assertion.
We see that an arbitrary density operator can actually be represented in terms of a discrete, orthonormal set of pure states and associated weights; but we emphasize again that in the general representation of a density operator in terms of pure states, as in Eq. (16), there is no requirement that the states |ψi be orthogonal (nor do they have to belong to a discrete family, as we have seen in the example discussed in Sec. 3). We also emphasize that the decomposition of ρ into pure states and weig-
hts is not unique. Nevertheless, since such a decomposition always exists, it is never wrong to assume such a representation of a density operator for the purpose of calculation or of understanding its properties.

Notes 3: Density Operator

13

14. Criteria for a Pure State

How do we know if a density operator is actually a pure state, that is, that it can be written

ρ = |ψ ψ| for some normalized ket |ψ ? The most direct answer is to diagonalize ρ. If all the eigenvalues are zero except one that is 1, and if the eigenvalue 1 is nondegenerate, then the state is pure, and it is represented by the eigenket of ρ with eigenvalue 1. It that case ρ is a projection operator onto the one-dimensional eigenspace of eigenvalue 1.

Here are some other criteria for a pure state. First we have the theorem, that for any density operator ρ,

tr ρ2 ≤ 1,

(35)

with equality if and only if ρ represents a pure state. The proof of this theorem will be left as an exercise (see Prob. 2). Another test relies on the fact that a density operator ρ represents a pure state if and only if ρ2 = ρ (so that ρ is a projector). Yet another test is based on the entropy (deﬁned momentarily).

15. How to Prepare a Pure State in Practice
One way to prepare a pure state in practice is to measure a complete set of commuting observables. This was done in the Stern-Gerlach gedankenexperiment described in Fig. 2.1, in which the beam is in a pure state (of its spin degrees of freedom) after the ﬁrst measurement of µx.
For another example, consider an ensemble of atoms extracted from an oven that is hot enough that there are signiﬁcant populations of excited states, or the ensemble created when atoms are bombarded by an electron beam with an energy high enough to raise them into excited states. Such an ensemble is a mixed state with various probabilities for the excited states. If we just wait long enough, however, all these atoms (after we have extracted them from the oven or the electron beam, where they becom-
e isolated systems) will decay into the ground state, emitting one or more photons. After the photons have departed, we are left with an atom that is in the ground state with 100% probability. More generally, all systems move toward the ground state as the temperature is lowered, becoming more and more “pure.”
Creating an atom in an excited pure state can be done to some approximation with optical pumping techniques, in which an atom in the ground state is exposed to an electromagnetic ﬁeld. To the extent that this electromagnetic ﬁeld is known precisely, the state of the atom can be calculated by solving the Schr¨odinger equation, with the initial (pure) ground state as initial conditions. The resulting state is generally not an energy eigenstate, so it has a nontrivial time evolution.
√ For another example, consider a beam of particles of the same energy E and p = 2mE/¯h (the magnitude of momentum), but with some spread δθ in direction. Let this beam fall on a screen with a hole of size a ≪ λ/δθ, where λ = 2π¯h/p is the de Broglie wave length. Then the quantum state of the particles that pass through the hole is a pure state.

14

Notes 3: Density Operator

You can visualize this by thinking of an ensemble of waves with random phases impinging on the small hole. The waves that emerge from the other side are nearly spherical waves centered on the hole, or, rather, a statistical mixture of such waves with random phases. But since these waves are all nearly proportional to one another, as we have seen, the ensemble itself is a pure state.
In a similar way it is possible in optics to create nearly coherent light from an incoherent source by ﬁrst selecting a deﬁnite frequency (with a prism or diﬀraction grating, for example), and then passing the light through a small hole.

16. Quantum Statistical Mechanics
Statistical mechanics applies whenever we have only partial information about a system, so that certain quantities are known only in a statistical sense. As we have seen, in quantum mechanics the state of our (incomplete) knowledge about such a system is speciﬁed by the density operator. A special case of interest is that of a system in thermal equilibrium at a given temperature T ; for that case a particular density operator is appropriate, but one can also consider other (nonequilibrium) situati-
ons.
In the general case (equilibrium or nonequilibrium), a given density operator ρ can be associated with an entropy S, according to the formula,

S = −k tr(ρ ln ρ) = −k ln ρ ,

(36)

where k is the Boltzmann constant, where the logarithm of the operator ρ is deﬁned as in Sec. 1.25, and where the angular brackets represent the statistical average as in Eq. (17). In particular, if we write out the trace in terms of the orthonormal eigenkets of ρ itself, we have

S = −k pn ln pn,

(37)

n

where the pn are the eigenvalues of ρ, as in Eq. (31). It is easy to show that S = 0 for a pure state, and S > 0 for a mixed state.
The justiﬁcation of Eqs. (36) or (37) is based on information theory and will not be repeated here. Suﬃce it to say that the entropy is the negative of a measure of the information available about a system, so that lower entropy means more information and vice versa. In particular, the minimum value of entropy S = 0 corresponds to the maximum amount of information one can have about a system, that is, the knowledge that it is in a pure state. By making measurements on a system, we can increase our-
 information about the system and thereby decrease the entropy. The deﬁnition (37) is the obvious quantum analog of the classical expression ﬁrst written down by Boltzmann in the 1870’s for the entropy of a system. Boltzmann was the ﬁrst to generalize the deﬁnition of entropy from equilibrium to nonequilibrium situations and to appreciate its statistical foundations.
If entropy is maximized subject to the constraint that the average value of energy is known, then we obtain the density operator for a system at thermal equilibrium at a given temperature. In

Notes 3: Density Operator

15

this most important case we have

ρ

=

1 Z

e−βH

,

(38)

where β = 1/kT is the usual thermodynamic parameter, and where Z = Z(β) is the partition function, which otherwise is the normalization factor required to make tr ρ = 1:

Z(β) = tr e−βH. (39)

The parameter β enters into Eq. (38) as the Lagrange multiplier enforcing the given average value of

the energy. Notice that the density operator ρ in thermal equilibrium is a function of the Hamiltonian

operator, as deﬁned in Sec. 1.25.

These equations are often written in terms of the eigenvalues and eigenkets of the Hamiltonian.

We write

H|nα = En|nα ,

(40)

where α is an index used to resolve any degeneracies,

α = 1, . . . , gn,

(41)

where gn is the order of the degeneracy of level En. Then since ρ is a function of the Hamiltonian, it is diagonal in the energy eigenbasis,

ρ

=

1 Z

e−βEn |nα nα|,

(42)

nα

and

Z(β) = e−βEn = gne−βEn.

(43)

nα

n

Because of these relations, the problem of computing the operator e−βH, or at least its trace, is of

central importance in statistical mechanics.

The partition function Z(β) is a generating function for many of the functions (such as the

equation of state) that are of interest in equilibrium statistical mechanics. However, it contains less

information than the density operator itself, and for a complete statistical description of the system

(the calculation of the statistical distribution of all possible observables), the full density operator

(42) must be used.

The physics of Eq. (38) is that of a system that has been prepared by allowing it to equilibrate

with a heat bath at temperature T , which then (in imagination, at least) is detached from the heat

bath and delivered to an experimenter for measurements. For example, the atoms in the ovens

illustrated in Figs. 1 and 2 can be thought of as being in contact with a heat bath while inside the

oven, where there are frequent collisions between atoms in the hot gas (for example, silver vapor)

and between atoms and the walls of the oven. That is, the rest of the gas and the walls can be

thought of as a heat bath for a particular atom.

16

Notes 3: Density Operator

17. Coherent and Incoherent Superpositions

It is important to distinguish a density operator such as (42), which represents an incoherent

superposition of energy eigenstates, from a coherent superposition of energy eigenstates, which is a

pure state of the form

|ψ = cn|n .

(44)

n

(Here we drop the index α, assuming a nondegenerate spectrum for simplicity.) If the ket |ψ is

known, then the expansion coeﬃcients cn are also known, and we have

Prob(E = En) = |cn|2.

(45)

This pure state corresponds to the density operator,

ρ = |ψ ψ| = cnc∗m|n m|,

(46)

nm

which diﬀers from the density operator (42) by the presence of oﬀ-diagonal terms. The probabilities of the ﬁnding the system in various energy eigenstates depends only on the
magnitudes of the coeﬃcients cn and not their phases, as we see in Eq.(45). Let us write

cn = aneiφn ,

an = |cn|,

(47)

so that cn is broken into its amplitude an and phase φn. There are many circumstances where the

phases φn are not as well known as the amplitudes an; in particular, a measurement of energy alone

gives no information about these phases. Moreover, the coeﬃcients cn are not constant in time, but

evolve according to

cn(t) = cn(0) e−iEnt/h¯ ,

(48)

so the phases φn evolve in time and at a diﬀerent rate for each energy level. Even if we imagine the φn to be known at some initial time, they will tend to become randomized as time goes on, since any uncertainties in the energy eigenvalues will result in an increasing uncertainty in the phases φn as time progresses, ultimately becoming much larger than 2π. In addition, interaction with other systems (for example, a heat bath) will cause random phase shifts to be introduced into the φn. This leads-
 us to consider a random phase ensemble, in which the amplitudes an are presumed known, but the phases φn are uniformly distributed on [0, 2π] and uncorrelated with one another.
In that case, we should replace the density operator (46), which we now write in the form,

ρ=

anam ei(φn−φm) |n m|,

nm

(49)

by its average over the random phase ensemble. The average only aﬀects the phases in this expression,

for which we have,

ei(φn −φm )

= δnm,

phases

(50)

Notes 3: Density Operator

17

since if n = m we are averaging the constant 1, while if n = m the average over the statistically independent phases vanishes. Thus the density operator (49) becomes

ρ = a2n|n n|.

(51)

n

In contrast to (49), this is an incoherent superposition of energy eigenstates. The density operator in thermal equilibrium is just such an incoherent superposition, in which the probabilities of the various energy eigenstates are given by the Boltzmann factor e−βEn/Z.

18. Measuring the Density Operator

The density operator is in principle measurable, given an ensemble of systems. This is an

important fact that is necessary for its role as the fundamental object describing the state of the

system. The measurement of ρ does not involve any phase or other conventions.

As

a

simple

illustration,

consider

a

spin

system

with

spin

1 2

,

such

as

the

silver

atoms

in

a

Stern-

Gerlach experiment. By making measurements on the beam, we can determine S = tr(ρS), where

S = (h¯/2)σ. As for ρ, we expand it as a linear combination of the identity and the three Pauli

matrices (see Prob. 1.3 (c)),

ρ = aI + b · σ,

(52)

where

a

=

1 2

tr ρ

=

1 2

and

where

bi

=

1 2

tr(σiρ)

=

1 ¯h

tr(Siρ) =

1 ¯h

Si

.

(53)

Altogether, we ﬁnd

ρ

=

1 2

I

+

2 ¯h

S

·σ

.

(54)

From this it is easy to show that ρ is a pure state if and only if | S | = h¯/2, so that S = (h¯/2)nˆ,

where nˆ is a unit vector. In that case we have

ρ

=

1 2

(I

+

nˆ

·

σ).

(55)

It is left as an exercise to show that the state vector in this case is given by Eq. (8) (in terms of the spherical angles of the unit vector nˆ).

19. The Postulates of Quantum Mechanics (Revised)
We will conclude this discussion by revising the postulates of quantum mechanics presented in Notes 2, to incorporate the density operator. The revised postulates are the following:
1. Every physical system is associated with a Hilbert space E. 2. Every state of a physical system is associated with a density operator ρ acting on E, which is a
Hermitian, nonnegative deﬁnite operator of unit trace, tr ρ = 1.

18

Notes 3: Density Operator

3. Every measurement process that can be carried out on the system corresponds to a complete Hermitian operator A.
4. The possible results of the measurement are the eigenvalues of A, either the discrete eigenvalues a1, a2, . . . or the continuous ones a(ν).
5. The average value measured for the operator A is tr(ρA). The following two rules can be regarded as special cases of this. In the discrete case, the probability of measuring A = an is

Prob(A = an) = tr(ρPn),

(56)

where Pn is the projection operator onto the eigenspace En corresponding to eigenvalue an, as indicated by Eq. (1.124). In the continuous case, the probability of measuring A to lie in some interval I = [a0, a1] of the continuous spectrum is

Prob(a0 ≤ A ≤ a1) = tr(ρPI ),

(57)

where PI is the projection operator corresponding to interval I, as in Eq. (1.128). We will not present the revision of postulate 6 here, but rather leave it as an exercise.

Problems

1. The projection postulate of quantum mechanics says that if a system is described by a pure state |ψ (here assumed to be normalized), then after a measurement of the operator A producing eigenvalue an, the system is described by the (normalized) state

|ψ′ = Pn|ψ ,

(58)

ψ|Pn|ψ

where Pn is the projector onto the n-th eigenspace of A. Suppose instead the system is described initially by a density operator ρ (assumed normalized).
What is the (normalized) density operator ρ′ after the measurement? Express your answer in terms of the original density operator ρ. Do not assume the eigenvalue an is nondegenerate. Do not just write down an answer, to get credit you must justify it.

2. Show that if ρ is a density operator, then tr ρ2 ≤ 1, with equality if and only if ρ represents a pure state.

3. Here is another approach to the density operator. Suppose we have a total system t which is composed of a subsystem s of interest, plus the rest r of the total system. For example, let system s be an atom. Then system r could be another microscopic system which has interacted with the atom; it could be a second, identical atom, with both atoms ﬂying apart and carrying spin correlations as in an Einstein-Podolsky-Rosen experiment; it could be a heat bath; it could be a macroscopic

Notes 3: Density Operator

19

measuring apparatus; it could be the rest of the universe. System r may interact with system s only for certain time intervals, as we wish (in other words, we may wish to assume that systems s and r are noninteracting at certain times).
Let |n (s) and |m (r) be bases of kets in the Hilbert spaces for the subsystem of interest and the rest of the system, respectively, so that the product kets |n (s)|m (r) are basis kets for the Hilbert space for the total system. Let spaces Es, Er and Et be the Hilbert spaces for the system of interest, the rest of the system, and the total system, respectively.
Suppose the total system is in a pure state |ψ ∈ Et. If systems s and r are noninteracting (at some time), you might suppose that we could describe system s by means of a wave function, i.e., as a pure state; but this is impossible in general. Show that if As is an operator which acts only on ket space Es, then the expectation value of As can be expressed in terms of an operator ρs which also acts only on Es. That is, show that with a proper deﬁnition of ρs, we have

As = tr(ρsAs).

(59)

Express ρs in terms of the expansion coeﬃcients of |ψ with respect to a basis in Et. Show that ρs satisﬁes all the requirements of a density operator, namely, it is Hermitian, nonnegative deﬁnite, and has unit trace.

Copyright c 2019 by Robert G. Littlejohn
Physics 221A Fall 2019 Notes 4
Spatial Degrees of Freedom†

1. Introduction
In these notes we develop the theory of wave functions in conﬁguration space, building it up from the ket formalism and the postulates of quantum mechanics. We consider a system with one particle moving in space. In this set of notes we will not deal with the dynamics of the particle, so we will not need to say what the Hamiltonian is (that is taken care of in Notes 5). We assume the particle has no spin or other internal degrees of freedom, or that if such degrees of freedom exist they can be ign-
ored. This allows us to establish an isomorphism between the Hilbert space of kets and the Hilbert space of wave functions on conﬁguration space. We then introduce translation operators and use them and the classical correspondence to motivate the deﬁnition of momentum in quantum mechanics. We then explore the two representations, position and momentum, and the relationship between them. Finally, we discuss minimum uncertainty wave packets.

2. The Position Representation; Wave Functions

For simplicity we begin with the one-dimensional case, in which the physical system is a par-

ticle moving in one dimension. According to the postulates of quantum mechanics, this system is

associated with a Hilbert space E. We assume the position x of a particle in one dimension can be

measured, and that the results of the measurement are continuous. Thus, we are dealing with the

case of the continuous spectrum. We denote the operator corresponding to measuring x by xˆ, so the

eigenvalue-eigenket problem is

xˆ|x = x|x .

(1)

Here xˆ is the operator, x is the eigenvalue, and |x is the eigenket with eigenvalue x. Since x belongs to the continuous spectrum, the eigenkets |x are not normalizable and lie outside Hilbert space.
We also assume that xˆ by itself forms a complete set of commuting observables, which, as we shall see, means that the wave function is a scalar (it has only one component). In practice, this means that we are dealing with a spinless particle (a particle of spin 0, for example, the π-meson, the nucleus of ordinary helium, or the hydrogen atom in its ground state). It may also mean that

† Links to the other sets of notes can be found at: http://bohr.physics.berkeley.edu/classes/221/1920/221.html.

2

Notes 4: Spatial Degrees of Freedom

we have a particle with spin, such as the electron, but the spin degrees of freedom are not important for the physics we are interested in. This point was discussed in Sec. 2.5.
Since xˆ is a complete set of commuting observables, the eigenkets |x are nondegenerate and form a basis in the Hilbert space in the continuum sense. These eigenkets are only deﬁned by Eq. (1) to within a normalization and a phase. We ﬁx the normalization by requiring

x1|x2 = δ(x1 − x2),

(2)

the usual orthonormality condition in the continuum. The phase conventions for the eigenkets |x

are a question we shall return to later. Under these assumptions, the resolution of the identity takes

the form

+∞

1=

dx |x x|.

(3)

−∞

Now let |ψ represent a normalized (pure) state of the system, let I = [x0, x1] be an interval on the x-axis, and let PI be the corresponding projection operator,

x1

PI = dx |x x|.

(4)

x0

Then, according to the postulates of quantum mechanics (Sec. 2.2), we have

x1

Prob(x0 ≤ x ≤ x1) = ψ|PI |ψ = dx ψ|x x|ψ .

(5)

x0

We now introduce the deﬁnition,

ψ(x) = x|ψ , (6)

of the wave function ψ(x), whereupon the probability (5) can be written,

x1

Prob(x0 ≤ x ≤ x1) =

dx |ψ(x)|2.

(7)

x0

Since the interval [x0, x1] is arbitrary, we see that |ψ(x)|2 must be interpreted as the probability density of ﬁnding the particle on the x-axis. We have derived wave functions from the ket formalism plus the postulates of quantum mechanics, as promised in Notes 1.
Equation (6) is important because it shows how to go from kets to wave functions. It takes the place of sloppy notation such as Eq. (1.7). That is, in addition to the Hilbert space E of kets, we have another Hilbert space, this one consisting of normalizable wave functions on conﬁguration space, ψ(x). Equation (6) expresses the mapping between these spaces, which identiﬁes kets with wave functions. To go the other direction, we multiply |ψ on the left by the resolution of the identity (3),

|ψ = dx |x x|ψ ,

(8)

Notes 4: Spatial Degrees of Freedom

3

which, by using Eq. (6), becomes

|ψ = dx |x ψ(x). (9)
This is the inverse of Eq. (6), allowing one to go from a wave function ψ(x) to the corresponding ket |ψ . We see that ψ(x) is the set of expansion coeﬃcients of the ket |ψ in the position eigenbasis.
Another consequence of this formalism follows easily. Suppose we have two kets |ψ and |φ , and we wish to compute the scalar product ψ|φ in wave function language. We simply insert the resolution of the identity (3) between the bra and the ket to obtain,

ψ|φ = dx ψ|x x|φ = dx ψ∗(x)φ(x),

(10)

a familiar formula that translates the scalar product on the Hilbert space of kets into the language

of wave functions.

This formalism is easily generalized to three dimensions. Let x be a position vector in three-

dimensional space, with components (x, y, z) or (x1, x2, x3). The measurement of the three components of position corresponds to a vector of operators, which we denote by xˆ (with a hat), to

distinguish the operators from their eigenvalues (the results of the position measurement). In quan-

tum mechanics, when we speak of a “vector operator” we usually mean a vector of operators, in

this case three operators xˆ = (xˆ, yˆ, zˆ) = (xˆ1, xˆ2, xˆ3). We assume that the components of xˆ commute with one another,

[xˆi, xˆj ] = 0,

(11)

which as explained in Notes 2 can be tested experimentally. For example, if we ﬁlter a beam in x

and then y by means of small slits, or do it in the reverse order, we ﬁnd that the statistical results

of arbitrary measurements on the ﬁltered beam are the same in both cases.

As above we assume that we can ignore any internal degrees of freedom of the particle, so

that the three operators xˆ by themselves form a complete set of commuting observables. Then

the simultaneous eigenkets of xˆ are nondegenerate and form a basis by themselves. The eigenket-

eigenvalue problem is

xˆi|x = xi|x ,

(12)

for i = 1, 2, 3, a set of three simultaneous equations satisﬁed by an single eigenket |x = |x, y, z , labeled by the three eigenvalues of the three commuting operators. In obvious generalizations of the one-dimensional case, we normalize these kets according to

x1|x2 = δ3(x1 − x2) = δ(x1 − x2)δ(y1 − y2)δ(z1 − z2),

(13)

we have a resolution of the identity,

1 = d3x |x x|,

(14)

4

Notes 4: Spatial Degrees of Freedom

and the transformation between wave functions and kets is given by

ψ(x) = x|ψ ,

(15)

and

|ψ = d3x |x ψ(x).

(16)

Also, the probability that the particle will be found in a region R of three-dimensional space is

d3x |ψ(x)|2,

(17)

R

so |ψ(x)|2 must be interpreted as the probability density.

Equations (6) or (15) deﬁne the wave function ψ(x) or ψ(x), respectively, in quantum mechanics.

A question that arises sometimes when solving the Schr¨odinger equation is whether ψ is single-valued.

But by our deﬁnitions, ψ(x) or ψ(x) is automatically single-valued, since it is just the expansion

coeﬃcient of the state |ψ with respect to the basis |x or |x .

Equations (6) and (9) (in one dimension) or (15) and (16) (in three dimensions) make explicit

the transformations back and forth between the Hilbert space of ket vectors |ψ and the Hilbert

space of wave functions ψ(x) or ψ(x). As discussed in Sec. 1.3, we regard these two Hilbert spaces

as isomorphic but distinct, and we say that the space of wave functions ψ(x) or ψ(x) forms the

conﬁguration representation of the space of kets |ψ . There are other representations, and while

the conﬁguration representation is often used in practice one should note that in the postulates of

quantum mechanics there is no privileged role assigned to it. Any calculation that can be carried

out in the conﬁguration representation can be carried out in any other representation with the same

results from a physical standpoint.

In eﬀect, a representation is merely a choice of basis, allowing one to work with the expansion

coeﬃcients of a state vector |ψ with respect to the chosen basis instead of the abstract ket vectors

themselves. As noted below Eq. (9), the conﬁguration space wave function ψ(x) or ψ(x) is the

expansion coeﬃcients of the state ket |ψ with respect to the basis of position eigenkets {|x }

or {|x }. In quantum mechanics we frequently choose as a basis the simultaneous eigenkets of a

complete set of commuting observables; thus, the basis is labeled by the observables in question,

and we speak, for example, of the position representation, momentum representation, etc. Nothing

prevents us from using other bases, however (which have no correspondence with any simple set of

commuting observables).

Just as the wave function ψ(x) represents the ket vector |ψ in the conﬁguration representation,

so also is there a representation of various operators that act on ket vectors. Consider, for example,

the operator xˆ (working in one dimension for simplicity). We know that the ket |ψ corresponds

to the wave function ψ(x) = x|ψ . What wave function does the ket xˆ|ψ correspond to? Let

|φ = xˆ|ψ , so that

φ(x) = x|φ = x|xˆ|ψ = x x|ψ = xψ(x),

(18)

Notes 4: Spatial Degrees of Freedom

5

where we have used x|xˆ = x x|, the Hermitian conjugate of Eq. (1). We see that the eﬀect of multiplying a ket vector |ψ by the operator xˆ is to multiply the corresponding conﬁguration wave function ψ(x) by x. That is, we can write

(xˆψ)(x) = xψ(x).

(19)

As we say, the operator xˆ is represented by multiplication by x in the conﬁguration representation. It is represented by other operations in other representations. Similarly, in three dimensions we have

(xˆiψ)(x) = xiψ(x).

(20)

You may worry about the physical meaning of the unnormalizable eigenkets |x or |x . In reality we never measure the position of a particle exactly, instead the best we can do is to localize it in some small region of space. The eigenkets |x or |x are an idealization of this process, in which the size of the region is allowed to approach zero. This limit also leads to singular mathematics, since the eigenkets |x or |x have inﬁnite norm and do not belong to Hilbert space.
Measuring the position of a particle is really a nonrelativistic concept, because as we localize a particle to smaller and smaller regions, by the uncertainty principle the momentum increases, ultimately taking on relativistic values. Then processes such as the creation of particle-antiparticle pairs come into play, and we are really dealing with a multi-particle situation, which is properly handled by the methods of quantum ﬁeld theory. We will ﬁnd later in the course that the position operator f-
or a particle in relativistic quantum mechanics is one that is fraught with diﬃculties. The position operator is really a nonrelativistic concept.

3. Translation Operators

We now develop translation operators, working initially in one dimension for simplicity. Let a be

a displacement. We imagine a displacement operation as one that acts on a physical system, moving

all particles from their initial positions (say, x) to their new positions (x + a). This is sometimes

called the active point of view, because our operations take a given physical system and transform

it into a new system, in this case in a diﬀerent location in space.

In quantum mechanics, we can deﬁne a translation operator which carries out this operation on

a physical system. The translation operator T (a) is a linear operator acting on the Hilbert space of

a physical system, parameterized by the displacement a. We deﬁne the translation operator in one

dimension by

T (a)|x = |x + a .

(21)

This deﬁnition makes sense, because physically |x is the state of the system after a measurement has placed the particle in a small region around position x, and similarly for |x + a . Equation (21) is actually a deﬁnition of the operators T (a) because the kets |x form a basis. If we specify the action of a linear operator on a set of basis vectors, then by linear superposition its action on an arbitrary vector becomes known.

6

Notes 4: Spatial Degrees of Freedom

Equation (21) gives the action of the translation operator on the position eigenkets. Let us also work out its action on wave functions. Let |ψ be a state with wave function ψ(x) = ψ|x , and let |φ = T (a)|ψ be the translated state with wave function φ(x) = x|φ . What is the relationship between the old wave function ψ(x) and the new one φ(x)? We answer this by writing
φ(x) = x|φ = x|T (a)|ψ = dx′ x|T (a)|x′ x′|ψ = dx′ x|x′ + a x′|ψ

= dx′ δ(x − x′ − a)ψ(x′) = ψ(x − a),

(22)

where we have inserted a resolution of the identity, used Eqs. (21) and (2), and carried out the

integral. We write the result as

T (a)ψ (x) = ψ(x − a),

(23)

where we have replaced φ by T (a)ψ. This is a companion to Eq. (21), which gives the action of translation operators on the basis kets; this gives their action on wave functions.
There are several remarks concerning Eq. (23). First, notice the minus sign in this equation, compared to the plus sign in Eq. (21). The minus sign is necessary to get a wave function that has been moved forward under the displacement operation, as illustrated in Fig. 1. To remember the signs it helps to write Eq. (22) in the form, T (a)ψ (x + a) = ψ(x) and to say, “the value of the new wave function at the new point equals the value of the old wave function at the old point.”

ψ(x)

T (a)

ψ(x − a)

x

x0

x0 + a

Fig. 1. The action of the translation operator T (a) on a wave function ψ(x).

Another remark is that that Eq. (23) uses the translation operator T (a) in a diﬀerent sense from its original deﬁnition, because it is acting on a conﬁguration space wave function ψ instead of a ket |ψ . As we say, Eq. (23) gives the representation of the operator T (a) on conﬁguration space wave functions.
Finally, we remark that many books would write Eq. (23) without the parentheses, that is, as

T (a)ψ(x) = ψ(x − a).

(24)

Notes 4: Spatial Degrees of Freedom

7

The problem with this notation is that it is not clear what T (a) acts on. ψ is a function, and ψ(x) is the value of that function at a point x, that is, it is a number. Does T (a) act on the function or the value of the function? Obviously, it acts on the function, which is what the extra parentheses in Eq. (23) make explicit.
The translation operator is easily generalized to three dimensions, where the displacement a is a vector, and the translation operator is deﬁned by

T (a)|x = |x + a .

(25)

The other formulas and results of this section are easily generalized to the three-dimensional case.

4. Properties of the Translation Operators

The translation operators in one dimension satisfy the following properties:

T (0) = 1,

(26a)

T (a)T (b) = T (a + b) = T (b)T (a), T (a)−1 = T (−a), T (a)−1 = T (a)†.

(26b) (26c) (26d)

Property (26a) follows immediately from the deﬁnition (21). Property (26b) is the composition law that is also obvious from the deﬁnition (21); it can be proved explicitly by writing

T (a)T (b)|x = T (a)|x + b = |x + b + a = T (a + b)|x .

(27)

Note that the parameter x+b+a of the ket |x+b+a is just a label of the ket, so these labels obey the usual (commutative) rules for addition. This implies that the translation operators are commutative, as indicated in Eq. (26b). The third property (26c) is proved by setting b = −a in Eq. (26b). The translation operators are invertible. The last property (26d) states that the translation operators are unitary. We prove this by letting ψ(x) be an arbitrary wave function, and |φ = T (a)|ψ , so that φ-
(x) = ψ(x − a). Then

dx |φ(x)|2 = dx |ψ(x − a)|2 = dx |ψ(x)|2,

(28)

as we prove by substituting x′ = x − a in the middle integral. Thus, T (a) preserves the norm of arbitrary states. But a linear operator that does this is necessarily unitary (see Prob. 1.6(c)).
Altogether, properties (26a)–(26d) qualify the set of translation operators as a group of unitary operators. Unitary operators appear frequently in symmetry operations because these are the only linear operators that preserve probabilities (hence, the results of physical measurements). In this case, the group is Abelian, which means that the translation operators commute with one another (property (26b)).

8

Notes 4: Spatial Degrees of Freedom

5. The Generator of Translations

A simple idea that arises in the case of continuous symmetries is that a given, ﬁnite symmetry operation can be built up as a composition of smaller symmetry operations. For example, a displacement of one meter is the composition of a thousand displacements of one millimeter. In the limit we can imagine a ﬁnite symmetry operation as being built up out of an inﬁnite number of inﬁnitesimal symmetry operations. For this reason, special attention is attached to inﬁnitesimal symmetry operations. It tur-
ns out that inﬁnitesimal versions of unitary symmetry operators in quantum mechanics are always expressible in terms of certain Hermitian operators, which are called the generators of the symmetry. We will now see how this works out in the case of translations.
Thinking of a small displacement a, we expand the translation operator T (a) in a Taylor series in powers of a. This series begins with

T

(a)

=

T

(0)

+

a

dT da

(0)

+

.

.

.

.

(29)

The ﬁrst (zeroth order) term is T (0) = 1, and as for the second (ﬁrst order) term, we notice that

dT /da|a=0 does not depend on a so it is some operator with no parameters. We put this into a more

convenient form by deﬁning

kˆ

=

i

dT da

(0),

(30)

where the hat emphasizes that kˆ is an operator (in contrast to a, which is a number).

In these notes we frequently use a hat to distinguish an operator from an ordinary number, or

from the classical counterpart of the operator. We normally omit the hat when there is no danger

of confusion (for example, T above is an operator, but we put no hat on it). But we also use the

hat for unit vectors, and certain other purposes. We will explain these as they arise, so the meaning

will be clear in any particular context.

Through ﬁrst order, we can write the expansion of the translation operator as

T (a) = 1 − iakˆ + . . . .

(31)

We have split oﬀ a factor of i in the deﬁnition (30) so that kˆ will be Hermitian. This follows when we use Eq. (31) to write out the series for T (a)† and T (−a) = T (a)−1:
T (a)† = 1 + iakˆ† + . . . , (32)
T (−a) = 1 + iakˆ + . . . ,

which by Eqs. (26c) and (26d) must be equal. But this implies

kˆ = kˆ†.

(33)

The Hermitian operator kˆ appears in the ﬁrst correction term in Eq. (31), which, when a is small, is an inﬁnitesimal translation. For this reason kˆ is regarded as the generator of translations in one dimension. That is, if we knew how to act on states with the operator kˆ, we could bring

Notes 4: Spatial Degrees of Freedom

9

about an inﬁnitesimal translation; and ﬁnite translations are compositions of a large number of small translations. As yet we have no physical interpretation for kˆ, but since it is Hermitian it must
correspond to the measurement of some physical quantity. We will see in a moment what that is.

6. Exponential Form for Translation Operators

We have only written out the ﬁrst two terms in the Taylor series (31) for T (a), but the entire series can be summed and put into a neat form. To do this we will obtain a diﬀerential equation for T (a) and then solve it. See Prob. 1.2(a), which uses similar techniques. We ﬁrst write out the deﬁnition of the derivative of T (a) as a limit,

dT (a) da

=

lim
ǫ→0

T (a

+

ǫ) ǫ

−

T (a) .

(34)

By Eq. (26b), the ﬁrst term in the numerator can be written as T (ǫ)T (a), which allows the operator T (a) to be factored out of the entire numerator to the right:

dT (a) da

=

lim
ǫ→0

T

(ǫ) ǫ

−

1

T (a).

(35)

But the remaining limit is just the derivative dT (a)/da evaluated at a = 0, which by Eq. (30) is

−ikˆ. Altogether, we obtain

dT (a) da

=

−ikˆ T (a).

(36)

This is a diﬀerential equation that we must solve subject to the initial conditions T (0) = 1. The

solution is immediate,

T (a) = exp(−iakˆ).

(37)

Now we can easily extend the power series (31) to higher order,

T (a)

=

1

−

iakˆ

−

1 2

a2

kˆ2

+

.

.

..

(38)

We see that the generator of translations kˆ, which ﬁrst appeared in inﬁnitesimal translation operators, also appears in the exponential form for ﬁnite translation operators.
There is another way to obtain Eq. (37) that is closer to the idea of building up ﬁnite transformations from inﬁnitesimal ones. Suppose a is a displacement that is not small. We break it up into a large number N of small displacements, writing ǫ = a/N . Then property (26b) implies

T (a) = T (ǫ)N .

(39)

But if ǫ is small, we can approximate T (ǫ) by the ﬁrst two terms of the Taylor series, as in Eq. (31), without assuming at this point that we know what the higher order terms are. Thus we have

T (a) ≈ (1 − iǫkˆ)N .

(40)

10

Notes 4: Spatial Degrees of Freedom

This approximation should get better as ǫ gets smaller, that is, as N increases. This makes it plausible that we should have the limit,

T (a) = lim
N →∞

1

−

iakˆ N

N
.

(41)

This is similar to the limit of elementary calculus,

lim
N →∞

1

+

x N

N = ex.

(42)

Applying this to Eq. (41) we obtain the exponential expression (37).

7. Action of kˆ on Kets and Wave Functions

It is easy to work out the action of kˆ on the basis kets |x . We simply write

kˆ|x

=

i

dT (a) da

|x

a=0

=

i

d da

|x

+

a

a=0

=

i

d dx

|x

.

(43)

The derivative of the ket |x may look strange. In wave function language it is the derivative of a δ-function. One can use expressions with derivatives of kets as in Eq. (43), formally integrating by parts as if they were ordinary functions, and obtain correct answers.
We obtain an equivalent result that looks more familiar by working out the action of kˆ on a wave function. The procedure is the same:

(kˆψ)(x) = i

dT (a) da

ψ

(x)

a=0

=

i

d da

ψ(x

−

a)

a=0

=

−i

dψ(x) dx

.

(44)

We start to see the appearance of the usual momentum operator on wave functions.

8. Translations in Three Dimensions, and Commutation Relations

In a similar manner, for translation operators in three dimensions we deﬁne

kˆi

=

i

∂

T (a) ∂ai

,
a=0

(45)

where i = 1, 2, 3. This gives us a Hermitian vector operator (that is, a vector of Hermitian operators) kˆ, with components kˆi, i = 1, 2, 3. Now the exponential form of the translation operator is

T

(a)

=

exp(−ia

·

kˆ)

=

1

−

ia

·

kˆ

−

1 2

(a

·

kˆ)2

+

.

.

..

(46)

This series can be used to obtain the commutation relations of the operators kˆ = (kˆ1, kˆ2, kˆ3). We expand the product T (a)T (b) in power series, carrying everything to second order,

T (a)T (b) =

1

−

i(a

·

kˆ)

−

1 2

(a

·

kˆ)2

+

.

.

.

1

−

i(b

·

kˆ)

−

1 2

(b

·

kˆ)2

+

.

.

.

=

1

−

i(a

+

b)

·

kˆ

−

1 2

(a

·

kˆ)2

−

(a

·

kˆ)(b

·

kˆ)

−

1 2

(b

·

kˆ)2

+

.

..

.

(47)

Notes 4: Spatial Degrees of Freedom

11

But since T (a)T (b) = T (b)T (a), the answer must be the same if we swap a and b. Most of the series is obviously symmetric in a and b, but the one term (a · kˆ)(b · kˆ) is not. When we subtract
the swapped series from the original series, we obtain a vanishing commutator,

[a · kˆ, b · kˆ] = 0.

(48)

Since this is true for all choices of a and b, we can choose each of these vectors to be one of the unit vectors along the coordinate axes (nine choices in all), and we ﬁnd

[kˆi, kˆj] = 0.

(49)

We see that kˆ is a vector of commuting, Hermitian operators. The relations (43) and (44) are also easily generalized to three dimensions. These give

kˆi|x

=

i

∂ ∂xi

|x

,

(50)

and

kˆiψ

(x)

=

−i

∂ψ(x) ∂xi

,

(51)

or, in vector notation,

kˆψ (x) = −i∇ψ(x).

(52)

Equation (51) provides another way to derive the commutation relations (49), that is, the derivatives ∂/∂xi and ∂/∂xj commute with one another.
It is also easy to work out the commutation relations among the operators xˆi and kˆj . We just apply them to a wave function in opposite orders, obtaining

xˆikˆj ψ = xi

−i

∂ ∂xj

ψ

=

−ixi

∂ψ ∂xj

,

(53)

kˆjxˆiψ =

−i

∂ ∂xj

xiψ

=

−i

δij

ψ

−

ixi

∂ψ ∂xj

.

Subtracting these, we ﬁnd

[xˆi, kˆj] = i δij.

(54)

Combined with Eqs. (11) and (49), this gives a complete set of commutation relations among the components of the operators xˆ and kˆ.

9. The Momentum in Classical Mechanics

We shall make a few remarks about the momentum in classical mechanics, in preparation for our discussion of the momentum in quantum mechanics.
As explained in Sec. B.11, there is more than one deﬁnition of the momentum of particle in classical mechanics. One is the kinetic momentum,

p = mx˙ ,

(55)

12

Notes 4: Spatial Degrees of Freedom

and the other is the canonical momentum,

p

=

∂L ∂x˙

,

(56)

where L is the Lagrangian. In the case of a particle of charge q moving in static electric and magnetic ﬁelds E = −∇Φ and B = ∇×A, the Lagrangian is

L(x, x˙ )

=

m 2

|x˙ |2

−

qΦ(x)

+

q c

x˙

·

A(x),

(57)

so the canonical momentum is given by Eq. (B.35), reproduced here,

p

=

mx˙

+

q c

A(x).

(58)

In the presence of a magnetic ﬁeld (more precisely, in the presence of a vector potential) the deﬁnitions of the classical momentum (55) and (56) are not the same. We have not deﬁned the momentum operator in quantum mechanics yet, but before we do, we must ask which of these two classical momenta will it correspond to, the kinetic or the canonical?
We have been developing the properties of the operator kˆ in quantum mechanics, which is the generator of displacements. It turns out that there is a similar role played by the momentum in classical mechanics, but it is the canonical momentum, not the kinetic, that does this. Let us write f (x, p) be a function of the position and momentum for a particle moving in one dimension. We can think of f as a classical observable. Then we can deﬁne a classical translation operator that acts on classical o-
bservables according to

Tcl(a)f (x, p) = f (x − a, p).

(59)

This operator moves the function f (x, p) forward in x while leaving p alone. If now a is a small displacement, then the result can be expanded to ﬁrst order,

Tcl(a)f

(x,

p)

=

f

(x,

p)

−

a

∂f ∂x

.

(60)

But the correction term can be written in terms of a Poisson bracket of f with the momentum,

−a

∂f ∂x

=

a{p,

f }.

(61)

Finite displacements can be built up by composing inﬁnitesimal displacements, and the result can be expressed in terms of an exponential series of iterated Poisson brackets. We introduce the following notation for the Poisson bracket,

LXA = {X, A},

(62)

where X and A are arbitrary classical observables. Then a ﬁnite displacement can be expressed as

Tcl(a) = exp(aLp),

(63)

Notes 4: Spatial Degrees of Freedom

13

that is,

f (x − a, p) = Tcl(a)f (x, p) = exp(aLp)f (x, p)

=

f (x,

p)

+

a{p,

f}

+

a2 2!

{p,

{p,

f }}

+

.

.

.

(64)

=

f (x,

p)

−

a

∂f ∂x

(x,

p)

+

a2 2!

∂2f ∂x2

(x,

p)

+

.

.

.

which may be compared to Eqs. (37) and (38). The result is the Taylor series expansion of f (x, p)

in the variable x. It may also be compared to the exponential series developed in Prob. 1.2(a).

These results are easily generalized to three dimensions. In three dimensions, the distinction

between the kinetic and canonical momentum becomes important. It is the canonical momentum, not

the kinetic, that generates translations in classical mechanics (in cases where it makes a diﬀerence).

That is, the Poisson brackets are computed with respect to the canonical momentum, not the kinetic.

See Eq. (B.100).

The role that momentum plays in classical mechanics as the generator of displacements is

closely connected with the conservation of momentum in systems with translational symmetry. This

conservation law is a special case of Noether’s theorem, which presents a general relationship between

continuous symmetries and conserved quantities.

10. The Momentum in Quantum Mechanics

The operator kˆ is regarded as the generator of displacements in quantum mechanics, since by

Eq. (31) it provides the small correction necessary when an inﬁnitesimal displacement is carried out. Also, as noted, kˆ corresponds to the measurement of some physical quantity, and both kˆ and p (the

latter being the generator of translations in classical mechanics) are vectors. So the suspicion arises that kˆ is related to the momentum operator in quantum mechanics, call it pˆ (as yet undeﬁned, but the hat means “operator”). The vector operators kˆ and pˆ cannot be equal, however, because they have diﬀerent units: kˆ has units of inverse length, and pˆ has units of momentum. To make the units come out right we guess that there is a proportionality factor between pˆ and kˆ with units of action-
,

a constant that we call ¯h:

pˆ = h¯kˆ.

(65)

We take this as the deﬁnition of momentum in quantum mechanics. The postulates of quantum mechanics do not tell us what quantum operator corresponds to a
given classical quantity, so we must not think that the deﬁnition of momentum pˆ is engraved in stone. The best we can do is to ﬁnd a vector of operators in quantum mechanics that has properties similar to the classical momentum and that goes over to the classical momentum in the classical limit. In fact, the similarity with the classical momentum (as the generator of translations) has motivated the deﬁnition (65), and, as for the classical limit and the other expected properties of momentum, they-
 will be laid bare as we proceed.

14

Notes 4: Spatial Degrees of Freedom

11. The Constant ¯h

Notice that ¯h did not appear in the postulates of quantum mechanics; it appears for the ﬁrst time in our development of the formalism in Eq. (65). The value of ¯h in ordinary units must be determined experimentally. The discussion so far has been based on the analysis of a single particle moving in three-dimensional space, so one might question whether diﬀerent particles have diﬀerent values of ¯h. We would not get the usual classical limit if this were so, so it seems theoretically doubtful that-
 there are diﬀerent values of ¯h, but it is a question that can be tested experimentally (all the ¯h’s turn out to be the same to within experimental accuracy). Given that there is only one ¯h, there is the option of choosing “natural units” in which ¯h = 1.
The relation (65) implies the usual de Broglie relation connecting momentum and wavelength,

λ

=

2π¯h p

,

(66)

as we shall show momentarily, so the value of ¯h can be determined by measuring the de Broglie

wavelength of a particle of a known momentum. The most elegant experiments along these lines

have involved Bragg diﬀraction of a neutron beam from a single, large (about 10cm) silicon crystal

with no dislocations or grain boundaries. The manufacture of such crystals has become feasible

with modern semiconductor technology. The predictions of the relation (65) are fully conﬁrmed.

Actually, if Eq. (65) were not correct, there are very few of the theoretical predictions of quantum

mechanics that would agree with experiment.

The silicon neutron interferometer just mentioned was used in the 1970’s to measure the phase

shift of neutron wave functions as the neutrons fall in the earth’s gravitational ﬁeld. This was

the ﬁrst demonstration that gravitational potentials enter the Schr¨odinger equation in the same

manner as other potentials. The experiment and results are discussed in Sakurai, Modern Quantum

Mechanics and in Commins, Quantum Mechanics: An Experimentalist’s Approach. Commins has a

particulary nice explanation of the neutron interferometer.

The fact that h¯ is a universal constant was known to Planck and others in the 1890’s, even

before quantum mechanics existed. Planck knew that a constant with dimensions of action must

occur in the expression for the spectrum of black body radiation, even before the correct expression

was known. He also realized that h = 2π¯h, c and G (Newton’s constant of gravitation) could be

combined to create a natural system of units for distance, time and mass. The Planck unit of

distance is

LPlanck =

¯hG c3

=

1.6

×

10−33cm.

(67)

It is the length scale at which the eﬀects of both quantum mechanics and gravity are expected to be

important. Physics at such scales is currently a matter of much speculation, and is likely to remain

so for some time, in view of the near impossibility of direct experimental tests. Nevertheless the

importance of the length scale itself has been known for a long time.

Notes 4: Spatial Degrees of Freedom

15

12. The Momentum in Quantum Mechanics: The History
The pseudo-axiomatic approach we are taking here to the development of the momentum operator in quantum mechanics is quite diﬀerent from the historical one. In a series of papers between 1905 and 1916, Einstein developed the idea that light of frequency ω and wave vector k is associated with particles of energy E = ¯hω and momentum p = ¯hk. We now call these particles “photons,” although that name was not coined until later. According to Maxwell’s equations the frequency and wave number of a light-
 wave are related by ω = ck, so Einstein’s formulas give the energy-momentum relation for the photon as E = cp, exactly what the special theory of relativity predicts for a massless particle traveling at the speed of light. Einstein’s arguments relied heavily on statistical mechanics. Most physicists of the time regarded the idea of particles of light as completely crazy, since it had been established a hundred years earlier that light was a wave. But in 1922 Compton showed experimentally that col-
lisions between x-rays and electrons obey the relativistic rules of conservation of energy and momentum, assuming Einstein’s expressions for the energy and momentum of the photon. With this physicists began to take the wave-particle duality more seriously. In 1924, de Broglie argued that if light could have both wave and particle aspects, then so might ordinary particles also have wave aspects. This was in part an appeal to the unity of physics, and a suggestion oﬀered by the equivalence of energy-
 and mass, as shown by special relativity. De Broglie suggested that the formulas E = ¯hω and p = h¯k should apply also to massive particles, giving the frequency and wave vector of a wave associated with the particles. Somewhat later Debye remarked that if there was a wave, there should be a wave equation, and Schr¨odinger, on hearing of this, set out to ﬁnd it. He ﬁrst tried a relativistic wave equation without success, only later trying the nonrelativistic version which gave an explanation of t-
he hydrogen spectra and other physical facts. The latter equation is the one usually associated with his name.
A good recent book that covers this history and much else is Einstein and the Quantum by A. Douglas Stone.

13. Properties of the Momentum

We will provisionally accept the deﬁnition (65) of the momentum operator in quantum mechan-

ics, and proceed to examine the consequences. First, the translation operators can now be written

in the form,

T (a)

=

exp

−

i ¯h

(a

·

pˆ)

=

1

−

i ¯h

(a

·

pˆ)

+

..

.

.

(68)

The various commutation relations we have evaluated may now be expressed in terms of pˆ instead of kˆ and gathered together in one place,

[xˆi, xˆj ] = 0, [xˆi, pˆj] = i¯h δij, [pˆi, pˆj] = 0.

(69a) (69b) (69c)

16

Notes 4: Spatial Degrees of Freedom

These are the Heisenberg-Born commutation relations. They may be compared to the classical

canonical Poisson bracket relations, Eqs. (B.108).

Also, the properties (50) and (52) of the operators kˆ are easily translated into the properties of

the momentum. We have

pˆ|x = i¯h∇|x ,

(70)

and

(pˆψ)(x) = −i¯h∇ψ(x).

(71)

Equation (70) gives the action of the momentum operator in ket language, whereas Eq. (71) gives

it in the position representation. It has other forms in other representations. Another form of these

equations is

x|pˆ|ψ = −i¯h∇ x|ψ .

(72)

This is really a rephrasing of Eq. (71), and can be obtained by taking the Hermitian conjugate of Eq. (70) and then multiplying by the ket |ψ .

14. The Momentum Representation

Because pˆ is a vector of commuting, Hermitian operators, these operators possess a simultaneous eigenbasis. We write the eigenvalue-eigenket problem for momentum in the form,

pˆ|p = p|p .

(73)

We solve this in the conﬁguration representation, that is, we multiply Eq. (73) on the left by the bra x|, deﬁne the wave function of the momentum eigenket |p by

ψp(x) = x|p ,

(74)

and use Eq. (71) to obtain

−i¯h∇ψp(x) = pψp(x).

(75)

Thus, ψp(x) is the eigenfunction of the diﬀerential operator −i¯h∇ (really three commuting diﬀer-

ential operators) with eigenvalue p. The solution exists for all values of p and is unique to within a

constant,

ψp(x) = Aeip·x/h¯ ,

(76)

where A is a normalization and a phase. Thus, momentum has a continuous spectrum, so we normalize the eigenstates according to

p1|p2 = δ3(p1 − p2).

(77)

Using the integral

d3x ei(p2−p1)·x/h¯ = (2π¯h)3δ(p1 − p2),

(78)

Notes 4: Spatial Degrees of Freedom

17

the normalization constant A in Eq. (76) is determined to within a phase, which we ﬁx by demanding that A be real and positive. The result is

x|p

=

1 (2π¯h)3/2

eip·x/h¯ .

(79)

The eigenfunctions of momentum are plane waves, whose wave length is given by the de Broglie relation (66).
Since the momentum eigenstates are nondegenerate, the momentum operators pˆ form a complete set of commuting observables, and we may speak of the momentum representation. The resolution of the identity in this representation is

1 = d3p |p p|.

(80)

We will denote the wave function of the state |ψ in the momentum representation by

φ(p) = p|ψ

(81)

(compare Eq. (15) for the conﬁguration representation), so that by multiplying Eq. (80) onto the

ket |ψ we obtain

|ψ = d3p |p φ(p),

(82)

similar to Eq. (16) in the conﬁguration representation. The wave function φ(p) is the expansion coeﬃcients of the state |ψ with respect to the momentum eigenbasis {|p }.

By using Eq. (79) and resolutions of the identity it is easy to switch back and forth between wave functions ψ(x) and φ(p), representing the same quantum state in two diﬀerent representations. For example, we have

ψ(x) = x|ψ =

d3p x|p p|ψ =

d3p (2π¯h)3/2

eip·x/h¯

φ(p),

(83)

and its inverse,

φ(p) =

d3x (2π¯h)3/2

e−ip·x/h¯

ψ(x).

(84)

The wave functions ψ(x) and φ(p) are Fourier transforms of one another, modulo the insertion of factors of h¯ to account for the physical units.

In the momentum representation, the operator pˆ is represented simply by multiplication by p, the vector of c-numbers. That is, if φ(p) is given in terms of the state |ψ by Eq. (81), then the momentum space wave function of the state pˆ|ψ is

p|pˆ|ψ = p p|ψ = p φ(p),

(85)

where we have allowed pˆ to act to the left on the bra p|, bringing out the eigenvalue p. We can

write this as

(pˆφ)(p) = pφ(p).

(86)

18

Notes 4: Spatial Degrees of Freedom

Similarly, the operator xˆ in the momentum representation is given by

(xˆφ)(p)

=

i¯h

∂φ(p) ∂p

.

(87)

Compare this to Eq. (71), and notice the diﬀerence in sign. This follows since if φ(p) is related to |ψ by Eq. (81), then what we mean by the left-hand side of Eq. (87) is

p|xˆ|ψ =

d3x p|x x|xˆ|ψ =

d3x (2π¯h)3/2

e−ip·x/h¯

xψ(x)

=

i¯h

∂ ∂p

d3x (2π¯h)3/2

e−ip·x/h¯

ψ(x)

=

i¯h

∂

φ(p) ∂p

.

(88)

Finally, we summarize the representations of the operators xˆi and pˆi in the conﬁguration and momentum representations in Table 1.

Conﬁguration Momentum

xˆi mult by xi
i¯h ∂ ∂pi

pˆi

−i¯h

∂ ∂xi

mult by pi

Table 1. Representations of the operators xˆi and pˆi when acting on conﬁguration and momentum space wave functions.

15. Multiparticle Wave Functions

In a system of N particles, the positions of the individual particles are independent observables that commute with one another, so a complete set (ignoring spin for now) consists of the operators (xˆ1, . . . , xˆN ), with eigenvalues (x1, . . . , xN ). In this case the wave function is deﬁned by

ψ(x1, . . . , xN ) = x1, . . . , xN |ψ .

(89)

The wave function is deﬁned over conﬁguration space, that is, the space in which a single point speciﬁes the positions of all the particles. This is the same conﬁguration space as in classical mechanics, which is discussed in Sec. B.3. Conﬁguration space coincides with physical space only in the case of a single particle. Similarly, one can deﬁne a multiparticle, momentum space wave function φ(p1, . . . , pN ).
If one is careful about the application of the postulates of quantum mechanics, one will see certain subtleties in the derivation of Eq. (89) in the case of identical particles. We will examine this question more carefully in Notes 28.

Notes 4: Spatial Degrees of Freedom

19

16. The Sign of i
The following is a remark concerning the the deﬁnition of kˆ in Eq. (30), which led to the deﬁnition of momentum in Eq. (65). We split oﬀ a factor of i in Eq. (30) to make kˆ Hermitian, but the same would have been achieved if we had split oﬀ −i (thereby changing the deﬁnition of kˆ by a sign). This would lead to the opposite sign in the deﬁnition of pˆ, and changes in signs in many of the subsequent formulas. Would this change lead to any physical consequences or contradictions with experiment?
The answer is no, but it would change most of the familiar formulas in quantum mechanics, by replacing i by −i. For example, a plane wave with wave vector k would become e−ik·x instead of the usual eik·x. It is a matter of convention to choose the sign of i in quantum mechanics, and our choice has been made in Eqs. (30) and (65). Once this choice has been made, however, then the sign of the Pauli matrix σy is determined, so that spin angular momentum has the same commutation relations as orbital a-
ngular momentum. This was a question addressed in Prob. 3.2(d).

17. The Position-Momentum Uncertainty Relation

The generalized uncertainty relations (2.49), applied to the case of position x and momentum p of a particle in one-dimension, for which [x, p] = i¯h, give

∆x

∆p

≥

¯h 2

.

(90)

This can be used in a number of applications to obtain quick estimates of orders of magnitude of

physical quantities, including three-dimensional problems where for simplicity we ignore the vector

nature of x and p. We give several examples.

Consider a beam of particles of well deﬁned momentum p = p0 ˆz directed at a screen in the plane z = 0. The screen has a hole of dimension L (the hole need not be circular, L is just an

order of magnitude estimate of the size of the hole). The hole conﬁnes the particles in the x- and

y-directions to a distance of order L, so by Eq. (90) the particles acquire a transverse momentum

(in the x- or y-directions) roughly of magnitude

p⊥

=

¯h L

,

(91)

where we drop constants of order unity since this is only an estimate. Thus downstream from the

hole the beam should spread at an angle given roughly by

θ

=

p⊥ p0

=

¯h Lp0

=

λ 2πL

,

(92)

where λ is the wave length of the incident waves. This calculation assumes the angle θ is small,

which is equivalent to λ ≪ L, that is, the hole should be at least a few wavelengths in diameter.

This very simple estimate of the spreading angle of the beam is conﬁrmed by more complicated

calculations of diﬀraction theory in the far-ﬁeld (Fraunhofer) region.

20

Notes 4: Spatial Degrees of Freedom

If we eliminate all momenta p in favor of wave numbers k, by p = ¯hk, then all the ¯h’s disappear and we have results that can be applied also to classical waves (light waves, sound waves, etc).

For another example, let a be an estimate of the size of a hydrogen atom. The electron is conﬁned to a distance of order a and so must have a momentum of order p = h¯/a. In a circular orbit this implies a centrifugal force of

mv2 a

=

p2 ma

=

¯h2 ma3

.

(93)

Equating this to the electrostatic force on the electron from the proton, e2/a2, and solving for a, we

obtain

a

=

¯h2 me2

.

(94)

This is the usual expression for the Bohr radius. Given an estimate for the size of an atom and the

known density of ordinary matter, one also obtains an estimate for the Avogadro number and many

other physical quantities.

18. Minimum Uncertainty Wave Packets

Let us loosely deﬁne a wave packet in one dimension as a wave function ψ(x) whose dispersions ∆x and ∆p, deﬁned as in Sec. 2.8 by

(∆x)2 = xˆ2 − xˆ 2, (95)
(∆p)2 = pˆ2 − pˆ 2,

are small, that is, close to the minimum values allowed by the inequality,

∆x∆p

≥

¯h 2

.

(96)

See Eq. (2.50). Similarly, let us deﬁne a minimum uncertainty wave packet as one for which the

product ∆x∆p takes on its minimum value of ¯h/2.

Let ψ(x) be a normalized, minimum uncertainty wave packet with

ψ|xˆ|ψ = xˆ = 0, (97)
ψ|pˆ|ψ = pˆ = 0,

and let ∆x = L, so that ∆p = h¯/2L. Now let

|ζ

=

xˆ +

2iL2 ¯h

pˆ

|ψ

.

(98)

The operator appearing on the right seems to have been pulled out of the air, but it is a version of

an annihilation operator of the general form xˆ + ipˆ, with coeﬃcients adjusted to make the follow-

ing argument come out right. We will see such annihilation operators again when we discuss the

harmonic oscillator. Now squaring Eq. (98), we obtain

ζ|ζ

=

xˆ2

+

2iL2 ¯h

xˆpˆ − pˆxˆ

+

4L4 ¯h2

pˆ2

= L2 − 2L2 + L2 = 0.

(99)

Notes 4: Spatial Degrees of Freedom

21

This implies |ζ = 0 (see Eq. (1.27)), so Eq. (98) in wave function language becomes

which has the normalized solution,

2L2

dψ dx

+

xψ

=

0,

(100)

ψ(x) =

1 √

e−x2/4L2 .

L 2π

(101)

The minimum uncertainty wave packet is a Gaussian. If we allow xˆ = a and pˆ = b to take on arbitrary values a, b as shown, then we ﬁnd

ψ(x) =

1 √ L 2π

exp

−

(x − a)2 4L2

+

i

b(x − ¯h

a)

+ iγ

,

(102)

where γ is a phase. The wave packet is still a Gaussian, but it has been shifted in position and momentum.

Problems
1. Let |ψ be the state of a spinless particle in three dimensions, and let φ(p) = p|ψ be its momentum space wave function. Find the momentum space wave function of the state T (a)|ψ , that is, ﬁnd the action of the translation operator T (a) in the momentum representation.
2. Consider a particle moving in one dimension. In classical mechanics, the state of the particle is given by its position x and momentum p, and other observables such as energy are functions of these. The classical position and momentum are ordinary numbers, and obey the usual (commutative) rules of algebra, for example, xp = px. In quantum mechanics, we have the operators xˆ and pˆ which are analogous to the classical x and p, and other observables such as the Hamiltonian are functions of xˆ and-
 pˆ. On the other hand, xˆ and pˆ do not obey a commutative algebra, in view of the relation xˆpˆ = pˆxˆ + i¯h.
A question that has exercised various people is the relation between classical observables (that is, functions of x and p) and quantum observables (that is, functions of xˆ and pˆ). One problem is to quantize a classical observable, that is, given a classical function A(x, p), what is the corresponding quantum observable? Dirac suggested that x and p should be associated with xˆ and pˆ, but this gives rise to an ambiguity in cases like the classical function xp. Should it correspond to xˆpˆ or to -
pˆxˆ, or maybe to their average (which at least would be Hermitian)?
Another answer to this question was given by Weyl. We introduce the Weyl transform in this problem because it is good exercise in the position and momentum representations.
We denote operators with a hat, as in xˆ or Aˆ, and we denote eigenvalues or classical quantities without a hat, as in x or A(x, p). We work in one dimension, and think of a wave function ψ(x) or ψ(x, t).

22

Notes 4: Spatial Degrees of Freedom

If Aˆ is an operator, we deﬁne the Weyl transform of Aˆ, denoted A(x, p), by

+∞

A(x, p) =

ds e−ips/h¯ x + s/2|Aˆ|x − s/2 .

−∞

(103)

Here the notation |x − s/2 , for example, means the eigenket of xˆ with eigenvalue x − s/2. It is
useful to think of A(x, p) as a function deﬁned on the classical (x, p) phase space which is in some sense the classical observable corresponding to the quantum operator Aˆ.

(a) Show that if A(x, p) is the Weyl transform of operator Aˆ, then A(x, p)∗ is the Weyl transform of Aˆ†. In particular, this shows that the Weyl transform of a Hermitian operator is a real function
on phase space.

(b) Show that if operators Aˆ and Bˆ have Weyl transforms A(x, p) and B(x, p), respectively, then

tr(Aˆ†Bˆ) =

dx dp 2π¯h

A(x,

p)∗B(x,

p).

(104)

Notice how the right hand side looks like the “scalar product” of two classical observables on phase space.

(c) Find the Weyl transforms of the following operators: 1 (the identity operator); xˆ; pˆ; xˆpˆ; pˆxˆ; pˆ2/2m + V (xˆ).

(d) The classical probability density ρ(x, p) in phase space (see Sec. B.24) describes a system whose dynamical state can only be described statistically. Since ρ(x, p) is a probability density, it is nonnegative, ρ(x, p) ≥ 0, and it is normalized,

ρ(x, p) dx dp = 1.

(105)

The probability density in x alone (call it F (x)) or in p alone (call it G(p)) is obtained by integrating ρ over the other variable (p or x),

ρ(x, p) dp = F (x),

ρ(x, p) dx = G(p),

(106)

and each of these is normalized,

F (x) dx = 1,

G(p) dp = 1.

(107)

The functions F (x) or G(p) are called marginal distributions in statistics. It turns out that the Weyl transform W (x, p) of the density operator ρˆ in quantum mechanics
is very similar in its properties to the classical probability density ρ(x, p). The function W (x, p) is called the Wigner function. Because ρˆ is Hermitian, the Wigner function is real.
For simplicity let us work with a pure state, so ρˆ = |ψ ψ|. Express the marginal distribution

W (x, p) dp

(108)

Notes 4: Spatial Degrees of Freedom

23

in terms of the wave function ψ(x). Now let φ(p) be the momentum space wave function, and express the marginal distribution

W (x, p) dx

(109)

in terms of φ(p). What is the normalization integral,

W (x, p) dx dp?

(110)

These results suggest that W (x, p) is a distribution function of particles in phase space whose statistics reproduces the statistics inherent in quantum measurement, apart from the normalization. Unlike a classical distribution function ρ(x, p), however, W (x, p) can take on negative values. These “negative probabilities” have no meaning in any statistical sense, but they only arise, in a certain sense, when we attempt to measure x and p simultaneously to a precision greater than that allowed by -
the uncertainty principle. The Wigner function can be used to express quantum statistical mechanics in a manner that is surprisingly similar to classical statistical mechanics, but one which is still fully quantum mechanical.

3. Given that the range of the nuclear forces is approximately 10−13 cm, estimate the velocity of the proton or neutron in a deuteron (a bound state of a proton and a neutron). Compare this v/c to the v/c of the electron in the ground state of hydrogen. It is believed that nuclear forces are independent of the charge state of the nucleon; thus, two protons should feel the same nuclear force as two neutrons. Calculate the nuclear force between two protons at a distance of 10−13 cm and compare to th-
e electrostatic force.

4. Let f (x) be an arbitrary function of x and g(p) and arbitrary function of p. Evaluate the commutators, [pi, f (x)] and [xi, g(p)].
5 The Large Hadron Collider is designed to reach an energy of 7 TeV (7 × 1012 eV). What is the smallest distance scale that can be probed at these energies? How does it compare to the Planck length, at which the eﬀects of quantum gravity are expected to be important?

Copyright c 2019 by Robert G. Littlejohn
Physics 221A Fall 2019 Notes 5
Time Evolution in Quantum Mechanics†

1. Introduction
In these notes we develop the formalism of time evolution in quantum mechanics, continuing the quasi-axiomatic approach that we have been following in earlier notes. First we introduce the time evolution operator and deﬁne the Hamiltonian in terms of it. Then we discuss the evolution of state vectors and the Schr¨odinger equation, the evolution of observables in the Heisenberg picture and the Heisenberg equations of motion, the evolution of the density operator, and the initial value problem. Next-
 we introduce the Hamiltonian for potential motion and discuss aspects of it, including wave function representations of the Schr¨odinger equation, the probability density and current, and the Ehrenfest relations. Finally we discuss the Schr¨odinger equation for a charged particle in a magnetic ﬁeld, and discuss its transformation properties under gauge transformations.

2. The Time-Evolution Operator

Let the pure state of a system at some initial time t0 be described by the state vector |ψ(t0) , and let the state at some ﬁnal time t be described by |ψ(t) . We postulate that these two state vectors are related by a linear operator U (t, t0), parameterized by the two times, that is,

|ψ(t) = U (t, t0)|ψ(t0) .

(1)

We write the ﬁnal time ﬁrst and the initial time second in U (t, t0). This is another (the seventh) postulate of quantum mechanics, which we can add to the list in Sec. 3.19.

The operator U (t, t0) must satisfy the following three properties. First, it reduces to the identity

at t = t0,

U (t0, t0) = 1.

(2)

Second, it must be unitary in order to preserve probabilities,

U (t, t0)−1 = U (t, t0)†.

(3)

For example, the probability of ﬁnding a particle somewhere in space must be 1, and, assuming particles are neither created or destroyed, this probability must be independent of time. In relativistic

† Links to the other sets of notes can be found at: http://bohr.physics.berkeley.edu/classes/221/1920/221.html.

2

Notes 5: Time Evolution in Quantum Mechanics

interactions particles are created and destroyed, but even here we require the unitarity of U (t, t0). The logic is that if we measure some observable, the probability of getting some answer must be 1, independent of t. As for measuring the position of a particle in relativity theory, we will see later in the course that the position operator is not well deﬁned in relativistic quantum mechanics, precisely because of the possibility of particle creation or destruction.
The third property says that if we evolve a system from some initial time t0 to some intermediate time t1, and then from t1 to some ﬁnal time t2, we must get the same answer as evolving directly from t0 to t2. In other words, we can regard the state at any intermediate time as the initial conditions for the second half of the time evolution. According to this composition property, we have

U (t2, t1)U (t1, t0) = U (t2, t0).

(4)

3. The Hamiltonian

Now consider an inﬁnitesimal time evolution from time t to t + ǫ, where ǫ is small. We expand U (t + ǫ, t) out to ﬁrst order in ǫ and write the correction term as follows:

U (t + ǫ, t) = 1 − iǫΩ(t) + . . . ,

(5)

where the ellipsis indicates higher order terms in ǫ. Eﬀectively, we have deﬁned the operator Ω(t) as

Ω(t)

=

i

∂ ∂t′

U

(t′

,

t)

.
t′ =t

(6)

We introduce the factor of i in Eq. (6) in order to make Ω Hermitian. This follows from the unitarity of U (t, t0), precisely as in the demonstration of the Hermiticity of kˆ in Sec. 4.5. The operator Ω
depends on t in general because the right-hand side of Eq. (6) does so.

The operator Ω(t) can be regarded as the generator of time translations in quantum mechanics, because it gives the small correction needed to advance a state from time t to t + ǫ. Evolution over a ﬁnite time interval can be regarded as the result of a large number of small displacements in time, so knowing Ω(t) in principle allows us to evolve the system over any time interval. Since it is Hermitian, Ω(t) presumably corresponds to something we can observe.

The classical Hamiltonian H is considered the generator of time translations in classical mechanics. This means that for small time increments we can calculate the correction in q or p or any other classical observable by forming the Poisson bracket with H. To see this explicitly, let f (x, p) be a classical observable (for a particle moving in one dimension, for simplicity), which acquires a time dependence because x and p evolve in time as a particle moves along its orbit. Then, working to ﬁrst -
order in a small time increment ǫ, we have

f

(t

+

ǫ)

=

f

(t)

+

ǫ

df dt

= f (t) + ǫ

x˙

∂f ∂x

+

p˙

∂f ∂p

(7)

= f (t) + ǫ

∂H ∂p

∂f ∂x

−

∂H ∂x

∂f ∂p

= f (t) − ǫ{H, f },

Notes 5: Time Evolution in Quantum Mechanics

3

where we use Hamilton’s equations, Eq. (B.78), and the deﬁnition of the Poisson bracket, Eq. (B.100). This should be compared to Eq. (4.64), which shows the analogous role of the momentum in classical mechanics as the generator of translations.
Because of the role of the classical Hamiltonian as the generator of time translations, we guess that Ω(t) is closely related to the operator that we should deﬁne as the quantum Hamiltonian, denoted by Hˆ (with a hat to distinguish it from the classical Hamiltonian H). We cannot have Ω = Hˆ because Ω has units of inverse time, while Hˆ has units of energy. We ﬁx this by deﬁning

Hˆ (t) = ¯hΩ(t).

(8)

With this deﬁnition, the inﬁnitesimal time evolution (5) becomes

U

(t

+

ǫ,

t)

=

1

−

iǫ ¯h

Hˆ

(t)

+

.

.

.

.

(9)

We remark that Hamiltonians in classical mechanics depend on time when there are timedependent forces or ﬁelds present. See the discussion in Sec. B.20. For example, the motion of a charged particle in an electromagnetic wave is described by a time-dependent Hamiltonian. We expect the same to be true in quantum mechanics, so Hˆ depends on t, in general. As in classical mechanics, however, time-independent Hamiltonians are an important special case, and oﬀer some simpliﬁcations.
Our presentation leads to the question of whether the ¯h in Eq. (8) is the same as in Eq. (4.65), pˆ = ¯hkˆ. See Sec. 4.12 for an overview of the history of the relations E = ¯hω and p = ¯hk. Here we simply note that these relations are obviously the space- and time-components of a single 4-vector, in which energy and momentum are generators of displacements in time and space, respectively. Relativistic covariance requires that the ¯h’s in these relations be the same. We are only concerning oursel-
ves with the nonrelativistic theory at this point, but it is obvious that relativistic covariance will be impossible to establish if these ¯h’s are diﬀerent.

4. Diﬀerential Equations for Time Evolution

To obtain a diﬀerential equation for U (t, t0) we take the derivative with respect to the ﬁnal time t, using the deﬁnition of the derivative:

∂U (t, t0) ∂t

=

lim
ǫ→0

U (t

+

ǫ, t0) ǫ

−

U (t, t0) .

(10)

But by the composition property (4), we can write

U (t + ǫ, t0) = U (t + ǫ, t)U (t, t0),

(11)

so the operator U (t, t0) can be factored out to the right in Eq. (10), giving

∂U (t, t0) ∂t

=

lim
ǫ→0

U

(t

+

ǫ, ǫ

t)

−

1

U (t, t0).

(12)

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:36.657Z
- **Text Length:** 235370 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
