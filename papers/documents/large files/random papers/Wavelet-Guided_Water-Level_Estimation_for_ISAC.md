# PDF Document: Salari et al. - 2025 - Wavelet-Guided Water-Level Estimation for ISAC.pdf

**File Path:** Salari et al. - 2025 - Wavelet-Guided Water-Level Estimation for ISAC.pdf

**Processed Date:** 2026-02-10T18:16:21.502Z

**File Size:** 13994.72 KB

**Total Pages:** 11

**Extracted Pages:** 11

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3414

**Title:** Wavelet-Guided Water-Level Estimation for ISAC

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

1
Wavelet-Guided Water-Level Estimation for
ISAC
Ayoob Salari, Kai Wu, Senior Member, IEEE, Khawaja Fahad Masood, Member, IEEE, Y. Jay Guo, Fellow, IEEE, and J. Andrew Zhang, Senior Member, IEEE
Abstract— Real-time water-level monitoring across many locations is vital for flood response, infrastructure management, and environmental forecasting. Yet many sensing methods rely on fixed instruments—acoustic, radar, camera, or pressure probes—that are costly to install and maintain and are vulnerable during extreme events. We propose a passive, low-cost water-level tracking scheme that uses only LTE downlink power metrics reported by commodity receivers. The method extracts per-antenna RSRP, R-
SSI, and RSRQ, applies a continuous wavelet transform (CWT) to the RSRP to isolate the semidiurnal tide component, and forms a summed-coefficient signature that simultaneously marks high/low tide (tideturn times) and tracks the tide-rate (flow speed) over time. These wavelet features guide a lightweight neural network that learns water-level changes over time from a short training segment. Beyond a single serving base station, we also show a multi-base-station cooperative mode: independent CWTs ar-
e computed per carrier and fused by a robust median to produce one tide-band feature that improves stability and resilience to local disturbances. Experiments over a 420 m river path under line-of-sight conditions achieve root-mean-square and mean-absolute errors of 0.8 cm and 0.5 cm, respectively. Under a non-line-of-sight setting with vegetation and vessel traffic, the same model transfers successfully after brief fine-tuning, reaching 1.7 cm RMSE and 0.8 cm MAE. Unlike CSI-based methods, the ap-
proach needs no array calibration and runs on standard hardware, making wide deployment practical. When signals from multiple base stations are available, fusion further improves robustness.
Index Terms— ISAC, LTE received-power, Tide, RSRP, RSSI, RSRQ, Water Level Sensing, Wavelet Transformation.
I. INTRODUCTION
F
LOODS are the most common and most expensive natural disasters on the planet. Between 2000 and 2019 they claimed more than 125 000 lives and caused about US$650 billion in direct damage worldwide [1]. Recent floods in New South Wales (NSW), Australia, show the local danger: the 2022–23 La Niña season broke a dozen river-level records, triggered the longest continuous state emergency service deployment on record, and left the insurance sector with losses of roughly AU$5 billion [2]. Up-to-the-minut-
e water-level information is therefore essential for issuing public warnings, closing roads and rail lines, planning dam releases, and modelling insurance exposure [3]. Unfortunately, the fixed sensor network is still too sparse in many regions, and sensor themselves are costly to install, hard to maintain, and often swept away by the very floods they monitor. Expanding coverage with low-cost, robust sensing has become a headline target of the United Nations “Early Warnings for All” initiative [4]-
. Conventional water-level monitoring still relies mainly on fixed sensors placed in the river. The simplest is the staff gauge: a painted ruler bolted to a bridge pier that operators read manually or with a camera. A step up is the vented pressure sensor, a small probe lying on the riverbed whose internal vent tube removes barometric effects so that the recorded pressure translates directly to depth. Both devices
Ayoob Salari, Kai Wu, Fahad Masood, Y. Jay Guo and J. Andrew Zhang are with Global Big Data Technologies Centre, the University of Technology Sydney, Ultimo, NSW 2007, Australia (e-mail: {ayoob.salari, kai.wu, khawajafahad.masood, jay.guo, andrew.zhang}@uts.edu.au).
need regular cleaning, checks that the height reference (the datum) has not shifted, and occasional flushing of the pipe that shelters the probe and damps out waves (often called a stilling well) [5], [6]. To cut this maintenance, many sites now fit non-contact acoustic rangers: an ultrasonic head under the bridge sends a short tone and times the echo from the water surface [7]. Low-power radar units work in the same way but are immune to air temperature and condensation, and are becoming common o-
n bridges and small overflow structures [8]. Satellite altimeters such as Jason-3 or Sentinel-3 give global coverage, but only every 9–27 days and with 10–20 cm accuracy once river-slope corrections are applied [9]. The newest alternative is camera sensing: a bank-mounted RGB camera tracks a painted marker or shoreline texture and can reach 2–3 cm when light is good, though accuracy falls in rain or fog [10]. Despite steady progress, practical obstacles still limit how far the above instruments ca-
n be rolled out. First is cost: a pressure-probe or radar node, its solar supply, and a telemetry modem together exceed US$2000, and dependable flood mapping needs many of them along every reach [7]. Once installed, storm maintenance becomes the dominant expense—debris and sediment clog stilling wells, ultrasonics mist over, and floating logs can shear an entire gauge from its mount [5]. Even where budgets allow, coverage gaps remain: the United States operates about 8000 river gauges for 5 millio-
n kilometres of waterways, leaving most urban catchments unmonitored [11]. At the other extreme, satellite altimeters see every major river but only every 9–27 days; their 10–20 cm uncertainty is acceptable for climatology yet
arXiv:2511.20936v1 [eess.SP] 26 Nov 2025

2
too coarse for flash-flood operations [9]. Camera systems are affordable, but heavy rain, fog, or power cuts can disable them when water levels rise [10]. In short, current methods struggle to be simultaneously dense, robust, and cheap. These limitations motivate the present study: repurposing the alreadypresent 4G/5G radio infrastructure—towers, handsets, and routine control signalling—as a complementary, low-maintenance water-level sensor network. Mobile broadband networks present an attractive -
sensing platform that already covers most populated terrain. The three Australian operators, for example, run more than 27000 4G/5G cells— on average one site every 4 km in metropolitan New South Wales, Australia —and similar densities are reported across Europe and North America [12]. Base station panels are typically mounted 15–40 m above ground on rooftops or monopoles, safely above even major flood crests, and every site carries standby power specified to survive at least 8 h of outage [13]. I-
mportantly, coverage is overlapping: a suburban handset sees three to six macro-cells from different operators and sectors, so the loss of any one tower leaves multiple independent links that can used. Because environmental information is embedded in routine downlink control signals — reference-signal received power (RSRP), signal strength (RSSI), and quality (RSRQ)— no extra spectrum, user handset modification, or licensed transmitter is required; only passive measurements at the receiver end [14-
]. These traits—dense footprint, flood-line elevation, built-in redundancy, and zero spectrum cost—make cellular infrastructure a compelling candidate for augmenting conventional water monitoring. Several RF-based studies have shown that environmental conditions can be inferred from changes in wireless signal propagation. Rainfall estimation has been demonstrated using commercial microwave backhaul links by correlating received signal strength with attenuation [15]–[17]. Other work has exploited c-
hannel-state information (CSI) from Wi-Fi and LTE testbeds to estimate soil moisture [18], [19], snow depth [20], and small-scale water levels in controlled tanks [21]. Passive backscatter tags have achieved millimetre-precision in labscale flood gauging [22], and low-power LoRa nodes have tracked tidal fronts in salt marshes [23]. Among these, the most comprehensive CSI-based framework to date is PMNsWaterSense [24], which extracts Doppler–delay–angle features from LTE and mmWave CSI using multi--
domain filtering and Kalman-based phase unwrapping. While it reports subcentimetre precision in controlled lab tests, its outdoor trial yields a 4.8 cm mean error and requires 30-minute CSI windows. More critically, the approach depends on raw CSI capture via SDR platforms and calibrated multi-antenna arrays—tools not available on commodity LTE devices. Despite their promise, these methods face three key barriers to widescale flood sensing: (i) reliance on high-rate CSI or custom hardware, (ii) se-
nsitivity to calibration and testbed setup, and (iii) limited multi-site, long-term validation. In contrast, our work uses only LTE power indicators (RSRP, RSSI, RSRQ) available on unmodified devices, introduces a wavelet-guided feature that isolates tidal dynamics, and demonstrates generalisation across two geometrically distinct river sites captured months apart.
In this work, we propose a wavelet-guided water level estimation framework that leverages downlink LTE signal power—specifically RSRP, RSSI, and RSRQ—as a passive hydrological sensing modality. Unlike CSI-based methods that rely on SDR hardware, wideband measurements, and antenna calibration, our system uses only standards-compliant LTE power metrics, accessible via commercial modems and handsets. We begin with a physical two-ray model that analytically links tide height to received power, and the-
n introduce a wavelet-based feature extractor that identifies tide-driven power variations with 5 min latency. These features, feed into a lightweight neural regressor that continuously estimates water level with centimetre-scale accuracy—without requiring transmitter-side control, infrastructure changes, or offline retraining. In addition, we extend the wavelet stage to fuse measurements from multiple base stations, which increases robustness while preserving the same online detector.
Our main contributions are:
1) We present the first field-scale study to passively monitor tidal water levels using RSRP, RSSI, and RSRQ from a live LTE macro-cell. The receiver setup includes multiantenna SDRs facing a 35 m high base station across a 420 m river span. Unlike prior lab-scale studies using CSI, our work demonstrates that standard LTE controlchannel power measurements are sufficiently sensitive to detect tidal effects in realistic outdoor environments. 2) We derive and validate a continuous wavelet transform (-
CWT) feature, that aggregates coefficients within the semidiurnal tide band and analytically shows it tracks the absolute value of the tide-change rate. This feature marks high/low tide (tide-turn times) and peak-flow instants in real time using a forward-buffered minimum/maximum detector. The wavelet method is mathematically linked to the two-path power model and is robust to boat wakes, clutter, and short data gaps. 3) Using a single-hidden-layer neural network trained on engineered wavelet and -
geometric features, we achieve 0.8 cm RMSE in LOS tests and 1.7 cm RMSE under obstructed, vegetation-covered NLOS settings. Crucially, we demonstrate cross-date generalisation: a model trained on one site and date transfers to a different day and geometry with no architectural change and only brief finetuning, highlighting the geometry-invariant structure of the features. 4) We extend the wavelet stage to a multi–base-station setting and demonstrate median-fusion of per-carrier CWT magnitude sums -
from two operators. The fused tideband feature follows the tide-rate while preserving clear maxima at peak flow and minima at tide-turn times. 5) We conduct an additional deployment at a separate site with co-located sonar ground truth and stable mains power, enabling multi-hour to multi-day captures. Continuous wavelet analysis of the water-level record directly recovers the semidiurnal tidal period, and the RSRP scalogram exhibits a stable low–millihertz energy band consistent with tide-driven p-
ropagation. Building on this long-duration dataset, we develop a compact feed-forward

3
(a) Two-ray geometry with direct and single-bounce paths. (b) Matlab Raytracing modelling of Experimental setup.
Fig. 1: Experiment set-up: (a) geometry, (b) Raytracing model
model that accurately estimates water level from LTE power features; on a two-day held-out test interval, it closely tracks the tidal envelope. 6) We release a complete end-to-end software stack—from LTE decoding and power extraction, through wavelet processing and feature engineering, to lightweight neural inference. The pipeline enables other researchers or agencies to replicate, adapt, or deploy our system using affordable SDR hardware and commodity LTE downlink signals, without requiring acces-
s to CSI or licensed transmitters.
The remainder of this paper is structured as follows. Section II introduces the physical geometry and derives a two-ray model linking received power to tide height. Section III develops the wavelet representation that isolates tide-driven content, defines the summed-coefficient feature linked to tide-rate, and extends the method to fuse measurements from multiple base stations. Section IV presents the experimental study, covering field deployments (6 Sep, 2 Dec, and a long-duration capture), prepr-
ocessing and wavelet diagnostics, feature engineering, the neural estimator, and quantitative results for same-day, crossdate, and multi–base-station settings. Section V concludes the paper.
II. SYSTEM MODEL
We model how the tide height h(t) (measured from mean sea level) changes the received power in a line-of-sight radio link. Geometry and hardware numbers are left for Section IV.
A. Two-Ray Channel
A transmitter at height ht and a receiver at height hr face each other across a water surface separated by horizontal distance d (Fig. 1a). The surface is smooth compared with the first Fresnel zone, so one specular1 echo is enough to capture the dominant multipath [25]. With one direct and one reflected path the complex baseband
1Mirror-like: angle of incidence equals angle of reflection.
signal on receive antenna k is
rk(t) = Ak
d e−j2πd/λh
1 + ρ(θ) e− 2π
λ ∆d(h(t))i
+ nk(t), (1)
where λ is the wavelength and
∆d(h) =
q
d2 + ht + hr − 2h 2 − pd2 +(ht − hr)2. (2)
Because d ≫ ht, hr the square roots expand in first order to
∆d(h) ≃ 2h (ht − hr)
d . (3)
B. Received-Power Variation
Taking the squared magnitude of (1) gives
Pr,k(h) = P0,k
h
1 + |ρ|2 + 2|ρ| cos 2π
λ ∆d(h) + φρ
i
, (4)
where φρ = arg ρ(θ). Modern LTE and 5 G panels use ±45◦ cross-polar ports, so the field has equal vertical and horizontal parts. Near the horizon (θ < 10◦) the vertical part reflects with phase π and the horizontal part with phase 0 [26]. The sum is still almost unit amplitude with phase ≈ π; hence we take |ρ| ≃ 1 and φρ ≃ π.
A full 2π cycle of the cosine happens when the tide shifts by
∆hcycle = λ d
2 (ht − hr) . (5)
Because λ is smaller at higher carrier frequency, which in turn improves the resolution with which gradual water-level changes can be tracked. Equations (4)–(5) show directly that the received power parameters (RSRP, RSSI, RSRQ) vary in step with the instantaneous tide height h(t).
C. Simulation–Experiment Cross-Check
The two-ray model in (1) assumes (i) a flat water surface that acts as a single mirror, (ii) only one dominant reflected path, and (iii) no time variation other than the slow change in tide height. Before relying on these assumptions, we verify them against a river-bank measurements.

4
1.5 1.4 1.3 1.2 1.1 1 0.9 0.8 0.7 0.6 0.5 Water Level (m)
0
10
20
30
40
50
60
RSRP
Actual measured RSRP Theoretical RSRP (Two-ray simulation)
Fig. 2: Two-ray simulation (red) versus measured LTE RSRP (blue) as a function of tide height. The match confirms that one reflected path captures the dominant dependence on water level.
a) Simulator.: Using the link geometry (ht, hr, d), the wavelength λ, and a specified tide profile h(t), we developed a simulator that computes the complex voltages of the direct and single-bounce paths for each water-height sample, superposes them, and converts the power to RSRP. No fitting, calibration, or learning is involved; the output depends solely on the physics captured by the two-ray equations.
b) Comparison with field data.: Figure 2 overlays the simulated envelope (red) on LTE RSRP measured next to the river (blue; instrumentation details are given in Section IV). Across the full range of tide heights, the simulated curve aligns with the measured values. The small point-to-point scatter is expected—secondary reflections from banks and moving boats are not included in the first-order model. The agreement confirms that variations in received power track the tide height in a predictable w-
ay. The next section introduces a wavelet-based framework that isolates the tidedriven component and pinpoints the moments when the tide reverses.
III. WAVELET-BASED TIDE-FEATURE EXTRACTION
Received-power traces exhibit two very different time scales: a slow, almost sinusoidal drift imposed by the tide and short-lived excursions caused by boats, fading, or transmitter drift. A representation that resolves a signal both in time and in frequency is therefore required. The CWT provides that capability and is widely used for geophysical and biomedical records with comparable behaviour [27]. We use the CWT because it handles our tide-affected signal recordings better than any other method-
. A short-time Fourier transform must choose one fixed window, forcing a compromise between time and frequency detail. The CWT sidesteps that compromise: its window stretches at large scales to follow the slow tide envelope and contracts at small scales to capture the rapid water-level changes. This flexible time–frequency view reveals exactly when the tide-driven part of the signal strengthens or weakens. Energy at tide scales stands out clearly, while rapid disturbances from boats, wind ripples,-
 or RF noise shift to higher pseudo-frequencies and are
easy to filter out. Because each wavelet analyses only a short segment of data, brief gaps from SDR retuning affect only that local region instead of corrupting the whole record. Finally, CWT implementations that keep every sample (without downsampling) run in time proportional to the data length, enabling real-time processing on modest embedded hardware. For a real-valued trace x(t) the CWT is
W (a, b) =
Z∞
−∞
x(t) 1
p|a| ψ∗ t−b
a dt, (6)
where • a > 0 is the scale: large a captures low-frequency, slow content, while small a resolves high-frequency, fast content; • b is the translation that slides the wavelet along the record; • ψ(t) is the mother wavelet—we use the analytic Morlet kernel ψ(t) = π−1/4ej2πf0te−t2/2.
With the Morlet kernel the centre frequency at scale a is f ≈ f0/a. Thus wavelet scales map directly to physical periods: for example, a 30 min oscillation appears at f ≈ (30 min)−1. Our tide-induced power variation falls between ∼ 10 min (fastest rise or fall) and ∼ 120 min (near standstill), so we analyse only the corresponding tide band
A=
n
a : f0/a ∈ [ fmin, fmax]
o
,
fmin = 1
120 Hz, fmax = 1
10 Hz.
(7)
Energy outside A arises from interference, boat wakes, or equipment noise and carries little information about the true water level. Restricting the transform in (6) to this band therefore focuses the analysis on exactly the scales that matter for tide estimation.
A. Connection to the two–ray model
Taking the magnitude square of the complex field in (1) and setting |ρ| ≃ 1, φρ ≃ π gives
Pr,k(h) = P0,k
h
1 − cos 2π∆d(h)/λ
i
. (8)
With the far-field approximation ∆d(h) ≈ (2h/d) (ht − hr) the bracket in (8) becomes a pure cosine in h. Absorbing the constant offset P0,k into A and the cosine amplitude into B gives the simplified baseband envelope
p h(t) = A + B cos k h(t) , k = 2π (ht − hr)
λd . (9)
This expression contains only measurable geometric quantities (ht, hr, d) and the carrier wavelength λ. Signal model: The recorded trace is
x(t) = p h(t) + η(t), (10)
where η(t) lumps together higher-frequency clutter (boat wakes, wind ripples, RF interference, and receiver noise). To relate the wavelet coefficients to the tide rate, we approximate the smooth envelope p h(t) = A+B cos(kh(t)) in the neighbourhood of a reference instant b. First we expand the tide height itself:
h(t) = h(b)+h′(b) ∆t+ 1
2 h′′(b) ∆t2+O(∆t3), ∆t ≜ t−b. (11)

5
(a) Sensor record
09:00
10:00
11:00
12:00
13:00
14:00
15:00
16:00
17:00
Time Sep 06, 2024
3
4
5
6
7
8
9
10
11
12
13
Summed Coefficient Magnitude
Summed Coefficients Estimated Tide Change Points based on CWT Estimated Max Flow Rate based on CWT X Sep 06, 2024, 16:22:40
X Sep 06, 2024, 10:03:59
X Sep 06, 2024, 13:09:33
(b) CWT of RSRP of LTE signals
Fig. 3: (a) Sensor-measured tide height. (b) Summed CWT magnitude S(b) (blue); high/low detections (red circles) and maximum-flow detection (black square).
Inserting (11) into p(h) and retaining terms only up to first order in ∆t gives
p h(t) = p h(b) + dp
dh h(b)
h′(b) ∆t + O(∆t2)
= p0(b) + p1(b) ∆t + O(∆t2), (12)
where
p0(b) = A + B cos kh(b) , (13)
p1(b) = −Bk h′(b) sin kh(b) . (14)
Here p0(b) represents the instantaneous power level, while p1(b) multiplies ∆t and contains the tide velocity h′(b); the factor −Bk sin(kh(b)) modulates its sign and magnitude but remains finite throughout the tide cycle. Quadratic and higher terms are O(∆t2). For the largest wavelet scale we use (a ≤ 10 min) the Morlet window covers at most |∆t| ≤ 20 min, so these higher-order terms are two orders of magnitude smaller than the linear term when compared with the tide period and can safely be negle-
cted.
B. Link between wavelet magnitude and tide rate
We now prove that the CWT magnitude is proportional to the local tide velocity h′(b). Lemma 1: For any scale a ∈ A whose pseudo-period is small relative to the tidal semidiurnal cycle,
|W (a, b)| = C(a, b) |h′(b)| + O(a2), (15)
with
C(a, b) = B k | sin(kh(b))| |M1| a1/2, M1 =
Z∞
−∞
τ ψ∗(τ ) dτ.
(16) Here k = 2π(ht − hr)/(λd) and B is the cosine amplitude in (9).
Proof: The CWT centred at b and scale a is
W (a, b) =
Z∞
−∞
x(t) ψ∗
a(t − b) dt, ψa(t) = a−1/2ψ(t/a).
(17) With x(t) = p(h(t)) + η(t) and η(t) zero-mean,
W (a, b) =
Z
p(h(t))ψ∗
a(t − b) dt + O(a2).
Insert the first-order envelope p(h(t)) = p0(b) + p1(b)∆t + O(∆t2) from (12):
W (a, b) = p0(b)R ψa∗(∆t) d∆t
+ p1(b)R ∆t ψa∗(∆t) d∆t + O(a2).
The first integral is zero (Morlet has zero mean). For the second, set τ = ∆t/a:
Z
∆t ψ∗
a(∆t) d∆t = a3/2
Z∞
−∞
τ ψ∗(τ ) dτ = a3/2M1.
Hence W (a, b) = p1(b) a3/2M1 + O(a2). Using p1(b) = −Bk h′(b) sin(kh(b)) from (14) and taking magnitudes gives (15) with C(a, b) as in (16). Constant B and factor k are set by geometry; the wavelet moment |M1| is fixed and non-zero; and | sin(kh(b))| varies smoothly between 0 and 1. Thus C(a, b) is bounded and slowly changing, so (15) shows the CWT magnitude is driven mainly by the tide speed: it is smallest when tide is changing (h′(b) ≈ 0) and grows as the flow accelerates.
C. Summed-coefficient feature
Lemma 1 states that for every scale a ∈ A the magnitude |W (a, b)| is proportional to the absolute tide rate |h′(b)| up to a slowly varying factor. Summing the magnitudes over all tide-band scales therefore reinforces the common |h′(b)| component while averaging out scale-specific clutter:
S(b) =
X
a∈A
|W (a, b)|. (18)

6
Algorithm 1 On-line detection of tide turn and peak flow
Require: Stream {S(bk)} sampled each minute; 1: Look-back Tback = 45 min; 2: Look-ahead Tfwd = 5 min 3: for k = 1, 2, . . . do
4: W ← {j : bk − Tback ≤ bj ≤ bk + Tfwd} 5: if S(bk) = min
j∈W S(bj ) then
6: Label bk as High/Low-Water 7: Skip the next 5 min of samples 8: else if S(bk) = max
j∈W S(bj ) then
9: Label bk as Max-Flow 10: end if 11: end for
Because the scale factor varies only gently with a, the curve S(b) inherits three key properties observed in every data set. First, local minima coincide with high and low water, where h′(b) ≈ 0. Second, broad maxima appear near mid-ebb and mid-flood, where the tide flows fastest. Third, the feature is robust, i.e., slight timing gaps or narrowband interference at one scale are averaged out by the sum.
D. Validation against a tide-sensor record
a) Online extraction.: By calculating S(bk) once per minute, Algorithm 1 buffers the last 45 min of history, waits a fixed 5 min to guard against future excursions, and tags the present sample as a tide turn if it is the lowest point in that window or as a peak flow if it is the highest. The procedure is single-pass and O(N ), so it runs easily in real time on an embedded SDR. Figure 3(a) shows the water-level record from the Meadowbank Wharf tide sensor maintained by the New South Wales monitorin-
g network [28]. Figure 3(b) plots the summed CWT magnitude S(b) of (18) derived from the 2.6598 GHz LTE capture taken a few metres from that sensor on the same day. Red circles mark the instants declared as HIGH/LOW-WATER and the black square marks the MAX-FLOW instant produced by the online Algorithm 1. The estimated times differ from the gauge times by less than the 15 min reporting interval of the sensor, demonstrating that the radio-based method tracks the true tide with practical accuracy.
E. Extension to multiple base stations
The analysis above treated a single serving cell. In practice, several LTE cells (distinct carriers and/or sectors) may be observable at the same receiver and time. Each cell views the same tide trajectory h(t) but with its own slowly varying scale and disturbance pattern, set by geometry, carrier frequency, and local clutter. We therefore apply the CWT per cell and then fuse the resulting tide–band features on a common time grid. Let l ∈ {1, . . . , L} index the detectable cells. For each cell l,-
 we construct an RSRP time series, compute the CWT Wl(a, b) over the tide band A in (7), and form the per–cell magnitude sum
Sl(b) =
X
a∈A
Wl(a, b) . (19)
TABLE I: Key link parameters
Quantity Symbol Value
Carrier frequency fc 2659.8 MHz LTE bandwidth B 20 MHz Tx height (centre) ht ≈45 m Rx heights hr,1:4 {1.95, 1.80, 1.65, 1.50} m Horizontal range d 420 m Snapshots per min – ≈10 Total captures – 4216 (≈ 7 h)
To remove cell-specific offsets and scale, we standardise Sl over a rolling window Wb (6–12 h suffices in practice) using the median and median absolute deviation (MAD),
S ̃l(b) = Sl(b) − medianu∈Wb Sl(u)
MADu∈Wb Sl(u) . (20)
All cells are placed on the same absolute time axis. If small micro-lags arise between cells (e.g., different look angles along the river), an optional integer shift ∆l can be estimated by
short-window cross-correlation and applied to S ̃l(b); in our captures these shifts were negligible, so ∆l = 0 was used. A fused tide-band feature is obtained by a robust aggregate over the available cells,
Sfused(b) = medianl S ̃l(b), (21)
which preserves the characteristic morphology—minima near slack water and broad maxima near peak flow—while suppressing cell-specific disturbances (boats, foliage, transient interference). The online detector of Algorithm 1 is then applied unchanged to Sfused(b) with the same 45 min lookback and fixed 5 min look-ahead, so moving from one to many cells does not alter latency; it increases robustness and spatial diversity.
IV. EXPERIMENTAL STUDY
A. Measurement set-up
Figure 4 brings together the link geometry, surroundings, and hardware. The LTE macro-cell providing coverage over the river operates at fc = 2.6598 GHz with a 20 MHz channel and sits ≈ 35 m above ground on a small ≈ 10 m-high building (−33.82528◦ S, 151.09172◦ E). Across the Parramatta River, 420 m away, a four-element log-periodic array receives the downlink (Fig. 4 c). The elements face the base station antennas, are mounted vertically, and are tilted 27◦ downward toward the water; their feed-p-
oint heights above the ground are hr,1:4 = {1.95, 1.80, 1.65, 1.50} m (see the side-elevation sketch in Fig. 4 b). Table I lists the key parameters. Each antenna feeds a 10 dB LNA and an FMCOMMS5/Zynq four-channel SDR; complex baseband I/Q is saved to .bb files at roughly ten snapshots per minute. A short MATLAB routine reads each file, down-converts, performs LTE cell-search and channel decoding, and logs the per-antenna RSRP, RSSI, and RSRQ values. Water level was measured on site every 10 min b-
y the first author and compared with the public tide record from the New South Wales monitoring network (Meadowbank Wharf station) [28]. Before building the learning features we inspected the raw metrics to verify that the received signal clearly responds to

7
(a) River-bank environment with base station tower (right) and receiver site (left). (b) Tx–Rx elevation schematic.
(c) Four-element log-periodic receive antenna array.
Fig. 4: Measurement set-up: (a) environment, (b) geometry, and (c) hardware.
0.6 0.7 0.8 0.9 1 1.1 1.2 1.3 1.4 Water Level (m)
5
10
15
20
25
30
35
40
45
RSRP (linear scale)
RSRP Antenna 1
(a) RSRP versus water level.
0.6 0.7 0.8 0.9 1 1.1 1.2 1.3 1.4 Water Level (m)
0.4
0.6
0.8
1
1.2
1.4
1.6
1.8
2
RSSI (linear scale)
104 RSSI Antenna 1
(b) RSSI versus water level.
0.6 0.7 0.8 0.9 1 1.1 1.2 1.3 1.4 Water Level (m)
0.12
0.14
0.16
0.18
0.2
0.22
0.24
0.26
0.28
0.3
0.32
RSRQ (linear scale)
RSRQ Antenna 1
(c) RSRQ versus water level.
Fig. 5: Scatter of cleaned signal metrics for Antenna 1 versus water level on 6 Sep 2024.
changes in water level. All records with zero RSRP, RSSI, or RSRQ were discarded and the powers converted from dBm/dB to linear scale. Remaining samples were cleaned with an IQR test (k=1) followed by a Hampel filter. Figure 5 shows the resulting RSRP, RSSI, and RSRQ of Antenna 1 plotted against the measured tide height. The near-sinusoidal envelopes—especially evident in RSRP and RSSI — demonstrate how strongly the signal strength is affected by the rising and falling tide.
B. Learning model and feature set
Each baseband file is decoded to obtain the four-antenna RSRP, RSSI and RSRQ traces. From these we build a feature vector that contains the per-antenna power readings, every pairwise difference and ratio (more robust to slow transmitter drift than the raw levels), and the sine and cosine of the semidiurnal tide phase φ(t) = 2πt/Ttide with Ttide ≈ 12.6 h. The phase is extracted by applying the CWT to the RSRP of the signal and computing its scalogram. By identifying and selecting the frequency comp-
onent that remains dominant over time—corresponding to the tidal cycle—we can trace the phase evolution. Since the tidal period varies across different locations, this approach enables automatic, location-specific extraction of the tide cycle directly from the captured signal data. All features are standardised to zero mean and unit variance before learning. The regressor is a single-hidden
09:00 10:00 11:00 12:00 13:00 14:00 15:00 16:00 17:00 DateTime Sep 06, 2024
0.4
0.6
0.8
1
1.2
1.4
1.6
Water Level (m)
Training Data Actual Test Data Estimation
Fig. 6: Water-level estimation on 6 Sep 2024. Black ×: training segment; blue dashed: unseen test segment; red: water level estimation. Grey gaps correspond to missing SDR files.
layer feed-forward neural network with 40 hyperbolic-tangent neurones and a linear output, trained once on the first 60 % of the record and then applied in a streaming fashion to the remainder.

8
(a) Receiver site on 2 Dec 2024 — trees obstruct the lineof-sight.
09:00 10:00 11:00 12:00 13:00 14:00 15:00 16:00 17:00 DateTime Sep 06, 2024
0.4
0.6
0.8
1
1.2
1.4
1.6
Water Level (m)
Fine-tune Data Actual Test Data Predicted
(b) Model trained on 2 Dec, tested on 6 Sep.
Fig. 7: Generalisation across measurement dates and propagation conditions.
C. Single-day evaluation
The seven-hour record of 6 September 2024 comprises 4216 snapshots, roughly ten captures per minute. Snapshots are ordered in time; the first 60 % form the training set, the next 5 % provide an early-stopping check, and the final 35 % are held out for test. After training, each new snapshot is converted to features, passed through the network, and an online water-level estimate is produced. The overall latency is determined by the 5 min forward window required by the wavelet procedure. Figure 6 co-
mpares the neural estimate with the reference water level reported by the New South Wales monitoring network [28]. Over the unseen segment the model attains a root-mean-square error of 0.8 cm and a mean-absolute error of 0.5 cm. These sub-centimetre errors, achieved without sitespecific tuning, demonstrate that the wavelet-guided feature set, coupled with a modest neural network, is sufficient for precise, real-time water-level tracking.
D. Cross-date validation: training 2 Dec, testing 6 Sep
To verify that the model remains effective without a clear line-of-sight reflection, a second data set was acquired on 2 December 2024 at a point approximately 510 m from the same base station and 41 m back from the river bank. The line-of-sight between the array and the water was obstructed by trees, and ferries passed the site frequently during the sixhour recording (see Fig.,7a). The four log-periodic elements were mounted at heights of 2.45, 2.30, 2.15, and 2.00 m and tilted 27◦ toward the riv-
er. A total of 2 933 baseband captures were logged on the usual fc = 2.6598 GHz, 20 MHz LTE carrier. The neural network architecture and feature pipeline are kept unchanged. The network is first trained on the full 2 Dec record ("train-from-scratch"). To adapt to the new date without seeing the entire 6 Sep data stream, the first 10 % of 6 Sep
snapshots (about 410 files) are used for a brief fine-tuning step; the remaining part of data are then fed to the network in chronological order and the output is compared with the tide sensor reference. Figure 7b shows the result. Despite dense vegetation and repeated ferry wakes, the network follows the true tide with a root-mean-square error of 1.7 cm and a mean-absolute error of 0.8 cm over more than five hours of previously unseen data. The performance remains within a centimetre of the line--
of-sight benchmark of Section IV-C, demonstrating that the wavelet-guided feature set captures geometry-invariant structure and allows the small neural regressor to transfer successfully between dates, sites, and propagation conditions.
E. Long-duration passive capture and CWT validation at 763 MHz
At our initial two riverbank deployments (6 Sep. and 2 Dec.), battery-powered operation limited continuous captures to 6–8 h. Using the CWT, these datasets already reveal the semidiurnal tidal component (≈12.6 h). Nevertheless, because they cover less than a full tidal cycle, the evidence is partial and susceptible to boundary effects. To quantify the period conclusively from data alone and to support model design without external priors, we therefore conducted an additional long-duration passive -
capture at a separate site with stable mains power and co-located sonar water-level ground truth, complementing the earlier deployments. We deployed a passive receiver at the UTS Haberfield Rowing Club on the Parramatta River (Fig. 8). The receiver is an SDR connected to two indoor monopole antennas mounted on a whiteboard, operating in NLoS relative to surrounding infrastructure. A high-precision sonar water-level sensor was installed under the wharf to provide ground truth. Although multiple LTE-
 cells across several bands were observable at

9
Fig. 8: Long-duration passive capture site at the UTS Haberfield Rowing Club. An indoor SDR with two monopole antennas records LTE downlink signals (Band 28, 763 MHz), while a sonar gauge under the wharf provides water-level ground truth.
this location, all analysis here uses Band 28 (763 MHz), which provided the strongest and most stable measurements. This operator-independent, indoor passive deployment—requiring no interaction with the cellular network or site-specific infrastructure—enabled multi-hour to multi-day captures spanning full tidal cycles. Both the sonar water level and LTE time series were uniformly resampled to a 210 s grid and preprocessed with robust outlier suppression and low-pass filtering. We then computed the-
 CWT of the tide signal. The scalogram exhibits a clear energy ridge in the mili-Hertz (mHz) range associated with semidiurnal tides (Fig. 9). The peak frequency fpeak lies near 0.022 mHz, implying
T= 1
fpeak
≈ 12.6 h,
which matches the expected semidiurnal tide at this site. This confirms that long-duration captures here allow direct measurement of the tidal periodicity from data without external priors. Applying the identical preprocessing and CWT to the RSRP series at 763 MHz reveals a distinct low-frequency ridge in the mHz range (Fig. 10). In a CWT scalogram, a ridge denotes a contiguous time–frequency track of elevated coefficient magnitude, evidencing a persistent oscillatory component. Here, the ridge in-
dicates that cyclic changes in water level modulate the path difference between direct and water-reflected propagation, producing a corresponding cyclic variation in received power. We do not assume equality between the radio and tide periods; it suffices that a stable low–mHz component is present in RSRP as expected from tide-driven multipath. These observations motivate the use of wavelet-derived features and cyclic structure in the learning pipeline. Using the same 763 MHz long-duration dataset-
, we trained a compact feed-forward neural network to estimate water level from LTE link metrics (two antennas) and time features. The data were split chronologically into 75% training, 10% validation, and 15% test. Model selection was based on the validation set; the final model was then trained on
Fig. 9: CWT of the tide series during the long-duration capture (763 MHz session timeline). A strong ridge around 0.022 mHz corresponds to a ∼12.6 h semidiurnal tide.
Fig. 10: CWT of RSRP at 763 MHz during the long-duration capture. A persistent low-frequency ridge (contiguous band of high wavelet magnitude) appears in the millihertz range, indicating a stable oscillatory component in received power driven by tide-induced multipath.
train+validation and applied once to the held-out two-day test period. On this test set the model achieved RMSE= 8.785 cm and MAE= 7.257 cm (train+validation RMSE= 1.262 cm, MAE= 1.012 cm). The estimates closely follow the ground truth and capture the tidal envelope; short-timescale variations visible in the sonar record, including waves generated by boat traffic, appear as higher-frequency perturbations in the ground truth. Figure 11 illustrates the estimated water level (red) against the ground -
truth (blue) over the test interval.
F. Multi–base-station wavelet fusion for tide–flow and turn detection
To assess robustness when several base stations are visible at the same receiver, we used the site of Section IV-E and monitored two downlink carriers from different operators: Optus at 1857.5 MHz and Vodafone at 2117.5 MHz (Fig. 12a). For each base station we formed the RSRP time series, computed the CWT over the tide band, and summed the

10
Jul 09, 12:00 Jul 10, 00:00 Jul 10, 12:00 Jul 11, 00:00 Time 2024
260
280
300
320
340
360
380
400
420
Tide Height (cm)
Grand Truth Estimated
Fig. 11: Neural-network water-level estimation on the 763 MHz long-duration dataset. Estimated water level (red) versus sonar ground truth (blue) over the two-day test period. The model reproduces the tidal variation; higherfrequency perturbations from waves and boat wakes are visible in the ground truth.
wavelet magnitudes across scales to obtain a per–base-station tide feature Sl(b). Each Sl(b) was standardised with a robust 9 h rolling median/MAD and aligned on a common time axis. The fused curve Sfused(b) was then taken as the pointwise median across the two base stations and resampled to a 1 min grid. Figure 12b plots Sfused(b) against the co-located tide record. The fused tide-band feature preserves the characteristic shape seen with a single base station—peaks when the flow is fastest and mi-
nima when the tide is high/low (tide-change times)—while suppressing base-station–specific disturbances (boats, clutter, or sector scheduling differences). The same online detector of Algorithm 1 is applied directly to Sfused(b). For learning, per–base-station features (RSRP/RSSI/RSRQ levels and within-base-station differences/ratios) can be zscored per base station and concatenated together with Sfused(b). If a base station is intermittently unavailable, its features are zero-imputed and flagged -
by a binary availability mask so the regressor benefits from diversity when present and remains stable when only a subset is visible. In this paper, however, all reported neural-network results (Section IV-B) use a single serving base station; they already achieve strong accuracy, so we did not need multi–base-station learning for the main results. We nevertheless show the wavelet-level multi–base-station fusion and its outcomes here to demonstrate how the approach extends when multiple carriers a-
re available.
V. CONCLUSION
This paper presented a physics-guided, wavelet-based framework that converts standards-compliant LTE power metrics (RSRP, RSSI, RSRQ) into centimetre-scale water-level estimates. A continuous wavelet transform isolates tide-driven structure in the radio signal and produces a summed-coefficient feature that marks high/low-tide times and captures the tiderate (flow speed) with low latency. Using only receiverside measurements and commodity hardware—without CSI,
array calibration, or network cooperation—the method delivers continuous water-level tracking. Beyond the two riverbank deployments, we conducted an operator-independent long-duration study at a different location (UTS Haberfield), using a different carrier frequency and an indoor passive setup with co-located sonar ground truth. The wavelet scalogram of the tide record recovers the semidiurnal period directly from data, and a compact model driven by LTE power features tracks the tide over a two-d-
ay held-out interval. These results indicate that the approach is not tied to a particular site, frequency, or capture configuration and can operate with commodity receivers in a fully passive manner. We also demonstrated a multi–base-station extension at the wavelet level. Independent CWTs from two operators were median-fused to produce a single tide-band feature that continues to indicate maximum-flow peaks and high/low-tide minima while smoothing base-station-specific disturbances. This shows h-
ow the framework scales to cooperative sensing settings where multiple carriers are available. We have shown that, across different locations, systems, frequencies, and setups, accurate water-level estimation is achievable from downlink LTE power metrics without CSI, and we demonstrated a wavelet-level multi-base-station fusion that robustly detects tide turns and peak-flow times. Building on this, our next steps are to (i) extend the same waveletguided approach to 5G NR using standard NR power me-
trics while keeping the CWT/summed-coefficient core unchanged; (ii) add water-level estimation from uplink signals as an independent channel to increase resilience; and (iii) integrate rainfall estimation into the model—using downlink signal behaviour—so the system jointly reports water level and rain.
REFERENCES
[1] “Global assessment report on disaster risk reduction 2019,” United Nations Office for Disaster Risk Reduction, 2019, available: https: //www.undrr.org/gar2022. [2] “Insurance catastrophe resilience report — nsw floods 2022–2023,” Insurance Council of Australia, 2023, available: https://www.insurancecouncil.com.au. [3] “Manual on flood forecasting and warning,” World Meteorological Organization, Tech. Rep. WMO No. 1072, 2021. [4] “Early warnings for all — executive action plan 2023–2027,” Unite-
d Nations Office for Disaster Risk Reduction, 2022, available: https: //www.un.org/climatechange.
[5] S. E. Rantz, Measurement and Computation of Streamflow, Volume 1: Measurement of Stage and Discharge. U.S. Geological Survey, 1982. [6] W. M. Organization, Guide to Hydrological Practices, 6th ed., ser. WMO No. 168, 2010. [7] M. Muste and J. Hauet, “Non-contact approaches for river flow monitoring,” Wiley Interdisciplinary Reviews: Water, vol. 3, no. 5, pp. 702–723, 2016. [8] T. Birkhölzer and F. Lüthi, “Application of fmcw radar for bridgemounted water-level monitoring,” in Proc. IEEE Int. Ra-
dar Conf., 2020, pp. 386–391. [9] Y. Shao and Y. Feng, “River water level estimation with sentinel-3 altimetry,” Remote Sensing, vol. 11, no. 21, p. 2532, 2019. [10] J. Hou and Z. Li, “Video-based water level measurement using shoreline feature tracking,” IEEE Geoscience and Remote Sensing Letters, vol. 16, no. 7, pp. 1099–1103, 2019. [11] U. G. Survey, “National water information system—surface water data for the U.S.” 2023, accessed Jan. 2025. [Online]. Available: https://waterdata.usgs.gov/nwis-
 [12] GSMA Intelligence, “Mobile infrastructure statistics 2024,” 2024, accessed Jan. 2025. [Online]. Available: https://www.gsma.com/ mobileeconomy

11
(a) Receiver and two serving base stations (Optus 1857.5 MHz; Vodafone 2117.5 MHz).
06:00 08:00 10:00 12:00 14:00 16:00 18:00 20:00 22:00 Time Jul 05, 2024
-3
-2
-1
0
1
2
3
Sfused
-2
-1.5
-1
-0.5
0
0.5
1
1.5
Tide
Sfused (Rate of Tide change) Tide
Max-Flow
Min-Flow
(b) Fused tide-band feature Sfused and tide record. Sfused reflects the tide-rate: peaks mark maximum-flow and minima coincide with high/low tide (tide turns).
Fig. 12: Multi–base-station wavelet fusion. Independent CWTs per carrier are median-fused to obtain a single tide-band feature that tracks the tide-rate (flow speed) over time.
[13] A. Communications and M. Authority, “Telecommunications resilience—performance requirements and guidance,” ACMA, Tech. Rep. ACMA/ENG/22-34, 2022. [Online]. Available: https: //www.acma.gov.au [14] M. Polese, A. Roy, and F. Restuccia, “Communications and sensing in 5g and beyond: A survey,” IEEE Communications Surveys & Tutorials, vol. 24, no. 3, pp. 1749–1799, 2022. [15] H. Leijnse, R. Uijlenhoet, and P. Hazenberg, “Microwave link rainfall estimation in the netherlands,” Water Resources Resea-
rch, vol. 43, p. W04512, 2007. [16] A. Overeem, H. Leijnse, and R. Uijlenhoet, “Country-wide rainfall maps from cellular communication networks,” PNAS, vol. 110, no. 8, pp. 2741–2745, 2013. [17] T. Kjeldsen and J. o. Andersen, “High-resolution rainfall mapping using 5g millimetre-wave links,” in Proc. IEEE ICC, 2021, pp. 1–6. [18] M. Chen and X. Wang, “Soil moisture estimation using wi-fi csi,” IEEE Sensors Letters, vol. 1, no. 6, pp. 1–4, 2017. [19] H. Li and Y. Zhao, “Low-cost lora system for di-
stributed soil-moisture monitoring,” in Proc. IEEE GLOBECOM, 2020, pp. 1–6. [20] K. Larson and E. Small, “Using gps multipath to measure snow depth,” GPS Solutions, vol. 13, pp. 159–166, 2009. [21] Y. Guo and S. D. Blostein, “Water-level tracking via lte channel state information,” IEEE Access, vol. 9, pp. 14 725–14 735, 2021. [22] H. Chu and R. Sarathi, “Battery-less rfid flood gauge with centimetre accuracy,” in Proc. IEEE RFID, 2018, pp. 1–8. [23] J. Li and P. O’Brien, “Tide height monitoring u-
sing lora remote stations,” IEEE Internet of Things Journal, vol. 10, no. 4, pp. 3421–3432, 2023. [24] Z. Wang, J. A. Zhang, K. Wu, and Y. J. Guo, “Water level sensing via communication signals in a bi-static system,” arXiv preprint arXiv:2505.19539, 2025. [25] C. A. Balanis, Antenna Theory: Analysis and Design, 4th ed. Wiley, 2021. [26] 3GPP, “Study on channel model for frequencies from 0.5 to 100 GHz,” 3rd Generation Partnership Project, Tech. Rep. TR 38.901, v16.1.0, Dec. 2020.
[27] S. Mallat, A Wavelet Tour of Signal Processing, 2nd ed. San Diego, CA: Academic Press, 1999. [28] (2024) Meadowbank wharf tide times. WillyWeather. Accessed 6 Sep. 2024. [Online]. Available: https://tides.willyweather. com.au/nsw/sydney/parramatta-river--meadowbank-wharf.html

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:21.502Z
- **Text Length:** 47867 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 11 of 11
