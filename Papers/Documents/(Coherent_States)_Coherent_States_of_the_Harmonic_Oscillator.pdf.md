# PDF Document: (Coherent States) Coherent States of the Harmonic Oscillator.pdf

**File Path:** (Coherent States) Coherent States of the Harmonic Oscillator.pdf

**Processed Date:** 2026-02-10T18:18:45.567Z

**File Size:** 104.48 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 33

**Collection:** Courses > Modern Atomic Physics

---

## Extracted Text Content

Coherent states of the harmonic oscillator

In these notes I will assume knowledge about the operator method for the harmonic oscillator corresponding to sect. 2.3 i ”Modern Quantum Mechanics” by J.J. Sakurai. At a couple of places I refefer to this book, and I also use the same notation, notably x and p are operators, while the correspondig eigenkets are |x etc.
1. What is a coherent state ?
Remember that the ground state |0 , being a gaussian, is a minimum uncertainty wavepacket: Proof:

Since

x2 = h¯ (a + a†)2 2mω
p2 = − mωh¯ (a − a†)2 2

0|(a + a†)(a + a†)|0 = 0|aa†|0 = 1

(1)

0|(a − a†)(a − a†)|0 = − 0|aa†|0 = −1

(2)

it follows that

x2

0

p2

0

=

h¯ 2 − 1(−1)
4

=

h¯ 2 4

and ﬁnally since x 0 = p 0 = 0, it follows that

(∆x)2

0

(∆p)2

0

=

h¯ 2 4

(3)

We can now ask whether |n is also a minimum uncertainty wave packet. Corresponding to (1) and (2) we have

n|(a + a†)(a + a†)|n = n|aa† + a†a|n = n|2a†a + [a, a†]|n = 2n + 1

and similarly

n|(a − a†)(a − a†)|n = −(2n + 1)

which implies

(∆x)2

n

(∆p)2

n

=

h¯2 (2n + 1)2 4

(4)

1

so |n is not minimal ! Clearly a crucial part in |0 being a minimal wave packet was

a|0 = 0 ⇒ 0|a†a|0 = 0

this corresponds to a sharp eigenvalue for the non-Hermitian operator mωx+ip even though, as we saw, there was (minimal) dispersion in both x and p. It is natural to expect other minimal wave-packets with non zero expectation values for x and p but still eigenfunctons of a, i.e.

a|α = α|α

(5)

which implies α|a†a|α = |α|2. It is trivial to check that this indeed deﬁnes a minimal wave-packet

α|(a + a†)|α = (α + α ) α|(a − a†)|α = (α − α ) α|(a + a†)(a + a†)|α = (α + α )2 + 1 α|(a − a†)(a − a†)|α = (α − α )2 − 1

from which follows

(∆x)2 α =

x2 α −

x

2 α

=

h¯ 2mω

(∆p)2 α =

p2 α −

p

2 α

=

h¯mω 2

and accordingly

(∆x)2

α

(∆p)2

α

=

h¯ 4

(6)

So the states |α , deﬁned by (6), satisﬁes the minimum uncertainty relation. They are called coherent states and we shall now proceed to study them in detail.

2

2. Coherent states in the n-representation
In the |n base the coherent state look like:

|α = cn|n = |n n|α

(7)

n

n

Since

|n = (√a†)n |0

(8)

n!

we have

n|α = √αn 0|α

(9)

n!

and thus

|α = 0|α ∞ √αn |n

(10)

n=0 n!

The constant 0|α is determined by normalization as follows:

1=

α|n n|α = | 0|α |2 ∞ |α|2m = | 0|α |2e|α|2

n

m=0 m!

solving for 0|α we get:

0|α

=

e−

1 2

|α|2

(11)

up to a phase factor. Substituting into (10) we obtain the ﬁnal form:

|α

=

e−

1 2

|α|2

∞

αn √ |n

n=0 n!

(12)

Obviously |α are not stationary states of the harmonic oscillator, but we shall see that they are the appropriate states for taking the classical limit.
A very convenient expression can be derived by using the explicit expression (8) for |n :

∞

αn √ |n

=

∞

αn (a†)n|0

= eαa†|0

n=0 n!

n=0 n!

which implies

|α

=

e−

1 2

|α|2

+αa†

|0

= eαa†−α a|0

(13)

3

3. Orthogonality and completeness relations
We proceed to calculate the overlap between the coherent states using (12).

α|β =

α|n |β

= e−

1 2

|α|2

−

1 2

|β|2

(α β)n

n

n n!

= exp (− 1 |α|2 − 1 |β|2 + α β)

2

2

(14)

and similarly

β|α = exp (− 1 |α|2 − 1 |β|2 + β α)

(15)

2

2

so

| α|β |2 = α|β β|α = exp (−|α|2 − |β|2 + α β + αβ )

or | α|β |2 = e−|α−β|2 .

(16)

Since α|β = 0 for α = β, we say that the set {|α } is overcomplete. There is still, however, a closure relation:

d2α |α α| = d2α e−|α|2 (√α )nαm |m n|

(17)

m,n n! m!

where the measure d2α means ”summing” over all complex values of α, i.e. integrating over the whole complex plane. Now, writing α in polar form:

α = reiφ ⇒ d2α = dφ dr r

(18)

we get

d2α e−|α|2 (α )nαm =

∞ dr re−r2 rm+n

2π
dφ ei(m−n)φ

0

0

1 = 2πδm,n 2

∞ dr2 (r2)me−r2 = πm!δm,n
0

Using this we ﬁnally get:

d2α |α α| = π |n n| = π
n

or equivalently

d2α

|α α| = 1

(19)

π

4

4. Coherent states in the x-representation
Remember that x |0 is a minimal gaussian wave packet with x = p = 0. Since x |α is also a minimal wave packet and

a + a†

mω

(α) = α|

|α =

α|x|α

(20)

2

2h¯

a − a†

1

(α) = α|

|α = √

α|p|α

(21)

2i

2mωh¯

or



√



x

α

=

¯h
√ mω

√2 (α)

(22)

 p α = mωh¯ 2 (α)

it is natural to expect that x |α is a displaced gaussian moving with velocity

v = p/m. We now proceed to show this. Using the previously derived form (13)

of the coherent states expressed in terms of the ground state of the harmonic

oscillator we get

√

x |α

=

x

|e−

1 2

|α|2+αa†

|0

=

e−

1 2

|α|2

x |eα

|0 mω
2h¯

(x−

ip mω

)

Acting from the left with x | gives us 1:

x |α

√

= e e x |0 −

1 2

|α|2

α

mω 2h¯

(x

−

i mω

(−i¯h

d dx

))

= N e e e −

1 2

|α|2

α√ (x
x0 2

−x20

d dx

)

−

1 2

(

x x0

)2

(23)

where we have used the explicit form of x |0 and introduced the constants:



 

x0

=



¯h mω

  

N=

4 mω π¯h

(24)

For notational simplicity we also put y = x /x0. With these substitutions equation (23) will look like:

x |α

= N e e e −

1 2

|α|2

√α (y − d )

2

dy

−

1 2

y

2

(25)

Using the commutator relation

eA+B

=

e−

1 2

[A,B]eAeB

(26)

1c.f. Sakurai p.93

5

which is valid if both A and B commute with [A, B], we get

e e = e e e √α (y − d )

2

dy

−

1 2

y

2

−

|α|2 4

+

√α 2

y

− √α d
2 dy

−

1 2

y

2

(27)

and

thus,

noting

that

ea

d dy

,

is

a

translation

operator

x |α

= N e−

1 2

|α|2

−

1 2

y

2

−

1 2

α2

√ + 2αy

=

1√ N exp (− (y − 2

√ (α))2 + i 2

(α)y − i

(α)

(α))

(28)

2

Using (22) the resulting expression for the wavefunction of the coherent state is

x |α = N e−

mω 2h¯

(x

−

x

α

)2

+

i h¯

p

αx

−

i 2h¯

p

α

x

α

(29)

and since the last term is a constant phase it can be ignored and we ﬁnally get

ψα(x )

=

(

mω

)1/4

e

i h¯

πh¯

p

αx

−

mω 2h¯

(x

−

x

α )2

,

(30)

which is the promissed result.

5. Time evolution of coherent states
The time evolution of a state is given by the time evolution operator 2 U(t). Using what we know about this operator and what we have learned so far about the coherent states we can write:

|α, t

= U(t, 0)|α(0)

=

e−

i h¯

H

t

|α(0)

= e e −

i h¯

H

t

−

1 2

|α(0)|2

(α√(0))n |n

n n!

(31)

But the |n :s are eigenstates of the hamiltonian so:

|α, t

=

e−

1 2

|α(0)|2

(α(0))n √

e−

i h¯

ω¯h(n+

1 2

)t

(a†)n √

|0

n n!

n!

which is the same as

|α, t

=

e e −

1 2

|α(0)|2

−

i 2

ωt

(α(0)e−iωta†)n |0 =

n

n!

exp (− 1 |α(0)|2

−

i ωt +

α(0)e−iωta†)|0

2

2

2c.f. Sakurai chapter 2.1

(32) (33)

6

Comparing this expression with (13), it is obvious that the ﬁrst and the third term in the exponent, operating on the ground state, will give us a coherent state with the time dependent eigenvalue e−iωtα(0) while the second term only will contribute with a phase factor. Thus we have:

|α, t

=

e−

i 2

ωt

|e−iωt

α(0)

= |α(t)

(34)

So the coherent state remains coherent under time evolution. Furthermore,

α(t) = e−iωtα(0) ⇒

d α(t) = −iωα(t)

(35)

dt

or in components

d dt

(α) = ω

(α)

d dt

(α) = −ω

(α)

(36)

Deﬁning the expectation values,

x(t) = α(t)|x|α, t p(t) = α(t)|p|α, t

(37)

we get





d dt

x(t)

=

¯h 2mω

2

d dt

(α) =

¯h 2mω

2ω

(α)

=

p(t) m



d dt

p(t)

=

i

m¯hω 2

(−2i)

d dt

(α) = −

m¯hω 2

2ω

(α) = −mω2x(t)

(38)

or in a more familiar form

p(t)

=

m

d dt

x(t)

=

mv(t)

d dt

p(t)

=

−mω2x(t)

(39)

i.e. x(t) and p(t) satisﬁes the classical equations of motion, as expected from Ehrenfest’s theorem.
In summary, we have seen that the coherent states are minimal uncertainty wavepackets which remains minimal under time evolution. Furthermore, the time dependant expectation values of x and p satiﬁes the classical equations of motion. From this point of view, the coherent states are very natural for studying the classical limit of quantum mechanics. This will be explored in the next part.

7

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:45.567Z
- **Text Length:** 7841 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
