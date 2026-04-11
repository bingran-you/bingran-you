# PDF Document: (Motional Sideband - 2023 Innsbruck) Sideband thermometry of ion crystals.pdf

**File Path:** (Motional Sideband - 2023 Innsbruck) Sideband thermometry of ion crystals.pdf

**Processed Date:** 2026-02-10T18:18:45.656Z

**File Size:** 2478.56 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 618

**Title:** (Motional Sideband - 2023 Innsbruck) Sideband thermometry of ion crystals

**Collection:** Ion Trap > Fundamental

---

## Extracted Text Content

Sideband thermometry of ion crystals
Ivan Vybornyi,1, ∗ Laura S. Dreissen,2, 3, ∗ Dominik Kiesenhofer,4, 5, ∗ Helene Hainzer,4, 5 Matthias Bock,4, 5 Tuomas Ollikainen,4, 5 Daniel Vadlejch,2 Christian F. Roos,4, 5 Tanja E. Mehlst¨aubler,2, 6 and Klemens Hammerer1
1Institut fu¨r Theoretische Physik, Leibniz Universit¨at Hannover, Appelstrasse 2, 30167 Hannover, Germany 2Physikalisch-Technische Bundesanstalt (PTB), Bundesallee 100, 38116 Braunschweig, Germany 3Department of Physics and Astronomy, LaserLab, Vrije Universiteit, De Boelelaan 1081, 1081 HV Amsterdam, The Netherlands
4Universita¨t Innsbruck, Institut fu¨r Experimentalphysik, Technikerstraße 25, 6020 Innsbruck, Austria 5Institut fu¨r Quantenoptik und Quanteninformation,
O¨sterreichische Akademie der Wissenschaften, Technikerstraße 21a, 6020 Innsbruck, Austria 6Institut fu¨r Quantenoptik, Leibniz Universita¨t Hannover, Welfengarten 1, 30167 Hannover, Germany
(Dated: October 19, 2023)
Coulomb crystals of cold trapped ions are a leading platform for the realisation of quantum processors and quantum simulations and, in quantum metrology, for the construction of optical atomic clocks and for fundamental tests of the Standard Model. For these applications, it is not only essential to cool the ion crystal in all its degrees of freedom down to the quantum ground state, but also to be able to determine its temperature with a high accuracy. However, when a large ground-state cooled cry-
stal is interrogated for thermometry, complex many-body interactions take place, making it challenging to accurately estimate the temperature with established techniques. In this work we present a new thermometry method tailored for ion crystals. The method is applicable to all normal modes of motion and does not suffer from a computational bottleneck when applied to large ion crystals. We test the temperature estimate with two experiments, namely with a 1D linear chain of 4 ions and a 2D crystal -
of 19 ions and verify the results, where possible, using other methods. The results show that the new method is an accurate and efficient tool for thermometry of ion crystals.

arXiv:2306.07880v3 [quant-ph] 18 Oct 2023 number of ions

I. INTRODUCTION
Trapped ions are one of the leading platforms for quantum computation [1–3], simulation [4–7], sensing [8, 9], and metrology [10–12]. The exquisite degree of quantum control over electronic and motional degrees of freedom and their unrivalled coherence times make trapped ions excellent qubits [1, 5] and enable quantum gates with record fidelity [13–15]. The unique combination of isolation and controllability also guarantees low systematic effects in precision measurements of the electronic structu-
re of trapped ions, making them perfect systems for frequency and time references in next-generation optical clocks and for searches of physics beyond the Standard Model [16].
Scaling up ion Coulomb crystals (ICCs) is desirable for all these applications, but poses increasing challenges in entropy management as the number of degrees of freedom of motion grows. This concerns first the efficient cooling of ICCs, since thermal excitations are a major limiting factor, e.g. in quantum gates mediated by normal modes of motion and, due to the relativistic Doppler effect, also in the systematics of ion clocks [17, 18]. Laser cooling of trapped ions has become a rich methodology-
 [19], which in recent years has made it possible to cool even large ICCs consisting of dozens [20–22] and even hundreds [23] of ions near their ground states of motion. Beyond cooling, an equally significant challenge is to accurately mea-
∗ These three authors contributed equally.

time-of-flight direct imaging

?

lineshape analysis

dark resonances

sideband ratio/fit singular value decomp. rapid adiabatic passage

inverse temperature 1/T

FIG. 1. Schematic overview of thermometry methods for cold ions. Well-established approaches exist for ion crystals at large temperatures. Close to the ground state, the temperature can be measured of single ions or small crystals. Development of methods applicable to large and cold crystals is an open challenge and subject of the present work.

sure the final state of motion of ICCs achieved by a particular cooling method and to determine its precise effective temperature. Accurate and efficient thermometry is important for evaluating spurious effects in quantum technology, such as quantum gate errors or systematic clock shifts, as well as for evaluating the efficiency of cooling schemes.

2

P r,b

0.5
0 5 3 1
0

Pb Pr (b)
(c)

0.2

0.4

0.6

gt [2π rad]

Pr P b−P r

FIG. 2. (a) Red and blue sideband spectrum of the out-of-

plane modes of a 19-ion planar crystal after Doppler cool-

ing (for further experimental details, see section IV). P r,b =

1 N

N i=1

Pri,b

is

the

mean

excitation

probability

averaged

over

the ion crystal under red and blue sideband drive, respec-

tively. The absorption probability is much smaller on the

red vibrational sidebands than on the blue sidebands. Yet,

the motional modes are still far from being cooled close

to their ground states with temperatures ranging at about

5-10 phonons on average. (b) Simulated dynamics of the

mean electronic red/blue sideband excitation P r,b of a 19-

ion ICC (center-of-mass mode, assuming n¯ = 5). (c) Taking

P r/(P b − P r) as an estimate of the mean phonon number,

as suggested by the sideband ratio method (Eq. (3)), yields

completely erroneous results and a significant underestimate

of the motion temperature.

There exist well-established methods for thermometry of trapped ions, yielding reliable results for ion Coulomb crystals (ICCs) in high-temperature thermal states and for single or few ions near the ground state, as summarized in Fig. 1. Far from the motional ground state, timeof-flight, Doppler lineshape or image analyses achieve satisfactory accuracy [24–28] and suit practically any ion numbers. Close to the motional ground state, the excellent control over the coupling of motional degrees of fr-
eedom to internal levels, combined with the extreme precision that can be achieved in measuring the latter, can be used to perform an indirect temperature measurement. For single trapped ions, techniques such as singular value decomposition and numerical fits are employed to analyze motional sideband transitions [29, 30]. The primary tool for single ion thermometry is the resolved sideband ratio technique [31], which exploits the pronounced asymmetry of motional sidebands near the ground state.
However, these techniques cannot be directly applied

to large ICCs near the ground state, posing an open challenge for achieving reliable thermometry in this regime, cf. Fig. 1. The problem is that for globally addressed crystals, driving a first-order (red or blue) sideband transition induces strong and complex spin-spin correlations due to their joint coupling with the driven normal mode, much like in a trapped ion quantum gate. These correlations significantly affect the asymmetry between red and blue sideband transitions, as is illustrated in Fi-
g. 2 at the example of the sideband spectrum of a Dopplercooled 19-ion crystal. The marked asymmetry in the mean excitation probabilities on the red and blue sidebands would na¨ıvely suggest a mean phonon number of approximately n¯ ≲ 1 when applying the sideband absorption ratio technique [31] (cf. Eq. (3)) to this scenario. However, this estimate significantly underestimates the actual mean phonon number, expected to be around 5 to 10 after Doppler cooling. This clearly shows that spinspin correl-
ations must be accounted for to accurately determine the temperature of motional states based on a measurement of internal state populations. For small ion crystals these correlations can be described exactly by solving the dynamics numerically or analytically [32–34]. However for large ICCs consisting of tens or hundreds of ions, an exact consideration of ion-ion correlations is numerically intractable, as in any quantum many-body problem. Despite this complication, the resolved sideband techniqu-
e (as well as other techniques based on spin-motional coupling) has been used in recent experiments [21, 22, 35, 36] where many-body correlations have been either partially or completely neglected.
The occurrence of many-particle dynamics in sideband thermometry can be trivially suppressed if only a single ion in a crystal can be interrogated. In this case, the known single-ion techniques are generally applicable, but become inefficient for larger ICCs due to poor statistics and long interrogation times required. When many or all ions of an ICC are interrogated, many-body dynamics can be easily accommodated in the exceptional case where the symmetric centre-of-mass (COM) mode is interrogated-
 [23, 37, 38]. In this case, the dynamics preserves permutation symmetry and shows a growth of the effective dimension of the Hilbert space that is only polynomial, instead of exponential, in the number of ions. Accurate thermometry of the out-of-phase modes, i.e. all modes except the COM mode, remains generally out of reach.
In this work, we present a new method for the thermometry of states of motion for arbitrarily large, globally addressed ICCs cooled close to the ground state. The method is based on measuring the ratio of the first-order excitation probabilities of the red and blue motional sidebands. Our technique takes into account the entanglement between the individual spins and remains accurate regardless of the number of ions. Using this global sideband thermometry method, we can extract the temperature of e-
ach motional mode that is assumed to be in a thermal motional state at the end of the cooling cycle.

3

Our approach to the many-body aspect of the problem may also serve as a useful reference and possibly complement the other existing thermometry methods. We demonstrate our method on a linear four-ion ICC and verify the estimated result with a full numerical simulation. We also test the global sideband thermometry on a two-dimensional 19-ion ICC; in this case the comparison with the numerical simulation is only possible for the COM mode.
The article is organised as follows: We start with a theoretical description of the resolved sideband thermometry of a single ion in section II A and place it in the framework of parameter estimation. In section II B we present our new global sideband therometry method for ICCs and discuss its advantages and limitations. In section II C we describe an alternative bichromatic technique that could be used if single ion addressing is possible and compare it with our new method. In section III we demo-
nstrate the new global sideband method on four modes of motion of a linear 4-ion crystal and verify the results. In section IV we apply the new technique to a 2D 19-ion crystal and verify it. We summarise the results and give an outlook on open questions and possible further developments in section V.

II. THEORY OF SIDEBAND THERMOMETRY

A. Sideband Thermometry of a Single Ion

We consider a trapped ion with two relevant internal

states |↓⟩ and |↑⟩, harmonically bound in a quadrupole

trap with quantized motion along the three main trap

axes. We restrict ourselves to a single axis and assume

the ion is prepared in a thermal state of motion ρ(n¯) =

∞ n=0

pn

(n¯)

|n⟩⟨n|

with

Fock

state

occupation

probability

n¯n

pn(n¯) = (n¯ + 1)n+1 .

(1)

The mean occupation number is n¯ = Tr ρ(n¯)a†a where a and a† are bosonic creation and annihilation operators for the motional degree of freedom. The mean occupation number can be inferred by coupling the motional state to the internal states and measuring the excitation probability. This can be realized by initializing the ion in ρ(n¯) ⊗ |↓⟩⟨↓| and illuminating it for a time t by a laser driving resonant transitions on either the red or blue sideband. The dynamics in these cases is governed by th-
e Hamiltonians

Hr = g(σ+a + h.c.) ,

(2a)

Hb = g(σ+a† + h.c.)

(2b)

respectively. Here, the effective Rabi frequency g = Ωη/2 is obtained by rescaling the carrier Rabi frequency Ω with the Lamb-Dicke factor η ≪ 1 and the spin operators

are defined as σ+ = |↑⟩⟨↓|. The probability to find the ion in the excited state |↑⟩ after an interrogation time t is given by Pα(n¯, t) = Tr Uα(t)ρ(n¯) ⊗ |↓⟩⟨↓| Uα†(t) |↑⟩⟨↑| , where α = r, b for red or blue sideband dynamics, respectively, and the time evolution operators are given by Uα(t) = exp(−iHαt). For convenience, the excitation probabilities are given explicitly in Eq. (A2). Several examples of Pα(t, n¯) are plotted at specific values of n¯ in Fig. 3(a).
A measurement of the excitation probability on both the red and blue sideband transitions as a function of interrogation time gives access to the mean occupation number via, e.g., a numerical fit of the data to Pα(n¯, t), [34]. Apart from this, one can also infer the temperature from measurements at a single interrogation time by using the convenient formula

Pr(n¯, t)

= n¯ .

(3)

Pb(n¯, t) − Pr(n¯, t)

This identity is at the heart of the sideband ratio ther-

mometry method [31, 39, 40]. It can be easily verfied

using the expressions for Pα(n¯, t) in Eq. (A2) and the

fact

that

pn+1 (n¯ ) pn (n¯ )

=

n¯ n¯+1

for

thermal

states.

Eq. (3) is

formally a correct analytical statement relating the mea-

sured excitation probabilities to the motional tempera-

ture. It is, however, important to note that this formula

implicitly suggests that the values of Pα are the precise statistical averages and hence only holds true if the data

comes from an infinitely large measurement sample. In

reality, the sample size is finite. The real measurement

outcomes are the relative statistical frequencies fα, which will inevitably deviate from the true excitation probabil-

ities. As the sample size N increases, this deviation goes

down following a Gaussian law:

fα −N−→−−−∞→ Pα +

2 N

Pα(1 − Pα)ξα,

(4)

where ξα is a normally distributed random variable, ξα ∼ N (0, 1). Since fα slightly differ from the real excitation probabilities, plugging these values into Eq. (3) results in an expression which is not exactly the motional temperature n¯, but its statistical ’estimator’:

nˆ¯ = fr .

(5)

fb − fr

The values of the estimator (referred to as estimates for short) are distributed with a certain statistical uncertainty and might carry a bias, which has to be accounted for when applying Eq. (3) to experimental data. Using Eq. (4) we calculate the statistical bias and the variance of the estimates:

δn¯

=

⟨nˆ¯⟩

−

n¯

=

1 N

2PbPr(2 − Pb − (Pb − Pr)3

Pr) ,

(6a)

∆n¯2err

=

⟨(nˆ¯

−

n¯)2⟩

=

1 N

2PbPr(Pb + Pr − 2PbPr) (Pb − Pr)4

.

(6b)

4

Pr,b

N

×

δ ¯n ¯n

1 0.75 (a)
0.5
0.25

0 40 20 10
5 (b) 2 50
(c) 20

10

5

30

0.2

0.4

0.6

gt [2π rad]

n¯ = 0.01 n¯ = 0.1 n¯ = 0.5

0.8

1

√ ×N

∆ ¯nerr ¯n

FIG. 3. (a) A simulated Rabi flop on blue (blue curves) and red (red curves) sideband for a single ion for several values of the mean phonon occupation number. Bias (b) and the statistical uncertainty (c) of the sideband temperature estimator (3), rescaled to the total number of measurements N .

Both the variance and the bias converge to zero with the number of measurements. In Fig. 3(b, c) the intrinsic bias and the relative statistical uncertainty of the estimator in Eq. (3) are plotted as a function of the interrogation time and rescaled to N . As one would expect, both bias and the statistical uncertainty are large at small interrogation times, where the obtained statistics is poor due to the weak distinguishability of the sidebands. The bias and uncertainty also strongly scale with m-
ean occupation number n¯. For example, achieving an uncertainty of 3% at n¯ = 0.5 requires N = 104 measurements at an optimal interrogation time. An optimal interrogation time is found near the time of the maximal sideband excitation. This is the operating point, where the estimation using Eq. (3) converges the fastest to the true temperature value and has minimal bias. It is also interesting to compare the statistical uncertainty of the estimator with the fundamental bounds given by the (quantum)-
 Cram´er-Rao bounds. Since these observations are not central to the thermometry problem we consider below, we defer them to Appendix A.

B. Sideband Thermometry of an Ion Crystal
In an ICC, the motion of ions is collective and occurs in normal modes [39]. In the following, we operate under the commonly used premise that after laser cooling, each mode is in a thermal state characterised by a certain mean phonon number n¯. This is usually a good approximation, although there may well be deviations, especially for short cooling times [30, 41, 42]. Perform-

ing ion crystal thermometry thus amounts to estimating the mean phonon number of the collective modes of motion by performing spin measurements on the crystal.
To date, many of the used temperature estimation techniques operating in the nearly ground-state cooled regime (n¯ ≲ 1) rely on knowing the exact system dynamics governed by the first-order red and blue sideband Hamiltonians, arising in the Lamb-Dicke regime of the atom-light interaction for a globally-addressed crystal. These types of coupling entangle the crystal’s particular mode of motion with the spins and are given by

Hr = g(J+a + J−a†) ,

(7a)

Hb = g(J+a† + J−a) ,

(7b)

with (pseudo-)collective spin operators J± =

N i=1

ηiσ±i

,

where N is the number of ions in the crystal. Here, g

denotes an average Rabi frequency of sideband transitions. The average is chosen such as to have i ηi2 = 1, where the factors ηi account for all inhomogeneities in
the couplings of the ions to the mode under considera-

tion. Thus, ηi comprises the net effect of Lamb-Dicke

factors, varying Rabi-frequency etc., which we assume to

be calibrated for a given setup.

To obtain the desired exact solution, one needs to time-

propagate the Schr¨odinger equation with Hamiltonians

(7). The complexity of this calculation grows exponen-

tially with the number of ions N , making it impractical

to extract the exact solution for large ion crystals in rea-

sonable time. The only exceptional case is the symmetric

center-of-mass mode, where a√ll the individual coupling constants are equal, ηi ≡ 1/ N . This allows one to solve the problem in a symmetric Hilbert subspace, thus

lifting the exponential scaling, cf. Appendix D.

In order to resolve the large-N bottleneck for out-of-

phase modes, a new temperature estimation method is

needed, which does not require solving the Schr¨odinger

equation for the dynamics of the coupled N -ion system.

We intend to stay as close as possible to the concept of

thermometry of a single ion, which we have described in

Sec. II A. To extend this approach, we first need to de-

fine the excitation probabilities for an ion crystal. A

naive way to do this would be to use the mean elec-

tronic

excitation

of

the

ions,

Pα

=

1 N

N i=1

Pαi

,

where

Pαi = Tr{ρα |↑⟩i⟨↑|}. However, adopting this defini-

tion of the excitation probability for sideband thermom-

etry leads to an incorrect result, and the temperature is

greatly underestimated, as already shown in Fig. 2.

We will show that it is much more efficient to define the

global crystal excitation probability as the complement

of the probability to remain in the ground state of all

ions, i.e.

Pα(n¯, t) = 1 − Tr[|0⟩⟨0| ρα(n¯, t)].

(8)

Here, |0⟩ = |↓ . . . ↓⟩ is the collective spin ground state, and ρα(n¯, t) = Uα(t)ρ(n¯) ⊗ |0⟩⟨0| Uα†(t) the time-

5

propagated full density matrix of the system for red/blue sideband excitation.
Defining the excitation probability in this way has two benefits: firstly, the measurement implied by Eq. (8) can be easily performed and does not require single ion resolution. Secondly, for sufficiently small n¯ and t, the functional dependence between the sideband ratio and n¯ can be computed efficiently, taking into account the entanglement between the ions in the crystal. The generalization of Eq. (3) for ICCs is

Pr(n¯, t) Pb(n¯, t) − Pr(n¯, t)

=

Rt(n¯),

(9a)

where

Rt(n¯) = n¯ +(gt)2P2(n¯)−(gt)4P3(n¯)+(gt)6P4(n¯)+o(t8) . (9b)
The Pk(n¯) are certain known polynomials in n¯ of order k with coefficients depending solely on the mode coupling coefficients ηi. Their explicit form and details of their derivation can be found in Appendix B. Further below we will comment on the idea behind this calculation.
In Fig. 4 we plot Rt(n¯)/n¯ as a function of time for temperature values in the regime of interest. The curve’s deviation from the values of 1 thus shows the relative temperature estimation error when na¨ıvely applying the single-ion formula (3) to an ICC. As case studies, we plot the curves for a 1D 4-ion crystal as considered in Section III and for a 2D 19-ion crystal considered in Section IV. The chosen modes are the COM-mode and one representative out-of-phase mode. As is evident from Fig. 4, -
applying formula (3) to an ICC will result in a relative error of roughly 20%, depending on the chosen mode and the crystal interrogated. Comparing this result with Fig. 2(b,c) shows that defining the global excitation probability as per (8) significantly improves the temperature estimation using the single-ion formula (3) compared to using the mean electronic excitation. The new estimator in Eq. (9) accounts for the residual discrepancy and thus mitigates the systematic error.
In the spirit of the thermometry of a single ion discussed in Sec. II A, the temperature estimator appropriate for the normal mode of an ICC can be constructed by replacing the excitation probabilities on the left hand side of Eq. (9) by measured relative statistical frequencies, and solving the resulting equation for n¯. Thus, with the (properly chosen) root of the quartic polynomial Rt(n¯) − fr/(fb − fr) = 0, the temperature estimator is

nˆ¯ = R−t 1

fr fb − fr

.

(10)

Eq. (10) is the sought for generalization of Eq. (5) to an ICC. The systematic bias and the estimation error for finite sample size can be computed as in the case of a single ion, and are given in Eqs. (B3) and (B4) of the Appendix B. Only sideband excitation probabilities and Rt(n¯) with its derivatives enter the formula Eq. (B3).

N = 4 (1D) 1.4
COM
1.2

N = 19 (2D) COM

Rt(¯n)/¯n

1

n¯

0.01

0.2

0.4

0.6

1

0.8

1.4 OOP

1.2

OOP

Rt(¯n)/¯n

1

0.8 0

0.1

0.2 0

0.1

0.2

gt [2π rad]

gt [2π rad]

FIG. 4. Example plots of Rt(n¯)/n¯ for several values of temperature. Considered are the COM-mode and one representative out-of-phase mode of a 1D 4-ion crystal and of a 2D 19-ion crystal, which are interrogated in Sections III and IV.

Hence, no new data needs to be gathered to perform the bias correction.

Before discussing the properties and limitations of

this estimator, we sketch how Eqs. (9) are derived.

Firstly, we exploit that both Hamiltonians in Eqs. (7)

have a conserved quantity, namely Hr, a†a + J0 =

Hb, a†a − J0 = 0, where J0 =

N i=1

σ+i σ−i

measures

the number of spin excitations. In both cases, α = r, b,

this entails for the probability in Eq. (8) of remaining in

the spin ground state that

∞
Tr[|0⟩⟨0| ρα(n¯, t)] = pn(n¯)|⟨0, n| Uα(t) |0, n⟩|2. (11)
n=0

where pn(n¯) is the thermal occupation probability according to Eq. (1). Thus, only diagonal components of the time evolution operator enter the excitation probability Pα(n¯, t).
Secondly, we use that it is sufficient to describe the time dependence of the excitation probabilities up to their first fringe, as is evident from the discussion in Sec. II. This observation holds true for the ion crystal case as well. To exploit this, the diagonal matrix elements of the evolution operator are expanded in a power series in time. The series is then truncated at eighth order, since it is found to be enough to cover the significant

6

0.24

gt∗ [2π rad]

0.23

0.22

0.21

4 5 6 7 8 9 10 11 12

Number of ions

FIG. 5. Cutoff time gt∗ for N motional modes of a crystal containing N = 4 to 12 ions (for a linear chain with generic trap parameters). Each point corresponds to a particular motional mode. Due to the symmetries in the mode vectors, certain modes have coinciding cutoff time values. The upper points on the plot correspond to the COM mode. The data refers to n¯ = 0.1.

fraction of the first sideband excitation fringe:

⟨0, n| Uα(t) |0, n⟩ ≃

4

(−it)2k (2k)!

⟨0, n| Hα2k

|0, n⟩

+

o(t10).

k=0

(12)

Note that only even powers of the sideband Hamiltonians make a non-vanishing contribution. The relevant matrix elements ⟨0, n| Hα2k |0, n⟩ are polynomials in n of degree k, and comprise the many-body dynamics generated by the sideband drive. The matrix elements can be evaluated analytically, and the lowest two orders are given in Appendix B. The expressions for the cases k = 3, 4 are rather lengthy, and are evaluated by means of computer algebra, which is available at [43]. With the approximation -
in Eq. (12), the matrix elements of the evolution operator become polynomials of order four in n and eight in gt. The average with respect to n in Eq. (11) can then be taken exactly, and yields the excitation probabilities in Eq. (8) as polynomials in n¯ and gt, still of order four and eight, respectively. Since Pα(n¯, 0) = 0, the final result for the ratio Rt(n¯) in Eq. (9a) is correct within sixth order in gt.
Since the new estimator (10) relies on a timetruncation of the dynamics, cf. Eq. (12), the temperature estimation will be reliable only up to a certain time, which should cover a significant fraction of the first fringe in the excitation probabilities. In order to investigate this more quantitatively, we define a ‘cutoff time’ t∗ at which the estimated mean phonon number deviates from the true value for more than a predefined error threshold ϵ, which we chose to be ϵ = 5 · 10−3. For small ion crys-
tals, t∗ can be calculated numerically and its dependence on the size of the ICC can be investigated. In Fig. 5 the cutoff time is shown for all motional modes for a case study of ion crystals containing N = 4 to 12 ions. The results show that there is no significant dependence of t∗ on the motional mode index or on the number of ions, and that the cutoff time is sufficient to measure an excitation signal with good signal-to-noise ratio on both motional

sidebands. We also observed no tendency for the cutoff time to significantly decrease when increasing the temperature within the regime n¯ ≲ 1. Since no assumptions on the crystal size were made along the derivation, one may infer that the proposed global sideband temperature estimator of Eq. (10) remains valid for large ion crystals.
In summary, the estimator in Eq. (10) provides a suitable extension of the well-established sideband thermometry to large, cold ICCs. It allows collective addressing and readout of the ions, providing fast dynamics and a strong signal, and adequately reflects the many-particle correlations involved. In the following, we will indicate yet another approach to ICC thermometry which also allows for collective addressing, but exploits single ion readout in order to avoid the complications connected to -
many-body dynamics. However, global sideband thermometry as discussed in Sec. II B gives better statistics at low temperatures, as we will show.

C. Thermometry from collective bichromatic drive and single ion readout

When the red and blue sidebands are driven simul-
taneously, the dynamics of the ICC follows the Hamiltonian H = Hr + Hb = i Hi with commuting single particle Hamiltonians Hi = gηi(a + a†)σxi . This can be exploited to avoid the difficulty of dealing with complex
many-body interactions, when the readout can be done
via a particular single ion of the crystal. For a crystal
initially prepared in the state ρ0 = |0⟩⟨0|⊗ρ(n¯), the probability to find atom i in the excited state after a time t
of bichromatic driving is

P i(n¯, t) = Tr e−iHit |↓⟩⟨↓| ⊗ ρ(n¯)eiHit |↑⟩⟨↑|

1 =

1 − e−2(gtηk)2(2n¯+1)

.

2

(13)

This shows an exponential loss of contrast at a rate determined by the sought-after mean phonon number n¯, independent of the exact dynamics of the other ions in the crystal. It can therefore form the basis for an estimator of the motion temperature without having to consider particle correlations. However, the necessary interrogation time will depend strongly on the chosen ion via the mode coefficient ηi, and might get large as the crystal size is increased. Moreover, interrogation of a single io-
n will require larger statistics.
A quantitative comparison between thermometry based on bichromatic drive and the approach to global sideband thermometry can be obtained by considering their statistical uncertainties and their Cram´er-Rao (CR) lower bounds. The latter follow directly from the probabilities in Eqs. (8) and (13), respectively. In each case, the interrogation time can be optimized to achieve minimal estimation error at a given motional mode temperature n¯. For the bichromatic drive, the CR bound is independent of th-
e number of ions and the specific mode.

7

√ ×N

∆ ¯nerr ¯n

100 50
20 10
5 3
0.01

CRB SB CRB bichromatic Estimator uncertainty

0.05 0.1

0.5 1

5

n¯

FIG. 6. Cram´er-Rao bound for temperature estimation in case of the sideband measurement on the whole crystal (bright green) and in case of the measurement based on bichromatic drive and interrogation of a single ion (dark green). For comparison, the statistical uncertainty of the global sideband temperature estimator (10) is plotted (black curve). Here N = 10, the center-of-mass mode is considered. The curves for other modes overlap almost completely with the COM-curves.

For the global sideband thermometry we use as an example the COM mode of a 10-ion crystal, and compare the CR bound also to the error for the specific estimator in Eq. (10). The results are shown in Fig. 6 and demonstrate that the two methods show advantages in complementary regimes: for low temperatures, sideband thermometry will yield better statistics, while for higher temperatures corresponding to n¯ ≳ 1 the bichromatic approach is more efficient. The sideband ratio estimator does not saturate-
 its CRB, yet it gets close to the CRB curve in the limit of small n¯, while diverging from it for larger n¯. This is mostly due to the fact that outside of the regime n¯ ≲ 1 the cutoff time starts to decrease significantly with growing temperature, shifting the statistical uncertainty minima to higher values. As the cutoff time does not cover the optimal interrogation time required for the CR bound, there is space for getting closer to the bound with a higher cutoff time, which could be achieved -
by increasing the truncation order in (12).

III. THERMOMETRY OF A LINEAR 4-ION CRYSTAL
To test the new global sideband themometry method described in Sec. II B we measure the motional temperature of a linear ICC of four 172Yb+ ions. The size of the crystal allows us to evaluate the sideband dynamics exactly and thus benchmark the new method by comparing it to a direct numerical fit.

A. State preparation and cooling
The crystal is stored in a segmented linear radiofrequency (rf) Paul trap [44, 45]. The radial confinement, i.e. in the xy plane, is set by an rf electric field

driven at Ωrf = 2π × 24.4 MHz, which is supplied to the trap electrodes by a resonant circuit. The axial confinement, i.e. along z axis, is set by a combination of dc voltages supplied to the trapping segment and both neighbouring segments. The corresponding secular frequencies are ωx,y,z = 2π × (586, 666, 111) kHz. The 12 motional modes along the x, y and z directions are cooled to the Doppler temperature of about 0.5 mK on the dipole allowed 2S1/2 → 2P1/2 transition near 370 nm, assisted by a re-
pumper laser near 935 nm. The ions are detected individually by collecting the fluorescence from the decay of the short-lived 2P1/2 state. With a high numericalaperture lens of N/A = 0.27 the light from individual ions is imaged onto an electron multiplying charge-coupled device (EMCCD). For more details on the experimental apparatus, see [17, 44, 46].
The four modes along the strong radial axis of the trap (y) are further cooled to near the ground state using quench-assisted resolved-sideband cooling on the 2S1/2 → 2D5/2 electric quadrupole transition near 411 nm and the dipole allowed 2D5/2 → 2P3/2 near 1650 nm. The 411 nm beam is derived from a 822 nm laser that is locked to a cavity with a fractional instability of 5 × 10−16 at 10 s of averaging time. It propagates parallel (within 3◦) to the strong radial axis of the trap and efficiently ad-
dresses only the corresponding radial y-modes. It is focused down to a waist of 50 µm at the position of the ions and is aligned to the center of the crystal by measuring the carrier Rabi frequency of all four ions individually. After optimization, the Rabi frequencies are measured to be ΩRabi[ion1, ion2, ion3, ion4] = 2π × [10.66(6), 10.61(6), 10.58(6), 9.88(3)] kHz, which varies by at most 10% over the crystal. The exact mode frequencies of the four radial y-modes are measured to be ωy[mode1, mo-
de2, mode3, mode4] = 2π × [666.0(1), 656.9(1), 643.1(1), 623.6(1)] kHz with resolved sideband spectroscopy on the 411 nm transition. These mode frequencies are used to calculate the Lamb-Dicke factors for the motional modes, where the COM mode is at the highest mode frequency. In order to cool all modes simultaneously, the frequency of the 411 nm laser is set to be 640 kHz red-detuned from the carrier transition, such that it is roughly at the center of the four measured mode frequencies. The 1650-
 nm laser propagates along the axis of the trap and the power is tuned to reach an effective linewidth of the three level system of 67(2) kHz, see also [42].
B. Sideband thermometry measurement
After ground-state cooling, a thermometry measurement is performed on each motional mode along the y direction. The corresponding red and blue sidebands on the 2S1/2 → 2D5/2 transition are addressed to measure the excitation probabilities Pr and Pb, as defined in Sec. II B. For simplicity, the electronic states of individual ions are denoted as 2S1/2 i = |↓⟩i and 2D5/2 i = |↑⟩i. The in-

8

gt [2π rad]

1

0.1

0.2

0.3

0.4

Pb

0.8

Pr

0.6

Pr,b

0.4

0.2

00

200

400

600

t [µs]

FIG. 7. Red (red points) and blue (blue points) global sideband flops of the third motional mode in a 4-ion crystal (see the text for details). The lines show the exact numerical solution generated with the least-square fitted temperature value n¯.

ternal state of each individual ion is measured spatially resolved after a sideband pulse using the electron shelving technique, i.e. fluorescence was only detected on the 2S1/2 →2 P1/2 transition if the ion was in the |↓⟩ state. If |↓⟩1 = |↓⟩2 = |↓⟩3 = |↓⟩4, Pα = 0, otherwise Pα = 1, where α = r, b. For a specific interrogation time, the excitation probabilities Pr and Pb are obtained by averaging over N /2 = 200 measurements and the interrogation time is scanned from 10 µs to 800 µs. As an examp-
le, the data obtained for mode 3 is shown in Fig. 7. Since for a 4-ion crystal the dynamics can be obtained numerically, we can obtain a temperature estimation by fitting the experimental data with the simulated curves of the sideband flops and searching for the optimal temperature values (shown in the right panel of Fig. 8). Further description of the fitting method, together with the data of the other motional modes can be found in Appendix D.
For each pulse time below the cutoff, the global sideband ratio is calculated from Pr and Pb according to equation (9a) and individual estimates for n¯i are obtained using equation (9b), see left panel of Fig. 8.
The cutoff time, as defined in Sec. II B, for all motional modes in this 4-ion crystal is around 400 µs (gt ≈ 0.22). In order to avoid possible implicit biases in the single measurements of n¯i at a given interrogation time, we use data from all available points up to the cutoff time to estimate the temperature. This set of m = 6 individual n¯i estimations, which are bias-corrected for N /2 = 200 according to Eq. (B3) and carry individual error bars σi, are averaged to obtain the final estimation -
according to the following weighted sum:

nˆ¯

=

arg

min
n¯

m i=1

(n¯

− n¯i)2 σi2

.

(14)

¯n

¯n

0.8

a) Mode 1

0.6

0.4

0.2

0.8

b) Mode 2

0.6

0.4

0.2

0.8

c) Mode 3

0.6

0.4

0.2

0.8

d) Mode 4

0.6

0.4

0.2
0 0.05 0.1 0.15 0.2 gt [2π rad]

¯n

¯n

Fit SB

FIG. 8. Temperature estimation for motional modes 1-4 shown in subpanels (a)-(d), respectively, of a 4-ion crystal. The individual temperature estimations at interrogation times up to the cutoff time of ∼ 400 µs (left panel) are averaged together to produce the final value of n¯ = {0.22 ± 0.05, 0.27 ± 0.02, 0.32 ± 0.03, 0.35 ± 0.04} shown in the right panel using the presented global sideband method. The estimations for the extremely small interrogation time of 10µs (the seen very left point for m-
odes 3 and 4) and their uncertainties fall outside of the plot range. The results are compared to the values obtained from a least-square numerical fit from the ‘Rabi flops’ of the red and blue sidebands. Agreement is found between the two methods within 1σ.

The final estimation of nˆ¯ for each motional mode is n¯ = {0.22 ± 0.05, 0.27 ± 0.02, 0.32 ± 0.03, 0.35 ± 0.04} and is shown in the right panel of Fig. 8. The results are compared with the estimations obtained from the numerical fit of the temperature.
Since a good agreement is found between the theoretical and experimental curves, the results from the fit are expected to give an accurate estimation for n¯. For all the motional modes, the values of n¯ obtained from the global sideband method agree with those extracted from the fit within a 1σ uncertainty. The global side-

9

FIG. 9. Red sideband spectrum of the out-of-plane modes of a 19-ion planar crystal after Doppler cooling (top) and an additional EIT-cooling laser pulse (bottom). The frequency is given as detuning from the 4S1/2, m = −1/2 ↔ 3D5/2, m = −1/2 carrier transition. The mode frequencies obtained from simulations using pseudopotential theory are displayed as dashed lines. A false-color image of the ion crystal is shown at the top center. The mode structure of the COM mode (top left) as well as the lowest-
 frequency mode (top right) is indicated by red arrows. Each arrow’s length is proportional to the magnitude of the respective ion’s LambDicke factor ηi, the direction indicating the sign of ηi. The temperature of both modes is probed in the experiments described further below.
band ratio method reaches the same accuracy level of δn¯ ∼ 10 − 20% as the numerical fit, but requires less data points to be taken. We want to explicitly emphasize that the used least-square fit relies on the exact calculation of the sideband dynamics, which scales exponentially with the number of ions and thus cannot be applied for larger ion crystals in general.

signed for trapping 2D ion crystals [47]. The trap is operated at oscillation frequencies of ωs = 2π × 2.189 MHz, ωw1 = 2π × 645 kHz and ωw2 = 2π × 340 kHz where ωs is the secular frequency in the strongly confining direction and ωw1 and ωw2 are the secular frequencies in the two weakly confining directions. The direction of the weakest confinement is aligned with the rf-zero line. Our geometry allows micromotion-free optical access in the plane spanned by the directions of ωs and ωw2.
Ions are Doppler-cooled on the 4S1/2 ↔ 4P1/2 dipole transition at 397 nm. Electromagnetically-induced transparency (EIT) cooling [48, 49] is applied for 300 µs after Doppler cooling to simultaneously cool all N out-of-plane secular modes of motion in an N -ion crystal close to the ground state. The direction of the magnetic field, defining the quantization axis, is oriented at an angle of 45◦ with respect to the crystal plane and allows for an optimal geometry for EIT cooling. A more detailed desc-
ription of the beam geometry is given in Ref. [47].
The laser used for EIT cooling is blue-detuned by 110 MHz from the 4S1/2 ↔ 4P1/2 transition. The chosen detuning enables efficient cooling over a frequency range large enough to accommodate all transverse modes of motion of a 19-ion crystal, spanning a range of ∼ 300 kHz. The power of the σ−-polarized beam is calibrated such that the induced Stark shift overlaps with the center of the frequency range to be cooled. Further details on the calibration procedure can be found in Ref. [50].
The motional modes are probed via sideband spectroscopy on the 4S1/2 ↔ 3D5/2 quadrupole transition with light from a frequency-stable laser (∼ 1 Hz linewidth) at 729 nm. A global beam along the out-ofplane direction excites the individual ions with a maximum variation in the single-ion carrier Rabi frequencies of about 6 % across the 19-ion crystal. For a single ion, we find n¯ = 0.06 for the transverse mode of motion (ωs = 2π × 2.188 MHz) corresponding to the out-of-plane direction of a planar mu-
lti-ion crystal. A frequency scan of the red sideband spectrum of a planar 19-ion crystal, once after only Doppler cooling and once after an additional EIT cooling pulse of 300 µs, is shown in Fig. 9.
B. Sideband thermometry of a planar 19-ion crystal

IV. THERMOMETRY OF A 2D CRYSTAL
A. Setup, state preparation and cooling
To demonstrate the new scheme also on a larger ion crystal, which already imposes challenges in numerically simulating the sideband dynamics, we perform thermometry measurements on the out-of-plane motional modes of a two-dimensional 40Ca+ ion crystal. A planar 19-ion Coulomb crystal is stored in the anisotropic potential of a novel microfabricated monolithic linear Paul trap de-

Sideband thermometry based on Eq. (10) is applied to the COM mode and the lowest-frequency mode in the out-of-plane direction of a two-dimensional 19-ion crystal. We calculate the normal-mode frequencies and the Lamb–Dicke factors of the individual ions for all out-ofplane modes using simulations within the pseudopotential approximation. The knowledge of both is required for the employed temperature-estimation method. However, the pseudopotential approximation can sometimes fail to reproduce the o-
bserved normal mode frequency spectrum, in particular for planar crystals [51, 52]. We measure the out-of-plane motional-mode spectrum and

10

FIG. 10. Sideband dynamics and thermometry of a planar 19-ion crystal. (a,b) Single-ion excitation probabilities Pri,b for the COM mode (a) and the lowest-frequency mode (b). As in Fig. 9, the insets indicate the mode vectors of the investigated modes. (c,d) Global excitation probabilities Pr,b according to Eq. (8) for the COM mode (c) and the lowest-frequency mode (d) representing the quantities of interest in the sideband thermometry measurements. The blue and the red points correspond to the me-
asured excitation on the blue and red sidebands, respectively. The solid lines in (c) are obtained from simulations in the symmetric Hilbert subspace using the least-square fitted value of n¯. (e,f) Sideband thermometry of the COM mode (e) and the lowest-frequency mode (f) for varying carrier Rabi frequency (indicated by color) as a function of the interrogation time. The mean values are shown as dashed lines. For the lowest-frequency mode (f) the mean value is calculated after discarding all data-
 points lying outside a range of 1σ from the mean value obtained from all data points. The discarded data points (5 points with the highest values of n¯) correspond to measurements with higher Rabi frequency and are biased due to crosstalk to neighbouring modes (see main text for discussion). The error bars of individual thermometry measurements are obtained from Eq. (B4). (g) Measurement of n¯ for the COM mode as a function of the probe pulse delay. The solid line shows a weighted linear fit used-
 to determine the heating rate.

observe a good match with the simulated mode frequencies (see Fig. 9), providing us with confidence that the pseudopotential approximation yields accurate results for the 19-ion crystal.
Sideband excitation dynamics of the COM and the lowest-frequency mode with a carrier Rabi frequency of 2π × 38.8 kHz are shown in Fig. 10. Single-ion-resolved measurements reveal the structure of the investigated modes, shown as Pri,b in Fig. 10(a,b), and yield the global excitation probabilities, Pb and Pr, shown in Fig. 10(c,d).
Thermometry measurements are carried out after EIT cooling where we measure the temperature of the planar ion crystal as a function of the carrier Rabi frequency and the interrogation time. The excitation probabilities Pb and Pr are probed in 4000 individual experiments each. The mean phonon number is then calculated according to Eq. (10).
Using high laser intensities can lead to crosstalk to

neighboring modes, which results in inaccuracies in the phonon-number estimates. For the lowest-frequency mode, we observe some crosstalk to the neighboring mode separated by less than 30 kHz. We can circumvent this problem simply by probing the modes at lower Rabi frequencies. Figure 10(e,f) shows the estimated mean phonon numbers for different values of gt. Consistent results are obtained across the probed parameter space. The bias-corrected (Eq. B3) weighted mean phonon number of the COM mode a-
nd lowest-frequency mode are determined to be n¯ = 0.149(3) and n¯ = 0.069(3), respectively.
To cross-check the measured mean phonon number of the COM mode, we simulate the sideband dynamics of the COM mode in the symmetric Hilbert subspace and, as for the 4-ion data, perform a weighted least-square fit of the measured data on the red sideband of the COM mode. More details on the numerical calculation for the

11

symmetric COM mode as well as the fit estimator are given in Appendix D. The fit yields a temperature estimate of n¯ = 0.147±0.02, which is in good agreement with the value obtained using the new sideband thermometry technique. The theoretical curves for the red and the blue sideband are shown as solid lines in Fig. 10(c). Up to ∼ 350 µs we find a good agreement between theory and experiment. For longer probe times, we observe deviations from the simulated curve, which we attribute to motional hea-
ting as well as instabilities in the trap oscillation frequencies due to power fluctuations. We thus use the first 20 data points (< 350 µs) to fit the dynamics of the COM mode. A numerical simulation of the sideband dynamics of the LF mode, however, is computationally demanding. Therefore, a reference value for the lowestfrequency mode is not given.
In order to test the method with phononically higher excited states, a heating rate measurement of the COM mode is performed in which the probe pulse is delayed by a predefined wait time between 0 and 20 ms after groundstate cooling. The heating-rate curve in Fig. 10(g) shows the bias-corrected estimated values of n¯. The data is fitted with a linear function by least-squares, weighted with the inverse variance obtained from Eq. (B4). The fit reveals a heating rate of 15.3(1.7) quanta/s per ion co-
nsistent with previous measurements with a single ion as well as an 8-ion crystal. In contrast to the COM mode, measurements on the lowest-frequency mode do not indicate significant heating within tens of milliseconds, as expected.
V. DISCUSSION & CONCLUSIONS
We have presented here a method for the thermometry of cold ICCs that generalizes the well-known sideband thermometry of single ions. The effects of manybody quantum dynamics that arise in this process can be taken into account with sufficient accuracy by exploiting conservation quantities of the sideband dynamics and by a suitable truncation of its time series expansion. It turns out that this limitation is not critical, since a sufficient signal can be extracted within a time span in which the t-
runcation still yields reliable results. As we show, the tolerable interrogation time does not change with the number of ions. In principle, if required, a higher truncation order can also be achieved using the methods we have presented here, whose implementation in Python and Mathematica can be accessed at [43]. Applications of this methodology to a linear as well as a planar ion

crystal give good results, also in comparison to other methods, in cases where such a comparison is possible. A reliable tool for temperature measurement in ultracold ion crystals is an important requirement in experimental quantum metrology and information science. We believe that the thermometry method presented here meets the current needs and can be of practical use for research with cold trapped ions. Moreover, the approach presented in this work could serve as a useful reference for the trea-
tment of many-body effects in similar systems.
As an outlook, we would like to indicate a number of questions and possible further developments that go beyond the results presented here: a central premise of sideband thermometry is the presence of a canonical thermal state. This is a useful and mostly very good approximation, but it will not always be fulfilled for all cooling methods and especially not for short cooling durations, which will occur in quantum technology applications due to time limitations [30, 41]. Our general approach would -
also allow to consider more general, non-canonical parameterisations of the occupation probability and to estimate the corresponding parameters systematically. For this, one has to consider a many-parameter estimation problem and in a similar fashion derive the corresponding estimators from the measured observables. Another possible extension would be to consider correlated spin states in order to achieve a quantum metrological improvement of the accuracy of the thermometric measurement. Finally, -
a way could also be sought for thermometry based on bichromatic driving to exploit measurements of more than one ion and account for the many-body correlations that occur there.
The data underlying the reported measurements are available via Zenodo [53].
ACKNOWLEDGEMENTS
The project leading to this application has received funding from the European Research Council (ERC) under the European Union’s Horizon 2020 research and innovation programme (grant agreement No 741541). Furthermore, we acknowledge funding from the Austrian Science Fund through the SFB BeyondC (F7110) and by the Deutsche Forschungsgemeinschaft (DFG, German Research Foundation) through Project-ID 274200144 – SFB 1227 (projects A06 and A07) and Project-ID 390837967 - EXC 2123. LD acknowledges suppo-
rt from the Alexander von Humboldt foundation.

[1] C. D. Bruzewicz, J. Chiaverini, R. McConnell, and J. M. Sage, Trapped-ion quantum computing: Progress and challenges, Applied Physics Reviews 6, 021314 (2019).

[2] J. M. Pino, J. M. Dreiling, C. Figgatt, J. P. Gaebler, S. A. Moses, M. S. Allman, C. H. Baldwin, M. Foss-Feig, D. Hayes, K. Mayer, C. Ryan-Anderson, and B. Neyen-

12

huis, Demonstration of the trapped-ion quantum CCD computer architecture, Nature 592, 209 (2021). [3] B. Lekitsch, S. Weidt, A. G. Fowler, K. Mølmer, S. J. Devitt, C. Wunderlich, and W. K. Hensinger, Blueprint for a microwave trapped ion quantum computer, Science Advances 3, e160154 (2017). [4] D. Kielpinski, C. Monroe, and D. J. Wineland, Architecture for a large-scale ion-trap quantum computer, Nature 417, 709 (2002). [5] K. Wright, K. M. Beck, S. Debnath, J. M. Amini, Y. Nam, N. Grzesiak, J.-S.-
 Chen, N. C. Pisenti, M. Chmielewski, C. Collins, K. M. Hudek, J. Mizrahi, J. D. Wong-Campos, S. Allen, J. Apisdorf, P. Solomon, M. Williams, A. M. Ducore, A. Blinov, S. M. Kreikemeier, V. Chaplin, M. Keesan, C. Monroe, and J. Kim, Benchmarking an 11-qubit quantum computer, Nature Communications 10, 5464 (2019). [6] R. Blatt and C. F. Roos, Quantum simulations with trapped ions, Nature Physics 8, 277 (2012). [7] C. Monroe, W. C. Campbell, L.-M. Duan, Z.-X. Gong, A. V. Gorshkov, P. W. Hess, R. Isla-
m, K. Kim, N. M. Linke, G. Pagano, P. Richerme, C. Senko, and N. Y. Yao, Programmable quantum simulations of spin systems with trapped ions, Reviews of Modern Physics 93, 025001 (2021). [8] M. J. Biercuk, H. Uys, J. W. Britton, A. P. VanDevender, and J. J. Bollinger, Ultrasensitive detection of force and displacement using trapped ions, Nature Nanotechnology 5, 646 (2010). [9] C. L. Degen, F. Reinhard, and P. Cappellaro, Quantum sensing, Reviews of Modern Physics 89, 035002 (2017). [10] J. Keller,-
 T. Burgermeister, D. Kalincev, A. Didier, A. P. Kulosa, T. Nordmann, J. Kiethe, and T. E. Mehlsta¨ubler, Controlling systematic frequency uncertainties at the 10−19 level in linear Coulomb crystals, Physical Review A 99, 013405 (2019). [11] S. M. Brewer, J.-S. Chen, A. M. Hankin, E. R. Clements, C. W. Chou, D. J. Wineland, D. B. Hume, and D. R. Leibrandt, 27Al+ quantum-logic clock with a systematic uncertainty below 10−18, Physical Review Letters 123, 033201 (2019). [12] N. Huntemann, C. Sanner, -
B. Lipphardt, C. Tamm, and E. Peik, Single-ion atomic clock with 3×10−18 systematic uncertainty, Physical Review Letters 116, 063001 (2016). [13] C. J. Ballance, T. P. Harty, N. M. Linke, M. A. Sepiol, and D. M. Lucas, High-fidelity quantum logic gates using trapped-ion hyperfine qubits, Physical Review Letters 117, 060504 (2016). [14] J. E. Christensen, D. Hucul, W. C. Campbell, and E. R. Hudson, High-fidelity manipulation of a qubit enabled by a manufactured nucleus, npj Quantum Information 6, 3-
5 (2020). [15] R. Srinivas, S. C. Burd, H. M. Knaack, R. T. Sutherland, A. Kwiatkowski, S. Glancy, E. Knill, D. J. Wineland, D. Leibfried, A. C. Wilson, D. T. C. Allcock, and D. H. Slichter, High-fidelity laser-free universal control of trapped ion qubits, Nature 597, 209 (2021). [16] M. S. Safronova, D. Budker, D. DeMille, D. F. J. Kimball, A. Derevianko, and C. W. Clark, Search for new physics with atoms and molecules, Reviews of Modern Physics 90, 025008 (2018). [17] D. Kalincev, L. S. Dreissen-
, A. P. Kulosa, C.-H. Yeh, H. A. Fu¨rst, and T. E. Mehlsta¨ubler, Motional heating of spatially extended ion crystals, Quantum Science and

Technology 6, 034003 (2021). [18] A. D. Ludlow, M. M. Boyd, J. Ye, E. Peik, and
P. O. Schmidt, Optical atomic clocks, Reviews of Modern Physics 87, 637 (2015). [19] J. Eschner, G. Morigi, F. Schmidt-Kaler, and R. Blatt, Laser cooling of trapped ions, Journal of the Optical Society of America B 20, 1003 (2003). [20] M. K. Joshi, A. Fabre, C. Maier, T. Brydges, D. Kiesenhofer, H. Hainzer, R. Blatt, and C. F. Roos, Polarizationgradient cooling of 1D and 2D ion coulomb crystals, New Journal of Physics 22, 103013 (2020). [21] J.-S. Chen, K. Wright, N. C. Pisenti, D. Murphy, K. M. -
Beck, K. Landsman, J. M. Amini, and Y. Nam, Efficientsideband-cooling protocol for long trapped-ion chains, Physical Review A 102, 043110 (2020). [22] L. Feng, W. L. Tan, A. De, A. Menon, A. Chu, G. Pagano, and C. Monroe, Efficient ground-state cooling of large trapped-ion chains with an electromagneticallyinduced-transparency tripod scheme, Physical Review Letters 125, 053001 (2020). [23] E. Jordan, K. A. Gilmore, A. Shankar, A. SafaviNaini, J. G. Bohnet, M. J. Holland, and J. J. Bollinger, Near -
ground-state cooling of two-dimensional trappedion crystals with more than 100 ions, Physical Review Letters 122, 053603 (2019). [24] M. No¨tzold, S. Z. Hassan, J. Tauch, E. Endres, R. Wester, and M. Weidemu¨ller, Thermometry in a multipole ion trap, Applied Sciences 10, 5264 (2020). [25] J. Roßnagel, K. N. Tolazzi, F. Schmidt-Kaler, and K. Singer, Fast thermometry for trapped ions using dark resonances, New Journal of Physics 17, 045004 (2015). [26] V. Rajagopal, J. P. Marler, M. G. Kokish, and B-
. C. Odom, Trapped ion chain thermometry and mass spectrometry through imaging, European Journal of Mass Spectrometry 22, 1 (2016). [27] C. B. Zhang, D. Offenberg, B. Roth, M. A. Wilson, and S. Schiller, Molecular-dynamics simulations of cold single-species and multispecies ion ensembles in a linear Paul trap, Physical Review A 76, 012719 (2007). [28] M. Herrmann, V. Batteiger, S. Knu¨nz, G. Saathoff, T. Udem, and T. W. Ha¨nsch, Frequency metrology on single trapped ions in the weak binding limit:-
 The 3s1/2– 3p3/2 transition in 24Mg+, Physical Review Letters 102, 013006 (2009). [29] D. M. Meekhof, C. Monroe, B. E. King, W. M. Itano, and D. J. Wineland, Generation of nonclassical motional states of a trapped atom, Physical Review Letters 76, 1796 (1996). [30] A. J. Rasmusson, M. D'Onofrio, Y. Xie, J. Cui, and P. Richerme, Optimized pulsed sideband cooling and enhanced thermometry of trapped ions, Physical Review A 104, 043108 (2021). [31] D. J. Wineland, W. M. Itano, J. C. Bergquist, and R.-
 G. Hulet, Laser-cooling limits and single-ion spectroscopy, Phys. Rev. A 36, 2220 (1987). [32] J. Home, Entanglement of two trapped-ion spin qubits, Ph.D. thesis, University of Oxford (2006). [33] G. Stutter, P. Hrmo, V. Jarlaud, M. K. Joshi, J. F. Goodwin, and R. C. Thompson, Sideband cooling of small ion Coulomb crystals in a Penning trap, Journal of Modern Optics 65, 549 (2017). [34] M. Qiao, Y. Wang, Z. Cai, B. Du, P. Wang, C. Luan, W. Chen, H.-R. Noh, and K. Kim, Double-

13

electromagnetically-induced-transparency ground-state cooling of stationary two-dimensional ion crystals, Physical Review Letters 126, 023604 (2021). [35] B. C. Sawyer, J. W. Britton, A. C. Keith, C. C. J. Wang, J. K. Freericks, H. Uys, M. J. Biercuk, and J. J. Bollinger, Spectroscopy and thermometry of drumhead modes in a mesoscopic trapped-ion crystal using entanglement, Physical Review Letters 108, 213003 (2012). [36] M. D’Onofrio, Y. Xie, A. J. Rasmusson, E. Wolanski, J. Cui, and P. Richerme, -
Radial two-dimensional ion crystals in a linear Paul trap, Physical Review Letters 127, 020503 (2021). [37] P. A. Ivanov, Quantum thermometry with trapped ions, Optics Communications 436, 101 (2019). [38] A. V. Kirkova, W. Li, and P. A. Ivanov, Adiabatic sensing technique for optimal temperature estimation using trapped ions, Physical Review Research 3, 043110 (2021). [39] D. Wineland, C. Monroe, W. Itano, D. Leibfried, B. King, and D. Meekhof, Experimental issues in coherent quantum-state manipul-
ation of trapped atomic ions, Journal of Research of the National Institute of Standards and Technology 103, 259 (1998). [40] D. Leibfried, R. Blatt, C. Monroe, and D. Wineland, Quantum dynamics of single trapped ions, Reviews of Modern Physics 75, 281 (2003). [41] J.-S. Chen, S. M. Brewer, C. W. Chou, D. J. Wineland, D. R. Leibrandt, and D. B. Hume, Sympathetic ground state cooling and time-dilation shifts in an 27Al+ optical clock, Physical Review Letters 118, 053002 (2017). [42] A. P. Kulosa, O-
. N. Prudnikov, D. Vadlejch, H. A. Fu¨rst, A. A. Kirpichnikova, A. V. Taichenachev, V. I. Yudin, and T. E. Mehlsta¨ubler, Systematic study of tunable laser cooling for trapped-ion experiments, New Journal of Physics 25, 053008 (2023). [43] Supporting Wolfram Mathematica and Python code is available at doi, https://doi.org/10.25835/662v76zo (2023). [44] K. Pyka, N. Herschbach, J. Keller, and T. E. Mehlsta¨ubler, A high-precision segmented Paul trap with minimized micromotion for an optical multiple-
-ion clock, Applied Physics B 114, 231 (2013). [45] J. Keller, D. Kalincev, T. Burgermeister, A. P. Kulosa, A. Didier, T. Nordmann, J. Kiethe, and T. E. Mehlst¨aubler, Probing time dilation in Coulomb crystals in a high-precision ion trap, Physical Review Applied 11, 011002 (2019). [46] K. Pyka, High-precision ion trap for spectroscopy of Coulomb crystals, Ph.D. thesis, Leibniz Universita¨t Hannover, Welfengarten 1, 30167, Hanover, Germany (2013). [47] D. Kiesenhofer, H. Hainzer, A. Zhdanov, P. C.-
 Holz, M. Bock, T. Ollikainen, and C. F. Roos, Controlling two-dimensional Coulomb crystals of more than 100 ions in a monolithic radio-frequency trap, PRX Quantum 4, 020317 (2023). [48] G. Morigi, J. Eschner, and C. H. Keitel, Ground state laser cooling using electromagnetically induced transparency, Physical Review Letters 85, 4458 (2000). [49] C. F. Roos, D. Leibfried, A. Mundt, F. Schmidt-Kaler, J. Eschner, and R. Blatt, Experimental demonstration of ground state laser cooling with electromagn-
etically induced transparency, Physical Review Letters 85, 5547 (2000).

[50] R. Lechner, C. Maier, C. Hempel, P. Jurcevic, B. P. Lanyon, T. Monz, M. Brownnutt, R. Blatt, and C. F. Roos, Electromagnetically-induced-transparency ground-state cooling of long ion strings, Physical Review A 93, 053401 (2016).
[51] H. Landa, M. Drewsen, B. Reznik, and A. Retzker, Modes of oscillation in radiofrequency Paul traps, New Journal of Physics 14, 093023 (2012).
[52] H. Kaufmann, S. Ulm, G. Jacob, U. Poschinger, H. Landa, A. Retzker, M. B. Plenio, and F. SchmidtKaler, Precise experimental investigation of eigenmodes in a planar ion crystal, Physical Review Letters 109, 263003 (2012).
[53] The underlying data are available via Zenodo, https: //doi.org/10.5281/zenodo.8116596 (2023).
[54] D. Leibfried, R. Blatt, C. Monroe, and D. Wineland, Quantum dynamics of single trapped ions, Reviews of Modern Physics 75, 281 (2003).
[55] D. Cline and P. Lesser, Error estimation in non-linear least squares analysis of data, Nuclear Instruments and Methods 82, 291 (1970).

Appendix A: Fisher information analysis for single ion thermometry

In this appendix, we analyse the single ion sideband temperature estimator in Eq. (3) using the Fisher information formalism. The measured data (the excitation probabilities on the two sidebands) originate from a statistical model featuring an unknown parameter n¯, which is to be determined using a certain estimator. The Fisher information F (n¯) quantifies the amount of information about the unknown parameter that the chosen measurement scheme supplies. It connects to the variance of estimators ∆-
n¯2err and the sample size N via the relation known as the Cram´er-Rao inequality,

∆n¯2err

≥

1 N F (n¯)

.

(A1)

The variance saturating this inequality is the Cram´erRao bound, corresponding to the variance of the most efficient unbiased estimator for a given measurement scheme. It can be shown that in the single ion case the Cram´er-Rao bound coincides with the quantum Cram´erRao bound (QCRB), which takes into account all possible quantum measurements [37].
In Fig. 11, we plot the statistical uncertainty ∆n¯err of the estimator given by Eq. (3) as function of the sideband interrogation time together with the QCRB found from Eq. (A1) for three separate measurement scenarios. The first case represents the situation with both sidebands equally contributing to the statistics, these are the conditions where formula (3) is applied. The other two cases correspond to the situation when the data is gathered from only one of the sideband transitions, either re-
d or blue.
From the plot one sees that the QCRB of the red sideband measurement almost everywhere lies below the

14

√ ×N

∆ ¯nerr ¯n

100 50
20 10
5 30

QC RBb QC RBr QC RBr+b
∆n¯err

0.2

0.4

0.6

0.8

1

gt [2π rad]

FIG. 11. Statistical uncertainty of the temperature estimator rescaled to the sample size for different measurement schemes. Thick black curve represents the statistical uncertainty of the sideband estimator of Eq. (3). Thin curves are the quantum Cram´er-Rao bounds for the three separate cases: when the measurements are taken on the red sideband (red curve), blue sideband (blue curve) and when both sidebands contribute equally to the data sample (gray). The figure is produced for n¯ = 0.1.

other QCRB curves. This implies that the data gathered from the red sideband contain more information on the temperature than the data from the blue sideband or their equal combination. An estimator based solely on the red sideband only is thus potentially more efficient, yet for an absolute temperature determination it is not as practically convenient as the one of the sideband ratio estimator in Eq. (3), where the data from the blue sideband serves as an auto-calibration in presence of technical-
 noise. One also sees that the sideband ratio estimator is a fairly efficient choice, since the corresponding statistical uncertainty lies mostly very close to the QCRB for the two-sideband scenario and coincides with it in multiple points.
The series of equidistant peaks in the blue sideband QRCB visible in Fig. 11 can be explained analytically. The red and blue sideband excitation probabilities for a single trapped ion are given by [54]

1∞

√

Pr(n¯, t) = 2 pn(n¯)(1 − cos gt n ) ,

n=1

(A2a)

1∞

√

Pb(n¯, t) = 2 pn(n¯)(1 − cos gt n + 1 ) ,

n=0

(A2b)

respectively. Maxima of the Cram´er-Rao bound correspond to minima of the Fisher information, which in the blue sideband case is given by

Fb(t, n¯)

=

(∂n¯ Pb)2 Pb

+

(∂n¯ (1 − Pb))2 1 − Pb

=

1

1

=+

Pb 1 − Pb

∞ sin2(t√n + 1)∂n¯ pn(n¯)

2
.

n=0

(A3)

In the limit of n¯ ≪ 1, the zeros of Fisher information are determined by the condition

sin2(t)

=

sin2

√ (t 2)

,

(A4)

for which we find the relevant solutions to be

k

t = 2π

√ , k∈Z

2(1 + 2)

= 2π{0, 0.207, 0.414, 0.621, 0.828, . . . } .

(A5)

These solutions coincide well with the observed peaks of the blue sideband QCRB in Fig. 11. This pattern of equidistant peaks emerges only in the low-temperature regime with n¯ ≪ 1.

Appendix B: Sideband thermometry of ICC
The explicit form of the matrix elements ⟨0, n| Hr2(kb) |0, n⟩, needed for evaluating the power series of Eq. (12), is found by direct evaluation. The spin and motional parts of expressions are split and evaluated separately, resulting in matrix elements of polynomials in n,
⟨0, n| Hr0 |0, n⟩ = 1 , ⟨0, n| Hb0 |0, n⟩ = 1 , ⟨0, n| Hr2 |0, n⟩ = g2 ⟨0| J−J+ |0⟩ ⟨n| a†a |n⟩ = g2An , ⟨0, n| Hb2 |0, n⟩ = g2 ⟨0| J−J+ |0⟩ ⟨n| aa† |n⟩ = g2A(n + 1) , ⟨0, n| Hr4 |0, n⟩ = g4(B2n(n − 1) + B1n2) , ⟨0, n| Hb4 |0, n⟩ = g4(B2(n + 1)(n + 2) + B1(n + 1)2)
...
Here the matrix elements are shown up to the fourth power of the Hamiltonians (see the supplementary Mathematica notebook for higher powers and the explicit expressions [43]). The coefficients A and Bi are obtained from the ground-state expectation values of certain strings of collective spin operators J±. These coefficients could be efficiently computed analytically, which is discussed separately in Appendix C. After plugging these expressions into the power series of Eq. (12) and averaging over -
the occuption number n, the sideband ratio (9a) takes the form of a polynomial in n¯ and t,

Pr (t) Pb(t) − Pr(t)

≃

n¯ +(gt)2P2(n¯)−(gt)4P3(n¯)+(gt)6P4(n¯),

(B1)

as given in Eq. (9). The k-th order polynomials Pk(n¯) are

P2(n¯)

=

B2 n¯(1 6A

+

n¯),

15

P3(n¯)

=

1 360A2 n¯(1 + n¯)(1 + 2n¯)

2(C1

+ C3

+ 2C4

+ 3C5)A − 5B2(2B2

+ B1) + 15B2A2

,

1 P4(n¯) = 30240A3 n¯(1+n¯)

−315A4B2(1+2n¯)2 +35B2(B1 +2B2)2(1+2n¯)2 +42A3(C1 +C3 +2C4 +3C5)(1+8n¯(1+n¯))

+ 3A2[12D1 + 2D10 + 3D11 + 2D12 + D13 + D14 + 9D3 + 6D4 + 3D5 + 2D6 + D7 + 6D8 + 4D9+

+ 6(6D1 + 2D10 + 3D11 + 2D12 + D13 + D14 + 5D3 + 4D4 + 3D5 + 2D6 + D7 + 4D8 + 3D9)n¯(1 + n¯)−

− 70(B2 + 2B2n¯)2] − 14A B1(C1 + C3 + 2C4 + 3C5)(1 + 2n¯)2 + B2 C2 + 4(C3 + 2C4 + 3C5)+

+ 6(C2 + 3C3 + 5C4 + 7C5)n¯(1 + n¯) + 2C1[2 + 9n¯(1 + n¯)] . (B2)

An appropriate root of Eq. (B1) gives an estimator for the temperature of the motional mode. Although this equation generally has four roots, in practice it is easy to identify the one corresponding to the temperature estimation. The other roots are typically complex, negative or have values far outside of the n¯ ≲ 1 region. If somehow the ambiguity is still present, dropping all time-dependent terms in the r.h.s. of (B1) and measuring the l.h.s. at the smallest possible time provides the simplest-
 rough estimation helping to choose the correct root.
The asymptotic bias and the variance arising from the finite sampling of N /2 for both Pr and Pb are calculated as:

δn¯ = ⟨nˆ¯⟩ − n¯

1 =
N

2PbPr(2 − Pb − Pr) 1

(Pb − Pr)3

R′t(n¯)

−

PbPr(Pb + Pr − 2PbPr) (Pb − Pr)4

R′t′(n¯) [R′t(n¯)]3

,

(B3)

∆nˆ¯2error

=

1 N

2PbPr(Pb + Pr − 2PbPr) (Pb − Pr)4

1 [R′t(n¯)]2

,

(B4)

where the derivative of Rt(n¯) is understood as the derivative with respect to n¯.

C1 = ⟨0| J−J−J+J+J−J+ |0⟩ , C2 = ⟨0| J−J+J−J+J−J+ |0⟩ , C3 = ⟨0| J−J+J−J−J+J+ |0⟩ , C4 = ⟨0| J−J−J+J−J+J+ |0⟩ , C5 = ⟨0| J−J−J−J+J+J+ |0⟩ ,
D1 = ⟨0| J−J−J−J−J+J+J+J+ |0⟩ , D2 = ⟨0| J−J+J−J+J−J+J−J+ |0⟩ , D3 = ⟨0| J−J−J−J+J−J+J+J+ |0⟩ , D4 = ⟨0| J−J−J+J−J−J+J+J+ |0⟩ , D5 = ⟨0| J−J+J−J−J−J+J+J+ |0⟩ , D6 = ⟨0| J−J−J+J+J−J−J+J+ |0⟩ , D7 = ⟨0| J−J+J−J+J−J−J+J+ |0⟩ , D8 = ⟨0| J−J−J−J+J+J−J+J+ |0⟩ , D9 = ⟨0| J−J−J+J−J+J−J+J+ |0⟩ , D10 = ⟨0| J−J+J−J−J+J−J+J+ |0⟩ , D11 = ⟨0| J−J−J−J+J+J+J−J+ |0⟩ , D12 = ⟨0| J−J−J+J−J+J+J−J+ |0⟩ , D13 = ⟨0| J−J+J−J−J+J+J−J+ |0⟩ , D14 = ⟨0| J−J−J+J+J−J+J−J+ |0⟩ .

Appendix C: Mode-dependent coefficients

The coefficients A, Bi, Ci and Di given in Eqs. (B2) depend only on the structure of the interrogated motional mode and are defined as follows:

N

A = ⟨0| J−J+ |0⟩ = ηi2 = 1,

i=1

N

2

B1 = ⟨0| (J−J+)2 |0⟩ =

ηi2 = 1,

i=1


N

2N

B2 = ⟨0| J−2 J+2 |0⟩ = 2

ηi2 − ηi4 ,

i=1

i=1

Essentially, the coefficients are all the non-vanishing ex-

pectation values of strings of operators J± of a fixed

length. Using the definition J± =

N i=1

ηiσi±

each

of

the coefficients is decomposed into a sum of many strings

of particular single-atom Pauli operators. Each string is

weighted with the corresponding prefactor, consisting of

the mode vector components and sandwiched with the

spin ground state. With some combinatorics one can

classify and pick out the small number of non-zero terms

to ease the calculation. There may be several ways to do

so, one of them would be to distinguish the terms based

on the number of unique atomic indices appearing in an

individual term. For each mode-dependent coefficient we count the number of terms of each class (Cij, Dij) and then multiply it with the corresponding expectation val-

ues. This brings us to the general expression for C- and

16

D-coefficients given by

N

NN

NN N

Ci =Ci1 ηi6 + Ci2

ηi4ηj2 + Ci3

ηi2 ηj2 ηk2 ,

i=1

i=1 j̸=i

i=1 j̸=i k̸=i,j

(C1)

N

NN

NN

Di =Di1 ηi8 + Di2

ηi6ηj2 + Di3

ηi4ηj4+

i=1

i=1 j̸=i

i=1 j̸=i

NN N

+ Di4

ηi4 ηj2 ηk2 +

i=1 j̸=i k̸=i,j

NNN N N

+ Di5

ηi2ηj2ηk2ηp2 .

i=1 j̸=i j̸=i k̸=i,j p̸=i,j,k

(C2)

Listed in the tables I and II are the prefactors completing the expressions (C1, C2), which are needed to evaluate each of the C- and D-coefficients.

TABLE I. Cij-coefficients i Ci1 Ci2 Ci3
10 4 2 21 3 1 30 4 2 40 4 4 50 0 6

TABLE II. Dij-coefficients i Di1 Di2 Di3 Di4 Di5 1 0 0 0 0 24 2 14361 3 0 0 0 18 18 4 0 0 0 24 12 5 0 0 0 18 6 6 0 0 8 16 4 7 0 4 4 10 2 8 0 0 0 24 12 9 0 4 4 24 8 10 0 4 4 16 4 11 0 0 0 18 6 12 0 4 4 16 4 13 0 4 4 10 2 14 0 4 4 10 2
In order to use the new temperature estimation method, for a given motional mode one needs to com-

pute in total 22 mode-dependent coefficients. Using formulas (C1, C2), the calculation boils down to programming a cascade of several FOR-loops, which results in a computationally-friendly polynomial scaling with respect to N . Hence, one may calculate the coefficients entering the estimator easily and fast to apply the new thermometry method for arbitrarily large ion crystals. We provide a program for calculating these coefficients for a given motional mode in the code supplement [43].

Appendix D: Numerical fit estimator

A common way for estimating cold ion temperatures is fitting the experimental data with theory curves while using the temperature as a free parameter. Naturally, this technique requires the exact numerical solutions of the Schr¨odinger equation or its reasonable approximation to be available. This is, however, problematic for large ion crystals due to the exponential scaling of the Hilbert space, and causes the main bottleneck for the numerical fit. For smaller crystals, one can employ this method-
 for temperature estimation using a weighted least square optimization of the model curves with respect to unknown parameter n¯. The choice of model functions may vary, though in our case the best performance was achieved when using the red sideband collective excitation probability Pr(t, n¯). This choice is further backed by the previous observation from the single-ion case, that the Fisher information on parameter n¯ contained in the red sideband is typically significantly higher than the one co-
ntained in the blue sideband or in the combinations of both. This observation also holds in the multi-ion case for relatively short interrogation times. Using the red sideband curves as model functions makes the numerical fit estimator in our case have the following form

nˆ¯

=

arg

minS(n¯)
n¯

=

arg

min
n¯

m i=1

(Pr(ti, n¯) σi2

−

xi)2

,

(D1)

where the sum is taken over m experimental points xi, each carrying a normally-distributed error σi. The variance of this non-linear weighted least-square estimator is
given by [55]

m
∆n¯2err =
i=1

Ai σi

2 −1
SL − S(nˆ¯) ,

SL = S(nˆ¯)

1

1+

F (1, m − 1, 1 − β)

m−1

,

(D2) (D3)

with Ai = ∂Pr(ti, n¯)/∂n¯ and F (d1, d2, 1 − β) being the quantile function of statistical F-distribution with parameters d1, d2, taken at a point 1 − β. The value β = 0.317 defines a confidence interval of one standard deviation and is used for the calculations. For the experiment with a 4-ion crystal discussed in Section III, this method was used to fit the obtained sideband excitation

Pr,b

1

Pb

0.8

Pr

0.6

0.4

0.2

0

Pb

0.8

Pr

0.6

0.4

0.2

a) Mode 1 b) Mode 2

17
data. The results of the numerical fit together with the experimental data for all motional modes are shown in Fig. 12.
The symmetric center-of-mass mode deserves a special mention. Since all the individ√ual coupling strengths are equal for this mode (ηi = 1/ N ∀i), the spin dynamics evolves within the symmetric Hilbert subspace and could effectively be described using symmetric spin Dicke basis of states

Pr,b

Pr,b

Pb

0.8

Pr

0.6

0.4

0.2

c) Mode 3

1

Pb

0.8

Pr

0.6

0.4

d) Mode 4

0.2

00

200

400

600

t [µs]

1 |M⟩ =
M!

N M

−1/2
S+M |0⟩ ,

N
S+ = σi+ .
i=1

(D4)

Pr,b

FIG. 12. Red (lower points) and blue (upper points) global sideband flops of all 1-4 motional modes shown in (a)-(d), respectively, for the 4-ion crystal. The solid lines show the exact numerical solution, where n¯ was fitted as free parameter with the weighted least-square method.

This lifts the exponential scaling of the Hilbert space with respect to the number of ions N and thus makes the numerical fit applicable for the center of mass mode of larger ion crystals.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:45.656Z
- **Text Length:** 74666 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
