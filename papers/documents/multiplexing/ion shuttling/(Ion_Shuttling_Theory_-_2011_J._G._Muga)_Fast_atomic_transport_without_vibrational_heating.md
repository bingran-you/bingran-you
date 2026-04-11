# PDF Document: (Ion Shuttling Theory - 2011 J. G. Muga) Fast atomic transport without vibrational heating.pdf

**File Path:** (Ion Shuttling Theory - 2011 J. G. Muga) Fast atomic transport without vibrational heating.pdf

**Processed Date:** 2026-02-10T18:17:52.773Z

**File Size:** 349.35 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 686

**Title:** (Ion Shuttling Theory - 2011 J. G. Muga) Fast atomic transport without vibrational heating

**Collection:** Multiplexing > Ion Shuttling

---

## Extracted Text Content

PHYSICAL REVIEW A 83, 013415 (2011)

Fast atomic transport without vibrational heating

E. Torrontegui,1 S. Iba´n˜ez,1 Xi Chen,1,2 A. Ruschhaupt,3 D. Gue´ry-Odelin,4 and J. G. Muga1,4,5 1Departamento de Qu´ımica F´ısica, Universidad del Pa´ıs Vasco, Apartado 644, E-48080 Bilbao, Spain 2Department of Physics, Shanghai University, 200444 Shanghai, China
3Institut fu¨r Theoretische Physik, Leibniz Universita¨t Hannover, Appelstraβe 2, D-30167 Hannover, Germany 4Laboratoire Collisions Agre´gats Re´activite´, CNRS UMR 5589, IRSAMC, Universite´ Paul Sabatier, 118 Route de Narbonne,
F-31062 Toulouse CEDEX 4, France 5Max Planck Institute for the Physics of Complex Systems, No¨thnitzer Strasse 38, D-01187 Dresden, Germany
(Received 15 October 2010; published 31 January 2011)
We use the dynamical invariants associated with the Hamiltonian of an atom in a one dimensional moving trap to inverse engineer the trap motion and perform fast atomic transport without ﬁnal vibrational heating. The atom is driven nonadiabatically through a shortcut to the result of adiabatic, slow trap motion. For harmonic potentials this only requires designing appropriate trap trajectories, whereas perfect transport in anharmonic traps may be achieved by applying an extra ﬁeld to compensate the-
 forces in the rest frame of the trap. The results can be extended to atom stopping or launching. The limitations due to geometrical constraints, energies, and accelerations involved are analyzed along with the relation to previous approaches based on classical trajectories or “fast-forward” and “bang-bang” methods, which can be integrated in the invariant-based framework.

DOI: 10.1103/PhysRevA.83.013415

PACS number(s): 37.10.Gh, 03.65.Ca, 03.65.Nk

I. INTRODUCTION
A key element to attain an exhaustive control of states and dynamics of cold atoms and ions is their efﬁcient transport by moving the conﬁning trap. In spite of the broad span of conditions, heating mechanisms, transport distances from microns to tens of centimeters, transport times, and accelerations involved, there are some common elements and objectives that allow for a rather generic theoretical treatment as the one presented in this paper. Transport should ideally be lossless and fast and lea-
d to a ﬁnal state as close as possible (“faithful”) to the initial one, up to global phase factors, in the frame of the transporting trap. The latter requirement is characterized in the most demanding applications as a high-ﬁdelity condition or, more generally, as a no-heating or at least minimal heating condition; equivalently, it is characterized by the absence or minimization of vibrational excitations at the end of the transport. Note that reaching a faithful ﬁnal state is not incompatible wit-
h some transient excitation in the instantaneous basis at intermediate times, i.e., the process does not have to be slow or, in the usual quantum mechanical jargon, “adiabatic,” although slowness is certainly a simple way to avoid heating, at least under ideal conditions.
Efﬁcient atom transport is a major goal for many applications, such as quantum information processing in multiplexed trap arrays [1,2] or quantum registers [3]; controlled translation from the production or cooling chamber to interaction or manipulation zones [4–6]; accurate control of interaction times and locations, e.g., in cavity QED experiments [7], quantum gates [8], or metrology [9]; and velocity control to launch [10] or stop atoms [11,12].
Different approaches have been implemented. Neutral atoms have been transported as thermal atomic clouds [6,13], condensates [14], or individually [15,16], using magnetic or optical traps. The magnetic traps can be translated by moving the coils mechanically [5], by time-varying currents in a lithographic conductor pattern [17], or on a conveyor

belt with a chain of permanent magnets [18]. Optical traps can be used as optical tweezers whose focal point is translated by mechanically moving lenses [4,19] or by traveling lattices (conveyor belts) made with two counterpropagating beams slightly detuned with respect one another [15,16,20]. There are also mixed magneto-optical approaches [6]. For ions, controlled time-dependent voltages have been used in linear-trap-based frequency standards [9] and, more recently, in quantum information applic-
ations using multisegmented Paul traps [21], an array of Penning traps [22], and also 2D conﬁgurations [23].
As mentioned, an obvious solution, at least in principle, to avoid spilling or heating of the atoms is to perform a sufﬁciently slow (adiabatic) transport. For some applications, however, this takes too long. In particular, since transport could occupy most of the operation time of realistic quantum information algorithms, “shuttling times” need to be minimized [2,21]. In addition, long times may be counterproductive in practice and induce overheating from coils or ﬂuctuating ﬁelds and decoherence-
. In summary, there are good reasons to reduce the transport time, and, indeed, several theoretical and experimental works have studied ways to make fast transport also faithful [19,24–26].
Invariant-based inverse engineering is ideally suited to this end. The main aim of this paper is to set the basic invariant-based inverse engineering transport theory, analog to the one developed recently for trap expansions [27]. We shall also show that previous approaches for efﬁcient transport [24,25] and some generalizations are embraced by it and point out the potential limitations of the method. In Sec. II we shall provide the main concepts and formulas of the time-dependent quadratic-in-mom-
entum invariants relevant for transport problems. The two main reference cases are (i) rigid harmonic oscillator transport and (ii) transport on an arbitrary trap with force compensation. In Sec. III we explain and apply the inversion technique; this is compared in Sec. IV with an alternative “bang-bang” approach based

1050-2947/2011/83(1)/013415(9)

013415-1

©2011 American Physical Society

E. TORRONTEGUI et al.

PHYSICAL REVIEW A 83, 013415 (2011)

on time segments of constant acceleration. Section V deals with practical limitations, and Sec. VI discusses the results and draws the conclusions.

II. DYNAMICAL INVARIANTS

In a seminal paper Lewis and Riesenfeld derived a simple relation between the solutions of the Schro¨dinger equation of a system with time-dependent Hamiltonian and the eigenstates of the corresponding invariants [28]. They paid special attention to the time-dependent harmonic oscillator and its invariants quadratic in position and momentum, following earlier work by Ermakov on the classical oscillator [29]. From a classical physics point of view, Lewis and Leach found the general form of the Hami-
ltonian compatible with invariants quadratic in momentum [30], including nonharmonic potentials. This is the result that interests us here, together with the corresponding quantum formulations by Leach for the harmonic oscillator [31,32] and by Dhara and Lawande for taking anharmonicity into account [33]. In this section we shall state the main concepts and equations and apply them to standard transport problems.
A 1D Hamiltonian with an invariant that is quadratic in momentum must have the form H = p2/2m + V (q,t),1 with [30,33]

V (q,t) = −F (t)q + m ω2(t)q2 +

1 U

q − α(t) .

(1)

2

ρ (t )2

ρ (t )

ρ, α, ω, and F are arbitrary functions of time that satisfy the auxiliary equations

ρ¨ + ω2(t)ρ = ω02 ,

(2)

ρ3

α¨ + ω2(t)α = F (t)/m,

(3)

with ω0 being constant. Their physical interpretation in the context of transport is detailed below. The dynamical invariant, up to a constant factor, is given by

I = 1 [ρ(p − mα˙ ) − mρ˙(q − α)]2 2m

+

1 2

mω02

q−α ρ

2
+U

q −α ρ

(4)

and veriﬁes

dI ≡ ∂I (t) + 1 [I (t),H (t)] = 0,

(5)

dt ∂t ih¯

so

that

d dt

ψ(t)|I (t)|ψ(t)

= 0 for any wave function ψ(t) that

evolves with H . ψ(t) may be expanded in terms of constant

coefﬁcients cn and eigenvectors ψn of I ,

ψ(q,t) = cneiαn ψn(q,t),

(6)

n

I (t)ψn(q,t) = λnψn(q,t),

(7)

where the λn are time-independent eigenvalues. We shall generally deal with ψn normalized to 1, but continuum,

1Following the usual practice, q and p will denote operators or numbers, and the context should clarify their meaning.

delta-normalized states are also possible. The phases αn satisfy [28,33]

h¯ dαn = dt

ψn|ih¯

∂ ∂t

−

H |ψn

,

(8)

αn

=

−1 h¯

t
dt
0

λn + m(α˙ ρ − αρ˙)2 .

ρ2

2ρ2

(9)

The ψn are, in practice, obtained easily as [33]

ψn (q ,t )

=

e

im h¯

[ρ˙

q

2

/2ρ

+(α˙ ρ

−αρ˙

)q

/ρ]

1 ρ 1/2

φn

q −α ρ

(10)

=:σ

from the solutions φn(σ ), normalized in σ space, of the auxiliary stationary Schro¨dinger equation

h¯ 2 −
2m

∂2 ∂σ2

+

1 2

mω02σ

2

+

U (σ )

φn = λnφn.

(11)

Whereas trap expansions and contractions imply a timedependent ρ function [27], a large family of transport problems may be described by taking

ρ(t) = 1, ω2(t) = ω02

(12)

so that the auxiliary Eq. (2) plays no role and only Eq. (3) is relevant. Except in the ﬁnal discussion we shall assume that the conditions (12) hold from now on and consider in detail two main reference cases.
(i) Rigid harmonic oscillator driven by the “transport function” q0(t). Hereafter this case is referred to as “harmonic transport” for short. Suppose that a harmonic trap is moved from q0(0) at time t = 0 to d = q0(tf ) at a time tf . In Eq. (1) this case corresponds to

F = mω02q0(t), ω(t) = ω0, U = 0.

(13)

Adding to V the irrelevant time-dependent global term mω02q02/2, which produces no force, the trap potential can be written as a moving harmonic oscillator mω02[q − q0(t)]2/2,

H = p2/2m + mω02[q − q0(t)]2/2,

(14)

and α may be identiﬁed with a classical trajectory qc since Eq. (3) becomes

q¨c + ω02(qc − q0) = 0.

(15)

The invariants and transport modes will depend on it. In this case, λn = En = (n + 1/2)h¯ ω0, and the transport mode eiαn ψn
takes a physically transparent form,

eiαn ψn

=

e−

i h¯

[En

t

+

t 0

mq˙c2 2

dt

]eimq˙cq/h¯ φn(q

−

qc).

(16)

Efﬁcient transport will be engineered in Sec. III by designing
ﬁrst an appropriate classical trajectory qc(t), from which the trap motion trajectory q0(t) is deduced via Eq. (15).
A variant of this case is vertical transport with a gravity force, so that F = mω02q0 − mg and Eq. (15) is modiﬁed to

q¨c + ω02(qc − q0) = −g.

(17)

013415-2

FAST ATOMIC TRANSPORT WITHOUT VIBRATIONAL HEATING

PHYSICAL REVIEW A 83, 013415 (2011)

(ii) Arbitrary trap-driven transport with compensating force. Hereafter this case is referred to as the “compensatingforce approach” for short. Now, in Eq. (1),

ω = ω0 = 0,

(18)

F = mq¨0.

(19)

In this case the trap potential U [q − q0(t)] is arbitrary; in particular, it could be harmonic, and it is rigidly displaced
along q0(t), so α in Eq. (3) may be now identiﬁed with the transport function q0. In addition to U , there is a timedependent linear potential term −mqq¨0 in H ,

H = p2/2m − mqq¨0 + U (q − q0).

(20)

The corresponding force compensates exactly the inertial force due to the trap motion in the rest frame of the trap, so that the wave function in that frame is not modiﬁed up to a time-dependent global phase factor; see Appendix A. This Hamiltonian has been proposed by Masuda and Nakamura following a very different route, using a “fast-forward” scaling technique [25].

III. INVERSE ENGINEERING METHOD
The Lewis-Riesenfeld theory of invariants has been considered before in harmonic-oscillator-driven transport in the direct, rather than inverse, way by setting the transport function q0 and analyzing the ﬁnal heating, in particular, in adiabatic or quasiadiabatic regimes [2]. We shall use it instead as the basis for an inverse engineering approach, including also nonharmonic driving. The two main cases discussed above require different implementations. In both cases we shall assume that q0 is disp-
laced from 0 to d in a time tf .

A. Harmonic transport
In case (i) we may adopt, as in [27], an inverse engineering strategy by designing ﬁrst the classical trajectory qc to assure that the transport modes coincide with the eigenvectors of the instantaneous Hamiltonian at initial and ﬁnal times. This amounts to imposing the commutativity of I (t) and H (t) at t = 0 and t = tf , which can be achieved by setting [see Eq. (16)] the following boundary conditions:

qc(0) = q0(0) = 0; q˙c(0) = 0; q¨c(0) = 0,

(21)

qc(tf ) = q0(tf ) = d; q˙c(tf ) = 0; q¨c(tf ) = 0, (22)

with the last condition in these equations being determined

by consistency with Eq. (15). qc(t) is then interpolated by

assuming some ﬂexible functional form, such as a polynomial,

qc(t) =

5 n=0

βnt

n,

where

βn

are

found

by

solving

the

system

of equations established by the boundary conditions. The

resulting qc depends on time only trough the ratio s = t/tf and is directly proportional to d:

qc(t)/d = 10s3 − 15s4 + 6s5.

(23)

Once qc is ﬁxed, we get the trap trajectory from Eq. (15),

q0(t) = q¨c(t)/ω02 + qc(t).

(24)

qo d, qc d

1.5
1
0.5
0
0.5 0 0.2 0.4 0.6 0.8 1 s
FIG. 1. (Color online) Trap trajectories q0/d versus s = t/tf for tf = 12.57/ω0 = 2T0 (blue line with dots), tf = 2.505/ω0 (the critical value; red line with triangles), and tf = 2/ω0 (brown line with squares). For all three cases, qc/d is the dashed line, which is hardly distinguishable from q0/d for the slowest case, i.e., for tf = 12.57/ω0.

This procedure is equivalent to the one followed by Murphy et al. [24], who used a Fourier sum as an interpolating function for qc.
For short times tf (see Fig. 1), the corresponding trap trajectories q0(t) could exceed the interval [0,d]. For the polynomial ansatz (23) it occurs symmetrically at the lower and upper edges of the interval for tf 2.505/ω0 ≈ 0.4 T0, where T0 ≡ 2π/ω0 is the oscillation period. This may or may not be a problem depending on the geometrical constraints of the experimental setting.
An interesting generalization is to consider boundary conditions for stopping atoms when their initial average velocity is known. Suppose that an atom gun or pulsed valve sends atoms with a speciﬁc average velocity v0, as in coil-gun experiments with paramagnetic atoms [34,35] or a Stark decelerator for polar molecules [36–38]. The valve opening time is controlled, so a traveling harmonic trap wrapping the atoms can be turned on at time t = 0 and moved along some trajectory q0(t) to stop them at a-
 ﬁxed distance d in a speciﬁed time tf . The ﬁnal conditions may still be given by Eq. (22), but a different set of initial conditions is to be imposed:

qc(0) = 0, q˙c(0) = v0, q¨c(0) = 0.

(25)

In this case the nth initial transport mode at t = 0 does not coincide with the nth stationary eigenstate of H (0) but with its moving version, eimv0q/h¯ φn(q). ω0 is in principle arbitrary, but it may be optimized by taking into account the spatial width of the incoming state. Its value also has an impact on the domain of the trajectory, as we shall see. The polynomial ansatz now gives

qc(t) = d[3(2 − a)s5 − (15 − 8a)s4 − 2(−5 + 3a)s3 + as], (26)

q0(t) = d 3(2 − a)s5 − (15 − 8a)s4

+

60(2 − b2

a)

−

2(−5

+

3a)

s3

−

12

(15

− b2

8a)

s2

(−5 + 3a)

+ − 12

+a s ,

(27)

b2

013415-3

E. TORRONTEGUI et al.

PHYSICAL REVIEW A 83, 013415 (2011)

qo d , qc d

1 0.5
0 0.5
0 0.2 0.4 0.6 0.8 1 s

FIG. 2. (Color online) Three stopping trajectories: a = 0.8, b = ω0tf = 1.6, and tf /T0 = 0.25 (brown line with squares); b = ω0tf = 1.9 and tf /T0 = 0.30 (red line with triangles); and b = ω0tf = 3.0 and tf /T0 = 0.477 (blue line with circles). They all share the same
qc(s)/d (black dashed line) given by Eq. (26).

where s = t/tf , a = v0tf /d, and b = ω0tf = 2π tf /T0. Some trajectories are shown in Fig. 2. The shaded regions in Fig. 3
correspond to the values of a and b/2π for which the trajectory
q0(t) exceeds the domain [0,d]. Even though the details are now more complicated than for the rest-to-rest case, two simple
general rules can be drawn: q0 is never negative when tf > T0 (the asymptotic threshold for large a is at b = 6), whereas if a 2.513, there is always some t in (0,tf ) for which q0(t) > d.
Launching or “catapulting” atoms at rest to end up with a
chosen velocity v0 [10] may be designed similarly by setting Eq. (21) for the initial conditions and setting the ﬁnal boundary
conditions as

qc(tf ) = d, q˙c(tf ) = v0, q¨c(tf ) = 0.

(28)

A major practical concern in all these applications should be to keep the harmonic approximation valid. This may require an analysis of the actual potential in each speciﬁc case and of the excitations taking place along the nonadiabatic transport process. Without performing such detailed analysis, the feasibility of the approach for a given transport objective set by the pair d,tf can be estimated rather simply by comparing lower excitation bounds provided in Sec. V with the trap depth.

B. Compensating-force approach
In the compensating-force approach, case (ii), we may proceed similarly, but now the variable α of Eqs. (1) and (3) is directly q0, so instead of ﬁxing values of qc and its derivatives at the boundary times, we shall ﬁx values of q0 and its derivatives. For simplicity, we shall consider only a rest-to-rest scenario, but the generalizations are straightforward. The compensating potential −mq¨0q in the Hamiltonian (20) should vanish before and after transport since the trap remains at rest and q¨0 =-
 0

FIG. 3. (Color online) Stopping atoms. The shaded areas represent the values of a = v0tf /d and b/2π = tf /T0 for which there is a t in (0,tf ) where (left) q0(t) < 0 or (right) q0(t) > d. We have used the polynomial ansatz of Eqs. (26) and (27).

for t < 0 and t > tf . To make the ψn coincide, up to a global phase factor, with the eigenstates of the Hamiltonian before and after transport, H = p2/2m + U (q − q0), at t = 0 and t = tf , we impose
q0(0) = q˙0(0) = 0, q0(tf ) = d, q˙0(tf ) = 0. (29)
We may also impose q¨0 = 0 as a boundary condition at t = 0 and tf to have a continuous q¨0(t), but at least formally, it is not strictly necessary. In practice, several experiments have been designed with (approximate) discontinuities in the trap acceleration [16,19]. We shall come back to this point in Sec. IV. Clearly, the implementation of the compensatingforce approach is subjected to different limitations from the ones applicable to the harmonic transport without compensation. The main probl-
em now is not anharmonicity, which is included in the theory from the start by admitting an arbitrary U , but the feasibility of the compensating-force term. According to the mean-value theorem (see Sec. V) a lower bound for the maximum of the absolute value of q¨0 is 2d/tf2 .

IV. BANG-BANG ACCELERATION METHODS

It should be clear from Sec. III A that there are inﬁnitely
many functions q0(t) that, for harmonic transport, lead to the ideal boundary conditions. A somewhat extreme case, which
has, however, been implemented experimentally because of its
relative simplicity, is to combine time segments with a constant
acceleration [16,19]. The simplest trap trajectory of this type implies a constant positive acceleration 4d/tf2 from 0 to tf /2 and a deceleration −4d/tf2 from tf /2 to tf . The resulting q0 is formed by two parabolas matched at tf /2:

2s2,

0 < s < 1/2,

q0/d =

4

s

−

s2 2

−

1 4

,

1 2

<

s

<

1.

(30)

The corresponding velocity q˙0 increases linearly from 0 to 2d/tf and then decreases from there to 0.
The classical trajectory qc satisfying Eq. (15) with Eq. (30) and the boundary conditions (21) at t = 0 is given by

qc

−

q0

=

⎧ ⎨

−4d ω02 tf2

⎩ 4d
ω02 tf2

(1 − cos ω0t) 1 + cos ω0t −

2

cos

ω0

t

−

tf 2

(31)

for the ﬁrst and second time segments. From this result one can check that the boundary conditions at tf (22) are satisﬁed only for a discrete set of times tf,N = 4π N/ω0, with N ∈ N, i.e., for multiples of two oscillation periods. For all other times this scheme will heat the atoms. A perturbation theory analysis shows that, even for the selected discrete times, the bang-bang method is slightly less stable than the inverse invariant method, using the polynomial ansatz, with respect to an anharmon-
ic perturbation of the transporting trap potential. The details are shown in Appendix B.
A variant of this method, using, e.g., the trap trajectory (30) and the compensating forces as in case (ii), may be appealing in practice because it is relatively simple to implement the compensating force, at least approximately, as a piecewise function.

013415-4

FAST ATOMIC TRANSPORT WITHOUT VIBRATIONAL HEATING

PHYSICAL REVIEW A 83, 013415 (2011)

V. TRANSIENT ENERGY EXCITATIONS
Whereas, ideally, nonadiabatic faithful transport can be performed for arbitrary transport distances and times, in practice, the process could be limited, apart from the geometrical constraints discussed in Sec. IV, by the maximal transient excitation energies allowed to neglect the effect of anharmonicities of the actual potential in case (i) or by the difﬁculties to implement strong compensating forces in case (ii). We shall analyze these effects from the point of view of different bounds obtain-
ed for the average potential energy using the Euler-Lagrange equations and for the instantaneous potential energy and acceleration by means of the mean-value theorem.

A. Quasioptimal trajectories for harmonic transport
The instantaneous average energy for a harmonically driven transport mode can be calculated from Eqs. (14) and (16):

ψn(t)|H (t)|ψn(t)

= h¯ ω0

n+ 1 2

+

m 2

q˙c2

+

1 2

mω02(qc

−

q0)2.

(32)

Moreover, the instantaneous average potential energy is

V (t)

=

h¯ ω0 2

n

+

1 2

+ EP . The ﬁrst, “internal” contribution

remains constant for each n, and the second term has the

simple form of a potential energy for a classical particle,

EP

≡

1 2

mω02(qc

−

q0)2.

Its

time

average,

using

relation

(15)

between q0 and qc, takes the form

EP

=

m 2tf ω02

tf
q¨c2 d t .
0

(33)

We can use a generalized Euler-Lagrange equation d4qc/dt4 = 0 to minimize this integral subject to four boundary conditions [39], the ones for qc and q˙c in Eqs. (21) and (22). This results in a “quasioptimal” classical trajectory:

qc = d(3s2 − 2s3).

(34)

Whereas Eq. (34) does not satisfy the six boundary conditions (21) and (22), it provides, in any case, a lower bound for the time average of EP , as the set of functions satisfying the six conditions is smaller than the one satisfying four of them. Substituting Eq. (34) into Eq. (33), one gets the desired lower bound,

6md 2

EP

tf4 ω02 .

(35)

This bound describes the relevant dependences, as shown by
numerical comparisons with actual time-averaged energies
for polynomial trajectories, Eq. (23) [see Fig. 4(a)], and sets a rather strong tf−4 scaling, compared with the milder dependence on tf−2 of the time-averaged transient energy in invariant-based, inverse-engineered expansions [40].
As for the variance ( H )2 ≡ ψn|H 2|ψn − ψn|H |ψn 2 for the nth transport mode, it takes, after a somewhat lengthy
calculation, a simple form:

(

H )2

= 2h¯ ω0(n + 1/2)

1 2

mω02

(qc

− q0)2 +

1 2

mq˙c2

.

(36)

14

12

4

a

log10 Ep E0

10

8

6

4

1.0

0.5

0.0

0.5

1.0

log10 ω0tf

8

2

6

b

4

2

1

log10 H 0 E0

0

2

4

1.0

0.5

0.0

0.5

1.0

log10 ω0tf

FIG. 4. (Color online) Dependences of time-averaged energies on tf . The δ is the asymptotic exponent of tf . Parameters are ω0 = 2π × 8 Hz, E0 = h¯ ω0/2, d = 2.25 mm, and rubidium-87 atoms that begin and end in the ground vibrational state. (a) Bound (35) (solid red line) and time average of EP for a polynomial trajectory (dotted blue line). (b) AA bound (dot-dashed magenta line) and time average of H for a polynomial trajectory (dotted blue line).

Using again a Euler-Lagrange equation, we ﬁnd the lower
bound ( H )2 > 12h¯ (n + 1/2)md2/ω0tf4 for its time average. This does not establish a lower bound for the average of
the standard deviation H but agrees with the scaling with tf that we observe numerically as tf → 0, H ∝ tf−2; see Fig. 4(b). This should be contrasted with the Aharonov-
Anandan (AA) relation [41] H h/4tf , which is applied to transport among orthogonal states. (The general expres-
sion for ground-state to ground-state transport allowing for
nonorthogonal initial and ﬁnal states [40,42] is H tf h¯ arccos[exp(−mω0d2/4h¯ )], which tends to the result for orthogonal states when d (4h¯ /mω0)1/2.) As it occurs for harmonic trap expansions [40], it is certainly correct
as a bound, but it does not describe the dependences
found for the averaged standard deviation for fast processes
(small tf ).

B. Mean-value theorem
The mean-value theorem (MVT) sets another useful bound since it applies to the instantaneous values rather than to a time average. The argument may be applied to qc in case (i) or to q0 in case (ii), so we shall formulate it in terms of a generic x, assumed to be continuous in [0,tf ] and differentiable in (0,tf )

013415-5

E. TORRONTEGUI et al.

PHYSICAL REVIEW A 83, 013415 (2011)

x(t) d
slope d/tf

slope x˙ max

0 x˙ (t)
x˙ max

tm slope x¨max

tf

t

slope x˙ max tm − tf

slope x˙ max/tm

0

tm

tf t

FIG. 5. Graphical representation of the lower bound of Eq. (37)
for (top) the maximum velocity x˙max and (bottom) the maximum acceleration |x¨|max of Eqs. (38) and (39).

and such that x(0) = x˙(0) = x˙(tf ) = 0 and x(tf ) = d. The maximum of its time derivative must be

x˙max d/tf

(37)

at some point tm in (0,tf ); see Fig. 5. We can now use that point to divide [0,tf ] into two segments and apply the MVT again, now to the derivative. In the ﬁrst segment the derivative goes from 0 to x˙max, so

|x¨|max d/(tf tm).

(38)

Similarly, in the second segment,

|x¨|max d/[tf (tf − tm)],

(39)

and for the whole interval, |x¨|max d/[tf min(tm,tf − tm)]. Irrespective of the location of the point tm, min(tm,tf − tm) tf /2. We can thus set a lower bound for the (absolute value of) the maximum of the second derivative,

|x¨|max 2d/tf2 .

(40)

When x = qc, case (i), Eq. (40) gives a bound for the instantaneous quasipotential energy:

d2

EP 2m ωtf2 .

(41)

In this case, however, we get a tighter lower bound directly from the time average (35).

With x = q0, case (ii), we get a lower bound for the maximum trap acceleration. In particular, the accelerations
of compensating forces, typically limited by experimental
constraints such as gradient magnetic ﬁelds or Stark electric ﬁelds, should at the very least reach the value 2d/tf2 .

VI. DISCUSSION

We have applied the Lewis-Riesenfeld method [28] for quadratic-in-p invariants [33] combined with inverse engineering of trap trajectories to design fast and faithful atomic transport. The limitations have been quantiﬁed, and relations to other approaches that can be included in this framework have been pointed out. Another approach to accelerate adiabatic processes has been recently proposed by Berry [43] and can also be applied formally to transport. The central idea is to construct a Hamiltonia-
n that drives the system exactly along the adiabatic approximation deﬁned for some reference time-dependent Hamiltonian H0(t) without transitions among the instantaneous eigenstates of H0. For an arbitrary, rigid trap potential moving from 0 to d along a path q0(t), the eigenvectors of the instantaneous (reference) Hamiltonian H0 = p2/2m + U (q − q0) are simply displaced from the original location,

|n(t ) = e−ipq0(t)/h¯ |n(0) .

(42)

The transitionless driving Hamiltonian H0 + ih¯ n |∂n n| becomes, in this case, H0 + pq˙0; compare with Eq. (20). Note the freedom to choose H0. It could even be suppressed during transport: the simple Hamiltonian pq˙0 would also keep the same populations (of any H0) without generating dynamical phases e−iEnt for each eigenvalue. This is a rather intuitive result since the corresponding propagator is nothing but the displacement operator e−ipq0(t)/h¯ . This approach thus provides a formal solution-
 to fast and faithful transport, but the practical realization of a q˙0p Hamiltonian term remains an open question.
With respect to the general framework embraced by Eqs. (1)–(11), the studied cases (i) and (ii) are very relevant but not exhaustive. For U = 0, the most general case occurs when transport is accompanied by expansions and contractions, so that the time dependence of ω(t) and ρ(t) has to be considered if the invariant-based inverse engineering method is applied.
For harmonic trap expansions or contractions in the gravity ﬁeld (q becomes a vertical coordinate), F = −mg, and the center of the trap suffers a time-dependent translation q0 = −2g/ω2. Again, α in Eq. (3) may be interpreted as a classical trajectory, now of a time-dependent harmonic oscillator subjected to the gravity ﬁeld,

q¨c + ω2(t) qc = −g.

(43)

This is admittedly not a proper transport problem, but its formal treatment is the same and has recently been implemented experimentally [44] and also for Bose-Einstein condensates [45].
As for further extensions or open questions of the invariant approach, one may investigate the use of more complex invariants that are not restricted to being quadratic in p [46], in particular, to tackle anharmonic transport. In the frame of quadratic-in-p invariants, anharmonic traps can be dealt

013415-6

FAST ATOMIC TRANSPORT WITHOUT VIBRATIONAL HEATING

PHYSICAL REVIEW A 83, 013415 (2011)

with by a compensating force [case (ii)], but this force might be difﬁcult to implement for large accelerations. If F = 0, ω = 0, and U (q − α) = 0 in Eq. (1), α should be the trap trajectory q0, which is only consistent with the auxiliary equation α¨ = 0 [see Eq. (3)] for constant-velocity trajectories which are incompatible with the boundary conditions (29). A way out, to be explored, may be to use the invariants to implement minimization algorithms of the ﬁnal vibrational excitation.
Other research avenues from here include the analysis and optimization of transport for speciﬁc, commonly found potentials, such as periodic walking waves considering entangled states that correlate internal and external degrees of freedom (see, e.g., [47]) or the combination of invariant-based inverse engineering with optimal control theory [48]. Finally, further work will be devoted to understanding and mitigating the effects of noise, for which the inversion method is intrinsically robust [24],-
 and of atom-atom interactions. Tonks-Girardeau gases can be treated similarly to single particles, and for Bose-Einstein condensates, scaling techniques may be used, as in [45,49].
ACKNOWLEDGMENTS
We thank T. Lahaye and M. Berry for useful discussions. We also acknowledge the kind hospitality of the Max Planck Institute for the Physics of Complex Systems in Dresden and funding from the Basque government (Grant No. IT472-10), Ministerio de Ciencia e Innovacio´n (Grant No. FIS2009-12773-C02-01), the Agence Nationale de la Recherche (Grant No. ANR-09-BLAN-0134-01), and the Re´gion Midi-Pyre´ne´es. E.T. and S.I. acknowledge ﬁnancial support from the Basque government (Grant Nos. BFI08.151 and B-
FI09.39). X.C. acknowledges support from the Juan de la Cierva Programme and the National Natural Science Foundation of China (Grant No. 60806041).

APPENDIX A: DISPLACEMENT UNITARY TRANSFORMATION
Consider the following (time-dependent) position and momentum displacement unitary operator:

U = eipq0(t)/h¯ e−imq˙0(t)q/h¯ .

(A1)

We could also use variants of U with different orderings without affecting the ﬁnal result. Starting from the Schro¨dinger equation,

ih¯ ∂t |ψ = H |ψ ,

(A2)

where [as in Eq. (20)] H = p2/2m + U (q − q0) − mqq¨0, the corresponding equation for | = U|ψ is

ih¯ ∂t | = U H U †| + ih¯ (∂t U )U †|

= p2 + U (q) + mq˙02 | .

(A3)

2m

2

Any stationary state in this “trap frame” will remain so in spite of the trap motion thanks to the compensating effect of the term −mqq¨0 in H .

APPENDIX B : PERTURBATION THEORY ANALYSIS OF THE EFFECT OF ANHARMONICITY

In this Appendix we shall use perturbation theory to determine the effect of small anharmonicities using inverse or bang-bang trap trajectories. For concreteness, we start from the “cigar trap” potential associated with a Gaussian beam with a moving focus,

V(
where r and = q − q0(t),

,r ) = −V0e−2r2/w2(

)

1

1 +

2
xR2

,

(B1)

are radial and longitudinal coordinates,

2

w( ) = w0 1 + xR

(B2)

is the spot size, xR = π w02/λ is the Rayleigh length, and w0 is the waist.
For a tight radial conﬁnement we may ignore the radial coordinate and set r = 0. The resulting longitudinal potential can be expanded around the minimum. Retaining the ﬁrst correction to the harmonic term and ignoring the constant, we split the Hamiltonian, considering the quartic term as a perturbation,

H

=

H0

+ V1

=

p2 2m

[q + V0

− q0(t)]2 xR2

[q − V0

− q0(t xR4

)]4 ,
(B3)

V1

=

−

V0

[q

− q0(t)]4 xR4

,

where theory,

V0 = mω02xR2 /2. we calculate the

Using time-dependent overlap ψ(tf )|ψ˜ (tf )

perturbation between the

state evolving with the harmonic oscillator |ψ(t) and the

perturbed state |ψ˜ (t) at the ﬁnal time t = tf . |ψ(t) is chosen

as the transport mode (16), with (21) satisﬁed.

We approximate the perturbed state in ﬁrst order as

|ψ˜ (t) = U0(t,0)|ψ˜ (0)

−i h

t
dt U0(t,t )V (t )U0(t ,0)|ψ˜ (0) ,
0

(B4)

where

it

U0(t,0) = exp

− h¯

dt H0(t )
0

,

(B5)

so

ψ(tf )|ψ˜ (tf )

= ψ(tf )|U0(tf ,0)|ψ˜ (0)

−i h¯

tf
dt
0

ψ(tf )|U0(tf ,t )V (t )U0(t ,0)|ψ˜ (0) .

(B6)

At t = 0 the initial state is also an eigenstate of the harmonic oscillator, |ψ˜ (0) = |ψ(0) , so the ﬁrst term on the right-hand

side of Eq. (B6) is 1. Using the transport modes in Eq. (16),

we calculate the bracket term in Eq. (B6),

ψ(tf )|U0(tf ,t )V (t )U0(t ,0)|ψ˜ (0)

=

−V0 xR4

ψ (t

)|[q − q0(t

)]4|ψ(t )

.

(B7)

013415-7

E. TORRONTEGUI et al.

PHYSICAL REVIEW A 83, 013415 (2011)

Performing the time integral, we arrive, in ﬁrst order, at

ψ(tf )|ψ˜ (tf )

= 1 − i F. h¯

(B8)

The generic F becomes Fbb when substituting the functions for the bang-bang method described in Sec. IV for q0 and qc; see Eqs. (30) and (31).

Fbb

=

2−(n+2)V0(2n)!! xR4 n!

h¯ 2tf m2ω02

[3

+

6n(1

+

n)]

+

48d2h¯ (1 + mtf4 ω06

2n)

10ω0tf − 4ω0tf cos

ω0tf 2

− 28 sin ω0tf 2

+12 sin(ω0tf ) − 4 sin

3ω0tf 2

+ sin(2ω0tf )

+

32d 4 3tf8 ω09

144ω0tf

− 9 cos ω0tf 2

+ cos(ω0tf )

− 6096 sin ω0tf 2

+ 4632 sin(ω0tf ) + 4 393ω0tf − 530 sin

3ω0tf 2

+ 222 sin(2ω0tf )

− 84 sin 5ω0tf 2

+ 26 sin(3ω0tf ) − 6 sin

7ω0tf 2

+ 3 sin(4ω0tf ) .

(B9)

When tf → 0, then Fbb → 0, but this is not a very useful limit since the bang-bang procedure will not work for times smaller than 4π/ω0. As a more interesting case, consider the discrete ﬁnal times tf,N = 4π N/ω0 with N ∈ N [19]. Then Fbb takes the
form

Fbb =

−2−(10+n)(2n)!! N 7mπ 7n!ω0xR2

1536N 8h¯ 2[1 + 2n(1 + n)]π 8 + 576d2N 4h¯ m(1 + 2n)π 4ω0 + 35d4m2ω02

.

(B10)

In the limit xR → ∞, Fbb → 0. Increasing the waist and keeping the other parameters constant, the potential is more harmonic. In contrast, as xR → 0, Fbb → −∞. Also, Fbb → −∞ when ω0 → 0 and ω0 → ∞.
If instead of the bang-bang functions we choose the inverse-engineered polynomial qc in Eq. (23) and the corresponding q0, for arbitrary parameters and, in particular, an arbitrary tf , F becomes

Finv

=

−2−(n+2)V0(2n)!! xR4 n!

1728 000d4 1001tf7 ω08

+

1440d2h¯ (1 + 7mtf3 ω05

2n)

+

h¯ 2[3

+ 6n(1 + m2ω02

n)tf ]

.

For the ﬁnal times tf,N ,

Finv

=

−2−(8+n)3(2n)!! 1001N 7mπ 7n!ω0xR2

128128N 8h¯ 2[1 + 2n(1 + n)]π 8 + 34320d2N 4h¯ m(1 + 2n)π 4ω0 + 1125d4m2ω02

.

Comparing the factors in (B10) and (B11), we see that |Finv| < |Fbb| for ω0 > 0.

(B11)

[1] M. A. Rowe et al., Quantum Inf. Comput. 4, 257 (2002). [2] R. Reichle, D. Leibfried, R. B. Blakestad, J. Britton, J. D. Jost,
E. Knill, C. Langer, R. Ozeri, S. Seidelin, and D. J. Wineland, Fortschr. Phys. 54, 666 (2006). [3] Y. Miroschnychenko, W. Alt, I. Dotsenko, L. Fo¨rster, M. Khudaverdyan, D. Meschede, D. Schrader, and A. Rauschenbeutel, Nature (London) 442, 151 (2006). [4] T. L. Gustavson, A. P. Chikkatur, A. E. Leanhardt, A. Go¨rlitz, S. Gupta, D. E. Pritchard, and W. Ketterle, Phys. Rev. Lett. 88, 020401 (2001). [5] H. J. Lewandowski, D. M. Harber, D. L. Whitaker, and E. A. Cornell, J. Low Temp. Phys. 132, 309 (-
2003). [6] M. J. Pritchard, A. S. Arnold, S. L. Cornish, D. W. Hallwood, C. V. S. Pleasant, and I. G. Hughes, New J. Phys. 8, 309 (2006). [7] G. R. Gutho¨hrlein, M. Keller, K. Hayasaka, W. Lange, and H. Walther, Nature (London) 414, 49 (2001). [8] T. Calarco, E. A. Hinds, D. Jaksch, J. Schmiedmayer, J. I. Cirac, and P. Zoller, Phys. Rev. A 61, 022304 (2000). [9] J. D. Prestage, R. L. Tjoelker, G. J. Dick, and L. Maleki, in Proceedings of the 1993 IEEE Frequency Control Symposium (IEEE, Piscataway,-
 NJ, 1993), p. 144.

[10] S. Kuhr, W. Alt, D. Schrader, M. Mu¨ller, V. Gomer, and D. Meschede, Science 293, 278 (2001).
[11] S. Schmidt, J. G. Muga, and A. Ruschhaupt, Phys. Rev. A 80, 023406 (2009).
[12] X. Chen, J. G. Muga, A. del Campo, and A. Ruschhaupt, Phys. Rev. A 80, 063421 (2009).
[13] W. Ha¨nsel, J. Reichel, P. Hommelhoff, and T. W. Ha¨nsch, Phys. Rev. Lett. 86, 608 (2001).
[14] W. Ha¨nsel, P. Hommelhoff, T. W. Ha¨nsch, and J. Reichel, Nature (London) 413, 498 (2001).
[15] S. Kuhr, W. Alt, D. Schrader, I. Dotsenko, Y. Miroshnychenko, W. Rosenfeld, M. Khudaverdyan, V. Gomer, A. Rauschenbeutel, and D. Meschede, Phys. Rev. Lett. 91, 213002 (2003).
[16] D. Schrader, S. Kuhr, W. Alt, M. Mu¨ller, V. Gomer, and D. Meschede, Appl. Phys. B 73, 819 (2001).
[17] M. Greiner, I. Bloch, T. W. Ha¨nsch, and T. Esslinger, Phys. Rev. A 63, 031401 (2001).
[18] T. Lahaye, G. Reinaudi, Z. Wang, A. Couvert, and D. Gue´ry-Odelin, Phys. Rev. A 74, 033622 (2006).
[19] A. Couvert, T. Kawalec, G. Reinaudi, and D. Gue´ry-Odelin, Europhys. Lett. 83, 13001 (2008).

013415-8

FAST ATOMIC TRANSPORT WITHOUT VIBRATIONAL HEATING

PHYSICAL REVIEW A 83, 013415 (2011)

[20] S. Schmid, G. Thalhammer, K. Winkler, F. Lang, and J. H. Denschlag, New J. Phys. 8, 159 (2006).
[21] G. Huber, T. Deuschle, W. Schnitzler, R. Reichle, K. Singer, and F. Schmidt-Kaler, New J. Phys. 10, 013004 (2008).
[22] D. R. Crick, S. Donnellan, S. Ananthamurthy, R. C. Thompson, and D. M. Segal, Rev. Sci. Instrum. 81, 013111 (2010).
[23] R. B. Blakestad, C. Ospelkaus, A. P. VanDevender, J. M. Amini, J. Britton, D. Leibfried, and D. J. Wineland, Phys. Rev. Lett. 102, 153002 (2009).
[24] M. Murphy, L. Jiang, N. Khaneja, and T. Calarco, Phys. Rev. A 79, 020301(R) (2009).
[25] S. Masuda and K. Nakamura, Proc. R. Soc. A 466, 1135 (2010). [26] D. Chen, H. Zhang, X. Xu, T. Li, and Y. Wang, Appl. Phys. Lett.
96, 134103 (2010). [27] X. Chen, A. Ruschhaupt, S. Schmidt, A. del Campo,
D. Gue´ry-Odelin, and J. G. Muga, Phys. Rev. Lett. 104, 063002 (2010). [28] H. R. Lewis and W. B. Riesenfeld, J. Math. Phys. 10, 1458 (1969). [29] V. P. Ermakov, Univ. Izv. Kiev. 20, 1 (1880). [30] H. R. Lewis and P. G. Leach, J. Math. Phys. 23, 2371 (1982). [31] P. G. L. Leach, J. Math. Phys. 18, 1608 (1977). [32] P. G. L. Leach, J. Math. Phys. 18, 1902 (1977). [33] A. K. Dhara and S. W. Lawande, J. Phys. A 17, 2423 (1984). [34] E. Narevicius et al., New J. Phys. 9, 96 (2007).

[35] M. Raizen, Science 324, 1403 (2009). [36] H. L. Bethlem, G. Berden, and G. Meijer, Phys. Rev. Lett. 83,
1558 (1999). [37] S. Y. T. van de Meerakker, P. H. M. Smeets, N. Vanhaecke,
R. T. Jongma, and G. Meijer, Phys. Rev. Lett. 94, 023004 (2005). [38] B. C. Sawyer, B. L. Lev, E. R. Hudson, B. K. Stuhl, M. Lara,
J. L. Bohn, and J. Ye, Phys. Rev. Lett. 98, 253002 (2007). [39] I. M. Gelfand and S. V. Fomin, Calculus of Variations
(Prentice-Hall, Englewood Chiffs, New Jersey, 1963). [40] X. Chen and J. G. Muga, Phys. Rev. A 82, 053403 (2010). [41] J. Anandan and Y. Aharonov, Phys. Rev. Lett. 65, 1697 (1990). [42] A. K. Pati, Phys. Lett. A 262, 296 (1999). [43] M. V. Berry, J. Phys. A 42, 365303 (2009). [44] J. F. Schaff, X.-L. Song, P. Vignolo, and G. Labeyrie, Phys. Rev.
A 82, 033430 (2010). [45] J. F. Schaff, X. L. Song, P. Capuzzi, P. Vignolo, and G. Labeyrie,
e-print arXiv:1009.5868. [46] Y. H. Lee and J. Y. Riu, J. Korean Phys. Soc. 25, 469 (1992). [47] M. J. McDonnell, J. P. Home, D. M. Lucas, G. Imreh, B. C.
Keitch, D. J. Szwer, N. R. Thomas, S. C. Webster, D. N. Stacey, and A. M. Steane, Phys. Rev. Lett. 98, 063603 (2007). [48] D. Stefanatos, J. Ruths, and Jr-Shin Li, Phys. Rev. A 82, 063422 (2010). [49] J. G. Muga, X. Chen, A. Ruschhaupt, and D. Gue´ry-Odelin, J. Phys. B 42, 241001 (2009).

013415-9

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:52.773Z
- **Text Length:** 40615 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
