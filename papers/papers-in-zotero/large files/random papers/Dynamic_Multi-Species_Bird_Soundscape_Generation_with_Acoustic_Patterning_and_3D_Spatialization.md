# PDF Document: Zhang et al. - 2025 - Dynamic Multi-Species Bird Soundscape Generation with Acoustic Patterning and 3D Spatialization.pdf

**File Path:** Zhang et al. - 2025 - Dynamic Multi-Species Bird Soundscape Generation with Acoustic Patterning and 3D Spatialization.pdf

**Processed Date:** 2026-02-10T18:15:00.621Z

**File Size:** 13624.89 KB

**Total Pages:** 10

**Extracted Pages:** 10

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3313

**Title:** Dynamic Multi-Species Bird Soundscape Generation with Acoustic Patterning and 3D Spatialization

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Dynamic Multi-Species Bird Soundscape
Generation with Acoustic Patterning and 3D
Spatialization
Ellie L. Zhang IntelliSky McLean, USA elzhang@intellisky.org
Duoduo Liao
George Mason University Fairfax, USA dliao2@gmu.edu
Callie C. Liao Stanford University Stanford, USA ccliao@stanford.edu
Abstract—Generation of dynamic, scalable multi-species bird soundscapes remains a significant challenge in computer music and algorithmic sound design. Birdsongs involve rapid frequencymodulated chirps, complex amplitude envelopes, distinctive acoustic patterns, overlapping calls, and dynamic inter-bird interactions, all of which require precise temporal and spatial control in 3D environments. Existing approaches, whether Digital Signal Processing (DSP)-based or data-driven, typically focus only o-
n single species modeling, static call structures, or synthesis directly from recordings, and often suffer from noise, limited flexibility, or large data needs. To address these challenges, we present a novel, fully algorithm-driven framework that generates dynamic multi-species bird soundscapes using DSP-based chirp generation and 3D spatialization, without relying on recordings or training data. Our approach simulates multiple independentlymoving birds per species along different moving 3D traje-
ctories, supporting controllable chirp sequences, overlapping choruses, and realistic 3D motion in scalable soundscapes while preserving species-specific acoustic patterns. A visualization interface provides bird trajectories, spectrograms, activity timelines, and sound waves for analytical and creative purposes. Both visual and audio evaluations demonstrate the ability of the system to generate dense, immersive, and ecologically inspired soundscapes, highlighting its potential for computer music,-
 interactive virtual environments, and computational bioacoustics research. Index Terms—Birdsong generation, multi-species soundscape synthesis, acoustic patterning, 3D trajectories, spatialization, Digital Signal Processing (DSP), ecoacoustic-inspired computer music, computational bioacoustics.
I. INTRODUCTION
Generating dynamic bird vocalizations and scalable multispecies soundscapes is a long-standing challenge in computer music and algorithmic sound design as well as bioacoustics research. Particularly, birdsongs exhibit rapid, highly structured frequency-modulated chirps, intricate amplitude envelopes, distinctive acoustic patterns, overlapping calls, rich multi-voice interactions, and dynamic inter-bird behaviors, all of which contribute to complex and continuously evolving acoustic textures [1]–[3-
]. Accurately reproducing these features in three-dimensional (3D) space requires precise control over oscillators, modulation schemes, temporal envelopes, and the simulation of spatial and dynamic interactions among multiple vocal sources [4].
Although prior work has explored the synthesis of bird calls using Digital Signal Processing (DSP) [5] or biophysically realistic models of the vocal apparatus [6], [7], these approaches typically focus on 1) a single species, 2) static or hand-designed call structures, or 3) synthesis directly from real recordings [2], which are difficult to scale to multi-species interaction environments. Consequently, fully algorithmic, dynamic, scalable multi-species soundscape generation remains a challenge d-
ue to overlapping calls, varying movement, and the need for realistic 3D perception [4]. Recent advances in computational bioacoustics [8], [9] and immersive technologies [10], [11], such as Virtual Reality (VR) [12], [13], have enabled detailed sound synthesis and environmental audio modeling. However, most existing methods still neglect species-specific acoustic variability and scalability. Some rely heavily on static recordings that cannot be flexibly adapted to new contexts. These limit their -
usefulness for interactive applications, scalable virtual environments, or generated sound design. Moreover, recent approaches predominantly rely on recorded bird vocalizations or data-driven methods [9], [14], including machine learning models, which present significant limitations. Collecting field recordings is labor-intensive, often contaminated by background noise, and provides limited flexibility for generating novel or controllable soundscapes. Data-driven models, on the other hand, require-
 large and diverse training datasets and are inherently constrained by the scope and variability of the recorded material. Furthermore, biological audio datasets are often small or imbalanced, as species-specific or rare calls are difficult to obtain. To address these challenges, we propose a novel, fully algorithmic and DSP-based framework to generate dynamic, scalable multi-species bird soundscapes that integrates speciesspecific temporal and spectral patterns, chirp-level dynamics, overlapping -
calls, inter-bird variability, and 3D spatialization. This framework enables controllable, scalable, and dynamic simulation of multi-species bird activity in 3D space, capturing both acoustic and behavioral diversity without relying on recordings or training data. Moreover, the framework includes visualization tools for bird trajectories, spectrograms, activity
arXiv:2511.19275v1 [cs.SD] 24 Nov 2025

timelines, and waveforms, enabling quantitative analysis of spatial and temporal patterns in the simulated soundscape. To our knowledge, no prior work combines fully algorithmic generation with species-specific acoustic patterning, multi-species interaction, and realistic 3D spatialization. This approach expands opportunities for interactive audio, computer music composition, immersive virtual environments, and bioacoustic research. The main contributions of this work are:
• A fully algorithmic DSP-based framework for dynamic multi-species 3D soundscape generation, capturing species-specific frequency and temporal chirp features without relying on recordings or machine learning, thereby expanding controllable sound design in computer music and computational bioacoustics. • A real-time 3D spatialization and movement model that integrates dynamic trajectories, vectorized panning, and distance-based attenuation, enabling spatial motion to function as a musically expres-
sive parameter in immersive audio environments. • A multi-species interaction system that supports overlapping calls, temporal interplay, and 3D spatialization, creating a novel algorithmic approach for generating complex, dynamic, and scalable bird soundscapes. • A comprehensive set of mathematical formulations provided for 3D bird-soundscape generation, unifying chirplevel signal synthesis, 3D acoustic spatialization, and multi-species soundscape modeling in a fully reproducible framework. • Vis-
ualization of trajectories, spectrograms, chirp activity timelines, and comparative analysis that support analytical evaluation and creative exploration of algorithmic sound processes and pedagogical use. • An extensible platform that bridges computer music, algorithmic composition, virtual environments, and ecological audio simulation, providing artists and researchers with a flexible system for generating controlled and ecologically-informed 3D soundscapes.
II. RELATED WORK
A. Foundations of Bird Vocalization
Early studies have provided a biological and ecological basis for understanding bird vocalizations. Bradbury and Vehrencamp [15] formalized the principles of song structure, while Sueur et al. [16] examined soundscape ecology using passive acoustic monitoring. These foundational studies inform computational modeling approaches that aim to capture the temporal and spectral characteristics of bird calls. Traditional parametric and signal-based modeling techniques include chirp generation, linear and-
 exponential frequency sweeps, and amplitude envelope shaping [5]. Such methods provide interpretable models for individual calls but are often limited in capturing complex interactions in multi-species environments. More recently, although deep learning approaches have been largely applied for species classification and call detection
[17], [18], generative modeling for realistic simulation remains relatively underexplored. In contrast, our approach simulates dynamic and scalable soundscapes for multiple bird species in 3D environments with pure algorithms, incorporating speciesspecific acoustic patterns, overlapping calls, inter-species variability, and 3D spatial trajectories.
B. Birdsong Synthesis Techniques
Birdsong synthesis has been approached from multiple perspectives in computer music. Single-voice or monophonic methods, often based on physical modeling, include Frequency Modulation (FM) synthesis [19], additive synthesis [20], and nonlinear modulation techniques [21], [22]. These approaches can produce expressive bird-like timbres but generally focus on isolated sounds and do not account for dynamic, scalable multi-species soundscapes or spatial movement. Recently, data-driven and sample-based -
methods leveraging recorded bird calls or machine learning models have been employed to generate more naturalistic sequences [23], [24]. Although these methods can reproduce realistic sounds, they typically require large datasets, suffer from noise contamination, and offer limited control over fine-grained temporal and spatial variation [16], [25]. Consequently, current approaches struggle to capture overlapping calls, inter-bird interactions, or fully 3D immersive soundscape. By contrast, our met-
hod generates clear, noise-free birdsongs with multiple independently moving birds per species, fully controllable chirp patterns, and 3D spatialization, all achieved through scalable, algorithmic DSP without relying on prior recordings or large training datasets.
C. 3D Spatialized Bird Soundscapes
For 3D audio rendering [12], [13], spatialization techniques including amplitude panning, distance attenuation, and trajectory-based movement are widely used in gaming and VR [26]–[29]. However, few studies have applied these methods to ecological simulations [30]. Previous digital soundscape simulations have typically relied on recorded calls or simple tone synthesis [31]. Moreover, very little published work combines fully algorithmic bird soundscape generation with 3D spatial sound rendering. I-
n particular, integrating species-specific acoustic models into dynamic, multi-species 3D soundscapes remains an open challenge. In this context, our work innovatively combines digital sound techniques with species-specific acoustic patterns, multi-bird movement, and interspecies interactions to simulate dynamic 3D birdsong soundscapes, offering a promising direction for both ecological and musical applications.
III. METHODOLOGY
We present an efficient framework for synthesizing dynamic, multi-species bird soundscapes with realistic acoustic and spatial properties. The approach consists of four main stages: (1) chirp generation, using DSP-based models to simulate species-specific vocalizations with variable temporal and spectral features; (2) 3D spatialization, assigning dynamic trajectories to produce realistic movement and immersive

Fig. 1. The framework of multi-species 3D bird soundscape generation.
spatial perception; (3) multi-species bird soundscape synthesis, combining individual calls to simulate multi-species multi-bird interactions and musically engaging textures; and (4) audio rendering and visualization evaluation, including bird trajectories, spectrograms, activity timelines, comparative analysis of 3D audio waveforms, and WAV audio files for compositional or analytical use. This integrated DSP pipeline enables ecologically realistic and musically expressive auditory simulations. Fi-
gure 1 outlines the framework, and the following sections detail each stage, including the mathematical formulations underlying call synthesis, feature modeling, and spatialization.
A. Chirp Generation
Chirp signals are synthesized through DSP [32], employing a linear frequency sweep combined with a windowed amplitude envelope and a low-amplitude sinusoidal modulation (trill). The frequency transitions from a start (f0) to an end (f1) frequency over a fixed duration, while the envelope ensures smooth onset and offset, and the trill introduces rapid frequency fluctuations, enabling precise control on the chirp’s temporal and spectral properties. Each species is modeled with distinct chirp charact-
eristics, including frequency ranges, trill rate, duration, repetition rate, and pause.
1) Linear Frequency Sweep: The linear frequency sweep f (t) defines the pitch of a bird chirp (i.e., the perceived
frequency), specifying how it evolves linearly evolves over time, from a start pitch to an end pitch over a duration:
f (t) = f0 + (f1 − f0) t
T , 0 ≤ t ≤ T (1)
where f0 and f1 are the start and end frequencies, and T is the chirp duration. 2) Trill Modulation: To synthesize realistic bird-like chirps, the instantaneous frequency ftrill(t) combines a smooth linearly varying pitch component (the sweep) with rapid oscillations (the trill). Integrating this instantaneous frequency over time produces the corresponding phase of the sine wave, thereby generating a frequency-modulated waveform. The function ftrill(t) is defined as:
ftrill(t) = f (t) · (1 + a · sin(2πrt)) (2)
where r is the trill rate and a is the modulation amplitude (dimensionless, typically 0 < a < 1). 3) Smooth Chirp Envelope: The chirp envelope, controlling amplitude over time, is shaped using a smooth window function to prevent clicks and emulate the gradual amplitude modulation of natural bird vocalizations. Mathematically, it is defined as:
A(t) = sinn π t
T (3)

where n controls fade smoothness. This envelope smoothly increases the amplitude from zero at t = 0 to a maximum at t = T /2 and decreases back to zero at t = T , ensuring a natural fade-in and fade-out of the chirp. 4) Chirp Synthesis: A chirp is a frequency-modulated signal whose instantaneous frequency varies over time. To generate a realistic chirp, we combine a linear frequency sweep, a trill modulation, and a smooth amplitude envelope. Mathematically, the chirp signal for a certain species -
is defined as:
s(t) = A(t) · sin 2π
Zt
0
ftrill(τ ) dτ
where ftrill(t) is the instantaneous frequency and A(t) is the amplitude envelope. The integral term defines the instantaneous phase by accumulating frequency variations over time, producing the continuous frequency variations typical of bird calls. The amplitude envelope A(t) is applied to control the onset and offset of the signal, reducing transient artifacts and approximating the smooth intensity variations characteristic of natural bird vocalizations. This formulation enables the generation o-
f naturalistic chirps with controlled frequency sweeps and amplitude modulation.
B. 3D Spatialization
To realistically simulate birds within a 3D auditory scene, stereo signals are generated by applying distance-based attenuation and azimuth-dependent panning. Bird positions are dynamically updated over time, and these spatial transformations are computed for each chirp segment to maintain continuous and perceptually accurate spatialization.
1) Bird Motion and Trajectory Modeling: Bird positions are updated per chirp using sinusoidal trajectories to emulate natural motion:
x(t) = x0 + ∆x sin(2πfxt),
y(t) = y0 + ∆y sin(2πfyt),
z(t) = z0 + ∆z sin(2πfzt),
(4)
where ∆x,y,z control movement amplitude and fx,y,z are low-frequency modulations along each axis. This approach allows larger, smooth movements and generates a more dynamic and realistic soundscape.
2) Distance-based Attenuation: The listener is assumed to be at the origin. The distance d(t) and azimuth angle θ(t) in the horizontal (x-y) plane of each bird relative to the listener are computed as:
d(t) = px(t)2 + y(t)2 + z(t)2, (5)
θ(t) = arctan 2 y(t), x(t) . (6)
The distance d(t) is used to compute the amplitude attenuation α(t) according to the inverse distance law:
α(t) = 1
1 + d(t) , (7)
3) Stereo Panning: The azimuth angle θ(t) determines the stereo panning using the equal-power stereo formula:
L(t) = s(t) · α(t) · cos θ(t)
2,
R(t) = s(t) · α(t) · sin θ(t)
2,
(8)
where s(t) denotes the chirp signal and L(t) and R(t) represent the left and right stereo channels, respectively. This approach achieves perceptually accurate spatialization by combining distance-based attenuation with azimuth-dependent panning, enabling listeners to perceive both lateral and depth cues of each moving bird within the synthesized soundscape [33].
C. Multi-Species Bird Soundscape Synthesis
The stereo signals from all birds are summed over time. To prevent clipping, the resulting waveform is normalized. Each species and individual bird emits multiple chirps according to its rate parameters, producing an evolving multi-species soundscape. For N birds of S species, each track xs,n(t) is generated and summed:
S(t) =
S
X
s=1
Ns
X
n=1
xs,n(t) (9)
Normalization ensures that the combined signal stays within [-1,1]. Chirp times are recorded to plot activity timelines. The final soundscape is computed by summing individual bird tracks, with normalization to prevent clipping:
Snormalized(t) = S(t)
max |S(t)| (10)
D. Audio Rendering and Visualization Evaluation
Visualization and audio analysis are used to examine bird trajectories, spectrograms, and activity timelines, while generated audio files support listening tests and auditory evaluation. These evaluations provide insight into the quality and behavior of the synthesized bird-like sounds in 3D space. 1) Audio Rendering: The audio rendering employs digital sound synthesis and multichannel spatialization techniques, ensuring perceptually coherent spatial cues and timbral fidelity during playback. Ster-
eo output is used to preserve the spatialization of bird sounds within the simulated 3D environment. The stereo panning technique is applied to reflect the relative positions of each bird, creating a dynamic representation of their movements across the virtual soundscape. Distance attenuation is also incorporated to simulate changes in volume as birds moved closer to or farther from the listener. This allows for realistic changes in sound intensity and spatial awareness, enhancing the overall audi-
tory experience and ensuring that the 3D spatial cues were faithfully represented in the stereo field.

TABLE I BIRD SPECIES PARAMETERS
Species Freq Range (Hz) Chirp Duration Range (s) Trill Rate Range (Hz) # of Birds Bird A 400-1200 0.6-1.0 5-10 1 Bird B 3000-8000 0.6-1.0 2-6 2 Bird C 2000-10000 0.1-0.3 4-7 1 Bird D 1000-4000 0.2-0.4 1-3 1 Bird E 3500-7500 0.1-0.3 2-7 2
2) Visualization: Several complementary visualizations are used to analyze the spatial trajectories and vocal activity of individual birds: 1) three-dimensional trajectory plots characterize each bird’s movement within the simulated environment; 2) spectrograms provide a detailed view of the temporal and spectral structure of the chirps, including difference between left and right channels, enabling analysis of timbre and spectral evolution; 3) bird chirp activity timelines summarize the temporal -
distribution of vocalizations for each bird over the specified observation period; 4) timeresolved spectrograms combines the activity timeline with its corresponding spectrogram, enabling joint inspection of temporal vocal activity and spectral features within a unified multimodal representation; and 5) comparative analysis of 3D audio waveforms, specifically the differences between the left and right channels, provides insight into how bird movement within the 3D space influences spatial audio dy-
namics.
These evaluation techniques provide a comprehensive framework for analyzing spatial dynamics, temporal organization, and species-specific vocal characteristics in the simulated auditory scenes, while grounding the analysis in principles widely used in computer music for rendering and interpreting complex auditory data.
IV. EXPERIMENTS AND ANALYSIS
The experiments aim to demonstrate the capabilities of the system in generating musically expressive and spatially
Fig. 2. Chirp signal and instantaneous frequency derived from acoustic features (f0 = 400 Hz, f1 = 1180 Hz, trill rate = 9 Hz, duration = 0.7 s).
dynamic bird sounds. Rather than perceptual testing, we emphasize evaluation metrics for bird soundscapes based on both visual and audio representations: 1) chirp signal and modulation, showing species-specific trill modulation and amplitude envelopes; 2) spectrograms of multi-species soundscapes, illustrating overlapping calls and spectral diversity; 3) bird chirp activity timelines, highlighting temporal patterns of vocalizations across species; 4) per-bird time-resolved spectrograms, indicating-
 each bird’s frequency trajectory and temporal structure, as well as pattern consistency and interactions between individual birds; 5) 3D bird trajectories, visualizing independent movement patterns of multiple birds within 3D space; 6) left-right channel spectrogram comparison with differences, analyzing spatial or source variations in the stereo audio signal; and 7) comparative analysis of 3D audio waveforms, accurately capturing bird movements and positions within the 3D virtual space.
A. Experiment Setup
The framework was implemented entirely in Python for DSP-based chirp synthesis, 3D spatialization, visualization, and audio rendering. Audio output was generated as WAV files at 44.1 kHz sampling rate for offline playback. In the experiments, we synthesized 3D soundscapes featuring five species: Bird A, Bird B, Bird C, Bird D, and Bird E. Each species contains one or two birds, each placed at randomized initial positions within the virtual environment. Table I summarizes the chirp parameters for e-
ach species,
Fig. 3. Chirp signal and instantaneous frequency derived from acoustic features (f0 = 4970 Hz, f1 = 5350 Hz, trill rate = 7 Hz, duration = 0.2 s).

Fig. 4. Spectrogram of left channel showing overlapping multi-species bird calls.
Fig. 5. Bird chirp activity timelines.
including the frequency range, chirp duration range, trill rate range, and the number of birds. The system is capable of generating an extensive variety of birdsong soundscapes, a representative example of which is analyzed in the following subsections. A corresponding WAV audio file1 of the generated soundscape is provided as well.
B. Chirp Signal and Modulation
Figure 2 illustrates a synthesized birdsong chirp generated using parameters typical of a short tonal call: starting frequency (f0) = 400 Hz, ending frequency (f1) = 1180 Hz, trill rate 9 Hz, and duration 0.7 seconds. In the upper panel, the waveform begins with low-frequency oscillations that gradually increase in density as the chirp sweeps upward toward the higher final frequency. A smooth amplitude envelope applies a fade-in at the start and fade-out at the end, producing the symmetric, tapere-
d energy profile characteristic of natural bird vocalizations. Superimposed 9 Hz trill modulation generates periodic clusters of oscillations, creating a rapid vibratory texture. The lower panel shows the instantaneous frequency, revealing the linear sweep from 400 Hz to 1180 Hz along with sinusoidal fluctuations from the trill. These features show how controlled frequency sweeps, amplitude shaping, and structured trill modulation combine to synthesize a naturalistic chirp. Figure 3 shows another -
example of generated chirp, using different acoustic features (f0 = 4970 Hz, f1 = 5350 Hz,
1Generated birdsong audio demo.
trill rate 7 Hz, duration 0.2 s), along with its corresponding instantaneous frequency. This further demonstrates how the same synthesis principles can generate varied synthetic birdsong elements.
C. Spectrogram of Multi-Species Soundscapes
The left-channel spectrogram in Figure 4 demonstrates the chirp frequencies for each bird of different species. In the figure, the highlighted green lines represent the frequency motion of the 3D soundscape of each of all seven birds, including five bird species. The green lines are measured by frequency, with a high frequency representing high pitches and a low frequency representing a lower pitch. The white spacings of different widths between the blue-green colored spectrogram represent the ove-
rall pauses of all the birdsongs sang in the soundscape, mimicking natural birdsong patterns sang by real-world birds. For instance, the first section of the left-channel spectrogram displays two high frequency hill peaks at the beginning and before the pause, as well as a lower frequency wave pattern at the bottom. The diverse changes of the frequency motion of each bird reveal the combination of overlapping bird species songs at a specified time interval in the generated soundscape, revealing a -
realistic nature soundscape in addition to the 3D trajectories.
D. Bird Chirp Activity Timelines
Figure 5 displays the bird chirp activity timeline for all seven birds across five species. Each species is assigned a

Fig. 6. Time-resolved spectrograms: chirp activity timeline per bird, demonstrating overlap and temporal patterns.
distinct color, such as cyan for the Bird E species. The length of each rectangle represents the duration of an individual bird chirp’s, mapped to the specified time scale on the x-axis. The gaps between the rectangles indicate the duration of pauses between chirps, mimicking the natural patterns observed in real-world bird vocalizations. Birds of the same species tend to exhibit similar chirp lengths and pause intervals; for example, Bird E 1 and 2 show comparable chirp patterns, while Bird A 1 a-
nd Bird C 1 display notably contrasting chirp characteristics. The variation in both chirp and pause duration not only reflects the natural dynamics of bird vocalization patterns, but also captures species-specific differences in frequency range and chirp duration.
E. Time-Resolved Spectrograms
Figure 6 presents detailed per-bird chirp timelines alongside time-resolved spectrograms, providing a comprehensive visualization of vocal activity across individuals. These representations not only capture the precise timing and duration of each bird’s chirps, but also reveal temporal overlaps and potential interactions between birds. By aligning the chirp events with their corresponding spectral features, the figure highlights patterns of coordination, call overlap, and sequential calling, offer-
ing insights into the dynamics of acoustic communication within the group. Moreover, the spectrograms for each bird indicate that the frequency trajectories form smooth or rapid pitch sweeps, closely resembling the expressive contours typical of stylized bird calls. The temporal organization is also well articulated, with distinct onsets, clean offsets, and natural inter-event spacing that mirror the rhythmic structure found in real bird-like
vocal gestures. Examining multiple generated examples shows strong pattern consistency, indicating that the synthesis method reliably produces stable and coherent chirp structures rather than random or noisy artifacts. Furthermore, no discontinuities, energy smearing, or unexpected spectral bands are observed, indicating that the synthesis system generates robust, artifactfree outputs. Overall, the visual analysis demonstrates that the generated sounds are convincingly bird-like, with preserved cl-
arity, structural coherence, and reproducibility.
F. 3D Bird Trajectories
Fig. 7. 3D trajectories of each bird.
Figure 7 illustrates 3D bird movements over time. Each color line represents each bird, as indicated in the key. The

Fig. 8. Comparative analysis of left and right channel spectrograms with highlighted differences.
3D scale shows the spatial location of each bird, contributing to the 3D stereo effect, with the audio output originating from the center of the 3D space. For example, the path of Bird E 1, ranging from -0.1-0.8 on the x-axis and 0.3-1.5 in height, indicates that its birdsong will be heard from the middle right in the 3D stereo output. In contrast, the path of Bird B 1, ranging from -1.0 to 0.75 on the x-axis, results in its birdsongs moving across both the left and right channels, as the bird fli-
es from left to right (or vice versa), with the sound positioned in the middle of the 3D stereo field. This figure demonstrates the spatialization capabilities of the framework, showing how individual bird trajectories are reconstructed within the simulated auditory scene. These trajectories serve as spatial control parameters for dynamic source positioning. The figure also highlights the support of the system for complex, non-linear movement patterns, with each bird following a unique path on the-
 xy-plane and varying elevation along the z-axis. This variability is essential for maintaining spatial clarity, even in overlapping motion scenarios. The examples show that the framework generates rich positional data necessary for realistic 3D auditory scene synthesis, aligning with spatialization techniques commonly used in computer music and sound design.
G. Left-Right Channel Spectrogram Comparison
In Figure 8, the three-panel spectrogram visualization effectively compares the left and right audio channels along with their difference over a 20-second interval. The top panel displays the frequency content of the left channel, showing
prominent activity concentrated primarily below 7,500 Hz, with occasional higher-frequency bursts reaching up to around 20,000 Hz. The middle panel shows the right channel with a similar pattern and frequency distribution but subtle variations in intensity and timing, as indicated by slightly different spectral shapes and brightness. The intensity colormaps of both left and right channels show dynamic variations, with energy levels ranging from approximately −320 dB to −100 dB. The bottom panel de-
picts the differential spectrogram, highlighting the discrepancies between channels, using a diverging redblue colormap to indicate positive and negative intensity differences up to ±20 dB. This difference plot effectively emphasizes localized spectral disparities, suggesting channelspecific variations potentially arising from stereo recording characteristics or spatial filtering effects.
H. 3D Audio Rendering
To evaluate the effectiveness of the audio rendering approach, we synthesized multiple 20-second soundscapes featuring five species. The birds’ vocalizations were generated based on the species-specific parameters, ensuring that the acoustic patterns, temporal modulation, and spatial movement were accurately represented. In the experiments, the resulting audio was played back in stereo, with panning and distance attenuation applied in real time based on the birds’ 3D trajectories. The positioning -
and movement of each bird within the simulated space were also visualized to assess the spatial coherence of the soundscapes as shown in Figure 7. The experiments focused on ensuring that the synthesized

Fig. 9. Comparative analysis of left and right stereo channels with highlighted differences.
bird sounds preserved perceptual accuracy in both auditory spatialization and naturalistic variation of vocal patterns.
I. Comparative Analysis of 3D Audio Waveforms
Figure 9 presents a comparative visualization of the stereo audio signal by plotting the left channel, right channel, and their sample-wise difference over a 20-second duration for a multi-bird soundscape consisting of several species. The left and right channels display similar structures with subtle variations in amplitude and timing, reflecting the movement of multiple birds within the 3D space. These differences, highlighted in the difference plot (orange), correspond to spatial effects such a-
s panning and phase shifts caused by birds moving at different positions and distances relative to the listener. For example, when birds move from left to right, the right channel’s amplitude increases while the left channel’s decreases. The difference plot reveals how overlapping bird vocalizations are distributed across the stereo field, confirming the ability of the system to accurately render dynamic, multibird multi-species soundscapes with spatial depth. This comparison demonstrates that the-
 synthesized bird soundscapes maintain a coherent spatial structure, with the left-right channel variations accurately reflecting the birds’ movements, positions, and distance relationships within the 3D virtual environment.
V. CONCLUSION AND FUTURE WORK
We present an innovative, fully algorithmic DSP-based framework for generating dynamic 3D multi-species bird soundscapes that incorporate species-specific acoustic patterns, temporal chirp modulation, overlapping choruses, inter-bird variability, and 3D spatialization. The system produces clear,
artifact-free birdsongs with independently moving birds per species, fully controllable chirp sequences, and realistic spatial effects, achieving greater flexibility and fidelity than existing algorithmic, data-driven, or hand-designed techniques. The system also includes visualization and analytical tools, such as bird trajectories, chirp activity timelines, spectrograms, and multi-channel audio waveforms, that support creative exploration and in-depth analysis of spatial and temporal dynamics. V-
isual and audio evaluations demonstrate the potential of the framework for immersive ecological simulations, virtual reality applications, and bioacoustic research. Future work will focus on enhancing environmental realism by incorporating factors such as weather effects and integrating real-time interactivity for dynamic sound generation. Additionally, we aim to expand the application of the system in generative composition and ecoacoustic music, enabling composers to create context-aware, intera-
ctive soundscapes based on species interactions and spatial dynamics.
VI. ETHICAL IMPLICATIONS
Multi-species bird soundscape synthesis often raises ethical issues, such as arising from the use of recordings or training data. Our approach, however, generates dynamic bird soundscapes with purely algorithmic methods without reliance on recordings, preventing any ethical and copyright concerns in the creation of 3D environment soundscapes.
REFERENCES
[1] A. Farina and S. Gage, Ecoacoustics: The Ecological Role of Sounds. Wiley, 2017. [2] D. Zysman, J. M. M ́endez, B. Pando, J. Aliaga, F. Goller, and G. B. Mindlin, “Synthesizing bird song,” Phys. Rev. E, vol. 72, p. 051926, 2005.

[3] C. K. Catchpole and P. J. B. Slater, Bird Song: Biological Themes and Variations, 2nd ed. Cambridge: Cambridge University Press, 2008. [4] G. B. Mindlin, “Nonlinear dynamics in the study of birdsong,” Chaos, vol. 27, no. 9, p. 092101, 2017. [5] R. Davis, “Digital signal processing in studies of animal acoustical communication, including human speech,” Computer Methods and Programs in Biomedicine, vol. 23, no. 3, pp. 171–196, 1986. [6] M. H. Coen, “Learning to sing like a bird: self-supervised-
 acquisition of birdsong,” MIT CSAIL, Tech. Rep., 2007. [7] J. D. Sitt, E. M. Arneodo, F. Goller, and G. B. Mindlin, “Physiologically driven avian vocal synthesizer,” Phys. Rev. E, vol. 81, p. 031927, Mar 2010. [8] J. Bonada, R. Lachlan, and M. Blaauw, “Bird song synthesis based on hidden markov models,” in Interspeech 2016, 2016, pp. 1110–1114. [9] D. Stowell, “Computational bioacoustics with deep learning: a review and roadmap,” PeerJ, vol. 10, p. e13152, 2022. [10] A. C. R. Chakravarty, N. Ragh-
uvanshi, K. W. Godin, Z. Zhang, D. Nowrouzezahrai, and J. M. Snyder, “Directional sources and listeners in interactive sound propagation using reciprocal wave field coding,” ACM Transactions on Graphics, vol. 39, no. 4, pp. 44:1–44:14, 2020. [11] G. Tong, J. C. Leung, X. Peng, H. Shi, L. Zheng, S. Wang, A. C. O’Brien, A. P. Neall, G. Fei, M. Gaspar, and P. Chakravarthula, “Multimodal neural acoustic fields for immersive mixed reality,” IEEE Transactions on Visualization and Computer Graphics, vol.-
 31, no. 5, pp. 3397–3407, 2025. [12] T. Xu, J. Li, P. Zu, P. Sahay, M. Kim, J. Obeng-Marnu, F. Miller, X. Qian, K. Passarella, M. Rachumalla, R. Nongpiur, and D. Shin, “Enhancing xr auditory realism via multimodal scene-aware acoustic rendering,” in Proceedings of the 38th Annual ACM Symposium on User Interface Software and Technology, ser. UIST ’25. New York, NY, USA: Association for Computing Machinery, 2025. [13] G. Corrˆea De Almeida, V. Costa de Souza, L. G. Da Silveira Ju ́nior, and M. R. V-
eronez, “Spatial audio in virtual reality: A systematic review,” in Proceedings of the 25th Symposium on Virtual and Augmented Reality, ser. SVR ’23. New York, NY, USA: Association for Computing Machinery, 2024, p. 264–268. [14] N. Lecomte, A.-C. Guei, and et al., “Ecogen: Bird sounds generation using deep learning,” Methods Ecol. Evol., vol. 14, no. 3, pp. 515–530, 2023. [15] J. W. Bradbury and S. L. Vehrencamp, Principles of Animal Communication. Sunderland, MA: Sinauer Associates, 1998. [16] H.-
 O. Sueur J, Pavoine S and D. S, “Rapid acoustic survey for biodiversity assessment,” PLoS ONE, vol. 3(12):e4065, 2008. [17] B. Ghani, T. Denton, S. Kahl, and H. Klinck, “Global birdsong embeddings enable superior transfer learning for bioacoustic classification,” Scientific Reports, vol. 13, 2023.
[18] B. Ghani, V. J. Kalkman, L. G. B. Planqu ́e, W. Vellinga, and D. Stowell, “Impact of transfer learning methods and dataset characteristics on generalization in birdsong classification,” Scientific Reports, vol. 15, 2025. [19] C. Roads, The Computer Music Tutorial, 2nd ed. MIT Press, 1996. [20] G. Loy, Musimathics, Volume 2: The Mathematical Foundations of Music. MIT Press, 2006.
[21] A. Farnell, Designing Sound: Procedural Audio for Games and Film. MIT Press, 2010.
[22] A. Uncini, Digital Audio Processing Fundamentals. Springer, 2022. [23] T. Song and T. V. Ta, “Towards high-fidelity and controllable bioacoustic generation via enhanced diffusion learning,” 2025. [24] F. Rodrigues, “Synthetic ornithology: Machine learning, simulations and hyper-real soundscapes,” pp. 84–92, June 2025. [25] T. Napier, E. Ahn, S. Allen-Ankins, L. Schwarzkopf, and I. Lee, “Advancements in preprocessing, detection and classification techniques for ecoacoustic data: A comprehensiv-
e review for large-scale passive acoustic monitoring,” Expert Systems with Applications, vol. 252, p. 124220, 2024.
[26] D. R. Begault, 3-D Sound for Virtual Reality and Multimedia. Academic Press, 1994. [27] H. Zhao, C. Gan, W.-C. Ma, and A. Torralba, “The sound of motions,” in Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV), October 2019.
[28] D. Li, T. R. Langlois, and C. Zheng, “Scene-aware audio for 360° videos,” ACM Trans. Graph., vol. 37, no. 4, pp. 111:1–111:12, 2018.
[29] M. Taylor, A. Chandak, L. Antani, and D. Manocha, “Resound: Interactive sound rendering for dynamic virtual environments,” in Proceedings of the 17th ACM International Conference on Multimedia (MM ’09). ACM, 2009, p. 271–280. [30] C. Xu, T. Oberman, F. Aletta, H. Tong, and J. Kang, “Ecological validity of immersive virtual reality (ivr) techniques for the perception of urban sound environments,” in Acoustics, vol. 3, no. 1. MDPI, 2020, pp. 11–24. [31] B. C. Pijanowski, L. J. Villanueva-Rivera-
, S. L. Dumyahn, A. Farina, B. L. Krause, B. M. Napoletano, S. H. Gage, and N. Pieretti, “Soundscape ecology: The science of sound in the landscape,” BioScience, vol. 61, no. 3, pp. 203–216, 03 2011. [32] A. V. Oppenheim and R. W. Schafer, Discrete-Time Signal Processing, 3rd ed. Pearson, 2010. [33] H. Hacihabiboglu, E. De Sena, Z. Cvetkovic, J. Johnston, and J. O. Smith III, “Perceptual spatial audio recording, simulation, and rendering: An overview of spatial-audio techniques based on psychoacou-
stics,” IEEE Signal Processing Magazine, vol. 34, no. 3, pp. 36–54, 2017.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:00.621Z
- **Text Length:** 39872 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 10 of 10
