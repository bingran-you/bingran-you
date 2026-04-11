# PDF Document: (Quantum network - 2001 Lu Ming Duan) Long-distance quantum communication with atomic ensembles and linear optics.pdf

**File Path:** (Quantum network - 2001 Lu Ming Duan) Long-distance quantum communication with atomic ensembles and linear optics.pdf

**Processed Date:** 2026-02-10T18:14:01.772Z

**File Size:** 499.97 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 356

**Title:** (Quantum network - 2001 Lu Ming Duan) Long-distance quantum communication with atomic ensembles and linear optics

**Collection:** Multiplexing > Random

---

## Extracted Text Content

articles
Long-distance quantum communication with atomic ensembles and linear optics

L.-M. Duan*², M. D. Lukin³, J. I. Cirac* & P. Zoller*
* Institut fuÈr Theoretische Physik, UniversitaÈt Innsbruck, A-6020 Innsbruck, Austria ² Laboratory of Quantum Communication and Computation, USTC, Hefei 230026, China ³...P...h..y.s..i.c..s..D...e..p..a..r.t.m....e.n..t...a..n..d...I..T..A...M...P..,..H...a..r..v..a..r.d...U...n...i.v..e.r..s.i.t.y..,..C...a..m...b..r..i.d..g..e.,..M....a..s.s..a..c.h..u...s.e..t.t.s...0..2..1..3.8..,...U...S..A.......................................................................................................-
...........
Quantum communication holds promise for absolutely secure transmission of secret messages and the faithful transfer of unknown quantum states. Photonic channels appear to be very attractive for the physical implementation of quantum communication. However, owing to losses and decoherence in the channel, the communication ®delity decreases exponentially with the channel length. Here we describe a scheme that allows the implementation of robust quantum communication over long lossy channels. The sch-
eme involves laser manipulation of atomic ensembles, beam splitters, and single-photon detectors with moderate ef®ciencies, and is therefore compatible with current experimental technology. We show that the communication ef®ciency scales polynomially with the channel length, and hence the scheme should be operable over very long distances.

The goal of quantum communication is to transmit quantum states between distant sites. Such transmission has potential application in the secret transfer of classical messages by means of quantum cryptography1, and is also an essential element in the construction of quantum networks. The basic problem of quantum communication is to generate nearly perfect entangled states between distant sites. Such states can be used, for example, to implement secure quantum cryptography using the Ekert protocol1-
, and to faithfully transfer quantum states via quantum teleportation2. All realistic schemes for quantum communication are at present based on the use of photonic channels. However, the degree of entanglement generated between two distant sites normally decreases exponentially with the length of the connecting channel, because of optical absorption and other channel noise. To regain a high degree of entanglement, puri®cation schemes can be used3, but this does not fully solve the long-distance co-
mmunication problem. Because of the exponential decay of the entanglement in the channel, an exponentially large number of partially entangled states are needed to obtain one highly entangled state, which means that for a suf®ciently long distance the task becomes nearly impossible.
To overcome the dif®culty associated with the exponential ®delity decay, the concept of quantum repeaters can be used4. In principle, this allows the overall communication ®delity to be made very close to unity, with the communication time growing only polynomially with transmission distance. In analogy to fault-tolerant quantum computing5,6, the proposed quantum repeater is a cascaded entanglement-puri®cation protocol for communication systems. The basic idea is to divide the transmission channel-
 into many segments, with the length of each segment comparable to the channel attenuation length. First, entanglement is generated and puri®ed for each segment; the puri®ed entanglement is then extended to a greater length by connecting two adjacent segments through entanglement swapping2,7. After this swapping, the overall entanglement is decreased, and has to be puri®ed again. The rounds of entanglement swapping and puri®cation can be continued until nearly perfect entangled states are created -
between two distant sites.
To implement the quantum repeater protocol, we need to generate entanglement between distant quantum bits (qubits), store them for a suf®ciently long time and perform local collective operations on several of these qubits. Quantum memory is essential, because all puri®cation protocols are probabilistic. When entanglement puri®cation is performed for each segment of the channel, quantum memory can be used to keep the segment state if the puri®cation succeeds, and to repeat the puri®cation for the

segments only where the previous attempt fails. This is essential for ensuring polynomial scaling in the communication ef®ciency, because if there were no available memory, the puri®cations for all the segments would need to succeed at the same time; the probability of such an event decreases exponentially with channel length. The requirement of quantum memory implies that we need to store the local qubits in atomic internal states instead of photonic states, as it is dif®cult to store photons for-
 a reasonably long time. With atoms as the local information carriers, it seems to be very hard to implement quantum repeaters: normally, one needs to achieve the strong coupling between atoms and photons by using high-®nesse cavities for atomic entanglement generation, puri®cation, and swapping8,9, which, in spite of recent experimental advances10±12, remains a very challenging technology.
Here we propose a different scheme, which realizes quantum repeaters and long-distance quantum communication with simple physical set-ups. The scheme is a combination of three signi®cant advances in entanglement generation, connection, and applications, with each of the steps having built-in entanglement puri®cation and resilience to realistic noise. The scheme for fault-tolerant entanglement generation originates from earlier proposals to entangle single atoms through single-photon interference a-
t photodetectors13,14. But the present approach involves collective excitations in atomic ensembles rather than in single particles, which allows simpler realization and greatly improved generation ef®ciency. This is due to collectively enhanced coupling to light, which has been recently investigated both theoretically15±19 and experimentally20±22. The entanglement connection is achieved through simple linear optical operations, and is inherently robust against realistic imperfections. Different s-
chemes with linear optics have been proposed recently for quantum computation23 and puri®cation24. Finally, the resulting state of ensembles after the entanglement connection ®nds direct applications in realizing entanglement-based quantum communication protocols, such as quantum teleportation, cryptography, and Bell inequality detection. In all of these applications, the mixed entanglement is puri®ed automatically to nearly perfect entanglement. As a combination of these three advances, our schem-
e circumvents the realistic noise and imperfections, and provides a feasible method of long-distance high-®delity quantum communication. The required overhead in communication time increases with distance only polynomially.
Entanglement generation The basic element of our system is a cloud of Na identical atoms with

NATURE | VOL 414 | 22 NOVEMBER 2001 | www.nature.com

© 2001 Macmillan Magazines Ltd

413

articles

the relevant level structure shown in Fig. 1. A pair of metastable lower states jgi and jsi can correspond toÐfor exampleÐhyper®ne or Zeeman sublevels of the electronic ground state of alkali-metal atoms. Long lifetimes for the relevant coherence have been observed both in a room-temperature dilute atomic gas (see, for example, ref. 21) and in a sample of cold trapped atoms (see, for example, refs 20, 22). To facilitate enhanced coupling to light, the atomic medium is preferably optically thick al-
ong one direction. This can be achieved either by working with a pencil-shaped atomic sample20±22 or by placing the sample in a low-®nesse ring cavity17,25 (see Supplementary Information).
All the atoms are initially prepared in the ground state jgi. A sample is illuminated by a short, off-resonant laser pulse that induces Raman transitions into the states jsi. We are particularly interested in the forward-scattered Stokes light that is co-propagating with the laser. Such scattering events are uniquely correlated with the excitation of the psymm etric collective atomic mode S (refs 15±22) given by S [ 1= NaSijgii hsj, where the summation is taken over all the atoms. In parti-
cular, an emission of the single Stokes photon in a forward direction results in the state of atomic

ensemble given by S²j0ai, where the ensemble ground state j0ai [ #i jgii).
We assume that the light±atom interaction time t¢ is short, so that the mean photon number in the forward-scattered Stokes pulse

is much smaller than 1. We can de®ne an effective single-mode

bosonic operator a for this Stokes pulse with the corresponding

vacuum state denoted by j0pi. The whole state of the atomic collective mode and the forward-scattering Stokes mode can now

be written in the following form (see Supplementary Information

for details)

jfi  j0ai j0pi  ppcS²a²j0ai j0pi  opc

1

where pc is the small excitation probability, and o(pc) represents the terms with more excitations whose probabilities are equal to or smaller than p2c. Before proceeding, we note that a fraction of light is emitted in other directions owing to spontaneous emissions. But
whenever Na is large, the contribution from the spontaneous emissions to the population in the symmetric collective mode is small15±22. As a result, we have a large signal-to-noise ratio for the
processes involving the collective mode, which greatly enhances the
ef®ciency of the present scheme (see Box 1 and Supplementary
Information).

a

e

∆

Box 1 Collective enhancement

g

b

L

Atoms

s D1

R Atoms

Filter Channel

BS D2

Figure 1 Set-up for entanglement generation. a, The relevant level structure of the atoms in the ensemble, with jgi, the ground state, jsi, the metastable state for storing a qubit, and jei, the excited state. The transition jgi ! jei is coupled by the classical laser (the pumping light) with the Rabi frequency ­, and the forward-scattered Stokes light comes from the transition jei ! jsi, which has a different polarization and frequency to the pumping light. For convenience, we assume off-resonant-
 coupling with a large detuning ¢. b, Schematic set-up for generating entanglement between the two atomic ensembles L and R. The two ensembles are pencil-shaped, and illuminated by the synchronized classical pumping pulses. The forward-scattered Stokes pulses are collected and coupled to optical channels (such as ®bres) after the ®lters, which are polarization- and frequencyselective to ®lter the pumping light. The pulses after the transmission channels interfere at a 50%-50% beam splitter BS, wit-
h the outputs detected respectively by two single-photon detectors D1 and D2. If there is a click in D1 or D2, the process is ®nished and we successfully generate entanglement between the ensembles L and R. Otherwise, we ®rst apply a repumping pulse (to the transition jsi ! jei) to the ensembles L and R, to set the state of the ensembles back to the ground state j0aiL # j0aiR, then the same classical laser pulses as the ®rst round are applied to the transition jgi ! jei and we detect again the for-
ward-scattered Stokes pulses after the beam splitter. This process is repeated until ®nally we have a click in the D1 or the D2 detector.

Long-lived excitations in atomic ensembles can be viewed as waves of

excited spins. We are here particularly interested in the symmetric spin

wave mode S. For a simple demonstration of collective enhancement, we

assume that the atoms are placed in a low-®nesse ring cavity25, with a

relevant cavity mode corresponding to forward-scattered Stokes

radiation. The cavity-free case corresponds to the limit where the ®nesse

tends to 1 (ref. 17). The interaction between the forward-scattered light

mode and the atoms is described by the hamiltonian

 p

 

H  ~ Na­gc=¢ S²b²  h:c:

where h.c. is the hermitian conjugation, b² is the creation operator for

cavity photons, ­ is the laser Rabi frequency, and gc the atom±®eld coupling constant. In addition to coherent evolution, the photonic ®eld

mode can leak out of the cavity at a rate k, whereas atomic coherence is

dephased by spontaneous photon scattering into random directions that occurs at a rate g9s  ­2=¢2gs for each atom, with gs being the natural
linewidth of the electronic excited state. We emphasize that in the

absence of superradiant effects, spontaneous emission events are

independent for each atom.

In the bad-cavity limit, we can adiabatically eliminate the cavity mode,

and the resulting dynamics for the collective atomic mode is described by

the Heisenberg±Langevin equation (see Supplementary Information for

details)

SÇ

²



k9

2 2

g9s

S²

2

p k9bint



noise

where k9  4j­j2g2cNa=¢2k, bin is a vacuum ®eld leading into the cavity, and the last term represents the ¯uctuating noise ®eld corresponding to

spontaneous emission. We note that the nature of the dynamics is

determined by the ratio between the build-up of coherence due to

forward-scattered photons k9 and coherence decay due to spontaneous

emission g9s. The signal-to-noise ratio is therefore given by R  k9=g9s [ 4Nag2c=kgs, which is large when a many-atom ensemble is
used. In the cavity-free case, this expression corresponds to the optical

depth (density-length product) of the sample. The result should be

compared with the signal-to-noise ratio in the single-atom case Na  1, where to obtain R . 1 a high-Q microcavity is required10±12. The collective

enhancement takes place because the coherent forward scattering

involves only one collective atomic mode S, whereas the spontaneous

emissions distribute excitation over all atomic modes. Therefore only a

small fraction of spontaneous emission events in¯uences the symmetric

mode S, which results in a large signal-to-noise ratio.

414

© 2001 Macmillan Magazines Ltd

NATURE | VOL 414 | 22 NOVEMBER 2001 | www.nature.com

articles

We now show how to use this set-up to generate entanglement

between two distant ensembles L (left) and R (right) using the

con®guration shown in Fig. 1. Here two laser pulses excite both

ensembles simultaneously, and the whole system is described by the

state jfiL # jfiR, where jfiL and jfiR are given by equation (1) with all the operators and states distinguished by the subscript L or R.

The forward-scattered Stokes light from both ensembles is com-

bined at the beam splitter, and a photodetector click in either D1 or D2 measures the combined rapdiation from two samples, a²a or a²2a2 with a6  aL 6 eiJaR= 2. Here, J denotes an unknown difference of the phase shifts in the left and the right side channels.

We can also assume that J has an imaginary part to account for the

possible asymmetry of the set-up, which will also be corrected

automatically in our scheme. But the set-up asymmetry can be

easily made very small, and for simplicity of expressions we assume

that J is real in the following. Conditional on the detector click, we

should apply a+ or a- to the whole state jfiL # jfiR, and the projected state of the ensembles L and R is nearly maximally

entangled,

with

the

form

(neglecting

the high-order p

terms

o(pc)):

jªJi6LR  S²L 6 eiJS²R= 2j0aiL j0aiR

2

The probability of getting a click is given by pc for each round, so we need to repeat the process about 1/pc times for a successful entanglement preparation, and the average preparation time is given by T0 < t¢=pc. The states jªJiLR and jªJi2LR can be transformed to each other by a simple local phase shift. Without loss of general-
ity, we assume in the following that we generate the entangled state jªJiLR.
As will be shown below, the presence of noise modi®es the
projected state of the ensembles to

rLRc0;

J



c0

1 

1

c0j0a0aiLRh0a0aj



jªJ iLR hªJ j

3

where the `vacuum' coef®cient c0 is determined by the dark count rates of the photon detectors. It will be seen below that any state in
the form of equation (3) will be puri®ed automatically to a
maximally entangled state in the entanglement-based communication schemes. We therefore call this state an effective maximally
entangled (EME) state, with the vacuum coef®cient c0 determining the puri®cation ef®ciency.

Entanglement connection through swapping After the successful generation of entanglement within the

attenuation length, we want to extend the quantum communication

distance. This is done through entanglement swapping with the

con®guration shown in Fig. 2. Suppose that we start with two pairs

of entangled ensembles described by the state rLI1 # rI2R, where rLI1

and rI2R are given by equation (3). in Fig. 2 measures thepquantities

In the ideal case, the set-up shown corresponding to operators S²6S6

with S6  SI1 6 SI2 = 2. If the measurement is successful (that is,

one of the detectors registers one photon), we will prepare the

ensembles L and R into another EME state. The new J-parameter is

given by J1  J2, where J1 and J2 denote the old J-parameters for the two segment EME states. As will be seen below, even in the

presence of realistic noise and imperfections, an EME state is still

created after a detector click. The noise only in¯uences the success

probability of getting a click and the new vacuum coef®cient in the

EME state. In general, we can express the success probability p1 and the new vacuum coef®cient c1 as p1  f 1c0 and c1  f 2c0, where the functions f1 and f2 depend on the particular noise properties.
The above method for connecting entanglement can be cascaded

to arbitrarily extend the communication distance. For the ith

(i  1; 2; ¼; n) entanglement connection, we ®rst prepare in par-

allel two pairs of ensembles in the EME states with the same vacuum

coef®cient ci-1 and the same communication length Li-1, and then perform entanglement swapping as shown in Fig. 2, which now

succeeds with a probability pi  f 1ci21. After a successful detector click, the communication length is extended to Li  2Li21, and the vacuum coef®cient in the connected EME state becomes

ci  f 2ci21. As the ith entanglement connection needs to be repeated on average 1/pi times, the total time needed to establish an EME state over the distance Ln  2nL0 is given by Tn  T0Pni11=pi, where L0 denotes the distance of each segment in the entanglement generation.

Entanglement-based communication schemes After an EME state has been established between two distant sites, we would like to use it in communication protocols, such as quantum teleportation, cryptography, and Bell inequality detection. It is not obvious that the EME state of equation (3), which is entangled in the Fock basis, is useful for these tasks, as in the Fock basis it is experimentally hard to do certain single-bit operations. We will now show how the EME states can be used to realize all -
these protocols with simple experimental con®gurations.
Quantum cryptography and Bell inequality detection are achieved with the set-up shown by Fig. 3a. The state of the two

a

I1

I2

BS

b

e

∆

Entangled

Entangled

sI1

sI2

L

D1

D2

R

g

Figure 2 Set-up for entanglement connection. a, Illustrative set-up for the entanglement
swapping. We have two pairs of ensemblesÐL and I1, and I2 and RÐdistributed at three sites L, I and R. Each of the ensemble-pairs L and I1, and I2 and R is prepared in an EME state in the form of equation (3). The stored atomic excitations of two nearby
ensembles I1 and I2 are converted simultaneously into light. This is achieved by applying a retrieval pulses of suitable polarization that is near-resonant with the atomic transition
jsi ! jei, which causes coherent conversion of atomic excitations into photons that have a different polarization and frequency to the retrieval pulse18,21,22. The ef®ciency of this
transfer can be very close to unity even at a single quantum level owing to collective enhancement18,21,22. After the transfer, the stimulated optical excitations interfere at a

50%-50% beam splitter, and then detected by the single-photon detectors D1 and D2. If either D1 or D2 clicks, the protocol is successful and an EME state in the form of equation (3) is established between the ensembles L and R with a doubled communication distance. Otherwise, the process fails, and we need to repeat the previous entanglement generation and swapping until ®nally we have a click in D1 or D2, that is, until the protocol ®nally succeeds. b, The two intermediate ensembles I1 and I2 can-
 also be replaced by one ensemble but with two metastable states I1 and I2 to store the two different collective modes. The 50%-50% beam splitter operation can be simply realized by a p/2 pulse applied to the two metastable states before the collective atomic excitations are transferred to the optical excitations.

NATURE | VOL 414 | 22 NOVEMBER 2001 | www.nature.com

© 2001 Macmillan Magazines Ltd

415

articles

a

L1

DL

BS

1

ϕL

L2

DL
2

b

DI1

DL1

L1

I1

BS

I2

L2

R1

BS

DR1

R2

ϕR

DR
2

R1 R2

BS

DI2

DL2

Figure 3 Set-up for entanglement-based communication schemes. a, Schematic set-up

for the realization of quantum cryptography and Bell inequality detection. Two pairs of

ensembles L1, R1 and L2, R2 (or two pairs of metastable states as shown in b) have been prepared in the EME states. The collective atomic excitations on each side are transferred

to the optical excitations, which, respectively after a relative phase shift JL or JR and a 50%-50% beam splitter, are detected by the single-photon detectors DL1; DL2 and DR1; DR2. We look at the four possible coincidences of DR1; DR2 with DL1; DL2, which are functions of the
phase difference JL 2 JR. Depending on the choice of JL and JR, this set-up can realize
both the quantum cryptography and the Bell inequality detection. b, Schematic set-up for

probabilistic quantum teleportation of the atomic `polarization' state. Similarly, two pairs

of ensembles L1, R1 and L2, R2 are prepared in the EME states. We want to teleport an

atomic

`polarization'

state

d

0

S

² I1



d

1

S

² I2

j0a

0a

iI1

I2

with

unknown

coef®cients

d0; d1

from

the

left

to

the

right

side,

where

S

² I1

;

S

² I2

denote

the

collective

atomic

operators

for

the

two ensembles I1 and I2 (or two metastable states in the same ensemble). The collective

atomic excitations in the ensembles I1, L1 and I2, L2 are transferred to the optical

excitations, which, after a 50%-50% beam splitter, are detected by the single-photon

detectors DI1; DL1 and DI2; DL2. If, and only if, there is one click in DI1 DL1, and one click in DI2or

DI2, the protocol is successful. When the protocol succeeds, the collective excitation in the

ensembles R1 and R2, if appearing, would be found in the same `polarization' state

d

0

S

² R1



d

1

S

² R2

j0a

0a

iR1

R2

up

to

a

local

p-phase

rotation.

pairs of ensembles is expressed as rL1R1 # rL2R2 , where rLiRi (i  1; 2) denote the same EME state with the vacuum coef®cient cn if we have done entanglement connection n times. The J-parameters

in rL1R1 and rL2R2 are the same, provided that the two states are established over the same stationary channels. We register only the

coincidences of the two-side detectors, so the protocol is successful

only if there is a click on each side. Under this condition, the

vacuum components in the EME states, together with the state

components S²L1 S²L2 jvaci and S²R1 S²R2 jvaci, where jvaci denotes the ensemble state j0a0a0a0aiL1R1L2R2 , have no contributions to the experimental results. So, for the measurement scheme shown by

Fig. 3, the ensemble state rL1R1 # rL2R2 is effectively equivalent to the following `polarization' maximally entangled (PME) state (the

terminology of `polarization' comes from an analogy to the optical

case):

p

jªiPME  S²L1 S²R2  S²L2 S²R1 = 2jvaci

4

The success probability for the projection from rL1R1 # rL2R2 to jªiPME (that is, the probability of getting a click on each side) is given by pa  1=2cn  12. We can also check that in Fig. 3, the phase shift JL (L  L or R) together with the corresponding beam-
splitter operation are equivalent to a single-bit rotation in the basis {j0iL [ S²L1 j0a0aiL1L2 ; j1iL [ S²L2 j0a0aiL1L2 } with the rotation angle v  JL=2. Now it is clear how to do quantum cryptography and Bell inequality detection, as we have the PME state and we can

perform the desired single-bit rotations in the corresponding basis.

For instance, to distribute a quantum key between the two remote

sides, we simply choose JL randomly from the set {0; p=2} with an equal probability, and keep the measurement results (to be 0 if DL1 clicks, and 1 if DL2 clicks) on both sides as the shared secret key if the two sides become aware that they have chosen the same

phase shift after the public declaration of JL. This is exactly the Ekert scheme1, and its absolute security follows directly from

the proofs in refs 26 and 27. For the Bell inequality detection,

we infer the correlations hPPaDDvL2L1DDeR1R1jEan0cd;opss=o4JLo2nE. JFpRo=2rf;rtpoh=me4

tEheJLm; JeaRsu[remPDeL1nDtR1 set-up shown in  Ep=2; 3p=4 2

 of

PthDeL2DcR2 o2incPidDL1eDnR2c2es

Fig. 3a, we wopuld E0; 3p=4j  2 2,

whereas for any local hidden variable theories, the CHSH

inequality28 implies that this value should be below 2.

We can also use the established long-distance EME states for

faithful transfer of unknown quantum states through quantum

teleportation, with the set-up shown in Fig. 3b. As described in the

®gure legend, this set-up is used to teleport the polarization state of

the collective atomic excitation in a probabilistic fashion. That is,

even if the protocol succeedsÐthat is, two of the detectors register

the counts on the left-hand sideÐan excitation is not necessarily

present in the right (target) ensembles because the product of the

EME states rL1R1 # rL2R2 contains vacuum components. However, if a collective excitation appears from the right-hand side, its `polari-

zation' state is exactly the same as the one input from the left side.

So, as in the experiment of ref. 29, such a probabilistic teleportation

needs posterior con®rmation of the presence of the excitation; but if

the presence is con®rmed, the teleportation ®delity of its polariza-

tion state is nearly perfect. The success probability for the tele-

portation is also given by pa  1=2cn  12, which determines the average number of repetitions needed for a ®nal successful

teleportation.

Noise and built-in entanglement puri®cation We now discuss noise and imperfections in our schemes for
entanglement generation, connection, and applications. In particular, we show that each step contains built-in entanglement
puri®cation, which makes the whole scheme resilient to realistic noise and imperfections.
In the entanglement generation, the dominant noise is due to
photon loss, which includes contributions from channel attenuation, spontaneous emissions in the atomic ensembles (which result
in the population of the collective atomic mode with the accompanying photon going in other directions), coupling inef®ciency of
the Stokes light into and out of the channel, and inef®ciency of the single-photon detectors. The loss probability is denoted by 1 2 hp with the overall ef®ciency hp  h9pe2L0=Latt, where we have separated the channel attenuation e2L0=Latt (Latt is the channel attenuation length) from other noise contributions h9p, with h9p independent of the communication distance L0. The photon loss decreases the success probability for getting a detector click from pc to hppc, but it has no in¯uence on the resu-
lting EME state. Owing to this noise,
the entanglement preparation time should be replaced by T0 < t¢=hppc. The second source of noise comes from the dark counts of the single-photon detectors. The dark count gives a detector click, but without population of the collective atomic
mode, so it contributes to the vacuum coef®cient in the EME state. If the dark count comes up with a probability pdc for the time interval t¢, the vacuum coef®cient is given by c0  pdc=hppc, which is typically much smaller than 1 as the Raman transition rate is
much larger than the dark count rate. The ®nal source of noise, which in¯uences the ®delity of getting the EME state, is caused by
the event in which more than one atom is excited to the collective mode S whereas there is only one click in D1 or D2. The conditional probability for that event is given by pc, so we can estimate the ®delity imperfection DF0 [ 1 2 F0 for the entanglement

416

© 2001 Macmillan Magazines Ltd

NATURE | VOL 414 | 22 NOVEMBER 2001 | www.nature.com

articles

generation by:

DF0 < pc

5

Note that by decreasing the excitation probability pc, we can make the ®delity imperfection closer and closer to zeroÐwith the price of a longer entanglement preparation time T0. This is the basic idea of the entanglement puri®cation. So, in this scheme, the con®rmation of the click from the single-photon detector generates and puri®es
entanglement at the same time. In the entanglement swapping, the dominant noise is still due to
the losses, which include contributions from detector inef®ciency, the inef®ciency of the excitation transfer from the collective atomic mode to the optical mode21,22, and the small decay of atomic excitation during storage20±22. Note that by introducing the detector
inef®ciency, we have automatically taken into account the imperfection that the detectors cannot distinguish between one and two
photons. With all these losses, the overall ef®ciency in entanglement swapping is denoted by hs. The loss in entanglement swapping gives contributions to the vacuum coef®cient in the connected EME state, as in the presence of loss a single detector click might
result from two collective excitations in the ensembles I1 and I2, and in this case, the collective modes in the ensembles L and R have
to be in a vacuum state. After taking into account the realistic noise, we can specify the success probability and the new vacuum
coef®cient for the ith entanglement connection by the recursion
relations pi [ f 1ci21  hs1 2 {hs=2ci21  1}=ci21  1 and ci [ f 2ci21  2ci21  1 2 hs. The coef®cient c0 for the entanglement preparation is typically much smaller than 1 2 hs, so we have ci < 2i 2 11 2 hs  Li=L0 2 11 2 hs, where Li denotes the communication distance after i times entanglement connection. With the expression for the ci, we can evaluate the probability pi and the communication time Tn for establishing an EME state over the distance Ln  2nL0. After the entan-
glement connection, the ®delity of the EME state also decreases, and after n times connection, the overall ®delity imperfection DFn < 2nDF0 < Ln=L0DF0. We need to make DFn small by decreasing the excitation probability pc in equation (5).
We note that our entanglement connection scheme also has a built-in entanglement-puri®cation function. This can be under-
stood as follows: each time we connect entanglement, the imperfections of the set-up decrease the entanglement fraction 1=ci  1 in the EME state. However, this fraction decays only linearly with distance (the number of segments), which is in contrast to the
exponential decay of entanglement for connection schemes without entanglement puri®cation. The reason for the slow decay is that for
each time of entanglement connection, we need to repeat the protocol until there is a detector click, and the con®rmation of a
click removes part of the added vacuum noise, as a larger vacuum component in the EME state results in more repetitions. The built-
in entanglement puri®cation in the connection scheme is essential for the polynomial scaling law of the communication ef®ciency.
As in the entanglement generation and connection schemes, our entanglement application schemes also have built-in entanglement
puri®cation, which makes them resilient to realistic noise. First, we have seen that the vacuum components in the EME states are
removed from the con®rmation of the detector clicks, and thus have no in¯uence on the ®delity of all the application schemes.
Second, if the single-photon detectors and the atom-to-light excita-
tion transitions in the application schemes are imperfect, with the overall ef®ciency denoted by ha, we can show that these imperfections only in¯uence the ef®ciency of getting detector clicksÐwith the success probability replaced by pa  ha=2cn  12Ðand have no effect on communication ®delity. Last, we have seen that the phase shifts in the stationary channels and the small asymmetry of
the stationary set-up are removed automatically when we project the EME state to the PME state, and thus have no in¯uence on the
communication ®delity.

Noise not correctable by our scheme includes the detector dark
count in the entanglement connection, the non-stationary channel
noise and set-up asymmetries. The ®delity imperfection resulting
from the dark count increases linearly with the number of segments
Ln/L0, and the imperfections from the non-stationary channpelnoise and set-up asymmetries increase by the random-walk law Ln=L0. For each time of entanglement connection, the dark count probability is about 1025 if we make a typical choice that the collective emission rate is about 10 MHz and the dark count rate is 102 Hz. So
this noise is negligible, even if we have communicated over a long distance (103 times the channel attenuation length Latt, for instance). The non-stationary channel noise and set-up asymmetries can also
be safely neglected for such a distance. For instance, it is relatively
easy to control the non-stationary asymmetries in local laser operations to values below 10-4 with the use of accurate polarization techniques30 for Zeeman sublevels (as in Fig. 2b).

Scaling of the communication ef®ciency
We have shown that each of our entanglement generation, connec-
tion, and application schemes has built-in entanglement puri®ca-
tion, and as a result of this property, we can ®x the communication
®delity to be nearly perfect, and at the same time require the
communication time to increase only polynomially with distance.
Assume that we want to communicate over a distance L  Ln  2nL0. By ®xing the overall ®delity imperfection to be a desired small value DFn, the entanglement preparation time becomes T0 < tD=hpDF0 < Ln=L0tD=hpDFn. For effective generation of the PME state of equation (4), the total communication time Ttot < Tn=pa with Tn < T0Pni11=pi. So the total communication time scales with distance by the law

Ttot < 2L=L02=hppaDFnPni1pi

6

where the success probabilities pi; pa for the ith entanglement connection and for the entanglement application have been speci-

®ed above.

Equation (6) con®rms that the communication time Ttot increases with distance L only polynomially. We show this

explicitly by taking two limiting cases. In the ®rst case, the

inef®ciency 1 2 hs for entanglement swapping is assumed to be negligibly small. We can deduce from equation (6) that in this

case the communication time Ttot < TconL=L02eL0=Latt , with the constant Tcon [ 2t¢=h9phaDFn being independent of the segment length and the total distance L0 and L. The
communication time Ttot increases with L quadratically. In the second case, we assume that the inef®ciency 1 À hs is fairly large. The communication time in this case is approxi-

mated

by

T < T L=L  e , log2L=L01=2log21=hs212 L0=Latt

tot

con

0

which

increases with L still polynomially (or, more accurately, sub-expo-

nentially, but this makes no difference in practice as the factor

log2(L/L0) is well bounded from above for any reasonably long distance). If Ttot increases with L/L0 by the mth power law L=L0m, there is an optimal choice of segment length (L0  mLatt) to minimize the time Ttot. As a simple estimation of the improvement
in communication ef®ciency, we assume that the total distance L is

about 100Latt; for a choice of the parameter hs < 2=3, the communication time Ttot=Tcon < 106 with the optimal segment length L0 < 5:7Latt. This is a notable improvement over the direct communication case, where the communication time Ttot for getting a
PME state increases with distance L by the exponential law

Ttot < TconeL=Latt . For the same distance L < 100Latt, we need tThtiost=Texcoanm<pl1e0t4h3efoprredseirnetcstcchoemmme iusn1i0ca37titoimn,ews hmicohremefe®acniesntth.at for

Outlook We have presented a scheme for implementation of quantum repeaters and long-distance quantum communication. The proposed technique allows the generation and connection of entangle-

NATURE | VOL 414 | 22 NOVEMBER 2001 | www.nature.com

© 2001 Macmillan Magazines Ltd

417

articles

ment, and its use in quantum teleportation, cryptography, and tests of Bell inequalities. All of the elements of the present scheme are within reach of current experimental technology, and all have the important property of built-in entanglement puri®cationÐwhich makes them resilient to realistic noise. As a result, the overhead required to implement the present scheme, such as the communication time, scales polynomially with the channel length. This is in marked contrast to direct communication, -
where an exponential overhead is required. Such ef®cient scaling, combined with the relative simplicity of the experimental set-up, opens up realistic prospects for quantum communication over long distances. M
Received 16 May; accepted 12 September 2001.
1. Ekert, A. Quantum cryptography based on Bell's theorem. Phys. Rev. Lett. 67, 661±663 (1991). 2. Bennett, C. H. et al. Teleporting an unknown quantum state via dual classical and Einstein-Podolsky-
Rosen channels. Phys. Rev. Lett. 73, 3081±3084 (1993). 3. Bennett, C. H. et al. Puri®cation of noisy entanglement and faithful teleportation via noisy channels.
Phys. Rev. Lett. 76, 722±725 (1991). 4. Briegel, H.-J., Duer, W., Cirac, J. I. & Zoller, P. Quantum repeaters: The role of imperfect local
operations in quantum communication. Phys. Rev. Lett. 81, 5932±5935 (1998). 5. Knill, E., La¯amme, R. & Zurek, W. H. Resilient quantum computation. Science 279, 342±345 (1998). 6. Preskill, J. Reliable quantum computers. Proc. R. Soc. Lond. A 454, 385±410 (1998). 7. Zukowski, M., Zeilinger, A., Horne, M. A. & Ekert, A. ``Event-ready-detectors'' Bell experiment via
entanglement swapping. Phys. Rev. Lett. 71, 4287±4290 (1993). 8. Cirac, J. I., Zoller, P., Kimble, H. J. & Mabuchi, H. Quantum state transfer and entanglement
distribution among distant nodes in a quantum network. Phys. Rev. Lett. 78, 3221±3224 (1997). 9. Enk, S. J., Cirac, J. I. & Zoller, P. Photonic channels for quantum communication. Science 279, 205±
207 (1998). 10. Ye, J., Vernooy, D. W. & Kimble, H. J. Trapping of single atoms in cavity QED. Phys. Rev. Lett. 83,
4987±4990 (1999). 11. Hood, C. J. et al. The atom-cavity microscope: Single atoms bound in orbit by single photons. Science
287, 1447±1453 (2000). 12. Pinkse, P. W. H., Fischer, T., Maunz, T. P. & Rempe, G. Trapping an atom with single photons. Nature
404, 365±368 (2000). 13. Cabrillo, C., Cirac, J. I., G-Fernandez, P. & Zoller, P. Creation of entangled states of distant atoms by
interference. Phys. Rev. A 59, 1025±1033 (1999). 14. Bose, S., Knight, P. L., Plenio, M. B. & Vedral, V. Proposal for teleportation of an atomic state via cavity
decay. Phys. Rev. Lett. 83, 5158±5161 (1999). 15. Raymer, M. G., Walmsley, I. A., Mostowski, J. & Sobolewska, B. Quantum theory of spatial and

temporal coherence properties of stimulated Raman scattering. Phys. Rev. A 32, 332±344 (1985). 16. Kuzmich, A., MoÈlmer, K. & Polzik, E. S. Spin squeezing in an ensemble of atoms illuminated with squeezed light. Phys. Rev. Lett. 79, 481 (1998). 17. Kuzmich, A., Bigelow, N. P. & Mandel, L. Atomic quantum non-demolition measurements and squeezing. Europhys. Lett. A 42, 481±486 (1998). 18. Lukin, M. D., Yelin, S. F. & Fleischhauer, M. Entanglement of atomic ensembles by trapping correlated photon sta-
tes. Phys. Rev. lett. 84, 4232±4235 (2000). 19. Duan, L. M., Cirac, J. I., Zoller, P. & Polzik, E. S. Quantum communication between atomic ensembles using coherent light. Phys. Rev. Lett. 85, 5643±5646 (2000). 20. Hald, J., Sorensen, J. L., Schori, C. & Polzik, E. S. Spin squeezed state: A macroscopic entangled ensemble created by light. Phys. Rev. Lett. 83, 1319±1322 (1999). 21. Phillips, D. F. et al. Storage of light in atomic vapor. Phys. Rev. Lett. 86, 783±786 (2001). 22. Liu, C., Dutton, Z., -
Behroozi, C. H. & Hau, L. V. Observation of coherent optical information storage in an atomic medium using halted light pulses. Nature 409, 490±493 (2001). 23. Knill, E., La¯amme, R. & Milburn, G. J. A scheme for ef®cient quantum computation with linear optics. Nature 409, 46±52 (2001). 24. Pan, J. W., Simon, C., Brukner, C. & Zeilinger, A. Feasible entanglement puri®cation for quantum communication. Nature 410, 1067±1070 (2001). 25. Roch, J.-F. et al. Quantum nondemolition measurements using cold-
 trapped atoms. Phys. Rev. Lett. 78, 634±637 (1997). 26. Lo, H. K. & Chau, H. F. Unconditional security of quantum key distribution over arbitrarily long distances. Science 283, 2050±2056 (1999). 27. Shor, P. W. & Preskill, J. Simple proof of security of the BB84 quantum key distribution protocol. Phys. Rev. Lett. 85, 441±444 (2000). 28. Clauser, J. F., Horne, M. A., Shimony, A. & Holt, R. A. Proposed experiment to test local hiddenvariable theories. Phys. Rev. Lett. 23, 880±884 (1969). 29. Bouwme-
ester, D. et al. Experimental quantum teleportation. Nature 390, 575±579 (1997). 30. Budker, D., Yashuk, V. & Zolotorev, M. Nonlinear magneto-optic effects with ultranarrow width. Phys. Rev. Lett. 81, 5788±5791 (1998).
Supplementary Information accompanies the paper on Nature's website (http://www.nature.com).
Acknowledgements
This work was supported by the Austrian Science Foundation, the Europe Union project EQUIP, the ESF, the European TMR network Quantum Information, and the NSF through a grant to the ITAMP and ITR program. L.-M.D. was also supported by the Chinese Science Foundation.
Correspondence and requests for materials should be addressed to J.I.C. (e-mail: ignacio.cirac@uibk.ac.at).

418

© 2001 Macmillan Magazines Ltd

NATURE | VOL 414 | 22 NOVEMBER 2001 | www.nature.com

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:01.772Z
- **Text Length:** 42558 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
