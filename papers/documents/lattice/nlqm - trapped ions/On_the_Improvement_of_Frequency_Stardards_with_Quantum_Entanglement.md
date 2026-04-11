# PDF Document: Huelga 等。 - 1997 - On the Improvement of Frequency Stardards with Qua.pdf

**File Path:** Huelga 等。 - 1997 - On the Improvement of Frequency Stardards with Qua.pdf

**Processed Date:** 2026-02-10T18:16:48.523Z

**File Size:** 40224.23 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 1084

**Title:** On the Improvement of Frequency Stardards with Quantum Entanglement

**Collection:** Lattice > NLQM - Trapped Ions

---

## Extracted Text Content

On the Improvement of Frequency Standards with Quantum Entanglement
S. F. Huelga, C. Macchiavello∗, T. Pellizzari, and A. K. Ekert Clarendon Laboratory, Department of Physics, University of Oxford, Oxford OX1 3PU, U. K.
M. B. Plenio Optics Section, The Blackett Laboratory, Imperial College,
London SW7 2BZ, U.K.
J. I. Cirac Institut fu¨r Theoretische Physik, Universit¨at Innnsbruck,
A-6020, Innsbruck, Austria

arXiv:quant-ph/9707014v1 4 Jul 1997

The optimal precision of frequency measurements in the presence of decoherence is discussed. We analyse diﬀerent preparations of n two-level systems as well as diﬀerent measurements procedures. We show that standard Ramsey spectroscopy on uncorrelated atoms and optimal measurements on maximally entangled states provide the same resolution. The best resolution is achieved using partially entangled preparations with a high degree of symmetry.
The rapid development of laser cooling and trapping techniques has opened up new perspectives in high precision spectroscopy. Frequency standards based on laser cooled ions are expected to achieve accuracies of the order of 1 part in 1014 − 1018 [1]. In this letter we discuss the limits to the maximum precision achievable in the spectroscopy of n two level atoms in the presence of decoherence. This question is particularly timely in view of current eﬀorts to improve high precision spectroscopy by -
means of quantum entanglement.
FIG. 1. Schematic representation of Ramsey spectroscopy with uncorrelated particles.
In the present context standard Ramsey spectroscopy refers to the situation schematically depicted in Fig. 1. An ion trap is loaded with n ions initially prepared in the same internal state |0 . A Ramsey pulse of frequency

ω is applied to all ions. The pulse shape and duration are carefully chosen so that it drives the atomic transition |0 ↔ |1 of natural frequency ω0 and prepares an equally weighted superposition of the two internal states |0 and |1 for each ion. Next the system evolves freely for a time t followed by the second Ramsey pulse. Finally, the internal state of each particle is measured. Provided that the duration of the Ramsey pulses is much smaller than the free evolution time t, the probability that -
an ion is found in |1 is given by

P = (1 + cos ∆ t)/2.

(1)

Here ∆ = ω − ω0 denotes the detuning between the classical driving ﬁeld and the atomic transition.
This basic scheme is repeated yielding a total duration T of the experiment. The aim is to estimate ∆ as accurately as possible for a given T and a given number of ions n. The two quantities T and n are the physical resources we consider when comparing the performance of diﬀerent schemes. The statistical ﬂuctuations associated with a ﬁnite sample yield an uncertainty ∆P in the estimated value of P given by

∆P = P (1 − P )/N

(2)

where N = nT /t denotes the actual number of experimental data (we assume that N is large). Hence the uncertainty in the estimated value of ω0 is given by:

|δω0| =

P (1 − P )/N |dP /dω |

=

√1 . nT t

(3)

This value is often referred to as the shot noise limit [2]. The theoretical possibility of overcoming this limit has
been put forward recently [3,4]. The basic idea is to prepare the ions initially in an entangled state, which for small n seems to be practical in the near future. To see the advantage of this approach, let us consider the case of two ions prepared in the maximally entangled state [5]

√

|Ψ = (|00 + |11 )/ 2.

(4)

This state can be generated, for example, by the initial part of the network illustrated in Fig. 2. A Ramsey pulse

1

on the ﬁrst ion is followed by a controlled–NOT gate [6]. After a free evolution period of time t the state of the

composite system in the interaction picture rotating at the driving frequency ω reads

|Ψ

= (|00

+

e−2i∆t

|11

√ )/ 2

.

(5)

The second part of the network allows to disentangle the ions after the free evolution period. The population in state |1 of the ﬁrst ion will now oscillate at a frequency 2∆

P2 = (1 + cos 2∆t)/2.

(6)

FIG. 2. Spectroscopy with two maximally entangled particles. The particles are entangled and disentangled by means of “controlled–NOT” gates [6].

This scheme can be easily generalised to the n ion case by a sequence of controlled–NOT gates linking the ﬁrst ion with each of the remaining ones. In this way, a maximally entangled preparation of n ions of the form

√

|Ψ = (|00...0 + |11...1 )/ 2

(7)

is generated. The ﬁnal measurement on the ﬁrst ion, after the free evolution period and the second set of controlled– NOT gates, gives the signal

Pn = (1 + cos n∆t)/2 .

(8)

The advantage of this scheme is that the oscillation frequency of the signal is now ampliﬁed by a factor n with respect to the case of uncorrelated ions and the corresponding frequency uncertainty is

|δω0| = √1 .

(9)

n Tt

Ntoort1e/t√hant

this over

result represents an the shot noise limit

improvement of (3) by using the

a facsame

number of ions n and the same total duration of the ex-

periment T [7] and it was argued that this is the best

precision possible [8].

Let us now examine the same situation in a realistic

experimental scenario, where decoherence eﬀects are in-

evitably present. The main type of decoherence in an

ion trap is dephasing due to processes that cause ran-

dom phase changes while preserving the population in

the atomic levels. Important mechanisms that result in

dephasing eﬀects are collisions, stray ﬁelds and laser in-

stabilities. We model the time evolution of the reduced

density operator for a single ion ρ in the presence of decoherence by the following master equation [9]:

ρ˙(t) = i∆ (ρ|1 1| − |1 1|ρ) + γ (σzρσz − ρ) (10)

the density matrix decay [Actually, our analysis is not restricted to this particular model but holds for any process where oﬀ-diagonal elements decay exponentially with time.] Equation (10) is written in a frame rotating at the frequency ω. By σz = |0 0| − |1 1| we denote a Pauli spin operators. Here we have introduced the decay rate γ = 1/τdec, where τdec is the decoherence time. For the case of standard Ramsey spectroscopy this will give rise to a broadening of signal (1):

P = (1 + cos ∆ te−γt)/2.

(11)

As a consequence the corresponding uncertainty in the atomic frequency is no longer ∆-independent. We now have

|δω0| =

1 − cos2(∆t)e−2γt nT te−2γt sin2(∆t)

.

(12)

In order to obtain the best precision it is necessary to optimise this expression as a function of the duration of each single measurement t. The minimal value is attained for

∆t = kπ/2 (k odd) t = τdec/2

(13)

provided that T > τdec/2. Thus the minimum frequency uncertainty reads

|δω0|opt =

2γe nT

=

2e nτdecT

.

(14)

dw 0
2ge nT
t
FIG. 3. Frequency uncertainty |δω0| as a function of the duration of a single shot t for maximally entangled and uncorrelated particles. Note that the minimum uncertainty is exactly the same for both conﬁgurations.

2

For maximally entangled preparation the signal (8) in the presence of dephasing is modiﬁed as follows:

Pn = (1 + cos n∆ te−nγt)/2

(15)

and the resulting uncertainty for the estimated value of the atomic frequency is now minimal when

∆t

= kπ/2n (k odd) t = τdec/2n

.

(16)

Interestingly, we recover exactly the same minimal uncertainty as for standard Ramsey spectroscopy (14). This eﬀect is illustrated in Fig. 3. The modulus of the frequency uncertainty |δω0| is plotted as a function of the duration of each single experiment t for standard Ramsey spectroscopy with n uncorrelated particles and for a maximally entangled state with n particles. In the presence of decoherence both preparations reach the same precision. This result can be intuitively understood by conside-
ring that maximally entangled states are much more fragile in the presence of decoherence: their decoherence time is reduced by a factor n and therefore the duration of each single experiment t has also to be reduced by the same amount. Moreover, the limit (14) represents the best accuracy for both uncorrelated and maximally entangled preparations and cannot be overcome by engineering different kinds of measurements as will be shown below.
Note that the problem addressed in precision spectroscopy (i.e. the measurement of small atomic phase shifts) maps onto that of statistical distinguishability of nearby states, analyzed by Wootters [10] and generalized by Braunstein and Caves [11,12]. They have provided an upper bound for the precision in the estimation of a given variable that parametrizes a family of quantum states. In our case this variable is the detuning ∆. Moreover, the optimal measurements always correspond to a set of orth-
ogonal projectors in the n ions Hilbert space. It is worthwhile pointing out the generality of this result in the sense that it accounts for any possible joint measurement on the n particles and any method of data analysis. When the Braunstein and Caves optimization procedure is applied to either uncorrelated or maximally entangled preparations of n ions it yields the same limit (14).
However, we will show in the following that with certain partially entangled preparations one can overcome the limit (14). Let us analyze ﬁrst the case of generalized Ramsey spectroscopy, namely a scheme where the operator

n
Sx = σxk
k=1

(17)

is measured after the free evolution period. In (17) σx = |1 0| + |0 1| denotes the Pauli spin operator and the
superscript k refers to the kth particle.
We can easily evaluate the expectation values of the operators Sx and Sx2 in terms of the corresponding quantities in the absence of decoherence:

n

Sx ≡

σxk = e−γt Sx(γ = 0)

k=1

(18)

Sx2 = n +

σxl σxm = n + e−2γt( Sx2(γ = 0) − n).

l=m

(19)

Finally, the resulting uncertainty in the atomic frequency is given by

|δωo| =

1 (∆Sx)2
N ∂ Sx 2
∂ω

(20)

where ∆Sx 2 = Sx2 − Sx 2 and N denotes the total number of measurements performed during the total time
T . A straightforward calculation leads to an optimal du-
ration of each measurement topt given by the solution of the following equation [13]

n[1 + (2γt − 1)e2γt] = ∆Sy(t = 0) 2

(21)

and the corresponding sensitivity takes the form

|δωo|opt =

2nγ e2γ topt T Sx(t = 0) 2

(22)

where Sx(t = 0) and Sy(t = 0) 2 refer to the initial state preparation. The subscript opt emphasizes that optimization with respect to ∆t has already been taken into account, the minimum value being achieved for ∆t = π/2. Notice that each initial preparation is optimized for diﬀerent values of the single shot time. We can now state a lower bound for the precision attainable within this approach as follows:

|δωo|opt ≥

T

2nγ Sx(0)

2

≥

2 nτdecT

.

(23)

Compared √with the results above, a maximum improvement of 1/ e in the resolution can be achieved. Thus we have found that the bound (14) can be overcome for certain partially entangled states [14].
We now analyze the best precision that can be achieved when optimizing the experiment with respect to both the initial state preparation and the ﬁnal measurement. The problem has been studied by means of a numerical optimization procedure and we have restricted ourselves to small numbers of ions in the trap. The initial state preparation which leads to the best precision is of the form

⌊

n 2

⌋

|ψn = ak|k ,

k=0

(24)

where |k denotes an equally weighted superposition of all states of n ions which contain either a number k or a

3

number n − k of excited states. By ⌊· · ·⌋ we denote the higher resolution as compared to using independent par-

corresponding integer part. The coeﬃcients ak can be ticles when decoherence is present. The best sensitivity

chosen to be real. For example, the corresponding family is achieved when the ions are initially prepared in highly

of states for n = 4 reads

symmetric but only partially entangled states.

|ψ4 = a0(|0000 + |1111 ) + a1(|0001 + |0010

We are grateful to A. Barenco, L. Cutler, G.M. (25) D’Ariano, R. Derka, C.A. Fuchs, H.J. Kimble, P.L.

+|0100 + |1000 + |1110 + |1101 + |1011 + |0111 )

Knight, H. Mabuchi, A. Steane, S. Williams, D.J.

+a2(|0011 + |0101 + |1001 + |1100 + |1010 + |0110 ) . Wineland and P. Zoller for stimulating discussions. This work was supported in part by the European

TMR Research Network ERB 4061PL95-1412, the Euro-

10

pean TMR Research Network on Cavity QED, the Royal

9

Society, Hewlett-Packard, Elsag-Bailey and the Alexander von Humbold Stiftung. SFH acknowledges support

8

from by DGICYT Project No. PB-95-0594 (Spain). CM

7

is supported by a TMR “Marie Curie” Fellowship. TP

holds an “Erwin–Schr¨odinger” scholarship granted by the

6

Austrian Science Fund. We also acknowledge private sup-

5

port from Otto Pellizzari.

Improvement [%]

4

3

2

1

2

3

4

5

6

Number of ions

FIG. 4. The optimum percentual improvement in the precision relative to the limit (14) as a function of the number of ions n. Solid line: Numerical optimization with respect to the initial preparation and application of the Braunstein and Caves algorithm for determinig the optimal measurement. Dashed line: Optimized initial preparation and generalized Ramsey spectroscopy as the ﬁnal measurement.

Note that this family of states exhibits a high degree of symmetry: it is completely symmetric under permutations of the n ions and under exchange of the excited and the ground state for each ion. The optimum percentual improvement in the precision relative to the limit (14) as a function of the number of ions n is shown in Fig. 4. The solid curve shows the improvement obtained by optimizing both the inital preparation and the ﬁnal measurement using the algorithm of Braunstein and Caves. The dashe-
d line exhibits the improvement obtained by optimizing only the initial preparation and performing the measurement given in Eq. (17) corresponding to generalized Ramsey spectroscopy. The improvement obtained by optimising the measurement is rather small. The question whether the (dashed) curve corresponding to Ramsey spectroscopy asymptotically saturates at the theoretical limit (23) or below remains to be addressed. Moreover, whether the curve corresponding to Braunstein and Caves optimization sa-
turates at the same value or higher than the Ramsey curve is an open question.
In conclusion, we can state that standard Ramsey spectroscopy is optimal for uncorrelated particles both in the presence and in the absence of decoherence eﬀects. The use of maximally entangled states does not provide

∗ Also at: I.S.I. Foundation, Villa Gualino, V.le Settimio Severo 63, 10133 Torino, Italy.
[1] D. J. Wineland et al., IEEE Trans. on Ultrasonics, Ferroelectrics and Frequency Control A37, 515 (1990)
[2] W. H. Itano et al., Phys. Rev. A47, 3554 (1993). [3] W. J. Wineland et al., Phys. Rev. A46, R6797 (1992). [4] D. J. Wineland et al., Phys. Rev. A50, 67 (1994). [5] We note this particular example does not represent ex-
actly the original proposal by Wineland et al. [3,4]. We have modiﬁed it to ﬁt the presentation in the paper, however, the two schemes are equivalent as far as the resulting precision is concerned.
[6] A. Barenco et al., Phys. Rev. Lett. 74, 4083 (1995). [7] In reference [3] also certain partially entangled prepara-
tions are analyzed which yield an improvement over the shot noise. [8] J. J. Bollinger et al., Phys. Rev. A54, R4649 (1996). [9] C. W. Gardiner, Quantum Noise (Springer–Verlag, Berlin 1991). [10] W. K. Wooters, Phys. Rev. D23,357 (1981) [11] S. L. Braunstein and C. Caves, Phys. Rev. Lett. 72, 3439 (1994) [12] S. L. Braunstein, C. Caves and G. J. Milburn, Annals of Physics 247, 135 (1996) [13] We have restricted ourselves to the same preparations as the ones analyzed in [3] where only states yieldi-
ng a resonance curve symmetric about ω0 are considered. [14] For example, for n = 2 these states are of the form a(|00 + |11√) + b(|01 + |√01 ) with real coeﬃcients a and b. For a = 0.3 and b = 0.2 we have a 2% improvement in the sensitivity with respect to (14).

4

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:48.523Z
- **Text Length:** 15985 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
