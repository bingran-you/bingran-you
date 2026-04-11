# PDF Document: Plaja-Roglans et al. - 2025 - Generating Separated Singing Vocals Using a Diffusion Model Conditioned on Music Mixtures.pdf

**File Path:** Plaja-Roglans et al. - 2025 - Generating Separated Singing Vocals Using a Diffusion Model Conditioned on Music Mixtures.pdf

**Processed Date:** 2026-02-10T18:15:38.674Z

**File Size:** 928.38 KB

**Total Pages:** 5

**Extracted Pages:** 5

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3777

**Title:** Generating Separated Singing Vocals Using a Diffusion Model Conditioned on Music Mixtures

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Generating Separated Singing Vocals Using a Diffusion Model
Conditioned on Music Mixtures
Gen ́ıs Plaja-Roglans1,2, Yun-Ning Hung1, Xavier Serra2, Igor Pereira1
1Music.AI, Salt Lake City, USA 2Music Technology Group, Universitat Pompeu Fabra, Spain
Abstract—Separating the individual elements in a musical mixture is an essential process for music analysis and practice. While this is generally addressed using neural networks optimized to mask or transform the time-frequency representation of a mixture to extract the target sources, the flexibility and generalization capabilities of generative diffusion models are giving rise to a novel class of solutions for this complicated task. In this work, we explore singing voice separation from real mus-
ic recordings using a diffusion model which is trained to generate the solo vocals conditioned on the corresponding mixture. Our approach improves upon prior generative systems and achieves competitive objective scores against non-generative baselines when trained with supplementary data. The iterative nature of diffusion sampling enables the user to control the quality-efficiency trade-off, and also refine the output when needed. We present an ablation study of the sampling algorithm, highlightin-
g the effects of the user-configurable parameters.
1. INTRODUCTION
Music source separation (MSS) is the task of estimating the individual elements in a music mixture [1], a crucial process for music creation and analysis [2]. MSS is typically addressed using neural networks that mask or transform the time-frequency representation of a mixture to extract individual sources [3]. However, this may be limited by the prominent source overlap in music, and further refinement is normally beneficial [4]–[7]. Moreover, handling phase adds an extra step that is prone to in-
troducing artifacts [8]. Finally, these systems rely on access to a complete set of isolated source recordings that linearly sum to the mixture, however, this is often difficult to collect [9]. Interestingly, deep generative modeling has advanced notably with the advent of denoising diffusion probabilistic models (DDPM) [10]. The iterative sampling scheme of DDPM has shown capability to address audio inverse problems [11], [12], has been leveraged for refining predictive MSS systems [13], and has -
recently outperformed prior generative approaches for this problem [9], [14]–[16]. In fact, DDPM are considered a promising technology for MSS given its flexibility and generalization [17]. However, existing DDPM for separation primarily focus on synthetic instrumental music and have room for improvement on efficiency and performance [18]–[20]. In this work, we explore again the potential of DDPM to advance towards competitive generative-based MSS. Specifically, we address the following goals: (1)-
 separating the singing voice—a complex but important source—from real music mixtures, while solely requiring corresponding pairs of vocals and mixtures for training, (2) developing a lighter model that can sample satisfactory generations in fewer sampling steps than prior work [9], [15], [18], and (3) exploring a flexible sampling process to refine the fidelity of the generated vocals without further training or any additional post-processing system. The proposed approach is based on a generator -
network that is trained to sample solo singing voice signals, guided by a coupled conditioning module that injects music mixtures into the generator—steering the generation toward vocals consistent with the mixture. We employ our own tailored version of the conditioning module in [12]. The trained system is able to generate acceptable separations in ≈ 20 diffusion sampling steps. However, we improve the generated
vocals relying on an ablation study on the sampling algorithm, which includes modifications to refine the separations in a chosen frequency range, with no need for an additional system to process the outputs. Our system outperforms existing generative baselines for vocal separation on open multi-stem datasets. If trained with supplementary data, we achieve competitive scores for objective separation metrics against the non-generative literature—despite potential inherent penalization [15]—showing -
remarkable cleanliness and correspondence to the reference mixture. We make our code available in a modular fashion to build our system but also to perform further research, together with further resources.1
2. METHOD
2.1. Diffusion process
We leverage a diffusion process defined by a Markov chain of T steps that converts a 2-channel audio signal xσ0 ∈ R2×D ∼ p(xσ0 ), being p a given data distribution from where xσ0 is drawn and D audio length in samples, into a sample of Gaussian noise when reaching step T . This process is controlled by σt, an instance from a noise schedule of T ordered, ascending values ∈ [0, 1]. We adopt v-objective diffusion [21], which defines an arbitrary forward diffusion step as:
xσt = ασt xσ0 + βσt ε, (1)
where ε ∈ R2×D ∼ N (0, 1) is a random Gaussian sample. To compute ασt and βσt , we define φt := π
2 σt, and obtain the corresponding trigonometric values: ασt := cos(φt) and βσt := sin(φt). In essence, the forward diffusion process incrementally introduces small amounts of Gaussian noise to xσ0 until reaching an isotropic Gaussian sample at step T . Simultaneously, a neural network is trained to learn to reverse this process. Intuitively, the network is learning to map points from a Gaussian distribution to an approximated distribution pˆ(xσ0 ), from where observations can later be sampled.
Let vσt ∈ R2×D be the velocity objective, which corresponds to an unified prediction target combining noise and data to guide diffusion more effectively. The objective vσt is formally computed as:
vσt = ασt ε − βσt xσT (2)
To optimize the v-objective diffusion network mθ with trainable parameters θ, we refer to the following loss:
Ldiff = Et∼[0,T ],σt,xσt ||mθ(xσt , σt, c) − vσt ||2
2 , (3)
where E denotes expectation. The input signal c ∈ R2×D is the conditioning signal, which is given to the diffusion model to guide the generation process toward a desired output. While MSS has been addressed by unconditionally training a diffusion system and then conditioning the posterior at inference [18], we architecturally condition the generation process both at training and sampling, prioritizing quality, isolation, and stronger plausibility with the conditioning mixture given, as input, by t-
he user [20].
1https://github.com/weAreMusicAI/dmx-diffusion
arXiv:2511.21342v1 [cs.SD] 26 Nov 2025

Fig. 1: Diagram of the system. The conditioner extracts multi-resolution features from the input mixture c. The generator, conditioned on these features, learns the score function to iteratively denoise a Gaussian sample xσT over T steps, producing the separated vocal signal. Cross-hatched boxes denote components used only during training; thin black dashed lines represent skip connections; the gray dashed line illustrates the inference denoising trajectory.
2.2. Sampling process
The sampling process progressively models a sample drawn from approximated distribution pˆ(xσ0 ) by denoising a Gaussian noise instance, following the gray dashed line in Figure 1. Prior audio generation works achieved satisfactory balance between sampling steps and generation quality using the Denoising Diffusion Implicit Models (DDIM) sampler [22]. The DDIM sampling process is performed using arbitrary T , and initiates at σT = 1 [23]. Increasing T provides a more granular sampling, which to som-
e extent results into higherquality generations. However, architecturally conditioned DDPM for inverse tasks may require small T [12]. To run a given sampling step we first run a forward pass of diffusion model mθ to predict vˆσt :
vˆσt = mθ(xσt , σt, c), (4)
now using vˆσt , we compute the estimated target sample at t = 0, denoted xˆσ0 , and εˆσt ∈ R2×D, corresponding to the noise at step t:
xˆσ0 = ασt xσt − βσt vˆσt (5)
εˆσt = βσt xσt + ασt vˆσt (6)
For t > 0, the input for the next sampling step is defined as:
xˆσt−1 = ασt−1 xˆσ0 + βσt−1 εˆσt , (7)
and for t = 0, we keep the output of Equation 5. Note that this sampling process is inherently deterministic. This enables the generation of high-fidelity outputs in significantly less steps, making the DDIM sampler an ideal suit for our well-defined problem. However, we hypothesize that the rigidness of this iterative modeling process may lead to erroneous or failed generation of parts of the target signal, which may not be recoverable through the inherent noise that is being predicted and summed-
 back. We propose to introduce stochasticity during sampling—as formerly done for DDIM sampling for music and image to enrich creativity [23]aiming at providing the system with extra, fresh material to mitigate over-modeling and potentially restore lost signal components.
To introduce the random refinement noise, we first compute the refinement scaling factor δt−1, and rescale βσt−1 to prevent the overall noise from being excessively strong for the model to process [23]:
δσt−1 = η
s
βσ2t
βσ2t−1
s
1 − α2σt−1
α2σt
(8)
β′
σt−1 =
q
βσ2t − δσ2t−1 , (9)
where η parametrizes the stochasticity level. We enable the option to filter the stochastic refinement noise. While one could chose any frequency range, we propose to use a 4th-order Butterworth highpass filter (HPF) with cutoff frequency fc. Therefore, we attenuate the stochasticity in the low- and mid-frequency range and confine the refinement on the high-frequency end of the spectrum, which we hypothesize to be more challenging to generate, and is where the waveform separation artifacts [24] an-
d the muffled effect from frequency masking models typically lie [6]. Prior work introduced global high-frequency emphasis via purple-noise driving within the diffusion sampling process [25]. In contrast, we apply controlled filtered stochastic noise at high frequencies targeting a more tailored refinement without modifying the underlying diffusion solver. Now, being εref ∈ R2×D ∼ N (0, 1) the refinement noise, we reformulate Equation 7:
xˆσt−1 = ασt−1 xˆσ0 + β′
σt−1 εˆσt + δσt−1 HPF(εref, fc), (10)
here, HPF(εref, fc) is variance-normalized, ensuring its total power aligns with the theoretical requirements of DDIM sampling.
2.3. Generation network
To approximate p(xσ0 ) we use a 1D convolutional U-Net, given their established reliability for MSS and diffusion modeling [10] and ability to preserve structure [1]. It corresponds to the network in the right in Figure 1. Each level of the generator U-Net includes b residual blocks of 2 convolutional layers. Each convolutional layer is preceded by group normalization and SiLU activation. After these, selfattention is optionally included to focus on the time-wise relationships,

enriching the context. To inject the diffusion step σt, we compute 1024channeled random Fourier feature embeddings, which are processed using a 3-layer multi-layer perceptron with GELU activations, and finally injected using FiLM layers [26]. The embedded diffusion step is injected after the two convolutional layers. The last component of a generator block is an n × n convolutional layer to downsample or upsample the feature vectors in the encoder and decoder respectively. Factor n indicates the -
compression or expansion ratio. In case no down or upsampling is desired for a given block, this layer is inserted with n = 1. If n > 1, the feature channels are doubled when downsampling, and divided by 2 otherwise.
2.4. Conditioner network
To process the conditioning signal c, we use a coupled network based on the conditioner module in UNIVERSE [12], for which we build our version from scratch while proposing modifications motivated by the MSS literature. It corresponds to the left system in Figure 1. General structure. The conditioner is an autoencoder composed of residual convolutional blocks. In this case, we strictly have a single block per depth level. These blocks are composed of three convolutional layers, each preceded by a -
PReLU activation and group normalization, the latter providing a more stable training. We propose to introduce a time-wise self-attention mechanism to certain depth levels, enabling the model to capture long-range dependencies. Finally, a convolutional layer is used to compress or expand the time resolution of the feature vectors. The feature channels are converted accordingly following the exact same principle than the generator U-Net (see last paragraph of Sec. 2.3), and always by a factor of 2.-
 Skip-connections. U-Net-type skip connections are not used in the conditioner, aiming at reducing the flow of interferences to the final conditioning signal. However, these are replaced by auxiliary connections that extract the output from each encoder block, process it using a 1 × 1 convolutional layer preceded by group normalization and ReLU activation, and inject the resulting vector into the bottleneck via summation [12]. These are crucial for preserving structure and context, which is essent-
ial for MSS [1]. The feature vectors for the auxiliary connections are retrieved from the output of each encoder block, after the residual connection. Conditioning mechanism. To inject the condition to the generator, we rely on a multi-resolution conditioning approach [12], [27], which assumes that both generator and conditioner are autoencoders that share depth and time compression ratios at all levels. We retrieve an embedding from each decoder block in the conditioner (we propose to retrieve it-
 from the block output). We propose to inject it to the corresponding level in both the encoder and decoder of the generator, aiming at further guidance. Auxiliary 1 × 1 convolutions with no padding are used to match the feature channels, which may not necessarily be the same between generator and conditioner in a given level of network depth. We propose to inject the multi-resolution embeddings by concatenating along the feature channels, followed by a 1 × 1 convolution to dynamically merge the f-
eatures. Further upgrades. We propose to enhance the conditioner network by inserting a 6-layer transformer with rotary embeddings [28], leveraging their effectiveness in modeling time-wise dependencies for MSS even using < 10h of training data [29]. A transformer has been also introduced in the bottleneck of a U-Net [30], in this case providing notable improvement when trained with extra data. We use flash-attention [31] to alleviate the increase of computational demands.
2.5. Auxiliary loss terms
We incorporate two auxiliary loss terms out of the primary gradient flow, enabling end-to-end training of the entire system while opti
mizing the conditioner for separation, similarly to [12]. Let Cenc and Cdec be the conditioner encoder and decoder respectively. We define a 1 × 1 convolutional layer HN : RN×B → R2×D, where N are feature channels and B feature size. We define the first loss term as:
L2
lat = 1
D
D
X
d=1
∥xσ0d − HN (Cenc(c)d∥2 (11)
This loss term is aimed at optimizing the compressed latent vector towards the separated vocal by comparing xˆlat ∈ R2×D obtained using HN and the ground-truth vocals using using L2 loss. A second loss term denoted L2
rec is calculated in the decoder output, penalizing again the training process if the embedding contains non-vocal components, and functioning also as autoencoder reconstruction loss:
L2
rec = 1
D
D
X
d=1
∥xσ0d − HN (Cdec(Cenc(c))d∥2 (12)
3. EXPERIMENTS
3.1. Experimental setup
Both generator and conditioner have seven depth levels, with downsampling factors {1, 2, 4, 1, 4, 1, 4}, factor of 1 indicating no compression or expansion. The generator has a single block in its first three levels, while the remaining levels contain two blocks each. The self-attention mechanism is applied to the four deepest levels of both networks. We hypothesize that computing an effective multi-resolution embedding is more challenging than learning the score function. Therefore, we allocate g-
reater capacity to the conditioner, using 128 feature channels at the first level while the generator network is designed with 32 input channels. The feature channels are doubled (or halved in the decoder) at the network depth levels corresponding to a downsampling factor > 1. With that in mind, the convolutional heads for the auxiliary losses are defined as H2048 for L2
lat, and H128 for L2
rec. The multiresolution conditioning is injected to the four deepest levels of the generator, which are those including time-wise self-attention. We operate on stereo audio at a rate of 44.1kHz. Assuming that generating silence is simpler, during training we discard 95% of the silent vocal samples. We use data augmentation: polarity inversion, channel flipping, pitch shifting, and stem remixing. We use batch size of 32, AdamW optimizer with a weight decay of 1 ∗ 10−3, and cosine annealing schedul-
er with linear warm-up to stabilize the training. We train the system for 1M steps. It takes a week on four A100 GPU. The conditioner module has 82.9M parameters, and the generator 15.9M. To sample, we process the tracks in 3s chunks using 20% overlap-add, where we find an optimal computation vs. quality compromise.
3.2. Datasets
DDPM benefit greatly from large training data [10], however, multistem datasets are significantly expensive to collect. To evaluate the learning capacity of our system on open data, we train our system using musdb18hq [32], which includes 100 training tracks (≈ 6h). Nonetheless, we also experiment with a private collection of ≈ 400h of multi-stem music including pairs of mixtures and singing vocals, aiming at exploring the full potential of our system. Related studies on diffusion models for audio-
 have relied on collections notably larger than ours (e.g. 1, 500h [12], 2, 500h [22], or 19, 500h [33]).
3.3. Evaluation procedure
We compute the utterance-level Signal-to-Distortion ratio (SDR) and report the median over the musdb18hq testing set, following practices of prior generative separation work [9], [18]. We rely on the implementation from the Sound Demixing Challenge 2023 [3].

Table 1: Median utterance-level SDR on the musdb18hq testing set. Comparison of our system with generative baselines and the IRM oracle. We provide number of required forward passes during inference (T) and model parameters (#Params, approximated to the nearest million). All models are trained using musdb18hq, unless indicated in the Extra data column. HTDemucs [30] serves as the non-generative reference.
Model Gen? T #Params Extra data SDR (dB)
IRM oracle [34] – ✗ N/A N/A 9.43
GAN-prior [15] ✓ 1000 121M ✗ -0.44 InstGlow [9] ✓ 150 13M ✗ 3.46 MSDM [18] ✓ 150 405M ✗ 3.64
Diff-DMX-RT-musdb ✓ 50 99M ✗ 5.38 Diff-DMX-extra ✓ 50 71M ≈400h 6.00 Diff-DMX-RT-extra ✓ 50 99M ≈400h 8.77
HT-Demucs [30] ✗ 1 346M ✗ 7.93 HT-Demucs [30] ✗ 1 346M ≈53h 9.37
To account for the stochasticity in the sampling process if η > 0, we evaluate each model five times and report the mean. We test three versions of our system: Diff-DMX-RT-musdb (trained using musdb18hq plus self-attention and rotary transformer in the conditioner), Diff-DMX-extra (private collection, no attention nor enhanced bottleneck in the conditioner), and Diff-DMX-RT-extra (private collection plus attention and rotary transformer). We compare against GAN-prior [15], InstGlow [9], and MSDM [-
18], all generating waveforms. We train MSDM for vocal separation using musdb18hq and following the instructions in the companion repository, since no weights to separate the singing voice are available online.
4. RESULTS
4.1. Separation performance
See Table 1 for the objective separation evaluation and comparison. SDR. Under the same training data, our system outperforms the generative baselines. Despite the disadvantage of generative models on SDR [14], [15], our system supplemented with additional training data achieves competitive performance against HT-Demucs, the nongenerative reference. The combination of wider context and the proposed upgrades in the conditioner network provide an important performance boost, objectively showing the -
generative and separation potential of the proposed system. The proposed upgrades allow the Diff-DMX-RT-musdb model to perform comparably to Diff-DMXextra—which uses additional training data but does not incorporate the network modifications—resulting only in a difference of 0.62dB. Efficiency. Our model is the second lightest and is the generative system using less sampling steps to reach the performance peak. Inspired by [18], we calculate the inference time for a 12s chunk. In a 12GB GPU, InstG-
low needs 16.50 ± 0.12s and MSDM 11.95 ± 0.14s, while our top system using T = 50 takes 8.45 ± 0.03s, being the fastest among the generative models with off-the-shelf inference code. SIR. Prior generative separation works report Signal-to-Interference Ratio to study how clean from accompaniment the vocal estimations are [14], [15]. Diff-DMX-RT-extra reaches 21.37dB and levels the IRM oracle, which scores 20.78dB. Ultimately, the generator network is trained to model the distribution of solo vocals-
. The results suggest that this design choice contributes to the achieved level of cleanliness.
4.2. Sampling process ablation
See the sampling ablation study in Table 2. Sampling steps. As observed for T = 100, increasing the number of steps does not necessarily yield better separation quality. In contrast, using 50 steps consistently improves over 20 steps. However, this
Table 2: Ablation study on the sampling algorithm. We evaluate the number of sampling steps (T ), level of stochasticity (η), and cutoff frequency for the added stochastic noise (fc). We use Diff-DMX-RT-extra. T = 20
η fc SDR (dB)
✗ ✗ 6.86 0.2 ✗ 6.85 0.2 600 6.97 0.2 2k 7.36 0.2 5k 7.55 0.4 5k 8.26
T = 50
η fc SDR (dB)
0.2 ✗ 7.17 0.4 ✗ 7.25 0.4 600 7.59 0.4 2k 8.64 0.4 5k 8.77 0.8 5k 8.33
T = 100
η fc SDR (dB)
0.4 5k 8.52 0.8 5k 7.20
is not by a large margin, suggesting that architecturally conditioned diffusion together with the DDIM sampler have the potential to model the target in a few steps, while later iterations mainly refine [12]. Stoch. refinement noise: strength (η) and range (fc). In terms of η, the most significant improvement is found at 0.4, particularly when the stochastic noise is high-pass filtered. While η = 0.2 provides a more moderated refinement, higher stochasticity (e.g. η = 0.8) deviates the generation -
too strongly from the expected output. Introducing stochasticity uniformly across the entire frequency range does not yield a positive effect on generation quality. In contrast, we achieve actual improvement when the refinement noise is high-pass filtered. We observe that attenuating the stochastic noise only below 600Hz (where the fundamental frequency of modern melodies is normally found) provides a limited improvement, but we consistently enhance the results by moving the cutoff to fc = 2kHz an-
d 5kHz. This suggests that moderately introducing extra stochastic noise in the high-frequency end—where the model is potentially less accuratecan be beneficial. The high-frequency vocal content is more sparsely distributed and have lower energy, and the model can exploit the added variability to increase the overall fidelity. Meanwhile, attenuating the noise in the low- and mid-frequency end contributes to retain structure where the system shows higher capabilities, contributing also to cleaner g-
eneration overall for smaller T or for cases where the model does underperform. Nonetheless, the proposed frequency-selective regularization is not always capable of completely preventing high-frequency artifacts arising particularly in tracks with intrusive accompaniments or uncommon vocal effects. This is a remaining challenge to address in further work.
5. CONCLUSIONS
Deep generative modeling is transforming music production, primarily through music generation systems. However, its potential for building assistive tools for music creation and analysis remains less explored. In this work, we examine how diffusion models can be used to perform vocal source separation directly in the waveform domain, conditioning on mixture audio. We leverage the condition processing module in UNIVERSE, a diffusion model for speech enhancement, for which we build our alternative f-
rom scratch. We tune the sampling process and perform an ablation study to refine the separations. Our system outperforms existing generative separation models on open multistem music datasets, and achieves competitive performance against non-generative models when trained with supplementary data. We report strong performance on interference removal. In contrast to non-generative and mask- or transformation-based separation systems operating on time-frequency representations, the configurable samp-
ling algorithm allows the user to explore different sampling parameters to tune the generated result. Users may prioritize, depending on particular needs, quality or inference time or vice versa, and may also refine the separations. We publish a code base to perform further research.

REFERENCES
[1] A. Jansson, E. Humphrey, N. Montecchio, R. Bittner, A. Kumar, and T. Weyde, “Singing voice separation with deep U-Net convolutional networks,” in 18th Int. Society for Music Information Retrieval Conf. (ISMIR), Suzhou, China, 2017, pp. 745–751. [2] G. Plaja-Roglans, M. Miron, A. Shankar, and X. Serra, “Carnatic singing voice separation using cold diffusion on training data with bleeding,” in 24th Int. Society for Music Information Retrieval Conf. (ISMIR), Milano, Italy, 2023. [3] G. Fabbro, S.-
 Uhlich, C.-H. Lai, W. Choi, M. Martı ́nez-Ramı ́rez, W. Liao, I. Gadelha, G. Ramos, E. Hsu, H. Rodrigues et al., “The Sound Demixing Challenge 2023: Music Demixing Track,” Transactions of the Int. Society for Music Information Retrieval, 2023.
[4] R. Hennequin, A. Khlif, F. Voituret, and M. Moussallam, “Spleeter: a fast and efficient music source separation tool with pre-trained models,” Journal of Open Source Software, pp. 1–4, 2020.
[5] N. Takahashi and Y. Mitsufuji, “D3Net: densely connected multidilated DenseNet for music source separation,” arxiv:2010.01733, 2020. [6] N. Schaffer, B. Cogan, E. Manilow, M. Morrison, P. Seetharaman, and B. Pardo, “Music separation enhancement with generative modeling,” in 23th Int. Society for Music Information Retrieval Conf. (ISMIR), Bengaluru, India, 2022. [7] S. Lutati, E. Nachmani, and L. Wolf, “Separate and diffuse: Using a pretrained diffusion model for better source separation,” in 1-
2th Int. Conf. on Learning Representations, 2024.
[8] A. Jansson, R. M. Bittner, N. Montecchio, and T. Weyde, “Learned complex masks for multi-instrument source separation,” arXiv:2103.12864, 2021. [9] G. Zhu, J. Darefsky, F. Jiang, A. Selitskiy, and Z. Duan, “Music source separation with generative flow,” IEEE Signal Processing Letters, vol. 29, p. 2288–2292, 2022. [10] P. Dhariwal and A. Nichol, “Diffusion Models Beat GANs on Image Synthesis,” in 35th Conf. on Neural Information Processing Systems (NeurIPS 2021), 2021.
[11] E. Moliner, J. Lehtinen, and V. Va ̈lima ̈ki, “Solving audio inverse problems with a diffusion model,” in Int. Conf. on Acoustics, Speech and Signal Processing (ICASSP), Rhodes, Greece, 2023.
[12] J. Serra`, S. Pascual, J. Pons, R. O. Araz, and D. Scaini, “Universal speech enhancement with score-based diffusion,” arxiv:2206.03065, 2022. [13] G. Plaja-Roglans, M. Miron, and X. Serra, “A diffusion-inspired training strategy for singing voice extraction in the waveform domain,” in Proc. of the 23nd International Society for Music Information Retrieval Conference (ISMIR 2022), Bengaluru, India, pp. 685–893. [14] P. Chandna, M. Blaauw, J. Bonada, and E. Go ́mez, “Content based singing voice-
 extraction from a musical mixture,” in Int. Conf. on Acoustics, Speech and Signal Processing (ICASSP), Online, 2020, pp. 781–785. [15] V. S. Narayanaswamy, J. J. Thiagarajan, R. Anirudh, and A. Spanias, “Unsupervised audio source separation using generative priors,” in Annual Conf. of the Int. Speech Communication Assoc. (INTERSPEECH), Online, 10 2020, pp. 2657–2661. [16] E. Postolache, G. Mariani, M. Mancusi, A. Santilli, L. Cosmo, and E. Rodola`, “Latent autoregressive source separation,” in AA-
AI Conf. on Artificial Intelligence, 2023, pp. 9444–9452.
[17] S. Araki, N. Ito, R. Haeb-Umbach, G. Wichern, Z.-Q. Wang, and Y. Mitsufuji, “30+ years of source separation research: Achievements and future challenges,” in IEEE Int. Conf. on Acoustics, Speech and Signal Processing (ICASSP), Hyderabad, India, 2025. [18] G. Mariani, I. Tallini, E. Postolache, M. Mancusi, L. Cosmo, and E. Rodola`, “Multi-source diffusion models for simultaneous music generation and separation,” in The 12th Int. Conf. on Learning Representations, 2024. [19] T. Karchkhadze, M. -
Izadi, and S. Dubnov, “Simultaneous music separation and generation using multi-track latent diffusion models,” in Int. Conf. on Acoustics, Speech and Signal Processing (ICASSP), Hyderabad, India, 2025. [20] G. Plaja-Roglans, Y.-N. Hung, X. Serra, and I. Pereira, “Efficient and fast generative-based singing voice separation using a latent diffusion model,” in Proc. of the Int. Joint Conf. on Neural Networks (IJCNN), Rome, Italy, 2025. [21] T. Salimans and J. Ho, “Progressive distillation for fast -
sampling of diffusion models,” in Int. Conf. on Learning Representations (ICLR), 2022. [22] F. Schneider, O. Kamal, Z. Jin, and B. Scho ̈lkopf, “Mouˆsai: Text-to-music generation with long-context latent diffusion,” 2023.
[23] J. Song, C. Meng, and S. Ermon, “Denoising diffusion implicit models,” in Int. Conf. on Learning Representations (ICLR), 2021.
[24] D. Stoller, S. Ewert, and S. Dixon, “Wave-U-Net: A multi-scale neural network for end-to-end audio source separation,” in 19th Int. Society for Music Information Retrieval Conf. (ISMIR), Paris, France, 2018, pp. 334–340. [25] H. Tachibana, M. Inahara, M. Go, Y. Katayama, and Y. Watanabe, “Diffusion generative vocoder for fullband speech synthesis based on weak third-order sde solver.” in Annual Conf. of the Int. Speech Communication Assoc. (INTERSPEECH), Incheon, Korea, 2022, pp. 1641–1645. [-
26] E. Perez, F. Strub, H. de Vries, V. Dumoulin, and A. C. Courville, “Film: Visual reasoning with a general conditioning layer,” in AAAI, 2018. [27] L. Zhang, A. Rao, and M. Agrawala, “Adding conditional control to text-to-image diffusion models,” in IEEE/CVF Int. Conf. on Computer Vision, 2023, pp. 3836–3847. [28] J. Su, M. Ahmed, Y. Lu, S. Pan, W. Bo, and Y. Liu, “Roformer: Enhanced transformer with rotary position embedding,” Neurocomputing, vol. 568, 2024. [29] W.-T. Lu, J.-C. Wang, Q. Kong,-
 and Y.-N. Hung, “Music source separation with band-split rope transformer,” in SDX Workshop, 2023. [30] S. Rouard, F. Massa, and A. Defossez, “Hybrid transformers for music source separation,” arxiv:2211.08553, 2022. [31] T. Dao, D. Y. Fu, S. Ermon, A. Rudra, and C. Re ́, “FlashAttention: Fast and memory-efficient exact attention with IO-awareness,” in Advances in Neural Information Processing Systems, 2022.
[32] Z. Rafii, A. Liutkus, F.-R. St ̈oter, S. I. Mimilakis, and R. Bittner, “MUSDB18 - a corpus for music separation,” Dec. 2017. [Online]. Available: https://doi.org/10.5281/zenodo.1117372 [33] Z. Evans, C. Carr, J. Taylor, S. H. Hawley, and J. Pons, “Fast timingconditioned latent audio diffusion,” in Int. Conf. on Machine Learning (ICML), Vienna, Austria, 2024. [34] F. R. St ̈oter, A. Liutkus, and N. Ito, “The 2018 Signal Separation Evaluation Campaign,” Lecture Notes in Computer Science, vol. 1-
0891, pp. 293–305, 2018.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:38.674Z
- **Text Length:** 31698 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 5 of 5
