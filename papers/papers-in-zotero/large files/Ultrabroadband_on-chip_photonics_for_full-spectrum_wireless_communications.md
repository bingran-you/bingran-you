# PDF Document: Tao et al. - 2025 - Ultrabroadband on-chip photonics for full-spectrum wireless communications.pdf

**File Path:** Tao et al. - 2025 - Ultrabroadband on-chip photonics for full-spectrum wireless communications.pdf

**Processed Date:** 2026-02-10T18:16:27.170Z

**File Size:** 8923.05 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2694

**Title:** Ultrabroadband on-chip photonics for full-spectrum wireless communications

**Collection:** Large Files

---

## Extracted Text Content

Nature | www.nature.com | 1
Article
Ultrabroadband on-chip photonics for full-spectrum wireless communications
Zihan Tao1,7, Haoyu Wang1,7, Hanke Feng2,7, Yijun Guo1,7, Bitao Shen1,7, Dan Sun3, Yuansheng Tao2, Changhao Han4, Yandong He5, John E. Bowers4, Haowen Shu1,6✉, Cheng Wang2✉ & Xingjun Wang1,3,6✉
The forthcoming sixth-generation and beyond wireless networks are poised to operate across an expansive frequency range—from microwave, millimetre wave to terahertz bands—to support ubiquitous connectivity in diverse application scenarios1–3. This necessitates a one-size-fits-all hardware solution that can be adaptively reconfigured within this wide spectrum to support full-band coverage and dynamic spectrum management4. However, existing electrical or photonic-assisted solutions face a lot of cha-
llenges in meeting this demand because of the limited bandwidths of the devices and the intrinsically rigid nature of system architectures5. Here we demonstrate adaptive wireless communications over an unprecedented frequency range spanning over 100 GHz, driven by a thin-film lithium niobate (TFLN) photonic wireless system. Leveraging the Pockels effect and scalability of the TFLN platform, we achieve monolithic integration of essential functional elements, including baseband modulation, broadband-
 wireless–photonic conversion and reconfigurable carrier and local signal generation. Powered by broadband tunable optoelectronic oscillators, our signal sources operate across a record-wide frequency range from 0.5 GHz to 115 GHz with high-frequency stability and consistent coherence. Based on the broadband and reconfigurable integrated photonic solution, we realize full-link wireless communication across nine consecutive bands, achieving record lane speeds of up to 100 Gbps. The real-time reconf-
igurability further enables adaptive frequency allocation, a crucial ability to ensure enhanced reliability in complex spectrum environments. Our proposed system represents a marked step towards future full-spectrum and omni-scenario wireless networks.
Wireless communication technology has influenced our information society by enabling widespread and massive connectivity6,7. To meet the growing demand for ubiquitous access, future sixth-generation (6G) and beyond (XG) networks are anticipated to adaptively use full-spectrum resources for diverse application scenarios1–3 (Fig. 1a). For example, high-frequency millimetre wave and sub-terahertz bands will provide further increased data speed and reduced latency, facilitating emerging data-intensive-
 services such as extended reality (XR) and remote surgery8. Meanwhile, the low-loss sub-6 GHz and microwave bands continue to provide wide spatial coverage in rural areas or urban centres9,10. Furthermore, the system should feature real-time spectral reconfigurability to ensure efficient spectrum usage and reliable access in complex spectrum environments, commonly referred to as intelligent radio11–13. To support this adaptive full-spectrum vision, a one-size-fits-all hardware solution that can b-
e reconfigured to operate within the entire spectrum is much desired4. Specifically, it should support high fidelity and broadband conversion between baseband and
radio frequency (RF) bands, low-noise signal sources with wideband tunability and consistent performance, as well as low-cost chip-scale integrability that seamlessly combines all these essential functions in a small form factor for synergistic operation. However, achieving this broadband and reconfigurable hardware presents a lot of challenges5. Traditional electrical solutions are typically designed for operation in a particular band only1, as the underlying electrical components require distinc-
t design rules, structures and materials for each band. Consequently, covering a broad frequency spectrum requires a series of independent subsystems specially tailored for respective bands. This not only increases system complexity and cost, especially in large-scale deployment scenarios, but also limits the frequency reconfigurability needed for dynamic spectrum management. Moreover, electrical signal sources based on cascaded frequency multipliers see significantly increased noise at high frequ-
encies, leading to inconsistent performances among different bands and degraded communication quality14. Recent advances in optoelectronic
https://doi.org/10.1038/s41586-025-09451-8
Received: 8 January 2025
Accepted: 23 July 2025
Published online: xx xx xxxx
Open access
Check for updates
1State Key Laboratory of Photonics and Communications, School of Electronics, Peking University, Beijing, China. 2Department of Electrical Engineering State & Key Laboratory of Terahertz and Millimeter Waves, City University of Hong Kong, Kowloon, China. 3Peking University Yangtze Delta Institute of Optoelectronics, Nantong, China. 4Department of Electrical and Computer Engineering, University of California, Santa Barbara, Santa Barbara, CA, USA. 5School of Integrated Circuits, Peking University, -
Beijing, China. 6Frontiers Science Center for Nano-optoelectronics, Peking University, Beijing, China. 7These authors contributed equally: Zihan Tao, Haoyu Wang, Hanke Feng, Yijun Guo, Bitao Shen. ✉e-mail: haowenshu@pku.edu.cn; cwang257@cityu.edu.hk; xjwang@pku.edu.cn

2 | Nature | www.nature.com
Article
technology present new opportunities to achieve broadband operation by leveraging the inherently large bandwidth of optical systems15–24. Specifically, multi-band wireless reception can be achieved optically through broadband electro-optic (E-O) modulators, that is, wirelessphotonic conversion23. The modulated optical signals can be further flexibly processed using optical apparatus and distributed over fibre networks25. On the signal generation front, wireless carrier and local oscillation signal-
s can be generated by optical downmixing of two laser sources, in which the RF signal frequency can be flexibly set by controlling the laser frequency and the tuning range is bounded
only by the photodetector bandwidth24. This approach further allows high-speed in-phase/quadrature (I/Q) modulation of the wireless signal using mature optical modulation techniques, supporting ultrahigh data throughput at low cost. Despite being naturally high-frequency friendly, achieving a compact and multi-band adaptive photonic wireless system faces three key challenges. First, current optical wireless generation schemes struggle to achieve low noise, wideband tunability and system compactnes-
s simultaneously. Signals generated from beating two unrelated free-running lasers generally exhibit large phase noise and frequency instability.
a
Carrier gen.
LO gen.
BB mod.
Zero-IF align.
Single-mode filter
1011
I sig.
1101
Q sig.
Local laser input
W–P conv.
LO
Signal sideband
*
On-chip photonic wireless system
OEO loop
OEO loop
BB mod.
LO gen.
Carrier gen.
W–P conv.
LO gen.
Carrier gen.
W–P conv.
c
I
Q
Various base stations
Ultra-dense area
Smart industrial area
100 MHz
3 m 60 cm 30 cm 3 cm 10 mm <3 mm
500 MHz 1 GHz 10 GHz 30 GHz 110 GHz
Vehicle to everything (V2X)
Lower frequency Higher frequency
Wide-coverage rural area
Satellite communication
Interference signal
Holographic and remote surgery
I Q
Chip-scale solution for full band
Omni-scenario network
b
de
×n ×n ×n ×n ×n ×n ×n ×n ×n ×n
Integrated OEO signal generation: full-spectrum coverage with consistently low noise
Interference Dynamic avoidance
0 100 101 102 103
f (GHz)
Sub-6G Micro Millimetre Sub-THz/THz
Millimetre Sub-THz/THz
Micro
Sub-6G
Accumulated noise
Electronic Tx and Rx
Ref.
Fig. 1 | Ultrabroadband integrated photonics empowering omni-scenario wireless networks. a, Predicted omni-scenario wireless networks with a large frequency span from sub-6 GHz low frequency (dark green) to sub-THz highfrequency (red) bands. Traditional electrical schemes require distinct device sets for each band, with accumulated noise from the multiplier-based sources at high frequencies. b, Conceptual diagram of the proposed integrated photonic scheme enabling adaptive full-spectrum operations-
. A broadband optoelectronic oscillator generates frequency-tunable signals covering the full band with a
consistently low noise level. c, Schematic of the thin-film lithium niobate photonic wireless solution for ultrabroadband carrier and local oscillator generation, signal modulation and reception. Asterisk indicates components currently not integrated on the TFLN-chip. d, Optical microscope image of the fabricated TFLN chip. e, Photo of the co-packaged photonic-wireless system. BB Mod., baseband modulator; W–P Conv., wireless–photonic conversion; LO, local oscillation; Gen., generation; OEO, optoel-
ectronic oscillation. Zero-IF align., zero-intermediate frequency alignment.

Nature | www.nature.com | 3
Better coherence can be achieved by beating two optical sidebands that originate from a single laser source, when modulated by an external microwave source16,26. However, this optical frequency multiplication process is still constrained by the same noise accumulation law as that in the electronic multiplier case. Although more advanced approaches such as optical frequency division (OFD) can offer extremely low phase noise20–22, they often require complex external locking schemes with compromised -
spectral flexibility and system simplicity. Second, wireless–photonic conversion in current demonstrations is often realized using bulk lithium niobate26 or silicon-based modulators23,27, which suffer from high drive voltages or large intrinsic optical insertion loss caused by their intrinsic mechanisms such as plasma dispersion or surface plasmon polariton effect. These limitations degrade the signal-to-noise ratio (SNR) and signal speed. Third, although some of these demonstrations partly incorp-
orate integrated photonic technologies, the full communication systems remain largely discrete. In short, the quest for a low-noise, wideband tunable, and highly integrated wireless solution based on photonic integrated circuits (PIC) remains unknown. Here, we address these challenges by developing a photonic wireless system with broadband reconfigurability based on a thin-film lithium niobate (TFLN) platform28–33. Compared with traditional lithium niobate devices, TFLN platform offers E-O modulat-
ors with much broader bandwidths covering millimetre wave and sub-THz bands, as well as improved scalability to integrate multiple E-O and linear functional devices on a single chip28,29. Leveraging these unique features, we achieve ultrabroadband wireless carrier and local oscillation (LO) signal generation based on an optoelectronic oscillator scheme14,34–36, which produces highly stable microwave signals with a record-broad frequency tuning range from 0.5 GHz to 115 GHz while maintaining consis-
tent coherence. We further integrate the broadband signal sources with baseband modulation and wireless–photonic conversion modules to realize the wireless–photonic circuit that enables high-fidelity adaptive wireless communication across a bandwidth exceeding 100 GHz. We achieve end-to-end high-speed wireless communication across nine consecutive bands, with a peak data rate exceeding 100 Gbps. Based on the ultrabroad operation bandwidth and real-time reconfigurability, we showcase system-coordin-
ated spectrum management that successfully addresses three classic wireless channel quality improvement challenges—namely, channel self-adaptation, interference avoidance and dynamic homodyne alignment. Our ultrabroadband wireless photonic approach could offer reconfigurability and adaptivity for next-generation intelligent radio wireless networks.
PIC-based wireless system architecture
Figure 1b,c shows the schematic of our proposed broadband reconfigurable wireless–photonic system, in which key functional elements, including carrier and LO signal generation, wireless–photonic conversion and baseband modulation, are integrated on the same TFLN chip for both wireless signal transmission and reception. The TFLN chip is fabricated based on a wafer-scale stepper lithography process (Supplementary NoteI) and packaged for functional system characterizations (Fig. 1d,e). The functional-
 area of the photonic chip is 11 mm × 1.7 mm, with its width dimension compatible with typical electronic driver chips and millimetre-wave antennas in potential E-O co-packages. At the wireless transmitter end (Tx), a broadband tunable carrier is generated using an optoelectronic oscillator comprising a high-speed E-O phase modulator and a high-quality (Q) microring resonator (MRR). At the intended optoelectronic oscillation frequency, one of the two phase-modulated sidebands is aligned with the r-
esonance frequency of the MRR and filtered out, leading to phase-to-intensity modulation conversion. The modulated optical signal is converted back to the electrical domain at the photodetector, which is finally sent back to the E-O modulator to close the optoelectronic oscillation loop.
With sufficiently high gain from the optical and electrical amplifiers, positive feedback can be achieved, leading to self-oscillation within the optoelectronic loop. Leveraging an advanced slotted electrode design, our E-O modulator exhibits only 1.3 dB E-O roll-off at 67 GHz, with an extrapolated 3-dB bandwidth of 110 GHz. This allows for effective excitation of optoelectronic oscillation within an unprecedented bandwidth. The MRR features a high intrinsic Q factor of nearly 1 million and a free-
 spectral range (FSR) of 134 GHz, enabling narrowband optical filtering within a wide side-mode-free frequency range. On-chip thermal tuning of this MRR filter leads to reconfigurable selection of the oscillating frequency. To load the baseband signal onto the wireless carrier, an in-phase quadrature (IQ) modulator is first deployed to convert the signal to the optical domain by carrier-suppressed single-sideband modulation. Afterwards, the IQ-modulated sideband is mixed with the filtered optoelec-
tronic oscillation signal at a broad-bandwidth photodetector. This generates a modulated wireless signal with a carrier frequency determined by the optoelectronic oscillation frequency. Importantly, the carrier generation and IQ modulation processes share the same laser source, which ensures strong coherence in the final generated signal. Altogether, the Tx chip generates an uplink wireless data stream with a tunable centre frequency across a broad bandwidth. At the receiver end (Rx), an optically-
 assisted wireless signal down-conversion is performed, which eliminates the need for bandspecific RF mixers. To achieve this, we use another wideband E-O modulator with a low half-wave voltage (Vπ) of 2.8 V to directly convert wireless signals from the receiving antenna to the optical domain. To convert the modulated optical signal back to baseband, a tunable optical LO signal is generated based on the same optoelectronic oscillation process as that used in the Tx. The modulated sideband is filte-
red and finally mixed with the optical LO at a receiving photodetector to retrieve the baseband communication signal. The mirrored system architecture for carrier and LO generation ensures broad bandwidths and reconfigurability at both Tx and Rx ends. Moreover, the LO frequency can be fine-tuned to precisely align with the centre frequency of the received signal, enabling zero intermediate frequency (IF) reception. The zero-IF signal and LO can be either directly demodulated on-site or further dis-
tributed to a remote central unit (CU) through low-loss fibre networks. Apart from broad bandwidth and low Vπ, the TFLN E-O modulator also features a high modulation linearity, benefiting from the linear Pockels effect of lithium niobate, which ensures minimal signal distortion during the E-O conversion process. The measured spurious-free dynamic range (SFDR) of the modulator is approximately 99 dB Hz2/3, which is limited by the sinusoidal transfer function of the Mach–Zehnder interferometer and c-
an be further improved using advanced linearization strategies37. The experimental details and performance characterization results are provided in Supplementary Note II. Overall, the proposed photonic wireless core minimizes the use of bandwidth-limited devices, requiring only essential electrical amplifiers and wireless antennas as peripheral circuits. By working with various specific peripheral circuits, it ultimately meets the demands of 6G omni-scenarios, supporting full-band coverage and ada-
ptive wireless communication.
Consistent operation across ultrabroad bandwidth
We first show that individual elements of the proposed integrated photonic wireless approach provide high and consistent performance across a broad bandwidth. For wireless–photonic conversion (Fig. 2a), wireless waveforms with different carrier frequencies under quadrature phase shift keying (QPSK) modulation are transmitted and received by the antenna-linked modulator. The measured optical spectra are shown in Fig. 2b, revealing minimal intensity variations in the received optical sidebands at mo-
dulation frequencies up to 100 GHz. Further characterization of the high frequency (80 GHz) wireless receiving response within a wide optical carrier wavelength range from 1,515 nm

4 | Nature | www.nature.com
Article
to 1,630 nm (Fig. 2c) also demonstrates uniform optical spectral performance. The consistency across both wireless carrier and optical frequency bands highlights its potential for wavelength division multiplexing-based high-capacity radio-over-fibre fronthaul system25. We next demonstrate carrier and LO signal generation with flexible reconfigurability and low-noise performance across a record-wide frequency range from 0.5 GHz to 115 GHz, using the setup shown in Fig. 2d (see Methods for details).-
 The optoelectronic oscillation process follows the Van der Pol model38, in which the oscillation frequency is determined by the relative frequency difference between the laser and the resonance peak of MRR. Figure 2g presents the measured signal spectra, with nearly continuous coverage of the full frequency range with a 500 MHz frequency interval. The two narrow spectral regions with
missing data correspond to oscillation frequencies close to half the FSR (about 67 GHz) of MRR and in between two types of amplifiers (about 76 GHz), respectively. This E-O hybrid signal generator effectively unites nine RF frequency bands across more than seven octaves in frequency, based on the photonic chip solution, which is impossible for conventional electronics to accomplish. Although dedicated peripheral elements such as electrical amplifiers are still required for respective bands, these -
relatively narrowband elements naturally mitigate the impact of adjacent resonances from the optical MRR (Fig. 2e). As a result, this alleviates the demand for extremely small MRRs to increase the frequency separation between resonant peaks36. Moreover, we further validated the feasibility of realizing wideband oscillation beyond 100 GHz using a single hardware set (for details, see Supplementary Note V).
Power (dBm)
b
EDFA
PD
EA
RF in
G
S
G
Microring resonator
Phase mod.
d ef
×n ×n ×n
Ref. L band K band W band
Continuous wave
EA EA EA
Optical resonance
–20
–40
–60
–80
Power (dBm)
–20
–40
–60
–80
g
0
Phase noise (dBc Hz–1)
–20
–40
–60
–80
–100
–120
–140
–160
h
1,000
10,000
100,000
1,000,000
Frequency offset (Hz)
100
EA EA EA
L band K band W band
Noise
O–E hybrid scheme
0 10 20 30 40 50 60
0
–10
–20
–30
10
20
30
Frequency error (kHz)
Time (min)
Multiplication scheme
Wavelength (nm)
1,549.5 1,550.0 1,550.5 1,551.0 Wavelength (nm)
1,515 1,555 1,600 1,630
c
80 GHz 10G QPSK
25 GHz 40 GHz 80 GHz 100 GHz
10G QPSK
i 90 GHz without delay 20 GHz without delay 5 GHz without delay
90 GHz with 2 km delay 20 GHz with 2 km delay 5 GHz with 2 km delay 0.5 ppm
1.0 ppm
a
OSA
Antenna
EA
RF in
Phase mod. G
S
G
0
Norm. power (dBm)
0
–10
–20
–30
–40
–50
–60
–70 10 20 30 40 Frequency (GHz)
50 60 70 80 90 100 110
Fig. 2 | Broadband wireless–photonic conversion and wireless signal
generation. a, Setup for wireless–photonic conversion. b,c, Measured optical spectra at various wireless (b) and optical (c) carrier frequencies. d, Setup for carrier signal generation based on OEO. e, Working principle of the OEO scheme, in which the oscillation frequency can be reconfigured by tuning the optical resonance frequency, without affecting noise performance. f, Working principle
of traditional multiplier-based signal sources, in which the noise cascades. g, Measured OEO spectrum with an RBW of 51 kHz. h, Measured phase noises of OEO signals at various frequencies showing consistent performances across bands. i, Measured frequency error diagram. OSA, optical spectrum analyser; EDFA, erbium-doped fibre amplifier; EA, electrical amplifier; PD, photodetector; MS, microwave source; and c.w., continuous wave.

Nature | www.nature.com | 5
More importantly, the proposed signal generation architecture overcomes the important noise-accumulation challenge in conventional frequency multiplier schemes (Fig. 2f), in which the additional phase noise increases according to ΔL = 20 × log10(N), where N denotes the multiplication factor. Figure 2h shows the measured phase noise curves at different generated frequencies of 5 GHz, 20 GHz and 90 GHz, which align closely with each other with consistent phase noises of −85 dBc Hz−1 at 10 kHz freque-
ncy offset (green curves). We further compared the noise performance with a commercial frequency synthesizer chip followed by multipliers (see Supplementary Note IV for details). Moreover, the phase noise of the OEO scheme can be further reduced by incorporating a longer fibre loop. The measured phase noise at 10 kHz frequency offset with a 2-km fibre delay is substantially reduced to around −110 dBc Hz−1 at 10 kHz (blue curves). Here the side modes are not effectively suppressed because of the re-
latively wide filtering bandwidth of the MRR, which can be addressed by using the dual-loop method39 and further improving the Q factor of MRR14. The measured phase noise at 90 GHz rises beyond 10 kHz offset because of additional noise from the down-mixing detection system (Supplementary Note IV). Furthermore, to characterize the stability of the platform and structure, the frequency drift of the free-running oscillation at around 20 GHz was recorded every minute for an hour by an electrical spect-
rum analyser. As shown in Fig. 2i, the results indicate that most of the deviations are less than 0.5 parts per million (ppm), which is nearly 10 times better than other platforms even under PID-based frequency locking of the MRR40.
Multi-band converged wireless communications
We next leverage the broadband consistency of the proposed photonic wireless system to demonstrate end-to-end wireless communication reconfigurable across nine consecutive frequency bands. Figure 3a shows a detailed system configuration of the Tx and Rx ends, at which the broadband reconfigurable photonic wireless core co-operates with supporting electronics and antennas in respective bands to achieve full system functions (seeMethods for a detailed description). Compared with previous photonic-as-
sisted wireless communication methods based on silicon-based modulators, the TFLN modulators here provide lower insertion loss (less than 2 dB), lower half-wave voltage and larger bandwidths, therefore ensuring minimal power penalty and good SNR across an ultrabroad spectrum range (see Supplementary NoteVI for a detailed analysis). To validate these advantages, we conduct full-spectrum wireless communications at carrier frequencies from 5 GHz to 100 GHz with a 5-GHz interval, using horn antennas f-
or the transmission and reception of high-speed wireless signals. Three sets of antennas are used to cover specific bands: 2–18 GHz, 18–50 GHz and 75–110 GHz. The absence of the 50–75 GHz band is due to its limited use, as atmospheric absorption is substantial within this range. Figure 3b shows representative constellation diagrams in different frequency channels, with various data rates and modulation formats, that is, QPSK and 16 quadrature amplitude modulation (16-QAM). Up to 100 Gbps single-la-
ne transmission is achieved at both 35 GHz and 95 GHz centre frequencies (with even lower bit error ratio (BER) at 95 GHz), which presents the highest data rate for integrated photonics-assisted wireless communication. Moreover, apart from the lower-frequency carriers with limited bandwidths, all channels with carriers above 30 GHz achieved data rates exceeding 50 Gbps, validating the performance consistency of the system across a wide frequency range. We summarize the BER results in all measured -
bands in Fig. 3c, which are obtained using a standard digital signal processing flow (seeMethods for more details). All transmission BER values, across nine different bands (L, S, C, X, Ku, K, Ka, U and W), remain below the hard-decision forward error correction (HD-FEC) or soft-decision forward error correction (SD-FEC) thresholds. The data transmission performance is now mainly limited by two factors. First, the performances of the antennas and amplifiers are optimized at their respective centre-
 frequencies and
degrade away from them. This can be seen in the BER values of 60 Gbps transmission results in the W band (red dashed line in Fig. 3c), which substantially deteriorates near the band edges. The second limiting factor is the non-ideal in-band spectral response of electrical devices, that is, ripples and dips, which induces uneven sideband loading. This type of signal degradation is more pronounced for higher-order modulation formats, such as 16-QAM (ref. 41) and can be mitigated through cooperative -
fine-tuning of the carrier and LO frequency, as discussed in the next section.
Dynamic spectrum management
We finally demonstrate the real-time wideband reconfigurability of the system for dynamic spectrum management. Leveraging the thermo-optic effect, the system can adjust rapid carrier/LO frequencies, achieving a 6-GHz tuning range within 180 μs (see Supplementary Note VII for details). This ability greatly enhances the adaptability of wireless systems in complex real-world scenarios. For example, as discussed in the previous section, the non-ideal responses of electrical devices, primarily the ante-
nna and electrical amplifier, create significant fluctuations within certain bands. Additional effects such as multipath interference42 can also introduce similar deterioration, as described in Fig. 4a. Traditionally, this effect is usually mitigated by orthogonal frequency-division multiplexing (OFDM) algorithms43. Here we provide a more fundamental hardware solution, by adaptively searching for an optimal frequency point with enhanced reliability through near-continuous frequency-domain tuning. -
As shown in Fig.4b, the LNAs used at both Tx and Rx ends in the W band exhibit uneven frequency responses with amplitude variations exceeding 4 dB (see Supplementary NoteVIII for detailed information). Operating at 80 GHz, this fluctuation induces noticeable distortions in the received optical spectrum (Fig. 4c, top panel). Adaptively shifting the operating frequency to 98 GHz significantly improves signal quality, yielding a flatter spectral envelope in the optical domain (Fig. 4c, bottom panel).-
 Figure 4d summarizes the measured BER for 120 Gbps 16-QAM signals between 94 and 100 GHz, with an optimized operation point at 97.5 GHz, confirming the effectiveness of reconfigurable systems in achieving channel self-adaptation. Another common challenge in wireless communication is interference due to noisy and congested wireless environment. As shown in Fig. 4e, an additional antenna is introduced to emit an interference signal that overlaps with the original signal in the frequency domain. Bot-
h signals are received simultaneously by the Rx antenna. Based on the reconfigurable photonic architecture, the transmitted signal at the Tx end can be adaptively tuned to avoid the jammed band and make use of a free frequency band (see Supplementary Note IX for a detailed analysis). Importantly, the LO at the Rx end can be synchronously reconfigured to maintain frequency alignment during this process (to be discussed next). In the experiment, a 20-Gbps QPSK signal serves as the target signal, whe-
reas a microwave source (Keysight 8257D) generates single-tone signals with different amplitudes and frequencies as interference. Adaptable communication at 25 GHz and 96.55 GHz is demonstrated as shown in Fig. 4f,g, respectively. In both cases, the interference signal initially overlaps with the data signal, which completely disrupts the received signals with unrecoverable constellation diagrams. Properly tuning the centre frequencies of Tx and Rx in both cases successfully suppressed the interfe-
rence with a baseband low-pass filter, resulting in a BER of 0. The end-to-end reconfigurability of the system greatly improves communication reliability in complex electromagnetic environments. Finally, we emphasize the importance of system-coordinated reconfigurability at both Tx and Rx ends. To address the above challenges based on adaptive spectrum management, a crucial requirement is that the carrier frequency at Tx and the LO frequency at Rx must be precisely aligned to achieve zero-IF (Fig.-
 4h), as any frequency offset can adversely deteriorate the communication quality. Figure 4i shows the measured BER values for various signal speeds and modulation formats when LO

6 | Nature | www.nature.com
Article
is detuned from the carrier frequency. Compared with QPSK, 16-QAM is more sensitive to the frequency offset, highlighting the need for precise carrier–LO matching for more advanced modulation formats. When the frequency offset becomes too large for the DSP to accurately estimate, the signal completely fails to recover, resulting in a BER of 0.5.
Conclusion and discussion
In summary, we propose and demonstrate an integrated optoelectronic architecture that could operate from 0.5 GHz to 115 GHz for
multi-band converged wireless communications. Fundamental components such as carrier and LO generation, signal loading and receiving are implemented on the same TFLN platform that features broadband photonic building blocks and scalability. This enables reconfigurable full-link wireless communications with improved bandwidth, data rates and system functionality compared with previous photonic-assisted wireless demonstrations, as shown in Table 1. The wideband consistency also enables the proposed -
system to adapt effectively to complex electromagnetic environments, further enhancing its reliability for real-world wireless communication. In Extended Data Table 1, we also
30 GHz 35 GHz 40 GHz 45 GHz 85 GHz 90 GHz 95 GHz 100 GHz
Laser
EDFA
PD
EA
RF in
G
S
G
MRR
Phase mod.
TFLN-chip
1:1
EA
RF in
Rx end
1:1
IQ demod.
G
S
G
Phase mod.
BPF
I sig. Q sig.
Distance ~ 1.3 m
TiN heater Terminal resistance
Electrode
a
BNF
75–110 GHz
18–50 GHz
2–18 GHz
Horn antenna EDFA
b
Tx end
Laser
EDFA
BPF
PD EA
RF in
G
S
G
MRR
Phase mod.
TFLN-chip
1:1
1:1
IQ mod.*
EDFA PD EA
AWG
I sig. Q sig.
1:1
i
c
0 10 20 30 40 50 90 100
L, S, C X Ku K Ka U W
10–4
10–3
10–2
Frequency (GHz)
i

ii iii
f
iv v vi

Mixed
10 GHz 20 GHz
10 Gbps
BER: 4.94 × 10–5
30 Gbps
BER: 1.63 × 10–3
50 Gbps
BER: 1.99 × 10–3
60 Gbps
BER: 1.56 × 10–3
50 Gbps
BER: 1.83 × 10–3
50 Gbps
BER: 1.74 × 10–2
60 Gbps
BER: 2.73 × 10–3
60 Gbps
BER: 6.34 × 10–4
60 Gbps
BER: 2.67 × 10–4
60 Gbps
BER: 2.64 × 10–3
20 Gbps
BER: 1.85 × 10–2
40 Gbps
BER: 2.10 × 10–3
80 Gbps
BER: 1.64 × 10–2
100 Gbps
BER: 1.98 × 10–2
60 Gbps
BER: 5.46 × 10–3
40 Gbps
BER: 1.64 × 10–2
40 Gbps
BER: 9.28 × 10–3
40 Gbps
BER: 3.49 × 10–3
100 Gbps
BER: 1.56 × 10–2
40 Gbps
BER: 1.17 × 10–2
QPSK signal
2 Gbps 30 Gbps
40 Gbps 50 Gbps
60 Gbps 40 Gbps 60 Gbps 100 Gbps
80 Gbps
4 Gbps 20 Gbps
16QAM signal Optimal point
ii iii
iv
vi v
Electronic link Optical link Waveguide

BER
Fig. 3 | Multi-band wireless communication results. a, Setup for end-to-end wireless communication experiments. Insets i–vi show the optical and electrical spectra at important locations of the circuit. b, Measured constellation diagrams in different frequency bands. c, Summary of the measured BERs in different frequency bands. Orange and blue dashed lines correspond to the hard-decision and soft-decision forward error correction thresholds, respectively.
AWG, arbitrary waveform generation; MRR, microring resonator; IQ mod.*, in-phase and quadrature modulator. We used a commercial IQ module with integrated bias point control to currently replace the on-chip IQ modulator, which simplified the complexity of the communication experiment and prevented additional imbalance. EDFA, erbium-doped fibre amplifier; EA, electrical amplifier; BPF, optical band-pass filter, BNF, optical band-notch filter.

Nature | www.nature.com | 7
make a detailed benchmark table for a comprehensive performance comparison with electronic solution. In Supplementary Note V, we provide further discussions on the challenges in achieving full-band operation for peripheral optoelectronic devices, such as antennas and
amplifiers. To show the prospect of a complete full-spectrum wireless system without hardware change, we perform a proof-of-concept demonstration of frequency generation up to 110 GHz without replacing any electronic devices (Supplementary Note V).
e
Tx part Rx part
Wireless signal
f
Interference
f
Lo
f
Demod. signal
f
Baseband Carrier
f f ff
Interference
f0
Power (dBm)
–120
–60
Separated
iiiii iv v
viivi ix x
Frequency avoidance from 25 GHz to 30 GHz
BER = 0 BER = 0 BER = 0 BER = 0
0
Power (dBm)
–120
–60
0 5 10
0 5 10
Frequency (GHz)
Jammed
ii iii iv v
vii viii
ix x
Frequency avoidance from 96.55 GHz to 90 GHz 0
Power (dBm)
–120
–60
0
Power (dBm)
–120
–60
0 5 10
0 5 10
Frequency (GHz)
BER = 0 BER = 0 BER = 0 BER = 0
g
Separated
Jammed
h
93 94 95 96 97 98 99 100 101
6 × 10–2
5 × 10–2
4 × 10–2
3 × 10–2
BER
Frequency (GHz)
3.628 × 10–2
Nonideal frequency response
f
f
f
Shift
Dips
a
d
b
30
34
38
75 80 85 90 95 100 105 110
Tx LNA Rx LNA
Frequency (GHz)
Gain (dB)
–120 –100 –80 80 100 120
–80
–50
–65
–65 –80
–50
Optical power (dBm)
Frequency offset (GHz)
c
80 GHz
98 GHz
i
f
f
f
f
Lo
Δf
0 0.5 1.0 1.5 2.0 Frequency offset Δf (GHz)
100
10–1
10–2
10–3
10–4
BER
20 Gbps 16QAM 40 Gbps 16QAM 20 Gbps QPSK 40 Gbps QPSK
0
BER ≈ 0.5
2.5 3.0
BER = 0.50 BER = 0.50 BER = 0.50 BER = 0.50
BER = 0.50 BER = 0.50 BER = 0.49 BER = 0.50
ii iii iv
ii iii iv v
vi vii viii ix x
i
vi vii viii ix x
i ii iii iv v
120 Gbps 16QAM
Fig. 4 | System-coordinated wireless spectrum management. a, Schematic of spectral self-adaptation. b, Non-ideal frequency response of the wireless channels in the experiment. c, Optical spectra distortion of the loaded signals for wireless carrier frequencies of 80 GHz (top panel) and 98 GHz (bottom panel), respectively. d, Measured BERs of 120 Gbps 16-QAM signal in different frequency channels. e, Schematic of the setup and principle of active interference avoidance. f,g, Baseband power spectra -
and demodulated constellation diagrams in the
cases of jammed (insets i–v) and separated (insets vi–x) signals at initial frequencies of 25 GHz (f) and 96.55 GHz (g). Insets (i) and (vi) show the power spectral density of the target and interference signals in respective cases. Insets (ii–v and vii–x) show demodulated constellation diagrams and BERs. h, Schematic of frequency alignment between target signal and LO. i, BER versus frequency offset for four types of signals.
Table 1 | Comparison of representative works in photonic-assisted high-speed wireless communication
Year Key device Developed functionalities
Operational range (GHz)
Dynamic response speed (frequency/ time)
Verified channels count
Single-channel speed (Gbps)
Dynamic spectrum management
2013 (ref.18) UTC-PD Mixer Fixed NA 1 100 No
2019 (ref.23) Plasmonic-Mod. Wireless–photonic conversion
Fixed NA 1 50 No
2022 (ref.15) OFC Carrier generation Fixed NA 1 131 No
2023 (ref.19) OFC Carrier generation Fixed NA 1 60 No
2024 (ref.16) Bulky LN-Mod. Wireless–photonic conversion
Fixed NA 1 32 No
This work Integrated circuit in TFLN
Full link 0.5–115 6GHz/180μs 14 100 Yes
UTC, uni-travelling carrier; Mod., modulator; OFC, opitcal frequency comb; NA, not applicable.

8 | Nature | www.nature.com
Article
The integration level and performance can be further enhanced through advanced integration techniques and architecture optimization. Although external photonic components in the current experiments, such as lasers and photodetectors, are already implemented in the integrated form (Methods), a higher level of integration can be achieved through heterogeneously integrated III–V-on-TFLN technologies44–46. Our preliminary experimental results (Supplementary NoteX) suggest that power- and space-consumi-
ng EDFAs can be eliminated, enabling a fully on-chip link with low system power consumption. The operational bandwidth could be extended to the THz range using ultrabroadband TFLN modulators and modified uni-travelling-carrier (MUTC) photodetectors47,48. To achieve even lower phase noise within a compact footprint, ultrahigh-Q MRRs49 can be implemented as both filtering and energy storage elements in OEOs. Ultralow-loss50 on-chip optical delay lines could also be used to increase the loop distance-
 in a small area. Co-packaging on-chip elements with state-of-the-art bend-insensitive fibres with bending radii below 5 mm could potentially serve application scenarios with less stringent space constraints. Moving forward, the proposed system has the potential to serve as a universal approach, in which AI algorithms can be implemented to dynamically adapt the hardware to changing environments and network dynamics, following the AI native concept12. Moreover, the proposed schematic can be adapted-
 for integrated sensing and communication (ISAC), in which the loaded signal can further integrate the linear frequency modulation (LFM) signal, towards real-time data transmission and precise environmental sensing at the same time.
Online content
Any methods, additional references, Nature Portfolio reporting summaries, source data, extended data, supplementary information, acknowledgements, peer review information; details of author contributions and competing interests; and statements of data and code availability are available at https://doi.org/10.1038/s41586-025-09451-8.
1. Aboagye, S. et al. Multi-band wireless communication networks: fundamentals, challenges, and resource allocation. IEEE Trans. Commun. 72, 4333–4383 (2024). 2. Chen, S. et al. Vision, requirements, and technology trend of 6G: how to tackle the challenges of system coverage, capacity, user data-rate and movement speed. IEEE Wirel. Commun. 27, 218–228 (2020). 3. Saad, W., Bennis, M. & Chen, M. A vision of 6G wireless systems: applications, trends, technologies, and open research problems. IEEE Net-
w. 34, 134–142 (2019). 4. Akyildiz, I. F., Kak, A. & Nie, S. 6G and beyond: the future of wireless communications systems. IEEE Access 8, 133995–134030 (2020). 5. Akyildiz, I. F., Han, C., Hu, Z., Nie, S. & Jornet, J. M. Terahertz band communication: an old problem revisited and research directions for the next decade. IEEE Trans. Commun. 70, 4250–4285 (2022). 6. Chen, X. et al. Massive access for 5G and beyond. IEEE J. Sel. Areas Commun. 39, 615–637 (2021). 7. Wang, W. et al. On-chip topological -
beamformer for multi-link terahertz 6G to XG wireless. Nature 632, 522–527 (2024). 8. Rappaport, T. S. et al. Wireless communications and applications above 100 GHz: opportunities and challenges for 6G and beyond. IEEE Access 7, 78729–78757 (2019). 9. Rappaport, T. S. et al. Overview of millimeter wave communications for fifth-generation (5G) wireless networks—with a focus on propagation models. IEEE Trans. Antennas Propag. 65, 6213–6230 (2017). 10. Wang, C. X. et al. 6G wireless channel measureme-
nts and models: trends and challenges. IEEE Veh. Technol. Mag. 15, 22–32 (2020).
11. Chowdhury, M. Z., Shahjalal, M., Ahmed, S. & Jang, Y. M. 6G wireless communication systems: applications, requirements, technologies, challenges, and research directions. IEEE Open J. Commun. Soc. 1, 957–975 (2020).
12. Letaief, K. B., Chen, W., Shi, Y., Zhang, J. & Zhang, Y.-J. A. The roadmap to 6G: AI empowered wireless networks. IEEE Commun. Mag. 57, 84–90 (2019). 13. Jiang, W., Han, B., Habibi, M. A. & Schotten, H. D. The road towards 6G: a comprehensive survey. IEEE Open J. Commun. Soc. 2, 334–366 (2021). 14. Maleki, L. The optoelectronic oscillator. Nat. Photon. 5, 728–730 (2011). 15. Jia, S. et al. Integrated dual-laser photonic chip for high-purity carrier generation enabling ultrafast terahertz wirel-
ess communications. Nat. Commun. 13, 1388 (2022). 16. Dat, P. T. et al. Terahertz signal transparent relay and switching using photonic technology. J. Lightwave Technol. 42, 1173–1182 (2024).
17. Salamin, Y. et al. Microwave plasmonic mixer in a transparent fibre–wireless link. Nat. Photon. 12, 749–753 (2018). 18. Koenig, S. et al. Wireless sub-THz communication system with high data rate. Nat. Photon. 7, 977–981 (2013).
19. Heffernan, B. M. et al. 60 Gbps real-time wireless communications at 300 GHz carrier using a Kerr microcomb-based source. APL Photonics 8, 066106 (2023). 20. Sun, S. et al. Integrated optical frequency division for microwave and mmWave generation. Nature 627, 540–545 (2024). 21. Zhao, Y. et al. All-optical frequency division on-chip using a single laser. Nature 627, 546–552 (2024). 22. Kudelin, I. et al. Photonic chip-based low-noise microwave oscillator. Nature 627, 534–539 (2024). 23. Ummeth-
ala, S. et al. THz-to-optical conversion in wireless communications using an ultra-broadband plasmonic modulator. Nat. Photon. 13, 519–524 (2019). 24. Harter, T. et al. Wireless THz link with optoelectronic transmitter and receiver. Optica 6, 1063–1070 (2019). 25. Zhang, C. et al. Clone-comb-enabled high-capacity digital-analogue fronthaul with high-order modulation formats. Nat. Photon. 17, 1000–1008 (2023). 26. Dat, P. T. et al. Transparent fiber–millimeter-wave–fiber system in 100-GHz band usin-
g optical modulator and photonic down-conversion. J. Lightwave Technol. 40, 1483–1493 (2022). 27. Tao, Z. et al. Highly reconfigurable silicon integrated microwave photonic filter towards next-generation wireless communication. Photonics Res. 11, 682–694 (2023). 28. Wang, C. et al. Integrated lithium niobate electro-optic modulators operating at CMOScompatible voltages. Nature 562, 101–104 (2018). 29. Feng, H. et al. On-chip optical vector analysis based on thin-film lithium niobate singlesideband-
 modulators. Adv. Photonics 6, 066006 (2024). 30. Kharel, P., Reimer, C., Luke, K., He, L. & Zhang, M. Breaking voltage–bandwidth limits in integrated lithium niobate modulators using micro-structured electrodes. Optica 8, 357–363 (2021). 31. Feng, H. et al. Integrated lithium niobate microwave photonic processing engine. Nature 627, 80–87 (2024). 32. Xu, M. et al. High-performance coherent optical modulators based on thin-film lithium niobate platform. Nat. Commun. 11, 3911 (2020). 33. He, M. et -
al. High-performance hybrid silicon and lithium niobate Mach–Zehnder modulators for 100 Gbit s- 1 and beyond. Nat. Photon. 13, 359–364 (2019). 34. Zhang, W. & Yao, J. Silicon photonic integrated optoelectronic oscillator for frequencytunable microwave generation. J. Lightwave Technol. 36, 4655–4663 (2018). 35. Ma, R. et al. Ka-band thin film lithium niobate photonic integrated optoelectronic oscillator. Photonics Res. 12, 1283–1293 (2024). 36. Tao, Z. et al. Versatile photonic molecule switch in m-
ultimode microresonators. Light Sci. Appl. 13, 51 (2024). 37. Feng, H. et al. Ultra-high-linearity integrated lithium niobate electro-optic modulators. Photonics Res. 10, 2366–2373 (2022). 38. Yao, X. S. & Maleki, L. Optoelectronic microwave oscillator. J. Opt. Soc. Am. B 13, 1725–1735 (1996). 39. Peng, H. et al. High sensitivity microwave phase noise analyzer based on a phase locked optoelectronic oscillator. Opt. Express 27, 18910–18927 (2019). 40. Yu, Y. et al. Frequency stabilization of the tu-
nable optoelectronic oscillator based on anultra-high-q microring resonator. IEEE J. Sel. Top. Quantum Electron. 26, 1–9 (2019). 41. Singya, P. K., Shaik, P., Kumar, N., Bhatia, V. & Alouini, M.-S. A survey on higher-order QAM constellations: technical challenges, recent advances, and future trends. IEEE Open J. Commun. Soc. 2, 617–655 (2021). 42. Watteyne, T., Lanzisera, S., Mehta, A. & Pister, K. S. Mitigating multipath fading through channel hopping in wireless sensor networks. In Proc. 2010 IE-
EE International Conference on Communications 1–5 (IEEE, 2010).
43. Hwang, T., Yang, C., Wu, G., Li, S. & Li, G. Y. OFDM and its wireless applications: a survey. IEEE Trans. Veh. Technol. 58, 1673–1694 (2008).
44. Zhu, D. et al. Integrated photonics on thin-film lithium niobate. Adv. Opt. Photonics 13, 242–352 (2021). 45. Li, M. et al. Heterogeneously-integrated self-injection locked lasers on thin film lithium niobate. In Proc. 2024 Optical Fiber Communications Conference and Exhibition (OFC) 1–3 (IEEE, 2024). 46. Desiatov, B. & Lončar, M. Silicon photodetector for integrated lithium niobate photonics. Appl. Phys. Lett. 115, 121108 (2019).
47. Zhang, Y. et al. Monolithic lithium niobate photonic chip for efficient terahertz-optic modulation and terahertz generation. Preprint at https://doi.org/10.48550/arXiv.2406.19620 (2024). 48. Umezawa, T. et al. Bias-free operational UTC-PD above 110 GHz and its application to high baud rate fixed-fiber communication and W-band photonic wireless communication. J. Lightwave Technol. 34, 3138–3147 (2016).
49. Zhu, X. et al. Twenty-nine million intrinsic Q-factor monolithic microresonators on thin-film lithium niobate. Photonics Res. 12, A63–A68 (2024). 50. Jin, W. et al. Hertz-linewidth semiconductor lasers using CMOS-ready ultra-high-q microresonators. Nat. Photon. 15, 346–353 (2021).
Publisher’s note Springer Nature remains neutral with regard to jurisdictional claims in published maps and institutional affiliations.
Open Access This article is licensed under a Creative Commons Attribution 4.0 International License, which permits use, sharing, adaptation, distribution and reproduction in any medium or format, as long as you give appropriate credit to the original author(s) and the source, provide a link to the Creative Commons licence, and indicate if changes were made. The images or other third party material in this article are included in the article’s Creative Commons licence, unless indicated otherwise in-
 a credit line to the material. If material is not included in the article’s Creative Commons licence and your intended use is not permitted by statutory regulation or exceeds the permitted use, you will need to obtain permission directly from the copyright holder. To view a copy of this licence, visit http://creativecommons.org/licenses/by/4.0/.
© The Author(s) 2025

Methods
The principle and experimental details of OEO
The proposed architecture in the experiment used the phase modulation to intensity modulation (PM–IM) principle, using components, including an on-chip phase modulator, MRR, EDFA (Amonics, AEDFA-PA35-B-FA), PD and an electrical amplifier. Throughout the experiment, we used a thermoelectric cooler (TEC, Vescent) to regulate the chip temperature. For the 0.5–50 GHz range, we use the low-noise amplifiers (from low frequency to 50 GHz) with an RF power divider to monitor the oscillation frequency. In -
the 50–70 GHz range, we replaced the corresponding peripheral components with WR-15 waveguide-interface low-noise amplifiers and a WR-15 waveguide-interface RF power divider, supporting frequencies from 50 GHz to 75 GHz. The frequency void in the range of 64–67 GHz is equivalent to half of the FSR of the MRR. This phenomenon occurs because of the gain competition between two adjacent resonance peaks. This can be solved by coordinating the FSR of the MRR with the bandwidth of the amplifier. For the-
 high-frequency range (75 GHz and beyond), we substitute the peripheral components with WR-10 waveguide-interface amplifiers and a WR-10 waveguide-interface RF power divider. The inability to oscillate at 74–76 GHz is due to low gain at the edge of the bandwidth of the electrical amplifiers, which can be resolved by using an amplifier that can cover this frequency range. We collect data for 0.5–50 GHz using an electrical spectrum analyser (Keysight N9021B). For 50–90 GHz, we use frequency extensio-
n modules (Keysight M1971V and Keysight M1971E Opt003) to extend the measurement frequency range. To obtain data for the 90–115 GHz range, we mix the generated signal with an 80-GHz single tone generated by a microwave source (Keysight E8257D) with a x4 frequency multiplier. In Fig. 2g, each colour-coded data collection covers a 10-GHz range. The collection range for the 0–10 GHz band is limited to 1 GHz to prevent the second harmonic from affecting visualization. The difference in noise floor lev-
els across frequencies is mainly due to the varying response of the spectrum analyser across different frequency bands. More details about the experimental setup can be found in Supplementary Note IV.
Details of experimental communication link
The full-spectrum wireless communication is conducted using the independent transmitter (Tx) and receiver (Rx) ends. Three sets of antennas are used to cover specific bands: 2–18 GHz, 18–50 GHz and 75–110 GHz, whereas the amplifiers used in the wireless communication link cover the ranges of 0–40 GHz and 40–67 GHz. In the Tx end, the in-phase quadrature (IQ) modulator and optoelectronic oscillator (OEO) without an additional fibre delay line are driven by the same local laser (fo) with a 50% power-
 splitter to implement baseband modulation and carrier generation, respectively. Specifically, to eliminate the impact of bias point instability on communication quality, we used a commercial LN-based IQ modulator equipped with a built-in bias controller to ensure that the modulator operates in a carrier suppression single-sideband modulation state. Then the baseband modulation is implemented by injecting the I, Q signals generated through AWG. The TFLN chip used for OEO integrates a phase modulat-
or and an MRR for electro-optic conversion and mode selection. The light coupled out from the chip is amplified by an erbium-doped fibre amplifier (EDFA) and split by a 50% power splitter. One path is directed to a photodetector (PD) for conversion back to an electrical signal, which is amplified and fed back to the on-chip modulator for single-mode oscillation with centre frequency fc. The other path passes through an optical bandpass filter (BPF) to select the sideband that has not been filtered-
 by on-chip MRR, which has a centre frequency of fo + fc. The sideband extracted by BPF is then combined with the output of the IQ modulator and photomixed in PD to convert into electrical waveforms, the centre frequency of which is represented as fe = fc and the spectrum width is the same as the IQ signal generated through AWG. The waveform
is electrically amplified and emitted by the antenna. After 1.3 m of wireless propagation, the waveform is received at the Rx end by the second antenna. In the Rx section, the Rx modulator and the second OEO are driven by the same laser (fo2). We use a phase modulator for wireless–photonic conversion as it still has good linearity without bias control, which simplifies the complexity of the end-to-end experiment. The signal coupled out from the phase modulator is filtered to reserve one single sid-
eband and amplified by an EDFA. The signal coupled out from the phase modulator is processed through a band-notch filter (BNF) to suppress the carrier. Subsequently, the filtered signal is amplified using EDFA before being fed into the coherent receiver. The Rx end OEO has the same configuration as the Tx end OEO and is set to oscillate at the same frequency fc as the Tx end OEO. The light coupled out from Rx OEO passes through another BPF to select the sideband that has not been filtered by on-ch-
ip MRR. After amplification, this sideband can serve as the local oscillator for the demodulation of the signal. Along with the sideband-generated phase modulator, it is sent to a coherent receiver for demodulation and signal recovery. The laser used in our system is a commercially available hybrid co-packaged chip-based system, consisting of an III–V laser chip and a silicon-based integrated external cavity. The measured integrated linewidth is below 3 kHz. The high-speed PD for OEO oscillation i-
s fabricated using integrated photonic technology and is commercially available from Finisar (XPDV4121R). The balanced PD for baseband signal recovery, based on silicon photonics, offers a 3-dB bandwidth of nearly 50 GHz and is also commercially available, as used in our previous work51. In terms of fibre, the OEO used in the communication experiment does not involve an additional long fibre loop. Other fibre connections currently used in the system can be further removed through hybrid integratio-
n and co-package by butt coupling between these photonic chips. Moreover, by optimizing the butt-coupling loss of the TFLN chip, we demonstrated a low-power wireless communication link without the need for EDFAs. This reduced the total link power consumption to 4.8754 W, with all active components in the link implemented in integrated form. For a detailed description, please refer to Supplementary Note X. We also analyse the overall link noise figure, as shown in Supplementary Note III.
Digital signal processing
At the Tx, random binary bit streams are mapped into QAM symbols. The QAM symbols are up-sampled and subjected to root raised cosine pulse shaping with a roll-off factor of 0.05. The in-phase and quadrature paths of the QAM signal are loaded into the AWG and then transmitted. At the receiver side, Gram–Schmidt orthogonal normalization is first performed, followed by matched filtering. Subsequently, the signal is down-sampled from 128 GSa s−1 to two samples per symbol. Adaptive equalization and car-
rier recovery are then performed. The equalizer has a 2 × 4 MIMO structure. The tap coefficients of the equalizer are pre-converged using the constant modulus algorithm, and the pre-converged output is used for frequency offset estimation. Frequency offset estimation is achieved by taking the fourth power of the signal and identifying the highest spectral peak. Then, the equalizer in DD-LMS mode is used, and carrier phase estimation and compensation are performed within the update loop of the equa-
lizer using the blind phase search algorithm with 16 test angles. After performing equalization and carrier recovery, orthogonalization is applied to mitigate hybrid imperfections and modulator bias problems. Subsequently, symbol decisions are determined. BERs and EVMs are calculated to evaluate the performance of the system.
Data availability
The data used to produce the plots within this paper are available at Zenodo52 (https://doi.org/10.5281/zenodo.15876445).

Article
Code availability
The codes that support the findings of this study are available from the corresponding authors upon request.
51. Zhang, X. et al. High-coherence parallelization in integrated photonics. Nat. Commun. 15, 7892 (2024). 52. Tao, Z. et al. Data for “Ultrabroadband on-chip photonics for full-spectrum wireless communications”. Zenodo https://doi.org/10.5281/zenodo.15876445 (2025). 53. D’heer, C. & Reynaert, P. A fully integrated 135-GHz direct-digital 16-QAM wireless and dielectric waveguide link in 28-nm CMOS. IEEE J. Solid State Circuits 59, 889–907 (2023). 54. Guan, P. et al. A fully integrated QPSK/16-QAM D-
-band CMOS transceiver with mixedsignal baseband circuitry realizing digital interfaces. IEEE J Solid State Circuits 59, 3123–3141 (2024). 55. Mohammadnezhad, H., Wang, H., Cathelin, A. & Heydari, P. A 115–135-GHz 8PSK receiver using multi-phase RF-correlation-based direct-demodulation method. IEEE J. Solid State Circuits 54, 2435–2448 (2019). 56. Townley, A. et al. A fully integrated, dual channel, flip chip packaged 113GHz transceiver in 28nm CMOS supporting an 80Gb/s wireless link. In Proc. 202-
0 IEEE Custom Integrated Circuits Conference (CICC) 1–4 (IEEE, 2020). 57. Deng, W. et al. An energy-efficient 10-Gb/s CMOS millimeter-wave transceiver with direct-modulation digital transmitter and I/Q phase-coupled frequency synthesizer. IEEE J. Solid State Circuits 55, 2027–2042 (2020).
58. Dasgupta, K. et al. A 60-GHz transceiver and baseband with polarization MIMO in 28-nm CMOS. IEEE J. Solid State Circuits 53, 3613–3627 (2018).
59. Pang, J. et al. A 50.1-Gb/s 60-GHz CMOS transceiver for IEEE 802.11ay with calibration of LO feedthrough and I/Q imbalance. IEEE J. Solid State Circuits 54, 1375–1390 (2019). 60. Deng, W. et al. A D-band joint radar-communication CMOS transceiver. IEEE J. Solid State Circuits 58, 411–427 (2022). 61. Lu, L. et al. Design of a 60-GHz joint radar–communication transceiver with a highly reused architecture utilizing reconfigurable dual-mode Gilbert cells. IEEE Trans. Microw. Theory Tech. 73, 245–2-
57 (2025).
62. Grzyb, J., Rodrı́guez-Vázquez, P., Malz, S., Andree, M. & Pfeiffer, U. R. A SiGe HBT 215–240GHz DCA IQ TX/RX chipset with built-in test of USB/LSB RF asymmetry for 100+ Gb/s data rates. IEEE Trans. Microw. Theory Tech. 70, 1696–1714 (2021).
63. Lee, S. et al. An 80-Gb/s 300-GHz-band single-chip CMOS transceiver. IEEE J. Solid State Circuits 54, 3577–3588 (2019).
Acknowledgements This work was supported by the National Key Research and Development Program of China (no. 2022YFB2803700), the National Natural Science Foundation of China (grant nos. 623B2004, 62235002, 62327811, 62322501 and 12204021), the Research Grants Council, University Grants Committee (CityU 11212721, CityU 11204022, C1002-22Y and JRFS2526-1S01) and the Croucher Foundation (9509005). We thank the technical support provided by C. F. Yeung, C. W. Lai, O. Chan and L. Ho at HKUST, Nanosyste-
m Fabrication Facility (NFF) for the stepper lithography and PECVD process. We also thank S. Xu for improving the manuscript.
Author contributions Z.T., H.W., H.F., Y.G. and B.S. conceived the experiments. Z.T. and H.F. designed the TFLN-base devices. H.F. fabricated the chip. Z.T., H.W., Y.G., H.F. and B.S. conducted the experiments. Z.T., H.W., Y.G. and H.F. analysed the results, with the assistance of B.S., Y.T., C.H. and Y.H.; D.S. performed the chip-scale co-packaging. Y.G. and H.W. implemented the DSP algorithm. All authors participated in the writing of the paper. J.E.B., H.S., C.W. and X.W. supervised the project-
.
Competing interests H.F. and C.W. are involved in developing lithium niobate technologies at RhinoptiX Technology Ltd.
Additional information
Supplementary information The online version contains supplementary material available at https://doi.org/10.1038/s41586-025-09451-8.
Correspondence and requests for materials should be addressed to Haowen Shu, Cheng Wang or Xingjun Wang. Peer review information Nature thanks the anonymous reviewers for their contribution to the peer review of this work. Reprints and permissions information is available at http://www.nature.com/reprints.

Extended Data Table 1 | Benchmark comparison with electronic systems in wireless communication
Note: *: Not discussed. †: The negative value represents that the power of the undesired harmonic exceeds that of the carrier. ‡: The value is not shown; the bandwidth refers to the 3-dB bandwidth of the gain curve. §: Calculate only for cases where both Tx and Rx are included. The works without LO would have higher consumption than the nominal value. ||: Simulation result. ¶: Dependent on different types of low-noise amplifiers. #: The size of the TFLN chip. ✰:The antenna used in our work is a st-
andard horn antenna with a nominal gain of 20 dBi53–63.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:27.170Z
- **Text Length:** 60076 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
