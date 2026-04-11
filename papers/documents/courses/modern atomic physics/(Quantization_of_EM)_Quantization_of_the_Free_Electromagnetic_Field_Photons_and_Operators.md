# PDF Document: (Quantization of EM) Quantization of the Free Electromagnetic Field Photons and Operators.pdf

**File Path:** (Quantization of EM) Quantization of the Free Electromagnetic Field Photons and Operators.pdf

**Processed Date:** 2026-02-10T18:17:50.054Z

**File Size:** 216.15 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 485

**Title:** (Quantization of EM) Quantization of the Free Electromagnetic Field: Photons and Operators

**Collection:** Courses > Modern Atomic Physics

---

## Extracted Text Content

Quantization of the Free Electromagnetic Field: Photons and Operators
G. M. Wysin wysin@phys.ksu.edu, http://www.phys.ksu.edu/personal/wysin Department of Physics, Kansas State University, Manhattan, KS 66506-2601
August, 2011, Vi¸cosa, Brazil

Summary
The main ideas and equations for quantized free electromagnetic ﬁelds are developed and summarized here, based on the quantization procedure for coordinates (components of the vector potential A) and their canonically conjugate momenta (components of the electric ﬁeld E). Expressions for A, E and magnetic ﬁeld B are given in terms of the creation and annihilation operators for the ﬁelds. Some ideas are proposed for the interpretation of photons at diﬀerent polarizations: linear and circular. Absor-
ption, emission and stimulated emission are also discussed.

1 Electromagnetic Fields and Quantum Mechanics
Here electromagnetic ﬁelds are considered to be quantum objects. It’s an interesting subject, and the basis for consideration of interactions of particles with EM ﬁelds (light). Quantum theory for light is especially important at low light levels, where the number of light quanta (or photons) is small, and the ﬁelds cannot be considered to be continuous (opposite of the classical limit, of course!).
Here I follow the traditinal approach of quantization, which is to identify the coordinates and their conjugate momenta. Once that is done, the task is straightforward. Starting from the classical mechanics for Maxwell’s equations, the fundamental coordinates and their momenta in the QM system must have a commutator deﬁned analogous to [x, px] = i¯h as in any simple QM system. This gives the correct scale to the quantum ﬂuctuations in the ﬁelds and any other dervied quantities. The creation and an-
nihilation operators will have a unit commutator, [a, a†] = 1, but they have to be connected to the ﬁelds correctly. I try to show how these relations work. Getting the correct normalization on everything is important when interactions of the EM ﬁelds with matter are considered.
It is shown that the quantized ﬁelds are nothing more than a system of decoupled harmonic oscillators, at a collection of diﬀerent wavevectors and wave-polarizations. The knowledge of how to quantize simple harmonic oscillators greatly simpliﬁes the EM ﬁeld problem. In the end, we get to see how the basic quanta of the EM ﬁelds, which are called photons, are created and annihilated in discrete processes of emission and absorption by atoms or matter in general. I also want to discuss diﬀerent aspec-
ts of the photons, such as their polarization, transition rules, and conservation laws.
Later in related notes I’ll talk about how this relates to describing two other topics of interest: quantum description of the dielectric response of materials (dielectric function (ω)), and, eﬀects involving circularly polarized light incident on a material in the presence of a DC magnetic ﬁeld (Faraday eﬀect). I want to describe especially the quantum theory for the Faraday eﬀect, which is the rotation of the polarization of linearly polarized light when it passes through a medium in a DC magnet-
ic ﬁeld parallel to the light rays. That is connected to the dielectric function, hence the interest in these related topics.

1.1 Maxwell’s equations and Lagrangian and Hamiltonian Densities

A Lagrangian density for the free EM ﬁeld is

1 L=

E2 − B2

(1)

8π

1

[It’s integral over time and space will give the classical action for a situation with electromagnetic ﬁelds.] This may not be too obvious, but I take it as an excercise for the reader in classical mechanics, because here we want to get to the quantum problem. Maxwell’s equations in free space, written for the electric (E) and magnetic (B) ﬁelds in CGS units, are

1 ∂B

1 ∂E

∇ · B = 0, ∇ × E +

= 0, ∇ · E = 0, ∇ × B −

=0

(2)

c ∂t

c ∂t

The zero divegence of B and Faraday’s Law (1st and 2nd eqns) allow the introduction of vector and scalar potentials, A and Φ, respectively, that give the ﬁelds,

1 ∂A

B = ∇ × A, E = −∇Φ −

(3)

c ∂t

I consider a problem far from sources. If sources were present, they would appear in the last two

equations in (2), so these same potentials could still apply. The potentials are not unique and have

a gauge symmetry. They can be shifted using some guage transformation (f ) without changing the

electric and magnetic ﬁelds:

1 ∂f

A = A + ∇f, Φ = Φ −

(4)

c ∂t

The Euler-Lagrange variation of the Lagrangian w.r.t the coordinates q = (Φ, Ax, Ay, Az) gives back Maxwell’s equations. Recall Euler-Lagrange equation and try it as a practice problem in

classical mechanics.

To approach quantization, the canonical momenta pi need to be identiﬁed. But there is no time derivative of Φ in L, so there is no pΦ and Φ should be eliminated as a coordinate, in some sense. There are time derivatives of A, hence their canonical momenta are found as

∂L 1 pi = ∂A˙ i = 4πc

∂Φ + 1 ∂Ai ∂xi c ∂t

1 = − 4πc Ei, i = 1, 2, 3

(5)

The transformation to the Hamiltonian energy density is the Legendre transform,

H=

piq˙i

−

L

=

p

·

∂A ∂t

−

L

=

2πc2p

2

+

1 8π

(∇

×

A)2

−

cp

·

∇Φ

(6)

i

When integrated over all space, the last term gives nothing, because ∇ · E = 0, and the ﬁrst two terms give a well known result for the eﬀective energy density, in terms of the EM ﬁelds,

1 H=

E2 + B2

(7)

8π

We might keep the actual Hamiltonian in terms of the coordinates A and their conjugate momenta p, leading to the classical EM energy,

H = d3r 2πc2p 2 + 1 (∇ × A)2

(8)

8π

Now it is usual to apply the Coulomb gauge, where Φ = 0 and ∇ · A = 0. For one, this insures

having just three coordinates and their momenta, so the mechanics is consistent. Also that is

consistent with the ﬁelds needing three coordinates because they are three-dimensional ﬁelds. (We

don’t need six coordinates, because E and B are not independent. In a vague sense, the magnetic

and electric ﬁelds have some mutual conjugate relationship.) We can use either the Lagrangian or

Hamiltonian equations of motion to see the dynamics. For instance, by the Hamiltonian method,

we have

δH

δH

q˙i

=

, δpi

p˙i = − δqi

(9)

Recall that the variation of a density like this means

δH ∂H

∂ ∂H

∂ ∂H

≡−

−

(10)

δf ∂f

i

∂xi ∂

∂f ∂xi

∂t ∂

∂f ∂t

2

The variation for example w.r.t coordinate qi = Ax gives the results

∂Ax ∂t

=

4πc2px,

∂px ∂t

=

1 4π

∇2Ax

(11)

By combining these, we see that all the components of the vector potential (and the conjugate momentum, which is proportional to E) satisfy a wave equation, as could be expected!

∇2A

−

1 c2

∂2A ∂t2

=

0

(12)

Wave motion is essentially oscillatory, hence the strong connection of this problem to the harmonic
oscillator solutions. The above wave equation has plane wave solutions eik·r−ωkt at angular frequency ωk and wave
vector k that have a linear dispersion relation, ωk = ck. For the total ﬁeld in some volume V , we can try a Fourier expansion over a collection of these modes, supposing periodic boundary conditions.

1 A(r, t) = √

Ak(t) eik·r

(13)

Vk

Each coeﬃcient Ak(t) is an amplitude for a wave at the stated wave vector. The diﬀerent modes are orthogonal (or independent), due to the normalization condition

d3r eik·r e−ik ·r = V δkk

(14)

The gauge assumption ∇ · k = 0 then is the same as k · Ak = 0, which shows that the waves are transverse. For any k, there are two transverse directions, and hence, two independent polarizations directions, identiﬁed by unit vectors ekα, α = 1, 2. Thus the total amplitude looks like

Ak = ˆk1Ak1 + ˆk2Ak2 = ˆkαAkα
α

(15)

Yet, from the wave equation, both polarizations are found to oscillate identically, except perhaps

not in phase,

Ak(t) = Ak e−iωkt

(16)

Now the amplitudes Ak are generally complex, whereas, we want to have the actual ﬁeld being quantized to be real. This can be accomplished by combining these waves appropriately with their complex conjugates. For example, the simple waves A = cos kx = (eikx + e−ikx)/2 and A = sin kx = (eikx − e−ikx)/2i are sums of ”positive” and ”negative” wavevectors with particular amplitudes. Try
to write A in (13) in a diﬀerent way that exhibits the positive and negative wavevectors together,

1 A(r, t) = √
2V

k

Ak(t) eik·r + A−k(t) e−ik·r

(17)

[The sum over k here includes wave vectors in all directions. Then both k and −k are included twice. It is divided by 2 to avoid double counting.] In order for this to be real, a little consideration shows that the 2nd term must be the c.c. of the ﬁrst term,

A−k = Ak∗

(18)

A wave needs to identiﬁed by both Ak and its complex conjugate (or equivalently, two real constants). So the vector potential is written in Fourier space as

1 A(r, t) = √
2V

k

Ak(t) eik·r + A∗k(t) e−ik·r

(19)

Note that the c.c. reverses the sign on the frequency also, so the ﬁrst term oscillates at positive frequency and the second at negative frequency. But curiously, both together give a real wave

3

traveling along the direction of k. Based on this expression, the ﬁelds are easily determined by applying (3), with ∇ → ±ik,

i E(r, t) = √
2c V

ωk Ak(t) eik·r − Ak∗(t) e−ik·r
k

(20)

i B(r, t) = √
2V

k× Ak(t) eik·r − Ak∗(t) e−ik·r
k

(21)

Now look at the total energy, i.e., evaluate the Hamiltonian. It should be easy because of the

orthogonality of the plane waves, assumed normalized in a box of volume V . We also know that

k is perpendicular to A (transverse waves!) which simpliﬁes the magnetic energy. Still, some care

is needed in squaring the ﬁelds and integrating. There are direct terms (btwn k and itself) and

indirect terms (btwn k and −k).

d3r

|E|2

=

1 4c2V

ωkωk

kk

d3r Akeik·r − A∗ke−ik·r A∗k e−ik ·r − Ak eik ·r

(22)

Upon integration over the volume, the orthogonality relation will give 2 terms with k = k and 2
terms with k = −k, for 4 equivalent terms in all. The same happens for the calculation of the magnetic energy. Also one can’t forget that Ak is the same as A∗−k. These become

1 d3r |E|2 = 1

8π

8π

ωk2 c2

|Ak

(t)|2

(23)

k

1 d3r |B|2 = 1

8π

8π

k2|Ak(t)|2

(24)

k

Of course, k2 in the expression for magnetic energy is the same as ωk2/c2 in that for electric energy. Then it is obvious that the magnetic and electric energies are equal. The net total energy is simple,

1 H=

d3r

|E|2 + |B|2

1 =

8π

8π

k2|Ak|2

=

1 4π

k2|Akα|2

(25)

k

kα

The last form recalls that each wave vector is associated with two independent polarizations. They

are orthogonal, so there are no cross terms between them from squaring.

The Hamiltonian shows that the modes don’t interfere with each other, imagine how it is possible

that EM ﬁelds in vacuum can be completely linear! But this is good because now we just need to

quantize the modes as if they are a collection of independent harmonic oscillators. To do that,

need to transform the expression into the language of the coordinates and conjugate momenta. It

would be good to see H expressed through squared coordinate (potential energy term) and squared

momentem (kinetic energy term).

The electric ﬁeld is proportional to the canonical momentum, E = −4πcp. So really, the electric

ﬁeld energy term already looks like a sum of squared momenta. Similarly, the magnetic ﬁeld is

determined by the curl of the vector potential, which is the basic coordinate here. So we have some

relations,

1

−i

p(r, t) = − E = √

4πc 8πc2 V

ωk Ak(t) eik·r − Ak∗(t) e−ik·r
k

(26)

This suggests the introduction of the momenta at each wavevector, i.e., analogous with the Fourier

expansion for the vector potential (i.e., the generalized coordinates),

1 p(r, t) = √
2V

k

pk(t) eik·r + p∗k(t) e−ik·r

(27)

Then we can make the important identiﬁcations,

pk(t)

=

−iωk 4πc2

Ak

(t)

(28)

4

Even more simply, just write the electric ﬁeld (and its energy) in terms of the momenta now.

−2πc E(r, t) = −4πcp(r, t) = √
Vk

pk(t)eik·r + p∗k(t)e−ik·r

(29)

When squared, the electric energy involves four equivalent terms, and there results

1 d3r |E|2 = 16π2c2

8π

8π

pk · p∗k = 2πc2

pk · p∗k

(30)

k

k

Also rewrite the magnetic energy. The generalized coordinates are the components of A, i.e., let’s

write

qk = Ak

(31)

Consider the magnetic ﬁeld written this way,

B(r, t) = √i 2V

k× qk(t) eik·r − q∗k(t) e−ik·r
k

(32)

and the associated energy is written,

1 d3r |B|2 = 4

8π

4 × 8π

k2qk

·

q∗k

=

1 8πc2

ωk2 qk · q∗k

(33)

k

k

This gives the total canonical Hamiltonian, expressed in the Fourier modes, as

H = 2πc2

pk

·

p∗k

+

1 8πc2

ωk2 qk · q∗k

k

k

(34)

Check that it works for the classical problem. To apply correctly, one has to keep in mind that

at each mode k, there are the two amplitudes, qk and q∗k. In addition, it is important to remember that the sum goes over all positive and negative k, and that q−k is the same as q∗k.
Curiously, look what happens if you think that the Hamiltonian has only real coordinates, and

write incorrectly

Hoo =
k

2πc2p2k

+

ωk2 8πc2

q2k

(35)

The Hamilton equations of motion become

p˙ k =

δHoo δqk

=

ωk2 4πc2

qk,

q˙ k

=

− δHoo δpk

=

−4πc2

pk

(36)

Combining these actually leads to the correct frequency of oscillation, but only by luck!

p¨ k

=

ωk2 4πc2

q˙ k

= −ωk2

pk,

q¨k = −4πc2 p˙ k = −ωk2 qk

(37)

These are oscillating at frequency ωk. Now do the math (more) correctly. Variation of Hamiltonian (34) w.r.t. qk and q∗k are diﬀerent
things. On the other hand, qk and q∗−k are the same, so don’t forget to account for that. It means that a term at negative wave vector is just like the one at positive wave vector: q−kq∗−k = q∗kqk. This doubles the interaction. The variations found are

p˙ k

=

δH δqk

=

ωk2 4πc2

q∗k,

q˙ k

=

δH −
δpk

=

−4πc2

p∗k

(38)

p˙ ∗k

=

δH δq∗k

=

ωk2 4πc2

qk,

q˙ ∗k

=

δH − δp∗k

=

−4πc2

pk

(39)

Now we can see that the correct frequency results, all oscillate at ωk. For example,

p¨ k

=

ωk2 4πc2

q˙ ∗k

= −ωk2 pk

q¨k = −4πc2 p˙ ∗k = −ωk2 qk

(40)

There are tricky steps in how to do the algebra correctly. Once worked through, we ﬁnd that the basic modes oscillate at the frequency required by the light wave dispersion relation, ωk = ck.

5

1.2 Quantization of modes: Simple harmonic oscillator example

Next the quantization of each mode needs to be accomplished. But since each mode analogous to a harmonic oscillator, as we’ll show, the quantization is not too diﬃcult. We already can see that the modes are independent. So proceed essentially on the individual modes, at a given wave vector and polarization. But I won‘t for now be writing any polarization indices, for simplicity.
Recall the quantization of a simple harmonic oscillator. The Hamiltonian can be re-expressed in some rescaled operators:

H = p2 + mω2 q2 = ¯hω P 2 + Q2 ;

mω

1

Q=

q, P = √ p

(41)

2m 2

2

¯h

m¯hω

Then if the original commutator is [x, p] = i¯h, we have a unit commutator here,

[Q, P ] = mω √ 1 [x, p] = i

(42)

¯h m¯hω

The Hamiltonian can be expressed in a symmetrized form as follows:

¯hω 1

H=

[(Q + iP )(Q − iP ) + (Q − iP )(Q + iP )]

(43)

22

This suggest deﬁning the annihilation and creation operators

1 a = √ (Q + iP ),

a† =

1 √

(Q − iP )

(44)

2

2

Their commutation relation is then conveniently unity,

[a, a†] = ( √1

)2[Q + iP, Q − iP ] =

1 {−i[Q, P ] + i[P, Q]} = 1

(45)

2

2

The coordinate and momentum are expressed

Q = √1 (a + a†), P = √1 (a − a†).

(46)

2

i2

The Hamiltonian becomes

H

=

¯hω (aa†

+

a†a)

=

¯hω(a†a

+

1 )

(47)

2

2

where the last step used the commutation relation in the form, aa† = a†a + 1. The operator nˆ = a†a

is the number operator that counts the quanta of excitation. The number operator can be easily

shown to have the following commutation relations:

[n, a] = [a†a, a] = [a†, a]a = −a, [n, a†] = [a†a, a†] = a†[a, a†] = +a,

(48)

These show that a† creates or adds one quantum of excitation to the system, while a destroys or
removes one quantum. The Hamiltonian famously shows how the system has a zero-point energy of
¯hω/2 and each quantum of excitation adds an additional h¯ω of energy. The eigenstates of the number operator nˆ = a†a are also eigenstates of H. And while a and
a† lower and raise the number of quanta present, the eigenstates of the Hamiltonian are not their
eigenstates. But later we need some matrix elements, hence it is good to summarize here exactly the operations of a or a† on the number eigenstates, |n , which are assumed to be unit normalized.
If a state |n is a normalized eigenstate of nˆ, with eigenvalue n, then we must have

a†|n = cn|n + 1 , n|a = c∗n n + 1|

(49)

where cn is a normalization constant. Putting these together, and using the commutation relation,

gives

1 = n|aa†|n = |cn|2 n + 1|n + 1 =⇒ |cn|2 = n|aa†|n = n|a†a + 1|n = n + 1

(50)

6

In the same fashion, consider the action of the lowering operator,

a|n = dn|n − 1 , n|a† = d∗n n − 1|

(51)

1 = n|a†a|n = |dn|2 n − 1|n − 1 =⇒ |dn|2 = n|a†a|n = n

(52)

Therefore when these operators act, they change the normalization slightly, and we can write

a†|n

√ = n + 1 |n + 1 ,

√ a|n = n |n − 1 .

(53)

Indeed, the ﬁrst of these can be iterated on the ground state |0 that has no quanta, to produce any

excited state:

1 |n = √

(a†)n|0

(54)

n!

Based on these relations, then it is easy to see the basic matrix elements,

n + 1|a†|n

√ = n + 1,

√ n − 1|a|n = n.

(55)

An easy way to remember these, is that the factor in the square root is always the larger of the number of quanta in either initial or ﬁnal states. These will be applied later.

1.3 Fundamental commutation relations for the EM modes
Now how to relate what we know to the EM ﬁeld Hamiltonian, Eqn. (34)? The main diﬀerence there is the presence of operators together with their complex conjugates in the classical Hamiltonian. How to decide their fundamental commutators? That is based on the fundamental commutation relation in real space (for one component only):

[Ai(r, t), pi(r , t)] = i¯h δ(r − r ).

(56)

The ﬁelds are expressed as in Eqns. (19) and (27). Using these expressions to evaluate the LHS of

(56),

1 [Ai(r, t), pi(r , t)] = 4V
kk

Akeik·r + A∗ke−ik·r, pk eik ·r + p∗k e−ik ·r

(57)

In a ﬁnite volume, however, the following is a representation of a delta function:

1 δ(r − r ) =

eik·(r−r )

V

k

(58)

Although not a proof, we can see that (56) and (57) match if the mode operators have the following commutation relations (for each component):

[Ak, p∗k ] = i¯hδk,k , [A∗k, pk ] = i¯hδk,k , [Ak, pk ] = i¯hδk,−k , [A∗k, p∗k ] = i¯hδk,−k . (59)

These together with the delta function representation, give the result for the RHS of (57),

1 [Ai(r, t), pi(r , t)] = 4V

i¯h 2eik·(r−r ) + 2ei−k·(r−r ) = i¯h δ(r − r ).

(60)

±k

Thus the basic commutators of the modes are those in (59). Now we can apply them to quantize the EM ﬁelds.

7

1.4 The quantization of the EM ﬁelds
At some point, one should keep in mind that these canonical coordinates are eﬀectively scalars, once the polarization is accounted for:

qk = ˆkqkα,
α

pk = ˆkpkα.
α

(61)

The polarizations are decoupled, so mostly its eﬀects can be ignored. But then the Hamiltonian (34) really has two terms at each wavevector, one for each polarization. For simplicity I will not be writing the polarization index, but just write scalar qk and pk for each mode’s coordinate and momentum. For any scalar coordinate and its momentum, we postulate from (59)

[qk, p†k ] = i¯hδk,k , [qk† , pk ] = i¯hδk,k , [qk, pk ] = i¯hδk,−k , [qk† , p†k ] = i¯hδk,−k ,

(62)

Note that the ﬁrst two look to be inconsistent if you think of the adjoint operation as just complex conjugate. But they are correct. Noting that (AB†)† = BA†, we have

[A, B†]† = BA† − A†B = [B, A†] = −[A†, B]

(63)

Then applied to the problem with A = qk and B = pk

[qk† , pk ] = −[qk, p†k ]† = −(i¯hδk,k )† = i¯hδk,k

(64)

So although the relations look unsual, they are correct.

Let’s look at some algebra that hopefully leads to creation and annihilation operators. First, get

some coordinates and momenta with unit normalized commutators. Suppose that a given mode kα

has a Hamiltonian from (34). Consider ﬁrst one term at one wave vector: [Even though, classically,

the terms at k and −k in the sum give equal contributions] Consider making a transformation to

Qk and Pk,

H+kα

=

2πc2p†kpk

+

ωk2 8πc2

qk† qk

=

¯hωk 2

Pk†Pk + Q†kQk

(65)

Here because it is a quantum problem, we suppose that the terms from k and −k modes really are

not the same. Thus there is a similar term for the negative wave vector:

H−kα

=

2πc2p†−kp−k

+

ωk2 8πc2

q−† kq−k

=

¯hωk 2

P−† kP−k + Q†−kQ−k

(66)

The right hand sides are the same as the energies for SHO’s in the normalized coordinates and momenta. However, we have relations like q−† k = qk, and q−k = qk† , and we suppose they should
apply to the new rescaled coordinates and momenta. So this latter relation also takes the form

H−kα

=

2πc2pkp†k +

ωk2 8πc2

qkqk†

=

¯hωk 2

PkPk† + QkQ†k

(67)

In the quantum problem, the order in which conjugate operators act is important and should not be modiﬁed. So H+kα and H−kα are not the same. To match the sides, try the identiﬁcations

4πc2 Pk = ¯hωk pk,

Qk =

ωk 4πc2¯h

qk

(68)

The basic commutator that results between them is now unit normalized,

[Qk, Pk†] =

ωk 4πc2¯h

4πc2 ¯hωk

[qk

,

p†k

]

=

1 i¯h
¯h

=

i

(69)

It is obvious one can also show

[Q†k, Pk] = i

(70)

8

Now we can re-express the energy in the sense of operators like what was done for the SHO, although it is more complicated here because of the two directions for the wavevectors. Note the following algebra that results if we try that, for complex operators:

F1

=

1 2

(Qk + iPk)(Q†k − iPk†) + (Q†k − iPk†)(Qk + iPk)

=

Q†kQk

+

Pk†Pk

+

i 2

PkQ†k + Q†kPk − Pk†Qk − QkPk†

(71)

That has extra terms that we do not want. To get rid of them, consider also the contribution from the opposite wave vector. We use the same form, but with −k, and employing Q−k = Q†k, P−k = Pk†.

F2

=

1 2

(Q−k + iP−k)(Q†−k − iP−† k) + (Q†−k − iP−† k)(Q−k + iP−k)

=

1 2

(Q†k + iPk†)(Qk − iPk) + (Qk − iPk)(Q†k + iPk†)

=

Q∗kQk

+

Pk∗Pk

−

i 2

PkQ†k + Q†kPk − Pk†Qk − QkPk†

(72)

So the combination of the two expressions eliminates the imaginary part, leaving only the part we want in the Hamiltonian. Therefore, algebraically speaking we can write:

H+kα

=

¯hωk 2

1 2 (F1

+

F2)

(73)

Based on these expressions, introduce creation and annihilation operators, for both the positive and

negative wave vectors:

1

ak

=

√ 2

(Qk

+

iPk),

a†k

=

√1 2

(Q†k

−

iPk†).

(74)

a−k

=

1 √
2

(Q†k

+

iPk†),

a†−k

=

1

√ 2

(Qk

−

iPk).

(75)

By their deﬁnitions, they must have unit real commutators, e.g.,

[ak, a†k]

=

1 √22 [Qk

+

iPk, Q†k

− iPk†]

=

1 2

−i[Qk, Pk†] + i[Pk, Q†k]

=1

(76)

On the other hand, a commutator between diﬀerent modes (or with diﬀerent polarizations at one wave vector) gives zero. The individual term in the Hamiltonian sum is

H+kα

=

¯hωk 2

1 2

aka†k + a†kak + a−ka†−k + a†−ka−k

(77)

So the total ﬁeld Hamiltonian is the sum

H=

¯hωk 2

a†kak + 1/2 + a†−ka−k + 1/2

(78)

k

The sum is over all wave vectors, and the positive and negative terms give the same total, so

H=

¯hωk

a†kαakα

+

1 2

=

1 nkα + 2

kα

kα

(79)

The number operator is implicitly deﬁned here:

nkα = a†kαakα

(80)

Then each mode speciﬁed by a wave vector and a polarization contributes h¯ω(a†kαakα + 1/2) to the Hamiltonian. Every mode is equivalent, mathematically, to a simple harmonic oscillator. What

9

could be more simple? Really, it is hard to believe, when you think about it. The modes are

completely independent, at this level, they do not interfere. There is just a linear superposition of

their EM ﬁelds. To get those ﬁelds, summarize a few more relationships.

The ﬁelds associated with the creation and annihilation operators are found via solving their

deﬁnitions,

Qk

=

1

√ 2

(ak

+ a†−k),

Pk

=

1

√ i2

(ak

− a†−k),

(81)

Then with

Akα = Akαˆkα,

4πc2¯h

Akα = qkα =

ωk Qkα,

(82)

applied into (19), the quantized ﬁelds are determined,





1 A(r, t) = √
2V

 ˆkα

k



4πc2¯h

(akα

+ √

a†−kα)

eik·r

+

ωk

2

4πc2¯h

(a−kα√+

a†kα)

 e−ik·r

ωk

2



(83)

Swapping some terms between the positive and negative wave vector sums, this is the same as

A(r, t) =

2πc2¯h V

k

√ˆkα ωk

akαeik·r + a†kαe−ik·r

(84)

Then the vector potential determines both the electric and magnetic ﬁelds by (20) and (21), which

give

E(r, t) = i

2π¯h V

k

ω√kˆkα ωk

akαeik·r − a†kαe−ik·r

(85)

B(r, t) = i

2π¯h V

k

ck × √

ˆkα

ωk

akαeik·r − a†kαe−ik·r

(86)

Indeed, after all this work, the ﬁelds have a certain simplicity. Their amplitude depends on Planck’s constant. Thus there must be quantum ﬂuctuations determined by it.
The above do not show the explicit time dependence. However, that is implicit in the creation/annihilation operators. Based on the Hamiltonian, their equations of motion are simple:

i¯ha˙ kα = [akα, H] = ¯hωk[ak, a†kαakα] = ¯hωk[akα, a†kα]akα = +¯hωkakα

(87)

i¯ha˙ †kα = [a†kα, H] = ¯hωk[a†kα, a†kαakα] = ¯hωka†kα[a†kαakα] = −¯hωka†kα

(88)

And then they oscillate at opposite frequencies:

a˙ kα = −iωkakα =⇒ akα(t) = akα(0)e−iωkt

(89)

a˙ †kα = +iωka†kα =⇒ a†kα(t) = a†kα(0)e+iωkt

(90)

1.5 Quantized ﬁeld properties: momentum, angular momentum

The ﬁelds not only carry energy, but it is directed, so they carry linear momentum and even angular momentum. The linear momentum is

G=

d3r E × B = i2 hc

4πc

4πc V

[ˆkα × (k × ˆk α )] ×

kα k α

d3r (akαeik·r − a†kαe−ik·r)(ak α eik ·r − a†k α e−ik ·r)

(91)

10

The orthognality relation only gives nonzero terms where k = k and k = −k, and there results

hc G=
4π

[ˆkα × (k × ˆk α )] (akαa†k α + a†kαak α )δk,k − (akαak α + a†kαa†k α )δk,−k

kα k α

(92)

The orthogonality of the polarization vectors with each other and with k forces that vector cross product to be just kδα,α . Only the direct terms give a nonzero result:

hc G=
4π

k(akαa†kα + a†kαakα) =

¯hck a†kαakα

kα

kα

(93)

There is no zero point term, because of the cancellation between a term at +k and one at −k. Then each mode carries a linear momentum of ¯hck.
Consider the angular momentum. The contribution from the ﬁelds is

1 J=

d3r [r × (E × B)]

(94)

4πc

But there is the identity,

[r × (E × B)] = E(r · B) − (r · E)B.

(95)

Furthermore, for any mode, the wave vector is perpendicular to both E and B. So this deﬁnition of angular momentum seems to give zero for the total component along the direction of propagation. Even if it more properly symmetrized for the QM problem, it still gives zero.
That shows that the concept of angular momentum in an EM ﬁeld is tricky. Possibly, assuming a plane wave is too restrictive, and instead one should not make any particular assumption on the nature of the ﬁelds, to start with. One can do a more careful analysis, that shows the angular momentum is composed from an orbital part and a spin part.
Consider the following vector algebra for the ith component of the argument in the angular momentum integral (essentially, the angular momentum density). Here the Levi-Civita symbol is used for the cross products, and the magnetic ﬁeld is expressed via the vector potential. Repeated indeces are summer over.

[r × (E × B)]i = εijk xj (E × B)k = εijk xj εklm ElBm = εijk xj εklm El (εmnp∂nAp) = εijk xj El(δknδlp − δkpδln)∂nAp = εijk xj [El∂kAl − El∂lAk]

(96)

Now when this is integrated over all space, the last term can be integrated by parts, dropping any vanishing surface terms at inﬁnity. Further, far from any sources, the electric ﬁeld is divergenceless, so ∇ · E = ∂lEl = 0. So now the expression becomes

[r × (E × B)]i = εijk [xj El∂kAl + ∂l(xj El)Ak] = εijk [xj El∂kAl + δlj ElAk] = εijk [xj El∂kAl + Ej Ak] = El(εijk xj ∂k) Al + εijk Ej Ak

(97)

This is an interesting expression. The ﬁrst term contains eﬀectively the orbital angular momentum operator acting between E and A. The second term is their cross product. Then the total angular momentum integrated over space is

1 J=
4πc

d3r {El(r × ∇)Al + E × A}

(98)

Both terms can be written as operators acting between the ﬁelds, adding h¯ in appropriate places:

i

[r × (E × B)]i = ¯h {El(−i¯h εijk xj∂k)Al + Ej(−i¯h εijk )Ak}

(99)

11

The ﬁrst term in (99) contains the orbital angular momentum operator, Li = (r × p)i, acting on identical components of E and A; it is a diagonal operator. The second contains what is a spin-1 operator, for which one can write its ith component,

(Si)jk = −i¯h εijk,

(S)jk = (Sixˆi)jk = −i¯h xˆiεijk.

(100)

Then the total angular momentum is expressed as a sum of these two parts, each being matrix elements of an operator,

i J=
4π¯hc

d3r Ej [(r × p)δjk + (S)jk] Ak

(101)

Well, really (Si)jk comes from the cross product operator, however, it can be seen to be a quantum spin operator, that couples diﬀerent components of E and A. This operator is deﬁned here by its matrices, one for each component i, where j and k are the column and row

(Si)jk (i = x, y, z)

0 = −i¯hεijk = −i¯h  0
0

0 0 −1

0 0

1  , −i¯h  0

0

1

0 0 0

−1   0

0  , −i¯h  −1

0

0

1 0 0

0 0 . 0

(102)

Check some properties to be convinced that this is really a spin-1 operator. Consider a commu-

tator between two of these, using the properties of the Levi-Civita symbol. Start from the matrix

multiplications, giving the lnth element of the matrix products:

[(Si)(Sj )]ln = (Si)lm(Sj )mn = (−i¯h)2εilm εjmn = (−i¯h)2(δinδlj − δij δln) [(Sj )(Si)]ln = (Sj )lm(Si)mn = (−i¯h)2εjlm εimn = (−i¯h)2(δjnδli − δjiδln) The diﬀerence cancels the last terms,

(103) (104)

[(Si)(Sj ) − (Sj )(Si)]ln = (−i¯h)2(δinδlj − δjnδli)

(105)

Then the diﬀerence of deltas can be put back into a product of ε’s.

[(Si)(Sj ) − (Sj )(Si)]ln = (−i¯h)2(−εijk)εlnk = i¯hεijk[−i¯hεkln] = i¯hεijk(Sk)ln.

(106)

Therefore these matrices do have the commutation relations for an angular momentum,

[(Si), (Sj)] = i¯h εijk (Sk).

(107)

Also, look at the matrix of S2, within the space that the operators act:

(S2)ln = (Si)lm(Si)mn = (−i¯h)2εilmεimn = (−i¯h)2(δlmδmn − δlnδmm)

(108)

The expression is summed over m = x, y, z, both the terms are diagonal. But δlmδmn = δln, while δmm = 3. Then this square is the diagonal matrix:

(S2)ln = (−i¯h)2(δln − 3δln) = 2¯h2δln.

(109)

This clearly has s(s + 1) = 2 with s = 1, so indeed it corresponds to spin-1. It may seem curious, that none of the matrices are diagonal. But this just means that the
Cartesian axes, to which these correspond, are not the good quantization axes. For example, ﬁnd the eigenvectors of the operator (Sx). The eigenvalue problem is

 −λ 0 0   ux 

(Sx − λI)(u) =  0 −λ −i¯h   uy  = 0.

0 i¯h −λ

uz

(110)

The eigenvalues are obviously λ = 0, ±¯h. The sx = 0 eigenvector is trivial, u = (1, 0, 0), and

seems to have little physical importance.

The

sx

=

+¯h

eigenvector

is

u

=

√1 (0, 1, i)
2

and

the

12

sx

=

−¯h

eigenvector

is

u

=

√1 (0, 1, −i).
2

If the vector potential were expressed in these as a

basis, the spin angular momentum components along x are speciﬁed. But this basis is not the pure

Cartesian components. It requires linear combinations of Cartesian components out of phase by

±90◦. These combinations are states of circular polarization, which are the ”good” states of spin

angular momentum. Thus, none of these three matrices is diagonal when expressed in Cartesian

components. More on the spin angular momentum and EM-wave polarization is discussed in the

next section.

Note, if one had seeked the eigenvectors of the matrix (Sz), one ﬁnds they are u = (0, 0, 1) for

sz = 0, and u = (1, i, 0) for sz = +¯h, and u = (1, −i, 0) for sz = −¯h. These last two correspond

to states where the A and E ﬁelds are rotating around the z-axis. It is typical to consider waves

propagating along z, hence, we see these vectors appear again when polarization is discussed for this

wave vector direction.

Thus the second part of the angular momentum involves just the cross product of E and A,

which is considered the intrinsic spin angular momentum in the EM ﬁelds. It can seen to be the

same as the canonical angular momentum in the ﬁelds, although it is hard to say in general why

this is true. If one uses a deﬁnition like (coordinate × conjugate momentum), integrated over space,

where the coordinate is the vector potential, and its conjugate momentum is −E/4πc, one gets

S = d3r A × −E = −1 d3r (A × E) 4πc 4πc

(111)

Except for the ordering, it is the same as S obtained above. Assume the ordering doesn’t matter (both are ﬁelds depending on position), and continue to evaluate it,

−1 ihc

S= 4πc V

ˆkα × ˆk α

kα k α

d3r akαeik·r + a†kαe−ik·r ak α eik ·r − a†k α e−ik ·r

(112)

The integrations are the usual orthogonality relations, which give terms where k = k and terms where k = −k. Only the ﬁrst set gives nonzero results, due to the cross products of the polarization vectors (Take them oppositely directed for the −k mode compared to the k mode. Further, we look for a quantity whose expectation value is nonzero.) So there remains only the terms

ih S=
4π

ˆkα × ˆkα (akαa†kα − a†kαakα )

kαα

(113)

Here the two polarizations must be diﬀerent to give a nonzero result. We suppose they are oriented

in such a way that

ˆk1 × ˆk2 = kˆ

(114)

so that this cross product is along the propagation direction. Then there are two equal terms and

the net is

S = i¯hkˆ (ak1a†k2 − a†k1ak2)

(115)

k

As shown with the eigenvalues of the S matrices, the basic unit of spin angular momentum is h¯, and it has a component only along (or opposite to) the propagation direction.

1.6 Orbital angular momentum

Mostly in atomic processes, the spin angular momentum is absorbed or emitted when photons are absorbed or emitted by atoms. Not much is usually mentioned about the orbital angular momentum in the EM ﬁelds. Consider here what L is for the quantized EM ﬁeld, using the expression,

1 L=
4πc

d3r El(r × ∇)Al.

(116)

13

If the ∇ operation is applied to the ﬁelds in (84), it pulls out ik for each mode. One then has

(r × ∇)Al =

2πc2¯h V

k

xˆ√l · ˆkα r × (ik) ωk

akαeik·r − a†kαe−ik·r

Now combine with the same component of the electric ﬁeld,

(117)

El(r × ∇)Al

=

i

2π¯h

ωk √xˆl · ˆk α

V
kα

ωk

ak α eik ·r − a†k α e−ik ·r

×

2πc2¯h V

kα

xˆ√l · ˆkα r × (ik) ωk

akαeik·r − a†kαe−ik·r

The orbital angular momentum then is

(118)

ih L=
4πV
k,k ,αα

ωk ωk

ˆk

α

· ˆkα

d3r r ak α eik ·r − a†k α e−ik ·r akαeik·r − a†kαe−ik·r × (ik)(119)

The basic integral to evaluate here is not exactly a normalization integral:

Ix =

d3r xeik ·reik·r = −i ∂ ∂kx

d3r

eik

·reik·r

=

∂ −i V
∂kx

δk,k

(120)

It would seem to be zero, although singular in some sense. For now I’ll consider that the orbital angular momentum should be zero.
One thing that can be said with more certainty is the component of L along the propagation direction, k, for some mode in the sum. As [r × (ik)] · k = 0, for a particular mode, there is no orbital angular momentum component in the direction of propagation.

1.7 Polarization

It is better to express the spin angular momentum S in terms of circular polarization components. In the expressions for E, the cartesian polarization vectors could be re-expressed in terms of rotating basis vectors. For example, consider a wave moving in the z direction, with ˆ1 = xˆ and ˆ2 = yˆ. Then if you look at, for example,

(xˆ + iyˆ)e−iωt = (xˆ cos ωt + yˆ sin ωt) + i(−xˆ sin ωt + yˆ cos ωt)

(121)

At t = 0, the real part is along xˆ and the imaginary part is along yˆ. At time progresses, both the real and imaginary parts rotate counterclockwise when viewed in the usual xy-plane. I am supposing this multiplying the positive wave, akeik·r. Then both of these rotate in the positive helicity sense, where the angular momentum is in the same direction as the wave propagation. The following wave rotates in the opposite sense, clockwise or negative helicity:

(xˆ − iyˆ)e−iωt = (xˆ cos ωt − yˆ sin ωt) + i(−xˆ sin ωt − yˆ cos ωt)

(122)

These suggest inventing polarization basis vectors for these two helicities (the wave vector index is

suppressed),

1

1

ˆL = ˆ+ = √ (ˆ1 + iˆ2), ˆR = ˆ− = √ (ˆ1 − iˆ2)

2

2

(123)

I use L and R for left and right in place of positive and negative. The inverse relations are

1

1

ˆ1

=

√ 2

(ˆL

+

ˆR),

ˆ2

=

√ i2

(ˆL

−

ˆR)

(124)

Then we see that in the expression for the electric ﬁeld, there appears a combination α ˆkαakα, or

1

1

1

1

ˆ1ak1 + ˆ2ak2 = √ (ˆL + ˆR)ak1 + √ (ˆL − ˆR)ak2 = √ (ak1 − iak2)ˆL + √ (ak1 + iak2)ˆR (125)

2

i2

2

2

14

This shows the two new alternative (circularly polarized) annihilation operators,

1 akL ≡ √ (ak1 − iak2),
2

1 akR ≡ √ (ak1 + iak2).
2

Their inverse relations are

1

ak1

=

√ 2

(akL

+

akR),

i

ak2

=

√ 2

(akL

−

akR).

Then a sum can be over either linear or circular basis:

(126) (127)

ˆkαakα = ˆ1ak1 + ˆ2ak2 = ˆLakL + ˆRakR
α

(128)

Additionally there are the corresponding creation operators,

a†kL

≡

√1 2

(a†k1

+ ia†k2),

a†kR

≡

√1 2

(a†k1

− ia†k2).

(129)

Their inverse relations are

a†k1

=

√1 2

(a†kL

+ a†kR),

a†k2

=

√−i 2

(a†kL

−

a†kR).

(130)

The expressions for the ﬁelds really don’t depend on which basis is used. However, the ones stated earlier do need to be modiﬁed to be more general, since now the basis vectors can be complex. To be totally consistent for the creation terms, we need to satisfy the conjugate relation

ˆ†kαa†kα = ˆ†1a†k1 + ˆ†2a†k2 = ˆ†La†kL + ˆ†Ra†kR
α

(131)

It means that the correct expressions for the ﬁelds in the case of complex basis vectors must be

A(r, t) =

2πc2¯h V

k

1 √
ωk

ˆkαakαeik·r + ˆ†kαa†kαe−ik·r

(132)

2π¯h E(r, t) = i
V

√ ωk

ˆkαakαeik·r − ˆ†kαa†kαe−ik·r

k

(133)

B(r, t) = i

2π¯h V

k

ck× √
ωk

ˆkαakαeik·r − ˆ†kαa†kαe−ik·r

(134)

The combinations of operators with their conjugates shows that these totals are hermitian. Now the expression for the spin angular mometum can be expressed using the circular compo-
nents,

S=

k

i¯hkˆ

1

√ 2

(akL

+

akR)

√−i 2

(a†kL

−

a†kR)

−

√1 2

(a†kL

+

a†kR

)

√i 2

(akL

−

akR)

(135)

The diﬀerent polarizations commute, and the only nonzero commutation relations for the circular polarization creation and annihilation operators are

[akL, a†kL] = 1, [akR, a†kR] = 1.

(136)

So all that survives after using the commutation relations is

S = ¯hkˆ a†kLakL − a†kRakR
k

(137)

15

This apparently involves number operators for each circular polarization. The left states contribute +h¯kˆ and the right states contribute −¯hkˆ to the total angular momentum. So in a sense, one can consider that photons carry an intrinsic angular momentum of magnitude h¯. Then they can be considered as particles with spin-1. The numbers operators in this expression count the number of photons in each helicity or circular polarization state.
The creation operators generate quanta of the EM ﬁeld, in some sense. There are the linear polarization operators and the circular ones. We might think of the circular state as a linear combination of two linear states, and vice versa. Does a photon have an intrinsic angular momentum? Perhaps it is not a reasonable question. Depending on what is measured, you may only see either the linear components or only the circular components. The basis you would use is determined by how the experiment is pe-
rformed, i.e., by what states your experiment projects out. However, some photon-atom interactions, for example, may be most sensitive to the circular components. Then that type of experiment would view the photons as having circular polarization and as being spin-1 particles.

2 Interactions of EM ﬁelds with matter

EM ﬁelds are always coupled to charged particles. Here coupling of the quantized EM ﬁeld to nonrelativistic charges is considered. It is expected that this is a situation where a perturbation approach can be applied. It means, we think the eigenstates of some material problem are known, and we want to see the perturbations due to the application of light. Or, it could be we want to see the emission of light that is expected, either spontaneously due to ﬂuctuations in the EM ﬁeld, or stimulated by -
the EM ﬁeld. This is a brief summary of how to go about these calculations.
The usual prescription to include interactions is to modify the four-momentum of the particle of charge q, according to the eﬀects of the ﬁeld it experiences,

q

p −→ p − A, c

E −→ E − qA0

(138)

where A is the vector potential and A0 is the scalar potential φ. The energy operator is the usual

E

=

i¯h

∂ ∂t

and

the

momentum

operator

is

the

usual

p

=

−i¯h∇.

The

original

problem

in

the

absence

of the ﬁelds is a Schr¨odinger problem HΨ = EΨ,

p2

∂

+ V (r) Ψ(r, t) = i¯h Ψ(r, t)

2m

∂t

(139)

When the EM ﬁelds are now turned on, this changes to

1

q2

∂

p− A

2m

c

+ V (r) + qA0

Ψ(r, t) = i¯h Ψ(r, t) ∂t

(140)

Then the eﬀective Hamiltonian for the perturbed problem is just

1

q2

H=

p− A

2m

c

+ V (r) + qA0

(141)

The simplest case is to consider a single particle or charge as it interacts with the ﬁeld. In addition, there is supposed to be the Hamiltonian for the free EM ﬁelds themselves, as we quantized in the previous section. So the total eﬀective Hamiltonian for particle in the ﬁeld is

p2

q

q2A2

H

=

2m

+

V

(r)

−

(A 2mc

·

p

+

p

·

A)

+

2mc2

+

qA0

+

Hphotons

(142)

The ﬁrst two terms are the free particle, the next three terms are the interaction with the EM ﬁelds, and the last term is the free photon Hamiltonian, whose eigenstates are states with certain numbers of photons are given wavevectors and polarizations.
Although not necessary, we can continue to use the radiation gauge, where ∇ · A = 0 and A0 = 0, as we used for the free photons. This implies p · A = A · p. Then there are only two interaction

16

terms, one that is linear in A and one that is quadratic in A. The linear terms will involve individual

photon creation and annihilation terms, corresponding to single-photon processes that can be ana-

lyzed in ﬁrst order perturbation theory. The quadratic terms correspond to two-photon processes

even in ﬁrst order PT, and probably to get those correct would actually require second order PT.

However, they should be smaller. Thus the leading perturbation is due to only the single-photon

term,

q

q2A2

q

H1

=

− A·p+ mc

2mc2

≈

− A·p mc

(143)

Note that the A operator is due to the EM ﬁeld (creation/annihilation) while the p operator is

associated with the charged particle momentum only. These would act on composite bra or kets

involving both the EM ﬁeld state and the particle state.

In a basic process where the ﬁnal state has one less photon than the initial state, a photon was

absorbed by the matter. On the other hand, if the ﬁnal state has one more photon than the initial

state, a photon was emitted by the matter.

In absorption, the absorbed photon could come from any direction dΩ. In emission, the emitted

photon can go out in any direction dΩ. In either case, some density of states is involved in the

calculation of the rate for the process, consistent with conservation of energy and other variables.

2.1 First order perturbations: single photon events

The amplitude for a transition between some initial and ﬁnal states is given by a matrix element, which goes into Fermi’s Golden Rule to get the transition rate:

wI →F

=

2π ¯h

|

ΨF |H1|ΨI

|2 ρ

(144)

where ρ is some density of states for the photon involved. The interaction can be written using the quantized EM ﬁeld A,

−q H1 = mc

2πc2¯h V

k

1 √
ωk

ˆkαakαeik·r + ˆ†kαa†kαe−ik·r

·p

(145)

So we need matrix elements of this, between states with given numbers of photons, and initial and

ﬁnal states of the matter. Especially, the quantum process of light emission or absorption requires

use of the basic matrix elements of the creation/annhilation operators.

The states are products of a state for the particle and a state for the ﬁelds. So we write in

general,

|Ψ = |ψ | (n)

(146)

where ψ refers to the particle state, and (n) is a shorthand notation for the occupation numbers of all of the photon modes. In absorption or emission, we suppose that only one of the photon modes changes its occupation number, because we are dealing with single-photon processes. Then the general matrix element for the process is

−q h

1

ΨF |H1|ΨI = m

√

V
kα

ωk

(n)f |akαe−iωkt|(n)i ψf |eik·rˆkα · p|ψi + (n)f |a†kαeiωkt|(n)i ψf |e−ik·rˆkα · p|ψi

(147)

In ﬁrst order time-dependent perturbation theory, if an eﬀective potential that is acting is V (t) = Voe−iωt+Vo†e+iωt, the transition amplitude according to the Born approximation is a matrix element,

−i f |U (t, 0)|i =

t
dτ eiωfiτ f |V (τ )|i ,

¯h 0

ωf i

≡

(Ef

− ¯h

Ei)

(148)

That’s the same form we have for this problem. The frequency here depends on the diﬀerence in energy of the initial and ﬁnal states of the matter, which is being perturbed by the radiation.

17

Now when combined with the frequency of the radiation ﬁeld (for one particular mode), the time integrations needed are simple, one for absorption or destruction of a photon, and one for emission or creation of a photon,

t
dτ

eiωfiτ e−iωkτ

=

ei(ωfi−ωk)t − 1 ,

0

i(ωfi − ωk)

for absorption

(149)

t
dτ

eiωfiτ e+iωkτ

=

ei(ωfi+ωk)t − 1 ,

0

i(ωfi + ωk)

for emission

(150)

These expressions tend to get large where the denominators go to zero. Since this occurs at diﬀerent places, we can consider absorption and emission separately.
For Absorption: The squared matrix element is the probability to ﬁnd the system in the desired ﬁnal state after a time t has passed. When we let t → ∞, and divide by the time, it gives the transition rate. This is one thing, for example, that can be calculated. In the problem of ﬁnding the dielectric function of a material, however, we will want to ﬁnd some diﬀerent quantities. Thus let’s just summarize this brieﬂy.
For simplicitly, supposed there is only one wavelength of light present in the radiation ﬁeld, the one that is exactly tuned to be absorbed! The radiation matrix element that is needed is

√ (n)f |akα|(n)i = nkα

(151)

This is an extreme approximation, because the light should really have some spectral distribution. This can be corrected later. Then the probability for absorbing this one mode is the squared matrix element (squared transition amplitude),

|

f |U |i

|2

=

2πq2nkα m2V ¯hωk

ψf |eik·rˆkα · p|ψi 2

sin

(ωf

i −ωk 2

)

t

2

(ωf i −ωk )

2

(absorption)

(152)

In the limit of large time, the last factor acts like a delta functon in its argument in the sine. So

this result is particularly peaked at the resonance, ωk = ωfi, which just displays the conservation of energy in the absorption process.

Now consider a certain spectrum of radiation, but all travelling in one direction (a beam). The

sum over wave vector can be considered in this situation as an integral over only the magnitude of

k, or equivalently, over the frequency ωk. The beam is characterized by the intensity of its light at diﬀerent frequencies, i.e., its spectrum, which could be very narrow or very wide. Let a function

Iα(ω) describe the intensity of light per unit frequency interval. Then Iα(ω)dω is the energy per time per area in the beam, for modes of frequency ω and polarization α. Also, intensity in waves is

their energy density times their speed. For a collection of N monochromatic photons, the intensity

could be written

N

I

I = ¯hωc, =⇒ N = V

V

¯hωc

(153)

Here we have a sum and not exactly monochromatic light. If we change a sum over modes into a

continuous integral, we usually do the replacement,

V −→ (2π)3

d3k

k

(154)

But that would apply to photons travelling in all possible directions. If we instead just sum up the photons, each of energy h¯ω travelling at the speed c along the chosen beam direction, the number of photons (in volume V in the beam) will be described by

nkα −→ V
k

dω Iα(ω) ¯hωc

(155)

18

The absorption transition rate involves the limit,

1 w = lim

| f |U |i |2

t→∞ t

kα

(156)

For the matter in a beam of radiation, this leads to

1 w = lim V
t→∞ t

dω

Iα(ω) 2πq2 ¯hωc m2V ¯hω

ψf |eik·rˆkα · p|ψi 2

sin

(ωf

i −ω ) 2

t

2

(ωf i −ω)

2

(157)

When the limit is taken, the last function on the end produces a delta function enforcing ω = ωfi.

Using

x

=

(ωf

i −ω) 2

t,

the

weight

is

found

to

be

1 +∞ dω
t −∞

sin

(ωf i −ω) 2

t

(ωf i −ω)

2

2
=

+∞
dx 2
−∞

sin x 2 = 2π
x

(158)

Therefore the transition rate for absorption of one polarization from the beam can be expressed

1 w=
c

2πq m¯hωf i

2
Iα (ωf i )

ψf |eik·rˆkα · p|ψi

2

(absorption)

(159)

Emission: The radiation matrix element squared now is nkα + 1. The ﬁrst term corresponds to stimulated emission, caused by radiation already present, and the second is the spontaneious emission. The calculation of the stimulated rate follows the same algebra as for absorption. One will arrive at the rate in a beam to be

1 w=
c

2πq m¯hωif

2
Iα(ωif ) ψf |e−ik·rˆkα · p|ψi 2

(stimulated emission)

(160)

So this is really now much diﬀerent from the absorption expression. Physically, however, it is completely diﬀerent, especialy, in that the rocess will produce a new photon that is coherent with the present photons. This leads to masers, lasers, etc. The produced photon is just a copy of one of the original ones, and is also travelling in the same direction.
For now I don’t discuss spontaneous emission, although it is a very interesting subject!

3 Electric polarization and dielectrics

Here I want to consider the basic theory for induced electric dipoles in matter, and how that leads to the electric permitivity (ω). In optical systems, it is clear that the response of a medium to the radiation ﬁelds, i.e., photons, induces electric dipoles, and those in turn could react back on the radiation. The theory is related to that just discussed for using time-dependent perturbation theory applied to absorption and emission of photons.
An optical medium has a dielectric response due primarily to its electrons of charge q = −e, and their dipole moments induced by applied ﬁelds. I will consider this as a quantum problem, because I will include the eﬀects of both the electric and magnetic ﬁelds, especially, what happens when a DC magnetic ﬁeld is applied (Faraday eﬀect).
Start from the simplest problem, the Drude model, where the optical medium is composed just from a gas of free (noninteracting) electrons, moving between ﬁxed nuclei. Classically the problem is quite simple: the electric ﬁeld in the radiation ﬁeld at frequency ω displaces the electrons from their original positions, at the frequency of the radiation. Then it is easy to ﬁnd the induced dipoles and do the necessary electrodynamics to get (ω). The only possible diﬃculty: the gas oscillates as a whole-
, leading to plasma oscillations. But we aren’t really considering this kind of collective mode, only the averaged response of individual charges. An individual charge follows Newton’s Law, in the net ﬁeld surrounding it, E = E0e−iωt,

m¨r = qE0e−iωt,

=⇒

r(t)

=

−qE0 mω2

e−iωt

=

−q mω2 E

(161)

19

The charge oscillates at the same frequency as the radiation, and its displacements of amplitude −qE0/mω2 about its original position are proportional to the strength of the radiation. The charge’s induced electric dipole moment is d = qr. If there are N charges in a volume V , or a volume density
of n = N/V , then the net dipole moment per unit volume is the electric polarization,

nq2 P = nd = nqr = − mω2 E

(162)

The total electric displacement can then be found (CGS units) to get the dielectric function,

nq2

nq2

D = E = E + 4πP = 1 − 4π mω2 E =⇒ (ω) = 1 − 4π mω2

(163)

One can see the large oscillations and response will occur if

frequency,

4πnq2

ωp =

m

→ 0, which takes place at the plasma (164)

Then it is usual to write the dielectric function for this simplest case as

(ω)

=

nq2 1 − 4π mω2

=

1−

ωp2 ω2

(165)

Note that to convert the results to SI units, just recall that the charge must be re-scaled by the

relation

qC2 GS

→

qS2I ; 4π 0

nq2 ωp = m 0 (SI units)

(166)

where 0 = 8.854 pF/m is the permitivity of vacuum. Furthermore, one can consider partially bound electrons with damped motion–it is a slight modiﬁcation of the above and removes the inﬁnite divergence at the plasma frequency.
What about the QM problem for the Drude model? The free electrons can be assumed to be in eigenstates of momentum, i.e, their unperturbed Hamiltonian only has kinetic energy:

p2 He = 2m Take the eigenstates as normalized plane waves:

(167)

1 ψk(r) = √

eik·r

V

(168)

First I’ll consider a zero temperature problem. Just consider the eﬀects on an individual electron and its interaction with the quantized radiation ﬁelds in the Coulomb gauge. Take the interaction due to single-photon processes, as discussed in the previous section:

q H1 = − mc A · p

(169)

The perturbation should cause the electron to make transitions between the plane wave states. Let’s see what happens. We know the expression for the radiation vector potential, so

−q H1 = m

h V

k

1 √
ωk

ˆkαakαeik·r + ˆ†kαa†kαe−ik·r

·p

(170)

Now we don’t necessarily need to know transition rates for this problem, we only want to know the expectation value of the electric dipole moment operator, d = qr. Unfortunately, we see right away, that for whatever state of the electron we might pick, this expectation will be zero, because of the photon operators. If the photon number does not change, the photon matrix elements will give zero.

20

Thus I suspect we need to look at this problem with second order perturbation theory. Further, we need to be cleaer about what is the actual state of the photons being considered. However, that could be fairly simple, say, a state with n identical photons (a very large number) at the frequency for which we need to know (ω). Even for this state, ﬁrst order PT will not give an induced dipole moment.
It’s possible that states of the time-dependent Hamiltonian, He + H1 can be solved without a perturbation approach. Try that ﬁrst.
21

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:50.054Z
- **Text Length:** 54316 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
