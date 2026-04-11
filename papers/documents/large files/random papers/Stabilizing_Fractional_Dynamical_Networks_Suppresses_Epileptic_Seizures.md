# PDF Document: Wang et al. - 2025 - Stabilizing Fractional Dynamical Networks Suppresses Epileptic Seizures.pdf

**File Path:** Wang et al. - 2025 - Stabilizing Fractional Dynamical Networks Suppresses Epileptic Seizures.pdf

**Processed Date:** 2026-02-10T18:17:53.308Z

**File Size:** 11847.37 KB

**Total Pages:** 29

**Extracted Pages:** 29

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3610

**Title:** Stabilizing Fractional Dynamical Networks Suppresses Epileptic Seizures

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Stabilizing Fractional Dynamical Networks Suppresses Epileptic
Seizures
Yaoyue Wang,∗ Arian Ashourvan,† Guilherme Ramos,‡ Paul Bogdan,∗ and Emily A. Pereira§
Abstract
Medically uncontrolled epileptic seizures affect nearly 15 million people worldwide, resulting in enormous economic and psychological burdens. Treatment of medically refractory epilepsy is essential for patients to achieve remission, improve psychological functioning, and enhance social and vocational outcomes. Here, we show a state-of-the-art method that stabilizes fractional dynamical networks modeled from intracranial EEG data, effectively suppressing seizure activity in 34 out of 35 total spon-
taneous episodes from patients at the University of Pennsylvania and the Mayo Clinic. We perform a multi-scale analysis and show that the fractal behavior and stability properties of these data distinguish between four epileptic states: interictal, pre-ictal, ictal, and post-ictal. Furthermore, the simulated controlled signals exhibit substantial amplitude reduction (49% average). These findings highlight the potential of fractional dynamics to characterize seizure-related brain states and demonst-
rate its capability to suppress epileptic activity. Keywords: epilepsy, fractional-order systems, seizure control, intracranial EEG, network dynamics
Introduction
Epilepsy, a disease characterized by unprovoked seizures in the brain, affects more than 50 million people worldwide, and it accounted for $200 billion in direct medical costs in the U.S. alone between 19932019 [1]. Effective and efficient treatment relies on accurately characterizing seizure dynamics to design targeted interventions [2]. To address these challenges, several questions present themselves, including
1. Can we develop a mathematical framework to distinguish the four epileptic states: interictal, pre-ictal, ictal, and post-ictal?
2. Can we leverage this mathematical framework to develop a personalized method to suppress epileptic seizures?
An accurate mathematical framework for characterizing seizure dynamics is essential for effective treatment. Dynamical network models [3] have emerged as a clear winner, allowing researchers to draw conclusions regarding the brain’s topology and function. Many works have focused on linear time-invariant dynamical networks to model and even control for epileptic activity [4–6]. However, recent evidence suggests that the brain exhibits multi-scale dynamics [7, 8], which is not captured by linear tim-
e-invariant models [9–11]. Fractional-order dynamical networks, which originated in physics and economics and quickly found their way into engineering applications [12–18], offer a middle ground between linear simplicity and multi-scale complexity. These networks accurately capture the multi-scale dynamics present in neural signals as well as
∗Y. Wang (corresponding author) and P. Bogdan are with the Ming Hsieh Electrical and Computer Engineering Department, University of Southern California, USA. yaoyuewa@usc.edu, pbogdan@usc.edu †A. Ashourvan is with the Psychology Department, University of Kansas, USA. ashourvan@ku.edu ‡G. Ramos is with Dept. of Computer Science and Engineering, Instituto Superior Te ́cnico, University of Lisbon, Portugal and Instituto de Telecomunicac ̧ ̃oes, 1049-001 Lisbon, Portugal. guilherme.ramos@tecnico.ulisb-
oa.pt §Emily A. Pereira is with the Department of Electrical and Computer Engineering, Texas Tech University, USA. emily.pereira@ttu.edu
1
arXiv:2511.20950v1 [q-bio.QM] 26 Nov 2025

Figure 1: (A) shows an epileptic seizure snapshot recorded using iEEG from patient HUP64, where yellow shading indicates the pre-ictal period, orange shading indicates the ictal period, and purple shading indicates the post-ictal period. (B) shows the fractional-order exponents (α) estimated during the beginning of the ictal period. (C) shows the spatial matrix (A) estimated during the beginning of the ictal period. (D) shows the eigenvalues of the fractional-order dynamical system during the ict-
al period. (E) shows a snapshot of the fitted model compared with the true data for a single channel LF01. (F) shows a measure of the best fit of the model (R2) for all channels across the entire seizure snapshot. (G) shows the novel feedback control architecture that we validate on 35 real-world seizure snapshots.
2

the spatial relationship between brain regions [19]. Hence, fractional-order dynamical networks outperform traditional integer-order models in accurately representing neural data [20–26]. In this work, we provide a fractional-order dynamical framework to comprehensively characterize seizure dynamics across all epileptic states. Figure 2 illustrates this process, which analyzes fractional-order exponents (α) and system eigenvalues (λ) to assess fractional dynamics and network stability properties -
across interictal, pre-ictal, ictal, and post-ictal brain states. By leveraging our fractional-order dynamical network mathematical framework, we validate a novel stabilizing control strategy on 35 seizures from 10 patients. Our approach provides a comprehensive mathematical framework for understanding seizure evolution and for designing effective personalized seizure control. Through explicitly modeling multi-scale and stability properties in epileptic dynamics, we offer insights into seizure mec-
hanisms and an approach to effectively suppress seizures.
Results
Fractional-Order Dynamical Networks Accurately Fit Epileptic Data Over the Majority of Segments Across All Seizure States
We assessed the goodness of model fit by computing the R2 value for 2656 electrodes in all four epileptic brain states (interictal, pre-ictal, ictal, and post-ictal) for each patient. Segments that had an R2 < 0.5 for 40% or more of their electrodes were removed from analysis to avoid unreliable results due to poor model fit (these segments were analyzed separately in the supplementary). Based on our R2 criterion for model validation, we excluded 14 of 140 segments (10%) from analysis (see Table 1-
 Supplementary Material), leaving 126 good segments. The omitted segments consisted of 8 post-ictal segments (HUP64: 1, HUP68: 3, HUP78: 1, HUP86: 2, MAYO016: 1), all 5 interictal segments from HUP78, and 1 pre-ictal segment from HUP78. The excluded post-ictal segments exhibited significantly smaller signal amplitudes (139.1 ± 177.0 μV) compared to included post-ictal segments (457.8 ± 928.7 μV), while HUP78’s interictal segments showed abnormally high amplitudes (238.5 ± 176.3 μV) relative to oth-
er patients’ interictal segments (153.4 ± 126.7 μV).
Changes Across Epileptic Brain States Evident in Multi-scale and Stability Properties with Consistent Observations across Patients
After establishing an appropriate model fit, we illustrate the temporal evolution of the raw intracranial EEG (iEEG) data, goodness of fit, fractional-order exponents (α), and eigenvalues through a complete seizure cycle of patient HUP68’s 5th seizure (Figure 2). Panel A in Figure 2 shows the iEEG recordings from 79 electrodes, with seizure onset zone (SOZ) electrodes highlighted in red. Visual inspection reveals distinct activity patterns across segments, with the ictal period showing high-amplit-
ude, rhythmic discharges that are particularly prominent in the SOZ electrodes. In contrast, the pre-ictal period exhibits a smaller signal amplitude across all electrodes. Similarly, the SOZ electrodes during the interictal period have smaller amplitudes compared to non-SOZ electrodes. The heatmap in panel B in Figure 2 shows R2 values for each electrode and time window, illustrating the goodness of fit for the fractional-order dynamical networks across all epileptic brain states. Like the iEEG d-
ata, each SOZ electrode has a border of red dots. We observe large R2 values across all segments, indicating good model performance across all segments. Panel C in Figure 2 shows the fractional-order exponents (α) across all four states. Interictal fractionalorder exponents are stable and tightly clustered around 0.8-1.0, while pre-ictal fractional-order exponents are smaller with a larger spread in distribution. The ictal state shows slightly larger fractional-order exponents than pre-ictal and h-
as the most variability overall. Post-ictal fractional-order exponents are slightly larger than during ictal, with increased variability, evident in the wider IQR and outliers. Eigenvalues across all epileptic brain states are displayed in Panel D in Figure 2. Interictal eigenvalues have larger variance, with some values exceeding 1, indicating unstable or potentially marginally stable behavior. The pre-ictal eigenvalue distributions tighten, with all values less than 1, reflecting a stable system-
. Ictal eigenvalues have slightly larger values and a wider spread than pre-ictal, suggesting that the system is moving closer towards
3

0 4 8 12 16
10
20
30
40
50
60
70
Electrodes
A Interictal
0 4 8 12 16
10
20
30
40
50
60
70
Preictal
20 24 28 32 36
10
20
30
40
50
60
70
Ictal
103 107 111 115 119
10
20
30
40
50
60
70
Postictal
0 4 8 12 16
10
20
30
40
50
60
70
Electrodes
B
0 4 8 12 16
10
20
30
40
50
60
70
20 24 28 32 36
10
20
30
40
50
60
70
103 107 111 115 119
10
20
30
40
50
60
70
0 4 8 12 16
0.0
0.2
0.4
0.6
0.8
1.0
1.2
1.4
Fractional Order Exponents
C
0 4 8 12 16
0.0
0.2
0.4
0.6
0.8
1.0
1.2
1.4
20 24 28 32 36
0.0
0.2
0.4
0.6
0.8
1.0
1.2
1.4
103 107 111 115 119
0.0
0.2
0.4
0.6
0.8
1.0
1.2
1.4
0 4 8 12 16 Time (s)
0.5
0.6
0.7
0.8
0.9
1.0
1.1
1.2
Eigenvalue
D
0 4 8 12 16 Time (s)
0.5
0.6
0.7
0.8
0.9
1.0
1.1
1.2
20 24 28 32 36 Time (s)
0.5
0.6
0.7
0.8
0.9
1.0
1.1
1.2
103 107 111 115 119 Time (s)
0.5
0.6
0.7
0.8
0.9
1.0
1.1
1.2
0.0
0.2
0.4
0.6
0.8
1.0
Figure 2: Patient HUP68, Seizure 5. Columns: epileptic brain states (interictal, pre-ictal, ictal, post-ictal). Rows show data across all electrodes: (A) filtered iEEG signals from 79 electrodes with seizure onset zone (SOZ) electrodes in red, (B) heatmap of R2 values across all electrodes for all 3-second sliding time windows, (C) boxplots of estimated fractional-order exponents, and (D) boxplots of eigenvalues.
instability. Finally, eigenvalues during post-ictal are larger than ictal, have a greater IQR, and significantly more outliers, confirming post-seizure instability. Interestingly, the interictal state has the largest eigenvalues.
4

Interictal Preictal Ictal Postictal
0.50
0.25
0.00
0.25
0.50
0.75
1.00
1.25
1.50
Fractional Order Exponents
A
***
***
***
***
***
***
Interictal Preictal Ictal Postictal
0.0
0.2
0.4
0.6
0.8
1.0
1.2
1.4
1.6
Eigenvalue
B
***
***
***
***
***
***
Figure 3: Violin plots of multi-scale and stability properties across all electrodes, for each epileptic brain state. Data are only pooled from segments where at least 60% of electrodes have an R2 ≥ 0.5 across all time windows within each segment. *** indicates statistically significant differences between all pairs of epileptic brain states (p < .001, Kolmogorov-Smirnov test). (A) Fractional-order exponents (α) characterizing multi-scale properties of iEEG signals. (B) Eigenvalues of the system A-
0 matrix characterizing stability properties of fractional-order dynamical models.
5

interictal preictal ictal postictal
interictal
preictal
ictal
postictal
A
0.21 0.32 0.18
0.21 0.10 0.19
0.32 0.10 0.27
0.18 0.19 0.27
Fractional Order Exponents: KS Statistic
interictal preictal ictal postictal
interictal
preictal
ictal
postictal
B
0.39 0.65 0.17
0.39 0.24 0.46
0.65 0.24 0.68
0.17 0.46 0.68
Fractional Order Exponents: Cohen's d
interictal preictal ictal postictal
interictal
preictal
ictal
postictal
C
0.20 0.28 0.15
0.20 0.08 0.13
0.28 0.08 0.20
0.15 0.13 0.20
Eigenvalue: KS Statistic
interictal preictal ictal postictal
interictal
preictal
ictal
postictal
D
0.21 0.41 0.07
0.21 0.18 0.20
0.41 0.18 0.32
0.07 0.20 0.32
Eigenvalue: Cohen's d
0.0
0.2
0.4
0.6
0.8
1.0
0.0
0.2
0.4
0.6
0.8
1.0
1.2
1.4
0.0
0.2
0.4
0.6
0.8
1.0
0.0
0.2
0.4
0.6
0.8
1.0
1.2
1.4
Figure 4: Population-pooled pairwise comparisons across epileptic brain states. (A) KS statistic for fractional-order exponents (α) comparisons. (B) Cohen’s d effect sizes for fractional-order exponents (α) comparisons. (C) KS statistic for eigenvalue comparisons. (D) Cohen’s d effect sizes for eigenvalue comparisons. All data are pooled across patients within each brain state before computing statistics. All comparisons reached statistical significance (p < 0.001). Effect sizes range from small t-
o medium, with fractional-order exponents (α) showing larger differences than eigenvalues and ictal showing the largest separation from other states for both metrics.
Multi-scale Property Shows Distinct Shifts Across Epileptic Brain States
Figure 9 A shows the fractional-order exponents (α) distributions for each epileptic brain state across all patients and electrodes. Median values decreased from interictal 0.75 (IQR: 0.66-0.84) through pre-ictal 0.68 (IQR: 0.54-0.82) and ictal 0.63 (IQR: 0.48-0.77), and then increased during post-ictal 0.78 (IQR: 0.62-0.94). interictal and post-ictal segments exhibit extended tails, with interictal skewing toward smaller values and post-ictal showing spread in both directions. In contrast, fracti-
onal-order exponents (α) during pre-ictal and ictal segments has more uniform distributions, though ictal segments show larger outliers. Several consistent patterns emerged across patients (supplementary table 2). interictal fractional-order exponents (α) clustered around 0.70-0.80 for most patients, while pre-ictal and ictal segments remained relatively similar within individual patients. Post-ictal periods exhibited increased variability across most patients, with the exception of HUP72 and MAYO-
010. Six out of ten patients (HUP64, HUP68, HUP70, HUP86, MAYO011, MAYO016) showed decreased median fractional-order exponents (α) from interictal to ictal, consistent with the group-level trajectory. Additionally, MAYO patients generally showed larger post-ictal fractional-order exponents (α) compared to the HUP patients.
6

interictal preictal ictal postictal
interictal
preictal
ictal
postictal
A
0.42 0.42 0.42
0.42 0.14 0.34
0.42 0.14 0.36
0.42 0.34 0.36
Fractional Order Exponents: KS Statistic
interictal preictal ictal postictal
interictal
preictal
ictal
postictal
B
1.17 1.19 1.03
1.17 0.31 0.92
1.19 0.31 0.95
1.03 0.92 0.95
Fractional Order Exponents: Cohen's d
interictal preictal ictal postictal
interictal
preictal
ictal
postictal
C
0.42 0.42 0.38
0.42 0.13 0.36
0.42 0.13 0.35
0.38 0.36 0.35
Eigenvalue: KS Statistic
interictal preictal ictal postictal
interictal
preictal
ictal
postictal
D
1.04 1.00 0.66
1.04 0.26 0.81
1.00 0.26 0.74
0.66 0.81 0.74
Eigenvalue: Cohen's d
0.0
0.2
0.4
0.6
0.8
1.0
0.0
0.2
0.4
0.6
0.8
1.0
1.2
1.4
0.0
0.2
0.4
0.6
0.8
1.0
0.0
0.2
0.4
0.6
0.8
1.0
1.2
1.4
Figure 5: Within-patient pairwise comparisons across epileptic brain states, averaged across patients. (A) KS statistic for fractional-order exponents (α) comparisons. (B) Cohen’s d effect sizes for fractional-order exponents (α) comparisons. (C) KS statistic for eigenvalue comparisons. (D) Cohen’s d effect sizes for eigenvalue comparisons. Statistics are computed within each patient and then averaged across patients to account for inter-patient variability. Effect sizes are substantially larger t-
han population-pooled analysis, with large effect sizes (Cohen’s d ≥ 0.8) for fractional-order exponents (α) and medium-to-large effect sizes for eigenvalues. Interictal shows the most consistent separation from all other states across both metrics.
Despite these overall trends, patient-level fractional-order exponents (α) distributions varied substantially (Supplementary Figures 2 and Supplementary Table 2). Patients MAYO011 and MAYO016 showed large post-ictal values (medians = 1.02 and 0.90, respectively), whereas MAYO010 and HUP70 had consistent values across all segment types. HUP72 exhibited distinctly large values during pre-ictal and ictal segments (medians = 0.99 and 0.97).
Network Stability Property Reveals Distinct Patterns Across Epileptic Brain States with High Variability during Post-Ictal
Figure 9 B shows the eigenvalue distributions across all patients and electrodes. The eigenvalues showed less variability compared to fractional-order exponents (α). Interictal eigenvalues showed the tightest distribution across all patients (median = 0.80, IQR: 0.76-0.85) while pre-ictal, ictal, and post-ictal segments exhibited similar median values (0.73, 0.72, and 0.72, respectively). However, post-ictal values showed increased variability (IQR: 0.73-0.90) compared to all other segments (pre-i-
ctal IQR: 0.73-0.83, ictal IQR:0.72-0.80). All epileptic brain states displayed eigenvalue distributions with extended tails and numerous outliers, far
7

greater than those of fractional-order exponents (α). This was particularly evident in the post-ictal period. Unlike fractional-order exponents (α), eigenvalues did not show a clear monotonic trajectory across seizure progression. Patient-level eigenvalue distributions revealed patterns consistent with group-level findings (Supplementary Figure 3, Supplementary Table 3). Eigenvalues during interictal were relatively stable across most patients (median ≈0.75), while pre-ictal and ictal remained si-
milar within individual patients, mirroring the pattern observed for fractional-order exponents (α). Eigenvalues during post-ictal periods exhibited notably increased spread, evident in the broadened violin distributions in all patients except HUP70, HUP72, and HUP78. HUP70 showed consistent eigenvalues across all brain states (consistent with its fractional-order exponents (α) patterns), while HUP72 displayed smaller post-ictal values (median = 0.62, IQR: 0.54–0.75). Across all patients, we obser-
ve stable interictal periods, minimal variation between pre-ictal and ictal and post-ictal periods characterized by increased variability and larger values in both fractional-order exponents (α) and eigenvalues.
Stronger Effect Sizes within Patients than at Population Level
We performed pairwise comparisons of fractional-order exponents (α) and eigenvalues of all epileptic brain states using population-pooled and within-patient analysis to assess the separation between states. Population pooled analysis (figure 4) KS test showed significance between all states (p < .001), but with small to medium effect sizes. The largest Cohen’s d values were observed for ictal vs post-ictal (0.68) and ictal vs interictal (0.65) for fractional-order exponents (α) (panel B) and ictal-
 vs post-ictal (0.41) and ictal vs interictal( .32) for eigenvalues (panel D). KS statistics (panels A and C) were similar for both. Within-patient analysis (figure 5) revealed substantially larger effect sizes. For fractional-order exponents (α) (panel B), Cohen’s d value exceeded 0.9 for all comparisons except for pre-ictal vs. ictal; the largest effect sizes observed were interictal vs. ictal (d = 1.19), interictal vs. pre-ictal (d = 1.17). Eigenvalues (panel D) showed medium to large effect si-
zes, with interictal vs. pre-ictal (d = 1.04) and interictal vs. ictal (d = 1.00) showing the strongest separation. KS statistics (panels A and C) were consistently high for interictal comparisons (0.42 for all three comparisons with fractional-order exponents (α)), indicating robust distributional separation within individual patients. Adjacent brain states showed smaller effect sizes in both analyses. Pre-ictal vs. ictal comparisons yielded the smallest differences (d = 0.31 for fractional-order-
 exponents (α), d = 0.26 for eigenvalues), while ictal vs. post-ictal transitions showed larger effects (d = 0.95 for fractional-order exponents (α), d = 0.74 for eigenvalues). The contrast between population-pooled and within-patient effect sizes indicates substantial interpatient heterogeneity in baseline network dynamics. While individual patients show large, consistent differences between brain states, pooling across patients reduces these effects due to varying baseline values and seizure cha-
racteristics across the cohort.
Control Stabilizes Most Seizures with Failures Linked to Ill-Conditioned Optimization
Our stabilizing controller was applied at seizure onset for all ictal segments. Figure 6 illustrates the effectiveness of our control design by comparing eigenvalues in the complex plane before and after applying control in Seizure 3 of HUP68. The uncontrolled eigenvalues (red) lie near or beyond the stability boundary, while the controlled eigenvalues (blue) are well within the unit circle, satisfying the stability definition (see Methods Definition 1). Figure 7 shows the simulated controlled iEE-
G data compared to the original iEEG data from the seizure onset zone (SOZ) electrodes for this patient. We see that the controlled iEEG signals have substantially smaller amplitudes compared to the uncontrolled ictal iEEG signals. Similarly, figure 8 shows the percentage reduction in amplitude for all electrodes in all seizures. There was an average of 48.96% ± 16.94% reduction in signal amplitude. There was little difference in amplitude reduction between already stable and seizures requiring co-
ntrol (50.38% ± 18.41% and 48.12% ± 15.95%, respectively). During the time of seizure onset, 22 out of 35 seizures had unstable fractional-order dynamical networks (∃λ : |λ| > 1), while 13 seizures had stable fractional-order dynamical networks (max |λ| < 1). After applying control, 27 seizures (77%) satisfied the stability criterion (max|λ| < 1), representing successful stabilization
8

0.0 0.2 0.4 0.6 0.8 1.0 1.2 Real
0.8
0.6
0.4
0.2
0.0
0.2
0.4
0.6
0.8
Imaginary
0.8 0.6 0.4 0.2 0.0 0.2 0.4 0.6 0.8 Real
1.00
0.75
0.50
0.25
0.00
0.25
0.50
0.75
1.00
Before control After control
Figure 6: Patient HUP68 Seizure 3. Red shows eigenvalues of the system matrix A0 on the complex plane during seizure onset before applying stabilizing control. The fractional-order dynamical network is unstable, as at least one eigenvalue is outside of the unit circle on the complex plane. Blue shows eigenvalues of the simulated system matrix A0 during seizure onset after applying stabilizing control. All eigenvalues are stabilized and lie within the unit circle on the complex plane, restoring sys-
tem stability.
012345 Seconds
1
2
3
4
SOZ Electrode
Ictal
012345 Seconds
Controlled Ictal
Figure 7: Patient HUP68 seizure 3. (A) iEEG seizure onset zone (SOZ) signals from 4 electrodes during seizure onset before applying stabilizing control (mean amplitude: 159.03 μV). (B) Simulated controlled SOZ signals from the same electrodes after applying stabilizing control (mean amplitude: 60.54 μV). The control reduces the signal amplitude by 61.9%.
9

HUP64_1
HUP68_1
HUP68_2
HUP68_3
HUP68_4
HUP68_5
HUP70_1
HUP70_2
HUP70_3
HUP70_4
HUP70_5
HUP70_6
HUP70_7
HUP70_8
HUP72_1
HUP78_1
HUP78_2
HUP78_3
HUP78_4
HUP78_5
HUP86_1
HUP86_2
MAYO010_1
MAYO010_3
MAYO011_1
MAYO011_2
MAYO016_1
MAYO016_2
MAYO016_5
MAYO016_6
MAYO020_1
MAYO020_2
MAYO020_3
MAYO020_4
MAYO020_6
Seizure
0
10
20
30
40
50
60
70
% Reduction in Amplitude
Required control Already stable
Figure 8: Percentage amplitude reduction for each seizure. Gray bars represent seizures that are already stable (maximum eigenvalues ≤ 1), while blue bars indicate seizures that require stabilization. Vertical dashed lines separate patients. Only 1 seizure increased in amplitude after control. Control reduced amplitude by an average of 48.96% ± 16.94%.
of 17 out of 22 (77%) initially unstable seizures. Eight seizures failed to stabilize: HUP68 seizure 5, HUP78 seizures 1-5, MAYO016 seizure 2, and MAYO020 seizure 6. To investigate the cause of these failures, we analyzed the numerical properties of the optimized matrices L and P . Failed cases exhibited significantly larger condition numbers (median κ(L): 1382 vs 28 for successful cases), indicating severe ill-conditioning of the optimization problem. Failed cases also required substantially larg-
er control corrections (median ∥L∥F : 45.4 vs 15.5) and P matrices (median ∥P ∥F : 51.7 vs 23.0).
Discussion
Summary
We applied fractional-order dynamical systems to model brain network dynamics across seizure progression in 10 patients with drug-resistant epilepsy, examining how stability (eigenvalues) and multi-scale (fractional-order exponents) properties differ across interictal, pre-ictal, ictal, and post-ictal epileptic brain states. Our key contributions included achieving good model fit across all epileptic brain states with interpretable properties that revealed distinct patterns and a stabilizing contr-
ol framework that satisfied the eigenvalue stability criterion in 77% of unstable ictal networks and reduced seizure signal amplitude by an average of 49%. These findings provide evidence that multi-scale and stability dynamics evolve distinctly across seizure progression, with inter-patient variability potentially reflecting diverse epilepsy etiologies. The integration of fractional-order modeling with control theory provides a foundation for developing personalized, model-based neurostimulation -
strategies targeting seizure suppression.
10

Fractional-Order Dynamical Network Models are Suitable to Represent Epileptic Brain States
Fractional-order dynamical networks achieve R2 ≥ 0.5 for 60% of all electrodes in 126 of 140 segments (90%), demonstrating that fractional-order systems effectively capture iEEG dynamics across diverse seizure states in most patients. The 14 segments where a good fit could not be obtained likely reflect limitations in our current estimation framework when confronted with extreme signal characteristics, rather than fundamental flaws in modeling the data with fractional-order dynamics. Our model val-
idation revealed that the majority of rejected data occurred during the post-ictal segments, which had significantly smaller signal amplitudes (139.1±177.0 μV) compared to successfully modeled post-ictal segments (457.8±928.7 μV). This pattern may reflect post-ictal suppression, where the brain enters a recovery state with markedly lower electrical activity [27]. This finding suggests that fractional-order dynamical network modeling is most informative when applied to periods with active neural dy-
namics rather than suppressed brain states. Patient HUP78 presented the opposite pattern, as all five of its interictal segments were excluded due to abnormally high amplitudes (238.5±176.3 μV). HUP78 developed epilepsy from a traumatic brain injury, highlighting how individual patient characteristics and epilepsy etiology can influence the applicability of network-based modeling approaches.
Consistent Multi-scale and Stability Properties during interictal Periods Suggest Reproducible Brain Network Activity
The consistency in fractional-order exponents (α) (median 0.75, IQR: 0.66-0.84) and eigenvalues (median 0.80, IQR: 0.76-0.85) across interictal periods reveals that epileptic brain networks maintain stable dynamics between seizures. These uniform distributions indicate that interictal epileptic dynamics are fundamentally non-Markovian, with neural activity substantially coupled to its temporal history [10, 23]. Although the median eigenvalue of 0.80 indicates stability, some interictal windows exh-
ibited eigenvalues greater than 1. This may reflect model estimation uncertainty, inherent baseline instability in epileptic patients, or limitations of applying asymptotic stability to finite-time dynamics. Furthermore, within-patient analysis showed that interictal has the strongest separation from other states, with large effect sizes (Cohen’s d > 1) for all comparisons except for interictal vs post-ictal for eigenvalues.
Multi-scale and Stability Properties Uncover Insights into Seizure Onset, Progression, and Recovery
The shift from interictal to ictal periods showed smaller values in both fractional-order exponents (α) (0.75 to 0.63) and eigenvalues (0.80 to 0.72). A decrease in fractional-order exponents (α) indicates stronger history-dependence of neural activity, which suggests that seizures are self-sustaining events, where the brain cannot escape from pathological activity patterns [28]. Similarly, eigenvalues also decreased in pre-ictal and ictal periods, with somewhat tightened distributions, suggesting-
 modest increases in stability during seizures. While this appears to contradict literature that hypothesizes seizures can be mathematically represented as an instability in the brain [29–33], we note that asymptotic stability may not be suitable for seizures as they have finite time horizons. Notably, the stability of fractional-order systems depends on both fractional-order exponents (α) and eigenvalues, which we show evolve together across epileptic brain states. Importantly, both fractional-or-
der exponents (α) and eigenvalues show small differences between preictal and ictal segments. The similarity suggests that the pathological network states characteristic of seizures are already established before clinical seizure onset, consistent with previous findings that seizures do not arise instantaneously but emerge from gradual network-level transitions [34, 35]. Furthermore, the pre-ictal period may represent an already altered brain state that is primed for seizure generation rather than-
 a simple precursor to an abrupt change [28, 36]. Post-ictal fractional-order exponents (α) and eigenvalues did not return to interictal baseline values, revealing substantial heterogeneity in recovery dynamics. Some patients exhibited values exceeding interictal baselines, suggesting hyperexcitable rebound, while others showed sustained suppression. The variability within post-ictal periods (wider IQR and numerous outliers for both metrics) indicates unstable network dynamics during recovery, whe-
re the brain may cycle through multiple states before re-establishing a baseline
11

state. This finding indicates that post-seizure recovery is not a uniform process but rather reflects patientspecific network reorganization mechanisms [27, 37, 38]. Within-patient analysis revealed substantially larger KS statistics and effect sizes compared to the population-pooled statistics. The within-patient separation between interictal and seizure-related states suggests that fractional-order parameters could serve as patient-specific biomarkers for predicting seizures, despite being limi-
ted on the population level. Furthermore, since pre-ictal and ictal states showed minimal differences, detecting the transition from interictal to pre-ictal may provide sufficient warning for impending seizures without requiring identification of seizure onset. The pattern of effect sizes reveals an asymmetry in seizure dynamics. The sharp contrast between ictal and post-ictal states (d = 1.00 and 0.79 for fractional-order exponents (α) and eigenvalues, respectively) compared to the minimal pre-ic-
tal to ictal transition (d = 0.28 and 0.25) indicates that seizure termination triggers more dramatic network reorganization than seizure initiation.
Stabilizing Control Shows Promise to Suppress Epileptic Activity
Our stabilizing control framework successfully stabilized 77% of initially unstable seizures and achieved approximately 49% amplitude reduction across all cases. The control produced a similar average amplitude reduction in both initially stable and unstable seizures, showcasing effective suppression of ictal activity regardless of mathematical stability status. Patient HUP78, who developed epilepsy from traumatic injury, failed to achieve stabilization in all five of their seizures, including thr-
ee of their seizures that were initially stable. This complete failure suggests that traumatic brain injury-induced structural damage, gliosis, and altered network connectivity [39] may require control strategies different from other epilepsy etiologies. Furthermore, the eight seizures that failed to stabilize exhibited severely ill-conditioned optimization problems, with the median condition numbers 50x larger than those of successful cases (1383 vs 28), which suggests that a feasible solution to-
 the optimization problem presented in (12) does not exist. Physiologically, this may indicate that certain seizure dynamics involve such profound network reorganization or high-dimensional complexity that simple linear coupling modifications cannot restore stability [40]. Importantly, most control failures occurred in seizures with good model fits, indicating that accurate system identification does not guarantee a feasible solution to the optimization problem in (12). Future work will focus on d-
eveloping conditions to guarantee a feasible solution by verifying stabilizability with state-feedback. Certain network configurations that are well-characterized by fractional-order models may be fundamentally resistant to state-feedback interventions due to structural constraints, pathological states, or intrinsic nonlinearities that emerge during control attempts [40]. Patients with structural lesions, certain epilepsy etiologies, or particular network architectures may require alternative cont-
rol strategies, such as nonlinear control, higher-order perturbations, or targeting different network nodes. Larger studies grouping patients by clinical characteristics may reveal which characteristics are more favorable to state-feedback control versus those requiring more sophisticated interventions [40, 41].
Fractional-Order Framework Complements Existing Epilepsy Modeling and Control Approaches
Our fractional-order system approach extends existing methods for characterizing and controlling epileptic seizures. Network fragility approaches [5,29] use linear time-varying models to quantify network sensitivity to perturbations, identifying nodes where small synaptic changes can destabilize the network. Neural fragility achieved 76% accuracy in predicting surgical outcomes by identifying fragile regions [42]. Our fractionalorder exponents (α) quantify history-dependence in neural dynamics, a -
property that integer-order models cannot capture. While fragility focuses on instantaneous network sensitivity, α reveals how strongly current brain states depend on past activity across multiple timescales. Other modeling approaches include nonlinear dynamical analysis methods that describe seizures as transitions between chaotic and ordered states [43]. These models require extensive neuroimaging and computational resources, whereas fractional-order modeling achieves an interpretable characteri-
zation using iEEG data with efficient parameter estimation. One such example is the Virtual Epileptic Patient using the Epileptor model, which characterizes seizure bifurcations through fast-slow nonlinear dynamics [44].
12

Responsive neurostimulation (RNS) achieved 37.9% seizure reduction during initial 12-week trials, improving to 53% at two years and 75% at nine years [45–47]. Vagus nerve stimulation showed 40-50% response rates with 5-10% achieving seizure freedom [48]. Our stabilizing control achieved 77% stabilization success in initially unstable seizures with 48% average amplitude reduction. Direct comparison is limited by study design differences, with our results representing in-silico open-loop control ve-
rsus implanted in vivo closed-loop devices.
Limitations
Several limitations warrant consideration. Our small sample size (10 patients, 35 seizures) limited statistical power despite large effect sizes, and all patients had focal epilepsy, restricting generalizability to other epilepsy types. Model quality varied across segments, with post-ictal periods being particularly challenging, suggesting certain brain states may violate linear fractional-order assumptions. Our control method could face real-world implementation challenges, including robustness, -
sensing delays, stimulation artifacts, and safety constraints. Additionally, we focused on eigenvalues and fractional-order exponents (α), but did not analyze eigenvectors. They could identify the spatial patterns of network reorganization across the seizure states and reveal which electrode drives transitions between states, which has the potential to improve targeting for neurostimulation. We focused exclusively on network dynamics without incorporating clinical features such as lesion character-
istics, medications, or comorbidities that may influence seizure evolution. Larger cohorts would enable the identification of patient subgroups with distinct seizure dynamics profiles and improve statistical power for detecting group-level patterns. A systematic investigation of window size and stride parameters could optimize the temporal resolution for capturing seizure transitions. Extending the estimation framework to better capture post-ictal dynamics that potentially violate linear assumptio-
ns in our analysis may improve our understanding of post-seizure recovery. Finally, our control framework was only validated through in silico simulations using estimated models from iEEG data, not in real brain tissue. Real-world implementation faces model accuracy, unmodeled dynamics, hardware delays, artifacts, and safety constraints that cannot be fully captured in computational models. Closed-loop implementation and validation in an animal model or clinical setting would assess the real-world-
 feasibility and efficacy of fractional-order model-based neurostimulation for seizure suppression.
Methods
Epileptic Intracranial EEG HUP and Mayo Dataset
We analyzed intracranial EEG (iEEG) recordings from 10 patients with medically refractory epilepsy, which are available through the International Epilepsy Electrophysiology Portal [49]. These patients underwent subdural electrode implantation for presurgical evaluation after a noninvasive assessment suggested focal, surgically amenable epilepsy. Subdural grid and strip electrodes (2.3 mm diameter, 10 mm spacing) were placed based on clinical indication [4]. Table 1 summarizes the clinical characte-
ristics of these patients with all abbreviations defined in the table caption. There were a total of 35 seizure blocks across the 10 patients. Nine patients experienced complex partial (CP) or complex partial with secondary generalized tonic-clonic (CP+GTC) seizures, and one patient exhibited simple partial (SP) seizures. All seizures had a focal, localized onset, with the time of onset annotated by expert clinicians [34, 36]. Six patients were recorded at the Hospital of the University of Pennsyl-
vania (HUP) and four at the Mayo Clinic (MAYO), with sampling rates of 512 Hz and 500 Hz, respectively. Detailed electrode configurations and recording specifications are described in [4].
Preprocessing
The iEEG data were pre-processed according to the details described in [4], which included 0.1 Hz high-pass filtering, removal of artifact electrodes annotated by clinical experts, and epileptic brain state segmentation. The first 20 seconds of each seizure recording were clinically annotated as pre-ictal, and the last 20 seconds of each seizure recording were clinically annotated as post-ictal. The interval between pre-ictal and post-ictal of each seizure recording was clinically annotated as ict-
al. Finally, the snapshot of
13

Table 1: Clinical characteristics of the 10 epilepsy patients in our dataset. Onset and surgery refer to age at first seizure and age at phase II monitoring, respectively. Etiology is clinically determined. Seizure types: CP = complex partial, GTC = generalized tonic-clonic, and SP = simple partial. The seizures column indicates how many seizures are analyzed per patient. Imaging: L = lesional, NL = non-lesional. Outcome: ENGEL classification (I-IV) or ILAE classification where indicated, NR = no-
t reported, NF = no follow-up. All seizures are localized with defined seizure onset zones.
Patient Sex Age (Years) Seizure Onset
Etiology Seizure Type Seizures Imaging Outcome
(Onset/Surgery)
HUP64 M 0.3/20 Left frontal Dysplasia CP+GTC 1 L ENGEL-I HUP68 F 15/26 Right temporal
Meningitis CP, CP+GTC
5 NL ENGEL-I
HUP70 M 10/32 Left perirolandic
Cryptogenic SP 8 L NR
HUP72 F 11/27 Bilateral left Mesial temporal sclerosis
CP+GTC 1 L NR
HUP78 M 00/54 Anterior left temporal
Traumatic Injury
CP 5 L ENGEL-III
HUP86 F 18/25 Left temporal
Cryptogenic CP+GTC 2 NL ENGEL-II
MAYO010 F 00/13 Left frontal Neonatal injury
CP+GTC 2 L NF
MAYO011 F 10/34 Right Mesial frontal
Unknown CP 2 NL NF
MAYO016 F 05/36 Right temporal orbitofrontal
Unknown CP+GTC 3 NL ILAE-IV
MAYO020 F 05/10 Right frontal Unknown CP+GTC 4 NL ILAE-IV
interictal data was randomly selected at least three hours before or after any seizure event and divided into 100-second snapshots, with each patient having at least as many interictal snapshots as ictal snapshots. From interictal, pre-ictal, ictal, and post-ictal snapshots, we analyzed 20 seconds of data to ensure a consistent comparison across epileptic brain states. For our analysis, we performed additional processing to prepare the data for fractional-order dynamical network modeling. Each sig-
nal from every electrode was mean-centered by subtracting its average during 3-second windows. We chose a 3-second window length to balance temporal resolution with sufficient data for model fitting. To each 20-second epileptic brain state segment, we applied a 3-second sliding window with a 1-second stride to track temporal changes across time. Each 20-second segment yielded 18 windows (windows starting at 0, 1, ..., 17 seconds), with the final window spanning 17-20 seconds. These windowed data s-
egments served as inputs to our FOS modeling pipeline, which we used to compute stability and multi-scale properties across time.
Fractional-Order Dynamical Network Modeling Framework
The evolution of multivariate brain dynamics can be expressed in the following form:
∆αx[k] = Ax[k − 1], (1)
where x[k] = (x1[k], x2[k], . . . , xN [k])T is a state vector of the N pre-processed iEEG recordings at discrete time step k ∈ N. A ∈ RN×N is a matrix that models the spatial coupling between states. The multi-scale behavior is described using a discrete-time fractional derivative operator ∆α, which is the Gr ̈unwald-Letnikov discretization of the fractional derivative (Chpt. 2, [17]). The vector of fractional-order exponents α = (α1, α2, . . . , αN )T computes the multi-scale property for each r-
ecording, which determines how strongly each measurement depends on its past measurements. Smaller values of α indicate a stronger long-range temporal dependency. A value of α = 1 corresponds to a standard first-order linear time-invariant dynamical system
14

with no multi-scale behavior. This relationship is described for each electrode i by:
∆αi xi[k] =
k
X
j=0
Ψ(αi, j)xi[k − j], (2)
where Ψ(αi, j) are the Gru ̈nwald-Letnikov weights defined as:
Ψ(αi, j) =
(
1, j = 0
Γ(j −αi )
Γ(−αi)Γ(j+1) , j ≥ 1 (3)
These weights determine the contribution of each past state, with the influence decaying according to the fractional order αi.
Model Estimation
The fractional-order exponents α were estimated using a Haar wavelet transform. For each electrode, we computed the log-variance of the Haar wavelet coefficients at J = ⌊log2(K)⌋ scales, where K is the window length, and performed a linear regression between the log-scale and log-variance. The slope of this regression is divided by two and gives us the estimated αi values [50, 51]. These αi values are then used to compute the Gru ̈nwald-Letnikov approximation of the discrete-time fractional deriva-
tive ∆αi xi[k] using Eq. (2), with a finite memory of 20 past samples. The system matrix A was initially estimated using ordinary least squares (OLS) by solving A = ZXT(XXT)−1, where X ∈ RN×K contains the state vectors with the k-th column being x[k − 1] for k = 1, 2, . . . , K, with K denoting the number of time windows, and Z ∈ RN×K contains the corresponding fractional derivatives with the k-th column being ∆αx[k]. To improve the estimation of A and account for potential unmeasured influences, -
we used an iterative estimation approach [52] to estimate the parameters and unknown inputs. We augmented Eq. (1) to include an input term: ∆αx[k] = Ax[k − 1] + Bu[k], (4)
where u[k] represents any external inputs to the system from unmeasured sources (e.g., brain regions outside the recording area, subcortical inputs, or modeling errors). The matrix B was initialized heuristically from A(0), which is the estimated A matrix during the first iteration, by selecting columns that represent the most influential electrodes in the network, assuming half the recorded electrodes could receive external inputs. For each time iteration i, we estimated the inputs by solving a l-
east absolute shrinkage and selection operator (LASSO) problem:
min
u[k]
1
2 ∥z[k] − A(i)x[k − 1] − Bu[k]∥2
2 + μ∥u[k]∥1, (5)
using the Alternating Direction Method of Multipliers (ADMM) [53], with regularization parameter μ = 0.5. After identifying these contributions, we re-estimated the system matrix:
A(i+1) = (Z − BU )XT(XXT)−1, (6)
where U contains all estimated inputs. In the final model, only one iteration was used as additional iterations did not significantly improve the mean squared error. To analyze the network coupling structure with adjusted diagonal terms, we computed A0 = A − D, where D = diag(v) with diagonal elements vi = Γ(1−αi)
Γ(−αi) for αi ̸= 0 and vi = 1 for αi = 0. The matrix A0 represents the effective inter-channel coupling after accounting for the diagonal contribution from fractional differentiation. We computed all the eigenvalues of A0 for each window to characterize the network dynamics. These eigenvalues, along with the fractional order α values, served as parameters to differentiate between seizure states. With the refined A(1) and α, we can now reconstruct the signals as described below.
15

Artificial Signal Simulation
The model quality was evaluated by simulating signals using the estimated parameters A and α. Starting from Eq. (1) and expanding the fractional derivative using the Gru ̈nwald-Letnikov weights from Eq. (3) with Ψ(αi, 0) = 1:
∆αi xi[k] =
k
X
j=0
Ψ(αi, j)xi[k − j] = xi[k] +
k
X
j=1
Ψ(αi, j)xi[k − j] (7)
Recall that for a scalar entry of the state
∆αi xi[k] = (Ax[k − 1])i (8)
Rearranging to solve for x[k], we obtain:
xi[k] = Ax[k − 1]i −
min(k,M )
X
j=1
Ψ(αi, j)xi[k − j] (9)
where (Ax[k − 1])i represents the multi-channel coupling and the summation captures the fractional multiscale contribution, limited to M = 5 past samples. Starting from initial conditions x[0], we applied Eq. (9) recursively to generate multi-step-ahead predictions across all electrodes. We quantified reconstruction quality by computing the coefficient of determination (R2) between reconstructed and preprocessed iEEG signals for each electrode in each time window. For statistical comparisons betwe-
en seizure states, we excluded snapshots where fewer than 60% of electrodes achieved a mean R2 ≥ 0.5 to ensure at least half the variance was captured in the original signal. However, all snapshots were retained for visualizing the fractional-order exponents (α) and eigenvalue distributions.
Analysis of Multi-scale and Stability Properties
For statistical analysis, we examined fractional-order exponents (α) and eigenvalues across epileptic brain states through population pooling and within-patient analysis using the Kolmogorov-Smirnov (KS) test and Cohen’s d statistic. Only segments that passed the model fit criteria were included, as described in the previous section. The KS test measures the maximum difference between cumulative distribution functions, through a p-value and a KS statistic, which ranges from 0 (identical distributi-
ons) to 1 (completely separated) [54]. Cohen’s d quantifies effect size as the standardized mean difference in units of pooled standard deviation, where |d| ≥ 0.2, ≥ 0.5, and ≥ 0.8 represent small, medium, and large effects, respectively [54]. For the population-pooled approach, we aggregated all values within each brain state and visualized the distributions using violin plots. We computed pairwise KS tests and Cohen’s d value for all segment comparisons, which are shown in a heatmap, while the p-
-values are shown in the violin plots. Large sample sizes often guarantee statistical significance from p-values; therefore, effect size metrics (KS statistic and Cohen’s d) provide a more informative approach for assessing differences between brain states. For the within-patient approach, we generated violin plots for each patient by aggregating all available segments. We then computed KS statistics and Cohen’s d for each pairwise segment comparison within individual patients. These values were a-
veraged within each patient and then averaged across all patients to produce a summary heatmap. The p-values were not reported for this analysis as the averaged effect sizes do not correspond to a single hypothesis test. This approach quantifies whether effects are consistent across individuals while accounting for inter-patient variability.
Stabilizing Controller Design
A stabilizing controller was designed to stabilize the fractional-order dynamical network model during ictal periods, based on the stability framework for fractional-order systems [55]. In general, stability describes the long-term behavior of signals. A system is said to be stable if all of the signals decay to zero as time goes to infinity [56]. Hence, we defined stability for fractional-order systems.
16

Definition 1 Stability of Fractional-Order Systems: (Theorem 1, [55]) A fractional-order system (1) is
said to be stable if and only if for A0 := A − D(α, 1), where D(α, j) =

 
ψ(α1,j) 0 ... 0 0 ψ(α2,j) ... 0
0
... ... 0
0 0 ... ψ(αn,j)


 , we have
|λ| < 1 for all λ ∈ σ(A0), where σ(A0) is the set of eigenvalues of matrix A0.
Given (A, α), we seek a coupling matrix A ̃ that satisfies the following:
min
A ̃∈RN ×N
∥A ̃∥0
s.t. (A + A ̃, α) is globally
asymptotically stable,
(10)
where ∥ · ∥0 represents the zero quasi-norm, which counts the number of non-zero entries in a matrix. This seeks the sparsest possible control intervention, modifying the fewest connections in the brain network. However, finding the globally optimal solution to this problem requires exhaustively searching through all possible combinations of non-zero entries, which becomes computationally intensive even for moderately sized networks. Since this problem is computationally intractable, we solve the -
convex relaxation using the l1 norm:
min
A ̃∈RN ×N
∥A ̃∥1
s.t. ρ(A + A ̃ − D(α, 1)) < 1,
(11)
where ∥ · ∥1 = P
i,j |[A ̃]ij| is the element-wise l1 norm, which serves as the tightest convex relaxation of the l0 norm and promotes sparsity while remaining computationally tractable, and ρ(·) denotes the spectral radius (largest absolute eigenvalue) of a matrix. The solution to equation (11) is given by A ̃ = LP −1, where P and L are found by solving the following convex optimization problem:
mP,iLn ∥P ∥1 + ∥L∥1
s.t. P P A0T + LT
A0P + L P ≻ 0,
P ≻I
(12)
This controller was applied to ictal windows, starting at seizure onset. We evaluated controller effectiveness by comparing the eigenvalues of A0 matrix (uncontrolled) and A0 + A ̃ matrix (controlled) during the ictal period. Additionally, to visualize the effect of control on signal dynamics, we reconstructed signals using Eq. (9), substituting Actrl = A + A ̃ for A, to visualize the effect of control on signal amplitudes.
Acknowledgments
Code is available at https://github.com/Yaoyuewang/fractional-control-epilepsy. Data are available from the International Epilepsy Electrophysiology Portal (IEEG Portal).
17

References
[1] S. Menon and A. Seifi, “Epileptoconomics: Economics of epilepsy hospitalizations in the united states during the past 3 decades,” in Neurology, vol. 104, no. 7. Lippincott Williams & Wilkins Hagerstown, MD, 2025, p. 3374.
[2] G. Acharya, S. F. Ruf, and E. Nozari, “Brain modeling for control: A review,” Frontiers in Control Engineering, vol. 3, Dec. 2022.
[3] D. S. Bassett and O. Sporns, “Network neuroscience,” Nature Neuroscience, vol. 20, no. 3, pp. 353–364, 2017.
[4] A. Ashourvan, S. Pequito, A. N. Khambhati, F. Mikhail, S. N. Baldassano, K. A. Davis, T. H. Lucas, J. M. Vettel, B. Litt, G. J. Pappas et al., “Model-based design for seizure control by stimulation,” Journal of Neural Engineering, vol. 17, no. 2, p. 026009, 2020.
[5] A. Li, S. Inati, K. Zaghloul, and S. Sarma, “Fragility in epileptic networks: the epileptogenic zone,” in 2017 American Control Conference. IEEE, 2017, pp. 2817–2822.
[6] S. Pequito, A. Ashourvan, D. Bassett, B. Litt, and G. J. Pappas, “Spectral control of cortical activity,” in 2017 American Control Conference. IEEE, 2017, pp. 2785–2791.
[7] C. Presigny and F. De Vico Fallani, “Colloquium: Multiscale modeling of brain network organization,” Reviews of Modern Physics, vol. 94, no. 3, p. 031002, 2022.
[8] R. F. Betzel and D. S. Bassett, “Multi-scale brain networks,” Neuroimage, vol. 160, pp. 73–83, 2017.
[9] X. Zhang and Y. Chen, “Remarks on fractional order control systems,” in 2012 American Control Conference. IEEE, 2012, pp. 5169–5173.
[10] B. J. West, Fractional Calculus View of Complexity: Tomorrow’s Science. Boca Raton, FL, USA: CRC Press, 2016.
[11] M. F. Shlesinger, G. M. Zaslavsky, and J. Klafter, “Strange kinetics,” Nature, vol. 363, no. 6424, pp. 31–37, 1993.
[12] A. A. Kilbas, H. M. Srivastava, and J. J. Trujillo, Theory and Applications of Fractional Differential Equations. Elsevier, 2006, vol. 204.
[13] D. Val ́erio, J. J. Trujillo, M. Rivero, J. T. Machado, and D. Baleanu, “Fractional calculus: A survey of useful formulas,” The European Physical Journal Special Topics, vol. 222, no. 8, pp. 1827–1846, 2013.
[14] B. J. West, “Colloquium: Fractional calculus view of complexity: A tutorial,” Reviews of Modern Physics, vol. 86, no. 4, p. 1169, 2014.
[15] D. Baleanu, K. Diethelm, E. Scalas, and J. J. Trujillo, Fractional Calculus: Models and Numerical Methods. World Scientific, 2012, vol. 3.
[16] J. Sabatier, O. P. Agrawal, and J. T. Machado, Advances in Fractional Calculus. Springer, 2007, vol. 4.
[17] I. Podlubny, Fractional differential equations: an introduction to fractional derivatives, fractional differential equations, to methods of their solution and some of their applications. Elsevier, 1998.
[18] I. Petr ́aˇs, “Fractional-order chaotic systems,” in Fractional-Order Nonlinear Systems: Modeling, Analysis and Simulation. Berlin, Heidelberg, Germany: Springer-Verlag, 2011, pp. 103–184.
[19] E. Reed, S. Chatterjee, G. Ramos, P. Bogdan, and S. Pequito, “Fractional cyber-neural systems—a brief survey,” Annual Reviews in Control, vol. 54, pp. 386–408, 2022.
[20] D. Baleanu, J. A. T. Machado, and A. C. Luo, Fractional Dynamics and Control. New York, NY, USA: Springer, 2011.
18

[21] B. J. West, M. Turalska, and P. Grigolini, Networks of Echoes. Cham, Switzerland: Springer International Publishing AG, 2016.
[22] F. C. Moon, Chaotic and Fractal Dynamics: An Introduction for Applied Scientists and Engineers. Hoboken, NJ, USA: Wiley, 2008.
[23] B. N. Lundstrom, M. H. Higgs, W. J. Spain, and A. L. Fairhall, “Fractional differentiation by neocortical pyramidal neurons,” Nature Neuroscience, vol. 11, no. 11, pp. 1335–1342, Oct. 2008.
[24] G. Werner, “Fractals in the nervous system: Conceptual implications for theoretical neuroscience,” Frontiers Physiology, vol. 1, Jul. 2010.
[25] S. Thurner, C. Windischberger, E. Moser, P. Walla, and M. Barth, “Scaling laws and persistence in human brain activity,” Physica A: Statistical Mechanics and Its Applications, vol. 326, no. 3–4, pp. 511–521, Aug. 2003.
[26] M. C. Teich, C. Heneghan, S. B. Lowen, T. Ozaki, and E. Kaplan, “Fractal character of the neural spike train in the visual system of the cat,” Journal of Optical Society of America, vol. 14, no. 3, pp. 529–546, Mar. 1997.
[27] J. C. Pottk ̈amper, J. Hofmeijer, J. A. van Waarde, and M. J. van Putten, “The postictal state—what do we know?” Epilepsia, vol. 61, no. 6, pp. 1045–1061, 2020.
[28] P. Jiruska, M. De Curtis, J. G. Jefferys, C. A. Schevon, S. J. Schiff, and K. Schindler, “Synchronization and desynchronization in epilepsy: controversies and hypotheses,” The Journal of Physiology, vol. 591, no. 4, pp. 787–797, 2013.
[29] D. Sritharan and S. V. Sarma, “Fragility in dynamic networks: application to neural networks in the epileptic cortex,” Neural Computation, vol. 26, no. 10, pp. 2294–2327, 2014.
[30] Y. Qin, A. El-Gazzar, D. S. Bassett, F. Pasqualetti, and M. van Gerven, “Analytical characterization of epileptic dynamics in a bistable system,” arXiv preprint arXiv:2404.03409, 2024.
[31] J. Touboul, F. Wendling, P. Chauvel, and O. Faugeras, “Neural mass activity, bifurcations, and epilepsy,” Neural computation, vol. 23, no. 12, pp. 3232–3286, 2011.
[32] V. K. Jirsa, W. C. Stacey, P. P. Quilichini, A. I. Ivanov, and C. Bernard, “On the nature of seizure dynamics,” Brain, vol. 137, no. 8, pp. 2210–2230, 2014.
[33] M. Le Van Quyen, J. Martinerie, C. Adam, and F. J. Varela, “Unstable periodic orbits in human epileptic activity,” Physical Review E, vol. 56, no. 3, p. 3401, 1997.
[34] B. Litt, R. Esteller, J. Echauz, M. D’Alessandro, R. Shor, T. Henry, P. Pennell, C. Epstein, R. Bakay, M. Dichter et al., “Epileptic seizures may begin hours in advance of clinical onset: a report of five patients,” Neuron, vol. 30, no. 1, pp. 51–64, 2001.
[35] F. Mormann, R. G. Andrzejak, C. E. Elger, and K. Lehnertz, “Seizure prediction: the long and winding road,” Brain, vol. 130, no. 2, pp. 314–333, 2007.
[36] A. N. Khambhati, K. A. Davis, B. S. Oommen, S. H. Chen, T. H. Lucas, B. Litt, and D. S. Bassett, “Dynamic Network Drivers of Seizure Generation, Propagation and Termination in Human Neocortical Epilepsy,” PLOS Computational Biology, vol. 11, no. 12, p. e1004608, Dec. 2015.
[37] R. J. Lamberts, A. Gaitatzis, and J. W. Sander, “Postictal generalized EEG suppression: An inconsistent finding in people with multiple seizures,” Neurology, vol. 81, no. 14, pp. 1252–1256, 2013.
[38] P. R. Bauer, R. D. Thijs, R. J. Lamberts, and et al., “Dynamics of convulsive seizure termination and postictal generalized EEG suppression,” Brain, vol. 140, pp. 655–668, 2017.
[39] A. Pitk ̈anen and R. Immonen, “Epilepsy related to traumatic brain injury,” Neurotherapeutics, vol. 11, no. 2, pp. 286–296, 2014.
19

[40] B. H. Scheid, A. Ashourvan, J. Stiso, K. A. Davis, F. Mikhail, F. Pasqualetti, B. Litt, and D. S. Bassett, “Time-evolving controllability of effective connectivity networks during seizure progression,” Proceedings of the National Academy of Sciences, vol. 118, no. 5, p. e2006436118, 2021.
[41] W. C. Stacey and B. Litt, “Technology insight: Neuroengineering and epilepsy—designing devices for seizure control,” Nature Clinical Practice Neurology, vol. 4, no. 4, pp. 190–201, 2008.
[42] A. Li, C. Huynh, Z. Fitzgerald, I. Cajigas, D. Brusko, J. Jagid, A. O. Claudio, A. M. Kanner, J. Hopp, S. Chen et al., “Neural fragility as an EEG marker of the seizure onset zone,” Nature Neuroscience, vol. 24, no. 10, pp. 1465–1474, 2021.
[43] K. Lehnertz, “Epilepsy and nonlinear dynamics,” Journal of biological physics, vol. 34, no. 3, pp. 253266, 2008.
[44] V. K. Jirsa, T. Proix, D. Perdikis, M. M. Woodman, H. Wang, J. Gonzalez-Martinez, C. Bernard, C. B ́enar, M. Guye, P. Chauvel et al., “The virtual epileptic patient: individualized whole-brain models of epilepsy spread,” Neuroimage, vol. 145, pp. 377–388, 2017.
[45] M. J. Morrell, “Responsive cortical stimulation for the treatment of medically intractable partial epilepsy,” Neurology, vol. 77, no. 13, pp. 1295–1304, 2011.
[46] G. K. Bergey, M. J. Morrell, E. M. Mizrahi, A. Goldman, D. King-Stephens, D. Nair, S. Srinivasan, B. Jobst, R. E. Gross, D. C. Shields et al., “Long-term treatment with responsive brain stimulation in adults with refractory partial seizures,” Neurology, vol. 84, no. 8, pp. 810–817, 2015.
[47] D. R. Nair, K. D. Laxer, P. B. Weber, A. M. Murro, Y. D. Park, G. L. Barkley, B. J. Smith, R. P. Gwinn, M. J. Doherty, K. H. Noe et al., “Nine-year prospective efficacy and safety of brain-responsive neurostimulation for focal epilepsy,” Neurology, vol. 95, no. 9, pp. e1244–e1256, 2020.
[48] D. J. Englot, J. D. Rolston, C. W. Wright, K. H. Hassnain, and E. F. Chang, “Rates and predictors of seizure freedom with vagus nerve stimulation for intractable epilepsy,” Neurosurgery, vol. 79, no. 3, pp. 345–353, 2016.
[49] J. B. Wagenaar, B. H. Brinkmann, Z. Ives, G. A. Worrell, and B. Litt, “A multimodal platform for cloud-based collaborative research,” in 2013 6th international IEEE/EMBS Conference on Neural Engineering. IEEE, 2013, pp. 1386–1389.
[50] P. Flandrin, “Wavelet analysis and synthesis of fractional brownian motion,” IEEE Transactions on Information Theory, vol. 38, no. 2, pp. 910–917, 1992.
[51] P. Abry and D. Veitch, “Wavelet analysis of long-range-dependent traffic,” IEEE Transactions on Information Theory, vol. 44, no. 1, pp. 2–15, 1998.
[52] G. Gupta, S. Pequito, and P. Bogdan, “Dealing with unknown unknowns: Identification and selection of minimal sensing for fractional dynamics with unknown inputs,” in 2018 Annual American Control Conference. IEEE, 2018, pp. 2814–2820.
[53] S. Boyd, N. Parikh, E. Chu, B. Peleato, and J. Eckstein, “Distributed optimization and statistical learning via the alternating direction method of multipliers,” Foundations and Trends in Machine Learning, vol. 3, no. 1, pp. 1–122, 2011.
[54] R. R. Wilcox, Introduction to Robust Estimation and Hypothesis Testing. Academic press, 2011.
[55] E. A. Reed, G. Ramos, P. Bogdan, and S. Pequito, “Mitigating epilepsy by stabilizing linear fractionalorder systems,” in 2023 American Control Conference. IEEE, 2023, pp. 2228–2233.
[56] J. P. Hespanha, Linear Systems Theory. Princeton University Press, 2018.
20

Supplementary Material
Table 2 shows the excluded segments and the corresponding average R2 across all channels. Negative R2 values indicate the model performance was worse than a mean predictor. All 8 ictal segments from patient HUP70 passed the R2 criterion, but their duration was less than 20 seconds, so we excluded them from the pairwise comparison.
Table 2: Excluded segments summary with mean R2 values and percentage of channels meeting inclusion criteria
Patient Segment Type Count Mean R2 % Good Channels HUP64 Post-ictal 1 0.345 17.4% HUP68 Post-ictal 3 0.313 8.0% HUP78 Pre-ictal 1 0.429 33.7% Post-ictal 1 0.433 32.6% Inter-ictal 5 −0.192 13.5% HUP86 Post-ictal 2 −0.412 0.0% MAYO016 Post-ictal 1 0.328 24.1%
Table 3: Patient-specific fractional order exponents (α) for each epileptic brain state. Values represent median (IQR) across all seizures for each patient-segment combination. Only segments with good model fit (R2 > 0.5 in ≥ 60% of channels) are included. N/A: segment excluded due to poor model fit.
Patient Inter-ictal Pre-ictal Ictal Post-ictal HUP64 0.75 (0.68–0.81) 0.56 (0.51–0.61) 0.60 (0.55–0.65) N/A HUP68 0.80 (0.71–0.89) 0.70 (0.58–0.84) 0.63 (0.54–0.72) 0.67 (0.55–0.80) HUP70 0.75 (0.66–0.84) 0.76 (0.66–0.87) N/A 0.75 (0.66–0.88) HUP72 0.62 (0.55–0.72) 0.99 (0.93–1.04) 0.97 (0.91–1.05) 0.79 (0.73–0.85) HUP78 N/A 0.51 (0.40–0.62) 0.46 (0.36–0.56) 0.50 (0.40–0.62) HUP86 0.75 (0.68–0.82) 0.39 (0.32–0.48) 0.38 (0.32–0.45) N/A MAYO010 0.73 (0.64–0.80) 0.84 (0.74–0.94) 0.75 (0.63–0.85) 0.81-
 (0.73–0.88) MAYO011 0.68 (0.59–0.77) 0.67 (0.57–0.77) 0.68 (0.57–0.80) 1.02 (0.90–1.13) MAYO016 0.78 (0.69–0.87) 0.61 (0.51–0.72) 0.66 (0.54–0.78) 0.99 (0.83–1.16) MAYO020 0.72 (0.62–0.82) 0.80 (0.69–0.90) 0.80 (0.70–0.91) 0.91 (0.79–1.03)
Table 4: Patient-specific eigenvalues for each epileptic brain state. Values represent median (IQR) across all seizures for each patient-segment combination. Only segments with good model fit (R2 ≥ 0.5 in ≥ 60% of channels) are included. N/A: segment excluded due to poor model fit.
Patient Inter-ictal Pre-ictal Ictal Post-ictal HUP64 0.80 (0.77–0.84) 0.73 (0.71–0.75) 0.74 (0.72–0.76) N/A HUP68 0.83 (0.78–0.88) 0.77 (0.74–0.84) 0.76 (0.73–0.78) 0.75 (0.67–0.82) HUP70 0.80 (0.76–0.85) 0.80 (0.76–0.87) N/A 0.80 (0.76–0.87) HUP72 0.74 (0.72–0.77) 0.96 (0.90–1.01) 0.96 (0.90–1.02) 0.62 (0.54–0.75) HUP78 N/A 0.73 (0.70–0.76) 0.72 (0.69–0.76) 0.73 (0.69–0.76) HUP86 0.80 (0.76–0.83) 0.72 (0.70–0.75) 0.72 (0.70–0.74) N/A MAYO010 0.77 (0.74–0.81) 0.86 (0.79–0.93) 0.80 (0.75–0.86) 0.80-
 (0.69–0.87) MAYO011 0.77 (0.74–0.80) 0.77 (0.74–0.80) 0.77 (0.73–0.81) 0.96 (0.80–1.08) MAYO016 0.82 (0.77–0.87) 0.74 (0.71–0.77) 0.75 (0.72–0.80) 0.93 (0.81–1.10) MAYO020 0.78 (0.74–0.84) 0.82 (0.77–0.89) 0.82 (0.77–0.90) 0.86 (0.77–0.98)
Analysis of Poor Model Fits
For α, HUP78 showed markedly lower values during inter-ictal states (median = 0.11, IQR: −0.030.27) compared to the inter-ictal median of 0.73 observed across good fits. HUP86 exhibited negative α
21

Table 5: Patient-specific fractional order exponents (α) and eigenvalues for excluded segments with poor model fit (R2 < 0.5 in ≥ 40% of channels). Values represent median (IQR) across all seizures for each patient-segment combination.
Patient Segment α Eigenvalue HUP64 Post-ictal 0.27 (0.20–0.38) 0.52 (0.44–0.60) HUP68 Post-ictal 0.35 (0.26–0.44) 0.58 (0.48–0.66) HUP78 Inter-ictal 0.11 (−0.03–0.27) 0.84 (0.73–1.01) Pre-ictal 0.33 (0.24–0.44) 0.75 (0.69–0.79) Post-ictal 0.27 (0.18–0.38) 0.77 (0.70–0.82) HUP86 Post-ictal −0.06 (−0.24–0.04) 0.90 (0.79–1.20) MAYO016 Post-ictal 0.68 (0.58–0.78) 0.73 (0.66–0.81)
values during post-ictal states (median = −0.06, IQR: −0.24–0.04). Most excluded post-ictal segments demonstrated substantially reduced α values, except for MAYO016 (median = 0.68). Excluded eigenvalue segments showed greater heterogeneity across patients. HUP78’s inter-ictal segment displayed considerably wider variability (IQR: 0.73–1.01) compared to inter-ictal segments with good fits. Post-ictal eigenvalues were notably lower in HUP64 (median = 0.52) and HUP68 (median = 0.58), both falling out-
side the typical range observed in good-fit post-ictal segments. These extreme values likely contributed to the poor model fits, suggesting fundamentally different underlying dynamics in these excluded segments.
Patient-Specific Parameter Distributions
Figures 10 and 11 show individual patient distributions for good fits, while Figures 12 and 13 include all data.
22

Interictal Preictal Ictal Postictal
0.50
0.25
0.00
0.25
0.50
0.75
1.00
1.25
1.50
A
***
***
***
***
***
***
Interictal Preictal Ictal Postictal
0.0
0.2
0.4
0.6
0.8
1.0
1.2
1.4
1.6
Eigenvalue
B
***
***
***
***
***
***
Figure 9: Violin plots of fractional-order system parameters across seizure segments (inter-ictal, pre-ictal, ictal, post-ictal). (A) Fractional-order exponents α characterizing long-term memory of iEEG signals. (B) Eigenvalues from A0 matrix showcasing network dynamics. Data are pooled from all segments, including those with poor model fits.
23

Interictal Preictal Ictal Postictal
0
1
HUP64
Interictal Preictal Ictal Postictal
0
1
HUP68
Interictal Preictal Ictal Postictal
0
1
HUP70
Interictal Preictal Ictal Postictal
0
1
HUP72
Interictal Preictal Ictal Postictal
0
1
HUP78
Interictal Preictal Ictal Postictal
0
1
HUP86
Interictal Preictal Ictal Postictal
0
1
MAYO010
Interictal Preictal Ictal Postictal
0
1
MAYO011
Interictal Preictal Ictal Postictal
0
1
MAYO016
Interictal Preictal Ictal Postictal
0
1
MAYO020
Figure 10: Violin plots of the distribution of fractional-order exponents (α) across segments for each patient from only those with good model fit (R2 ≥ 0.5 in ≥ 60% of channels).
24

Interictal Preictal Ictal Postictal
0.0
0.5
1.0
1.5
Eigenvalue
HUP64
Interictal Preictal Ictal Postictal
0.0
0.5
1.0
1.5 HUP68
Interictal Preictal Ictal Postictal
0.0
0.5
1.0
1.5
Eigenvalue
HUP70
Interictal Preictal Ictal Postictal
0.0
0.5
1.0
1.5 HUP72
Interictal Preictal Ictal Postictal
0.0
0.5
1.0
1.5
Eigenvalue
HUP78
Interictal Preictal Ictal Postictal
0.0
0.5
1.0
1.5 HUP86
Interictal Preictal Ictal Postictal
0.0
0.5
1.0
1.5
Eigenvalue
MAYO010
Interictal Preictal Ictal Postictal
0.0
0.5
1.0
1.5 MAYO011
Interictal Preictal Ictal Postictal
0.0
0.5
1.0
1.5
Eigenvalue
MAYO016
Interictal Preictal Ictal Postictal
0.0
0.5
1.0
1.5 MAYO020
Figure 11: Violin plots of the distribution of eigenvalues across segments for each patient from only those with good model fit (R2 ≥ 0.5 in ≥ 60% of channels)
25

Interictal Preictal Ictal Postictal
0
1
HUP64
Interictal Preictal Ictal Postictal
0
1
HUP68
Interictal Preictal Ictal Postictal
0
1
HUP70
Interictal Preictal Ictal Postictal
0
1
HUP72
Interictal Preictal Ictal Postictal
0
1
HUP78
Interictal Preictal Ictal Postictal
0
1
HUP86
Interictal Preictal Ictal Postictal
0
1
MAYO010
Interictal Preictal Ictal Postictal
0
1
MAYO011
Interictal Preictal Ictal Postictal
0
1
MAYO016
Interictal Preictal Ictal Postictal
0
1
MAYO020
Figure 12: Violin plots of the distribution of fractional-order exponents (α) across segments for each patient, including all data regardless of model fit quality.
26

Interictal Preictal Ictal Postictal
0.0
0.5
1.0
1.5
Eigenvalue
HUP64
Interictal Preictal Ictal Postictal
0.0
0.5
1.0
1.5 HUP68
Interictal Preictal Ictal Postictal
0.0
0.5
1.0
1.5
Eigenvalue
HUP70
Interictal Preictal Ictal Postictal
0.0
0.5
1.0
1.5 HUP72
Interictal Preictal Ictal Postictal
0.0
0.5
1.0
1.5
Eigenvalue
HUP78
Interictal Preictal Ictal Postictal
0.0
0.5
1.0
1.5 HUP86
Interictal Preictal Ictal Postictal
0.0
0.5
1.0
1.5
Eigenvalue
MAYO010
Interictal Preictal Ictal Postictal
0.0
0.5
1.0
1.5 MAYO011
Interictal Preictal Ictal Postictal
0.0
0.5
1.0
1.5
Eigenvalue
MAYO016
Interictal Preictal Ictal Postictal
0.0
0.5
1.0
1.5 MAYO020
Figure 13: Violin plots of the distribution of eigenvalues across segments for each patient, including all data regardless of model fit quality.
27

0 4 8 12 16
10
20
30
40
50
60
70
80
Electrodes
A Interictal
0 4 8 12 16
10
20
30
40
50
60
70
80
Preictal
20 24 28 32 36
10
20
30
40
50
60
70
80
Ictal
127 131 135 139 143
10
20
30
40
50
60
70
80
Postictal
0 4 8 12 16
10
20
30
40
50
60
70
80
Electrodes
B
0 4 8 12 16
10
20
30
40
50
60
70
80
20 24 28 32 36
10
20
30
40
50
60
70
80
127 131 135 139 143
10
20
30
40
50
60
70
80
0 4 8 12 16
0.25
0.00
0.25
0.50
0.75
1.00
1.25
C
0 4 8 12 16
0.25
0.00
0.25
0.50
0.75
1.00
1.25
20 24 28 32 36
0.25
0.00
0.25
0.50
0.75
1.00
1.25
127 131 135 139 143
0.25
0.00
0.25
0.50
0.75
1.00
1.25
0 4 8 12 16 Time (s)
0.2
0.4
0.6
0.8
1.0
1.2
Eigenvalue
D
0 4 8 12 16 Time (s)
0.2
0.4
0.6
0.8
1.0
1.2
20 24 28 32 36 Time (s)
0.2
0.4
0.6
0.8
1.0
1.2
127 131 135 139 143 Time (s)
0.2
0.4
0.6
0.8
1.0
1.2
0.0
0.2
0.4
0.6
0.8
1.0
Figure 14: Representative visualization for Patient HUP64, Seizure 1. Each column corresponds to one segment (inter-ictal, pre-ictal, ictal, post-ictal). Rows show: (A) raw iEEG signals from 86 electrodes with seizure onset zone (SOZ) channels in red, (B) heatmap of FOS model R2 fit values across electrodes, (C) boxplot of estimated α values across windows, and (D) boxplot of estimated eigenvalues across windows. Notably, the post-ictal segment did not have an accurate FOS fit, and both eigenvalue-
s and α values are much lower than all other segments.
28

0.0 0.2 0.4 0.6 0.8 1.0 Real
0.6
0.4
0.2
0.0
0.2
0.4
0.6
Imaginary
1.5 1.0 0.5 0.0 0.5 1.0 1.5 Real
2
1
0
1
2
Before control After control
Figure 15: HUP78 Seizure 1. Red shows eigenvalues of the system matrix A0 on the complex plane during seizure onset before applying stabilizing control. The fractional-order dynamical network is stable, according to our stability criterion (all eigenvalues within the unit circle). Blue shows eigenvalues of the simulated system matrix A0 during seizure onset after applying stabilizing control. The control not only failed to improve stability but actually destabilized the system, shifting it from st-
able to unstable(max|λ| ≥ 1), demonstrating a failure of the control algorithm.
29

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:53.308Z
- **Text Length:** 71924 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 29 of 29
