# PDF Document: (Measuring mass with trap potential) Sympathetic Cooling of Mixed Species Two-Ion Crystals for Precision Spectroscopy.pdf

**File Path:** (Measuring mass with trap potential) Sympathetic Cooling of Mixed Species Two-Ion Crystals for Precision Spectroscopy.pdf

**Processed Date:** 2026-02-10T18:17:47.750Z

**File Size:** 654.78 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 843

**Title:** (Measuring mass with trap potential) Sympathetic Cooling of Mixed Species Two-Ion Crystals for Precision Spectroscopy

**Collection:** Multiplexing > Random

---

## Extracted Text Content

Sympathetic Cooling of Mixed Species Two-Ion Crystals for Precision Spectroscopy
Jannes B. Wu¨bbena,1 Sana Amairi,1 Olaf Mandel,1 and Piet O. Schmidt1, 2 1QUEST Institute for Experimental Quantum Metrology,
Physikalisch-Technische Bundesanstalt, 38116 Braunschweig, Germany 2Institut fu¨r Quantenoptik, Leibniz Universita¨t Hannover, 30167 Hannover, Germany
(Dated: July 23, 2018)
Sympathetic cooling of trapped ions has become an indispensable tool for quantum information processing and precision spectroscopy. In the simplest situation a single Doppler-cooled ion sympathetically cools another ion which typically has a diﬀerent mass. We analytically investigate the eﬀect of the mass ratio of such an ion crystal on the achievable temperature limit in the presence of external heating. As an example, we show that cooling of a single Al+ with Be+, Mg+ and Ca+ ions provides simil-
ar results for heating rates typically observed in ion traps, whereas cooling ions with a larger mass perform worse. Furthermore, we present numerical simulation results of the rethermalisation dynamics after a background gas collision for the Al+/Ca+ crystal for diﬀerent cooling laser conﬁgurations.

arXiv:1202.2730v2 [physics.atom-ph] 17 Feb 2012

I. INTRODUCTION
Sympathetic laser cooling of trapped ions is an important experimental tool in diverse ﬁelds, such as quantum information processing, chemistry and precision spectroscopy. In quantum information processing, a sympathetic cooling ion can be used to cool the qubit ions in a multiplexed trap architecture [1], without aﬀecting the quantum information store in the internal states of the qubit ions [2, 3]. Sympathetic cooling of atomic and molecular ions enables studies of chemical reactions at cold and-
 ultra-cold temperatures [4–6]. A major interest in sympathetic cooling of clouds of ions stems from spectroscopy of atomic [7–9] and molecular ion species [10–13] with a complex internal level structure that can not be laser cooled directly. Precision spectroscopy of single or few spectroscopy ions sympathetically cooled by a well-controllable cooling or logic ion in a linear ion trap can be performed using quantum logic spectroscopy (QLS) [14, 15]. Here, the laser-cooled logic ion not only provi-
des sympathetical cooling, but also assists in the readout process of the spectroscopy ion after interrogation. After its successful implementation in optical frequency standards based on aluminium ions [16, 17], several experiments including spectroscopy of molecular ions [18, 19], highly-charged ions [20–22], super-heavy ions [23], and metal ions [24] using this technique have been proposed. One of the requirements for these applications is eﬃcient Doppler laser cooling of small linear ion cryst-
als, which in its simplest form consists of two ions of (in general) unequal mass. Doppler laser cooling has ﬁrst been experimentally demonstrated with trapped magnesium ions [25]. It was soon realized that the strong mutual electro-static interaction between a laser cooled ion species and another species not interacting with the cooling laser, allowed sympathetic cooling of the latter in large clouds of ions [26, 27]. Crystallized linear chains of up to 15 ions have been sympathetically cooled wi-
th a single cooling ion of similar mass [28–30]. Sympathetic Doppler and even ground-state cooling of two-ion crys-

tals with a mass ratio of up to three has been successfully implemented [15, 31]. Cooling of even larger mass ratios has been proposed by trapping the two species in separate potential wells [32, 33]. The structure, dynamics and cooling of linear ion crystals composed of ions with unequal mass have been investigated theoretically mostly in the context of quantum information processing [34– 38], with particular emphasis on the mode structure and the cooling rates. For applications, such as optical -
frequency standards requiring high spectroscopic accuracy, the lowest achievable temperature during Doppler cooling will determine relativistic and trapping-ﬁeld induced shifts [17, 39]. Motional heating of the ions in the trap due to electric ﬁeld ﬂuctuations [20, 40, 41] signiﬁcantly modiﬁes the achievable Doppler cooling temperature.
Here, we develop an analytical model to study the achievable motional energy using sympathetic cooling in linear two-species two-ion crystals within the pseudopotential approximation in the presence of external motional heating. The achievable cooling limit strongly depends on the strength of the external electric ﬁeld ﬂuctuations, the mass ratio between cooling and spectroscopy ions, and the trap parameters. We show that in particular, the Doppler cooling temperature in radial direction is much m-
ore sensitive to a mass mismatch compared to the axial direction. We use this model to investigate the second-order Doppler shift for Doppler cooled ion crystals in an 27Al+ quantum logic clock with diﬀerent logic ion species. We show that next to the obvious choice of 25Mg+-ions which excel because of their almost perfect mass match, 40Ca+-ions will perform similarly and in some situations even better than the Mg ions, owing to the lower achievable Doppler cooling temperature. Besides the cooling-
 limit, the required cooling time after e.g. a collision with the hot background gas is an important aspect. We numerically simulate the cooling dynamics of a Ca+/Al+ ion crystal after such a collision event. Before crystallization of the two-ion crystal, the cooling rate is comparable to the single ion case. After crystallization, the motion of the ions is described in normal modes and the cooling rate is limited by modes that are only weakly

2

U0

2R
V0 cos ΩTt 2d

x z
y

FIG. 1. Schematic of a linear ion trap. The trap consists of four blade-shaped electrodes of which two opposing ones are connected to an RF-voltage while the other two are connected to ground. It also includes two endcap electrodes that are connected to a positive DC voltage. The line through the two endcaps deﬁnes the trap axis z and the other two axes (x, y) are chosen such that two blades lie on each axis.

cooled by the logic ion. In section II we brieﬂy recall the low temperature dy-
namics of the two-ion crystal and introduce analytic formulae for the six mode frequencies and the modal amplitudes. In section III we expand the standard Doppler cooling model to the two-ion crystal case and investigate the eﬀect of external heating on the temperature limit. In section IV we describe our cooling dynamics simulation and discuss the results before summarizing in section V.

II. NORMAL MODES OF A TWO-ION CRYSTAL

In linear Paul traps the conﬁnement of charged particles is realised by two distinct electric ﬁelds [42]. The ﬁrst is a rapidly oscillating 2D electric quadrupole in the radial (xy) plane and the second is a static 3D quadrupole ﬁeld providing conﬁnement along the trap (z) axis. While the ﬁrst is assumed to be purely radial and have no ﬁeld components in the axial direction, the latter must have components in the radial directions additionally to its axial ﬁeld in order to satisfy Laplace’s equati-
on. Following the notation of [43] the total trap potential is given by

Φ(x, y, z, t)

=

V0 2

cos ΩT t

x2 − y2 1+ R2

z2 − αx2 − (1 − α)y2

+ κU0

d2

, (1)

where V0 and U0 are the applied RF and DC voltages, R ≈ R and d are the radial and axial trap dimensions, respectively, κ is a geometric factor [44], 0 < α < 1 is a parameter indicating the radial asymmetry of the static ﬁeld, and ΩT is the angular frequency of the rapidly oscillating RF-ﬁeld (see Fig. 1). In the pseudopotential

approximation, a single ion of mass m and charge e in this trap will experience a potential of the form [45]

U (x, y, z)

=

1 2

mωx2 x2

+

1 2

mωy2y2

+

1 2

mωz2z

2.

(2)

In this potential, the ωx,y,z denote the single ion trap frequencies, i.e. the frequencies of the ion’s secular motion along the diﬀerent axes. They are given by

ωz =

2eκU0 md2

(3)

ωx = ωp2 − αωz2

(4)

ωy = ωp2 − (1 − α)ωz2

(5)

where ωz, ωx and ωy are the axial and two radial trap frequencies, respectively, and

ωp

=

√ eV0 2ΩT mR

2

describes the contribution of the RF potential to the radial trap frequencies [43]. Introducing a factor = ωp/ωz as in [36] simpliﬁes the radial trap frequencies to

ωx = 2 − α ωz, ωy = 2 − (1 − α) ωz. (6)

From the known trap frequencies, the α and parameters for a given ion with mass m = m1 in a given trap can be derived. This allows the computation of frequencies for ions with diﬀerent masses m2 in the same trap. While the axial trap frequencies simply scale with the square root of the mass, the radial trap frequencies additionally depend on and α:

ωz,2 =

m1 m2

ωz,1

(7)

ωx,2 =

m1 m2

m1 m2
2

2−α −α

ωx,1

(8)

ωy,2 =

m1 m2

m1 m2
2

2 − (1 − α) − (1 − α)

ωy,1

(9)

For the remainder of this work we assume α = 1/2 to

simplify the algebra.

If two ions are simultaneously trapped in the same lin-

ear Paul trap and strongly cooled to near 0 K temper-

ature, they will eventually crystallize at equilibrium po-

sitions along the trap axis, equally spaced at a distance

z0 =

ed2 32U0π 0

1/3
from the trap centre [20, 35].

The

remaining motion of ions 1 and 2 can then be described

as small, coupled oscillations q1, q2 around these equilibrium positions. Along every principal axis the motion

consists of a superposition of an out-of-phase mode (o)

where the two ions always move in opposite directions

and an in-phase mode (i) where the two ions move in

3

the same direction. Following the approach of [36], the oscillations along a chosen direction are given by

q1(t) = zib1 sin(ωit + φi) + zob2 cos(ωot + φo) (10) q2(t) = z√ibµ2 sin(ωit + φi) − z√obµ1 cos(ωot + φo) (11)

where ωi,o, φi,o are the angular eigenfrequencies and phases of the in-phase and out-of-phase modes, respec-

tively, and b1,2 are the components of the normalised

eigenvector of the in-phase mode, satisfying b21 + b22 = 1,

in is

saccaoleodrdbinyaatefasyctsotermofw1h/e√reµtwheitmh oµti=onmof2/thme1s.ecTohned

ion zi,o

are the modal amplitudes (see Eq. (19), (20)). The calcu-

lation of the modal frequencies and the b1,2-parameters can be performed similarily to for example [36]: For every

ion the sum of the trap pseudopotential and the Coulomb

potential due to repulsion from the other ion is developed

around the equilibrium positions and the coupled equa-

tions of motions are solved in lowest order, neglecting

higher order non-linear couplings [20, 46]. The results of

this calculation for ions with diﬀerent mass ratios µ and

diﬀerent -parameters are given by:

1 + µ − 1 − µ + µ2

ωi,z =

µ

ωz

(12)

1 + µ + 1 − µ + µ2

ωo,z =

µ

ωz

(13)

b21,z

=

1−µ 2

+ 1

1 − µ + µ2 − µ + µ2

(14)

µ + µ2 − 2 (1 + µ2) − a

ωi,x,y = −

2µ2

ωz

(15)

µ + µ2 − 2 (1 + µ2) + a

ωo,x,y = −

2µ2

ωz

b21,x,y = µ − µ2 +

2 −1 + µ2 2a

+a

(16) (17)

where the parameter

a = 4(µ2−1)2−2 2(µ−1)2µ(1+µ)+µ2(1+(µ−1)µ) (18)
was introduced. The b2 parameters calculate as b2 = 1 − b21. Figure 2 shows the calculated eigenmode am-
plitudes and frequencies in axial and radial directions. The heavier of the two ions has the largest amplitude for the mode with the lowest frequency, which is the axial in-phase mode and radial out-of-phase mode. It is worthwhile noting that the radial mode amplitudes are much more sensitive to a change in the mass ratio. As a consequence, the radial motion of the ions is nearly decoupled for ion species with mass ratios µ < 0.25 or µ > 4 for typical traps, i.e. for one mode ion 1 has a large nor-
mal mode amplitude and ion 2 has a small one,

whereas for the other mode the situation is reversed. The radial curves end at mass ratios where the radial out of phase mode frequencies reaches zero because for higher mass ratios the ion crystal turns from a linear axial conﬁguration to a linear radial conﬁguration [47, 48].
In this notation, the total energies of the two modes (i.e. kinetic + potential energy) along one direction (valid for radial and axial directions) are given by

Ei

=

1 2

m1zi2

ωi2

and

(19)

Eo

=

1 2

m1zo2

ωo2.

(20)

III. COOLING LIMITS

A. Doppler cooling of an isolated system

In the following, we will brieﬂy outline the usual derivation of the Doppler cooling limit [49–51], before expanding the model to take into account an additional heating rate in the next section. The model diﬀers from the standard derivation in so far as it takes into account the modal structure of the two-ion crystal right from the beginning.
Doppler cooling of all modes is achieved by exposing ion 1 to laser radiation of intensity I and an angular frequency ω = ω0 + ∆ detuned by ∆ from ion 1’s cooling transition with angular frequency ω0, FWHM linewidth Γ and saturation intensity I0. The k-vector of the radiation is given by k = (lx, ly, lz)k = (lx, ly, lz)ω0/c with the unit vector (lx, ly, lz).
Every scattering event of the radiation with the cooling ion will on average change the momentum of the system by h¯k. Due to the red detuning (∆ < 0) of the cooling light this is more likely to happen when the cooling ion moves towards the laser such that on average energy is removed from the ion crystal. The average energy loss rate can be calculated by averaging the momentum change over the periods of both oscillatory modes in each direction. For suﬃciently cold ions (|lxkq˙1| Γ) in the weak bi-
nding regime (Γ ωi,o), these can (exemplarily in the x-direction) be shown to be (see Appendix A)

dEi dt

cool

≈

¯hlx2 k2

I I0

(1

+

2∆/Γ I/I0 + (2∆/Γ)2)2

zi2b21ωi2

(21)

dEo dt

cool

≈

¯hlx2 k2

I I0

(1

+

2∆/Γ I/I0 + (2∆/Γ)2)2

zo2b22ωo2.

(22)

The competing heating rate (considering the statistical distribution of the momentum changes due to both the absorption and the spontaneous emission of the cooling

4

Axial

Radial

1.0

1.0

Mode Parameter b12

0.8

0.8

0.6

0.6

0.4

0.4

0.2

0.2

Modal Frequencies ωi,o/ωz

0.0 0.2
4

0.5

1.0

2.0

3

ωo

2

1
ωi

0

0.2

0.5

1.0

2.0

0.0

5.0 10.0

0.2

14

0.5

1.0

2.0

12

ωi

10

8

6

4 ωo 2

0

5.0 10.0

0.2

Mass Ratio μ

0.5

1.0

2.0

5.0 ε2 =
3/2 3 6 9

10.0

5.0 10.0

FIG. 2. Normal mode frequencies and normalized amplitudes for a two-ion two-species crystal. The square of the normalized amplitude (b21) and the in-phase (ωi) and out-of-phase (ωo) trap frequencies normalized to the axial trap frequency of a single
ion of mass m1 are shown for the axial and radial direction for diﬀerent mass ratios µ = m2/m1 and -parameters.

photons) is given by (see Appendix A)

dEi dt

heat

≈

¯h2(3lx2

+

1)k2

I I0

Γ 12m1

1

+

I /I0

b21 +

(2∆/Γ)2

(23)

dEo dt

heat

≈

¯h2(3lx2

+

1)k2

I I0

Γ 12m1

1

+

I /I0

b22 +

(2∆/Γ)2

.

(24)

The cooling rate is a function of the ion’s scattering rate and proportional to the square of the k-vector component (lx2) of the cooling light along the considered mode direction, times the square of the motional amplitude of the cooling ion for that mode (zi2b21, zo2b22). In contrast, the heating rate has a component from the isotropic photon emission in addition to directed absorption from the cooling laser beam.
The steady state solution is obtained from a balance between cooling and heating rates

dEi,o

+ dEi,o

= 0.

dt heat

dt cool

(25)

The resulting cooling limit can be expressed as

Elimit

=

¯h(4∆2

+ Γ2(1 + I/I0))(1 48|∆|lx2

+ 3lx2)

(26)

for both modes. The cooling limit is independent of the mode eigenvectors b1,2 since the heating and cooling processes act in the same way on the motion of the ion crystal. As a consequence, modes with a small eigenvector component experience cooling and heating rates that are reduced by the same amount and will limit the time it takes to reach the steady-state temperature (see section IV). In the case of very low cooling intensity (I/I0 → 0), optimum detuning (∆ = −Γ/2) and a laser th√at cools al-
l directions symmetrically (lx = ly = lz = 1/ 3), this results in the well known Doppler cooling limit

ED = h¯Γ/2.

(27)

Very low cooling intensity leads to the lowest theoretical cooling limit at the expense of long cooling times, since the cooling rate gets very small. In practice, cooling intensities close to the saturation intensity are typically used. A larger cooling rate renders the system more robust if exposed to additional external heating. The maximum cooling rate is achieved at I = 2I0 and ∆ = −Γ/2.

5

3.0

2.5 ║mode
2.0

other modes

limit E [ħΓ]

1.5

1.0

0.5

1/√3

0.0

0.2

0.4

0.6

0.8

1.0

k║/ktotal

FIG. 3. Dependence of the cooling limits on the angle of the cooling laser. k /ktotal denotes the component of the laser radiation parallel to the investigated axis. The other two axes are assumed to be cooled equally.

However, this choice of parameters increases the cooling limit by a factor 2.
Aligning the cooling beam along the direction of a particular set of modes, cooling below the Doppler-cooling limit given by Eq. (27) in this direction is possible. However, the cooling limit in the other directions will be strongly increased as can be seen in Fig. 3 and has been discussed in [52]. This is a direct consequence of the cooling rate of a speciﬁc mode being dependent only on the k-vector projection along this direction, whereas the heating rate has a contribution from the isotropic sp-
ontaneous emission heating.
Precision spectroscopy and atomic frequency standards based on trapped ions require small kinetic energies to achieve small second-order Doppler shifts, which is particularly important for light ions such as 27Al+. This shift is given by [53]

∆ν

v2

ν = − 2c2 ,

(28)

where v2 is the average value of the square of the ion’s velocity and c is the speed of light. This relation allows a direct mapping between cooling limits and corresponding relativistic Doppler shifts. In the absence of external heating rates, both ions will have the same energy given by Eq. (27) and the second-order Doppler shift of the clock ion is

∆ν

¯hΓ

ν = − 4m2c2 .

(29)

In the case of 27Al+ sympathetically cooled by 40Ca+, this results in shifts of 9.2 × 10−19 for each of the three directions. For the radial modes, this number has to be multiplied by a factor of roughly 2 (see Appendix B) to account for the kinetic energy in the intrinsic micromotion of the radial motion of the clock ion which follows from generalisation of the results of [54]. The only inﬂuence the selected cooling ion species has on this result is

the linewidth of its cooling transition. Furthermore, the mass ratio determines the time it takes to reach steady state, but has no inﬂuence on the cooling limit. This changes as soon as external heating rates are included in the model.

B. Doppler cooling with external heating rates

External heating rates of cooled ion crystals are assumed to be mostly due to stochastic electric ﬁeld ﬂuctuations [41, 43, 55, 56]. If the characteristic distance between the electrodes and the ions is much larger than the distance between the ions in the crystal, the electric ﬁeld across the ion crystal can be assumed constant and the heating rate due to ﬁeld ﬂuctuations can be written as [36]:

dEi

= q2SE

dt ﬂuct 4m1

dEo

= q2SE

dt ﬂuct 4m1

1

2

b1 + √µ b2

1

2

b2 − √µ b1 .

(30) (31)

Here SE = SE(ω) denotes the electric ﬁeld spectral density, which is assumed to be spectrally constant for the relevant ωi,o. The homogeneous ﬁeld ﬂuctuations will only couple to centre of mass motion and therefore much more strongly to the in-phase mode than the outof-phase mode. In fact for µ = 1 it follows that b1 = b2 and the out-of-phase mode is not heated at all. The total energy injected in one direction of motion is obtained by adding the in-phase and out-of-phase heating rates, which turn-
s out to be proportional to m−1 1 + m−2 1, showing the advantage of heavy cooling and clock ions.
The cooling limit in the presence of external heating is obtained by including the heating rates Eq. (30) and Eq. (31) in the steady state condition Eq. (25). The steady state energy limit for the in-phase mode (substitute b1 by b2 and b2 by −b1 for the out-of-phase-mode) is given by:

Γ Elimit,i =

1 + (2∆/Γ)2 + I/I0 48|∆|¯hI /I0 lx2 k2

2
×

Γh¯2I/I0(3lx2 + 1)k2 1 + (2∆/Γ)2 + I/I0

+

3 b21 (b1

+

1 √µ

b2

)2

q2SE

(32)

The additional heating modiﬁes the steady state solution for Doppler cooling (Eq. (26)) by breaking the symmetry between cooling and heating processes: The photoninduced heating and cooling rates have the same dependence on the mode amplitudes, resulting in a Doppler limit independent of this parameter. The external heating rate has no cooling component and a more complex dependence on the mode amplitudes, resulting in a cooling limit that is a sensitive function of the modal amplitudes and theref-
ore the and µ parameters. As a result,

6

modes where the cooling ion has a large relative ampli-

tude are cooled more eﬃciently than modes where it has

a small amplitude.

The two terms in the square bracket in Eq. (32) give

the contribution of the photon and the external heating

rate to the total heating rate, respectively. It is instruc-

tive to investigate the two extreme cases, in which either

one of the contributions dominate. Deﬁning an electric ﬁeld spectral density SE0 = Γ¯h2k2/12q2 [57] for which

the two heating rates in a symmetric (µ = 1) ion cry√stal

and symmetric cooling in all three directions (lx = 1/ 3)

equal

dEi dt ﬂuct

=

dEi dt

heat

(∆

=

−Γ/2, I

=

2I0),

the

two

cases are

1. SE SE0: In this case the photon heating rate at the point of maximum cooling is much larger than the external heating and the latter can therefore be neglected. By choosing the intensity 0 < I/I0 < 2 optimally, the cooling limit of Eq. (26) is recovered:

¯hΓ/2 < Elimit < ¯hΓ

(33)

2. SE SE0: In this regime the photon heating rate can be neglected and the cooling limit will proportionally depend upon the electric ﬁeld spectral density and the mode amplitudes. Here the optimum intensity is that of maximum cooling rates (I = 2I0).

Elimit,i

=

q2SE(b1 +

√1µ b2)2Γ 1 + (2∆/Γ)2 + I/I0 16b21 |∆|¯hlx2 k2 I /I0

2

(34)

Elimit,o

=

q2SE(b2 −

√1µ b1)2Γ 1 + (2∆/Γ)2 + I/I0 16b22 |∆|¯hlx2 k2 I /I0

2

(35)

In both regimes the best cooling performance is always achieved at a detuning of ∆ = −Γ/2. In the remainder of this paper we will look at external heating rates of up to SE = 0.2SE0 that are typical for macroscopic ion traps.
For the evaluation of the second-order Doppler shift due to motion along one spatial direction, it is not the total kinetic energy in a certain mode that is of interest, but rather the total kinetic energy in the secular motion of the clock/spectroscopy ion. This energy is given by the sum of the energies in both modes along that spatial axis, weighed by the relative fraction of clock ion energy to the total energy in the respective mode:

Ec = b22Ei + b21Eo .

(36)

Figure 4 shows a plot of Ec as a function of the mass ratio µ for axial motion. The y-axis is normalised to the energy of the clock ion at the Doppler-cooling limit without external heating and the electric ﬁeld spectral densities SE are given as multiples of SE0. In this ﬁgure, the intensity was optimised for each data point to

Secular clock ion energy Ec/ED

2.0

SE/SE0 =

1.8

0.020

0.002

0.010

0.001

1.6

0.005

0.000

1.4

1.2

1.0

Yb+

Sr+

Ca+ Mg+

Be+

0.1 0.2

0.5 1.0 2.0

5.0

Mass Ratio µ

10.0

FIG. 4. Normalized axial clock ion energy plotted against the mass ratio µ of the ion crystal. The energy Ec of the clock ion is the sum of the clock ion energy in both modes. The calculations were performed for varying electric ﬁeld spectral densities SE. The cooling laser intensity I/I0 has been optimized for each value of SE. The dashed lines show diﬀerent logic ion species for an Al+ clock.

achieve the lowest energy in the clock ion. The minimal clock ion energy for diﬀerent electric ﬁeld heating rates is always achieved at a mass ratio of µ = 8/11. This plot is independent of Γ and the actual values of m1, m2. However, the normalization factor and therefore the absolute value for the cooling limit depends on the linewidth of the cooling ion. This doubles all cooling limits for Mg+ with respect to all other ions, owing to its twice as large cooling transition linewidth compared to th-
e other ions. The ﬁgure shows that the axial clock ion kinetic energy is only a weak function of the mass ratio. This is a direct consequence of the weak dependence of the axial mode amplitudes on this parameter, as shown in Fig. 2.
Figure 5 shows the normalized clock ion energies in one of the radial directions for varying mass ratios and different parameters, assuming a radially symmetric trap (α = 1/2). The stated is always that of a single clock ion in the trap. The shaded regions in the graphs show the areas in which the crystal is not stable (see III) and hence can be ignored. The graphs show that mass ratios slightly larger than 1 always result in the lowest possible clock ion kinetic energy. For a given mass ratio, th-
e energy of the clock ion in the presence of external heating is lowest when operating the trap close to instability of the linear axial conﬁguration. The reason for this is that the larger the radial conﬁnement, the more the modal amplitude in the radial modes tend towards b1 ≈ 1, b2 ≈ 0 or vice versa (see Eq. (17) and Fig. 2). In that case, the mode with negligible motion of the cooling ion will cool very poorly, leading to an elevated steady state temperature in the presence of external ﬁelds. -
In this regime, the comparison of Fig. 4 and 5 (the y-axes are normalised to the same energies) shows that the heating-induced radial clock ion energy is larger than the axial clock ion energy and will therefore dominate the clock frequency shifts.

Radial secular clock ion energy Ec/ED Total clock ion Energy E/ED

7

4.0

4.0

SE/SE0 =

3.5

0.020

0.002

3.5

0.010

0.001

3.0

3.0

0.005

0.000

2.5

2.5

2.0

2.0

1.5
0.1 0.2 4.0

0.5 1.0 2.0

1.5

ε = 2 Clock

3/2

5.0 10.0 0.1 0.2 4.0

0.5 1.0 2.0

ε = 2 Clock

3

5.0 10.0

3.5

3.5

3.0

3.0

2.5

2.5

2.0

2.0

1.5 0.1 0.2

0.5 1.0 2.0

1.5

ε2 Clock

=

6

5.0 10.0 0.1 0.2 Mass Ratio µ

0.5 1.0 2.0

ε2 Clock

=

9

5.0 10.0

FIG. 5. Normalized radial clock ion energy plotted against the mass ratio µ of the ion crystal for radial modes. The energy Ec of the clock ion is the sum of the clock ion energy in both radial modes. The shaded region indicates parameters for which the ion crystal is no longer linear in axial direction. The cooling laser intensity I/I0 been optimized for each value of SE.

Choosing an parameter close to the instability regime improves the cooling limits, but at the same time increases the intrinsic micromotion amplitude of the radial modes (see Appendix B). Fig. 6 shows the normalized total kinetic energy (equal to the sum of secular and micromotion kinetic energy) of the clock ion in an ion crystal that has been cooled to the Doppler cooling limit (i.e. without external heating) plotted against the crystal mass ratio.
Since the micromotion kinetic energy contributes to the second-order Doppler shift in the same way the secular energy does, it is not advisable to perform spectroscopy in a trap operating close to the unstable regime. The operation in a trap with very strong radial conﬁnement is equally bad because of the ineﬃcient cooling of the weakly damped radial mode. For best cooling performance it is therefore advisable to optimise the parameter according to the observed heating rate in the trap.
A comparison of the total second-order Doppler shift (including the scaling factors due to micromotion for the radial modes) in a linear ion trap for Al+/X+-ion crystals with diﬀerent possible cooling ions X+ is shown in Fig. 7. The y-axis gives the normalised electric ﬁeld spectral density SE/SE0,Ca [57]. A value of SE/SE0 = 0.02 cor-

8

ε = 2 clock

3/2

9

6

3

∞

6

4

2

0.2

0.5 1.0 2.0

5.0 10.0

Mass Ratio μ

FIG. 6. Total clock ion energy (secular energy + micromotion energy) of a clock ion in a Doppler cooled crystal along one radial direction. Here the mass ratio µ and the -parameters were varied and the energy was normalised to the Doppler cooling energy ED. The absence of external heating was assumed. Due to large micromotion contributions the total energy diverges at the points where the crystal becomes instable.

responds to a radial heating rate of a single Ca+ ion in a trap with radial trap frequencies of 2.5 MHz of roughly 1500 quanta per second and can be regarded as an upper

8

limit for most ion traps used for spectroscopy. The 2 value as well as the Doppler laser detuning ∆ and intensity I/I0 were optimised for each value of SE.
The graph shows that an Al+/Mg+ crystal suﬀers the least from external heating since its mass ratio is very close to 1. However, for traps with fairly low heating rates, the Doppler shift in Al+/Ca+ and Al+/Be+ traps will be lower than that of Mg+-systems because the linewidth of the cooling transition of Mg+-ions is approximately a factor of 2 larger than that of Ca+ and Be+-ions. The two other species Yb+ and Sr+ suﬀer from their small mass ratios and require traps with very small heating rates -
to reach comparable performance.
At this point it should be noted, that not the absolute value of the Doppler shift, but rather its uncertainty is relevant for the clock performance. However, since this uncertainty can be assumed to scale with the absolute shift, a reduction of the latter will result in a reduction of the former and therefore lead to better clock performance. If Doppler cooling is turned oﬀ during spectroscopy, careful modelling or measurement of the heating process is required to establish the uncertainty.

IV. COOLING TIMES

An atomic clock will reach it’s maximum performance in terms of stability, if the clock transition is probed without any dead time between consecutive readings [58–60]. One contribution to the dead time is the time it takes to cool the ion crystal in case a collision with a hot background gas particle occurred. The large energy transfer to the ion crystal leads to typical temperatures on the order of room temperature, resulting in the decrystallization of the ion crystal. As a consequence, it is n-
ecessary to take the non-linear contributions of the Coulomb forces into account to evaluate the cooling dynamics at these high temperatures. The nonlinearities are usually neglected in the small oscillation approximation used to describe the low temperature dynamics of the system that we have used in the previous sections. The dynamics of small ion crystals during laser cooling in various temperature regimes have ﬁrst been studied in the context of phase-transitions and chaos theory [61, 62].
Here, we numerically solved the equations of motion resulting from the complete ponderomotive two ion potential

1 V (x1, y1, z1, x2, y2, z2) = 2 m1

ωx21x21 + ωy21y12 + ωz21z12

1 + 2 m2

ωx22x22 + ωy22y22 + ωz22z22

e2

1

+

, (37)

4π 0 (x1 − x2)2 + (y1 − y2)2 + (z1 − z2)2

where ωkj is the trap frequency of ion j in direction k ∈ x, y, z. and kj are the position coordinates. For the simulations, the RF potential was neglected. However, we

expect only minor modiﬁcations to the results presented here when micromotion is included in the treatment [63]. We used an adaptive Runge-Kutta method where the step size was reduced signiﬁcantly every time the ions got close enough to explore the high non-linearities of the 1/r-Coulomb potential. Cooling was incorporated into the calculation by multiplying the instantaneous scattering rate R at every time step with the instantaneous step size dt at the same step and comparing the resulting value-
 with a random number rn(0, 1) between 0 and 1 from a ”Mersenne Twister”-type pseudo random number generator [64]. A scattering event that changed the velocity v1 of the cooling ion according to the momentum change due to both absorption and spontaneous emission was therefore calculated whenever the condition

R dt

=

Γ 2 1+

I /I0

I /I0 + (2(∆ − k ·

v1)/Γ)2 dt

<

rn(0, 1).

(38)

was fulﬁlled.

With a small enough step size the simulation turned

out to be very robust and reproduced two-ion cooling lim-

its as well as theoretical curves for the cooling duration

of single ions (e.g. [65]).

A typical collision event with the background gas will

be an elastic collision of a hydrogen molecule with either

one of the two cold ions in the crystal. The maximum en-

ergy that can be transmitted in an elastic collision of two

particles with masses m1, m2 if one of them is initially at

rest

is

given

by

4m1 m2 (m1 +m2 )2

times

the

kinetic

energy

of

the

hot particle. In case of the collision of a cold aluminium

ion and a hydrogen molecule at 300 K this means that

a maximum energy of ≈ 0.26 × 3/2kB × 300 K can be transferred to the aluminium ion. Here kB denotes the Boltzmann constant. This corresponds to a temperature

of the ion crystal of ≈ 19.3 K. Cooling an ion crystal

from these high temperatures is aided by adding a far

detuned laser beam additionally to the standard cooling

beam at ∆ = −Γ/2. This enhances the scattering rate of

the rapidly moving cooling ion with large Doppler detun-

ing. The optimum detuning of the second laser was found

by simulating the cooling time for an aluminium/calcium

ion pair starting at a temperature of 19.3 K as a function

of the detuning. The results are shown in Fig. 8.

Both lasers were assumed to be directed onto the ion

from the (1, 1, 1) direction and both had one saturation

intensity at the position of the ion. To compare the per-

formance of the diﬀerent detunings, the time to reach a

crystal energy of 1000 Doppler cooling limits was simu-

lated. This energy roughly corresponds to the energy at

which the ions crystallize. Fastest cooling was achieved

at a detuning of ∼-100 MHz. This optimum detuning of

the second laser beam proved to be very robust against

changes in the cooling parameters, such as a change in

linewidth of the cooling transition, the intensity of the

cooling laser, or the mass of the cooling ion. Since

these changes mostly aﬀect the scattering rate, the times

needed to cool vary strongly. The general characteris-

Al+/Ca+ optimum intensity I/I0

Al+ second order Doppler shift Δω/ω

Al+/Ca+ optimum ε- parameter

×10-17

4

0.8

Yb+

Sr+

3

Ca+

0.6

Mg+

2

Be+

0.4

1

0.2

9
3.0 2.0 1.0

0.000

0.005

0.010

0.015

0.020

0.000

0.005

Normalised Electric Field Spectral Density SE/SE0

0.010

0.015

0.020

FIG. 7. Comparison of secular motion-induced second-order Doppler shifts for Al+/X+-crystals with diﬀerent cooling ions X+ ={Be+, Mg+, Ca+, Sr+, Yb+} in the presence of external heating with an electric ﬁeld spectral density of SE. The right Figure shows the parameters and I/I0 for best cooling performance for an Al+/Ca+-crystal. Those optimum parmaters for
a spectral energy density of S = 0.005SE0 are given by 2.63, 0.40,3.17, 0.05,1.12, 0.87 and 1.04, 1.61 for the Be, Mg, Sr and Yb
crystals, respectively.

0.04

0.03 0.02

Ca+/Al+ Γ=½ΓCa Γ=2ΓCa I=½I0 I=2I0 mCa=27

Time to cool to 1000 ED [s]

0.01

0

50

100

150

200

250

300

350

400

450

500

Detuning of the second laser [MHz]

FIG. 8. Time needed to cool an Al+/Ca+-ion pair from 19.3 K to 1000 Doppler limits. The y-axis shows the detuning of a second laser at saturation intensity that is cooling the ion crystal in addition to the standard −Γ/2-detuned beam.

tics of the curve with the minimum close to -100 MHz, however, stays the same. This can be explained by the fact that in a well-thermalized regime, the cooling ion will carry half the crystal energy and the optimal detuning should only depend on the average cooling ion velocity in the direction of the incoming laser. This is independent of the transition linewidth or the intensity of the cooling light. The change of mass of the cooling ion to smaller values shifts the optimal detuning to slightly

higher values. This is because a lighter cooling ion has higher average velocities if it has the same energy as a heavier ion.
The diﬀerence in cooling dynamics between a twoand a single-ion system is shown in Fig. 9. Besides the Al+/Ca+ pair, the results for a single Ca+ ion in the trap with the second laser detuned by 140 MHz is shown. This slightly higher optimum detuning arises, since a single ion will on average have higher velocities than the cool-

10

ing ion in a two-ion system since the latter can exchange energy with the clock ion. For the simulation, the starting energy of the single Ca+ ion was set to the same value as that of the two-ion pair, although a collision with a hydrogen molecule would lead to a lower initial temperature.
The cooling rates match extraordinarily well at the beginning of the cooling process. This is because in the high temperature regime the two ions in the crystal collide very often so that all motional modes are thermalized almost instantly. Therefore no poorly cooled modes exist that would decrease the cooling rates. However, as soon as the ion pair crystallises (around 7 ms), no collisions thermalize the modes and the cooling rate decreases signiﬁcantly owing to the weakly damped radial modes (se-
e inset in Figure 9). The crystallisation eﬀect can be visualised by plotting the energy of the Ca+ and Al+ separately over the cooling time, as shown in the inset of Figure 9. Once crystallisation occurs, the energy exchange between the motional modes of the two ions is prohibited and the cooling rate is determined by the mode amplitudes of the cooling ion (for a theoretical description of the crystallisation see for example [62] for a measurement of the damping of the weakly damped modes see the-
 supplementary material of [16]).
Summarizing the simulation results of Fig. 8 and 9, an optimum cooling strategy after a background gas collision can be derived: The fastest cooling is achieved by ramping the laser detuning according to the actual energy of the ion crystal, such that maximal scattering rates are maintained. Additionally, the intensity of the cooling laser should be large to increase the rates even further. Once crystallization occurs, the laser should be ramped to a detuning and an intensity for which the lowest -
energies are achieved (typically ∆ ≈ Γ/2, I ∼ I0).
In our simulations the time needed to cool an Al+/Ca+-crystal to 2 Doppler-Cooling limits is roughly 90 ms (which corresponds well to previous studies [66, 67]) while the time it takes to reach crystallisation is only 7 ms. A possibility to reduce the ﬁnal cooling time is to couple the well-damped to the poorly-damped modes by a static radial electric ﬁeld as has been demonstrated in [16]. Even without such a scheme, a Doppler cooling time of < 100 ms corresponds to less then one measurement cycle-
 in state of the art quantum logic clocks (i.e. cycle time 230 ms [17]) and since such a random collision should only occur roughly every 100 s in a good vacuum environment, its contribution to the total dead time will be insigniﬁcant compared to dead times due to detection and state preparation. However, it seems necessary that the collision events are detected and actions are taken to ensure fast recrystallization, since the typical Doppler cooling time used in single ion experiments are on the -
order of ms, which will not be suﬃcient to cool the crystal to its cooling limit.

V. SUMMARY
In this paper we examined the steady state sympathetic cooling limits with and without external heating of diﬀerent two-ion two-species ion crystals with an emphasis on second-order Doppler shifts that pose a limit to precision spectroscopy. We ﬁnd that in the absence of external heating the Doppler cooling limit can be reached in all six normal modes of the ion crystal, independent of the mass ratio between the two ions. However, with additional external heating, the cooling limit becomes a sensi-
tive function of the normal mode amplitudes. The modes where the cooling ion has a large amplitude are cooled most eﬃciently and reach a low cooling temperature. We ﬁnd that operating the trap close to instability with respect to a ﬂip of the linear-axial to the linearradial orientation enhances the amplitudes of the critical radial modes. This eﬀect has to be balanced with the increased micromotion in this regime. Speciﬁcally, we ﬁnd that three logic ion species candidates, 25Mg+, 9Be+ and 40Ca+,-
 are most suitable as sympathetic cooling ions for an aluminium ion clock, even in the presence of moderate external heating rates. The former is a good choice because its mass ratio relative to aluminium is close to one which means that no poorly-damped modes exist that would make the crystal vulnerable to high external heating rates. The latter two have a cooling transition with a smaller linewidth than the 25Mg+-transition resulting in lower Doppler-limits and therefore lower second-order Doppl-
er shifts. For traps with very low heating rates, even heavier sympathetic cooling ions, such as 88Sr+ will perform well. Furthermore, we investigated the cooling time of the 40Ca+/27Al+ unequal mass ion crystal after a collision with background gas. Monte-Carlo cooling simulations taking into account the ponderomotive trap potentials and the Coulomb-potentials revealed cooling times of roughly 100 ms, which would not pose a limitation for the clock stability. However, these events should be detec-
ted immediately and counteracted by applying a second (further detuned) laser beam for rapid recrystallization. We therefore believe that an 40Ca+/27Al+ quantum logic clock will lead to a similar clock performance as 25Mg+/27Al+ clocks and might even outperform them in terms of second-order Doppler shifts for iontraps with low heating rates. Furthermore, the presented results are relevant for high precision spectroscopy of other sympathetically cooled ion species, such as highlycharged or molecula-
r ions.
Appendix A: Derivation of the Cooling and Heating Rates
The cooling rate of a two-ion crystal mode can be calculated by determining the energy change in this mode for every scattering event. According to Eq. (19) the energy change in an in-phase mode (analogously for outof-phase modes) with modal amplitudes zi before and zi

10-21 10-22 10-23 10-24

11

10-22
10-24
10-26 0

Al+

Ca+

0.005

0.010

0.015

Energy in the Ion crystal [J]

10-25

10-26 0

0.02

0.04

0.06

0.08

0.10

Time after beginning of Cooling [s]

FIG. 9. Cooling evolution of an Al+/Ca+ ion pair after a collision event with an H2-molecule (blue line). The red line shows the cooling evolution of a single Ca+ ion in the same trap with the same initial energy. The horizontal dotted lines denote
the Doppler cooling limit and the inset shows the energies of the calcium and aluminium ion before and after crystallisation
occured at around 7 ms.

after the absorption of a cooling photon is given by

∆Ei

=

1 2

m1

ωi2

zi2 − zi2

.

(A1)

zi can be calculated by expressing the modal amplitude zi as a function of the positions q1, q2 and velocities v1 =
q˙1, v2 = q˙2 along the axis of the relevant modes of the
two ions before the absorption

zi =

√ ( µb2v2

+

b1v1)2

+

ωi2(√µb2z2

+

b1z1)2

ωi2

(A2)

and then adding the velocity change dv = lx¯hk/m1 (exemplarily for the x-direction) to the cooling ion velocity

zi =

√ ( µb2v2

+

b1(v1

+

dv))2 ωi2

+

ωi2(√µb2z2

+

b1z1)2

.

(A3)

Substituting these equations into Eq. (A1) ∆Ei gives

∆Ei

=

1 2

m1b21dv2

+ m1b1dv(b1v1

√ + µb2v2)

=

1 2

m1b21dv2

+ m1b1dvωizi

cos (ωit

+ φi).

(A4) (A5)

The ﬁrst term of this equation is a constant heating

that is taken care of in the heating rate. The sec-

ond term corresponds to mode cooling if cos (ωit + φi)

is negative and heating if it is positive. The rate R

at which scattering events occur is given by Eq. (38).

The cooling rate is computed by averaging the product

R

×

(∆Ei

−

1 2

m1b21dv2

)

over

the

oscillation

periods

of

all

six crystal modes

dEi

=

dt Cooling

2π
1

(2π)6
0

R(∆Ei

−

1 2

m1

b21dv2

)d3φi

d3φo.

(A6)

The integration over all six modes is necessary because

the scattering rate depends on the product k · v1 and therefore on the cooling ion velocity in all three spatial

dimensions. This integral cannot be solved in general but

for cold crystals, where |kv1| Γ in all three dimensions,

the integrand can be expanded and higher order terms

in kv1/Γ can be neglected, leading to Eq. (21).

The heating rate computes similarly by averaging the

product

R

×

1 2

m1b21dv2

over

the

six

modes

which

leads

in

ﬁrst order to a velocity independent term

¯h2 3lx2 k2

I I0

Γ 12m1

1

+

I /I0

b21 +

(2∆/Γ)2

.

(A7)

To this heating due to the absorption of the photons one has to add a contribution of the spontaneous emission. This is exactly as large as the absorption eﬀect but does not depend on the direction of the cooling laser. Assuming an isotropic emission it is given by

¯h2k2

I I0

Γ 12m1

1

+

I /I0

b21 +

(2∆/Γ)2

(A8)

so that the sum of Eq. (A7) and (A8) gives the total heating rate as in Eq. (23).

12

Appendix B: Doppler Shift Contribution of Intrinsic Micromotion

To calculate the amplitude of the micromotion in the radial modes of the two-ion crystal, we generalize the derivation for single ions given in [54]. The force on a single ion in radial direction (we exemplarily us the xdirection in the following) is given by

Fx

=

−∂xeΦ(x, y, z, t)

=

2xα

eU0 d2

−

x

eV0 R2

cos Ωtt

(B1)

where Φ(x, y, z, t) from Eq. (1) was used. In two-ion crystals an additional force arises due to the Coulomb potential UC between the two ions

UC (x1, x2, y1, y2, z1, z2) =

e2

1

.

4π 0 (x1 − x2)2 + (y1 − y2)2 + (z1 − z2)2

(B2)

The Coulomb-force in x-direction is given by

FC,x = −∂xUC (x1, x2, y1, y2, z1, z2) =

e2 4π 0

1 (x1 − x2)2 + (y1 − y2)2 + (z1 − z2)23 (x1 − x2).
(B3)

We now assume that the ion crystal is cold enough so

that the ions oscillate with small amplitudes around their

equilibrium positions x(10) = (0, 0, z0), x(20) = (0, 0, −z0)

where z0 =

ed2 32U0π 0

1/3
(see for example [35]). Linearis-

ing of Eq. (B3) in (x1 − x2) around x(10), x(20) gives

e2 FC,x ≈ 4π 0

1 (2z0)23 (x1

−

x2)

=

eU0 d2

(x1

−

x2).

(B4)

If we now consider only a single mode (i.e. the in-phase or the out-of-phase mode), we can write the x-motion of the second ion as a constant factor β times the motion of the ﬁrst ion

x2 = βx1

(B5)

√

√

where β = b2/( µb1) for in-phase and β = −b1/( µb2)

for out-of-phase modes as follows from Eq. (10) and (11).

Replacing x2 in Eq. (B4) and adding the Coulombforce to the force due to trap potentials, the total force

Gx on the ion is given by

Gx

=

Fx

+

FC,x

=

x1

eU0 d2

(2α

+

1

−

β)

−

x1

eV0 R2

cos

Ωtt.

(B6)

Introducing

the

ax

=

− 8αeU0
m1 d2 Ω2T

and qx =

2eV0 m1 R2 Ω2

as in

[54], the equation of motion for x1 can be given in typical

Mathieu form

x¨1 +

ax

1−β 1+
2α

+ 2qx cos (ΩT t)

Ω2T 4

x1

=

0.

(B7)

Compared to the equation of motion for a single ion

(x¨1

+

(ax

+

2qx

cos

(ΩT

t))

Ω2T 4

x1

=

0),

the

only

diﬀerence

is that the ax is varied by a factor (1+(1−β)/(2α)) in the

case of a two-ion crystal mode. Accordingly the ﬁrst or-

der solution [68] (valid for qx 1, ax(1+(1−β)/(2α)) 1) of the single ion equation is still valid, if that factor is

included:

x1(t) ≈ xib1 sin ωx,it + φx,i

1

+

qx 2

cos(ΩT t)

(B8)

In this equation the amplitude xib1 of the oscillation was already chosen to comply with Eq. (10). ωx,i denotes the in-phase mode frequency and is given by

1 ωx,i = 2 ΩT

ax(1

+

(1

−

β)/(2α))

+

1 2

qx2

.

(B9)

The average squared velocity of this motion is given by

<

x˙ 21

>

=

1 2

(xib1)2

ωx2,i

+

1 8

qx2 Ω2

=

1 2

(xib1)2ωx2,i

=

1 2

(xib1)2ωx2,i

1

+

qx2

+

qx2 2ax(1

+

1−β 2α

)

22 1 + 2 2 − 2α − (1 − β)

(B10)

where in the last step the qx and ax were substituted

by the

2

=

−αqx2 2ax

factor

that

is

used

throughout

this

paper. Equation B10 shows that for the radial modes the

average squared velocity is not just given by the secular

motion but that a micromotion term of the same order

of magnitude has to be considered as well. For strong

radial conﬁnement 2 1, the micromotion contribution

approximately equals the contribution from the secular

motion. However, for weak conﬁnement, it can become

much larger.

Figure 10 shows a plot of the relative kinetic energy of the micromotion of the clock ion compared to its secular energy for one pair of radial modes and for diﬀerent -parameters (again the stated is that of a single clock ion) in the absence of external heating. The graph shows that the out-of-phase fractional micromotion energy contribution can get very large, when the trap is operated close to the instability limit.

The micromotion contribution factor for the second ion (which is in this paper the clock ion and therefore the interesting one), can be calculated identically but
the 2 = m1/m2 and β2 = 1/β parameters for the second ion have to be used. Expressed in terms of the
and b1, b2 parameters, the average squared velocity of

13

Clock ion micromotion energy Mi,2 E /Ei,2 Clock ion micromotion energy Mo,2 E /Eo,2

In Phase

Out of Phase

2.0

30

ε = 2 clock

3/2

25

ε = 2 clock 3/2

1.5

3

3

6

20

6

9

9

1.0

∞

15

∞

10 0.5
5

0.0

0

0.2

0.5 1.0 2.0

5.0 10.0

0.2

0.5 1.0 2.0

5.0 10.0

Mass Ratio μ

Mass Ratio μ

FIG. 10. Relative micromotion energy of the clock ion in the in-phase and out-of-phase radial modes. The energy is normalised to the secular energy of the clock ion in the respective mode. In this graph the absence of external heating was assumed. The dashed lines denote the asymptotic behaviour for very large radial conﬁnement ( → ∞).

the clock ion is therefore given by

<

x˙ 22,i

>

=

1 2µ

(xib2)2ωx2,i

1+ 2

2 2/µ 2/µ−2α−(1−√µb1/b2)

(B11)

<

x˙ 22,o

>

=

1 2µ

(xob1)2ωx2,o

1+ 2

2 2/µ 2/µ−2α−(1+√µb2/b1)

(B12)

for the in-phase and out-of-phase mode, respectively.

[1] D. Kielpinski, C. Monroe, and D. J. Wineland, Nature 417, 709 (2002).
[2] J. P. Home, M. J. McDonnell, D. J. Szwer, B. C. Keitch, D. M. Lucas, D. N. Stacey, and A. M. Steane, Phys. Rev. A 79, 050305 (2009).
[3] J. P. Home, D. Hanneke, J. D. Jost, J. M. Amini, D. Leibfried, and D. J. Wineland, Science 325, 1227 (2009).
[4] S. Willitsch, M. T. Bell, A. D. Gingell, and T. P. Softley, Phys. Chem. Chem. Phys. 10, 7200 (2008).
[5] A. D. Gingell, M. T. Bell, J. M. Oldham, T. P. Softley, and J. N. Harvey, J. Chem. Phys. 133, 194302 (2010).
[6] P. F. Staanum, K. Højbjerre, R. Wester, and M. Drewsen, Phys. Rev. Lett. 100, 243003 (2008).
[7] H. Imajo, K. Hayasaka, R. Ohmukai, U. Tanaka, M. Watanabe, and S. Urabe, Phys. Rev. A 53, 122 (1996).
[8] B. Roth, U. Fro¨hlich, and S. Schiller, Phys. Rev. Lett. 94, 053001 (2005).
[9] T. Rosenband, P. O. Schmidt, D. B. Hume, W. M. Itano, T. M. Fortier, J. E. Stalnaker, K. Kim, S. A. Diddams, J. C. J. Koelemeij, J. C. Bergquist, et al., Phys. Rev. Lett. 98, 220801 (2007).
[10] K. Mølhave and M. Drewsen, Phys. Rev. A 62, 011401 (2000).
[11] P. Blythe, B. Roth, U. Fro¨hlich, H. Wenz, and S. Schiller,

Phys. Rev. Lett. 95, 183002 (2005). [12] B. Roth, P. Blythe, H. Daerr, L. Patacchini, and
S. Schiller, J. Phys. B 39, S1241 (2006). [13] B. Roth, J. C. J. Koelemeij, H. Daerr, and S. Schiller,
Phys. Rev. A 74, 040501 (2006). [14] D. J. Wineland, J. C. Bergquist, J. J. Bollinger, R. E.
Drullinger, and W. M. Itano, in Proceedings of the 6th Symposium on Frequency Standards and Metrology (University of St Andrews, Fife, Scotland, 2002), pp. 361–368. [15] P. O. Schmidt, T. Rosenband, C. Langer, W. M. Itano, J. C. Bergquist, and D. J. Wineland, Science 309, 749 (2005). [16] T. Rosenband et al., Science 319, 1808 (2008). [17] C. W. Chou, D. B. Hume, J. C. J. Koelemeij, D. J. Wineland, and T. Rosenband, Phys. Rev. Lett. 104, 070802 (2010). [18] S. Schiller and V. Korobov, Phys. Rev. A-
 71, 032505 (2005). [19] M. Kajita, M. Abe, M. Hada, and Y. Moriwaki, J. Phys. B 44, 025402 (2011). [20] D. J. Wineland, C. Monroe, W. M. Itano, D. Leibfried, B. E. King, and D. M. Meekhof, J. Res. Natl. Inst. Stand. Technol. 103, 259 (1998). [21] L. Gruber, J. Holder, J. Steiger, B. Beck, H. DeWitt, J. Glassman, J. McDonald, D. Church, and D. Schneider, Phys. Rev. Lett 86, 636 (2001).

14

[22] S. Schiller, Phys. Rev. Lett 98, 180801 (2007). [23] M. Drewsen, Eur. Phys. J. D 45, 125 (2007). [24] B. Hemmerling, PhD dissertation, Leibniz Universita¨t
Hannover (2011). [25] D. J. Wineland, R. E. Drullinger, and F. L. Walls, Phys.
Rev. Lett 40, 1639 (1978). [26] R. E. Drullinger, D. J. Wineland, and J. C. Bergquist,
Appl. Phys. 22, 365 (1980). [27] D. J. Larson, J. C. Bergquist, J. J. Bollinger, W. M.
Itano, and D. J. Wineland, Phys. Rev. Lett 57, 70 (1986). [28] P. Bowe, L. Hornekær, C. Brodersen, M. Drewsen, J. S.
Hangst, and J. P. Schiﬀer, Phys. Rev. Lett 82, 2071 (1999). [29] H. Rohde, S. T. Gulde, C. F. Roos, P. A. Barton, D. Leibfried, J. Eschner, F. Schmidt-Kaler, and R. Blatt, J. Opt. B 3, S34 (2001). [30] B. Blinov, L. Deslauriers, P. Lee, M. Madsen, R. Miller, and C. Monroe, Phys. Rev. A 65 (2002). [31] M. Barrett, B. DeMarco, T. Schaetz, V. Meyer, D. Leibfried, J. Britton, J. Chiaverini, W. Itano, B. Jelenkovi´c, J. Jost, et al., Phys. Rev. A 68, 042302 (2003). [32] D. J. Heinzen and D. J. Wineland-
, Phys. Rev. A 42, 2977 (1990). [33] T. Hasegawa, Phys. Rev. A 83, 053407 (2011). [34] V. A. Alekseev, D. D. Krylova, and V. S. Letokhov, Phys. Scr. 51, 368 (1995). [35] D. F. V. James, Appl. Phys. B 66, 181 (1998). [36] D. Kielpinski, B. E. King, C. J. Myatt, C. A. Sackett, Q. A. Turchette, W. M. Itano, C. Monroe, D. J. Wineland, and W. H. Zurek, Phys. Rev. A 61, 32310 (2000). [37] G. Morigi and H. Walther, Eur. Phys. J. D 13, 261 (2001). [38] T. Hasegawa and T. Shimizu, Phys. Rev. A 67 (2003). [-
39] T. Rosenband, D. B. Hume, L. Lorini, P. O. Schmidt, T. M. Fortier, S. A. Diddams, N. R. Newbury, W. C. Swann, W. H. Oskay, W. M. Itano, et al., in Proceedings of the XVIII International Conference: ICOLS 2007: Telluride, Colorado, USA, 24-29 June 2007 (2008), p. 297, ISBN 9812813195. [40] D. Leibrandt, B. Yurke, and R. Slusher, Quantum Info. Comput. 7, 52 (2007). [41] A. Safavi-Naini, P. Rabl, P. F. Weck, and H. R. Sadeghpour, Phys. Rev. A 84, 023412 (2011). [42] P. Ghosh, Ion traps (Clarendon-
 press, 1995). [43] D. J. Wineland, C. Monroe, W. M. Itano, B. E. King, D. Leibfried, D. M. Meekhof, C. Myatt, and C. Wood, Fortschr. Phys. 46, 363 (1998). [44] M. Raizen, J. Gilligan, J. Bergquist, W. Itano, and D. Wineland, J. Mod. Opt. 39, 233 (1992). [45] W. Paul, Rev. Mod. Phys. 62, 531 (1990). [46] X. R. Nie, C. F. Roos, and D. F. James, Phys. Lett. A 373, 422 (2009). [47] R. Rafac, J. P. Schiﬀer, J. S. Hangst, D. H. Dubin, and

D. J. Wales, Proceedings of the National Academy of

Sciences 88, 483 (1991).

[48] J. P. Schiﬀer, Phys. Rev. Lett 70, 818 (1993).

[49] P. D. Lett, W. D. Phillips, S. L. Rolston, C. E. Tanner,

R. N. Watts, and C. I. Westbrook, J. Opt. Soc. Am. B

6, 2084 (1989).

[50] D. J. Wineland and W. M. Itano, Phys. Rev. A 20, 1521

(1979).

[51] T. Haensch and A. Schawlow, Opt. Commun. 13, 68

(1975).

[52] J. Javanainen, Appl. Phys. 23, 175 (1980).

[53] F. Riehle, Atomic and Molecular Frequency Refer-

ences (Wiley-VCH Verlag, 2005), pp. 117–165, ISBN

9783527605996.

[54] D. J. Berkeland, J. D. Miller, J. C. Bergquist, W. M.

Itano, and D. J. Wineland, J Appl. Phys. 83, 5025

(1998).

[55] Q. A. Turchette, Kielpinski, B. E. King, D. Leibfried,

D. M. Meekhof, C. J. Myatt, M. A. Rowe, C. A. Sackett,

C. S. Wood, W. M. Itano, et al., Phys. Rev. A 61, 063418

(2000).

[56] L. Deslauriers, S. Olmschenk, D. Stick, W. K. Hensinger,

J. Sterk, and C. Monroe, Phys. Rev. Lett. 97, 103007

(2006).

[57] SE0,Ca ≈ 1.26 × 10−9 V2/m2Hz for Ca+ ions with Γ ≈

140 × 106

s−1

and

k

≈

2π 397 nm

.

[58] G. J. Dick, in Proc. 19th Annual Precise Time and

Time Interval (PTTI) Application and Planning Meet-

ing (1988), p. 133.

[59] G. Santarelli, C. Audoin, A. Makdissi, P. Laurent,

G. Dick, and A. Clairon, IEEE Trans. Ultrason. Ferro-

electr. Freq. Control 45, 887 (1998).

[60] E. Peik, T. Schneider, and C. Tamm, J. Phys. B 39, 145

(2006).

[61] R. Blu¨mel, J. M. Chen, E. Peik, W. Quint, W. Schleich,

Y. R. Shen, and H. Walther, Nature 334, 309 (1988).

[62] R. Blu¨mel, C. Kappler, W. Quint, and H. Walther, Phys.

Rev. A 40, 808 (1989).

[63] M. Marciante, C. Champenois, A. Calisti, J. Pedregosa-

Gutierrez, and M. Knoop, Phys. Rev. A 82 (2010).

[64] M. Matsumoto and T. Nishimura, ACM Trans. Model.

Comput. Simul. 8, 3 (1998).

[65] J. H. Wesenberg, R. J. Epstein, D. Leibfried, R. B.

Blakestad, J. Britton, J. P. Home, W. M. Itano, J. D.

Jost, E. Knill, C. Langer, et al., Phys. Rev. A 76, 053416

(2007).

[66] S. Schiller and C. La¨mmerzahl, Phys. Rev. A 68, 053406

(2003).

[67] M. Drewsen, I. S. Jensen, N. Kjærgaard, J. Lindballe,

A. Mortensen, K. Mølhave, and D. Voigt, J. Phys. B 36,

525 (2003).

[68] L. Landau and E. Lifshitz, Atomic and Molecular Fre-

quency References (Pergamon, New York, 1976), pp. 93–

95.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:47.750Z
- **Text Length:** 57317 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
