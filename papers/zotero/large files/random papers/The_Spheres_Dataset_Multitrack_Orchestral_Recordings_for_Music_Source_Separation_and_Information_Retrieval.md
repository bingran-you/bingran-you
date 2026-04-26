# PDF Document: Garcia-Martinez et al. - 2025 - The Spheres Dataset Multitrack Orchestral Recordings for Music Source Separation and Information Re.pdf

**File Path:** Garcia-Martinez et al. - 2025 - The Spheres Dataset Multitrack Orchestral Recordings for Music Source Separation and Information Re.pdf

**Processed Date:** 2026-02-10T18:16:39.991Z

**File Size:** 3132.47 KB

**Total Pages:** 13

**Extracted Pages:** 13

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3771

**Title:** The Spheres Dataset: Multitrack Orchestral Recordings for Music Source Separation and Information Retrieval

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

1
The Spheres Dataset: Multitrack Orchestral
Recordings for Music Source Separation and
Information Retrieval
Jaime Garcı ́a-Martı ́nez, David Diaz-Guerra, John Anderson, Ricardo Falco ́n-P ́erez, Pablo Caba ̃nas-Molero, Tuomas Virtanen, Fellow, IEEE, Julio J. Carabias-Orti, and Pedro Vera-Candeas
Abstract—This paper introduces The Spheres dataset, multitrack orchestral recordings designed to advance machine learning research in music source separation and related MIR tasks within the classical music domain. The dataset is composed of over one hour recordings of musical pieces performed by the Colibr`ı Ensemble at The Spheres recording studio, capturing two canonical works—Tchaikovsky’s Romeo and Juliet and Mozart’s Symphony No. 40—along with chromatic scales and solo excerpts for each inst-
rument. The recording setup employed 23 microphones, including close spot, main, and ambient microphones, enabling the creation of realistic stereo mixes with controlled bleeding and providing isolated stems for supervised training of source separation models. In addition, room impulse responses were estimated for each instrument position, offering valuable acoustic characterization of the recording space. We present the dataset structure, acoustic analysis, and baseline evaluations using X-UMX ba-
sed models for orchestral family separation and microphone debleeding. Results highlight both the potential and the challenges of source separation in complex orchestral scenarios, underscoring the dataset’s value for benchmarking and for exploring new approaches to separation, localization, dereverberation, and immersive rendering of classical music.
Index Terms—Music source separation, orchestral recordings, dataset, multitrack audio, microphone bleeding, debleeding, room impulse responses (RIRs), classical music, machine learning, immersive audio.
I. INTRODUCTION
R
ECENT advancements in music source separation (MSS) using artificial intelligence have been driven by the research community and the availability of benchmark challenges [1], [2], [3]. In professional music production, instruments and vocals are typically recorded on individual tracks, which are later combined during mixing. Although this process is often approximated as a simple sum of the isolated tracks, the final master undergoes complex, non-linear processing during mastering, making the resu-
lting mix more than just an additive combination. Despite this simplification, assuming a linear mix remains effective in practice and does not significantly hinder model performance. MSS systems,
J. Garc ́ıa-Mart ́ınez, P. Caba ̃nas-Molero, J. J. Carabias-Orti, and P. VeraCandeas are with the Universidad de Jae ́n, Spain (e-mail: {jagarcim, pcabanas, carabias, pvera}@ujaen.es). John Anderson is with Odratek BV, Netherlands (e-mail: john@odratek.com). D. Dı ́az-Guerra, R. Falco ́n-P ́erez, and T. Virtanen are with Tampere University, Finland (e-mail: {david.diazguerra, ricardo.falconperez, tuomas.virtanen}@tuni.fi).
therefore, aim to take a mixed audio signal as input and estimate the original constituent tracks, also known as stems. In the last years, machine learning methods—particularly those driven by data—have become a central focus in music source separation research [4]. Among these, deep neural networks have shown great promise, leading to notable improvements in separation accuracy. Supervised training of these models generally relies on datasets that contain isolated source tracks, which serve as gr-
ound truth references to guide learning. However, acquiring such data poses a major challenge due to copyright restrictions, and access to full multitrack recordings remains limited, as they are seldom released by artists. Despite these barriers, the research community has made considerable progress by curating and releasing multi-track datasets [1], [5], [6], [7], [8], which have fueled advancements in separating sources across genres like pop and vocal music. Of particular relevance is the MUSDB-
18 dataset [1], [2], which serves as the foundation for standardized challenges where algorithms are benchmarked under consistent conditions to separate stems such as vocals, drums, bass, and accompaniment. These efforts have led to the emergence of cutting-edge models that have significantly pushed the boundaries of what is possible in source separation [3], [9], [10], [11], [12], [13], [14], [15]. However, music source separation in the orchestral domain has received significantly less attention-
 compared to popular music and the several approaches that have been presented [16], [17], [18] suffer challenges such as: (i) Limited availability of datasets suitable for training deep learning models. (ii) Classical ensembles typically feature a greater number of instruments. (iii) Certain instruments within an ensemble possess similar timbral characteristics, making them more difficult to differentiate (e.g., violin and viola). (iv) Recordings are commonly captured with all musicians performin-
g together in the same space, introducing room acoustics into the audio signals. Training supervised source separation models requires clean, isolated source tracks to serve as ground truth during learning. However, acquiring such recordings for orchestral or ensemble music presents substantial challenges. Unlike popular music, where individual performers can be recorded separately using a metronome or backing track, classical ensembles are typically recorded as a group in a single take to preserv-
e natural synchronization and enable joint musical expression. This practice, rooted in the inherently collective
arXiv:2511.21247v1 [eess.AS] 26 Nov 2025

2
nature of rehearsals and performances, leads to recordings that contain significant bleed from other instruments even when each instrument is close miked. Moreover, the large number of instruments involved in orchestral settings makes isolated, instrument-by-instrument recording both logistically complex and musically unnatural. In fact, several limited databases of real-world recordings have been developed for classical ensembles (see [19] for a detailed overview). Small-ensemble efforts include -
the TRIOS dataset [20], which provides bleedfree separated tracks for chamber music trios, and the Bach10 dataset [21], which offers bleed-free signals of four-part chorales recorded with musicians in isolation. The URMP dataset [22] features 44 pieces for small ensembles (2 to 5 instruments) created from individually recorded but temporally aligned performances. For larger orchestral material, the Aalto Anechoic Orchestra dataset [23] provides approximately 10 minutes of anechoic recordings of in-
dividual instruments. More recently, the Operation Beethoven project [24] released around 10 minutes of bleed-free isolated recordings of orchestral sections, captured in a concert hall to preserve natural reverberation.
Unfortunately, the scarcity of suitable training material has significantly constrained progress in supervised source separation research for classical music. To mitigate this, current systems rely on data augmentation or are trained on synthesized audio and subsequently evaluated on real recordings.
For data augmentation, several approaches have been proposed for classical-music SSS [25], [26], [18], but none targets separation of all sections in a full orchestra. Alternatively, [27] assumes that the score is available and uses multiple synthetic renditions of the piece to train the MSS system. Recently, [28] presented a score-informed MSS model that uses only score information to generate separation masks, demonstrating its ability to generalize from synthetic to real data. The work in [29] -
introduces a novel approach that leverages the hierarchical relationships between musical instruments to achieve more flexible and context-aware MSS, improving performance with limited training data.
Regarding the synthetic, Sarkar et al. [30] developed a bleed-free synthesized dataset called EnsembleSet and used it to train a duet source separation model based on a dual-path transformer architecture. For evaluation, they extracted duet segments from real recordings in the URMP dataset [22]. A recent study introduced SynthSOD [19], a synthesized dataset that offers a more balanced representation of instruments compared to Ensembleset. To evaluate the effectiveness of this new dataset, Garc ́ıa-
-Mart ́ınez et al. trained four separate XUMX models [31], each dedicated to one of the following instrument families: (i) strings, (ii) woodwinds, (iii) brass, and (iv) percussion. Evaluation on the URMP dataset resulted in generally low Source-to-Distortion Ratio (SDR) scores, indicating limited separation performance. These outcomes highlight that music source separation (MSS) involving multiple sources and based on real, recorded ensembles continues to be a difficult and largely unsolved probl-
em in the context of classical music. Recent initiatives have begun to address some of these challenges. For example, within the Cadenza
project1, a dedicated task has been developed to rebalance classical music to enhance music perception for individuals with hearing loss. Although the repertoire is limited to small ensembles of woodwind instruments [32], this represents, to the best of our knowledge, the first challenge specifically focused on classical music in this context, further highlighting the growing attention this domain is beginning to receive. In this paper, we present The Spheres dataset, the first publicly available2-
 multitrack orchestral resource capturing classical music through a comprehensive set of microphone signals, including ambient, main and close spot microphones. This dataset was developed within the framework of the REPERTORIUM project3 and is specifically designed to support the development of machine learning methods for source separation and related MIR tasks in the classical music domain. The dataset comprises over one hour of music recordings performed by the Colibr`ı Ensemble4 (Chamber Orche-
stra of Pescara, Italy) recorded at The Spheres recording studio5, a venue selected for its optimal acoustical conditions and professional infrastructure. Unlike previous datasets, in The Spheres each instrument/part was recorded in isolation (one at a time) while all microphones captured the performance, yielding leakage-free stems per instrument and microphone position. Realistic ensemble mixes with controlled bleed are then obtained by summing the isolated contributions across parts and microph-
ones. This design captures realistic orchestral performances with individual instrument spot microphones while preserving the natural acoustics and ensemble coordination inherent to classical music. By combining full ensemble mixtures derived from isolated stems with spatial calibration signals, The Spheres dataset opens new avenues for research in supervised separation, source localization, dereverberation, and immersive audio rendering for classical music. In addition, we report baseline MSS res-
ults designed to establish reference points for future approaches. First, we evaluate monaural family separation (strings, woodwinds, brass, percussion) from the main stereo using an X-UMXbased [31] model. Second, we address a production-oriented task—debleeding of section spot microphones—by training lightweight single-branch models that enhance a target section from its own spot channel while suppressing orchestral leakage. These benchmarks expose both the promise and the difficulty of orchestra-
l MSS: measurable interference reduction is achievable, yet generalization across repertoire and setups remains challenging. We release all materials and scripts so that future works can compare methods under consistent conditions, explore multichannel and score-informed models, and exploit the included RIRs and solo material to bridge synthetic–to–real gaps when targeting complex orchestral signals.
II. RECORDING THE DATASET
This section describes the process of creating The Spheres dataset, including the musical repertoire performed, the record
1https://cadenzachallenge.org/ 2https://doi.org/10.5281/zenodo.17347681 3https://repertorium.eu/ 4https://www.colibriensemble.it/ 5https://www.the-spheres.com/

3
ing sessions, and the microphone setup employed. These details provide the basis for understanding the structure and properties of the released material.
A. Music material
The recordings include two pieces of music, as well as solo material of each instrument to allow potential training data generation. The first piece of music, Romeo and Juliet (overture-fantasia), TH 42, is an overture by Pyotr Ilyich Tchaikovsky, whose final version was completed in 1880. The duration of the overture is 22 min 38 s. The overture is scored for an orchestra comprising piccolo, 2 flutes, 2 oboes, English horn, 2 clarinets (in A), 2 bassoons, 4 horns (in F), 2 trumpets (in E), 3 trom-
bones, tuba, 3 timpani, cymbals, bass drum, harp, violins I, violins II, violas, cellos, and double basses. The second piece of music is Symphony No. 40 in G minor, K. 550 (revised version with clarinets) written by Wolfgang Amadeus Mozart in 1788. The total duration is 30 min 16 s. The symphony is scored for flute, 2 oboes, 2 clarinets, 2 bassoons, 2 horns, and strings. The work is in four movements, in the usual arrangement for a classical-style symphony (fast movement, slow movement, minuet, fa-
st movement) — Molto Allegro, Andante, Minuetto. Allegretto – Trio, Finale. The above pieces of music were selected because of their wide appreciation in the Western culture, as well as because the copyright of the compositions has expired, allowing their royalty-free use. In addition, each section of instruments played a full chromatic scale across the instrument’s natural range with different dynamics (quiet/loud) and playing techniques (legato, pizzicato, staccato, etc). An individual instance -
of each instrument played by the section leader also played solo scales with different dynamics, as well as free choice solo content.
B. Recording setup
The music was recorded in the Main Room of The Spheres Recording Studio, whose size is 15 x 9 x 8 meters. The high-quality acoustic design of the room includes diffusors, wedge bass traps, sound-absorbent dropped ceiling, and floating walls. See Section IV for acoustic measurements of the room. Figure 1 presents an overview of the recording room and the recording setup. Each part of each instrument was played in isolation, to enable capturing instrument-specific tracks. To achieve this, a separate-
 recording session was organized for each instrument at a time (i.e., separate recording session for each part of violin 1, violin 2, viola, each line of horns, etc.). The number of separately recorded lines per each instrument class for the two pieces of recorded music is given in Table I. The musicians wore headphones and listened to reference tracks, so that the separately recorded parts were synchronous in time. As the reference tracks, the recordings of New York Philharmonic [33] and Boston S-
ymphony Orchestra [34] conducted by Leonard Bernstein were used. A conductor was conducting musicians at each recording session, to create a more natural scenario. Figure 3 illustrates an example of the bassoon recording session. The locations of musicians in the
Fig. 1. A photo of the studio used for the recordings. Each musician was allocated a seat in the studio, which placement was following the typical placements when playing orchestral music.
TABLE I THE NUMBER OF SEPARATELY RECORDED LINES PER EACH INSTRUMENT CLASS FOR THE TWO PIECES OF RECORDED MUSIC.
Instrument class Symphony No. 40 Romeo and Juliet Bass 1 1 Bass drum 1 Bassoon 2 2 Cello 1 2 Clarinet 2 2 Cymbals 1 English horn 1 Flute 1 2 Harp 1 Horn 2 4 Oboe 2 2 Piccolo 1 Timpani 1 Trombone 3 Trumpet 2 Tuba 1 Viola 1 2 Violin 1 1 2 Violin 2 1 2
recording room followed their typical placement in orchestras, as visualised in Figure 2. The seats of musicians were kept fixed between the recording sessions. The recordings were captured using 23 microphones, which included two ambient microphones, three main microphones, and 18 close microphones for individual instruments. All the microphones were used to capture all the instruments, to allow capturing realistic acoustic propagation from each instrument to all the microphones. The list of micr-
ophones is given in Table II. The placement of microphones is illustrated in Figure 2. Microphone #6 is a close spot microphone that was moved to be close to each instrument when recording the part of that instrument; the goal of this microphone was to capture a more dry sound than the instrument/section microphones. The recordings were done in two stages, with some differences in the microphones used in them. The instruments recorded in Session 1 included 6 violins, 4 violas, 3 cellos, and 2 bass-
es, and Session 2 included the rest of the instruments or sections. The piccolo player shared the seat with one of the flute players,

4
Violin 1
M1 M2
M3 M4 M5
M7
M8 M9
M10
M11
M12
M15 M16
M13 M14
M17
M18 M19 M20
M21
M22
M23
Violin 2
Viola Bass
Cello
Clarinet Bassoon
Flute + piccolo
Horn
Oboe + english horn
Trumpet Trombone + tuba
Bass drum Timpani
Harp
Cymbals
9m
15 m 15 m
Fig. 2. The approximate placement of instruments and microphones (indicated by M#) in the recording room. Each rounded square indicates the seat of a musician.
Fig. 3. A photograph illustrating a session of recording one bassoon line.
and the English horn player shared the seat with one of the oboe players.
All the microphones were connected to DAD AX32 ADconverter to allow synchronous capture. The recording setup, including the seats and microphones, were reinstalled between the two stages. The locations were kept similar between the sessions, but because of the installation procedure there were small deviations in the locations.
A main stereo mixture was created by a professional audio engineer by mixing microphone signals to the Mains L and R channels to create a realistic sounding balance simulating typical audio production of classical music. When creating the main stereo mixture, a signal at each microphone was obtained by summing all separately recorded instruments and their parts, simulating the bleeding of each instrument to each microphone in a real concert audio capture. The Mains L and R channels were used as th-
e reference when creating mixture, and the time delay from each spot microphone to the main microphones were compensated when mixing the spot-mike signals to the main mixture. An artificial reverberation effect was added to the ambient microphone signals, and a limiter was applied to the full mix.
Several stems, defined as the contribution of each individually recorded instrument and its corresponding parts to the main mixture, were also produced to allow various kinds of source separation experiments based on the main mixture. The sum of all the stem signals equals the main mixture. The stem

5
TABLE II THE CHANNEL ID OF EACH INSTRUMENT AND MICROPHONES USED TO RECORD THEM.
ID Location Microphone (session 1 / 2)
M1 Amb L Earthworks QTC1 / Schoeps MK2 M2 Amb R Earthworks QTC1 / Schoeps MK2 M3 Mains L DPA 4006 M4 Mains R DPA 4006 M5 Mains C DPA 4006 M6 Close spot Schoeps MK4 M7 Violin 1 section Schoeps MK4 M8 Violin 2 section Schoeps MK4 M9 Viola section Schoeps MK4 M10 Cello section Schoeps MK4 M11 Double bass 1 Schoeps MK4 M12 Double bass 2 Schoeps MK4 M13 Flute / piccolo section Schoeps MK4 / DPA 4011 M14 Oboes Schoeps MK4 / DPA 4011 M15 Clarinets Schoeps MK4 / DPA 4011 M16 Bassoons section Schoeps MK4 /-
 DPA 4011 M17 Horn section Schoeps MK4 / Schoeps V4 M18 Trumpets section Schoeps MK4 / Schoeps V4 M19 Trombones section Schoeps MK4 / Schoeps V4 M20 Tuba Schoeps MK4 / Schoeps V4 M21 Timpani Schoeps MK4 / 4015 M22 Bass drum and cymbals Schoeps MK4 / Schoeps MK21 M23 Harp Schoeps MK4
signals can be summed in various ways to be used in source separation experiments. For example, summing all the lines of each instrument class will create instrument-specific reference signals, and summing all the lines of each section (strings, woodwinds, brass, and percussion), will create section-specific reference signals. Dedicated measurements to capture the acoustic characteristics of the recording space were performed. Specifically, exponential sine sweeps (ESSs) [35] were fed to the recor-
ding environment using a Neumann KH120 II studio monitor placed at the position of the first chair of each section, with its height adjusted to match the typical playing height of the corresponding instrument and oriented facing the main microphone array. In addition, hand claps were recorded from the same positions as the ESS. The resulting signals were recorded by all microphones in the setup and used to estimate room impulse responses (RIRs) for multiple source–receiver pairs, providing a detai-
led characterization of the hall’s spatial acoustics. To estimate the RIRs from the recorded ESS signals, an inverse filter was derived from the reference sweep signal so that its convolution with it approximates a delayed Dirac delta. Convolving each recorded microphone signal with this inverse filter recovers the RIR, while non-linear artifacts appear at earlier times and can be removed through time-windowing. Due to corruption of the reference sweep signal, a modified inverse filter was compute-
d in the frequency domain; full details of this procedure are provided in Appendix A. After the recording sessions, several failures were observed in the recordings, resulting in missing the double bass signals in the main right microphone, the timpani, bass drum, and cymbals signals in the clarinet microphone, and the flute signal in the close-spot microphone. The published dataset contains files for those signals, but they are completely silent.
III. FILE STRUCTURE OF THE DATASET
In order to facilitate code reusability and cross-dataset comparisons, we have organized The Spheres dataset following the same structure as EnsembleSet [30] and SynthSOD [19]. Each music piece is stored in a dedicated folder containing subfolders for every microphone (including the stereo mix), with each subfolder holding an audio file for each signal of each single instrument. One important difference from the previously mentioned datasets is that The Spheres may contain more than one file for s-
ome instruments, corresponding to separately recorded lines (see Table I). Another difference is that the audio files in The Spheres are sampled at 48 kHz, instead of 44.1 kHz. By summing all audio files within a folder, the signal corresponding to that microphone (or the stereo mix) can be reconstructed as if all instruments had been performed simultaneously. This approach is not applicable to the close spot microphone which, as described in Section II-B, was repositioned during the recordings; t-
hus, summing its signals is not meaningful. The dataset also contains scales and solos for each instrument as a third type of music piece, although combining these signals results in a noisy, non-musical outcome and they have differing durations. We provide some metadata files similar to the ones included in the SynthSOD dataset [19], containing basic information about the instruments present in each piece. In addition, we also publish an independent version including only the stereo mix, so that -
users interested solely in these signals do not need to download the full multichannel version of the dataset. To complement the multi-channel recordings, we provide estimated RIRs for each instrument position. The estimated RIRs are stored as NumPy binary files (“.npy”), each containing a two-dimensional array of shape [M, N ], where M is the number of microphones in the recording setup and N is the number of samples. The filename encodes the source position of the excitation signal. For example,-
 source_Vln_1.npy contains the RIRs measured when the source was located at the Violin 1 position. The microphone channel order is consistent across all .npy files. To facilitate exploration of the dataset, each .npy file is accompanied by a .pdf document containing plots visualizing the corresponding RIRs across all microphones (see Figure 4). These plots display the RIRs amplitude in decibels (dB) as a function of sample index. Each plot is annotated with the microphone index and name. In additi-
on, we provide the original recordings from all microphones of the claps and sweeps at each instrument position, enabling researchers to perform their own RIR estimations if desired.
IV. ANALYSIS AND PROPERTIES OF THE DATASET
In this section, we provide a quantitative analysis of The Spheres dataset in order to characterize its musical content and recording conditions. We first examine the distribution of instrument activity and polyphony levels across the two orchestral pieces, highlighting differences in instrumentation and texture. Next, we evaluate the signal quality of the

6
Fig. 4. Estimated RIR for the Violin 2 microphone with the source located at the Violin 2 position. The plot shows the RIR in dB as a function of sample index, including annotations for the microphone index (7) and name (Vln2).
V!
V!
V!
!
$$
&%
!!
#%
!
!# $
$$!!
!#
#& " %
#! !
&
#" "
& %& " # &$$ !
&% $
$%#& % &# % ! $
!) #%!'$ (
$ ! !$
Fig. 5. Time played by every instrument in The Spheres dataset.
recordings by reporting signal-to-distortion ratios (SDR) and quantifying the amount of bleeding between microphones, with a particular focus on section microphones. Finally, we analyze the acoustics of the recording space using the captured RIRs, from which reverberation time and clarity metrics are derived. Together, these analyses provide a comprehensive view of the dataset’s properties and the challenges it poses for music source separation and related tasks.
A. Instrument times and polyphony
Figure 5 shows the time played by each instrument in the dataset. We can see how the Mozart piece contains more than 20 minutes for all strings and woodwind instruments but does not contain any piccolo, cor anglais, or any percussion and brass instruments apart from the horn; in contrast, the Tchaikovsky piece is shorter but includes a higher variety of instruments. In Figure 6, we can see the time of each polyphony level in the dataset. During around one third of its duration, the
00
!!
0
0
!
##
$ "#
Fig. 6. Time of every polyphony level in The Spheres dataset.
Mozart piece has all its instruments playing at the same time, whereas the polyphony levels in the Tchaikovsky piece are more evenly distributed, with the different instruments appearing and disappearing during the piece, and there is not a single moment when all the instruments are playing at the same time. In order to compute both statics, the signals of every instrument at the main left microphone were split into 1-second non-overlapping frames, and instruments were considered to be active in t-
hose frames whose energy were above a −30 dB threshold with respect to its more energetic frame. This is the same criteria that was used to exclude de silent frames from the evaluation of the experiments presented in section V.
B. Signal-to-distortion ratio and bleeding in the mixtures
In Table III we can see the SDR of every instrument/section in the stereo mix, the main and amb microphones, and in their section mic. As done with the evaluation of the experiments presented in section V, the SDR of every instrument was computed first in 1-second non-overlapping frames and then aggregated by computing the median of those frames in which the instrument was active. From these results, it is clear how challenging the task of instrument/section separation from the stereo mixture or t-
he main microphones of a symphonic orchestra is, with most sources having SDRs around −10 dB. As we could expect, the best SDRs for every instrument/section are obtained in their dedicated microphone; however, those still contain a huge amount of bleeding from the other instruments of the orchestra and most of them still have a negative SDR. In order to have a better knowledge about the bleeding in the section microphones, we have computed, for each of them, the ratio between the energy of their t-
arget instrument/section and every interference source, and represented it as a matrix for every music piece of the dataset in Figure 7. We can see how the section microphones with a better SDR have in general a better ratio against all the interferences, but we can also observe some interesting one-to-one interactions. For example, we can see how the viola section creates a higher bleeding in

7
TABLE III SIGNAL-TO-DISTORTION RATIO (SDR) OF EVERY INSTRUMENT IN THE STEREO MIX, THE MAIN AND AMB MICROPHONES, AND IN THEIR SECTION MICROPHONE.
Piece Source SDR [dB] at microphone
Stereo Mix Main L Main C Main R Amb L Amb R Section
Mozart
Violin I −12.5 −10.6 −11.2 −10.3 −7.6 −8.9 −2.4 Violin II −14.9 −11.3 −11.6 −11.5 −15.3 −16.4 −7.0 Viola −10.5 −12.3 −11.4 −11.5 −9.8 −9.0 −2.8 Cello −8.3 −10.4 −10.5 −8.8 −8.1 −7.1 −2.5 Bass −2.1 −9.0 −10.0 −7.4 −5.9 5.7 Flute and piccolo −21.7 −14.4 −14.4 −13.8 −15.6 −15.9 −1.8 Clarinet −9.8 −6.7 −6.0 −5.7 −10.3 −10.9 2.8 Oboe and cor anglais −19.7 −11.8 −11.6 −10.9 −14.3 −14.2 −3.8 Bassoon −12.7 −10.3 −10.9 −9.8 −12.6 −14.3 −0.2 Horn −9.0 −3.5 −3.0 −2.6 −5.3 −6.2 11.9
Tchaikovsky
Violin I −13.6 −11.9 −12.8 −12.6 −9.0 −10.1 −4.6 Violin II −12.6 −12.1 −13.1 −13.4 −16.2 −16.6 −8.2 Viola −13.4 −13.7 −13.5 −13.7 −10.9 −10.3 −5.6 Cello −8.1 −10.1 −9.8 −8.8 −6.4 −5.8 −2.0 Bass −8.1 −15.5 −16.5 −10.7 −13.3 −12.4 −0.7 Flute and piccolo −18.4 −11.5 −12.1 −12.0 −14.0 −13.9 −2.5 Clarinet −9.7 −10.1 −3.8 −9.4 −12.8 −11.6 −1.3 Oboe and cor anglais −14.7 −10.7 −11.0 −11.0 −13.3 −12.5 −4.5 Bassoon −9.8 −11.4 −12.1 −11.4 −13.5 −15.0 −0.9 Horn −5.1 −4.1 −3.8 −3.5 −5.3 −4.9 9.6 Trumpet −13.4-
 −8.7 −8.0 −8.5 −10.2 −10.8 −1.8 Trombone −13.1 −9.9 −9.0 −10.9 −11.3 −12.3 −5.9 Tuba −13.2 −11.0 −11.3 −8.8 −11.4 −14.1 −4.0 Harp −12.5 −7.7 −7.7 −13.4 −9.1 −11.5 −0.8 Timpani −7.0 −11.8 −12.0 −8.9 −8.1 −8.9 −1.4 Untuned percussion −5.4 −9.3 −8.8 −8.9 −6.4 −5.8 −4.3
the violin II microphone than in violin I, which makes sense considering how they were placed in the room (see Figure 2). White cells correspond to cases where computing this ratio did not make sense (i.e., when the interference and the target of the microphone is the same or they do not overlap in time) or cases that could not be computed because of failures during the recording (i.e., the interference of the timpani and the untuned percussion on the clarinet microphone, whose signals were not re-
corded).
C. Acoustic Analysis
To understand the acoustics of the room we analyzed the RIRs that were captured as mentioned in section II-B. While the recording procedure does not fully follow the standard (in particular, the use of non omnidirectional loudspeakers), it provides some useful information about the acoustics of the space. Here we focus on two acoustic parameters computed from the impulse responses. First, we show the clarity index C50, which is defined as the ratio of energy arriving in the first 50 milliseconds o-
f the impulse to the energy arriving later. This reflects the balance between early sound and late reverberation, and it is highly correlated with closeness to the source, speech intelligibility and perceived ease of listening. Next, we compute the reverberation time using T30, which represents the time it would take for sound energy to decay by 60 dB. To avoid the influence of the noise floor, this is estimated by extrapolating the decay between the −5 and −35 dB levels. All acoustic parameters a-
re computed according to the standard [36]. For reverberation time metrics, we notice some two noticeable patterns. First, there are some double
slope decays, in mid to high frequencies, in most positions. This is subtle but present, and most likely due to the very high ceilings the uneven distribution of acoustic treatment (mostly concentrated at ground level). Secondly, there is a small but noticeable variance of acoustic parameters across the space. Figure 8 shows the C50 of all the source/receiver pairs. As could be expected, the matrix presents a strong diagonal, since the section microphones are closer to their corresponding section -
and steered towards them. Out of the diagonal, we can also observe several high values that correlate with the lower SIR values in Figure 7 since, as can be seen in Figure 2, usually correspond to interfering instruments that are behind the target instrument of the microphone, and therefore have a strong direct propagation path that reaches the microphone from its direction of maximum directivity. In Figure 9, we can see how the T30 also presents some small variations and, while some of these can -
be explained due to noisy estimates of the decay rates, the rest is explained due to the non-uniformity of the room. V. SOURCE SEPARATION EXPERIMENTS
In order to analyze some of the possibilities of the dataset and better understand its properties, we present a couple of experiments where we use our dataset to train X-UMX-like models for sound source separation. In both cases, we use the Tchaikovsky piece of the dataset to train the models, since it contains more different instruments, and the Mozart piece to evaluate the results. Since only one music piece does not contain enough diversity in terms of overlapping notes and instruments to train-
 a separation model that generalizes to other pieces, we created

8
Fig. 7. Signal-to-interference ratio [dB] for the main instrument/section of every section microphone against the each interference source.
random mixtures by taking random segments of every instrument and mixing them instead of only taking synchronized segments. This probably makes the separation problem simpler since it breaks the temporal coherence between the different instruments and their harmonic relationships, but it has been shown to improve the generalization of SSS models when data is scarce [37].
As model architecture, we chose X-UMX [31] due to its simplicity and baseline vocation, having being used as baseline of the ISMIR 2021 Music Demixing (MDX) Challenge [2] and the work presenting the SynthSOD dataset [19]. This model uses the magnitude spectrogram of the input mixture to predict a spectral mask that is applied to the original spectrogram to generate the separated stems. The original UMX model [38] consisted of an independent branch for each stem with an encoder (composed of a linea-
r layer with batch normalization and hyperbolic tangent activation), 3 BLSTM
Fig. 8. Distribution of C50
layers, and a decoder (composed of two linear layers with batch normalization and ReLU activation in the first one). The X-UMX architecture adds a bridging operation between the encoder and the recurrent layers and between the recurrent layers and the decoder, where the latent representations of every branch are averaged so they can share information between them. We trained the models using the combination loss presented with the X-UMX architecture and with the hyperparameters of the original Ast-
eroid implementation [39]. Both experiments were evaluated using the fourth version of the museval library [40]. This library computes the metrics in one-second frames and then averages them using a median operation. For the computation of the signal-to-distortion ratio (SDR), it does not allow any kind of linear distortion on the ground truths (so it is equivalent to a classical SNR [41]) but, for the computation of the signal-to-interferences ratio (SIR) and signals-to-artifacts ratio (SAR), it -
allows linear distortions modeled with time-invariant filters with 512 taps [42]. We aggregated the metrics for every track by taking the median value of its frames but, since the definition of the ratios diverges when the reference signal approaches to zero, we excluded the frames where the energy of the reference signal was 30 dB below the most energetic frame of that source in that track. In this section, we present two different experiments: one in which we train a MSS model to separate the or-
chestra families from the stereo mix and one where we train independent models to remove the bleeding from every instrument microphone. The code for replicating all the experiments presented in this paper is openly available in our official repository6.
A. Family separation
Due to the high difficulty of separating every instrument of the orchestra from a stereo mix, we designed an easier exper
6https://github.com/repertorium/TheSpheresDataset-Experiments

9
violin_1
violin_2 viola
cello bass
flute
oboe
clarinet
bassoon horn
trumpet
trombone
tuba
timpani
untunedpercussioh narp
zmain_l
zmain_c
Receiver (Mic Position)
0.65
0.70
0.75
0.80
0.85
0.90
0.95
1.00
Mean T30 (s)
T30 Values per Receiver with P25, Median, and P75
Fig. 9. Swarmplot of T30 values for each receiver (microphone position). Solid and dashed lines indicate the median and the 25th and 75th percentiles, respectively.
TABLE IV SIGNAL-TO-DISTORTION RATIO (SDR), SIGNAL-TO-INTERFERENCES RATIO (SIR), SIGNALS-TO-ARTIFACTS RATIO (SAR), AND SOURCE IMAGE-TO-SPATIAL DISTORTION RATIO (ISR) FOR EVERY ORCHESTRA FAMILY IN THE ORIGINAL MOZART PIECE OF THE SPHERES DATASET AND THE OPERATION BEETHOVEN TRACK AND THE RESULTS OBTAINED BY A X-UMX SEPARATION MODEL TRAINED ON THE TCHAIKOVSKY PIECE OF THE SPHERES DATASET.
Eval dataset Source
Original Separated
SDR SDR SIR SAR ISR [dB] [dB] [dB] [dB] [dB]
Mozart (The Spheres)
Strings 4.5 9.4 11.9 12.1 18.2 Woodwinds −6.3 3.7 9.9 3.4 7.5 Brass −9.2 0.8 4.4 1.0 7.2
Operation Beethoven
Strings 2.1 2.8 5.6 1.4 3.8 Woodwinds −7.7 0.3 −6.4 0.1 2.1 Brass −9.5 −2.9 −15.8 0.4 6.7 Percussion −2.7 2.6 20.6 0.2 −5.4
iment where the instruments were grouped according to their orchestra family (strings, woodwinds, brass, and percussion) and trained an X-UMX model with 4 branches to separate them. Table IV shows the original SDR, SIR, and SAR, in the stereo mix of the Mozart piece of The Spheres and the recording from the Operation Beethoven dataset and the results obtained with the X-UMX model trained on the Tchaikovsky piece of The Spheres. The SIR of the separated stems shows important improvements in terms o-
f source separation for all the families in the Mozart piece, although the weaker the family was in the original mixture, the higher are the artifacts generated by the model (it should be noted that the Mozart piece does not contain any percussion instruments and only the horn from the brass family). This proves that, even if it only contains around 20 minutes of music, the Tchaikovsky piece of The Spheres can be used to train models that generalize to other music pieces. However, we can see that -
the model does not generalize to other datasets such as
TABLE V SIGNAL-TO-DISTORTION RATIO (SDR), SIGNAL-TO-INTERFERENCES RATIO (SIR), SIGNALS-TO-ARTIFACTS RATIO (SAR), AND SOURCE IMAGE-TO-SPATIAL DISTORTION RATIO (ISR) OF THE CLOSE MICROPHONES IN THE ORIGINAL MOZART PIECE AND THE RESULTS OBTAINED BY THE X-UMX DEBLEEDING MODELS TRAINED ON THE TCHAIKOVSKY PIECE.
Eval dataset Source
Original Separated
SDR SDR SIR SAR ISR [dB] [dB] [dB] [dB] [dB]
Mozart (The Spheres)
Violin I −2.4 2.4 10.7 1.4 −0.5 Violin I+II 1.4 7.6 14.2 8.2 15.0 Violin II −7.0 1.0 8.0 −1.0 2.8 Violin II+I −4.3 4.1 11.1 3.4 8.2 Viola −2.8 4.3 11.7 3.6 7.9 Cello −2.5 4.3 10.7 4.2 9.1 Bass I+II 5.7 10.1 18.8 11.0 15.0 Bass II+I 11.3 16.1 23.2 17.3 22.4 Flute −1.8 11.5 20.5 11.3 19.8 Clarinet 2.8 6.8 17.4 6.3 9.6 Oboe −3.8 4.7 9.9 5.4 12.5 Bassoon −0.2 7.1 16.1 6.6 10.6 Horn 11.9 14.6 21.5 16.1 20.3
Operation Beethoven, where Woodwinds and Brass show a clear degradation in SIR, and all instrument families exhibit a high level of artifacts. Several differences exist between both datasets, such as the room, the instrument and microphone positions, and the instruments and microphones used; further research would be needed to analyze the importance of these factors in the generalization of SSS models.
B. Microphone debleeding
An easier but quite interesting application of SSS for classical music production is debleeding the close microphone signals. Orchestras are typically recorded using microphones close to every instrument section apart from the main stereo microphone, and those signals are used in the final stereo mix to increase the presence of some instruments that might be too

10
weak in the stereo microphone. However, the signals of these close microphones contain a high level of bleeding from all the other instruments of the orchestra, making the work of the mixing engineer nontrivial. Therefore, having models capable of removing this bleeding and ensuring that the signal of the close microphones contain only the sound of its corresponding instrument would be of great interest to the music-recording industry. The Spheres is the first dataset for SSS that includes close m-
icrophone signals and the bleeding generated by every instrument in each of them. We trained individual one-branch X-UMX models for every instrument/section microphone using the Tchaikovsky piece of The Spheres. As input, we took the mix of the signals from all the instruments at the corresponding microphone and, as target output, we took the signal of the instrument that was intended to be recorded by that microphone, so we can see the debleeding problem as an enhancement task. More advanced arch-
itectures could be used to include the signals from the other microphones as inputs of the model so it has a reference of the bleeding that it needs to remove, but we decided to keep the model as simple as possible since this is a preliminary experiment and the goal is to showcase some of the applications and properties of the dataset. As we can see in Table V, all models were able to improve the SDR of their target instruments, with very important improvements in terms of SIR and maintaining reas-
onable levels of SAR in most cases. Debleeding the microphones of the violin I and violin II sections is especially difficult, since they contain the bleeding from the other violin section that has the same timbral properties. To facilitate this case, we also trained a model to remove all the bleeding from the violin I microphone except the one coming from the violin II section (Violin I+II in Table V) and vice versa (Violin II+I); note that this is the only approach possible for the Bass I and II-
 microphones, since we do not have the isolated recordings of every bass and they played the same melody. Since The Spheres is the first public dataset to include close microphone signals, we could not evaluate our debleeding models trained on the Tchaikovsky piece against an external dataset, as was possible for the family-separation experiments with the Operation Beethoven recording. Nevertheless, we had access to raw material from private professional sessions by the studio’s owner (Odradek Rec-
ords) which, although lacking isolated tracks for objective evaluation, allowed us to subjectively confirm the same generalization issues discussed in Section V-A. As for the family separation, it seems like the Tchaikovsky piece of The Spheres dataset is enough to train models that generalize to different pieces, but not to train models that generalize to different recording conditions.
C. Discussion
One important conclusion can be drawn from the previous experiments: training separation models with signals from a single recording setup does not guarantee generalization to other setups and, therefore, models should not be trained and tested in the same setup if there is not a justified use case that makes feasible the recording of the training data in the same
conditions where the models will be used. In the previous experiments, we trained our models in the Tchaikovsky piece of The Spheres and then evaluated them in the Mozart one since our main goal was the study of the properties of the dataset, but we discourage researchers from doing this in further research works. We believe that the main interest of this dataset is in the evaluation of the models trained with different datasets, not in using it for training. The Spheres is the first dataset that -
includes microphones close to every instrument section following the same arrangement that is used in real orchestra recordings, opening the door to the evaluation of debleeding models, which is a problem that has barely been studied but has a big importance for the music recording industry. An interesting approach that has not been studied in this paper is the use of the signals from the scales and solos included in The Spheres to finetune models trained with larger synthetic datasets such as Syn-
thSOD [19]. Having the references of every instrument for a full music piece (as the Tchaikovsky piece included in The Spheres) with the same recording setup in which the model is going to be used is not a realistic assumption for most real-world applications, but recording some small extracts from every instrument section (as the scales and solos included in The Spheres) might be possible during the rehearsals of the orchestra where the separation system is going to be used.
VI. CONCLUSION
In this paper, we present The Spheres dataset, the first publicly available multitrack orchestral recordings capturing classical music through a comprehensive set of microphone signals, including both main and close spot microphones. Unlike previous datasets, this collection provides recordings as isolated stems for each instrument section from all microphone positions, accurately reflecting the conditions of real orchestral productions and offering isolated signals for research purposes. The data-
set openly publishes two complete canonical works—Tchaikovsky’s Romeo and Juliet and Mozart’s Symphony No. 40—as well as solo scales with different dynamics and playing techniques. In addition, Room Impulse Responses (RIRs) were measured for every instrument position and are released alongside the dataset, providing a detailed characterization of the recording space. We have also provided analyses of the data, including polyphony levels, instrument activity times, and acoustic properties derived f-
rom the RIRs, which illustrate both the diversity and complexity of the material. Furthermore, we performed baseline experiments on instrument-family separation from the main stereo microphones and on microphone debleeding at the spot level. While the baseline models improved separation in several cases, they also confirmed the difficulty of orchestral source separation under realistic recording conditions. Overall, The Spheres dataset represents a significant step forward for Music Source Separat-
ion (MSS) in the classical domain. By offering real, professionally recorded multitrack material with aligned main, ambient, and spot microphones, it provides the community with a unique benchmark for evaluating separation, dereverberation, localization, and immersive

11
rendering approaches. We expect this dataset to become a valuable resource for future research, helping to bridge the gap between synthetic data training and real-world orchestral applications.
APPENDIX A
This appendix provides the mathematical background for estimating RIRs using the exponential sine sweep (ESS) technique and details a modified procedure developed to address corruption in the reference sweep signal. Estimating the RIR with ESS involves exciting the system with a test signal defined as:
x(t) = sin


2πf1T
ln f2
f1
e
t
T ln f2
f1 − 1

 (1)
where f1 and f2 are the starting and stopping sweep frequencies measured in Hz, T is the sweep duration in seconds and
ln f2
f1 is known as the sweep rate. These parameters define the ESS design. An inverse filter xinv(t) is designed so that its convolution with x(t) approximates a delayed Dirac delta:
x(t) ∗ xinv(t) ≈ δ(t − t0) (2)
where ∗ denotes linear convolution, δ(t) is the Dirac delta function, and t0 is a time delay. The closed-form expression of the inverse filter is:
xinv(t) = x(T − t)e− t
T ln f2
f1 (3)
The inverse filter described in Eq. 3 is computed by time reversing the original ESS, x(t), delaying the result to obtain a casual signal and apply an amplitude modulation with a 6 dB/octave gain [43]. By convolving each recorded microphone signal y(t) with this inverse filter xinv(t), the RIR can be extracted:
r(t) = y(t) ∗ xinv(t) = h(t − t0) + η(t) (4)
where h(t) is the delayed linear RIR, and η(t) contains higherorder distortion products that appear earlier in time and can be separated via time-windowing. In our measurements, the reference ESS signal was corrupted from improper time-stretching and downsampling, which introduced spectral distortion and phase misalignment relative to the designed ESS parameters. Consequently, the original analytical inverse could not be used and a data-driven inverse filter was required. To address this, we compu-
ted an equivalent inverse filter in the frequency domain. Let x[n] be the discrete, corrupted ESS signal and δ[n − n0] a delayed discrete delta function. The inverse filter was computed as:
xinv[n] = R DF T −1 DF T {δ[n − n0]}
DFT {x[n]} (5)
where R indicates real part, DF T and DF T −1 denote the DFT and IDFT operators respectively.
Fig. 10. Comparison between the theoretical and proposed inverse filters. Topleft: Theoretical inverse filter derived from known ESS parameters. Top-right: Linear convolution of the reference sweep with the theoretical inverse filter, showing the expected delayed impulse. Bottom-left: Inverse filter computed in the frequency domain as described in eq. 5. Bottom-right: Convolution result using the proposed inverse filter, demonstrating preservation of the delayed impulse property in eq. 2.
Fig. 11. Frequency-domain validation of the proposed inverse filter. The plots show the Bode-style magnitude (top) and phase (bottom) responses of: the reference ESS (blue), the theoretical inverse filter (orange), the proposed frequency-domain inverse filter (green), and the convolution results for both inverse filters (red and purple). The magnitude response is flat across the entire frequency range, confirming accurate compensation of the sweep spectrum. Minor phase differences are observed but-
 are consistent between the two, demonstrating that the proposed inverse filter preserves the desired convolution property.
To validate that the inverse filter computed in the frequency domain preserves the key convolution property in Eq. 2, we compared it against the theoretical inverse filter derived from known ESS parameters. The reference sweep design parameters (see 1) are f1 = 1 Hz, f2 = 48000 Hz, T = 1 s, with a sampling rate of 96000 Hz. Figure 10 shows both inverse filters and their corresponding convolution results with the reference sweep. Figure 12 shows the computed inverse filter for the corrupted sweep u-
sed in the actual room measurements. Since the sweep’s design parameters are unknown, the theoretical inverse filter cannot be obtained for direct comparison. Nevertheless, the convolution result (left) exhibits a sharp, delayed impulse, and the magnitude response of the convolution (green, top-right) is generally flat, confirming that the proposed approach remains effective. Minor ripple in the magnitude response indicates some expected coloration in the estimated RIR. The phase response (bottom--
right) closely resembles those presented in Figure 11, reinforcing the validity of the

12
Fig. 12. Inverse filter computation and validation for the corrupted ESS used in the actual measurements. Left: Result of the linear convolution between the corrupted reference sweep and its computed inverse filter, showing the expected delayed impulse. Top-right: Magnitude responses of the corrupted sweep (blue), the computed inverse filter (orange), and their convolution result (green). The green trace is generally flat but exhibits some frequencydependent ripple, which may introduce slight colo-
ration into the estimated RIR. Bottom-right: Corresponding phase responses.
frequency-domain inverse filter for practical use.
ACKNOWLEDGMENT
This work was supported by “REPERTORIUM” Project under Grant Agreement 101095065. Horizon Europe. Cluster II. Culture, Creativity and Inclusive Society. Call HORIZONCL2-2022-HERITAGE-01-02. The authors wish to acknowledge CSC—IT Center for Science, Finland, for computational resources. The authors thank the Colibr`ı Ensemble musicians for their participation and for granting consent for the use and open distribution of their recordings for research purposes.
REFERENCES
[1] Z. Rafii, A. Liutkus, F.-R. St ̈oter, S. I. Mimilakis, and R. Bittner, “MUSDB18-HQ - an uncompressed version of musdb18,” Dec. 2019. [Online]. Available: https://doi.org/10.5281/zenodo.3338373 [2] Y. Mitsufuji, G. Fabbro, S. Uhlich, F.-R. St ̈oter, A. D ́efossez, M. Kim, W. Choi, C.-Y. Yu, and K.-W. Cheuk, “Music demixing challenge 2021,” Frontiers in Signal Processing, vol. 1, p. 808395, 2022.
[3] G. Fabbro, S. Uhlich, C.-H. Lai, W. Choi, M. Martı ́nez-Ramı ́rez, W. Liao, I. Gadelha, G. Ramos, E. Hsu, H. Rodrigues, F.-R. Sto ̈ter, A. De ́fossez, Y. Luo, J. Yu, D. Chakraborty, S. Mohanty, R. Solovyev, A. Stempkovskiy, T. Habruseva, N. Goswami, T. Harada, M. Kim, J. Hyung Lee, Y. Dong, X. Zhang, J. Liu, and Y. Mitsufuji, “The sound demixing challenge 2023 – music demixing track,” Transactions of the International Society for Music Information Retrieval, vol. 7, no. 1, p. 63–84, 2024. [4] -
E. Cano, D. FitzGerald, A. Liutkus, M. D. Plumbley, and F.-R. Sto ̈ter, “Musical source separation: An introduction,” IEEE Signal Processing Magazine, vol. 36, no. 1, pp. 31–40, 2019. [5] M. Vinyes, “MTG MASS database. [Online].” http://www.mtg.upf.edu/static/mass/resources, 2008. [6] R. M. Bittner, J. Wilkins, H. Yip, and J. P. Bello, “Medleydb 2.0: New data and a system for sustainable data collection,” ISMIR Late Breaking and Demo Papers, vol. 36, 2016.
[7] E. Manilow, G. Wichern, P. Seetharaman, and J. Le Roux, “Cutting music source separation some Slakh: A dataset to study the impact of training data quality and quantity,” in Proc. IEEE Workshop on Applications of Signal Processing to Audio and Acoustics (WASPAA). IEEE, 2019. [8] Y.  ̈Ozer, S. J. Schwa ̈r, V. Arifi-M ̈uller, J. Lawrence, E. Sen, and M. Mu ̈ller, “Piano concerto dataset (pcd): A multitrack dataset of piano concertos,” Transactions of the International Society for Music Informati-
on Retrieval, vol. 6, no. 1, pp. 75–88, 2023.
[9] A. D ́efossez, N. Usunier, L. Bottou, and F. Bach, “Music source separation in the waveform domain,” arXiv preprint arXiv:1911.13254, 2019. [10] R. Hennequin, A. Khlif, F. Voituret, and M. Moussallam, “Spleeter: a fast and efficient music source separation tool with pre-trained models,” Journal of Open Source Software, vol. 5, no. 50, p. 2154, 2020.
[11] A. D ́efossez, “Hybrid spectrogram and waveform source separation,” in Proceedings of the ISMIR 2021 Workshop on Music Source Separation, 2021. [12] S. Rouard, F. Massa, and A. De ́fossez, “Hybrid transformers for music source separation,” in ICASSP 2023 - 2023 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2023, pp. 1–5. [13] Y. Luo and J. Yu, “Music source separation with band-split rnn,” IEEE/ACM Transactions on Audio, Speech, and Language Processing, vo-
l. 31, pp. 1893–1901, 2023. [14] W. Tong, J. Zhu, J. Chen, S. Kang, T. Jiang, Y. Li, Z. Wu, and H. Meng, “Scnet: Sparse compression network for music source separation,” in ICASSP 2024 - 2024 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2024, pp. 1276–1280.
[15] W.-T. Lu, J.-C. Wang, Q. Kong, and Y.-N. Hung, “Music source separation with band-split rope transformer,” in ICASSP 2024 - 2024 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2024, pp. 481–485. [16] M. Miron, J. Janer, and E. Go ́mez, “Monaural score-informed source separation for classical music using convolutional neural networks,” in Proceedings of the 18th International Society for Music Information Retrieval Conference (ISMIR), 2017, pp. 55–62.
[17] O. Slizovskaia, G. Haro, and E. G ́omez, “Conditioned source separation for musical instrument performances,” IEEE/ACM Transactions on Audio, Speech, and Language Processing, vol. 29, pp. 2083–2095, 2021. [18] Y.  ̈Ozer and M. M ̈uller, “Source separation of piano concertos using musically motivated augmentation techniques,” IEEE/ACM Transactions on Audio, Speech, and Language Processing, vol. 32, pp. 1214–1225, 2024. [19] J. Garcia-Martinez, D. Diaz-Guerra, A. Politis, T. Virtanen, J. J. Car-
abias-Orti, and P. Vera-Candeas, “Synthsod: Developing an heterogeneous dataset for orchestra music source separation,” IEEE Open Journal of Signal Processing, vol. 6, pp. 129–137, 2025. [20] J. Fritsch, “The trios dataset,” Jul. 2022. [Online]. Available: https://doi.org/10.5281/zenodo.6797837 [21] Z. Duan and B. Pardo, “Soundprism: an online system for scoreinformed source separation of music audio,” IEEE Journal of Selected Topics in Signal Process., vol. 5, no. 6, pp. 1205–1215, 2011. [22] B. -
Li, X. Liu, K. Dinesh, Z. Duan, and G. Sharma, “Creating a multitrack classical music performance dataset for multimodal music analysis: Challenges, insights, and applications,” IEEE Transactions on Multimedia, vol. 21, no. 2, pp. 522–535, 2019. [23] J. P ̈atynen, V. Pulkki, and T. Lokki, “Anechoic recording system for symphony orchestra,” Acta Acustica united with Acustica, vol. 94, pp. 856–865, 11 2008. [24] U. Kaiser, I. Mestemacher, and M. Vieregg, “Kollektion: Operation beethoven. beethovens -
4. sinfonie in einzelstimmen!” [Online]. Available:
https://openmusic.academy/docs/4HAB9wcKyiXNGNsmkEFRXD/operationbeethoven-kooperation-der-open-music-academy-mit-der-hofkapellemuenchen, 2023.
[25] C.-Y. Chiu, W.-Y. Hsiao, Y.-C. Yeh, Y.-H. Yang, and A. W.-Y. Su, “Mixing-specific data augmentation techniques for improved blind violin/piano source separation,” in 2020 IEEE 22nd International Workshop on Multimedia Signal Processing (MMSP). IEEE, 2020, pp. 1–6.
[26] H. Kim, J. Park, T. Kwon, D. Jeong, and J. Nam, “A study of audio mixing methods for piano transcription in violin-piano ensembles,” in ICASSP 2023 - 2023 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2023, pp. 1–5.
[27] M. Miron, J. Janer Mestres, and E. Go ́mez Gutie ́rrez, “Generating data to train convolutional neural networks for classical music source separation,” in Proceedings of the 14th Sound and Music Computing Conference, 2017, pp. p. 227–33. [28] E. Tunturi, D. Diaz-Guerra, A. Politis, and T. Virtanen, “Score-informed music source separation: Improving synthetic-toreal generalization in classical music,” 2025. [Online]. Available: https://arxiv.org/abs/2503.07352 [29] E. Manilow, G. Wichern, and -
J. L. Roux, “Hierarchical musical instrument separation,” in Proceedings of the 21st International Conference on Music Information Retrieval, ISMIR 2020, 2020, pp. 376–383.

13
[30] S. Sarkar, L. Thorpe, E. Benetos, and M. Sandler, “Leveraging synthetic data for improving chamber ensemble separation,” in 2023 IEEE Workshop on Applications of Signal Processing to Audio and Acoustics (WASPAA), 2023, pp. 1–5. [31] R. Sawata, S. Uhlich, S. Takahashi, and Y. Mitsufuji, “All for one and one for all: Improving music separation by bridging networks,” in ICASSP 2021 - 2021 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2021, pp. 51–55.
[32] G. Roa Dabike, T. J. Cox, A. J. Miller, B. M. Fazenda, S. Graetzer, R. R. Vos, M. A. Akeroyd, J. Firth, W. M. Whitmer, S. Bannister, A. Greasley, and J. P. Barker, “The cadenza woodwind dataset: Synthesised quartets for music information retrieval and machine learning,” Data in Brief, vol. 57, p. 111199, 2024. [Online]. Available: https://www.sciencedirect.com/science/article/pii/S2352340924011612 [33] Lennyforever. Tchaikovsky, Romeo and Juliet, Leonard Bernstein, New York Philharmonic. [Onl-
ine]. Available: https://www.youtube.com/watch?v=BSbzyTNVB1Q [34] R. Bridgland. Mozart Symphony No 40 in G minor KV550 Leonard Bernstein. [Online]. Available: https://www.youtube.com/watch?v=p8bZ7vm4 6M [35] farina angelo, “Advancements in impulse response measurements by sine sweeps,” journal of the audio engineering society, no. 7121, may 2007. [36] I. 3382-1:2009, “Acoustics – measurement of room acoustic parameters – part 1: Performance spaces,” International Organization for Standardization, -
Geneva, Switzerland, Standard ISO 3382-1:2009, 2009. [37] C.-B. Jeon, G. Wichern, F. G. Germain, and J. Le Roux, “Why does music source separation benefit from cacophony?” in 2024 IEEE International Conference on Acoustics, Speech, and Signal Processing Workshops (ICASSPW). IEEE, 2024, pp. 873–877. [38] F.-R. St ̈oter, S. Uhlich, A. Liutkus, and Y. Mitsufuji, “Open-unmix-a reference implementation for music source separation,” Journal of Open Source Software, vol. 4, no. 41, p. 1667, 2019. [39] M.-
 Pariente, S. Cornell, J. Cosentino, S. Sivasankaran, E. Tzinis, J. Heitkaemper, M. Olvera, F.-R. Sto ̈ter, M. Hu, J. M. Mart ́ın-Do ̃nas, D. Ditter, A. Frank, A. Deleforge, and E. Vincent, “Asteroid: the PyTorch-based audio source separation toolkit for researchers,” in Interspeech 2020, Shanghai, China, 2020. [40] F.-R. Sto ̈ter and A. Liutkus, “museval 0.3.0,” Aug. 2019. [Online]. Available: https://doi.org/10.5281/zenodo.3376621 [41] J. Le Roux, S. Wisdom, H. Erdogan, and J. R. Hershey, “Sdr–h-
alf-baked or well done?” in ICASSP 2019-2019 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP). IEEE, 2019, pp. 626–630. [42] E. Vincent, R. Gribonval, and C. Fe ́votte, “Performance measurement in blind audio source separation,” IEEE transactions on audio, speech, and language processing, vol. 14, no. 4, pp. 1462–1469, 2006. [43] B. Delvaux and D. M. Howard, “Using an exponential sine sweep to measure 3d printed vocal tract resonances,” in The 21st International CO-
ngress on Sound and Vibration, 2014. [Online]. Available: https://api.semanticscholar.org/CorpusID:55646202

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:39.991Z
- **Text Length:** 62314 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 13 of 13
