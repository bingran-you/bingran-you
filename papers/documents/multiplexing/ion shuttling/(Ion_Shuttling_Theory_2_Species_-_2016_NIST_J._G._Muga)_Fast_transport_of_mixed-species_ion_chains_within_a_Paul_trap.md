# PDF Document: (Ion Shuttling Theory 2 Species - 2016 NIST J. G. Muga) Fast transport of mixed-species ion chains within a Paul trap.pdf

**File Path:** (Ion Shuttling Theory 2 Species - 2016 NIST J. G. Muga) Fast transport of mixed-species ion chains within a Paul trap.pdf

**Processed Date:** 2026-02-10T18:17:43.464Z

**File Size:** 219.54 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 685

**Title:** (Ion Shuttling Theory 2 Species - 2016 NIST J. G. Muga) Fast transport of mixed-species ion chains within a Paul trap

**Collection:** Multiplexing > Ion Shuttling

---

## Extracted Text Content

Fast transport of mixed-species ion chains within a Paul trap
M. Palmero1, R. Bowler2, J. P. Gaebler2, D. Leibfried2, and J. G. Muga1,3 1Departamento de Qu´ımica F´ısica, Universidad del Pa´ıs Vasco - Euskal Herriko Unibertsitatea, Apdo. 644, Bilbao, Spain
2National Institute of Standards and Technology, 325 Broadway, Boulder, Colorado 80305 and 3Department of Physics, Shanghai University, 200444 Shanghai, People’s Republic of China
We investigate the dynamics of mixed-species ion crystals during transport between spatially distinct locations in a linear Paul trap in the diabatic regime. In a general mixed-species crystal, all degrees of freedom along the direction of transport are excited by an accelerating well, so unlike the case of same-species ions, where only the center-of-mass-mode is excited, several degrees of freedom have to be simultaneously controlled by the transport protocol. We design protocols that lead to low-
 ﬁnal excitations in the diabatic regime using invariant-based inverse-engineering for two diﬀerent-species ions and also show how to extend this approach to longer mixed-species ion strings. Fast transport of mixed-species ion strings can signiﬁcantly reduce the operation time in certain architectures for scalable quantum information processing with trapped ions.
PACS numbers: 03.67.Lx, 37.10.Ty

arXiv:1406.7455v3 [quant-ph] 2 Aug 2016

I. INTRODUCTION
One possible route to scale quantum information processing based on trapped ions [1] incorporates the transport of small strings of ions between storing and processing sites [2, 3]. In a recent experimental demonstration of this approach [4], transport and subsequent sympathetic recooling of ion chains to near the ground state of motion have been among the most time consuming building blocks. Excitations might be avoided by adiabatically moving the ions, at the price of large transport duration an-
d higher susceptibility to ion heating from ambient noise ﬁelds [5, 6]. In principle, it is permissible to excite the motion of the ions during transport, as long as all excitations are removed at the end of the transport [7]. As we will show below, this general approach may lead to transport durations that are much shorter than what would be possible in an adiabatic approach. Previous work concentrated on transport of one particle, cold neutral atom clouds, two ions, or ion clouds [6–20]. Here, w-
e study the transport of mixed-species ion chains with initial and ﬁnal excitations of the motion close to the ground state. The use of two diﬀerent ion species allows for sympathetic cooling of the ion motion of one species without disturbing the quantum information held by the other species [4]. Another building block utilized in [4, 21] required transport of a four-ion crystal, where two ions carry the qubit information and the other two are used to cool the coupled motion of the crystal. We ﬁr-
st study the transport of two diﬀerent mass ions, and design protocols to transport them over a distance of 370 µm in durations signiﬃcantly smaller than 100 µs leaving them in a low energy state of motion. Our approach employs invariant based inverse engineering of shortcuts to adiabaticity [12, 18]. We then extend these techniques to longer ion chains, and speciﬁcally a four-ion chain. We limit the study of 2- and 4-ion chains since they are enough to perform one- and two-qubit gates and therefo-
re to build a universal set of gates while avoiding the problems inherent to longer chains.

II. INVARIANT-BASED INVERSE ENGINEERING

The invariant-based inverse-engineering method has proved useful for single-particle transport [12, 13, 15], and for several equal mass ions [18]. For one particle of mass m in 1D the Hamiltonians that belong to the “Lewis-Leach family” [22] may be written in terms of a potential U that moves along α(t), and a force F as

H

=

p2 2m

−F

(t)q

+

1 2

mω2(t)q2

+

1 ρ2(t)

U

q − α(t) ρ(t)

, (1)

where p is the momentum, ρ is a scaling length parameter, and ω an angular frequency. This H has the following dynamical invariant

I

=

1 2

m[ρ(p

−

mα˙ )

−

mρ˙(q

−

α)]2

+

1 2

mω02

q−α ρ

2
+U

q−α ρ

,

(2)

provided the functions ρ, α, F and ω satisfy the auxiliary equations

ρ¨ +

ω2(t)ρ

=

ω02 ρ3

,

(3)

α¨

+ ω2(t)α

=

F (t) m

.

(4)

For the simple case in which the potential is purely harmonic with constant angular frequency ω(t) = ω0 we have U = 0, F (t) = mω02Q0(t), where Q0(t) is the trap trajectory; α(t) becomes a classical trajectory satisfying a Newton’s equation for the moving trap, and the scaling length parameter is ρ = 1, therefore the auxiliary equation (3) is trivially satisﬁed. The inverse engineering strategy imposes boundary conditions for α at the boundary times tb = {0, tf }, where the transport starts at t =-
 0 and ends at t = tf . With α(0) = α˙ (tb) = 0, and α(tf ) = d, the static asymptotic Hamiltonians (H(t ≤ 0)

and H(t ≥ tf )) and the invariant commute at the initial and ﬁnal times. In this manner, the eigenstates of the initial trap are transported (mapped) via the dynamical modes of the invariant up to the eigenstates of the ﬁnal trap. In addition, α¨(tb) = 0 is usually imposed to provide a continuous trap trajectory at the boundary times. Then α(t) is interpolated and, by substituting α(t) into Eq. (4), we may solve for the trap trajectory Q0(t). In general the evolution is diabatic, with transient ex-
citations but no ﬁnal excitation by construction.

III. DYNAMICAL NORMAL-MODE COORDINATES

Our goal is to transport a chain of ions with diﬀerent mass between two sites separated by a distance d in a time tf without ﬁnal motional excitation. We assume tight radial conﬁnement so that the transport dynamics of each ion is eﬀectively one-dimensional, and also that the external trap potential is harmonic. We label the ions as i = 1, 2, ..., N . They have position coordinates q1, q2, ..., qN and masses m1, m2, ...mN . With the position of the minimum of the external potential Q0 = Q0(t), the-
 Hamiltonian is

H

=

N i=1

p2i 2mi

+

N i=1

1 2

u0

(qi

−

Q0)2

N −1 N
+
i=1 j=i+1

qi

Cc −

qj

,

(5)

where u0 is the spring constant of the external trap, and

Cc =

e2 4πǫ0

,

with

ǫ0

the

vacuum

permittivity.

For later

use We

let us also deﬁne the assume that all ions

potential have the

V ≡H−

N i=1

same charge e,

2apmn2i id.

that their locations obey q1 > q2 > · · · > qN , with negligible overlap of probability densities due to the strong

Coulomb repulsion. For equal masses [18], the dynamics

for the center of mass and relative motion are uncoupled.

The motion of the trap only aﬀects the center of mass,

whose dynamics is governed by a Lewis-Leach Hamilto-

nian (1), so that transport without ﬁnal excitation may

be designed as described for a single particle. However,

for ions with diﬀerent masses, center of mass and relative

motions are coupled. To cope with this coupling we apply

a dynamical normal mode approach that approximately

separates the Hamiltonian into a sum of independent har-

monic oscillators. The equilibrium positions {qi(0)}, are found by solving the system {∂V /∂qi = 0} for all ions. For N = 2 the equilibrium positions are

q1(0) = Q0 + x0/2, q2(0) = Q0 − x0/2,

(6)

where

x0 = 2

Cc 4u0

1/3
.

(7)

2

Diagonalizing Vij

=

, we √m1imj

∂2V ∂ qi ∂ qj

{qi,qj }={qi(0) ,qj(0) }

get the eigenvalues

λ± = ω12

1

+

1 µ

±

1

−

1 µ

+

1 µ2

,

(8)

where ω1 = (u0/m1)1/2, and µ = m2/m1, with µ ≥ 1. These eigenvalues are related to the normal-mode angu-
lar frequencies by

Ω± = λ±.

(9)

The eigenvectors are v± =

a± b±

, where



1/2

a+

=

 

1

 2

,

1+

1

−

1 µ

−

1

−

1 µ

+

1 µ2

µ

b+ =

1

−

1 µ

−

1

−

1 µ

+

1 µ2

√µa+,



1/2

a−

=

 

1

 2

,

1+

1

−

1 µ

+

1

−

1 µ

+

1 µ2

µ

b− =

1

−

1 µ

+

1

−

1 µ

+

1 µ2

√µa−.

(10)

Thus, the mass-weighted, dynamical, normal-mode coordinates are

q+ = a+√m1 q− = a−√m1

q1

−Q0

−

x0 2

q1

−

Q0

−

x0 2

+ b+ √µm1 + b− √µm1

q2

−

Q0

+

x0 2

,

q2

−

Q0

+

x0 2

,

(11)

and the inverse transformations are

q1

=

1 √m1

(b−q+

−

b+q−)

+

Q0

+

x0 2

,

q2

=

1 √µm1

(−a−q+

+

a+q−)

+

Q0

−

x0 2

.

(12)

Unlike the usual treatments for static traps [23], we have to consider explicitly the time dependence of the parameter Q0(t) when writing down the Hamiltonian in the new coordinates. We apply the change-of-variables unitary operator

U = dq+dq−dq1dq2|q+, q− q+, q−|q1, q2 q1, q2|, (13)
where the transformation matrix is
q+, q−|q1, q2 = δ[q1 − q1(q+, q−)]δ[q2 − q2(q+, q−)].
The Hamiltonian in the new frame is H′ = U HU † − i U (∂tU †), and the wavefunction |ψ′ = U |ψ . For the

3

part U HU † we substitute the deﬁnitions (12) in the
Hamiltonian (5) for N = 2. For the non-inertial term, −i U (∂tU †), we apply the chain rule in Eq. (12) and Eq. (11). Keeping only terms up to the harmonic approxi-
mation,

UHU†

=

p2+ 2

+

1 2

Ω2+q2+

+

p2− 2

+

1 2

Ω2−

q2−

,

−i U (∂tU †) = −P0+p+ − P0−p−,

(14)

where p± are momenta conjugate to q±, and

P0± = Q˙ 0(√m1a± + √µm1b±).

(15)

The linear-in-momentum terms are cumbersome for a nu-

merical or analytical treatment, so we apply a further

transformation to the frame moving with the center of the

trap and remove them formally [24]. The wave function is

transformed as |ψ′′ = U|ψ′ , whereas the corresponding

Hamiltonian takes the form H′′ = U H′U † + i (∂tU )U †.

We

choose

U

=

e−i(P0+

q+

+P0−

q
−

)/

to shift the momenta,

so that, each mode Hamiltonian in

H ′′

=

p2+ 2

+

1 2

Ω2+

q+

+

P˙0+ Ω2+

2

+

p2− 2

+

1 2

Ω2−

q−

+

P˙0− Ω2−

2

(16)

belongs to the Lewis-Leach family.

IV. INVERSE ENGINEERING FOR TWO MODES

The invariants corresponding to the Hamiltonians in
Eq. (16) are known and the trajectory can be designed to avoid excitations. We also impose Q˙ 0(tb)(0) = 0 so that |ψ′′(0) = |ψ′(0) and |ψ′′(tf ) = |ψ′(tf ) . Primed and double-primed wave functions are related to each other
by the unitary transformation in such a way that their
initial and ﬁnal states coincide. The auxiliary equations
analogous to Eq. (4) for the modes in Eq. (16) are

α¨± + Ω2±α± = −P˙0±,

(17)

where the α± are the centers of invariant-mode wavefunctions in the doubly-primed space [12]. Now, we can
design these α± functions to get unexcited modes after the transport, and from them inverse engineer P˙0±. We set the boundary conditions

α±(tb) = α˙ ±(tb) = α¨±(tb) = 0.

(18)

Substituting these conditions into Eq. (17), we ﬁnd

Q¨0(tb) = 0 for both modes. To satisfy all the conditions

in Eq. (17), we try a polynomial ansatz Q0(t; {an}) =

9 n=0

antn.

We ﬁx a0−5 as functions of a6−9 so that

5

4

Eex h MHz

3

2

1

0

3

4

5

6

tf s

FIG. 1: (Color online) Motional excitation quanta vs. transport duration tf for the two ions, transported over d = 370 µm using the exact Hamiltonian. The external potential minimum moves according to the nonic polynomial Q0(t; {an}) set to satisfy Eq. (17) (green dots); the polynomial ansatz trajectory Q0(t; {bn}), Eq. (20), (blue-solid line); and the cosine ansatz trajectory Q0(t; {cn}), Eq. (21), (red-dashed line). The excitation for the nonic polynomial trajectory Q0(t; {an}) using the uncoupl-
ed Hamiltonian (16) is also shown (black symbols). The parameters used are ω1/(2π) = 2 MHz, masses of 9Be+ for the ﬁrst ion and 24Mg+ for the second. Both ions are initially in the motional ground state.

Q0(0) = 0, Q0(tf ) = d, Q˙ 0(tb) = Q¨0(tb) = 0. We then select the solutions α± in Eq. (17) that satisfy α±(tb) = 0, which implies α¨±(tb) = 0, since P˙0,±(tb) = 0 in Eq. (17). The four parameters a6−9 are calculated numerically for each tf by solving the system of four equations α˙ ±(tb) = 0. Fig. 1 shows that, for the approximate Hamiltonian with two uncoupled modes, the ﬁnal exci-
tation vanishes (see the black-symbols horizontal line). However, the higher order terms in the actual Hamiltonian modify and couple the modes, exciting the system
at short transport times (green dots in Fig. 1). The approach we have just described requires a numerical eval-
uation of the coeﬃcients to ﬁnd Q0(t; {an(tf )}) for each tf . Therefore, we considered a diﬀerent approximation that yields an analytical solution Q0(t) with Q0(0) = 0, Q0(tf ) = d, Q˙ 0(tb) = Q¨0(tb) = 0. The resulting Q0(t) leads to a similar level of ﬁnal excitation when inserted into the full Hamiltonian as the more accurate approach.
We ﬁrst rewrite the Hamiltonian (5) in the center of mass, Q = (m1/M )q1 + (m2/M )q2, and relative, r = q1 − q2, coordinates, with M = m1 + m2,

H

=

P2 2M

+

1 2

M

ω2

(Q

−

Q0

)2

+

p2 2mr

+

1 2

mr

ωr2r2

+

Cc r

+

m2

− 2

m1

ω2(Q

−

Q0)r,

(19)

where mr = m1m2/M , ω2 = 2u0/M , ωr2 = (m21 + m22)/(2m1m2)ω2, and P is the total momentum. Ne-

Q0 d Q0 d
Eex h MHz

1 a)

1 b)

0.75

0.75

0.5

0.5

0.25

0.25

0 0 0.2 0.4 0.6 0.8 1
t tf

0 0 0.2 0.4 0.6 0.8 1
t tf

FIG. 2: (Color online) Trap trajectories given by Q0(t; {an})
(black-dashed line), Eq. (20) (blue-solid line), and Eq. (21)
(red-dashed line) for diﬀerent ﬁnal times. a) tf = 2π/ω1; b) tf = 10 × 2π/ω1. ω1/(2π) = 2 MHz, masses of 9Be+ for the ﬁrst ion and 24Mg+ for the second, d = 370 µm.

glecting the coupling term in (19), we can construct

trap trajectories that leave the center of mass unexcited.

Rewriting α = Qc, we ﬁrst design Qc and then obtain Q0 from Eq. (4). The four boundary conditions Q˙ 0(tb) = Q¨0(tb) = 0 are consistent with Q(c3)(tb) = Q(c4)(tb) = 0

along with the conditions Qc(0) = 0, Qc(tf ) = d,

Q˙ c(tb) = Q¨c(tb) = 0. We assume a polynomial ansatz

Qc(t) = d

9 n=0

bnsn

that

satisﬁes

all

conditions

and

ob-

tain Q0(t) from Eq. (4),

Q0(t)

=

d t2f ω2

9
bnn(n
n=0

− 1)sn−2

9
+ d bnsn,
n=0

(20)

where s

=

t/tf and {b0, ..., b9}

=

{0, 0, 0, 0, 0, 126, −420, 540, −315, 70} for all values of tf .

An alternative ansatz with a sum of Fourier-cosines also

leads to analytical expressions,

Qc(t)

=

d 256

3
c0 + cn cos
n=1

(2n − 1)πt tf

,

Q0(t) =

dπ2 256ω2t2f

3
−cn(2n − 1)2 cos
i=1

(2n − 1)πt tf

+

d 256

3
c0 + cn cos
n=1

(2n − 1)πt tf

,

(21)

where {c0, ..., c3} = {128, −150, 25, −3}. The resulting trap trajectories (20), (21) are simple and explicit and lead to small excitations in a similar range of parameters as the approach based on normal-modes. Some example trajectories for diﬀerent transport durations are shown in Fig. 2.

V. FOUR AND N IONS

We extend now the normal-mode approach to N -ion chains, with dynamical normal mode coordinates

qν = N aνj √mj (qj − δj(0) − Q0),
j=1

(22)

4

5

4

3

2

1

0

3

4

5

6

t f Μs

FIG. 3: (Color online) Final excitation energy for a BeMg-Mg-Be chain transported over d = 370 µm using the external potential minimum trajectory in Eq. (16) with
ω = 4u0/M (blue solid line) and with ω = 0.983 4u0/M (red dashed line). The calculation is based on classical equations of motion with the ions at rest in their equilibrium positions at t = 0.

and corresponding momenta pν , where the equilibrium points with respect to the trap center, δj(0), are in general found numerically. Generalizing Eq. (16) to N ions we
ﬁnd the uncoupled normal-mode Hamiltonian

H′′ =

N

p2ν 2

+

N

1 2

Ω2ν

ν=1

ν=1

qν

+

P˙0ν Ω2ν

2
,

(23)

where P0ν = Q˙ 0 j aνjm1j/2, and Ων is the angular frequency of the ν-th normal mode. The auxiliary equations that have to be satisﬁed for all ν simultaneously are

α¨ν + Ω2ν αν = −P˙0ν .

(24)

Further imposing, in analogy to Eq. (17), αν(tb) = α˙ ν(tb) = α¨ν (tb) = 0 implies Q˙ 0(tb) = Q¨0(tb) = 0, exactly as for N = 2. Thus we may construct approximate trap trajectories that are in fact identical in form to the ones for N = 2 in Eqs. (20) or (21), but with
ω = N u0/M . We ﬁnd that the ﬁnal excitations for a four-ion Be-Mg-Mg-Be chain (see blue solid line in Fig. 3), are very similar to those for Be-Mg shown in Fig. 1. We can improve the results even further by treating ω as a variational free parameter. The red dashed line in Fig. 3 shows the ﬁnal excitation for ω = 0.983 4u0/M . The calculations for the 4-ion chain are performed with classical trajectories for the ions, initially at rest in their equilibrium positions. The corresponding quantum cal-
culation is very demanding, but it is not expected to deviate signiﬁcantly from the classical result [18] in the nearly harmonic regime considered here. For transporting longer ion chains longer ﬁnal times will be needed, as more non-harmonic terms and couplings terms would be neglected in the normal-mode approximation.

5

Eex h Eex

2400

a) 5

b)

2000

4

1600

3

1200

800

2

400

1

0 95

96

97

98

99 100 0 3

4

5

6

7

8

9

t f Μs

t f Μs

FIG. 4: (Color online) Excitation energy vs. ﬁnal time for a) a linear-in-time transport of two ions, Q0(t) = td/tf and b) the trap trajectory designed in Eq. (20), (blue-solid line) and an “error function” trap trajectory, Eq. (25) (black-dashed). We ﬁnd optimal results for σ = 10−6s. Other parameters as in Fig. 1.

VI. DISCUSSION
The approximate approaches we have implemented to transport ions of diﬀerent mass without ﬁnal excitation may be compared with other approaches: the “compensating force approach” [12, 14], the transport based on a linear-in-time displacement of the trap or a more reﬁned error-function trajectory [25].
Let us ﬁrst discuss the “compensating force approach” [12, 14]. The idea behind is that the acceleration of the trap induces in the trap frame a non-inertial Hamiltonian term M QQ¨0(t), M being the total mass of the ion chain and Q the center of mass coordinate, that may be exactly compensated by applying a time-dependent term Hcom = −M QQ¨0(t). This has been discussed for N -equal masses [18, 26, 27] but the result holds for an arbitrary collection of masses in an arbitrary external potential und-
er rigid transport by noticing that the total potential must be of the form V (Q − Q0; {rj}), where {rj} represents a set of relative coordinates. The decomposition of Hcom into terms for each ion, Hcom = − i miqiQ¨0, implies that ions of diﬀerent mass should be subjected to diﬀerent forces. However the available technology in linear Paul traps provides forces proportional to the charge (equal for all equally-charged ions), so the compensation is a formal result without a feasible experimental cou-
nterpart.
As for the linear displacement of the trap, Q0(t) = td/tf in [0, t], and at rest otherwise, we have performed numerical calculations of the ﬁnal excitation energy for diﬀerent values of tf and the two ions considered in Sec. III. The excitation oscillates rapidly, see Fig. 4 (a), and the upper envelope reaches 0.1 vibrational quanta of ion 1 for times as large as 9.5 ms. The ﬁrst excitation minimum

with signiﬁcant excitation reduction is around 99 µs, see Fig. 4 (a). Excitation minima occur for each mode ν as zeroes of the Fourier transform of Q˙0 at Ων [9, 16, 25]. For a linear-in-time trap displacement this occurs every
mode period. 99 µs is a time when the transform of both modes vanishes. This excitation minimum, however, is
very unstable with respect to small timing errors. In any case it is about twenty times larger than the times
achieved in Sec. III). Finally, we compare the performance of our protocol in
Eq. (20) with an error-function trajectory [25]. Imposing a Gaussian form on the velocity Q˙ 0 gives

Q0(t)

=

−

d 2

erf erf

−2√t+tf 2 2σ √tf

2 2σ

+

d 2

,

(25)

where σ is the width of the Gaussian. In Fig. 4 (b) we optimize σ and compare the excitation for this trajectory with the one in Eq. (20). The error-function trajectory is clearly a good design, but still, the protocol developed in this paper outperforms it by a factor of two.
In summary, we have described protocols for diabatic transport of mixed-species chains of ions that displace the minimum of a harmonic external potential along prescribed trajectories. Our protocols should allow for diabatic transport over distances and durations that are relevant for quantum information processing with minimal ﬁnal excitation of the ion crystals. In past experiments on scalable quantum information processing, adiabatic transport of mixed-species ion chains has been one of the mos-
t time consuming processes [4], therefore the approaches described might lead to considerable practical improvements. Our work may be extended in several directions, e.g., to include noise, parameter drifts [6, 20] and anharmonicities [8, 13, 18], or to optimize the trap trajectories according to diﬀerent criteria [13].

Acknowledgments
We acknowledge funding by Basque Country Government (Grant No. IT472-10, Ministerio de Econom´ıa y Competitividad (Grant No. FIS2012-36673-C03-01), and the program UFI 11/55. M. P. acknowledges a fellowship by UPV/EHU. R. B., J. P. G. and D. L. are supported by IARPA under ARO Contract No. DNI-017389, ONR, and the NIST Quantum Information program.

[1] J. I. Cirac and P. Zoller, Phys. Rev. Lett. 74, 4091 (1995). [2] D. J. Wineland, C. Monroe, W. M. Itano, D. Leibfried,
B. E. King, and D. M. Meekhof, J. Res. NIST 103, 259 (1998). [3] D. Kielpinski, C. Monroe, and D. J. Wineland, Nature (London) 417, 709 (2002).

[4] J. P. Home, D. Hanneke, J. D. Jost, J. M. Amini, D. Leibfried, and D. J. Wineland, Science 325, 1227 (2009).
[5] R. B. Blakestad, C. Ospelkaus, A. P. VanDevender, J. M. Amini, J. Britton, D. Leibfried, and D. J. Wineland, Phys. Rev. Lett. 102, 153002 (2009).
[6] X.-J. Lu, J. G. Muga, X. Chen, U. G. Poschinger, F.

6

Schmidt-Kaler, and A. Ruschhaupt, Phys. Rev. A 89, 063414 (2014). [7] E. Torrontegui, S. Iba´n˜ez, S. Mart´ınez-Garaot, M. Modugno, A. del Campo, D. Gu´ery-Odelin, A. Ruschhaupt, X. Chen, and J. G. Muga, Adv. At. Mol. Opt. Phys. 62, 117 (2013). [8] S. Schulz, U. Poschinger, K. Singer, and F. SchmidtKaler, Fortschr. Phys. 54, 648 (2006). [9] A. Couvert, T. Kawalec, G. Reinaudi, and D. Gu´eryOdelin, Europhys. Lett. 83, 13001 (2008). [10] G. Huber, T. Deuschle, W. Schnitzler, R. Reichle, K. Singer, a-
nd F. Schmidt-Kaler, New J. Phys. 10, 013004 (2008). [11] M. Murphy, L. Jiang, N. Khaneja, and T. Calarco, Phys. Rev. A 79, 020301(R) (2009). [12] E . Torrontegui, S. Iba´n˜ez, X. Chen, A. Ruschhaupt, D. Gu´ery-Odelin, and J. G. Muga, Phys. Rev. A 83, 013415 (2011). [13] X. Chen, E. Torrontegui, D. Stefanatos, J.-S. Li, and J. G. Muga, Phys. Rev. A 84, 043415 (2011). [14] S. Masuda and K. Nakamura, Proc. R. Soc. A 466, 1135 (2010). [15] H. A. Fu¨rst, M. H. Goerz, U. G. Poschinger, M. Murphy, S. Mo-
ntangero, T. Calarco, F. Schmidt-Kaler, K. Singer, C. P. Koch, New J. Phys. 16, 075007 (2014). [16] R. Bowler, J. Gaebler, Y. Lin, T. R. Tan, D. Hanneke, J. D. Jost, J. P. Home, D. Leibfried, and D. J. Wineland,

Phys. Rev. Lett. 109, 080502 (2012). [17] A. Walther, F. Ziesel, T. Ruster, S. T. Dawkins, K.
Ott, M. Hettrich, K. Singer, F. Schmidt-Kaler, and U. Poschinger, Phys. Rev. Lett. 109, 080501 (2012). [18] M. Palmero, E. Torrontegui, D. Gu´ery-Odelin, and J. G. Muga, Phys. Rev. A 88, 053423 (2013). [19] J. Pedregosa-Gutierrez, C. Champenois, M. R. Kamsap, and M. Knoop, arXiv:1403.2568. [20] E. Torrontegui, X. Chen, M. Modugno, S. Schmidt, A. Ruschhaupt, and J. G. Muga, New J. Phys. 14, 013031 (2012). [21] D. Hanneke, J. P. Home, J. D. Jost, J. M. Amini, D. Leibfried, and D. J. Wineland, Nature-
 Physics 6, 13 (2010). [22] H. R. Lewis and P. G. Leach, J. Math. Phys. 23, 2371 (1982). [23] G. Morigi and H. Walther, Eur. Phys. J. D 13, 261 (2001). [24] S. Iba´n˜ez, X. Chen, E. Torrontegui, J. G. Muga, and A. Ruschhaupt, Phys. Rev. Lett. 109, 100403 (2012). [25] R. Reichle, D. Leibfried, R. B. Blakestad, J. Britton, J. D. Jost, E. Knill, C. Langer, R. Ozeri, S. Seidelin, and D. J. Wineland, Fortschr. Phys. 54, 666 (2006). [26] S. Masuda, Phys. Rev. A 86, 063624 (2012). [27] S. Deﬀner, C. Jarz-
ynski and A. del Campo, Phys. Rev. X 4, 021013 (2014).

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:43.464Z
- **Text Length:** 23880 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
