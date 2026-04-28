# PDF Document: Harty et al. - 2016 - High-Fidelity Trapped-Ion Quantum Logic Using Near.pdf

**File Path:** Harty et al. - 2016 - High-Fidelity Trapped-Ion Quantum Logic Using Near.pdf

**Processed Date:** 2026-02-10T18:17:29.191Z

**File Size:** 309.09 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 592

**Title:** (MW gate theory - 2016 Oxford) High-Fidelity Trapped-Ion Quantum Logic Using Near-Field Microwaves

**Collection:** Ion Trap > Laser free gate

---

## Extracted Text Content

PRL 117, 140501 (2016)

PHYSICAL REVIEW LETTERS

week ending 30 SEPTEMBER 2016

High-Fidelity Trapped-Ion Quantum Logic Using Near-Field Microwaves

T. P. Harty, M. A. Sepiol, D. T. C. Allcock,† C. J. Ballance, J. E. Tarlton, and D. M. Lucas*
Department of Physics, University of Oxford, Clarendon Laboratory, Parks Road, Oxford OX1 3PU, United Kingdom (Received 27 June 2016; published 27 September 2016)

We demonstrate a two-qubit logic gate driven by near-field microwaves in a room-temperature

microfabricated surface ion trap. We introduce a dynamically decoupled gate method, which stabilizes the

qubits against fluctuating energy shifts and avoids the need to null the microwave field. We use the gate to

produce a Bell state with fidelity 99.7(1)%, after accounting for state preparation and measurement errors.

The

gate

is

applied

directly

to

43 Caþ

hyperfine

“atomic

clock”

qubits

(coherence

time

T

Ã 2

≈

50

s)

using

the

oscillating magnetic field gradient produced by an integrated microwave electrode.

DOI: 10.1103/PhysRevLett.117.140501

Laser-cooled trapped atomic ions are a promising platform for the development of a general-purpose quantum computer [1]. In common with other technologies, the present challenge is performing all elementary logic operations with the fidelity necessary for quantum error correction while using techniques which can be scaled to the number of qubits required to perform a useful computation. Trapped-ion qubits are based on either optical [2] or hyperfine [3] atomic transitions. Hyperfine qubits lie in -
the convenient microwave domain and have exhibited minutelong memory coherence times [4,5]. Nevertheless, they are usually manipulated via optical (Raman) transitions—first because of the convenience of addressing individual ions with tightly focused laser beams [6], and second because the short optical wavelength allows efficient multiqubit logic gates based on coupling the ions’ spin and motional degrees of freedom [7].
Microwave methods have been proposed [8–10], and recently demonstrated, both for individual qubit addressing [11–13] and for multiqubit logic gates [14–16]. This offers the prospect of performing all coherent operations using purely electronic methods, making phase control significantly easier, and replacing lasers with cheaper, smaller, more stable microwave devices. Microwave elements can also be integrated into trapping structures more easily than their optical counterparts for improved scalabi-
lity [17]. Furthermore, microwave gates can theoretically attain higher fidelities as they are not fundamentally limited by photon scattering [18]. Two distinct microwave methods are being pursued: using far-field microwaves in combination with a local static magnetic-field gradient, and using a local near-field microwave magnetic-field gradient. Microwavedriven two-qubit gates have previously been reported in a single experiment using the near-field method (with 76% fidelity [14]), and in two exp-
eriments using the far-field method (with 70% fidelity in a three-ion chain and, very recently, 98.5% for a pair of ions [15,16]). Beyond quantum information processing, microwave quantum logic techniques are also applicable to metrology and high-resolution

spectroscopy, for example, for the study of systems without accessible optical transitions [7,19].
In this Letter, we report a near-field microwave two-qubit gate with fidelity exceeding the ≈99% minimum threshold for physical operations, which is necessary for faulttolerant quantum computing [20–22]. The gate fidelity is comparable to the best-reported values achieved with lasers, or in other qubit technologies [23–27]. We estimate the main sources of error in the gate and set a limit on the errors induced by the gate fields on an “idle” memory qubit. The two-qubit gate operation is implemente-
d with the same qubit states, and in the same device, which we have previously used in demonstrating high-fidelity (> 99.9%) single-qubit state preparation, gates, memory, and readout [5]. The trap is a lithographically defined two-dimensional surface-electrode design, incorporating integrated microwave waveguides and resonators, and it operates at room temperature [17]. Surface traps are especially promising for scaling up to large numbers of trap zones, as proposed for a “quantum CCD” architectu-
re [7,28].
This work was performed using the 43Caþ intermediatefield atomic clock qubit described in Ref. [5]. The qubit is formed from a pair of hyperfine states in the ground level, separated by a 3.20-GHz transition (Fig. 1), whose frequency is first-order independent of magnetic field at a static field of 14.6 mT. Details of the laser cooling, initialization, and measurement of this qubit may be found in Refs. [5,29].
The two-qubit gate implemented in this work is an extension of the ideas of Mølmer and Sørensen (MS), Ospelkaus et al., and Bermudez et al. [9,30,31]; it is a gate driven by a microwave near-field gradient, which is robust to what would otherwise be the largest source of experimental error in our system, viz. fluctuating a.c. Zeeman shifts arising from the microwave fields. A standard MS gate is implemented with a bichromatic field with frequencies near the first red and blue sideband transitions -
for one of the ions’ normal modes of motion, resulting in dynamics described by the Hamiltonian

0031-9007=16=117(14)=140501(6)

140501-1

© 2016 American Physical Society

PRL 117, 140501 (2016)

PHYSICAL REVIEW LETTERS

week ending 30 SEPTEMBER 2016

significant sources of error. Henceforth, we assume that
the bulk of the a.c. Zeeman shift has been compensated for, and we use Δ0 to represent the residual fluctuations
(which we take to be slowly varying compared with the gate’s duration).
If HMS acted in the σz basis, it would commute with HZ, and this error could be suppressed by performing the gate inside a spin-echo sequence [34]. However, σz gates are not straightforward to implement with microwaves [9]. Instead,
we take advantage of the fact that HMS does commute with a carrier drive of the qubit transition, provided that the
carrier phase is chosen to produce rotations about the same
axis of the Bloch sphere as HMS. The corresponding Hamiltonian is

FIG. 1. Part of the ground-level hyperfine structure of 43Caþ at 14.6 mT, showing the clock-qubit states (j↓i, j↑i), and other
states (grey) connected to them by spectator transitions. The blue and red sideband fields (BSB, RSB) have frequencies ðω0 þ ΔÞÆ ðωr þ δÞ, where ω0 is the unperturbed qubit frequency, ωr the motional mode frequency, δ the gate detuning, and Δ ¼ Δ↑ − Δ↓
the differential a.c. Zeeman shift produced by the (strong)
sidebands. The (weak) carrier used for dynamical decoupling is resonant with the shifted qubit transition at ðω0 þ ΔÞ. Dashed lines indicate unshifted qubit states.

HMS

¼

1 2

ℏΩSðaeiδt

þ

a†e−iδtÞ:

ð1Þ

Here, Ω and δ are the gate Rabi frequency and detuning, respectively (see Fig. 1), and S ¼ σx;1 Æ σx;2 is the collective spin operator, where σx;i is the Pauli operator acting on ion i and the sign is positive (negative) if the ions’ normal motions are in phase (antiphase).
The ions’ motion is driven by the spatial gradient of the microwave magnetic field. In general, this gradient will be accompanied by a nonzero field amplitude at the ions’ equilibrium positions. (The field can be made small by nulling with additional microwave electrodes [9], or with specific trap geometries [32], but in practice, it will always
be present at some level.) This unwanted field will drive off-resonant Rabi flopping (spin flips) on any hyperfine transition connecting to the qubit states, but the effect of
this on the operation of the gate can be highly suppressed using pulse-shaping techniques [33]. The field also induces a differential a.c. Zeeman shift Δ on the qubit transition (Fig. 1), described by the Hamiltonian

HZ

¼

1 2

ℏΔðσz;1

þ

σz;2Þ:

ð2Þ

A constant a.c. Zeeman shift may be treated as an effective change in the qubit frequency and compensated for by adjusting the microwave frequencies appropriately. However, any fluctuations in Δ will lead to qubit dephasing and asymmetric sideband detunings, which can be

Hc

¼

1 2

ℏΩcðσx;1

þ

σx;2Þ:

ð3Þ

This carrier drive dynamically decouples the qubit from
HZ, as can be seen by considering the total system Hamiltonian, HT ¼ HMS þ Hc þ HZ, in the interaction picture with respect to Hc:

HI

¼

HMS

þ

1 2

ℏΔ0

X σz;i
i¼1;2

cos Ωct

þ

σy;i

sin Ωct:

ð4Þ

If Ωc ≫ Ω; Δ0 the summed terms in Eq. (4) oscillate rapidly and may be disregarded. The rotating-frame Hamiltonian then reduces to HMS. Furthermore, setting Ωctg ¼ 2mπ for gate time tg and integer m ensures that the rotating frame coincides with the lab frame at tg, so an error-free MS gate is achieved in both frames.
The requirement that Ωctg ¼ 2mπ may be avoided by using a composite gate sequence, with an additional π pulse on each ion midway through the gate to refocus any partially complete carrier Rabi oscillations [35,36] (Fig. 2). For this to work, the gate must be composed of an even number of phase-space loops so that the π pulse is applied while the ions’ spins are disentangled from their motion. In this case, the gate is not sensitive to the exact value of Ωc, provided that the applied pulse area is -
the same for each half. This sequence has the added benefit of being insensitive to transient a.c. Zeeman shifts at the beginning and end of each half. Moreover, if the π-pulse phase is chosen to give a rotation about the y axis, errors due to drifts in the motional mode frequency are also suppressed [37].
The dynamically decoupled MS (DDMS) gate described above is closely related to the “single-sideband” (SSB) gate proposed and demonstrated in Refs. [31,35,36], which uses only one of the red or blue sideband fields in combination with a carrier drive. The SSB gate was originally introduced for use with lasers, where it has the advantage that, unlike the MS gate, it does not require interferometric stability between optical fields. This advantage is inconsequential

140501-2

PRL 117, 140501 (2016)
(a)

PHYSICAL REVIEW LETTERS
(b)

week ending 30 SEPTEMBER 2016

FIG. 2. Experimental demonstration of a four-loop DDMS gate. (a) State populations P as a function of detuning δ, where the dashed line indicates the detuning used in (b). Solid lines show a numerical simulation, starting from a ground-state cooled motional mode. (b) Measurement of the parity (P↑↑ þ P↓↓ − P↑↓ − P↓↑), used to determine the fidelity of the Bell state jΨi ¼ j↑↑i þ ij↓↓i produced by the gate. The data consist of five separate experimental runs, which were interleaved with measurements-
 of the SPAM error and Bell state populations. A maximum-likelihood fit (solid line), assuming binomial statistics [24], gives a parity amplitude of 0.9953(23). The phase offset is determined from an independent calibration and is not floated in the fit. Error bars represent 68% confidence intervals. Weighted residuals ½ðdata − fitÞ=error are plotted. All data have been corrected for SPAM errors (see text).

for microwave gates due to the relative ease of accurately controlling microwave phases.
In their original proposal for the SSB gate, the authors noted that their carrier drive technique could be extended to the standard MS gate [31]. Our work develops this idea, identifying the importance of the relationship between the carrier and sideband phases (which is not significant for the SSB gate) and providing numerical modeling (Supplemental Material Ref. [38]), as well as an experimental demonstration. The principle advantage of the DDMS gate is that, unlike the SSB gate and other “dress-
ed-state” schemes [16,31,39], the carrier drive is merely used to suppress noise, rather than forming a fundamental part of the gate mechanism. As a result, when Δ0 ¼ 0, the DDMS gate exactly reproduces the MS dynamics at all times and for all values of Ωc. This is not true for the SSB gate, which is consequently very susceptible to noise in Ωc (see Supplemental Material Ref. [38]). This is a significant limitation of the SSB gate, potentially requiring the use of second-order driving fields to ac-
hieve high fidelities [36]. Additionally, the DDMS gate requires half the total microwave power to achieve a given gate speed, reducing the power dissipated in the ion trap chip.
For the experimental implementation, we confine a pair of 43Caþ ions 75 μm above the surface-electrode trap described in Ref. [17]. We perform the gate on one of the ions’ radial rocking (out-of-phase) modes, whose secular frequency is 3.255 MHz, chosen because its heating

rate (n_¯ ≲ 5 s−1) is lower than that of the 3.286-MHz centerof-mass mode [60ð15Þ s−1]. We generate the Paul trap radio-frequency drive (38.3 MHz, ≈60 V amplitude) using a home-built high-stability source, which reduces fluctuations in the radial mode frequency to ∼30 Hz rms. We suppress errors due to the residual mode frequency fluctuations by cooling the rocking mode close to its ground state (n¯ ≲ 0.1) with Raman sideband cooling [29]. We similarly cool the spectator rocking mode (at 3.588 MHz)-
, to minimize dephasing due to cross-phase modulation [40,41]. In future experiments, ground-state cooling could be achieved using microwave sideband cooling [14].
We generate microwaves by up-converting rf at ∼300 MHz from a commercial direct digital synthesis (DDS) source [42]. The RSB and BSB are generated and amplified separately, before being combined on a quadrature hybrid. After the hybrid, a custom cavity filter [43] removes noise (which had been observed to excite microwave spectator transitions during the gate) from the signal before it is fed to one of the trap’s microwave electrodes. To minimize the effect of off-resonant spin flips, we turn the -
RSB and BSB on (off) adiabatically with a rise (fall) time of 3 μs. Additionally, we predistort the sideband pulse envelope to compensate for slow (∼ms) power transients during the gate. We use a slow digital feedback loop based on an IC power detector to reduce long-term drifts in the sideband power. Finally, we apply a 200-Hz zero-peak linear ramp to the RSB and BSB DDS

140501-3

PRL 117, 140501 (2016)

PHYSICAL REVIEW LETTERS

week ending 30 SEPTEMBER 2016

frequencies during the gate to compensate for an observed “chirp” in the radial mode frequency (which may originate from thermal transients in the trap caused by the microwaves). Using 2 W in each sideband, we achieve a gate Rabi frequency of Ω=2π ≃ 308 Hz. The resulting differential a.c. Zeeman shift is Δ=2π ¼ 20.78 kHz. For the carrier drive, we apply 3 μW to a second trap electrode, giving Ωc=2π ¼ 3.7 kHz. See Ref. [38] for further details.
The gate sequence is shown in Fig. 2(a). The gate consists of four loops in motional phase space, with a y-axis π pulse (3.2 μs duration) midway through. The total gate time is tg ¼ 3.25 ms. We measure the fidelity of the Bell state produced by the gate using standard tomography [34]. The populations measured directly after the gate give P↓↓ þ P↑↑ ¼ 0.9980ð8Þ. Combining this with the parity measurement shown in Fig. 2(b), we calculate a fidelity of 99.7(1)%. Here, we have corrected for the indepen-
dently measured state-preparation and measurement (SPAM) error of 0.34(3)% per qubit [24].
To estimate the benefit of the DDMS gate over the basic MS scheme, we perform the single-ion Ramsey experiment shown in Fig. 3. Here, the RSB and BSB are set up as for a gate on the two-ion rocking mode, leaving them ≈30 kHz
(a)
(b)

detuned from the nearest single-ion motional mode. As a result, they create an a.c. Zeeman shift without coupling to the ion’s motion. The fluctuations in this a.c. Zeeman shift are determined from the resulting loss of fringe contrast. Without the dynamical decoupling and refocusing pulse, we measure a fringe contrast of 0.924(6). Assuming normally distributed shot-to-shot fluctuations in the a.c. Zeeman shift, this corresponds to Δ0 ¼ 19.7ð8Þ Hz rms, which would give a MS gate error of 5.6(5)% [-
Fig. 3(b)]. With the dynamical decoupling and refocusing pulse, we find no loss of fringe contrast at the level of the measurement’s sensitivity. This experiment also implies that the DDMS gate fields would introduce ≲0.1% error on “idle” memory qubits.
The measured two-qubit gate error is consistent with the ≲0.2% error expected from the rocking-mode heating rate and the ∼0.2% error expected from the ∼30 Hz rms fluctuations in the rocking-mode frequency. We infer from the data in Fig. 3 that errors due to off-resonant excitation and a.c. Zeeman shift contribute ≲0.1% error. Similarly, from the agreement between theory and data in Fig. 2(a), we estimate the error due to systematic miscalibration in the sideband Rabi frequencies or gate time to be-
 ≲0.1%.
In conclusion, we have introduced a dynamically decoupled two-qubit gate scheme for trapped ions, which we have implemented with 99.7(1)% fidelity using nearfield microwave techniques in a room-temperature microfabricated surface trap. The gate was applied to 43Caþ hyperfine qubits, for which state-of-the-art single-qubit performance was previously demonstrated in the same apparatus (Table I). Present limits to the gate speed and fidelity are purely technical and could be improved significantly in-
 future experiments. Heating rates can be decreased using surface cleaning techniques [45,46] or cryogenic operation [47]. The gate speed could be substantially increased, thereby also reducing its sensitivity to heating and motional mode frequency fluctuations, by moving the ion closer to the trap electrodes or increasing the microwave power. Off-resonant excitation and a.c. Zeeman shifts could

FIG. 3. Single-ion Ramsey experiment used to measure a.c.
Zeeman shift fluctuations, with (blue circles) and without (red squares) the carrier drive and refocusing π½y pulse. (a) We scan the Ramsey phase ϕ to obtain a fringe. Lines show maximumlikelihood fits to the data, giving fringe contrasts of 0.998(5) and 0.924(6). (b) We set ϕ to the fringe’s peak and monitor fluctuations in P↑ over time. The average of the blue data points gives P↑ ¼ 0.9994ð4Þ, indicating that the gate fields induce ≲0.1% loss of qubit coherence. The right-hand ordinate gives, f-
or the red points, the simulated MS gate error for a given fringe
contrast, assuming normally distributed shot-to-shot a.c. Zeeman
shift fluctuations. All data have been corrected for SPAM errors.

TABLE I. Summary of errors in elementary qubit operations achieved in the present apparatus for the 43Caþ (j↑i, j↓i) hyperfine “atomic clock” qubit. The readout error could be reduced to the 0.5 × 10−3 level measured in Ref. [5] by using
spatially resolved fluorescence detection [44]. Addressed singlequbit microwave gates with ∼1 × 10−3 error were demonstrated for 25Mgþ hyperfine qubits in a similar surface trap [11].

Operation

Memory

ðtg

¼

3.25

msÞ=ðT

Ã 2

¼

50

sÞ

State preparation

Global single-qubit gate (benchmarked)

Single-shot readout (per qubit)

Two-qubit gate (tomography)

Error ð×10−3Þ
0.07 0.2 0.001 3 3

Reference
[5] [5] [5] This work This work

140501-4

PRL 117, 140501 (2016)

PHYSICAL REVIEW LETTERS

week ending 30 SEPTEMBER 2016

be reduced by nulling the microwave field using multiple electrodes [9,13,48] or improved trap geometries [32]. The dynamical decoupling demonstrated here should prove to be particularly effective when used in combination with these more advanced trap designs, as it significantly reduces the level of field suppression that must be achieved, and for mitigating the effects of cross-talk when scaling up towards the “quantum CCD” architecture. Finally, we note that the DDMS gate may be useful for lase-
r-driven gates on optical or hyperfine qubits, to suppress the effect of a.c. Stark shifts [49].
We thank A. M. Steane, D. N. Stacey, and members of the NIST Ion Storage group (in particular T. R. Tan and D. H. Slichter), for helpful discussions, and A. Bermúdez for comments on the manuscript. T. P. H. thanks St. John’s College, Oxford for support. J. E. T. acknowledges funding from the Centre for Doctoral Training on Controlled Quantum Dynamics at Imperial College London. This work was supported by the U.S. Army Research Office (Ref. No. W911NF-14-1-0217) and the U.K. EPSRC “Networked Quantu-
m Information Technology” Hub.
*d.lucas@physics.ox.ac.uk †Present address: National Institute of Standards and Technology, 325 Broadway, Boulder, CO 80305, USA. [1] C. Monroe and J. Kim, Science 339, 1164 (2013). [2] H. C. Nägerl, Ch. Roos, D. Leibfried, H. Rohde, G. Thalhammer, J. Eschner, F. Schmidt-Kaler, and R. Blatt, Phys. Rev. A 61, 023405 (2000). [3] C. Monroe, D. M. Meekhof, B. E. King, W. M. Itano, and D. J. Wineland, Phys. Rev. Lett. 75, 4714 (1995). [4] J. J. Bollinger, D. J. Heinzen, W. M. Itano, S. L. Gilbert, and -
D. J. Wineland, IEEE Trans. Instrum. Meas. 40, 126 (1991). [5] T. P. Harty, D. T. C. Allcock, C. J. Ballance, L. Guidoni, H. A. Janacek, N. M. Linke, D. N. Stacey, and D. M. Lucas, Phys. Rev. Lett. 113, 220501 (2014). [6] H. C. Nägerl, D. Leibfried, H. Rohde, G. Thalhammer, J. Eschner, F. Schmidt-Kaler, and R. Blatt, Phys. Rev. A 60, 145 (1999). [7] D. J. Wineland, C. Monroe, W. M. Itano, D. Leibfried, B. E. King, and D. M. Meekhof, J. Res. Natl. Inst. Stand. Technol. 103, 259 (1998). [8] F. Minte-
rt and C. Wunderlich, Phys. Rev. Lett. 87, 257904 (2001); 91, 029902 (2003). [9] C. Ospelkaus, C. E. Langer, J. M. Amini, K. R. Brown, D. Leibfried, and D. J. Wineland, Phys. Rev. Lett. 101, 090502 (2008). [10] N. Timoney, I. Baumgart, M. Johanning, A. F. Varón, M. B. Plenio, A. Retzker, and C. Wunderlich, Nature (London) 476, 185 (2011). [11] U. Warring, C. Ospelkaus, Y. Colombe, R. Jördens, D. Leibfried, and D. J. Wineland, Phys. Rev. Lett. 110, 173002 (2013). [12] C. Piltz, T. Sriarunothai, A. -
F. Varón, and C. Wunderlich, Nat. Commun. 5, 4679 (2015).

[13] D. P. L. Aude Craik, N. M. Linke, M. A. Sepiol, T. P. Harty, C. J. Ballance, D. N. Stacey, A. M. Steane, D. M. Lucas, and D. T. C. Allcock, arXiv:1601.02696.
[14] C. Ospelkaus, U. Warring, Y. Colombe, K. R. Brown, J. M. Amini, D. Leibfried, and D. J. Wineland, Nature (London) 476, 181 (2011).
[15] A. Khromova, C. Piltz, B. Scharfenberger, T. F. Gloger, M. Johanning, A. F. Varón, and C. Wunderlich, Phys. Rev. Lett. 108, 220502 (2012). The fidelity we quote excludes SPAM error (C. Wunderlich, private communication).
[16] S. Weidt, J. Randall, S. C. Webster, K. Lake, A. E. Webb, I. Cohen, T. Navickas, B. Lekitsch, A. Retzker, and W. K. Hensinger, arXiv:1603.03384.
[17] D. T. C. Allcock, T. P. Harty, C. J. Ballance, B. C. Keitch, N. M. Linke, D. N. Stacey, and D. M. Lucas, Appl. Phys. Lett. 102, 044103 (2013).
[18] R. Ozeri, W. M. Itano, R. B. Blakestad, J. Britton, J. Chiaverini, J. D. Jost, C. Langer, D. Leibfried, R. Reichle, S. Seidelin, J. H. Wesenberg, and D. J. Wineland, Phys. Rev. A 75, 042329 (2007).
[19] M. Niemann, A.-G. Paschke, T. Dubielzig, S. Ulmer, and C. Ospelkaus, in CPT and Lorentz Symmetry, edited by V. A. Kostelecký (World Scientific, Singapore, 2014), pp. 41–44.
[20] E. Knill, Nature (London) 434, 39 (2005). [21] R. Raussendorf, J. Harrington, and K. Goyal, New J. Phys.
9, 199 (2007). [22] A. G. Fowler, M. Mariantoni, J. M. Martinis, and A. N.
Cleland, Phys. Rev. A 86, 032324 (2012). [23] J. Benhelm, G. Kirchmair, C. F. Roos, and R. Blatt, Nat.
Phys. 4, 463 (2008). [24] C. J. Ballance, T. P. Harty, N. M. Linke, M. A. Sepiol, and
D. M. Lucas, Phys. Rev. Lett. 117, 060504 (2016). [25] J. P. Gaebler, T. R. Tan, Y. Lin, Y. Wan, R. Bowler, A. C.
Keith, S. Glancy, K. Coakley, E. Knill, D. Leibfried, and D. J. Wineland, Phys. Rev. Lett. 117, 060505 (2016). [26] C. A. Ryan, M. Laforest, and R. Laflamme, New J. Phys. 11, 013034 (2009). [27] R. Barends, J. Kelly, A. Megrant, A. Veitia, D. Sank, E. Jeffrey, T. C. White, J. Mutus, A. G. Fowler, B. Campbell et al., Nature (London) 508, 500 (2014). [28] Laser-driven two-qubit gates with comparable fidelity to that reported here have recently been implemented in a surface trap for Ybþ hyperfine qub-
its at Sandia National Laboratories (P. Maunz, private communication). [29] D. T. C. Allcock, T. P. Harty, M. A. Sepiol, H. A. Janacek, C. J. Ballance, A. M. Steane, D. M. Lucas, and D. N. Stacey, New J. Phys. 18, 023043 (2016). [30] A. Sørensen and K. Mølmer, Phys. Rev. A 62, 022311 (2000). [31] A. Bermudez, P. O. Schmidt, M. B. Plenio, and A. Retzker, Phys. Rev. A 85, 040302(R) (2012). [32] M. Carsjens, M. Kohnen, T. Dubielzig, and C. Ospelkaus, Appl. Phys. B 114, 243 (2014). [33] C. Roos, New J-
. Phys. 10, 013002 (2008). [34] D. Leibfried, B. DeMarco, V. Meyer, D. Lucas, M. Barrett, J. Britton, W. M. Itano, B. Jelenković, C. Langer, T. Rosenband, and D. J. Wineland, Nature (London) 422, 412 (2003). [35] T. R. Tan, J. P. Gaebler, R. Bowler, Y. Lin, J. D. Jost, D. Leibfried, and D. J. Wineland, Phys. Rev. Lett. 110, 263002 (2013).

140501-5

PRL 117, 140501 (2016)

PHYSICAL REVIEW LETTERS

week ending 30 SEPTEMBER 2016

[36] A. Lemmer, A. Bermudez, and M. B. Plenio, New J. Phys. 15, 083001 (2013).
[37] D. Hayes, S. M. Clark, S. Debnath, D. Hucul, I. V. Inlek, K. W. Lee, Q. Quraishi, and C. Monroe, Phys. Rev. Lett. 109, 020503 (2012).
[38] See Supplemental Material at http://link.aps.org/ supplemental/10.1103/PhysRevLett.117.140501 for details of the microwave fields and off-resonant excitation, and numerical modelling which compares the DDMS and SSB gates.
[39] S.-B. Zheng, Phys. Rev. A 89, 022314 (2014). [40] C. F. Roos, T. Monz, K. Kim, M. Riebe, H. Häffner, D. F. V.
James, and R. Blatt, Phys. Rev. A 77, 040302(R) (2008). [41] Note that, neglecting this effect, gate errors due to finite temperature are negligible in the absence of detuning errors due to the extremely low microwave effective Lamb-Dicke parameter [9]. [42] The rf source is a Milldown board, manufactured by Enterpoint Ltd, with four channels of Analog Devices

AD9910 DDS; up-conversion is done with Eclipse Microwave Inc. IQ2040MP4 IQ mixers, fed with a 3.5 GHz LO. [43] API Technologies Corp. C3200-30-3SS. [44] A. H. Burrell, D. J. Szwer, S. C. Webster, and D. M. Lucas, Phys. Rev. A 81, 040302(R) (2010). [45] D. T. C. Allcock, L. Guidoni, T. P. Harty, C. J. Ballance, M. G. Blain, A. M. Steane, and D. M. Lucas, New J. Phys. 13, 123023 (2011). [46] D. A. Hite, Y. Colombe, A. C. Wilson, K. R. Brown, U. Warring, R. Jördens, J. D. Jost, K. S. McKay, D. P. Pap-
pas, D. Leibfried, and D. J. Wineland, Phys. Rev. Lett. 109, 103001 (2012). [47] J. Labaziewicz, Y. Ge, P. Antohi, D. Leibrandt, K. R. Brown, and I. L. Chuang, Phys. Rev. Lett. 100, 013001 (2008). [48] U. Warring, C. Ospelkaus, Y. Colombe, K. R. Brown, J. M. Amini, M. Carsjens, D. Leibfried, and D. J. Wineland, Phys. Rev. A 87, 013437 (2013). [49] H. Häffner, S. Gulde, M. Riebe, G. Lancaster, C. Becher, J. Eschner, F. Schmidt-Kaler, and R. Blatt, Phys. Rev. Lett. 90, 143602 (2003).

140501-6

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:29.191Z
- **Text Length:** 27055 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
