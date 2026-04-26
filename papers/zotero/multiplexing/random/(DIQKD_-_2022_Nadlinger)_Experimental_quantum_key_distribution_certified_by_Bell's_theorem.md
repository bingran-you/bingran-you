# PDF Document: (DIQKD - 2022 Nadlinger) Experimental quantum key distribution certified by Bell's theorem.pdf

**File Path:** (DIQKD - 2022 Nadlinger) Experimental quantum key distribution certified by Bell's theorem.pdf

**Processed Date:** 2026-02-10T18:16:20.947Z

**File Size:** 5514.00 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 388

**Title:** (DIQKD - 2022 Nadlinger) Experimental quantum key distribution certified by Bell's theorem

**Collection:** Multiplexing > Random

---

## Extracted Text Content

Experimental quantum key distribution certified by Bell’s theorem
D. P. Nadlinger,1 P. Drmota,1 B. C. Nichol,1 G. Araneda,1 D. Main,1 R. Srinivas,1 D. M. Lucas,1 C. J. Ballance,1 K. Ivanov,2 E. Y-Z. Tan,3 P. Sekatski,4 R. L. Urbanke,2 R. Renner,3 N. Sangouard,5 and J-D. Bancal5 1Department of Physics, University of Oxford, Clarendon Laboratory, Parks Road, Oxford OX1 3PU, U.K. 2School of Computer and Communication Sciences, EPFL, 1015 Lausanne, Switzerland 3Institute for Theoretical Physics, ETH Zu¨rich, 8093 Zu¨rich, Switzerland 4Department of Applied Physics, -
University of Geneva, Rue de l’E´cole-de-M´edecine, 1211 Geneva, Switzerland 5Universit´e Paris-Saclay, CEA, CNRS, Institut de physique th´eorique, 91191, Gif-sur-Yvette, France (Dated: September 29, 2021; this revision as accepted to Nature: May 10, 2022)
Cryptographic key exchange protocols traditionally rely on computational conjectures such as the hardness of prime factorisation1 to provide security against eavesdropping attacks. Remarkably, quantum key distribution protocols like the one proposed by Bennett and Brassard2 provide information-theoretic security against such attacks, a much stronger form of security unreachable by classical means. However, quantum protocols realised so far are subject to a new class of attacks exploiting a mismatc-
h between the quantum states or measurements implemented and their theoretical modelling, as demonstrated in numerous experiments3–6. Here, we present the experimental realisation of a complete quantum key distribution protocol immune to these vulnerabilities, following Ekert’s pioneering proposal7 to use entanglement to bound an adversary’s information from Bell’s theorem8. By combining theoretical developments with an improved optical fibre link generating entanglement between two trapped-ion qu-
bits, we obtain 95 628 key bits with device-independent security9–12 from 1.5 million Bell pairs created during eight hours of run time. We take steps to ensure that information on the measurement results is inaccessible to an eavesdropper. These measurements are performed without space-like separation. Our result shows that provably secure cryptography under general assumptions is possible with real-world devices, and paves the way for further quantum information applications based on the device--
independence principle.

arXiv:2109.14600v2 [quant-ph] 5 Sep 2023

Private communication over shared network infrastructure is of fundamental importance to the modern world. Classically, shared secrets cannot be created with informationtheoretic security; real-world key exchange protocols rely on unproven conjectures regarding the computational intractability of certain operations. Quantum theory, however, promises that measurements on two correlated quantum systems can yield identical outcomes that are fundamentally unpredictable to any third party. This possibi-
lity of generating secret correlated outcomes at a distance forms the basic idea of quantum key distribution (QKD)13–15. Importantly, the security guarantees provided by QKD are unique in that they do not rely on the assumption that the adversary has limited computational power. Instead, the only required assumptions are that: (i) quantum theory is correct, (ii) the parties can isolate their systems to prevent information leaking to an adversary, (iii) they can privately choose random classical in-
puts to their quantum devices, and (iv) they can process classical information on trusted computers.
Existing QKD systems rely on an additional assumption that is hard to satisfy in practice: they require the quantum states and measurements used to distribute the key to be accurately characterised (e.g. including their dimension)14–16. In other words, the quantum devices are assumed to be trusted and to maintain perfect calibration. Deviations from the expected behaviour can be difficult to detect, which has been exploited in a number of demonstrations where real-world QKD systems

were compromised3–6. So-called measurement-deviceindependent QKD protocols allow untrusted measurements to be used as part of the system but still require well-characterised sources17–21.
Device-independent QKD (DIQKD) protocols9–12 make no additional assumptions about the physical apparatus. According to Bell’s theorem, one can guarantee that two systems produce outcomes sharing exclusive correlations – preventing a third party from knowing these results – without assuming how these outcomes are produced22. This remarkable fact can be used to construct key distribution protocols with security guarantees independent of any assumption about the states measured and measurements perfo-
rmed. Rather, the underlying state and measurements are certified in the process9. Imperfections that might lead to key leakage in conventional QKD due to an inappropriate description of the internal quantum state or measurement instead just result in the protocol aborting. However, this enhanced security comes at the cost of far more stringent experimental requirements. The certifiable amount of private information directly depends on the size of a Bell inequality violation, necessitating a platf-
orm capable of distributing and measuring high-quality entangled states while closing the detection loophole. To successfully extract a shared key using state-of-the-art devices, a tight theoretical analysis and an efficient classical post-processing pipeline are needed, in particular regarding finite-size effects resulting from practical limits on the number of measurements. Despite significant the-

2

a
Ai Alice Classical network link
Bi Bob

Xi Sr ion
Yi Sr ion

Quantum link (single-mode fibre, . m each)
Single-photon detectors
Heralding station

b
X …
Alice Bob
… Y

Heralding signals

Input

Entanglement ready Output

Key generation rounds: Settings (Xi, Yi) = ( , ) maximise output correlations.
Bell test rounds: Settings Xi, Yi ∈ { , } chosen randomly; maximise CHSH inequality violation.

A …
Classical postprocessing
… B

Fig. 1: DIQKD with trapped ions. a, Alice and Bob each operate independent ion-trap nodes, here separated by about 2 m, where one 88Sr+ qubit is confined in a vacuum chamber. To establish entanglement the ions are simultaneously excited to an electronic state which spontaneously decays, during which a single photon each is emitted whose polarisation is entangled with the ion’s internal state. These photons are collected into optical fibres using free-space optics and sent to a central station, whe-
re a probabilistic Bell-basis measurement is performed. This projects the ions into a maximally entangled state, heralded by the coincident detection of a pair of photons. On success, the ions are each transported to a different location in the trap to disconnect the photonic link such that local projective measurements can be applied without either the measurement basis settings Xi, Yi or the outcomes Ai, Bi ∈ {0, 1} leaking into the environment. The state is then reset and the link reconnected, -
and the process is repeated for a large number of rounds. b, In the device-independent security proof, no further assumptions are made about the internal workings of the quantum devices; they are modelled as “black boxes” with classical inputs and outputs. By randomly alternating between measurement settings realising a Bell test and settings which lead to highly correlated outputs, the output bit strings can be certified to originate from appropriate measurements on a quantum state that is close -
to being maximally entangled, ensuring secrecy.

oretical progress10–12,23–31 a practical demonstration of these protocols has remained out of reach.
Here we report the first experimental distribution of a key with device-independent security guarantees. Using a hybrid system where heralded entanglement between stationary trapped ion qubits is established via flying photonic qubits (see Fig. 1), we are able to generate highquality entangled states between two ions separated by about 2 m, resulting in a record-high detection-loopholefree Bell inequality violation with isolated systems. We propose a concrete, practical DIQKD protocol, design a un-
iversal capacity-approaching error-correction code optimised for this context, use extractors and authentication schemes that are frugal in their randomness consumption, and provide a detailed finite-statistics security proof. Combining these theoretical and experimental advances, we successfully obtain a key whose length is more than two orders of magnitude greater than the amount of private shared randomness consumed by the protocol.
Our DIQKD protocol is illustrated in Fig. 2. All parameters are chosen before the start of the protocol. The data acquisition phase of our protocol consists of n sequential rounds. At the start of each, Alice and Bob wait for a valid heralding signal from the central heralding station indicating the creation of remote entanglement. For Bell test rounds, Alice and Bob randomly select inputs

Xi, Yi ∈ {0, 1} for their measurements, which are implemented so that the outcomes Ai, Bi ∈ {0, 1} maximise the probability of winning the Clauser-Horne-Shimony-Holt (CHSH) game32 Ai ⊕ Bi = Xi · Yi. A high winning probability ω, customarily expressed in terms of the CHSH score S = 4 (2ω − 1), tightly bounds the information any adversary can have about the outcomes. For so-called key generation rounds, the inputs are fixed to Xi = 0 and Yi = 2, maximising output correlations as quantified by a low -
quantum bit error rate Q = P (Ai ̸= Bi|Xi = 0, Yi = 2). Bob randomly chooses between the round types after the heralding signal is received and the links are disconnected, choosing Bell test rounds with probability γ, and communicates this choice to Alice, which avoids sifting (discarding of rounds with mismatched measurement bases). The parties keep private records of their measurement settings X = X1X2 . . . and Y = Y1Y2 . . . as well as the outcomes A = A1A2 . . . and B = B1B2 . . .. After the -
n measurement rounds are complete, Alice and Bob need to verify the CHSH score and extract a shared key from the noisy output correlations. Alice openly sends her inputs X to Bob, along with a shorter error-correction syndrome string M which allows Bob to reconstruct a copy A˜ of Alice’s outcomes A. Now holding XYA˜ B, Bob is able to verify whether the CHSH score achieved during the Bell test rounds exceeds a pre-agreed threshold. If this

3

Protocol parameters Pre-shared key Private randomness
Data acquisition

K X
Y

Ti × n

Xi

Yi

Basis revelation

Ai

Bi

X

Error correction

M

Verify error correction Verify Bell violation Privacy ampli cation

GEC ✔ ✔

Authentication
Key activation Key concatenation

GB ✔
C
GA ✔
F
GF ✔

Alice

Bob

Fix protocol parameters n, , m, ωthr before startin .
Alice and Bob share a key K .
Alice holds X = (Xi)i sampled accordin to P(Xi = ) = P(Xi = ) = / . Bob holds Y = (Yi)i with P(Yi = ) = P(Yi = ) = / and P(Yi = ) = − .
For every round i ∈ { , …, n}: » Alice and Bob wait for the heraldin si nal, then disconnect the link. » Bob computes Ti = χ(Yi ≠ ) and sends Ti to Alice.
If Ti = , Alice overrides Xi and sets it to . » Alice and Bob apply settin s Xi and Yi and record the
measurement results as Ai and Bi.
Alice sends X to Bob.
Alice computes syndrome M of A (len th m) and sends it to Bob. Bob reconstructs a uess Ã of A.
Alice computes an encrypted hash GEC of A usin K and sends it to Bob. Bob computes the hash G~ ECof Ã. If G~ EC≠ GEC, the protocol aborts.
If Bob, considerin only rounds i with Ti = , nds that ∑i χ(Ai ⨁ Bi ≠ Xi · Yi) > n ( − ωthr), the protocol aborts. Alice and Bob apply a stron randomness extractor with a seed from K to A and Ã to obtain KA and KB.
Bob computes an encrypted ta GB for T usin K and an unconditionally secure messa e authentication code and sends it to Alice. Alice veri es the ta and sends C = to Bob if it matches the earlier communication, C = if it does not. Alice similarly computes a ta GA for (X, GEC, C) and sends it to Bob. Bob de nes F = if the ta matches and C = , F = otherwise.
Bob sends F to Alice. Bob computes a ta GF for F usin K and sends it to Alice. Alice veri es the ta ; if it does not match or F = , the protocol aborts.
Alice removes the used bits from K and de nes K′A by appendin KA. Bob does the same to et K′B.

Fig. 2: DIQKD protocol structure. Before the protocol starts, the number of rounds n, the probability γ of each round being chosen to be Bell test round, an acceptance threshold ωthr for the CHSH winning probability, and the length m of the error correction syndrome are fixed. An initial key K0, mostly reusable, is required to seed the privacy amplification and authentication algorithms, and as a one-time pad to encrypt a few short messages (indicated using a key symbol). Arrows indicate the class-
ical messages exchanged between the parties, bold letters strings consisting of multiple bits, χ the indicator function with χ(P ) = 1 if P is true and 0 otherwise.

it not the case, or if the reconstruction of A˜ fails, the security might be compromised so the protocol aborts. Otherwise, the parties locally process the outcomes A and A˜ to extract identical final keys, with a guaranteed, arbitrarily low, bound on the information leaked to any adversary.
A crucial step in the security analysis is to infer an upper bound on the knowledge an adversary can have about Alice’s outcomes. In the device-independent setting, where quantum states and measurements are a priori uncharacterised and where we allow memory effects to correlate successive measurement rounds, obtaining a precise bound is nontrivial. A recent breakthrough in this respect is the entropy accumulation theorem (EAT)12,33.

It shows that in an n-round protocol characterised by

a CHSH score S, the amount of randomness generated

by both parties, with respect to an adversary limited

by quantum correction of

tohrdeoerry√, ins,lowwheerr-ebho(uSn)deisdtbhye

n h(S) up worst-case

to a von

Neumann entropy of the outcomes for an individual round

of the protocol compatible with the score S. Using this

result, we derive a bound on Alice’s private randomness

from the CHSH winning probability threshold ωthr chosen before start of the protocol12. We use a recent version

of the EAT34 for its improved statistical performance,

proving security against the most general types of attacks

(as detailed in the Supplementary Material).

The length of the final key is given by the difference

4

CHSH score S

Wall clock time / h QBER Q / %

2.8 2.6 2.4 2.2 2.0 3.0
2.0
1.0
0.0 9.0
6.0
3.0
0.0 0

avg.: 2.677(6)

avg.: 1.44(2)%

10⁶ Number of Bell pairs

avg. rate: 63 s−¹ 2·10⁶

Fig. 3: Quantum link performance. A separate characterisation run of 1 920 000 total Bell pairs shows stable link performance. Inputs and outputs from both nodes were collected to compute a moving average for CHSH score and quantum bit error rate (window length: 100 000 rounds; test round fraction: γ = 1/2). Shaded bands indicate 95 % confidence intervals from binomial statistics in each window. The bottom panel shows the acquisition timestamp for each Bell pair during the 8.5 h experiment duratio-
n. The vertical steps, where time passed without heralds, correspond to ion loss and recalibration events.

between the amount of entropy certified by the EAT and the amount of information revealed through the classical messages exchanged by the parties as part of the protocol. To obtain a positive key rate it is therefore crucial to reconcile Alice and Bob’s outcomes with an error correction syndrome that is as short as possible. Asymptotically, the cost of reconciliation per round is given by H(A|XYB), the entropy of Alice’s outcomes conditioned on the knowledge of inputs and Bob’s outcomes. Reconcili-
ation in presence of finite statistics however comes at a higher price and the best algorithms are often not realisable in practice. In fact, all finite-statistics DIQKD analyses so far have assumed computationally intractable error correction schemes with decodings involving hash pre-image computations11,12,35,36. We address this challenge using a custom error correction solution based on spatiallycoupled low-density parity-check (SC-LDPC) encoding. Our scheme admits an efficient decoding algorit-
hm and requires less overhead than some previously considered impractical codes (see Supplementary Material).
In our experiment, Alice and Bob each control a trapped-ion quantum network node37,38 holding a single 88Sr+ ion qubit each. Dissipative and coherent operations are implemented using resonant laser fields, which each node derives from a shared set of laser sources. Entanglement between the ion and the polarisation of a

Key rate

0.6 0.5 0.4 0.3 0.2 0.1 0.0
105

S = 2.73, Q = 1.8% S = 2.64, Q = 1.8% S = 2.64, Q = 3.3%

106

107

108

109

Number of rounds n

1010

Fig. 4: Finite-statistics key rate. Certified key rate as a function of the number of rounds for S = 2.64, Q = 1.8%, γ = 13/256 and εsnd = 10−10. We operate the DIQKD protocol at the point n = 1.5×106 on this curve, corresponding to a threshold winning probability of ωthr ≈ 0.825538 and a key rate of 95 884/n ≈ 6.39%. Two key rate curves for alternate parameter choices illustrate its sensitivity to the link performance.

spontaneously emitted 422 nm photon is locally created at each node by excitation to a short-lived state with two decay paths to the Zeeman-split qubit states in the ground level. The photons are coupled into single-mode optical fibres connecting the nodes to a central heralding station, where a linear optics setup and four avalanche photodetectors implement a Bell-basis measurement (see Fig. 1a and Supplementary Material). The overall detection efficiency for each spontaneous decay photon is ≈ 2 -
%, necessitating many attempts to observe a twophoton coincidence heralding the successful creation of entanglement between Alice’s and Bob’s ion qubits. We perform state tomography to characterise the ion-ion entanglement, measuring a fidelity to the closest maximally entangled state of 96.0(1) %, which exceeds previously reported measurements for remote entanglement between matter qubits38–43.
To implement the “black box” primitives for DIQKD, each node first disconnects the qubit from the optical link following a herald event by shuttling it away from the focus of the fibre-coupling objective lens, which ensures the basis choices and measurement results do not leak to a third party (see Methods). Bob decides between Bell test and key generation rounds using private randomness obtained from a commercial quantum random number generator, sending the result to Alice in real time. In case o-
f a Bell test round, both nodes then similarly use a private random string to choose between the coherent operations defining the measurement bases, i.e. the inputs Xi and Yi. As each DIQKD round only starts after a heralding success, this approach is intrinsically detection-loophole-free; losses in the optical links and limited detector quantum efficiencies, which pose a challenge

5

Protocol step Consumed Used (reusable) Generated

Validation of error correction

64

Authentication 128

Key activation

64

Privacy amplification

0

1280 1 201 886

0
0 0
95 884

Total

256

1 203 166

95 884

Table I: Secret key balance sheet. The experiment requires an initial 1 203 422-bits long key K0 shared between Alice and Bob. 256 of these bits are consumed by the protocol while generating 95 884 new secret shared bits. This results in the creation of a longer 1 299 050-bits long shared secret key K1 = K′A between Alice and Bob, effectively extending the initial key by 95 628 bits.

for DIQKD on photonic platforms35, affect the heralding rate, but not S or Q. The measurements of one party are not space-like separated from the choice of measurements of the other party. We characterise the link performance by measuring the probabilities P (AiBi|XiYi) in a separate experiment. A representative dataset, shown in Fig. 3, results in a CHSH score of S = 2.677(6) and a quantum bit error rate of Q = 1.44(2) %.
We now implement the complete protocol as described in Fig. 2, using Trevisan’s quantum-proof construction as a strong randomness extractor and short tags based on a strongly universal hash family for classical message authentication. The two nodes are operated completely independently: they have independent control systems, and the input and output data is only exchanged over a classical network link as prescribed by the protocol (see Methods). In order to guarantee a high success probability of -
the protocol, we conservatively choose n = 1.5 × 106, γ ≈ 5.1 %, ωthr ≈ 0.825 538, and an error correction code with syndrome length m = 296 517 based on the previous link characterisation (see Supplementary Material for more details). We acquire data over 7.9 h of wall-clock time (with one pause of 4.4 h due to a laser failure), and successfully extract a secret key of 95 884 bits with soundness error εsnd = 10−10, with a post-processing time of 5 min (see table I). This greatly exceeds the 256 b-
its of private randomness consumed during the protocol, thus marking the first demonstration of a fully deviceindependent QKD.
The resulting key is secure under very general assumptions, including attacks where the adversary can act arbitrarily on the quantum side information from all rounds. Moreover, the measurement devices can have memory and operate according to the results of previous rounds, and the security of the protocol is composable with other cryptographic protocols using different devices44,45. Out of the remaining assumptions (i)-(iv), isolation is arguably the most critical one from a practical perspective.-
 Space-like separation between measurement events

could exclude some types of leakage but does not guarantee isolation35,46–48 (see Methods). We envision that a stronger confidence in the isolation of the nodes will be possible when all quantum systems can be distributed and stored in advance49, thereby avoiding the necessity for quantum communication during the protocol. The present apparatus could potentially be adapted to span buildingscale local-area networks, with optical fibre losses at the 422 nm wavelength reducing the rate by approximate-
ly a factor of two every hundred metres. Key distribution over kilometres is in principle possible with downconversion to the telecom band50, or through free-space optics. Improved key-generation rates might be achievable through improvements to the photon collection efficiency, for instance through the use of optical cavities51. Combining multiple instances of telecom and cavity-enhanced links into a quantum repeater architecture52 might enable fully quantum-secure long distance communication.
METHODS
Loopholes. In the context of Bell experiments seeking to disprove local causality, several “loopholes” have been discussed22, referring to requirements in the theoretical analysis not met in experimental realisations (consequently permitting a locally causal explanation for the observations even in the presence of a Bell inequality violation). One of them, known as the “locality loophole”, is the requirement that no information about the input of one party be known by the device of the other party-
 before it produces an outcome. In a fundamental test of local causality, information transfer of any kind must be excluded, even that potentially described by an as-yet-unknown theory. Under the assumption that measurement choices are made locally in a truly random manner so that no information about them is available in advance, it is generally admitted that this loophole can be closed through space-like separation by requiring that the measurements of both parties are space-like separated from -
the events defining the other party’s setting choice. The condition that the inputs of one party be unknown to the other party upon measurement is also necessary for DIQKD (see Supplementary Material for more details). Space-like separation between the parties’ measurement events is advantageous for this and can possibly already eliminate specific attacks by itself. However, the cryptographic context is more demanding. Not only must the input choices be unknown at other locations but also, even mo-
re obviously, the output results. Moreover, no cryptographic security can be achieved if information is allowed to travel to another party (e.g. the adversary), even if the speed of that transfer is limited to that of light. Therefore, space-like separation is not sufficient for DIQKD and instead, the parties must be well isolated47,48. Isolation of each node, i.e. control over the flow of information from

6

and to the outside, is thus an unavoidable assumption in any key exchange protocol and must be achieved through separate means. The locality condition being a consequence of the isolation assumption, no further conditions such as space-like separation are needed: if local information can be kept locally, then it is not available to a distant device. The isolation assumption has however no consequence on the “detection loophole”, implying that a similar treatment of this loophole is needed in the c-
ontext of DIQKD as for conventional Bell tests.
Link disconnection and isolation. By design, the trapped-ion quantum bits are well-coupled to the optical fibre linking the nodes during the entanglement generation phase. To meet the isolation assumption, the ions in each node are shuttled 3 µm from the focus of the imaging system after a successful herald by modifying the trapping potential. This way, the coupling from Alice’s and Bob’s qubits to the outside of their laboratories is reduced by a factor of > 104 before the basis choices are appli-
ed and the states are read out. Similarly, the qubit state left after readout is scrambled by applying deshelving and cooling lasers for 100 µs (> 10 time constants) before reconnecting the link. The information that could possibly leak through the remaining weak coupling is insufficient to compromise our conclusion of a positive key rate. If desired, one could arbitrarily reduce the amount of leaked information by shuttling the ion a further distance from the focus (> 1 mm is accessible in the tr-
ap chips used here), or by adding a macroscopic mechanism to disconnect the optical fibre, e.g. a fast micro-electromechanical fibre switch. The laser control fields for both nodes were derived from the same set of sources. An independent set of laser sources could be used instead, as the only synchronisation requirements are for the qubit frequencies to be matched and for the single-photon wave packets at the heralding station to be well-aligned compared to their 7 ns duration.
Data handling. We make extensive efforts to perform our experiments in a fashion representative of a real deployment and compatible with the security and isolation assumptions throughout. Each node is driven by an independent instance of the Advanced Real-Time Infrastructure for Quantum physics (ARTIQ) open-source real-time control system53; the combination of personal computer (PC) and Field Programmable Gate Arrays (FPGA) makes up the trusted local classical computation hardware as per the assum-
ptions. The random bit strings for the CHSH basis and round type choices are derived from a commercial quantum random number generator and stored in computer memory before the start of the experiment. No post-selection takes place; a heralding event always results in a bit added to the final A and B strings. The outcome strings, along with other private data, neither leave the respective node PCs, nor are they manually inspected. A classical network link connects the two nodes, used to exchange th-
e public messages required by the protocol (e.g. the error correction syndrome data),

and to coordinate the overall experiment schedule (e.g. for periodic calibrations, or to remedy ion loss events).
DATA AVAILABILITY
The datasets generated during the current study are available from DPN and CJB on reasonable request.
CODE AVAILABILITY
The custom code generated during the current study is available from the corresponding authors on reasonable request.
[1] R. L. Rivest, A. Shamir, and L. Adleman, A method for obtaining digital signatures and public-key cryptosystems, Commun. ACM 21, 120 (1978).
[2] C. H. Bennett and G. Brassard, Quantum cryptography: public key distribution and coin tossing., Theor. Comput. Sci. 560, 7 (1984).
[3] Y. Zhao, C.-H. F. Fung, B. Qi, C. Chen, and H.-K. Lo, Quantum hacking: Experimental demonstration of timeshift attack against practical quantum-key-distribution systems, Phys. Rev. A 78, 042333 (2008).
[4] L. Lydersen, C. Wiechers, C. Wittmann, D. Elser, J. Skaar, and V. Makarov, Hacking commercial quantum cryptography systems by tailored bright illumination, Nat. Photonics 4, 686 (2010).
[5] I. Gerhardt, Q. Liu, A. Lamas-Linares, J. Skaar, C. Kurtsiefer, and V. Makarov, Full-field implementation of a perfect eavesdropper on a quantum cryptography system, Nat. Commun. 2, 10.1038/ncomms1348 (2011).
[6] H. Weier, H. Krauss, M. Rau, M. Fu¨rst, S. Nauerth, and H. Weinfurter, Quantum eavesdropping without interception: an attack exploiting the dead time of single-photon detectors, New J. Phys. 13, 073024 (2011).
[7] A. K. Ekert, Quantum cryptography based on Bell’s theorem, Phys. Rev. Lett. 67, 661 (1991).
[8] J. S. Bell, On the Einstein Podolsky Rosen paradox, Phys. Phys. Fiz 1, 195 (1964).
[9] D. Mayers and A. Yao, Self Testing Quantum Apparatus, Quantum Info. Comput. 4, 273–286 (2004).
[10] A. Ac´ın, N. Brunner, N. Gisin, S. Massar, S. Pironio, and V. Scarani, Device-Independent Security of Quantum Cryptography against Collective Attacks, Phys. Rev. Lett. 98, 230501 (2007).
[11] U. Vazirani and T. Vidick, Fully Device-Independent Quantum Key Distribution, Phys. Rev. Lett. 113, 140501 (2014).
[12] R. Arnon-Friedman, F. Dupuis, O. Fawzi, R. Renner, and T. Vidick, Practical device-independent quantum cryptography via entropy accumulation, Nat. Commun. 9, 459 (2018).
[13] N. Gisin, G. Ribordy, W. Tittel, and H. Zbinden, Quantum cryptography, Rev. Mod. Phys. 74, 145 (2002).
[14] V. Scarani, H. Bechmann-Pasquinucci, N. J. Cerf, M. Duˇsek, N. Lu¨tkenhaus, and M. Peev, The security

7

of practical quantum key distribution, Rev. Mod. Phys. 81, 1301 (2009). [15] H.-K. Lo, M. Curty, and K. Tamaki, Secure quantum key distribution, Nat. Photonics 8, 595–604 (2014). [16] A. Ac´ın, N. Gisin, and L. Masanes, From Bell’s Theorem to Secure Quantum Key Distribution, Phys. Rev. Lett. 97, 120405 (2006). [17] S. L. Braunstein and S. Pirandola, Side-Channel-Free Quantum Key Distribution, Phys. Rev. Lett. 108, 130502 (2012). [18] H.-K. Lo, M. Curty, and B. Qi, Measurement-DeviceIndependent Qua-
ntum Key Distribution, Phys. Rev. Lett. 108, 130503 (2012). [19] A. Rubenok, J. A. Slater, P. Chan, I. Lucio-Martinez, and W. Tittel, Real-World Two-Photon Interference and Proof-of-Principle Quantum Key Distribution Immune to Detector Attacks, Phys. Rev. Lett. 111, 130501 (2013). [20] T. Ferreira da Silva, D. Vitoreti, G. B. Xavier, G. C. do Amaral, G. P. Tempor˜ao, and J. P. von der Weid, Proof-of-principle demonstration of measurement-deviceindependent quantum key distribution using polarizatio-
n qubits, Phys. Rev. A 88, 052303 (2013). [21] Y. Liu, T.-Y. Chen, L.-J. Wang, H. Liang, G.-L. Shentu, J. Wang, K. Cui, H.-L. Yin, N.-L. Liu, L. Li, X. Ma, J. S. Pelc, M. M. Fejer, C.-Z. Peng, Q. Zhang, and J.W. Pan, Experimental Measurement-Device-Independent Quantum Key Distribution, Phys. Rev. Lett. 111, 130502 (2013). [22] N. Brunner, D. Cavalcanti, S. Pironio, V. Scarani, and S. Wehner, Bell nonlocality, Rev. Mod. Phys. 86, 419 (2014). [23] J. Barrett, L. Hardy, and A. Kent, No Signaling and -
Quantum Key Distribution, Phys. Rev. Lett. 95, 010503 (2005). [24] L. Masanes, Universally Composable Privacy Amplification from Causality Constraints, Phys. Rev. Lett. 102, 140501 (2009). [25] B. W. Reichardt, F. Unger, and U. Vazirani, Classical command of quantum systems, Nature 496, 456 (2013). [26] M. Ho, P. Sekatski, E. Y.-Z. Tan, R. Renner, J.-D. Bancal, and N. Sangouard, Noisy Preprocessing Facilitates a Photonic Realization of Device-Independent Quantum Key Distribution, Phys. Rev. Lett. -
124, 230502 (2020). [27] R. Schwonnek, K. T. Goh, I. W. Primaatmaja, E. Y.-Z. Tan, R. Wolf, V. Scarani, and C. C.-W. Lim, Deviceindependent quantum key distribution with random key basis, Nat. Commun. 12, 2880 (2021). [28] E. Woodhead, A. Ac´ın, and S. Pironio, Deviceindependent quantum key distribution with asymmetric CHSH inequalities, Quantum 5, 443 (2021). [29] P. Sekatski, J.-D. Bancal, X. Valcarce, E.-Z. Tan, R. Renner, and N. Sangouard, Device-independent quantum key distribution from gener-
alized CHSH inequalities, Quantum 5, 444 (2021). [30] P. Brown, H. Fawzi, and O. Fawzi, Device-independent lower bounds on the conditional von Neumann entropy, arXiv:2106.13692 (2021). [31] M. Masini, S. Pironio, and E. Woodhead, Simple and practical DIQKD security analysis via BB84-type uncertainty relations and Pauli correlation constraints, arXiv:2107.08894 (2021). [32] J. F. Clauser, M. A. Horne, A. Shimony, and R. A. Holt, Proposed experiment to test local hidden-variable theories, Phys. Rev.-
 Lett. 23, 880 (1969).

[33] F. Dupuis, O. Fawzi, and R. Renner, Entropy Accumulation, Commun. Math. Phys. 379, 867 (2020).
[34] W.-Z. Liu, M.-H. Li, S. Ragy, S.-R. Zhao, B. Bai, Y. Liu, P. J. Brown, J. Zhang, R. Colbeck, J. Fan, Q. Zhang, and J.-W. Pan, Device-independent randomness expansion against quantum side information, Nat. Phys. 17, 448 (2021).
[35] G. Murta, S. B. van Dam, J. Ribeiro, R. Hanson, and S. Wehner, Towards a realization of device-independent quantum key distribution, Quantum Sci. Technol. 4, 035011 (2019).
[36] E. Y.-Z. Tan, P. Sekatski, J.-D. Bancal, R. Schwonnek, R. Renner, N. Sangouard, and C. C.-W. Lim, Improved DIQKD protocols with finite-size analysis, arXiv:2012.08714 (2020).
[37] D. L. Moehring, P. Maunz, S. Olmschenk, K. C. Younge, D. N. Matsukevich, L.-M. Duan, and C. Monroe, Entanglement of Single-Atom Quantum Bits at a Distance, Nature 449, 68 (2007).
[38] L. J. Stephenson, D. P. Nadlinger, B. C. Nichol, S. An, P. Drmota, T. G. Ballance, K. Thirumalai, J. F. Goodwin, D. M. Lucas, and C. J. Ballance, High-Rate, High-Fidelity Entanglement of Qubits Across an Elementary Quantum Network, Phys. Rev. Lett. 124, 110501 (2020).
[39] P. Maunz, S. Olmschenk, D. Hayes, D. N. Matsukevich, L.-M. Duan, and C. Monroe, Heralded Quantum Gate between Remote Quantum Memories, Phys. Rev. Lett. 102, 250502 (2009).
[40] M. Lettner, M. Mu¨cke, S. Riedl, C. Vo, C. Hahn, S. Baur, J. Bochmann, S. Ritter, S. Du¨rr, and G. Rempe, Remote Entanglement between a Single Atom and a Bose-Einstein Condensate, Phys. Rev. Lett. 106, 210503 (2011).
[41] S. Ritter, C. N¨olleke, C. Hahn, A. Reiserer, A. Neuzner, M. Uphoff, M. Mu¨cke, E. Figueroa, J. Bochmann, and G. Rempe, An elementary quantum network of single atoms in optical cavities, Nature 484, 195 (2012).
[42] B. Hensen, H. Bernien, A. E. Dr´eau, A. Reiserer, N. Kalb, M. S. Blok, J. Ruitenberg, R. F. L. Vermeulen, R. N. Schouten, C. Abell´an, W. Amaya, V. Pruneri, M. W. Mitchell, M. Markham, D. J. Twitchen, D. Elkouss, S. Wehner, T. H. Taminiau, and R. Hanson, Loophole-free Bell inequality violation using electron spins separated by 1.3 kilometres, Nature 526, 682 (2015).
[43] W. Rosenfeld, D. Burchardt, R. Garthoff, K. Redeker, N. Ortegel, M. Rau, and H. Weinfurter, Event-Ready Bell Test Using Entangled Atoms Simultaneously Closing Detection and Locality Loopholes, Phys. Rev. Lett. 119, 010402 (2017).
[44] C. Portmann and R. Renner, Security in Quantum Cryptography, arXiv:2102.00021 (2021).
[45] J. Barrett, R. Colbeck, and A. Kent, Memory Attacks on Device-Independent Quantum Cryptography, Phys. Rev. Lett. 110, 010503 (2013).
[46] S. Pironio, A. Ac´ın, S. Massar, A. Boyer de la Giroday, D. N. Matsukevich, P. Maunz, S. Olmschenk, D. Hayes, L. Luo, T. A. Manning, and C. Monroe, Random numbers certified by Bell’s theorem, Nature 464, 1021 (2010).
[47] S. Pironio, A. Acin, N. Brunner, N. Gisin, S. Massar, and V. Scarani, Device-independent quantum key distribution secure against collective attacks, New J. Phys. 11, 045021 (2009).
[48] S. Pirandola, U. L. Andersen, L. Banchi, M. Berta, D. Bunandar, R. Colbeck, D. Englund, T. Gehring, C. Lupo, C. Ottaviani, J. L. Pereira, M. Razavi, J. S.

8
Shaari, M. Tomamichel, V. C. Usenko, G. Vallone, P. Villoresi, and P. Wallden, Advances in quantum cryptography, Adv. Opt. Photon. 12, 1012 (2020). [49] K. Heshami, D. G. England, P. C. Humphreys, P. J. Bustard, V. M. Acosta, J. Nunn, and B. J. Sussman, Quantum memories: emerging applications and recent advances, Journal of Modern Optics 63, 2005 (2016). [50] T. A. Wright, R. J. A. Francis-Jones, C. B. E. Gawith, J. N. Becker, P. M. Ledingham, P. G. R. Smith, J. Nunn, P. J. Mosley, B. Brecht, and -
I. A. Walmsley, Two-way photonic interface for linking the Sr+ transition at 422 nm to the telecommunication C band, Phys. Rev. Appl. 10, 044012 (2018). [51] J. Schupp, V. Krcmarsky, V. Krutyanskiy, M. Meraner, T. Northup, and B. Lanyon, Interface between TrappedIon Qubits and Traveling Photons with Close-to-Optimal Efficiency, PRX Quantum 2, 020331 (2021). [52] N. Sangouard, C. Simon, H. de Riedmatten, and N. Gisin, Quantum repeaters based on atomic ensembles and linear optics, Rev. Mod. Phys. 83-
, 33 (2011). [53] S. Bourdeauducq et al., m-labs/artiq: 6.0 (Version 6.0) (2021).

9

ACKNOWLEDGEMENTS
JDB and EYZT would like to thank Rotem ArnonFriedman for discussions. We thank Sandia National Laboratories for supplying HOA2 ion traps. This work was supported by the UK EPSRC Hub in Quantum Computing and Simulation (EP/T001062/1), the E.U. Quantum Technology Flagship Project AQTION (No. 820495), and CJB’s UKRI Fellowship (MR/S03238X/1). EYZT and RR acknowledge funding by the Swiss National Science Foundation (SNSF), through the National Centers for Competence in Research QSIT and SwissMAP, and -
by the Air Force Office of Scientific Research (AFOSR) through grant FA9550-19-1-0202. JDB and NS acknowledge funding by the Institut de Physique Th´eorique (IPhT), Commissariat `a l’E´nergie Atomique et aux Energies Alternatives (CEA) and the Region ˆIle-de-France in the framework of DIM SIRTEQ.

data analysis. JDB and DPN extracted the key from the raw data. KI, RLU and JDB designed the error correction code. JDB, EYZT, NS, PS and RR established the detailed protocol steps and derived the corresponding security proof. NS, JDB, DPN and CJB wrote the manuscript. CJB and DML supervised the experimental work, JDB and NS the theoretical work. NS and JDB initiated the project. All authors contributed to the discussion and interpretation of results, and contributed to the manuscript.
Competing interests
CJB is a director of Oxford Ionics. The remaining authors declare no competing interests.
Corresponding authors

AUTHOR INFORMATION Contributions

Correspondence regarding experimental work should be addressed to DPN or CJB, that concerning theoretical aspects to JDB or NS.

DPN, PD, BCN, GA, DM, and RS built and operated the experimental apparatus. DPN and PD led the collection of the experimental data and performed the

ADDITIONAL INFORMATION Supplementary Information is available for this paper.

Supplementary information for “Experimental quantum key distribution certified by Bell’s theorem”
D. P. Nadlinger,1 P. Drmota,1 B. C. Nichol,1 G. Araneda,1 D. Main,1 R. Srinivas,1 D. M. Lucas,1 C. J. Ballance,1 K. Ivanov,2 E. Y-Z. Tan,3 P. Sekatski,4 R. L. Urbanke,2 R. Renner,3 N. Sangouard,5 and J-D. Bancal5 1Department of Physics, University of Oxford, Clarendon Laboratory, Parks Road, Oxford OX1 3PU, U.K. 2School of Computer and Communication Sciences, EPFL, 1015 Lausanne, Switzerland 3Institute for Theoretical Physics, ETH Zu¨rich, 8093 Zu¨rich, Switzerland 4Department of Applied Physics, -
University of Geneva, Rue de l’E´cole-de-M´edecine, 1211 Geneva, Switzerland 5Universit´e Paris-Saclay, CEA, CNRS, Institut de physique th´eorique, 91191, Gif-sur-Yvette, France (Dated: September 29, 2021; this revision as accepted to Nature: May 10, 2022)

arXiv:2109.14600v2 [quant-ph] 5 Sep 2023

CONTENTS

S1. Notation

S2

S2. Experimental details

S2

A. The two-node ion trap network

S3

B. Entanglement characterisation

S5

C. DIQKD primitives

S7

D. Shuttling-based link isolation

S9

S3. Definition and assumptions of DIQKD

S10

A. General setting of QKD

S10

B. DIQKD assumptions

S11

C. From assumptions to security

S12

D. The DIQKD assumptions in the experiment

S12

E. Possible improvements

S13

S4. DIQKD protocol

S13

S5. Model of the statistics

S15

S6. Error correction

S16

A. Minimum syndrome length for a binary symmetric channel

S16

B. Concrete setting

S17

C. Practical coding approaches

S17

1. LDPC codes

S18

2. SC-LDPC codes

S19

3. Belief propagation decoding

S20

D. Simulations

S20

E. Practical implementation of the coding scheme

S22

S7. Protocol feasibility and completeness

S24

S8. Basic definitions and notions of security

S24

A. Trace distance

S24

B. Smooth min and max entropies

S25

C. Security definitions

S26

S9. Classical cryptographic algorithms

S26

A. Strongly universal hashing

S27

B. Privacy amplification

S28

S10. Security statement

S30

S11. Security analysis – Proof of Proposition 2

S32

A. Modified protocol

S33

S2

B. Events

S34

C. Correctness

S34

D. Secrecy

S34

1. Lower-bounding Hmεsi′n(AB′|XYE)

S37

2. Upper-bounding Hmεsa′x′ (B′|XYE)

S38

3. Bringing the pieces together

S39

References

S39

S1. NOTATION

Symbol
QKD DIQKD CPTP CP CQ BSC LDPC SC-LDPC ML BP EAT cq-state χ(Ui = 0) S=(H) S≤(H) log ln ρ, τ , σ D(ρ, τ ) P(ρ, τ ) F (ρ, τ ) ||O||1 P (Ω) ρ|Ω ρ∧Ω Ai A

Description
Quantum key distribution Device-independent quantum key distribution Completely positive and trace preserving Completely positive Classical-quantum Binary symmetric channel Low-density parity-check Spatially-coupled low-density parity-check Maximum likelihood Belief propagation Entropy accumulation theorem classical-quantum state Indicator function returning 1 if Ui = 0 is true, 0 otherwise The set of normalized quantum states The set of sub-normalized quantum states Binary logarithm Natural logar-
ithm Density matrices Trace distance between ρ and τ Purified distance between ρ and τ Generalized fidelity between ρ and τ Trace norm of the operator O Probability for the event Ω to be true Normalized state conditioned on the event Ω being true Subnormalized state conditioned on the event Ω being true (ρ∧Ω = P (Ω)ρ|Ω) A variable indexed by an integer i A string of variables, i.e. A = (A1, A2, . . . , An)

Table S1: List of commonly used acronyms, symbols and expressions.

S2. EXPERIMENTAL DETAILS
Alice and Bob each control one of a pair of nominally identical room-temperature trapped-ion nodes, as first described in ref. [1]. We have made extensive technical improvements to the experiment since, leading to higher-fidelity, more stable remote entanglement (e.g. through beam power and magnetic field stabilisation), and improved capabilities for autonomous calibration and coordination between the nodes. In this section, we give a brief description of the setup before discussing the entangleme-
nt performance and some details relevant for the DIQKD implementation not described in the Methods. We finally discuss some considerations regarding the isolation assumption made in the DIQKD setting.
Compared to ref. [1], the system names (Alice/Bob) have been swapped throughout this manuscript in order for the node roles (set by an arbitrary choice in the real-time coordination logic) to match the protocol analysis.

S3

PC FPGA
heralding logic

Ethernet link: Scheduling (calibrations, …), post-processing

meas. basis

Round type selection (Ti) Heralding state machine sync.

AOM

Qubit (coherent) manipulation laser

AOM

meas. basis

PC FPGA
heralding logic

DAC

AAAAOOOOMMMM

Cooling/excitation lasers

AOM

DAC

AAAOOOMMM

Alice

state readout

APD …

APD APD

λ/ λ/
APD
APD

state readout Bob
APD …

Classical network link (Ethernet)

Logic signal

Optical bre

Node isolation region (private laboratory)

Fig. S1: High-level sketch of the experimental apparatus. The points of connection between Alice’s and Bob’s nodes (indicated by the shaded areas) as well as the central heralding station are shown explicitly. The laser beams are derived from a common set of sources, but switched separately for each node using acousto-optical modulators (AOMs). The agile radio-frequency (RF) sources used for this, which are programmed on the fly from the
FPGA-based real-time control systems, are shown explicitly for the 674 nm qubit manipulation laser to illustrate how the measurement bases choices are physically implemented. The digital-to-analogue converters (DACs) set the trap
electrode voltages and are used to disconnect the photonic link by changing the ion position.

A. The two-node ion trap network

Each node is centred around a “High Optical Access 2” surface-electrode Paul trap (Sandia National Laboratories [2]),

which confines one 88Sr+ ion each. We use standard techniques to implement dissipative and coherent operations

using resonant laser radiation. Lasers at 422 nm and 1092 nm address the 5s S1/2 ↔ 5p P1/2 ↔ 4d D3/2 transition cycle for Doppler cooling, state preparation and readout; a static magnetic field of 0.500 mT lifts state degeneracies.

For readout shelving and coherent operations, a narrow-linewidth 674 nm laser addresses pairs of 5s S1/2 ↔ 3d D5/2

Zeeman

sublevels,

implementing

arbitrary

rotations

of

the

form

Rxy (θ,

φ)

=

exp(−i

θ 2

(cos

φ

X

+

sin φ

Y

)).

Ion-photon entanglement is generated in each node by coherent excitation to the short-lived |P1/2, mJ = 1/2⟩ state

using a ∼ 5 ps 422 nm laser pulse. Photons emitted into free space during spontaneous decay, entangled in polarisation

with the resulting S1/2 Zeeman state according to the dipole selection rules, are collected by lens objectives (numerical aperture 0.6) perpendicular to the magnetic field. The trap nodes are connected to a central heralding station using

2 × 1.75 m fused silica single-mode fibres, which also avoids polarisation mixing errors. There, a 50 : 50 beam splitter

and two polarising beam splitters implement a partial Bell-basis measurement. The orientation of a pair of quarter-

and half-wave plates at each input is calibrated daily to compensate birefringence in the input fibres. The output

of four avalanche photodiode single-photon detectors is connected to heralding logic implemented in the node-local

FPGA control systems. Entanglement generation is repeatedly attempted at a rate of 1 MHz until coincident detection

of two photons of opposite polarisation heralds the creation of an entangled state (see Fig. S2 for the detailed sequence

during DIQKD experiments).

A high-level block diagram of the relevant components is shown in Fig. S1. Alice’s and Bob’s nodes each have

their own, independent copy of the required experimental control system. The connections between the nodes are

explicitly indicated in the figure: A classical network link (Ethernet) between the node PCs is used for high-level

coordination, e.g. to handle periodic recalibrations or interruptions due to ion-loss events, as well as to exchange the

messages required for the DIQKD post-processing steps. The PCs, together with the FPGA-based real-time control

systems also connected via Ethernet, make up the trusted classical processing systems available to Alice and Bob as

S4

Bob Alice

Yi

Xi

Cooling

Cooling

yes no

timeout? no ready? yes
trigger!
Entanglement attempt

ready=1

no

yes

no

trigger?

ready?

yes
Entanglement attempt

ready=0 yes
timeout? no

no success? yes

no success? yes

Isolate link

Isolate link

Send Ti

Receive Ti

Analysis and readout

Analysis and readout

Reconnect

link

Reconnect

Bi

link

Ai

(a) Flow diagram of the experimental sequence (left Bob, right Alice; separated by the dashed line). Execution starts on both systems with private random strings Xi and Yi. After a period of cooling, the state machines synchronise using an acknowledged trigger pulse. Subsequently, the attempt cycle is repeated until either a successful herald is received from the external heralding
station, or a set attempt duration limit has elapsed after which the ions are re-cooled. When a successful herald is received, both systems disconnect from the link by shuttling the ion away from the focus of the high-NA lens. Only then, Bob announces
whether he is going to perform a key generation round or a test round and executes the corresponding local analysis. Alice follows suit upon receipt of the key-round signal. Both parties store the outcome of their measurement, Bi and Ai, locally.

zion 674 nm 1033 nm 1092 nm 422 nm π 422 nm σ+ 422 nm σ−

link disconnected

300 µs cooling 1 µs entanglement attempt

425 µs local analysis

repeat until success
(b) Timing diagram of ion position zion and the experimental pulse sequence (not to scale). The ions are Doppler-cooled prior to the entanglement attempt loop, during which tightly timed state preparation and pulsed excitation pulses create single photons to be probabilistically collected by the photonic link. If a coincidence event heralds the successful creation of a remote entangled
state, the local analysis sequence is executed locally on each system.

Fig. S2: Experimental sequence. The flow diagram Fig. S2a shows the basic logic implemented in the state machine driving the remote entanglement generation scheme. The timing diagram Fig. S2b complements this picture with the
concrete laser pulses issued at different stages of the protocol.

00| 10| 01| 11|

00| 10| 01| 11|

|00

|00

|10

0.047 ei1.394

|01

0.055 0.465 ei1.805 ei0.424

|11

0.004 0.026 0.020 ei0.571 ei1.027 ei0.693

|10

0.043 ei1.363

|01

0.049 0.468 ei1.859 ei0.468

|11

0.003 0.028 0.021 ei0.931 ei1.158 ei0.749

S5

00| 10| 01| 11|

00| 10| 01| 11|

0.5 |00
0.25 |10
0.1 |01 0.0i 1
+ |11 i

0.039 ei1.295 0.037 0.467 ei0.761 ei1.450 0.004 0.022 0.019 ei1.035 ei0.446 ei0.965

|00

|10

0.044 ei1.220

|01

0.047 0.465 ei0.600 ei1.440

|11

0.001 0.008 0.012 ei1.055 ei0.665 ei0.979

a

b

c

d

Fig. S3: Maximum-likelihood density matrix estimates for the joint ion-ion state after each of the heralding detector click patterns (a-d). The fully entangled fractions, i.e. fidelities to the closest maximally entangled state, are 96.1(3) %,
96.4(1) %, 95.8(2) % and 95.8(2) %, respectively, for an average fidelity of 96.0(1) % (1σ statistical errors from parametric bootstrapping). For the 180 000 successful heralds in this dataset a total of 1 133 526 525 entanglement attempts were made, corresponding to an average success probability of 1.6 × 10−4. With an attempt rate of 1 MHz,
interrupted by 300 µs of cooling every 500 µs, this results in a heralding rate of 100 s−1.

per DIQKD assumption (iv).
For this demonstration, the two nodes are located in the same room; it is thus convenient to derive all the required laser beams from the same set of sources. As indicated in Fig. S1, the actual switching and routing optics are kept separate and local to the nodes. A separate set of lasers could easily be used for each (e.g. in an application with a larger distance between nodes), as we do not rely on any optical phase coherence between the nodes. The only synchronisation requirement is for the en-
tanglement-carrying photons to be well-matched in frequency and arrival time at the heralding station compared to their 7 ns duration. In particular, we do not require the phases of the 422 nm picosecond pulses or the absolute phase of the coherent 674 nm pulses to be stable; the relative phase between projective measurements at each node is determined solely by the 14 MHz RF beat note between the two 674 nm pulses.
The 674 nm Ti:Sapphire laser is stabilised to a high-finesse cavity using a multi-stage closed-loop feedback controller, which occasionally loses lock (∼ once per day). To enable autonomous operation of long-running experiments, a real-time signal is forwarded to the control systems of Alice and Bob if this occurs, who then pause protocol execution until the lock is established again. The nodes also negotiate an interruption if any of a number of rare issues with the experimental hardware is detec-
ted (e.g. insufficient power in one of the laser beams); such an issue, which required manual intervention, was responsible for the ∼ 4 h interruption during the final DIQKD data run presented in the main text. Since the total number of rounds is fixed before the start of the protocol and the timing of the round is free, pauses between the rounds have no impact on the final security.

B. Entanglement characterisation
Remote entanglement is produced in the ground state S1/2 manifold. For laser-based manipulation, it is mapped to an “optical” qubit using a π pulse on the 674 nm |S1/2, mJ = 1/2⟩ → |D5/2, mJ = −3/2⟩ transition, followed by coherent manipulation on the |S1/2, mJ = −1/2⟩ ↔ |D5/2, mJ = −3/2⟩ transition to select the measurement basis, or, for measurements in the computational basis, an additional |S1/2, mJ = 1/2⟩ → |D5/2, mJ = 3/2⟩ π pulse to reduce shelving errors.
To characterise the experimental platform in detail, we perform quantum state tomography on the joint ion-ion state observed after each of the four heralding detector coincidence patterns. For this, we optionally apply a π/2 pulse, Rxy(π/2, ϕ) for ϕ ∈ {0, π/2, π, 3π/2}, after a successful herald and apply fluorescence detection, such that ion bright/dark results correspond to a projective measurement onto the +1/ − 1 eigenstates of the Pauli operators {±X, ±Y, Z}. This over-complete set of measure-
ment bases is chosen to mitigate any systematic bias in the xy plane due to imperfect analysis pulses. The joint outcomes for all combinations are recorded for a number of repetitions.
A dataset collected one day prior to the DIQKD link characterisation and key generation experiments is given in table S2. These outcome counts represent the complete set of input data for a diluted fixed-point iteration procedure [3]

OA OB +A+B +A−B −A+B −A−B X X 229 332 375 284 X Y 27 526 650 15 X -X 317 184 310 374 X -Y 532 23 24 580 X Z 541 558 650 609 Y X 548 16 20 579 Y Y 284 301 389 241 Y -X 25 509 618 27 Y -Y 286 253 260 379 Y Z 551 626 715 594 -X X 356 296 237 347 -X Y 618 19 27 500 -X -X 271 362 321 211 -X -Y 20 633 563 29 -X Z 684 671 539 514 -Y X 23 621 527 17 -Y Y 400 231 286 292 -Y -X 617 33 23 516 -Y -Y 251 378 308 277 -Y Z 717 594 544 561 Z X 525 693 620 527 Z Y 655 562 634 502 Z -X 661 579 635 589 Z -Y 543 674 -
521 575 Z Z 82 2415 2378 17
(a) Number of observations per Pauli eigenstate for detector pattern 0011, for a total of 43182 clicks.

S6
OA OB +A+B +A−B −A+B −A−B X X 337 201 296 369 X Y 571 40 22 596 X -X 195 373 343 285 X -Y 35 548 633 23 X Z 564 575 664 638 Y X 31 562 589 32 Y Y 341 257 208 418 Y -X 556 29 50 575 Y -Y 230 356 396 254 Y Z 464 662 681 540 -X X 242 356 365 192 -X Y 23 608 525 29 -X -X 365 248 204 387 -X -Y 618 19 23 532 -X Z 622 622 556 555 -Y X 618 30 22 561 -Y Y 246 410 330 229 -Y -X 41 579 541 19 -Y -Y 370 236 224 335 -Y Z 762 537 560 580 Z X 708 515 583 666 Z Y 526 704 588 647 Z -X 481 736 691 529 Z -Y 706 545 -
597 612 Z Z 60 2284 2459 27
(b) Number of observations per Pauli eigenstate for detector pattern 0101, for a total of 43524 clicks.

OA OB +A+B +A−B −A+B −A−B X X 357 242 310 368 X Y 588 21 14 658 X -X 247 338 346 357 X -Y 19 571 658 29 X Z 596 608 683 659 Y X 19 603 680 26 Y Y 284 267 277 375 Y -X 604 18 28 643 Y -Y 289 284 408 273 Y Z 506 716 695 658 -X X 345 359 329 251 -X Y 20 674 565 27 -X -X 352 340 292 325 -X -Y 637 17 26 573 -X Z 694 668 562 562 -Y X 685 20 28 560 -Y Y 237 383 335 300 -Y -X 28 623 604 15 -Y -Y 372 298 287 343 -Y Z 723 629 534 735 Z X 797 573 556 659 Z Y 608 727 629 642 Z -X 548 785 697 524 Z -Y 667 623 -
657 569 Z Z 50 2489 2513 24
(c) Number of observations per Pauli eigenstate for detector pattern 1010, for a total of 46016 clicks.

OA OB +A+B +A−B −A+B −A−B X X 229 358 408 305 X Y 36 553 667 16 X -X 363 229 322 417 X -Y 558 35 34 698 X Z 581 631 774 669 Y X 589 28 32 646 Y Y 286 343 470 259 Y -X 20 593 679 26 Y -Y 346 284 255 447 Y Z 560 681 731 620 -X X 409 327 235 354 -X Y 759 26 29 551 -X -X 283 433 370 236 -X -Y 23 662 594 31 -X Z 773 755 580 643 -Y X 39 645 582 22 -Y Y 411 271 288 351 -Y -X 691 33 28 609 -Y -Y 277 461 301 282 -Y Z 707 674 556 587 Z X 640 713 620 605 Z Y 735 568 668 605 Z -X 679 653 609 604 Z -Y 550 828 -
671 662 Z Z 69 2603 2517 13
(d) Number of observations per Pauli eigenstate for detector pattern 1100, for a total of 47278 clicks.

Table S2: Number of observations of each eigenstate for tensor product combinations OA ⊗ OB of Pauli operators in the Alice-Bob state tomography experiment, for each of the four detector click patterns.

S7

to obtain the ML estimate; no additional corrections (such as for readout errors) are applied. The resulting density matrices are shown in Fig. S3. The average state fidelity to the closest maximally entangled state was 96.0(2) % with a heralding probability of 1.6 × 10−4, equivalent to an effective rate of 100 s−1 including periodic recooling. (The average rate quoted in main text Figure 3 is significantly lower than this as it also includes the time necessary for frequent reloading of the ion tr-
ap in Alice due to a vacuum leak at the time the experiment was performed.)
The fidelity estimates are roughly consistent with the results from ion-photon tomography, but a detailed model accounting for the error sources has yet to be established. We currently suspect an uncharacterised source of polarisation mixing, for instance in the high-NA free-space optics, to be the primary contribution. Errors from local ion qubit state manipulation are not significant at the current fidelity level; randomised benchmarking indicates gate fidelities of ∼ 5 × 10−4 per Clifford group-
 element on either of the 674 nm transitions involved, and the readout state discrimination error is < 10−3.
To stabilise the magnetic fields at the ion location, we use high-precision feedback controllers acting onto the quantisation coil currents (including active feed-forward to compensate for ambient fields generated by 50 Hz power mains), resulting in magnetic field noise amplitudes on the nT level. Typical coherence times observed on the 674 nm qubit transitions without any dynamical decoupling techniques are quoted in table S3, showing that ion coherence times will not significantly limit the expe-
riment performance even for longer speed-of-light delays between the nodes (not before 422 nm fibre loss becomes significant).

Lower qubit state
|S1/2, mJ = −1/2⟩ |S1/2, mJ = +1/2⟩

Transition magnetic field sensitivity
−11.2 MHz/mT −39.2 MHz/mT

Coherence time
Alice Bob
4.2 ms 7.5 ms 1.0 ms 1.7 ms

Table S3: Measured 1/e coherence times on optical transitions with |D5/2, mJ = −3/2⟩ as the upper qubit state, extracted from a Gaussian fit to the contrast decay in a Ramsey experiment with varying wait duration, without any
dynamical decoupling pulses. The |S1/2, mJ = −1/2⟩ ↔ |D5/2, mJ = −3/2⟩ qubit is used to store the remote entanglement between heralding and measurement basis choice.

C. DIQKD primitives
To obtain a high CHSH winning probability, a set of measurement angles widely known to be optimal for pure Bell states is chosen: Alice measures in the computational basis for X = 0 and applies Rxy(π/2, 0) prior to measuring for X = 1. Bob applies Rxy(±π/4, ϕ) for Y = 0 and Y = 1, respectively, with the phase ϕ calibrated independently for each heralding click pattern to absorb the differing phases between the |01⟩ and |10⟩ components. For the key generation rounds, where Y = 2, both nodes measure-
 in the computational basis. Alice inverts her classical outcome throughout to match the usual theoretical convention where the Bell state is taken to be maximally correlated along the Z axis.
To characterise the quality of the resulting correlations, we perform 1 920 000 DIQKD data acquisition rounds, but immediately recombine the inputs X, Y and outputs A, B for analysis. The resulting empirical probabilities P (AiBi|XiYi) are given in table S4. Figure S4 shows the outcomes of each individual round.

Yi Xi
0
1

0
0.415(1) 0.0688(5) 0.0961(6) 0.420(1) 0.3928(10) 0.0916(6) 0.0851(6) 0.431(1)

1
0.439(1) 0.0805(6) 0.0735(5) 0.4068(10) 0.0820(6) 0.437(1) 0.3970(10) 0.0841(6)

2
0.5017(5) 0.00339(6) 0.0110(1) 0.4839(5)
—

Table S4: Empirical probabilities to observe classical outcome (Ai, Bi) for measurements settings (Xi, Yi). Matrix rows represent Alice’s outcomes, columns that of Bob. The probabilities are estimated from the 1 920 000 total
characterisation rounds also shown in main text Figure 3 and Fig. S4, with the multinomial standard errors given in
parentheses. Alice’s classical outcomes were inverted (such that 0 corresponds to finding the ion in the S1/2 manifold after shelving), giving maximum correlations for the key generation settings X = 0, Y = 2, and maximising the probability that Ai ⊕ Bi = Xi · Yi in Bell test rounds.

S8
Key generation round, mismatch CHSH game loss
Fig. S4: Per-round outcomes for the link characterisation run summarised in main text Figure 3. Each square shows the round type (γ ≈ 0.5) and outcome for one of 1 920 000 rounds in the dataset, arranged row by row from left to
right and top to bottom as indicated by the arrow.

S9
Numerical optimisation of the measurement angles based on maximum-likelihood estimates for the joint ion-ion state, such as the data in Fig. S3, predicts a statistically significant improvement in quantum bit error rate for a slightly tilted choice of measurement axes (and similarly for the CHSH score). Thus far, we were neither able to observe these improvements in practice, nor to conclusively trace the prediction back to any tomography bias.
The required random strings for the setting choices, X and Y, (as well as the initial shared secret key K0) directly originate from a commercial random number generator (model: ID Quantique Quantis QRNG 4M USB). A cursory inspection of 232 − 1 bytes (∼ 3 × 1010 bits) using two widely used suites of randomness tests (dieharder version 3.31.1 [4], and the “Rabbit” and “Alphabit” batteries from TestU01 version 1.2.3 [5]) revealed no obvious defects in the quality of the outputs. We choose a power-of--
two fraction for the test round probability (γ = 13/28) and implement the round type choice in a straightforward fashion by consuming eight random source bits to avoid any unintended bias between experiment and security analysis.
D. Shuttling-based link isolation
As discussed in the main text and Methods, private data on the nodes is assumed to be isolated from any adversary in DIQKD, which is intrinsically in tension with the requirement for the qubits to be well-coupled to the optical fibre link during the heralded entanglement generation step for any matter-based remote entanglement experiment. For the isolation assumption to be valid, the link thus needs to be disconnected every round while the node systems could leak information about the private inpu-
ts or outputs. In a real deployment, this isolation could be established to an effectively arbitrary degree through a variety of technical means, e.g. through free-space shutters, fast microelectromechanical fibre switches, shuttling of the ions from the imaging system focus by a macroscopic distance, or transfer of the entanglement to another ion species in combination with spectral filtering.
In this demonstration, we isolate the ions by displacing them relative to the focus of the high-NA objective coupling the lens to the fibre through modulation of the trapping potential. While the axial potential minimum can be moved in our traps by ∼ 1 mm through modulation of many electrodes, here, we only modify the potentials of the four second-nearest-neighbour electrodes (Q15, Q16, Q23 and Q24) due to technical limitations in the DAC system. In the disconnected configuration, the ion is moved-
 3 µm from the centre. We keep the nearest-neighbour electrodes fixed to maintain the motional mode structure of the trap; resolved-sideband measurements indicate no shuttle-induced heating within the measurement uncertainty ∆n¯ ≈ 0.1.
The precise timing sequence is shown in Fig. S2: After the heralding logic signals the successful creation of remote entanglement, both systems first map the Zeeman qubit into the less magnetic field-sensitive optical qubit using a |S1/2, mJ = +1/2⟩ → |D5/2, mJ = −3/2⟩ π pulse, independent of the later measurement basis. Then, the DAC voltages are switched and a delay of 30 µs (∼ time constant of electrode low-pass filter) ensures the link is fully disconnected before Bob sends the round type sign-
al (Ti) to Alice and continues with local analysis and readout. Alice waits to receive Ti from Bob before proceeding with her local operations, incurring an additional 25 µs delay due to processing latencies. Due to the non-demolition nature of the ion qubit measurements, the state also needs to be scrambled before reconnecting the link. For this, the 1033 nm deshelving laser is applied together with the cooling lasers for 100 µs before the ion is shuttled back into the focus of the high-NA object-
ive. The typical dynamics of these processes are shown in Fig. S5.
We stress that isolation is an assumption in DIQKD that cannot be verified using device-independent techniques, and should thus be unambiguously established through independent technical means. This is the reason for the active measures described above that we took to limit possible information leakage. Although essential for cryptography, the isolation assumption can be partially relaxed: if the amount of information possibly leaked to the adversary can be upper bounded, the key can remain secure-
 at the expense of shortening its length accordingly. In our case, some amount of information may still possibly leak despite the measures taken, but not to the point of compromising the extraction of a secret key. To see this, we monitor the detectors at the central heralding station during qubit readout in the DIQKD link characterisation run; the count totals listed in table S5. From this, we estimate the probability of a photon leaking from Alice during a bright measurement (classical outcome 1-
) to 6 × 10−4, that from Bob to 4.4 × 10−3. (Here, we have factored in the ∼ 25 % coupling loss and ∼ 70 % quantum efficiency of the single-photon detectors used, as well as their dark count rate, which accounts for most of the background.) Combined with the marginal probability 1/2 for a bright measurement on one side, the probability of a photon leaking from either system during a measurement is 2.5 × 10−3. The information leaked by this channel is thus upper bounded by the binary entropy h(2.5 -
× 10−3) = 0.025, which is significantly lower than the key rate of 0.064 obtained in the DIQKD demonstration run. We also emphasize that this bound could be made arbitrarily small in a real deployment by the various means mentioned in the beginning of this section.

S10

Link isolation

100 10−1 10−2 10−3 10−4 10−5 10−6 0

20 30 40 60 80 100 Time after DAC step / µs

Bright fraction

1
3.88(2) µs 0.5

0

0

20 40 60 80 100

1033 nm deshelving pulse duration / µs

Link isolation

100 10−1 10−2 10−3 10−4 10−5 10−6 0

20 40 60 80 100 Time after DAC step / µs

Bright fraction

1
6.70(7) µs 0.5

0

0

20 40 60 80 100

1033 nm deshelving pulse duration / µs

Fig. S5: Link isolation and state scrambling dynamics; top Alice, bottom Bob. Left: Suppression of photon collection
via the remote fibre link while shuttling the ion away from the focus of the high-NA objective. The dashed line at 30 µs (55 µs) marks the start of the analysis pulse and subsequent readout. Circles mark the mode of the
background-subtracted posterior distribution of the signal and shaded areas span the 95 % confidence interval. Right:
Population in the S1/2 ground level after deshelving population initially prepared in the |D5/2, mJ = −3/2⟩ state vs. duration. An exponential fit and the resulting time constant is shown. The link is reconnected by shuttling the ion
back after deshelving for 100 µs.

Ion state
Alice Bob
dark dark dark bright bright dark bright bright

k=0 k=1 k=2 k=3 k>3
141506 3864 80 2 0 656728 19770 378 6 0 670039 18685 322 7 0 141707 4347 76 3 0

k¯
0.0277 0.0304 0.0281 0.0308

Table S5: Leakage after shuttling-based link isolation during the DIQKD link characterisation run. The columns give the numbers of rounds during which k photons were registered at the central heralding station detectors and the
respective means k¯, conditioned on the classical outcomes measured on both sides. The background counts measured for the dark classical outcome 00 are, to within the statistical uncertainty, entirely due to detector dark counts.

S3. DEFINITION AND ASSUMPTIONS OF DIQKD
A. General setting of QKD
QKD is a cryptographic protocol which allows (upon success) two separated users sharing a classical and a quantum channel to expand a secret key, i.e. a bit string unknown to an adversary. These legitimate parties are commonly referred to as Alice and Bob. In addition to knowing the protocol, the adversary may have complete knowledge of the functioning of Alice and Bob’s devices, it may have unlimited computational power and it may fully control the channels outside of Alice and Bob’s labs. The in-
formation-theoretic security of the key, i.e. the mathematical claim that the adversary gains virtually no information about the key produced by the QKD protocol, relies on the following physical assumptions:

S11
(i) Quantum theory: The operations performed by the users and by the adversary admit a description in terms of quantum states, operations and measurements. In particular, the statistics observed by the legitimate parties admit a quantum description.
(ii) Isolation: The parties can prevent information leaking to the adversary. The users’ systems can be shielded so that classical and quantum information only leave Alice’s (Bob’s) lab under her (his) control.
(iii) Input randomness: Alice and Bob’s input choices are truly random, i.e. they are not correlated with their other devices nor the adversary.
(iv) Trusted information processing: The computers processing Alice and Bob’s classical information perform the expected computations.
(v) Trusted quantum operations: Alice and Bob’s quantum devices perform the expected quantum operations. In particular, quantum devices are accurately characterized and they maintain perfect calibration: sources of quantum states produce the expected quantum states and quantum measurements are performed according to their specifications.
QKD is often presented with the additional assumption that the classical channel between Alice and Bob is authenticated, i.e. so that the adversary cannot alter the content of messages transiting on it [6]. QKD is then often considered a key generation protocol rather than a key expansion one. However, fulfilling this assumption still requires the consumption of an initial secret of some sort [7]. In order to demonstrate clearly that our experiment produces more secrecy than what is required to au-
thenticate its classical communication (it would be trivial to produce a key shorter than the initial secret seed), we include an explicit authentication step into our protocol. Authentication is then not an assumption anymore.
As a cryptographic protocol, QKD is subject to the specific assumption of isolation (ii), thereby differentiating QKD from other quantum tasks which do not take place in an adversarial setting. It is indeed a fundamental assumption of cryptography that information can be kept from exiting the user’s labs: without this assumption, no cryptography is possible. This assumption allows the outcomes of each round, as well as the settings and initial shared key K0, to be safely stored locally. Since no l-
aw of physics forbids information from flowing in space a priori, this assumption deserves special attention in any practical context and should be clearly stated [8].
Another critical assumption of conventional QKD is that of trusted quantum operations (v). In the BB84 protocol [9] for instance, this assumption requires Alice’s device to prepare at each round one of the following four possible qubit states and to send it to Bob: | ± z⟩ or | ± x⟩. It then requires Bob to perform a measurement that is a projection onto either | ± z⟩ or | ± x⟩. Unfortunately, numerous attacks have shown that it is difficult to gain confidence that this assumption holds in practice-
. For instance, attacks on the protocol may be successful because the calibration of the quantum devices is imperfect [10], or because the devices can be brought to operate outside their intended regime, thereby drastically changing their response [11–13]. The aim of device-independent QKD is to improve the security of QKD by lifting this last, often problematic, assumption.
B. DIQKD assumptions
Device-independent QKD takes place in the same context as QKD. It is also a cryptographic protocol, with the same purpose as QKD, but with an improved security obtained by relying only on the first four assumptions above [14]. In other words, security of DIQKD is guaranteed when the protocol succeeds even if assumption (v) is not satisfied. DIQKD can thus be understood as a QKD protocol with partially characterized and partially trusted devices. Quantum devices producing prescribed states and perf-
orming prescribed measurements shall be used to ensure that the protocol succeeds, but the security of the key produced in the case of success is provable without trusting that quantum operations were performed as expected (in this sense, they could even have been chosen by the adversary). Below, we describe more precisely the part of the devices which does not need to be characterized. Clearly, relying on fewer assumptions means that DIQKD is both more secure than conventional QKD and more demand-
ing to realize experimentally.
It is worth noting that DIQKD only relaxes assumption (v) above. In particular, the scope of DIQKD is not to relax the isolation assumption (ii). This assumption, although often tricky to guarantee in practice, is treated identically in DIQKD as it is in standard QKD. In particular, this means that DIQKD remains susceptible to attacks breaking this assumption, such as if Alice or Bob’s labs happen to contain an emitter broadcasting secret information to the adversary through a means that is not pr-
operly shielded. Ultimately, it is thus the responsibility of the users to gain confidence about the proper isolation of their systems by independent means than those provided by the protocol. We comment below on possible ways to improve confidence on the proper isolation of devices in the context of DIQKD.

S12

C. From assumptions to security

Assumptions (ii) and (iv) set the stage for a security claim: parties are well-identified and we can trust that the computational steps of the protocol happen as expected. Security of the key produced by the DIQKD protocol then reduces to the existence of a security proof. Our security proof, given in Sec. S11, is a mathematical consequence of two conditions. As we show now, these two conditions themselves are direct implications of the DIQKD assumptions.
The first condition is the Markov chain condition needed in the application of the entropy accumulation theorem (see Eq. (97) and below). This condition is directly granted by assumption (iii).
The second condition plays a central role in device-independent security proofs. We derive it now from assumptions (i)-(iii). Assumptions (i) together with the isolation assumption (ii) imply that the Hilbert space describing the two devices factorizes as a tensor product H = HA ⊗ HB (the same condition is also a direct consequence of assumption (i) together with the simple fact that Alice and Bob are separated parties). The fact that the measurement settings are uncorrelated with the setup (assum-
ption (iii)) implies that the quantum state measured in the ith round of the protocol does not depend on the inputs Xi and Yi: it can be written simply ρi ∈ H. The same condition (iii) together with the isolation assumption (ii) directly imply that Alice’s (Bob’s) measurement in the ith round of the protocol does not depend on Yi (Xi): it can be written as a set of POVM elements MAi|Xi (MBi|Yi ). Therefore, the probability of observing the outcomes (Ai, Bi) can be written, through (i) again, follo-
wing Born’s rule as

P (Ai, Bi|Xi, Yi) = Tr ρi MAi|Xi ⊗ MBi|Yi .

(1)

This condition is used in the security proof when deriving the entropy bound η(ω) as a function of the winning probability ω of the CHSH game [15].
Note that ρi in Eq. (1) is the state measured at round i and in practice this state could be different from the one distributed by the users’ devices (e.g. if the adversary tampers with it). It is precisely one of the advantages offered by the device-independent approach that the security proof holds as long as Eq. (1) is correct for some state ρi and some measurements MAi|Xi , MBi|Yi , i.e. even if these are not the intended state and measurements.
Condition (1) identifies precisely the parts of Alice and Bob’s devices which need not be trusted (in contrast with the parts requiring independent assessement to guarantee the validity of the remaining assumptions, such as the proper isolation of the systems). Since both the state and measurements are untrusted, one often refers to this part of the parties’ devices as “black boxes” receiving classical inputs Xi and Yi, and producing outcomes Ai and Bi [16]. These black boxes are described by Eq. -
(1), i.e. they are quantum, but otherwise fully untrusted. The fact that the security is independent of the description of this part of the users’ devices is what the term device-independent refers to [17].

D. The DIQKD assumptions in the experiment
We see no reason to doubt the validity of assumptions (i) and (iv) in the present experiment and therefore take them for granted. Similarly, we have no reason to believe that the QRNG we use is correlated to the rest of the setup. We checked that the numbers produced by this generator pass common randomness test suites (see Sec. S2 C). Therefore, we take assumption (iii) for granted. Note that if needed, established measurement dependence methods could in principle allow to relax assumption (iii) -
to deal with deviations from the ideal case [18]. As mentioned before, the isolation assumption (ii) requires more appreciation.
In our case, Alice and Bob’s “labs” are physically separated, well identified in space, and connected to a central station by two 1.75 m-long optical fibres. Therefore, it is clear that their Hilbert space factorizes into a tensor product. Each “lab” includes a trapped ion, individual laser modes, optics, electronics (FPGA) and computer (see Fig. S1). The PCs allow for trusted storage and processing of classical information locally, including the initial key K0, the settings X and Y and the outcom-
es A, B. The lasers are used to cool the ions, excite and manipulate them, and detect their internal state.
As the user’s lasers are obtained from common laser sources, it is worth emphasizing that each user only has access to its own laser mode which contain just half of the initial laser light. These beams can thus be seen as two independent laser beams, possibly only correlated in frequency and intensity (a laser beam impinging on a beam splitter gives rise to two independent laser beams). Therefore, laser light essentially plays here the role of a power supply, similarly to the electric power grid t-
o which all equipment is connected. Since no fluctuations or actual signal on these power supplies may depend on the choice of settings Xi, Yi of a given round – by assumption (iii) – their effect on the actual measured quantum state and measurement operators can always be cast into the form of Eq. (1) by including in ρi the state of the lasers. Shared lasers and power supplies are thus entirely compatible with the device-independent framework of DIQKD. It is in fact a genuinely device-independent-
 guarantee that any fluctuations in shared equipment do not compromise the security of the resulting key.

S13
In the current experiment, each lab has a “hatch” to the outside that allows photons produced upon excitation of the ions to exit the labs and be combined at a central station, resulting ideally in a shared entangled ion-ion state in a heralded way. This hatch is then closed by moving the position of the ions while preserving entanglement. Specifically, the ions are displaced relative to the focus of the high-NA objective coupling the lens to the fibre through modulation of the trapping potential.-
 The qubit state left after readout is also scrambled by applying deshelving and cooling lasers before reconnecting the link. Moving ions while preserving entanglement and scrambling the ion state are efficient procedures and well developed features of the trapped ion platform, which we use here as a novel method of isolation.
E. Possible improvements
Assumption (ii) could be further enforced by additional measures. The use of independent laser sources for example could facilitate the shielding of the devices as it would become sufficient to guarantee that no unwanted optical signal exits the devices through the fibre link. Currently, we did not take any special measure to avoid information from leaking through the laser modes. The labs have been designed to favour the coupling of the ions with the fibres rather than with the laser modes, but u-
ltimately other couplings should not be neglected. Alternatively, the incoming laser could be passed through an optical isolator with appropriately characterised extinction, or the qubits could be manipulated via RF instead of laser light.
Similarly, one could arbitrarily reduce the amount of information leaked through the fibre link by shuttling the ion a further distance from the focus of the fibre interface, or by adding a separate, macroscopic mechanism to disconnect the optical fibre, e.g. a fast shutter or micro-electromechanical fibre switch. As discussed in Sec. S2 D, the extinction ratio of the fibre “hatches” is currently limited to ∼ 10−4. Importantly, the correct operation of such additional isolation devices applied to -
the fibre could be verified completely independently of the ion trap hardware.
In the context of improving isolation, space-like separation between Alice’s and Bob’s measurements could also have a positive impact. For instance, it could rule out certain attacks without further isolation considerations. The impact of space-like separation for DIQKD is however fundamentally limited since space-like separation only forbids information from reaching certain points in space during very short intervals – at most for about 40 ms for any two locations on the earth’s surface. Compare-
d to other possible improvements mentioned here, space-like separation is also considerably more difficult to achieve. Additionally, space-like separation does not help to solve concrete isolation issues such as the isolation of the ion-fibre link: a leakage of photons through a fibre is entirely compatible with the constraints imposed by the speed of light. In fact, if all isolation issues are properly taken care of, then space-like separation becomes unnecessary [14, 15, 17, 19]. In other words,-
 all attacks that can be ruled out by invoking space-like separation are also ruled out by isolation. It is also worth noting that the notion of space-like separation that should be used here fundamentally differs from that used in the context of loophole-free Bell tests: in a QKD experiment all settings can be stored in advance locally because classical information can be held locally (otherwise there is no point in doing cryptography in the first place). In contrast, storing of measurement setti-
ngs in advance is generally not accepted in the context of loophole-free Bell tests, where space-like separation tends to be defined between the measurement event of one party and the settings generation event of the other one, imposing that settings should be freshly generated on the fly [20–23]. DIQKD experiments are thus clearly distinct from loophole-free Bell tests (see also Methods).
We envision that a significantly stronger confidence in the devices’ isolation, i.e. in assumption (ii), will be reached when quantum memories are able to store reliably ∼ 106 qubits [24]. This will allow for all entangled systems to be distributed before the DIQKD protocol begins. Contrary to all existing setups which require opening Alice and Bob’s devices on a regular basis to distribute new entangled resources, no quantum “hatch” will be required, thus allowing for strong shielding to be appli-
ed on both parties without interruption throughout the whole protocol and improving the confidence in the absence of information leakage: the protocol will only require classical communication exchange. Ultimately, such a demonstration will however still rely on the same four assumptions defined above.
S4. DIQKD PROTOCOL
Here we describe our DIQKD protocol in detail. It follows a similar general structure as most DIQKD protocols proposed thus far [15, 25, 26]. The protocol involves two distant parties, Alice and Bob, who initially share a secret key K0. The aim of the protocol is to create a shared secret key K1 that is longer than K0 by performing n ∈ N successive measurements on distributed quantum systems followed by post-processing steps, see Fig. S6. The protocol is successful when both parties are confident -
that their copy of K1 is sound.

⏟

Key Test Xi ∈ {0,1}

Alice

S14

⏟

Bob

Test Key

Yi ∈ {0,1,2}

Ai ∈ {0,1} Protocol step 1 2

3 4 5 6 7 8 9 10
11 12

X <latexit sha1_base64="5a5wuGE5izuwu02dWVVduviihBo=">AAACz3icjVHLTsJAFD3UF+ILdemmEUxckdaNLoluXEIijwSImQ4DNPSVdqohBOPWH3Crf2X8A/0L74wlUYnRadqeOfeeM3PvdSLPTaRlveaMpeWV1bX8emFjc2t7p7i710zCNOaiwUMvjNsOS4TnBqIhXemJdhQL5jueaDnjCxVv3Yg4ccPgSk4i0fPZMHAHLmeSqG656zM5cgbT9qx8XSxZFUsvcxHYGSghW7Ww+IIu+gjBkcKHQABJ2ANDQk8HNixExPUwJS4m5Oq4wAwF0qaUJSiDETum75B2nYwNaK88E63mdIpHb0xKE0ekCSkvJqxOM3U81c6K/c17qj3V3Sb0dzIvn1iJEbF/6eaZ/9WpWiQGONM1uFRTpBlVHc9cUt0VdXPzS1WSHCLiFO5TPCbMtXLeZ1NrEl276i3T8TedqVi151luind1Sxqw/XOc-
i6B5UrGtil0/KVXPs1HncYBDHNM8T1HFJWpokHeERzzh2agbt8adcf+ZauQyzT6+LePhA3fMk9c=</latexit>
M <latexit sha1_base64="WuqEgrgwyil2MM8UpxD8KVJ/ILU=">AAACz3icjVHLSsNAFD2Nr1pfVZduglVwVZJudFl040ZowT6gLZKM03ZoXiQTpZSKW3/Arf6V+Af6F94ZU1CL6IQkZ86958zce93IE4m0rNecsbC4tLySXy2srW9sbhW3d5pJmMaMN1johXHbdRLuiYA3pJAeb0cxd3zX4y13dKbirRseJyIMLuU44j3fGQSiL5gjieoedH1HDt3+5GJ6cFUsWWVLL3Me2BkoIVu1sPiCLq4RgiGFD44AkrAHBwk9HdiwEBHXw4S4mJDQcY4pCqRNKYtThkPsiL4D2nUyNqC98ky0mtEpHr0xKU0ckiakvJiwOs3U8VQ7K/Y374n2VHcb09/NvHxiJYbE/qWbZf5Xp2qR6ONE1yCopkgzqjqWuaS6K+rm5peqJDlExCl8TfGYMNPKWZ9NrUl07aq3jo6/6UzFqj3LclO8q1vSgO2f-
45wHzUrZtsp2vVKqnmajzmMP+ziieR6jinPU0CDvCI94wrNRN26NO+P+M9XIZZpdfFvGwwddlpPM</latexit>
GEC <latexit sha1_base64="ywVfUQd1O8nzomAZmxrqi9nY+i8=">AAAC3XicjVHLSsNAFD2Nr1pfVTeCm2AruCpJN7osFtFlBfuAtpQknbbBvEgmYgl1507c+gNu9XfEP9C/8M6YglpEJyQ5c+49Z+beawaOHXFNe80oc/MLi0vZ5dzK6tr6Rn5zqxH5cWixuuU7ftgyjYg5tsfq3OYOawUhM1zTYU3zsirizSsWRrbvXfBxwLquMfTsgW0ZnKhefqfYcQ0+MgfJ6aSXdDi75slJdTIp9vIFraTJpc4CPQUFpKvm51/QQR8+LMRwweCBE3ZgIKKnDR0aAuK6SIgLCdkyzjBBjrQxZTHKMIi9pO+Qdu2U9WgvPCOptugUh96QlCr2SeNTXkhYnKbKeCydBfubdyI9xd3G9DdTL5dYjhGxf+mmmf/ViVo4BjiSNdhUUyAZUZ2VusSyK+Lm6peqODkExAncp3hI2JLKaZ9VqYlk7aK3ho-
y/yUzBir2V5sZ4F7ekAes/xzkLGuWSrpX083KhcpyOOotd7OGA5nmICs5QQ528b/CIJzwrPeVWuVPuP1OVTKrZxrelPHwAybCZZw==</latexit>

C, <latexit sha1_base64="pTyXNbUqclgbCwe4Oy7GQzH6yoQ=">AAAC2HicjVHLSsNAFD2Nr/qOdukm2AoupCTd6LLahS4r2Ae2pSTptA3Ni2QilFJwJ279Abf6ReIf6F94Z0xBLaITkpw5954zc++1QteJua6/ZpSFxaXllezq2vrG5ta2urNbj4MkslnNDtwgalpmzFzHZzXucJc1w4iZnuWyhjWqiHjjhkWxE/hXfByyjmcOfKfv2CYnqqvmCpUjre2ZfGj1J+fT7uR0Wuiqeb2oy6XNAyMFeaSrGqgvaKOHADYSeGDwwQm7MBHT04IBHSFxHUyIiwg5Ms4wxRppE8pilGESO6LvgHatlPVpLzxjqbbpFJfeiJQaDkgTUF5EWJymyXginQX7m/dEeoq7jelvpV4esRxDYv/SzTL/qxO1cPRxImtwqKZQMqI6O3VJZFfEzbUvVXFyCIkTuEfxiLAtlbM+a1ITy9pFb00Zf5OZghV-
7O81N8C5uSQM2fo5zHtRLRUMvGpelfPksHXUWe9jHIc3zGGVcoIoaeY/xiCc8K9fKrXKn3H+mKplUk8O3pTx8ACZblmQ=</latexit>

GA

Communication Click!

Ti <latexit sha1_base64="F1b5+x21jbyWwuqKMDKpt4a7wJw=">AAACyHicjVHLTsJAFD3UF+ILdemmEUxckZaNLolujCtMKJAgIW0ZcEJfaacaQtz4A271y4x/oH/hnXFIVGJ0mrZnzr3nzNx7vSTgmbCs14KxtLyyulZcL21sbm3vlHf32lmcpz5z/DiI067nZizgEXMEFwHrJilzQy9gHW9yLuOdW5ZmPI5aYpqwfuiOIz7iviuIcqqtAa8OyhWrZqllLgJbgwr0asblF1xjiBg+coRgiCAIB3CR0dODDQsJcX3MiEsJcRVnuEeJtDllMcpwiZ3Qd0y7nmYj2kvPTKl9OiWgNyWliSPSxJSXEpanmSqeK2fJ/uY9U57yblP6e9orJFbghti/dPPM/+pkLQIjnKoaONWUKEZW52uXXHVF3tz8UpUgh4Q4iYcUTwn7Sjnvs6k0mapd9tZV8TeVKVm593Vujnd5Sxqw/XOci6Bdr9l-
Wzb6qVxpnetRFHOAQxzTPEzRwgSYc8uZ4xBOejUsjMe6M6WeqUdCafXxbxsMHNOiQjw==</latexit>
GB <latexit sha1_base64="yIB++HuJ97GfoIOy0E+tbzE+3OY=">AAAC0XicjVHLTsJAFD3UF+ILdemmEUxckZaNLgkudIlRHgkgacsADX1lOjUhhMS49Qfc6k8Z/0D/wjtjSVRidJq2Z86958zce+3Ic2NhGK8ZbWl5ZXUtu57b2Nza3snv7jXiMOEOqzuhF/KWbcXMcwNWF67wWCvizPJtjzXt8ZmMN28Zj90wuBaTiHV9axi4A9exBFE3xY5viZE9mJ7PetViL18wSoZa+iIwU1BAumph/gUd9BHCQQIfDAEEYQ8WYnraMGEgIq6LKXGckKviDDPkSJtQFqMMi9gxfYe0a6dsQHvpGSu1Q6d49HJS6jgiTUh5nLA8TVfxRDlL9jfvqfKUd5vQ3069fGIFRsT+pZtn/lcnaxEY4FTV4FJNkWJkdU7qkqiuyJvrX6oS5BARJ3Gf4pywo5TzPutKE6vaZW8tFX9TmZKVeyfNTfAub0k-
DNn+OcxE0yiXTKJmX5UKlmo46iwMc4pjmeYIKLlBDnbw5HvGEZ+1Km2h32v1nqpZJNfv4trSHDyLYlHs=</latexit>

Step name Bi ∈ {0,1}

State preparation

Sampling Measurement

Repeat n times

Basis revelation Error correction Parameter estimation Validation of error correction Validation of Bell violation Privacy ampliﬁcation Authentiﬁcation

F, <latexit sha1_base64="w+nEgWLrlfkUpvb4PDsG/8dc5RQ=">AAAC1XicjVHLSsNAFD2Nr1pfUZdugq3gQkrSjS6LQnVZwT6gSknSaRvMi8mkUEp34tYfcKu/JP6B/oV3xhTUIjohyZlz7zkz914n9r1EmOZrTltYXFpeya8W1tY3Nrf07Z1mEqXcZQ038iPeduyE+V7IGsITPmvHnNmB47OWc3sm460R44kXhVdiHLObwB6EXt9zbUFUV9dLtaPrwBZDpz85n3Zrpa5eNMumWsY8sDJQRLbqkf6Ca/QQwUWKAAwhBGEfNhJ6OrBgIibuBhPiOCFPxRmmKJA2pSxGGTaxt/Qd0K6TsSHtpWei1C6d4tPLSWnggDQR5XHC8jRDxVPlLNnfvCfKU95tTH8n8wqIFRgS+5dulvlfnaxFoI8TVYNHNcWKkdW5mUuquiJvbnypSpBDTJzEPYpzwq5SzvpsKE2iape9tVX8TWVKVu7dLDf-
Fu7wlDdj6Oc550KyULbNsXVaK1dNs1HnsYR+HNM9jVHGBOhrkPcIjnvCstbSpdqfdf6ZquUyzi29Le/gAH8CVNg==</latexit>

GF

Key activation

Key concatenation

Fig. S6: Schematic representation of the key distribution setup and protocol. Alice’s input Xi = 0 is chosen both for the key and test generation rounds while Bob’s input Yi = 2 is exclusively used for the key generation rounds. Classical communications happening during the DIQKD protocol are represented by arrows.

a. Parameters. The protocol depends on the following parameters: the testin√g probability γ ∈ (0, 1), the total

number of rounds n ∈ N, the threshold CHSH winning probability ωthr ∈

3 4

,

1+1/ 2

2

, and the syndrome length m.

These parameters are fixed before the protocol starts.

b. Preparation. At the beginning of the protocol, both parties share a secret key K0. This key contains the variables STrev, SVHASH, DEC, DA, DB and DF , see Fig. S7. Each party also holds a set of (non-shared) secret random variables [27]. Namely, Alice holds a string X = (X1, . . . , Xn) with Xi ∈ {0, 1} of measurement settings chosen uniformly, i.e. with distribution

P (Xi = 0) = P (Xi = 1) = 1/2.

(2)

Bob holds a string Y = (Y1, . . . , Yn) with Yi ∈ {0, 1, 2} that are sampled from the following distribution:

P (Yi = 0) = P (Yi = 1) = γ/2 , P (Yi = 2) = 1 − γ.

(3)

From this string, Bob also defines the test variables Ti = χ(Yi ̸= 2), χ being the indicator function.

c. Protocol steps. The quantum steps of the protocol are repeated n times; each round is indexed by i = 1, . . . , n.
Repeat n times:
1. [State preparation] The parties wait for the heralding logic signal announcing that their respective ions have been prepared in an entangled state.
2. [Sampling] Bob sends the value of Ti to Alice. If Ti = 0, Alice overrides Xi: she sets Xi = 0. 3. [Measurement] Alice and Bob measure their quantum systems in the bases defined by Xi and Yi respectively,
and store their results in the variable Ai and Bi respectively (Ai, Bi ∈ {0, 1}).
Once these steps are performed, the parties proceed with the following classical post-processing steps.

Trevisan seed
9

VHASH seed
7 + 10 + 11

One-time pads

7 10 10 11

: protocol step

S15

Fig. S7: Secret key expansion (not to scale) : A secret key K0 is used to create a longer secret key K1. The part of the initial key used for one-time pads during the protocol needs to be discarded. The rest of the initial key can be
reused. If the length of the key KA is larger than the part of K0 consumed for one-time pad, the new key is longer than the initial one.

4. [Basis revelation] Alice publicly announces her measurement settings X.
5. [Error correction] Alice computes a m-bit long syndrome M ∈ {0, 1}m for her string of outcomes A = (A1, . . . , An) and sends it to Bob. Bob reconstructs a guess A˜ of A from X, Y, B and M.
6. [Parameter estimation] Bob computes the score

Ui =

χ(A˜i ⊕ Bi = Xi · Yi) ⊥

if Ti = 1 if Ti = 0

(4)

for each round i = 1, . . . , n.
7 [Validation of error correction] Alice computes a short encrypted almost-universal hash GEC of A with seed SVHASH and one-time pad DEC and sends it to Bob. Bob computes the short hash G˜ EC of A˜ with seed SVHASH and one-time pad DEC and checks that it matches with Alice’s hash GEC. If G˜ EC ̸= GEC, the protocol aborts.
8 [Validation of Bell violation] Bob checks the condition

χ(Ui = 0) ≤ nγ (1 − ωthr) .

(5)

i

If the condition is violated, the protocol aborts.

9. [Privacy amplification] Using seed STrev, Alice applies a strong extractor to A to obtain KA. Bob uses the same seed and extractor to create KB from A˜ .

10. [Authentication] Using the seed SVHASH and one-time pad DB, and an unconditionally-secure message authentication code, Bob computes a tag GB for T. He sends the tag to Alice. Alice checks whether the tag matches the one she computes with the same part of K0 and the communication she received from Bob earlier. If it is the case, she defines C = 1, otherwise she sets C = 0. Alice sends C to Bob. Alice then
similarly computes a tag GA for (X, GEC, C), using the seed SVHASH and a one-time pad DA, and sends it to Bob. Bob checks that the tag matches the one he computes from the corresponding information he
received from Alice. If the tags don’t match, or if C = 0, Bob defines F = 0. Otherwise he sets F = 1.

11. [Key activation] Bob sends F to Alice together with a tag GF computed for F using the seed SVHASH and a one-time pad DF . Alice checks that the tag matches the one she computes from the information she received from Bob. If the tags don’t match or if F = 0, the protocol aborts.

12. [Key concatenation] Define K′0 as K0 with DEC, DA, DB and DF removed. Alice defines her new shared

sKec′BreatsktehyeKco′AncaasttehneatcioonncaotfeKna′0titoongeotfhKer′0

and with

KA, KB .

see

Fig.

S7.

Similarly,

Bob

defines

his

new

shared

secret

At the end of the protocol, the keys below. Alice sets K1 = K′A. If |K1| >

K′A and K′B are identical and |K0|, the protocol extended a

secret secret

with high probability, in the key between Alice and Bob.

sense

defined

S5. MODEL OF THE STATISTICS
To define the expected honest behaviour of the system, e.g. when tuning the protocol parameters to match our experimental setup, we condense the observed statistics from section S2 C into a simplified model with two parameters

S16

S and Q, respectively corresponding to the CHSH Bell violation and quantum bit error rate (QBER). The security of our demonstration does not depend on the validity of this model.
More precisely, we assume that the statistics in the test rounds satisfy

P (A, B|0, 0)

=

P (A, B|0, 1)

=

P (A, B|1, 0)

=

P (A, 1 −

B|1, 1)

=

1+

(−1)A⊕B S/4 4

(6)

and that the statistics in the key rounds are sampled according to

P (A, B|0, 2)

=

δA,B

−

(−1)A⊕B Q 2

(7)

We conservatively set S = 2.64 and Q = 0.018, since we expect the setup to hold these parameters for a time sufficient

for the experiment to run (cf. Figure 3 of the main text). Note that this model does not assume that the underlying

state is a Werner state – that would impose the relation

√

S = 2 2(1 − 2Q).

(8)

S6. ERROR CORRECTION

In a DIQKD protocol, the violation of a Bell inequality generally guarantees the secrecy of the outcomes that Alice

observes during the key rounds. These outcomes can then be considered as a raw key. But this key is not shared with

Bob unless Bob holds a copy of it. Unfortunately, Bob’s measurements generally do not create an exact copy of Alice’s

outcomes. In particular, Bob’s outcomes observed during the test rounds are not expected to be strongly correlated

with Alice’s. Some amount of communication is thus needed to allow Bob to reconstruct Alice’s outcomes in the key

and test rounds.

Here, we consider the simple case in which this reconstruction is realized by having Alice send a single message M

of length m to Bob. While a message of arbitrary length is always sufficient in this context (Alice could simply set

M = A), any information revealed in this way reduces the secrecy of Alice’s key: all information revealed between

the parties is public. Therefore, the length m of the communicated message should be as small as possible to reduce

information leakage. In fact, the ability to correct errors with minimal message length is crucial to the feasibility of

DIQKD: larger messages must be compensated by larger Bell violations and additional measurement rounds. This

calls for error correction codes operating as close to the Shannon limit in the finite size regime as possible.

However, the fact that the error correction scheme should succeed with a small message length m is not the only

constraint it should fulfill. It is equally desirable that the error correction code would be relatively insensitive to noise

specificities, and that its algorithm would admit an efficient implementation. Here we describe an error correction code

fulfilling all of these requirements.

In general, the setting for error correction is equivalent to a Slepian-Wolf scheme with asymmetric coding, as

depicted in Fig. S8. In this setting, a correlated source described by the joint probability distribution P (A, B) is

sampled n times. Alice computes a syndrome M from her variable A and sends it to Bob over a noiseless channel. Bob then reconstructs a copy A˜ of Alice’s outcomes A from B and M. In this setting, the overhead η = m/n can be

asymptotically as small as H(A|B) with the following scheme [28]. Consider a noisy channel transforming A into B

described

by

the

conditional

distribution

P (B|A)

=

P (A,B) P (A)

.

Consider

an

optimal

(capacity-achieving)

binary

linear

code of length n with code rate R = 1 − m/n for this channel. Take the m × n parity-check matrix H of this code and

compute the syndrome M = HA (mod 2). Then A can be recovered from (B, M). While the standard formulation

corresponds to the symmetric channel with uniform input distribution P (A), it was recently shown [29] that the

H(B|A) limit is also achievable in a general setting where the input distribution is not uniform.

A. Minimum syndrome length for a binary symmetric channel

In the case where A and B have the same statistics as the input and output of a Binary Symmetric Channel (BSC) with error parameter δ, i.e. of a channel which flips each input bit with probability δ, we can compute the smallest possible syndrome length m in presence of a finite number of samples n and assuming that the error correction scheme fails with probability ε. Following Eq. (289) of [30], the effective finite-size channel capacity is given by C(n, δ) with

n · C(n, δ) =n(1 − h(δ)) −

nδ(1

−

δ)

log2

1

− δ

δ

Q−1(ε)

+

1 2

log2(n)

+

O(1),

(9)

S17

Alice

IID Source

Bob

Syndrome encoder

Error-free transmission

Decoding

Fig. S8: Overall error correction setting: asymmetric Slepian-Wolf coding. Strings A and B are jointly sampled from a distribution P (A, B) and given to two distinct parties Alice and Bob. The aim is for Bob to end up with a copy of
Alice’s string A, while only exchanging a ‘short’ message M.

where n ε is the

is the length of the “transmitted” bit string (which in our model

error correction failure probability and Q(x) =

∞ x

√1 e−t2/2dt
2π

is =

B12 ),1h−(xe)rfi(sxt/h√e 2b)in.arFyorenetxraompyplfeu,nwcthioenn,

considering that the error correction scheme might fail with a probability of ε = 10−3, we have Q−1(ε) ≃ 3. The

minimum length of the syndrome is then

mBSC(n, δ) = n(1 − C(n, δ)).

(10)

B. Concrete setting

As discussed in Sec. S5, the honest model for our setup includes 5 sources of outcomes for Alice and Bob, corresponding

to each choice of measurement setting. The corresponding distributions P (A, B|X, Y ) are parametrised in terms

of the Bell value S and the QBER Q only. More precisely, the first four distributions correspond to a BSC with

error n1 =

δ1 n2

= =

δ2 n3

= =

δ3 n4

= =

δ4 = γn/4

4−S 8

=

δ′

(with

a

bit

times each. The last

flip in source

the fourth case). is also a BSC but

These with a

first sources are on different error: δ5 =

average Q = δ′′,

sampled which is

sampled (1 − γ)n times on average. Therefore, we need to deal here with the transmission of γn samples of a BSC

with bit flip probability δ′ and (1 − γ)n samples of a BSC with bit flip probability δ′′.

Note that the true statistics differ from this model (see Sec. S2 C). We rely on the universality of our code to deal

with these deviations.

Assuming an error-correcting code performing close to the finite-length limits, we have in principle two options:

encode each string on its own or encode all of them in one block. From (9) it follows that the larger the block length

the smaller the required overhead for error-free performance. Hence it is preferable to encode the data from all channels

together. In this case, we also need a joint decoding procedure.

C. Practical coding approaches
For practical application, we need an error-correcting code which is capacity-achieving under low-complexity decoding algorithm. Since we are operating in the finite-length regime, we would also like to get the finite-length performance close to theoretical limits. Simplicity of the code construction is an additional advantage due to the possible changes in the experimental setting. There are three reasonable choices that we can use: low-density parity-check (LDPC) codes, spatially-coupled LDPC (S-
C-LDPC) codes and polar codes.

S18

+

+

Fig. S9: (2,3)-regular protograph. Three vertices are connected to two check nodes.

Polar codes [31] have low-complexity encoding and decoding procedures but have several issues. Perhaps most

importantly, the code is channel-dependent, i.e. any change in γ, Q or S will require a separate optimization step,

which in case of BSC can only be done through costly Monte-Carlo simulations. Another problem is that whereas

the

optimal

code

has

gap

to

the

asymptotic

value

that

scales

as

Θ(

√1 n

)

(it

follows

from

(9)),

for

polar

codes

it

is

of

order

Θ( 1
n1/3.579

)

[32],

which

is

significantly

worse

and

implies

that

their

finite-length

performance

is

rather

far

from

theoretical limits.

LDPC codes were introduced in the early 1960s [33]. They are described as dual spaces of some sparse matrices,

which typically have a simple structure. Sparsity of this matrix gives rise to low-complexity iterative belief propagation

(BP) decoding algorithm. It is possible to compute the asymptotic performance of LDPC codes under BP decoding

[34]. Although LDPC codes can achieve capacity of BSC under computationally unfeasible maximum likelihood (ML)

decoding [35], their BP thresholds, i.e., the largest channel error probability that can be corrected by BP decoder with

infinite number of iterations, are typically not capacity-achieving. There exist some code constructions that come

close to the asymptotic limits [36] but the optimization for certain channels (such as mixture of two BSCs in our

setting) might be nontrivial. In case of the binary erasure channel (the receiver either gets the transmitted bit correctly with probability 1 − ε or receives an erasure symbol ”?” with probability ε) LDPC codes achieve capacity with linear

decoding complexity [37–39]. The optimal scaling behavior of LDPC codes is established for the erasure channel and

conjectured for the general channels [40].

SC-LDPC codes are constructed as a chain of LDPC codes that are coupled together. It was observed numerically in

[41] and proved in [42] that BP threshold of SC-LDPC codes converges to the ML threshold of the underlying LDPC

code. Moreover, they achieve capacity universally, i.e., a code of rate R allows the error-free transmission through any

channel with capacity greater than R when the code length grows to infinity. Another advantage of SC-LDPC codes is

the simplicity of the code construction since it is much easier to find LDPC codes which are capacity achieving under

ML decoding than to optimize LDPC codes so that their BP threshold is close to capacity. Since SC-LDPC codes

build on LDPC codes, in what follows, we start by describing LDPC codes and then proceed to describe the SC-LDPC

codes we use.

1. LDPC codes

An LDPC code of length n and dimension k is defined as a dual space of (n − k) × n full-rank parity-check matrix
H, which needs to be sparse. A code is called (dv, dc)-regular if each row of H contains exactly dc ones and each column exactly dv ones and irregular otherwise. The matrix H is typically represented as a Tanner graph, which is a bipartite graph that consists of check and variable nodes, which correspond to the rows and columns of H. If Hi,j = 1, then check node i and variable node j are connected by an edge. In Tanner graph representation, dv and dc become the degrees of variable and check nodes.
One way to construct good LDPC codes of variable length is to use a protograph construction [43]. A protograph with design rate R = 1 − nc/nv is a small bipartite graph with partitions of size nc and nv that correspond to check and variable nodes, respectively. A code of length n = M nv is obtained by applying a lifting procedure with lifting factor M . This procedure can be described as follows. Take the nc × nv biadjacency matrix B of the protograph and replace its zeros with M × M all-zero matr-
ices and ones with random M × M permutation matrices Πi,j. The resulting code has length M nv and rate R ≥ 1 − nc/nv. In practice, for random matrices Πi,j there is almost always an equality [43]. The advantage of protograph-based LDPC codes is that their properties, such as BP decoding threshold, can be
derived directly from protographs [43].

example 1. Consider the (2, 3)-regular LDPC code. The corresponding protograph is given at Figure S9 and its

biadjacency matrix can be written as B =

1 1

1 1

1 1

. The lifting process for M = 3 is given at figures S10a-S10b.

S19

+++

+++

(a) Lifting with M = 3: vertices and check nodes are split into three copies, with connections following the original topology.

+++

+++

(b) Tanner graph of lifted (2, 3)-regular LDPC code. The mapping between check and variable nodes, within connections compatible with the protograph, is random.

v0

c0

+

+

+ ...

v1
Fig. S11: Uncoupled (3,6)-regular protographs. Each variable node has degree 3 and each check node has degree 6. Although there are duplicate edges in the protograph, there will be none in the code after the coupling and lifting
steps.

2. SC-LDPC codes

A spatially coupled protograph is obtained by chaining together L copies of LDPC protographs, where L is called
the coupling factor. We assign time index t to each of these copies. Suppose a check node ci and a variable node vj in a protograph are connected with Bi,j edges (with Bi,j > 1 possibly). Then we spread these edges forward, i.e., we connect Bi,j edges from node vj at time t to check nodes cj at time t, t + 1, . . . , t + w, where w is called coupling width. For a regular protograph it is reasonable to take w = dv − 1 (typically, dv << L). Figures S11 and S12 illustrate the process for a (3,6)-regu-
lar protograph. A SC-LDPC code is then obtained by applying the lifting procedure described
earlier to a spatially-coupled protograph.
Let us now compute the rate of the obtained SC-LDPC code. We take L copies of the original protograph and chain
them together. The number of variable nodes is now fixed and therefore the code length is Lnv. A coupling width w means that variable nodes of the protograph at position t are also connected to the check nodes of protographs at
positions t + 1, . . . , t + w and therefore we need to add extra wnc check nodes in addition to Lnc that we already have. Therefore, the resulting SC-LDPC code has rate

R

=

1

−

(L + w)nc Lnv

=

1−

(1 +

(dv

− nv

1)/L)nc

.

(11)

v0

c0

+

+

+ ...

v1 Fig. S12: Spatially coupled (3,6)-regular LDPC ensemble, w = 2

S20

3. Belief propagation decoding

Assume that we have a parity check matrix H of some LDPC code C. In our setting, Bob has the string
B = (B1, . . . , Bn) and wants to reconstruct the string A = (A1, . . . , An) from the knowledge of B, the syndrome M = (M1, . . . , Mm) = HA and the joint distribution P (A, B). Therefore, the goal of the decoder is to find

n

A˜ = arg max

P (A = Aˆi, B = Bi|Xi, Yi).

Aˆ : HAˆ =M i=1

(12)

The straightforward procedure is to check all possible codewords of C and return the most probable. However, the number of codewords grows as 2k, where k is the code dimension, which quickly makes such procedure unfeasible,
hence the need for low-complexity algorithms.
Belief propagation is an iterative algorithm which makes use of the sparsity of the parity-check matrix H and for constant (dv, dc) has running time O(Nit · n), where Nit is a number of decoding iterations performed. Let

l = (l1, . . . , ln),

li

=

ln

P (Ai P (Ai

= =

0, 1,

Bi) Bi)

(13)

be the logarithmic reliability ratios vector corresponding to the vector B. The prior knowledge of which bits have error probability δ′ and which have error probability δ′′ is incorporated in li by appropriately setting the corresponding probabilities P (Ai = 0, Bi) and P (Ai = 1, Bi). The recovery of A˜ can be performed by an iterative exchange of messages between variable and check nodes of the Tanner graph of the code. The messages at iteration i are defined as
follows [28, 44]:

µ(vi→) c = 

lv, i = 0

lv +

c′∈Cv\{c} µc(i′)→v ,

i>0 

(14)

µ(ci→) v = 2 tanh−1 (−1)Mc

tanh(µ(vi′−→1c)/2) ,

v ′ ∈Vc \{v }

(15)

where the set Cv contains indices of check nodes, incident to variable node v, and Vc contains indices of variable nodes, incident to check node c. After Nit iterations we can obtain the string A˜ = (A˜1, . . . , A˜n) as follows:

A˜v

=

1

− xv 2

, xv

=

sgn(lv

+

µ(cN→ivt)),

c∈Cv

(16)

where xv are the hard-decision values obtained by converting the corresponding log-likelihood ratios into {−1, +1}. For SC-LDPC codes with underlying (dv, dc)-regular LDPC codes the error probability is expected to decrease doubly exponentially with decoding iterations if dv ≥ 3 [43]. There exists various improvements of this algorithm in the literature for general LDPC codes [45, 46] as well as for SC-LDPC codes [47, 48]. However, in the literature there is
no analysis of the behaviour of SC-LDPC codes under such decoders for non-erasure channels, hence the use of the
standard BP algorithm, which is provably good, for our experiments. The similar lack of theoretical analysis exists
with early termination schemes, which seek to find a criterion when the decoding process can be stopped.

D. Simulations

Although the existing theory predicts good asymptotic behaviour of SC-LDPC codes, their finite-length performance is well studied only for the case of the erasure channel. Furthermore, our setting with the transmission through two BSCs makes the analysis even more complicated. In the asymptotic setting with infinite block length, the smallest achievable overhead is

η˜∞ = γH(A′|B′) + (1 − γ)H(A′′|B′′),

(17)

where P (A′, B′) and P (A′′, B′′) are the probability distributions from Eq. (6) and Eq. (7), determined by S and Q respectively. For the finite-length setting, to get an estimate of the best-possible overhead, we can assume the case of independent decoding of BSC(δ′) and BSC(δ′′) and use Eq. (10) to get the estimated syndrome length

m˜ (n) = mBSC(γn, δ′) + mBSC((1 − γ)n, δ′′).

(18)

S21

Fig. S13: Performance of the error-correction scheme: probability of a successful error correction as a function of the ratio between the syndrome and block length for various block length. Here we have γ = 13/256, S = 2.6507 and
Q = 0.0239. The threshold for error-free correction approaches the asymptotic bound as the block length n increases.

The estimated overhead is then naturally

η˜(n)

=

m˜ (n) n

.

(19)

For the mixture of two BSCs the threshold might be better but we don’t know a priori where it is exactly. Also there might be some loss due to the length and overhead adaptation of the code construction. Therefore, we resort to numeric simulations to locate the threshold.
The simulation setting for the error correction part can be described as follows. Assume that the length n and the error correction overhead η = m/n are fixed. Then we choose the base protograph with the design rate close to 1 − η, which is then followed by the coupling and lifting process, where the coupling factor is L = 80 (SC-LDPC codes are optimal for L → ∞, but in practice we just pick a sufficiently big number). Note that the resulting code has slightly larger length n′ (since it is a multi-
ple of the lifting factor) and overhead η′ (due to coupling). Hence, to finish the code construction we need to remove some variable and check nodes from the Tanner graph in a way that keeps the spatial coupling advantage (which comes from low-degree check nodes at the sides of the chain). The simple and rather efficient strategy can be described as follows:

1. Remove n′ − n variable nodes with the smallest degrees (the node is less reliable if it has smaller degree)

2. Pick two sets of (η′ − η)n checks with the largest degrees and perform pairwise merging, i.e. replace every pair of nodes c, c′ with a new node c′′ s.t. adj(c′′) = adj(c) ∪ adj(c′).

Before the decoding process, the string is shuffled so that noisier bits become more evenly distributed in the codeword, which helps the decoding process. Note that the shuffling pattern is known to the decoder so it can correctly assign the reliabilities.
Figure S13 demonstrates how the probability of successful string recovery changes with coding overhead for different values of block length n. In this setting, γ = 13/256, S = 2.6507, Q = 0.0239. It can be seen that for larger lengths the

S22

curves become smoother and sharper. Furthermore, for n = 5e6 the corresponding curve is almost a vertical line and it follows that the string is always recovered for overheads larger than η∗ = 0.196, which is only 6% larger than the asymptotic value η˜∞ ≈ 0.1847 given by Eq. (17) and 3.7% larger than η˜(5e6) ≈ 0.189 given by Eq. (19). Note that if we only assume the global symmetric error δˆ = γδ′ + (1 − γ)δ′′ ≈ 0.032, the corresponding asymptotic overhead is h(δˆ) ≈ 0.204. From Fig. S13 it follow-
s that the knowledge of exact bit reliabilities allows an error-free transmission with this overhead in the finite size regime for n ≥ 1e6.
Let us now demonstrate the threshold performance of the considered code construction, i.e., how much “extra”
overhead we need in addition to the asymptotic value for the string reconstruction for finite block length n and how it
decreases with n. Since we are in the finite length setting, we define the threshold as the smallest overhead η s.t. the probability of successful recovery is larger than some fixed value p∗. Let us denote the gap function as

g(η) = η − η˜∞.

(20)

The performance of our scheme for p∗ = 0.9 is demonstrated at Fig. S14. Two of the experimental plots correspond to γ = 0.08, S = 2.6192 and Q ∈ {0.015, 0.02} and the third to γ = 13/256 and the probabilities defined by Tab. S6, which roughly correspond to S = 2.6507, Q = 0.0239. All regimes demonstrate a similar convergence, which confirms the universality of the code construction. Curves corresponding to Eq. (19) and Eq. (23) for the setting γ = 13/256, S = 2.6507, Q = 0.0239, are also present. -
They essentially provide lower and upper bounds.
The curve corresponding to using only global symmetric error δˆ is also provided as a reference in Fig. S14. For the sake of comparison with Eq. (19), we take the same value of η˜∞. In this case, the convergence to the asymptotic value is faster since we don’t have a small block anymore. However, the best-possible overhead is much higher than when we are allowed to distinguish different bit reliabilities, and in fact, bit reliabilities allow to lower the threshold for any finite size n.
In Fig. S14, we also compare our construction to some error-correction schemes previously considered for DIQKD which do not admit a known efficient decoding algorithm and are thus not suited for practical purpose. Namely, we consider the bound from [19, 49]:

mAF RV

= n · η˜∞ + min
0≤ε′ ≤ε

√ 4 log(2 2 + 1)

2n log

8 ε′2

+ log

8 ε′2

+

2

2 −

ε′

+ log

1 ε − ε′

(21)

and the one from [50]:

mT SBSRSL

=

n

·

η˜∞

+

min
0≤ε′ ≤ε

2 log(5)

n log

2 ε′2

+ 2 log

1 ε − ε′

+ 4.

(22)

We notice that our construction achieves smaller overhead than the AFRV bound, and a comparable overhead compared to the TSBSRSL bound.
Finally, we note that the results of our simulations in Fig. S14 yield a critical threshold that is systematically shifted from the bound given in Eq. (19). This can be attributed to the fact that scaling depends more on the lifting factor M than on the total block length n.
One straightforward benefit from using one big block of data compared to treating separately more and less noisy bits is that we only need to design one code instead of two. Another advantage becomes clear assuming the similar behaviour of the gap function for the case of single BSC (which is confirmed by experiments). Joint decoding gives us g(η˜(n)), which is smaller compared to γ · g(η˜(γn)) + (1 − γ) · g(η˜((1 − γ)n)) for the independent decoding.

E. Practical implementation of the coding scheme

Given the result of our numerical experiments, we choose the syndrome length as a function of the parameters S, Q γ and n with the following formula:

√

m = n((1 − γ)h(Q) + γh((4 − S)/8)) + 50 n.

(23)

This choice guarantees a proper error correction in all simulations (see Fig. S14). It also includes some margin to guarantee successful decoding with a probability larger than 90%, as well as in the case where the experimental statistics would differ from the expected ones (our construction would work seamlessly in such a case, but only provided that sufficient information is available in the syndrome).

S23

Fig. S14: Convergence of the code performance: gap to the asymptotic limit as a function of the block length. The success probability here is fixed to be p∗ = 0.9. Blue, orange and green dots are the result of simulations. The green full line corresponds to the ideal convergence. The dashed green curve correspond to the best convergence possible when treating the channel as a single BSC. For comparison, the convergence of two error-correction schemes previously considered for DIQKD which do not ad-
mit a known efficient decoding algorithm are given by the red and blue curves. The choice of the syndrome length for our implementation of DIQKD is represented by the dotted green line. It is
chosen above the simulation results curve on purpose to allow for a decoding success probability larger than 90%.

P (A′, B′) =

0.4210 0.0807 0.0847 0.4136

P (A′′, B′′) =

0.5017 0.0034 0.0110 0.4839

Table S6: Channel statistics assumed for the test rounds (left) and key generating rounds (right) for error correction: these probabilities define the decoder priors. The matrices give the expected correlations between each bit in Alice’s and Bob’s strings (Ai)i, (Bi)i (after flipping Bob’s result for the Xi = Yi = 1 case), with rows corresponding to Alice’s
outcomes and columns to Bob’s.

Finally, we need to define the prior probabilities for the decoder. Given our knowledge of the setup ahead of the DIQKD experiment (see Sec. S2 C), we choose decoding prior probabilities according to Tab. S6.
In the case of the statistics given by Tab. S6 with γ = 13/256 and n = 1.5 × 106, eq. (23) gives an overhead of η = m/n ≃ 0.229, for which we expect a high success probability according to Fig. S13. This is confirmed by Monte-Carlo simulations: we observe 5 failures out of 15 000 samples for this case when m = 337 500. Similarly, in the case S = 2.64, Q = 1.8%, γ = 13/256, n = 1.5 × 106, which corresponds to the parameters reported in the main text, we observe 3 failure out of 15 000 samples when -
m = 296 517. Therefore, in both cases the choice of syndrome length given by eq. (23) yields a success probability p∗ ≥ 99.9%.
For the actual DIQKD demonstration, we run a BP decoder on Bob’s node using an Intel Core i7-9700 CPU

S24 (3.00 GHz), which took 250 s to converge for n = 1.5 × 106.

S7. PROTOCOL FEASIBILITY AND COMPLETENESS

For a DIQKD protocol to be practical, we would want it to accept with high probability when the setup behaves as expected. To achieve this, the protocol parameters should be chosen according to details of the experimental setup. We discuss this point here and how it leads to specific choices of parameters.
The condition that the expected behaviour is accepted with high probability is usually formalized as follows:

Definition 1. A protocol is said to be εcom-complete if the honest implementation aborts with probability at most εcom.

Upon examination of our protocol, we find that the abort probability εcom of the expected behaviour can be made

arbitrarily small by choosing appropriate protocol parameters and having enough rounds. More specifically, we do so

by considering the three points where the protocol may abort, and ensuring that the expected behaviour is accepted

with high probability at each step. First, we need to consider the error-correction step, which accepts if the hashes GEC and G˜ EC match. These hashes
always match in a honest implementation if the reconstructed string A˜ is equal to A (see Sec. S9 A), so it suffices

to ensure that this occurs with high probability. Following the analysis presented in Sec. S6, we deduce that a safe

boundary for our regime of parameters ensuring proper error correction is given by the syndrome length given in

Eq. (23). Our simulations show that the contribution of the error correction to the error probability is then smaller

than ≤ 0.1%.

Second, the authentication and activation steps accept if the authentication tags match. For the honest implementa-

tion, this is trivially satisfied (i.e. as long as all messages are received without errors, which is ensured by the reliability

of classical communication).

Finally, we need to ensure that the number of test rounds in which the CHSH game is lost (i.e. cases for which

A˜i ⊕ Bi ≠ probability.

Xi · Yi) should To ensure this,

pass the Bell-test verification: we consider the random variable

one must have Wi = χ(Ui = 0)

i χ(Ui = 0) ≤ that corresponds

nγ(1 − ωthr) with high to the ith round being a

test round losing the CHSH game. For the honest implementation, each of these is an independent Bernoulli variable

with

parameter

q

=

P (Wi

=

1)

=

γ(1 − ω),

where

ω

=

4+S 8

is

the

CHSH

winning

probability

we

expect

to

achieve.

We

can thus expect the condition to be verified with high probability by accepting whenever the fraction of rounds with

Wi = 1 is at most

qthr = q + k

q(1 − n

q)

,

(24)

for some suitable k (this describes how much “allowance” we give between the expected behaviour and the threshold

the protocol accepts). For definiteness, we choose here k = 3, which essentially corresponds to allowing 3 standard

deviations of tolerance, contributing to an error probability well below 1% [51]. Altogether, this guarantees that the

protocol is complete with εcom ≤ 0.01. In terms of the protocol parameter ωthr, Eq. (24) means taking

ωthr

=

1

−

qthr γ

.

(25)

Eq. (25) sets a relation between ωthr and γ which guarantees that the inequality (5) of the validation step can be satisfied with high probability. We then choose the value of the remaining parameters, such as γ, in order to maximize
the key rate.

S8. BASIC DEFINITIONS AND NOTIONS OF SECURITY This section presents the notions of distances, entropies and security on which this work relies.

A. Trace distance
To establish the security of the reported protocol, we need to compare the state obtained at the end of the protocol with a uniformly random state, i.e. with the state expected in an ideal scenario in which Eve has no information about the final key. The relevant distance in this case is the trace distance [52], which we discuss quickly in this subsection.

S25

We recall first that the trace norm of an operator O is defined as

√

||O||1 = Tr O†O .

(26)

In addition to being non-negative definite ||O||1 ≥ 0, the trace norm satisfies homogeneity ||cO||1 = |c|||O||1 for any complex number c and the triangle inequality ||O + O′||1 ≤ ||O||1 + ||O′||1.
Since we need to consider sub-normalized states, we define the corresponding notation. Let S≤(H) denote the set of ‘sub-normalized’ quantum states on H, i.e. the set of all linear operators ρ on H satisfying ρ ≥ 0 and Tr (ρ) ≤ 1. This
set includes in particular the set of normalized quantum states, which we refer to as S=(H).

Definition 2. Let ρ, τ ∈ S≤(H). The trace distance between ρ and τ is given by (see [53], section 3.2)

D(ρ, τ )

=

1 2

||ρ

−

τ

||1

+

1 2

|Tr

(ρ

− τ )|.

(27)

Note that for normalized states, the trace distance reduces to the first term in the right hand side of Eq. (27).

B. Smooth min and max entropies

The quantum conditional min and max entropies of sub-normalized states are defined below, following the definitions in [53].

Definition 3. Let ρAB ∈ S≤(H). The min-entropy of A conditioned on B of ρAB is defined as

Hmin(A|B)ρ = sup sup λ ∈ R : ρAB ≤ 2−λ11A ⊗ σB ,
σB ∈S≤(HB )

(28)

where the operator inequality here is to be understood in semi-definite terms.

Definition 4. Let ρAB ∈ S≤(H). The max-entropy of A conditioned on B of ρAB is defined as

Hmax(A|B)ρ

=

max

log

||√ρAB

√ 11A

σB ∈S≤(HB )

⊗

σB ||21 .

(29)

Without loss of generality, the optimization over σB in either of the above definitions can be restricted to normalized states [54].
In order to discuss min and max entropies in the neighborhood of a quantum state, we need to rely on a metric for quantum states. Following [53, 55], we do this with the help of the purified distance, whose definition we recall below.

Definition 5. Let ρ, τ ∈ S≤(H). The generalized fidelity between ρ and τ is given by

√√

F (ρ, τ ) = sup sup || ρ¯ σ¯||1,

(30)

H¯⊇H ρ¯,τ¯∈S=(H¯)

ρ=Πρ¯Π,τ =Πτ¯Π

where the first supremum runs over all embeddings of H into larger spaces H¯, and Π is the projection from H¯ to H.

It can be shown that the generalized fidelity can be equivalently computed as

F (ρ, τ ) = Tr √ρ τ √ρ + (1 − Tr (ρ))(1 − Tr (τ )).

(31)

Definition 6. Let ρ, τ ∈ S≤(H). The purified distance between ρ and τ is given by (see [53], section 3.4)

P(ρ, τ ) = 1 − F (ρ, τ )2.

(32)

Note that the purified distance is contractive with respect to trace non-increasing CP maps (see [55], lemma 7), i.e. for ρ, τ ∈ S≤(H) and E a trace non-increasing CP map,

P(E(ρ), E(τ )) ≤ P(ρ, τ ).

(33)

Note also the relationship between trace distance and purified distance (see [55], lemma 6):

D(ρ, τ ) ≤ P(ρ, τ )

(34)

where ρ, τ ∈ S≤(H). Finally, The purified distance is a metric on the set of sub-normalized states (see [55], lemma 5). This allows one to define balls in the neighborhood of a sub-normalized states.

S26

Definition 7. Let ρ ∈ S≤(H) and 0 ≤ ε < Tr (ρ). The ε-ball in H around ρ is given by

Bε(ρ) = {τ ∈ S≤(H) : P(ρ, τ ) ≤ ε}.

(35)

Note that from Ineqs. (33), (34) and the definition of the trace distance in Eq. (27), the following inequalities hold for any state τ ∈ S≤(H) in the ε-ball around ρ ∈ S≤(H)

ε

≥ P(ρ, τ )

≥

P(E(ρ), E(τ ))

≥

D(E(ρ), E(τ ))

≥

1 2

||E (ρ)

−

E(τ ))||1

(36)

where E is a trace non-increasing CP map. We can now define the smooth conditional min and max entropies respectively as the maximum min entropy and
the minimum max entropy within the neighborhood of a state.

Definition 8. Let ρAB ∈ S≤(H) and 0 ≤ ε < Tr (ρAB). The ε-smooth min- and max-entropy of A conditioned on B of ρAB are given by

Hmε in(A|B)ρ

=

ρ˜AB

max
∈Bε (ρAB

Hmin(A|B
)

)ρ˜.

(37)

Hmε ax(A|B)ρ

=

ρ˜AB

min
∈Bε (ρAB

Hmax
)

(A|B

)ρ˜.

(38)

C. Security definitions

In a DIQKD protocol, the two parties Alice and Bob either accept the data produced during the protocol, or abort
the protocol. We denote the event in which Alice and Bob accept the result of the protocol by Ω. In case the parties
accept, which happens with some a priori unknown probability P (Ω), keys KA and KB are produced for Alice and Bob respectively. Following [49], we say that our protocol is εcorr-correct if the keys KA and KB are produced and are different with probability at most εcorr, i.e.

P (KA ̸= KB ∧ Ω) ≤ εcorr.

(39)

We say that our protocol is εsec-secret if

P

(Ω)

1 2

||(ρ|Ω

)KA

,E

−

UKA

⊗

(ρ|Ω)E ||1

≤

εsec,

(40)

where ρ is the state at the end of the protocol, and the conditioning in ρ|Ω indicates that the state is normalized, conditioned on the protocol accepting. The subscripts KA and E indicate the subsystems which are not traced out. UKA is the fully mixed state on register KA and E is Eve’s full side information. Finally, we say that our protocol is εsnd-sound if it is both εcorr-correct and εsec-secret with

εcorr + εsec ≤ εsnd

(41)

for all possible implementations of the devices.

We establish the correctness of our key through the choice of an ε-almost-universal hashing function, and its secrecy through Trevisan privacy amplification as described below. This together guarantees the soundness of the key.

S9. CLASSICAL CRYPTOGRAPHIC ALGORITHMS
Several classical processing algorithms are necessary to run a DIQKD protocol. Sec. S6 describes our choice of error correction algorithm. Here, we define and describe the cryptographic algorithms which play a role in the security of our final key.

S27

A. Strongly universal hashing

We consider families of functions H with h ∈ H, h : {0, 1}n → {0, 1}l for n, l ∈ N. Denote P the probability of an
h∈H
event when the function h is chosen randomly from the family H.

Definition 9 (Epsilon-almost-universal (AU) hashing [56]). H is an εh-almost-universal family of hash functions if for all two strings A ̸= A˜ we have the guarantee that

P (h(A)
h∈H

=

h(A˜ ))

≤

εh.

(42)

Definition 10 (Epsilon-almost-∆-universal (A∆U) hashing [57]). H is an εh-almost-∆-universal family of hash functions if for all two strings A ̸= A˜ and for all t ∈ {0, 1}l we have the guarantee that

P (h(A)
h∈H

⊕

h(A˜ )

=

t)

≤

εh.

(43)

Definition 11 (Epsilon-almost-strongly-universal (ASU) hashing [56]). H is an εh-almost-strongly-universal family of hash functions if for all two strings A ̸= A˜ and all t, t˜ ∈ {0, 1}l we have the guarantee that

P (h(A)
h∈H

=

t, h(A˜ )

=

t˜)

≤

εh 2l

.

(44)

In this work, we use the VHASH hashing family HVHASH with an output of size l = 64 bits [58]. For messages of length up to 262 = 4, 194, 304 TiB, this is a εh-A∆U family of hash functions with a seed of length ∼ 1280 and a collision probability εh = 2−61 ≃ 4.3 · 10−19 [58]. This implies in particular that HVHASH is a εh-AU family of hash functions.
Following Wegman and Carter [59], we protect the VHASH seed by systematically encrypting hashes with a fresh one-time-pad. This way, for every exchange of a hash between the parties, the information revealed to the adversary reduces to that which can be inferred in any case from knowning whether a message is accepted or not [60]. Effectively, this defines a new family of hash functions G:

g(A) = h(A) ⊕ kotp,

(45)

where h is chosen from HVHASH and kotp is chosen uniformly in {0, 1}l. Since kotp is chosen uniformly, it is clear that the tags created by G are uniform:

P (g(A)
g∈G

=

t)

=

1 2l

.

(46)

Therefore, G is a εh-ASU family of hash functions:

P (g(A) = t, g(A˜ ) = t˜) = P (g(A) = t, g(A) ⊕ g(A˜ ) = t ⊕ t˜)

g∈G

g∈G

= P (g(A) = t) P (g(A) ⊕ g(A˜ ) = t ⊕ t˜|g(A) = t)

g∈G

g∈G

(47)

≤

εh 2l

for all two strings A ̸= A˜ and all tags t, t˜. In particular, this also implies the following relation for A ̸= A˜ :

P (g(A)
g∈G

=

t|g(A˜ )

=

t˜)

≤

εh.

(48)

We use this family of hash functions at several stages of our protocol. In steps 5 and 7 of the protocol, we use it to ensure the correctness of the error correction, see Sec. S11 C. What is crucial here, is that VHASH is a AU family of hash functions. We then encrypt the hash with a one-time-pad to protect the VHASH seed, allowing us to reuse the same seed later. Effectively, this is done by simply sampling from the G family directly. In step 10 of the protocol, we then use the same family G to a-
uthenticate classical communication. This time, the crucial property is that G is a ASU hashing family, see S11 D. UVMAC, our implementation of the G hashing family [61], is based on the reference implementation of the VHASH family [62].

S28

B. Privacy amplification

The reduction of the eavesdropper’s information about the key is obtained by mean of a quantum-proof strong (k, ε)-extractor that we define now. An extractor Ext: {0, 1}n × {0, 1}s → {0, 1}ℓ is a function which takes a weak
source of n random bits and a uniformly random, short s-bit long seed, and produces some output made with ℓ
bits, which is almost uniform. An extractor is said to be strong if the output is approximately independent of the
seed. In our case, the randomness of the source is measured relative to a quantum side information. We denote the
classical-quantum state (cq-state) describing the source and adversary’s registers by ρCQ. In such a state, C is a classical register and Q a quantum register. The state of the n-bit classical register of the source alone is given by
ρC = TrQ(ρCQ) and the state of the quantum side information by ρQ = TrC (ρCQ).

Definition 12 (Quantum-proof strong extractor). A function Ext : {0, 1}n × {0, 1}s → {0, 1}ℓ is a quantum-proof (k, ε)-strong extractor, if for all cq-states ρCQ with Hmin(C|Q)ρ ≥ k, we have

1 2

||EExt(ρCQ

⊗

US )

−

UK

⊗

ρQ

⊗

US ||1

≤

ε.

(49)

Here, EExt is the map associated to Ext, UK is the fully mixed state on register K, i.e. for a system of dimension 2ℓ, and US is a fully mixed state on register S, i.e. for a system of dimension 2s.

We consider Trevisan’s construction of randomness extractors. Trevisan extractors produce large outputs by concatenating the output of several small extractors. A weak design is used to define the seed of each individual extractor from an initial larger seed in such a way as to minimize mutual overlap between seeds. Thanks to this mechanism, Trevisan extractors only require a remarkably short initial seed. Moreover, when constructed with 1-bit extractors, the resulting Trevisan construction is qua-
ntum-proof [63]. Let us formally introduce Trevisan’s construction.

Definition 13 (Weak design). A family of sets S¯1, . . . , S¯ℓ ⊂ [s] is a weak (ℓ, t, r, s)-design if

• For all i, |S¯i| = t

• For all i, 2|S¯j∩S¯i| ≤ rℓ.

ℓ is thus the number of elements in the family of sets {S¯i}ℓi=1, t is the number of elements in each set and r bounds

the overlap between the sets. Let us consider a long seed S ∈ {0, 1}s position speficied by the elements of S¯i – a string of length t.

and

SS¯i

the

string

formed

by

the

bits

of

S

at

the

Definition 14 (Trevisan extractor). Given a weak (ℓ, t, r, s)-design {S¯i}ℓi=1 and a one-bit extractor Ext1: {0, 1}n × {0, 1}t → {0, 1}, Trevisan’s construction is defined as Ext(C, S) := (Ext1(C, SS¯1 ), . . . , Ext1(C, SS¯ℓ )).
As an example, Trevisan’s construction applied onto a quantum-proof (k, ε)-strong one-bit extractor and a weak (ℓ, t, r, s)-design gives a quantum proof (k + rℓ, ℓε)-strong extractor [64].

In our case, we use the block weak design construction proposed in [64], section III B 2, together with the polynomial

hashing one-bit extractor presented in [64], section III C 3, which is based on a composition of two hash functions

– a Reed-Salomon code and a Hadamard code. The block weak design has r = 1. This leads to a quantum-proof

ℓ

+

6

+

4

log

1 ε1

,

ℓε1

-strong extractor with a seed of length

s = max

2,

log(ℓ − e) − log(t+ − e) log(e) − log(e − 1)

+1

t2+

(50)

with t+ the first prime number larger or equal to

t=2

log

n

+

2

log

2 ε1

.

(51)

Here, ε1 characterizes the distance to a random bit of the output of the one-bit extractor (it is the security parameter of the underlying Reed-Solomon-Hadamard code) and ℓ is the length of the extracted string. Here, we take into account the bound on the overlap of the block weak design given in [65], see also [66]. An open-source code implementation of this Trevisan extractor is available in [67].

S29

Proposition 1 (Trevisan extraction with block weak design and polynomial hashing). Let ρCQ ∈ S≤(C2n ⊗ H) be a (possibly subnormalized) cq-state and let S be an s-bit classical register. We write ETrev : {0, 1}n × {0, 1}s → {0, 1}ℓ the Trevisan extractor with block weak design constructed on top of 1-bit polynomial hashing as defined in [64]. Define
the function

Υb(x) = b W

ex b b

(52)

where

W

is

the

principal

branch

of

the

Lambert

function

and

b=

4 ln 2

≃ 5.77.

Then

for

any

εs, εPA > 0,

if

1 ≤ ℓ ≤ Υb

Hmεsin(C|Q)ρ − 6 − 5 log

1 εPA

,

(53)

then implementing the extractor with ε1 = εPA/ℓ yields

1 2

||ETrev

(ρCQ

⊗

US )

−

UK

⊗

ρQ

⊗

US ||1

≤

εPA

+

2εs.

(54)

Moreover, the seed length is given by Eq. (50).

Here, ETrev (ρCQ ⊗ US) is the state in S≤(C2ℓ ⊗ H ⊗ C2s ) obtained after applying the Trevisan extractor onto the register C of ρCQ with a uniformly random seed S. Note that this map does not act on register Q, and it does not modify the register S: it only affects the C register.
In essence, this proposition states that secrecy can be guaranteed simply by quantifying the conditional smooth min-entropy Hmεsin(C|Q) on the state left at the end of the protocol. Bounding this smooth min-entropy then becomes the main focus of the security analysis.
We emphasize that the extractor considered here is a quantum-proof strong randomness extractor. Furthermore, note that Υb(x) for b > 0 can be equivalently defined as the inverse of the function f (y) = y + b ln(y) (i.e. Υb(x) is the unique value y satisfying x = y + b ln(y)), and it is strictly increasing because f is strictly increasing. This implies that for x ≥ 1 we have

x − b ln(x) ≤ Υb(x) ≤ x,

(55)

because for the value y = Υb(x), we have y ≥ 1 as well (since Υb is strictly increasing and Υb(1) = 1) and thus x = y + b ln(y) ≥ y = Υb(x). This in turn implies b ln(x) ≥ b ln(y) and thus Υb(x) = y = x − b ln(y) ≥ x − b ln(x). Hence, this extractor extracts the whole entropy of the string up to a logarithmic correction (and the function Υb(x) can be safely replaced by x − b ln(x) = x − 4 log(x) in the key rate evaluation). Finally, we note that the seed requirement
for this extractor only grows polylogarithmically with n, as shown by Eq. (50).

Proof. Since the state ρCQ has smooth min-entropy Hmεsin(C|Q)ρ, there exist a purified distance P(ρCQ, ρCQ) bounded by εs with identical min-entropy:

aHnmeinig(hCb|oQr)inρ g=stHamtεesinρ(CCQ|Q∈)ρB.

εs (ρCQ Using

) at the

triangle inequality twice, we have:

1 2

||ETrev

(ρC

Q

⊗

US )

−

UK

⊗

ρQ

⊗

US ||1

≤

1 2

||ETrev

(ρC

Q

⊗

US )

−

ETrev (ρC Q

⊗

US )||1

+

1 2

||ETrev

(ρC

Q

⊗

US )

−

UK

⊗

ρQ

⊗

US ||1

+

1 2

||UK

⊗

ρQ

⊗

US

−

UK

⊗

ρQ

⊗

US ||1 .

(56)

Applying Ineq. (36) to the first term in the right hand side of the above inequality by considering a map E taking states τQC and returning ETrev(τQC ⊗ US), we conclude that this first term is bounded by εs. Applying the same argument to the third term by considering a map E taking states τQC and returning UK ⊗ τQ ⊗ US, we deduce that

1 2

||ETrev

(ρCQ

⊗

US )

−

UK

⊗

ρQ

⊗

US ||1

≤

1 2

||ETrev

ρCQ ⊗ US

− UK ⊗ ρQ ⊗ US||1 + 2εs.

(57)

In order to bound the first term on the RHS of the above expression, we consider two cases [68]: Tr ρCQ ≤ εPA and Tr ρCQ > εPA. For the first case, that term is immediately upper bounded by εPA, and we are done. For the

S30

second case, note that since Υ−b 1(ℓ) = ℓ + b ln(ℓ) is a strictly increasing function, the upper inequality in condition (53) is equivalent to

ℓ

+

4

log(ℓ)

≤

Hmεsin (C |Q)ρ

−

6

−

5

log

1 εPA

.

(58)

Let ρˆCQ be the normalized version of ρCQ, i.e. so we have ρCQ = Tr ρCQ ρˆCQ. Since Hmin(C|Q)ρˆ = Hmin(C|Q)ρ − lmogin(d1/tThratρHCQmin)(C(t|hQis)ρfo=lloHwmεssisnt(rCa|iQgh)tρf,owrweahrdavlye from the definition of the min-entropy; see Eq. (28)) and keeping in

Hmin(C|Q)ρˆ = Hmεsin(C|Q)ρ − log Tr

1 ρCQ

≥

ℓ

+

4

log(ℓ)

+

6

+

5

log

1 εPA

− log Tr

1 ρCQ

≥

4 log

ℓ εPA

+

6

+

ℓ,

since Tr ρCQ > εPA.

(59)

From [64], we know that the Trevisan extractor ETrev with block weak design and polynomial hashing is a quantum-proof

(4 log

1 ε1

+ 6 + ℓ, ℓε1)-strong

extractor

in

the

sense

of

Definition

12.

Hence

the

bound

(59)

implies

that

implementing

the extractor with ε1 = εPA/ℓ gives

1 2

||ETrev (ρˆC Q

⊗

US )

−

UK

⊗

ρˆQ

⊗

US ||1

≤

ℓε1

=

εPA,

(60)

which yields the desired bound (recalling that ρ = Tr (ρ) ρˆ and Tr (ρ) ≤ 1).

S10. SECURITY STATEMENT

Here, we give an expression for the secure key length produced by our DIQKD protocol. For this, we define a family of linear lower bounds

gt(ω) = η(t) + (ω − t)η′(t)

(61)

on the CHSH-based entropy bound [15]



0

√

if

1 4

≤ω

≤

3 4

η(ω) = 1un−dehfine1d+

16ω(ω−1)+3 2

elseif ω ∈ Q˜ else,

(62)

√

√

where Q˜ = [ωmin, ωmax], and ωmin =

1−1/ 2

2 , ωmax =

1+1/ 2

2

are the minimum and maximum quantum winning

probabilities for the CHSH game.

We also define the functions ft on ternary probability distributions p : {0, 1, ⊥} → R as

ft(p) =

p(u)ft(δu),

u=0,1,⊥

(63)

i.e. as the affine extension of

ft(δu) =

1 γ

gt

(0)

+

1

−

1 γ

gt(1)

if u = 0

(64)

gt(1)

if u = 1 or u =⊥,

where δu are the three delta distributions over {0, 1, ⊥}. It is convenient to denote p by the triple p = (p(0), p(1), p(⊥)). Then, δu = (χ(u = 0), χ(u = 1), χ(u =⊥)).
Recall that the variance of ft over a distributions p is given by

Varp(ft) =

p(u)ft(δu)2 − ft(p)2.

u=0,1,⊥

(65)

S31

Finally, we define:

ϑε

=

log

√1 1 − 1 − ε2

≤

log

2 ε2

(66)

q(ω) = (γ(1 − ω), γω, 1 − γ)

(67)

∆(ft, ω) = η(ω) − ft(q(ω))

(68)

V

(ft, p)

=

ln 2 2

log 33 +

2
2 + Varp(ft)

(69)

Kα′ (ft)

=

6(2

−

1 α′)3

ln

2

2(α′ −1)(2+gt (1)−gt (ωmin ))

ln3

22+gt(1)−gt(ωmin) + e2

.

(70)

We can now formulate the secure key length of our protocol.

Proposition 2 (Secure key length). Define the following parameters

n ∈ N the number of measurement rounds

γ ∈ (0, 1) the testing probability

ωthr the threshold CHSH winning probability

m the length of the error correction syndrome

√

t∈

3 4

,

1

+1 2

2

a CHSH winning probability

(71)

εh > 0 the hashing collision probability

εPA > 0 the privacy amplification parameter

εEA > 0 the entropy accumulation parameter α′ ∈ (1, 2) a Renyi parameter

α′′ ∈

1, 1

+

1 log

5

another Renyi parameter

Define also three smoothing parameters εs, εs′, εs′′ > 0 satisfying the condition

εs′ + 2εs′′ < εs,

(72)

and

let

b=

4 ln 2

.

A

key

KA

of

length

ℓ = Υb

n gt

(ωthr)

+

n

inf
ω∈Q˜

∆

(ft,

ω)

−

(α′

−

1)V

(ft, q(ω))

− n(α′ − 1)2Kα′ (ft) − n γ − n(α′′ − 1) log2(5)

−

α′

1 −

1

ϑεs′ + α′ log

1 εEA

−

1 α′′ −

1

ϑεs′′ + α′′ log

1 εEA

− 3ϑεs−εs′−2εs′′ − 5 log

1 εPA

− m − 264

(73)

produced by the protocol described in Sec. S4 is (max(εEA, εPA + 2εs) + 4εh)-sound.
The parameters ℓ, n, γ, ωthr and m are explicit parameters in the DIQKD protocol, while the parameters t, εh, εPA, εEA, α′, α′′, εs, εs′ and εs′′ are more abstract quantities that appear in the derivation of the theorem. For a given choice of n, γ, m and ωthr, the remaining parameters can be optimized in order to maximize the final key length ℓ — in general, we would simply perform this optimization heuristically. In our case, we express m and ωthr through Equations (23) to (25), fix n and γ, and -
optimize all other parameters, except εh = 2−61 which is fixed by our use of the VHASH algorithm. Proposition 2 is proven in the next Section. General properties of the key length certified by Proposition 2 are illustrated in Fig S15 and S16.

S32
Fig. S15: Secure key for various physical models. Here, the soundness is fixed to εsnd = 10−10, the completeness error is estimated to be εcom ≤ 0.01, and all free parameters are nume√rically optimized over. a, Key rate r = ℓ/n in the depolarizing model as a function of the visibility V , i.e. with S = 2 2V and Q = (1 − V )/2. A positive key rate is found starting from n ≃ 2.6 × 105 rounds. b, Minimal number of round n needed to obtain a positive key length as a
function of S and Q. All points lying above a line present a positive key length for the corresponding number of rounds n.
Fig. S16: Parameter dependence of the key length. Here we focus on the case presented in the main text with S = 2.64, Q = 0.018 and εcom ≤ 0.01. a, Dependency of the key rate on the soundness parameter when γ = 13/256.
b, Optimal testing probability γ as a function of the number of rounds for εsnd = 10−10. S11. SECURITY ANALYSIS – PROOF OF PROPOSITION 2
In order to assess the security of our DIQKD protocol, we consider a modified protocol including additional quantities and which slightly rearranges some of the steps. Importantly, while the additional quantities that are defined in this new protocol are not present in the original protocol, all variables of the original protocol are still defined in this new protocol and their statistics are strictly identical (e.g. they are not affected by the step rearrangement). Hence, security in this new pro-
tocol implies security in the original protocol. We thus focus from now on this modified protocol, whose security is easier to analyze thanks to its additional variables. Our analysis borrows several steps from earlier security proofs and in particular [50]. To our knowledge, this is the first proof of DIQKD directly applicable to a Trevisan extractor.

S33

A. Modified protocol

The starting point of the modified protocol is similar to that of the DIQKD protocol in that the two parties share a
secret key K0. The variables X, Y and T are however sampled during the protocol. Also, all the quantum systems are distributed in one shot:

1. [State preparation] The parties receive their shares of n entangled quantum states, which can be seen as one initial global bipartite state ρ0.

The parties then proceed with the following steps repeated n times; each round is indexed by i = 1, . . . , n.

Repeat n times:

2. [Sampling] Alice chooses Xi uniformly, Bob sample Yi from (2) and computes Ti = χ(Yi ≠ 2). Bob sends the value of Ti to Alice. If Ti = 0, Alice overrides Xi: she sets Xi = 0.
3A [Measurement of Alice] Alice measures her quantum system in the basis defined by Xi, and stores the result in the variable Ai.
3B [Measurement of Bob] Bob measures his quantum system in the basis defined by Yi, and stores the result in the variable Bi.
4. [Basis revelation] Alice announces her measurement settings Xi.

4+. [Erasure] Bob sets Bi′ =

Bi 0

if Ti = 1 if Ti = 0.

4++. [Virtual parameter estimation] Define the score

Ui′ =

χ(Ai + Bi′ = XiYi) ⊥

if Ti = 1 if Ti = 0.

(74)

After these steps are performed, the parties proceed with the following classical post-processing steps. 5. [Error correction] Alice computes a m-bit long syndrome M ∈ {0, 1}m for her string of outcomes A = (A1, . . . , An)
and sends it to Bob. Bob reconstructs a guess A˜ of A from X, Y, B and M.

6. [Parameter estimation] Bob computes the score

Ui =

χ(A˜i ⊕ Bi′ = Xi · Yi) ⊥

if Ti = 1 if Ti = 0

(75)

for each round i = 1, . . . , n.

7-12. Steps 7 to 12 are unchanged compared to the initial protocol.

In the modified protocol, variables X, Y, T and the basis revelation are created/performed round by round instead of all at once in the DIQKD protocol. On the other hand, the quantum state is distributed at once in the beginning of the protocol, instead of being generated round by round in the DIQKD protocol. The modified protocol also defines two new registers: B′ and U′. The parameter estimation is then done with B′ instead of B. Note however that this does not change the estimation statistics s-
ince B′ only differs from B in the key-generating rounds. In the same way, one directly checks that none of these modifications affect the statistics that can be observed in the original protocol, nor the underlying states.
We write ρ the state on registers AA˜ BB′XYMUU′E at the end of the modified protocol. Here, M = (M, GEC),
and M = (M, GB, C, GA, F, GF ) is all the classical information revealed during the protocol in addition to X and T, see Fig. S6. The reduced state on AA˜ BB′XYMUE after step 6 of the modified protocol is identical to the state at the end of step 6 of the original protocol. Since the Validation and Privacy amplification steps happen after step 6 and they only depend on these registers, the security of the original protocol can be assessed by analysing the modified protocol only up to this step, wh-
ich is what we do now.

S34

B. Events

It is useful to define the following events on ρ:

Ωg : A = A˜ , i.e. Bob reconstructed Alice’s outcomes correctly Ωh : GEC = G˜ EC, i.e. the error correction hashes match

ΩPE′ :

χ(Ui′ = 0) ≤ nγ(1 − ωthr), i.e. the test on the virtual parameters passes
i

ΩPE :

χ(Ui = 0) ≤ nγ(1 − ωthr), i.e. the test passes

i

(76)

Ωc : All communication is received without modification

Ωa : The authentication tags GA GB and GF match

Ω : Ωa ∧ Ωh ∧ ΩPE, i.e. the protocol does not abort

Ωˆ : Ωc ∧ Ωa ∧ Ωg ∧ Ωh

Ω : Ωˆ ∧ ΩPE′

We write p(Ω) the probability associated with an event Ω on the state ρ. ρ∧Ω is the (typically subnormalized)

branch

of

ρ

on

which

Ω

is

true.

ρ|Ω

=

ρ∧Ω p(Ω)

is

the

state

of

the

setup

conditioned

on

the

event

Ω

being

true.

C. Correctness

Since the keys KA and KB are obtained with identical deterministic operations applied to A and A˜ respectively,

P (KA ̸= KB ∧ Ω) ≤ P (A ̸= A˜ ∧ Ω)

(77)

and it suffices to bound the probability that A and A˜ differ when the protocol does not abort. Moreover, since hashes matching is necessary for the protocol to succeed, we can further bound

P (KA ̸= KB ∧ Ω) ≤ P (A ̸= A˜ ∧ GEC = G˜ EC)

≤ P (GEC = G˜ EC|A ̸= A˜ )

(78)

= P (HEC = H˜ EC|A ̸= A˜ )

≤ εh,

where we use the fact that GEC = HEC ⊕ kotp for some kotp and unencrypted hash HEC (similarly for G˜ EC with the same kotp) and Eq. (42). Hence, comparing to Eq. (39), we have correctness with εcorr = εh.

D. Secrecy

Following Eq. (40), our protocol is εsec-secret if

P

(Ω)

1 2

||ETrev

(ρ|Ω

)KA

E

− UKA

⊗ (ρ|Ω)E ||1

=

1 2

||ETrev

(ρ∧Ω

)KA

E

− UKA

⊗ (ρ∧Ω)E ||1

≤

εsec,

(79)

where denote

Eve’s full side information consists of E = (X, T, by Ωc the complement of event Ω, and that ETrev

M, is a

E). By noticing linear operator,

that ρ∧Ω = ρ∧Ω∧Ωc + ρ∧Ω∧Ωcc , where we we can bound the LHS using the triangle

inequality

1 2

||ETrev

(ρ∧Ω

)KA

E

−

UKA

⊗

(ρ∧Ω)E

||1

≤

1 2

||ETrev

(ρ∧Ω∧Ωc

)KA

E

−

UKA

⊗

(ρ∧Ω∧Ωc )E

||1

+

1 2

||ETrev

(ρ∧Ω∧Ωcc

)KA

E

−

UKA

⊗

ρ∧Ω∧Ωcc

E ||1

≤

1 2

||ETrev

(ρ∧Ω∧Ωc

)KA

E

−

UKA

⊗

(ρ∧Ω∧Ωc )E

||1

+

3εh.

(80)

S35

In the last line, we use the fact that the trace distance between normalized states is bounded by one and hence the trace distances between subnormalized states (with the same norm) is bounded by their norm. This allows us to bound the right-most trace distance by the norm of the state ρ∧Ω∧Ωcc , i.e. by the probability

P (Ω ∧ Ωcc) = P (Ωa ∧ Ωh ∧ ΩPE ∧ Ωcc) ≤ P (Ωa ∧ Ωcc) = P Ω(a1) ∧ Ω(a2) ∧ Ω(a3) ∧ Ω(c1) ∧ Ω(c2) ∧ Ω(c3) c
= P Ω(a1) ∧ Ω(a2) ∧ Ω(a3) ∧ Ω(c1) c + P Ω(a1) ∧ Ω(a2) ∧ Ω(a3) ∧ Ω(c1) ∧ Ω(c2) c
+ P Ω(a1) ∧ Ω(a2) ∧ Ω(a3) ∧ Ω(c1) ∧ Ω(c2) ∧ Ω(c3) c
≤ P Ω(a1) ∧ Ω(c1) c + P Ω(a2) ∧ Ω(c2) c + P Ω(a3) ∧ Ω(c3) c
≤ P Ω(a1)| Ω(c1) c + P Ω(a2)| Ω(c2) c + P Ω(a3)| Ω(c3) c

(81)

≤ 3εh,

where we splitted the events Ωa = Ω(a1) ∧ Ω(a2) ∧ Ω(a3) and Ωc = Ω(c1) ∧ Ω(c2) ∧ Ω(c3) into the relevant parts corresponding to each of the three authentication checks (the one to authenticate the communications related to T, the one related to (X, GEC, C), and the one related to F ). Concretely, P Ω(a1)| Ω(c1) c is the probability that a third party, knowing
the message and tag pair (T, t = GB(T)), chooses another valid pair (T′, t˜) ̸= (T, t) for Alice, i.e. such that GB(T′) = t˜. Since the new pair is valid, we must have T′ ̸= T (otherwise either (T′, t˜) = (T, t), or GB(T′) ̸= t˜). Hence it is enough to consider the case where T ̸= T′, then the probability

P Ω(a1)| Ω(c1) c = P GB(T′) = t˜|GB(T) = t ≤ εh

(82)

is bounded by Eq. (48) since we use an authentication scheme based on a ASU family of hash functions (see Sec. S9 A for more details).
Similarly, noting that ρ∧Ω∧Ωc = ρ∧Ω∧Ωc∧Ωg + ρ∧Ω∧Ωc∧Ωcg , we can further bound the quantity

1 2

||ETrev

(ρ∧Ω

)KA

E

−

UKA

⊗

(ρ∧Ω)E

||1

≤

1 2

||ETrev

(ρ∧Ω∧Ωc

∧Ωg

)KA

E

−

UKA

⊗

ρ∧Ω∧Ωc ∧Ωg

E ||1

+

1 2

||ETrev

(ρ∧Ω∧Ωc

∧Ωcg

)KA

E

−

UKA

⊗

ρ∧Ω∧Ωc ∧Ωcg

||1 + 3εh
E

≤

1 2

||ETrev

(ρ∧Ω∧Ωc

∧Ωg

)KA

E

−

UKA

⊗

ρ∧Ω∧Ωc ∧Ωg

E ||1 + 4εh

(83)

because

P (Ω ∧ Ωc ∧ Ωcg) = P (Ωa ∧ Ωh ∧ ΩPE ∧ Ωc ∧ Ωcg) ≤ P (Ωh ∧ Ωcg) ≤ P (Ωh|Ωcg) ≤ εh.

(84)

Writing Ωˆ = Ωc ∧ Ωa ∧ Ωg ∧ Ωh, Ω = Ωˆ ∧ ΩPE’ and noticing that Ωg ∧ ΩPE = Ωg ∧ ΩPE′ , we can rewrite this bound as

1 2

||ETrev

(ρ∧Ω

)KA

E

−

UKA

⊗

(ρ∧Ω)E

||1

≤

1 2

||ETrev

(ρ∧Ωˆ ∧ΩPE′

)KA

E

− UKA

⊗

ρ∧Ωˆ ∧ΩPE′

||1 + 4εh
E

=

1 2

||ETrev

(ρ∧Ω

)KA

E

− UKA

⊗ (ρ∧Ω)E

||1

+ 4εh

(85)

It remains to bound the first term on the RHS of the above expression. To do so, we consider critical values on the unknown probabilities P (Ωˆ |ΩPE’) and P (ΩPE’), and analyse the situation differently depending on how these probabilities compare to these critical values. Namely, consider three cases for the quantum state ρ:
Case 1: P (Ωˆ |ΩPE’) ≤ εs2

S36

Case 2: P (ΩPE’) ≤ εEA

Case 3: Neither of the above are true

These cases may overlap, but at least one of them must always be true. It is thus sufficient to bound Eq. (85) in each of the three cases individually.
In case 1, we have

1 2

||ETrev

(ρ∧Ω

)KA

E

−

UKA

⊗

(ρ∧Ω)E

||1

≤

P (Ω)

=

P (Ωˆ |ΩPE′ )P (ΩPE′ )

≤

εs2.

(86)

In case 2, we have

1 2

||ETrev

(ρ∧Ω

)KA

E

−

UKA

⊗

(ρ∧Ω)E

||1

≤

P (Ω)

=

P (Ωˆ |ΩPE′ )P (ΩPE′ )

≤

εEA.

(87)

We now focus on case 3, for which P (Ωˆ |ΩPE’) > εs2 and P (ΩPE’) > εEA. In this case, we use Proposition 1 to bound the trace distance via a condition on a smooth min-entropy: according to Proposition 1, as long as the length of the extracted string ℓ = |KA| ≥ 1 is smaller than

ℓ ≤ Υ4/ln 2

Hmεsin(A|E)(ρ|ΩPE’ )∧Ωˆ − 6 − 5 log

1 εPA

,

(88)

we have the guarantee that

1 2

||ETrev

((ρ|ΩPE’

)∧Ωˆ

)KA

E

−

UKA

⊗

(ρ|ΩPE’ )∧Ωˆ E ||1 ≤ εPA + 2εs,

(89)

which implies (since ρ∧Ω = P (ΩPE’)(ρ|ΩPE’ )∧Ωˆ and P (ΩPE’) ≤ 1)

1 2

||ETrev

(ρ∧Ω

)KA

E

−

UKA

⊗

(ρ∧Ω)E

||1

≤

εPA

+

2εs.

(90)

Under the condition (88), we thus obtain secrecy for our key by grouping all three cases together and setting

εsec = max(εEA, εPA + 2εs) + 4εh.

(91)

This last expression follows from noting that εs2 ≤ εs ≤ εPA + 2εs since 1 > εs, εPA ≥ 0. We are thus left with the task of lower-bounding Hmεsin(A|E)(ρ|ΩPE’ )∧Ωˆ . Here, Eve’s information is given by E = (X, T, M, E), where T is a function of Y, so it suffices to bound Hmεsin(A|XYME)(ρ|ΩPE’ )∧Ωˆ .
Since the probability of the event Ωˆ on the conditional normalized state ρ|ΩPE′ is greater than εs2, we can apply Lemma 10 of [69] to obtain

Hmεsin(A|XYME)(ρ|ΩPE′ )∧Ωˆ ≥ Hmεsin(A|XYME)ρ|ΩPE′ ≥ Hmεsin(A|XYE)ρ|ΩPE′ − |M|,

(92)

where in the second line we have applied a chain rule for smoothed min-entropy (see for example lemma 11 in the
Supplementary Material of Ref [70]). Here, |M| is the total amount of classical information exchanged between Alice and Bob during the protocol, measured in bit units, including the error correction syndrome being sent by Alice to Bob in Step 5 of the protocol:

|M| = |M| + |GEC| + |GB| + |C| + |GA| + |F | + |GF |

= m + 64 + 64 + 1 + 64 + 1 + 64

(93)

= m + 258

We are thus left with bounding Hmεsin(A|XYE)ρ|ΩPE′ . Given the registers that appear here, we can do this on the state after step 4++ of the modified protocol. From now on, we thus focus on the state ρ|ΩPE′ at this stage, conditioned on ΩPE’ being fulfilled, and omit the subscript in the remaining of this section.

S37

Following the approach of [49], we use the chain rule given in Eq. (6.57) of [53], to express the min entropy of Alice’s outcomes in terms of a joint entropy and an entropy on Bob’s outcomes only:

Hmεsin(A|XYE)

≥

Hmεsi′n(AB′|XYE)

−

H εs′′
max

(B′

|AXYE

)

−

3ϑεs −εs ′ −2εs ′′

≥

Hmεsi′n(AB′|XYE)

−

H εs′′
max

(B′

|XY

E

)

−

3ϑεs −εs ′ −2εs ′′

(94)

where εs′ + 2εs′′ < εs and

ϑε

=

log

1

−

√1 1

−

ε2

.

(95)

We are then left with bounding two entropy terms. We do this for each term individually, each time with an application of (a different version of) the Entropy Accumulation Theorem (EAT).

1. Lower-bounding Hmεsi′n(AB′|XYE)

We first introduce the concepts of EAT channels and tradeoff functions, which are involved in applying the EAT.

Definition 15. A sequence of EAT channels is a sequence M1, M2, . . . , Mn where each Mi is a channel from a register Ri−1 to registers DiSiSi′Ri, which satisfies the following properties:

• All Di are classical registers with a common alphabet D, and all Si have the same finite dimension.

•

For each Mi, form Pi ◦ M′i,

the value of where M′i is

Di is determined from the registers a channel from Ri−1 to SiSi′Ri, and

SiSi′ Pi is

alone. Formally, this means Mi a channel from SiSi′ to DiSiSi′ of

is of the the form

Pi(ρSiSi′ ) =

(ΠSi,s ⊗ ΠSi′,s′ )ρSiSi′ (ΠSi,s ⊗ ΠSi′,s′ ) ⊗ |d(s, s′)⟩⟨d(s, s′)|Di ,

s∈S ,s′ ∈S ′

(96)

where S ×S

′

{ΠSi,s}s∈S and {ΠSi′,s′ }s′∈S′ are → D is a deterministic function.

families

of

orthogonal

projectors

on

Si

and

Si′

respectively,

and

d

:

• For any normalized state ρ0R0E, the state ρ = (Mn ◦ · · · ◦ M1 ⊗ IE) ρ0R0E satisfies the Markov conditions [71]

I(S1 . . . Si−1 : Si′|S1′ . . . Si′−1E)ρ = 0 ∀i = 1, 2, . . . , n.

(97)

Definition 16. Let fmin be a real-valued affine function defined on probability distributions over the alphabet D. It is called a min-tradeoff function for a sequence of EAT channels {Mi} if for any distribution q on D, we have

fmin(q)

≤

inf
σ ∈Σi (q )

H (Si |Si′ R)σ

∀i = 1, 2, . . . , n,

(98)

where Σi(q) denotes the set of states of the form (Mi ⊗ IR)(ωRj−1R) such that the reduced state on Di has distribution q. Analogously, a real-valued affine function fmax defined on probability distributions over D is called a max-tradeoff
function if

fmax(q) ≥ sup H(Si|Si′R)σ ∀i = 1, 2, . . . , n.

(99)

σ ∈Σi (q )

The infimum and supremum of an empty set are defined as +∞ and −∞ respectively.

We now follow the analysis of [72]. Here, we notice that steps 2, 3, 4+ and 4++ of our modified protocol correspond to a standard CHSH test protocol as studied in [72, 73]. Hence, they can be modelled as an infrequent-sampling bipartite EAT channel (see [72, 73]), which is to say each iteration of those steps corresponds to an EAT channel M : Ri−1 → AiBi′XiYiUiRi of the form

M[ρ] = γMtest[ρ] + (1 − γ)Mgen[ρ] ⊗ | ⊥⟩⟨⊥ |Ui ,

(100)

where Mtest Definition 15

: Ri−1 above,

→ we

AiBi′XiYiUiRi are implicitly

, with ⟨⊥ |Mtest[ρ]| ⊥⟩ = 0 and Mgen : Ri−1 → identifying AiBi′ with Si and XiYi with Si′. Note

AiBi′XiYiRi. (In terms of that these channels indeed

satisfy the Markov conditions (97) under this identification, hence they are valid EAT channels.) As shown in [72], one

can construct a min-tradeoff function for these channels using the function gt defined in (61). This yields the following bound on the conditional smooth min-entropy Hmεsin(AB′|XYE)ρ|ΩPE′ :

S38

Theorem 1 (Theorem 3 of [72]). For the quantities defined above, the following bound [74] holds:

where

Hmεsi′n(AB′|XYE)ρ|ΩPE′ > n gt (ωthr)

−

ϑεs ′ α′ − 1

−

α′ α′ −

1

log

1 P (ΩPE′ )

+

n

inf
ω∈Q˜

∆

(ft,

ω)

−

(α′

−

1)V

(ft, q(ω))

− n(α′ − 1)2Kα′ (ft)

q(ω) = (γ(1 − ω), γω, 1 − γ)

√

√

Q˜ =

1 − 1/ 2

2

,

1

+

1/ 2

2

∆(ft, ω) = η(ω) − ft(q(ω))

V

(ft, p)

=

ln 2 2

log 33 +

2
2 + Varp(ft)

Kα′ (ft)

=

6(2

−

1 α′)3

ln

2

2(α′ −1)(2+Max(ft )−MinQ˜ γ

(ft ))

ln3

22+Max(ft)−MinQ˜γ (ft) + e2

.

(101) (102)

Here, we used definitions Equations (61) to (65). Notice that η(ω) is an increasing function on ω ∈

3 4

,

ωmax

,

and

gt(ω) is a lower bound on η(ω) tangent at t. Therefore, we have gt(δ1) ≥ gt(δ0) for t ∈

3 4

,

ωmax

.

Focusing

on

this

domain, we can compute the maximum of ft over all distributions:

Max(ft) = gt(1).

(103)

The minimum of ft over all distributions Q˜γ = {q(ω)|ω ∈ Q˜} compatible with the sampling probability γ and with quantum theory is then given by

MinQ˜γ (ft) = gt(ωmin),

√

where

ωmin

=

1−1/ 2

2 is the lowest CHSH winning probability compatible with quantum theory.

(104)

2.

Upper-bounding

H εs′′
max

(B′

|XYE

)

We define a sequence of EAT channels M˜ i that apply steps 2, 3B, 4 and 4+ of the modified protocol (note that this means they do not produce the registers Ai). As above, these maps indeed satisfy the Markov conditions (97), identifying Bi′ with Si and XiYi with Si′. However, we cannot apply the EAT directly to bound Hmεsa′x′ (B′|XYE), because of a technical issue that the EAT would require the conditioning event ΩPE′ to be determined by the registers B′XYE alone, which is not the case here. Hence-
 we instead apply some intermediate results from [75], in a slightly
different order as compared to the derivation of the EAT. We first list the relevant results — in these statements, Hα denotes a particular form of quantum conditional R´enyi entropy (see e.g. [53, 75] for explanations of other versions),
namely:

Hα(A|B)ρ

:= −Dα(ρAB∥IA ⊗ ρB),

where Dα(ρ∥σ) :=

α

α −

1

log

ρ σ 1 1−α 2 2α

2
.
2α

(105)

Lemma 1 (Prop. 4.5 in [75]). Consider a sequence of EAT channels {Mi} and a state of the form ρ = (Mn ◦

·· h

· ◦ M1 ∈ R, ε

⊗ IE ) ρ0R0E ∈ (0, 1), α ∈

for (1, 1

some + 2/V

normalized ′), where V

′ρ0R=0

E. Let fmax be 2 ⌈||∇fmax||∞⌉

a max-tradeoff function for {Mi}, + 2 log(1 + 2dS) with dS being the

and consider any dimension of the

systems Si. Then for any event Ω on D that implies fmax(freqd) ≤ h for all d ∈ Ω, we have

H

1 α

(S|S′

E

)ρ|Ω

<

nh

+

nα

− 4

1V

′2

+

α

α −

1

log

P

1 (Ω)

.

(106)

S39

Lemma 2 (Lemma B.6 of [75]). Let ρAB be a normalized state of the form x pxρAB|x where {px} is a probability distribution over X . Then for any x ∈ X and any α ∈ (1, 2], we have

H

1 α

(A|B

)ρ|x

≤

H 1 (A|B)ρ α

+

α

α −

1

log

1 px

.

(107)

Lemma 3 (Lemma B.10 of [75]). For any normalized state ρAB and any ε ∈ (0, 1), α ∈ (1, 2], we have

Hmε ax(A|B)ρ

≤

H1 α

(A|B)ρ

+

ϑε α−

1.

(108)

To apply these lemmas, we first note that since the register Bi′ is set to a deterministic value whenever Yi = 2 (which happens with probability 1 − γ), the following bound always holds, without needing to consider the conditioning event ΩPE′ :

H (Bi′|XiYiR)(M˜ ⊗IR)(ωRi−1R) ≤ γ.

(109)

This means that by choosing a max-tradeoff function that simply takes the constant value γ, we can first apply Lemma 1 without conditioning on any event, to conclude that the unconditioned state ρ in our above analysis satisfies

H1 α′′

(B′|XYE)ρ

<

nγ

+

n

α′′

− 4

1V

′2,

(110)

for any α′′ ∈ (1, 1 + 2/V ′), with V ′ = 2 log 5 (notice that ⌈||∇fmax||∞⌉ = 0 since fmax is a constant function). Only now do we condition on ΩPE′ by applying Lemma 2 [76], which yields

H

1 α′′

(B′ |XYE )ρ|ΩPE′

<

nγ

+

n

α′′ − 4

1

V

′2

+

α′′ α′′ −

1

log

P

1 (ΩPE′ )

.

(111)

Finally, applying Lemma 3, we get the bound

H εs′′
max

(B′

|XYE

)ρ|ΩPE′

<

nγ

+

n

α′′

− 4

1

V

′2

+

ϑεs ′′ α′′ − 1

+

α′′ α′′ −

1

log

P

1 (ΩPE′ )

.

(112)

3. Bringing the pieces together
To conclude the analysis of case 3, we remember that P (ΩPE′ ) > εEA. Using this bound in Equations (101) and (112), and merging the result together with Equations (88) and (91) to (94), we obtain Proposition 2 for this case, which concludes the proof.

[1] L. J. Stephenson, D. P. Nadlinger, B. C. Nichol, S. An, P. Drmota, T. G. Ballance, K. Thirumalai, J. F. Goodwin, D. M. Lucas, and C. J. Ballance, High-Rate, High-Fidelity Entanglement of Qubits Across an Elementary Quantum Network, Phys. Rev. Lett. 124, 110501 (2020).
[2] P. L. W. Maunz, High Optical Access Trap 2.0, Technical Report SAND-2016-0796R (Sandia National Laboratories, Albuquerque, New Mexico, 2016).
[3] J. Reh´aˇcek, Z. Hradil, E. Knill, and A. I. Lvovsky, Diluted Maximum-Likelihood Algorithm for Quantum Tomography, Phys. Rev. A 75, 042108 (2007).
[4] R. G. Brown, Dieharder: A random number test suite, https://webhome.phy.duke.edu/~rgb/General/dieharder.php. [5] P. L’Ecuyer and R. Simard, Testu01: A c library for empirical testing of random number generators, ACM Trans. Math.
Softw. 33, 10.1145/1268776.1268777 (2007). [6] V. Scarani, H. Bechmann-Pasquinucci, N. J. Cerf, M. Duˇsek, N. Lu¨tkenhaus, and M. Peev, The security of practical
quantum key distribution, Rev. Mod. Phys. 81, 1301 (2009). [7] In principle, authentication is possible with a weakly correlated partially secret shared bit string [77]. [8] J. Katz and Y. Lindell, Introduction to Modern Cryptography, Second Edition, 2nd ed. (Chapman & Hall/CRC, 2014). [9] C. H. Bennett and G. Brassard, Quantum cryptography: public key distribution and coin tossing., Theor. Comput. Sci.
560, 7 (1984). [10] Y. Zhao, C.-H. F. Fung, B. Qi, C. Chen, and H.-K. Lo, Quantum hacking: Experimental demonstration of time-shift attack
against practical quantum-key-distribution systems, Phys. Rev. A 78, 042333 (2008).

S40
[11] L. Lydersen, C. Wiechers, C. Wittmann, D. Elser, J. Skaar, and V. Makarov, Hacking commercial quantum cryptography systems by tailored bright illumination, Nat. Photonics 4, 686 (2010).
[12] I. Gerhardt, Q. Liu, A. Lamas-Linares, J. Skaar, C. Kurtsiefer, and V. Makarov, Full-field implementation of a perfect eavesdropper on a quantum cryptography system, Nat. Commun. 2, 10.1038/ncomms1348 (2011).
[13] H. Weier, H. Krauss, M. Rau, M. Fu¨rst, S. Nauerth, and H. Weinfurter, Quantum eavesdropping without interception: an attack exploiting the dead time of single-photon detectors, New J. Phys. 13, 073024 (2011).
[14] S. Pirandola, U. L. Andersen, L. Banchi, M. Berta, D. Bunandar, R. Colbeck, D. Englund, T. Gehring, C. Lupo, C. Ottaviani, J. L. Pereira, M. Razavi, J. S. Shaari, M. Tomamichel, V. C. Usenko, G. Vallone, P. Villoresi, and P. Wallden, Advances in quantum cryptography, Adv. Opt. Photon. 12, 1012 (2020).
[15] S. Pironio, A. Acin, N. Brunner, N. Gisin, S. Massar, and V. Scarani, Device-independent quantum key distribution secure against collective attacks, New J. Phys. 11, 045021 (2009).
[16] N. Brunner, D. Cavalcanti, S. Pironio, V. Scarani, and S. Wehner, Bell nonlocality, Rev. Mod. Phys. 86, 419 (2014). [17] S. Pironio, A. Ac´ın, S. Massar, A. Boyer de la Giroday, D. N. Matsukevich, P. Maunz, S. Olmschenk, D. Hayes, L. Luo,
T. A. Manning, and C. Monroe, Random numbers certified by Bell’s theorem, Nature 464, 1021 (2010). [18] M. Kessler and R. Arnon-Friedman, Device-independent randomness amplification and privatization, IEEE Journal on
Selected Areas in Information Theory 1, 568 (2020). [19] G. Murta, S. B. van Dam, J. Ribeiro, R. Hanson, and S. Wehner, Towards a realization of device-independent quantum key
distribution, Quantum Sci. Technol. 4, 035011 (2019). [20] B. Hensen, H. Bernien, A. E. Dr´eau, A. Reiserer, N. Kalb, M. S. Blok, J. Ruitenberg, R. F. L. Vermeulen, R. N. Schouten,
C. Abella´n, W. Amaya, V. Pruneri, M. W. Mitchell, M. Markham, D. J. Twitchen, D. Elkouss, S. Wehner, T. H. Taminiau, and R. Hanson, Loophole-free Bell inequality violation using electron spins separated by 1.3 kilometres, Nature 526, 682 (2015). [21] L. K. Shalm, E. Meyer-Scott, B. G. Christensen, P. Bierhorst, M. A. Wayne, M. J. Stevens, T. Gerrits, S. Glancy, D. R. Hamel, M. S. Allman, et al., Strong loophole-free test of local realism, Phys. Rev. Lett. 115, 250402 (2015). [22] M. Giustina, M. -
A. Versteegh, S. Wengerowsky, J. Handsteiner, A. Hochrainer, K. Phelan, F. Steinlechner, J. Kofler, J.-˚A. Larsson, C. Abell´an, et al., Significant-loophole-free test of bell’s theorem with entangled photons, Phys. Rev. Lett. 115, 250401 (2015). [23] W. Rosenfeld, D. Burchardt, R. Garthoff, K. Redeker, N. Ortegel, M. Rau, and H. Weinfurter, Event-Ready Bell Test Using Entangled Atoms Simultaneously Closing Detection and Locality Loopholes, Phys. Rev. Lett. 119, 010402 (2017). [24] K. Heshami, D. -
G. England, P. C. Humphreys, P. J. Bustard, V. M. Acosta, J. Nunn, and B. J. Sussman, Quantum memories: emerging applications and recent advances, Journal of Modern Optics 63, 2005 (2016). [25] A. K. Ekert, Quantum cryptography based on Bell’s theorem, Phys. Rev. Lett. 67, 661 (1991). [26] R. Arnon-Friedman, F. Dupuis, O. Fawzi, R. Renner, and T. Vidick, Practical device-independent quantum cryptography via entropy accumulation, Nat. Commun. 9, 459 (2018). [27] Alternatively, these could also be g-
enerated as the protocol runs. [28] T. Richardson and R. Urbanke, Modern Coding Theory (Cambridge: Cambridge University Press, 2008). [29] L. Wang and Y. Kim, Linear code duality between channel coding and Slepian-Wolf coding, in 53rd Annual Allerton Conference on Communication, Control, and Computing (Allerton), Monticello, IL, USA (2015) pp. 147–152. [30] Y. Polyanskiy, H. V. Poor, and S. Verdu, Channel Coding Rate in the Finite Blocklength Regime, IEEE Trans. Inf. Theory. 56, 2307 (2010). [31] -
E. Arikan, Channel Polarization: A Method for Constructing Capacity-Achieving Codes for Symmetric Binary-Input Memoryless Channels, IEEE Trans. Inf. Theory. 55, 3051 (2009). [32] S. H. Hassani, K. Alishahi, and R. L. Urbanke, Finite-Length Scaling for Polar Codes, IEEE Trans. Inf. Theory. 60, 5875 (2014). [33] R. G. Gallager, Low-Density Parity-Check Codes (Cambridge, MA: MIT Press, 1963). [34] T. J. Richardson and R. L. Urbanke, The capacity of low-density parity-check codes under message-passing-
 decoding, IEEE Trans. Inf. Theory. 47, 599 (2001). [35] I. Sason and R. Urbanke, Parity-check density versus performance of binary linear block codes over memoryless symmetric channels, IEEE Trans. Inf. Theory 49, 1611 (2003). [36] T. J. Richardson, M. A. Shokrollahi, and R. L. Urbanke, Design of capacity-approaching irregular low-density parity-check codes, IEEE Trans. Inf. Theory. 47, 619 (2001). [37] A. Shokrollahi, New sequences of linear time erasure codes approaching channel capacity, Proc.-
 IEEE Int. Symp. Information Theory and its Applications, Honolulu, HI , 65 (1999). [38] P. Oswald and A. Shokrollahi, Cappacity-achieving sequences for the erasure channel, IEEE Trans. Inf. Theory 48, 3017–3028 (2002). [39] H. D. Pfister, I. Sason, and R. Urbanke, Capacity-achieving ensembles for the binary erasure channel with bounded complexity, IEEE Trans. Inf. Theory 51, 2352–2379 (2005). [40] A. Amraoui, A. Montanari, T. Richardson, and R. Urbanke, Finite-Length Scaling for Iteratively Decod-
ed LDPC Ensembles, IEEE Trans. Inf. Theory. 55, 473 (2009). [41] M. Lentmaier, A. Sridharan, D. J. Costello, and K. S. Zigangirov, Iterative Decoding Threshold Analysis for LDPC Convolutional Codes, IEEE Trans. Inf. Theory. 56, 5274 (2010). [42] S. Kudekar, T. Richardson, and R. L. Urbanke, Spatially Coupled Ensembles Universally Achieve Capacity Under Belief Propagation, IEEE Trans. Inf. Theory. 59, 7761 (2013).

S41
[43] D. G. M. Mitchell, M. Lentmaier, and D. J. Costello, Spatially Coupled LDPC Codes Constructed From Protographs, IEEE Trans. Inform. Theory 61, 4866–4889 (2015).
[44] J. Chen, D. He, and A. Jagmohan, Slepian-wolf code design via source-channel correspondence, in 2006 IEEE International Symposium on Information Theory (2006) pp. 2433–2437.
[45] J. Zhang and M. Fossorier, Shuffled iterative decoding, IEEE Trans. Commun. 53, 209 (2005). [46] D. E. Hocevar, A reduced complexity decoder architecture via layered decoding of LDPC code, Proc. IEEE Workshop
Signal processing and Systems (SIPS. 04), Austin, TX , 107 (2004). [47] M. Lentmaier, M. M. Prenda, and G. P. Fettweis, Efficient message passing scheduling for terminated LDPC convolutional
codes, Proc. IEEE Int. Symp. Inf. Theory, St. Petersburg, Russia , 1826–1830 (2011). [48] A. Iyengar, M. Papaleo, P. Siegel, J. Wolf, A. Vanelli-Coralli, and G. Corazza, Windowed decoding of protograph-based
LDPC convolutional codes over erasure channels, IEEE Trans. Inf. Theory 58, 2303–2320 (2012). [49] R. Arnon-Friedman, R. Renner, and T. Vidick, Simple and Tight Device-Independent Security Proofs, SIAM J. Comput.
48, 181 (2019). [50] E. Y.-Z. Tan, P. Sekatski, J.-D. Bancal, R. Schwonnek, R. Renner, N. Sangouard, and C. C.-W. Lim, Improved DIQKD
protocols with finite-size analysis, arXiv:2012.08714 (2020). [51] In more detail: since here we have n independent trials of a Bernoulli variable with parameter q, the number of Wi = 1
trials is binomially distributed with standard deviation nq(1 − q). Hence the fraction of such trials is a random variable
with standard deviation q(1 − q)/n, and is approximately normally distributed for large n. This implies that choosing the (one-sided) accept threshold 3 standard deviations away from q ensures that the accept probability is well over 99%, as long as the devices perform as expected. [52] C. Portmann and R. Renner, Security in Quantum Cryptography, arXiv:2102.00021 (2021). [53] M. Tomamichel, Quantum Information Processing with Finite Resources, Springer International Publishing (2016). [54] This fo-
llows straightforwardly from the fact that in either optimization, for any feasible σB, the normalized state σˆB = σB/Tr (σB) is another feasible point, and it yields an objective value at least as large as that for σB. [55] M. Tomamichel, R. Colbeck, and R. Renner, Duality Between Smooth Min- and Max-Entropies, IEEE Trans. on Inf. Theory 56, 4674 (2010). [56] D. R. Stinson, Universal hashing and authentication codes, Designs, Codes and Cryptography 4, 369 (1994). [57] H. Krawczyk, LFSR-based hash-
ing and authentication, in Advances in Cryptology - CRYPTO ’94 in Lecture Notes in Computer Science, Vol. 839 (Springer, 1994) pp. 129–139. [58] W. Dai and T. Krovetz, VHASH Security, Cryptology ePrint Archive, http://eprint.iacr.org/2007/338. [59] M. N. Wegman and L. Carter, New hash functions and their use in authentication and set equality, J. Comput. Syst. Sci. 22, 265 (1981). [60] C. Portmann, Key recycling in authentication, IEEE Trans. Inf. Th. 60, 4383 (2014). [61] J.-D. Bancal, UVMAC sour-
ce code, https://github.com/jdbancal/uvmac. [62] T. Krovetz, VMAC source code, https://www.fastcrypto.org/vmac. [63] A. De, C. Portmann, T. Vidick, and R. Renner, Trevisan’s Extractor in the Presence of Quantum Side Information, SIAM J. Comput. 41, 915 (2012). [64] W. Mauerer, C. Portmann, and V. B. Scholz, A modular framework for randomness extraction based on Trevisian’s construction, arXiv:1212.0520 10.48550/arXiv.1212.0520 (2012). [65] X. Ma, Z. Zhang, and X. Tan, Explicit combinatorial design-
, arXiv:1109.6147 (2011). [66] P. Bierhorst, E. Knill, S. Glancy, Y. Zhang, A. Mink, S. Jordan, A. Rommal, Y.-K. Liu, B. Christensen, S. W. Nam, M. J. Stevens, and L. K. Shalm, Experimentally Generated Randomness Certified by the Impossibility of Superluminal Signals, Nature 556, 223 (2018). [67] W. Mauerer, Trevisan’s extractor source code, https://github.com/wolfgangmauerer/libtrevisan. [68] In principle, we can pick any positive “threshold” value µ to split the two cases: this would give the fi-
nal result that if ℓ ≤ Υb (Hmεsin(C|Q)ρ − 6 − 4 log(1/εPA) − log(1/µ)), then implementing the extractor with ε1 = εPA/ℓ yields a bound of max (µ, εPA) + 2εs in Eq. (54). However, observe that for a fixed value of max (µ, εPA), the optimal key length given by this expression is always obtained by setting µ and εPA to be equal, hence the choice in this proof. [69] M. Tomamichel and A. Leverrier, A largely self-contained and complete security proof for quantum key distribution, Quantum 1, 14 (2017). -
[70] S. Winkler, M. Tomamichel, S. Hengl, and R. Renner, Impossibility of Growing Quantum Bit Commitments, Phys. Rev. Lett. 107, 090502 (2011). [71] This condition is slightly stricter than necessary, as the EAT only requires the Markov conditions to hold for the specific state it is applied to [73, 75]. However, for brevity we incorporate this into the definition of EAT channels, as was done in [49, 72]. [72] W.-Z. Liu, M.-H. Li, S. Ragy, S.-R. Zhao, B. Bai, Y. Liu, P. J. Brown, J. Zhang, R. Colb-
eck, J. Fan, Q. Zhang, and J.-W. Pan, Device-independent randomness expansion against quantum side information, Nat. Phys. 17, 448 (2021). [73] F. Dupuis and O. Fawzi, Entropy Accumulation With Improved Second-Order Term, IEEE Trans. Inf. Theory 65, 7596 (2019). [74] Note that the expressions for V (ft, p) and Kα′ (ft) here differ slightly from those appearing in the Supplementary Information of Ref. [72]. Here, following [73], we took the expressions given in Eqs. (16) and (17) of the Supplementa-
ry Information of [72] but replace dA by 4 (the dimension of the registers AiBi′). Also, we avoided applying the inequality α′ > 1. [75] F. Dupuis, O. Fawzi, and R. Renner, Entropy Accumulation, Commun. Math. Phys. 379, 867 (2020).

S42

[76] This is valid because Lemma 2 does not require that the conditioning event is defined entirely by the registers in the state

being considered — it only have such a decomposition,

requires ρB′ XYE

that the state has a decomposition of the form ρ = = P (ΩPE′ )(ρ|ΩPE′ )B′XYE + P (ΩcPE′ )(ρ|ΩcPE′ )B′XYE ,

x pxρ|x. In this case, we indeed and can thus apply the lemma.

[77] R. Renner and S. Wolf, Unconditional authenticity and privacy from an arbitrarily weak secret, in Advances in Cryptology -

CRYPTO ’03 in Lecture Notes in Computer Science (Springer, 2003) pp. 78–95.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:20.947Z
- **Text Length:** 180005 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
