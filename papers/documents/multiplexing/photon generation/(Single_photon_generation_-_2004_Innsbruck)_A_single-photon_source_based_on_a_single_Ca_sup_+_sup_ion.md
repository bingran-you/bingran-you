# PDF Document: (Single photon generation - 2004 Innsbruck) A single-photon source based on a single Ca sup+sup ion.pdf

**File Path:** (Single photon generation - 2004 Innsbruck) A single-photon source based on a single Ca sup+sup ion.pdf

**Processed Date:** 2026-02-10T18:18:11.926Z

**File Size:** 865.33 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 831

**Title:** (Single photon generation - 2004 Innsbruck) A single-photon source based on a single Ca <sup>+</sup> ion

**Collection:** Multiplexing > Photon Generation

---

## Extracted Text Content

OPEN ACCESS
A single-photon source based on a single Ca+ ion
To cite this article: Christian Maurer et al 2004 New J. Phys. 6 94
View the article online for updates and enhancements.

You may also like
- O40bCsae+rv-a2t7ioAnl+oQf 1uSa0ntu3mP0LTorgaincsCitiloonckof a Si-Jia Chao, , Kai-Feng Cui et al.
- Photoionisation of Ca+ ions in the valenceenergy region 20–56 eV: experiment and theory A Müller, S Schippers, R A Phaneuf et al.
- Sympathetic cooling and detection of a hot trapped ion by a cold one M Guggemos, D Heinrich, O A HerreraSancho et al.

This content was downloaded from IP address 136.152.143.35 on 02/08/2023 at 01:31

A single-photon source based on a single Ca+ ion
Christian Maurer, Christoph Becher1, Carlos Russo, Jürgen Eschner2 and Rainer Blatt3 Institut für Experimentalphysik, Universität Innsbruck, Technikerstraße 25, A-6020 Innsbruck, Austria E-mail: christoph.becher@uibk.ac.at
New Journal of Physics 6 (2004) 94
Received 23 February 2004 Published 29 July 2004 Online at http://www.njp.org/
doi:10.1088/1367-2630/6/1/094
Abstract. We propose a deterministic source of single photons based on the vacuum-stimulated Raman transition of a single Ca+ ion trapped inside a high ﬁnesse cavity. Assuming realistic experimental parameters, the efﬁciency of photon emission into the cavity mode reaches 95%.

1 Author to whom any correspondence should be addressed. 2 Present address: Institut for Photonic Sciences (ICFO), C/ Jordi Girona, 29, 08034-Barcelona, Spain. 3 Also with: Institut für Quantenoptik und Quanteninformation, O¨ sterreichische Akademie der Wissenschaften,
Technikerstraße 25, A-6020 Innsbruck, Austria.

New Journal of Physics 6 (2004) 94 1367-2630/04/010094+19$30.00

PII: S1367-2630(04)76780-4 © IOP Publishing Ltd and Deutsche Physikalische Gesellschaft

2
Contents

DEUTSCHE PHYSIKALISCHE GESELLSCHAFT

1. Introduction

2

2. Population transfer in three-level systems

3

2.1. Raman process . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3

2.2. Adiabatic process . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4

3. Experimental atom–cavity system

5

3.1. Calcium ion and ion trap . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5

3.2. Optical cavity and coupling parameters . . . . . . . . . . . . . . . . . . . . . 6

4. Theoretical model

6

5. Single-photon emission: theoretical results

8

5.1. Raman process . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8

5.2. Adiabatic process . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 10

5.3. Comparison of adiabatic and Raman process . . . . . . . . . . . . . . . . . . . 12

6. Intensity correlation

15

7. Summary and discussion

16

Acknowledgments

18

References

18

1. Introduction
The deterministic generation of single photons in a well-deﬁned spatial and spectral mode of the radiation ﬁeld represents the ultimate control of the light emission process. Many applications in the emerging ﬁeld of quantum information science [1] require such a deterministic source of single photons. Most of the proposed and/or demonstrated schemes for single-photon generation rely on the spontaneous emission of an excited emitter with the inherent disadvantage of spatial and spectral uncertaint-
ies, even if coupled to a cavity. Such triggered single-photon emitters have been realized with molecules [2, 3], quantum well p–i–n hetero-junctions [4], colour centres [5, 6] and semiconductor quantum dots [7, 8]. On the other hand, proposed schemes based on stimulated (Raman) transitions of an emitter coupled to a cavity mode offer the advantage of photon emission into a single spatial and spectral mode of the radiation ﬁeld [9]–[11]. Stimulated single-photon emission has been demonstrated empl-
oying neutral atoms falling through a high ﬁnesse optical cavity [12]. However, as the atoms do not couple stationary to the cavity ﬁeld there is a large uncertainty in the number of photons emitted by each atom. In addition, the atoms arrive at random times at the cavity mode and the number of atoms coupled to the mode ﬂuctuates with Poissonian statistics. Very recently, the deterministic generation of single photons with high efﬁciency from one atom trapped inside a cavity has been reported [13]-
.
Photon emission schemes based on stimulated Raman transitions also offer the possibility to transfer quantum information stored in internal atomic states to a light ﬁeld by coupling to a cavity mode [14]. The interconnection of multiple atom–cavity systems via photonic channels then allows for transport of quantum information within distributed quantum networks [15]. Realization of a quantum network requires an interface between atoms as static quantum bits and photons as moving quantum bits. Such-
 an interface could be based on the deterministic coupling of a single atom or ion to a high ﬁnesse optical cavity [16, 17], which
New Journal of Physics 6 (2004) 94 (http://www.njp.org/)

3

DEUTSCHE PHYSIKALISCHE GESELLSCHAFT

requires the ability to precisely and stationary place the atom at a ﬁxed position within the cavity ﬁeld.
There have been recent achievements in transporting, temporarily trapping and localizing neutral atoms inside high ﬁnesse optical cavities [18]–[20] which partially have resulted in deterministic single-photon emission [13]. On the other hand, trapped and laser-cooled ions are ideally suited systems for the realization of deterministic single-photon sources and atom– photon interfaces. A trapped ion’s motional wavepacket is conﬁned to a region much smaller than the optical wavelength λ (to approxi-
mately λ/50) and its position within a cavity standing wave (SW) ﬁeld can be controlled with a precision of up to 7 nm [17]. In addition, by applying external laser ﬁelds, one can fully control the motional and internal quantum state of a trapped ion [21, 22].
In the present paper, we study the implementation of a deterministic source of single photons based on the vacuum-stimulated Raman transition of a single Ca+ ion trapped inside a high ﬁnesse cavity. Our proposal combines the advantages of stimulated Raman emission schemes and laser-cooled trapped ions, stationary coupled to the mode of a high ﬁnesse optical cavity. The paper is organized as follows. In section 2, we review population transfer schemes in threelevel systems and compare Raman and adi-
abatic processes. In section 3, we present the physical system consisting of the single 40Ca+ ion and the high ﬁnesse optical cavity. In sections 4 and 5, we describe the theoretical model based on realistic parameters and results for the two types of population transfer processes. The intensity correlation function for a train of single photons produced by Raman transfer is calculated in section 6.

2. Population transfer in three-level systems
In a three-level -system, as depicted in ﬁgure 1, with two ground states |1 and |3 , one can, in principle, coherently transfer the whole population from one ground state to the other. In the following, we review two possible processes fulﬁlling this condition. The general scheme investigated is a -system initially prepared in state |1 and emitting a single photon upon transition between states |2 and |3 .

2.1. Raman process

If the lasers are far detuned from atomic resonance, i.e. ( 1, 3) ( 12, 23, 21, 23) and the difference of the detunings is not too large (| 1 − 3| ( 1, 3)) the population of level |2 becomes very small and one can eliminate this level adiabatically. In this regime

an effective two-level system is obtained. The population transfer from level |1 to level |3

can be calculated from the solutions of a two-level system with an effective Rabi frequency

eff = 12 23/(2 1) [23]. The effective spontaneous emission rate from level |2 can then be calculated as eff = 212/(4 21) with = 21 + 23 being the total emission rate from level |2 . The interaction of the radiation ﬁeld with the atom induces an AC-Stark splitting of the atomic

levels. For the case 12

23

the

splitting

is

λ±

=

1 2

(

1± 2

2 1

+

212).4 If the second

laser is resonant with the level shifted by the AC-Stark effect ( 3 = λ+), a two-photon resonance

condition is achieved. In this case, it is possible to obtain a complete coherent population transfer

between levels |1 and |3 . The effective Rabi frequency for the transfer is proportional to 12/ 1

4 Note that the theoretical model presented in section 4 is not restricted to this case.

New Journal of Physics 6 (2004) 94 (http://www.njp.org/)

4

DEUTSCHE PHYSIKALISCHE GESELLSCHAFT

Figure 1. Level scheme for a three-level -conﬁguration. 12 and 23 denote coupling of levels |1 –|2 and |2 –|3 by external ﬁelds with detuning 1 and 3, respectively. Level |2 decays with a rate of 21 and 23 into states |1 and |3 ,
respectively.

whereas the emission rate is proportional to ( 12/ 1)2. It is thus always possible to achieve an effective Rabi frequency larger than the spontaneous emission rate, eff > eff , if the detuning is large enough, i.e. if the condition 12/ 1 < (2 23)/ is fulﬁlled. This is also the case for a small Rabi frequency 23 and a large emission rate .

2.2. Adiabatic process

Another process to achieve a population transfer with small residual population in level |2 is

the technique of stimulated Raman adiabatic passage (STIRAP) [24]. Using the same notation

as in the previous section, the Hamiltonian of a three-level system can be written as



21

H

=

¯h 2



12

∗ 12
0

 0

∗ 23



(1)

0

23 2 3

If both lasers have the same detuning, 1 = 3, one obtains the following eigenstates:

|a+ = sin θ sin φ | 1 + cos φ | 2 + cos θ sin φ | 3 ,

|a0 = cos θ |1 − sin θ | 3 ,

(2)

|a− = sin θ cos φ | 1 − sin φ | 2 + cos θ cos φ | 3 .

New Journal of Physics 6 (2004) 94 (http://www.njp.org/)

5

DEUTSCHE PHYSIKALISCHE GESELLSCHAFT

Figure 2. Relevant levels of the 40Ca+ ion (a) and sketch of the linear ion trap cavity system (b).

Here, the mixing angle θ is deﬁned as tan θ = 12/ 23 (the angle φ is not important for

the following discussion [11, 24]). The energies of the above eigenstates are ( 1 = 3):

ω±

=

1 2

(

1±

2 1

+

2 12

+

223) and ω0 =

1, respectively. The eigenstate |a0 is a dark state

with regard to emission from level |2 . Population transfer from level |1 to |3 can be achieved

by slowly varying the mixing angle from θ = 0 to θ = π/2, i.e. by varying the laser intensities.

The alteration of the laser intensities has to occur slowly to prevent the system from occupying
state |2 . A measure for the non-adiabatic coupling between the dark state and states |a± is given by the matrix element | a± | a˙0 |. The loss of the dark state is small when the matrix element is small compared with the splitting of the energy eigenvalues | a± | a˙0 | |ω± − ω0|, which yields |θ˙| |ω± − ω0| as a criterion for the condition of adiabaticity [11, 25]. |θ˙| depends on

the temporal variation of 12 and 23 and is discussed for our scheme in section 5.2.

3. Experimental atom–cavity system
3.1. Calcium ion and ion trap
Figure 2 shows the relevant energy levels of the 40Ca+ ion. The three-level system considered here is spanned by the S1/2–P3/2 transition (393 nm), driven by an external laser ﬁeld, and the levels P3/2–D5/2 which are coupled by a cavity mode (854 nm). The lifetime of the D5/2 state is 1.16 s, which can be considered as stable compared with the time scale of the population transfer process of 50 µs. The lifetime of the P3/2 state is 7.4 ns, and the branching ratios from P3/2 to S1/2, D5/2 and D3/2 -
are 1;(1/17.6);(1/150.8), respectively [26]. The S1/2–P1/2 transition at 397 nm is used to Doppler-cool the ion. Lasers at 866 and 854 nm are required to prevent shelving of the ion in one of the D states. In the proposed experiments, we use the following stabilized laser sources: two cavity-locked diode lasers at 866 and 854 nm and two Ti:Sa lasers at 786 nm (<1 kHz linewidth) and 794 nm (<300 kHz linewidth), both resonantly frequency-doubled to obtain light at 393 and 397 nm, respectively. For c-
oherent manipulation on the S1/2–D5/2 transition, a Ti : Sa laser at 729 nm (<1 kHz linewidth) is available. A magnetic ﬁeld of 3 G splits the energy levels into Zeeman components. For dipole transitions between S, P and D states, the matrix elements are largest for the outermost Zeeman substates. Therefore, we choose the states |S1/2, mj = −1/2 , |P3/2, mj = −3/2 and |D5/2, mj = −5/2 as -system.
New Journal of Physics 6 (2004) 94 (http://www.njp.org/)

6

DEUTSCHE PHYSIKALISCHE GESELLSCHAFT

For the experiments, the 40Ca+ ion will be stored in the harmonic potential of a linear Paul trap [27]. The trap is made of four blades for radial conﬁnement with a spacing of 1 mm and two tips for axial conﬁnement with a spacing of 5 mm (see ﬁgure 2).

3.2. Optical cavity and coupling parameters
The transition from the P3/2 state to the D5/2 state is driven by the vacuum ﬁeld of an optical resonator placed around the ion trap (see ﬁgure 2). The cavity mirrors are mounted on piezo translators so that the ion can be placed at an arbitrary position within the cavity standing wave ﬁeld.
The parameter g for the coupling of a two-level system and a cavity mode can be calculated [28] for the |P3/2, mj = −3/2 to |D5/2, mj = −5/2 transition as

g=

2cγ⊥λ2 π2Lω02

,

(3)

where L denotes the cavity length, ω0 the waist radius and 2γ⊥ = γ = 23 the spontaneous decay rate on the |P3/2, mj = −3/2 to |D5/2, mj = −5/2 transition. Note that the vacuum-
Rabi frequency for the above transition is 23 = 2g. Equation 3 shows that the coupling strength g can be increased by decreasing the mode volume Lω02. However, the minimum distance of the two mirrors is limited by the extension of the ion trap. Here, a near concentric cavity will give

the smallest mode cross-section for a given cavity length. In the experiment, the cavity mirrors

have a radius of curvature of 10 mm and are placed at a distance of 19.95 mm, giving rise to a waist radius of ω0 = 11.65 µm. With γ⊥ = 2π × 0.79 MHz we obtain g = 2π × 1.51 MHz. The mirrors have high-reﬂectivity coatings with transmissions of 4 and 40 ppm, where the higher

transmission side deﬁnes an output channel. From cavity decay measurements we infer a ﬁnesse of 9 × 104 which yields a cavity lifetime of 1.9 µs and a cavity decay rate κ = 2π × 41.7 kHz.

4. Theoretical model
To simulate the single-photon emission we use an eight-level model, including Zeeman sublevels of the ion and cavity Fock states as follows (see ﬁgure 3).
The system is initialized in the ground state |S1/2, mj = −1/2 |0 by optical pumping where we use the notation |atomic state, Zeeman sublevel | cavity photon number . A circularly polarized laser ﬁeld with detuning p couples this ground state to the state |P3/2, mj = −3/2 |0 with Rabi frequency . From the |P3/2, mj = −3/2 |0 state there are various spontaneous decay channels to the |S1/2, mj = −1/2 |0 , |D3/2, mj = −3/2 |0 and |D3/2, mj = −1/2 |0 states with total decay rate and to the |D5/2, mj =-
 −1/2 |0 , |D5/2, mj = −3/2 |0 and |D5/2, mj = −5/2 |0 levels with rate γ = (1 − ε)γ , where ε denotes the solid angle covered by the cavity mode (ε ≈ 10−4 for our cavity). The relative coupling strengths for the transitions from |P3/2, mj =√−3/2 |0 to |D5/2, mj = −1/2 |0 , |D5/2, mj = −3/2 |0 and |D5/2, mj = −5/2 |0 are 1/ 10, 2/5 and 1. If the ions ends up in the |D3/2, mj = −1/2 |0 or |D3/2, mj = −3/2 |0 states, it can be repumped to the ground state via the P1/2 state with a laser at 866 nm. A-
ll spontaneously emitted photons are considered as loss photons which can destroy the phase coherence between initial and ﬁnal states. The ratio of spontaneously and stimulated emitted photons deﬁnes a quality factor for the transfer as discussed below.
New Journal of Physics 6 (2004) 94 (http://www.njp.org/)

7

DEUTSCHE PHYSIKALISCHE GESELLSCHAFT

Figure 3. Eight-level model of the ion–cavity system. The thick lines represent the levels used in the simulation. For all other notations see text.

The desired single-photon emission to the |D5/2, mj = −5/2 |1 state is coupled by the cavity with coupling strength g. The states with a single-cavity photon |D5/2 |1 decay to cavity vacuum states |D5/2 |0 with rate 2κ. Reexcitation to the |P3/2, mj = −3/2 |0 state by reabsorption of a cavity photon can be suppressed by detuning the cavity from the atomic resonance. From the |D5/2 |0 states the system can be repumped to the ground state with a laser ﬁeld at 854 nm driving the D5/2 to P3/2 transiti-
on and subsequent spontaneous decay. After this step the photon generation process can start again.
To calculate the dynamics of this open system of cavity mode and ion states, we use
the density matrix formalism. Dissipative processes such as spontaneous emission and laser
linewidths are included in the Lindblad form of the master equation [29]

ρ˙ = Lρ = − i [H, ρ] + 1

¯h

2

(2AijρA†ij − ρA†ijAij − A†ijAijρ),

(4)

ij

where H is the Hamiltonian of the system without dissipation, Aij are operators for dissipative processes and the Liouville operator L is a s√uperoperator. The operator Aij for the decay from state |i to state |j can be written as Aij = |j i|. The linewidth of th√e pump laser and an additional linewidth of the stabilized cavity are included by operators Ajj = 2δν|j j| when the laser (cavity) couples state |j to another state. The master equation is solved for one excitation cycle to yield the foll-
owing quantities: (i) The emission rate of photons into the resonator which is proportional to the population in |D5/2 mj = −5/2 |1 , with a proportionality factor of 2κ. (ii) The probability Pem for the emission of one photon into the resonator during each excitation cycle, i.e. the area under the emission rate curve times 2κ (photon loss rate from cavity). (iii) The photon emission time tem (width of the emitted pulse), where we use the full width at 1% of the maximum of the emission rate. This -
pulse width is equivalent to a 98% probability that the photon emission into the cavity occurred within tem. The emission time, compared with the cavity decay time 1/(2κ), determines how well the one-photon pulse can be considered Fourier-limited. (iv) A quality factor β which we deﬁne as Pem divided by all scattered photons during one cycle.

New Journal of Physics 6 (2004) 94 (http://www.njp.org/)

8

DEUTSCHE PHYSIKALISCHE GESELLSCHAFT

All photons, which are scattered from the ion but not emitted into the cavity, are considered as loss photons. The loss rate is proportional to the population of P3/2 times the total spontaneous decay rate from this level.

5. Single-photon emission: theoretical results
5.1. Raman process
The Raman process is an effective two-level process, as discussed in section 2.1. The population of the intermediate state P3/2 can be kept very small by choosing large detunings p and
c. The laser at 393 nm induces an AC-Stark shift of the level P3/2. The Raman condition is satisﬁed if the cavity frequency is resonant with the transition from the |D5/2, mj = −5/2 state to the |P3/2, mj = −3/2 state, which is shifted by the AC-Stark effect. The effective Rabi frequency, which we call Raman–Rabi frequency, is RR = g( / p) and the effective emission rate can be calculated as eff = sp 2/(4 2p), where sp = + γ is the total emission rate from P3/2.
The ﬁrst condition for a Raman population transfer is RR eff such that unwanted spontaneous processes are suppressed. To fulﬁl this condition, it is important to note that RR and eff can be altered by changing the ratio of / p in a way such that RR eff . In this regime, one would expect Rabi oscillations if the two-photon resonance condition is fulﬁlled. Rabi oscillations can occur only when there is one photon in the cavity, which provides the energy to excite the ion. However, after the photon h-
as been emitted from the cavity the ion remains in the state |D5/2, mj = −5/2 |0 .
As a second condition for phase-coherent transfer, the Raman–Rabi frequency has to be larger than the cavity decay rate 2κ to achieve complete population transfer between states |S1/2, mj = −1/2 and |D5/2, mj = −5/2 before the photon leaves the cavity. The two conditions lead to the following boundaries for the ratio of / p: κ/g < /δp < 4g/ sp. With the numbers for g and κ given in section 3.2 and the total decay rate of the P3/2 state,
sp = 2π × 23 MHz, we get 0.027 < / p < 0.26. Figure 4 shows the time evolution of different level populations for three ratios of / p
under the assumption of an ideally coherent excitation (laser linewidth = 0). The effective Rabi frequency is equal to the cavity decay rate in the ﬁrst case ( / p = 0.03), whereas in the last case ( / p = 0.3) it is comparable with the effective spontaneous decay rate. The Raman–Rabi oscillation is damped by the effective emission rate and by the cavity decay rate. Therefore, Rabi oscillations are hardly visible even though the system behaves as a two-level system.
Figure 5 shows the emission probability Pem, the photon emission time tem, the quality factor β, all as deﬁned in section 4, and the maximum population of the P3/2 state during the excitation process, as function of / p. The emission probability Pem and the quality factor β are large for small values of / p 1 as the population of the P3/2 state is kept small. The effective spontaneous emission rate is proportional to ( / p)2 and therefore decreases faster than the Raman–Rabi frequency, keeping the-
 condition RR > eff fulﬁlled. The width of the emitted photon pulse tem increases with decreasing / p as the Raman–Rabi frequency decreases. The photon emission probability Pem and the quality factor β reach a constant value for RR eff , i.e. / p 4g/ sp = 0.26 with our parameters. The Purcell factor F¯ = 1 + (2g2)/(κ sp), which characterizes the enhancement of the photon emission into the cavity is F¯ = 5.86 with our parameters. The spontaneous emission factor β , i.e. the fraction of spontaneous -
emission
New Journal of Physics 6 (2004) 94 (http://www.njp.org/)

9

DEUTSCHE PHYSIKALISCHE GESELLSCHAFT

Figure 4. Time evolution of different level populations for the ideal Raman process. The ratio / p is 0.03, 0.16, and 0.3 for (a), (b) and (c), respectively. The Raman–Rabi frequencies RR are 2π × (0.045, 0.24, 0.45) MHz and the effective emission rates are eff = 2π × (0.0048, 0.14, 0.48) MHz. The photon emission probability Pem is shown as inset for each conﬁguration.
from the P3/2 level emitted into the resonant cavity mode, is β = (F¯ − 1)/F¯ = 0.829. This value agrees well with the quality factor for the coherent population transfer β = 82.3% obtained from the theoretical simulation for / p → 0 (see ﬁgure 5).
If the Raman–Rabi frequency is smaller than the cavity decay rate, RR < κ for / p < 0.027 with our parameters, the photon is emitted out of the cavity before it can be reabsorbed by the ion and no Rabi oscillation occurs (ﬁgure 4(a)). If, on the other hand, the ratio / p increases, the Raman–Rabi frequency increases and becomes larger than κ. The emission time tem now depends only on the cavity decay rate. The quality factor β decreases because the state P3/2 is increasingly populated and more pho-
tons are lost. Due to the increase of spontaneously emitted photons, the emission probability Pem decreases as well. If the ratio / p > 0.26, the
New Journal of Physics 6 (2004) 94 (http://www.njp.org/)

10

DEUTSCHE PHYSIKALISCHE GESELLSCHAFT

Ω /∆

Ω /∆

β

Ω /∆

Ω /∆

Figure 5. Emission probability Pem, photon emission time tem, quality factor β, and maximum population of level P3/2 as a function of / p. The parameters for the simulation are ( , g, κ) = 2π × (10, 1.5, 0.04) MHz. The dotted lines show the boundary conditions for / p for fulﬁlling the conditions eff 2κ (left line) and eff eff (right line).

Raman–Rabi frequency RR becomes smaller than the effective spontaneous emission rate eff and therefore the population transfer into the state D5/2 is small.

5.2. Adiabatic process

As discussed in section 2.2, the interaction of coherent light ﬁelds with a three-level system gives rise to new eigenstates (equation (2)). The energy splitting of these eigenstates is highest if the laser frequency and the cavity mode are near resonant with the speciﬁc atomic transition, i.e. , g c, p. The adiabatic condition θ˙ < |w± − w0| is thus achieved easiest for zero detuning which we accordingly have used in the following investigations. The dark state of our system is

|a0 = cos θ|S1/2, mj = −1/2 |0 − sin θ|D5/2, mj = −5/2 |1

(5)

with the mixing angle θ deﬁned by tan θ = /(2g). A complete population transfer is possible only when the mixing angle is varied from 0 to
π/2. To reach θ = π/2 it is necessary to turn the cavity coupling off. Experimentally, however, it is more appropriate to stabilize the cavity to one speciﬁc frequency instead of applying a
time-dependent detuning. Nevertheless, a good population transfer is still possible if the Rabi
frequency 0 of the laser is much larger than the cavity coupling g. To give an example, for 0 = 6g(20g), the ﬁnal population of state |D5/2, mj = −5/2 |1 is 0.95 (0.995). Thus, we
only vary the laser intensity for the simulation of the photon emission process. The pump laser Rabi frequency is modelled as (t) = 0 sin2(at) for 0 < t < τ and (t) = 0 for t > τ where

New Journal of Physics 6 (2004) 94 (http://www.njp.org/)

11

DEUTSCHE PHYSIKALISCHE GESELLSCHAFT

Figure 6. Time evolution of different level populations for the ideally coherent adiabatic process: (a) population of the three levels taking part in the adiabatic population transfer; (b) photon emission rate Pem and loss photon rate from state P3/2; (c) projection of the system onto the dark state a0; (d) time-varying pump pulse intensity and cavity coupling g. The cavity coupling g is kept constant. The parameters for the simulation are ( 0, g, κ) = 2π × (10, 1.5, 0.04) MHz, pulse rise time τ =-
 80 µs and detunings c = p = 0.
a = π/(2τ) and τ is the rise time of the pump laser pulse. To check the dependence of our results on the pulse shape, we also modelled the pump pulse as a Gaussian pulse or a linearly rising function.
Figure 6 shows a typical time evolution of an ideal lossless adiabatic process. The population is initially in the state |S1/2, mj = −1/2 |0 (solid line in ﬁgure 6(a)). By slowly increasing the laser intensity (solid line in ﬁgure 6(d)), the system follows the dark state and therefore the state |D5/2, mj = −5/2 |1 (dotted line in ﬁgure 6(a)) becomes populated. This state decays with the cavity decay rate 2κ into the state |D5/2, mj = −5/2 |0 (dashed-dotted line in ﬁgure 6(a)). Figure 6(b) shows th-
e emission rate for photons into the cavity Pem and the loss rate from level P3/2. This level is populated due to an admixture of the P3/2 state to the dark state
New Journal of Physics 6 (2004) 94 (http://www.njp.org/)

12

DEUTSCHE PHYSIKALISCHE GESELLSCHAFT

Ω ττ

Ω ττ

β

Ω ττ

Ω ττ

Figure 7. Emission probabilityPem, photon emission time tem, quality factor β and the deviation of the density matrix from the dark state 1 − a0|ρ|a0 as a function of R = ( 0/g) × (τc/τ)2. The parameters for the simulation are ( 0, g, κ) = 2π × (10, 1.5, 0.04) MHz.

by small deviations from adiabatic following and by damping of the system due to cavity decay and spontaneous emission. These deviations from the dark state can be monitored by calculating the projection of the system’s density matrix onto the dark state a0 (ﬁgure 6(c)). Although the deviation is less than 1%, non-adiabatic following and damping leads to a signiﬁcant loss rate. With the parameters given in ﬁgure 6, we yield an emission probability Pem = 97.9%, an emission time tem = 38.3 µs and a -
quality factor β = 77.7%.
For further discussion we deﬁne the parameter R = ( 0/g) × (τc/τ)2 to characterize the adiabatic process, as we ﬁnd that all processes with the same R lead to similar results. Here, τc = 1/(2κ) is the photon lifetime in the cavity, and R correlates with Rabi frequency and rise time of the pump pulse with the respective cavity parameters. Figure 7 shows the emission probability Pem, the photon emission time tem, the quality factor β, all as deﬁned in section 4, and the deviation of the density matr-
ix from the dark state 1 − a0|ρ|a0 as a function of R. For large R the adiabatic condition is not fulﬁlled, and there are losses from the state P3/2 which is populated during the process. Here, the change of the laser intensity is too rapid for the system to follow the dark state. In case of a smaller R, Pem and β reach a constant value. A further decrease of R leads to a slower population transfer and increasing photon pulse width tem.
If the detunings p and c are increased, the process quality factor and photon emission probability stay unchanged as long as 0, g c, p, i.e. p = c 2π × 106. Increasing the detunings further leads to reduced Pem and β.
5.3. Comparison of adiabatic and Raman process
Adiabatic and Raman processes can be seen as limiting cases of general coherent transfer schemes. Generally, a rapid adiabatic passage works best for small detunings from the atomic
New Journal of Physics 6 (2004) 94 (http://www.njp.org/)

13

DEUTSCHE PHYSIKALISCHE GESELLSCHAFT

(∆c − ∆p) /2π

106

90

105

80

104 103

70

102

60

101

50

0

-101

40

-102

30

-103

-104

20

-105

10

-106

100 101 102 103 104 105 106 107 108 109

∆p /2π

Figure 8. Photon emission probability Pem of a coherent transfer as a function of the pump laser detuning p and of the relative detuning of pump laser and cavity
c − p. p is varied between 0 and 2π × (109) Hz, whereas c is chosen such that the difference c − p varies between 0 and 2π × (6.7 × 106) Hz. With this choice, we ensure that the adiabatic condition and the Raman condition can be
exactly fulﬁlled for each pump laser detuning. The parameters for the simulation are τ = 10 µs and ( 0, g, κ) = 2π × (10, 1.5, 0.04) MHz.

levels (section 5.2), whereas the Raman scheme requires large detunings (section 5.1). To monitor
the transition from an adiabatic to a Raman passage, we calculate the photon emission probability
of a coherent transfer as a function of pump laser and cavity detuning. In contrast with the model
for the Raman passage, where the pump beam had a constant Rabi frequency, the pump pulse
used here is modelled in the very same way as for the adiabatic passage described in the previous section, with a pulse rise time of τ = 10 µs.
Figure 8 shows the photon emission probability Pem for different values of the pump laser and cavity detunings p and c. The photon emission probability Pem is plotted as a contour plot where blue areas indicate low probabilities and red areas indicate high probabilities. In the case of small detunings, p < 2π × (106) Hz and c − p < 2π × (105) Hz, the condition for the adiabatic process is fulﬁlled and Pem reaches a value of ≈76% (bright red area in ﬁgure 8). Note that this value is smaller than th-
e optimum value calculated in section 5.2 as the pump pulse rise
time is slightly too short for the given value of 0 and the system’s state slightly deviates from the dark state (cf ﬁgure 7 with log(( 0/g) × (τc/τ)2) ≈ 1). A deviation from the two-photon resonance by less than 2π × (105) Hz does not change the efﬁciency of the adiabatic passage.
Increasing p above 2π × (106) Hz initially leads to a reduction of Pem as the energy splitting between dark and bright states (equation (2)) becomes smaller and the dark state is
no longer well-deﬁned. If the pump laser detuning is much bigger than the pump laser Rabi frequency, i.e. p > 2π × (108) Hz in ﬁgure 8 (cf the case 0/ < 0.1 in ﬁgure 5), the system reaches the Raman regime (dark red stripe in ﬁgure 8). If the cavity is on Raman resonance,

New Journal of Physics 6 (2004) 94 (http://www.njp.org/)

14

DEUTSCHE PHYSIKALISCHE GESELLSCHAFT

β

Figure 9. Photon emission probability Pem and quality factor β as a function of photon emission time tem for the adiabatic process and the Raman process. The emission time tem depends on R = 0/τ2 for the adiabatic process and on the ratio / p for the Raman process. Both ideal lossless (pump laser and cavity linewidth zero) and realistic lossy (pump laser and additional cavity linewidth of 2π × 10 kHz, respectively, δad = δram = 2π × 10 kHz) processes are considered. The parameters for the simulati-
on are τ = 1 s for the adiabatic process ( 0 is varied to cover the speciﬁed range of tem), = 2π × 10 MHz for the Raman process ( p is varied to yield the range of tem) and (g, κ) = 2π × (1.5, 0.04) MHz.
i.e. the deviation of the cavity detuning c from the Stark-shifted level λ+ is smaller than the cavity linewidth 2κ, the photon emission probability is high (Pem ≈ 94%).
A more realistic simulation of the photon emission process has to include the linewidth of the pump laser as well as the inhomogeneous linewidth of the frequency stabilized cavity [30] which may not be negligible compared with the homogeneous linewidth 2κ due to jitter introduced by the frequency stabilization. Another source of experimental uncertainty is a deviation from the exact resonance conditions, i.e. a detuning of the cavity resonance from the AC-Stark shifted level c = λ+ for the Raman p-
rocess or a non-equal detuning c = p for the adiabatic process. We model these deviations by assuming c − λ+ = δram in the ﬁrst case and by c − p = δad in the latter. Taking these linewidths and detunings into account, we obtain more realistic values for the photon emission probability Pem and the quality factor β of the two processes. The ﬁnite linewidths, however, have no effect on the photon emission time tem. In ﬁgure 9, we compare the photon emission probability and the quality factor as a fu-
nction of the emission time for the adiabatic process and the Raman process. For the modelling of the adiabatic process, we also used pump pulses with a Gaussian proﬁle or linear slope. However, for identical photon emission times tem, we ﬁnd identical photon emission probabilities Pem for all pump pulse shapes.
For the ideal lossless case (zero pump laser and cavity linewidth), both the Raman and the adiabatic process provide very similar Pem and β. This behaviour changes when we include a
New Journal of Physics 6 (2004) 94 (http://www.njp.org/)

15

DEUTSCHE PHYSIKALISCHE GESELLSCHAFT

linewidth for the pump laser and the additional linewidth of the stabilized cavity of 2π × 10 kHz. The photon emission probability Pem reduces by about 2% for the Raman process and by about 10% for the adiabatic process. The quality factor β for the processes is very sensitive to the considered linewidths and detunings. β is reduced by about 10% for the realistic Raman process and by about 30% for the realistic adiabatic process. For linewidths and detunings larger than 2π × 10 kHz, both Pem and β-
 decrease drastically. Thus, for realistic experimental parameters, the Raman scheme turns out to be more efﬁcient.

6. Intensity correlation

In this section, we model the generation of a train of successive single photons. We consider
the Raman process only since it is more efﬁcient for realistic parameters, as shown in the previous section. The ﬁnal state of the stimulated single-photon generation is the |D5/2, mj = −5/2 |0 state. If spontaneous emission from the |P3/2, mj = −3/2 |0 state occurred, the ion is found either in the |S1/2, mj = −1/2 |0 state or in one of the Zeeman sublevels of the |D5/2, mj = −5/2, −3/2, −1/2 |0 state. To bring the ion back into the initial ground state |S1/2, mj = −1/2 |0 , we apply a broad-band-
 laser at 854 nm which excites the ion resonantly into the state P3/2. This state decays with a branching ratio of 17.6 : 1 into the states S1/2 and D5/2, respectively. Multiple excitation of the cavity mode due to spontaneous emission from the P3/2 state can be suppressed by detuning the cavity from the atomic resonance (which is inherently
fulﬁlled for the Raman process). A circularly polarized laser at 397 nm ﬁnally pumps the ion to the |S1/2, mj = −1/2 state.
In the theoretical model for the sequential generation of single photons, we use only the three ion states |S1/2, mj = −1/2 , |P3/2, mj = −3/2 and |D5/2, mj = −5/2 which are directly coupled by the population transfer processes. We also include the ﬁrst three Fock states |n = 0 , |n = 1 and |n = 2 for the cavity mode. Therefore, we obtain the 9 levels depicted in ﬁgure 10.
The lasers at 393 nm ( 393) and at 854 nm ( 854) couple levels of the same Fock state, whereas cavity coupling g and cavity decay κ increase (decrease) the Fock state by one. If the repump laser at 854 nm is applied too early it is possible to pump the ion into the state |S1/2, mj = −1/2 |1 with still one photon in the cavity. As a consequence there is a small probability to obtain a
two-photon state in the cavity depending on the repetition rate of the whole photon generation
and repumping sequence. To quantify this two-photon probability we calculate the intensity correlation function g2(τ)
deﬁned as

g2(τ) =

a†(t)a†(t + τ)a(t + τ)a(t) ,

(6)

a†(t)a(t) a†(t + τ)a(t + τ)

where a and a† are the photon annihilation and creation operators for the cavity mode, respectively. The correlation function g2(τ) is calculated using the quantum regression theorem [31]:
a†(t)a†(t + τ)a(t + τ)a(t) = trace {a†(t)a†(t + τ)a(t + τ)a(t)ρ(t)}

= trace {a†(t + τ)a(t + τ)ρt(t + τ)},

(7)

New Journal of Physics 6 (2004) 94 (http://www.njp.org/)

16

DEUTSCHE PHYSIKALISCHE GESELLSCHAFT

|2>

k

|1> P3/2

|0>

|2>

P3/2

|1> k

|0>

Ω393

g Ω854

|2>

k

|1> D5/2

Γ

|0>

|2>
|1> D5/2 k
|0>

|2>
|1> S1/2 k
|0>
Photon generation

|2>
|1> S1/2 k
|0>
Repump mechanism

Figure 10. Nine-level model used for simulating sequential single-photon emission.

where ρt(t + τ) denotes the density matrix evaluated at time t + τ when the temporal evolution started with the density matrix ρ(t), and the trace is calculated over all degrees of freedom.
Figure 11 shows the time evolution of the considered ion states, the photon emission and the
intensity correlation function for a sequence of four photon generation and repumping processes.
The populations of the considered ion states (ﬁgure 11(a)) show the same time evolution as in
ﬁgure 4. The emission of single-photon pulses into the cavity and the spontaneous decay from state P3/2 is plotted in ﬁgure 11(b). During the repeated sequences the cavity coupling g is always kept constant (ﬁgure 11(c)). The pump laser at 393 nm is turned off when the repump laser at 854 nm is applied to avoid excitation of cavity states with n > 1. The intensity correlation function g2(τ) is shown in ﬁgure 11(d). Note that the abscissa for the last diagram denotes the
time delay between photon detection events, not an absolute time scale. The maxima of the
intensity correlation function have the same spacing as the maxima of the emission rate into the cavity. For the parameters given above, we obtain g2(0) < 10−4 for a photon pulse width of 52 µs and a pulse repetition rate of 1.9×104 s−1.

7. Summary and discussion
We have presented theoretical calculations based on realistic parameters for deterministic singlephoton generation from a single trapped ion. The comparison of adiabatic and pure Raman processes yields higher photon emission probabilities for the Raman process under assumption of realistic parameters. The probability Pem for emitting a single photon per pump pulse can be as much as 95% for the Raman process and up to 88% for the adiabatic process. Singlephoton repetition rates of ≈20 kHz with vani-
shing two-photon probability g2(0) < 10−4 are predicted. An experimental implementation of the single-photon emission scheme is currently in progress.
New Journal of Physics 6 (2004) 94 (http://www.njp.org/)

17

DEUTSCHE PHYSIKALISCHE GESELLSCHAFT

Figure 11. Time evolution of state populations, photon emission and intensity correlation function for a sequence of photon generation and repumping processes in the Raman scheme. Parameters for the simulation are ( 393, g, 393, κ) = 2π × (10, 1.5, 333, 0.04) MHz.
These numbers can be compared with recent realizations of single-photon sources with neutral atoms temporarily coupled to the mode of a high ﬁnesse cavity [12, 13]. In the ﬁrst experiment [12], atoms are released from a magneto-optical trap and fall through the cavity in a way that the probability of ﬁnding a single atom inside the cavity at any given time is 5.7% (0.18% for 2 or more atoms). Each atom emits up to seven photons into the cavity mode with a repetition rate of 250 kHz. However, the a-
verage efﬁciency for single-photon emission into the cavity mode per excitation pulse is only 17% as the atoms are not localized at an antinode of the ﬁeld, but have random trajectories. In the second experiment [13], on the other hand, atoms are stored in a dipole trap within the cavity mode volume for 0.14 s. Here, the measured emission probability per excitation pulse is consistent with unity and, on average, each atom emits 1.4 × 104 photons during its storage time (repetition rate 100 kHz). I-
n 3% of all storage
New Journal of Physics 6 (2004) 94 (http://www.njp.org/)

18

DEUTSCHE PHYSIKALISCHE GESELLSCHAFT

events two atoms are trapped which leads to g2(0) = 0 (16-fold suppression compared with a Poissonian light source). Again, atoms are not localized in the cavity standing wave and no number is given for the repetition rate of storage events.
A single-photon source based on a single trapped and localized ion, as proposed in this paper, would yield smaller repetition rates and longer pulses as the cavity coupling is weaker. Photon emission efﬁciencies would be comparable with the single stored atom source and exceed the efﬁciency of the ‘falling atom’ source. Its main advantage, however, would be the constant and predictable stream of triggered single photons, which can be emitted with deﬁned polarization and can be extracted from the c-
avity with an efﬁciency of about 60%.

Acknowledgments
We thank K Bergmann, M Hennrich, A Kiraz, G Morigi and H Ritsch for helpful discussions. This work is supported by the Austrian ‘Fonds zur Förderung der wissenschaftlichen Forschung’ (SFB15) by the European Commission IHP network ‘QUEST’ (HPRN-CT-2000-00121) and IST/FET program ‘QUBITS’ (IST-1999-13021) and by the ‘Institut für Quanteninformation GmbH’. C Russo acknowledges support by Fundac¸a˜o para a Cieˆncia e a Tecnologia (Portugal) under the grant SFRH/BD/6208/2001.

References
[1] Bouwmeester D, Ekert A and Zeilinger A (ed) 2000 The Physics of Quantum Information (Berlin: Springer) [2] Brunel C, Lounis B, Tamarat P and Orrit M 1999 Phys. Rev. Lett. 83 2722 [3] Lounis B and Moerner W E 2000 Nature 407 491 [4] Kim J, Benson O, Kan H and Yamamoto Y 1999 Nature 397 500 [5] Kurtsiefer C, Mayer S, Zarda P and Weinfurter H 2000 Phys. Rev. Lett. 85 290 [6] Brouri R, Beveratos A, Poizat J-P and Grangier P 2000 Opt. Lett. 25 1294 [7] Michler P, Kiraz A, Becher C, Schoenfeld W V, -
Petroff P M, Zhang L, Hu E and Imamoglu A 2000 Science
290 2282 [8] Santori C, Pelton M, Solomon G, Dale Y and Yamamoto Y 2001 Phys. Rev. Lett. 86 1502 [9] Parkins A S, Marte P, Zoller P and Kimble H J 1993 Phys. Rev. Lett. 71 3095 [10] Law C K and Kimble H J 1997 J. Mod. Opt. 44 2067 [11] Kuhn A, Hennrich M, Bondo T and Rempe G 1999 Appl. Phys. B 69 373 [12] Kuhn A, Hennrich M and Rempe G 2002 Phys. Rev. Lett. 89 067901 [13] McKeever J, Boca A, Boozer D, Miller R, Buck J R, Kuzmich A and Kimble H J 2004 Science 303 1992 [14] Parkins A S, Marte P, Zol-
ler P, Carnal O and Kimble H J 1995 Phys. Rev. A 51 1578 [15] Cirac J I, Zoller P, Kimble H J and Mabuchi H 1997 Phys. Rev. Lett. 78 3221 [16] Guthöhrlein G R, Keller M, Hayasaka K, Lange W and Walther H 2001 Nature 414 49 [17] Mundt A B, Kreuter A, Becher C, Leibfried D, Eschner J, Schmidt-Kaler F and Blatt R 2002 Phys. Rev. Lett.
89 103001 [18] McKeever J, Buck J R, Boozer A D, Kuzmich A, Nägerl H-C, Stamper-Kurn D M and Kimble H J 2003
Phys. Rev. Lett. 90 133602 [19] Sauer J A, Fortier K M, Chang M S, Hamley C D and Chapman M S 2003 Preprint quant-ph/0309052 [20] Maunz P, Puppe T, Schuster I, Syassen N, Pinkse P W H and Rempe G 2004 Nature 428 50 [21] Roos C, Zeiger T, Rohde H, Nägerl H C, Eschner J, Leibfried D, Schmidt-Kaler F and Blatt R 1999
Phys. Rev. Lett. 83 4713 [22] Leibfried D, Blatt R, Monroe C and Wineland D 2003 Rev. Mod. Phys. 75 281 [23] Di Fidio C, Maniscalco S, Vogel W and Messina A 2002 Phys. Rev. A 65 33825
New Journal of Physics 6 (2004) 94 (http://www.njp.org/)

19

DEUTSCHE PHYSIKALISCHE GESELLSCHAFT

[24] Bergmann K, Theuer H and Shore B W 1998 Rev. Mod. Phys. 70 1003 [25] Gaubatz U, Rudecki P, Schiemann S and Bergmann K 1990 J. Chem. Phys. 92 5363 [26] Liaw S 1995 Phys. Rev. A 51 1723 [27] Schmidt-Kaler F et al 2003 Appl. Phys. B 77 789 [28] James D F V 1998 Appl. Phys. B 66 181 [29] Gardiner C W and Zoller P 2000 Quantum Noise (Berlin: Springer) [30] Mundt A B, Kreuter A, Russo C, Becher C, Leibfried D, Eschner J, Schmidt-Kaler F and Blatt R 2003
Appl. Phys. B 76 117 [31] Carmichael H J 1999 Statistical Methods in Quantum Optics 1 (Berlin: Springer)

New Journal of Physics 6 (2004) 94 (http://www.njp.org/)

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:11.926Z
- **Text Length:** 45301 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
