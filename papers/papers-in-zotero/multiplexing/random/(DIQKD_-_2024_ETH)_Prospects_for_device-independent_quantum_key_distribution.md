# PDF Document: (DIQKD - 2024 ETH) Prospects for device-independent quantum key distribution.pdf

**File Path:** (DIQKD - 2024 ETH) Prospects for device-independent quantum key distribution.pdf

**Processed Date:** 2026-02-10T18:14:30.238Z

**File Size:** 2192.36 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 386

**Title:** (DIQKD - 2024 ETH) Prospects for device-independent quantum key distribution

**Collection:** Multiplexing > Random

---

## Extracted Text Content

arXiv:2111.11769v2 [quant-ph] 11 Jan 2024

Prospects for device-independent quantum key distribution
A thesis submitted to attain the degree of DOCTOR OF SCIENCES of ETH ZURICH
(Dr. sc. ETH Zurich) presented by
Ying Zhe Ernest Tan
accepted on the recommendation of Prof. Dr. Renato Renner, examiner Prof. Dr. Norbert Lu¨tkenhaus, co-examiner Prof. Dr. Marco Tomamichel, co-examiner
2021

Abstract
Device-independent quantum key distribution (DIQKD) aims to achieve secure key distribution with only minimal assumptions, by basing its security on the violation of Bell inequalities. While this offers strong security guarantees, it comes at the cost of only being able to certify positive keyrates for devices with low levels of noise, which are challenging to implement experimentally. In recent years, the gap between the theoretical requirements and experimental performance was narrowed by severa-
l landmark results, making DIQKD a promising avenue for investigation. In this thesis, we present security proofs for DIQKD protocols based on various techniques that further improve the keyrates and noise tolerance.
In particular, we derive methods for securely computing the keyrates of a wider variety of DIQKD protocols than previously studied. These methods are also able to account for the techniques of noisy preprocessing and random key measurements, which can improve the performance of DIQKD protocols. Furthermore, we also investigate the possibility of advantage distillation in DIQKD, which refers to using two-way communication in the information-reconciliation step of the protocol. With these approaches-
, it is possible in principle for the devices in existing loophole-free Bell tests to achieve positive asymptotic keyrates in DIQKD, which is to say that a secure key could be produced given sufficiently many protocol rounds.
This naturally raises the question of precisely how many rounds would be required in order for an experiment of finite length to be considered a secure demonstration of DIQKD. To address this, we also perform a finite-size security analysis for protocols based on combinations of some of these techniques, excluding advantage distillation. The analysis is based on a fairly recent result known as the entropy accumulation theorem, which simultaneously accounts for finite-size effects and non-IID attac-
ks on the protocol. We improve on previous security proofs based on this theorem by using tighter finite-size bounds and incorporating some combinations of the techniques mentioned above. Our results indicate that while the required sample sizes are still impractically large for some Bell-test implementations, there is still scope for further improvement, and we propose some further protocol modifications towards this end.

Acknowledgements
I would like to thank Renato Renner for his guidance and advice over the past years. He has been an accommodating and understanding supervisor, always ready to support me in directions I choose to pursue. I also thank co-examiners Norbert Lu¨tkenhaus and Marco Tomamichel, for taking the time to evaluate my thesis, as well as providing helpful feedback on my work.
Also, I was fortunate to have had the opportunity to work with many collaborators (JeanDaniel Bancal, Koon Tong Goh, Melvyn Ho, Srijita Kundu, Charles C.-W. Lim, Ignatius William Primaatmaja, Nicolas Sangouard, Valerio Scarani, Ren´e Schwonnek, Pavel Sekatski, Jamie Sikora, Xavier Valcarce, Ramona Wolf) over the course of my research, and I am indebted to them for many valuable discussions. In particular, I thank Nicolas Sangouard and Charles Lim for extending invitations for the initial visits wh-
ich led to these fruitful opportunities, and Valerio Scarani for providing me with useful advice.
I would like to express my appreciation to all members of the QIT group for the enlightening and interesting conversations we have had, and the assistance they have given me. Special thanks to Elisa for accommodating my many requests for help with translations (including the thesis abstract), as well as L´ıdia and Joe for advice on living in Zu¨rich.
Last but certainly not least, I thank my family for all the help and encouragement they have given me. I am also very grateful to Srijita for being a constant source of support, and making these past years so much better than they would otherwise have been. I could not have done this without all your help.

Contents

1 Introduction

1

1.1 DIQKD devices . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2

1.1.1 From Bell inequalities to security . . . . . . . . . . . . . . . . . . . . . . . 2

1.1.2 Required assumptions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5

1.2 Other DI protocols . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7

1.3 Previous work . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8

1.4 Current contributions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 10

2 Conceptual overview

11

2.1 Notation and definitions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 11

2.2 Smoothed entropies and their operational relevance . . . . . . . . . . . . . . . . . 13

2.3 Typical protocol outline . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 17

2.3.1 Noisy honest devices . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 20

2.4 Security definitions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 21

2.5 Security proof outline . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 23

2.5.1 Collective-attacks analysis . . . . . . . . . . . . . . . . . . . . . . . . . . . 24

2.5.2 Asymptotic behaviour . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 27

2.5.3 Intuition for keyrate improvements . . . . . . . . . . . . . . . . . . . . . . 28

2.5.4 Beyond collective attacks . . . . . . . . . . . . . . . . . . . . . . . . . . . 30

2.6 DIRNG and DIRE . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 31

3 Entropy bounds

32

3.1 Lagrange dual . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 34

3.2 Entropic dual . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 36

3.3 Qubit reduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 37

3.3.1 Secure numerical algorithm . . . . . . . . . . . . . . . . . . . . . . . . . . 39

3.3.2 Resulting bounds . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 41

3.3.3 Tightness of bounds . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 43

3.3.4 Comparison of noise thresholds . . . . . . . . . . . . . . . . . . . . . . . . 44

3.4 General scenarios . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 44

3.4.1 Using the Lagrange dual . . . . . . . . . . . . . . . . . . . . . . . . . . . . 45

3.4.2 Using the Gibbs variational principle . . . . . . . . . . . . . . . . . . . . . 49

3.4.3 Resulting bounds for DIQKD and DIRE . . . . . . . . . . . . . . . . . . . 51

3.4.4 Accounting for random key measurements . . . . . . . . . . . . . . . . . . 52

4 Finite-size analysis

54

4.1 Detailed protocol description . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 54

4.1.1 Error correction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 56

4.1.2 Privacy amplification . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 58

4.1.3 Honest behaviour . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 58

4.2 Security statement . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 59

4.3 Finite-size security proof . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 62 4.3.1 Completeness . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 63 4.3.2 Soundness . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 64 4.3.3 Entropy accumulation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 67
4.4 Resulting finite-size keyrates . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 71 4.5 Possible modifications . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 73
4.5.1 Coordinating input choices by public communication . . . . . . . . . . . . 73 4.5.2 Protocol using pre-shared key . . . . . . . . . . . . . . . . . . . . . . . . . 74 4.5.3 Collective attacks . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 77

5 Advantage distillation

81

5.1 Preliminaries . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 81

5.2 Security conditions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 82

5.2.1 General scenarios . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 82

5.2.2 2-input 2-output scenarios . . . . . . . . . . . . . . . . . . . . . . . . . . . 85

5.3 Resulting noise thresholds . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 88

6 Conclusion and future directions

91

A Reduction to projective measurements

94

A.1 General form of a measurement . . . . . . . . . . . . . . . . . . . . . . . . . . . . 94

A.1.1 Other possible approaches . . . . . . . . . . . . . . . . . . . . . . . . . . . 98

A.2 In DI cryptography . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 99

B Foundational perspective on DI cryptography

103

B.1 NS strategies for the magic-square game . . . . . . . . . . . . . . . . . . . . . . . 105

C Composable security

109

C.1 Resources and converters . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 109

C.2 Security definitions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 110

C.3 Operational implications . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 111

D Parametrization with correlators

112

D.1 Classical random variables . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 112

D.2 NS distributions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 113

E Details of numerical algorithm

117

E.1 Minimization over Alice’s measurement . . . . . . . . . . . . . . . . . . . . . . . 117

E.2 Minimization over Bob’s measurement . . . . . . . . . . . . . . . . . . . . . . . . 118

E.3 Minimization over states . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 119

E.4 Overall algorithm . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 121

E.5 Optimality of depolarizing-noise threshold . . . . . . . . . . . . . . . . . . . . . . 121

F Detection efficiency thresholds

124

G Detailed security proofs for collective attacks

125

G.1 Proof of Theorem 4.4 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 125

G.2 Proof of Theorem 4.5 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 126

H Alternative security proof for advantage distillation

129

H.1 Uniqueness of Uhlmann property . . . . . . . . . . . . . . . . . . . . . . . . . . . 131

Bibliography

135

Chapter 1
Introduction
In quantum key distribution (QKD), the goal is to extract a shared secret key from correlations obtained by measuring quantum systems. Device-independent (DI) quantum key distribution is based on the observation that when these correlations violate a Bell inequality, a secure key can be extracted even if the users’ devices are not fully characterized — one can prove security with only minimal assumptions on the device behaviour [BHK05, PAB+09, Sca12, BCP+14], hence the term “device-independent”. B-
y working with fewer assumptions, DIQKD unlocks the prospect of achieving secret key distribution with an unprecedented level of security against potential attacks. It also lies at an intersection between quantum foundations and cryptography, by making use of the foundational concept of Bell inequalities to prove security in a cryptographic task.
The strong security guarantees offered by DIQKD come with the drawback that it can only tolerate lower levels of noise as compared to standard QKD. This makes it challenging to demonstrate DIQKD in practice. However, experimental and theoretical developments in recent years have brought the possibility of such a demonstration closer to fruition.
For instance, on the experimental front, the advent of loophole-free Bell tests [HBD+15, SMSC+15, GVW+15, RBG+17] has shown that laboratory devices are now able to achieve Bell violations under stringent conditions. Since the security of DIQKD rests on Bell violations, this signifies an important landmark on the path towards a DIQKD demonstration. In fact, these experimental implementations were soon used to realize some other device-independent protocols [LZL+18, ZSB+20, LLR+21, SZB+21, LZL+21], -
bringing us a step closer towards DIQKD.
As for theoretical developments, several important results were derived which helped to narrow the gap between the experimental devices and the theoretical noise tolerance. In particular, one such result was the entropy accumulation theorem (EAT) [DFR20, DF19]. Earlier DIQKD security proofs either required the assumption that the device behaviour across the protocol rounds is independent and identically distributed (IID) [PAB+09], or they achieved lower keyrates as compared to the IID case [PM13, -
LPT+13, VV14, NSBS+18, JMS20, Vid17]. The EAT was used to show [AFRV19] that for many DIQKD protocols, essentially the same keyrates can be attained against general attacks as in the IID case, hence achieving both high keyrates and strong security statements (i.e. without requiring an IID assumption). It also provided explicit bounds on the finite-size behaviour, hence concretely addressing the question of what sample size would be required for a secure demonstration of DIQKD.
With these developments in mind, the aim of this work is to describe a variety of techniques that we have studied in order to further improve the keyrates and noise tolerance of DIQKD. In this chapter, we shall begin by first laying out the core ideas behind DIQKD. With this framework in mind, we will be better positioned to describe earlier progress on the topic and the contributions presented in this work, which we shall list at the end of this chapter.
Remark. After preparation of this thesis, several experimental demonstrations of DIQKD were

Introduction

2

announced [NDN+21, ZLR+21, LZZ+21], with various advantages and disadvantages in each case. We will not discuss them here, directing the interested reader to those works for more information. This thesis will remain focused on describing a number of proof techniques available for DIQKD, instead of analyzing these experiments in detail.
1.1 DIQKD devices
The basic elements of DIQKD can be outlined as follows. The honest users (Alice and Bob) each hold a device that has the following functionality: it can receive some share of a quantum state from an external source, accept a classical input from the user, then based on this input value, perform some measurement on the quantum state and return the resulting output. Without loss of generality, we can suppose the states are supplied by an adversarial third party Eve, who keeps some side-information a-
bout the distributed states. Usually, the devices would need to be used multiple times sequentially, producing a string of outputs corresponding to some string of inputs. (In some protocols [JMS20, Vid17], the entire input string is instead supplied to the devices in a single shot, receiving a corresponding string of outputs. This can be referred to as a parallel-input scenario.) We refer to each usage as a round of the protocol. Alice and Bob then perform some public classical communication, afte-
r which they will either generate a shared key that is “secret” with respect to Eve, or abort the protocol (if their data indicates they cannot generate a shared secret key).
To draw a comparison, such devices are basically similar to those required for standard QKD protocols (formulated as entanglement-based setups rather than prepare-and-measure setups). In that setting, the aim is to generate a secure key despite the fact that the states may be supplied by an untrusted third party Eve. However, an important assumption in standard QKD is that the measurements performed for a given input are trusted — for instance, in the entanglement-based version of the [BB84] proto-
col, or early security proofs for the [Eke91] protocol, they must be specific Pauli measurements on qubits. In that sense, we can refer to such protocols as device-dependent, since they rely on conditions about the measurement device behaviour. The goal of device-independent QKD is to find a way to generate a secure key with even weaker assumptions; namely, one allows the measurements to be (almost) untrusted as well.
1.1.1 From Bell inequalities to security
To gain some initial insight, it is helpful to first restrict to a simpler “IID” situation. In device-dependent QKD, this would basically be the scenario referred to as collective attacks, in which the quantum state supplied to Alice and Bob is assumed to be IID across all the uses of the devices, i.e. for n uses of the devices, the underlying state is of the form ρ⊗ABn where the A and B registers are held by Alice and Bob respectively.1 Eve’s side-information is modelled by allowing her to keep a-
n arbitrary extension of that state, which we can assume to be a purification without loss of generality (if the global state is not pure, we can simply give Eve an additional purifying register). Since all purifications are isometrically equivalent, we can focus specifically on purifications of the form ρ⊗ABn E where ρABE is a purification of ρAB. In the DI setting, the choice of how to extend the definition of collective attacks is perhaps not entirely unique. However, we choose to follow the ap-
proach used in an early work [PAB+09]: we define it as imposing the same constraint on the states as in device-dependent QKD, but also the additional constraints that in each round, the measurements act only on the state in that round, and that whenever the same input is supplied, the same measurement is performed. In other words, when Alice supplies some input x ∈ X and gets an output a ∈ A, this is described by a POVM element Pa|x (acting
1One could instead consider a more general setting where all parties act on the same Hilbert space, and we only require that Alice and Bob’s measurements commute. However, this introduces various complications beyond the scope of this work; see e.g. [SW08, NPA08, JNV+20].

Introduction

3

on register A of that round) that is the same in every round. Similarly, Bob’s measurements are described by POVM elements Pb|y (for output b ∈ B given input y ∈ Y) acting on register B of that round. While we have described these as general POVMs, it is often possible to reduce the analysis to projective measurements; we defer the details to Appendix A.
With this scenario in mind, the goal in DIQKD is to produce a secure key with only minimal assumptions on Pa|x and Pb|y. To see why this might even be possible in the first place, we turn to the notion of Bell inequalities [Bel64], which are inequalities regarding the input-output distribution produced by the devices. Still focusing on the collective-attacks setting for now, we can consider a single round and let P[ab|xy] denote the probability of the parties getting outputs a and b if inputs x an-
d y respectively are supplied. Given this model, it is easy to see that

P[ab|xy] = Tr Pa|x ⊗ Pb|yρAB .

(1.1)

A Bell inequality is an inequality that holds for distributions P[ab|xy] admitting a local hidden variable (LHV) model2, meaning that they can be written in the form

P[ab|xy] = P[a|xλ] P[b|yλ] P[λ] ,
λ

(1.2)

for some “hidden” discrete random variable λ. (More generally, one could integrate over a continuous λ, but this makes no difference as long as the input and output sets are finite, because the set of LHV-compatible distributions is convex.) An important example of a Bell inequality is the CHSH inequality [CHS+69], for the case where a, b ∈ {−1, +1} and x, y ∈ {0, 1}:

⟨A0B0⟩ + ⟨A0B1⟩ + ⟨A1B0⟩ − ⟨A1B1⟩ ≤ 2,

(1.3)

where ⟨AxBy⟩ := ab abP[ab|xy] is the correlation between the outputs of measurements x and y. In some contexts, it is easier to label the outputs as {0, 1} rather than {−1, +1} — we shall specify this when necessary. For brevity, we shall refer to the LHS of (1.3) as the CHSH value.
Famously, Bell inequalities can be violated by the distributions produced by some entangled quantum states and measurements, proving that such distributions cannot be explained by LHV models — this phenomenon is often referred to as quantum nonlocality. For the purposes of DIQKD, however, the critical fact of interest is that only entangled states can violate Bell inequalities. Hence if the honest parties can certify that P[ab|xy] violates some Bell inequality, then they know ρAB must be entangled-
, regardless of what the measurements were. This suggests some possibility of generating a shared secret key from ρAB (putting aside the question of whether all entangled states allow key distillation [GW00]).
Alternatively, there is another perspective that may be of interest from a foundational point of view. It is based on the observation that distributions of the form (1.1) produced by quantum theory are non-signalling (NS), in the following sense. Focusing on e.g. Alice, for an arbitrary P[ab|xy] we can compute the marginal distribution P[a|xy] = b P[ab|xy] of Alice’s output, which a priori could depend on both inputs xy. However, the NS conditions are the requirement that this distribution is inde-
pendent of Bob’s input y — put another way, this means there is a well-defined distribution for Alice’s output given her input alone, which we can denote as P[a|x].3 Analyzing Bob’s situation similarly, the NS conditions can be stated as:

∀a, x, P[a|x] := P[a|xy] = P[ab|xy] is “well-defined” (i.e. independent of y),

b
∀b, y, P[b|y] := P[b|xy] = P[ab|xy] is “well-defined” (i.e. independent of x).
a

(1.4)

2There is some variation in terminology here; for instance, they may be referred to as local-realistic models or
simply “classical” models, and different meanings have been assigned to the terms in different works. However,
this is not the focus of our work. 3Notice that for quantum distributions in particular (as in (1.1)), we have P[a|x] = Tr Pa|xρA , i.e. this is
precisely the distribution given by quantum theory for Alice’s measurements on her reduced state.

Introduction

4

Returning to the topic of DI cryptography, roughly speaking it can be proven that if P[ab|xy] is produced by an underlying non-signalling model (such as quantum theory) and also violates a Bell inequality, then the outputs must contain some “fundamental randomness” that cannot be predicted by an adversary. This serves as the first step towards producing a secret key; furthermore, since the proof only relies on the NS conditions, it also covers any potential postquantum theories4 satisfying those c-
onditions. However, there are some subtleties to be aware of, and we defer this discussion to Appendix B (see also [WMP14]).
Hence the idea of a DIQKD protocol can be roughly described as having Alice and Bob collect input-output statistics from their devices in some rounds to estimate the probabilities P[ab|xy] (with the IID assumption, these estimates can be arbitrarily accurate given enough rounds), then checking whether this distribution violates a Bell inequality “strongly enough” for them to generate a secret key. Of course, this is still a rather incomplete description (for instance, we have not yet explained exa-
ctly how strong a Bell violation is needed to certify secret key generation), but we shall defer further details until Sec. 2.3–2.5.
For efficiency in the protocol, Alice and Bob may not need to estimate all the individual probabilities, but rather just one or more “Bell parameters”, e.g. the CHSH value. We can write each such parameter in the form νj = abxy c(ajb)xyP[ab|xy] for some coefficients c(ajb)xy ∈ R.5 In terms of the measurements Pa|x, Pb|y, this can be viewed as measuring the expectation values of some (hermitian) “Bell observables”,

Γj (Pa|x, Pb|y) :=

c(ajb)xyPa|x ⊗ Pb|y.

abxy

(1.5)

A special case would be the scenario of nonlocal games, where Alice and Bob use some specified input distribution and they are considered to win the game if the input-output combinations abxy satisfy some predicate V (a, b, x, y). In that case, the winning probability of such a game is indeed a parameter of the form abxy cabxyP[ab|xy], for some coefficients cabxy determined by the input distribution and the predicate V (a, b, x, y).
Going beyond collective attacks, one would aim to prove security without the IID assumption on the state and measurements. In device-dependent QKD, this would be referred to as the scenario of coherent attacks. For DIQKD, we take this to mean that in each round, the state Eve distributes in each round can have arbitrary structure; furthermore, the measurement performed by each device can act not only on the state it has just received, but also on registers storing (possibly quantum) memory from pr-
evious rounds. (If we work in the parallel-input setting instead, then there is no notion of “previous” rounds — Eve simply distributes a “large” state to the devices in a single shot, and each device performs a “large” measurement on its share of the state, which is allowed to depend on the entire input string supplied to it by the corresponding honest party.) This poses a number of challenges for security proofs; e.g. we do not even have a specific (single-round) distribution P[ab|xy] to speak o-
f that describes all the rounds. Fortunately, these obstacles can be overcome to some extent, as we shall outline in Sec. 2.5.4. More subtly, though, the coherent-attacks setting in DIQKD introduces a problem regarding device reuse [BCK13], which we shall soon discuss.

Remark. Some care needs to be taken regarding the collective-attacks assumption — if one naively designs a protocol taking that assumption for granted, the resulting protocol can be completely

4There are also some other approaches [CR11] for arguing that no post-quantum theory satisfying some plausible postulates can break the security of quantum cryptography, in some sense. However, interpreting these results can be somewhat delicate, and we will not aim to do so here.
5In principle, one could also allow these coefficients to be complex, but this is inconvenient in some of our later analysis, e.g. the Lagrange dual in Chapter 3. Hence we focus only on the real-valued case, since in any case, any Bell parameter based on complex-valued coefficients could be equivalently described as a pair of Bell parameters with real-valued coefficients instead. Another more general possibility would be to consider nonlinear functions of P[ab|xy], but we do not do so in this work-
.

Introduction

5

insecure against trivial non-IID attacks. For instance, consider a protocol where the probabilities P[ab|xy] are only estimated from the first k rounds, with the remaining rounds used for key generation. This can be proven secure (for suitable parameter choices) under the collective-attacks assumption; however, it is obviously insecure in practice since Eve could just behave honestly on the first k rounds and send completely insecure states in the remaining rounds. In light of this, it could be sa-
id that the appropriate way to treat the collective-attacks assumption would be to first design a protocol, then “reasonably conjecture” that collective attacks are (near-)optimal against that protocol, in which case one could proceed with a security proof based on that assumption. For instance, if we instead use a random subset of the rounds (not publicly announced beforehand) to estimate P[ab|xy], it is at least less obvious how to outperform collective attacks.
1.1.2 Required assumptions
While our above discussion indicates that the measurements can be “untrusted”, an important caveat is that we do still need to enforce some constraints on them. Starting with those that were already implicit in the above description, we have assumed that the quantum registers held by Alice and Bob’s devices have a tensor-product separation, and the measurements act only on their respective Hilbert spaces (and local memory registers, when coherent attacks are allowed). Also, we have imposed that in-
 each round, the measurement of Alice’s device cannot depend on Bob’s choice of input, and vice versa (this was implicit in the notation Pa|x, Pb|y itself in the collective-attacks case).6 In the context of loophole-free Bell tests [HBD+15, SMSC+15, GVW+15, RBG+17], this is enforced by having spacelike separation between the measurements. However, that is a very stringent requirement, and in the context of DIQKD, it may be worth considering whether there are easier ways to enforce this condition —-
 for instance, by implementing appropriate “shielding” measures on the devices, to prevent them from leaking unwanted information. (Some security proofs have been developed that allow limited leakage of the inputs [SPM13, JK21], but we will not discuss them in detail here.)
In fact, the question of shielding the devices ties in to another vital assumption, which prevents us from claiming we can prove security for completely untrusted devices. Namely, we also need to impose the constraint that the outputs of the devices are not simply leaked to Eve (for instance, if the devices were arbitrarily adversarial, they could simply contain transmitters to broadcast this information). Hence the devices do need to be sufficiently characterized to certify that there is no such -
leakage. As with the inputs, it may be that this could be achieved using some shielding measures, and if so, it may be expedient to use these measures to justify both of these “no-leakage” assumptions.
However, when coherent attacks are allowed, the issue of ensuring that the outputs are not leaked in any sense is more subtle than it appears. In [BCK13], a memory attack was constructed based on this point. The relevant scenario is as follows: suppose that the devices are used for an instance of a DIQKD protocol, and a secure key has been generated. Now, if the devices are reused for a second instance of the protocol (or for that matter, some other protocol), it could be possible that the device -
outputs in this second instance are correlated with the device outputs in the first instance due to memory effects, and thus (indirectly) with the key generated in the first instance. Since the second instance would typically involve public communication computed based on the device outputs, this can hence leak information about the first instance’s key. The attack in [BCK13] is something of a “maximally adversarial” model which
6For coherent attacks, whether each party’s measurement can depend on the other party’s input in previous rounds would depend on the nature of the security proof — the main proof approach used in this work, based on the EAT, indeed allows for this in a certain sense. In contrast, the parallel-input scenarios of [JMS20, Vid17] require that the output string does not depend on any part of the other party’s input string, so an implementation of those protocols would have to justify that assumption by-
 spacelike separation or shielding. The former would seem to require distributing and/or storing a large number of entangled states simultaneously, and is hence currently impractical.

Introduction

6

leaks specific key bits via the public communication, but in a more general information-theoretic sense, any “non-negligible” correlations between the first instance’s key and the second instance’s public communication could cause some problems in formalizing the implications of the security definitions (we discuss this in more detail at the end of Sec. 2.4).
In order to avoid leakage in this form, one option would be to impose a condition along the lines of requiring that in each instance of a DIQKD protocol, the devices do not measure any registers containing any form of “secret data” from previous protocols, such as the outputs or the keys.7 This would likely also enforce that there are no correlations between the outputs across different protocol instances, which is perhaps somewhat in tension with the idea that we allow the devices to retain memor-
y within each instance of the protocol (when allowing coherent attacks in the DIQKD sense). However, one could perhaps argue that given enough time between protocol instances, devices that are not “actively adversarial” (informally speaking) would not retain any significant memory effects across instances. Alternatively, some ideas have been proposed to work around this problem by using specialized encodings of the public communication [MS14].
Remark. This “leakage via memory effects” issue only becomes possible due to the combination of (1) allowing coherent attacks, and (2) working in the DI setting for QKD. If we restrict to collective attacks in DIQKD, recall that this inherently involves assuming that the device measurements are acting on the states they have received in that round, which are supplied by Eve and can thus be taken to be independent of any data that Eve does not already know. On the other hand, if we allow coherent a-
ttacks but stick to the “basic” form of device-dependent QKD, such memory effects are not an issue because the measurements are taken to be fully characterized; in particular, this again usually means they are assumed to genuinely act on the states they have just received in each round. In some ways, this suggests that merely the notion of assuming the measurements act on specific registers may be stronger than it appears, because it could implicitly be claiming that some memory effects are being -
disallowed. This issue is discussed further in a writeup following this thesis, where we note that allowing memory effects may also invalidate some standard proof techniques for device-dependent QKD.
In light of the above points, it is worth clarifying that DIQKD currently seems unlikely to guarantee security against truly “adversarially designed” devices. Rather, one could take the perspective that it is intended for use with devices that are provided by a trustworthy source, but with less stringent requirements for characterizing or certifying the devices, in that one does not have to ensure the devices are performing specific measurements. For that matter, the assumptions listed above for D-
IQKD can be viewed as being strictly weaker than those that would be involved in ensuring that the measurements are fully characterized, i.e. they would have to be checked anyway as part of the latter. DIQKD could also be viewed as helping to improve resistance to QKD hacking techniques [FQT+07, GLLL+11, JSK+15], some of which (on an abstract level) can be viewed as forcing the devices to perform measurements other than the intended ones. On the other hand, some hacking techniques instead basicall-
y have the goal of forcing the devices to leak information about the inputs and/or outputs (for instance, some forms of Trojan-horse attacks [JSK+15]), and these would still be an issue to be wary of in DIQKD.
Before moving on, we state for completeness a few assumptions that are required for the “classical” parts of a DIQKD protocol. Following the presentation in [AFRV19], these are:
• The honest parties can (locally) generate trusted randomness that is independent of all other registers in the protocol. (This may be used for choosing their inputs, as well as some other classical processing steps.)
• The honest parties have trusted post-processing units to perform classical computations.
7An extreme way to ensure this would be to enforce that the devices are never used again after completing a DIQKD protocol instance, preventing any memories they might retain from being accessed in the future, but this seems impractical.

Introduction

7

• The honest parties have an authenticated public channel to perform all classical communication.
There are some possibilities for partially relaxing the first assumption [Hal11, SPM13, KAF20, JK21], but we leave this for other work.
Finally, in this work we will assume that all the quantum systems the devices act on are finite-dimensional. However, we allow the dimension to be arbitrary, consistent with the idea that the measurements are “uncharacterized”. This is just to ensure validity of the theorems we use, some of which have not been explicitly proven for infinite-dimensonal systems, though in any case it seems likely that they should generalize in some form to that scenario. (While separations between finite- and infini-
te-dimensional quantum behaviour have been found in the context of Bell violations [JNV+20], it currently seems implausible that such differences could be exploited for explicit attacks on DIQKD protocols.)

1.2 Other DI protocols
Apart from DIQKD, there are a variety of other protocols that can be performed in a device-independent manner. Here we shall briefly highlight a few of them. To begin with, there is the task of device-independent randomness expansion (DIRE) [CK11, Col06], where the goal is to start with a short random seed and produce a longer string of random bits, which is secret with respect to some adversary’s side-information. Similar to DIQKD, the idea here is that the short random seed can be used to choose-
 inputs for devices of the same form as in DIQKD. If the results violate a Bell inequality, then outputs should have some “private randomness” by similar arguments as before, which can (with some classical processing) be extracted into a secret key.
However, DIRE differs from DIQKD in several respects. For instance, DIQKD aims to generate a shared secret key between Alice and Bob, but in DIRE the intent is only to generate a single secret key. In line with this, in DIRE it is usually assumed that Alice and Bob have a private communication channel rather than a public one; alternatively, one could take the view that both devices are placed “in the same lab” (with appropriate shielding from each other) and the honest user(s) can directly read o-
ff the outputs of both devices. Also, in DIQKD the honest parties have unlimited sources of local randomness, whereas in DIRE they are limited to the seed randomness, which places some constraints on the input distributions they can use.
Apart from DIRE, there is the slightly different task of device-independent randomness generation, also called device-independent random number generation (DIRNG). This is very similar to DIRE, but instead of a (private) short random seed, the honest parties are given an unbounded supply of public randomness that is assumed to be independent of the devices, and they aim to generate a secret (i.e. private) key. This is usually an easier task than DIRE, since there is no limit on the amount of start-
ing randomness they can use.
Another related but distinct task is device-independent randomness amplification (DIRA) [CR12, BRG+16, KAF20], where the honest parties are instead given an unbounded supply of “imperfect” randomness, in the sense that it may be correlated with the state supplied to the devices. As compared to DIRE and DIRNG, the analysis of DIRA can potentially be more challenging, because the most basic (and thus better-studied) setting for Bell nonlocality is where the inputs are independent of the state, as is-
 implicit in our equations (1.1)–(1.2). While there are indeed some results studying Bell nonlocality in scenarios where correlations are allowed between the state and inputs [Hal11, KHS+12, PK13, PG16], additional work is needed to convert this notion to a security proof for DIRA [CR12, BRG+16, KAF20].
The above tasks are perhaps the most well-studied DI protocols. There are a variety of other protocols that have been proposed, but we shall not attempt to present the full spectrum here. Instead, we simply list a few examples: DI protocols have been developed (with partial security) for weak coin flipping [SCA+11], bit commitment [ACK+14], random access codes [CKK+16],

Introduction

8

weak string erasure [KW16], and XOR oblivious transfer [KST20]. Also, some varieties of “certified deletion” tasks have been studied [FM18, KT20], where the goal is for one party to prove that they have deleted some information — intuitively, this is impossible using classical information because it can always be copied, but the no-cloning property of quantum states suggests the possibility of achieving this with quantum information. One point in common for these protocols is that they are in the -
setting of two-party cryptography (except for [KT20], which additionally includes an adversary Eve), where there are only two parties but either of them can potentially be dishonest.
Finally, it is worth mentioning the concept of self-testing [PR92, BMR92, MY98] (also referred to as rigidity), which is the remarkable fact that some nonlocal distributions P[ab|xy] can only be attained by an essentially unique state (up to local isometries and ancillas), and in some cases a similar statement holds for the measurements as well. “Robust” versions of these results are also known, which allow some deviation from the specified distribution. This is a very powerful statement on a theo-
retical level, since it certifies a particular state and/or measurements based only on the distribution P[ab|xy], assuming that distribution can be estimated accurately. However, some self-testing statements are not entirely “operational” (though a recent work [CHLM21] provides a framework to address this), and converting selftesting results into security proofs for concrete protocols tends to result in rather loose final bounds [FM18, KST20]. Still, it can serve as a guide to gain some initial in-
tuition for prospective DI protocols.
1.3 Previous work
We now present a rough overview of past developments in the topic of DIQKD, though it would be impractical to cover all results on this topic, and hence we may focus more on some specific works. The first proposal which sparked interest in the concept of DIQKD could be considered to be [BHK05], which studied the scenario where Eve is restricted only by the non-signalling principle. (Alternatively, one could view the notion of self-testing initially developed in [PR92, BMR92, MY98] as an important -
precursor. However, while this concept plays a part in some more recent DI security proofs [FM18, KST20], those early results on self-testing did not appear to initiate much further development at the time into full DIQKD protocols.) Subsequently, a security proof was developed in [ABG+07, PAB+09] against quantum adversaries restricted to collective attacks. Under that assumption, the authors derived a closed-form bound on the asymptotic keyrate, which was tight for the protocol in question.
The analysis for coherent attacks proved to require substantially more effort. For instance, a security proof for this scenario was developed in [VV14] (and another in [LPT+13] for a modified protocol), but the asymptotic keyrates obtained from these approaches are lower than in the collective-attacks scenario. Also, we remark that it seems that the security proofs for DIRNG in [PM13, NSBS+18] should basically apply to DIQKD as well, though they would again yield a lower asymptotic keyrate compare-
d to collective attacks.8 The development of the entropy accumulation theorem in [DFR20] was what allowed for the first security proof [AFRV19] that achieved the same asymptotic keyrates against coherent attacks as for collective attacks (in protocols where the devices are used sequentially and error correction is performed using one-way communication). Shortly afterwards, a somewhat similar result known as the quantum probability estimation (QPE) framework [KZB20, ZKB18, ZFK20] was developed for -
DIRNG/DIRE, though it does not appear to have been applied yet to DIQKD — we do not focus on this approach here, leaving it for future work.
The parallel-input scenario (for coherent attacks) appears to be the most challenging so far,
8Furthermore, while this approach does not rely on an IID assumption, there are some technical issues regarding whether it truly covers coherent attacks, in that the authors note it may require an assumption that Eve’s state has “decohered” to classical side-information by the time the protocol is implemented.

Introduction

9

which is perhaps to be expected since it allows very general dependencies9 across the protocol rounds. Security proofs for this setting were developed in [JMS20, Vid17], but they also did not achieve the same asymptotic keyrates as compared to collective attacks, and it is currently an open question whether this is even possible in the parallel-input setting. We remark, however, that this proof approach allowed for an extension to a more general DIQKD scenario where the devices are allowed to leak-
 some (fairly small) amount of information about the inputs [JK21].
Remark. In device-dependent QKD, the question of security proofs against coherent attacks (for protocols with permutation symmetry, at least) can be resolved by e.g. applying suitable de Finetti theorems [Ren05] or the postselection technique [CKR09], which allow reductions to collective attacks. However, the existing versions of such theorems have a dependence on the system dimensions, which is a problem in DIQKD where the system dimensions are unbounded. Hence different techniques were developed-
 for DIQKD, though there is still ongoing work [AFR15, JT21] on the possibility of de Finetti theorems suitable for DIQKD. (Another proof approach [TL17] for device-dependent QKD is based on entropic uncertainty relations for smoothed entropies, which yield tighter finite-size bounds. However, this is also not straightforward to generalize to DIQKD, though the approach in [LPT+13] is based on this underlying idea.)
While this covers the developments in proof techniques against coherent attacks, another important question is finding protocols that achieve better asymptotic keyrates in the first place, even if one has to make the collective-attacks assumption in doing so. The early work [PAB+09] obtained a tight bound on the keyrate for their protocol specifically (which was based only on the CHSH inequality and did not involve various possible techniques for improving the keyrates), but there was little progr-
ess in deriving similar bounds for more general situations. One general approach [PAM+10, NSPS14, BSS14] (developed for DIRNG rather than DIQKD, but the approach works for both) was based on bounding some guessing-probability values. However, this approach has the drawback that the resulting bounds on the asymptotic keyrate are not tight, at least for the scenario of collective attacks. (Though the corresponding state of progress in non-IID security proofs should be kept in mind — the security pro-
ofs in [PM13, NSBS+18] yield asymptotic keyrates that can be expressed in terms of the guessing probability, hence it was fairly natural to study it.) Other than this, progress on this topic appears to have been fairly limited, apart from the more specialized quantities that were studied in the security proofs of [LPT+13, VV14, JMS20, Vid17] against coherent attacks, which did not yield very tight bounds.
From the experimental perspective, the realization of loophole-free Bell tests [HBD+15, SMSC+15, GVW+15, RBG+17] could be said to have unlocked the first core requirement for DI protocols, i.e. achieving a Bell violation. (Though as previously mentioned, in DI protocols it may not be strictly necessary to close the signalling loophole via spacelike separation, so in fact there may be some room for allowing more relaxed requirements on this point.) By combining this milestone with the tighter finit-
e-size keyrate bounds given by the EAT or QPE frameworks, experimental demonstrations of DIRNG/DIRE were subsequently achieved [LZL+18, ZSB+20, LLR+21, SZB+21, LZL+21]. There have also been various proposals for techniques to further improve the performance of Bell-test implementations [MSS20]. However, DIQKD has thus far remained slightly out of reach (we give a quick intuitive explanation for this in Sec. 2.6, based on the asymptotic keyrates). Our goal in this work is to develop methods to try -
to overcome this difficulty.
Remark. Recently, another topic of interest has been the question of upper bounds on DIQKD keyrates [KWW20, WDH19, AFL21, CFH21, FBJL+21, KHD21], including examples of distributions P[ab|xy] that violate a Bell inequality but for which the DIQKD keyrate is provably zero
9However, it would not be strictly accurate to say that it includes the sequential scenario as a special case, because in the latter we have the aforementioned possibility of past inputs being communicated between the devices after each round, which is not captured in the parallel-input scenario.

Introduction

10

for a very large class of possible protocols [FBJL+21]. However, we will not attempt to cover this subject in this work.
1.4 Current contributions
Having established a picture of some of the existing results in DIQKD, we now turn to the contributions that we shall present in the subsequent chapters. As a preliminary, in Chapter 2 we first give an overview of the important concepts in DIQKD, including an outline of the typical protocol structure and some description of how to construct a security proof. We will also introduce some techniques that improve the keyrates and noise tolerances of DIQKD, such as noisy preprocessing, random key measu-
rements, and advantage distillation. Some of these techniques were previously studied in device-dependent QKD, but corresponding proofs for DIQKD were only achieved fairly recently (beginning with the works [HST+20, SGP+21, TLR20]). We do not present new results in this chapter, apart from the brief overview of those techniques.
With this framework in mind, in Chapter 3 we describe several methods to bound the asymptotic keyrates, with the goal being to obtain bounds that are tighter than those based on guessing probability, but also applicable to more general scenarios than just the CHSH-based protocol of [PAB+09], including the possibility of incorporating noisy preprocessing and random key measurements. While none of these methods simultaneously achieve the twin goals of tight bounds and applicability to all nonlocalit-
y scenarios, they do offer various improvements over the previous approaches, which we shall describe. The results in this chapter are based on the approaches we derived in [TSG+21, TSB+20], as well as a short summary of our results from [HST+20, SBV+21, SGP+21]. (We also briefly describe some independent works [BFF21a, WAP21, BRC21, BFF21b, MPW21] with similar aims, some of which achieved tighter bounds.)
Next, in Chapter 4 we present a finite-size security proof based on the EAT, as well as some detailed analysis of how it compares to the results for collective attacks. While the former was already studied in [AFRV19] and our approach is essentially similar, our contribution is to somewhat modify the analysis in order to relax the theoretical guarantees required in the error-correction step. Furthermore, our approach accounts for noisy preprocessing and random key measurements, as well as achievin-
g tighter finite-size bounds by using improved versions of the EAT [DF19] and some statistical bounds [LLR+21]. We also present some potential protocol modifications which may improve the keyrates. Several of the results in this chapter and the previous one are also relevant for DIRNG/DIRE. The results in this chapter are based on [TSB+20].
In Chapter 5, we turn to the topic of advantage distillation in DIQKD. This refers to the use of two-way communication in place of the one-way error-correction step in typical DIQKD protocols. As compared to one-way error correction, much fewer proof techniques have been developed in this setting — for instance, all of the approaches we previously described for analyzing coherent attacks do not seem to be easily applicable when advantage distillation is considered. Therefore, in this chapter we re-
strict ourselves to the collective-attacks model only, and prove some results in this setting. Specifically, we derive a sufficient condition for the security of a particularly prominent advantage distillation protocol, and compare the resulting noise thresholds against previous ones. This chapter is based on our results in [TLR20].
Finally, we conclude in Chapter 6 with some discussion of the prospects for DIQKD using these techniques, as well as some further questions that should be worth pursuing.

Chapter 2
Conceptual overview

We shall now present a broad overview of the overall concepts and framework required for DIQKD. This is intended as a somewhat pedagogical description, which may be helpful for better understanding of the results in later chapters. The organization of this chapter is as follows. After listing basic notation and definitions in Sec. 2.1, we shall introduce in Sec. 2.2 some important entropic quantities and their operational implications. In Sec. 2.3, we shall give a rough outline of typical DIQKD pr-
otocols. This lets us lay out in Sec. 2.4 the security definitions we shall use, and in Sec. 2.5 we sketch how to prove that a DIQKD protocol satisfies these definitions. Finally, in Sec. 2.6 we briefly comment on how these proof techniques apply to DIRNG and DIRE.

2.1 Notation and definitions

We list some basic notation in Table 2.1. Apart from the notation in that table, we will also need to use some other concepts, which we shall define below, and briefly elaborate on in some cases. In this work, we will assume that all systems are finite-dimensional, but we will not impose any bounds on the system dimensions unless otherwise specified.

Definition 2.1. (Frequency distributions) For a string z ∈ Zn on some alphabet Z, freqz denotes the following probability distribution on Z:

1n freqz(z) := n δz,zj .
j=1

(2.1)

Definition 2.2. (2-universal hashing) A 2-universal family of hash functions is a set H of functions from a set X to a set Y, such that if h is drawn uniformly at random from H, then

P h(x) = h(x′) ≤ 1 |Y |

∀x ̸= x′.

(2.2)

Qualitatively, 2-universal hashing is a procedure which is intended to have some properties similar to choosing a random function X → Y to produce the hash. Specifically, (2.2) is the statement that the probability of two distinct inputs hashing to the same value (i.e. having a hash collision) is no higher than that of the latter process. 2-universal hashing plays an important role in several steps of QKD protocols — most straightforwardly, it is used to verify whether the honest parties have obta-
ined matching keys; however, it is also used at other points, which we shall later explain.

Conceptual overview

12

Table 2.1: List of notation

Symbol

Definition

log H (·) D(·∥·) ∥·∥p
|·| X ≥ Y (resp. X > Y ) S=(A) (resp. S≤(A))
UA δj,k ⌊·⌋ (resp. ⌈·⌉) [n] A[n] Ωc

Base-2 logarithm Base-2 von Neumann entropy Base-2 quantum relative entropy Schatten p-norm
√ Absolute value of operator; |M | := M †M X − Y is positive semidefinite (resp. positive definite) Set of normalized (resp. subnormalized) states on register A Maximally mixed state on register A Kronecker delta Floor (resp. ceiling) function Indices from 1 to n, i.e. {1, 2, . . . , n} Registers A1 . . . An Complement (i.e. negation) of an event Ω

Definition 2.3. A state ρ ∈ S≤(CQ) is said to be a classical-quantum state (cq state for short) if it is in the form

ρCQ = αc |c⟩⟨c| ⊗ σc,
c

(2.3)

for some normalized states σc ∈ S=(Q) and weights αc ≥ 0. Analogously, we can define states that are qc, ccq, cqq and so forth. It may be convenient to absorb the weights αc into the states σc, writing them as subnormalized states ωc = αcσc ∈ S≤(Q) instead.

Definition 2.4. (Conditioning on classical events) For a classical-quantum state ρ ∈ S≤(CQ)
written in the form ρCQ = c |c⟩⟨c| ⊗ ωc for some ωc ∈ S≤(Q), and an event Ω defined on the register C, we will define the following “conditional states”:

ρ∧Ω := |c⟩⟨c| ⊗ ωc,
c∈Ω

Tr[ρ] ρ|Ω := Tr[ρ∧Ω] ρ∧Ω =

c Tr[ωc] c∈Ω Tr[ωc]

ρ∧Ω.

(2.4)

We informally refer to these states as the subnormalized and normalized conditional states
respectively (the latter is perhaps a slight misnomer if Tr[ρ] < 1, but this issue does not arise
in this work). The process of taking subnormalized conditional states is commutative and “associative”, in the sense that for any events Ω, Ω′ we have (ρ∧Ω)∧Ω′ = (ρ∧Ω′)∧Ω = ρ∧(Ω∧Ω′); hence for brevity we will denote all of these expressions as

ρ∧Ω∧Ω′ := (ρ∧Ω)∧Ω′ = (ρ∧Ω′ )∧Ω = ρ∧(Ω∧Ω′).

(2.5)

On the other hand, some disambiguating parentheses are needed when combined with taking normalized conditional states.

Conceptual overview

13

In light of the preceding two definitions, it is reasonable to write a normalized cq state ρ ∈ S=(CQ) in the form

ρCQ = P[c] |c⟩⟨c| ⊗ ρQ|c,
c

(2.6)

where P[c] is the probability distribution describing C, and ρQ|c can indeed be interpreted as the normalized conditional state on Q corresponding to the register C taking value c, i.e. ρQ|c = TrC ρ|Ω where Ω is the event C = c.

Definition 2.5. (Distinguishability measures) For ρ, σ ∈ S=(A), the trace distance and fidelity are respectively

1 d(ρ, σ) := 2 ∥ρ − σ∥1 ,

√√ F (ρ, σ) := ρ σ 1 .

(2.7)

For ρ, σ ∈ S≤(A), the generalized fidelity is

F˜(ρ, σ) :=

√√ ρ σ 1+

(1 − Tr[ρ])(1 − Tr[σ]),

(2.8)

and the purified distance is P (ρ, σ) := 1 − F˜(ρ, σ)2. If either ρ or σ is normalized, the fidelity and generalized fidelity are equal.

The trace distance and fidelity satisfy the Fuchs–van de Graaf inequalities,

d(ρ, σ) + F (ρ, σ) ≥ 1, d(ρ, σ)2 + F (ρ, σ)2 ≤ 1.

(2.9)

2.2 Smoothed entropies and their operational relevance

Our security proofs will make use of smoothed min- and max-entropies, which we shall now define and list some properties of. For the definitions, we follow the presentation in [DFR20, DF19], which can be shown to be equivalent to the definitions in [Tom16, TL17]. Note that we will not need to explicitly use these definitions in this work, but we state them for completeness and to ensure consistency with other work.

Definition 2.6. For ρ ∈ S≤(AB), the min- and max-entropies of A conditioned on B are

Hmin(A|B)ρ := − log min
σ∈S≤(B) s.t.

1
ρA2 B(IA

⊗

σB

)−

1 2

2

,

∞

ker(ρB )⊆ker(σB )

1

2
1

Hmax(A|B)ρ := log max
σ∈S≤(B)

ρA2 B(IA ⊗ σB) 2

,
1

(2.10) (2.11)

where

in

the

first

equation

the

(IA

⊗

σB

)−

1 2

term

should

be

understood

in

terms

of

the

Moore-

Penrose generalized inverse. In both equations, the optimum is indeed attained (see e.g. Sec. 6.1.2

and Sec. 6.1.3 of [Tom16]), and it can be attained by a normalized state, so S≤(B) can be

replaced by S=(B) without loss of generality. When Tr[ρ] = 1, these definitions respectively coincide with the R´enyi entropies H∞↑ and H1↑/2 in the notation of [Tom16].

As their names suggest, the min- and max-entropies are respectively lower and upper bounds on the von Neumann entropy:

Hmin(A|B)ρ ≤ H(A|B)ρ ≤ Hmax(A|B)ρ.

(2.12)

Conceptual overview

14

The min-entropy has a simple operational interpretation for normalized cq states, as shown in e.g. [KRS09] (which also describes operational interpretations of min- and max-entropy that apply to fully quantum systems). Namely, for a cq state ρ ∈ S=(CQ) in the form (2.6), we have

Hmin(C|Q)ρ = − log Pguess(C|Q)ρ, where Pguess(C|Q)ρ := max P[c] Tr ρQ|cΛc , (2.13)
{Λc} c
with the maximization taking place over POVMs {Λc} on Q. As suggested by the notation, Pguess(C|Q)ρ is just the optimal probability of guessing C given access to system Q. This operational interpretation is often useful when studying DI protocols, as we shall explain in Sec. 2.5.1 and 5.2.
Apart from this fairly straightforward relation, there are also more elaborate interpretations of these entropies that are vital for QKD. Informally, the min-entropy Hmin(C|Q)ρ of a cq state ρ approximately corresponds to a lower bound on the length of secret key that can be produced from the system C, against an adversary with access to the system Q. As for the max-entropy Hmax(C|Q)ρ, it approximately corresponds to an upper bound on the minimum number of bits that must be communicated to a party-
 holding the system Q, in order to produce a guess for C that is correct with high probability. These tasks are often referred to as privacy amplification and one-way error correction respectively. However, it turns out that these bounds are much too pessimistic when accounting for the fact that a small amount of error is allowed in these tasks — instead, we can get near-optimal bounds (that we shall soon describe in Facts 2.2–2.3 below) by considering the smoothed versions of these entropies, whi-
ch are defined by taking a optimization over neighbouring1 states:

Definition 2.7. For ρ ∈ S≤(AB) and ε ∈ 0, Tr[ρAB] , the ε-smoothed min- and maxentropies of A conditioned on B are

Hmε in(A|B)ρ := max Hmin(A|B)ρ˜,
ρ˜∈S≤(AB) s.t. P (ρ˜,ρ)≤ε

Hmε ax(A|B)ρ := min Hmax(A|B)ρ˜. (2.14)
ρ˜∈S≤(AB) s.t. P (ρ˜,ρ)≤ε

By construction, we have Hmε in(A|B)ρ ≥ Hmin(A|B)ρ and Hmε ax(A|B)ρ ≤ Hmax(A|B)ρ, and equality holds for ε = 0. Importantly, the gap in each inequality can be rather significant when ε > 0, a fact which is cleanly demonstrated by a result known as the (quantum) asymptotic equipartition property (AEP). In the form presented in [DFR20] (other versions were previously derived in e.g. [TCR09], but they are slightly less tight in the regimes of interest for our work), the AEP states the following:

Fact 2.1. (Asymptotic equipartition property, as presented in Corollary 4.10 of [DFR20]) Consider any σ ∈ S=(AB), and let AB denote n copies of the registers AB. Then for any ε ∈ (0, 1), we have

Hmε in(A|B)σ⊗n

>

nH (A|B )σ

−

√ n (2 log(1

+

2 dim(A)))

Hmε ax(A|B)σ⊗n

<

nH (A|B )σ

+

√ n (2 log(1

+

2 dim(A)))

2 log ε2 ,
2 log ε2 ,

(2.15) (2.16)

where dim(A) is the dimension of A.

The AEP essentially states that for any nonzero value of the smoothing parameter, the smoothed min-entropy of n IID copies of a state σ is approximately lower-bounded by n times the

1Earlier versions of the smoothed entropies (e.g. [Ren05]) were defined using trace distance as the smoothing parameter; however, the purified distance is often more convenient for theoretical analysis, and we follow that convention here.

Conceptual overview

15

√ von Neumann entropy, up to some O( n) corrections which would become relatively negligible at large n. In contrast, the unsmoothed min-entropy can be shown to satisfy

Hmin(A|B)σ⊗n = nHmin(A|B)σ.

(2.17)

Hence in the large-n limit, the difference between Hmε in(A|B)σ⊗n and Hmin(A|B)σ⊗n is approximately the difference between nH(A|B)σ and nHmin(A|B)σ, which can be quite substantial. A similar result holds for the smoothed max-entropy. This implies that for privacy amplification and error correction, a significant improvement can be achieved by using the smoothed min- and max-entropies rather than the unsmoothed versions.
With this in mind, let us now turn to precise statements regarding those tasks. First, for privacy amplification, the central result is the Leftover Hashing Lemma (LHL), which we state below in the form given in [TL17] (obtained via a small modification of the proof in [Ren05]):

Fact 2.2. (Leftover Hashing Lemma, as presented in Prop. 9 of [TL17]) Consider any σ ∈ S≤(CQ) where C is a classical n-bit register. Let H be a 2-universal family of hash functions from Zn2 to Zℓ2, and let H be a register of dimension |H|. Define the state

ωKCQH := E (σCQ ⊗ UH ) ,

(2.18)

where the map E represents the (classical) process of applying the hash function specified in the register H to the register C, and recording the output in register K. Then for any εs ∈ 0, Tr[σCQ] , we have

1 2

∥ωKQH

−

UK

⊗

ωQH ∥1

≤

2−

1 2

(Hmεsin

(C

|Q)σ

−ℓ+2)

+

2εs.

(2.19)

In the above theorem, we should interpret the register K as the secret key, and the tracedistance term in (2.19) quantifies how close it is to a uniformly random value that is independent of the “side-information” registers QH. The bound tells us that as long as we choose the length ℓ of the key K to be somewhat less than Hmε in(C|Q)σ, the trace-distance term will be forced to be small. This is more or less the definition of a secret key (see Sec. 2.4), and hence we can interpret it as saying that-
 the procedure specified in the theorem can produce a secret key of length slightly less than Hmε in(C|Q)σ. (Notice that the register H is included in the “side-information” term in (2.19), so H can be publicly announced in the process; however, it must be originally independent from the state σ.)
Next, for one-way error correction, we have the following result from [RR12] (similar results were obtained earlier in [Ren05, RW05], but again, this version is tighter for the parameter regimes in this work):

Fact 2.3. (One-way error correction, as presented in Theorem 1 of [RR12]) Suppose Alice and Bob respectively hold registers C and Q of a cq state σ ∈ S=(CQ), and the task is for Alice to send ℓ bits to Bob such that he can produce a guess for C that is correct with probability at least 1 − ε. Then for any ε˜s ∈ [0, ε), there exists a protocol which achieves this with

ℓ

=

Hmε˜sax (C |Q)σ

+

2 log

ε

1 − ε˜s

+

4.

(2.20)

Technically, there is something of a limitation in the above result, in that the protocol it specifies may be difficult to implement in practice (in contrast, Fact 2.2 describes a relatively simple protocol for privacy amplification). Fortunately, there do exist practical error-correction protocols with performance somewhat close to this threshold, at least heuristically. We discuss further details in Sec. 4.1.1 (see also the error-correction protocol implemented in the [NDN+21] experiment).

Conceptual overview

16

Remark. A subtlety in the above error-correction theorem is that for most results in this vein, the procedure that Alice and Bob actually implement will depend on a full description of the state σ (or at least some “detailed” information about it) — it is not sufficient to simply have the value of Hmε˜sax(C|Q)σ. As an extreme example to demonstrate this, let σcopy be a state where Q is simply a classical copy of C, and let σflip be a state where Q is the bitwise complement of C (taking C to be a b-
itstring register). Then we trivially have Hmε˜sax(C|Q)σcopy = Hmε˜sax(C|Q)σflip = 0. However, the “error-correction” procedure that works for σcopy (trivially, Bob just outputs Q as his guess for C, without receiving any communication from Alice) fails completely for σflip. Hence we see that only knowing the value of Hmε˜sax(C|Q)σ is insufficient, so some care needs to be taken when applying this theorem.
On that note, the protocol in the above theorem only guarantees that Bob’s guess is correct with high probability for the particular state σ that the protocol is designed to work on (and possibly some other states, but we put this aside for now). If it turns out that Alice and Bob share some other state, the protocol does not (in fact, quite obviously cannot, given the example above) by itself guarantee that Bob’s guess is correct with high probability. That particular protocol also does not give -
any indication when Bob’s guess is incorrect. Hence additional steps are often necessary to deal with this when implementing error correction in a full protocol for QKD (in which the states may not behave as intended, due to dishonest behaviour), which we shall discuss when providing a protocol outline in Sec. 2.3 below.
To some extent, these issues are related to the fact that the error-correction protocols we discussed above do not have an abort outcome “built in” (we will analyze this as a separate feature in Sec. 2.3). For protocols with an abort outcome, it is possible to make statements that hold more “universally” for arbitrary states σ, but the parameter ε usually has a different interpretation in that case (see [Ren05] for details) — roughly, it is a bound on the probability that Bob’s guess is wrong and -
the protocol does not abort (a caveat: this is very different from the probability that Bob’s guess is wrong conditioned on the protocol not aborting; see Sec. 2.4 for some difficulties with such bounds).
The bounds in the above two theorems can be proven to be almost tight [RR12], so in some sense the smoothed min- and max-entropies are indeed the “right” quantities to describe these tasks. We can gain some informal intuition of why the concept of smoothing is useful in these tasks as follows (it basically uses the fact that some “error” is allowed, i.e. the RHS of (2.19), or the probability of guessing wrongly in error correction). Taking privacy amplification as an example, let us suppose one ha-
s already proven an “unsmoothed LHL” that states it is possible to produce an ε-secret key of length (approximately) equal to the min-entropy Hmin(C|Q), where by ε-secret we mean the RHS of (2.19) has value ε. Now take a state σ that instead has smoothed min-entropy Hmεsin(C|Q)σ = κ. By definition, this means there is some εs-close state σ′ such that Hmin(C|Q)σ′ = κ, and by the “unsmoothed LHL”, privacy amplification on σ′ can produce an ε-secret key of approximate length κ. But since σ and σ′ are-
 εs-close, this implies2 that applying the same procedure to σ produces an (ε + O(εs))-secret key of the same length κ (since the same procedure was applied). Hence from the “unsmoothed LHL”, we have obtained an LHL that gives key lengths based on εs-smoothed min-entropy instead, at the cost of only an additional O(εs) “penalty” to the secrecy — this is in fact a fairly standard approach to proving the LHL in this form; see e.g. [Ren05, TL17]. Recall from our AEP example that smoothing by just a s-
mall value of εs can significantly increase the value of the smoothed min-entropy, so this is a “useful tradeoff” to make in practice. Similar reasoning applies for error correction, with the caveat that the error-correction procedure to consider is the optimal one for the state that attains the minimum in the smoothing, not the optimal one for the original state.
2Technically, recalling the definitions used in this work, the “closeness” measure between σ and σ′ is purified distance, while the secrecy condition is based on trace distance, so this argument is implicitly relying on the fact that the purified distance upper bounds the trace distance [Tom16]. If one chooses to use other combinations of distance measures, the Fuchs–van de Graaf inequalities can be used to convert the parameters appropriately.

Conceptual overview

17

2.3 Typical protocol outline
We now give an outline of the rough structure that the majority of current DIQKD protocols follow, incorporating some techniques that have recently been proven to improve the keyrates. However, note that there remains some flexibility in the exact manner in which each of these steps is implemented, which leads to subtle differences in protocol performance and security proofs. We shall briefly discuss some of these issues below.
Protocol (sketch)
1. Alice and/or Bob choose a small subset of protocol rounds that will be used to decide whether to accept or abort, typically referred to as test rounds. The rest of the rounds shall be referred to as generation rounds.
2. Measurement: In each round, Alice and Bob’s devices each receive some share of a quantum state. Alice and Bob select inputs to their devices according to some distributions, which may depend on whether the round is a test or generation round, and record the corresponding device outputs. After all the measurements have been performed, they publicly announce the inputs that were used (we shall denote them as X and Y).
3. Sifting: Alice and Bob may erase3 the outputs of some generation rounds (informally, those in which weaker correlations are expected — the most straightforward example would be erasing all rounds in which the inputs correspond to the honest measurements being in different bases).
4. Noisy preprocessing: For all remaining generation rounds, Alice may add a small amount of trusted noise to her output.
5. Error correction: At this point, Alice holds some string A, and Bob holds some string B. Alice and Bob publicly communicate some bits L for error correction, in the sense that Bob can use L and B to produce a guess A˜ for Alice’s string A. Depending on the nature of the error correction protocol, it may be possible for the protocol to abort at this step.
6. Parameter estimation: Using the test rounds, Alice and/or Bob compute the frequencies of each input-output combination (or more broadly, statistical estimators of one or more parameters of the form described in (1.5)). Based on whether these statistics fall within some tolerance range, they decide whether to accept or abort the protocol.
7. Privacy amplification: If the protocol has not aborted by this point, Alice and Bob apply a privacy amplification procedure on A and A˜ respectively to obtain final keys KA and KB.

In the parameter-estimation step of the above sketch, the range of accepted values for the observed statistics would be based on the honest specification, although typically with some tolerance interval (to avoid having the honest implementation abort too frequently from statistical fluctuations). For instance, if the honest devices are expected to achieve a CHSH value of νexp, then typically the parameter-estimation step would accept if the corresponding “statistical estimate” (informally speakin-
g) is greater than νexp − δtol for some δtol > 0. We shall denote the number of rounds in the protocol as a parameter n, and denote the length of the final keys produced as ℓkey — in general, the value of ℓkey (and possibly some other parameter choices in the protocol) would vary with n.
With this general structure in mind, we can define the finite-size keyrate (for a fixed n) and

3For ease of later analysis, here we interpret “erasing” to mean overwriting their output with some deterministic value. Other protocols may describe this step in terms of “discarding” these rounds instead, but this would result in the number of rounds left after sifting being a random variable, which is inconvenient to describe in our subsequent proofs.

Conceptual overview

18

the asymptotic keyrate of such a protocol to be respectively

raten

:=

ℓkey , n

rate∞

:=

lim
n→∞

raten

.

(2.21)

(To be more precise, some definitions of the asymptotic keyrate technically require taking the ε → 0 limit of some security parameter ε, but we defer this discussion to Sec. 2.5.2, after introducing the security definitions.)
The above outline incorporates two recently studied techniques that can improve the keyrates, which we shall refer to as follows:

• Random key measurements: This refers to having Alice and Bob selecting random inputs in generation rounds, in constrast to more commonly-studied protocols [PAB+09, AFRV19] that used a deterministic input in all generation rounds.4 The latter approach has the advantage of usually making the sifting step redundant — by always using highly correlated measurements in generation rounds, no rounds need to be erased.5 However, it was discovered in [SGP+21] that there are situations in which probabilist-
ic choices of generation-round inputs can yield higher keyrates, even after accounting for the siftinginduced loss.

• Noisy preprocessing: This was previously studied in the context of standard QKD, where it was shown that adding some trusted noise to one party’s outputs can in fact increase the keyrates. Recently, the analogous result was proven for DIQKD as well [HST+20, WAP21, SBV+21].

We will return to these techniques in Sec. 2.5.3 to give some informal intuition of why they can improve the keyrates.
Also, note that the outline here is mainly focused on protocols in which the error-correction step consists of Bob producing a guess for Alice’s string A directly. We shall informally refer to such protocols as one-way protocols, because in such protocols the error-correction communication L typically6 consists only of a single string sent from Alice to Bob. However, there can be more elaborate procedures, often involving communication in both directions, in which the goal of that step is for both-
 Alice and Bob to generate some new strings that are (ideally) highly correlated, and may be rather different from Alice’s original string A. Such procedures may be referred to broadly as advantage distillation, and we discuss this in Chapter 5.
As mentioned above, concrete implementations of DIQKD protocols may differ in the details of various steps in the above sketch. We list some of them as follows:

• First is the question of how the test rounds are chosen. One approach may be to select a subset of fixed size uniformly at random. Another approach would be to make the test/generation decision for each round in an IID manner. Roughly speaking, the former approach usually performs better when working under the assumption of collective attacks; however, without that assumption, the proof technique used in this work (based on the EAT) appears to require the latter approach. We return to this in mo-
re detail in Chapter 4.

4A notable exception is the protocol in [JMS20]. However, it achieves this by exploiting the rather specific structure of the nonlocal game chosen for that protocol, in which (for the honest implementation) every input pair produces some output bits that are highly correlated. Hence it is not obvious how to generalize this approach to DIQKD protocols based on other nonlocal games.
5To be more accurate, the idea of using deterministic generation-round inputs was originally an improvement on the initial [BB84] protocol, precisely because it removes the sifting in generation rounds. It is rather surprising that there are some situations in which this turns out to not be optimal.
6The exception would be protocols such as Cascade, where bits are communicated in both directions but the final goal is still for Bob to produce a guess for A.

Conceptual overview

19

• Another issue is the question of whether both Alice and Bob know which rounds are test rounds, which may be needed for them to have the option of using different input distributions in test versus generation rounds. Importantly, this cannot simply be agreed on by public communication before the quantum states are distributed to the devices — if Eve knows this information, she can simply send honest states in test rounds and completely insecure states in generation rounds. A trivial way to addres-
s this without imposing additional protocol requirements is simply for one or both of the parties to always use the same input distribution, without knowing which rounds are test rounds until the inputs are publicly announced after the measurements. For simplicity, the main protocol we study in this work (Protocol 1 in Chapter 4) uses this approach. However, this has the drawback that either a particular input for each party must be used with high probability (in which case the parameter estimatio-
n must account for this biased input distribution), or there are substantial losses in the sifting step (since Alice and Bob will be measuring in poorly correlated bases for a large fraction of generation rounds, as was the case for e.g. the initial [BB84] protocol). We discuss various alternatives in Sec. 4.5.2.
• There are several possible options in the error correction step, not merely in terms of the encoding used to construct L, but rather the requirements and guarantees of the error correction procedure. In this work, we focus on approaches where Bob first produces his guess A˜ (which is intended to be correct with high probability given the honest devices), and then performs a “verification” procedure (see Sec. 2.5) that ensures that if his guess is wrong, the protocol aborts with high probability,-
 even if the devices are not behaving honestly. On the other hand, some other error correction procedures do not perform a verification step in this fashion, but instead implicitly require the parties to first estimate whether the error rate is sufficiently low, and abort if it is not (see e.g. [Ren05]). If one uses such an approach, it may be expedient to swap the order of the error correction and parameter estimation steps, such that the error rate estimation is incorporated into parameter estim-
ation.
• The above outline does not explicitly specify how the test-round outputs are communicated to perform parameter estimation. The most straightforward approach is simply to publicly announce these outputs; however, in the non-IID case we cannot rule out the possibility that this communication leaks information about the generation-round outputs, which slightly reduces the final key length (see Sec. 2.5.4). To reduce this effect, an alternative approach is for Bob’s guess A˜ in the error-correction -
step to also include the test-round outputs, not just the generation-round outputs. This helps to reduce the amount of leakage, because the error-correction string is typically shorter than the raw data. We mainly focus on this approach in this work, in order to optimize the finite-size keyrates, but it comes at the cost of additional steps in the security proof to account for the possibility that Bob’s guess for the test-round data may be wrong. (Also, it precludes the option mentioned above of p-
erforming parameter estimation before error correction.) A related question is whether the test rounds themselves are included when performing privacy amplification, the effects of which we briefly discuss in Sec. 4.5.3. Note, however, that these points only affect the keyrates by an amount on the order of the fraction of test rounds, which typically must be chosen to be small in the non-IID case (see Sec. 4.5.3), though it may still be relevant for potential experimental demonstrations.
• Another issue is whether the length of the final key is fixed before the protocol begins. In principle, one could consider a protocol where ℓkey is chosen as a function of the statistics computed during the parameter estimation step — informally, a shorter ℓkey might be chosen if the statistics indicate more potential eavesdropping. Similarly, it might be possible to adjust the length of the error-correction string L depending on some observed estimate of the error rate. However, for simplicity -
we will focus here on protocols where ℓkey is a

Conceptual overview

20

fixed value, chosen before the protocol begins. (This essentially means we will design the protocol such that it simply aborts if there is not enough entropy to securely produce a key of length ℓkey, even if it might potentially be possible to produce a shorter key.) In line with this, we will focus on protocols where the length of L has an upper bound that is fixed beforehand, and cannot be changed even if the error rate in a run of the protocol is higher than expected. (To account for the fact t-
hat Bob may not guess A correctly in that case, recall we will include a step that ensures the protocol aborts with high probability if the guess is wrong.)

2.3.1 Noisy honest devices

Note that in the above outline, we have implicitly relied on the idea that some honest implementation has been specified, which produces a shared secret key (with high probability) when everything proceeds as intended. We highlight that in general, this honest implementation does not need to be free of noise; for instance, it does not necessarily have to involve distributing a perfect maximally entangled state to the devices. To avoid ambiguity, we shall use the terms honest devices and noiseless -
devices — the former refers to the behaviour we expect “in practice” when there is no unintended deviation from the specified implementation, while the latter refers to the behaviour when the state and measurements are in some idealized “perfect” form, free of any form of noise. As a rough rule of thumb, most security proofs only really require a description of the honest devices; the noiseless devices merely serve as a convenient “intermediate” step to describe the honest devices.
To give a concrete example, many basic DIQKD protocols [PAB+09, AFRV19, HST+20] make use of the CHSH value. In that case, a commonly used simple model for the noiseless devices would be for them to implement IID states and measurements, specifically the following ones (for brevity we describe the measurements as hermitian observables rather than specifying the individual projectors, using X, Y, Z to denote the Pauli matrices):

State

√

|Φ+⟩ := (|00⟩ ± |11⟩)/ 2,

Alice’s measurements x = 0 : Z, x = 1 : X,

Bob’s measureme√nts y = 0 : (Z + X)/√2, y = 1 : (Z − X)/ 2.

(2.22)

This combination of state and measurements is useful because it achieves the maximum possible CHSH value within quantum theory (and due to self-testing properties of the CHSH inequality, is in fact essentially the only one that does so, up to local isometries/ancillas). Strictly speaking, in those protocols Bob usually has an additional measurement (y = 2), corresponding to the same basis as Alice’s x = 0 measurement (i.e. a Pauli-Z measurement). However, this is used only to improve the key gener-
ation rates and is not involved in the CHSH value.
On the other hand, the honest devices in those protocols are usually taken to be somewhat more “realistic” devices that do not perfectly implement the above states and measurements. A simple model for such devices would be depolarizing noise, in which the honest devices are described by a parameter q ∈ [0, 0.5], producing the output distribution

P[ab|xy] = (1 − 2q)P⋆[ab|xy] + 2q 1 . |A||B|

(2.23)

Here, P⋆[ab|xy] refers to some noiseless distribution, which could for instance be produced by (2.22), but more generally can be some other noiseless implementation. If the outputs are binary-valued and some input pair x˜y˜ satisfies P⋆[ab|x˜y˜] = δa,b/2 for the noiseless distribution, then the parameter q is exactly the probability of Alice and Bob obtaining different outputs under the distribution P[ab|x˜y˜]. This is sometimes called the quantum bit error rate (QBER); however, some care should b-
e taken here because q may not be equal to the QBER in other situations. While this model is very simple, it can be motivated by noting that in the 2input 2-output setting, the distributions produced by the devices can always be forced to be

Conceptual overview

21

in the form (2.23) with P⋆[ab|xy] given by (2.22), by applying a “depolarization”/“twirling” procedure [MAG06] (this is not necessarily optimal, but it is always an option).
We can interpret (2.23) as saying that with probability 2q, the noiseless distribution is replaced by uniformly random outputs. Another perspective is that the honest devices implement the noiseless measurements (assumed to be Pauli measurements for simplicity), but instead of noiselessly sharing the state |Φ+⟩, they share the Werner state

ϱq := (1 − 2q) Φ+

Φ+ + 2q I . 4

(2.24)

Another basic noise model would be limited detection efficiency. This is described by specifying some noiseless distribution P⋆[ab|xy] and a detection-efficiency parameter η ∈ [0, 1]. The honest devices in this case produce a distribution which is based on P⋆[ab|xy], but where

each party’s output (for any input) is replaced by an “erasure” symbol ⊥ with probability 1 − η

(independently of the other party). This serves as a simplistic model for single-photon-pair

implementations, in which each photon is independently lost with probability 1 − η (combining

the effects of fibre loss and detector inefficiency into the single parameter η).

However, for protocols based on CHSH (for instance), one would need to ensure the distribution has only 2 outputs. For such cases in this work, assuming that P⋆[ab|xy] is a 2-output distribution

with output labels {−1, +1}, we shall usually use the approach of deterministically mapping the ⊥ output for the honest devices to (say) the −1 output.7 This can be alternatively viewed as applying a classical Z-channel to the outputs of P⋆[ab|xy], flipping +1 to −1 with probability

1 − η. (In some situations, it may be useful to preserve the ⊥ output for some input values; we

will discuss this when it arises.)

The limited detection efficiency model is more complicated to analyze than depolarizing noise, because for any fixed value of η, a different choice of noiseless distribution P⋆[ab|xy] is needed to

yield the highest CHSH value for the honest distribution [Ebe93]. (While higher CHSH values do

not necessarily correspond to better DIQKD keyrates, they can serve as a useful starting guide.)

Furthermore, when studying more realistic photonic implementations, the noiseless distribution P⋆[ab|xy] would not be produced by two-qubit systems like in (2.22), but rather more complicated

states in a photonic Fock space. We do not discuss this here, but examples of such analysis can

be found in [TWF+18, HST+20].

2.4 Security definitions

In this work, we follow the security definition used in e.g. [AFRV19]. Qualitatively, the concepts involved in this definition are: completeness, meaning that the honest devices will accept with high probability, and soundness, meaning that the devices remain “secure” (possibly by aborting) even in the presence of dishonest behaviour. These notions are formalized as follows:
Definition 2.8. Consider a DIQKD protocol such that at the end, the honest parties either accept (producing keys KA and KB of length ℓkey for Alice and Bob respectively) or abort (producing an abort symbol ⊥ for all parties). It is said to be εcom-complete and εsou-sound if the following properties hold:
• (Completeness) The honest implementation aborts with probability at most εcom.

• (Soundness) For any implementation of the protocol, we have

1

1

P[accept] 2

σKAKBE′ −

2ℓkey

|kk⟩⟨kk|KAKB ⊗ σE′ ≤ εsou,

k

1

(2.25)

7Another option is to postselect only on the rounds where both parties had a successful detection. However, this introduces the Bell-test “detection loophole” if implemented naively. There are various approaches towards addressing this loophole, but in this work we stick to the simple solution of forcibly mapping all the outputs to binary values.

Conceptual overview

22

where σ denotes the normalized state conditioned on the protocol accepting, and E′ denotes all side-information registers available to the adversary at the end of the protocol.

The completeness condition is an intuitively sensible requirement for a protocol, and more
formally, it rules out some trivial protocols that fulfill the soundness condition (such as a protocol that simply always aborts, hence achieving P[accept] = 0 and thus εsou = 0). The soundness condition basically states that σKAKBE′ is close in trace distance (up to a factor of P[accept])8 to a state where the honest parties’ keys are (1) always equal, and (2) completely independent of Eve’s side-information E′. In fact, it is often convenient to split the soundness condition into a
pair of slightly simpler conditions roughly corresponding to those two properties. To make this
precise, consider the following definitions:

Definition 2.9. A DIQKD protocol as described above is said to be εcor-correct and εsec-secret if the following properties hold:

• (Correctness) For any implementation of the protocol, we have

P[KA ̸= KB ∧ accept] ≤ εcor.

(2.26)

• (Secrecy) For any implementation of the protocol, we have

P[accept]

1 2

∥σKAE′

−

UKA

⊗

σE′ ∥1

≤

εsec,

(2.27)

where σ is as described in Definition 2.8, and UKA denotes the maximally mixed state (i.e. a uniformly random key for Alice).

It is quite straightforward to show (see e.g. [PR14]) that if a DIQKD protocol is both εcor-correct and εsec-secret, then it is (εcor + εsec)-sound. (Note that the secrecy condition only involves KA, but the intuition is that if correctness holds as well, then the state is close to one where both KA and KB are independent of E′, up to the P[accept] prefactor.) Hence in a security proof, we can prove correctness and secrecy separately, then add the corresponding parameters to get the value of εsou.
Of course, when choosing security definitions, an important consideration should be their operational relevance. The reason we have chosen Definition 2.8 is that in the case of devicedependent QKD, it is sufficient to imply composable security [MR11, PR14, PR21] (we discuss this in more detail in Appendix C). Broadly, this is the notion of ensuring that security still holds when protocols are composed with each other — the idea is that if a protocol satisfies a composable security definition, then-
 it can be “safely” used in place of some other idealized functionality in any larger protocol. For instance, in the case of QKD, the ideal functionality would be (glossing over some details) one that simply outputs a perfect shared secret key whenever it does not abort.
Here, because Definition 2.8 is based on trace distance, one can give an even more concrete operational statement. To give a rough overview (see Appendix C or [PR14, VPR19, PR21] for more detailed exposition): it can be shown that if a QKD protocol is both εcom-complete and

8This prefactor might appear to be an unacceptable weakening of the security definition, since it allows σKAKBE′ to be extremely different from 2−ℓkey k |kk⟩⟨kk|KAKB ⊗ σE′ when P[accept] is small. However, as we shall shortly discuss, this definition indeed turns out to be sufficient to ensure security when composing QKD with other protocols. Furthermore, any “reasonable” security definition regarding the states conditioned on accepting must in fact have some dependence on P[accept] (albeit not ne-
cessarily in this exact form) — this can be seen by noting that Eve could supply completely classical states/devices that give her perfect knowledge of all outputs, in which case even the state conditioned on accepting is trivially insecure. (The protocol’s accept probability for such a state is presumably minuscule, but is typically still nonzero due to simple statistical fluctuations, so it is still mathematically valid to condition on the accept event.) Hence it is impossible to impose a “reaso-
nable” security statement regarding such conditional states unless some dependence on P[accept] is included.

Conceptual overview

23

εsou-sound, then it is ε-secure in a composable sense, with ε = εcom + εsou. We can then derive the following guarantee: if we use an ε-secure QKD protocol in place of the ideal functionality, then the maximum probability of any “failure” event (what constitutes a “failure” can be arbitrary, as long as it is a well-defined event) cannot increase by more than ε. The core idea behind this interpretation is that the trace distance is operationally related to distinguishing probability. Hence if two s-
tates are close in trace distance, then they must be “difficult to distinguish”, which implies that the probability of any event based on the two states cannot differ substantially between them. However, this is not the only consideration, as the full analysis is more involved, based on the Abstract Cryptography framework [MR11] (which allows more general metrics in principle, though they may not have the above operational interpretation).
On the other hand, for DIQKD against coherent attacks, the situation is more complicated because of the memory issue discussed previously. If there are any non-negligible correlations between the public communication in later instances and secret keys in earlier instances, this causes problems if one tries to prove that the definition is composable, because information about the earlier secret keys is being leaked. Hence to restore the same operational implications for DIQKD as in device-dependent-
 QKD, one would likely have to impose some kind of constraint on the device memories, as stated previously. However, strictly speaking, the Abstract Cryptography framework has not been fully formalized in the context of DIQKD devices (i.e. devices that perform some “uncharacterized” measurements). Still, it seems plausible that it could be formalized in a way that allows us to impose the constraint on the device memory across instances, and in that case prove that the same operational implications-
 hold as in device-dependent QKD.
Remark. We highlight that even without constraints on the device memory across protocol instances, we can still prove that the DIQKD protocols we study satisfy Definition 2.8 — there are no issues in proving that it holds as a “standalone” security definition. The memory issue only affects the operational implications of this definition when protocols are composed, not the question of whether the definition itself is satisfied.

2.5 Security proof outline
We now give a rough sketch of how to prove a protocol is secure in the sense defined above, i.e. that it satisfies completeness and soundness. The latter will be proven by showing that the protocol satisfies correctness and secrecy, as previously mentioned.
Completeness: This is usually straightforward to show, as it is only based on the honest behaviour, which is typically IID. Hence as long as there is enough “tolerance” in the parameter estimation step, and the error-correction string L is chosen to be long enough, it is easy to argue that the honest protocol accepts with high probability. (We shall discuss below exactly how long L needs to be in order to ensure this.)
Correctness: This is also straightforward to prove for error-correction procedures that follow the structure we have previously outlined, i.e. those that involve a step to verify whether Bob’s guess is correct. More precisely, this step consists of Alice sending a 2-universal hash of A (together with her choice of hash function) to Bob, who compares it with the hash of his guess A˜ , and accepts if and only if the hashes match. By the defining property of 2-universal hashing, this ensures that the-
 protocol aborts with high probability if A ̸= A˜ , and it is easy to show that this implies the correctness property is satisfied (since KA and KB are produced from A and A˜ respectively). Importantly, notice that this argument does not rely on any other properties of the error-correction procedure, such as the probability of producing a correct guess when the devices behave dishonestly. Focusing on error-correction procedures that include this “verification hash” lets one prove the correctness p-
roperty in a very simple way, “decoupled” from all other properties of the error-correction step.

Conceptual overview

24

Secrecy: The main challenge lies in proving this property. For ease of explanation, we will first describe in Sec. 2.5.1 a proof sketch under the collective-attacks assumption, then later outline in Sec. 2.5.4 how that assumption can be dropped. With the collective-attacks assumption, the initial quantum state shared between Alice, Bob and Eve before the measurements are performed is of the form ρ⊗ABn E, where A, B, E are quantum registers. In the subsequent analysis, we will be referring to sever-
al different registers Alice holds, so to help reduce confusion, we explicitly list the notation here:
• A: Single-round quantum register to be measured by Alice
• A: Full classical output string Alice holds (after noisy preprocessing and sifting)
• Aˆ: Single-round classical value Alice holds (after noisy preprocessing and sifting)
• Aˆx: Single-round classical value Alice holds (after noisy preprocessing and sifting), conditioned on her choosing input x
2.5.1 Collective-attacks analysis
Consider the point in the protocol just before the privacy amplification step. The state storing all the registers of interest at this point9 is of the form ρAA˜ BXYLE, where E denotes all the quantum side-information that Eve stored. Let us assume for simplicity that the protocol is such that all test-round outputs are publicly announced for parameter estimation, and that apart from that, the only publicly communicated information is the error-correction data L and the inputs XY. (Protocols invol-
ving other one-way public communication can usually be accounted for with small modifications to this proof sketch.)
Recall that the protocol aborts during parameter estimation if the observed statistics lie outside of some range of accepted values. Since we have imposed the collective-attacks assumption, in each round we have some well-defined single-round state ρABE and possible measurements Pa|x, Pb|y. This yield some corresponding parameter values Tr Γj(Pa|x, Pb|y)ρAB (see (1.5)) — note that these are just abstract values that cannot be “directly” observed, but for our subsequent argument we only require tha-
t these are well-defined values. For the discussion in this section, let us avoid ambiguity by following statistical terminology conventions: the term parameter will refer to such underlying abstract properties of the process producing the data, while the term statistic will refer to random variables that can be actually observed (or computed from the observations) in the protocol.
With this in mind, let us suppose that the accept condition in parameter estimation is that for every j, the statistic corresponding to an “estimate” of Tr Γj(Pa|x, Pb|y)ρAB (we remain slightly informal about exactly how the statistic is computed) lies inside some interval [νjmin, νjmax]. Now choose some value δstat > 0 (we shall shortly discuss the significance of this value), and note that there are two exhaustive possibilities for the parameters Tr Γj(Pa|x, Pb|y)ρAB :
1. Tr Γj(Pa|x, Pb|y)ρAB ∈/ [νjmin − δstat, νjmax + δstat] for at least one j
2. Tr Γj (Pa|x, Pb|y)ρAB ∈ [νjmin − δstat, νjmax + δstat] for all j
Qualitatively, case 2 is just the statement that the true parameter values lie “δstat-close to”10 the range of values accepted in parameter estimation, while case 1 is simply the complement of
9In a minor abuse of notation, we are using ρ to denote both the pre-measurement quantum state and the state at this point — note that in particular, the only common register between the states in the two situations is Eve’s side-information E, which has the same reduced state in both cases, as long as Eve does not perform any operations on it. (We can indeed assume this without loss of generality because for the purposes of the secrecy definition (2.27), it is always to Eve’s advantage to “preser-
ve” her side-information as long as possible, i.e. she only applies reversible operations to it, in which case we might as well assume she does not operate on it.)
10To avoid confusion, note that this sense of “close to” should not be conflated with the previously mentioned tolerance for deviations from the honest behaviour (which in this notation is essentially captured by the difference

Conceptual overview

25

this possibility. In case 1, by exploiting the IID assumption it is a straightforward exercise in classical statistics to show that the protocol aborts with high probability (given suitable choices for the number of test rounds and the value of δstat). This implies the secrecy definition (2.27) is trivially satisfied in that case, due to the P[accept] prefactor. Hence the rest of this proof sketch is devoted to case 2, which is rather more involved (essentially, we will need bounds on the trace-di-
stance term in (2.27) rather than merely P[accept] alone). However, we will not immediately need to use the fact that we are in case 2 — instead, we shall first find some way to express the key length ℓkey in terms of single-round quantities.

Remark. Note that the cases are defined purely in terms of the parameters, not the statistics. It may be tempting to think that the observed statistics are used to deduce which of the two cases holds. However, this is not the right way to view the proof structure here — using those statistics alone, it is not even possible to assign a probability to each case (this would require an explicit (Bayesian) prior on the device behaviours, which is not part of the security definitions we use). Rather, ou-
r security argument does not rely on identifying which case holds, but merely on the fact that one of them must hold, and proving that the secrecy definition is satisfied in either case.

Let us assume for this sketch that the protocol produces the final key using only the generation
rounds — the collective-attacks assumption implies that the publicly announced test-round data
is completely “decoupled” from the generation rounds, so this allows us to focus our analysis
on the latter. We will also assume that the number of generation rounds is fixed at some value
m, i.e. the test rounds are selected by taking a uniformly random subset of size n − m. Let
AgBgXgYgEg denote the generation rounds within ABXYE. Assuming the generation-round inputs are chosen with an IID distribution (note that in particular, this covers protocols that
use a fixed input in all such rounds), the state on registers AgBgXgYgEg has an IID structure as well: ρAgBgXgYgEg = ρ⊗AˆBmˆXY E, where Aˆ denotes a single round of Alice’s final output string (after sifting and noisy preprocessing), and similarly Bˆ for Bob (after sifting).
With these points in mind, let us compute an expression for ℓkey. The privacy amplification step involves Alice trying to produce a secret key from Ag against Eve’s side-information XgYgLEg. (As briefly noted previously, the secrecy condition only involves Alice’s key, so it suffices to consider her side of the protocol at this step.) Recalling the Leftover Hashing Lemma
(Fact 2.2), this means that the final key will satisfy the secrecy definition as long as ℓkey is chosen such that11

ℓkey ≲ Hmε in(Ag|XgYgLEg),

(2.28)

up to some asymptotically negligible corrections, depending on the desired level of security and choice of ε. (A full security proof would need to account for the fact that we condition on the parameter-estimation and error-correction steps accepting, which can affect various entropies, but we put aside this issue for this sketch — roughly speaking, the effect of conditioning on such events is approximately “cancelled out” by the P[accept] prefactor in (2.27).)
Our proof sketch will hence be based on bounding the RHS of (2.28). The first step is to apply a rather “coarse” chain rule for the smoothed min-entropy (assuming len(L) is a fixed constant,

between νjmin and νjmax). They are distinct parameters — informally, the former describes deviations from the accepted set of values, while the latter describes deviations from the honest behaviour, or in other words it defines
the accepted set of values. In our detailed security proofs later, the latter will be quantified by a parameter δtol (distinct from δstat), which we will use to basically take νjmin = νjexp − δtol, νjmax = νjexp + δtol for some “expected” parameter value νjexp.
11It might seem slightly odd to state an upper bound on ℓkey, given that here we are constructing secure protocols and hence proving lower bounds on achievable keyrates. A perspective that may be helpful is to
view (2.28) as saying that we should be choosing ℓkey as close to that bound as possible, but no higher, since in that case we would be unable to guarantee security via the Leftover Hashing Lemma.

Conceptual overview

26

and focusing on one-way error correction for simplicity; see Sec. 4.1 for further discussion),12

Hmε in(Ag|XgYgLEg) ≥ Hmε in(Ag|XgYgEg) − len(L),

(2.29)

i.e. giving the system L to Eve causes the conditional smoothed min-entropy to decrease by no more than len(L) bits. We now note that the IID structure on AgXgYgEg lets us apply the AEP to bound the first term:

Hmε in(Ag|XgYgEg)

≥

mH (Aˆ|X Y

E)

−

√ O( m).

(2.30)

As for the len(L) term, we should allow L to be long enough such that in the honest protocol, Bob’s guess for A is correct with high probability. This is precisely the point addressed by Fact 2.3 regarding error correction, which tells us that the optimal length of L required for this is approximately

len(L) ≈ Hmε ax(Ag|BgXgYg)hon,

(2.31)

again up to some corrections13 depending on the desired success probability and choice of ε. Note

that this is computed with respect to the honest behaviour, because we are only looking for an

estimate of how long we should allow L to be for that case (recall that we assume the verification of whether A˜ ≠ A, in case of unintended behaviour, takes place as a second step). This means

we can exploit the IID structure on AgBgXgYg for the honest states to apply the AEP:

Hmε ax(Ag|BgXgYg)hon

≤

mH (Aˆ|Bˆ X Y

)hon

+

√ O( m),

(2.32)

yielding an upper bound on the required len(L) in terms of the single-round state.

Putting together all the above inequalities, we see that the secrecy condition will be satisfied

as long as ℓkey is chosen such that

ℓkey

≲

m(H (Aˆ|X Y

E)

−

H (Aˆ|Bˆ X Y

)hon)

−

√ O( m).

(2.33)

While this informal description is mainly to capture the asymptotic behaviour, the constants in
the inequalities and approximations we have used above can all be tracked to yield an explicit expression in terms of m, hence yielding finite-size bounds.14 However, this does not yet describe a concrete choice of ℓkey that we can specify in a protocol description, since H(Aˆ|XY E) is a value that depends on the (potentially dishonest) states and measurements. To obtain this, we
finally use the fact that we have restricted our attention to case 2, i.e. where the states and
12In our protocol outline, we allowed for protocols where L can have length up to some maximum value k, rather than being exactly a fixed length. This might appear to introduce a technical loophole of leaking additional information through the length of L. However, for the purposes of this analysis we can handle it by noticing that the set of bitstrings of length up to k has cardinality 2k+1 − 1, and can hence can be embedded (injectively) in the set of bitstrings of length exactly k + 1. Therefor-
e, for such protocols it suffices to subtract k + 1 instead of len(L) in (2.29), at least if we do not worry about directions of communication in the two-way case.
13We shall implicitly absorb the length of the “verification hash” into this expression — note that the required length for that hash only depends on the desired correctness parameter, and hence is a constant independent of m.
14In some sense, there are two sources of finite-size effects in this analysis. The first, though we did not describe it in detail, is the “statistical” fact that in order to ensure the abort probability in case 1 is high, the protocol must have sufficiently many test rounds. The second is the use of the AEP in (2.30) and (2.32), i.e. the “entropic” fact that the smoothed min/max-entropy of m copies is√in general not exactly equal to m times the von Neumann entropy of one copy, but rather can diff-
er by up to O( m). In this analysis, these effects are treated separately, but it is possible in principle that some analysis which incorporates both these corrections simultaneously might achieve better finite-size bounds. The entropy accumulation theorem we present later indeed incorporates both effects together, although it is not entirely clear whether it achieves tighter bounds in doing so (its main purpose is instead to account for non-IID effects). On a different note, this could arguably b-
e a reason why a finite-size experiment achieving a Bell violation may sometimes still be unable to achieve DIRNG/DIRE/DIQKD — when certifying a Bell violation, one only needs to account for the “statistical” effect, while these DI protocols also need to account for the “entropic” effect.

Conceptual overview

27

measurements have parameters Tr Γj(Pa|x, Pb|y)ρAB sufficiently “close to” the accepted range. That means that we can ensure (2.33) holds by setting

ℓkey ≈ m

inf H(Aˆ|XY E) − H(Aˆ|BˆXY )hon

√ − O( m),

Sclose

(2.34)

where Sclose denotes the set15 of single-round states and measurements captured within case 2. Hence we have finally reduced the expression for an achievable length of secret key to (2.34),
which basically only involves single-round quantities. Note that the H(Aˆ|BˆXY )hon term is easy to compute, since it is simply based on the honest behaviour. The main challenge is the first
term,

inf H(Aˆ|XY E).
Sclose

(2.35)

While this is simple enough to state as an optimization problem, it is highly nontrivial to solve in the DI setting, because no bound is placed on the system dimensions — this means there are effectively infinitely many optimization variables. Furthermore, the optimization is nonconvex because we need to optimize over both the states and the measurements. Hence there may be local minima in the optimization, which means that even if we assume some upper bound on the system dimensions, we still cann-
ot assume that numerical algorithms will find the true minimum. A substantial portion of this thesis (Chapter 3) is devoted to new techniques for solving this optimization.
We remark that the guessing-probability-based approach of [PAM+10, NSPS14, BSS14] can basically be viewed as bounding this optimization via the simple inequality16 H(Aˆ|XY E) ≥ Hmin(Aˆ|XY E) = − log Pguess(Aˆ|XY E), applying the operational interpretation of min-entropy. The guessing probability has the convenient property that when bounding it, Eve’s sideinformation can be taken to be classical without loss of generality, since she needs to measure her state to produce her guess. This allows one -
to bound it arbitrarily tightly using a hierarchy of semidefinite programming (SDP) relaxations developed in the context of quantum nonlocality, known as the NPA hierarchy [NPA08] (we use this SDP hierarchy as well in Sec. 3.4). Conveniently, this SDP formulation easily accounts for arbitrary Bell inequalities, or combinations of several Bell parameters [NSPS14, BSS14]. However, the resulting bound is not very tight because it computes the min-entropy rather than the von Neumann entropy, and the a-
pproaches we present in Chapter 3 are intended to try to avoid this problem.

2.5.2 Asymptotic behaviour
Our above sketch can easily be used to find an expression for the asymptotic keyrate. First note that in the limit of large n, it is possible to choose the fraction of test rounds to be arbitrarily small17, so we have m ≈ n. Furthermore, by carefully choosing the tolerances accepted in the protocol as well as the δstat value (as a function of n; see the discussion below Theorem 4.4 for
15Pedantically, this collection might be a proper class rather than a set, if one allows states and measurements on arbitrary Hilbert spaces (though if we restrict to finite-dimensional Hilbert spaces, and take only one Hilbert space for each dimension as a representative, it can be argued that this is indeed a valid set via the axiom schema of replacement). In any case, all relevant quantities in the security proof are well-defined even when Sclose is a proper class: note that rigorously speaking-
, the optimization should be understood as referring to the infimum of a set of real numbers (i.e. indeed a valid set, since it is a subset of R) defined by an existence quantifier taken over the class of “allowed” states and measurements. For brevity, however, we continue referring to Sclose (and similar collections) using set terminology and notation.
16When Aˆ is binary-valued and uniform, then a tighter bound H(Aˆ|XY E) ≥ 2(1 − Pguess(Aˆ|XY E)) holds, via a relation to trace distance derived as Theorem 14 of [BH09].
17The intuition is that (for the IID case at least) the accuracy of parameter estimation when n is large mainly depends on the absolute number of test rounds, rather than their proportion out of the total number of rounds. Hence for a desired accuracy level, we can fix the number of test rounds as a constant, in which case the fraction of test rounds approaches zero as n increases. See [DF19] or Sec. 4.2 for further discussion.

Conceptual overview

28

explicit expressions, or above (4.26) for the EAT version), it is possible to have Sclose converge (informally) to Sexact, where Sexact denotes the set of single-round states and measurements producing exactly the same parameter values ⃗ν as the honest devices. (Note that Sexact is defined by the constraint of producing the same values of ⃗ν as the honest devices, not that the states and measurements are exactly the honest ones; the latter would be too trivial.) In that case, dividing both sides o-
f (2.34) by n and taking the limit n → ∞ yields

rate∞ = inf H(Aˆ|XY E) − H(Aˆ|BˆXY )hon.
Sexact

(2.36)

This result is sometimes known as the Devetak-Winter bound [DW05], though we remark that a
different proof technique was used in that work, and it was studying a somewhat simpler context where the state ρAˆBˆE is known a priori.18
Strictly speaking, there is a technicality we glossed over when introducing the asymptotic
keyrate, in that the definition (2.21) does not explicitly require that the protocol is secure in any
sense (the definition is mathematically valid without this requirement, but it would then seem
to be a rather useless concept). To get a more “useful” statement, we require some structure
along the following lines: the protocol description involves two parameters n and ε, such that the protocol uses n rounds and is both19 ε-complete and ε-sound, producing a key of length ℓkey(n, ε) (here we shall explicitly denote the dependence of ℓkey on these parameters). With this, we can define the finite-size (and “finite-security”) keyrate and asymptotic keyrate more precisely as

rateεn

:=

ℓkey(n, n

ε) ,

rate0∞

:=

lim
ε→0

lim
n→∞

rateεn

.

(2.37)

The ε → 0 limit in the asymptotic keyrate definition reflects the qualitative idea that we want the protocol to achieve “arbitrarily good security” given enough rounds.20 However, for most security proofs following the approaches we outline in this section, the first limit limn→∞ raten,ε is already a constant independent of ε (as long as ε is not 0 or 1), as we shall show in more detail later (e.g. the derivation of (4.26) in Chapter 4). Hence for brevity, when discussing the asymptotic keyrates i-
n this thesis, we often omit the ε → 0 limit, as in the earlier definition (2.21).

2.5.3 Intuition for keyrate improvements
Before proceeding on, we remark that based on the expression (2.36), we can try to gain some understanding of why noisy preprocessing and random key measurements can improve the keyrate. For noisy preprocessing, observe that adding noise to Alice’s outcome would increase both H(Aˆ|XY E) and H(Aˆ|BˆXY )hon. However, it turns out that in some situations, the first term increases more than the second term, hence improving the overall keyrate.
18More specifically: [DW05] proves that if we are given IID copies of a known cqq state ρAˆBE, then there exists a protocol (using one-way communication) such that we can distill a secret key at asymptotic rate I(Aˆ : B)−I(Aˆ : E), which can be rewritten into the equivalent formula H(Aˆ|E) − H(Aˆ|B), closely resembling the formula we obtained above. However, since their result is based on considering a fixed ρAˆBE, in their formula it is not necessary to take the infimum in the first term or speci-
fy that the second term is computed “honestly”.
19The choice here to use the same ε in both conditions is slightly arbitrary; e.g. one could instead require εcom-completeness and εsou-soundness with εcom + εsou = ε (though the class of protocols fulfilling this version is potentially harder to analyze). Note that it is not enough to just require ε-soundness alone, because the completeness condition is required to rule out the following absurd protocol: Alice and Bob simply use the public classical channel to agree that with probability ε they w-
ill set their “key” to be the all-0 string of length n, and otherwise (with probability 1 − ε) they abort. This is trivially ε-sound since it has P[accept] = ε, and the key length is always ℓkey = n (in fact any arbitrary ℓkey is possible with this construction). However, it is clearly not a reasonable protocol.
20It is important to take the limits in this order: if the ε → 0 limit is taken first, typically this would only give a trivial value of zero. This is because for QKD/DIQKD scenarios (and many other cryptography or coding tasks), it is impossible to achieve an arbitrarily ε-secure key of nonzero length using only a fixed number of rounds, and hence limε→0 raten,ε = 0 holds for each n, after which the n → ∞ limit is trivial.

Conceptual overview

29

As for random key measurements (i.e. choosing the input X according to some nondeterministic distribution), it is helpful to first expand the expression for H(Aˆ|XY E) slightly.
Let us focus only on the generation rounds, following the arguments in the previous section. Also,
we shall assume that protocol is such that the sifting step consists of erasing the outputs of rounds
in which X ̸= Y (most sifting procedures can be phrased this way with an appropriate input labelling). In that case, observe that H(Aˆ|E; X = x, Y = y) = 0 whenever x ̸= y. Furthermore, when x = y, we can write H(Aˆ|E; X = x, Y = y) = H(Aˆ|E; X = x), i.e. the conditioning on y is unnecessary, due to the no-signalling property.21 For brevity, let Aˆx denote a register that stores Alice’s output (after sifting and noisy preprocessing) if she uses input x. Then we can write

H(Aˆ|XY E) = P[X = x, Y = y] H(Aˆ|E; X = x, Y = y)
xy
= P[X = Y = x] H(Aˆx|E)
x
= P[X = Y ] τxH(Aˆx|E),
x

(2.38)

introducing the coefficients τx = P[X = x|X = Y ], which satisfy x τx = 1. (If the protocol includes the test rounds in the privacy amplification step, a similar analysis can be performed,

though the coefficients τx would have a different form.) The prefactor P[X = Y ] is basically

what is often referred to as the sifting factor. We can analyze Bob’s entropy H(Aˆ|BˆXY )hon similarly as well. For this informal sketch, we re-
strict our attention to the simple example of depolarizing noise22, in a scenario where the noiseless

distribution y = 0, 1, 2, 3

is given by are instead

the state and √measuremen√ts in (2.22), except that Z, X, (Z+X)/ 2, (Z−X)/ 2 respectively. For that

Bob’s measurements model, H(Aˆx|Bˆx)hon

is independent of x and hence we just have H(Aˆ|BˆXY )hon = P[X = Y ] H(Aˆ0|Bˆ0)hon. In that

case, we see that the asymptotic keyrate can be written as

rate∞ = P[X = Y ] inf

τxH(Aˆx|E) − H(Aˆ0|Bˆ0)hon .

Sexact x

(2.39)

To show the advantage offered by this approach, we compare (2.39) to a protocol which always uses the input x = 0 for the generation rounds, where the keyrate would be

inf H(Aˆ0|E) − H(Aˆ0|Bˆ0)hon.
Sexact

(2.40)

The key observation is that for (2.40), Eve can optimize her attack to gain maximal information for the x = 0 measurement specifically; in contrast, when random key measurements are used, Eq. (2.39) tells us that Eve is forced to make a “tradeoff” across the information she can gain for each of the inputs x (recall that she has to decide on what state to use before learning which input x would be chosen in that round). Of course, there may be DIQKD scenarios where Eve can gain just as much informa-
tion for all the inputs x as compared to the optimal attack on x = 0 alone23, but it turns out that for some simple cases (most notably protocols based on the

21Slight care is needed here, since it might appear that the sifting procedure (which involves Y ) could affect the claim of no-signalling. This is addressed by the following argument: let ρ′xy denote the state that would be produced on registers AˆE if we perform the measurements for inputs xy followed by noisy preprocessing
immediately, without the sifting step. We can validly invoke the no-signalling property on this state to claim that H(Aˆ|E)ρ′xy does not depend on y. Now observe that for the specific case where x = y, nothing is performed during the sifting step in the protocol, and hence the state in the protocol is the same as ρ′xy. Therefore the entropy H(Aˆ|E) of that state does not depend on y either.
22Other noise models, most notably limited detection efficiency, may not benefit as much from the random-key-
measurements technique; see [SGP+21]. 23This is indeed the case for e.g. the six-state protocol in standard QKD, so the keyrate for that protocol is not
improved by this technique.

Conceptual overview

30

CHSH value), it is indeed the case that not all H(Aˆx|E) can simultaneously be equal to the worst-case value of H(Aˆ0|E). This hence allows for potential improvement of the keyrate.
Remark. We have glossed over the fact that the P[X = Y ] prefactor in (2.39) may reduce the improvement here. However, notice that in the simple noise models where (2.39) holds, this merely rescales the keyrate by a nonzero factor. Our above argument indicates that it is possible to simultaneously have

inf

τxH(Aˆx|E) − H(Aˆ0|Bˆ0)hon > 0, inf H(Aˆ0|E) − H(Aˆ0|Bˆ0)hon < 0,

Sexact x

Sexact

(2.41)

in which case the former is still higher than the latter even after rescaling by P[X = Y ].

2.5.4 Beyond collective attacks

Moving on to coherent attacks, there are several difficulties to address. First, as mentioned previously, one cannot speak of a single distribution P[ab|xy] that holds for all rounds. Because of this, while we can still compute various frequencies using the input-output statistics in the protocol, it is harder to say what these frequencies tell us about the devices themselves. Furthermore, there is also no well-defined notion of a single-round state ρABE that we can compute the entropies of. Anoth-
er issue is that we can no longer assume that the test rounds are decoupled from the generation rounds, so any public communication of the test-round outputs may in principle leak information about the generation rounds — fortunately, this is not too hard to address (though it can have nontrivial effects on the finite-size keyrates), as we shall shortly explain.
Until fairly recently, there were no proof approaches that yielded the same asymptotic keyrates for coherent attacks as compared to collective attacks. The key theoretical result that allowed this to be achieved was the entropy accumulation theorem, proven in [DFR20] (and subsequently improved in [DF19]). The EAT also has the powerful property of simultaneously accounting for the parameter estimation issue.
While there are various technical conditions to address when applying the EAT, we can informally summarize how to apply it in DIQKD. First, instead of the case analysis considered at the start of Sec. 2.5.1, we split into cases where the parameter-estimation step accepts with probability less than some small value εEA, or greater than εEA.24 The first case trivially satisfies the secrecy definition for the same reasons as before. As for the second case, we apply the EAT as follows. Suppose we can -
find some value h ∈ R with the following property: for every round in the protocol, if the devices produce a distribution P[ab|xy] in that round that falls within the accepted tolerances in the parameter-estimation step, then H(Aˆ|XY E) ≥ h. (In contrast to the collective-attacks analysis, this is a more “abstract” quantity for now, which is not meant to correspond exactly to the actual devices.) Informally, the EAT then states that the state conditioned on accepting in the parameter-estimation st-
ep satisfies a bound much like the AEP:25

Hmε in(A|XYLE)

≥

nh

−

√ O( n),

(2.42)

now denoting Eve’s side-information as E since it may not have a tensor-pro√duct structure. Like the AEP, the EAT gives an explicit expression for the constant in the O( n) term — it
depends on the accept probability (which one should expect), as well as some other more technical properties of the lower bound on H(Aˆ|XY E) (i.e. strictly speaking, we do not only need the
single value h when applying the EAT, but also somewhat more complicated properties).

24A very recent work [Dup21] indicates that this case analysis can be avoided, by proving a Leftover Hashing Lemma for R´enyi entropies rather than smoothed min-entropy, but we will not use this in this work.
25Here, the bound involves all the rounds rather than just the generation rounds, because the test and generation rounds cannot be assumed to be independent. This is also why it depends on n rather than m.

Conceptual overview

31

Notice that this statement has already accounted for the statistical estimation issues, because it connects the value h (which was computed based on the abstract distributions for individual rounds) to the parameter-estimation step (which uses the observed input-output statistics in the actual protocol). Also, since the bound is similar to the AEP, we see (skipping some details) that by using this bound (2.42) in place of the AEP bound (2.30), we can obtain essentially the same asymptotic rate (2.-
36) in the end — the analysis of the error-correction terms is mostly unchanged since it is based on the honest behaviour. Regarding the aforementioned issue about the test rounds, this can be addressed by noting that publicly communicating the test-round outputs cannot decrease the conditional min-entropy by more than the number of communicated bits, due to the same simple chain-rule bound as in (2.29). If the fraction of test rounds is small, then the number of bits required for this is fairly s-
mall as well, so it does not affect the keyrates in the asymptotic limit. (Unfortunately, it can have some impact on the finite-size keyrates, the extent of which we will discuss in Sec. 4.5.3.)
We can also consider the proof techniques of [JMS20, Vid17, JK21] for the parallel-input scenario. To give a highly simplified overview, the approach used in these works is to define a single-round 3-player nonlocal game where Alice and Bob try to win a 2-player nonlocal game and Eve tries to guess their outputs. By applying parallel-repetition theorems or threshold theorems or direct-product theorems, one obtains a bound on the probability of Eve guessing the outputs (conditioned on Alice and Bob-
 winning “enough” rounds) when n copies of this game are played in parallel, which can be converted into a bound on the min-entropy via the operational interpretation (2.13). With this in mind, we can also understand to some extent why this approach yields a looser bound than the collective-attacks bound (2.30) (from the AEP) — firstly, the single-round analysis is based on guessing probability, which cannot be converted exactly to the von Neumann entropy; secondly, parallel-repetition theorems us-
ually do not certify exactly the same bound (in terms of the constants involved) for n parallel rounds as compared to n IID rounds.
2.6 DIRNG and DIRE
The above security proofs for DIQKD can more or less be generalized to DIRNG/DIRE. While we will not go into detail here, we can see the broad picture — following an analogous argument, one finds that the length of secret key that can be produced is approximately Hmε in(AB|XYE), since both parties’ outputs can be used and there is no need to implement error correction. (There have been recent proposals [TSB+20, BRC21] to improve over this result by using a “seed recovery” step that we describe in -
Sec. 4.5.2, but we defer further discussion until that point.) Furthermore, by applying the AEP or the EAT [AFRV19] (depending on the allowed class of attacks), we see that the single-round quantity that we need to analyze in this case is basically H(AˆBˆ|XY E) instead, i.e. the entropy of both parties’ outputs. Many of the techniques we present in this work can also be applied to this entropy with minimal modifications, so they can serve to prove achievable keyrates for DIRNG/DIRE as well.
From this, we can also see why DIQKD may be more difficult to realize than DIRNG/DIRE. Namely, the asymptotic keyrate expression (2.36) for DIQKD has the error-correction term H(Aˆ|BˆXY )hon, which is not present in DIRNG/DIRE (as it is only based on a single term, H(AˆBˆ|XY E)). Hence a given set of experimental devices may be able to achieve positive asymptotic keyrates for DIRNG/DIRE, but not for DIQKD. There is also some further advantage for DIRNG/DIRE since the asymptotic keyrate involves th-
e entropy of both parties’ outputs, not just Alice’s. (This does not consider the possibility of DIQKD advantage-distillation protocols as in Chapter 5, where the asymptotic keyrate is not given by (2.36). However, the keyrates for such protocols are much less well understood apart from some somewhat loose upper bounds, so it is difficult to draw a comparison there.)

Chapter 3
Entropy bounds

In this chapter, we will develop methods to solve the optimization (2.35) sketched in the previous chapter. We begin by precisely defining the problem we aim to address. After doing so, we describe in Sec. 3.1 how to transform it to a dual problem with useful structure, and in Sec. 3.2 we transform the objective function into a more convenient form. With these general techniques in mind, in Sec. 3.3 we present an algorithm for computing arbitrarily tight bounds on (2.35) in 2-input 2-output scenar-
ios, making use of a reduction to qubit systems observed in e.g. [PAB+09]. Finally, in Sec. 3.4 we describe some techniques that can be applied for more general nonlocality scenarios. The results in this chapter are mostly based on [TSB+20, TSG+21], and we closely follow the phrasing and presentation in those works. We also briefly describe our results from [HST+20, SBV+21, SGP+21], as well as some independent works [WAP21, BFF21a].
We highlight that although many of the approaches presented in this chapter are numerical, we are not merely heuristically solving the optimization (2.35) (this runs the risk of getting trapped in local minima). Rather, these approaches we present are designed to yield “secure” lower bounds, in the sense that the values returned are guaranteed to be lower bounds on the optimization (2.35), even if they might not be tight in some cases.

Remark. After preparation of this thesis, several subsequent works [BFF21b, MPW21] developed new numerical methods to address this optimization. As compared to the approaches presented here, these new approaches are more computationally efficient and yield tighter bounds. We direct the interested reader to those works for more information.

To allow noisy preprocessing to be described in a relatively simple way, we assume for the purposes of Sec. 3.1–3.3 that Alice’s key-generating measurements only have 2 outcomes, in which case noisy preprocessing simply consists of flipping her output with some probability p (noisy preprocessing on larger numbers of outcomes become more complicated, as it would correspond to more general stochastic maps rather than a simple probabilistic bitflip1). Instead of solving the optimization over the set -
Sclose (which was rather informally defined thus far), we focus on a slightly simpler and more precisely stated problem: given some choice of noisy-preprocessing value p and any values νj ∈ R, compute or lower-bound the function

r˘p(⃗ν) :=

inf

τx H (Aˆx |E )

ρABE ,Pa|x,Pb|y x

s.t. Tr ⃗Γ(Pa|x, Pb|y)ρAB = ⃗ν ,

(3.1)

where the various terms should be understood as follows:

1Even without going to the extent of allowing arbitrary stochastic maps, a slightly more general possibility would be to consider different flipping probabilities for each input x, and our analysis in Sec. 3.1–3.3 can easily be modified to handle this option. However, for simplicity of notation we will not explicitly denote this possibility.

Entropy bounds

33

• ρABE is a tripartite state of arbitrary dimension.
• Pa|x is a projector2 corresponding to Alice’s outcome a for input x, and Pb|y is a projector corresponding to Bob’s outcome b for input y. For the purposes of this optimization, this means they are orthogonal projectors satisfying the constraints a Pa|x = IA for every x and b Pb|y = IB for every y.
• τx are non-negative values corresponding to the conditional probabilities described in Sec. 2.5.3. For the purposes of this optimization, they can simply be treated as some arbitrary constants whose values are fixed by the protocol.
• Aˆx is a register storing the value of Alice’s output for measurement input x, after applying noisy preprocessing.
• ⃗Γ(Pa|x, Pb|y) denotes a tuple of operators of the form Γj(Pa|x, Pb|y) = abxy c(ajb)xyPa|x ⊗ Pb|y for some constants c(ajb)xy ∈ R (recall (1.5)). The notation Tr ⃗Γ(Pa|x, Pb|y)ρAB is shorthand for the tuple Tr Γ1(Pa|x, Pb|y)ρAB , Tr Γ2(Pa|x, Pb|y)ρAB , . . . .
The optimization (2.35) informally sketched in the previous chapter can be viewed as minimizing r˘p(⃗ν) over all values of ⃗ν “close to” the accepted set3, so this is essentially sufficient — we will explain in the next chapter how to convert a solution to the precisely stated optimization (3.1) into a full security proof. (Also, strictly speaking the objective functions of (3.1) and (2.35) differ by a factor of P[X = Y ]; see (2.38). However, this is simply a constant for the purposes of the opti-
mization, hence we ignore it here.)
We highlight that in the optimization (3.1), noisy preprocessing is applied only to the terms in the objective function, not in the constraint terms (recall that the operators Γj(Pa|x, Pb|y) were defined without noisy preprocessing). This corresponds to the fact that in the protocol sketch we described, noisy preprocessing is only applied to the generation rounds, not the test rounds. In principle, one could design a protocol where noisy preprocessing is applied in the test rounds, but this appear-
s to complicate the analysis and the potential keyrate improvements are at most on the order of the test-round fraction (this can be seen from our later discussion in Sec. 4.5.3 regarding the test rounds).
A few observations can be made about the optimization (3.1). Firstly, we can simply restrict the optimization to pure ρABE, since if ρABE is mixed then we can just give Eve the purifying system. Also, if we allow arbitrary values of ⃗ν in the expression, the optimization may turn out to be infeasible. Following standard conventions in optimization theory, we take r˘p(⃗ν) = +∞ in that case, i.e. the infimum of an empty set is +∞. Finally, with this convention, note that r˘p is a convex function (wh-
ich the ˘ in the notation is intended to indicate), despite the fact that it is defined via a nonconvex optimization. This follows from the fact Eve can perform “classical mixtures” of strategies. More precisely: take any ε > 0, any w ∈ [0, 1], and two values ⃗ν0, ⃗ν1 such that the optimization (3.1) is feasible. By definition of r˘p, there exists some strategy achieving the value ⃗ν0 on the constraints with conditional entropy x τxH(Aˆx|E) = t0 for some value t0 ≤ r˘p(⃗ν0) + ϵ. Doing the same for-
 ⃗ν1, we now note that if Eve has a classical register E′ in the state w |0⟩⟨0| + (1 − w) |1⟩⟨1| and uses it to determine which of those strategies to implement (including providing copies of E′ to the users’ devices so they can implement the corresponding measurements), this yields a strategy that achieves value w⃗ν0 + (1 − w)⃗ν1 on the constraints,

2We can assume all the measurements are projective, by considering a suitably chosen joint Stinespring dilation of all the measurements — see Appendix A for detailed discussion.
3An alternate perspective is that the equality constraints in (3.1) can be straightforwardly modified into inequality constraints describing the optimization over Sclose. However, it turns out that some of our security arguments, such as those based on the EAT, are in fact easier to describe in terms of the optimization in the form (3.1).

Entropy bounds

34

and entropy x τxH(Aˆx|EE′) = wt0 + (1 − w)t1. By definition of r˘p, this implies

r˘p(w⃗ν0 + (1 − w)⃗ν1) ≤ wt0 + (1 − w)t1 ≤ wr˘p(⃗ν0) + (1 − w)r˘p(⃗ν1) + ϵ,

(3.2)

proving that r˘p is convex since ϵ > 0 was arbitrary.

Remark. The above convexity argument relies on the fact that we do not bound the system dimensions, because implementing this strategy required the classical ancilla E′ to “keep track of ” the strategy used. If we forcibly impose a bound on the dimensions, this can have the unpleasant effect that r˘p is no longer a convex function (in fact, even the set of values of ⃗ν such that r˘p(⃗ν) is feasible may not be a convex set [DW15]).

The fact that r˘p is convex suggests that there may be some potential in considering techniques from convex optimization, despite the fact that the optimization problem is not itself convex. In particular, an important tool is the Lagrange dual, which we shall now describe.

3.1 Lagrange dual
In general, any constrained optimization is lower bounded by its Lagrange dual, a property known as weak duality. For the optimization (3.1), the Lagrange dual takes the form

sup inf
⃗λ ρABE ,Pa|x,Pb|y

τxH(Aˆx|E) − ⃗λ · Tr ⃗Γ(Pa|x, Pb|y)ρAB − ⃗ν ,
x

(3.3)

where the supremum takes place over all ⃗λ ∈ RN (letting N be the number of constraints). If this bound is tight (i.e. equal to r˘p(⃗ν)), this is referred to as strong duality. It is easily shown that the Lagrange dual is always a convex function of the constraint values ⃗ν. It turns out that because r˘p is convex as well, we can show that strong duality holds for almost all values of ⃗ν, in a sense we shall now make precise.
Since we are applying techniques from convex optimization, we will follow conventions in that field and take the codomain of r˘p to be [0, +∞] (negative values can be ignored because the objective function is non-negative). It is also conventional to define the “domain” of r˘p to be the set of values ⃗ν such that r˘p(⃗ν) < +∞. We shall denote this as dom(r˘p), and in our case this is exactly equal to the set of ⃗ν that are achievable by the states and measurements we consider (this follows from th-
e fact that our objective function is always finite). Finally, for any subset C of an Euclidean space, let relint(C) denote its relative interior (basically, its interior relative to its affine hull; see e.g. [BV04] for a full definition). We shall now show that strong duality holds for all ⃗ν ∈ relint(dom(r˘p)).

Lemma 3.1. For all ⃗ν ∈ relint(dom(r˘p)), the expression (3.3) is equal to r˘p(⃗ν).

Proof. Abstractly, r˘p(⃗ν) is a constrained optimization of the form

inf f (x)

r˘p(⃗ν) =

x∈D

s.t. gj(x) = νj ∀j ,

(3.4)

where D is some optimization domain (which could in principle be a class rather than a set, though we will continue using set notation for it), and f and gj are functions (or class functions) D → R. Denoting the corresponding Lagrange dual (3.3) as s˘p, it takes the form

s˘p(⃗ν) = sup inf f (x) − ⃗λ · ⃗g(x) + ⃗λ · ⃗ν .
⃗λ x∈D

(3.5)

Entropy bounds

35

Take any ⃗ν ∈ relint(dom(r˘p)). Our desired claim would follow by showing that s˘p(⃗ν) ≥ r˘p(⃗ν) (the opposite inequality always holds since the Lagrange dual is always a lower bound on the
optimization). To prove this, we use the fact that since r˘p is convex and ⃗ν ∈ relint(dom(r˘p)), there exists a subgradient of r˘p at ⃗ν (see e.g. [SB14] Prop. 2.2.2). Explicitly, this means there exists ⃗λ⋆ such that

r˘p(⃗ν ′) ≥ ⃗λ⋆ · ⃗ν ′ − ⃗ν + r˘p(⃗ν) ∀ ⃗ν ′.

(3.6)

(Basically, the RHS is an affine lower bound on r˘p that also touches the graph of r˘p at ⃗ν.) Since the Lagrange dual s˘p is a supremum over all possible ⃗λ, it is lower-bounded by setting ⃗λ = ⃗λ⋆,
which yields

s˘p(⃗ν) ≥ inf f (x) − ⃗λ⋆ · ⃗g(x) + ⃗λ⋆ · ⃗ν
x∈D
≥ inf r˘p(⃗ν ′) − ⃗λ⋆ · ⃗ν ′ + ⃗λ⋆ · ⃗ν
⃗ν ′
≥ r˘p(⃗ν),

(3.7) (3.8) (3.9)

where the second line holds4 because for each x ∈ D in the optimization (3.7), we can set ⃗ν ′ = ⃗g(x) to obtain a ⃗ν ′ such that f (x) − ⃗λ⋆ · ⃗g(x) ≥ r˘p(⃗ν ′) − ⃗λ⋆ · ⃗ν ′, and the third line follows
from (3.6). This is the desired result.

While we have only shown that strong duality holds for ⃗ν ∈ relint(dom(r˘p)), this is sufficient to cover practical implementations, since any ⃗ν ∈ dom(r˘p) that is not in the relative interior would instead be a relative boundary point of the set of distributions achievable by the states
and measurements we consider. This is a set of measure zero that is of little relevance after
we take into account the accepted tolerances during parameter estimation. (Alternatively, by
putting a particular form of dimension restriction on the set of allowed states and measurements,
one can ensure strong duality holds for all ⃗ν ∈ dom(r˘p), but we defer the details to [TSG+21].) This is important because the Lagrange dual has some convenient structure, and the fact that
strong duality holds means that there is no loss incurred by studying it in place of the original optimization. We first remark that it is not strictly necessary to solve the optimization over ⃗λ in the Lagrange dual — since that optimization is a supremum, any choice of ⃗λ yields a valid lower bound on r˘p(⃗ν). (Of course, finding better values of ⃗λ yields tighter bounds, but the point is that it is still a valid lower bound even if ⃗λ is not optimal.) Following up on this, a useful property is -
that for each choice of ⃗λ, we can interpret the resulting lower bound on r˘p(⃗ν) to be a function of the parameters ⃗ν, in the sense that we can write

where

r˘p(⃗ν) ≥ ⃗λ · ⃗ν + c⃗λ,

(3.10)

c⃗λ

:=

inf
ρABE ,Pa|x,Pb|y

τxH(Aˆx|E) − ⃗λ · Tr ⃗Γ(Pa|x, Pb|y)ρAB .
x

(3.11)

Importantly, the lower bound (3.10) is affine (when viewed as a function of ⃗ν). This is a useful property for the purposes of security proofs based on the EAT, as we shall later see.
Another useful property is regarding protocol design, as follows. Putting aside technical details, recall that the motivation behind the optimization (3.1) is essentially to compute achievable keyrates for a DIQKD protocol that estimates various Bell parameters Tr Γj(Pa|x, Pb|y)ρAB ,

4A more detailed argument shows that in fact we have equality in this line, i.e. (3.7) = (3.8).

Entropy bounds

36

and accepts if the estimates are “sufficiently close to” some values νj. For such a protocol5, any choice of ⃗λ in the Lagrange dual (3.3) yields some lower bound L on r˘p(⃗ν), with the value

L = inf
ρABE ,Pa|x,Pb|y

τxH(Aˆx|E) − ⃗λ · Tr ⃗Γ(Pa|x, Pb|y)ρAB − ⃗ν ,
x

(3.12)

and thus also some lower bound L˜ on the asymptotic keyrate via (2.36). It now turns out that if the original protocol involves estimating multiple Bell parameters, we can use this value of ⃗λ to construct a new DIQKD protocol that also achieves an asymptotic keyrate of at least L˜, but only needs to estimate a single Bell parameter Tr Γ′(Pa|x, Pb|y)ρAB (and accepts if the estimate is “sufficiently close to” some value ν′), while leaving all other aspects of the protocol unchanged.
This new protocol could be easier to implement in practice, since it only needs to estimate one
parameter. Explicitly, this is achieved by taking Γ′(Pa|x, Pb|y) := ⃗λ · ⃗Γ(Pa|x, Pb|y) and ν′ := ⃗λ · ⃗ν. To show
that the asymptotic keyrate of this new protocol is at least the same value L˜, it would suffice to
show that the minimum value of the optimization

inf

τx H (Aˆx |E )

ρABE ,Pa|x,Pb|y x

s.t. Tr Γ′(Pa|x, Pb|y)ρAB = ν′

(3.13)

is at least L. (The error-correction term H(Aˆ|BˆXY )hon in the keyrate (2.36) can be assumed to remain the same in the new protocol, since it is based on the honest behaviour, which was unchanged.) To do so, we simply note that the optimization (3.13) is lower-bounded by its Lagrange dual, which takes the form

sup inf
λ ρABE ,Pa|x,Pb|y

τxH(Aˆx|E) − λ Tr Γ′(Pa|x, Pb|y)ρAB − ν′
x

≥ inf
ρABE ,Pa|x,Pb|y
=L,

τxH(Aˆx|E) − Tr Γ′(Pa|x, Pb|y)ρAB − ν′
x

which is the desired lower bound.6

(3.14)

3.2 Entropic dual
We now aim to simplify the H(Aˆx|E) terms in the optimization. This can be done by rewriting them based on the approach in [WLC18]. Specifically, recall that we have assumed Alice’s generation-round outputs are binary, and in the noisy preprocessing step, her output is flipped with probability p. In that case, observe that the state produced on AˆxE by performing

5We shall take the values ⃗ν to have been fixed by the protocol, so we shall treat them as constants for the rest of this discussion, without explicitly denoting the ⃗ν-dependence of values such as the optimal choice of ⃗λ (if the supremum is attained) and the resulting lower bound L.
6To consider the “converse” question of whether the new protocol can achieve a higher asymptotic keyrate than the original protocol: this is not possible in principle (at least, for keyrates computed via (2.36)), since the true value of the original optimization (3.1) is always higher than or equal to the new optimization (3.13) — observe that every feasible point of the former is a feasible point of the latter. At most, the optimization (3.13) might perhaps be easier to analyze or more stable und-
er numerical approaches; however, the main advantage offered by the new protocol is likely to still be just the simplified parameter-estimation step (and possibly associated reductions in finite-size effects).

Entropy bounds

37

Alice’s measurement x on ρABE and then applying noisy preprocessing could also be obtained by the following process: append an ancilla T in the state

√ |ϕp⟩T := 1 − p |0⟩T + p |1⟩T ,

(3.15)

apply a pinching channel P(σT ) := t |t⟩⟨t|T σT |t⟩⟨t|T to T , then perform a measurement on AT described by the projectors

P˜a|x := Pa|x ⊗ |0⟩⟨0|T + Pa⊕1|x ⊗ |1⟩⟨1|T ,

(3.16)

and store the outcome in Aˆx without further processing. However, the pinching channel on T can in fact be omitted, because the subnormalized conditional states produced on E would still be the same without it (in the following, we leave some tensor factors of I implicit for brevity, and consider an arbitrary state σABET before applying the pinching channel):

TrABT P˜a|x PT (σABET ) P˜a|x

= TrABT P˜a|x

|t⟩⟨t|T σABET |t⟩⟨t|T P˜a|x
t

= TrABT (Pa⊕t|x ⊗ |t⟩⟨t|T )σABET (Pa⊕t|x ⊗ |t⟩⟨t|T )
t
= TrABT (Pa⊕t|x ⊗ |t⟩⟨t|T )σABET Pa⊕t′|x ⊗ t′ t′ T
t,t′

= TrABT P˜a|xσABET P˜a|x .

(3.17)

Hence we no longer consider the pinching channel on T , i.e. we simply study the situation where we
immediately perform the projective measurement (3.16) on the state ρˆABET := ρABE ⊗ |ϕp⟩⟨ϕp|T state and store the outcome in register Aˆx. As mentioned previously, we can take ρABE to be pure without loss of generality, in which case ρˆABET is pure as well7, and must hence obey the following relation (derived in e.g. Theorem 1 of [Col12]):

H(Aˆx|E) = D(ρˆABT ∥Zx(ρˆABT )) = D(G(ρAB)∥Zx(G(ρAB))),

(3.18)

where

G(σAB) := σAB ⊗ |ϕp⟩⟨ϕp|T , Zx(σABT ) := (P˜a|x ⊗ IB)σABT (P˜a|x ⊗ IB).
a

(3.19) (3.20)

Importantly, this expression for H(Aˆx|E) is entirely in terms of the reduced state ρAB, and is convex with respect to ρAB.

3.3 Qubit reduction
We now specialize to 2-input 2-output scenarios. In such cases, we have the following “qubit reduction” [PAB+09, HST+20]: if one finds a convex function that lower-bounds the right-handside of Eq. (3.1) with its optimization restricted to states ρABE of dimension 2 × 2 × 4 and Pauli measurements (i.e. rank-1 projective measurements), then this function is also a lower
7It was important to remove the pinching channel because if ρˆABET were a mixed state, then Eq. (3.18) would be replaced by D(ρˆABT ∥Zx(ρˆABT )) = H(Aˆx|EE′), where E′ purifies ρˆABET . While H(Aˆx|EE′) is a valid lower bound on H(Aˆx|E), it also turns out to be a trivial one, because the value of T is “copied” into E′, removing the advantage of noisy preprocessing (in which Eve is not supposed to know whether the bitflip has occurred).

Entropy bounds

38

bound on r˘p. Note that there is a subtlety in this condition that there are only 2 inputs and 2 outputs; namely, this condition only needs to apply for the measurements involved in the optimization (3.1), which are the measurements used in the test rounds. In many DIQKD protocols, there are other inputs that Bob uses only in the generation rounds, in order to have stronger correlations with Alice’s output Aˆ (in other words, keeping the value of H(Aˆ|BˆXY )hon low). In terms of the full protocol,-
 Bob is allowed to have more than 2 inputs, and furthermore the inputs that are only used in generation rounds are allowed to have more than 2 outcomes — it is only the test rounds that are restricted to be 2-input 2-output.8
With this reduction, it is possible to obtain bounds on the optimization (3.1) in various scenarios, as long as they are 2-input 2-output. Note that the basic [PAB+09] protocol corresponds to taking p = 0, τx = δx,0 (i.e. only the x = 0 input is used for generation rounds), and imposing only the CHSH value as a constraint. We now give a quick overview of the subsequent developments on this topic, all of which are fairly recent.
Firstly, in [HST+20] the optimization was solved in closed form9 for the case where noisy preprocessing is included, but still only using x = 0 for key generation and only considering the CHSH value. This was achieved by following a similar approach to [PAB+09], though the analysis was substantially more complicated because the noisy preprocessing obstructs some of the simplifications used in [PAB+09] (for example, being able to explicitly compute the eigenvalues of some conditional states). Expli-
citly, the final bound obtained is

1 + (ν/2)2 − 1

1 + 1 − p(1 − p)(8 − ν2)

r˘p(ν) = 1 − h2

2

+ h2

2

,

(3.21)

where ν is the CHSH value. It was also noted in that work that for the limited-detection-efficiency noise model, one can slightly improve the keyrates by using the observation in [ML12]: namely, instead of forcing all the measurements to have binary outcomes, we can keep the ⊥ outcome for Bob’s generation measurement(s). (This is in line with what we noted earlier, that Bob’s measurements for generation rounds are in fact allowed to have more than 2 outcomes.) This somewhat improves the keyrate by-
 keeping the H(Aˆ|BˆXY )hon term smaller, thanks to the data-processing inequality.
Subsequently, in [WAP21] tight closed-form bounds were derived for a more general case: again, noisy preprocessing is allowed while still restricting the generation input to x = 0 only, but now the bound is with respect to a generalized CHSH value,

α (⟨A0B0⟩ + ⟨A0B1⟩) + ⟨A1B0⟩ − ⟨A1B1⟩,

(3.22)

for α ∈ R. The proof approach in this work also served to somewhat simplify the analysis in [PAB+09]. Similar results were obtained independently in [SBV+21], though the approach in that work more closely followed that of [PAB+09], and was partially numerical in the |α| < 1 regime.
Separately, the random-key-measurements technique was proposed in [SGP+21], corresponding to allowing arbitrary choices of τx. This work did not include noisy preprocessing, and only considered the CHSH value. It was found that by using random key measurements, the loophole-free Bell tests in [HBD+15, RBG+17] would be able to achieve positive asymptotic keyrates in principle (we will discuss this in more detail in the next chapter, where we also address finite-size effects). In contrast to the clo-
sed-form results above, this work used a numerical algorithm to obtain secure lower bounds on (3.1). It is rather similar to the one that we shall
8A vital element of this argument is the fact that for the proof approaches we have outlined, it suffices to bound the entropy of Alice’s outputs only (since the H(Aˆ|BˆXY )hon term in (2.36) is instead computed from the honest behaviour); in particular, when solving (3.1) we do not need to consider measurements that Bob only performs in generation rounds. This is not necessarily the case for advantage-distillation protocols, as we discuss in Chapter 5.
9There was a flaw in the proof that the final bound is convex, which was corrected by [WAP21], though it does not change the final expression.

Entropy bounds

39

present next; however, it made use of an inequality that is not provably tight in that context, and later results [WAP21, TSB+20] indicated that indeed there was a small loss introduced by using that inequality.
Given all these techniques, a natural question is whether they can all be combined and analyzed together. This was the goal of the algorithm we developed in [TSB+20]. In summary, its advantage compared to the results listed above is that it achieves all of the following simultaneously: it applies to arbitrary 2-input 2-output protocols, it accounts for noisy preprocessing and random key measurements, and it provably converges to a tight bound. The drawback is that it is a rather computationally in-
tensive numerical algorithm (though we stress again that the resulting bounds are secure; it is not a heuristic minimization). We now describe this algorithm in some detail. For completeness, we will also list in Sec. 3.3.4 the depolarizing-noise thresholds obtained by the approaches of [HST+20, WAP21, SBV+21, SGP+21, TSB+20], for easier comparison. (Very recently, a much more computationally efficient method to solve this optimization under the qubit reduction was developed; refer to [MPW21] for -
further details.)

3.3.1 Secure numerical algorithm
As mentioned above, our goal would be to find convex function that lower-bounds the righthand-side of Eq. (3.1) with its optimization restricted to states ρABE of dimension 2 × 2 × 4 and Pauli measurements. We note (by following the same arguments as before, but with the optimization domain restricted) that if we pick some ⃗λ and solving the optimization (3.11) for the value c⃗λ over such states and measurements, we would obtain such a lower bound via Eq. (3.10), which is trivially convex since it-
 is affine. Hence it suffices to study the optimization (3.11) restricted to such states and measurements. Furthermore, the resulting bounds are still tight in the same sense as before, in that taking the supremum over choices of ⃗λ yields the convex envelope of this restricted version of the optimization (3.1) (except possibly for ⃗ν not in the interior of the quantum-achievable values).
Since we have reduced the analysis to Pauli measurements, it is convenient to use the convention where the measurements have output values in {−1, +1} instead of Z2, and define the corresponding hermitian observables10 Ax := a aPa|x and By := b bPb|y. For 2-input 2-output scenarios, the full probability distribution P[ab|xy] is completely parametrized by the 4 correlators Tr[(Ax ⊗ By)ρAB] and the 4 marginals Tr[(Ax ⊗ I)ρAB], Tr[(I ⊗ By)ρAB] (as long as it satisfies the NS conditions; see Appendix -
D for details of this parametrization). Without loss of generality, one can assume that the marginals are zero [PAB+09, HST+20]11, hence it suffices to focus on the correlators Tr[(Ax ⊗ By)ρAB]. In terms of the optimization (3.1), this means that it suffices most generally to consider situations where there are 4 constraints, corresponding to the observables

Γxy(Pa|x, Pb|y) = Ax ⊗ By, for x, y ∈ {0, 1}.

(3.23)

Considering other forms of constraints in 2-input 2-output scenarios is essentially equivalent to making specific choices of Lagrange multipliers ⃗λ for this 4-constraint formulation. For instance,
imposing a constraint based on the CHSH value is equivalent to restricting to Lagrange-multiplier
combinations of the form (λ00, λ01, λ10, λ11) = (λ, λ, λ, −λ) for some λ ∈ R.

10This notation is similar to the notation Aj, Bj we will use to denote registers in individual rounds in the next chapter; however, we should not need to use these two notations in close proximity and hence there should be little risk of confusion.
11Essentially, this is because one could consider a virtual symmetrization step in which Alice and Bob jointly flip their outputs using a uniformly random public bit, forcing their marginals to be zero. As argued in [SR08, PAB+09, HST+20], the entropy of their original outputs conditioned on Eve’s side-information is equal to the entropy of their symmetrized outputs conditioned on Eve’s side-information and the publicly communicated bit, and hence we can analyze the latter instead (note that the v-
irtual symmetrization does not need to be physically performed; it merely serves as an intermediate construction to study the entropies).

Entropy bounds

40

We still have the freedom to choose the basis in which to express the optimization. Following [SGP+21], we can use the measurement axes of Alice’s two Pauli measurements to define the X-Z plane on her system, taking A0 = Z and A1 = cos(θA)Z + sin(θA)X for some θA ∈ [0, π] (values of θA in [π, 2π] can be brought into this range by rotating our axis choice by π around the Z-axis). Analogously, we can choose a basis for Bob such that B0 = Z and B1 = cos(θB)Z + sin(θB)X with θB ∈ [0, π]. (This is a di-
fferent basis choice from the one in [PAB+09, HST+20] that allows a reduction to Bell-diagonal ρAB. That choice involves more parameters for the measurements, but fewer parameters for the state.)
With this in mind, we rewrite the optimization (3.11) as

min
θA

min
θB

min
ρAB

Fobj

(θA

,

θB

,

ρAB

),

where





Fobj(θA, θB, ρAB) := 

τxD(G(ρAB)∥Zx(G(ρAB))) − ⃗λ · Tr ⃗Γ(θA, θB)ρAB .

x∈{0,1}

(3.24)

(The minima are attained because the objective function is continuous and the domain is compact.)
Furthermore, the objective function is invariant under the substitutions ρAB → (Y ⊗Y )ρAB(Y ⊗Y ) and ρAB → ρ∗AB, which implies [PAB+09] we can restrict the optimization to ρAB that are “almost” Bell-diagonal — sp√ecifically, with respect to th√e Bell basis {|Φ+⟩ , |Ψ−⟩ , |Φ−⟩ , |Ψ+⟩} where |Φ±⟩ = (|00⟩ ± |11⟩)/ 2 and |Ψ±⟩ = (|01⟩ ± |10⟩)/ 2, we can take

LΦ+

ρAB

=

  

ℓ1 0

0

ℓ1 LΨ−
0
0

0 0 LΦ− ℓ2

0

0 ℓ2

 

,



LΨ+

(3.25)

for some LΦ+ , LΨ− , LΦ− , LΨ+ , ℓ1, ℓ2 ∈ R. The optimization (3.24) comprises of minimizations over two measurement angles and the
Alice–Bob state (restricted to the form (3.25)). Our numerical approach is based on the fact that each of these optimizations can be securely lower-bounded individually. The details are somewhat tedious and hence we defer them to Appendix E; however, the key idea in each case can be briefly summarized as follows:

• Minimization over θA: First, we find a continuity bound12 for Fobj(θA, θB, ρAB) with respect to θA. Then by computing the value of Fobj(θA, θB, ρAB) on a sufficiently fine grid of values for θA, we can use the continuity bound to bound the maximum difference between the true minimum and the minimum value on the grid.

• Minimization over θB: We observe that Fobj(θA, θB, ρAB) is an affine function of the variables rZ := cos(θB), rX := sin(θB), which satisfy the constraints rZ2 + rX2 = 1 and rX ≥ 0. These constraints describe a semicircular arc. By using this fact, it is possible to show that this minimization can be relaxed to a minimization over a finite number of
points (which correspond to vertices of a polytope that contains the semicircular arc); an
approach which was used in [SGP+21].

• Minimization over ρAB: In the previous section, we applied the approach of [WLC18] to express the objective function in a form that is convex with respect to ρAB. Hence the minimization can be securely lower-bounded using the Frank-Wolfe algorithm [FW56]

12This is computed by using a continuity bound derived in [SBV+21], which bounds the maximum difference in von Neumann entropy between two states in terms of the fidelity between the states. To the best of our knowledge, this was a novel result (previous continuity bounds such as the Fannes-Audenaert inequality and its refinements [Win16] were based on trace distance; however, we found them to yield worse bounds for our purposes).

Entropy bounds

41

(this was the approach applied in [WLC18]13 for device-dependent QKD, where the task is precisely to solve the minimization over the state, for fixed measurements).

Slight care is needed to correctly combine these individual approaches, but we discuss this as well in Appendix E.4.
In general, this approach faces the difficulty that it needs to optimize over the choice of Lagrange multipliers ⃗λ. Given that our approach for solving (3.24) for a specific choice of Lagrange multipliers is already highly computationally intensive (requiring about 5000 core-hours to achieve the level of accuracy in the bounds (3.28) below for each value of p), it would be impractical to also optimize over the Lagrange multipliers while doing so. It is more feasible to first optimize the Lagrange-
 multipliers while using a simple heuristic algorithm to estimate the minimizations, then certify the final result using our approach for solving (3.24). (This is essentially the same perspective as presented in [SBV+21].)
We remark that this approach can also yield arbitrarily tight bounds for DIRE, where (as noted in Chapter 2) the goal would typically be to find lower bounds on (weighted sums of) the two-party entropies H(AˆxBˆy|E). This is because by the same arguments as above, we have [Col12, TSG+21]

H(AˆxBˆy|E) = D(ρAB∥Z¯xy(ρAB)),
where Z¯xy(σAB) := (Pa|x ⊗ Pb|y)σAB(Pa|x ⊗ Pb|y).
a

(3.26)

(Here we omit the parts corresponding to noisy preprocessing, since it is not relevant for DIRE.) This expression can be bounded in the same way as we have just described above, though the objective function would no longer be affine with respect to (rZ, rX ), and hence the optimization over Bob’s measurements would also have to be approached using a continuity bound. This should yield a substantial improvement over previous results, which simply used the CHSH-based bound of [PAB+09] to bound the -
entropy of only one party’s outputs [LLR+21], or which consider the full distribution and bound the entropy of both outputs but use inequalities that are not tight [BRC20, TSG+21, BFF21a]. In addition, the fact that it allows for the random-keymeasurement approach could yield further improvements, though there are some technicalities that we address at the end of Sec. 4.5.2. We remark that this question was recently explored using heuristic numerical methods, in [BRC21].

3.3.2 Resulting bounds
Putting aside the precise details of the approach, we now turn to the results obtained. We focus on the situation where τ0 = τ1 = 1/2 and the only constraint imposed is the CHSH value, because this is the relevant situation for the full protocols studied in the next chapter. More precisely, we consider the described optimization with a single constraint corresponding to the operator

Γ(θA, θB) = A0 ⊗ B0 + A0 ⊗ B1 + A1 ⊗ B0 − A1 ⊗ B1,

(3.27)

with the constraint value ν being the CHSH value. (As previously mentioned, this can be implemented in the formulation where are 4 constraint operators Γx,y(θA, θB) by simply restricting to Lagrange-multiplier choices of the form (λ00, λ01, λ10, λ11) = (λ, λ, λ, −λ).) Each choice of the associated Lagrange multiplier λ yields an affine lower bound of the form λν + cλ, as noted in Eq. (3.10). Importantly, some heuristic computations (also observed in [SGP+21] for the p = 0 case) suggest that the tr-
ue bound r˘p(ν) in this situation is in fact affine over a wide range of
13Recently, an improvement over this approach was achieved using an interior-point algorithm [HIL+21], which was found to converge substantially faster. In principle, this could be used to replace the Frank-Wolfe algorithm here as well, though we leave this for future work.

Entropy bounds

42

Entropy
1.0 0.8 0.6 0.4 0.2
2.2

2.4

2.6

(a) p = 0

Entropy
1.00

0.95

0.90

0.85

0.80

0.75

CHSH value

2.8

2.2

2.4

2.6

(b) p = 0.2

CHSH value
2.8

Figure 3.1: (From [TSB+20]) The solid lines are the certified lower bounds we obtained (Eq. (3.28)), while the points indicate the results of heuristically solving the optimization (3.1) over qubit states and measurements (with just the CHSH value as the constraint). As previously discussed, the tight bound in each case would be given by the convex envelope of the curve traced out by the points, assuming that the heuristics have found the true minimum. However, we can see that in each case that cu-
rve appears to be nonconvex over the interval [2, 2.75] (approximately), and its convex envelope would be affine over that interval — specifically, it would be given by the linear interpolation between the feasible points at the ends of that interval. The certified bound is almost flush with this linear interpolation, indicating that it is basically tight over this interval.

CHSH values — we show this in Fig. 3.1, which displays the results of heuristic minimizations compared to our certified bound in some cases. In particular, this range on which the bound is affine covers all currently experimentally reasonable values. This has the implication that there is a single λ that yields an affine lower bound which is equal to r˘p(ν) (i.e. it is tight) over this entire range; specifically, it is simply the value of λ corresponding to the gradient of r˘p(ν) in this range. Th-
is greatly simplifies our task since we only need to solve the optimization for this specific value of λ.
We focused on several values of noisy preprocessing, ranging from p = 0 to p = 0.45. In each case, we first solved the minimization (3.11) heuristically for some selection of values of λ, in order to estimate the choice of λ that yields a tight bound over the range of CHSH values in which r˘p(ν) is affine. Then using our algorithm to get certified bounds on the corresponding cλ in (3.11), we arrived at the final bounds

r˘0(ν) ≥ 1.190(ν − 2) − 0.00454, r˘0.2(ν) ≥ 0.327(ν − 2) + 0.72063, r˘0.3(ν) ≥ 0.139(ν − 2) + 0.88051, r˘0.4(ν) ≥ 0.0341(ν − 2) + 0.97055,
r˘0.45(ν) ≥ 0.00855(ν − 2) + 0.992487,

(3.28)

some of which are shown in Fig. 3.1. So far, these are only the bounds on the conditional entropy against Eve. We now turn to the
question of the resulting keyrates. For simplicity, let us focus on the depolarizing-noise scenario, and consider a protocol where the asymptotic keyrate is given by

rate∞ = r˘0(ν) − H(Aˆ0|Bˆ0)hon,

(3.29)

with ν still denoting the CHSH value. This is just the expression (2.39) mentioned in Sec. 2.5.2, taking P[X = Y ] = 1 and τ0 = τ1 = 1/2. It may seem unclear how to ensure that P[X = Y ] = 1 in an actual protocol, but we will address this in the next chapter by explicitly presenting a protocol (Protocol 2) that achieves this asymptotic keyrate (at least in terms of net key generation) by using a pre-shared key. In Fig. 3.2, we plot the keyrates given by applying our bounds (3.28) to this expressio-
n. From the p = 0.3 bound, we obtain a depolarizing-noise threshold of 9.33%. However, we were unable to obtain better thresholds using the higher values of p, for reasons we shall now discuss.

Entropy bounds

43

Keyrate
1
0.500

0.100 0.050

0.010 0.005

q

0.02

0.04

0.06

0.08

Figure 3.2: (From [TSB+20]) Lower bounds on asymptotic keyrates under depolarizing noise q, on a vertical log scale. The black, blue, and red solid curves show the asymptotic keyrate given by the expression (3.29), for noisy-preprocessing values of p = 0, 0.2 and 0.3 respectively, based on the bounds (3.28). For comparison, the dashed curves show the corresponding asymptotic keyrates of the protocol in [HST+20], which does not use the random-key-measurement method (the p = 0 case is equivalent to -
the [PAB+09] protocol). The solid curves intersect the horizontal axis at q = 8.39%, 9.26% and 9.33%, in order of increasing p. The first value is a minor improvement over [SGP+21] (despite being effectively the same protocol), likely because our algorithm provably converges to a tight keyrate bound (for fixed p). The last value exceeds all previous bounds [HST+20, SGP+21, WAP21, SBV+21] for depolarizing-noise tolerance (see Sec. 3.3.4). It is also close to the upper bound of 9.57% that we derive -
in Appendix E.5.

3.3.3 Tightness of bounds
For each of the bounds in Eq. (3.28), there is a feasible point of the optimization for cλ which yields a value within 0.005 (or less, for higher values of p) of the certified results shown in Eq. (3.28), so these bounds on entropy are very close to optimal in terms of absolute error. In terms of the depolarizing-noise thresholds that they yield, taking the convex envelope of some of the feasible points shown in Fig. 3.1 yields the result that the thresholds for p = 0.2 and p = 0.3 cannot be impro-
ved by more than about 0.1 percentage points, so those thresholds are very close to optimal as well. However, larger values of p face the issue that the asymptotic keyrate becomes extremely low, which makes the horizontal intercept (i.e. the depolarizing-noise threshold) very sensitive to changes in r˘p — even a small absolute error in this bound results in a significant change in the threshold value. Therefore, the thresholds we obtained from the certified bounds with p = 0.4 and p = 0.45 in Eq. -
(3.28) were only 9.32% and 9.10% respectively, worse than the results for p = 0.3. Heuristic computations suggest that the true thresholds for those cases might be approximately 9.46% and 9.50% respectively, but using our algorithm to certify these values would require it to converge to tolerances that currently appear impractical. Hence a different approach may be needed to find the true thresholds for these values of p. From a practical perspective though, such improvements may be of limited use-
, because the very low asymptotic rates mean that the finite-size keyrate would likely be zero until extremely large sample sizes.
In any case, we note that for depolarizing noise at least, the threshold value cannot be improved much further by any protocol choices within the framework we have presented in this section, e.g. by using the full distribution as constraints (which also encompasses the use of modified CHSH inequalities [WAP21, SBV+21]), or adjusting the values of τx. This is essentially be√cause our bounds are very close to the linear interpolation between the points (2, h2(p)) and (2 2, 1), as can be seen from Fi-
g. 3.1. Intuitively speaking, the bound on the entropy against Eve in the depolarizing-noise scenario cannot exceed this linear interpolation (because Eve can always perform classical mixtures of strategies in order to attain every point on this linear interpolation),

Entropy bounds

44

which means that our bounds are close to the highest bounds that are even possible in principle. We discuss this in detail in Appendix E.5.

3.3.4 Comparison of noise thresholds
For easier reference, we briefly list the depolarizing-noise thresholds at which the keyrates given by the various approaches become zero. Unless otherwise specified, all these results are based on the CHSH value only.

Basic [PAB+09] protocol: Noisy preprocessing only [HST+20, WAP21]: Noisy preprocessing and modified CHSH as in (3.22) [WAP21]: Random key measurements only14 [SGP+21, TSB+20]: Noisy preprocessing and random key measurements [TSB+20]:

7.14% 8.08% 8.34% 8.39% 9.33%

Also, there is an upper bound of 9.57% (see Appendix E.5) on the noise threshold for this family of protocols.
For limited detection efficiency, the situation is more complicated, because of the fact that the choice of noiseless behaviour needs to be tailored as a function of η. To roughly summarize, focusing on the case where the noiseless distribution is produced from a two-qubit state (see [SBV+21] for results for a more sophisticated photonic model), the best detection efficiency threshold achieved without using any of the techniques described here was 86.5% (though a number of other values have been c-
ited; see Appendix F for a brief summary of the variants). The results of [HST+20, WAP21, SBV+21] showed that the threshold can be lowered to 82.6% by using noisy preprocessing and keeping the ⊥ outcome for Bob’s generation measurement [ML12]. They also found that using modified CHSH inequalities did not improve this threshold specifically as compared to using the CHSH value (though it gives small improvements in other situations). These works do not implement random key measurements. On the other-
 hand, [SGP+21] found that the random-key-measurements technique on its own does not improve the threshold significantly as compared to the basic [PAB+09] protocol, although it does somewhat increase the keyrates in the regime where the keyrate is already positive.
When these techniques are combined, it is unclear how much the detection-efficiency threshold is changed, because of the complexity of optimizing the various parameters. With some heuristic exploration in [TSB+20], we were unable to improve the threshold significantly as compared to the [HST+20, WAP21, SBV+21] values. However, these heuristic results may not have found the true optimal choice of noiseless behaviour — see also the results of [BFF21b, MPW21], which found some improvements by conside-
ring statistics other than the CHSH value.

3.4 General scenarios
We now turn to the question of how to go beyond 2-input 2-output scenarios. Currently, this is still something of an open question — in [TSG+21], we developed an approach to handle this; however, the bound is not tight, and does not consider noisy preprocessing (though in light of this, we do allow more than 2 outputs for the key-generating measurements, in principle). A subsequent work [BFF21a] by other authors has similar limitations, though it is significantly better in terms of computational e-
fficiency. (The bounds in these two works seem to perform well in different noise regimes.) Very recently, the same authors developed a computationally efficient method which converges to arbitrarily tight bounds on this optimization [BFF21b], and this currently
14The value stated here is the one derived in [TSB+20], as it is slightly better than the result obtained in [SGP+21] based on a bound that may not be tight.

Entropy bounds

45

appears to be the state of the art on this topic. Still, [TSG+21] was our first attempt to address the optimization (3.1) without going through the indirect approach via min-entropy [PAM+10, NSPS14, BSS14] or the specialized approach of the qubit reduction [PAB+09], and we shall thus focus on presenting it here.
To give an overall picture, the basic idea behind this approach (and also that of [BFF21a, BFF21b]) is to find a way to lower bound the optimization (3.1) in terms of an expression of the form

optimize Tr Q M⃗ ρ
ρ,M⃗
s.t. Tr Rj M⃗ ρ = 0 ,

(3.30)

where the optimization (which can be a supremum or infimum) takes place over states ρ and operators Mk of arbitrary dimension, and the functions Q and Rj are (noncommutative) polynomials in the operators Mk. The operators Mk may also be required to satisfy some algebraic constraints such as orthogonality conditions or commutation relations. Such an optimization may be referred to as a noncommutative polynomial optimization.
Importantly, such optimizations in the context of nonlocality have been a subject of some interest, and an approach was developed for relaxing such optimizations to a hierarchy of SDPs, known as the NPA hierarchy [NPA08]. This is an infinite sequence of SDPs such that each SDP provides a secure bound on the optimization (3.30), and in some scenarios of interest (such as computing the maximum Bell value that can be obtained by quantum systems on arbitrary Hilbert spaces), it can be proven that this-
 sequence of bounds converges to the true optimal value. Hence by reducing our optimization to the form (3.30), we can apply the NPA hierarchy to obtain secure lower bounds on our main optimization. The guessing-probability bounds derived in [PAM+10, NSPS14, BSS14] were based on this SDP hierarchy as well, though as noted in Chapter 2, this does not yield a very tight bound on the von Neumann entropy.
We now turn to the details. In this section, one should keep in mind that while we do not have the qubit reduction, we do still impose the condition that all operators are finite-dimensional (to avoid technical issues in some of the theorems we use).15 However, the bounds we derive will hold for all finite dimensions, and are independent of the dimension. Also, for the following calculations, it will be easier to work with entropies in base e rather than base 2. We shall denote this with the subsc-
ript nat, i.e. we have H(Aˆx|E) = (log e)Hnat(Aˆx|E) and so on. Hence in place of (3.1), we study

inf

τxHnat(Aˆx|E)

ρABE ,Pa|x,Pb|y x

s.t. Tr ⃗Γ(Pa|x, Pb|y)ρAB = ⃗ν .

(3.31)

Obviously, this optimization is equivalent to (3.1) after rescaling by log e.

3.4.1 Using the Lagrange dual
We first present an approach based on the Lagrange dual. As mentioned above, we restrict our attention to the simpler situation where there is no noisy preprocessing. In that case, rather

15The NPA hierarchy itself is a notable exception to this restriction, since in fact it converges to the value for infinite-dimensional systems (and strictly speaking, only imposes commutation constraints between the measurements, rather than a tensor-product structure). Hence in principle, the NPA hierarchy may in fact not converge to precisely the value of interest we consider in this work, which is restricted to systems of arbitrary finite dimension, with a tensor-product structure between Alic-
e and Bob. However, since it bounds a larger set than we consider in this work, the resulting bounds are still guaranteed to be secure, which is sufficient for security proofs (though the results may not be tight).

Entropy bounds

46

than Eq. (3.18), we have a simpler relation (again by Theorem 1 of [Col12]):

H(Aˆx|E) = D(ρAB∥Z¯x(ρAB)),
where Z¯x(σAB) := (Pa|x ⊗ IB)σAB(Pa|x ⊗ IB).
a

(3.32)

Furthermore, for now we will focus on the case where τ0 = 1 and τx = 0 otherwise (in short,
τx = δx,0), deferring the case of arbitrary τx to Sec. 3.4.4. We prove the following result for this situation:16

Theorem 3.1. When noisy preprocessing is not applied, and τx = δx,0, the optimization (3.31) is lower bounded by

1 sup −
⃗λ e

sup Tr exp ln(Z¯0(σAB)) + ⃗λ · ⃗Γ(Pa|x, Pb|y)
σAB ,Pa|x,Pb|y

+ ⃗λ · ⃗ν,

(3.33)

and this bound is tight for all ⃗ν such that strong duality holds in the Lagrange dual. Furthermore, this is in turn lower bounded by

1

sup − ⃗λ e

sup Tr σAB Q0(Pa|x, Pb|y)
σAB ,Pa|x,Pb|y

+ ⃗λ · ⃗ν,

(3.34)

where Q0(Pa|x, Pb|y) is an operator polynomial defined via the following expression17 (the indices ⃗a, ⃗a′ in the summation here range over the set A|X |, and similarly the indices ⃗b,⃗b′ range over the set B|Y|):



Qx¯(Pa|x, Pb|y) :=

eα⃗+a⃗b⃗a′⃗b′ α⃗a−⃗b⃗a′⃗b′ csch α⃗a−⃗b⃗a′⃗b′ Z¯x¯ 

⃗a⃗b⃗a′⃗b′

†
Pa′x|x ⊗ Pb′y|y
xy


Pax|x ⊗ Pby|y  ,
xy
(3.35)

where

α⃗a±⃗b⃗a′⃗b′

:=

1 2

jxy λj c(ajx)byxy ± c(aj′x)b′yxy . The two operator products in (3.35) must be taken

in the same order over xy; any orderings satisfying that condition yield a valid lower bound.

This theorem gives us a method to compute secure lower bounds on the optimization, since in the second expression (3.34), for any fixed choice of ⃗λ we can apply the NPA hierarchy to bound the inner optimization in that expression. Optimizing over values of ⃗λ yields tighter bounds — again, it suffices to do this optimization heuristically, since every feasible ⃗λ yields a secure lower
bound. Also, one can experiment with different orderings of the operator product to obtain
better bounds. Finally, we remark that when implementing this approach, it is useful to make
a slight further simplification to (3.35): if we denote the first index in the operator product as x⋆y⋆, then we have (recalling both operator products were to be taken in the same order)

†
Pa′x|x ⊗ Pb′y|y
xy

Pax|x ⊗ Pby|y
xy

= . . . Pa′x⋆ |x⋆ ⊗ Pb′y⋆ |y⋆ Pax⋆ |x⋆ ⊗ Pby⋆ |y⋆ . . .

= . . . δa′x⋆ ,ax⋆ δb′y⋆ ,by⋆ Pax⋆ |x⋆ ⊗ Pby⋆ |y⋆ . . . ,

(3.36)

16For now we only need the x¯ = 0 case of the formula (3.35), but for later use we shall write this expression for
arbitrary x¯ ∈ X . 17The expression α csch α has a removable discontinuity at α = 0; it should be understood to be “filled in” by
replacing it with its limit value, i.e. we take 0 csch 0 := limα→0 α csch α = 1.

Entropy bounds

47

which lets us eliminate some terms from the sum using the Kronecker deltas (specifically, we can omit all terms such that a′x⋆ ̸= ax⋆ or b′y⋆ ̸= by⋆).
In the remainder of this section, we present a proof of Theorem 3.1, in a somewhat expository
fashion. We begin by again using the fact that the optimization (3.31) is lower-bounded by the Lagrange dual (3.3) (with the trivial modification of having Hnat(Aˆx|E) in place of H(Aˆx|E)). We put aside for now the supremum over the Lagrange multipliers ⃗λ, with the implicit understanding that to get as tight a bound as possible, we will have to optimize over ⃗λ at the end. In that case, the ⃗λ · ⃗ν term can be treated as a constant, so we omit it from further study as well. We can
now simplify the remaining terms of interest in the Lagrange dual (3.3) by applying (3.32) and
then following the calculation in [CML16]:

inf

Hnat(Aˆ0|E) − Tr ⃗λ · ⃗Γ(Pa|x, Pb|y)ρAB

ρABE ,Pa|x,Pb|y

= inf Dnat(ρAB∥Z¯0(ρAB)) − Tr ⃗λ · ⃗Γ(Pa|x, Pb|y)ρAB
ρAB ,Pa|x,Pb|y

=

inf

Dnat(ρAB∥Z¯0(σAB)) − Tr ⃗λ · ⃗Γ(Pa|x, Pb|y)ρAB

ρAB ,σAB ,Pa|x,Pb|y

1 = inf − Tr exp
e σAB ,Pa|x,Pb|y

ln(Z¯0(σAB)) + ⃗λ · ⃗Γ(Pa|x, Pb|y)

,

(3.37)

where the last line uses the fact that the infimum over ρAB can be solved explicitly [ZTF14]. This gives us the first claimed lower bound (3.33) (after restoring the ⃗λ · ⃗ν term in the Lagrange dual and moving the −1/e prefactor out of the infimum, flipping it to a supremum in the process). Furthermore, the series of calculations leading up to (3.37) were all equalities, so this bound is tight as long as ⃗ν is such that strong duality holds.
Our next goal is to reduce the bound to an operator polynomial (eventually arriving at the expression (3.34)). We begin with an informal observation: notice that in (3.37), it would be convenient if we could split the terms in the operator exponential, in the sense of claiming that

Tr[exp(M1 + M2 + · · · + MN )] =? Tr[exp(M1) exp(M2) . . . exp(MN )] .

(3.38)

For instance, exp ln(Z¯0(σAB)) on its own would just simplify to Z¯0(σAB). Also, note that the ⃗λ · ⃗Γ(Pa|x, Pb|y) term is a linear combination of some projectors Pa|x ⊗ Pb|y, and for each fixed input pair xy, the operators {Pa|x ⊗ Pb|y}ab form a resolution of the identity (i.e. they are orthogonal projectors satisfying ab Pa|x ⊗ Pb|y = IAB). This implies that a useful equality holds: for each pair xy, and any coefficients µab ∈ C, we have

exp

µabPa|x ⊗ Pb|y =

eµab Pa|x ⊗ Pb|y.

ab

ab

(3.39)

Hence if we were able to split the exponential by grouping the terms in ⃗λ · ⃗Γ(Pa|x, Pb|y) according to their values of xy, the resulting exponentials could be simplified into simple linear combinations of the projectors Pa|x ⊗ Pb|y, and their product would be an operator polynomial as we would like to have.
Of course, the equality (3.38) does not hold except in some special cases, such as when all the operators commute. Fortunately, some inequalities of roughly that form hold, when the RHS is written appropriately. The most well-known of these is likely the Golden–Thompson inequality,

Tr[exp(M1 + M2] ≤ Tr[exp(M1) exp(M2)] .

(3.40)

However, a generalization of this inequality to arbitrarily many operators was developed fairly recently [SBT16]:

Entropy bounds

48

Fact 3.1. (Special case of Corollary 3.3 in [SBT16]) Let M1, M2, . . . , MN be hermitian operators on a finite-dimensional Hilbert space, and define the function β(t) := (π/2)(cosh(πt) + 1)−1.
Then







2

1 + it

Trexp  Mj ≤ dt β(t) Tr exp

j

R

j

2 Mj  .

(3.41)

The inequality holds for any ordering of the operator product.

Since the operator product ordering is arbitrary, this implies that for any j⋆ ∈ [N ], we can
choose to place Mj⋆ at the last position in the operator product and slightly simplify the RHS of the above bound18 using trace cyclicity:









1 + it

Trexp  Mj ≤ dt β(t) Tr  exp

j

R

j̸=j⋆

2 Mj  exp



1 + it

= dt β(t) Trexp(Mj⋆) exp

R

j̸=j⋆

2 Mj

1 + it 2 Mj⋆
2 .

2 
(3.42)

In our context, this means we can choose Mj⋆ = ln(Z¯0(σAB)) to get

Tr exp ln(Z¯0(σAB)) + ⃗λ · ⃗Γ(Pa|x, Pb|y)

= Tr exp ln(Z¯0(σAB)) +

λ˜abxyPa|x ⊗ Pb|y

xy ab

where λ˜abxy =

λj c(ajb)xy ∈ R

j



2

≤ dt β(t) TrZ¯0(σAB) exp

R

xy

1 + it 2

λ˜abxyPa|x ⊗ Pb|y

ab

.





= dt β(t) TrσABZ¯0  exp

R

xy

1 + it 2

λ˜abxyPa|x ⊗ Pb|y

ab

2  since Z¯0 is self-adjoint





2

= dt β(t) TrσABZ¯0 

exp

R

xy ab

1

+ 2

it

λ˜abxy

Pa|x ⊗ Pb|y  ,

(3.43)

where in the last line we expanded the operator exponentials using (3.38). In principle, this is now an operator polynomial. However, to bound it using the NPA
hierarchy in practice, we would need to explicitly evaluate the integrals to obtain the coefficients in the polynomial. We now explain how to evaluate these coefficients such that we arrive at the formula (3.35) — this is a tedious but conceptually fairly straightforward process. We begin by

18In [TSG+21], some of these expressions were written with the integral inside the trace for ease of presentation.

In principle, moving an integral into a trace could cause convergence issues, so we avoid doing so in the description

here. Though it can be argued that this is anyway not a problem for this particular theorem: since the operators

2

are finite-dimensional, they can be treated as matrices, and we note that the matrix elements of

j exp

1+it 2

Mj

are bounded (over t ∈ R). Together with the fact that

dt β(t) is absolutely convergent, this ensures the integral
R

for each matrix element converges.

Entropy bounds

49

expanding the product xy over the sum ab in (3.43), rewriting the expression as





2

dt β(t) TrσABZ¯0 

exp

R

⃗a⃗b xy

1

+ 2

it

λ˜ ax by xy

Pax|x ⊗ Pby|y 





2

= dt β(t) TrσABZ¯0  exp

R

⃗a⃗b

1

+ 2

it

λ˜axby

xy

xy

Pax|x ⊗ Pby|y 
xy





= dt β(t) TrσABZ¯0  exp

R

⃗a⃗b⃗a′⃗b′

1

− 2

it λ˜a′xb′yxy

+

1

+ 2

it λ˜axbyxy

xy

†



Pa′x|x ⊗ Pb′y|y
xy

Pax|x ⊗ Pby|y  ,
xy

(3.44)

where in the last line both operator products must be taken in the same order over xy. Finally,

by

introducing

the

values

α⃗a±⃗b⃗a′⃗b′

:=

1 2

xy

λ˜axbyxy ± λ˜a′xb′yxy

=

1 2

jxy λj c(ajx)byxy ± c(aj′x)b′yxy ,

and applying linearity of Z¯0, Tr and

dt to pull out the summation and scalar coefficients, we
R

see that (3.44) is equal to





†



dt exp α⃗a+⃗b⃗a′⃗b′ + iα⃗a−⃗b⃗a′⃗b′ t β(t) TrσABZ¯0 

Pa′x|x ⊗ Pb′y|y

⃗a⃗b⃗a′⃗b′ R

xy

Pax|x ⊗ Pby|y 
xy





†

=

eα⃗+a⃗b⃗a′⃗b′ α⃗a−⃗b⃗a′⃗b′ csch α⃗a−⃗b⃗a′⃗b′ TrσAB Z¯0 

Pa′x|x ⊗ Pb′y|y

⃗a⃗b⃗a′⃗b′

xy


Pax|x ⊗ Pby|y  ,
xy

(3.45)

where the integrals were evaluated using dt eiαtβ(t) = α csch α (note that this formula is
R
consistent under the interpretation that α csch α = 1 at α = 0). This yields the desired bound. Note that the only step of this proof that is not an equality is the generalized Golden–Thompson inequality, i.e. this is the only step where the bound is not tight.
A slightly curious aspect of this approach is that the final infimum is over a state σ that is not directly related to the state ρ in the original optimization (3.31), but rather was introduced as an intermediate variable in the process of deriving (3.37). This results in some small drawbacks, which we shall now discuss and improve on.

3.4.2 Using the Gibbs variational principle
In the above analysis, the bound was tight up until (3.37) (as long as strong duality holds). This was the reason we chose to present the above analysis first, since it shows that essentially the only loss of tightness comes from the generalized Golden–Thompson inequality (and when computing the bound in practice, the suboptimalities induced by using a finite NPA hierarchy level). Perhaps unexpectedly, however, it turns out that a better final result can be obtained using an approach where the ini-
tial steps are not tight by construction. Specifically, we prove the following theorem:
Theorem 3.2. When noisy preprocessing is not applied, and τx = δx,0, the optimization (3.31) is lower bounded by

sup − ln

sup

Tr exp ln Z¯0(ρAB) + ⃗λ · ⃗Γ(Pa|x, Pb|y)

⃗λ

(ρAB ,Pa|x,Pb|y )∈S⃗ν

+ ⃗λ · ⃗ν.

(3.46)

Entropy bounds

50

where S⃗ν denotes the set (or class) of states and measurements satisfying the constraints Tr ⃗Γ(Pa|x, Pb|y)ρAB = ⃗ν. This bound is tight for all ⃗ν such that strong duality holds in the
Lagrange dual. Furthermore, it is in turn lower bounded by

sup − ln

sup

Tr ρAB Q0(Pa|x, Pb|y)

⃗λ

(ρAB ,Pa|x,Pb|y )∈S⃗ν

+ ⃗λ · ⃗ν.

(3.47)

where Q0(Pa|x, Pb|y) is as defined in (3.35).

As in the previous section, the resulting bound (3.47) is in a form that can be tack-
led using the NPA hierarchy (in this case the optimization has the additional restriction
(ρAB, Pa|x, Pb|y) ∈ S⃗ν, but this simply corresponds to imposing noncommutative polynomial constraints Tr Γj(Pa|x, Pb|y)ρAB = νj).
We now present the proof of this theorem. First, we state some results we shall use:

Fact 3.2. (Operator Jensen inequality, as stated in [HP03])19 Let f be a continuous real-valued function on an interval I. Then f is operator convex if and only if for every N ∈ N and any Hilbert space H, we have





N

N

Q†jf (Mj) Qj ≥ f  Q†jMjQj ,

j=1

j=1

(3.48)

for any bounded self-adjoint operators Mj on H with spectra contained in I, and operators Qj on

H satisfying

N j=1

Q†j Qj

=

I.

This yields an immediate corollary, using the fact that any completely positive unital map ϕ

can be expressed in the form ϕ(M ) =

N j=1

Qj

M

Qj

for

some

Qj

satisfying

N j=1

Q†j

Qj

=

I:

Corollary 3.1. Let f be a continuous real-valued function on an interval I, let M be a bounded self-adjoint operator with spectrum contained in I, and let ϕ be a completely positive unital map. Then if f is operator convex, we have ϕ(f (M )) ≥ f (ϕ(M )).

Fact 3.3. (Gibbs variational principle) Let M be a hermitian operator on a finite-dimensional Hilbert space. Then for any quantum state ρ,

Tr[ρM ] − Hnat(ρ) ≥ − ln Tr e−M .

(3.49)

Moving on to the proof, instead of starting with (3.32), we shall use an intermediate step in the derivation of that relation in [Col12], namely

H(Aˆx|E) = H(Z¯x(ρAB)) − H(ρAB).

(3.50)

With this equation, we can lower bound each Hnat(Aˆx|E) term in the objective function of (3.31) as follows:

Hnat(Aˆx|E) = − Tr Z¯x(ρAB) ln Z¯x(ρAB) − Hnat(ρAB) = Tr ρABZ¯x†(− ln Z¯x(ρAB)) − Hnat(ρAB) ≥ Tr ρAB(− ln Z¯x†Z¯x(ρAB)) − Hnat(ρAB),

(3.51)

where in the last line we applied the fact that ρ ≥ 0 together with Corollary 3.1 (the conditions are indeed satisfied, because − ln is operator convex and Z¯x† is a completely positive unital map since Z¯x is a completely positive trace-preserving map).
19There exist many other versions of this inequality (and the related Schwarz inequality), with various differences in the theorem conditions, but we will not need them here.

Entropy bounds

51

We now apply a trick that seems slightly arbitrary, though it can be somewhat motivated by the Lagrange dual considered in the previous section: note that for any tuple ⃗λ, if we impose that we only consider states and measurements satisfying the constraints in the optimization (3.31), we would trivially have ⃗λ · Tr ⃗Γ(Pa|x, Pb|y)ρAB − ⃗ν = 0. Therefore, when the constraints are
imposed, we can rewrite the last line of (3.51) as

Tr ρAB(− ln Z¯x†Z¯x(ρAB)) − Hnat(ρAB) − ⃗λ · Tr ⃗Γ(Pa|x, Pb|y)ρAB − ⃗ν = Tr ρAB − ln Z¯x†Z¯x(ρAB) − ⃗λ · ⃗Γ(Pa|x, Pb|y) − Hnat(ρAB) + ⃗λ · ⃗ν ≥ − ln Tr exp ln Z¯x†Z¯x(ρAB) + ⃗λ · ⃗Γ(Pa|x, Pb|y) + ⃗λ · ⃗ν by Fact 3.3 = − ln Tr exp ln Z¯x(ρAB) + ⃗λ · ⃗Γ(Pa|x, Pb|y) + ⃗λ · ⃗ν,

(3.52)

where the simplification in the last line follows from the fact that Z¯x is self-adjoint and idempotent. Hence each Hnat(Aˆx|E) term in the objective function of (3.31) is lower bounded by (3.52).
Also, recall that ⃗λ was arbitrary, which means we can take a supremum over it to obtain tighter
lower bounds. Focusing on the case where τx = δx,0, we conclude that the optimization (3.31) is lower bounded by:20

sup

inf

− ln Tr exp ln Z¯0(ρAB) + ⃗λ · ⃗Γ(Pa|x, Pb|y) + ⃗λ · ⃗ν,

⃗λ (ρAB ,Pa|x,Pb|y )∈S⃗ν

(3.53)

which is equal to the claimed bound (3.46) (after moving the infimum into the − ln function). To prove the tightness of this bound, we compare it to the analogous bound (3.33) in the
previous section, which was a tight bound by construction (whenever strong duality holds for ⃗ν). We observe that (3.46) is always lower bounded by the tight expression (3.33) — this follows from the fact that ln x ≤ x/e and the supremum over states and measurements in (3.46) is over a smaller set. This means that surprisingly, even though many of the inequalities used in deriving (3.46) are not tight a priori, it turns out to give a tight bound after all (as long as strong duality holds). Finally-
, the second bound (3.47) follows via exactly the same calculations as in the previous section, based on the generalized Golden–Thompson inequality. This completes the proof.
Note that while we have just argued that the bounds (3.33) and (3.46) in the two theorems are equal (whenever strong duality holds), this is not necessarily the case for the bounds (3.34) and (3.47) that we would compute using the NPA hierarchy. Specifically, by the same reasoning as in our above comparison of (3.33) and (3.46), we see that the bound (3.47) derived here is always at least as good as the analogous bound (3.34) in the previous section. However, in this case the latter is not guarant-
eed to be tight (due to the use of the generalized Golden–Thompson inequality), and hence (3.47) could in fact be a strict improvement over (3.34). Our explicit computations of these bounds using the NPA hierarchy show that this indeed often turns out to be the case (though the difference may mainly arise from the different sets the optimizations are taken over, rather than the inequality ln x ≤ x/e — the effect of the latter can typically be “cancelled out” in principle by optimizing over the Lag-
range multipliers; see [TSG+21] for further details).

3.4.3 Resulting bounds for DIQKD and DIRE
We now turn to the question of the results provided by this method (focusing on (3.47), since it is a tighter bound). Unfortunately, it faces the challenge that the operator polynomial (3.35)
20Technically, our above reasoning allows the supremum over ⃗λ to be taken inside the infimum here, which could give a better bound in theory (because of the max-min inequality). However, computing this supremum inside the infimum is not possible for the approach we take in this work, so we omit this version.

Entropy bounds

52

is generally of very high order. This has the consequence that a high NPA hierarchy level is needed to bound those terms, with the required NPA level increasing rapidly as the number of inputs/outputs increases. Because of this, we were only able to apply this method in its full generality for the basic 2-input 2-output setting, in which case level 6 of the hierarchy is sufficient (for some choices of the operator product order), with the NPA matrix having size 85 × 85 after applying some simplify-
ing techniques (see [TSG+21]). It is also possible to take some of the λj parameters to be zero in order to reduce the order of the operator polynomial, allowing us to compute bounds for some scenarios with more inputs and outputs [TSG+21], but the results do not appear to be very tight.
For the 2-input 2-output scenario, we implemented this approach using the full output distribution P[ab|xy] as constraints (see [TSG+21] for further details). It turns out that the resulting bounds on H(Aˆ0|E) that we obtain are close to or slightly outperform the result of [PAB+09], which is a tight bound on that entropy given only the CHSH value. The fact that it slightly outperforms the [PAB+09] bound in some cases implies that it is not always optimal to bound H(Aˆ0|E) using only the CHSH valu-
e, which is not unexpected, but shows that the approach here has potential to provide some improvement in DIQKD keyrates. Roughly speaking, our approach tends to perform well in situations with a moderate to high amount of noise. Speculatively, we might explain this by noting that the main step which introduces a gap is the generalized Golden–Thompson inequality, which is saturated when the operators commute — it could be that as the amount of noise increases, the operators that attain the optimum-
 become “closer to commuting” (this is, of course, a very informal notion for now), making that inequality tighter.
However, even in cases where the bound on H(Aˆ0|E) is better than that of [PAB+09], the improvement is fairly small. On the other hand, we found more significant improvements for DIRE instead (still in the 2-input 2-output setting). While we have only described how to bound H(Aˆx|E) in the above presentation, the computations generalize easily to H(AˆxBˆy|E), again by using the relation (3.26) mentioned in the previous approach for the 2-input 2-output scenario. In contrast to our results for H(Aˆ-
0|E), we found [TSG+21] that our bounds on H(Aˆ0Bˆ0|E) were a substantial improvement on all earlier results. To some extent, this may be because no tight bounds on H(Aˆ0Bˆ0|E) were known, allowing us more scope for improvement. Subsequently, the independent approach developed in [BFF21a] showed further improvements, by optimizing the intended device behaviour to maximize H(Aˆ0Bˆ0|E); this was improved on again by their subsequent approach [BFF21b] to compute arbitrarily tight bounds. Heuristic nu-
merical results and conjectured tight bounds for this setting were also proposed in a recent work [BRC21], which incorporates the random-key-measurements technique as well.
3.4.4 Accounting for random key measurements
Finally, we discuss the applicability of these approaches when random key measurements are applied. It might seem at first that the above approaches could directly handle this scenario as well, instead of having to focus on the case where τx = δx,0. However, each of them runs into some difficulty. Namely, for the approach based on the Lagrange dual, the computations leading up to (3.37) do not hold straightforwardly if there is a sum over multiple terms Dnat(ρAB∥Z¯x¯(ρAB)) rather than just a singl-
e term — the problem is that there will be multiple states σ to consider when replacing the second argument in each relative entropy term, in which case it is unclear whether the optimization over ρ can be solved. (It is still possible to lower-bound the optimization by splitting the infimum over (ρAB, Pa|x, Pb|y) across the terms, allowing each infimum over ρ to be solved individually; however, this is in general not a tight lower bound — in fact, inspecting the bound produced that way indicates -
that it completely loses the advantage offered by using random key measurements.)
As for the approach based on the Gibbs variational principle, the arguments up to (3.52) were valid for the Hnat(Aˆx|E) terms individually. Hence by following the same line of reasoning

Entropy bounds

53

in the subsequent arguments (and using a different tuple of coefficients ⃗λx for each term), we arrive at this result:21

Theorem 3.3. When noisy preprocessing is not applied, the optimization (3.31) is lower bounded by

sup

inf

τx¯ − ln Tr exp ln Z¯x¯(ρAB) + ⃗λx¯ · ⃗Γ(Pa|x, Pb|y) + ⃗λx¯ · ⃗ν , (3.54)

⃗λx¯ (ρAB ,Pa|x,Pb|y )∈S⃗ν x¯

where S⃗ν denotes the set (or class) of states and measurements satisfying the constraints Tr ⃗Γ(Pa|x, Pb|y)ρAB = ⃗ν. Furthermore, it is in turn lower bounded by

sup

inf

τx¯ − ln Tr ρABQx¯(Pa|x, Pb|y) + ⃗λx¯ · ⃗ν ,

⃗λx¯ (ρAB ,Pa|x,Pb|y )∈S⃗ν x¯

(3.55)

where Qx¯(Pa|x, Pb|y) is as defined in (3.35).
However, there is still an obstruction to overcome for this case — the bound (3.55) is not a noncommutative polynomial optimization, because of the logarithms. (Notice that previously, we could get to the expression (3.47) by using the monotonicity of − ln to move the optimization into the logarithm, but this trick does not work here unless we split the infimum across the sum, in which case we incur the same loss of tightness mentioned above.)
Fortunately, it is possible to work around the issue in this case by using the relation

x − ln x = sup − − ln µ + 1 ,
µ>0 µ

(3.56)

which can be interpreted geometrically as characterizing the convex function − ln via the envelope of its tangents (note that x/µ+ln µ−1 is simply the tangent to ln x at the point x = µ). Therefore, this implies that (3.55) is equal to

sup

inf

τx¯ sup

⃗λx¯ (ρAB ,Pa|x,Pb|y )∈S⃗ν x¯

µx¯ >0

1

− µx¯

Tr

ρABQx¯(Pa|x, Pb|y)

− ln µx¯ + 1 + ⃗λx¯ · ⃗ν

,

≥ sup sup

inf

τx¯

µx¯>0 ⃗λx¯ (ρAB ,Pa|x,Pb|y )∈S⃗ν x¯

1

− µx¯

Tr

ρABQx¯(Pa|x, Pb|y)

− ln µx¯ + 1 + ⃗λx¯ · ⃗ν

,

(3.57)

which can indeed be solved as a noncommutative polynomial optimization (again, the suprema over µx¯, ⃗λx¯ are to be handled heuristically, with more optimal values yielding tighter bounds). The downside is that because we have performed a max-min swap, there may again be some loss
of tightness. We find that in practice, computing the bound (3.57) for the depolarizing-noise
scenario previously considered in Sec. 3.3 does yield a slightly better bound as compared to the [PAB+09] expression (for H(Aˆ0|E) alone); however, the improvement is rather small, and is substantially worse than the essentially tight bounds computed in Sec. 3.3.

21For clarity, here we switch to using a different index x¯ for the summation that corresponds to the summation in the objective function of (3.31), to avoid confusion with the “purely notational” indices x in the operators Pa|x.

Chapter 4
Finite-size analysis

Having discussed a variety of methods for bounding the asymptotic keyrates, we now turn to the question of studying the finite-size effects. We begin by presenting in Sec. 4.1 a detailed description of the main protocol we consider. In Sec. 4.2, we state our main theorem regarding this protocol, namely an explicit finite-size expression for the key length. We then give the proof of this theorem in Sec. 4.3, and discuss the resulting keyrates in Sec. 4.4. Finally, in Sec. 4.5 we describe various mo-
difications of the main protocol that can improve its keyrates (and may also be useful in improving DIRNG/DIRE keyrates). The results in this chapter are based on [TSB+20], and the phrasing and presentation are essentially identical to that work.

4.1 Detailed protocol description

Our results in the previous chapter (specifically Sec. 3.3.2) suggest that for 2-input 2-output scenarios under the depolarizing-noise model, considering the CHSH inequality is sufficient to obtain near-optimal results, i.e. there is not much scope for further improvement by considering modified CHSH inequalities. Hence the protocol we present only considers the CHSH inequality, though in principle the finite-size analysis we perform can be applied to protocols based on arbitrary Bell inequalities-
, e.g. following the DIRE analysis in [BRC20].
Rather than using the CHSH value in the form (1.3), we shall instead base the protocol on the CHSH game, which is somewhat easier to describe in a protocol. This is a nonlocal game where all inputs and outputs take values in {0, 1}, and Alice and Bob’s inputs are chosen independently and uniformly, with the win condition being a ⊕ b = xy. Expressed in the form mentioned in Sec. 1.1 for “Bell parameters”, the winning probability for this game (given a distribution P[ab|xy]) is

1

w=

4 δa⊕b,xyP[ab|xy] ,

abxy

(4.1)

where the factor of 1/4 comes from the uniform input distribution. This winning probability w is essentially equivalent to the CHSH value ν, in that they can be converted to each other by the simple relation ν = 8w − 4, under the NS conditions (1.4). With this game in mind, we can now describe the protocol (though the inputs for Bob will be relabelled somewhat in order to account for generation-round inputs):

Finite-size analysis

55

Protocol 1
The protocol is defined in terms of the following parameters (chosen before the protocol begins), which we qualitatively describe:
n: Total number of rounds
γ: Probability of a test round
p: Noisy-preprocessing bias
ECleak: Bound on “leakage” from error correction
wexp: Expected winning probability for the (IID) honest devices
δtol: Tolerated deviation from expected winning probability wexp
ℓkey: Length of final key
The honest behaviour consists of n IID copies of a device characterized by wexp and an errorcorrection parameter hhon (details in Sec. 4.1.3).
1. Measurement: For each j ∈ [n], perform the following steps: 1.1. Alice and Bob’s devices each receive some share of a quantum state. 1.2. Alice chooses a uniform input Xj ∈ {0, 1}. With probability γ, Bob chooses a uniform input Yj ∈ {2, 3}, otherwise Bob chooses a uniform input Yj ∈ {0, 1}. 1.3. Alice and Bob supply their inputs to their devices, and record the outputs as Aj and Bj respectively.
2. Alice and Bob publicly announce their input strings X and Y. 3. Sifting: For all rounds such that Yj ∈ {0, 1} and Xj ̸= Yj, Alice and Bob overwrite their
outputs with Aj = Bj = 0. 4. Noisy preprocessing: For all rounds such that Yj ∈ {0, 1} and Xj = Yj, Alice generates a
biased random bit Fj with P[Fj = 1] = p, and overwrites her output Aj with Aj ⊕ Fj. 5. Error correction: Alice and Bob publicly communicate some bits L = (LEC, Lh) for error
correction as follows (see Sec. 4.1.1): 5.1. Alice and Bob communicate some bits LEC to allow Bob to produce a guess A˜ for A, such that the set of all possible values for LEC has cardinality upper bounded by 2ECleak.1 5.2. Alice computes a 2-universal hash Lh = hash(A) of length ⌈log(1/εh)⌉. She sends Lh (and the choice of hash function) to Bob. 6. Parameter estimation: For all j ∈ [n], Bob sets Cj =⊥ if Yj ∈ {0, 1}; otherwise he sets Cj = 0 if A˜j ⊕ Bj ̸= Xj · (Yj − 2) and Cj = 1 if A˜j ⊕ Bj = X-
j · (Yj − 2). 7. Bob checks whether Lh = hash(A˜ ), as well as whether the value c on registers C satisfies freqc(1) ≥ (wexp − δtol)γ and freqc(0) ≤ (1 − wexp + δtol)γ. If all those conditions hold, Alice and Bob proceed to the next step. Otherwise, the protocol aborts. 8. Privacy amplification: Alice and Bob apply privacy amplification (see Sec. 4.1.2) on A and A˜ respectively to obtain final keys KA and KB of length ℓkey.

1As discussed in Sec. 2.5, this accommodates the possibility of LEC being of variable length, by choosing ECleak to be 1 larger than the maximum possible length of LEC (in bits). To be even more precise, if two-way communication is allowed here, one would also need to account for the possible directions and orderings of communications when defining the set of possible values for LEC; we will not consider this question further in this work. (Note that [TSB+20] contains a technical inaccuracy regard-
ing this point, as it simply viewed ECleak as an upper bound on the number of communicated bits, which is not exactly valid in light of this discussion.)

Finite-size analysis

56

The rounds in which Yj ∈ {2, 3} will be referred to as test rounds, and the rounds in which Yj ∈ {0, 1} will be referred to as generation rounds (though strictly speaking, the final key in this protocol is obtained from all the rounds, not merely the generation rounds alone). In each round, Eve is allowed to hold some extension of the state distributed to the devices. We will use E rather than E to denote the collection of all such quantum side-information she retains over the entire protocol, sin-
ce it may not necessarily have a tensor-product structure.
We briefly highlight a few aspects of this protocol. Firstly (as mentioned in Sec. 2.3), we do not choose a random subset of fixed size as test rounds, but rather, each round is independently chosen to be a test or generation round, following [AFRV19]. This is in order to apply the entropy accumulation theorem, which holds for processes that can be described using a sequence of maps. Furthermore, the parameter-estimation check is performed on both freqc(1) and freqc(0). This was required in order -
to derive a critical inequality in the security proof (following [BRC20]), though in some cases it is possible to omit the freqc(1) check (see Eq. (4.57) and the subsequent discussion).
We now describe some of the individual steps in more detail.

4.1.1 Error correction
We first discuss Step 5.2, because it will have an impact on our discussion of Step 5.1. Given any εh ∈ (0, 1], if we consider a 2-universal family of hash functions where the output is a bitstring of length ⌈log(1/εh)⌉, then the defining property of 2-universal hashing guarantees that

P hash(A) = hash(A˜ ) A ̸= A˜ ≤ εh.

(4.2)

In other words, the probability of getting matching hashes from different strings can be made arbitrarily small, by using sufficiently long hashes. Informally speaking, this gives us some laxity in Step 5.1, because regardless of how much the devices deviate from the honest behaviour, the guarantee (4.2) will still hold, providing a final “check” on how bad the guess A˜ could be. Importantly, our later proof of the soundness of the protocol will not rely on any guarantees regarding the procedure i-
n Step 5.1 — only the completeness of the protocol (i.e. the probability that the honest devices mistakenly abort) requires such guarantees.
We now study Step 5.1. We shall choose ECleak as follows: it is the length of LEC required (let us focus on fixed-length LEC for simplicity) such that given the honest devices, Bob can use LEC and B to produce a guess A˜ satisfying

P A ̸= A˜ hon ≤ εcEoCm.

(4.3)

(In this section, we will use the subscript hon to emphasize quantities computed with respect to an honest behaviour.) We stress that while some preliminary characterization of the devices can
be performed beforehand to choose a suitable ECleak, this parameter must not be changed once the protocol begins.
As noted back in Sec. 2.2, the question of what value should be chosen for ECleak in order to achieve a desired εcEoCm can be addressed by the protocol in [RR12]. Explicitly, (4.3) can be satisfied as long as we choose ECleak such that

ECleak

≥

Hmε˜sax(A|BXY)hon

+

2 log

1 εcEoCm −

ε˜s

+

4,

(4.4)

where ε˜s ∈ [0, εcEoCm) is to be optimized over. Since the honest behaviour is IID, the max-entropy

Finite-size analysis

57

can be bounded by the AEP (2.16):2

Hmε˜sax(A|BXY)hon

≤

nhhon

+

√ n

(2

log

5)

2 log ε˜2s ,

(4.5)

where (applying the decomposition H(Q|Q′C) = c P[c] H(Q|Q′; C = c) for classical C, and using the “single-round notation” AˆBˆXY since the behaviour is IID)

hhon

:=

H (Aˆ|Bˆ X Y

)hon

=

1

− 4

γ

H(Aˆ|Bˆ; X = Y = z)hon

z∈{0,1}

γ +
4

H(Aˆ|Bˆ; X = x, Y = y)hon,

x∈{0,1},y∈{2,3}

(4.6)

where the terms should be understood to refer to the AˆBˆ values after noisy preprocessing (for the generation rounds).
However, the protocol achieving the bound (4.4) may not be easy to implement. In practice, error-correction protocols typically achieve performance described by

ECleak ≈ ξ(n, εcEoCm)nhhon,

(4.7)

where ξ(n, εcEoCm) lies between 1.05 and 1.2 for “typical” values of n and εcEoCm. (More precise characterizations can be found in [TMMP+17], which gives for instance an estimate

ECleak

≈

ξ1nhhon

+

ξ˜(εcEoCm,

√ hhon) n,

(4.8)

for a constant ξ1 and a specific function ξ˜.) Furthermore, some protocols used in practice do not have a theoretical bound on εcEoCm (for a given ECleak), only heuristic estimates.
Fortunately, as mentioned earlier, the choice of error-correction procedure in Step 5.1 will
have no effect in our proof of the soundness of Protocol 1 (as long as ECleak is a fixed parameter), only its completeness. This means that as long as we are willing to accept heuristic values for εcom, we can use the heuristic values of εcEoCm provided by using some “practical” error-correction procedure in Step 5.1, and the value of εsou (i.e. how “secure” the protocol is) will be completely
unaffected. The critical point to remember is that ECleak is a value to be fixed before the protocol begins, and Alice and Bob must only use exactly that many bits (or up to the corresponding
maximum allowed number of bits, in the case of variable-length error-correction) when actually
executing the protocol. With this in mind, we remark that while we mainly focus on protocols
using one-way error correction, this is not quite a strict requirement — in theory, one could use
a procedure involving two-way communication (such as Cascade), as long as ECleak accounts for all the communicated bits, not just those sent from Alice to Bob.3 Another possibility worth
considering might be adaptive procedures that adjust to the noise level encountered during
execution of the protocol, rather than the expected noise level (again, making sure to halt if they
reach the maximum allowed number of bits corresponding to the pre-chosen ECleak value). We remark that in our situation, if we assume that P[Aˆ = Bˆ|X = x, Y = y]hon is the same
for all x ∈ {0, 1}, y ∈ {2, 3} (in which case it must equal wexp), then for the y ∈ {2, 3} terms in Eq. (4.6) we have

H(Aˆ|Bˆ; X = x, Y = y)hon = h2 P[Aˆ ̸= Bˆ|X = x, Y = y]hon = h2(wexp),

(4.9)

2In this analysis, we deviated slightly from [AFRV19] by using the error-correction protocol from [RR12]
instead of [RW05], and the AEP stated in [DFR20] rather than [TCR09]. Both of these yield slight improvements in the bounds (the former at large n, and the latter when dim(Aˆ) is not too large).
3We stress that care must be taken when interpreting this claim in the context of existing results regarding
such protocols: for instance, some works on the Cascade protocol only analyze the number of bits sent from Alice
to Bob, which would not be valid as an upper bound on ECleak in our context.

Finite-size analysis

58

√ which lies in approximately [0.600, 0.811] for wexp ∈ [3/4, (2 + 2)/4]. If the protocol parameters are such that ξ(n, εcEoCm)h2(wexp) turns out to be fairly close to 1, there is not much loss incurred by simply sending the outputs of the test rounds directly rather than expending the effort to
compute appropriate error-correction data.

4.1.2 Privacy amplification
As noted in Sec. 2.2, privacy amplification can be addressed by the Leftover Hashing Lemma (Fact 2.2), which bounds the secrecy of the final key in terms of the difference between the smoothed min-entropy of the device outputs and the length of the key. Practically speaking, in the privacy amplification step of the protocol, Alice simply chooses a random function from the 2-universal family and publicly communicates it to Bob, followed by Alice and Bob applying that function to A and A˜ respective-
ly. As mentioned previously, since the hash choice H is included in the “side-information” term in (2.19), it is safe to publicly communicate it.

4.1.3 Honest behaviour

In general, the honest implementation consists of n IID copies of a device characterized

by 2 parameters, wexp and hhon. We will hence again describe the honest behaviour using single-round registers AˆBˆXY . wexp is the probability with which the device wins the CHSH
game when supplied with uniformly random inputs X ∈ {0, 1}, Y ∈ {2, 3}, and hhon is defined in Eq. (4.6). While hhon does not explicitly appear in the protocol description, it is implicitly used to define the parameter ECleak, as was described in Sec. 4.1.1. (Since hhon has a dependence on γ, strictly speaking it may be more precise to instead view the honest device behaviour as being

parametrized by a tuple specifying all the individual entropies in Eq. (4.6), but for brevity we

shall summarize this as the honest behaviour being parametrized by hhon. In the more specific models of honest devices described below, these entropies are expressed in terms of some simpler

parameters.)

As a simple example, we can take the honest devices to be described by depolarizing noise, with the noiseless distribution P⋆[ab|xy] being the following: the state is |Φ+⟩, the measurements

for inputs X ∈ {0, 1}, Y ∈ {2, 3} are those in (2.22) (up to relabelling of Bob’s inputs), and the

measurements corresponding to Bob’s inputs Y ∈ {0, 1} are measurements in the same bases as

Alice’s measurements. Under this noise model, we have simple expressions for wexp and hhon:

√

2+ 2 1

wexp = (1 − 2q) 4

+ 2q , 2

1−γ hhon = 2 h2(p + (1 − 2p)q) + γh2(wexp),

(4.10) (4.11)

where the p + (1 − 2p)q term is obtained by an explicit computation [WAP21]. To focus on more specific experimental implementations, we will also consider the estimates
given in [MDR+19] for the Bell tests in [HBD+15] (resp. [RBG+17]): we characterize them via the parameters wexp = 0.797 (resp. 0.777) and perr = 0.06 (resp. 0.035), where perr is a parameter such that the probabilities before noisy preprocessing satisfy4

P[AˆBˆ|X = Y

=

z]hon

=

(1

−

2perr)

δAˆ,Bˆ 2

1 + 2perr 4

for all z ∈ {0, 1},

(4.12)

Furthermore, we take P[Aˆ = Bˆ|X = x, Y = y]hon to be the same for all x ∈ {0, 1}, y ∈ {2, 3} (in which case it must equal wexp). Under this model, the expression (4.6) for hhon can be simplified

4It can be shown that this is equivalent to taking P[AˆBˆ|X = Y = z]hon to be independent of z and taking the marginal distributions P[Aˆ|X = Y = z]hon, P[Bˆ|X = Y = z]hon to be uniform, then defining perr := P[Aˆ ̸= Bˆ|X = Y = z]hon.

Finite-size analysis

59

(by the same computation as above):

1−γ hhon = 2 h2(p + (1 − 2p)perr) + γh2(wexp).

(4.13)

It was found in [SGP+21] that the random-key-measurements technique on its own is sufficient to achieve positive asymptotic keyrate for these experimental parameters. One of our goals in this chapter is hence to find what the keyrates would be when taking finite-size effects into account.

4.2 Security statement

To describe the length of the final key, we need to introduce some notation and ancillary
functions. First, we require an affine function rp of the CHSH winning probability w, that lowerbounds the entropy minimization problem (3.1) with5 τ0 = τ1 = 1/2 and the (only) constraint being the CHSH winning probability. In other words, rp is to be an affine lower bound on the function r˘p defined in (3.1). This is basically what we have obtained as the bounds (3.28) (for specific values of p) in the previous chapter, since the CHSH value and CHSH winning probability
can be interconverted using ν = 8w − 4 (note that this conversion preserves the fact that the
bounds (3.28) are affine). Given such a function rp, we then define the affine function

1−γ g(w) := 2 rp(w) + γr0(w).

(4.14)

Informally, g can be interpreted as a lower bound on the entropy “accumulated” in one round of the protocol.
Also, for an affine function f defined on all probability distributions on some register C, and any subset S of its domain, we will define

Max(f ) := max f (q),
q

MinS (f ) := inf f (q),
q∈S



2

VarS (f ) := sup  q(c)f (δc)2 −

q(c)f (δc)  ,

q∈S c

c

(4.15)

where maxq is taken over all distributions on C, and δc denotes the distribution with all its weight on the symbol c.
Finally, for brevity we define some compact notation for binomial distributions:

Definition 4.1. Let X ∼ Binom(n, p) denote a random variable X following a binomial distribution with parameters (n, p), i.e. X is the sum of n IID Bernoulli random variables Xj with P[Xj = 1] = p. We denote the corresponding cumulative distribution function as

Bn,p(k) := PX∼Binom(n,p)[X ≤ k] .

(4.16)

With these definitions, we can state the security guarantees of the protocol (see [TSB+20] for a qualitative explanation of the various parameters):

Theorem 4.1. Take any εcEoCm, εcPoEm, εEA, εPA, εh, εs, ε′s, ε′s′ ∈ (0, 1] such that εs > ε′s + 2ε′s′, and any α ∈ (1, 2), α′ ∈ (1, 1 + 2/V ′), β ∈ [g(0), g(1)], γ ∈ (0, 1), p ∈ [0, 1/2], where V ′ := 2 log 5.

5These τx values reflect the input distributions in the protocol: observe that in the generation rounds, Alice and Bob choose inputs in {0, 1} uniformly, so the probability of them both choosing input x is the same for both values of x ∈ {0, 1}; while in the test rounds, Alice chooses her inputs uniformly and no sifting is applied afterwards.

Finite-size analysis

60

Protocol 1 is (εcEoCm + εcPoEm)-complete and (max{εEA, εPA + 2εs} + 2εh)-sound when performed with any choice of ECleak such that Eq. (4.3) holds, and δtol, ℓkey satisfying

εcPoEm ≥ Bn,γwexp (⌊(wexp − δtol)γn⌋) + Bn,1−γ+γwexp (⌊(1 − γ + wexpγ − δtolγ)n⌋),

ℓkey

≤

ng(wexp

−

δtol)

−

(α n

−

1) 2

ln

2 V

2

−

n(α

−

1)2Kα

−

nγ

−

n

α′ − 1 4

V ′2

−

ϑε′s α−1

−

ϑε′s′ α′ −

1

−

α

α′

α − 1 + α′ − 1 − 2

1 log εEA − 3ϑεs−ε′s−2ε′s′

1 − ECleak − log εh

1 − 2 log + 2,
εPA

(4.17) (4.18)

where Bn,p(k) is the cumulative distribution function of a binomial distribution (Definition 4.1), and

1

2

ϑε

:=

log

1

−

√ 1

−

ε2

≤

log

ε2 ,

V := VarQf (fmin) + 2 + log 33,

Kα

:=

2(α−1)(2 log 4+Max(fmin)−MinQf (fmin)) 6(2 − α)3 ln 2

ln3

22 log 4+Max(fmin)−MinQf (fmin) + e2

,

(4.19)

with fmin and Qf being a func√tion and a set (defined exp√licitly in Sec. 4.3.3) such that (introducing the notation wmax := (2 + 2)/4 and wmin := (2 − 2)/4 for the maximum and minimum quantum winning probabilities of the CHSH game):

1

1

Max(fmin)

=

g(1) γ

+

1− γ

β,

MinQf (fmin) = g(wmin),

VarQf (fmin)

≤

wmin γ

min

∆20, ∆21

+ wmax max γ

∆20, ∆21

, where ∆w := β − g(w).

(4.20)

The variables listed at the start of Theorem 4.1 can be considered to be variational parameters that should be chosen to optimize the keyrate as much as possible. When optimizing these parameters in practice, we found that the exact expression for ϑε was numerically unstable, and hence we replaced it with the upper bound of log(2/ε2) (this bound is basically tight at small ε, so it makes little difference). Furthermore, the optimization over β also appears to be somewhat unstable. We found heurist-
ically that the optimal value of β appears to typically be very close to g(1), and hence for simplicity in some cases we did not optimize over it but instead simply fixed β = g(1) (or slightly below it, to avoid some instabilities at β − g(1) = 0). Finally, we found that direct computation of Bn,p(k) (e.g. via the regularized beta function) could sometimes be slow or unstable, and in such cases we followed [LLR+21] and replaced it with the upper bound in the following theorem:

Fact 4.1. [ZS13] Let

Cn,p(k) := Φ sign (k − pn) 2n Dnat(k/n ∥ p) ,

(4.21)

where Dnat(q∥p) := q {q, 1 − q} and {p, 1

ln −

q p

+

p},

(1

−

q)

ln

1−q 1−p

is

while Φ(z) :=

the base-e relative entropy between the distributions

z −∞

(2π

)−1/2e−u2

/2

du

=

(1/2) erfc

√ −z/ 2

is the

cumulative distribution function of the standard normal distribution. Then for any k ∈ [n − 1],

Cn,p(k) ≤ Bn,p(k) ≤ Cn,p(k + 1).

(4.22)

Replacing Bn,p(k) with Cn,p(k + 1) and computing the latter (which is a Gaussian integral) appeared to be faster and more stable than computing Bn,p(k) directly. There is little loss

Finite-size analysis

61

incurred by performing this replacement — the inequalities (4.22) imply Cn,p(k + 1) ≤ Bn,p(k + 1), so the effect is no larger than replacing Bn,p(k) by Bn,p(k + 1), which is almost negligible in the parameter regimes studied in this work.
Note that in general, the optimal parameter values (especially for α and α′) would depend
heavily on n. To get an estimate for the asymptotic scaling of ℓkey, we can choose all the ε parameters to take some constant values satisfying the desired completeness and soundness
bounds, set β = g(1), then choose [DFR20, DF19]

1

2

1

α−1= √ n

V 2 ln 2 ϑε′s + 2 log εEA ,

α′

−

1

=

1 √

n

4 V ′2

1 ϑε′s′ + 2 log εEA ,

(4.23)

taking n to be large enough such that α ∈ (1, 3/2) and α′ ∈ (1, 1 + 2/V ′). Furthermore, since
we picked β = g(1), we have Max(fmin) − MinQf (fmin) = g(1) − g(wmin), in which case for α ∈ (1, 3/2) we can upper bound Kα with the following constant (independent of α, n and γ):

Kˆ := 2(2 log 4+g(1)−g(wmin)) ln3 22 log 4+g(1)−g(wmin) + e2 . (3/4) ln 2

(4.24)

With these choices, Eq. (4.18) can be satisfied by taking

ℓkey =

ng(wexp

−

δtol)

−

n

(α

−

1) 2

ln

2

V

2

−

n(α

−

1)2Kˆ

−

nγ

−

n

α′ − 1 4

V ′2

1

1

1

1

− α−1

ϑε′s + 2 log εEA

− α′ − 1

ϑε′s′ + 2 log εEA

1 − ECleak − log εh

1 − 2 log + 2
εPA

1 + 2 log εEA − 3ϑεs−ε′s−2ε′s′

√ = ng(wexp − δtol) − n 2

V 2 ln 2 2

1 ϑε′s + 2 log εEA

2 − V 2 ln 2

1 ϑε′s + 2 log εEA

Kˆ − nγ

√

V ′2

1

1

− n 2 4 ϑε′s′ + 2 log εEA + 2 log εEA − 3ϑεs−ε′s−2ε′s′

1 − ECleak − log εh

1 − 2 log + 2
εPA

= ng(wexp − δtol) − nγ − O

n γ − O(1) − ECleak ,

(4.25)

where in the last line (that line is obtained

bthyeniomtipnlgietdhcaotnVsta=ntOs(i1n/√thγe);biagl-sOo,

notation are independent of n and γ we remark that technically the term

involving Kˆ is of order O(1/V 2) = O(γ), but this is anyway upper bounded by O(1) so we have

simply absorbed it into the O(1) term). Furthermore, Eq. (4.17) can be satisfied by choosing
γ = 2n−1δt−o2l log(2/εcPoEm) (see Eq. (4.31), noting that the denominators in the exponents of both terms are trivially upper bounded by 2), in which case by taking e.g. δtol ∝ 1/n1/3 we have δtol, γ = O(1/n1/3), and substituting this scaling into Eq. (4.25) then yields





lim
n→∞

ℓkey n

=

1 2

rp(wexp) −

1 H(Aˆ|Bˆ; X 2

=Y

= z)hon ,

z∈{0,1}

(4.26)

taking ECleak according to Eqs. (4.4)–(4.6). This is the expected asymptotic result in the sense of the Devetak-Winter expression (2.36), with the prefactor of 1/2 being due to the sifting.

Finite-size analysis

62

Given the scaling behaviour shown in Eq. (4.25), it can be seen that the optimal values of the various ε parameters (given some desired values of εcom and εsou√) may be of rather different orders of magnitude. This is because some of them appear in O(1/ n) corrections to the finite-size keyrate while others appear in O(1/n) corrections. Intuitively speaking, the ε parameters in the latter can be chosen to be substantially smaller than the former, since the O(1/n) scaling reduces their contribution-
 to the finite-size effects.
4.3 Finite-size security proof
We now prove that Protocol 1 indeed satisfies the security properties claimed in Theorem 4.1. To do so, we first introduce a virtual protocol that is more convenient to analyze. For the purposes of understanding this construction, it may be helpful to think of it as being based on a specific set of states and measurements that could be occurring in a run of Protocol 1 (as opposed to simultaneously considering all possible states and measurements that could be occurring). In particular, this virtua-
l protocol and the channels Mj in Sec. 4.3.3 should be understood as being constructed in terms of this specific set of states and measurements. Since we will not impose any additional assumptions on these states and measurements beyond those specified by the protocol, this will still yield a valid way for us to prove the desired security properties (in particular the soundness property, which has to be proven for all possible states and measurements that could occur in a run of the protocol).
Consider the state at the end of Step 6 in Protocol 1. We now describe a virtual protocol6 that produces exactly the same state (when it is implemented using the same input state and measurements as those used in a run of Protocol 1), apart from the introduction of two additional registers B′C′.
Protocol 1′ A virtual protocol
1. Alice and Bob’s devices each receive and store all quantum states that they will subsequently measure.
2. For each j ∈ [n], perform the following steps: 2.1. Alice chooses a uniform input Xj ∈ {0, 1}. With probability γ, Bob chooses a uniform input Yj ∈ {2, 3}, otherwise Bob chooses a uniform input Yj ∈ {0, 1}. 2.2. Alice and Bob supply their inputs to their devices, and record the outputs as Aj and Bj respectively. 2.3. Alice and Bob publicly announce their inputs. 2.4. Sifting: If Yj ∈ {0, 1} and Xj ̸= Yj, Alice and Bob overwrite their outputs with Aj = Bj = 0. 2.5. Noisy preprocessing: If Yj ∈ {-
0, 1} and Xj = Yj, Alice generates a biased random bit Fj with P[Fj = 1] = p, and overwrites her output Aj with Aj ⊕ Fj. 2.6. If Yj ∈ {0, 1}, Bob sets Bj′ = 0, otherwise Bob sets Bj′ = Bj. 2.7. Virtual parameter estimation: Set Cj′ =⊥ if Yj ∈ {0, 1}; otherwise set Cj′ = 0 if Aj ⊕ Bj′ ̸= Xj · (Yj − 2) and Cj′ = 1 if Aj ⊕ Bj′ = Xj · (Yj − 2).
3. Error correction: Alice and Bob publicly communicate some bits L for error correction as previously described, allowing Bob to construct a guess A˜ for A.
4. Parameter estimation: For all j ∈ [n], Bob sets Cj =⊥ if Yj ∈ {0, 1}; otherwise he sets Cj = 0 if A˜j ⊕ Bj′ ̸= Xj · (Yj − 2) and Cj = 1 if A˜j ⊕ Bj′ = Xj · (Yj − 2).
The key changes as compared to Protocol 1 are as follows:
6We stress that this “protocol” is not performed in practice (and in fact cannot be, since the “virtual parameter estimation” step cannot be performed locally by either party). However, it produces exactly the same state as Protocol 1 on all relevant registers, and can hence be used for the security analysis.

Finite-size analysis

63

• All the states that the devices will measure are distributed immediately at the start (note that this is possible because in Protocol 1, the measurement choices X, Y are not disclosed until all measurements have been performed, and hence the distributed states cannot behave adaptively with respect to the inputs).
• The sifting and noisy preprocessing steps are now performed immediately after each measurement, instead of after all measurements are performed. This is to allow us to subsequently apply the EAT.
• Two additional registers were introduced: B′, which is equal to B on all the test rounds but is otherwise set to 0, and C′, which is analogous to C but computed using A in place of A˜ . These registers were used in a virtual parameter estimation step.
• All parameter estimation is performed with B′ instead of B (this substitution has no physical effect since Bj′ = Bj in all rounds used for parameter estimation).
Let ρ denote the state on registers AA˜ BB′XYLCC′E (as well as the choice of hash function in the error-correction step) at the end of Protocol 1′. As mentioned, the reduced state after tracing out B′C′ is exactly the same as that at the end of Step 6 in Protocol 1. Since all subsequent steps in Protocol 1 (i.e. simply the accept/abort check and the privacy amplification) only involve these registers, to prove the security of Protocol 1 it suffices to consider the equivalent (apart from B′C′) proc-
ess where all the steps up to Step 6 are replaced by this virtual protocol, and then the remaining steps in Protocol 1 are performed. With this in mind, let us define the following events on the state ρ:
Ωg: A = A˜ (i.e. Bob correctly guesses A)
Ωh: hash(A) = hash(A˜ )
ΩPE: freqc(1) ≥ (wexp − δtol)γ and freqc(0) ≤ (1 − wexp + δtol)γ
Ω′PE: freqc′ (1) ≥ (wexp − δtol)γ and freqc′ (0) ≤ (1 − wexp + δtol)γ
Note that in terms of these events, the accept condition of the protocol is Ωh ∧ ΩPE. With the virtual protocol and the above events in mind, we now turn to proving completeness and soundness of Protocol 1.

4.3.1 Completeness

Completeness is defined entirely with respect to the honest behaviour of the devices, hence
all discussion in this section is with respect to the situation where the state ρ described above is
the one produced by the honest states and measurements. To prove completeness, we simply
need to obtain an upper bound on the probability that this honest behaviour yields an abort, i.e. P[Ωch ∨ ΩcPE]hon (recall we use Ωc to denote the complement of an event). However, we encounter a slight inconvenience here because the event ΩcPE involves the register C produced using Bob’s guess A˜ rather than Alice’s actual string A, and there is some small probability that his guess was wrong. To cope with this, we shall break down P[Ωch ∨ ΩcPE]hon into simpler terms that can be bounded in terms -
of probabilities involving only the “virtual” string C′ rather
than C, where the former is easier to handle since it is produced from the actual value of A. We begin by noting that the hashes of A and A˜ can only differ if A ̸= A˜ , which is to say
that the event Ωch implies the event Ωcg. With this, we write

P[Ωch ∨ ΩcPE]hon ≤ P Ωcg ∨ ΩcPE hon = P Ωcg hon + P[Ωg ∧ ΩcPE]hon

(4.27)

Finite-size analysis

64

where in the second line we have partitioned the event Ωcg ∨ ΩcPE into the disjoint events Ωcg and

Ωg ∧ ΩcPE. We shall now upper bound the probabilities of each of these events.

stepTehnesuPreΩs cgthhaotnttheirsmpriosbsatbrialiitgyhtifsoartwmarodsttoεcEhoCman. dAles,

since by construction for the P[Ωg ∧ ΩcPE]hon

the error-correction term, we now make

the critical observation that Ωg ∧ ΩcPE = Ωg ∧ Ω′PcE (because the event Ωg implies that C = C′).

Therefore, we have

P[Ωg ∧ ΩcPE]hon = P Ωg ∧ Ω′PcE hon ≤ P Ω′PcE hon ,

(4.28)

which is the desired reduction to a term involving C′ rather than C. To explicitly upper bound P[Ω′PcE]hon, observe that under the honest behaviour, the string C′ consists of n IID rounds such that Pr[Cj′ = 1]hon = γwexp and Pr[Cj′ = 0]hon = γ(1 − wexp) in each round. Therefore, we have

P[freqc(1) < (wexp − δtol)γ]hon ≤ P[freqc(1)n ≤ ⌊(wexp − δtol)γn⌋]hon

= Bn,γwexp (⌊(wexp − δtol)γn⌋),

(4.29)

P[freqc(0) > (1 − wexp + δtol)γ]hon = P[freqc(¬0) ≤ 1 − (1 − wexp + δtol)γ]hon

= P[freqc(¬0)n ≤ ⌊(1 − γ + wexpγ − δtolγ)n⌋]hon

= Bn,1−γ+γwexp (⌊(1 − γ + wexpγ − δtolγ)n⌋),

(4.30)

where ¬0 represents all symbols other than 0. Hence by the union bound, P[Ω′PcE]hon is upper bounded by εcPoEm is as specified in Eq. (4.17) (i.e. the sum of the expressions (4.29) and (4.30)). This yields a final upper bound of εcEoCm + εcPoEm on the probability of the honest behaviour aborting, as desired.
In principle, somewhat simpler expressions could be obtained using the (additive) Chernoff bound, writing w¯exp := 1 − wexp for brevity (and assuming δtol < min{wexp, w¯exp}):

P[freqc(1)

<

(wexp

−

δtol)γ]hon

≤

e−Dnat((wexp−δtol)γ∥wexpγ)n

≤

e−

nγδt2ol 2wexp

,

P[freqc(0) > (1 − wexp + δtol)γ]hon

≤ e−Dnat((w¯exp+δtol)γ∥w¯expγ)n

≤ e−

nγδt2ol 2(w¯exp +δtol

)

≤

e−

nγδt2ol 2

.

(4.31)

However, it was observed in [LLR+21] that these bounds are weaker than Fact 4.1 by a significant amount. As yet another alternative, Hoeffding’s inequality yields a bound of e−2nγ2δt2ol, but
this is worse than the Chernoff bound whenever 6γ ≤ 1/wexp; furthermore, it does not yield nontrivial bounds if we choose γ ∝ 1/n (for constant εcEoCm, δtol), which ought to be possible in principle according to the scaling analysis in [DF19] (and loosely matches the intuition described
in Sec. 2.5.2 regarding parameter estimation, except that it gives a constant expected number of
test rounds rather than an actually constant number).

4.3.2 Soundness

Soundness has to be proven against all possible dishonest behaviours (subject to the protocol assumptions as listed in Sec. 1.1.2). In this section, we shall consider any particular state ρ (as defined after the Protocol 1′ description) that would be produced by a particular choice of such dishonest behaviour, and prove that it satisfies the soundness condition (2.25) (for a specific value of εsou) regardless of which dishonest behaviour was considered. All probabilities are to be understood as be-
ing defined with respect to that state ρ.
We first note that it is straightforward to show that Protocol 1 is εh-correct, since

P[KA ̸= KB ∧ Ωh ∧ ΩPE] ≤ P[KA ̸= KB ∧ Ωh] ≤ P Ωcg ∧ Ωh ≤ P Ωh|Ωcg ≤ εh,

(4.32)

where the last inequality holds by the defining property of 2-universal hashing.

Finite-size analysis

65

It remains to prove secrecy. Denote the privacy amplification step in Protocol 1 as the map MPA, so the subnormalized state conditioned on the event of Protocol 1 accepting can be written as MPA(ρ∧Ωh∧ΩPE). Let H be the register storing the choice of hash function used for privacy amplification, and denote E′ := XYLEH for brevity. We can now rewrite the secrecy condition as the requirement

1 2

∥MPA(ρ∧Ωh∧ΩPE )KAE′

−

UKA

⊗

MPA(ρ∧Ωh∧ΩPE )E′ ∥1

≤

εsec.

(4.33)

Now, somewhat similarly to the completeness analysis, we shall find a way to upper bound the
left-hand-side of the above expression in terms of Ω′PE rather than ΩPE, as the former is easier to handle. Specifically, by noting that ρ∧Ωh∧ΩPE = ρ∧Ωg∧Ωh∧ΩPE + ρ∧Ωcg∧Ωh∧ΩPE , we find the following bound using norm subadditivity:

1 2 ∥MPA(ρ∧Ωh∧ΩPE )KAE′ − UKA ⊗ MPA(ρ∧Ωh∧ΩPE )E′ ∥1

1

≤ 2

MPA(ρ∧Ωg∧Ωh∧ΩPE )KAE′ − UKA ⊗ MPA(ρ∧Ωg∧Ωh∧ΩPE )E′ 1

1

+ 2

MPA(ρ∧Ωcg∧Ωh∧ΩPE )KAE′ − UKA ⊗ MPA(ρ∧Ωcg∧Ωh∧ΩPE )E′ 1

1

≤ 2

MPA(ρ∧Ωg∧Ωh∧Ω′PE )KAE′ − UKA ⊗ MPA(ρ∧Ωg∧Ωh∧Ω′PE )E′

+ εh,
1

(4.34)

where in the last line we have performed the substitution Ωg ∧ ΩPE = Ωg ∧ Ω′PE in the first term, and bounded the second term using

P Ωcg ∧ Ωh ∧ ΩPE ≤ P Ωcg ∧ Ωh ≤ εh,

(4.35)

as noted in Eq. (4.32). We now aim to bound the first term in Eq. (4.34). To do so, we study three7 exhaustive
possibilities for the state ρ (the first two are not mutually exclusive, but this does not matter):

Case 1: P[Ωg ∧ Ωh|Ω′PE] ≤ ε2s.

Case 2: P[Ω′PE] ≤ εEA.

Case 3: Neither of the above are true.

In case 1, that term is bounded by

P Ωg ∧ Ωh ∧ Ω′PE = P Ωg ∧ Ωh|Ω′PE P Ω′PE ≤ ε2s. In case 2, that term is bounded by

(4.36)

P Ωg ∧ Ωh ∧ Ω′PE ≤ P Ω′PE ≤ εEA.

(4.37)

The main challenge is case 3. To study this case, we first focus on the conditional state ρ|Ω′PE. Importantly, the relevant smoothed min-entropy of this state can be bounded by using the following theorem, which we prove in Sec. 4.3.3 using entropy accumulation:

Theorem 4.2. For all parameter values as specified in Theorem 4.1, the state at the end of Protocol 1′ satisfies

Hmεsin(A|XYE)ρ|Ω′PE

>

ng(wexp

−

δtol)

−

n

(α

−

1) 2

ln

2

V

2

− n(α − 1)2Kα

− nγ

−n

α′ − 1 4

V ′2

−

ϑε′s α−1

−

ϑε′s′ α′ − 1

−

α

α′

α − 1 + α′ − 1

1

log P

Ω′PE

− 3ϑεs−ε′s−2ε′s′ . (4.38)

where V ′, ϑε, V, Kα are as defined in Theorem 4.1.
7This has one more case as compared to the proof sketches in Sec. 2.5. This is just a technicality to ensure that the smoothing parameter is not too large when applying some theorems regarding subnormalized states.

Finite-size analysis

66

To relate this to our state of interest, we use [TL17] Lemma 10, which states that for a state σ ∈ S≤(ZZ′QQ′) that is classical on registers ZZ′, an event Ω on the registers ZZ′, and any ε ∈ [0, Tr[σ∧Ω]), we have

Hmε in(ZQ|Q′)σ∧Ω ≥ Hmε in(ZQ|Q′)σ.

(4.39)

In our context, we observe that the probability of the event Ωg ∧ Ωh on the normalized state ρ|Ω′PE is P[Ωg ∧ Ωh|Ω′PE], which is greater than ε2s since we are in case 3. Hence the conditions of the lemma are satisfied (identifying A with Z, A˜ (and the error-correction hash choice) with Z′,
XYLE with Q′, and leaving Q empty), allowing us to obtain the bound

Hmεsin(A|XYLE) ρ|Ω′PE ∧Ωg∧Ωh ≥ Hmεsin(A|XYLE)ρ|Ω′PE ≥ Hmεsin(A|XYE)ρ|Ω′PE − len(L)

≥ Hmεsin(A|XYE)ρ|Ω′PE − ECleak − log

1 εh

,

(4.40)

where in the second line we have applied a chain rule for smoothed min-entropy (see e.g. [WTH+11]
Lemma 11 or [Tom16] Lemma 6.8).
Putting together Eq. (4.40) and Theorem 4.2, we find that for a key of length ℓkey satisfying Eq. (4.18), we have8

1 2

Hmεsin(A|XYLE)

ρ|Ω′PE

− ℓkey + 2
∧Ωg ∧Ωh

1

+ log P

Ω′PE

1

α

α′

1

1

α

α′

≥ 2

−

α − 1 + α′ − 1

log P

Ω′PE

+ 2 log + εPA

α − 1 + α′ − 1 − 2

11 = log +
εPA 2 1
≥ log , εPA

α

α′

α − 1 + α′ − 1 − 2

1

1

log εEA

− log P

Ω′PE

1 log
εEA

1 + log P Ω′PE
(4.41)

where

the

last

line

holds

because

P[Ω′PE]

≥

εEA

in

case

3

(and

also

α α−1

+

α′ α′−1

−2

≥

2

>

0

since

α, α′ ∈ (1, 2)).

This finally allows us to bound Eq. (4.34), since we have ε2s ≤ P[Ωg ∧ Ωh|Ω′PE] = Tr[(ρ|Ω′PE)∧Ωg∧Ωh]

8Keeping the log (1/P[Ω′PE]) term here yields a slightly tighter result as compared to [AFRV19, MDR+19], which instead used P[Ω′PE] ≤ 1 to write an inequality in place of the equality in the second-last line of Eq. (4.42).

Finite-size analysis

67

in case 3, and hence we can apply the Leftover Hashing Lemma to see that9

1 2 MPA(ρ∧Ωg∧Ωh∧Ω′PE )KAE′ − UKA ⊗ MPA(ρ∧Ωg∧Ωh∧Ω′PE )E′ 1

= P Ω′PE

1 2

MPA((ρ|Ω′PE )∧Ωg∧Ωh )KAE′ − UKA ⊗ MPA((ρ|Ω′PE )∧Ωg∧Ωh )E′ 1





≤ P Ω′PE

−

1 2

2



Hmεsin(A|XYLE)

ρ|Ω′PE

−ℓkey +2
∧Ωg ∧Ωh

+ 2εs

−

1 2

=2

Hmεsin(A|XYLE)

ρ|Ω′PE

−ℓkey +2
∧Ωg ∧Ωh

−log(1/P[Ω′PE]) + 2εsP

Ω′PE

≤ εPA + 2εs.

(4.42)

Since the three possible cases are exhaustive, we conclude that the secrecy condition is satisfied by choosing

εsec = max{ε2s, εEA, εPA + 2εs} + εh = max{εEA, εPA + 2εs} + εh.

(4.43)

Recalling that we have already shown the protocol is εh-correct, we finally conclude that it is (max{εEA, εPA + 2εs} + 2εh)-sound.

4.3.3 Entropy accumulation

This section is devoted to the proof of Theorem 4.2. The key theoretical tool in this proof is the entropy accumulation theorem, which we shall now briefly outline in the form stated in [DF19]. To do so, we shall first introduce EAT channels and tradeoff functions.

Definition 4.2. A sequence of EAT channels is a sequence {Mj}j∈[n] where each Mj is a channel from a register Rj−1 to registers DjSjTjRj, which satisfies the following properties:
• All Dj are classical registers with a common alphabet D, and all Sj have the same finite dimension.

• For each Mj, the value of Dj is determined from the registers SjTj alone. Formally, this means Mj is of the form Pj ◦ M′j, where M′j is a channel from Rj−1 to SjTjRj, and Pj is a channel from SjTj to DjSjTj of the form

Pj (ρSjTj ) =

(ΠSj,s ⊗ ΠTj,t)ρSjTj (ΠSj,s ⊗ ΠTj,t) ⊗ |d(s, t)⟩⟨d(s, t)|Dj ,

s∈S ,t∈T

(4.44)

where {ΠSj,s}s∈S and {ΠTj,t}t∈T are families of orthogonal projectors on Sj and Tj respectively, and d : S × T → D is a deterministic function.

Definition 4.3. Let fmin be a real-valued affine function defined on probability distributions over the alphabet D. It is called a min-tradeoff function for a sequence of EAT channels {Mj}j∈[n] if for any distribution q on D, we have

fmin(q) ≤ inf H(Sj|TjR)σ
σ∈Σj (q)

∀j ∈ [n] ,

(4.45)

9We remark that the events Ω′PE and Ωg ∧ Ωh were treated somewhat differently in this analysis, in that while we introduced a parameter εEA to divide the analysis of Ω′PE into separate cases, there is no analogous condition
for Ωg ∧ Ωh (the condition for case 1 is not analogous; it is merely a technicality to allow us to apply Eq. (4.39) and the Leftover Hashing Lemma). This is fundamentally because conditioning on Ω′PE via Eq. (4.38) has a “larger”
effect on min-entropy compared to conditioning on Ωg ∧ Ωh (via Eq. (4.39) modified for normalized conditional
states). When substituting these effects into the final security parameter, one finds that the former worsens the security parameter by an amount that depends on log(1/P[Ω′PE]), while the latter does not, and hence we required a bound on P[Ω′PE] in the former. However, see [Dup21] for a potential approach to avoid this case analysis.

Finite-size analysis

68

where Σj(q) denotes the set of states of the form (Mj ⊗ IR)(ωRj−1R) such that the reduced state on Dj has distribution q. Analogously, a real-valued affine function fmax defined on probability distributions over D is called a max-tradeoff function if

fmax(q) ≥ sup H(Sj|TjR)σ
σ∈Σj (q)

∀j ∈ [n] .

The infimum and supremum of an empty set are defined as +∞ and −∞ respectively.

(4.46)

With these definitions, we can now state the theorem:

Fact 4.2. (Entropy accumulation theorem [DF19, LLR+21]) Consider a sequence of EAT
channels {Mj}j∈[n] and a normalized state of the form ρ = (Mn ◦ · · · ◦ M1 ⊗ IE) ρ0R0E satisfying the Markov conditions

I(S[j−1] : Tj|T[j−1]E)ρ = 0 ∀j ∈ [n] .

(4.47)

Let fmin be a min-tradeoff function for {Mj}j∈[n] and consider any h ∈ R, ε ∈ (0, 1), α ∈ (1, 2). Then for any event Ω ⊆ Dn such that fmin(freqd) ≥ h for all d ∈ Ω, we have10

Hmε in(S|TE)ρ|Ω

>

nh

−

(α n

− 1) ln 2 V
2

2

−

n(α

−

1)2Kα

−

ϑε α−

1

−

α

α −

1

log

1 ,
P[Ω]

(4.48)

where ϑε is as defined in Eq. (4.19), and

V := VarQ(fmin) + 2 + log(2 dim(Sj)2 + 1),

Kα

:=

2(α−1)(2 log dim(Sj )+Max(fmin)−MinQ(fmin)) 6(2 − α)3 ln 2

ln3

22 log dim(Sj )+Max(fmin)−MinQ(fmin) + e2 , (4.49)

with Q being the set of all distributions on D that could be produced by applying some EAT channel to some state.

Informally, the Markov conditions impose the requirement that the register Tj does not “leak

any information” about the previous registers S[j−1] beyond what is already available from T[j−1]E. (Without this Markov condition, one could for instance have channels such that Tj simply contains a copy of Sj−1, in which case it would still be possible to derive a nontrivial

min-tradeoff function, but the conclusion of the entropy accumulation theorem would be trivially

false.) There is also an analogous EAT statement regarding the max-entropy [DFR20], using a

max-tradeoff function, though we will be using it slightly differently and will elaborate further

on it at that point.

We now describe how the EAT can be used to prove Theorem 4.2. First, note that to prove

Theorem 4.2 it would be sufficient to consider only the registers AB′XYC′E of the state ρ (the

conditioning event Ω′PE is determined by C′ alone). The reduced state on these registers is the same as that at the point when Step 2 of Protocol 1′ has finished looping over j, since the

subsequent steps do not change these registers, and thus we can equivalently study that state in

place of ρ|Ω′PE . conditioned on

From this Ω′PE (and

point onwards, all normalized), hence

smoothed min- or for brevity we will

max-entropies refer to that state omit the subscript specifying the

state.

Each iteration of Step 2 of Protocol 1′ can be treated as a channel Mj in a sequence of EAT

channels, by considering it to be a channel performing the following operations:

10This expression differs slightly from those in [DF19, LLR+21] because we have not performed the simplifications based on ϑε ≤ log(2/ε2) and α < 2 (though the former is only a very small improvement for typical values of ε). We also remark that in [LLR+21], a modification was made to the EAT to improve its dependence on the Var term, which we have not included here as it involves a further optimization that would significantly increase the complexity of our keyrate computations. (In an earlier ve-
rsion of this work, we stated that this modification did not make a difference here as our choice of affine fmin is essentially equal to the tight bound on H(Sj|TjR) in our scenario; however, this was in error as this equality does not hold on e.g. any parts of the domain where fmin is negative.)

Finite-size analysis

69

1. Alice generates Xj as specified in Step 2. Conditioned on the value of Xj, Alice’s device performs some measurement on its share of the stored quantum state Rj−1 (which includes any memory retained from previous rounds), then performs sifting and noisy preprocessing on the outcome, storing the final result in register Aj.

2. Bob’s device behaves analogously, producing the registers Yj and Bj′ (we will not need to consider Bj).

3. The value of Cj′ is computed from AjBj′ XjYj.

We highlight that in the above description of Mj, the only “unknowns” are the measurements it performs on the input state on Rj−1 — all other operations are taken to be performed in trusted fashion. (This is reasonable because these measurements and the stored states are the
only untrusted aspects in the true protocol.) If we had simply considered completely arbitrary
channels Mj producing the respective registers, it would not be possible to make a nontrivial security statement about the output.
Identifying Cj′ with Dj, AjBj′ with Sj, and XjYj with Tj in Definition 4.2, we see that these channels Mj indeed form a valid sequence of EAT channels: Cj′ is determined from AjBj′ XjYj in the manner specified by Eq. (4.44). Additionally, the state they produce always fulfills the
Markov conditions, because the values of XjYj in each round are generated independently of all preceding registers.
Intuitively, it seems that we could now use the EAT to bound Hmεsin(A|XYE). However, there is a technical issue: to apply the EAT, the event Ω′PE must be defined entirely in terms of the (classical) registers that appear in the smoothed min-entropy term that we are bounding, which is not a condition satisfied by the registers AXY alone. This is where the register B′ comes into
play, following the same approach as [AFRV19]: by a chain rule for the min- and max-entropies ([VDT+13] or [Tom16] Eq. (6.57)), we have for any ε′s + 2ε′s′ < εs:

Hmεsin(A|XYE) ≥ Hmε′sin(AB′|XYE) − Hmε′s′ax(B′|AXYE) − 3ϑεs−ε′s−2ε′s′ ≥ Hmε′sin(AB′|XYE) − Hmε′s′ax(B′|XYE) − 3ϑεs−ε′s−2ε′s′ .

(4.50)

where the second line holds because the smoothed max-entropy satisfies a data-processing
inequality (see e.g. [Tom16] Theorem 6.2). The Hmε′s′ax(B′|XYE) term admits a fairly simple bound, as follows: consider a sequence of
EAT channels Mj that are identical to Mj except that they do not produce the registers AjCj′ . As before, these maps obey the required Markov conditions. In addition, recall that for every round the register Bj′ is set deterministically to 0 whenever y ∈ {0, 1} (which happens with probability 1 − γ), hence we always have

H(Bj′ |Xj Yj R)(Mj⊗IR)(ωRj−1R) = y P[Yj = y] H(Bj′ |Xj R; Yj = y)(Mj⊗IR)(ωRj−1R) ≤ γ. (4.51)
This means we can apply the max-entropy version of the EAT11 with a constant max-tradeoff function of value γ. Letting V ′ = 2 log(1 + 2 dim(B′)) = 2 log 5, this yields the following bound
11Here we shall use the results from [DFR20], because for a constant tradeoff function, this turns out to yield a slightly better bound as compared to the version of the EAT [DF19] stated here. Strictly speaking, the reasoning used here is not a direct application of the EAT, because once again, the event Ω′PE is not defined on the registers B′XY alone (attempting to address this by including A in the conditioning registers could result in the Markov conditions not being fulfilled). Fortunately, t-
he bound (4.51) holds for our maps Mj even without a constraint on the output distribution. Hence the reasoning is as follows, in terms of the equations and lemmas in [DFR20]: first apply Eq. (32) without the event-conditioning term (this is valid since (4.51) holds without constraints), then condition on Ω′PE using Lemma B.6 (noting that ρB′XYE = P[Ω′PE] (ρ|Ω′PE )B′XYE + P[Ω′PcE] (ρ|Ω′PcE )B′XYE), and finally apply Lemma B.10 to obtain Eq. (4.52). (Alternatively, one could use C′ instead of B′. T-
his was done in [MDR+19] to slightly improve the bound in the block analysis, but it does not make a difference in our analysis. However, using C′ would seem to make it harder to sharpen the slightly crude bound used to obtain Eq. (4.54).)

Finite-size analysis

70

for any α′ ∈ (1, 1 + 2/V ′):

Hmε′s′ax(B′|XYE) < nγ + n

α′ − 1 4

V

′2

+

ϑε′s′ α′ −

1

+

α′ α′ −

1

log

P

1 Ω′PE

.

(4.52)

The bulk of our task is to bound the Hmε′sin(AB′|XYE) term. To do so, we will need an appropriate min-tradeoff function, which we shall now construct.

Min-tradeoff function

Consider an arbitrary state of the form (Mj ⊗ IR)(ωRj−1R). In this section, all entropies will be computed with respect to this state, and hence for brevity we will omit the subscript specifying the state.
We first note that

H(AjBj′ |XjYjR)

=

1

− 4

γ

H(Aj|R; Xj = Yj = z)

z∈{0,1}

γ +
4

H(AjBj′ |R; Xj = x, Yj = y),

y∈{2,3} x∈{0,1}

(4.53)

where we have used the fact that H(AjBj′ |R; Xj = x, Yj = y) = 0 when (x, y) = (0, 1) or (1, 0), and H(AjBj′ |R; Xj = x, Yj = y) = H(Aj|R; Xj = x, Yj = y) when (x, y) = (0, 0) or (1, 1).
Let w denote the probability that the state wins the CHSH game, conditioned on the game
being played. Then by applying the simple but somewhat crude bound12 H(AjBj′ |R; Xj = x, Yj = y) ≥ H(Aj|R; Xj = x, Yj = y) to the terms in the second sum in Eq. (4.53), we get the bound13

H(AjBj′ |XjYjR)

≥

1

− 2

γ rp(w)

+

γ 2

r0(w) = g(w).

y∈{2,3}

(4.54)

We can now use the function g to construct a min-tradeoff function fmin, with the domain of fmin being distributions on Cj′ (recall that this register is set to ⊥ if Yj ∈ {0, 1}, and otherwise is set to 0 or 1 if the CHSH game is lost or won respectively). First observe that the channel is an
infrequent-sampling channel in the sense described in [DF19, LLR+21]. By the argument
in [LLR+21], a valid min-tradeoff function fmin for the channel is given by the (unique) affine function specified by the following values (in a minor abuse of notation, here we interpret g as a
function of a distribution instead of a winning probability):

fmin(δc) =

1 γ

g(δc)

+

1

−

1 γ

β

if c ̸=⊥ ,

β

if c =⊥

(4.55)

where β ∈ [g (δ0) , g (δ1)] is a constant that can be chosen to optimize the keyrate. (Intuitively, this function is constructed simply by noting that the maps Mj can only produce distributions that lie in the slice of the probability simplex specified by the constraint P[Cj′ =⊥] = 1 − γ, and hence the min-tradeoff function is free to take any value for distributions outside of this slice,
recalling that we take the infimum of an empty set to be +∞. For distributions within this slice,
we know that g is an affine lower bound on the entropy as a function of the winning probability,
and hence we can just set fmin equal to g (up to a domain rescaling) on this slice. Any fmin
12This marks a point where the analysis could be slightly sharpened, in that if we had a tight bound on the “twoparty entropies” H(AjBj′ |R; Xj = x, Yj = y) rather than just the “one-party entropies” H(Aj|R; Xj = x, Yj = y), we could improve the second term in (4.54). However, note that it would only improve the keyrate by O(γ), because of the γ prefactor on that term.
13Recall that noisy preprocessing is not applied to the rounds with Yj ∈ {2, 3}.

Finite-size analysis

71

constructed this way is precisely of the form described in Eq. (4.55), with β being a constant determining its value on all distributions outside of the P[Cj′ =⊥] = 1 − γ slice.)
As shown in [LLR+21], the min-tradeoff function constructed this way satisfies

1

1

Max(fmin) = max

Max(g) + γ

1− γ

β, β

,

MinQf (fmin) = MinQg (g),

VarQf

(fmin)

≤

sup
q∈Qg

c∈{0,1}

q(c) γ

(β

−

g(δc))2

,

(4.56)

where Qf denotes the set of distributions on Cj′ such that P[Cj′ =⊥] = 1 − γ and P[Cj′ = 1] ∈ [γwmin, γwmax], while Qg denotes the set of all distributions on the alphabet {0, 1} such that P[1] ∈ [wmin, wmax].
For the specific g and range of β that we consider, these expressions simplify to Eq. (4.20),
where we have solved the optimization supq∈Qg in the bound on VarQf (fmin) by observing that it is an affine function of the distribution q, and the set Qg we use here is essentially a line segment (in a 1-dimensional probability simplex).

Final min-entropy bound

The event Ω′PE is defined by the conditions freqc′(1) ≥ (wexp − δtol)γ and freqc′(0) ≤ (1 − wexp + δtol)γ. Hence for all c′ ∈ Ω′PE, we have (since fmin is affine)

1

1

1

1

fmin(freqc′ ) = freqc′ (0)

γ g (δ0) +

1− γ

β

+ freqc′(1)

γ g (δ1) +

1− γ

β

+ freqc′(⊥)β

1

1

1

1

= freqc′(0) γ g (δ0) − γ β + freqc′(1) γ g (δ1) − γ β + β

≥ (1 − wexp + δtol) (g (δ0) − β) + (wexp − δtol) (g (δ1) − β) + β

= (1 − wexp + δtol)g (δ0) + (wexp − δtol)g (δ1) = g(wexp − δtol),

(4.57)

where the inequality holds because β ∈ [g (δ0) , g (δ1)], and in the last line we use the fact that g is affine and revert to interpreting it as a function of winning probability. (We remark that
if we fix β = g(1), then in fact this inequality can be derived using only the freqc(0) condition, following [DF19]. Hence in principle one could sacrifice the option of optimizing β in exchange
for reducing the number of checks to perform in the protocol, which improves the completeness
parameters.)
Therefore, we can choose h = g(wexp − δtol) in the EAT statement (Fact 4.2) to conclude that the state conditioned on Ω′PE satisfies

Hmε′sin(AB′|XYE)

>

ng(wexp

−

δtol)

−

n

(α

−

1) 2

ln

2

V

2

−

n(α

−

1)2Kα

− ϑε′s − α log α−1 α−1 P

1 Ω′PE

,

(4.58)

where ϑε, V, Kα are as defined in Eq. (4.19). Putting this together with Eqs. (4.50) and (4.52), we finally obtain the bound in Theorem 4.2.

4.4 Resulting finite-size keyrates
In Figs. 4.1 and 4.2, we plot some finite-size keyrates given by our security proofs, for the various types of honest devices described in Sec. 4.1.3. Fig. 4.1 corresponds to honest devices with performance described by the estimated parameters in [MDR+19] for the NV-centre [HBD+15]

Finite-size analysis

72

Keyrate
0.06 0.05 0.04 0.03 0.02 0.01

8

10

12

14

(a) [HBD+15] parameters

Keyrate
0.020

0.015

0.010

0.005

log10(n)

8

9

10

11

12

13

14

15 log10(n)

(b) [RBG+17] parameters

Figure 4.1: (From [TSB+20]) Finite-size keyrates as a function of number of rounds in Protocol 1 without noisy preprocessing (p = 0), for honest devices following the estimated parameters in [MDR+19] for the Bell tests in [HBD+15] and [RBG+17]. The solid curves show the results for coherent attacks (Theorem 4.1), while the dashed curves show the results under the assumption of collective attacks (Theorem 4.4), with the error-correction protocol taken to satisfy Eqs. (4.4)–(4.6). The colours corres-
pond to soundness parameters of εsou = 10−3, 10−6, and 10−9 for black, blue, and red respectively, while the completeness parameter is εcom = 10−2 in all cases. The horizontal line denotes the asymptotic keyrate. All other parameters in Theorems 4.1 and 4.4 were numerically optimized, except β.

Keyrate

0.15

0.10

0.05

6

8

10

12

14

log10(n)

Figure 4.2: (From [TSB+20]) Finite-size keyrates secure against coherent attacks (Theorem 4.1) as a function of number of rounds in Protocol 1 without noisy preprocessing (p = 0), where the honest devices are described by depolarizing noise q (see Sec. 4.1.3). The solid, dashed and dotted curves denote q = 5%, 6% and 7% respectively, with the error-correction protocol taken to satisfy Eqs. (4.4)–(4.6). The soundness parameter is εsou = 10−6 and the completeness parameter is εcom = 10−2. The horizo-
ntal lines denote the asymptotic keyrates. All other parameters were numerically optimized.

Finite-size analysis

73

and cold-atom [RBG+17] loophole-free Bell tests. (Noisy preprocessing was not applied for these plots because it appears to only slightly improve the keyrates for those experimental parameters; see Fig. 4.3 later.) Fig. 4.2 shows the finite-size keyrates for honest devices subject to depolarizing noise. For reference, we also plot the finite-size keyrates of Protocol 1 under the assumption of collective attacks (Theorem 4.4 in the subsequent sections).
From Fig. 4.1, we see that our security proof requires the [HBD+15] and [RBG+17] experiments to run for approximately n ∼ 108 and 1010 rounds respectively in order to certify a positive finite-size keyrate against coherent attacks, or roughly 1–2 orders of magnitude smaller for collective attacks (we derive the keyrate for that scenario in Sec. 4.5.3). While this is a marked improvement over the basic [PAB+09] protocol (which yields zero asymptotic keyrate for those experiments), these finite-size-
 requirements still appear to be outside the reach of those experimental implementations. We also see that changing the security parameters by several orders of magnitude only results in fairly small changes to the keyrate, so it appears unlikely that the keyrates could be substantially improved by relaxing these security requirements.
4.5 Possible modifications
To improve on these results, we now describe some possible modifications of Protocol 1. Namely, Protocol 2 is a modification based on a pre-shared key, which achieves a net key generation rate approximately double that of Protocol 1, by overcoming a crucial disadvantage of random-key-measurement protocols (namely, the sifting factor). Also, Protocol 3 is a modification that is optimized for the collective-attacks assumption — by changing the protocol itself for this scenario rather than just the s-
ecurity proof, we can further improve the keyrate to some extent.
4.5.1 Coordinating input choices by public communication
The random-key-measurement protocol has the drawback that the keyrate is effectively halved, since the generation rounds have “mismatched” inputs approximately half the time. It would be helpful to find a way to work around this issue. One possible approach could be to observe that in [AFRV19], it was assumed that the following operations can be performed in each round: the devices receive some shares of a quantum state, then14 Alice and Bob publicly communicate to come to an agreement on both of -
their input choices, and finally they supply these inputs to their devices. (This was necessary in [AFRV19] because Alice and Bob’s actions in that DIQKD protocol require both of them to know whether it is a test or generation round. In fact, our analysis can be viewed as the first EAT-based security proof for a “genuinely sifting-based” DIQKD protocol, in the sense that Alice and Bob do not coordinate which rounds are test rounds, and simply choose their inputs independently.) If we assume that t-
his is also possible in our scenario, then Alice and Bob could coordinate their inputs in the generation rounds instead of choosing them independently, thereby avoiding the sifting factor.
Unfortunately, it does not seem clear if such a proposal is entirely plausible in near-term experimental implementations. This is because it relies on the devices being able to store the quantum state for long enough for Alice and Bob to agree on their choice of inputs, which is potentially challenging for current Bell-test implementations. As an alternative, we propose the following potential modification to the DIQKD protocol in [AFRV19] — instead of agreeing on the test rounds via public commun-
ication, Alice and Bob could use a small amount of pre-shared key to choose which rounds are test rounds, in the same way as in DIRE (for details on the amount of pre-shared key required, see the DIRE protocols in [AFRV19, BRC20] or the discussion in Sec. 4.5.2 below). This approach would essentially be a “key expansion” protocol
14The assumption being made here is that since the quantum states are now entirely in the possession of Alice and Bob, the test/generation decision can no longer affect the distributed state — if the distributed state could depend on whether it is a test or generation round, the protocol would be trivially insecure.

Finite-size analysis

74

that requires a small amount of pre-shared key to initialize. We remark that this is not a dramatic change in perspective, because a common method to authenticate channels (namely, message authentication codes) relies on having a small amount of pre-shared key, so the assumed existence of authenticated channels in the DIQKD protocol is likely to require some pre-shared key in any case.
However, this basic notion cannot immediately be generalized to Protocol 1 here, since requiring Alice and Bob to choose uniformly distributed “matching” inputs in the generation rounds would require a large amount of pre-shared key (roughly (1 − γ)n bits), likely exceeding the length of the key generated by the protocol. Fortunately, in the following section, we propose a variation which overcomes this difficulty by “recovering” the entropy in the pre-shared key, thereby still achieving net key e-
xpansion.
4.5.2 Protocol using pre-shared key
Here we describe a variant protocol that avoids the sifting factor without requiring the brief quantum storage described above, through the use of a fairly long pre-shared key. (This idea was also independently proposed in [BRC21].) The limitation of this variant is that the net increase in secret key is just a (constant) fraction of the amount of pre-shared key; however, the rate of net key generation does not have the sifting factor of 1/2. Informally, the idea is to simply use the pre-shared ke-
y as Alice’s input string X, which allows Bob to choose his generation inputs to match Alice’s. Just as importantly, this also allows them to (almost) entirely omit the public announcement of their inputs — hence X remains private, and with some care it can be incorporated into the final key without losing the entropy it “contains”.
We now describe this idea in detail as Protocol 2 below, followed by its security proof. The protocol supposes that Alice and Bob hold a pre-shared (uniform) key of n bits, which we shall simply denote as X, since it will be exactly the string that Alice uses as her inputs. The appropriate value of ℓkey to choose will be described later in Theorem 4.3.
Protocol 2 This protocol proceeds the same way as Protocol 1, except for the following changes:
• In each round, Alice’s input Xj is determined from the pre-shared key X, instead of being generated randomly in that round. Bob’s input Yj is generated as follows: with probability γ he chooses a uniformly random Yj ∈ {2, 3}, otherwise Bob chooses Yj = Xj. In addition, he generates another register Yj′ which equals Yj when Yj ∈ {2, 3} and equals ⊥ otherwise.
• Alice and Bob do not publicly announce the strings XY. Instead, Bob only announces the string Y′.15 Additionally, the sifting step is unnecessary, since there will be no rounds such that Yj ∈ {0, 1} and Xj ̸= Yj.
• Privacy amplification is performed on the strings AX and A˜ X instead of A and A˜ .

To prove the security of this protocol, we can simply follow almost exactly the same security proof as for Protocol 1, with some changes we shall now describe. Firstly, the value of hhon (to

15It might be possible to consider a slight variant which omits this step. However, knowing Y′ allows Alice to compute Y, which may be relevant for error correction since it allows Alice to distinguish the test and generation rounds. In any case, it seems unclear whether the entropy of Y′ can be usefully extracted even if it is kept secret, since Alice does not have access to it in that case.

Finite-size analysis

75

be used when computing ECleak) is replaced by

h˜ hon

=

H(Aj |Bj Xj Yj )hon

=

1−γ 2

H(Aj|Bj; Xj = Yj = z)hon

z∈{0,1}

γ

+ 4

H(Aj|Bj; Xj = x, Yj = y)hon,

x∈{0,1},y∈{2,3}

(4.59)

since the probabilities of Xj = Yj = z for z ∈ {0, 1} are now (1 − γ)/2. (Note that no error-
correction information needs to be sent from Alice to Bob regarding X, since both of them have
a copy of that string.) Also, since the strings used in the privacy-amplification step are now AX and A˜ X, this means
that we need an equivalent of Eq. (4.58), with Hmε′sin(AB′X|Y′E) in place of Hmε′sin(AB′|XYE). To obtain this, we note that we can simply construct a virtual protocol in the analogous way to Protocol 1′, then consider the same EAT channels Mj as before, but instead we shall identify Cj′ with Dj, AjBj′ Xj with Sj, and Yj′ with Tj in Definition 4.2. The Markov conditions are again fulfilled, since Yj′ is generated by trusted randomness in each round and independent of all previous data. To find an a-
ppropriate min-tradeoff function for these channels, we note that the
output (Mj ⊗ IR)(ωRj−1R) of channel Mj always satisfies

H(Xj|Yj′R) = H(Xj) = 1,

(4.60)

because Xj is produced by trusted randomness independent of Yj′R. Therefore, we can use the chain rule to write

H(AjBj′ Xj|Yj′R) = H(Xj|Yj′R) + H(AjBj′ |XjYj′R) ≥ 1 + (1 − γ)rp(w) + γr0(w) := 1 + g˜(w),

(4.61)

where the function g˜ (in contrast to g) does not have the factor of 1/2 introduced by sifting, since
Alice does not “erase” the outputs of any rounds. We can thus construct a new min-tradeoff function f˜min in the same way as in Sec. 4.3.3, but using 1 + g˜(w) in place of g(w).16 The rest of the proof then proceeds as before, leading to the following security statement:

Theorem 4.3. Protocol 2 has the same security guarantees as those described in Theorem 4.1, except with the following changes (with g˜ being defined in (4.61)):
• β is chosen to be in [1 + g˜(0), 1 + g˜(1)] instead. • hhon is replaced by h˜hon as specified in Eq. (4.59).
• In Eq. (4.18) for ℓkey, g(wexp − δtol) is replaced by 1 + g˜(wexp − δtol), and the values of V and Kα are replaced by

V˜ := VarQf (f˜min) + 2 + log 129,

K˜ α

:=

2(α−1)(2 log 8+Max(f˜min)−MinQf (f˜min)) 6(2 − α)3 ln 2

ln3

22 log 8+Max(f˜min)−MinQf (f˜min) + e2

,

(4.62)

where f˜min is a function that satisfies
16We remark that if we think of this replacement as happening in two steps, first replacing g by g˜ and then adding a “constant offset” of 1, then the latter has no effect on VarQf (fmin) or the difference Max(fmin) − MinQf (fmin), and hence does not change the finite-size correction to the keyrate except indirectly via changing the system dimensions and the range of β. However, the first step of replacing g by g˜ does slightly increase the finite-size correction (since g˜ has a somewhat larger ra-
nge).

Finite-size analysis

76

Max(f˜min)

=

1

+

1 γ

g˜(1)

+

VarQf (f˜min)

≤

wmin γ

min

∆20, ∆21

1 1 − β,
γ + wmax max
γ

MinQf (f˜min) = 1 + g˜(wmin), ∆20, ∆21 , where ∆w := β − 1 − g˜(w).

(4.63)

Overall, recalling that Protocol 1 required n bits of pre-shared key, we see that the net gain of secret key bits in Protocol 2 is larger than that of Protocol 1 by a factor of approximately (ignoring the changes to the finite-size corrections)

n g˜(wexp − δtol) − h˜hon n g(wexp − δtol) − hhon

≈ 2,

(4.64)

since it avoids the sifting factor. Informally, by keeping X secret and incorporating it in the privacy amplification step, we have “recovered” the entropy that was in the pre-shared key.
In practice, including the string X in privacy amplification essentially doubles the input size for the hash function in that step, which raises its computational difficulty substantially (though not insurmountably). One might wonder whether it would be possible to bypass this aspect — for instance, by simply performing privacy amplification on A and A˜ as before, then appending X to the output. At first glance, this approach might appear plausible, since X is not announced in Protocol 2. Unfortun-
ately, it seems unclear how to certify that the publicly communicated error-correction string L is independent of X (in fact, it seems unlikely that this is true). Hence the idea of simply appending X may not be secure. By instead incorporating it in privacy amplification in the specified manner, Protocol 2 ensures that the entropy of X is securely “extracted” into the final key.
As previously mentioned, the net increase in secret key given by one instance of Protocol 2 is limited to a fraction of the amount of pre-shared key. However, it is possible in principle to recursively run Protocol 2 in order to achieve unbounded key expansion — one can use the key generated by one instance of Protocol 2 to run it again with a longer pre-shared key and larger n (since the security definition is composable, the soundness parameter will only increase additively in this process [PR14-
, PR21]). We stress that in doing so, one must always incorporate the seed into the privacy-amplification step exactly as specified in Protocol 2 — in particular, this means that the entire key changes with every iteration, instead of simply having some new bits appended. Some care is necessary regarding device memory across instances of this recursive procedure — while it does not seem to be directly vulnerable to the memory attack of [BCK13]17, it is still important to ensure that the states mea-
sured in each instance of the protocol are independent of the key generated in the preceding instance, since this key is used to choose the device inputs (which must be independent of the state in order for our security arguments to hold). Again, this relies on the notion that the registers measured by the devices do not contain information about the key generated in the preceding instance.
There is another potential variant of this idea where a pre-shared key is instead used to generate both input strings X and Y, and the input-choice announcement is omitted entirely, with privacy amplification being performed on AXY and A˜ XY. This can be done by using κh2(γ)n bits to choose the test rounds approximately according to the desired IID distribution of test rounds, then using κ′γn bits to set the value of Yj in the test rounds, where κ, κ′ > 1 are constants that can be chosen such that-
 the approximations to the desired distributions
17This is because the only public communication in Protocol 2 that can leak any information is the errorcorrection string (all other public communication is based on trusted randomness). In our security proof, we have bounded the min-entropy leakage at this step simply via the length of this string, without any assumptions about its structure, and hence we can still obtain a secure bound on the min-entropy of the input for privacy amplification in the final protocol instance. Note that this claim -
is strictly restricted to device reuse following the recursive process specified here — once any key bits have been used for any other purpose, the attack again becomes a potential concern if the devices are reused.

Finite-size analysis

77

are sufficiently accurate (see the randomness-expansion protocols in [AFRV19, BRC20] for a more complete description of this process based on the interval algorithm), and n bits to set the value of Xj in all rounds.18 This would hence require (1 + κh2(γ) + κ′γ)n bits of seed randomness. A similar argument as above could then be performed by noting that (for XjYj generated according to the ideal distribution) we have H(XjYj) = 1 + h2(γ) + γ, so most of the seed entropy can be “recovered”, up to the-
 losses from the κ, κ′ factors. However, tracking the effects of using the interval algorithm to approximate the ideal distribution is cumbersome (albeit possible), and it is unclear if this variant offers any immediate advantage over Protocol 2 for DIQKD — though it may be useful for protocols that use non-uniform input distributions.
On the other hand, it appears that this variant may have potential for the purposes of DIRE instead. The main reason why the random-key-measurement approach in [SGP+21] could not be easily generalized to DIRE is that in order for Alice to select a uniformly random input in every round, she requires a (local) source of n random bits, which is a free resource in DIQKD but not in DIRE — if a proposed DIRE protocol consumes more random bits than it produces, then it has failed to achieve randomness ex-
pansion (though it may still be useful for DIRNG). However, the protocol proposed in this section has the property that it “recovers” the entropy contained in the seed, which means that one can afford to use much larger seeds while still obtaining a net increase in secret key. Explicitly, the application of this idea to DIRE would hence be as follows (also proposed independently in [BRC21]): one begins with 2n random bits, which are then used as the input strings19 XY to the devices over n rounds -
to obtain outputs AB. Modelling this process using EAT channels in a manner similar to above (see e.g. [LLR+21] for details), for each round we would have

H(AjBjXjYj|R) = H(XjYj|R) + H(AjBj|XjYjR) = 2 + H(AjBj|XjYjR),

(4.65)

which (given a bound on H(AjBj|XjYjR)) allows one to bound the smoothed min-entropy of ABXY conditioned on E. By performing privacy amplification on ABXY, one “recovers” all the entropy in the seed, due to the H(XjYj|R) term in the above equation. Overall, this proposed protocol allows one to use the improved entropy rate provided by the random-key-measurement approach [SGP+21], in the context of DIRE instead of DIQKD.

4.5.3 Collective attacks

As a reference to compare our results against, we could consider whether a longer secure key could be obtained under the collective-attacks assumption. To this end, we derive the following theorem, with the proof given in Appendix G.1:

Theorem 4.4. Take any εcEoCm, εcPoEm, εPA, εh, εs, εstat ∈ (0, 1], γ ∈ (0, 1), p ∈ [0, 1/2], and δstat ∈ [0, wexp − δtol), such that

εstat ≥ Bn,1−(wexp−δtol−δstat)γ (⌊(1 − (wexp − δtol)γ)n⌋).

(4.66)

Under the collective-attacks assumption, Protocol 1 is (εcEoCm +εcPoEm)-complete and (max{εstat, εPA + 2εs} + 2εh)-sound when performed with any choice of ECleak and δtol such that Eq. (4.3) and
Eq. (4.17) hold, and ℓkey satisfying

√

2

1

ℓkey ≤ ng(wexp − δtol − δstat) − n (2 log 5) log ε2s − ECleak − log εh

1 − 2 log + 2.
εPA

(4.67)

18We break up the use of the seed into separate processes because it allows for better efficiency as compared
to directly approximating the desired distribution of XY — with the approach we describe, the “inefficiency” prefactors κ, κ′ of the interval algorithm only appear on the h2(γ)n, γn terms instead of the full entropy of XY.
19For DIRE based on the CHSH inequality, Bob only requires two possible measurements instead of the four
required for the DIQKD protocol here.

Finite-size analysis

78

This bound asymptotically converges to the desired value by an analysis similar to that above (4.26). Explicitly: set all the ε parameters to some constant values satisfying the desired completeness and soundness bounds, then take γ = 2n−1 max{δt−o2l log(2/εcPoEm), δs−ta2t log(1/εstat)} to ensure that (4.17) and (4.66) are satisfied (the latter claim follows from (G.3) in Appendix G.1). Now similarly set δtol, δstat ∝ 1/n1/3 to obtain δtol, δstat, γ = O(1/n1/3), i.e. the “relaxation parameters” δt-
ol, δstat and the test-round fraction γ all go to zero as n increases. This yields convergence to the asymptotic keyrate formula (4.26).
However, the above theorem is simply a statement for Protocol 1 under the assumption of collective attacks, and that protocol does not fully exploit some implications of that assumption. For instance, in Theorem 4.4 there is implicitly an O(γ) subtractive penalty to the keyrates (which was also present in Theorem 4.120) caused by having to include the test-round data in the ECleak term. While this is partly mitigated by the fact that the test rounds are also included in privacy amplification, the -
issue is that the test-round outputs are less strongly correlated as compared to generation rounds, and hence in most noise regimes there is an overall negative effect (on the order of γ). Yet under the collective-attacks assumption, the test rounds are completely independent of the generation rounds, which implies that the effect of γ should instead be to reduce the keyrate by a multiplicative factor of (1 − γ). Importantly, in the latter case it is possible to choose arbitrarily large test proba-
bilities γ without necessarily making the keyrates negative, which can dramatically improve the statistical bounds for parameter estimation. To formalize this idea, we consider Protocol 3 below, which attempts to minimize the finite-size correction as much as possible using the most optimistic assumptions that have been discussed thus far.
Protocol 3
This protocol proceeds the same way as Protocol 1, except for the following changes:
• Instead of independently choosing whether each round is a test or generation round, Alice chooses a uniformly random subset of size m as test rounds before the protocol begins, and we define γ as the value m/n. Alice also prepares the strings XY in advance, by choosing Xj = Yj ∈ {0, 1} uniformly at random in the generation rounds, and choosing Xj ∈ {0, 1}, Yj ∈ {2, 3} uniformly at random in the test rounds.
• In each round, Alice and Bob briefly store their received quantum states instead of immediately measuring them. Alice then publicly announces XjYj, which Alice and Bob then use as the inputs to their devices.21
• In the error-correction step, Alice does not send error-correction data (and a corresponding hash) for the full string A, but rather only the subset of it consisting of the generation rounds, denoted as Ag. Bob’s guess for this string will be denoted as A˜ g. The values of A in the test rounds, denoted as At, are sent directly to Bob without compression or encryption, and Bob uses this string for parameter estimation.
• Bob’s accept condition is instead to check that hash(Ag) = hash(A˜ g) and freqct(1) ≥ wexp − δtol hold, where Ct denotes the substring of C corresponding to the test rounds (in particular, this means the frequencies are computed with respect to a string of length γn, not n).
• Privacy amplification is performed only on the strings Ag and A˜ g.

20In fact, Theorem 4.1 has another O(γ) subtractive penalty from the use of the bound (4.50), but this was due to the technical limitations of the EAT and the fact that the bounds (4.51) and (4.54) are slightly suboptimal.
21Here, in our attempt to minimize the finite-size effects, we are following the [AFRV19] assumption mentioned previously: Alice and Bob can briefly store their received quantum states, in a manner such that the public communication cannot affect the stored states.

Finite-size analysis

79

Keyrate
0.04 0.03 0.02 0.01
6

Keyrate
0.07

0.06

0.05

0.04

0.03

0.02

0.01

8

10

12

14 log10(n)

6

8

10

12

14 log10(n)

(a) [RBG+17] parameters, p = 0

(b) [RBG+17] parameters, p = 0.03 (with heuristic rp)

Figure 4.3: (From [TSB+20]) Finite-size keyrates as a function of number of rounds in Protocol 3 (see Theorem 4.5), using honest devices following the estimated parameters in [MDR+19] for the loophole-free Bell test in [HBD+15], for p = 0 and p = 0.03 (the latter is a rough estimate of the choice of p which yields the highest asymptotic keyrate for these experimental parameters). Note that the latter graph is computed using a heuristic estimate of rp rather than a certified bound. The error-correc-
tion protocol is taken to satisfy Eqs. (4.4) and (4.68). The colours correspond to soundness parameters of εsou = 10−3, 10−6, and 10−9 for black, blue, and red respectively, and the completeness parameter is εcom = 10−2 in all cases. The horizontal line denotes the asymptotic keyrate. All other parameters in Theorem 4.5 were numerically optimized. The required number of rounds to achieve positive keyrate is substantially lower than Protocol 1 (see Fig. 4.1).

For this protocol, the value of ECleak is to be computed based only on the number of generation rounds, since error correction is performed on the string Ag rather than A. Focusing on the best possible theoretical bounds from Sec. 4.1.1, this means we take ECleak to be given by Eq. (4.4) with

Hmε˜sax(A|BXY)hon ≤ (1 − γ)nhhon +

2 (1 − γ)n (2 log 5) log ε˜2s ,

(4.68)

where

1

hhon =

2 H(Aj|Bj; Xj = Yj = z)hon,

z∈{0,1}

(4.69)

since the test rounds are excluded. With this value of ECleak in mind, we can state the security guarantees of this protocol, with the proof given in Appendix G.2 (note that the dependence on several security parameters here is somewhat different as compared to the previous theorems):

Theorem 4.5. Take any εcEoCm, εcPoEm, εPA, εh, εs, εstat ∈ (0, 1], γ ∈ (0, 1), p ∈ [0, 1/2], and δstat ∈ [0, wexp − δtol), such that

εstat ≥ Bγn,1−wexp+δtol+δstat (⌊(1 − wexp + δtol)γn⌋).

(4.70)

Under the collective-attacks assumption, Protocol 3 is (εcEoCm +εcPoEm)-complete and (max{εstat, εPA + 2εs} + εh)-sound when performed with ECleak defined in terms of εcEoCm as described above, and δtol, ℓkey satisfying

εcPoEm ≥ Bγn,wexp (⌊(wexp − δtol)γn⌋),

(4.71)

ℓkey ≤ (1 − γ)nrp(wexp − δtol − δstat) − (1 − γ)n (2 log 5)

1 − ECleak − log εh

1 − 2 log + 2.
εPA

2 log ε2s

(4.72)

Finite-size analysis

80

In Fig. 4.3, we plot the results of Theorem 4.5, focusing on the [RBG+17] experiment. This protocol has improved finite-size performance as compared to the original Protocol 1 (under the collective-attacks assumption) due to at least two factors. Firstly, we can potentially use larger γ values, as previously mentioned (some of the points shown in the figure correspond to values ranging up to γ ≈ 0.3). Secondly, we find that for fixed values of γ, n, wexp, δtol, δstat, the binomial-distribution bou-
nds for this protocol (Eqs. (4.70) and (4.71)) are typically several orders of magnitude better than their counterparts for Protocol 1 (Eqs. (G.2) and (4.29)). Intuitively, this arises because in Protocol 1, the number of test rounds is itself a random variable, hence increasing the variance in e.g. the number of rounds where Cj = 1. Practically speaking, this means Protocol 1 requires noticeably larger values of δtol and δstat in order to achieve given completeness and soundness parameters, hence-
 reducing the keyrate by a nontrivial amount.
However, we see that even with the optimistic assumptions that yield Theorem 4.5, the keyrate for the estimated experimental parameters we consider only becomes positive at fairly large n. This indicates that substantial further work is necessary in order to achieve a demonstration of positive finite-size keyrates.

Chapter 5
Advantage distillation
We now turn to the somewhat less well-studied setting of advantage distillation in DIQKD, where the proof techniques we have discussed in previous chapters no longer apply straightforwardly. Because of this, in this chapter we will work under the simplifying assumption of collective attacks. We begin by defining in Sec. 5.1 the specific advantage distillation protocol that we consider. Then in Sec. 5.2, we derive a sufficient condition for this protocol to be secure in the context of DIQKD. Finall-
y, in Sec. 5.3 we describe the resulting noise tolerances, and compare them to the values achieved by one-way protocols. The results in this chapter are based on [TSB+20], and the phrasing and presentation are essentially identical to that work.
5.1 Preliminaries
We work under the collective-attacks assumption, so we follow the notation described in Sec. 1.1 and use ρABE to denote the single-round state. Given the IID structure, the outcome probabilities can be estimated to arbitrary accuracy given enough rounds, so we shall assume that the parameter estimation step basically only accepts states that produce exactly the same distribution P[ab|xy] as the honest states. We focus only on protocols where the generation rounds always use the inputs x = y = 0, s-
o we are not considering the random-key-measurements technique. Also, we will only consider scenarios where all outputs are binary-valued, and we will not implement noisy preprocessing.
For convenience in the proofs, we assume a symmetrization step is implemented (as mentioned in Sec. 3.3), in which Alice generates a uniform random bit F in each round and sends it to Bob, with both parties flipping their measurement outcome if and only if F = 11. The bit F can be absorbed into Eve’s side-information E. (Again, this symmetrization step can be omitted in practice; see [TLR20].) After this process, the generation measurements have symmetrized outcomes, in the sense P[01|00] = P[10|0-
0] = ϵ/2 and P[00|00] = P[11|00] = (1 − ϵ)/2 for some ϵ < 1/2 (if ϵ > 1/2, simply swap Bob’s outcome labels).2 Henceforth, PAˆBˆ|XY refers to the distribution after symmetrization.
We focus on the repetition-code protocol [Mau93, Wol99, Ren05, BA07]3 for advantage distillation, which proceeds as follows. First, exploiting the collective-attacks assumption, we shall simply ignore the test rounds (apart from assuming they have been used for arbitrarily
1In this work, we take the symmetrization step to be applied to all measurements, which is possible because we focus on scenarios where all measurements have binary outcomes. In principle, one could instead symmetrize the key-generating measurements only, in which case the measurements not used for key generation can have more outcomes.
2Note that in this context, ϵ is equal to the QBER (for the generation inputs). When we consider depolarizing noise later, the parameter q is not necessarily equal to ϵ in all the scenarios we consider — this is somewhat unfortunate, but needs to be kept in mind.
3We choose to focus on this protocol because in device-dependent QKD, thus far it has been the protocol that has achieved the highest noise tolerances [KL17].

Advantage distillation

82

accurate estimation of P[ab|xy]), and focus only on the generation rounds. The generation rounds are divided into blocks of k rounds each. We shall denote Alice and Bob’s output bitstrings in a block as A0 and B0 respectively (with the subscript reminding us that all generation rounds use the inputs x = y = 0), and Eve’s side-information in one block as E (this is slightly different from the all-rounds side-information E that we used in previous discussions of collective attacks; we will not need -
that in this chapter). Alice privately generates a uniformly random bit C, and sends the message M = A0 ⊕ (C, C, ..., C) to Bob via a public authenticated channel. Bob replies with a bit D that expresses whether to accept the block, with D = 1 (accept) if and only if B0 ⊕ M = (C′, C′, ..., C′) for some C′ ∈ Z2. If the block is not accepted, Alice and Bob overwrite the values of CC′ with some null symbol ⊥. Alice and Bob will then try to distill a secret key from the bit pairs (C, C′) across many b-
locks, by using one-way error-correction followed by privacy amplification. (Here we do not consider the option of performing procedures such as noisy preprocessing, as it becomes very challenging to analyze.)
Under the collective-attacks assumption, we see that the system before applying the one-way error-correction protocol consists of many IID copies of the registers CC′DEM, with Alice holding C, Bob holding C′D, and Eve holding DEM. (The A0B0 registers can be excluded from consideration because Alice and Bob do not use them further in this protocol, and Eve has no direct access to them.) In that case, by the same arguments as described in Sec. 2.5, the asymptotic keyrate of this protocol (with respe-
ct to the number of protocol rounds) would be given by an analogous version of the expression (2.36), i.e. it would be

1 rate∞ = k

inf H(C|DEM) − H(C|DC′)hon
Sexact

,

(5.1)

where the prefactor accounts for the fact that every block consists of k rounds. (We have again
taken the fraction of test rounds to go to zero asymptotically.) Furthermore, observe that the probability of accepting a block (i.e. D = 1) is ϵk + (1 − ϵ)k, and thus we have

H(C|DEM) = P[D = d] H(C|EM; D = d) = (ϵk + (1 − ϵ)k)H(C|EM; D = 1), (5.2)
d
recalling that C is deterministically set to a null value when D = 0 (and thus we have H(C|EM; D = 1) = 0). Performing the same calculation for H(C|DC′)hon, we can conclude that the asymptotic keyrate takes the form

ϵk + (1 − ϵ)k

rate∞ =

k

inf H(C|EM; D = 1) − H(C|C′; D = 1)hon
Sexact

.

(5.3)

From this expression, we see that key distillation would be asymptotically possible as long as

inf H(C|EM; D = 1) − H(C|C′; D = 1)hon > 0,
Sexact

(5.4)

and hence we shall just focus on this condition. For brevity, in the rest of this chapter we shall drop the hon subscript on the second term.

5.2 Security conditions

5.2.1 General scenarios

We derive the following theorem:

Theorem 5.1. For a DIQKD protocol as described above, a sufficient condition for Eq. (5.4) to hold for large k is for all states accepted in parameter estimation to satisfy

F (ρE|00, ρE|11)2

>

1

ϵ −

, ϵ

(5.5)

Advantage distillation

83

where ρE|a0b0 is Eve’s single-round state conditioned on outcomes (a0, b0) being obtained for inputs x = y = 0.

Note that in the above theorem, ρE|00 and ρE|11 refer to the states after the symmetrization step is implemented. The theorem can in fact be slightly broadened to encompass protocols without a symmetrization step, as long as PAˆBˆ|XY has symmetrized outcomes, since the latter property is all that is required in the proof (see below). However, since in any case the symmetrization step can be omitted in practice [TLR20], this does not seem to be a significant generalization.
The intuition behind the proof is that if Eve sees the message value M = m, then with high probability Alice and Bob’s strings have the value A0B0 = mm or mm (where m denotes the bitwise complement of m). Hence Eve essentially has to distinguish between these two cases, which can be quantified via the fidelity F (ρE|mm, ρE|mm) = F (ρE|00, ρE|11)k. To make this rigorous, we also need to prove that various “low-probability” contributions vanish asymptotically. We now give the full proof (see also Ap-
pendix H for an alternative proof, which yields a potentially more general version of Theorem 5.1 that was not stated in [TLR20]):

Proof. All states denoted in this proof are normalised. To bound H(C|EM; D = 1), we first
observe that since H(X|Y Z) = z PZ[z] H(X|Y ; Z = z) for classical Z, it suffices to bound H(C|E; M = m ∧ D = 1) for arbitrary messages m. Starting from the initial A0B0E state

ρA0B0E =

PA0B0 [a0, b0] |a0, b0⟩⟨a0, b0| ⊗ ρE|a0b0 ,

a0,b0

(5.6)

a straightforward calculation shows that conditioned on the block being accepted and M = m, the CE state takes the form ρCE|M=m∧D=1 = c(1/2) |c⟩⟨c| ⊗ ωc with

ω0

=

PA0B0 [m, m] ρE|mm PA0B0 [m, m]

+ +

PA0B0 [m, m] ρE|mm , PA0B0 [m, m]

ω1

=

PA0B0 [m, m] ρE|mm PA0B0 [m, m]

+ +

PA0B0 [m, m] ρE|mm . PA0B0 [m, m]

(5.7)

We now consider a state ρ˜CE defined as follows:

ρ˜CE := (1/2)(|0⟩⟨0| ⊗ ρE|mm + |1⟩⟨1| ⊗ ρE|mm).

(5.8)

With symmetrized IID outcomes, we have PA0B0[m, m] = PA0B0[m, m] = (1 − ϵ)k/2k and PA0B0 [m, m] = PA0B0 [m, m] = ϵk/2k, so

ϵk d(ρ˜CE, ρCE|M=m∧D=1) ≤ δk, where δk := ϵk + (1 − ϵ)k .

(5.9)

Applying a continuity bound for conditional von Neumann entropy [Win16] then yields

H(C|E; M = m ∧ D = 1) ≥ H(C|E)ρ˜ − δk − (1 + δk)h2

δk 1 + δk

,

where h2 is the binary entropy function. The H(C|E)ρ˜ term is bounded by [RFZ10]4

(5.10)

H(C|E)ρ˜ ≥ 1 − h2

1 − F (ρE|mm, ρE|mm) 2

= 1 − h2

1 − F (ρE|00, ρE|11)k 2

,

(5.11)

4The alternative proof in Appendix H instead uses a bound based on min-entropy here, which appears suboptimal a priori but can yield a slight generalization of Theorem 5.1.

Advantage distillation

84

using the IID assumption. As for H(C|C′; D = 1), it can be seen that P[C ̸= C′|D = 1] = δk for IID outcomes, so

H(C|C′; D = 1) = h2(δk).

(5.12)

Combining these results, we conclude

H(C|EM; D = 1) H(C|C′; D = 1) ≥
≥

1 − h2

1 − F (ρE|00, ρE|11)k 2

− δk − (1 + δk)h2

δk 1 + δk

F (ρE|00, ρE|11)2k ln 4

−

δk

−

(1

+

δk )h2

δk 1 + δk

h2 (δk )−1 ,

h2 (δk )−1 (5.13)

where the second line holds because h2((1 − p)/2) ≤ 1 − p2/ ln 4 (this inequality follows from the Taylor expansion of h2).
It remains to find the behaviour of this expression in the large-k limit. To do so, we first note that letting ϕ(δ) := h2(δ/(1 + δ)), we have ϕ(δ), h2(δ) → 0 and ϕ′(δ), h′2(δ) → ∞ as δ → 0+, so

δ

1

lim
δ→0+

h2(δ)

=

lim
δ→0+

h′2(δ)

=

0,

ϕ(δ)

ϕ′′(δ)

(1 + δ − 2δ ln δ)/(δ(1 + δ)3)

lim
δ→0+

h2(δ)

=

lim
δ→0+

h′2′(δ)

=

lim
δ→0+

1/(δ(1 − δ))

= 1.

(5.14) (5.15)

Since δk → 0+ as k → ∞, the terms arising from the continuity bound hence have a finite limit,

lim
k→∞

−δk − (1 + δk)h2

δk 1 + δk

h2(δk)−1 = −1.

(5.16)

As for the term involving F (ρE|00, ρE|11), let us write α := F (ρE|00, ρE|11)2 and β := ϵ/(1−ϵ) ∈ [0, 1), so the condition (5.5) can be written as α > β. Note that δk ≤ βk, and for sufficiently large k we have βk < 1/2, so h2(δk) ≤ h2(βk) ≤ 2βk log(1/βk). This means that when (5.5)
(i.e. α > β) holds, we have

αk

αk

1

(α/β)k

lim
k→∞

h2 (δk )

≥

lim
k→∞

2kβk

log(1/β)

=

2 log(1/β)

lim
k→∞

k

= ∞,

(5.17)

which implies that the right-hand side of (5.13) limits to ∞ as k → ∞ (since the continuity-bound contributions have a finite limit). Therefore, (5.4) will hold for sufficiently large k.

Remark. In the above analysis, the H(C|EM; D = 1) and H(C|C′; D = 1) terms are dominated
by different contributions in some sense. Specifically, the analysis for the H(C|EM; D = 1)
term mainly focuses on the contributions from the “components” where A0 = B0, while the “components” where A0 ̸= B0 are absorbed into some roughly O(h2(δk)) continuity corrections and shown to be negligible in the large-k limit. In contrast, the H(C|C′; D = 1) term arises
entirely from the contribution of the A0 ̸= B0 case (which is of order h2(δk) as well), because for the A0 = B0 case, we have C = C′ and hence the conditional entropy contribution is zero.
The relative “sizes” of these contributions impose some challenges when deriving converse
counterparts of Theorem 5.1 (see [HT21]). Qualitatively, the goal there would be to obtain
an upper bound in place of the lower bound on the ratio in (5.13). However, the continuity
correction to H(C|EM; D = 1) in the proof approach here is strictly larger than h2(δk), while H(C|C′; D = 1) is equal to h2(δk). This makes it basically impossible to derive a nontrivial upper bound (specifically, a bound with value strictly less than 1) if one merely follows an analogous
approach to the above proof. Hence more detailed analysis of the A0 ≠ B0 contribution to H(C|EM; D = 1) would be needed to derive such a result. (In [HT21], this contribution was
handled by assuming a conjecture that is true for the device-dependent protocols in [BA07], but
has not been proven for DIQKD in general.)

Advantage distillation

85

Given specific values or bounds for F (ρE|00, ρE|11), ϵ, k, one can substitute them into the expressions (5.10)–(5.12) to get an explicit bound on the asymptotic keyrate. Currently, this inequality requires large values of k to certify positive keyrates, and the resulting keyrates are thus extremely small (notice that (5.3) decreases superexponentially with k). However, small block sizes are sufficient for reasonable asymptotic keyrates in the device-dependent case [Ren05], so there may be some po-
ssibility of tightening the bounds in the above proof.
This security proof has a key difference in structure compared to the proof techniques we have discussed in all the previous chapters regarding one-way QKD. Specifically, in this proof we must consider the “security” of both generation measurements x = 0, y = 0, while the proofs for one-way protocols only need to bound the security of Alice’s generation measurement (in terms of the smoothed min-entropy of the bitstring it produces). The issue is that in the latter, we bound the information leakage-
 to Eve simply by the length of the error-correction string. For the repetition-code protocol, however, a large number of bits are publicly communicated, and hence bounding the information leakage via the number of bits yields too crude a bound.
The need to explicitly consider the security of Bob’s measurement in this protocol can also be seen by considering an extreme example where Eve always knows the outcome of Bob’s generation measurement, possibly at the cost of it being poorly correlated to Alice’s measurement. In that case, regardless of how secure the output of Alice’s measurement is, Eve will always know the value of C′, making it impossible to distill key from the (C, C′) pairs. Hence any security proof for this protocol must in-
volve some kind of security argument regarding Bob’s generation measurement, even if only indirectly via measuring its correlations with Alice’s generation measurement.
Theorem 5.1 is similar to the condition obtained in [BA07] for device-dependent QKD, but it is derived here without detailed state characterization. However, it still remains to find bounds on F (ρE|00, ρE|11) without device-dependent assumptions. We approach this task by combining the Fuchs–van de Graaf inequality with the operational interpretation of trace distance:

F (ρE|00, ρE|11) ≥ 1 − d(ρE|00, ρE|11) = 2(1 − Pguess(Aˆ0|E)σ|Ω ),

(5.18)

where Aˆ0 is Alice’s output register and σ|Ω denotes the state conditioned on Alice and Bob measuring in the generation basis and getting the same outcome — explicitly, we can write
σAˆ0E|Ω = a(1/2) |a⟩⟨a| ⊗ ρE|aa. A DI method to bound such conditional (or “postselected”) guessing probabilities based on the distribution PAˆBˆ|XY was described in [TTB+16], again using the NPA hierarchy [NPA08]. We could hence apply this method to find whether Eq. (5.5) holds
for various distributions.

5.2.2 2-input 2-output scenarios
However, Eq. (5.18) is generally not an optimal bound. We observe that if ρE|00 and ρE|11 were both assumed to be pure, then the other side of the Fuchs–van de Graaf inequality would be saturated, i.e. we would have

F (ρE|00, ρE|11)2 = 1 − d(ρE|00, ρE|11)2.

(5.19)

While it seems difficult to justify such an assumption in general, we show that for 2-input 2-output protocols, one can almost replace Eq. (5.18) with Eq. (5.19) after taking a particular concave envelope. Importantly, note that in this chapter, when we say that a protocol is 2-input 2-output, this includes the generation rounds, unlike the case in Sec. 3.3.

Theorem 5.2. Consider a DIQKD protocol as described above, with X = Y = 2 and all measurements having binary outcomes. Denoting the set of quantum distributions with P[00|00] = P[11|00] as S, let f be a concave function on S such that for any ⃗ν ∈ S, all states and measurements compatible with ⃗ν satisfy f (⃗ν) ≥ (1 − ϵ)d(ρE|00, ρE|11)2. Let PAˆBˆ|XY be the

Advantage distillation

86

distribution accepted in parameter estimation. Then a sufficient condition for Eq. (5.4) to hold for large k is

1 − f (PAˆBˆ|XY ) >

ϵ .

1−ϵ

1−ϵ

(5.20)

Proof. We use the qubit reduction mentioned before, although in greater detail (see [PAB+09, TLR20]): without loss of generality,5 we can assume Eve’s strategy in each round consists of
generating a random variable Λ and storing it in a classical register, then implementing some
corresponding “qubit strategy”, which is a strategy such that ρABE|λ is a 2 × 2 × 4 pure state and all of Alice and Bob’s measurements are rank-1 projective measurements. For a qubit strategy,
Eve’s state conditioned on the joint outcome of both measurements is pure. Hence if Alice and Bob choose measurements xy and store their results in classical registers AˆxBˆy, we can take the resulting single-round state ρAˆxBˆyEΛ after symmetrization to be in the form6

ρAˆxBˆyEΛ =

P[ab|xyλ] P[λ] |a, b⟩⟨a, b| ⊗ ρE|λab ⊗ |λ⟩⟨λ| ,

a,b λ

(5.21)

where all ρE|λab are pure states. Note that the probabilities P[ab|xyλ] satisfy λ P[ab|xyλ] P[λ] = P[ab|xy], and for each λ we have P[00|00λ] = P[11|00λ] := (1 − ϵλ)/2 for some ϵλ ∈ [0, 1], due to the symmetrization step. When Alice and Bob choose inputs x = y = 0 and get the same
outcome (which we shall denote here as γ ∈ {0, 1}), Eve’s conditional states are

ρEΛ|γγ =

P(λ)ρE|λγγ

⊗ |λ⟩⟨λ| ,

where

P(λ)

=

P[γγ|00λ] P[λ]
P[γγ|00]

=

1 − ϵλ P[λ] . 1−ϵ

λ

(5.22)

Note that P is itself a valid probability distribution over Λ, and independent of γ. We now apply the same arguments as in the proof of Theorem 5.1 up until Eq. (5.10),
though in this case Eve’s side-information takes the form EΛ, and so we consider the state ρ˜CEΛ := (1/2)(|0⟩⟨0| ⊗ ρEΛ|mm + |1⟩⟨1| ⊗ ρEΛ|mm). Using the above, one can show that

1

ρ˜CEΛ =

P(λ) 2

|0⟩⟨0| ⊗ ρE|λmm + |1⟩⟨1| ⊗ ρE|λmm

⊗ |λ⟩⟨λ| ,

λ

(5.23)

where P(λ) = j P(λj) and ρE|λγγ = j ρE|λjγjγj . Hence we have

H(C|EΛ)ρ˜ = P(λ)H(C|E; Λ = λ)ρ˜.
λ

(5.24)

Applying the bound from [RFZ10] together with h2((1 − p)/2) ≤ 1 − p2/ ln 4 then yields

H(C|EΛ)ρ˜ ≥

P(λ) 1 − h2

1 − F (ρE|λmm, ρE|λmm) 2

λ

1 ≥
ln 4

P(λ)F (ρE|λmm, ρE|λmm)2.

λ

(5.25)

5Strictly speaking, some care is needed here because our quantity of interest is now fidelity rather than entropy. However, essentially the same reduction carries through, with minor modifications to ensure certain states remain pure; see [TLR20].
6Technically, the notation ρE|λab here corresponds to different states for different input pairs xy, though it is not crucial to keep track of this in the proof, since it only uses the conditional states produced by the key-generating measurements.

Advantage distillation

87

Using the IID structure,

P(λ)F (ρE|λmm, ρE|λmm)2 =

k

2

P(λj )F ρE|λj00, ρE|λj11

λ

λ j=1

k

=

P(λ)F ρE|λ00, ρE|λ11 2 .

λ

(5.26)

Since the states ρE|λ00, ρE|λ11 are pure, they satisfy F (ρE|00, ρE|11)2 = 1 − d(ρE|00, ρE|11)2, and thus

P(λ)F ρE|λ00, ρE|λ11 2 = 1 −

1 − ϵλ P[λ] d 1−ϵ

ρE|λ00, ρE|λ11

2

λ

λ

1

≥1− 1−ϵ

P[λ] f (PAˆBˆ|XY λ).

λ

(5.27)

Finally, this is lower-bounded by 1 − f (PAˆBˆ|XY )/(1 − ϵ) since f is concave, so



H(C|EΛM; D = 1)

1

H(C|C′; D = 1) ≥  ln 4

1 − f (PAˆBˆ|XY ) 1−ϵ

k
− δk − (1 + δk)h2

δk 1 + δk

  h2(δk)−1.

(5.28)

The behaviour of this expression in the large-k limit is given by the same analysis as the last part of the proof of Theorem 5.1, choosing α = 1 − f (PAˆBˆ|XY )/(1 − ϵ) in this case. We conclude that when Eq. (5.20) holds, the right-hand side of Eq. (5.28) limits to ∞ as k → ∞. Therefore, Eq. (5.4) will hold for sufficiently large k.

Similar to Theorem 5.1, values can be substituted into Eq. (5.28) to obtain explicit bounds on the keyrate. If f is the optimal concave upper bound on (1 − ϵ)d(ρE|00, ρE|11)2, in the sense that there always exists a mixture of qubit strategies such that λ P[λ] (1 − ϵλ)d ρE|λ00, ρE|λ11 2 = f (PAˆBˆ|XY ), then the above analysis is essentially tight for large k. This is because in Eq. (5.25), the first inequality [RFZ10] is in fact saturated because ρE|λmm, ρE|λmm are pure, and the second inequality-
 is approximately saturated at large k because h2((1 − p)/2) = 1 − p2/ ln 4 − O(p4).
Currently, we do not have a method for finding an optimal concave bound on the quantity (1 − ϵ)d(ρE|00, ρE|11)2 in Theorem 5.2. However, we find a condition that is more restrictive than
Eq. (5.20) but more tractable to verify:

Corollary 5.1. Consider a DIQKD protocol as described above, with X = Y = 2 and all measurements having binary outcomes. Then a sufficient condition for Eq. (5.4) to hold for large k is for all states accepted in parameter estimation to satisfy

ϵ

1

−

d(ρE|00, ρE|11)

>

1

−

. ϵ

(5.29)

Proof. Let f˜ be the optimal upper bound on (1 − ϵ)d(ρE|00, ρE|11), defined on the set of quantum distributions such that P[00|00] = P[11|00]. Since d(ρE|00, ρE|11) ≤ 1, we have7

f˜(PAˆBˆ|XY ) ≥ (1 − ϵ)d(ρE|00, ρE|11) ≥ (1 − ϵ)d(ρE|00, ρE|11)2.

(5.30)

Also, f˜ must be concave, for essentially the same reason that optimal guessing-probability bounds must be concave, though modified to account for the “postselection” on the outcomes being

7This is the main step in this argument which is not tight. It introduces a (multiplicative) gap on the order of d(ρE|00, ρE|11).

Advantage distillation

88

00 or 11. More specifically, denote the set of quantum distributions with P[00|00] = P[11|00] as S. Consider any probability distribution P[λ] and any family of distributions PAˆBˆ|XY λ ∈ S indexed by λ, and take an arbitrary δ > 0. For each λ, there exists a strategy for Eve that achieves the distribution PAˆBˆ|XY λ and has (1 − ϵλ)d ρE|λ00, ρE|λ11 ≥ f˜(PAˆBˆ|XY λ) − δ, because f˜ is an optimal bound (i.e. there exist strategies arbitrarily close to saturating the bound). If Eve generates and sto-
res a classical random variable Λ according to the distribution P[λ], then implements the corresponding strategy, the resulting states take the same form as in (5.21)–(5.22). This is a strategy that achieves probabilities P[ab|xy] = λ P[λ] P[ab|xyλ], and therefore
f˜(PAˆBˆ|XY ) ≥ (1 − ϵ)d(ρE|00, ρE|11)

= (1 − ϵ)d

P(λ)ρE|λ00 ⊗ |λ⟩⟨λ| , P(λ)ρE|λ11 ⊗ |λ⟩⟨λ|

λ

λ

= (1 − ϵ) P(λ)d ρE|λ00, ρE|λ11
λ

= P[λ] (1 − ϵλ)d ρE|λ00, ρE|λ11
λ

≥

P[λ] f˜(PAˆBˆ|XY λ) − δ.

λ

(5.31)

Since δ was arbitrary, we conclude that f˜(PAˆBˆ|XY ) ≥ λ P[λ] f˜(PAˆBˆ|XY λ), i.e. f˜ is concave on S. Hence choosing f = f˜ satisfies the conditions of Theorem 5.2. Since f˜ is an upper bound on
(1 − ϵ)d(ρE|00, ρE|11), we conclude that when Eq. (5.29) holds, we have

1−

f˜(PAˆBˆ|XY ) 1−ϵ

≥

1 − d(ρE|00, ρE|11)

>

ϵ ,
1−ϵ

(5.32)

and the claim follows by Theorem 5.2.

As before, we can bound d(ρE|00, ρE|11) by using the NPA hierarchy. Effectively, Corollary 5.1 improves over the combination of Theorem 5.1 and Eq. (5.18) by replacing 1 − d(ρE|00, ρE|11) 2
with 1 − d(ρE|00, ρE|11).

5.3 Resulting noise thresholds
Using the above approaches, we study the noise tolerance of various DIQKD scenarios. More precisely, we consider a number of different choices of noiseless distribution P⋆[ab|xy], and apply the noise models of depolarizing noise and limited detection efficiency. In this section it will again be convenient for us to describe the measurements using hermitian observables A0, A1, ..., AX −1 and B0, B1, ..., BY−1 with eigenvalues {−1, +1}.
In Table 5.1, we present a selection of our results (see [TLR20] for the full list). From the table, we see that with appropriate choices of the noiseless distribution, the repetition-code protocol can tolerate depolarizing noise of qt ≈ 9.1% or detection efficiencies of ηt ≈ 89.1%. The depolarizing-noise threshold indeed outperforms the basic one-way protocol of [PAB+09], which can tolerate qt ≈ 7.1%. The detection-efficiency threshold is better than some early approaches for the [PAB+09] protoco-
l which yielded thresholds of ηt ≈ 90.7%; however, it is worse than the optimized threshold of ηt ≈ 88.4% for that protocol restricted to binary outputs, or ηt ≈ 86.5% if Bob’s ⊥ output is preserved (see Appendix F).
As for the various improved one-way protocols we listed in Sec. 3.3.4, we see that the depolarizing-noise thresholds here at least outperform the approaches based on noisy preprocessing or random key measurements alone, though it is narrowly worse than the threshold of qt ≈ 9.33%

Advantage distillation

89

Table 5.1: Noise thresholds for the repetition-code protocol, for various choices of noiseless distribution P⋆[ab|xy]. The value qt is the maximum depolarizing noise such that we can show positive keyrate is achievable using Theorem 5.1 (for rows (i)–(iii)) or Corollary 5.1 (for rows
(iv)–(vi)). Analogously, ηt is the minimum efficiency which can be tolerated when we instead consider a limited-detection-effic√iency model. Unless otherwise specified, the state used for P⋆[ab|xy] is |Φ+⟩ = (|00⟩ + |11⟩)/ 2.

Description of P⋆[ab|xy]

State and measurements for P⋆[ab|xy]

qt

ηt

(i) Achieves maximal CHSH value with the measurements
A0, A1, B1, B2.
(ii) Modification of a distribution exhibiting the
Hardy paradox [Har93, RLS12] for improved robustness against limited detection efficiency.
(iii) Includes the Mayers-Yao self-test [MY98] and the CHSH measurements.

A0 = B√0 = Z, A1 = X, √ B1 = (X + Z)/ 2, B2 = (X − Z)/ 2.

√

√

|ψ⟩ = √κ(|01⟩ + |10⟩) + 1 − 2κ |11⟩ with

κ = (3 − 5)/2; the 0 outcomes correspond to

√ projector√s onto

√

|a0⟩ = |b0⟩ ∝ 1 + 2κ − 1 − 2κ |0⟩ + 2 κ |1⟩,

|a1⟩ = |b1⟩ ≈ 0.37972 |0⟩ + 0.92510 |1⟩,

|a2⟩ = |b2⟩ ≈ 0.90821 |0⟩ + 0.41851 |1⟩.

√ A0 = B0 = Z, A1 = B1 = (X + Z)/√2, A2 = B2 = X, A3 = B3 = (X − Z)/ 2.

6.0% 93.7% 3.2% 92.0% 6.8% 92.7%

(iv) Achieves maximal CHSH value with the measurements
A0, A1, B0, B1.
(v) Similar to (iv), but with measurements optimised for
robustness against depolarizing noise.

A0 =√Z, A1 = X,

√

B0 = (X + Z)/ 2, B1 = (X − Z)/ 2.

Measurements are in the x-z plane at angles
θA0 = 0.4187, θA1 = 1.7900, θB0 = 0.8636, θB1 = 2.6340.

7.7% 91.7% 9.1% 90.0%

(vi) Similar to (iv), but with states and measurements
maximising CHSH violation for each value of detection
efficiency η [Ebe93].

|ψ⟩ = cos Ω |00⟩ + sin Ω |11⟩ with Ω = 0.6224; the 0 outcomes correspond to projectors onto states of
the form cos(θ/2) |0⟩ + sin(θ/2) |1⟩ with θA0 = −θB0 = −0.35923, θA1 = −θB1 = 1.1538.

7.3%

89.1%

obtained by combining both approaches. Still, given that we have used the inequalities (5.18) or (5.30) to obtain the results here, it seems likely that these thresholds for advantage distillation are not tight, and hence there is still room for further improvement. We discuss this in Chapter 6.
Note the [PAB+09] protocol (and some of its improved versions, e.g. with noisy preprocessing or modified CHSH inequalities) uses the same P⋆[ab|xy] as row (i) in Table 5.1, up to relabelling of the inputs. This is not a 2-input 2-output scenario, and so the noise thresholds we can prove for that specific setup are somewhat worse. However, row (iv) is in fact the same scenario with one measurement omitted, making it a 2-input 2-output scenario, thus we could use Corollary 5.1 to show that advantage-
 distillation in this scenario can surpass the thresholds in [PAB+09]. Hence we have shown that for the scenario in [PAB+09], advantage distillation achieves a higher noise tolerance even while ignoring one measurement. This is particularly surprising since the key-generating measurements in row (iv) are not perfectly correlated. In fact, if the proof in [PAB+09] were applied to this scenario (by replacing the error-correction term H(Aˆ0|Bˆ0) = h2(q) with H(Aˆ0|Bˆ0) = h2(ϵ)), it would only tolerat-
e noise up to qt ≈ 3.1%. If we instead allow optimisation of the states and measurements for noise robustness, then the

Advantage distillation

90

relevant rows are (v) and (vi), where the noise thresholds we find for advantage distillation also outperform one-way error correction.
In Table 5.1, the thresholds for scenarios with more than 2 inputs are generally worse, because for such scenarios we cannot apply Corollary 5.1. The best results we have for such cases are listed in rows (ii) and (iii). It would be of interest to find a way to overcome this issue, perhaps by finding more direct bounds on F (ρE|00, ρE|11), or further study of when the analysis can be reduced to states satisfying Eq. (5.19). We observe that pure states are not the only states satisfying the equatio-
n — for instance, if ρE|00 and ρE|11 are qubit states, the equality holds if and only if they have the same eigenvalues (see [TLR20]).
We remark that an open question in quantum information theory is whether there exist entangled states that cannot be used for QKD [GW00, KL17]. There is a simple analogue to this in the context of DIQKD, namely whether there exist correlations which violate Bell inequalities but cannot be distilled into a secret key in a DI setting. This has recently been answered with an explicit example in [FBJL+21], but the depolarizing-noise threshold derived in that work (at which DIQKD is impossible) still d-
oes not match what we have obtained here. In this vein, we also construct a potential attack on this protocol for q ≳ 12.8% if parameter estimation is based only on ϵ and the CHSH value; see [TLR20]. It would be of interest to see whether further improvements in the noise threshold for advantage distillation could help to close the gaps between these results.

Chapter 6
Conclusion and future directions
With the techniques presented in this work [TSG+21, HST+20, SBV+21, SGP+21, TSB+20, TLR20], as well as concurrent independent results [BFF21a, WAP21], we see that substantial progress has been made in improving the keyrates and noise tolerance of DIQKD. In particular, noisy preprocessing and random key measurements have made it possible in principle to achieve positive asymptotic keyrates in various experimental implementations. However, our finite-size analysis shows that for the NV-centre experi-
ment in [HBD+15] and the cold-atom experiment in [RBG+17], impractically large sample sizes (for those implementations) would still be needed in order to achieve a positive finite-size keyrate, even if one makes the optimistic assumption of collective attacks. A significant question that remains to be addressed is that of photonic experiments [SMSC+15, GVW+15], which achieve lower CHSH values but much larger sample sizes.
Unfortunately, for photonic experiments the heuristic results suggest that the random-keymeasurement approach is less useful in improving the keyrate. (A possible cause of the issue may be the fact that the experimental parameters achieving maximal CHSH value also seem to cause at least one of the error-correction terms H(Aˆ0|Bˆ0)hon, H(Aˆ1|Bˆ1)hon to be quite large, which decreases the keyrate.) Despite this challenge, we note that there is much freedom in parameter optimization for photonic expe-
riments [MSS20], and given the techniques we developed here, it is also possible to analyze variants such as choosing different amounts of noisy preprocessing for the two key-generating measurements. It hence seems promising to continue investigating photonic implementations as a prospective candidate for a DIQKD demonstration. (After preparation of this thesis, the approaches in [BFF21b, MPW21] were developed, and they also studied the possibility of photonic implementations. They indeed found pr-
omising results, as we shall briefly discuss below. See also the DIQKD experiments in [NDN+21, ZLR+21, LZZ+21].)
Apart from the question of improving parameters for experimental implementations, the various topics we have presented also raise some further questions to consider. We now list a few such possibilities.
Entropy bounds
Recently, new approaches were developed in [BFF21b, MPW21] for computing lower bounds on the optimization (3.1) (the former for general nonlocality scenarios, the latter for 2-input 2-output scenarios). These approaches are both computationally efficient and arbitrarily tight, improving over the results presented in this thesis. They applied their methods to a simplified model of photonic Bell experiments, and found that DIQKD would be asymptotically possible with existing detection efficiencies. -
A critical question now would be to apply their methods to more detailed models, and find whether the same conclusion holds.
Another natural consideration would be computing analogous entropy bounds for the purposes of DIRNG/DIRE, to further improve the keyrates in the existing demonstrations. While some

Conclusion and future directions

92

results were obtained in [TSG+21, BFF21a, BFF21b], they have yet to incorporate some subsequent ideas such as the possibility of using random key measurements in DIRNG/DIRE. As mentioned in earlier chapters, preliminary exploration of this idea was performed in [BRC21], but there are various details that remain to be finalized.
A somewhat separate point is the question of semi -device-independent protocols. This refers to protocols which drop some of the assumptions on the devices in QKD or QRNG, but not as many as in fully DI protocols. For instance, one could assume that only one party’s devices are performing uncharacterized measurements [BCW+12, TFK+13]. To some extent, this can be incorporated in the noncommutative-polynomial-based approaches we have mentioned, because the constraint that some measurements are trust-
ed can be captured (possibly partially) by imposing algebraic relations on the measurement operators. In fact, in [TSG+21] we used this to compute keyrate bounds for a semi-DI version of the six-state QKD protocol. Other possibilities include imposing dimension bounds on the system, or more “physical” constraints such as energy bounds [VHWC+17]. Exploring semi-DI protocols1 allows for making a tradeoff between the assumptions on the devices and the achievable keyrates, and it would be useful to fi-
nd a good balance between these considerations.
Finite-size analysis
Given the findings of [BFF21b, MPW21] regarding the asymptotic keyrates in potential photonic DIQKD implementations, it would also be important to perform a finite-size analysis to see if an implementation would be possible with realistic sample sizes. Note that their findings indicate that the optimal Bell parameter to consider in these implementations is not necessarily the CHSH value. While the finite-size analysis in Chapter 4 is for a protocol based on the CHSH game, it is not difficult to ge-
neralize it to other nonlocality scenarios, so this should not be a significant obstacle (essentially, it would just correspond to having a different bound rp).
On a more theoretical level, as discussed in Sec. 4.5.3, it is perhaps somewhat curious that in the current EAT-based security proofs, the test/generation decision is performed in an IID manner rather than picking a subset of fixed size as the test rounds. We found some indications that this leads to worse finite-size performance, due to the higher variances. It may hence be useful to consider whether the EAT can be applied in a different fashion to analyze a fixed number of test rounds, or whethe-
r new theoretical tools are needed. Another relevant question would be whether there is still any room for improvement in the finite-size bounds given by the EAT. As can be seen from Figs. 4.1 and 4.2, while they are fairly close to those given by the AEP, there is still something of a gap, which raises the question of whether the gap could be narrowed further or whether it is inherent in the non-IID situation.
Advantage distillation
The approaches we used to compute the noise thresholds for the repetition-code protocol were not particularly tight, since they were based on the inequalities (5.18) or (5.30). Recently, a follow-up work [HT21] developed an algorithm to compute arbitrarily tight bounds on the fidelity
1Another paradigm that is somewhat related but takes an “opposite” perspective would be measurementdevice-independent (MDI) protocols, in which Alice and Bob can generate trusted states, but measurements are performed by an untrusted third party. The security of such protocols in the basic case can be argued by a form of “entanglement swapping” analysis — the third party’s measurement can be viewed as generating entanglement between Alice and Bob. This does perhaps raise a question of whether MDI -
setups could potentially be “promoted” to fully DI versions, with the honest parties’ preparation choices essentially corresponding to their input choices. However, to do so, one would need to take care in ensuring that the prepared states do not have “side-channel” information leakage regarding the preparation/input choices — very informally, it seems such conditions on the preparations are a counterpart to the conditions on the measurements in standard DIQKD. Should this idea seem promising, a m-
ore rigorous analysis of these conditions would be necessary.

Conclusion and future directions

93

in Theorem 5.1, hence providing a method to certify that condition arbitrarily well. The key insight is that given any pair of states, there always exists a measurement which preserves the fidelity between the states, which can be used to reduce the analysis to classical side-information for Eve. Still, even with this reduction, additional techniques were needed (based on an algorithm developed in [VHWC+17], that again achieves a relaxation to the NPA hierarchy) to handle the fact that the dimensi-
on of Eve’s side-information is a priori unbounded.
Surprisingly, however, the noise threshold obtained by applying that approach (together with Theorem 5.1) to the [PAB+09] scenario narrowly failed to outperform the noise threshold for the one-way protocol of [PAB+09] itself. (This does not contradict our findings in Chapter 5, since the improved thresholds we found there were instead based on the more specialized Corollary 5.1.) Since that method is supposed to give arbitrarily tight bounds on the fidelity, this gives strong evidence that Theorem-
 5.1 may in fact not be a very tight condition, in stark contrast to the situation in device-dependent QKD where it is both necessary and sufficient (for security of the repetition-code protocol).2 It is hence now important to consider how to improve on Theorem 5.1 itself.
Furthermore, the repetition-code protocol is not the only advantage distillation protocol — there are various other possibilities [Myh11, KL17] that may be worth studying for DIQKD, even if only to verify whether the repetition-code protocol still seems to yield the best noise thresholds. Also, one could consider combining advantage distillation with the other techniques such as noisy preprocessing and random key measurements (the former was indeed considered for device-dependent QKD; see e.g. [Re-
n05]). However, given the comparative lack of structure in the DI setting, these currently seem to be fairly challenging tasks.
Another significant goal (which is also related to the earlier topic of finite-size analysis) would be finding a security proof that applies for advantage distillation without the assumption of collective attacks. Existing techniques [VV14, PM13, NSBS+18, JMS20, Vid17, AFRV19, ZKB18, ZFK20] for proving security against coherent attacks have focused on bounding the smoothed min-entropy of the device outputs, which is certainly sensible for one-way protocols where this is the central quantity of int-
erest. However, when advantage distillation is used, one would instead have to consider various other “intermediate” registers, such as the bit C generated in each block of the repetition-code protocol, which is a rather different object from the device outputs. A bound on the smoothed min-entropy of the device outputs does not seem to give us much useful information about these other registers, and hence different proof techniques would be necessary. Somewhat speculatively, appropriate de Finetti-
 theorems [AFR15, JT21] could be a possible approach, though there remain many details to be resolved in applying them for DIQKD.

2There is a subtlety here, in that for device-dependent QKD, that condition could also be rewritten in alternative forms that are equivalent in that setting but not in DIQKD; see [HT21] for details.

Appendix A
Reduction to projective measurements
It is a well-known fact that any POVM measurement can be dilated to a projective measurement by a suitable embedding. However, there are some subtleties regarding this point. For instance, some versions of this statement only ensure that the dilated projective measurement produces the same output probabilities as the original POVM, without considering the postmeasurement quantum states. This can be relevant in some cryptographic contexts, where the state after the measurement may be important (thi-
s is in some sense related to the question of memory effects in the system). Another issue that in nonlocality scenarios, each party has multiple measurements, which raises the question of whether they can all be jointly dilated to projective measurements.1 Due to these points, there are in fact situations where it is not valid to assume that all measurements are projective — for instance, it was found in [BMK+13] that when considering sequential measurements on a quantum system, there are some co-
rrelations that cannot be achieved using only projective measurements (without additional operations between the measurements).
In this appendix, we discuss a reduction to projective measurements that is relevant for device-independent cryptography. The existence of counterexamples such as that in [BMK+13] indicate that there cannot be a “fully general argument” that achieves a reduction to projective measurements in all possible scenarios, hence we shall need to be fairly careful and restrict ourselves to more specialized statements. Fortunately, these are sufficient to cover some number of DI protocols. (In fact, the ana-
lysis for DIQKD turns out to be rather simple, but we shall also present an analysis that works for some other protocols. Also, it is worth first discussing the general formalism for quantum measurements.)
Remark. Some recent works [BBS20, CHLM21] also investigated specialized reductions to projectors (in the contexts of sequential measurements and self-testing respectively), and their results may serve as alternate perspectives to some of the approaches discussed below. We refer the interested reader to those works for more details.
A.1 General form of a measurement
We first consider the question of finding a suitable expression that captures the most general form that a measurement could take within a quantum framework (the result we shall prove below, Fact A.1, is sometimes referred to as the quantum instrument description of measurements).
1If one is only interested in the question of whether some nonlocal distribution P[ab|xy] can be achieved by quantum systems, it is “well-known” that such a reduction to projective measurements indeed exists [HP16], even in the scenario where Alice and Bob’s measurements are only required to commute [HP16, PT15]. However, in a cryptographic context there are other considerations such as the post-measurement states, hence the argument for that situation may not immediately carry over.

Reduction to projective measurements

95

Of course, the exact set of postulates in such a framework is not universally agreed upon. Our goal here is to start from any fairly “minimal” framework, in which the structure of post-measurement states is not explicitly specified beforehand, and argue that we can validly restrict our attention to post-measurement states of a specific form. (At the end of this section, we briefly discuss some other perspectives.) Basically, we can work with any framework where states are described by normalized P-
SD operators on Hilbert spaces, and dynamics are described by CPTP maps (which can be motivated by standard “physical” arguments without involving any statement of the structure of post-measurement states). We shall also need some notion of cq systems that is consistent with expressions such as (A.1) below.
To begin, suppose that one measures a state ρ, and records the outcome a in a separate classical register. Let us assume the set of possible outcomes is finite. Then most generally, we could say that conditioned on outcome a being obtained, the (normalized) quantum state after the measurement is of the form fˆa[ρ], for some functions fˆa. (We shall call these the postmeasurement states; however, it should be understood that the idea here is to not strictly restrict the description to the states “i-
mmediately” after the measurement — we can also incorporate any further operations that are performed, up until the next “significant operation” that we want to consider, informally speaking.) We stress that a priori, we make no assumptions about the nature of the functions fˆa, apart from requiring them to produce normalized states for any ρ — we do not even restrict them to be linear. Still, we shall at least take all the post-measurement states to be on a common Hilbert space, e.g. by embedding-
 all of them in a larger space.2 This process of measuring the state and recording the result can then be written as a function of the form

M[ρ] = Pρ[a] |a⟩⟨a| ⊗ fˆa[ρ] = |a⟩⟨a| ⊗ fa[ρ],

a

a

(A.1)

where we have explicitly denoted the ρ dependence in the outcome probabilities Pρ[a], and fa[ρ] := Pρ[a] fˆa[ρ] (this implies that Pρ[a] = Tr[fa[ρ]] holds by construction; basically fa[ρ] is the subnormalized post-measurement state conditioned on outcome a). Thus far, we have imposed very few conditions on these functions. However, if we now impose the requirement that M is a legitimate quantum channel (i.e. a CPTP map), it can be proven that these functions must have a very specific form:

Fact A.1. For any CPTP map M of the form (A.1), the functions fa must be of the form

fa[ρ] = TrR KaρKa† ,

(A.2)

for some ancillary register R and operators Ka satisfying a Ka†Ka = I.
Proof. The proof is based on two observations. First, regardless of the nature of the functions fa, a state of the form (A.1) is always invariant under the application of a pinching channel P[σ] :=
a |a⟩⟨a| σ |a⟩⟨a| (in the “classical basis”) to the first system, i.e. we have (P ⊗ I)[M[ρ]] = M[ρ]. Second, given that M is a CPTP map, it has a Kraus representation, M[ρ] = r KrρKr† for

2This is just a technicality to ensure that (A.1) is a state on a tensor product of two Hilbert spaces, which is
required to some extent when considering the map P ⊗ I in our subsequent proof of Fact A.1. Pedantically, this requirement may be nontrivial if e.g. for every ρ, fˆa[ρ] is a state on a different Hilbert space (since this might result in an uncountable family of Hilbert spaces to consider). One way to handle this would be to lean on the
assumption in this work that all the Hilbert spaces are finite-dimensional, in which case we can just embed all of them in the sequence space ℓ2. Alternatively, the requirement of a common Hilbert space can be treated as an
additional, hopefully minor, assumption.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:30.238Z
- **Text Length:** 336886 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
