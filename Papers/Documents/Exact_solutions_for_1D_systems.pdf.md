# PDF Document: Exact_solutions_for_1D_systems.pdf

**File Path:** Exact_solutions_for_1D_systems.pdf

**Processed Date:** 2026-02-10T18:19:05.725Z

**File Size:** 196.13 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 66

**Collection:** Courses > Quantum Mechanics

---

## Extracted Text Content

Exact solutions for 1-D systems
HM, Physics 221A, Fall 2023 September 3, 2023

Abstract
The prime example for a bound state particle is the harmonic oscillator, but this model is too simple in many situations. For example, all energy level are equidistant, and the potential admits bound states of arbitrary energy. For studying molecules, nuclei, or atoms in optical dipole traps, potentials with more general features are required. These require solutions of time-dependent Schr¨odinger equations with non-constant coefficients. Furthermore, such equations arise in 3D problems when makin-
g a separation of variables, e.g., the radial function and spherical harmonics in the hydrogen atom, 3D potential well, and other situations. In this note, we will study how to approach such differential equations.

1 Second-order ordinary differential equations (ODEs) with variable coefficients

The axioms of quantum mechanics require wavefuntions to be in Hilbert space, which requires that the principle of superposition to be valid. Thus, the Schro¨dinger equation is linear. It is moreover second-order in the spatial coordinates. As a result, we will often encounter differential equations like

ψ′′(x) + p1(x)ψ′(x) + p0(x)ψ(x) = 0.

(1)

Note that p1 and p2 are not necessarily “nice” (analytic) functions, but may have poles not only in all but the simplest 1-D problems with specific potentials, but also in using a separation of variables to solve familiar 3-D problems like the hydriogen atom or even just a spherical potential well. So we might

1

get nervous: (i) Do solutions exist at all, (ii) can they be found, or (iii) do we have to resort to numerical mathematics in all but a few special cases?
If p0, p1 are analytical functions, such equations can always be solved by the Frobenius method, i.e., with a power-series ansatz. But we need to study a more general class of differential equations. Specifically, p0(x) and p1(x) may be meromorphic functions of x (holomorphic except for a set of isolated points). We make an important distinction:
• A point a for which p0,1(a) are analytic is called an ordinary point.
• Singular points are where one or both of the p0,1 have a singularity.
– If at x = a, p1(x) has a pole up to order 1 and p0 has a pole of order up to 2, we call a a regular singular point. In this case, the growth of ψ is bounded by an algebraic function.
– All other cases are irregular singular points, where ψ(x) has higher growth rates.

Fortunately, we have a theorem that not only do solutions exist in a broad class of situations, but that they can even be found in terms of special functions: Every second-order linear ODE with up to three regular singular points can be transformed (by making a substitution) into the hypergeometric differential equation

d2ψ(z)

dψ(z)

z(1 − z)

+ [c − (a + b + 1)z]

− abψ(z) = 0,

(2)

dz2

dz

which has regular singular points at 0, 1, and ∞. It is solved by the hyper-

geometric function 2F1(a, b; c; z). If c ̸= 0, an independent solution is given by z1−c2F1(1 + a − c, 1 + b − c; 2 − c; z). Many other functions are essen-
tially special cases of the hypergeometric function, e.g., logarithms, powers,

radicals, Legendre functions, Jacobi polynomials, Chebyshev polynomials,

Gegenbauer polynomials, complete and incomplete beta functions, or the

complete elliptic integrals. See https://dlmf.nist.gov/15 for more.

In physics, we also encounter irregular singular points. If we merge two

of the regular singularities of the hypergeometric differential equation into

an irregular singularity, we obtain Kummer’s equation, which can be written

as

d2ψ(z)

dψ(z)

z

+ (b − z)

− aψ(z) = 0,

(3)

dz2

dz

2

which has a regular singular point at z = 0 and an irregular singular point at z = ∞. It is solved by the confluent hypergeometric function

M (a, b, z) = 1F1(a, b, z) = lim 2F1(a, b; b−1; z).

(4)

b→∞

A linearly independent solution also exists. Many functions are special cases

of the confluent hypergeometric function, such as the error function, the

Bessel functions, and its special cases the Airy, Kelvin, or Hankel functions.

See https://dlmf.nist.gov/13 for many properties of this function.

2 The Nikiforov-Uvarov (NU) Method

A student, I learned that the Schr¨odinger equation was impossible to solve

exactly, except in a few special cases. Here, however, is an extremely powerful

method to analytically solve the time-independent Schr¨odinger equation, but also the Dirac or Klein-Gordon equations.1 We assume that it has already

been transformed into

ψ′′(s)

+

τ˜(s) ψ′(s) σ(s)

+

σ˜(s) σ2(s) ψ(s)

=

0,

(5)

where σ(s) and σ˜(s) are second-degree (at most) polynomials in s and τ˜(s) is a first-degree polynomial. Our strategy will be to first split off a function y(s) which satisfies a hypergeometric differential equation, for which we will seek polynomial solutions. (This is because the solution being polynomial is a necessary condition for it being normalizable.) The polynomial solutions can then be found explicitly using a Rodrigues formula.

1. Show that, with ψ(s) = ϕ(s)y(s), the Schro¨dinger equation Eq. (??)

can be transformed into

y′′(s) + τ (s) y′(s) +

σ¯(s) y(s) = 0

(6)

σ(s)

σ2(s)

(notice the new symbol σ¯, not to be confused with σ˜), where

τ (s)

ϕ′(s) τ˜(s)

:= 2 + ,

(7)

σ(s)

ϕ(s) σ(s)

π(s)

ϕ′(s)

:=

.

(8)

σ(s)

ϕ(s)

1A. F. Nikiforov and V. B. Uvarov, Special Functions of Mathematical Physics (Birkh¨auser, Basel, 1988).

3

Derive an expression for σ¯ in which ϕ(s) and its derivatives are eliminated in favor of π(s) and σ(s) and their derivatives. The result is

σ¯(s) = σ˜(s) + π2(s) + π(s)[τ˜(s) − σ′(s)] + π′(s)σ(s).

(9)

Furthermore, show that

1

π(s) = [τ (s) − τ˜(s)]

(10)

2

and that it is a first-degree polynomial in s.

2. If we impose the condition σ¯(s) = λσ(s), where λ is a constant, Eq. (6) has the from of a hypergeometric differential equation,

σ(s)y′′(s) + τ (s)y′(s) + λy(s) = 0,

(11)

with the coefficient of y(s) being independent of s. Use Eq. (9) to show that

σ′(s) − τ˜(s) (σ′(s) − τ˜(s))2

π(s) =

±

− σ˜(s) + kσ(s), (12)

2

4

where k = λ − π′(s) is a constant (why?). Since π(s) is a first-degree polynomial in s (why?), the expression under the square-root must be the square of a polynomial in s. This condition will allow us to determine k and thus λ.

With n = 0, 1, 2, . . ., Eq. (11) is solved by a Rodrigues formula

yn(s)

=

Bn dn [σn(s)ρ(s)], ρ(s) dsn

(13)

where the Bn are normalization constants, the weighing function ρ(s) is a solution to the differential equation

dσ(s)ρ(s)

= τ (s)ρ(s),

(14)

ds

and

λn

=

−nτ ′(s)

−

n(n − 2

1) σ′′(s).

(15)

In the next section/problem, we will apply this method in a simple case.

4

3 Woods-Saxon potential (Homework)

This is a 3-D spherical well with soft edges, which is widely used as a model potential in nuclear physics, e.g., to explain “magic numbers” in the nuclear shell model or in scattering problems. It is given by

V (r)

=

−V0 1 + e(r−R)/a

=

1

−V0 + qe2αr

,

(16)

where R specifies the radius of the well and a the softness of the edges. The second form arises with suitably chosen q and α. For small a ≪ R, the potential is nearly constant near the center (so nucleons there experience little forces), but has a steep gradient near r = R. It rapidly approaches zero as r − R ≫ a, reflecting the short-distance nature of the strong nuclear force.
Performing a separation of variables ψ(r, θ, ϕ) = R(r)Ylm(θ, ϕ) With R(r) = u(r)/r and assuming zero angular momentum l = 0, we obtain a radial equation

u′′(r)

+

2m h¯ 2

E

+

1

V0 + qe2αr

u(r) = 0.

(17)

We use the notation

β2

=

mV02 2h¯ 2 α2

>

0,

mE ϵ = − 2h¯2α2 > 0.

(18)

To get rid of the exponential function in V (r), we substitute

s = −e2αr.

1. Using the substitution, derive a differential equation of the form Eq. (6), and determine the functions τ¯(s), σ(s), and σ˜(s).

2. Calculate π(s) and determine two solutions k± (and thus λ) so that π(s) is a polynomial in s. Given these k, determine the four possible π(s).

3. Equating the value of λ just determined with λn from Eq. (15), find an expression for the enrgy eigenvalues En and simplify it. Make sure to pick the solutions where −V0 < En < 0.

5

4. Solve Eq. (14) to determine ρ(s) and subsitute it into Rodrigues relation, Eq. (13), to determine the yn(s).
5. Substitute π(s) and σ(s) into Eq. (8) and solve the resulting differential equation to determine the remaining part of the wave function, ϕ(s).

4 Morse potential

The Morse potential

U (x) = A(e−2αx − 2e−αx)

(19)

is a model for molecular binding. To compute the energy levels and eigen-

functions of bound states, we introduce a new variable ξ > 0, where

√

2 ξ=

2mA e−αx

(20)

αh¯

Also denote

√

√

−2mE

2mA

1

s=

, n=

− s+ .

(21)

αh¯

αh¯

2

1. Show that the Schro¨dinger equation now reads

ψ′′(ξ) + 1 ψ′(ξ) +

n + s + 1/2 1 s2 −−

ψ(ξ) = 0.

(22)

ξ

ξ

4 ξ2

2. Determine the asymptotic behavior f (ξ) of ψ for ξ → ∞ and the asymptotic behavior g(ξ) of ψ for ξ → 0.

3. Write the wavefunction as ψ(ξ) = f (ξ)g(ξ)w(ξ) and show that w sat-

isfies

ξw′′ + (2s + 1 − ξ)w′ + nw = 0.

(23)

General solutions to this equation are given by the so-called confluent hypergeometric function. But most of them do not represent physical states. Why?

4. Show from Eq. (23) that for non-negative, integer n, the solution for w is given by a polynomial and therefore satisfies the previous requirements. What are the energy levels? What is the largest allowed n?

5. Draw a schematic showing the potential as function of x and the energy levels. How does the spacing between energy levels change as the energy approaches zero?

6

5 P¨oschl-Teller potential (reading)

This potential is a good model for particles trapped in an optical dipole trap.

It is given by

V

(x)

=

−

h¯ 2 2m

α2

l(l + 1) cosh2(αx)

(24)

with l > 1 (not necessarily an integer). The Schro¨dinger equation reads

∂2 ψ(x) +
∂x2

−k2

+

α2

l(l + 1) cosh2(αx)

ψ(x) = 0,

k2

:=

2mE − h¯2

.

Bound states have E < 0 and k2 > 0. We substitute

u = tanh αx,

(25)

and thus du/dx = α(1 − u2) and 1/[cosh2 αx] = 1 − u2, which transforms the Schro¨dinger equation into

(1 − u2)ψ′′(u) − 2uψ′(u) + l(l + 1) −

k2

ψ(u) = 0.

(26)

α2(1 − u2)

This is solved by associated Legendre functions, ψ(u) = c1Plµ(u) + c2Qµl (u) with µ2 = k2/α2. By restricting ourselves to integer l, we can work with the Plµ only. To determine the energy eigenvalues, we must seek normalizable
solutions, which requires the solutions to Eq. (26) vanish for u → ±1. For integer l, this is the case for the Plµ with integer µ > 0. This is equivalent to
saying that µ = l − n, with n = 0, 1, 2, . . ., n < l. The energy eigenvalues are

En

=

h¯ 2 α2 −
2m

(l

−

n)2.

(27)

We may now normalize the wave function ψ(x) = APlµ(tanh αx) by computing

|A|2

∞ [Plµ(tanh(αx))]2dx
−∞

=

1 α

1 [Plµ(u)]2
−1

1

du − u2

=

|A|2 α

(l + µ)! µ(l − µ)!

(28)

so

ψn(x) =

α(l − n)n! (2l − n)!

Pll−n[tanh(αx)].

(29)

7

5.1 Expectation values (h¯ = m = 1)

From symmetry, ⟨x⟩ = ⟨p⟩ = 0. We can find

⟨V ⟩

=

α(l − n)n! (2l − n)!

1
[Pll−n
−1

(u)]2(−

α2l(l + 2

1)

)(1

−

u2)

du α(1 −

u2)

=

α2(l − n)n!l(l + 1) −
2(2l − n)!

1
[Pll−n(u)]2du
−1

α2(l − n)n!l(l + 1) 2(2l − n)! =−
2(2l − n)! (2l + 1)n!

= −α2 l(l − n)(l + 1)

(30)

2l + 1

To find ⟨p2⟩, we write the Schro¨dinger equation in the form

⟨n|p2|n⟩ + 2⟨n|[V (x) − E]|n⟩ = 0

⟨p2⟩ = α2 (l − n)(l + n + 2ln)

(31)

2l + 1

8

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:19:05.725Z
- **Text Length:** 11532 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
