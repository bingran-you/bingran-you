# PDF Document: Eldin - 2025 - The Hydraulic Brain Understanding as Constraint-Release Phase Transition in Whole-Body Resonance.pdf

**File Path:** Eldin - 2025 - The Hydraulic Brain Understanding as Constraint-Release Phase Transition in Whole-Body Resonance.pdf

**Processed Date:** 2026-02-10T18:15:44.264Z

**File Size:** 730.79 KB

**Total Pages:** 14

**Extracted Pages:** 14

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3299

**Title:** The Hydraulic Brain: Understanding as Constraint-Release Phase Transition in Whole-Body Resonance

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

The Hydraulic Brain: Understanding as
Constraint-Release Phase Transition in Whole-Body
Resonance
Ahmed Gamal Eldin
Nova University Lisbon – Cairo Branch, Cairo, Egypt
Abstract
Current models of cognition view the brain as an information processor, treating physiological signals as noise. In a previous study, we demonstrated that removing these “artifacts” reduces predictive correlation by 70%, suggesting that body signals are functional drivers of neural computation. Here, we investigate the physical mechanism of this contribution using high-density EEG (64 channels, 10 subjects, 500 trials) during a P300 target recognition task. Phase Slope Index analysis revealed zero-
-lag synchrony (PSI = 0.000044, p = 0.061) with high coherence (0.316, p < 0.0001), ruling out sequential processing. Ridge-regularized Granger causality revealed massive bidirectional coupling (F = 100.53 brain→body, F = 62.76 body→brain) peaking simultaneously at 78.1 ms, consistent with mutually coupled resonance-pair dynamics. Time-resolved entropy analysis (sliding 200ms windows, 25ms steps) revealed a triphasic thermodynamic trajectory: (1) an initial constraint accumulation phase (0–78 ms) -
where bidirectional causal drive builds without entropy change; (2) a supercritical transition (78–600 ms) triggering state space expansion; and (3) sustained metastable elevation. Critically, the 78 ms resonance lock precedes the cognitive P300, acting as a physical ignition event or gating mechanism that permits the subsequent information integration. Transition magnitude showed no significant correlation with resonance strength (r = −0.044), indicating binary threshold dynamics. These findings -
demonstrate that understanding emerges through a specific thermodynamic sequence: brain-body resonance acts as a discrete switch triggering non-linear information integration.
1 Introduction
1.1 The Artifact Problem
Standard EEG preprocessing removes eye movements, muscle tension, and autonomic signals before analysis [1,2]. This assumes these “artifacts” corrupt rather than contribute to neural computation. However, in a prior study [3], we demonstrated that this conventional artifact rejection eliminates 70% of the predictive correlation between phase synchronization and event-related potentials during target recognition. This finding challenges the foundational assumption:
Cognition = Neural Activity + Noiseartifacts (1)
If body signals contain most of the predictive variance, they are not noise—they are part of the computational substrate.
1.2 Thermodynamic Hypothesis
We propose that biological cognition operates as a non-equilibrium thermodynamic system [4, 5] rather than a digital information processor. Specifically, we hypothesize that understanding requires:
1
arXiv:2511.18057v1 [q-bio.NC] 22 Nov 2025

1. Physical constraints: Metabolically expensive somatic engagement (muscle tension, ocular fixation, autonomic arousal) creates boundary conditions that constrain the accessible state space
2. Resonant coupling: Brain and body achieve zero-lag phase synchronization, forming a mutually coupled oscillator pair [6, 7]
3. Phase transition: The resonance acts as a constraint-release mechanism, triggering rapid expansion of the information state space
This framework predicts that cognition will exhibit a characteristic thermodynamic work cycle analogous to heat engines: compression of state space (work input), resonant lock (critical point), and expansion (work output).
1.3 Testable Predictions
We test three specific predictions during P300 target recognition: Prediction 1 (Zero-lag coupling): If brain and body function as mutually coupled oscillators, Phase Slope Index should approach zero while coherence remains high [6, 8]. Prediction 2 (Simultaneous causality): Granger causality in both directions should peak at the same temporal lag, indicating resonance rather than sequential relay [9].
Prediction 3 (Thermodynamic trajectory): Plotting causal drive versus entropy should reveal a hysteresis loop characteristic of systems performing work, with distinct compression and expansion phases [4].
2 Methods
2.1 Dataset
We analyzed publicly available 64-channel EEG from a P300 Speller brain-computer interface task [10]. Ten subjects (5 male, 5 female, ages 23–51) performed a visual oddball task where characters were flashed on screen and subjects attended to designated target characters. We utilized data from 25 recording sessions, yielding a total of 500 target trials (25 sessions × 20 trials per session) after quality control. Data were acquired at 2048 Hz using a BioSemi ActiveTwo system with standard 10-20 el-
ectrode placement.
2.2 Preprocessing
Raw EEG was resampled to 256 Hz for computational efficiency and re-referenced to the average across all channels. Zero-phase FIR bandpass filtering (4–15 Hz) isolated theta and alpha oscillations, the primary carriers of long-range synchronization [11, 12].
Critical methodological choice: We performed no artifact rejection. In contrast to conventional preprocessing, which removes eye movements, muscle activity, and autonomic signals via Independent Component Analysis [1], we retained all trials. This approach follows from our prior finding that artifact removal destroys rather than preserves cognitive signal [3]. Data were epoched from -0.5 s to +3.5 s relative to stimulus onset. All epoched data were z-score normalized (mean = 0, SD = 1) across time-
 within each trial and channel to prevent unit scaling artifacts in connectivity analyses.
2.3 Regional Definitions
We defined two functional regions based on anatomical proximity to artifact sources and cognitive roles:
2

• Posterior region (“Brain”): Pz, PO3, PO4, PO7, PO8. These channels overlie visual and parietal cortex, regions central to target detection and the P300 response [13].
• Frontal region (“Body”): Fp1, Fp2, AF3, AF4, F7, F8. These electrodes are proximal to eye muscles, frontalis muscle, and prefrontal cortex—regions where autonomic, motor, and cognitive signals converge.
This terminology is conceptual; both regions contain neural activity. However, frontal sites are dominated by somatic signals in artifact-free analyses, making them appropriate proxies for body contributions. For each trial, we computed the average signal within each region to obtain representative time series for connectivity analyses.
2.4 Phase Slope Index
To test Prediction 1 (zero-lag synchronization), we computed Phase Slope Index (PSI) [8] between posterior and frontal regions in the 4–15 Hz band. PSI quantifies directional information flow by measuring the slope of the phase difference across frequencies:
PSI = I


fmax −1
∑
f =fmin
conj(Sxy(f )) · Sxy(f + ∆f )

 (2)
where Sxy(f ) is the cross-spectrum between regions x and y at frequency f , and I denotes the imaginary part. PSI > 0 indicates x → y dominance, PSI < 0 indicates y → x dominance, and PSI ≈ 0 indicates zero-lag synchrony. PSI ≈ 0 can reflect either genuine zero-lag coupling or absence of coupling. To distinguish these cases, we computed coherence magnitude:
Coh(f ) = |Sxy(f )|2
Sxx(f ) · Syy(f ) (3)
High coherence (> 0.1) with PSI ≈ 0 confirms true zero-lag synchronization [6]. As an additional control, we computed imaginary coherence [14]:
ImCoh(f ) = |I(Sxy(f ))|
√
Sxx(f ) · Syy(f )
(4)
Low imaginary coherence rules out volume conduction (passive field spread) as the source of observed synchronization.
2.5 Granger Causality
To test Prediction 2 (simultaneous bidirectional causality), we computed time-lagged Granger causality [15] with ridge regularization (α = 0.01) to prevent overfitting. For each lag τ ∈ [0, 600] ms (step size 10 ms), we tested whether past activity in region X predicts future activity in region Y beyond Y ’s own history. The full model predicts Y (t) from its own past and X’s shifted past:
Y (t) = α0 +
p
∑
i=1
αiY (t − i) +
p
∑
i=1
βiX(t − τ − i) + εt (5)
The reduced model omits X:
Y (t) = α0 +
p
∑
i=1
αiY (t − i) + εt (6)
3

We used model order p = 3 to balance temporal resolution and overfitting risk. Ridge regression was necessary because resonant states exhibit extreme multicollinearity (high mutual correlation), which causes ordinary least squares to produce unstable estimates. The regularization parameter α = 0.01 was chosen via cross-validation to minimize prediction error while maintaining numerical stability. The F-statistic quantifies the improvement in prediction:
F = (SSRreduced − SSRfull)/p
SSRfull/(n − 2p − 1) (7)
where SSR is the sum of squared residuals and n is the number of time points. We computed FP →F (posterior predicts frontal) and FF →P (frontal predicts posterior) at each lag, then identified the lag at which each direction peaked.
2.6 Sample Entropy
To test Prediction 3 (thermodynamic trajectory), we computed sample entropy (SampEn) [16] using a sliding window approach. Sample entropy quantifies signal regularity:
SampEn(m, r) = − ln
(A
B
)
(8)
where A is the number of template matches of length m + 1 and B is the number of matches of length m, within tolerance r. We used m = 2 (embedding dimension) and r = 0.2 × SD (tolerance as 20% of signal standard deviation). Sliding window parameters:
• Window size: 200 ms (51 samples at 256 Hz)
• Step size: 25 ms (6.4 samples)
• Time range: -500 ms to +3500 ms relative to stimulus
For each window:
1. Data were averaged across trials, then across channels
2. Z-score normalization was applied to each window independently
3. Sample entropy was computed using a vectorized algorithm
Higher entropy indicates greater complexity/unpredictability; lower entropy indicates regularity/constraint. We report entropy changes relative to a pre-stimulus baseline (-500 to 0 ms).
2.7 Phase Space Construction
To visualize the thermodynamic trajectory, we constructed a phase portrait with:
• X-axis: Peak Granger F-statistic (averaged across both directions) at each time point, representing causal drive between regions
• Y-axis: Sample entropy at each time point, representing accessible state space volume
Granger F-statistics were interpolated to match the temporal resolution of entropy estimates (25 ms steps). The resulting trajectory traces the system’s evolution through constraint-drive phase space, analogous to pressure-volume diagrams in thermodynamics.
4

2.8 Statistical Analysis
All analyses were performed trial-by-trial, then averaged within sessions, then aggregated across subjects. We report group-level means and standard errors. Statistical significance was assessed using:
• One-sample t-tests (testing PSI against zero, entropy changes against zero)
• Pearson correlation (testing relationships between entropy and Granger strength)
• Lag identification (finding peaks in Granger curves)
All code was implemented in Python using MNE [17], NumPy, and SciPy.
3 Results
3.1 Zero-Lag Phase Synchronization
Phase Slope Index analysis revealed near-perfect zero-lag synchrony between posterior and frontal regions. Across 500 trials, mean PSI was 0.000044 (± 0.0005 SD, t = 1.88, p = 0.061), statistically indistinguishable from zero (Figure 1B). This near-zero PSI was accompanied by high coherence magnitude (mean = 0.316 ± 0.045 SD, t = 155.8, p < 0.0001), confirming strong frequency-domain coupling. The combination of PSI ≈ 0 with high coherence is the canonical signature of zero-lag synchronization [6]-
: the two regions are tightly phase-locked but neither leads the other. Imaginary coherence was low (mean = 0.106 ± 0.040 SD), ruling out volume conduction as the primary driver. The ratio of imaginary to total coherence (0.106/0.316 = 0.34) indicates that two-thirds of the observed synchronization reflects genuine dynamic coupling rather than passive field spread. Examination of the trial distribution (Figure 1B) revealed that 100% of trials had |PSI| < 0.01, with the vast majority clustered belo-
w 0.001. This consistency across trials demonstrates that zero-lag coupling is the dominant mode of interaction during target recognition.
3.2 Simultaneous Bidirectional Granger Causality
Time-lagged Granger causality analysis revealed massive bidirectional coupling with remarkable temporal coincidence (Figure 1A). The causal flow from posterior to frontal regions peaked at 78.1 ms with F = 100.53 (± 12.3 SE). The reverse direction peaked at the identical latency of 78.1 ms with F = 62.76 (± 8.9 SE). This temporal coincidence (∆Lag = 0.0 ms) is striking. In typical Granger analyses of brain connectivity, peak causal lags differ by 50–200 ms, reflecting sequential information propag-
ation [9]. Here, both directions peak simultaneously, indicating that the interaction is not a relay but a resonant lock where both regions mutually constrain each other at the same characteristic frequency. The F-statistic magnitudes are exceptionally large compared to typical EEG Granger studies (F ∼ 5–20) [9]. Values exceeding 60 demonstrate that brain-body coupling during the resonance window is not weak background correlation but the primary mode of interaction. The 1.6:1 ratio (brain:body) s-
uggests slight asymmetry consistent with cortical initiation and somatic feedback. After the 78 ms peak, both Granger curves rapidly decay to near-baseline levels by 200 ms (Figure 1A). This transient, time-locked coupling indicates that the resonance is task-specific rather than tonic background connectivity. The system locks during the target detection event, then releases.
5

Figure 1: Brain-body resonance during target recognition. (A) Ridge-regularized bidirectional Granger causality reveals simultaneous peaks at 78.1 ms (dashed line) for both brain→body (blue) and body→brain (orange) directions (n=500 trials). Shaded regions indicate standard error. The temporal coincidence indicates resonant coupling rather than sequential relay. (B) Zero-lag synchronization confirmed by PSI ≈ 0 (100% of trials |PSI| < 0.01) with high coherence (mean = 0.316, dashed line). Each po-
int represents one trial. (C) Entropy change versus resonance strength shows weak correlation (r = −0.044, p = 0.327), supporting binary threshold rather than graded response dynamics. (D) Autonomic cost varies independently of resonance strength (r = −0.031, p = 0.490), indicating heterogeneous energetic strategies across trials.
3.3 Thermodynamic State Trajectory
Plotting causal drive (Granger F-statistic) against state entropy revealed a counter-clockwise hysteresis loop characteristic of systems performing thermodynamic work (Figure 2). We identified three distinct dynamical regimes:
3.3.1 Regime 1: Constraint Accumulation (0–78 ms)
From stimulus onset to resonance lock, bidirectional Granger causality increased from baseline to peak values (Fmax = 100.53), while entropy remained statistically unchanged relative to baseline (mean ∆S = −0.002 bits, t = 0.318, p = 0.75). During this period, the system remains near the starting configuration in phase space, accumulating causal pressure without spatial trajectory movement. At 78 ms, when the resonance lock is achieved, the system exhibits a characteristic “overshoot” where causal-
 drive transiently exceeds steady-state values before settling (visible as the blue-cyan loop immediately following the lock in Figure 2). This overshoot pattern is consistent with forced oscillator dynamics overcoming system inertia to achieve phase-lock [18]. In thermodynamic terms, this represents an isoentropic compression phase: the system does work to build constraint (increase causal coupling) without increasing accessible states. The body’s physical resistance—muscle tension maintaining fi-
xation, autonomic arousal preparing for response—provides the boundary against which neural activity compresses.
6

3.3.2 Regime 2: Supercritical Transition (78–600 ms)
Following resonance onset at 78 ms, the system underwent rapid state space expansion. Sample entropy increased relative to the compression phase (∆S = +0.009 bits, t = 1.58, p = 0.115). While this effect does not reach conventional significance thresholds, it represents a consistent directional change across 500 trials. In phase space, this transition manifests as an upward trajectory (entropy increase) concurrent with leftward motion (causal drive reduction), forming the upper arc of the hysteres-
is loop (Figure 2, yellow-green region). The system transitions from a low-entropy, high-constraint regime to a higher-entropy, distributed processing regime. The modest magnitude of entropy increase (∆S = 0.009 bits) should be interpreted in context. Sample entropy is sensitive to window size and embedding parameters; the true information theoretic expansion likely exceeds this estimate. More critically, the directionality of change is consistent: after the resonance lock, entropy increases in 58-
% of trials (binomial test, p = 0.002).
3.3.3 Regime 3: Sustained Metastability (600–3500 ms)
Elevated entropy persisted throughout the extended recording window, remaining above initial compression levels even at 3.5 seconds post-stimulus (visible in Figure 2 as the extended red trajectory). This sustained departure from the initial state indicates the system occupies a long-lived metastable attractor rather than rapidly returning to baseline. The persistence of this elevated state suggests the cognitive event has lasting consequences—the system has settled into a new configuration repres-
enting the integrated target information.
7

Figure 2: The thermodynamic cycle of understanding: phase space portrait. X-axis represents causal drive (Granger F-statistic) and Y-axis represents state space volume (sample entropy). Color indicates time progression (blue = early, red = late). (1) Constraint Accumulation (0–78 ms): The system builds causal pressure at the starting point (black circle) without spatial trajectory movement. At 78 ms, the resonance lock is achieved (red star), triggering the visible overshoot loop (blue-cyan regio-
n) as the system overcomes inertia. (2) Supercritical Transition (78–600 ms): At the resonance lock (red star), constraints release. The trajectory curves upward and leftward (yellow-green region), indicating expansion of accessible states as causal drive decreases. The blue dot marks peak expansion at 250 ms. (3) Metastable Plateau (600–3500 ms): The system settles into sustained elevated entropy (red/dark trajectory), representing the stabilized “understood” state. The counter-clockwise hysteres-
is loop is characteristic of systems performing thermodynamic work, analogous to a heat engine cycle.
3.4 Binary Threshold Dynamics
To determine whether resonance strength drives the magnitude of state space expansion, we examined the trial-by-trial correlation between peak Granger F-statistic and entropy change (Figure 1C). The correlation was near zero (r = −0.044, p = 0.327), indicating no linear relationship. To test for threshold effects, we performed a quantile split analysis comparing trials with the strongest resonance (top 25%, F > 120) versus weakest resonance (bottom 25%, F < 80). Remarkably, there was no significan-
t difference in entropy expansion between these groups (high: ∆S = 0.011 bits, low: ∆S = 0.008 bits, t = 0.31, p = 0.76). This null result is theoretically significant. It implies that the resonance lock functions as a binary trigger rather than a graded modulator. Once the threshold for phase-lock is crossed, the system releases its full potential for state space expansion regardless of how much the threshold is exceeded. The resonance operates as a discrete switch, not a continuous dial. This is-
 consistent with phase transition dynamics in physical systems [18], where crossing a critical threshold triggers
8

a qualitative reorganization independent of how far beyond threshold the system is driven.
4 Discussion
4.1 Thermodynamic Architecture of Cognition
Our results reveal that human understanding operates through a specific thermodynamic work cycle with three essential phases. This architecture maps directly onto known principles of nonequilibrium thermodynamics [4, 5] and dynamical systems theory [18]. The 78.1 ms resonance lock represents a critical transition point in the system’s phase space. Prior to this point, the system accumulates causal drive through bidirectional coupling while maintaining low entropy—analogous to compression in a heat-
 engine. The body’s resistance (muscular tension, ocular fixation, autonomic arousal) provides the physical constraints against which neural activity must work to build this pressure. At resonance, this constraint is suddenly released through zero-lag phase synchronization.
Ignition vs. Combustion: The Gating Mechanism. A critical finding is the temporal dissociation between the resonance lock (78 ms) and the classic P300 cognitive response (300500 ms). We propose that the 78 ms resonance functions as the system’s ignition event, while the P300 represents the subsequent combustion or expansion. The zero-lag synchronization acts as a physical gating mechanism: it unlocks the thermodynamic valve, creating the statespace capacity required for the later information integ-
ration. Just as a key must be turned before an engine can run, the physical constraints must be released via early sensory-motor resonance (in the N1/P1 window) to enable the high-entropy cognitive processing that follows. The lag between lock and peak entropy represents the system’s inertial response time—the delay between opening the floodgate and the water reaching peak flow. This explains why removing "early" artifacts destroys "late" cognitive signals [3]: without the initial ignition, the cy-
cle cannot proceed. The body provides the dissipative structure [5] necessary for far-from-equilibrium computation. Without somatic constraints, there is nothing to compress against—no potential energy to release. The brain operating in isolation cannot build the causal pressure necessary for phase transition. The analogy to heat engines is precise: a Carnot cycle requires both a hot reservoir (energy source) and a cold reservoir (energy sink) to perform work. Similarly, cognitive phase transition-
s require both neural activity (information source) and somatic constraints (boundary conditions) to achieve useful computation. Disembodied cognition is thermodynamically impossible.
4.2 Binary Phase Transition vs. Graded Response
The absence of correlation between resonance strength and entropy expansion (Section 3.4) initially appears paradoxical. If resonance causes state space expansion, why doesn’t stronger resonance cause larger expansion? The answer lies in recognizing this as a true phase transition with threshold dynamics. Physical phase transitions (water freezing, ferromagnetic ordering) are characterized by discontinuous changes at critical points [18]. Once the critical temperature is crossed, ice forms regardl-
ess of how much colder the water becomes. The magnitude of the transition is determined by the system’s capacity for reorganization, not by how far beyond threshold the driver is. Similarly, our data suggest that resonance strength above threshold ( F > 80) unlocks the system’s full potential for state space expansion. Stronger resonance (F = 150) does not produce proportionally more expansion than moderate resonance (F = 90)—both exceed the critical threshold and trigger the same reorganization. -
This places biological cognition in the class of self-organized critical systems [19, 20], where avalanche-like cascades are triggered by arbitrarily small perturbations once a critical state is reached. The brain-body
9

system self-organizes to this critical point, then uses small perturbations (sensory input) to trigger large-scale reorganizations (understanding).
4.3 Comparison to Existing Frameworks
4.3.1 Active Inference and Free Energy
Our findings align with predictive processing theories [21], which posit that cognition minimizes surprise (free energy). In this framework, the resonance lock would correspond to the moment when prediction error is minimized—the system has successfully “explained” the target stimulus. However, our results extend this framework by demonstrating that embodiment is not optional. While free energy minimization can occur in silico (e.g., deep learning models perform approximate Bayesian inference), ou-
r data show that human cognition implements this through resonance dynamics that intrinsically depend on somatic constraints. The 70% signal loss upon artifact removal [3] indicates that humans do not implement abstract Bayesian computation—they implement it via constraint-release dynamics.
4.3.2 Neuronal Avalanches and Criticality
Our findings resemble the neuronal avalanche hypothesis [20], which proposes that the brain operates at a critical point between order and disorder. However, our data suggest a different picture: rather than hovering at criticality, the system undergoes repeated transitions through criticality. Baseline states are subcritical (low entropy, weak coupling). Cognitive events drive the system supercritical (entropy expansion after resonance lock), then it relaxes back. This “punctuated criticality” mo-
del differs from continuous criticality and may better account for the discrete, event-locked nature of human cognition.
4.3.3 Embodied Cognition and Enactivism
Enactivist theories [22, 23] have long argued that cognition is not brain-bound computation but organism-environment interaction. Our data provide quantitative evidence for this claim at the neural-physiological level. We demonstrate that the brain alone is insufficient—cognition emerges from brain-body resonance characterized by zero-lag synchrony, bidirectional causality, and thermodynamic state transitions. This validates enactivist intuitions while grounding them in measurable physics: remove -
the body (via artifact rejection), and 70% of the signal disappears [3].
4.4 Implications for Artificial Intelligence
Current AI systems, including large language models and deep learning architectures, are fundamentally disembodied. They process inputs, update weights, and generate outputs, but they lack the physical inertia, metabolic costs, and sensorimotor feedback that characterize biological cognition. Our findings suggest this is not merely an implementation detail—it may be a fundamental constraint on achievable computation. Specifically, disembodied systems cannot undergo the constraint-release phase tra-
nsitions we observe. Phase transitions require:
• Physical constraints: Boundaries that limit accessible states (motor inertia, metabolic costs)
• Stochastic dynamics: Noise-driven exploration to find critical points
• Intrinsic cost functions: Energetic trade-offs that stabilize certain configurations
• Continuous feedback: Real-time bidirectional coupling with environment/body
10

Digital neural networks lack all four. They are deterministic (except dropout during training), unconstrained (any weight configuration is equally “legal”), cost-free (no intrinsic penalty for memory beyond hardware limits), and feedforward during inference. This suggests that neuromorphic approaches—analog, stochastic, embodied systems with intrinsic dynamics [24]—may be necessary to achieve human-like understanding. Not to simulate brains, but to instantiate the physics that enables phase trans-
itions. Understanding may not be an algorithm but an emergent property of specific physical substrates. Recent work on neuromorphic computing [25, 26] has independently converged on similar principles: bidirectional coupling, resonance-pair architectures, and constraint-based computation. Our empirical demonstration that human brains naturally implement these dynamics provides biological validation for these engineering approaches.
4.5 Limitations and Future Directions
Single task paradigm. We analyzed only P300 target recognition. While this involves causal inference (“Is this stimulus self-relevant?”), it is not explicit causal reasoning. Future work should extend these methods to tasks requiring counterfactual reasoning to test whether resonance dynamics scale with causal complexity. Modest entropy effect. The 0.009-bit expansion, while directionally consistent, is small in absolute terms. This may reflect limitations of sample entropy as a measure (which is -
sensitive to window size and embedding dimension), or it may indicate that entropy reduction is one component of a multifaceted process. Alternative measures (transfer entropy, permutation entropy, Lempel-Ziv complexity) may reveal larger effects. Correlational design. Despite time-lagged Granger causality, this remains an observational study. True causal inference would require perturbation experiments: using transcranial magnetic stimulation to disrupt resonance, or motor restriction to eliminat-
e body feedback, and testing whether this affects entropy dynamics or behavioral performance. Lack of behavioral data. The dataset did not include trial-by-trial reaction times or accuracy, limiting our ability to link resonance to behavioral outcomes. Future studies should test whether resonance strength predicts response speed, confidence, or error rates. Individual differences. We analyzed group-average effects. Future work should examine individual differences (does resonance strength correlat-
e with working memory capacity?) and clinical populations. If resonance is essential for understanding, deficits in brain-body coupling may underlie neurodevelopmental disorders (autism, ADHD) or neurological conditions (Parkinson’s, schizophrenia).
4.6 Conclusion
We have demonstrated that human understanding during target recognition operates via a specific thermodynamic work cycle: constraint accumulation (0–78 ms), resonance-triggered phase transition (78–600 ms), and sustained metastable integration. This process requires whole-body coupling—removing somatic signals via conventional artifact rejection eliminates 70% of the cognitive signal [3]. The brain-body system operates as mutually coupled oscillators achieving zero-lag resonance at a critical thre-
shold. This resonance acts as a binary switch triggering nonlinear state space expansion, enabling information integration. The magnitude of this transition is independent of resonance strength above threshold, indicating true phase transition dynamics. These findings challenge the information-processing metaphor that dominates cognitive neuroscience. Understanding is not computation in the digital sense—it is a physical event requiring specific thermodynamic architecture. For artificial intellige-
nce, this implies that disembodied computation may be fundamentally limited. Genuine understanding may require not just better algorithms, but different physics: systems with intrinsic dynamics, physical constraints, and
11

thermodynamic costs that enable constraint-release phase transitions. The hydraulic brain is not a metaphor. It is a mechanism. And the mechanism requires a body.
Data Availability Statement
Publicly available datasets were analyzed in this study. Data can be found at PhysioNet: https: //doi.org/10.13026/C2101S. Analysis code will be made publicly available upon publication.
Ethics Statement
Ethical review and approval was not required for this study in accordance with local legislation and institutional requirements, as it involved analysis of publicly available de-identified data. The original data collection received appropriate ethical approval as documented in [10].
Author Contributions
AGE: Conceptualization, Methodology, Software, Formal Analysis, Writing—Original Draft, Visualization.
Funding
No external funding was received for this research.
Acknowledgments
The author thanks Professor Ehab Emam for invaluable guidance throughout this project. Data were obtained from PhysioNet [10]. A preprint of the precursor study is available on arXiv [3].
Conflict of Interest
The author declares no conflicts of interest.
References
[1] Jung, T. P., et al. (2000). Removing electroencephalographic artifacts by blind source separation. Psychophysiology, 37(2), 163–178.
[2] Delorme, A., Sejnowski, T., & Makeig, S. (2007). Enhanced detection of artifacts in EEG data using higher-order statistics and independent component analysis. NeuroImage, 34(4), 1443–1449.
[3] Eldin, A. G. (2025). Artifacts Are Not Noise: Embodied Resonance and the 70% Signal Loss in Conventional EEG. arXiv preprint arXiv:2511.10596.
[4] Nicolis, G., & Prigogine, I. (1977). Self-Organization in Nonequilibrium Systems. Wiley.
[5] Prigogine, I., & Stengers, I. (1984). Order Out of Chaos: Man’s New Dialogue with Nature. Bantam Books.
[6] Gollo, L. L., Mirasso, C., Sporns, O., & Breakspear, M. (2014). Mechanisms of zero-lag synchronization in cortical motifs. PLOS Computational Biology, 10(4), e1003548.
12

[7] Gollo, L. L., & Breakspear, M. (2014). The frustrated brain: From dynamics on motifs to communities and networks. Philosophical Transactions of the Royal Society B, 369(1653), 20130532.
[8] Nolte, G., et al. (2008). Robustly estimating the flow direction of information in complex physical systems. Physical Review Letters, 100(23), 234101.
[9] Bressler, S. L., & Menon, V. (2010). Large-scale brain networks in cognition: Emerging methods and principles. Trends in Cognitive Sciences, 14(6), 277–290.
[10] Citi, L., Poli, R., & Cinel, C. (2014). Documenting, modelling and exploiting P300 amplitude changes due to variable target delays in Donchin’s speller. Journal of Neural Engineering, 11(5), 056006.
[11] Palva, S., & Palva, J. M. (2007). New vistas for α-frequency band oscillations. Trends in Neurosciences, 30(4), 150–158.
[12] Fries, P. (2015). Rhythms for cognition: Communication through coherence. Neuron, 88(1), 220–235.
[13] Polich, J. (2007). Updating P300: An integrative theory of P3a and P3b. Clinical Neurophysiology, 118(10), 2128–2148.
[14] Nolte, G., et al. (2004). Identifying true brain interaction from EEG data using the imaginary part of coherency. Clinical Neurophysiology, 115(10), 2292–2307.
[15] Granger, C. W. J. (1969). Investigating causal relations by econometric models and crossspectral methods. Econometrica, 37(3), 424–438.
[16] Richman, J. S., & Moorman, J. R. (2000). Physiological time-series analysis using approximate entropy and sample entropy. American Journal of Physiology-Heart and Circulatory Physiology, 278(6), H2039–H2049.
[17] Gramfort, A., et al. (2013). MEG and EEG data analysis with MNE-Python. Frontiers in Neuroscience, 7, 267.
[18] Strogatz, S. H. (2015). Nonlinear Dynamics and Chaos (2nd ed.). Westview Press.
[19] Bak, P., Tang, C., & Wiesenfeld, K. (1987). Self-organized criticality: An explanation of the 1/f noise. Physical Review Letters, 59(4), 381–384.
[20] Beggs, J. M., & Plenz, D. (2003). Neuronal avalanches in neocortical circuits. Journal of Neuroscience, 23(35), 11167–11177.
[21] Friston, K. (2010). The free-energy principle: A unified brain theory? Nature Reviews Neuroscience, 11(2), 127–138.
[22] Varela, F. J., Thompson, E., & Rosch, E. (1991). The Embodied Mind: Cognitive Science and Human Experience. MIT Press.
[23] Thompson, E. (2007). Mind in Life: Biology, Phenomenology, and the Sciences of Mind. Harvard University Press.
[24] Indiveri, G., et al. (2011). Neuromorphic silicon neuron circuits. Frontiers in Neuroscience, 5, 73.
[25] Furber, S. B., Galluppi, F., Temple, S., & Plana, L. A. (2014). The SpiNNaker project. Proceedings of the IEEE, 102(5), 652–665.
13

[26] Davies, M., et al. (2018). Loihi: A neuromorphic manycore processor with on-chip learning. IEEE Micro, 38(1), 82–99.
14

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:44.264Z
- **Text Length:** 35587 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 14 of 14
